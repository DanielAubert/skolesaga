/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Informasjonsteknologi 1 (IT 1) VG2
 *
 * Seksjon 4: Webteknologi – HTML og CSS (Kapittel 4.1–4.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4.1: Internett og webbens oppbygging
// ============================================================================

export const CHAPTER_IT_1_4_1: TextbookChapter = {
  id: 'it-1-4-1',
  courseId: 'it-1',
  chapterNumber: '4.1',
  title: 'Internett og webbens oppbygging',
  description: 'Forstå hvordan internett og webben fungerer, inkludert HTTP-protokollen, DNS-systemet og klient-server-modellen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for grunnleggende teknologier bak internett og webben',
    'forklare hvordan kommunikasjon mellom klient og server foregår',
  ],
  keyTerms: [
    { term: 'Internett', definition: 'Et globalt nettverk av sammenkoblede datamaskiner som kommuniserer ved hjelp av standardiserte protokoller. Internett er infrastrukturen som bærer tjenester som webben, e-post og strømming. Det ble opprinnelig utviklet som ARPANET på 1960-tallet av det amerikanske forsvaret, og har siden vokst til å koble sammen milliarder av enheter over hele verden. Internett eies ikke av noen enkelt aktør, men styres gjennom internasjonale standardorganisasjoner som IETF og W3C.' },
    { term: 'World Wide Web', definition: 'Et informasjonssystem bygd på toppen av internett der dokumenter og ressurser identifiseres med URL-er, kobles sammen med hyperlenker og overføres via HTTP-protokollen. Webben ble oppfunnet av Tim Berners-Lee i 1989 ved CERN i Sveits. Den er bare én av mange tjenester som bruker internett som infrastruktur, men er den mest brukte og synlige tjenesten for de fleste brukere.' },
    { term: 'HTTP', definition: 'Hypertext Transfer Protocol er kommunikasjonsprotokollen som brukes for å overføre data mellom nettlesere og webservere. HTTP fungerer etter en forespørsel-svar-modell der klienten sender en forespørsel og serveren svarer med det etterspurte innholdet. HTTPS er den krypterte versjonen som bruker TLS/SSL-sertifikater for å sikre at dataene ikke kan avlyttes eller endres underveis.' },
    { term: 'DNS', definition: 'Domain Name System er internetts adressebok som oversetter menneskelige lesbare domenenavn som www.vg.no til numeriske IP-adresser som 195.88.55.16. Når du skriver en nettadresse i nettleseren, sender den først en forespørsel til en DNS-server for å finne riktig IP-adresse, før den kobler seg til selve webserveren. DNS-systemet er hierarkisk oppbygd med rotservere, toppdomeneservere og autoritative navneservere.' },
    { term: 'Klient-server-modell', definition: 'En arkitekturmodell der oppgaver fordeles mellom tjenesteytere (servere) og tjenesterekvirenter (klienter). I websammenheng er nettleseren klienten som sender forespørsler, og webserveren er serveren som svarer med HTML-sider, bilder og andre ressurser. Denne modellen gir en klar ansvarsfordeling og gjør det mulig for mange klienter å dele på de samme serverressursene.' },
    { term: 'IP-adresse', definition: 'En unik numerisk adresse som identifiserer en enhet på internett. IPv4-adresser har formatet 192.168.1.1 med fire tallgrupper fra 0 til 255, mens IPv6-adresser er lengre og bruker heksadesimale tall for å gi plass til langt flere enheter. Hver enhet som er tilkoblet internett trenger en IP-adresse for å kunne sende og motta data.' },
  ],
  content: [
    {
      id: 'it1-4-1-intro',
      type: 'text',
      content: `## Internett og webbens oppbygging

Hver gang du åpner en nettside, skjer det en rekke tekniske prosesser i bakgrunnen. Nettleseren din sender forespørsler over internett, DNS-servere oversetter domenenavn til IP-adresser, og webservere sender tilbake HTML-kode som nettleseren din tolker og viser som en ferdig nettside. I dette kapittelet skal vi forstå disse prosessene og teknologiene som gjør webben mulig.

Internett og webben er to forskjellige ting som ofte forveksles. **Internett** er det fysiske nettverket av kabler, rutere og servere som kobler datamaskiner sammen over hele verden. **Webben** (World Wide Web) er en tjeneste som kjører oppå internett, på samme måte som e-post og strømmetjenester også bruker internett som infrastruktur. Det er altså mulig å bruke internett uten å bruke webben, for eksempel når du sender e-post eller spiller nettspill.`,
    },
    {
      id: 'it1-4-1-def-internet',
      type: 'definition',
      title: 'Internett',
      content: `**Internett** er et globalt nettverk av sammenkoblede datamaskiner som kommuniserer ved hjelp av standardiserte protokoller (TCP/IP). Det er den fysiske og logiske infrastrukturen som muliggjør digital kommunikasjon over hele verden. Internett binder sammen milliarder av enheter gjennom fiberoptiske kabler, satellittforbindelser og trådløse nettverk. Nettverket er desentralisert, noe som betyr at det ikke finnes ett enkelt kontrollpunkt, og det kan fortsette å fungere selv om deler av nettverket faller ut. Denne robuste arkitekturen ble opprinnelig designet for å tåle militære angrep under den kalde krigen.`,
    },
    {
      id: 'it1-4-1-text-historie',
      type: 'text',
      title: 'Internettets historie',
      content: `Internettets historie strekker seg tilbake til 1960-tallet. Det amerikanske forsvarsdepartementet finansierte utviklingen av ARPANET, et nettverk designet for å overleve atomkrig ved å desentralisere kommunikasjonen. I 1969 ble den første meldingen sendt mellom to datamaskiner ved universitetene UCLA og Stanford. Meldingen var ordet «LOGIN», men systemet krasjet etter bare to bokstaver, slik at bare «LO» kom frem.

Gjennom 1970- og 1980-tallet vokste nettverket gradvis. Viktige milepæler inkluderer:

- **1971**: Den første e-posten ble sendt av Ray Tomlinson, som også innførte @-tegnet i e-postadresser
- **1974**: Vint Cerf og Bob Kahn utviklet TCP/IP-protokollen, som fortsatt er fundamentet for internett
- **1983**: ARPANET gikk over til TCP/IP, og dette regnes som internettets offisielle fødsel
- **1989**: Tim Berners-Lee ved CERN foreslo World Wide Web
- **1991**: Den første nettsiden ble publisert av Berners-Lee
- **1993**: Mosaic, den første grafiske nettleseren, ble lansert og gjorde webben tilgjengelig for vanlige folk
- **1995**: Kommersielle tjenester som Amazon og eBay ble lansert
- **2004-2007**: Web 2.0 med sosiale medier som Facebook, YouTube og Twitter endret hvordan folk bruker internett

I dag er internett en uunnværlig del av samfunnet. Over fem milliarder mennesker er tilkoblet, og vi bruker det til alt fra kommunikasjon og underholdning til utdanning, handel, helsevesen og offentlige tjenester. Utviklingen fortsetter med stadig raskere nett, tingenes internett (IoT) og nye tjenester basert på kunstig intelligens.`,
    },
    {
      id: 'it1-4-1-def-www',
      type: 'definition',
      title: 'World Wide Web (WWW)',
      content: `**World Wide Web** er et informasjonssystem bygd på toppen av internett der dokumenter og ressurser identifiseres med URL-er, kobles sammen med hyperlenker og overføres via HTTP-protokollen. WWW ble oppfunnet av den britiske forskeren Tim Berners-Lee i 1989 ved CERN-laboratoriet i Sveits. De tre grunnleggende teknologiene han skapte var HTML (for å strukturere innhold), URL (for å identifisere ressurser) og HTTP (for å overføre data). Webben gjør det mulig å navigere mellom dokumenter verden over ved å klikke på lenker, noe som var revolusjonerende da det ble introdusert.`,
    },
    {
      id: 'it1-4-1-text-klientserver',
      type: 'text',
      title: 'Klient-server-modellen',
      content: `Kommunikasjon på webben er organisert etter **klient-server-modellen**. Denne modellen definerer to roller:

**Klienten** er programmet som sender forespørsler. På webben er klienten vanligvis en nettleser som Chrome, Firefox, Safari eller Edge. Klienten initierer alltid kommunikasjonen ved å sende en forespørsel til en server.

**Serveren** er et program som kjører på en datamaskin et sted i verden og venter på forespørsler. Når den mottar en forespørsel, behandler den denne og sender tilbake et svar. En webserver kan betjene tusenvis av klienter samtidig.

Flyten i en typisk nettside-forespørsel er slik:

1. Brukeren skriver en URL i nettleseren (f.eks. \`https://www.nrk.no\`)
2. Nettleseren (klienten) slår opp IP-adressen via DNS
3. Nettleseren oppretter en forbindelse til serveren
4. Nettleseren sender en HTTP-forespørsel (GET-request)
5. Serveren mottar forespørselen og finner riktig innhold
6. Serveren sender tilbake HTML-kode, CSS og JavaScript
7. Nettleseren tolker koden og viser den ferdige nettsiden

Denne prosessen skjer på brøkdelen av et sekund. Når du besøker en nettside, lastes det ofte inn mange ressurser – selve HTML-dokumentet, stilark (CSS), skript (JavaScript), bilder og fonter. Hver ressurs krever sin egen forespørsel til serveren, men moderne nettlesere kan sende flere forespørsler parallelt for å gjøre lastingen raskere.`,
    },
    {
      id: 'it1-4-1-example-request',
      type: 'example',
      title: 'Eksempel på HTTP-forespørsel og svar',
      content: `Når du besøker \`https://www.eksempel.no/side.html\`, sender nettleseren en forespørsel som ser omtrent slik ut:

\`\`\`
GET /side.html HTTP/1.1
Host: www.eksempel.no
Accept: text/html
\`\`\`

Serveren svarer med:

\`\`\`
HTTP/1.1 200 OK
Content-Type: text/html

<!DOCTYPE html>
<html>
  <head><title>Min side</title></head>
  <body><h1>Velkommen!</h1></body>
</html>
\`\`\`

Statuskoden **200 OK** betyr at forespørselen var vellykket. Andre vanlige statuskoder er:
- **301** – Siden har flyttet permanent til en ny adresse
- **404** – Siden ble ikke funnet (den eksisterer ikke på serveren)
- **500** – Intern serverfeil (noe gikk galt på serveren)

Disse kodene hjelper nettleseren med å forstå hva som skjedde med forespørselen og handle deretter.`,
    },
    {
      id: 'it1-4-1-def-http',
      type: 'definition',
      title: 'HTTP og HTTPS',
      content: `**HTTP** (Hypertext Transfer Protocol) er protokollen som definerer hvordan meldinger formateres og overføres mellom klient og server på webben. HTTP bruker en forespørsel-svar-modell der klienten sender forespørsler med metoder som GET (hent data), POST (send data), PUT (oppdater data) og DELETE (slett data). **HTTPS** er den sikre versjonen av HTTP der all kommunikasjon krypteres med TLS/SSL. Krypteringen sikrer at ingen kan avlytte eller endre dataene underveis. I dag bruker de aller fleste nettsider HTTPS, og nettleserne markerer usikre HTTP-sider med advarsler.`,
    },
    {
      id: 'it1-4-1-text-dns',
      type: 'text',
      title: 'DNS – internettets adressebok',
      content: `Datamaskiner kommuniserer med hverandre ved hjelp av numeriske **IP-adresser**, for eksempel \`195.88.55.16\`. Men for mennesker er det mye enklere å huske navn som \`www.vg.no\`. **DNS** (Domain Name System) løser dette problemet ved å fungere som internettets adressebok – det oversetter domenenavn til IP-adresser.

Når du skriver en nettadresse i nettleseren, skjer følgende DNS-oppslag:

1. Nettleseren sjekker først sin egen hurtigbuffer (cache) for å se om den allerede kjenner IP-adressen
2. Hvis ikke, spør den operativsystemets DNS-cache
3. Hvis operativsystemet heller ikke vet, sendes forespørselen til en DNS-resolver (vanligvis hos internettleverandøren din)
4. DNS-resolveren spør rotservere, deretter toppdomene-servere (.no), og til slutt den autoritative navneserveren for det aktuelle domenet
5. IP-adressen returneres og lagres i cache for fremtidige oppslag

DNS-systemet er hierarkisk oppbygd med forskjellige nivåer av domener:

- **Toppdomene (TLD)**: .no, .com, .org, .edu
- **Andrenivsdomene**: vg.no, nrk.no, google.com
- **Subdomene**: www.vg.no, mail.google.com, nettbank.dnb.no

Hele dette oppslaget skjer vanligvis på under 100 millisekunder, og resultatet lagres lokalt slik at påfølgende besøk til samme nettside går raskere. DNS-cachen har en begrenset levetid (TTL – Time To Live) slik at endringer i IP-adresser propageres gjennom systemet.`,
    },
    {
      id: 'it1-4-1-def-dns',
      type: 'definition',
      title: 'DNS (Domain Name System)',
      content: `**DNS** (Domain Name System) er et hierarkisk og desentralisert navnesystem som oversetter menneskelesbare domenenavn til numeriske IP-adresser. DNS er en kritisk del av internettinfrastrukturen, og uten det ville brukere måtte huske IP-adresser for å besøke nettsider. Systemet fungerer som en distribuert database fordelt over tusenvis av servere verden over, noe som gir høy tilgjengelighet og redundans. DNS ble designet av Paul Mockapetris i 1983 og har siden blitt utvidet med sikkerhetsfunksjoner som DNSSEC for å beskytte mot forfalskning.`,
    },
    {
      id: 'it1-4-1-text-url',
      type: 'text',
      title: 'URL – nettadresser',
      content: `En **URL** (Uniform Resource Locator) er den fullstendige adressen til en ressurs på webben. La oss bryte ned delene av en URL:

\`\`\`
https://www.eksempel.no:443/nyheter/artikkel.html?id=42&lang=no#kommentarer
\`\`\`

- **https://** – Protokollen (HTTPS = sikker kommunikasjon)
- **www.eksempel.no** – Domenenavnet (vertsnavn)
- **:443** – Portnummer (443 er standard for HTTPS, vises vanligvis ikke)
- **/nyheter/artikkel.html** – Stien til ressursen på serveren
- **?id=42&lang=no** – Spørreparametere (query string) som sender data til serveren
- **#kommentarer** – Fragmentidentifikator som peker til en bestemt del av siden

Når du forstår hvordan en URL er bygd opp, kan du lettere navigere på webben, oppdage feil i lenker og forstå hvordan nettsider er organisert. URL-strukturen er også viktig for søkemotoroptimalisering (SEO), der lesbare og beskrivende URL-er gir bedre synlighet i søkeresultater.`,
    },
    {
      id: 'it1-4-1-note-protokoller',
      type: 'note',
      title: 'Andre protokoller på internett',
      content: `Webben bruker HTTP/HTTPS, men internett støtter mange andre protokoller for ulike formål:

- **SMTP/IMAP/POP3** – For e-post (sending og mottak)
- **FTP/SFTP** – For filoverføring
- **SSH** – For sikker fjerntilgang til servere
- **WebSocket** – For toveis sanntidskommunikasjon (brukes i chat og spill)
- **TCP/IP** – Grunnprotokollene som alt annet bygger på

Alle disse protokollene bruker internett som infrastruktur, men har ulike formål og egenskaper.`,
    },
    {
      id: 'it1-4-1-tip-devtools',
      type: 'tip',
      title: 'Se nettverkstrafikk i nettleseren',
      content: `Du kan selv observere HTTP-forespørsler ved å bruke nettleserens utviklerverktøy. Trykk **F12** i nettleseren og velg fanen **Nettverk** (Network). Last deretter inn en nettside på nytt, og du vil se alle forespørslene nettleseren sender – inkludert HTTP-metode, statuskode, filtype og lastetid for hver ressurs. Dette er et nyttig verktøy for å forstå hvordan webben fungerer i praksis.`,
    },
    {
      id: 'it1-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it1-4-1-ex-1',
        number: '4.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom internett og World Wide Web?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell – de betyr det samme', isCorrect: false, feedback: 'Internett og webben er to forskjellige ting som ofte forveksles.' },
          { id: 'b', text: 'Internett er det fysiske nettverket, og webben er en tjeneste som kjører oppå internett', isCorrect: true },
          { id: 'c', text: 'Webben er det fysiske nettverket, og internett er programvaren', isCorrect: false, feedback: 'Det er omvendt – internett er infrastrukturen.' },
          { id: 'd', text: 'Internett er for datamaskiner og webben er for mobiltelefoner', isCorrect: false, feedback: 'Begge brukes av alle typer enheter.' },
        ],
        solution: 'Internett er den fysiske infrastrukturen – kabler, rutere og servere – som kobler datamaskiner sammen. World Wide Web er en tjeneste som bruker internett til å gjøre dokumenter tilgjengelige via HTTP og HTML. Andre tjenester som e-post og strømming bruker også internett.',
      },
    },
    {
      id: 'it1-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it1-4-1-ex-2',
        number: '4.1.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er DNS sin hovedoppgave?',
        options: [
          { id: 'a', text: 'Å kryptere datatrafikk', isCorrect: false, feedback: 'Kryptering er oppgaven til HTTPS/TLS, ikke DNS.' },
          { id: 'b', text: 'Å oversette domenenavn til IP-adresser', isCorrect: true },
          { id: 'c', text: 'Å blokkere skadelige nettsider', isCorrect: false, feedback: 'DNS er en adressetjeneste, ikke en sikkerhetstjeneste.' },
          { id: 'd', text: 'Å lagre nettsider lokalt på datamaskinen', isCorrect: false, feedback: 'Det er nettleserens cache som lagrer nettsider lokalt.' },
        ],
        solution: 'DNS (Domain Name System) oversetter menneskelesbare domenenavn som www.vg.no til numeriske IP-adresser som datamaskiner bruker for å finne hverandre på nettverket.',
      },
    },
    {
      id: 'it1-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it1-4-1-ex-3',
        number: '4.1.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En bruker besøker https://www.nrk.no og får statuskoden 200 OK. Hva betyr dette?',
        options: [
          { id: 'a', text: 'Serveren er overbelastet og kan ikke svare', isCorrect: false, feedback: 'En overbelastet server ville typisk gi en 503-feil.' },
          { id: 'b', text: 'Forespørselen var vellykket og serveren sender tilbake innholdet', isCorrect: true },
          { id: 'c', text: 'Nettsiden har blitt flyttet til en ny adresse', isCorrect: false, feedback: 'Det ville gi statuskode 301 (Moved Permanently).' },
          { id: 'd', text: 'Nettleseren mangler en plugin for å vise siden', isCorrect: false, feedback: 'HTTP-statuskoder handler om server-kommunikasjon, ikke plugins.' },
        ],
        solution: 'HTTP-statuskoden 200 OK betyr at forespørselen ble mottatt, forstått og besvart vellykket av serveren. Serveren sender tilbake det etterspurte innholdet (f.eks. HTML-siden) til klienten.',
      },
    },
    {
      id: 'it1-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it1-4-1-ex-4',
        number: '4.1.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'I URL-en `https://www.butikk.no/produkter/sko.html?farge=rod&str=42`, hva representerer `?farge=rod&str=42`?',
        options: [
          { id: 'a', text: 'Fragmentidentifikator som peker til en del av siden', isCorrect: false, feedback: 'Fragmentidentifikatorer starter med # (hash), ikke ? (spørsmålstegn).' },
          { id: 'b', text: 'Portnummeret til serveren', isCorrect: false, feedback: 'Portnummer kommer etter domenenavnet med kolon, f.eks. :443.' },
          { id: 'c', text: 'Spørreparametere (query string) som sender data til serveren', isCorrect: true },
          { id: 'd', text: 'Kommentarer som nettleseren ignorerer', isCorrect: false, feedback: 'Spørreparametere er ikke kommentarer – de sender informasjon til serveren.' },
        ],
        solution: 'Delen etter spørsmålstegnet i en URL kalles spørreparametere (query string). Her sendes to parametere til serveren: farge med verdien rod og str med verdien 42. Parametere skilles med &-tegnet.',
      },
    },
    {
      id: 'it1-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it1-4-1-ex-5',
        number: '4.1.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv steg for steg hva som skjer fra du skriver en nettadresse (f.eks. www.yr.no) i nettleseren til nettsiden vises på skjermen. Inkluder DNS-oppslag, HTTP-forespørsel og klient-server-kommunikasjon i forklaringen din.',
        solution: `1. Nettleseren sjekker først sin lokale DNS-cache for å se om den allerede kjenner IP-adressen til www.yr.no.
2. Hvis ikke, sender den en DNS-forespørsel til en DNS-resolver (vanligvis hos internettleverandøren).
3. DNS-resolveren spør rotservere, deretter .no-servere, og til slutt den autoritative navneserveren for yr.no.
4. IP-adressen returneres til nettleseren.
5. Nettleseren oppretter en sikker HTTPS-forbindelse til serveren via TCP-handshake og TLS-handshake.
6. Nettleseren sender en HTTP GET-forespørsel til serveren for å hente HTML-siden.
7. Serveren mottar forespørselen, finner riktig innhold og sender tilbake et HTTP-svar med statuskode 200 OK og HTML-koden.
8. Nettleseren mottar HTML-koden og begynner å tolke den. Den finner referanser til CSS-filer, JavaScript og bilder.
9. Nettleseren sender nye HTTP-forespørsler for hver ekstra ressurs.
10. Når alle ressurser er lastet, rendrer nettleseren den ferdige nettsiden på skjermen.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it1-4-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it1-4-1-ex-6',
        number: '4.1.6',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva er hovedforskjellen mellom HTTP og HTTPS?',
        options: [
          { id: 'a', text: 'HTTPS er raskere enn HTTP', isCorrect: false, feedback: 'HTTPS er ikke nødvendigvis raskere – forskjellen handler om sikkerhet.' },
          { id: 'b', text: 'HTTP brukes for tekst og HTTPS for bilder', isCorrect: false, feedback: 'Begge protokollene kan overføre alle typer innhold.' },
          { id: 'c', text: 'HTTPS krypterer all kommunikasjon mellom klient og server med TLS/SSL', isCorrect: true },
          { id: 'd', text: 'HTTPS krever at brukeren logger inn først', isCorrect: false, feedback: 'HTTPS handler om kryptering av dataoverføringen, ikke innlogging.' },
        ],
        solution: 'HTTPS (HTTP Secure) bruker TLS/SSL-kryptering for å sikre kommunikasjonen mellom klient og server. Dette betyr at dataene krypteres slik at de ikke kan avlyttes eller endres av tredjeparter underveis. HTTP sender data i klartekst, noe som gjør det sårbart for avlytting.',
      },
    },
    {
      id: 'it1-4-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it1-4-1-ex-7',
        number: '4.1.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar klient-server-modellen og sammenlign den med en peer-to-peer-modell (P2P). Gi eksempler på tjenester som bruker hver modell, og drøft fordeler og ulemper med begge tilnærmingene.',
        solution: `I klient-server-modellen har enhetene faste roller: klienten sender forespørsler og serveren svarer. Eksempler er vanlige nettsider, nettbank og strømmetjenester som Netflix. Fordeler: sentralisert kontroll, enklere sikkerhet, enklere vedlikehold. Ulemper: serveren er et enkeltpunkt for feil (single point of failure), og det kan bli dyrt med mange samtidige brukere.

I P2P-modellen er alle enheter likeverdige og fungerer både som klient og server. Eksempler er BitTorrent, tidlige fildelingstjenester og noen kryptovalutaer. Fordeler: ingen sentralt feilpunkt, bedre skalerbarhet, fortsetter å fungere selv om noen noder faller ut. Ulemper: vanskeligere å kontrollere innhold, komplisert sikkerhet, vanskelig å garantere tilgjengelighet.

De fleste tjenester vi bruker daglig er basert på klient-server-modellen fordi den gir bedre kontroll og sikkerhet, men P2P brukes der desentralisering og robusthet er viktigere.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  nextChapter: 'it-1-4-2',
};

// ============================================================================
// KAPITTEL 4.2: HTML – struktur og semantikk
// ============================================================================

export const CHAPTER_IT_1_4_2: TextbookChapter = {
  id: 'it-1-4-2',
  courseId: 'it-1',
  chapterNumber: '4.2',
  title: 'HTML – struktur og semantikk',
  description: 'Lær å strukturere nettsider med HTML5, bruke semantiske elementer og lage skjemaer for brukerinteraksjon.',
  estimatedMinutes: 65,
  competenceGoals: [
    'utvikle nettsider ved bruk av HTML',
    'bruke semantiske elementer for å strukturere innhold',
    'lage skjemaer for brukerinteraksjon',
  ],
  keyTerms: [
    { term: 'HTML', definition: 'HyperText Markup Language er standard markeringsspråk for å lage nettsider. HTML bruker tagger (tags) for å definere strukturen og innholdet i et dokument. Nettleseren leser HTML-koden og gjør den om til den visuelle nettsiden du ser på skjermen. Gjeldende versjon er HTML5, som ble offisielt anbefalt av W3C i 2014 og har siden blitt standarden for moderne webutvikling.' },
    { term: 'Element', definition: 'Et HTML-element består av en åpningstag, innhold og en lukketag. For eksempel er <p>Hei</p> et avsnittselement der <p> er åpningstaggen, "Hei" er innholdet og </p> er lukketaggen. Noen elementer er selvlukkende og har ikke innhold eller lukketag, som <br> (linjeskift) og <img> (bilde). Elementer kan nestes inne i hverandre for å bygge opp komplekse dokumentstrukturer.' },
    { term: 'Attributt', definition: 'Attributter er tilleggsinformasjon som legges til HTML-elementer i åpningstaggen. De angis som navn-verdi-par, for eksempel href="https://nrk.no" i en lenke eller src="bilde.jpg" i et bildeelement. Attributter endrer elementets oppførsel eller utseende uten å påvirke det synlige innholdet direkte. Globale attributter som id, class og style kan brukes på alle elementer.' },
    { term: 'Semantisk HTML', definition: 'Semantiske HTML-elementer beskriver betydningen av innholdet, ikke bare hvordan det ser ut. Elementer som <header>, <nav>, <main>, <article>, <section> og <footer> gir mening til innholdsstrukturen. Semantisk HTML er viktig for tilgjengelighet (skjermlesere kan navigere etter struktur), søkemotoroptimalisering (søkemotorer forstår innholdet bedre) og vedlikehold (koden er lettere å forstå for utviklere).' },
    { term: 'Skjema (form)', definition: 'HTML-skjemaer (<form>) brukes til å samle inn data fra brukere. Skjemaer inneholder input-elementer som tekstfelt, avkrysningsbokser, rullegardinmenyer og knapper. Når brukeren sender inn skjemaet, sendes dataene til serveren for behandling. Skjemaer er grunnlaget for all brukerinteraksjon på webben – fra innlogging og søk til bestillinger og kontaktskjemaer.' },
    { term: 'DOCTYPE', definition: 'Dokumenttypedeklarasjonen <!DOCTYPE html> er den første linjen i et HTML-dokument. Den forteller nettleseren at dokumentet er skrevet i HTML5 og sikrer at nettleseren bruker standardmodus (standards mode) for å tolke koden korrekt. Uten DOCTYPE kan nettleseren falle tilbake til eldre tolkningsmoduser som kan gi uforutsigbare resultater.' },
  ],
  content: [
    {
      id: 'it1-4-2-intro',
      type: 'text',
      content: `## HTML – struktur og semantikk

HTML (HyperText Markup Language) er selve grunnspråket for webben. Det er et **markeringsspråk** som brukes til å definere strukturen og innholdet i nettsider. Mens CSS styrer utseendet og JavaScript styrer oppførselen, er det HTML som definerer hva innholdet er – overskrifter, avsnitt, bilder, lenker, lister og tabeller.

HTML er ikke et programmeringsspråk – det har ingen variabler, løkker eller betingelser. I stedet bruker det **tagger** (tags) som omslutter innhold for å gi det mening og struktur. Når nettleseren leser en HTML-fil, bygger den opp et dokumenttre (DOM – Document Object Model) som representerer sidens struktur, og bruker dette treet til å tegne nettsiden på skjermen.`,
    },
    {
      id: 'it1-4-2-def-html',
      type: 'definition',
      title: 'HTML (HyperText Markup Language)',
      content: `**HTML** er det standard markeringsspråket for å lage og strukturere innhold på nettsider. HTML definerer strukturen til en nettside ved hjelp av elementer representert av tagger. Elementene beskriver ulike typer innhold som overskrifter, avsnitt, bilder, lenker, lister og tabeller. HTML5, den nyeste versjonen, innførte semantiske elementer som gir bedre struktur og mening til innholdet, samt støtte for multimedia som lyd og video uten behov for tilleggsprogrammer. All moderne webutvikling starter med HTML som det strukturelle fundamentet.`,
    },
    {
      id: 'it1-4-2-text-grunnstruktur',
      type: 'text',
      title: 'Grunnstrukturen i et HTML-dokument',
      content: `Alle HTML-dokumenter følger den samme grunnstrukturen. Her er et komplett, minimalt HTML5-dokument:

\`\`\`html
<!DOCTYPE html>
<html lang="nb">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Min første nettside</title>
  </head>
  <body>
    <h1>Hei, verden!</h1>
    <p>Dette er min første nettside.</p>
  </body>
</html>
\`\`\`

La oss gå gjennom hver del:

- **\`<!DOCTYPE html>\`** – Forteller nettleseren at dette er et HTML5-dokument
- **\`<html lang="nb">\`** – Rotelementet som omslutter alt innhold. Attributten \`lang="nb"\` angir at språket er norsk bokmål
- **\`<head>\`** – Inneholder metadata om dokumentet (tittel, tegnkoding, stilark osv.) som ikke vises direkte på siden
- **\`<meta charset="UTF-8">\`** – Angir tegnkodingen slik at norske bokstaver (æ, ø, å) vises riktig
- **\`<meta name="viewport">\`** – Gjør at siden tilpasser seg skjermstørrelsen på mobil
- **\`<title>\`** – Tittelen som vises i nettleserens fanetittel og i søkeresultater
- **\`<body>\`** – Inneholder alt synlig innhold på nettsiden

Denne grunnstrukturen er den samme for alle nettsider, fra enkle personlige sider til komplekse nettapplikasjoner. Det er viktig å alltid inkludere alle disse elementene for å sikre at nettsiden fungerer korrekt i alle nettlesere.`,
    },
    {
      id: 'it1-4-2-text-elementer',
      type: 'text',
      title: 'Vanlige HTML-elementer',
      content: `HTML har et stort utvalg elementer for ulike typer innhold. Her er de mest brukte:

**Overskrifter** – Seks nivåer fra \`<h1>\` (viktigst) til \`<h6>\` (minst viktig):
\`\`\`html
<h1>Hovedoverskrift</h1>
<h2>Underoverskrift</h2>
<h3>Del-overskrift</h3>
\`\`\`

**Avsnitt og tekst**:
\`\`\`html
<p>Dette er et avsnitt med vanlig tekst.</p>
<p>Du kan bruke <strong>fet skrift</strong> og <em>kursiv</em> inne i avsnitt.</p>
<br>  <!-- Linjeskift -->
<hr>  <!-- Horisontal linje -->
\`\`\`

**Lenker** – Kobler sammen sider med hyperlenker:
\`\`\`html
<a href="https://www.nrk.no">Besøk NRK</a>
<a href="om-oss.html">Om oss</a>
<a href="#seksjon2">Gå til seksjon 2</a>
\`\`\`

**Bilder**:
\`\`\`html
<img src="bilde.jpg" alt="Beskrivelse av bildet" width="600">
\`\`\`
Attributten \`alt\` er viktig for tilgjengelighet – den leses opp av skjermlesere og vises hvis bildet ikke kan lastes.

**Lister** – Punktlister og nummererte lister:
\`\`\`html
<ul>
  <li>Første punkt</li>
  <li>Andre punkt</li>
</ul>

<ol>
  <li>Steg én</li>
  <li>Steg to</li>
</ol>
\`\`\``,
    },
    {
      id: 'it1-4-2-def-attributt',
      type: 'definition',
      title: 'HTML-attributter',
      content: `**Attributter** er tilleggsinformasjon som legges til i åpningstaggen til et HTML-element. De består av et navn og en verdi, adskilt med likhetstegn, der verdien står i anførselstegn. Eksempler: \`href="url"\` på lenker angir destinasjonen, \`src="filnavn"\` på bilder angir kildefilen, \`class="navn"\` brukes til å koble elementer med CSS-stiler, og \`id="unik"\` gir elementet en unik identifikator. Globale attributter som \`class\`, \`id\`, \`style\` og \`title\` kan brukes på alle HTML-elementer, mens andre attributter bare gjelder bestemte elementer.`,
    },
    {
      id: 'it1-4-2-example-side',
      type: 'example',
      title: 'Eksempel: En enkel nettside med flere elementer',
      content: `Her er en komplett nettside som viser mange ulike HTML-elementer i bruk:

\`\`\`html
<!DOCTYPE html>
<html lang="nb">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Norges nasjonalparker</title>
  </head>
  <body>
    <h1>Norges nasjonalparker</h1>
    <p>Norge har <strong>47 nasjonalparker</strong> som beskytter unik natur.</p>

    <h2>Populære nasjonalparker</h2>
    <ul>
      <li>Jotunheimen – Norges tak med Galdhøpiggen og Glittertind</li>
      <li>Hardangervidda – Europas største høyfjellsplatå</li>
      <li>Rondane – Norges første nasjonalpark (1962)</li>
    </ul>

    <h2>Besøkstall</h2>
    <ol>
      <li>Jotunheimen: ca. 300 000 besøkende årlig</li>
      <li>Hardangervidda: ca. 250 000 besøkende årlig</li>
      <li>Rondane: ca. 200 000 besøkende årlig</li>
    </ol>

    <h2>Les mer</h2>
    <p>Besøk <a href="https://www.nasjonalparker.no">nasjonalparker.no</a> for mer informasjon.</p>

    <img src="jotunheimen.jpg" alt="Utsikt over Jotunheimen med snødekte topper">
  </body>
</html>
\`\`\`

Denne nettsiden viser en overskrift, avsnitt med fet tekst, punktliste, nummerert liste, en lenke og et bilde. Nettleseren tolker HTML-koden og viser den som en formatert nettside.`,
    },
    {
      id: 'it1-4-2-text-semantikk',
      type: 'text',
      title: 'Semantiske HTML5-elementer',
      content: `Semantisk HTML betyr at vi bruker elementer som beskriver **betydningen** av innholdet, ikke bare hvordan det skal se ut. I stedet for å bruke generiske \`<div>\`-elementer overalt, bruker vi spesialiserte elementer som forteller nettlesere og skjermlesere hva innholdet representerer.

De viktigste semantiske elementene i HTML5:

\`\`\`html
<header>   <!-- Toppdelen av siden eller en seksjon -->
<nav>      <!-- Navigasjonsmenyen -->
<main>     <!-- Hovedinnholdet på siden (bare én per side) -->
<article>  <!-- Selvstendig innhold som en artikkel eller bloggpost -->
<section>  <!-- En tematisk gruppering av innhold -->
<aside>    <!-- Sideinnhold, ofte en sidebar -->
<footer>   <!-- Bunndelen av siden eller en seksjon -->
<figure>   <!-- Selvstendig innhold med bildetekst -->
<figcaption>  <!-- Bildetekst inne i figure -->
\`\`\`

Her er en typisk semantisk sidestruktur:

\`\`\`html
<body>
  <header>
    <h1>Min blogg</h1>
    <nav>
      <a href="/">Hjem</a>
      <a href="/om">Om meg</a>
      <a href="/kontakt">Kontakt</a>
    </nav>
  </header>

  <main>
    <article>
      <h2>Min første bloggpost</h2>
      <p>Publisert 15. januar 2025</p>
      <p>Her er innholdet i bloggposten...</p>
    </article>

    <article>
      <h2>En annen bloggpost</h2>
      <p>Publisert 10. januar 2025</p>
      <p>Mer innhold her...</p>
    </article>
  </main>

  <aside>
    <h3>Om bloggen</h3>
    <p>Denne bloggen handler om webutvikling.</p>
  </aside>

  <footer>
    <p>&copy; 2025 Min blogg. Alle rettigheter reservert.</p>
  </footer>
</body>
\`\`\`

Fordeler med semantisk HTML er mange: skjermlesere kan navigere etter struktur, søkemotorer forstår innholdet bedre, koden er lettere å vedlikeholde, og det gir et felles vokabular for webutviklere.`,
    },
    {
      id: 'it1-4-2-def-semantisk',
      type: 'definition',
      title: 'Semantisk HTML',
      content: `**Semantisk HTML** innebærer å bruke HTML-elementer som kommuniserer betydningen og formålet med innholdet, ikke bare presentasjonen. Elementer som \`<header>\`, \`<nav>\`, \`<main>\`, \`<article>\`, \`<section>\` og \`<footer>\` er semantiske fordi de beskriver hva innholdet er. I motsetning er \`<div>\` og \`<span>\` ikke-semantiske elementer som bare fungerer som generiske beholdere uten å formidle mening. Bruk av semantisk HTML forbedrer tilgjengelighet for personer med funksjonsnedsettelser, gir bedre søkemotoroptimalisering og gjør koden mer lesbar og vedlikeholdbar.`,
    },
    {
      id: 'it1-4-2-text-skjemaer',
      type: 'text',
      title: 'HTML-skjemaer',
      content: `Skjemaer er fundamentale for brukerinteraksjon på webben. De brukes til innlogging, søk, bestilling, kontaktskjemaer og mye mer. Et HTML-skjema opprettes med \`<form>\`-elementet og inneholder ulike typer input-felter.

Her er et eksempel på et komplett kontaktskjema:

\`\`\`html
<form action="/send-melding" method="POST">
  <label for="navn">Navn:</label>
  <input type="text" id="navn" name="navn" required>

  <label for="epost">E-post:</label>
  <input type="email" id="epost" name="epost" required>

  <label for="alder">Alder:</label>
  <input type="number" id="alder" name="alder" min="0" max="120">

  <label for="emne">Emne:</label>
  <select id="emne" name="emne">
    <option value="generelt">Generell henvendelse</option>
    <option value="feil">Rapporter feil</option>
    <option value="forslag">Forbedringsforslag</option>
  </select>

  <label for="melding">Melding:</label>
  <textarea id="melding" name="melding" rows="5" required></textarea>

  <label>
    <input type="checkbox" name="nyhetsbrev"> Meld meg på nyhetsbrevet
  </label>

  <button type="submit">Send melding</button>
</form>
\`\`\`

Viktige input-typer i HTML5 er blant annet: \`text\` for vanlig tekst, \`email\` for e-postadresser (med validering), \`password\` for passord (vises som prikker), \`number\` for tall, \`date\` for datoer, \`url\` for nettadresser, \`tel\` for telefonnumre, \`checkbox\` for avkrysningsbokser og \`radio\` for alternativknapper. Attributten \`required\` gjør at feltet må fylles ut, og \`placeholder\` viser hjelpetekst i feltet.`,
    },
    {
      id: 'it1-4-2-warning-validering',
      type: 'warning',
      title: 'Validering av HTML',
      content: `Det er viktig å skrive gyldig HTML. Vanlige feil inkluderer: glemte lukketagger, feilnestede elementer, manglende \`alt\`-attributt på bilder og manglende \`<!DOCTYPE html>\`. Bruk W3C Markup Validation Service (validator.w3.org) for å sjekke at HTML-koden din er gyldig. Feil i HTML kan føre til at nettsiden vises forskjellig i ulike nettlesere og at skjermlesere ikke fungerer riktig.`,
    },
    {
      id: 'it1-4-2-tip-indentation',
      type: 'tip',
      title: 'Ryddig kode med innrykk',
      content: `Bruk konsistent innrykk (2 eller 4 mellomrom) for å vise nesting-strukturen i HTML. Innrykk gjør koden mye lettere å lese og vedlikeholde. De fleste teksteditorer kan settes opp til å gjøre dette automatisk. Hver gang et element nestes inne i et annet, rykker du innholdet ett nivå inn.`,
    },
    {
      id: 'it1-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it1-4-2-ex-1',
        number: '4.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket element brukes til å definere hovedoverskriften på en nettside?',
        options: [
          { id: 'a', text: '<title>', isCorrect: false, feedback: '<title> brukes i <head> for fanetittelen i nettleseren, ikke for synlige overskrifter.' },
          { id: 'b', text: '<h1>', isCorrect: true },
          { id: 'c', text: '<header>', isCorrect: false, feedback: '<header> er et semantisk element for toppdelen av siden, ikke en overskrift.' },
          { id: 'd', text: '<p>', isCorrect: false, feedback: '<p> brukes for vanlige avsnitt, ikke overskrifter.' },
        ],
        solution: '<h1> brukes for hovedoverskriften på en nettside. Det er det viktigste overskriftsnivået, og det bør bare være én <h1> per side. Overskriftshierarkiet går fra <h1> (viktigst) til <h6> (minst viktig).',
      },
    },
    {
      id: 'it1-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it1-4-2-ex-2',
        number: '4.2.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er formålet med `alt`-attributten på et `<img>`-element?',
        options: [
          { id: 'a', text: 'Å angi bildets størrelse', isCorrect: false, feedback: 'Størrelse angis med width og height, ikke alt.' },
          { id: 'b', text: 'Å gi en alternativ tekstbeskrivelse av bildet for tilgjengelighet', isCorrect: true },
          { id: 'c', text: 'Å legge til en ramme rundt bildet', isCorrect: false, feedback: 'Rammer styres med CSS, ikke alt-attributten.' },
          { id: 'd', text: 'Å angi bildets filformat', isCorrect: false, feedback: 'Filformatet bestemmes av filendelsen (jpg, png osv.).' },
        ],
        solution: 'Alt-attributten gir en tekstbeskrivelse av bildet. Denne teksten leses opp av skjermlesere for synshemmede brukere, vises hvis bildet ikke kan lastes, og brukes av søkemotorer for å forstå bildets innhold.',
      },
    },
    {
      id: 'it1-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it1-4-2-ex-3',
        number: '4.2.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken HTML-struktur er riktig semantisk oppmerkoring for en navigasjonsmeny?',
        options: [
          { id: 'a', text: '<div class="meny"><a href="/">Hjem</a></div>', isCorrect: false, feedback: 'Selv om dette fungerer visuelt, bruker det ikke semantisk HTML.' },
          { id: 'b', text: '<nav><a href="/">Hjem</a><a href="/om">Om</a></nav>', isCorrect: true },
          { id: 'c', text: '<menu><a href="/">Hjem</a></menu>', isCorrect: false, feedback: '<menu> er ment for kontekstmenyer, ikke navigasjonsmenyer.' },
          { id: 'd', text: '<header><a href="/">Hjem</a></header>', isCorrect: false, feedback: '<header> representerer toppdelen av en side, ikke navigasjonen spesifikt.' },
        ],
        solution: '<nav>-elementet er det korrekte semantiske elementet for navigasjonslenker. Det forteller nettlesere og skjermlesere at innholdet er en navigasjonsmeny, noe som gir bedre tilgjengelighet og SEO.',
      },
    },
    {
      id: 'it1-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it1-4-2-ex-4',
        number: '4.2.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er forskjellen mellom `<div>` og `<section>` i HTML5?',
        options: [
          { id: 'a', text: 'De er helt like – det spiller ingen rolle hvilken du bruker', isCorrect: false, feedback: 'De har ulik semantisk betydning.' },
          { id: 'b', text: '<div> er en generisk beholder uten semantisk betydning, mens <section> representerer en tematisk gruppering av innhold', isCorrect: true },
          { id: 'c', text: '<div> er for tekst og <section> er for bilder', isCorrect: false, feedback: 'Begge kan inneholde alle typer innhold.' },
          { id: 'd', text: '<section> er nyere og erstatter <div> helt', isCorrect: false, feedback: 'Begge har sine bruksområder – <div> brukes fortsatt når det ikke trengs semantisk mening.' },
        ],
        solution: '<div> er en generisk beholder uten semantisk mening – den brukes når det ikke finnes et mer passende semantisk element. <section> er et semantisk element som representerer en tematisk del av innholdet og bør ha en overskrift. Bruk <section> når innholdet har et klart tema, og <div> for ren layout/gruppering.',
      },
    },
    {
      id: 'it1-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it1-4-2-ex-5',
        number: '4.2.5',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv HTML-koden for en enkel nettside om ditt favorittfag på skolen. Siden skal inneholde:
- Riktig HTML5-grunnstruktur (DOCTYPE, html, head, body)
- En hovedoverskrift med fagets navn
- Minst to avsnitt med tekst
- En punktliste med tre grunner til at du liker faget
- En lenke til en relevant nettside
- Et bilde med beskrivende alt-tekst

Bruk semantisk HTML der det er mulig.`,
        solution: `\`\`\`html
<!DOCTYPE html>
<html lang="nb">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mitt favorittfag - Informasjonsteknologi</title>
  </head>
  <body>
    <header>
      <h1>Informasjonsteknologi 1</h1>
    </header>
    <main>
      <article>
        <h2>Hvorfor IT1 er mitt favorittfag</h2>
        <p>Informasjonsteknologi handler om å forstå og skape digitale løsninger. Vi lærer både om hvordan teknologien fungerer og hvordan vi kan bruke den kreativt.</p>
        <p>I dette faget kombinerer vi teori med praksis. Vi lærer om nettverksoppbygging, programmering, design og samfunnets digitale utfordringer.</p>
        <h3>Tre grunner til at jeg liker IT1</h3>
        <ul>
          <li>Vi får lage egne nettsider og programmer</li>
          <li>Vi lærer ferdigheter som er nyttige i nesten alle yrker</li>
          <li>Det er kreativt og praktisk på samme tid</li>
        </ul>
        <p>Les mer om faget på <a href="https://www.udir.no">Utdanningsdirektoratets nettsider</a>.</p>
        <figure>
          <img src="koding.jpg" alt="Skjerm med HTML-kode i en teksteditor">
          <figcaption>HTML-kode i en teksteditor</figcaption>
        </figure>
      </article>
    </main>
    <footer>
      <p>&copy; 2025 Elev ved VG2</p>
    </footer>
  </body>
</html>
\`\`\``,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it1-4-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it1-4-2-ex-6',
        number: '4.2.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag HTML-koden for et registreringsskjema for en nettbutikk. Skjemaet skal inneholde felter for fornavn, etternavn, e-post, passord, fødselsdato, og en nedtrekksmeny for fylke. Alle obligatoriske felter skal være markert med `required`. Bruk riktige input-typer (email, password, date osv.) og koble hver `<label>` til sitt input-felt med `for`-attributten.',
        solution: `\`\`\`html
<form action="/registrer" method="POST">
  <h2>Opprett konto</h2>

  <label for="fornavn">Fornavn:</label>
  <input type="text" id="fornavn" name="fornavn" required>

  <label for="etternavn">Etternavn:</label>
  <input type="text" id="etternavn" name="etternavn" required>

  <label for="epost">E-postadresse:</label>
  <input type="email" id="epost" name="epost" required placeholder="navn@eksempel.no">

  <label for="passord">Passord:</label>
  <input type="password" id="passord" name="passord" required minlength="8">

  <label for="fodselsdato">Fødselsdato:</label>
  <input type="date" id="fodselsdato" name="fodselsdato" required>

  <label for="fylke">Fylke:</label>
  <select id="fylke" name="fylke" required>
    <option value="">-- Velg fylke --</option>
    <option value="agder">Agder</option>
    <option value="innlandet">Innlandet</option>
    <option value="more-romsdal">Møre og Romsdal</option>
    <option value="nordland">Nordland</option>
    <option value="oslo">Oslo</option>
    <option value="rogaland">Rogaland</option>
    <option value="troms-finnmark">Troms og Finnmark</option>
    <option value="trondelag">Trøndelag</option>
    <option value="vestfold-telemark">Vestfold og Telemark</option>
    <option value="vestland">Vestland</option>
    <option value="viken">Viken</option>
  </select>

  <label>
    <input type="checkbox" name="vilkar" required> Jeg godtar vilkårene
  </label>

  <button type="submit">Opprett konto</button>
</form>
\`\`\`

Viktige poenger: Alle felter har for/id-kobling mellom label og input, riktige input-typer brukes for validering, required sikrer at obligatoriske felter fylles ut, og minlength på passord gir ekstra sikkerhet.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it1-4-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it1-4-2-ex-7',
        number: '4.2.7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva er hovedfordelen med å bruke semantisk HTML framfor å bare bruke `<div>` med klasser for alt?',
        options: [
          { id: 'a', text: 'Semantisk HTML gjør nettsiden raskere å laste', isCorrect: false, feedback: 'Semantisk HTML påvirker ikke lastetiden merkbart.' },
          { id: 'b', text: 'Semantisk HTML gir bedre tilgjengelighet, SEO og kodelesbarhet fordi elementene kommuniserer innholdets betydning', isCorrect: true },
          { id: 'c', text: 'Semantisk HTML gjør at nettsiden ser penere ut', isCorrect: false, feedback: 'Utseendet styres av CSS, ikke av hvilke HTML-elementer som brukes.' },
          { id: 'd', text: 'Semantisk HTML er obligatorisk for at nettsiden skal fungere', isCorrect: false, feedback: 'Nettsider fungerer teknisk sett uten semantisk HTML, men det er dårlig praksis.' },
        ],
        solution: 'Semantisk HTML gir tre viktige fordeler: 1) Tilgjengelighet – skjermlesere kan navigere etter landmerker som nav, main og article. 2) SEO – søkemotorer forstår innholdet bedre og kan rangere siden høyere. 3) Vedlikeholdbarhet – koden er lettere å lese og forstå for utviklere fordi elementene beskriver hva innholdet er.',
      },
    },
  ],
  exercises: [],
  prevChapter: 'it-1-4-1',
  nextChapter: 'it-1-4-3',
};

// ============================================================================
// KAPITTEL 4.3: CSS – stil og layout
// ============================================================================

export const CHAPTER_IT_1_4_3: TextbookChapter = {
  id: 'it-1-4-3',
  courseId: 'it-1',
  chapterNumber: '4.3',
  title: 'CSS – stil og layout',
  description: 'Lær å style nettsider med CSS, inkludert selektorer, egenskaper, boksmodellen, flexbox og grid for moderne layout.',
  estimatedMinutes: 70,
  competenceGoals: [
    'utvikle nettsider ved bruk av CSS',
    'designe og implementere brukergrensesnitt med moderne layout-teknikker',
  ],
  keyTerms: [
    { term: 'CSS', definition: 'Cascading Style Sheets er et stilspråk som brukes til å beskrive presentasjonen av et HTML-dokument. CSS kontrollerer utseendet til nettsider – farger, skrifttyper, avstander, layout og animasjoner. Ved å skille stil fra struktur gjør CSS det mulig å endre hele utseendet til en nettside uten å endre HTML-koden. Cascading (kaskaderende) refererer til at stiler kan arves og overstyres gjennom et hierarki av regler, der mer spesifikke regler har forrang.' },
    { term: 'Selektor', definition: 'En CSS-selektor er et mønster som bestemmer hvilke HTML-elementer en stilregel skal gjelde for. Elementselektorer (f.eks. p) velger alle elementer av en type, klasseselektorer (f.eks. .viktig) velger elementer med en bestemt klasse, og ID-selektorer (f.eks. #header) velger ett bestemt element. Selektorer kan kombineres for å lage mer presise mønstre, for eksempel nav a for lenker inne i et nav-element.' },
    { term: 'Boksmodellen', definition: 'CSS-boksmodellen beskriver hvordan hvert HTML-element behandles som en rektangulær boks med fire lag: innhold (content) innerst, deretter polstring (padding), kantlinje (border) og til slutt marg (margin) ytterst. Padding er avstanden mellom innholdet og kantlinjen, mens margin er avstanden mellom elementets kantlinje og omgivende elementer. Med box-sizing: border-box inkluderes padding og border i elementets angitte bredde.' },
    { term: 'Flexbox', definition: 'Flexbox (Flexible Box Layout) er en CSS-layoutmodul designet for å arrangere elementer i én dimensjon – enten horisontalt (rad) eller vertikalt (kolonne). Flexbox gjør det enkelt å fordele plass, justere elementer og endre rekkefølge uten å endre HTML-strukturen. Den aktiveres med display: flex på foreldreelementet og styres med egenskaper som justify-content, align-items og flex-direction.' },
    { term: 'CSS Grid', definition: 'CSS Grid Layout er en todimensjonal layout-modul som lar deg lage avanserte sideoppsett med rader og kolonner. I motsetning til flexbox som jobber i én dimensjon, kan grid plassere elementer i både rader og kolonner samtidig. Grid aktiveres med display: grid og konfigureres med egenskaper som grid-template-columns, grid-template-rows og gap for avstand mellom cellene.' },
    { term: 'Spesifisitet', definition: 'Spesifisitet er reglene som bestemmer hvilken CSS-regel som vinner når flere regler gjelder for det samme elementet. ID-selektorer (#id) har høyest spesifisitet, fulgt av klasseselektorer (.klasse), og deretter elementselektorer (p). Inline-stiler (style-attributten) overstyrer alle selektorer, og !important overstyrer alt annet. Å forstå spesifisitet er viktig for å unngå uventede resultater i CSS.' },
  ],
  content: [
    {
      id: 'it1-4-3-intro',
      type: 'text',
      content: `## CSS – stil og layout

CSS (Cascading Style Sheets) er språket som gir nettsider utseende og layout. Mens HTML definerer hva innholdet er, bestemmer CSS hvordan det skal se ut. Uten CSS ville alle nettsider sett ut som enkle tekstdokumenter med standardstiler fra nettleseren – svart tekst på hvit bakgrunn med Times New Roman-skrift.

Med CSS kan du kontrollere alt fra farger, skrifttyper og avstander til komplekse sideoppsett, animasjoner og overganger. CSS gjør det også mulig å tilpasse utseendet til ulike skjermstørrelser, noe som er essensielt for at nettsider skal fungere godt på både datamaskiner, nettbrett og mobiltelefoner.

I dette kapittelet lærer du å bruke CSS-selektorer for å velge elementer, sette egenskaper for utseende, forstå boksmodellen, og lage moderne layout med flexbox og grid.`,
    },
    {
      id: 'it1-4-3-def-css',
      type: 'definition',
      title: 'CSS (Cascading Style Sheets)',
      content: `**CSS** er et stilspråk som beskriver presentasjonen av HTML-dokumenter. CSS skiller innholdets struktur (HTML) fra presentasjonen (visuell stil), noe som gir større fleksibilitet og kontroll. Det «kaskaderende» i navnet betyr at stiler kan arves fra overordnede elementer og overstyres av mer spesifikke regler. CSS-regler består av en selektor som velger elementer, og en deklarasjonsblokk med egenskaper og verdier. CSS kan inkluderes i HTML på tre måter: eksternt stilark (anbefalt), internt stilark i head, eller inline-stiler direkte på elementer.`,
    },
    {
      id: 'it1-4-3-text-metoder',
      type: 'text',
      title: 'Tre måter å inkludere CSS',
      content: `Det finnes tre metoder for å legge til CSS i en HTML-side:

**1. Eksternt stilark (anbefalt)**
CSS-koden skrives i en egen .css-fil som kobles til HTML-dokumentet:

\`\`\`html
<head>
  <link rel="stylesheet" href="stil.css">
</head>
\`\`\`

\`\`\`css
/* fil: stil.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

h1 {
  color: #333;
}
\`\`\`

**2. Internt stilark**
CSS-koden skrives i en \`<style>\`-tag i HTML-dokumentets \`<head>\`:

\`\`\`html
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
  </style>
</head>
\`\`\`

**3. Inline-stiler**
CSS skrives direkte på et element med \`style\`-attributten:

\`\`\`html
<p style="color: blue; font-size: 18px;">Denne teksten er blå.</p>
\`\`\`

Eksternt stilark er den anbefalte metoden fordi den gir best separasjon mellom HTML og CSS, gjør det enkelt å gjenbruke stiler på flere sider, og gjør koden mer ryddig og vedlikeholdbar. Nettleseren cacher også eksterne stilark, noe som gjør lastingen raskere ved gjentatte besøk.`,
    },
    {
      id: 'it1-4-3-text-selektorer',
      type: 'text',
      title: 'CSS-selektorer',
      content: `Selektorer bestemmer hvilke HTML-elementer en CSS-regel skal påvirke. Det finnes mange typer selektorer:

**Elementselektorer** – Velger alle elementer av en type:
\`\`\`css
p {
  color: #333;
  line-height: 1.6;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
\`\`\`

**Klasseselektorer** – Velger elementer med en bestemt klasse (starter med punktum):
\`\`\`css
.viktig {
  color: red;
  font-weight: bold;
}

.kort {
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
}
\`\`\`

Brukes i HTML med \`class\`-attributten:
\`\`\`html
<p class="viktig">Denne teksten er viktig!</p>
<div class="kort">
  <h3>Et kort</h3>
  <p>Innhold i kortet.</p>
</div>
\`\`\`

**ID-selektorer** – Velger ett bestemt element (starter med #):
\`\`\`css
#hovedmeny {
  background-color: navy;
  color: white;
}
\`\`\`

**Kombinerte selektorer**:
\`\`\`css
/* Lenker inne i nav-elementet */
nav a {
  text-decoration: none;
  color: white;
  padding: 0.5rem 1rem;
}

/* Elementer med klasse "aktiv" inne i en liste */
ul .aktiv {
  font-weight: bold;
}

/* Direkte barn av en fleks-beholder */
.container > div {
  flex: 1;
}
\`\`\`

**Pseudo-klasser** – Velger elementer basert på tilstand:
\`\`\`css
a:hover {
  color: orange;          /* Når musepekeren er over lenken */
}

input:focus {
  border-color: blue;     /* Når feltet er i fokus */
}

li:first-child {
  font-weight: bold;      /* Første element i en liste */
}
\`\`\``,
    },
    {
      id: 'it1-4-3-def-selektor',
      type: 'definition',
      title: 'CSS-selektor',
      content: `En **CSS-selektor** er et mønster som angir hvilke HTML-elementer en stilregel skal gjelde for. De vanligste typene er: elementselektorer (\`p\`, \`h1\`) som velger alle elementer av en type, klasseselektorer (\`.klasse\`) som velger elementer med en bestemt class-attributt, og ID-selektorer (\`#id\`) som velger ett unikt element. Selektorer kan kombineres med mellomrom for etterkommere (\`nav a\`), med \`>\` for direkte barn (\`ul > li\`), og med komma for å gi samme stil til flere selektorer (\`h1, h2, h3\`). Pseudo-klasser som \`:hover\` og \`:focus\` velger elementer basert på brukerinteraksjon.`,
    },
    {
      id: 'it1-4-3-text-egenskaper',
      type: 'text',
      title: 'Viktige CSS-egenskaper',
      content: `CSS har hundrevis av egenskaper, men noen brukes mye oftere enn andre:

**Tekst og skrift**:
\`\`\`css
body {
  font-family: 'Segoe UI', Tahoma, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
}
\`\`\`

**Farger og bakgrunn**:
\`\`\`css
.hero {
  background-color: #1a1a2e;
  color: white;
  background-image: url('bakgrunn.jpg');
  background-size: cover;
  background-position: center;
}
\`\`\`

**Avstander og størrelse**:
\`\`\`css
.kort {
  width: 300px;
  max-width: 100%;
  padding: 1.5rem;
  margin: 1rem auto;
}
\`\`\`

**Kantlinjer og avrunding**:
\`\`\`css
.boks {
  border: 2px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
\`\`\`

**Enheter i CSS**: \`px\` (piksler – fast størrelse), \`rem\` (relativt til rot-skriftstørrelsen), \`em\` (relativt til forelders skriftstørrelse), \`%\` (prosent av foreldreelementet), \`vw/vh\` (prosent av visningsvinduets bredde/høyde).`,
    },
    {
      id: 'it1-4-3-text-boksmodell',
      type: 'text',
      title: 'CSS-boksmodellen',
      content: `Hvert HTML-element behandles av CSS som en rektangulær boks med fire lag, fra innsiden og ut:

1. **Content (innhold)** – Selve innholdet (tekst, bilder osv.)
2. **Padding (polstring)** – Avstand mellom innholdet og kantlinjen
3. **Border (kantlinje)** – En synlig kantlinje rundt elementet
4. **Margin (marg)** – Avstand mellom elementet og omgivende elementer

\`\`\`css
.boks {
  width: 300px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
}
\`\`\`

Med standard boksmodell blir den **totale bredden** av denne boksen: 300px (innhold) + 40px (padding venstre + høyre) + 4px (border venstre + høyre) + 20px (margin venstre + høyre) = **364px**.

For å gjøre beregninger enklere bruker de fleste utviklere \`box-sizing: border-box\`, som inkluderer padding og border i den angitte bredden:

\`\`\`css
* {
  box-sizing: border-box;
}

.boks {
  width: 300px;       /* Total bredde inkl. padding og border */
  padding: 20px;
  border: 2px solid black;
  margin: 10px;       /* Margin legges fortsatt til utenfor */
}
\`\`\`

Med \`border-box\` blir innholdsområdet automatisk redusert slik at totalbredden forblir 300px. De fleste moderne CSS-rammeverk setter \`box-sizing: border-box\` som standard fordi det gir mer intuitiv størrelsesberegning.`,
    },
    {
      id: 'it1-4-3-def-boksmodell',
      type: 'definition',
      title: 'Boksmodellen',
      content: `**Boksmodellen** er det grunnleggende konseptet i CSS der hvert HTML-element representeres som en rektangulær boks med fire konsentriske lag: content (innholdet), padding (polstring mellom innhold og kantlinje), border (kantlinje) og margin (avstand til omgivende elementer). Standard \`box-sizing: content-box\` beregner bredde og høyde kun for innholdsområdet, mens \`box-sizing: border-box\` inkluderer padding og border i den angitte bredden. Å forstå boksmodellen er avgjørende for å kontrollere størrelse, avstander og layout i CSS.`,
    },
    {
      id: 'it1-4-3-example-boksmodell',
      type: 'example',
      title: 'Eksempel: Boksmodellen i praksis',
      content: `La oss lage et kort med synlig boksmodell:

\`\`\`css
* {
  box-sizing: border-box;
}

.profil-kort {
  width: 320px;
  padding: 24px;
  margin: 16px auto;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.profil-kort h2 {
  margin: 0 0 8px 0;
  font-size: 1.25rem;
}

.profil-kort p {
  margin: 0;
  color: #666;
  line-height: 1.5;
}
\`\`\`

\`\`\`html
<div class="profil-kort">
  <h2>Kari Nordmann</h2>
  <p>Elev ved VG2, Informasjonsteknologi. Interessert i webdesign og programmering.</p>
</div>
\`\`\`

Resultatet er et elegant kort med avrundede hjørner, subtil skygge og god avstand mellom innhold og kantlinje. Totalbredden er nøyaktig 320px takket være \`border-box\`.`,
    },
    {
      id: 'it1-4-3-text-flexbox',
      type: 'text',
      title: 'Flexbox – fleksibel layout',
      content: `**Flexbox** er en kraftig CSS-layoutmodul designet for å arrangere elementer i én dimensjon – enten horisontalt (som en rad) eller vertikalt (som en kolonne). Flexbox gjør det enkelt å fordele plass, sentrere elementer og lage responsive oppsett.

For å bruke flexbox setter du \`display: flex\` på foreldreelementet (flex-containeren). Barna blir da flex-elementer som automatisk plasseres ved siden av hverandre:

\`\`\`css
.meny {
  display: flex;
  justify-content: space-between;  /* Fordel plass mellom elementene */
  align-items: center;             /* Sentrer vertikalt */
  padding: 1rem 2rem;
  background-color: #2c3e50;
}

.meny a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
}
\`\`\`

\`\`\`html
<nav class="meny">
  <a href="/">Hjem</a>
  <a href="/om">Om oss</a>
  <a href="/tjenester">Tjenester</a>
  <a href="/kontakt">Kontakt</a>
</nav>
\`\`\`

Viktige flexbox-egenskaper for containeren:
- \`flex-direction\`: \`row\` (standard, horisontalt) eller \`column\` (vertikalt)
- \`justify-content\`: Fordeling langs hovedaksen (\`flex-start\`, \`center\`, \`space-between\`, \`space-around\`, \`space-evenly\`)
- \`align-items\`: Justering langs kryssaksen (\`flex-start\`, \`center\`, \`flex-end\`, \`stretch\`)
- \`flex-wrap\`: \`wrap\` lar elementene bryte til ny linje hvis det ikke er plass
- \`gap\`: Avstand mellom flex-elementene

Viktige flexbox-egenskaper for barna:
- \`flex: 1\` – Elementet tar opp tilgjengelig plass
- \`flex-grow\`, \`flex-shrink\`, \`flex-basis\` – Finere kontroll over størrelse
- \`order\` – Endre rekkefølgen uten å endre HTML

Her er et eksempel med tre like brede kolonner:

\`\`\`css
.tre-kolonner {
  display: flex;
  gap: 1.5rem;
}

.tre-kolonner > div {
  flex: 1;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
}
\`\`\`

\`\`\`html
<div class="tre-kolonner">
  <div>
    <h3>Kolonne 1</h3>
    <p>Innhold i første kolonne.</p>
  </div>
  <div>
    <h3>Kolonne 2</h3>
    <p>Innhold i andre kolonne.</p>
  </div>
  <div>
    <h3>Kolonne 3</h3>
    <p>Innhold i tredje kolonne.</p>
  </div>
</div>
\`\`\``,
    },
    {
      id: 'it1-4-3-text-grid',
      type: 'text',
      title: 'CSS Grid – todimensjonal layout',
      content: `**CSS Grid** er en todimensjonal layoutmodul som lar deg plassere elementer i både rader og kolonner samtidig. Grid er ideelt for sideoppsett og komplekse layouter.

\`\`\`css
.side-layout {
  display: grid;
  grid-template-columns: 250px 1fr 250px;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
  min-height: 100vh;
}

.header   { grid-column: 1 / -1; }  /* Spenner over alle kolonner */
.sidebar  { background-color: #f0f0f0; padding: 1rem; }
.innhold  { padding: 1rem; }
.annonser { background-color: #f0f0f0; padding: 1rem; }
.footer   { grid-column: 1 / -1; }
\`\`\`

\`\`\`html
<div class="side-layout">
  <header class="header">Toppmeny</header>
  <aside class="sidebar">Sidemeny</aside>
  <main class="innhold">Hovedinnhold</main>
  <aside class="annonser">Annonser</aside>
  <footer class="footer">Bunntekst</footer>
</div>
\`\`\`

Viktige grid-egenskaper:
- \`grid-template-columns\`: Definerer antall og bredde på kolonner
- \`grid-template-rows\`: Definerer antall og høyde på rader
- \`gap\`: Avstand mellom cellene
- \`grid-column\`: Bestemmer hvilke kolonner et element spenner over
- \`grid-row\`: Bestemmer hvilke rader et element spenner over
- \`fr\`-enheten: En fraksjon av tilgjengelig plass

Grid med \`repeat()\` og \`auto-fit\` for responsivt rutenett:

\`\`\`css
.kort-rutenett {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
}

.kort {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
\`\`\`

Dette skaper et rutenett der kortene automatisk tilpasser seg skjermbredden – flere kolonner på brede skjermer og færre på smale skjermer, uten at vi trenger media queries.`,
    },
    {
      id: 'it1-4-3-note-flex-vs-grid',
      type: 'note',
      title: 'Flexbox eller Grid?',
      content: `Flexbox og grid er ikke konkurrenter – de utfyller hverandre:

- **Flexbox** er best for éndimenjonale oppsett: navigasjonsmenyer, kort-rekker, sentrering av innhold, og fordeling av elementer langs én akse.
- **Grid** er best for todimensjonale oppsett: sideoppsett med header/sidebar/footer, bilderutenett, og komplekse layouter med både rader og kolonner.

En vanlig tilnærming er å bruke grid for det overordnede sideoppsettet og flexbox for layout innenfor individuelle komponenter.`,
    },
    {
      id: 'it1-4-3-tip-reset',
      type: 'tip',
      title: 'CSS-reset for konsistent utseende',
      content: `Nettlesere har innebygde standardstiler som kan variere. For å sikre konsistent utseende på tvers av nettlesere, starter mange utviklere med en enkel CSS-reset:

\`\`\`css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.6;
}
\`\`\`

Dette nullstiller marginer og polstring, setter \`border-box\` som standard, og definerer en god grunnstil.`,
    },
    {
      id: 'it1-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it1-4-3-ex-1',
        number: '4.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den anbefalte metoden for å inkludere CSS i en nettside?',
        options: [
          { id: 'a', text: 'Inline-stiler direkte på hvert element', isCorrect: false, feedback: 'Inline-stiler gjør koden uoversiktlig og vanskelig å vedlikeholde.' },
          { id: 'b', text: 'Et eksternt .css-stilark koblet med <link>-taggen', isCorrect: true },
          { id: 'c', text: 'Internt stilark i <style>-taggen i head', isCorrect: false, feedback: 'Internt stilark fungerer, men eksternt er bedre for gjenbruk og caching.' },
          { id: 'd', text: 'JavaScript som legger til stiler dynamisk', isCorrect: false, feedback: 'CSS bør defineres i stilark, ikke via JavaScript.' },
        ],
        solution: 'Et eksternt stilark (.css-fil) koblet med <link>-taggen i head er anbefalt fordi det gir best separasjon mellom HTML og CSS, kan gjenbrukes på flere sider, og caches av nettleseren for raskere lasting.',
      },
    },
    {
      id: 'it1-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it1-4-3-ex-2',
        number: '4.3.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken CSS-selektor velger alle elementer med klassen "fremhevet"?',
        options: [
          { id: 'a', text: '#fremhevet { }', isCorrect: false, feedback: '# velger et element med id="fremhevet", ikke klasse.' },
          { id: 'b', text: '.fremhevet { }', isCorrect: true },
          { id: 'c', text: 'fremhevet { }', isCorrect: false, feedback: 'Uten prefiks ville dette velge et HTML-element som heter <fremhevet>, som ikke eksisterer.' },
          { id: 'd', text: '*fremhevet { }', isCorrect: false, feedback: '* er universalselektoren som velger alle elementer, ikke en spesifikk klasse.' },
        ],
        solution: 'Klasseselektorer starter med punktum (.) fulgt av klassenavnet. .fremhevet velger alle HTML-elementer som har attributten class="fremhevet".',
      },
    },
    {
      id: 'it1-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it1-4-3-ex-3',
        number: '4.3.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'I CSS-boksmodellen med `box-sizing: border-box`, hva er den totale bredden til et element med `width: 200px; padding: 20px; border: 5px solid black;`?',
        options: [
          { id: 'a', text: '250px', isCorrect: false, feedback: 'Det ville vært tilfelle med standard content-box, der padding og border legges til.' },
          { id: 'b', text: '200px', isCorrect: true },
          { id: 'c', text: '225px', isCorrect: false, feedback: 'Med border-box inkluderes padding og border i den angitte bredden.' },
          { id: 'd', text: '150px', isCorrect: false, feedback: 'Innholdsområdet krympes, men totalbredden forblir 200px.' },
        ],
        solution: 'Med box-sizing: border-box inkluderes padding og border i den angitte bredden. Totalbredden er nøyaktig 200px – innholdsområdet krympes automatisk for å gi plass til 20px padding på hver side og 5px border på hver side.',
      },
    },
    {
      id: 'it1-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it1-4-3-ex-4',
        number: '4.3.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken CSS-egenskap brukes for å sentrere flex-elementer horisontalt i en flex-container med standard `flex-direction: row`?',
        options: [
          { id: 'a', text: 'align-items: center', isCorrect: false, feedback: 'align-items sentrerer langs kryssaksen (vertikalt ved flex-direction: row).' },
          { id: 'b', text: 'text-align: center', isCorrect: false, feedback: 'text-align påvirker tekstjustering, ikke flexbox-layout.' },
          { id: 'c', text: 'justify-content: center', isCorrect: true },
          { id: 'd', text: 'margin: 0 auto', isCorrect: false, feedback: 'margin: auto kan brukes på individuelle elementer, men justify-content er flexbox-egenskapen.' },
        ],
        solution: 'justify-content styrer fordelingen langs hovedaksen. Med standard flex-direction: row er hovedaksen horisontal, så justify-content: center sentrerer elementene horisontalt. align-items styrer den andre aksen (vertikalt).',
      },
    },
    {
      id: 'it1-4-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it1-4-3-ex-5',
        number: '4.3.5',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv CSS som lager en navigasjonsmeny med følgende krav:
- Mørk bakgrunnsfarge (f.eks. #2c3e50)
- Hvit tekstfarge
- Elementene skal vises horisontalt med flexbox
- Lik avstand mellom alle lenkene
- Lenkene skal ikke ha understreking
- Når musepekeren holdes over en lenke, skal bakgrunnsfargen endre seg

Skriv også HTML-strukturen for menyen med minst fire lenker.`,
        solution: `\`\`\`html
<nav class="hovedmeny">
  <a href="/">Hjem</a>
  <a href="/nyheter">Nyheter</a>
  <a href="/om-oss">Om oss</a>
  <a href="/kontakt">Kontakt</a>
</nav>
\`\`\`

\`\`\`css
.hovedmeny {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #2c3e50;
  padding: 0;
  list-style: none;
}

.hovedmeny a {
  color: white;
  text-decoration: none;
  padding: 1rem 1.5rem;
  transition: background-color 0.3s;
}

.hovedmeny a:hover {
  background-color: #34495e;
}
\`\`\`

Flexbox med justify-content: space-evenly fordeler lenkene med lik avstand. Transition gir en myk overgang ved hover-effekten.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it1-4-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it1-4-3-ex-6',
        number: '4.3.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Lag CSS for et responsivt kortrutenett med CSS Grid. Kravene er:
- Kortene skal automatisk tilpasse seg skjermbredden
- Minimum bredde per kort: 250px
- Avstand mellom kortene: 1.5rem
- Hvert kort skal ha hvit bakgrunn, avrundede hjørner, padding og en subtil skygge
- Skriv også HTML-strukturen med minst fire kort

Bruk grid-template-columns med repeat(), auto-fit og minmax().`,
        solution: `\`\`\`html
<section class="kort-rutenett">
  <div class="kort">
    <h3>HTML</h3>
    <p>Strukturspråket for nettsider. Definerer innhold og struktur.</p>
  </div>
  <div class="kort">
    <h3>CSS</h3>
    <p>Stilspråket for nettsider. Kontrollerer utseende og layout.</p>
  </div>
  <div class="kort">
    <h3>JavaScript</h3>
    <p>Programmeringsspråk for interaktivitet og dynamisk oppførsel.</p>
  </div>
  <div class="kort">
    <h3>Python</h3>
    <p>Allsidig programmeringsspråk brukt i webutvikling og dataanalyse.</p>
  </div>
</section>
\`\`\`

\`\`\`css
.kort-rutenett {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
}

.kort {
  background-color: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.kort h3 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

.kort p {
  margin: 0;
  color: #666;
  line-height: 1.5;
}
\`\`\`

repeat(auto-fit, minmax(250px, 1fr)) gjør at rutenettet automatisk tilpasser antall kolonner basert på tilgjengelig plass. Hvert kort er minst 250px bredt, men kan vokse for å fylle plassen.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it1-4-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it1-4-3-ex-7',
        number: '4.3.7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Tre CSS-regler gjelder for det samme `<p>`-elementet:\n\n```css\np { color: blue; }\n.tekst { color: green; }\n#intro { color: red; }\n```\n\n```html\n<p id="intro" class="tekst">Hvilken farge får denne teksten?</p>\n```\n\nHvilken farge vises teksten i?',
        options: [
          { id: 'a', text: 'Blå (blue)', isCorrect: false, feedback: 'Elementselektorer har lavest spesifisitet.' },
          { id: 'b', text: 'Grønn (green)', isCorrect: false, feedback: 'Klasseselektorer har middels spesifisitet, men ID-selektorer overstyrer.' },
          { id: 'c', text: 'Rød (red)', isCorrect: true },
          { id: 'd', text: 'Svart (standard)', isCorrect: false, feedback: 'Minst én av reglene gjelder, så standardfargen brukes ikke.' },
        ],
        solution: 'CSS-spesifisitet avgjør: ID-selektorer (#intro) har høyest spesifisitet og overstyrer både klasseselektorer (.tekst) og elementselektorer (p). Rekkefølgen er: elementselektorer < klasseselektorer < ID-selektorer < inline-stiler < !important.',
      },
    },
  ],
  exercises: [],
  prevChapter: 'it-1-4-2',
  nextChapter: 'it-1-4-4',
};

// ============================================================================
// KAPITTEL 4.4: Responsivt design med CSS
// ============================================================================

export const CHAPTER_IT_1_4_4: TextbookChapter = {
  id: 'it-1-4-4',
  courseId: 'it-1',
  chapterNumber: '4.4',
  title: 'Responsivt design med CSS',
  description: 'Lær å lage nettsider som tilpasser seg ulike skjermstørrelser med media queries, mobile-first-tilnærming, responsive bilder og viewport-enheter.',
  estimatedMinutes: 65,
  competenceGoals: [
    'utvikle nettsider med responsivt design som fungerer på ulike enheter',
    'anvende mobile-first-prinsippet i utvikling av brukergrensesnitt',
  ],
  keyTerms: [
    { term: 'Responsivt design', definition: 'En designtilnærming der nettsider automatisk tilpasser layout, bilder og innhold til skjermstørrelsen de vises på. Responsivt design ble introdusert av Ethan Marcotte i 2010 og bygger på tre teknikker: fleksible rutenett (grid), fleksible bilder og CSS media queries. Målet er at brukeren skal få en god opplevelse uavhengig av om de bruker mobiltelefon, nettbrett, bærbar PC eller stor skjerm. I dag er responsivt design en standard forventning for alle nettsider.' },
    { term: 'Media query', definition: 'En CSS-teknikk som lar deg anvende ulike stilregler basert på egenskaper ved enheten, som skjermbredde, høyde, oppløsning eller orientering. Media queries skrives med @media-regelen og en betingelse, for eksempel @media (min-width: 768px) som aktiverer stilene når skjermbredden er minst 768 piksler. Media queries er grunnsteinen i responsivt design og gjør det mulig å definere ulike layout for forskjellige skjermstørrelser.' },
    { term: 'Breakpoint', definition: 'Et punkt i skjermbredden der layouten endres for å tilpasse seg en ny skjermstørrelse. Vanlige breakpoints er 480px (mobil), 768px (nettbrett), 1024px (liten laptop) og 1200px (desktop). Breakpoints defineres i media queries og markerer overgangen mellom ulike layoutvarianter. Det er viktig å velge breakpoints basert på innholdet, ikke spesifikke enheter, fordi enhetsstørrelser endrer seg over tid.' },
    { term: 'Mobile-first', definition: 'En designstrategi der man starter med å designe for den minste skjermstørrelsen (mobiltelefon) og deretter gradvis legger til mer avansert layout for større skjermer med min-width media queries. Mobile-first sikrer at grunnopplevelsen fungerer på alle enheter, og er også bedre for ytelse fordi mobile enheter ikke trenger å laste ned og overstyre desktop-stiler. Google anbefaler mobile-first for bedre søkemotoroptimalisering.' },
    { term: 'Viewport', definition: 'Det synlige området av en nettside i nettleservinduet. Viewport-størrelsen varierer mellom enheter – en mobiltelefon kan ha viewport-bredde på 375px mens en desktop kan ha 1920px. HTML-meta-taggen <meta name="viewport" content="width=device-width, initial-scale=1.0"> er nødvendig for at responsivt design skal fungere på mobile enheter. Uten denne taggen vil mobilnettlesere forsøke å vise hele desktop-versjonen nedskalert.' },
    { term: 'Viewport-enheter', definition: 'CSS-enheter som er relative til viewport-størrelsen. vw (viewport width) er 1% av viewport-bredden, vh (viewport height) er 1% av viewport-høyden, vmin er 1% av den minste dimensjonen, og vmax er 1% av den største. Viewport-enheter er nyttige for å lage elementer som skalerer med skjermstørrelsen, for eksempel fullskjerm-seksjoner med height: 100vh eller responsive skriftstørrelser med font-size: 4vw.' },
    { term: 'Responsive bilder', definition: 'Teknikker for å tilpasse bilder til ulike skjermstørrelser og oppløsninger. Den enkleste metoden er max-width: 100% som sørger for at bilder aldri er bredere enn foreldreelementet. HTML-elementene <picture> og srcset-attributten gir mer avansert kontroll ved å la nettleseren velge riktig bildestørrelse basert på skjermoppløsning og viewport-bredde, noe som sparer båndbredde på mobile enheter.' },
  ],
  content: [
    {
      id: 'it-1-4-4-intro',
      type: 'text',
      content: `## Responsivt design med CSS

Folk bruker nettsider på alt fra små mobiltelefoner med 375 piksler bredde til store skrivebordsmonitorer med over 2500 piksler. En nettside som ser flott ut på en stor skjerm kan være umulig å bruke på en mobiltelefon hvis den ikke er tilpasset. **Responsivt design** handler om å lage nettsider som automatisk tilpasser seg skjermstørrelsen de vises på, slik at brukeren alltid får en god opplevelse.

Begrepet responsivt webdesign ble først brukt av Ethan Marcotte i 2010, og har siden blitt en universell standard. I dag forventer alle – brukere, arbeidsgivere og søkemotorer – at nettsider fungerer godt på alle enheter. Google bruker til og med mobilversjonen av nettsider som grunnlag for søkerangering, noe som gjør responsivt design viktig også for synlighet på nett.

I dette kapittelet skal du lære de viktigste teknikkene for responsivt design: viewport-innstillinger, CSS media queries, mobile-first-prinsippet, responsive bilder og viewport-enheter.`,
    },
    {
      id: 'it-1-4-4-def-responsivt',
      type: 'definition',
      title: 'Responsivt design',
      content: `**Responsivt design** er en tilnærming til webdesign der layouten, bildene og innholdet automatisk tilpasser seg størrelsen på skjermen de vises på. Et responsivt design bruker fleksible rutenett, fleksible bilder og CSS media queries for å endre presentasjonen avhengig av viewport-størrelsen. Resultatet er at den samme HTML-koden kan gi en optimal opplevelse på mobiltelefon, nettbrett og desktop uten at man trenger separate versjoner av nettsiden.`,
    },
    {
      id: 'it-1-4-4-text-viewport',
      type: 'text',
      title: 'Viewport-meta-taggen',
      content: `Det første steget for responsivt design er å legge til **viewport-meta-taggen** i HTML-dokumentets \`<head>\`:

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

Denne taggen forteller mobilnettlesere at de skal bruke enhetens faktiske bredde som viewport-bredde, i stedet for å late som om skjermen er 980 piksler bred (som er standardoppførselen). Uten denne taggen vil mobilnettlesere vise hele desktop-layouten nedskalert, noe som gjør teksten for liten til å lese og knappene for små til å trykke på.

Parametrene i taggen betyr:
- **width=device-width**: Sett viewport-bredden lik enhetens bredde
- **initial-scale=1.0**: Ikke zoom inn eller ut ved lasting

Denne taggen skal alltid være med i alle HTML-dokumenter du lager. Den er så grunnleggende at de fleste kodeeditorer inkluderer den automatisk i HTML-maler.`,
    },
    {
      id: 'it-1-4-4-def-mediaquery',
      type: 'definition',
      title: 'Media query',
      content: `En **media query** er en CSS-teknikk som lar deg anvende stilregler betinget, basert på egenskaper ved enheten eller viewport. Media queries skrives med \`@media\`-regelen etterfulgt av en betingelse i parentes. Alle CSS-regler innenfor blokken gjelder bare når betingelsen er oppfylt. Den vanligste betingelsen er skjermbredde, for eksempel \`@media (min-width: 768px)\` som betyr «når skjermbredden er minst 768 piksler».`,
    },
    {
      id: 'it-1-4-4-text-mediaqueries',
      type: 'text',
      title: 'CSS media queries',
      content: `Media queries er det viktigste verktøyet for responsivt design. De lar deg definere ulike CSS-regler for ulike skjermstørrelser. Syntaksen er:

\`\`\`css
/* Grunnstiler som alltid gjelder */
body {
  font-family: Arial, sans-serif;
  padding: 1rem;
}

/* Stiler som gjelder når skjermen er minst 768px bred */
@media (min-width: 768px) {
  body {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
}

/* Stiler som gjelder når skjermen er minst 1024px bred */
@media (min-width: 1024px) {
  body {
    padding: 3rem;
  }
}
\`\`\`

Du kan også bruke **max-width** for å målrette mot smale skjermer:

\`\`\`css
/* Gjelder bare for skjermer smalere enn 600px */
@media (max-width: 600px) {
  .navigasjon {
    flex-direction: column;
  }
}
\`\`\`

Media queries kan kombineres med **and**, **or** (komma), og **not**:

\`\`\`css
/* Gjelder for skjermer mellom 768px og 1024px */
@media (min-width: 768px) and (max-width: 1024px) {
  .sidebar {
    width: 200px;
  }
}

/* Gjelder for enten smale skjermer eller utskrift */
@media (max-width: 600px), print {
  .reklame {
    display: none;
  }
}
\`\`\`

Vanlige media query-betingelser inkluderer:
- \`min-width\` / \`max-width\` – skjermbredde
- \`min-height\` / \`max-height\` – skjermhøyde
- \`orientation: portrait\` / \`orientation: landscape\` – stående eller liggende
- \`prefers-color-scheme: dark\` – brukerens preferanse for mørkt tema
- \`prefers-reduced-motion: reduce\` – brukerens preferanse for redusert bevegelse`,
    },
    {
      id: 'it-1-4-4-example-mediaquery',
      type: 'example',
      title: 'Eksempel: Responsiv navigasjonsmeny',
      content: `Her er et praktisk eksempel på en navigasjonsmeny som endrer layout basert på skjermstørrelse:

\`\`\`html
<header class="toppfelt">
  <h1 class="logo">MinSide</h1>
  <nav class="meny">
    <a href="/">Hjem</a>
    <a href="/tjenester">Tjenester</a>
    <a href="/prosjekter">Prosjekter</a>
    <a href="/kontakt">Kontakt</a>
  </nav>
</header>
\`\`\`

\`\`\`css
/* Mobile-first: Grunnstiler for mobil */
.toppfelt {
  background-color: #1a1a2e;
  color: white;
  padding: 1rem;
}

.logo {
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  text-align: center;
}

.meny {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.meny a {
  color: white;
  text-decoration: none;
  padding: 0.75rem 1rem;
  background-color: #16213e;
  border-radius: 6px;
  text-align: center;
}

.meny a:hover {
  background-color: #0f3460;
}

/* Nettbrett og oppover */
@media (min-width: 768px) {
  .toppfelt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }

  .logo {
    margin: 0;
    text-align: left;
  }

  .meny {
    flex-direction: row;
    gap: 0;
  }

  .meny a {
    background-color: transparent;
    border-radius: 0;
    padding: 0.5rem 1rem;
  }

  .meny a:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
}
\`\`\`

På mobil vises menyen vertikalt under logoen med synlige knapper. På nettbrett og desktop vises logoen og menyen side om side i en horisontal linje. Media querien \`@media (min-width: 768px)\` aktiverer desktop-layouten når skjermen er bred nok.`,
    },
    {
      id: 'it-1-4-4-text-mobilefirst',
      type: 'text',
      title: 'Mobile-first-prinsippet',
      content: `**Mobile-first** betyr at du starter med å designe og kode for den minste skjermstørrelsen, og deretter legger til stiler for større skjermer med \`min-width\` media queries. Dette er det motsatte av desktop-first, der man starter med desktop og bruker \`max-width\` for å tilpasse til mobil.

**Hvorfor mobile-first?**

1. **Ytelse**: Mobile enheter laster bare grunnstilene. Desktop-stiler lastes kun når de trengs.
2. **Prioritering**: Du tvinges til å fokusere på det viktigste innholdet først, fordi plassen er begrenset.
3. **Progressiv forbedring**: Grunnopplevelsen fungerer overalt, og større skjermer får forbedringer.
4. **SEO**: Google indekserer mobile-first, så mobilversjonen er den viktigste for søkerangering.

**Sammenligning av tilnærminger:**

\`\`\`css
/* Desktop-first (anbefales IKKE) */
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

/* Mobile-first (anbefalt) */
.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .container {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
}
\`\`\`

Med mobile-first skriver du de enkleste stilene først (én kolonne) og legger til kompleksitet (tre kolonner) for større skjermer. Denne rekkefølgen er mer logisk og lettere å vedlikeholde.`,
    },
    {
      id: 'it-1-4-4-def-breakpoint',
      type: 'definition',
      title: 'Breakpoint',
      content: `Et **breakpoint** er et punkt i skjermbredden der layouten endres via en media query. Breakpoints markerer overgangen mellom ulike layoutvarianter, for eksempel fra én kolonne på mobil til to kolonner på nettbrett. Vanlige breakpoints er 480px (stor mobil), 768px (nettbrett), 1024px (liten laptop) og 1200px (desktop). Man bør velge breakpoints basert på når innholdet trenger en ny layout, ikke basert på spesifikke enhetsmodeller, fordi nye enheter med nye størrelser kommer hele tiden.`,
    },
    {
      id: 'it-1-4-4-text-responsive-bilder',
      type: 'text',
      title: 'Responsive bilder',
      content: `Bilder er ofte den største ressursen på en nettside, og det er viktig at de tilpasser seg skjermstørrelsen. Den enkleste teknikken er å sette \`max-width: 100%\` på bilder:

\`\`\`css
img {
  max-width: 100%;
  height: auto;
}
\`\`\`

Dette sørger for at bildet aldri er bredere enn foreldreelementet, og \`height: auto\` bevarer bildeforholdet. Denne regelen bør være med i alle prosjektene dine som en grunnstil.

For mer avansert kontroll bruker du **srcset** og **sizes** i HTML:

\`\`\`html
<img
  src="bilde-800.jpg"
  srcset="bilde-400.jpg 400w, bilde-800.jpg 800w, bilde-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt="Beskrivelse av bildet"
>
\`\`\`

Her forteller \`srcset\` nettleseren hvilke bildestørrelser som er tilgjengelige, og \`sizes\` forteller hvor bredt bildet vil bli vist ved ulike viewport-størrelser. Nettleseren velger automatisk den mest passende bildefilen basert på skjermoppløsning og viewport-bredde.

**\`<picture>\`-elementet** gir enda mer kontroll:

\`\`\`html
<picture>
  <source media="(min-width: 1024px)" srcset="bilde-desktop.jpg">
  <source media="(min-width: 768px)" srcset="bilde-nettbrett.jpg">
  <img src="bilde-mobil.jpg" alt="Beskrivelse av bildet">
</picture>
\`\`\`

Med \`<picture>\` kan du vise helt forskjellige bilder på ulike skjermstørrelser. For eksempel et bredt panoramabilde på desktop og et beskåret portrettbilde på mobil.`,
    },
    {
      id: 'it-1-4-4-text-viewport-enheter',
      type: 'text',
      title: 'Viewport-enheter',
      content: `Viewport-enheter er CSS-enheter som er relative til størrelsen på nettleservinduet:

| Enhet | Betydning | Eksempel |
|-------|-----------|----------|
| \`vw\` | 1% av viewport-bredden | \`50vw\` = halve bredden |
| \`vh\` | 1% av viewport-høyden | \`100vh\` = full høyde |
| \`vmin\` | 1% av den minste dimensjonen | Nyttig for kvadratiske elementer |
| \`vmax\` | 1% av den største dimensjonen | Nyttig for å fylle mest mulig plass |

\`\`\`css
/* Fullskjerm-heltseksjon */
.heltseksjon {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a2e;
  color: white;
}

.heltseksjon h1 {
  font-size: 5vw;  /* Skriftstørrelsen skalerer med bredden */
}

/* Responsiv tekststørrelse med clamp() */
h1 {
  font-size: clamp(1.5rem, 4vw, 3.5rem);
}
\`\`\`

**clamp()-funksjonen** er spesielt nyttig for responsiv typografi. Den tar tre verdier: minimum, foretrukket og maksimum. \`clamp(1.5rem, 4vw, 3.5rem)\` betyr at skriftstørrelsen er \`4vw\` (4% av viewport-bredden), men aldri mindre enn \`1.5rem\` og aldri større enn \`3.5rem\`. Dette gir jevn skalering uten media queries.

**Obs!** \`100vh\` kan oppføre seg uventet på mobiltelefoner fordi adresselinjen i nettleseren endrer den synlige høyden. Den nyere enheten \`dvh\` (dynamic viewport height) tar hensyn til dette:

\`\`\`css
.heltseksjon {
  height: 100dvh;  /* Dynamisk viewport-høyde */
}
\`\`\``,
    },
    {
      id: 'it-1-4-4-example-responsiv-side',
      type: 'example',
      title: 'Eksempel: Komplett responsiv nettside',
      content: `Her er et komplett eksempel på en responsiv nettside med mobile-first-tilnærming:

\`\`\`html
<!DOCTYPE html>
<html lang="nb">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsiv portfolio</title>
  <link rel="stylesheet" href="stil.css">
</head>
<body>
  <header class="toppfelt">
    <h1>Mitt Portfolio</h1>
    <nav class="navigasjon">
      <a href="#prosjekter">Prosjekter</a>
      <a href="#om">Om meg</a>
      <a href="#kontakt">Kontakt</a>
    </nav>
  </header>

  <section class="helt">
    <h2>Velkommen!</h2>
    <p>Jeg er en webutvikler som lager moderne nettsider.</p>
  </section>

  <main class="innhold">
    <section id="prosjekter" class="prosjekter">
      <h2>Mine prosjekter</h2>
      <div class="kort-rutenett">
        <div class="kort">
          <h3>Nettbutikk</h3>
          <p>En responsiv nettbutikk bygd med HTML og CSS.</p>
        </div>
        <div class="kort">
          <h3>Blogg</h3>
          <p>En personlig blogg med moderne design.</p>
        </div>
        <div class="kort">
          <h3>Dashboard</h3>
          <p>Et oversiktlig kontrollpanel med grafer og data.</p>
        </div>
      </div>
    </section>
  </main>
</body>
</html>
\`\`\`

\`\`\`css
/* Reset og grunnstiler (mobile-first) */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

img {
  max-width: 100%;
  height: auto;
}

/* Header – mobil */
.toppfelt {
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
  text-align: center;
}

.toppfelt h1 {
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
}

.navigasjon {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.navigasjon a {
  color: white;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: #34495e;
}

/* Heltseksjon – mobil */
.helt {
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.helt h2 {
  font-size: clamp(1.8rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
}

/* Prosjektkort – mobil */
.innhold {
  padding: 1.5rem;
}

.kort-rutenett {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1.5rem;
}

.kort {
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

/* --- Nettbrett (768px og oppover) --- */
@media (min-width: 768px) {
  .toppfelt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    text-align: left;
  }

  .toppfelt h1 {
    margin-bottom: 0;
  }

  .navigasjon {
    flex-direction: row;
  }

  .navigasjon a {
    background-color: transparent;
  }

  .helt {
    height: 70vh;
  }

  .innhold {
    padding: 2rem 3rem;
  }

  .kort-rutenett {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

/* --- Desktop (1024px og oppover) --- */
@media (min-width: 1024px) {
  .innhold {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem;
  }

  .kort-rutenett {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .helt {
    height: 80vh;
  }
}
\`\`\`

Legg merke til flyten: Mobilstilene kommer først uten media queries, deretter bygger vi på med \`min-width: 768px\` for nettbrett og \`min-width: 1024px\` for desktop. Rutenettet går fra 1 kolonne (mobil) til 2 kolonner (nettbrett) til 3 kolonner (desktop).`,
    },
    {
      id: 'it-1-4-4-oppgave-tenk',
      type: 'text',
      title: 'Oppsummering',
      content: `Responsivt design er en sentral ferdighet i moderne webutvikling. De viktigste prinsippene å huske er:

- **Viewport-meta-taggen** må alltid være med for at responsivt design skal fungere på mobile enheter
- **Mobile-first** betyr å starte med mobilstiler og bruke \`min-width\` media queries for større skjermer
- **Breakpoints** bør velges basert på innholdet, ikke spesifikke enheter
- **Responsive bilder** med \`max-width: 100%\` er en grunnleggende regel som alltid bør inkluderes
- **Viewport-enheter** (vw, vh) og \`clamp()\` gir fleksibel skalering uten mange media queries
- **Test alltid** designet ditt i nettleserens utviklerverktøy med ulike skjermstørrelser`,
    },
    {
      id: 'it-1-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-1-4-4-ex-1',
        number: '4.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva gjør viewport-meta-taggen `<meta name="viewport" content="width=device-width, initial-scale=1.0">`?',
        options: [
          { id: 'a', text: 'Den gjør at nettsiden lastes raskere på mobil', isCorrect: false, feedback: 'Viewport-taggen påvirker ikke lastetid, men hvordan innholdet skaleres.' },
          { id: 'b', text: 'Den forteller mobilnettlesere at de skal bruke enhetens faktiske bredde som viewport-bredde, i stedet for å vise en nedskalert desktop-versjon', isCorrect: true },
          { id: 'c', text: 'Den skjuler adresselinjen i nettleseren på mobil', isCorrect: false, feedback: 'Viewport-taggen kontrollerer ikke nettleserens brukergrensesnitt.' },
          { id: 'd', text: 'Den aktiverer CSS media queries', isCorrect: false, feedback: 'Media queries fungerer uten viewport-taggen, men resultatet blir feil på mobil uten den.' },
        ],
        solution: 'Viewport-meta-taggen instruerer mobilnettlesere om å bruke enhetens virkelige bredde som viewport-bredde. Uten taggen vil mobilnettlesere anta at siden er designet for en desktop (ca. 980px) og vise hele siden nedskalert, noe som gjør tekst og knapper svært små.',
      },
    },
    {
      id: 'it-1-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-1-4-4-ex-2',
        number: '4.4.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er mobile-first-prinsippet i CSS?',
        options: [
          { id: 'a', text: 'Man lager en egen nettside bare for mobil', isCorrect: false, feedback: 'Mobile-first handler om én responsiv nettside, ikke en egen mobilversjon.' },
          { id: 'b', text: 'Man bruker bare max-width media queries', isCorrect: false, feedback: 'Mobile-first bruker min-width, ikke max-width.' },
          { id: 'c', text: 'Man skriver grunnstilene for mobil først og bruker min-width media queries for å legge til stiler for større skjermer', isCorrect: true },
          { id: 'd', text: 'Man tester alltid på mobil før desktop', isCorrect: false, feedback: 'Testing er viktig, men mobile-first refererer til hvordan CSS-koden er strukturert.' },
        ],
        solution: 'Mobile-first betyr at grunnstilene (uten media queries) er designet for mobilskjermer. Deretter bruker man @media (min-width: ...) for å gradvis legge til mer avansert layout for større skjermer. Dette gir bedre ytelse, tydelig prioritering av innhold, og stemmer overens med Googles mobile-first-indeksering.',
      },
    },
    {
      id: 'it-1-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-1-4-4-ex-3',
        number: '4.4.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: `Gitt følgende CSS, hva er bakgrunnsfargen på et element med klassen \`.boks\` når skjermbredden er 900px?

\`\`\`css
.boks {
  background-color: red;
}

@media (min-width: 600px) {
  .boks {
    background-color: blue;
  }
}

@media (min-width: 1024px) {
  .boks {
    background-color: green;
  }
}
\`\`\``,
        options: [
          { id: 'a', text: 'Rød (red)', isCorrect: false, feedback: 'Rød er grunnstilen, men ved 900px er betingelsen min-width: 600px oppfylt.' },
          { id: 'b', text: 'Blå (blue)', isCorrect: true },
          { id: 'c', text: 'Grønn (green)', isCorrect: false, feedback: 'Grønn krever min-width: 1024px, og 900px er under denne grensen.' },
          { id: 'd', text: 'Ingen bakgrunnsfarge', isCorrect: false, feedback: 'Grunnstilen setter alltid en bakgrunnsfarge.' },
        ],
        solution: 'Ved 900px bredde er betingelsen min-width: 600px oppfylt (900 >= 600), så blå gjelder. Betingelsen min-width: 1024px er IKKE oppfylt (900 < 1024), så grønn gjelder ikke. Resultatet er blå bakgrunnsfarge. CSS-reglene evalueres i rekkefølge, og den siste matchende regelen vinner.',
      },
    },
    {
      id: 'it-1-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-1-4-4-ex-4',
        number: '4.4.4',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv CSS med mobile-first-tilnærming for et kort-rutenett med klassen \`.produkter\`. Kravene:
- Mobil: Kortene skal vises i én kolonne med 1rem avstand
- Nettbrett (768px og oppover): To kolonner med 1.5rem avstand
- Desktop (1200px og oppover): Fire kolonner med 2rem avstand
- Bruk CSS Grid`,
        solution: `\`\`\`css
.produkter {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .produkter {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (min-width: 1200px) {
  .produkter {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
}
\`\`\`

Grunnstilen (mobil) bruker 1fr for én kolonne. Ved 768px øker vi til to kolonner med repeat(2, 1fr), og ved 1200px til fire kolonner med repeat(4, 1fr). gap økes gradvis for å utnytte den ekstra plassen på større skjermer.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-1-4-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-1-4-4-ex-5',
        number: '4.4.5',
        type: 'classic',
        difficulty: 'medium',
        task: `Lag HTML og CSS for en responsiv heltseksjon (hero section) med følgende krav:
- Bakgrunn med gradient fra mørkeblå til lilla
- Hvit tekst med en stor overskrift og en undertekst
- Overskriften skal skalere med viewport-bredden, men ha minimum 1.5rem og maksimum 4rem
- Seksjonen skal fylle hele viewport-høyden
- Alt innhold skal være sentrert både horisontalt og vertikalt

Bruk viewport-enheter og clamp().`,
        solution: `\`\`\`html
<section class="helt">
  <h1>Velkommen til min nettside</h1>
  <p>Moderne webdesign med responsivt layout</p>
</section>
\`\`\`

\`\`\`css
.helt {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #1a1a2e, #6c3483);
  color: white;
  padding: 2rem;
}

.helt h1 {
  font-size: clamp(1.5rem, 5vw, 4rem);
  margin-bottom: 1rem;
}

.helt p {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  opacity: 0.9;
}
\`\`\`

height: 100vh gjør seksjonen like høy som viewport. Flexbox med justify-content: center og align-items: center sentrerer innholdet begge veier. clamp() gir responsiv typografi: 5vw skalerer med bredden, men teksten blir aldri mindre enn 1.5rem eller større enn 4rem.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-1-4-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-1-4-4-ex-6',
        number: '4.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Lag en komplett responsiv profilkort-seksjon. Skriv HTML og CSS med mobile-first:
- Hvert kort har et bilde, navn, rolle og en kort beskrivelse
- Mobil: Kortene i én kolonne, bildet over teksten
- Nettbrett (768px): To kort per rad
- Desktop (1024px): Kortene vises horisontalt med bilde til venstre og tekst til høyre
- Bruk media queries, flexbox og/eller grid
- Bildene skal være responsive`,
        solution: `\`\`\`html
<section class="profiler">
  <div class="profilkort">
    <img src="person1.jpg" alt="Anna Hansen" class="profilbilde">
    <div class="profilinfo">
      <h3>Anna Hansen</h3>
      <p class="rolle">Frontend-utvikler</p>
      <p>Spesialist på responsivt design og tilgjengelige brukergrensesnitt.</p>
    </div>
  </div>
  <div class="profilkort">
    <img src="person2.jpg" alt="Erik Johansen" class="profilbilde">
    <div class="profilinfo">
      <h3>Erik Johansen</h3>
      <p class="rolle">Backend-utvikler</p>
      <p>Erfaren med databaser, API-er og serverarkitektur.</p>
    </div>
  </div>
</section>
\`\`\`

\`\`\`css
/* Grunnstiler – mobil */
.profiler {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 1.5rem;
}

.profilkort {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.profilbilde {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.profilinfo {
  padding: 1.5rem;
}

.profilinfo h3 {
  margin: 0 0 0.25rem 0;
}

.rolle {
  color: #667eea;
  font-weight: 600;
  margin: 0 0 0.75rem 0;
}

/* Nettbrett */
@media (min-width: 768px) {
  .profiler {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .profiler {
    grid-template-columns: 1fr;
    max-width: 900px;
    margin: 0 auto;
  }

  .profilkort {
    display: flex;
    align-items: center;
  }

  .profilbilde {
    width: 200px;
    height: 200px;
    flex-shrink: 0;
  }
}
\`\`\`

På mobil er hvert kort vertikalt med bildet på toppen. På nettbrett vises to kort per rad. På desktop endres hvert kort til horisontal layout med flexbox, der bildet er til venstre og teksten til høyre. object-fit: cover sørger for at bilder fyller plassen uten å forvrenge proporsjoner.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-1-4-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it-1-4-4-ex-7',
        number: '4.4.7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: `Hva gjør denne CSS-regelen?

\`\`\`css
h1 {
  font-size: clamp(1.5rem, 4vw + 0.5rem, 3.5rem);
}
\`\`\``,
        options: [
          { id: 'a', text: 'Skriftstørrelsen er alltid 4vw', isCorrect: false, feedback: 'clamp() begrenser verdien mellom minimum og maksimum.' },
          { id: 'b', text: 'Skriftstørrelsen skalerer med viewport-bredden (4vw + 0.5rem), men er aldri mindre enn 1.5rem eller større enn 3.5rem', isCorrect: true },
          { id: 'c', text: 'Skriftstørrelsen er 1.5rem på mobil, 4vw på nettbrett og 3.5rem på desktop', isCorrect: false, feedback: 'clamp() veksler ikke ved bestemte breakpoints, men gir en flytende skalering med grenser.' },
          { id: 'd', text: 'Skriftstørrelsen er summen av alle tre verdiene', isCorrect: false, feedback: 'clamp() summerer ikke verdiene – den velger den midterste verdien begrenset av min og max.' },
        ],
        solution: 'clamp(min, foretrukket, max) gir en flytende verdi der den foretrukne verdien (4vw + 0.5rem) brukes så lenge den er mellom minimum (1.5rem) og maksimum (3.5rem). På en smal skjerm (f.eks. 375px) ville 4vw + 0.5rem = 15px + 8px = 23px = 1.4375rem, som er under minimum, så 1.5rem brukes. På en bred skjerm (f.eks. 1920px) ville 4vw + 0.5rem = 76.8px + 8px = 84.8px = 5.3rem, som er over maksimum, så 3.5rem brukes.',
      },
    },
  ],
  exercises: [],
  prevChapter: 'it-1-4-3',
  nextChapter: 'it-1-4-5',
};

// ============================================================================
// KAPITTEL 4.5: Avansert CSS – Flexbox og Grid
// ============================================================================

export const CHAPTER_IT_1_4_5: TextbookChapter = {
  id: 'it-1-4-5',
  courseId: 'it-1',
  chapterNumber: '4.5',
  title: 'Avansert CSS – Flexbox og Grid',
  description: 'Mestre CSS Flexbox og Grid for å lage avanserte og fleksible sideoppsett med flex-direction, justify-content, align-items, grid-template, gap og fr-enheter.',
  estimatedMinutes: 75,
  competenceGoals: [
    'bruke CSS Flexbox og Grid til å lage avanserte sideoppsett',
    'velge riktig layout-teknikk for ulike designbehov',
  ],
  keyTerms: [
    { term: 'Flexbox', definition: 'CSS Flexible Box Layout er en endimensjonal layout-modul som arrangerer elementer langs én akse – enten horisontalt (rad) eller vertikalt (kolonne). Flexbox aktiveres med display: flex på foreldreelementet (flex-containeren), og barna blir automatisk flex-elementer som kan strekkes, krympes og justeres. Flexbox er ideell for navigasjonsmenyer, kortlayout, sentrering og fordeling av plass mellom elementer i én retning.' },
    { term: 'Flex-container', definition: 'Et element med display: flex som fungerer som foreldreelement for flex-elementer. Flex-containeren kontrollerer hvordan barna arrangeres med egenskaper som flex-direction (retning), justify-content (fordeling langs hovedaksen), align-items (justering langs kryssaksen), flex-wrap (linjebryting) og gap (avstand mellom elementer).' },
    { term: 'CSS Grid', definition: 'CSS Grid Layout er en todimensjonal layout-modul som lar deg definere rader og kolonner i et rutenett. I motsetning til flexbox, som jobber i én dimensjon, kan grid plassere elementer i begge dimensjoner samtidig. Grid aktiveres med display: grid og konfigureres med egenskaper som grid-template-columns og grid-template-rows for å definere rutenettets struktur. Grid er ideelt for sidelayout, bildegallerier og komplekse dashbord.' },
    { term: 'fr-enhet', definition: 'En fleksibel enhet som representerer en andel av tilgjengelig plass i et CSS Grid. 1fr betyr «én andel av den gjenværende plassen». I grid-template-columns: 1fr 2fr 1fr vil den midterste kolonnen være dobbelt så bred som de to andre. fr-enheten er unik for grid og gjør det enkelt å lage proporsjonale layout uten å beregne prosentandeler manuelt.' },
    { term: 'justify-content', definition: 'En CSS-egenskap som kontrollerer fordelingen av elementer langs hovedaksen i flexbox (horisontalt som standard) eller langs rad-aksen i grid. Vanlige verdier er flex-start (til venstre), flex-end (til høyre), center (sentrert), space-between (lik avstand mellom, ingen avstand i kantene), space-around (lik avstand rundt hvert element) og space-evenly (helt lik avstand overalt).' },
    { term: 'align-items', definition: 'En CSS-egenskap som kontrollerer justeringen av elementer langs kryssaksen i flexbox (vertikalt som standard) eller langs kolonne-aksen i grid. Vanlige verdier er stretch (strekk til full høyde, standard), flex-start (toppen), flex-end (bunnen), center (sentrert vertikalt) og baseline (juster etter tekstens grunnlinje). Denne egenskapen er essensiell for vertikal sentrering.' },
    { term: 'auto-fit / auto-fill', definition: 'Nøkkelord brukt i CSS Grid med repeat()-funksjonen for å lage automatisk tilpassende rutenett. auto-fit kollapser tomme spor og lar eksisterende elementer strekke seg for å fylle plassen. auto-fill beholder tomme spor. Brukes typisk som repeat(auto-fit, minmax(250px, 1fr)) for å lage rutenett der antall kolonner tilpasser seg viewport-bredden automatisk.' },
    { term: 'gap', definition: 'En CSS-egenskap som setter avstanden mellom elementer i flexbox og grid uten å bruke margin. gap kan settes med én verdi for lik avstand i begge retninger (gap: 1rem) eller to verdier for rad og kolonne separat (gap: 1rem 2rem). gap er enklere å bruke enn margin fordi den bare påvirker mellomrommet mellom elementer, ikke kanten utvendig.' },
  ],
  content: [
    {
      id: 'it-1-4-5-intro',
      type: 'text',
      content: `## Avansert CSS – Flexbox og Grid

I kapittel 4.3 ble flexbox og grid kort introdusert. Nå skal vi gå i dybden på disse to kraftige layout-modulene i CSS. Flexbox og grid har revolusjonert måten vi lager sideoppsett på – før disse verktøyene fantes måtte utviklere bruke kreative triks med float, tabeller og absolutt posisjonering for å oppnå selv enkle layout.

**Flexbox** er en endimensjonal layout som jobber langs én akse – enten horisontalt eller vertikalt. Den er perfekt for å fordele plass mellom elementer i en rad eller kolonne, sentrere innhold, og lage navigasjonsmenyer og kortlayout.

**CSS Grid** er en todimensjonal layout som jobber med både rader og kolonner samtidig. Den er ideell for helhetlige sideoppsett, bildegallerier, dashbord og situasjoner der du trenger presis kontroll over plassering i et rutenett.

Å vite når du skal bruke flexbox og når du skal bruke grid er en viktig ferdighet. Tommelregelen er: bruk flexbox for komponenter og endimensjonal fordeling, bruk grid for sideoppsett og todimensjonale strukturer. I praksis brukes begge ofte sammen i samme prosjekt.`,
    },
    {
      id: 'it-1-4-5-def-flexbox',
      type: 'definition',
      title: 'Flexbox (Flexible Box Layout)',
      content: `**Flexbox** er en CSS-layoutmodul som arrangerer elementer langs én akse. Den aktiveres med \`display: flex\` på foreldreelementet, som da blir en **flex-container**. Alle direkte barn av containeren blir **flex-elementer**. Flexbox har to akser: **hovedaksen** (som standard horisontal) og **kryssaksen** (som standard vertikal). Egenskaper på containeren styrer fordelingen langs disse aksene, mens egenskaper på barna styrer hvordan hvert enkelt element oppfører seg.`,
    },
    {
      id: 'it-1-4-5-text-flex-container',
      type: 'text',
      title: 'Flex-container-egenskaper',
      content: `Når du setter \`display: flex\` på et element, får du tilgang til flere egenskaper som styrer hvordan barna arrangeres:

**flex-direction** – Bestemmer retningen på hovedaksen:

\`\`\`css
.container {
  display: flex;
}

/* Standard: Horisontalt fra venstre til høyre */
.container { flex-direction: row; }

/* Horisontalt fra høyre til venstre */
.container { flex-direction: row-reverse; }

/* Vertikalt fra toppen og ned */
.container { flex-direction: column; }

/* Vertikalt fra bunnen og opp */
.container { flex-direction: column-reverse; }
\`\`\`

**flex-wrap** – Bestemmer om elementene brytes til ny linje:

\`\`\`css
/* Ikke bryt linjer (standard, elementene krympes) */
.container { flex-wrap: nowrap; }

/* Bryt til ny linje når plassen er full */
.container { flex-wrap: wrap; }
\`\`\`

**gap** – Avstand mellom flex-elementer:

\`\`\`css
.container {
  display: flex;
  gap: 1rem;        /* Lik avstand i alle retninger */
  gap: 1rem 2rem;   /* rad-avstand kolonne-avstand */
}
\`\`\``,
    },
    {
      id: 'it-1-4-5-text-justify-align',
      type: 'text',
      title: 'Justering med justify-content og align-items',
      content: `De to viktigste justeringsegenskapene i flexbox er **justify-content** (fordeling langs hovedaksen) og **align-items** (justering langs kryssaksen).

**justify-content** – Fordeler plass langs hovedaksen:

\`\`\`css
.container {
  display: flex;
  justify-content: flex-start;    /* Elementer til venstre (standard) */
  justify-content: flex-end;      /* Elementer til høyre */
  justify-content: center;        /* Elementer sentrert */
  justify-content: space-between; /* Lik avstand mellom, ingen i kantene */
  justify-content: space-around;  /* Lik avstand rundt hvert element */
  justify-content: space-evenly;  /* Helt lik avstand overalt */
}
\`\`\`

**align-items** – Justerer elementer langs kryssaksen:

\`\`\`css
.container {
  display: flex;
  height: 300px;
  align-items: stretch;     /* Strekk til full høyde (standard) */
  align-items: flex-start;  /* Juster til toppen */
  align-items: flex-end;    /* Juster til bunnen */
  align-items: center;      /* Sentrer vertikalt */
  align-items: baseline;    /* Juster etter tekstens grunnlinje */
}
\`\`\`

**Sentrering med flexbox** – Den enkleste måten å sentrere et element både horisontalt og vertikalt:

\`\`\`css
.sentrert-container {
  display: flex;
  justify-content: center;  /* Horisontal sentrering */
  align-items: center;      /* Vertikal sentrering */
  height: 100vh;
}
\`\`\`

Denne teknikken er ekstremt nyttig og brukes overalt i moderne webdesign. Før flexbox var vertikal sentrering en av de mest frustrerende oppgavene i CSS.`,
    },
    {
      id: 'it-1-4-5-example-flexbox-nav',
      type: 'example',
      title: 'Eksempel: Fleksibel navigasjonslinje',
      content: `Her er et eksempel på en navigasjonslinje med logo til venstre og menyelementer til høyre:

\`\`\`html
<header class="navbar">
  <div class="logo">SkoleSaga</div>
  <nav class="nav-lenker">
    <a href="/">Hjem</a>
    <a href="/kurs">Kurs</a>
    <a href="/oppgaver">Oppgaver</a>
    <a href="/om">Om oss</a>
  </nav>
</header>
\`\`\`

\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1a1a2e;
  color: white;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #667eea;
}

.nav-lenker {
  display: flex;
  gap: 1.5rem;
}

.nav-lenker a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s;
}

.nav-lenker a:hover {
  border-bottom-color: #667eea;
}
\`\`\`

\`justify-content: space-between\` på \`.navbar\` plasserer logoen helt til venstre og navigasjonen helt til høyre med all ledig plass imellom. Selve navigasjonen er også en flex-container med \`gap: 1.5rem\` mellom lenkene. Hovrer-effekten med \`border-bottom\` gir en elegant understreking uten å flytte andre elementer.`,
    },
    {
      id: 'it-1-4-5-text-flex-elementer',
      type: 'text',
      title: 'Flex-element-egenskaper',
      content: `Mens flex-container-egenskapene styrer helheten, kan du også kontrollere individuelle flex-elementer:

**flex-grow** – Hvor mye et element skal vokse relativt til andre:

\`\`\`css
.element-a { flex-grow: 1; }  /* Får 1 andel av ledig plass */
.element-b { flex-grow: 2; }  /* Får 2 andeler av ledig plass */
.element-c { flex-grow: 0; }  /* Vokser ikke (standard) */
\`\`\`

**flex-shrink** – Hvor mye et element krymper når plassen er trang:

\`\`\`css
.element { flex-shrink: 1; }  /* Krymper proporsjonalt (standard) */
.element { flex-shrink: 0; }  /* Krymper aldri */
\`\`\`

**flex-basis** – Startstørrelsen til elementet før vekst/krymping:

\`\`\`css
.element { flex-basis: 200px; }  /* Starter med 200px bredde */
.element { flex-basis: 30%; }    /* Starter med 30% av containeren */
.element { flex-basis: auto; }   /* Bruker innholdets størrelse (standard) */
\`\`\`

**flex-shorthand** – Kombinerer grow, shrink og basis:

\`\`\`css
.element { flex: 1; }           /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
.element { flex: 0 0 250px; }   /* Ikke voks, ikke krymp, 250px bred */
.element { flex: 2 1 auto; }    /* Voks dobbelt, krymp normalt, auto basis */
\`\`\`

Et vanlig mønster er sidebar-layout med flexbox:

\`\`\`css
.side-layout {
  display: flex;
  gap: 2rem;
}

.sidebar {
  flex: 0 0 250px;   /* Fast bredde, krymper ikke */
}

.hovedinnhold {
  flex: 1;           /* Fyller resten av plassen */
}
\`\`\``,
    },
    {
      id: 'it-1-4-5-def-grid',
      type: 'definition',
      title: 'CSS Grid Layout',
      content: `**CSS Grid** er en todimensjonal layout-modul som lar deg definere et rutenett av rader og kolonner der elementer kan plasseres presist. Grid aktiveres med \`display: grid\` på foreldreelementet, og strukturen defineres med \`grid-template-columns\` og \`grid-template-rows\`. Elementer kan plasseres automatisk i rekkefølge eller manuelt med \`grid-column\` og \`grid-row\`. Grid er det mest kraftfulle layout-verktøyet i CSS og er ideelt for helhetlige sideoppsett.`,
    },
    {
      id: 'it-1-4-5-text-grid-grunnleggende',
      type: 'text',
      title: 'Grid-grunnleggende: kolonner og rader',
      content: `Du oppretter et grid ved å sette \`display: grid\` og definere kolonnene:

\`\`\`css
/* Tre kolonner med fast bredde */
.rutenett {
  display: grid;
  grid-template-columns: 200px 400px 200px;
  gap: 1rem;
}

/* Tre like brede kolonner med fr-enheter */
.rutenett {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}

/* Kortform med repeat() */
.rutenett {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
\`\`\`

**fr-enheten** (fraction) representerer en andel av tilgjengelig plass. I \`1fr 2fr 1fr\` får den midterste kolonnen dobbelt så mye plass som de andre:

\`\`\`css
.layout {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1.5rem;
}
\`\`\`

Rader defineres med **grid-template-rows**:

\`\`\`css
.layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;  /* header, innhold, footer */
  gap: 1rem;
  min-height: 100vh;
}
\`\`\`

Her er den første og siste raden (header og footer) auto-dimensjonert etter innholdet, mens den midterste raden (innholdet) tar all resterende plass med \`1fr\`.`,
    },
    {
      id: 'it-1-4-5-text-grid-plassering',
      type: 'text',
      title: 'Plassering i grid',
      content: `Du kan plassere elementer manuelt i gridet med \`grid-column\` og \`grid-row\`:

\`\`\`css
.rutenett {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto auto;
  gap: 1rem;
}

/* Elementet spenner over kolonne 1 til 3 (to kolonner) */
.bred-element {
  grid-column: 1 / 3;
}

/* Elementet spenner over alle 4 kolonner */
.full-bredde {
  grid-column: 1 / -1;
}

/* Elementet spenner over 2 rader */
.høy-element {
  grid-row: 1 / 3;
}
\`\`\`

Du kan også bruke **span** for å angi antall spor:

\`\`\`css
.bred-element {
  grid-column: span 2;  /* Spenner over 2 kolonner */
}

.høy-element {
  grid-row: span 3;     /* Spenner over 3 rader */
}
\`\`\`

**grid-template-areas** gir en visuell måte å definere layout på:

\`\`\`css
.side-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header  header"
    "sidebar innhold"
    "footer  footer";
  gap: 1rem;
  min-height: 100vh;
}

.header   { grid-area: header; }
.sidebar  { grid-area: sidebar; }
.innhold  { grid-area: innhold; }
.footer   { grid-area: footer; }
\`\`\`

Med \`grid-template-areas\` kan du «tegne» layouten som en visuell representasjon i CSS-koden. Hvert ord representerer et område, og elementene kobles til områdene med \`grid-area\`.`,
    },
    {
      id: 'it-1-4-5-example-grid-layout',
      type: 'example',
      title: 'Eksempel: Komplett sidelayout med Grid',
      content: `Her er en komplett sidelayout med header, sidebar, hovedinnhold og footer:

\`\`\`html
<div class="side-layout">
  <header class="topp">
    <h1>Min nettside</h1>
    <nav>
      <a href="/">Hjem</a>
      <a href="/artikler">Artikler</a>
      <a href="/kontakt">Kontakt</a>
    </nav>
  </header>

  <aside class="venstremeny">
    <h3>Kategorier</h3>
    <ul>
      <li><a href="#">HTML</a></li>
      <li><a href="#">CSS</a></li>
      <li><a href="#">JavaScript</a></li>
    </ul>
  </aside>

  <main class="hoveddel">
    <h2>Siste artikler</h2>
    <article>
      <h3>Lær CSS Grid</h3>
      <p>CSS Grid gjør det enkelt å lage avanserte sideoppsett...</p>
    </article>
  </main>

  <footer class="bunn">
    <p>© 2025 Min nettside</p>
  </footer>
</div>
\`\`\`

\`\`\`css
.side-layout {
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "topp    topp"
    "meny    hoveddel"
    "bunn    bunn";
  gap: 0;
  min-height: 100vh;
}

.topp {
  grid-area: topp;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  color: white;
  padding: 1rem 2rem;
}

.topp nav {
  display: flex;
  gap: 1rem;
}

.topp nav a {
  color: white;
  text-decoration: none;
}

.venstremeny {
  grid-area: meny;
  background-color: #ecf0f1;
  padding: 1.5rem;
}

.venstremeny ul {
  list-style: none;
  padding: 0;
}

.venstremeny li {
  margin-bottom: 0.5rem;
}

.venstremeny a {
  color: #2c3e50;
  text-decoration: none;
}

.hoveddel {
  grid-area: hoveddel;
  padding: 2rem;
}

.bunn {
  grid-area: bunn;
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 1rem;
}
\`\`\`

Denne layouten bruker \`grid-template-areas\` for en oversiktlig struktur. Headeren og footeren spenner over hele bredden, mens sidemenyen og hovedinnholdet deler midtseksjonen. Selve headeren bruker flexbox internt for å plassere logoen og navigasjonen – et godt eksempel på at grid og flexbox ofte brukes sammen.`,
    },
    {
      id: 'it-1-4-5-text-autofit',
      type: 'text',
      title: 'Responsivt grid med auto-fit og auto-fill',
      content: `En av de mest nyttige grid-teknikkene er **auto-fit** og **auto-fill** med \`repeat()\` og \`minmax()\`. De lager rutenett som automatisk tilpasser antall kolonner til tilgjengelig plass, helt uten media queries:

\`\`\`css
/* auto-fit: Tilpasser antall kolonner, strekker eksisterende elementer */
.kort-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

/* auto-fill: Tilpasser antall kolonner, beholder tomme spor */
.kort-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
\`\`\`

**Forskjellen mellom auto-fit og auto-fill:**
- **auto-fit**: Kollapser tomme spor og lar eksisterende elementer strekke seg. Hvis du har tre elementer i en bred container, kan de bli større enn minimum.
- **auto-fill**: Beholder tomme spor selv om det ikke er elementer som fyller dem. Elementene beholder sin minimale bredde.

I de fleste tilfeller er **auto-fit** det du vil bruke, fordi det gir et ryddigere resultat uten usynlige tomme kolonner.

\`minmax(280px, 1fr)\` betyr at hver kolonne er minst 280px bred, men kan vokse for å dele tilgjengelig plass. Nettleseren beregner automatisk hvor mange kolonner som får plass:
- Viewport 600px: 2 kolonner (ca. 280px hver)
- Viewport 900px: 3 kolonner (ca. 280px hver)
- Viewport 1200px: 4 kolonner (ca. 280px hver)

Dette er en ekstremt kraftig teknikk som gir responsivt design uten en eneste media query.`,
    },
    {
      id: 'it-1-4-5-text-flex-vs-grid',
      type: 'text',
      title: 'Flexbox vs. Grid – når bruker du hva?',
      content: `Både flexbox og grid er layout-verktøy, men de har ulike styrker:

| Egenskap | Flexbox | Grid |
|----------|---------|------|
| Dimensjoner | Én (rad ELLER kolonne) | To (rader OG kolonner) |
| Innholdsbasert | Ja, elementer bestemmer størrelse | Nei, rutenettet bestemmer størrelse |
| Beste for | Komponenter, menyer, fordeling | Sideoppsett, rutenett, dashbord |
| Justering | Svært fleksibelt langs én akse | Presis kontroll i begge akser |

**Bruk flexbox når:**
- Du trenger å fordele elementer i en rad eller kolonne
- Elementene har ulik størrelse og skal fordele plass seg imellom
- Du lager navigasjonsmenyer, verktøylinjer eller kortrekker
- Du vil sentrere et element horisontalt og/eller vertikalt

**Bruk grid når:**
- Du trenger layout med både rader og kolonner
- Du vil plassere elementer presist i et rutenett
- Du lager helhetlige sideoppsett med header, sidebar og footer
- Du lager bildegallerier eller dashbord med ulike kortsstørrelser

**Bruk begge sammen:**
I praksis bruker du ofte grid for den overordnede sidelayouten og flexbox for komponenter inni grid-cellene. For eksempel kan headeren være en grid-area, mens innholdet inni headeren arrangeres med flexbox.`,
    },
    {
      id: 'it-1-4-5-example-dashboard',
      type: 'example',
      title: 'Eksempel: Dashboard med Grid og Flexbox',
      content: `Her er et dashbord som kombinerer grid for overordnet layout og flexbox for innholdet i kortene:

\`\`\`html
<div class="dashboard">
  <div class="statistikk-kort bred">
    <h3>Besøkende i dag</h3>
    <span class="tall">1 247</span>
    <span class="endring positiv">+12%</span>
  </div>
  <div class="statistikk-kort">
    <h3>Sidevisninger</h3>
    <span class="tall">3 891</span>
    <span class="endring positiv">+8%</span>
  </div>
  <div class="statistikk-kort">
    <h3>Avvisningsrate</h3>
    <span class="tall">34%</span>
    <span class="endring negativ">-2%</span>
  </div>
  <div class="statistikk-kort">
    <h3>Nye brukere</h3>
    <span class="tall">189</span>
    <span class="endring positiv">+23%</span>
  </div>
  <div class="statistikk-kort">
    <h3>Gjennomsnittlig tid</h3>
    <span class="tall">4:32</span>
    <span class="endring negativ">-5%</span>
  </div>
</div>
\`\`\`

\`\`\`css
/* Overordnet layout med Grid */
.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  background-color: #f0f2f5;
}

/* Element som spenner over to kolonner */
.statistikk-kort.bred {
  grid-column: span 2;
}

/* Hvert kort bruker Flexbox internt */
.statistikk-kort {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  min-height: 120px;
}

.statistikk-kort h3 {
  font-size: 0.85rem;
  color: #666;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.tall {
  font-size: 2rem;
  font-weight: bold;
  color: #1a1a2e;
}

.endring {
  font-size: 0.9rem;
  font-weight: 600;
}

.endring.positiv {
  color: #27ae60;
}

.endring.negativ {
  color: #e74c3c;
}
\`\`\`

Dashboardet bruker grid med \`auto-fit\` for å automatisk tilpasse kortene til skjermbredden. Det brede kortet spenner over to kolonner med \`grid-column: span 2\`. Inne i hvert kort brukes flexbox med \`flex-direction: column\` og \`justify-content: space-between\` for å fordele overskrift, tall og endringsprosent jevnt vertikalt.`,
    },
    {
      id: 'it-1-4-5-text-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `Flexbox og Grid er de to viktigste layout-verktøyene i moderne CSS:

- **Flexbox** er endimensjonal og perfekt for å fordele elementer i en rad eller kolonne. De viktigste egenskapene er \`flex-direction\`, \`justify-content\`, \`align-items\`, \`gap\` og \`flex\`-shorthand.
- **CSS Grid** er todimensjonal og ideelt for sideoppsett med rader og kolonner. De viktigste egenskapene er \`grid-template-columns\`, \`grid-template-rows\`, \`grid-template-areas\`, \`gap\` og \`fr\`-enheten.
- **auto-fit med minmax()** gir responsivt rutenett uten media queries.
- **grid-template-areas** gir en visuell måte å definere layout i CSS.
- **Bruk begge sammen**: Grid for overordnet sidelayout, flexbox for komponenter.
- **gap** er enklere enn margin for avstand mellom elementer i både flexbox og grid.

Med god forståelse av flexbox og grid kan du lage nesten hvilken som helst layout uten å ty til gamle teknikker som float og absolutt posisjonering.`,
    },
    {
      id: 'it-1-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-1-4-5-ex-1',
        number: '4.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste forskjellen mellom CSS Flexbox og CSS Grid?',
        options: [
          { id: 'a', text: 'Flexbox er nyere enn Grid', isCorrect: false, feedback: 'Begge er moderne CSS-moduler; Grid ble faktisk ferdig etter flexbox.' },
          { id: 'b', text: 'Flexbox er endimensjonal (rad eller kolonne), mens Grid er todimensjonal (rader og kolonner samtidig)', isCorrect: true },
          { id: 'c', text: 'Grid er kun for bilder, flexbox er for tekst', isCorrect: false, feedback: 'Begge kan brukes for alle typer innhold.' },
          { id: 'd', text: 'Flexbox fungerer ikke på mobile enheter', isCorrect: false, feedback: 'Flexbox har utmerket støtte på alle moderne nettlesere, inkludert mobil.' },
        ],
        solution: 'Den grunnleggende forskjellen er dimensjonalitet. Flexbox jobber langs én akse om gangen – enten horisontalt (rad) eller vertikalt (kolonne). Grid jobber med begge dimensjoner samtidig og lar deg definere et komplett rutenett med rader og kolonner. Derfor er flexbox best for enkle fordelinger og komponenter, mens grid er best for helhetlige sideoppsett.',
      },
    },
    {
      id: 'it-1-4-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-1-4-5-ex-2',
        number: '4.5.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Hva gjør følgende CSS?

\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
\`\`\``,
        options: [
          { id: 'a', text: 'Elementene i containeren plasseres i et rutenett', isCorrect: false, feedback: 'display: flex aktiverer flexbox, ikke grid.' },
          { id: 'b', text: 'Innholdet i containeren sentreres horisontalt og vertikalt i hele viewport-høyden', isCorrect: true },
          { id: 'c', text: 'Containeren blir 100 piksler høy med sentrert tekst', isCorrect: false, feedback: '100vh er 100% av viewport-høyden, ikke 100 piksler.' },
          { id: 'd', text: 'Elementene stables vertikalt i en kolonne', isCorrect: false, feedback: 'Standard flex-direction er row (horisontal), ikke column.' },
        ],
        solution: 'Denne CSS-koden sentrerer innholdet både horisontalt (justify-content: center) og vertikalt (align-items: center) innenfor en container som er like høy som viewport (height: 100vh). Dette er den klassiske flexbox-sentreringsteknikken som brukes svært ofte i moderne webdesign, for eksempel for heltseksjoner og innloggingssider.',
      },
    },
    {
      id: 'it-1-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-1-4-5-ex-3',
        number: '4.5.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: `Hva betyr \`grid-template-columns: 1fr 2fr 1fr\`?`,
        options: [
          { id: 'a', text: 'Tre kolonner som er henholdsvis 1px, 2px og 1px brede', isCorrect: false, feedback: 'fr er ikke piksler, men andeler av tilgjengelig plass.' },
          { id: 'b', text: 'Tre kolonner der den midterste er dobbelt så bred som de to andre', isCorrect: true },
          { id: 'c', text: 'Tre kolonner med 1rem, 2rem og 1rem bredde', isCorrect: false, feedback: 'fr-enheten er ikke det samme som rem.' },
          { id: 'd', text: 'En kolonne som er 1fr bred, etterfulgt av et gap på 2fr', isCorrect: false, feedback: 'Alle tre verdiene er kolonnebredder, ikke gap.' },
        ],
        solution: 'fr (fraction) betyr «en andel av tilgjengelig plass». I 1fr 2fr 1fr deles plassen i 4 andeler totalt (1+2+1). Den første kolonnen får 1/4, den midterste får 2/4 (halvparten), og den siste får 1/4. Hvis containeren er 1200px bred (etter gap), blir kolonnene 300px, 600px og 300px.',
      },
    },
    {
      id: 'it-1-4-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-1-4-5-ex-4',
        number: '4.5.4',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv HTML og CSS for et bildegalleri med CSS Grid. Kravene:
- Bruk auto-fit slik at antall kolonner tilpasser seg automatisk
- Minimum bredde per bilde: 200px
- Avstand mellom bildene: 1rem
- Bildene skal fylle cellene uten å bli forvrengd (bruk object-fit)
- Hvert bilde skal ha avrundede hjørner`,
        solution: `\`\`\`html
<div class="galleri">
  <img src="bilde1.jpg" alt="Fjelltur">
  <img src="bilde2.jpg" alt="Strand">
  <img src="bilde3.jpg" alt="Skog">
  <img src="bilde4.jpg" alt="Innsjø">
  <img src="bilde5.jpg" alt="Solnedgang">
  <img src="bilde6.jpg" alt="Nordlys">
</div>
\`\`\`

\`\`\`css
.galleri {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.galleri img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
\`\`\`

repeat(auto-fit, minmax(200px, 1fr)) gjør at nettleseren automatisk bestemmer antall kolonner basert på tilgjengelig plass. width: 100% og height: 200px gir alle bildene lik størrelse, og object-fit: cover sørger for at bildene fyller plassen uten å forvrenge proporsjoner – de beskjæres i stedet.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-1-4-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-1-4-5-ex-5',
        number: '4.5.5',
        type: 'classic',
        difficulty: 'medium',
        task: `Lag HTML og CSS for en footer med tre seksjoner side om side:
- Seksjon 1: «Om oss» med en kort tekst
- Seksjon 2: «Lenker» med en liste med fire navigasjonslenker
- Seksjon 3: «Kontakt» med e-post og telefonnummer

Bruk flexbox for å plassere seksjonene side om side med lik bredde. Footeren skal ha mørk bakgrunn og hvit tekst.`,
        solution: `\`\`\`html
<footer class="bunntekst">
  <div class="bunn-seksjon">
    <h4>Om oss</h4>
    <p>Vi lager moderne nettsider med fokus på brukervennlighet og godt design.</p>
  </div>
  <div class="bunn-seksjon">
    <h4>Lenker</h4>
    <ul>
      <li><a href="/">Hjem</a></li>
      <li><a href="/tjenester">Tjenester</a></li>
      <li><a href="/prosjekter">Prosjekter</a></li>
      <li><a href="/kontakt">Kontakt</a></li>
    </ul>
  </div>
  <div class="bunn-seksjon">
    <h4>Kontakt</h4>
    <p>post@eksempel.no</p>
    <p>+47 123 45 678</p>
  </div>
</footer>
\`\`\`

\`\`\`css
.bunntekst {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  background-color: #1a1a2e;
  color: white;
  padding: 2rem 3rem;
}

.bunn-seksjon {
  flex: 1;
}

.bunn-seksjon h4 {
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
}

.bunn-seksjon ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.bunn-seksjon li {
  margin-bottom: 0.5rem;
}

.bunn-seksjon a {
  color: #a0aec0;
  text-decoration: none;
}

.bunn-seksjon a:hover {
  color: white;
}

.bunn-seksjon p {
  color: #a0aec0;
  margin: 0.25rem 0;
  line-height: 1.5;
}
\`\`\`

display: flex på footeren plasserer de tre seksjonene horisontalt. flex: 1 på hver seksjon gjør at alle tre får lik bredde. justify-content: space-between og gap: 2rem gir luft mellom seksjonene.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-1-4-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-1-4-5-ex-6',
        number: '4.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Lag HTML og CSS for en komplett sidelayout med CSS Grid og grid-template-areas. Layouten skal ha:
- Header som spenner over hele bredden
- En sidebar (250px bred) til venstre
- Hovedinnhold til høyre som fyller resten av plassen
- Footer som spenner over hele bredden
- Siden skal fylle minst hele viewport-høyden
- Bruk grid-template-areas for å definere oppsettet`,
        solution: `\`\`\`html
<div class="side">
  <header class="side-header">
    <h1>Nettsiden</h1>
    <nav>
      <a href="/">Hjem</a>
      <a href="/artikler">Artikler</a>
    </nav>
  </header>

  <aside class="side-meny">
    <h3>Meny</h3>
    <ul>
      <li><a href="#">Introduksjon</a></li>
      <li><a href="#">Veiledning</a></li>
      <li><a href="#">Referanse</a></li>
    </ul>
  </aside>

  <main class="side-innhold">
    <h2>Hovedinnhold</h2>
    <p>Her er det viktigste innholdet på siden.</p>
  </main>

  <footer class="side-footer">
    <p>© 2025 Nettsiden. Alle rettigheter reservert.</p>
  </footer>
</div>
\`\`\`

\`\`\`css
.side {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header  header"
    "meny    innhold"
    "footer  footer";
  min-height: 100vh;
}

.side-header {
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  color: white;
  padding: 1rem 2rem;
}

.side-header nav {
  display: flex;
  gap: 1rem;
}

.side-header nav a {
  color: white;
  text-decoration: none;
}

.side-meny {
  grid-area: meny;
  background-color: #f4f4f4;
  padding: 1.5rem;
}

.side-meny ul {
  list-style: none;
  padding: 0;
}

.side-meny li {
  margin-bottom: 0.75rem;
}

.side-meny a {
  color: #333;
  text-decoration: none;
}

.side-innhold {
  grid-area: innhold;
  padding: 2rem;
}

.side-footer {
  grid-area: footer;
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 1rem;
}
\`\`\`

grid-template-areas gir en visuell representasjon av layouten. grid-template-columns: 250px 1fr gir sidebaren fast bredde og hovedinnholdet resten. grid-template-rows: auto 1fr auto gjør at headeren og footeren dimensjoneres etter innholdet, mens midtraden fyller resten av plassen. min-height: 100vh sikrer at siden fyller hele viewport-høyden.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-1-4-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it-1-4-5-ex-7',
        number: '4.5.7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: `Hva er forskjellen mellom \`auto-fit\` og \`auto-fill\` i CSS Grid?

\`\`\`css
/* Alternativ A */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

/* Alternativ B */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
\`\`\``,
        options: [
          { id: 'a', text: 'Det er ingen forskjell – de gjør det samme', isCorrect: false, feedback: 'De oppfører seg likt når det er nok elementer, men forskjellig når det er færre elementer enn det er plass til.' },
          { id: 'b', text: 'auto-fit kollapser tomme spor og lar elementene strekke seg, mens auto-fill beholder tomme spor', isCorrect: true },
          { id: 'c', text: 'auto-fill er raskere enn auto-fit', isCorrect: false, feedback: 'Ytelsen er lik for begge.' },
          { id: 'd', text: 'auto-fit fungerer bare med piksler, auto-fill fungerer med alle enheter', isCorrect: false, feedback: 'Begge fungerer med alle enheter.' },
        ],
        solution: 'Når det er færre elementer enn det er plass til kolonner, viser forskjellen seg: auto-fit kollapser de tomme sporene til 0 bredde og lar de eksisterende elementene strekke seg for å fylle hele bredden. auto-fill beholder de tomme sporene, så elementene holder seg til sin minimale bredde. For de fleste brukstilfeller er auto-fit foretrukket fordi det gir et ryddigere resultat.',
      },
    },
    {
      id: 'it-1-4-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'it-1-4-5-ex-8',
        number: '4.5.8',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: `Du har en flex-container med tre elementer. Hva skjer med elementenes bredde?

\`\`\`css
.container {
  display: flex;
}

.a { flex: 1; }
.b { flex: 2; }
.c { flex: 1; }
\`\`\``,
        options: [
          { id: 'a', text: 'Alle tre elementene får lik bredde', isCorrect: false, feedback: 'flex: 2 gir element B dobbelt så mye av den tilgjengelige plassen.' },
          { id: 'b', text: 'Element A får 25%, B får 50% og C får 25% av den tilgjengelige plassen', isCorrect: true },
          { id: 'c', text: 'Element B får fast bredde på 2px', isCorrect: false, feedback: 'flex-verdien er ikke piksler, men en andel av tilgjengelig plass.' },
          { id: 'd', text: 'Elementene stables vertikalt', isCorrect: false, feedback: 'flex-direction er row som standard, så elementene vises horisontalt.' },
        ],
        solution: 'flex: 1 og flex: 2 angir flex-grow-verdien. Totalt har vi 1+2+1 = 4 andeler. Element A og C får hver 1/4 (25%) av tilgjengelig plass, mens element B får 2/4 (50%). Merk at flex: 1 er en shorthand for flex-grow: 1, flex-shrink: 1, flex-basis: 0%, som betyr at fordelingen regnes ut fra null, ikke fra innholdets naturlige størrelse.',
      },
    },
  ],
  exercises: [],
  prevChapter: 'it-1-4-4',
  nextChapter: 'it-1-5-1',
};

// ============================================================================
// EKSPORT: Alle kapitler i seksjon 4
// ============================================================================

export const IT_1_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IT_1_4_1, CHAPTER_IT_1_4_2, CHAPTER_IT_1_4_3, CHAPTER_IT_1_4_4, CHAPTER_IT_1_4_5,
];
