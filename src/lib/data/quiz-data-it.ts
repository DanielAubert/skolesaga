import type { QuizQuestion } from './quiz-data';

const quizData_it: Record<string, QuizQuestion[]> = {
  "it-1-1": [
    {
      question: "Hva er digitalisering?",
      options: ["Prosessen med å bruke digital teknologi til a endre prosesser og skape nye verdier", "A kjøpe nye datamaskiner til bedriften", "Prosessen med å skanne papirdokumenter og lagre dem som PDF-filer i et arkivsystem", "Prosessen med å kjøpe inn nye datamaskiner og programvare for å modernisere en bedrift"],
      explanation: "Digitalisering handler om a utnytte digital teknologi til a transformere forretningsmodeller, prosesser og tjenester - ikke bare å gjøre analoge ting digitale.",
    },
    {
      question: "Hvilken kompetanse handler om evnen til a føreta gode valg i digitale sammenhenger?",
      options: ["Digital dømmekraft", "Tekniske ferdigheter", "Informasjonskompetanse", "Produksjonskompetanse"],
      explanation: "Digital dømmekraft innebærer a vurdere troverdighet av informasjon, forstå konsekvenser av digital deling, og handle etisk ansvårlig pånett.",
    },
    {
      question: "Hva menes med digitalt utenforskap?",
      options: ["At grupper faller utenfor fordi de ikke mestrer digitale verktoy samfunnet forutsetter", "A bli blokkert påsosiale medier", "At man ikke har råd til å kjøpe egen internettilgang og derfor må bruke bibliotekets maskiner", "At personer blir utestengt eller blokkert fra sosiale medier på grunn av brudd på retningslinjer"],
      explanation: "Digitalt utenforskap oppstar nårpersoner eller grupper ikke har tilgang til eller kompetanse i å bruke digital teknologi som samfunnet forventer.",
    },
    {
      question: "Hvilket område har IKKE blitt påvirket av digitaliseringen?",
      options: ["Alle områder har blitt påvirket av digitaliseringen", "Arbeidslivet, som fortsatt fungerer akkurat som før datamaskinene kom", "Utelukkende offentlig sektor og statlige forvaltningsorganer", "Kun tradisjonelt håndverk og manuelt arbeid uten datamaskiner"],
      explanation: "Digitaliseringen har påvirket nesten alle områder av samfunnet, inkludert arbeidsliv, utdanning, helse og demokrati.",
    },
    {
      question: "Hva er et eksempel pådigital transformasjon i banktjenester?",
      options: ["Nettbank og Vipps som gjør banktjenester tilgjengelige 24/7", "At man ringer banken for å få lest opp saldoen sin av en kunderådgiver", "At man sender et signert brev til banken for å be om en kontoutskrift", "At man besøker en fysisk bankfilial for å sjekke saldoen på kontoen sin"],
      explanation: "Digital transformasjon i bank betyr at tjenester som tidligere krevde fysisk oppmate na kan gjøres digitalt nårsom helst.",
    },
  ],
  "it-1-2": [
    {
      question: "Hvilken datatype har verdien 3.14 i Python?",
      options: ["float", "bool", "str (tekst)", "int"],
      explanation: "Desimaltall lagres som float (flyttall) i Python. Int er for heltall, str for tekst og bool for True/False.",
    },
    {
      question: "Hva er forskjellen mellom = og == i Python?",
      options: ["= brukes for tilordning, == brukes for sammenligning", "= og == gjør nøyaktig det samme og kan byttes fritt", "= brukes for sammenligning, mens == brukes for tilordning", "== brukes bare inne i løkker, mens = brukes overalt ellers"],
      explanation: "Enkelt likhetstegn (=) tilordner en verdi til en variabel, mens dobbelt likhetstegn (==) sammenligner to verdier.",
    },
    {
      question: "Hva returnerer input()-funksjonen alltid i Python?",
      options: ["En tekststreng (str)", "Et heltall (int)", "Et desimaltall (float)", "Datatypen til det brukeren skriver"],
      explanation: "input() returnerer alltid en tekststreng. Derfor måvi bruke int() eller float() for a konvertere til tall.",
    },
    {
      question: "Hvor mange ganger kjører loekken: for i in range(3):",
      options: ["3 ganger (0, 1, 2)", "4 ganger (0, 1, 2, 3)", "2 ganger (1, 2)", "3 ganger (1, 2, 3)"],
      explanation: "range(3) genererer tallene 0, 1, 2 - altsa 3 tall. Loekken kjører en gang for hvert tall.",
    },
    {
      question: "Hva er viktig med innrykk i Python?",
      options: ["Innrykk viser hva som hører til en betingelse eller loekke", "Innrykk brukes utelukkende inne i funksjonsdefinisjoner", "Python ignorerer innrykk fullstendig ved kjøring", "Innrykk er kun for å gjøre koden penere å lese"],
      explanation: "Python bruker innrykk (typisk 4 mellomrom) for å vise kodeblokker. Feil innrykk gir syntaksfeil.",
    },
  ],
  "it-1-3": [
    {
      question: "Hva kjennetegner en god algoritme?",
      options: ["Den er entydig, endelig og effektiv", "Den bruker så mye kode som mulig", "Den er lang og svært detaljert", "Den er vanskelig og innviklet"],
      explanation: "En god algoritme har klært definerte steg (entydig), stopper etter et begrenset antall steg (endelig), og løser problemet med rimelig ressursbruk (effektiv).",
    },
    {
      question: "Hva er pseudokode?",
      options: ["En uformell beskrivelse av en algoritme påvanlig språk", "Et enkelt programmeringsspråk laget for nybegynnere", "Kommentarer som forklarer koden i et program", "Programkode som inneholder syntaksfeil"],
      explanation: "Pseudokode bruker vanlig språk blandet med programmeringsstrukturer for a beskrive algoritmer for de implementeres.",
    },
    {
      question: "Hvilket symbol brukes for beslutninger i et flytdiagram?",
      options: ["Rombe (diamant)", "Oval (ellipse)", "Rektangel (firkant)", "Sirkel (rund)"],
      explanation: "Rombe brukes for beslutninger med ja/nei-utganger. Rektangel er for prosesser, oval for stårt/slutt.",
    },
    {
      question: "Hva er det første steget i problemløsning med programmering?",
      options: ["Forsta problemet - hva er input og output", "Velge programmeringsspråk først", "Teste det ferdige programmet", "Velge programmeringsspråk"],
      explanation: "For du kan lose et problem, må du forstå hva det gårut pa. Hva får du inn, og hva skal ut?",
    },
    {
      question: "Hva skjer i en uendelig loekke?",
      options: ["Programmet kjører for alltid fordi betingelsen aldri blir usann", "Programmet krasjer umiddelbart med en syntaksfeil ved oppstart", "Løkken hopper over annenhver iterasjon og går dobbelt så fort", "Programmet stopper automatisk etter nøyaktig 100 iterasjoner"],
      explanation: "En uendelig loekke oppstar nårbetingelsen for a fortsette alltid er sann, typisk fordi variabelen som styrer loekken aldri oppdateres.",
    },
  ],
  "it-1-4": [
    {
      question: "Hva er forskjellen mellom HTML og CSS?",
      options: ["HTML strukturerer innhold, CSS styrer utseende", "HTML styrer utseende, CSS strukturerer innhold", "De gjør det samme", "HTML er for bilder, CSS er for tekst"],
      explanation: "HTML (HyperText Markup Language) definerer strukturen og innholdet, mens CSS (Cascading Style Sheets) bestemmer hvordan det ser ut.",
    },
    {
      question: "Hvordan velger du alle elementer med klassen \"meny\" i CSS?",
      options: [".meny", "#meny", "meny", "*meny"],
      explanation: "Punktum (.) foran navnet brukes for a velge klasser i CSS. # brukes for ID-er.",
    },
    {
      question: "Hva gjør <head>-elementet i HTML?",
      options: ["Inneholder metadata som ikke vises påsiden", "Viser hovedoverskriften øverst på siden", "Inneholder alt det synlige innholdet på siden", "Lager et fast toppbanner med navigasjon"],
      explanation: "Head-seksjonen inneholder metadata som tittel, CSS-lenker, og tegnsett - informasjon om siden som ikke vises direkte.",
    },
    {
      question: "Hva er riktig mate a koble en ekstern CSS-fil til HTML?",
      options: ["<link rel=\"stylesheet\" href=\"stil.css\">", "<script src=\"stil.css\">", "<style src=\"stil.css\">", "<css file=\"stil.css\">"],
      explanation: "Link-elementet med rel=\"stylesheet\" brukes for a koble til eksterne CSS-filer i head-seksjonen.",
    },
    {
      question: "Hvilken CSS-selektor har høyest spesifisitet?",
      options: ["#id-selektor", ".klasse-selektor", "element-selektor", "Alle har lik spesifisitet"],
      explanation: "ID-selektorer har høyest spesifisitet, deretter klasser, og til slutt element-selektorer. Høyere spesifisitet vinner ved konflikter.",
    },
  ],
  "it-1-5": [
    {
      question: "Hvabrukes JavaScript til pånettsider?",
      options: ["A gjøre nettsider interaktive", "Å lagre data permanent på serveren", "Å strukturere innholdet", "Å bestemme fargene på siden"],
      explanation: "JavaScript gjør nettsider interaktive ved a reagere påbrukerhandlinger, endre innhold, og manipulære DOM.",
    },
    {
      question: "Hva er forskjellen mellom let og const i JavaScript?",
      options: ["let kan endres, const kan ikke endres", "let er en gammel og utdatert syntaks", "const er for tall, let er for tekst", "let og const er helt like"],
      explanation: "Bruk let for variabler som skal endres, og const for verdier som skal forbli konstante gjennom programmet.",
    },
    {
      question: "Hvilken metode brukes for a finne et HTML-element med en bestemt ID?",
      options: ["document.getElementById()", "document.getElement()", "document.findById()", "document.selectId()"],
      explanation: "getElementById(\"idNavn\") returnerer elementet med den angitte ID-en fra DOM-en.",
    },
    {
      question: "Hvordan legger du til en klikkhendelse påen knapp?",
      options: ["knapp.addEventListener(\"click\", funksjon)", "addClick(knapp, funksjon)", "knapp.onClick(funksjon)", "knapp.click = funksjon"],
      explanation: "addEventListener() er den moderne og anbefalte maten a legge til hendelseslyttere i JavaScript.",
    },
    {
      question: "Hva blir resultatet av \"5\" + 2 i JavaScript?",
      options: ["\"52\" (streng)", "Feilmelding", "undefined", "7 (tall)"],
      explanation: "Nåren streng adderes med et tall, konverteres tallet til streng og de settes sammen: \"5\" + \"2\" = \"52\".",
    },
  ],
  "it-1-6": [
    {
      question: "Hva er en primaernokkel i en database?",
      options: ["En unik identifikator for hver rad i tabellen", "Passordet som brukes for å låse databasen", "Den kolonnen som er viktigst for brukeren", "Det aller første feltet i tabellen"],
      explanation: "Primaernokkel identifiserer hver rad unikt og sikrer at ingen duplikater finnes. Ofte et ID-nummer.",
    },
    {
      question: "Hvilken SQL-kommando brukes for a hente data?",
      options: ["SELECT", "GET", "FETCH", "RETRIEVE"],
      explanation: "SELECT brukes for a hente (velge) data fra tabeller. Eksempel: SELECT * FROM elever;",
    },
    {
      question: "Hva gjør WHERE-klausulen i en SQL-sporring?",
      options: ["Filtrerer rader basert påen betingelse", "Velger hvilke kolonner som skal vises i resultatet", "Slår sammen data fra to eller flere tabeller", "Sorterer resultatene stigende"],
      explanation: "WHERE brukes til a filtrere rader som oppfyller en bestemt betingelse, f.eks. WHERE pris > 100.",
    },
    {
      question: "Hva er hensikten med normalisering?",
      options: ["Redusere redundans og sikre dataintegritet", "Å gjøre databasen betydelig raskere å søke i", "Å komprimere dataene mer", "Å kryptere alle dataene"],
      explanation: "Normalisering organiserer data slik at informasjon ikke lagres flere steder, noe som holder dataene konsistente.",
    },
    {
      question: "Hvilken SQL-kommando legger til en ny rad i en tabell?",
      options: ["INSERT INTO", "CREATE ROW", "ADD INTO", "UPDATE"],
      explanation: "INSERT INTO tabellnavn VALUES (...) eller INSERT INTO tabellnavn (kolønner) VALUES (...) legger til nye rader.",
    },
  ],
  "it-1-7": [
    {
      question: "Hva er forskjellen mellom UI og UX?",
      options: ["UI er det visuelle grensesnittet, UX er totalopplevelsen", "UI er for mobil-app, mens UX er for desktop-versjonen", "UX er alltid mye viktigere enn UI i et prosjekt", "UI og UX betyr nøyaktig det samme begrepet"],
      explanation: "UI (User Interface) handler om det visuelle, mens UX (User Experience) omfatter hele brukeropplevelsen inkludert brukervennlighet.",
    },
    {
      question: "Hva betyr universell utforming?",
      options: ["At produktet kan brukes av alle, uavhengig av funksjonsevne", "At nettsiden fungerer likt på alle nettlesere og alle enheter", "At man bruker allment kjente universelle symboler i designet", "At designet ser helt likt ut over hele verden"],
      explanation: "Universell utforming sikrer at alle kan bruke produktet, inkludert personer med funksjonsnedsettelser.",
    },
    {
      question: "Hva er minimumskravet for kontrast mellom tekst og bakgrunn ifølge WCAG AA?",
      options: ["4.5:1 for normal tekst", "2:1 for normal tekst", "3:1 for normal tekst", "7:1 for normal tekst"],
      explanation: "WCAG AA krever minimum 4.5:1 kontrast for normal tekst og 3:1 for stor tekst (18pt+).",
    },
    {
      question: "Hvorfor bør man ikke bruke farge alene for a formidle informasjon?",
      options: ["Fordi noen brukere har fargeblindhet", "Fordi det bryter med reglene", "Fordi farger ser stygt ut", "Fordi det bruker mye data"],
      explanation: "Ca. 8% av menn har fargeblindhet. Bruk også tekst, ikoner eller monster for viktig informasjon.",
    },
    {
      question: "Hvabrukes media queries til i CSS?",
      options: ["Tilpasse design til ulike skjermstørrelser", "Koble nettsiden til databaser", "Legge til bilder på siden", "Spille av video og lyd"],
      explanation: "Media queries lar deg endre CSS basert påskjermstørrelse, noe som er essensielt for responsive design.",
    },
  ],
  "it-1-8": [
    {
      question: "Hva gjør DNS (Domain Name System)?",
      options: ["Oversetter domenenavn til IP-adresser", "Krypterer all nettverkstrafikk", "Beskytter maskinen mot virus", "Krypterer nettverkstrafikk"],
      explanation: "DNS fungerer som telefonkatalogen til internett - den oversetter navn som vg.no til IP-adresser som 195.88.55.16.",
    },
    {
      question: "Hva er forskjellen mellom HTTP og HTTPS?",
      options: ["HTTPS er kryptert og sikrere", "HTTP er den nyere versjonen", "Det er ingen reell forskjell", "HTTPS er alltid raskere"],
      explanation: "HTTPS bruker kryptering (TLS/SSL) for a beskytte data som sendes mellom nettleser og server.",
    },
    {
      question: "Hva er phishing?",
      options: ["Forsok påa lure noen til a oppgi sensitiv informasjon", "Å bryte seg inn i et nettverk ved å utnytte tekniske svakheter", "En metode for a avlytte trafikk på et apent tradlost nettverk uten a bli oppdaget", "Et angrep der man oversvømmer en server med trafikk til den slutter a svare brukerne"],
      explanation: "Phishing bruker falske e-poster eller nettsider for a lure folk til a oppgi passord eller annen sensitiv informasjon.",
    },
    {
      question: "Hva er tofaktorautentisering (2FA)?",
      options: ["A bruke to ulike typer bekreftelse for innlogging", "A dele innlogging med to personer", "A la to ulike brukere godkjenne hverandres innlogging før tilgang til systemet gis", "A logge inn fra to enheter"],
      explanation: "2FA kombinerer noe du vet (passord) med noe du har (telefon/kode) for økt sikkerhet.",
    },
    {
      question: "Hva star CIA for i informasjonssikkerhet?",
      options: ["Konfidensialitet, Integritet, Tilgjengelighet", "Central Intelligence Agency", "Coded Integrity Assurance - en standard for a sikre at krypterte data ikke er endret", "Coded Information Algorithm"],
      explanation: "CIA-triaden: Konfidensialitet (hvem kan se), Integritet (er data korrekt), Tilgjengelighet (er data tilgjengelig).",
    },
  ],
  "it-1-9": [
    {
      question: "Hva er GDPR?",
      options: ["EUs personvernforordning som regulærer behandling av personopplysninger", "Et norsk register der alle bedrifter må melde inn hvilke data de lagrer om kundene", "En internasjonal krypteringsstandard som beskytter data mens de sendes over internett", "En avtale mellom EU-land om a dele personopplysninger fritt over landegrensene i Europa"],
      explanation: "GDPR (General Data Protection Regulation) er EUs personvernforordning som også gjelder i Norge gjennom personopplysningsloven.",
    },
    {
      question: "Hva menes med dataminimering?",
      options: ["Bare samle inn nødvendige personopplysninger", "Slette gamle dokumenter", "A samle inn sa mye data som mulig for a kunne analysere brukerne grundig senere", "Komprimere datafiler"],
      explanation: "Dataminimering er et GDPR-prinsipp som sier at man bare skal samle inn data som er nødvendig for formalet.",
    },
    {
      question: "Hvilken rettighet gir deg mulighet til a be om sletting av dine personopplysninger?",
      options: ["Retten til å bli glemt", "Retten til innsyn", "Retten til dataportabilitet", "Retten til a protestere"],
      explanation: "Under GDPR har du rett til a be om at virksomheter sletter personopplysninger de har lagret om deg.",
    },
    {
      question: "Hva er opphavsrett?",
      options: ["Beskyttelse av andsverk som gir skaperen enerett til bruk", "En avgift forfatterne betaler til staten for å få gi ut bøkene sine", "En lisensavtale som gir deg lov til a bruke andres bilder sa lenge du oppgir kilden", "En rett til fritt a kopiere og dele alt innhold du finner publisert apent pa internett"],
      explanation: "Opphavsrett beskytter kreative verk og gir skaperen kontroll over hvordan verket brukes og distribueres.",
    },
    {
      question: "Hvilken lisenstype tillater fri bruk med krav om a nevne opphavsmannen?",
      options: ["Creative Commons BY", "Copyright", "Alle rettigheter forbeholdt", "Proprietary"],
      explanation: "CC BY (Creative Commons Attribution) tillater bruk, deling og bearbeiding sålenge du krediterer opphavsmannen.",
    },
  ],
  "it-1-10": [
    {
      question: "Hva er første fase i et IT-prosjekt?",
      options: ["Planlegging - definere mal og krav", "Levering - presentere resultatet", "Utvikling - a begynne a skrive kode med en gang sa man raskt far noe fungerende", "Testing - finne feil i koden"],
      explanation: "Planleggingsfasen er først, der man definerer mal, krav, tidsplan og fordeler oppgaver.",
    },
    {
      question: "Hva er smidig utvikling (Agile)?",
      options: ["En tilnærming med korte sykluser og hyppige leveranser", "A hoppe over planlegging", "En metode der man jobber sa raskt som mulig for a bli ferdig før tidsfristen løper ut", "En programmeringsteknikk"],
      explanation: "Smidig utvikling innebærer korte sprinter, fungerende leveranser underveis, og tilpasning til endringer.",
    },
    {
      question: "Hvabrukes Git til?",
      options: ["Versjonskontroll - spore endringer i kode", "Å redigere bilder og grafikk", "A designe brukergrensesnitt og layout for nettsider ved hjelp av ferdige maler", "Å kjøre ferdige programmer på maskinen"],
      explanation: "Git er et versjonskontrollsystem som sporer alle endringer i koden, slik at du kan ga tilbake til tidligere versjoner.",
    },
    {
      question: "Hva bør en god prosjektdokumentasjon inneholde?",
      options: ["Malsetting, teknisk beskrivelse, brukerveiledning og refleksjon", "Bare den ferdige kildekoden, helt uten noen forklarende tekst rundt", "Utelukkende prosjektloggen med datoer og timer, som viser hvor mye tid som ble brukt", "Bare skjermbilder av det ferdige produktet slik at leseren ser hvordan resultatet ble"],
      explanation: "God dokumentasjon inkluderer hva prosjektet skal oppna, hvordan det er bygget, hvordan det brukes, og refleksjon over prosessen.",
    },
    {
      question: "Hva er en Kanban-tavle?",
      options: ["Et visuelt verktoey for a følge oppgaver gjennom A gjøre, Pagar, Ferdig", "Et programmeringsspråk", "Et grafisk designverktøy for a lage skisser og layout til nettsider og applikasjoner", "Et programmeringsspras som brukes til a bygge visuelle brukergrensesnitt med kolonner"],
      explanation: "Kanban-tavlen visualiserer arbeidsflyt med kolønner som viser oppgavestatus, og begrenser arbeid i gang.",
    },
  ],
  "it-2-1": [
    {
      question: "Hva er forskjellen mellom en klasse og et objekt i OOP?",
      options: ["Klassen er malen, objektet er en konkret instans av malen", "Objektet er malen, klassen er instansen", "Klasser finnes bare i Java, mens objekter er noe man utelukkende bruker i Python-kode", "Objekter finnes bare i eldre språk"],
      explanation: "En klasse er en mal/oppskrift som definerer struktur, mens et objekt er en konkret instans med faktiske verdier.",
    },
    {
      question: "Hva er innkapsling i objektorientert programmering?",
      options: ["A skjule interne detaljer og kun eksponere nødvendig funksjonalitet", "Å dele den samme koden mellom flere ulike prosjekter og utviklingsteam", "A dele opp løsningen i sa mange klasser som mulig slik at hver klasse blir minst mulig", "A pakke all kildekoden sammen i en komprimert ZIP-fil før den distribueres til brukerne"],
      explanation: "Innkapsling beskytter data fra uønsket endring og gjør koden enklære a vedlikeholde ved a skjule implementasjonsdetaljer.",
    },
    {
      question: "Hva gjør __init__-metoden i Python?",
      options: ["Den er konstruktoren som initialiserer objektets attributter", "Den skriver ut objektet", "Den lager en fullstendig kopi av objektet med alle attributtene til et nytt objekt", "Den fjerner og sletter objektet fra minnet nar det ikke lenger er i bruk i programmet"],
      explanation: "__init__ er konstruktoren som kjøres automatisk nåret objekt opprettes og setter opp objektets starttilstand.",
    },
    {
      question: "Hva betyr arv i programmering?",
      options: ["At en klasse kan gjenbruke egenskaper og metoder fra en annen klasse", "A bruke importerte moduler", "A importere ferdige moduler og biblioteker slik at man far tilgang til deres funksjoner", "A slette gamle og utdaterte klasser automatisk nar nye klasser tar over funksjonaliteten"],
      explanation: "Arv lar en underklasse arve alle egenskaper fra en overklasse og legge til eller overstyre funksjonalitet.",
    },
    {
      question: "Hva er polymorfisme?",
      options: ["At samme metodenavn kan ha ulik implementasjon i ulike klasser", "A bruke flere programmeringsspråk", "A skrive lang og detaljert kode med mange linjer for a dekke alle tenkelige tilfeller", "A bruke sa mange variabler som mulig slik at hver verdi lagres i sitt eget navngitte felt"],
      explanation: "Polymorfisme betyr at objekter av ulike klasser kan behandles likt, mens de utfører metoden påsin egen mate.",
    },
  ],
  "it-2-2": [
    {
      question: "Hva er forskjellen mellom en stakk (stack) og en ko (queue)?",
      options: ["Stakk er LIFO (sist inn, først ut), ko er FIFO (først inn, først ut)", "Stakk kan bare brukes når dataene skal lagres permanent på harddisken", "Stakk er FIFO (først inn, først ut), mens ko er LIFO (sist inn, først ut) ved uttak", "Stakk kan bare lagre tall, mens ko kan lagre alle typer verdier som tekst og objekter"],
      explanation: "Stakk fungerer som en stabel (siste påtoppen fjernes først), ko fungerer som en ventekoe (første i rekken betjenes først).",
    },
    {
      question: "Hva betyr O(n) i Big O-notasjon?",
      options: ["Lineaer tid - kjoeretiden vokser proporsjonalt med input-størrelsen", "Eksponentiell tid", "Konstant tid - kjøretiden er den samme uansett hvor stor input-mengden faktisk blir", "Logaritmisk tid - kjøretiden vokser mye saktere enn input fordi rommet halveres hver gang"],
      explanation: "O(n) betyr at hvis input dobles, dobles også kjoeretiden. Eksempel: a soke gjennom en usortert liste.",
    },
    {
      question: "Hvilken tidskompleksitet har binært sok?",
      options: ["O(log n)", "O(n^2)", "O(1) - konstant tid uavhengig av hvor mange elementer det søkes gjennom", "O(n)"],
      explanation: "Binært sok halverer sokrommet for hver sammenligning, noe som gir logaritmisk tid O(log n).",
    },
    {
      question: "Hva er typisk bruk for en stakk-datastruktur?",
      options: ["Angre-funksjon i programmer", "Lagring av brukerdata", "En utskriftskø der dokumentene skrives ut i den rekkefølgen de ble sendt til printeren", "Sortering av tall"],
      explanation: "Stakk passer perfekt for angre-funksjonalitet der siste handling skal kunne reverseres først.",
    },
    {
      question: "Hva er tidskompleksiteten til boblesortering i verste fall?",
      options: ["O(n^2)", "O(n)", "O(log n)", "O(n log n)"],
      explanation: "Boblesortering sammenligner alle par gjentatte ganger, noe som gir kvadratisk tid O(n^2).",
    },
  ],
  "it-2-3": [
    {
      question: "Hva er hovedforskjellen mellom fossefallsmodellen og smidig utvikling?",
      options: ["Fossefall er lineaer og sekvensielt, smidig er iterativ med hyppige leveranser", "Fossefall brukes bare til apputvikling, mens smidig brukes til alle andre systemer", "De er egentlig like i praksis, siden begge deler prosjektet inn i de samme fem hovedfasene", "Smidig utvikling har ingen planlegging i det hele tatt, mens fossefall planlegger alt nøye"],
      explanation: "Fossefall gårgjennom fasene en gang, mens smidig utvikling gjentar korte sykluser med kontinuerlig forbedring.",
    },
    {
      question: "Hva er enhetstesting (unit testing)?",
      options: ["A teste enkeltfunksjoner eller komponenter isolert", "A teste bare brukergrensesnittet", "A teste hele systemet i sammenheng for a se om alle delene virker sammen mot slutten", "Å måle hvor raskt systemet svarer under last"],
      explanation: "Enhetstesting verifiserer at individuelle funksjoner eller metoder fungerer korrekt, uavhengig av resten av systemet.",
    },
    {
      question: "Hva er de tre rollene i Scrum?",
      options: ["Product Owner, Scrum Master, Utviklingsteam", "Prosjektleder, Programmerer, Administrator", "Sjef, Ansatt og Kunde - de som henholdsvis bestemmer, utfører og betaler for prosjektet", "Designer, Utvikler, Tester"],
      explanation: "Product Owner prioriterer arbeid, Scrum Master fasiliterer prosessen, Utviklingsteam bygger produktet.",
    },
    {
      question: "Hva er test-drevet utvikling (TDD)?",
      options: ["A skrive tester for koden først, deretter implementere kode som består testene", "Å la kunden teste programmet i full drift og melde fra om alle feilene de finner", "A vente med a teste til all koden er ferdig skrevet, sa man tester det komplette produktet", "A la en egen testavdeling eller andre utviklere teste koden din etter at du har levert den"],
      explanation: "TDD-syklusen: Skriv test (som feiler) -> Skriv kode for a besta -> Refaktorer. Dette sikrer testdekning.",
    },
    {
      question: "Hvilken Git-kommando brukes for a lagre endringer med en melding?",
      options: ["git commit -m \"melding\"", "git store \"melding\"", "git store \"melding\" - som legger endringene i det lokale lageret sammen med en forklaring", "git save \"melding\""],
      explanation: "git commit lagrer endringer lokalt med en beskrivende melding. git push sender dem til server etterpaa.",
    },
  ],
  "it-2-4": [
    {
      question: "Hva er forskjellen mellom native apper og webapper?",
      options: ["Native apper er laget for spesifikk plattform, webapper kjører i nettleser", "Native apper bruker bare HTML", "De er egentlig like, siden begge lages med de samme verktøyene og kjører pa samme mate", "Webapper er alltid raskere og bruker mindre minne enn native apper laget for plattformen"],
      explanation: "Native apper utvikles spesifikt for iOS eller Android og har full tilgang til enhetsfunksjoner, webapper kjører i nettleser påalle enheter.",
    },
    {
      question: "Hva er responsive design?",
      options: ["At nettsiden tilpasser seg automatisk til ulike skjermstørrelser", "At nettsiden svarer på brukerens klikk uten at siden må lastes på nytt", "At nettsiden reagerer og laster svaert raskt uansett hvor treg internettforbindelsen er", "At nettsiden har mange interaktive knapper og menyer som brukeren kan klikke seg gjennom"],
      explanation: "Responsive design bruker CSS media queries og fleksible layouter for a tilpasse visningen til mobil, nettbrett og desktop.",
    },
    {
      question: "Hva er en wireframe?",
      options: ["En enkel skisse som viser layout og struktur uten detaljer", "Et programmeringsspråk", "En type database som lagrer struktur og layout-informasjon om nettsidens ulike sider", "Et programmeringssprak som brukes spesielt til a bygge oppsettet og strukturen pa nettsider"],
      explanation: "Wireframes er enkle skisser som fokuserer påfunksjonalitet og informasjonsarkitektur for detaljert design.",
    },
    {
      question: "Hva star UX for?",
      options: ["User Experience - brukeropplevelse", "User Extension", "Unique Export - en funksjon for a eksportere brukerdata til et eget, personlig filformat", "Universal XML"],
      explanation: "UX (User Experience) handler om hele brukerens opplevelse med produktet - hvor enkelt, effektivt og tilfredsstillende det er.",
    },
    {
      question: "Hvilket verktoey brukes ofte til prototyping og UI-design?",
      options: ["Figma", "Python", "MySQL", "Git"],
      explanation: "Figma er et populaert verktoey for å lage design, prototyper og samarbeide om brukergrensesnitt.",
    },
  ],
  "it-2-5": [
    {
      question: "Hva er forskjellen mellom veiledet og uveiledet læring?",
      options: ["Veiledet læring bruker merkede data med fasit, uveiledet finner monster uten fasit", "Veiledet læring krever ingen treningsdata i det hele tatt, bare regler skrevet av mennesker", "Uveiledet laering gir alltid mer nøyaktige resultater fordi den ikke trenger merkede data", "De er egentlig like, siden begge trener modeller pa nøyaktig samme mate med de samme dataene"],
      explanation: "Veiledet læring trenes pådata der vi vet riktig svar (f.eks. bilder merket katt/hund). Uveiledet finner monster selv.",
    },
    {
      question: "Hva er et nevralt nettverk?",
      options: ["En beregningsmodell inspirert av hjernen med lag av sammenkoblede noder", "Et fysisk nettverk av datamaskiner", "Et fysisk kablingssystem der datamaskiner kobles sammen med rutere og svitsjer", "En trådløs kommunikasjonsstandard som sender data mellom enheter via radiobølger"],
      explanation: "Nevrale nettverk består av input-lag, skjulte lag og output-lag der informasjon prosesseres gjennom vektede forbindelser.",
    },
    {
      question: "Hva er bias i AI-systemer?",
      options: ["Skjevhet som gjør at systemet favoriserer visse grupper eller utfall", "En programmeringsteknikk", "Et registrert merkevarenavn på en kommersiell plattform for maskinlæring og dataanalyse", "En feilmelding som vises når treningsdataene inneholder korrupte eller manglende verdier"],
      explanation: "Bias oppstar nårtreningsdata er skjev, slik at AI-systemet arver og forsterker fordømmer.",
    },
    {
      question: "Hvilket Python-bibliotek brukes ofte til maskinlæring?",
      options: ["scikit-learn", "Django", "Flask, et mikrorammeverk for webapplikasjoner", "Pygame"],
      explanation: "scikit-learn er et populaert bibliotek for maskinlæring med ferdige algoritmer for klassifisering, regresjon og clustering.",
    },
    {
      question: "Hva er dypering (deep learning)?",
      options: ["Nevrale nettverk med mange skjulte lag som kan lære komplekse monster", "A bruke dype databaser", "En arbeidsmåte der utvikleren skriver spesielt lang og detaljert kode for hånd", "En teknikk som lagrer store treningsdatasett i dype, nøstede databasestrukturer"],
      explanation: "Deep learning bruker nevrale nettverk med mange lag for a lære avanserte monster fra store datamengder, brukt i bildegjenkjenning og språkmodeller.",
    },
  ],
  "it-2-6": [
    {
      question: "Hva er CIA-triaden i informasjonssikkerhet?",
      options: ["Konfidensialitet, Integritet, Tilgjengelighet", "Computer, Internet, Application", "Create, Install og Authenticate - de tre stegene i sikker programvareinstallasjon", "Create, Install, Authenticate"],
      explanation: "CIA-triaden er de tre hovedmalene: Konfidensialitet (hvem ser data), Integritet (er data korrekt), Tilgjengelighet (er data tilgjengelig nårtrengs).",
    },
    {
      question: "Hva er forskjellen mellom symmetrisk og asymmetrisk kryptering?",
      options: ["Symmetrisk bruker samme nokkel for kryptering/dekryptering, asymmetrisk bruker offentlig/privat nokkelpar", "Asymmetrisk er alltid raskere", "Symmetrisk bruker et par med to ulike nøkler, mens asymmetrisk klarer seg med kun én felles hemmelig nøkkel", "De er i praksis identiske ettersom begge bruker ett felles nøkkelpar til all kryptering og dekryptering av data"],
      explanation: "Symmetrisk kryptering er rask men krever sikker nokkeldeling. Asymmetrisk løser dette med offentlig nokkel for kryptering og privat for dekryptering.",
    },
    {
      question: "Hva er hashing?",
      options: ["En enveisfunksjon som lager et unikt fingeravtrykk av data", "Å dele en fil i mindre pakker før den sendes over nettverket", "En metode som komprimerer filer for å redusere lagringsplass uten å miste informasjon", "En prosess som deler store datasett opp i mindre biter og fordeler dem mellom servere"],
      explanation: "Hashing produserer en fast-lengde streng fra input. Kan ikke reverseres, brukes til a verifisere integritet og lagre passord sikkert.",
    },
    {
      question: "Hvorfor bør passord aldri lagres i klærtekst?",
      options: ["Ved datainnbrudd fårangripere alle passord direkte", "Brukerne liker det ikke", "Fordi brukerne generelt misliker at passordene deres lagres i systemets sentrale database", "Det tar for mye plass"],
      explanation: "Klærtekst-passord er lesbare for alle med databasetilgang. Bruk hashing med salt såpassord kan verifiseres uten a lagres lesbart.",
    },
    {
      question: "Hva er phishing?",
      options: ["Lureri via falske e-poster eller nettsider for a fa tak i sensitiv informasjon", "Å bryte seg inn i en server ved å utnytte tekniske sårbarheter i programvaren", "Å installere skadelig programvare på offerets maskin uten at brukeren merker det", "Å overvåke datatrafikk i et nettverk for å fange opp passord og annen informasjon"],
      explanation: "Phishing lurer brukere til a oppgi passord eller annen sensitiv info ved a utgi seg for a være en legitim tjeneste.",
    },
  ],
  "it-2-7": [
    {
      question: "Hva er de syv fasene i systemutviklingens livssyklus (SDLC)?",
      options: ["Planlegging, Analyse, Design, Utvikling, Testing, Implementering, Vedlikehold", "Det finnes ingen faste faser, ettersom hvert prosjekt finner sin egen rekkefølge", "Kun to faser: planlegging og koding, siden resten skjer automatisk underveis i prosjektet", "Bare design og testing, ettersom analyse og vedlikehold regnes som deler av selve utviklingen"],
      explanation: "SDLC gir en strukturert tilnærming fra a forstå behovet til a drifte og vedlikeholde systemet over tid.",
    },
    {
      question: "Hva er en brukerhistorie (user story)?",
      options: ["En kort beskrivelse av funksjonalitet frå brukerens perspektiv", "En logg der utvikleren noterer ned hvor lang tid hver oppgave tok", "En rapport som brukeren sender inn når det oppstår en feil eller mangel i programvaren", "En omfattende og detaljert teknisk spesifikasjon som beskriver hele systemets arkitektur"],
      explanation: "Format: \"Som [rolle] ønsker jeg [funksjon] slik at [nytte]\". Holder fokus påbrukerverdi.",
    },
    {
      question: "Hva er forskjellen mellom funksjonelle og ikke-funksjonelle krav?",
      options: ["Funksjonelle beskriver hva systemet gjør, ikke-funksjonelle beskriver kvalitetsegenskaper", "Funksjonelle krav gjelder bare maskinvaren, ikke programvaren", "Ikke-funksjonelle krav er uviktige detaljer som kan ignoreres så lenge systemet gjør det det skal", "Funksjonelle krav handler kun om systemets visuelle design, mens ikke-funksjonelle beskriver koden"],
      explanation: "Funksjonelle krav: \"Brukeren kan logge inn\". Ikke-funksjonelle krav: \"Systemet skal handtere 1000 samtidige brukere\".",
    },
    {
      question: "Hva er en Kanban-tavle?",
      options: ["Et visuelt verktoey med kolønner som viser oppgavers status (A gjøre, Pagar, Ferdig)", "Et programmeringsspråk som brukes til å styre oppgaveflyten i et utviklingsprosjekt", "En type database der oppgaver lagres i strukturerte tabeller med rader og kolonner", "En fysisk tavle der utviklerne skriver kode og systemdesign med kritt under møter"],
      explanation: "Kanban visualiserer arbeidsflyt og begrenser arbeid i gang for a oke fokus og gjennomstrømning.",
    },
    {
      question: "Hva er risikostyring i prosjekter?",
      options: ["A identifisere, analysere og handtere potensielle problemer", "Å alltid velge det aller sikreste alternativet i enhver situasjon", "Å ta bevisste sjanser i prosjektet for å oppnå raskere fremdrift og lavere kostnader", "Å ignorere mindre problemer underveis slik at teamet kan holde full fokus på hovedmålet"],
      explanation: "Risikostyring innebærer a forutse problemer, vurdere sannsynlighet og konsekvens, og planlegge tiltak.",
    },
  ],
  "it-2-8": [
    {
      question: "Hva er et API?",
      options: ["Et grensesnitt som lar ulike programmer kommunisere med hverandre", "Et eget programmeringsspråk laget spesielt for nettbaserte tjenester", "En type database som lagrer og organiserer store mengder strukturert data", "En nettleser som lar brukeren hente og vise innhold fra ulike nettjenester"],
      explanation: "API (Application Programming Interface) definerer hvordan programvare kan utveksle data og funksjonalitet.",
    },
    {
      question: "Hvilken HTTP-metode brukes for a hente data fra et REST API?",
      options: ["GET", "POST", "DELETE", "PUT"],
      explanation: "GET brukes for a hente data. POST oppretter, PUT oppdaterer, DELETE sletter ressurser.",
    },
    {
      question: "Hva er JSON?",
      options: ["Et lettvekt tekstformat for datautveksling", "En metode for å komprimere store datafiler før overføring", "Et programmeringsspråk som brukes til webutvikling", "En database for lagring av strukturert informasjon"],
      explanation: "JSON (JavaScript Object Notation) er et menneske- og maskinlesbart format for a strukturere data, mye brukt i API-er.",
    },
    {
      question: "Hva betyr HTTP-statuskode 404?",
      options: ["Not Found - ressursen finnes ikke", "OK - alt gikk bra", "Serverfeil - noe gikk galt på selve tjeneren", "Uautorisert - brukeren mangler gyldig innlogging"],
      explanation: "404 betyr at den førespurte ressursen ikke finnes påserveren. 200 er OK, 401 uautorisert, 500 serverfeil.",
    },
    {
      question: "Hvabrukes en API-nokkel til?",
      options: ["A identifisere og autentisere klienten som bruker API-et", "Å gjøre forespørslene til API-et vesentlig raskere å behandle", "Å formatere svarene fra API-et om til gyldig og lesbar JSON-struktur", "Å kryptere dataene som sendes mellom klienten og API-et under overføringen"],
      explanation: "API-nokkler identifiserer hvem som bruker tjenesten, begrenser tilgang, og sporer bruk.",
    },
  ],
  "it-2-9": [
    {
      question: "Hva er forskjellen mellom IaaS, PaaS og SaaS?",
      options: ["IaaS gir infrastruktur, PaaS gir plattform for utvikling, SaaS gir ferdig programvare", "IaaS og PaaS er to navn på nøyaktig den samme tjenesten", "IaaS er den klart dyreste modellen fordi leverandøren styrer hele infrastrukturen for deg", "SaaS krever mest teknisk kunnskap fordi brukeren selv må sette opp servere og operativsystem"],
      explanation: "IaaS: Du styrer alt over infrastrukturen. PaaS: Du fokuserer påkode. SaaS: Du bare bruker ferdig software.",
    },
    {
      question: "Hva gjør en load balancer?",
      options: ["Fordeler trafikk mellom flere servere", "Krypterer trafikk", "Krypterer all trafikk som passerer mellom klient og tjener", "Blokkerer angrep"],
      explanation: "Load balancer fordeler innkommende føresporsler for å unngå overbelastning og sikre tilgjengelighet hvis en server svikter.",
    },
    {
      question: "Hva er en CDN (Content Delivery Network)?",
      options: ["Et nettverk som lagrer innhold nær brukerne for raskere levering", "En sikkerhetsløsning som beskytter serveren mot angrep utenfra", "En type database som lagrer nettsidens innhold sentralt", "Et programmeringsspråk for å bygge dynamiske nettsider"],
      explanation: "CDN cacher statisk innhold (bilder, videoer, CSS) påservere over hele verden for raskere lasting.",
    },
    {
      question: "Hva er serverless computing?",
      options: ["A kjøre kode uten a administrere servere, betaler kun nårkoden kjører", "Å kjøre programmene helt uten et operativsystem, direkte på maskinvaren", "Å bruke utelukkende lokale, fysiske servere i eget serverrom fremfor tjenester i skyen", "Å utvikle programvare offline på egen datamaskin før den til slutt lastes opp til en server"],
      explanation: "Serverless (som AWS Lambda) lar deg fokusere påkode mens skyleverandoren handterer all infrastruktur og skalering.",
    },
    {
      question: "Hvilke store skyleverandører finnes?",
      options: ["AWS, Microsoft Azure, Google Cloud Platform", "Det finnes ingen store leverandører", "Bare mindre, lokale selskaper som drifter servere for én enkelt landsdel", "Bare offentlige etater tilbyr sky"],
      explanation: "De tre store er Amazon Web Services (AWS), Microsoft Azure og Google Cloud Platform (GCP).",
    },
  ],
  "it-2-10": [
    {
      question: "Hvordan har IT påvirket arbeidslivet?",
      options: ["Nye yrker har oppstatt, noen har forsvunnet, hjemmekontor har blitt vanligere", "Alle jobber hjemmefra na", "Ingen reell endring, ettersom arbeidsoppgavene stort sett utføres på samme måte som før", "Alle jobber nå utelukkende hjemmefra siden fysiske arbeidsplasser har blitt overflødige"],
      explanation: "IT har skapt nye yrker (f.eks. dataingeniorer), automatisert rutineoppgaver, og muliggjørt fleksibelt arbeid.",
    },
    {
      question: "Hva er IoT (Internet of Things)?",
      options: ["Nettverk av fysiske enheter som er koblet til internett og kan utveksle data", "En form for kunstig intelligens som lærer av data uten menneskelig styring", "Et sosialt nettverk der brukere deler bilder og meldinger med hverandre", "En programmeringsmetode for å strukturere kode i gjenbrukbare moduler"],
      explanation: "IoT inkluderer smarte enheter som termostater, klokker og sensorer som kommuniserer over internett.",
    },
    {
      question: "Hvilke etiske problemstillinger reiser AI?",
      options: ["Bias, personvern, jobbautomatisering, ansvar for beslutninger", "Bare økonomiske kostnader", "Ingen reelle problemstillinger, ettersom AI er nøytral teknologi uten samfunnsmessige følger", "Utelukkende tekniske problemer knyttet til maskinvare, minnebruk og treningstid for modellene"],
      explanation: "AI-etikk omfatter skjevhet i algoritmer, overvaking, erstatning av jobber, og hvem som er ansvårlig nårAI tar feil.",
    },
    {
      question: "Hva er digitalt utenforskap?",
      options: ["At grupper faller utenfor fordi de mangler digital kompetanse eller tilgang", "At eldre teknologi som faks fortsatt brukes i deler av offentlig sektor i dag", "Å bevisst velge bort sosiale medier for å skjerme seg mot reklame og overvåking", "Å frivillig la være å bruke teknologi selv om man både mestrer den og har full tilgang"],
      explanation: "Digitalt utenforskap rammer de som ikke mestrer eller har tilgang til teknologi samfunnet forutsetter.",
    },
    {
      question: "Hva er barekraftig IT?",
      options: ["A utvikle og bruke teknologi påen mate som tar hensyn til miljø og ressursbruk", "A kjøpe ny teknologi ofte", "Å bruke mye strøm på kraftig maskinvare for å oppnå best mulig ytelse i systemene", "Å kjøpe ny teknologi ofte slik at man alltid har de nyeste og raskeste komponentene"],
      explanation: "Barekraftig IT handler om energieffektivitet, resirkulering av elektronikk, og redusert ressursforbruk i hele livssyklusen.",
    },
  ],
};

export default quizData_it;
