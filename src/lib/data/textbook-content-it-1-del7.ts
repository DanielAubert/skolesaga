/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Informasjonsteknologi 1 (IT 1) VG2
 *
 * Seksjon 7: Nettverk, sikkerhet og personvern (Kapittel 7.1–7.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 7.1: Datanettverkenes oppbygging
// ============================================================================

export const CHAPTER_IT_1_7_1: TextbookChapter = {
  id: 'it-1-7-1',
  courseId: 'it-1',
  chapterNumber: '7.1',
  title: 'Datanettverkenes oppbygging',
  description: 'Forstå hvordan datanettverk er bygd opp med LAN, WAN, nettverkstopologier og sentrale nettverkskomponenter som ruter, svitsj og aksesspunkt.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for hvordan datanettverk er bygd opp og fungerer',
    'forklare forskjellen mellom LAN og WAN og beskrive ulike nettverkstopologier',
  ],
  keyTerms: [
    { term: 'LAN', definition: 'Local Area Network er et lokalt nettverk som dekker et begrenset geografisk område, for eksempel et hjem, et klasserom eller en kontorbygning. LAN-nettverk kobler sammen datamaskiner, skrivere og andre enheter slik at de kan dele ressurser og kommunisere med hverandre. Ethernet og Wi-Fi er de vanligste teknologiene for LAN. Et LAN eies og administreres vanligvis av én organisasjon eller person, og har typisk høy hastighet og lav forsinkelse sammenlignet med nettverk som strekker seg over større avstander.' },
    { term: 'WAN', definition: 'Wide Area Network er et nettverk som dekker et stort geografisk område, for eksempel et land eller hele verden. Internett er det største og mest kjente WAN-nettverket. WAN kobler sammen flere LAN-nettverk over lange avstander ved hjelp av leide linjer, fiberoptiske kabler, satelittforbindelser eller mobilnett. WAN-nettverk har vanligvis lavere hastighet og høyere forsinkelse enn LAN fordi dataene må reise lengre og gjennom flere nettverksenheter.' },
    { term: 'Nettverkstopologi', definition: 'Nettverkstopologi beskriver den fysiske eller logiske strukturen i et nettverk, altså hvordan enhetene er koblet sammen. Vanlige topologier inkluderer stjernetopologi (alle enheter koblet til en sentral enhet), bustopologi (alle enheter koblet til en felles kabel), ringtopologi (enheter koblet i en lukket krets) og meshetopologi (enheter koblet til flere andre enheter for redundans). Valget av topologi påvirker nettverkets ytelse, pålitelighet og kostnad.' },
    { term: 'Svitsj', definition: 'En svitsj (switch) er en nettverksenhet som kobler sammen enheter i et LAN. Den mottar datapakker og videresender dem til riktig mottaker basert på MAC-adresser. I motsetning til en hub, som sender data til alle tilkoblede enheter, sender en svitsj data kun til den enheten som skal motta den. Dette gjør nettverket mer effektivt og sikkert. Moderne svitsjer kan håndtere høye hastigheter og støtter funksjoner som VLAN for å segmentere nettverket.' },
    { term: 'Ruter', definition: 'En ruter (router) er en nettverksenhet som videresender datapakker mellom ulike nettverk. Ruteren bruker IP-adresser og rutingtabeller for å finne den beste veien for hver datapakke. Hjemmeruteren din kobler ditt lokale nettverk (LAN) til internettleverandørens nettverk (WAN). Rutere utfører også NAT (Network Address Translation), som gjør at flere enheter kan dele én offentlig IP-adresse, og har ofte innebygd brannmur for sikkerhet.' },
    { term: 'Aksesspunkt', definition: 'Et trådløst aksesspunkt (access point, AP) er en nettverksenhet som lar trådløse enheter koble seg til et kablet nettverk via Wi-Fi. Aksesspunktet fungerer som en bro mellom det trådløse og det kablede nettverket. I hjemmenettverk er aksesspunktet ofte integrert i ruteren, mens bedrifter bruker separate aksesspunkter for å dekke større områder. Aksesspunkter sender ut et nettverksnavn (SSID) som enheter kan koble seg til.' },
    { term: 'MAC-adresse', definition: 'Media Access Control-adresse er en unik fysisk adresse som er tildelt hvert nettverkskort ved produksjon. MAC-adressen er 48 bit lang og skrives vanligvis som seks par med heksadesimale tall, for eksempel AA:BB:CC:11:22:33. Den brukes av svitsjer for å identifisere og videresende data til riktig enhet innenfor et lokalt nettverk. I motsetning til IP-adresser, som kan endres, er MAC-adressen knyttet til maskinvaren.' },
  ],
  content: [
    {
      id: 'it-1-7-1-intro',
      type: 'text',
      content: `## Datanettverkenes oppbygging

Tenk deg en vanlig skoledag: Du kobler deg til skolens Wi-Fi med mobilen, sender en melding til en venn, laster opp en fil til læringsplattformen og strømmer musikk i friminuttet. Alt dette er mulig takket være datanettverk – systemer av sammenkoblede enheter som kan utveksle informasjon med hverandre.

Et **datanettverk** er to eller flere datamaskiner eller enheter som er koblet sammen slik at de kan kommunisere og dele ressurser. Nettverket kan være lite, som to datamaskiner koblet sammen med en kabel hjemme, eller enormt, som internett som kobler sammen milliarder av enheter over hele verden. For å forstå hvordan moderne nettverk fungerer, må vi kjenne til grunnleggende begreper som nettverkstyper, topologier og nettverkskomponenter.`,
    },
    {
      id: 'it-1-7-1-def-nettverk',
      type: 'definition',
      title: 'Datanettverk',
      content: `Et **datanettverk** er en samling av datamaskiner og andre enheter som er koblet sammen for å dele informasjon og ressurser. Nettverket kan bruke kablede forbindelser (Ethernet-kabler, fiberoptikk) eller trådløse forbindelser (Wi-Fi, Bluetooth, mobilnett). For at enhetene skal kunne kommunisere, trenger de felles kommunikasjonsregler – kalt protokoller – og unike adresser som identifiserer hver enhet. Datanettverk gjør det mulig å dele filer, skrivere, internettilgang og andre ressurser mellom brukere.`,
    },
    {
      id: 'it-1-7-1-text-typer',
      type: 'text',
      title: 'Nettverkstyper: LAN, WAN og andre',
      content: `Datanettverk klassifiseres etter størrelse og geografisk utstrekning. De to viktigste typene er LAN og WAN, men det finnes også mellomvarianter.

### LAN – Local Area Network

Et **LAN** (Local Area Network) er et nettverk som dekker et begrenset område, typisk en bygning eller et campus. Eksempler på LAN er:

- Hjemmenettverket ditt med ruter, PC, mobil og smart-TV
- Nettverket i et klasserom med lærer-PC og elevmaskiner
- Kontorenettverket i en bedrift

LAN-nettverk kjennetegnes av **høy hastighet** (typisk 100 Mbps til 10 Gbps), **lav forsinkelse** og at de eies og administreres av organisasjonen eller personen som bruker dem. Den vanligste kablede teknologien for LAN er **Ethernet** (IEEE 802.3), mens **Wi-Fi** (IEEE 802.11) brukes for trådløs tilkobling.

### WAN – Wide Area Network

Et **WAN** (Wide Area Network) dekker et stort geografisk område og kobler sammen flere LAN-nettverk over lange avstander. **Internett** er verdens største WAN. Andre eksempler er:

- Et selskaps nettverk som kobler sammen kontorer i Oslo, Bergen og Tromsø
- Et universitets nettverk som binder sammen flere campus
- UNINETT, som kobler sammen norske universiteter og høgskoler

WAN-nettverk bruker infrastruktur som fiberoptiske kabler, leide linjer og satellittforbindelser. De har generelt lavere hastighet og høyere forsinkelse enn LAN.

### Andre nettverkstyper

- **MAN** (Metropolitan Area Network): Dekker en by eller et storbyområde, for eksempel et kommunalt fibernett
- **PAN** (Personal Area Network): Et svært lite nettverk rundt én person, for eksempel Bluetooth-forbindelsen mellom mobil og trådløse ørepropper
- **WLAN** (Wireless LAN): Et trådløst lokalt nettverk, teknisk sett en trådløs variant av LAN som bruker Wi-Fi`,
    },
    {
      id: 'it-1-7-1-example-hjemmenettverk',
      type: 'example',
      title: 'Eksempel: Et typisk hjemmenettverk',
      content: `La oss se på et typisk hjemmenettverk og identifisere komponentene:

**Situasjon:** Familien Hansen har bredbånd fra Telenor. I huset har de:
- En ruter/modem fra Telenor (koblet til fiberuttaket i veggen)
- En stasjonær PC koblet til ruteren med Ethernet-kabel
- To bærbare PC-er, tre mobiltelefoner og en smart-TV koblet til via Wi-Fi
- En nettverksskriver koblet til via Wi-Fi

**Nettverksanalyse:**
- **Nettverkstype:** Dette er et **LAN** (lokalt hjemmenettverk)
- **Ruter:** Kobler LAN-et til internett (WAN). Utfører NAT slik at alle enheter deler én offentlig IP-adresse
- **Innebygd svitsj:** Ruteren har Ethernet-porter som fungerer som svitsj for kablede enheter
- **Innebygd aksesspunkt:** Ruteren sender ut Wi-Fi-signal for trådløse enheter
- **Topologi:** Stjernetopologi – alle enheter er koblet til ruteren som sentralt punkt

Alle enhetene i nettverket får tildelt en **privat IP-adresse** (f.eks. 192.168.1.x) av ruterens DHCP-server, og kan kommunisere med hverandre og med internett.`,
    },
    {
      id: 'it-1-7-1-text-topologier',
      type: 'text',
      title: 'Nettverkstopologier',
      content: `**Nettverkstopologi** beskriver hvordan enhetene i et nettverk er koblet sammen. Vi skiller mellom **fysisk topologi** (den faktiske kablingen) og **logisk topologi** (hvordan data flyter i nettverket). Her er de vanligste topologiene:

### Stjernetopologi

I en stjernetopologi er alle enheter koblet til en sentral enhet, vanligvis en svitsj eller ruter. All kommunikasjon går gjennom det sentrale punktet.

**Fordeler:**
- Enkel å sette opp og utvide med nye enheter
- Hvis én enhet svikter, påvirkes ikke resten av nettverket
- Lett å feilsøke problemer

**Ulemper:**
- Den sentrale enheten er et enkelt feilpunkt – hvis den svikter, mister alle forbindelsen
- Krever mer kabling enn bustopologi

Stjernetopologi er den **desidert vanligste** topologien i moderne nettverk, både i hjemme- og bedriftsnettverk.

### Bustopologi

I en bustopologi er alle enheter koblet til én felles kabel (bussen). Data sendes langs kabelen og mottas av alle enheter, men bare mottakeren behandler dataene.

**Fordeler:**
- Enkel og billig – krever lite kabling
- Lett å sette opp for små nettverk

**Ulemper:**
- Hvis hovedkabelen ryker, faller hele nettverket
- Vanskelig å feilsøke
- Ytelsen synker med mange enheter (kollisjoner)

Bustopologi var vanlig i eldre Ethernet-nettverk (10BASE2, 10BASE5), men brukes sjelden i dag.

### Ringtopologi

I en ringtopologi er enheter koblet i en lukket krets der data sendes i én retning rundt ringen. Hver enhet mottar data fra forrige og sender videre til neste.

**Fordeler:**
- Forutsigbar ytelse – ingen kollisjoner
- Alle enheter har lik tilgang til nettverket

**Ulemper:**
- Hvis én enhet eller kabel svikter, kan hele ringen bryte sammen
- Vanskelig å legge til nye enheter uten å stoppe nettverket

Ringtopologi ble brukt i **Token Ring**-nettverk (IBM), men er i dag stort sett erstattet av stjernetopologi.

### Meshetopologi

I en meshetopologi er enheter koblet til flere andre enheter, noe som gir redundante forbindelser. I en **full mesh** er hver enhet koblet til alle andre. I en **partiell mesh** har bare noen enheter flere forbindelser.

**Fordeler:**
- Svært pålitelig – hvis én forbindelse svikter, finnes alternative veier
- God ytelse ved å fordele trafikk over flere veier

**Ulemper:**
- Dyrt og komplekst å sette opp
- Krever mye kabling eller trådløse forbindelser

Meshetopologi brukes i **ryggradsnettverk** (backbone) på internett og i trådløse mesh-nettverk for å dekke store områder.`,
    },
    {
      id: 'it-1-7-1-text-komponenter',
      type: 'text',
      title: 'Nettverkskomponenter',
      content: `Et nettverk består av flere komponenter som samarbeider for å flytte data mellom enheter. Her er de viktigste:

### Svitsj (Switch)

En **svitsj** er hjertet i et LAN. Den kobler sammen enheter i nettverket og videresender datapakker til riktig mottaker basert på **MAC-adresser**. Svitsjen bygger opp en tabell over hvilke MAC-adresser som er tilkoblet hvilke porter, og bruker denne tabellen til å sende data direkte til mottakeren i stedet for å kringkaste til alle.

Moderne svitsjer støtter funksjoner som:
- **VLAN** (Virtual LAN) – deler et fysisk nettverk i flere logiske nettverk
- **PoE** (Power over Ethernet) – leverer strøm gjennom nettverkskabelen til enheter som IP-kameraer og aksesspunkter
- **Link Aggregation** – kombinerer flere porter for høyere hastighet

### Ruter (Router)

En **ruter** videresender datapakker mellom ulike nettverk. Mens svitsjen jobber innenfor ett nettverk (LAN), kobler ruteren sammen flere nettverk – for eksempel ditt LAN med internettleverandørens nettverk.

Ruteren bruker **IP-adresser** og **rutingtabeller** for å bestemme beste vei for hver datapakke. Viktige funksjoner:
- **NAT** (Network Address Translation) – lar flere enheter dele én offentlig IP-adresse
- **DHCP** (Dynamic Host Configuration Protocol) – tildeler automatisk IP-adresser til enheter
- **Brannmur** – filtrerer trafikk for å beskytte nettverket

### Aksesspunkt (Access Point)

Et **trådløst aksesspunkt** lar enheter koble seg til nettverket via Wi-Fi. Det fungerer som en bro mellom det trådløse og det kablede nettverket. I hjemmenettverk er aksesspunktet vanligvis integrert i ruteren, mens bedrifter bruker dedikerte aksesspunkter for bedre dekning.

### Modem

Et **modem** (modulator-demodulator) konverterer digitale signaler til analoge signaler og omvendt. Det brukes for å koble et lokalt nettverk til internett via en bredbåndslinje, for eksempel DSL, kabel-TV-nett eller fiber. Mange moderne enheter kombinerer modem og ruter i én boks.

### Brannmur (Firewall)

En **brannmur** er en sikkerhetsmekanisme som overvåker og kontrollerer nettverkstrafikk basert på forhåndsdefinerte regler. Den kan være maskinvarebasert (en egen enhet) eller programvarebasert (et program på datamaskinen). Brannmuren beskytter nettverket ved å blokkere uønsket trafikk og tillate godkjent kommunikasjon.

### Nettverkskabler

De vanligste kabeltypene i nettverk er:
- **Ethernet-kabel (UTP/STP):** Tvinnet parkabel, vanligvis med RJ-45-kontakt. Kategorier som Cat5e (1 Gbps), Cat6 (10 Gbps over korte avstander) og Cat6a (10 Gbps over 100 m)
- **Fiberoptisk kabel:** Bruker lys til å overføre data over lange avstander med svært høy hastighet. Brukes i ryggradsnettverk og for bredbåndstilkobling
- **Koaksialkabel:** Eldre kabeltype som fortsatt brukes i kabel-TV-nettverk`,
    },
    {
      id: 'it-1-7-1-text-adresser',
      type: 'text',
      title: 'IP-adresser og adressering',
      content: `For at enheter i et nettverk skal kunne kommunisere, trenger de unike adresser. I datanettverk brukes to typer adresser:

### MAC-adresser (fysiske adresser)

Hver nettverksenhet har en unik **MAC-adresse** som er brent inn i nettverkskortet ved produksjon. MAC-adressen er 48 bit lang og skrives som seks grupper med heksadesimale tall, for eksempel \`AA:BB:CC:11:22:33\`. MAC-adresser brukes på **lag 2** (datalink-laget) i nettverksmodellen for å identifisere enheter innenfor et lokalt nettverk.

### IP-adresser (logiske adresser)

**IP-adresser** er logiske adresser som tildeles enheter for kommunikasjon over nettverk. Det finnes to versjoner:

- **IPv4:** Bruker 32-bits adresser, skrevet som fire tallgrupper fra 0 til 255, for eksempel \`192.168.1.100\`. IPv4 gir plass til ca. 4,3 milliarder unike adresser, noe som ikke lenger er nok for alle enheter i verden.
- **IPv6:** Bruker 128-bits adresser, skrevet som åtte grupper med heksadesimale tall, for eksempel \`2001:0db8:85a3:0000:0000:8a2e:0370:7334\`. IPv6 gir et nesten uendelig antall adresser.

IP-adresser deles inn i **offentlige** og **private** adresser:
- **Offentlige IP-adresser** er unike på internett og tildeles av internettleverandøren
- **Private IP-adresser** brukes innenfor LAN og er ikke tilgjengelige direkte fra internett. Vanlige private adresseområder er 192.168.x.x, 10.x.x.x og 172.16.x.x–172.31.x.x

Ruteren bruker **NAT** for å oversette mellom private og offentlige adresser, slik at mange enheter kan dele én offentlig IP-adresse.`,
    },
    {
      id: 'it-1-7-1-note-wifi',
      type: 'note',
      title: 'Wi-Fi-standarder',
      content: `Wi-Fi har utviklet seg gjennom flere generasjoner med stadig høyere hastigheter:

| Generasjon | Standard | Maks hastighet | Frekvens |
|---|---|---|---|
| Wi-Fi 4 | 802.11n | 600 Mbps | 2,4 og 5 GHz |
| Wi-Fi 5 | 802.11ac | 3,5 Gbps | 5 GHz |
| Wi-Fi 6 | 802.11ax | 9,6 Gbps | 2,4 og 5 GHz |
| Wi-Fi 7 | 802.11be | 46 Gbps | 2,4, 5 og 6 GHz |

Høyere frekvenser gir raskere hastighet, men kortere rekkevidde. Derfor bruker moderne rutere både 2,4 GHz (bedre rekkevidde) og 5 GHz (raskere hastighet).`,
    },
    {
      id: 'it-1-7-1-tip-ipconfig',
      type: 'tip',
      title: 'Finn nettverksinformasjon på din maskin',
      content: `Du kan finne nettverksinformasjonen til din egen datamaskin med enkle kommandoer:

**Windows:** Åpne Ledetekst (cmd) og skriv \`ipconfig /all\`
**Mac/Linux:** Åpne Terminal og skriv \`ifconfig\` eller \`ip addr\`

Da ser du blant annet din IP-adresse, subnettmaske, standard gateway (ruterens adresse), MAC-adresse og DNS-servere. Prøv det selv!`,
    },
    {
      id: 'it-1-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it1-7-1-ex-1',
        number: '7.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er et LAN?',
        options: [
          { id: 'a', text: 'Et nettverk som dekker et stort geografisk område, som et helt land', isCorrect: false, feedback: 'Det du beskriver er et WAN (Wide Area Network).' },
          { id: 'b', text: 'Et lokalt nettverk som dekker et begrenset område, som et hjem eller en skole', isCorrect: true },
          { id: 'c', text: 'Et personlig nettverk mellom mobil og trådløse ørepropper', isCorrect: false, feedback: 'Det du beskriver er et PAN (Personal Area Network).' },
          { id: 'd', text: 'Et nettverk som bare bruker trådløse forbindelser', isCorrect: false, feedback: 'LAN kan bruke både kablede og trådløse forbindelser.' },
        ],
        solution: 'LAN (Local Area Network) er et lokalt nettverk som dekker et begrenset geografisk område, typisk en bygning eller et campus. Hjemmenettverket ditt og skolens nettverk er eksempler på LAN.',
      },
    },
    {
      id: 'it-1-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it1-7-1-ex-2',
        number: '7.1.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedoppgaven til en svitsj (switch) i et nettverk?',
        options: [
          { id: 'a', text: 'Å koble det lokale nettverket til internett', isCorrect: false, feedback: 'Det er ruterens oppgave å koble nettverk sammen.' },
          { id: 'b', text: 'Å videresende datapakker til riktig enhet innenfor et LAN basert på MAC-adresser', isCorrect: true },
          { id: 'c', text: 'Å konvertere digitale signaler til analoge signaler', isCorrect: false, feedback: 'Det er modemets oppgave.' },
          { id: 'd', text: 'Å sende trådløse signaler til mobile enheter', isCorrect: false, feedback: 'Det er aksesspunktets oppgave.' },
        ],
        solution: 'En svitsj kobler sammen enheter i et LAN og videresender datapakker til riktig mottaker basert på MAC-adresser. Den bygger en adressetabell som knytter MAC-adresser til porter, slik at data sendes direkte til mottakeren.',
      },
    },
    {
      id: 'it-1-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it1-7-1-ex-3',
        number: '7.1.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken nettverkstopologi er vanligst i moderne nettverk?',
        options: [
          { id: 'a', text: 'Bustopologi', isCorrect: false, feedback: 'Bustopologi var vanlig i eldre nettverk, men brukes sjelden i dag.' },
          { id: 'b', text: 'Ringtopologi', isCorrect: false, feedback: 'Ringtopologi (Token Ring) er i dag stort sett erstattet.' },
          { id: 'c', text: 'Stjernetopologi', isCorrect: true },
          { id: 'd', text: 'Alle topologier er like vanlige', isCorrect: false, feedback: 'Stjernetopologi dominerer i moderne nettverk.' },
        ],
        solution: 'Stjernetopologi er den vanligste topologien i moderne nettverk. Alle enheter kobles til en sentral svitsj eller ruter. Denne topologien er enkel å sette opp, lett å utvide, og hvis én enhet svikter påvirkes ikke resten av nettverket.',
      },
    },
    {
      id: 'it-1-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it1-7-1-ex-4',
        number: '7.1.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er forskjellen mellom en svitsj og en ruter?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell – begge gjør det samme', isCorrect: false, feedback: 'Svitsjer og rutere har ulike oppgaver i nettverket.' },
          { id: 'b', text: 'En svitsj kobler enheter innenfor ett LAN med MAC-adresser, mens en ruter kobler ulike nettverk sammen med IP-adresser', isCorrect: true },
          { id: 'c', text: 'En svitsj er trådløs og en ruter er kablet', isCorrect: false, feedback: 'Både svitsjer og rutere kan være kablede eller trådløse.' },
          { id: 'd', text: 'En ruter brukes bare i hjemmenettverk, mens en svitsj brukes i bedrifter', isCorrect: false, feedback: 'Begge brukes i alle typer nettverk.' },
        ],
        solution: 'En svitsj opererer på lag 2 (datalinklaget) og videresender datapakker innenfor et LAN basert på MAC-adresser. En ruter opererer på lag 3 (nettverkslaget) og videresender pakker mellom ulike nettverk basert på IP-adresser. Ruteren bestemmer beste rute mellom nettverk.',
      },
    },
    {
      id: 'it-1-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it1-7-1-ex-5',
        number: '7.1.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv et typisk skolenettverk. Hvilke nettverkskomponenter trenger skolen, hvilken topologi brukes mest sannsynlig, og hva er forskjellen mellom skolens LAN og tilkoblingen til internett (WAN)? Tegn gjerne en enkel skisse.',
        solution: `Et typisk skolenettverk inneholder følgende komponenter:

- **Ruter:** Kobler skolens LAN til internett (WAN) via fiberbredbånd. Utfører NAT og har brannmur.
- **Svitsjer:** Sentrale svitsjer i serverrom og mindre svitsjer i hvert klasserom for å koble sammen kablede enheter.
- **Aksesspunkter:** Trådløse aksesspunkter i ganger og klasserom for Wi-Fi-dekning til bærbare PC-er og mobiltelefoner.
- **Servere:** Filserver, skriverserver og eventuelt læringsplattform-server.
- **Brannmur:** Beskytter nettverket og kan blokkere uønskede nettsider.

Topologien er stjernetopologi – alle enheter kobles til svitsjer, og svitsjene kobles til sentral ruter.

Skolens LAN er det interne nettverket med høy hastighet (typisk 1 Gbps) og lav forsinkelse. Tilkoblingen til internett (WAN) går via ruteren og har lavere hastighet (avhengig av bredbåndsabonnementet). LAN-et eies av skolen, mens WAN-tilkoblingen leies fra en internettleverandør.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-1-7-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it1-7-1-ex-6',
        number: '7.1.6',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva er NAT (Network Address Translation), og hvorfor er det nødvendig?',
        options: [
          { id: 'a', text: 'NAT er en type brannmur som blokkerer skadelig trafikk', isCorrect: false, feedback: 'NAT er ikke en brannmur, selv om det kan gi noe sikkerhet ved å skjule interne adresser.' },
          { id: 'b', text: 'NAT oversetter mellom private og offentlige IP-adresser, slik at flere enheter kan dele én offentlig IP-adresse', isCorrect: true },
          { id: 'c', text: 'NAT er en trådløs standard som erstatter Wi-Fi', isCorrect: false, feedback: 'NAT er en adresseoversettingsmekanisme, ikke en trådløs standard.' },
          { id: 'd', text: 'NAT er en krypteringsprotokoll for sikker kommunikasjon', isCorrect: false, feedback: 'NAT handler om adresseoversettelse, ikke kryptering.' },
        ],
        solution: 'NAT (Network Address Translation) er en mekanisme i ruteren som oversetter mellom private IP-adresser (brukt i LAN) og offentlige IP-adresser (brukt på internett). NAT er nødvendig fordi det ikke finnes nok offentlige IPv4-adresser til alle enheter i verden. Med NAT kan mange enheter i et hjemmenettverk dele én offentlig IP-adresse.',
      },
    },
    {
      id: 'it-1-7-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it1-7-1-ex-7',
        number: '7.1.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign stjernetopologi og meshetopologi. Beskriv fordeler og ulemper med hver, og forklar i hvilke situasjoner det er mest hensiktsmessig å bruke den ene fremfor den andre. Gi konkrete eksempler.',
        solution: `**Stjernetopologi:**
- Alle enheter koblet til en sentral svitsj/ruter
- Fordeler: Enkel å sette opp, lett å utvide, enkelt å feilsøke, én enhets feil påvirker ikke resten
- Ulemper: Sentralt feilpunkt (hvis svitsjen svikter, mister alle forbindelsen), krever mer kabling enn bustopologi
- Best egnet for: Hjemmenettverk, kontornettverk, skolenettverk – altså vanlige LAN der kostnad og enkelhet er viktig

**Meshetopologi:**
- Enheter har redundante forbindelser til flere andre enheter
- Fordeler: Svært pålitelig (ingen enkelt feilpunkt), trafikk kan fordeles over flere veier, nettverket fungerer selv om forbindelser svikter
- Ulemper: Dyrt (mye kabling/utstyr), komplekst å konfigurere og vedlikeholde
- Best egnet for: Internetts ryggradsnettverk, militære kommunikasjonssystemer, kritisk infrastruktur der oppetid er avgjørende, trådløse mesh-nettverk i store bygg

I praksis bruker de fleste nettverk stjernetopologi fordi det er enklere og billigere. Meshetopologi brukes der pålitelighet er kritisk viktig og budsjett er mindre bekymring.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  prevChapter: 'it-1-6-5',
  nextChapter: 'it-1-7-2',
};

// ============================================================================
// KAPITTEL 7.2: Internett og kommunikasjonsprotokoller
// ============================================================================

export const CHAPTER_IT_1_7_2: TextbookChapter = {
  id: 'it-1-7-2',
  courseId: 'it-1',
  chapterNumber: '7.2',
  title: 'Internett og kommunikasjonsprotokoller',
  description: 'Lær hvordan internett fungerer gjennom protokoller som TCP/IP, HTTP/HTTPS og DNS, og forstå lagdelingen i OSI-modellen og TCP/IP-modellen.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjøre rede for sentrale kommunikasjonsprotokoller og deres funksjon',
    'forklare lagmodeller for nettverkskommunikasjon og hvordan data sendes over internett',
  ],
  keyTerms: [
    { term: 'Protokoll', definition: 'En protokoll er et sett med regler og standarder som bestemmer hvordan data formateres, sendes, mottas og behandles i et nettverk. Uten felles protokoller ville ikke enheter fra ulike produsenter kunne kommunisere med hverandre. Protokoller definerer alt fra fysiske signaler på kabelen til formatet på e-postmeldinger. Eksempler er TCP, IP, HTTP, DNS og SMTP. Protokollene er organisert i lag der hvert lag har sine ansvarsområder.' },
    { term: 'TCP/IP', definition: 'Transmission Control Protocol/Internet Protocol er protokollparet som utgjør fundamentet for internett. IP tar seg av adressering og ruting – det sørger for at datapakker sendes til riktig mottaker. TCP sørger for pålitelig levering – det deler data opp i segmenter, nummererer dem, og sikrer at alle kommer frem i riktig rekkefølge. Hvis en pakke går tapt, sender TCP den på nytt. Sammen gjør TCP og IP det mulig for enhver enhet å kommunisere pålitelig med enhver annen enhet på internett.' },
    { term: 'HTTP/HTTPS', definition: 'Hypertext Transfer Protocol er protokollen som brukes for å overføre websider og andre ressurser mellom nettlesere og webservere. HTTP bruker en forespørsel-svar-modell der klienten sender forespørsler med metoder som GET og POST, og serveren svarer med statuskoder og innhold. HTTPS er den sikre versjonen der all kommunikasjon krypteres med TLS, slik at ingen kan avlytte eller endre dataene underveis. I dag bruker de aller fleste nettsider HTTPS.' },
    { term: 'DNS', definition: 'Domain Name System er internettets navnetjeneste som oversetter menneskelesbare domenenavn til IP-adresser. Når du skriver www.nrk.no i nettleseren, sender den en DNS-forespørsel for å finne IP-adressen til NRKs server. DNS er hierarkisk oppbygd med rotservere, toppdomeneservere og autoritative navneservere. Oppslaget skjer vanligvis på under 100 millisekunder, og resultater lagres i hurtigbuffer for å gjøre påfølgende oppslag raskere.' },
    { term: 'OSI-modellen', definition: 'Open Systems Interconnection-modellen er en referansemodell med syv lag som beskriver hvordan nettverkskommunikasjon fungerer. Lagene er: fysisk lag, datalinklag, nettverkslag, transportlag, sesjonslag, presentasjonslag og applikasjonslag. Hvert lag har et bestemt ansvarsområde og kommuniserer med lagene over og under. OSI-modellen er en teoretisk modell som brukes for å forstå og feilsøke nettverkskommunikasjon, selv om internett i praksis bruker den enklere TCP/IP-modellen.' },
    { term: 'Datapakke', definition: 'Når data sendes over et nettverk, deles den opp i mindre enheter kalt pakker. Hver pakke inneholder en del av dataene samt kontrollinformasjon som avsender- og mottakeradresse, sekvensnummer og feilsjekk. Pakkene kan ta ulike veier gjennom nettverket og settes sammen igjen hos mottakeren. Denne pakkeswitchingen gjør nettverket mer effektivt og robust enn om hele meldingen måtte sendes som én enhet.' },
    { term: 'Port', definition: 'En port er et logisk endepunkt for nettverkskommunikasjon som identifiserer en bestemt tjeneste eller applikasjon på en datamaskin. Portnumre går fra 0 til 65535. Kjente porter inkluderer port 80 for HTTP, port 443 for HTTPS, port 25 for SMTP (e-post) og port 53 for DNS. Når en datapakke ankommer en maskin, bruker operativsystemet portnummeret for å levere dataene til riktig program.' },
  ],
  content: [
    {
      id: 'it-1-7-2-intro',
      type: 'text',
      content: `## Internett og kommunikasjonsprotokoller

Internett kobler sammen milliarder av enheter over hele verden – datamaskiner, mobiltelefoner, servere, smarthøyttalere og mye mer. Men hvordan kan så forskjellige enheter, laget av ulike produsenter og med ulike operativsystemer, kommunisere sømløst med hverandre? Svaret er **protokoller** – standardiserte regler som alle enheter følger.

En god analogi er postverket: Når du sender et brev, følger du bestemte regler – du skriver adressen på en bestemt måte, bruker frimerke, og posten sørger for levering. Internett-protokoller fungerer på samme måte, men for digital kommunikasjon. Protokollene definerer hvordan data pakkes, adresseres, sendes og mottas. I dette kapittelet skal vi utforske de viktigste protokollene og lagmodellene som gjør internett mulig.`,
    },
    {
      id: 'it-1-7-2-def-protokoll',
      type: 'definition',
      title: 'Kommunikasjonsprotokoll',
      content: `En **kommunikasjonsprotokoll** er et formelt sett med regler og konvensjoner som bestemmer hvordan data utveksles mellom enheter i et nettverk. Protokollen spesifiserer dataformat, rekkefølge på meldinger, handlinger ved sending og mottak, og håndtering av feil. Protokoller er nødvendige for at enheter fra ulike produsenter skal kunne kommunisere – de er som et felles språk som alle nettverksenheter snakker. De viktigste protokollene på internett er organisert i lagmodeller der hver protokoll har et avgrenset ansvarsområde.`,
    },
    {
      id: 'it-1-7-2-text-tcpip',
      type: 'text',
      title: 'TCP/IP – internettets grunnprotokoll',
      content: `**TCP/IP** er protokollparet som er fundamentet for all kommunikasjon på internett. Navnet refererer til to separate protokoller som samarbeider tett:

### IP – Internet Protocol

**IP** tar seg av **adressering og ruting**. Hver enhet på internett har en IP-adresse, og IP-protokollen sørger for at datapakker sendes til riktig mottaker. IP er en **forbindelsesløs** protokoll – den sender pakker uavhengig av hverandre uten å opprette en fast forbindelse mellom avsender og mottaker. Hver pakke kan ta ulik vei gjennom nettverket.

IP gir ingen garanti for at pakker kommer frem – de kan gå tapt, komme i feil rekkefølge eller dupliseres. Det er her TCP kommer inn.

### TCP – Transmission Control Protocol

**TCP** sørger for **pålitelig levering** av data. TCP bygger en logisk forbindelse mellom avsender og mottaker og sikrer at:

- Data deles opp i segmenter som nummereres
- Mottakeren bekrefter mottak av hvert segment (ACK – acknowledgement)
- Tapte segmenter sendes på nytt automatisk
- Segmenter settes sammen i riktig rekkefølge hos mottakeren
- Flytkontroll hindrer at mottakeren oversvømmes med data

### Treveis håndtrykk

Før TCP kan sende data, opprettes en forbindelse gjennom et **treveis håndtrykk** (three-way handshake):

1. **SYN:** Klienten sender en SYN-pakke (synchronize) til serveren: «Jeg vil koble meg til»
2. **SYN-ACK:** Serveren svarer med SYN-ACK: «OK, jeg er klar»
3. **ACK:** Klienten bekrefter med ACK: «Flott, la oss starte»

Etter dette kan data sendes pålitelig begge veier. Når kommunikasjonen er ferdig, lukkes forbindelsen med en tilsvarende prosess.

### UDP – et alternativ til TCP

**UDP** (User Datagram Protocol) er en enklere transportprotokoll som ikke garanterer pålitelig levering. UDP sender pakker uten bekreftelse, feilretting eller rekkefølgekontroll. Dette gjør UDP **raskere** enn TCP, men mindre pålitelig.

UDP brukes der hastighet er viktigere enn at alle data kommer frem:
- **Videostrømming** – det er bedre med et bilde som hopper enn å vente på nytt forsøk
- **Online spill** – lav forsinkelse er kritisk
- **DNS-oppslag** – små, raske forespørsler
- **VoIP** (internetttelefoni) – sanntidslyd tåler ikke forsinkelser`,
    },
    {
      id: 'it-1-7-2-example-pakker',
      type: 'example',
      title: 'Eksempel: Hvordan en e-post reiser over internett',
      content: `La oss følge en e-post fra Kristine i Oslo til Lars i Bergen og se hvilke protokoller som brukes:

**1. Applikasjonslaget:** Kristine skriver e-posten i Gmail. Når hun trykker «Send», bruker Gmail **SMTP**-protokollen for å sende e-posten til Googles e-postserver.

**2. Transportlaget:** TCP deler e-posten opp i segmenter, nummererer dem og legger til feilsjekk. TCP oppretter en forbindelse til mottakerserveren via treveis håndtrykk.

**3. Nettverkslaget:** IP legger til avsender- og mottaker-IP-adresse på hvert segment og gjør dem til datapakker. Ruterne på internett bruker IP-adressene til å videresende pakkene mot Bergen.

**4. Datalinklaget/fysisk lag:** Pakkene konverteres til elektriske signaler i Ethernet-kabelen, lyssignaler i fiberoptisk kabel, eller radiosignaler i trådløse forbindelser.

**5. Hos mottaker:** Pakkene ankommer Lars' e-postserver (kanskje i et datasenter i Sverige). De settes sammen i riktig rekkefølge av TCP. E-posten lagres på serveren og er klar for Lars å lese via **IMAP**-protokollen.

Hele prosessen tar typisk under et sekund, selv om pakkene kanskje reiser via rutere i flere land.`,
    },
    {
      id: 'it-1-7-2-text-lagmodeller',
      type: 'text',
      title: 'Lagmodeller: OSI og TCP/IP',
      content: `For å forstå den komplekse kommunikasjonen i nettverk bruker vi **lagmodeller** som deler nettverksfunksjonene inn i separate lag. Hvert lag har et bestemt ansvarsområde og kommuniserer med lagene over og under. Det finnes to viktige lagmodeller:

### OSI-modellen (7 lag)

OSI-modellen (Open Systems Interconnection) er en **teoretisk referansemodell** utviklet av ISO. Den deler nettverkskommunikasjon inn i syv lag:

| Lag | Navn | Funksjon | Eksempler |
|---|---|---|---|
| 7 | Applikasjonslag | Grensesnitt mot brukerapplikasjoner | HTTP, SMTP, DNS, FTP |
| 6 | Presentasjonslag | Dataformat, kryptering, komprimering | SSL/TLS, JPEG, ASCII |
| 5 | Sesjonslag | Oppretter og vedlikeholder sesjoner | NetBIOS, RPC |
| 4 | Transportlag | Pålitelig dataoverføring mellom endepunkter | TCP, UDP |
| 3 | Nettverkslag | Adressering og ruting mellom nettverk | IP, ICMP |
| 2 | Datalinklag | Pålitelig overføring innenfor ett nettverkssegment | Ethernet, Wi-Fi |
| 1 | Fysisk lag | Fysisk overføring av biter | Kabler, signaler, kontakter |

En enkel huskeregel for lagene (ovenfra og ned) er: **«All People Seem To Need Data Processing»** – Application, Presentation, Session, Transport, Network, Data Link, Physical.

### TCP/IP-modellen (4 lag)

TCP/IP-modellen er den **praktiske modellen** som internett faktisk bruker. Den slår sammen noen av OSI-lagene:

| TCP/IP-lag | Tilsvarende OSI-lag | Funksjon | Eksempler |
|---|---|---|---|
| Applikasjonslag | Lag 5–7 | Applikasjonsprotokoll | HTTP, DNS, SMTP |
| Transportlag | Lag 4 | Pålitelig transport | TCP, UDP |
| Internettlag | Lag 3 | Adressering og ruting | IP, ICMP |
| Nettverksaksesslag | Lag 1–2 | Fysisk tilkobling | Ethernet, Wi-Fi |

TCP/IP-modellen er enklere og mer praktisk enn OSI-modellen, og den beskriver bedre hvordan internett faktisk fungerer. OSI-modellen brukes likevel mye som referanse for å diskutere og feilsøke nettverksproblemer.

### Innkapsling

Når data sendes nedover lagene, legger hvert lag til sin egen **header** (kontrollinformasjon) rundt dataene. Dette kalles **innkapsling** (encapsulation):

- Applikasjonslaget lager en melding (f.eks. en HTTP-forespørsel)
- Transportlaget legger til TCP-header med portnumre og sekvensnumre → kalles et **segment**
- Nettverkslaget legger til IP-header med IP-adresser → kalles en **pakke**
- Datalinklaget legger til Ethernet-header med MAC-adresser → kalles en **ramme** (frame)
- Fysisk lag konverterer alt til biter og sender dem som signaler

Hos mottakeren skjer prosessen i motsatt rekkefølge – hvert lag fjerner sin header og sender dataene oppover til neste lag.`,
    },
    {
      id: 'it-1-7-2-text-http',
      type: 'text',
      title: 'HTTP og HTTPS – webprotokollene',
      content: `**HTTP** (Hypertext Transfer Protocol) er protokollen som driver webben. Når du besøker en nettside, bruker nettleseren HTTP for å kommunisere med webserveren. HTTP bruker en enkel **forespørsel-svar-modell**:

### HTTP-metoder

De viktigste HTTP-metodene er:

- **GET** – Hent en ressurs (nettside, bilde, fil). Den desidert vanligste metoden
- **POST** – Send data til serveren (skjemadata, innlogging, filopplasting)
- **PUT** – Oppdater en eksisterende ressurs
- **DELETE** – Slett en ressurs
- **HEAD** – Som GET, men henter bare headers (brukes for å sjekke om en ressurs finnes)

### HTTP-statuskoder

Serveren svarer alltid med en **statuskode** som forteller hvordan forespørselen gikk:

- **2xx Suksess:** 200 OK (alt gikk bra), 201 Created (ny ressurs opprettet)
- **3xx Omdirigering:** 301 Moved Permanently (siden har flyttet), 304 Not Modified (bruk cached versjon)
- **4xx Klientfeil:** 400 Bad Request (ugyldig forespørsel), 403 Forbidden (ingen tilgang), 404 Not Found (finnes ikke)
- **5xx Serverfeil:** 500 Internal Server Error (noe gikk galt på serveren), 503 Service Unavailable (serveren er overbelastet)

### HTTPS – sikker web

**HTTPS** (HTTP Secure) legger til kryptering med **TLS** (Transport Layer Security) oppå HTTP. Når du ser hengelåsikonet i nettleseren og URL-en starter med \`https://\`, betyr det at:

1. All kommunikasjon mellom nettleseren og serveren er **kryptert** – ingen kan avlytte
2. Serverens identitet er **verifisert** med et digitalt sertifikat
3. Dataene er **integritetsbeskyttet** – ingen kan endre dem underveis

HTTPS bruker en **TLS-handshake** for å etablere en kryptert forbindelse:
1. Nettleseren kobler seg til serveren og ber om HTTPS
2. Serveren sender sitt **digitale sertifikat** med sin offentlige nøkkel
3. Nettleseren verifiserer sertifikatet mot kjente sertifikatutstedere (CA)
4. Nettleseren og serveren forhandler om en **sesjonsnøkkel** for symmetrisk kryptering
5. All videre kommunikasjon krypteres med sesjonsnøkkelen

I dag bruker over 95 % av alle nettsider HTTPS, og nettlesere markerer HTTP-sider som «Ikke sikker».`,
    },
    {
      id: 'it-1-7-2-text-dns',
      type: 'text',
      title: 'DNS – domenenavnsystemet',
      content: `**DNS** (Domain Name System) er internettets navnetjeneste som oversetter domenenavn til IP-adresser. Uten DNS måtte du huske IP-adresser for å besøke nettsider – for eksempel \`195.88.55.16\` i stedet for \`www.vg.no\`.

### Hierarkisk oppbygging

DNS er organisert som et omvendt tre med flere nivåer:

1. **Rotsonen (.):** De 13 rotservergruppene som er utgangspunktet for alle DNS-oppslag
2. **Toppdomener (TLD):** .no, .com, .org, .edu, .net, .uk, osv.
3. **Andrenivsdomener:** nrk.no, google.com, uio.no
4. **Subdomener:** www.nrk.no, mail.google.com, nettbank.dnb.no

### DNS-oppslag steg for steg

Når du skriver \`www.nrk.no\` i nettleseren:

1. Nettleseren sjekker sin **lokale cache** – kanskje den husker IP-adressen fra sist
2. Hvis ikke, spør den operativsystemets DNS-cache
3. Operativsystemet sender forespørselen til din konfigurerte **DNS-resolver** (vanligvis hos internettleverandøren)
4. DNS-resolveren spør en **rotserver**: «Hvem vet om .no?»
5. Rotserveren peker til **.no-toppdomeneserveren**
6. Resolveren spør .no-serveren: «Hvem vet om nrk.no?»
7. .no-serveren peker til **NRKs autoritative navneserver**
8. Resolveren spør NRKs navneserver: «Hva er IP-adressen til www.nrk.no?»
9. Navneserveren svarer med IP-adressen
10. IP-adressen caches og returneres til nettleseren

Hele prosessen tar vanligvis under 100 millisekunder. Caching gjør at de fleste oppslag er mye raskere fordi resultatet allerede er lagret fra et tidligere besøk.

### DNS-poster

En DNS-server inneholder ulike typer poster (records):

- **A-post:** Kobler et domenenavn til en IPv4-adresse
- **AAAA-post:** Kobler et domenenavn til en IPv6-adresse
- **CNAME-post:** Kobler et domenenavn til et annet domenenavn (alias)
- **MX-post:** Angir e-postserveren for domenet
- **TXT-post:** Tekstinformasjon, ofte brukt til verifisering og sikkerhet (SPF, DKIM)
- **NS-post:** Angir autoritative navneservere for domenet`,
    },
    {
      id: 'it-1-7-2-note-portnumre',
      type: 'note',
      title: 'Vanlige portnumre',
      content: `Portnumre identifiserer hvilken tjeneste på en maskin som skal motta data. Her er de viktigste å kjenne til:

| Port | Protokoll | Tjeneste |
|---|---|---|
| 20/21 | FTP | Filoverføring |
| 22 | SSH | Sikker fjerntilgang |
| 25 | SMTP | Sending av e-post |
| 53 | DNS | Navneoppslag |
| 80 | HTTP | Webtrafikk (usikker) |
| 110 | POP3 | Henting av e-post |
| 143 | IMAP | Henting av e-post |
| 443 | HTTPS | Webtrafikk (kryptert) |
| 3389 | RDP | Eksternt skrivebord (Windows) |

Portnumre 0–1023 er «velkjente porter» reservert for standard tjenester. Portnumre over 1024 kan brukes fritt av programmer.`,
    },
    {
      id: 'it-1-7-2-tip-nslookup',
      type: 'tip',
      title: 'Test DNS-oppslag selv',
      content: `Du kan gjøre DNS-oppslag fra kommandolinjen:

**Windows/Mac/Linux:** Åpne Terminal eller Ledetekst og skriv:
\`\`\`
nslookup www.nrk.no
\`\`\`

Du vil se IP-adressen til NRKs webserver. Prøv også:
\`\`\`
nslookup -type=MX nrk.no
\`\`\`
for å se hvilke e-postservere NRK bruker.

Et annet nyttig verktøy er \`ping\`, som sender en liten datapakke til en server og måler svartiden:
\`\`\`
ping www.google.com
\`\`\``,
    },
    {
      id: 'it-1-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it1-7-2-ex-1',
        number: '7.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedforskjellen mellom TCP og UDP?',
        options: [
          { id: 'a', text: 'TCP er trådløs og UDP er kablet', isCorrect: false, feedback: 'Både TCP og UDP kan brukes over alle typer nettverksforbindelser.' },
          { id: 'b', text: 'TCP garanterer pålitelig levering av data, mens UDP er raskere men gir ingen leveringsgaranti', isCorrect: true },
          { id: 'c', text: 'UDP er sikrere enn TCP fordi den krypterer data', isCorrect: false, feedback: 'Verken TCP eller UDP krypterer data i seg selv – det er TLS/SSL sitt ansvar.' },
          { id: 'd', text: 'TCP brukes bare for e-post og UDP bare for websider', isCorrect: false, feedback: 'Websider bruker TCP (via HTTP), og e-post bruker også TCP.' },
        ],
        solution: 'TCP (Transmission Control Protocol) sørger for pålitelig levering ved å nummerere pakker, bekrefte mottak og sende tapte pakker på nytt. UDP (User Datagram Protocol) sender pakker uten bekreftelse, noe som gjør den raskere men uten leveringsgaranti. TCP brukes der alt må komme frem (web, e-post), UDP der hastighet er viktigere (strømming, spill).',
      },
    },
    {
      id: 'it-1-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it1-7-2-ex-2',
        number: '7.2.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er DNS sin hovedoppgave?',
        options: [
          { id: 'a', text: 'Å kryptere nettverkstrafikk', isCorrect: false, feedback: 'Kryptering er oppgaven til TLS/SSL.' },
          { id: 'b', text: 'Å oversette domenenavn til IP-adresser', isCorrect: true },
          { id: 'c', text: 'Å lagre nettsider i hurtigbuffer', isCorrect: false, feedback: 'Nettleseren har sin egen cache for nettsider. DNS cacher bare adresseoversettelser.' },
          { id: 'd', text: 'Å sende e-post mellom servere', isCorrect: false, feedback: 'E-post sendes med SMTP-protokollen.' },
        ],
        solution: 'DNS (Domain Name System) oversetter menneskelesbare domenenavn som www.nrk.no til numeriske IP-adresser som datamaskiner bruker for å finne hverandre. DNS er essensielt for at vi skal slippe å huske IP-adresser.',
      },
    },
    {
      id: 'it-1-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it1-7-2-ex-3',
        number: '7.2.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skjer under et TCP treveis håndtrykk (three-way handshake)?',
        options: [
          { id: 'a', text: 'Data krypteres i tre steg', isCorrect: false, feedback: 'Treveis håndtrykk handler om å opprette forbindelse, ikke kryptering.' },
          { id: 'b', text: 'Klienten sender SYN, serveren svarer med SYN-ACK, og klienten bekrefter med ACK', isCorrect: true },
          { id: 'c', text: 'DNS gjør tre oppslag for å finne riktig IP-adresse', isCorrect: false, feedback: 'DNS-oppslag og TCP-håndtrykk er to forskjellige prosesser.' },
          { id: 'd', text: 'Data sendes tre ganger for å sikre at den kommer frem', isCorrect: false, feedback: 'Håndtrykket oppretter forbindelsen – selve dataoverføringen skjer etterpå.' },
        ],
        solution: 'Et TCP treveis håndtrykk oppretter en forbindelse mellom klient og server i tre steg: (1) Klienten sender SYN for å be om forbindelse. (2) Serveren svarer med SYN-ACK for å bekrefte at den er klar. (3) Klienten sender ACK for å bekrefte. Etter dette kan data sendes pålitelig begge veier.',
      },
    },
    {
      id: 'it-1-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it1-7-2-ex-4',
        number: '7.2.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken HTTP-statuskode betyr at siden ikke ble funnet på serveren?',
        options: [
          { id: 'a', text: '200 OK', isCorrect: false, feedback: '200 betyr at forespørselen var vellykket.' },
          { id: 'b', text: '301 Moved Permanently', isCorrect: false, feedback: '301 betyr at siden har flyttet permanent til en ny adresse.' },
          { id: 'c', text: '404 Not Found', isCorrect: true },
          { id: 'd', text: '500 Internal Server Error', isCorrect: false, feedback: '500 betyr at noe gikk galt på selve serveren.' },
        ],
        solution: 'HTTP-statuskoden 404 Not Found betyr at serveren ikke fant den forespurte ressursen. Dette skjer for eksempel når en URL er feil eller en side har blitt slettet. Statuskoder i 4xx-serien indikerer klientfeil, altså at forespørselen var ugyldig.',
      },
    },
    {
      id: 'it-1-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it1-7-2-ex-5',
        number: '7.2.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar lagene i TCP/IP-modellen. Beskriv hvert lag, dets funksjon og gi eksempler på protokoller som hører hjemme i hvert lag. Sammenlign kort med OSI-modellen.',
        solution: `TCP/IP-modellen har fire lag:

**1. Applikasjonslaget** (tilsvarer OSI lag 5-7): Grensesnittet mot brukerapplikasjoner. Protokoller som HTTP (web), SMTP (e-post), DNS (navneoppslag) og FTP (filoverføring) opererer her.

**2. Transportlaget** (tilsvarer OSI lag 4): Sørger for pålitelig eller upålitelig dataoverføring mellom endepunkter. TCP gir pålitelig levering med feilretting og rekkefølgekontroll. UDP gir raskere men upålitelig levering.

**3. Internettlaget** (tilsvarer OSI lag 3): Tar seg av adressering og ruting av datapakker mellom nettverk. IP-protokollen er den viktigste. ICMP brukes til feilmeldinger og diagnostikk (ping).

**4. Nettverksaksesslaget** (tilsvarer OSI lag 1-2): Håndterer fysisk tilkobling og dataoverføring innenfor ett nettverkssegment. Ethernet og Wi-Fi opererer her.

Sammenlignet med OSI-modellens syv lag, slår TCP/IP-modellen sammen de tre øverste OSI-lagene (applikasjon, presentasjon, sesjon) til ett lag, og de to nederste (datalink, fysisk) til ett lag. TCP/IP-modellen er mer praktisk og beskriver bedre hvordan internett faktisk fungerer.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-1-7-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it1-7-2-ex-6',
        number: '7.2.6',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva er innkapsling (encapsulation) i nettverkssammenheng?',
        options: [
          { id: 'a', text: 'At data krypteres for sikker overføring', isCorrect: false, feedback: 'Kryptering er en del av sikkerhet, ikke innkapsling.' },
          { id: 'b', text: 'At hvert lag i nettverksmodellen legger til sin egen kontrollinformasjon (header) rundt dataene fra laget over', isCorrect: true },
          { id: 'c', text: 'At data komprimeres for å spare båndbredde', isCorrect: false, feedback: 'Komprimering er en separat prosess fra innkapsling.' },
          { id: 'd', text: 'At datapakker dupliseres for pålitelighet', isCorrect: false, feedback: 'Duplisering er ikke det samme som innkapsling.' },
        ],
        solution: 'Innkapsling betyr at hvert lag i nettverksmodellen legger til sin egen header med kontrollinformasjon rundt dataene fra laget over. Applikasjonslaget lager en melding, transportlaget legger til TCP-header (segment), nettverkslaget legger til IP-header (pakke), og datalinklaget legger til Ethernet-header (ramme). Hos mottakeren fjernes headerne lag for lag i motsatt rekkefølge.',
      },
    },
    {
      id: 'it-1-7-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it1-7-2-ex-7',
        number: '7.2.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Beskriv det fullstendige forløpet når du skriver www.yr.no i nettleseren og trykker Enter, helt til værmeldingen vises på skjermen. Inkluder DNS-oppslag, TCP-håndtrykk, TLS-handshake, HTTP-forespørsel og -svar i forklaringen. Bruk gjerne referanser til TCP/IP-modellens lag.',
        solution: `1. **DNS-oppslag (Applikasjonslaget):** Nettleseren må finne IP-adressen til www.yr.no. Den sender en DNS-forespørsel (via UDP på port 53) til den konfigurerte DNS-resolveren. Resolveren spør rotservere, .no-servere og til slutt Yrs autoritative navneserver. IP-adressen returneres og caches.

2. **TCP treveis håndtrykk (Transportlaget):** Nettleseren oppretter en TCP-forbindelse til serverens IP-adresse på port 443 (HTTPS). Klienten sender SYN, serveren svarer SYN-ACK, klienten bekrefter med ACK.

3. **TLS-handshake (Applikasjon-/Transportlaget):** Nettleseren og serveren forhandler om kryptering. Serveren sender sitt digitale sertifikat med offentlig nøkkel. Nettleseren verifiserer sertifikatet. De forhandler om en felles sesjonsnøkkel for symmetrisk kryptering.

4. **HTTP GET-forespørsel (Applikasjonslaget):** Nettleseren sender en kryptert HTTP GET-forespørsel for / (hovedsiden til yr.no).

5. **Pakketransport (Internett- og nettverksaksesslaget):** Forespørselen pakkes inn med TCP-header, IP-header og Ethernet-header. Pakkene rutes gjennom flere rutere på internett til Yrs server.

6. **Serverbehandling:** Yrs webserver mottar forespørselen, genererer HTML-koden med værmeldingen og sender den tilbake som HTTP-svar med statuskode 200 OK.

7. **Mottak og rendering:** Nettleseren mottar HTML-en, sender nye forespørsler for CSS, JavaScript og bilder (hver ressurs krever nye HTTP-forespørsler over samme TCP-forbindelse), og rendrer til slutt den ferdige værmeldingssiden på skjermen.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  prevChapter: 'it-1-7-1',
  nextChapter: 'it-1-7-3',
};

// ============================================================================
// KAPITTEL 7.3: Informasjonssikkerhet og trusler
// ============================================================================

export const CHAPTER_IT_1_7_3: TextbookChapter = {
  id: 'it-1-7-3',
  courseId: 'it-1',
  chapterNumber: '7.3',
  title: 'Informasjonssikkerhet og trusler',
  description: 'Forstå trusler mot informasjonssikkerhet som malware, phishing, DDoS-angrep og sosial manipulering, og lær grunnleggende sikkerhetstiltak.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for trusler mot informasjonssikkerhet og tiltak for å beskytte seg',
    'forklare vanlige angrepsmetoder og hvordan man kan forebygge dem',
  ],
  keyTerms: [
    { term: 'Informasjonssikkerhet', definition: 'Informasjonssikkerhet handler om å beskytte informasjon mot uautorisert tilgang, endring, ødeleggelse eller lekkasje. De tre grunnpilarene er konfidensialitet (bare autoriserte personer har tilgang), integritet (informasjonen er korrekt og ikke uautorisert endret) og tilgjengelighet (informasjonen er tilgjengelig når den trengs). Disse tre prinsippene kalles ofte CIA-triaden (Confidentiality, Integrity, Availability) og danner grunnlaget for alt sikkerhetsarbeid.' },
    { term: 'Malware', definition: 'Malware (ondsinnet programvare) er en samlebetegnelse for programvare som er laget for å skade, forstyrre eller ta kontroll over datasystemer uten brukerens samtykke. Vanlige typer inkluderer virus (sprer seg ved å infisere filer), ormer (sprer seg automatisk over nettverk), trojanere (skjuler seg som nyttig programvare), ransomware (krypterer filer og krever løsepenger) og spyware (overvåker brukerens aktivitet). Malware er en av de største truslene mot informasjonssikkerhet.' },
    { term: 'Phishing', definition: 'Phishing er en form for svindel der angriperen utgir seg for å være en pålitelig aktør for å lure offeret til å oppgi sensitive opplysninger som passord, kredittkortnumre eller personnummer. Phishing skjer vanligvis via e-post, SMS (smishing) eller falske nettsider som ligner ekte. Angriperne spiller på frykt, hastverk eller nysgjerrighet for å få offeret til å handle uten å tenke seg om. Phishing er den vanligste inngangsporten for cyberangrep.' },
    { term: 'DDoS', definition: 'Distributed Denial of Service (DDoS) er et angrep der mange datamaskiner (ofte i et botnett) sender enorme mengder forespørsler til en server eller tjeneste samtidig. Hensikten er å overbelaste serveren slik at den ikke kan betjene vanlige brukere. DDoS-angrep kan lamme nettsider, nettbanker, spillservere og offentlige tjenester i timer eller dager. Angrepene er vanskelige å stoppe fordi trafikken kommer fra tusenvis av ulike kilder.' },
    { term: 'Sosial manipulering', definition: 'Sosial manipulering (social engineering) er teknikker der angriperen utnytter menneskelig psykologi i stedet for tekniske svakheter. Angriperen manipulerer ofre til å bryte sikkerhetsprosedyrer, oppgi sensitiv informasjon eller utføre handlinger som kompromitterer sikkerheten. Metoder inkluderer phishing, pretexting (oppdiktede scenarioer), baiting (lokkemat) og tailgating (å følge noen gjennom en sikret dør). Mennesker regnes ofte som den svakeste lenken i sikkerhetskjeden.' },
    { term: 'Brannmur', definition: 'En brannmur er et sikkerhetssystem som overvåker og kontrollerer nettverkstrafikk basert på et sett med sikkerhetregler. Brannmuren fungerer som en barriere mellom et pålitelig internt nettverk og upålitelige eksterne nettverk som internett. Den kan blokkere innkommende trafikk fra ukjente kilder, hindre utgående forbindelser til farlige adresser, og logge nettverksaktivitet. Brannmurer finnes som dedikert maskinvare eller som programvare på datamaskiner.' },
    { term: 'Sårbarhet', definition: 'En sårbarhet (vulnerability) er en svakhet i et system, en applikasjon eller en prosess som kan utnyttes av en angriper. Sårbarheter kan skyldes programmeringsfeil (bugs), feilkonfigurering, manglende oppdateringer eller svake passord. Når en sårbarhet utnyttes, kalles det en exploit. Oppdateringer og sikkerhetsfikser (patches) er avgjørende for å lukke kjente sårbarheter før angripere rekker å utnytte dem.' },
  ],
  content: [
    {
      id: 'it-1-7-3-intro',
      type: 'text',
      content: `## Informasjonssikkerhet og trusler

I en verden der stadig mer av livene våre er digitale – bankkontoer, helsejournaler, personlige bilder, skolearbeid og kommunikasjon – er informasjonssikkerhet viktigere enn noensinne. Hver dag forsøker kriminelle å stjele personlige data, bedrifter utsettes for cyberangrep, og privatpersoner lures til å oppgi passord og bankinformasjon.

**Informasjonssikkerhet** handler om å beskytte digital informasjon mot trusler. For å forstå hvordan vi kan beskytte oss, må vi først forstå hvilke trusler som finnes og hvordan angripere opererer. I dette kapittelet skal vi se på de vanligste angrepsmetodene og lære grunnleggende tiltak for å beskytte oss selv og systemene våre.`,
    },
    {
      id: 'it-1-7-3-def-cia',
      type: 'definition',
      title: 'CIA-triaden – de tre grunnpilarene',
      content: `All informasjonssikkerhet bygger på tre grunnprinsipper, kjent som **CIA-triaden**:

- **Konfidensialitet (Confidentiality):** Bare autoriserte personer skal ha tilgang til informasjonen. Eksempel: Bare du og banken skal kunne se kontoutskriften din.
- **Integritet (Integrity):** Informasjonen skal være korrekt og ikke uautorisert endret. Eksempel: Ingen skal kunne endre beløpet på en banktransaksjon.
- **Tilgjengelighet (Availability):** Informasjonen skal være tilgjengelig når autoriserte brukere trenger den. Eksempel: Nettbanken skal fungere når du trenger å betale regninger.

Et godt sikkerhetssystem balanserer alle tre prinsippene. Overdreven fokus på konfidensialitet kan gå ut over tilgjengelighet, og omvendt.`,
    },
    {
      id: 'it-1-7-3-text-malware',
      type: 'text',
      title: 'Malware – ondsinnet programvare',
      content: `**Malware** er en samlebetegnelse for all programvare som er designet for å skade, forstyrre eller uautorisert ta kontroll over datasystemer. Det finnes mange typer malware:

### Virus

Et **datavirus** er skadelig kode som fester seg til en fil eller et program og sprer seg når filen åpnes eller programmet kjøres. Akkurat som et biologisk virus trenger en vert for å overleve, trenger et datavirus en vertsfil for å spres. Virus kan slette filer, ødelegge data eller gjøre systemet ustabilt.

### Ormer (Worms)

En **orm** er malware som sprer seg automatisk over nettverk uten å trenge en vertsfil. Ormer utnytter sårbarheter i operativsystemer eller programmer for å kopiere seg selv fra maskin til maskin. Den berømte **WannaCry**-ormen i 2017 rammet over 200 000 datamaskiner i 150 land på få dager ved å utnytte en sårbarhet i Windows.

### Trojanere (Trojans)

En **trojaner** er malware som utgir seg for å være nyttig programvare for å lure brukeren til å installere den. Navnet kommer fra den greske myten om den trojanske hesten. Trojanere kan gi angriperen fjernkontroll over maskinen, stjele passord, installere annen malware eller åpne en «bakdør» inn i systemet.

### Ransomware (Løsepengevirus)

**Ransomware** krypterer offerets filer og krever løsepenger (vanligvis i kryptovaluta) for å gi tilbake tilgangen. Ransomware er en av de største cybertruslene i dag og har rammet alt fra sykehus og kommuner til store bedrifter. I 2021 ble det norske selskapet Norsk Hydro rammet av ransomware som kostet selskapet over 800 millioner kroner. Eksperter anbefaler å aldri betale løsepenger, da det ikke garanterer at filene dekrypteres og det finansierer videre kriminalitet.

### Spyware

**Spyware** er programvare som overvåker brukerens aktivitet uten samtykke. Det kan registrere tastetrykk (keylogger), ta skjermbilder, overvåke nettbruk eller samle inn personlige data. Spyware kan installeres gjennom infiserte nedlastinger, e-postvedlegg eller usikre nettsider.

### Adware

**Adware** viser uønsket reklame på brukerens enhet. Selv om adware sjelden er direkte skadelig, er det irriterende og kan gjøre systemet tregere. Noe adware samler også inn brukerdata for målrettet reklame.`,
    },
    {
      id: 'it-1-7-3-text-phishing',
      type: 'text',
      title: 'Phishing og sosial manipulering',
      content: `Mange av de mest effektive angrepene retter seg ikke mot tekniske svakheter, men mot **mennesker**. Sosial manipulering utnytter menneskelig psykologi for å lure ofre til å kompromittere sin egen sikkerhet.

### Phishing

**Phishing** er den vanligste formen for sosial manipulering. Angriperen sender e-poster, SMS-er eller meldinger som ser ut til å komme fra en pålitelig avsender – som banken din, Posten, Microsoft eller en kollega. Meldingen inneholder typisk:

- Et **påskudd** som skaper hastverk: «Kontoen din stenges om 24 timer»
- En **lenke** til en falsk nettside som ligner den ekte
- Et **skjema** der offeret bes om å oppgi passord, personnummer eller kredittkortinfo

### Hvordan gjenkjenne phishing

Varseltegn på phishing-forsøk:

- **Avsenderadresse:** Sjekk nøye – phishing-adresser ligner ofte ekte, men har små avvik (f.eks. \`support@dnn.no\` i stedet for \`support@dnb.no\`)
- **Hastverk og trusler:** «Handle NÅ eller kontoen stenges!»
- **Generell hilsen:** «Kjære kunde» i stedet for navnet ditt
- **Språkfeil:** Dårlig grammatikk eller unaturlige formuleringer
- **Mistenkelige lenker:** Hold musepekeren over lenken uten å klikke for å se den faktiske URL-en
- **Vedlegg:** Uventede vedlegg, spesielt .exe, .zip eller .docm-filer

### Andre former for sosial manipulering

- **Spear phishing:** Målrettet phishing mot en bestemt person, tilpasset med personlig informasjon
- **Smishing:** Phishing via SMS (f.eks. «Pakken din er holdt tilbake, klikk her»)
- **Vishing:** Phishing via telefon – noen ringer og utgir seg for å være fra banken eller IT-avdelingen
- **Pretexting:** Angriperen dikter opp et scenario for å bygge tillit, for eksempel at de er fra IT-support
- **Baiting:** Angriperen legger igjen en USB-minnepinne på et offentlig sted i håp om at noen kobler den til datamaskinen
- **Tailgating:** Å følge en autorisert person gjennom en sikret dør uten å ha egen tilgang`,
    },
    {
      id: 'it-1-7-3-example-phishing',
      type: 'example',
      title: 'Eksempel: Hvordan identifisere en phishing-e-post',
      content: `Her er en typisk phishing-e-post – kan du finne varseltegnene?

---
**Fra:** sikkerhet@dnb-kundeservice.com
**Til:** deg@epost.no
**Emne:** VIKTIG: Uautorisert pålogging oppdaget!

Kjære kunde,

Vi har oppdaget mistenkelig aktivitet på din konto. For å beskytte deg, har vi midlertidig begrenset tilgangen.

Du MÅ verifisere kontoen din innen 24 timer, ellers vil kontoen bli permanent stengt.

Klikk her for å verifisere: https://dnb-sikkerhet-login.ru/verifiser

Med vennlig hilsen,
DNB Sikkerhetsavdelingen
---

**Varseltegn i denne e-posten:**

1. **Avsenderadresse:** \`dnb-kundeservice.com\` er ikke DNBs ekte domene (som er \`dnb.no\`)
2. **Hastverk:** «Du MÅ verifisere innen 24 timer» skaper panikk
3. **Trussel:** «Kontoen blir permanent stengt» er ment å skremme deg til handling
4. **Generisk hilsen:** «Kjære kunde» – en ekte bank bruker navnet ditt
5. **Mistenkelig lenke:** URL-en peker til et .ru-domene (russisk), ikke til dnb.no
6. **Språk:** «Sikkerhetsavdelingen» høres unaturlig ut – DNB ville skrevet «Sikkerhetsavdelingen i DNB» eller lignende

**Riktig handling:** Slett e-posten. Hvis du er bekymret, logg inn på nettbanken direkte (skriv inn adressen selv) eller ring bankens offisielle telefonnummer.`,
    },
    {
      id: 'it-1-7-3-text-ddos',
      type: 'text',
      title: 'DDoS-angrep og nettverksangrep',
      content: `**DDoS-angrep** (Distributed Denial of Service) er en av de mest synlige formene for cyberangrep. Målet er å gjøre en tjeneste utilgjengelig ved å oversvømme den med trafikk.

### Hvordan DDoS fungerer

1. Angriperen bygger opp et **botnett** – et nettverk av tusenvis av infiserte datamaskiner (zombier) kontrollert uten eiernes viten
2. Angriperen gir kommando til hele botnettet om å sende forespørsler til målet samtidig
3. Serveren oversvømmes med trafikk og klarer ikke å betjene ekte brukere
4. Tjenesten blir utilgjengelig – «denial of service»

### Typer DDoS-angrep

- **Volumbaserte angrep:** Sender enorme mengder data for å overbelaste nettverksbåndbredden (f.eks. UDP flood)
- **Protokollangrep:** Utnytter svakheter i nettverksprotokoller for å overbelaste serveren (f.eks. SYN flood – sender millioner av SYN-pakker uten å fullføre håndtrykket)
- **Applikasjonsangrep:** Retter seg mot spesifikke tjenester med tilsynelatende legitime forespørsler som er ressurskrevende å behandle

### Andre nettverksangrep

- **Man-in-the-middle (MITM):** Angriperen plasserer seg mellom to kommuniserende parter og kan avlytte eller endre kommunikasjonen. HTTPS beskytter mot dette.
- **SQL-injection:** Angriperen sender ondsinnet SQL-kode gjennom et skjemafelt på en nettside for å manipulere databasen
- **Cross-Site Scripting (XSS):** Angriperen injiserer ondsinnet JavaScript-kode i en nettside som kjøres i andre brukeres nettlesere
- **Brute force:** Angriperen prøver systematisk alle mulige passordkombinasjoner til den finner det riktige
- **Zero-day exploit:** Utnyttelse av en sårbarhet som er ukjent for utvikleren og derfor ikke har blitt fikset ennå`,
    },
    {
      id: 'it-1-7-3-text-tiltak',
      type: 'text',
      title: 'Sikkerhetstiltak og beste praksis',
      content: `Det finnes mange tiltak for å beskytte seg mot digitale trusler. De viktigste kan deles inn i tekniske tiltak og menneskelige tiltak:

### Tekniske tiltak

- **Oppdateringer:** Hold operativsystem, nettleser og programvare oppdatert. Sikkerhetsoppdateringer lukker kjente sårbarheter
- **Antivirus/antimalware:** Bruk oppdatert sikkerhetsprogramvare som skanner etter og blokkerer malware
- **Brannmur:** Aktiver brannmuren på datamaskinen og ruteren for å kontrollere nettverkstrafikk
- **Sterke passord:** Bruk lange, unike passord for hver tjeneste. Bruk en passordbehandler (f.eks. Bitwarden, 1Password)
- **Tofaktorautentisering (2FA):** Aktiver 2FA der det er mulig – selv om passordet stjeles, trengs det en ekstra faktor for å logge inn
- **HTTPS:** Sørg for at nettsider du bruker har HTTPS (hengelåsikon i nettleseren)
- **Sikkerhetskopiering:** Ta regelmessige sikkerhetskopier av viktige filer. Følg 3-2-1-regelen: 3 kopier, på 2 forskjellige medier, med 1 kopi utenfor stedet
- **Kryptering:** Krypter harddisken (BitLocker på Windows, FileVault på Mac) slik at data er beskyttet ved tyveri

### Menneskelige tiltak

- **Bevissthet:** Vær skeptisk til uventede e-poster, meldinger og telefonsamtaler
- **Verifiser avsender:** Sjekk alltid avsenderadressen nøye før du klikker på lenker
- **Aldri del passord:** Ingen seriøs aktør ber deg oppgi passordet ditt
- **Tenk før du klikker:** Ikke klikk på lenker eller åpne vedlegg du ikke forventer
- **Begrens deling:** Del minst mulig personlig informasjon på nett
- **Rapporter:** Meld fra om phishing-forsøk og mistenkelig aktivitet til IT-avdelingen eller relevante myndigheter`,
    },
    {
      id: 'it-1-7-3-warning-passord',
      type: 'warning',
      title: 'Svake passord – den største risikoen',
      content: `De vanligste passordene i Norge er fortsatt «123456», «passord» og «qwerty». Slike passord knekkes av en datamaskin på under ett sekund. Et sterkt passord bør:

- Være minst **12 tegn** langt
- Inneholde en **blanding** av store og små bokstaver, tall og spesialtegn
- **Ikke** baseres på personlig informasjon (navn, bursdag, kjæledyr)
- Være **unikt** for hver tjeneste

En god metode er å bruke en **passfrase** – en setning med tilfeldige ord: \`KorrektHestBatteriStifter\` er mye sterkere enn \`P@ssw0rd!\` og lettere å huske. Aller best er å bruke en **passordbehandler** som genererer og lagrer sterke, unike passord for alle tjenestene dine.`,
    },
    {
      id: 'it-1-7-3-note-ransomware-no',
      type: 'note',
      title: 'Cyberangrep i Norge',
      content: `Norge er ikke immune mot cyberangrep. Her er noen kjente hendelser:

- **Norsk Hydro (2019):** Ransomware-angrepet LockerGoga rammet aluminiumsgiganten og kostet over 800 millioner kroner. Selskapet valgte å ikke betale løsepenger.
- **Stortinget (2020 og 2021):** E-postkontoer til stortingsrepresentanter ble kompromittert i to separate angrep.
- **Nordland fylkeskommune (2021):** Ransomware-angrep krypterte data og lammet IT-systemer i flere uker.
- **Østre Toten kommune (2021):** Ransomware-angrep førte til at sensitive personopplysninger ble publisert på nett. Hendelsen kostet kommunen over 32 millioner kroner.

Disse hendelsene viser at cyberangrep er en reell trussel i Norge, og at god informasjonssikkerhet er avgjørende for alle typer organisasjoner.`,
    },
    {
      id: 'it-1-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it1-7-3-ex-1',
        number: '7.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva står CIA-triaden for i informasjonssikkerhet?',
        options: [
          { id: 'a', text: 'Central Intelligence Agency – den amerikanske etterretningstjenesten', isCorrect: false, feedback: 'I informasjonssikkerhet har CIA en annen betydning enn etterretningsbyrået.' },
          { id: 'b', text: 'Konfidensialitet, integritet og tilgjengelighet', isCorrect: true },
          { id: 'c', text: 'Kryptering, identifikasjon og autentisering', isCorrect: false, feedback: 'Disse er viktige sikkerhetsmekanismer, men ikke det CIA-triaden står for.' },
          { id: 'd', text: 'Kode, internett og applikasjon', isCorrect: false, feedback: 'CIA-triaden handler om sikkerhetsprinsipper, ikke teknologier.' },
        ],
        solution: 'CIA-triaden står for Confidentiality (konfidensialitet), Integrity (integritet) og Availability (tilgjengelighet). Konfidensialitet betyr at bare autoriserte har tilgang. Integritet betyr at data ikke er uautorisert endret. Tilgjengelighet betyr at data er tilgjengelig når den trengs.',
      },
    },
    {
      id: 'it-1-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it1-7-3-ex-2',
        number: '7.3.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er ransomware?',
        options: [
          { id: 'a', text: 'Programvare som viser uønsket reklame', isCorrect: false, feedback: 'Det du beskriver er adware.' },
          { id: 'b', text: 'Malware som krypterer offerets filer og krever løsepenger for å gi tilbake tilgangen', isCorrect: true },
          { id: 'c', text: 'Et program som overvåker tastetrykk', isCorrect: false, feedback: 'Det du beskriver er en keylogger, som er en type spyware.' },
          { id: 'd', text: 'Et antivirusprogram som krever betaling', isCorrect: false, feedback: 'Ransomware er skadelig programvare, ikke antivirusprogramvare.' },
        ],
        solution: 'Ransomware er en type malware som krypterer offerets filer og krever løsepenger (vanligvis i kryptovaluta) for å dekryptere dem. Det er en av de alvorligste cybertruslene i dag. Eksperter anbefaler å aldri betale, men heller ha gode sikkerhetskopier.',
      },
    },
    {
      id: 'it-1-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it1-7-3-ex-3',
        number: '7.3.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Du mottar en e-post fra «sikkerhet@microsoft-support.net» som sier at kontoen din er kompromittert og at du må klikke på en lenke for å endre passordet umiddelbart. Hva bør du gjøre?',
        options: [
          { id: 'a', text: 'Klikk på lenken og endre passordet med en gang for å beskytte kontoen', isCorrect: false, feedback: 'Aldri klikk på lenker i mistenkelige e-poster – dette er sannsynligvis phishing.' },
          { id: 'b', text: 'Svar på e-posten og be om mer informasjon', isCorrect: false, feedback: 'Å svare på phishing-e-post bekrefter at e-postadressen din er aktiv.' },
          { id: 'c', text: 'Ignorer e-posten og gå direkte til Microsofts offisielle nettside for å sjekke kontoen din', isCorrect: true },
          { id: 'd', text: 'Videresend e-posten til alle kollegaer som en advarsel', isCorrect: false, feedback: 'Det kan spre den ondsinnede lenken til flere. Rapporter heller til IT-avdelingen.' },
        ],
        solution: 'Dette er et klassisk phishing-forsøk. Domenet microsoft-support.net er ikke Microsofts ekte domene. E-posten skaper hastverk med «umiddelbart». Riktig handling er å ignorere e-posten, gå direkte til microsoft.com (skriv inn adressen selv) og sjekke kontoen der. Du kan også rapportere e-posten som phishing.',
      },
    },
    {
      id: 'it-1-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it1-7-3-ex-4',
        number: '7.3.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er et DDoS-angrep?',
        options: [
          { id: 'a', text: 'Et angrep der hackeren stjeler data fra en database', isCorrect: false, feedback: 'Datatyveri er en annen type angrep. DDoS handler om tilgjengelighet.' },
          { id: 'b', text: 'Et angrep der mange datamaskiner oversvømmer en server med forespørsler slik at den blir utilgjengelig', isCorrect: true },
          { id: 'c', text: 'Et angrep der noen gjetter passordet ditt', isCorrect: false, feedback: 'Det du beskriver er et brute force-angrep.' },
          { id: 'd', text: 'Et angrep der malware krypterer filene dine', isCorrect: false, feedback: 'Det du beskriver er ransomware.' },
        ],
        solution: 'DDoS (Distributed Denial of Service) er et angrep der tusenvis av datamaskiner (ofte i et botnett) sender enorme mengder forespørsler til en server eller tjeneste samtidig. Serveren overbelastes og klarer ikke å betjene vanlige brukere. Angrepet rammer tilgjengelighets-delen av CIA-triaden.',
      },
    },
    {
      id: 'it-1-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it1-7-3-ex-5',
        number: '7.3.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv minst fem konkrete tiltak en elev kan gjøre for å beskytte sin digitale sikkerhet i hverdagen. Forklar hvorfor hvert tiltak er viktig og hvilken type trussel det beskytter mot.',
        solution: `1. **Bruke sterke, unike passord og passordbehandler:** Sterke passord (minst 12 tegn, blanding av tegn) beskytter mot brute force-angrep. Unike passord for hver tjeneste hindrer at ett kompromittert passord gir tilgang til alle kontoer. En passordbehandler gjør dette håndterbart.

2. **Aktivere tofaktorautentisering (2FA):** Selv om passordet blir stjålet (f.eks. gjennom phishing), trengs en ekstra faktor (SMS-kode, autentiseringsapp) for å logge inn. Beskytter mot phishing og lekkede passord.

3. **Holde programvare oppdatert:** Sikkerhetsoppdateringer lukker kjente sårbarheter som malware og angripere kan utnytte. Beskytter mot ormer, virus og zero-day exploits.

4. **Være skeptisk til e-poster og meldinger:** Ikke klikk på lenker eller åpne vedlegg fra ukjente avsendere. Sjekk avsenderadresser nøye. Beskytter mot phishing, malware og sosial manipulering.

5. **Ta sikkerhetskopier:** Regelmessige sikkerhetskopier til ekstern disk eller skytjeneste sikrer at du kan gjenopprette filer etter ransomware, maskinvarefeil eller tyveri. Følg 3-2-1-regelen.

6. **Bruke HTTPS:** Sørg for at nettsider du oppgir sensitiv informasjon på bruker HTTPS (hengelåsikon). Beskytter mot man-in-the-middle-angrep og avlytting.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-1-7-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it1-7-3-ex-6',
        number: '7.3.6',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva er hovedforskjellen mellom et virus og en orm (worm)?',
        options: [
          { id: 'a', text: 'Et virus er skadelig og en orm er ufarlig', isCorrect: false, feedback: 'Begge er skadelig malware.' },
          { id: 'b', text: 'Et virus trenger en vertsfil og brukerhandling for å spres, mens en orm sprer seg automatisk over nettverk', isCorrect: true },
          { id: 'c', text: 'En orm krypterer filer og et virus sletter filer', isCorrect: false, feedback: 'Kryptering av filer er typisk for ransomware. Både virus og ormer kan gjøre ulike typer skade.' },
          { id: 'd', text: 'Et virus rammer Windows og en orm rammer Mac', isCorrect: false, feedback: 'Begge kan ramme alle operativsystemer.' },
        ],
        solution: 'Et virus fester seg til en fil eller et program og spres når filen åpnes – det krever en brukerhandling. En orm derimot sprer seg automatisk over nettverk ved å utnytte sårbarheter, uten at brukeren gjør noe. WannaCry-ormen spredde seg for eksempel automatisk til over 200 000 maskiner uten brukerinteraksjon.',
      },
    },
    {
      id: 'it-1-7-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it1-7-3-ex-7',
        number: '7.3.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En liten bedrift med 20 ansatte ønsker å forbedre sin informasjonssikkerhet. Lag en sikkerhetsplan med både tekniske og menneskelige tiltak. Forklar hvordan planen adresserer alle tre delene av CIA-triaden (konfidensialitet, integritet og tilgjengelighet).',
        solution: `**Tekniske tiltak:**
- Brannmur og oppdatert antivirus/antimalware på alle maskiner (konfidensialitet, integritet)
- Automatiske sikkerhetsoppdateringer for OS og programvare (alle tre)
- Tofaktorautentisering for alle kontoer (konfidensialitet)
- Kryptering av bærbare PC-er og mobiltelefoner (konfidensialitet)
- Regelmessige sikkerhetskopier med 3-2-1-regelen (tilgjengelighet, integritet)
- VLAN-segmentering av nettverket for å begrense spredning ved angrep (konfidensialitet)
- VPN for fjernarbeid (konfidensialitet)
- Automatisk e-postfiltrering mot spam og phishing (konfidensialitet, integritet)

**Menneskelige tiltak:**
- Obligatorisk sikkerhetsopplæring for alle ansatte, med fokus på phishing og sosial manipulering (alle tre)
- Passordpolicy: minst 12 tegn, unike passord, passordbehandler (konfidensialitet)
- Klare rutiner for rapportering av sikkerhetshendelser (alle tre)
- Prinsippet om minste privilegium: ansatte har bare tilgang til det de trenger (konfidensialitet, integritet)
- Regelmessige phishing-tester for å sjekke bevisstheten (konfidensialitet)
- Rutiner for sikker sletting av data ved avvikling av utstyr (konfidensialitet)

**CIA-triaden:** Konfidensialitet beskyttes av kryptering, 2FA, passordpolicy og tilgangskontroll. Integritet beskyttes av brannmur, antivirus og sikkerhetsoppdateringer. Tilgjengelighet beskyttes av sikkerhetskopier, oppdateringer og nettverkssegmentering.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  prevChapter: 'it-1-7-2',
  nextChapter: 'it-1-7-4',
};

// ============================================================================
// KAPITTEL 7.4: Personvern og GDPR
// ============================================================================

export const CHAPTER_IT_1_7_4: TextbookChapter = {
  id: 'it-1-7-4',
  courseId: 'it-1',
  chapterNumber: '7.4',
  title: 'Personvern og GDPR',
  description: 'Forstå personopplysningsloven og GDPR, rettigheter knyttet til personvern, krav om samtykke og databehandleravtaler i den digitale hverdagen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for regler og lovverk knyttet til personvern og personopplysninger',
    'drøfte etiske problemstillinger rundt personvern i den digitale hverdagen',
  ],
  keyTerms: [
    { term: 'Personopplysning', definition: 'En personopplysning er enhver opplysning som kan knyttes til en identifiserbar fysisk person, direkte eller indirekte. Direkte identifiserende opplysninger er for eksempel navn, personnummer og bilde. Indirekte identifiserende opplysninger er data som alene eller i kombinasjon kan identifisere en person, for eksempel IP-adresse, telefonnummer, bilnummer eller lokasjonsdata. Særlige kategorier (sensitive opplysninger) inkluderer helseinformasjon, politisk tilhørighet, religion, seksuell orientering og biometriske data.' },
    { term: 'GDPR', definition: 'General Data Protection Regulation (Personvernforordningen) er EUs forordning om vern av personopplysninger som trådte i kraft 25. mai 2018. GDPR gjelder i hele EU/EØS og er innlemmet i norsk lov gjennom personopplysningsloven. GDPR gir enkeltpersoner sterke rettigheter over sine personopplysninger og pålegger virksomheter strenge krav til hvordan de samler inn, bruker og lagrer persondata. Brudd kan gi bøter på opptil 20 millioner euro eller 4 % av global omsetning.' },
    { term: 'Samtykke', definition: 'Samtykke er ett av flere rettslige grunnlag for å behandle personopplysninger under GDPR. Et gyldig samtykke må være frivillig, spesifikt, informert og utvetydig. Den registrerte må aktivt gi sitt samtykke (f.eks. krysse av i en boks), og det må være like enkelt å trekke samtykket tilbake som å gi det. Forhåndsavkryssede bokser eller passivt samtykke er ikke gyldig. For barn under 13 år i Norge kreves foresattes samtykke.' },
    { term: 'Behandlingsansvarlig', definition: 'Den behandlingsansvarlige er den virksomheten eller personen som bestemmer formålet med og midlene for behandlingen av personopplysninger. Det er den behandlingsansvarlige som har hovedansvaret for at personopplysningene behandles i samsvar med GDPR. For eksempel er skolen behandlingsansvarlig for elevopplysninger i sine systemer, og en nettbutikk er behandlingsansvarlig for kundedata.' },
    { term: 'Databehandler', definition: 'En databehandler er en virksomhet eller person som behandler personopplysninger på vegne av den behandlingsansvarlige. Forholdet mellom behandlingsansvarlig og databehandler skal reguleres i en databehandleravtale som spesifiserer hvilke opplysninger som behandles, formålet, sikkerhetstiltak og varighet. Eksempler: en skytjeneste som lagrer data, et regnskapsselskap som behandler lønnsdata, eller en læringsplattform som håndterer elevopplysninger.' },
    { term: 'Personvernombud', definition: 'Et personvernombud (Data Protection Officer, DPO) er en person som skal sikre at en virksomhet behandler personopplysninger i samsvar med regelverket. Offentlige virksomheter og virksomheter som behandler store mengder sensitive opplysninger er pålagt å ha et personvernombud. Ombudet fungerer som kontaktpunkt mot Datatilsynet og de registrerte, gir råd om personvern og overvåker at regelverket følges.' },
  ],
  content: [
    {
      id: 'it-1-7-4-intro',
      type: 'text',
      content: `## Personvern og GDPR

Hvor mange apper har tilgang til posisjonen din akkurat nå? Hvem ser at du er online? Hvilke selskaper lagrer søkehistorikken din, handlemønsteret ditt og helsedata fra smartklokken? I den digitale hverdagen legger vi igjen enorme mengder data om oss selv, ofte uten å tenke over det.

**Personvern** handler om retten til å ha kontroll over egne personopplysninger – hvem som samler dem inn, hva de brukes til, og hvordan de beskyttes. I Norge og EU er denne retten lovfestet gjennom **GDPR** (General Data Protection Regulation) og den norske **personopplysningsloven**. Disse lovene gir deg sterke rettigheter og pålegger virksomheter strenge krav til behandling av persondata. Som IT-elev er det viktig å forstå dette regelverket, fordi all utvikling av digitale løsninger må ta hensyn til personvern.`,
    },
    {
      id: 'it-1-7-4-def-personopplysning',
      type: 'definition',
      title: 'Personopplysning',
      content: `En **personopplysning** er enhver opplysning som direkte eller indirekte kan knyttes til en identifiserbar fysisk person. Eksempler inkluderer:

**Direkte identifiserende:** Navn, personnummer, ansiktsbilde, fingeravtrykk
**Indirekte identifiserende:** IP-adresse, e-postadresse, telefonnummer, bilnummer, lokasjonsdata, cookie-ID

**Særlige kategorier (sensitive opplysninger):** Helseinformasjon, etnisitet, politisk tilhørighet, religiøs overbevisning, seksuell orientering, fagforeningsmedlemskap, biometriske data, strafferettslige forhold

Sensitive opplysninger har ekstra streng beskyttelse under GDPR og kan kun behandles med eksplisitt samtykke eller andre spesifikke rettslige grunnlag.`,
    },
    {
      id: 'it-1-7-4-text-gdpr',
      type: 'text',
      title: 'GDPR – personvernforordningen',
      content: `**GDPR** (General Data Protection Regulation) er EUs personvernforordning som har vært gjeldende siden 25. mai 2018. I Norge er GDPR innlemmet gjennom **personopplysningsloven** av 2018, som gjør GDPR til norsk lov.

### Bakgrunn

Før GDPR var personvernreglene i Europa fragmenterte – hvert land hadde sine egne lover. Den digitale utviklingen med sosiale medier, skylagring, stordata og kunstig intelligens gjorde det nødvendig med et felles, sterkt regelverk. GDPR erstattet det gamle EU-direktivet fra 1995 og ga innbyggerne langt sterkere rettigheter.

### Virkeområde

GDPR gjelder for:
- Alle virksomheter i EU/EØS som behandler personopplysninger
- Virksomheter utenfor EU/EØS som tilbyr varer eller tjenester til personer i EU/EØS
- Virksomheter som overvåker adferd til personer i EU/EØS

Det betyr at selv et amerikansk selskap som Google eller Facebook må følge GDPR når de behandler data om norske og europeiske brukere.

### Grunnleggende prinsipper

GDPR bygger på syv grunnleggende prinsipper for behandling av personopplysninger:

1. **Lovlighet, rettferdighet og åpenhet:** Behandlingen må ha et rettslig grunnlag og være transparent for den registrerte
2. **Formålsbegrensning:** Data skal bare samles inn for spesifikke, uttrykkelig angitte formål
3. **Dataminimering:** Bare nødvendige opplysninger skal samles inn – ikke mer enn det som trengs
4. **Riktighet:** Opplysningene skal være korrekte og oppdaterte
5. **Lagringsbegrensning:** Data skal ikke lagres lenger enn nødvendig for formålet
6. **Integritet og konfidensialitet:** Data skal beskyttes med passende sikkerhetstiltak
7. **Ansvarlighet:** Den behandlingsansvarlige skal kunne dokumentere at reglene følges`,
    },
    {
      id: 'it-1-7-4-text-rettigheter',
      type: 'text',
      title: 'Dine rettigheter under GDPR',
      content: `GDPR gir deg som enkeltperson en rekke sterke rettigheter over dine egne personopplysninger:

### Rett til informasjon

Du har rett til å vite at personopplysningene dine behandles, hvem som behandler dem, hva de brukes til, og hvor lenge de lagres. Virksomheter må ha en **personvernerklæring** som forklarer dette i et klart og forståelig språk.

### Rett til innsyn

Du har rett til å be om en kopi av alle personopplysninger en virksomhet har om deg. Virksomheten må svare innen 30 dager og utlevere dataene gratis. Du kan for eksempel be Google om en kopi av alle data de har samlet om deg.

### Rett til retting

Hvis personopplysningene som er lagret om deg er feil eller ufullstendige, har du rett til å kreve at de rettes.

### Rett til sletting (retten til å bli glemt)

Du kan kreve at personopplysningene dine slettes dersom:
- De ikke lenger er nødvendige for formålet de ble samlet inn for
- Du trekker tilbake samtykket
- Opplysningene har blitt behandlet ulovlig
- Det finnes ingen tungtveiende grunn til å beholde dem

Virksomheten er ikke alltid pliktig til å slette – for eksempel kan regnskapsloven kreve at transaksjonsdata lagres i en viss tid.

### Rett til dataportabilitet

Du har rett til å få utlevert personopplysningene dine i et maskinlesbart format (f.eks. JSON eller CSV) slik at du kan overføre dem til en annen tjeneste. For eksempel kan du eksportere dataene dine fra én sosialt medium-plattform og importere dem til en annen.

### Rett til å protestere

Du kan protestere mot behandling av dine personopplysninger, for eksempel mot profilering og direkte markedsføring. Hvis du protesterer mot direkte markedsføring, plikter virksomheten å stoppe umiddelbart.

### Rett til å begrense behandling

I visse situasjoner kan du kreve at behandlingen av dine data begrenses, for eksempel mens en klage behandles.`,
    },
    {
      id: 'it-1-7-4-text-samtykke',
      type: 'text',
      title: 'Samtykke og rettslig grunnlag',
      content: `For å lovlig behandle personopplysninger trenger virksomheten et **rettslig grunnlag**. De vanligste grunnlagene i GDPR er:

### 1. Samtykke

Den registrerte har gitt sitt uttrykkelige samtykke. Samtykke under GDPR må være:

- **Frivillig:** Ingen negative konsekvenser av å si nei
- **Spesifikt:** Samtykke til ett bestemt formål, ikke en generell blankofullmakt
- **Informert:** Personen må vite hva de samtykker til
- **Utvetydig:** Krever en aktiv handling (f.eks. avkryssing av boks)
- **Dokumenterbart:** Virksomheten må kunne bevise at samtykke ble gitt
- **Tilbakekallbart:** Like enkelt å trekke tilbake som å gi

### 2. Avtale

Behandlingen er nødvendig for å oppfylle en avtale med den registrerte. Eksempel: en nettbutikk trenger leveringsadressen din for å sende varene.

### 3. Rettslig forpliktelse

Behandlingen er nødvendig for å oppfylle en lovpålagt plikt. Eksempel: arbeidsgiveren rapporterer lønnsdata til Skatteetaten.

### 4. Berettiget interesse

Virksomheten har en berettiget interesse som veier tyngre enn personvernet til den registrerte. Eksempel: en nettbutikk sender ut nyhetsbrev til eksisterende kunder om lignende produkter. Den registrerte har rett til å protestere.

### 5. Vitale interesser

Behandlingen er nødvendig for å beskytte noens liv eller helse. Eksempel: et sykehus behandler pasientdata i en nødsituasjon.

### 6. Offentlig myndighetsutøvelse

Behandlingen er nødvendig for å utføre en oppgave i offentlighetens interesse. Eksempel: Folkehelseinstituttet bruker helsedata for smittesporing.`,
    },
    {
      id: 'it-1-7-4-example-cookie',
      type: 'example',
      title: 'Eksempel: Informasjonskapsler (cookies) og samtykke',
      content: `Du har sikkert sett de popupmeldingene om «cookies» på nesten alle nettsider. Her er hva som skjer:

**Situasjon:** Du besøker en norsk nettavis for første gang.

**Hva som skjer:**
1. Nettsiden viser et **samtykkebanner** som informerer om bruk av informasjonskapsler
2. Banneret skiller mellom **nødvendige cookies** (som siden trenger for å fungere) og **valgfrie cookies** (for analyse, reklame og sporing)
3. Du kan velge å akseptere alle, avslå valgfrie, eller tilpasse valget ditt

**Hvorfor dette er nødvendig:** GDPR krever at brukere gir informert samtykke før ikke-nødvendige cookies settes. Nødvendige cookies (f.eks. for innlogging eller handlekurv) krever ikke samtykke fordi de er nødvendige for tjenesten.

**Hva cookiene gjør:**
- **Nødvendige:** Husker innlogging, handlekurv, språkvalg
- **Analyse:** Google Analytics sporer besøkstall og brukeratferd
- **Reklame:** Tredjeparter (Facebook, Google Ads) bruker cookiene for å vise målrettet reklame basert på din nettbruk

**GDPR-kravene:**
- Brukeren må kunne si nei uten negative konsekvenser
- Forhåndsavkrysset «aksepter alle» er ikke gyldig samtykke
- Det må være like lett å avslå som å akseptere
- Brukeren må kunne endre valget sitt senere`,
    },
    {
      id: 'it-1-7-4-text-databehandler',
      type: 'text',
      title: 'Databehandleravtaler',
      content: `Når en virksomhet bruker en ekstern leverandør til å behandle personopplysninger, må det inngås en **databehandleravtale**. Denne avtalen regulerer forholdet mellom den behandlingsansvarlige og databehandleren.

### Hva er en databehandler?

En **databehandler** er en virksomhet som behandler personopplysninger på vegne av den behandlingsansvarlige. Eksempler:

- En skole (behandlingsansvarlig) bruker Microsoft 365 (databehandler) for e-post og dokumenter
- En nettbutikk (behandlingsansvarlig) bruker en betalingsleverandør (databehandler) for å håndtere transaksjoner
- En kommune (behandlingsansvarlig) bruker en skytjeneste (databehandler) for å lagre innbyggerdata

### Hva skal en databehandleravtale inneholde?

- **Formål:** Hva databehandleren skal gjøre med opplysningene
- **Varighet:** Hvor lenge behandlingen varer
- **Type opplysninger:** Hvilke personopplysninger som behandles
- **Kategorier av registrerte:** Hvem opplysningene gjelder (ansatte, kunder, elever)
- **Sikkerhetstiltak:** Hvilke tekniske og organisatoriske tiltak som skal beskytte dataene
- **Underdatabehandlere:** Om databehandleren bruker underleverandører, og vilkårene for det
- **Sletting:** Hva som skjer med dataene når avtalen opphører
- **Revisjon:** Den behandlingsansvarliges rett til å kontrollere at avtalen overholdes

### Overføring til land utenfor EU/EØS

GDPR begrenser overføring av personopplysninger til land utenfor EU/EØS som ikke har et tilstrekkelig beskyttelsesnivå. For å overføre data til for eksempel USA, må det finnes et gyldig overføringsgrunnlag som standardkontraktsklausuler (SCC) eller den nye EU-US Data Privacy Framework. Dette er et komplekst juridisk område som stadig er i utvikling.`,
    },
    {
      id: 'it-1-7-4-text-datatilsynet',
      type: 'text',
      title: 'Datatilsynet og håndhevelse',
      content: `**Datatilsynet** er det norske tilsynsorganet som håndhever personopplysningsloven og GDPR i Norge. Datatilsynet:

- Fører tilsyn med virksomheter og pålegger retting ved brudd
- Kan ilegge overtredelsesgebyr (bøter) ved brudd på regelverket
- Veileder virksomheter og privatpersoner om personvern
- Behandler klager fra registrerte som mener rettighetene deres er brutt
- Deltar i samarbeid med andre europeiske datatilsynsmyndigheter

### Konsekvenser av brudd

Brudd på GDPR kan gi alvorlige konsekvenser:

- **Overtredelsesgebyr:** Opptil 20 millioner euro eller 4 % av global årsomsetning (den høyeste av de to)
- **Pålegg om endring:** Datatilsynet kan pålegge virksomheten å endre praksis
- **Forbud mot behandling:** I alvorlige tilfeller kan behandlingen forbys helt
- **Omdømmeskade:** Offentlighet rundt personvernbrudd kan skade virksomhetens omdømme
- **Erstatningskrav:** Registrerte kan kreve erstatning for skade som følge av brudd

Noen eksempler på store GDPR-bøter i Europa:
- Amazon: 746 millioner euro (Luxembourg, 2021)
- WhatsApp: 225 millioner euro (Irland, 2021)
- Google: 150 millioner euro (Frankrike, 2022)
- Grindr: 65 millioner kroner (Norge, 2021) – for ulovlig deling av brukerdata med reklameselskaper`,
    },
    {
      id: 'it-1-7-4-note-personvern-skole',
      type: 'note',
      title: 'Personvern i skolen',
      content: `Som elev har du personvernrettigheter i skolen:

- Skolen er **behandlingsansvarlig** for opplysninger om deg (karakterer, fravær, kontaktinfo)
- Læringsplattformer (itslearning, Google Classroom) er **databehandlere** – skolen skal ha databehandleravtaler med dem
- Skolen kan ikke bruke bilder av deg i markedsføring uten samtykke
- Elever over 13 år kan i noen tilfeller selv samtykke til behandling av personopplysninger
- Du har rett til innsyn i opplysninger skolen har om deg
- Kommunen/fylkeskommunen har gjort vurderinger av personvern (DPIA) for digitale verktøy i skolen

Husk: Selv om skolen kan kreve at du bruker bestemte læringsverktøy, skal personvernet ditt ivaretas gjennom avtaler og rutiner.`,
    },
    {
      id: 'it-1-7-4-tip-rettigheter',
      type: 'tip',
      title: 'Slik bruker du rettighetene dine',
      content: `Du kan bruke GDPR-rettighetene dine i praksis:

1. **Be om innsyn:** Send en e-post til virksomhetens personvernombud og be om kopi av alle data de har om deg. De har 30 dager på å svare.
2. **Last ned dine data:** De fleste store tjenester har innebygde verktøy:
   - Google: myaccount.google.com → Data og personvern → Last ned data
   - Facebook/Instagram: Innstillinger → Din informasjon → Last ned
   - Snapchat: accounts.snapchat.com → Mine data
3. **Slett kontoer du ikke bruker:** Bruk tjenester som justdelete.me for å finne instruksjoner
4. **Klage til Datatilsynet:** Hvis en virksomhet ikke respekterer rettighetene dine, kan du klage på datatilsynet.no`,
    },
    {
      id: 'it-1-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it1-7-4-ex-1',
        number: '7.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse er en personopplysning i henhold til GDPR?',
        options: [
          { id: 'a', text: 'Åpningstidene til en butikk', isCorrect: false, feedback: 'Åpningstider er ikke knyttet til en identifiserbar person.' },
          { id: 'b', text: 'En persons IP-adresse', isCorrect: true },
          { id: 'c', text: 'Værmelding for i morgen', isCorrect: false, feedback: 'Værmelding er generell informasjon, ikke personopplysning.' },
          { id: 'd', text: 'Prisen på en vare i nettbutikken', isCorrect: false, feedback: 'Varepris er ikke knyttet til en identifiserbar person.' },
        ],
        solution: 'En IP-adresse regnes som en personopplysning under GDPR fordi den indirekte kan identifisere en person. Internettleverandøren kan koble IP-adressen til en bestemt abonnent. Alle opplysninger som direkte eller indirekte kan knyttes til en identifiserbar person er personopplysninger.',
      },
    },
    {
      id: 'it-1-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it1-7-4-ex-2',
        number: '7.4.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva krever GDPR for at et samtykke skal være gyldig?',
        options: [
          { id: 'a', text: 'Det holder at brukeren besøker nettsiden – det regnes som samtykke', isCorrect: false, feedback: 'Passivt samtykke (å bare besøke en side) er ikke gyldig under GDPR.' },
          { id: 'b', text: 'Samtykket må være frivillig, spesifikt, informert og utvetydig, og krever en aktiv handling', isCorrect: true },
          { id: 'c', text: 'Samtykke trenger bare å gis muntlig', isCorrect: false, feedback: 'Samtykket må dokumenteres, og virksomheten må kunne bevise at det ble gitt.' },
          { id: 'd', text: 'En forhåndsavkrysset boks er tilstrekkelig', isCorrect: false, feedback: 'Forhåndsavkryssede bokser er uttrykkelig forbudt under GDPR.' },
        ],
        solution: 'Under GDPR må samtykke være frivillig (ingen tvang), spesifikt (for et bestemt formål), informert (personen forstår hva de samtykker til) og utvetydig (en klar, aktiv handling). Forhåndsavkryssede bokser er ikke gyldig. Det må dessuten være like enkelt å trekke samtykket tilbake som å gi det.',
      },
    },
    {
      id: 'it-1-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it1-7-4-ex-3',
        number: '7.4.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Du har en nettbutikk og en kunde ber om å få slettet alle sine personopplysninger. Hva gjør du?',
        options: [
          { id: 'a', text: 'Sletter alle opplysninger umiddelbart uten unntak', isCorrect: false, feedback: 'Det finnes unntak – for eksempel kan regnskapsloven kreve at transaksjonsdata beholdes.' },
          { id: 'b', text: 'Nekter fordi du trenger dataene for markedsføring', isCorrect: false, feedback: 'Markedsføring er ikke et gyldig grunnlag for å nekte sletting.' },
          { id: 'c', text: 'Sletter opplysninger som ikke trengs av andre lovkrav, men beholder det regnskapsloven krever at du lagrer', isCorrect: true },
          { id: 'd', text: 'Ber kunden om å betale et gebyr for sletting', isCorrect: false, feedback: 'GDPR gir rett til gratis utøvelse av rettigheter.' },
        ],
        solution: 'Retten til sletting er ikke absolutt. Du skal slette personopplysninger som ikke lenger er nødvendige for det opprinnelige formålet, men du kan beholde data som andre lover krever at du lagrer. Regnskapsloven krever for eksempel at transaksjonsdata lagres i fem år. Du må informere kunden om hva som slettes og hva som beholdes, og hvorfor.',
      },
    },
    {
      id: 'it-1-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it1-7-4-ex-4',
        number: '7.4.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er en databehandleravtale?',
        options: [
          { id: 'a', text: 'En avtale mellom brukeren og nettsiden om bruk av cookies', isCorrect: false, feedback: 'Det du beskriver er en samtykkeerklæring for cookies.' },
          { id: 'b', text: 'En avtale som regulerer forholdet mellom behandlingsansvarlig og en ekstern part som behandler personopplysninger på deres vegne', isCorrect: true },
          { id: 'c', text: 'En forsikring mot dataangrep', isCorrect: false, feedback: 'En databehandleravtale handler om personvern, ikke cyberforsikring.' },
          { id: 'd', text: 'En lisensavtale for programvare', isCorrect: false, feedback: 'Lisensavtaler handler om bruksrettigheter til programvare, ikke personvern.' },
        ],
        solution: 'En databehandleravtale regulerer forholdet mellom den behandlingsansvarlige (som bestemmer formål og midler for behandlingen) og databehandleren (som behandler data på vegne av den ansvarlige). Avtalen spesifiserer hvilke opplysninger som behandles, formål, sikkerhetstiltak og hva som skjer ved avtalens opphør. GDPR krever at slike avtaler er på plass.',
      },
    },
    {
      id: 'it-1-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it1-7-4-ex-5',
        number: '7.4.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du skal utvikle en app der brukere kan registrere treningsøkter og dele resultater med venner. Hvilke personvernhensyn må du ta? Beskriv hvilke personopplysninger appen samler inn, hvilket rettslig grunnlag du trenger, og hvilke rettigheter brukerne har.',
        solution: `**Personopplysninger appen samler inn:**
- Navn, e-post og profilbilde (direkte identifiserende)
- Treningsdata: type trening, varighet, kaloriforbruk (kan avsløre helseinformasjon – sensitive data)
- Posisjonsdata ved løping/sykling (indirekte identifiserende)
- Venners brukernavn og kontaktliste (personopplysninger om tredjeparter)
- Enhets-ID og bruksmønster (indirekte identifiserende)

**Rettslig grunnlag:**
- Samtykke: For helserelaterte data (treningsdata), posisjonssporing og deling med venner – krever eksplisitt samtykke da dette er sensitive opplysninger
- Avtale: For grunnleggende kontodata som trengs for at tjenesten skal fungere

**Brukerrettigheter som må implementeres:**
- Innsyn: Brukeren kan se alle lagrede data
- Sletting: Brukeren kan slette kontoen og alle data
- Dataportabilitet: Eksportfunksjon for egne treningsdata (f.eks. JSON/CSV)
- Samtykketrekking: Enkelt å slå av posisjonssporing eller deling
- Retting: Mulighet til å rette feil i profildata

**Andre personvernhensyn:**
- Dataminimering: Ikke samle inn mer enn nødvendig
- Privacy by design: Personvern bygd inn fra starten
- Personvernerklæring i klart språk
- Databehandleravtale med eventuelle skytjenester
- Vurdering av overføring til tredjeland hvis data lagres utenfor EU/EØS`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-1-7-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it1-7-4-ex-6',
        number: '7.4.6',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva menes med prinsippet om «dataminimering» i GDPR?',
        options: [
          { id: 'a', text: 'At personopplysninger skal krypteres med minimal nøkkellengde', isCorrect: false, feedback: 'Dataminimering handler om mengden data, ikke kryptering.' },
          { id: 'b', text: 'At man bare skal samle inn personopplysninger som er nødvendige for det spesifikke formålet', isCorrect: true },
          { id: 'c', text: 'At data skal lagres på så få servere som mulig', isCorrect: false, feedback: 'Dataminimering handler om hvilke data som samles inn, ikke lagringsinfrastruktur.' },
          { id: 'd', text: 'At brukere skal oppgi så lite informasjon som mulig ved innlogging', isCorrect: false, feedback: 'Dataminimering er et krav til virksomheten, ikke til brukeren.' },
        ],
        solution: 'Dataminimering er et grunnleggende prinsipp i GDPR (artikkel 5(1)(c)) som sier at personopplysninger skal være «adekvate, relevante og begrenset til det som er nødvendig for formålene de behandles for». I praksis betyr det: Ikke samle inn data du ikke trenger. Hvis du trenger e-post for å sende ordrebekreftelse, trenger du ikke også fødselsdato og telefonnummer.',
      },
    },
    {
      id: 'it-1-7-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it1-7-4-ex-7',
        number: '7.4.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft spenningen mellom personvern og innovasjon. Noen mener GDPR bremser teknologisk utvikling, mens andre mener det er nødvendig for å beskytte borgernes rettigheter. Presenter argumenter for begge sider og gi din vurdering. Bruk gjerne konkrete eksempler fra kunstig intelligens, helseteknologi eller overvåkning.',
        solution: `**Argumenter for at GDPR bremser innovasjon:**
- Strenge krav til samtykke kan gjøre det vanskeligere å trene KI-modeller som trenger store datamengder
- Små oppstartsbedrifter har ikke ressurser til å oppfylle alle GDPR-krav, noe som favoriserer store selskaper
- Dataminimering begrenser muligheten for å finne uventede mønstre i stordata-analyse
- Cookie-bannere og samtykkeskjemaer skaper dårlig brukeropplevelse
- Europeiske selskaper kan tape konkurranseevne mot selskaper i land med svakere regelverk

**Argumenter for at GDPR er nødvendig:**
- Uten regulering ville selskaper samle inn og bruke persondata uten kontroll, som skandaler som Cambridge Analytica viste
- Personvern er en grunnleggende menneskerettighet i Europa
- GDPR bygger tillit mellom brukere og digitale tjenester, noe som er positivt for digital økonomi
- Overvåkningsteknologi uten regelverk kan misbrukes av autoritære krefter
- Helseteknologi krever at sensitive data beskyttes for at folk skal tørre å bruke tjenestene
- GDPR fremmer «privacy by design» som faktisk kan føre til bedre og sikrere teknologi

**Min vurdering:** Et balansert regelverk er nødvendig. GDPR beskytter viktige rettigheter og har blitt en global standard. Utfordringen er å gjøre regelverket mer praktisk uten å svekke beskyttelsen – for eksempel ved å forenkle kravene for forskning og småbedrifter, samtidig som man holder store techselskaper ansvarlige.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  prevChapter: 'it-1-7-3',
  nextChapter: 'it-1-7-5',
};

// ============================================================================
// KAPITTEL 7.5: Kryptering og autentisering
// ============================================================================

export const CHAPTER_IT_1_7_5: TextbookChapter = {
  id: 'it-1-7-5',
  courseId: 'it-1',
  chapterNumber: '7.5',
  title: 'Kryptering og autentisering',
  description: 'Lær om symmetrisk og asymmetrisk kryptering, hashing, tofaktorautentisering og digitale sertifikater for sikker kommunikasjon.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjøre rede for prinsippene bak kryptering og autentisering',
    'forklare hvordan kryptering brukes for å sikre digital kommunikasjon',
  ],
  keyTerms: [
    { term: 'Kryptering', definition: 'Kryptering er prosessen med å gjøre om lesbar informasjon (klartekst) til uleselig form (chiffertekst) ved hjelp av en matematisk algoritme og en nøkkel. Bare den som har riktig nøkkel kan dekryptere chifferteksten tilbake til klartekst. Kryptering er grunnleggende for å beskytte konfidensialiteten til data – både under overføring (f.eks. HTTPS) og under lagring (f.eks. kryptert harddisk). De to hovedtypene er symmetrisk kryptering (samme nøkkel for kryptering og dekryptering) og asymmetrisk kryptering (ulike nøkler for kryptering og dekryptering).' },
    { term: 'Symmetrisk kryptering', definition: 'Symmetrisk kryptering bruker samme nøkkel for å kryptere og dekryptere data. Det er som en lås med én nøkkel – både avsender og mottaker trenger den samme nøkkelen. Symmetrisk kryptering er rask og effektiv for store datamengder, men utfordringen er å trygt overlevere nøkkelen til mottakeren. Vanlige symmetriske algoritmer er AES (Advanced Encryption Standard) som brukes blant annet i HTTPS, VPN og krypterte harddisker.' },
    { term: 'Asymmetrisk kryptering', definition: 'Asymmetrisk kryptering bruker et par med to matematisk relaterte nøkler: en offentlig nøkkel (som alle kan se) og en privat nøkkel (som holdes hemmelig). Data som krypteres med den offentlige nøkkelen kan bare dekrypteres med den tilhørende private nøkkelen, og omvendt. Dette løser nøkkeldistribusjonsproblemet ved symmetrisk kryptering. RSA og elliptisk kurvekryptografi (ECC) er vanlige asymmetriske algoritmer.' },
    { term: 'Hashing', definition: 'Hashing er en enveisfunksjon som tar inn data av vilkårlig størrelse og produserer en fast-lengde streng (hash-verdi eller sjekksum). Samme input gir alltid samme hash, men det er praktisk umulig å finne input fra hash-verdien. Selv den minste endring i input gir en helt annerledes hash. Hashing brukes til å lagre passord sikkert (passordet lagres som hash, ikke i klartekst), verifisere filintegritet og i digitale signaturer. Vanlige algoritmer er SHA-256 og bcrypt.' },
    { term: 'Tofaktorautentisering', definition: 'Tofaktorautentisering (2FA) krever at brukeren beviser sin identitet med to ulike faktorer fra minst to av kategoriene: noe du vet (passord, PIN), noe du har (mobil, sikkerhetsnøkkel) og noe du er (fingeravtrykk, ansiktsgjenkjenning). Selv om passordet kompromitteres, er kontoen beskyttet fordi angriperen også trenger den andre faktoren. Vanlige 2FA-metoder er SMS-koder, autentiseringsapper (Google Authenticator, Microsoft Authenticator) og fysiske sikkerhetsnøkler (YubiKey).' },
    { term: 'Digitalt sertifikat', definition: 'Et digitalt sertifikat er et elektronisk dokument som bekrefter identiteten til en nettside, organisasjon eller person. Sertifikatet inneholder en offentlig nøkkel, informasjon om eieren og en digital signatur fra en pålitelig tredjepart kalt en sertifikatautoritet (CA). Når du besøker en HTTPS-side, sjekker nettleseren serverens digitale sertifikat for å verifisere at du faktisk kommuniserer med riktig server og ikke en bedrager. Hengelåsikonet i nettleseren viser at sertifikatet er gyldig.' },
    { term: 'Sertifikatautoritet', definition: 'En sertifikatautoritet (Certificate Authority, CA) er en pålitelig tredjepart som utsteder og signerer digitale sertifikater. CA-en verifiserer identiteten til den som ber om sertifikatet og garanterer at den offentlige nøkkelen i sertifikatet tilhører riktig eier. Nettlesere har innebygde lister over pålitelige CA-er (f.eks. DigiCert, Let\'s Encrypt, Comodo). Hvis et sertifikat er signert av en CA som nettleseren stoler på, vises hengelåsikonet.' },
  ],
  content: [
    {
      id: 'it-1-7-5-intro',
      type: 'text',
      content: `## Kryptering og autentisering

Hver gang du logger inn på en nettside, sender en melding eller betaler med Vipps, bruker du kryptering uten å tenke over det. Kryptering er den usynlige teknologien som gjør det trygt å handle på nett, kommunisere privat og beskytte sensitive data. Uten kryptering ville all digital kommunikasjon vært som å sende postkort – hvem som helst underveis kunne lese innholdet.

I dette kapittelet skal vi forstå de grunnleggende prinsippene bak kryptering og autentisering. Vi skal se hvordan symmetrisk og asymmetrisk kryptering fungerer, hvorfor hashing er viktig for passordsikkerhet, hvordan tofaktorautentisering beskytter kontoene dine, og hvordan digitale sertifikater gjør HTTPS mulig.`,
    },
    {
      id: 'it-1-7-5-def-kryptering',
      type: 'definition',
      title: 'Kryptering',
      content: `**Kryptering** er prosessen med å gjøre om lesbar informasjon (**klartekst**) til uleselig form (**chiffertekst**) ved hjelp av en matematisk **algoritme** og en **nøkkel**. Bare den som har riktig dekrypteringsnøkkel kan gjøre chifferteksten om til lesbar klartekst igjen. Kryptering beskytter **konfidensialiteten** til data og er en av de viktigste sikkerhetsteknologiene i den digitale verden. Kryptering brukes overalt: i HTTPS for sikker nettbruk, i meldingsapper for privat kommunikasjon, i VPN for sikker fjerntilgang, og i krypterte harddisker for å beskytte data ved tyveri.`,
    },
    {
      id: 'it-1-7-5-text-historie',
      type: 'text',
      title: 'Krypteringens historie',
      content: `Mennesker har brukt kryptering i tusenvis av år. Allerede i antikken utviklet man metoder for å skjule meldinger:

- **Cæsar-chifferet** (ca. 100 f.Kr.): Julius Cæsar erstattet hver bokstav med en bokstav et fast antall plasser lenger ut i alfabetet. Med forskyvning 3 blir A til D, B til E, osv. Meldingen «ANGRIP» blir «DQJULS».

- **Enigma-maskinen** (1920–1940-tallet): Tyskerne brukte den elektromekaniske Enigma-maskinen til å kryptere militær kommunikasjon under andre verdenskrig. Den britiske matematikeren Alan Turing og teamet hans ved Bletchley Park klarte å knekke Enigma-koden, noe som ifølge mange historikere forkortet krigen med flere år.

- **Moderne kryptering** (1970-tallet–i dag): Med datamaskiner ble det mulig å bruke avanserte matematiske algoritmer. DES (1977) og AES (2001) ble standarder for symmetrisk kryptering. RSA (1977) revolusjonerte feltet med asymmetrisk kryptering basert på primtallsfaktorisering.

I dag er kryptering en integrert del av all digital kommunikasjon. Algoritmene er basert på matematiske problemer som er enkle i én retning men ekstremt vanskelige å reversere – som å multiplisere to store primtall versus å faktorisere produktet.`,
    },
    {
      id: 'it-1-7-5-text-symmetrisk',
      type: 'text',
      title: 'Symmetrisk kryptering',
      content: `**Symmetrisk kryptering** bruker **samme nøkkel** for å kryptere og dekryptere data. Det er som en safe med én nøkkel – avsender og mottaker må begge ha en kopi av den samme nøkkelen.

### Hvordan det fungerer

1. **Avsender** tar klarteksten og krypterer den med nøkkelen → chiffertekst
2. **Chifferteksten** sendes over nettverket (trygt – den er uleselig uten nøkkelen)
3. **Mottaker** dekrypterer chifferteksten med den samme nøkkelen → klartekst

### Fordeler
- **Rask:** Symmetrisk kryptering er svært effektiv for store datamengder
- **Enkel:** Én nøkkel gjør det enkelt å implementere
- **Sterk:** Moderne algoritmer som AES-256 er praktisk umulige å knekke med dagens teknologi

### Ulemper
- **Nøkkeldistribusjon:** Hvordan får du trygt overlevert nøkkelen til mottakeren? Hvis nøkkelen fanges opp underveis, kan angriperen dekryptere alt
- **Skalering:** Hvis 100 personer skal kommunisere sikkert med hverandre parvis, trengs 4 950 unike nøkler

### Vanlige algoritmer

- **AES** (Advanced Encryption Standard): Den mest brukte symmetriske algoritmen i dag. Bruker nøkkellengder på 128, 192 eller 256 bit. AES-256 anses som uknuselig med dagens teknologi
- **ChaCha20:** Et raskt alternativ til AES, brukt i noen TLS-implementasjoner og meldingsapper

AES brukes blant annet i HTTPS (for selve datakrypteringen), BitLocker (Windows-diskryptering), FileVault (Mac-diskryptering) og de fleste VPN-tjenester.`,
    },
    {
      id: 'it-1-7-5-text-asymmetrisk',
      type: 'text',
      title: 'Asymmetrisk kryptering',
      content: `**Asymmetrisk kryptering** løser nøkkeldistribusjonsproblemet ved å bruke **to ulike nøkler** som hører sammen matematisk:

- **Offentlig nøkkel** (public key): Kan deles fritt med alle
- **Privat nøkkel** (private key): Holdes strengt hemmelig

Data som krypteres med den offentlige nøkkelen kan **bare** dekrypteres med den tilhørende private nøkkelen, og omvendt.

### Hvordan det fungerer (kryptering)

1. Mottaker genererer et nøkkelpar og deler sin **offentlige nøkkel** fritt
2. Avsender krypterer meldingen med mottakerens **offentlige nøkkel**
3. Den krypterte meldingen sendes over nettverket
4. Mottaker dekrypterer med sin **private nøkkel** – bare mottaker kan lese meldingen

Selv om angriperen fanger opp den krypterte meldingen og kjenner den offentlige nøkkelen, kan de **ikke** dekryptere meldingen uten den private nøkkelen.

### Digitale signaturer

Asymmetrisk kryptering brukes også for **digitale signaturer** – en måte å bevise avsenderens identitet:

1. Avsender signerer meldingen med sin **private nøkkel**
2. Hvem som helst kan verifisere signaturen med avsenderens **offentlige nøkkel**
3. Signaturen beviser at meldingen virkelig kommer fra avsender og ikke er endret

### Fordeler
- **Ingen nøkkeldeling nødvendig:** Den offentlige nøkkelen kan deles fritt
- **Skalering:** Hver bruker trenger bare ett nøkkelpar
- **Digitale signaturer:** Muliggjør identitetsverifisering

### Ulemper
- **Langsom:** Mye tregere enn symmetrisk kryptering (ca. 1000 ganger)
- **Nøkkellengde:** Krever mye lengre nøkler for tilsvarende sikkerhet

### Vanlige algoritmer

- **RSA:** Den mest kjente asymmetriske algoritmen, basert på vanskeligheten med å faktorisere store tall. Bruker typisk 2048- eller 4096-bit nøkler
- **ECC** (Elliptic Curve Cryptography): Gir tilsvarende sikkerhet som RSA med kortere nøkler, og er dermed raskere. Brukes stadig mer i moderne systemer`,
    },
    {
      id: 'it-1-7-5-example-hybrid',
      type: 'example',
      title: 'Eksempel: Hybridkryptering i HTTPS',
      content: `I praksis brukes asymmetrisk og symmetrisk kryptering **sammen** i det som kalles **hybridkryptering**. HTTPS er et godt eksempel:

**Problem:** Symmetrisk kryptering er rask men krever en felles nøkkel. Asymmetrisk kryptering løser nøkkeldelingen men er langsom.

**Løsning – hybridkryptering:**

1. **TLS-handshake (asymmetrisk):**
   - Nettleseren kobler seg til serveren
   - Serveren sender sitt digitale sertifikat med sin **offentlige nøkkel**
   - Nettleseren verifiserer sertifikatet
   - Nettleseren og serveren bruker asymmetrisk kryptering til å forhandle frem en **sesjonsnøkkel** (en tilfeldig symmetrisk nøkkel)

2. **Dataoverføring (symmetrisk):**
   - All videre kommunikasjon krypteres med den avtalte **sesjonsnøkkelen** (AES)
   - Symmetrisk kryptering er rask nok for kontinuerlig dataoverføring
   - Sesjonsnøkkelen er unik for denne forbindelsen og forkastes når sesjonen avsluttes

**Resultat:** Asymmetrisk kryptering løser nøkkelproblemet (trygg nøkkelutveksling), og symmetrisk kryptering gir hastigheten som trengs for selve dataoverføringen. Sammen gir de det beste fra begge verdener.`,
    },
    {
      id: 'it-1-7-5-text-hashing',
      type: 'text',
      title: 'Hashing – enveiskryptering',
      content: `**Hashing** er en spesiell type kryptografisk funksjon som er fundamentalt forskjellig fra kryptering: hashing er en **enveisprosess** – du kan ikke gjenskape originaldataene fra hash-verdien.

### Egenskaper ved en god hash-funksjon

- **Deterministisk:** Samme input gir alltid eksakt samme hash-verdi
- **Enveis:** Det er praktisk umulig å finne input fra hash-verdien
- **Skredeffekt:** Selv den minste endring i input gir en helt annerledes hash
- **Kollisjonsmotstand:** Det er ekstremt usannsynlig at to ulike input gir samme hash
- **Fast størrelse:** Hash-verdien har alltid samme lengde, uansett størrelse på input

### Eksempel

La oss se SHA-256-hashing i aksjon:

- Input: \`Hei\` → Hash: \`a4c4b3c88e...\` (64 heksadesimale tegn)
- Input: \`hei\` → Hash: \`7f83b1657f...\` (helt annerledes – bare endret stor til liten H)
- Input: En hel bok på 500 sider → Hash: Fortsatt 64 heksadesimale tegn

### Bruksområder for hashing

**1. Passordlagring:**
Ansvarlige nettsteder lagrer aldri passordet ditt i klartekst. I stedet lagrer de en **hash** av passordet. Når du logger inn, hashes passordet du skriver inn og sammenlignes med den lagrede hashen. Hvis de er like, er passordet riktig.

I tillegg brukes et **salt** – en tilfeldig streng som legges til passordet før hashing. Saltet gjør at to brukere med samme passord får ulike hash-verdier, og beskytter mot forhåndsberegnede angrep (rainbow tables).

**2. Filintegritet:**
Når du laster ned en fil, kan du sammenligne filens hash med den oppgitte hash-verdien for å verifisere at filen ikke er endret eller korrupt underveis.

**3. Digitale signaturer:**
I stedet for å signere en hel melding (som kan være stor), beregnes en hash av meldingen, og hashen signeres med den private nøkkelen.

### Vanlige hash-algoritmer

- **SHA-256:** Del av SHA-2-familien, brukes i TLS, Bitcoin og filverifisering
- **SHA-3:** Nyere standard, designet som backup i tilfelle SHA-2 viser svakheter
- **bcrypt:** Spesielt designet for passordlagring, med innebygd salt og justerbar vanskelighetsgrad
- **MD5:** Eldre algoritme som ikke lenger anses som sikker (kollisjoner er funnet), men brukes fortsatt for filsjekksummer`,
    },
    {
      id: 'it-1-7-5-text-autentisering',
      type: 'text',
      title: 'Autentisering og tofaktorautentisering',
      content: `**Autentisering** er prosessen med å verifisere at en bruker er den de utgir seg for å være. Det finnes tre kategorier av autentiseringsfaktorer:

### De tre faktorene

1. **Noe du vet** (kunnskapsfaktor): Passord, PIN-kode, sikkerhetsspørsmål
2. **Noe du har** (besittelsesfaktor): Mobiltelefon, sikkerhetsnøkkel, smartkort, engangskode-brikke
3. **Noe du er** (biometrisk faktor): Fingeravtrykk, ansiktsgjenkjenning, iris-skanning, stemmegjenkjenning

### Enfaktorautentisering

De fleste innlogginger bruker bare én faktor – passord (noe du vet). Problemet er at passord kan stjeles gjennom phishing, datalekkasjer eller brute force-angrep. Hvis passordet kompromitteres, er kontoen ubeskyttet.

### Tofaktorautentisering (2FA)

**2FA** krever to ulike faktorer fra minst to kategorier. Vanlige kombinasjoner:

- **Passord + SMS-kode:** Du logger inn med passord og mottar en engangskode på SMS. Enkelt men SMS kan avlyttes (SIM-swapping).
- **Passord + autentiseringsapp:** Apper som Google Authenticator eller Microsoft Authenticator genererer tidsbegrensede engangskoder (TOTP). Tryggere enn SMS fordi kodene genereres lokalt på telefonen.
- **Passord + fysisk sikkerhetsnøkkel:** En USB-enhet (f.eks. YubiKey) som kobles til datamaskinen. Den sterkeste formen for 2FA fordi nøkkelen ikke kan kopieres digitalt.
- **Passord + biometri:** Fingeravtrykk eller ansiktsgjenkjenning som andre faktor.

### Multifaktorautentisering (MFA)

MFA bruker to eller flere faktorer og er i dag standard for mange tjenester. Norske banker krever for eksempel BankID med passord (noe du vet) og mobil/kodebrikke (noe du har) – en form for 2FA.

### Passordløs autentisering

En ny trend er **passkeys** – passordløs autentisering basert på asymmetrisk kryptering. I stedet for passord bruker du biometri (fingeravtrykk/ansikt) for å frigjøre en privat nøkkel som er lagret sikkert på enheten din. Serveren har bare den offentlige nøkkelen. Passkeys er motstandsdyktige mot phishing fordi den private nøkkelen aldri forlater enheten.`,
    },
    {
      id: 'it-1-7-5-text-sertifikater',
      type: 'text',
      title: 'Digitale sertifikater og PKI',
      content: `Asymmetrisk kryptering løser nøkkelproblemet, men skaper et nytt spørsmål: **Hvordan vet du at den offentlige nøkkelen du mottar virkelig tilhører riktig person?** En angriper kan i teorien gi deg sin egen offentlige nøkkel og utgi seg for å være noen andre. Løsningen er **digitale sertifikater** og **PKI** (Public Key Infrastructure).

### Hva er et digitalt sertifikat?

Et digitalt sertifikat er et elektronisk dokument som binder en offentlig nøkkel til en identitet. Sertifikatet inneholder:

- **Eierens identitet:** Domenenavn, organisasjon, land
- **Eierens offentlige nøkkel**
- **Utsteders identitet:** Sertifikatautoriteten som garanterer sertifikatet
- **Gyldighetstid:** Start- og sluttdato
- **Digital signatur:** Sertifikatautoritetens signatur som bevis på ektheten

### Sertifikatautoriteter (CA)

En **sertifikatautoritet** (Certificate Authority) er en pålitelig tredjepart som verifiserer identiteten til den som ber om et sertifikat, og utsteder signerte digitale sertifikater. Det finnes et hierarki av CA-er:

- **Rot-CA** (Root CA): De mest pålitelige CA-ene, innebygd i nettlesere og operativsystemer
- **Mellomliggende CA:** Utstedet av rot-CA-er, brukes til å utstede sertifikater til nettsider
- **Sluttsertifikater:** Sertifikatene som faktisk brukes av nettsider

### Sertifikater i praksis

Når du besøker en HTTPS-side:

1. Serveren sender sitt digitale sertifikat til nettleseren
2. Nettleseren sjekker at sertifikatet er signert av en pålitelig CA
3. Nettleseren sjekker at sertifikatet ikke er utløpt
4. Nettleseren sjekker at domenenavnet matcher sertifikatet
5. Hvis alt er OK, vises **hengelåsikonet** og forbindelsen krypteres

Hvis noe er galt med sertifikatet, viser nettleseren en advarsel som «Forbindelsen er ikke sikker». Du bør aldri ignorere slike advarsler, spesielt ikke på sider der du oppgir sensitiv informasjon.

### Let's Encrypt

**Let's Encrypt** er en gratis, automatisert sertifikatautoritet som har demokratisert HTTPS. Før Let's Encrypt måtte nettsideeiere betale for sertifikater, noe som førte til at mange små nettsider ikke brukte HTTPS. I dag utsteder Let's Encrypt sertifikater til over 300 millioner nettsider og har vært en viktig faktor i at HTTPS-bruken har økt fra ca. 40 % til over 95 % av all webtrafikk.`,
    },
    {
      id: 'it-1-7-5-note-e2e',
      type: 'note',
      title: 'Ende-til-ende-kryptering',
      content: `**Ende-til-ende-kryptering (E2EE)** betyr at meldinger krypteres på avsenderens enhet og kan bare dekrypteres på mottakerens enhet. Ikke engang tjenesteleverandøren (f.eks. WhatsApp, Signal) kan lese innholdet.

Slik fungerer det forenklet:
1. Hver bruker har et nøkkelpar (offentlig + privat)
2. Meldingen krypteres med mottakerens offentlige nøkkel
3. Bare mottakerens private nøkkel kan dekryptere meldingen
4. Tjenesteleverandørens servere ser bare kryptert data

**Apper med E2EE:** Signal (sterkest anbefalt), WhatsApp, iMessage, Telegram (i «hemmelig chat»-modus).

**Apper uten E2EE:** Vanlig SMS, Facebook Messenger (standard), Slack, e-post (med mindre du bruker PGP).

E2EE er kontroversielt fordi myndigheter argumenterer for at det gjør det vanskeligere å etterforske kriminalitet, mens personvernforkjempere mener det er nødvendig for demokrati og ytringsfrihet.`,
    },
    {
      id: 'it-1-7-5-tip-sjekk-sertifikat',
      type: 'tip',
      title: 'Sjekk et nettsteds sertifikat',
      content: `Du kan selv undersøke digitale sertifikater i nettleseren:

1. Gå til en HTTPS-nettside (f.eks. www.nrk.no)
2. Klikk på **hengelåsikonet** i adressefeltet
3. Klikk på **Sertifikat** eller **Vis sertifikat**
4. Du kan se:
   - Hvem sertifikatet er utstedt til (domenenavnet)
   - Hvem som utstedte det (sertifikatautoriteten)
   - Gyldighetsperioden
   - Den offentlige nøkkelen og krypteringsalgoritmen

Prøv å sammenligne sertifikatene til ulike nettsider – du vil se at de bruker forskjellige CA-er og ulike nøkkellengder.`,
    },
    {
      id: 'it-1-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it1-7-5-ex-1',
        number: '7.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedforskjellen mellom symmetrisk og asymmetrisk kryptering?',
        options: [
          { id: 'a', text: 'Symmetrisk kryptering er sikrere enn asymmetrisk', isCorrect: false, feedback: 'Begge kan være svært sikre. Forskjellen ligger i antall nøkler, ikke sikkerhetsnivå.' },
          { id: 'b', text: 'Symmetrisk kryptering bruker samme nøkkel for kryptering og dekryptering, mens asymmetrisk bruker to ulike nøkler', isCorrect: true },
          { id: 'c', text: 'Asymmetrisk kryptering er raskere enn symmetrisk', isCorrect: false, feedback: 'Det er omvendt – symmetrisk kryptering er ca. 1000 ganger raskere.' },
          { id: 'd', text: 'Symmetrisk kryptering brukes bare for tekst og asymmetrisk for bilder', isCorrect: false, feedback: 'Begge kan kryptere alle typer data.' },
        ],
        solution: 'Symmetrisk kryptering bruker én nøkkel som deles mellom avsender og mottaker. Asymmetrisk kryptering bruker to nøkler – en offentlig (kan deles fritt) og en privat (holdes hemmelig). Symmetrisk er raskere, men asymmetrisk løser problemet med trygg nøkkeldistribusjon.',
      },
    },
    {
      id: 'it-1-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it1-7-5-ex-2',
        number: '7.5.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hashing?',
        options: [
          { id: 'a', text: 'Det samme som kryptering – å gjøre data uleselig', isCorrect: false, feedback: 'Hashing er en enveisprosess – i motsetning til kryptering kan du ikke gjenskape originaldataene fra hashen.' },
          { id: 'b', text: 'En enveisfunksjon som lager en unik «fingeravtrykk»-streng av data, som ikke kan reverseres', isCorrect: true },
          { id: 'c', text: 'En metode for å komprimere filer', isCorrect: false, feedback: 'Hashing produserer en fast-lengde streng, ikke en komprimert versjon av dataene.' },
          { id: 'd', text: 'En type passord som er ekstra sterkt', isCorrect: false, feedback: 'Hashing er en kryptografisk funksjon, ikke en type passord.' },
        ],
        solution: 'Hashing er en enveiskryptografisk funksjon som tar inn data av vilkårlig størrelse og produserer en fast-lengde streng (hash-verdi). Samme input gir alltid samme hash, men det er umulig å finne input fra hash-verdien. Hashing brukes til passordlagring, filverifisering og digitale signaturer.',
      },
    },
    {
      id: 'it-1-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it1-7-5-ex-3',
        number: '7.5.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor lagrer seriøse nettsteder passord som hash-verdier i stedet for i klartekst?',
        options: [
          { id: 'a', text: 'For å spare lagringsplass – hash-verdier er mindre enn passord', isCorrect: false, feedback: 'En SHA-256-hash er 64 tegn lang, ofte lengre enn selve passordet. Poenget er sikkerhet, ikke plass.' },
          { id: 'b', text: 'Fordi hashing gjør passordet raskere å verifisere', isCorrect: false, feedback: 'Passordhashing (med bcrypt) er faktisk bevisst langsom for å vanskeliggjøre angrep.' },
          { id: 'c', text: 'Fordi hash-verdien ikke kan reverseres – selv ved en datalekkasje kan ikke angriperen finne passordene', isCorrect: true },
          { id: 'd', text: 'Fordi det er lovpålagt å lagre passord som hash', isCorrect: false, feedback: 'Selv om god praksis og GDPR tilsier det, er hovedgrunnen den tekniske sikkerheten.' },
        ],
        solution: 'Hvis passord lagres i klartekst og databasen lekkes, får angriperen umiddelbart tilgang til alle passord. Med hashing lagres bare hash-verdien, som ikke kan reverseres. Ved innlogging hashes passordet brukeren skriver inn og sammenlignes med den lagrede hashen. Selv ved en lekkasje må angriperen gjette hvert passord – noe som er ekstremt tidkrevende med sterke passord og algoritmer som bcrypt.',
      },
    },
    {
      id: 'it-1-7-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it1-7-5-ex-4',
        number: '7.5.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av disse er et eksempel på tofaktorautentisering (2FA)?',
        options: [
          { id: 'a', text: 'Å logge inn med brukernavn og passord', isCorrect: false, feedback: 'Brukernavn og passord er begge «noe du vet» – kun én faktor.' },
          { id: 'b', text: 'Å logge inn med passord og deretter oppgi en kode fra en autentiseringsapp på mobilen', isCorrect: true },
          { id: 'c', text: 'Å bruke to forskjellige passord etter hverandre', isCorrect: false, feedback: 'To passord er fortsatt bare én type faktor (noe du vet).' },
          { id: 'd', text: 'Å logge inn med e-post i stedet for brukernavn', isCorrect: false, feedback: 'E-post og brukernavn er begge identifikatorer, ikke autentiseringsfaktorer.' },
        ],
        solution: 'Tofaktorautentisering krever faktorer fra to ulike kategorier. Passord (noe du vet) + kode fra autentiseringsapp på mobil (noe du har) er ekte 2FA. To passord, eller brukernavn + passord, er bare én faktor (noe du vet). De tre kategoriene er: noe du vet, noe du har, og noe du er (biometri).',
      },
    },
    {
      id: 'it-1-7-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it1-7-5-ex-5',
        number: '7.5.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvordan HTTPS bruker hybridkryptering for å sikre kommunikasjonen mellom nettleser og server. Beskriv stegene i TLS-handshaken og forklar hvorfor man bruker både asymmetrisk og symmetrisk kryptering.',
        solution: `HTTPS bruker hybridkryptering – en kombinasjon av asymmetrisk og symmetrisk kryptering:

**TLS-handshake (asymmetrisk fase):**
1. Nettleseren kobler seg til serveren og sender en «Client Hello» med støttede krypteringsalgoritmer
2. Serveren svarer med «Server Hello» og sender sitt digitale sertifikat som inneholder serverens offentlige nøkkel
3. Nettleseren verifiserer sertifikatet mot pålitelige sertifikatautoriteter
4. Nettleseren og serveren bruker asymmetrisk kryptering (Diffie-Hellman-nøkkelutveksling) for å forhandle frem en felles sesjonsnøkkel. Den private nøkkelen forlater aldri serveren.

**Dataoverføring (symmetrisk fase):**
5. All videre kommunikasjon krypteres med sesjonsnøkkelen ved hjelp av AES (symmetrisk kryptering)
6. Sesjonsnøkkelen er unik for denne forbindelsen og forkastes når sesjonen avsluttes

**Hvorfor begge typer:** Asymmetrisk kryptering er nødvendig for trygg nøkkelutveksling (begge parter kan forhandle frem en felles nøkkel uten å sende den over nettverket), men den er for langsom for kontinuerlig dataoverføring. Symmetrisk kryptering er rask nok for dataoverføring, men krever en felles nøkkel som må utveksles trygt. Hybridkryptering kombinerer det beste fra begge: trygg nøkkelutveksling + rask datakryptering.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-1-7-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it1-7-5-ex-6',
        number: '7.5.6',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva er rollen til en sertifikatautoritet (CA) i HTTPS?',
        options: [
          { id: 'a', text: 'CA-en krypterer all trafikk mellom nettleseren og serveren', isCorrect: false, feedback: 'CA-en verifiserer identitet og utsteder sertifikater – selve krypteringen gjøres av nettleseren og serveren.' },
          { id: 'b', text: 'CA-en lagrer passordene til alle brukere av nettsiden', isCorrect: false, feedback: 'CA-en har ingenting med brukerpassord å gjøre.' },
          { id: 'c', text: 'CA-en verifiserer serverens identitet og utsteder et signert digitalt sertifikat som nettleseren stoler på', isCorrect: true },
          { id: 'd', text: 'CA-en blokkerer DDoS-angrep mot nettsiden', isCorrect: false, feedback: 'DDoS-beskyttelse er en annen tjeneste, ikke relatert til sertifikatutstedelse.' },
        ],
        solution: 'En sertifikatautoritet (CA) fungerer som en pålitelig tredjepart i PKI-systemet. CA-en verifiserer identiteten til den som ber om et sertifikat (f.eks. at nrk.no virkelig eies av NRK), og utsteder et digitalt sertifikat signert med CA-ens egen private nøkkel. Nettlesere har innebygde lister over pålitelige CA-er, slik at de kan verifisere sertifikatene automatisk.',
      },
    },
    {
      id: 'it-1-7-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it1-7-5-ex-7',
        number: '7.5.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign tre ulike metoder for tofaktorautentisering: SMS-kode, autentiseringsapp (TOTP) og fysisk sikkerhetsnøkkel (f.eks. YubiKey). Vurder sikkerhet, brukervennlighet og praktiske forhold for hver metode. Hvilken ville du anbefalt for en bedrift, og hvorfor?',
        solution: `**SMS-kode:**
- Sikkerhet: Middels. Sårbar for SIM-swapping (angriper overtaler mobiloperatøren til å overføre nummeret ditt) og SS7-angrep (avlytting av mobilnettet). Koden sendes i klartekst over mobilnettet.
- Brukervennlighet: Høy. De fleste har mobiltelefon, ingen ekstra app nødvendig.
- Praktisk: Fungerer ikke uten mobildekning. Krever at telefonnummer er registrert.
- Konklusjon: Bedre enn kun passord, men den svakeste 2FA-metoden.

**Autentiseringsapp (TOTP):**
- Sikkerhet: Høy. Koder genereres lokalt på enheten basert på en delt hemmelighet og tid. Ikke sårbar for SIM-swapping eller nettverksavlytting. Tidsbaserte koder er gyldige i bare 30 sekunder.
- Brukervennlighet: God. Krever installasjon av en app (Google Authenticator, Authy), men deretter enkel bruk.
- Praktisk: Fungerer offline (ingen nettverkstilgang nødvendig). Utfordring: Mister du telefonen, mister du tilgangen (med mindre du har backupkoder).
- Konklusjon: God balanse mellom sikkerhet og brukervennlighet.

**Fysisk sikkerhetsnøkkel (YubiKey):**
- Sikkerhet: Svært høy. Phishing-resistent – nøkkelen verifiserer at forespørselen kommer fra riktig nettside. Den private nøkkelen kan ikke kopieres fra enheten. Krever fysisk tilgang.
- Brukervennlighet: Middels. Du må huske å ha med deg nøkkelen. Plug-and-touch er enkelt i bruk.
- Praktisk: Koster penger (ca. 500-800 kr). Bør ha minst to (én backup). Ikke alle tjenester støtter det.
- Konklusjon: Den sikreste metoden, men minst praktisk.

**Anbefaling for en bedrift:** For en bedrift ville jeg anbefalt autentiseringsapp (TOTP) som minimum for alle ansatte, og fysiske sikkerhetsnøkler for ansatte med tilgang til sensitive systemer (IT-administratorer, økonomi, ledelse). SMS-kode bør unngås for bedriftskritiske systemer. Bedriften bør også ha klare rutiner for backup-tilgang ved tapte enheter.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-1-7-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'it1-7-5-ex-8',
        number: '7.5.8',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva er ende-til-ende-kryptering (E2EE), og hvorfor kan ikke tjenesteleverandøren lese meldingene dine?',
        options: [
          { id: 'a', text: 'Fordi meldingene slettes fra serveren etter at de er levert', isCorrect: false, feedback: 'Sletting beskytter ikke mot avlytting underveis. E2EE handler om kryptering, ikke sletting.' },
          { id: 'b', text: 'Fordi meldingene krypteres med mottakerens offentlige nøkkel på avsenders enhet, og bare mottakerens private nøkkel kan dekryptere dem', isCorrect: true },
          { id: 'c', text: 'Fordi leverandøren har lovet i sine vilkår å ikke lese meldingene', isCorrect: false, feedback: 'E2EE gir matematisk garanti – ikke bare et løfte. Leverandøren kan teknisk sett ikke lese dem.' },
          { id: 'd', text: 'Fordi meldingene sendes via en annen rute som unngår leverandørens servere', isCorrect: false, feedback: 'Meldingene passerer fortsatt leverandørens servere, men de er kryptert slik at serveren ikke kan lese innholdet.' },
        ],
        solution: 'I ende-til-ende-kryptering krypteres meldingen på avsenderens enhet med mottakerens offentlige nøkkel. Bare mottakerens private nøkkel – som er lagret kun på mottakerens enhet – kan dekryptere meldingen. Meldingen passerer gjennom tjenesteleverandørens servere, men serveren ser bare kryptert data den ikke kan dekryptere fordi den ikke har den private nøkkelen. Dette gir matematisk – ikke bare kontraktsmessig – garanti for privat kommunikasjon.',
      },
    },
  ],
  exercises: [],
  prevChapter: 'it-1-7-4',
  nextChapter: 'it-1-8-1',
};

// ============================================================================
// Eksport av alle kapitler i Seksjon 7
// ============================================================================

export const IT_1_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IT_1_7_1, CHAPTER_IT_1_7_2, CHAPTER_IT_1_7_3, CHAPTER_IT_1_7_4, CHAPTER_IT_1_7_5,
];
