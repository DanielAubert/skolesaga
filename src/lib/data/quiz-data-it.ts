import type { QuizQuestion } from './quiz-data';

const quizData_it: Record<string, QuizQuestion[]> = {
  'it-1-1': [
  {
    question: 'Hva er digitalisering?',
    options: ['Prosessen med å bruke digital teknologi til a endre prosesser og skape nye verdier', 'A skanne papirdokumenter til PDF', 'A kjøpe nye datamaskiner til bedriften', 'A lage en konto påsosiale medier'],
    explanation: 'Digitalisering handler om a utnytte digital teknologi til a transformere forretningsmodeller, prosesser og tjenester - ikke bare å gjøre analoge ting digitale.',
  },
  {
    question: 'Hvilken kompetanse handler om evnen til a føreta gode valg i digitale sammenhenger?',
    options: ['Digital dømmekraft', 'Tekniske ferdigheter', 'Informasjonskompetanse', 'Produksjonskompetanse'],
    explanation: 'Digital dømmekraft innebærer a vurdere troverdighet av informasjon, forstå konsekvenser av digital deling, og handle etisk ansvårlig pånett.',
  },
  {
    question: 'Hva menes med digitalt utenforskap?',
    options: ['At grupper faller utenfor fordi de ikke mestrer digitale verktoy samfunnet forutsetter', 'A bli blokkert påsosiale medier', 'A ikke ha rad til internett', 'A velge a ikke bruke teknologi'],
    explanation: 'Digitalt utenforskap oppstar nårpersoner eller grupper ikke har tilgang til eller kompetanse i å bruke digital teknologi som samfunnet forventer.',
  },
  {
    question: 'Hvilket område har IKKE blitt påvirket av digitaliseringen?',
    options: ['Alle områder har blitt påvirket av digitaliseringen', 'Arbeidsliv', 'Utdanning', 'Helsevesen'],
    explanation: 'Digitaliseringen har påvirket nesten alle områder av samfunnet, inkludert arbeidsliv, utdanning, helse og demokrati.',
  },
  {
    question: 'Hva er et eksempel pådigital transformasjon i banktjenester?',
    options: ['Nettbank og Vipps som gjør banktjenester tilgjengelige 24/7', 'A ha kontanter i lommeboken', 'A besoke bankfilialen for a sjekke saldo', 'A sende brev til banken'],
    explanation: 'Digital transformasjon i bank betyr at tjenester som tidligere krevde fysisk oppmate na kan gjøres digitalt nårsom helst.',
  },
],


  'it-1-2': [
  {
    question: 'Hvilken datatype har verdien 3.14 i Python?',
    options: ['float', 'int', 'str', 'bool'],
    explanation: 'Desimaltall lagres som float (flyttall) i Python. Int er for heltall, str for tekst og bool for True/False.',
  },
  {
    question: 'Hva er forskjellen mellom = og == i Python?',
    options: ['= brukes for tilordning, == brukes for sammenligning', '= og == er det samme', '= brukes for sammenligning, == for tilordning', '== brukes bare i loekker'],
    explanation: 'Enkelt likhetstegn (=) tilordner en verdi til en variabel, mens dobbelt likhetstegn (==) sammenligner to verdier.',
  },
  {
    question: 'Hva returnerer input()-funksjonen alltid i Python?',
    options: ['En tekststreng (str)', 'Et heltall (int)', 'Et desimaltall (float)', 'Datatypen til det brukeren skriver'],
    explanation: 'input() returnerer alltid en tekststreng. Derfor måvi bruke int() eller float() for a konvertere til tall.',
  },
  {
    question: 'Hvor mange ganger kjører loekken: for i in range(3):',
    options: ['3 ganger (0, 1, 2)', '4 ganger (0, 1, 2, 3)', '2 ganger (1, 2)', '3 ganger (1, 2, 3)'],
    explanation: 'range(3) genererer tallene 0, 1, 2 - altsa 3 tall. Loekken kjører en gang for hvert tall.',
  },
  {
    question: 'Hva er viktig med innrykk i Python?',
    options: ['Innrykk viser hva som hører til en betingelse eller loekke', 'Innrykk er bare for lesbarhet', 'Innrykk brukes bare i funksjoner', 'Python ignorerer innrykk'],
    explanation: 'Python bruker innrykk (typisk 4 mellomrom) for å vise kodeblokker. Feil innrykk gir syntaksfeil.',
  },
],


  'it-1-3': [
  {
    question: 'Hva kjennetegner en god algoritme?',
    options: ['Den er entydig, endelig og effektiv', 'Den er lang og detaljert', 'Den bruker mest mulig kode', 'Den er vanskelig a forstå'],
    explanation: 'En god algoritme har klært definerte steg (entydig), stopper etter et begrenset antall steg (endelig), og løser problemet med rimelig ressursbruk (effektiv).',
  },
  {
    question: 'Hva er pseudokode?',
    options: ['En uformell beskrivelse av en algoritme påvanlig språk', 'Kode med feil i', 'Kommentarer i programmet', 'Et programmeringsspråk for nybegynnere'],
    explanation: 'Pseudokode bruker vanlig språk blandet med programmeringsstrukturer for a beskrive algoritmer for de implementeres.',
  },
  {
    question: 'Hvilket symbol brukes for beslutninger i et flytdiagram?',
    options: ['Rombe (diamant)', 'Rektangel', 'Oval', 'Sirkel'],
    explanation: 'Rombe brukes for beslutninger med ja/nei-utganger. Rektangel er for prosesser, oval for stårt/slutt.',
  },
  {
    question: 'Hva er det første steget i problemløsning med programmering?',
    options: ['Forsta problemet - hva er input og output', 'Skrive koden', 'Teste programmet', 'Velge programmeringsspråk'],
    explanation: 'For du kan lose et problem, må du forstå hva det gårut pa. Hva får du inn, og hva skal ut?',
  },
  {
    question: 'Hva skjer i en uendelig loekke?',
    options: ['Programmet kjører for alltid fordi betingelsen aldri blir usann', 'Programmet stopper etter 100 iterasjoner', 'Programmet krasjer umiddelbart', 'Loekken hopper over annenhver iterasjon'],
    explanation: 'En uendelig loekke oppstar nårbetingelsen for a fortsette alltid er sann, typisk fordi variabelen som styrer loekken aldri oppdateres.',
  },
],


  'it-1-4': [
  {
    question: 'Hva er forskjellen mellom HTML og CSS?',
    options: ['HTML strukturerer innhold, CSS styrer utseende', 'HTML styrer utseende, CSS strukturerer innhold', 'De gjør det samme', 'HTML er for bilder, CSS er for tekst'],
    explanation: 'HTML (HyperText Markup Language) definerer strukturen og innholdet, mens CSS (Cascading Style Sheets) bestemmer hvordan det ser ut.',
  },
  {
    question: 'Hvordan velger du alle elementer med klassen "meny" i CSS?',
    options: ['.meny', '#meny', 'meny', '*meny'],
    explanation: 'Punktum (.) foran navnet brukes for a velge klasser i CSS. # brukes for ID-er.',
  },
  {
    question: 'Hva gjør <head>-elementet i HTML?',
    options: ['Inneholder metadata som ikke vises påsiden', 'Viser hovedoverskriften', 'Inneholder alt synlig innhold', 'Lager et toppbanner'],
    explanation: 'Head-seksjonen inneholder metadata som tittel, CSS-lenker, og tegnsett - informasjon om siden som ikke vises direkte.',
  },
  {
    question: 'Hva er riktig mate a koble en ekstern CSS-fil til HTML?',
    options: ['<link rel="stylesheet" href="stil.css">', '<style src="stil.css">', '<css file="stil.css">', '<script src="stil.css">'],
    explanation: 'Link-elementet med rel="stylesheet" brukes for a koble til eksterne CSS-filer i head-seksjonen.',
  },
  {
    question: 'Hvilken CSS-selektor har høyest spesifisitet?',
    options: ['#id-selektor', '.klasse-selektor', 'element-selektor', 'Alle har lik spesifisitet'],
    explanation: 'ID-selektorer har høyest spesifisitet, deretter klasser, og til slutt element-selektorer. Høyere spesifisitet vinner ved konflikter.',
  },
],


  'it-1-5': [
  {
    question: 'Hvabrukes JavaScript til pånettsider?',
    options: ['A gjøre nettsider interaktive', 'A strukturere innhold', 'A style utseende', 'A lagre data påserveren'],
    explanation: 'JavaScript gjør nettsider interaktive ved a reagere påbrukerhandlinger, endre innhold, og manipulære DOM.',
  },
  {
    question: 'Hva er forskjellen mellom let og const i JavaScript?',
    options: ['let kan endres, const kan ikke endres', 'De er helt like', 'const er for tall, let er for tekst', 'let er gammel syntaks'],
    explanation: 'Bruk let for variabler som skal endres, og const for verdier som skal forbli konstante gjennom programmet.',
  },
  {
    question: 'Hvilken metode brukes for a finne et HTML-element med en bestemt ID?',
    options: ['document.getElementById()', 'document.findById()', 'document.selectId()', 'document.getElement()'],
    explanation: 'getElementById("idNavn") returnerer elementet med den angitte ID-en fra DOM-en.',
  },
  {
    question: 'Hvordan legger du til en klikkhendelse påen knapp?',
    options: ['knapp.addEventListener("click", funksjon)', 'knapp.onClick(funksjon)', 'knapp.click = funksjon', 'addClick(knapp, funksjon)'],
    explanation: 'addEventListener() er den moderne og anbefalte maten a legge til hendelseslyttere i JavaScript.',
  },
  {
    question: 'Hva blir resultatet av "5" + 2 i JavaScript?',
    options: ['"52" (streng)', '7 (tall)', 'Feilmelding', 'undefined'],
    explanation: 'Nåren streng adderes med et tall, konverteres tallet til streng og de settes sammen: "5" + "2" = "52".',
  },
],


  'it-1-6': [
  {
    question: 'Hva er en primaernokkel i en database?',
    options: ['En unik identifikator for hver rad i tabellen', 'Det første feltet i tabellen', 'Passordet til databasen', 'Den viktigste kolønnen'],
    explanation: 'Primaernokkel identifiserer hver rad unikt og sikrer at ingen duplikater finnes. Ofte et ID-nummer.',
  },
  {
    question: 'Hvilken SQL-kommando brukes for a hente data?',
    options: ['SELECT', 'GET', 'FETCH', 'RETRIEVE'],
    explanation: 'SELECT brukes for a hente (velge) data fra tabeller. Eksempel: SELECT * FROM elever;',
  },
  {
    question: 'Hva gjør WHERE-klausulen i en SQL-sporring?',
    options: ['Filtrerer rader basert påen betingelse', 'Sorterer resultatene', 'Velger hvilke kolønner som vises', 'Sletter data'],
    explanation: 'WHERE brukes til a filtrere rader som oppfyller en bestemt betingelse, f.eks. WHERE pris > 100.',
  },
  {
    question: 'Hva er hensikten med normalisering?',
    options: ['Redusere redundans og sikre dataintegritet', 'Gjore databasen raskere', 'Kryptere dataene', 'Komprimere dataene'],
    explanation: 'Normalisering organiserer data slik at informasjon ikke lagres flere steder, noe som holder dataene konsistente.',
  },
  {
    question: 'Hvilken SQL-kommando legger til en ny rad i en tabell?',
    options: ['INSERT INTO', 'ADD INTO', 'CREATE ROW', 'UPDATE'],
    explanation: 'INSERT INTO tabellnavn VALUES (...) eller INSERT INTO tabellnavn (kolønner) VALUES (...) legger til nye rader.',
  },
],


  'it-1-7': [
  {
    question: 'Hva er forskjellen mellom UI og UX?',
    options: ['UI er det visuelle grensesnittet, UX er totalopplevelsen', 'UI og UX er det samme', 'UI er for mobil, UX er for desktop', 'UX er viktigere enn UI'],
    explanation: 'UI (User Interface) handler om det visuelle, mens UX (User Experience) omfatter hele brukeropplevelsen inkludert brukervennlighet.',
  },
  {
    question: 'Hva betyr universell utforming?',
    options: ['At produktet kan brukes av alle, uavhengig av funksjonsevne', 'At designet er likt over hele verden', 'At det fungerer påalle nettlesere', 'At man bruker universelle symboler'],
    explanation: 'Universell utforming sikrer at alle kan bruke produktet, inkludert personer med funksjonsnedsettelser.',
  },
  {
    question: 'Hva er minimumskravet for kontrast mellom tekst og bakgrunn ifølge WCAG AA?',
    options: ['4.5:1 for normal tekst', '2:1', '3:1', '7:1'],
    explanation: 'WCAG AA krever minimum 4.5:1 kontrast for normal tekst og 3:1 for stor tekst (18pt+).',
  },
  {
    question: 'Hvorfor bør man ikke bruke farge alene for a formidle informasjon?',
    options: ['Fordi noen brukere har fargeblindhet', 'Fordi farger er stygt', 'Fordi det bruker mye data', 'Fordi det er mot reglene'],
    explanation: 'Ca. 8% av menn har fargeblindhet. Bruk også tekst, ikoner eller monster for viktig informasjon.',
  },
  {
    question: 'Hvabrukes media queries til i CSS?',
    options: ['Tilpasse design til ulike skjermstørrelser', 'Legge til bilder', 'Spille av video', 'Koble til databaser'],
    explanation: 'Media queries lar deg endre CSS basert påskjermstørrelse, noe som er essensielt for responsive design.',
  },
],


  'it-1-8': [
  {
    question: 'Hva gjør DNS (Domain Name System)?',
    options: ['Oversetter domenenavn til IP-adresser', 'Beskytter mot virus', 'Krypterer nettverkstrafikk', 'Blokkerer uønsket trafikk'],
    explanation: 'DNS fungerer som telefonkatalogen til internett - den oversetter navn som vg.no til IP-adresser som 195.88.55.16.',
  },
  {
    question: 'Hva er forskjellen mellom HTTP og HTTPS?',
    options: ['HTTPS er kryptert og sikrere', 'HTTPS er raskere', 'HTTP er nyere', 'Det er ingen forskjell'],
    explanation: 'HTTPS bruker kryptering (TLS/SSL) for a beskytte data som sendes mellom nettleser og server.',
  },
  {
    question: 'Hva er phishing?',
    options: ['Forsok påa lure noen til a oppgi sensitiv informasjon', 'En type datavirus', 'A hacke et nettverk', 'A stjele WiFi'],
    explanation: 'Phishing bruker falske e-poster eller nettsider for a lure folk til a oppgi passord eller annen sensitiv informasjon.',
  },
  {
    question: 'Hva er tofaktorautentisering (2FA)?',
    options: ['A bruke to ulike typer bekreftelse for innlogging', 'A ha to passord', 'A logge inn fra to enheter', 'A dele innlogging med to personer'],
    explanation: '2FA kombinerer noe du vet (passord) med noe du har (telefon/kode) for økt sikkerhet.',
  },
  {
    question: 'Hva star CIA for i informasjonssikkerhet?',
    options: ['Konfidensialitet, Integritet, Tilgjengelighet', 'Central Intelligence Agency', 'Computer Internet Access', 'Coded Information Algorithm'],
    explanation: 'CIA-triaden: Konfidensialitet (hvem kan se), Integritet (er data korrekt), Tilgjengelighet (er data tilgjengelig).',
  },
],


  'it-1-9': [
  {
    question: 'Hva er GDPR?',
    options: ['EUs personvernforordning som regulærer behandling av personopplysninger', 'Et antivirusprogram', 'En krypteringsstandard', 'Et sosialt nettverk'],
    explanation: 'GDPR (General Data Protection Regulation) er EUs personvernforordning som også gjelder i Norge gjennom personopplysningsloven.',
  },
  {
    question: 'Hva menes med dataminimering?',
    options: ['Bare samle inn nødvendige personopplysninger', 'Komprimere datafiler', 'Slette gamle dokumenter', 'Bruke korte passord'],
    explanation: 'Dataminimering er et GDPR-prinsipp som sier at man bare skal samle inn data som er nødvendig for formalet.',
  },
  {
    question: 'Hvilken rettighet gir deg mulighet til a be om sletting av dine personopplysninger?',
    options: ['Retten til å bli glemt', 'Retten til innsyn', 'Retten til dataportabilitet', 'Retten til a protestere'],
    explanation: 'Under GDPR har du rett til a be om at virksomheter sletter personopplysninger de har lagret om deg.',
  },
  {
    question: 'Hva er opphavsrett?',
    options: ['Beskyttelse av andsverk som gir skaperen enerett til bruk', 'Rett til a kopiere alt påinternett', 'En lisens for a dele bilder', 'Et patent påprogramvare'],
    explanation: 'Opphavsrett beskytter kreative verk og gir skaperen kontroll over hvordan verket brukes og distribueres.',
  },
  {
    question: 'Hvilken lisenstype tillater fri bruk med krav om a nevne opphavsmannen?',
    options: ['Creative Commons BY', 'Copyright', 'Alle rettigheter forbeholdt', 'Proprietary'],
    explanation: 'CC BY (Creative Commons Attribution) tillater bruk, deling og bearbeiding sålenge du krediterer opphavsmannen.',
  },
],


  'it-1-10': [
  {
    question: 'Hva er første fase i et IT-prosjekt?',
    options: ['Planlegging - definere mal og krav', 'Utvikling - skrive kode', 'Testing - finne feil', 'Levering - presentere resultatet'],
    explanation: 'Planleggingsfasen er først, der man definerer mal, krav, tidsplan og fordeler oppgaver.',
  },
  {
    question: 'Hva er smidig utvikling (Agile)?',
    options: ['En tilnærming med korte sykluser og hyppige leveranser', 'A jobbe veldig raskt', 'A hoppe over planlegging', 'En programmeringsteknikk'],
    explanation: 'Smidig utvikling innebærer korte sprinter, fungerende leveranser underveis, og tilpasning til endringer.',
  },
  {
    question: 'Hvabrukes Git til?',
    options: ['Versjonskontroll - spore endringer i kode', 'A kjøre programmer', 'A designe nettsider', 'A teste kode'],
    explanation: 'Git er et versjonskontrollsystem som sporer alle endringer i koden, slik at du kan ga tilbake til tidligere versjoner.',
  },
  {
    question: 'Hva bør en god prosjektdokumentasjon inneholde?',
    options: ['Malsetting, teknisk beskrivelse, brukerveiledning og refleksjon', 'Bare kildekoden', 'Kun skjermbilder', 'Bare prosjektloggen'],
    explanation: 'God dokumentasjon inkluderer hva prosjektet skal oppna, hvordan det er bygget, hvordan det brukes, og refleksjon over prosessen.',
  },
  {
    question: 'Hva er en Kanban-tavle?',
    options: ['Et visuelt verktoey for a følge oppgaver gjennom A gjøre, Pagar, Ferdig', 'Et programmeringsspråk', 'En type database', 'Et designverktoey'],
    explanation: 'Kanban-tavlen visualiserer arbeidsflyt med kolønner som viser oppgavestatus, og begrenser arbeid i gang.',
  },
],


  'it-2-1': [
  {
    question: 'Hva er forskjellen mellom en klasse og et objekt i OOP?',
    options: ['Klassen er malen, objektet er en konkret instans av malen', 'De er det samme', 'Objektet er malen, klassen er instansen', 'Klasser finnes bare i Java'],
    explanation: 'En klasse er en mal/oppskrift som definerer struktur, mens et objekt er en konkret instans med faktiske verdier.',
  },
  {
    question: 'Hva er innkapsling i objektorientert programmering?',
    options: ['A skjule interne detaljer og kun eksponere nødvendig funksjonalitet', 'A pakke koden i en ZIP-fil', 'A bruke mange klasser', 'A dele kode mellom prosjekter'],
    explanation: 'Innkapsling beskytter data fra uønsket endring og gjør koden enklære a vedlikeholde ved a skjule implementasjonsdetaljer.',
  },
  {
    question: 'Hva gjør __init__-metoden i Python?',
    options: ['Den er konstruktoren som initialiserer objektets attributter', 'Den sletter objektet', 'Den skriver ut objektet', 'Den kopierer objektet'],
    explanation: '__init__ er konstruktoren som kjøres automatisk nåret objekt opprettes og setter opp objektets starttilstand.',
  },
  {
    question: 'Hva betyr arv i programmering?',
    options: ['At en klasse kan gjenbruke egenskaper og metoder fra en annen klasse', 'A kopiere kode manuelt', 'A bruke importerte moduler', 'A slette gamle klasser'],
    explanation: 'Arv lar en underklasse arve alle egenskaper fra en overklasse og legge til eller overstyre funksjonalitet.',
  },
  {
    question: 'Hva er polymorfisme?',
    options: ['At samme metodenavn kan ha ulik implementasjon i ulike klasser', 'A bruke mange variabler', 'A skrive lang kode', 'A bruke flere programmeringsspråk'],
    explanation: 'Polymorfisme betyr at objekter av ulike klasser kan behandles likt, mens de utfører metoden påsin egen mate.',
  },
],


  'it-2-2': [
  {
    question: 'Hva er forskjellen mellom en stakk (stack) og en ko (queue)?',
    options: ['Stakk er LIFO (sist inn, først ut), ko er FIFO (først inn, først ut)', 'De er like', 'Stakk er FIFO, ko er LIFO', 'Stakk brukes bare for tall'],
    explanation: 'Stakk fungerer som en stabel (siste påtoppen fjernes først), ko fungerer som en ventekoe (første i rekken betjenes først).',
  },
  {
    question: 'Hva betyr O(n) i Big O-notasjon?',
    options: ['Lineaer tid - kjoeretiden vokser proporsjonalt med input-størrelsen', 'Konstant tid', 'Logaritmisk tid', 'Eksponentiell tid'],
    explanation: 'O(n) betyr at hvis input dobles, dobles også kjoeretiden. Eksempel: a soke gjennom en usortert liste.',
  },
  {
    question: 'Hvilken tidskompleksitet har binært sok?',
    options: ['O(log n)', 'O(n)', 'O(1)', 'O(n^2)'],
    explanation: 'Binært sok halverer sokrommet for hver sammenligning, noe som gir logaritmisk tid O(log n).',
  },
  {
    question: 'Hva er typisk bruk for en stakk-datastruktur?',
    options: ['Angre-funksjon i programmer', 'Utskriftsko', 'Sortering av tall', 'Lagring av brukerdata'],
    explanation: 'Stakk passer perfekt for angre-funksjonalitet der siste handling skal kunne reverseres først.',
  },
  {
    question: 'Hva er tidskompleksiteten til boblesortering i verste fall?',
    options: ['O(n^2)', 'O(n)', 'O(log n)', 'O(n log n)'],
    explanation: 'Boblesortering sammenligner alle par gjentatte ganger, noe som gir kvadratisk tid O(n^2).',
  },
],


  'it-2-3': [
  {
    question: 'Hva er hovedforskjellen mellom fossefallsmodellen og smidig utvikling?',
    options: ['Fossefall er lineaer og sekvensielt, smidig er iterativ med hyppige leveranser', 'De er like', 'Smidig har ingen planlegging', 'Fossefall har ingen testing'],
    explanation: 'Fossefall gårgjennom fasene en gang, mens smidig utvikling gjentar korte sykluser med kontinuerlig forbedring.',
  },
  {
    question: 'Hva er enhetstesting (unit testing)?',
    options: ['A teste enkeltfunksjoner eller komponenter isolert', 'A teste hele systemet', 'A lå brukere teste', 'A teste bare brukergrensesnittet'],
    explanation: 'Enhetstesting verifiserer at individuelle funksjoner eller metoder fungerer korrekt, uavhengig av resten av systemet.',
  },
  {
    question: 'Hva er de tre rollene i Scrum?',
    options: ['Product Owner, Scrum Master, Utviklingsteam', 'Sjef, Ansatt, Kunde', 'Designer, Utvikler, Tester', 'Prosjektleder, Programmerer, Administrator'],
    explanation: 'Product Owner prioriterer arbeid, Scrum Master fasiliterer prosessen, Utviklingsteam bygger produktet.',
  },
  {
    question: 'Hva er test-drevet utvikling (TDD)?',
    options: ['A skrive tester for koden først, deretter implementere kode som består testene', 'A teste etter all koding er ferdig', 'A la andre teste koden din', 'A ikke bruke tester'],
    explanation: 'TDD-syklusen: Skriv test (som feiler) -> Skriv kode for a besta -> Refaktorer. Dette sikrer testdekning.',
  },
  {
    question: 'Hvilken Git-kommando brukes for a lagre endringer med en melding?',
    options: ['git commit -m "melding"', 'git save "melding"', 'git store "melding"', 'git push "melding"'],
    explanation: 'git commit lagrer endringer lokalt med en beskrivende melding. git push sender dem til server etterpaa.',
  },
],


  'it-2-4': [
  {
    question: 'Hva er forskjellen mellom native apper og webapper?',
    options: ['Native apper er laget for spesifikk plattform, webapper kjører i nettleser', 'De er like', 'Webapper er raskere', 'Native apper bruker bare HTML'],
    explanation: 'Native apper utvikles spesifikt for iOS eller Android og har full tilgang til enhetsfunksjoner, webapper kjører i nettleser påalle enheter.',
  },
  {
    question: 'Hva er responsive design?',
    options: ['At nettsiden tilpasser seg automatisk til ulike skjermstørrelser', 'At nettsiden reagerer raskt', 'At nettsiden har mange knapper', 'At nettsiden fungerer offline'],
    explanation: 'Responsive design bruker CSS media queries og fleksible layouter for a tilpasse visningen til mobil, nettbrett og desktop.',
  },
  {
    question: 'Hva er en wireframe?',
    options: ['En enkel skisse som viser layout og struktur uten detaljer', 'En ferdig nettside', 'En type database', 'Et programmeringsspråk'],
    explanation: 'Wireframes er enkle skisser som fokuserer påfunksjonalitet og informasjonsarkitektur for detaljert design.',
  },
  {
    question: 'Hva star UX for?',
    options: ['User Experience - brukeropplevelse', 'Universal XML', 'User Extension', 'Unique Export'],
    explanation: 'UX (User Experience) handler om hele brukerens opplevelse med produktet - hvor enkelt, effektivt og tilfredsstillende det er.',
  },
  {
    question: 'Hvilket verktoey brukes ofte til prototyping og UI-design?',
    options: ['Figma', 'Python', 'MySQL', 'Git'],
    explanation: 'Figma er et populaert verktoey for å lage design, prototyper og samarbeide om brukergrensesnitt.',
  },
],


  'it-2-5': [
  {
    question: 'Hva er forskjellen mellom veiledet og uveiledet læring?',
    options: ['Veiledet læring bruker merkede data med fasit, uveiledet finner monster uten fasit', 'De er like', 'Uveiledet er mer nøyaktig', 'Veiledet krever ingen data'],
    explanation: 'Veiledet læring trenes pådata der vi vet riktig svar (f.eks. bilder merket katt/hund). Uveiledet finner monster selv.',
  },
  {
    question: 'Hva er et nevralt nettverk?',
    options: ['En beregningsmodell inspirert av hjernen med lag av sammenkoblede noder', 'Et fysisk nettverk av datamaskiner', 'En type WiFi', 'Et sosialt nettverk'],
    explanation: 'Nevrale nettverk består av input-lag, skjulte lag og output-lag der informasjon prosesseres gjennom vektede forbindelser.',
  },
  {
    question: 'Hva er bias i AI-systemer?',
    options: ['Skjevhet som gjør at systemet favoriserer visse grupper eller utfall', 'En type feilmelding', 'En programmeringsteknikk', 'Et merkevarenavn'],
    explanation: 'Bias oppstar nårtreningsdata er skjev, slik at AI-systemet arver og forsterker fordømmer.',
  },
  {
    question: 'Hvilket Python-bibliotek brukes ofte til maskinlæring?',
    options: ['scikit-learn', 'Flask', 'Django', 'Pygame'],
    explanation: 'scikit-learn er et populaert bibliotek for maskinlæring med ferdige algoritmer for klassifisering, regresjon og clustering.',
  },
  {
    question: 'Hva er dypering (deep learning)?',
    options: ['Nevrale nettverk med mange skjulte lag som kan lære komplekse monster', 'A lære veldig fort', 'A bruke dype databaser', 'A skrive lang kode'],
    explanation: 'Deep learning bruker nevrale nettverk med mange lag for a lære avanserte monster fra store datamengder, brukt i bildegjenkjenning og språkmodeller.',
  },
],


  'it-2-6': [
  {
    question: 'Hva er CIA-triaden i informasjonssikkerhet?',
    options: ['Konfidensialitet, Integritet, Tilgjengelighet', 'Computer, Internet, Application', 'Create, Install, Authenticate', 'Copy, Insert, Attach'],
    explanation: 'CIA-triaden er de tre hovedmalene: Konfidensialitet (hvem ser data), Integritet (er data korrekt), Tilgjengelighet (er data tilgjengelig nårtrengs).',
  },
  {
    question: 'Hva er forskjellen mellom symmetrisk og asymmetrisk kryptering?',
    options: ['Symmetrisk bruker samme nokkel for kryptering/dekryptering, asymmetrisk bruker offentlig/privat nokkelpar', 'De er like', 'Asymmetrisk er alltid raskere', 'Symmetrisk bruker to nokkler'],
    explanation: 'Symmetrisk kryptering er rask men krever sikker nokkeldeling. Asymmetrisk løser dette med offentlig nokkel for kryptering og privat for dekryptering.',
  },
  {
    question: 'Hva er hashing?',
    options: ['En enveisfunksjon som lager et unikt fingeravtrykk av data', 'A kryptere data', 'A komprimere filer', 'A dele data'],
    explanation: 'Hashing produserer en fast-lengde streng fra input. Kan ikke reverseres, brukes til a verifisere integritet og lagre passord sikkert.',
  },
  {
    question: 'Hvorfor bør passord aldri lagres i klærtekst?',
    options: ['Ved datainnbrudd fårangripere alle passord direkte', 'Det tar for mye plass', 'Det er tregere', 'Brukerne liker det ikke'],
    explanation: 'Klærtekst-passord er lesbare for alle med databasetilgang. Bruk hashing med salt såpassord kan verifiseres uten a lagres lesbart.',
  },
  {
    question: 'Hva er phishing?',
    options: ['Lureri via falske e-poster eller nettsider for a fa tak i sensitiv informasjon', 'A hacke en server', 'A installære virus', 'A overvake nettverk'],
    explanation: 'Phishing lurer brukere til a oppgi passord eller annen sensitiv info ved a utgi seg for a være en legitim tjeneste.',
  },
],


  'it-2-7': [
  {
    question: 'Hva er de syv fasene i systemutviklingens livssyklus (SDLC)?',
    options: ['Planlegging, Analyse, Design, Utvikling, Testing, Implementering, Vedlikehold', 'Bare planlegging og koding', 'Design og testing', 'Det finnes ingen faste faser'],
    explanation: 'SDLC gir en strukturert tilnærming fra a forstå behovet til a drifte og vedlikeholde systemet over tid.',
  },
  {
    question: 'Hva er en brukerhistorie (user story)?',
    options: ['En kort beskrivelse av funksjonalitet frå brukerens perspektiv', 'En lang teknisk dokumentasjon', 'En biografi om brukeren', 'En feilrapport'],
    explanation: 'Format: "Som [rolle] ønsker jeg [funksjon] slik at [nytte]". Holder fokus påbrukerverdi.',
  },
  {
    question: 'Hva er forskjellen mellom funksjonelle og ikke-funksjonelle krav?',
    options: ['Funksjonelle beskriver hva systemet gjør, ikke-funksjonelle beskriver kvalitetsegenskaper', 'De er like', 'Ikke-funksjonelle er uviktige', 'Funksjonelle handler om design'],
    explanation: 'Funksjonelle krav: "Brukeren kan logge inn". Ikke-funksjonelle krav: "Systemet skal handtere 1000 samtidige brukere".',
  },
  {
    question: 'Hva er en Kanban-tavle?',
    options: ['Et visuelt verktoey med kolønner som viser oppgavers status (A gjøre, Pagar, Ferdig)', 'En type database', 'Et programmeringsspråk', 'En fysisk tavle med kritt'],
    explanation: 'Kanban visualiserer arbeidsflyt og begrenser arbeid i gang for a oke fokus og gjennomstrømning.',
  },
  {
    question: 'Hva er risikostyring i prosjekter?',
    options: ['A identifisere, analysere og handtere potensielle problemer', 'A ta sjanser', 'A ignorere problemer', 'A alltid velge det sikre alternativet'],
    explanation: 'Risikostyring innebærer a forutse problemer, vurdere sannsynlighet og konsekvens, og planlegge tiltak.',
  },
],


  'it-2-8': [
  {
    question: 'Hva er et API?',
    options: ['Et grensesnitt som lar ulike programmer kommunisere med hverandre', 'En type database', 'Et programmeringsspråk', 'En nettleser'],
    explanation: 'API (Application Programming Interface) definerer hvordan programvare kan utveksle data og funksjonalitet.',
  },
  {
    question: 'Hvilken HTTP-metode brukes for a hente data fra et REST API?',
    options: ['GET', 'POST', 'DELETE', 'PUT'],
    explanation: 'GET brukes for a hente data. POST oppretter, PUT oppdaterer, DELETE sletter ressurser.',
  },
  {
    question: 'Hva er JSON?',
    options: ['Et lettvekt tekstformat for datautveksling', 'Et programmeringsspråk', 'En database', 'En krypteringsmetode'],
    explanation: 'JSON (JavaScript Object Notation) er et menneske- og maskinlesbart format for a strukturere data, mye brukt i API-er.',
  },
  {
    question: 'Hva betyr HTTP-statuskode 404?',
    options: ['Not Found - ressursen finnes ikke', 'OK - alt gikk bra', 'Uautorisert', 'Serverfeil'],
    explanation: '404 betyr at den førespurte ressursen ikke finnes påserveren. 200 er OK, 401 uautorisert, 500 serverfeil.',
  },
  {
    question: 'Hvabrukes en API-nokkel til?',
    options: ['A identifisere og autentisere klienten som bruker API-et', 'A kryptere data', 'A formatere JSON', 'A speede opp føresporsler'],
    explanation: 'API-nokkler identifiserer hvem som bruker tjenesten, begrenser tilgang, og sporer bruk.',
  },
],


  'it-2-9': [
  {
    question: 'Hva er forskjellen mellom IaaS, PaaS og SaaS?',
    options: ['IaaS gir infrastruktur, PaaS gir plattform for utvikling, SaaS gir ferdig programvare', 'De er like', 'IaaS er dyrest', 'SaaS krever mest teknisk kunnskap'],
    explanation: 'IaaS: Du styrer alt over infrastrukturen. PaaS: Du fokuserer påkode. SaaS: Du bare bruker ferdig software.',
  },
  {
    question: 'Hva gjør en load balancer?',
    options: ['Fordeler trafikk mellom flere servere', 'Lagrer data', 'Krypterer trafikk', 'Blokkerer angrep'],
    explanation: 'Load balancer fordeler innkommende føresporsler for å unngå overbelastning og sikre tilgjengelighet hvis en server svikter.',
  },
  {
    question: 'Hva er en CDN (Content Delivery Network)?',
    options: ['Et nettverk som lagrer innhold nær brukerne for raskere levering', 'En type database', 'Et programmeringsspråk', 'En sikkerhetsløsning'],
    explanation: 'CDN cacher statisk innhold (bilder, videoer, CSS) påservere over hele verden for raskere lasting.',
  },
  {
    question: 'Hva er serverless computing?',
    options: ['A kjøre kode uten a administrere servere, betaler kun nårkoden kjører', 'A ikke bruke internett', 'A jobbe offline', 'A bruke bare lokale servere'],
    explanation: 'Serverless (som AWS Lambda) lar deg fokusere påkode mens skyleverandoren handterer all infrastruktur og skalering.',
  },
  {
    question: 'Hvilke store skyleverandører finnes?',
    options: ['AWS, Microsoft Azure, Google Cloud Platform', 'Bare Google', 'Bare lokale selskaper', 'Det finnes ingen store leverandører'],
    explanation: 'De tre store er Amazon Web Services (AWS), Microsoft Azure og Google Cloud Platform (GCP).',
  },
],


  'it-2-10': [
  {
    question: 'Hvordan har IT påvirket arbeidslivet?',
    options: ['Nye yrker har oppstatt, noen har forsvunnet, hjemmekontor har blitt vanligere', 'Ingen endring', 'Alle jobber hjemmefra na', 'Alle jobber manuelt'],
    explanation: 'IT har skapt nye yrker (f.eks. dataingeniorer), automatisert rutineoppgaver, og muliggjørt fleksibelt arbeid.',
  },
  {
    question: 'Hva er IoT (Internet of Things)?',
    options: ['Nettverk av fysiske enheter som er koblet til internett og kan utveksle data', 'En type AI', 'Et sosialt nettverk', 'En programmeringsmetode'],
    explanation: 'IoT inkluderer smarte enheter som termostater, klokker og sensorer som kommuniserer over internett.',
  },
  {
    question: 'Hvilke etiske problemstillinger reiser AI?',
    options: ['Bias, personvern, jobbautomatisering, ansvar for beslutninger', 'Ingen problemstillinger', 'Bare tekniske problemer', 'Bare økonomiske kostnader'],
    explanation: 'AI-etikk omfatter skjevhet i algoritmer, overvaking, erstatning av jobber, og hvem som er ansvårlig nårAI tar feil.',
  },
  {
    question: 'Hva er digitalt utenforskap?',
    options: ['At grupper faller utenfor fordi de mangler digital kompetanse eller tilgang', 'A ikke ha sosiale medier', 'A velge a ikke bruke teknologi', 'A jobbe i IT'],
    explanation: 'Digitalt utenforskap rammer de som ikke mestrer eller har tilgang til teknologi samfunnet forutsetter.',
  },
  {
    question: 'Hva er barekraftig IT?',
    options: ['A utvikle og bruke teknologi påen mate som tar hensyn til miljø og ressursbruk', 'A bruke mye strøm', 'A kjøpe ny teknologi ofte', 'A ikke resirkulære'],
    explanation: 'Barekraftig IT handler om energieffektivitet, resirkulering av elektronikk, og redusert ressursforbruk i hele livssyklusen.',
  },
],


};

export default quizData_it;
