# Eksamensanalyse: TTM4100 Kommunikasjon – Tjenester og nett (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på NTNUs offisielle
> eksamensarkiv for emnet (tidligere emnenavn/filprefiks **KTN** = «Kommunikasjon –
> tjenester og nett»), med oppgavesett og løsningsforslag/sensorveiledninger fra
> **2016 til 2024** – til sammen 16 løsningsfiler over ni år, samt tilhørende
> oppgavesett og ett eldre sett (datert 2005) som er tatt med for historikk.
> **Alt innhold er omskrevet med egne ord** – ingen oppgavetekster, fasiter eller
> sensorkommentarer er gjengitt ordrett. Tallverdier, protokollnavn, adressenotasjon
> og fagbegreper er allmenn faglig notasjon og ikke opphavsrettslig beskyttet.
> Analysen er kvantitativ der kildene tillater det.
>
> **Emnet er aktivt** (verifisert mot NTNUs emneside juli 2026): TTM4100 undervises
> fortsatt, med planlagt undervisningsstart vår 2027 og oppgitt ordinær og utsatt
> eksamen 2027. Faget er et **grunnkurs i datakommunikasjon og nettverk** – lagdelt
> internettarkitektur, protokoller på alle fem lag i TCP/IP-modellen, trådløse/mobile
> nett og grunnleggende kommunikasjonssikkerhet. Pensumboka er **Kurose & Ross,
> *Computer Networking: A Top-Down Approach***, og både strukturen, terminologien og
> løsningsmetoden i fasitene følger denne boka tett – eksamens-MC-en er til og med
> eksplisitt merket med Kurose-kapittelnumre (Ch. 1, 2 & 3, 4 & 5, 6–8).

---

## 1. Eksamensform og utvikling

### Grunnform (gjeldende)

**Digital skoleeksamen, 4 timer, hjelpemiddelkode D** (kun enkel kalkulator – ingen
trykte eller håndskrevne hjelpemidler). Obligatoriske øvinger må være godkjent samme
semester for å få gå opp. Hele karakteren (**bokstavkarakter A–F**) avgjøres på
slutteksamen, som gir **100 poeng totalt**. Eksamen gis parallelt på engelsk og norsk
(bokmål/nynorsk); ved tvil i den norske versjonen gjelder den engelske. Faget bygger
gjennomgående på Kurose & Ross' fem-lags top-down-modell.

Det som gjør TTM4100 krevende å «lese seg opp på ett tema» for, er at **hvert eksamenssett
dekker hele protokollstakken – alle fem lag pluss sikkerhet og multimedia – hvert år**.
Bredden *er* eksamensformen. Det er verdiene, adressene og protokolldetaljene som byttes
ut, ikke temaområdene.

### ⚠️ Formatet har skiftet flere ganger – tre familier finnes i arkivet

Dette er den viktigste nyansen mot en naiv «se på gamle sett»-strategi. Arkivet
inneholder **tre ganske ulike eksamensformater**, og en student som pugger formen på ett
av dem kan bli overrasket. Det underliggende *pensumet* er derimot svært stabilt.

| Format | År i arkivet | Oppbygning |
|---|---|---|
| **A. Objektiv modell (fler-/enkeltvalg + kort fritekst)** | vår 2016, vår 2017, vår 2018, vår 2019, vår **2022** | Sann/usann- eller fler-korrekt-MC (40–50 p) → beregnings-MC med ett riktig svar (20 p) → enkeltsvar-MC blandet (20 p) → korte fritekstsvar (20 p). Sum 100. |
| **B. Fritekst / kortsvar + regning** | høst 2016–2020, vår 2020 (korona-essay), vår + høst **2021** | Fem deler à 20 p, hver med delspørsmål; «gjør rede for»-svar med per-moment-poeng, pluss 1–3 rene regneoppgaver. |
| **C. Stor MC/matching-blokk + arbeidsviste kortsvar** | vår **2023**, vår **2024**, høst **2024** | **Q1** = stor flervalgs-/matching-/utfyllingsblokk organisert etter Kurose-kapittel (65–100 p), fulgt av **Q2–Q6** – strukturerte kortsvars-/regneoppgaver der fasiten viser full utregning. |

**Gjeldende form (2023–2024, familie C)** er den viktigste å drille. Q1 er en stor
flervalgsblokk delt inn i **fire kapittelbolker** som følger Kurose direkte:

1. **Q1.1 – Kapittel 1 (introduksjon):** hva er Internett, lenke-/fysisk-lag-egenskaper,
   ruting vs. videresending, «nettverk av nettverk», innkapsling.
2. **Q1.2 – Applikasjons- og transportlag (kap. 2 & 3):** UDP-/TCP-tjenester, HTTP GET,
   web-caching, HTTP vs. SMTP, UDP-/TCP-socketer, Internett-sjekksum, TCP slow start.
3. **Q1.3 – Nettverkslag (kap. 4 & 5):** subnett, lengste-prefiks-match (videresendingstabell),
   subnetting/brukbare adresser, IPv4 vs. IPv6, ICMP, best-effort/QoS, adresseoppslag i ruter,
   pakketap i svitsjematrise, NAT.
4. **Q1.4 – Lenkelag, trådløst og mobilt (kap. 6–8):** lenkelagstjenester, Pure Aloha vs.
   CSMA, multiaksess-protokoller, 2D-paritet, overlappende 802.11-nett, egenskaper ved
   sikker kommunikasjon.

Q1 inneholder også **matching-oppgaver** (par påstand mot begrep) og **utfyllingsfelt**
(skriv kilde-/destinasjon-IP og portnummer fra en trace, eller et regnesvar som «0,67»).
Q2–Q6 i 2023/2024 var: **flyt-/overlastkontroll** (drøfting + rwnd), **SSL/Wireshark**
(trace-lesing), **IP-adressering/subnetting**, **multippel aksess** (throughput-argument),
**DNS** (resource records) – dvs. de faste regne- og drøftetemaene fra familie A/B løftet ut
som egne kortsvar.

### Poenggivning på flervalg (gjeldende, viktig)

Den nyeste MC-modellen (2024) bruker en **rabatt-modell uten bunn under null**:

> Poeng = maks{ (antall riktige avkryssinger − rabattpoeng), 0 } × x
> der **5 gale avkryssinger gir ingen rabatt**, og **i > 5 gale gir (i−5)·0,5 poeng i rabatt**.
> x = 100 / (totalt antall riktige svaralternativer på hele eksamen, f.eks. 89).

Praktisk betydning: **et manglende riktig kryss teller ikke som feil**, og du har fem
«gratis» feilkryss før det koster – men rå avkryssing av alt straffes. Tenk hvert
alternativ isolert, kryss det du er rimelig sikker på.

I den eldre objektive modellen (familie A) var reglene strengere og varierte per sett:
- **Vår 2022:** 2 p per riktig MC, 0 for feil; **maks 10 kryss** på tvers av deloppgavene
  i Q1/Q2 (minuspoeng ellers); Q3-regning 5 p (ett riktig), Q4 blandet 4 p (ett riktig),
  Q5 fritekst 0–4 p.
- **Vår 2019:** Task 1 hadde **nøyaktig 20 riktige** fordelt over ti delgrupper, +2 p hver,
  **ingen trekk for feil opp til 20 avkryssinger, men −3 p per kryss utover 20**.
- **Vår 2018:** Task 2 – ikke mer enn 10 avkryssinger (minuspoeng ellers); Task 3 – ett
  svar per deloppgave.

**Konklusjon om form:** øv på **gjeldende C-format** (kapittelinndelt MC + arbeidsviste
kortsvar), men bruk B-settene (fritekst med per-moment-fasit) som den beste kilden til
*hvilke momenter sensor krever*. Familie A gir god MC-drilling. Det eldste settet (2005:
OSI 7-lag, PSTN/GSM, SIP, WiMAX, Fourier, Manchester-koding) er **ikke representativt** og
bør ikke brukes som mal.

---

## 2. Temafrekvens

Basert på 16 løsningsfiler 2016–2024 (vår + høst). Cellescoren = antall av de 16 settene
der temaet er til stede med minst én egen (del)oppgave, målt ved søk i løsningsteksten
(konservativt for de rene MC-fasitene, som bare inneholder svarbokstaver – reell dekning
er høyere). **Fordi hvert sett dekker hele stakken, treffer kjerneområdene nesten hvert
år; scoren måler sikkerhet/bredde, ikke vekt innen ett enkelt sett.**

| Tema | Lag/blokk | Score | Kommentar |
|---|---|---|---|
| **Sikkerhet** (symmetrisk/offentlig nøkkel, signatur, sertifikat, brannmur, SSL) | Sikkerhet | **15/16 = 94 %** | Fast innslag hvert år; ofte egen del + MC-feller |
| **HTTP / web** (persistens, caching, cookies, HTTP vs. SMTP, GET) | App | **12/16 = 75 %** | MC + regne-nedlastingstid |
| **IP-adressering / subnetting** (CIDR, VLSM, lengste prefiks) | Nett | **11/16 = 69 %** | Alltid som regning – den sikreste poengkilden på nettverkslaget |
| **Multippel aksess / MAC** (CSMA/CD vs. CSMA/CA, Aloha, polling) | Lenke | **11/16 = 69 %** | Både MC og throughput-regning |
| **Multimedia / VoIP** (jitter, buffring, FEC, interleaving, concealment) | App/media | **11/16 = 69 %** | Fast «FEC vs. interleaving»-drøfting |
| **Flytkontroll** (rwnd, hastighetstilpasning) | Transport | **10/16 = 63 %** | Nesten alltid paret med overlastkontroll |
| **Overlastkontroll** (slow start / congestion avoidance / fast recovery, AIMD) | Transport | **10/16 = 63 %** | Skille flyt- vs. overlastkontroll er kjernemomentet |
| **CRC** (modulo-2-divisjon) | Lenke | **10/16 = 63 %** | Regne ut rest R fra D og G – vises som langdivisjon |
| **Trådløst 802.11** (RTS/CTS, skjult terminal, SIFS/DIFS, infrastruktur/ad hoc) | Trådløst | **10/16 = 63 %** | + adressefelt i 802.11-ramme |
| **Forsinkelse / store-and-forward** (linje- vs. pakkesvitsjet) | Nett/fysisk | **10/16 = 63 %** | Fast regnetype, nesten identisk fra år til år |
| **Svitsj vs. ruter** (selvlærende svitsjetabell, MAC) | Lenke | **10/16 = 63 %** | Ofte paret med ARP |
| **Paritet** (enkel + 2D even parity) | Lenke | **9/16 = 56 %** | «Hvilken matrise er korrekt» / fyll inn / lokaliser feil |
| **DNS** (hierarki, resource records, registrar) | App | **9/16 = 56 %** | RR-format (Name,Value,Type,TTL) + tjenester |
| **TCP-oppsett** (three-way handshake, seq/ACK-aritmetikk) | Transport | **9/16 = 56 %** | SYN/SYN-ACK/ACK; kumulativ ACK |
| **UDP vs. TCP** (tjenester, hodefelt, checksum) | Transport | **7/16 = 44 %** | Faste MC-feller (se del 5) |
| **Gjennomstrømning / throughput** (polling, flaskehals) | Blandet | **7/16 = 44 %** | Nyttetid over syklustid |
| **Socket-programmering** (ServerSocket vs. ConnectionSocket) | App | **7/16 = 44 %** | Konseptuelt + MC om SOCK_DGRAM |
| **SSL/TLS + Wireshark-trace** (seq = seq+len, IP-payload = Total Length − hode) | App/transport | **7/16 = 44 %** | Voksende – fast i C-formatet 2023/2024 |
| **Linje- vs. pakkesvitsjing** (definisjoner, effektivitet) | Nett | **7/16 = 44 %** | Ofte paret med forsinkelsestyper |
| **Ruting** (vs. videresending, lengste prefiks, data-/control-plane) | Nett | **6/16 = 38 %** | Videresendingstabell-oppslag |
| **Internett-checksum** (16-bits summering med wrap-around) | Transport | **5/16 = 31 %** | Egen regne-MC i nyere sett |
| **Brannmur** (pakkefilter / stateful / applikasjonsgateway) | Sikkerhet | **5/16 = 31 %** | Tre typer – fast momentliste |
| **Stop-and-wait utilization** (U = T_trans/(T_trans+2T_prop)) | Transport/lenke | **4/16 = 25 %** | Illustrerer dårlig utnyttelse av rask link |
| **Polling** (throughput-formel R/(1+dR/Q)) | Lenke | **4/16 = 25 %** | Utled formelen fra syklustid |
| **Fragmentering** (IPv4 vs. IPv6, reassemblering i endesystem) | Nett | **4/16 ↑** | Egen del i B-settene |
| **Videresending** (forwarding, data plane) | Nett | **3/16 = 19 %** | Ofte inne i ruting-oppgaven |
| **Caesar-chiffer** (skift-kryptering, finn nøkkel) | Sikkerhet | **3/16 ↑** | Liten regne-MC i A-settene |

**Lavfrekvente / historiske temaer (flagges):** IPsec/VPN, HOL-blokkering, MPLS
(kun kont-sett), datasenter-topologi (Tier/TOR-throughput, vår 2016), CDMA chipping-rate,
OFDM (3G→4G), 4G/LTE HSS. **Bare i det eldste settet (2005):** OSI 7-lag med
tjenesteprimitiver, PSTN/GSM (HLR/VLR/handover), SIP, IEEE 802.16/WiMAX, Fourier/signalteori,
Differential Manchester, POP3/IMAP/MIME/base64-detaljer. Disse er utgått og bør ikke
prioriteres.

### Viktigste funn

1. **Faget har ingen enkelt «kjerneoppgave» – det har hele protokollstakken som kjerne,
   hvert år.** Sikkerhet (94 %), applikasjonslag (HTTP/DNS), transportlag (TCP/UDP + flyt/overlast),
   nettverkslag (IP-adressering) og lenkelag (CRC/paritet + multiaksess) pluss trådløst og
   multimedia dukker opp i så godt som hvert sett. Bredde slår dybde.
2. **Fem–seks «tvillingoppgaver» går igjen nesten uendret:** (a) linje- vs. pakkesvitsjet
   forsinkelse (store-and-forward), (b) subnetting/VLSM, (c) CRC-langdivisjon, (d) 2D-paritet,
   (e) stop-and-wait/polling-throughput, (f) TCP seq/ACK-aritmetikk. Dette er billige, sikre
   poeng for den som drillet metoden.
3. **De faste «drøft X vs. Y»-momentene** avgjør de konseptuelle poengene: flytkontroll vs.
   overlastkontroll, TCP vs. UDP, CSMA/CD vs. CSMA/CA, svitsj vs. ruter, symmetrisk vs.
   offentlig nøkkel, streaming vs. interaktiv media. Hver har en fast momentliste sensor
   leter etter (del 3).
4. **Voksende gjengangere:** Wireshark/SSL-trace-lesing (fast i 2023/2024), Internett-checksum
   som egen regne-MC, NAT og ICMP i MC-blokken. Forvent disse fremover.

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen, med fasitens foretrukne løsningsmetode. Alle beskrivelser
er omskrevet.

### A. Forsinkelse og gjennomstrømning (regning – kjernen i regnedelen)

- **Linjesvitsjet vs. pakkesvitsjet filoverføring.** Fasitens metode:
  - *Linjesvitsjet:* tid = oppsettstid + filstørrelse/rate + samlet propagasjon. Overføringstiden
    er **uavhengig av antall linker** (ingen store-and-forward). Eks: 300 ms oppsett +
    (800K·8)/64 Kbps ≈ 100,3 s.
  - *Pakkesvitsjet «store-and-forward» (én stor pakke, n linker):* transmisjonstiden legges ut
    på **hver** link → n · (L/R) + samlet propagasjon. Fella er å glemme oppmultiplisering.
  - Bruk konsekvent bit = byte·8, fiber-/lyshastighet **2·10⁸ m/s**, propagasjon = avstand/hastighet.
- **Stop-and-wait maks datarate + utilization:** **U = T_trans/(T_trans + 2·T_prop)**;
  maks datarate = U · linkrate. Illustrerer hvor lite en rask link utnyttes over lang avstand.
- **Polling-throughput:** nyttetid over syklustid → maks = **R/(1 + dR/Q)** der d = polling-forsinkelse,
  Q = bits per node per runde, N faller ut. Fasiten ber ofte om å *utlede* formelen.
- **HTTP-nedlastingstid (2023):** ikke-persistent = per objekt oppsett-RTT + forespørsel-RTT +
  transmisjon; persistent/parallell teller oppsett kun én gang / deler RTT. Sensor viser oppdelt
  regnestykke per RTT-bidrag.
- **Stil:** sett opp formel → sett inn tall **med enheter** → svar i sekunder / bit/s. «Plugge tall
  inn i en bokformel uten forklaring er ikke godt nok» (eksplisitt sensornotat).

### B. IP-adressering og subnetting (regning – fast)

- **Finn subnett fra IP + maske:** skriv begge binært, gjør **bitvis AND**. Kortsvarvariant
  (2024): gitt IP + /30, /29, /28 → oppgi subnettadressen (192.168.2.108 /29 → 192.168.2.104).
- **VLSM / CIDR-oppdeling:** del et adresseområde i subnett med ulike behov → tildel **størst først**,
  velg minste prefiks /n som dekker kravet (**adresser = 2^(32−n) − 2** for nett-/broadcast).
  Eks: 100.13.96.0/21 → ADM ≥ 800, SAL ≥ 400, MAN ≥ 150, FoU ≥ 100.
- **Lengste-prefiks-match (videresendingstabell):** ekspander riktig oktett til binært, match
  lengste prefiks mot destinasjon → interface; ellers default.
- **Behovsdimensjonering:** «223.1.2.0/xx for ~500 verter» → /23 gir 510 (passer), /24 gir 254
  (for lite). Regn 2^(32−xx) − 2 og velg minste xx som holder.

### C. Feildeteksjon (regning + konsept)

- **CRC:** legg til (len(G) − 1) nuller på D, gjør **modulo-2-divisjon (XOR)** med generator G,
  rest R = sjekksum; send D‖R; mottaker får rest 0 ved feilfritt. Regne-MC: gitt D og G, finn R
  (vis langdivisjonen). Eks: D=101110, G=1001 → R=011.
- **2D even parity:** tell paritet i hver rad og kolonne; **kan lokalisere og korrigere én
  enkeltbitfeil** (rad- + kolonnemismatch krysser i feilbiten), **detektere** dobbeltfeil.
  Testes som «hvilken matrise er korrekt», «fyll inn paritetsbit» eller «lokaliser og rett feilen».
- **Internett-checksum:** summer 16-bits ord med wrap-around (end-around carry), ta komplement.
- **Nyanse:** CRC er *ikke* en sikkerhetsmekanisme – algoritmen er kjent, så en mellommann kan endre
  data og regne ny CRC (fast fritekst-poeng).

### D. Transportlag: TCP/UDP, flyt vs. overlast, seq/ACK (konsept + liten regning)

- **TCP vs. UDP (fast MC + drøfting):** UDP = forbindelsesløs, ingen oppsett, hode 8 byte;
  TCP = forbindelsesorientert (three-way handshake), hode 20 byte, har flyt- **og** overlastkontroll;
  **begge** har checksum; UDP har ingen av kontrollmekanismene. Bruksområde UDP: sanntid/tap-tolerant
  (tale/video med FEC), DNS, ingen oppsettsforsinkelse, mindre overhead.
- **Flytkontroll vs. overlastkontroll (kjernedrøfting):** flytkontroll beskytter **mottakerens
  buffer** (ende-til-ende, sender+mottaker); overlastkontroll beskytter **nettet** (TCP gjør det
  ende-til-ende ut fra observerte tap/forsinkelser). Nyere fasit ber om tabell (hva/hvor/hvilket lag):
  flytkontroll finnes i transport- **og** lenkelaget; overlastkontroll i transportlaget assistert av
  nettverkslaget.
- **TCP-flytkontroll konkret:** sender vedlikeholder **mottakervindu (rwnd)**, oppdatert via kumulative
  kvitteringer; når rwnd = 0 sender A **én-byte-prober** til B melder rwnd > 0.
- **Overlastkontroll:** slow start, congestion avoidance, fast recovery; **AIMD** («sagtann»).
- **Three-way handshake:** SYN (seq = x) / SYN-ACK (seq = y, ack = x+1) / ACK (ack = y+1).
- **Seq/ACK-aritmetikk:** neste seq = forrige seq + antall databyte; **kumulativ ACK** = første
  ikke-mottatte byte (venter på hull ved reordering).

### E. Applikasjonslag: HTTP, DNS, sockets (konsept)

- **HTTP:** klient–server, tilstandsløs, over TCP; persistent vs. ikke-persistent; cookies for tilstand;
  web-caching/CDN reduserer forsinkelse og trafikk. HTTP GET-formål; HTTP vs. SMTP (push vs. pull,
  ASCII-hoder).
- **DNS:** distribuert hierarkisk database (root → TLD → autoritativ) + applikasjonsprotokoll; oversetter
  vertsnavn↔IP, gir alias (CNAME), mailserver (MX) og lastfordeling. **Resource record = (Name, Value,
  Type, TTL).** Ny server via registrar (NS + A + MX).
- **Sockets:** ServerSocket = velkjent lytteport for oppkoblingsforespørsler; ConnectionSocket = opprettes
  per forbindelse.

### F. Lenkelag og multiaksess (konsept + throughput-regning)

- **CSMA/CD vs. CSMA/CA:** forklar akronymene bit for bit (CS/MA/CD/CA). CD kan sende straks ved ledig
  medium og oppdager kollisjon under sending (kablet Ethernet); CA må trekke **backoff** (teller ned kun
  når mediet er ledig) og bruker eksplisitt **ACK** + interframe-mellomrom (trådløst, der kollisjon ikke
  kan detekteres). **CSMA/CD hører ikke hjemme i 802.11** (fast MC-felle).
- **802.11-MAC:** RTS/CTS, ACK, CSMA/CA, DIFS/SIFS; SIFS < DIFS gir ACK prioritet; RTS/CTS løser **skjult
  terminal** (bruk kun for lange rammer pga. overhead). Infrastruktur- vs. ad hoc-modus.
- **802.11-ramme (adressefelt):** fire adressefelt; adresse 1/2 = destinasjon/kilde (host eller AP),
  adresse 3 = MAC til ruter-interfacet AP-en henger på.
- **Svitsj vs. ruter:** lenkelagssvitsj videresender/filtrerer rammer på **MAC-adresser** via en
  **selvlærende, selvkonfigurerende, transparent** svitsjetabell, har ingen egen IP-adresse; ruter
  opererer på nettverkslaget med IP. **ARP** oversetter IP↔MAC lokalt (tabeller i host/ruter-minne).
- **Multiaksess-throughput:** slotted-argumenter (samtidige ikke-interfererende sendinger → 2L/T;
  interfererende → L/T; med ACK → 2L/3T).

### G. Trådløst / mobilt og multimedia (konsept)

- **Streaming vs. interaktiv media:** lagret media (én vei, tåler buffring/forsinkelse) vs. interaktiv
  tale/video (to veier, stramt sanntidskrav, tåler mindre buffring men litt mer tap). **Jitter** fjernes
  i mottaker via avspillingsbuffer for jevn avspilling.
- **Tre tapshåndteringsmetoder:** **FEC med XOR** (rekonstruer tapt pakke, + kapasitet); **FEC med
  lav-rate ekstrastrøm** (erstatt tapt med lavere kvalitet); **interleaving** (spre tap utover,
  + forsinkelse, uegnet for interaktivt). *Error concealment* godtas som alternativ tredje metode.
  Sammenlign alltid på **overhead vs. forsinkelse**.
- **Mobilt (lavfrekvent):** 3G vs. 4G (all-IP-kjerne, OFDM-radio); LTE-kjernefunksjoner (HSS).

### H. Sikkerhet (konsept + liten regning)

- **Symmetrisk vs. offentlig nøkkel:** algoritmen antas kjent, sikkerheten ligger i nøkkelen. Symmetrisk =
  delt hemmelig nøkkel (utfordring: nøkkeldistribusjon). Offentlig nøkkel = nøkkelpar; krypter med
  mottakers offentlige nøkkel.
- **Digital signatur:** krypter (hash/MAC av) dokumentet med **avsenders private nøkkel**; verifiseres med
  offentlig nøkkel; **CA/sertifikat** garanterer at offentlig nøkkel tilhører rett part. I praksis signeres
  en hash/MAC, ikke hele dokumentet (ytelse).
- **SSL/TLS:** sikrer **TCP** (ikke IP); faser handshake / nøkkelutledning / dataoverføring; nonce mot
  replay; MAC for integritet.
- **Brannmurer (tre typer):** tradisjonell pakkefiltrering (per-pakke på adresse/port/flagg), **stateful**
  (sporer TCP-forbindelser via forbindelsestabell), applikasjonsgateway (applikasjonsspesifikk proxy).
- **Caesar-chiffer (regne-MC):** skift hver bokstav med nøkkelen k modulo alfabetlengden (engelsk 26,
  norsk 29); «finn nøkkelen» = tell skift.

### I. Wireshark / trace-lesing (voksende, fast i C-formatet)

- **IP-payload = Total Length − hodelengde** (48 − 20 = 28 byte).
- **TCP: neste segments seq = seq + len**; SYN/SYN-ACK har **seq = 0** i trace; kumulativ ACK − initiell
  seq = mottatte databyte.
- **SSL-records:** telle records i en pakke; identifisere kryptert master-secret; kilde-/destinasjon-IP
  og portnummer fra pakkehode; hvilke pakker bærer kryptert brukerdata.

---

## 4. Sensorens krav

### Gjennomgående prinsipper (uttalt i fasitene)

1. **Poeng gis per moment.** Fritekst-/kortsvarfasitene (særlig B-formatet 2018–2021) lister
   eksplisitte delpoeng per moment (f.eks. «UDP vs. TCP» = seks 1-poengs momenter; «feildeteksjon» =
   paritet 1p / 2D-paritet 2p / checksum 1p / CRC 3p). Et manglende kjernemoment koster; dekk **bredden**
   av forventede momenter.
2. **Sensor belønner ekvivalent og ekstra korrekt resonnement.** Poengforslagene er «veiledende, ikke
   absolutte»; en grundig besvarelse som mangler ett moment kan likevel få full uttelling, og gode
   tilleggsmomenter honoreres. Alternative korrekte formuleringer godtas (f.eks. «error concealment» som
   tredje VoIP-metode).
3. **Fritekst skal være KORT.** Flere sett har harde lengdegrenser (vår 2022: «maks 3 korte setninger –
   lengre svar kan gi 0 selv om noe riktig er begravet i teksten»; vår 2018 Task 4: 1–3 setninger).
   «Riktig et sted i mengden» belønnes ikke.
4. **Regning: vis metoden.** «Å plugge tall inn i en bokformel uten forklaring er ikke et godt nok svar»
   (eksplisitt, høst 2020). Krav: formel → innsetting med enheter → tallsvar. Fasiten aksepterer ofte et
   lite intervall eller brøkform; hold samme form som fasiten.
5. **Flervalg – tenk hvert alternativ isolert.** I gjeldende rabatt-modell (2024) er fem feilkryss
   gratis, deretter −0,5 p per kryss, gulv 0; manglende riktig kryss teller ikke som feil. I eldre sett
   er avkryssingstaket hardt (maks 10, eller −3 p per kryss utover 20) – ikke over-kryss.

### Hva som skiller sterk fra svak besvarelse

- **Presisjon på regneoppgavene** (subnetting, CRC, forsinkelse, stop-and-wait, seq/ACK) er billige,
  sikre poeng med én entydig verdi og fast metode.
- **Riktig skille på «X vs. Y»-momentene** (flyt/overlast, TCP/UDP, CSMA-CD/CA, svitsj/ruter,
  symmetrisk/offentlig nøkkel) avgjør de konseptuelle poengene.
- **Korthet og presisjon** i fritekst – svar nøyaktig på det som spørres, med akkurat de forventede
  momentene, ikke et essay.

---

## 5. Typiske feil

Gjennomgående feilkilder fasitene fanger (mange gjenbrukes som faste MC-distraktorer):

1. **Forveksle flytkontroll og overlastkontroll** – flyt = mottakerbuffer (ende-til-ende); overlast = nettet.
2. **Tro at UDP har oppsett/overlastkontroll**, eller at **TCP mangler checksum / er upålitelig / er simplex**
   – alle gale. Begge har checksum; UDP-hode 8 byte, TCP-hode 20 byte.
3. **Glemme propagasjon** i forsinkelsesregning, eller **ikke gange transmisjonstiden med antall linker**
   for store-and-forward, eller **blande bit og byte**. Bruk 2·10⁸ m/s.
4. **Plassere CSMA/CD i 802.11** (trådløst bruker CSMA/CA). Også: liste HSS/SIFS feil som 802.11-element.
5. **Kalle offentlig-nøkkel-krypto «symmetrisk»**, eller **signere med feil nøkkel** – signér med **privat**.
   «SSL sikrer IP» er galt (SSL/TLS sikrer TCP). «WEP gir høy sikkerhet» er galt.
6. **IPv4/IPv6-fakta:** IPv4-adresse = **32 bit** (ikke 48/64), IPv6 = **128 bit** (ikke 132/256); IPv6-hode
   har **ingen checksum**; IPv6-rutere fragmenterer ikke (dropper + «Packet Too Big»/ICMP).
7. **Bytte om propagasjon og transmisjon** i QoS-definisjonene (fast MC-felle).
8. **Feil i subnetting:** glemme nett-/broadcast-adressene (2^(32−n) − 2), eller velge for lite prefiks;
   feil oktett-ekspansjon i lengste-prefiks-match.
9. **CRC/paritet:** glemme at en mottaker skal få rest 0; tro at 2D-paritet kan korrigere mer enn én bitfeil;
   **tro at CRC er en sikkerhetsmekanisme** (algoritmen er kjent – mellommann kan regne ny CRC).
10. **ARP mapper til vertsnavn** (galt – IP↔MAC); tro at en lenkelagssvitsj har IP-adresse (den er transparent).
11. **TCP-payload inneholder IP-adresser** (galt – IP legges på i nettverkslaget; segmentet bærer kilde-/
    destinasjonsport). **TCP og UDP har samme checksum** (ingen forskjell).
12. **Bruke det eldste settet (2005) som mal** – OSI 7-lag, PSTN/GSM, SIP, WiMAX, Manchester osv. er utgått.

---

## 6. Formel- og protokollapparat

Læreboken bør bruke nøyaktig disse konvensjonene, siden oppgavene og fasitene gjør det.

### Forsinkelse og gjennomstrømning
- **Transmisjonstid** T_trans = L/R (L i bit, R i bit/s). **Propagasjon** T_prop = avstand / (2·10⁸ m/s).
- **Linjesvitsjet overføring:** oppsett + L/R + Σ T_prop (uavhengig av antall linker).
- **Pakkesvitsjet store-and-forward (én pakke, n linker):** n · (L/R) + Σ T_prop.
- **Stop-and-wait:** U = T_trans / (T_trans + 2·T_prop); maks datarate = U · R.
- **Polling-throughput:** maks = R / (1 + dR/Q) (d = polling-forsinkelse per node, Q = bit per node per runde).
- **HTTP-nedlasting:** ikke-persistent = Σ_objekter (oppsett-RTT + forespørsel-RTT + T_trans); persistent teller
  oppsett én gang; parallell deler RTT.

### Adressering
- **Subnett** = IP AND maske (binært). **Adresser i /n** = 2^(32−n); brukbare = 2^(32−n) − 2.
- **VLSM:** tildel størst subnett først, minste prefiks som dekker behovet, ingen overlapp.
- **Lengste-prefiks-match:** ekspander oktett binært, match lengste prefiks → interface, ellers default.
- IPv4 = 32-bits adresse; IPv6 = 128-bits, 40-byte fast hode, ingen hode-checksum, ingen ruter-fragmentering.

### Feildeteksjon
- **CRC:** D‖0^r ÷ G (modulo-2/XOR), rest R (r = len(G) − 1); send D‖R; mottaker: rest 0 ⇒ feilfritt.
- **2D even parity:** rad- + kolonneparitet; korrigerer 1 bitfeil, detekterer 2.
- **Internett-checksum:** 16-bits ords-sum med wrap-around, ta 1-komplement.

### Transportlag
- UDP-hode 8 byte, TCP-hode 20 byte; begge har checksum.
- Three-way handshake: SYN(seq=x) / SYN-ACK(seq=y, ack=x+1) / ACK(ack=y+1).
- Neste seq = seq + databyte; kumulativ ACK = første ikke-mottatte byte.
- Overlastkontroll: slow start → congestion avoidance → fast recovery; AIMD.

### Lenkelag / trådløst
- CSMA/CD (kablet, kollisjonsdeteksjon) vs. CSMA/CA (trådløst, backoff + ACK + SIFS/DIFS).
- 802.11: RTS/CTS (skjult terminal), SIFS < DIFS (ACK-prioritet), infrastruktur/ad hoc, 4 adressefelt.
- Svitsj: MAC-basert, selvlærende, transparent, ingen IP. ARP: IP↔MAC lokalt.

### Sikkerhet
- Symmetrisk = delt nøkkel; offentlig nøkkel = par (krypter med mottakers offentlige).
- Digital signatur = krypter hash med **privat** nøkkel; verifiser med offentlig; CA/sertifikat for tillit.
- SSL/TLS sikrer TCP; brannmurtyper: pakkefilter / stateful / applikasjonsgateway.
- Caesar: c = (m + k) mod (alfabetlengde).

### Wireshark
- IP-payload = Total Length − hodelengde (typisk 20 byte). Neste TCP-seq = seq + len. SYN/SYN-ACK: seq = 0.

---

## 7. Prognose og prioritering

### Nivå 1 – må beherskes perfekt (høyfrekvent + tunge poeng)
1. **Transportlag** (flyt vs. overlast, TCP/UDP, three-way handshake, seq/ACK) – i praksis hvert sett,
   både MC og kortsvar. Kjernedrøftingene og seq/ACK-aritmetikken.
2. **Sikkerhet** (94 %) – symmetrisk/offentlig nøkkel, digital signatur (privat nøkkel!), sertifikat/CA,
   SSL sikrer TCP, tre brannmurtyper, Caesar-regning.
3. **Forsinkelse/throughput-regning** – linje- vs. pakkesvitsjet store-and-forward, stop-and-wait, polling,
   HTTP-nedlasting. Fast metode, sikre poeng.
4. **IP-adressering/subnetting** (69 %) – bitvis AND, VLSM, lengste-prefiks-match, behovsdimensjonering.
5. **Feildeteksjon** – CRC-langdivisjon (63 %) + 2D-paritet (56 %) + Internett-checksum.
6. **Multippel aksess / lenkelag** (69 %) – CSMA/CD vs. CSMA/CA, svitsj vs. ruter, ARP, throughput-argument.
7. **Applikasjonslag** – HTTP (75 %: persistens/caching/cookies) + DNS (56 %: hierarki, RR-format) + sockets.
8. **Trådløst 802.11** (63 %) – RTS/CTS, skjult terminal, SIFS/DIFS, infrastruktur/ad hoc, adressefelt.

### Nivå 2 – må kunne (avgjør de mellomstore oppgavene)
9. **Multimedia/VoIP** (69 %) – streaming vs. interaktiv, FEC (to varianter) vs. interleaving, jitter/buffring.
10. **Wireshark/SSL-trace** (voksende, fast i 2023/2024) – seq+len, IP-payload, SSL-records, IP/port fra trace.
11. **Fragmentering** (IPv4/IPv6, reassemblering i endesystem) og **NAT/ICMP** (MC-blokken).
12. **Innkapsling og lagmodell** (fem lag, PDU-navn) – fast Q1.1-tema.

### Nivå 3 – bør kjenne til (lavfrekvent, fyller ut settet)
13. **Ruting vs. videresending** (data/control plane), lengste prefiks.
14. **Mobilt** (3G/4G, all-IP, OFDM, HSS), **MPLS**, **HOL-blokkering**, **IPsec/VPN**, **datasenter-topologi**.

**Ikke prioriter (utgått):** OSI 7-lag med tjenesteprimitiver, PSTN/GSM (HLR/VLR/handover), SIP,
IEEE 802.16/WiMAX, Fourier/signalteori, Differential Manchester, POP3/IMAP/MIME-detaljer – kun i 2005-settet.

### Prognose for neste ordinære eksamen
Forvent **gjeldende C-format:** en stor **kapittelinndelt MC/matching/utfyllingsblokk (Q1)** som følger
Kurose (introduksjon → app+transport → nettverk → lenke/trådløst) med rabatt-basert poenggivning, fulgt av
**~5 arbeidsviste kortsvar/regneoppgaver (Q2–Q6)** hentet fra de faste temaene: **flyt-/overlastkontroll**,
**SSL/Wireshark-trace**, **IP-adressering/subnetting**, **multippel aksess/throughput**, **DNS** – og trolig
minst én **forsinkelses- eller CRC-/paritetsregning**. Sikkerhet dukker nesten garantert opp (MC + evt.
signatur/brannmur-kortsvar). Studenten som drillet **subnetting, CRC-langdivisjon, store-and-forward-forsinkelse,
stop-and-wait, TCP seq/ACK** til feilfrihet, og som kan de faste **«X vs. Y»-drøftingene** med riktig
momentliste, tar en stor og trygg grunnpott. Hold fritekst kort og presis; vis metoden i regning.

### Anbefalt lærebok-arketype
**Lagdelt top-down (Kurose-struktur) med fast regne-verktøykasse, drillet som flervalg + korte fasit-momenter.**
Bygg boka lag for lag (introduksjon/innkapsling → applikasjon → transport → nettverk → lenke → trådløst →
sikkerhet → multimedia), speilende MC-kapittelinndelingen. For hvert lag: (a) teori med de faste «X vs. Y»-skillene
og momentlistene sensor krever, (b) den tilhørende regnemetoden med formel → innsetting → svar, (c)
eksamensrettede **flervalgsoppgaver med de kjente distraktorene/fellene**, og (d) **korte fasit-momenter**
(ikke essay). Egne drilleseksjoner for de seks tvillingregneoppgavene (subnetting, CRC, 2D-paritet,
store-and-forward, stop-and-wait/polling, seq/ACK) og for **Wireshark-trace-lesing**. Nærmest en hybrid av
IN2060 (bredde: alle blokker hvert år, auto-rettbar MC + regning) og et top-down-nettverksinnføringsfag.

---

## 8. Kildeliste

Alle filer ligger i `~/Desktop/Eksamner/NTNU/TTM4100/` (filprefiks `KTN` = tidligere emnenavn
«Kommunikasjon – tjenester og nett»; `_lf`/`-LF` = løsningsforslag/fasit; `k` = kontinuasjons-/høsteksamen).

**Løsningsforslag/fasit lest grundig (16 sett):**
- `KTN_2024_lf.pdf`, `KTN_2024k_lf.pdf` – gjeldende C-format: stor MC/matching/utfyllingsblokk (2024k er ren
  svarnøkkel med rabatt-scoring, 89 riktige alternativer), 2024 vår med arbeidsviste Q2–Q6 (flyt/overlast, SSL/
  Wireshark, subnetting, multiaksess, DNS).
- `KTN_2023_lf.pdf` – MC-blokk Q1 + fullt arbeidsviste Q2–Q6 (flyt/overlast, Wireshark-trace, videresendingstabell,
  HTTP-nedlastingsregning, brannmur).
- `KTN_2022_lf.pdf` – femdelt objektiv modell med detaljerte poeng- og avkryssingsregler (beste kilde til A-formatets
  grading).
- `KTN_2021_lf.pdf`, `KTN_2021k_lf.pdf` – fritekst/essay med per-moment-poeng (beste kilde til sensorens momentlister).
- `KTN_2020_lf.pdf` (korona-essay), `KTN_2020k_lf.pdf` – fritekst/kortsvar med eksplisitte per-moment-poeng og
  regnemetode (forsinkelse, stop-and-wait, subnetting, Caesar).
- `KTN_2019_lf.pdf`, `KTN_2019k_lf.pdf` – firedelt objektiv modell (2019 vår, med −3-regel) og fritekst (2019 høst,
  inkl. Wireshark/SSL).
- `KTN_2018_lf.pdf` (svarnøkkel + Task-4-løsning), `KTN_2018k_lf.pdf` – objektiv (vår) og fritekst (høst, uttalte
  poengvekter).
- `KTN_2017_lf.pdf`, `KTN_2017k_lf.pdf`, `KTN_2016k_lf.pdf`, `KTN_2016V-LF.pdf` – A- og B-formatets tidlige sett.

**Oppgavesett lest/skummet:** `KTN_2024.pdf`, `KTN_2024k.pdf` (full MC-tekst med kapittelinndeling og scoring-regler),
`KTN_2023.pdf` (bildebasert, dekket via fasit), `KTN_2022.pdf`, `KTN_2019.pdf`, `KTN_2018.pdf`, `KTN_2017(k).pdf`,
`KTN_2016V.pdf`, `KTN_2016k.pdf`, samt `KTN_2015.pdf` (**egentlig et 2005-sett** – utgått format, tatt med for historikk).

**Fagbeskrivelse:** omskrevet sammendrag av NTNUs emnebeskrivelse for TTM4100 (scratchpad:
`fagbeskrivelse-ttm4100.md`; kilde: <https://www.ntnu.no/studier/emner/TTM4100>). **Pensumbok:** Kurose & Ross,
*Computer Networking: A Top-Down Approach*.

**Merknader om kildene:**
- **Formatet har skiftet tre ganger** (objektiv MC/T-F → fritekst/essay → stor MC-blokk + arbeidsviste kortsvar),
  men **pensumdekningen er svært stabil**: hele protokollstakken pluss sikkerhet og multimedia hvert år. Gjeldende
  form (2023–2024) bør drilles; eldre sett brukes for temadekning og sensorens momentlister.
- **Enkelte fasiter er rene svarnøkler** (2018 vår, 2023/2024 MC-delene) uten oppgavetekst – for disse er
  temaetiketter utledet fra tilhørende oppgavesett og fra de arbeidsviste delene.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og
  omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller løsningsforslag er gjengitt ordrett. Tallverdier,
  standardnotasjon, protokollnavn og fagbegreper er allmenn faglig kunnskap og ikke opphavsrettslig beskyttet tekst.
