import type { QuizQuestion } from './quiz-data';

const quizData_it_2: Record<string, QuizQuestion[]> = {
  'it-2-1-1': [
    {
      question: 'Hva er et programmeringsparadigme?',
      options: [
        'En grunnleggende stil eller filosofi for hvordan vi organiserer og strukturerer kode',
        'En type maskinvare',
        'En feilmelding',
        'Et nettverksprotokoll',
      ],
      explanation: 'Et programmeringsparadigme er en grunnleggende stil eller filosofi for hvordan vi organiserer kode, for eksempel prosedyrell eller objektorientert programmering.',
    },
    {
      question: 'Hva er en klasse i objektorientert programmering?',
      options: [
        'En mal eller oppskrift for å lage objekter',
        'En konkret instans i minnet',
        'En type løkke',
        'En feilmelding',
      ],
      explanation: 'En klasse er en mal eller oppskrift for å lage objekter (som en kakeform), mens et objekt er en konkret instans av klassen.',
    },
    {
      question: 'I hvilket land og av hvem ble det første OOP-språket Simula utviklet?',
      options: [
        'I Norge, av Ole-Johan Dahl og Kristen Nygaard',
        'I USA, av Bill Gates',
        'I England, av Tim Berners-Lee',
        'I Finland, av Linus Torvalds',
      ],
      explanation: 'Det første OOP-språket, Simula, ble utviklet i Norge på 1960-tallet av Ole-Johan Dahl og Kristen Nygaard ved Norsk Regnesentral.',
    },
    {
      question: 'Hvilket paradigme brukes når man har en funksjon som tar inn data og returnerer et resultat, uten at data og funksjon er samlet i et objekt?',
      options: [
        'Prosedyrell programmering',
        'Objektorientert programmering',
        'Funksjonell innkapsling',
        'Polymorfisme',
      ],
      explanation: 'Dette er prosedyrell programmering. Data og funksjon er ikke samlet i et objekt, men funksjonen tar inn data og returnerer et resultat.',
    },
    {
      question: 'Når er OOP spesielt nyttig?',
      options: [
        'Når programmet er stort og komplekst',
        'Når man bare skal regne ut én enkel formel',
        'Når man aldri skal gjenbruke kode',
        'Når man bare bruker tall',
      ],
      explanation: 'OOP er kraftig når programmet er stort og komplekst, og når man vil organisere koden i gjenbrukbare moduler. For helt enkle oppgaver kan prosedyrell være bedre.',
    },
  ],
  'it-2-1-2': [
    {
      question: 'Hva heter konstruktørmetoden i en Python-klasse?',
      options: ['__init__', '__main__', 'constructor', 'new'],
      explanation: 'Konstruktøren er en spesiell metode som kjører automatisk når et nytt objekt opprettes. I Python heter den alltid __init__.',
    },
    {
      question: 'Hva refererer self til i en Python-klasse?',
      options: [
        'Objektet selv som metoden kalles på',
        'Klassen som helhet',
        'En global variabel',
        'Modulen filen ligger i',
      ],
      explanation: 'self refererer til objektet selv – det objektet som metoden kalles på. Det gir tilgang til objektets egne attributter.',
    },
    {
      question: 'Hva er forskjellen mellom en klasse og et objekt?',
      options: [
        'En klasse er en mal, et objekt er en konkret instans av klassen med egne verdier',
        'De er nøyaktig det samme',
        'Et objekt er en mal for klasser',
        'En klasse kan ikke ha metoder',
      ],
      explanation: 'En klasse er en mal som definerer attributter og metoder, mens et objekt er en konkret instans av klassen med sine egne verdier.',
    },
    {
      question: 'Hva skjer hvis du lager mange objekter av samme klasse?',
      options: [
        'Hvert objekt har sine egne attributtverdier og er uavhengig av de andre',
        'Alle objektene deler de samme verdiene',
        'Bare ett objekt kan eksistere om gangen',
        'Programmet krasjer',
      ],
      explanation: 'Du kan lage mange objekter fra samme mal. Hvert objekt har sine egne attributtverdier og er uavhengig av de andre.',
    },
    {
      question: 'Hva gjør en metode som bruker return?',
      options: [
        'Den sender en verdi tilbake til koden som kalte den',
        'Den sletter objektet',
        'Den skriver alltid ut til skjermen',
        'Den lager en ny klasse',
      ],
      explanation: 'En metode som bruker return sender en verdi tilbake til stedet den ble kalt fra, akkurat som vanlige funksjoner.',
    },
  ],
  'it-2-1-3': [
    {
      question: 'Hva betyr innkapsling (encapsulation)?',
      options: [
        'Å pakke data og metoder sammen i en klasse og skjule den interne implementasjonen',
        'Å gjøre alle attributter offentlige',
        'Å fjerne alle metoder',
        'Å kopiere en klasse',
      ],
      explanation: 'Innkapsling betyr å pakke data (attributter) og funksjoner (metoder) sammen i en klasse og samtidig skjule den interne implementasjonen fra omverdenen.',
    },
    {
      question: 'Hvordan markeres et privat attributt i Python?',
      options: [
        'Med to understreker foran navnet, som self.__saldo',
        'Med stor forbokstav',
        'Med nøkkelordet private',
        'Med firkantparenteser',
      ],
      explanation: 'I Python markeres private attributter med understreker foran navnet. To understreker (self.__saldo) gir sterkest beskyttelse.',
    },
    {
      question: 'Hva er en property i Python?',
      options: [
        'En måte å la en metode oppføre seg som et attributt, slik at man kan kontrollere tilgang',
        'En type løkke',
        'En global variabel',
        'En feilmelding',
      ],
      explanation: 'En property gjør at en metode kan brukes som om den var et attributt, noe som gir elegant tilgangskontroll i Python.',
    },
    {
      question: 'Hva er hovedformålet med information hiding?',
      options: [
        'Å redusere kompleksitet og beskytte data mot ugyldige verdier',
        'Å holde koden hemmelig for andre utviklere',
        'Å gjøre programmet raskere',
        'Å fjerne all dokumentasjon',
      ],
      explanation: 'Information hiding handler ikke om hemmelighold, men om å redusere kompleksitet og beskytte data, for eksempel ved å validere verdier før de lagres.',
    },
    {
      question: 'Hvordan lager man en read-only property?',
      options: [
        'Ved å lage en getter uten en tilhørende setter',
        'Ved å gjøre attributtet offentlig',
        'Ved å fjerne konstruktøren',
        'Ved å bruke en løkke',
      ],
      explanation: 'En read-only property lages ved å lage en getter uten setter, slik at verdien kan leses, men ikke endres utenfra.',
    },
  ],
  'it-2-1-4': [
    {
      question: 'Hva er arv (inheritance) i OOP?',
      options: [
        'Når en subklasse overtar attributter og metoder fra en superklasse',
        'Når to klasser slettes samtidig',
        'Når man kopierer en hel fil',
        'Når en variabel endrer type',
      ],
      explanation: 'Arv er når en klasse (subklassen) overtar attributter og metoder fra en annen klasse (superklassen).',
    },
    {
      question: 'Hva brukes super() til i en konstruktør?',
      options: [
        'Å kalle metoder fra superklassen, for eksempel for å gjenbruke oppsettskode',
        'Å slette superklassen',
        'Å lage et nytt objekt fra bunnen',
        'Å avslutte programmet',
      ],
      explanation: 'super() brukes til å kalle metoder fra superklassen. Det er spesielt nyttig i konstruktører (__init__) for å gjenbruke oppsettskode.',
    },
    {
      question: 'Hva betyr det å overstyre (override) en metode?',
      options: [
        'En subklasse definerer en metode med samme navn som i superklassen for å spesialisere oppførselen',
        'Man sletter metoden fra superklassen',
        'Man kjører metoden to ganger',
        'Man gir metoden et nytt navn',
      ],
      explanation: 'Å overstyre (override) en metode betyr at en subklasse definerer en metode med samme navn som i superklassen, og dermed spesialiserer oppførselen.',
    },
    {
      question: 'Hva gjør isinstance()?',
      options: [
        'Sjekker om et objekt er av en bestemt klasse eller arver fra den',
        'Lager et nytt objekt',
        'Sletter en klasse',
        'Returnerer antall objekter',
      ],
      explanation: 'isinstance() brukes til å sjekke om et objekt er av en bestemt klasse, eller arver fra en klasse.',
    },
    {
      question: 'Når bør man bruke arv?',
      options: [
        'Når det er en klar «is-a»-relasjon, som at en Elbil er en Bil',
        'Når to klasser ikke har noe til felles',
        'Alltid, uansett situasjon',
        'Bare når man jobber med tall',
      ],
      explanation: 'Arv bør brukes når det er en klar «is-a»-relasjon (en Elbil er en Bil) og subklassen er en spesialisering av superklassen.',
    },
  ],
  'it-2-1-5': [
    {
      question: 'Hva er polymorfisme?',
      options: [
        'At objekter av ulike klasser kan behandles likt, men oppføre seg forskjellig',
        'At alle objekter må være identiske',
        'At en klasse bare kan ha én metode',
        'At data lagres i en fil',
      ],
      explanation: 'Polymorfisme (poly = mange, morph = form) er evnen til at objekter av ulike klasser kan behandles likt – ved å kalle samme metode – men oppføre seg forskjellig.',
    },
    {
      question: 'Hva er duck typing i Python?',
      options: [
        'Python sjekker om objektet har metoden vi prøver å kalle, ikke hvilken klasse det tilhører',
        'En metode for å sortere ender',
        'En type kryptering',
        'En måte å definere tall på',
      ],
      explanation: 'Duck typing betyr at Python ikke sjekker hvilken klasse et objekt tilhører, men bare om objektet har metoden vi prøver å kalle.',
    },
    {
      question: 'Hva kjennetegner en abstrakt klasse?',
      options: [
        'Den kan ikke instansieres direkte og fungerer som en mal subklasser må følge',
        'Den kan brukes uten subklasser',
        'Den har ingen metoder',
        'Den kan bare inneholde tall',
      ],
      explanation: 'En abstrakt klasse kan ikke instansieres direkte. Den fungerer som en mal som definerer et felles grensesnitt subklassene må implementere.',
    },
    {
      question: 'Hva sier åpen/lukket-prinsippet (Open/Closed Principle)?',
      options: [
        'Programvare skal være åpen for utvidelse, men lukket for endring',
        'All kode skal være åpen for alle',
        'Programmer skal aldri endres',
        'Klasser skal alltid være private',
      ],
      explanation: 'Åpen/lukket-prinsippet sier at programvare skal være åpen for utvidelse, men lukket for endring – man legger til ny funksjonalitet uten å endre eksisterende kode.',
    },
    {
      question: 'Hva er dunder-metoder i Python?',
      options: [
        'Spesialmetoder med dobbel understrek, som __len__, som gir innebygd polymorfisme',
        'En type feilmelding',
        'Metoder som bare kan kalles én gang',
        'Globale variabler',
      ],
      explanation: 'Dunder-metoder (double underscore) som __len__ lar dine egne klasser fungere med innebygde funksjoner som len(), og gir innebygd polymorfisme i Python.',
    },
  ],
  'it-2-2-1': [
    {
      question: 'Hva er komposisjon i OOP?',
      options: [
        'Når ett objekt inneholder andre objekter som en del av sin tilstand («har-en»)',
        'Når en klasse arver fra en annen («er-en»)',
        'Når man sletter et objekt',
        'Når to klasser slås sammen til én',
      ],
      explanation: 'Komposisjon er når ett objekt inneholder ett eller flere andre objekter som en del av sin tilstand. Vi sier at objektet «har-en» relasjon til de andre.',
    },
    {
      question: 'Hva sier designprinsippet «favor composition over inheritance»?',
      options: [
        'Foretrekk å bygge funksjonalitet ved å kombinere objekter framfor å arve oppførsel',
        'Bruk alltid arv framfor komposisjon',
        'Unngå klasser helt',
        'Bruk bare globale funksjoner',
      ],
      explanation: '«Favor composition over inheritance» sier at man bør foretrekke å bygge funksjonalitet ved å kombinere objekter (komposisjon) framfor å arve oppførsel (arv).',
    },
    {
      question: 'Hva er forskjellen mellom komposisjon og aggregering?',
      options: [
        'Ved komposisjon eksisterer ikke de inneholdte objektene uten helheten; ved aggregering kan de eksistere uavhengig',
        'De er nøyaktig det samme',
        'Aggregering er en form for arv',
        'Komposisjon brukes bare på tall',
      ],
      explanation: 'Komposisjon er en sterk binding der de inneholdte objektene ikke eksisterer uten helheten, mens aggregering er en svakere form der objektene kan eksistere uavhengig.',
    },
    {
      question: 'Hva slags relasjon beskriver «Bil har en Motor»?',
      options: [
        'En komposisjons-/«har-en»-relasjon',
        'En arv-/«er-en»-relasjon',
        'En polymorf relasjon',
        'En statisk relasjon',
      ],
      explanation: '«Bil har en Motor» er en komposisjons-relasjon («har-en»), der Bil inneholder en Motor som del av sin tilstand, i stedet for å arve fra den.',
    },
    {
      question: 'Hvilken fordel gir komposisjon framfor arv?',
      options: [
        'Mer fleksibilitet, fordi man kan kombinere oppførsel uten dype arvehierarkier',
        'At koden alltid blir tregere',
        'At man slipper å skrive klasser',
        'At objekter ikke kan ha attributter',
      ],
      explanation: 'Komposisjon gir mer fleksibilitet fordi man kan kombinere oppførsel ved å sette sammen objekter, i stedet for å låse seg til dype, stive arvehierarkier.',
    },
  ],
  'it-2-2-2': [
    {
      question: 'Hva betyr LIFO i en stakk (stack)?',
      options: [
        'Last In, First Out – det siste elementet inn er det første ut',
        'Last In, First Output',
        'List In, File Out',
        'Least Important, First Out',
      ],
      explanation: 'En stakk er en LIFO-struktur: Last In, First Out. Det siste elementet som legges på, er det første som tas av.',
    },
    {
      question: 'Hva betyr FIFO i en kø (queue)?',
      options: [
        'First In, First Out – det første elementet inn er det første ut',
        'Fast In, Fast Out',
        'File In, File Out',
        'First In, Final Output',
      ],
      explanation: 'En kø er en FIFO-struktur: First In, First Out. Det første elementet som legges inn, er det første som tas ut – som en kø i butikken.',
    },
    {
      question: 'Hvilken operasjon legger et element på toppen av en stakk?',
      options: ['push', 'enqueue', 'dequeue', 'peek'],
      explanation: 'push legger et element på toppen av stakken, mens pop fjerner og returnerer toppelementet.',
    },
    {
      question: 'Hvilken datastruktur passer best for en angre-funksjon (undo)?',
      options: [
        'En stakk (LIFO)',
        'En kø (FIFO)',
        'En mengde (set)',
        'En ordbok (dict)',
      ],
      explanation: 'En stakk passer perfekt for angre-funksjoner fordi den siste handlingen som ble gjort, er den første som skal angres (LIFO).',
    },
    {
      question: 'Hva er collections.deque nyttig til i Python?',
      options: [
        'En effektiv implementasjon av køer og stakker',
        'Å sortere tall',
        'Å koble til en database',
        'Å lese filer',
      ],
      explanation: 'collections.deque er Pythons innebygde, effektive implementasjon som egner seg godt for både køer (enqueue/dequeue) og stakker.',
    },
  ],
  'it-2-2-3': [
    {
      question: 'Hva lagrer en ordbok (dictionary)?',
      options: [
        'Nøkkel-verdi-par der hver nøkkel er unik',
        'Bare en ordnet liste av tall',
        'Bare unike enkeltverdier uten nøkler',
        'Bare tekst',
      ],
      explanation: 'En ordbok lagrer nøkkel-verdi-par der hver nøkkel er unik og brukes til å slå opp verdien.',
    },
    {
      question: 'Hvilken datastruktur ligger til grunn for ordbøker og gir raskt oppslag?',
      options: ['Hashtabell', 'Lenket liste', 'Binærtre', 'Stakk'],
      explanation: 'Hashtabellen er den underliggende datastrukturen for ordbøker. Den bruker en hash-funksjon for å gi raskt oppslag (typisk O(1)).',
    },
    {
      question: 'Hva kjennetegner en mengde (set)?',
      options: [
        'En uordnet samling av unike elementer der duplikater fjernes',
        'En ordnet liste der duplikater beholdes',
        'En samling nøkkel-verdi-par',
        'En struktur som bare kan inneholde tekst',
      ],
      explanation: 'En mengde (set) er en uordnet samling av unike elementer. Duplikater fjernes automatisk.',
    },
    {
      question: 'Hva er en god bruk av en mengde (set)?',
      options: [
        'Å finne eller fjerne duplikater i en liste',
        'Å lagre data i bestemt rekkefølge',
        'Å koble nøkler til verdier',
        'Å implementere en angre-funksjon',
      ],
      explanation: 'En mengde er perfekt for å finne eller fjerne duplikater, siden den automatisk bare beholder unike elementer.',
    },
    {
      question: 'Hvor raskt er oppslag i en ordbok via hashtabell typisk?',
      options: ['O(1) – konstant tid', 'O(n) – lineær tid', 'O(n²) – kvadratisk tid', 'O(log n)'],
      explanation: 'Ordbøker gir typisk O(1)-oppslag (konstant tid) via hashtabeller, noe som gjør dem svært raske for å slå opp data med en nøkkel.',
    },
  ],
  'it-2-2-4': [
    {
      question: 'Hva er et designmønster?',
      options: [
        'En generell, gjenbrukbar løsning på et vanlig problem i programvaredesign',
        'Et fast utseende på en nettside',
        'En type feilmelding',
        'En sorteringsalgoritme',
      ],
      explanation: 'Et designmønster er en generell, gjenbrukbar løsning på et vanlig problem i programvaredesign – en mal eller oppskrift, ikke ferdig kode.',
    },
    {
      question: 'Hva gjør Observer-mønsteret?',
      options: [
        'Lar flere objekter varsles automatisk når noe endres, ved at de «abonnerer» på hendelser',
        'Lager objekter uten å spesifisere klasse',
        'Bytter ut algoritmer på kjøretid',
        'Skjuler attributter',
      ],
      explanation: 'Observer-mønsteret lar flere objekter varsles automatisk når noe endres, ved at de «abonnerer» på hendelser (løs kobling).',
    },
    {
      question: 'Hva gjør Strategy-mønsteret?',
      options: [
        'Lar deg definere en familie av algoritmer, innkapsle hver, og gjøre dem utskiftbare',
        'Lar objekter abonnere på hendelser',
        'Skjuler den eksakte klassen ved objektoppretting',
        'Lagrer data i en database',
      ],
      explanation: 'Strategy-mønsteret lar deg definere en familie av algoritmer, innkapsle hver av dem og gjøre dem utskiftbare, slik at du enkelt kan bytte mellom dem.',
    },
    {
      question: 'Hva brukes Factory-mønsteret til?',
      options: [
        'Å opprette objekter uten å spesifisere den eksakte klassen',
        'Å abonnere på hendelser',
        'Å sortere lister',
        'Å skjule attributter',
      ],
      explanation: 'Factory-mønsteret brukes til å opprette objekter uten å spesifisere den eksakte klassen, for å skjule kompleks objektoppretting.',
    },
    {
      question: 'Hva er en fordel med å bruke designmønstre?',
      options: [
        'De gir et felles språk og beprøvde løsninger på gjentakende problemer',
        'De gjør koden alltid kortere',
        'De fjerner behovet for testing',
        'De krypterer all data',
      ],
      explanation: 'Designmønstre gir et felles språk mellom utviklere og beprøvde, gjenbrukbare løsninger på problemer som dukker opp igjen og igjen.',
    },
  ],
  'it-2-2-5': [
    {
      question: 'Hva står UML for?',
      options: [
        'Unified Modeling Language',
        'Universal Machine Language',
        'User Markup Logic',
        'Unique Method List',
      ],
      explanation: 'UML står for Unified Modeling Language og er et standardisert visuelt språk for å tegne og dokumentere programvaredesign.',
    },
    {
      question: 'Hvilke tre deler vises i et klassediagram?',
      options: [
        'Navn, attributter og metoder',
        'Input, output og feil',
        'Header, body og footer',
        'Start, midt og slutt',
      ],
      explanation: 'Et klassediagram viser klassens navn øverst, attributter (variabler) i midten og metoder nederst.',
    },
    {
      question: 'Hvordan vises arv i et UML-klassediagram?',
      options: [
        'Med en pil med hvit (åpen) trekant',
        'Med en stiplet sirkel',
        'Med en rød firkant',
        'Med et spørsmålstegn',
      ],
      explanation: 'Arv (inheritance) vises i et klassediagram med en pil med hvit (åpen) trekant, for eksempel Student ──▷ Person.',
    },
    {
      question: 'Hva viser et use case-diagram?',
      options: [
        'Funksjonalitet fra brukerens perspektiv',
        'Hvordan minnet er organisert',
        'Hastigheten på algoritmer',
        'Hvilke kabler som brukes',
      ],
      explanation: 'Et use case-diagram viser funksjonaliteten i et system fra brukerens perspektiv, med aktører og de handlingene de kan utføre.',
    },
    {
      question: 'Hva viser et sekvensdiagram?',
      options: [
        'Hvordan objekter samhandler over tid gjennom meldinger',
        'Klassens attributter og metoder',
        'Fargene på en nettside',
        'Strukturen i en database',
      ],
      explanation: 'Et sekvensdiagram viser hvordan objekter samhandler over tid, med objekter øverst, livslinjer nedover og meldinger som piler mellom dem.',
    },
  ],
  'it-2-3-1': [
    {
      question: 'Hva beskriver tidskompleksitet?',
      options: [
        'Hvor mange operasjoner en algoritme må utføre som funksjon av input-størrelsen n',
        'Hvor mange linjer kode et program har',
        'Hvor mye et program koster',
        'Hvor mange feil et program inneholder',
      ],
      explanation: 'Tidskompleksitet er et mål på hvor mange operasjoner en algoritme må utføre som funksjon av input-størrelsen (n), uttrykt med Big O-notasjon.',
    },
    {
      question: 'Hva er tidskompleksiteten til en enkel løkke som går gjennom alle n elementene én gang?',
      options: ['O(n)', 'O(1)', 'O(n²)', 'O(log n)'],
      explanation: 'En enkel løkke som går gjennom n elementer én gang har lineær tidskompleksitet, O(n).',
    },
    {
      question: 'Hva er tidskompleksiteten til to nøstede løkker som hver går gjennom n elementer?',
      options: ['O(n²)', 'O(n)', 'O(1)', 'O(log n)'],
      explanation: 'To nøstede løkker som hver går gjennom n elementer gir O(n²) (kvadratisk tid), siden den indre løkken kjøres n ganger for hver av de n ytre iterasjonene.',
    },
    {
      question: 'Hva er plasskompleksitet?',
      options: [
        'Et mål på hvor mye minne en algoritme bruker som funksjon av input-størrelsen',
        'Hvor stor skjerm programmet trenger',
        'Antall variabler med navn',
        'Hvor lang tid algoritmen tar',
      ],
      explanation: 'Plasskompleksitet er et mål på hvor mye minne en algoritme bruker som funksjon av input-størrelsen, også uttrykt med Big O-notasjon.',
    },
    {
      question: 'Hva advarte Donald Knuth mot med uttrykket «premature optimization is the root of all evil»?',
      options: [
        'Å bruke for mye tid på å optimalisere kode før det er nødvendig',
        'Å aldri optimalisere kode',
        'Å skrive kommentarer',
        'Å bruke funksjoner',
      ],
      explanation: 'Prematur optimalisering er å bruke for mye tid på å optimalisere kode før det er nødvendig. Knuth advarte mot dette fordi det kompliserer koden uten klar gevinst.',
    },
  ],
  'it-2-3-2': [
    {
      question: 'Hva er tidskompleksiteten til binærsøk på en sortert liste?',
      options: ['O(log n)', 'O(n)', 'O(n²)', 'O(1)'],
      explanation: 'Binærsøk har O(log n) tidskompleksitet fordi det halverer søkeområdet for hver iterasjon, men det krever at listen er sortert.',
    },
    {
      question: 'Hvilket krav stiller binærsøk til listen?',
      options: [
        'Listen må være sortert',
        'Listen må være usortert',
        'Listen må være tom',
        'Listen må bare inneholde tekst',
      ],
      explanation: 'Binærsøk krever at listen er sortert, fordi det baserer seg på å sammenligne med midtelementet og halvere søkeområdet.',
    },
    {
      question: 'Hvilken sorteringsalgoritme bruker del-og-hersk (divide and conquer)?',
      options: ['Merge Sort', 'Bubble Sort', 'Selection Sort', 'Insertion Sort'],
      explanation: 'Merge Sort bruker del-og-hersk: den splitter listen i to halvdeler, sorterer hver halvdel rekursivt og fletter dem sammen. Den har O(n log n) tidskompleksitet.',
    },
    {
      question: 'Hva er tidskompleksiteten til enkle sorteringsalgoritmer som Bubble Sort?',
      options: ['O(n²)', 'O(n)', 'O(log n)', 'O(1)'],
      explanation: 'Enkle sorteringsalgoritmer som Bubble Sort, Selection Sort og Insertion Sort har O(n²) tidskompleksitet i gjennomsnitt.',
    },
    {
      question: 'Hvilken Python-funksjon returnerer en ny sortert liste uten å endre originalen?',
      options: ['sorted()', '.sort()', 'order()', 'arrange()'],
      explanation: 'sorted() returnerer en ny sortert liste og lar originalen være uendret, mens metoden .sort() sorterer listen på stedet.',
    },
  ],
  'it-2-3-3': [
    {
      question: 'Hva er en datastruktur?',
      options: [
        'En organisert måte å lagre og håndtere data på som gir effektiv tilgang',
        'En type feilmelding',
        'Et programmeringsspråk',
        'En nettverkskabel',
      ],
      explanation: 'En datastruktur er en organisert måte å lagre og håndtere data på, som gir effektiv tilgang og modifikasjon.',
    },
    {
      question: 'Hva blir igjen i stakken etter: push 1, push 2, push 3, pop, push 4, pop, pop?',
      options: ['[1]', '[1, 2]', '[4]', 'Tom stakk'],
      explanation: 'Stakken: [1,2,3] → pop fjerner 3 → [1,2] → push 4 → [1,2,4] → pop fjerner 4 → [1,2] → pop fjerner 2 → [1]. Igjen står [1].',
    },
    {
      question: 'Hvilken datastruktur er best for å slå opp en elev raskt basert på elevnummer blant 10 000 elever?',
      options: [
        'En ordbok (dict) med elevnummer som nøkkel',
        'En usortert liste man søker lineært i',
        'En stakk',
        'En kø',
      ],
      explanation: 'En ordbok med elevnummer som nøkkel gir O(1)-oppslag, mye raskere enn å søke lineært gjennom en liste med 10 000 elever.',
    },
    {
      question: 'Hva er resultatet av A & B når A = {1,2,3,4,5} og B = {4,5,6,7,8}?',
      options: ['{4, 5}', '{1, 2, 3}', '{6, 7, 8}', '{1, 2, 3, 4, 5, 6, 7, 8}'],
      explanation: 'Operatoren & gir snittet (intersection) av to mengder – elementene som finnes i begge. Her er det {4, 5}.',
    },
    {
      question: 'Hva følger en kø (queue)?',
      options: [
        'FIFO – First In, First Out',
        'LIFO – Last In, First Out',
        'Tilfeldig rekkefølge',
        'Alfabetisk rekkefølge',
      ],
      explanation: 'En kø følger FIFO (First In, First Out): det første elementet som legges inn, er det første som tas ut – som en kø i butikken.',
    },
  ],
  'it-2-3-4': [
    {
      question: 'Hva er de to nødvendige delene i en rekursiv funksjon?',
      options: [
        'Et basetilfelle og et rekursivt tilfelle',
        'En løkke og en betingelse',
        'En klasse og et objekt',
        'En nøkkel og en verdi',
      ],
      explanation: 'En rekursiv funksjon trenger et basetilfelle (som stopper rekursjonen) og et rekursivt tilfelle (som forenkler problemet og kaller funksjonen på nytt).',
    },
    {
      question: 'Hva returnerer summer(4) gitt: if n == 0: return 0; return n + summer(n - 1)?',
      options: ['10', '4', '0', '24'],
      explanation: 'summer(4) = 4 + 3 + 2 + 1 + 0 = 10. Funksjonen legger sammen alle tallene fra n ned til 0.',
    },
    {
      question: 'Hva er fakultet av 5 (5!)?',
      options: ['120', '25', '15', '720'],
      explanation: '5! = 5 × 4 × 3 × 2 × 1 = 120. Fakultet er det klassiske eksempelet på rekursjon, der n! = n × (n-1)!.',
    },
    {
      question: 'Hva skjer hvis en rekursiv funksjon mangler et fungerende basetilfelle?',
      options: [
        'Den kaller seg selv for alltid og forårsaker stack overflow',
        'Den returnerer alltid 0',
        'Den kjører raskere',
        'Den gjør ingenting',
      ],
      explanation: 'Uten et fungerende basetilfelle kaller funksjonen seg selv uendelig, kall-stakken fylles opp, og programmet krasjer med stack overflow.',
    },
    {
      question: 'Hva skjer på kall-stakken hver gang en rekursiv funksjon kaller seg selv?',
      options: [
        'Et nytt kall legges på stakken til basetilfellet nås',
        'Stakken tømmes helt',
        'Programmet avsluttes umiddelbart',
        'Ingenting skjer',
      ],
      explanation: 'Hver gang en rekursiv funksjon kaller seg selv, legges et nytt kall på kall-stakken. Når basetilfellet nås, avvikles kallene i motsatt rekkefølge.',
    },
  ],
  'it-2-3-5': [
    {
      question: 'Hvorfor bør man bruke "with open(...) as fil:" i Python?',
      options: [
        'Fordi filen da lukkes automatisk når blokken er ferdig',
        'Fordi det gjør filen større',
        'Fordi det krypterer filen',
        'Fordi det er den eneste måten å lese filer på',
      ],
      explanation: 'with open(...) as fil: sørger for at filen lukkes automatisk når blokken er ferdig, selv om det oppstår en feil underveis.',
    },
    {
      question: 'Hvilken filmodus brukes for å lese fra en fil?',
      options: ['"r"', '"w"', '"a"', '"x"'],
      explanation: 'Modusen "r" (read) brukes for å lese fra en fil. "w" skriver (overskriver), og "a" legger til på slutten.',
    },
    {
      question: 'Hva står CSV for?',
      options: [
        'Comma Separated Values',
        'Compact System Variables',
        'Coded Secure Version',
        'Central Sorting Value',
      ],
      explanation: 'CSV står for Comma Separated Values – et tekstbasert filformat der data er organisert i rader og kolonner, separert med komma (eller semikolon).',
    },
    {
      question: 'Hva er en fordel med JSON framfor CSV?',
      options: [
        'JSON kan representere nestede og strukturerte data',
        'JSON kan bare lagre tall',
        'JSON er alltid mindre enn CSV',
        'JSON kan ikke leses av mennesker',
      ],
      explanation: 'JSON kan representere nestede og strukturerte data (objekter inne i objekter, lister osv.), mens CSV er begrenset til en flat tabell med rader og kolonner.',
    },
    {
      question: 'Hva er pandas i Python?',
      options: [
        'Et kraftig bibliotek for dataanalyse og manipulasjon av strukturerte data',
        'En type fil',
        'En nettverksprotokoll',
        'En sorteringsalgoritme',
      ],
      explanation: 'pandas er et kraftig Python-bibliotek for dataanalyse og manipulasjon. Det er standardverktøyet for å jobbe med strukturerte data, blant annet via DataFrames.',
    },
  ],
  'it-2-4-1': [
    {
      question: 'Hva er et API?',
      options: [
        'Et sett av regler og protokoller som lar programmer kommunisere med hverandre',
        'En type maskinvare',
        'En programmeringsfeil',
        'En nettleser',
      ],
      explanation: 'Et API (Application Programming Interface) er et sett av regler og protokoller som lar ulike programmer kommunisere med hverandre.',
    },
    {
      question: 'Hvilken HTTP-metode brukes for å hente (lese) data fra et REST API?',
      options: ['GET', 'POST', 'PUT', 'DELETE'],
      explanation: 'GET brukes for å hente (lese) data, POST for å opprette, PUT for å oppdatere og DELETE for å slette.',
    },
    {
      question: 'Hva er JSON i API-sammenheng?',
      options: [
        'Et tekstbasert dataformat som er standard for å utveksle data mellom programmer',
        'En type maskinvare',
        'Et programmeringsspråk',
        'En feilmelding',
      ],
      explanation: 'JSON (JavaScript Object Notation) er et tekstbasert dataformat som er lett å lese og er standard for de fleste moderne API-er.',
    },
    {
      question: 'Hva er et API-endepunkt?',
      options: [
        'En spesifikk URL som utfører en bestemt funksjon i API-et',
        'En feil i nettverket',
        'En type variabel',
        'Et passord',
      ],
      explanation: 'Et endepunkt (endpoint) er en spesifikk URL i et API som utfører en bestemt funksjon, for eksempel GET /users/123 for å hente en bruker.',
    },
    {
      question: 'Hvorfor bruker mange API-er API-nøkler?',
      options: [
        'For å sikre at bare autoriserte brukere får tilgang og hindre misbruk',
        'For å gjøre dataene større',
        'For å sortere resultatene',
        'For å fjerne behovet for HTTP',
      ],
      explanation: 'API-nøkler brukes for å autentisere brukere, hindre misbruk (for mange forespørsler) og spore bruk, slik at bare autoriserte får tilgang.',
    },
  ],
  'it-2-4-2': [
    {
      question: 'Hvilket Python-bibliotek brukes vanligvis for å sende HTTP-forespørsler?',
      options: ['requests', 'pandas', 'matplotlib', 'numpy'],
      explanation: 'requests-biblioteket gjør det enkelt å sende HTTP-forespørsler og motta svar i Python. Det må installeres med pip install requests.',
    },
    {
      question: 'Hvilken HTTP-statuskode betyr at forespørselen var vellykket?',
      options: ['200 OK', '404 Not Found', '500 Internal Server Error', '403 Forbidden'],
      explanation: 'Statuskode 200 OK betyr at forespørselen var vellykket. Koder i 2xx-serien indikerer suksess.',
    },
    {
      question: 'Hva betyr statuskode 404?',
      options: [
        'Not Found – ressursen ble ikke funnet',
        'OK – alt gikk bra',
        'Created – en ny ressurs ble opprettet',
        'Forbidden – ingen tilgang',
      ],
      explanation: 'Statuskode 404 betyr Not Found – ressursen ble ikke funnet. Det er en klientfeil (4xx-serien).',
    },
    {
      question: 'Hva blir en JSON-liste konvertert til i Python?',
      options: ['En list', 'En dictionary', 'En streng', 'Et heltall'],
      explanation: 'Når JSON konverteres til Python, blir en JSON-liste til en Python list, og et JSON-objekt blir til en Python dictionary.',
    },
    {
      question: 'Hva er query-parametre i en API-forespørsel?',
      options: [
        'Tilleggsinformasjon i URL-en som filtrerer eller tilpasser dataene man får tilbake',
        'En type feilmelding',
        'Et passord til serveren',
        'Navnet på serveren',
      ],
      explanation: 'Query-parametre er tilleggsinformasjon i URL-en (etter ?) som lar deg filtrere eller tilpasse dataene, for eksempel ?q=python&limit=10.',
    },
  ],
  'it-2-4-3': [
    {
      question: 'Hva betyr parsing av JSON?',
      options: [
        'Å lese og tolke JSON-data til Python-objekter',
        'Å konvertere Python-objekter til JSON-tekst',
        'Å slette JSON-data',
        'Å kryptere JSON',
      ],
      explanation: 'Parsing betyr å lese og tolke data fra et format (som JSON) til Python-objekter som dictionaries og lister.',
    },
    {
      question: 'Hvilken Python-funksjon konverterer en JSON-streng til et Python-objekt?',
      options: ['json.loads()', 'json.dumps()', 'json.read()', 'json.write()'],
      explanation: 'json.loads() parser en JSON-streng til et Python-objekt, mens json.dumps() serialiserer et Python-objekt til en JSON-streng.',
    },
    {
      question: 'Hva betyr serialisering?',
      options: [
        'Å konvertere Python-objekter til et tekstformat som JSON',
        'Å lese JSON til Python-objekter',
        'Å sortere data',
        'Å sende data over nettverk',
      ],
      explanation: 'Serialisering betyr å konvertere Python-objekter til et tekstformat (som JSON) – det motsatte av parsing.',
    },
    {
      question: 'Hva er en fordel JSON har framfor XML?',
      options: [
        'JSON er mer kompakt og mapper naturlig til Python-objekter',
        'XML kan ikke lese tall',
        'JSON støtter ikke nesting',
        'XML er alltid raskere å parse',
      ],
      explanation: 'JSON er enklere og mer kompakt, lettere å lese og mapper naturlig til Python-objekter (dict og list), og er standard for moderne web-API-er.',
    },
    {
      question: 'Hvilken modul brukes for å parse XML i Python?',
      options: [
        'xml.etree.ElementTree',
        'json',
        'pandas',
        'requests',
      ],
      explanation: 'Python har en innebygd modul for XML: xml.etree.ElementTree, som lar deg parse og navigere i XML-data.',
    },
  ],
  'it-2-4-4': [
    {
      question: 'Hva er Flask?',
      options: [
        'Et lettvekts Python-rammeverk for webutvikling',
        'En database',
        'En nettleser',
        'Et operativsystem',
      ],
      explanation: 'Flask er et enkelt og populært Python-rammeverk for webutvikling, som lar deg lage REST API-er og webapplikasjoner.',
    },
    {
      question: 'Hva er en rute (route) i Flask?',
      options: [
        'En URL-sti som Flask lytter på, knyttet til en funksjon',
        'En type variabel',
        'En database-tabell',
        'En feilmelding',
      ],
      explanation: 'En rute (route) er en URL-sti som Flask lytter på. Når noen sender en forespørsel til ruten, kjøres den tilknyttede funksjonen.',
    },
    {
      question: 'Hvilken Flask-funksjon konverterer Python-data til en JSON-respons?',
      options: ['jsonify()', 'render_template()', 'request()', 'route()'],
      explanation: 'jsonify() er en Flask-funksjon som konverterer Python-data (som en dictionary) til en JSON-respons som API-et kan returnere.',
    },
    {
      question: 'Hvilken dekoratør brukes for å definere en rute i Flask?',
      options: ['@app.route(...)', '@app.json(...)', '@flask.path(...)', '@route.app(...)'],
      explanation: 'Dekoratøren @app.route(\'/sti\') definerer en rute i Flask og knytter en URL til funksjonen som følger under.',
    },
    {
      question: 'Hva står CRUD for i et API?',
      options: [
        'Create, Read, Update, Delete',
        'Connect, Run, Update, Download',
        'Copy, Read, Use, Delete',
        'Create, Render, Upload, Display',
      ],
      explanation: 'CRUD står for Create, Read, Update og Delete – de fire grunnleggende operasjonene som tilsvarer HTTP-metodene POST, GET, PUT og DELETE.',
    },
  ],
  'it-2-4-5': [
    {
      question: 'Hva er klient-server-modellen?',
      options: [
        'Klienten sender forespørsler, og serveren mottar dem og sender svar',
        'To servere som snakker med hverandre uten klient',
        'En modell der alt kjører på én datamaskin',
        'En type kryptering',
      ],
      explanation: 'I klient-server-modellen sender klienten (nettleser, app) forespørsler, og serveren (webserver, API-server) mottar dem og sender svar tilbake.',
    },
    {
      question: 'Hva kjennetegner TCP sammenlignet med UDP?',
      options: [
        'TCP er pålitelig og garanterer at data kommer fram i riktig rekkefølge',
        'TCP er alltid raskere og uten overhead',
        'TCP sjekker aldri for feil',
        'TCP brukes bare til videostrømming',
      ],
      explanation: 'TCP er pålitelig: det garanterer at data kommer fram, i riktig rekkefølge, med feilsjekking. Det gir mer overhead og er litt tregere enn UDP.',
    },
    {
      question: 'Hva er en socket?',
      options: [
        'Et endepunkt for nettverkskommunikasjon mellom applikasjonen og nettverket',
        'En type kabel',
        'En IP-adresse',
        'En database',
      ],
      explanation: 'En socket er et endepunkt for nettverkskommunikasjon – grensesnittet mellom applikasjonen din og nettverket.',
    },
    {
      question: 'Hva betyr adressen 127.0.0.1 (localhost)?',
      options: [
        'Din egen datamaskin',
        'En tilfeldig server på internett',
        'En offentlig nettside',
        'En MAC-adresse',
      ],
      explanation: '127.0.0.1, også kalt localhost, refererer til din egen datamaskin. Den brukes ofte til å teste applikasjoner lokalt.',
    },
    {
      question: 'Hvorfor er requests-biblioteket bedre enn rå sockets for HTTP?',
      options: [
        'Det håndterer HTTP-forespørsler automatisk, slik at man slipper å bygge og parse dem manuelt',
        'Det er tregere, men sikrere',
        'Det fungerer bare med UDP',
        'Det krever ingen internettforbindelse',
      ],
      explanation: 'Med rå sockets må man lage HTTP-forespørselen og parse svaret manuelt. requests-biblioteket gjør dette automatisk, noe som er mye enklere.',
    },
  ],
  'it-2-5-1': [
    {
      question: 'Hva er ER-modellering?',
      options: [
        'En metode for å visualisere datastrukturen før man lager databasen',
        'En måte å kryptere data på',
        'En sorteringsalgoritme',
        'En type nettverksprotokoll',
      ],
      explanation: 'ER-modellering (Entity-Relationship) er en metode for å visualisere datastrukturen i et system før man lager selve databasen, med entiteter og relasjoner.',
    },
    {
      question: 'Hva er en primærnøkkel (Primary Key)?',
      options: [
        'En unik identifikator for hver rad som ikke kan være NULL',
        'En kolonne som kan inneholde duplikater',
        'Et passord til databasen',
        'En spørring',
      ],
      explanation: 'En primærnøkkel er en unik identifikator for hver rad i en tabell. Den kan ikke være NULL og må være unik.',
    },
    {
      question: 'Hva er en fremmednøkkel (Foreign Key)?',
      options: [
        'Et attributt som refererer til primærnøkkelen i en annen tabell',
        'En nøkkel som er kryptert',
        'En kolonne uten data',
        'En type indeks',
      ],
      explanation: 'En fremmednøkkel er et attributt som refererer til primærnøkkelen i en annen tabell, og oppretter dermed en relasjon mellom tabellene.',
    },
    {
      question: 'Hva er hovedmålet med normalisering?',
      options: [
        'Å minimere redundans og sikre dataintegritet',
        'Å gjøre databasen så stor som mulig',
        'Å kryptere all data',
        'Å fjerne alle relasjoner',
      ],
      explanation: 'Normalisering organiserer data for å minimere redundans (unødvendige duplikater), sikre dataintegritet og gjøre databasen enklere å vedlikeholde.',
    },
    {
      question: 'Hva er en entitet i ER-modellering?',
      options: [
        'Et objekt vi ønsker å lagre informasjon om, som blir til en tabell',
        'En relasjon mellom tabeller',
        'En primærnøkkel',
        'En spørring',
      ],
      explanation: 'En entitet er et objekt eller konsept vi ønsker å lagre informasjon om. Entiteter blir til tabeller i den ferdige databasen.',
    },
  ],
  'it-2-5-2': [
    {
      question: 'Hva gjør en JOIN i SQL?',
      options: [
        'Kombinerer rader fra to eller flere tabeller basert på en relatert kolonne',
        'Sletter en tabell',
        'Sorterer en enkelt tabell',
        'Lager en ny database',
      ],
      explanation: 'En JOIN kombinerer rader fra to eller flere tabeller basert på en relatert kolonne, slik at man kan hente sammenhengende data på tvers av tabeller.',
    },
    {
      question: 'Hva returnerer en INNER JOIN?',
      options: [
        'Bare rader med matchende verdier i begge tabeller',
        'Alle rader fra venstre tabell',
        'Alle rader fra begge tabeller uansett match',
        'Bare den første raden',
      ],
      explanation: 'INNER JOIN returnerer bare rader der det finnes matchende verdier i begge tabellene.',
    },
    {
      question: 'Hva brukes GROUP BY til?',
      options: [
        'Å gruppere rader slik at aggregatfunksjoner kan brukes på hver gruppe',
        'Å slette grupper av rader',
        'Å koble to tabeller',
        'Å sortere alfabetisk',
      ],
      explanation: 'GROUP BY grupperer rader, slik at aggregatfunksjoner som COUNT(), SUM() og AVG() kan beregnes for hver gruppe.',
    },
    {
      question: 'Hva er en subquery (underspørring)?',
      options: [
        'En SQL-spørring inne i en annen SQL-spørring',
        'En spørring som sletter data',
        'En type indeks',
        'En tabell uten data',
      ],
      explanation: 'En subquery er en SQL-spørring inne i en annen spørring. Den brukes ofte når du trenger resultatet av én spørring som input til en annen.',
    },
    {
      question: 'Hva er en view i SQL?',
      options: [
        'En lagret spørring som oppfører seg som en tabell, men ikke lagrer data selv',
        'En sikkerhetskopi av databasen',
        'En type primærnøkkel',
        'En indeks',
      ],
      explanation: 'En view er en lagret SQL-spørring som oppfører seg som en tabell. Den lagrer ikke data selv, men gir en gjenbrukbar, «ferdig» spørring.',
    },
  ],
  'it-2-5-3': [
    {
      question: 'Hvilken Python-modul brukes for å jobbe med SQLite-databaser?',
      options: ['sqlite3', 'mysql', 'database', 'sqlpy'],
      explanation: 'Python har innebygd støtte for SQLite gjennom sqlite3-modulen, som er perfekt for lokale applikasjoner.',
    },
    {
      question: 'Hva gjør commit() i en SQLite-tilkobling?',
      options: [
        'Lagrer endringene permanent til databasen',
        'Sletter databasen',
        'Åpner en ny tilkobling',
        'Sorterer dataene',
      ],
      explanation: 'commit() lagrer endringene (INSERT, UPDATE, DELETE) permanent til databasen. Uten commit() blir ikke endringene lagret.',
    },
    {
      question: 'Hvordan unngår man SQL injection ved innsetting av brukerdata?',
      options: [
        'Bruke parameteriserte spørringer med plassholdere (?), ikke streng-sammenslåing',
        'Bygge spørringen ved å sette sammen strenger med brukerinput',
        'Aldri bruke WHERE',
        'Lagre alt i klartekst',
      ],
      explanation: 'For å unngå SQL injection bruker man parameteriserte spørringer med plassholdere (?), slik at brukerinput aldri tolkes som SQL-kode.',
    },
    {
      question: 'Hva er en cursor i sqlite3?',
      options: [
        'Et objekt som utfører SQL-kommandoer og henter resultater',
        'En primærnøkkel',
        'En type indeks',
        'En sikkerhetskopi',
      ],
      explanation: 'En cursor er et objekt som utfører SQL-kommandoer og henter resultatene fra databasen.',
    },
    {
      question: 'Hvorfor er SQL injection farlig?',
      options: [
        'En angriper kan injisere SQL-kode gjennom brukerinput og manipulere databasen',
        'Det gjør databasen tregere',
        'Det fjerner alle indekser',
        'Det er bare et estetisk problem',
      ],
      explanation: 'SQL injection er en av de farligste sårbarhetene: en angriper kan injisere SQL-kode gjennom brukerinput og dermed lese, endre eller slette data uautorisert.',
    },
  ],
  'it-2-5-4': [
    {
      question: 'Hva står NoSQL for?',
      options: [
        'Not Only SQL',
        'No Standard Query Language',
        'New SQL',
        'Network SQL',
      ],
      explanation: 'NoSQL står for «Not Only SQL» og er et samlebegrep for databaser som ikke følger den tradisjonelle relasjonsdatabasemodellen.',
    },
    {
      question: 'Hvordan lagrer en dokumentdatabase data?',
      options: [
        'Som dokumenter, vanligvis i JSON eller BSON',
        'Bare i tabeller med rader og kolonner',
        'Bare som ren tekst',
        'Bare som tall',
      ],
      explanation: 'En dokumentdatabase lagrer data som dokumenter, vanligvis i JSON eller BSON. MongoDB er den mest populære dokumentdatabasen.',
    },
    {
      question: 'Hva tilsvarer en SQL-tabell i MongoDB?',
      options: ['En collection', 'En document', 'En key', 'En query'],
      explanation: 'I MongoDB tilsvarer en SQL-tabell en collection, en rad tilsvarer et document, og en database er fortsatt en database.',
    },
    {
      question: 'Når er det best å bruke en SQL-relasjonsdatabase?',
      options: [
        'Når dataene har klare relasjoner og krever sterk dataintegritet',
        'Når man aldri trenger relasjoner',
        'Bare for bildelagring',
        'Bare for små tekstfiler',
      ],
      explanation: 'SQL-relasjonsdatabaser passer best når dataene har klare relasjoner (kunder, ordrer, produkter) og man trenger sterk dataintegritet og strukturerte spørringer.',
    },
    {
      question: 'Hva er Redis et eksempel på?',
      options: [
        'En nøkkel-verdi-database',
        'En relasjonsdatabase',
        'En dokumentdatabase',
        'Et programmeringsspråk',
      ],
      explanation: 'Redis er et eksempel på en nøkkel-verdi-database – den enkleste formen for NoSQL, som fungerer som en gigantisk dictionary.',
    },
  ],
  'it-2-5-5': [
    {
      question: 'Hva er et eksempel på en mange-til-mange-relasjon?',
      options: [
        'Studenter og kurs – én student tar mange kurs, og ett kurs har mange studenter',
        'Én person har bare ett fødselsnummer',
        'Én klasse har mange elever, men hver elev har bare én klasse',
        'En tabell uten relasjoner',
      ],
      explanation: 'En mange-til-mange-relasjon er for eksempel studenter og kurs: én student kan ta mange kurs, og ett kurs kan ha mange studenter.',
    },
    {
      question: 'Hvordan implementeres en mange-til-mange-relasjon i en relasjonsdatabase?',
      options: [
        'Med en koblingstabell (junction table)',
        'Med én enkelt kolonne',
        'Ved å fjerne alle nøkler',
        'Med en indeks',
      ],
      explanation: 'En mange-til-mange-relasjon implementeres med en koblingstabell (junction table) som inneholder fremmednøkler til begge de relaterte tabellene.',
    },
    {
      question: 'Hva er en assosiativ entitet?',
      options: [
        'En koblingstabell som også har egne attributter, som karakter i StudentKurs',
        'En tabell uten nøkler',
        'En type indeks',
        'En sikkerhetskopi',
      ],
      explanation: 'En assosiativ entitet er en koblingstabell som i tillegg har egne attributter, for eksempel kan StudentKurs ha attributtet karakter.',
    },
    {
      question: 'Hva er et eksempel på en rekursiv (selvrefererende) relasjon?',
      options: [
        'Et organisasjonshierarki der en ansatt har en leder som også er en ansatt',
        'To helt uavhengige tabeller',
        'En tabell med bare én rad',
        'En relasjon mellom to ulike databaser',
      ],
      explanation: 'En rekursiv relasjon oppstår når en entitet refererer til seg selv, for eksempel et organisasjonshierarki der en ansatt har en leder som også er en ansatt.',
    },
    {
      question: 'Hva er en god første beste praksis ved databasedesign?',
      options: [
        'Starte med et ER-diagram før man skriver SQL',
        'Skrive all SQL før man tenker på struktur',
        'Unngå normalisering',
        'Lagre alt i én tabell',
      ],
      explanation: 'En god beste praksis er å starte med et ER-diagram: identifisere entiteter, tegne relasjoner og normalisere til 3NF før man skriver SQL.',
    },
  ],
  'it-2-6-1': [
    {
      question: 'Hva er frontend i en webapplikasjon?',
      options: [
        'Delen brukeren ser og samhandler med i nettleseren',
        'Serversiden som håndterer logikk og data',
        'Databasen',
        'Nettverkskabelen',
      ],
      explanation: 'Frontend er delen av en webapplikasjon som brukeren ser og samhandler med i nettleseren – HTML, CSS og JavaScript.',
    },
    {
      question: 'Hva er backend?',
      options: [
        'Serverside-delen som håndterer logikk, data og sikkerhet',
        'Det brukeren ser i nettleseren',
        'En type CSS',
        'En nettleserutvidelse',
      ],
      explanation: 'Backend er serverside-delen av en applikasjon som håndterer logikk, data og sikkerhet.',
    },
    {
      question: 'Hva er en SPA (Single Page Application)?',
      options: [
        'En webapplikasjon som laster én gang og oppdaterer innhold dynamisk uten full sidelasting',
        'En side som lastes på nytt ved hvert klikk',
        'En type database',
        'En nettverksprotokoll',
      ],
      explanation: 'En SPA (Single Page Application) laster siden én gang og oppdaterer innholdet dynamisk uten full sidelasting.',
    },
    {
      question: 'Hva er npm?',
      options: [
        'Node Package Manager – verktøy for å installere og håndtere JavaScript-biblioteker',
        'En nettleser',
        'Et operativsystem',
        'Et CSS-rammeverk',
      ],
      explanation: 'npm (Node Package Manager) er verktøyet for å installere og håndtere JavaScript-biblioteker.',
    },
    {
      question: 'Hva inneholder filen package.json?',
      options: [
        'Oversikt over npm-avhengighetene i et JavaScript-prosjekt',
        'All HTML-koden',
        'Bildefilene',
        'Databasen',
      ],
      explanation: 'package.json holder oversikt over npm-avhengighetene (bibliotekene) som et JavaScript-prosjekt bruker.',
    },
  ],
  'it-2-6-2': [
    {
      question: 'Hva er DOM?',
      options: [
        'Document Object Model – en trestruktur som representerer HTML-dokumentet',
        'En database',
        'En nettverksprotokoll',
        'En CSS-fil',
      ],
      explanation: 'DOM (Document Object Model) er en trestruktur som representerer HTML-dokumentet, og som JavaScript kan manipulere.',
    },
    {
      question: 'Hva er Fetch API?',
      options: [
        'Et moderne JavaScript-API for å gjøre HTTP-forespørsler',
        'En metode for å sortere lister',
        'En type CSS-selektor',
        'En database',
      ],
      explanation: 'Fetch API er et moderne JavaScript-API for å gjøre HTTP-forespørsler, for eksempel for å hente data fra en server.',
    },
    {
      question: 'Hva representerer et Promise i JavaScript?',
      options: [
        'En asynkron operasjon som vil fullføres senere',
        'En synkron beregning',
        'En CSS-regel',
        'En HTML-tag',
      ],
      explanation: 'Et Promise er et JavaScript-objekt som representerer en asynkron operasjon – et resultat som vil bli tilgjengelig senere.',
    },
    {
      question: 'Hva gjør preventDefault()?',
      options: [
        'Hindrer standardoppførselen til en hendelse, som at et skjema laster siden på nytt',
        'Sender skjemaet umiddelbart',
        'Sletter et element',
        'Endrer fargen',
      ],
      explanation: 'preventDefault() hindrer standardoppførselen til en hendelse, for eksempel at et skjema laster siden på nytt når det sendes inn.',
    },
    {
      question: 'Hva gjør async/await i JavaScript?',
      options: [
        'Gjør asynkron kode lettere å lese og skrive',
        'Gjør koden synkron og blokkerende',
        'Sorterer arrays',
        'Lager nye HTML-elementer',
      ],
      explanation: 'async/await er moderne syntaks som gjør asynkron kode lettere å lese og skrive, ved at man kan vente på et Promise med await.',
    },
  ],
  'it-2-6-3': [
    {
      question: 'Hva er Flask?',
      options: [
        'Et lettvekts Python-rammeverk for webutvikling',
        'En JavaScript-database',
        'Et CSS-rammeverk',
        'En nettleser',
      ],
      explanation: 'Flask er et lettvekts Python-rammeverk for webutvikling, perfekt for å lære backend-utvikling.',
    },
    {
      question: 'Hva er Jinja2?',
      options: [
        'Template-motoren i Flask som genererer dynamisk HTML',
        'En database',
        'Et JavaScript-bibliotek',
        'En CSS-modul',
      ],
      explanation: 'Jinja2 er template-motoren i Flask som genererer dynamisk HTML, med støtte for variabler, løkker og betingelser.',
    },
    {
      question: 'Hva er en session i Flask?',
      options: [
        'En mekanisme for å lagre brukerdata mellom HTTP-forespørsler',
        'En type databasetabell',
        'En CSS-regel',
        'En feilmelding',
      ],
      explanation: 'En session er en mekanisme for å lagre brukerdata mellom HTTP-forespørsler, for eksempel om en bruker er innlogget.',
    },
    {
      question: 'Hvilken Flask-funksjon genererer HTML fra en Jinja2-template?',
      options: ['render_template', 'jsonify', 'request', 'route'],
      explanation: 'render_template() genererer HTML fra en Jinja2-template og sender resultatet til nettleseren.',
    },
    {
      question: 'Hva inneholder Flask-objektet request?',
      options: [
        'Data fra HTTP-forespørselen, som skjemadata og parametere',
        'Hele databasen',
        'CSS-stiler',
        'Bildefiler',
      ],
      explanation: 'request-objektet inneholder data fra HTTP-forespørselen, som skjemadata, query-parametere og innsendte verdier.',
    },
  ],
  'it-2-6-4': [
    {
      question: 'Hva er et REST API?',
      options: [
        'En arkitekturstil basert på ressurser, HTTP-metoder og statuskoder',
        'En type database',
        'En CSS-modul',
        'Et programmeringsspråk',
      ],
      explanation: 'REST (Representational State Transfer) er en arkitekturstil for API-er basert på ressurser identifisert med URL-er, HTTP-metoder og statuskoder.',
    },
    {
      question: 'Hva er CORS?',
      options: [
        'Cross-Origin Resource Sharing – en sikkerhetsfunksjon som kontrollerer API-tilgang på tvers av domener',
        'En sorteringsalgoritme',
        'En type database',
        'Et programmeringsspråk',
      ],
      explanation: 'CORS (Cross-Origin Resource Sharing) er en sikkerhetsfunksjon i nettlesere som kontrollerer hvilke domener (origins) som får tilgang til et API.',
    },
    {
      question: 'Hva utgjør en origin?',
      options: [
        'Kombinasjonen av protokoll, domene og port, for eksempel http://localhost:3000',
        'Bare domenenavnet',
        'Bare portnummeret',
        'En IP-adresse alene',
      ],
      explanation: 'En origin er kombinasjonen av protokoll, domene og port, for eksempel http://localhost:3000. CORS sammenligner origins for å avgjøre tilgang.',
    },
    {
      question: 'Hva betyr at en operasjon er idempotent?',
      options: [
        'Den gir samme resultat uansett hvor mange ganger den kjøres',
        'Den kan bare kjøres én gang',
        'Den endrer alltid resultatet hver gang',
        'Den krasjer alltid',
      ],
      explanation: 'En idempotent operasjon gir samme resultat uansett hvor mange ganger den kjøres. GET, PUT og DELETE er idempotente; POST er det ikke.',
    },
    {
      question: 'Hva indikerer en HTTP-statuskode?',
      options: [
        'Resultatet av en HTTP-forespørsel',
        'Hastigheten på nettverket',
        'Størrelsen på dataene',
        'Antall brukere',
      ],
      explanation: 'En statuskode er et tresifret tall som indikerer resultatet av en HTTP-forespørsel, for eksempel 200 (OK), 404 (Not Found) eller 500 (serverfeil).',
    },
  ],
  'it-2-6-5': [
    {
      question: 'Hva er UX (User Experience)?',
      options: [
        'Hvordan brukere opplever og samhandler med et produkt',
        'Den fysiske maskinvaren',
        'En type database',
        'En nettverksprotokoll',
      ],
      explanation: 'UX (User Experience) er brukeropplevelsen – hvordan brukere opplever og samhandler med et produkt, ikke bare hvordan det ser ut.',
    },
    {
      question: 'Hva er heuristisk evaluering?',
      options: [
        'Eksperter evaluerer et brukergrensesnitt mot etablerte brukbarhetsprinsipper',
        'Brukere tester produktet i flere måneder',
        'En automatisk test av koden',
        'En type kryptering',
      ],
      explanation: 'Heuristisk evaluering er en metode der eksperter evaluerer et brukergrensesnitt mot etablerte brukbarhetsprinsipper (heuristikker), som Nielsens 10.',
    },
    {
      question: 'Hva står POUR for i WCAG?',
      options: [
        'Perceivable, Operable, Understandable, Robust',
        'Private, Open, Useful, Reliable',
        'Powerful, Online, Updated, Rapid',
        'Public, Original, Unique, Ready',
      ],
      explanation: 'POUR er de fire prinsippene i WCAG: Perceivable (mulig å oppfatte), Operable (betjenbar), Understandable (forståelig) og Robust.',
    },
    {
      question: 'Hva er A/B-testing?',
      options: [
        'Å sammenligne to versjoner av en funksjon for å se hvilken som presterer best',
        'Å teste koden to ganger',
        'En type kryptering',
        'Å sortere data',
      ],
      explanation: 'A/B-testing er å sammenligne to versjoner (A og B) av en funksjon med ekte brukere for å se hvilken som presterer best.',
    },
    {
      question: 'Hva er brukertesting?',
      options: [
        'Å observere ekte brukere mens de bruker produktet for å finne problemer',
        'Å teste koden automatisk',
        'Å bare lese kildekoden',
        'Å sjekke nettverkshastighet',
      ],
      explanation: 'Brukertesting innebærer å observere ekte brukere mens de bruker produktet, ofte mens de «tenker høyt», for å identifisere problemer.',
    },
  ],
  'it-2-7-1': [
    {
      question: 'Hva er OWASP Top 10?',
      options: [
        'En liste over de ti mest kritiske sikkerhetstruslene i webapplikasjoner',
        'En liste over de raskeste algoritmene',
        'De ti mest brukte programmeringsspråkene',
        'En liste over de beste databasene',
      ],
      explanation: 'OWASP Top 10 er en liste fra Open Web Application Security Project over de ti mest kritiske sikkerhetstruslene i webapplikasjoner.',
    },
    {
      question: 'Hvordan beregnes risiko i en risikovurdering?',
      options: [
        'Risiko = Sannsynlighet × Konsekvens',
        'Risiko = Sannsynlighet + Tid',
        'Risiko = Konsekvens − Sannsynlighet',
        'Risiko = Antall brukere × Pris',
      ],
      explanation: 'Risiko beregnes som Sannsynlighet × Konsekvens. Høy sannsynlighet og alvorlig konsekvens gir høyest risiko.',
    },
    {
      question: 'Hva er en trusselaktør?',
      options: [
        'En som forsøker å kompromittere sikkerheten i et system',
        'En vanlig bruker',
        'En sikkerhetskopi',
        'En programmeringsfeil',
      ],
      explanation: 'En trusselaktør er en som forsøker å kompromittere sikkerheten i et system, for eksempel script kiddies, hacktivister eller statlige aktører.',
    },
    {
      question: 'Hva er trusselmodellering?',
      options: [
        'En systematisk kartlegging av verdier, dataflyt og mulige angrep mot et system',
        'En metode for å gjøre koden raskere',
        'En type kryptering',
        'En sorteringsalgoritme',
      ],
      explanation: 'Trusselmodellering er en systematisk prosess der man kartlegger verdifulle ressurser, dataflyt og mulige angrep for å forstå og redusere risiko.',
    },
    {
      question: 'Hva kjennetegner en «script kiddie»?',
      options: [
        'En uerfaren angriper som bruker eksisterende verktøy uten dyp forståelse',
        'En statlig etterretningsorganisasjon',
        'En sikkerhetsforsker',
        'En systemadministrator',
      ],
      explanation: 'En script kiddie er en uerfaren angriper som bruker ferdige verktøy og skript laget av andre, uten dyp teknisk forståelse.',
    },
  ],
  'it-2-7-2': [
    {
      question: 'Hva er det viktigste prinsippet i sikker programmering?',
      options: [
        'Aldri stol på brukerinput',
        'Stol alltid på data fra brukeren',
        'Lagre alle passord i klartekst',
        'Vis detaljerte feilmeldinger til alle',
      ],
      explanation: 'Det viktigste prinsippet i sikker programmering er: Aldri stol på brukerinput. All data fra brukere må valideres og saneres.',
    },
    {
      question: 'Hvordan hindrer man SQL injection?',
      options: [
        'Bruke parameteriserte spørringer i stedet for å sette sammen strenger med brukerinput',
        'Vise SQL-feilmeldinger til brukeren',
        'Lagre data i klartekst',
        'Aldri bruke en database',
      ],
      explanation: 'SQL injection hindres ved å bruke parameteriserte spørringer, slik at brukerinput aldri tolkes som SQL-kode.',
    },
    {
      question: 'Hva er XSS (Cross-Site Scripting)?',
      options: [
        'Når en angriper injiserer skadelig JavaScript i en webside som andre brukere ser',
        'Når en database slettes',
        'Når nettverket går ned',
        'En type kryptering',
      ],
      explanation: 'XSS oppstår når en angriper kan injisere skadelig JavaScript i en webside som andre brukere deretter ser og kjører i nettleseren sin.',
    },
    {
      question: 'Hva er CSRF?',
      options: [
        'Et angrep der en ondsinnet side lurer nettleseren til å sende forespørsler til en side brukeren er innlogget på',
        'En måte å kryptere data på',
        'En sorteringsalgoritme',
        'En type database',
      ],
      explanation: 'CSRF (Cross-Site Request Forgery) er et angrep der en ondsinnet side lurer nettleseren til å sende forespørsler til en annen side der brukeren er innlogget.',
    },
    {
      question: 'Hvorfor bør feilmeldinger ikke avsløre sensitive detaljer?',
      options: [
        'Fordi detaljerte feilmeldinger kan gi angripere nyttig informasjon om systemet',
        'Fordi det gjør programmet tregere',
        'Fordi det bruker for mye minne',
        'Fordi brukere ikke kan lese',
      ],
      explanation: 'Detaljerte feilmeldinger kan avsløre informasjon om systemets oppbygging, databasestruktur eller filsti, som angripere kan utnytte.',
    },
  ],
  'it-2-7-3': [
    {
      question: 'Hva er regel nummer én for lagring av passord?',
      options: [
        'Aldri lagre passord i klartekst – hash dem alltid',
        'Lagre passord i klartekst for enkelhets skyld',
        'Lagre passord i en tekstfil',
        'Send passord via e-post',
      ],
      explanation: 'Regel nummer én er å aldri lagre passord i klartekst. Passord skal hashes (med f.eks. bcrypt) før de lagres i databasen.',
    },
    {
      question: 'Hva er forskjellen mellom HTTP og HTTPS?',
      options: [
        'HTTPS er kryptert med TLS/SSL, mens HTTP sender data i klartekst',
        'HTTP er kryptert, HTTPS er det ikke',
        'De er nøyaktig like',
        'HTTPS er bare for bilder',
      ],
      explanation: 'HTTPS krypterer kommunikasjonen med TLS/SSL, mens HTTP sender data i klartekst som kan avlyttes. HTTPS beskytter mot avlytting og manipulasjon.',
    },
    {
      question: 'Hva er en god egenskap ved en hash-funksjon for passord?',
      options: [
        'Den er enveis – du kan ikke regne deg tilbake til passordet fra hashen',
        'Den kan reverseres lett',
        'Den gir ulik hash for samme input hver gang uten salt',
        'Den lagrer passordet i klartekst',
      ],
      explanation: 'En hash-funksjon er enveis: du kan ikke regne deg tilbake til passordet fra hash-verdien. Det gjør hashing trygt for passordlagring.',
    },
    {
      question: 'Hva er OAuth 2.0?',
      options: [
        'En standard for å gi applikasjoner tilgang til brukerdata uten å dele passord',
        'En krypteringsalgoritme',
        'En type database',
        'Et programmeringsspråk',
      ],
      explanation: 'OAuth 2.0 er en standard for å gi applikasjoner tilgang til brukerdata uten å dele passord, slik som ved «Logg inn med Google».',
    },
    {
      question: 'Hva er en fordel med token-basert autentisering?',
      options: [
        'Serveren trenger ikke lagre sesjonsinformasjon for hver bruker',
        'Den er alltid usikker',
        'Den krever klartekstpassord',
        'Den fungerer bare lokalt',
      ],
      explanation: 'Token-basert autentisering lar serveren slippe å lagre sesjonsinformasjon for hver bruker, fordi tokenet selv bærer den nødvendige informasjonen.',
    },
  ],
  'it-2-7-4': [
    {
      question: 'Hva er personopplysninger?',
      options: [
        'All informasjon som kan knyttes til en identifiserbar person',
        'Bare offentlig informasjon',
        'Bare e-postadresser',
        'Bare data lagret på papir',
      ],
      explanation: 'Personopplysninger er all informasjon som kan knyttes til en identifiserbar person, både direkte (navn, fødselsnummer) og indirekte.',
    },
    {
      question: 'Hva betyr Privacy by Design?',
      options: [
        'Å bygge personvern inn i systemet fra starten, ikke legge det til etterpå',
        'Å vente med personvern til etter lansering',
        'Å samle inn så mye data som mulig',
        'Å ignorere personvern',
      ],
      explanation: 'Privacy by Design betyr å bygge personvern inn i systemet fra starten, ikke legge det til etterpå.',
    },
    {
      question: 'Hva må et gyldig samtykke under GDPR være?',
      options: [
        'Frivillig, spesifikt, informert og utvetydig',
        'Bare antydet',
        'Permanent og uigjenkallelig',
        'Gitt av en tredjepart',
      ],
      explanation: 'Et gyldig samtykke under GDPR må være frivillig, spesifikt (for hvert formål), informert og utvetydig.',
    },
    {
      question: 'Hva er «rett til innsyn» under GDPR?',
      options: [
        'Brukere kan be om en kopi av alle data du har om dem',
        'Brukere kan kreve at all data slettes for alltid',
        'Brukere kan se andres data',
        'Brukere kan endre serverens kode',
      ],
      explanation: 'Rett til innsyn betyr at brukere kan be om en kopi av alle personopplysninger du har lagret om dem.',
    },
    {
      question: 'Hva er prinsippet om dataminimering?',
      options: [
        'Man skal bare samle inn data man faktisk trenger',
        'Man skal samle inn så mye data som mulig',
        'All data skal lagres for alltid',
        'Data skal aldri slettes',
      ],
      explanation: 'Dataminimering betyr at man bare skal samle inn de personopplysningene man faktisk trenger til formålet, og ikke mer.',
    },
  ],
  'it-2-7-5': [
    {
      question: 'Hva er algoritmisk bias?',
      options: [
        'Når et datasystem systematisk produserer urettferdige resultater',
        'Når en algoritme kjører raskt',
        'Når koden har en syntaksfeil',
        'Når nettverket er tregt',
      ],
      explanation: 'Algoritmisk bias oppstår når et datasystem systematisk produserer urettferdige resultater, ofte fordi treningsdataene er skjeve.',
    },
    {
      question: 'Hva er et eksempel på algoritmisk bias?',
      options: [
        'Amazons AI-rekrutteringsverktøy som favoriserte menn på grunn av skjeve treningsdata',
        'En algoritme som sorterer tall raskt',
        'En database som lagrer mye data',
        'Et program som krasjer',
      ],
      explanation: 'Amazons AI-rekrutteringsverktøy (2018) lærte fra historiske data dominert av menn, og begynte å favorisere menn – et klassisk eksempel på algoritmisk bias.',
    },
    {
      question: 'Hva betyr åpen kildekode (open source)?',
      options: [
        'At kildekoden er fritt tilgjengelig for alle å se, bruke og modifisere',
        'At koden er kryptert og hemmelig',
        'At koden bare kan kjøres på én datamaskin',
        'At koden ikke kan endres',
      ],
      explanation: 'Åpen kildekode betyr at kildekoden er fritt tilgjengelig for alle å se, bruke og modifisere, noe som gir transparens og kunnskapsdeling.',
    },
    {
      question: 'Hva er en miljøutfordring knyttet til IT?',
      options: [
        'Datasentre bruker store mengder energi (1–2 % av verdens elektrisitet)',
        'IT bruker ingen energi',
        'Datamaskiner er alltid karbonnøytrale',
        'IT-sektoren har null miljøpåvirkning',
      ],
      explanation: 'IT-sektoren har betydelig miljøpåvirkning: datasentre bruker store mengder energi (anslått 1–2 % av verdens elektrisitet), og e-avfall er et voksende problem.',
    },
    {
      question: 'Hva er digital ulikhet (digital divide)?',
      options: [
        'Ulik tilgang til og evne til å bruke digital teknologi',
        'Forskjellen mellom to programmeringsspråk',
        'Skillet mellom maskinvare og programvare',
        'En type kryptering',
      ],
      explanation: 'Digital ulikhet (digital divide) refererer til ulik tilgang til og evne til å bruke digital teknologi, blant annet på grunn av økonomi, geografi eller kompetanse.',
    },
  ],
  'it-2-8-1': [
    {
      question: 'Hva er hovedforskjellen mellom fossefallsmodellen og agile metoder?',
      options: [
        'Fossefallsmodellen er sekvensiell, agile er iterativ',
        'Fossefallsmodellen bruker sprinter, agile bruker faser',
        'De er nøyaktig like',
        'Agile har ingen planlegging',
      ],
      explanation: 'Fossefallsmodellen er sekvensiell (faser fullføres i rekkefølge), mens agile er iterativ med korte, gjentakende sykluser og hyppige leveranser.',
    },
    {
      question: 'Hva kjennetegner fossefallsmodellen?',
      options: [
        'Faser som må fullføres i rekkefølge, fra kravspesifikasjon til vedlikehold',
        'Korte sprinter med hyppige leveranser',
        'Ingen planlegging på forhånd',
        'At man hopper mellom fasene fritt',
      ],
      explanation: 'Fossefallsmodellen er en sekvensiell tilnærming der prosjektet deles i faser (kravspesifikasjon, design, implementering, testing osv.) som fullføres i rekkefølge.',
    },
    {
      question: 'Hva er en fordel med agile metoder?',
      options: [
        'Man kan tilpasse seg endringer underveis og levere fungerende programvare ofte',
        'All planlegging gjøres ferdig før noe kode skrives',
        'Det er umulig å endre kravene',
        'Kunden involveres aldri',
      ],
      explanation: 'Agile metoder lar teamet tilpasse seg endringer underveis og levere fungerende programvare ofte, med hyppig tilbakemelding fra kunden.',
    },
    {
      question: 'I hvilken fase i fossefallsmodellen samles kravene inn?',
      options: [
        'Kravspesifikasjon (første fase)',
        'Testing',
        'Vedlikehold',
        'Implementering',
      ],
      explanation: 'I fossefallsmodellen samles kravene inn i den første fasen, kravspesifikasjon, før design og implementering.',
    },
    {
      question: 'Hvorfor passer agile godt for prosjekter med usikre eller skiftende krav?',
      options: [
        'Fordi man kan justere planen mellom hver iterasjon basert på tilbakemeldinger',
        'Fordi kravene aldri kan endres',
        'Fordi man unngår å snakke med kunden',
        'Fordi alt leveres til slutt',
      ],
      explanation: 'Agile passer for usikre krav fordi man jobber i korte iterasjoner og kan justere planen mellom hver, basert på tilbakemeldinger og ny innsikt.',
    },
  ],
  'it-2-8-2': [
    {
      question: 'Hva er hovedformålet med enhetstester (unit tests)?',
      options: [
        'Å teste én enkelt funksjon isolert',
        'Å teste hele systemet fra brukerens perspektiv',
        'Å teste nettverkshastigheten',
        'Å designe brukergrensesnittet',
      ],
      explanation: 'Enhetstester (unit tests) tester én enkelt funksjon eller komponent isolert, for å verifisere at den fungerer riktig på egen hånd.',
    },
    {
      question: 'Hvordan er testpyramiden balansert?',
      options: [
        'Mange enhetstester nederst, færre integrasjonstester i midten og få E2E-tester øverst',
        'Flest E2E-tester øverst og få enhetstester',
        'Bare integrasjonstester',
        'Like mange av hver type',
      ],
      explanation: 'Testpyramiden anbefaler mange raske enhetstester nederst, færre integrasjonstester i midten og få (men viktige) E2E-tester øverst.',
    },
    {
      question: 'Hva står TDD for?',
      options: [
        'Test-Driven Development',
        'Type Definition Document',
        'Total Data Design',
        'Technical Debug Driver',
      ],
      explanation: 'TDD står for Test-Driven Development, der man skriver testen først (som feiler), deretter koden som får testen til å passere.',
    },
    {
      question: 'Hva er rekkefølgen i TDD-syklusen?',
      options: [
        'Red (skriv test som feiler), Green (få den til å passere), Refactor (forbedre koden)',
        'Green, Red, Delete',
        'Refactor, Red, Green',
        'Skriv all kode først, test sist',
      ],
      explanation: 'TDD følger Red-Green-Refactor: først skriver man en test som feiler (Red), deretter kode som får den til å passere (Green), og til slutt forbedrer man koden (Refactor).',
    },
    {
      question: 'Hva tester en integrasjonstest?',
      options: [
        'Samspillet mellom flere komponenter, for eksempel database og backend',
        'Bare én funksjon isolert',
        'Bare brukergrensesnittets farger',
        'Nettverkskabelen',
      ],
      explanation: 'En integrasjonstest tester samspillet mellom flere komponenter, for eksempel om backend og database fungerer riktig sammen.',
    },
  ],
  'it-2-8-3': [
    {
      question: 'Hva er formålet med en feature branch?',
      options: [
        'Å jobbe på ny funksjonalitet isolert fra main',
        'Å publisere nye versjoner til produksjon',
        'Å slette hele prosjektet',
        'Å lagre passord',
      ],
      explanation: 'En feature branch lar deg jobbe på ny funksjonalitet isolert fra main-branchen, slik at hovedkoden ikke påvirkes før funksjonen er ferdig.',
    },
    {
      question: 'Hva er en merge conflict?',
      options: [
        'Når to utviklere har endret samme del av en fil, og Git ikke kan slå sammen automatisk',
        'Når en branch slettes',
        'Når et program krasjer',
        'Når nettverket er tregt',
      ],
      explanation: 'En merge conflict oppstår når to utviklere har endret samme del av en fil. Git kan ikke avgjøre hvilken endring som skal beholdes, så konflikten må løses manuelt.',
    },
    {
      question: 'Hva gjør git pull?',
      options: [
        'Henter de nyeste endringene fra fjernlageret (remote) og fletter dem inn',
        'Sletter lokale endringer',
        'Lager en ny branch',
        'Krypterer koden',
      ],
      explanation: 'git pull henter de nyeste endringene fra fjernlageret (remote) og fletter dem inn i den lokale branchen din.',
    },
    {
      question: 'Hva er en commit i Git?',
      options: [
        'Et lagringspunkt – et øyeblikksbilde av endringene på et bestemt tidspunkt',
        'En måte å slette filer permanent',
        'En type branch',
        'En feilmelding',
      ],
      explanation: 'En commit er et lagringspunkt i Git – et øyeblikksbilde av endringene på et bestemt tidspunkt, med en melding som beskriver hva som ble endret.',
    },
    {
      question: 'Hvorfor er det lurt å oppdatere main med git pull før man lager en feature branch?',
      options: [
        'For å starte fra den nyeste versjonen av koden',
        'For å slette andres arbeid',
        'For å gjøre koden tregere',
        'Det har ingen betydning',
      ],
      explanation: 'Ved å oppdatere main med git pull først starter feature branchen fra den nyeste koden, noe som reduserer risikoen for merge conflicts senere.',
    },
  ],
  'it-2-8-4': [
    {
      question: 'Hva er hovedformålet med docstrings?',
      options: [
        'Å dokumentere hva funksjoner, klasser og moduler gjør',
        'Å forklare hver eneste linje kode',
        'Å gjøre koden lengre',
        'Å erstatte variabelnavn',
      ],
      explanation: 'Docstrings dokumenterer hva funksjoner, klasser og moduler gjør, slik at andre (og du selv senere) forstår koden uten å lese all implementasjonen.',
    },
    {
      question: 'Hva bør en god inline-kommentar forklare?',
      options: [
        'Hvorfor noe gjøres, ikke det åpenbare hva',
        'Hva hver linje gjør, selv det åpenbare',
        'Bare programmererens navn',
        'Ingenting – kommentarer er unødvendige',
      ],
      explanation: 'En god inline-kommentar forklarer hvorfor noe gjøres, ikke det åpenbare hva (som «øk x med 1»), siden hva-et ofte fremgår av koden selv.',
    },
    {
      question: 'Hva er refaktorering?',
      options: [
        'Å forbedre strukturen i koden uten å endre hva den gjør',
        'Å legge til ny funksjonalitet',
        'Å slette all dokumentasjon',
        'Å bytte programmeringsspråk',
      ],
      explanation: 'Refaktorering er å forbedre strukturen og lesbarheten i koden uten å endre hva den faktisk gjør (oppførselen).',
    },
    {
      question: 'Hvorfor er god dokumentasjon viktig for vedlikehold?',
      options: [
        'Fordi kode leses langt oftere enn den skrives, og godt dokumentert kode er lettere å forstå senere',
        'Fordi det gjør koden raskere',
        'Fordi det krypterer koden',
        'Fordi det fjerner behovet for testing',
      ],
      explanation: 'God dokumentasjon er viktig fordi kode leses langt oftere enn den skrives. Godt dokumentert kode gjør det lettere for andre – og deg selv senere – å forstå og vedlikeholde den.',
    },
    {
      question: 'Hva kjennetegner dårlig dokumentert kode?',
      options: [
        'Uklare parameternavn og kommentarer som ikke forklarer hensikten',
        'Tydelige docstrings og forklarende kommentarer',
        'Beskrivende variabelnavn',
        'Konsekvent struktur',
      ],
      explanation: 'Dårlig dokumentert kode har uklare parameternavn (som a, b, c) og kommentarer som ikke forklarer hensikten, noe som gjør koden vanskelig å forstå.',
    },
  ],
  'it-2-8-5': [
    {
      question: 'Hva står MoSCoW for i kravspesifikasjon?',
      options: [
        'Must, Should, Could, Won\'t',
        'Most, Should, Could, Won\'t',
        'Maybe, Should, Could, Would',
        'Must, Shall, Can, Will',
      ],
      explanation: 'MoSCoW står for Must have, Should have, Could have og Won\'t have – en metode for å prioritere krav etter viktighet.',
    },
    {
      question: 'Hva kjennetegner en god prosjektidé til et avsluttende prosjekt?',
      options: [
        'Den løser et reelt problem og har passe omfang',
        'Den er så stor at den aldri kan fullføres',
        'Den krever ingen planlegging',
        'Den demonstrerer ingen kompetansemål',
      ],
      explanation: 'En god prosjektidé løser et reelt problem, har passe omfang (2–6 ukers arbeid) og lar deg demonstrere flere kompetansemål.',
    },
    {
      question: 'Hva er en «Must have» i MoSCoW-prioritering?',
      options: [
        'En funksjon som er helt nødvendig for at produktet skal fungere',
        'En funksjon som er fin å ha, men ikke nødvendig',
        'En funksjon som ikke skal med i denne versjonen',
        'En funksjon ingen trenger',
      ],
      explanation: 'En «Must have» er en funksjon som er helt nødvendig for at produktet skal fungere og levere kjerneverdien sin.',
    },
    {
      question: 'Hvorfor er det viktig å avgrense omfanget i et avsluttende prosjekt?',
      options: [
        'For at prosjektet skal være gjennomførbart innenfor tiden man har',
        'For å gjøre prosjektet umulig',
        'For å unngå å lære noe',
        'Det er ikke viktig',
      ],
      explanation: 'Å avgrense omfanget sikrer at prosjektet er gjennomførbart innenfor tilgjengelig tid, slik at man rekker å fullføre kjernen før man legger til ekstra.',
    },
    {
      question: 'Hva er en naturlig avsluttende fase i et IT-prosjekt?',
      options: [
        'Presentasjon og dokumentasjon av det ferdige produktet',
        'Å starte et helt nytt prosjekt',
        'Å slette all koden',
        'Å ignorere tilbakemeldinger',
      ],
      explanation: 'En naturlig avsluttende fase er å presentere og dokumentere det ferdige produktet, der man viser fram resultatet og reflekterer over prosessen.',
    },
  ],
};

export default quizData_it_2;
