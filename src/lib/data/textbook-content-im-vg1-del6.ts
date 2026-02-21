/* eslint-disable */
// @ts-nocheck
/**
 * Informasjonsteknologi og medieproduksjon VG1 - Del 6: Nettverk, sikkerhet og personvern
 *
 * Kapittel 6.1-6.6: Nettverk, sikkerhet og personvern
 * Dekker LK20 kompetansemål for nettverksteknologi, protokoller, trusler, sikkerhet, personvern og digital etikk
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1: Grunnleggende nettverksteknologi
// ============================================================================

export const CHAPTER_IM_VG1_6_1: TextbookChapter = {
  id: 'im-vg1-6-1',
  courseId: 'im-vg1',
  chapterNumber: '6.1',
  title: 'Grunnleggende nettverksteknologi',
  description: 'Forstå hvordan datanettverk er bygd opp med rutere, svitsjer, kabler og trådløse forbindelser, og lær om nettverkstopologier.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive, utforske og konfigurere datanettverk med egne subnett',
  ],
  content: [
    {
      id: 'im-6-1-intro',
      type: 'text',
      content: `## Grunnleggende nettverksteknologi

Datanettverk gjør det mulig for datamaskiner, telefoner, skrivere og andre enheter å kommunisere med hverandre. Fra det lille hjemmenettverket til det globale internett - alt bygger på de samme grunnleggende prinsippene. Å forstå nettverksteknologi er avgjørende for alle som jobber med IT.

I dette kapittelet skal du lære:
- Hva et datanettverk er og ulike nettverkstyper
- Nettverkskomponenter: rutere, svitsjer, aksesspunkter og kabler
- Nettverkstopologier og hvordan nettverk struktureres
- IP-adresser og DNS`,
    },
    {
      id: 'im-6-1-def-1',
      type: 'definition',
      title: 'Datanettverk',
      content: `Et **datanettverk** er to eller flere enheter som er koblet sammen for å dele data og ressurser. Enhetene kommuniserer gjennom kabler, trådløse forbindelser eller en kombinasjon av begge.`,
    },
    {
      id: 'im-6-1-text-1',
      type: 'text',
      content: `### Nettverkstyper

**LAN (Local Area Network)**: Lokalt nettverk som dekker et begrenset område, som et hjem, et kontor eller en skole. Enheter er koblet med Ethernet-kabler eller Wi-Fi.

**WLAN (Wireless LAN)**: Et trådløst lokalnettverk som bruker Wi-Fi-teknologi. Enheter kobler seg til et aksesspunkt (trådløs ruter) uten kabler.

**WAN (Wide Area Network)**: Nettverk som dekker et stort geografisk område. Internett er verdens største WAN. Bedrifter bruker WAN for å koble sammen kontorer i ulike byer eller land.

**MAN (Metropolitan Area Network)**: Dekker en by eller et større område, ofte driftet av teleselskaper.

**VPN (Virtual Private Network)**: En kryptert tunnel gjennom internett som gjør at man kan koble seg sikkert til et privat nettverk fra hvor som helst.`,
    },
    {
      id: 'im-6-1-text-2',
      type: 'text',
      content: `### Nettverkskomponenter

**Ruter (router)**: Kobler sammen ulike nettverk og dirigerer trafikk mellom dem. Hjemmeruteren din kobler ditt lokale nettverk til internett. Den har en offentlig IP-adresse mot internett og tildeler private IP-adresser til enhetene i hjemmet.

**Svitsj (switch)**: Kobler sammen enheter innenfor et nettverk. Den sender data direkte til riktig enhet basert på MAC-adresser, noe som er effektivt og raskt.

**Aksesspunkt (access point)**: Gir trådløs tilgang til et kablet nettverk. Mange hjemmerutere har innebygd aksesspunkt.

**Nettverkskabler:**
- **Ethernet (Cat5e/Cat6)**: Standard kabel for kablede nettverk. Cat6 støtter hastigheter opp til 10 Gbps.
- **Fiberoptisk kabel**: Overfører data med lys. Raskest, brukes til lange avstander og kjerneinfrastruktur.

### IP-adresser og DNS

**IP-adresse**: En unik adresse som identifiserer en enhet i nettverket.
- **IPv4**: 32-bit adresse, f.eks. 192.168.1.1. Begrenset antall adresser.
- **IPv6**: 128-bit adresse, f.eks. 2001:0db8:85a3::1. Nesten uendelig antall adresser.
- **Private adresser**: Brukes internt (10.x.x.x, 172.16-31.x.x, 192.168.x.x).
- **Offentlige adresser**: Synlige på internett.

**DNS (Domain Name System)**: Oversetter domenenavn (f.eks. www.nrk.no) til IP-adresser. Fungerer som internettets telefonkatalog.`,
    },
    {
      id: 'im-6-1-example-1',
      type: 'example',
      title: 'Hjemmenettverk',
      content: `Et typisk hjemmenettverk:

1. **Internettilkobling**: Fiberkabel fra leverandøren kobles til en modem/ruter.
2. **Ruter**: Tildeler private IP-adresser (192.168.1.x) til alle enheter. Har innebygd Wi-Fi aksesspunkt.
3. **Trådløse enheter**: Mobiler, nettbrett og laptoper kobles til via Wi-Fi.
4. **Kablede enheter**: Stasjonær PC, smart-TV og spillkonsoll kobles med Ethernet-kabel for stabil forbindelse.
5. **DNS**: Når du skriver www.youtube.com, sender ruteren en DNS-forespørsel for å finne IP-adressen, og dirigerer deretter trafikken.

Alle enhetene deler den ene offentlige IP-adressen mot internett, men har hver sin private adresse internt.`,
    },
    {
      id: 'im-6-1-summary',
      type: 'text',
      content: `## Oppsummering

- Datanettverk kobler datamaskiner sammen for å dele ressurser og kommunisere.
- LAN er lokale nettverk, WAN er vidstrakte nettverk, og WLAN er trådløst.
- Rutere videresender trafikk mellom nettverk, svitsjer kobler enheter i samme nettverk.
- IP-adresser identifiserer enheter på nettverket, DNS oversetter domenenavn til IP-adresser.
- Nettverkstopologier beskriver den fysiske og logiske oppbygningen av et nettverk.
- Forståelse av nettverksteknologi er viktig for feilsøking og sikkerhet.`,
    },
    {
      id: 'im-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-6-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom LAN og WAN?',
        options: [
          'LAN er trådløst, WAN er kablet',
          'LAN dekker et begrenset område, WAN dekker et stort geografisk område',
          'WAN er raskere enn LAN',
          'LAN brukes bare på skoler',
        ],
        correctAnswer: 1,
        solution: 'LAN (Local Area Network) dekker et begrenset område som et hjem eller kontor. WAN (Wide Area Network) dekker store geografiske områder og kan spenne over byer, land eller hele verden. Internett er verdens største WAN.',
      },
    },
    {
      id: 'im-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-6-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva DNS er og hvorfor det er viktig for internett.',
        solution: 'DNS (Domain Name System) er et system som oversetter domenenavn som www.google.com til IP-adresser som 142.250.74.46. Det er viktig fordi mennesker husker navn lettere enn tall. Uten DNS måtte vi huske IP-adressen til hver nettside vi ville besøke. DNS fungerer som internettets telefonkatalog - du slår opp navnet, og systemet finner nummeret.',
      },
    },
    {
      id: 'im-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-6-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva gjør en svitsj (switch) i et nettverk?',
        options: [
          'Kobler nettverket til internett',
          'Kobler sammen enheter innenfor et nettverk og sender data direkte til riktig enhet',
          'Krypterer all nettverkstrafikk',
          'Gir trådløst internett',
        ],
        correctAnswer: 1,
        solution: 'En svitsj kobler sammen enheter innenfor et nettverk og sender data direkte til riktig mottaker basert på MAC-adresser. Dette er mer effektivt enn en hub, som sender data til alle enheter.',
      },
    },
    {
      id: 'im-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-6-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Tegn eller beskriv et hjemmenettverk med internettilkobling, ruter, en kablet PC, en trådløs laptop og en mobil. Forklar hvordan enhetene kommuniserer.',
        solution: 'Nettverket: Internett kommer inn via fiberkabel til en ruter. Ruteren har en offentlig IP-adresse (f.eks. 84.208.x.x) mot internett. Den kablete PCen kobles med Ethernet-kabel og får privat IP 192.168.1.2. Laptopen og mobilen kobler seg til ruterens Wi-Fi og får IP 192.168.1.3 og 192.168.1.4. Når laptopen vil besøke en nettside, sender den forespørselen til ruteren, som videresender den til internett. Svaret kommer tilbake til ruteren, som sender det til riktig enhet basert på den private IP-adressen.',
      },
    },
    {
      id: 'im-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-6-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hvilken IP-adresse er en privat adresse?',
        options: [
          '84.208.45.120',
          '192.168.1.100',
          '8.8.8.8',
          '142.250.74.46',
        ],
        correctAnswer: 1,
        solution: '192.168.1.100 er en privat IP-adresse. Private adresser (10.x.x.x, 172.16-31.x.x, 192.168.x.x) brukes internt i lokale nettverk og er ikke synlige på internett.',
      },
    },
    {
      id: 'im-6-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-6-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Forklar forskjellen mellom en ruter og en svitsj. Beskriv når du ville brukt hver av dem.',
        solution: 'En ruter kobler sammen ulike nettverk og dirigerer trafikk mellom dem. Den brukes for å koble et lokalt nettverk til internett, og den håndterer IP-adresser og nettverksadresseoversetning (NAT). En svitsj kobler sammen enheter innenfor et og samme nettverk og sender data effektivt mellom dem basert på MAC-adresser. Bruk: Ruteren brukes mellom nettverk (hjemmenett til internett). Svitsjen brukes innenfor nettverket (koble sammen flere PCer, skrivere og servere i et kontornettverk).',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'LAN', definition: 'Local Area Network - lokalt nettverk som dekker et begrenset område.' },
    { term: 'WAN', definition: 'Wide Area Network - nettverk som dekker et stort geografisk område.' },
    { term: 'Ruter', definition: 'Enhet som kobler sammen ulike nettverk og dirigerer trafikk mellom dem.' },
    { term: 'Svitsj', definition: 'Enhet som kobler sammen enheter i et nettverk og sender data til riktig mottaker.' },
    { term: 'IP-adresse', definition: 'Unik adresse som identifiserer en enhet i et nettverk.' },
    { term: 'DNS', definition: 'Domain Name System - oversetter domenenavn til IP-adresser.' },
  ],
};

// ============================================================================
// Kapittel 6.2: Internettprotokoller og kommunikasjon
// ============================================================================

export const CHAPTER_IM_VG1_6_2: TextbookChapter = {
  id: 'im-vg1-6-2',
  courseId: 'im-vg1',
  chapterNumber: '6.2',
  title: 'Internettprotokoller og kommunikasjon',
  description: 'Lær om TCP/IP-modellen, vanlige protokoller og hvordan data overføres mellom enheter på internett.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive, utforske og konfigurere datanettverk med egne subnett',
    'gjøre rede for hvordan internett fungerer, og hvordan det blir brukt til kommunikasjon og lagring',
  ],
  content: [
    {
      id: 'im-6-2-intro',
      type: 'text',
      content: `## Internettprotokoller og kommunikasjon

For at datamaskiner skal kunne snakke med hverandre, trenger de et felles språk - en protokoll. Protokoller er sett med regler som bestemmer hvordan data formateres, sendes, mottas og bekreftes. Internett er bygd på en stabel av protokoller som samarbeider for å levere data pålitelig over hele verden.

I dette kapittelet skal du lære:
- TCP/IP-modellen og dens lag
- Vanlige internettprotokoller (HTTP, HTTPS, FTP, SMTP)
- Hvordan data deles opp i pakker og sendes over nettet
- Subnett og nettverksmasker`,
    },
    {
      id: 'im-6-2-def-1',
      type: 'definition',
      title: 'Protokoll',
      content: `En **nettverksprotokoll** er et standardisert sett med regler som bestemmer hvordan data formateres, overføres og mottas mellom enheter i et nettverk. Protokoller sørger for at ulike enheter og systemer kan kommunisere med hverandre.`,
    },
    {
      id: 'im-6-2-text-1',
      type: 'text',
      content: `### TCP/IP-modellen

TCP/IP-modellen har fire lag som beskriver hvordan data behandles på veien fra sender til mottaker:

**4. Applikasjonslaget**: Protokoller som brukeren samhandler med direkte.
- HTTP/HTTPS: Nettsider
- SMTP/IMAP: E-post
- FTP: Filoverføring
- DNS: Navneoppslag

**3. Transportlaget**: Sikrer at data kommer frem riktig.
- **TCP (Transmission Control Protocol)**: Pålitelig, ordnet levering. Oppretter forbindelse, bekrefter mottak, sender på nytt ved tap. Brukes for nettsider, e-post, filoverføring.
- **UDP (User Datagram Protocol)**: Rask, men upålitelig. Ingen bekreftelse eller rekkefølge. Brukes for streaming, spill, videosamtaler.

**2. Nettverkslaget (Internet-laget)**: Adressering og ruting.
- **IP (Internet Protocol)**: Adresserer pakker med avsender- og mottaker-IP.
- Rutere opererer på dette laget.

**1. Nettverkstilgangslaget**: Fysisk overføring av data.
- Ethernet, Wi-Fi, fiberoptikk
- MAC-adresser brukes for lokal levering`,
    },
    {
      id: 'im-6-2-text-2',
      type: 'text',
      content: `### Vanlige protokoller

**HTTP (HyperText Transfer Protocol)**: Grunnlaget for nettsurfing. Sender forespørsler om nettsider og mottar svar fra webservere. Ukryptert.

**HTTPS (HTTP Secure)**: Kryptert versjon av HTTP som bruker SSL/TLS. Beskytter data i transport. Standard for alle nettsider i dag (hengelåsikonet i nettleseren).

**FTP (File Transfer Protocol)**: For overføring av filer mellom datamaskiner. Brukes ofte for å laste opp filer til webservere.

**SMTP (Simple Mail Transfer Protocol)**: Sender e-post fra klient til server og mellom servere.

**IMAP/POP3**: Henter e-post fra server til klient. IMAP synkroniserer e-post på tvers av enheter, POP3 laster ned og sletter fra serveren.

### Pakkesvitsjing

Data på internett sendes ikke som en sammenhengende strøm, men deles opp i **pakker**. Hver pakke inneholder:
- Avsenderadresse og mottakeradresse
- Sekvensnummer (for å sette sammen i riktig rekkefølge)
- Selve dataene (et fragment av filen, nettsiden osv.)
- Feilkontrolldata

Pakkene kan ta ulike veier gjennom nettet og settes sammen i riktig rekkefølge hos mottakeren.`,
    },
    {
      id: 'im-6-2-text-3',
      type: 'text',
      content: `### Subnett og nettverksmasker

Et **subnett** er en logisk inndeling av et nettverk. Subnett brukes til å organisere nettverk og kontrollere trafikk.

**Nettverksmaske** (subnet mask) bestemmer hvilken del av IP-adressen som er nettverksadressen og hvilken som er enhetsadressen.

**Eksempel med 255.255.255.0 (/24):**
- IP-adresse: 192.168.1.50
- Nettverksmaske: 255.255.255.0
- Nettverksadresse: 192.168.1.0 (de tre første oktettene)
- Enhetsadresse: .50 (siste oktett)
- Mulige enheter: 254 (1-254, der .0 er nettverksadressen og .255 er broadcast)

**Hvorfor subnett?**
- Organiserer store nettverk i mindre, håndterbare deler
- Begrenser nettverkstrafikk til relevante segmenter
- Forbedrer sikkerhet ved å isolere deler av nettverket
- Gjør feilsøking enklere`,
    },
    {
      id: 'im-6-2-example-1',
      type: 'example',
      title: 'Hva skjer når du besøker en nettside?',
      content: `Når du skriver www.nrk.no i nettleseren, skjer følgende:

1. **DNS-oppslag**: Nettleseren spør DNS-serveren om IP-adressen til www.nrk.no.
2. **TCP-forbindelse**: Nettleseren oppretter en TCP-forbindelse (treveis håndtrykk) med NRKs webserver.
3. **HTTPS-forespørsel**: Nettleseren sender en kryptert HTTPS GET-forespørsel om nettsiden.
4. **Server behandler**: NRKs server finner riktig innhold og sender det tilbake.
5. **Pakker**: Svaret deles opp i pakker som sendes over ulike ruter gjennom internett.
6. **Sammensetting**: Nettleseren mottar pakkene, setter dem sammen i riktig rekkefølge.
7. **Visning**: Nettleseren tolker HTML, CSS og JavaScript og viser nettsiden.

Alt dette skjer på brøkdelen av et sekund.`,
    },
    {
      id: 'im-6-2-summary',
      type: 'text',
      content: `## Oppsummering

- TCP/IP-modellen har fire lag: applikasjon, transport, nettverk og nettverkstilgang.
- TCP sikrer pålitelig levering, UDP er raskere men uten garanti.
- HTTP/HTTPS brukes for nettsider, SMTP/IMAP for e-post, FTP for filoverføring.
- Data sendes som pakker som kan ta ulike veier gjennom nettet (pakkesvitsjing).
- Subnett og nettverksmasker organiserer nettverk i mindre, håndterbare deler.
- Forståelse av protokoller er grunnlaget for å forstå hvordan internett fungerer.`,
    },
    {
      id: 'im-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-6-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom TCP og UDP?',
        options: [
          'TCP er trådløst, UDP er kablet',
          'TCP sikrer pålitelig levering med bekreftelse, UDP er raskere men uten garanti',
          'UDP er sikrere enn TCP',
          'TCP brukes bare for e-post',
        ],
        correctAnswer: 1,
        solution: 'TCP (Transmission Control Protocol) sikrer pålitelig levering ved å opprette forbindelse, bekrefte mottak og sende pakker på nytt ved tap. UDP (User Datagram Protocol) er raskere fordi det ikke bekrefter mottak, men pakkene kan gå tapt. TCP passer for nettsider og filer, UDP for streaming og spill.',
      },
    },
    {
      id: 'im-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-6-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv hva som skjer trinn for trinn når du sender en e-post til en venn.',
        solution: '1) Du skriver e-posten i en e-postklient og trykker send. 2) E-postklienten bruker SMTP for å sende e-posten til din e-postserver. 3) Din server slår opp mottakerens e-postserver via DNS. 4) E-posten sendes via SMTP mellom serverne. Data deles opp i pakker som rutes gjennom internett via TCP/IP. 5) E-posten lagres på mottakerens e-postserver. 6) Vennen din åpner e-postklienten, som bruker IMAP (eller POP3) for å hente e-posten fra serveren. 7) E-posten vises i innboksen.',
      },
    },
    {
      id: 'im-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-6-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva betyr HTTPS?',
        options: [
          'HyperText Transfer Protocol Simple',
          'HyperText Transfer Protocol Secure - kryptert versjon av HTTP',
          'High Transfer Protocol System',
          'Host Transfer Protocol Service',
        ],
        correctAnswer: 1,
        solution: 'HTTPS står for HyperText Transfer Protocol Secure. Det er en kryptert versjon av HTTP som bruker SSL/TLS for å beskytte dataene som sendes mellom nettleseren og webserveren. Hengelåsikonet i nettleseren indikerer HTTPS.',
      },
    },
    {
      id: 'im-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-6-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hva pakkesvitsjing er, og hvorfor internett bruker denne metoden i stedet for å sende data som en sammenhengende strøm.',
        solution: 'Pakkesvitsjing er metoden der data deles opp i små pakker som sendes uavhengig gjennom nettet. Hver pakke kan ta ulike veier, og de settes sammen i riktig rekkefølge hos mottakeren. Fordeler: 1) Effektiv utnyttelse av nettverksressurser - mange brukere deler samme forbindelse. 2) Robusthet - hvis en rute svikter, kan pakkene finne alternative veier. 3) Skalerbarhet - fungerer med milliarder av samtidige brukere. En sammenhengende strøm ville kreve en dedikert linje mellom sender og mottaker, noe som ville vært ekstremt ineffektivt og kostbart.',
      },
    },
    {
      id: 'im-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-6-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva gjør en nettverksmaske?',
        options: [
          'Beskytter nettverket mot virus',
          'Bestemmer hvilken del av IP-adressen som er nettverksadresse og enhetsadresse',
          'Krypterer nettverkstrafikken',
          'Øker hastigheten på nettverket',
        ],
        correctAnswer: 1,
        solution: 'En nettverksmaske bestemmer hvilken del av IP-adressen som identifiserer nettverket og hvilken del som identifiserer den enkelte enheten. For eksempel med maske 255.255.255.0 er de tre første oktettene nettverksadressen og den siste er enhetsadressen.',
      },
    },
    {
      id: 'im-6-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-6-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Nevn fire lag i TCP/IP-modellen og beskriv kort hva hvert lag gjør. Gi et eksempel på en protokoll for hvert lag.',
        solution: '1) Applikasjonslaget: Protokoller som brukeren interagerer med direkte. Eksempel: HTTP for nettsider. 2) Transportlaget: Sikrer at data kommer frem riktig mellom applikasjoner. Eksempel: TCP for pålitelig levering. 3) Nettverkslaget (Internet-laget): Adresserer pakker og bestemmer ruten gjennom nettet. Eksempel: IP for adressering. 4) Nettverkstilgangslaget: Fysisk overføring av data over kabler eller trådløst. Eksempel: Ethernet for kablet nettverkskommunikasjon.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'TCP', definition: 'Transmission Control Protocol - sikrer pålitelig, ordnet levering av data.' },
    { term: 'UDP', definition: 'User Datagram Protocol - rask overføring uten leveringsgaranti.' },
    { term: 'HTTP/HTTPS', definition: 'Protokoll for nettsider, HTTPS er den krypterte versjonen.' },
    { term: 'Pakkesvitsjing', definition: 'Metode der data deles i pakker som sendes uavhengig gjennom nettet.' },
    { term: 'Subnett', definition: 'Logisk inndeling av et nettverk i mindre segmenter.' },
    { term: 'Nettverksmaske', definition: 'Bestemmer hvilken del av IP-adressen er nettverks- vs. enhetsadresse.' },
  ],
};

// ============================================================================
// Kapittel 6.3: Digitale trusler og sårbarhet
// ============================================================================

export const CHAPTER_IM_VG1_6_3: TextbookChapter = {
  id: 'im-vg1-6-3',
  courseId: 'im-vg1',
  chapterNumber: '6.3',
  title: 'Digitale trusler og sårbarhet',
  description: 'Utforsk ulike typer digitale trusler som virus, phishing og ransomware, og forstå sårbarheter i digitale systemer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og beskrive digitale trusler, verdier og sårbarheter i samfunnet',
  ],
  content: [
    {
      id: 'im-6-3-intro',
      type: 'text',
      content: `## Digitale trusler og sårbarhet

Jo mer avhengige vi blir av digitale systemer, jo mer sårbare blir vi for angrep. Cyberkriminalitet koster samfunnet milliarder hvert år, og trusselbildet endrer seg stadig. For å beskytte oss selv og systemene vi bruker, må vi forstå hvilke trusler som finnes og hvordan de fungerer.

I dette kapittelet skal du lære:
- Ulike typer skadevare: virus, trojanere, ransomware
- Sosial manipulering og phishing
- DDoS-angrep og andre nettverksangrep
- Hvordan sårbarheter oppstår og utnyttes`,
    },
    {
      id: 'im-6-3-text-1',
      type: 'text',
      content: `### Skadevare (malware)

**Virus**: Et program som fester seg til andre filer og sprer seg når filen kjøres. Kan ødelegge data, bremse systemet eller gi uvedkommende tilgang.

**Trojaner**: Et program som utgir seg for å være nyttig, men inneholder skjult skadelig kode. Oppkalt etter den trojanske hesten. Kan gi angriperen fjernkontroll over maskinen din.

**Ransomware (løsepengevirus)**: Krypterer filene dine og krever betaling for å gi deg tilgang igjen. Et av de mest alvorlige trusselbildene i dag. Rammer både privatpersoner, bedrifter og offentlige institusjoner.

**Spyware**: Overvåker aktiviteten din uten ditt samtykke. Kan registrere tastetrykk, ta skjermbilder og samle passord.

**Orm (worm)**: Sprer seg selv over nettverk uten behov for å feste seg til andre filer. Kan overbelaste nettverk og systemer.

**Adware**: Viser uønskede annonser. Ofte buntet med gratis programvare.`,
    },
    {
      id: 'im-6-3-text-2',
      type: 'text',
      content: `### Sosial manipulering

Sosial manipulering (social engineering) utnytter menneskelig tillit og nysgjerrighet i stedet for tekniske svakheter.

**Phishing**: Falske e-poster eller meldinger som ser ut som de kommer fra en pålitelig avsender. Formålet er å lure deg til å gi fra deg passord, kredittkortinformasjon eller klikke på skadelige lenker.

**Spear phishing**: Målrettet phishing rettet mot en bestemt person eller organisasjon, med personlig tilpasset innhold.

**Smishing**: Phishing via SMS-meldinger. "Din pakke er forsinket, klikk her for sporing."

**Vishing**: Phishing via telefonsamtaler. Noen ringer og utgir seg for å være fra banken eller Microsoft.

**Kjennetegn på phishing:**
- Presserende tone: "Kontoen din blir sperret om 24 timer!"
- Mistenkelig avsenderadresse
- Skrivefeil og dårlig språk
- Lenker som ser riktige ut, men peker til en annen adresse
- Forespørsel om personlig informasjon`,
    },
    {
      id: 'im-6-3-text-3',
      type: 'text',
      content: `### Nettverksangrep

**DDoS (Distributed Denial of Service)**: Tusenvis av datamaskiner sender forespørsler til en server samtidig, slik at den overbelastes og slutter å fungere. Brukes til å ta nettsider og tjenester offline.

**Man-in-the-Middle (MITM)**: Angriperen plasserer seg mellom to kommuniserende parter og kan avlytte eller endre data. Vanlig på usikrede Wi-Fi-nettverk.

**SQL-injeksjon**: Angriperen sender ondsinnet kode gjennom inndatafelt på en nettside for å få tilgang til databasen bak.

### Sårbarheter

**Programvaresårbarheter** er feil i kode som kan utnyttes. Utviklere gir ut sikkerhetsoppdateringer (patches) for å tette sårbarhetene.

**Zero-day**: En sårbarhet som utnyttes før utvikleren vet om den eller har rukket å lage en oppdatering.

**Menneskelige sårbarheter**: Svake passord, gjenbruk av passord, klikking på ukjente lenker, manglende oppdateringer.

**Fysiske sårbarheter**: Ulåste datamaskiner, USB-pinner med skadevare, manglende kryptering av bærbare enheter.`,
    },
    {
      id: 'im-6-3-example-1',
      type: 'example',
      title: 'Gjenkjenne en phishing-e-post',
      content: `Her er en mistenkelig e-post:

**Fra**: support@bank-sikkerhet.com (ekte bank bruker eget domene, f.eks. dnb.no)
**Emne**: VIKTIG: Din konto er midlertidig sperret!
**Innhold**: "Kjære kunde, vi har oppdaget mistenkelig aktivitet på kontoen din. Klikk her for å verifisere identiteten din innen 24 timer, ellers vil kontoen bli permanent sperret."

**Røde flagg:**
1. Feil avsenderdomene (ikke bankens offisielle)
2. Presserende tidspress ("24 timer")
3. Generisk tiltale ("Kjære kunde" i stedet for navnet ditt)
4. Lenken fører til en annen adresse enn bankens nettside
5. Banker ber aldri om passord eller personlig informasjon via e-post`,
    },
    {
      id: 'im-6-3-summary',
      type: 'text',
      content: `## Oppsummering

- Digitale trusler inkluderer virus, trojanere, ransomware, phishing og DDoS-angrep.
- Sosial manipulering utnytter menneskelig tillit for å lure folk til å gi fra seg informasjon.
- Sårbarhetsskanning identifiserer svakheter i systemer og programvare.
- Sikkerhetshendelser bør rapporteres og dokumenteres for å forhindre gjentagelse.
- Alle kan bli mål for digitale angrep, og bevissthet er det viktigste forsvaret.
- Oppdatering av programvare lukker kjente sikkerhetshull.`,
    },
    {
      id: 'im-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-6-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er ransomware?',
        options: [
          'Et program som viser uønskede annonser',
          'Et program som krypterer filene dine og krever betaling for å gi tilgang',
          'Et antivirusprogram',
          'En type nettleserutvidelse',
        ],
        correctAnswer: 1,
        solution: 'Ransomware (løsepengevirus) er skadevare som krypterer filene på en datamaskin og krever betaling (løsepenger) for å gi brukeren tilgang til filene igjen. Det er en av de alvorligste digitale truslene i dag.',
      },
    },
    {
      id: 'im-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-6-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn fire kjennetegn på en phishing-e-post, og forklar hvorfor hvert kjennetegn er mistenkelig.',
        solution: '1) Presserende tone ("kontoen sperres om 24 timer") - skaper panikk for at du skal handle uten å tenke. 2) Mistenkelig avsenderadresse som ikke matcher den offisielle organisasjonen - angriperen kan ikke bruke det ekte domenet. 3) Generisk tiltale ("Kjære kunde") i stedet for navnet ditt - angriperen kjenner ikke identiteten din. 4) Lenker som ser riktige ut men peker til feil adresse - ved å holde musen over lenken ser du den virkelige destinasjonen.',
      },
    },
    {
      id: 'im-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-6-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er et DDoS-angrep?',
        options: [
          'Et virus som sletter filer',
          'Mange datamaskiner sender forespørsler til en server for å overbelaste den',
          'En metode for å stjele passord',
          'En type kryptering',
        ],
        correctAnswer: 1,
        solution: 'DDoS (Distributed Denial of Service) er et angrep der tusenvis av datamaskiner (ofte del av et botnett) sender enorme mengder forespørsler til en server, slik at den overbelastes og ikke kan betjene vanlige brukere.',
      },
    },
    {
      id: 'im-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-6-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hva sosial manipulering (social engineering) er, og beskriv to ulike former for sosial manipulering med eksempler.',
        solution: 'Sosial manipulering utnytter menneskelig psykologi - tillit, frykt, nysgjerrighet - for å lure folk til å gi fra seg sensitiv informasjon eller utføre handlinger som kompromitterer sikkerheten. 1) Phishing: En e-post som ser ut som den kommer fra banken din ber deg logge inn via en lenke. Lenken fører til en falsk nettside som stjeler innloggingsdetaljene. 2) Vishing: Noen ringer og utgir seg for å være fra IT-avdelingen og sier at datamaskinen din har et problem. De ber deg installere et "feilrettingsverktøy" som egentlig er skadevare.',
      },
    },
    {
      id: 'im-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-6-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er en zero-day-sårbarhet?',
        options: [
          'En sårbarhet som er fikset på dag null',
          'En sårbarhet som utnyttes før utvikleren vet om den eller har laget en oppdatering',
          'En sårbarhet som kun finnes i gamle systemer',
          'En sårbarhet som alltid kan forhindres med antivirus',
        ],
        correctAnswer: 1,
        solution: 'En zero-day-sårbarhet er en sikkerhetsfeil som utnyttes av angripere før utvikleren er klar over den eller har rukket å lage en sikkerhetsoppdatering. Navnet refererer til at utvikleren har hatt "null dager" til å fikse problemet.',
      },
    },
    {
      id: 'im-6-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-6-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Beskriv tre ulike typer skadevare, forklar hvordan de fungerer, og gi eksempler på skade de kan gjøre.',
        solution: '1) Ransomware: Krypterer filer med en nøkkel som kun angriperen har. Offeret må betale løsepenger for å få filene tilbake. Skade: Tap av tilgang til viktige dokumenter, økonomisk tap, driftsstans. 2) Trojaner: Utgir seg for å være et nyttig program, men inneholder skjult ondsinnet kode. Kan gi angriperen fjerntilgang til maskinen. Skade: Datatyveri, overvåking, bruk av maskinen til angrep mot andre. 3) Spyware: Overvåker brukerens aktivitet uten samtykke. Kan logge tastetrykk og ta skjermbilder. Skade: Tyveri av passord, bankinformasjon og personlige data.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Skadevare', definition: 'Ondsinnet programvare designet for å skade eller utnytte datasystemer.' },
    { term: 'Ransomware', definition: 'Skadevare som krypterer filer og krever betaling for å gi tilgang.' },
    { term: 'Phishing', definition: 'Forsøk på å lure folk til å gi fra seg informasjon via falske meldinger.' },
    { term: 'DDoS', definition: 'Angrep der mange datamaskiner overbelaster en server med forespørsler.' },
    { term: 'Zero-day', definition: 'Sårbarhet som utnyttes før utvikleren har rukket å lage oppdatering.' },
    { term: 'Sosial manipulering', definition: 'Utnyttelse av menneskelig tillit for å skaffe sensitiv informasjon.' },
  ],
};

// ============================================================================
// Kapittel 6.4: Informasjonssikkerhet og tiltak
// ============================================================================

export const CHAPTER_IM_VG1_6_4: TextbookChapter = {
  id: 'im-vg1-6-4',
  courseId: 'im-vg1',
  chapterNumber: '6.4',
  title: 'Informasjonssikkerhet og tiltak',
  description: 'Lær om sikkerhetstiltak som brannmurer, kryptering, tofaktorautentisering og sikker passordpraksis.',
  estimatedMinutes: 55,
  competenceGoals: [
    'vurdere, anbefale og kvalitetssikre tiltak som reduserer risiko for uønsket spredning av data',
    'utforske og beskrive digitale trusler, verdier og sårbarheter i samfunnet',
  ],
  content: [
    {
      id: 'im-6-4-intro',
      type: 'text',
      content: `## Informasjonssikkerhet og tiltak

Å kjenne truslene er bare halve jobben - vi må også vite hvordan vi beskytter oss. Informasjonssikkerhet handler om å beskytte data mot uautorisert tilgang, endring og tap. Fra enkle tiltak som sterke passord til avanserte teknologier som kryptering og brannmurer - et lagdelt forsvar gir best beskyttelse.

I dette kapittelet skal du lære:
- Brannmurer og antivirusprogrammer
- Kryptering og SSL/TLS
- Tofaktorautentisering (2FA)
- Sikker passordpraksis og passordbehandlere
- Sikkerhetskopiering som forsvar mot datatap`,
    },
    {
      id: 'im-6-4-text-1',
      type: 'text',
      content: `### Brannmur og antivirus

**Brannmur (firewall)** kontrollerer trafikk inn og ut av et nettverk basert på definerte regler:
- Blokkerer uautorisert innkommende trafikk
- Kan konfigureres til å tillate eller blokkere spesifikke porter og protokoller
- Finnes som programvare (Windows Firewall) og maskinvare (dedikert brannmurenhet)

**Antivirusprogrammer** scanner filer og prosesser for kjent skadevare:
- Sammenligner med en database av kjente trusler (signaturer)
- Heuristisk analyse oppdager ukjent skadevare basert på oppførsel
- Sanntidsbeskyttelse scanner filer når de åpnes
- Må holdes oppdatert for å beskytte mot nye trusler

### Kryptering

**Kryptering** gjør data uleselig for alle uten riktig nøkkel.

**Symmetrisk kryptering**: Samme nøkkel brukes til å kryptere og dekryptere. Raskt, men nøkkelen må deles sikkert. Eksempel: AES.

**Asymmetrisk kryptering**: To nøkler - en offentlig (for kryptering) og en privat (for dekryptering). Sikrere for kommunikasjon. Eksempel: RSA.

**SSL/TLS**: Krypterer kommunikasjon mellom nettleser og webserver (HTTPS). Sertifikater verifiserer at serveren er den den utgir seg for å være.`,
    },
    {
      id: 'im-6-4-text-2',
      type: 'text',
      content: `### Autentisering

**Tofaktorautentisering (2FA)** krever to ulike typer bevis for identitet:
1. **Noe du vet**: Passord eller PIN-kode
2. **Noe du har**: Mobiltelefon (SMS-kode eller autentiserings-app)
3. **Noe du er**: Biometri (fingeravtrykk, ansiktsgjenkjenning)

2FA gir mye bedre beskyttelse enn bare passord, fordi en angriper trenger begge faktorene.

**Passordstrategi:**
- **Lengde over kompleksitet**: Et langt passord er sterkere enn et kort, komplisert ett
- **Unikt for hver tjeneste**: Aldri gjenbruk passord
- **Passordbehandler**: Bruk et program (f.eks. Bitwarden, 1Password) som genererer og lagrer unike passord
- **Passfrase**: En setning som er lang og lett å huske: "MinKattHeter3Flansen!"

**Svake passord å unngå:**
- Navn, fødselsdatoer, vanlige ord
- "123456", "passord", "qwerty"
- Samme passord på flere tjenester`,
    },
    {
      id: 'im-6-4-text-3',
      type: 'text',
      content: `### Sikkerhetskopiering

**3-2-1-regelen** for sikkerhetskopiering:
- **3** kopier av viktige data
- **2** ulike lagringsmedier (f.eks. ekstern harddisk og skylagring)
- **1** kopi oppbevart utenfor hjemmet/kontoret (offsite)

**Typer sikkerhetskopiering:**
- **Full kopi**: Kopierer alle data. Tar lang tid, men enkel å gjenopprette.
- **Inkrementell**: Kopierer bare data som har endret seg siden siste kopiering. Rask, men gjenoppretting krever alle inkrementelle kopier.
- **Differensiell**: Kopierer data som har endret seg siden siste fulle kopi.

### Programvareoppdateringer

Å holde programvare oppdatert er et av de viktigste sikkerhetstiltakene:
- Sikkerhetsoppdateringer tetter kjente sårbarheter
- Aktiver automatiske oppdateringer der det er mulig
- Oppdater operativsystem, nettleser, apper og plugins
- Gammel, ikke-støttet programvare er en stor sikkerhetsrisiko`,
    },
    {
      id: 'im-6-4-example-1',
      type: 'example',
      title: 'Sikre en personlig datamaskin',
      content: `Sjekkliste for å sikre din personlige datamaskin:

1. **Operativsystem**: Aktiver automatiske oppdateringer.
2. **Brannmur**: Sjekk at den innebygde brannmuren er aktivert.
3. **Antivirus**: Bruk et oppdatert antivirusprogram (Windows Defender er innebygd og godt nok for de fleste).
4. **Passord**: Sett et sterkt passord på brukerkontoen. Aktiver skjermlås etter kort tid.
5. **2FA**: Aktiver tofaktorautentisering på e-post, sosiale medier og skylagring.
6. **Passordbehandler**: Installer en passordbehandler og generer unike passord for alle tjenester.
7. **Sikkerhetskopiering**: Sett opp automatisk sikkerhetskopiering til en ekstern disk og skylagring.
8. **Kryptering**: Aktiver BitLocker (Windows) eller FileVault (Mac) for å kryptere harddisken.`,
    },
    {
      id: 'im-6-4-summary',
      type: 'text',
      content: `## Oppsummering

- Brannmurer og antivirus er grunnleggende sikkerhetstiltak mot uønsket tilgang og skadevare.
- Kryptering med SSL/TLS beskytter data under overføring på internett.
- Tofaktorautentisering (2FA) legger til et ekstra sikkerhetslag utover passord.
- Gode passordvaner inkluderer lange, unike passord og bruk av passordbehandler.
- Regelmessig sikkerhetskopiering beskytter mot datatap ved angrep eller maskinvarefeil.
- Sikkerhet er et lagdelt forsvar der flere tiltak virker sammen.`,
    },
    {
      id: 'im-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-6-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er tofaktorautentisering (2FA)?',
        options: [
          'Å logge inn med to ulike passord',
          'Autentisering som krever to ulike typer bevis for identitet',
          'Å ha to ulike brukerkontoer',
          'Å bruke to ulike nettlesere',
        ],
        correctAnswer: 1,
        solution: 'Tofaktorautentisering krever to ulike typer bevis: noe du vet (passord), noe du har (mobiltelefon/SMS-kode), eller noe du er (biometri). Selv om passordet stjeles, trenger angriperen den andre faktoren.',
      },
    },
    {
      id: 'im-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-6-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom symmetrisk og asymmetrisk kryptering. Gi et eksempel på bruksområde for hver.',
        solution: 'Symmetrisk kryptering bruker samme nøkkel til å kryptere og dekryptere. Det er raskt, men utfordringen er å dele nøkkelen sikkert. Bruksområde: Kryptering av harddisker (BitLocker, FileVault). Asymmetrisk kryptering bruker to nøkler - en offentlig nøkkel for å kryptere og en privat nøkkel for å dekryptere. Sikrere for kommunikasjon fordi den offentlige nøkkelen kan deles åpent. Bruksområde: HTTPS/SSL - nettsider bruker dette for å kryptere kommunikasjon med nettleseren din.',
      },
    },
    {
      id: 'im-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-6-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er 3-2-1-regelen for sikkerhetskopiering?',
        options: [
          '3 passord, 2 brukere, 1 datamaskin',
          '3 kopier av data, 2 ulike lagringsmedier, 1 kopi offsite',
          '3 brannmurer, 2 antivirusprogrammer, 1 VPN',
          '3 oppdateringer, 2 ganger i uken, 1 gang i måneden',
        ],
        correctAnswer: 1,
        solution: '3-2-1-regelen anbefaler: 3 kopier av viktige data, på 2 ulike lagringsmedier (f.eks. harddisk og sky), med 1 kopi oppbevart utenfor hjemmet/kontoret for beskyttelse mot brann og tyveri.',
      },
    },
    {
      id: 'im-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-6-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag en sikkerhetsvurdering av din egen digitale hverdag. Hvilke sikkerhetstiltak bruker du allerede, og hva bør du forbedre?',
        solution: 'Eksempel: Allerede gjort: Bruker passord på telefonen og PCen, har automatiske oppdateringer aktivert, bruker 2FA på noen tjenester. Bør forbedres: 1) Installere en passordbehandler og slutte å gjenbruke passord. 2) Aktivere 2FA på alle viktige kontoer (e-post, sosiale medier, skylagring). 3) Sette opp regelmessig sikkerhetskopiering av viktige filer. 4) Sjekke at alle enheter har kryptering aktivert.',
      },
    },
    {
      id: 'im-6-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-6-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva gjør en brannmur?',
        options: [
          'Krypterer alle filer på datamaskinen',
          'Kontrollerer nettverkstrafikk inn og ut basert på definerte regler',
          'Scanner filer for virus',
          'Lager sikkerhetskopier automatisk',
        ],
        correctAnswer: 1,
        solution: 'En brannmur kontrollerer nettverkstrafikk inn og ut av et nettverk eller en datamaskin basert på definerte regler. Den blokkerer uautorisert trafikk og kan tillate eller blokkere spesifikke porter og protokoller.',
      },
    },
    {
      id: 'im-6-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-6-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Forklar hvorfor det er bedre å bruke en passfrase enn et kort, komplisert passord. Gi et eksempel på en god passfrase.',
        solution: 'En passfrase er bedre fordi: 1) Lengde er viktigere enn kompleksitet for passordsikkerhet - et 25-tegns passord tar mye lengre tid å knekke enn et 8-tegns passord med spesialtegn. 2) Passfraser er lettere å huske - "MinHundLikerÅBade2Ganger!" er enklere å huske enn "xK9#mP2!" 3) De er motstandsdyktige mot ordliste-angrep fordi de kombinerer flere ord. Eksempel på god passfrase: "TreGrønneKatterDansetPåTaket42" - lang, lett å huske, kombinerer ord, tall og stor/liten bokstav.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Brannmur', definition: 'Sikkerhetssystem som kontrollerer nettverkstrafikk basert på regler.' },
    { term: 'Kryptering', definition: 'Prosess som gjør data uleselig for alle uten riktig nøkkel.' },
    { term: 'Tofaktorautentisering', definition: 'Innlogging som krever to ulike typer identitetsbevis.' },
    { term: 'SSL/TLS', definition: 'Krypteringsprotokoll som sikrer kommunikasjon mellom nettleser og server.' },
    { term: 'Passordbehandler', definition: 'Program som genererer og lagrer unike passord for alle tjenester.' },
    { term: '3-2-1-regelen', definition: 'Strategi for sikkerhetskopiering: 3 kopier, 2 medier, 1 offsite.' },
  ],
};

// ============================================================================
// Kapittel 6.5: Personvern og GDPR
// ============================================================================

export const CHAPTER_IM_VG1_6_5: TextbookChapter = {
  id: 'im-vg1-6-5',
  courseId: 'im-vg1',
  chapterNumber: '6.5',
  title: 'Personvern og GDPR',
  description: 'Forstå personvernlovgivningen, GDPR og hvordan personopplysninger skal behandles forsvarlig i digitale løsninger.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for hvordan man behandler informasjon og personopplysninger i tråd med gjeldende regelverk',
  ],
  content: [
    {
      id: 'im-6-5-intro',
      type: 'text',
      content: `## Personvern og GDPR

Personvern er retten til å kontrollere egne personopplysninger. I en digital verden der data samles inn overalt, er personvern viktigere enn noen gang. GDPR (General Data Protection Regulation) er EUs personvernforordning som gir enkeltpersoner sterke rettigheter og stiller krav til alle som behandler personopplysninger.

I dette kapittelet skal du lære:
- Hva personopplysninger er og hvorfor de må beskyttes
- Hovedprinsippene i GDPR
- Dine rettigheter som registrert person
- Informasjonskapsler og sporing på nett`,
    },
    {
      id: 'im-6-5-def-1',
      type: 'definition',
      title: 'Personopplysninger',
      content: `**Personopplysninger** er alle opplysninger som kan knyttes til en identifiserbar person: navn, fødselsnummer, e-post, IP-adresse, bilder, lokaliseringsdata, helsedata med mer. GDPR beskytter behandlingen av slike opplysninger.`,
    },
    {
      id: 'im-6-5-text-1',
      type: 'text',
      content: `### GDPR - Hovedprinsipper

**Lovlighet og rettferdighet**: Behandling av personopplysninger må ha et lovlig grunnlag, for eksempel samtykke eller oppfyllelse av avtale.

**Formålsbegrensning**: Opplysninger skal bare brukes til det formålet de ble samlet inn for. Data samlet inn for levering kan ikke automatisk brukes til markedsføring.

**Dataminimering**: Bare opplysninger som er nødvendige for formålet, skal samles inn. Ikke samle inn mer enn du trenger.

**Riktighet**: Opplysninger skal være korrekte og oppdaterte.

**Lagringsbegrensning**: Data skal ikke lagres lenger enn nødvendig for formålet.

**Integritet og konfidensialitet**: Opplysninger skal beskyttes mot uautorisert tilgang, tap og ødeleggelse.

### Behandlingsgrunnlag

For å behandle personopplysninger trenger du et lovlig grunnlag:
- **Samtykke**: Personen har gitt frivillig, tydelig tillatelse
- **Avtale**: Nødvendig for å oppfylle en kontrakt
- **Rettslig forpliktelse**: Påkrevd av lov (f.eks. skattemeldinger)
- **Berettiget interesse**: Virksomhetens interesse veier tyngre enn personens personvern (strengt vurdert)`,
    },
    {
      id: 'im-6-5-text-2',
      type: 'text',
      content: `### Dine rettigheter

**Rett til informasjon**: Du har rett til å vite hvem som behandler dine data, til hvilket formål, og på hvilket grunnlag.

**Rett til innsyn**: Du kan be om å få se alle personopplysninger en virksomhet har om deg.

**Rett til retting**: Du kan kreve at feilaktige opplysninger korrigeres.

**Rett til sletting** ("retten til å bli glemt"): Du kan kreve at personopplysningene dine slettes når de ikke lenger er nødvendige.

**Rett til dataportabilitet**: Du kan få utlevert dine data i et maskinlesbart format for å flytte dem til en annen tjeneste.

**Rett til å protestere**: Du kan protestere mot behandling basert på berettiget interesse.

**Datatilsynet** er det norske organet som håndhever personvernlovgivningen. De kan ilegge bøter og pålegge virksomheter å endre praksis.`,
    },
    {
      id: 'im-6-5-text-3',
      type: 'text',
      content: `### Informasjonskapsler og sporing

**Informasjonskapsler (cookies)** er små tekstfiler som nettsider lagrer i nettleseren din.

**Nødvendige cookies**: Kreves for at nettsiden skal fungere (handlekurv, innlogging). Trenger ikke samtykke.

**Preferansecookies**: Husker innstillinger som språk og temavalg.

**Statistikk-cookies**: Samler anonymisert data om bruk av nettsiden (Google Analytics).

**Markedsføringscookies**: Sporer deg på tvers av nettsider for å vise målrettet reklame. Krever samtykke.

**Sporingsteknologier:**
- Tredjeparts-cookies for annonsesporing
- Fingerprinting (identifisering basert på nettleserinnstillinger)
- Tracking-piksler i e-post
- Lokaliseringsdata fra mobilen

**Cookie-samtykke**: Nettsider er pålagt å informere om cookies og be om samtykke for ikke-nødvendige cookies. Du kan velge å akseptere bare nødvendige, eller alle.`,
    },
    {
      id: 'im-6-5-example-1',
      type: 'example',
      title: 'Personvern i et skoleprosjekt',
      content: `Du lager en nettside som del av et skoleprosjekt og vil samle inn svar via et spørreskjema:

**Hva du må gjøre for å følge personvernreglene:**
1. **Informere**: Fortell respondentene hvem du er, hva dataene brukes til, og hvor lenge de lagres.
2. **Samtykke**: Be om tydelig samtykke for å samle inn svarene. Samtykke skal være frivillig.
3. **Dataminimering**: Samle bare inn opplysninger du faktisk trenger. Trenger du egentlig navn og e-post?
4. **Anonymisering**: Vurder om svarene kan samles inn anonymt.
5. **Lagring**: Slett dataene når prosjektet er ferdig.
6. **Sikkerhet**: Lagre svarene trygt, ikke del dem med andre uten grunn.

Hvis du bruker Google Skjemaer, er Google databehandler og behandler dataene på dine vegne.`,
    },
    {
      id: 'im-6-5-summary',
      type: 'text',
      content: `## Oppsummering

- Personvern handler om retten til å kontrollere egne personopplysninger.
- GDPR (personvernforordningen) gir strenge regler for behandling av personopplysninger i EU/EØS.
- Samtykke er et viktig behandlingsgrunnlag, men det finnes også andre lovlige grunnlag.
- Registrerte har rettigheter som innsyn, retting, sletting og dataportabilitet.
- Informasjonskapsler (cookies) og sporing krever brukerens samtykke.
- Personvernombudet hjelper organisasjoner med å følge personvernreglene.`,
    },
    {
      id: 'im-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-6-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er en personopplysning ifølge GDPR?',
        options: [
          'Bare navn og fødselsnummer',
          'Alle opplysninger som kan knyttes til en identifiserbar person',
          'Bare data som lagres digitalt',
          'Bare sensitive helsedata',
        ],
        correctAnswer: 1,
        solution: 'Personopplysninger er alle opplysninger som kan knyttes til en identifiserbar person, inkludert navn, e-post, IP-adresse, bilder, lokaliseringsdata, nettleshistorikk og mye mer.',
      },
    },
    {
      id: 'im-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-6-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn og forklar tre av rettighetene du har som registrert person under GDPR.',
        solution: '1) Rett til innsyn: Du kan be enhver virksomhet om å få se alle personopplysninger de har om deg, gratis. 2) Rett til sletting ("retten til å bli glemt"): Du kan kreve at personopplysningene dine slettes når de ikke lenger er nødvendige for det opprinnelige formålet. 3) Rett til dataportabilitet: Du kan kreve å få utlevert dine persondata i et maskinlesbart format slik at du kan flytte dem til en annen tjeneste.',
      },
    },
    {
      id: 'im-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-6-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilken type informasjonskapsler krever samtykke fra brukeren?',
        options: [
          'Nødvendige cookies som holder innloggingen aktiv',
          'Markedsføringscookies som sporer brukeren på tvers av nettsider',
          'Alle typer cookies',
          'Ingen cookies krever samtykke',
        ],
        correctAnswer: 1,
        solution: 'Markedsføringscookies (og andre ikke-nødvendige cookies) krever aktivt samtykke fra brukeren. Nødvendige cookies som kreves for at nettsiden skal fungere (innlogging, handlekurv) kan brukes uten samtykke.',
      },
    },
    {
      id: 'im-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-6-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar prinsippet om dataminimering i GDPR, og gi et eksempel på hvordan det kan brytes.',
        solution: 'Dataminimering betyr at man bare skal samle inn personopplysninger som er nødvendige for det spesifikke formålet. Man skal ikke samle inn "bare for sikkerhets skyld" eller "i tilfelle". Eksempel på brudd: En nettbutikk som selger bøker ber om fødselsdato, kjønn, sivilstatus og inntekt ved registrering. For å selge bøker trenger de egentlig bare navn, leveringsadresse og betalingsinformasjon. De ekstra opplysningene bryter med dataminimering fordi de ikke er nødvendige for formålet.',
      },
    },
    {
      id: 'im-6-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-6-5-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er Datatilsynets rolle?',
        options: [
          'De produserer programvare',
          'De håndhever personvernlovgivningen og kan ilegge bøter',
          'De driver internettet i Norge',
          'De lager nettsider for staten',
        ],
        correctAnswer: 1,
        solution: 'Datatilsynet er det norske organet som håndhever personvernlovgivningen. De behandler klager, gir veiledning, gjennomfører tilsyn og kan ilegge bøter til virksomheter som bryter reglene.',
      },
    },
    {
      id: 'im-6-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-6-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Du skal lage en app for et skoleprosjekt som samler inn tilbakemeldinger fra elever. Beskriv hvilke personvernhensyn du må ta, og hvordan du sikrer at appen følger GDPR.',
        solution: 'Personvernhensyn: 1) Formål: Definer klart hva tilbakemeldingene skal brukes til. 2) Behandlingsgrunnlag: Be om samtykke fra elevene. 3) Dataminimering: Vurder om svarene kan være anonyme. Samle bare nødvendig info. 4) Informasjonsplikt: Informer elevene om hvem som behandler data, formål, lagringstid og deres rettigheter. 5) Sikkerhet: Lagre data trygt, bruk passord. 6) Lagringstid: Slett dataene når prosjektet er ferdig. 7) Rettigheter: Gi elevene mulighet til å se, endre og slette sine svar. 8) Under 16 år: Hvis elever er under 16, kan det kreves foresattes samtykke.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'GDPR', definition: 'EUs personvernforordning som regulerer behandling av personopplysninger.' },
    { term: 'Samtykke', definition: 'Frivillig, tydelig tillatelse fra en person til å behandle deres data.' },
    { term: 'Dataminimering', definition: 'Prinsipp om å bare samle inn nødvendige personopplysninger.' },
    { term: 'Rett til sletting', definition: 'Retten til å få personopplysninger slettet når de ikke lenger er nødvendige.' },
    { term: 'Datatilsynet', definition: 'Norsk organ som håndhever personvernlovgivningen.' },
    { term: 'Informasjonskapsler', definition: 'Små tekstfiler nettsider lagrer i nettleseren for ulike formål.' },
  ],
};

// ============================================================================
// Kapittel 6.6: Digital etikk og ansvarlig teknologibruk
// ============================================================================

export const CHAPTER_IM_VG1_6_6: TextbookChapter = {
  id: 'im-vg1-6-6',
  courseId: 'im-vg1',
  chapterNumber: '6.6',
  title: 'Digital etikk og ansvarlig teknologibruk',
  description: 'Reflekter over etiske problemstillinger knyttet til teknologi, overvåking, kunstig intelligens og digital maktkonsentrasjon.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og beskrive digitale trusler, verdier og sårbarheter i samfunnet',
    'anvende regelverk for bruk og formidling av innhold i egen produksjon og reflektere over ansvar og etikk knyttet til bruk og formidling av innhold',
  ],
  content: [
    {
      id: 'im-6-6-intro',
      type: 'text',
      content: `## Digital etikk og ansvarlig teknologibruk

Teknologi er ikke nøytral - den reflekterer valgene til de som lager den, og påvirker samfunnet på måter vi ikke alltid kan forutse. Digital etikk handler om å ta ansvarlige valg i utvikling og bruk av teknologi. Fra opphavsrett og deling til overvåking og kunstig intelligens - vi står overfor etiske spørsmål som krever refleksjon.

I dette kapittelet skal du lære:
- Opphavsrett og Creative Commons
- Etiske dilemmaer knyttet til overvåking og persondata
- Kunstig intelligens og algoritmisk beslutningstaking
- Digital dannelse og ansvarlig nettbruk`,
    },
    {
      id: 'im-6-6-text-1',
      type: 'text',
      content: `### Opphavsrett og deling

**Opphavsrett** (copyright) gir skaperen enerett til å bestemme over sitt verk. Bilder, tekst, musikk, video og kode er beskyttet automatisk fra det øyeblikket de skapes.

**Du kan IKKE:**
- Bruke andres bilder på din nettside uten tillatelse
- Kopiere tekst fra andre nettsider
- Laste ned og bruke musikk i din video uten lisens
- Bruke andres kode uten å sjekke lisensen

**Creative Commons (CC)** er et lisensieringssystem som lar skapere gi tillatelse på forhånd:
- **CC BY**: Fri bruk med kreditering
- **CC BY-SA**: Fri bruk med kreditering og deling under samme vilkår
- **CC BY-NC**: Fri bruk med kreditering, men ikke kommersiell
- **CC BY-ND**: Fri bruk med kreditering, men ingen bearbeidelse
- **CC0**: Ingen rettigheter forbeholdt (public domain)

**Gode kilder for fritt tilgjengelig materiale:**
- Bilder: Unsplash, Pexels, Pixabay
- Musikk: Free Music Archive, YouTube Audio Library
- Ikoner: Feather Icons, Heroicons`,
    },
    {
      id: 'im-6-6-text-2',
      type: 'text',
      content: `### Overvåking og massedata

**Overvåkingskapitalisme**: Store teknologiselskaper samler inn enorme mengder data om brukernes atferd for å selge målrettet reklame. Forretningsmodellen er basert på å vite mest mulig om deg.

**Etiske spørsmål:**
- Hvor mye overvåking er akseptabelt for å gi oss "gratis" tjenester?
- Hvem eier dataene dine når du bruker sosiale medier?
- Bør offentlig overvåking (kameraer, datatilgang) tillates for å forhindre kriminalitet?
- Hva skjer når massedata brukes til å manipulere valg og meninger?

### Algoritmisk filtrering og filterbobler

Algoritmer bestemmer hva du ser i sosiale medier, søkeresultater og nyhetsstrømmer. De viser innhold du sannsynligvis liker, noe som skaper **filterbobler** - du eksponeres hovedsakelig for synspunkter du allerede er enig i.

**Konsekvenser:**
- Polarisering av samfunnsdebatten
- Spredning av desinformasjon i lukkede grupper
- Manipulering gjennom målrettet innhold
- Redusert mangfold i informasjonstilfang`,
    },
    {
      id: 'im-6-6-text-3',
      type: 'text',
      content: `### Kunstig intelligens og etikk

**Etiske utfordringer med KI:**
- **Bias**: KI-systemer kan reprodusere og forsterke skjevheter i treningsdataene
- **Arbeidsplasser**: Automatisering kan erstatte menneskelige jobber
- **Ansvar**: Hvem er ansvarlig når en KI tar en feil beslutning?
- **Deepfakes**: KI kan lage realistiske falske bilder og videoer
- **Gjennomsiktighet**: Mange KI-systemer er "svarte bokser" der man ikke forstår hvorfor en beslutning ble tatt

### Digital dannelse og nettvett

**Digital dannelse** handler om å opptre ansvarlig, respektfullt og reflektert i digitale omgivelser.

**Prinsipper:**
- **Tenk før du deler**: Er dette noe du vil at alle skal se?
- **Respekter andre**: Nettmobbing har reelle konsekvenser
- **Vær kritisk**: Sjekk kilder, gjenkjenn feilinformasjon
- **Beskytt deg selv**: Del ikke personlig informasjon unødig
- **Ta ansvar**: Dine handlinger på nett har konsekvenser
- **Kildekritikk**: Hvem står bak informasjonen, og hva er deres motiv?`,
    },
    {
      id: 'im-6-6-example-1',
      type: 'example',
      title: 'Etisk vurdering av en ny app',
      content: `Et firma lager en app som bruker ansiktsgjenkjenning for å logge elever inn på skolen:

**Potensielle fordeler:**
- Raskere registrering uten kort eller kode
- Vanskelig å jukse med fremmøte
- Praktisk for elever som glemmer kort

**Etiske bekymringer:**
- Masseovervåking av mindreårige
- Lagring av biometriske data (svært sensitive)
- Hva skjer ved datalekkasje?
- Normalisering av ansiktsgjenkjenning i det offentlige rom
- Samtykkeproblematikk for mindreårige
- Kan dataene brukes til andre formål i fremtiden?

**Konklusjon**: Selv om teknologien er praktisk, veier personvernbekymringene tungt. Mindre inngripende alternativer (kort, kode, fingeravtrykk) bør vurderes først.`,
    },
    {
      id: 'im-6-6-summary',
      type: 'text',
      content: `## Oppsummering

- Digital etikk handler om riktig og ansvarlig bruk av teknologi.
- Overvåking og massedata reiser spørsmål om maktkonsentrasjon og personvern.
- Algoritmebasert filtrering kan skape filterbobler og ekkokamre.
- Opphavsrett beskytter skapernes rettigheter til digitalt innhold.
- Digital dannelse innebærer respektfull og ansvarlig opptreden på nett.
- Etisk refleksjon bør ligge til grunn for alle valg vi tar med teknologi.`,
    },
    {
      id: 'im-6-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-6-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva betyr Creative Commons-lisensen CC BY?',
        options: [
          'Verket kan ikke brukes av andre',
          'Verket kan brukes fritt så lenge skaperen krediteres',
          'Verket kan bare brukes kommersielt',
          'Verket kan endres uten kreditering',
        ],
        correctAnswer: 1,
        solution: 'CC BY (Creative Commons Attribution) betyr at verket kan brukes fritt, også kommersielt og med bearbeidelser, så lenge den opprinnelige skaperen krediteres.',
      },
    },
    {
      id: 'im-6-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-6-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva filterbobler er, og beskriv hvordan de kan påvirke demokratiet og den offentlige debatten.',
        solution: 'Filterbobler oppstår når algoritmer i sosiale medier og søkemotorer viser deg innhold du sannsynligvis liker, basert på din tidligere atferd. Konsekvenser for demokratiet: 1) Polarisering - folk i ulike filterbobler ser helt forskjellige virkelighetsbilder og forstår ikke hverandre. 2) Desinformasjon spres uimotsagt innenfor lukkede grupper. 3) Felles faktagrunnlag svekkes fordi folk ikke eksponeres for de samme nyhetene. 4) Manipulering - målrettet politisk reklame kan skape splittelse.',
      },
    },
    {
      id: 'im-6-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-6-6-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er en deepfake?',
        options: [
          'En type brannmur',
          'Et realistisk falskt bilde eller video laget med kunstig intelligens',
          'En avansert søkemotor',
          'Et krypteringssystem',
        ],
        correctAnswer: 1,
        solution: 'En deepfake er et realistisk falskt bilde, video eller lydklipp skapt med kunstig intelligens. Teknologien kan sette noens ansikt på en annen persons kropp eller lage falske taler. Det utgjør en trussel mot tilliten til digitale medier.',
      },
    },
    {
      id: 'im-6-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-6-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Diskuter to etiske utfordringer knyttet til kunstig intelligens (KI), og foreslå mulige løsninger.',
        solution: '1) Bias i KI-systemer: KI lærer fra data som kan inneholde skjevheter. Et rekrutteringsverktøy trent på historiske data kan diskriminere mot kvinner eller minoriteter. Løsning: Diversifiserte treningsdata, jevnlig revisjon av KI-systemer, krav om forklarbarhet. 2) Ansvarsproblematikk: Hvis en selvkjørende bil forårsaker en ulykke, hvem er ansvarlig - eieren, produsenten eller KI-utvikleren? Løsning: Tydelig lovgivning som plasserer ansvar, krav om forsikring, tekniske standarder som alle må følge.',
      },
    },
    {
      id: 'im-6-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-6-6-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er opphavsrett?',
        options: [
          'Et system for å laste ned filer gratis',
          'Skaperens enerett til å bestemme over sitt verk',
          'En type åpen kildekode-lisens',
          'En metode for kryptering',
        ],
        correctAnswer: 1,
        solution: 'Opphavsrett gir skaperen av et verk enerett til å bestemme over kopiering, distribusjon, visning og bearbeidelse av verket. Beskyttelsen gjelder automatisk fra verket skapes, uten behov for registrering.',
      },
    },
    {
      id: 'im-6-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-6-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Du finner et flott bilde på nettet som du vil bruke i et skoleprosjekt. Beskriv prosessen for å finne ut om du kan bruke det, og hva du bør gjøre for å bruke det lovlig.',
        solution: '1) Sjekk om bildet har en angitt lisens (Creative Commons, opphavsrett). 2) Se etter fotografens/skaperens informasjon. 3) Hvis bildet har CC BY-lisens: Bruk det fritt, men krediter fotografen. 4) Hvis bildet er opphavsrettsbeskyttet uten CC-lisens: Kontakt skaperen og be om tillatelse. 5) Alternativt: Bruk bilder fra gratistjenester som Unsplash, Pexels eller Pixabay som tilbyr bilder med fri lisens. 6) Alltid krediter kilden, selv når det ikke er et krav. 7) Husk: Bare fordi et bilde er på internett, betyr det ikke at det er gratis å bruke.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Opphavsrett', definition: 'Skaperens enerett til å bestemme over kopiering og distribusjon av sitt verk.' },
    { term: 'Creative Commons', definition: 'Lisensieringssystem som lar skapere gi forhåndstillatelse til bruk.' },
    { term: 'Filterboble', definition: 'Fenomen der algoritmer viser deg innhold du allerede er enig i.' },
    { term: 'Deepfake', definition: 'Realistisk falskt bilde, video eller lyd laget med kunstig intelligens.' },
    { term: 'Overvåkingskapitalisme', definition: 'Forretningsmodell basert på innsamling og salg av brukerdata.' },
    { term: 'Digital dannelse', definition: 'Å opptre ansvarlig, respektfullt og reflektert i digitale omgivelser.' },
  ],
};

// ============================================================================
// Eksport av del 6 kapitler
// ============================================================================

export const IM_VG1_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IM_VG1_6_1,
  CHAPTER_IM_VG1_6_2,
  CHAPTER_IM_VG1_6_3,
  CHAPTER_IM_VG1_6_4,
  CHAPTER_IM_VG1_6_5,
  CHAPTER_IM_VG1_6_6,
];
