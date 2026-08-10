import type { QuizQuestion } from './quiz-data';

const quizData_it_2: Record<string, QuizQuestion[]> = {
  "it-2-1-1": [
    {
      question: "Hva er et programmeringsparadigme?",
      options: ["En grunnleggende stil eller filosofi for hvordan vi organiserer og strukturerer kode", "En fysisk komponent i datamaskinen som utfører selve programkjøringen på lavt nivå", "En standardisert feilmelding som oppstår når koden er skrevet i feil rekkefølge", "Et sett med regler for hvordan datamaskiner sender pakker over et nettverk"],
      explanation: "Et programmeringsparadigme er en grunnleggende stil eller filosofi for hvordan vi organiserer kode, for eksempel prosedyrell eller objektorientert programmering.",
    },
    {
      question: "Hva er en klasse i objektorientert programmering?",
      options: ["En mal eller oppskrift for å lage objekter", "En konkret instans som allerede er laget fra malen", "En melding programmet gir når noe går galt under kjøring av koden", "En ferdig instans som allerede ligger i minnet med sine egne verdier"],
      explanation: "En klasse er en mal eller oppskrift for å lage objekter (som en kakeform), mens et objekt er en konkret instans av klassen.",
    },
    {
      question: "I hvilket land og av hvem ble det første OOP-språket Simula utviklet?",
      options: ["I Norge, av Ole-Johan Dahl og Kristen Nygaard", "I England, av Tim Berners-Lee", "I USA, av Bill Gates og Paul Allen tidlig på 1970-tallet", "I England, av Tim Berners-Lee ved forskningssenteret CERN"],
      explanation: "Det første OOP-språket, Simula, ble utviklet i Norge på 1960-tallet av Ole-Johan Dahl og Kristen Nygaard ved Norsk Regnesentral.",
    },
    {
      question: "Hvilket paradigme brukes når man har en funksjon som tar inn data og returnerer et resultat, uten at data og funksjon er samlet i et objekt?",
      options: ["Prosedyrell programmering", "Objektorientert programmering", "Funksjonell innkapsling", "Polymorf programmering"],
      explanation: "Dette er prosedyrell programmering. Data og funksjon er ikke samlet i et objekt, men funksjonen tar inn data og returnerer et resultat.",
    },
    {
      question: "Når er OOP spesielt nyttig?",
      options: ["Når programmet er stort og komplekst", "Når man bare skal regne ut én enkel formel", "Når man aldri har behov for å gjenbruke kode", "Når man bare skal jobbe med enkle tall"],
      explanation: "OOP er kraftig når programmet er stort og komplekst, og når man vil organisere koden i gjenbrukbare moduler. For helt enkle oppgaver kan prosedyrell være bedre.",
    },
  ],
  "it-2-1-2": [
    {
      question: "Hva heter konstruktørmetoden i en Python-klasse?",
      options: ["__init__", "__main__", "constructor", "new"],
      explanation: "Konstruktøren er en spesiell metode som kjører automatisk når et nytt objekt opprettes. I Python heter den alltid __init__.",
    },
    {
      question: "Hva refererer self til i en Python-klasse?",
      options: ["Objektet selv som metoden kalles på", "Modulen filen ligger i", "Modulen eller filen som klassen og koden er definert inne i", "Selve klassen som helhet"],
      explanation: "self refererer til objektet selv – det objektet som metoden kalles på. Det gir tilgang til objektets egne attributter.",
    },
    {
      question: "Hva er forskjellen mellom en klasse og et objekt?",
      options: ["En klasse er en mal, et objekt er en konkret instans av klassen med egne verdier", "En klasse kan ikke ha metoder, mens et objekt alltid inneholder metodene", "Et objekt er malen som klasser lages fra, mens klassen er den konkrete instansen", "De betyr nøyaktig det samme, bare med to ulike navn på samme ting"],
      explanation: "En klasse er en mal som definerer attributter og metoder, mens et objekt er en konkret instans av klassen med sine egne verdier.",
    },
    {
      question: "Hva skjer hvis du lager mange objekter av samme klasse?",
      options: ["Hvert objekt har sine egne attributtverdier og er uavhengig av de andre", "Bare ett objekt kan eksistere om gangen", "Bare ett objekt av en klasse kan eksistere i minnet om gangen under kjøring", "Programmet krasjer fordi det ikke er lov å lage mer enn ett objekt per klasse"],
      explanation: "Du kan lage mange objekter fra samme mal. Hvert objekt har sine egne attributtverdier og er uavhengig av de andre.",
    },
    {
      question: "Hva gjør en metode som bruker return?",
      options: ["Den sender en verdi tilbake til koden som kalte den", "Den skriver alltid ut resultatet direkte til konsollen", "Den oppretter automatisk en helt ny klasse basert på verdien", "Den skriver alltid verdien ut direkte til skjermen for brukeren"],
      explanation: "En metode som bruker return sender en verdi tilbake til stedet den ble kalt fra, akkurat som vanlige funksjoner.",
    },
  ],
  "it-2-1-3": [
    {
      question: "Hva betyr innkapsling (encapsulation)?",
      options: ["Å pakke data og metoder sammen i en klasse og skjule den interne implementasjonen", "Å gjøre alle attributter offentlige slik at de kan endres fritt utenfra klassen", "Å fjerne alle metoder fra klassen så den bare inneholder rene dataverdier", "Å lage en fullstendig kopi av en klasse med et nytt navn i programmet"],
      explanation: "Innkapsling betyr å pakke data (attributter) og funksjoner (metoder) sammen i en klasse og samtidig skjule den interne implementasjonen fra omverdenen.",
    },
    {
      question: "Hvordan markeres et privat attributt i Python?",
      options: ["Med to understreker foran navnet, som self.__saldo", "Med nøkkelordet private plassert foran attributtnavnet", "Med nøkkelordet private foran attributtet, slik man gjør i Java og C#", "Med firkantparenteser rundt navnet, for eksempel self.[saldo] i klassen"],
      explanation: "I Python markeres private attributter med understreker foran navnet. To understreker (self.__saldo) gir sterkest beskyttelse.",
    },
    {
      question: "Hva er en property i Python?",
      options: ["En måte å la en metode oppføre seg som et attributt, slik at man kan kontrollere tilgang", "En spesiell type løkke som gjentar en metode helt til attributtet endrer verdi", "En innebygd feilmelding som oppstår når man leser et privat attributt utenfra", "En global variabel som er tilgjengelig for alle klassene i hele programmet"],
      explanation: "En property gjør at en metode kan brukes som om den var et attributt, noe som gir elegant tilgangskontroll i Python.",
    },
    {
      question: "Hva er hovedformålet med information hiding?",
      options: ["Å redusere kompleksitet og beskytte data mot ugyldige verdier", "Å holde koden hemmelig for andre utviklere", "Å holde selve kildekoden hemmelig for andre utviklere i prosjektet", "Å gjøre programmet raskere ved å fjerne unødvendige metodekall internt"],
      explanation: "Information hiding handler ikke om hemmelighold, men om å redusere kompleksitet og beskytte data, for eksempel ved å validere verdier før de lagres.",
    },
    {
      question: "Hvordan lager man en read-only property?",
      options: ["Ved å lage en getter uten en tilhørende setter", "Ved å gjøre attributtet offentlig", "Ved å fjerne konstruktøren slik at verdien ikke kan settes ved oppstart", "Ved å fjerne konstruktøren"],
      explanation: "En read-only property lages ved å lage en getter uten setter, slik at verdien kan leses, men ikke endres utenfra.",
    },
  ],
  "it-2-1-4": [
    {
      question: "Hva er arv (inheritance) i OOP?",
      options: ["Når en subklasse overtar attributter og metoder fra en superklasse", "Når man kopierer hele kildekodefilen og gir kopien et helt nytt filnavn", "Når to klasser slettes samtidig fordi de deler de samme attributtene", "Når en variabel automatisk endrer datatype under kjøring av programmet"],
      explanation: "Arv er når en klasse (subklassen) overtar attributter og metoder fra en annen klasse (superklassen).",
    },
    {
      question: "Hva brukes super() til i en konstruktør?",
      options: ["Å kalle metoder fra superklassen, for eksempel for å gjenbruke oppsettskode", "Å avslutte programmet umiddelbart etter at konstruktøren er ferdig kjørt", "Å lage et helt nytt objekt fra bunnen uten å bruke superklassens kode", "Å slette superklassen fra minnet når subklassen er ferdig satt opp"],
      explanation: "super() brukes til å kalle metoder fra superklassen. Det er spesielt nyttig i konstruktører (__init__) for å gjenbruke oppsettskode.",
    },
    {
      question: "Hva betyr det å overstyre (override) en metode?",
      options: ["En subklasse definerer en metode med samme navn som i superklassen for å spesialisere oppførselen", "Man sletter metoden fra superklassen slik at bare subklassen har den igjen", "Man kjører metoden fra superklassen to ganger etter hverandre automatisk", "Man gir metoden et helt nytt navn i subklassen for å unngå navnekonflikt"],
      explanation: "Å overstyre (override) en metode betyr at en subklasse definerer en metode med samme navn som i superklassen, og dermed spesialiserer oppførselen.",
    },
    {
      question: "Hva gjør isinstance()?",
      options: ["Sjekker om et objekt er av en bestemt klasse eller arver fra den", "Sletter en klasse og alle objektene som er laget fra den malen", "Lager et nytt objekt av den angitte klassen og legger det i minnet", "Returnerer antallet objekter som er opprettet av klassen"],
      explanation: "isinstance() brukes til å sjekke om et objekt er av en bestemt klasse, eller arver fra en klasse.",
    },
    {
      question: "Når bør man bruke arv?",
      options: ["Når det er en klar «is-a»-relasjon, som at en Elbil er en Bil", "Når to klasser ikke har noe som helst til felles i data eller oppførsel", "Når to klasser ikke har noe til felles, men likevel må dele litt data", "Bare når man jobber med rene talloperasjoner og matematiske beregninger"],
      explanation: "Arv bør brukes når det er en klar «is-a»-relasjon (en Elbil er en Bil) og subklassen er en spesialisering av superklassen.",
    },
  ],
  "it-2-1-5": [
    {
      question: "Hva er polymorfisme?",
      options: ["At objekter av ulike klasser kan behandles likt, men oppføre seg forskjellig", "At en klasse bare kan definere én eneste metode, som alle objektene må kalle på", "At alle objektene i et program må være helt identiske i oppbygning og verdier", "At data alltid lagres i en fil på disk framfor å ligge i minnet under kjøring"],
      explanation: "Polymorfisme (poly = mange, morph = form) er evnen til at objekter av ulike klasser kan behandles likt – ved å kalle samme metode – men oppføre seg forskjellig.",
    },
    {
      question: "Hva er duck typing i Python?",
      options: ["Python sjekker om objektet har metoden vi prøver å kalle, ikke hvilken klasse det tilhører", "En innebygd metode for å sortere en liste med elementer i stigende rekkefølge", "En spesiell måte å definere heltall og desimaltall på i Python-programmer", "En type kryptering som skjuler objektets attributter for andre klasser"],
      explanation: "Duck typing betyr at Python ikke sjekker hvilken klasse et objekt tilhører, men bare om objektet har metoden vi prøver å kalle.",
    },
    {
      question: "Hva kjennetegner en abstrakt klasse?",
      options: ["Den kan ikke instansieres direkte og fungerer som en mal subklasser må følge", "Den kan brukes direkte uten subklasser fordi den alt implementerer alt selv", "Den har ingen metoder i det hele tatt og inneholder derfor bare attributter", "Den kan bare inneholde tallverdier, ikke tekst eller andre datatyper"],
      explanation: "En abstrakt klasse kan ikke instansieres direkte. Den fungerer som en mal som definerer et felles grensesnitt subklassene må implementere.",
    },
    {
      question: "Hva sier åpen/lukket-prinsippet (Open/Closed Principle)?",
      options: ["Programvare skal være åpen for utvidelse, men lukket for endring", "All kode skal være åpen for alle som vil lese den", "All kildekode skal være åpen og fritt tilgjengelig for alle utviklere", "Ferdige programmer skal aldri endres etter at de er tatt i bruk i drift"],
      explanation: "Åpen/lukket-prinsippet sier at programvare skal være åpen for utvidelse, men lukket for endring – man legger til ny funksjonalitet uten å endre eksisterende kode.",
    },
    {
      question: "Hva er dunder-metoder i Python?",
      options: ["Spesialmetoder med dobbel understrek, som __len__, som gir innebygd polymorfisme", "En egen type feilmelding som oppstår når man bruker doble understreker på feil måte", "Globale variabler som deles mellom alle klassene og objektene i programmet", "Spesielle metoder som bare kan kalles én eneste gang per objekt i minnet"],
      explanation: "Dunder-metoder (double underscore) som __len__ lar dine egne klasser fungere med innebygde funksjoner som len(), og gir innebygd polymorfisme i Python.",
    },
  ],
  "it-2-2-1": [
    {
      question: "Hva er komposisjon i OOP?",
      options: ["Når ett objekt inneholder andre objekter som en del av sin tilstand («har-en»)", "Når en klasse arver alle attributter og metoder fra en annen klasse («er-en»)", "Når to selvstendige klasser slås sammen til én felles klasse ved kompilering", "Når man sletter et objekt fra minnet sammen med alle delene det inneholdt"],
      explanation: "Komposisjon er når ett objekt inneholder ett eller flere andre objekter som en del av sin tilstand. Vi sier at objektet «har-en» relasjon til de andre.",
    },
    {
      question: "Hva sier designprinsippet «favor composition over inheritance»?",
      options: ["Foretrekk å bygge funksjonalitet ved å kombinere objekter framfor å arve oppførsel", "Bruk alltid arv framfor komposisjon, siden dype arvehierarkier er de enkleste å endre", "Bruk bare globale funksjoner istedenfor objekter når du skal kombinere ulik oppførsel", "Unngå å bruke klasser helt, og bygg heller alt med enkle globale funksjoner"],
      explanation: "«Favor composition over inheritance» sier at man bør foretrekke å bygge funksjonalitet ved å kombinere objekter (komposisjon) framfor å arve oppførsel (arv).",
    },
    {
      question: "Hva er forskjellen mellom komposisjon og aggregering?",
      options: ["Ved komposisjon eksisterer ikke de inneholdte objektene uten helheten; ved aggregering kan de eksistere uavhengig", "Komposisjon brukes bare på tallverdier, mens aggregering brukes på tekststrenger", "De to begrepene betyr nøyaktig det samme og brukes helt om hverandre i praksis", "Aggregering er egentlig en form for arv der subklassen overtar helhetens deler"],
      explanation: "Komposisjon er en sterk binding der de inneholdte objektene ikke eksisterer uten helheten, mens aggregering er en svakere form der objektene kan eksistere uavhengig.",
    },
    {
      question: "Hva slags relasjon beskriver «Bil har en Motor»?",
      options: ["En komposisjons-/«har-en»-relasjon", "En arv-/«er-en»-relasjon", "En polymorf relasjon der Bil og Motor byttes ut", "En polymorf relasjon"],
      explanation: "«Bil har en Motor» er en komposisjons-relasjon («har-en»), der Bil inneholder en Motor som del av sin tilstand, i stedet for å arve fra den.",
    },
    {
      question: "Hvilken fordel gir komposisjon framfor arv?",
      options: ["Mer fleksibilitet, fordi man kan kombinere oppførsel uten dype arvehierarkier", "At koden alltid blir tregere fordi objektene stadig må slå opp hverandre i minnet", "At objektene ikke lenger trenger å ha noen egne attributter for å oppføre seg riktig", "At man helt slipper å skrive klasser og i stedet bare kan bruke frittstående funksjoner"],
      explanation: "Komposisjon gir mer fleksibilitet fordi man kan kombinere oppførsel ved å sette sammen objekter, i stedet for å låse seg til dype, stive arvehierarkier.",
    },
  ],
  "it-2-2-2": [
    {
      question: "Hva betyr LIFO i en stakk (stack)?",
      options: ["Last In, First Out – det siste elementet inn er det første ut", "Least Important, First Out – det minst viktige elementet tas ut først", "List In, File Out – hele listen legges inn og lagres deretter til en fil", "Last In, First Output – det siste elementet skrives alltid ut på skjermen"],
      explanation: "En stakk er en LIFO-struktur: Last In, First Out. Det siste elementet som legges på, er det første som tas av.",
    },
    {
      question: "Hva betyr FIFO i en kø (queue)?",
      options: ["First In, First Out – det første elementet inn er det første ut", "First In, Final Output – det første inn skrives ut sist", "Fast In, Fast Out – elementene legges inn og tas ut så raskt som mulig", "File In, File Out – hele filer legges i køen og skrives ut igjen i tur"],
      explanation: "En kø er en FIFO-struktur: First In, First Out. Det første elementet som legges inn, er det første som tas ut – som en kø i butikken.",
    },
    {
      question: "Hvilken operasjon legger et element på toppen av en stakk?",
      options: ["push", "enqueue", "dequeue", "peek"],
      explanation: "push legger et element på toppen av stakken, mens pop fjerner og returnerer toppelementet.",
    },
    {
      question: "Hvilken datastruktur passer best for en angre-funksjon (undo)?",
      options: ["En stakk (LIFO)", "En kø (FIFO)", "En mengde (set)", "En ordbok (dict)"],
      explanation: "En stakk passer perfekt for angre-funksjoner fordi den siste handlingen som ble gjort, er den første som skal angres (LIFO).",
    },
    {
      question: "Hva er collections.deque nyttig til i Python?",
      options: ["En effektiv implementasjon av køer og stakker", "Å koble til en database", "Å sortere tall raskt i en liste", "Å lese og skrive tekstfiler på disk"],
      explanation: "collections.deque er Pythons innebygde, effektive implementasjon som egner seg godt for både køer (enqueue/dequeue) og stakker.",
    },
  ],
  "it-2-2-3": [
    {
      question: "Hva lagrer en ordbok (dictionary)?",
      options: ["Nøkkel-verdi-par der hver nøkkel er unik", "Bare unike enkeltverdier uten nøkler", "En ordnet sekvens av verdier med indeks", "Bare en ordnet liste av tall"],
      explanation: "En ordbok lagrer nøkkel-verdi-par der hver nøkkel er unik og brukes til å slå opp verdien.",
    },
    {
      question: "Hvilken datastruktur ligger til grunn for ordbøker og gir raskt oppslag?",
      options: ["Hashtabell", "Lenket liste", "Binærtre", "Stakk"],
      explanation: "Hashtabellen er den underliggende datastrukturen for ordbøker. Den bruker en hash-funksjon for å gi raskt oppslag (typisk O(1)).",
    },
    {
      question: "Hva kjennetegner en mengde (set)?",
      options: ["En uordnet samling av unike elementer der duplikater fjernes", "En struktur som bare kan inneholde tekst", "En samling par der hver unike nøkkel peker på en tilhørende lagret verdi", "En struktur som kun kan lagre tekststrenger og bevarer innsettingsrekkefølgen"],
      explanation: "En mengde (set) er en uordnet samling av unike elementer. Duplikater fjernes automatisk.",
    },
    {
      question: "Hva er en god bruk av en mengde (set)?",
      options: ["Å finne eller fjerne duplikater i en liste", "Å lagre data i bestemt rekkefølge", "Å implementere en angre-funksjon der siste handling tas ut aller først", "Å implementere en angre-funksjon"],
      explanation: "En mengde er perfekt for å finne eller fjerne duplikater, siden den automatisk bare beholder unike elementer.",
    },
    {
      question: "Hvor raskt er oppslag i en ordbok via hashtabell typisk?",
      options: ["O(1) – konstant tid", "O(n) – lineær tid i antall elementer", "O(n²) – kvadratisk tid", "O(log n) – logaritmisk tid"],
      explanation: "Ordbøker gir typisk O(1)-oppslag (konstant tid) via hashtabeller, noe som gjør dem svært raske for å slå opp data med en nøkkel.",
    },
  ],
  "it-2-2-4": [
    {
      question: "Hva er et designmønster?",
      options: ["En generell, gjenbrukbar løsning på et vanlig problem i programvaredesign", "Et fast utseende på en nettside som gjentas på alle undersidene i hele løsningen", "Et fast visuelt utseende med farger og layout som gjenbrukes på flere nettsider", "En ferdig algoritme som sorterer data effektivt uansett hvilket problem du løser"],
      explanation: "Et designmønster er en generell, gjenbrukbar løsning på et vanlig problem i programvaredesign – en mal eller oppskrift, ikke ferdig kode.",
    },
    {
      question: "Hva gjør Observer-mønsteret?",
      options: ["Lar flere objekter varsles automatisk når noe endres, ved at de «abonnerer» på hendelser", "Lager objekter uten å spesifisere klasse", "Lar deg opprette objekter uten å oppgi den eksakte klassen", "Lar deg bytte ut algoritmen på kjøretid blant flere varianter"],
      explanation: "Observer-mønsteret lar flere objekter varsles automatisk når noe endres, ved at de «abonnerer» på hendelser (løs kobling).",
    },
    {
      question: "Hva gjør Strategy-mønsteret?",
      options: ["Lar deg definere en familie av algoritmer, innkapsle hver, og gjøre dem utskiftbare", "Skjuler den eksakte klassen ved objektoppretting", "Lagrer og henter data i en database via et felles grensesnitt uavhengig av tabellene", "Lar flere objekter abonnere på hendelser og bli varslet automatisk når noe endrer seg"],
      explanation: "Strategy-mønsteret lar deg definere en familie av algoritmer, innkapsle hver av dem og gjøre dem utskiftbare, slik at du enkelt kan bytte mellom dem.",
    },
    {
      question: "Hva brukes Factory-mønsteret til?",
      options: ["Å opprette objekter uten å spesifisere den eksakte klassen", "Å abonnere på hendelser fra andre objekter", "Å sortere lister effektivt ved å definere utskiftbare sammenlikningsalgoritmer", "Å skjule klassens attributter bak metoder"],
      explanation: "Factory-mønsteret brukes til å opprette objekter uten å spesifisere den eksakte klassen, for å skjule kompleks objektoppretting.",
    },
    {
      question: "Hva er en fordel med å bruke designmønstre?",
      options: ["De gir et felles språk og beprøvde løsninger på gjentakende problemer", "De fjerner behovet for testing fordi mønstrene allerede er standardiserte", "De garanterer at koden alltid blir kortere fordi ferdige biblioteker gjenbrukes", "De fjerner behovet for testing siden mønstrene allerede er bevist å fungere feilfritt"],
      explanation: "Designmønstre gir et felles språk mellom utviklere og beprøvde, gjenbrukbare løsninger på problemer som dukker opp igjen og igjen.",
    },
  ],
  "it-2-2-5": [
    {
      question: "Hva står UML for?",
      options: ["Unified Modeling Language", "Universal Machine Language", "User Markup Logic", "Unique Method List"],
      explanation: "UML står for Unified Modeling Language og er et standardisert visuelt språk for å tegne og dokumentere programvaredesign.",
    },
    {
      question: "Hvilke tre deler vises i et klassediagram?",
      options: ["Navn, attributter og metoder", "Header, body og footer i klassen", "Inndata, utdata og eventuelle feil", "Input, output og feilhåndtering"],
      explanation: "Et klassediagram viser klassens navn øverst, attributter (variabler) i midten og metoder nederst.",
    },
    {
      question: "Hvordan vises arv i et UML-klassediagram?",
      options: ["Med en pil med hvit (åpen) trekant", "Med en stiplet sirkel", "Med stiplet linje og åpen sirkel", "Med et spørsmålstegn"],
      explanation: "Arv (inheritance) vises i et klassediagram med en pil med hvit (åpen) trekant, for eksempel Student ──▷ Person.",
    },
    {
      question: "Hva viser et use case-diagram?",
      options: ["Funksjonalitet fra brukerens perspektiv", "Hvordan minnet er organisert internt i systemet", "Hvordan minnet og lagringen er organisert internt i systemet under kjøring", "Hastigheten på algoritmene i systemet"],
      explanation: "Et use case-diagram viser funksjonaliteten i et system fra brukerens perspektiv, med aktører og de handlingene de kan utføre.",
    },
    {
      question: "Hva viser et sekvensdiagram?",
      options: ["Hvordan objekter samhandler over tid gjennom meldinger", "Klassens attributter og metoder samlet i én enkelt oversikt", "Klassens navn, attributter og metoder samlet i én statisk boks per klasse", "Hvordan tabeller, kolonner og relasjoner er strukturert i en relasjonsdatabase"],
      explanation: "Et sekvensdiagram viser hvordan objekter samhandler over tid, med objekter øverst, livslinjer nedover og meldinger som piler mellom dem.",
    },
  ],
  "it-2-3-1": [
    {
      question: "Hva beskriver tidskompleksitet?",
      options: ["Hvor mange operasjoner en algoritme må utføre som funksjon av input-størrelsen n", "Hvor mange linjer kode et program har", "Hvor mange kjente feil programmet inneholder ved levering", "Hvor mange linjer kildekode et program totalt består av"],
      explanation: "Tidskompleksitet er et mål på hvor mange operasjoner en algoritme må utføre som funksjon av input-størrelsen (n), uttrykt med Big O-notasjon.",
    },
    {
      question: "Hva er tidskompleksiteten til en enkel løkke som går gjennom alle n elementene én gang?",
      options: ["O(n)", "O(1)", "O(n²)", "O(log n)"],
      explanation: "En enkel løkke som går gjennom n elementer én gang har lineær tidskompleksitet, O(n).",
    },
    {
      question: "Hva er tidskompleksiteten til to nøstede løkker som hver går gjennom n elementer?",
      options: ["O(n²)", "O(n)", "O(1)", "O(log n)"],
      explanation: "To nøstede løkker som hver går gjennom n elementer gir O(n²) (kvadratisk tid), siden den indre løkken kjøres n ganger for hver av de n ytre iterasjonene.",
    },
    {
      question: "Hva er plasskompleksitet?",
      options: ["Et mål på hvor mye minne en algoritme bruker som funksjon av input-størrelsen", "Hvor stor skjermflate programmet trenger for å kunne vise alle dataene samtidig", "Hvor mange navngitte variabler kildekoden inneholder, uavhengig av datamengden", "Hvor lang kjøretid selve algoritmen bruker som funksjon av input-størrelsen (n)"],
      explanation: "Plasskompleksitet er et mål på hvor mye minne en algoritme bruker som funksjon av input-størrelsen, også uttrykt med Big O-notasjon.",
    },
    {
      question: "Hva advarte Donald Knuth mot med uttrykket «premature optimization is the root of all evil»?",
      options: ["Å bruke for mye tid på å optimalisere kode før det er nødvendig", "Å aldri optimalisere kode i det hele tatt, uansett hvor treg den blir", "Å optimalisere kode i det hele tatt, fordi rask kode nesten alltid blir uleselig", "Å skrive forklarende kommentarer i koden fordi det gjør programmet tregere å kjøre"],
      explanation: "Prematur optimalisering er å bruke for mye tid på å optimalisere kode før det er nødvendig. Knuth advarte mot dette fordi det kompliserer koden uten klar gevinst.",
    },
  ],
  "it-2-3-2": [
    {
      question: "Hva er tidskompleksiteten til binærsøk på en sortert liste?",
      options: ["O(log n)", "O(n²)", "O(n) – lineær", "O(n)"],
      explanation: "Binærsøk har O(log n) tidskompleksitet fordi det halverer søkeområdet for hver iterasjon, men det krever at listen er sortert.",
    },
    {
      question: "Hvilket krav stiller binærsøk til listen?",
      options: ["Listen må være sortert", "Listen må være usortert", "Listen må være tom", "Listen må bare inneholde tekst"],
      explanation: "Binærsøk krever at listen er sortert, fordi det baserer seg på å sammenligne med midtelementet og halvere søkeområdet.",
    },
    {
      question: "Hvilken sorteringsalgoritme bruker del-og-hersk (divide and conquer)?",
      options: ["Merge Sort", "Bubble Sort", "Selection Sort", "Insertion Sort"],
      explanation: "Merge Sort bruker del-og-hersk: den splitter listen i to halvdeler, sorterer hver halvdel rekursivt og fletter dem sammen. Den har O(n log n) tidskompleksitet.",
    },
    {
      question: "Hva er tidskompleksiteten til enkle sorteringsalgoritmer som Bubble Sort?",
      options: ["O(n²)", "O(n)", "O(log n)", "O(1)"],
      explanation: "Enkle sorteringsalgoritmer som Bubble Sort, Selection Sort og Insertion Sort har O(n²) tidskompleksitet i gjennomsnitt.",
    },
    {
      question: "Hvilken Python-funksjon returnerer en ny sortert liste uten å endre originalen?",
      options: ["sorted()", ".sort()", "order()", "arrange()"],
      explanation: "sorted() returnerer en ny sortert liste og lar originalen være uendret, mens metoden .sort() sorterer listen på stedet.",
    },
  ],
  "it-2-3-3": [
    {
      question: "Hva er en datastruktur?",
      options: ["En organisert måte å lagre og håndtere data på som gir effektiv tilgang", "Et programmeringsspråk med egen syntaks", "En standardisert feilmelding om hvor programmet stoppet", "En fysisk nettverkskabel mellom to maskiner"],
      explanation: "En datastruktur er en organisert måte å lagre og håndtere data på, som gir effektiv tilgang og modifikasjon.",
    },
    {
      question: "Hva blir igjen i stakken etter: push 1, push 2, push 3, pop, push 4, pop, pop?",
      options: ["[1]", "[1, 2]", "[4]", "Tom stakk"],
      explanation: "Stakken: [1,2,3] → pop fjerner 3 → [1,2] → push 4 → [1,2,4] → pop fjerner 4 → [1,2] → pop fjerner 2 → [1]. Igjen står [1].",
    },
    {
      question: "Hvilken datastruktur er best for å slå opp en elev raskt basert på elevnummer blant 10 000 elever?",
      options: ["En ordbok (dict) med elevnummer som nøkkel", "En usortert liste man søker gjennom fra start til slutt", "En usortert liste som gjennomsøkes lineært fra første til siste elevnummer", "En stakk der siste innlagte elev alltid ligger øverst og tas ut aller først"],
      explanation: "En ordbok med elevnummer som nøkkel gir O(1)-oppslag, mye raskere enn å søke lineært gjennom en liste med 10 000 elever.",
    },
    {
      question: "Hva er resultatet av A & B når A = {1,2,3,4,5} og B = {4,5,6,7,8}?",
      options: ["{4, 5}", "{1, 2, 3}", "{6, 7, 8}", "{1, 2, 3, 4, 5, 6, 7, 8}"],
      explanation: "Operatoren & gir snittet (intersection) av to mengder – elementene som finnes i begge. Her er det {4, 5}.",
    },
    {
      question: "Hva følger en kø (queue)?",
      options: ["FIFO – First In, First Out", "LIFO – Last In, First Out", "LIFO – Last In, First Out, altså sist inn er først ut som i en stakk", "Alfabetisk rekkefølge"],
      explanation: "En kø følger FIFO (First In, First Out): det første elementet som legges inn, er det første som tas ut – som en kø i butikken.",
    },
  ],
  "it-2-3-4": [
    {
      question: "Hva er de to nødvendige delene i en rekursiv funksjon?",
      options: ["Et basetilfelle og et rekursivt tilfelle", "En løkke og en betingelse", "En unik nøkkel og en tilhørende verdi som slås opp raskt via nøkkelen", "En klasse og et tilhørende objekt"],
      explanation: "En rekursiv funksjon trenger et basetilfelle (som stopper rekursjonen) og et rekursivt tilfelle (som forenkler problemet og kaller funksjonen på nytt).",
    },
    {
      question: "Hva returnerer summer(4) gitt: if n == 0: return 0; return n + summer(n - 1)?",
      options: ["10", "4", "0", "24"],
      explanation: "summer(4) = 4 + 3 + 2 + 1 + 0 = 10. Funksjonen legger sammen alle tallene fra n ned til 0.",
    },
    {
      question: "Hva er fakultet av 5 (5!)?",
      options: ["120", "25", "15", "720"],
      explanation: "5! = 5 × 4 × 3 × 2 × 1 = 120. Fakultet er det klassiske eksempelet på rekursjon, der n! = n × (n-1)!.",
    },
    {
      question: "Hva skjer hvis en rekursiv funksjon mangler et fungerende basetilfelle?",
      options: ["Den kaller seg selv for alltid og forårsaker stack overflow", "Den returnerer alltid verdien 0 til den som kalte", "Den gjør ingenting og hopper rett videre til neste linje i programmet", "Den kjører merkbart raskere fordi den slipper å sjekke stoppbetingelsen"],
      explanation: "Uten et fungerende basetilfelle kaller funksjonen seg selv uendelig, kall-stakken fylles opp, og programmet krasjer med stack overflow.",
    },
    {
      question: "Hva skjer på kall-stakken hver gang en rekursiv funksjon kaller seg selv?",
      options: ["Et nytt kall legges på stakken til basetilfellet nås", "Programmet avsluttes umiddelbart uten å returnere noen verdi", "Programmet avsluttes umiddelbart så snart det andre kallet skal begynne", "Ingenting skjer på stakken; funksjonen erstatter bare det forrige kallet"],
      explanation: "Hver gang en rekursiv funksjon kaller seg selv, legges et nytt kall på kall-stakken. Når basetilfellet nås, avvikles kallene i motsatt rekkefølge.",
    },
  ],
  "it-2-3-5": [
    {
      question: "Hvorfor bør man bruke \"with open(...) as fil:\" i Python?",
      options: ["Fordi filen da lukkes automatisk når blokken er ferdig", "Fordi det er den eneste måten å lese filer på", "Fordi innholdet da krypteres automatisk før det skrives ned til disken", "Fordi det er den eneste gyldige måten å lese en fil på i Python-språket"],
      explanation: "with open(...) as fil: sørger for at filen lukkes automatisk når blokken er ferdig, selv om det oppstår en feil underveis.",
    },
    {
      question: "Hvilken filmodus brukes for å lese fra en fil?",
      options: ["\"r\"", "\"w\"", "\"a\"", "\"x\""],
      explanation: "Modusen \"r\" (read) brukes for å lese fra en fil. \"w\" skriver (overskriver), og \"a\" legger til på slutten.",
    },
    {
      question: "Hva står CSV for?",
      options: ["Comma Separated Values", "Compact System Variables", "Coded Secure Version", "Central Sorting Value"],
      explanation: "CSV står for Comma Separated Values – et tekstbasert filformat der data er organisert i rader og kolonner, separert med komma (eller semikolon).",
    },
    {
      question: "Hva er en fordel med JSON framfor CSV?",
      options: ["JSON kan representere nestede og strukturerte data", "JSON kan ikke leses av mennesker", "JSON kan kun lagre tallverdier, mens CSV også håndterer tekst og datoer", "JSON er binært og kan derfor ikke åpnes og leses direkte av et menneske"],
      explanation: "JSON kan representere nestede og strukturerte data (objekter inne i objekter, lister osv.), mens CSV er begrenset til en flat tabell med rader og kolonner.",
    },
    {
      question: "Hva er pandas i Python?",
      options: ["Et kraftig bibliotek for dataanalyse og manipulasjon av strukturerte data", "En sorteringsalgoritme som brukes til å ordne svært store datamengder raskt", "En bestemt filtype med endelsen .pandas som lagrer tabelldata i ren binærform", "En nettverksprotokoll som overfører strukturerte data mellom klient og server"],
      explanation: "pandas er et kraftig Python-bibliotek for dataanalyse og manipulasjon. Det er standardverktøyet for å jobbe med strukturerte data, blant annet via DataFrames.",
    },
  ],
  "it-2-4-1": [
    {
      question: "Hva er et API?",
      options: ["Et sett av regler og protokoller som lar programmer kommunisere med hverandre", "En programmeringsfeil som gjør at programmet stopper midt under kjøringen av koden", "En type maskinvare som kobler datamaskinen til internett via kabel eller trådløst", "En vanlig programmeringsfeil som oppstår når to programmer prøver å kjøre samtidig"],
      explanation: "Et API (Application Programming Interface) er et sett av regler og protokoller som lar ulike programmer kommunisere med hverandre.",
    },
    {
      question: "Hvilken HTTP-metode brukes for å hente (lese) data fra et REST API?",
      options: ["GET", "POST", "PUT", "DELETE"],
      explanation: "GET brukes for å hente (lese) data, POST for å opprette, PUT for å oppdatere og DELETE for å slette.",
    },
    {
      question: "Hva er JSON i API-sammenheng?",
      options: ["Et tekstbasert dataformat som er standard for å utveksle data mellom programmer", "Et programmeringsspråk som brukes til å lage API-er", "En standardisert feilmelding som API-et returnerer når en forespørsel mislykkes", "Et fullverdig programmeringsspråk man skriver hele backend-logikken i API-et med"],
      explanation: "JSON (JavaScript Object Notation) er et tekstbasert dataformat som er lett å lese og er standard for de fleste moderne API-er.",
    },
    {
      question: "Hva er et API-endepunkt?",
      options: ["En spesifikk URL som utfører en bestemt funksjon i API-et", "En feil som oppstår i nettverket", "Et hemmelig passord for å få kalle API-et", "En variabel som lagrer svaret fra API-et"],
      explanation: "Et endepunkt (endpoint) er en spesifikk URL i et API som utfører en bestemt funksjon, for eksempel GET /users/123 for å hente en bruker.",
    },
    {
      question: "Hvorfor bruker mange API-er API-nøkler?",
      options: ["For å sikre at bare autoriserte brukere får tilgang og hindre misbruk", "For å fjerne behovet for HTTP i all kommunikasjon mellom klient og tjener", "For å sortere resultatene automatisk før de sendes tilbake til klienten", "For å fjerne behovet for HTTP, siden nøkkelen erstatter hele protokollen"],
      explanation: "API-nøkler brukes for å autentisere brukere, hindre misbruk (for mange forespørsler) og spore bruk, slik at bare autoriserte får tilgang.",
    },
  ],
  "it-2-4-2": [
    {
      question: "Hvilket Python-bibliotek brukes vanligvis for å sende HTTP-forespørsler?",
      options: ["requests", "pandas", "matplotlib", "numpy"],
      explanation: "requests-biblioteket gjør det enkelt å sende HTTP-forespørsler og motta svar i Python. Det må installeres med pip install requests.",
    },
    {
      question: "Hvilken HTTP-statuskode betyr at forespørselen var vellykket?",
      options: ["200 OK", "404 Not Found", "500 Internal Server Error", "403 Forbidden"],
      explanation: "Statuskode 200 OK betyr at forespørselen var vellykket. Koder i 2xx-serien indikerer suksess.",
    },
    {
      question: "Hva betyr statuskode 404?",
      options: ["Not Found – ressursen ble ikke funnet", "OK – alt gikk bra", "Created – en ny ressurs ble opprettet", "Forbidden – ingen tilgang"],
      explanation: "Statuskode 404 betyr Not Found – ressursen ble ikke funnet. Det er en klientfeil (4xx-serien).",
    },
    {
      question: "Hva blir en JSON-liste konvertert til i Python?",
      options: ["En list", "En dictionary", "En streng", "Et heltall"],
      explanation: "Når JSON konverteres til Python, blir en JSON-liste til en Python list, og et JSON-objekt blir til en Python dictionary.",
    },
    {
      question: "Hva er query-parametre i en API-forespørsel?",
      options: ["Tilleggsinformasjon i URL-en som filtrerer eller tilpasser dataene man får tilbake", "Et passord til serveren", "Et hemmelig passord man legger i URL-en for å bli autorisert av serveren bak API-et", "En standardisert type feilmelding som returneres når forespørselen mot API-et mislykkes"],
      explanation: "Query-parametre er tilleggsinformasjon i URL-en (etter ?) som lar deg filtrere eller tilpasse dataene, for eksempel ?q=python&limit=10.",
    },
  ],
  "it-2-4-3": [
    {
      question: "Hva betyr parsing av JSON?",
      options: ["Å lese og tolke JSON-data til Python-objekter", "Å konvertere Python-objekter til JSON-tekst", "Å konvertere Python-objekter som dict og list til en JSON-tekststreng", "Å komprimere JSON-data slik at filen tar mindre lagringsplass på disk"],
      explanation: "Parsing betyr å lese og tolke data fra et format (som JSON) til Python-objekter som dictionaries og lister.",
    },
    {
      question: "Hvilken Python-funksjon konverterer en JSON-streng til et Python-objekt?",
      options: ["json.loads()", "json.dumps()", "json.read()", "json.write()"],
      explanation: "json.loads() parser en JSON-streng til et Python-objekt, mens json.dumps() serialiserer et Python-objekt til en JSON-streng.",
    },
    {
      question: "Hva betyr serialisering?",
      options: ["Å konvertere Python-objekter til et tekstformat som JSON", "Å lese JSON og gjøre det om til Python-objekter", "Å sortere elementene i en Python-liste før de skrives til en fil på disk", "Å lese og tolke en JSON-streng tilbake til Python-objekter som dict og list"],
      explanation: "Serialisering betyr å konvertere Python-objekter til et tekstformat (som JSON) – det motsatte av parsing.",
    },
    {
      question: "Hva er en fordel JSON har framfor XML?",
      options: ["JSON er mer kompakt og mapper naturlig til Python-objekter", "XML er alltid raskere å parse enn JSON, uansett hvor store dataene er", "JSON støtter ikke nøstede strukturer, mens XML kan nøste elementer i hverandre", "XML kan ikke representere tallverdier og lagrer derfor alt bare som tekststrenger"],
      explanation: "JSON er enklere og mer kompakt, lettere å lese og mapper naturlig til Python-objekter (dict og list), og er standard for moderne web-API-er.",
    },
    {
      question: "Hvilken modul brukes for å parse XML i Python?",
      options: ["xml.etree.ElementTree", "requests", "json-modulen, som også kan lese XML fordi formatene har lik grunnstruktur", "pandas"],
      explanation: "Python har en innebygd modul for XML: xml.etree.ElementTree, som lar deg parse og navigere i XML-data.",
    },
  ],
  "it-2-4-4": [
    {
      question: "Hva er Flask?",
      options: ["Et lettvekts Python-rammeverk for webutvikling", "Et helt eget operativsystem", "Et operativsystem som kjører webservere", "En innebygd nettleser som viser nettsider"],
      explanation: "Flask er et enkelt og populært Python-rammeverk for webutvikling, som lar deg lage REST API-er og webapplikasjoner.",
    },
    {
      question: "Hva er en rute (route) i Flask?",
      options: ["En URL-sti som Flask lytter på, knyttet til en funksjon", "En tabell i databasen som Flask-appen bruker", "En innebygd feilmelding som Flask viser når en URL-sti ikke finnes i appen", "En spesiell type variabel i Flask som lagrer URL-en til den gjeldende siden"],
      explanation: "En rute (route) er en URL-sti som Flask lytter på. Når noen sender en forespørsel til ruten, kjøres den tilknyttede funksjonen.",
    },
    {
      question: "Hvilken Flask-funksjon konverterer Python-data til en JSON-respons?",
      options: ["jsonify()", "render_template()", "request()", "route()"],
      explanation: "jsonify() er en Flask-funksjon som konverterer Python-data (som en dictionary) til en JSON-respons som API-et kan returnere.",
    },
    {
      question: "Hvilken dekoratør brukes for å definere en rute i Flask?",
      options: ["@app.route(...)", "@app.json(...)", "@flask.path(...)", "@route.app(...)"],
      explanation: "Dekoratøren @app.route('/sti') definerer en rute i Flask og knytter en URL til funksjonen som følger under.",
    },
    {
      question: "Hva står CRUD for i et API?",
      options: ["Create, Read, Update, Delete", "Connect, Run, Update, Download", "Copy, Read, Use, Delete i databasen", "Create, Render, Upload, Display"],
      explanation: "CRUD står for Create, Read, Update og Delete – de fire grunnleggende operasjonene som tilsvarer HTTP-metodene POST, GET, PUT og DELETE.",
    },
  ],
  "it-2-4-5": [
    {
      question: "Hva er klient-server-modellen?",
      options: ["Klienten sender forespørsler, og serveren mottar dem og sender svar", "To servere som snakker direkte med hverandre uten noen klient innimellom", "En modell der klient og server alltid kjører som samme prosess på én maskin", "En krypteringsmetode der klienten og serveren deler en felles hemmelig nøkkel"],
      explanation: "I klient-server-modellen sender klienten (nettleser, app) forespørsler, og serveren (webserver, API-server) mottar dem og sender svar tilbake.",
    },
    {
      question: "Hva kjennetegner TCP sammenlignet med UDP?",
      options: ["TCP er pålitelig og garanterer at data kommer fram i riktig rekkefølge", "TCP er alltid raskere og uten overhead", "TCP er alltid raskere enn UDP fordi det sender data helt uten ekstra overhead", "TCP brukes bare til videostrømming der pakketap ikke betyr noe"],
      explanation: "TCP er pålitelig: det garanterer at data kommer fram, i riktig rekkefølge, med feilsjekking. Det gir mer overhead og er litt tregere enn UDP.",
    },
    {
      question: "Hva er en socket?",
      options: ["Et endepunkt for nettverkskommunikasjon mellom applikasjonen og nettverket", "En unik IP-adresse som identifiserer en enkelt maskin på hele internettet", "En fysisk kabel eller kontakt som kobler datamaskinen fysisk til nettverket", "En intern database som lagrer alle nettverkstilkoblinger applikasjonen har åpnet"],
      explanation: "En socket er et endepunkt for nettverkskommunikasjon – grensesnittet mellom applikasjonen din og nettverket.",
    },
    {
      question: "Hva betyr adressen 127.0.0.1 (localhost)?",
      options: ["Din egen datamaskin", "En tilfeldig server på internett", "En offentlig nettside", "En MAC-adresse"],
      explanation: "127.0.0.1, også kalt localhost, refererer til din egen datamaskin. Den brukes ofte til å teste applikasjoner lokalt.",
    },
    {
      question: "Hvorfor er requests-biblioteket bedre enn rå sockets for HTTP?",
      options: ["Det håndterer HTTP-forespørsler automatisk, slik at man slipper å bygge og parse dem manuelt", "Det er tregere enn rå sockets, men gir til gjengjeld sterkere kryptering av dataene", "Det kan hente data helt lokalt uten noen internettforbindelse eller aktiv server", "Det fungerer bare over UDP og egner seg derfor best til rask videostrømming"],
      explanation: "Med rå sockets må man lage HTTP-forespørselen og parse svaret manuelt. requests-biblioteket gjør dette automatisk, noe som er mye enklere.",
    },
  ],
  "it-2-5-1": [
    {
      question: "Hva er ER-modellering?",
      options: ["En metode for å visualisere datastrukturen før man lager databasen", "En metode for å kryptere data før de lagres i tabellene i databasen", "En sorteringsalgoritme som ordner radene i en tabell etter primærnøkkelen sin", "En nettverksprotokoll som overfører databasedata sikkert mellom klient og server"],
      explanation: "ER-modellering (Entity-Relationship) er en metode for å visualisere datastrukturen i et system før man lager selve databasen, med entiteter og relasjoner.",
    },
    {
      question: "Hva er en primærnøkkel (Primary Key)?",
      options: ["En unik identifikator for hver rad som ikke kan være NULL", "En kolonne som kan inneholde duplikater", "En spørring som henter den første raden i en tabell", "Et passord for å koble til databaseserveren"],
      explanation: "En primærnøkkel er en unik identifikator for hver rad i en tabell. Den kan ikke være NULL og må være unik.",
    },
    {
      question: "Hva er en fremmednøkkel (Foreign Key)?",
      options: ["Et attributt som refererer til primærnøkkelen i en annen tabell", "En nøkkel som blir kryptert med en egen algoritme før den lagres i tabellen", "En primærnøkkel som er kryptert slik at verdien ikke kan leses av uvedkommende", "En kolonne som alltid står tom og bare brukes til å reservere plass i tabellen"],
      explanation: "En fremmednøkkel er et attributt som refererer til primærnøkkelen i en annen tabell, og oppretter dermed en relasjon mellom tabellene.",
    },
    {
      question: "Hva er hovedmålet med normalisering?",
      options: ["Å minimere redundans og sikre dataintegritet", "Å gjøre databasen så stor som mulig", "Å kryptere alle verdiene i tabellene slik at ingen kan lese dataene direkte", "Å fjerne alle relasjoner mellom tabellene"],
      explanation: "Normalisering organiserer data for å minimere redundans (unødvendige duplikater), sikre dataintegritet og gjøre databasen enklere å vedlikeholde.",
    },
    {
      question: "Hva er en entitet i ER-modellering?",
      options: ["Et objekt vi ønsker å lagre informasjon om, som blir til en tabell", "En relasjon mellom to tabeller i databasen", "En spørring som henter ut informasjon om objekter som er lagret i databasen", "En relasjon som binder to tabeller sammen ved hjelp av en delt fremmednøkkel"],
      explanation: "En entitet er et objekt eller konsept vi ønsker å lagre informasjon om. Entiteter blir til tabeller i den ferdige databasen.",
    },
  ],
  "it-2-5-2": [
    {
      question: "Hva gjør en JOIN i SQL?",
      options: ["Kombinerer rader fra to eller flere tabeller basert på en relatert kolonne", "Sorterer radene i én enkelt tabell i stigende rekkefølge etter primærnøkkelen", "Sletter en hel tabell fra databasen sammen med alle radene som ligger i den", "Sorterer radene i én enkelt tabell etter verdiene i en valgt kolonne alfabetisk"],
      explanation: "En JOIN kombinerer rader fra to eller flere tabeller basert på en relatert kolonne, slik at man kan hente sammenhengende data på tvers av tabeller.",
    },
    {
      question: "Hva returnerer en INNER JOIN?",
      options: ["Bare rader med matchende verdier i begge tabeller", "Alle rader fra begge tabeller uansett match", "Alle rader fra begge tabellene uansett om verdiene matcher eller ikke", "Alle rader fra venstre tabell"],
      explanation: "INNER JOIN returnerer bare rader der det finnes matchende verdier i begge tabellene.",
    },
    {
      question: "Hva brukes GROUP BY til?",
      options: ["Å gruppere rader slik at aggregatfunksjoner kan brukes på hver gruppe", "Å slette grupper av rader fra en tabell", "Å slette hele grupper av rader som deler samme verdi i en valgt kolonne", "Å koble sammen to tabeller basert på en felles kolonne slik en JOIN gjør"],
      explanation: "GROUP BY grupperer rader, slik at aggregatfunksjoner som COUNT(), SUM() og AVG() kan beregnes for hver gruppe.",
    },
    {
      question: "Hva er en subquery (underspørring)?",
      options: ["En SQL-spørring inne i en annen SQL-spørring", "En spørring som sletter data", "En midlertidig tabell for mellomlagring", "En tabell uten data"],
      explanation: "En subquery er en SQL-spørring inne i en annen spørring. Den brukes ofte når du trenger resultatet av én spørring som input til en annen.",
    },
    {
      question: "Hva er en view i SQL?",
      options: ["En lagret spørring som oppfører seg som en tabell, men ikke lagrer data selv", "En indeks som gjør oppslag i en tabell raskere ved store mengder data", "En spesiell type primærnøkkel som genereres på tvers av flere tabeller samtidig", "En automatisk sikkerhetskopi av databasen som lagres til disk med jevne mellomrom"],
      explanation: "En view er en lagret SQL-spørring som oppfører seg som en tabell. Den lagrer ikke data selv, men gir en gjenbrukbar, «ferdig» spørring.",
    },
  ],
  "it-2-5-3": [
    {
      question: "Hvilken Python-modul brukes for å jobbe med SQLite-databaser?",
      options: ["sqlite3", "mysql", "database", "sqlpy"],
      explanation: "Python har innebygd støtte for SQLite gjennom sqlite3-modulen, som er perfekt for lokale applikasjoner.",
    },
    {
      question: "Hva gjør commit() i en SQLite-tilkobling?",
      options: ["Lagrer endringene permanent til databasen", "Åpner en ny tilkobling til databasen", "Sletter hele databasefilen fra disk sammen med alle tabellene som ligger i den", "Sletter hele databasefilen"],
      explanation: "commit() lagrer endringene (INSERT, UPDATE, DELETE) permanent til databasen. Uten commit() blir ikke endringene lagret.",
    },
    {
      question: "Hvordan unngår man SQL injection ved innsetting av brukerdata?",
      options: ["Bruke parameteriserte spørringer med plassholdere (?), ikke streng-sammenslåing", "Lagre alle verdiene i klartekst slik at spørringene kan sammenlignes direkte", "Bygge spørringen ved å sette sammen strenger med brukerinput", "Aldri bruke WHERE-betingelser i spørringene"],
      explanation: "For å unngå SQL injection bruker man parameteriserte spørringer med plassholdere (?), slik at brukerinput aldri tolkes som SQL-kode.",
    },
    {
      question: "Hva er en cursor i sqlite3?",
      options: ["Et objekt som utfører SQL-kommandoer og henter resultater", "En sikkerhetskopi av tabellen som spørres", "En automatisk sikkerhetskopi som lages hver gang en SQL-kommando kjøres", "En primærnøkkel som unikt identifiserer hver rad i tabellen som spørres mot"],
      explanation: "En cursor er et objekt som utfører SQL-kommandoer og henter resultatene fra databasen.",
    },
    {
      question: "Hvorfor er SQL injection farlig?",
      options: ["En angriper kan injisere SQL-kode gjennom brukerinput og manipulere databasen", "Det fjerner automatisk alle indeksene i databasen, slik at alle oppslag går saktere", "Det er bare et estetisk problem som gjør spørringene vanskeligere å lese for utviklere", "Det gjør databasen betydelig tregere fordi spørringene blir mye lengre å tolke og kjøre"],
      explanation: "SQL injection er en av de farligste sårbarhetene: en angriper kan injisere SQL-kode gjennom brukerinput og dermed lese, endre eller slette data uautorisert.",
    },
  ],
  "it-2-5-4": [
    {
      question: "Hva står NoSQL for?",
      options: ["Not Only SQL", "No Standard Query Language", "New SQL", "Network SQL"],
      explanation: "NoSQL står for «Not Only SQL» og er et samlebegrep for databaser som ikke følger den tradisjonelle relasjonsdatabasemodellen.",
    },
    {
      question: "Hvordan lagrer en dokumentdatabase data?",
      options: ["Som dokumenter, vanligvis i JSON eller BSON", "Bare i tabeller med rader og kolonner", "Bare som ren tekst uten indre struktur", "Bare som helt ren tekst"],
      explanation: "En dokumentdatabase lagrer data som dokumenter, vanligvis i JSON eller BSON. MongoDB er den mest populære dokumentdatabasen.",
    },
    {
      question: "Hva tilsvarer en SQL-tabell i MongoDB?",
      options: ["En collection", "En document", "En key i MongoDB", "En query"],
      explanation: "I MongoDB tilsvarer en SQL-tabell en collection, en rad tilsvarer et document, og en database er fortsatt en database.",
    },
    {
      question: "Når er det best å bruke en SQL-relasjonsdatabase?",
      options: ["Når dataene har klare relasjoner og krever sterk dataintegritet", "Når man aldri har behov for relasjoner", "Bare når man skal lagre store binærfiler som bilder og video effektivt", "Bare når man håndterer små tekstfiler uten behov for spørringer eller struktur"],
      explanation: "SQL-relasjonsdatabaser passer best når dataene har klare relasjoner (kunder, ordrer, produkter) og man trenger sterk dataintegritet og strukturerte spørringer.",
    },
    {
      question: "Hva er Redis et eksempel på?",
      options: ["En nøkkel-verdi-database", "Et eget programmeringsspråk", "En relasjonsdatabase som lagrer data i tabeller med rader, kolonner og nøkler", "En klassisk relasjonsdatabase"],
      explanation: "Redis er et eksempel på en nøkkel-verdi-database – den enkleste formen for NoSQL, som fungerer som en gigantisk dictionary.",
    },
  ],
  "it-2-5-5": [
    {
      question: "Hva er et eksempel på en mange-til-mange-relasjon?",
      options: ["Studenter og kurs – én student tar mange kurs, og ett kurs har mange studenter", "Én klasse har mange elever, men hver elev har bare én klasse", "Én klasse har mange elever, men hver elev tilhører bare én klasse", "Én person har ett fødselsnummer, og ett nummer tilhører én person"],
      explanation: "En mange-til-mange-relasjon er for eksempel studenter og kurs: én student kan ta mange kurs, og ett kurs kan ha mange studenter.",
    },
    {
      question: "Hvordan implementeres en mange-til-mange-relasjon i en relasjonsdatabase?",
      options: ["Med en koblingstabell (junction table)", "Ved å fjerne alle nøkler", "Med en indeks som gjør oppslag mellom de to relaterte tabellene raskere", "Med én enkelt ekstra kolonne"],
      explanation: "En mange-til-mange-relasjon implementeres med en koblingstabell (junction table) som inneholder fremmednøkler til begge de relaterte tabellene.",
    },
    {
      question: "Hva er en assosiativ entitet?",
      options: ["En koblingstabell som også har egne attributter, som karakter i StudentKurs", "En tabell helt uten nøkler eller relasjoner", "En sammensatt indeks som fremskynder søk i en koblingstabell med to fremmednøkler", "En vanlig entitet uten fremmednøkler som kun kobler seg til seg selv i samme tabell"],
      explanation: "En assosiativ entitet er en koblingstabell som i tillegg har egne attributter, for eksempel kan StudentKurs ha attributtet karakter.",
    },
    {
      question: "Hva er et eksempel på en rekursiv (selvrefererende) relasjon?",
      options: ["Et organisasjonshierarki der en ansatt har en leder som også er en ansatt", "En relasjon mellom to ulike databaser", "Et arvehierarki der en underentitet arver fra en overordnet entitet", "En relasjon der samme fremmednøkkel peker på to ulike tabeller"],
      explanation: "En rekursiv relasjon oppstår når en entitet refererer til seg selv, for eksempel et organisasjonshierarki der en ansatt har en leder som også er en ansatt.",
    },
    {
      question: "Hva er en god første beste praksis ved databasedesign?",
      options: ["Starte med et ER-diagram før man skriver SQL", "Skrive all SQL-koden før man tenker på struktur", "Skrive alle SQL-spørringene ferdig først og deretter tegne ER-diagram i etterkant", "Lagre alle dataene i databasen i én eneste stor tabell"],
      explanation: "En god beste praksis er å starte med et ER-diagram: identifisere entiteter, tegne relasjoner og normalisere til 3NF før man skriver SQL.",
    },
  ],
  "it-2-6-1": [
    {
      question: "Hva er frontend i en webapplikasjon?",
      options: ["Delen brukeren ser og samhandler med i nettleseren", "Serversiden som håndterer logikk og data", "Databaselaget som lagrer og henter data via SQL-spørringer på vegne av applikasjonen", "Nettverkskabelen mellom maskinene"],
      explanation: "Frontend er delen av en webapplikasjon som brukeren ser og samhandler med i nettleseren – HTML, CSS og JavaScript.",
    },
    {
      question: "Hva er backend?",
      options: ["Serverside-delen som håndterer logikk, data og sikkerhet", "Det brukeren ser i nettleseren, altså HTML og CSS på skjermen", "Et CSS-rammeverk som styrer hvordan knapper, farger og layout vises på nettsiden", "Klientside-delen som brukeren ser og samhandler med direkte i nettleservinduet sitt"],
      explanation: "Backend er serverside-delen av en applikasjon som håndterer logikk, data og sikkerhet.",
    },
    {
      question: "Hva er en SPA (Single Page Application)?",
      options: ["En webapplikasjon som laster én gang og oppdaterer innhold dynamisk uten full sidelasting", "En nettside som laster hele HTML-dokumentet på nytt fra serveren ved hvert eneste klikk", "En relasjonsdatabase som lagrer alle sidene i applikasjonen som separate rader i tabellen", "En transportprotokoll som overfører nettsidene mellom tjener og nettleser"],
      explanation: "En SPA (Single Page Application) laster siden én gang og oppdaterer innholdet dynamisk uten full sidelasting.",
    },
    {
      question: "Hva er npm?",
      options: ["Node Package Manager – verktøy for å installere og håndtere JavaScript-biblioteker", "Et operativsystem som kjører JavaScript på serveren", "Et CSS-rammeverk med ferdige stilklasser for responsivt design og komponentbibliotek", "En nettleser som kjører JavaScript-koden og viser HTML-sider for sluttbrukeren direkte"],
      explanation: "npm (Node Package Manager) er verktøyet for å installere og håndtere JavaScript-biblioteker.",
    },
    {
      question: "Hva inneholder filen package.json?",
      options: ["Oversikt over npm-avhengighetene i et JavaScript-prosjekt", "All HTML-koden som utgjør startsiden og undersidene i prosjektet", "Selve databasen med tabeller og rader som applikasjonen leser fra og skriver data til", "All HTML-koden og malene som utgjør selve grensesnittet brukeren ser i nettleseren sin"],
      explanation: "package.json holder oversikt over npm-avhengighetene (bibliotekene) som et JavaScript-prosjekt bruker.",
    },
  ],
  "it-2-6-2": [
    {
      question: "Hva er DOM?",
      options: ["Document Object Model – en trestruktur som representerer HTML-dokumentet", "En nettverksprotokoll som overfører HTML-sider mellom tjeneren og nettleseren", "En ekstern stilarkfil som bestemmer hvordan elementene på nettsiden skal se ut visuelt", "En relasjonsdatabase som lagrer innholdet på nettsiden i tabeller med rader og kolonner"],
      explanation: "DOM (Document Object Model) er en trestruktur som representerer HTML-dokumentet, og som JavaScript kan manipulere.",
    },
    {
      question: "Hva er Fetch API?",
      options: ["Et moderne JavaScript-API for å gjøre HTTP-forespørsler", "En metode for å sortere lister i JavaScript", "En innebygd metode for å sortere og filtrere elementene i en JavaScript-array effektivt", "En avansert CSS-selektor som velger elementer basert på attributter og posisjon i treet"],
      explanation: "Fetch API er et moderne JavaScript-API for å gjøre HTTP-forespørsler, for eksempel for å hente data fra en server.",
    },
    {
      question: "Hva representerer et Promise i JavaScript?",
      options: ["En asynkron operasjon som vil fullføres senere", "En synkron beregning i nettleseren", "En synkron beregning som fullfører umiddelbart og blokkerer resten av koden mens den kjører", "En CSS-regel som styrer utseendet"],
      explanation: "Et Promise er et JavaScript-objekt som representerer en asynkron operasjon – et resultat som vil bli tilgjengelig senere.",
    },
    {
      question: "Hva gjør preventDefault()?",
      options: ["Hindrer standardoppførselen til en hendelse, som at et skjema laster siden på nytt", "Sender skjemaet til serveren umiddelbart uten validering", "Sender skjemaet til serveren umiddelbart og tvinger nettleseren til å laste siden på nytt", "Fjerner et valgt element fullstendig fra DOM-treet slik at det ikke lenger vises på siden"],
      explanation: "preventDefault() hindrer standardoppførselen til en hendelse, for eksempel at et skjema laster siden på nytt når det sendes inn.",
    },
    {
      question: "Hva gjør async/await i JavaScript?",
      options: ["Gjør asynkron kode lettere å lese og skrive", "Gjør koden synkron og blokkerende", "Gjør asynkron kode om til blokkerende kode", "Lager nye HTML-elementer"],
      explanation: "async/await er moderne syntaks som gjør asynkron kode lettere å lese og skrive, ved at man kan vente på et Promise med await.",
    },
  ],
  "it-2-6-3": [
    {
      question: "Hva er Flask?",
      options: ["Et lettvekts Python-rammeverk for webutvikling", "En JavaScript-database", "En NoSQL-database skrevet i JavaScript", "Et CSS-rammeverk for nettsider"],
      explanation: "Flask er et lettvekts Python-rammeverk for webutvikling, perfekt for å lære backend-utvikling.",
    },
    {
      question: "Hva er Jinja2?",
      options: ["Template-motoren i Flask som genererer dynamisk HTML", "Et JavaScript-bibliotek som brukes til å bygge brukergrensesnitt", "En relasjonsdatabase som lagrer malene og innholdet til Flask-applikasjonen på serveren", "En CSS-modul i Flask som styrer farger, layout og responsivt design på de ferdige sidene"],
      explanation: "Jinja2 er template-motoren i Flask som genererer dynamisk HTML, med støtte for variabler, løkker og betingelser.",
    },
    {
      question: "Hva er en session i Flask?",
      options: ["En mekanisme for å lagre brukerdata mellom HTTP-forespørsler", "En egen tabelltype i databasen bak applikasjonen", "En egen databasetabell som lagrer alle innloggede brukere permanent med passord og navn", "En CSS-regel som holder på stilinnstillingene til en bruker mens de navigerer på nettsiden"],
      explanation: "En session er en mekanisme for å lagre brukerdata mellom HTTP-forespørsler, for eksempel om en bruker er innlogget.",
    },
    {
      question: "Hvilken Flask-funksjon genererer HTML fra en Jinja2-template?",
      options: ["render_template", "jsonify", "jsonify som pakker Python-data om til et JSON-svar for et API-endepunkt", "request"],
      explanation: "render_template() genererer HTML fra en Jinja2-template og sender resultatet til nettleseren.",
    },
    {
      question: "Hva inneholder Flask-objektet request?",
      options: ["Data fra HTTP-forespørselen, som skjemadata og parametere", "Hele databasen med alle brukerne som er registrert i systemet", "Hele databasen med alle tabeller og rader som applikasjonen har tilgang til på serveren", "Bildefilene og de statiske ressursene som serveren sender tilbake sammen med HTML-siden"],
      explanation: "request-objektet inneholder data fra HTTP-forespørselen, som skjemadata, query-parametere og innsendte verdier.",
    },
  ],
  "it-2-6-4": [
    {
      question: "Hva er et REST API?",
      options: ["En arkitekturstil basert på ressurser, HTTP-metoder og statuskoder", "Et programmeringsspråk som brukes til å skrive serverkode for nettjenester", "En NoSQL-database som lagrer ressurser som dokumenter identifisert med unike URL-adresser", "Et programmeringsspråk laget spesielt for å definere API-endepunkter og HTTP-forespørsler"],
      explanation: "REST (Representational State Transfer) er en arkitekturstil for API-er basert på ressurser identifisert med URL-er, HTTP-metoder og statuskoder.",
    },
    {
      question: "Hva er CORS?",
      options: ["Cross-Origin Resource Sharing – en sikkerhetsfunksjon som kontrollerer API-tilgang på tvers av domener", "En sorteringsalgoritme som ordner dataressurser på tvers av flere domener før de sendes ut", "En distribuert database som deler ressurser mellom flere servere på ulike domener samtidig", "Et programmeringsspråk for å definere hvilke domener som får dele ressurser med hverandre"],
      explanation: "CORS (Cross-Origin Resource Sharing) er en sikkerhetsfunksjon i nettlesere som kontrollerer hvilke domener (origins) som får tilgang til et API.",
    },
    {
      question: "Hva utgjør en origin?",
      options: ["Kombinasjonen av protokoll, domene og port, for eksempel http://localhost:3000", "En IP-adresse alene, uten domenenavn eller port", "Bare selve domenenavnet, uten hensyn til hvilken protokoll eller portnummer som brukes", "Utelukkende portnummeret som tjenesten kjører på, uavhengig av domene og protokoll ellers"],
      explanation: "En origin er kombinasjonen av protokoll, domene og port, for eksempel http://localhost:3000. CORS sammenligner origins for å avgjøre tilgang.",
    },
    {
      question: "Hva betyr at en operasjon er idempotent?",
      options: ["Den gir samme resultat uansett hvor mange ganger den kjøres", "Den endrer alltid resultatet hver eneste gang den kjøres", "Den kan bare kjøres nøyaktig én gang, og gir feilmelding hvis man forsøker å gjenta den", "Den krasjer alltid serveren dersom den kjøres mer enn én gang på rad mot samme ressurs her"],
      explanation: "En idempotent operasjon gir samme resultat uansett hvor mange ganger den kjøres. GET, PUT og DELETE er idempotente; POST er det ikke.",
    },
    {
      question: "Hva indikerer en HTTP-statuskode?",
      options: ["Resultatet av en HTTP-forespørsel", "Hastigheten på selve nettverket", "Hastigheten på nettverksforbindelsen mellom klienten og serveren under selve forespørselen", "Størrelsen på dataene som sendes"],
      explanation: "En statuskode er et tresifret tall som indikerer resultatet av en HTTP-forespørsel, for eksempel 200 (OK), 404 (Not Found) eller 500 (serverfeil).",
    },
  ],
  "it-2-6-5": [
    {
      question: "Hva er UX (User Experience)?",
      options: ["Hvordan brukere opplever og samhandler med et produkt", "Den fysiske maskinvaren i enheten", "Den fysiske maskinvaren, som skjerm, tastatur og prosessor, som produktet kjører på fysisk", "En nettverksprotokoll for dataoverføring"],
      explanation: "UX (User Experience) er brukeropplevelsen – hvordan brukere opplever og samhandler med et produkt, ikke bare hvordan det ser ut.",
    },
    {
      question: "Hva er heuristisk evaluering?",
      options: ["Eksperter evaluerer et brukergrensesnitt mot etablerte brukbarhetsprinsipper", "Vanlige brukere tester produktet i flere måneder før det lanseres bredt til alle", "En automatisert enhetstest av koden som sjekker at hver funksjon returnerer riktig verdi", "Vanlige sluttbrukere tester produktet grundig i flere måneder for å avdekke feil over tid"],
      explanation: "Heuristisk evaluering er en metode der eksperter evaluerer et brukergrensesnitt mot etablerte brukbarhetsprinsipper (heuristikker), som Nielsens 10.",
    },
    {
      question: "Hva står POUR for i WCAG?",
      options: ["Perceivable, Operable, Understandable, Robust", "Powerful, Online, Updated, Rapid", "Private, Open, Useful, Reliable i personvern", "Private, Open, Useful, Reliable"],
      explanation: "POUR er de fire prinsippene i WCAG: Perceivable (mulig å oppfatte), Operable (betjenbar), Understandable (forståelig) og Robust.",
    },
    {
      question: "Hva er A/B-testing?",
      options: ["Å sammenligne to versjoner av en funksjon for å se hvilken som presterer best", "Å teste koden to ganger med to ulike sett testdata", "En krypteringsmetode der data sikres i to lag, A og B, før det sendes over nettverket her", "Å kjøre samme test av koden nøyaktig to ganger for å bekrefte at resultatet blir det samme"],
      explanation: "A/B-testing er å sammenligne to versjoner (A og B) av en funksjon med ekte brukere for å se hvilken som presterer best.",
    },
    {
      question: "Hva er brukertesting?",
      options: ["Å observere ekte brukere mens de bruker produktet for å finne problemer", "Å sjekke nettverkshastigheten grundig før produktet blir lansert for brukerne", "Å kjøre automatiske enhetstester av koden for å sjekke at funksjonene returnerer riktig verdi", "Å måle nettverkshastigheten mellom klient og server for å se om produktet laster raskt nok her"],
      explanation: "Brukertesting innebærer å observere ekte brukere mens de bruker produktet, ofte mens de «tenker høyt», for å identifisere problemer.",
    },
  ],
  "it-2-7-1": [
    {
      question: "Hva er OWASP Top 10?",
      options: ["En liste over de ti mest kritiske sikkerhetstruslene i webapplikasjoner", "En oversikt over de ti mest brukte programmeringsspråkene innen webutvikling", "En liste over de ti raskeste sorterings- og søkealgoritmene som brukes i webapplikasjoner", "En rangering av de ti beste relasjonsdatabasene målt på ytelse og sikkerhet i webprosjekter"],
      explanation: "OWASP Top 10 er en liste fra Open Web Application Security Project over de ti mest kritiske sikkerhetstruslene i webapplikasjoner.",
    },
    {
      question: "Hvordan beregnes risiko i en risikovurdering?",
      options: ["Risiko = Sannsynlighet × Konsekvens", "Risiko = Sannsynlighet + Tid", "Risiko = Konsekvens − Sannsynlighet", "Risiko = Antall brukere × Pris"],
      explanation: "Risiko beregnes som Sannsynlighet × Konsekvens. Høy sannsynlighet og alvorlig konsekvens gir høyest risiko.",
    },
    {
      question: "Hva er en trusselaktør?",
      options: ["En som forsøker å kompromittere sikkerheten i et system", "En ren programmeringsfeil i systemets kode", "En vanlig autorisert bruker som logger inn og bruker systemet slik det er ment å brukes", "En programmeringsfeil som åpner for uautorisert tilgang"],
      explanation: "En trusselaktør er en som forsøker å kompromittere sikkerheten i et system, for eksempel script kiddies, hacktivister eller statlige aktører.",
    },
    {
      question: "Hva er trusselmodellering?",
      options: ["En systematisk kartlegging av verdier, dataflyt og mulige angrep mot et system", "En metode for å gjøre koden raskere å kjøre i produksjon", "En metode for å optimalisere databasespørringer ved å indeksere de mest brukte kolonnene", "En krypteringsmetode som beskytter dataflyten mellom klient og server med symmetriske nøkler"],
      explanation: "Trusselmodellering er en systematisk prosess der man kartlegger verdifulle ressurser, dataflyt og mulige angrep for å forstå og redusere risiko.",
    },
    {
      question: "Hva kjennetegner en «script kiddie»?",
      options: ["En uerfaren angriper som bruker eksisterende verktøy uten dyp forståelse", "En statlig etterretningsorganisasjon med svært store ressurser og lang erfaring", "En statlig etterretningsorganisasjon som utvikler avanserte angrepsverktøy for spionasje", "En systemadministrator med hovedansvar for å drifte og oppdatere organisasjonens servere"],
      explanation: "En script kiddie er en uerfaren angriper som bruker ferdige verktøy og skript laget av andre, uten dyp teknisk forståelse.",
    },
  ],
  "it-2-7-2": [
    {
      question: "Hva er det viktigste prinsippet i sikker programmering?",
      options: ["Aldri stol på brukerinput", "Stol alltid på data fra brukeren", "Lagre alle passord i klartekst", "Vis detaljerte feilmeldinger til alle"],
      explanation: "Det viktigste prinsippet i sikker programmering er: Aldri stol på brukerinput. All data fra brukere må valideres og saneres.",
    },
    {
      question: "Hvordan hindrer man SQL injection?",
      options: ["Bruke parameteriserte spørringer i stedet for å sette sammen strenger med brukerinput", "Vise rå SQL-feilmeldinger til brukeren i grensesnittet", "Vise detaljerte SQL-feilmeldinger til brukeren slik at de kan rette opp ugyldige søk selv", "Lagre all brukerinput i klartekst i databasen slik at spørringene blir enklere å feilsøke"],
      explanation: "SQL injection hindres ved å bruke parameteriserte spørringer, slik at brukerinput aldri tolkes som SQL-kode.",
    },
    {
      question: "Hva er XSS (Cross-Site Scripting)?",
      options: ["Når en angriper injiserer skadelig JavaScript i en webside som andre brukere ser", "Når innholdet i en database blir slettet ved et uhell", "En krypteringsteknikk som beskytter kommunikasjonen mellom to nettsteder på tvers av domener", "Når en angriper klarer å slette hele databasen"],
      explanation: "XSS oppstår når en angriper kan injisere skadelig JavaScript i en webside som andre brukere deretter ser og kjører i nettleseren sin.",
    },
    {
      question: "Hva er CSRF?",
      options: ["Et angrep der en ondsinnet side lurer nettleseren til å sende forespørsler til en side brukeren er innlogget på", "En krypteringsmetode som sikrer at data som sendes mellom nettleser og server ikke kan avlyttes underveis", "En type relasjonsdatabase som er spesielt egnet til å lagre brukersesjoner og innloggingsdata", "En sorteringsalgoritme som ordner forespørslene i en kø etter når de kom inn til webserveren"],
      explanation: "CSRF (Cross-Site Request Forgery) er et angrep der en ondsinnet side lurer nettleseren til å sende forespørsler til en annen side der brukeren er innlogget.",
    },
    {
      question: "Hvorfor bør feilmeldinger ikke avsløre sensitive detaljer?",
      options: ["Fordi detaljerte feilmeldinger kan gi angripere nyttig informasjon om systemet", "Fordi lange feilmeldinger gjør programmet tregere å kjøre", "Fordi lange feilmeldinger bruker for mye minne på serveren og kan føre til at applikasjonen krasjer", "Fordi de fleste brukere ikke forstår tekniske detaljer og heller vil ha en fargerik grafisk feilside"],
      explanation: "Detaljerte feilmeldinger kan avsløre informasjon om systemets oppbygging, databasestruktur eller filsti, som angripere kan utnytte.",
    },
  ],
  "it-2-7-3": [
    {
      question: "Hva er regel nummer én for lagring av passord?",
      options: ["Aldri lagre passord i klartekst – hash dem alltid", "Lagre passord i klartekst for enkelhets skyld", "Lagre passord i klartekst for enkelhets skyld, slik at brukerstøtte raskt kan hjelpe glemte passord", "Lagre passordene i en vanlig tekstfil"],
      explanation: "Regel nummer én er å aldri lagre passord i klartekst. Passord skal hashes (med f.eks. bcrypt) før de lagres i databasen.",
    },
    {
      question: "Hva er forskjellen mellom HTTP og HTTPS?",
      options: ["HTTPS er kryptert med TLS/SSL, mens HTTP sender data i klartekst", "HTTP er kryptert med TLS, mens HTTPS alltid sender data i ren klartekst", "HTTPS brukes utelukkende til å overføre bilder og videoer, mens HTTP håndterer all vanlig tekst", "De to protokollene er nøyaktig like og skiller seg kun ved hvilken portadresse serveren lytter på"],
      explanation: "HTTPS krypterer kommunikasjonen med TLS/SSL, mens HTTP sender data i klartekst som kan avlyttes. HTTPS beskytter mot avlytting og manipulasjon.",
    },
    {
      question: "Hva er en god egenskap ved en hash-funksjon for passord?",
      options: ["Den er enveis – du kan ikke regne deg tilbake til passordet fra hashen", "Den gir ulik hash for samme input hver gang uten salt", "Den kan reverseres lett, slik at passordet kan hentes fram igjen", "Den lagrer passordet i klartekst ved siden av hashen"],
      explanation: "En hash-funksjon er enveis: du kan ikke regne deg tilbake til passordet fra hash-verdien. Det gjør hashing trygt for passordlagring.",
    },
    {
      question: "Hva er OAuth 2.0?",
      options: ["En standard for å gi applikasjoner tilgang til brukerdata uten å dele passord", "En krypteringsalgoritme for data som sendes over nettet", "En krypteringsalgoritme som brukes til å sikre passord i databasen ved å hashe dem med et tilfeldig salt", "En type relasjonsdatabase spesielt laget for å lagre brukerkontoer, roller og tilgangsrettigheter effektivt"],
      explanation: "OAuth 2.0 er en standard for å gi applikasjoner tilgang til brukerdata uten å dele passord, slik som ved «Logg inn med Google».",
    },
    {
      question: "Hva er en fordel med token-basert autentisering?",
      options: ["Serveren trenger ikke lagre sesjonsinformasjon for hver bruker", "Den krever at passordet sendes i klartekst", "Den fungerer bare lokalt på én enkelt server og kan derfor ikke brukes i systemer med flere tjenere", "Den fungerer bare lokalt på egen maskin"],
      explanation: "Token-basert autentisering lar serveren slippe å lagre sesjonsinformasjon for hver bruker, fordi tokenet selv bærer den nødvendige informasjonen.",
    },
  ],
  "it-2-7-4": [
    {
      question: "Hva er personopplysninger?",
      options: ["All informasjon som kan knyttes til en identifiserbar person", "Bare offentlig tilgjengelig informasjon", "Bare opplysninger som er skrevet ned og lagret fysisk på papir, ikke data som ligger digitalt i et system", "Bare data som er lagret fysisk på papir"],
      explanation: "Personopplysninger er all informasjon som kan knyttes til en identifiserbar person, både direkte (navn, fødselsnummer) og indirekte.",
    },
    {
      question: "Hva betyr Privacy by Design?",
      options: ["Å bygge personvern inn i systemet fra starten, ikke legge det til etterpå", "Å vente med å tenke på personvern til lenge etter at hele produktet er lansert", "Å samle inn så mye brukerdata som mulig fra starten, slik at man har et rikt grunnlag for senere analyser", "Å designe et vakkert og oversiktlig brukergrensesnitt der personverninnstillingene er godt gjemt for brukeren"],
      explanation: "Privacy by Design betyr å bygge personvern inn i systemet fra starten, ikke legge det til etterpå.",
    },
    {
      question: "Hva må et gyldig samtykke under GDPR være?",
      options: ["Frivillig, spesifikt, informert og utvetydig", "Permanent og uigjenkallelig", "Permanent og umulig å trekke tilbake", "Gitt av en tredjepart"],
      explanation: "Et gyldig samtykke under GDPR må være frivillig, spesifikt (for hvert formål), informert og utvetydig.",
    },
    {
      question: "Hva er «rett til innsyn» under GDPR?",
      options: ["Brukere kan be om en kopi av alle data du har om dem", "Brukere kan kreve at all data slettes for alltid", "At brukere kan få tilgang til å se personopplysningene som andre brukere av tjenesten har lagret", "Brukere kan kreve å få endre koden som kjører på serveren"],
      explanation: "Rett til innsyn betyr at brukere kan be om en kopi av alle personopplysninger du har lagret om dem.",
    },
    {
      question: "Hva er prinsippet om dataminimering?",
      options: ["Man skal bare samle inn data man faktisk trenger", "Man skal samle inn så mye data om brukerne som overhodet mulig", "Data skal aldri slettes, men i stedet flyttes til et arkiv med lavere tilgang og redusert sikkerhet", "All data skal lagres for alltid og skal aldri slettes"],
      explanation: "Dataminimering betyr at man bare skal samle inn de personopplysningene man faktisk trenger til formålet, og ikke mer.",
    },
  ],
  "it-2-7-5": [
    {
      question: "Hva er algoritmisk bias?",
      options: ["Når et datasystem systematisk produserer urettferdige resultater", "Når en algoritme kjører svært raskt", "Når en algoritme kjører uvanlig raskt etter optimalisering", "Når nettverket er så tregt at systemet bruker lang tid på dataene"],
      explanation: "Algoritmisk bias oppstår når et datasystem systematisk produserer urettferdige resultater, ofte fordi treningsdataene er skjeve.",
    },
    {
      question: "Hva er et eksempel på algoritmisk bias?",
      options: ["Amazons AI-rekrutteringsverktøy som favoriserte menn på grunn av skjeve treningsdata", "En algoritme som sorterer store mengder tall svært raskt og med minimalt bruk av minne", "Et program som krasjer fordi det prøver å lese fra en minneadresse som ligger utenfor det tildelte området", "En relasjonsdatabase som kan lagre enorme mengder brukerdata og likevel svare på spørringer på millisekunder"],
      explanation: "Amazons AI-rekrutteringsverktøy (2018) lærte fra historiske data dominert av menn, og begynte å favorisere menn – et klassisk eksempel på algoritmisk bias.",
    },
    {
      question: "Hva betyr åpen kildekode (open source)?",
      options: ["At kildekoden er fritt tilgjengelig for alle å se, bruke og modifisere", "At koden bare kan kjøres på én datamaskin", "At koden er ferdig låst og ikke kan endres etter publisering", "At programmet bare kan kjøres på én bestemt datamaskin"],
      explanation: "Åpen kildekode betyr at kildekoden er fritt tilgjengelig for alle å se, bruke og modifisere, noe som gir transparens og kunnskapsdeling.",
    },
    {
      question: "Hva er en miljøutfordring knyttet til IT?",
      options: ["Datasentre bruker store mengder energi (1–2 % av verdens elektrisitet)", "Datamaskiner er alltid karbonnøytrale i produksjon og drift", "Datamaskiner er alltid karbonnøytrale siden strømmen som driver dem stort sett kommer fra vannkraft", "IT-utstyr bruker praktisk talt ingen energi fordi moderne prosessorer er ekstremt strømgjerrige i drift"],
      explanation: "IT-sektoren har betydelig miljøpåvirkning: datasentre bruker store mengder energi (anslått 1–2 % av verdens elektrisitet), og e-avfall er et voksende problem.",
    },
    {
      question: "Hva er digital ulikhet (digital divide)?",
      options: ["Ulik tilgang til og evne til å bruke digital teknologi", "Forskjellen mellom to programmeringsspråk", "En krypteringsteknikk som deler dataene i to ulike deler for å gjøre dem vanskeligere å avlytte og lese", "Skillet mellom maskinvare og programvare"],
      explanation: "Digital ulikhet (digital divide) refererer til ulik tilgang til og evne til å bruke digital teknologi, blant annet på grunn av økonomi, geografi eller kompetanse.",
    },
  ],
  "it-2-8-1": [
    {
      question: "Hva er hovedforskjellen mellom fossefallsmodellen og agile metoder?",
      options: ["Fossefallsmodellen er sekvensiell, agile er iterativ", "Fossefall bruker sprinter, agile bruker faser", "De to modellene er nøyaktig like", "Agile har ingen planlegging"],
      explanation: "Fossefallsmodellen er sekvensiell (faser fullføres i rekkefølge), mens agile er iterativ med korte, gjentakende sykluser og hyppige leveranser.",
    },
    {
      question: "Hva kjennetegner fossefallsmodellen?",
      options: ["Faser som må fullføres i rekkefølge, fra kravspesifikasjon til vedlikehold", "Korte, faste sprinter med hyppige leveranser til kunden omtrent annenhver uke", "Korte, gjentakende sprinter med hyppige delleveranser der kravene justeres etter tilbakemelding underveis", "Ingen planlegging på forhånd, der teamet begynner å skrive kode med en gang og finner ut retningen løpende"],
      explanation: "Fossefallsmodellen er en sekvensiell tilnærming der prosjektet deles i faser (kravspesifikasjon, design, implementering, testing osv.) som fullføres i rekkefølge.",
    },
    {
      question: "Hva er en fordel med agile metoder?",
      options: ["Man kan tilpasse seg endringer underveis og levere fungerende programvare ofte", "All planlegging gjøres ferdig før noe kode skrives", "Det er umulig å endre kravene etter oppstart, noe som gjør leveransen svært forutsigbar for kunden", "All planlegging og kravspesifikasjon gjøres helt ferdig før en eneste linje kode skrives i prosjektet"],
      explanation: "Agile metoder lar teamet tilpasse seg endringer underveis og levere fungerende programvare ofte, med hyppig tilbakemelding fra kunden.",
    },
    {
      question: "I hvilken fase i fossefallsmodellen samles kravene inn?",
      options: ["Kravspesifikasjon (første fase)", "Implementeringsfasen", "Implementering, der utviklerne skriver programkoden", "Vedlikeholdsfasen"],
      explanation: "I fossefallsmodellen samles kravene inn i den første fasen, kravspesifikasjon, før design og implementering.",
    },
    {
      question: "Hvorfor passer agile godt for prosjekter med usikre eller skiftende krav?",
      options: ["Fordi man kan justere planen mellom hver iterasjon basert på tilbakemeldinger", "Fordi man da helt slipper å snakke med kunden underveis i noen del av prosjektet", "Fordi kravene låses helt ved oppstart og aldri kan endres, noe som gir prosjektet stor forutsigbarhet", "Fordi hele produktet leveres samlet helt til slutt, slik at kunden ser resultatet først når alt er ferdig"],
      explanation: "Agile passer for usikre krav fordi man jobber i korte iterasjoner og kan justere planen mellom hver, basert på tilbakemeldinger og ny innsikt.",
    },
  ],
  "it-2-8-2": [
    {
      question: "Hva er hovedformålet med enhetstester (unit tests)?",
      options: ["Å teste én enkelt funksjon isolert", "Å teste hele systemet fra brukerens perspektiv", "Å teste nettverkshastigheten", "Å designe brukergrensesnittet"],
      explanation: "Enhetstester (unit tests) tester én enkelt funksjon eller komponent isolert, for å verifisere at den fungerer riktig på egen hånd.",
    },
    {
      question: "Hvordan er testpyramiden balansert?",
      options: ["Mange enhetstester nederst, færre integrasjonstester i midten og få E2E-tester øverst", "Flest E2E-tester øverst og bare noen ganske få enhetstester nederst", "Utelukkende integrasjonstester i midten, uten enhetstester nederst eller E2E-tester øverst i pyramiden", "Flest trege E2E-tester øverst og bare noen få enhetstester nederst, siden ende-til-ende gir best sikkerhet"],
      explanation: "Testpyramiden anbefaler mange raske enhetstester nederst, færre integrasjonstester i midten og få (men viktige) E2E-tester øverst.",
    },
    {
      question: "Hva står TDD for?",
      options: ["Test-Driven Development", "Type Definition Doc", "Total Data Design", "Technical Debug Driver"],
      explanation: "TDD står for Test-Driven Development, der man skriver testen først (som feiler), deretter koden som får testen til å passere.",
    },
    {
      question: "Hva er rekkefølgen i TDD-syklusen?",
      options: ["Red (skriv test som feiler), Green (få den til å passere), Refactor (forbedre koden)", "Skriv all koden ferdig først, og skriv deretter alle testene helt til slutt i prosjektet", "Refactor (rydd i koden først), deretter Red (skriv en feilende test) og så Green (få den til å passere)", "Green (skriv koden ferdig først), Red (kjør en test som feiler) og til slutt Delete (fjern testen igjen)"],
      explanation: "TDD følger Red-Green-Refactor: først skriver man en test som feiler (Red), deretter kode som får den til å passere (Green), og til slutt forbedrer man koden (Refactor).",
    },
    {
      question: "Hva tester en integrasjonstest?",
      options: ["Samspillet mellom flere komponenter, for eksempel database og backend", "Bare fargene og skrifttypene i brukergrensesnittet", "Selve nettverkskabelen og maskinvaren, for å kontrollere at signalet kommer trygt frem mellom to maskiner", "Bare fargene og plasseringen av knappene i brukergrensesnittet, for å se at designet ser riktig ut visuelt"],
      explanation: "En integrasjonstest tester samspillet mellom flere komponenter, for eksempel om backend og database fungerer riktig sammen.",
    },
  ],
  "it-2-8-3": [
    {
      question: "Hva er formålet med en feature branch?",
      options: ["Å jobbe på ny funksjonalitet isolert fra main", "Å publisere nye versjoner til produksjon", "Å lagre brukernes passord og hemmeligheter adskilt fra hovedkoden i en egen beskyttet gren", "Å slette hele prosjektet permanent"],
      explanation: "En feature branch lar deg jobbe på ny funksjonalitet isolert fra main-branchen, slik at hovedkoden ikke påvirkes før funksjonen er ferdig.",
    },
    {
      question: "Hva er en merge conflict?",
      options: ["Når to utviklere har endret samme del av en fil, og Git ikke kan slå sammen automatisk", "Når nettverket er så tregt at Git ikke rekker å laste ned alle endringene fra fjernlageret", "Når en branch slettes ved et uhell, og Git ikke lenger kan finne igjen de endringene som lå der", "Når et program krasjer fordi to tråder prøver å skrive til samme variabel på nøyaktig samme tid"],
      explanation: "En merge conflict oppstår når to utviklere har endret samme del av en fil. Git kan ikke avgjøre hvilken endring som skal beholdes, så konflikten må løses manuelt.",
    },
    {
      question: "Hva gjør git pull?",
      options: ["Henter de nyeste endringene fra fjernlageret (remote) og fletter dem inn", "Sletter alle lokale endringer i arbeidskopien", "Oppretter en helt ny kopi av fjernlageret på maskinen din", "Sender de lokale commitene dine opp til fjernlageret"],
      explanation: "git pull henter de nyeste endringene fra fjernlageret (remote) og fletter dem inn i den lokale branchen din.",
    },
    {
      question: "Hva er en commit i Git?",
      options: ["Et lagringspunkt – et øyeblikksbilde av endringene på et bestemt tidspunkt", "En måte å slette filer permanent fra prosjektet", "En sammenslåing av to grener der endringene fra begge blir kombinert til én", "En separat utviklingslinje der du kan jobbe uten å påvirke hovedgrenen (main)"],
      explanation: "En commit er et lagringspunkt i Git – et øyeblikksbilde av endringene på et bestemt tidspunkt, med en melding som beskriver hva som ble endret.",
    },
    {
      question: "Hvorfor er det lurt å oppdatere main med git pull før man lager en feature branch?",
      options: ["For å starte fra den nyeste versjonen av koden", "For å slette andres arbeid", "For at feature branchen automatisk skal fjerne andres commiter fra hovedgrenen", "For å gjøre koden tregere"],
      explanation: "Ved å oppdatere main med git pull først starter feature branchen fra den nyeste koden, noe som reduserer risikoen for merge conflicts senere.",
    },
  ],
  "it-2-8-4": [
    {
      question: "Hva er hovedformålet med docstrings?",
      options: ["Å dokumentere hva funksjoner, klasser og moduler gjør", "Å forklare hver eneste linje kode med en egen kommentar over", "Å gjøre kildekoden lengre og mer omfattende slik at den ser mer profesjonell ut", "Å forklare hver eneste linje kode i detalj slik at ingen del av programmet er uklar"],
      explanation: "Docstrings dokumenterer hva funksjoner, klasser og moduler gjør, slik at andre (og du selv senere) forstår koden uten å lese all implementasjonen.",
    },
    {
      question: "Hva bør en god inline-kommentar forklare?",
      options: ["Hvorfor noe gjøres, ikke det åpenbare hva", "Hva hver linje gjør, selv det åpenbare", "Hva hver enkelt linje gjør, selv de helt åpenbare operasjonene som å øke en teller", "Ingenting – kommentarer er unødvendige"],
      explanation: "En god inline-kommentar forklarer hvorfor noe gjøres, ikke det åpenbare hva (som «øk x med 1»), siden hva-et ofte fremgår av koden selv.",
    },
    {
      question: "Hva er refaktorering?",
      options: ["Å forbedre strukturen i koden uten å endre hva den gjør", "Å legge til ny funksjonalitet", "Å bytte til et helt annet programmeringsspråk", "Å legge til ny funksjonalitet så programmet gjør mer"],
      explanation: "Refaktorering er å forbedre strukturen og lesbarheten i koden uten å endre hva den faktisk gjør (oppførselen).",
    },
    {
      question: "Hvorfor er god dokumentasjon viktig for vedlikehold?",
      options: ["Fordi kode leses langt oftere enn den skrives, og godt dokumentert kode er lettere å forstå senere", "Fordi grundig dokumentasjon fjerner behovet for å skrive tester av programmet senere", "Fordi dokumentasjonen krypterer kildekoden og beskytter den mot uautorisert tilgang", "Fordi god dokumentasjon gjør at programmet kjører raskere og bruker mindre minne"],
      explanation: "God dokumentasjon er viktig fordi kode leses langt oftere enn den skrives. Godt dokumentert kode gjør det lettere for andre – og deg selv senere – å forstå og vedlikeholde den.",
    },
    {
      question: "Hva kjennetegner dårlig dokumentert kode?",
      options: ["Uklare parameternavn og kommentarer som ikke forklarer hensikten", "Tydelige docstrings og forklarende kommentarer", "Konsekvent struktur og innrykk gjennom hele filen slik at koden er lett å følge", "Tydelige docstrings og forklarende kommentarer som beskriver hensikten med koden"],
      explanation: "Dårlig dokumentert kode har uklare parameternavn (som a, b, c) og kommentarer som ikke forklarer hensikten, noe som gjør koden vanskelig å forstå.",
    },
  ],
  "it-2-8-5": [
    {
      question: "Hva står MoSCoW for i kravspesifikasjon?",
      options: ["Must, Should, Could, Won't", "Most, Should, Could, Won't", "Maybe, Should, Could, Would", "Must, Shall, Can, Will"],
      explanation: "MoSCoW står for Must have, Should have, Could have og Won't have – en metode for å prioritere krav etter viktighet.",
    },
    {
      question: "Hva kjennetegner en god prosjektidé til et avsluttende prosjekt?",
      options: ["Den løser et reelt problem og har passe omfang", "Den er så stor at den aldri kan fullføres", "Den er så ambisiøs at den ikke kan fullføres", "Den demonstrerer ingen kompetansemål"],
      explanation: "En god prosjektidé løser et reelt problem, har passe omfang (2–6 ukers arbeid) og lar deg demonstrere flere kompetansemål.",
    },
    {
      question: "Hva er en «Must have» i MoSCoW-prioritering?",
      options: ["En funksjon som er helt nødvendig for at produktet skal fungere", "En funksjon som er fin å ha, men som ikke er nødvendig for produktet", "En funksjon som bevisst utelates fra denne versjonen og kanskje tas med senere", "En funksjon som bevisst ikke skal være med i akkurat denne versjonen"],
      explanation: "En «Must have» er en funksjon som er helt nødvendig for at produktet skal fungere og levere kjerneverdien sin.",
    },
    {
      question: "Hvorfor er det viktig å avgrense omfanget i et avsluttende prosjekt?",
      options: ["For at prosjektet skal være gjennomførbart innenfor tiden man har", "For å gjøre prosjektet umulig å fullføre i tide", "Det er egentlig ikke viktig, siden et prosjekt uansett vokser fritt underveis", "For å gjøre prosjektet så stort og komplisert at det blir umulig å bli ferdig med"],
      explanation: "Å avgrense omfanget sikrer at prosjektet er gjennomførbart innenfor tilgjengelig tid, slik at man rekker å fullføre kjernen før man legger til ekstra.",
    },
    {
      question: "Hva er en naturlig avsluttende fase i et IT-prosjekt?",
      options: ["Presentasjon og dokumentasjon av det ferdige produktet", "Å starte planleggingen av et helt nytt prosjekt med en gang", "Å ignorere all tilbakemelding fra brukere og veiledere og levere uten endringer", "Å umiddelbart starte et helt nytt prosjekt uten å avslutte det man holder på med"],
      explanation: "En naturlig avsluttende fase er å presentere og dokumentere det ferdige produktet, der man viser fram resultatet og reflekterer over prosessen.",
    },
  ],
};

export default quizData_it_2;
