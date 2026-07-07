# Eksamensanalyse: IN1020 Introduksjon til datateknologi (UiO)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på UiOs offisielle
> eksamensarkiv for IN1020 fra høsten 2017 til høsten 2023 (oppgavesett på
> bokmål og engelsk, fasiter, faglærernes «Kommentarer til eksamen» H2019, og
> tredelt sensorveiledning H2023), samt UiOs emnebeskrivelse. **Alt innhold er
> omskrevet med egne ord** — ingen oppgavetekster, fasiter eller
> sensorkommentarer er gjengitt ordrett. Tall, verdier, kjøretider og
> fagbegreper er allmenn faglig notasjon og ikke opphavsrettslig beskyttet.
> Analysen er kvantitativ der kildene tillater det.
>
> **Emnet er aktivt** (verifisert mot UiOs emneside juli 2026): IN1020
> undervises fortsatt med ordinær høsteksamen. Faget er et bredt introduksjonsfag
> i datamaskinens oppbygning — fra bit og logiske porter opp til operativsystem,
> nettverk og datasikkerhet. Det er **ikke** et programmeringsfag i tradisjonell
> forstand; «programmeringen» som testes er maskinnær assembler (Little Man
> Computer).

---

## 1. Eksamensform og utvikling

### Grunnform (gjeldende)

**Skriftlig digital skoleeksamen i Inspera, 4 timer, karakterskala bestått/ikke
bestått.** Emnet har obligatoriske øvingsoppgaver som må godkjennes samme
semester for å få gå opp. Hele karakteren avgjøres på slutteksamen; ingen
midtsemesterprøve teller.

Fra og med de nyeste representative settene (H2022, H2023) er eksamen bygd opp
av **fire faste seksjoner à 25 poeng = 100 poeng totalt**:

1. **Digital representasjon og assemblerkode** (tallsystemer, 2-er komplement,
   filformater/ASCII, LMC-assembly og maskinkode)
2. **Maskinvare og arkitektur** (logiske porter, kretsanalyse, cache-beregning,
   ALU/register/pipeline, abstraksjonsnivå)
3. **Datasikkerhet** (sikkerhetsmål/-tiltak, kryptering, digital signatur,
   personvern/GDPR, trusselmodellering)
4. **Datanettverk** (protokoller og TCP/IP-lag, subnetting/IP, overføringstid,
   NAT/CDN/DNS/IPv6; operativsystemer dukker også opp her)

⚠️ **Bestått-krav per seksjon:** I nyere sett (eksplisitt i H2022) må **hver av
de fire seksjonene bestås for seg** for at hele eksamen skal bestås — det holder
ikke å hente alle poengene i to seksjoner. Til orientering lå den historiske
strykgrensen (H2019, den gang tallkarakter/poenggrense) på **44 av 100**, og
**7,1 %** strøk det året.

### Oppgaveform: utelukkende flervalg med negativ poenggiving

Alle oppgavene er varianter av **flervalg** i Inspera:

- **«velg ett eller flere alternativer»** (flere svar kan være riktige; noen
  oppgaver har bare ett — men alle har minst ett riktig)
- **sant/usant-matriser** («godt og blandet»)
- **dra-og-slipp / «plasser på rett plass»** (f.eks. protokoll→transportlag,
  tema→pensum/ikke-pensum, element→abstraksjonsnivå)
- **nedtrekksmenyer** («velg alternativ» per delspørsmål)

**Poenggiving:** man får pluss for riktig avkrysning og minus for gal, men
**aldri under 0 poeng på en enkelt oppgave**. Minustrekket varierer per oppgave
(typisk −0,5 eller lik pluss­verdien). Enkelte oppgaver i maskinvaredelen gir i
tillegg **bonuspoeng** for å ha *alt* riktig (H2023). Noen sant/usant-oppgaver
gir 0 (nøytralt) for et bestemt alternativ.

**Konsekvens for læreboken:** Fordi formatet straffer gale avkrysninger, må et
godt løsningsforslag — slik sensorveiledningene selv gjør — begrunne **hvorfor
hvert gale alternativ er galt**, ikke bare bekrefte de riktige. Dette er den
viktigste formforskjellen fra et frisvarfag.

### Hjelpemidler — en uavklart forskjell som må sjekkes

⚠️ Samtlige arkiverte oppgavesett H2017–H2023 oppgir hjelpemidler som **«alle
trykte og skrevne hjelpemidler + en enkel kalkulator uten
kommunikasjonsmulighet»** (pluss en skjermkalkulator i Inspera). UiOs
**gjeldende emnebeskrivelse** oppgir derimot **«ingen hjelpemidler tillatt»**.
Det er altså et reelt avvik mellom de arkiverte settene og dagens
emnebeskrivelse — trolig en form­endring i nyere tid. **Sjekk gjeldende
semester før publisering.** For læreboken betyr det uansett at studenten bør
kunne stoffet uten oppslag: alle beregningsteknikkene (tallkonvertering,
cache-sykler, subnetting) må sitte i hodet, siden en kalkulator ikke hjelper på
teknikk-kunnskap.

### Utviklingslinjer 2017 → 2023

| Trekk | H2017 / H2018 | H2019 | H2020 | H2022 / H2023 |
|---|---|---|---|---|
| **Format** | Flervalg, seksjonsdelt (ulik rekkefølge) | Fire seksjoner (annen rekkefølge: sikkerhet→nett→digital→maskinvare) | **Korona-hjemmeeksamen, 2 t** | Fire faste seksjoner à 25 p, digital→maskinvare→sikkerhet→nett |
| **Representativt?** | Delvis (bredere pensum) | Ja | **Nei** (kortere hjemme-variant) | **Ja** (gjeldende form) |
| **Karakter** | Poeng | Poeng (strykgrense 44/100) | Bestått/ikke bestått | Bestått/ikke bestått, **hver seksjon må bestås** |

**Fire konkrete pensuminnstramminger å merke seg:**

1. **Karnaugh-diagram (K-map) er tatt UT av pensum.** H2017 (oppg. 2f) og H2018
   (oppg. 1b) hadde egne K-map-oppgaver med opptil 10 poeng. I H2022 er
   «Karnaugh diagram» eksplisitt plassert i ruten **«Ikke del av pensum»** i
   dra-og-slipp-oppgaven, sammen med **multiplekser** og **dekoder**. Læreboken
   bør nevne K-map kort for kontekst, men *ikke* drille det som eksamensstoff.
2. **Assembler ble konkretisert til LMC (Little Man Computer).** Eldre sett
   omtalte generiske «funksjoner f1–f4»; nyere sett bruker gjennomgående
   LMC-instruksjonssettet med navngitte instruksjoner (INP, OUT, OTC, LDA, STA,
   ADD, SUB, BRA, BRZ, BRP, HLT, DAT) og maskinkode (3-sifrede opkoder).
3. **Bredt «datakommunikasjon»-pensum ble trimmet.** OSI-7-lagsmodellen,
   detaljert ARP-tabellteori, private IP-adresseklasser, flip-flop/låsekretser,
   Moores lov og DNS-rottjener­hierarki fikk egne oppgaver i H2017/H2018, men er
   nedtonet i H2022/H2023 til fordel for TCP/IP-modellens fire lag og et fast
   sett kjernetjenester.
4. **Seksjonene ble balansert til nøyaktig 25 poeng hver**, med krav om å bestå
   hver seksjon — en tydeligere «du må kunne hele bredden»-profil.

---

## 2. Temafrekvens

Basert på seks eksamensår med fasit/sensorveiledning: **H2017, H2018, H2019,
H2020 (hjemme), H2022, H2023**. Celleverdi = antall av de seks årene der temaet
har minst én egen oppgave. Fordi hvert sett dekker alle fire seksjoner, treffer
kjerneområdene nesten hvert år; **gjenganger-scoren måler sikkerhet/bredde, ikke
vekt innen ett sett.**

| Tema | Seksjon | Forekomst | **Score** |
|---|---|---|---|
| **Tallsystem-konvertering** (bin/okt/hex/des, sortering på ulik form) | 1 | 17·18·19·20·22·23 | **6/6 = 100 %** |
| **2-er komplement & byte-tolkning** (fortegnsbit, byte-addisjon, overflyt) | 1 | 17·18·19·20·22·23 | **6/6 = 100 %** |
| **LMC-assembly & maskinkode** (tracing, fyll-inn, selvmodifiserende kode) | 1 | 17·18·19·20·22·23 | **6/6 = 100 %** |
| **Logiske porter** (identifiser AND/OR/XOR/NAND/NOR/XNOR/NOT fra symbol) | 2 | 17·18·19·20·22·23 | **6/6 = 100 %** |
| **Arkitektur-fakta** (von Neumann, register, ALU, buss, transistor, pipeline; sant/usant) | 2 | 17·18·19·20·22·23 | **6/6 = 100 %** |
| **Sikkerhetsmål vs. sikkerhetstiltak** (skille + koble til riktig mål) | 3 | 17·18·19·20·22·23 | **6/6 = 100 %** |
| **Kryptering & digital signatur** (symmetrisk/asymmetrisk, nøkkelvalg, PKI) | 3 | 17·18·19·20·22·23 | **6/6 = 100 %** |
| **Trusselmodellering** (koble trussel → brutt mål; risiko = ssh × konsekvens) | 3 | 17·18·19·20·22·23 | **6/6 = 100 %** |
| **Subnetting / IP-adressering** (CIDR, verts­tall, subnett-/broadcast-adresse) | 4 | 17·18·19·20·22·23 | **6/6 = 100 %** |
| **Protokoller & TCP/IP-lag** (TCP vs. UDP, lag-ansvar, protokoll→transport) | 4 | 17·18·19·20·22·23 | **6/6 = 100 %** |
| **Nettjenester** (NAT, CDN, DNS, IPv6, DHCP, HTTP-streaming/DASH) | 4 | 17·18·19·20·22·23 | **6/6 = 100 %** |
| **Kretsanalyse** (skriv boolsk uttrykk for F; ekvivalente uttrykk) | 2 | 17·18·19·20·22 | **5/6 = 83 %** |
| **Overføringstid** (byte→bit-fellen, filstørrelse ÷ rate) | 4 | 17·19·20·22·23 | **5/6 = 83 %** |
| **Autentisering / tilgangskontroll / passord** (tofaktor, salting, hashing) | 3 | 17·18·19·20·22 | **5/6 = 83 %** |
| **Aksessmodeller & svitsjing** (klient-tjener, peer-to-peer, linje-/pakkesvitsjing) | 4 | 17·18·20·22 | **4/6 = 67 %** |
| **Personvern / GDPR** (behandlingsansvar, innsynsrett, dataminimering) | 3 | 17·19·22·23 | **4/6 = 67 %** |
| **Skadevare** (orm, virus, trojaner, rootkit, tastelogger, logisk bombe, bakdør) | 3 | 17·18·23 | **3/6 = 50 %** |
| **Cache-beregning** (klokkesykler = vektet snitt av treff/bom) | 2 | 19·20·22·23 | **4/6 = 67 %** ↑ *voksende* |
| **Filformater / fargekoder / ASCII / UTF-8** (RGB-hex, tapsfri vs. tapskomprimert) | 1 | 20·22·23 | **3/6 = 50 %** ↑ *voksende* |
| **Abstraksjonsnivå-ordning** (instruksjon→pipeline→register→transistor→volt) | 2 | 22·23 | **2/6 = 33 %** ↑ *ny* |
| **Operativsystemer** (ressursstyring, maskinvareabstraksjon, kjerne-/brukermodus) | 4 | 23 (+ omtale) | **1/6** ↑ *ny gjenganger* |
| **Karnaugh-diagram / K-map** (forenkling, min-/maksterm) | 2 | 17·18 | **2/6** ↓ *TATT UT av pensum* |
| **Moores lov / flip-flop / minnehierarki-teori** | 2 | 17·18 | **2/6** ↓ *nedtonet* |

**Viktigste funn:**

1. **Faget har ingen enkelt «kjerneoppgave» — det har fire kjerneseksjoner som
   alle kommer hvert år.** Elleve temaer scorer 100 %. Fordi hver seksjon må
   bestås for seg, kan studenten **ikke** droppe en hel seksjon (f.eks. hoppe
   over nettverk) og satse på de tre andre. Bredden *er* eksamensformen.

2. **De tre «regne»-ferdighetene er de sikreste poengene:** tallkonvertering,
   subnetting og cache-/overføringstid. Alle går igjen, alle har én entydig
   riktig verdi, og alle har en klassisk felle (se del 5). Dette er billige,
   garanterte poeng for den som drillet teknikken.

3. **Digital signatur og skillet mål/tiltak er de sikreste sikkerhets­poengene**
   — de kommer i en eller annen form hvert år og testes med de samme
   distraktorene år etter år.

4. **Cache-beregning og abstraksjonsnivå er voksende gjengangere.** Cache-oppgaven
   dukket opp fra H2019 og er nå fast; abstraksjonsnivå-rangering er ny i
   H2022/H2023. Forvent begge fremover.

5. **Karnaugh-diagram er den tydeligste «fellen fra gamle sett».** En student som
   øver på H2017/H2018 vil bruke tid på K-map — som er ute av pensum. Læreboken
   må markere dette klart.

---

## 3. Oppgavetype-katalog

De ni sjangrene som faktisk går igjen, med sensors foretrukne løsningsmetode.

### A. Tallsystem-konvertering
- **Krav:** Konverter mellom binær/oktal/heksadesimal/desimal. Sensor anbefaler
  eksplisitt (H2023) å gå **direkte binær↔oktal/hex** — grupper bitene i
  **3-er blokker for oktal** og **4-er blokker (nibbler) for hex** — i stedet for
  omveien via titallssystemet, som er tregere og feilutsatt. Ved
  sortering/sammenligning av tall gitt på ulik base: gjør **alle om til samme
  base** (typisk desimal) først (eksempel H2019: `2013₈ = 1035`, `40E₁₆ = 1038`,
  `1031₁₀ = 1031`, `10000001001₂ = 1033` → lett å sortere). Varianter: «hvilke av
  disse er lik 42₁₀?» og til og med **egendefinerte tallsystemer** (base 6 med
  symbolene 0,1,2,A,B,C — H2020).
- **Frekvens:** 100 %.

### B. 2-er komplement og byte-tolkning
- **Krav:** Samme 8-bits mønster har **to tolkninger**: uten fortegn og med
  fortegn (mest signifikant bit = fortegnsbit). Vis begge når oppgaven spør —
  f.eks. `10101100₂ = 172` (uten fortegn) **eller** `−84` (med fortegn):
  `−2⁷ + 44 = −128 + 44 = −84`. Ved byte-addisjon (`C = A + B`): regn binært, hold
  deg til 8 bit, og oppgi **begge** tolkninger av resultatet som mulige svar.
- **Frekvens:** 100 %.

### C. LMC-assembly og maskinkode
- **Krav:** Foretrukket metode: **før en tabell over akkumulatoren og hver
  navngitt minnecelle, steg for steg**, og følg programtelleren. Kjenn
  instruksjonssettet: INP (les inn), OUT (skriv ut tall), **OTC** (skriv ut som
  ASCII-tegn — krever ASCII-tabellen), LDA, STA, ADD, SUB, BRA (hopp), BRZ (hopp
  hvis 0), BRP (hopp hvis positiv), HLT, DAT (datacelle). Maskinkode: dekod
  3-sifrede tall til opkode + adresse (1xx=ADD, 2xx=SUB, 3xx=STA, 5xx=LDA,
  6xx=BRA, 7xx=BRZ, 8xx=BRP, 901=INP, 902=OUT, 922=OTC, 000=HLT). Faste vrier:
  - **Selvmodifiserende kode** — fordi instruksjoner *er* tall i minnet, kan
    programmet addere til en instruksjon og flytte et hopp (H2023: `DAT 600` er
    `BRA 00`; ved å addere brukerinput hopper koden til ulike utskriftsrutiner).
  - **Fyll-inn-instruksjon** — velg riktig av BRZ/BRA/BRP eller LDA/STA så
    programmet gjør det oppgaven beskriver (H2022 gange-program).
  - **Reverse tracing** — «hvilken input gir utskrift X?» (H2023: programmet
    regner absoluttverdi, så både −2 og 2 gir utskriften 2).
- **Frekvens:** 100 %. Ofte 3–4 deloppgaver i seksjon 1.

### D. Logiske porter og kretsanalyse
- **Krav:** (i) **Identifiser porttype** fra symbol (AND/OR/XOR/NAND/NOR/XNOR/NOT).
  (ii) **Kretsanalyse:** propagér uttrykket **gate for gate fra inngangene** og
  skriv det boolske uttrykket for F. Fordi flere **algebraisk ekvivalente**
  uttrykk ofte er blant alternativene (`A+C` = `C+A`; `(A+A)′` = `A′`), forenkl
  med boolsk algebra og **kryss av alle** ekvivalente former. (iii)
  **Identiteter (sant/usant):** XNOR = invertert XOR; enhver funksjon kan lages
  med kun INV + OR (eller kun NAND / kun NOR); en portutgang kan være inngang på
  flere porter; en port har bare én utgang.
- **Frekvens:** porter 100 %, kretsanalyse 83 %.

### E. Cache-beregning
- **Krav:** **Vektet snitt av treff og bom.** Del instruksjonene i cache-treff
  (1 sykel) og cache-bom (angitt bom-kostnad), vekt med bom-raten og summér.
  Eksempel H2022: 3000 instruksjoner, 50 % bom, en bom-instruksjon tar 4 sykler
  → `1500·1 + 1500·4 = 7500` sykler. (H2019/H2020-varianter endrer bom-andel og
  bom-kostnad, f.eks. 50 % bom à 10 sykler.)
- **Frekvens:** 67 %, **voksende** (fast fra H2019).

### F. Arkitektur-fakta og abstraksjonsnivå (sant/usant + dra-og-slipp)
- **Krav:** Kjerneviten som testes: von Neumann (kode og data i samme minne);
  register = raskt CPU-internt minne (ikke RAM, ikke bygd av «mange RAM»); ALU er
  **inne i** CPU-en og gjør aritmetikk *og* logikk; databuss frakter data mellom
  prosessor og enheter; **fulladder kan brukes som subtraktor med mente-inn = 1**;
  teknologiutvikling gir *flere/mindre* transistorer (ikke færre — den påstanden
  er alltid usann); klokkesignalet er *ikke* lagret i RAM; en 64-bits ALU krever
  64 (ikke 65) 1-bits ALU-er. **Abstraksjonsnivå-ordning** (høyt→lavt):
  instruksjon (f.eks. `STA 04`) → pipeline → register → to invertere/transistor →
  logiske verdier → volt. **Pensum-avgrensning:** Karnaugh, multiplekser og
  dekoder er *ikke* pensum (H2022).
- **Frekvens:** 100 % (fakta), 33 % (abstraksjonsnivå, ny og voksende).

### G. Sikkerhetsmål, -tiltak og trusselmodellering
- **Krav:** Skillet skjerpes hvert år. **Mål** = Konfidensialitet, Integritet,
  Tilgjengelighet (+ Sporbarhet, Uavviselighet, Autentisitet, Personvern).
  **Tiltak** = brannmur, kryptering, sikkerhetskopiering, tofaktor, tilgangskontroll,
  antivirus, sikkerhetsøvelser. Å krysse et tiltak som «mål» gir minuspoeng.
  Deretter **koble tiltak → riktig mål** (diskkryptering/HTTPS/tofaktor →
  konfidensialitet; sjekksum/hash → integritet, *ikke* konfidensialitet;
  redundans/backup → tilgjengelighet) og **trussel → brutt mål**:
  - DDoS, løsepengevirus, manglende sikkerhetsoppdatering → **tilgjengelighet**
  - tastelogger, spionvare, USB-tyveri, uklar tilgang til besvarelser →
    **konfidensialitet**
  - DNS-modifisering, forfalsket nettside, rootkit, man-in-the-middle →
    **integritet** (evt. autentisitet)
  - identitetstyveri, forfalsket nettside → **autentisitet**
  - **Risiko = sannsynlighet × konsekvens.** Fysisk tilgang kan omgå «så og si
    alle» andre tiltak.
- **Frekvens:** 100 %.

### H. Kryptering og digital signatur
- **Krav:** Symmetrisk: **én delt hemmelig nøkkel**, rask, egner seg for store
  datamengder — men trygg nøkkelutveksling er utfordringen; kan sikre
  konfidensialitet, **ikke** uavviselighet. Asymmetrisk: **privat/offentlig
  nøkkelpar**, åpen kanal for distribusjon av offentlig nøkkel.
  - **Digital signatur (fast oppgave):** sender signerer med **sin private
    nøkkel**; mottaker validerer med **senderens offentlige nøkkel**. Gir
    **uavviselighet/autentisitet**, men **ikke konfidensialitet** (alle med den
    offentlige nøkkelen kan lese).
  - **Hemmelig melding (motsatt):** sender krypterer med **mottakerens offentlige
    nøkkel**; mottaker dekrypterer med **sin private nøkkel**.
  - **PKI / digitale sertifikater** binder en offentlig nøkkel til en identitet og
    hindrer falske nøkler/tjenester. **Hash-algoritme** sikrer dataintegritet
    (ikke konfidensialitet). **Nulldagssårbarhet** = svakhet ukjent for
    leverandøren. **Trojaner** = skadelig funksjon skjult i et nyttig program.
- **Frekvens:** 100 %.

### I. Personvern / GDPR
- **Krav:** Kjernepoenger sensor vil ha frem: **den behandlingsansvarlige
  virksomheten er juridisk ansvarlig selv om lagring/drift settes bort til en
  tredjepart (skyleverandør).** Den registrerte har **innsynsrett**. Prinsipper:
  lovlig, rettferdig og åpen behandling, med **riktighet, dataminimering og
  formålsbegrensning**, og egnede tekniske/organisatoriske tiltak for
  konfidensialitet, integritet og tilgjengelighet. **Feil** å hevde at samtykke
  alltid kreves for *all* behandling, eller at man kan «se bort fra» loven fordi
  behandlingen er nødvendig. Loven har størst konsekvens for **virksomheter** (de
  må følge den og risikerer gebyrer), noe for enkeltpersoner (styrkede
  rettigheter), lite for kriminelle.
- **Frekvens:** 67 %.

### J. Nettverk: subnetting, protokoller/lag, tjenester, overføringstid
- **Krav:**
  - **Overføringstid:** filstørrelse i **byte** × 8 → bit, delt på raten i
    **bit/s**. H2019: `200 MB ÷ 20 Mbit/s = 1600 Mbit ÷ 20 = 80 s`; H2022:
    `150 MB × 8 ÷ 50 Mbit/s = 24 s`; H2023: `800 MB × 8 ÷ 50 Mbit/s = 128 s`.
    Pass på «ned»-hastigheten ved nedlasting.
  - **Verts­tall:** `2^(vertsbit) − 2` (nett- og kringkastingsadresse reservert).
    /16 → 65534; en /29-maske (…11111000) → `2³ − 2 = 6`; en /27 → `2⁵ − 2 = 30`.
  - **Punktnotasjon → CIDR:** tell 1-ere i masken (255 = 8 per oktett; regn kun på
    den delvise oktetten, f.eks. 248 = 11111000 → /29, 224 = 11100000 → /27).
  - **Subnettadresse = IP AND maske**; **broadcast = IP OR (invertert maske)** —
    regn i binært på den relevante oktetten.
  - **Protokoll → transportlag:** HTTP, IMAP, SMTP, FTP, DASH → **TCP**; DHCP →
    **UDP**; DNS → **TCP og/eller UDP**. TCP tilbyr pålitelig/tilkoblingsorientert
    overføring, rekkefølge, flytkontroll, metningskontroll og sjekksum — men
    **ikke** kryptering eller ruting. Ruting skjer i **nettverkslaget**.
  - **Tjenester:** NAT (mange enheter deler én offentlig IP); CDN (flytter innhold
    fysisk nærmere brukeren, avlaster origin, sparer kjernenett); IPv6 (øker
    antallet globalt adresserbare IP-adresser); DNS-prefetching; HTTP-streaming
    (video i segmenter/kvaliteter, klienten velger kvalitet, bruker TCP).
- **Frekvens:** subnetting 100 %, protokoller/lag 100 %, tjenester 100 %,
  overføringstid 83 %.

### K. Operativsystemer (ny, i seksjon 4, sant/usant)
- **Krav:** OS fordeler ressurser, lar flere brukere/programmer dele maskinen
  samtidig, tilbyr API-er for lagring/nettverk og **abstraherer bort
  maskinvaredetaljer**. Vanlige *feilpåstander*: at mobiler ikke trenger OS, eller
  at vanlige brukerprogrammer kjører i kjernemodus.
- **Frekvens:** ny fast gjenganger (H2023).

---

## 4. Sensorens krav

### Faste metaregler
1. **Begrunn hvert alternativ.** Sensorveiledningene forklarer konsekvent
   **hvorfor de gale alternativene er gale**, ikke bare hvorfor det riktige er
   riktig. Løsningsforslag i læreboken skal speile dette (formatet har
   minuspoeng — det å vite hva som er galt er halve ferdigheten).
2. **Regn eksplisitt og med enheter.** Alle beregnings­oppgaver (cache-sykler,
   overføringstid, subnetting, tallkonvertering) har **én entydig verdi**. Vis
   mellomregningen kompakt.
3. **Delvis uttelling er vanlig.** Flere oppgaver gir gradert poeng (H2023:
   «autentisk dataopprinnelse» gir poeng på begge alternativer; personvern­utsagn
   gir 2/1/0 poeng). I maskinvaredelen gis **bonuspoeng** for full pott og
   **minuspoeng** per feil.
4. **Robust sensur ved feil i oppgaven.** Ved oppdaget feil justeres poenggivingen
   til kandidatens fordel (H2023: minuspoeng ble ved en feiltakelse ikke gitt på
   oppg. 4.9; enkelte deloppgaver godtar flere svar som likeverdige).
5. **Flere svar kan være riktige samtidig** (f.eks. begge tolkninger av en byte;
   både «forfalsket nettside → autentisitet» og «→ integritet»).

### Hva som skiller bestått fra stryk
- **Bestått** krever spredning: riktige verdier på regneoppgavene og riktige
  skiller (mål vs. tiltak, sender-/mottakernøkkel) i **alle fire seksjoner** —
  siden hver seksjon må bestås for seg.
- **Den som stryker** samler typisk poeng i to sterke seksjoner (ofte
  tall/maskinvare eller sikkerhet) men bommer systematisk i en tredje (ofte
  nettverk, pga. subnetting/byte-bit-fellene) og faller på seksjonskravet.

### Hva som gir uttelling
- **Presisjon over synsing:** ett riktig avkrysset alternativ slår gjetting, som
  straffes med minus.
- **Direkte konverteringsteknikk** (binær↔oktal/hex uten omvei) — sensor
  fremhever dette eksplisitt som raskere og mindre feilutsatt.
- **Riktig retning på nøkler** i asymmetrisk krypto er det enkeltpoenget
  sikkerhets­veiledningene oftest presiserer.

---

## 5. Typiske feil (eksplisitt eller implisitt i fasitene)

1. **Blande sikkerhets*mål* og sikkerhets*tiltak*** — den hyppigst påpekte feilen
   i seksjon 3. Brannmur, kryptering, backup og tofaktor er *tiltak*, ikke mål.
   Gir minuspoeng.
2. **Glemme byte→bit-omregningen i overføringstid** — filstørrelse oppgis i byte,
   rate i bit/s. Uten ×8 blir svaret en faktor 8 for lite.
3. **Glemme de to reserverte adressene i verts­telling** — svaret er `2^n − 2`,
   ikke `2^n`. Nett- og kringkastingsadresse kan ikke tildeles verter.
4. **Tro at digital signatur gir konfidensialitet** — den gir uavviselighet/
   autentisitet; alle med den offentlige nøkkelen kan lese innholdet.
5. **Snu sender-/mottakernøklene i asymmetrisk krypto** — signering bruker
   *senderens private* nøkkel; hemmelig melding krypteres med *mottakerens
   offentlige* nøkkel.
6. **Regne tallkonvertering «via desimal»** når direkte binær↔oktal/hex er
   raskere — omveien gir flere mellomregninger og flere feilkilder.
7. **Overse selvmodifiserende LMC-kode** — glemme at instruksjoner *er* tall som
   kan endres av programmet selv; da blir programsporet feil.
8. **Bare oppgi den positive tolkningen av en byte** — 2-er komplement-oppgaver
   krever ofte *begge* mulige verdier (med og uten fortegn).
9. **Krysse av sjekksum/hash for konfidensialitet** — hash sikrer *integritet*,
   ikke konfidensialitet.
10. **Bruke gammelt pensum** — drille Karnaugh-diagram, multiplekser, dekoder,
    Moores lov, OSI-7-lag eller flip-flop som om det fortsatt testes. Det er ute
    av / nedtonet i gjeldende pensum.
11. **Feil arkitektur-fakta som «alltid usanne» distraktorer** — teknologiutvikling
    gir *færre* transistorer (usant), klokkesignalet er lagret i RAM (usant),
    register er bygd av RAM (usant), ALU ligger utenfor CPU (usant), en 64-bits
    ALU krever 65 stk. 1-bits ALU (usant — det er 64).
12. **Tro at et lukket/internt system er «uten risiko»** — fysisk tilgang og
    innsidetrusler gjelder fortsatt; sporbarhet er fortsatt nødvendig.

---

## 6. Notasjons- og konstruksjonsapparat

Læreboken bør bruke nøyaktig disse konvensjonene, siden oppgavene og fasitene
gjør det.

### Tallsystemer
- Skrivemåte med basesubskript: `1101₂`, `774₈`, `0x33` / `33₁₆`, `42₁₀`.
- **Binær↔oktal:** grupper i 3-er blokker (`774₈ = 111 111 100₂`).
- **Binær↔hex:** grupper i 4-er blokker/nibbler (`73₁₀ = 0x49`).
- **RGB-hex:** del strengen i tre byte (R, G, B) og konverter hver til desimal
  (`0xA07CD1` → R=160, G=124, B=209).
- **2-er komplement (8 bit):** med fortegn = `−2⁷·b₇ + Σ 2ⁱ·bᵢ`.

### LMC-instruksjonssett (Little Man Computer)
| Mnemonic | Maskinkode | Funksjon |
|---|---|---|
| ADD | 1xx | Akkumulator += minne[xx] |
| SUB | 2xx | Akkumulator −= minne[xx] |
| STA | 3xx | Lagre akkumulator til minne[xx] |
| LDA | 5xx | Last minne[xx] til akkumulator |
| BRA | 6xx | Hopp til xx |
| BRZ | 7xx | Hopp til xx hvis akkumulator = 0 |
| BRP | 8xx | Hopp til xx hvis akkumulator ≥ 0 |
| INP | 901 | Les inn til akkumulator |
| OUT | 902 | Skriv ut akkumulator (som tall) |
| OTC | 922 | Skriv ut akkumulator som ASCII-tegn |
| HLT | 000 | Stopp |
| DAT | — | Datacelle (en verdi i minnet) |

**Sporingsmetode:** tabell med kolonner for programteller, akkumulator og hver
navngitt minnecelle; én rad per utført instruksjon.

### Boolsk algebra og porter
- Notasjon: `A′` eller `Ā` for NOT; `A·B`/`AB` for AND; `A+B` for OR; `⊕` for XOR.
- Nyttige identiteter: `A+A = A`, `A·A = A`, `A+A′ = 1`, XNOR = `(A⊕B)′`,
  funksjonell komplett­het av {NAND} og {NOR} og {INV, OR}.
- **Utenfor pensum (ikke drill):** Karnaugh-diagram, multiplekser, dekoder.

### Cache og arkitektur
- Total tid = `(#treff)·1 + (#bom)·(bom-kostnad)` klokkesykler.
- Abstraksjonsnivåer høyt→lavt: **instruksjon → pipeline → register →
  logikk/invertere → transistor → logiske verdier → volt.**

### Nettverk
- **Overføringstid** = `filstørrelse[byte] × 8 / rate[bit/s]`.
- **Tildelbare verter** = `2^(vertsbit) − 2`.
- **CIDR** = antall 1-ere i nettmasken.
- **Subnettadresse** = `IP AND maske`; **broadcast** = `IP OR (¬maske)`.
- **TCP/IP-modellens fire lag:** applikasjon, transport, nettverk, link (+ fysisk).
- Protokoll→transport: HTTP/IMAP/SMTP/FTP/DASH → TCP; DHCP → UDP; DNS → begge.

### Sikkerhet
- **Mål:** Konfidensialitet, Integritet, Tilgjengelighet (CIA) + Sporbarhet,
  Uavviselighet, Autentisitet, Personvern.
- **Nøkkelbruk:** signering = senders private → verifisering = senders offentlige;
  hemmelig melding = mottakers offentlige → dekryptering = mottakers private.
- **Risiko = sannsynlighet × konsekvens.**

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (kommer garantert, hver seksjon må bestås)
1. **Tallsystem-konvertering + 2-er komplement** (100 %) — direkte binær↔oktal/hex,
   begge byte-tolkninger, byte-addisjon. Billige, garanterte poeng i seksjon 1.
2. **LMC-assembly og maskinkode** (100 %) — sporing med akkumulator/minne-tabell,
   OTC + ASCII, selvmodifiserende og reverse-tracing-vrier, fyll-inn-instruksjon.
3. **Logiske porter + kretsanalyse** (100 % / 83 %) — identifiser port, propagér F
   gate for gate, kryss av *alle* ekvivalente uttrykk, kjenn identitetene.
4. **Arkitektur-fakta** (100 %) — von Neumann, register/ALU/buss/pipeline, de faste
   «alltid usanne» distraktorene, abstraksjonsnivå-rangering.
5. **Sikkerhetsmål vs. tiltak + trusselmodellering** (100 %) — skill mål fra
   tiltak, koble tiltak/trussel til riktig mål, risiko = ssh × konsekvens.
6. **Digital signatur og kryptering** (100 %) — symmetrisk vs. asymmetrisk, riktig
   nøkkelretning for signering vs. hemmelig melding, PKI/sertifikater.
7. **Subnetting og IP** (100 %) — CIDR, `2^n − 2`, subnett-/broadcast-adresse i
   binært.
8. **Protokoller, lag og tjenester** (100 %) — TCP vs. UDP, protokoll→transport,
   NAT/CDN/DNS/IPv6, TCP/IP-modellen.

### Nivå 2 — må kunne (avgjør ofte om en seksjon bestås)
9. **Overføringstid** (83 %) — byte→bit, del på rate; den vanligste tallfellen.
10. **Cache-beregning** (67 %, voksende) — vektet snitt av treff/bom.
11. **Autentisering / tilgangskontroll / passord** (83 %) — tofaktor, salting,
    hashing, hvorfor det virker mot phishing/brute-force.
12. **Personvern / GDPR** (67 %) — behandlingsansvar ved skybruk, innsynsrett,
    dataminimering.

### Nivå 3 — bør kjenne til (lavfrekvent, men fyller ut seksjonene)
13. **Filformater / fargekoder / ASCII / UTF-8** (50 %, voksende) — RGB-hex,
    tapsfri vs. tapskomprimert, hva ASCII/UTF-8/vektorgrafikk egner seg til.
14. **Aksessmodeller & svitsjing** (67 %) — klient-tjener vs. peer-to-peer,
    linje- vs. pakkesvitsjing.
15. **Skadevare** (50 %) — orm/virus/trojaner/rootkit/tastelogger/logisk bombe/bakdør.
16. **Operativsystemer** (ny) — ressursstyring, maskinvareabstraksjon, kjerne-
    vs. brukermodus.

**Ikke prioriter (ute av / nedtonet i pensum):** Karnaugh-diagram, multiplekser,
dekoder, flip-flop-detaljer, Moores lov, OSI-7-lagsmodellen, detaljert
ARP-tabellteori, private IP-adresseklasser. Nevn dem kort for kontekst, men ikke
drill dem.

**Prognose for neste ordinære eksamen:** fire seksjoner à 25 poeng, ren flervalg
med negativ poenggiving, hver seksjon må bestås. Forvent i **seksjon 1**:
tallkonvertering + 2-er komplement + 3–4 LMC/maskinkode-deloppgaver (+ mulig
fargekode/ASCII). **Seksjon 2:** port-ID + kretsanalyse + cache-beregning +
arkitektur-fakta + abstraksjonsnivå. **Seksjon 3:** mål vs. tiltak +
kryptering/digital signatur + trusselmodellering + personvern. **Seksjon 4:**
subnetting (2–3 deloppgaver) + overføringstid + protokoll/lag-matrise +
NAT/CDN/IPv6/streaming + operativsystem-fakta. Studenten som drillet de tre
regneteknikkene til feilfrihet, kan de faste sikkerhetsskillene, og sporer
LMC-kode mekanisk, vil bestå alle fire seksjoner.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/UiO/IN1020/`
(`eksamen/` og `losningsforslag/`).

**Sensorveiledninger / kommentarer lest grundig:**
- `IN1020-H2023-sensorveiledning.pdf` — tredelt (programmering v/ K. R. Stokke,
  maskinvare, samt datasikkerhet + nettverk), med poenggiving og begrunnelser per
  oppgave.
- `IN1020-H2019-kommentar.pdf` — faglærernes «Kommentarer til eksamen» (Langmyhr,
  Mirmotahari, Skar, Stensland) med strykgrense (44) og strykprosent (7,1 %).

**Oppgavesett + fasit lest grundig (bokmål og engelsk):**
`IN1020-H2022`, `IN1020-H2020` (korona-hjemme-/prøveeksamen), `IN1020-H2019`,
`IN1020-H2018`, `IN1020-H2017` — for oppgavetyper, seksjonsstruktur, verdier og
distraktorer.

**Fagbeskrivelse:** omskrevet sammendrag av UiOs emnebeskrivelse for IN1020
(scratchpad: `fagbeskrivelse-in1020.md`; kilde:
<https://www.uio.no/studier/emner/matnat/ifi/IN1020/>).

**Merknader om kildene:**
- **Seksjonsrekkefølgen roterer mellom år**, men innholdet er stabilt: H2017/H2018
  hadde ulik seksjonsinndeling (og bredere pensum inkl. K-map); H2019 kjørte
  sikkerhet→nett→digital→maskinvare; H2022/H2023 kjører den faste rekkefølgen
  digital→maskinvare→sikkerhet→nettverk med 25 poeng per seksjon.
- **H2020 var korona-hjemmeeksamen (2 timer, bestått/ikke bestått)** — tatt med i
  frekvenstellingen, men formatet (kortere, løsere) er **ikke representativt** for
  gjeldende 4-timers skoleeksamen. Fila i arkivet er også merket som prøveeksamen
  brukt til Inspera-øving.
- **Hjelpemiddel-avvik:** de arkiverte settene (2017–2023) oppgir «alle trykte og
  skrevne hjelpemidler + enkel kalkulator», mens UiOs gjeldende emnebeskrivelse
  oppgir «ingen hjelpemidler». Sjekk gjeldende semester før publisering.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og
  sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen
  oppgavetekster, fasiter eller løsningsforslag er gjengitt ordrett. Tallverdier,
  standardnotasjon, instruksjonssett og fagbegreper er allmenn faglig kunnskap og
  ikke opphavsrettslig beskyttet tekst.
</content>
</invoke>
