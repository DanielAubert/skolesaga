/* eslint-disable */
// @ts-nocheck
/**
 * Elektro og datateknologi VG1 - Nettverk og kommunikasjon
 *
 * Dekker LK20 læreplan: Kapittel 4.2–4.6
 * Emner: OSI/TCP-IP, IP-adressering, trådløs kommunikasjon,
 *        serielle protokoller, nettverksutstyr og kabelsystemer.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.2: OSI-modellen og TCP/IP
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_4_2: TextbookChapter = {
  id: 'elektro-data-vg1-4-2',
  courseId: 'elektro-data-vg1',
  chapterNumber: '4.2',
  title: 'OSI-modellen og TCP/IP',
  description: 'Forstå lagdelte nettverksmodeller, protokollstakken og innkapsling av data.',
  estimatedMinutes: 60,
  competenceGoals: ['forklare prinsippene i OSI-modellen og TCP/IP'],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-4-2-intro',
      type: 'text',
      content: `## Lagdelte nettverksmodeller

Når du sender en melding fra telefonen din til en venn, skjer det svært mye «under panseret». Meldingen pakkes inn i flere lag med informasjon, sendes gjennom kabler eller trådløst, rutes gjennom internett, og pakkes ut igjen hos mottakeren. For å forstå og standardisere denne prosessen bruker vi **lagdelte nettverksmodeller**.

To modeller dominerer:
- **OSI-modellen** (Open Systems Interconnection) – en teoretisk referansemodell med 7 lag
- **TCP/IP-modellen** – den praktiske modellen internett faktisk bygger på, med 4 lag

Begge modellene deler opp nettverkskommunikasjonen i lag der hvert lag har et tydelig ansvar. Dette gjør det enklere å feilsøke, utvikle og standardisere nettverksteknologi.`,
    },

    // BLOKK 1: OSI-modellen
    {
      id: 'elektro-data-vg1-4-2-def-1',
      type: 'definition',
      title: 'OSI-modellen (7 lag)',
      content: `OSI-modellen ble utviklet av ISO (International Organization for Standardization) og har 7 lag, nummerert nedenfra og opp:

| Lag | Navn | Funksjon |
|-----|------|----------|
| 7 | **Applikasjonslaget** | Grensesnitt mot brukerapplikasjoner (HTTP, FTP, SMTP) |
| 6 | **Presentasjonslaget** | Dataformat, kryptering, komprimering |
| 5 | **Sesjonslaget** | Oppretter, vedlikeholder og avslutter sesjoner |
| 4 | **Transportlaget** | Pålitelig overføring, segmentering (TCP, UDP) |
| 3 | **Nettverkslaget** | Ruting og IP-adressering (IP, ICMP) |
| 2 | **Datalinklaget** | Rammestruktur, MAC-adresser, feildeteksjon (Ethernet) |
| 1 | **Fysisk lag** | Elektriske signaler, kabler, frekvenser |

En enkel huskeregel (nedenfra): **«Plumber Dan Never Throws Sausage Pizza Away»** (Physical, Data Link, Network, Transport, Session, Presentation, Application).`,
    },
    {
      id: 'elektro-data-vg1-4-2-example-1',
      type: 'example',
      title: 'Hva skjer når du besøker en nettside?',
      problem: 'Beskriv kort hva hvert OSI-lag gjør når du åpner «https://nrk.no» i nettleseren.',
      solution: `1. **Lag 7 – Applikasjon**: Nettleseren sender en HTTP GET-forespørsel til nrk.no.
2. **Lag 6 – Presentasjon**: HTTPS krypterer forespørselen med TLS.
3. **Lag 5 – Sesjon**: En TCP-sesjon opprettes mellom din maskin og NRK-serveren.
4. **Lag 4 – Transport**: Forespørselen deles i segmenter med sekvensnumre (TCP).
5. **Lag 3 – Nettverk**: Hvert segment får en IP-header med avsender- og mottaker-IP.
6. **Lag 2 – Datalink**: IP-pakken pakkes i en Ethernet-ramme med MAC-adresser.
7. **Lag 1 – Fysisk**: Bitene sendes som elektriske signaler gjennom kabelen (eller radiobølger via WiFi).

Hos NRK-serveren pakkes alt opp igjen i omvendt rekkefølge.`,
    },
    {
      id: 'elektro-data-vg1-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket lag i OSI-modellen håndterer IP-adresser og ruting?',
        options: [
          { id: 'a', text: 'Lag 2 – Datalinklaget', correct: false },
          { id: 'b', text: 'Lag 3 – Nettverkslaget', correct: true },
          { id: 'c', text: 'Lag 4 – Transportlaget', correct: false },
          { id: 'd', text: 'Lag 7 – Applikasjonslaget', correct: false },
        ],
        solution: 'Nettverkslaget (lag 3) er ansvarlig for IP-adressering og ruting av pakker mellom nettverk. IP-protokollen opererer på dette laget.',
      },
    },

    // BLOKK 2: TCP/IP-modellen
    {
      id: 'elektro-data-vg1-4-2-def-2',
      type: 'definition',
      title: 'TCP/IP-modellen (4 lag)',
      content: `TCP/IP-modellen er den praktiske modellen internett bygger på. Den har 4 lag:

| Lag | Navn | Tilsvarer OSI-lag | Eksempler |
|-----|------|-------------------|-----------|
| 4 | **Applikasjonslaget** | Lag 5–7 | HTTP, DNS, SMTP, FTP |
| 3 | **Transportlaget** | Lag 4 | TCP, UDP |
| 2 | **Internettlaget** | Lag 3 | IP, ICMP, ARP |
| 1 | **Nettverkstilgangslaget** | Lag 1–2 | Ethernet, WiFi |

TCP/IP slår sammen de øverste lagene (sesjon, presentasjon, applikasjon) til ett lag, og de nederste (fysisk og datalink) til ett lag. Det gjør modellen enklere og mer praktisk orientert.`,
    },
    {
      id: 'elektro-data-vg1-4-2-def-3',
      type: 'definition',
      title: 'Protokollstakk',
      content: `En **protokollstakk** er settet av protokoller som brukes på hvert lag for å kommunisere. Tenk på det som et sett med regler som hver part må følge.

Eksempel på en vanlig protokollstakk for nettlesing:
- **Applikasjon**: HTTP/HTTPS
- **Transport**: TCP (port 80 / 443)
- **Internett**: IPv4 eller IPv6
- **Nettverkstilgang**: Ethernet / WiFi (802.11)

Hver protokoll kommuniserer bare med tilsvarende lag på mottakerens side. HTTP snakker med HTTP, TCP snakker med TCP, osv.`,
    },
    {
      id: 'elektro-data-vg1-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar med egne ord hva en protokollstakk er, og gi et eksempel på en protokollstakk som brukes ved e-postsending.',
        solution: 'En protokollstakk er et sett med nettverksprotokoller som arbeider sammen, én for hvert lag i nettverksmodellen. Ved e-postsending kan stakken se slik ut: SMTP (applikasjon) brukes til å sende e-posten, TCP (transport) sørger for pålitelig levering, IP (internett) adresserer og ruter pakken, og Ethernet eller WiFi (nettverkstilgang) sender de fysiske signalene.',
      },
    },

    // BLOKK 3: Innkapsling
    {
      id: 'elektro-data-vg1-4-2-def-4',
      type: 'definition',
      title: 'Innkapsling (encapsulation)',
      content: `**Innkapsling** er prosessen der data pakkes inn med header-informasjon for hvert lag når den sendes nedover protokollstakken.

Prosessen:
1. **Applikasjonsdata** → f.eks. innholdet i en nettside
2. **Segment** → TCP legger til portnumre og sekvensnumre
3. **Pakke** → IP legger til avsender- og mottaker-IP-adresse
4. **Ramme (frame)** → Ethernet legger til MAC-adresser og feilsjekk (CRC)
5. **Bits** → Alt konverteres til 0-er og 1-ere for sending

Hos mottakeren skjer **de-innkapsling**: hvert lag fjerner sin header og sender data oppover til applikasjonen.`,
    },
    {
      id: 'elektro-data-vg1-4-2-example-2',
      type: 'example',
      title: 'Innkapsling i praksis',
      problem: 'Du sender teksten «Hei!» via en chat-app. Beskriv hva som legges til på hvert lag.',
      solution: `1. **Applikasjonslaget**: Teksten «Hei!» sendes fra chat-appen med applikasjonsprotokollens header (f.eks. WebSocket-header).
2. **Transportlaget**: TCP legger til en header med kildeport (f.eks. 52431) og destinasjonsport (f.eks. 443), pluss et sekvensnummer. Resultatet er et **segment**.
3. **Internettlaget**: IP legger til en header med din IP-adresse (f.eks. 192.168.1.5) og mottakerens IP (f.eks. 104.16.85.20). Resultatet er en **pakke**.
4. **Nettverkstilgangslaget**: Ethernet legger til en header med din MAC-adresse og ruterens MAC-adresse, pluss en CRC-sjekk. Resultatet er en **ramme**.

Den endelige rammen som sendes er altså: [Ethernet-header][IP-header][TCP-header][«Hei!»][CRC].`,
    },
    {
      id: 'elektro-data-vg1-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva kalles dataenheten på transportlaget i TCP/IP-modellen?',
        options: [
          { id: 'a', text: 'Ramme (frame)', correct: false },
          { id: 'b', text: 'Pakke (packet)', correct: false },
          { id: 'c', text: 'Segment', correct: true },
          { id: 'd', text: 'Bit', correct: false },
        ],
        solution: 'På transportlaget kalles dataenheten et segment. En pakke hører til nettverkslaget (IP), en ramme til datalinklaget (Ethernet), og bits til det fysiske laget.',
      },
    },

    // BLOKK 4: Sammenligning av modellene
    {
      id: 'elektro-data-vg1-4-2-text-1',
      type: 'text',
      content: `## Sammenligning: OSI vs. TCP/IP

| Egenskap | OSI-modellen | TCP/IP-modellen |
|----------|-------------|-----------------|
| Antall lag | 7 | 4 |
| Formål | Teoretisk referanse | Praktisk implementasjon |
| Utviklet av | ISO | DARPA / IETF |
| Brukes i dag? | Som undervisningsmodell | Ja, internett bygger på den |
| Presisjon | Svært detaljert | Mer generell |

**I praksis** bruker vi OSI-modellen for å forstå og forklare hva som skjer, mens TCP/IP-modellen beskriver det som faktisk kjører på nettverket. De fleste nettverksingeniører bruker begreper fra begge modellene i hverdagen.`,
    },
    {
      id: 'elektro-data-vg1-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: 'Lag en tabell som viser hvordan de 7 lagene i OSI-modellen tilsvarer de 4 lagene i TCP/IP-modellen. Forklar kort hva hvert TCP/IP-lag gjør.',
        solution: 'TCP/IP lag 1 (Nettverkstilgang) tilsvarer OSI lag 1–2 og håndterer fysisk sending og rammestruktur. TCP/IP lag 2 (Internett) tilsvarer OSI lag 3 og håndterer IP-adressering og ruting. TCP/IP lag 3 (Transport) tilsvarer OSI lag 4 og sørger for pålitelig eller upålitelig overføring (TCP/UDP). TCP/IP lag 4 (Applikasjon) tilsvarer OSI lag 5–7 og inneholder protokoller som HTTP, DNS og SMTP som applikasjonene bruker direkte.',
      },
    },

    // Oppsummering
    {
      id: 'elektro-data-vg1-4-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **OSI-modellen** har 7 lag og brukes som en teoretisk referansemodell for å forklare nettverkskommunikasjon.
- **TCP/IP-modellen** har 4 lag og er den praktiske modellen internett bygger på.
- **Innkapsling** betyr at hvert lag legger til sin header rundt dataene før de sendes videre nedover.
- Hvert lag har spesifikke **protokoller** som definerer reglene for kommunikasjon.
- Dataenhetene heter: data (applikasjon), segment (transport), pakke (nettverk), ramme (datalink), bits (fysisk).`,
    },

    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du jobber som lærling hos et IT-firma. En kunde klager over at nettsiden deres ikke lastes. Forklar hvordan du systematisk kan bruke OSI-modellen til å feilsøke problemet, lag for lag, fra det fysiske laget og oppover.',
        solution: 'Lag 1 (fysisk): Sjekk at nettverkskabelen er plugget inn og at lysene på nettverkskortet blinker. Lag 2 (datalink): Sjekk at maskinen får en gyldig MAC-adresse og kan kommunisere med svitsjen (sjekk med «arp -a»). Lag 3 (nettverk): Sjekk at maskinen har en IP-adresse (ipconfig/ifconfig) og kan pinge ruteren. Lag 4 (transport): Sjekk om riktig port er åpen (f.eks. port 80/443) og at brannmuren ikke blokkerer. Lag 5–7 (sesjon/presentasjon/applikasjon): Sjekk om DNS fungerer (nslookup), om HTTPS-sertifikatet er gyldig, og om webserveren svarer på forespørsler. Denne systematiske tilnærmingen gjør at man raskt kan identifisere hvilket lag problemet befinner seg på.',
      },
    },
    {
      id: 'elektro-data-vg1-4-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar forskjellen mellom TCP og UDP. Gi minst to bruksområder for hver protokoll, og begrunn hvorfor den ene passer bedre enn den andre i hvert tilfelle.',
        solution: 'TCP (Transmission Control Protocol) er en tilkoblingsorientert protokoll som garanterer at data kommer frem i riktig rekkefølge. Den bruker treveis håndtrykk, sekvensnumre og kvitteringer. Egnet for: nettlesing (HTTP) fordi nettsider må lastes komplett, og e-post (SMTP) fordi meldinger ikke kan mangle deler. UDP (User Datagram Protocol) er en tilkoblingsløs protokoll uten garanti for levering. Den er raskere fordi den ikke venter på kvitteringer. Egnet for: videostrømming fordi det er viktigere med lav forsinkelse enn at hvert bilde er perfekt, og online-spill fordi gamle posisjonsdata er verdiløse dersom de kommer forsinket.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'OSI-modellen', definition: 'Teoretisk nettverksmodell med 7 lag utviklet av ISO.' },
    { term: 'TCP/IP-modellen', definition: 'Praktisk nettverksmodell med 4 lag som internett bygger på.' },
    { term: 'Innkapsling', definition: 'Prosessen der hvert lag legger til sin header rundt data.' },
    { term: 'Protokollstakk', definition: 'Settet av protokoller som brukes på hvert lag.' },
    { term: 'Segment', definition: 'Dataenheten på transportlaget (TCP/UDP).' },
    { term: 'Pakke', definition: 'Dataenheten på nettverkslaget (IP).' },
    { term: 'Ramme', definition: 'Dataenheten på datalinklaget (Ethernet).' },
  ],
};

// ============================================================================
// Kapittel 4.3: IP-adressering og subnetting
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_4_3: TextbookChapter = {
  id: 'elektro-data-vg1-4-3',
  courseId: 'elektro-data-vg1',
  chapterNumber: '4.3',
  title: 'IP-adressering og subnetting',
  description: 'Lær om IPv4-adresser, subnettmasker, nettverksberegning, CIDR, DNS og DHCP.',
  estimatedMinutes: 55,
  competenceGoals: ['konfigurere grunnleggende nettverksinnstillinger'],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-4-3-intro',
      type: 'text',
      content: `## IP-adresser – internetts adressesystem

Hver enhet som er koblet til et nettverk trenger en unik adresse for å kunne sende og motta data. På internett bruker vi **IP-adresser** (Internet Protocol) for dette formålet. Det finnes to versjoner: IPv4 og IPv6. I dette kapittelet fokuserer vi på **IPv4**, som fortsatt er mest brukt.

En IPv4-adresse er et 32-bits tall, vanligvis skrevet som fire desimaltall skilt med punktum, for eksempel **192.168.1.10**. Hvert tall (oktett) kan være mellom 0 og 255. For å forstå hvordan nettverk organiseres trenger vi også å forstå **subnettmasker** og **subnetting**.`,
    },

    // BLOKK 1: IPv4-adresser og klasser
    {
      id: 'elektro-data-vg1-4-3-def-1',
      type: 'definition',
      title: 'IPv4-adresse',
      content: `En **IPv4-adresse** er et 32-bits tall delt i fire oktetter (8 bit hver). Den skrives i desimal med punktum mellom oktettene.

Eksempel: **192.168.1.10**
- Binært: 11000000.10101000.00000001.00001010
- Hver oktett: 0–255

En IP-adresse består av to deler:
- **Nettverksdelen**: Identifiserer nettverket (felles for alle enheter i samme nettverk)
- **Vertsdelen**: Identifiserer den spesifikke enheten i nettverket`,
    },
    {
      id: 'elektro-data-vg1-4-3-def-2',
      type: 'definition',
      title: 'IP-adresseklasser (historisk)',
      content: `Historisk ble IPv4-adresser delt inn i klasser:

| Klasse | Første oktett | Subnettmaske | Antall verter |
|--------|--------------|--------------|---------------|
| A | 1–126 | 255.0.0.0 | ca. 16,7 millioner |
| B | 128–191 | 255.255.0.0 | ca. 65 000 |
| C | 192–223 | 255.255.255.0 | 254 |

**Private adresseområder** (brukes i lokale nettverk, ikke på internett):
- Klasse A: 10.0.0.0 – 10.255.255.255
- Klasse B: 172.16.0.0 – 172.31.255.255
- Klasse C: 192.168.0.0 – 192.168.255.255

Adressene du ser på hjemmenettverket (f.eks. 192.168.1.x) er private klasse C-adresser.`,
    },
    {
      id: 'elektro-data-vg1-4-3-example-1',
      type: 'example',
      title: 'Konvertere IP-adresse til binært',
      problem: 'Skriv IP-adressen 192.168.1.10 i binært format.',
      solution: `Vi konverterer hver oktett separat:
- 192 = 128 + 64 = **11000000**
- 168 = 128 + 32 + 8 = **10101000**
- 1 = **00000001**
- 10 = 8 + 2 = **00001010**

Binært: **11000000.10101000.00000001.00001010**

Tips: Start med å sjekke om 128 «passer», deretter 64, 32, 16, 8, 4, 2, 1.`,
    },
    {
      id: 'elektro-data-vg1-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse er en gyldig privat IPv4-adresse?',
        options: [
          { id: 'a', text: '8.8.8.8', correct: false },
          { id: 'b', text: '192.168.0.1', correct: true },
          { id: 'c', text: '256.1.1.1', correct: false },
          { id: 'd', text: '1.1.1.1', correct: false },
        ],
        solution: '192.168.0.1 er en privat klasse C-adresse (192.168.0.0–192.168.255.255). 8.8.8.8 og 1.1.1.1 er offentlige DNS-servere. 256.1.1.1 er ugyldig fordi en oktett ikke kan være høyere enn 255.',
      },
    },

    // BLOKK 2: Subnettmasker og nettverksadresse
    {
      id: 'elektro-data-vg1-4-3-def-3',
      type: 'definition',
      title: 'Subnettmaske',
      content: `En **subnettmaske** forteller hvilken del av IP-adressen som er nettverksdelen og hvilken som er vertsdelen.

Eksempel med subnettmaske 255.255.255.0:
- Binært: 11111111.11111111.11111111.00000000
- De 24 første bitene (1-ere) = nettverksdel
- De 8 siste bitene (0-er) = vertsdel

For å finne **nettverksadressen** gjør vi en binær AND mellom IP-adressen og subnettmasken:
- IP:      192.168.1.10  → 11000000.10101000.00000001.00001010
- Maske:   255.255.255.0 → 11111111.11111111.11111111.00000000
- Resultat: 192.168.1.0  → 11000000.10101000.00000001.00000000

Nettverksadressen er altså **192.168.1.0**.`,
    },
    {
      id: 'elektro-data-vg1-4-3-example-2',
      type: 'example',
      title: 'Beregne nettverksadresse',
      problem: 'En maskin har IP-adressen 10.20.30.40 med subnettmasken 255.255.0.0. Finn nettverksadressen.',
      solution: `Vi gjør en binær AND mellom IP og subnettmaske:
- IP-adresse:   10.20.30.40
- Subnettmaske: 255.255.0.0

For hver oktett:
- 10 AND 255 = 10
- 20 AND 255 = 20
- 30 AND 0 = 0
- 40 AND 0 = 0

**Nettverksadressen er 10.20.0.0**

Alle maskiner med IP-adresser som starter med 10.20.x.x (med denne masken) tilhører samme nettverk.`,
    },
    {
      id: 'elektro-data-vg1-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'En PC har IP-adressen 172.16.5.100 med subnettmasken 255.255.255.0. Beregn nettverksadressen og oppgi hvor mange verter som kan finnes i dette subnettet.',
        solution: 'Nettverksadresse: 172.16.5.100 AND 255.255.255.0 = 172.16.5.0. Med subnettmaske /24 (255.255.255.0) er det 8 bit til vertsdelen. Antall mulige adresser = 2^8 = 256. Vi trekker fra nettverksadressen (172.16.5.0) og kringkastingsadressen (172.16.5.255), så antall brukbare vertsadresser = 256 − 2 = 254.',
      },
    },

    // BLOKK 3: CIDR
    {
      id: 'elektro-data-vg1-4-3-def-4',
      type: 'definition',
      title: 'CIDR-notasjon',
      content: `**CIDR** (Classless Inter-Domain Routing) er en kompakt måte å skrive subnettmasker på. I stedet for å skrive hele masken skriver vi antall nettverksbits etter en skråstrek.

Eksempler:
- 192.168.1.0**/24** betyr subnettmaske 255.255.255.0 (24 bit = nettverksdel)
- 10.0.0.0**/8** betyr subnettmaske 255.0.0.0 (8 bit = nettverksdel)
- 172.16.0.0**/16** betyr subnettmaske 255.255.0.0 (16 bit = nettverksdel)
- 192.168.1.0**/26** betyr subnettmaske 255.255.255.192 (64 adresser per subnett)

CIDR erstattet det gamle klassesystemet og gir mer fleksibel tildeling av IP-adresser.`,
    },
    {
      id: 'elektro-data-vg1-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvor mange brukbare vertsadresser finnes i nettverket 192.168.10.0/26?',
        options: [
          { id: 'a', text: '26', correct: false },
          { id: 'b', text: '62', correct: true },
          { id: 'c', text: '64', correct: false },
          { id: 'd', text: '254', correct: false },
        ],
        solution: '/26 betyr at 26 bit er nettverksdel og 6 bit er vertsdel. 2^6 = 64 mulige adresser. Vi trekker fra nettverksadresse og kringkastingsadresse: 64 − 2 = 62 brukbare vertsadresser.',
      },
    },

    // BLOKK 4: DNS og DHCP
    {
      id: 'elektro-data-vg1-4-3-def-5',
      type: 'definition',
      title: 'DNS (Domain Name System)',
      content: `**DNS** oversetter domenenavn til IP-adresser. Mennesker husker navn som «nrk.no», men datamaskiner trenger IP-adresser for å kommunisere.

Slik fungerer DNS-oppslag:
1. Du skriver «nrk.no» i nettleseren
2. Maskinen spør den lokale DNS-serveren (ofte ruteren din)
3. Hvis svaret ikke er lagret (cachet), spør den en rotserver
4. Rotserveren peker til .no-serveren
5. .no-serveren peker til NRKs navneserver
6. NRKs navneserver svarer med IP-adressen (f.eks. 160.68.205.23)

Vanlige DNS-poster:
- **A-post**: Domenenavn → IPv4-adresse
- **AAAA-post**: Domenenavn → IPv6-adresse
- **MX-post**: Domenenavn → e-postserver`,
    },
    {
      id: 'elektro-data-vg1-4-3-def-6',
      type: 'definition',
      title: 'DHCP (Dynamic Host Configuration Protocol)',
      content: `**DHCP** tildeler automatisk IP-adresser og andre nettverksinnstillinger til enheter. Når du kobler mobilen til WiFi, skjer dette:

1. Enheten sender en **DHCP Discover** (rop om hjelp)
2. DHCP-serveren svarer med **DHCP Offer** (tilbyr en adresse)
3. Enheten aksepterer med **DHCP Request**
4. Serveren bekrefter med **DHCP Acknowledge**

DHCP tildeler:
- IP-adresse
- Subnettmaske
- Standard gateway (ruterens IP)
- DNS-serveradresser

Alternativet er **statisk IP** der du konfigurerer alt manuelt.`,
    },
    {
      id: 'elektro-data-vg1-4-3-example-3',
      type: 'example',
      title: 'Nettverksinnstillinger hjemme',
      problem: 'Se for deg et typisk hjemmenettverk. Ruteren har adressen 192.168.1.1. Beskriv hva DHCP-serveren i ruteren tildeler til en ny enhet.',
      solution: `Når en ny enhet (f.eks. mobil) kobler seg til WiFi, tildeler ruterens DHCP-server typisk:

- **IP-adresse**: 192.168.1.100 (en ledig adresse i området 192.168.1.2–192.168.1.254)
- **Subnettmaske**: 255.255.255.0
- **Standard gateway**: 192.168.1.1 (ruterens adresse)
- **DNS-server**: 192.168.1.1 (ruteren videresender DNS-forespørsler)

IP-adressen er «leid» for en viss tid (lease time), typisk 24 timer. Når leietiden utløper, fornyes den automatisk.`,
    },
    {
      id: 'elektro-data-vg1-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar med egne ord hva DNS gjør og hvorfor det er nødvendig.',
        solution: 'DNS (Domain Name System) oversetter domenenavn (som «vg.no») til IP-adresser (som «195.88.54.16»). Det er nødvendig fordi mennesker enklere husker navn enn tallsekvenser, mens datamaskiner trenger numeriske IP-adresser for å rute data til riktig server. Uten DNS måtte vi skrive IP-adresser direkte i nettleseren.',
      },
    },

    // Oppsummering
    {
      id: 'elektro-data-vg1-4-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- En **IPv4-adresse** er et 32-bits tall skrevet som fire oktetter (f.eks. 192.168.1.10).
- **Subnettmasken** skiller nettverksdelen fra vertsdelen i IP-adressen.
- **Nettverksadressen** finnes ved binær AND mellom IP-adresse og subnettmaske.
- **CIDR-notasjon** (f.eks. /24) angir antall nettverksbits.
- **DNS** oversetter domenenavn til IP-adresser.
- **DHCP** tildeler automatisk IP-adresser og nettverksinnstillinger.
- Private adresseområder (10.x.x.x, 172.16–31.x.x, 192.168.x.x) brukes i lokale nettverk.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-4-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et kontor trenger 4 separate subnett med minst 30 verter i hvert. De har fått tildelt nettverket 192.168.10.0/24. Forklar hvilken subnettmaske du ville brukt og oppgi nettverksadresse og kringkastingsadresse for hvert subnett.',
        solution: 'Vi trenger minst 30 verter per subnett, altså 32 adresser (2^5 = 32, minus 2 = 30 brukbare). Vi bruker /27-maske (255.255.255.224), som gir blokker på 32 adresser. Subnett 1: 192.168.10.0/27 (verter: .1–.30, kringkasting: .31). Subnett 2: 192.168.10.32/27 (verter: .33–.62, kringkasting: .63). Subnett 3: 192.168.10.64/27 (verter: .65–.94, kringkasting: .95). Subnett 4: 192.168.10.96/27 (verter: .97–.126, kringkasting: .127). Vi har brukt 128 av 256 adresser, og 4 subnett med 30 brukbare vertsadresser hver.',
      },
    },
    {
      id: 'elektro-data-vg1-4-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En PC har IP-adressen 10.50.100.200 med subnettmaske 255.255.240.0 (/20). Beregn nettverksadressen, kringkastingsadressen og antall brukbare vertsadresser.',
        solution: 'Subnettmaske: 255.255.240.0 = 11111111.11111111.11110000.00000000. Tredje oktett: 100 i binært = 01100100. AND med 11110000 = 01100000 = 96. Nettverksadresse: 10.50.96.0. Vertsdelen har 12 bit (32−20). Kringkastingsadresse: 10.50.96.0 + 2^12 − 1 = 10.50.96.0 + 4095 → tredje oktett: 96 + 15 = 111, fjerde: 255 → 10.50.111.255. Brukbare vertsadresser: 2^12 − 2 = 4094.',
      },
    },
    {
      id: 'elektro-data-vg1-4-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-3-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilken tjeneste tildeler automatisk IP-adresse, subnettmaske og gateway til enheter i et nettverk?',
        options: [
          { id: 'a', text: 'DNS', correct: false },
          { id: 'b', text: 'HTTP', correct: false },
          { id: 'c', text: 'DHCP', correct: true },
          { id: 'd', text: 'FTP', correct: false },
        ],
        solution: 'DHCP (Dynamic Host Configuration Protocol) tildeler automatisk IP-adresse, subnettmaske, standard gateway og DNS-server til enheter. DNS oversetter domenenavn, HTTP brukes for nettsider, og FTP for filoverføring.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'IPv4-adresse', definition: '32-bits adresse skrevet som fire oktetter, f.eks. 192.168.1.10.' },
    { term: 'Subnettmaske', definition: 'Maske som skiller nettverksdel fra vertsdel i en IP-adresse.' },
    { term: 'Nettverksadresse', definition: 'Adressen som identifiserer selve nettverket (vertsdelen er bare nuller).' },
    { term: 'CIDR', definition: 'Classless Inter-Domain Routing – kompakt notasjon for subnettmaske, f.eks. /24.' },
    { term: 'DNS', definition: 'Domain Name System – oversetter domenenavn til IP-adresser.' },
    { term: 'DHCP', definition: 'Dynamic Host Configuration Protocol – tildeler IP-adresser automatisk.' },
    { term: 'Kringkastingsadresse', definition: 'Spesiell adresse som sender data til alle verter i et subnett.' },
  ],
};

// ============================================================================
// Kapittel 4.4: Trådløs kommunikasjon
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_4_4: TextbookChapter = {
  id: 'elektro-data-vg1-4-4',
  courseId: 'elektro-data-vg1',
  chapterNumber: '4.4',
  title: 'Trådløs kommunikasjon',
  description: 'Forstå WiFi-standarder, Bluetooth, Zigbee, trådløs sikkerhet og radiofrekvenser.',
  estimatedMinutes: 50,
  competenceGoals: ['forklare prinsippene bak trådløs kommunikasjon'],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-4-4-intro',
      type: 'text',
      content: `## Kommunikasjon uten kabler

Trådløs kommunikasjon har revolusjonert måten vi kobler oss til nettverk på. Fra WiFi hjemme til Bluetooth i hodetelefonene og sensorer i smarthus – trådløse teknologier er overalt.

Alle trådløse teknologier bruker **elektromagnetiske bølger** (radiobølger) for å overføre data. Det som skiller de ulike teknologiene er:
- **Frekvensområde** – hvilke radiofrekvenser de bruker
- **Rekkevidde** – hvor langt signalet når
- **Hastighet** – hvor mye data som kan overføres
- **Energiforbruk** – hvor mye strøm som trengs
- **Bruksområde** – hva teknologien er designet for`,
    },

    // BLOKK 1: WiFi (802.11)
    {
      id: 'elektro-data-vg1-4-4-def-1',
      type: 'definition',
      title: 'WiFi (IEEE 802.11)',
      content: `**WiFi** er den vanligste trådløse nettverksteknologien og brukes i hjemme- og bedriftsnettverk. WiFi-standarden heter offisielt IEEE 802.11 og har flere generasjoner:

| Standard | WiFi-generasjon | Frekvens | Maks hastighet |
|----------|----------------|----------|----------------|
| 802.11b | WiFi 1 | 2,4 GHz | 11 Mbps |
| 802.11g | WiFi 3 | 2,4 GHz | 54 Mbps |
| 802.11n | WiFi 4 | 2,4 + 5 GHz | 600 Mbps |
| 802.11ac | WiFi 5 | 5 GHz | 6,9 Gbps |
| 802.11ax | WiFi 6 | 2,4 + 5 + 6 GHz | 9,6 Gbps |

**2,4 GHz** har lengre rekkevidde og trenger bedre gjennom vegger, men har lavere hastighet og mer forstyrrelser (mange enheter bruker dette båndet, inkludert mikrobølgeovner).

**5 GHz** har høyere hastighet og mindre forstyrrelser, men kortere rekkevidde.`,
    },
    {
      id: 'elektro-data-vg1-4-4-example-1',
      type: 'example',
      title: 'Velge WiFi-frekvens',
      problem: 'Du skal sette opp WiFi i et hus med to etasjer. Stueenheten (TV, nettbrett) er i første etasje der ruteren står. Soverommet er i andre etasje. Hvilken frekvens bør du bruke for hver?',
      solution: `**Stue (første etasje, nær ruteren):**
Bruk **5 GHz**-båndet. Siden stuen er nær ruteren, er rekkevidden god nok, og du får høyere hastighet for streaming til TV-en.

**Soverom (andre etasje, gjennom tak/gulv):**
Bruk **2,4 GHz**-båndet. Signalet må gjennom byggematerialer, og 2,4 GHz trenger bedre gjennom vegger og tak. Hastigheten er lavere, men tilstrekkelig for vanlig bruk.

Mange moderne rutere støtter begge frekvensene samtidig (dual-band) og kan automatisk styre enheter til det beste båndet.`,
    },
    {
      id: 'elektro-data-vg1-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken WiFi-frekvens gir best rekkevidde gjennom vegger?',
        options: [
          { id: 'a', text: '5 GHz', correct: false },
          { id: 'b', text: '2,4 GHz', correct: true },
          { id: 'c', text: '6 GHz', correct: false },
          { id: 'd', text: '60 GHz', correct: false },
        ],
        solution: '2,4 GHz gir best rekkevidde og trenger bedre gjennom vegger. Lavere frekvenser har lengre bølgelengde og absorberes mindre av byggematerialer. 5 GHz og 6 GHz gir høyere hastighet, men kortere rekkevidde.',
      },
    },

    // BLOKK 2: Bluetooth og Zigbee
    {
      id: 'elektro-data-vg1-4-4-def-2',
      type: 'definition',
      title: 'Bluetooth',
      content: `**Bluetooth** er en trådløs teknologi designet for kort rekkevidde og lavt energiforbruk. Den opererer på 2,4 GHz-båndet.

| Versjon | Rekkevidde | Hastighet | Bruksområde |
|---------|-----------|-----------|-------------|
| Bluetooth 4.0 (BLE) | ~50 m | 1 Mbps | Fitnesstrackere, sensorer |
| Bluetooth 5.0 | ~200 m | 2 Mbps | IoT, smarthus |
| Bluetooth 5.3 | ~200 m | 2 Mbps | Hodetelefoner, LE Audio |

**BLE** (Bluetooth Low Energy) er en variant som bruker svært lite strøm, og egner seg for sensorer og IoT-enheter som skal gå på batteri i måneder eller år.

Bluetooth bruker **parring** for å opprette en sikker forbindelse mellom to enheter.`,
    },
    {
      id: 'elektro-data-vg1-4-4-def-3',
      type: 'definition',
      title: 'Zigbee',
      content: `**Zigbee** er en trådløs protokoll designet for smarthus og industriell automatisering. Den opererer på 2,4 GHz-båndet.

Kjennetegn:
- **Svært lavt strømforbruk** – sensorer kan gå på batteri i flere år
- **Mesh-nettverk** – enheter kan videresende data for hverandre, noe som øker rekkevidden
- **Lav hastighet** – 250 kbps (nok for sensorer og styresignaler)
- **Mange enheter** – opptil 65 000 enheter i ett nettverk

Typiske bruksområder: lyspærer, temperatursensorer, dørlåser, bevegelsessensorer.

Zigbee konkurrerer med **Z-Wave** og **Thread**, som er lignende protokoller for smarthus.`,
    },
    {
      id: 'elektro-data-vg1-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Sammenlign WiFi, Bluetooth og Zigbee med hensyn til rekkevidde, hastighet, strømforbruk og typisk bruksområde. Lag en oversiktlig tabell.',
        solution: 'WiFi: Rekkevidde 30–100 m, hastighet opptil 9,6 Gbps (WiFi 6), relativt høyt strømforbruk, brukes til internett-tilkobling for PC-er, mobiler og TV. Bluetooth: Rekkevidde 10–200 m, hastighet 1–2 Mbps, lavt strømforbruk (spesielt BLE), brukes til hodetelefoner, mus, fitnesstrackere. Zigbee: Rekkevidde 10–100 m (utvidet med mesh), hastighet 250 kbps, svært lavt strømforbruk, brukes til smarthus-sensorer, lyspærer og automatisering.',
      },
    },

    // BLOKK 3: Trådløs sikkerhet
    {
      id: 'elektro-data-vg1-4-4-def-4',
      type: 'definition',
      title: 'Trådløs sikkerhet (WPA2 og WPA3)',
      content: `Trådløse nettverk er sårbare fordi signalene kan fanges opp av alle innen rekkevidde. Derfor er **kryptering** avgjørende.

Utviklingen av WiFi-sikkerhet:
- **WEP** (1997): Utdatert og svært usikkert – kan knekkes på minutter. **Skal aldri brukes.**
- **WPA** (2003): Forbedring, men fortsatt svakheter.
- **WPA2** (2004): Bruker AES-kryptering. Industristandard i mange år og fortsatt trygt med sterkt passord.
- **WPA3** (2018): Nyeste standard med forbedret sikkerhet:
  - Beskytter mot ordbokangrep (brute-force)
  - Individuell kryptering per bruker i åpne nettverk
  - 192-bits kryptering i enterprise-modus

**Gode råd for WiFi-sikkerhet:**
- Bruk WPA3 eller WPA2 – aldri WEP
- Velg et sterkt passord (minst 12 tegn, blanding av bokstaver, tall og tegn)
- Endre standard admin-passord på ruteren
- Skjul SSID kun hvis nødvendig (gir falsk trygghet)`,
    },
    {
      id: 'elektro-data-vg1-4-4-example-2',
      type: 'example',
      title: 'Hvorfor er WEP usikkert?',
      problem: 'Forklar hvorfor WEP-kryptering ikke lenger bør brukes.',
      solution: `WEP (Wired Equivalent Privacy) har flere alvorlige svakheter:

1. **Kort nøkkellengde**: WEP bruker en 40- eller 104-bits nøkkel, som er for kort etter moderne standarder.
2. **Gjenbruk av initialiseringsvektor (IV)**: IV-en er bare 24 bit lang, noe som betyr at den gjenbrukes ofte. Ved å samle nok pakker med samme IV kan en angriper beregne krypteringsnøkkelen.
3. **Svak integritetssjekk**: CRC-32 er ikke kryptografisk sikker og kan manipuleres.

Med moderne verktøy kan en WEP-nøkkel knekkes på **under 5 minutter** med nok trafikk. Derfor skal man alltid bruke **WPA2 eller WPA3** i stedet.`,
    },
    {
      id: 'elektro-data-vg1-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken WiFi-sikkerhetsstandard bør du bruke i dag?',
        options: [
          { id: 'a', text: 'WEP', correct: false },
          { id: 'b', text: 'WPA', correct: false },
          { id: 'c', text: 'WPA2 eller WPA3', correct: true },
          { id: 'd', text: 'Ingen kryptering', correct: false },
        ],
        solution: 'WPA2 eller WPA3 bør brukes. WPA3 er nyest og sikrest, men WPA2 med AES-kryptering og sterkt passord er fortsatt trygt. WEP og WPA (første versjon) har kjente svakheter og skal ikke brukes.',
      },
    },

    // Oppsummering
    {
      id: 'elektro-data-vg1-4-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **WiFi (802.11)** er den vanligste trådløse nettverksteknologien, med generasjoner fra WiFi 1 til WiFi 6.
- **2,4 GHz** gir bedre rekkevidde, **5 GHz** gir høyere hastighet.
- **Bluetooth** er designet for kort rekkevidde og lavt energiforbruk (BLE).
- **Zigbee** egner seg for smarthus med svært lavt strømforbruk og mesh-nettverk.
- **WPA2/WPA3** er de anbefalte sikkerhetsstandardene for WiFi – WEP skal aldri brukes.
- Trådløse teknologier velges basert på krav til rekkevidde, hastighet, strømforbruk og antall enheter.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et nytt kontorbygg med 3 etasjer skal ha trådløst nettverk. Hver etasje er ca. 500 m². Det er ca. 150 ansatte. Beskriv hvilke hensyn du må ta ved planlegging av WiFi-dekning, og foreslå en løsning med tanke på frekvensvalg, antall aksesspunkter og sikkerhet.',
        solution: 'Hensyn: Antall brukere per aksesspunkt (anbefalt maks 25–30 per AP), dekningsområde per AP (ca. 100–150 m² innendørs for god 5 GHz-dekning), interferens mellom AP-er (bruk ikke-overlappende kanaler), og byggematerialer som demper signal. Løsning: Bruk ca. 4–5 aksesspunkter per etasje (totalt 12–15) med WiFi 6 (802.11ax) for best kapasitet. Bruk 5 GHz som primærbånd for hastighet og 2,4 GHz som reservebånd. Plasser AP-er i tak med jevn avstand. Sett opp WPA3-Enterprise med 802.1X-autentisering (brukernavn/passord), lag eget gjestenettverk med WPA3-Personal, og sørg for at AP-ene er på separate kanaler (1, 6, 11 for 2,4 GHz) for å unngå interferens.',
      },
    },
    {
      id: 'elektro-data-vg1-4-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'middels',
        task: 'Du skal bygge et smarthus-system med 20 sensorer (temperatur, bevegelse, dør/vindu) og 10 smarte lyspærer. Ville du valgt WiFi, Bluetooth eller Zigbee for dette systemet? Begrunn svaret.',
        solution: 'Zigbee er det beste valget for dette systemet. Begrunnelse: 1) Lavt strømforbruk – batteridrevne sensorer kan vare i flere år, i motsetning til WiFi som krever mer strøm. 2) Mesh-nettverk – de 30 enhetene kan videresende signaler for hverandre, noe som gir god dekning i hele huset uten ekstra rutere. 3) Skalerbarhet – Zigbee støtter opptil 65 000 enheter, mens Bluetooth har begrensninger. 4) Lav hastighet er ikke et problem – sensorer sender bare små datamengder. WiFi ville brukt for mye strøm, og Bluetooth mangler mesh-nettverk i standard versjon og er begrenset i antall samtidige forbindelser.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'WiFi (802.11)', definition: 'Trådløs nettverksstandard for lokale nettverk, med flere generasjoner.' },
    { term: '2,4 GHz', definition: 'Frekvensbånd med lang rekkevidde, men lavere hastighet og mer interferens.' },
    { term: '5 GHz', definition: 'Frekvensbånd med høyere hastighet, men kortere rekkevidde.' },
    { term: 'Bluetooth', definition: 'Trådløs teknologi for kort rekkevidde med lavt energiforbruk.' },
    { term: 'BLE', definition: 'Bluetooth Low Energy – variant med ekstra lavt strømforbruk for IoT.' },
    { term: 'Zigbee', definition: 'Trådløs protokoll for smarthus med mesh-nettverk og lavt strømforbruk.' },
    { term: 'WPA2/WPA3', definition: 'Sikkerhetsstandarder for WiFi-kryptering.' },
  ],
};

// ============================================================================
// Kapittel 4.5: Serielle kommunikasjonsprotokoller
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_4_5: TextbookChapter = {
  id: 'elektro-data-vg1-4-5',
  courseId: 'elektro-data-vg1',
  chapterNumber: '4.5',
  title: 'Serielle kommunikasjonsprotokoller',
  description: 'Lær om UART, SPI og I2C – de viktigste serielle protokollene i elektronikk.',
  estimatedMinutes: 55,
  competenceGoals: ['forklare og bruke serielle kommunikasjonsprotokoller'],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-4-5-intro',
      type: 'text',
      content: `## Seriell kommunikasjon mellom komponenter

Inne i elektroniske enheter må komponenter kommunisere med hverandre. En mikrokontroller (som Arduino) må for eksempel lese data fra en sensor, sende tekst til en skjerm eller kommunisere med en annen mikrokontroller. Til dette bruker vi **serielle kommunikasjonsprotokoller**.

**Seriell kommunikasjon** betyr at data sendes **én bit om gangen** over én eller noen få ledere. Motsetningen er **parallell kommunikasjon**, som sender flere bit samtidig (f.eks. gamle skriverkabler).

De tre viktigste serielle protokollene i elektronikk er:
- **UART** – enkel, asynkron, punkt-til-punkt
- **SPI** – rask, full-duplex, master/slave
- **I2C** – fleksibel, to ledere, mange enheter`,
    },

    // BLOKK 1: UART
    {
      id: 'elektro-data-vg1-4-5-def-1',
      type: 'definition',
      title: 'UART (Universal Asynchronous Receiver/Transmitter)',
      content: `**UART** er den enkleste serielle protokollen. Den er **asynkron**, som betyr at den ikke bruker et eget klokkesignal. I stedet må sender og mottaker være enige om **baudrate** (hastighet).

Kjennetegn:
- **To ledere**: TX (sender) og RX (mottaker) – pluss felles jord (GND)
- **Asynkron**: Ingen klokkesignal – baudraten må settes likt på begge sider
- **Punkt-til-punkt**: Kobler sammen kun to enheter
- **Full-duplex**: Kan sende og motta samtidig (på separate ledere)

Vanlige baudrater: 9600, 19200, 38400, 57600, **115200** bps

Et UART-datapakke (frame) ser slik ut:
- 1 startbit (alltid 0)
- 8 databits (selve informasjonen)
- 0 eller 1 paritetsbit (valgfri feilsjekk)
- 1–2 stoppbit (alltid 1)`,
    },
    {
      id: 'elektro-data-vg1-4-5-example-1',
      type: 'example',
      title: 'UART-kommunikasjon med Arduino',
      problem: 'Du kobler en GPS-modul til en Arduino via UART. GPS-modulen sender data med baudrate 9600. Hva må du passe på?',
      solution: `For at kommunikasjonen skal fungere må du:

1. **Sette riktig baudrate**: I Arduino-koden skriver du \`Serial.begin(9600)\` for å matche GPS-modulens hastighet.
2. **Koble riktig**: GPS-modulens TX → Arduinos RX, og GPS-modulens RX → Arduinos TX. Linjene krysses.
3. **Felles jord**: Koble GND-pinnene sammen.
4. **Spenningsnivå**: Sjekk at begge bruker 3,3V eller 5V logikk. Hvis GPS bruker 3,3V og Arduino bruker 5V, trenger du en **nivåkonverter** for å unngå skade.

Hvis baudraten er feil, vil du se uleselig «søppeltekst» i seriemonitoren.`,
    },
    {
      id: 'elektro-data-vg1-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr det at UART er asynkron?',
        options: [
          { id: 'a', text: 'Den sender data bare én vei', correct: false },
          { id: 'b', text: 'Den bruker ikke et felles klokkesignal', correct: true },
          { id: 'c', text: 'Den kan bare koble til én enhet om gangen', correct: false },
          { id: 'd', text: 'Den sender alle bit samtidig', correct: false },
        ],
        solution: 'Asynkron betyr at det ikke finnes et felles klokkesignal mellom sender og mottaker. I stedet må begge parter være konfigurert med samme baudrate (hastighet) for at dataene skal tolkes riktig.',
      },
    },

    // BLOKK 2: SPI
    {
      id: 'elektro-data-vg1-4-5-def-2',
      type: 'definition',
      title: 'SPI (Serial Peripheral Interface)',
      content: `**SPI** er en rask, synkron protokoll som bruker et klokkesignal. Den følger **master/slave**-prinsippet der én enhet (master) styrer kommunikasjonen.

SPI bruker **4 ledere**:
- **MOSI** (Master Out Slave In): Data fra master til slave
- **MISO** (Master In Slave Out): Data fra slave til master
- **SCK** (Serial Clock): Klokkesignal fra master
- **SS/CS** (Slave Select / Chip Select): Velger hvilken slave som er aktiv (én per slave)

Kjennetegn:
- **Synkron**: Klokkesignal styrer overføringen
- **Full-duplex**: Sender og mottar data samtidig
- **Høy hastighet**: Typisk 1–50 MHz
- **Flere slaver**: Trenger én SS-linje per slave-enhet

Typiske bruksområder: SD-kort, TFT-skjermer, rask sensorkommunikasjon.`,
    },
    {
      id: 'elektro-data-vg1-4-5-example-2',
      type: 'example',
      title: 'SPI med flere slaver',
      problem: 'Du har en Arduino (master) koblet til en temperatursensor og et SD-kort via SPI. Forklar hvordan masteren velger hvilken enhet den kommuniserer med.',
      solution: `SPI bruker **Slave Select (SS)**-linjer for å velge aktiv enhet:

- Temperatursensoren er koblet til SS-pinne 10
- SD-kortet er koblet til SS-pinne 4
- MOSI, MISO og SCK deles av begge

Når Arduinoen vil lese temperatur:
1. Sett SS-pinne 10 **LOW** (aktiver sensor)
2. Sett SS-pinne 4 **HIGH** (deaktiver SD-kort)
3. Send/motta data via MOSI/MISO

Når Arduinoen vil skrive til SD-kort:
1. Sett SS-pinne 4 **LOW** (aktiver SD-kort)
2. Sett SS-pinne 10 **HIGH** (deaktiver sensor)
3. Send/motta data

Bare én slave kan være aktiv om gangen. Lav (LOW) = aktiv, høy (HIGH) = inaktiv.`,
    },
    {
      id: 'elektro-data-vg1-4-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar hva som menes med «full-duplex» kommunikasjon i SPI, og hvordan dette skiller seg fra «half-duplex».',
        solution: 'Full-duplex betyr at data kan sendes begge veier samtidig. I SPI skjer dette via to separate datalinjer: MOSI (master til slave) og MISO (slave til master). Mens masteren sender en byte via MOSI, mottar den samtidig en byte via MISO. Half-duplex betyr at data kan sendes begge veier, men ikke samtidig – enhetene må «vente på tur». I2C er et eksempel på half-duplex fordi den bare har én datalinje (SDA) som deles.',
      },
    },

    // BLOKK 3: I2C
    {
      id: 'elektro-data-vg1-4-5-def-3',
      type: 'definition',
      title: 'I2C (Inter-Integrated Circuit)',
      content: `**I2C** (uttales «I-squared-C» eller «I-to-C») er en synkron protokoll som bruker bare **to ledere** for å kommunisere med mange enheter.

De to lederne:
- **SDA** (Serial Data): Datalinje (toveis)
- **SCL** (Serial Clock): Klokkesignal fra master

Kjennetegn:
- **Synkron**: Klokkesignal styrer overføringen
- **Half-duplex**: Data sendes én vei om gangen på SDA
- **Adressebasert**: Hver enhet har en unik 7-bits adresse (0x00–0x7F)
- **Multi-master/multi-slave**: Flere mastere og opptil 128 slaver på samme buss
- **Moderat hastighet**: Standard 100 kHz, fast mode 400 kHz, high-speed 3,4 MHz

Typiske bruksområder: sensorer (temperatur, akselerometer), OLED-skjermer, sanntidsklokker (RTC), EEPROM-minne.`,
    },
    {
      id: 'elektro-data-vg1-4-5-example-3',
      type: 'example',
      title: 'Adressering i I2C',
      problem: 'Du har tre I2C-sensorer koblet til en Arduino: en temperatursensor (adresse 0x48), et akselerometer (adresse 0x68) og en OLED-skjerm (adresse 0x3C). Forklar hvordan masteren velger riktig enhet.',
      solution: `I I2C brukes **adresser** i stedet for separate select-linjer:

1. Alle tre enhetene er koblet til de **samme to lederne** (SDA og SCL).
2. Når Arduinoen vil lese temperatur, sender den en **startbetingelse** fulgt av adressen **0x48** og en lese-bit.
3. Kun temperatursensoren (som har adresse 0x48) svarer – de andre ignorerer meldingen.
4. Etter kommunikasjonen sender Arduinoen en **stoppbetingelse**.

Fordelen med I2C er at du trenger bare 2 ledere uansett hvor mange enheter du har (opptil 128 med 7-bits adresser). Ulempen er at det er langsommere enn SPI og at adresser kan kollidere hvis to enheter har samme fabrikkadresse.`,
    },
    {
      id: 'elektro-data-vg1-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvor mange ledere trenger I2C for datakommunikasjon (utenom jord)?',
        options: [
          { id: 'a', text: '1 (data)', correct: false },
          { id: 'b', text: '2 (data + klokke)', correct: true },
          { id: 'c', text: '3 (data + klokke + select)', correct: false },
          { id: 'd', text: '4 (MOSI + MISO + klokke + select)', correct: false },
        ],
        solution: 'I2C bruker bare 2 ledere: SDA (seriell data) og SCL (seriell klokke). Alle enheter deler disse to linjene og identifiseres med unike adresser. Alternativ d (4 ledere) beskriver SPI.',
      },
    },

    // Oppsummering
    {
      id: 'elektro-data-vg1-4-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

| Egenskap | UART | SPI | I2C |
|----------|------|-----|-----|
| Ledere | 2 (TX, RX) | 4+ (MOSI, MISO, SCK, SS) | 2 (SDA, SCL) |
| Synkron/asynkron | Asynkron | Synkron | Synkron |
| Duplex | Full-duplex | Full-duplex | Half-duplex |
| Hastighet | Opptil 115200 bps | 1–50 MHz | 100 kHz – 3,4 MHz |
| Antall enheter | 2 (punkt-til-punkt) | 1 master + flere slaver | Flere mastere + slaver |
| Adressering | Ingen | Slave Select-linjer | 7-bits adresser |

- **UART** er enklest og brukes ofte for debugging og GPS-moduler.
- **SPI** er raskest og brukes for skjermer og minnekort.
- **I2C** er mest fleksibel med tanke på antall enheter og brukes for sensorer.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-4-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du skal designe et værstasjonsystem med Arduino. Systemet trenger: en temperatursensor, en luftfuktighetssensor, en barometrisk trykksensor, en OLED-skjerm for visning, og et SD-kort for logging. Hvilken seriell protokoll ville du valgt for hver komponent, og begrunn valgene.',
        solution: 'Temperatursensor (f.eks. TMP102): I2C – lav datamengde, enkel tilkobling med bare 2 ledere, sensoren har egen I2C-adresse. Luftfuktighetssensor (f.eks. SHT31): I2C – samme buss som temperatursensoren, ulike adresser, ingen ekstra ledere. Trykksensor (f.eks. BMP280): I2C – kan dele buss med de andre sensorene, typisk I2C-adresse 0x76. OLED-skjerm (f.eks. SSD1306): I2C – praktisk fordi den deler bussen, og datamengden er håndterbar. SD-kort: SPI – krever høy hastighet for skriving av loggfiler, og SD-kort bruker SPI-grensesnitt som standard. Totalt: 4 enheter på I2C-bussen (bare 2 ledere for alle!) og SD-kortet på SPI. Effektiv bruk av pinner og ledere.',
      },
    },
    {
      id: 'elektro-data-vg1-4-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar hva som skjer hvis to UART-enheter er konfigurert med ulik baudrate (f.eks. 9600 og 115200). Hva vil mottakeren se?',
        solution: 'Hvis sender og mottaker har ulik baudrate, vil mottakeren lese bitene på feil tidspunkter. Mottakeren sampler signalet med sin egen klokke (115200 Hz), mens senderen endrer signalet med en annen frekvens (9600 Hz). Resultatet er at mottakeren tolker bitene feil og får tilfeldig «søppeldata» – uleselige tegn eller ingenting i det hele tatt. UART har ingen klokkesignal (asynkron), så det finnes ingen mekanisme for å automatisk synkronisere. Løsningen er å sørge for at begge enheter bruker nøyaktig samme baudrate.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'UART', definition: 'Universal Asynchronous Receiver/Transmitter – enkel asynkron seriell protokoll.' },
    { term: 'Baudrate', definition: 'Antall symboler (bits) per sekund i seriell kommunikasjon.' },
    { term: 'SPI', definition: 'Serial Peripheral Interface – rask synkron protokoll med 4+ ledere.' },
    { term: 'I2C', definition: 'Inter-Integrated Circuit – synkron to-leder protokoll med adressering.' },
    { term: 'Full-duplex', definition: 'Kommunikasjon begge veier samtidig.' },
    { term: 'Half-duplex', definition: 'Kommunikasjon begge veier, men ikke samtidig.' },
    { term: 'Master/slave', definition: 'Kommunikasjonsmodell der master styrer og slave svarer.' },
  ],
};

// ============================================================================
// Kapittel 4.6: Nettverksutstyr og kabelsystemer
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_4_6: TextbookChapter = {
  id: 'elektro-data-vg1-4-6',
  courseId: 'elektro-data-vg1',
  chapterNumber: '4.6',
  title: 'Nettverksutstyr og kabelsystemer',
  description: 'Lær om svitsjer, rutere, aksesspunkter, Ethernet-kabler, fiberoptikk og patchepanel.',
  estimatedMinutes: 50,
  competenceGoals: ['identifisere og forklare nettverkskomponenter og kabelsystemer'],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-4-6-intro',
      type: 'text',
      content: `## Byggesteinene i et nettverk

Et datanettverk består av mer enn bare datamaskiner. Det trengs **aktive komponenter** som behandler og videresender data, og **passive komponenter** som kabler og kontakter som frakter signalene fysisk.

I dette kapittelet ser vi på det viktigste nettverksutstyret du møter i et kontor- eller hjemmenettverk, og kabelsystemene som binder det hele sammen. Enten du jobber med å installere et nytt nettverk eller feilsøke et eksisterende, er det viktig å kjenne til disse komponentene.`,
    },

    // BLOKK 1: Svitsj og ruter
    {
      id: 'elektro-data-vg1-4-6-def-1',
      type: 'definition',
      title: 'Svitsj (switch)',
      content: `En **svitsj** er en nettverkskomponent som kobler enheter sammen i et **lokalt nettverk (LAN)**. Den opererer på **lag 2** (datalinklaget) i OSI-modellen.

Slik fungerer en svitsj:
- Den lærer MAC-adressene til enhetene som er koblet til hver port
- Når en ramme (frame) kommer inn, sjekker svitsjen destinasjons-MAC-adressen
- Rammen sendes **kun** til den porten der mottakerenheten er tilkoblet
- Dette er mer effektivt enn en hub, som sender data til alle porter

Typer svitsjer:
- **Unmanaged**: Enkel plug-and-play, ingen konfigurasjon
- **Managed**: Kan konfigureres med VLAN, QoS, portkontroll osv.
- **PoE-svitsj**: Kan levere strøm over Ethernet-kabelen (Power over Ethernet)`,
    },
    {
      id: 'elektro-data-vg1-4-6-def-2',
      type: 'definition',
      title: 'Ruter (router)',
      content: `En **ruter** kobler sammen **forskjellige nettverk** og videresender pakker mellom dem. Den opererer på **lag 3** (nettverkslaget) i OSI-modellen.

Funksjoner:
- **Ruting**: Velger beste vei for datapakker mellom nettverk
- **NAT** (Network Address Translation): Oversetter mellom private og offentlige IP-adresser
- **DHCP-server**: Tildeler IP-adresser til enheter
- **Brannmur**: Grunnleggende sikkerhetsfunksjon

I hjemmenettverket er ruteren typisk den boksen du får fra internettleverandøren. Den inneholder ofte både ruter, svitsj, WiFi-aksesspunkt og modem i én enhet.

**Forskjellen på svitsj og ruter:**
- Svitsj kobler enheter i **samme** nettverk (bruker MAC-adresser)
- Ruter kobler **forskjellige** nettverk (bruker IP-adresser)`,
    },
    {
      id: 'elektro-data-vg1-4-6-example-1',
      type: 'example',
      title: 'Dataflyt i et kontornettverk',
      problem: 'PC-A (192.168.1.10) skal sende en fil til PC-B (192.168.1.20) i samme nettverk. Deretter skal PC-A besøke nrk.no (internett). Forklar rollen til svitsj og ruter i hvert tilfelle.',
      solution: `**Fil til PC-B (lokalt nettverk):**
1. PC-A lager en ramme med PC-Bs MAC-adresse som destinasjon.
2. **Svitsjen** mottar rammen, sjekker MAC-adressen og sender den direkte til porten der PC-B er tilkoblet.
3. Ruteren er **ikke involvert** fordi trafikken er innenfor samme nettverk.

**Besøke nrk.no (internett):**
1. PC-A lager en pakke med NRKs IP-adresse som destinasjon.
2. Siden IP-adressen er utenfor det lokale nettverket, sendes pakken til **standard gateway** (ruteren).
3. **Svitsjen** videresender rammen til ruterens port.
4. **Ruteren** bruker NAT for å erstatte PC-As private IP med sin offentlige IP, og sender pakken videre til internett.
5. Svaret følger ruten tilbake.`,
    },
    {
      id: 'elektro-data-vg1-4-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket OSI-lag opererer en svitsj primært på?',
        options: [
          { id: 'a', text: 'Lag 1 – Fysisk lag', correct: false },
          { id: 'b', text: 'Lag 2 – Datalinklaget', correct: true },
          { id: 'c', text: 'Lag 3 – Nettverkslaget', correct: false },
          { id: 'd', text: 'Lag 4 – Transportlaget', correct: false },
        ],
        solution: 'En svitsj opererer på lag 2 (datalinklaget) og bruker MAC-adresser for å videresende rammer til riktig port. En ruter opererer på lag 3 (nettverkslaget) og bruker IP-adresser.',
      },
    },

    // BLOKK 2: Aksesspunkt
    {
      id: 'elektro-data-vg1-4-6-def-3',
      type: 'definition',
      title: 'Trådløst aksesspunkt (AP)',
      content: `Et **trådløst aksesspunkt** (access point / AP) gir trådløse enheter tilgang til det kablede nettverket. Det fungerer som en «bro» mellom WiFi og Ethernet.

Kjennetegn:
- Kobles til svitsjen med Ethernet-kabel
- Sender ut WiFi-signal (SSID) som enheter kan koble seg til
- Kan ofte strømforsynes via PoE (Power over Ethernet)
- Moderne AP-er støtter flere SSID-er (f.eks. et for ansatte og et for gjester)

Plassering er viktig:
- Monter i tak for best dekning
- Unngå nær metalloverflater og betongvegger
- Bruk kanalplanlegging for å unngå interferens mellom nærliggende AP-er
- Beregn ca. ett AP per 100–150 m² for god innendørs dekning`,
    },
    {
      id: 'elektro-data-vg1-4-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar forskjellen mellom en ruter med innebygd WiFi og et frittstående trådløst aksesspunkt (AP). I hvilke situasjoner vil du bruke et frittstående AP?',
        solution: 'En hjemmeruter med WiFi kombinerer ruter, svitsj og AP i én boks – praktisk for små nettverk. Et frittstående AP er en separat enhet som kun gir WiFi-tilgang og kobles til en eksisterende svitsj. Frittstående AP brukes når: 1) Du trenger WiFi-dekning i et stort område (f.eks. kontor) og trenger flere AP-er plassert strategisk. 2) Du vil ha sentralisert styring av mange AP-er (managed WiFi). 3) Du trenger bedre ytelse og kapasitet enn en hjemmeruter kan gi. 4) Du vil montere AP-er i tak med PoE-strømforsyning for ryddig installasjon.',
      },
    },

    // BLOKK 3: Ethernet-kabler
    {
      id: 'elektro-data-vg1-4-6-def-4',
      type: 'definition',
      title: 'Ethernet-kabler (TP-kabel)',
      content: `**Ethernet-kabler** (tvunnet parkabel / TP) er den vanligste kabeltypen i lokale nettverk. De bruker **RJ45-kontakter** og inneholder 4 par med tvunnede kobbertråder.

| Kategori | Maks hastighet | Maks lengde | Bruksområde |
|----------|---------------|-------------|-------------|
| Cat 5 | 100 Mbps | 100 m | Utdatert |
| **Cat 5e** | 1 Gbps | 100 m | Vanlig i eldre nettverk |
| **Cat 6** | 10 Gbps (55 m) | 100 m | Standard i nye bygg |
| Cat 6a | 10 Gbps | 100 m | Bedriftsnettverk |
| Cat 7 | 10 Gbps | 100 m | Skjermet, spesialkontakter |
| Cat 8 | 25–40 Gbps | 30 m | Datasentre |

**Skjermingstyper:**
- **UTP** (Unshielded Twisted Pair): Uskjermet – vanligst, billigst
- **STP/FTP**: Skjermet – bedre mot elektromagnetisk støy, brukes i industrielle miljøer

**Kabelrekkefølge:**
- **T568A** og **T568B** er de to standardene for rekkefølgen på trådene i RJ45-kontakten
- Rett kabel: Samme standard i begge ender
- Krysset kabel: Ulik standard i hver ende (brukes sjelden i dag – auto-MDI/X)`,
    },
    {
      id: 'elektro-data-vg1-4-6-example-2',
      type: 'example',
      title: 'Velge riktig kabelkategori',
      problem: 'En bedrift skal kable et nytt kontorbygg med 50 arbeidsplasser. De planlegger for 1 Gbps til hver arbeidsplass i dag, men vil ha mulighet for oppgradering til 10 Gbps i fremtiden. Hvilken kabeltype anbefaler du?',
      solution: `Anbefaling: **Cat 6a**

Begrunnelse:
- **Cat 5e** støtter kun 1 Gbps – ingen rom for oppgradering
- **Cat 6** støtter 10 Gbps, men bare over 55 meter – mange kabelstrekk i et kontorbygg kan være lengre
- **Cat 6a** støtter 10 Gbps over fulle 100 meter – fremtidssikkert
- **Cat 7/8** er dyrere og unødvendig for et kontor

Prisforskjellen mellom Cat 6 og Cat 6a er moderat, men kostnadene ved å legge ny kabel senere er store (gulv/tak må åpnes). Det er mye billigere å legge riktig kabel med én gang.`,
    },
    {
      id: 'elektro-data-vg1-4-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-6-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er maksimal lengde for en Ethernet-kabel (Cat 5e/6/6a) fra svitsj til enhet?',
        options: [
          { id: 'a', text: '50 meter', correct: false },
          { id: 'b', text: '100 meter', correct: true },
          { id: 'c', text: '200 meter', correct: false },
          { id: 'd', text: '500 meter', correct: false },
        ],
        solution: 'Ethernet-kabler (TP-kabel) har en maksimal lengde på 100 meter fra svitsj til enhet. Over 100 meter svekkes signalet for mye og gir feil. For lengre avstander brukes fiberoptikk eller ekstra svitsjer/repeatere.',
      },
    },

    // BLOKK 4: Fiberoptikk og patchepanel
    {
      id: 'elektro-data-vg1-4-6-def-5',
      type: 'definition',
      title: 'Fiberoptikk',
      content: `**Fiberoptisk kabel** overfører data som **lys** gjennom en tynn glasskjerne. Fiber brukes for høye hastigheter og lange avstander.

Det finnes to typer:
- **Singlemode (SM)**: Veldig tynn kjerne (9 µm), laser sender lys i én retning. Rekkevidde opptil **100 km**. Brukes mellom bygninger og over lange avstander.
- **Multimode (MM)**: Tykkere kjerne (50/62,5 µm), LED sender lys i flere retninger. Rekkevidde opptil **2 km**. Brukes innenfor bygninger og datasentre.

Fordeler med fiber:
- **Enorm hastighet**: 100 Gbps og mer
- **Lang rekkevidde**: Opptil 100 km uten forsterker
- **Immun mot elektromagnetisk støy**: Lys påvirkes ikke av elektriske felter
- **Tynnere og lettere**: Enn kobberkabler

Ulemper: Dyrere, vanskeligere å terminere (spleise), mer skjøre kontakter.`,
    },
    {
      id: 'elektro-data-vg1-4-6-def-6',
      type: 'definition',
      title: 'Patchepanel og strukturert kabling',
      content: `Et **patchepanel** er et sentralt koblingspunkt i et nettverksrom der alle nettverkskabler samles. Det gjør det enkelt å organisere, endre og feilsøke tilkoblinger.

**Strukturert kabling** er et system for å organisere nettverkskabler i en bygning:

1. **Vegguttak**: RJ45-kontakt i veggen ved hver arbeidsplass
2. **Horisontal kabling**: Fast kabel fra vegguttak til nettverksrom (i vegger/tak)
3. **Patchepanel**: Alle horisontale kabler termineres her
4. **Patchekabel**: Kort kabel fra patchepanel til svitsj
5. **Svitsj**: Kobler alle enhetene sammen

Fordeler med strukturert kabling:
- Ryddig og oversiktlig
- Enkelt å flytte brukere (bare bytte patchekabel)
- Enklere feilsøking
- Profesjonelt og holdbart`,
    },
    {
      id: 'elektro-data-vg1-4-6-example-3',
      type: 'example',
      title: 'Kabelsystem i et kontorbygg',
      problem: 'Beskriv den fysiske veien en datapakke tar fra en PC på kontoret til internett, med tanke på kabler og nettverksutstyr.',
      solution: `Den fysiske veien fra PC til internett:

1. **Patchekabel** (Cat 6, 1–3 m): Fra PC til vegguttaket ved skrivebordet.
2. **Horisontal kabling** (Cat 6a, 10–90 m): Fast installert kabel i vegg/himling fra vegguttaket til nettverksrommet.
3. **Patchepanel**: Den horisontale kabelen termineres i et patchepanel.
4. **Patchekabel** (Cat 6, 1–2 m): Fra patchepanelet til **svitsjen**.
5. **Svitsj**: Videresender rammen til ruterens port.
6. **Patchekabel** (Cat 6): Fra svitsj til **ruter**.
7. **Ruter**: Oversetter private IP-adresser (NAT) og sender pakken videre.
8. **Fiberkabel**: Fra ruteren til internettleverandørens utstyr (ofte fiberoptikk for høy hastighet).

Totalt passerer datapakken typisk 4 kabelstrekk og 2–3 aktive nettverkskomponenter bare for å komme ut av bygget.`,
    },

    // Oppsummering
    {
      id: 'elektro-data-vg1-4-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

- En **svitsj** kobler enheter i samme lokale nettverk (lag 2, MAC-adresser).
- En **ruter** kobler forskjellige nettverk sammen (lag 3, IP-adresser).
- Et **trådløst aksesspunkt** gir WiFi-tilgang til det kablede nettverket.
- **Ethernet-kabler** (Cat 5e/6/6a) er standarden for kabling, med maks 100 m lengde.
- **Fiberoptikk** bruker lys og gir høyest hastighet og lengst rekkevidde.
- **Strukturert kabling** med patchepanel gir ryddig og profesjonell nettverksinstallasjon.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-4-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En ny skole med 3 bygninger skal få nettverk. Hovedbygget har serverrom og internettilkobling. De to andre bygningene er henholdsvis 80 m og 250 m unna. Lag en enkel nettverksplan som inkluderer: kabeltyper mellom bygningene, nettverksutstyr i hvert bygg, og begrunnelse for valgene.',
        solution: 'Kabling mellom bygninger: Hovedbygg til bygg 2 (80 m): Kan bruke Cat 6a kobber (under 100 m) ELLER multimode fiber for fremtidssikring. Anbefaler fiber for å unngå jordfeil mellom bygninger. Hovedbygg til bygg 3 (250 m): MÅ bruke fiberoptikk (multimode rekker opptil 2 km) da kobber kun støtter 100 m. Utstyr per bygg: Hovedbygg: kjernesvitsj (managed), ruter til internett, patchepanel, servere. Bygg 2: managed svitsj med fiber-uplink, patchepanel, trådløse aksesspunkter. Bygg 3: managed svitsj med fiber-uplink, patchepanel, trådløse aksesspunkter. Intern kabling i alle bygg: Cat 6a fra vegguttak til patchepanel (strukturert kabling). Begrunnelse: Fiber mellom bygninger gir høy hastighet, lang rekkevidde og galvanisk isolasjon (beskytter mot lynnedslag og jordfeil). Managed svitsjer gir mulighet for VLAN og overvåking.',
      },
    },
    {
      id: 'elektro-data-vg1-4-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar hvorfor fiberoptisk kabel er immun mot elektromagnetisk interferens (EMI), og gi to praktiske situasjoner der dette er en viktig fordel fremfor kobberkabler.',
        solution: 'Fiberoptikk overfører data som lyspulser gjennom en glasskjerne, ikke som elektriske signaler. Lys påvirkes ikke av elektromagnetiske felter, i motsetning til kobberledere der strøm kan induseres av nærliggende støykilder. Situasjon 1: I en fabrikk eller industrihall med store elektromotorer, sveisemaskiner og frekvensstyrte drifter. Disse genererer kraftig EMI som kan forstyrre kobberkabler og gi datafeil. Fiber fungerer upåvirket. Situasjon 2: Kabling mellom bygninger (utendørs). Kobberkabler kan fungere som lynavledere og føre farlig spenning inn i nettverksutstyr ved lyn. Fiber gir fullstendig galvanisk isolasjon mellom bygningene.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Svitsj', definition: 'Nettverkskomponent som kobler enheter i et LAN ved hjelp av MAC-adresser (lag 2).' },
    { term: 'Ruter', definition: 'Nettverkskomponent som kobler ulike nettverk ved hjelp av IP-adresser (lag 3).' },
    { term: 'Aksesspunkt (AP)', definition: 'Enhet som gir trådløs tilgang til det kablede nettverket.' },
    { term: 'Cat 5e/6/6a', definition: 'Kategorier av Ethernet-kabler med ulik hastighet og kvalitet.' },
    { term: 'Fiberoptikk', definition: 'Kabel som overfører data som lys, gir høy hastighet og lang rekkevidde.' },
    { term: 'Patchepanel', definition: 'Sentralt koblingspunkt der nettverkskabler termineres i et nettverksrom.' },
    { term: 'PoE', definition: 'Power over Ethernet – strømforsyning via nettverkskabelen.' },
  ],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const CHAPTERS_ELEKTRO_DATA_VG1_KAP4_NY = [
  CHAPTER_ELEKTRO_DATA_VG1_4_2,
  CHAPTER_ELEKTRO_DATA_VG1_4_3,
  CHAPTER_ELEKTRO_DATA_VG1_4_4,
  CHAPTER_ELEKTRO_DATA_VG1_4_5,
  CHAPTER_ELEKTRO_DATA_VG1_4_6,
];
