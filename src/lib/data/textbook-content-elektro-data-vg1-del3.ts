/* eslint-disable */
// @ts-nocheck
/**
 * Elektro og datateknologi VG1 - Tekstbokinnhold Del 3
 *
 * Dekker kapittel 23-32: IPv6, Nettverkssikkerhet, Elektriske installasjoner,
 * Solcelleanlegg, Varmepumper, Smarthussystemer, etc.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 23: Avanserte nettverkskonsepter
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_23: TextbookChapter = {
  id: 'elektro-data-vg1-23',
  courseId: 'elektro-data-vg1',
  chapterNumber: '23',
  title: 'Avanserte nettverkskonsepter',
  description: 'IPv6, subnetting, VLAN og avansert nettverksarkitektur.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forstå IPv6-adressering',
    'beregne subnett og nettmasker',
    'forklare VLAN og nettverkssegmentering',
  ],
  sections: [
    {
      title: 'IPv6 - Internettets fremtid',
      content: `## IPv6 - Internettets fremtid

**Hvorfor IPv6?**
IPv4 har "bare" ca. 4.3 milliarder adresser (2^32). Med smartphones, IoT-enheter og eksplosiv vekst i internettbruk er dette ikke nok.

IPv6 har 2^128 adresser - det er 340 undecillioner adresser!

**IPv6 adresseformat:**
8 grupper med 4 heksadesimale siffer, separert med kolon:
\`\`\`
2001:0db8:85a3:0000:0000:8a2e:0370:7334
\`\`\`

**Forkortelsesregler:**
1. Ledende nuller i hver gruppe kan fjernes:
   \`2001:db8:85a3:0:0:8a2e:370:7334\`

2. Én sekvens av bare-null-grupper kan erstattes med :::
   \`2001:db8:85a3::8a2e:370:7334\`

**Spesielle IPv6-adresser:**
- \`::1\` - Loopback (localhost)
- \`fe80::/10\` - Link-local adresser (automatisk)
- \`2000::/3\` - Globale unicast adresser

**Fordeler med IPv6:**
- Enorm adresseplass
- Innebygd sikkerhet (IPsec)
- Bedre støtte for mobile enheter
- Automatisk adressekonfigurasjon (SLAAC)
- Ingen NAT nødvendig`,
    },
    {
      title: 'Subnetting og CIDR',
      content: `## Subnetting og CIDR

**Hva er subnetting?**
Subnetting deler opp et stort nettverk i mindre logiske nettverk for:
- Bedre organisering
- Økt sikkerhet
- Effektiv bruk av adresser
- Redusert broadcast-trafikk

**CIDR-notasjon**
CIDR (Classless Inter-Domain Routing) angir nettverksprefikset:
\`\`\`
192.168.1.0/24
\`\`\`
/24 betyr at de første 24 bitene er nettverksdelen.

**Beregne subnett:**

**Eksempel: 192.168.1.0/24**
- Nettmaske: 255.255.255.0 (24 enere)
- Nettverksadresse: 192.168.1.0
- Første host: 192.168.1.1
- Siste host: 192.168.1.254
- Broadcast: 192.168.1.255
- Antall hosts: 2^(32-24) - 2 = 254

**Eksempel: 10.0.0.0/16**
- Nettmaske: 255.255.0.0
- Antall hosts: 2^16 - 2 = 65534

**Vanlige prefikslengder:**
- /8 = 16 millioner hosts (store organisasjoner)
- /16 = 65 534 hosts
- /24 = 254 hosts (typisk LAN)
- /30 = 2 hosts (punkt-til-punkt lenker)

**Dele opp nettverk:**
Et /24 nettverk kan deles i:
- 2 × /25 (126 hosts hver)
- 4 × /26 (62 hosts hver)
- 8 × /27 (30 hosts hver)`,
    },
    {
      title: 'VLAN - Virtuelle LAN',
      content: `## VLAN - Virtuelle LAN

**Hva er VLAN?**
VLAN (Virtual LAN) er en måte å logisk segmentere et fysisk nettverk i flere separate nettverk.

**Hvorfor VLAN?**
- **Sikkerhet**: Isolere følsomme systemer
- **Ytelse**: Redusere broadcast-trafikk
- **Organisering**: Gruppere etter avdeling/funksjon
- **Fleksibilitet**: Flytte enheter uten å endre kabler

**Eksempel:**
En bedrift med én fysisk switch kan ha:
- VLAN 10: Administrasjon
- VLAN 20: Produksjon
- VLAN 30: Gjester
- VLAN 40: IoT-enheter

Enheter i forskjellige VLAN kan ikke kommunisere direkte - må gå gjennom router.

**Trunk-porter**
Porter som bærer trafikk fra flere VLAN. Bruker 802.1Q tagging for å identifisere VLAN.

**Access-porter**
Porter som tilhører ett VLAN. Typisk brukt for sluttenheter (PC, printer).

**Inter-VLAN routing**
For at VLAN skal kunne kommunisere trengs en router (Layer 3 switch) som ruter mellom VLAN.

**Konfigurasjon (Cisco-eksempel):**
\`\`\`
Switch(config)# vlan 10
Switch(config-vlan)# name Administrasjon
Switch(config)# interface fa0/1
Switch(config-if)# switchport access vlan 10
\`\`\``,
    },
    {
      title: 'Nettverksdesign og topologi',
      content: `## Nettverksdesign og topologi

**Tre-lags modell (Hierarkisk design)**

**1. Kjernelag (Core)**
- Rask transport mellom distribusjonslagene
- Høy hastighet, lav latens
- Ingen pakkebehandling, bare videresending
- Redundans for pålitelighet

**2. Distribusjonsla (Distribution)**
- Kobler access-lag til kjerne
- Implementerer sikkerhetspolicyer
- Ruting mellom VLAN
- QoS (Quality of Service)

**3. Aksessla (Access)**
- Sluttbrukere og enheter kobles her
- Porter konfigureres for riktig VLAN
- Port-sikkerhet
- PoE (Power over Ethernet)

**Redundans og pålitelighet:**

**STP (Spanning Tree Protocol)**
Forhindrer loops i nettverk med redundante koblinger ved å blokkere ekstra stier.

**Link aggregation (EtherChannel)**
Kombinerer flere fysiske koblinger til én logisk for økt båndbredde og redundans.

**Typisk SMB-nettverk:**
\`\`\`
Internett
    |
  Router/Brannmur
    |
  Core Switch (L3)
    |-------|
Distribution   Distribution
    |           |
Access     Access
 |   |      |   |
PC  AP     PC  Server
\`\`\``,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-23-ex-1',
      type: 'classic',
      task: 'Konverter IPv6-adressen 2001:0db8:0000:0000:0000:0000:0000:0001 til forkortet form.',
      solution: 'Fjern ledende nuller: 2001:db8:0:0:0:0:0:1. Erstatt null-sekvens med ::: 2001:db8::1',
    },
    {
      id: 'elektro-data-vg1-23-ex-2',
      type: 'classic',
      task: 'Et nettverk har adressen 172.16.0.0/20. Hvor mange host-adresser er tilgjengelig?',
      solution: 'Hostbiter = 32 - 20 = 12 biter. Antall adresser = 2^12 = 4096. Trekk fra nettverksadresse og broadcast: 4096 - 2 = 4094 tilgjengelige host-adresser.',
    },
    {
      id: 'elektro-data-vg1-23-ex-3',
      type: 'classic',
      task: 'Forklar hvorfor bedrifter bruker VLAN for å separere gjestenettverk fra produksjonsnettverk.',
      solution: 'VLAN gir sikker separasjon: Gjester kan ikke få tilgang til interne ressurser. Broadcast-trafikk fra gjester påvirker ikke produksjon. IT kan sette egne regler for gjestenettet (hastighet, tilgang). Enklere å logge og overvåke gjestetrafikk. Kan bruke samme fysiske infrastruktur uten sikkerhetskompromiss.',
    },
    {
      id: 'elektro-data-vg1-23-ex-4',
      type: 'classic',
      task: 'Du har nettverket 192.168.10.0/24 og trenger 4 like store subnett. Beregn nettverksadresse, nettmaske og hostområde for hvert subnett.',
      solution: '4 subnett = 2^2, trenger 2 ekstra biter for subnett. Ny prefiks: /26.\n\nSubnett 1: 192.168.10.0/26 (hosts: .1-.62)\nSubnett 2: 192.168.10.64/26 (hosts: .65-.126)\nSubnett 3: 192.168.10.128/26 (hosts: .129-.190)\nSubnett 4: 192.168.10.192/26 (hosts: .193-.254)\n\nNettmaske: 255.255.255.192\n62 hosts per subnett',
    },
    {
      id: 'elektro-data-vg1-23-ex-5',
      type: 'classic',
      task: 'Hva er forskjellen mellom en access-port og en trunk-port på en switch?',
      solution: 'Access-port: Tilhører bare ett VLAN, brukes for sluttenheter (PC, printer). Ingen VLAN-tagging - switchen legger til/fjerner tags. Trunk-port: Bærer trafikk fra flere VLAN, brukes mellom switcher eller til routere. Bruker 802.1Q tagging for å identifisere hvilket VLAN hver pakke tilhører.',
    },
    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-23-ex-6',
      type: 'classic',
      task: 'Design et nettverk for en liten bedrift med 50 ansatte, 10 servere, et gjestenettverk og et IoT-nettverk (30 enheter). Spesifiser VLAN, IP-adresseplan og nødvendig utstyr.',
      solution: 'VLAN-plan:\n- VLAN 10: Ansatte (192.168.10.0/26, 62 hosts)\n- VLAN 20: Servere (192.168.20.0/28, 14 hosts)\n- VLAN 30: Gjester (192.168.30.0/26, 62 hosts)\n- VLAN 40: IoT (192.168.40.0/26, 62 hosts)\n\nUtstyr:\n- 1x Layer 3 switch (core/distribusjon)\n- 2x Layer 2 switcher (aksess)\n- 1x Router/brannmur\n- 2x Trådløse aksesspunkter\n\nSikkerhet:\n- Gjeste-VLAN isolert, kun internett\n- IoT-VLAN med begrenset tilgang\n- Servere bak brannmur-regler',
    },
    {
      id: 'elektro-data-vg1-23-ex-7',
      type: 'classic',
      task: 'Sammenlign IPv4 og IPv6 med hensyn til adresseplass, header-format, sikkerhet og adressekonfigurasjon.',
      solution: 'Adresseplass: IPv4 har 2^32 (4.3 mrd), IPv6 har 2^128 (uendelig mye). Header: IPv4 variabel lengde (20-60 byte), IPv6 fast 40 byte (forenklet). Sikkerhet: IPv4 har IPsec som tillegg, IPv6 har IPsec innebygd. Konfigurasjon: IPv4 bruker DHCP primært, IPv6 har SLAAC (automatisk) pluss DHCPv6. IPv6 har også bedre støtte for mobilitet og multicast.',
    },
  ],
  keyTerms: [
    { term: 'IPv6', definition: 'Internet Protocol versjon 6 med 128-bit adresser for fremtidens internett.' },
    { term: 'CIDR', definition: 'Classless Inter-Domain Routing - fleksibel metode for IP-adressering.' },
    { term: 'Subnetting', definition: 'Oppdeling av nettverk i mindre logiske nettverk.' },
    { term: 'VLAN', definition: 'Virtual LAN - logisk segmentering av fysisk nettverk.' },
    { term: 'Trunk-port', definition: 'Switch-port som bærer trafikk fra flere VLAN med 802.1Q tagging.' },
    { term: 'STP', definition: 'Spanning Tree Protocol - forhindrer loops i nettverk.' },
  ],
};

// ============================================================================
// Kapittel 24: Nettverkssikkerhet
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_24: TextbookChapter = {
  id: 'elektro-data-vg1-24',
  courseId: 'elektro-data-vg1',
  chapterNumber: '24',
  title: 'Nettverkssikkerhet',
  description: 'Brannmurer, kryptering, autentisering og sikker nettverkspraksis.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå grunnleggende nettverkssikkerhet',
    'forklare brannmurer og deres funksjon',
    'kjenne til kryptering og autentisering',
  ],
  sections: [
    {
      title: 'Trusselbildet',
      content: `## Trusselbildet

**Vanlige nettverkstrusler:**

**Malware (skadelig programvare)**
- Virus: Sprer seg ved å feste seg til filer
- Ormer: Selvspredende via nettverk
- Trojanere: Ser ut som legitim programvare
- Ransomware: Krypterer filer, krever løsepenger

**Phishing**
Falske e-poster eller nettsider som prøver å lure deg til å oppgi sensitiv informasjon.

**Man-in-the-Middle (MitM)**
Angriper plasserer seg mellom to kommuniserende parter og avlytter/modifiserer trafikk.

**Denial of Service (DoS/DDoS)**
Overvelmer et system med trafikk slik at det blir utilgjengelig.

**SQL-injeksjon**
Angripere sender ondsinnet SQL-kode via inputfelt for å få tilgang til databaser.

**Passordangrep**
- Brute force: Prøver alle kombinasjoner
- Dictionary attack: Prøver vanlige ord
- Credential stuffing: Bruker lekkede passord

**Sosial manipulering**
Lurer mennesker til å gi tilgang eller informasjon.`,
    },
    {
      title: 'Brannmurer',
      content: `## Brannmurer

**Hva er en brannmur?**
En brannmur er en sikkerhetsenhet som kontrollerer nettverkstrafikk basert på regler.

**Typer brannmurer:**

**Pakkefilter (stateless)**
- Sjekker individuelle pakker
- Basert på IP-adresser, porter, protokoller
- Raskt, men begrenset

**Stateful inspection**
- Holder styr på aktive tilkoblinger
- Bedre beskyttelse enn pakkefilter
- Standard i moderne brannmurer

**Application layer (proxy)**
- Inspiserer innholdet i pakker
- Kan blokkere spesifikke applikasjoner
- Tregere, men mer grundig

**Next-Generation Firewall (NGFW)**
- Kombinerer alle over
- Deep packet inspection
- Integrert antivirus, IPS
- Applikasjonsbevissthet

**Brannmurregler:**
\`\`\`
Allow TCP fra 192.168.1.0/24 til port 80 (HTTP)
Allow TCP fra 192.168.1.0/24 til port 443 (HTTPS)
Allow UDP port 53 (DNS)
Deny all (standard avvis alt annet)
\`\`\`

**DMZ (Demilitarized Zone)**
Nettverkssegment mellom internett og internt nett for offentlige servere.`,
    },
    {
      title: 'Kryptering',
      content: `## Kryptering

**Hva er kryptering?**
Kryptering omdanner lesbar tekst (plaintext) til uleselig tekst (ciphertext) ved hjelp av en nøkkel.

**Symmetrisk kryptering**
Samme nøkkel brukes for å kryptere og dekryptere.
- Rask og effektiv
- Utfordring: Hvordan dele nøkkelen trygt?
- Eksempler: AES, 3DES

**Asymmetrisk kryptering**
To nøkler: offentlig (kan deles) og privat (hemmelig).
- Offentlig nøkkel krypterer, privat dekrypterer
- Løser nøkkelutvekslingsproblemet
- Tregere enn symmetrisk
- Eksempler: RSA, ECC

**Hybrid kryptering**
Kombinerer begge:
1. Asymmetrisk for å utveksle en sesjonsnøkkel
2. Symmetrisk for å kryptere selve dataene
3. Brukes i TLS/HTTPS

**Hashing**
Enveis funksjon som lager "fingeravtrykk" av data.
- Verifiserer integritet
- Kan ikke reverseres
- Eksempler: SHA-256, SHA-3
- Bruk: Passordlagring, filverifisering

**TLS/HTTPS**
Transport Layer Security sikrer nettrafikk:
- Krypterer data mellom nettleser og server
- Autentiserer serveren med sertifikat
- Grønne låsikon i nettleseren`,
    },
    {
      title: 'Autentisering og tilgangskontroll',
      content: `## Autentisering og tilgangskontroll

**Autentiseringsfaktorer:**

**1. Noe du vet**
Passord, PIN-kode, sikkerhetsspørsmål

**2. Noe du har**
Smartkort, mobiltelefon (SMS/app), hardware-token

**3. Noe du er**
Fingeravtrykk, ansiktsgjenkjenning, iris-skanning

**Multi-faktor autentisering (MFA)**
Kombinerer to eller flere faktorer for sterkere sikkerhet.

**Eksempel:** Passord (noe du vet) + SMS-kode (noe du har)

**Sterke passord:**
- Minst 12-16 tegn
- Blanding av store/små bokstaver, tall, spesialtegn
- Unike for hver tjeneste
- Bruk passordbehandler

**Single Sign-On (SSO)**
Én innlogging gir tilgang til flere systemer.
- Praktisk for brukere
- Sentralisert sikkerhetskontroll

**802.1X (Port-basert nettverkstilgangskontroll)**
Autentiserer enheter før de får nettverkstilgang:
1. Bruker/enhet sender legitimasjon
2. Switch sender til RADIUS-server
3. Server godkjenner eller avviser
4. Switch gir/nekter tilgang

**Zero Trust**
"Aldri stol på, alltid verifiser"
- Ingen automatisk tillit basert på plassering
- Kontinuerlig verifisering
- Minimal tilgang (principle of least privilege)`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-24-ex-1',
      type: 'classic',
      task: 'Forklar forskjellen mellom symmetrisk og asymmetrisk kryptering.',
      solution: 'Symmetrisk kryptering bruker samme nøkkel for kryptering og dekryptering - rask, men nøkkelen må deles trygt. Asymmetrisk bruker to nøkler: offentlig (krypterer) og privat (dekrypterer) - løser nøkkelutvekslingsproblemet, men er tregere. I praksis kombineres de: asymmetrisk for nøkkelutveksling, symmetrisk for data.',
    },
    {
      id: 'elektro-data-vg1-24-ex-2',
      type: 'classic',
      task: 'Hva er multi-faktor autentisering (MFA) og hvorfor er det sikrere enn bare passord?',
      solution: 'MFA krever to eller flere uavhengige autentiseringsfaktorer: noe du vet (passord), noe du har (telefon), noe du er (fingeravtrykk). Det er sikrere fordi en angriper må kompromittere flere faktorer. Selv om passordet lekkes, stopper MFA angriperen uten tilgang til den andre faktoren.',
    },
    {
      id: 'elektro-data-vg1-24-ex-3',
      type: 'classic',
      task: 'Du skal sette opp brannmurregler for en webserver. Hvilke porter må være åpne, og fra hvilke adresser?',
      solution: 'For webserver trengs:\n- Port 80 (HTTP) fra alle (0.0.0.0/0)\n- Port 443 (HTTPS) fra alle\n- Port 22 (SSH) bare fra admin-nett (f.eks. 10.0.1.0/24)\n- Alt annet blokkeres\n\nEksempel:\nAllow TCP any -> 80\nAllow TCP any -> 443\nAllow TCP 10.0.1.0/24 -> 22\nDeny all',
    },
    {
      id: 'elektro-data-vg1-24-ex-4',
      type: 'classic',
      task: 'Hva er phishing og hvordan kan du beskytte deg mot det?',
      solution: 'Phishing er forsøk på å lure deg til å oppgi sensitiv informasjon via falske e-poster eller nettsider som ser legitime ut. Beskyttelse: 1) Sjekk avsender-adresse nøye, 2) Ikke klikk lenker i e-post - skriv URL manuelt, 3) Se etter HTTPS og grønn lås, 4) Vær skeptisk til "hastesaker" og trusler, 5) Bruk MFA så passordlekkasje ikke er nok, 6) Hold programvare oppdatert.',
    },
    {
      id: 'elektro-data-vg1-24-ex-5',
      type: 'classic',
      task: 'Forklar hva en DMZ er og hvorfor den brukes.',
      solution: 'DMZ (Demilitarized Zone) er et nettverkssegment mellom internett og det interne nettverket. Offentlig tilgjengelige servere (webserver, e-postserver) plasseres i DMZ. Fordeler: Internett kan nå serverne, men hvis serverne kompromitteres, har ikke angriperen direkte tilgang til det interne nettet. To brannmurer brukes ofte - én mot internett, én mot internt nett.',
    },
    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-24-ex-6',
      type: 'classic',
      task: 'Lag en sikkerhetspolicy for passord i en liten bedrift. Inkluder krav til passordlengde, kompleksitet, utløp, MFA, og retningslinjer for ansatte.',
      solution: 'Passordpolicy:\n\n1. Krav:\n- Minimum 14 tegn\n- Minst 1 stor bokstav, 1 liten, 1 tall, 1 spesialtegn\n- Kan ikke inneholde brukernavn eller vanlige ord\n- Utløper etter 90 dager\n- Ikke gjenbruk av siste 12 passord\n\n2. MFA:\n- Obligatorisk for alle systemer\n- Godkjente metoder: Authenticator-app, hardware-token\n- SMS-kode tillatt som backup\n\n3. Retningslinjer:\n- Aldri del passord\n- Bruk passordbehandler\n- Rapporter mistenkelig aktivitet\n- Automatisk låsing etter 5 feilforsøk\n- Årlig sikkerhetsopplæring',
    },
    {
      id: 'elektro-data-vg1-24-ex-7',
      type: 'classic',
      task: 'Beskriv hvordan HTTPS/TLS beskytter kommunikasjon mellom nettleser og webserver. Inkluder sertifikater, nøkkelutveksling og kryptering.',
      solution: 'HTTPS/TLS-prosessen:\n\n1. Klient kobler til server\n2. Server sender sitt sertifikat (med offentlig nøkkel)\n3. Klient verifiserer sertifikatet mot betrodde CA-er\n4. Klient og server forhandler krypteringsalgoritmer\n5. Nøkkelutveksling (f.eks. ECDHE):\n   - Begge genererer midlertidige nøkkelpar\n   - Utveksler offentlige deler\n   - Beregner delt hemmelighet (sesjonsnøkkel)\n6. All videre kommunikasjon krypteres med sesjonsnøkkelen (AES)\n7. HMAC sikrer integritet\n\nResultat: Konfidensialitet (kryptert), Integritet (MAC), Autentisering (sertifikat).',
    },
  ],
  keyTerms: [
    { term: 'Brannmur', definition: 'Sikkerhetsenhet som kontrollerer nettverkstrafikk basert på regler.' },
    { term: 'Kryptering', definition: 'Omdanning av lesbar tekst til uleselig format med nøkkel.' },
    { term: 'MFA', definition: 'Multi-faktor autentisering - krever flere uavhengige bekreftelser.' },
    { term: 'TLS', definition: 'Transport Layer Security - protokoll for kryptert kommunikasjon.' },
    { term: 'Phishing', definition: 'Angrep der falske meldinger brukes for å lure ut sensitiv informasjon.' },
    { term: 'DMZ', definition: 'Demilitarized Zone - isolert nettverkssegment for offentlige servere.' },
  ],
};

// ============================================================================
// Kapittel 25: Elektriske installasjoner i bygg
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_25: TextbookChapter = {
  id: 'elektro-data-vg1-25',
  courseId: 'elektro-data-vg1',
  chapterNumber: '25',
  title: 'Elektriske installasjoner i bygg',
  description: 'Bygningsinstallasjoner, kursopplegg, TN-systemer og installasjonsforskrifter.',
  estimatedMinutes: 65,
  competenceGoals: [
    'forstå oppbygning av elektriske installasjoner i bygg',
    'kjenne til kursopplegg og dimensjonering',
    'forklare jordingssystemer og beskyttelse',
  ],
  sections: [
    {
      title: 'Forsyningssystemet til bygninger',
      content: `## Forsyningssystemet til bygninger

**Fra kraftverk til stikkontakt:**

1. **Kraftproduksjon** (10-25 kV)
2. **Transformering opp** for overføring (132-420 kV)
3. **Overføringsnett** (høyspent)
4. **Transformering ned** i regionalnett (66-132 kV)
5. **Distribusjonsnett** (11-22 kV)
6. **Nettstasjon** (transformator) til lavspenning
7. **Lavspenningsnett** (230/400V) til bygg

**TN-system (Terre Neutre)**
Vanligste jordingssystem i Norge.

**TN-S (Separated)**
- Separat nøytral (N) og jordleder (PE) hele veien
- Sikreste system
- Brukes i nye installasjoner

**TN-C (Combined)**
- Kombinert PEN-leder (Protective Earth + Neutral)
- Brukes i eldre installasjoner
- Ikke tillatt innendørs i nye bygg

**TN-C-S**
- PEN fra nettstasjon, deles til N og PE ved inntak
- Vanligste i Norge

**Spenningssystemet:**
- 230V mellom fase og nøytral
- 400V mellom to faser
- 3-fase = 3 faser + nøytral + jord (5-leder)`,
    },
    {
      title: 'Kursopplegg og sikringsskap',
      content: `## Kursopplegg og sikringsskap

**Hovedkomponenter:**

**1. Inntakssikring**
Første sikring etter måler, dimensjonert for hele bygget.

**2. Sikringsskap/fordelingstavle**
- Hovedbryter
- Jordfeilbryter (RCCB)
- Automatsikringer/kurssikringer
- Overspenningsvern

**3. Kurser**
Separate kretser for ulike formål.

**Typiske kurser i bolig:**
- Lys stue (10A)
- Stikkontakter stue (16A)
- Lys soverom (10A)
- Stikkontakter kjøkken (16A)
- Komfyr (25-32A, 3-fase)
- Oppvaskmaskin (16A)
- Vaskemaskin (16A)
- Tørketrommel (16A)
- Bad (10A + RCD 30mA)
- Utendørs (16A + RCD 30mA)
- Varmtvannsbereder (16-32A)

**Dimensjonering av kurser:**

**Kabelvalg:**
- 10A kurs: 1.5 mm² kabel
- 16A kurs: 2.5 mm² kabel
- 25A kurs: 4 mm² kabel
- 32A kurs: 6 mm² kabel

**Lengdebegrensning:**
Kabellengde må ikke være for lang pga. spenningsfall og sikringsutkoblingstid.`,
    },
    {
      title: 'Jordfeilbrytere og vern',
      content: `## Jordfeilbrytere og vern

**Jordfeilbryter (RCD/RCCB)**
Oppdager strømlekkasje til jord og bryter kretsen.

**Virkemåte:**
- Måler strøm inn og ut av kretsen
- Hvis differanse > terskel → utkobling
- Normalt: strøm inn = strøm ut
- Jordfeil: noe strøm går til jord i stedet

**Typer jordfeilbrytere:**

**Type AC**
Oppdager vekselstrøms jordfeil. Enkleste type.

**Type A**
Oppdager vekselstrøm og pulserende likestrøm. Anbefalt for moderne elektronikk.

**Type B**
Oppdager alle typer jordfeil inkludert ren likestrøm. For invertere, solcelleanlegg.

**Utløsestrøm (IΔn):**
- 30mA: Personbeskyttelse
- 300mA: Brannbeskyttelse
- 10mA: Ekstra følsom (spesiell bruk)

**Plassering:**
- 30mA påkrevd for: bad, utendørs, stikkontakter opptil 20A
- 300mA kan brukes på hovedinntak

**Automatsikringer (MCB)**
Beskytter mot overbelastning og kortslutning.

**Karakteristikker:**
- B-karakteristikk: Utløser ved 3-5× In (bolig)
- C-karakteristikk: Utløser ved 5-10× In (motor)
- D-karakteristikk: Utløser ved 10-20× In (industri)`,
    },
    {
      title: 'Installasjonsforskrifter (NEK 400)',
      content: `## Installasjonsforskrifter (NEK 400)

**NEK 400**
Norsk Elektroteknisk Komité norm 400 - hovedstandarden for lavspenningsinstallasjoner i Norge.

**Viktige krav:**

**Beskyttelse mot elektrisk sjokk:**
- Jordfeilbryter 30mA for personbeskyttelse
- Korrekt jording av alle metalldeler
- Dobbel isolasjon der mulig

**Beskyttelse mot brann:**
- Korrekt dimensjonerte sikringer
- Beskyttelse av kabler
- Jordfeilbryter 300mA på hovedkurser

**Dokumentasjon:**
- Installasjonsplan
- Kursoversikt
- Sluttkontroll før idriftsettelse
- Samsvarserklæring

**Spesielle rom:**

**Bad (NEK 400-701):**
- Soner 0, 1, 2, 3 med ulike krav
- Alle kurser skal ha 30mA RCD
- IP-krav til utstyr
- Ekstra jordforbindelse til metallrør

**Utendørs:**
- 30mA RCD påkrevd
- Minimum IP44 for utstyr

**Elektriker-autorisasjon:**
Bare registrerte elektrikere kan utføre arbeid på faste installasjoner i Norge.`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-25-ex-1',
      type: 'classic',
      task: 'Forklar forskjellen mellom TN-S og TN-C jordingssystem.',
      solution: 'TN-S har separate ledere for nøytral (N) og beskyttelsesjord (PE) hele veien fra nettstasjon. Sikrere fordi strøm på nøytral ikke påvirker jord. TN-C har kombinert PEN-leder som fungerer som både nøytral og jord. Eldre system, kan gi uønsket spenning på jord ved ubalansert last. TN-S er påkrevd innendørs i nye installasjoner.',
    },
    {
      id: 'elektro-data-vg1-25-ex-2',
      type: 'classic',
      task: 'Hvorfor trenger bad 30mA jordfeilbryter på alle kurser?',
      solution: 'Bad er spesielt farlig pga. kombinasjon av vann og elektrisitet. Våt hud har mye lavere motstand, så samme spenning gir høyere strøm gjennom kroppen. 30mA jordfeilbryter kobler ut raskt nok (under 40ms) til å hindre hjertestans. Alle kurser må ha RCD fordi selv lysarmatur kan forårsake jordfeil.',
    },
    {
      id: 'elektro-data-vg1-25-ex-3',
      type: 'classic',
      task: 'Hvilken kabeldimensjon trengs for en 16A stikkontaktkurs?',
      solution: 'For 16A kurs brukes normalt 2.5 mm² kabel. Dette gir tilstrekkelig strømføringsevne og akseptabelt spenningsfall for normale lengder. For lengre kabelstrekk (over ca. 25m) bør man vurdere oppgradering til 4 mm² for å holde spenningsfallet under grensen.',
    },
    {
      id: 'elektro-data-vg1-25-ex-4',
      type: 'classic',
      task: 'Hva er forskjellen på en B- og C-karakteristikk automatsikring?',
      solution: 'B-karakteristikk utløser ved 3-5 ganger merkestrøm og brukes i boliger der belastningen er hovedsakelig resistiv (varme, lys). C-karakteristikk utløser ved 5-10 ganger merkestrøm og brukes for motorer som har høy startstrøm. C-sikring tåler høyere inrush-strøm uten å løse ut.',
    },
    {
      id: 'elektro-data-vg1-25-ex-5',
      type: 'classic',
      task: 'Beskriv hva som skjer når en jordfeilbryter detekterer jordfeil.',
      solution: 'Jordfeilbryteren har en sumstrømtransformator som omslutter alle faseledere og nøytral. Normalt er strøm inn lik strøm ut (sum=0). Ved jordfeil går noe strøm via jord tilbake i stedet for nøytral - summen blir ulik 0. Når differansen overstiger terskelen (f.eks. 30mA), aktiveres en mekanisme som kobler ut bryteren på millisekunder.',
    },
    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-25-ex-6',
      type: 'classic',
      task: 'Planlegg kursopp for et nytt bad med følgende utstyr: 2 taklamper, vifte, stikkontakt, gulvvarme (1000W), og varmtvannsbereder i nærheten. Spesifiser kurser, sikringer og RCD-krav.',
      solution: 'Kursopp for bad:\n\n1. Lys + vifte: 10A B-sikring, 1.5mm² kabel, 30mA RCD\n2. Stikkontakt: 16A B-sikring, 2.5mm² kabel, 30mA RCD (dedikert kurs)\n3. Gulvvarme: 10A B-sikring for 1000W (4.3A), 1.5mm² kabel, 30mA RCD\n4. Varmtvannsbereder: Egen kurs 16-20A C-sikring, 2.5mm² kabel, kan ha 30mA RCD\n\nAlle kurser via felles 30mA RCD eller individuelle RCBO. IP44 eller bedre for alt utstyr i sone 1-2. Ekstra jordleder til vannrør.',
    },
    {
      id: 'elektro-data-vg1-25-ex-7',
      type: 'classic',
      task: 'En bolig har 63A hovedsikring og 230V forsyning. Beregn maksimal total effekt og forklar hvorfor man vanligvis ikke kan bruke full kapasitet kontinuerlig.',
      solution: 'Maksimal effekt: P = U × I = 230V × 63A = 14490W ≈ 14.5 kW\n\nMan kan ikke bruke full kapasitet kontinuerlig fordi:\n1. Sikringer er dimensjonert for kortvarig overbelastning, kontinuerlig last bør være 80% = 11.6 kW\n2. Samtidighetsfaktor: Ikke alt brukes samtidig, men noe overlapp må påregnes\n3. Spenningsfall: Høy last gir spenningsfall som kan påvirke utstyr\n4. Ledningsoppvarming: Kontinuerlig høy strøm varmer kabler\n5. Reserve: Bør ha margin for fremtidige behov (elbil-lading, varmepumpe)\n\nPraktisk kontinuerlig kapasitet: ca. 10-12 kW.',
    },
  ],
  keyTerms: [
    { term: 'TN-system', definition: 'Jordingssystem der nøytralpunkt er direkte jordet i nettstasjon.' },
    { term: 'Jordfeilbryter (RCD)', definition: 'Vern som detekterer strømlekkasje til jord og bryter kretsen.' },
    { term: 'NEK 400', definition: 'Norsk standard for elektriske lavspenningsinstallasjoner.' },
    { term: 'Automatsikring', definition: 'Sikring som automatisk kobler ut ved overbelastning eller kortslutning.' },
    { term: 'Kursopplegg', definition: 'Organisering av elektriske kretser i en installasjon.' },
    { term: 'IP-klasse', definition: 'Beskyttelsesgrad mot inntrengning av faste gjenstander og vann.' },
  ],
};

// ============================================================================
// Kapittel 26: Solcelleanlegg og fornybar energi
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_26: TextbookChapter = {
  id: 'elektro-data-vg1-26',
  courseId: 'elektro-data-vg1',
  chapterNumber: '26',
  title: 'Solcelleanlegg og fornybar energi',
  description: 'Solcelleteknologi, systemdesign, invertere og nettilkobling.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forstå solcelleteknologi og virkningsgrad',
    'dimensjonere enkle solcelleanlegg',
    'kjenne til nettilkobling og batterilagring',
  ],
  sections: [
    {
      title: 'Solcelleteknologi',
      content: `## Solcelleteknologi

**Fotovoltaisk effekt**
Solceller konverterer sollys direkte til elektrisitet gjennom den fotovoltaiske effekten:
1. Fotoner fra sollys treffer solcellen
2. Fotoner overfører energi til elektroner i halvledermaterialet
3. Elektroner løsrives og skaper strøm
4. Elektrisk felt i PN-overgangen driver elektronene

**Solcelletyper:**

**Monokrystallinsk silisium**
- Høyest virkningsgrad (18-22%)
- Sort/mørk blå farge
- Dyrere å produsere
- Lengst levetid

**Polykrystallinsk silisium**
- Middels virkningsgrad (15-18%)
- Blå farge med synlige krystaller
- Billigere produksjon
- God levetid

**Tynnfilm (CdTe, CIGS, amorft Si)**
- Lavere virkningsgrad (10-13%)
- Fleksibel, lett
- Billigst
- Bedre i diffust lys

**Standard solcellepanel:**
- Typisk 60 eller 72 celler i serie
- Effekt: 300-400 Wp (Watt-peak)
- Spenning: ca. 30-40 V (åpen krets)
- Strøm: ca. 8-10 A (kortslutning)

**STC (Standard Test Conditions):**
- 1000 W/m² solinnstråling
- 25°C celletemperatur
- AM1.5 spektrum`,
    },
    {
      title: 'Solcelleanlegg komponenter',
      content: `## Solcelleanlegg komponenter

**1. Solcellepaneler**
Produserer likestrøm (DC) fra sollys.
- Kobles i serie for høyere spenning
- Kobles i parallell for høyere strøm
- Typisk systemspenning: 300-600V DC

**2. Inverter (vekselretter)**
Konverterer DC fra paneler til AC for bruk/nett.

**Strenginverter**
- Én inverter for hele anlegget
- Enklere og billigere
- Skyggelegging påvirker hele strengen

**Mikroinvertere**
- Én inverter per panel
- Uavhengig drift av hvert panel
- Dyrere, men bedre ved skygge

**Hybrid-inverter**
- Håndterer både solceller og batteri
- Kan fungere "off-grid" ved strømbrudd

**3. Monteringssystem**
- Takmontering (skråtak, flatt tak)
- Bakkemontering
- Fasademontert (BIPV)

**4. Kabler og koblinger**
- Solcellekabler (UV-bestandig)
- MC4-koblinger (standard)
- DC-hovedbryter

**5. Produksjonsmåler**
Måler produsert energi for statistikk og eventuell støtte.

**6. Batteri (valgfritt)**
- Lagrer overskuddsproduksjon
- Øker egenforbruk
- Kan gi strøm ved nettutfall (med hybrid-inverter)`,
    },
    {
      title: 'Dimensjonering av solcelleanlegg',
      content: `## Dimensjonering av solcelleanlegg

**Steg 1: Beregn energibehov**
- Årlig strømforbruk: f.eks. 15 000 kWh
- Ønsket dekningsgrad: f.eks. 50%
- Behov fra sol: 7 500 kWh

**Steg 2: Vurder tilgjengelig areal**
- Takareal, retning og helning
- Skyggeforhold
- 1 kWp krever ca. 5-7 m²

**Steg 3: Beregn forventet produksjon**
I Norge: ca. 800-1000 kWh per kWp per år
- Sør-Norge: ~900-1000 kWh/kWp
- Nord-Norge: ~700-850 kWh/kWp

**Eksempel:**
7 500 kWh / 900 kWh/kWp = 8.3 kWp anlegg

**Steg 4: Velg paneler og inverter**
- 8.3 kWp / 0.4 kWp per panel = ca. 21 paneler
- Inverter: 8 kW (litt under paneleffekt er OK)

**Steg 5: Vurder økonomi**
- Investeringskostnad
- Årlig produksjon × strømpris
- Nedbetalingstid
- Støtteordninger (Enova)

**Typiske tall (2024):**
- Pris: 15 000-20 000 kr per kWp installert
- Tilbakebetalingstid: 8-12 år
- Levetid: 25-30 år`,
    },
    {
      title: 'Nettilkobling og plusskunde',
      content: `## Nettilkobling og plusskunde

**Nettilkoblet anlegg**
Mest vanlig for boliger. Produksjon brukes direkte eller mates til nettet.

**Plusskunde**
Definisjon: Strømkunde som også leverer strøm til nettet fra egen produksjon.

**Hvordan det fungerer:**
1. Solcelleproduksjon dekker eget forbruk først
2. Overskudd mates til nettet
3. Ved underskudd (natt, overskyet) kjøpes fra nett
4. Måler registrerer begge veier

**Avregning:**
- Spotpris for levert strøm
- Ingen nettleie for egenproduksjon brukt selv
- Strømstøtte kan påvirke lønnsomhet

**Krav for nettilkobling:**
- Melde til nettselskap
- Samsvarserklæring fra installatør
- Godkjent utstyr (CE-merket)
- Relévern for frakobling ved nettfeil

**Off-grid (øy-drift)**
Ikke tilkoblet strømnett:
- Krever batteribank
- Backup-generator vanlig
- Hybrid-inverter
- Brukes i hytter uten strømtilgang

**Batterilagring:**
- Øker egenforbruk (bruker sol-strøm på kvelden)
- Kan gi backup ved nettutfall
- Typisk: 5-15 kWh for bolig
- LiFePO4 eller Li-ion teknologi`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-26-ex-1',
      type: 'classic',
      task: 'Et solcellepanel er oppgitt til 400 Wp. Hva betyr Wp og under hvilke forhold oppnås denne effekten?',
      solution: 'Wp betyr Watt-peak, toppeffekten panelet leverer under standardtestforhold (STC). STC er: 1000 W/m² solinnstråling, 25°C celletemperatur, og AM1.5 spektrum. I virkeligheten varierer effekten med solinnstråling, temperatur (høyere temp = lavere effekt) og vinkel.',
    },
    {
      id: 'elektro-data-vg1-26-ex-2',
      type: 'classic',
      task: 'Beregn årlig energiproduksjon fra et 6 kWp solcelleanlegg i Sør-Norge.',
      solution: 'I Sør-Norge produserer solceller ca. 900-1000 kWh per kWp per år. Med 6 kWp: 6 × 900 = 5400 kWh til 6 × 1000 = 6000 kWh. Forventet årsproduksjon: 5400-6000 kWh, avhengig av orientering, helning og skyggeforhold.',
    },
    {
      id: 'elektro-data-vg1-26-ex-3',
      type: 'classic',
      task: 'Hva er forskjellen mellom en strenginverter og mikroinvertere? Når bør man velge hver type?',
      solution: 'Strenginverter: Én inverter for alle paneler - enklere, billigere, men hele strengen påvirkes av skygge på ett panel. Mikroinverter: Hver panel har egen inverter - dyrere, men hvert panel optimeres individuelt. Velg mikroinverter ved: delvis skygge, paneler i ulike retninger, eller ønske om panelvis overvåking. Strenginverter passer: skygge-frie tak, alle paneler samme retning/vinkel, budsjett.',
    },
    {
      id: 'elektro-data-vg1-26-ex-4',
      type: 'classic',
      task: 'Forklar hva det innebærer å være "plusskunde".',
      solution: 'En plusskunde er en strømkunde som har egen strømproduksjon (f.eks. solceller) og leverer overskuddsstrøm til nettet. Plusskunden bruker egen produksjon først, og bare overskuddet mates ut. Ved underskudd kjøpes strøm fra nettet som vanlig. Avregning skjer til spotpris for levert strøm. Det krever tilpasset måler og avtale med nettselskap.',
    },
    {
      id: 'elektro-data-vg1-26-ex-5',
      type: 'classic',
      task: 'Hvorfor gir solceller lavere effekt ved høy temperatur?',
      solution: 'Solceller har negativ temperaturkoeffisient - effekten synker ca. 0.3-0.5% per grad over 25°C. Ved høy temperatur øker elektronbevegelsen tilfeldig (termisk energi), som reduserer den elektriske feltets evne til å drive elektronene i én retning. Spenningen synker mest, strømmen påvirkes mindre. En 400W celle ved 45°C produserer kanskje bare 360W.',
    },
    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-26-ex-6',
      type: 'classic',
      task: 'Dimensjoner et solcelleanlegg for en bolig med 20 000 kWh årlig forbruk. Målet er 60% dekning. Taket er 40m² sørvendt med 30° helning. Inkluder panelvalg, inverter og forventet produksjon.',
      solution: 'Behovsanalyse:\n- Årlig forbruk: 20 000 kWh\n- 60% dekning: 12 000 kWh fra sol\n- Lokasjon antatt Sør-Norge: 950 kWh/kWp\n- Nødvendig effekt: 12 000 / 950 = 12.6 kWp\n\nAreal:\n- 12.6 kWp × 5.5 m²/kWp = 69 m² (MER enn tilgjengelig 40m²)\n- Max på tak: 40m² / 5.5 = 7.3 kWp\n- Justert mål: 7.3 × 950 = 6935 kWh (35% dekning)\n\nAnlegg:\n- 18 stk 400Wp paneler = 7.2 kWp\n- 7kW strenginverter (litt under paneleffekt OK)\n- Produksjon: ca. 6840 kWh/år\n- Dekning: 6840/20000 = 34%\n\nKonklusjon: Taket gir maks 35% dekning, ikke 60%. Vurder batterilager for økt egenforbruk.',
    },
    {
      id: 'elektro-data-vg1-26-ex-7',
      type: 'classic',
      task: 'Beregn lønnsomheten av et 10 kWp solcelleanlegg. Investeringskostnad: 170 000 kr, årsproduksjon: 9000 kWh, strømpris: 1.50 kr/kWh, 70% egenforbruk. Hva er nedbetalingstiden?',
      solution: 'Produksjonsverdi:\n- Egenforbruk: 9000 × 70% = 6300 kWh × 1.50 kr = 9450 kr\n- Salg til nett: 9000 × 30% = 2700 kWh × 1.00 kr (spot) = 2700 kr\n- Total årlig besparelse: 9450 + 2700 = 12 150 kr\n\nNedbetalingstid:\n- 170 000 kr / 12 150 kr/år = 14 år\n\nMed Enova-støtte (f.eks. 30 000 kr):\n- 140 000 kr / 12 150 = 11.5 år\n\nLønnsomhet over 25 år:\n- Produksjonsverdi: 25 × 12 150 = 303 750 kr\n- Netto gevinst: 303 750 - 140 000 = 163 750 kr\n\nMerk: Beregningen ignorerer vedlikehold, degradering og renteeffekt.',
    },
  ],
  keyTerms: [
    { term: 'Fotovoltaisk effekt', definition: 'Prosess der sollys konverteres direkte til elektrisitet i solceller.' },
    { term: 'Watt-peak (Wp)', definition: 'Toppeffekt til solcellepanel under standardtestforhold (STC).' },
    { term: 'Inverter', definition: 'Enhet som konverterer likestrøm fra solceller til vekselstrøm.' },
    { term: 'Plusskunde', definition: 'Strømkunde som leverer overskuddsstrøm fra egen produksjon til nettet.' },
    { term: 'Egenforbruk', definition: 'Andel av egenprodusert strøm som brukes i egen bolig.' },
    { term: 'STC', definition: 'Standard Test Conditions - testbetingelser for solceller (1000W/m², 25°C).' },
  ],
};

// ============================================================================
// Kapittel 27: Varmepumper og energieffektivisering
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_27: TextbookChapter = {
  id: 'elektro-data-vg1-27',
  courseId: 'elektro-data-vg1',
  chapterNumber: '27',
  title: 'Varmepumper og energieffektivisering',
  description: 'Varmepumpeteknologi, COP, og energieffektivisering i bygninger.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå varmepumpens virkemåte',
    'beregne COP og energibesparelse',
    'kjenne til energieffektivisering',
  ],
  sections: [
    {
      title: 'Varmepumpens virkemåte',
      content: `## Varmepumpens virkemåte

**Prinsipp:**
Varmepumpen "pumper" varme fra et kaldt sted til et varmt sted ved hjelp av et arbeidsmedium (kjølemedium) som sirkulerer i en lukket krets.

**Hovedkomponenter:**

**1. Fordamper**
Arbeidsmediet fordamper ved å ta opp varme fra uteluft, jord eller vann.
- Mediet har lavt kokepunkt (f.eks. -40°C)
- Går fra væske til gass

**2. Kompressor**
Komprimerer gassen slik at trykk og temperatur øker.
- Elektrisk drevet
- Hovedenergiforbruket skjer her
- Gassen blir veldig varm

**3. Kondensator**
Varmen fra den varme gassen overføres til husets varmesystem.
- Gassen kondenserer til væske
- Frigjør varme

**4. Ekspansjonsventil**
Senker trykket slik at mediet kan fordampe igjen.
- Væsken ekspanderer
- Temperaturen synker drastisk
- Klar for ny syklus

**Karmot-syklusen:**
Fordamper → Kompressor → Kondensator → Ekspansjonsventil → (gjenta)`,
    },
    {
      title: 'Typer varmepumper',
      content: `## Typer varmepumper

**Luft-luft varmepumpe**
- Henter varme fra uteluft
- Leverer varme til inneluft
- Enklest og billigst
- Mindre effektiv ved lave temperaturer
- Passer til hytter og tilleggsvarme
- COP: 2.5-4.5

**Luft-vann varmepumpe**
- Henter varme fra uteluft
- Leverer varme til vannbårent anlegg (radiatorer/gulvvarme)
- Kan levere tappevann
- Dyrere enn luft-luft
- COP: 2.5-4.0

**Væske-vann (bergvarme/jordvarme)**
- Henter varme fra jord eller fjell (energibrønn)
- Stabil temperatur hele året
- Høyere COP, spesielt om vinteren
- Krever boring (dyrt)
- COP: 3.5-5.0

**Sjøvarmepumpe**
- Henter varme fra sjøvann eller innsjø
- Stabilt varmekilde
- Krever tilgang til vann
- COP: 3.5-4.5

**Valg av varmepumpe:**
- Klimasone (luft dårligere i kaldt klima)
- Boligtype og varmebehov
- Eksisterende varmedistribusjon
- Budsjett
- Tilgjengelig areal (brønn/kollektor)`,
    },
    {
      title: 'COP og virkningsgrad',
      content: `## COP og virkningsgrad

**COP (Coefficient of Performance)**
Forholdet mellom levert varme og tilført elektrisk energi.

**COP = Levert varme (kW) / Tilført energi (kW)**

**Eksempel:**
Varmepumpe bruker 1 kW strøm og leverer 3.5 kW varme.
COP = 3.5 / 1 = 3.5

**Hva betyr COP = 3.5?**
For hver kWh strøm får du 3.5 kWh varme.
2.5 kWh er "gratis" fra omgivelsene!

**SCOP (Seasonal COP)**
Gjennomsnittlig COP gjennom hele fyringsesongen.
- Tar hensyn til varierende utetemperatur
- Mer representativt for årlig ytelse
- EU-standard for sammenligning

**Faktorer som påvirker COP:**
- Utetemperatur (lavere temp → lavere COP)
- Turtemperatur (lavere avgitt temp → høyere COP)
- Dimensjonering
- Vedlikehold

**Typiske SCOP-verdier i Norge:**
- Luft-luft: 2.5-3.5
- Luft-vann: 2.5-3.5
- Bergvarme: 3.5-4.5

**Besparelse beregning:**
Oppvarming med panelovn: 20 000 kWh
Med varmepumpe (SCOP 3.5): 20 000 / 3.5 = 5 714 kWh
Besparelse: 14 286 kWh (71%)`,
    },
    {
      title: 'Energieffektivisering',
      content: `## Energieffektivisering

**Prioriteringsrekkefølge:**
1. Reduser behov (isolasjon, tetting)
2. Effektiv utnyttelse (varmepumpe, varmegjenvinning)
3. Fornybar produksjon (solceller)

**Bygningskroppen:**

**Isolasjon:**
- Tak: 30-40 cm (R=7-10)
- Vegger: 20-30 cm (R=5-8)
- Gulv: 20-30 cm
- Vinduer: 3-lags, U<0.8

**Tetting:**
- Tett vindtetting utvendig
- Dampsperre innvendig
- Tettelister rundt vinduer/dører
- Reduserer varmetap og trekk

**Tekniske systemer:**

**Balansert ventilasjon**
- Friskluft inn, brukt luft ut
- Varmegjenvinner henter varme fra avtrekksluft
- Gjenvinningsgrad 80-90%
- Reduserer ventilasonstap dramatisk

**Smart styring:**
- Termostatstyr på hvert rom
- Tidsprogrammering
- Senke temperatur når borte
- Integrert med smarthus

**Belysning:**
- LED: 80% mindre enn glødelamper
- Bevegelsessensorer
- Dagslysstyring

**Hvitevarer:**
- Velg A-merket utstyr
- Slå av standby
- Full maskin før vask

**Energimerking av bygg:**
- A-G skala
- Viser beregnet energibehov
- Påkrevd ved salg/utleie`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-27-ex-1',
      type: 'classic',
      task: 'En varmepumpe bruker 2 kW strøm og leverer 8 kW varme. Hva er COP?',
      solution: 'COP = Levert varme / Tilført strøm = 8 kW / 2 kW = 4.0. Varmepumpen har COP på 4, som betyr at for hver kWh strøm levers 4 kWh varme.',
    },
    {
      id: 'elektro-data-vg1-27-ex-2',
      type: 'classic',
      task: 'Forklar hvorfor bergvarme har høyere COP enn luft-luft varmepumpe om vinteren.',
      solution: 'Bergvarme henter varme fra fjellet/jorden der temperaturen er stabil (ca. 6-8°C) hele året. Luft-luft henter fra uteluft som kan være -15°C om vinteren. Større temperaturforskjell mellom kilde og avlevering krever mer arbeid fra kompressoren, som senker COP. Ved -15°C ute kan luft-luft ha COP rundt 2, mens bergvarme fortsatt har COP 4.',
    },
    {
      id: 'elektro-data-vg1-27-ex-3',
      type: 'classic',
      task: 'Et hus bruker 25 000 kWh til oppvarming med panelovner. Beregn strømforbruk og besparelse med varmepumpe (SCOP 3.2).',
      solution: 'Med varmepumpe: 25 000 kWh / 3.2 = 7 813 kWh strømforbruk.\nBesparelse: 25 000 - 7 813 = 17 187 kWh (69%).\nMed strømpris 1.50 kr/kWh: 17 187 × 1.50 = 25 780 kr spart per år.',
    },
    {
      id: 'elektro-data-vg1-27-ex-4',
      type: 'classic',
      task: 'Hva er en varmegjenvinner og hvordan bidrar den til energieffektivisering?',
      solution: 'En varmegjenvinner overfører varme fra avtrekksluften (brukt luft ut) til tilluft (frisk luft inn) i balansert ventilasjon. I stedet for å kaste varmen som er i avtrekksluften, gjenvinnes 80-90% til å forvarme den kalde friskluften. Dette reduserer oppvarmingsbehovet betydelig, kanskje 50% av ventilasjonstapet.',
    },
    {
      id: 'elektro-data-vg1-27-ex-5',
      type: 'classic',
      task: 'Beskriv de fire hovedkomponentene i en varmepumpe og hva som skjer i hver.',
      solution: 'Fordamper: Arbeidsmediet tar opp varme fra kilden (luft/jord/vann) og fordamper fra væske til gass.\nKompressor: Gassen komprimeres, trykk og temperatur øker kraftig, krever elektrisk energi.\nKondensator: Den varme gassen avgir varme til varmesystemet og kondenserer til væske.\nEkspansjonsventil: Trykket senkes slik at væsken kan fordampe ved lav temperatur, klar for ny syklus.',
    },
    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-27-ex-6',
      type: 'classic',
      task: 'Planlegg energieffektivisering for et eldre hus (bygget 1970) med følgende forbruk: 35 000 kWh total, hvorav 28 000 til oppvarming. Foreslå tiltak i prioritert rekkefølge med estimert besparelse.',
      solution: 'Prioritert tiltaksliste:\n\n1. Etterisolering loft (enklest/billigst)\n   - Besparelse: ca. 15% av oppvarming = 4200 kWh\n\n2. Tette luftlekkasjer (vinduer, dører)\n   - Besparelse: ca. 10% = 2800 kWh\n\n3. Installere luft-vann varmepumpe (SCOP 3.0)\n   - Resterende oppvarming: 21000 kWh / 3.0 = 7000 kWh\n   - Besparelse: 21000 - 7000 = 14000 kWh\n\n4. Bytte til LED-belysning\n   - Besparelse: ca. 1500 kWh\n\n5. Balansert ventilasjon med varmegjenvinner\n   - Ytterligere 2000-3000 kWh (erstatter punktventilasjon)\n\nTotal estimert besparelse: ca. 22000-25000 kWh\nNytt forbruk: ca. 10000-13000 kWh',
    },
    {
      id: 'elektro-data-vg1-27-ex-7',
      type: 'classic',
      task: 'Sammenlign luft-luft, luft-vann og bergvarme varmepumpe for en enebolig på 150m² i Trondheim. Vurder investeringskostnad, SCOP, egnethet og anbefaling.',
      solution: 'Sammenligning for 150m² enebolig i Trondheim:\n\nLuft-luft:\n- Investering: 25-40 000 kr\n- SCOP: 2.5-3.0 (Trondheim-klima)\n- Egnet: Tilleggsvarme, enkeltrom\n- Ulempe: Dekker ikke hele huset, lav effekt ved kulde\n\nLuft-vann:\n- Investering: 100-150 000 kr\n- SCOP: 2.5-3.2\n- Egnet: Hele huset + tappevann\n- Ulempe: Lavere effekt ved sterk kulde\n\nBergvarme:\n- Investering: 200-300 000 kr (inkl. brønn)\n- SCOP: 3.8-4.5\n- Egnet: Hele huset + tappevann, stabil ytelse\n- Ulempe: Høy investeringskostnad\n\nAnbefaling: For hovedoppvarming i Trondheim-klima er bergvarme best langsiktig (høy SCOP hele året), men luft-vann er et godt budsjett-alternativ hvis eksisterende vannbårent anlegg. Luft-luft kun som supplement.',
    },
  ],
  keyTerms: [
    { term: 'COP', definition: 'Coefficient of Performance - forholdet mellom levert varme og tilført energi.' },
    { term: 'SCOP', definition: 'Seasonal COP - gjennomsnittlig COP over fyringsesongen.' },
    { term: 'Kompressor', definition: 'Komponent som komprimerer arbeidsmediet og øker temperatur og trykk.' },
    { term: 'Fordamper', definition: 'Komponent der arbeidsmediet tar opp varme og fordamper.' },
    { term: 'Varmegjenvinner', definition: 'Enhet som overfører varme fra avtrekksluft til tilluft.' },
    { term: 'Bergvarme', definition: 'Varmepumpe som henter varme fra fjell/jord via energibrønn.' },
  ],
};

// ============================================================================
// Eksporter alle kapitler fra del 3
// ============================================================================

export const CHAPTERS_ELEKTRO_DATA_VG1_PART3 = [
  CHAPTER_ELEKTRO_DATA_VG1_23,
  CHAPTER_ELEKTRO_DATA_VG1_24,
  CHAPTER_ELEKTRO_DATA_VG1_25,
  CHAPTER_ELEKTRO_DATA_VG1_26,
  CHAPTER_ELEKTRO_DATA_VG1_27,
];
