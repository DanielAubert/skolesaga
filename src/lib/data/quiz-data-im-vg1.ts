import type { QuizQuestion } from './quiz-data';

const quizData_im_vg1: Record<string, QuizQuestion[]> = {
  "im-vg1-1-1": [
    {
      question: "Hva er hovedoppgaven til CPU-en i en datamaskin?",
      options: ["Å utføre alle beregninger og instruksjoner som programmene krever", "Å lagre filer permanent når maskinen er av", "Å tegne opp og oppdatere bildet som vises på skjermen med riktige farger og oppløsning fortløpende", "Å koble maskinen til internett"],
      explanation: "CPU (Central Processing Unit) er datamaskinens «hjerne» og utfører alle beregninger og instruksjoner. Ytelsen måles i klokkehastighet (GHz) og antall kjerner.",
    },
    {
      question: "Hva kjennetegner RAM (arbeidsminne)?",
      options: ["Det er raskt korttidsminne der innholdet forsvinner når maskinen slås av", "Det lagrer data permanent også uten strøm", "Det er en enhet som styrer skjermbildet og bestemmer oppløsningen på det som vises til brukeren", "Det er en tregere type minne enn harddisken, men til gjengjeld helt sikret mot at innholdet forsvinner"],
      explanation: "RAM er raskt korttidsminne (arbeidsminne) og er flyktig - alt innhold forsvinner når maskinen slås av.",
    },
    {
      question: "Hva betyr det at RAM er «flyktig»?",
      options: ["Innholdet forsvinner når strømmen slås av", "Det kan flytte seg fysisk i maskinen", "At det kan lagre nærmest uendelig mye data fordi innholdet komprimeres automatisk før det skrives", "Det kan lagre uendelig mye data"],
      explanation: "At RAM er flyktig betyr at innholdet forsvinner når maskinen slås av - derfor må data lagres på en disk for å bevares.",
    },
    {
      question: "Hva måles ytelsen til en CPU blant annet i?",
      options: ["Klokkehastighet (GHz) og antall kjerner", "Antall gigabyte lagringsplass", "Skjermoppløsningen målt i piksler, altså hvor mange bildepunkter skjermen kan vise samtidig totalt", "Skjermoppløsning"],
      explanation: "CPU-ens ytelse måles i klokkehastighet (GHz) og antall kjerner som kan jobbe parallelt.",
    },
    {
      question: "Hvorfor lastes et program fra disken og inn i RAM når du åpner det?",
      options: ["Fordi RAM er mye raskere å lese fra enn disken", "Fordi RAM lagrer data permanent", "Fordi CPU-en ikke er i stand til å lese direkte fra disken og trenger RAM som eneste mulige mellomlager", "Fordi CPU ikke kan lese disken"],
      explanation: "Programmer lastes inn i RAM fordi RAM er mye raskere å lese fra enn en harddisk, slik at programmet kjører raskt.",
    },
  ],
  "im-vg1-1-2": [
    {
      question: "Hva er et operativsystem?",
      options: ["Systemprogramvare som er et mellomledd mellom maskinvaren og brukeren", "Et tekstbehandlingsprogram", "Et tekstbehandlingsprogram brukeren åpner for å skrive dokumenter, brev og rapporter med formatering", "En nettleser man installerer for å kunne åpne nettsider og søke etter informasjon på internett raskt"],
      explanation: "Et operativsystem er systemprogramvare som fungerer som mellomledd mellom maskinvaren og brukeren, og styrer maskinvaren, gir brukergrensesnitt og kjører programmer.",
    },
    {
      question: "Hvilken av disse er en av operativsystemets hovedoppgaver?",
      options: ["Å styre maskinvaren som CPU, minne og lagring", "Å lage nettsider", "Å redigere video ved å klippe sammen opptak, legge til overganger og eksportere ferdig film til fil", "Å designe logoer"],
      explanation: "Operativsystemet styrer maskinvaren (CPU, minne, lagring, enheter), gir et brukergrensesnitt og kjører programmer.",
    },
    {
      question: "Hva er et eksempel på et operativsystem?",
      options: ["Windows", "Microsoft Word", "Google Chrome", "Photoshop"],
      explanation: "Windows er et operativsystem. Word, Chrome og Photoshop er applikasjonsprogramvare som kjører oppå operativsystemet.",
    },
    {
      question: "Hva brukes et filsystem til?",
      options: ["Å organisere og holde orden på filer og mapper på en lagringsenhet", "Å vise farger på skjermen", "Å bestemme hvilke farger og hvilken oppløsning skjermen skal vise bildene og teksten med til brukeren", "Å koble maskinen til internett og holde nettverksforbindelsen stabil mens dataene overføres begge veier"],
      explanation: "Filsystemet organiserer hvordan filer og mapper lagres og hentes på en lagringsenhet, slik at brukeren kan finne igjen dataene sine.",
    },
    {
      question: "Hva er forskjellen på en grafisk og en tekstbasert brukergrensesnitt?",
      options: ["Grafisk bruker vinduer og ikoner, tekstbasert bruker skrevne kommandoer", "Tekstbasert er alltid raskere maskinvare", "Grafisk grensesnitt fungerer bare når musa er koblet fra, mens tastaturet styrer alt som skjer på skjermen", "De er egentlig helt like og gir nøyaktig samme opplevelse, bare med litt ulike navn på de samme funksjonene"],
      explanation: "Et grafisk grensesnitt (GUI) bruker vinduer, ikoner og mus, mens et tekstbasert grensesnitt (kommandolinje) styres med skrevne kommandoer.",
    },
  ],
  "im-vg1-1-3": [
    {
      question: "Hva er systemprogramvare?",
      options: ["Programvare som styrer og administrerer maskinvaren, som operativsystemer og drivere", "Spill og tekstbehandlere", "Nettsider som lastes inn i nettleseren og viser tekst, bilder og lenker for den som besøker en adresse", "Spill, tekstbehandlere og andre programmer som brukeren åpner og jobber direkte med for å løse oppgaver"],
      explanation: "Systemprogramvare styrer og administrerer maskinvaren - operativsystemer, drivere og diskverktøy er eksempler. Brukeren jobber sjelden direkte med den.",
    },
    {
      question: "Hva er applikasjonsprogramvare?",
      options: ["Programmer brukeren jobber direkte med for å utføre oppgaver, som tekstbehandlere og nettlesere", "Drivere for maskinvaren", "Selve operativsystemet som styrer maskinvaren, gir brukergrensesnitt og starter opp når maskinen slås på", "BIOS, den lavnivåkoden som ligger på hovedkortet og starter maskinen før operativsystemet lastes inn i minnet"],
      explanation: "Applikasjonsprogramvare («apper») er programmene brukeren jobber direkte med, f.eks. tekstbehandlere, nettlesere og bilderedigering.",
    },
    {
      question: "Hva kjennetegner åpen kildekode (open source)?",
      options: ["Kildekoden er fritt tilgjengelig slik at hvem som helst kan se, endre og dele den", "Det kan bare brukes av store bedrifter", "At programmet alltid er dyrt å kjøpe fordi utviklerne krever betaling for hver eneste kopi som distribueres", "At kildekoden holdes hemmelig og lukket, slik at bare utvikleren selv har innsyn i hvordan programmet fungerer"],
      explanation: "Åpen kildekode betyr at kildekoden er fritt tilgjengelig, slik at brukere kan se, endre og dele den, ofte gratis.",
    },
    {
      question: "Hva er en programvarelisens?",
      options: ["En juridisk avtale som bestemmer hvordan programvaren kan brukes", "En nettverksprotokoll", "En nettverksprotokoll som bestemmer hvordan datapakker sendes og mottas mellom maskiner på et lokalnett", "En fil som inneholder bilder og grafikk som programmet bruker til å bygge opp brukergrensesnittet på skjermen"],
      explanation: "En lisens er en juridisk avtale som bestemmer hvordan programvaren kan brukes, kopieres og distribueres.",
    },
    {
      question: "Hva betyr det at programvare er proprietær?",
      options: ["Kildekoden er lukket og eies av en bedrift som styrer bruken", "Den fungerer bare uten lisens", "At den bare fungerer uten lisens og derfor kan installeres på ubegrenset antall maskiner helt uten avtale", "Alle kan endre koden fritt"],
      explanation: "Proprietær programvare har lukket kildekode og eies av en bedrift som styrer hvordan den kan brukes - i motsetning til åpen kildekode.",
    },
  ],
  "im-vg1-1-4": [
    {
      question: "Hva er nettskyen (cloud computing)?",
      options: ["Levering av IT-tjenester over internett der du leier kapasitet i stedet for egne servere", "En type lokal harddisk", "En nettleser man bruker for å åpne nettsider, og som lagrer alt innhold direkte på maskinens egen disk", "En type lokal harddisk som monteres inne i maskinen for å gi ekstra lagringsplass til filer og programmer"],
      explanation: "Nettskyen er levering av IT-tjenester over internett. I stedet for egne servere leier du kapasitet fra leverandører som Azure, AWS eller Google Cloud, og betaler for det du bruker.",
    },
    {
      question: "Hva er en fordel med skyteknologi?",
      options: ["Du slipper å kjøpe og drifte egne servere og betaler kun for det du bruker", "Du må alltid eie all maskinvaren selv", "Det krever ingen internettforbindelse i det hele tatt, fordi alt kjøres og lagres lokalt på din egen maskin", "Du må alltid eie og drifte all maskinvaren selv, men slipper å betale for strømmen serverne bruker underveis"],
      explanation: "En fordel med nettskyen er at du slipper å kjøpe og drifte egne servere og betaler bare for kapasiteten du faktisk bruker.",
    },
    {
      question: "Hvilken av disse er en stor leverandør av skytjenester?",
      options: ["Amazon (AWS)", "Adobe Photoshop", "Mozilla Firefox", "VLC Media Player"],
      explanation: "Amazon Web Services (AWS) er en av de store skyleverandørene, sammen med Microsoft Azure og Google Cloud.",
    },
    {
      question: "Hva er en ulempe ved å være avhengig av skytjenester?",
      options: ["Du trenger en stabil internettforbindelse for å nå dataene", "Du må kjøpe ny CPU hver dag", "Det blir helt umulig å samarbeide med andre, siden bare én person kan være pålogget tjenesten om gangen", "Det er umulig å samarbeide"],
      explanation: "En ulempe ved skytjenester er at du er avhengig av en stabil internettforbindelse for å få tilgang til dataene og tjenestene.",
    },
    {
      question: "Hva menes med en nettbasert tjeneste?",
      options: ["En tjeneste du bruker gjennom nettleser eller app uten å installere alt lokalt", "Et program som bare kjører uten internett", "En fysisk server du selv eier og drifter hjemme, og som må stå påslått hele døgnet for at andre skal nå den", "Et program som utelukkende kjører lokalt uten internett og lagrer alle dataene sine direkte på din egen disk"],
      explanation: "En nettbasert tjeneste kjøres via internett gjennom nettleser eller app, slik at du ikke trenger å installere og drifte alt lokalt.",
    },
  ],
  "im-vg1-1-5": [
    {
      question: "Hva er synkron kommunikasjon?",
      options: ["Kommunikasjon i sanntid der alle deltakere er til stede samtidig", "Kommunikasjon med tidsforsinkelse", "Kommunikasjon som bare kan foregå skriftlig gjennom meldinger og e-post, aldri med tale eller video samtidig", "Kommunikasjon uten internett"],
      explanation: "Synkron kommunikasjon skjer i sanntid - alle deltakere er til stede samtidig, f.eks. videokonferanse eller telefonsamtale. Fordelen er umiddelbar tilbakemelding.",
    },
    {
      question: "Hva er asynkron kommunikasjon?",
      options: ["Kommunikasjon med tidsforsinkelse der deltakerne ikke trenger å være til stede samtidig", "Kommunikasjon som krever telefon", "Kommunikasjon som utelukkende foregår gjennom videosamtaler der partene ser og hører hverandre direkte", "Kommunikasjon som alltid krever at man bruker telefon, slik at begge parter må ringe hverandre på samme tid"],
      explanation: "Asynkron kommunikasjon skjer med tidsforsinkelse - mottakeren svarer når det passer. E-post er et typisk eksempel.",
    },
    {
      question: "Hvilket eksempel er synkron kommunikasjon?",
      options: ["En videokonferanse", "En e-post", "Et innlegg på en oppslagstavle", "En brevpost"],
      explanation: "En videokonferanse er synkron fordi alle deltar samtidig i sanntid. E-post og oppslagstavler er asynkrone.",
    },
    {
      question: "Hva er en fordel med asynkron kommunikasjon?",
      options: ["Deltakerne kan svare når det passer dem, uavhengig av tidssoner", "Det krever at alle er pålogget samtidig", "Alle deltakerne får svar helt umiddelbart, fordi meldingene leveres og besvares i samme øyeblikk de sendes", "Det fungerer bare på telefon"],
      explanation: "En fordel med asynkron kommunikasjon er fleksibilitet - deltakerne kan lese og svare når det passer, noe som er nyttig på tvers av tidssoner.",
    },
    {
      question: "Hva er et eksempel på et digitalt samarbeidsverktøy?",
      options: ["Et delt dokument flere kan redigere samtidig", "En frittstående kalkulator", "En vanlig papirblokk der man skriver ned notater for hånd og deler dem videre ved å rekke den til andre", "En vanlig papirblokk"],
      explanation: "Delte dokumenter der flere kan skrive samtidig (f.eks. i skyen) er typiske digitale samarbeidsverktøy.",
    },
  ],
  "im-vg1-1-6": [
    {
      question: "Hva er den minste dataenheten i en datamaskin?",
      options: ["En bit, som kan være 0 eller 1", "En kilobyte", "En byte, som er satt sammen av åtte enkeltverdier og danner grunnlaget for hvordan tegn lagres i maskinen", "En megabyte"],
      explanation: "En bit er den minste dataenheten og kan ha verdien 0 eller 1.",
    },
    {
      question: "Hvor mange bit er det i én byte?",
      options: ["8 bit", "4 bit", "16 bit", "2 bit"],
      explanation: "Én byte består av 8 bit og kan representere $2^8 = 256$ ulike verdier (0-255).",
    },
    {
      question: "Hvor mange ulike verdier kan én byte representere?",
      options: ["256", "8", "128", "512"],
      explanation: "Én byte (8 bit) kan representere $2^8 = 256$ ulike verdier, fra 0 til 255.",
    },
    {
      question: "Hva er tallet 5 (titallssystemet) skrevet i binær (totallssystemet)?",
      options: ["101", "110", "011", "111"],
      explanation: "Binært er $5 = 4 + 1 = 1·2^2 + 0·2^1 + 1·2^0 = 101$.",
    },
    {
      question: "Hvilket tallsystem bruker datamaskiner internt for å representere data?",
      options: ["Det binære (totallssystemet)", "Det desimale (titallssystemet)", "Romertall", "Brøker"],
      explanation: "Datamaskiner representerer alt internt i det binære systemet (0 og 1), fordi elektronikken bygger på to tilstander (av/på).",
    },
  ],
  "im-vg1-1-7": [
    {
      question: "Hva er digitalisering?",
      options: ["Prosessen der analoge prosesser og tjenester gjøres digitale og endrer hvordan vi arbeider", "Å skrive ut dokumenter på papir", "Å kjøpe inn en ny og kraftigere datamaskin med raskere CPU og mer minne enn den forrige maskinen hadde", "Å skrive ut digitale dokumenter på papir slik at de kan arkiveres fysisk i permer og leses uten skjerm"],
      explanation: "Digitalisering er prosessen der analoge prosesser og tjenester gjøres digitale, og handler om at teknologien endrer hvordan vi organiserer arbeid, kommunikasjon og tjenester.",
    },
    {
      question: "Hva er et eksempel på digitalisering?",
      options: ["Papiravis ble til nettavis", "En bok blir trykt på papir", "Et brev sendes med post", "En lyspære byttes"],
      explanation: "At papiravisen ble til nettavis er et klassisk eksempel på digitalisering - en analog tjeneste gjøres digital.",
    },
    {
      question: "Hvordan kan digitalisering påvirke arbeidslivet?",
      options: ["Noen oppgaver automatiseres, mens nye yrker og arbeidsmåter oppstår", "Alle jobber forsvinner umiddelbart", "Bare lønningene øker for alle ansatte, mens selve oppgavene og måten man jobber på forblir helt uendret", "Alle jobber forsvinner umiddelbart fordi maskinene overtar samtlige oppgaver mennesker tidligere utførte selv"],
      explanation: "Digitalisering automatiserer noen oppgaver, men skaper også nye yrker og endrer hvordan vi arbeider og samarbeider.",
    },
    {
      question: "Hva er en utfordring ved økt digitalisering i samfunnet?",
      options: ["Digitalt utenforskap for dem som ikke behersker teknologien", "At alt blir billigere uten ulemper", "At ingen lenger bruker internett, fordi tjenestene flyttes tilbake til papir og fysiske skranker over tid", "At ingen lenger bruker internett"],
      explanation: "En utfordring er digitalt utenforskap - at noen grupper ikke behersker eller har tilgang til teknologien og dermed havner utenfor.",
    },
    {
      question: "Hva handler digitalisering først og fremst om, ut over selve teknologien?",
      options: ["Å endre måten vi organiserer arbeid, kommunikasjon og tjenester på", "Å kjøpe mest mulig utstyr", "Å unngå all form for endring i rutinene, slik at de ansatte kan jobbe akkurat som de alltid har gjort før", "Å redusere internettbruken på arbeidsplassen, slik at de ansatte konsentrerer seg bedre om oppgavene sine"],
      explanation: "Digitalisering handler ikke bare om å ta i bruk ny teknologi, men om hvordan teknologien endrer måten vi organiserer arbeid, kommunikasjon og tjenester på.",
    },
  ],
  "im-vg1-2-1": [
    {
      question: "Hva handler programmering om?",
      options: ["Å gi datamaskinen presise instruksjoner for å løse oppgaver", "Å tegne bilder for hånd", "Å koble maskinen til internett og sette opp nettverket slik at flere enheter kan kommunisere med hverandre", "Å reparere maskinvare"],
      explanation: "Programmering handler om å gi datamaskinen presise, steg-for-steg-instruksjoner for å løse oppgaver.",
    },
    {
      question: "Hvilket programmeringsspråk brukes i dette kurset fordi det er allsidig og nybegynnervennlig?",
      options: ["Python", "C++", "Java", "Assembly"],
      explanation: "Python er allsidig og nybegynnervennlig, og er språket som brukes i dette kurset.",
    },
    {
      question: "Hva er et programmeringsspråk som ofte brukes for å lage interaktive nettsider?",
      options: ["JavaScript", "Python", "COBOL, mye brukt i eldre banksystemer", "COBOL"],
      explanation: "JavaScript er språket som typisk brukes for å lage interaktive nettsider i nettleseren.",
    },
    {
      question: "Hva er en IDE?",
      options: ["Et utviklingsmiljø med kodeeditor, syntaksfarging og kjøremiljø", "En nettverksprotokoll", "En nettverksprotokoll som bestemmer hvordan kildekoden overføres mellom utviklerens maskin og en server", "En fysisk maskinvarekomponent som settes inn i maskinen for å øke hastigheten når man utvikler programmer"],
      explanation: "En IDE (Integrated Development Environment) er et utviklingsmiljø som gir kodeeditor med syntaksfarging, autofullføring og kjøremiljø, f.eks. VS Code eller Thonny.",
    },
    {
      question: "Hvilken kommando brukes i Python for å skrive ut tekst til skjermen?",
      options: ["print()", "echo()", "write()", "show()"],
      explanation: "I Python brukes funksjonen `print()` for å skrive ut tekst og verdier til skjermen.",
    },
  ],
  "im-vg1-2-2": [
    {
      question: "Hva er en variabel?",
      options: ["En navngitt beholder for å lagre data i et program", "Et programmeringsspråk", "En feilmelding som vises når programmet stopper uventet", "Et eget programmeringsspråk brukt til å lagre data på disk"],
      explanation: "En variabel er som en navngitt boks der du lagrer verdier - en navngitt beholder for data i et program.",
    },
    {
      question: "Hvilken datatype representerer et heltall i Python?",
      options: ["int", "str", "float", "bool"],
      explanation: "I Python er `int` datatypen for heltall, `float` for desimaltall, `str` for tekst og `bool` for boolske verdier.",
    },
    {
      question: "Hva blir resultatet av `7 * 3` i Python?",
      options: ["21", "10", "4", "73"],
      explanation: "Operatoren `*` betyr multiplikasjon, så `7 * 3` blir 21.",
    },
    {
      question: "Hvilken datatype brukes for tekst i Python?",
      options: ["str (streng)", "float", "bool (tekstverdi)", "float (desimaltekst)"],
      explanation: "Datatypen `str` (string/streng) brukes for tekst i Python, f.eks. \"Hei\".",
    },
    {
      question: "Hva representerer datatypen bool?",
      options: ["Boolske verdier: True eller False", "Desimaltall med komma, som 3.14", "Ordnede lister med flere elementer", "Tekststrenger skrevet i anførselstegn"],
      explanation: "Datatypen `bool` representerer boolske verdier - sant (`True`) eller usant (`False`).",
    },
  ],
  "im-vg1-2-3": [
    {
      question: "Hva brukes en if-setning til?",
      options: ["Å kjøre kode bare hvis en betingelse er sann", "Å gjenta kode mange ganger", "Å lagre data i en variabel for senere bruk i programmet", "Å gjenta den samme kodeblokken mange ganger etter hverandre"],
      explanation: "En `if`-setning utfører kode bare hvis betingelsen er sann, slik at programmet kan ta beslutninger.",
    },
    {
      question: "Hvilken operator brukes for å sammenligne om to verdier er like i Python?",
      options: ["==", "=", "!=", "<>"],
      explanation: "Operatoren `==` sammenligner om to verdier er like, mens `=` brukes for tilordning av verdier til variabler.",
    },
    {
      question: "Hva gjør den logiske operatoren `and`?",
      options: ["Gir True bare hvis begge betingelsene er sanne", "Gir True hvis minst én betingelse er sann", "Gir True dersom minst én av betingelsene er sann", "Gjentar en kodeblokk så lenge betingelsen holder"],
      explanation: "Operatoren `and` gir `True` bare når begge betingelsene er sanne. `or` gir True hvis minst én er sann.",
    },
    {
      question: "Hva brukes `elif` til i Python?",
      options: ["Å teste en ny betingelse hvis den forrige var usann", "Å definere en variabel", "Å definere en ny variabel som brukes videre i programmet", "Å avslutte hele programmet umiddelbart uansett betingelse"],
      explanation: "`elif` (else if) tester en ny betingelse dersom den foregående `if`-betingelsen var usann.",
    },
    {
      question: "Hvilken operator betyr «ulik» i Python?",
      options: ["!=", "==", "><", "=!"],
      explanation: "Operatoren `!=` betyr «ikke lik» (ulik) i Python.",
    },
  ],
  "im-vg1-2-4": [
    {
      question: "Hva brukes løkker til i programmering?",
      options: ["Å gjenta kode flere ganger", "Å lagre data permanent", "Å lagre data permanent på harddisken", "Å koble til internett"],
      explanation: "Løkker brukes til å gjenta kode et bestemt antall ganger eller så lenge en betingelse er sann.",
    },
    {
      question: "Hva itererer en for-løkke vanligvis over?",
      options: ["En sekvens, som range() eller en liste", "En feilmelding som stopper programmet", "En funksjon som returnerer et resultat", "En enkelt variabel med én fast verdi"],
      explanation: "En `for`-løkke itererer over en sekvens, f.eks. `range()` eller en liste, og kjører koden for hvert element.",
    },
    {
      question: "Hvor mange ganger kjører løkka `for i in range(5):`?",
      options: ["5 ganger (i blir 0, 1, 2, 3, 4)", "1 gang (i blir bare tallet 5)", "6 ganger (i blir 0, 1, 2, 3, 4, 5)", "4 ganger (i blir 1, 2, 3, 4)"],
      explanation: "`range(5)` gir tallene 0, 1, 2, 3, 4 - altså fem verdier - så løkka kjører 5 ganger.",
    },
    {
      question: "Hva gjør `break` i en løkke?",
      options: ["Avbryter og stopper løkka helt", "Hopper over ett gjennomløp og fortsetter", "Starter løkka på nytt", "Gjentar siste linje"],
      explanation: "`break` stopper løkka helt og hopper ut av den, mens `continue` hopper over resten av gjeldende gjennomløp og fortsetter med neste.",
    },
    {
      question: "Når kjører en while-løkke?",
      options: ["Så lenge betingelsen er sann", "Alltid nøyaktig én gang", "Bare når en tilhørende liste er helt tom", "Bare når listen er tom"],
      explanation: "En `while`-løkke kjører så lenge betingelsen er sann, og stopper når den blir usann.",
    },
  ],
  "im-vg1-2-5": [
    {
      question: "Hva er en funksjon i programmering?",
      options: ["En gjenbrukbar kodeblokk som utfører en bestemt oppgave", "En type variabel som kan endres underveis i programmet", "En feilmelding som vises når koden ikke kan kjøres", "En datatype som lagrer flere verdier samtidig"],
      explanation: "En funksjon er en gjenbrukbar kodeblokk som utfører en bestemt oppgave, definert én gang og kalt så mange ganger du vil.",
    },
    {
      question: "Hvilket nøkkelord brukes for å definere en funksjon i Python?",
      options: ["def", "func", "function", "define"],
      explanation: "I Python defineres en funksjon med nøkkelordet `def`, f.eks. `def hilsen(navn):`.",
    },
    {
      question: "Hva er en parameter?",
      options: ["En verdi som sendes inn i en funksjon", "En feilmelding fra programmet", "En type løkke som gjentar koden i en funksjon", "En feilmelding som funksjonen viser ved feil bruk"],
      explanation: "En parameter er en verdi som sendes inn i en funksjon for at den skal kunne jobbe med ulike data.",
    },
    {
      question: "Hva gjør nøkkelordet `return` i en funksjon?",
      options: ["Sender en verdi tilbake fra funksjonen", "Avslutter hele programmet med en gang", "Gjentar funksjonen fra begynnelsen på nytt", "Definerer en ny variabel inne i funksjonen"],
      explanation: "`return` sender en verdi tilbake fra funksjonen til der den ble kalt, slik at resultatet kan brukes videre.",
    },
    {
      question: "Hvorfor er det nyttig å dele opp kode i funksjoner (modularisering)?",
      options: ["Koden blir mer oversiktlig og kan gjenbrukes", "Det fjerner behovet for variabler", "Det skaper flere feil fordi koden splittes opp i flere deler", "Programmet blir alltid tregere"],
      explanation: "Modularisering med funksjoner gjør koden mer oversiktlig, lettere å vedlikeholde og gjenbrukbar, slik at du slipper å skrive samme kode flere ganger.",
    },
  ],
  "im-vg1-2-6": [
    {
      question: "Hva er en liste i Python?",
      options: ["En ordnet, foranderlig samling av elementer opprettet med hakeparenteser", "En enkelt tallverdi som lagres i en variabel med tilordning", "En feilmelding som oppstår når man bruker feil hakeparentes", "En navngitt funksjon som kjøres når den blir kalt i koden"],
      explanation: "En liste er en ordnet, foranderlig samling av elementer, opprettet med hakeparenteser `[]`. Elementer kan legges til, fjernes og endres.",
    },
    {
      question: "Hvilket element returnerer `elever[0]` for listen `elever = [\"Anna\", \"Bjørn\", \"Camilla\"]`?",
      options: ["\"Anna\"", "\"Bjørn\"", "\"Camilla\"", "Det første som er null"],
      explanation: "Indeksering starter på 0, så `elever[0]` er det første elementet, \"Anna\".",
    },
    {
      question: "Hva lagrer en ordbok (dictionary)?",
      options: ["Nøkkel-verdi-par", "Bare tall", "Bare tekst i rekkefølge", "Funksjoner"],
      explanation: "En ordbok (dictionary) lagrer data som nøkkel-verdi-par, der du slår opp en verdi ved hjelp av nøkkelen.",
    },
    {
      question: "Hvilken metode legger til et element på slutten av en liste i Python?",
      options: ["append()", "remove()", "pop()", "len()"],
      explanation: "`append()` legger til et nytt element på slutten av listen. `remove()` fjerner et element og `len()` gir antallet.",
    },
    {
      question: "Hva returnerer `len(elever)` for en liste med tre elementer?",
      options: ["3", "2", "0", "Det siste elementet"],
      explanation: "`len()` returnerer antallet elementer i listen - her 3.",
    },
  ],
  "im-vg1-2-7": [
    {
      question: "Hva er en algoritme?",
      options: ["En trinnvis oppskrift for å løse et problem", "Et programmeringsspråk", "Et programmeringsspråk laget for å beskrive løsninger", "En feilmelding som vises når koden ikke løser problemet"],
      explanation: "En algoritme er en steg-for-steg-oppskrift for å løse et problem.",
    },
    {
      question: "Hva er pseudokode?",
      options: ["En beskrivelse av en algoritme med vanlig tekst, uavhengig av programmeringsspråk", "En feilmelding som oppstår når algoritmen er skrevet feil i koden", "En type maskinvare som brukes til å planlegge algoritmer raskere", "Et eget programmeringsspråk som kjøres direkte av datamaskinen"],
      explanation: "Pseudokode beskriver en algoritme med vanlig, strukturert tekst, uavhengig av et bestemt programmeringsspråk, for å planlegge løsningen.",
    },
    {
      question: "Hva gjør et lineært søk?",
      options: ["Sjekker elementene ett etter ett til det finner det det leter etter", "Sletter elementer fra listen mens den søker gjennom den", "Halverer søkeområdet for hvert steg i en sortert liste", "Sorterer listen automatisk før den begynner å lete"],
      explanation: "Et lineært søk går gjennom elementene ett etter ett til det finner målet. I verste fall sjekkes alle n elementer.",
    },
    {
      question: "Hva innebærer algoritmisk tenkning?",
      options: ["Å bryte ned problemer, finne mønstre og lage generelle løsninger", "Å kun gjette svaret uten å tenke gjennom problemet på forhånd", "Å unngå all planlegging og heller prøve seg frem tilfeldig", "Å skrive kode helt tilfeldig og se om den løser problemet"],
      explanation: "Algoritmisk tenkning innebærer å bryte ned problemer i mindre deler, finne mønstre og lage generelle, trinnvise løsninger.",
    },
    {
      question: "Hvorfor bør du planlegge en algoritme før du koder?",
      options: ["Det gjør løsningen tydeligere og reduserer feil", "Det fjerner behovet for testing", "Det gjør koden alltid tregere når den til slutt kjøres", "Det er forbudt å kode uten en godkjent plan på forhånd"],
      explanation: "Å planlegge med pseudokode eller flytskjema gjør løsningen tydeligere og reduserer risikoen for feil før du begynner å kode.",
    },
  ],
  "im-vg1-2-8": [
    {
      question: "Hva er en syntaksfeil?",
      options: ["En feil som bryter med språkets grammatikk, f.eks. manglende kolon", "En feil som likevel gir riktig resultat når koden kjøres", "En maskinvarefeil i prosessoren som stopper programmet", "En internettfeil som gjør at koden ikke kan lastes ned"],
      explanation: "En syntaksfeil bryter med programmeringsspråkets grammatikk (f.eks. manglende kolon eller parentes) og oppdages av Python før kjøring.",
    },
    {
      question: "Hva kjennetegner en logisk feil?",
      options: ["Programmet kjører, men gir feil resultat uten feilmelding", "Programmet nekter å starte og gir en tydelig feilmelding", "Maskinen slår seg av av seg selv mens koden kjører videre", "Internett kobles fra så programmet ikke får hentet data"],
      explanation: "En logisk feil gir feil resultat uten feilmelding, og er derfor vanskeligere å oppdage enn syntaksfeil.",
    },
    {
      question: "Når oppstår en kjøretidsfeil?",
      options: ["Under kjøring, f.eks. ved deling på null", "Når koden er helt riktig", "Før programmet starter, når koden leses inn", "Når koden er helt riktig og fungerer som planlagt"],
      explanation: "En kjøretidsfeil oppstår mens programmet kjører, f.eks. når man prøver å dele på null eller bruke en verdi som ikke finnes.",
    },
    {
      question: "Hva brukes try-except til i Python?",
      options: ["Å håndtere feil som kan oppstå under kjøring uten at programmet krasjer", "Å definere variabler med startverdier før programmet kjører", "Å gjenta en kodeblokk et bestemt antall ganger i en løkke", "Å skrive ut tekst til skjermen når programmet er ferdig"],
      explanation: "`try-except` brukes til feilhåndtering: koden i `try` forsøkes, og hvis det oppstår en feil, fanges den opp i `except` slik at programmet ikke krasjer.",
    },
    {
      question: "Hva er hensikten med enhetstesting?",
      options: ["Å sjekke at enkeltdeler av koden gir riktig resultat", "Å gjøre programmet tregere", "Å koble programmet til internett for å hente testdata", "Å gjøre programmet tregere ved å kjøre ekstra testkode"],
      explanation: "Enhetstesting sjekker systematisk at enkeltdeler (enheter) av koden gir riktig resultat, ofte med `assert`.",
    },
  ],
  "im-vg1-3-1": [
    {
      question: "Hva er klient-tjener-modellen?",
      options: ["En arkitektur der en klient sender forespørsler til en tjener som svarer", "En måte å lagre filer lokalt på maskinen uten nettverk", "Et bildeformat som brukes til å vise nettsider raskere", "En type nettverkskabel som kobler datamaskiner sammen"],
      explanation: "Klient-tjener-modellen er en arkitektur der klienten (f.eks. nettleseren) sender forespørsler til en tjener (server) som behandler dem og sender svar tilbake.",
    },
    {
      question: "Hva er en URL?",
      options: ["Adressen til en ressurs på nettet", "Et programmeringsspråk", "En type maskinvare som kobler PC-en til nettet", "En nettleser som viser frem ressurser fra nettet"],
      explanation: "En URL (Uniform Resource Locator) er adressen til en ressurs på nettet og består bl.a. av protokoll, domene og sti.",
    },
    {
      question: "I URL-en https://www.eksempel.no/nyheter, hva er «https»?",
      options: ["Protokollen", "Fragmentet", "Stien til ressursen", "Domenet"],
      explanation: "I en URL er «https» protokollen, «www.eksempel.no» domenet og «/nyheter» stien.",
    },
    {
      question: "Hvilken rolle har nettleseren i klient-tjener-modellen?",
      options: ["Den er klienten som sender forespørsler", "Den er tjeneren som lagrer nettsidene", "Den er en nettverkskabel som overfører dataene", "Den er en database som holder på alle nettsidene"],
      explanation: "Nettleseren er klienten som sender forespørsler til tjeneren og viser frem svaret (nettsiden).",
    },
    {
      question: "Hva gjør tjeneren (serveren) når den får en forespørsel?",
      options: ["Behandler forespørselen og sender tilbake et svar", "Sletter nettsiden som klienten spurte etter", "Slår av klienten som sendte forespørselen", "Lager en helt ny nettleser til klienten"],
      explanation: "Tjeneren behandler forespørselen fra klienten og sender tilbake et svar, f.eks. den ønskede nettsiden.",
    },
  ],
  "im-vg1-3-2": [
    {
      question: "Hva brukes HTML til?",
      options: ["Å gi struktur og innhold til en nettside", "Å style fargene på en side", "Å lagre og hente data fra en database på tjeneren", "Å lagre data i en database"],
      explanation: "HTML brukes til å gi struktur og innhold til en nettside - overskrifter, avsnitt, lenker, bilder osv. CSS styrer utseende og JavaScript interaktivitet.",
    },
    {
      question: "Hvilke tre deler består et typisk HTML-element av?",
      options: ["Starttag, innhold og lukkingstag", "Variabel, datatype og operator", "Selektor, egenskap og verdi, slik en CSS-regel er bygd opp", "Selektor, egenskap og verdi"],
      explanation: "Et HTML-element består av en starttag (med eventuelle attributter), innhold og en lukkingstag, f.eks. `<p>tekst</p>`.",
    },
    {
      question: "Hva er et selvlukkende element?",
      options: ["Et element uten innhold og uten lukkingstag, som <br>", "Et element med mye tekst", "En CSS-regel som lukker seg selv når stilarket lastes inn", "En JavaScript-funksjon som kaller seg selv når siden åpnes"],
      explanation: "Et selvlukkende element har ikke innhold og trenger ingen lukkingstag, f.eks. `<br>` (linjeskift) eller `<img>`.",
    },
    {
      question: "Hva betyr det at HTML er semantisk?",
      options: ["At taggene beskriver innholdets betydning, som <nav> for navigasjon", "At elementene kjører JavaScript direkte når siden lastes inn", "At taggene inneholder fargekoder som styrer sidens utseende", "At hele koden er skrevet med store bokstaver for lesbarhet"],
      explanation: "Semantisk HTML bruker tagger som beskriver innholdets betydning (f.eks. `<nav>`, `<header>`, `<article>`), noe som er bra for tilgjengelighet og søkemotorer.",
    },
    {
      question: "Hvilken HTML-tag brukes for et avsnitt?",
      options: ["<p>", "<a>", "<img>", "<div>"],
      explanation: "Taggen `<p>` (paragraph) brukes for et avsnitt med tekst.",
    },
  ],
  "im-vg1-3-3": [
    {
      question: "Hva brukes CSS til?",
      options: ["Å style utseendet på en nettside, som farger, skrift og layout", "Å gjøre siden interaktiv med kode", "Å lagre brukerdata og innstillinger i nettleseren mellom besøk", "Å gjøre siden interaktiv med kode som reagerer på klikk og input"],
      explanation: "CSS (Cascading Style Sheets) brukes til å style utseendet på en nettside - farger, skrifttyper, avstander og layout.",
    },
    {
      question: "Hvilke to hoveddeler består en CSS-regel av?",
      options: ["En selektor og en deklarasjonsblokk", "En variabel og en funksjon", "En variabel og en funksjon som beregner en verdi", "En klient og en tjener"],
      explanation: "En CSS-regel består av en selektor (som velger elementene) og en deklarasjonsblokk med egenskaper og verdier.",
    },
    {
      question: "Hva gjør selektoren i en CSS-regel?",
      options: ["Velger hvilke HTML-elementer regelen gjelder for", "Bestemmer fargen direkte", "Kjører JavaScript-koden som er knyttet til elementene", "Bestemmer fargen på elementene direkte uten deklarasjoner"],
      explanation: "Selektoren (f.eks. `h1`) velger hvilke HTML-elementer regelen skal gjelde for.",
    },
    {
      question: "Hvilke fire lag inngår i CSS-boksmodellen?",
      options: ["Innhold, padding, border og margin", "Selektor, egenskap, verdi og tag", "Klient, tjener, protokoll og URL", "Variabel, løkke, funksjon og liste"],
      explanation: "Boksmodellen behandler hvert element som en boks med fire lag: innhold, padding (luft innenfor), border (kant) og margin (luft utenfor).",
    },
    {
      question: "Hva er forskjellen på padding og margin i boksmodellen?",
      options: ["Padding er luft innenfor kanten, margin er luft utenfor kanten", "De betyr det samme, men margin brukes bare på tekstelementer", "Margin er alltid svart, mens padding kan farges med bakgrunn", "Padding er en fargeverdi, mens margin angir kantens tykkelse"],
      explanation: "Padding er avstanden mellom innholdet og kanten (innenfor border), mens margin er avstanden utenfor kanten til andre elementer.",
    },
  ],
  "im-vg1-3-4": [
    {
      question: "Hva er responsivt webdesign?",
      options: ["Design som tilpasser seg ulike skjermstørrelser, fra mobil til skrivebord", "Design som er låst til én fast skjermstørrelse for alle enheter", "En programmeringsfeil som gjør at layouten hopper ved lasting", "En type maskinvare som justerer skjermen etter lysforholdene"],
      explanation: "Responsivt webdesign er en metode der nettsiden tilpasser seg ulike skjermstørrelser, slik at den ser bra ut på både mobil, nettbrett og PC.",
    },
    {
      question: "Hva gjør viewport-meta-taggen?",
      options: ["Forteller nettleseren hvordan siden skal skaleres på mobile enheter", "Lagrer sidens data lokalt på enheten for raskere lasting", "Endrer fargene og bakgrunnen på siden avhengig av enhet", "Kjører JavaScript automatisk når siden åpnes på mobilen"],
      explanation: "Viewport-meta-taggen forteller nettleseren hvordan siden skal skaleres på mobile enheter. Uten den vises skrivebordsversjonen i miniatyr.",
    },
    {
      question: "Hva brukes media queries til i CSS?",
      options: ["Å bruke ulike stiler avhengig av skjermbredde og enhet", "Å spille av lyd og video automatisk ved sidelasting", "Å definere gjenbrukbare variabler for farger og størrelser", "Å lagre filer og bilder i nettleserens hurtigminne"],
      explanation: "Media queries lar deg bruke ulike CSS-regler avhengig av skjermbredde og enhet, som er kjernen i responsivt design.",
    },
    {
      question: "Hva betyr «mobile first» i webdesign?",
      options: ["Å designe for mobilskjermen først og utvide til større skjermer", "Å ignorere mobilbrukere fordi de fleste bruker skrivebord", "Å designe for skrivebordet først og krympe ned til mobil", "At mobilversjonen alltid lastes tregere enn skrivebordet"],
      explanation: "«Mobile first» betyr at man designer for den minste skjermen (mobil) først og deretter utvider designet til større skjermer.",
    },
    {
      question: "Hvorfor er responsivt design viktig?",
      options: ["Fordi brukere besøker nettsider fra mange ulike enheter og skjermstørrelser", "Fordi alle brukere besøker nettsider fra samme skjermstørrelse", "Fordi det gjør siden tregere, men mer stabil på store skjermer", "Fordi det fjerner behovet for HTML og CSS på mobile enheter"],
      explanation: "Responsivt design er viktig fordi brukere besøker nettsider fra mange ulike enheter, og siden må fungere godt på alle skjermstørrelser.",
    },
  ],
  "im-vg1-3-5": [
    {
      question: "Hva brukes JavaScript til på en nettside?",
      options: ["Å gjøre siden interaktiv og reagere på brukerens handlinger", "Å gi siden struktur med overskrifter, avsnitt og lenker", "Å lagre filer permanent på brukerens harddisk uten tillatelse", "Å style fargene, skriften og layouten på hele nettsiden"],
      explanation: "JavaScript brukes til å gjøre nettsider interaktive - reagere på klikk, oppdatere innhold og håndtere brukerhandlinger.",
    },
    {
      question: "Hva er hendelseshåndtering (event handling)?",
      options: ["Å la JavaScript reagere på brukerens handlinger, som klikk", "Å definere sidens HTML-struktur med semantiske tagger", "Å style en knapp med farger og avstander i stilarket", "Å lagre brukerdata i en database på tjenersiden"],
      explanation: "Hendelseshåndtering lar JavaScript reagere på brukerens handlinger (f.eks. klikk) ved å knytte en funksjon til en hendelse.",
    },
    {
      question: "Hvilken metode knytter en funksjon til en hendelse i JavaScript?",
      options: ["addEventListener", "querySelectorAll", "print", "createElement"],
      explanation: "`addEventListener` brukes til å knytte en funksjon til en hendelse, f.eks. et klikk på en knapp.",
    },
    {
      question: "Hva er et eksempel på en hendelse JavaScript kan reagere på?",
      options: ["Et museklikk", "En CSS-farge", "En HTML-tag", "En filendelse"],
      explanation: "Et klikk («click») er en typisk hendelse JavaScript kan reagere på, sammen med tastetrykk, museflytting og lasting av siden.",
    },
    {
      question: "Hva er DOM (Document Object Model)?",
      options: ["En representasjon av nettsiden som JavaScript kan endre", "En type tjener som leverer nettsidene til nettleseren", "En CSS-egenskap som styrer plasseringen av elementer", "Et bildeformat som brukes til grafikk på nettsider"],
      explanation: "DOM er en strukturert representasjon av nettsiden som JavaScript kan lese og endre, slik at innholdet kan oppdateres dynamisk.",
    },
  ],
  "im-vg1-3-6": [
    {
      question: "Hva står WCAG for?",
      options: ["Web Content Accessibility Guidelines", "Wireless Connection Access Gateway", "Web Coding And Graphics, et rammeverk for nettdesign", "World Computer Application Group"],
      explanation: "WCAG står for Web Content Accessibility Guidelines - retningslinjer for tilgjengelig webinnhold, organisert rundt fire prinsipper (POUR).",
    },
    {
      question: "Hva er de fire WCAG-prinsippene (POUR)?",
      options: ["Mulig å oppfatte, mulig å betjene, forståelig og robust", "Python, objekt, utdata og resultat", "Python, objekt, utdata og resultat, som styrer programflyt", "Protokoll, objekt, URL og rute, som styrer nettverkstrafikk"],
      explanation: "POUR står for Perceivable (mulig å oppfatte), Operable (mulig å betjene), Understandable (forståelig) og Robust.",
    },
    {
      question: "Hvorfor trenger bilder alternativ tekst (alt-tekst)?",
      options: ["Slik at skjermlesere kan beskrive bildet for blinde og svaksynte", "For å gjøre bildet større og skarpere på skjermen automatisk", "For å endre fargene i bildet slik at de passer med designet", "For å spare lagringsplass ved å komprimere bildefilen mer"],
      explanation: "Alternativ tekst lar skjermlesere beskrive bildet for blinde og svaksynte brukere, og bidrar til at innholdet er «mulig å oppfatte».",
    },
    {
      question: "Hva er universell utforming?",
      options: ["Å lage løsninger som kan brukes av flest mulig, uavhengig av funksjonsevne", "Å designe innhold utelukkende for store skjermer og skrivebord", "Å fjerne all tekst og bruke bare bilder for enklere forståelse", "Å lage produkter som er tilpasset kun unge og teknologivante"],
      explanation: "Universell utforming handler om å lage produkter og tjenester som kan brukes av flest mulig mennesker, uavhengig av funksjonsevne.",
    },
    {
      question: "Hva er et eksempel på et tilgjengelighetstiltak?",
      options: ["God fargekontrast mellom tekst og bakgrunn", "Bruk av bare små bokstaver", "Å bruke bare små bokstaver for et mer moderne uttrykk", "Å fjerne alle overskrifter for en renere og enklere side"],
      explanation: "God fargekontrast mellom tekst og bakgrunn gjør innholdet lesbart for svaksynte, og er et viktig tilgjengelighetstiltak.",
    },
  ],
  "im-vg1-3-7": [
    {
      question: "Hva er Git?",
      options: ["Et versjonskontrollsystem som sporer endringer i kode", "En nettleser som viser og kjører nettsider lokalt", "Et bildeformat som lagrer grafikk med små filstørrelser", "En type tjener som lagrer og leverer kodefiler til brukere"],
      explanation: "Git er et versjonskontrollsystem som lar deg spore endringer, gå tilbake til tidligere versjoner og eksperimentere i grener (branches).",
    },
    {
      question: "Hva er en fordel med versjonskontroll?",
      options: ["Du kan se hva som ble endret, av hvem og når, og gå tilbake ved behov", "Koden blir automatisk feilfri fordi endringene testes ved lagring", "Du trenger aldri å teste koden fordi historikken fanger opp feil", "Filene blir mindre fordi eldre versjoner slettes automatisk"],
      explanation: "Versjonskontroll lar deg spore endringer (hva, hvem, når), angre ved å gå tilbake til en tidligere versjon, og eksperimentere uten å ødelegge.",
    },
    {
      question: "Hva er en «branch» (gren) i Git?",
      options: ["En separat versjon der du kan eksperimentere uten å ødelegge hovedkoden", "En type feilmelding som vises når koden ikke kan slås sammen", "En CSS-regel som styrer hvordan grener av innhold vises", "En tjener som lagrer de ulike versjonene av prosjektet"],
      explanation: "En branch er en gren der du kan prøve nye ting uten å påvirke hovedkoden, og senere slå sammen endringene hvis de fungerer.",
    },
    {
      question: "Hva betyr det å publisere en nettside?",
      options: ["Å gjøre den tilgjengelig på internett for andre", "Å skrive den ut på papir", "Å skrive den ut på papir for arkivering og distribusjon", "Å slette den fra tjeneren slik at ingen får tilgang lenger"],
      explanation: "Å publisere en nettside betyr å legge den ut på en server slik at den blir tilgjengelig på internett for andre.",
    },
    {
      question: "Hva gjør en «commit» i Git?",
      options: ["Lagrer et øyeblikksbilde av endringene i prosjektet", "Endrer fargen på koden", "Kobler prosjektet til internett slik at det kan publiseres", "Sletter all koden i prosjektet og starter historikken på nytt"],
      explanation: "En commit lagrer et øyeblikksbilde av endringene i prosjektet med en beskrivende melding, slik at historikken kan spores.",
    },
  ],
  "im-vg1-4-1": [
    {
      question: "Hva er designprinsipper?",
      options: ["Grunnleggende regler for å organisere visuelle elementer slik at resultatet kommuniserer tydelig", "Tekniske minimumskrav til maskinvare for å kjøre designverktøy", "Lover og forskrifter om personvern og behandling av persondata", "Regler for hvordan programkode skal skrives og struktureres"],
      explanation: "Designprinsipper er grunnleggende regler og retningslinjer for å organisere visuelle elementer slik at resultatet blir funksjonelt, estetisk og kommuniserer tydelig.",
    },
    {
      question: "Hva handler designprinsippet «kontrast» om?",
      options: ["Å bruke tydelige forskjeller for å skille elementer og skape oppmerksomhet", "Å bruke bare små bokstaver for et mykere og enhetlig uttrykk", "Å gjøre alle elementene like i farge og størrelse for ro", "Å fjerne alle farger og bruke kun svart-hvitt i designet"],
      explanation: "Kontrast handler om å bruke tydelige forskjeller (i farge, størrelse, form) for å skille elementer og lede blikket til det viktige.",
    },
    {
      question: "Hva er hensikten med god komposisjon i design?",
      options: ["Å arrangere elementene slik at budskapet formidles tydelig og helheten blir balansert", "Å bruke flest mulig farger for å fange brukerens oppmerksomhet", "Å skjule budskapet bak dekorative elementer for en ren stil", "Å fylle hele flaten med tekst slik at ingenting går tapt"],
      explanation: "God komposisjon arrangerer de visuelle elementene slik at budskapet kommuniseres tydelig og helheten oppleves balansert og ryddig.",
    },
    {
      question: "Hva bidrar prinsippet «balanse» til i et design?",
      options: ["En følelse av visuell stabilitet ved fordeling av elementer", "At alt blir tilfeldig plassert", "At elementene plasseres tilfeldig for et mer levende uttrykk", "At fargene forsvinner slik at oppmerksomheten rettes mot form"],
      explanation: "Balanse handler om å fordele de visuelle elementene slik at designet føles stabilt og harmonisk, enten symmetrisk eller asymmetrisk.",
    },
    {
      question: "Hvorfor er «nærhet» et nyttig designprinsipp?",
      options: ["Elementer som hører sammen plasseres nær hverandre, så sammenhengen blir tydelig", "Alt skal spres mest mulig", "Alle elementer skal spres jevnt utover hele flaten med lik avstand, uansett innhold", "Beslektet informasjon skjules bak hverandre slig at betrakteren må lete for å finne den"],
      explanation: "Prinsippet om nærhet sier at relaterte elementer bør plasseres nær hverandre, slik at betrakteren ser at de hører sammen.",
    },
  ],
  "im-vg1-4-2": [
    {
      question: "Hva er en fargemodell?",
      options: ["Et matematisk system for å beskrive og reprodusere farger", "En kamerainnstilling", "Et bildeformat som lagrer farge og oppløsning i én komprimert fil", "En innstilling på kameraet som bestemmer hvitbalanse og lysstyrke"],
      explanation: "En fargemodell er et matematisk system for å beskrive og reprodusere farger. Ulike medier bruker ulike modeller.",
    },
    {
      question: "Hvilken fargemodell brukes for skjerm?",
      options: ["RGB", "CMYK", "HSL", "Gråtoner"],
      explanation: "RGB (rød, grønn, blå) brukes for skjerm, fordi skjermen lager farger ved å blande lys. CMYK brukes for trykk.",
    },
    {
      question: "Hvilken fargemodell brukes typisk for trykk?",
      options: ["CMYK", "RGB", "HSL", "Binær"],
      explanation: "CMYK (cyan, magenta, gul og svart) brukes for trykk, der farger lages ved å blande blekk på papir.",
    },
    {
      question: "Hva handler fargepsykologi om?",
      options: ["Hvordan farger påvirker følelser og assosiasjoner hos betrakteren", "Hvordan blekk fordeles og trykkes på papir i en firefargeprosess", "Hvordan man skriver inn fargekoder med heksadesimale verdier i HTML og CSS", "Hvordan skjermen bygger opp lys ved å blande røde, grønne og blå lyspunkter"],
      explanation: "Fargepsykologi handler om hvordan ulike farger påvirker følelser og assosiasjoner - f.eks. at blått ofte oppfattes som rolig og tillitvekkende.",
    },
    {
      question: "Hva er komplementærfarger?",
      options: ["Farger som ligger motsatt hverandre på fargesirkelen og gir sterk kontrast", "Farger som kun kan gjengis korrekt i trykk og ikke lar seg vise på skjerm", "Bare nyanser av svart, hvitt og grått som brukes i klassisk gråtoneuttrykk", "Farger som ligger tett ved hverandre på fargesirkelen og gir en rolig, harmonisk overgang"],
      explanation: "Komplementærfarger ligger motsatt hverandre på fargesirkelen (f.eks. rød og grønn) og gir sterk kontrast når de brukes sammen.",
    },
  ],
  "im-vg1-4-3": [
    {
      question: "Hva er typografi?",
      options: ["Kunsten og teknikken med å arrangere skrift for å gjøre tekst lesbar og tiltalende", "En metode for å komponere og ta bilder med riktig bildeutsnitt og lyssetting", "En nettverksprotokoll som overfører tekstdokumenter mellom klient og tjener", "En programmeringsteknikk for å formatere tekststrenger i en kildekode"],
      explanation: "Typografi er kunsten og teknikken med å arrangere skrift slik at teksten blir lesbar, forståelig og visuelt tiltalende.",
    },
    {
      question: "Hva kjennetegner en serif-skrift?",
      options: ["Den har små «føtter» (seriffer) på bokstavene", "Den brukes bare på skjerm", "Den er laget spesielt for skjermlesing og fungerer dårlig i trykte bøker", "Den har ingen kontraster"],
      explanation: "En serif-skrift har små avsluttende streker («føtter» eller seriffer) på bokstavene, mens sans-serif er uten slike.",
    },
    {
      question: "Hva er linjeavstand (leading) i typografi?",
      options: ["Avstanden mellom tekstlinjer", "Størrelsen på bokstavene", "Høyden på selve bokstavene målt i punkter fra topp til bunn", "Antall ord per linje"],
      explanation: "Linjeavstand (leading) er den vertikale avstanden mellom tekstlinjer, og påvirker hvor lett teksten er å lese.",
    },
    {
      question: "Hvorfor er valg av skrifttype viktig?",
      options: ["Det påvirker lesbarhet og hvilken stemning teksten formidler", "Det bestemmer fargemodellen", "Det bestemmer hvilken fargemodell dokumentet lagres og vises med", "Det har ingen praktisk betydning så lenge teksten er stavet riktig"],
      explanation: "Valg av skrifttype påvirker både lesbarheten og stemningen teksten formidler - en lekende skrift og en seriøs skrift gir ulikt inntrykk.",
    },
    {
      question: "Hva er en god regel for lesbarhet i lengre tekster?",
      options: ["Bruke tilstrekkelig skriftstørrelse og linjeavstand og unngå for lange linjer", "Bruke minst mulig linjeavstand så flest mulig ord får plass på hver side", "Skrive hele teksten med store bokstaver for at den skal virke tydeligere", "Kombinere så mange ulike skrifttyper som mulig for å skape variasjon"],
      explanation: "God lesbarhet oppnås med passe skriftstørrelse, nok linjeavstand og passe linjelengde - for lange linjer og for mange skrifttyper gjør teksten vanskelig å lese.",
    },
  ],
  "im-vg1-4-4": [
    {
      question: "Hva handler komposisjon i fotografering om?",
      options: ["Hvordan elementene er plassert og arrangert i bildet", "Hvilken skjerm man redigerer på", "Hvilket filformat og komprimering bildet lagres i etter redigeringen", "Hvilken skjermtype og kalibrering man redigerer bildet på i etterkant"],
      explanation: "Komposisjon handler om hvordan elementene er plassert og arrangert i bildet, slik at blikket ledes til det viktigste og helheten blir god.",
    },
    {
      question: "Hva er tredelingsregelen (rule of thirds)?",
      options: ["Å dele bildet i tre deler vannrett og loddrett og plassere motivet langs linjene", "Å bruke tre ulike kameraer samtidig for å fange scenen fra flere vinkler", "Å alltid plassere motivet nøyaktig midt i bildet for perfekt symmetri", "Å ta minst tre bilder av hvert motiv og velge det beste i etterkant"],
      explanation: "Tredelingsregelen deler bildet i tre deler vannrett og loddrett, og motivet plasseres langs linjene eller i skjæringspunktene for en mer dynamisk komposisjon.",
    },
    {
      question: "Hva gjør god komposisjon for et bilde?",
      options: ["Styrer betrakterens blikk til det viktigste og skaper en visuell helhet", "Endrer fargemodellen fra RGB til CMYK for bedre gjengivelse i trykk", "Gjør motivet uskarpt slik at bakgrunnen får all oppmerksomheten i bildet", "Reduserer oppløsningen slik at bildet laster raskere på nettsider"],
      explanation: "God komposisjon styrer betrakterens blikk til det viktigste i bildet og skaper en visuell helhet.",
    },
    {
      question: "Hva er ledelinjer i et bilde?",
      options: ["Linjer som leder blikket mot motivet", "Kamerainnstillinger", "Tekst eller bildetekst som legges oppå bildet for å forklare motivet", "Tekst på bildet"],
      explanation: "Ledelinjer er linjer i bildet (f.eks. en vei eller et gjerde) som naturlig leder betrakterens blikk mot motivet.",
    },
    {
      question: "Hva betyr det å fylle rammen?",
      options: ["Å la motivet ta opp en stor del av bildet for å fjerne forstyrrelser", "Å la motivet være lite og langt unna", "Å legge til mye forklarende tekst rundt motivet for å fylle bildeflaten", "Å bruke flest mulig kraftige farger for å gjøre bildet mer iøynefallende"],
      explanation: "Å fylle rammen betyr å la motivet ta opp mye av bildeflaten, slik at unødvendige forstyrrelser i bakgrunnen fjernes og fokus rettes mot motivet.",
    },
  ],
  "im-vg1-4-5": [
    {
      question: "Hva er ikke-destruktiv redigering?",
      options: ["En arbeidsmetode der du endrer bildet uten å ødelegge originalen", "Å ta helt nye bilder hver gang du vil prøve en annen redigering", "Å slette originalbildet etter redigering for å spare lagringsplass", "En metode der du kun kan redigere bildet i svart-hvitt og gråtoner"],
      explanation: "Ikke-destruktiv redigering er en metode der du gjør endringer uten å ødelegge originalbildet, ved å bruke lag, masker og justeringslag.",
    },
    {
      question: "Hva er en fordel med ikke-destruktiv redigering?",
      options: ["Du kan alltid gå tilbake og endre eller fjerne redigeringen", "Bildet blir automatisk skarpere", "Filene blir alltid vesentlig mindre og krever mindre lagringsplass", "Bildet blir automatisk skarpere og mer detaljert etter hver endring"],
      explanation: "Fordelen er at du alltid kan gå tilbake og endre eller fjerne redigeringen, fordi originalen er bevart.",
    },
    {
      question: "Hva er et lag (layer) i bildebehandling?",
      options: ["Et nivå der du kan jobbe med en del av bildet uten å påvirke resten", "En filendelse som forteller hvilket program bildet skal åpnes med", "En fargemodell som beskriver hvordan lys og pigment blandes i bildet", "En type kamera som tar flere eksponeringer og setter dem sammen automatisk"],
      explanation: "Et lag er som et gjennomsiktig ark der du kan redigere en del av bildet uten å påvirke de andre lagene - en bærebjelke i ikke-destruktiv redigering.",
    },
    {
      question: "Hva gjør et justeringslag?",
      options: ["Lar deg justere f.eks. lysstyrke eller farge uten å endre selve bildelaget permanent", "Endrer filformatet fra raster til vektor slik at bildet kan skaleres fritt", "Sletter bildet permanent fra prosjektet og fjerner det fra lagene under", "Kobler prosjektet til internett for å hente ned ferdige fargeprofiler"],
      explanation: "Et justeringslag lar deg endre egenskaper som lysstyrke, kontrast eller farge, uten å endre det opprinnelige bildelaget permanent.",
    },
    {
      question: "Hva er en maske i bildebehandling?",
      options: ["Et verktøy som styrer hvor en effekt eller et lag skal vises eller skjules", "En type kamera som brukes til å ta bilder i sterkt motlys og speilflater", "En nettverksprotokoll som overfører bildefiler mellom enheter i et nett", "En skrifttype som er utviklet spesielt for overskrifter og plakattekst"],
      explanation: "En maske styrer hvilke deler av et lag eller en effekt som vises eller skjules, slik at du kan redigere bestemte områder presist og ikke-destruktivt.",
    },
  ],
  "im-vg1-4-6": [
    {
      question: "Hva er vektorgrafikk?",
      options: ["Bilder definert av matematiske formler som beskriver punkter, linjer og kurver", "En type kamera som fanger bevegelse og dybde i tre dimensjoner samtidig", "Bilder bygd opp av et fast rutenett med fargede piksler i hver celle", "En lydfil der bølgeformen lagres som en rekke tallverdier over tid"],
      explanation: "Vektorgrafikk er bilder definert av matematiske formler (punkter, linjer og kurver), i motsetning til rastergrafikk som består av piksler.",
    },
    {
      question: "Hva er en stor fordel med vektorgrafikk?",
      options: ["Den kan skaleres til enhver størrelse uten tap av kvalitet", "Den har alltid flest mulig farger", "Den blir alltid uskarp og pikselert når den vises i original størrelse", "Den inneholder alltid langt flere farger enn andre bildeformater kan vise"],
      explanation: "Fordelen med vektorgrafikk er at den kan skaleres til enhver størrelse uten tap av kvalitet, fordi den bygger på matematiske formler.",
    },
    {
      question: "Hva er rastergrafikk bygd opp av?",
      options: ["Piksler", "Matematiske kurver", "Lydbølger", "Tekstlinjer"],
      explanation: "Rastergrafikk (bitmap) er bygd opp av piksler, og blir uskarp eller hakkete hvis den forstørres for mye.",
    },
    {
      question: "Til hva egner vektorgrafikk seg spesielt godt?",
      options: ["Logoer og illustrasjoner som skal kunne skaleres", "Detaljerte fotografier", "Detaljerte fotografier med myke overganger og mange fargenyanser", "Lydopptak og lydmiks der bølgeformen må bevares nøyaktig som original"],
      explanation: "Vektorgrafikk egner seg godt til logoer, ikoner og illustrasjoner som må kunne skaleres til ulike størrelser uten å miste kvalitet.",
    },
    {
      question: "Hva skjer hvis du forstørrer et rasterbilde for mye?",
      options: ["Det blir uskarpt eller pikselert", "Det blir automatisk skarpere", "Ingenting endres, siden bildet alltid har uendelig med detaljer", "Det blir til vektorgrafikk"],
      explanation: "Et rasterbilde har et fast antall piksler, så ved kraftig forstørrelse blir bildet uskarpt eller pikselert.",
    },
  ],
  "im-vg1-5-1": [
    {
      question: "Hva er videoproduksjon?",
      options: ["Den samlede prosessen med å skape videoinnhold, fra idé til ferdig distribuert produkt", "Bare det å trykke på opptaksknappen og la kameraet gjøre resten selv", "Å redigere og mikse lydsporet uten å ta hensyn til selve bildesiden", "Å designe en logo og grafisk profil som skal brukes i innledningen"],
      explanation: "Videoproduksjon er hele prosessen med å skape videoinnhold, fra første idé til ferdig distribuert produkt, delt i tre faser.",
    },
    {
      question: "Hvilke tre hovedfaser deles videoproduksjon i?",
      options: ["Preproduksjon, produksjon og postproduksjon", "Klient, tjener og protokoll", "Lydspor, bildespor og teksting som legges sammen i redigeringen", "Idé, salg og markedsføring"],
      explanation: "Videoproduksjon deles tradisjonelt i preproduksjon (planlegging), produksjon (opptak) og postproduksjon (redigering).",
    },
    {
      question: "Hva skjer i preproduksjonsfasen?",
      options: ["Planlegging, som manus, storyboard og opptaksplan", "Distribusjon til publikum", "Distribusjon og publisering av den ferdige videoen ut til publikum", "Selve filmingen der kamera og lys settes opp og scenene spilles inn"],
      explanation: "Preproduksjon er planleggingsfasen, der man lager manus, storyboard, opptaksplan og organiserer ressurser før opptak.",
    },
    {
      question: "Hva skjer i postproduksjonsfasen?",
      options: ["Redigering, klipping, lyd og effekter på det innspilte materialet", "Planlegging av manus", "Selve opptaket der kamera, lys og lyd rigges opp og scenene filmes", "Planlegging av manus, storyboard og opptaksplan før innspillingen starter"],
      explanation: "Postproduksjon er fasen etter opptak, der materialet redigeres, klippes og får lyd, fargekorreksjon og effekter.",
    },
    {
      question: "Hva er et storyboard?",
      options: ["En tegneserieaktig plan som viser hvordan scenene skal se ut", "En liste over skuespillere", "En type kamera som filmer flere scener samtidig fra ulike vinkler", "Et lydopptak av dialogen som spilles inn før scenene filmes på settet"],
      explanation: "Et storyboard er en visuell, tegneserieaktig plan som viser hvordan de ulike scenene og bildeutsnittene skal se ut før opptak.",
    },
  ],
  "im-vg1-5-2": [
    {
      question: "Hva bestemmer oppløsningen i et videobilde?",
      options: ["Hvor mange piksler bildet består av, altså skarpheten", "Hvilken lyd som spilles", "Hvor lang videoen er i minutter og sekunder fra start til slutt", "Hvilken bakgrunnslyd og musikk som spilles av gjennom videoklippet"],
      explanation: "Oppløsningen bestemmer hvor mange piksler bildet består av og dermed skarpheten. 1080p er Full HD, 4K er Ultra HD.",
    },
    {
      question: "Hvor mange piksler er 1080p (Full HD)?",
      options: ["1920 x 1080", "3840 x 2160", "1280 x 720", "640 x 480"],
      explanation: "1080p (Full HD) er 1920 x 1080 piksler, mens 4K (Ultra HD) er 3840 x 2160 piksler.",
    },
    {
      question: "Hva viser et totalbilde (VT)?",
      options: ["Hele scenen, for å etablere lokasjon og gi oversikt", "Bakgrunnen uten personer", "En enkelt hånd eller gjenstand isolert uten resten av omgivelsene", "Kun bakgrunnen og lokasjonen uten at noen personer er med i bildet"],
      explanation: "Et totalbilde (VT) viser hele scenen og brukes til å etablere lokasjonen og gi seeren oversikt.",
    },
    {
      question: "Hva er hensikten med et nærbilde i film?",
      options: ["Å vise detaljer og følelser tett på", "Å fjerne motivet fra bildet", "Å skjule ansiktsuttrykk slik at følelsene blir mer nøytrale", "Å vise hele landskapet"],
      explanation: "Et nærbilde viser detaljer og følelser tett på, f.eks. et ansiktsuttrykk, og skaper nærhet og intensitet.",
    },
    {
      question: "Hva er et halvtotalt bildeutsnitt (HT)?",
      options: ["Personen vist fra knærne og opp, som gir kontekst", "Hele landskapet uten personer", "Personen vist fra hoften og opp med totalt uskarp bakgrunn", "Hele miljøet og landskapet vist helt uten personer i bildet"],
      explanation: "Et halvtotalt utsnitt (HT) viser personen fra omtrent knærne og opp, og gir kontekst mellom totalbildet og nærbildet.",
    },
  ],
  "im-vg1-5-3": [
    {
      question: "Hva er tidslinjen (timeline) i et videoredigeringsprogram?",
      options: ["Arbeidsflaten som viser klippene kronologisk fra venstre til høyre", "Et eget kamera som filmer klippene i kronologisk rekkefølge", "En lydeffekt som spilles av mellom klippene i redigeringen", "En fargemodell som styrer hvordan klippene tones fra start"],
      explanation: "Tidslinjen er arbeidsflaten i et videoredigeringsprogram. Den viser klippene kronologisk fra venstre til høyre, med separate spor for bilde og lyd.",
    },
    {
      question: "Hva er en overgang (transition) i videoredigering?",
      options: ["En effekt mellom to klipp, som signaliserer noe til seeren", "En kamerainnstilling", "En type mikrofon som fanger opp lyden mellom to opptak jevnt", "En kamerainnstilling som bestemmer skarpheten på hvert klipp"],
      explanation: "En overgang er en effekt mellom to klipp, f.eks. en oppløsning (dissolve), og bør brukes med omtanke fordi den signaliserer noe til seeren.",
    },
    {
      question: "Hva er en oppløsning (dissolve) som overgang?",
      options: ["Ett bilde tones gradvis over i det neste", "Bildet blir borte umiddelbart", "Det ene bildet forsvinner helt umiddelbart i ett kutt", "All lyden i klippet forsvinner gradvis før neste scene"],
      explanation: "En oppløsning (dissolve) er en overgang der ett bilde gradvis tones over i det neste, ofte brukt for å vise tids- eller stedsskifte.",
    },
    {
      question: "Hvorfor bør overganger brukes med omtanke?",
      options: ["Fordi de signaliserer noe til seeren og for mange kan virke forstyrrende", "Fordi de er ulovlige å bruke uten tillatelse fra opphavsmann", "Fordi de alltid ødelegger lyden i klippene de brukes mellom", "Fordi de gjør videofilen mye mindre og senker kvaliteten"],
      explanation: "Overganger signaliserer noe til seeren (f.eks. tidssprang). Brukt for ofte eller tilfeldig kan de virke forstyrrende og uprofesjonelle.",
    },
    {
      question: "Hva er hovedmålet med god videoredigering?",
      options: ["Å gjøre råmaterialet om til en sammenhengende fortelling", "Å gjøre videoen så lang som mulig", "Å gjøre videoen så lang som overhodet mulig for å fylle tiden", "Å fjerne all lyd slik at bildene alene bærer fortellingen helt"],
      explanation: "Målet med redigering er å forme råmaterialet til en sammenhengende og engasjerende fortelling, ikke å bruke flest mulig effekter.",
    },
  ],
  "im-vg1-5-4": [
    {
      question: "Hva er en mikrofon?",
      options: ["En transduser som konverterer lydtrykk til elektriske signaler", "En type kamera som fanger opp lyd sammen med bildet i opptak", "En lagringsenhet som konverterer elektriske signaler til lyd", "En skjerm som viser lydbølgene grafisk mens de spilles inn"],
      explanation: "En mikrofon er en transduser som konverterer lydtrykk (akustisk energi) til elektriske signaler.",
    },
    {
      question: "Hva sier opptaksmønsteret til en mikrofon noe om?",
      options: ["Fra hvilke retninger mikrofonen fanger opp lyd", "Hvilket kamera som brukes", "Hvilken farge og tone lyden får i det ferdige opptaket", "Hvor stor lydfilen blir etter at opptaket er avsluttet"],
      explanation: "Opptaksmønsteret beskriver fra hvilke retninger mikrofonen er følsom for lyd, f.eks. rundtopptakende eller retningsbestemt.",
    },
    {
      question: "Hvorfor er god lyd viktig i en videoproduksjon?",
      options: ["Dårlig lyd ødelegger ofte opplevelsen mer enn et middelmådig bilde", "Bildet er alltid viktigere enn lyden uansett produksjonstype", "Lyd har ingen reell betydning så lenge bildet er skarpt nok", "Dårlig lyd gjør ferdig video ulovlig å publisere på nettet"],
      explanation: "God lyd er avgjørende - publikum tilgir et middelmådig bilde lettere enn dårlig lyd, som raskt ødelegger opplevelsen.",
    },
    {
      question: "Hva er en typisk mikrofon for å fange opp dialog tett på en person?",
      options: ["En myggmikrofon (lavalier) festet på personen", "En innebygd telefonmikrofon på avstand", "En kraftig høyttaler plassert like ved munnen til personen", "Et kamera helt uten mikrofon der lyden legges på i etterkant"],
      explanation: "En myggmikrofon (lavalier) festes på personen og fanger opp dialog tett på, noe som gir tydelig lyd uten mye bakgrunnsstøy.",
    },
    {
      question: "Hva kan redusere uønsket bakgrunnsstøy i et lydopptak?",
      options: ["Å plassere mikrofonen nær lydkilden og bruke et rolig opptaksrom", "Å skru volumet på mikrofonen helt opp til maksimalt nivå", "Å ta opp lyden utendørs i sterk vind uten noen vindhette", "Å bruke et dårligere kamera med lavere bildeoppløsning"],
      explanation: "Å plassere mikrofonen nær lydkilden og spille inn i et rolig rom reduserer bakgrunnsstøy og gir et renere opptak.",
    },
  ],
  "im-vg1-5-5": [
    {
      question: "Hva er lydredigering?",
      options: ["Prosessen med å bearbeide lydopptak til et polert, profesjonelt resultat", "Å designe en logo og grafiske elementer til produksjonen", "Å skrive HTML-kode for å publisere lyden på en nettside", "Å ta stillbilder og justere fargene på dem i etterkant"],
      explanation: "Lydredigering er prosessen med å bearbeide lydopptak - klippe, rense og mikse - til et polert, profesjonelt resultat.",
    },
    {
      question: "Hva gjør en equalizer (EQ)?",
      options: ["Justerer volumet på bestemte frekvensområder", "Endrer fargen på lyden", "Endrer fargen og tonen på lyden til et varmere uttrykk", "Legger til bilder og grafikk synkront med lydsignalet nå"],
      explanation: "En equalizer (EQ) justerer volumet på bestemte frekvensområder, f.eks. bass og diskant, for å forme lyden.",
    },
    {
      question: "Hva er hensikten med å klippe i nullkrysninger i bølgeformen?",
      options: ["Å unngå klikkelyder i overgangene", "Å gjøre lyden høyere", "Å gjøre hele lyden vesentlig høyere i klippet", "Å endre frekvensen på lyden til et lysere leie"],
      explanation: "Å klippe der bølgeformen krysser nulllinjen unngår plutselige hopp i signalet, som ellers kan gi hørbare klikkelyder.",
    },
    {
      question: "Hva er miksing i lydsammenheng?",
      options: ["Å balansere flere lydspor til en helhet", "Å ta opp bare ett spor", "Å ta opp bare ett enkelt lydspor helt for seg", "Å slette lyden slik at videoen blir helt stille"],
      explanation: "Miksing er å balansere nivåene og plasseringen til flere lydspor (dialog, musikk, effekter) slik at de fungerer godt sammen.",
    },
    {
      question: "I hvilket frekvensområde ligger bassen (lavt register)?",
      options: ["Ca. 20-250 Hz", "Ca. 4-20 kHz", "Ca. 250 Hz-4 kHz", "Over 20 kHz"],
      explanation: "Bassen (lavt register) ligger omtrent i området 20-250 Hz og gir dybde og fylde til lyden.",
    },
  ],
  "im-vg1-5-6": [
    {
      question: "Hva er motion graphics?",
      options: ["Grafisk design i bevegelse som kombinerer designelementer med animasjon", "En type retningsbestemt mikrofon brukt i grafisk produksjon", "Stillbilder helt uten bevegelse satt sammen til en collage", "En nettverksprotokoll som overfører grafikk mellom enheter"],
      explanation: "Motion graphics er grafisk design i bevegelse - tekst, former, ikoner og illustrasjoner kombinert med animasjon for å formidle et budskap.",
    },
    {
      question: "Hva brukes motion graphics ofte til?",
      options: ["Å formidle budskap, forklare konsepter eller skape visuelle effekter", "Å ta fotografier av høy kvalitet til trykte publikasjoner", "Å lagre store filer effektivt på en delt nettverksserver", "Å bygge og drifte lokale nettverk mellom flere maskiner"],
      explanation: "Motion graphics brukes til å formidle budskap, forklare konsepter (f.eks. forklaringsvideoer) og skape visuelle effekter.",
    },
    {
      question: "Hva er et keyframe (nøkkelbilde) i animasjon?",
      options: ["Et punkt som definerer en bestemt tilstand, og programmet beregner bevegelsen mellom dem", "En lydeffekt som spilles av på et bestemt tidspunkt i klippet", "En type kamera som tar ett nøkkelbilde per sekund i opptaket", "En filendelse som lagrer selve animasjonen i komprimert form"],
      explanation: "Et keyframe definerer en bestemt tilstand (f.eks. posisjon) på et tidspunkt, og programmet beregner mellombildene (interpolering) mellom keyframes.",
    },
    {
      question: "Hva er animasjon?",
      options: ["Å skape illusjon av bevegelse ved å vise en rekke bilder etter hverandre", "Å ta ett enkelt stillbilde og vise det lenge på skjermen", "Å redigere og mikse lyd slik at den følger bildene jevnt", "Å skrive kode som styrer hvordan bildene lagres på disk"],
      explanation: "Animasjon er å skape en illusjon av bevegelse ved å vise en rask rekke av bilder (frames) etter hverandre.",
    },
    {
      question: "Hvorfor brukes motion graphics ofte i reklame og forklaringsvideoer?",
      options: ["Bevegelse fanger oppmerksomhet og gjør budskapet lettere å forstå", "Det fjerner alt annet innhold og viser kun grafikk alene helt", "Det gjør videoen helt stille slik at teksten blir tydeligst", "Det er alltid billigere å lage enn ren tekst uten bevegelse"],
      explanation: "Bevegelse fanger oppmerksomheten og kan gjøre komplekse budskap lettere å forstå, derfor er motion graphics populært i reklame og forklaringsvideoer.",
    },
  ],
  "im-vg1-5-7": [
    {
      question: "Hva er en podcast?",
      options: ["Et lydprogram i episoder som lyttere kan strømme eller laste ned", "En nettside der man kun kan lese tekst uten noe lydinnhold", "Et bildeformat som lagrer lyd sammen med bilder i episoder", "En type kamera laget for å ta opp lange lydprogrammer"],
      explanation: "En podcast er et lydprogram, ofte i episoder rundt et tema, som lyttere kan strømme eller laste ned når det passer dem.",
    },
    {
      question: "Hvorfor er det lurt å velge en tydelig nisje for en podcast?",
      options: ["En spisset nisje gjør det lettere å nå og engasjere et bestemt publikum", "Et bredt og allment tema er alltid best for å nå flest mulig", "Det er et lovkrav at en podcast holder seg til én fast nisje", "En tydelig nisje gjør selve lydkvaliteten i opptaket bedre"],
      explanation: "En tydelig nisje («norsk ungdomslitteratur» fremfor «bøker») gjør det lettere å nå et bestemt publikum og skille seg ut.",
    },
    {
      question: "Hva kjennetegner direktestrømming (streaming)?",
      options: ["Innholdet sendes live i sanntid til publikum", "Innholdet er alltid ferdig redigert på forhånd", "Det krever ingen internettforbindelse", "Det kan bare være lyd"],
      explanation: "Direktestrømming sender innhold live i sanntid til publikum, som ofte kan kommentere og delta mens sendingen pågår.",
    },
    {
      question: "Hvilken type mikrofon anbefales ofte for podcast?",
      options: ["En dynamisk mikrofon eller en USB-kondensatormikrofon", "En innebygd telefonhøyttaler", "Ingen mikrofon, bare lydopptak direkte fra rommets akustikk", "En videoprojektor koblet til lydkortet for bedre opptakslyd"],
      explanation: "For podcast anbefales ofte en dynamisk mikrofon (f.eks. Rode PodMic) eller en USB-kondensatormikrofon (f.eks. Blue Yeti) for god lydkvalitet.",
    },
    {
      question: "Hvorfor anbefales lukkede hodetelefoner ved podcastinnspilling?",
      options: ["De hindrer at lyden fra hodetelefonene lekker inn i mikrofonen", "De gjør lyden farget slik at stemmen blir varmere i opptaket", "De er påkrevd ved lov for all innspilling av lyd til podcast", "De øker filstørrelsen på opptaket og gir høyere lydkvalitet"],
      explanation: "Lukkede hodetelefoner hindrer at lyden fra dem lekker ut og fanges opp av mikrofonen, noe som ville gitt ekko eller dobbeltlyd.",
    },
  ],
  "im-vg1-6-1": [
    {
      question: "Hva er et datanettverk?",
      options: ["To eller flere enheter koblet sammen for å dele data og ressurser", "En type skjerm som viser data fra flere maskiner samtidig nå", "En enkelt frittstående datamaskin uten tilkobling til andre", "Et tekstbehandlingsprogram brukt til å dele filer over nett"],
      explanation: "Et datanettverk er to eller flere enheter koblet sammen for å dele data og ressurser, via kabler, trådløst eller en kombinasjon.",
    },
    {
      question: "Hva er et LAN?",
      options: ["Et lokalt nettverk innenfor et begrenset område, som et hjem eller en skole", "Et globalt nettverk som dekker hele verden over lange avstander", "En type kabel som kobler sammen enheter innenfor et byggverk", "En protokoll for e-post som sender data over korte avstander"],
      explanation: "Et LAN (Local Area Network) er et lokalt nettverk innenfor et begrenset område, f.eks. et hjem, kontor eller en skole.",
    },
    {
      question: "Hva står WAN for?",
      options: ["Wide Area Network - et nettverk over store geografiske avstander", "Web Application Network - et nett for å kjøre nettbaserte apper", "Web Access Number - et nummer for tilgang til en gitt nettside", "Wireless Antenna Node - en trådløs node i et lokalt nettverk"],
      explanation: "WAN (Wide Area Network) er et nettverk som dekker store geografiske avstander - internett er det største eksempelet.",
    },
    {
      question: "Hva er en ruter (router) sin oppgave i et nettverk?",
      options: ["Å sende datapakker mellom nettverk og finne riktig vei", "Å vise bilder på skjermen", "Å lagre alle filene i nettverket permanent på en fast disk", "Å vise bilder og grafikk fra nettverket direkte på skjermen"],
      explanation: "En ruter sender datapakker mellom nettverk og finner riktig vei (rute) for trafikken, f.eks. mellom hjemmenettverket og internett.",
    },
    {
      question: "Hva brukes en svitsj (switch) til i et lokalt nettverk?",
      options: ["Å koble sammen enheter i samme nettverk og sende data til riktig enhet", "Å lage nettsider som kjører lokalt på enhetene i nettverket", "Å koble enhetene til strømnettet og fordele spenning jevnt", "Å redigere video og lyd som overføres mellom maskinene her"],
      explanation: "En svitsj kobler sammen enheter i samme lokale nettverk og sender data til riktig mottaker basert på enhetens adresse.",
    },
  ],
  "im-vg1-6-2": [
    {
      question: "Hva er en nettverksprotokoll?",
      options: ["Et standardisert sett med regler for hvordan data formateres, overføres og mottas", "Et bildeformat", "En sentral datamaskin som lagrer alle nettsidene og sender dem videre til brukerne i nettverket", "Et komprimert filformat som bestemmer hvordan bilder og video pakkes for rask overføring på nett"],
      explanation: "En nettverksprotokoll er et standardisert sett med regler som bestemmer hvordan data formateres, overføres og mottas mellom enheter.",
    },
    {
      question: "Hva brukes protokollen HTTP/HTTPS til?",
      options: ["Å overføre nettsider mellom nettleser og webserver", "Å lagre filer lokalt", "Å styre hvor mye strøm skjermen og prosessoren bruker under normal drift", "Å lagre dokumenter og filer trygt i en lokal mappe på harddisken uten nett"],
      explanation: "HTTP/HTTPS er protokollen som brukes til å overføre nettsider mellom nettleseren (klient) og webserveren.",
    },
    {
      question: "Hva er hovedforskjellen mellom HTTP og HTTPS?",
      options: ["HTTPS krypterer trafikken slik at den er sikker", "HTTPS fungerer bare på mobil", "HTTP er alltid raskere fordi den ikke må bruke tid på å bygge opp ekstra forbindelser", "HTTP er alltid raskere"],
      explanation: "HTTPS krypterer trafikken mellom klient og server (med TLS), slik at data ikke kan avleses av uvedkommende - HTTP er ukryptert.",
    },
    {
      question: "Hva gjør en IP-adresse?",
      options: ["Identifiserer en enhet i et nettverk", "Bestemmer fargen på skjermen", "Bestemmer hvilke farger og hvilken oppløsning skjermen skal vise", "Lader batteriet"],
      explanation: "En IP-adresse er en unik adresse som identifiserer en enhet i et nettverk, slik at data finner riktig mottaker.",
    },
    {
      question: "Hva er hensikten med protokoller i nettverkskommunikasjon?",
      options: ["At ulike enheter og systemer kan kommunisere etter felles regler", "At alle enheter blir identiske", "At trafikken på internett bevisst gjøres tregere for å spare på båndbredden", "At data av sikkerhetsgrunner ikke i det hele tatt kan sendes mellom to enheter"],
      explanation: "Protokoller sørger for at ulike enheter og systemer kan forstå hverandre og kommunisere etter felles, standardiserte regler.",
    },
  ],
  "im-vg1-6-3": [
    {
      question: "Hva er skadevare (malware)?",
      options: ["Ondsinnet programvare laget for å skade eller utnytte systemer", "Et tekstbehandlingsprogram", "En fysisk nettverkskabel som kobler datamaskinen til ruteren i hjemmet", "En vanlig nettleser som du bruker for å åpne og surfe på nettsider trygt"],
      explanation: "Skadevare (malware) er ondsinnet programvare laget for å skade, forstyrre eller skaffe uautorisert tilgang til systemer, f.eks. virus og trojanere.",
    },
    {
      question: "Hva er phishing?",
      options: ["Falske e-poster eller meldinger som lurer deg til å gi fra deg sensitiv informasjon", "En lovlig sikkerhetstest som IT-avdelingen kjører for å finne svakheter i systemet", "En type brannmur som filtrerer bort mistenkelig innkommende nettverkstrafikk automatisk", "En programmeringsfeil i koden som fører til at programmet krasjer uventet under kjøring"],
      explanation: "Phishing er falske e-poster eller meldinger som later som de er fra en seriøs avsender for å lure deg til å oppgi passord, kortnummer eller annen sensitiv informasjon.",
    },
    {
      question: "Hva kjennetegner sosial manipulering (social engineering)?",
      options: ["Det utnytter menneskelig tillit og nysgjerrighet i stedet for tekniske svakheter", "Det krever ingen kontakt med ofre", "Det er alltid en lovlig metode som brukes åpent av bedrifter for å teste ansatte", "Det krever ingen som helst kontakt med ofrene og skjer helt automatisk via nettet"],
      explanation: "Sosial manipulering utnytter menneskelig tillit, nysgjerrighet eller stress i stedet for tekniske svakheter, f.eks. phishing.",
    },
    {
      question: "Hva gjør et datavirus?",
      options: ["Fester seg til andre filer og sprer seg når filen kjøres", "Beskytter systemet mot angrep", "Øker internetthastigheten ved å rydde opp i unødvendige filer på harddisken", "Sørger for at data lagres trygt og tar automatisk sikkerhetskopi av viktige filer"],
      explanation: "Et virus fester seg til andre filer og sprer seg når filen kjøres, og kan ødelegge data, bremse systemet eller gi uvedkommende tilgang.",
    },
    {
      question: "Hva er en sårbarhet i et IT-system?",
      options: ["En svakhet som kan utnyttes av en angriper", "En sikkerhetsoppdatering", "En nettverkskabel som overfører data mellom enhetene raskt", "En sikkerhetsoppdatering som tetter kjente hull i programvaren"],
      explanation: "En sårbarhet er en svakhet i et system (f.eks. uoppdatert programvare) som en angriper kan utnytte for å få tilgang eller gjøre skade.",
    },
  ],
  "im-vg1-6-4": [
    {
      question: "Hva gjør en brannmur (firewall)?",
      options: ["Kontrollerer trafikk inn og ut av et nettverk basert på definerte regler", "Lagrer alle filene og dokumentene dine i skyen slik at de er trygge", "Sørger for rask lading av datamaskinen når den er koblet til strøm", "Viser bilder, video og grafikk på skjermen med riktig oppløsning"],
      explanation: "En brannmur kontrollerer trafikken inn og ut av et nettverk basert på definerte regler, og blokkerer uautorisert innkommende trafikk.",
    },
    {
      question: "Hva er tofaktorautentisering (2FA)?",
      options: ["Å bruke to ulike typer bevis for identitet, f.eks. passord og en kode på mobilen", "Å bruke to skjermer samtidig slik at innloggingen blir tryggere for brukeren", "Å skrive inn to ulike passord rett etter hverandre ved samme innlogging", "Å logge inn to ganger på rad for å bekrefte at det er deg som prøver"],
      explanation: "Tofaktorautentisering krever to ulike typer bevis: noe du vet (passord) og noe du har (f.eks. en kode på mobilen), noe som gjør innlogging mye sikrere.",
    },
    {
      question: "Hva er et eksempel på «noe du har» i tofaktorautentisering?",
      options: ["En mobiltelefon som mottar en engangskode", "En PIN-kode du husker", "Et passord du har valgt selv og husker utenat", "En PIN-kode du husker og taster inn ved innlogging"],
      explanation: "«Noe du har» er en fysisk faktor, som en mobiltelefon som mottar en SMS-kode eller en autentiseringsapp - passord og PIN er «noe du vet».",
    },
    {
      question: "Hva kjennetegner et sterkt passord?",
      options: ["Det er langt og kombinerer store og små bokstaver, tall og symboler", "Det er kort og lett å gjette", "Det er en enkel tallrekke som «12345» fordi den er rask å taste hver gang", "Det er ditt eget navn kombinert med fødselsåret ditt så du husker det lett"],
      explanation: "Et sterkt passord er langt og kombinerer store og små bokstaver, tall og symboler, og er vanskelig å gjette.",
    },
    {
      question: "Hvorfor er det viktig å holde programvare oppdatert?",
      options: ["Oppdateringer tetter kjente sikkerhetshull (sårbarheter)", "Det har ingen betydning for sikkerhet", "Det gjør maskinen tregere og fyller opp harddisken med unødvendige filer", "Det har ingen betydning for sikkerheten, kun for hvordan programmene ser ut"],
      explanation: "Oppdateringer tetter kjente sikkerhetshull. Uoppdatert programvare har sårbarheter som angripere kan utnytte.",
    },
  ],
  "im-vg1-6-5": [
    {
      question: "Hva er personopplysninger?",
      options: ["Alle opplysninger som kan knyttes til en identifiserbar person", "Bare offentlig statistikk", "Bare navn og postadresse, mens e-post og telefonnummer holdes helt utenfor", "Bare interne bedriftsdata om omsetning, produkter og forretningshemmeligheter"],
      explanation: "Personopplysninger er alle opplysninger som kan knyttes til en identifiserbar person - navn, fødselsnummer, e-post, IP-adresse, bilder, helsedata med mer.",
    },
    {
      question: "Hva er GDPR?",
      options: ["Et regelverk som beskytter behandlingen av personopplysninger", "Et programmeringsspråk", "En nettleser med innebygde funksjoner for å blokkere sporing og reklame", "En type maskinvare som krypterer og beskytter dataene på en server fysisk"],
      explanation: "GDPR (personvernforordningen) er et europeisk regelverk som beskytter hvordan personopplysninger samles inn og behandles.",
    },
    {
      question: "Hva er et grunnleggende krav i GDPR for å behandle personopplysninger?",
      options: ["Det må finnes et lovlig grunnlag, ofte samtykke fra personen", "Man kan samle inn alt fritt uten grunn", "Man kan samle inn så mye data man vil, helt fritt og uten noen begrunnelse", "Innsamlede data kan deles videre med hvem som helst uten personens vitende"],
      explanation: "GDPR krever et lovlig behandlingsgrunnlag, f.eks. samtykke, og at den registrerte informeres om hva som samles inn og hvorfor.",
    },
    {
      question: "Er en IP-adresse en personopplysning etter GDPR?",
      options: ["Ja, fordi den kan knyttes til en identifiserbar person", "Nei, den er aldri en personopplysning", "Bare når IP-adressen tilhører en bedrift og ikke en vanlig privatperson hjemme", "Nei, en IP-adresse regnes aldri som en personopplysning under noen omstendighet"],
      explanation: "En IP-adresse regnes som en personopplysning fordi den kan knyttes til en identifiserbar person.",
    },
    {
      question: "Hvilken rettighet gir GDPR til den enkelte?",
      options: ["Rett til innsyn i og sletting av egne personopplysninger", "Rett til å hacke andres systemer", "Rett til å bryte deg inn i andres systemer så lenge du bare ser på dataene", "Rett til å selge andres personopplysninger videre så lenge du tjener på det"],
      explanation: "GDPR gir blant annet rett til innsyn i egne personopplysninger og rett til å få dem rettet eller slettet («retten til å bli glemt»).",
    },
  ],
  "im-vg1-6-6": [
    {
      question: "Hva gir opphavsrett (copyright) skaperen?",
      options: ["Enerett til å bestemme over sitt eget verk", "Rett til å bruke andres verk fritt", "Rett til å bryte seg inn i andres systemer for å beskytte sitt eget verk", "Plikt til å gi bort verket gratis"],
      explanation: "Opphavsrett gir skaperen enerett til å bestemme over sitt verk. Bilder, tekst, musikk, video og kode er beskyttet automatisk fra det skapes.",
    },
    {
      question: "Når oppstår opphavsretten til et verk?",
      options: ["Automatisk i det øyeblikket verket skapes", "Først når man søker om det", "Bare etter at man har betalt et gebyr for å få verket beskyttet ved lov", "Aldri for digitale verk"],
      explanation: "Opphavsretten oppstår automatisk i det øyeblikket verket skapes - man trenger ikke å registrere eller søke om den.",
    },
    {
      question: "Hva menes med overvåkingskapitalisme?",
      options: ["At selskaper samler inn store mengder data om brukeratferd for å selge målrettet reklame", "At all form for reklame er forbudt på nett for å beskytte brukernes personvern", "At data om brukerne aldri samles inn fordi selskapene respekterer personvernet", "At staten eier og kontrollerer all teknologi og bestemmer hva folk får bruke"],
      explanation: "Overvåkingskapitalisme er en forretningsmodell der store teknologiselskaper samler inn enorme mengder data om brukernes atferd for å selge målrettet reklame.",
    },
    {
      question: "Hvorfor sies det at teknologi ikke er nøytral?",
      options: ["Den reflekterer valgene til de som lager den og påvirker samfunnet", "Fordi den alltid er feilfri", "Fordi den er umulig å endre etter at den først er laget og tatt i bruk", "Fordi den i praksis aldri blir brukt og derfor ikke påvirker samfunnet"],
      explanation: "Teknologi er ikke nøytral fordi den reflekterer valgene og verdiene til de som lager den, og påvirker samfunnet på måter som ikke alltid er forutsigbare.",
    },
    {
      question: "Hva bør du gjøre før du bruker andres bilde i egen produksjon?",
      options: ["Sjekke lisensen og innhente tillatelse eller bruke fritt lisensiert materiale", "Selge bildet videre til andre for å tjene penger på andres arbeid og innsats", "Fjerne navnet på skaperen slik at ingen ser hvor bildet opprinnelig kom fra", "Bruke bildet helt fritt uansett, siden alt som ligger på nett er gratis"],
      explanation: "Du må respektere opphavsretten - sjekk lisensen, innhent tillatelse, eller bruk materiale med åpne lisenser (f.eks. Creative Commons) og krediter skaperen.",
    },
  ],
  "im-vg1-7-1": [
    {
      question: "Hva er UX-design?",
      options: ["Prosessen med å skape produkter som gir brukeren en meningsfull og positiv opplevelse", "Å designe og montere fysisk maskinvare som skjermer, tastatur og kabinett", "Å programmere og sette opp en database som lagrer informasjon effektivt", "Å konfigurere og drifte et nettverk med rutere, svitsjer og brannmurer"],
      explanation: "UX-design (User Experience Design) er prosessen med å skape produkter som gir brukeren en meningsfull, effektiv og positiv opplevelse gjennom hele reisen.",
    },
    {
      question: "Hva er forskjellen på UX og UI?",
      options: ["UX er hele brukeropplevelsen, UI er det visuelle grensesnittet brukeren ser", "UX handler bare om farger", "UX handler bare om fargevalg og skrifttyper, mens UI dekker hele opplevelsen", "De er nøyaktig det samme, og begge begrepene beskriver kun det visuelle designet"],
      explanation: "UX (User Experience) handler om hele brukeropplevelsen, mens UI (User Interface) handler om det visuelle grensesnittet - knapper, farger og layout.",
    },
    {
      question: "Hva er et hovedmål med UX-design?",
      options: ["At produktet er nyttig, effektivt og enkelt å bruke for brukeren", "At produktet har flest mulig funksjoner", "At produktet ser mest mulig komplisert og avansert ut for å virke profesjonelt", "At produktet først og fremst gleder designeren og viser frem tekniske ferdigheter"],
      explanation: "Et hovedmål med UX-design er at produktet er nyttig, effektivt og enkelt for brukeren - brukerens behov står i sentrum.",
    },
    {
      question: "Hvorfor er det viktig å sette brukeren i sentrum i UX-design?",
      options: ["Fordi produktet skal løse brukernes reelle behov, ikke designerens antakelser", "Fordi designeren alltid vet best hva brukeren egentlig trenger og ønsker seg", "Fordi brukerne selv ikke betyr noe når produktet først skal utvikles og lanseres", "Fordi det er et strengt lovkrav at brukeren skal stå i sentrum av all design"],
      explanation: "Brukersentrert design sikrer at produktet løser brukernes reelle behov, i stedet for å bygge på designerens egne antakelser.",
    },
    {
      question: "Hva omfatter UX ifølge definisjonen?",
      options: ["Hele reisen fra brukerens første møte med produktet og videre", "Bare fargevalget", "Bare prisen brukeren betaler for å kjøpe og ta i bruk produktet", "Bare maskinvaren som produktet kjører på, som skjerm og prosessor"],
      explanation: "UX omfatter hele reisen fra brukerens første møte med produktet, gjennom bruk, til etterpå - ikke bare ett enkelt skjermbilde.",
    },
  ],
  "im-vg1-7-2": [
    {
      question: "Hvorfor gjør man brukerundersøkelser i UX-design?",
      options: ["For å forstå brukernes reelle behov og avdekke hva de faktisk trenger", "For å bekrefte egne antakelser", "For å gjøre prosjektet mer omfattende og dyrere enn nødvendig, og på den måten kunne fakturere kunden mer", "For å bekrefte teamets egne antakelser om brukerne slik at man slipper å endre den ferdige designløsningen"],
      explanation: "Brukerundersøkelser er grunnlaget for god UX-design fordi de avdekker brukernes reelle behov, i stedet for å bygge på antakelser.",
    },
    {
      question: "Hva gir kvalitative metoder?",
      options: ["Dybdeforståelse av hvorfor brukere gjør som de gjør", "Bare store mengder tall", "Store mengder statistiske tall som kan generaliseres, men uten forklaring på årsakene bak brukernes valg", "Kun maskinvaredata"],
      explanation: "Kvalitative metoder som intervjuer og observasjon gir dybdeforståelse av hvorfor brukere gjør som de gjør, mens kvantitative metoder gir tall og mengder.",
    },
    {
      question: "Hva er et brukerintervju?",
      options: ["En samtale med en bruker en-til-en for å forstå behov og erfaringer", "En spørreundersøkelse til tusenvis samtidig", "En teknisk ytelses- og belastningstest av maskinvaren for å se hvor mange brukere systemet tåler samtidig", "En teknisk test av maskinvaren"],
      explanation: "Et brukerintervju er en en-til-en-samtale der man stiller åpne spørsmål for å forstå brukerens behov, opplevelser og utfordringer.",
    },
    {
      question: "Hva kjennetegner kvantitative metoder?",
      options: ["De gir målbare data om hvor mange og hvor mye", "De gir bare dybdehistorier", "De krever ingen brukere i det hele tatt, siden dataene hentes direkte fra systemets egne serverlogger", "De handler bare om farger"],
      explanation: "Kvantitative metoder, som spørreundersøkelser og statistikk, gir målbare data om hvor mange og hvor mye, og kan generaliseres til større grupper.",
    },
    {
      question: "Hvilke spørsmål bør man bruke i et brukerintervju?",
      options: ["Åpne spørsmål som lar brukeren fortelle fritt", "Ledende spørsmål som styrer svaret", "Bare lukkede ja/nei-spørsmål, slik at svarene raskt kan telles opp og settes inn i en oversiktlig tabell", "Bare ja/nei-spørsmål"],
      explanation: "Åpne spørsmål lar brukeren fortelle fritt og gir rikere innsikt enn lukkede ja/nei-spørsmål eller ledende spørsmål.",
    },
  ],
  "im-vg1-7-3": [
    {
      question: "Hva er en wireframe?",
      options: ["En enkel skisse av strukturen og plasseringen av elementer på en side", "Et ferdig, fargelagt design", "Et ferdig, fargelagt og detaljert design med bilder og typografi, klart til å publiseres direkte for brukerne", "En type nettverkskabel som kobler sammen enhetene slik at siden kan vises på flere skjermer samtidig i teamet"],
      explanation: "En wireframe er en enkel skisse som viser strukturen og plasseringen av elementer (uten detaljert grafikk), brukt tidlig for å planlegge layout.",
    },
    {
      question: "Hva er en prototype?",
      options: ["En testbar modell av produktet som lar deg prøve ut ideer før koding", "Den endelige ferdige nettsiden", "En lydfil som spilles av når brukeren åpner produktet, for å forklare hvordan de ulike funksjonene virker", "Den endelige, ferdige nettsiden som er kodet, testet og publisert, og som ikke lenger skal endres på noen måte"],
      explanation: "En prototype er en testbar modell av produktet som lar deg prøve ut og teste ideer raskt, før du bruker tid på fullstendig design og koding.",
    },
    {
      question: "Hva er en fordel med å lage wireframes og prototyper tidlig?",
      options: ["Du kan teste ideer raskt og oppdage problemer billig før mye arbeid er lagt ned", "Det fjerner behovet for brukere", "Det gjør produktet dyrere fordi man må lage alt to ganger, både som skisse og deretter som helt ferdig løsning", "Det erstatter hele den videre utviklingen, slik at man kan levere prototypen direkte til kunden uten mer arbeid"],
      explanation: "Wireframes og prototyper lar deg teste ideer raskt og avdekke problemer tidlig, mens det fortsatt er billig og enkelt å gjøre endringer.",
    },
    {
      question: "Hva er en skisse (sketch) i designprosessen?",
      options: ["En rask tegning for å utforske mange ideer raskt uten detaljer", "Et ferdig produkt", "En databasemodell som viser hvordan informasjonen skal lagres og kobles sammen i systemet bak nettstedet", "Et ferdig og gjennomarbeidet produkt med endelige farger og innhold, klart til å leveres direkte til kunden"],
      explanation: "En skisse er en rask tegning (ofte på papir) brukt til å utforske mange ideer raskt, uten detaljer - bare konsepter.",
    },
    {
      question: "Hva er den naturlige rekkefølgen i en designprosess?",
      options: ["Skisse, wireframe, prototype, ferdig design", "Ferdig design, skisse, koding", "Ferdig design først, deretter rask skisse og til slutt koding av alle sidene i produktet før lansering", "Prototype, skisse, lansering"],
      explanation: "En typisk designprosess går fra rask skisse, via wireframe (struktur) og prototype (testbar modell), til ferdig design og utvikling.",
    },
  ],
  "im-vg1-7-4": [
    {
      question: "Hva er brukertesting?",
      options: ["Å la ekte brukere prøve produktet for å avdekke problemer", "At designeren tester selv alene", "En teknisk maskinvaretest der man måler hvor mye belastning enhetene og serverne tåler under høy trafikk", "En teknisk maskinvaretest"],
      explanation: "Brukertesting er å la ekte brukere prøve produktet for å avdekke problemer som designeren selv ikke ser, fordi designeren kjenner produktet for godt.",
    },
    {
      question: "Hva er think-aloud-metoden?",
      options: ["Brukeren sier høyt hva de tenker og gjør mens de bruker produktet", "Designeren forklarer alt for brukeren", "At man kun måler antall klikk og tidsbruk uten å snakke med brukeren om hva de tenker mens de tester", "Man måler kun klikk uten å snakke"],
      explanation: "Think-aloud (tenke høyt) er en metode der brukeren sier høyt hva de tenker, føler og gjør mens de bruker prototypen, slik at man forstår tankegangen deres.",
    },
    {
      question: "Hvordan bør oppgaver i en brukertest formuleres?",
      options: ["Som mål, f.eks. «finn kontaktinformasjonen», ikke som «klikk på Kontakt-knappen»", "Ved å fortelle nøyaktig hvor de skal klikke", "Uten noe konkret mål i det hele tatt, slik at brukeren fritt kan klikke rundt uten en oppgave å løse", "Som ferdig reklametekst der produktets fordeler beskrives, slik at brukeren blir positiv før testen starter"],
      explanation: "Oppgaver bør formuleres som mål («finn kontaktinformasjonen»), ikke som instruksjoner («klikk på Kontakt-knappen»), slik at testen viser om brukeren finner frem selv.",
    },
    {
      question: "Hvorfor oppdager ikke designeren selv alle problemene i et produkt?",
      options: ["Fordi designeren kjenner produktet for godt og blir «blind» for problemer", "Fordi designeren aldri tester", "Fordi maskinvaren brukeren har er feil, og problemene derfor skyldes utstyret og ikke selve designet", "Fordi designeren aldri tester produktet selv og derfor ikke rekker å se problemene før det er lansert"],
      explanation: "Designeren kjenner produktet for godt og tar mye for gitt, og blir derfor «blind» for problemer som nye brukere raskt støter på.",
    },
    {
      question: "Hva er et viktig første steg når man planlegger en brukertest?",
      options: ["Å definere hva man vil lære av testen", "Å lansere produktet med en gang", "Å lansere produktet med en gang og heller rette opp feilene etter hvert som ekte brukere melder om dem", "Å skrive ferdig all koden"],
      explanation: "Et viktig første steg er å definere målet: hva vil du lære av testen? Det styrer hvilke oppgaver brukerne får.",
    },
  ],
  "im-vg1-7-5": [
    {
      question: "Hva er informasjonsarkitektur (IA)?",
      options: ["Kunsten å organisere og strukturere innhold slik at brukere finner det de leter etter", "En programmeringsteknikk", "En fargemodell som bestemmer hvordan fargene på nettstedet settes sammen for å gi et helhetlig uttrykk", "En type maskinvare som lagrer innholdet på nettstedet, slik at sidene kan hentes frem raskt ved hvert besøk"],
      explanation: "Informasjonsarkitektur er kunsten å organisere og strukturere innhold i logiske grupper slik at brukere lett finner det de leter etter.",
    },
    {
      question: "Hva er global navigasjon?",
      options: ["Hovedmenyen som er tilgjengelig på alle sider og viser de viktigste kategoriene", "En undermeny på én enkelt side", "En type server som styrer hvordan de ulike sidene på nettstedet lastes inn når brukeren navigerer rundt", "En undermeny som bare vises på én enkelt side og lister opp valgene innenfor akkurat den delen av nettstedet"],
      explanation: "Global navigasjon er hovedmenyen som er tilgjengelig på alle sider og viser de viktigste kategoriene på nettstedet.",
    },
    {
      question: "Hva er lokal navigasjon?",
      options: ["En undermeny som viser sider innenfor en bestemt seksjon", "Hovedmenyen for hele nettstedet", "En type nettverkskabel som kobler sammen serverne slik at sidene i en seksjon vises i riktig rekkefølge", "En ekstern lenke"],
      explanation: "Lokal navigasjon er en undermeny som viser sider og valg innenfor en bestemt seksjon av nettstedet.",
    },
    {
      question: "Hva er konsekvensen av dårlig informasjonsarkitektur?",
      options: ["Brukerne finner ikke frem og blir frustrerte", "Maskinvaren blir bedre", "At fargene og typografien på siden blir penere, siden strukturen styrer hvordan elementene fargelegges", "Siden laster raskere"],
      explanation: "Dårlig informasjonsarkitektur gjør at brukerne ikke finner frem og blir frustrerte, selv om innholdet faktisk finnes på siden.",
    },
    {
      question: "Hvorfor er god navigasjon viktig på et nettsted?",
      options: ["Den hjelper brukerne å orientere seg og finne frem til innholdet", "Den fjerner behovet for innhold", "Den er først og fremst til pynt og gir siden et pent utseende, uten å påvirke hvordan brukeren finner frem", "Den gjør siden tregere"],
      explanation: "God navigasjon hjelper brukerne å orientere seg, forstå hvor de er, og finne frem til innholdet de leter etter.",
    },
  ],
  "im-vg1-7-6": [
    {
      question: "Hva er et designsystem?",
      options: ["En samling gjenbrukbare komponenter, retningslinjer og standarder for et produkt", "En programmeringsfeil", "En enkelt ferdig nettside som viser frem alle produktets funksjoner samlet på ett sted for brukeren", "En type maskinvare som teamet bruker for å lagre og dele designfilene mellom de ulike medarbeiderne"],
      explanation: "Et designsystem er en samling gjenbrukbare komponenter, retningslinjer og standarder som styrer hvordan et digitalt produkt ser ut og oppfører seg.",
    },
    {
      question: "Hva er en stor fordel med et designsystem?",
      options: ["Det sikrer et konsistent utseende og sparer tid når et team jobber sammen", "Det gjør hver side helt forskjellig", "Det gjør hver eneste side helt forskjellig fra de andre, slik at nettstedet virker variert og spennende", "Det fjerner behovet for design helt, fordi ferdige komponenter gjør at man ikke lenger må ta designvalg"],
      explanation: "Et designsystem sikrer konsistens i utseende og oppførsel, og sparer tid fordi teamet gjenbruker komponenter i stedet for å lage alt på nytt.",
    },
    {
      question: "Hva inneholder et komponentbibliotek?",
      options: ["Ferdige UI-elementer som knapper og skjemafelt som kan gjenbrukes", "Bare tekst uten design", "Bare rå tekst uten design eller formatering, som utvikleren selv må sette et utseende på ved hver bruk", "En liste over de ansatte i teamet og hvilke deler av grensesnittet hver enkelt av dem har ansvaret for"],
      explanation: "Et komponentbibliotek inneholder ferdige UI-elementer (knapper, skjemafelt, kort osv.) som kan gjenbrukes på tvers av produktet.",
    },
    {
      question: "Hva er en stilguide?",
      options: ["Et dokument som beskriver regler for farger, typografi og bruk av elementer", "En nettverksprotokoll", "En databasemodell som beskriver hvordan typografien og fargene lagres og hentes frem når siden vises", "En nettverksprotokoll som styrer hvordan fargene og skriftene overføres mellom serveren og nettleseren"],
      explanation: "En stilguide beskriver reglene for hvordan farger, typografi, ikoner og andre elementer skal brukes, slik at uttrykket blir enhetlig.",
    },
    {
      question: "Hvorfor trenger et team som jobber over tid et felles designsystem?",
      options: ["For å ha et felles språk og felles regler slik at produktet henger sammen", "For å gjøre arbeidet tregere", "For å unngå samarbeid mellom medarbeiderne, slik at hver enkelt kan designe sin egen del helt fritt", "For å gjøre arbeidet tregere med vilje, slik at teamet må bruke lengre tid og dermed unngår slurvefeil"],
      explanation: "Et felles designsystem gir teamet et felles språk og felles regler, slik at produktet henger visuelt og funksjonelt sammen selv når mange jobber på det.",
    },
  ],
  "im-vg1-8-1": [
    {
      question: "Hva er prosjektmetodikk?",
      options: ["Et strukturert rammeverk for å planlegge, gjennomføre og avslutte prosjekter", "Et programmeringsspråk", "En type maskinvare som teamet bruker for å styre og følge fremdriften i de ulike delene av prosjektet", "Et bestemt programmeringsspråk som brukes til å skrive koden som holder oversikt over prosjektets faser"],
      explanation: "Prosjektmetodikk er et strukturert rammeverk som definerer faser, roller, verktøy og prosesser for å planlegge, gjennomføre og avslutte prosjekter.",
    },
    {
      question: "Hva kjennetegner en smidig (agile) arbeidsmetode?",
      options: ["Arbeidet skjer i korte, gjentakende sykluser med jevn tilpasning underveis", "Alt planlegges i detalj én gang og endres aldri", "Alt planlegges i detalj én gang helt i starten, og planen ligger deretter fast uten endringer underveis", "Man jobber bare alene og uten samarbeid, slik at hver medarbeider styrer sin egen del av prosjektet selv"],
      explanation: "Smidige (agile) metoder jobber i korte, gjentakende sykluser (iterasjoner), med hyppige tilbakemeldinger og tilpasning underveis i stedet for én fastlåst plan.",
    },
    {
      question: "Hvorfor er det nyttig å dele et prosjekt inn i faser?",
      options: ["Det gir oversikt, struktur og kontroll på fremdriften", "Det gjør prosjektet umulig å fullføre", "Det fjerner alle mål fra prosjektet, siden fokuset flyttes fra resultatet og over til selve faseinndelingen", "Det fjerner alle mål"],
      explanation: "Å dele et prosjekt i faser gir oversikt, struktur og kontroll, slik at man kan følge fremdriften og sikre at man leverer ønsket resultat.",
    },
    {
      question: "Hva er en milepæl i et prosjekt?",
      options: ["Et viktig delmål eller punkt som markerer fremdrift", "Et programmeringsspråk", "En type feilmelding som dukker opp når en prosjektfase ikke blir fullført innen den planlagte fristen", "En type feilmelding"],
      explanation: "En milepæl er et viktig delmål eller kontrollpunkt i prosjektet som markerer at en sentral del er fullført.",
    },
    {
      question: "Hva er fossefall (vannfall) som prosjektmetode?",
      options: ["En lineær metode der fasene gjennomføres i fast rekkefølge én etter én", "Det samme som smidig metode", "Det samme som smidig metode, der man jobber i korte sykluser og tilpasser planen etter hver tilbakemelding", "En metode helt uten faser, der teamet jobber fritt og bestemmer underveis hva som skal gjøres til enhver tid"],
      explanation: "Fossefallsmetoden er lineær: fasene (f.eks. analyse, design, utvikling, test) gjennomføres i fast rekkefølge, én etter én, før man går videre.",
    },
  ],
  "im-vg1-8-2": [
    {
      question: "Hvorfor er klare roller viktige i et prosjektteam?",
      options: ["De forhindrer dobbeltarbeid og sikrer at alle oppgaver dekkes", "De gjør at ingen trenger å jobbe", "De gjør at teamlederen kan ta alle avgjørelser alene uten å informere resten av teamet", "De erstatter behovet for planlegging fordi rollene i seg selv styrer hele prosjektets fremdrift"],
      explanation: "Klare roller forhindrer dobbeltarbeid og sikrer at alle oppgaver blir dekket, fordi alle vet hva de har ansvar for.",
    },
    {
      question: "Hva er aktiv lytting?",
      options: ["Å gi full oppmerksomhet og stille oppfølgingsspørsmål", "Å ignorere den som snakker", "Å avbryte den som snakker for raskt å komme med egne løsninger og synspunkter", "Å late som man følger med mens man egentlig planlegger sitt eget neste innlegg"],
      explanation: "Aktiv lytting innebærer å gi full oppmerksomhet, vise at man følger med og stille oppfølgingsspørsmål - en nøkkel til god kommunikasjon.",
    },
    {
      question: "Hva kjennetegner god kommunikasjon i et team?",
      options: ["Klarhet - å si tydelig hva man mener uten vage formuleringer", "Å kun kommunisere skriftlig", "Å holde budskapet mest mulig åpent og vagt slik at ingen føler seg overkjørt", "Å bruke så mange faguttrykk som mulig for å virke kompetent overfor de andre"],
      explanation: "God kommunikasjon kjennetegnes av klarhet - å si tydelig hva man mener og unngå vage formuleringer som «kanskje vi burde...».",
    },
    {
      question: "Hvorfor er samarbeidsevne en viktig ferdighet i IT- og medieproduksjon?",
      options: ["Fordi de fleste produksjoner er teamarbeid", "Fordi kommunikasjon er forbudt", "Fordi det viktigste i en produksjon er å unngå unødvendig kontakt mellom deltakerne", "Fordi man alltid jobber alene"],
      explanation: "De fleste IT- og medieproduksjoner er teamarbeid, så evnen til å samarbeide effektivt er en av de viktigste ferdighetene man kan utvikle.",
    },
    {
      question: "Hva er en konstruktiv måte å håndtere uenighet i et team på?",
      options: ["Å lytte til hverandre og søke en løsning sammen", "Å unngå all uenighet for enhver pris", "Å la den med høyest rang bestemme og be de andre om å slutte å komme med innvendinger", "Å ignorere de andre"],
      explanation: "Uenighet håndteres konstruktivt ved at man lytter til hverandres synspunkter og sammen søker en løsning - uenighet kan gi bedre resultater.",
    },
  ],
  "im-vg1-8-3": [
    {
      question: "Hva er brainstorming?",
      options: ["En metode for å generere mange ideer raskt uten å kritisere dem underveis", "En måte å teste maskinvare på", "En teknikk for å planlegge kildekoden i et program før selve programmeringen starter", "En struktur der man vurderer og forkaster ideer fortløpende for å spare tid i prosessen"],
      explanation: "Brainstorming er en metode for å generere så mange ideer som mulig raskt, der man utsetter kritikk og vurderer ideene etterpå.",
    },
    {
      question: "Hva er en viktig regel for brainstorming?",
      options: ["Ingen kritikk underveis - alle ideer er velkomne", "Bare den beste ideen får nevnes", "Bare den ideen som lederen på forhånd anser som best skal presenteres for gruppen", "Kun lederen får komme med ideer"],
      explanation: "En viktig regel er at det ikke skal kritiseres underveis - alle ideer er velkomne, og vurdering kommer senere. Kvantitet går foran kvalitet i denne fasen.",
    },
    {
      question: "Hva er et moodboard?",
      options: ["En visuell samling av bilder, farger og elementer som definerer stil og stemning", "En liste over feil i koden", "En type kamerainnstilling som styrer fargebalanse og stemning i bilder under en opptaksdag", "En strukturert oversikt over alle feil og mangler som er funnet i kildekoden til et prosjekt"],
      explanation: "Et moodboard er en visuell samling av bilder, farger, teksturer og typografi som definerer stilen og stemningen for et prosjekt.",
    },
    {
      question: "Hva er hensikten med konseptutvikling?",
      options: ["Å utvikle og foredle ideer til et tydelig konsept før produksjon", "Å hoppe rett til ferdig produkt", "Å teste at maskinvaren og programvaren fungerer sammen før man begynner på selve produksjonen", "Å hoppe direkte til et ferdig produkt for å spare tid, og heller justere konseptet i etterkant"],
      explanation: "Konseptutvikling handler om systematisk å utvikle og foredle ideer til et tydelig konsept, slik at produksjonen har en klar retning.",
    },
    {
      question: "Hvorfor er det nyttig å bruke referanser når man utvikler et konsept?",
      options: ["De gir inspirasjon og et felles bilde av ønsket stil og retning", "De erstatter all egen idéutvikling", "De erstatter helt behovet for egen idéutvikling siden man bare kopierer det som allerede finnes", "De brukes kun til å dokumentere feil man vil unngå, ikke til å inspirere retning og stil videre"],
      explanation: "Referanser (f.eks. i et moodboard) gir inspirasjon og skaper et felles bilde i teamet av ønsket stil, stemning og retning.",
    },
  ],
  "im-vg1-8-4": [
    {
      question: "Hva handler dramaturgi om?",
      options: ["Hvordan en fortelling bygges opp for å engasjere publikum", "Hvordan man redigerer farger", "Hvordan man kobler sammen enheter i et nettverk slik at data flyter effektivt mellom dem", "Hvordan man kobler nettverk"],
      explanation: "Dramaturgi handler om hvordan en fortelling bygges opp og struktureres for å skape spenning og engasjere publikum.",
    },
    {
      question: "Hvilke tre deler består tre-akt-strukturen av?",
      options: ["Presentasjon (setup), konfrontasjon og avslutning", "Klient, tjener og protokoll", "Lydspor, bildespor og tekstspor, som er de tre lagene man arbeider med under videoredigering", "Intro, refreng og bro"],
      explanation: "Tre-akt-strukturen deler en fortelling i tre: akt 1 presentasjon (setup), akt 2 konfrontasjon/utvikling, og akt 3 avslutning/forløsning.",
    },
    {
      question: "Hva skjer i akt 1 i tre-akt-strukturen?",
      options: ["Hovedpersonen og verdenen introduseres", "Historien avsluttes", "Historien avsluttes og publikum får se hvordan det gikk med hovedpersonen til slutt", "Rulleteksten vises"],
      explanation: "I akt 1 (presentasjon/setup) introduseres hovedpersonen og verdenen, og det vises hva som står på spill.",
    },
    {
      question: "Hva er berettermodellen?",
      options: ["En skandinavisk dramaturgisk modell med syv faser", "Et programmeringsspråk", "En type retningsmikrofon som fanger opp lyd fra en bestemt kilde under filmopptak", "En fargemodell som beskriver hvordan farger settes sammen av lys på en dataskjerm"],
      explanation: "Berettermodellen er en skandinavisk dramaturgisk modell med syv faser, der den starter med anslaget som fanger oppmerksomheten.",
    },
    {
      question: "Hva er hensikten med anslaget i berettermodellen?",
      options: ["Å fange oppmerksomheten og sette tonen", "Å presentere alle detaljer", "Å vise rulleteksten og kreditere alle som har bidratt i produksjonen av fortellingen", "Å avslutte historien"],
      explanation: "Anslaget er den første fasen i berettermodellen og har som hensikt å fange oppmerksomheten og sette tonen for fortellingen.",
    },
  ],
  "im-vg1-8-5": [
    {
      question: "Hva er en database?",
      options: ["En organisert samling av data som lagres og administreres elektronisk", "En type kamera", "En lydfil som inneholder strukturert informasjon om et prosjekt i komprimert form", "En nettleser som brukeren bruker for å hente og vise informasjon lagret på servere"],
      explanation: "En database er en organisert samling av data som lagres og administreres elektronisk, slik at man effektivt kan lagre, hente, oppdatere og slette data.",
    },
    {
      question: "Hvordan organiserer en relasjonsdatabase data?",
      options: ["I tabeller med rader og kolonner", "Som løse tekstfiler", "Som lydspor der hvert spor lagrer én kategori av data adskilt fra de andre sporene", "Som lydspor"],
      explanation: "En relasjonsdatabase organiserer data i tabeller med rader og kolonner, der tabeller kan knyttes sammen gjennom relasjoner.",
    },
    {
      question: "Hva er en rad (record) i en databasetabell?",
      options: ["En enkelt oppføring med data, f.eks. én bestemt elev", "Navnet på en kolonne", "Navnet på en kolonne som beskriver hvilken type data feltet skal inneholde i tabellen", "Hele databasen med alle tabeller, relasjoner og oppføringer samlet på ett og samme sted"],
      explanation: "En rad (record) er en enkelt oppføring i en tabell - f.eks. all informasjon om én bestemt elev.",
    },
    {
      question: "Hva gjør et språk som SQL?",
      options: ["Lar deg hente, legge til og endre data i en database", "Setter opp et nettverk", "Setter opp og konfigurerer nettverket som databasen og serverne kommuniserer over", "Designer logoer og grafiske profiler som senere kan knyttes til data i en database"],
      explanation: "SQL (Structured Query Language) er et språk som lar deg spørre etter, legge til, endre og slette data i en relasjonsdatabase.",
    },
    {
      question: "Hva er en fordel med å bruke en database fremfor løse filer?",
      options: ["Data kan lagres, hentes og oppdateres effektivt og strukturert", "Det gjør dataene umulige å finne", "Det krever ingen organisering på forhånd fordi databasen ordner alt helt automatisk selv", "Det gjør dataene vanskeligere å finne fordi alt lagres samlet i én enkelt uoversiktlig fil"],
      explanation: "En database gjør at data kan lagres, hentes, oppdateres og slettes effektivt og strukturert, noe som er vanskelig med mange løse filer.",
    },
  ],
  "im-vg1-8-6": [
    {
      question: "Hva er et miljøproblem knyttet til produksjon av elektronikk?",
      options: ["Den krever sjeldne mineraler som ofte utvinnes med stor miljøbelastning", "Den gir bare positive effekter", "Den regnes som helt ren fordi utvinning av metaller foregår i lukkede og kontrollerte anlegg", "Den bruker svært lite ressurser fordi komponentene er små og lette å produsere i store kvanta"],
      explanation: "Produksjon av elektronikk krever sjeldne jordarter og mineraler som ofte utvinnes under dårlige arbeidsforhold og med stor miljøbelastning.",
    },
    {
      question: "Hva kjennetegner en lineær økonomi?",
      options: ["Produser → bruk → kast", "Produser → bruk → reparer → gjenbruk → resirkuler", "Bare resirkulering", "Ingen produksjon"],
      explanation: "Den lineære økonomien følger mønsteret produser → bruk → kast, der ressursene brukes opp uten gjenbruk.",
    },
    {
      question: "Hva kjennetegner en sirkulærøkonomi i IT?",
      options: ["Produkter repareres, gjenbrukes og resirkuleres i et kretsløp", "Alt kastes etter én gangs bruk", "Produktene produseres i store mengder på lager, men tas sjelden i bruk før de blir foreldet", "Ingen komponenter resirkuleres fordi materialene i elektronikk ikke lar seg gjenvinne på nytt"],
      explanation: "Sirkulærøkonomi følger mønsteret produser → bruk → reparer → gjenbruk → resirkuler, der ressursene holdes i et kretsløp i stedet for å kastes.",
    },
    {
      question: "Hva er et tiltak for mer bærekraftig bruk av IT-utstyr?",
      options: ["Å reparere og gjenbruke utstyr i stedet for å kaste det", "Å bytte ut alt utstyr hvert år", "Å kaste utstyr som fortsatt fungerer for å gi plass til nyere modeller med bedre ytelse", "Å kaste utstyr som fungerer"],
      explanation: "Et bærekraftig tiltak er å forlenge levetiden til utstyr gjennom reparasjon og gjenbruk, i stedet for å kaste og kjøpe nytt unødvendig.",
    },
    {
      question: "Hvorfor er datasentre en bærekraftsutfordring?",
      options: ["De er energikrevende og trenger mye strøm og kjøling", "De er helt utslippsfrie uten tiltak", "De er helt utslippsfrie også uten tiltak fordi de utelukkende drives av fornybar vannkraft", "De bruker ingen energi"],
      explanation: "Datasentre er energikrevende - de bruker mye strøm til drift og kjøling, noe som gir et betydelig klima- og miljøfotavtrykk.",
    },
  ],
  "im-vg1-8-7": [
    {
      question: "Hvilken lov regulerer arbeidsmiljøet i Norge?",
      options: ["Arbeidsmiljøloven", "Vegtrafikkloven", "Markedsføringsloven", "Opphavsrettsloven"],
      explanation: "Arbeidsmiljøloven regulerer arbeidsmiljøet i Norge og gjelder for alle arbeidsplasser, også i IT-bransjen.",
    },
    {
      question: "Hva er en typisk HMS-utfordring i IT-bransjen?",
      options: ["Belastningsskader fra mye skjermarbeid", "Fare fra tunge maskiner", "Håndtering av giftige kjemikalier som brukes daglig i vanlig kontorarbeid", "Giftige kjemikalier"],
      explanation: "IT-arbeid har egne HMS-utfordringer, særlig belastningsskader (muskel- og skjelettplager) fra mye stillesittende skjermarbeid.",
    },
    {
      question: "Hva er god ergonomi ved skjermarbeid?",
      options: ["Riktig skjermhøyde, god stol og avvekslende arbeidsstillinger", "Å ha skjermen så lavt som mulig", "Å unngå pauser i løpet av dagen slik at man holder full konsentrasjon over lengre tid", "Å plassere skjermen så lavt som mulig slik at man alltid ser litt nedover mot innholdet"],
      explanation: "God ergonomi innebærer riktig skjermhøyde, en god stol, riktig sitteholdning og avveksling/pauser for å forebygge belastningsskader.",
    },
    {
      question: "Hva er en typisk belastningsskade ved skjermarbeid?",
      options: ["Nakke- og skuldersmerter", "Hørselsskader fra støy", "Forgiftning fra kjemikalier i arbeidsmiljøet", "Brannskader"],
      explanation: "Nakke- og skuldersmerter er vanlige belastningsskader ved skjermarbeid, ofte fra feil skjermhøyde og anspente skuldre.",
    },
    {
      question: "Hva plikter arbeidsgiver å sørge for ifølge arbeidsmiljøloven?",
      options: ["Et fullt forsvarlig arbeidsmiljø", "At ansatte aldri tar pauser", "At de ansatte aldri tar pauser slik at produksjonen holder jevn og høy fart hele dagen", "At lønnen holdes hemmelig"],
      explanation: "Arbeidsmiljøloven pålegger arbeidsgiver å sørge for et fullt forsvarlig arbeidsmiljø, både fysisk og psykososialt.",
    },
  ],
  "im-vg1-8-8": [
    {
      question: "Hva gjør en frontendutvikler?",
      options: ["Bygger det brukeren ser, som nettsider og apper", "Bygger systemer bak kulissene på serveren", "Bygger systemene bak kulissene på serveren, som databaser og logikk brukeren ikke ser", "Reparerer maskinvare"],
      explanation: "En frontendutvikler bygger det brukeren ser og interagerer med - nettsider og apper - mens en backendutvikler bygger systemene bak kulissene.",
    },
    {
      question: "Hva gjør en backendutvikler?",
      options: ["Bygger systemene bak kulissene, som servere og databaser", "Lager bare det brukeren ser", "Designer plakater og trykksaker som markedsfører applikasjonen mot nye brukere", "Lager kun det brukeren ser og trykker på, som grensesnittet i nettsider og apper"],
      explanation: "En backendutvikler bygger systemene bak kulissene - servere, databaser og logikk som driver applikasjonen.",
    },
    {
      question: "Hva gjør en UX-/UI-designer?",
      options: ["Designer digitale brukeropplevelser og grensesnitt", "Reparerer datamaskiner", "Reparerer maskinvare og bytter defekte komponenter som skjermkort og minne", "Fører regnskap og budsjetter for IT-avdelingens innkjøp og lisenskostnader"],
      explanation: "En UX-/UI-designer designer digitale brukeropplevelser (UX) og det visuelle grensesnittet (UI) som brukerne møter.",
    },
    {
      question: "Hva er et eksempel på et yrke innen medieproduksjon?",
      options: ["Grafisk designer", "Backendutvikler", "Nettverksadministrator", "Databaseadministrator"],
      explanation: "En grafisk designer som lager visuell kommunikasjon (logoer, plakater, profiler) er et yrke innen medieproduksjon.",
    },
    {
      question: "Hvorfor er det viktig å holde seg oppdatert i IT- og mediebransjen?",
      options: ["Fordi teknologi og verktøy endrer seg raskt", "Fordi det er forbudt å lære nytt", "Fordi kundene alltid krever nøyaktig de samme løsningene som for ti år siden", "Fordi ingenting forandrer seg"],
      explanation: "IT og medieproduksjon endrer seg raskt - ny teknologi og nye verktøy kommer stadig, så livslang læring er nødvendig for å holde seg relevant.",
    },
  ],
};

export default quizData_im_vg1;
