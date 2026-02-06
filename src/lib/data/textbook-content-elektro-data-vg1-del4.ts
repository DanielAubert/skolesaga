/* eslint-disable */
// @ts-nocheck
/**
 * Elektro og datateknologi VG1 - Tekstbokinnhold Del 4
 *
 * Dekker kapittel 28-37: Smarthussystemer, KNX, PLS-programmering,
 * Industriell automasjon, Robotikk, Feilsøking, Prosjektarbeid, etc.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 28: Smarthussystemer
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_28: TextbookChapter = {
  id: 'elektro-data-vg1-28',
  courseId: 'elektro-data-vg1',
  chapterNumber: '28',
  title: 'Smarthussystemer',
  description: 'Bygningsautomasjon, smarthus-protokoller og integrasjon av systemer.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forstå smarthus-teknologi og protokoller',
    'planlegge enkle smarthus-installasjoner',
    'integrere ulike systemer',
  ],
  sections: [
    {
      title: 'Hva er smarthus?',
      content: `## Hva er smarthus?

Et smarthus er en bolig der tekniske systemer er automatisert og kan styres sentralt eller fjernkontrolleres.

**Hva kan automatiseres?**
- Belysning (dimming, farger, scener)
- Oppvarming og kjøling
- Persienner og markiser
- Sikkerhet (alarm, kamera, lås)
- Underholdning (lyd, video)
- Energistyring
- Husholdningsapparater

**Fordeler med smarthus:**
- Komfort og bekvemmelighet
- Energibesparelse (automatisk senking)
- Økt sikkerhet
- Tilgjengelighet (universell utforming)
- Fjernkontroll fra mobil

**Nivåer av smarthus:**

**1. Enkle smartenheter**
- Wifi-pærer, smarte stikkontakter
- Ingen sentral styring
- Hver enhet har egen app

**2. Hub-basert system**
- Sentralenhet koordinerer
- Felles app for alle enheter
- Scener og automatiseringer

**3. Fullintegrert system**
- KNX, Crestron, Control4
- Kablet infrastruktur
- Profesjonell installasjon
- Høy pålitelighet`,
    },
    {
      title: 'Kommunikasjonsprotokoller',
      content: `## Kommunikasjonsprotokoller

**Trådløse protokoller:**

**Wi-Fi**
- Standard hjemmenettverk
- Høy båndbredde
- Relativt høyt strømforbruk
- Mange smarte enheter bruker dette

**Zigbee**
- Lavt strømforbruk
- Mesh-nettverk (enheter videresender)
- Trenger hub/gateway
- Philips Hue, IKEA Tradfri

**Z-Wave**
- Lavt strømforbruk
- Mesh-nettverk
- Mer proprietær enn Zigbee
- Mange sikkerhetsprodukter

**Bluetooth**
- Kort rekkevidde
- Bluetooth Mesh for større nettverk
- Direkte telefon-tilkobling

**Thread/Matter**
- Nyeste standard (Apple, Google, Amazon samarbeid)
- IPv6-basert
- Mesh-nettverk
- Mål: Universell kompatibilitet

**Kablede protokoller:**

**KNX**
- Europeisk standard
- Buskabel (grønn twisted pair)
- Svært pålitelig
- Profesjonelt system

**Modbus**
- Industri-protokoll
- Brukes i noen smarthus-systemer
- RS485 eller TCP/IP`,
    },
    {
      title: 'KNX-systemet',
      content: `## KNX-systemet

**Hva er KNX?**
KNX er en verdensstandard for bygningsautomasjon. Det er et åpent system der produkter fra ulike produsenter kan kommunisere.

**Systemoppbygging:**

**Buskabel**
Grønn twisted-pair kabel som kobler alle enheter.
- Strømforsyning (29V DC)
- Datakommunikasjon
- Maks 64 enheter per linje

**Strømforsyning**
Leverer 29V til buslinjen. Plasseres i sikringsskap.

**Aktuatorer**
Utførende enheter:
- Dimmere for lys
- Brytere for på/av
- Persiennestyrere
- Varmeventiler

**Sensorer**
Registrerer hendelser:
- Veggtaster
- Bevegelsessensorer
- Temperatursensorer
- Lyssensorer

**Systemenheter**
- USB-grensesnitt (for programmering)
- IP-router (for nettverkstilkobling)
- Liniekoblere (for større anlegg)

**Programmering:**
- ETS-software (Engineering Tool Software)
- Grafisk konfigurasjon
- Gruppeadresser kobler sensorer til aktuatorer
- Logikk og scener

**Eksempel:**
Tast "Alt av" sender signal til gruppeadresse 1/1/1.
Alle lysdiminere lytter på 1/1/1 og slår av.`,
    },
    {
      title: 'Planlegging av smarthus',
      content: `## Planlegging av smarthus

**Steg 1: Behovsanalyse**
- Hva ønsker kunden å automatisere?
- Budsjett
- Nybygg eller oppgradering?
- Teknisk kompetanse

**Steg 2: Velge system**

**DIY-systemer (IKEA, Philips Hue):**
- Billig oppstart
- Enkelt å installere
- Begrenset integrasjon

**Hub-systemer (Homey, SmartThings):**
- Støtter mange protokoller
- Kraftig automatisering
- Krever noe teknisk interesse

**Profesjonelle systemer (KNX, Crestron):**
- Høy kostnad
- Skreddersydd løsning
- Profesjonell installasjon og support

**Steg 3: Kabling**
For nybygg: Vurder fremtidssikker kabling!
- Trekkerør for fremtidig behov
- Ethernet til alle rom
- Eventuelt KNX-buskabel

**Steg 4: Enhetsliste**
Lag liste over alle enheter og funksjoner:
- Hver lyskrets
- Varmekilder
- Persienner
- Sikkerhetsutstyr

**Steg 5: Programmering og testing**
- Konfigurer alle enheter
- Lag scener og automatiseringer
- Test grundig
- Dokumenter og gi opplæring

**Typiske automatiseringer:**
- "God morgen": Lys gradvis opp, varme opp bad
- "Borte": Alt lys av, senk temp, aktiver alarm
- "God natt": Slå av lys, lås dører, senk temp`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-28-ex-1',
      type: 'classic',
      task: 'Forklar forskjellen mellom Zigbee og Wi-Fi for smarthus-bruk.',
      solution: 'Zigbee: Lavt strømforbruk (batteridrevet), mesh-nettverk (enheter videresender), lav båndbredde, trenger hub/gateway. Wi-Fi: Høyere strømforbruk (krever ofte stikkontakt), kobler direkte til router, høy båndbredde (video), ingen ekstra hub. Zigbee passer sensorer/batteridrevet, Wi-Fi passer kameraer/strømtilkoblede.',
    },
    {
      id: 'elektro-data-vg1-28-ex-2',
      type: 'classic',
      task: 'Hva er en "scene" i smarthus-sammenheng? Gi et eksempel.',
      solution: 'En scene er en forhåndsdefinert tilstand for flere enheter som aktiveres med én kommando. Eksempel: "Kino-scene" dimmer stuelyset til 10%, lukker persienner, slår på TV og soundbar. I stedet for å styre hver enhet manuelt, trykker man bare på "Kino" i appen eller på veggpanel.',
    },
    {
      id: 'elektro-data-vg1-28-ex-3',
      type: 'classic',
      task: 'Hva er KNX og hvorfor brukes det i profesjonelle installasjoner?',
      solution: 'KNX er en verdensstandard for bygningsautomasjon med kablet buss-system. Brukes profesjonelt fordi: 1) Svært pålitelig (ikke avhengig av Wi-Fi), 2) Åpen standard (produkter fra mange leverandører), 3) Skalerbart for store bygg, 4) Lang levetid og støtte, 5) Høy sikkerhet. Ulempe: Dyrere og krever faginstallasjon.',
    },
    {
      id: 'elektro-data-vg1-28-ex-4',
      type: 'classic',
      task: 'Hva er et mesh-nettverk og hvorfor er det nyttig for smarthus?',
      solution: 'I et mesh-nettverk kan enheter videresende meldinger til hverandre, ikke bare direkte til sentralenheten. Nyttig for smarthus fordi: 1) Økt rekkevidde (signalet hopper via enheter), 2) Mer robust (alternative ruter hvis én enhet feiler), 3) Selvhelende (finner nye ruter automatisk). Zigbee, Z-Wave og Thread bruker mesh.',
    },
    {
      id: 'elektro-data-vg1-28-ex-5',
      type: 'classic',
      task: 'Beskriv hva som skjer i et KNX-system når du trykker på en lysbryter.',
      solution: 'Trykktasten (sensor) registrerer trykket og sender en melding på busslinjen med sin gruppeadresse, f.eks. "1/1/5 = ON". Alle enheter på buslinjen mottar meldingen. Dimmeren (aktuator) som er programmert til å lytte på gruppeadresse 1/1/5 reagerer og slår på lyset. Andre enheter ignorerer meldingen fordi de ikke lytter på den adressen.',
    },
    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-28-ex-6',
      type: 'classic',
      task: 'Planlegg et smarthus-system for en ny leilighet. Kunden ønsker smart lysstyring, termostatstyr i alle rom, og dørlås med app. Budsjett: 30 000 kr. Foreslå system og komponenter.',
      solution: 'Anbefalt løsning: Hub-basert system (Homey Pro eller SmartThings)\n\nKomponenter:\n- Smart hub: 2500 kr\n- 8x Zigbee dimmer-pærer (E27): 2400 kr\n- 4x Zigbee LED-strips: 1600 kr  \n- 5x Zigbee termostater: 6000 kr\n- Smart dørlås (Yale Linus): 3500 kr\n- 3x Veggtaster (Zigbee): 1500 kr\n- 2x Bevegelsessensorer: 800 kr\n\nSum: ca. 18 300 kr\n\nReserve til: Ekstra sensorer, strømforbruksmåler, persiennestyring.\n\nAutomatiseringer:\n- Nattmodus: Lys av, temp ned, lås dør\n- Hjemme/borte basert på telefon-posisjon\n- Bevegelsesstyrt lys i gang',
    },
    {
      id: 'elektro-data-vg1-28-ex-7',
      type: 'classic',
      task: 'Sammenlign en DIY smarthus-løsning med et KNX-system for en enebolig. Vurder kostnad, pålitelighet, fleksibilitet og vedlikehold.',
      solution: 'DIY (f.eks. Philips Hue + SmartThings):\n- Kostnad: 15-30 000 kr, egeninstallasjon\n- Pålitelighet: Avhengig av Wi-Fi/hub, kan feile\n- Fleksibilitet: Lett å legge til/endre\n- Vedlikehold: Firmware-oppdateringer, batteribytte\n- Egnet for: Hobbyist, utleieleilighet, enkle behov\n\nKNX:\n- Kostnad: 100-300 000 kr, fagelektriker\n- Pålitelighet: Svært høy, kablet, ingen skyavhengighet\n- Fleksibilitet: Krever omprogrammering (ETS)\n- Vedlikehold: Minimalt, 20+ års levetid\n- Egnet for: Nybygg, høye krav, langsiktig investering\n\nKonklusjon: DIY for budsjett/enkel bruk, KNX for premium/pålitelighet.',
    },
  ],
  keyTerms: [
    { term: 'Smarthus', definition: 'Bolig med automatiserte og fjernstyrte tekniske systemer.' },
    { term: 'KNX', definition: 'Verdensstandard for kablet bygningsautomasjon.' },
    { term: 'Zigbee', definition: 'Trådløs protokoll med lavt strømforbruk og mesh-nettverk.' },
    { term: 'Scene', definition: 'Forhåndsdefinert tilstand for flere enheter som aktiveres samlet.' },
    { term: 'Hub', definition: 'Sentralenhet som koordinerer smarthus-enheter.' },
    { term: 'Mesh-nettverk', definition: 'Nettverk der enheter videresender meldinger til hverandre.' },
  ],
};

// ============================================================================
// Kapittel 29: PLS-programmering
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_29: TextbookChapter = {
  id: 'elektro-data-vg1-29',
  courseId: 'elektro-data-vg1',
  chapterNumber: '29',
  title: 'PLS-programmering',
  description: 'Programmerbare logiske styringer, Ladder Logic og strukturert programmering.',
  estimatedMinutes: 70,
  competenceGoals: [
    'forstå PLS-arkitektur og programmering',
    'skrive enkle Ladder Logic programmer',
    'bruke timere og tellere',
  ],
  sections: [
    {
      title: 'PLS-arkitektur',
      content: `## PLS-arkitektur

**Hva er en PLS?**
PLS (Programmerbar Logisk Styring) eller PLC (Programmable Logic Controller) er en industriell datamaskin designet for å kontrollere maskiner og prosesser.

**Historikk:**
Utviklet på 1960-tallet for å erstatte reléstyringer i bilindustrien. Fordeler:
- Lettere å omprogrammere
- Mer pålitelig
- Mindre fysisk plass
- Enklere feilsøking

**Hovedkomponenter:**

**CPU (Central Processing Unit)**
Hjernen i PLS-en:
- Utfører programmet syklisk
- Leser innganger, prosesserer, skriver utganger
- Typisk syklustid: 1-10 ms

**Innganger (Inputs)**
Kobles til sensorer og brytere:
- Digitale: På/av (24V DC)
- Analoge: 0-10V, 4-20mA

**Utganger (Outputs)**
Kobles til aktuatorer:
- Digitale: Relé eller transistor
- Analoge: 0-10V, 4-20mA

**Strømforsyning**
Leverer strøm til CPU og I/O-moduler.
- Typisk 24V DC
- Noen har innebygd 230V AC

**Programmeringsenhet**
PC med programmeringssoftware:
- Siemens TIA Portal
- Rockwell Studio 5000
- Schneider Unity Pro`,
    },
    {
      title: 'Skannings-syklus',
      content: `## Skannings-syklus

PLS-en kjører programmet i en kontinuerlig syklus.

**1. Les innganger (Input scan)**
Alle digitale og analoge innganger leses og lagres i et minneområde (prosessbilde).

**2. Utfør program (Program execution)**
Programmet kjøres fra topp til bunn.
Logikk behandles basert på verdiene i prosessbildet.

**3. Skriv utganger (Output scan)**
Resultatet skrives til utgangene.

**4. Housekeeping**
Kommunikasjon, diagnostikk, etc.

**5. Gjenta fra 1**

**Syklustid:**
Total tid for én gjennomkjøring. Vanligvis 1-20 ms.
Kritisk for rask respons.

**Watchdog-timer:**
Overvåker at syklusen fullføres i tide.
Hvis syklustiden overskrides, stopper PLS-en i sikker tilstand.

**Eksempel:**
- Inngang X1 = startknapp
- Utgang Y1 = motor
- Når X1 trykkes, settes Y1

Sekvens:
1. Operator trykker startknapp (X1 går høy)
2. Neste skanning leser X1 = 1
3. Program: IF X1 THEN Y1 := 1
4. Output-scan aktiverer Y1
5. Motor starter`,
    },
    {
      title: 'Ladder Logic grunnleggende',
      content: `## Ladder Logic grunnleggende

**Hvorfor Ladder Logic?**
- Ligner tradisjonelle relédiagrammer
- Lett å forstå for elektrikere
- Grafisk og intuitivt
- Industristandard

**Grunnleggende elementer:**

**Kontakt (Contact) - Inngang**
\`\`\`
—| |—   Normally Open (NO)
—|/|—   Normally Closed (NC)
\`\`\`

**Spole (Coil) - Utgang**
\`\`\`
—( )—   Standard output
—(S)—   Set (latch)
—(R)—   Reset (unlatch)
\`\`\`

**Serie-kobling (AND)**
\`\`\`
—| X1 |—| X2 |—( Y1 )—
\`\`\`
Y1 er PÅ når BÅDE X1 OG X2 er PÅ.

**Parallell-kobling (OR)**
\`\`\`
—|—| X1 |—|—( Y1 )—
  |        |
  |—| X2 |—|
\`\`\`
Y1 er PÅ når X1 ELLER X2 er PÅ.

**Selvhold (Seal-in)**
\`\`\`
—| Start |—|/| Stopp |—| Motor |—( Motor )—
              |                  |
              |—| Motor |————————|
\`\`\`
Start aktiverer Motor.
Motor holder seg selv aktiv.
Stopp bryter kretsen.

**Negasjon (NOT)**
\`\`\`
—|/| X1 |—( Y1 )—
\`\`\`
Y1 er PÅ når X1 er AV.`,
    },
    {
      title: 'Timere og tellere',
      content: `## Timere og tellere

**Timere**
Forsinker aktivering eller deaktivering av utganger.

**TON (Timer On-Delay)**
Utgangen aktiveres etter en forsinkelse NÅR inngangen er aktiv.
\`\`\`
—| X1 |—[TON T1 PT:5s]—
—| T1.Q |—( Y1 )—
\`\`\`
X1 aktiv i 5 sekunder → Y1 aktiveres

**TOF (Timer Off-Delay)**
Utgangen holdes aktiv en stund ETTER at inngangen deaktiveres.
\`\`\`
—| X1 |—[TOF T2 PT:3s]—
—| T2.Q |—( Y1 )—
\`\`\`
X1 slår av → Y1 forblir på i 3 sekunder

**TP (Timer Pulse)**
Utgangen er aktiv i en fast tid uavhengig av inngang.
\`\`\`
—| X1 |—[TP T3 PT:2s]—
—| T3.Q |—( Y1 )—
\`\`\`
Puls på X1 → Y1 på i 2 sekunder

**Tellere**

**CTU (Count Up)**
Teller opp hver gang inngang aktiveres.
\`\`\`
—| X1 |—[CTU C1 PV:10]—
—| C1.Q |—( Y1 )—
\`\`\`
Når C1 når 10 → Y1 aktiveres

**CTD (Count Down)**
Teller ned fra en startverdi.

**CTUD (Count Up/Down)**
Kan telle både opp og ned.

**Eksempel: Automatisk lys i gang**
Bevegelse → Lys på i 30 sekunder
\`\`\`
—| Bevegelse |—[TON T1 PT:30s]—
—| T1.IN |—( Lys )—
\`\`\`
Lys er på så lenge timeren kjører (mens bevegelse + 30s etter).`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-29-ex-1',
      type: 'classic',
      task: 'Tegn Ladder Logic for en krets der motor Y1 går når ENTEN startknapp X1 ELLER X2 trykkes, men stopper når stoppknapp X3 trykkes.',
      solution: '|—| X1 |—|/| X3 |—| Y1 |—( Y1 )—\n|        |               |\n|—| X2 |—|               |\n|                        |\n|—| Y1 |——————————————————\n\nForklaring: X1 eller X2 starter motor via OR. Motor holder seg selv (Y1 kontakt). X3 (NC) bryter kretsen.',
    },
    {
      id: 'elektro-data-vg1-29-ex-2',
      type: 'classic',
      task: 'Forklar forskjellen mellom TON og TOF timer.',
      solution: 'TON (Timer On-Delay): Forsinkelse ved START. Inngang må være aktiv i hele forsinkelsestiden før utgang aktiveres. Brukes f.eks. for å vente før motor starter. TOF (Timer Off-Delay): Forsinkelse ved STOPP. Utgang forblir aktiv etter at inngang slår av. Brukes f.eks. for vifteetterkjøring eller trappehuslys.',
    },
    {
      id: 'elektro-data-vg1-29-ex-3',
      type: 'classic',
      task: 'Beskriv skannings-syklusen i en PLS.',
      solution: '1. Input scan: Les alle innganger til prosessbilde\n2. Program execution: Kjør programmet topp-til-bunn\n3. Output scan: Skriv resultater til utganger\n4. Housekeeping: Kommunikasjon, diagnostikk\n5. Gjenta fra 1\n\nEn typisk syklus tar 1-20 ms. Watchdog overvåker at syklusen fullføres.',
    },
    {
      id: 'elektro-data-vg1-29-ex-4',
      type: 'classic',
      task: 'Lag Ladder Logic for en teller som teller produkter. Ved 100 produkter skal Y1 (full kasse) aktiveres og telleren nullstilles.',
      solution: '|—| Sensor |—[CTU C1 PV:100]—\n|—| C1.Q |—( Y1 )—          // Full kasse signal\n|—| C1.Q |—( C1.R )—        // Reset teller\n\nEller med reset-knapp:\n|—| Sensor |—[CTU C1 PV:100]—\n|—| C1.Q |—( Y1 )—\n|—| Reset |—( C1.R )—',
    },
    {
      id: 'elektro-data-vg1-29-ex-5',
      type: 'classic',
      task: 'Hva er forskjellen mellom en NO (Normally Open) og NC (Normally Closed) kontakt i Ladder Logic?',
      solution: 'NO (Normally Open) —| |— : Kontakten slipper gjennom når den tilhørende variabelen/inngangen er AKTIV (1/TRUE). NC (Normally Closed) —|/|— : Kontakten slipper gjennom når variabelen er INAKTIV (0/FALSE). Eksempel: Nødstopp bruker ofte NC slik at et brudd i kabelen (som gir 0) også stopper maskinen.',
    },
    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-29-ex-6',
      type: 'classic',
      task: 'Design et PLS-program for en transportbånd-system: Startknapp starter båndet. Produktsensor ved slutten teller produkter. Ved 50 produkter stopper båndet. Resetknapp nullstiller og klargjør for ny runde.',
      solution: 'Innganger: X1=Start, X2=Produktsensor, X3=Reset\nUtganger: Y1=Motor transportbånd, Y2=Ferdig-lampe\n\nProgram:\n\n// Selvhold for motor\n|—| X1 |—|/| Full |—|/| X3 |—| Y1 |—( Y1 )—\n|                              |\n|—| Y1 |————————————————————————\n\n// Produktteller\n|—| X2 |—| Y1 |—[CTU C1 PV:50]—\n\n// Full kasse\n|—| C1.Q |—( Full )—\n|—| Full |—( Y2 )—\n\n// Reset\n|—| X3 |—( C1.R )—\n|—| X3 |—( Full_R )—  // Reset Full-bit\n\nFullert: Motor holder seg, teller produkter, stopper ved 50, reset klargjør.',
    },
    {
      id: 'elektro-data-vg1-29-ex-7',
      type: 'classic',
      task: 'Lag et sekvensielt kontrollprogram for en enkel vaskemaskin: Steg 1: Fyll vann (10 sek), Steg 2: Vask (30 sek), Steg 3: Tøm (10 sek), Steg 4: Sentrifuger (20 sek), Ferdig.',
      solution: 'Ved hjelp av en stegteller og timere:\n\nSteg 0: Vent på start\n|—| Start |—|/| Aktiv |—(S Aktiv)—\n|—| Start |—|/| Aktiv |—(S Steg1)—\n\nSteg 1: Fyll vann\n|—| Steg1 |—( Fylle_ventil )—\n|—| Steg1 |—[TON T1 PT:10s]—\n|—| T1.Q |—(R Steg1)—(S Steg2)—\n\nSteg 2: Vask\n|—| Steg2 |—( Motor )—\n|—| Steg2 |—[TON T2 PT:30s]—\n|—| T2.Q |—(R Steg2)—(S Steg3)—\n\nSteg 3: Tøm\n|—| Steg3 |—( Tømme_ventil )—\n|—| Steg3 |—[TON T3 PT:10s]—\n|—| T3.Q |—(R Steg3)—(S Steg4)—\n\nSteg 4: Sentrifuger\n|—| Steg4 |—( Motor_høyfart )—\n|—| Steg4 |—[TON T4 PT:20s]—\n|—| T4.Q |—(R Steg4)—(R Aktiv)—(S Ferdig)—\n\nFerdig-lampe\n|—| Ferdig |—( Lampe )—',
    },
  ],
  keyTerms: [
    { term: 'PLS/PLC', definition: 'Programmerbar Logisk Styring - industriell kontrollenhet.' },
    { term: 'Ladder Logic', definition: 'Grafisk programmeringsspråk som ligner relédiagrammer.' },
    { term: 'Skannings-syklus', definition: 'Repeterende sekvens: les input, kjør program, skriv output.' },
    { term: 'TON', definition: 'Timer On-Delay - forsinket aktivering av utgang.' },
    { term: 'CTU', definition: 'Count Up - teller som øker ved hver puls.' },
    { term: 'Selvhold', definition: 'Teknikk der en utgang holder seg selv aktiv.' },
  ],
};

// ============================================================================
// Kapittel 30: Industriell automasjon og robotikk
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_30: TextbookChapter = {
  id: 'elektro-data-vg1-30',
  courseId: 'elektro-data-vg1',
  chapterNumber: '30',
  title: 'Industriell automasjon og robotikk',
  description: 'Produksjonsautomasjon, industriroboter, HMI og SCADA-systemer.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forstå industriell automasjon',
    'kjenne til robottyper og bruksområder',
    'forklare HMI og SCADA-systemer',
  ],
  sections: [
    {
      title: 'Industriell automasjon',
      content: `## Industriell automasjon

**Hva er industriell automasjon?**
Bruk av kontrollsystemer (PLS, roboter, datamaskiner) for å drifte industrielle prosesser med minimal menneskelig intervensjon.

**Fordeler:**
- Økt produktivitet
- Jevn kvalitet
- Reduserte arbeidskostnader
- Økt sikkerhet (farlige operasjoner)
- 24/7 drift
- Sporbarhet og datainnsamling

**Automasjonspyramiden:**

**Nivå 5: Forretningssystemer (ERP)**
Planlegging, økonomi, ordrestyring

**Nivå 4: Plant management (MES)**
Produksjonsplanlegging, kvalitetskontroll

**Nivå 3: Prosesskontroll (SCADA)**
Overvåking, datatrender, alarmer

**Nivå 2: Kontroll (PLS, DCS)**
Automatisk styring av prosesser

**Nivå 1: Felt (sensorer, aktuatorer)**
Fysiske enheter i prosessen

**Nivå 0: Prosess**
Den fysiske produksjonen

**Eksempler på automatisert industri:**
- Bilindustri: Sveiseroboter, monteringslinjer
- Matvareproduksjon: Pakking, fylli ng, kvalitetskontroll
- Prosessindustri: Olje, kjemi, papir
- Logistikk: Automatlagre, sortering`,
    },
    {
      title: 'Industriroboter',
      content: `## Industriroboter

**Hva er en industrirobot?**
En omprogrammerbar, multifunksjonell manipulator designet for å flytte materialer, deler, verktøy eller spesialiserte enheter.

**Robottyper:**

**Artikulert (leddet arm)**
6-akset robotarm, ligner menneskearm.
- Svært fleksibel
- Brukes til sveising, maling, montering
- Eksempel: ABB, KUKA, Fanuc

**SCARA**
Selective Compliance Assembly Robot Arm.
- Stiv i vertikal retning, fleksibel horisontalt
- Rask og presis
- Brukes til pick-and-place, montering

**Delta (parallell)**
Tre armer som møtes i ett punkt.
- Svært høy hastighet
- Brukes til sortering, pakking
- Vanlig i næringsmiddelindustri

**Kartesisk (XYZ)**
Lineære bevegelser i X, Y, Z.
- Enkel programmering
- CNC-maskiner, 3D-printere

**Cobot (samarbeidende robot)**
Designet for å jobbe sammen med mennesker.
- Kraftbegrensning
- Ingen sikkerhetsgjerde nødvendig
- Lettere å programmere

**Robotspesifikasjoner:**
- Rekkevidde (mm)
- Løftekapasitet (kg)
- Repeterbarhet (mm)
- Hastighet (grader/sekund)
- Antall akser (DOF)`,
    },
    {
      title: 'HMI - Human Machine Interface',
      content: `## HMI - Human Machine Interface

**Hva er HMI?**
Grensesnitt som lar operatører samhandle med maskiner og prosesser. Erstatter knapper og lamper med berøringsskjermer.

**Funksjoner:**
- Visualisering av prosess
- Betjening (start/stopp, justering)
- Alarmer og meldinger
- Datatrender og historikk
- Oppskrifter og parametere

**Designprinsipper:**

**Klarhet**
- Oversiktlig layout
- Logisk gruppering
- Konsistent fargebruk

**Fargekoder (ISA-101):**
- Grønn: Normal drift
- Gul: Advarsel
- Rød: Alarm, fare
- Blå: Informasjon
- Grå: Inaktiv/frakoblet

**Navigasjon**
- Hierarkisk struktur (oversikt → detaljer)
- Maks 3 klikk til viktig info
- Alltid synlig tilbake-knapp

**Alarmhåndtering**
- Prioritering (kritisk/høy/lav)
- Kvittering av alarmer
- Alarmlogg
- Ikke for mange samtidige alarmer

**Typiske HMI-skjermer:**
- Prosessoversikt
- Trendvisning
- Alarmliste
- Innstillinger og parametre
- Vedlikeholdsinfo`,
    },
    {
      title: 'SCADA-systemer',
      content: `## SCADA-systemer

**Hva er SCADA?**
Supervisory Control And Data Acquisition - system for overvåking og kontroll av geografisk spredte prosesser.

**Bruksområder:**
- Vannforsyning og avløp
- Kraftproduksjon og distribusjon
- Olje- og gassinstallasjoner
- Veitrafikk og tunneler
- Bygningsautomasjon (BMS)

**Komponenter:**

**RTU (Remote Terminal Unit)**
Feltenheter som samler data fra sensorer og sender til sentralen.

**MTU (Master Terminal Unit)**
Sentralen som samler data fra alle RTU-er og presenterer til operatør.

**Kommunikasjon**
Nettverk som binder systemet sammen:
- Ethernet/IP
- Radiolink
- Fiberoptikk
- Mobilnett

**HMI/SCADA-software**
Programvare for visualisering og kontroll:
- WinCC (Siemens)
- FactoryTalk (Rockwell)
- Ignition (Inductive Automation)

**Cybersikkerhet i SCADA:**
Kritisk infrastruktur er mål for cyberangrep:
- Segregert nettverk
- Brannmurer og VPN
- Autentisering og tilgangskontroll
- Overvåking og logging
- Oppdateringer og patching`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-30-ex-1',
      type: 'classic',
      task: 'Forklar hva automasjonspyramiden er og nevn de ulike nivåene.',
      solution: 'Automasjonspyramiden viser hierarkiet i industriell automasjon:\nNivå 5: ERP - forretningssystemer, planlegging\nNivå 4: MES - produksjonsstyring, kvalitet\nNivå 3: SCADA - overvåking, datatrender\nNivå 2: PLS/DCS - prosesskontr oll\nNivå 1: Felt - sensorer og aktuatorer\nNivå 0: Prosess - fysisk produksjon\nHvert nivå kommuniserer med nivåene over og under.',
    },
    {
      id: 'elektro-data-vg1-30-ex-2',
      type: 'classic',
      task: 'Hva er forskjellen mellom en tradisjonell industrirobot og en cobot?',
      solution: 'Tradisjonell industrirobot: Høy hastighet og kraft, krever sikkerhetsgjerde, operatører må holde avstand, programmeres av spesialister. Cobot (samarbeidende robot): Kraftbegrensning, kan jobbe sammen med mennesker, ingen gjerde nødvendig, enklere programmering (ofte guide-by-hand), lavere hastighet. Coboter brukes der mennesker og roboter må samarbeide tett.',
    },
    {
      id: 'elektro-data-vg1-30-ex-3',
      type: 'classic',
      task: 'Nevn tre viktige designprinsipper for HMI og forklar hvorfor de er viktige.',
      solution: '1. Klarhet: Operatøren må raskt forstå status og finne informasjon. Dårlig design fører til feil og forsinkelser.\n2. Konsistent fargebruk: Rødt = alarm, grønt = OK. Feil farger kan føre til at alarmer overses.\n3. Enkel navigasjon: Viktig info innen 3 klikk. I nødsituasjoner må operatøren handle raskt.\nGode HMI-er reduserer feil, øker sikkerhet og forbedrer effektivitet.',
    },
    {
      id: 'elektro-data-vg1-30-ex-4',
      type: 'classic',
      task: 'Hva står SCADA for og hva brukes det til?',
      solution: 'SCADA = Supervisory Control And Data Acquisition. Brukes til overvåking og kontroll av geografisk spredte prosesser, f.eks. vannverk med pumpestasjoner over en hel kommune, kraftnett med transformatorstasjoner, eller oljeledninger. SCADA samler data fra RTU-er i felten, viser status til operatør, logger data, og tillater fjernkontroll.',
    },
    {
      id: 'elektro-data-vg1-30-ex-5',
      type: 'classic',
      task: 'Hvilken type robot passer best for høyhastighets pakking av sjokoladebiter i esker? Begrunn svaret.',
      solution: 'Delta-robot (parallellrobot) passer best. Grunner: 1) Svært høy hastighet - kan plukke hundrevis av biter per minutt. 2) God presisjon for repetitive pick-and-place oppgaver. 3) Lett konstruksjon som tillater rask akselerasjon. 4) Vanlig i næringsmiddelindustri. 5) Passer for produkter innenfor et avgrenset arbeidsområde ovenfra. SCARA kunne også fungert, men Delta er raskere.',
    },
    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-30-ex-6',
      type: 'classic',
      task: 'Design en automatisert pakkestasjon for flasker: Flasker kommer på transportbånd, fylles, korkes, etiketteres og pakkes 12 stk i esker. Beskriv nødvendig utstyr og automasjon.',
      solution: 'Pakkestasjon design:\n\n1. Innmating: Transportbånd med sensor (teller flasker)\n\n2. Fylling: Fyllemaskin med nivåsensor, stopper bånd under fylling\n\n3. Korking: Korkemaskin med tilførsel, sensor verifiserer kork\n\n4. Etikettering: Etiketteringsmaskin, sensor for plassering\n\n5. Pakking: Delta-robot plukker og plasserer i eske, CTU teller til 12\n\n6. Eskelukking: Automatisk lukker\n\nKontrollsystem:\n- PLS for sekvenskontroll\n- HMI for operatørbetjening\n- Sensorer: Fotocellesensor (telling), nivåsensor (fylling), induksjonsensor (metall kork)\n- Aktuatorer: Transportbåndmotor, pneumatiske sylindere, robot\n\nSikkerhet: Lysgitter, nødstopp, sikkerhetsrelé',
    },
    {
      id: 'elektro-data-vg1-30-ex-7',
      type: 'classic',
      task: 'Forklar hvorfor cybersikkerhet er kritisk for SCADA-systemer og nevn fem sikkerhetstiltak.',
      solution: 'Kritisk fordi SCADA styrer kritisk infrastruktur:\n- Vannverk: Kan forgifte drikkevann\n- Kraftnett: Kan slå av strøm\n- Olje/gass: Kan forårsake eksplosjoner\n- Angrep kan true liv og samfunn\n\nFem sikkerhetstiltak:\n1. Nettverkssegmentering: SCADA-nett isolert fra kontor/internett\n2. Brannmur med strenge regler: Kun nødvendig trafikk tillatt\n3. VPN for fjerntilgang: Kryptert og autentisert tilkobling\n4. Sterk autentisering: MFA, rollebasert tilgang\n5. Logging og overvåking: Detektere uvanlig aktivitet\n\nI tillegg: Regelmessig patching, sikkerhetstesting, beredskapsplaner.',
    },
  ],
  keyTerms: [
    { term: 'Industrirobot', definition: 'Omprogrammerbar manipulator for å flytte materialer og utføre oppgaver.' },
    { term: 'Cobot', definition: 'Samarbeidende robot designet for sikker interaksjon med mennesker.' },
    { term: 'HMI', definition: 'Human Machine Interface - grensesnitt mellom operatør og maskin.' },
    { term: 'SCADA', definition: 'System for overvåking og kontroll av geografisk spredte prosesser.' },
    { term: 'RTU', definition: 'Remote Terminal Unit - feltenhet som samler og sender data.' },
    { term: 'MES', definition: 'Manufacturing Execution System - produksjonsstyringssystem.' },
  ],
};

// ============================================================================
// Kapittel 31: Systematisk feilsøking
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_31: TextbookChapter = {
  id: 'elektro-data-vg1-31',
  courseId: 'elektro-data-vg1',
  chapterNumber: '31',
  title: 'Systematisk feilsøking',
  description: 'Metoder for feilsøking i elektriske og elektroniske systemer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'anvende systematiske feilsøkingsmetoder',
    'bruke måleinstrumenter til feilsøking',
    'dokumentere feilsøking og reparasjon',
  ],
  sections: [
    {
      title: 'Feilsøkingsmetodikk',
      content: `## Feilsøkingsmetodikk

**Hvorfor systematisk feilsøking?**
- Spar tid (unngå tilfeldig prøving)
- Unngå nye feil (trygg fremgangsmåte)
- Lær av feil (forbedre systemer)
- Dokumentasjon (sporbarhet)

**Den vitenskapelige metoden:**
1. Observere problemet
2. Danne hypotese
3. Teste hypotesen
4. Konkludere og handle
5. Verifisere løsningen

**Trinnvis feilsøking:**

**Steg 1: Samle informasjon**
- Hva fungerer ikke?
- Når startet problemet?
- Har noe endret seg nylig?
- Er det feilmeldinger?
- Snakk med operatør/bruker

**Steg 2: Identifiser symptomer**
- Hva er de observerbare effektene?
- Er problemet konstant eller intermittent?
- Påvirkes andre deler av systemet?

**Steg 3: Analyser mulige årsaker**
- List opp mulige feilkilder
- Prioriter etter sannsynlighet
- Tenk logisk om signalveier

**Steg 4: Test og eliminer**
- Test hypotese systematisk
- Eliminer muligheter én om gangen
- Del problemet i mindre deler

**Steg 5: Reparer**
- Utfør korrekt reparasjon
- Bruk riktige deler og metoder

**Steg 6: Verifiser og dokumenter**
- Kontroller at alt fungerer
- Dokumenter feilen og løsningen`,
    },
    {
      title: 'Halvveringsmetoden',
      content: `## Halvveringsmetoden

**Prinsipp:**
Del systemet i to, test hvilken halvdel feilen er i, gjenta til feilen er lokalisert.

**Eksempel: Signalkjede**
Sensor → Kabel → Forsterker → Kabel → Display

**Steg 1:** Test midtpunktet (etter forsterker)
- Signal OK → Feil er etter forsterker
- Signal mangler → Feil er før/i forsterker

**Steg 2:** Del den feilende halvdelen
- Hvis feil før forsterker: Test etter sensor
- Hvis feil etter forsterker: Test etter siste kabel

**Steg 3:** Fortsett til feil er lokalisert

**Fordeler:**
- Effektiv for lange kjeder
- Logaritmisk søketid (log₂n steg)
- Strukturert og logisk

**Eksempel: 8 komponenter i serie**
- Tilfeldig søk: Gjennomsnitt 4 tester
- Halvvering: Maks 3 tester (log₂8 = 3)

**Når bruke halvvering:**
- Seriekoblede systemer
- Lange signalkjeder
- Mange mulige feilpunkter
- Tid er kritisk`,
    },
    {
      title: 'Feilsøkingsverktøy',
      content: `## Feilsøkingsverktøy

**Multimeter**
Grunnleggende målinger:
- Spenning: Sjekke strømforsyning, signaler
- Motstand: Sjekke ledere, komponenter
- Kontinuitet: Finne brudd
- Strøm: Sjekke forbruk (forsiktig!)

**Oscilloskop**
Visualiserer signaler over tid:
- Se signalform (sinus, firkant)
- Måle frekvens og amplitude
- Finne støy og forstyrrelser
- Timing-problemer

**Logikkanalysator**
For digitale signaler:
- Mange kanaler samtidig
- Dekoding av protokoller (SPI, I2C, UART)
- Timing-analyse

**Termisk kamera / IR-termometer**
Finne varme komponenter:
- Overbelastede deler
- Dårlige forbindelser
- Kortslutninger

**Signalgenerator**
Generere testsignaler:
- Injisere signal for å teste krets
- Simulere sensorutgang

**PC-verktøy**
- PLS-diagn ostikk
- Nettverksanalysator
- Protokolldekoder

**Visuell inspeksjon**
Ofte undervurdert!
- Brente komponenter
- Løse forbindelser
- Korrosjon
- Mekaniske skader`,
    },
    {
      title: 'Vanlige feiltyper',
      content: `## Vanlige feiltyper

**Elektriske feil:**

**Kortslutning**
Uønsket forbindelse med lav motstand.
- Symptom: Sikring går, høy strøm
- Årsak: Skadet isolasjon, feilkobling
- Test: Motstandsmåling

**Brudd**
Avbrutt leder eller forbindelse.
- Symptom: Ingen strøm/signal
- Årsak: Slitte kabler, løse kontakter
- Test: Kontinuitetsmåling

**Jordfeil**
Lekkasje til jord.
- Symptom: Jordfeilbryter løser ut
- Årsak: Skadet isolasjon, fukt
- Test: Isolasjonsmåling

**Dårlig forbindelse**
Høy overgangsmotstand i kontakt.
- Symptom: Intermittent feil, oppvarming
- Årsak: Korrosjon, løs skru
- Test: Spenningsfall over kontakt

**Komponentfeil:**

**Kondensator**
- Kapasitansfall, lekkasje, eksplosjon
- Elektrolyttkondensatorer tørker ut

**Transistor/IC**
- Kortsluttet, åpen, degradert
- Ofte pga. varme eller overspenning

**Motstand**
- Verdiendring, brudd
- Sjelden, men sjekk ved høy temp

**Programvarefeil:**
- Feil i logikk
- Timing-problemer
- Minnelekkasje
- Kommunikasjonsfeil`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-31-ex-1',
      type: 'classic',
      task: 'Beskriv de seks stegene i systematisk feilsøking.',
      solution: '1. Samle informasjon: Snakk med bruker, les feilmeldinger\n2. Identifiser symptomer: Hva feiler, konstant eller intermittent?\n3. Analyser mulige årsaker: List opp og prioriter\n4. Test og eliminer: Test hypoteser systematisk\n5. Reparer: Utfør korrekt reparasjon\n6. Verifiser og dokumenter: Kontroller funksjon, skriv rapport',
    },
    {
      id: 'elektro-data-vg1-31-ex-2',
      type: 'classic',
      task: 'Forklar halvveringsmetoden og når den er nyttig.',
      solution: 'Halvveringsmetoden deler systemet i to, tester hvilken halvdel feilen er i, og gjentar prosessen. For en kjede med 8 elementer trengs maks 3 tester (2³=8), mot gjennomsnittlig 4 ved tilfeldig søk. Nyttig for: lange signalkjeder, seriekoblede systemer, mange mulige feilpunkter. Mindre nyttig for parallelle systemer eller når første komponent oftest feiler.',
    },
    {
      id: 'elektro-data-vg1-31-ex-3',
      type: 'classic',
      task: 'En lampe lyser ikke. Beskriv systematisk feilsøking fra sikringsskap til lampe.',
      solution: 'Systematisk feilsøking:\n1. Sjekk sikring - OK eller utløst?\n2. Mål spenning på bryterens lastside med bryter av - 230V?\n3. Slå på bryter, mål spenning ut - 230V?\n4. Mål spenning ved lampefatning - 230V?\n5. Hvis spenning OK overalt: Bytt lyspære\n6. Hvis spenning mangler et sted: Sjekk kabel/kontakt mellom siste OK-punkt og første feilpunkt\n\nBruk halvvering: Start med bryter (midtpunkt), lokaliser raskt.',
    },
    {
      id: 'elektro-data-vg1-31-ex-4',
      type: 'classic',
      task: 'Hva er forskjellen på kortslutning, brudd og jordfeil?',
      solution: 'Kortslutning: Uønsket forbindelse mellom to ledere med lav motstand. Høy strøm, sikring går.\n\nBrudd: Avbrutt leder, ingen strømgjennomgang. Kretsn er åpen, ingenting fungerer.\n\nJordfeil: Strømlekkasje fra fase til jord. Jordfeilbryter utløser. Ofte pga. skadet isolasjon eller fukt.\n\nTest: Kortslutning = lav motstand mellom ledere. Brudd = uendelig motstand i leder. Jordfeil = isolasjonsmåling viser lav motstand til jord.',
    },
    {
      id: 'elektro-data-vg1-31-ex-5',
      type: 'classic',
      task: 'Når ville du bruke oscilloskop fremfor multimeter ved feilsøking?',
      solution: 'Bruk oscilloskop når:\n- Signalet varierer over tid (AC, pulser)\n- Du trenger å se signalformen (sinus, firkant, støy)\n- Timing er viktig (forsinkelser, overlapp)\n- Du leter etter glitcher eller transienter\n- Sammenligne fase mellom signaler\n\nMultimeter er tilstrekkelig for:\n- DC-spenninger (strømforsyning)\n- Motstandsmåling\n- Kontinuitet\n- Enkle sann/usann målinger',
    },
    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-31-ex-6',
      type: 'classic',
      task: 'En PLS-styrt transportbånd stopper tilfeldig. Båndmotor, PLS, sensor og sikkerhetssystem er involvert. Beskriv systematisk feilsøking.',
      solution: 'Systematisk feilsøking:\n\n1. Samle info:\n- Hvor ofte stopper det?\n- Er det mønster (tidspunkt, last)?\n- Feilmeldinger på HMI?\n- Nylige endringer?\n\n2. Symptomanalyse:\n- Stopper motor brått eller gradvis?\n- Starter den igjen av seg selv?\n- Lyser nødstopp-lampe?\n\n3. Mulige årsaker:\n- Sikkerhetssystem (nødstopp, lysgitter)\n- Sensor (produktsensor gir feil signal)\n- PLS-program (logikkfeil)\n- Motor/frekvensomformer (termisk)\n- Elektrisk (løs kontakt, sikring)\n\n4. Test (halvvering):\n- Sjekk PLS-status (input/output)\n- Er stopp-signal aktivt? → Sikkerhetskrets\n- Er motor-output aktiv? → Motor/kabling\n- Sensor-input flakker? → Sensorproblem\n\n5. Typisk løsning:\n- Løs kontakt i sikkerhetsrelé\n- Sensor justert feil\n- Termisk utkobling pga. høy belastning\n\n6. Dokumenter funn og løsning.',
    },
    {
      id: 'elektro-data-vg1-31-ex-7',
      type: 'classic',
      task: 'Lag en feilsøkingsguide (troubleshooting guide) for et enkelt alarmsystem med dørsensor, bevegelsessensor, sentralenhet og sirene. Inkluder vanlige feil og løsninger.',
      solution: 'Feilsøkingsguide - Alarmsystem\n\nPROBLEM 1: Alarm utløses ikke\n- Sjekk: Er systemet aktivert (tilkoblet)?\n- Sjekk: Fungerer sensorene? (Test-modus)\n- Mål: Spenning på sensor (12V?)\n- Mål: Signal fra sensor til sentral\n- Løsning: Bytt batteri, sjekk kabling\n\nPROBLEM 2: Falske alarmer\n- Sjekk: Bevegelsessensor retning (dyr, varme)\n- Sjekk: Dørsensor justert riktig?\n- Sjekk: Løse ledninger som beveger seg?\n- Løsning: Juster sensor, fiks kabling\n\nPROBLEM 3: Sirene lyder ikke\n- Sjekk: Er sirene aktivert i sentral?\n- Mål: Spenning til sirene ved alarm\n- Sjekk: Sikring til sirene\n- Løsning: Bytt sikring, bytt sirene\n\nPROBLEM 4: Kan ikke aktivere\n- Sjekk: Alle soner klare? (åpen dør?)\n- Sjekk: Batteri i sentral\n- Reset: Strømløs 30 sek\n- Løsning: Lukk alle soner, bytt batteri\n\nVEDLIKEHOLD:\n- Test månedlig\n- Bytt batterier årlig\n- Rengjør sensorer',
    },
  ],
  keyTerms: [
    { term: 'Halvveringsmetoden', definition: 'Feilsøkingsteknikk som deler system i to for å lokalisere feil.' },
    { term: 'Kortslutning', definition: 'Uønsket forbindelse med lav motstand mellom ledere.' },
    { term: 'Brudd', definition: 'Avbrutt leder som hindrer strømgjennomgang.' },
    { term: 'Jordfeil', definition: 'Strømlekkasje fra aktiv leder til jord.' },
    { term: 'Intermittent feil', definition: 'Feil som kommer og går, vanskelig å reprodusere.' },
    { term: 'Visuell inspeksjon', definition: 'Undersøkelse med øynene for å finne synlige skader.' },
  ],
};

// ============================================================================
// Kapittel 32: Prosjektarbeid og dokumentasjon
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_32: TextbookChapter = {
  id: 'elektro-data-vg1-32',
  courseId: 'elektro-data-vg1',
  chapterNumber: '32',
  title: 'Prosjektarbeid og dokumentasjon',
  description: 'Prosjektplanlegging, gjennomføring og teknisk dokumentasjon.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge og gjennomføre tekniske prosjekter',
    'lage teknisk dokumentasjon',
    'presentere prosjektarbeid',
  ],
  sections: [
    {
      title: 'Prosjektplanlegging',
      content: `## Prosjektplanlegging

**Hva er et prosjekt?**
En tidsbegrenset innsats for å oppnå et spesifikt mål, med definert omfang, ressurser og leveranser.

**Prosjektfaser:**

**1. Oppstart**
- Definere mål og krav
- Identifisere interessenter
- Vurdere gjennomførbarhet
- Lage prosjektmandat

**2. Planlegging**
- Bryte ned i arbeidsoppgaver
- Estimere tid og ressurser
- Lage tidsplan (Gantt)
- Identifisere risiko

**3. Gjennomføring**
- Utføre planlagte oppgaver
- Følge opp fremdrift
- Håndtere endringer
- Kommunisere med team

**4. Avslutning**
- Levere resultat
- Dokumentere
- Evaluere prosjektet
- Overføre til drift

**Prosjekttrekanten:**
- Tid
- Kostnad
- Omfang/kvalitet

Endring i én påvirker de andre. Kan ikke ha alt!

**SMART-mål:**
- Spesifikt
- Målbart
- Oppnåelig (Achievable)
- Relevant
- Tidsbegrenset`,
    },
    {
      title: 'Prosjektverktøy',
      content: `## Prosjektverktøy

**Gantt-diagram**
Visuell tidslinje som viser:
- Oppgaver som horisontale søyler
- Start og sluttdato
- Avhengigheter mellom oppgaver
- Milepæler

Verktøy: Microsoft Project, GanttProject (gratis), Trello

**WBS (Work Breakdown Structure)**
Hierarkisk nedbrytning av prosjektet i mindre deler.
\`\`\`
Prosjekt
├── Fase 1: Design
│   ├── Kravspesifikasjon
│   ├── Kretsdesign
│   └── Mekanisk design
├── Fase 2: Bygging
│   ├── Komponentinnkjøp
│   ├── Kretsmontasje
│   └── Testing
└── Fase 3: Dokumentasjon
    ├── Brukermanual
    └── Teknisk rapport
\`\`\`

**Kanban-tavle**
Visualiserer arbeidsflyt:
- Kolonner: "Å gjøre", "Pågår", "Ferdig"
- Kort for hver oppgave
- Begrenser arbeid i prosess (WIP)
- Verktøy: Trello, Jira, fysisk tavle

**Risikoanalyse**
Identifiser hva som kan gå galt:
- Sannsynlighet × Konsekvens = Risiko
- Planlegg tiltak for høy risiko
- Følg opp gjennom prosjektet`,
    },
    {
      title: 'Teknisk dokumentasjon',
      content: `## Teknisk dokumentasjon

**Hvorfor dokumentere?**
- Kunnskapsoverføring
- Vedlikehold og reparasjon
- Reproduserbarhet
- Juridisk/kontraktsmessig

**Typer dokumentasjon:**

**Kravspesifikasjon**
Hva systemet skal gjøre:
- Funksjonelle krav
- Ytelseskrav
- Grensesnitt
- Begrensninger

**Teknisk spesifikasjon**
Hvordan systemet er bygget:
- Systemarkitektur
- Komponentvalg
- Kretsskjemaer
- Programkode

**BOM (Bill of Materials)**
Liste over alle komponenter:
- Referanse (R1, C1, U1)
- Verdi/type
- Leverandør og artikkelnr
- Antall

**Brukermanual**
For sluttbruker:
- Installasjon
- Normal bruk
- Feilsøking
- Vedlikehold

**Testrapport**
Dokumenterer testing:
- Testprosedyre
- Resultater
- Avvik
- Konklusjon

**Samsvarserklæring**
For elektriske installasjoner:
- Bekrefter at forskrifter er fulgt
- Nødvendig for idriftsettelse`,
    },
    {
      title: 'Presentasjon og rapportskriving',
      content: `## Presentasjon og rapportskriving

**Rapportstruktur:**

**1. Forside**
Tittel, forfatter, dato, skole

**2. Sammendrag**
Kort oppsummering av hele rapporten

**3. Innholdsfortegnelse**

**4. Innledning**
- Bakgrunn
- Problemstilling
- Mål

**5. Teori**
Relevant teorigrunnlag

**6. Metode/Fremgangsmåte**
Hvordan arbeidet ble utført

**7. Resultater**
Hva ble oppnådd (data, bilder, målinger)

**8. Diskusjon**
Analyse av resultater, refleksjon

**9. Konklusjon**
Oppsummering, måloppnåelse

**10. Referanser**
Kilder brukt i arbeidet

**11. Vedlegg**
Kretsskjemaer, kode, datablad

**Presentasjonstips:**
- Kjenn publikum
- Strukturer logisk
- Bruk visuelle hjelpemidler
- Øv på forhånd
- Hold deg til tiden
- Forbered på spørsmål

**Verktøy:**
- Word/Google Docs (rapport)
- PowerPoint/Google Slides (presentasjon)
- Git/GitHub (versjonskontroll)
- LaTeX (teknisk/akademisk)`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-32-ex-1',
      type: 'classic',
      task: 'Hva er de fire hovedfasene i et prosjekt?',
      solution: '1. Oppstart: Definere mål, identifisere interessenter, vurdere gjennomførbarhet\n2. Planlegging: Bryte ned oppgaver, estimere tid, lage tidsplan, risikoanalyse\n3. Gjennomføring: Utføre oppgaver, følge opp fremdrift, håndtere endringer\n4. Avslutning: Levere resultat, dokumentere, evaluere, overføre til drift',
    },
    {
      id: 'elektro-data-vg1-32-ex-2',
      type: 'classic',
      task: 'Forklar hva "prosjekttrekanten" er.',
      solution: 'Prosjekttrekanten beskriver de tre hovedbegrensningene i ethvert prosjekt: Tid, Kostnad og Omfang/Kvalitet. Disse henger sammen - endrer du én, påvirkes de andre. F.eks.: Vil du levere raskere? Må bruke mer penger eller redusere omfang. Vil du ha høyere kvalitet? Trenger mer tid eller mer penger. Du kan ikke optimalisere alle tre samtidig.',
    },
    {
      id: 'elektro-data-vg1-32-ex-3',
      type: 'classic',
      task: 'Hva er en BOM og hvorfor er den viktig?',
      solution: 'BOM (Bill of Materials) er en komplett liste over alle komponenter i et produkt eller prosjekt. Inkluderer referanse (R1, C1), verdi/type, leverandør/artikkelnummer og antall. Viktig fordi: 1) Nødvendig for å bestille riktige deler, 2) Sikrer reproduserbarhet, 3) Beregner materialkostnader, 4) Hjelper ved reparasjon/vedlikehold, 5) Dokumenterer hva som er brukt.',
    },
    {
      id: 'elektro-data-vg1-32-ex-4',
      type: 'classic',
      task: 'Beskriv strukturen i en god teknisk rapport.',
      solution: 'Teknisk rapportstruktur:\n1. Forside: Tittel, forfatter, dato\n2. Sammendrag: Kort oppsummering\n3. Innholdsfortegnelse\n4. Innledning: Bakgrunn, mål\n5. Teori: Relevant bakgrunnsstoff\n6. Metode: Hvordan utført\n7. Resultater: Data, målinger, bilder\n8. Diskusjon: Analyse, refleksjon\n9. Konklusjon: Oppsummering\n10. Referanser: Kilder\n11. Vedlegg: Skjemaer, kode, datablad',
    },
    {
      id: 'elektro-data-vg1-32-ex-5',
      type: 'classic',
      task: 'Hva betyr SMART-mål? Gi et eksempel på et SMART-mål for et skoleprosjekt.',
      solution: 'SMART = Spesifikt, Målbart, Oppnåelig (Achievable), Relevant, Tidsbegrenset.\n\nEksempel: "Bygge en temperaturstyrt vifte som slår seg på ved over 25°C, dokumentert med kretsskjema og brukermanual, ferdig til innlevering 15. april."\n\n- Spesifikt: Temperaturstyrt vifte\n- Målbart: Slår på ved 25°C\n- Oppnåelig: Gjennomførbart på VG1-nivå\n- Relevant: Knyttet til automasjon i læreplanen\n- Tidsbegrenset: Ferdig 15. april',
    },
    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-32-ex-6',
      type: 'classic',
      task: 'Lag en prosjektplan for et 4-ukers skoleprosjekt: "Bygg en solcelledrevet mobillader". Inkluder faser, oppgaver, tidsestimat og milepæler.',
      solution: 'Prosjektplan: Solcelledrevet mobillader\n\nUKE 1 - Planlegging\n- Dag 1-2: Kravspesifikasjon (hva skal laderen klare?)\n- Dag 3-4: Komponentvalg (solcelle, regulator, USB)\n- Dag 5: Bestille komponenter\nMilepæl: Designdokument ferdig\n\nUKE 2 - Design\n- Dag 1-3: Tegne kretsskjema\n- Dag 4-5: Designe kapsling (3D/mekanisk)\nMilepæl: Kretsskjema godkjent\n\nUKE 3 - Bygging\n- Dag 1-2: Lodde kretskort\n- Dag 3-4: Montere i kapsling\n- Dag 5: Første test\nMilepæl: Prototype fungerer\n\nUKE 4 - Test og dokumentasjon\n- Dag 1-2: Fullstendig testing\n- Dag 3-4: Skrive rapport og brukermanual\n- Dag 5: Forberede presentasjon\nMilepæl: Prosjekt levert\n\nRisiko: Forsinkelse på komponenter - bestill tidlig!',
    },
    {
      id: 'elektro-data-vg1-32-ex-7',
      type: 'classic',
      task: 'Skriv et sammendrag (abstract) på ca. 100 ord for et prosjekt om en Arduino-basert plantevannersystem.',
      solution: 'Sammendrag:\n\nDette prosjektet beskriver design og bygging av et automatisk plantevanningssystem basert på Arduino. Systemet bruker en jordfuktighetssensor for å måle vannbehovet og en pumpe for å vanne planten når jorden er for tørr. En LCD-skjerm viser aktuell fuktighetsstatus. Systemet ble testet over to uker og holdt fuktighetsnivået stabilt mellom 40-60%. Prosjektet demonstrerer hvordan mikrokontrollere kan brukes til praktisk automasjon i hjemmet. Kostnaden var ca. 350 kr og byggetiden 8 timer. Mulige forbedringer inkluderer WiFi-tilkobling og flere sensorer.',
    },
  ],
  keyTerms: [
    { term: 'Gantt-diagram', definition: 'Visuell tidslinje som viser oppgaver, varighet og avhengigheter.' },
    { term: 'WBS', definition: 'Work Breakdown Structure - hierarkisk nedbrytning av prosjektoppgaver.' },
    { term: 'BOM', definition: 'Bill of Materials - liste over alle komponenter i et produkt.' },
    { term: 'Milepæl', definition: 'Viktig punkt i prosjektet som markerer fullføring av en fase.' },
    { term: 'SMART-mål', definition: 'Målsettingsmetode: Spesifikt, Målbart, Oppnåelig, Relevant, Tidsbegrenset.' },
    { term: 'Risikoanalyse', definition: 'Identifisering og vurdering av hva som kan gå galt i et prosjekt.' },
  ],
};

// ============================================================================
// Eksporter alle kapitler fra del 4
// ============================================================================

export const CHAPTERS_ELEKTRO_DATA_VG1_PART4 = [
  CHAPTER_ELEKTRO_DATA_VG1_28,
  CHAPTER_ELEKTRO_DATA_VG1_29,
  CHAPTER_ELEKTRO_DATA_VG1_30,
  CHAPTER_ELEKTRO_DATA_VG1_31,
  CHAPTER_ELEKTRO_DATA_VG1_32,
];
