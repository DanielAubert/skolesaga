import type { QuizQuestion } from './quiz-data';

const quizData_inter1000: Record<string, QuizQuestion[]> = {
  'inter1000-0-1': [
    {
      question: "Hvordan er skoleeksamen i INTER1000 satt sammen i dagens format?",
      options: ["Fire brede oppgaver merket A til D, én fra hver fagsøyle, der kandidaten besvarer to av dem", "Fire brede oppgaver merket A til D, én fra hver fagsøyle, der alle fire må besvares i tur og orden", "To lange oppgaver fra samme fagsøyle, der kandidaten besvarer begge på tre timer", "En del med lange oppgaver og en del med korte, slik formen var mellom H2015 og H2019"],
      explanation: "Dagens form er tre timer med fire brede oppgaver A til D, én per fag, der to besvares — i H2025 tre. At alle fire skal besvares er feil: valgfriheten er hele poenget. Todelingen i lange og korte oppgaver er den tidligere formen fra H2015 til H2019, som ikke lenger brukes.",
    },
    {
      question: "Hvilket ledd i en todelt oppgave avgjør karakteren?",
      options: ["Det drøftende leddet, mens det redegjørende leddet er inngangsbilletten", "Det redegjørende leddet, mens drøftingen bare gir et lite tillegg på toppen", "Begge teller nøyaktig like mye, og de vurderes helt uavhengig av hverandre", "Det avhenger av hvilket fag oppgaven kommer fra, og varierer fra sett til sett"],
      explanation: "Drøftingsleddet avgjør karakteren, men en feil eller flat redegjørelse kan ikke veies opp av god drøfting — derfor kalles den inngangsbilletten. Kravet er det samme i alle fire fagene, så det varierer verken med fag eller termin.",
    },
    {
      question: "Hva kjennetegner en ekte mekanismeforklaring?",
      options: ["Den skriver ut kjeden av årsak og virkning, ledd for ledd, i en rekkefølge som ikke kan snus", "Den gjentar utfallet med andre ord etter ordet «fordi», slik at setningen ser forklarende ut", "Den viser til et konkret historisk eksempel som belegger at sammenhengen finnes", "Den oppgir hvilken teoritradisjon påstanden hører hjemme i, og hvem som har formulert den"],
      explanation: "En mekanisme er kjeden fra årsak til virkning, og leddene kan ikke bytte plass. Å gjenta utfallet etter «fordi» er nettopp den vanligste bommen. Eksempler og teorikoblinger er verdifulle, men de hører til andre vurderingsakser enn mekanismen.",
    },
    {
      question: "Hva innebærer mildhetsforbeholdet i INTER1000?",
      options: ["At sensor ikke skal kreve juridisk stringens eller økonomisk formalisme av en førsteårsstudent", "At sensor kan se gjennom fingrene med upresise definisjoner så lenge drøftingen er god", "At karakterskalaen bare brukes fra C og oppover, siden emnet er et innføringsemne", "At kandidater med få forelesninger bak seg vurderes etter en egen og lavere karakterskala"],
      explanation: "Forbeholdet gjelder dybden i den enkelte disiplinen, ikke presisjonen: flate definisjoner plasseres fortsatt lavt, fordi presisjon er inngangsbilletten. Det finnes verken en egen skala eller et gulv ved C — vurderingen er gradert A til F for alle.",
    },
    {
      question: "Hvilke fire fagsøyler prøves i INTER1000?",
      options: ["Internasjonal politikk, internasjonal historie, internasjonal samfunnsøkonomi og folkerett", "Internasjonal politikk, statsvitenskapelig metode, samfunnsøkonomi og komparativ politikk", "Internasjonal historie, utviklingsstudier, folkerett og internasjonal politisk økonomi", "Internasjonal politikk, europastudier, internasjonal historie og internasjonal handelsrett"],
      explanation: "De fire søylene er internasjonal politikk, internasjonal historie, internasjonal samfunnsøkonomi og folkerett, og dagens sett gir én bred oppgave fra hver. Metode, utviklingsstudier og europastudier er egne emner, ikke søyler i dette.",
    },
    {
      question: "Hva er riktig om markedsmodellen med et sjokk som eksamenstema?",
      options: ["Den forekommer i 6 av 15 terminer, men i 6 av de 8 settene fra H2017 og i ingen før det", "Den forekommer i alle 15 terminene og er dermed korpusets mest stabile enkelttema", "Den forekommer bare i de aller eldste settene og er ute av bruk i dagens format", "Den forekommer i 6 av 15 terminer, jevnt fordelt over hele perioden fra H2010 til H2025"],
      explanation: "Temaet er en nyere fast post: 6 av 15 terminer totalt, men 6 av de 8 settene fra H2017 og null i de sju settene før. Verken en forekomst i samtlige terminer eller en jevn fordeling stemmer, og temaet er tvert imot svært aktuelt i dagens format.",
    },
    {
      question: "Hva er dokumentert om gjenbruk av oppgaveformuleringer i INTER1000?",
      options: ["Enkeltspørsmål gjenbrukes ordrett mellom terminer, men instruks, vekting og tid følger ikke med", "Hele oppgavesett gjenbrukes ordrett fra termin til termin, slik at det holder å pugge ett tidligere sett", "Gjenbruk forekommer bare i de korte begrepsspørsmålene, aldri i de brede oppgavene", "Gjenbruk er en antakelse boka bygger på, men den lar seg ikke belegge i oppgavesettene"],
      explanation: "Ordrett gjenbruk av enkeltspørsmål er belagt flere ganger, blant annet fra H2018 til H2022 — men H2010 og H2012 stiller de samme fem spørsmålene med ulik vekting, så rubrikken følger ikke med. Ingen to sett er identiske dokumenter, og gjenbruket rammer både korte og brede oppgaver.",
    },
    {
      question: "Hva gjelder for høsten 2020 i grunnlaget bak denne boka?",
      options: ["Terminen mangler helt — verken oppgavesett eller sensorveiledning finnes — og telles aldri med", "Terminen finnes som oppgavesett, men uten sensorveiledning, og telles derfor med halv vekt", "Terminen finnes som sensorveiledning uten eget oppgavesett, slik tilfellet er for H2021", "Terminen er tatt ut med vilje fordi eksamen den høsten ble avlyst i sin helhet"],
      explanation: "H2020 mangler i sin helhet og inngår ikke i noen teller; det eneste vi vet, er det H2021-veiledningen opplyser indirekte. H2017 er terminen som finnes som sett uten veiledning, og H2021 er veiledningen uten eget publisert sett.",
    },
    {
      question: "Hva er semesteroppgavens plass i vurderingen?",
      options: ["Den teller minst av de to delene, men inngår i én samlet karakter fra A til F", "Den er en obligatorisk innlevering som må godkjennes, men som ikke påvirker karakteren", "Den teller mest av de to delene, siden den skrives over et helt semester med veiledning", "Den erstatter skoleeksamen for de kandidatene som får den godkjent på første forsøk"],
      explanation: "Skoleeksamen teller mest og semesteroppgaven minst, og de to smelter sammen til én gradert karakter; i tillegg må de obligatoriske seminaraktivitetene være godkjent. Den er altså verken en ren godkjenningsordning eller en erstatning for skoleeksamen.",
    },
    {
      question: "Hvilken status har det korte begrepsspørsmålet i dag?",
      options: ["Det er ute av bruk som eksamensform, men begrepene lever videre i det redegjørende leddet", "Det er fortsatt en fast del av skoleeksamen, med to til tre korte spørsmål i hvert sett", "Det er ute av bruk fordi begrepene ikke lenger prøves i emnet i noen form", "Det brukes bare i semesteroppgaven, der begrepsapparatet vurderes for seg selv"],
      explanation: "Formen forsvant etter H2019 og finnes ikke i noen av de fem settene fra H2021, men begrepene prøves fortsatt — som det redegjørende leddet i de brede oppgavene. Semesteroppgaven har sin egen mal og er ikke stedet begrepsspørsmålet lever videre.",
    },
    {
      question: "Hva er feil #8 i bokas register?",
      options: ["Å overse den tverrfaglige rammen og svare bare fra den disiplinen du liker best", "Å gjengi pensum korrekt uten å drøfte det oppgaven ber om å få drøftet", "Å nevne en teoritradisjon uten å bruke den til å forklare det oppgaven spør om", "Å bruke en overdrevent ambisiøs juridisk framstilling som ender med å bomme"],
      explanation: "Feil #8 er å overse den tverrfaglige rammen. Ren gjengivelse uten drøfting er #1, teori som nevnes uten å anvendes er #4, og overdreven juridisk eller økonomisk ambisjon er #10 — alle tre er egne koder i det samme registeret på ti.",
    },
    {
      question: "Hvordan bør du velge hvilke oppgaver du skal besvare?",
      options: ["Etter hvor du mestrer både det redegjørende og det drøftende leddet", "Etter hvilken fagsøyle du kan mest om, siden kunnskapsmengden bærer besvarelsen", "Etter hvilken oppgave som har kortest formulering, siden den krever minst lesing", "Etter hvilken fagsøyle som har hatt flest oppgaver i tidligere eksamenssett"],
      explanation: "Valgspørsmålet er hvilke to du både kan redegjøre for og drøfte, fordi drøftingsleddet avgjør karakteren. Å velge etter favorittfag er nettopp feil #8, oppgavelengde sier ingenting om vanskegrad, og tidligere frekvens hjelper deg i lesingen, ikke i selve valget foran settet.",
    },
    {
      question: "Hva sier de fire vurderingsaksene om presisjon i begreper?",
      options: ["Presisjon er akse 1 og en inngangsbillett — feil der kan ikke oppveies av god drøfting", "Presisjon er akse 1 og det tyngste løftet — en presis besvarelse når toppen uten drøfting", "Presisjon er akse 4 og teller først når drøftingen allerede holder et høyt nivå", "Presisjon vurderes bare i det redegjørende leddet og gjelder ikke for drøftingen"],
      explanation: "Akse 1 er presisjon, og den er en terskel, ikke et løft: feil begrep kan ikke reddes av god drøfting, men presisjon alene løfter deg heller ikke til toppen. Eksempler og empirisk forankring er akse 4, og presisjonskravet gjelder hele besvarelsen.",
    },
    {
      question: "Hvor mye tid har du per besvarelse når instruksen sier to av fire oppgaver?",
      options: ["Rundt 80 minutter, etter at valg og disponering og en sluttbuffer er trukket fra de 180", "Rundt 90 minutter, siden de 180 minuttene deles likt mellom de to besvarelsene", "Rundt 55 minutter, som er nøyaktig det samme tidsrommet som når tre oppgaver skal besvares", "Rundt 120 minutter, fordi det redegjørende leddet kan skrives ferdig på forhånd"],
      explanation: "Av 180 minutter går rundt 10 til å lese og velge og rundt 10 til sluttkontroll, slik at hver besvarelse får omtrent 80. En ren halvering til 90 glemmer disse postene, og 55 minutter er tallet når instruksen ber om tre oppgaver, slik den gjorde i H2025.",
    },
    {
      question: "Hva er riktig om terminene i grunnlaget bak boka?",
      options: ["Alle de 15 terminene med fullstendig oppgavetekst er høsteksamener", "Terminene fordeler seg jevnt mellom vår- og høsteksamen gjennom hele perioden", "Grunnlaget dekker 15 terminer, hvorav de fem eldste er vårterminer", "Grunnlaget dekker 18 terminer, én for hver av filene i eksamensarkivet"],
      explanation: "Samtlige 15 terminer med fullstendig oppgavetekst er høsteksamener — emnet har bare hatt høsteksamen i perioden. Tallet 18 gjelder filer i arkivet, ikke terminer: ni oppgavesett og ni sensorveiledninger.",
    },
    {
      question: "Hva er den vanligste tidsfellen på skoleeksamen i dette emnet?",
      options: ["Å bruke halve tiden på det redegjørende leddet, slik at drøftingen ikke blir skrevet", "Å bruke for lang tid på å velge oppgaver, slik at selve skrivingen aldri kommer i gang", "Å skrive for kort i begge besvarelsene, siden lengde er et selvstendig vurderingskriterium", "Å svare på alle fire oppgavene for å sikre uttelling på minst to av dem"],
      explanation: "Fellen er å bruke halve tiden på det som føles trygt, altså definisjonene, og så mangle tid til drøftingen som avgjør karakteren. Valg og disponering skal koste rundt ti minutter, lengde er ikke et kriterium i seg selv, og å svare på flere oppgaver enn instruksen ber om gir ingen ekstra uttelling.",
    },
  ],
  'inter1000-0-2': [
    {
      question: "Hvilke fire trinn består en besvarelse på skoleeksamen av?",
      options: ["Presis redegjørelse, mekanisme, balansert drøfting og minst ett konkret eksempel", "Innledning, begrepsavklaring, litteraturgjennomgang og konklusjon med implikasjoner", "Definisjon, historisk bakgrunn, teoretisk rammeverk og en oppsummering til slutt", "Problemstilling, undersøkelsesopplegg, kildekritikk og en systematisk analyse"],
      explanation: "Firetrinns-oppgaven er redegjørelse, mekanisme, drøfting og eksempel, og de svarer én-til-én til de fire vurderingsaksene. De seks leddene med problemstilling og undersøkelsesopplegg hører til semesteroppgaven, som har en helt annen mal.",
    },
    {
      question: "Hva bør du gjøre først når du har lest en oppgaveformulering?",
      options: ["Telle instruksjonsverbene og skrive dem ned, slik at ingen bestilling glemmes", "Skrive ned alt du husker om temaet, slik at ingenting går tapt underveis", "Begynne på den presise definisjonen med en gang, siden den er inngangsbilletten", "Bestemme hvilken teoritradisjon du skal bruke, siden teorikobling er toppmarkøren"],
      explanation: "Verbene forteller hva oppgaven bestiller, og en oppgave med to verb er to bestillinger. Å skrive alt du husker er nettopp veien til feil #1, definisjonen kommer etter disponeringen, og teorikobling er bare påkrevd der oppgaven ber om det.",
    },
    {
      question: "Hva kjennetegner et redegjørende ledd som holder?",
      options: ["Det er presist og kort, og det har med distinksjonen mot nabobegrepet", "Det er grundig og langt, slik at ingen del av pensum om temaet utelates", "Det bruker et faguttrykk fra hver av de fire disiplinene i emnet", "Det gjengir definisjonen ordrett slik den står formulert i pensumboka"],
      explanation: "Presist, kort og med distinksjonen mot nabobegrepet er kravet — det er avgrensningen som gir tid til drøftingen. Lengde er ikke et kriterium, tverrfaglighet er ikke påkrevd i selve definisjonen, og ordrett gjengivelse er verken nødvendig eller ønsket.",
    },
    {
      question: "Hvilken test avslører at en «fordi»-setning ikke er en ekte mekanisme?",
      options: ["At alt etter «fordi» kan byttes ut med selve utfallet uten at meningen endres", "At setningen er kortere enn tre linjer og bare inneholder ett fagbegrep", "At setningen mangler henvisning til hvilken pensumforfatter påstanden kommer fra", "At setningen bruker et tenkt eksempel i stedet for en historisk hendelse"],
      explanation: "En falsk mekanisme gjentar utfallet med andre ord etter «fordi», og testen er nettopp å prøve å bytte det ut. Verken lengde, kildehenvisning eller valget mellom tenkt og historisk eksempel avgjør om kjeden faktisk er skrevet.",
    },
    {
      question: "Hva er minstekravet for at en drøfting kan kalles balansert?",
      options: ["Ett reelt argument på hver side, og én setning om hvorfor det ene veier tyngst", "En avsluttende setning om at spørsmålet er sammensatt og at begge hensyn er viktige", "Minst tre argumenter på hver side, slik at framstillingen blir fullstendig", "En gjennomgang av hva hver av de fire teoritradisjonene ville ment om spørsmålet"],
      explanation: "Ett argument på hver side pluss en begrunnet vekting er minstekravet, og motargumentet skal stå i sin sterkeste form. «Det er sammensatt» uten grunner er ikke en landing, tre argumenter er ikke noe krav, og fire tradisjoner er langt mer enn oppgaven ber om.",
    },
    {
      question: "Hva sier boka om hvilket standpunkt du bør lande på?",
      options: ["Standpunktet er fritt — det er begrunnelsen som premieres, ikke konklusjonens retning", "Du bør lande der pensumboka lander, siden sensor vurderer mot pensumets syn", "Du bør alltid ta forbehold til slutt, siden en skarp konklusjon leses som manglende nyanse", "Du bør velge det standpunktet flest sensorveiledninger uttrykker støtte til"],
      explanation: "Oppgavene er bevisst åpne, og alle landinger kan gi toppkarakter når begrunnelsen holder. Forbehold er et verktøy og ikke obligatorisk garnityr, og verken pensumets eller veiledningenes syn er en fasit du skal treffe.",
    },
    {
      question: "Hva må stå sammen med et eksempel for at det gir uttelling?",
      options: ["En setning som sier hva eksempelet viser, altså koblingen til påstanden", "En kildehenvisning til pensum eller til en publisert framstilling av hendelsen", "En årstallsangivelse, siden det er årstallet som gjør eksempelet etterprøvbart", "En vurdering av om hendelsen var heldig eller uheldig for partene som var involvert"],
      explanation: "Uten koblingen er eksempelet pynt — derfor regelen om å skrive «dette viser at …». Kildehenvisning kreves ikke på skoleeksamen, årstall er nyttig ved samtidscase men ikke selve kravet, og moralske vurderinger av partene hører ikke hjemme i sjangeren.",
    },
    {
      question: "Hva er den vanligste tidsfellen når du skriver en todelt oppgave?",
      options: ["Å bruke halve tiden på det redegjørende leddet fordi det føles trygt", "Å bruke for lang tid på å planlegge, slik at selve skrivingen blir stresset", "Å skrive drøftingen først og deretter mangle tid til å definere begrepene", "Å bruke for mye tid på eksempler, som uansett teller minst av de fire trinnene"],
      explanation: "Fellen er å definere lenge fordi det er trygt, og så mangle tid til drøftingen som avgjør karakteren. Disponeringen skal koste rundt ti minutter totalt, og ingen av de fire trinnene er lavere rangert enn de andre.",
    },
    {
      question: "Hvordan endres tidsbudsjettet når instruksen ber om tre oppgaver i stedet for to?",
      options: ["Hver besvarelse krymper til rundt 55 minutter, og alle fire trinnene må gjøres kortere", "Hver besvarelse krymper til rundt 55 minutter, og drøftingsleddet sløyfes i to av dem", "Tiden per besvarelse er den samme, siden eksamen forlenges tilsvarende", "Hver besvarelse får rundt 70 minutter, og eksempelkravet faller bort"],
      explanation: "Med tre besvarelser på 180 minutter får hver rundt 55, og løsningen er å korte ned alle fire trinnene — ikke å droppe noen av dem. Eksamenstiden er tre timer uansett, og verken drøfting eller eksempel bortfaller.",
    },
    {
      question: "Hva kjennetegner en besvarelse på nivået «jevnt god»?",
      options: ["Den er korrekt og ryddig, men beskrivende — mekanismen og drøftingen er tynne", "Den har vesentlige feil i begrepsbruken, men et riktig hovedbilde av temaet", "Den er presis og drøftende, men mangler et konkret eksempel å forankre påstanden i", "Den er lang og grundig, men disponert slik at leseren mister tråden underveis"],
      explanation: "En jevnt god besvarelse gjør ingen feil — den gjør bare ikke nok: den beskriver i stedet for å forklare og veie. Vesentlige feil i begrepsbruken hører til minimumskravet, og et svar med presisjon og drøfting ligger allerede høyere.",
    },
    {
      question: "Hva er en oppgraderingsmeny i denne boka?",
      options: ["De to eller tre konkrete grepene som skiller din tekst fra nivået over", "En liste over pensumkapitler du bør lese på nytt før neste øvingsbesvarelse", "En oversikt over hvilke karakterer som kreves for å gå videre på studiet", "En rangering av oppgavetypene etter hvor mange poeng de kan gi på eksamen"],
      explanation: "Menyen er handlingsrettet: finn det første av de fire trinnene som mangler, og skriv det. Den handler verken om mer lesing, om karakterkrav eller om poengfordeling — eksamen gis én samlet karakter, ikke poeng per oppgavetype.",
    },
    {
      question: "Hva er feil #1 i bokas register?",
      options: ["Ren gjengivelse uten drøfting — å svare på drøftingsleddet med enda en redegjørelse", "Flate definisjoner som mangler distinksjonen mot begrepet de lettest forveksles med", "Ensidig drøfting der oppgaven uttrykkelig ber om en balansert vurdering av spørsmålet", "Manglende eksempler, altså et abstrakt svar uten historisk eller empirisk forankring"],
      explanation: "Feil #1 er ren gjengivelse uten drøfting, den dyreste feilen i faget. Flate definisjoner er #3, ensidig drøfting er #5 og manglende eksempler er #7 — alle egne koder i det samme registeret på ti.",
    },
    {
      question: "Hvordan bør du bruke en nyhetssak eller egen erfaring i en besvarelse?",
      options: ["Som illustrasjon av et begrep du allerede har forklart, med årstall og uten å ta parti", "Som selvstendig belegg for påstanden, siden førstehåndserfaring veier tungt faglig", "Som innledning til besvarelsen, slik at leseren ser at temaet er aktuelt", "Helst ikke i det hele tatt, siden alt utenfor pensum regnes som synsing"],
      explanation: "Konverteringen er å starte i begrepet, bruke erfaringen som illustrasjon og koble tilbake til mekanismen. Erfaring alene er ikke belegg i denne sjangeren, men den er heller ikke forbudt — den må bare rammes inn av fagets begreper.",
    },
    {
      question: "Hva innebærer det at en folkerettslig vurdering skal formuleres som en posisjon?",
      options: ["At du skriver hva reglene krever og hvilke syn som finnes, ikke at en part har brutt retten", "At du unngår å konkludere i det hele tatt, siden folkerettslige spørsmål sjelden har ett riktig svar", "At du oppgir hvilken stat du selv mener har den beste saken, med begrunnelse", "At du behandler alle standpunkter som like godt begrunnet uansett rettskildebildet"],
      explanation: "Å beskrive hva reglene krever og hvilke posisjoner som finnes er faglig; å felle dommen over en navngitt part er en annen sjanger. Det utelukker verken en skarp konklusjon eller en vekting av hvilke argumenter som veier tyngst.",
    },
    {
      question: "Hva gjør disponeringen på ti minutter for deg?",
      options: ["Den avslører om du faktisk har en drøfting, mens det ennå er tid til å velge om", "Den gir deg overskriftene som skal stå i selve besvarelsen når du leverer", "Den erstatter kontrollminuttene til slutt, siden planen allerede er gjennomtenkt", "Den sikrer at det redegjørende leddet blir så fullstendig som mulig"],
      explanation: "Klarer du ikke å skrive ned ett argument på hver side i stikkord, har du ikke en drøfting — og da bør du bytte oppgave mens det er tid. Disponeringen er en huskelapp til deg selv, ikke overskrifter i teksten, og den erstatter ikke sluttkontrollen.",
    },
    {
      question: "Hva kreves IKKE for en meget god besvarelse i dette emnet?",
      options: ["Juridisk stringens og økonomisk formalisme ut over solid hovedforståelse", "En mekanisme som er penslet ut ledd for ledd i det drøftende leddet", "Minst ett konkret eksempel koblet til påstanden det skal belegge", "Et argument på hver side der begge er gjengitt med en reell grunn"],
      explanation: "Mildhetsforbeholdet gjør at spesialistdybde ikke kreves — solid hovedforståelse med ett godt eksempel er nok, og overdreven ambisjon som bommer straffes som feil #10. Mekanisme, eksempel og balansert drøfting er derimot krav på øverste nivå.",
    },
  ],
  'inter1000-0-3': [
    {
      question: "Hvilke seks ledd vurderes semesteroppgaven etter?",
      options: ["Innledning, begrepsapparat, undersøkelsesopplegg, analyse, konklusjon og struktur", "Innledning, teorikapittel, metodekapittel, empiri, diskusjon og litteraturliste", "Problemstilling, mekanisme, balansert drøfting, eksempel, konklusjon og kildeliste", "Sammendrag, begrepsavklaring, historisk bakgrunn, analyse, konklusjon og vedlegg"],
      explanation: "Den generiske malen har akkurat disse seks leddene, og den er stabil i veiledningene fra H2018 og framover. De fire trinnene med mekanisme og eksempel er skoleeksamensrubrikken, ikke semesteroppgavemalen.",
    },
    {
      question: "Når er en problemstilling håndterbar?",
      options: ["Når du kan si hva slags materiale som ville besvart den, og hvor du stopper", "Når den dekker et tema som er stort nok til å fylle det antall sider som kreves", "Når den er formulert med et begrep hentet direkte fra pensumlitteraturen", "Når den kan besvares uten å måtte lese noe ut over emnets eget pensum"],
      explanation: "Håndterbarhet handler om avgrensning: materiale, omfang og et svar som kan bli nei. Verken sidetall, pensumbegreper eller mengden lesing avgjør om spørsmålet lar seg besvare.",
    },
    {
      question: "Hvilke tre grep snevrer inn en for vid problemstilling?",
      options: ["Avgrensning i tid, avgrensning i rom eller enhet, og avgrensning av mekanismen", "Kortere formulering, færre fagbegreper, og et mer konkret eksempel i innledningen", "Valg av én teoritradisjon, én pensumforfatter og én historisk periode", "Bytte fra et spørsmål til en påstand, slik at teksten får en tydelig tese"],
      explanation: "Tid, enhet og mekanisme er de tre grepene, og det siste er viktigst fordi det gir noe å drøfte mot. Kortere formulering gjør ikke spørsmålet smalere, og en påstand i stedet for et spørsmål fjerner nettopp det som kan bli nei.",
    },
    {
      question: "Hva ber vurderingsleddet om begrepsapparatet særlig etter?",
      options: ["At begrepene er presise og brukt konsistent gjennom hele teksten", "At begrepene er hentet fra minst to av emnets fire fagsøyler", "At hvert begrep er belagt med et sitat fra pensumlitteraturen", "At begrepene forklares på nytt hver gang de brukes i teksten"],
      explanation: "Presisjon og konsistens er kravet, og konsistensen er det som skiller sjangeren fra skoleeksamen: i en tekst skrevet over uker er det lett å bytte betydning underveis. Sitater og gjentatte forklaringer er verken påkrevd eller ønsket.",
    },
    {
      question: "Hva skal et undersøkelsesopplegg på dette nivået si?",
      options: ["Hva du bygger på, hva du gjør med det, og hva opplegget ikke kan svare på", "Hvilket forskningsdesign du har valgt, og hvordan variablene er operasjonalisert", "Hvor mange kilder du har brukt, og hvordan de er fordelt mellom kildetyper", "Hvilken teoritradisjon som styrer analysen, og hvorfor de andre er valgt bort"],
      explanation: "To til fire setninger om materiale, framgangsmåte og grense er nok — mildhetsforbeholdet gjelder også her, så metodefaglige krav om design og variabler ligger utenfor. Antall kilder og teorivalg hører til andre ledd.",
    },
    {
      question: "Hva er kildekritikk på førsteårsnivå i denne sjangeren?",
      options: ["Å spørre hvem som har skrevet kilden, hva den er førstehåndskunnskap om, og hvor gammel den er", "Å vurdere om kilden er fagfellevurdert, og utelate alt annet materiale fra teksten", "Å telle hvor mange ganger kilden er sitert av andre forskere på feltet", "Å bruke bare pensumlitteratur, siden andre kilder ikke kan vurderes av en førsteårsstudent"],
      explanation: "Avsender, førstehåndskunnskap og alder er de tre spørsmålene, og én setning per sentral kilde holder. Partsinnlegg og offentlige dokumenter er fullt brukbare — de skal bare brukes til det de faktisk er kilde til.",
    },
    {
      question: "Hva spør det fjerde vurderingsleddet særlig etter?",
      options: ["Om det som taler mot konklusjonen, kommer klart fram i analysen", "Om analysen bygger på minst tre ulike kildetyper med hver sin funksjon", "Om analysen er skrevet i samme rekkefølge som pensum behandler temaet", "Om analysen holder seg innenfor én av emnets fire fagsøyler om gangen"],
      explanation: "Malen spør direkte om motforestillingene, ved siden av at analysen skal være systematisk og gjennomsiktig. Antall kildetyper er ikke et krav, og tverrfaglighet er tvert imot et pluss når den andre søylen gjør en jobb.",
    },
    {
      question: "Hva skiller en konklusjon fra et sammendrag?",
      options: ["Konklusjonen sier hva teksten fant, og hva som følger av det", "Konklusjonen gjentar hovedpunktene i teksten i samme rekkefølge", "Konklusjonen er kortere og står alltid på under en halv side", "Konklusjonen tar forbehold, slik at svaret ikke framstår som skråsikkert"],
      explanation: "Et klart svar på problemstillingen pluss implikasjoner er kravet; å gjenta hva teksten gjorde er nettopp sammendraget. Lengde avgjør ingenting, og «temaet er komplekst» er en unnvikelse, ikke et svar.",
    },
    {
      question: "Hva gjelder for tematisk overlapp mellom semesteroppgaven og skoleeksamen?",
      options: ["Overlapp straffes ikke — taktiske hensyn skal ikke påvirke karakteren, sies det fra H2024", "Overlapp trekker ned på semesteroppgaven, siden stoffet allerede er vurdert én gang på eksamen", "Overlapp er ikke tillatt, og kandidaten må velge tema fra en annen fagsøyle", "Overlapp vurderes ulikt fra termin til termin, og du bør derfor spørre emneansvarlig"],
      explanation: "Fra og med H2024 sier veiledningen uttrykkelig at taktiske hensyn ikke skal påvirke karakteren, så det er ingen grunn til å spare på sitt beste tema. Mange gjør likevel det, og taper på det i begge ender.",
    },
    {
      question: "Når gjør en tverrfaglig vinkling faktisk en jobb i analysen?",
      options: ["Når den andre søylen forklarer noe den første ikke kunne forklare", "Når teksten henter minst ett begrep fra hver av de fire fagsøylene", "Når den andre søylen nevnes i innledningen for å vise emnets bredde", "Når de to søylene behandles i hvert sitt kapittel uten å berøre hverandre"],
      explanation: "Kravet er at den andre søylen bidrar med en forklaring den første manglet — for eksempel at økonomien sier hvorfor det politiske samarbeidet er vanskelig. Fire søyler eller to atskilte kapitler sprer teksten tynt i stedet for å styrke den.",
    },
    {
      question: "Hva er de obligatoriske aktivitetene rundt semesteroppgaven?",
      options: ["Seminardeltakelse, utkast, veiledning og en rolle som kommentator på en medstudents tekst", "En muntlig presentasjon av oppgaven og en egen skriftlig prøve på slutten av semesteret, begge vurdert", "Innlevering av tre delkapitler som hver vurderes med egen bokstavkarakter", "Deltakelse i en skriftlig gruppeoppgave som erstatter deler av skoleeksamen"],
      explanation: "Aktivitetene består av seminar, utkast, veiledning og kommentatorrollen, og de må være godkjent som en del av vurderingsordningen. De gis ingen egen karakter og erstatter ingen del av skoleeksamen.",
    },
    {
      question: "Hvorfor er det dyrt å levere et tynt utkast til kommentarrunden?",
      options: ["Fordi du bruker opp den eneste tilbakemeldingen du får mens den fortsatt kan endre noe", "Fordi utkastet vurderes med egen karakter som teller inn i den samlede vurderingen", "Fordi et tynt utkast automatisk regnes som ikke godkjent obligatorisk aktivitet", "Fordi veilederen da leser den ferdige teksten med lavere forventninger"],
      explanation: "Kommentaren er nyttig bare så lenge teksten kan endres, og et tynt utkast gir en tynn kommentar. Utkastet gis ingen karakter, og det er ikke terskelen for godkjenning som er poenget.",
    },
    {
      question: "Hva sier boka om å bruke tekst fra læreverk i semesteroppgaven?",
      options: ["Å levere tekst fra en lærebok som sin egen er fusk, også i omskrevet form", "Det er tillatt så lenge kilden føres opp i litteraturlisten til slutt", "Det er tillatt i begrepsavklaringen, men ikke i analysen og konklusjonen", "Det avgjøres av emneansvarlig i hvert enkelt tilfelle før innlevering"],
      explanation: "Semesteroppgaven er en innlevert, vurdert tekst, og den skal være din egen — også problemstillingen. Boka gir derfor skisser og momentlister, aldri sammenhengende tekst du kan levere.",
    },
    {
      question: "Hva er den mest kostbare svakheten i en semesteroppgave?",
      options: ["En for vid problemstilling, fordi den forplanter seg til alle de andre leddene", "En referansestil som ikke er den samme gjennom hele teksten, og som leseren ikke kan følge", "En innledning som er lengre enn det analysen krever", "Et undersøkelsesopplegg som bygger på bare to typer kilder"],
      explanation: "Er spørsmålet for vidt, får verken opplegget, analysen eller konklusjonen noe å holde fast i. Referansestil og innledningslengde er ryddesaker, og antallet kildetyper er ikke i seg selv et kvalitetsmål.",
    },
  ],
  'inter1000-1-1': [
    {
      question: "Hva er en teoritradisjon i studiet av internasjonal politikk?",
      options: ["Et sammenhengende sett antakelser om hvem som handler, hva de vil og hva som begrenser dem", "Et normativt standpunkt om hvordan stater bør opptre overfor hverandre i verden", "En samling historiske eksempler som viser hvordan stormakter har handlet før", "En metode for å måle hvor mye makt hver enkelt stat har i systemet"],
      explanation: "En tradisjon er et sett antakelser som til sammen gir en forventning om hva vi vil se skje — knaggen er brille eller linse. At det skulle være et standpunkt om hva stater bør gjøre, er den vanligste misforståelsen: å bruke realismen er ikke å forsvare maktpolitikk. Verken en eksempelsamling eller en målemetode fanger at tradisjonen forklarer noe.",
    },
    {
      question: "Hva vil det si å anvende en teoritradisjon i en besvarelse?",
      options: ["Å bruke antakelsene til å forklare et konkret tilfelle, med hva den venter og hvorfor", "Å gjengi tradisjonens hovedpåstander presist og med riktig avsender oppgitt", "Å oppgi hvilke forfattere og verk tradisjonen bygger på i pensumet for det aktuelle emnet", "Å presentere minst to tradisjoner etter hverandre i det samme avsnittet i teksten"],
      explanation: "Å anvende er å bruke antakelsene på noe bestemt: hva tradisjonen venter, hvorfor, og hva i saken som stemmer eller ikke. Å gjengi hovedpåstander presist er å nevne, og det gir uttelling på det redegjørende leddet alene. To beskrivelser etter hverandre er heller ikke anvendelse — uten et skillepunkt er det fortsatt presentasjon.",
    },
    {
      question: "Hva betyr anarki i faglig forstand?",
      options: ["At det ikke finnes noen myndighet over statene som kan håndheve avtaler mellom dem", "At det ikke finnes regler eller forpliktelser mellom stater i det internasjonale systemet", "At statene handler uforutsigbart fordi ingen kjenner de andres langsiktige planer", "At statene er formelt likestilte og derfor har lik innflytelse på internasjonale vedtak"],
      explanation: "Anarki betyr fravær av overordnet myndighet, ikke fravær av orden. Folkeretten finnes; det som mangler, er noen som kan tvinge en stormakt til å følge den, og derfor er ikke lovløshet riktig svar. At statene er formelt likestilte, er suverenitetsprinsippet — et nabobegrep som ikke skal blandes inn.",
    },
    {
      question: "Hva er relative gevinster?",
      options: ["At staten måler egen gevinst mot motpartens, fordi maktforskjellen kan brukes mot den", "At staten måler gevinsten mot situasjonen uten avtale, uansett hva de andre får ut av den", "At staten krever at gevinsten fordeles likt mellom partene før den vil inngå avtalen", "At staten godtar tap på kort sikt fordi den venter en større gevinst noen år senere"],
      explanation: "Relative gevinster måles mot motpartens gevinst, fordi enhver gevinst kan gjøres om til maktmidler og maktforskjellen avgjør hvem som kan presse hvem. Å måle mot situasjonen uten avtale er absolutte gevinster, som er nabobegrepet og liberalismens antakelse. Krav om lik fordeling er verken det ene eller det andre — det er et forhandlingskrav.",
    },
    {
      question: "Hvorfor kan en stat bli mindre trygg av en avtale som gjør den rikere?",
      options: ["Fordi motpartens større gevinst kan bli til maktmidler og øke maktforskjellen mellom dem", "Fordi rikdom gjør staten til et mer attraktivt mål for angrep fra andre stater i systemet", "Fordi handel binder staten til leverandører den ikke selv kontrollerer over tid", "Fordi avtalen forplikter staten til å redusere forsvarsutgiftene sine tilsvarende"],
      explanation: "Kjeden er at gevinst kan omsettes i ressurser, ressurser i maktforskjell og maktforskjell i sårbarhet — derfor kan absolutt vinning gi relativ svekkelse. At rikdom i seg selv gjør staten til et mål, er en annen påstand og ikke mekanismen bak relative gevinster. At handel skaper avhengighet, er et eget poeng som hører til gjensidig avhengighet.",
    },
    {
      question: "Hva er suverenitet?",
      options: ["Statens rett til å styre seg selv innenfor eget territorium uten at andre bestemmer over den", "Statens faktiske evne til å velge fritt mellom de handlingsalternativene som foreligger for den", "Statens plikt til å følge de internasjonale avtalene den har sluttet seg til frivillig", "Statens anerkjennelse som medlem av de viktigste internasjonale organisasjonene"],
      explanation: "Suverenitet har en indre side, øverste myndighet hjemme, og en ytre side, anerkjennelse som likeverdig part. Å blande den med handlefrihet er en klassisk kilde til upresise svar: en småstat er like suveren som en stormakt formelt, men har langt færre valg. Medlemskap i organisasjoner er verken vilkår for eller det samme som suverenitet.",
    },
    {
      question: "Hva er kjernen i realismens forklaring på internasjonal politikk?",
      options: ["Makt og egeninteresse under anarki, der maktfordelingen er den viktigste enkeltfaktoren", "At stater er aggressive av natur og derfor søker konflikt når anledningen byr seg", "At normer og identitet avgjør hvilke interesser statene i det hele tatt får", "At innenrikspolitiske grupper avgjør hva staten gjør i sin utenrikspolitikk"],
      explanation: "Realismen forklarer med makt og egeninteresse under anarki, og med at maktfordelingen er den avgjørende opplysningen om et system. At stater skulle være aggressive av natur, er karikaturen: poenget er at også fredelige stater tvinges til å ta forholdsregler. Normer og identitet er konstruktivismens grunnstoff, ikke realismens.",
    },
    {
      question: "Hva er selvhjelp?",
      options: ["At staten i siste instans må klare seg med egne midler, siden ingen er forpliktet til å hjelpe", "At staten avviser allianser fordi de binder handlefriheten mer enn de gir sikkerhet", "At staten prioriterer økonomisk vekst framfor militær styrke i normale perioder", "At staten løser tvister uten å gå veien om internasjonale domstoler og organer"],
      explanation: "Selvhjelp betyr at staten i siste instans står alene, fordi ingen andre er forpliktet til å redde den. Det betyr ikke at allianser avvises — de er midler som velges og forlates etter behov. Verken vekstprioritering eller avvisning av domstoler følger av begrepet.",
    },
    {
      question: "Hva kjennetegner en maktbalanse?",
      options: ["At ingen enkeltstat kan dominere, fordi de øvrige svarer på vekst med opprustning eller allianser", "At styrkeforholdet mellom statene er nøyaktig likt målt i militære og økonomiske ressurser", "At statene har inngått en avtale om hvor store styrker hver av dem kan holde seg med", "At perioden er preget av fred, fordi ingen av partene tør ta initiativ til en konflikt"],
      explanation: "Maktbalansen virker gjennom motvekt: den som vokser, møter opprustning eller en koalisjon. Den krever verken nøyaktig lik styrke eller en avtale — mekanismen virker uten at noen planlegger den. At balanse betyr fred, er en flat framstilling: perioder med balanse har vært både usedvanlig fredelige og usedvanlig krigerske.",
    },
    {
      question: "Hva er hegemoni?",
      options: ["At én stat er så overlegen at den kan sette rammene for de andre uten å bli balansert bort", "At én stat styrer andre områder direkte gjennom egne myndigheter og eget lovverk", "At flere stormakter i fellesskap fastsetter og håndhever reglene for det internasjonale systemet", "At én stat har vetorett i de organene som avgjør de viktigste internasjonale spørsmålene"],
      explanation: "En hegemon setter rammene for formelt suverene stater uten at motvekt oppstår. Direkte styring over andre områder er imperium, som er nabobegrepet og noe annet. Felles fastsettelse av regler er nærmere en stormaktskonsert, og vetorett er en institusjonell ordning, ikke en beskrivelse av maktfordelingen.",
    },
    {
      question: "Hva er økonomisk nasjonalisme?",
      options: ["At økonomisk politikk brukes som middel for statens makt framfor å være et mål i seg selv", "At staten avviser all handel med andre land for å bli helt selvforsynt med det den trenger", "At staten prioriterer full sysselsetting hjemme framfor lav prisstigning i økonomien", "At staten lar markedet avgjøre hvilke næringer som skal vokse og hvilke som skal falle"],
      explanation: "Økonomisk nasjonalisme, ofte kalt merkantilisme, gjør økonomisk politikk til et maktmiddel: strategiske næringer beskyttes og avhengighet av rivaler unngås. Den er ikke det samme som å være mot handel — den er en påstand om hva handelen skal tjene. Full selvforsyning og valget mellom sysselsetting og prisvekst er andre spørsmål, og de hører til den innenlandske økonomiske politikken.",
    },
    {
      question: "Hva er kjernen i liberalismens forklaring på internasjonal politikk?",
      options: ["At samarbeid kan vare, fordi institusjoner og bånd endrer hva statene tjener på å gjøre", "At stater deler grunnleggende verdier og derfor ønsker det beste for hverandre", "At en overlegen makt håndhever avtalene, slik at det ikke lønner seg å bryte dem", "At konflikt skyldes misforståelser som kan ryddes bort med bedre kommunikasjon"],
      explanation: "Liberalismens poeng er at omgivelsene lar seg endre: institusjoner, handel og styreform endrer regnestykket statene sitter med. Alternativet om delte verdier er karikaturen, og den plasseres lavt på presisjonsaksen. At en overlegen makt håndhever, er hegemoniargumentet, som hører til realismen.",
    },
    {
      question: "Hva er absolutte gevinster?",
      options: ["At staten bedømmer avtalen etter om den selv kommer bedre ut enn den ville gjort uten", "At staten bedømmer avtalen etter hvor mye den vinner sammenlignet med motparten", "At staten bare inngår avtaler der gevinsten er sikret uansett hva motparten gjør", "At staten regner gevinsten i faste priser slik at prisstigning ikke forstyrrer bildet"],
      explanation: "Absolutte gevinster måles mot situasjonen uten avtale, og motpartens gevinst er ikke en kostnad. Å måle mot motparten er relative gevinster, som er nabobegrepet og realismens antakelse. Merk at ingen av tradisjonene antar uegennytte — uenigheten gjelder regnestykket, ikke moralen.",
    },
    {
      question: "Hva er de tre hjørnene i Kants trekant?",
      options: ["Demokratisk styreform, økonomisk samhandling og internasjonale institusjoner", "Maktbalanse, allianser og gjensidig avskrekking mellom omtrent likeverdige stormakter i systemet", "Normer, identitet og forventninger som formes gjennom samhandling over tid", "Frihandel, felles valuta og et overnasjonalt organ med egen tvangsmyndighet"],
      explanation: "Trekanten består av demokratisk styreform, økonomisk samhandling og internasjonale institusjoner, og poenget er at hvert hjørne styrker de to andre. Maktbalanse med avskrekking er realismens apparat, og normer med identitet er konstruktivismens. Felles valuta hører ikke til modellen i det hele tatt.",
    },
    {
      question: "Hva er den avgjørende presiseringen ved den demokratiske freden?",
      options: ["At påstanden gjelder forholdet mellom demokratier, ikke krigføring i sin alminnelighet", "At demokratier fører færre kriger totalt sett enn andre styreformer gjør over tid", "At demokratier bare bruker militærmakt når et internasjonalt organ har gitt uttrykkelig fullmakt", "At demokratisk valgte ledere personlig er mindre villige til å ty til vold enn andre"],
      explanation: "Påstanden gjelder forholdet mellom demokratier. Demokratier fører ikke færre kriger totalt sett, og de kan være svært krigerske mot ikke-demokratier — derfor er «demokratier er fredelige» en flat gjengivelse. Mekanismene er institusjonelle og normative, ikke knyttet til lederes personlige innstilling.",
    },
    {
      question: "Hvilke tre jobber gjør internasjonale institusjoner ifølge liberalismen?",
      options: ["De gir informasjon om hvem som bryter, gjør brudd dyrt og gir faste prosedyrer", "De fordeler gevinsten likt, sanksjonerer brudd militært og velger en felles ledelse", "De overtar statenes suverenitet, håndhever regler og fastsetter et felles budsjett", "De sprer demokratisk styreform, øker handelen og bygger opp en felles identitet"],
      explanation: "Informasjon, forpliktelse og forutsigbarhet er de tre jobbene, og de virker ved å redusere usikkerheten som gjorde relative gevinster viktige. De fordeler ikke gevinst likt og overtar ikke suverenitet — det ville vært en helt annen type ordning. Å spre demokrati og bygge identitet er virkninger andre deler av teorien peker på.",
    },
    {
      question: "Hva er gjensidig avhengighet?",
      options: ["At det som skjer i én stat får merkbare følger i en annen gjennom handel, energi eller folk", "At to stater har inngått en avtale som forplikter dem til å bistå hverandre ved kriser", "At verden som helhet kobles stadig tettere sammen langs økonomiske og politiske dimensjoner", "At to stater har et godt forhold og derfor samarbeider tett på flere områder samtidig"],
      explanation: "Gjensidig avhengighet beskriver hvor tette båndene mellom bestemte parter er, og den er sjelden symmetrisk — den som lettest finner en erstatning, har overtaket. Den bredere sammenkoblingen av verden er globalisering, som er nabobegrepet. Og avhengighet er ikke det samme som vennskap: den sier ingenting om hvor gode forholdene er.",
    },
    {
      question: "Hva forklarer konstruktivismen internasjonal politikk med?",
      options: ["Normer, ideer og identitet, som formes gjennom samhandling mellom aktørene over tid", "Fordelingen av militære og økonomiske ressurser mellom de tyngste statene i systemet", "Konflikt om fordelingen av verdiskapingen mellom klasser på tvers av landegrensene", "At materielle forhold ikke finnes, siden alt i verden er sosialt konstruert av aktørene"],
      explanation: "Konstruktivismen forklarer med normer, ideer og identitet, og påstanden er at materielle forhold ikke tolker seg selv — like mange missiler betyr noe ulikt hos en alliert og hos en rival. At alt skulle være sosialt konstruert, er karikaturen som plasseres lavt. Ressursfordeling er realismens forklaring, og klassekonflikt er marxismens.",
    },
    {
      question: "Hva er testen på at en internasjonal norm finnes?",
      options: ["At de som bryter den, føler behov for å forklare at handlingen ikke er et brudd", "At samtlige stater i systemet har fulgt den uten unntak over en lengre periode", "At den er nedfelt i en traktat som et stort flertall av statene har sluttet seg til", "At et internasjonalt organ kan ilegge sanksjoner mot den parten som bryter den"],
      explanation: "Testen er ikke etterlevelse, men at bruddet må forklares — bruker en stat et helt apparat på å begrunne at handlingen ikke er et brudd, har den bekreftet at normen gjelder. At regelen er nedfelt i traktat eller kan sanksjoneres, gjør den til rett, og en norm er nettopp ikke avhengig av det. Full etterlevelse finnes knapt for noen norm.",
    },
    {
      question: "Hvordan forklarer konstruktivismen at internasjonale normer endrer seg?",
      options: ["Noen går foran til en kostnad, andre følger etter av omdømmehensyn, og forventningen snur", "En stormakt innfører den nye normen og håndhever den overfor de øvrige statene", "Et internasjonalt organ vedtar en ny regel som medlemmene deretter må gjennomføre", "Kostnaden ved å følge den gamle normen stiger, slik at statene finner det lønnsomt å bytte"],
      explanation: "Endringen går i tre ledd: pionerer handler etter den nye forventningen til en kostnad, andre følger fordi det blir dyrere i omdømme å stå utenfor, og til slutt må bruddet begrunnes. At en stormakt eller et organ pålegger endringen, er en maktbasert forklaring og altså en annen tradisjons. Ren kostnadsendring er liberalismens mekanisme, ikke konstruktivismens.",
    },
    {
      question: "Hvordan skiller liberalismen og konstruktivismen seg i synet på institusjoner?",
      options: ["Liberalismen ser dem som en begrensning på kostnadene, konstruktivismen også som formende for interessene", "Liberalismen ser dem som nyttige for de mektige, mens konstruktivismen ser dem som nøytrale", "Liberalismen ser dem som midlertidige ordninger, mens konstruktivismen ser dem som varige", "Liberalismen legger vekt på medlemstallet, mens konstruktivismen legger vekt på vedtaksreglene"],
      explanation: "For liberalismen endrer institusjonen kostnadene, mens statens interesse er den samme før og etter; for konstruktivismen endrer deltakelse over tid også hva staten oppfatter seg som og vil. Prøven mellom dem er om en stat slutter å ønske noe uten at prisen på det er endret. At institusjoner tjener de mektige, er realismens innvending, ikke liberalismens posisjon.",
    },
    {
      question: "Hva er kjernen i marxismens forklaring på internasjonal politikk?",
      options: ["Økonomisk struktur og konflikt om hvordan verdiskapingen fordeles mellom aktørene", "At statene er hovedaktørene og handler for å sikre egen overlevelse under anarki", "At internasjonale institusjoner over tid gjør samarbeid billigere og mer forutsigbart", "At identitet og felles historie avgjør hvilke stater som allierer seg med hverandre"],
      explanation: "Marxismen forklarer med økonomisk struktur og fordelingskonflikt, og hevder at spillereglene er utformet av dem som tjente mest på dem. Statssentrert overlevelse under anarki er realismens kjerne, institusjonell samarbeidslogikk er liberalismens, og identitet er konstruktivismens. Merk at marxismen deler realismens skepsis mot institusjoner, men begrunner den med fordeling og ikke med maktforholdet mellom stater.",
    },
    {
      question: "Hva menes med klasseperspektivet i marxistisk forklaring av internasjonal politikk?",
      options: ["At de viktigste skillelinjene kan gå på tvers av statsgrensene og ikke bare mellom stater", "At fattige stater samarbeider innbyrdes mot de rike statene i internasjonale organer", "At hver stat har én samlet nasjonal interesse som utenrikspolitikken forsøker å ivareta", "At skillet mellom stater er langt viktigere enn skillet mellom grupper inne i hver enkelt stat"],
      explanation: "Poenget er at eiere i to land kan ha mer felles interesse med hverandre enn med lønnstakere hjemme, slik at «nasjonens interesse» blir et upresist uttrykk. Alternativet om at hver stat har én samlet interesse, er nettopp den forenklingen perspektivet angriper. At skillet mellom stater skulle veie tyngst, er realismens antakelse og det motsatte av denne.",
    },
    {
      question: "Hvorfor er transnasjonale selskaper analytisk interessante i faget?",
      options: ["Fordi de kan flytte og statene ikke kan, slik at stater konkurrerer om å tiltrekke seg dem", "Fordi de har formelle stemmerettigheter i de viktigste internasjonale organisasjonene", "Fordi de er større enn de fleste stater målt i antall ansatte og samlet omsetning", "Fordi de er unntatt fra nasjonal lovgivning i de landene der de driver virksomhet"],
      explanation: "Mekanismen er mobiliteten: fordi selskapet kan flytte og staten ikke kan, blir skatt, miljøkrav og arbeidsvilkår noe stater konkurrerer om. Selskaper har ikke formelle stemmerettigheter i mellomstatlige organer, og de er ikke unntatt fra nasjonal lovgivning. Størrelse alene forklarer ikke forhandlingsposisjonen.",
    },
    {
      question: "Hva menes med strukturell ulikhet i verdensøkonomien?",
      options: ["At skjevheten ligger i selve ordningen og ikke bare i enkeltavtaler som kan reforhandles", "At noen land har naturressurser og andre ikke, slik at inntektene fordeles ulikt", "At handelen mellom land er ufrivillig og påtvunget de svakeste partene i systemet", "At forskjellene mellom land i inntekt per innbygger har økt jevnt gjennom hele etterkrigstiden"],
      explanation: "Påstanden er at den som leverer råvarer møter mange konkurrenter og presses på pris, mens den som kontrollerer teknologi og merkevare har få konkurrenter og tar ut mer av verdien — derfor kan helt frivillig handel gjengi skjevheten. At handelen skulle være ufrivillig, er nettopp ikke poenget. Ressurstilgang alene forklarer verken mønsteret eller at det består.",
    },
    {
      question: "Hva er den sentrale svakheten ved realismen som forklaringsverktøy?",
      options: ["Den forklarer varig samarbeid dårlig, og sier lite om hvorfor stater endrer mål over tid", "Den forklarer opprustning dårlig, fordi den ikke regner med militære kapasiteter i det hele tatt", "Den forklarer sammenbrudd dårlig, siden den forutsetter at institusjoner alltid holder", "Den forklarer fordelingsspørsmål dårlig, fordi den mangler et begrep om økonomisk makt"],
      explanation: "Realismens blindsone er varig samarbeid og endring i hva stater vil — den er derimot sterk nettopp på opprustning, alliansebytter og avtalebrudd. At institusjoner alltid holder, er en antakelse realismen ikke har; det er liberalismen som har vansker med sammenbrudd. Realismen har et tydelig begrep om økonomisk makt, siden økonomi kan omsettes i militær tyngde.",
    },
    {
      question: "Hva er den sentrale svakheten ved liberalismen som forklaringsverktøy?",
      options: ["Den forklarer sammenbrudd og maktbruk dårlig der institusjonene faktisk var på plass", "Den forklarer samarbeid dårlig, siden den antar at stater bare tenker på egen sikkerhet", "Den forklarer normendring dårlig, fordi den ikke har noe begrep om identitet i det hele tatt", "Den forklarer opprustning dårlig, fordi den mener at militær makt er uten betydning"],
      explanation: "Liberalismens blindsone er tilfeller der institusjoner og bånd var på plass og det likevel ble brudd eller krig — det er den sterkeste innvendingen mot posisjonen. Den forklarer derimot samarbeid godt, og den hevder ikke at militær makt er uten betydning. Normendring er konstruktivismens felt, men manglende identitetsbegrep er ikke liberalismens hovedsvakhet.",
    },
    {
      question: "Hva innebærer det å kontrastere to teoritradisjoner?",
      options: ["Å la begge forklare samme fenomen, si hvor de skiller lag og hva som ville avgjort saken", "Å beskrive den ene tradisjonen grundig og deretter den andre i et eget avsnitt like etterpå", "Å velge den tradisjonen som passer best og forklare hvorfor den andre er mindre riktig", "Å nevne begge i innledningen og bruke den ene konsekvent gjennom resten av teksten"],
      explanation: "Kontrastering krever ett felles fenomen, et utskrevet skillepunkt og en prøve som kunne skilt forklaringene empirisk. To grundige beskrivelser etter hverandre er presentasjon, ikke kontrastering, og det er den vanligste bommen i denne sjangeren. Å avvise den ene på forhånd er heller ikke drøfting, siden ingen av forklaringene da blir prøvd.",
    },
    {
      question: "Hvorfor er «realismen er pessimistisk og liberalismen optimistisk» en svak formulering?",
      options: ["Fordi stemningsord ikke sier noe om mekanismen bak forventningen tradisjonene har", "Fordi realismen i virkeligheten venter mer samarbeid på lang sikt enn liberalismen gjør", "Fordi tradisjonene ikke uttaler seg om framtiden, men bare beskriver det som har skjedd", "Fordi optimisme og pessimisme er begreper som hører hjemme i konstruktivismen"],
      explanation: "Den presise formuleringen er at realismen venter lite varig samarbeid fordi statene regner i relative gevinster under anarki, mens liberalismen venter mer fordi institusjoner reduserer usikkerheten. Begge tradisjonene uttaler seg i høyeste grad om framtiden — det er nettopp derfor de kan prøves mot det som skjer. Stemningsordene beskriver et inntrykk, ikke et resonnement.",
    },
    {
      question: "Hva er det egentlige skillet mellom realisme og liberalisme?",
      options: ["Hvilket regnestykke egeninteressen ender i når ingen myndighet står over partene", "Om stater handler ut fra egeninteresse eller ut fra moralske og humanitære hensyn", "Om det i det hele tatt finnes en overordnet myndighet over statene i systemet", "Om militær makt eller økonomisk makt er den viktigste maktformen i verden i dag"],
      explanation: "Begge tradisjonene antar egeninteresse, og begge godtar anarki-premisset — uenigheten gjelder om usikkerheten gjør relative gevinster avgjørende, eller om institusjoner reduserer den nok til at absolutte gevinster holder. Å tro at skillet går på moral, er den vanligste misforståelsen i stoffet. Spørsmålet om maktform er et annet spørsmål som begge kan svare på.",
    },
  ],
  'inter1000-1-2': [
    {
      question: "Hva er en konflikt i faglig forstand?",
      options: ["En situasjon der parter har uforenlige mål og minst én handler for å få viljen sin", "En situasjon der to eller flere parter bruker organisert vold mot hverandre", "En situasjon der partene er uenige om hvordan et område skal styres og forvaltes", "En situasjon der forhandlinger har brutt sammen og partene ikke lenger snakkes ved"],
      explanation: "Definisjonen nevner ikke vold: de aller fleste konflikter føres fredelig, gjennom forhandling, domstoler eller press. Voldsbruk gjør konflikten til en væpnet konflikt, som er en snevrere kategori. Sammenbrudd i forhandlinger er en fase, ikke det som definerer at en konflikt finnes.",
    },
    {
      question: "Hva skiller væpnet konflikt fra krig i faglige framstillinger?",
      options: ["Krig brukes om de mest omfattende tilfellene, gjerne avgrenset med en målekonvensjon", "Krig krever en formell krigserklæring, mens en væpnet konflikt kan oppstå helt uten en slik", "Krig står mellom stater, mens væpnet konflikt også kan ha ikke-statlige parter", "Krig varer over flere år, mens væpnet konflikt kan være over i løpet av noen dager"],
      explanation: "Krig brukes om de mest omfattende væpnede konfliktene, og terskelen er en målekonvensjon som gjør tellinger sammenlignbare — ikke en naturlig grense. Formell krigserklæring er ikke et vilkår i disse framstillingene. Både kriger og andre væpnede konflikter kan ha statlige og ikke-statlige parter.",
    },
    {
      question: "Hva kjennetegner en innenstatlig konflikt?",
      options: ["Myndighetene strides med organiserte grupper inne i staten, ofte om kontroll over staten", "To stater strides om nøyaktig hvor grensen mellom dem skal gå, uten at det blir full krig", "En stat kjemper mot en ikke-statlig part utenfor sitt eget kjerneterritorium", "Flere stater griper inn i en tredje stat etter fullmakt fra et internasjonalt organ"],
      explanation: "Partene er myndighetene og ikke-statlige grupper i samme stat, og kampen står ofte om kontroll over staten selv eller om løsrivelse. Grensetvist mellom stater er mellomstatlig, og kamp mot en ikke-statlig part utenfor eget kjerneområde er ekstrastatlig. Merk at innenstatlige konflikter sjelden er rent innenlandske, siden finansiering og støtte ofte kommer utenfra.",
    },
    {
      question: "Hvorfor er kategorien ekstrastatlig konflikt nesten tom i dag?",
      options: ["Fordi avkoloniseringen gjorde de aktuelle områdene om til selvstendige stater", "Fordi slike konflikter nå regnes som terrorisme og sorteres i en annen kategori", "Fordi folkeretten forbød dem, slik at partene måtte velge andre kampformer", "Fordi kategorien ble slått sammen med militariserte mellomstatlige konflikter"],
      explanation: "Kategorien dekket først og fremst kolonikrigene, og den tømtes da områdene ble stater — en konflikt som var ekstrastatlig i 1955, ville i dag vært mellomstatlig eller innenstatlig. Terrorisme er en handlingsform og ikke en egen konflikttype i denne typologien. Ingen sammenslåing av kategorier har funnet sted.",
    },
    {
      question: "Hva er en militarisert mellomstatlig konflikt?",
      options: ["En tvist mellom stater der makt trues med, vises fram eller brukes under krigsterskelen", "En krig mellom stater der begge parter har mobilisert hele sitt militære apparat", "En konflikt der militæret har tatt makten i minst én av statene som er involvert", "En konflikt der partene bygger opp styrker uten at noen av dem noen gang truer"],
      explanation: "Kategorien fanger mellomrommet mellom fredelig uenighet og krig: mobilisering langs en grense, en flåtedemonstrasjon, en kort trefning, et beslag. Full mobilisering til krig er noe annet, og at militæret styrer innenrikspolitisk er et helt annet spørsmål. Poenget er nettopp at makt kommer i spill uten at det blir krig.",
    },
    {
      question: "Hva er et sikkerhetsdilemma?",
      options: ["At tiltak for egen sikkerhet gjør en annen part utrygg, slik at begge ender mindre trygge", "At en stat må velge mellom å bruke penger på forsvar eller på velferd for befolkningen", "At en stat er bundet av en allianse til å delta i konflikter den selv ikke er part i", "At en stat ikke kan forsvare hele territoriet sitt samtidig og må prioritere enkelte deler"],
      explanation: "Dilemmaet er at det ikke finnes noe trygt valg: opprustning gir en spiral, mens tilbakeholdenhet gir sårbarhet om motparten ruster opp likevel. Avveiningen mellom forsvar og velferd er en budsjettprioritering, ikke dette begrepet. Alliansebindinger og territoriell prioritering er andre problemer med andre navn.",
    },
    {
      question: "Hvilket ledd bærer sikkerhetsdilemmaet?",
      options: ["At en stat kan observere hva en annen har, men ikke hva den vil, nå eller senere", "At stater i utgangspunktet mistenker naboene sine for å ha aggressive og skjulte hensikter", "At forsvarsbudsjetter er politisk lettere å øke enn å redusere igjen i ettertid", "At militær teknologi utvikler seg raskere enn statene rekker å tilpasse seg den"],
      explanation: "Intensjonsusikkerheten bærer mekanismen: kapasiteter kan telles, hensikter ikke, og hensikter kan dessuten endres når en ny regjering kommer til. Forutsatt mistanke er ikke nødvendig — poenget er at også fredelige og tillitsfulle stater havner i spiralen. Budsjettpolitikk og teknologiutvikling kan forsterke forløpet, men de er ikke det leddet begrepet hviler på.",
    },
    {
      question: "Hvorfor kan ikke en stat lese motpartens hensikter ut av militæret hennes?",
      options: ["Fordi de fleste militære midler kan brukes både til forsvar og til angrep", "Fordi militære opplysninger alltid holdes hemmelig og aldri kan verifiseres av andre", "Fordi antall soldater sier lite om hvor godt trent og utrustet styrkene faktisk er", "Fordi hensikter fastsettes av politikerne, mens militæret bare utfører det som besluttes"],
      explanation: "Tvetydigheten er poenget: en rakett som skal ramme en angripende styrke, kan også ramme en by, og et varslingssystem kan brukes til å lete etter mål. Hemmelighold og treningsnivå er reelle problemer, men de forklarer ikke hvorfor selv fullt synlige kapasiteter er tvetydige. At politikerne bestemmer, endrer ikke at beslutningen kan endres senere.",
    },
    {
      question: "Hvilket ledd gjør opprustningsspiralen selvforsterkende?",
      options: ["At den første parten leser motpartens svar som bevis på at mistanken var berettiget", "At begge parter over tid får råd til å bruke mer penger på forsvar enn før", "At forsvarsindustrien i begge land presser på for større bestillinger og nye kontrakter", "At allierte stater blir dratt inn og øker sine egne styrker i takt med hovedpartene"],
      explanation: "Det fjerde leddet lukker sløyfen: motpartens svar var utelukkende forårsaket av det første trekket, men leses som en bekreftelse på at motparten var farlig. Derfor har begge parter oppriktig belegg for at den andre begynte. Industripress og alliansespredning kan forsterke forløpet, men de er ikke mekanismen begrepet beskriver.",
    },
    {
      question: "Hva må et tiltak treffe for å dempe et sikkerhetsdilemma?",
      options: ["Usikkerheten om motpartens hensikter, gjennom åpenhet, verifikasjon og faste kanaler", "Kostnaden ved forsvarsmateriell, slik at opprustning blir altfor dyr for begge parter over tid", "Antallet allierte, slik at ingen av partene kan regne med hjelp fra andre stater", "Den offentlige opinionen, slik at velgerne slutter å kreve et sterkere forsvar"],
      explanation: "Fordi mekanismen hviler på usikkerhet om hensikter, må mottiltaket angripe nettopp den: synlige styrker og budsjetter, etterprøvbare avtaler og møteplasser der uventede trekk kan forklares. Å gjøre materiell dyrere eller å fjerne allierte endrer ikke at hensikter er usynlige. Merk at ingen av tiltakene opphever dilemmaet, siden hensikter kan endres senere.",
    },
    {
      question: "Hva er underliggende årsaker til en væpnet konflikt?",
      options: ["Langsomt virkende forhold som gjør vold til et tenkelig utfall mellom disse partene", "Den konkrete begivenheten som starter forløpet i dagene før kampene bryter ut", "Forhold som gjør at ventingen blir kostbar for minst én av partene akkurat nå", "De militære planene partene har utarbeidet for hvordan en krig skal føres"],
      explanation: "Underliggende årsaker bygger trykk over lang tid: uavklarte krav, langvarig rivalisering, konkurranse om ressurser, uforsonlige oppfatninger. Den konkrete begivenheten er den utløsende hendelsen, og det som gjør ventingen kostbar, er en umiddelbar årsak. Merk at underliggende årsaker ikke kan forklare tidspunktet.",
    },
    {
      question: "Hva kjennetegner en umiddelbar årsak til krig?",
      options: ["At den gjør ventingen kostbar, slik at handling nå framstår som bedre enn handling senere", "At den har virket over flere tiår og gjort forholdet mellom partene fiendtlig", "At den utløser det konkrete forløpet i løpet av dager eller noen få uker", "At den kan påvises statistisk i et stort antall konflikter over lang tid"],
      explanation: "Umiddelbare årsaker gjør at ventingen selv blir kostbar: et lukkende mulighetsvindu, en mobilisering som er vanskelig å reversere, en innenrikspolitisk situasjon som utelukker ettergivenhet. Forhold som har virket i tiår, er underliggende, og det som starter forløpet i løpet av dager, er den utløsende hendelsen. Statistisk påvisbarhet er ikke det som definerer kategorien.",
    },
    {
      question: "Hvorfor er en utløsende hendelse ikke en tilstrekkelig forklaring på en krig?",
      options: ["Fordi den samme hendelsen i et forhold uten trykk ville blitt håndtert uten vold", "Fordi utløsende hendelser sjelden lar seg fastslå sikkert i ettertid av historikere", "Fordi partene alltid oppgir en annen begrunnelse enn den virkelige for handlingene sine", "Fordi hendelsen som regel inntreffer etter at kampene allerede har begynt"],
      explanation: "Den utløsende hendelsen er en anledning: uten trykk fra underliggende forhold ville den blitt møtt med beklagelse, etterforskning og erstatning. At den utløste krig, forteller derfor om tilstanden forholdet var i. Utløsende hendelser er som regel godt dokumentert, og de inntreffer per definisjon før forløpet de starter.",
    },
    {
      question: "Hvordan forklarer realismen at krig bryter ut?",
      options: ["Med maktfordeling i endring og uenighet om hvem som ville vinne en konfrontasjon", "Med at minst én av partene er styrt av ledere som ønsker konflikt for egen vinning", "Med at institusjoner og økonomiske bånd mellom partene mangler eller er for svake", "Med at partene har utviklet fiendebilder som farger hvordan alt motparten gjør tolkes"],
      explanation: "Realismens poeng er at parter med samme og korrekte oppfatning av utfallet i prinsippet kunne avtalt resultatet uten å bære krigens kostnader — derfor er det uenigheten om utfallet, ikke fiendskapet, som gjør krig til et valg. Manglende institusjoner er liberalismens forklaring, og fiendebilder er konstruktivismens. Onde ledere er en forklaring på et helt annet nivå.",
    },
    {
      question: "Hvordan forklarer konstruktivismen at konflikter vedvarer?",
      options: ["Med at fiendebilder virker som et filter der alt motparten gjør leses i verste mening", "Med at partene mangler militær kapasitet til å tvinge fram en avgjørelse på slagmarken", "Med at maktforholdet mellom partene er så jevnt at ingen av dem kan vinne raskt", "Med at ytre stormakter har interesse av at konflikten fortsetter og støtter begge sider"],
      explanation: "Fiendebildet fungerer som et filter: nøytrale opplysninger leses som skjulte trusler, og ettergivenhet leses som list, slik at tilnærminger mistenkeliggjøres i stedet for å prøves. Jevn styrke og manglende kapasitet er realistiske forklaringer på det samme utfallet. Ytre støtte er en tilleggsfaktor, ikke konstruktivismens mekanisme.",
    },
    {
      question: "Hva er Kaldors hovedpoeng med begrepet «new wars»?",
      options: ["At skillene mellom krig, organisert kriminalitet og overgrep mot sivile viskes ut", "At kriger i dag føres med langt mer avansert teknologi enn kriger gjorde tidligere", "At antallet mellomstatlige kriger har gått ned mens antallet stater har gått opp", "At kriger i dag varer kortere fordi internasjonale organer griper raskere inn"],
      explanation: "Sammenblandingen av de tre kategoriene er begrepets kjerne, og mekanismen som binder dem sammen er finansieringen: kamp krever penger, pengene kommer fra ulovlig handel, og den handelen krever kontroll over folk og område. Teknologi hører til revolusjonen i militære forhold, som er et annet begrep. Nedgangen i mellomstatlige kriger er en observasjon begrepet skal forklare.",
    },
    {
      question: "Hvorfor mangler mange «new wars» et innebygd sluttpunkt?",
      options: ["Fordi finansieringen kommer fra krigføringen selv, slik at fortsatt kamp er lønnsom", "Fordi partene mangler kapasitet til å tvinge fram en avgjørelse på slagmarken", "Fordi internasjonale organer nekter å anerkjenne ikke-statlige parter i forhandlinger", "Fordi konfliktene handler om territorium som ikke lar seg dele mellom partene"],
      explanation: "Når inntektene kommer fra plyndring, smugling og ressursuttak, taper de som fører krigen på at den tar slutt. En klassisk krig har et sluttpunkt innebygd fordi målet er å tvinge motparten til bordet, og det målet er borte her. Manglende anerkjennelse og udelelige krav gjør avslutning vanskeligere, men de er ikke mekanismen Kaldor peker på.",
    },
    {
      question: "Hva kjennetegner mobiliseringen i det Kaldor kaller «new wars»?",
      options: ["At den skjer langs identitet snarere enn rundt et politisk program som kan forhandles", "At den skjer gjennom alminnelig verneplikt, slik statene organiserte styrkene sine tidligere", "At den skjer gjennom internasjonale nettverk av frivillige fra mange ulike land", "At den skjer ved at en stat betaler for at andres borgere skal kjempe på dens vegne"],
      explanation: "Identitetsmobilisering gjør konflikten vanskeligere å løse, fordi et krav om hvem som hører til på et område ikke kan deles i to slik et krav om inntektsandeler kan. Verneplikt hører til den klassiske krigsmodellen. Utenlandske frivillige og leiesoldater kan forekomme, men de er ikke det kjennetegnet begrepet bygger på.",
    },
    {
      question: "Hva er den klassiske krigsmodellen som «new wars» settes opp mot?",
      options: ["Krig mellom stater, ført av uniformerte styrker, finansiert over budsjett, med politisk mål", "Krig mellom stormakter der begge sider har kjernevåpen og derfor unngår direkte kamp", "Krig der partene følger folkerettens regler om behandling av fanger og sivile", "Krig som avsluttes ved at en tredjepart megler fram en avtale mellom partene"],
      explanation: "Modellen beskriver stater med uniformerte styrker under politisk kommando, finansiert over statsbudsjettet, med målet å tvinge motparten til å godta en ordning. Kjernevåpen og meglede avslutninger er trekk ved bestemte konflikter, ikke ved modellen. At reglene faktisk følges, er heller ikke en del av modellen — men reglene er skrevet med den for øye.",
    },
    {
      question: "Hvilken innvending er den tyngste mot «new wars»-begrepet?",
      options: ["At flere av trekkene har historiske forløpere, slik at kontrasten hviler på et pyntet bilde", "At begrepet ikke lar seg bruke på konflikter der en stat er part på den ene siden", "At det ikke finnes tall som viser hvor mange konflikter som faller inn under det", "At det bygger på et lite antall tilfeller fra én bestemt del av verden"],
      explanation: "Innvendingen er at plyndring som finansiering, vold mot sivile og mobilisering langs tilhørighet alle har forløpere, og at den korte perioden med uniformerte armeer og klare frontlinjer snarere er unntaket. Begrepet lar seg fint bruke der en stat er part. Å drøfte begge sider av nyhetsspørsmålet er nettopp det som kreves i denne sjangeren.",
    },
    {
      question: "Hvilke tre kjennetegn inngår i definisjonen av terrorisme?",
      options: ["Vold mot sivile, ikke-statlig utøver og et politisk formål som virker gjennom frykt", "Vold mot sivile, statlig utøver og et mål om å skifte ut en sittende regjering", "Vold mot militære mål, en ikke-statlig utøver og et religiøst begrunnet politisk formål", "Vold i store byer, organisert planlegging og finansiering fra kilder i utlandet"],
      explanation: "Det tredje leddet gjør definisjonen presis: ofrene er et middel til å presse en tredjepart, ikke målet i seg selv. Avgrensningen til ikke-statlige utøvere er et definisjonsvalg og en av grunnene til at begrepet er omstridt. Vold rettet mot militære mål er nærmere geriljakrig, som er nabobegrepet.",
    },
    {
      question: "Hva skiller terrorisme fra geriljakrig?",
      options: ["Terrorisme retter seg mot sivile for å skape press, geriljakrig mot militære mål", "Terrorisme utføres av enkeltpersoner, mens geriljakrig krever en organisert bevegelse", "Terrorisme har religiøse motiver, mens geriljakrig har politiske eller sosiale motiver", "Terrorisme rammer flere mennesker enn geriljakrig gjør i løpet av en konflikt"],
      explanation: "Skillet ligger i hvem volden rettes mot og hvordan den skal virke: press gjennom frykt hos sivile, mot nedsliting av militære styrker. Samme gruppe kan bruke begge deler, men handlingene sorteres ulikt. Verken organisasjonsgrad, motiv eller omfang er det som skiller de to begrepene.",
    },
    {
      question: "Hva er revolusjonen i militære forhold?",
      options: ["Tanken om at informasjonsteknologi og presisjon har endret hvordan militær makt virker", "Tanken om at krigføring er blitt overtatt av private selskaper i stedet for statlige styrker", "Tanken om at kjernevåpen har gjort krig mellom stormakter praktisk talt umulig", "Tanken om at militære beslutninger nå tas av allierte organer i stedet for nasjonalt"],
      explanation: "Påstanden er at teknologien tillater å ramme få og nøyaktig utvalgte mål, slik at styrke blir mindre avhengig av antall soldater. Privatisering av krigføring og allierte beslutningsorganer er andre utviklingstrekk. At kjernevåpen hindrer stormaktskrig, er et eget argument som ligger under geoøkonomi-tanken.",
    },
    {
      question: "Hva er en asymmetrisk konflikt?",
      options: ["En konflikt der partene er svært ulike i styrke og den svakere unngår motpartens styrke", "En konflikt der bare den ene parten er en anerkjent stat med folkerettslige forpliktelser", "En konflikt der partene er uenige om hvem som startet og hvem som bare svarte", "En konflikt der partene har samme mål, men svært ulike midler til rådighet"],
      explanation: "Den svakere velger kampformer som ikke møter den sterkere der den er sterkest, og utnytter i stedet tid, terreng og motpartens tålegrense hjemme. Mekanismen som gjør begrepet skarpt, er at overlegenheten selv gir grunn til å velge nettopp den kampformen den overlegne har vanskeligst for å håndtere. Hvem som er stat, og hvem som startet, er andre spørsmål.",
    },
  ],
  'inter1000-1-3': [
    {
      question: "Hva er en verdensorden?",
      options: ["Mønsteret av maktfordeling, regler og forventninger som gjør politikken forutsigbar", "En periode uten krig mellom stormaktene, sikret gjennom avtaler og felles institusjoner", "Den samlede rettsordenen som følger av traktatene statene har sluttet seg til", "Rangeringen av statene etter hvor mye militær og økonomisk makt de rår over"],
      explanation: "Ordenen står på to bein: makt, altså hvem som kan hva, og regler og forventninger, altså hva som regnes som normalt. Den er ikke det samme som fred — den kalde krigen var svært konfliktfylt og likevel forutsigbar. Traktatverket alene fanger bare det ene beinet.",
    },
    {
      question: "Hva skiller et internasjonalt system fra en internasjonal orden?",
      options: ["Systemet er at aktørene påvirker hverandre, ordenen at samspillet i tillegg er mønstret", "Systemet omfatter alle stater, mens ordenen bare omfatter stormaktene i perioden", "Systemet er en teoretisk konstruksjon, mens ordenen kan observeres direkte i praksis av alle", "Systemet gjelder sikkerhetspolitikk, mens ordenen også omfatter økonomi og rett"],
      explanation: "Skillet er nyttig fordi det gir en presis måte å beskrive et sammenbrudd på: systemet består selv om ordenen faller, og det som forsvinner, er forutsigbarheten. Begge begrepene omfatter alle stater og alle saksfelt. Begge er dessuten analytiske begreper som brukes på observerbare forhold.",
    },
    {
      question: "Hva er polaritet?",
      options: ["Antallet stater som er mektige nok til å forme systemet rundt seg", "Graden av motsetning mellom to blokker som står mot hverandre i systemet", "Fordelingen av stemmer mellom medlemmene i de viktigste internasjonale organene", "Antallet stormakter som har kjernevåpen og dermed kan avskrekke hverandre"],
      explanation: "Polaritet teller tyngdepunkter: ett gir unipolaritet, to gir bipolaritet, tre eller flere gir multipolaritet. Fellen er å telle store økonomier og kalle det polaritet — det avgjørende er evnen til å forme systemet militært, økonomisk og politisk samlet. Stemmefordeling i organer er en institusjonell ordning, ikke en maktfordeling.",
    },
    {
      question: "Hva er unipolaritet?",
      options: ["En fordeling der én stat er så overlegen at ingen kombinasjon utgjør en reell motvekt", "En fordeling der én stat setter reglene for alle de andre gjennom felles institusjoner", "En fordeling der alle stater orienterer seg mot det samme økonomiske sentrum", "En fordeling der bare én stat har evne til å føre krig utenfor eget nærområde"],
      explanation: "Unipolaritet beskriver maktfordelingen: ett tyngdepunkt uten reell motvekt. At den overlegne staten faktisk setter rammene, er hegemoni, og det er mulig å ha fordelingen uten det. De to spådommene om unipolaritet — at den er stabil fordi ingen kan utfordre, og ustabil fordi ubalanse innbyr til motvekt — er begge realistiske posisjoner.",
    },
    {
      question: "Hvilket argument taler for at bipolaritet er stabilt?",
      options: ["At styrkeforholdet er lett å lese og ansvaret for å svare er entydig plassert", "At de to partene handler så mye med hverandre at brudd blir for kostbart", "At små stater kan spille de to mot hverandre og dermed dempe motsetningen", "At de to partene deler ansvaret for å opprettholde felles institusjoner"],
      explanation: "Med to parter er styrkeforholdet forholdsvis lett å lese og alliansene skifter sjelden, slik at feilberegningsrisikoen er lavere enn med mange jevnbyrdige. Motargumentet er at enhver konflikt blir et prøvestykke på troverdighet. At de to handler mye med hverandre, gjelder ikke den kalde krigens blokker, som handlet lite.",
    },
    {
      question: "Hva er hovedinnvendingen mot at multipolaritet er stabilt?",
      options: ["At hver part må lese flere motparter samtidig, slik at feilberegning blir mer sannsynlig", "At ingen av partene er sterke nok til å håndheve reglene som systemet hviler på", "At små stater tvinges til å velge side og dermed mister sin handlefrihet", "At handelen mellom partene blir mindre når makten er spredt på mange sentre"],
      explanation: "Med flere jevnbyrdige blir styrkeforholdene uklare og forpliktelser mindre troverdige fordi partnere kan bytte side — og feilberegning er den viktigste enkeltårsaken til krig i realismens forklaring. Balanseargumentet trekker motsatt vei og er like realistisk. At små stater må velge side, er derimot et kjennetegn ved bipolaritet.",
    },
    {
      question: "Hva kjennetegner geoøkonomi-modellen?",
      options: ["At stormaktsrivalisering i hovedsak føres med økonomiske midler framfor militære", "At økonomisk vekst fordeles jevnere mellom land enn den har gjort tidligere", "At geografisk plassering avgjør hvilke stater som blir de tyngste i systemet", "At internasjonal handel styres av felles regler som alle de tunge aktørene følger"],
      explanation: "Drivkraften er at militær konfrontasjon mellom kjernefysisk bevæpnede stormakter er for kostbar, mens økonomisk press er gradert og reverserbart — derfor flytter rivaliseringen seg dit den kan føres. Modellen handler ikke om geografi, tross navnet. At handelen styres av felles regler alle følger, er nærmere den liberale ordensmodellen.",
    },
    {
      question: "Hva er den innebygde spenningen i geoøkonomisk maktbruk?",
      options: ["Pressmiddelet krever en avhengighet som gjør den som presser, sårbar selv", "Pressmiddelet virker bare mot stater som allerede er militært underlegne", "Pressmiddelet kan bare brukes én gang før motparten finner andre leverandører", "Pressmiddelet forutsetter at et internasjonalt organ godkjenner tiltaket først"],
      explanation: "Et økonomisk pressmiddel virker bare mot en part som er avhengig, og avhengighet forutsetter handel — den som vil ha maktmiddelet, må først bygge båndet, og båndet gjør ham selv sårbar. At motparten over tid finner alternativer, er en reell begrensning, men ikke selve spenningen. Militær styrke og godkjenning fra organer er ikke vilkår for slike tiltak.",
    },
    {
      question: "Hva er drivkraften i multipolaritetsmodellen?",
      options: ["Spredt økonomisk vekst, der militær og teknologisk evne følger etter med et etterslep", "Utbredelsen av demokratiske styreformer i stadig flere av verdens land", "Innenrikspolitisk motstand mot kostnadene ved internasjonale ordninger", "Kulturell tilhørighet som overtar når ideologiske skillelinjer taper kraft"],
      explanation: "Modellen bygger på at økonomisk tyngde er spredt til flere land og at evne følger etter, slik at ingen kan bære kostnadene ved å ordne verden alene. Demokratispredning driver modellen om demokratisk fred, innenrikspolitisk motstand driver fragmenteringsmodellen, og kulturell tilhørighet driver modellen om sivilisasjonskonflikt.",
    },
    {
      question: "Hva skiller en mulig ny bipolaritet fra den kalde krigens?",
      options: ["At to tyngdepunkter i dag kan være dypt økonomisk sammenvevd med hverandre", "At den nye bipolariteten har flere allierte stater på hver av de to sidene", "At de to partene i dag har omtrent like store befolkninger og landområder", "At kjernevåpen ikke lenger spiller noen rolle i forholdet mellom de to partene"],
      explanation: "Den kalde krigens blokker handlet lite med hverandre, mens dagens tyngdepunkter kan være tett sammenvevd — det gjør avskrekking billigere og avkobling dyrere, og gir en annen dynamikk. Å bruke den kalde krigen som mal uten denne presiseringen er en typisk forenkling. Antall allierte og befolkningsstørrelse er ikke det som skiller modellene.",
    },
    {
      question: "Hva er drivkraften i modellen om demokratisk fred som framtidsorden?",
      options: ["Utbredelse av demokratisk styreform og et tett institusjonsnettverk mellom demokratier", "At demokratiske stater har sterkere økonomier og derfor større militær kapasitet", "At demokratier oftere enn andre stater deltar i internasjonale fredsoperasjoner", "At velgerne i demokratier krever at regjeringene slutter seg til alle de store avtalene"],
      explanation: "Modellen hviler på de to mekanismene fra teorien: at kostnaden ved krig bæres av velgere som kan straffe lederne, og at demokratier overfører sin egen forventning om forhandling til andre demokratier. Økonomisk styrke og deltakelse i operasjoner er ikke det modellen bygger på. Modellen mister drivkraft dersom demokratiet ikke sprer seg.",
    },
    {
      question: "Hva er den tyngste innvendingen mot modellen om sivilisasjonskonflikt?",
      options: ["At blokkene ikke er enhetlige, og at langvarige konflikter har stått innad i dem", "At modellen ikke sier noe om hvilken rolle økonomisk makt spiller i systemet", "At den bygger på hendelser som ligger for langt tilbake i tid til å være relevante", "At den forutsetter at alle stater er like sterke innenfor hver av blokkene"],
      explanation: "Flere av de mest langvarige konfliktene har stått mellom stater som etter modellen tilhører samme blokk, og det treffer modellens kjerne. En annen tung innvending er at tilhørighet mobiliseres og endres, mens modellen forutsetter at den er fast. At kategoriene selv er omstridte tolkningsvalg, er den tredje.",
    },
    {
      question: "Hva er drivkraften i fragmenteringsmodellen?",
      options: ["Innenrikspolitisk motstand mot det de internasjonale ordningene koster velgerne", "At makten samler seg i to tyngdepunkter som trekker de øvrige mot hver sin side", "At kulturelle blokker overtar som de viktigste skillelinjene i verdenspolitikken", "At økonomisk vekst spres til flere land som bygger selvstendig militær evne"],
      explanation: "Mekanismen går nedenfra og opp: der grupper opplever at felles ordninger koster dem noe, får politikere som lover å ta kontrollen tilbake, oppslutning, og samordningen svekkes. At makten samler seg i to tyngdepunkter, driver modellen om ny bipolaritet; kulturell tilhørighet driver sivilisasjonsmodellen; spredt vekst driver multipolaritetsmodellen.",
    },
    {
      question: "Hva skiller fragmentering fra multipolaritet?",
      options: ["Multipolaritet gjelder antall tyngdepunkter, fragmentering at samordningen svekkes", "Multipolaritet gjelder økonomisk makt, mens fragmentering gjelder militær makt", "Multipolaritet er en modell for framtiden, mens fragmentering beskriver fortiden", "Multipolaritet gjelder bare stormaktene, mens fragmentering gjelder de mindre statene"],
      explanation: "Det er fullt mulig å ha få tyngdepunkter og likevel svak samordning, og det er nettopp den kombinasjonen fragmenteringsmodellen advarer mot. Begge modellene gjelder framtiden, begge omfatter alle typer makt, og begge gjelder store og små stater. Å behandle dem som samme sak er en vanlig upresishet.",
    },
    {
      question: "Hvorfor må sannsynlighet og ønskelighet holdes fra hverandre?",
      options: ["Fordi vi lett vurderer et utfall vi ønsker som mer sannsynlig enn belegget tilsier", "Fordi bare sannsynlighet kan begrunnes faglig, mens ønskelighet er en privat mening", "Fordi ønskelighet ikke hører hjemme i en eksamensbesvarelse i det hele tatt", "Fordi sannsynlighet gjelder kort sikt, mens ønskelighet alltid gjelder lang sikt"],
      explanation: "Blandingen gjør sannsynlighetsvurderingen til en forkledd verdivurdering, og kontrollen er å spørre om hver setning sier noe om hva som skjer eller om hva som burde skje. Ønskelighet hører absolutt hjemme i besvarelsen — standpunktet er fritt, og det er begrunnelsen som premieres. Tidshorisont har ingenting med skillet å gjøre.",
    },
    {
      question: "Hva kreves for at en sammenligning skal være fullstendig?",
      options: ["At begge ledd behandles på hver eneste akse sammenligningen bruker", "At begge ledd får omtrent like mange setninger i den ferdige teksten", "At sammenligningen dekker minst fem ulike akser før den konkluderer", "At likhetene behandles først og forskjellene deretter i et eget avsnitt"],
      explanation: "Testen er at hver akse har begge ledd, og kontrollen tar ti sekunder med aksene skrevet opp i margen. Å beskrive det ene leddet på noen akser og det andre på andre er den vanligste feilen i sjangeren. Tre til fire akser holder i en eksamensbesvarelse, og rekkefølgen mellom likheter og forskjeller er fri.",
    },
    {
      question: "Hvorfor bør en sammenligning av framtidsmodeller begynne på drivkraft-aksen?",
      options: ["Fordi drivkraften avgjør hvilke opplysninger som er relevante og hva som ville motbevist modellen", "Fordi drivkraften er den enkleste aksen å skrive om når man har dårlig tid", "Fordi leseren forventer at en besvarelse starter med årsaker før den kommer til virkninger", "Fordi drivkraften er den eneste aksen der modellene faktisk er uenige med hverandre"],
      explanation: "Drivkraften fastslår hva modellene er uenige om, og den avgjør både hvilke opplysninger som teller og hvor raskt endringen kan gå — vekst forskyver seg over tiår, en styreform kan endres på få år. Modellene er uenige på flere akser enn denne. Rekkefølgen er valgt av analytiske grunner, ikke av hensyn til forventet oppbygning.",
    },
    {
      question: "Hva er en empirisk indikator i drøftingen av en framtidsmodell?",
      options: ["En observasjon som ville talt for eller mot modellen dersom vi faktisk så den", "Et historisk eksempel som viser hva modellen går ut på i praksis", "Et tall som viser hvor stor andel av verdens produksjon hver stormakt står for", "En framskrivning som anslår når modellen eventuelt vil slå til i virkeligheten"],
      explanation: "Indikatoren gjør vurderingen etterprøvbar: en modell uten indikator er en mening. At mellomstore stater i praksis må velge side i sak etter sak, ville for eksempel talt for en ny bipolaritet. Et illustrerende eksempel viser bare hva modellen mener, og en framskrivning erstatter ikke prøven.",
    },
  ],
  'inter1000-2-1': [
    {
      question: "Hva menes med at maktfordelingen under den kalde krigen var bipolar?",
      options: ["To stater var så tunge at systemets konflikter og allianser organiserte seg rundt dem", "To stater sto for hver sin samfunnsmodell, og de to modellene var uforenlige med hverandre", "To stater hadde kjernevåpen, mens ingen andre stater hadde skaffet seg slike våpen", "To militærallianser dekket Europa, mens resten av verden sto helt utenfor begge to"],
      explanation: "Bipolaritet er en påstand om maktfordelingen: to stater er så mye tyngre enn alle andre at systemets viktigste konflikter og allianser organiserer seg rundt dem. At de to også sto for hver sin samfunnsmodell, er et tilleggstrekk ved denne bipolariteten, ikke en del av definisjonen. Kjernevåpen og allianser er kjennetegn ved perioden, ikke innholdet i begrepet.",
    },
    {
      question: "Hva skiller bipolaritet fra unipolaritet?",
      options: ["To poler organiserer systemet, mot at én er så overlegen at ingen motvekt dannes", "To stormakter er i åpen krig, mot at én stormakt har vunnet krigen mot den andre", "To stater har vetorett i rådet, mot at bare én av dem beholder retten sin videre", "To ideologier konkurrerer om tilslutning, mot at bare én av dem har tilhengere igjen"],
      explanation: "Begge begrepene beskriver maktfordeling. I bipolaritet er to stater så tunge at systemet organiseres rundt dem; i unipolaritet er én så overlegen at ingen enkeltstat eller koalisjon utgjør en reell motvekt. Verken åpen krig, vetorett eller ideologisk oppslutning inngår i definisjonene.",
    },
    {
      question: "Hvorfor holdt den kalde krigen seg kald?",
      options: ["Begge hadde nok våpen, spredt nok, til at et angrep uansett ville bli besvart", "Begge parter hadde forpliktet seg i en avtale til aldri å angripe den andre først", "Begge parter manglet evnen til å nå den andres territorium med sine egne styrker", "Begge parter var bundet av vedtak i Sikkerhetsrådet som forbød dem å bruke makt"],
      explanation: "Det avgjørende leddet er at ingen av partene kunne ødelegge motpartens evne til å svare. Da forsvinner gevinsten ved å slå til først, og et direkte angrep blir uten mening. Det fantes ingen avtale om ikke-angrep som bar dette, og begge hadde full rekkevidde; vedtak i Sikkerhetsrådet var utelukket nettopp fordi begge kunne stanse dem.",
    },
    {
      question: "Hva kjennetegner en stedfortrederkrig?",
      options: ["To stormakter støtter hver sin part i en tredje stats konflikt i stedet for å slåss selv", "To stormakter erklærer krig mot hverandre, men lar styrkene møtes utenfor sitt eget område", "To stormakter enes om å la et internasjonalt organ avgjøre konflikten mellom dem", "To stormakter fører en konflikt utelukkende med økonomiske og diplomatiske midler"],
      explanation: "Formen består i at rivaliseringen føres gjennom støtte til hver sin part i andres konflikt — våpen, penger, rådgivere, etterretning eller diplomatisk dekning — uten at stormaktene erklærer hverandre krig. Poenget er nettopp at ingen krigserklæring finnes. Rene økonomiske virkemidler er noe annet, og voldgift er det motsatte av formen.",
    },
    {
      question: "Hva er den viktigste innvendingen mot å kalle enhver konflikt i perioden en stedfortrederkrig?",
      options: ["Lokale konflikter hadde egne årsaker som gikk forut for stormaktenes engasjement", "Stormaktene deltok sjelden i konflikter utenfor sine egne innflytelsessfærer", "Betegnelsen forutsetter at begge stormaktene støttet den samme parten i konflikten", "Betegnelsen brukes bare om konflikter der det ble sendt inn regulære styrker"],
      explanation: "Konfliktene i tredjeland hadde egne, lokale drivkrefter som lå der før supermaktene engasjerte seg. Å redusere dem til rene forlengelser av rivaliseringen er en feillesning som fjerner de lokale aktørenes egne mål. Stormaktene støttet per definisjon ulike parter, og formen krever ikke regulære styrker.",
    },
    {
      question: "Hva er en historiografisk debatt?",
      options: ["Uenighet blant historikere om hvordan en hendelse skal forklares, ikke om hva som skjedde", "Uenighet blant historikere om hvilke kilder som er ekte og hvilke som er senere forfalskninger", "Uenighet mellom historikere og samfunnsvitere om hvilket fag som eier et bestemt tema", "Uenighet blant historikere om hvilken rekkefølge hendelsene i et forløp faktisk hadde"],
      explanation: "Partene i en historiografisk debatt kan være enige om alle hendelsene og likevel uenige om hvilke av dem som bærer forklaringen. Kildekritikk og datering er andre typer uenighet, og faggrensespørsmål er ikke historiografi i denne betydningen. På eksamen er poenget at du skal vise at forklaringsvalget finnes, og så ta det begrunnet.",
    },
    {
      question: "Hva peker ideologiforklaringen på den kalde krigens utbrudd på?",
      options: ["To uforenlige samfunnsmodeller som begge ble oppfattet som allmenngyldige", "To lederes personlige mistro til hverandre etter møtene ved krigens slutt", "To økonomiske systemer som konkurrerte om de samme markedene og råvarene", "To alliansesystemer som var opprettet allerede før krigen mot Tyskland var over"],
      explanation: "Kjernen i ideologiforklaringen er at partene sto for uforenlige samfunnsmodeller som begge ble ansett som allmenngyldige, slik at hver enkelt tvist ble en prøve på hvem som hadde rett om samfunnet som sådan. Lederes mistro hører til de sekundære årsakene, og alliansene ble opprettet etter at konflikten var i gang.",
    },
    {
      question: "Hva forklarer ideologiforklaringen særlig godt?",
      options: ["At konflikten spredte seg til områder uten strategisk verdi, og at kompromisser uteble", "At rivaliseringen fulgte nøyaktig de områdene som hadde aller størst strategisk betydning", "At begge parter samarbeidet med regimer de i prinsippet fordømte når det lønte seg", "At konflikten tok slutt omtrent samtidig med at den ene økonomien stagnerte"],
      explanation: "Ideologiforklaringen forklarer godt konfliktens omfang: at den bredte seg til områder uten strategisk verdi, ble ført med fortellinger like mye som med våpen, og ga så lite rom for kompromiss. At rivaliseringen fulgte de strategisk viktige områdene og at ideologien ble satt til side når det lønte seg, er derimot det maktpolitikkforklaringen forklarer best — og det ideologiforklaringen sliter med.",
    },
    {
      question: "Hva peker maktpolitikkforklaringen på?",
      options: ["Et maktvakuum etter 1945 som to stormakter fylte fra hver sin kant", "En plan lagt av den ene parten allerede før krigen mot Tyskland var avsluttet", "En rekke mistolkninger av motpartens hensikter i årene rett etter krigen", "En uenighet om hvordan gjenoppbyggingen av Europa skulle finansieres"],
      explanation: "Maktpolitikkforklaringen sier at krigen etterlot et vakuum, og at to stormakter som hver for seg søkte trygghet, uunngåelig kom i veien for hverandre; ideologien kom i tillegg og skjerpet konflikten. Mistolkninger hører til sikkerhetsdilemma-lesningen, og en ferdig plan fra 1945 passer dårlig med at NATO kom etter Berlin-blokaden.",
    },
    {
      question: "Hva har maktpolitikkforklaringen vondt for å forklare?",
      options: ["Hvorfor konflikten varte lenge etter at maktfordelingen hadde stabilisert seg", "Hvorfor rivaliseringen konsentrerte seg om de strategisk viktigste områdene", "Hvorfor begge parter handlet pragmatisk der egne interesser talte for det", "Hvorfor alliansene ble bygd som svar på konkrete kriser og ikke på forhånd"],
      explanation: "En ren maktkonflikt pleier å åpne for kompromisser når maktfordelingen har stabilisert seg; her skjedde det i påfallende liten grad, og konflikten fikk et sterkt preg av å være en strid om rett og galt. De tre andre forholdene er nettopp det maktpolitikkforklaringen forklarer godt.",
    },
    {
      question: "Hva er forskjellen på primære og sekundære årsaker?",
      options: ["De første gjorde konflikten sannsynlig uansett; de andre formet forløp og tempo", "De første er dokumentert i primærkilder; de andre er kjent fra senere framstillinger", "De første virket først i tid; de andre kom til etter at konflikten var i gang", "De første gjelder stormaktene; de andre gjelder de mindre statene i blokkene"],
      explanation: "Primære årsaker er de forholdene som gjorde konflikten sannsynlig uansett hvem som satt med makten — maktvakuumet, statenes posisjon og de uforenlige modellene. Sekundære årsaker formet forløpet uten å frambringe det: enkeltvedtak, mistolkninger og innenrikspolitiske hensyn. Skillet gjelder årsakenes vekt, ikke kildetypen, tidspunktet eller hvilke stater det gjelder.",
    },
    {
      question: "Hva tilfører sikkerhetsdilemmaet som lesning av utbruddet?",
      options: ["Det forklarer opptrappingen uten å måtte tilskrive noen av partene en ferdig plan", "Det viser at den ene parten hadde aggressive hensikter helt fra krigens slutt", "Det forklarer hvorfor konflikten aldri ble ført som direkte krig mellom partene", "Det viser at konflikten i sin helhet skyldtes en misforståelse som kunne vært ryddet"],
      explanation: "Sikkerhetsdilemmaet forklarer hvordan tiltak som er defensivt ment, leses som utvidelse, og hvordan mottiltak igjen leses som bekreftelse — altså opptrappingen, uten at noen trenger en plan. Det forklarer ikke hvorfor det ble kaldt, og det er en overtolkning å gjøre hele konflikten til en misforståelse; den lesningen har få tilhengere.",
    },
    {
      question: "Hva var Det lange telegram?",
      options: ["Kennans analyse fra Moskva i februar 1946 av sovjetisk utenrikspolitikks drivkrefter", "Trumans erklæring fra 1947 om støtte til land som motsto press utenfra", "Marshall-planen fra 1947 for økonomisk gjenoppbygging av det krigsherjede Europa etter 1945", "Sikkerhetsrådets første resolusjon om konflikten mellom de to stormaktsblokkene"],
      explanation: "Det lange telegram er den lange analysen George F. Kennan sendte fra Moskva i februar 1946, med den konklusjonen at motsetningen var dyp og varig, men at motparten ville trekke seg der den møtte fast motstand. Truman-doktrinen og Marshall-hjelpen er begge fra 1947 og er politiske tiltak, ikke analysen som lå til grunn.",
    },
    {
      question: "Hva gikk oppdemmingspolitikken ut på?",
      options: ["Å hindre videre spredning av innflytelse, uten tilbakerulling og uten direkte krig", "Å drive motparten ut igjen av de områdene den allerede hadde skaffet seg kontroll over", "Å dempe spenningen gjennom forhandlinger, avtaler og gjensidige innrømmelser", "Å bygge en militærallianse som kunne vinne en direkte krig mot motparten raskt"],
      explanation: "Oppdemming er å stanse videre spredning uten å forsøke å drive motparten ut av det den alt kontrollerte, og uten direkte krig. Å drive motparten ut er tilbakerulling, og forhandlingssporet er avspenning; begge er ulike svar på det samme problemet, og å blande dem er den vanligste presisjonsfeilen i dette stoffet.",
    },
    {
      question: "Hvilken antakelse om motparten hvilte oppdemmingen på?",
      options: ["At motparten presser på der den møter ettergivenhet, og trekker seg der den møter fasthet", "At motparten ville bryte sammen økonomisk innen få år dersom presset bare ble opprettholdt", "At motparten ville forhandle seg fram til et kompromiss dersom den ble tilbudt nok", "At motparten ville angripe direkte så snart den hadde skaffet seg kjernevåpen selv"],
      explanation: "Politikken følger av antakelsen: presser motparten på der den møter ettergivenhet og trekker seg der den møter fasthet, blir signalverdien viktigere enn det enkelte områdets verdi. Antakelser om nært forestående sammenbrudd eller om direkte angrep lå ikke til grunn, og forhandlingssporet er avspenning.",
    },
    {
      question: "Hva sier dominoteorien?",
      options: ["At hvis ett land kommer under en rivals innflytelse, vil nabolandene følge etter", "At små stater alltid vil søke seg til den sterkeste parten i et bipolart system over tid", "At en allianse mister troverdighet så snart ett medlem trekker seg fra den", "At en krig i ett område vil spre seg militært til de nærmeste nabolandene"],
      explanation: "Dominoteorien er tanken om at innflytelse smitter fra land til land som brikker som velter hverandre. Konsekvensen er at ethvert enkelttilfelle blir strategisk viktig, og at man ikke kan velge sine kamper — det er derfor teorien forklarer oppdemmingens omfang og kostnad. De øvrige påstandene gjelder alliansedynamikk, ikke denne teorien.",
    },
    {
      question: "Hva var det avgjørende ved Truman-doktrinen fra 1947?",
      options: ["Den gjorde oppdemmingen til erklært politikk og formulerte den i generelle vendinger", "Den opprettet en militærallianse mellom USA og statene i Vest-Europa", "Den ga økonomisk støtte til gjenoppbygging mot at mottakerne samordnet bruken", "Den analyserte motpartens drivkrefter og konkluderte med at motsetningen var dyp og varig"],
      explanation: "Doktrinen gjorde en analyse om til en offentlig forpliktelse, og den var formulert generelt — som en regel om hvordan USA ville opptre der slike situasjoner oppsto, ikke som et vedtak om ett område. Alliansen er NATO fra april 1949, den økonomiske støtten er Marshall-hjelpen, og analysen er Det lange telegram fra februar 1946.",
    },
    {
      question: "Hva var mekanismen bak Marshall-hjelpen?",
      options: ["Bedre levestandard reduserer etterspørselen etter politiske alternativer til systemet", "Økonomisk støtte kjøper mottakerlandenes stemmer i de internasjonale organene som betyr mest", "Overføringer bygger opp militær kapasitet som kan avskrekke et angrep", "Handel mellom to land gjør krig mellom dem for kostbar til å være aktuell"],
      explanation: "Antakelsen var at nød og arbeidsløshet gjorde land mottakelige for bevegelser som ville endre systemet innenfra, og at bedre levestandard derfor demper etterspørselen etter slike alternativer. Hjelpen var altså oppdemming ført med økonomiske midler. Stemmekjøp og militær oppbygging var ikke tiltakets logikk, og handelsfredsargumentet er et annet resonnement.",
    },
    {
      question: "Hvorfor er Marshall-hjelpen et særlig godt drøftingseksempel?",
      options: ["Den lar seg lese både som ideologisk og som maktpolitisk tiltak, med god grunn", "Den er den eneste hendelsen fra hele perioden som er dokumentert i samtidige primærkilder", "Den ble vedtatt av Sikkerhetsrådet og har derfor folkerettslig status", "Den er den første hendelsen i den kalde krigen som er nøyaktig datert"],
      explanation: "Tiltaket kan leses som et forsøk på å gjøre en region motstandsdyktig mot en konkurrerende samfunnsmodell, altså ideologi — eller som et forsøk på å binde regionen økonomisk og hindre en rival i å få fotfeste, altså maktpolitikk. At begge lesningene er forsvarlige, gjør hendelsen til et førsteklasses belegg i utbruddsdebatten.",
    },
    {
      question: "Hva viser Berlin-blokaden om oppdemmingspolitikken?",
      options: ["Alle tre kjennetegnene samtidig: spredning motstått, krig unngått, ingen tilbakerulling", "At politikken forutsatte at ethvert truet område måtte forsvares med militære virkemidler", "At avspenning gjennom forhandlinger var den foretrukne løsningen på kriser", "At politikken bare kunne gjennomføres med støtte fra Sikkerhetsrådets flertall"],
      explanation: "Byen ble ikke gitt opp, blokaden ble ikke brutt med makt, og det ble ikke gjort forsøk på å endre forholdene i den østlige sektoren. Det er oppdemmingens tre kjennetegn demonstrert i én hendelse, og derfor er dette kapitlets mest anvendelige enkelteksempel. Militær tvang og forhandlingsspor er nettopp det som ikke ble valgt.",
    },
    {
      question: "Når varte Berlin-blokaden?",
      options: ["Fra juni 1948 til mai 1949", "Fra april 1949 til juli 1950", "Fra februar 1946 til mars 1947", "Fra mai 1945 til desember 1946"],
      explanation: "Blokaden varte fra juni 1948 til mai 1949, og byen ble forsynt fra luften i hele perioden. April 1949 er tidspunktet for opprettelsen av NATO, februar 1946 er Det lange telegram, og mai 1945 er krigens slutt i Europa.",
    },
    {
      question: "Hvorfor er det verdt å merke seg at NATO ble opprettet etter Berlin-blokaden?",
      options: ["Fordi rekkefølgen viser at alliansen var et svar på en erfaring, ikke en plan fra 1945", "Fordi alliansen dermed kunne bygge direkte på de militære erfaringene fra Koreakrigen", "Fordi det betyr at blokaden var utløst av opprettelsen av alliansen", "Fordi det viser at Sikkerhetsrådet hadde godkjent alliansen på forhånd"],
      explanation: "Blokaden varte fra juni 1948 til mai 1949, NATO ble opprettet i april 1949. Rekkefølgen taler mot lesninger der en part tilskrives en ferdig strategi fra krigens slutt, og passer godt med at hvert trekk utløste et mottrekk. Koreakrigen kom senere, og alliansen forutsatte ingen godkjenning fra rådet.",
    },
    {
      question: "Hva viser Koreakrigen om oppdemmingen?",
      options: ["At politikken ble globalisert og dermed langt dyrere enn i Europa alene", "At politikken ble erstattet av tilbakerulling som strategi i Asia", "At politikken bare virket der Sikkerhetsrådet var blokkert av vetoretten", "At politikken ble oppgitt til fordel for forhandlinger etter 1953"],
      explanation: "Krigen fra 1950 til 1953 viser at oppdemmingen ikke lenger var et europeisk anliggende, og den er det eksempelet du trenger for å drøfte politikkens kostnad. Den viser samtidig at FN kunne handle militært når rådet ikke var blokkert — altså det motsatte av at blokkering var en forutsetning.",
    },
    {
      question: "Hva skiller kollektiv sikkerhet fra en forsvarsallianse?",
      options: ["Den retter seg innover mot hvem som helst i kretsen, alliansen utover mot en motpart", "Den bygger på helt frivillig deltakelse, mens alliansen forplikter medlemmene rettslig", "Den omfatter bare økonomiske virkemidler, mens alliansen også omfatter militære", "Den krever enstemmighet blant medlemmene, mens alliansen avgjør med flertall"],
      explanation: "Kollektiv sikkerhet forplikter medlemmene til å møte et angrep fra hvem som helst i kretsen, også fra et av medlemmene. En forsvarsallianse retter seg utover, mot en definert motpart utenfor kretsen. Forskjellen ligger altså i retningen, ikke i frivillighet, virkemidler eller beslutningsregel.",
    },
    {
      question: "Hvilken forutsetning hviler kollektiv sikkerhet på?",
      options: ["At de tyngste medlemmene er villige til å handle mot en av sine egne", "At alle medlemmene har omtrent like stor militær kapasitet å bidra med", "At et internasjonalt organ kan avgjøre tvister med bindende dom", "At medlemmene har samme styreform og dermed sammenfallende interesser"],
      explanation: "Ordningen forutsetter at de tyngste er villige til å handle mot en av sine egne. Er en av dem selv part, eller er de uenige om hvem angriperen er, faller ordningen sammen — ikke fordi reglene er dårlige, men fordi ordningen forutsetter en enighet den ikke selv kan frambringe. Lik kapasitet, domstoler og lik styreform er ikke vilkår.",
    },
    {
      question: "Hva skiller Sikkerhetsrådet fra Generalforsamlingen?",
      options: ["Rådet fatter bindende vedtak i saker om fred og sikkerhet; forsamlingen anbefaler", "Rådet består av alle medlemsstatene; forsamlingen består av de fem faste medlemmene", "Rådet behandler økonomiske spørsmål; forsamlingen behandler militære spørsmål", "Rådet velges av forsamlingen for ett år av gangen og rapporterer tilbake til den"],
      explanation: "Sikkerhetsrådet er det eneste FN-organet som kan treffe vedtak som binder medlemsstatene i saker om fred og sikkerhet; Generalforsamlingen, der alle statene sitter med én stemme hver, vedtar anbefalinger. Å blande de to er en av de hyppigste presisjonsfeilene i dette stoffet.",
    },
    {
      question: "Hva er vetoretten?",
      options: ["De faste medlemmenes adgang til å stanse et vedtak i rådet ved å stemme imot", "De faste medlemmenes rett til å foreslå saker som rådet må behandle først", "Generalforsamlingens adgang til å oppheve et vedtak fattet av Sikkerhetsrådet", "Retten enhver medlemsstat har til å reservere seg mot et vedtak som gjelder den"],
      explanation: "Ett fast medlems motstemme er nok til å stanse et vedtak, og flertallet blant de øvrige hjelper ikke. Retten var betingelsen for at de tyngste statene i det hele tatt ble med i organisasjonen. Generalforsamlingen kan ikke oppheve rådets vedtak, og noen alminnelig reservasjonsrett finnes ikke.",
    },
    {
      question: "Hvorfor var Sikkerhetsrådet handlingslammet under den kalde krigen?",
      options: ["De faste medlemmene sto på hver sin side av den konflikten sakene som regel gjaldt", "Rådet manglet en regel som gjorde vedtakene bindende for medlemsstatene", "Generalforsamlingen hadde overtatt myndigheten i alle saker om fred og internasjonal sikkerhet", "Rådet var for stort til at det lot seg samle på kort varsel under en krise"],
      explanation: "Konstruksjonen krevde tilslutning fra de faste medlemmene, og den hvilte på en forutsetning om stormaktsenighet. Da to av dem sto på hver sin side av den samme konflikten, ville minst ett fast medlem være part i de fleste alvorlige saker. Vedtakene var fortsatt bindende i sin form, og forsamlingen overtok ingen myndighet.",
    },
    {
      question: "Hva er den mest presise beskrivelsen av handlingslammelsen?",
      options: ["Reglene virket som de var ment; det var forutsetningen om enighet som forsvant", "Reglene var dårlig utformet og måtte senere endres for at rådet i det hele tatt skulle virke", "Vetoretten ble brukt i nesten hver eneste sak som kom opp i rådet", "Rådet var uten myndighet fordi stormaktene sto utenfor organisasjonen"],
      explanation: "Lammelsen var ikke en konstruksjonsfeil: vetoretten gjorde nøyaktig det den var bygd for, nemlig å hindre vedtak som et fast medlem var imot. Det som manglet, var enigheten reglene var skrevet for. Merk at retten ikke engang måtte brukes for å virke — forslag som åpenbart ville bli stanset, ble ikke fremmet. Stormaktene var nettopp medlemmer, og det var poenget med ordningen.",
    },
    {
      question: "Hva viser Golfkrigen (1990–1991) om Sikkerhetsrådet?",
      options: ["At hindringen hadde vært den politiske blokkeringen, ikke reglene rådet arbeider etter", "At rådet fikk nye regler etter 1991 som gjorde vedtak lettere å få igjennom", "At vetoretten ble avskaffet da bipolariteten opphørte som maktfordeling", "At Generalforsamlingen overtok myndigheten til å autorisere bruk av makt"],
      explanation: "Da blokkeringen falt bort, kunne rådet konstatere et brudd og autorisere en storstilt operasjon — med de samme reglene som før. Det er motprøven på mekanismen bak lammelsen. Verken reglene eller vetoretten ble endret, og myndigheten til å autorisere maktbruk ligger fortsatt i rådet.",
    },
    {
      question: "Hvordan forklares den kalde krigens slutt?",
      options: ["Både ved økonomisk og maktpolitisk press og ved reformforsøk og politiske bevegelser", "Utelukkende ved at den ene økonomien ikke lenger kunne bære rustningskostnadene", "Utelukkende ved at befolkningene i Øst-Europa krevde en annen samfunnsordning", "Ved at Sikkerhetsrådet vedtok en avtale om nedrustning som begge parter fulgte"],
      explanation: "De to forklaringstypene griper inn i hverandre: de økonomiske vanskene skapte rommet for reformforsøkene, og valget om ikke å bruke makt for å holde blokken sammen gjorde at rommet ble brukt. Uten det siste leddet er utfallet ikke forklart — økonomisk press er mange ganger besvart med hardere kontroll i stedet.",
    },
    {
      question: "Hva skiller Berlinmurens fall fra Sovjetunionens oppløsning?",
      options: ["Det første gjaldt blokkdelingen i Europa, det andre selve staten som var den ene polen", "Det første skjedde i desember 1991, det andre i november 1989", "Det første var et vedtak i Sikkerhetsrådet, det andre en indre prosess", "Det første avsluttet bipolariteten, det andre avsluttet unipolariteten"],
      explanation: "Berlinmurens fall i november 1989 markerer at blokkdelingen av Europa opphørte; Sovjetunionens oppløsning i desember 1991 markerer at selve polen forsvant, altså at bipolariteten som maktfordeling tok slutt. Å sette likhetstegn mellom de to fjerner muligheten til å si presist hva som endret seg når.",
    },
    {
      question: "Hva ligger i uttrykket «det unipolare øyeblikk»?",
      options: ["En tidsbestemt beskrivelse av at bare én pol sto igjen, med et forbehold innebygd", "En påstand om at én stat fra 1991 styrte det internasjonale systemet fullt ut", "En betegnelse på perioden mellom Berlinmurens fall og Sovjetunionens oppløsning", "En prognose om at maktfordelingen ville forbli uendret i overskuelig framtid"],
      explanation: "Ordet «øyeblikk» er selve poenget: uttrykket var fra begynnelsen en påstand om noe forbigående, ikke om en ny varig orden. Uenigheten gjelder hvor lenge det varte, og om det var unipolart i annet enn militær forstand. Å bruke det som påstand om at én stat styrte verden, er en overtolkning.",
    },
    {
      question: "Hvorfor er unipolaritet ustabil over tid?",
      options: ["Overlegenhet gir andre stater grunn til å styrke seg og til å søke sammen", "Den overlegne staten mister interessen for internasjonale forpliktelser", "Uten en motvekt vil den overlegne staten uunngåelig gå til angrepskrig", "Andre stater vil normalt slutte seg til den sterkeste og forsterke overlegenheten"],
      explanation: "Mekanismen er at overlegenhet frambringer sin egen motstand: stater som frykter å bli utsatt for den overlegne maktens vilje, har grunn til å ruste opp og til å søke sammen, siden ingen klarer det alene. Påstanden om at andre stater normalt slutter seg til den sterkeste, beskriver den motsatte tendensen, og det er nettopp den som ikke ventes å dominere.",
    },
    {
      question: "Hva er den viktigste feilen i en sammenlignende oppgave?",
      options: ["Å skrive alt om det ene tilfellet først og alt om det andre etterpå", "Å bruke flere sammenligningsakser enn oppgaveteksten selv nevner", "Å finne både likheter og forskjeller i stedet for å velge én av delene", "Å bruke eksempler med årstall i stedet for å holde framstillingen generell"],
      explanation: "Behandles tilfellene hver for seg, har du levert to redegjørelser og overlatt koblingen til leseren. En sammenligning krever navngitte akser der BEGGE tilfellene behandles på HVER akse, og gjerne både en likhet og en forskjell på hver. Egne akser og daterte eksempler er tvert imot pluss.",
    },
    {
      question: "Hva er stabilitetsargumentet for bipolaritet?",
      options: ["Med to poler er det bare ett forhold å håndtere, ikke et nett av skiftende koalisjoner", "Med to poler er begge parter så svake at ingen av dem tør starte en krig", "Med to poler vil de mindre statene kunne megle mellom de to stormaktene", "Med to poler blir alle konflikter avgjort i Sikkerhetsrådet før de eskalerer"],
      explanation: "Argumentet er en mekanisme, ikke en observasjon: to poler gir ett forhold å håndtere, og hver pol kontrollerer sine allierte tett, slik at lokale konflikter ikke trekker stormaktene inn mot deres vilje. Poenget om meglere hører til den motsatte posisjonen, som nettopp peker på at slike aktører manglet.",
    },
    {
      question: "Hva er fareargumentet mot bipolaritet?",
      options: ["Hver lokal konflikt blir en prøve på det store forholdet, og eskalerer derfor lettere", "To poler fører alltid til at den ene angriper den andre innen kort tid", "Med to poler forsvinner behovet for allianser, og statene står alene i kriser", "To poler gjør at alle avgjørelser må fattes med enstemmighet mellom dem"],
      explanation: "Mekanismen er at når hver enkelt sak leses som et signal om hvorvidt den andre polen vil vike, blir det uforholdsmessig kostbart å gi etter selv i små saker — og konflikter som ellers ville forblitt lokale, eskalerer. I tillegg mangler systemet mellomliggende aktører som kan megle uten selv å være part.",
    },
    {
      question: "Hvilken forveksling gjelder Kennan og Truman-doktrinen?",
      options: ["Kennan formulerte tenkningen i 1946; doktrinen fra 1947 er den politiske utformingen", "Kennan skrev doktrinen, mens Truman bare leste den opp i sin egen tale", "Truman formulerte tenkningen, mens Kennan satte den ut i livet som diplomat", "Begge dokumentene er skrevet av Kennan, men med ett års mellomrom"],
      explanation: "Kennan formulerte oppdemmingstenkningen i Det lange telegram i februar 1946; Truman-doktrinen fra 1947 er den politiske utformingen av den. Å skrive at Kennan skrev doktrinen er en klassisk forveksling, og den koster på presisjonsaksen, som er inngangsbilletten.",
    },
    {
      question: "Hva er den vanligste svakheten ved et eksempel i denne sjangeren?",
      options: ["Eksempelet står der uten å være koblet til noen bestemt påstand i svaret", "Eksempelet er hentet fra en periode som ligger utenfor oppgavens ramme", "Eksempelet er så velkjent at sensor har sett det i mange besvarelser før", "Eksempelet mangler kildehenvisning til det verket det er hentet fra"],
      explanation: "Kravet er ikke bare at et eksempel finnes, men at svaret sier hva det VISER. Et eksempel uten kobling til en påstand illustrerer, men belegger ingenting, og teller lite på den empiriske aksen. At eksempelet er velkjent er helt uproblematisk — det er bruken som avgjør.",
    },
    {
      question: "Hva menes med en innflytelsessfære?",
      options: ["Et område der en stormakt avgjør nabolandenes utenrikslinje uten å innlemme dem", "Et område som en stormakt har erobret militært og innlemmet i eget territorium", "Et område der to stormakter har avtalt å avstå fra all militær tilstedeværelse", "Et område som forvaltes av et internasjonalt organ på vegne av fellesskapet"],
      explanation: "En innflytelsessfære hviler på militær tilstedeværelse, økonomiske bånd og kontroll over hvem som kan styre — uten formell innlemmelse. Begrepet fanger at grensene ikke ble flyttet, samtidig som statene i sfæren ikke var frie til å velge side. Erobring og internasjonal forvaltning er andre ordninger.",
    },
  ],
  'inter1000-2-2': [
    {
      question: "Hva skulle mellomkrigsordenen erstatte?",
      options: ["Allianser og maktbalanse som måte å forvalte sikkerhet mellom stormaktene på", "Kolonistyret i de områdene som ble tatt fra de tapende stormaktene etter krigen", "Det hemmelige diplomatiet mellom stormaktene og deres faste ambassadører i Europa", "Domstolene som til da hadde avgjort grensetvister mellom de europeiske statene"],
      explanation: "Ordenen skulle erstatte allianser og maktbalanse med kollektiv sikkerhet: én ordning alle er med i, der et angrep på én er et angrep på alle. Kolonistyret ble ikke erstattet, men omformet gjennom mandatsystemet, og åpne avtaler var ett av flere prinsipper — ikke det ordenen som helhet skulle bytte ut.",
    },
    {
      question: "Når la Wilson fram sine 14 punkter?",
      options: ["I januar 1918, mens krigen fortsatt pågikk", "I 1919, samtidig med at fredsoppgjøret ble undertegnet av partene", "I 1920, da Folkeforbundet formelt ble opprettet som organisasjon", "I 1945, som grunnlag for den nye organisasjonen som ble bygd da"],
      explanation: "Punktene ble lagt fram i januar 1918, altså mens krigen fortsatt pågikk, som grunnlag for en varig fred. Versaillestraktaten er fra 1919 og Folkeforbundet ble opprettet i 1920; FN-pakten er fra 1945. Merk at punktene var Wilsons program, ikke fredsoppgjørets innhold.",
    },
    {
      question: "Hvilket av Wilsons 14 punkter er det som betyr mest for dette temaet?",
      options: ["Det siste — en allmenn sammenslutning av stater med gjensidige garantier", "Det første — åpne avtaler i stedet for hemmelig diplomati mellom stormaktene", "Punktet om fri ferdsel på havet i fred så vel som under væpnet konflikt", "Punktet om nedbygging av handelshindringer mellom de deltakende statene"],
      explanation: "Det siste punktet foreslo en allmenn sammenslutning av stater med gjensidige garantier for politisk uavhengighet og territoriell integritet — det er der Folkeforbundet står. De øvrige punktene er viktige for fredsprogrammet, men det er det siste som er den direkte opprinnelsen til organisasjonen.",
    },
    {
      question: "Hva er mekanismen bak kollektiv sikkerhet?",
      options: ["Angriperen kjenner svaret på forhånd, og gevinsten ved angrep faller under kostnaden", "Medlemmene får felles styrker som organisasjonen selv kan sende inn i en konflikt", "En internasjonal domstol avgjør hvem som har rett før noen part kan bruke makt", "Statene bygger ned sine egne styrker slik at ingen av dem kan angripe en annen"],
      explanation: "Ordningen virker gjennom angriperens forventning: er forpliktelsen avgitt på forhånd av alle, er svaret kjent, og angrepet blir ulønnsomt uten at noe må gjøres. Verken felles styrker, domstolsbehandling eller ensidig nedrustning inngår i ordningen som sådan — det er nettopp at svaret er automatisk, som er poenget.",
    },
    {
      question: "Hva er den avgjørende svakheten ved kollektiv sikkerhet som ordning?",
      options: ["Den forutsetter en vilje til å handle mot en av sine egne som den ikke selv kan skape", "Den krever at alle medlemmene har omtrent like stor militær kapasitet å bidra med", "Den forutsetter at medlemmene har samme styreform og dermed like interesser", "Den krever at en domstol på forhånd har fastslått hvem som er den skyldige parten"],
      explanation: "Automatikken finnes i teksten, ikke i verden: ordningen forutsetter at hvert medlem faktisk vil handle mot en angriper også når det er kostbart og angriperen er en de har interesser med. Den viljen kan ordningen ikke selv frambringe. Lik kapasitet, lik styreform og domstolsbehandling er ikke vilkår i ordningen.",
    },
    {
      question: "Hva var Folkeforbundets beslutningsregel?",
      options: ["I hovedsak enstemmighet, slik at én motstemme kunne stanse en beslutning", "Alminnelig flertall blant medlemmene i rådet, uten noen form for stanserett", "Kvalifisert flertall blant stormaktene, med de øvrige medlemmene som rådgivere", "Stanserett for et fåtall faste medlemmer, med flertall i alle øvrige saker"],
      explanation: "Vedtak krevde i hovedsak enighet, slik at én enkelt motstemme stanset saken. Regelen fulgte av suverenitetstanken: ingen stat skulle kunne bindes mot sin vilje. Stanserett for et fåtall er derimot FN-ordningen, og den er en innsnevring av lammelsesmuligheten, ikke det samme som enstemmighet blant alle.",
    },
    {
      question: "Hvorfor gjorde enstemmighetskravet ordningen mest lammet der den skulle virke mest?",
      options: ["Fordi en part i saken, eller en venn av en part, kunne blokkere behandlingen selv", "Fordi rådet bare møttes noen få ganger i året og ikke rakk å behandle hastesaker", "Fordi kravet gjaldt alle saker unntatt dem som handlet om bruk av militærmakt", "Fordi organisasjonen manglet et sekretariat som kunne forberede sakene godt nok"],
      explanation: "Når alle har stanserett, kan enhver alvorlig sak blokkeres av en av partene selv eller av en venn av en part — og de alvorlige sakene er nettopp dem noen har mye å tape på. Møtefrekvens og sekretariat er praktiske forhold, ikke mekanismen, og kravet gjaldt ikke mindre i maktbrukssaker.",
    },
    {
      question: "Hva er mekanismen bak at mangelen på tvangsmakt gjorde tiltakene virkningsløse?",
      options: ["Hver stat bærer kostnaden selv og vet at tiltaket ikke virker uten de andre", "Organisasjonen manglet hjemmel til å vedta tiltak mot en stat som brøt pakten", "Tiltakene måtte godkjennes av en internasjonal domstol før de kunne settes i verk", "Medlemmene var uenige om hvilke tiltak som var lovlige etter folkeretten den gang"],
      explanation: "Når en forpliktelse må gjennomføres av hver enkelt stat for egen regning, blir den i praksis frivillig: hver stat vurderer kostnaden for seg og vet at innsatsen er bortkastet hvis de andre lar være. Da blir det rasjonelt for alle å gjøre lite. Hjemmel til å vedta tiltak fantes; det var gjennomføringen som hvilte på statene.",
    },
    {
      question: "Hvorfor svekket stormaktsfraværet Folkeforbundet?",
      options: ["Kollektiv sikkerhet virker gjennom forventningen om at svaret blir merkbart", "Organisasjonens budsjett ble for lite til at den kunne drive egen virksomhet", "Medlemstallet ble så lavt at organisasjonen mistet sin folkerettslige stilling", "Vedtakene kunne uten stormaktene ikke lenger regnes som gyldig fattet i rådet"],
      explanation: "Ordningen hviler på at en angriper venter et svar fra hele fellesskapet. Står de statene som kunne gjort svaret merkbart utenfor, faller forventningen sammen, og med den virkningen. Det er ikke medlemstallet, budsjettet eller vedtakenes formelle gyldighet som er problemet, men trusselens troverdighet.",
    },
    {
      question: "Hva er Monroe-doktrinen, og hvorfor er den relevant her?",
      options: ["En amerikansk linje om ikke å blande seg i europeiske stormaktskonflikter", "En britisk linje om å opprettholde maktbalansen på det europeiske kontinentet", "En bestemmelse i Folkeforbundets pakt om at medlemmene kunne reservere seg", "En avtale mellom stormaktene om fordelingen av områder utenfor Europa"],
      explanation: "Doktrinen er den amerikanske linjen fra 1800-tallet om at europeiske stormakter ikke skulle blande seg inn på det amerikanske kontinentet, og at USA ikke ville blande seg i europeiske stormaktskonflikter. Den forklarer hvorfor stormaktsfraværet ikke var et uhell, men fulgte av en etablert politisk linje som var eldre enn forbundet selv.",
    },
    {
      question: "Hvordan bør de tre svakhetene ved Folkeforbundet rangeres?",
      options: ["To var konstruksjonsvalg som lot seg endre; den tredje var et politisk forhold", "Alle tre var konstruksjonsvalg som kunne vært gjort annerledes allerede i 1919", "Alle tre var politiske forhold som ingen organisasjonsform kunne ha rettet opp", "Den viktigste var mangelen på tvangsmakt; de to andre var uten praktisk betydning"],
      explanation: "Enstemmighetskravet og mangelen på tvangsmakt var konstruksjonsvalg, og de ble gjort annerledes i 1945. Stormaktsfraværet var et politisk forhold ingen konstruksjon kan fjerne, siden en organisasjon ikke kan tvinge en stat til å bli medlem — det kunne bare håndteres ved å gjøre medlemskap attraktivt nok.",
    },
    {
      question: "Hvilket ledd i kjeden rammet hver av de tre svakhetene?",
      options: ["Å fatte vedtak, å gjennomføre dem, og å gjøre trusselen om reaksjon troverdig", "Å oppdage brudd, å fastslå skyld, og å ilegge en passende sanksjon mot bryteren", "Å rekruttere medlemmer, å finansiere driften, og å bemanne organisasjonens organer", "Å forhandle avtaler, å ratifisere dem nasjonalt, og å overvåke at de blir fulgt"],
      explanation: "Enstemmighetskravet rammet evnen til å fatte vedtak, mangelen på tvangsmakt evnen til å gjennomføre dem, og stormaktsfraværet trusselens troverdighet. De tre rammer altså tre ulike ledd i samme kjede, og hver av dem er nok til å bryte den — det er derfor rangeringen krever at man ser hva de gjør hver for seg.",
    },
    {
      question: "Hva er hovedtanken bak Sikkerhetsrådets utforming?",
      options: ["Et vedtak de tyngste ikke stiller seg bak, lar seg uansett ikke gjennomføre", "Alle stater må ha lik innflytelse for at vedtakene skal oppfattes som legitime", "Beslutninger bør tas av et lite organ fordi store forsamlinger arbeider langsomt", "De statene som betaler mest til organisasjonen, bør ha mest å si om vedtakene"],
      explanation: "Konstruksjonstanken er at det er bedre å bygge kravet om de tyngstes tilslutning inn i ordningen enn å fatte vedtak som blir stående på papiret — færre vedtak som virker, framfor flere som ikke gjør det. Legitimiteten er lagt til Generalforsamlingen, ikke til rådet, og bidragsstørrelse er ikke kriteriet.",
    },
    {
      question: "Hva var vetoretten prisen for?",
      options: ["At de tyngste statene i det hele tatt ble medlemmer av organisasjonen", "At organisasjonen fikk adgang til å vedta tiltak med bruk av væpnet makt", "At Generalforsamlingen fikk myndighet til å vedta bindende anbefalinger", "At pakten ble holdt atskilt fra de enkelte fredsoppgjørene etter krigen"],
      explanation: "Uten en garanti mot å bli bundet av vedtak de var imot, ville de tyngste statene ikke lagt sikkerhetspolitikken sin inn under et organ de ikke kontrollerte. Retten er altså svaret på forgjengerens verste svakhet — at de tyngste sto utenfor. De øvrige forholdene er andre konstruksjonsvalg i pakten.",
    },
    {
      question: "Hva skiller Folkeforbundets enstemmighetskrav fra FNs vetorett?",
      options: ["Alle kunne stanse alt, mot at noen få kan stanse det som gjelder dem selv", "Den første gjaldt bare militære saker, mens den andre gjelder alle saker i rådet", "Den første kunne oppheves av forsamlingen, mens den andre er absolutt og endelig", "Den første gjaldt bare stormaktene, mens den andre gjelder alle medlemmene i FN"],
      explanation: "Under enstemmighet hadde ethvert medlem stanserett, slik at enhver part kunne blokkere sin egen sak. FN-ordningen snevrer stanseretten inn til et fåtall faste medlemmer og lar alt annet avgjøres med flertall. Vetoretten er altså en innsnevring av lammelsesmuligheten, ikke det samme kravet i ny drakt.",
    },
    {
      question: "Hva skiller Sikkerhetsrådet fra Generalforsamlingen?",
      options: ["Rådet fatter bindende vedtak i fred- og sikkerhetssaker; forsamlingen anbefaler", "Rådet består av alle medlemsstatene, mens forsamlingen bare har faste medlemmer", "Rådet behandler saker om avkolonisering, mens forsamlingen behandler konflikter", "Rådet velges av forsamlingen hvert år og rapporterer tilbake til den om arbeidet"],
      explanation: "Sikkerhetsrådet er det eneste FN-organet som kan treffe vedtak som binder medlemsstatene i saker om fred og sikkerhet; Generalforsamlingen, der alle statene sitter med én stemme hver, vedtar anbefalinger. Arbeidsdelingen er bevisst: handlekraft der de tyngste er, legitimitet der alle er.",
    },
    {
      question: "Hva er den viktigste begrensningen ved FNs adgang til tvangstiltak?",
      options: ["Organisasjonen har ingen egne styrker; gjennomføringen hviler på medlemsstatene", "Vedtak om tiltak må godkjennes av Generalforsamlingen før de kan settes i verk", "Tiltak kan bare rettes mot stater som ikke er medlemmer av organisasjonen", "Adgangen gjelder bare økonomiske tiltak og ikke tiltak med bruk av væpnet makt"],
      explanation: "Rådet kan treffe bindende vedtak om tiltak, med og uten væpnet makt, men organisasjonen rår ikke over egne styrker. Det som er endret fra forgjengeren, er at plikten følger av et bindende vedtak i stedet for av hver stats egen vurdering. Å framstille FN som tvangsmyndig i egen rett er en presisjonsfeil.",
    },
    {
      question: "Hva er hovedregelen for en sammenlignende oppgave?",
      options: ["Velg akser først, og behandle begge tilfellene på hver akse før du går videre", "Behandle det ene tilfellet grundig først, og bruk det andre som kontrast til slutt", "Legg mest vekt på forskjellene, siden det er dem sammenligningen skal få fram", "Bruk minst fem akser, slik at framstillingen dekker alle sider ved begge tilfellene"],
      explanation: "En sammenligning krever navngitte akser der begge tilfellene behandles på hver akse, gjerne med både en likhet og en forskjell. Å skrive alt om det ene først og alt om det andre etterpå gir to redegjørelser og overlater sammenligningen til leseren. Antallet akser er mindre viktig enn at de brukes konsekvent.",
    },
    {
      question: "Hvilken likhet mellom Folkeforbundet og FN blir oftest oversett?",
      options: ["Ingen av dem rår over egne styrker; gjennomføringen hviler på medlemsstatene", "Ingen av dem har noen form for stanserett for enkeltmedlemmer i sine organer", "Ingen av dem har en forsamling der alle medlemsstatene er representert samlet", "Ingen av dem hadde noe uttalt mål om at koloniserte områder skulle bli selvstyrte"],
      explanation: "Begge organisasjonene mangler egne styrker, og gjennomføringen hviler i begge tilfeller på medlemsstatene. Det som er endret, er at plikten følger av et bindende vedtak. Begge har dessuten en bred forsamling, begge har en form for stanserett, og FN gjorde selvstyre til et uttalt mål i tilsynsordningen.",
    },
    {
      question: "Hvor ligger det egentlige bruddet mellom de to ordenene?",
      options: ["I realismen om hva stater faktisk gjør, ikke i selve organkartet eller grunnideen", "I grunnideen, siden FN forlot kollektiv sikkerhet til fordel for maktbalanse", "I organstrukturen, siden FN innførte organer forgjengeren ikke hadde noe av", "I medlemstallet, siden FN fra starten hadde langt flere medlemmer enn forgjengeren"],
      explanation: "Grunnideen er den samme — kollektiv sikkerhet — og organstrukturen er gjenkjennelig. Bruddet ligger i at Folkeforbundet forutsatte at medlemmene ville handle mot en angriper, mens FN forutsatte at de kanskje ikke ville, og bygde kravet om de tyngstes tilslutning inn i selve beslutningsregelen.",
    },
    {
      question: "Hva var mandatsystemet?",
      options: ["Områder tatt fra tapende stormakter, styrt av enkeltstater med rapporteringsplikt", "En ordning der Folkeforbundet selv administrerte områder gjennom eget personell", "En ordning der koloniserte områder fikk stemmerett i forbundets egen forsamling", "En avtale mellom kolonimaktene om hvordan områder skulle fordeles mellom dem"],
      explanation: "Områdene ble ikke annektert, men overlatt til enkeltstater som styrte dem på forbundets vegne, med plikt til å rapportere. Det nye var nettopp rapporteringsplikten: kolonial forvaltning ble noe man skyldte fellesskapet et regnskap for. Forbundet administrerte ikke selv, og områdene fikk ingen stemmerett.",
    },
    {
      question: "Hvordan skal datidens begrunnelse for mandatsystemet håndteres i en besvarelse?",
      options: ["Som epokens egen kategori, i anførselstegn, med opplysning om hvem som brukte den", "Som en beskrivelse svaret kan bruke direkte, siden det er kildenes eget språk", "Som noe som bør utelates helt, fordi begrepene i dag regnes som uakseptable", "Som en vurdering historikerne i dag er enige om at var faglig velbegrunnet"],
      explanation: "Begrunnelsen om at befolkningene ennå ikke kunne styre seg selv, og uttrykket «sivilisasjonsoppdrag», er datidens egne kategorier, formulert av kolonimaktene selv og faglig forlatt i dag. De må gjengis i anførselstegn med opplysning om hvem som brukte dem — å utelate dem gjør ordningen uforståelig, og å bruke dem som egne ord er faglig galt.",
    },
    {
      question: "Hva skilte FNs tilsynsordning fra mandatsystemet?",
      options: ["Selvstyre eller selvstendighet ble et uttalt mål, ikke bare en fjern mulighet", "Områdene ble administrert direkte av organisasjonen i stedet for av enkeltstater", "Ordningen omfattet alle koloniserte områder og ikke bare de tidligere mandatene", "Rapporteringsplikten falt bort, siden ordningen bygde på tillit til forvalteren"],
      explanation: "Den avgjørende endringen er at selvstyre eller selvstendighet ble ordningens uttalte mål, slik at forvaltningen ble definert som en overgang i stedet for en tilstand uten sluttdato. Rapporteringsplikten besto og ble utvidet med klageadgang; administrasjonen lå fortsatt hos enkeltstater.",
    },
    {
      question: "Hva menes med at bevisbyrden snudde med tilsynsordningen?",
      options: ["Den som styrte, måtte godtgjøre framdrift mot et mål ordningen selv hadde satt", "Den som styrte, måtte legge fram regnskap for inntektene fra området hvert år", "Den som krevde selvstendighet, måtte vise at befolkningen var samlet bak kravet", "Klager måtte behandles av en domstol før organisasjonen kunne treffe vedtak"],
      explanation: "Under mandatsystemet måtte den som krevde selvstendighet, godtgjøre at området var modent. Under tilsynsordningen måtte den som styrte, godtgjøre framdrift mot et mål ordningen selv hadde satt. Det er den samme normmekanismen som i selvbestemmelsesprinsippet: et prinsipp som først er nedfelt, kan påberopes.",
    },
    {
      question: "Hvilken drivkraft bak avkoloniseringen var den nødvendige?",
      options: ["Uavhengighetsbevegelsene i områdene selv", "Kolonimaktenes svekkede økonomiske evne etter to verdenskriger", "Normskiftet der selvbestemmelse gikk fra unntak til hovedregel", "Presset fra Sikkerhetsrådets faste medlemmer i etterkrigsårene"],
      explanation: "Uten mobilisering i områdene selv forklarer verken svekket evne eller normskifte hvorfor selvstendighet faktisk kom. De to andre er reelle drivkrefter, men de er betingelser og ikke årsaker i seg selv. En framstilling der avkoloniseringen fremstår som noe kolonimaktene besluttet, gjør de faktiske aktørene til tilskuere i sin egen historie.",
    },
    {
      question: "Hvilken følge fikk avkoloniseringen for Generalforsamlingen?",
      options: ["Flertallet skiftet, og med det hvilke saker som i det hele tatt kom på dagsordenen", "Forsamlingen fikk myndighet til å fatte bindende vedtak om fred og sikkerhet", "Antallet faste medlemmer i Sikkerhetsrådet ble utvidet for å speile endringen", "Forsamlingen mistet innflytelse fordi de nye statene hadde liten militær tyngde"],
      explanation: "I et organ der hver stat har én stemme, endrer flere medlemmer ikke bare tallene, men hvilke saker som kommer på dagsordenen: kolonialisme, utvikling, ressursfordeling og rasediskriminering fikk plass fordi de som mente det, nå var i flertall. Forsamlingens myndighet ble ikke endret, og de faste plassene i rådet ble ikke utvidet.",
    },
    {
      question: "Hva er kjernen i framskrittsargumentet om mandat- og tilsynsordningene?",
      options: ["Det avgjørende er ikke hvem som styrer, men hva den styrende må kunne forsvare", "Det avgjørende er at områdene fikk økonomisk støtte fra det internasjonale samfunnet", "Det avgjørende er at kolonimaktene mistet all myndighet over områdene fra 1920", "Det avgjørende er at befolkningene fikk stemmerett i den styrende maktens organer"],
      explanation: "Argumentet hviler på at rapporteringsplikten gjorde forvaltningen til noe man kunne stilles til ansvar for, og at målet om selvstyre ga den en retning — begge deler flytter bevisbyrden. Kolonimaktene beholdt styringen, det var ingen alminnelig økonomisk støtteordning, og befolkningene fikk ikke stemmerett hos forvalteren.",
    },
    {
      question: "Hva er kjernen i kontinuitetsargumentet?",
      options: ["En plikt til å rapportere er ikke en myndighet til å gripe inn overfor forvalteren", "En ordning uten domstol kan aldri være rettslig bindende for noen av partene", "En ordning som er vedtatt av en organisasjon, mangler alltid folkerettslig kraft", "En ordning uten egne styrker kan ikke ha noen virkning på partenes handlemåte"],
      explanation: "Så lenge ingen kunne overprøve forvalterens vurdering av når tiden var inne, var målet om selvstyre uten frist en formulering uten bindende kraft — og internasjonal godkjennelse kan gjøre en praksis lettere å opprettholde. De øvrige påstandene er generelle og for sterke: ordninger uten domstol og uten styrker kan likevel virke gjennom normer.",
    },
    {
      question: "Hvordan leser realismen endringen i Generalforsamlingens sammensetning?",
      options: ["Som lite betydningsfull, siden bindende vedtak fattes i et organ som er uendret", "Som svært betydningsfull, siden legitimitet former hva stater kan gjøre ustraffet", "Som svært betydningsfull, siden informasjonsflyten mellom stater ble langt bedre", "Som lite betydningsfull, siden nye stater alltid slutter seg til de gamle flertallene"],
      explanation: "Realismen peker på at makten ligger i det organet som fatter bindende vedtak, og der er sammensetningen uendret. Konstruktivismen leser endringen motsatt, fordi det som endres er hva som regnes som legitimt, og liberalismen peker på arenaen for informasjon og samordning. Å kunne kontrastere lesningene er selve drøftingsoppgaven.",
    },
    {
      question: "Hva er den vanligste feilen i en oppgave om Folkeforbundets fall?",
      options: ["Å nevne én forklaring, som regel stormaktsfraværet, uten å veie flere mot hverandre", "Å nevne for mange forklaringer, slik at framstillingen mister sin røde tråd", "Å bruke årstall, siden oppgaven ber om en analyse og ikke om en kronologi", "Å trekke inn FN, siden oppgaven bare gjelder mellomkrigsordenen som sådan"],
      explanation: "Standardsvaret nevner at USA aldri ble medlem og stopper der. Det er riktig, men det er ett av tre forhold, og et svar som ikke veier dem mot hverandre, har ikke drøftet. Årstall er tvert imot ønsket, og sammenligningen med FN er ofte nettopp det som gjør vurderingen presis.",
    },
  ],
  'inter1000-2-3': [
    {
      question: "Hva gjør menneskerettighetene til et internasjonalt og ikke bare et innenrikspolitisk spørsmål?",
      options: ["At andre stater og internasjonale organer har en legitim interesse i om kravene innfris", "At rettighetene er nedfelt i en erklæring som er vedtatt av FNs generalforsamling", "At de fleste stater har innarbeidet de samme rettighetene i sine egne grunnlover", "At bruddene på dem som regel skjer i forbindelse med væpnet konflikt over grenser"],
      explanation: "Det avgjørende leddet er at andre enn staten selv har en legitim interesse i om kravene innfris — uten det er behandlingen av mennesker en sak mellom en stat og dens egne innbyggere. Vedtaket i 1948 og nasjonale grunnlover er følger av at anliggendet er internasjonalt, ikke det som gjør det internasjonalt.",
    },
    {
      question: "Hva består spenningen mellom suverenitet og universelle rettigheter i?",
      options: ["En rettighet som bare gjelder når staten sier ja, er en tjeneste og ikke en rettighet", "Statene er uenige om hvilke rettigheter som skal regnes som universelle og hvilke ikke", "Rettighetene er formulert i Vesten, mens brudd på dem forekommer over hele verden", "Statene mangler økonomiske midler til å innfri alle rettighetene på samme tid"],
      explanation: "Skal en rettighet bety noe, må den gjelde også mot statens vilje — men et system der stater kan overprøve hverandres indre forhold, er nettopp det suverenitetsprinsippet ble bygd for å hindre. Uenighet om innhold, opprinnelse og ressurser er reelle problemer, men de er ikke den strukturelle spenningen.",
    },
    {
      question: "Hva etablerte kampen mot slaveriet som forløper?",
      options: ["Formen: at en bevegelse over landegrenser kan kreve at stater endrer praksis", "Prinsippet om at alle mennesker overalt har de samme kravene overfor sin stat", "En internasjonal domstol som kunne prøve klager fra enkeltmennesker mot stater", "En plikt for statene til å rapportere om forholdene innenfor sitt eget territorium"],
      explanation: "Bevegelsen etablerte formen: at et krav om hvordan mennesker behandles kan bæres av en bevegelse på tvers av grenser, og gjøres til mellomstatlige avtaler. Det allmenne prinsippet kom først i 1948, og verken domstol eller alminnelig rapporteringsplikt fulgte av slaverikonvensjonene.",
    },
    {
      question: "Hvorfor krevde arbeiderbevegelsen internasjonale og ikke bare nasjonale standarder?",
      options: ["En stat som alene innfører kostbare krav, frykter at bedriftene taper i konkurransen", "Arbeiderne i ulike land hadde de samme kravene og ønsket de samme reglene overalt", "Nasjonale regler manglet folkerettslig gyldighet uten en internasjonal avtale i bunnen", "Bare internasjonale organer hadde myndighet til å regulere arbeidsforhold på 1800-tallet"],
      explanation: "Mekanismen er økonomisk: nasjonale standarder er vanskelige å opprettholde alene i en åpen økonomi, fordi kostnaden svekker bedriftenes konkurranseevne mot land uten dem. Å gjøre standardene felles er derfor en forutsetning for at de kan holdes. Nasjonale regler var fullt gyldige, og myndigheten lå hos statene.",
    },
    {
      question: "Hva var mellomkrigsordenens minoritetsvern?",
      options: ["Forpliktelser om navngitte minoriteter i enkelte stater, med klageadgang til forbundet", "En allmenn regel om at alle minoriteter i alle stater hadde rett til eget selvstyre", "En ordning der Folkeforbundet administrerte områder med blandet befolkning direkte", "En avtale om at minoriteter kunne flytte fritt mellom statene i mellomkrigstidens Europa"],
      explanation: "Ordningen gjaldt utpekte minoriteter i utpekte stater, som del av fredsoppgjøret, med adgang til å klage til Folkeforbundet. Den viser at internasjonale ordninger gikk inn i statenes indre forhold allerede før 1945 — men den var selektiv, og det er nettopp overgangen fra det utvalgte til det allmenne som er 1948-erklæringens nyhet.",
    },
    {
      question: "Hva var felles for alle forløperne til det moderne menneskerettighetsregimet?",
      options: ["De var selektive: de gjaldt bestemte praksiser, livsområder eller utpekte grupper", "De var vedtatt av mellomstatlige organisasjoner med myndighet til å gripe inn", "De ble utformet av de samme statene som senere skrev verdenserklæringen i 1948", "De ga enkeltmennesker adgang til å klage direkte til en internasjonal domstol"],
      explanation: "Ingen av forløperne hevdet at alle mennesker overalt har krav på noe fra sin stat: slaverikonvensjonene gjaldt en praksis, arbeidslivsstandardene et livsområde, minoritetsvernet utpekte grupper. Overgangen fra det utvalgte til det allmenne er derfor et skifte i art og ikke bare i omfang.",
    },
    {
      question: "Hva gjorde FN-pakten fra 1945 med menneskerettighetene?",
      options: ["Den nevnte dem blant formålene, men sa ikke hvilke rettigheter det gjaldt", "Den fastsatte en fullstendig liste over rettigheter som bandt alle medlemsstatene", "Den opprettet en domstol med myndighet til å prøve klager over brudd på dem", "Den overlot spørsmålet helt til statene selv og nevnte ikke rettighetene i det hele tatt"],
      explanation: "Pakten etablerer at menneskerettigheter er et anliggende for organisasjonen, men lar innholdet stå åpent — og det er nettopp derfor arbeidet med en erklæring ble satt i gang. Merk at pakten også inneholder prinsippet om at organisasjonen ikke skal gripe inn i en stats indre forhold: spenningen står i samme dokument.",
    },
    {
      question: "Når og av hvilket organ ble FNs verdenserklæring vedtatt?",
      options: ["10. desember 1948, av Generalforsamlingen", "10. desember 1948, av Sikkerhetsrådet etter forslag fra Generalforsamlingen", "I 1945, samtidig med at FN-pakten ble undertegnet av de opprinnelige medlemmene", "I 1966, da de to store menneskerettighetskonvensjonene også ble vedtatt av FN"],
      explanation: "Erklæringen ble vedtatt av Generalforsamlingen 10. desember 1948. Organet er viktig: forsamlingen vedtar anbefalinger, ikke bindende vedtak, og det er derfor erklæringen ikke bandt statene rettslig. FN-pakten er fra 1945 og nevnte rettighetene uten å angi hvilke.",
    },
    {
      question: "Hva var det nye ved verdenserklæringen?",
      options: ["Overgangen fra det utvalgte til det allmenne — alle mennesker, overalt", "At rettighetene for første gang ble gjort rettslig bindende for alle statene", "At det ble opprettet et organ med myndighet til å gripe inn ved alvorlige brudd", "At statene forpliktet seg til å rapportere årlig om forholdene på eget territorium"],
      explanation: "Der forløperne gjaldt bestemte grupper, praksiser eller livsområder, hevder erklæringen at alle mennesker overalt har krav på det samme. Det som ikke fulgte med, var rettslig binding, håndhevingsordning og inngrepsmyndighet — erklæringen fastsatte en standard uten et middel til å gjennomtvinge den.",
    },
    {
      question: "Hva skiller en erklæring fra FNs generalforsamling fra en traktat?",
      options: ["Erklæringen er en anbefaling; traktaten binder de statene som slutter seg til den", "Erklæringen gjelder alle stater; traktaten gjelder bare medlemmene av organisasjonen", "Erklæringen kan endres av forsamlingen; traktaten kan bare endres av en domstol", "Erklæringen gjelder rettigheter; traktaten gjelder plikter statene har overfor hverandre"],
      explanation: "En erklæring sier hva som bør gjelde, men binder ikke rettslig; en traktat binder dem som har sluttet seg til den. Skillet er avgjørende her: rettighetene fra 1948 ble forpliktende først i den grad de senere ble nedfelt i traktater. Skillet gjelder bindende kraft, ikke geografisk rekkevidde eller innhold.",
    },
    {
      question: "Hva er håndhevingsgapet?",
      options: ["Avstanden mellom en standard som er erklært, og et middel til å gjennomtvinge den", "Avstanden mellom rettighetene i en traktat og rettighetene i en stats egen grunnlov", "Avstanden mellom hva statene rapporterer og hva som faktisk skjer på bakken", "Avstanden mellom rike og fattige staters evne til å innfri rettighetene i praksis"],
      explanation: "Gapet består i at en standard ble erklært uten domstol som kunne prøve brudd og uten organ som kunne gripe inn. Rapporteringsavvik og ulik evne er reelle problemer, men de forutsetter allerede at en håndhevingsordning finnes — gapet handler om at den mangler.",
    },
    {
      question: "Hvorfor er håndhevingsgapet så vanskelig å lukke?",
      options: ["De statene som skulle gi fra seg myndighet, er de samme som ville bli utsatt for den", "Det finnes ikke enighet om hvilke rettigheter som er viktigst å håndheve først", "Internasjonale organer mangler penger til å drive omfattende overvåking i alle stater", "Brudd på rettighetene er vanskelige å bevise etter alminnelige rettslige beviskrav"],
      explanation: "Å gi et internasjonalt organ myndighet til å gripe inn i en stats behandling av egne innbyggere er nøyaktig det suverenitetsprinsippet skal hindre — og de som skulle avgi myndigheten, er de samme som ville bli utsatt for den. Derfor er de ordningene som finnes, svake i form: rapportering, overvåking og offentlighet.",
    },
    {
      question: "Hva er gjennombruddsdebatten?",
      options: ["Uenigheten om gjennombruddet kom i 1948 eller først på 1970-tallet", "Uenigheten om hvilke rettigheter som skal regnes som grunnleggende og hvilke ikke", "Uenigheten om hvorvidt rettighetene er universelle eller kulturelt bestemte", "Uenigheten om hvem som skal håndheve rettighetene når statene selv svikter"],
      explanation: "Debatten gjelder når menneskerettighetene faktisk slo gjennom som internasjonalt politisk fenomen. Partene er enige om alle hendelsene; uenigheten gjelder hvilken av dem som bærer forklaringen på at rettighetene ble noe stater må regne med. De øvrige spørsmålene er reelle, men er ikke denne debatten.",
    },
    {
      question: "Hvilken mekanisme hviler 1948-posisjonen på?",
      options: ["En norm virker ved at brudd må forklares, ikke først og fremst ved å bli fulgt", "En norm virker ved at et internasjonalt organ kan ilegge sanksjoner mot bryteren", "En norm virker ved at statene innarbeider den i sin egen lovgivning over tid", "En norm virker ved at de fleste stater faktisk følger den fra vedtaket av"],
      explanation: "Fra det øyeblikket standarden fantes og var vedtatt i organet der alle stater sitter, kunne enhver stat måles mot den — og den som brøt, måtte enten benekte bruddet eller bestride at standarden gjaldt. Begge deler er en innrømmelse av at standarden har status. Sanksjoner og etterlevelse er nettopp det som manglet.",
    },
    {
      question: "Hvilken mekanisme hviler 1970-tallsposisjonen på?",
      options: ["Dokumentasjon og offentlighet gjør at brudd kan koste selv uten at en stat reiser saken", "Traktatene fra 1960-tallet gjorde rettighetene rettslig bindende for alle statene", "Flertallet i Generalforsamlingen skiftet, og forsamlingen fikk myndighet til å gripe inn", "Antallet organisasjoner som arbeidet med rettigheter, økte kraftig i denne perioden"],
      explanation: "Det avgjørende er ikke antallet organisasjoner, men hva de gjorde: de skaffet informasjon stater ikke ville lete etter hos hverandre, og gjorde den offentlig, slik at kostnaden ved brudd ikke lenger avhang av at en regjering valgte å reise saken. Generalforsamlingen fikk ingen inngrepsmyndighet.",
    },
    {
      question: "Hva er A-markøren i en besvarelse om gjennombruddsdebatten?",
      options: ["Å gjøre eksplisitt at de to posisjonene måler forskjellige ting", "Å velge én av posisjonene og forsvare den uten å nevne den andre", "Å gjengi flest mulig hendelser fra perioden mellom 1948 og 1980", "Å konkludere med at debatten ikke lar seg avgjøre på grunnlaget vi har"],
      explanation: "Den ene posisjonen daterer når normen ble formulert, den andre når den begynte å koste noe. Å skrive det skillet ut er en presisering av hva som skiller svarene, ikke en omgåelse av spørsmålet. Å velge ensidig eller å avstå fra å lande er derimot to former for å unnvike drøftingen.",
    },
    {
      question: "Hvordan bandt avkoloniseringen de to posisjonene sammen?",
      options: ["Kravene kunne hente argumenter fra prinsipper de koloniserende statene selv hadde vedtatt", "Kolonimaktene besluttet å avvikle kolonistyret som følge av erklæringen fra 1948", "De nye statene fikk faste plasser i Sikkerhetsrådet og kunne der reise sakene selv", "Erklæringen ga uavhengighetsbevegelsene adgang til å klage til en internasjonal domstol"],
      explanation: "Selvbestemmelsesprinsippet og erklæringens allmenne form gjorde kravene vanskelige å avvise prinsipielt — motparten kunne bare bestride tidspunktet. I tillegg endret de nye statenes medlemskap flertallet i Generalforsamlingen og dermed dagsordenen. Ingen faste plasser og ingen klageadgang fulgte.",
    },
    {
      question: "Hva er testen på at en internasjonal norm finnes, ifølge den konstruktivistiske lesningen?",
      options: ["At de som bryter den, føler behov for å forklare at de ikke bryter den", "At et flertall av statene har sluttet seg til en traktat som fastsetter den", "At det finnes et organ som kan ilegge sanksjoner mot dem som bryter den", "At samtlige stater har fulgt den sammenhengende over en lengre periode"],
      explanation: "En stat som avviser kritikk ved å bestride fakta eller hevde at situasjonen er en annen, har allerede godtatt at standarden gjelder. Det er en observerbar konsekvens, og derfor et argument og ikke bare en tolkning. Traktat, sanksjonsorgan og full etterlevelse er kjennetegn ved rett, ikke ved en norm.",
    },
    {
      question: "Hvordan leser realismen menneskerettighetenes gjennomslag?",
      options: ["Som et virkemiddel som brukes av dem det tjener, med selektiv anvendelse", "Som en normendring som har endret hva som teller som en respektabel stat", "Som en arena der informasjon og forventninger samordnes mellom statene", "Som en utvikling drevet fram av klassekonflikt på tvers av landegrensene"],
      explanation: "Realismen peker på at stater reiser rettighetsspørsmål mot motstandere og lar være mot allierte, og at ordningene er svake fordi ingen stat vil gi et organ myndighet som kan brukes mot den selv. Normendringen er konstruktivismens lesning, arenaargumentet liberalismens, og klassekonflikt marxismens.",
    },
    {
      question: "Hva er motargumentet mot innvendingen om at gjennomslaget bare er retorisk?",
      options: ["At brudd må kles i et bestemt språk, er i seg selv en begrensning på staten", "At tilslutningen til standardene er nesten universell blant verdens stater", "At antallet dokumenterte brudd har gått ned i alle regioner siden 1970-tallet", "At rettighetene i dag håndheves av domstoler med myndighet over alle statene"],
      explanation: "En stat som må hevde at den overholder standarden, har mistet muligheten til å begrunne handlingen åpent på andre premisser, og har gitt kritikere et fast punkt å måle mot. Nesten universell tilslutning er derimot en del av innvendingen, siden etterlevelsen varierer sterkt — og noen alminnelig domstolshåndheving over alle stater finnes ikke.",
    },
    {
      question: "Hvorfor er internasjonale menneskerettighetsordninger som regel svake i form?",
      options: ["Fordi det er den eneste formen statene går med på å binde seg til", "Fordi sterkere ordninger ville krevd endringer i FN-paktens egen tekst", "Fordi ordningene ble utformet før statene forsto hvor omfattende bruddene var", "Fordi svake ordninger er billigere å drive enn ordninger med tvangsmyndighet"],
      explanation: "En ordning med reell tvangsmyndighet over statenes behandling av egne innbyggere ville krevd at de samme statene ga fra seg noe de har all interesse av å beholde. Derfor bygger ordningene på rapportering, overvåking og offentlighet, og virker gjennom kostnaden ved å måtte forsvare seg — ikke gjennom tvang.",
    },
  ],
  'inter1000-2-4': [
    {
      question: "Hva er de tre elementene i det westfalske statssystemet?",
      options: ["Territorium, én øverste myndighet innenfor grensen, og formell likestilling", "Felles religion, arvelig kongemakt, og en overordnet domstol for hele Europa", "Folkevalgte forsamlinger, skriftlige grunnlover, og faste diplomatiske sendemenn", "Kollektiv sikkerhet, faste stormaktsmøter, og en avtalt fordeling av kolonier"],
      explanation: "Myndigheten følger territoriet og ikke personer eller tro, den er øverste innenfor grensen uten konkurrerende overordnede, og statene er formelt likeverdige uansett størrelse. Kollektiv sikkerhet og stormaktsmøter er langt senere ordninger, og grunnlover og folkevalgte organer gjelder statenes indre forhold, ikke systemet mellom dem.",
    },
    {
      question: "Hva skiller indre fra ytre suverenitet?",
      options: ["Øverste myndighet på eget territorium, mot anerkjennelse som likeverdig fra andre", "Myndighet over borgerne, mot myndighet over utlendinger som oppholder seg i landet", "Statens myndighet i fredstid, mot dens utvidede myndighet under væpnet konflikt", "Regjeringens myndighet innenriks, mot utenriksdepartementets myndighet utenriks"],
      explanation: "Indre suverenitet er øverste myndighet over alt og alle på eget territorium; ytre suverenitet er å bli anerkjent av andre stater som likeverdig og ikke underlagt noen. Poenget er at ytre suverenitet ikke er noe en stat kan gi seg selv — den består i at andre behandler staten som suveren.",
    },
    {
      question: "Hva betyr anarki i studiet av det internasjonale systemet?",
      options: ["At det ikke finnes noen myndighet over statene som kan håndheve avtaler med tvang", "At statene ofte handler uforutsigbart og impulsivt overfor hverandre i kriser", "At det ikke finnes regler mellom stater, siden ingen har vedtatt noen felles lov", "At statene er formelt likestilte og derfor har like stor innflytelse på ethvert utfall"],
      explanation: "Anarki betyr fravær av en overordnet håndhever, ikke kaos og ikke fravær av regler — folkeretten finnes, det som mangler er noen som kan tvinge en stormakt til å følge den. At statene er formelt likestilte, er suverenitetsprinsippet, som er et annet begrep.",
    },
    {
      question: "Hvorfor følger anarki av suverenitet?",
      options: ["En myndighet som er øverste innenfor sine grenser, kan ikke ha noen instans over seg", "Stater som er formelt likestilte, vil aldri kunne enes om hvem som skal håndheve reglene", "Uten en felles kultur eller religion mangler statene et grunnlag for felles regler", "Historisk har alle forsøk på å opprette en overordnet myndighet endt i sammenbrudd"],
      explanation: "Sammenhengen er logisk, ikke historisk: er myndigheten øverste innenfor grensen, kan det per definisjon ikke finnes en instans over den. Anarkiet er derfor den nødvendige baksiden av suvereniteten — vil man ha en håndhever, må man gi opp suvereniteten. De øvrige forklaringene er empiriske og langt svakere.",
    },
    {
      question: "Hva var ikke-innblandingsprinsippets opprinnelige funksjon?",
      options: ["Å fjerne en hel kategori krigsgrunner ved å gjøre trosforhold til hver herskers sak", "Å sikre den enkelte innbyggerens rett til å velge tro uten inngrep fra myndighetene sine", "Å hindre at stormaktene delte mindre stater mellom seg i fredsforhandlinger", "Å gi mindre stater vern mot at større stater erobret deres territorium med makt"],
      explanation: "Krigen som ble avsluttet i 1648, hadde blant annet handlet om trosforhold på tvers av grenser. Å gjøre slike spørsmål til hver herskers eget anliggende fjernet en hel kategori krigsgrunner med ett grep — prinsippet er derfor en fredsmekanisme før det er en rettighet. Individuell trosfrihet er noe annet og kom senere.",
    },
    {
      question: "Hva hevder vendepunktsfortellingen om 1648?",
      options: ["At freden markerer overgangen til en orden av suverene territorialstater", "At freden bare avgjorde konkrete stridsspørsmål og innførte ingen prinsipper", "At freden fordelte kolonier mellom de europeiske maktene for første gang", "At freden opprettet den første faste mellomstatlige organisasjonen i Europa"],
      explanation: "Fortellingen hevder at freden markerer overgangen fra overlappende og konkurrerende myndigheter til suverene territorialstater. Påstanden om at freden bare avgjorde konkrete stridsspørsmål, er nettopp mytekritikkens argument. Kolonifordeling og faste organisasjoner hører til helt andre perioder.",
    },
    {
      question: "Hva er mytekritikkens sterkeste argument?",
      options: ["Fredsteksten avgjør konkrete stridsspørsmål og innfører ikke suverenitet som prinsipp", "Freden i 1648 gjaldt bare noen få av de europeiske maktene og ikke alle", "Suverenitetsbegrepet var allerede fullt utviklet lenge før krigen brøt ut", "Ingen av partene i krigen hadde på noe tidspunkt interesse av å begrense sin egen myndighet"],
      explanation: "Kritikken peker på at fredsteksten avgjør konkrete spørsmål uten å innføre suverenitet som prinsipp, at overlappende myndighetsforhold besto lenge etter 1648, og at begrepet «det westfalske system» først kom i utstrakt bruk i moderne tid. Kritikken hevder ikke at begrepet var ferdig utviklet på forhånd.",
    },
    {
      question: "Hva er kjernen i symbol- og prosessposisjonen?",
      options: ["1648 er nyttig som merkelapp for en lang prosess, men misvisende som årsak", "1648 er både et vendepunkt og en myte, avhengig av hvilken kilde man leser", "1648 bør erstattes med 1815 som systemets egentlige startpunkt i faget", "1648 er uten betydning, siden systemet uansett bare gjaldt i Europa"],
      explanation: "Posisjonen sier noe substansielt om hva slags historisk endring dette er: systemskifter av denne typen har sjelden en dato, fordi de består i at en praksis gradvis blir selvsagt. Å kreve en dato er å kreve feil type svar — det er derfor posisjonen ikke er en unnvikelse.",
    },
    {
      question: "Hvorfor er det viktig å presisere at det klassiske statssystemet var europeisk?",
      options: ["Fordi ordningen ble global gjennom kolonisering, ikke gjennom å bli valgt", "Fordi de europeiske statene var de eneste som hadde skriftlige avtaler den gang", "Fordi systemet aldri fikk noen betydning utenfor Europas egne grenser", "Fordi kolonimaktene brukte de samme prinsippene overfor koloniene som seg imellom"],
      explanation: "Prinsippene om suverenitet og ikke-innblanding gjaldt mellom de europeiske maktene, mens de samme maktene erobret og delte områder utenfor Europa uten å anvende dem der. Systemet ble globalt gjennom kolonisering og senere gjennom at avkoloniseringen gjorde tidligere koloniserte områder til stater i nettopp dette systemet.",
    },
    {
      question: "Hvorfor har suverenitet ulik politisk ladning for ulike stater i dag?",
      options: ["For stater som ble til gjennom avkolonisering, er suverenitet noe som ble vunnet", "Fordi bare de opprinnelige europeiske statene er folkerettslig fullt suverene", "Fordi suverenitet gir større rettigheter til stater med stor befolkning og økonomi", "Fordi nyere stater har sluttet seg til flere internasjonale avtaler enn de eldre"],
      explanation: "For de statene som utformet prinsippet, er suverenitet en tilstand som alltid har vært der; for stater som ble til gjennom avkolonisering, er den vunnet gjennom kamp mot dem som utformet prinsippet — og motstanden mot innblanding er tilsvarende sterkere. Formelt er alle stater like suverene.",
    },
    {
      question: "Hva er mekanismen bak maktbalansen?",
      options: ["Overlegenhet gjør alle andre utrygge samtidig, så motvekten oppstår av seg selv", "Stormaktene inngår avtaler om å begrense sine egne styrker til et avtalt nivå", "En overordnet myndighet fordeler militær kapasitet jevnt mellom de store statene", "Små stater slutter seg til den sterkeste og gjør dermed maktforskjellen mindre"],
      explanation: "Når én stat vokser seg for sterk, har de øvrige grunn til å søke sammen mot den, fordi hver av dem alene ville vært sjanseløs — motvekten oppstår uten at noen planlegger den. Merk begrensningen: er statene uenige om hvem som er farligst, eller er samordningen kostbar, uteblir motvekten likevel.",
    },
    {
      question: "Hva skiller maktbalanse fra hegemoni?",
      options: ["I en balanse hindrer motvekten dominans; i et hegemoni uteblir motvekten helt", "Maktbalanse gjelder militær styrke, mens hegemoni gjelder økonomisk styrke", "Maktbalanse forutsetter en avtale, mens hegemoni oppstår uten noen avtale", "Maktbalanse betyr fravær av krig, mens hegemoni betyr at én stat kan starte krig"],
      explanation: "Begge er utfall av det samme spillet: i en balanse er ingen sterk nok til å dominere fordi motvekten dannes, i et hegemoni er én så overlegen at motvekten uteblir. Skillet gjelder ikke hvilken maktform det er tale om, og maktbalanse krever ingen avtale — den oppstår nettopp uten at noen planlegger den.",
    },
    {
      question: "Hva kjennetegnet kongressystemet etter 1815?",
      options: ["Territoriell ordning mot dominans, jevnlige møter, og felles ansvar for ordenen", "En fast domstol som avgjorde tvister mellom de europeiske stormaktene bindende", "En forpliktelse til å møte angrep på ett medlem som et angrep på dem alle", "En avtale om at ingen av stormaktene skulle skaffe seg kolonier utenfor Europa"],
      explanation: "Wienerkongressen 1814–1815 fordelte områder med sikte på å hindre fornyet dominans, etablerte en praksis for jevnlige stormaktsmøter, og innebar at stormaktene påtok seg ansvar for ordenen som helhet. Bindende domstol og kollektiv sikkerhet er ordninger fra langt senere, og koloniveksten fortsatte.",
    },
    {
      question: "Hva er mekanismen bak at faste stormaktsmøter dempet konflikt?",
      options: ["De reduserer usikkerhet, siden problemer kan tas opp før de blir til kriser", "De gir de mindre statene en fast kanal for å klage på stormaktenes egne disposisjoner", "De gjør vedtakene rettslig bindende for alle statene som deltar i møtene", "De erstatter maktbalansen med en ordning der ingen stat trenger egne styrker"],
      explanation: "Når det finnes en kjent kanal for å ta opp et problem, trenger problemet ikke å vokse til en krise for å bli behandlet — og partene får informasjon om hverandres hensikter i stedet for å måtte gjette. Møtene var stormaktenes egne, de ga ingen rettslig binding, og de erstattet ikke balansepolitikken.",
    },
    {
      question: "Hva er argumentet MOT stormaktsforvaltning som prinsipp?",
      options: ["De tyngste forvalter ordenen slik det tjener dem selv, uten kanal for de øvrige", "De tyngste statene mangler som regel den militære evnen til å bære ansvaret", "Ordningen krever enstemmighet og blir derfor lammet i de viktigste sakene", "Ordningen forutsetter at alle statene har omtrent samme økonomiske størrelse"],
      explanation: "Innvendingen er at de som forvaltes uten å være representert, ikke har noen kanal for å bestride fordelingen, og at ordenen dermed kan opprettholde en fordeling som verken er rettferdig eller stabil på sikt. Argumentet FOR er nettopp at bare de tyngste har midlene — og lammelse ved enstemmighet er en annen ordnings problem.",
    },
    {
      question: "Hva antar den økonomiske nasjonalismen om internasjonal handel?",
      options: ["Handelen gir gevinster, men de fordeles ujevnt og styrker noens stilling mest", "Handelen er et nullsumspill der den ene partens gevinst er den andres tap", "Handelen bør avvikles helt, slik at hvert land produserer alt det trenger selv", "Handelen fordeler seg jevnt så lenge alle land følger de samme spillereglene"],
      explanation: "Retningen erkjenner at handel gir gevinster, men peker på at de fordeles ujevnt — og at den som får mest, styrker sin evne til å presse de andre. Derfor er spørsmålet ikke bare om en avtale lønner seg, men hvem den gjør sterkest. Retningen hevder ikke at handel er et nullsumspill eller bør avvikles.",
    },
    {
      question: "Hva er argumentet for beskyttelse av unge næringer, knyttet til List?",
      options: ["En ny næring tåler ikke etablert konkurranse i startfasen, men kan gjøre det senere", "En ny næring bør skjermes permanent fordi den skaper arbeidsplasser også i distriktene", "En ny næring gir staten skatteinntekter som frihandel ville flyttet til utlandet", "En ny næring trenger vern fordi utenlandske produsenter selger under kostpris"],
      explanation: "Argumentet er at næringen aldri blir moden nok til å konkurrere hvis den utsettes for etablert konkurranse fra starten, og at den som allerede er ledende, tjener på åpne markeder. Merk innvendingen: beskyttelse som skulle være midlertidig, har en tendens til å bli varig, fordi de beskyttede får interesse av at den fortsetter.",
    },
    {
      question: "Hva er komparativt fortrinn?",
      options: ["At et land gir opp minst av andre varer for å produsere en bestemt vare", "At et land produserer en bestemt vare billigere enn alle andre land gjør", "At et land er mer effektivt enn handelspartneren i produksjonen av alle varer", "At et land har naturgitte forutsetninger andre land ikke har mulighet til å skaffe"],
      explanation: "Komparativt fortrinn defineres ved alternativkostnaden — hva som gis opp av den andre varen — ikke ved hvem som er best eller billigst. Derfor kan et land ha komparativt fortrinn i én vare selv om det er dårligere til å produsere alt. Å forveksle dette med absolutt fortrinn er en av de vanligste feilene i emnet.",
    },
    {
      question: "Hvilken innvending møter den økonomiske liberalismen?",
      options: ["Gevinstene ved åpen handel er spredte, mens tapene ved omstilling er konsentrerte", "Handel mellom land med ulik størrelse er teknisk umulig å gjennomføre i praksis", "Spesialisering forutsetter at landene har helt like produksjonsforhold fra før", "Åpne markeder fører alltid til at det svakeste landet taper på handelen totalt"],
      explanation: "De som taper på at en næring forsvinner, taper mye hver, mens de som vinner, vinner litt hver. Det forklarer hvorfor handelspolitikk forblir politisk vanskelig selv når regnestykket samlet sett er positivt — det er en mekanisme, ikke en moralsk innvending mot teorien.",
    },
    {
      question: "Hva er marxismens hovedpoeng som retning i internasjonal politisk økonomi?",
      options: ["Fordelingen følger av hvordan systemet er innrettet, ikke av hvert lands evner", "Handel mellom stater bør styres av avtaler mellom regjeringer og fagbevegelser", "Konfliktene i verdensøkonomien går utelukkende mellom rike og fattige stater", "Stater bør beskytte unge næringer til de kan konkurrere på like vilkår med andre"],
      explanation: "Retningen peker på at noen områder leverer råvarer og arbeidskraft mens andre beholder den mest verdifulle produksjonen, og at dette mønsteret følger av systemets innretning. Konfliktlinjene går på tvers av landegrensene og ikke bare mellom stater, og industribeskyttelse er den økonomiske nasjonalismens anbefaling.",
    },
    {
      question: "Hva er de tre retningene i internasjonal politisk økonomi egentlig uenige om?",
      options: ["Om handelsgevinstenes fordeling følger av evner eller av posisjon i systemet", "Om internasjonal handel i det hele tatt gir noen samlet gevinst å fordele", "Om stater eller bedrifter er de viktigste aktørene i verdensøkonomien i dag", "Om økonomisk vekst er ønskelig når den har konsekvenser for miljøet"],
      explanation: "Liberalismen sier evner, og at posisjonen derfor kan endres ved å spesialisere seg riktig. Nasjonalismen sier at posisjonen påvirker hvilke evner man i det hele tatt får utviklet. Marxismen sier at posisjonen er innebygd i systemet. Å finne dette ene spørsmålet erstatter tre presentasjoner med én sammenligning.",
    },
  ],
  'inter1000-3-1': [
    {
      question: "Hva viser etterspørselskurven?",
      options: ["Hvor mye kjøperne til sammen ønsker å kjøpe ved hver enkelt pris", "Hvor mye kjøperne trenger av varen for å dekke behovene sine", "Hvor mye som faktisk blir omsatt i markedet ved den gjeldende prisen", "Hvor mye kjøperne har råd til å kjøpe med de inntektene de har"],
      explanation: "Kurven viser ønsket kjøp ved hver pris. Behov teller ikke: et stort behov uten betalingsvilje flytter ingen kurve. Faktisk omsatt mengde er ett enkelt punkt på kurven, nemlig der den krysser tilbudskurven, og samlet kjøpekraft er ikke det kurven måler.",
    },
    {
      question: "Hvorfor faller etterspørselskurven mot høyre?",
      options: ["Fordi noen kjøpere finner noe annet å bruke pengene på når prisen stiger", "Fordi produsentene reduserer tilbudet sitt straks prisen begynner å stige", "Fordi kjøperne alltid foretrekker billige varer framfor dyre varer", "Fordi det finnes en øvre grense for hvor mye folk klarer å forbruke"],
      explanation: "Fallet er summen av mange enkeltbeslutninger: ved en høyere pris kjøper noen mindre, bytter til noe annet eller lar være. Produsentenes tilpasning hører til tilbudskurven, og en generell forkjærlighet for lave priser eller en metningsgrense er ikke det som gir kurven form.",
    },
    {
      question: "Hvorfor stiger tilbudskurven mot høyre?",
      options: ["Fordi en høyere pris gjør at også dyrere produksjon blir lønnsom", "Fordi produsentene tjener mer per enhet jo mer de klarer å selge", "Fordi lagrene fylles opp når etterspørselen i markedet er svak", "Fordi kostnadene per enhet faller når produksjonen øker i omfang"],
      explanation: "Produksjon koster, og de billigste mulighetene brukes først. Når prisen stiger, blir produksjon som ikke lønte seg før, lønnsom. Det handler ikke om fortjeneste per enhet ved stort salg, om lagerbeholdning eller om at kostnadene faller ved større volum.",
    },
    {
      question: "Hva betyr det at markedet er i likevekt?",
      options: ["At ønsket kjøp og ønsket salg er nøyaktig like store", "At prisen er den laveste kjøperne kan klare å oppnå i markedet", "At alle produsentene får dekket sine gjennomsnittlige kostnader", "At prisen har vært uendret over en lengre sammenhengende periode"],
      explanation: "Likevekt betyr at kjøpsønskene og salgsønskene går opp i opp, slik at ingen har grunn til å presse prisen. Det sier verken at prisen er lav, at alle bedrifter går rundt eller at prisen er stabil over tid — endrer noe seg, flytter likevekten seg.",
    },
    {
      question: "Hva skjer når prisen ligger over likevektsprisen?",
      options: ["Det oppstår et overskuddstilbud, og prisen presses nedover", "Det oppstår et etterspørselsoverskudd, og prisen presses oppover", "Både etterspurt og tilbudt mengde faller med like mye som før", "Markedet blir liggende i den nye prisen inntil noen griper inn"],
      explanation: "Over likevekten vil selgerne selge mer enn kjøperne vil kjøpe, og usolgte varer får selgerne til å senke prisen. Etterspørselsoverskudd oppstår motsatt vei, ved en pris under likevekt, og markedet trenger ingen inngripen for å bevege seg.",
    },
    {
      question: "Hva er et etterspørselsoverskudd?",
      options: ["At kjøperne vil kjøpe mer enn selgerne vil selge ved den gjeldende prisen", "At kjøperne samlet sett bruker mer penger på varen enn de gjorde tidligere", "At etterspørselen etter varen har økt mer enn produsentene hadde ventet", "At det finnes flere kjøpere enn selgere blant aktørene i dette markedet"],
      explanation: "Begrepet beskriver en tilstand ved en bestemt pris: ønsket kjøp overstiger ønsket salg, og noen kjøpere blir stående uten. Det handler verken om samlet pengebruk, om utviklingen i etterspørselen over tid eller om antallet aktører på hver side.",
    },
    {
      question: "Hva er en pristaker?",
      options: ["En aktør som er for liten til å påvirke prisen med sine egne valg", "En aktør som godtar den prisen selgeren har satt uten å forhandle", "En aktør som kjøper varen uansett hvor mye prisen skulle stige", "En aktør som må kjøpe til en pris myndighetene har fastsatt"],
      explanation: "En pristaker må forholde seg til prisen slik den er, og velger bare sin egen mengde. Hun er ikke maktesløs — hun bestemmer hvor mye hun kjøper eller selger. Det handler verken om forhandlingsvegring, om prisfølsomhet eller om regulerte priser.",
    },
    {
      question: "Hva kjennetegner fullkommen konkurranse?",
      options: ["Mange kjøpere og selgere, ensartet vare, og alle er pristakere", "Svært hard rivalisering mellom noen få store aktører i markedet", "At ingen av aktørene samarbeider om priser eller om produksjonen", "At myndighetene fører tilsyn med hvordan prisene blir fastsatt"],
      explanation: "Fullkommen konkurranse er en idealisering med mange små pristakere og en ensartet vare, og det er den som gjør at prisen framstår som markedets utfall. Hard rivalisering mellom få store aktører er noe helt annet, og verken fravær av samarbeid eller offentlig tilsyn er en del av begrepet.",
    },
    {
      question: "Hva kalles det når hele etterspørselskurven flytter seg utover?",
      options: ["Et skift i etterspørselen, utløst av noe annet enn varens egen pris", "En bevegelse langs etterspørselskurven, utløst av en endring i varens pris", "En endring i tilbudet, som gjør at flere kan få kjøpt varen", "En elastisitetsendring, som gjør etterspørselen mer prisfølsom"],
      explanation: "Et skift betyr at kjøperne ønsker en annen mengde ved hver eneste pris, og årsaken er alltid noe annet enn varens egen pris. Endrer varens pris seg, beveger vi oss langs kurven; endrer helningen seg, er det prisfølsomheten som er en annen.",
    },
    {
      question: "Kaffeprisen faller, og de som drikker kaffe fra før, kjøper litt mer. Hva er dette?",
      options: ["En bevegelse langs etterspørselskurven, siden varens egen pris er endret", "Et skift i etterspørselen utover, siden det blir kjøpt mer enn før", "Et skift i tilbudet utover, siden det er selgerne som satte ned prisen", "En endring i prisfølsomheten, siden kjøperne reagerer på prisendringen"],
      explanation: "Årsaken er varens egen pris, og da ligger kurven stille mens vi leser av et annet punkt på den. Å kalle dette økt etterspørsel er den klassiske forvekslingen: den etterspurte mengden økte, mens etterspørselen ikke gjorde det.",
    },
    {
      question: "Hvilken av disse hendelsene flytter etterspørselskurven?",
      options: ["Kjøpernes inntekter stiger, slik at de vil ha mer ved hver pris", "Varens egen pris faller, slik at det blir kjøpt mer enn før", "Produksjonen blir billigere etter at ny teknologi er tatt i bruk", "En stor produsent stanser leveransene sine til dette markedet"],
      explanation: "Inntekt er en av faktorene som flytter hele etterspørselskurven. Varens egen pris flytter oss derimot langs kurven, mens billigere produksjon og et produksjonsbortfall begge flytter tilbudskurven, ikke etterspørselskurven.",
    },
    {
      question: "Hva er et substitutt?",
      options: ["En vare som kan brukes i stedet for en annen vare", "En vare som brukes sammen med en annen vare", "En vare som er billigere enn en tilsvarende vare", "En vare som produseres av den samme produsenten"],
      explanation: "Substitutter konkurrerer om samme bruk, så blir det ene dyrere, skifter etterspørselen etter det andre utover. Varer som brukes sammen, er komplementer og trekker motsatt vei, og verken pris eller produsent avgjør om to varer er substitutter.",
    },
    {
      question: "Prisen på gass stiger. Hva skjer i markedet for kull, som kan brukes i stedet?",
      options: ["Etterspørselen etter kull skifter utover, fordi et substitutt er blitt dyrere", "Etterspørselen etter kull skifter innover, fordi energi generelt er blitt dyrere", "Tilbudet av kull skifter utover, fordi produsentene ser en mulighet til å tjene", "Ingenting skjer i kullmarkedet, siden gassprisen ikke gjelder kull"],
      explanation: "Blir et substitutt dyrere, vil kjøperne ha mer av varen ved hver eneste pris, og kurven skifter utover. I gassmarkedet selv er den samme hendelsen derimot en bevegelse langs etterspørselskurven, siden det er varens egen pris som er endret.",
    },
    {
      question: "Hva er komparativ statikk?",
      options: ["Å sammenligne den gamle likevekten med den nye etter en endring", "Å beregne hvor lang tid markedet bruker på å nå den nye likevekten", "Å sammenligne to markeder som har omtrent samme likevektspris", "Å holde både tilbud og etterspørsel fast mens prisen varierer"],
      explanation: "Komparativ statikk sammenligner to likevekter uten å si noe om forløpet mellom dem. Spørsmål om tempo i tilpasningen ligger utenfor det emnet krever, og metoden gjelder ett marked før og etter en endring, ikke to ulike markeder.",
    },
    {
      question: "Hva betyr det at en etterspørselskurve er bratt?",
      options: ["At mengden endrer seg lite selv når prisen endrer seg mye", "At kjøperne er villige til å betale svært mye for varen", "At varen har mange nære erstatninger tilgjengelig i markedet", "At etterspørselen etter varen vokser raskt fra år til år"],
      explanation: "En bratt kurve betyr liten prisfølsomhet: mengden beveger seg lite når prisen beveger seg. Mange erstatninger gir tvert imot en slak kurve, og verken betalingsvilje eller vekst over tid er det helningen måler.",
    },
    {
      question: "Hvorfor er etterspørselen etter energi typisk lite prisfølsom på kort sikt?",
      options: ["Fordi kjøperne ikke rekker å skaffe seg alternativer på kort tid", "Fordi energi er en vare folk ikke bryr seg om prisen på", "Fordi produsentene ikke klarer å øke leveransene sine raskt", "Fordi myndighetene ofte skjermer forbrukerne mot prisøkninger"],
      explanation: "Prisfølsomhet handler om å ha et alternativ, og på kort sikt kan ingen bygge om oppvarmingen eller endre vaner over natten. Kjøperne merker prisen godt, men har ikke noe sted å gå. Produsentenes tilpasningsevne gjelder tilbudssiden, ikke etterspørselens helning.",
    },
    {
      question: "Det samme tilbudssjokket rammer to markeder. Hvor blir prisutslaget størst?",
      options: ["Der etterspørselen er lite prisfølsom, altså der kurven er brattest", "Der etterspørselen er svært prisfølsom, altså der kurven er slakest", "Der markedet har flest små produsenter og mange kjøpere", "Der likevektsprisen var høyest før sjokket inntraff i markedet"],
      explanation: "Er kjøperne lite prisfølsomme, må prisen stige mye før etterspurt mengde faller nok til å møte det mindre tilbudet. Der etterspørselen er prisfølsom, holder en liten prisoppgang — men da faller mengden desto mer. Antall aktører og utgangsprisen avgjør ikke dette.",
    },
    {
      question: "Hvilket marked får det største mengdeutslaget av et gitt tilbudssjokk?",
      options: ["Det markedet der etterspørselen er mest prisfølsom", "Det markedet der etterspørselen er minst prisfølsom", "Det markedet der tilbudskurven er brattest fra før", "Det markedet der prisen steg mest som følge av sjokket"],
      explanation: "Pris og mengde peker motsatt vei: der kjøperne lett gir slipp på forbruket, holder en liten prisoppgang, men mengden faller mye. Markedet med det største prisutslaget får dermed det minste mengdeutslaget, ikke det største.",
    },
    {
      question: "Hva er alternativkostnaden ved et valg?",
      options: ["Verdien av det beste du gir opp for å gjøre det", "Summen av de utgiftene valget faktisk fører med seg", "Differansen mellom prisen og kostnaden ved å produsere", "Kostnaden ved å endre et valg du allerede har tatt"],
      explanation: "Alternativkostnaden teller alt du oppgir, også der ingen penger skifter hender — en time brukt på noe gratis har en alternativkostnad. Den er derfor mer omfattende enn utgiftene, og den er noe annet enn fortjenestemargin eller omstillingskostnad.",
    },
    {
      question: "Hva er marginalkostnaden?",
      options: ["Kostnaden ved å produsere én enhet til av varen", "De samlede kostnadene delt på antall produserte enheter", "Kostnaden ved den delen av produksjonen som er minst lønnsom", "Den delen av kostnadene som varierer med prisen på varen"],
      explanation: "Marginalkostnaden gjelder den neste enheten, og det er den som avgjør om en utvidelse lønner seg. Samlede kostnader delt på antall enheter er gjennomsnittskostnaden, som svarer på et annet spørsmål — om virksomheten samlet går rundt.",
    },
    {
      question: "Hvilket kostnadsbegrep avgjør om det lønner seg å produsere én enhet til?",
      options: ["Marginalkostnaden, siden spørsmålet gjelder den neste enheten", "Gjennomsnittskostnaden, siden den viser om driften går rundt", "Alternativkostnaden, siden noe annet må gis opp for å produsere", "De faste kostnadene, siden de påløper uansett hva som skjer"],
      explanation: "Beslutninger på marginen avgjøres av marginalkostnaden: er den lavere enn prisen, lønner utvidelsen seg. Å bruke gjennomsnittstall her er en klassisk feil, og kostnader som allerede har påløpt, endrer ikke svaret på om én enhet til lønner seg.",
    },
    {
      question: "Hva er sammenhengen mellom tilbudskurven og marginalkostnaden?",
      options: ["Tilbudskurven er i praksis marginalkostnadskurven under fullkommen konkurranse", "Tilbudskurven ligger alltid et godt stykke over marginalkostnadskurven i figuren", "Tilbudskurven viser gjennomsnittskostnaden ved hvert enkelt produksjonsnivå", "Tilbudskurven og marginalkostnaden har ingen systematisk sammenheng"],
      explanation: "Produsenten utvider så lenge prisen dekker kostnaden ved den neste enheten, og stopper der de er like. Derfor faller tilbudskurven sammen med marginalkostnadskurven, ikke med gjennomsnittskostnaden — og sammenhengen er systematisk, ikke tilfeldig.",
    },
    {
      question: "Hva betyr forutsetningen «alt annet likt»?",
      options: ["At vi endrer én ting av gangen og holder resten fast i analysen", "At alle aktørene i markedet antas å ha den samme informasjonen", "At de to kurvene antas å ha like bratt helning i figuren", "At forholdene i virkeligheten faktisk er uendret over tid"],
      explanation: "Forutsetningen er en analysemåte som gjør at vi kan si retningen med sikkerhet. Den er ikke en påstand om at verden står stille, ikke et krav om lik informasjon, og den sier ingenting om kurvenes helning.",
    },
    {
      question: "To hendelser trekker pris og mengde i hver sin retning samtidig. Hva er riktig svar?",
      options: ["Si hva som kan fastslås sikkert, og begrunn hvilken effekt som trolig dominerer", "Velge den av hendelsene som kom først, siden den rekker å virke lengst i markedet", "Anta at de to virkningene opphever hverandre og at ingenting endres", "Konkludere med at modellen ikke kan brukes på slike situasjoner"],
      explanation: "Modellen gir et sikkert svar på den ene størrelsen og et betinget svar på den andre. Riktig framgangsmåte er å skille de to og begrunne en vurdering, ikke å anta at effektene nøytraliserer hverandre eller å legge modellen bort.",
    },
    {
      question: "Hva er knapphet i økonomisk forstand?",
      options: ["At det ikke finnes nok av alt til at alle ønsker kan oppfylles", "At et land mangler ressurser som andre land har tilgang til", "At en vare er blitt vanskelig å få tak i i en gitt periode", "At prisen på en vare har steget kraftig på kort tid"],
      explanation: "Knapphet er fagets utgangspunkt og gjelder også rike samfunn: tid, arbeidskraft og natur er begrenset, så noe må velges bort. Midlertidig mangel på en vare eller en kraftig prisoppgang er noe annet, og knapphet er ikke det samme som fattigdom.",
    },
    {
      question: "Hva sier markedsmodellen IKKE noe om?",
      options: ["Om fordelingen av utfallet mellom partene er rimelig", "Hvilken vei prisen beveger seg når tilbudet faller bort", "Hvilken vei mengden beveger seg når etterspørselen øker", "Om utslaget blir stort eller lite når kurvene er bratte"],
      explanation: "Modellen sier hva som skjer med pris og mengde, og med helningene sier den noe om hvor store utslagene blir. Spørsmål om rimelighet og fordeling er normative og hører til de andre søylene i emnet — modellen tar ikke stilling til dem.",
    },
  ],
  'inter1000-3-2': [
    {
      question: "Hva er en stykkskatt?",
      options: ["En avgift på et fast kronebeløp per enhet som produseres eller omsettes", "En avgift som utgjør en fast andel av prisen på den enkelte varen", "En avgift som betales én gang i året uavhengig av produksjonen", "En avgift som bare gjelder varer som blir importert fra utlandet"],
      explanation: "Stykkskatten er et fast beløp per enhet, og det er derfor den er lett å tegne: den øker kostnaden ved hver eneste enhet like mye. En andel av prisen ville gitt et skift som vokser med prisen, og en avgift på import er toll.",
    },
    {
      question: "Hva skjer med tilbudskurven når en stykkskatt legges på produsentene?",
      options: ["Den løftes parallelt oppover med nøyaktig avgiftsbeløpet", "Den blir brattere, fordi produksjonen blir mindre lønnsom", "Den skifter innover med et beløp som avhenger av prisen", "Den ligger fast, mens etterspørselskurven skifter nedover"],
      explanation: "Tilbudskurven viser hvilken pris selgerne må ha for å tilby en gitt mengde, og etter avgiften må de ha avgiftsbeløpet mer per enhet ved hver mengde. Skiftet er derfor en parallell forskyvning, ikke en endring i helningen eller i etterspørselen.",
    },
    {
      question: "Hvorfor løftes tilbudskurven med nøyaktig avgiftsbeløpet?",
      options: ["Fordi selgerne må ha akkurat det beløpet mer for å sitte igjen med det samme", "Fordi kjøperne er villige til å betale nøyaktig det beløpet ekstra per enhet", "Fordi staten krever inn beløpet fra hver enhet som blir produsert", "Fordi produksjonskostnadene stiger med det samme beløpet over tid"],
      explanation: "Begrunnelsen ligger i å lese tilbudskurven baklengs: den forteller hvilken pris som kreves for en gitt mengde, og kravet øker med avgiften. At staten krever beløpet inn, forklarer ikke hvorfor kurven flytter seg akkurat så mye, og kjøpernes betalingsvilje er uendret.",
    },
    {
      question: "Hva skjer med kjøperprisen når en stykkskatt innføres?",
      options: ["Den stiger, men med mindre enn avgiftsbeløpet", "Den stiger med nøyaktig hele avgiftsbeløpet", "Den er uendret, siden produsenten betaler avgiften", "Den faller, siden den omsatte mengden går ned"],
      explanation: "Prisen stiger, men et forsøk på full overvelting ville gitt et salgsfall selgerne ikke vil ha, så prisen stopper lavere. Resten bærer selgeren gjennom lavere nettopris. Full overvelting skjer bare i grensetilfellet med loddrett etterspørselskurve.",
    },
    {
      question: "Hva er selgerprisen etter at en avgift er innført?",
      options: ["Det selgeren sitter igjen med per enhet når avgiften er betalt", "Den prisen selgeren krever av kjøperen i markedet etter avgiften", "Den prisen selgeren hadde før avgiften ble innført i markedet", "Selgerens fortjeneste per enhet etter at kostnadene er trukket fra"],
      explanation: "Selgerprisen leses av på den opprinnelige tilbudskurven ved den nye mengden og er lavere enn den gamle likevektsprisen. Det kjøperen betaler, er kjøperprisen, og selgerprisen er ikke fortjeneste — produsentens egne kostnader er ikke trukket fra.",
    },
    {
      question: "Hva er avgiftskilen?",
      options: ["Avstanden mellom kjøperpris og selgerpris ved den nye mengden", "Prisøkningen kjøperen opplever etter at avgiften er innført", "Nedgangen i omsatt mengde regnet fra den gamle likevekten", "Statens samlede inntekt fra avgiften i en gitt periode"],
      explanation: "Kilen er nøyaktig lik avgiften og er den beste kontrollen på en egen figur. Prisøkningen er bare den øvre delen av kilen, mengdefallet måles langs den andre aksen, og inntekten er satsen ganget med den nye mengden.",
    },
    {
      question: "Hva menes med avgiftsdeling?",
      options: ["At avgiften i praksis bæres av begge sider av markedet", "At staten deler avgiftsinntekten mellom flere ulike formål", "At avgiften fordeles likt mellom alle produsentene i markedet", "At kjøper og selger avtaler seg imellom hvem som skal betale"],
      explanation: "Kjøperen bærer sin del gjennom høyere pris og selgeren sin gjennom lavere nettopris, og til sammen utgjør de to bevegelsene avgiften. Det er et utfall av hvordan partene reagerer på pris, ikke en avtale, en fordelingsnøkkel eller en budsjettbeslutning.",
    },
    {
      question: "Hvilken mekanisme forklarer at prisen stiger mindre enn avgiften?",
      options: ["Etterspurt mengde faller ved full overvelting, så selgerne må godta mindre", "Avgiften deles mellom kjøper og selger, så bare halvparten av beløpet slår ut", "Staten setter avgiften lavere enn den prisøkningen markedet tåler", "Produsentene har ikke lov til å velte hele avgiften over på kjøperen"],
      explanation: "Kjeden går slik: forsøker selgerne å ta hele avgiften ut i prisen, faller etterspurt mengde, og de får ikke solgt det de hadde tenkt. Å si at avgiften deles, er å gjenta konklusjonen, ikke å forklare den — og det finnes verken en halveringsregel eller et forbud mot overvelting.",
    },
    {
      question: "Hva skjer med den omsatte mengden når en avgift innføres?",
      options: ["Den faller, fordi kjøperprisen har steget", "Den er uendret, fordi kjøpernes behov ikke er endret", "Den stiger, fordi produsentene må selge mer for å dekke avgiften", "Den faller med nøyaktig like mye som avgiftsbeløpet utgjør"],
      explanation: "Kjøperprisen stiger, og ved en høyere pris kjøpes det mindre. Sett fra selgersiden faller den dyreste produksjonen bort ved den nye, lavere nettoprisen. Mengden måles i enheter og kan ikke falle med et kronebeløp.",
    },
    {
      question: "Hvem bærer den største delen av en avgift?",
      options: ["Den siden av markedet som er minst prisfølsom", "Den siden av markedet som er mest prisfølsom", "Den siden som formelt er pålagt å betale avgiften inn", "Den siden som har færrest aktører i det aktuelle markedet"],
      explanation: "Prisfølsomhet er det samme som å ha et alternativ, og den som lett kan trekke seg unna, kan ikke presses til å bære mye. Hvem loven peker på, har ingen betydning for utfallet, og antall aktører avgjør ikke fordelingen.",
    },
    {
      question: "Når havner det meste av avgiften i kjøperprisen?",
      options: ["Når etterspørselen er lite prisfølsom og tilbudet er prisfølsomt", "Når etterspørselen er prisfølsom og tilbudet er lite prisfølsomt", "Når både etterspørsel og tilbud er svært prisfølsomme", "Når avgiften er høy nok til å redusere mengden merkbart"],
      explanation: "Er kjøperne lite prisfølsomme, faller salget lite når selgerne skyver avgiften over, og de gjør det derfor. Er kjøperne prisfølsomme og produsentene bundet, blir det motsatt. Avgiftens størrelse endrer ikke hvordan byrden fordeler seg.",
    },
    {
      question: "Hva skjer i grensetilfellet der etterspørselskurven er loddrett?",
      options: ["Kjøperprisen stiger med hele avgiften, og mengden er uendret", "Selgerprisen faller med hele avgiften, og mengden er uendret", "Avgiften deles likt mellom kjøper og selger i dette tilfellet", "Avgiften får ingen virkning verken på pris eller på mengde"],
      explanation: "En loddrett etterspørselskurve betyr at kjøperne ikke reagerer på pris i det hele tatt, så selgerne kan velte hele avgiften over. Motsatt bærer selgeren alt når tilbudet er loddrett. Grensetilfellene motsier ikke hovedregelen — de er dens ytterpunkter.",
    },
    {
      question: "Spiller det noen rolle for utfallet om avgiften formelt legges på kjøper eller selger?",
      options: ["Nei, delingen og mengden blir den samme uansett hvem som pålegges", "Ja, den parten som pålegges avgiften, bærer alltid hele beløpet", "Ja, avgiften på kjøperne gir alltid et større fall i mengden", "Nei, men bare når kjøpere og selgere er like prisfølsomme"],
      explanation: "Markedet reagerer på hva hver part sitter igjen med, ikke på hvem som fyller ut skjemaet. Legges avgiften på kjøperne, faller etterspørselskurven i stedet, men avstanden mellom betalt og beholdt pris og den nye mengden blir den samme.",
    },
    {
      question: "Hva er forskjellen på formell og reell byrde ved en avgift?",
      options: ["Hvem loven pålegger å betale inn, mot hvem som faktisk sitter med regningen", "Hvor mye som betales inn, mot hvor mye som faktisk blir krevd inn", "Hvem som betaler i dag, mot hvem som vil betale på lengre sikt", "Hvem som betaler avgiften inn, mot hvem som bærer administrasjonskostnaden ved den"],
      explanation: "De to trenger ikke være de samme, og i markedsmodellen er de nesten aldri det: en politisk beslutning om hvem som skal betale, avgjør ikke hvem som ender opp med kostnaden. Det handler verken om innkreving, tidsperspektiv eller administrasjon.",
    },
    {
      question: "Hvordan regnes avgiftsinntekten?",
      options: ["Avgiftssatsen ganget med den mengden som omsettes etter avgiften", "Avgiftssatsen ganget med den mengden som ble omsatt før avgiften", "Prisøkningen kjøperne opplever, ganget med den nye mengden", "Differansen mellom gammel og ny pris, ganget med gammel mengde"],
      explanation: "Inntekten regnes av den nye, lavere mengden — det er derfor en avgift som får folk til å slutte å kjøpe varen, gir lite inntekt. Prisøkningen er bare kjøperens del av avgiften og gir ikke statens inntekt alene.",
    },
    {
      question: "Hva er et tilbudsbortfall?",
      options: ["At en del av det som ble produsert, forsvinner fra markedet", "At kjøperne ønsker å kjøpe mindre enn de gjorde tidligere", "At prisen faller så mye at produsentene slutter å selge varen", "At lagrene i markedet tømmes raskere enn de blir fylt opp"],
      explanation: "Ved et bortfall tilbys det mindre ved hver eneste pris, og hele tilbudskurven flytter seg innover. Kjøpernes ønsker er uendret, så det er ikke et etterspørselsfall — og et prisfall ville vært en bevegelse langs kurven, ikke et skift.",
    },
    {
      question: "Hva skjer med pris og mengde ved et tilbudsbortfall?",
      options: ["Prisen stiger, og den omsatte mengden faller", "Prisen faller, og den omsatte mengden faller også", "Prisen stiger, og den omsatte mengden stiger med den", "Prisen er uendret, mens mengden faller tilsvarende bortfallet"],
      explanation: "Et innoverskift i tilbudet sender pris og mengde i motsatt retning av hverandre. At begge faller, skjer ved et etterspørselsfall, og at begge stiger, skjer ved en etterspørselsøkning — tilbudsskift gir alltid motsatt retning.",
    },
    {
      question: "Hvorfor faller den omsatte mengden mindre enn produksjonen som falt bort?",
      options: ["Fordi den høyere prisen gjør annen produksjon lønnsom", "Fordi kjøperne fortsetter å kjøpe like mye som de gjorde før", "Fordi lagrene dekker opp for det som mangler i markedet", "Fordi myndighetene normalt setter inn tiltak ganske raskt"],
      explanation: "Prisøkningen flytter lønnsomhetsgrensen, slik at anlegg og leverandører som lå like under, kommer i drift, og uberørte produsenter leverer mer. Kjøperne kjøper mindre enn før, bare ikke så mye mindre som bortfallet, og forklaringen krever verken lager eller inngrep.",
    },
    {
      question: "Hva er forskjellen på bortfallet og det faktiske mengdefallet?",
      options: ["Bortfallet måles ved den gamle prisen, mengdefallet mellom de to likevektene", "Bortfallet gjelder ett anlegg, mens mengdefallet gjelder hele markedet", "Bortfallet gjelder produksjon, mens mengdefallet gjelder eksport og import", "Bortfallet måles i kroner, mens mengdefallet måles i antall enheter"],
      explanation: "Bortfallet er hvor mye produksjon som forsvant, målt ved den gamle prisen, og det faktiske mengdefallet er avstanden mellom gammel og ny omsatt mengde. Det siste er alltid minst, og begge måles i mengde, ikke i kroner.",
    },
    {
      question: "Hvem tjener på et tilbudsbortfall i et internasjonalt marked?",
      options: ["Produsentene som ikke ble rammet, siden de selger til høyere pris", "Kjøperne, siden forsyningen etter hvert blir mer forutsigbar over tid", "Den rammede produsenten, siden prisen på varen stiger", "Ingen, siden alle parter taper når tilbudet blir mindre"],
      explanation: "De uberørte produsentene selger like mye som før til en høyere pris, og et bortfall i ett land kan derfor bedre inntektene i et annet. Den rammede har mistet salget sitt, og kjøperne betaler mer for mindre.",
    },
    {
      question: "Hva er marginale anlegg?",
      options: ["Produksjonssteder som akkurat så vidt lønner seg ved gjeldende pris", "Produksjonssteder som ligger langt fra de viktigste markedene", "Produksjonssteder som bare brukes i perioder med lav etterspørsel", "Produksjonssteder som er nedlagt, men kan settes i drift raskt"],
      explanation: "De marginale anleggene ligger øverst på tilbudskurven, og en prisøkning gjør nettopp dem lønnsomme. Det avgjørende er lønnsomheten ved gjeldende pris, ikke beliggenhet, sesong eller om anlegget står stille i dag.",
    },
    {
      question: "Hvordan virker en eksportstans i markedsmodellen?",
      options: ["Som et tilbudsbortfall: kurven skifter innover, prisen stiger og mengden faller", "Som et etterspørselsfall: kurven skifter innover, og både pris og mengde faller", "Som en avgift: tilbudskurven løftes med et fast beløp per enhet", "Som et positivt tilbudssjokk i de landene som fortsatt eksporterer"],
      explanation: "Tilgangen på varen reduseres, og virkningen er den samme som ved annet bortfall. To forbehold hører med: varen kan omdirigeres til andre kjøpere, og mengdefallet blir mindre enn bortfallet fordi prisøkningen utløser produksjon andre steder.",
    },
    {
      question: "Hvorfor blir prisutslaget av et sjokk typisk mindre etter noen år?",
      options: ["Fordi begge sider rekker å tilpasse seg, slik at kurvene blir slakere", "Fordi sjokket som regel opphører av seg selv i løpet av kort tid", "Fordi myndighetene rekker å innføre tiltak som demper virkningen", "Fordi kjøperne venner seg til den nye prisen og slutter å reagere"],
      explanation: "På kort sikt er begge kurvene bratte fordi ingen rekker å tilpasse seg, og prisutslaget blir stort. Over tid finner kjøperne erstatninger og ny kapasitet kommer til, så kurvene blir slakere. Poenget gjelder tilpasningstid, ikke sjokkets varighet eller inngrep.",
    },
    {
      question: "Hva skjer ved et etterspørselsskift utover?",
      options: ["Både prisen og den omsatte mengden stiger", "Prisen stiger, mens den omsatte mengden faller", "Prisen faller, mens den omsatte mengden stiger", "Både prisen og den omsatte mengden faller"],
      explanation: "Etterspørselsskift sender pris og mengde samme vei, mens tilbudsskift sender dem motsatt vei. At prisen stiger og mengden faller, kjennetegner derimot en avgift eller et tilbudsbortfall.",
    },
    {
      question: "Hva er et positivt tilbudssjokk?",
      options: ["Produksjonen blir billigere, tilbudet skifter ut, prisen faller og mengden stiger", "Etterspørselen øker kraftig, slik at både prisen og den omsatte mengden stiger noe", "Prisen faller, slik at produsentene tilbyr en mindre mengde enn før", "Myndighetene fastsetter en lavere pris enn den markedet ville gitt"],
      explanation: "Ny teknologi eller lavere kostnader skyver tilbudskurven utover, og en subsidie virker på samme måte. Et etterspørselsskift sender begge størrelsene samme vei, og et prisfall alene er en bevegelse langs kurven, ikke et skift.",
    },
    {
      question: "Hvordan virker en subsidie per enhet sammenlignet med en avgift?",
      options: ["Tilbudskurven skyves ned, prisen faller og den omsatte mengden stiger", "Tilbudskurven skyves opp, men mindre enn ved en avgift av samme størrelse", "Etterspørselskurven skyves ut, slik at både pris og mengde stiger", "Ingen av kurvene flytter seg, siden staten betaler i stedet for å kreve inn"],
      explanation: "En subsidie er en avgift med motsatt fortegn, og virkningen er speilvendt. Gevinsten deles også speilvendt: kjøperprisen faller med mindre enn subsidien, slik at bare en del av den kommer kjøperen til gode.",
    },
    {
      question: "Hva er den viktigste forskjellen på en avgift og en kvoteordning?",
      options: ["Avgiften fastsetter prisen, mens kvoteordningen fastsetter mengden", "Avgiften rammer produsentene, mens kvoteordningen rammer kjøperne", "Avgiften gir inntekter til staten, mens kvoteordningen aldri gjør det", "Avgiften virker på kort sikt, mens kvoteordningen virker på lang sikt"],
      explanation: "Skillet gjelder hvilken størrelse myndighetene bestemmer og hvilken de lar markedet avgjøre. Begge treffer den som slipper ut, begge kan gi inntekter når kvoter selges, og begge virker på både kort og lang sikt.",
    },
    {
      question: "Hva er en CO2-avgift?",
      options: ["En stykkskatt på utslipp, altså et fast beløp per tonn klimagass", "En øvre grense for hvor mye hver bedrift har lov til å slippe ut", "En avgift som beregnes som en andel av bedriftens samlede omsetning", "En betaling som bedrifter gjør frivillig for å kompensere utslipp"],
      explanation: "Avgiften virker som enhver stykkskatt: tilbudskurven løftes, prisen stiger og mengden faller. En øvre grense per bedrift er en kvoteordning, som setter mengden i stedet for prisen.",
    },
    {
      question: "Hvorfor er mengdefallet poenget med en miljøavgift?",
      options: ["Fordi avgiften skal endre atferd, ikke først og fremst skaffe inntekter", "Fordi et mindre marked er lettere for myndighetene å føre tilsyn med", "Fordi produsentene da får bedre tid til å tilpasse produksjonen sin", "Fordi statens inntekter fra avgiften blir størst når den omsatte mengden faller"],
      explanation: "Miljøavgiften skal gjøre utslippsintensiv aktivitet dyrere slik at det blir mindre av den. Her ligger også en spenning: en avgift som virker godt på atferden, gir etter hvert mindre inntekt, nettopp fordi den virker.",
    },
    {
      question: "Hva menes med gjennomslag i forbrukerprisen?",
      options: ["Hvor stor del av en avgiftsøkning som ender opp i prisen forbrukeren møter", "Hvor lang tid det tar før en avgiftsøkning merkes i butikkene", "Hvor stor andel av forbrukerne som faktisk merker at avgiften er blitt innført", "Hvor mye av avgiften staten faktisk klarer å kreve inn i praksis"],
      explanation: "Gjennomslaget er avgiftsdelingen sett fra politikkens side, og det bestemmes av prisfølsomheten på begge sider og av tiden. Det er ikke det samme som avgiftssatsen: en høy avgift med lavt gjennomslag kan gi mindre prisøkning enn en lav med fullt gjennomslag.",
    },
    {
      question: "Hvilken kontroll kan du gjøre på din egen avgiftsfigur?",
      options: ["Sjekke at avstanden mellom de to prisene ved ny mengde er lik skiftet i kurven", "Sjekke at prisøkningen for kjøperen er nøyaktig lik hele avgiftsbeløpet i figuren", "Sjekke at den nye mengden er halvparten av den gamle mengden", "Sjekke at de to tilbudskurvene møtes i et punkt lengst til høyre"],
      explanation: "Avgiftskilen skal være nøyaktig lik det loddrette skiftet i tilbudskurven. At prisøkningen er lik avgiften, ville tvert imot vært et tegn på feil, og det finnes ingen fast regel for hvor mye mengden faller.",
    },
  ],
  'inter1000-3-3': [
    {
      question: "Hva er en ekstern virkning?",
      options: ["En kostnad eller gevinst som treffer andre og ikke er priset i markedet", "En kostnad som en bedrift påfører sine konkurrenter i samme marked", "En virkning som oppstår utenfor landets grenser og rammer andre stater", "En uønsket følge av et politisk vedtak om å regulere en næring"],
      explanation: "Begge ledd må med: virkningen treffer andre enn den som handler, og den går ikke gjennom en pris. Uten det siste leddet blir all konkurranse en ekstern virkning — en konkurrent som taper salg fordi noen selger billigere, rammes nettopp gjennom prisen.",
    },
    {
      question: "Hva kjennetegner en negativ ekstern virkning?",
      options: ["Den påfører andre en kostnad, slik at det blir for mye av aktiviteten", "Den påfører andre en kostnad, slik at det blir for lite av aktiviteten", "Den gjør produksjonen dyrere for produsenten selv enn den ellers ville vært", "Den rammer bare de forbrukerne som faktisk kjøper den aktuelle varen"],
      explanation: "Kostnaden ligger utenfor produsentens regnestykke, så aktiviteten framstår billigere for henne enn den er for samfunnet — og da blir det for mye av den. At det blir for lite, gjelder positive eksterne virkninger, der gevinsten tilfaller andre.",
    },
    {
      question: "Hva er et eksempel på en positiv ekstern virkning?",
      options: ["Forskning som andre kan bygge videre på uten å betale for det", "En bedrift som selger billigere og dermed vinner kunder fra andre", "En vare som blir billigere fordi produksjonen er blitt mer effektiv", "En avgift som gir staten inntekter den kan bruke på fellesgoder"],
      explanation: "Gevinsten tilfaller andre uten at den som skaper den, får betalt, og derfor blir det for lite av aktiviteten. De tre øvrige virker gjennom prisen eller gjennom statsbudsjettet, og er dermed ikke eksterne virkninger.",
    },
    {
      question: "Hva er marginal samfunnskostnad?",
      options: ["Kostnaden ved den siste enheten, medregnet det som påføres andre", "Kostnaden ved den siste enheten for produsenten selv alene", "De samlede kostnadene ved all produksjonen i markedet til sammen", "Statens utgifter til å regulere og føre tilsyn med næringen"],
      explanation: "Marginal samfunnskostnad teller alle kostnadene ved den siste enheten, uansett hvem som bærer dem. Produsentens egen andel er den private marginalkostnaden, og avstanden mellom de to er den marginale eksterne skaden.",
    },
    {
      question: "Hva er marginal samfunnsnytte?",
      options: ["Verdien for samfunnet av den siste enheten som produseres", "Verdien for samfunnet av all produksjonen sett under ett", "Den gevinsten produsenten sitter igjen med etter kostnadene", "Den samlede betalingsviljen i markedet for hele mengden"],
      explanation: "Nytten måles på marginen, altså av den siste enheten, og i den enkle framstillingen er den lik kjøpernes betalingsvilje for den enheten. Samlet verdi eller samlet betalingsvilje er noe annet, og produsentens gevinst er ikke et nyttebegrep her.",
    },
    {
      question: "Hva er markedssvikt?",
      options: ["At markedet ikke gir det beste utfallet selv om alle handler fornuftig", "At markedet slutter å fungere fordi det er for få aktører igjen i det", "At prisene svinger kraftig og gjør det vanskelig for aktørene å planlegge", "At myndighetene griper inn og hindrer markedet i å fungere som det skal"],
      explanation: "Markedssvikt betyr at prisene er ufullstendige, slik at de styrer aktørene feil — ikke at noen gjør noe galt eller at markedet fungerer dårlig teknisk. De to formene emnet krever, er eksterne virkninger og kollektive goder.",
    },
    {
      question: "Hvor ligger det samfunnsøkonomisk optimale nivået?",
      options: ["Der marginal samfunnsnytte er lik marginal samfunnskostnad", "Der markedet havner på egen hånd uten noen form for inngrep", "Der produsentens egen marginalkostnad er så lav som mulig", "Der utslippene er null, siden all forurensning er skadelig"],
      explanation: "Optimum er der den siste enheten er akkurat så verdifull som den er kostbar for samfunnet samlet. Punktet ligger lavere enn der markedet havner på egen hånd, men normalt over null — de første enhetene er mer verdt enn de koster.",
    },
    {
      question: "Hvorfor er det samfunnsøkonomisk optimale utslippet normalt ikke null?",
      options: ["Fordi de første enhetene er mer verdt enn de koster samlet sett", "Fordi det er teknisk umulig å drive produksjon uten noe utslipp", "Fordi nullutslipp ville krevd en avgift ingen stat kan innføre", "Fordi skadene ved små utslipp er umulige å måle i kroner"],
      explanation: "Å kutte det første tonnet er billig, å kutte det siste er svært dyrt, og gevinsten av ett kutt til faller når utslippene alt er lave. Optimum er der de to møtes. Merk forbeholdet: svaret forutsetter at skadene lar seg måle og oppfører seg jevnt.",
    },
    {
      question: "Hva er en Pigou-avgift?",
      options: ["En avgift satt lik den marginale eksterne skaden ved optimalt nivå", "En avgift satt så høyt at aktiviteten opphører helt i markedet", "En avgift som fordeles mellom alle bedriftene i en næring", "En avgift som brukes til å finansiere rensetiltak i næringen"],
      explanation: "Avgiften gjør at produsenten selv møter kostnaden hun ellers ville sendt videre, slik at den blir internalisert. Den er verken et forbud i forkledning eller en øremerket ordning — hva inntekten brukes til, er et annet spørsmål.",
    },
    {
      question: "Hva ligger i prinsippet om at forurenser betaler?",
      options: ["At den som påfører andre en miljøkostnad, skal bære den selv", "At forurensende virksomhet skal betale erstatning til de rammede", "At staten skal dekke kostnaden ved opprydding etter forurensning", "At forbrukeren skal betale mer for varer som forurenser mye"],
      explanation: "Prinsippet er både et rettferdighetsargument og et effektivitetsargument, siden den som betaler, også får et motiv til å slippe ut mindre. Det sier hvem som skal bære kostnaden, ikke hvor stor den skal være eller hvordan den skal kreves inn.",
    },
    {
      question: "Hva kjennetegner et kollektivt gode?",
      options: ["Det er både ikke-rivaliserende og ikke-ekskluderbart", "Det finansieres av staten over de offentlige budsjettene", "Det er tilgjengelig for alle som er villige til å betale for det", "Det er så knapt at det må fordeles etter behov og ikke etter pris"],
      explanation: "Begge kjennetegn kreves, og en definisjon med bare det ene er flat. At staten ofte finansierer slike goder, er en følge av egenskapene, ikke definisjonen — mange offentlig finansierte goder er faktisk rivaliserende.",
    },
    {
      question: "Hva betyr det at et gode er ikke-rivaliserende?",
      options: ["At din bruk ikke reduserer hva som er igjen til andre", "At ingen kan hindres i å bruke godet selv uten å betale", "At godet finnes i så store mengder at det aldri tar slutt", "At det ikke er konkurranse mellom dem som tilbyr godet"],
      explanation: "Ikke-rivaliserende betyr at min bruk ikke går ut over din — et stabilt klima blir ikke mindre stabilt fordi naboen nyter godt av det. At ingen kan stenges ute, er det andre kjennetegnet, ikke-ekskluderbarhet.",
    },
    {
      question: "Hva betyr det at et gode er ikke-ekskluderbart?",
      options: ["At det er umulig eller svært dyrt å stenge noen ute fra godet", "At din bruk av godet ikke reduserer hva som er igjen til andre", "At alle har en juridisk rett til å bruke godet gratis", "At godet er så billig å produsere at ingen tar seg betalt"],
      explanation: "Ikke-ekskluderbarhet er en påstand om hva som er praktisk mulig, og det er den som skaper finansieringsproblemet: kan ingen stenges ute, er det vanskelig å ta betalt. At bruk ikke går ut over andres bruk, er ikke-rivalisering.",
    },
    {
      question: "Hva er en gratispassasjer?",
      options: ["En som nyter godt av et gode uten å bidra til å finansiere det", "En aktør som bryter en avtale den selv har vært med på å inngå", "En stat som nekter å delta i internasjonale forhandlinger", "En produsent som slipper unna avgiften gjennom et smutthull"],
      explanation: "Begrepet beskriver et insentiv, ikke uærlighet: når ingen kan stenges ute, lønner det seg for hver enkelt å la andre betale, og godet blir underlevert selv om alle opptrer ærlig. Avtalebrudd og smutthull er noe annet.",
    },
    {
      question: "Hva er allmenningens tragedie?",
      options: ["At en felles ressurs overutnyttes fordi hver bruker bærer bare en del av kostnaden", "At en felles ressurs blir underlevert fordi ingen vil betale for å bygge den ut", "At en ressurs blir liggende ubrukt fordi ingen har rett til å ta den i bruk", "At en ressurs blir fordelt ujevnt fordi de sterkeste brukerne tar mest"],
      explanation: "Hver bruker får hele gevinsten av sin egen bruk, mens kostnaden ved overbelastningen deles med alle — derfor brukes ressursen for mye. At noe blir underlevert, gjelder kollektive goder, som har den motsatte formen for problem.",
    },
    {
      question: "Hva skiller en allmenning fra et kollektivt gode?",
      options: ["Allmenningen er rivaliserende, mens det kollektive godet ikke er det", "Allmenningen er ekskluderbar, mens det kollektive godet ikke er det", "Allmenningen forvaltes av staten, mens det kollektive godet er privat", "Allmenningen er lokal, mens kollektive goder alltid er globale"],
      explanation: "Skillet ligger i rivaliseringen: min bruk av en allmenning går ut over din, men ingen kan stenges ute fra noen av dem. Derfor blir allmenninger overutnyttet og kollektive goder underlevert. Eierskap og geografisk skala definerer ikke begrepene.",
    },
    {
      question: "Hvorfor er et stabilt klima et kollektivt gode?",
      options: ["Ingen stat kan stenges ute, og én stats nytte reduserer ikke andres", "Fordi alle stater har forpliktet seg til å bidra gjennom avtaler", "Fordi det er staten som må finansiere klimatiltakene i praksis", "Fordi virkningene av utslipp kommer langt fram i tid for alle"],
      explanation: "Godet har begge kjennetegn i global skala. Forsinkede virkninger og spørsmålet om hvem som finansierer, er tilleggstrekk ved problemet, og avtaler er nettopp forsøk på å håndtere det — ikke det som gjør klimaet til et kollektivt gode.",
    },
    {
      question: "Hvorfor er klimasamarbeid vanskelig selv når statene er enige om målet?",
      options: ["Fordi gevinsten ved egne kutt deles med alle, mens kostnaden bæres alene", "Fordi statene i praksis er uenige om hvor store utslippene faktisk er", "Fordi ingen stater ønsker å bruke penger på tiltak som virker langsomt", "Fordi klimatiltak alltid svekker et lands konkurranseevne varig"],
      explanation: "Dette er gratispassasjerproblemet i global skala, og det oppstår selv når alle er enige og ærlige. To forhold forsterker det: ingen overordnet myndighet kan pålegge bidrag mellom stater, og kostnaden kommer nå mens gevinsten kommer senere.",
    },
    {
      question: "Hva er et kollektivt handlingsproblem?",
      options: ["At gruppen samlet ville tjent på å handle, men hver enkelt vil la være", "At aktørene er uenige om hva som er det beste utfallet for gruppen", "At det er for mange aktører til at forhandlinger kan gjennomføres", "At noen aktører mangler ressursene som trengs for å delta"],
      explanation: "Problemet er strukturelt, ikke et uttrykk for uenighet: partene kan være helt enige om målet og likevel ikke komme i mål, fordi hver enkelt tjener på at de andre gjør jobben. Antall parter og ressurser kan forsterke det, men er ikke kjernen.",
    },
    {
      question: "Hva er den viktigste forskjellen på en avgift og et kvotesystem?",
      options: ["Avgiften fastsetter prisen, mens kvotesystemet fastsetter mengden", "Avgiften rammer produsentene, mens kvotesystemet rammer forbrukerne", "Avgiften er et markedsvirkemiddel, mens kvotesystemet er en regulering", "Avgiften gir inntekter til staten, mens kvotesystemet aldri gjør det"],
      explanation: "Skillet gjelder hvilken størrelse myndighetene bestemmer og hvilken markedet avgjør. Begge er markedsvirkemidler, begge treffer den som slipper ut, og begge kan gi inntekter — kvoter når de selges i stedet for å deles ut.",
    },
    {
      question: "Hvorfor gir omsettelige kvoter et gitt kutt til lavest samlet kostnad?",
      options: ["Fordi kuttene flytter seg til dem som kan gjennomføre dem billigst", "Fordi kvotene i seg selv er billigere å administrere enn en avgift", "Fordi det samlede utslippsmålet settes lavere i et handelssystem", "Fordi bedriftene slipper å gjennomføre rensetiltak i det hele tatt"],
      explanation: "Hver aktør sammenligner sin egen rensekostnad med kvoteprisen: er kuttet billigere, kutter hun og selger kvoten; er det dyrere, kjøper hun. Rensekostnaden blir dermed lik hos alle på marginen. Målet er det samme i begge systemer, og tiltakene forsvinner ikke — de flytter seg.",
    },
    {
      question: "Hva skjer hvis kvotene ikke kan omsettes?",
      options: ["Målet nås fortsatt, men til en høyere samlet kostnad enn ellers", "Målet nås ikke, siden bedriftene mangler motiv til å kutte utslipp", "Kostnaden blir den samme, men fordelingen mellom bedrifter endres", "Kostnaden blir lavere, siden ingen må kjøpe kvoter av hverandre"],
      explanation: "Hver aktør er låst til sin egen tildeling: den som kunne kuttet billig, stopper for tidlig, og den som har dyre kutt, må gjennomføre dem likevel. Rensekostnadene forblir ulike, og det samme målet nås dyrere. Det er omsetteligheten som gir besparelsen.",
    },
    {
      question: "Hva forteller kvoteprisen?",
      options: ["Hva det koster å kutte det siste tonnet som må kuttes for å nå målet", "Hvor mye myndighetene har bestemt at en utslippstillatelse skal koste", "Hvor stor skade ett tonn utslipp påfører samfunnet i gjennomsnitt", "Hvor mye bedriftene til sammen har betalt for kvotene i perioden"],
      explanation: "Prisen oppstår av handelen og er markedets anslag på den marginale rensekostnaden ved målet. Myndighetene fastsetter mengden, ikke prisen — det er avgiften som er en fastsatt pris — og skadekostnaden er en annen størrelse.",
    },
    {
      question: "Hva er marginal rensekostnad?",
      options: ["Hva det koster å kutte ett tonn utslipp til hos en gitt aktør", "Hva ett tonn utslipp koster samfunnet i form av skade", "Hva bedriften betaler i avgift for det siste tonnet den slipper ut", "Hva det koster å rydde opp etter forurensning som alt har skjedd"],
      explanation: "Rensekostnaden er hva det koster å unngå utslippet, og den er ulik fra aktør til aktør — det er nettopp den ulikheten hele virkemiddeldrøftingen hviler på. Skaden utslippet påfører andre, er marginal ekstern kostnad, altså noe annet.",
    },
    {
      question: "Når er et virkemiddel kostnadseffektivt?",
      options: ["Når et gitt mål nås til lavest mulig samlet kostnad", "Når kostnaden for hver enkelt bedrift blir så lav som mulig", "Når myndighetenes utgifter til ordningen holdes nede", "Når utslippene kuttes så mye som teknisk mulig innenfor budsjettet"],
      explanation: "Kriteriet gjelder den samlede kostnaden ved et gitt mål, og betingelsen er at den marginale rensekostnaden er lik for alle aktører. Hvor mye som bør kuttes, er et annet spørsmål, og administrasjonsutgifter er ikke det kriteriet måler.",
    },
    {
      question: "Hvilke tre kriterier vurderes miljøvirkemidler etter i denne boka?",
      options: ["Måloppnåelse, kostnadseffektivitet og at forurenser betaler", "Måloppnåelse, rettferdighet og hensynet til norsk konkurranseevne", "Kostnadseffektivitet, forutsigbarhet og enkel administrasjon", "Utslippskutt, teknologiutvikling og aksept i befolkningen"],
      explanation: "De tre kriteriene er navngitt gjennom Grønn skattekommisjon i sensorveiledningene for H2021 og H2022. Konkurranseevne, administrasjon og aksept er reelle politiske hensyn, men de er ikke de tre kriteriene sjangeren ber om.",
    },
    {
      question: "Hva er den viktigste innvendingen mot subsidier som klimavirkemiddel?",
      options: ["De bryter med at forurenser betaler, siden fellesskapet tar regningen", "De virker ikke i det hele tatt, siden bedriftene bare tar imot pengene", "De er dyrere å administrere enn både avgifter og kvoteordninger", "De gjør det umulig for myndighetene å nå et bestemt utslippsmål"],
      explanation: "Kostnaden bæres av fellesskapet i stedet for av den som forurenser, og subsidien kan i tillegg gjøre den støttede virksomheten mer lønnsom slik at omfanget øker. Subsidier kan gi kutt, og administrasjonskostnaden er ikke hovedinnvendingen.",
    },
    {
      question: "Hva sier Coase-teoremet?",
      options: ["Partene kan forhandle fram et effektivt utfall når rettighetene er klare", "Markedet løser problemet med forurensning på egen hånd over tid", "Den som forurenser, skal alltid betale for skaden hun påfører andre", "Staten bør sette en avgift lik den marginale skaden ved utslippet"],
      explanation: "Resultatet er betinget: det krever veldefinert eiendomsrett og lave transaksjonskostnader, og hele poenget er at forutsetningene ofte svikter. At forurenser skal betale, er et prinsipp, og en avgift lik skaden er Pigous løsning.",
    },
    {
      question: "Hvorfor svikter Coase-forutsetningene i klimaspørsmålet?",
      options: ["Partene er svært mange, og ingen har eiendomsrett til atmosfæren", "Partene er uenige om hvor store skadene av utslipp faktisk er", "Statene mangler myndighet til å inngå bindende avtaler med hverandre", "Skadene rammer bare noen få land, som derfor ikke blir hørt"],
      explanation: "Med nesten to hundre stater og milliarder av mennesker er transaksjonskostnadene svært høye, og atmosfæren har ingen eier. Statene kan i prinsippet inngå avtaler — det er nettopp derfor problemet krever mellomstatlige ordninger.",
    },
    {
      question: "Hva er karbonlekkasje?",
      options: ["At utslippsintensiv produksjon flytter til land med svakere krav", "At utslipp fra ett land spres til nabolandene gjennom luft og vann", "At kvoter blir liggende ubrukte og dermed uten virkning på utslipp", "At bedrifter rapporterer lavere utslipp enn de faktisk har"],
      explanation: "Lekkasje betyr at samlet utslipp faller mindre enn de nasjonale tallene tilsier, fordi produksjonen flytter. Det viser ikke at tiltak er nyttesløse, men at virkningen avhenger av hvor mange som deltar — og omfanget er omstridt.",
    },
  ],
  'inter1000-3-4': [
    {
      question: "Hva betyr det at et land har absolutt fortrinn i en vare?",
      options: ["Landet produserer mer av varen med de samme ressursene enn et annet land", "Landet gir opp mindre av den andre varen for å produsere denne varen", "Landet eksporterer mer av varen enn det importerer i løpet av et år", "Landet er det eneste som har naturgitte forutsetninger for å lage varen"],
      explanation: "Absolutt fortrinn sammenligner produktivitet mellom land i samme vare. Å gi opp minst av den andre varen er komparativt fortrinn, som er noe helt annet, og eksportoverskudd er verken det ene eller det andre.",
    },
    {
      question: "Hva betyr det at et land har komparativt fortrinn i en vare?",
      options: ["Landet gir opp minst av den andre varen for å produsere denne", "Landet produserer varen billigst målt i penger og lønnskostnader", "Landet er mest produktivt i produksjonen av nettopp denne varen", "Landet har spesialisert seg på varen over lang tid og kan den best"],
      explanation: "Komparativt fortrinn defineres via alternativkostnad: hva som må gis opp av den andre varen. Å produsere billigst eller å være mest produktiv er absolutt fortrinn, og forvekslingen mellom de to er den vanligste feilen i handelsstoffet.",
    },
    {
      question: "Hvordan regner du alternativkostnaden ved én enhet av en vare?",
      options: ["Ved å se hvor mye av den andre varen de samme ressursene kunne laget", "Ved å legge sammen alle kostnadene ved å produsere den ene enheten", "Ved å trekke produksjonskostnaden fra prisen varen selges for", "Ved å sammenligne kostnadsnivået med det i andre land i samme bransje"],
      explanation: "Alternativkostnaden måles i den andre varen, ikke i kroner — og det er nettopp derfor sammenligningen fungerer mellom land med ulikt kostnadsnivå og ulik valuta. Produksjonskostnader og fortjenestemarginer er andre størrelser.",
    },
    {
      question: "Ett arbeidsår gir enten 6 tonn korn eller 3 enheter tekstiler. Hva koster ett tonn korn?",
      options: ["En halv enhet tekstiler, siden 3 delt på 6 er en halv", "To enheter tekstiler, siden 6 delt på 3 er to", "Tre enheter tekstiler, siden det er det arbeidsåret gir", "Seks enheter tekstiler, siden det er kornproduksjonen"],
      explanation: "Alternativkostnaden ved korn måles i tekstiler: del tekstilproduksjonen på kornproduksjonen. To enheter tekstiler er alternativkostnaden den andre veien, altså hva én enhet tekstiler koster målt i korn.",
    },
    {
      question: "Kan et land ha komparativt fortrinn i begge varer?",
      options: ["Nei, fordi de to alternativkostnadene er hverandres motstykker", "Ja, dersom landet er mest produktivt i begge varene", "Ja, dersom landet har svært mye arbeidskraft tilgjengelig", "Nei, fordi handel forutsetter at de to landene er omtrent like produktive"],
      explanation: "Gir landet opp lite av vare 2 for å lage vare 1, må det gi opp mye av vare 1 for å lage vare 2. Å ha lavest alternativkostnad i begge er derfor logisk umulig — og nettopp derfor har hvert land komparativt fortrinn i noe.",
    },
    {
      question: "Hva er selvforsyning i handelsmodellen?",
      options: ["Situasjonen der landet dekker eget forbruk uten å handle med andre", "Situasjonen der landet produserer alt det trenger av mat selv", "Situasjonen der landet eksporterer like mye som det importerer", "Situasjonen der landet bare handler med de landene det har avtale med"],
      explanation: "Selvforsyning er den analytiske referansetilstanden gevinsten måles mot. Den gjelder alle varer, ikke bare mat, og den innebærer ingen vurdering av om selvforsyning er ønskelig.",
    },
    {
      question: "Hva skjer med den samlede produksjonen når landene spesialiserer seg?",
      options: ["Den øker, uten at noen jobber mer eller får nye ressurser", "Den er uendret, men fordeles annerledes mellom de to landene", "Den øker bare i det landet som har absolutt fortrinn i begge varer", "Den faller i det ene landet og stiger tilsvarende i det andre"],
      explanation: "Hver enhet produseres nå der den koster minst i oppgitt alternativ, og det gir mer av begge varer til sammen. Gevinsten oppstår altså i produksjonen, før byttet i det hele tatt har funnet sted.",
    },
    {
      question: "Hva avgjør om begge land tjener på handelen?",
      options: ["At bytteforholdet ligger mellom de to landenes alternativkostnader", "At begge land eksporterer omtrent like store verdier som de importerer", "At begge land har omtrent like høy produktivitet i begge varene", "At handelen er regulert av en avtale mellom de to landene"],
      explanation: "Hvert land handler bare hvis det får varen billigere enn det kan lage den selv. Ligger bytteforholdet utenfor intervallet, produserer det ene landet heller selv. Balanse i handelen og avtaler er ikke betingelsen for gevinst.",
    },
    {
      question: "Hva avgjør bytteforholdet innenfor det mulige intervallet?",
      options: ["Hvordan gevinsten fordeles mellom de to landene", "Om det i det hele tatt finnes en gevinst ved handelen", "Hvilket land som har absolutt fortrinn i begge varer", "Hvor mye hvert land produserer av begge varer til sammen"],
      explanation: "At det finnes en gevinst, følger av at alternativkostnadene er forskjellige. Hvor i intervallet forholdet havner, avgjør bare hvordan gevinsten deles — og det er blant annet et spørsmål om markedsforhold og forhandlingsstyrke.",
    },
    {
      question: "Hva er handelsgevinsten?",
      options: ["Økningen i det landet kan forbruke, sammenlignet med selvforsyning", "Overskuddet på handelsbalansen når eksporten overstiger importen", "Fortjenesten eksportbedriftene sitter igjen med etter salget", "Tollinntektene staten får inn på varer som blir importert"],
      explanation: "Gevinsten er økt forbruksmulighet og oppstår i to trinn: spesialisering gir større samlet produksjon, og byttet fordeler den. Handelsoverskudd er noe annet og er verken et mål på gevinst eller på suksess i denne modellen.",
    },
    {
      question: "Hva er fordelingsvirkningene av handel innad i et land?",
      options: ["Noen næringer vokser og andre krymper, så noen vinner og andre taper", "Alle grupper vinner, men de rikeste vinner mest av handelsgevinsten", "Gevinsten fordeles jevnt, siden prisene faller for alle forbrukere", "Bare eksportbedriftene merker noe til at landet åpner for handel"],
      explanation: "Spesialisering betyr at ressurser flyttes mellom næringer, og de som arbeider i den krympende næringen, taper. Det er derfor en samlet gevinst for landet ikke betyr at alle vinner — og derfor handelspolitikk er politisk vanskelig.",
    },
    {
      question: "Hvorfor er motstand mot handelsåpning ofte sterkere organisert enn støtten?",
      options: ["Fordi tapet er konsentrert hos få, mens gevinsten er spredt tynt på mange", "Fordi de som taper på handelsåpning, alltid er flere enn de som vinner på den", "Fordi gevinsten ved handel først kommer mange tiår fram i tid", "Fordi forbrukerne sjelden merker noen prisendring i det hele tatt"],
      explanation: "De som merker tapet godt, har sterkt motiv til å organisere seg, mens hver enkelt forbruker merker gevinsten lite. Det er et poeng om insentiver, ikke om at taperne er i flertall eller at gevinsten uteblir.",
    },
    {
      question: "Hvordan kan gjensidig avhengighet gjennom handel leses på to måter?",
      options: ["Som en brems på konflikt, og som en sårbarhet som kan utnyttes", "Som en fordel for det rike landet, og som en ulempe for det fattige", "Som en økonomisk gevinst, og som et brudd på nasjonal suverenitet", "Som en kortsiktig gevinst, og som et langsiktig tap for begge parter"],
      explanation: "Den ene lesningen er at land som tjener på hverandre, har mye å tape på brudd; den andre er at avhengighet kan brukes som pressmiddel av den som har minst å tape. Begge er faglig respektable og svarer til ulike teoretiske innfallsvinkler.",
    },
    {
      question: "Hva er proteksjonisme?",
      options: ["Politikk som skjermer egen produksjon mot konkurranse utenfra", "Politikk som beskytter forbrukerne mot varer av dårlig kvalitet", "Enhver form for statlig innblanding i næringslivets virksomhet", "Politikk som beskytter naturressurser mot overutnyttelse"],
      explanation: "Det som kjennetegner proteksjonisme, er at tiltaket forskjellsbehandler utenlandsk produksjon — gjennom toll, kvoter, subsidier til egne eller regelverk som i praksis rammer utenfra. Ikke all statlig innblanding er proteksjonisme.",
    },
    {
      question: "Hva er den viktigste forskjellen på toll og en importkvote?",
      options: ["Tollen setter prisen, mens kvoten setter mengden som kan importeres", "Tollen rammer forbrukerne, mens kvoten rammer de utenlandske selgerne", "Tollen er tillatt etter handelsreglene, mens kvoten aldri er det", "Tollen virker på kort sikt, mens kvoten først virker på lang sikt"],
      explanation: "Skillet er det samme som mellom avgift og kvote i klimapolitikken: hvilken størrelse myndighetene fastsetter. En praktisk forskjell følger av det — staten får inntekten ved toll, mens den som tildeles importretten, får den ved kvote.",
    },
    {
      question: "Hva er ikke-tollmessige handelshindre?",
      options: ["Krav og regler som i praksis gjør det vanskelig å konkurrere utenfra", "Avgifter som legges på importerte varer ved passering av grensen", "Forbud mot å importere bestemte varer fra bestemte land", "Frivillige avtaler mellom bedrifter om å begrense importen seg imellom"],
      explanation: "Tekniske standarder, godkjenningsordninger og innkjøpsregler kan virke som handelshindre uten å være avgifter. Merk at et helse- eller miljøkrav ikke automatisk er et handelshinder — det avgjørende er om det i praksis forskjellsbehandler.",
    },
    {
      question: "Hva kjennetegner merkantilismen som syn på handel?",
      options: ["At handel er en konkurranse om en fast mengde rikdom", "At handel gir gevinst, men at gevinsten fordeles skjevt", "At handel bør være fri, men at staten bør sikre forsyningen", "At handel skader miljøet og derfor bør begrenses av staten"],
      explanation: "Merkantilismen bygger på at den enes gevinst er den andres tap, og at eksportoverskudd derfor er målet. Den økonomiske innvendingen er nettopp at handel skaper en samlet gevinst og altså ikke er et nullsumspill.",
    },
    {
      question: "Hva er kjernen i Lists økonomiske nasjonalisme?",
      options: ["At rikere og sterkere ikke er det samme, og at staten må forme utviklingen", "At handel er et nullsumspill der den enes gevinst er den andres tap", "At frihandel alltid gagner det landet som allerede er mest utviklet", "At et land bør være selvforsynt med alle varer som har strategisk betydning"],
      explanation: "List bestrider ikke at handel gir gevinst — han svarer at et land som følger dagens fortrinn, kan låse seg fast i en posisjon som er ugunstig senere. Nullsumtenkningen er merkantilismens, ikke Lists.",
    },
    {
      question: "Hva går infant industry-argumentet ut på?",
      options: ["At en ny næring kan trenge midlertidig vern for å bli konkurransedyktig", "At en næring i tilbakegang bør vernes til de ansatte har fått ny jobb", "At land med lav inntekt bør skjermes fra utenlandsk konkurranse inntil videre", "At nye næringer bør subsidieres i stedet for å beskyttes med toll"],
      explanation: "Argumentet gjelder nye næringer under oppbygging og hviler på tre betingelser: at næringen faktisk vil bli konkurransedyktig, at gevinsten senere overstiger kostnaden nå, og at vernet kan avvikles. Å bruke det på næringer i tilbakegang er en klassisk feilbruk.",
    },
    {
      question: "Hva er den sterkeste innvendingen mot infant industry-argumentet?",
      options: ["At beskyttelse som skulle vært midlertidig, har en tendens til å bli varig", "At nye næringer aldri klarer å bli konkurransedyktige på verdensmarkedet", "At beskyttelse alltid fører til at andre land svarer med egne tiltak", "At argumentet bygger på absolutt fortrinn i stedet for komparativt"],
      explanation: "Den beskyttede næringen får sterk og konsentrert interesse av at ordningen fortsetter, mens kostnaden bæres tynt fordelt av mange forbrukere. Påstanden om at nye næringer aldri lykkes, er for sterk, og argumentet handler om utvikling over tid.",
    },
    {
      question: "Hva innebærer bestevilkårsprinsippet?",
      options: ["At en fordel gitt til ett medlemsland skal gis til alle de andre", "At importerte varer skal behandles like godt som innenlandske varer", "At medlemslandene skal gi de fattigste landene de beste betingelsene", "At tollsatsene skal senkes like mye av alle medlemslandene samtidig"],
      explanation: "Prinsippet skal hindre et nett av bilaterale særordninger der de sterkeste får de beste betingelsene. At importerte varer skal behandles som innenlandske, er nasjonal behandling — det andre underprinsippet under ikke-diskriminering.",
    },
    {
      question: "Hva innebærer prinsippet om nasjonal behandling?",
      options: ["At en importert vare skal behandles like godt som en innenlandsk vare", "At hvert land selv bestemmer hvilke varer det vil slippe inn i markedet", "At en fordel gitt til ett medlemsland skal gis til alle de andre", "At utenlandske bedrifter må følge de samme kravene som ved eksport"],
      explanation: "Prinsippet gjelder etter at varen har passert grensen, og det er det som gjør regler og avgifter innenlands til et handelspolitisk spørsmål. Å gi alle medlemmer samme fordel er bestevilkårsprinsippet.",
    },
    {
      question: "Hvilket kollektivt handlingsproblem er handelsregimet et svar på?",
      options: ["Alle taper på en handelskrig, men hver enkelt kan tjene på å bryte først", "Alle vil ha frihandel, men ingen har råd til å åpne markedet sitt", "Alle land ønsker de samme varene, men det finnes ikke nok av dem", "Alle land vil eksportere mest mulig, men ingen av dem vil importere noe"],
      explanation: "Gjensidig binding gjør det dyrere for hver enkelt stat å ty til handelshindre når presset hjemmefra er sterkt. Det er samme struktur som gratispassasjerproblemet: det som lønner seg for hver enkelt, er dårlig for alle.",
    },
    {
      question: "Hva er kjernen i den strukturelle kritikken av frihandelsregimet?",
      options: ["At utgangspunktene er ulike, og at reglene er utformet av de sterkeste", "At handel mellom land alltid gir tap for begge parter på lang sikt", "At regnestykket til Ricardo inneholder en regnefeil som er oversett", "At handel bør erstattes av bistand fra de rike til de fattige landene"],
      explanation: "Kritikken retter seg mot rammen, ikke mot regnestykket: ulike utgangspunkt, fare for fastlåsing i lite bearbeidede varer, og regler utformet av dem som tjente mest på dem. Den skal gjengis rettferdig, som det liberale argumentet.",
    },
    {
      question: "Hvilken observasjon brukes ofte som kritikk av handelsregimets praksis?",
      options: ["At prinsippene er fraveket på områder der fattige land har fortrinn", "At regimet aldri har klart å redusere tollsatsene mellom medlemmene", "At tvisteløsning mellom stater ikke er mulig innenfor regimet", "At regimet krever at alle medlemsland har samme økonomiske system"],
      explanation: "Landbruk og tekstiler har lenge vært skjermet i de rikeste markedene — områder der mange lavinntektsland ville hatt komparativt fortrinn. Observasjonen gjelder fordelingen av regimets gevinster, ikke at regimet er uten virkning.",
    },
    {
      question: "Hvorfor kan et land som er dårligere til alt, likevel ha noe å tilby i handel?",
      options: ["Fordi det har lavest alternativkostnad i minst én av varene", "Fordi det kan produsere med lavere lønninger enn andre land", "Fordi det kan spesialisere seg i varer ingen andre vil produsere", "Fordi handelen uansett må være i balanse mellom to land"],
      explanation: "Det avgjørende er hva landet gir opp, ikke hvor produktivt det er. Siden alternativkostnadene er hverandres motstykker, har hvert land lavest kostnad i noe. Lavt lønnsnivå er en annen forklaring og ikke det Ricardos resultat bygger på.",
    },
  ],
  'inter1000-4-1': [
    {
      question: "Hvilken bestemmelse i FN-pakten inneholder maktforbudet?",
      options: ["Artikkel 2(4)", "Artikkel 2(7)", "Artikkel 51", "Artikkel 39"],
      explanation: "Maktforbudet står i artikkel 2(4) og rammer trussel om og bruk av makt mot en annen stat. Artikkel 2(7) er intervensjonsforbudet, altså at FN ikke skal gripe inn i en stats indre anliggender; artikkel 51 er selvforsvarsretten, og artikkel 39 er Sikkerhetsrådets konstatering av en trussel mot freden.",
    },
    {
      question: "Hva regulerer FN-paktens artikkel 2(7)?",
      options: ["At FN ikke skal gripe inn i det som i det vesentlige ligger under en stats egen jurisdiksjon", "At stater ikke skal bruke eller true med militær makt mot en annen stats territorielle integritet", "At Sikkerhetsrådet kan konstatere at det foreligger en trussel mot freden", "At en angrepet stat kan forsvare seg inntil Sikkerhetsrådet har handlet"],
      explanation: "Artikkel 2(7) er intervensjonsforbudet og retter seg mot organisasjonen, ikke mot statene. Bestemmelsen gjør unntak for tvangstiltak etter kapittel VII. Maktforbudet, som gjelder statenes bruk av makt mot hverandre, står derimot i artikkel 2(4) — de to leddene forveksles ofte fordi de står i samme artikkel.",
    },
    {
      question: "Hva forbyr maktforbudet ut over selve maktbruken?",
      options: ["Også trusselen om maktbruk mot en annen stat", "Også enhver form for økonomisk press mot en annen stat", "Også kritikk av en annen stats indre styresett i FN-organer", "Også at en stat inngår forsvarsallianser rettet mot en nabo"],
      explanation: "Bestemmelsen rammer trussel om og bruk av makt. Grunnen er at en stat som handler under trussel om angrep, ikke bestemmer fritt. Økonomisk press og politisk kritikk faller derimot utenfor, og forsvarsallianser er tvert imot bygd på selvforsvarsretten i artikkel 51.",
    },
    {
      question: "Hva menes med «makt» i maktforbudets forstand?",
      options: ["I hovedsak væpnet makt, altså militære midler", "Enhver form for tvang, medregnet sanksjoner og handelsrestriksjoner", "All påvirkning som svekker en annen stats økonomiske stilling", "Bare bruk av makt som fører til tap av territorium"],
      explanation: "Bestemmelsen retter seg i hovedsak mot væpnet makt. Sanksjoner og handelsrestriksjoner kan ramme hardt og være omstridte på annet grunnlag, men de er ikke makt i denne forstanden. Og forbudet gjelder uavhengig av om territorium faktisk går tapt.",
    },
    {
      question: "Hva kjennetegner en stat i folkerettslig forstand?",
      options: ["Territorium, befolkning, styresmakt med kontroll og evne til å inngå forbindelser", "Et folk med felles språk, historie og kultur innenfor et avgrenset område", "Medlemskap i FN og anerkjennelse fra minst ett av Sikkerhetsrådets faste medlemmer", "En regjering som er valgt av befolkningen og kontrollerer et territorium"],
      explanation: "De fire kjennetegnene er territorium, befolkning, styresmakt som faktisk utøver kontroll, og evne til å inngå forbindelser med andre stater. Et folk er ikke det samme som en stat, og verken FN-medlemskap eller en bestemt styreform er vilkår.",
    },
    {
      question: "Hvorfor er statsbegrepet viktig for reglene om maktbruk?",
      options: ["Fordi reglene er utformet for forholdet mellom stater og passer dårligere på andre aktører", "Fordi bare stater kan bli medlemmer av FNs sikkerhetsråd og delta i avstemninger", "Fordi bare stater kan bringe en tvist inn for internasjonale domstoler i det hele tatt", "Fordi statsbegrepet avgjør hvilke stater som har rett til å utøve kollektivt selvforsvar"],
      explanation: "Maktforbudet og selvforsvarsretten er skrevet for mellomstatlige forhold. Når den ene parten er en væpnet gruppe uten statlig tilknytning, oppstår derfor spørsmål pakten ikke besvarer direkte. De øvrige forholdene er riktige nok i seg selv, men de forklarer ikke hvorfor regelsettet passer dårlig.",
    },
    {
      question: "Hva er det utløsende vilkåret for retten til selvforsvar etter artikkel 51?",
      options: ["At et væpnet angrep har funnet sted", "At Sikkerhetsrådet har konstatert en trussel mot freden", "At staten har erklært seg truet av en annen stats opprustning", "At en annen stat har brutt en folkerettslig forpliktelse"],
      explanation: "Retten utløses av et væpnet angrep, og terskelen for det ligger høyere enn for maktbruk generelt. Et brudd på en forpliktelse er ikke i seg selv et angrep, og en erklæring om at man føler seg truet, endrer ingenting. Rådets konstatering hører til det andre unntaket, ikke til selvforsvaret.",
    },
    {
      question: "Hva ligger i at selvforsvarsretten er «iboende»?",
      options: ["At den anses å tilhøre staten i kraft av å være stat, og bekreftes snarere enn skapes av pakten", "At den kan utøves uten hensyn til vilkårene om nødvendighet og proporsjonalitet så lenge angrepet varer", "At den gjelder like fullt for stater som ikke er medlemmer av De forente nasjoner", "At den kan utøves så lenge staten selv mener at en trussel fortsatt består"],
      explanation: "Ordet viser til at retten ikke er skapt av pakten, men bekreftet i den. Det betyr ikke at den er ubegrenset: vilkårene gjelder fullt ut, og retten er tidsavgrenset av Sikkerhetsrådets handling.",
    },
    {
      question: "Hva innebærer vilkåret om nødvendighet ved selvforsvar?",
      options: ["At maktbruken må være påkrevd fordi ingen rimelige alternativer ville virket", "At maktbruken ikke må gå lenger enn det som trengs for å stanse angrepet", "At maktbruken må være godkjent av Sikkerhetsrådet før den settes i verk", "At maktbruken må rettes mot de samme målene som angrepet rammet"],
      explanation: "Nødvendighet handler om hvorvidt makt kan brukes i det hele tatt: fantes det et rimelig alternativ som ville virket? Spørsmålet om hvor mye makt som kan brukes, hører til proporsjonalitetsvilkåret. Selvforsvar krever ingen forhåndsgodkjenning, og gjengjeldelse i samme mynt er ikke kriteriet.",
    },
    {
      question: "Hva innebærer vilkåret om proporsjonalitet ved selvforsvar?",
      options: ["At maktbruken ikke må gå lenger enn det som trengs for å stanse angrepet", "At maktbruken må være påkrevd fordi ingen andre midler ville avverget angrepet", "At maktbruken må stå i forhold til statens egen militære kapasitet", "At maktbruken må avsluttes så snart angriperen har erklært våpenhvile"],
      explanation: "Proporsjonalitet gjelder omfanget, målt mot hva som trengs for å avverge eller stanse angrepet. Spørsmålet om makt overhodet kan brukes, hører til nødvendighetsvilkåret. Egen kapasitet er uten betydning for vurderingen.",
    },
    {
      question: "Hva er forskjellen på kollektivt selvforsvar og kollektiv sikkerhet?",
      options: ["Det ene er at andre hjelper den angrepne, det andre at fellesskapet reagerer mot den som bryter freden", "Det ene krever vedtak i Generalforsamlingen, det andre et vedtak i Sikkerhetsrådet etter paktens kapittel VII", "Det ene gjelder bare innenfor forsvarsallianser, det andre bare mellom naboland", "Det ene er en politisk ordning uten rettsvirkning, det andre en rettslig ordning"],
      explanation: "Kollektivt selvforsvar hviler på den angrepnes egen rett etter artikkel 51 og er grunnlaget forsvarsallianser bygger på. Kollektiv sikkerhet er fellesskapets reaksjon gjennom Sikkerhetsrådet mot hvem som helst som bryter freden. Begge er rettslige ordninger, og ingen av dem forutsetter vedtak i Generalforsamlingen.",
    },
    {
      question: "Hvor lenge gjelder selvforsvarsretten etter ordlyden i artikkel 51?",
      options: ["Inntil Sikkerhetsrådet har truffet de tiltak som er nødvendige for fred og sikkerhet", "Inntil angriperen har trukket seg tilbake fra det området som ble besatt", "Inntil Generalforsamlingen har behandlet saken og gitt en anbefaling", "Inntil staten selv mener at den umiddelbare trusselen er avverget"],
      explanation: "Retten er formulert som en nødløsning i påvente av at fellesskapet handler, og den varer inntil rådet har truffet nødvendige tiltak. I tillegg skal tiltak truffet i selvforsvar straks meldes til rådet. Verken tilbaketrekning, statens egen vurdering eller Generalforsamlingens behandling er avgjørende for tidsgrensen.",
    },
    {
      question: "Hva skal en stat gjøre når den har truffet tiltak i selvforsvar?",
      options: ["Straks melde tiltakene til Sikkerhetsrådet", "Innhente etterfølgende godkjenning fra Generalforsamlingen", "Legge saken fram for Den internasjonale domstolen innen rimelig tid", "Varsle de øvrige partene i en eventuell forsvarsallianse"],
      explanation: "Rapporteringsplikten til Sikkerhetsrådet følger av artikkel 51 og gjør ordningen etterprøvbar — den som ikke melder fra, svekker sin egen begrunnelse. Verken domstolen eller Generalforsamlingen har noen slik rolle, og allianseinterne varslingsrutiner er noe annet enn en folkerettslig plikt.",
    },
    {
      question: "Hva er stridsspørsmålet i debatten om foregripende selvforsvar?",
      options: ["Om makt kan brukes før angrepet har funnet sted, når det er nært forestående", "Om selvforsvar kan utøves sammen med andre stater eller bare alene", "Om selvforsvar krever autorisasjon fra Sikkerhetsrådet i særlig alvorlige tilfeller", "Om selvforsvar kan begrunnes med at befolkningen i nabolandet trenger beskyttelse"],
      explanation: "Ordlyden knytter retten til at et væpnet angrep finner sted, mens en videre lesning viser til at retten er iboende og at ingen kan kreves å vente passivt. Kollektivt selvforsvar er derimot uttrykkelig tillatt, selvforsvar krever ingen autorisasjon, og beskyttelse av andres befolkning hører til spørsmålet om humanitær intervensjon.",
    },
    {
      question: "Hvorfor er maktbruk mot ikke-statlige aktører et vanskelig rettslig spørsmål?",
      options: ["Fordi reglene er skrevet for stater, mens maktbruken skjer på en tredjestats territorium", "Fordi ikke-statlige grupper ikke kan holdes ansvarlige for noen folkerettsbrudd", "Fordi Sikkerhetsrådet ikke har myndighet til å behandle konflikter uten to statlige parter", "Fordi vilkårene om nødvendighet og proporsjonalitet ikke gjelder overfor slike grupper"],
      explanation: "Kjernen er at maktbruken berører en tredjestats suverenitet selv om den retter seg mot gruppen. Vilkårene gjelder fullt ut uansett, rådet kan behandle situasjoner uavhengig av partenes karakter, og spørsmålet om gruppens eget ansvar er et annet spørsmål.",
    },
    {
      question: "Hva er Sikkerhetsrådets særstilling blant internasjonale organer?",
      options: ["Det kan treffe vedtak som binder medlemsstatene, også dem som stemte imot", "Det kan avgjøre rettstvister mellom stater med bindende virkning for begge parter", "Det kan endre bestemmelsene i FN-pakten uten at statene må ratifisere endringen", "Det kan utelukke medlemsstater som ikke følger organisasjonens anbefalinger"],
      explanation: "Særstillingen ligger i at rådets beslutninger binder medlemmene etter artikkel 25, også dem som var imot. Å avgjøre rettstvister er domstolens oppgave, paktendringer krever egne prosedyrer, og utelukkelse er ikke det som gir rådet dets myndighet.",
    },
    {
      question: "Hvilken bestemmelse er inngangsdøren til Sikkerhetsrådets tvangsmyndighet?",
      options: ["Artikkel 39, der rådet konstaterer en trussel mot freden eller en angrepshandling", "Artikkel 42, som gir hjemmel for militære tvangstiltak mot en stat", "Artikkel 25, som gjør rådets beslutninger bindende for alle medlemmene", "Artikkel 27, som fastsetter stemmereglene for vedtak i rådet"],
      explanation: "Uten en konstatering etter artikkel 39 kommer rådet ikke videre i kapittel VII. De andre bestemmelsene kommer senere i systemet: først tiltak uten våpenmakt, så militære tiltak, med bindende virkning og stemmeregler som ramme rundt.",
    },
    {
      question: "Hva hjemler FN-paktens artikkel 41?",
      options: ["Tiltak uten væpnet makt, som avbrudd i økonomiske og diplomatiske forbindelser", "Militære operasjoner med luft-, sjø- eller landstridskrefter mot en stat", "Retten til individuelt og kollektivt selvforsvar ved et væpnet angrep", "Rådets myndighet til å konstatere at det foreligger en angrepshandling"],
      explanation: "Artikkel 41 er hjemmelen for FN-sanksjoner, altså tvangstiltak uten våpenmakt. Militære tiltak hører til artikkel 42 og forutsetter at tiltak uten våpenmakt ikke ville strekke til. Konstateringen skjer etter artikkel 39, og selvforsvaret følger av artikkel 51.",
    },
    {
      question: "Hva hjemler FN-paktens artikkel 42?",
      options: ["Militære tvangstiltak besluttet av Sikkerhetsrådet for å opprettholde fred og sikkerhet", "Tiltak uten væpnet makt, som avbrudd i samferdsel, handel og diplomatiske forbindelser mellom statene", "Rådets adgang til å anbefale partene å løse tvisten med fredelige midler", "Statenes plikt til å stille militære styrker til rådighet for organisasjonen"],
      explanation: "Artikkel 42 er det andre unntaket fra maktforbudet: militær tvangsmakt med rådets vedtak som grunnlag. Tiltak uten våpenmakt hører til artikkel 41, og bestemmelsen forutsetter at slike tiltak ikke ville strekke til eller ikke har gjort det.",
    },
    {
      question: "Hva følger av FN-paktens artikkel 25?",
      options: ["At medlemmene har sagt seg enige i å godta og gjennomføre Sikkerhetsrådets beslutninger", "At FN-pakten går foran alle andre traktater medlemsstatene har inngått seg imellom eller med andre", "At medlemmene plikter å løse sine tvister med fredelige midler", "At Generalforsamlingens resolusjoner binder de statene som stemmer for dem"],
      explanation: "Artikkel 25 er grunnen til at rådets vedtak er mer enn anbefalinger: statene har på forhånd samtykket til å følge dem. Generalforsamlingens vedtak i slike spørsmål er derimot som hovedregel anbefalinger, uansett hvem som stemte for.",
    },
    {
      question: "Hva kreves for et vedtak i Sikkerhetsrådet i andre saker enn prosedyrespørsmål?",
      options: ["Ni stemmer, og at ingen av de fem faste medlemmene stemmer imot", "Enstemmighet blant samtlige femten medlemmer av rådet", "To tredels flertall blant de ti valgte medlemmene av rådet", "Alminnelig flertall, med mulighet for overprøving i Generalforsamlingen"],
      explanation: "Regelen i artikkel 27 er ni stemmer pluss fravær av motstemme fra de faste medlemmene — det som kalles vetoretten. Enstemmighet kreves ikke, og ingen andre organer kan overprøve et vedtak i rådet.",
    },
    {
      question: "Hvorfor ble vetoretten bygd inn i FN-pakten?",
      options: ["Fordi tvangstiltak mot en stormakt uten dens samtykke uansett ikke lar seg gjennomføre", "Fordi Folkeforbundet hadde erfart at flertallsvedtak alltid ble respektert av medlemmene", "Fordi de fem faste medlemmene skulle ha ansvar for å finansiere organisasjonens virksomhet", "Fordi de fem faste medlemmene var de eneste som hadde ratifisert pakten fra begynnelsen"],
      explanation: "Ordningen var en forutsetning for at stormaktene ble med, og den bygger på erfaringen fra mellomkrigstiden: et vedtak mot en stormakt uten dens medvirkning gir ikke gjennomføring, bare et medlem mindre. Finansiering og ratifikasjonsrekkefølge har ingenting med saken å gjøre.",
    },
    {
      question: "Hva kjennetegner Generalforsamlingens vedtak i saker om fred og sikkerhet?",
      options: ["De er som hovedregel anbefalinger, ikke rettslig bindende beslutninger", "De binder alle medlemsstatene når to tredels flertall stemmer for", "De binder de statene som stemmer for, men ikke de øvrige medlemmene", "De må godkjennes av Sikkerhetsrådet før de får virkning for medlemmene"],
      explanation: "Forsamlingen er bred og representativ, men vedtakene er som hovedregel anbefalinger. De kan ha stor politisk vekt og betydning for rettsutviklingen, men de er ikke et rettsgrunnlag for maktbruk — den myndigheten ligger i rådet.",
    },
    {
      question: "Hva menes med kollektiv sikkerhet som idé?",
      options: ["At fellesskapet av stater reagerer samlet mot den som bryter freden", "At hver stat sikrer seg selv gjennom allianser og tilstrekkelig opprustning", "At de sterkeste statene garanterer for de svakestes territorielle integritet", "At stater i samme region avtaler felles forsvar mot en ytre motpart"],
      explanation: "Kollektiv sikkerhet vender seg innover, mot hvem som helst av deltakerne som bryter freden. En forsvarsallianse vender seg utover mot en ytre motpart og hviler på medlemmenes selvforsvarsrett. Egensikring gjennom opprustning er nettopp det ordningen skulle erstatte.",
    },
    {
      question: "Hva kjennetegner maktbruk autorisert av Sikkerhetsrådet?",
      options: ["At stater eller en koalisjon får fullmakt til å bruke makt for et bestemt formål", "At styrkene alltid opptrer under FNs egen kommando og på organisasjonens ansvar", "At maktbruken forutsetter at den handlende staten selv er blitt angrepet", "At vedtaket må bekreftes av Generalforsamlingen før operasjonen kan starte"],
      explanation: "Ved autorisert maktbruk stiller statene selv styrkene og fører operasjonen, med rådets vedtak som rettslig grunnlag. Det er noe annet enn en operasjon under FN-kommando. Og til forskjell fra selvforsvar kreves ingen angrepshandling mot den som bruker makt.",
    },
    {
      question: "Hva er den rettslige stillingen til en fredsoperasjon med vertsstatens samtykke?",
      options: ["Samtykket gjør at det ikke er tale om makt mot den staten, og hovedregelen treffer ikke situasjonen", "Operasjonen er et tredje unntak fra maktforbudet ved siden av selvforsvar og autorisasjon fra Sikkerhetsrådet", "Operasjonen krever alltid et eget vedtak etter kapittel VII for å være lovlig", "Operasjonen er lovlig bare dersom Generalforsamlingen har anbefalt den på forhånd"],
      explanation: "Når vertsstaten har bedt om eller godtatt tilstedeværelsen, er det ikke tale om makt **mot** den staten, og samtykket kan trekkes tilbake. Dette er det motsatte av humanitær intervensjon, der nettopp det manglende samtykket skaper problemet — og det er ikke et eget unntak.",
    },
    {
      question: "Hva er den rettslige statusen til ansvaret for å beskytte, kalt R2P?",
      options: ["Et politisk vedtatt prinsipp, ikke i seg selv et grunnlag for lovlig maktbruk", "En sedvaneregel som binder alle stater uavhengig av tilslutning til noe dokument", "En bestemmelse i FN-paktens kapittel VII ved siden av artikkel 42", "En traktat som binder de statene som har ratifisert den"],
      explanation: "Prinsippet sier at staten har ansvar for egen befolkning, og at ansvaret går over på det internasjonale samfunnet når staten svikter. Der militære midler forutsettes, viser det tilbake til Sikkerhetsrådet. Det skaper altså ikke et tredje unntak, og det er verken traktat, sedvane eller paktbestemmelse.",
    },
    {
      question: "Hvorfor er selvforsvar og autorisasjon fra Sikkerhetsrådet de to sikre unntakene?",
      options: ["Fordi de følger av paktens egen byttehandel: fellesskapets reaksjon, og nødrett i påvente av den", "Fordi de er de to tilfellene der maktbruken ikke berører en annen stats suverenitet", "Fordi de er de eneste unntakene som er nevnt uttrykkelig i FN-paktens fortale", "Fordi begge forutsetter at en navngitt stat allerede har brutt freden"],
      explanation: "Statene ga avkall på retten til å bruke makt mot at fellesskapet skulle gripe inn mot den som bryter freden, og selvforsvaret dekker hullet i tid før fellesskapet rekker fram. Begge unntakene innebærer maktbruk som berører en annen stats suverenitet, og autorisert maktbruk forutsetter ingen angrepshandling mot den som handler.",
    },
  ],
  'inter1000-4-2': [
    {
      question: "Hvor finner man den vanligste oversikten over folkerettens rettskilder?",
      options: ["I artikkel 38 i statutten for Den internasjonale domstolen", "I FN-paktens kapittel VII om trusler mot freden", "I en egen konvensjon om rettskilder vedtatt av Generalforsamlingen", "I de alminnelige rettsprinsippene slik nasjonale domstoler anvender dem"],
      explanation: "Artikkel 38 sier hvilke kilder domstolen skal anvende, og brukes i praksis som en generell oversikt. Kapittel VII gjelder rådets tvangsmyndighet, og det finnes ingen egen rettskildekonvensjon. Alminnelige rettsprinsipper er én av kildene i listen, ikke listen selv.",
    },
    {
      question: "Hvilke to kilder er de sentrale i folkeretten?",
      options: ["Traktat og sedvane", "Alminnelige rettsprinsipper og juridisk teori", "Sikkerhetsrådets vedtak og Generalforsamlingens resolusjoner", "Rettsavgjørelser og statenes nasjonale lovgivning"],
      explanation: "Traktat og sedvane er de to sentrale kildene, og det er der oppgavene bor. Alminnelige rettsprinsipper fyller særlig hull, mens rettsavgjørelser og juridisk teori uttrykkelig er hjelpemidler ved fastleggelsen av reglene.",
    },
    {
      question: "Hva kjennetegner en traktat?",
      options: ["En avtale mellom stater som er ment å skape rettslige forpliktelser", "Et dokument vedtatt av et FN-organ med et flertall av statene bak seg", "En nedskrevet regel som binder alle stater uavhengig av tilslutning", "En høytidelig erklæring om hvilke prinsipper statene bør følge"],
      explanation: "Det avgjørende er om avtalen er ment å binde rettslig — navnet kan være konvensjon, pakt, avtale eller protokoll. En erklæring sier hva som bør gjelde uten å binde, og det er sedvanen, ikke traktaten, som binder uavhengig av tilslutning.",
    },
    {
      question: "Hvem binder en traktat?",
      options: ["Partene, altså de statene som har sluttet seg til den", "Alle stater, siden traktater uttrykker gjeldende folkerett", "Alle medlemsstater i FN, uavhengig av om de har undertegnet", "De statene som deltok i forhandlingene om teksten"],
      explanation: "Traktaten binder dem som har sluttet seg til den. En stat som står utenfor, er ikke bundet, uansett hvor mange andre som har sluttet seg til — og deltakelse i forhandlingene er ikke det samme som å ha påtatt seg forpliktelsen.",
    },
    {
      question: "Hvordan blir en stat bundet av en traktat?",
      options: ["Ved å ratifisere den eller på annen måte slutte seg til etter undertegningen", "Ved å undertegne teksten under forhandlingenes avslutning", "Ved at et flertall av statene har ratifisert og traktaten trer i kraft", "Ved at staten unnlater å protestere innen en gitt frist"],
      explanation: "Undertegning er et signal om tilslutning; forpliktelsen inntrer normalt ved ratifikasjon eller tilsvarende tilslutning. Mange stater krever nasjonal behandling mellom de to trinnene. At traktaten er i kraft mellom andre, binder ikke en stat som selv står utenfor.",
    },
    {
      question: "Hvilke to vilkår må være oppfylt for at en folkerettslig sedvane skal binde?",
      options: ["Statspraksis, og en oppfatning om at praksisen er rettslig påbudt", "Langvarig praksis, og at et flertall av statene har uttrykt støtte til den", "At regelen er kodifisert, og at konvensjonen har trådt i kraft", "At praksisen er dokumentert skriftlig, og at ingen stat har protestert"],
      explanation: "Sedvane krever både statspraksis og opinio juris. Uten rettsoppfatningen er praksis bare en vane. Det finnes ingen fast tidsgrense eller dokumentasjonskrav, og kodifisering er verken nødvendig eller tilstrekkelig.",
    },
    {
      question: "Hva regnes som statspraksis?",
      options: ["Handlinger, lovgivning, offisielle uttalelser og stemmegivning i internasjonale organer", "Bare fysiske handlinger som statens myndigheter faktisk utfører overfor andre stater i praksis", "Bare tiltak som er nedfelt i statens egen lovgivning og håndhevet der", "Bare handlinger som er behandlet av en internasjonal domstol"],
      explanation: "Praksisbegrepet er bredt: også uttalelser, noter og stemmegivning teller, og i noen sammenhenger det å la være å handle. Kravet er at praksisen er alminnelig og noenlunde konsekvent, ikke at den er prøvd rettslig eller lovfestet.",
    },
    {
      question: "Hva er opinio juris?",
      options: ["Oppfatningen om at praksisen følges fordi den er rettslig påbudt", "Den samlede rettsoppfatningen i juridisk teori om hva som er gjeldende rett", "Domstolens uttalelse om hvordan en folkerettslig regel skal forstås", "Statenes felles forståelse av hvordan en traktattekst skal tolkes"],
      explanation: "Opinio juris er det andre sedvanevilkåret, og det er dette som skiller rett fra vane. Juridisk teori og domsuttalelser er hjelpemidler ved fastleggelsen av reglene, ikke selve rettsoppfatningen, og traktattolkning er et annet spørsmål.",
    },
    {
      question: "Hvorfor er utbredt praksis alene ikke nok til å skape sedvane?",
      options: ["Fordi enhver vane da ville blitt en rettsplikt statene aldri hadde ment å påta seg", "Fordi praksis må ha vart i minst femti år før den kan gi opphav til en regel", "Fordi bare praksis som er godkjent av Sikkerhetsrådet kan skape folkerett", "Fordi praksis må være nedfelt i en traktat for å kunne påberopes"],
      explanation: "Rettsoppfatningen gjør i sedvanen den jobben signaturen gjør i traktaten: den knytter regelen til statenes eget samtykke. Uten den ville høflighetsvaner blitt forpliktelser. Verken tidskrav, godkjenning eller nedskriving er vilkår.",
    },
    {
      question: "Hvordan kan man i praksis se at rettsoppfatningen finnes?",
      options: ["I at brudd møtes med rettslig formulert kritikk, og at den anklagede forsvarer seg rettslig", "I at statene har vedtatt en resolusjon der de bekrefter at regelen gjelder", "I at en internasjonal domstol har slått fast at regelen binder partene i en sak", "I at regelen er tatt inn i statenes egen nasjonale lovgivning på omtrent den samme måten overalt"],
      explanation: "Rettsoppfatningen viser seg i reaksjonene: protester, krav om forklaring, og særlig i at den handlende staten begrunner seg rettslig i stedet for å avvise spørsmålet. Resolusjoner, dommer og lovgivning kan være holdepunkter, men de er ikke det som gjør oppfatningen observerbar i seg selv.",
    },
    {
      question: "Hvem binder en folkerettslig sedvane?",
      options: ["Som utgangspunkt alle stater, med et snevert unntak for konsekvent innsigelse", "Bare de statene som selv har utøvd den aktuelle praksisen", "Bare de statene som har sluttet seg til en konvensjon med samme innhold", "Bare de statene som uttrykkelig har erklært at de anser seg bundet"],
      explanation: "Sedvanen binder som utgangspunkt alle, og det er nettopp derfor spørsmålet om noe har blitt sedvane, er praktisk viktig for stater som har holdt seg utenfor en avtale. Unntaket gjelder den som konsekvent har motsatt seg regelen fra starten.",
    },
    {
      question: "Hva innebærer læren om vedvarende innsigelse?",
      options: ["At en stat som konsekvent har motsatt seg en ny sedvane fra starten, ikke blir bundet av den", "At en stat når som helst kan tre ut av en traktat den tidligere har ratifisert", "At en stat kan reservere seg mot enkeltbestemmelser når den slutter seg til en konvensjon", "At en stat kan kreve at en tvist behandles av Den internasjonale domstolen"],
      explanation: "Vilkårene er strenge: innsigelsen må komme tidlig og holdes ved like. Kommer protesten etter at regelen er etablert, er staten bundet som alle andre. Læren er prøven på at sedvanen hviler på samtykke og ikke på flertall.",
    },
    {
      question: "Hva er jus cogens?",
      options: ["Ufravikelige normer som statene ikke kan avtale seg bort fra", "Reglene om hvordan traktater skal tolkes når ordlyden er uklar", "Prinsippet om at folkeretten går foran nasjonal rett ved motstrid", "Reglene som gjelder for partene under en pågående væpnet konflikt"],
      explanation: "En avtale i strid med en slik norm er ugyldig, og forbudet mot folkemord er det eksempelet som nevnes oftest. Dette er den ene virkelige rangeringen i folkeretten — ellers er kildene sidestilte, og traktattolkning og krigens regler er andre spørsmål.",
    },
    {
      question: "Hvilken rolle har rettsavgjørelser og juridisk teori etter artikkel 38?",
      options: ["De er hjelpemidler ved fastleggelsen av reglene, ikke selvstendige kilder", "De er sidestilt med traktat og sedvane som rettsskapende kilder", "De binder alle stater når de kommer fra Den internasjonale domstolen", "De brukes bare der partene i en sak uttrykkelig har vist til dem"],
      explanation: "Bestemmelsen nevner dem uttrykkelig som hjelpemidler. En dom binder partene i saken og har stor betydning som uttrykk for hva retten er, men den skaper ikke ny rett slik en traktat eller en sedvane gjør.",
    },
    {
      question: "Hva er den rettslige statusen til en erklæring vedtatt i FNs generalforsamling?",
      options: ["Som hovedregel en anbefaling, men den kan over tid bidra til sedvanedannelse", "Bindende for de statene som stemte for den, men ikke for de øvrige", "Bindende for alle medlemsstatene på linje med en ratifisert traktat", "Uten enhver rettslig betydning, siden bare traktater kan skape forpliktelser"],
      explanation: "Erklæringen sier hva som bør gjelde uten å binde, uansett hvor mange som stiller seg bak. Men den kan forme praksis og rettsoppfatning og dermed bidra til sedvane — veien fra verdenserklæringen fra 1948 til bindende menneskerettskonvensjoner er det klassiske eksempelet.",
    },
    {
      question: "Hva er det bærende grunnlaget for at folkeretten binder statene?",
      options: ["At statene i hovedsak er bundet av det de selv har samtykket til", "At det finnes en overordnet myndighet som kan håndheve reglene", "At reglene er vedtatt av et flertall av verdens stater i FN-organer", "At statene ville tape på å bryte reglene i sine forbindelser med andre"],
      explanation: "Samtykket er uttrykkelig i traktaten og stilltiende i sedvanen, og det er dette som gjør at en suveren stat kan være bundet: suvereniteten er brukt, ikke satt til side. At brudd koster, forklarer etterlevelsen, men det er ikke grunnlaget for at reglene binder.",
    },
    {
      question: "Hvem er folkerettens subjekter?",
      options: ["Statene i første rekke, i tillegg til internasjonale organisasjoner og i noen grad enkeltmennesker", "Utelukkende statene selv, siden folkeretten etter sin natur regulerer forholdet mellom suverene stater", "Statene og alle organisasjoner som er registrert hos FNs generalsekretær", "Statene og de væpnede gruppene som kontrollerer et territorium"],
      explanation: "Statene er hovedaktørene, men internasjonale organisasjoner kan ha egen rettslig handleevne innenfor det medlemmene har gitt dem, og enkeltmennesket har fått en begrenset stilling, særlig gjennom menneskerettighetene. Kontroll over territorium gjør ikke en gruppe til et folkerettssubjekt på linje med en stat.",
    },
    {
      question: "Hva behandler Den internasjonale domstolen?",
      options: ["Tvister mellom stater, og rådgivende uttalelser til FN-organer", "Straffesaker mot enkeltpersoner for de groveste internasjonale forbrytelsene", "Klager fra privatpersoner mot stater som har brutt deres rettigheter", "Tvister mellom internasjonale organisasjoner og deres medlemsstater"],
      explanation: "Domstolen avgjør tvister mellom stater og gir rådgivende uttalelser til FN-organer, og avgjørelsene binder partene i saken. Straffansvar for enkeltpersoner og individklager hører til andre institusjoner, og forvekslingen er en unødvendig presisjonsfeil.",
    },
    {
      question: "Hvorfor kan ikke Den internasjonale domstolen behandle enhver tvist mellom to stater?",
      options: ["Fordi begge parter må ha godtatt at domstolen har myndighet i saken", "Fordi domstolen bare behandler saker Sikkerhetsrådet har henvist til den", "Fordi domstolen bare kan behandle tvister som gjelder tolkning av FN-pakten", "Fordi domstolen bare behandler saker mellom stater i samme verdensdel"],
      explanation: "Myndigheten forutsetter samtykke, enten generelt på forhånd, gjennom en traktatbestemmelse eller for den enkelte saken. Det er derfor en stat kan bryte en forpliktelse og likevel unngå å bli prøvd — det tydeligste eksempelet på hva samtykkeprinsippet koster.",
    },
    {
      question: "Hva menes med kodifisering i folkeretten?",
      options: ["At regler som allerede finnes som sedvane, skrives ned i traktatform", "At en stat gjennomfører en folkerettslig regel i sin egen lovgivning", "At Sikkerhetsrådet fastsetter bindende regler for medlemsstatene", "At en domstol fastslår innholdet i en uskreven regel gjennom en dom"],
      explanation: "Kodifisering gjør uskrevne regler skriftlige og dermed lettere å påberope og lære. Merk at den ikke nødvendigvis skaper ny rett: er regelen allerede sedvane, binder den alle uansett, mens traktaten bare binder partene. Gjennomføring internt er et annet spørsmål.",
    },
    {
      question: "Hva skjer folkerettslig når en stat bryter en forpliktelse?",
      options: ["Det oppstår et ansvar overfor den rammede, med plikt til å stanse og rette opp", "Saken går automatisk til Den internasjonale domstolen for avgjørelse", "Staten mister automatisk medlemskapet i de organisasjonene forpliktelsen springer ut av", "Sikkerhetsrådet plikter å behandle saken og treffe tvangstiltak"],
      explanation: "Ansvaret innebærer først og fremst å stanse handlingen og rette opp skaden. Reaksjonene er desentraliserte: protest, mottiltak, tvisteløsning der partene har godtatt det, og rådet i saker om fred og sikkerhet. Ingen av delene skjer automatisk.",
    },
    {
      question: "Hvorfor følger stater i stor grad folkeretten selv om håndhevingen er svak?",
      options: ["Fordi de møtes i mange saker samtidig, slik at brudd i én sak koster i alle de andre", "Fordi Sikkerhetsrådet i praksis griper inn mot alle vesentlige brudd", "Fordi Den internasjonale domstolen kan pålegge økonomiske sanksjoner ved ethvert brudd", "Fordi brudd på folkeretten fører til automatisk tap av stemmerett i FN"],
      explanation: "Gjensidighet, gjentatt samhandling, omdømme og internalisering i forvaltningen virker sammen. Håndhevingen skjer altså gjennom kostnaden ved å miste tillit, ikke gjennom tvang — rådet er ofte blokkert, og domstolen ilegger ikke sanksjoner.",
    },
    {
      question: "Hva betyr det at et land bygger på et monistisk system?",
      options: ["At folkeretten og den nasjonale retten anses som ett rettssystem", "At folkeretten alltid går foran nasjonal lovgivning ved motstrid", "At staten må gjennomføre en regel i lov før den kan anvendes internt", "At bare én statsmakt har myndighet til å inngå internasjonale avtaler"],
      explanation: "I et monistisk system gjelder en folkerettslig regel også internt uten et eget gjennomføringsvedtak. Det sier noe om gjennomføringen, ikke uten videre om hva som går foran ved motstrid. Kravet om gjennomføring kjennetegner det dualistiske utgangspunktet.",
    },
    {
      question: "Hva innebærer det at Norge bygger på et dualistisk utgangspunkt?",
      options: ["At en regel må gjennomføres for å anvendes direkte internt, mens Norge er bundet utad uansett", "At Norge ikke er folkerettslig bundet før Stortinget har vedtatt regelen som norsk lov", "At norske domstoler ikke kan ta hensyn til folkerettslige forpliktelser i det hele tatt", "At Norge selv velger hvilke folkerettslige forpliktelser staten vil anse seg bundet av"],
      explanation: "Norge er folkerettslig bundet fra forpliktelsen er påtatt; dualismen gjelder hvordan den virker internt. Konsekvensen er at Norge kan være i brudd med folkeretten uten at noen norsk regel er brutt — og det er nettopp derfor presumpsjonsprinsippet finnes.",
    },
    {
      question: "Hva er presumpsjonsprinsippet?",
      options: ["At norsk rett så langt som mulig tolkes i samsvar med Norges folkerettslige forpliktelser", "At folkerettslige regler uten videre går foran norsk lov når de to reglene står mot hverandre", "At en stat antas å ha samtykket til en sedvane når den ikke har protestert", "At en traktat antas å være i kraft inntil det motsatte er dokumentert"],
      explanation: "Prinsippet er en tolkningsregel: man legger til grunn at lovgiveren ikke har ment å bryte folkeretten. Det er ikke en forrangsregel, og det stopper ved en norsk bestemmelse som er så klar at den ikke lar seg tolke i samsvar med forpliktelsen.",
    },
    {
      question: "Hva viser Finanger-dommen?",
      options: ["At presumpsjonsprinsippet ikke rekker så langt at det setter til side en klar norsk lovregel", "At folkerettslige forpliktelser alltid går foran norsk lovgivning i norske domstoler", "At norske domstoler ikke kan legge vekt på internasjonale forpliktelser ved tolkning", "At Norge ikke er bundet av forpliktelser som ikke er gjennomført i norsk lov"],
      explanation: "Den norske bestemmelsen ble ansett for klar til å tolkes i samsvar med forpliktelsen, og den ble derfor anvendt. Forpliktelsen besto likevel: spørsmålet måtte løses ved lovendring, og i en senere sak ble staten holdt ansvarlig for den mangelfulle gjennomføringen.",
    },
    {
      question: "Hva er forskjellen på personell og funksjonell immunitet?",
      options: ["Den ene følger stillingen mens den varer, den andre handlingen utført på statens vegne", "Den ene gjelder statsledere og diplomater, den andre alle som er offentlig ansatt i staten", "Den ene gjelder for internasjonale domstoler, den andre for nasjonale", "Den ene gjelder sivile saker, den andre saker om straffansvar"],
      explanation: "Personell immunitet henger på hvem du er akkurat nå og faller bort når stillingen opphører; funksjonell immunitet henger på hva som ble gjort på statens vegne og varer også etterpå. Merk at immunitet gjelder hvilken domstol som kan prøve saken, ikke om handlingen var lovlig.",
    },
  ],
  'inter1000-4-3': [
    {
      question: "Hva er FNs havrettskonvensjon?",
      options: ["Den sentrale kilden til havretten, vedtatt i 1982 og i kraft fra 1994", "En erklæring fra Generalforsamlingen om hvordan havområder bør deles", "En avtale mellom kyststatene i Nord-Atlanteren om fiskeriforvaltning", "Et vedtak i Sikkerhetsrådet om ferdselsfrihet i internasjonale streder"],
      explanation: "Konvensjonen samler regler som tidligere lå spredt i sedvane og eldre avtaler, og kalles derfor iblant havets grunnlov. Fordi mye av innholdet fantes som sedvane fra før, binder deler av det også stater som ikke har sluttet seg til den.",
    },
    {
      question: "Hva måles kyststatens soner fra?",
      options: ["Grunnlinjen, som hovedsakelig følger lavvannslinjen langs kysten", "Midtpunktet i den nærmeste havnen langs den aktuelle kyststrekningen", "Den ytterste bebygde øya innenfor statens territorium", "Kystlinjen slik den framstår ved høyvann langs fastlandet"],
      explanation: "Alle sonene måles fra grunnlinjen. Der kysten er sterkt oppskåret eller det ligger en øyrekke utenfor, kan det trekkes rette grunnlinjer. Fordi alt måles fra den samme linjen, flytter en endring i grunnlinjen alle sonegrensene samtidig.",
    },
    {
      question: "Hva slags myndighet har kyststaten i indre farvann?",
      options: ["Full suverenitet, og fremmede skip har ingen alminnelig rett til å gå inn", "Suverenitet, men begrenset av retten til uskyldig gjennomfart", "Suverene rettigheter til ressursene, men ikke til ferdselen", "Kontroll bare knyttet til toll, innvandring og helse"],
      explanation: "Indre farvann er alt vann innenfor grunnlinjen, og der er bildet like enkelt som på land. De øvrige beskrivelsene hører til territorialfarvannet, den økonomiske sonen og den tilstøtende sonen.",
    },
    {
      question: "Hvor langt kan territorialfarvannet strekke seg?",
      options: ["Inntil 12 nautiske mil fra grunnlinjen", "Inntil 24 nautiske mil fra grunnlinjen", "Inntil 200 nautiske mil fra grunnlinjen", "Så langt som kyststaten selv fastsetter det"],
      explanation: "Grensen er 12 nautiske mil, og innenfor den fastsetter kyststaten selv bredden. 24 nautiske mil er ytterkanten av den tilstøtende sonen, og 200 nautiske mil gjelder den eksklusive økonomiske sonen.",
    },
    {
      question: "Hva innebærer retten til uskyldig gjennomfart?",
      options: ["At passasjen må være sammenhengende og rask, og ikke til skade for kyststatens fred og sikkerhet", "At ethvert skip fritt kan passere gjennom territorialfarvannet uansett hva formålet med reisen er", "At kyststaten må gi tillatelse før et fremmed fartøy kan passere", "At retten bare gjelder handelsfartøy, ikke fartøy i militær tjeneste"],
      explanation: "Begge ledd må være oppfylt, og det avgjørende er hva skipet gjør — ikke hvem det tilhører. Et marinefartøy som passerer rolig, er innenfor; et fartøy som stanser og fisker, er det ikke. Retten gjelder uten forhåndstillatelse, men den er ikke ubetinget.",
    },
    {
      question: "Hva kan kyststaten gjøre i den tilstøtende sonen?",
      options: ["Utøve kontroll knyttet til toll, skatt og avgift, innvandring og helse", "Utøve alminnelig myndighet på samme måte som i territorialfarvannet", "Nekte fremmede fartøy adgang når sikkerhetshensyn tilsier det", "Utnytte naturressursene i vannet og på havbunnen i sonen"],
      explanation: "Sonen kan strekke seg inntil 24 nautiske mil fra grunnlinjen, og myndigheten er knyttet til fire navngitte formål — ikke til alminnelig lovgivning. Ressursrettighetene hører til den økonomiske sonen, og noen adgangsnektelse finnes ikke her.",
    },
    {
      question: "Hvor langt kan den eksklusive økonomiske sonen strekke seg?",
      options: ["Inntil 200 nautiske mil fra grunnlinjen", "Inntil 350 nautiske mil fra grunnlinjen", "Inntil 24 nautiske mil fra grunnlinjen", "Så langt kontinentalmarginen naturlig strekker seg"],
      explanation: "Sonen kan ikke gå ut over 200 nautiske mil fra grunnlinjen. 24 nautiske mil er den tilstøtende sonen, mens kontinentalsokkelen er den som kan følge den naturlige forlengelsen og etter nærmere regler rekke lenger enn 200 nautiske mil.",
    },
    {
      question: "Hva har kyststaten i den eksklusive økonomiske sonen?",
      options: ["Suverene rettigheter til naturressursene, ikke suverenitet over området", "Full suverenitet, slik at sonen er en del av statens territorium", "Bare rett til å regulere fiske, ikke til andre ressurser i sonen", "Bare myndighet til å håndheve regler om vern av havmiljøet"],
      explanation: "Rettighetene gjelder utforsking, utnytting, bevaring og forvaltning av ressursene i vannet og på og under havbunnen, i tillegg til myndighet blant annet over innretninger, forskning og miljø. Men sonen er ikke territorium, og andre stater beholder ferdselsfriheten.",
    },
    {
      question: "Hva er forskjellen på suverenitet og suverene rettigheter?",
      options: ["Suverenitet gjelder området og gir alminnelig myndighet, suverene rettigheter gjelder et bestemt formål", "Suverenitet gjelder på land, suverene rettigheter gjelder alle havområder", "Suverenitet over et område kan overdras ved avtale, mens suverene rettigheter til ressurser aldri kan det", "Suverenitet gjelder i fredstid, suverene rettigheter under væpnet konflikt"],
      explanation: "Skillet er kapitlets viktigste presisjon: kyststaten har suverenitet i indre farvann og territorialfarvann, og suverene rettigheter til ressursene i den økonomiske sonen og på sokkelen. Bruker man ordene om hverandre, blir hvert eneste konkrete svar feil.",
    },
    {
      question: "Hvilke friheter beholder andre stater i den eksklusive økonomiske sonen?",
      options: ["Skipsfart, overflyging og legging av undersjøiske kabler og rørledninger", "Fiske og annen utnytting av ressursene på lik linje med kyststaten", "Utvinning av olje og gass fra havbunnen etter melding til kyststaten", "Marin forskning uten kyststatens samtykke, så lenge den er fredelig"],
      explanation: "Ferdselsfrihetene er den andre halvdelen av avveiningen: kyststaten fikk ressursene, verdenssamfunnet beholdt ferdselen. Ressursutnytting og marin forskning ligger derimot under kyststatens myndighet i sonen.",
    },
    {
      question: "Hva omfatter kontinentalsokkelen?",
      options: ["Havbunnen og undergrunnen utenfor territorialfarvannet, ikke vannet over", "Både havbunnen og vannsøylen ut til 200 nautiske mil", "Bare de delene av havbunnen som kyststaten uttrykkelig har gjort krav på", "Havområdene mellom to nabostaters kyster der avstanden er kort"],
      explanation: "Sokkelen følger den naturlige forlengelsen av landterritoriet, minst ut til 200 nautiske mil, og kan etter nærmere regler rekke lenger. Rettighetene gjelder utforsking og utnytting av ressursene der, og de gjelder uavhengig av krav og bruk — men de berører ikke vannet over.",
    },
    {
      question: "Hva skiller kontinentalsokkelen fra den eksklusive økonomiske sonen?",
      options: ["Sokkelen gjelder bare bunnen og kan rekke lenger, sonen gjelder vann og bunn ut til en fast grense", "Sokkelen gjelder bare olje og gass, sonen bare levende ressurser", "Sokkelen må kreves uttrykkelig av kyststaten, mens den økonomiske sonen gjelder helt automatisk for alle", "Sokkelen gjelder bare for stater med kyst mot åpent hav"],
      explanation: "De overlapper ut til 200 nautiske mil og forveksles derfor stadig. Sokkelrettighetene gjelder havbunnen og undergrunnen alene, gjelder uavhengig av krav og bruk, og kan strekke seg lenger ut der den naturlige forlengelsen gjør det.",
    },
    {
      question: "Hva gjelder på det frie hav?",
      options: ["Havets frihet: ingen stat kan gjøre krav på området, og skipet er underlagt sin flaggstat", "Ingen regler i det hele tatt, siden ingen stat har myndighet der", "Kyststatens egne regler gjelder også der, så langt ut som den nærmeste sonen dens faktisk rekker", "Sikkerhetsrådet har myndighet til å regulere all virksomhet der"],
      explanation: "Frihetene omfatter blant annet skipsfart, overflyging, fiske og forskning, og de skal utøves med rimelig hensyn til andres tilsvarende friheter. At området er fritt, betyr at ingen kyststat har myndighet der — ikke at det er regelløst.",
    },
    {
      question: "Hvilken status har havbunnen som ligger utenfor enhver stats kontinentalsokkel?",
      options: ["Området og ressursene er erklært å være menneskehetens fellesarv", "Området kan tilegnes av den staten som først tar det i bruk", "Området forvaltes av kyststatene i den aktuelle regionen i fellesskap", "Området er underlagt flaggstaten til det fartøyet som opererer der"],
      explanation: "Utnytting skal skje gjennom et internasjonalt organ og komme alle til gode. Ordningen er et svar på et klassisk problem: en ressurs mange kan bruke og ingen kan stenges ute fra, blir overutnyttet når rettighetene er uklare.",
    },
    {
      question: "Hvorfor avtar kyststatens rettigheter med avstanden fra kysten?",
      options: ["Fordi ferdselsinteressen veier tyngre og tyngre jo lenger ut man kommer", "Fordi kyststatens interesse i havområdet forsvinner gradvis utover", "Fordi havbunnen blir dypere og dermed vanskeligere å kontrollere", "Fordi konvensjonen bygger på hvor langt kystartilleri rakk da reglene ble til"],
      explanation: "Nær kysten kan kyststaten få full myndighet uten at ferdselen stanser, siden en passasjerett er nok for et skip som skal videre. Lenger ute ville alminnelig myndighet stengt store deler av havene, mens kyststatens gjenværende interesse i praksis er ressursene. Løsningen deler interessene.",
    },
    {
      question: "Hva er forskjellen på kyststatens og flaggstatens rolle?",
      options: ["Kyststatens myndighet er knyttet til området, flaggstatens til skipet", "Kyststaten regulerer handelsfartøy, flaggstaten regulerer militære fartøy", "Kyststaten har myndighet i fredstid, flaggstaten under væpnet konflikt", "Kyststaten kan gripe inn overalt, flaggstaten bare i egne havner"],
      explanation: "Kyststatens myndighet avtar utover, mens flaggstatens følger skipet overalt — også på det frie hav. Derfor blir registreringslandet stadig viktigere jo lenger fra kysten skipet befinner seg, og dette er nøkkelen til spørsmål om hvem som kan gripe inn.",
    },
  ],
  'inter1000-5-1': [
    {
      question: "Hva menes med globalisering i INTER1000?",
      options: ["Tiltakende sammenkobling mellom samfunn, slik at avstand betyr mindre for hvem som påvirkes", "At kulturer, forbruksmønstre og styresett over hele verden gradvis blir likere hverandre enn før", "At stater i økende grad overlater beslutningsmyndighet til overnasjonale fellesorganer", "At verdenshandelen over tid vokser raskere enn den samlede produksjonen i verden"],
      explanation: "Globalisering er sammenkobling, ikke ensretting: koblingene blir flere, tettere og raskere. Påstanden om økende likhet er en annen påstand som hører hjemme i drøftingen, overføring av myndighet er én form for politisk globalisering, og handelsveksten er ett mål på én dimensjon.",
    },
    {
      question: "Hvilke tre dimensjoner måles sammenkoblingen langs?",
      options: ["Utstrekning, intensitet og hurtighet", "Handel, kapitalflyt og migrasjon", "Økonomi, politikk og kultur", "Bredde, dybde og varighet"],
      explanation: "Utstrekning, intensitet og hurtighet er dimensjonene begrepet måles langs. Handel, kapitalflyt og migrasjon er eksempler på hva som beveger seg, og økonomi, politikk og rett er de områdene koblingen skjer på — begge deler er noe annet enn dimensjonene.",
    },
    {
      question: "Hva betegner dimensjonen utstrekning?",
      options: ["Hvor langt unna hverandre de stedene ligger som faktisk er koblet sammen", "Hvor omfattende og regelmessige strømmene mellom stedene er over tid", "Hvor fort noe som skjer ett sted får følger for mennesker et annet sted", "Hvor mange samfunnsområder koblingen har rukket å gjøre seg gjeldende på"],
      explanation: "Utstrekning er den geografiske rekkevidden. Omfanget av strømmene er intensitet, tempoet er hurtighet, og antall berørte samfunnsområder er ikke en av de tre dimensjonene i det hele tatt.",
    },
    {
      question: "Hvorfor er hurtighet den dimensjonen som treffer politiske institusjoner hardest?",
      options: ["Fordi noe kan forplante seg raskere enn en politisk beslutningsprosess rekker å svare", "Fordi tempoet gjør det umulig å samle inn pålitelig statistikk om hva som faktisk skjer", "Fordi raske endringer alltid rammer flere land enn langsomme endringer gjør", "Fordi hurtighet er den eneste dimensjonen som lar seg måle presist over tid"],
      explanation: "Når en forstyrrelse forplanter seg over natten, rekker ikke en prosess som tar uker å svare på den. Det er en forskjell i hvem som i praksis kan handle, ikke bare en gradsforskjell — og verken målbarhet eller antall berørte land er poenget.",
    },
    {
      question: "Hva er forskjellen på globalisering og gjensidig avhengighet?",
      options: ["Globalisering er den brede prosessen, gjensidig avhengighet er forholdet mellom bestemte parter", "Globalisering gjelder økonomiske forhold, gjensidig avhengighet gjelder politiske forhold", "Globalisering er en beskrivelse av nåtiden, gjensidig avhengighet er en spådom om framtiden", "Globalisering gjelder mellom stater, mens gjensidig avhengighet gjelder mellom selskaper"],
      explanation: "Gjensidig avhengighet beskriver forholdet mellom to land eller to markeder; globalisering er den bredere prosessen som skaper slike forhold mange steder samtidig. Begge omfatter både økonomi og politikk, og begge beskriver nåværende forhold.",
    },
    {
      question: "Hva er et eksempel på rettslig globalisering?",
      options: ["En traktat der statene binder seg til felles minstestandarder seg imellom", "En produksjonskjede der delene lages i fire land og settes sammen i et femte", "Faste forhandlingsrunder der stater møtes for å bli enige om nye regler", "At kapital kan flyttes mellom markeder i løpet av noen få sekunder"],
      explanation: "Rettslig globalisering er at felles bindende regler faktisk skapes mellom statene. Produksjonskjeden og kapitalflyten er økonomisk globalisering, og forhandlingsrunder er politisk globalisering helt til regelen er inngått.",
    },
    {
      question: "Hva kjennetegner politisk globalisering?",
      options: ["At politisk myndighet i økende grad utøves over eller mellom stater", "At politiske ideer og bevegelser sprer seg raskere enn de gjorde før", "At internasjonale markeder påvirker hva nasjonale politikere kan gjøre", "At flere stater har innført samme styreform i løpet av de siste tiårene"],
      explanation: "Politisk globalisering gjelder hvor myndighet utøves: i mellomstatlige organer, i regionale ordninger og i faste forhandlingsformer. At ideer sprer seg er kulturell sammenkobling, og at markeder begrenser politikken er en virkning av økonomisk globalisering.",
    },
    {
      question: "Hvilken form for globalisering er kommet lengst?",
      options: ["Den økonomiske, målt på alle de tre dimensjonene samtidig", "Den rettslige, fordi traktater binder statene direkte og varig", "Den politiske, fordi mellomstatlige organisasjoner er blitt mange", "Ingen av dem ligger foran; de har utviklet seg omtrent i takt"],
      explanation: "Den økonomiske sammenkoblingen har størst utstrekning, høyest intensitet og klart størst hurtighet. Begrunnelsen skal være dimensjonene: å svare riktig uten dem gir rett svar uten uttelling på mekanismeaksen.",
    },
    {
      question: "Hva er hovedgrunnen til at politisk myndighet er vanskeligere å globalisere enn markeder?",
      options: ["At myndighet er territoriell og må overlates eller forhandles av hver enkelt stat", "At internasjonale organisasjoner mangler ansatte og økonomiske ressurser", "At politiske beslutningsprosesser i sin natur er tregere enn markedstransaksjoner er", "At velgere i de fleste land er skeptiske til overnasjonale ordninger"],
      explanation: "Markedet utvider seg når to parter er enige; myndighet utvides bare når alle er det. Å forklare forskjellen med treghet, ressurser eller uvilje er å bytte ut mekanismen med en påstand om personer.",
    },
    {
      question: "Hva innebærer samtykkeprinsippet i folkeretten?",
      options: ["At en stat i hovedsak bare bindes av det den selv har sluttet seg til", "At en internasjonal domstol må godkjenne nye traktater før de gjelder", "At en regel må vedtas av et flertall av verdens stater for å bli bindende", "At en stat kan si opp enhver forpliktelse den ikke lenger ønsker å ha"],
      explanation: "Statene bindes gjennom traktater de har inngått og sedvane de har vært med på å danne. Det finnes verken en godkjenningsordning i en domstol eller et flertallsvedtak som binder alle — og at en forpliktelse springer ut av samtykke, betyr ikke at den fritt kan sies opp.",
    },
    {
      question: "Hva menes med et styringsgap?",
      options: ["At problemene krysser grensene, mens myndigheten til å håndtere dem stopper ved dem", "At noen stater har langt større innflytelse i internasjonale organer enn andre har", "At inntektsforskjellene mellom rike og fattige land har økt i takt med handelen", "At regjeringer mangler kunnskap om hva som foregår i internasjonale markeder"],
      explanation: "Styringsgapet er avstanden mellom problemenes rekkevidde og institusjonenes rekkevidde. Skjev innflytelse og inntektsforskjeller er reelle forhold, men de er ikke det begrepet betegner.",
    },
    {
      question: "Hva er kontinuitetsposisjonens sterkeste argument om globalisering?",
      options: ["At handel og kapitalflyt var svært omfattende før, og at prosessen deretter ble reversert", "At teknologien alltid har endret samfunn, og at dagens endringer ikke er noe unntak fra det", "At de tre dimensjonene er umulige å måle presist over lange historiske tidsrom", "At internasjonale organisasjoner er langt eldre enn dagens globaliseringsdebatt"],
      explanation: "Perioden fram til første verdenskrig hadde svært høy grensekryssende handel og kapitalflyt, og den ble reversert gjennom politiske valg. Det viser at sammenkobling ikke er en enveisprosess — en motprøve enhver drøfting av spørsmålet bør ha med.",
    },
    {
      question: "Hva er poenget med å skille gradsforskjell fra artsforskjell?",
      options: ["Det gjør spørsmålet om globalisering er nytt til én prøvbar akse i stedet for to lister", "Det viser at bruddposisjonen er den eneste holdbare når dimensjonene måles presist", "Det er skillet mellom økonomisk sammenkobling og politisk sammenkobling i praksis", "Det avgjør om et fenomen skal analyseres historisk eller med økonomiske begreper"],
      explanation: "Skillet spisser drøftingen: er dagens sammenkobling mer av det samme, eller noe kvalitativt annet? Dimensjonene brukes som målestokk, og landingen kan gå begge veier — den er ikke gitt på forhånd.",
    },
    {
      question: "Hvorfor er det å inngå en traktat blitt kalt en utøvelse av suverenitet?",
      options: ["Fordi staten selv har sagt ja, og bindingen springer ut av dens eget samtykke", "Fordi traktater alltid kan sies opp med kort varsel av enhver av partene", "Fordi internasjonale regler viker for nasjonal lovgivning dersom de er i strid", "Fordi traktater bare binder de statene som stemte for dem i en avstemning"],
      explanation: "Bindingen springer ut av statens eget samtykke, og å binde seg er dermed en måte å bruke suvereniteten på. Dette er motargumentet i suverenitetsdrøftingen, og det forutsetter verken fri oppsigelse eller at nasjonal rett går foran.",
    },
    {
      question: "Hva er skillet mellom suverenitet og handlingsrom?",
      options: ["Formell rett til å bestemme, mot hva det faktisk koster å bruke den retten", "Rett innenfor eget territorium, mot rett til å delta i internasjonale organer", "Rettigheter etter folkeretten, mot rettigheter etter statens egen grunnlov", "Statens myndighet over borgerne, mot dens myndighet over egen økonomi"],
      explanation: "Uten dette skillet snakker partene i suverenitetsdrøftingen forbi hverandre. At regulering er blitt dyrere å bruke, er noe annet enn at retten til å regulere er falt bort.",
    },
    {
      question: "Hva går posisjonen om at staten er omformet ut på?",
      options: ["At oppgavene har flyttet seg fra å styre alene til å forvalte tilkoblingen og forhandle", "At staten har mistet myndighet på noen felter og fått ny myndighet på andre", "At staten er blitt svakere innenlands, men samtidig sterkere i internasjonale forhandlinger", "At staten er uendret, siden all internasjonal binding hviler på dens eget samtykke"],
      explanation: "Mekanismen er at når det som skal styres krysser grensen, kan staten enten gi opp å styre det eller styre det sammen med andre. Posisjonen er ikke et kompromiss mellom svekkelse og uendret tilstand, men en tredje påstand med sin egen begrunnelse.",
    },
    {
      question: "Hva hevder den økonomisk nasjonalistiske posisjonen om globalisering?",
      options: ["At handel gir gevinst, men at rikere og sterkere ikke er det samme", "At handel er en konkurranse om en fast mengde rikdom i verden", "At gevinsten av handel er reell, men fordeles skjevt mellom grupper", "At handel bør være fri fordi taperne kan kompenseres etterpå"],
      explanation: "Posisjonen, knyttet til List, bestrider ikke regnestykket, men at gevinst er det eneste som teller — derav infant industry-argumentet og forsyningssikkerhet. At handel er et nullsumspill er merkantilismens påstand, og fordelingsinnvendingen er den strukturelle kritikkens.",
    },
    {
      question: "Hva er kjernen i den strukturelle kritikken av globaliseringen?",
      options: ["At gevinsten finnes, men fordeles skjevt, og at reglene er utformet av de sterkeste", "At gevinsten ved handel er en illusjon fordi den ene partens tap er den andres vinning", "At åpne markeder svekker statens evne til å beskytte nye næringer i en oppbyggingsfase", "At sammenkoblingen gjør stater sårbare for forsyningssvikt i kritiske varer"],
      explanation: "Kritikken retter seg mot fordelingen og mot rammene, ikke mot regnestykket. Nullsumtanken tilhører merkantilismen, mens vern av nye næringer og forsyningssikkerhet er den økonomiske nasjonalismens argumenter.",
    },
    {
      question: "Hvorfor er skillet mellom ulikhet mellom land og ulikhet innad i land viktig?",
      options: ["Fordi de to målene kan bevege seg i hver sin retning i samme periode", "Fordi bare ulikhet mellom land lar seg måle med rimelig sikkerhet", "Fordi ulikhet innad i land er et nasjonalt og ikke et internasjonalt spørsmål", "Fordi bare ulikhet innad i land påvirkes av handel og grensekryssende kapital"],
      explanation: "En periode kan trekke land nærmere hverandre i inntekt samtidig som forskjellene innad i mange av dem øker. Et svar som bare sier at ulikheten har økt eller falt, har ikke sagt hvilken ulikhet det gjelder — og globalisering og ulikhet var egen oppgave i H2021.",
    },
    {
      question: "Hvilket spørsmål stiller rettsvinkelen i en firefagsanalyse?",
      options: ["Hva statene har bundet seg til, og hva som skjer når ingen håndhever", "Hvem som handler, hva de vil, og hvorfor de ikke uten videre samarbeider", "Hvilket insentiv aktørene møter, og hvorfor summen av valg blir som den blir", "Om vi har sett dette før, og hva forløperne forteller om hva som virket"],
      explanation: "Hver fagvinkel har sitt eget spørsmål. Aktørene og samarbeidsproblemet hører til politikkvinkelen, insentivene til økonomivinkelen, og forløperne til historievinkelen.",
    },
    {
      question: "Når gjør en tverrfaglig kobling en jobb i en besvarelse?",
      options: ["Når svaret blir dårligere hvis setningen strykes, ikke bare kortere", "Når minst tre av emnets fire fagvinkler er nevnt i samme avsnitt", "Når koblingen står i innledningen, slik at leseren vet hva som kommer", "Når den viser at kandidaten har lest pensum fra flere av emnets deler"],
      explanation: "Testen er om svaret svekkes uten setningen. Blir det bare kortere, var koblingen pynt — og fagstoff nevnt uten å bli anvendt er en av de faste feilene sensor trekker for.",
    },
    {
      question: "Hvorfor lønner det seg som regel å bruke to fagvinkler i stedet for fire?",
      options: ["Fordi én kobling gjort ordentlig gir mer uttelling enn fire nevnt overfladisk", "Fordi sensor bare vurderer den disiplinen oppgaven formelt hører hjemme i", "Fordi to fagvinkler er det maksimale en tre timers besvarelse har plass til", "Fordi de fire vinklene ofte gir motstridende svar som ikke lar seg forene"],
      explanation: "Uttellingen ligger i at koblingen forklarer noe, ikke i antallet. Unntaket er oppgaver som uttrykkelig ber om flere fagvinkler — da er bredden selve bestillingen, og det står i oppgaveteksten.",
    },
  ],
  'inter1000-5-2': [
    {
      question: "Hvorfor er utslipp av klimagasser en negativ ekstern virkning?",
      options: ["Fordi kostnaden rammer andre enn utslipperen og ikke er priset i markedet", "Fordi utslippene skjer i luften og derfor ikke lar seg måle tilstrekkelig presist", "Fordi de fleste utslippene skjer i andre land enn der varene blir forbrukt", "Fordi myndighetene hittil har valgt å ikke regulere utslippene strengt nok"],
      explanation: "En ekstern virkning er en kostnad som rammer andre enn den som handler, og som derfor ikke teller med i beslutningen. Måleproblemer og hvor utslippene geografisk skjer er andre spørsmål, og reguleringen er et svar på den eksterne virkningen — ikke det som gjør den til en.",
    },
    {
      question: "Hva er det samfunnsøkonomisk optimale utslippsnivået?",
      options: ["Det nivået der kostnaden ved ett kutt til er like høy som gevinsten av kuttet", "Null, siden enhver ekstern virkning i prinsippet bør fjernes fullstendig", "Det nivået de internasjonale klimamålene til enhver tid har fastsatt", "Det nivået den enkelte bedrift finner det lønnsomt å legge seg på selv"],
      explanation: "Optimum ligger der marginal kuttkostnad møter marginal gevinst, og det tallet er ikke null. Et politisk fastsatt mål er heller ikke det samme som et samfunnsøkonomisk optimum, selv om de kan falle sammen.",
    },
    {
      question: "Hva kjennetegner et kollektivt gode?",
      options: ["At det er ikke-rivaliserende og ikke-ekskluderbart, begge deler samtidig", "At staten finansierer det fordi markedet ikke vil produsere nok av det", "At alle har lik tilgang til det uavhengig av hva de har råd til å betale", "At det er så viktig for samfunnet at det ikke bør overlates til markedet"],
      explanation: "Begge kjennetegnene må med: min bruk reduserer ikke din, og ingen kan stenges ute. At staten ofte finansierer slike goder er en følge av egenskapene, ikke definisjonen, og en definisjon med bare ett kjennetegn plasseres lavt.",
    },
    {
      question: "Hva skiller en allmenning fra et kollektivt gode?",
      options: ["Allmenningen er rivaliserende: min bruk av den går ut over din bruk", "Allmenningen forvaltes av staten, mens det kollektive godet ikke gjør det", "Allmenningen er lokal, mens et kollektivt gode alltid er globalt av natur", "Allmenningen er alltid en naturressurs, mens godet kan være hva som helst"],
      explanation: "Både allmenningen og det kollektive godet er ikke-ekskluderbare, men allmenningen er rivaliserende — et stabilt klima er det ikke. De to er beslektede, og å sette likhetstegn mellom dem er en av de faste forvekslingene sensor trekker for.",
    },
    {
      question: "Hvorfor er klima et gratispassasjerproblem selv om alle land taper på oppvarming?",
      options: ["Fordi ingen kan stenges ute fra gevinsten, mens kuttkostnaden bæres alene", "Fordi enkelte land tjener på et varmere klima og derfor ikke ønsker kutt", "Fordi mange land mangler teknologien som skal til for å kutte tilstrekkelig", "Fordi land er kortsiktige og prioriterer økonomisk vekst framfor klimahensyn"],
      explanation: "Godet er ikke-ekskluderbart, så gevinsten av et kutt tilfaller alle, mens kostnaden bæres av den som kutter. Forklaringer med kortsiktighet eller manglende teknologi er påstander om vilje og evne — de forklarer ikke hvorfor problemet består selv når alle er enige om målet.",
    },
    {
      question: "Hva skiller en gratispassasjer fra en motstander av et klimatiltak?",
      options: ["Gratispassasjeren mener tiltaket er riktig, men vil ikke selv betale for det", "Gratispassasjeren handler bevisst strategisk, mens motstanderen handler av vane", "Gratispassasjeren er en stat, mens motstanderen er en enkeltbedrift eller borger", "Gratispassasjeren bryter en avtale, mens motstanderen aldri sluttet seg til den"],
      explanation: "Skillet gjelder hva de mener om tiltaket, ikke hvem de er eller hvor bevisste de er. Gratispassasjering kan også skje uten uttalt strategi — for eksempel ved at kuttene utsettes til andre har vist at de er mulige.",
    },
    {
      question: "Hva betyr det at statssystemet er anarkisk?",
      options: ["At det ikke finnes noen myndighet over statene som kan pålegge dem noe med tvang", "At forholdet mellom statene i praksis er preget av uorden og hyppige konflikter", "At ingen stat i systemet er sterk nok til å dominere de andre over lang tid", "At internasjonale regler ikke er bindende for stater som ikke ønsker dem"],
      explanation: "Anarki betyr fravær av et overordnet styre, ikke kaos. Det er derfor enhver klimaavtale må bygge på frivillighet — men fraværet av tvangsmakt er ikke det samme som at reglene ikke binder.",
    },
    {
      question: "Hva er deltakelsesproblemet i klimasamarbeid?",
      options: ["At en avtale bare binder dem som slutter seg til den, og harde plikter gir færre med", "At forhandlingene tar så lang tid at tiltakene kommer for sent til å virke", "At små stater har liten innflytelse på hva avtalen faktisk kommer til å inneholde av krav", "At mange stater mangler faglig kapasitet til å delta i tekniske forhandlinger"],
      explanation: "Problemet er koblingen mellom pliktenes styrke og oppslutningen: strengere krav gir færre deltakere. Tidsbruk, innflytelse og kapasitet er reelle forhold, men de er ikke det begrepet betegner.",
    },
    {
      question: "Hva er etterlevelsesproblemet i klimasamarbeid?",
      options: ["At en stat som har sluttet seg til en avtale, kan la være å gjøre det den har lovet", "At statene tolker de samme forpliktelsene ulikt og derfor rapporterer ulikt", "At avtalene sjelden sier noe konkret om hva den enkelte staten skal gjøre", "At de statene som slipper ut mest, som regel ikke har sluttet seg til avtalen"],
      explanation: "Etterlevelse gjelder hva statene gjør etter at de er blitt med, og det finnes ingen sentral myndighet som kan tvinge dem. Hvem som er med, er derimot deltakelsesproblemet — de to er ulike problemer og bør behandles hver for seg.",
    },
    {
      question: "Hvilken avveining ligger bak ordningen med nasjonalt fastsatte bidrag?",
      options: ["Bredde mot dybde: flere stater blir med, men forpliktelsene blir mildere", "Effektivitet mot rettferdighet i fordelingen av byrden mellom statene", "Offentlig regulering mot markedsbaserte virkemidler i klimapolitikken", "Kortsiktige kostnader ved kutt mot den langsiktige gevinsten av dem"],
      explanation: "Å la statene sette tallene selv gjør avtalen mulig å slutte seg til for nesten alle, men summen av det de velger er ikke nødvendigvis nok. Fordelingsspørsmålet er reelt, men det er en annen diskusjon enn den konstruksjonen svarer på.",
    },
    {
      question: "Hva menes med skillet mellom bindende form og bindende innhold?",
      options: ["Traktaten er rettslig bindende, mens plikten gjelder prosessen og ikke tallet", "Traktaten er bindende for statene, men ikke for private aktører i landene", "Traktaten er bindende først når et tilstrekkelig antall stater har ratifisert den", "Traktaten er bindende i fredstid, men kan settes til side under krise og krig"],
      explanation: "Plikten kan gjelde å melde inn, måle og rapportere uten å gjelde et bestemt resultat. Skillet lar deg si presist hva staten har forpliktet seg til, i stedet for å påstå enten at avtalen er bindende eller at den er tom.",
    },
    {
      question: "Hvorfor er rapportering og felles måling sentralt i et regime uten tvangsmakt?",
      options: ["Fordi det gjør avvik synlige og gir informasjon om hva de andre faktisk gjør", "Fordi statene har forpliktet seg rettslig til å nå de tallene de har meldt inn", "Fordi kvotesystemer teknisk sett ikke kan fungere uten et felles regnskap", "Fordi god statistikk er en forutsetning for forskning på selve klimasystemet"],
      explanation: "Synlighet er den håndhevingen som er tilgjengelig når tvang ikke er det: den gjør brudd kostbare i omdømme, gir informasjon om andres atferd, og virker gjennom at partene møtes igjen. Merk at plikten i hovedsak gjelder prosessen, ikke tallet.",
    },
    {
      question: "Hva er grensen for hva synlighet og omdømme kan utrette som håndheving?",
      options: ["Det endrer ikke regnestykket for en stat som er villig til å bære omdømmekostnaden", "Det virker bare overfor stater som allerede har sluttet seg til avtaleverket", "Det forutsetter at alle stater måler utslippene sine på nøyaktig samme måte", "Det virker langsommere enn sanksjoner, men har til gjengjeld varigere effekt"],
      explanation: "Mekanismen stopper der en stat aksepterer omdømmetapet. Det er realismens innvending mot institusjonsoptimismen, og den hører med i et balansert svar.",
    },
    {
      question: "Hva er argumentet for prinsippet om felles, men differensiert ansvar?",
      options: ["At de som har hatt gevinsten av utslippene, også har størst evne til å bære kuttene", "At utslipp virker likt uansett hvor de skjer, og derfor må fordeles jevnt", "At bare et fåtall stater i praksis har teknologi til å gjennomføre virkelig store kutt", "At stater med lave utslipp uansett ikke påvirker den samlede oppvarmingen"],
      explanation: "Argumentet knytter sammen historisk ansvar og evne til å bære byrden. Motargumentet — at utslipp virker likt uansett hvor de skjer, slik at ulike krav gir svakere samlet effekt — er også saklig, og en drøfting skal ha begge.",
    },
    {
      question: "Hvorfor er tilpasning lettere å få gjennomført enn utslippskutt?",
      options: ["Fordi den staten som tilpasser seg, selv får nesten hele nytten av tiltaket", "Fordi tilpasning gjennomgående er billigere enn utslippskutt i de fleste land", "Fordi tilpasning ikke berører næringslivet på samme måte som kutt gjør", "Fordi tilpasning kan gjennomføres uten noen form for internasjonal avtale"],
      explanation: "Tilpasning er i hovedsak et lokalt gode, og da forsvinner gratispassasjerproblemet. Kostnadsnivået og forholdet til næringslivet varierer, og forskjellen ligger i hvem som får nytten — ikke i hva tiltaket koster.",
    },
    {
      question: "Hvorfor gjør ulik karbonpris mellom land kuttene dyrere enn nødvendig?",
      options: ["Fordi kostnadsutjevningen bare skjer innenfor det området prisen gjelder", "Fordi land med lav pris får en urimelig konkurransefordel i verdensmarkedet", "Fordi ulike priser gjør det umulig å måle de samlede utslippene pålitelig", "Fordi en lav karbonpris i ett land presser prisen ned også i nabolandene"],
      explanation: "Poenget med karbonprising er at de billigste kuttene tas først. Er prisen høy ett sted og null et annet, tas dyre kutt der prisen er høy mens billige kutt andre steder ikke tas — og målet nås ikke til lavest samlet kostnad.",
    },
    {
      question: "Hva er forskjellen på en avgift og omsettelige kvoter som klimavirkemiddel?",
      options: ["Avgiften fastsetter prisen, mens kvotesystemet fastsetter mengden utslipp", "Avgiften gir staten inntekter, mens kvotesystemet ikke gjør det i det hele tatt", "Avgiften rammer produsentene, mens kvotene i praksis rammer forbrukerne", "Avgiften gir kostnadsutjevning, mens kvotene fordeler kuttene likt på alle"],
      explanation: "Begge gir kostnadsutjevning på marginen og dermed et gitt kutt til lavest samlet kostnad; forskjellen er hva myndighetene fastsetter. Også solgte kvoter gir inntekter, og hvem som til slutt bærer kostnaden avhenger av prisfølsomheten, ikke av virkemiddelet.",
    },
    {
      question: "Hva blir det viktigste stridsspørsmålet når kvoter skal brukes mellom stater?",
      options: ["Den første fordelingen av kvotene, siden den avgjør hvem som får en verdi tildelt", "Om kvoteprisen skal fastsettes av myndighetene eller av markedet selv", "Om kvotene skal gjelde alle utslipp eller bare utslipp fra industrien", "Hvorvidt kvotehandel i det hele tatt gir lavere samlede rensekostnader"],
      explanation: "Fordelingen avgjør hvem som får en verdi gratis og hvem som må kjøpe, og den er derfor politisk. At kvoteprisen dannes i markedet er selve konstruksjonen, og at handel senker samlede kostnader følger av kostnadsutjevningen.",
    },
    {
      question: "Hvilke to virkninger har et ensidig utslippskutt?",
      options: ["Utslippene faller der tiltaket gjelder, men noe produksjon kan flytte til land uten krav", "Utslippene faller varig, men kostnaden ved kuttet blir høyere enn beregnet", "Utslippene faller på kort sikt, men stiger igjen så snart tiltaket oppheves", "Utslippene faller lite, men landet får til gjengjeld større tyngde i internasjonale forhandlinger"],
      explanation: "De to virkningene trekker i hver sin retning: kuttet er reelt og kan senke kostnaden ved at andre følger etter, mens karbonlekkasje kan flytte utslipp i stedet for å fjerne dem. Hvor sterk lekkasjen er, varierer mellom næringer.",
    },
    {
      question: "Hva menes med karbonlekkasje?",
      options: ["At utslippsintensiv produksjon flytter til land uten tilsvarende krav", "At klimagasser siver ut fra anlegg som er bygd for å lagre dem trygt", "At utslippstall rapporteres i én sektor og glemmes i regnskapet for en annen", "At et land importerer varer som er produsert med langt høyere utslipp enn egne"],
      explanation: "Lekkasje betyr at utslippene flytter i stedet for å forsvinne, som følge av at kravene er ulike. Merk at dette er et argument for samordning mellom land, ikke uten videre et argument mot å kutte.",
    },
    {
      question: "Hvorfor er det viktig hvem som får inntektene fra karbonprising?",
      options: ["Fordi bruken av inntektene ofte avgjør om ordningen lar seg innføre politisk", "Fordi inntektene må øremerkes klimatiltak for at virkemiddelet skal virke", "Fordi størrelsen på inntektene bestemmer hvor mye utslippene faktisk faller", "Fordi inntektene tilfaller staten og dermed ikke er en reell kostnad for noen"],
      explanation: "Karbonprising virker ved at utslipp blir dyrere, og kostnaden treffer ulikt. At et virkemiddel er kostnadseffektivt, sier ingenting om at det er politisk gjennomførbart — og utslippsvirkningen kommer fra prisen, ikke fra hva pengene brukes til.",
    },
    {
      question: "Hvorfor spår realismen og liberalismen ulikt om utsiktene for klimasamarbeid?",
      options: ["Fordi den ene måler gevinsten relativt og den andre måler den absolutt", "Fordi den ene er pessimistisk av natur og den andre grunnleggende optimistisk", "Fordi de vurderer alvoret i klimaendringene og forskningen om dem ulikt", "Fordi den ene ser på stater som aktører og den andre på internasjonale organer"],
      explanation: "Realismen spør om noen kommer enda bedre ut; liberalismen om staten kommer bedre ut enn uten avtale. Å forklare forskjellen med stemningsord er å bytte ut mekanismen — og begge tradisjonene har stater som hovedaktør.",
    },
    {
      question: "Hva forklarer konstruktivismen best ved klimasamarbeidet?",
      options: ["At forventningen om hva en stat bør gjøre, endrer seg og dermed endrer atferd", "At institusjoner senker forhandlingskostnadene og gir informasjon om andre", "At byrdefordelingen er stridsspørsmålet fordi utslippshistorien er ujevn", "At stater vurderer avtaler ut fra hva de gjør med det innbyrdes maktforholdet"],
      explanation: "Konstruktivismen forklarer med normer og forventninger — for eksempel at det å legge fram utslippsmål er blitt noe alle gjør, slik at det å la være blir påfallende. Institusjonenes jobber er liberalismens forklaring, byrdefordelingen den strukturelle, og maktforholdet realismens.",
    },
    {
      question: "Hva sier de tre kriteriene fra Grønn skattekommisjon (NOU 2015:15)?",
      options: ["Måloppnåelse, kostnadseffektivitet og at forurenser betaler", "Måloppnåelse, rettferdig fordeling og politisk gjennomførbarhet", "Kostnadseffektivitet, forutsigbarhet for næringslivet og enkel forvaltning", "Kostnadseffektivitet, teknologiutvikling og hensynet til konkurranseevnen"],
      explanation: "De tre kriteriene er malen for å rangere virkemidler mot hverandre, og de var uttrykkelig framme i H2021 og H2022. Fordeling, forutsigbarhet og teknologiutvikling er relevante hensyn, men de er ikke de tre kriteriene.",
    },
  ],
  'inter1000-6-1': [
    {
      question: "Hva er første trinn i oppskriften på en ØK-figuroppgave?",
      options: ["Å beskrive figuren og likevekten slik markedet var før sjokket", "Å tegne inn skiftet med én gang, slik at sensor ser retningen tidlig", "Å regne ut hvor mye prisen stiger etter at sjokket kom", "Å vurdere om myndighetene burde ha grepet inn i markedet i det hele tatt"],
      explanation: "Utgangspunktet må være på plass før sjokket kan plasseres: aksene, hvorfor kurvene heller som de gjør, og hva likevekten er. Å hoppe rett på skiftet er den vanligste tidsfellen, og å regne bryter med dybdenivået faget krever. Vurderingen av virkemidler hører til den andre økonomisjangeren.",
    },
    {
      question: "Hva skiller et jevnt godt fra et meget godt svar i økonomioppgaven?",
      options: ["At mekanismen bak utfallet er skrevet ut som en kjede med flere ledd", "At figuren er tegnet nøyaktig og med alle punkter riktig navngitt", "At svaret bruker flere fagbegreper enn oppgaveteksten selv gjør", "At svaret er langt og dekker flere sjokktyper enn oppgaven ba om"],
      explanation: "Alle de ni sensorveiledningene i grunnlaget bruker en variant av at de meget gode besvarelsene pensler ut mekanismen. En nøyaktig figur sikrer presisjonen, men forklarer ingenting alene, og verken lengde eller ekstra begreper løfter et svar som mangler forklaringen.",
    },
    {
      question: "En avgift med et fast beløp per enhet legges på produsentene. Hva skjer med tilbudskurven?",
      options: ["Den løftes parallelt oppover med nøyaktig avgiftsbeløpet", "Den blir brattere fordi produksjonen blir mindre lønnsom", "Den flyttes innover med en avstand som avhenger av prisen på varen", "Den ligger fast, mens etterspørselskurven senkes med avgiftsbeløpet"],
      explanation: "Tilbudskurven forteller hvilken pris selgerne må ha for å tilby en gitt mengde, og etter avgiften må de ha akkurat avgiftsbeløpet mer ved hver eneste mengde. Derfor er skiftet parallelt og like stort overalt, ikke en endring i helningen. At etterspørselskurven senkes, er det som skjer hvis avgiften formelt legges på kjøperne i stedet.",
    },
    {
      question: "Hvorfor stiger kjøperprisen med mindre enn hele avgiften?",
      options: ["Fordi etterspurt mengde faller når prisen stiger, så selgeren må bære en del", "Fordi staten normalt betaler tilbake en andel av avgiften til produsentene", "Fordi avgiften etter loven skal deles likt mellom kjøper og selger i markedet", "Fordi produsentene senker sine egne kostnader tilsvarende når avgiften kommer"],
      explanation: "Kjeden er at et fullt påslag ville gitt lavere salg, og selgerne godtar derfor en lavere nettopris for å få solgt. Delingen følger av markedet, ikke av en regel om fordeling eller av tilbakebetaling, og produsentenes kostnader er de samme som før avgiften kom.",
    },
    {
      question: "Hva er forskjellen på at en kurve flytter seg og at man beveger seg langs den?",
      options: ["Kurven flytter seg når noe annet enn varens egen pris endrer seg", "Kurven flytter seg når prisen på varen selv endrer seg", "Bevegelse langs kurven skjer bare på lang sikt, mens skift skjer på kort sikt", "Skillet gjelder etterspørselskurven, mens tilbudskurven alltid flytter seg"],
      explanation: "Et skift skyldes noe utenfor prisen: en avgift, endrede kostnader, endret inntekt eller endrede preferanser. Endres prisen på varen selv, tilpasser aktørene mengden langs sin egen kurve. Skillet har ingenting med tidshorisont å gjøre, og det gjelder begge kurvene.",
    },
    {
      question: "Et etterspørselssjokk utover treffer et marked. Hvilken vei går pris og mengde?",
      options: ["Begge stiger, fordi selgerne beveger seg oppover langs tilbudskurven", "Prisen stiger og mengden faller, som ved en avgift på produsentene", "Prisen faller og mengden stiger, fordi det tilbys mer av varen enn før", "Begge faller, fordi markedet må finne en ny og lavere likevekt enn før"],
      explanation: "Når etterspørselen flytter seg, går pris og mengde i samme retning; når tilbudet flytter seg, går de i hver sin. At prisen stiger og mengden faller, er signaturen til et negativt tilbudssjokk, og fallende pris med økende mengde hører til et positivt ett.",
    },
    {
      question: "Hvilke tre kriterier brukes til å rangere klimavirkemidler i denne oppgavetypen?",
      options: ["Måloppnåelse, kostnadseffektivitet og at forurenser betaler", "Måloppnåelse, gjennomførbarhet og hensyn til sysselsettingen", "Kostnadseffektivitet, rettferdig fordeling mellom land og teknologisk nivå", "Marginalkostnad, gjennomsnittskostnad og alternativkostnad ved kuttene"],
      explanation: "De tre kriteriene er navngitt gjennom Grønn skattekommisjon og er eksplisitt tema i sensorveiledningene for H2021 og H2022. Politisk gjennomførbarhet og fordeling mellom land er reelle hensyn, men ikke kriteriene oppgaven ber om, og de tre kostnadsbegrepene er noe helt annet.",
    },
    {
      question: "Hvorfor når en utslippsavgift et gitt utslippsmål til lavest samlet kostnad?",
      options: ["Fordi alle møter samme pris og kutter så lenge det er billigere enn å betale", "Fordi en avgift alltid settes lavere enn kostnaden ved å rense utslippene", "Fordi staten kan bruke avgiftsinntekten til å dekke bedriftenes rensekostnader", "Fordi bedriftene da kutter like mye hver, slik at byrden blir jevnt fordelt"],
      explanation: "Når alle står overfor den samme prisen, tas kuttene der de er billigst, og kuttekostnaden på marginen ender lik hos alle. Det er verken prisnivået på avgiften eller bruken av inntekten som gir effektiviteten, og poenget er nettopp at bedriftene kutter ulikt mye.",
    },
    {
      question: "Hvorfor er uomsettelige kvoter dyrere enn omsettelige for samme utslippsmål?",
      options: ["Fordi hver aktør er låst til sin tildeling og kuttene ikke havner der de er billigst", "Fordi myndighetene må bruke mer ressurser på å kontrollere at kvotene overholdes", "Fordi kvoteprisen i et lukket system alltid blir høyere enn i et åpent system", "Fordi utslippsmålet i praksis settes strengere når kvotene ikke kan handles videre"],
      explanation: "Det er omsetteligheten som gjør en kvoteordning billig: uten handel stopper den som kunne kuttet billig ved sin egen kvote, mens den med dyre kutt må gjennomføre dem likevel. Kontrollkostnader og målnivå er andre spørsmål, og i et system uten handel finnes det ingen kvotepris å sammenligne med.",
    },
    {
      question: "Hva er den grunnleggende forskjellen mellom en avgift og en kvoteordning?",
      options: ["Avgiften fastsetter prisen, mens kvoteordningen fastsetter mengden", "Avgiften rammer produsentene, mens kvoter rammer forbrukerne", "Avgiften virker på kort sikt, mens kvoteordningen først virker på lang sikt", "Avgiften er et markedsbasert virkemiddel, mens kvoter er direkte regulering"],
      explanation: "Myndighetene kan styre den ene av de to størrelsene og må la markedet bestemme den andre. Begge er markedsbaserte når kvotene kan handles, begge kan rettes mot samme ledd i verdikjeden, og begge virker både på kort og lang sikt.",
    },
    {
      question: "Hva er hovedinnvendingen mot subsidier vurdert mot at forurenser betaler?",
      options: ["At kostnaden bæres av fellesskapet i stedet for av den som forurenser", "At subsidier alltid er dyrere for staten enn å kreve inn en avgift", "At subsidier ikke virker inn på hvilken teknologi bedriftene faktisk velger", "At subsidier er forbudt etter internasjonale handelsregler og derfor uaktuelle"],
      explanation: "En subsidie snur betalingsstrømmen: den som slipper ut, får penger for å la være, i stedet for å betale for skaden. At subsidier virker på teknologivalget, er nettopp hensikten, og handelsrettslige spørsmål er ikke det kriteriet oppgaven ber om.",
    },
    {
      question: "Hvor ligger det samfunnsøkonomisk optimale utslippsnivået?",
      options: ["Der marginal samfunnsnytte er lik marginal samfunnskostnad", "Ved null utslipp, siden all forurensning er en kostnad for samfunnet", "Der markedet selv havner når prisene får virke helt fritt uten inngrep", "På det nivået som er politisk vedtatt i den siste internasjonale avtalen"],
      explanation: "Optimum ligger der nytten av den siste enheten dekker den samlede kostnaden ved den, og det nivået er normalt positivt. Markedets eget nivå ligger høyere fordi den eksterne kostnaden ikke er priset, og et politisk vedtatt mål er en annen type størrelse enn den økonomiske betingelsen.",
    },
    {
      question: "Hva sier grunnlaget om å besvare økonomioppgaven uten figur?",
      options: ["Sensorveiledningene for H2021 og H2022 sier uttrykkelig at det er mulig", "Figur er et absolutt krav i alle terminene der oppgavetypen er brukt", "Alle de ni sensorveiledningene i grunnlaget behandler spørsmålet likt", "Det er bare mulig når oppgaveteksten selv sier at figur kan utelates"],
      explanation: "To navngitte terminer sier uttrykkelig at oppgaven kan besvares verbalt, og det er forklaringen som måles uansett. Opplysningen går ikke igjen i hele veiledningskorpuset, og den er heller ikke gjort betinget av ordlyden i den enkelte oppgaven.",
    },
    {
      question: "Hvor ofte forekommer markedsmodellen med et sjokk i grunnlaget for boka?",
      options: ["I 6 av 15 terminer — men i 6 av de 9 settene fra H2017", "I samtlige 15 terminer, siden økonomi har vært fast del av eksamen", "I 6 av 15 terminer, jevnt fordelt fra og med H2010", "I 4 av 15 terminer, alle sammen fra tiden før formen ble lagt om"],
      explanation: "Fordelingen er skjev: temaet finnes ikke i noen av de sju settene før H2017, men i seks av de ni settene fra H2017 og framover. Det gjør det til en nyere fast post, ikke en historisk konstant, og tallet 4 av 15 hører til virkemiddelvurderingen som hovedoppgave.",
    },
    {
      question: "I hvor mange terminer står virkemiddelvurderingen i miljøpolitikken som hovedoppgave?",
      options: ["I 4 av 15 terminer: H2016, H2019, H2021 og H2022", "I 9 av 15 terminer, som er det samme som klimatemaet totalt", "I 2 av 15 terminer, begge fra før H2015", "I 12 av 15 terminer, som gjør den til korpusets hyppigste tema"],
      explanation: "Fire navngitte terminer har den som hovedoppgave, mens klima, eksterne virkninger og karbonprising som tema forekommer i ni av femten. Tallet 12 av 15 hører til teoritradisjonene i internasjonal politikk, som er korpusets hyppigste enkelttema.",
    },
    {
      question: "En gruppe produsenter kutter produksjonen frivillig. Hva skjer med omsatt mengde?",
      options: ["Den faller mindre enn bortfallet, fordi høyere pris gjør annen produksjon lønnsom", "Den faller nøyaktig like mye som den produksjonen som ble kuttet bort", "Den holder seg uendret, fordi prisen tilpasser seg og markedet klareres", "Den faller mer enn bortfallet, fordi kjøperne trekker seg ut når prisen stiger"],
      explanation: "Prisen presses opp av knappheten, og den høyere prisen gjør produksjon lønnsom som ikke var det før, slik at deler av bortfallet erstattes. Å sette mengdefallet lik bortfallet overser denne responsen, og mengden kan verken være uendret eller falle mer enn bortfallet.",
    },
    {
      question: "I hvilket marked bærer kjøperen mest av en avgift per enhet?",
      options: ["Der etterspørselen er lite prisfølsom, altså der kurven er bratt", "Der etterspørselen er svært prisfølsom og kurven er slak", "Der avgiften etter loven er lagt formelt på kjøperne og ikke på selgerne", "Der markedet har mange selgere, uavhengig av hvordan kjøperne reagerer"],
      explanation: "Er kjøperne lite prisfølsomme, faller salget lite ved et påslag, og selgerne kan velte det meste over. Er de svært prisfølsomme, forsvinner salget raskt, og selgeren må ta mer selv. Hvem avgiften formelt legges på, endrer ikke fordelingen: den formelle byrden er ikke den reelle.",
    },
    {
      question: "Hva kjennetegner feilen som i boka har koden #2?",
      options: ["At skiftet og retningene er riktige, men svaret ikke sier hvorfor", "At kandidaten bruker feil kostnadsbegrep i den økonomiske analysen", "At drøftingen bare gir argumenter på den ene siden av det omstridte spørsmålet", "At svaret mangler et konkret eksempel og derfor blir stående abstrakt"],
      explanation: "Denne feilen er riktig figur uten mekanismeforklaring, og den er den vanligste enkeltfeilen i økonomidelen. Feil kostnadsbegrep er en annen kode i registeret, og det samme er ensidig drøfting og manglende eksempler.",
    },
    {
      question: "Hvilke to størrelser blandes typisk sammen i avgiftsoppgaven?",
      options: ["Hele avgiften og prisøkningen for kjøperen, som ikke er det samme", "Prisen og mengden, som alltid beveger seg i hver sin retning", "Tilbudskurven og etterspørselskurven, som begge stiger mot høyre", "Likevekten og krysningspunktet, som beskriver to ulike tilstander"],
      explanation: "Avgiften er hele avstanden mellom kjøperpris og selgerpris, mens prisøkningen bare er kjøperens del av den. Pris og mengde går bare hver sin vei ved tilbudssjokk, etterspørselskurven faller i stedet for å stige, og likevekten ER krysningspunktet.",
    },
    {
      question: "Hva løfter en virkemiddelvurdering fra beskrivelse til vurdering?",
      options: ["Å ta ett kriterium om gangen og si hvordan virkemidlene skårer på det", "Å ta ett virkemiddel om gangen og gjøre rede for hvert av dem", "Å presentere så mange virkemidler som mulig før man velger ett av dem", "Å slå fast tidlig hvilket virkemiddel som er best, og begrunne det etterpå"],
      explanation: "Sammenligningen oppstår først når virkemidlene står ved siden av hverandre under samme kriterium. Fire redegjørelser på rad er fire redegjørelser, uansett hvor gode de er, og et ekstra virkemiddel gjør svaret lengre uten å gjøre rangeringen bedre.",
    },
  ],
  'inter1000-6-2': [
    {
      question: "Hva bestiller en IP-oppgave av typen «redegjør kort og drøft med teori»?",
      options: ["En kort redegjørelse for fenomenet, og deretter en drøfting knyttet til minst én teoritradisjon", "En grundig presentasjon av alle de fire teoritradisjonene, og deretter et valg mellom dem", "En lang redegjørelse for fenomenet, og deretter en kort oppsummering av hva forskningen mener", "En sammenligning av to historiske hendelser, forklart ved hjelp av én teoretisk tilnærming"],
      explanation: "Bestillingen er todelt: kort redegjørelse, deretter drøfting med teori. Å presentere alle fire tradisjonene er den nære fellen — det gir en lang redegjørelse og ingen anvendelse. En lang redegjørelse med kort avslutning snur vektingen på hodet, og det er drøftingsleddet som avgjør karakteren.",
    },
    {
      question: "Hvor ofte forekommer IP-teoritradisjonene som analyseverktøy i grunnlaget vårt?",
      options: ["I 12 av 15 terminer, som gjør dem til korpusets hyppigste enkelttema av alle", "I 6 av 15 terminer, omtrent like ofte som markedsmodellen med et sjokk", "I 4 av 15 terminer, og alle forekomstene ligger før eksamensformen ble lagt om", "I 2 av 15 terminer, og begge gangene som et rent definisjonsspørsmål"],
      explanation: "Teoritradisjonene er telt i 12 av 15 terminer og fyller 12 av de 78 oppgave-slotsene. Tallet 6 av 15 hører til markedsmodellen med et sjokk, og 2 av 15 hører til havretten — begge er reelle tall i faget, men på andre temaer.",
    },
    {
      question: "Hvilken form hadde teorispørsmålet til og med H2014?",
      options: ["Et kort definisjonsspørsmål om hva realisme innebærer, ordrett gjentatt i fem sett på rad", "En bred drøftingsoppgave der to tradisjoner skulle anvendes på en pågående konflikt", "Et flervalgsspørsmål der kandidaten skulle plassere påstander på riktig teoritradisjon", "En sammenligning av realismen og liberalismen ut fra en oppgitt tekst i settet"],
      explanation: "Fra H2010 til H2014 sto spørsmålet om hva realisme innebærer ordrett i fem sett på rad, som et kort definisjonsspørsmål. Kravet om å anvende tradisjonene analytisk kommer først fra H2016, og flervalg har aldri vært formen i dette emnet.",
    },
    {
      question: "Hva betyr det at oppgavegjenbruket gjelder spørsmålene og ikke rubrikken?",
      options: ["Samme spørsmål kan komme igjen, men instruks, vekting og tid står i ditt eget sett", "Samme spørsmål kan komme igjen, og da gjelder også fjorårets vekting og tidsbruk", "Bare rubrikken gjenbrukes mellom terminene, mens spørsmålene skrives nye hver gang", "Hele oppgavesettet gjenbrukes, slik at det holder å øve grundig på ett tidligere sett"],
      explanation: "H2010 og H2012 stiller de samme fem spørsmålene ordrett, men H2010 vekter den store oppgaven til 75 prosent, mens H2012 oppgir fire timer og ingen vekting. Kjenn igjen spørsmålet, og les rubrikken i ditt eget sett — og merk at det er enkeltoppgaver som gjenbrukes, ikke hele sett.",
    },
    {
      question: "Hva innebærer det at teorikoblingen i H2021 og H2024 er invitert og ikke påbudt?",
      options: ["Teorien skal med bare der den identifiserer en mekanisme svaret ellers ikke ville hatt", "Teorien er valgfri, og et svar med teori vil derfor aldri bli vurdert høyere enn et uten", "Teorien må uansett med, siden en invitasjon i praksis fungerer som et krav fra sensor", "Teorien skal med, men bare i form av en kort presentasjon av den valgte tradisjonen"],
      explanation: "Formuleringen «ta gjerne utgangspunkt i» er en åpning, og sensorveiledningen fra H2021 advarer mot å lese den som et påbud. Teori som gjør en jobb, løfter alltid; teori som bare fyller plass, trekker ned. At teori aldri løfter, er like galt som at den alltid er påkrevd.",
    },
    {
      question: "Hva skal styre valget av teoritradisjon i en besvarelse?",
      options: ["Hvilken mekanisme fenomenet krever forklart, altså hva som faktisk skal forklares", "Hvilken tradisjon kandidaten kan best, siden presisjon veier tyngst av alt på eksamen", "Hvilken tradisjon som er mest brukt i pensumlitteraturen for det aktuelle emnet", "Hvilken tradisjon som er nevnt først i oppgaveteksten, siden den er ment som styrende"],
      explanation: "Tradisjonen velges som verktøy: handler saken om gevinstfordeling, usikkerhet, normendring eller hvem ordningen tjener? Å velge etter hva man kan best, er den vanligste fellen — da må halve svaret brukes på å forklare bort at antakelsene passer dårlig.",
    },
    {
      question: "Hvilke tre grep kjennetegner teori som er anvendt?",
      options: ["Forventningen i dette tilfellet, mekanismen bak den, og prøven mot noe i saken", "Definisjonen av tradisjonen, avsenderen bak den, og et eksempel fra pensumlitteraturen", "Presentasjon av to tradisjoner, en kort sammenligning, og en avsluttende oppsummering", "Påstanden tradisjonen bygger på, kritikken mot den, og et forsvar mot den kritikken"],
      explanation: "Anvendelse er forventning, mekanisme og prøve: hva tradisjonen venter her, hvorfor den venter det, og hva i saken som stemmer eller ikke stemmer. Å oppgi definisjon, avsender og et pensumeksempel er presist gjengitt teori — det gir uttelling på det redegjørende leddet, ikke på drøftingen.",
    },
    {
      question: "Hvordan tester du om et teoriavsnitt er anvendt eller bare ramset?",
      options: ["Bytt ut fenomenet med et annet: står avsnittet fortsatt like riktig, er teorien ramset", "Tell setningene: er de færre enn fem, er teorien ramset", "Se om tradisjonen er navngitt med avsender: mangler avsenderen, er teorien bare ramset", "Se om avsnittet nevner mer enn én tradisjon: gjør det ikke, er teorien nesten alltid ramset"],
      explanation: "Byttetesten er avgjørende fordi ramset teori er sann om alt og forklarer ingenting. Lengde, avsendernavn og antall tradisjoner sier ingenting om anvendelse — et kort avsnitt kan være fullt anvendt, og et langt med riktig avsender kan være rent referat.",
    },
    {
      question: "Hva er en kontrastering i denne sjangeren?",
      options: ["Ett punkt der to tradisjoner venter ulikt, med en prøve på hvem som har rett", "To avsnitt som beskriver hver sin tradisjon, plassert rett etter hverandre i teksten", "En vurdering av hvilken tradisjon som er mest utbredt blant forskerne på feltet", "En liste over styrker og svakheter ved hver av de fire tradisjonene i faget"],
      explanation: "Kontrastering krever ett skillepunkt og en prøve: hva måtte vi observere for at den ene skulle ha rett? To beskrivelser ved siden av hverandre er den nære fellen — de gir sensor ingenting å vurdere, fordi ingenting er veid mot noe.",
    },
    {
      question: "Hva sier stryketesten om en setning i besvarelsen din?",
      options: ["Setningen gjør en jobb hvis svaret blir dårligere uten den, ikke bare kortere", "Setningen gjør en jobb hvis den inneholder et fagbegrep som er definert tidligere", "Setningen gjør en jobb hvis den kan flyttes til et annet avsnitt uten å bli uklar", "Setningen gjør en jobb hvis den er knyttet til minst én av de fire vurderingsaksene"],
      explanation: "Kriteriet er om svaret blir dårligere uten setningen. At en setning inneholder et fagbegrep eller lar seg flytte, sier ingenting om den forklarer, innvender eller presiserer noe — og det er nettopp det testen måler.",
    },
    {
      question: "Hva måler relative gevinster?",
      options: ["Egen gevinst målt opp mot motpartens gevinst i den samme avtalen", "Egen gevinst målt mot hvordan det ville vært uten avtalen", "Den samlede gevinsten begge parter sitter igjen med etter at avtalen er inngått", "Gevinsten en stat får på lang sikt, målt opp mot gevinsten den får umiddelbart"],
      explanation: "Relative gevinster måles mot motpartens gevinst; absolutte gevinster måles mot situasjonen uten avtale. Forvekslingen mellom de to er den dyreste i sjangeren, fordi hele uenigheten mellom realisme og liberalisme om samarbeid følger av dette ene skillet.",
    },
    {
      question: "Hvor venter liberalismen at brudd på en internasjonal ordning oppstår?",
      options: ["Der overvåkingen er svakest, siden usikkerhet om de andres innsats er hovedproblemet", "Der gevinstfordelingen er skjevest, siden forspranget kan omsettes i maktmidler senere", "Der ordningen har eksistert lengst, siden vanen gjør at partene slutter å følge med", "Der flest stater deltar, siden en avtale med mange parter alltid blir vanskeligst å håndheve"],
      explanation: "Liberalismen forklarer brudd med usikkerhet, og venter dem derfor der innsatsen er minst synlig. At bruddene kommer der gevinstfordelingen er skjevest, er realismens forventning — den følger av at det er den relative posisjonen som teller.",
    },
    {
      question: "Hvordan tester du om du faktisk har skrevet en mekanismesetning?",
      options: ["Se om alt etter «fordi» kan byttes ut med utfallet uten at meningen endrer seg", "Se om setningen inneholder ordet «fordi», som er kjennetegnet på en mekanisme", "Se om setningen viser til et konkret eksempel med årstall fra en av disiplinene", "Se om setningen står tidlig i avsnittet, siden mekanismen alltid hører hjemme først"],
      explanation: "Kan alt etter «fordi» erstattes med selve utfallet, er setningen en omskrivning og ikke en forklaring — «samarbeid er vanskelig fordi stater ikke samarbeider» er den rene formen. Selve ordet «fordi» garanterer altså ingenting, og plasseringen i avsnittet enda mindre.",
    },
    {
      question: "Hvilken av disse er ikke en begrunnet landing?",
      options: ["«Begge tradisjonene har noe for seg, og spørsmålet er sammensatt.»", "«Realismen forklarer best, fordi fravikene følger sikkerhet.»", "«Liberalismen holder så lenge tvisteløsningen fungerer; svikter den, snur bildet.»", "«Den ene forklarer hvor fravikene kommer, den andre hvorfor de forblir avgrensede.»"],
      explanation: "En landing svarer på spørsmålet med grunner. Å konstatere at spørsmålet er sammensatt, er en utsettelse og regnes som ren gjengivelse uten drøfting. Skarp, betinget og delt landing er alle fullgode former på toppnivå, så lenge grunnene står.",
    },
    {
      question: "Hvilken jobb har eksempelet i en IP-drøfting?",
      options: ["Det skal prøve forventningen tradisjonen ga, med en setning om hva det viser", "Det skal illustrere at fenomenet finnes, slik at leseren får noe konkret å se for seg", "Det skal erstatte mekanismeforklaringen, siden et godt eksempel forklarer av seg selv", "Det skal vise bredde i pensum, og bør derfor hentes fra en annen disiplin enn oppgaven"],
      explanation: "Eksempelet skal belegge en påstand, og «dette viser at» er setningen som gjør jobben. Et eksempel som bare illustrerer at fenomenet finnes, står som pynt — og et eksempel kan aldri erstatte mekanismen, som forklarer hvorfor.",
    },
    {
      question: "Hva er feil #4 i bokas feilregister?",
      options: ["Teori nevnt, men ikke anvendt på det oppgaven faktisk handler om", "Ensidig drøfting der oppgaven ber om en balansert vurdering", "Flate eller upresise definisjoner av sentrale begreper i det redegjørende leddet", "Manglende eksempler, slik at svaret blir abstrakt og uten empirisk forankring"],
      explanation: "Feil #4 er at tradisjonen presenteres korrekt uten å brukes til å forklare noe i saken. Ensidig drøfting er #5, flate definisjoner er #3, og manglende eksempler er #7 — alle tre er nabofeil som ofte opptrer i samme besvarelse.",
    },
    {
      question: "Hva er testen på om drøftingen din unngår feil #5?",
      options: ["Ville en som er uenig med deg, kjent igjen sitt eget argument i din gjengivelse?", "Har du nevnt minst to tradisjoner et sted i drøftingsleddet av besvarelsen?", "Har du brukt like mange linjer på hver av de to sidene i drøftingen?", "Har du unngått å konkludere, slik at begge posisjoner blir stående likestilt?"],
      explanation: "Feil #5 er ensidig drøfting, og motgiften er å gjengi motargumentet i sin sterkeste form — derfor er gjenkjennelsestesten den riktige. Like mange linjer er ingen garanti mot stråmenn, og å unngå å konkludere er en egen feil: landingen skal komme.",
    },
    {
      question: "Hvor mye tid får hver oppgave når instruksen ber om tre besvarelser?",
      options: ["Snaue 55 minutter, mot rundt 80 når instruksen ber om to besvarelser", "Rundt 80 minutter, altså det samme som når instruksen ber om to besvarelser", "Rundt 40 minutter, siden kontrolltiden da faller bort for alle oppgavene", "Rundt 100 minutter, siden eksamenstiden utvides når antallet oppgaver øker"],
      explanation: "Tre timer delt på tre oppgaver gir snaut 55 minutter hver, mot rundt 80 ved to. Antallet har variert: i H2025 ba instruksen om tre av fire oppgaver, mens den i H2021 til H2024 ba om to — så les instruksen i ditt eget sett før du planlegger tiden.",
    },
    {
      question: "Hva er hovedprinsippet om ikke-diskriminering i det globale frihandelsregimet?",
      options: ["Samme vilkår til alle handelspartnere, og lik behandling av importerte og innenlandske varer", "Samme tollsats på alle varegrupper, slik at ingen næring får bedre vilkår enn andre", "Samme rett for alle stater til å skjerme unge næringer inntil de er konkurransedyktige", "Samme stemmevekt for alle medlemsstater i avgjørelser om regimets felles regelverk"],
      explanation: "Ikke-diskriminering har to sider: bestevilkårsprinsippet utad og nasjonal behandling innad. Retten til å skjerme unge næringer er infant industry-argumentet, som er et motargument mot regimet — ikke et av prinsippene det bygger på.",
    },
    {
      question: "Hva forklarer konstruktivismen som verken relative eller absolutte gevinster fanger?",
      options: ["At stater som bryter en ordning, likevel begrunner bruddet i ordningens eget språk", "At stater som bryter en ordning, gjør det når kostnaden ved å følge den blir for høy", "At stater som bryter en ordning, taper omdømme og derfor får dyrere avtaler senere", "At stater som bryter en ordning, gjør det oftere når den sterkeste parten går foran"],
      explanation: "At bruddet påberoper seg unntakene i ordningen, viser at forventningen fortsatt står — normen er strukket, ikke borte. De øvrige forklaringene er kostnadsregnestykker, og de kan begge skrives helt uten normbegrepet.",
    },
  ],
  'inter1000-6-3': [
    {
      question: "Hva er den bærende bestillingen i historieoppgaven (HRE) i INTER1000?",
      options: ["Forklare et historisk fenomen og forankre det i minst ett konkret eksempel", "Presentere en teoritradisjon og deretter anvende den på det historiske fenomenet", "Gjengi hendelsene i kronologisk rekkefølge fra begynnelsen og fram til avslutningen", "Vurdere hvilke rettsregler som gjaldt mellom statene i den aktuelle perioden"],
      explanation: "Historieoppgaven ber om et presist forklart fenomen som er empirisk forankret i minst ett konkret eksempel. Å anvende en teoritradisjon er kjernen i IP-oppgaven, ikke i historieoppgaven; en ren kronologi er den vanligste formen for ren gjengivelse uten drøfting.",
    },
    {
      question: "Hva må til for at et eksempel skal telle på vurderingsaksen for empirisk forankring?",
      options: ["Det må være konkret, tidfestet og koblet til påstanden med en setning om hva det viser", "Det må være hentet fra pensumboka og gjengitt med de samme ordene som forfatteren bruker", "Det må være en hendelse som ingen historikere er uenige om hvordan skal forklares", "Det må være så detaljert beskrevet at leseren kan følge hendelsesforløpet fra dag til dag"],
      explanation: "Et eksempel teller når det er konkret, tidfestet og koblet til påstanden det skal belegge. Den nære fellen er å tro at mengden detaljer avgjør: et fyldig referat uten en setning om hva hendelsen viser, gir ingen uttelling.",
    },
    {
      question: "Hvordan skifter oppgaven om den kalde krigen karakter gjennom grunnlagets 15 terminer?",
      options: ["Fra H2011 til H2014 spørres det om krigens slutt, fra H2017 om utbrudd og oppdemming, og i H2024 om Sikkerhetsrådet i praksis", "Fra H2011 til H2014 spørres det om utbruddet, og fra H2017 utelukkende om Sikkerhetsrådets rolle under konflikten", "Temaet stilles i samme form i alle terminene, slik at ett innøvd svar dekker hele oppgavefamilien", "Temaet opptrer bare i de eldste settene og er ute av bruk i alle de fem settene fra H2021"],
      explanation: "Bestillingen endrer seg selv om temaordet er det samme: først slutten, så utbruddet og oppdemmingen, og i H2024 Sikkerhetsrådet under den kalde krigen. Fellen er å tro at ett innøvd svar dekker hele familien — bruker du utbruddssvaret på et sluttspørsmål, er alt riktig og ingenting besvart.",
    },
    {
      question: "Hvor hyppig er den kalde krigen som eksamenstema i grunnlaget?",
      options: ["9 av 15 terminer, og dermed historiesøylens hyppigste tema", "4 av 15 terminer, altså like hyppig som Folkeforbundet og mellomkrigsordenen", "2 av 15 terminer, og med siste forekomst i H2019", "15 av 15 terminer, siden temaet er nevnt i hver eneste termin i arkivet"],
      explanation: "Den kalde krigen forekommer i 9 av 15 terminer og fyller 12 av de 78 talte oppgave-slotsene. Tallet 4 av 15 hører til Folkeforbundet, mellomkrigsordenen og FNs oppbygging — de to må ikke forveksles når du prioriterer lesetid.",
    },
    {
      question: "Hvem formulerte oppdemmingstenkningen, og hvor?",
      options: ["George Kennan, i Det lange telegram i februar 1946", "President Truman, i den doktrinen som ble lagt fram i 1947", "George Kennan, i den doktrinen som ble lagt fram for kongressen i 1947", "Utenriksminister Marshall, i talen som lanserte hjelpeprogrammet i 1947"],
      explanation: "Kennan formulerte tenkningen i Det lange telegram i februar 1946. Truman-doktrinen fra 1947 er den politiske utformingen av den samme tenkningen, og Marshall-hjelpen er det økonomiske sidestykket — å slå sammen Kennan og Truman-doktrinen er den vanligste faktafeilen i denne oppgaven.",
    },
    {
      question: "Hva skiller oppdemming fra nabobegrepene tilbakerulling og ettergivenhet?",
      options: ["Oppdemming hindrer videre utbredelse, mens tilbakerulling presser innflytelsen ut av områder den har nådd", "Oppdemming presser innflytelsen tilbake med militære midler, mens tilbakerulling holder stillingen slik den allerede er", "Oppdemming aksepterer videre utbredelse mot innrømmelser, mens ettergivenhet møter den med fasthet", "Oppdemming og tilbakerulling betyr det samme, mens ettergivenhet er det motsatte av begge"],
      explanation: "Oppdemming ligger mellom de to nabobegrepene: den hindrer videre utbredelse uten å presse noe tilbake med militærmakt og uten å gi innrømmelser. Nettopp derfor kunne strategien føres i flere tiår uten at det ble storkrig mellom supermaktene.",
    },
    {
      question: "Hva viser Berlin-blokaden fra juni 1948 til mai 1949 om oppdemmingen i praksis?",
      options: ["At press ble møtt med fasthet, men med midler som ikke ga rom for et militært svar", "At strategien fra starten forutsatte militær innsats overalt der innflytelsen bredte seg", "At vestmaktene valgte å forhandle fram innrømmelser framfor å holde stillingen", "At blokkdannelsen i Europa først kom i gang etter at Koreakrigen var avsluttet"],
      explanation: "Vestmaktene svarte med luftbro i stedet for å tvinge seg fram på bakken, og det viser fasthet uten eskalering. Den militære og globale siden av oppdemmingen kommer først tydelig fram i Koreakrigen fra 1950 til 1953 — de to eksemplene viser to ulike sider av samme strategi.",
    },
    {
      question: "Hva er en historiografisk debatt?",
      options: ["Uenighet blant historikere om hvordan et fenomen forklares, ikke om hva som skjedde", "En uenighet mellom historikere om hvilke hendelser som faktisk fant sted og når de skjedde", "En metodestrid om hvordan kilder skal vurderes og etterprøves av andre forskere", "En politisk strid om hvordan fortiden bør framstilles i skoleverkets læreplaner"],
      explanation: "Debatten gjelder forklaringen, ikke hendelsesforløpet. Den nære fellen er å tro at uenigheten gjelder fakta — i så fall ville oppgaven bedt deg fastslå hva som skjedde, mens den i stedet ber deg vise to forklaringer og lande begrunnet.",
    },
    {
      question: "Hva er de to hovedposisjonene i debatten om hvorfor den kalde krigen brøt ut?",
      options: ["Ideologiforklaringen, som setter uforenlige samfunnssyn først, og maktpolitikkforklaringen, som setter strukturen først", "Ideologiforklaringen, som setter økonomisk konkurranse først, og maktpolitikkforklaringen, som setter religion først", "Personforklaringen, som setter lederne først, og systemforklaringen, som setter de internasjonale organisasjonene først", "Den rettslige forklaringen, som setter traktatbruddene først, og den økonomiske, som setter handelen først"],
      explanation: "Ideologiforklaringen forklarer konflikten med at to universelle samfunnssyn møttes, maktpolitikkforklaringen med at to stater sto igjen på toppen av et sammenrast statssystem og måtte sikre seg mot hverandre. Å gjengi begge i sin sterkeste form er markøren for meget god i denne oppgaven.",
    },
    {
      question: "Hva kjennetegner en vektet forklaring, til forskjell fra en oppramsing av årsaker?",
      options: ["Den sier hvilken årsak som forklarer hva, og hva den ikke forklarer", "Den nevner flest mulig årsaker, slik at ingen viktig faktor blir utelatt fra svaret", "Den velger én årsak og lar alle de andre stå ubehandlet i teksten", "Den slår fast at spørsmålet er sammensatt og at flere forhold virket sammen"],
      explanation: "Vektingen består i å si hva hver forklaring forklarer og hvor den kommer til kort. Formuleringen om at noe er sammensatt er faglig riktig, men uten den fordelingen er den ingen landing — den er ren gjengivelse i ny drakt.",
    },
    {
      question: "Hva rammer feilkode #7 i bokas register?",
      options: ["Manglende eksempler, også der eksempelet står uten at svaret sier hva det viser", "Manglende drøfting, altså at svaret gjengir stoffet uten å vurdere noe", "Manglende presisjon i definisjonene, slik at begrepet ikke skilles fra nabobegrepet", "Manglende tverrfaglighet, altså at svaret bare bruker én av de fire disiplinene"],
      explanation: "Feil #7 gjelder empirisk forankring, og den dekker begge variantene: ingen eksempler, og eksempler uten en setning om hva de viser. Ren gjengivelse uten drøfting er feil #1, og flate definisjoner er feil #3 — tre ulike koder i et register som har nøyaktig ti.",
    },
    {
      question: "Hva er kravet når et oppgaveledd ber deg sammenligne to ordninger?",
      options: ["Begge ledd skal behandles på hver sammenligningsakse, ikke i hver sin bolk", "Hver ordning skal først framstilles ferdig for seg, og forskjellene oppsummeres til slutt", "Den ene ordningen skal beskrives grundig, og den andre nevnes der den avviker", "Aksene skal være gitt i oppgaveteksten, slik at kandidaten ikke velger dem selv"],
      explanation: "Kravet er at begge ledd står i hvert eneste aksavsnitt — ellers har du levert to redegjørelser, som er feil #6. Kandidaten velger dessuten aksene selv, og aksevalget er en del av det som vurderes.",
    },
    {
      question: "Hvorfor er «Folkeforbundet feilet fordi USA ikke ble med» et utilstrekkelig svar?",
      options: ["Stormaktsfraværet er én forklaring; enstemmighet og manglende tvangsmakt er de andre", "Stormaktsfraværet er uten betydning, siden forbundet uansett rådde over egne tvangsmidler", "Påstanden er feil, fordi alle datidens stormakter faktisk var medlemmer hele veien", "Forbundet fungerte etter hensikten, slik at spørsmålet om svikt ikke oppstår"],
      explanation: "Fraværet av stormakter er en reell forklaring, men bare én av flere: enstemmighetskravet i rådet og mangelen på egen tvangsmakt virket samtidig. Et svar på toppnivå vekter de tre mot hverandre i stedet for å oppgi den ene.",
    },
    {
      question: "Hvilken linje går fra Wilsons 14 punkter til Folkeforbundet?",
      options: ["Programmet fra januar 1918 satte prinsippene, forbundspakten kom inn i Versaillestraktaten i 1919, og forbundet ble opprettet i 1920", "Programmet fra januar 1918 opprettet forbundet direkte, og Versaillestraktaten bekreftet det i 1920", "Forbundet ble opprettet i 1918 og fikk sine prinsipper nedfelt i Versaillestraktaten året etter", "Programmet ble lagt fram i 1919 og førte til at forbundet ble opprettet allerede samme høst"],
      explanation: "Rekkefølgen er program i januar 1918, forbundspakt som del av fredsoppgjøret i 1919, og opprettelse i 1920. Årstallene er verdt å ha presist, fordi de viser at organisasjonen ble bygget inn i et fredsoppgjør og ikke skapt uavhengig av det.",
    },
    {
      question: "Hvilken rettslig status hadde FNs verdenserklæring om menneskerettighetene fra 10. desember 1948?",
      options: ["Den var en erklæring, og altså ikke i seg selv en bindende traktat", "Den var en traktat som bandt alle FNs medlemsstater fra vedtakelsesdagen", "Den var en sedvaneregel som allerede var bindende da den ble skrevet ned", "Den var et vedtak i Sikkerhetsrådet med bindende virkning etter FN-pakten"],
      explanation: "Verdenserklæringen ble vedtatt som en erklæring, ikke som en bindende traktat, og skillet er selve presisjonspoenget i dateringsdebatten. Å behandle den som traktat er en flat begrepsbruk som plasseres lavt på presisjonsaksen.",
    },
    {
      question: "Hva står striden om når historikere daterer menneskerettighetenes gjennombrudd?",
      options: ["Om gjennombruddet skal måles i at standarden ble formulert, eller i at den begynte å koste noe for stater som brøt den", "Om Verdenserklæringen ble vedtatt i 1948 eller på et senere tidspunkt på 1950-tallet", "Om rettighetene først ble formulert i Europa eller i de nye statene etter avkoloniseringen", "Om rettighetene hører hjemme i folkeretten eller utelukkende i nasjonal rett"],
      explanation: "Uenigheten gjelder hva ordet gjennombrudd skal måles i: normativ formulering i 1948, eller politisk og institusjonell virkning på 1970-tallet. Fellen er å lese debatten som en uenighet om årstall for én bestemt hendelse — datoen for Verdenserklæringen er det ingen strid om.",
    },
    {
      question: "Hva innebærer det at oppgaveformuleringer er dokumentert gjenbrukt mellom terminene?",
      options: ["At spørsmålet kan komme igjen, men at instruks, vekting og tid står i ditt sett", "At hele oppgavesettet gjentas, slik at det holder å øve på ett tidligere sett", "At en bestemt oppgave med sikkerhet kommer igjen i den neste terminen", "At vektingen følger med spørsmålet, slik at fjorårets rubrikk kan legges til grunn"],
      explanation: "Gjenbruket gjelder spørsmålene, ikke rubrikken: H2010 vekter den store oppgaven til 75 prosent av karakteren, mens H2012 stiller de samme spørsmålene, oppgir fire timer og ingen vekting. Det er enkeltoppgaver som gjenbrukes, ikke hele sett, og gjenbruk er en dokumentert mulighet og ingen garanti.",
    },
    {
      question: "Hvordan bør de 80 minuttene fordeles i en historieoppgave når instruksen ber om to besvarelser?",
      options: ["Rundt 15 minutter på fenomenet, 15 på eksemplene, 35 på drøftingen og 15 på kontroll", "Rundt 40 minutter på fenomenet og hendelsesforløpet, 25 på eksemplene og 15 på kontroll", "Rundt 60 minutter på en fyldig kronologi og 20 minutter på en kort avsluttende vurdering", "Rundt 20 minutter på hvert av de fire trinnene, uten tid satt av til gjennomlesing"],
      explanation: "Tyngdepunktet ligger på drøftingen, fordi drøftingsleddet avgjør karakteren. Den vanligste tidsfellen i historieoppgaven er å skrive en lang og korrekt fortelling først, og så oppdage at det er ti minutter igjen til det som teller mest.",
    },
  ],
  'inter1000-6-4': [
    {
      question: "I hvilken rekkefølge disponeres en folkerettsoppgave (JRE) i INTER1000?",
      options: ["Hovedregelen med bestemmelsen navngitt, deretter unntakene med vilkårene, så det omstridte punktet og drøftingen", "Unntakene først, siden det er de som brukes i praksis, og hovedregelen til slutt som en oppsummering", "Det omstridte punktet først, deretter regelen, og til slutt en gjennomgang av rettskildene som er brukt", "Eksempelet først, slik at leseren kjenner situasjonen før regelen og unntakene presenteres i tur"],
      explanation: "Folkeretten er bygget som regel og unntak, og svaret skal følge den samme oppbygningen. Et svar som åpner med unntakene, etterlater leseren uten ankeret resten av framstillingen skal måles mot — rekkefølgen er en del av forståelsen, ikke pynt.",
    },
    {
      question: "Hva innebærer ikke-jurist-kalibreringen i folkerettsoppgaven?",
      options: ["At det ikke kreves juridisk stringens, men at presisjon i regel og bestemmelse fortsatt gjelder fullt ut", "At kravet til presisjon er lempet, slik at feil bestemmelse til riktig regel ikke får betydning", "At kandidaten forventes å beherske rettskildevekting, men slipper å analysere enkeltavgjørelser", "At folkerettsoppgaven vurderes mildere enn de tre andre oppgavene i settet ved sensuren"],
      explanation: "Mildhetsforbeholdet gjelder hvor dypt du skal gå, ikke hvor nøyaktig du skal være. Den nære fellen er å lese det som et fritak fra presisjon: riktig bestemmelse til riktig regel er inngangsbilletten, og den kan ikke oppveies av god drøfting.",
    },
    {
      question: "Hvilken bestemmelse inneholder maktforbudet, og hva regulerer nabobestemmelsen?",
      options: ["FN-pakten artikkel 2(4) er maktforbudet, og artikkel 2(7) er intervensjonsforbudet", "FN-pakten artikkel 2(7) er maktforbudet; artikkel 2(4) er intervensjonsforbudet", "FN-pakten artikkel 51 er maktforbudet; artikkel 2(4) gjelder Sikkerhetsrådets myndighet", "FN-pakten artikkel 39 er maktforbudet; artikkel 2(4) gjelder statenes suverene likhet"],
      explanation: "Maktforbudet står i artikkel 2(4) og retter seg mot statene. Artikkel 2(7) er intervensjonsforbudet og retter seg mot organisasjonen: FN skal ikke gripe inn i forhold som i det vesentlige ligger under en stats egen jurisdiksjon. De to forveksles fordi de står i samme artikkel og verner den samme grunnverdien på hver sin måte.",
    },
    {
      question: "Hvilke vilkår gjelder for selvforsvarsretten etter FN-pakten artikkel 51?",
      options: ["Et væpnet angrep må foreligge, og maktbruken må være nødvendig og forholdsmessig", "Et væpnet angrep må foreligge, og staten må ha varslet Sikkerhetsrådet på forhånd", "Staten må ha forsøkt forhandlinger, og maktbruken må være godkjent av en regional organisasjon", "Staten må ha erklært krig, og maktbruken må begrenses til eget territorium og eget luftrom"],
      explanation: "Det utløsende vilkåret er et væpnet angrep, og de to begrensende vilkårene er nødvendighet og proporsjonalitet. Den vanligste ufullstendigheten er å nevne bare det utløsende vilkåret — da er unntaket halvveis gjengitt, og drøftingen mister det den skulle ta tak i.",
    },
    {
      question: "Hva er kjeden når Sikkerhetsrådet autoriserer bruk av makt?",
      options: ["Rådet konstaterer en trussel mot freden, kan vedta tiltak uten våpenmakt, og deretter militære tvangstiltak", "Rådet ber Generalforsamlingen om samtykke, og vedtar deretter militære tvangstiltak med simpelt flertall", "Rådet henviser saken til Den internasjonale domstolen, som avgjør om maktbruk kan autoriseres", "Rådet fastslår at en stat har brutt en traktat, og gir deretter den fornærmede staten fullmakt"],
      explanation: "Rådet konstaterer først at det foreligger en trussel mot freden etter artikkel 39, kan så vedta tiltak uten våpenmakt etter artikkel 41, og om nødvendig militære tvangstiltak etter artikkel 42; vedtakene binder medlemsstatene etter artikkel 25. Generalforsamlingen og domstolen har ingen slik autorisasjonsmyndighet.",
    },
    {
      question: "Hvilken status har R2P, ansvaret for å beskytte, i folkeretten?",
      options: ["Et politisk vedtatt prinsipp, som ikke i seg selv er et rettslig grunnlag for maktbruk", "Et selvstendig rettslig grunnlag for maktbruk når overgrepene er tilstrekkelig alvorlige", "En traktatfestet plikt som binder alle FNs medlemsstater til å gripe inn ved overgrep", "En ufravikelig norm som går foran maktforbudet i tilfeller av grove menneskerettsbrudd"],
      explanation: "R2P er et politisk vedtatt prinsipp, og der militære midler forutsettes, viser det videre til Sikkerhetsrådet. Å skrive at prinsippet gir rett til intervensjon er en direkte feil — og nettopp fordi det ikke gjør det, er humanitær intervensjon uten mandat omstridt og gjenstand for balansert drøfting.",
    },
    {
      question: "Hvilke to vilkår må være oppfylt for at det foreligger en folkerettslig sedvane?",
      options: ["Statspraksis over tid, og rettsoppfatningen om at den praksisen er rettslig påbudt", "Statspraksis over minst femti år og tilslutning fra et flertall av FNs medlemsstater", "En skriftlig nedtegning av praksisen og tilslutning fra Den internasjonale domstolen", "Rettsoppfatningen om at praksisen er påbudt og et vedtak i FNs generalforsamling"],
      explanation: "Sedvane krever både statspraksis og opinio juris. Uten kravet om rettsoppfatning ville enhver innarbeidet skikk blitt rettsregel, siden stater gjør mye jevnt og trutt av høflighet eller egeninteresse — praksis uten opinio juris er derfor bare vane, og ingen fast tidsgrense eller nedtegning kreves.",
    },
    {
      question: "Hva skiller en traktat fra en sedvane?",
      options: ["Traktaten oppstår ved uttrykkelig samtykke og binder i utgangspunktet bare avtalepartene", "Traktaten oppstår gjennom praksis over tid, mens sedvanen krever uttrykkelig samtykke", "Traktaten binder alle stater uansett tilslutning, mens sedvanen bare binder partene", "Traktaten gjelder mellom stater, mens sedvanen bare gjelder mellom internasjonale organer"],
      explanation: "Forskjellen ligger både i hvordan regelen blir til og i hvem den binder: traktaten hviler på uttrykkelig samtykke og binder partene, mens sedvanen vokser fram av praksis og rettsoppfatning og binder statene generelt. Å bytte om de to måtene regelen oppstår på, er den nærmeste fellen her.",
    },
    {
      question: "Hvilken bestemmelse lister opp folkerettens rettskilder?",
      options: ["ICJ-statutten artikkel 38", "Artikkel 38 i selve FN-pakten", "FN-pakten artikkel 25 om bindende vedtak", "Havrettskonvensjonens innledende bestemmelser"],
      explanation: "Rettskildene er listet i ICJ-statutten artikkel 38, som nevner traktater, sedvane og alminnelige rettsprinsipper, med rettsavgjørelser og juridisk teori som hjelpemidler. Kilden er altså vedtektene til domstolen i Haag, ikke FN-pakten — å navngi bestemmelsen er innenfor emnets tak, mens det å veie kildene mot hverandre ligger over det.",
    },
    {
      question: "Hva innebærer dualisme?",
      options: ["At folkerett og nasjonal rett er to systemer, og at regelen må gjennomføres for å virke internt", "At staten ikke er folkerettslig bundet før regelen er gjennomført i nasjonal lovgivning", "At folkerett og nasjonal rett utgjør ett system, slik at regelen virker internt uten videre", "At nasjonale domstoler kan sette folkerettslige regler til side når de strider mot nasjonal lovgivning"],
      explanation: "Dualismen gjelder gjennomføringen internt, ikke den folkerettslige bindingen: staten er bundet utad uansett. Å skrive at dualisme betyr at staten ikke er bundet, er en flat framstilling av begrepet, og synet på ett felles system er monisme.",
    },
    {
      question: "Hva innebærer presumpsjonsprinsippet?",
      options: ["At nasjonal rett så langt det er mulig tolkes i samsvar med statens folkerettslige forpliktelser", "At folkeretten alltid går foran nasjonal rett dersom de to bestemmelsene peker i hver sin retning", "At en folkerettslig regel presumeres gjennomført i nasjonal rett med mindre lovgiveren sier noe annet", "At nasjonale domstoler kan avgjøre om en traktat er gyldig inngått mellom de aktuelle statene"],
      explanation: "Prinsippet er en tolkningsregel: motstrid unngås ved at nasjonal rett leses i samsvar med folkeretten så langt tolkningen rekker. Det er ikke en forrangsregel — er motstriden klar, må lovgiveren rydde opp, og det er nettopp der spenningen i en dualistisk ordning blir synlig.",
    },
    {
      question: "I hvilken rekkefølge ligger kyststatens soner utover fra grunnlinjen?",
      options: ["Indre farvann, territorialfarvann, tilstøtende sone, eksklusiv økonomisk sone, kontinentalsokkel", "Territorialfarvann, indre farvann, eksklusiv økonomisk sone, tilstøtende sone og kontinentalsokkel", "Indre farvann, tilstøtende sone, territorialfarvann, kontinentalsokkel, økonomisk sone", "Territorialfarvann, tilstøtende sone, indre farvann, kontinentalsokkel, eksklusiv økonomisk sone"],
      explanation: "Sonene måles utover fra grunnlinjen, og indre farvann ligger innenfor den. Rekkefølgen er selve strukturen i svaret, og rettighetene avtar jo lenger ut man kommer — kontinentalsokkelen står i en særstilling fordi den gjelder havbunnen og kan strekke seg lenger enn den økonomiske sonen.",
    },
    {
      question: "Hva har kyststaten i den eksklusive økonomiske sonen?",
      options: ["Suverene rettigheter over ressursene, mens andre stater beholder friheter som ferdsel", "Full suverenitet, slik at sonen er en del av statens territorium på linje med landjorda", "Rett til å håndheve toll- og innvandringsregler, men ingen rett til ressursene", "Enerett til all ferdsel, mens ressursene forvaltes i fellesskap av statene i regionen"],
      explanation: "I den økonomiske sonen er ressursrettighetene eksklusive, ikke suvereniteten. Å behandle sonen som en del av statens territorium er den klassiske sammenblandingen av kategorier; håndheving av toll- og innvandringsregler uten ressursrettigheter hører derimot til den tilstøtende sonen.",
    },
    {
      question: "Hva rammer feilkode #10 i bokas register?",
      options: ["Overdreven juridisk eller økonomisk ambisjon som slår feil", "Feil bestemmelse brukt til riktig regel, eller sammenblandede havrettssoner", "Ensidig drøfting der oppgaven ber om en balansert vurdering av spørsmålet", "Manglende eksempler, altså et abstrakt svar uten empirisk forankring"],
      explanation: "Feil #10 gjelder å skrive over emnets tak, typisk med et halvferdig juridisk metodegrep. Feil hjemmel er #9, ensidig drøfting er #5 og manglende eksempler er #7 — fire ulike koder i et register som har nøyaktig ti.",
    },
    {
      question: "Hva er den vanligste hjemmelsforvekslingen i maktbruksoppgaven?",
      options: ["Å legge maktforbudet i artikkel 2(7), som i virkeligheten er intervensjonsforbudet i pakten", "Å legge selvforsvarsretten i artikkel 42, som i virkeligheten gjelder militære tvangstiltak vedtatt av rådet", "Å legge Sikkerhetsrådets myndighet i artikkel 51, som i virkeligheten gjelder selvforsvar", "Å legge intervensjonsforbudet i artikkel 39, som i virkeligheten gjelder trussel mot freden"],
      explanation: "Maktforbudet står i artikkel 2(4). Artikkel 2(7) er intervensjonsforbudet, altså at FN ikke skal gripe inn i forhold som i det vesentlige ligger under en stats egen jurisdiksjon — de to leddene ligger så nær hverandre at skillet er verdt å kunne presist, og forvekslingen hører under feil #9.",
    },
    {
      question: "Hvor hyppige er de tre folkerettslige hovedtemaene i grunnlaget?",
      options: ["Maktbruk i 8 av 15 terminer, rettskilder i 4 av 15 og havrett i 2 av 15", "Maktbruk i 4 av 15 terminer, rettskilder i 8 av 15 og havrett i 6 av 15 terminer", "Maktbruk i 13 av 15 terminer, rettskilder i 9 av 15 og havrett i 5 av 15", "Maktbruk i 2 av 15 terminer, rettskilder i 8 av 15 og havrett i 4 av 15"],
      explanation: "Maktbruk er tyngst med 8 av 15 terminer, rettskilder følger med 4 av 15 — men i to av de tre siste settene — og havrett er lavfrekvent med 2 av 15 og ingen forekomst etter H2019. Tallet 13 av 15 gjelder noe annet: at minst én frittstående folkerettsoppgave finnes i så mange terminer.",
    },
    {
      question: "Hvordan skal en folkerettslig vurdering formuleres i en besvarelse?",
      options: ["Som en posisjon om hva reglene krever, med de ulike partenes egne begrunnelser gjengitt", "Som en dom over den parten som etter kandidatens syn har brutt folkeretten", "Som en beskrivelse av hva som er politisk klokt, siden reglene ofte er uklare", "Som et referat av hva Sikkerhetsrådet har uttalt, uten egen vurdering av spørsmålet"],
      explanation: "Å beskrive hva reglene krever og hvilke posisjoner som finnes, er faglig; å felle dommen krever en bevisvurdering du ikke har grunnlag for på en tretimers eksamen. Formen er dessuten fullt forenlig med å lande skarpt — det er begrunnelseskvaliteten som premieres, aldri retningen.",
    },
    {
      question: "Hvordan bør 80 minutter fordeles i en folkerettsoppgave når instruksen ber om to besvarelser?",
      options: ["Rundt 20 minutter på regel, unntak og vilkår, 45 på det omstridte punktet og 15 på kontroll", "Rundt 45 minutter på regel, unntak og vilkår, 20 på det omstridte punktet, og 15 på kontroll", "Rundt 60 minutter på en grundig gjennomgang av rettskildene og 20 på en kort vurdering", "Rundt 40 minutter på regelframstillingen og 40 på eksempler, uten tid satt av til kontroll"],
      explanation: "Regelframstillingen er inngangsbilletten og skal være kort; drøftingsleddet avgjør karakteren. Tidsfellen i denne sjangeren er at regelstoffet føles trygt å skrive, slik at det vokser på bekostning av det omstridte punktet der uttellingen ligger.",
    },
  ],
  'inter1000-6-5': [
    {
      question: "Hvilken rekkefølge har de seks vurderingsleddene i semesteroppgavemalen?",
      options: ["Innledning, begrepsapparat, undersøkelsesopplegg, analyse, konklusjon, struktur", "Innledning, undersøkelsesopplegg, begrepsapparat, konklusjon, analyse og til slutt struktur", "Begrepsapparat, innledning, analyse, undersøkelsesopplegg og deretter struktur og konklusjon", "Innledning, analyse, begrepsapparat, konklusjon, undersøkelsesopplegg, struktur"],
      explanation: "Malen går fra spørsmålet via apparatet og opplegget til analysen, konklusjonen og formen. Rekkefølgen er også en disposisjonsmal: skriver du i den, har du svart på hvert vurderingspunkt. De nære alternativene bytter om på begrepsapparat og undersøkelsesopplegg, eller setter analysen før apparatet den skal bruke — begge deler bryter logikken i at begrepene må være på plass før de anvendes.",
    },
    {
      question: "Hva er testen på at en formulering er en problemstilling og ikke bare et tema?",
      options: ["At den er et spørsmål med et svar som kan bli nei", "At den nevner minst to av de fire fagsøylene i emnet", "At den er formulert kort nok til å stå i én setning", "At den handler om noe som er aktuelt i nyhetsbildet nå"],
      explanation: "Et tema har ingen ende, mens et spørsmål kan besvares — og et spørsmål som ikke kan besvares benektende, gir analysen ingenting å veie mot noe annet. Tverrfaglighet premieres, men gjør ikke i seg selv et tema til et spørsmål, og korthet og aktualitet er verken nødvendig eller tilstrekkelig.",
    },
    {
      question: "Hvilket av de tre innsnevringsgrepene gjør en problemstilling drøftbar, og ikke bare mindre?",
      options: ["Å navngi mekanismen eller kanalen virkningen går gjennom", "Å avgrense i tid, for eksempel til årene etter en bestemt hendelse", "Å avgrense i enhet, for eksempel til to navngitte stater", "Å avgrense i tid og enhet samtidig, slik at materialet blir håndterbart"],
      explanation: "Når kanalen er navngitt, har du samtidig sagt hva som ville vist at du tok feil — og da har analysen noe å bryne seg på. Avgrensning i tid og i enhet gjør oppgaven mindre og materialet håndterbart, men et snevret tema er fortsatt et tema, og heller ikke de to grepene brukt sammen skaper noe å motprøve.",
    },
    {
      question: "Hva menes med at begrepsapparatet skal være konsistent?",
      options: ["At begrepet betyr det samme i analysen som i definisjonen fra innledningen", "At alle begreper i teksten er hentet fra den samme av de fire fagsøylene", "At begrepene defineres én gang og ikke gjentas senere i teksten", "At definisjonene er hentet ordrett fra pensumlitteraturen framfor egne ord"],
      explanation: "Konsistens er at definisjonen fra innledningen fortsatt passer på hver eneste forekomst senere i teksten — testen er å søke opp begrepet og lese hver bruk mot definisjonen. Det er verken et krav om at alle begreper er hentet fra samme disiplin, at de ikke gjentas, eller at definisjonen er avskrevet framfor formulert selv.",
    },
    {
      question: "Hvilke tre elementer skal et undersøkelsesopplegg inneholde?",
      options: ["Materialet, hvordan det faktisk brukes, og hva opplegget ikke kan svare på", "Materialet, en fyldig oversikt over faglitteraturen, og en tidsplan for arbeidet", "Problemstillingen, de sentrale begrepene, og en oversikt over kildene", "Hypotesen, en forskningsmetode med navn, og en drøfting av resultatene"],
      explanation: "Kravet er beskjedent i omfang og strengt i presisjon: hva teksten bygger på, hvordan materialet gjøres om til et svar, og hvor opplegget stopper. Grensen er det elementet som løfter mest. En litteraturoversikt, en tidsplan eller en navngitt forskningsmetode er ikke det leddet spør etter, og en metodeoppvisning som ikke brukes, slår ut som overdreven ambisjon.",
    },
    {
      question: "Hva er hovedskillet i kildekritikk på førsteårsnivå i denne sjangeren?",
      options: ["Om kilden brukes som vitne om hva som skjedde, eller som uttrykk for en begrunnelse", "Om kilden er en primærkilde eller en sekundærkilde i historiefaglig forstand", "Om kilden er fagfellevurdert, eller bare publisert av en offentlig instans", "Om kilden er skrevet av en forsker uten egne interesser, eller av en aktør i den konflikten den omtaler"],
      explanation: "Et partsinnlegg er sjelden god kilde til hva som faktisk skjedde, men ofte den beste kilden til hvilke argumenter aktøren mente ville bli akseptert. Skillet primærkilde og sekundærkilde, kravet om fagfellevurdering og spørsmålet om hvem forfatteren er, er alle relevante, men ingen av dem sier hva kilden er egnet til å belegge i akkurat din tekst.",
    },
    {
      question: "Hva spør det fjerde vurderingsleddet, analysen, uttrykkelig etter?",
      options: ["At det som taler mot konklusjonen kommer klart fram", "At minst to fagsøyler er representert i drøftingen", "At alle sentrale kilder er referert i samme avsnitt", "At konklusjonen presenteres allerede før drøftingen"],
      explanation: "Analysen skal være systematisk og gjennomsiktig, og motforestillingene skal komme klart fram — det er det eneste leddet som er formulert som et krav om å svekke sin egen tekst. Tverrfaglighet premieres, men er ikke et krav i leddet; referanseplassering hører til det sjette leddet, og konklusjonen hører til det femte.",
    },
    {
      question: "Hva menes med at motforestillingen skal gjengis i sin sterkeste form?",
      options: ["At den skal framstilles slik at den faktisk kunne vunnet fram", "At den skal gjengis med de skarpeste ordene motparten selv bruker", "At den skal stå aller sist i analysen, rett før konklusjonen", "At den skal gjengis i minst like mange setninger som ditt eget argument"],
      explanation: "En motforestilling som er gjort svak før den avvises, viser bare at du kjenner til at noen er uenige — kravet er at den kunne ha vunnet. Verken ordvalget, plasseringen eller lengden avgjør dette; det avgjørende er om innvendingen er reell nok til å true konklusjonen.",
    },
    {
      question: "Hva er stryketesten på en tverrfaglig kobling?",
      options: ["Blir svaret dårligere uten setningen, eller bare kortere?", "Er begge de to fagsøylene nevnt med minst ett eget fagbegrep hver?", "Kan koblingen belegges med minst én egen kilde fra hver av de to søylene?", "Står koblingen i analysen framfor i innledningen?"],
      explanation: "Koblingen gjør en jobb bare hvis svaret blir dårligere når setningen strykes; blir teksten bare kortere, var koblingen pynt som tok plass fra analysen. Å nevne begreper fra to søyler, å ha en kilde fra hver, eller å plassere koblingen i analysen, kan alt sammen gjøres uten at koblingen forklarer noe den ene søylen ikke kunne forklart alene.",
    },
    {
      question: "Hva sier sensorveiledningen fra og med H2024 om tematisk overlapp mellom semesteroppgaven og skoleeksamen?",
      options: ["At overlapp ikke skal straffes, fordi taktiske hensyn ikke skal påvirke karakteren", "At overlapp skal trekke noe ned, fordi bredden i emnet da ikke blir prøvd", "At overlapp er tillatt bare når emneansvarlig har godkjent temaet på forhånd", "At overlapp skal gi uttelling, fordi fordypning premieres i begge vurderingsdelene"],
      explanation: "Opplysningen står fra og med H2024 og gjelder at taktiske hensyn ikke skal påvirke karakteren — overlapp verken straffes eller belønnes i seg selv. Mange holder likevel igjen sitt beste tema av redsel for dobbeltbruk og taper i begge ender. Det finnes ingen godkjenningsordning for temavalg i det grunnlaget, og fordypning gir uttelling gjennom kvaliteten, ikke gjennom overlappen.",
    },
    {
      question: "Hvordan skal vektingen mellom skoleeksamen og semesteroppgave omtales?",
      options: ["Som at skoleeksamen har veid tyngst, med henvisning til emnesiden for gjeldende vekt", "Som en fast prosentfordeling mellom delene som har vært den samme i hele arkivperioden", "Som at de to delene teller likt, siden det gis én samlet karakter for begge", "Som at semesteroppgaven bare er en arbeidskrav-lignende del uten vekt i karakteren"],
      explanation: "Skoleeksamen har veid tyngst hele veien, men fordelingen er oppgitt med tall i noen terminer og bare omtalt som mest og minst i andre — derfor skal ingen fast prosentvekt oppgis som gjeldende, og leseren skal sjekke emnesiden. Delene teller ikke likt, og semesteroppgaven er ikke et rent arbeidskrav: den er en obligatorisk del av den ene samlede karakteren.",
    },
    {
      question: "Hva er den viktigste grunnen til at et tynt utkast til kommentarrunden er kostbart?",
      options: ["Tilbakemeldingen brukes opp mens den fortsatt kunne endret teksten", "Utkastet inngår direkte i karakteren på lik linje med den ferdige teksten", "Veilederen får da ikke godkjent den obligatoriske seminardeltakelsen", "Medstudenten som kommenterer, får da et dårligere grunnlag for sin egen tekst"],
      explanation: "Verdien av en tilbakemelding faller med tiden: en svakhet påpekt i uke seks kan rettes, den samme svakheten oppdaget av sensor kan ikke. Utkastet vurderes ikke som en del av karakteren, deltakelsen godkjennes uavhengig av utkastets kvalitet, og ulempen for medstudenten er reell, men liten i forhold til den du påfører deg selv.",
    },
    {
      question: "Hvorfor får semesteroppgaven ingen gjennomskrevet modellbesvarelse i denne boka?",
      options: ["Fordi den er en innlevert, vurdert tekst, og en ferdig tekst ville vært et fuskeverktøy", "Fordi malen varierer for mye mellom terminene til at en modell ville vært dekkende", "Fordi sjangeren er ute av bruk i dagens vurderingsordning og bare trenes som form", "Fordi den vurderes av veileder og ikke av sensor, og derfor faller utenfor bokas ramme"],
      explanation: "Grensen er bevisst: boka gir skisser, disposisjoner, problemstillingseksempler og momentlister per vurderingsledd, aldri en sammenhengende tekst noen kunne levert som sin egen. Malen er tvert imot stabil i alle sensorveiledningene fra H2018 og framover, sjangeren er i bruk, og oppgaven inngår i den samlede karakteren.",
    },
    {
      question: "Hva kjennetegner en konklusjon på nivået meget god?",
      options: ["Et klart svar tidlig, pluss hva svaret betyr og hvor forklaringen slutter å gjelde", "En avveining som holder begge posisjonene like åpne, slik at ingen av sidene favoriseres", "En oppsummering av hvert kapittel i teksten, med de viktigste kildene gjentatt", "Et forbehold om at temaet er sammensatt og at mer forskning trengs på feltet"],
      explanation: "Svaret skal komme tidlig og klart, og løftes av implikasjoner og av at teksten sier hvor forklaringen ikke rekker. Standpunktet er fritt, og en skarp landing er en fullgod toppform — en avveining som ikke lander, et referat av teksten eller formelen om at mer forskning trengs, sier ingenting om ditt eget materiale.",
    },
    {
      question: "Hva er den mekaniske prøven på en ryddig disposisjon?",
      options: ["At førstesetningene i avsnittene lest i rekkefølge gir et sammendrag av teksten", "At hvert kapittel i teksten har omtrent like mange avsnitt og omtrent samme lengde", "At alle referanser er samlet i samme avsnitt som påstanden de belegger", "At innledningen og konklusjonen bruker de samme formuleringene om målet"],
      explanation: "Kravet er én tanke per avsnitt, og at avsnittets første setning sier hvilken — da fungerer førstesetningene som et sammendrag. Lik lengde på kapitler, plassering av referanser og gjenbruk av formuleringer mellom innledning og konklusjon sier ingenting om leseren kan følge tråden.",
    },
    {
      question: "Hva innebærer mildhetsforbeholdet for undersøkelsesopplegget i semesteroppgaven?",
      options: ["At det ikke kreves dyp metodisk innsikt, men presisjon i de få setningene som skal stå", "At leddet kan utelates helt så lenge analysen og konklusjonen er systematiske", "At kravene til presise begreper senkes fordi leseren er i sitt første semester", "At metodefaglige begreper bør brukes rikelig for å vise at framgangsmåten er gjennomtenkt"],
      explanation: "Forbeholdet gjelder dybden, ikke presisjonen: leseren er førsteårsstudent, og tre til fem presise setninger om materiale, bruk og grense er nok. Leddet er ett av seks og kan ikke utelates, presisjonskravet på begreper står uendret, og en oppvisning i metodebegreper som ikke brukes, slår ut som overdreven ambisjon.",
    },
  ],
  'inter1000-6-6': [
    {
      question: "Hvor mange koder har feilregisteret i denne boka?",
      options: ["Nøyaktig ti", "Nøyaktig åtte, én per vanligste svakhet", "Nøyaktig tolv, tre for hver vurderingsakse", "Det varierer med hvilken fagsøyle oppgaven hører til"],
      explanation: "Registeret er lukket på ti koder, fordi ti navngitte feil er så mange som er brukbare å lete etter under tidspress. Alt du måtte oppdage i egen tekst hører hjemme under en av de ti — hjemmelsforvekslingen hører for eksempel under feil #9 og får ingen egen kode. Registeret er heller ikke inndelt per akse eller per disiplin.",
    },
    {
      question: "Hvilken vurderingsakse rammes av feil #2, riktig figur uten mekanismeforklaring?",
      options: ["Akse 2 — mekanismeforståelse, som er det gjennomgående C-til-A-skillet", "Akse 1 — presisjon i begreper og faktiske forhold, altså inngangsbilletten", "Akse 3 — selvstendighet, drøfting og kobling til en teoritradisjon", "Akse 4 — eksempler og empirisk forankring i konkrete hendelser"],
      explanation: "Feilen består i at retningene er lest av uten at det står hvorfor, og det er nettopp akse 2 som måler om svaret forklarer hvorfor framfor bare hva. Presisjonen kan være helt i orden i et slikt svar, drøftingen kan finnes andre steder i besvarelsen, og eksempler er en egen akse.",
    },
    {
      question: "Hvorfor stiger prisen kjøperne betaler mindre enn avgiftsbeløpet når det legges en avgift per enhet?",
      options: ["Fordi etterspurt mengde faller når prisen stiger, så selgeren må bære en del selv", "Fordi myndighetene i praksis krever inn bare en del av den vedtatte avgiften", "Fordi selgerne og kjøperne forhandler seg fram til en rimelig fordeling av byrden", "Fordi tilbudskurven skifter mindre enn avgiftsbeløpet når kostnadene øker"],
      explanation: "Velter selgerne hele avgiften over, faller etterspurt mengde, og det er bedre å selge mer til litt lavere pris enn lite til full påslagspris — derfor stopper prisen mellom, og resten bæres som lavere nettopris. Tilbudskurven løftes nettopp med hele avgiftsbeløpet, og delingen følger prisfølsomheten, ikke forhandlinger eller innkrevingspraksis.",
    },
    {
      question: "Hva kjennetegner et kollektivt gode?",
      options: ["At det er både ikke-ekskluderbart og ikke-rivaliserende", "At det er ikke-ekskluderbart, men rivaliserende, som en fiskebestand", "At det er finansiert av staten fordi markedet ikke leverer det selv", "At det er tilgjengelig for alle borgere uavhengig av betalingsevne"],
      explanation: "Begge kjennetegn må være til stede: ingen kan stenges ute, og din bruk reduserer ikke min. Kombinasjonen ikke-ekskluderbar og rivaliserende beskriver derimot en allmenning, som er beslektet, men ikke identisk. At staten ofte finansierer slike goder, er en følge av kjennetegnene og ikke definisjonen.",
    },
    {
      question: "Hvilken bestemmelse i FN-pakten er maktforbudet?",
      options: ["Artikkel 2(4)", "Artikkel 2(7)", "Artikkel 51", "Artikkel 39"],
      explanation: "Maktforbudet står i artikkel 2(4) og forbyr trussel om og bruk av makt mot en annen stats territorielle integritet eller politiske uavhengighet. Artikkel 2(7) er intervensjonsforbudet, altså at FN ikke skal gripe inn i forhold som i det vesentlige ligger under en stats egen jurisdiksjon; artikkel 51 er selvforsvarsretten, og artikkel 39 er rådets konstatering av en trussel mot freden.",
    },
    {
      question: "Hva regulerer FN-paktens artikkel 2(7), og hvem retter den seg mot?",
      options: ["Intervensjonsforbudet, og den retter seg mot organisasjonen framfor mot statene", "Maktforbudet, og den retter seg mot statenes bruk av makt mot hverandre", "Selvforsvarsretten, og den retter seg mot den staten som nettopp er blitt angrepet militært", "Vetoretten, og den retter seg mot de faste medlemmene i Sikkerhetsrådet"],
      explanation: "Artikkel 2(7) er intervensjonsforbudet: FN skal ikke gripe inn i forhold som i det vesentlige ligger under en stats egen jurisdiksjon, og bestemmelsen gjør unntak for tvangstiltak etter kapittel VII. Den forveksles lett med maktforbudet i artikkel 2(4), som retter seg mot statene — de to leddene står i samme artikkel og verner den samme grunnverdien på hver sin måte.",
    },
    {
      question: "Hva er den mest presise testen på at en teoritradisjon er anvendt og ikke bare nevnt?",
      options: ["At teoriavsnittet ikke kunne vært flyttet uendret til et svar på en annen oppgave", "At tradisjonen presenteres med alle sine sentrale antakelser før selve fenomenet behandles", "At minst to tradisjoner er nevnt, slik at framstillingen blir balansert", "At tradisjonen navngis med den forfatteren som er avsender for begrepene"],
      explanation: "En anvendt tradisjon handler om akkurat dette fenomenet og lar seg derfor ikke flytte — det er nettopp flyttbarheten som avslører feil #4. Å presentere antakelsene, å nevne flere tradisjoner og å navngi avsenderen er alt sammen nyttig, men kan gjøres uten at tradisjonen brukes på noe.",
    },
    {
      question: "Hva er varsellampen for feil #5, ensidig drøfting?",
      options: ["At motargumentet du gjengir, ikke kunne ha vunnet", "At du ikke har nevnt noe motargument i det hele tatt i svaret", "At du har landet skarpt i stedet for å ta et tydelig forbehold", "At du har brukt mer plass på drøftingen enn på det redegjørende leddet"],
      explanation: "Kravet er at motforestillingen står i sin sterkeste form; en innvending som er gjort svak før den avvises, teller ikke. Å utelate motargumentet helt er den grove varianten, men den vanligste er den svekkede. En skarp landing er en fullgod toppform, og at drøftingen får mest plass, er tvert imot ønsket.",
    },
    {
      question: "Hvordan unngår du feil #6, ufullstendig sammenligning?",
      options: ["Ved å velge tre til fire akser og behandle begge ledd på hver av dem", "Ved å bruke like mange setninger på hvert av de to leddene i teksten", "Ved å behandle det ene leddet ferdig før du går videre til det andre", "Ved å konkludere med hvilket av de to leddene som kommer best ut"],
      explanation: "Sammenligningen blir komplett når begge ledd behandles på hver navngitte akse — da er den også lettere å følge. Lik lengde alene garanterer ingenting hvis leddene beskrives på hvert sitt sett av punkter, blokkvis behandling gjør sammenligningen vanskeligere å følge, og en konklusjon kan ikke reparere en sammenligning som aldri ble gjennomført.",
    },
    {
      question: "Hva er varsellampen for feil #7, manglende eksempler?",
      options: ["At du har skrevet en halv side uten et årstall, stedsnavn eller avtalenavn", "At du har brukt et tenkt eksempel framfor en faktisk historisk hendelse", "At eksempelet ditt er hentet fra en annen disiplin enn oppgaven gjelder", "At du har brukt det samme eksempelet to steder i den samme besvarelsen"],
      explanation: "Varsellampene er formulert som observasjoner av hva som står i teksten, og fraværet av årstall, stedsnavn og hendelsesnavn er den raskeste. Tenkte eksempler er tillatt når de er tydelige, eksempler fra en annen søyle kan tvert imot være et pluss, og gjenbruk av et godt eksempel er uproblematisk.",
    },
    {
      question: "Hva er stryketesten på en tverrfaglig kobling?",
      options: ["Om svaret blir dårligere uten setningen, eller bare kortere", "Om koblingen bruker minst ett fagbegrep fra den andre søylen", "Om koblingen står i analysen framfor i innledningen til svaret", "Om begge søylene er representert med like mye plass i svaret"],
      explanation: "Koblingen gjør en jobb bare hvis den forklarer noe den første søylen ikke kunne forklart; blir teksten bare kortere av å stryke setningen, var koblingen pynt. Å bruke et fagbegrep, å plassere koblingen i analysen eller å fordele plassen jevnt kan alt sammen gjøres uten at koblingen forklarer noe som helst.",
    },
    {
      question: "Hva avgjør komparativt fortrinn?",
      options: ["Alternativkostnaden — altså hva landet gir opp av den andre varen", "Om landet kan produsere varen med færrest ressurser av alle land", "Gjennomsnittskostnaden per enhet sammenlignet med andre lands", "Om landet har lavere lønnskostnader enn de landene det handler med"],
      explanation: "Et land har komparativt fortrinn i den varen der det gir opp relativt minst av den andre — derfor kan et land ha komparativt fortrinn i én vare selv om det har absolutt fortrinn i begge. Å produsere med færrest ressurser er absolutt fortrinn, og verken gjennomsnittskostnad eller lønnsnivå avgjør spørsmålet.",
    },
    {
      question: "Hvilket kostnadsbegrep avgjør om det lønner seg å produsere én enhet til?",
      options: ["Marginalkostnaden", "Gjennomsnittskostnaden", "Alternativkostnaden", "Den samlede produksjonskostnaden"],
      explanation: "Marginalkostnaden er kostnaden ved neste enhet, og det er den som avgjør om produksjonen bør utvides. Gjennomsnittskostnaden sier bare noe om lønnsomheten i det som allerede er produsert, alternativkostnaden er verdien av det beste du gir opp ved et valg, og den samlede kostnaden sier ingenting om marginen.",
    },
    {
      question: "Hvilke rettigheter har kyststaten i den eksklusive økonomiske sonen?",
      options: ["Suverene rettigheter til naturressursene, men ikke suverenitet over området", "Full suverenitet, siden sonen regnes som en del av statens territorium", "Suverenitet begrenset av retten til uskyldig gjennomfart for fremmede skip", "Kontroll til fire bestemte formål: toll, skatt og avgift, innvandring og helse"],
      explanation: "I den eksklusive økonomiske sonen har kyststaten enerett til ressursene, mens andre stater beholder blant annet friheten til skipsfart og overflyging. Suverenitet begrenset av uskyldig gjennomfart gjelder territorialfarvannet, og de fire kontrollformålene hører til den tilstøtende sonen — å blande sonene er en variant av feil #9.",
    },
    {
      question: "Hva kreves for at en internasjonal sedvane skal binde?",
      options: ["Både statspraksis og opinio juris, altså rettsoppfatningen om at praksisen er påbudt", "At praksisen har vart lenge nok og er utbredt nok blant verdens stater", "At praksisen er nedfelt i en traktat som et tilstrekkelig stort antall av verdens stater har sluttet seg til", "At praksisen er anerkjent av Den internasjonale domstolen i en tidligere avgjørelse"],
      explanation: "Begge vilkårene må være oppfylt: praksis uten rettsoppfatning er bare vane, og rettsoppfatning uten praksis er bare et ønske. Varighet og utbredelse hører til praksisvilkåret alene, en traktat er en annen rettskilde, og rettsavgjørelser er hjelpemidler ved fastleggelsen av reglene, ikke et vilkår for at sedvane oppstår.",
    },
    {
      question: "Hvorfor er feil #10, overdreven juridisk eller økonomisk ambisjon, kontraintuitiv?",
      options: ["Fordi et forsøk på et høyere nivå som bommer, gir dårligere uttelling enn et enklere svar", "Fordi den utelukkende rammer de kandidatene som har lest atskillig mer enn pensum krever av dem", "Fordi den er den eneste feilen som ikke kan oppdages av sensor i en besvarelse", "Fordi den gir uttelling på presisjon samtidig som den koster på drøftingen"],
      explanation: "Mer er ikke bedre: en bommert på spesialistnivå koster på presisjonen og tar tid fra drøftingsleddet som avgjør karakteren, mens solid hovedforståelse med ett godt eksempel gir mer. Feilen har ingenting med hvor mye kandidaten har lest å gjøre, den er lett synlig for sensor, og den gir ikke uttelling noe sted.",
    },
    {
      question: "Hva innebærer mildhetsforbeholdet, som er tallfestet i H2018-veiledningen?",
      options: ["At det ikke skal kreves juridisk stringens eller økonomisk formalisme av førsteårsstudenter", "At kravene til presise definisjoner og til riktige bestemmelser er lempet i alle de fire søylene", "At karakteren settes mildere i et innføringsemne enn i emner senere i studieløpet", "At kandidatene får ekstra uttelling når de likevel forsøker seg på et høyere faglig nivå"],
      explanation: "Forbeholdet gjelder dybden, ikke presisjonen: du slipper traktattolkningslære, men ikke riktig bestemmelse. Det er ikke en generell mildhet i karaktersettingen, og et forsøk på et høyere nivå som bommer, gir tvert imot dårligere uttelling — det er nettopp feil #10.",
    },
    {
      question: "Hvorfor er den kalde banken i dette kapitlet uten hint?",
      options: ["Fordi eksamen krever at du henter fram begrep og mekanisme selv, ikke bare bruker dem", "Fordi oppgaveformuleringene er for korte til at et hint ville hatt noe å peke på i teksten", "Fordi hintene i boka ellers ville røpet konklusjonen i drøftingsoppgavene", "Fordi fasitene er rene momentlister og derfor allerede fungerer som hint"],
      explanation: "Et hint aktiverer riktig kunnskap for deg, slik at du bare øver på siste halvdel av oppgaven — og det gir en systematisk overvurdering av egen beredskap. Oppgavene i banken er tvert imot fullverdige eksamensoppgaver, bokas øvrige hint er laget nettopp for aldri å røpe konklusjonen, og en momentliste er en fasit, ikke et hint.",
    },
    {
      question: "Hva er den generelle varsellampen som dekker omtrent halve feilregisteret?",
      options: ["At du har skrevet en halv side uten å bruke ordet «fordi» eller ordet «men»", "At du har brukt mer enn halvparten av tiden på det redegjørende leddet", "At du ikke har rukket å lese gjennom besvarelsen din før du leverer den", "At du har svart på flere oppgaver enn instruksen i settet ba deg om"],
      explanation: "Fravær av «fordi» betyr som regel manglende mekanisme, og fravær av «men» betyr manglende drøfting — til sammen feil #1 og #2. Å bruke halve tiden på å redegjøre, å hoppe over kontrollen og å svare på for mange oppgaver er reelle tidsfeller, men de er ikke observasjoner av hva som står i teksten.",
    },
    {
      question: "Hvorfor gir handel med omsettelige kvoter et gitt utslippsmål til lavest samlet kostnad?",
      options: ["Fordi kuttene flyttes til dem som kan gjennomføre dem billigst, til marginalkostnaden er lik", "Fordi kvoter er billigere for bedriftene å skaffe seg enn en avgift ville vært", "Fordi taket på samlet utslipp gjør at målet uansett nås, uavhengig av hvordan kuttene fordeler seg", "Fordi myndighetene tildeler kvotene til de bedriftene som kan kutte billigst"],
      explanation: "Hver aktør sammenligner sin egen marginale rensekostnad med kvoteprisen og handler til ingen lenger tjener på å bytte — det er omsetteligheten, ikke kvoten, som gjør ordningen billig, og en avgift gir samme kostnadsutjevning. Taket sikrer måloppnåelsen, men ikke kostnadseffektiviteten, og myndighetene trenger ikke vite hvem som kutter billigst.",
    },
  ],
  'inter1000-6-7': [
    {
      question: "Hva kjennetegner en jevnt god besvarelse av økonomioppgaven?",
      options: ["Den er korrekt og ordnet, men mekanismen mangler eller er en sirkelsetning", "Den har flere faktafeil, men treffer hovedbildet med pris opp og mengde ned", "Den mangler figur helt, siden figuren er et vilkår i denne oppgavetypen", "Den er kortere enn et toppsvar, fordi lengden er det som avgjør nivået"],
      explanation: "På dette nivået er alt riktig — skiftet, retningene, avgiftskilen — men forklaringen på hvorfor mangler. Faktafeil hører til minimumskravet, figur er ikke et vilkår, og lengde er ikke et kriterium i noen av veiledningene.",
    },
    {
      question: "Hvilken setning er en falsk mekanisme i avgiftsoppgaven?",
      options: ["«Prisen stiger ikke med hele avgiften, fordi avgiften deles mellom partene»", "«Prisen stiger ikke med hele avgiften, fordi salget faller ved et fullt påslag»", "«Kjøperprisen stiger og selgerprisen faller, og differansen er hele avgiften»", "«Fordelingen følger av hvor lett hver part kan velge noe annet i markedet»"],
      explanation: "Alt etter «fordi» gjentar det som står foran, og setningen forklarer derfor ingenting. De øvrige er enten en ekte kjede eller en presis konstatering om avgiftskilen og prisfølsomheten.",
    },
    {
      question: "Hva er den typiske feilen på E-nivå i økonomioppgaven?",
      options: ["At skiftet beskrives feil vei, og at kunden sies å bære hele avgiften", "At mekanismen er skrevet ut, men uten at det brukes noe konkret eksempel", "At svaret bruker for mange fagbegreper i det redegjørende leddet", "At drøftingen er balansert, men landingen mangler en tydelig begrunnelse"],
      explanation: "Minimumskravet kjennes på reelle presisjonsfeil: tilbudskurven senkes i stedet for å løftes, og full overvelting påstås, noe som bare gjelder i grensetilfellet med loddrett etterspørselskurve. Manglende eksempel eller svak landing er svakheter på et høyere nivå.",
    },
    {
      question: "Hva betyr det at avgiftens formelle byrde ikke er den reelle?",
      options: ["At fordelingen blir den samme uansett hvem avgiften kreves inn fra", "At staten i praksis får inn mindre enn avgiftssatsen skulle tilsi", "At kjøperen alltid ender med å bære avgiften uansett hvordan den legges", "At selgeren kan velge å la være å velte avgiften over på kunden"],
      explanation: "Legges avgiften på kjøperne i stedet, senkes etterspørselskurven, og utfallet for kjøperpris, selgerpris og mengde blir det samme. Hvem som bærer mest, følger av prisfølsomheten, ikke av lovteksten — og det er ikke et valg selgeren tar.",
    },
    {
      question: "Hva løfter en virkemiddelvurdering fra C til A?",
      options: ["At strukturen går kriterium for kriterium, med virkemidlene inni hvert", "At flere virkemidler presenteres, slik at bredden i vurderingen øker", "At konklusjonen slås fast tidlig og holdes gjennom hele besvarelsen", "At hvert virkemiddel får en grundig gjennomgang med fordeler og ulemper"],
      explanation: "Sammenligningen oppstår først når virkemidlene står ved siden av hverandre under samme kriterium. Fordeler og ulemper virkemiddel for virkemiddel er to redegjørelser, ikke en vurdering, og flere ordninger gjør svaret lengre uten å gjøre rangeringen bedre.",
    },
    {
      question: "Hva er mekanismen bak at en utslippsavgift er kostnadseffektiv?",
      options: ["Alle møter samme pris, så kuttene tas der de er billigst og utjevnes på marginen", "Avgiften settes så lavt at bedriftene har råd til å kutte utslippene sine", "Staten bruker avgiftsinntekten til å finansiere de dyreste utslippskuttene", "Bedriftene pålegges å kutte like mye hver, slik at byrden blir jevn"],
      explanation: "Hver aktør sammenligner sin egen kuttekostnad med prisen og kutter så lenge det er billigere enn å betale, slik at kuttekostnaden på marginen ender lik hos alle. Verken satsens nivå, bruken av inntekten eller et krav om like kutt gir denne utjevningen.",
    },
    {
      question: "Hva er subsidiens sterkeste argument i en virkemiddelvurdering?",
      options: ["At ny grønn teknologi selv har positive eksterne virkninger som ikke er priset", "At subsidier er politisk lettere å innføre, fordi ingen får en regning", "At subsidier treffer utslippsmålet mer presist enn en avgift gjør", "At subsidier gjør at forurenseren bærer kostnaden ved egne utslipp"],
      explanation: "Den som utvikler eller tar i bruk en ny løsning først, bærer kostnaden mens gevinsten spres til andre, og markedet gir derfor for lite av slik utvikling. Politisk letthet er ikke et faglig kriterium, subsidien treffer målet svakest, og den bryter nettopp med at forurenser betaler.",
    },
    {
      question: "Hva kjennetegner E-nivået i virkemiddelvurderingen?",
      options: ["At det rangeres uten at noen av de tre kriteriene faktisk er brukt", "At rangeringen er riktig, men mekanismen bak kostnadsforskjellen mangler", "At alle tre kriteriene brukes, men konklusjonen blir stående uten vekting", "At virkemidlene sammenlignes grundig, men uten et konkret eksempel"],
      explanation: "Her hviler valget på løse påstander om motivasjon eller straff i stedet for på kriteriene oppgaven navnga. Riktig rangering uten mekanisme og manglende vekting i landingen er kjennetegn på det jevnt gode nivået, ikke på minimumskravet.",
    },
    {
      question: "Hvilken bestemmelse i FN-pakten inneholder maktforbudet?",
      options: ["Artikkel 2(4), som forbyr trussel om og bruk av makt mot en annen stat", "Artikkel 2(7), som gjelder forhold under en stats egen jurisdiksjon", "Artikkel 51, som anerkjenner retten til individuelt og kollektivt selvforsvar", "Artikkel 39, der Sikkerhetsrådet konstaterer at det er en trussel mot freden"],
      explanation: "Maktforbudet står i artikkel 2(4). Artikkel 2(7) er intervensjonsforbudet, altså at FN ikke skal gripe inn i det som i det vesentlige ligger under en stats egen jurisdiksjon — de to leddene ligger tett og forveksles lett. Artikkel 51 og artikkel 39 hører til de to unntakene.",
    },
    {
      question: "Hva forutsetter selvforsvarsretten etter FN-pakten?",
      options: ["Et væpnet angrep, og at nødvendighet og proporsjonalitet er oppfylt", "En alvorlig trussel om angrep, og at Sikkerhetsrådet er varslet på forhånd", "At et annet land ber om hjelp, og at inngrepet har et humanitært formål", "At Sikkerhetsrådet har konstatert at det foreligger en trussel mot freden"],
      explanation: "Retten utløses av et væpnet angrep og begrenses av de to vilkårene, og den gjelder inntil Sikkerhetsrådet har truffet nødvendige tiltak. At rådet konstaterer en trussel mot freden, hører til det andre unntaket, og et humanitært formål er ikke et vilkår i selvforsvarsretten.",
    },
    {
      question: "Hvilken status har ansvaret for å beskytte, R2P, i folkeretten?",
      options: ["Et politisk vedtatt prinsipp som viser videre til Sikkerhetsrådet", "En bindende regel som gir stater rett til å gripe inn militært", "En sedvaneregel som er etablert gjennom praksis og rettsoppfatning", "En bestemmelse i FN-pakten som utgjør et tredje unntak fra maktforbudet"],
      explanation: "R2P er vedtatt politisk og er ikke i seg selv et folkerettslig grunnlag for maktbruk; der militære midler er aktuelle, viser prinsippet uttrykkelig til Sikkerhetsrådet. Det er verken sedvane eller en paktbestemmelse, og å skrive at det gir rett til inngrep er en direkte feil.",
    },
    {
      question: "Hva kreves for at det skal foreligge en folkerettslig sedvaneregel?",
      options: ["Statspraksis og rettsoppfatningen om at praksisen er påbudt", "Statspraksis over lang tid, uavhengig av hva statene mener om den", "At et flertall av statene har sluttet seg til en skriftlig avtale om regelen", "At Sikkerhetsrådet har slått fast at praksisen er bindende for statene"],
      explanation: "Uten rettsoppfatningen er praksis bare vane, og det er nettopp dette leddet som mangler i argumentet om at humanitær intervensjon er i ferd med å bli sedvane. En skriftlig avtale ville vært en traktat, og Sikkerhetsrådet fastsetter ikke sedvane.",
    },
    {
      question: "Hva er hovedinnvendingen mot å anerkjenne et nytt unntak fra maktforbudet?",
      options: ["At hver stat da selv avgjør når inngrep er berettiget, og forbudet uthules", "At et slikt unntak ville krevd at FN-pakten ble endret av alle medlemsstatene", "At humanitære hensyn ikke er relevante i folkeretten i det hele tatt", "At Sikkerhetsrådet allerede har avvist et slikt unntak i et bindende vedtak"],
      explanation: "Systemhensynet er at enhver stat med militær evne kan finne en beskyttelsesverdig gruppe å vise til, og at forbudets vern dermed forsvinner. Menneskerettighetene er tvert imot en del av begrunnelsen på den andre siden, og innvendingen hviler verken på en formell endringsprosedyre eller på et vedtak i rådet.",
    },
    {
      question: "Hva er skillet mellom lovlighet og legitimitet i folkerettsoppgaven?",
      options: ["Om handlingen er tillatt etter reglene, mot om den kan forsvares moralsk", "Om Sikkerhetsrådet har vedtatt noe, mot om Generalforsamlingen har gjort det", "Om handlingen er forsvarlig på kort sikt, mot om den er det på lang sikt", "Om andre stater fordømte handlingen, mot om de faktisk deltok i den"],
      explanation: "Skillet går mellom hva reglene krever og hvordan handlingen vurderes normativt, og et inngrep kan møtes med forståelse uten dermed å bli lovlig. Reaksjoner fra andre stater er et bevistema i sedvanevurderingen, ikke selve skillet.",
    },
    {
      question: "Hvordan skal en folkerettslig landing formuleres i denne boka?",
      options: ["Som en posisjon om hva reglene krever, ikke som en dom over en part", "Som en dom over den staten som handlet, når reglene er tydelige nok", "Som en åpen konstatering av at spørsmålet er omstridt blant statene", "Som en anbefaling om hva Sikkerhetsrådet burde ha vedtatt i saken"],
      explanation: "Å beskrive hva reglene krever og hvilke posisjoner som finnes, er faglig; å felle dommen er utenfor bokas mandat. En landing som bare konstaterer at spørsmålet er omstridt, er dessuten utgangspunktet og ikke et svar.",
    },
    {
      question: "Hva sier grunnlaget om gjenbruk av oppgaveformuleringer mellom terminer?",
      options: ["Ordrett gjenbruk er dokumentert, men gjenbruket gjelder spørsmålene, ikke rubrikken", "Hele oppgavesett er gjenbrukt uendret, slik at det holder å pugge ett sett", "Gjenbruk forekommer bare i økonomioppgavene, ikke i de andre søylene", "Gjenbruk er tilfeldig, og ingen oppgave er dokumentert gjentatt ordrett"],
      explanation: "Folkerettsoppgaven om lovlig maktbruk sto ordrett både i H2018 og i H2022, men instruks, vekting og tid står i ditt eget sett og har variert. Ingen to sett i grunnlaget er identiske dokumenter, og gjenbruk er dokumentert i flere søyler enn økonomi.",
    },
  ],
  'inter1000-6-8': [
    {
      question: "Hva kjennetegner en jevnt god (C) besvarelse i IP-drøftingsoppgaven?",
      options: ["Den er korrekt og ryddig, men teorien beskrives i stedet for å anvendes på selve saken", "Den har riktige begreper og god drøfting, men mangler et konkret eksempel til slutt", "Den har feil i sentrale begreper, og drøftingen bygger derfor på et skjevt grunnlag", "Den anvender teorien godt, men lander uten å si hva som ville snudd konklusjonen"],
      explanation: "C-nivået gjør ingen feil — det gjør bare ikke nok, og signaturen er teori som er riktig gjengitt uten å forklare noe i saken. Feil i sentrale begreper hører til minimumskravet, siden presisjon på akse 1 er inngangsbilletten.",
    },
    {
      question: "Hva er den avgjørende testen på om teorien i et avsnitt faktisk er anvendt?",
      options: ["Om avsnittet fortsatt står like riktig når fenomenet byttes ut med et annet", "Om avsnittet oppgir hvilken forfatter tradisjonen stammer fra", "Om avsnittet omtaler minst to tradisjoner, slik at de kan settes opp mot hverandre", "Om avsnittet står i drøftingsleddet og ikke i det redegjørende leddet av svaret"],
      explanation: "Ramset teori er sann om alt og forklarer ingenting, og byttetesten avslører det umiddelbart. Riktig avsender og riktig plassering er begge tegn på presisjon, men et avsnitt kan ha begge deler og likevel ikke si noe om saken.",
    },
    {
      question: "Hva kjennetegner midtnivå-besvarelsen (B) i dette kapitlet?",
      options: ["Teorien er anvendt, men bare på halve fenomenet, og ett begrep er upresist gjengitt", "Teorien er riktig gjengitt uten å anvendes, og eksempelet mangler helt i teksten", "Alle grepene er på plass, men språket er for muntlig til å nå toppen av skalaen", "Hovedbildet er riktig, men kronologien og de sentrale begrepene er upresise"],
      explanation: "Midtnivået er et faglig godt svar der én tradisjon faktisk er anvendt og eksempelet er godt valgt — det som gjenstår, er anvendelse på den andre halvparten, akser i sammenligningen og en landing som sier hva som ville snudd den. At språket alene skulle avgjøre karakteren, er en utbredt misforståelse.",
    },
    {
      question: "Hva kreves for at en sammenligning skal regnes som fullstendig?",
      options: ["At begge ledd behandles på hver av aksene sammenligningen er lagt opp etter", "At begge ledd får omtrent like mange linjer i besvarelsen, slik at vekten er jevn", "At begge ledd beskrives ferdig hver for seg før konklusjonen trekkes til slutt", "At begge ledd knyttes til hver sin teoritradisjon"],
      explanation: "Kravet er at leddene møtes: én akse om gangen, med begge alternativene på hver. Å beskrive det ene ferdig og så det andre er nettopp den ufullstendige sammenligningen, og lik lengde er ingen garanti for at noe faktisk er sammenlignet.",
    },
    {
      question: "Hvor godt dokumentert er modellene for fremtidige verdensordener i grunnlaget vårt?",
      options: ["De er dokumentert i kun H2024, og forekommer dermed i 1 av 15 terminer", "De er dokumentert i 9 av 15 terminer og er dermed et av de tyngste temaene", "De er dokumentert i 5 av 15 terminer, alle mellom H2010 og H2014", "De er dokumentert i 12 av 15 terminer og går igjen i nesten alle sett"],
      explanation: "Modellene finnes i ett eneste sett, H2024, og skal derfor aldri omtales som noe som går igjen. Tallet 12 av 15 hører til teoritradisjonene generelt, og 5 av 15 hører til det tverrfaglige storessayet.",
    },
    {
      question: "Hva er statusen til det tverrfaglige storessayet i dag?",
      options: ["Det er ute av bruk som eksamensform, men trenes fordi det øver vekslingen", "Det er hovedformen i dagens eksamen, og de fire oppgavene bygger på det", "Det er en valgfri oppgavetype som fortsatt tilbys ved siden av de fire brede", "Det er erstattet av semesteroppgaven, som nå dekker den tverrfaglige delen"],
      explanation: "Storessayet er dokumentert i 5 av 15 terminer, alle mellom H2010 og H2014, og er ute av bruk som eksamensform. Vi trener det likevel fordi den tverrfaglige vekslingen fortsatt belønnes i dagens oppgaver, også der oppgaven formelt hører til én disiplin.",
    },
    {
      question: "Hva sier stryketesten om en tverrfaglig kobling?",
      options: ["Koblingen gjør en jobb hvis svaret blir dårligere uten den, og ikke bare kortere enn før", "Koblingen gjør en jobb hvis den henter et begrep fra en annen disiplin enn oppgavens", "Koblingen gjør en jobb hvis den kan belegges med et eksempel fra den andre disiplinen", "Koblingen gjør en jobb hvis den står i drøftingsleddet og ikke i redegjørelsen"],
      explanation: "En kobling må forklare, innvende eller presisere noe svaret ellers ikke ville hatt. At den henter et begrep fra en annen disiplin, gjør den tverrfaglig i formen, men bredde uten funksjon er nettopp det testen skal luke ut.",
    },
    {
      question: "Hva er feil #8?",
      options: ["Å svare fra favorittdisiplinen når oppgaven inviterer til flere fagvinkler", "Å nevne en teoritradisjon uten å anvende den på det oppgaven handler om", "Å svare uten et eneste konkret eksempel, slik at framstillingen blir abstrakt", "Å drøfte bare den ene siden når oppgaven ber om en balansert vurdering"],
      explanation: "Feil #8 handler om å overse den tverrfaglige rammen. Teori uten anvendelse er #4, manglende eksempler er #7 og ensidig drøfting er #5 — alle tre er nabofeil, og de opptrer ofte i samme besvarelse.",
    },
    {
      question: "Hva mangler C-besvarelsen på historieoppgaven i dette kapitlet?",
      options: ["Konkrete eksempler: ingen hendelse, ingen beslutning og ingen årstall", "Riktig kronologi i framstillingen av selve utbruddet", "Kjennskap til den historiografiske debatten mellom ideologi og maktpolitikk", "Balanse, siden bare den ene parten tillegges hensikter i hele besvarelsen"],
      explanation: "C-besvarelsen er korrekt og kjenner debatten, men den er helt uten empirisk forankring — det er manglende eksempler, og det alene holder den nede. Riktig kronologi og kjennskap til debatten er derimot på plass — det er E-besvarelsen på samme oppgave som bommer på kronologien.",
    },
    {
      question: "Hvilken setning gjør at et eksempel faktisk teller?",
      options: ["Setningen etter eksempelet som sier hva eksempelet viser", "Setningen foran eksempelet som sier hvor det er hentet fra", "Setningen som oppgir årstall og sted for hendelsen det gjelder", "Setningen som knytter eksempelet til en navngitt teoritradisjon"],
      explanation: "Et eksempel belegger ingenting før det står hva det viser. Årstall gjør eksempelet presist, men presisjon uten kobling til påstanden gir fortsatt et eksempel som står som pynt.",
    },
    {
      question: "Hva er sikkerhetsdilemmaet anvendt på årene 1945 til 1949?",
      options: ["At hvert defensivt trekk ble lest som offensivt av den andre, som svarte", "At begge parter bevisst valgte konfrontasjon for å styrke sin egen posisjon", "At partene manglet informasjon om hverandres militære styrke i denne perioden", "At de to statene inngikk avtaler de ikke hadde til hensikt å overholde"],
      explanation: "Dilemmaet er at trekk ment som sikring virker truende på motparten, hvis svar bekrefter den opprinnelige mistanken. At konfrontasjonen var villet fra start, er den motsatte påstanden — og det er nettopp den mekanismen som gjør at ingen trenger å ha ønsket utfallet.",
    },
    {
      question: "Hvordan lander den meget gode besvarelsen på den kalde krigens utbrudd?",
      options: ["Ved å si hva hver forklaring forklarer best, og hva som ville snudd vektingen", "Ved å konstatere at både ideologi og maktpolitikk virket sammen om utbruddet", "Ved å velge ideologien, siden den forklarer hvorfor konflikten ble så langvarig", "Ved å la spørsmålet stå åpent, siden historikerne fortsatt er uenige om svaret"],
      explanation: "En begrunnet landing deler spørsmålet — hva forklarer hva best — og sier hva som skulle til for å vekte motsatt. At forklaringene virket sammen, er en konstatering uten innhold før den delingen er gjort, og å la spørsmålet stå åpent er ingen landing.",
    },
    {
      question: "Hvorfor er kvotehandel kostnadseffektivt?",
      options: ["De som kan kutte billigst, kutter mest og selger kvoter til dem med dyre kutt", "Kvoter er billigere for bedriftene enn en avgift på det samme utslippet ville vært", "Myndighetene kan bestemme både prisen og mengden når kvoter brukes som virkemiddel", "Kvoter rammer bare de største utslippskildene, mens en avgift rammer alle likt"],
      explanation: "Mekanismen er at rensekostnaden utjevnes på marginen, slik at et gitt mål nås til lavest samlet kostnad. At kvoter i seg selv er billigere enn en avgift, er den nære fellen — en avgift gir samme utjevning, og forskjellen er om myndighetene fastsetter prisen eller mengden.",
    },
    {
      question: "Hva er skillet mellom bindende form og bindende innhold i klimaregimet?",
      options: ["Avtalen er folkerettslig bindende, mens hvert land selv fastsetter sitt bidrag", "Avtalen er politisk erklæring, mens de nasjonale bidragene er rettslig bindende", "Avtalen binder rike land rettslig, mens fattige land bare rapporterer frivillig", "Avtalen binder statene først når nasjonalforsamlingen har vedtatt den internt"],
      explanation: "Formen er bindende, innholdet i bidragene er nasjonalt fastsatt, og rapportering og innsyn erstatter håndheving. At det er de nasjonale bidragene som er rettslig bindende, snur forholdet på hodet — og det er nettopp det valget som gjorde bred deltakelse mulig.",
    },
    {
      question: "Hva kjennetegner en jevnt god besvarelse på den tverrfaglige oppgaven?",
      options: ["Den er en god enkeltfagsbesvarelse, med de andre vinklene nevnt til slutt", "Den bruker alle fire vinkler, men mangler mekanismen i den økonomiske delen", "Den bruker to av fire vinkler grundig, og lar de to andre stå helt utenfor", "Den bruker alle fire vinkler, men uten eksempler og uten en begrunnet landing"],
      explanation: "På dette nivået bærer én disiplin hele svaret, mens de tre andre samles i et avsluttende avsnitt uten å forandre analysen. Testen er å stryke det avsnittet: blir svaret bare kortere, gjorde vinklene ingen jobb.",
    },
    {
      question: "Hva kreves for at en avveiende landing skal være faglig god?",
      options: ["At selve avveiningen begrunnes, for eksempel med at problemene har ulik natur", "At begge hensyn får like mye plass, slik at ingen av dem framstår som viktigst", "At landingen unngår å velge, siden et valg vil svekke balansen i drøftingen", "At landingen viser til at faglitteraturen er delt i synet på dette spørsmålet"],
      explanation: "En avveining er en konklusjon bare når den har grunner — for eksempel at kostnadsproblemet og deltakelsesproblemet ikke lar seg løse med samme instrument. Å unngå å velge er ren gjengivelse uten drøfting, uansett hvor balansert plassfordelingen er.",
    },
    {
      question: "Hva innebærer mildhetsforbeholdet i vurderingen?",
      options: ["Kandidatene er førsteårsstudenter, så solid hovedforståelse slår ambisjon som bommer", "Kandidatene får en mildere vurdering på det redegjørende leddet enn på drøftingen", "Kandidatene skal ikke trekkes for feil i begreper, siden emnet er et innføringsemne", "Kandidatene vurderes mildere i de disiplinene de har hatt færrest forelesninger i"],
      explanation: "Forbeholdet setter et tak for hvor dypt det kan kreves, ikke et fritak fra presisjon: den eksplisitte tallfestingen står i H2018-veiledningen, mens substansen gjentas gjennom hele perioden. Presisjon på begreper er fortsatt inngangsbilletten, og feil der kan ikke oppveies av god drøfting.",
    },
    {
      question: "Hva betyr det at oppgaven om den kalde krigens utbrudd er gjenbrukt ordrett fra H2018 til H2022?",
      options: ["Spørsmålet kan komme igjen, men instruks, vekting og tid står i ditt eget sett", "Hele oppgavesettet fra H2018 ble brukt på nytt, slik at også rubrikken var lik", "Temaet er garantert å komme igjen, siden det er gjenbrukt flere ganger allerede", "Sensorveiledningen fra H2018 gjelder også for besvarelsene som ble levert i H2022"],
      explanation: "Gjenbruket gjelder spørsmålene, ikke rubrikken: H2010 og H2012 stiller de samme fem spørsmålene ordrett, men H2010 vekter oppgave 1 til 75 prosent, mens H2012 oppgir fire timer og ingen vekting. Det er enkeltoppgaver som gjenbrukes, ikke hele sett, og gjenbruk er en dokumentert mulighet — ikke en garanti.",
    },
  ],
};

export default quizData_inter1000;
