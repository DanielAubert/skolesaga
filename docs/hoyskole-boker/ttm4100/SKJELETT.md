# Bokskjelett: TTM4100 Kommunikasjon — Tjenester og nett — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alle frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (NTNUs eksamensarkiv for TTM4100 / tidligere emnenavn KTN,
> 16 løsningsfiler 2016–2024, samt NTNUs emnebeskrivelse). Arketype: **DNA-regnefag**
> (`DNA-regnefag.md`), i **hybrid** med tung konseptuell protokollforståelse —
> kapittel-DNA-ene der (teori / drill / øvingseksamen) er obligatoriske og gjentas
> ikke i sin helhet her, men er supplert med en **NTNU-kortsvarsdrill** lånt fra
> `tdt4120` (se §1, «Hybridvalget»). **All notasjon følger emnets og pensumbokas
> konvensjoner** (Kurose & Ross, *Computer Networking: A Top-Down Approach*): fem-lags
> TCP/IP-modell top-down, protokollnavn, adressenotasjon, CRC-generator, seq/ACK-
> aritmetikk, forsinkelsesformlene. Alle oppgaver, tallverdier, adresser, traces og
> innpakninger i den ferdige boka skal være **nyskrevne** (opphavsrett): protokollnavn,
> standardnotasjon, adressenotasjon og fagbegreper er allmenn faglig kunnskap, men ingen
> oppgavetekster, fasiter eller sensorformuleringer fra reelle sett gjengis.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `ttm4100` |
| Tittel | **TTM4100 Kommunikasjon — Tjenester og nett (NTNU)** |
| Institusjon | **NTNU** (Norges teknisk-naturvitenskapelige universitet — jf. TDT4120/TFY4104-oppføringene i `institusjoner.ts`) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (kvantitativt fag med faste, gjentakende regnemønstre) — **hybrid** med tung konseptuell protokollforståelse (~65–70 % konseptuelt / ~30–35 % regning), med lånt NTNU-kortsvarsdrill |
| Antall kapitler | **37** (2 eksamenskart/håndverk + 30 tema/drill + 5 eksamenstrening) |
| Estimert totaltid | **≈ 2 580 min ≈ 43 timer** (inkl. 3 firetimers øvingseksamener) |
| Quiz totalt | **722** (krav ≥500; MC **er** halve eksamen — siktet høyt) |
| Flashcards totalt | **574** (krav ≥500 — svært begrepsrikt protokollfag, siktet høyt) |
| Prøver | **28** (4 per temadel 1–7) + **3 øvingseksamener** (kap. 8.3–8.5) |

**Pitch (én avsnitt):** TTM4100 er NTNUs grunnkurs i datakommunikasjon og nettverk —
hele TCP/IP-stakken top-down (Kurose & Ross), fra applikasjon ned til lenkelag, pluss
trådløst/mobilt, multimedia og kommunikasjonssikkerhet. Vurderingen er én **firetimers
digital skoleeksamen**, hjelpemiddelkode **D** (kun enkel kalkulator), karakter **A–F**,
som gir **100 poeng** og teller 100 % (obligatoriske øvinger må være godkjent for å gå
opp). Det som gjør faget krevende, er ikke dybden på ett tema, men **bredden**: hvert
eneste sett dekker hele protokollstakken pluss sikkerhet og multimedia. Bredden *er*
eksamensformen — det er verdiene, adressene og protokolldetaljene som byttes ut, ikke
temaområdene. **Pensumet er svært stabilt**, men **formatet har skiftet tre ganger** (se
under). Boka bygges derfor mot **pensumstabiliteten** og driller mot **begge**
oppgavefamiliene: en stor MC-/matching-/utfyllingsbank (gjeldende C-formats Q1) og de
faste regne- og kortsvarsoppgavene (Q2–Q6). Den driller de **seks regne-tvillingene** til
feilfrihet (subnetting/VLSM, CRC-langdivisjon, 2D-paritet, store-and-forward-forsinkelse,
stop-and-wait/polling-throughput, TCP seq/ACK) pluss Wireshark-trace-lesing, og trener de
faste **«X vs. Y»-drøftingene** med de momentlistene sensor faktisk gir poeng for.

**Trefamilie-regelen (skal stå i Del 0 og styre lesestrategien):** Arkivet inneholder
**tre ganske ulike eksamensformater** — en student som pugger *formen* på ett av dem kan
bli overrasket, men det underliggende *pensumet* er stabilt:

| Format | År | Oppbygning |
|---|---|---|
| **A. Objektiv MC** | vår 2016–2019, vår 2022 | Sann/usann- og fler-korrekt-MC + beregnings-MC + kort fritekst. Sum 100. |
| **B. Fritekst/kortsvar + regning** | høst 2016–2021, vår 2020 (korona) | Fem deler à 20 p; «gjør rede for» med per-moment-poeng + 1–3 regneoppgaver. |
| **C. GJELDENDE (2023–2024)** | vår 2023, vår + høst 2024 | **Q1** = stor MC/matching/utfyllingsblokk delt i **fire Kurose-kapittelbolker**, fulgt av **Q2–Q6** = ~5 arbeidsviste kortsvar/regneoppgaver. |

**Boka drilles mot C som primærform, men bruker B-settene som beste kilde til sensorens
momentlister og A-settene som ren MC-drilling.** Det eldste settet (2005: OSI 7-lag,
PSTN/GSM, SIP, WiMAX, Fourier, Manchester-koding) er **ikke representativt** og brukes
ikke som mal — det flagges i Del 0 og i «bør ikke prioriteres».

**Kritisk stilregel (gjelder HELE boka):**
1. **MC-rabatt-scoringen — tenk hvert alternativ isolert.** Gjeldende MC-modell (2024)
   bruker en **rabatt uten bunn under null**: poeng = maks{(riktige avkryssinger −
   rabatt), 0} · x, der **fem gale avkryssinger er gratis**, og deretter −0,5 p per
   ekstra galt kryss (gulv 0); x = 100/(totalt antall riktige alternativer). Praktisk:
   **et manglende riktig kryss teller ikke som feil**, du har fem «gratis» feilkryss, men
   rå avkryssing av alt straffes. Boka lærer eksplisitt: kryss det du er rimelig sikker
   på, la aldri et opplagt riktig alternativ stå uavkrysset. I eldre A-sett var reglene
   strengere (vår 2022: maks 10 kryss, minuspoeng ellers; vår 2019: −3 p per kryss utover
   20) — Del 0 flagger at avkryssingstaket er hardt i A-familien.
2. **Kortsvar SKAL være KORT (egen warning-disiplin).** Flere sett har harde
   lengdegrenser («maks 3 korte setninger — lengre svar kan gi 0 selv om noe riktig er
   begravet i teksten»). **«Riktig et sted i mengden» belønnes ikke.** Alle
   løsningsforslag på kortsvar svarer med akkurat de forventede momentene — ikke et essay.
   Hvert kapittel med en «X vs. Y»-drøfting har en `warning` som gjentar korthetskravet.
3. **Poeng gis PER MOMENT — bruk momentlisten.** Fritekst-/kortsvarfasitene lister
   eksplisitte delpoeng per moment (f.eks. «UDP vs. TCP» = seks 1-poengs momenter;
   «feildeteksjon» = paritet 1p / 2D-paritet 2p / checksum 1p / CRC 3p). Et manglende
   kjernemoment koster; dekk **bredden** av forventede momenter. Sensor honorerer også
   ekvivalente/ekstra korrekte momenter. Hver «X vs. Y»-drøfting i boka leveres derfor med
   en **momentliste-mal** (se §3 og per-kapittel-kontraktene) — den faste listen sensor
   krysser av mot.
4. **Regning: vis metoden — formel → innsetting MED ENHETER → svar.** «Å plugge tall inn
   i en bokformel uten forklaring er ikke et godt nok svar» (eksplisitt sensornotat). Krav
   på ALLE regneeksempler og løsningsforslag: **skriv formelen → sett inn tall med enheter
   (bit, bit/s, s, m/s) → oppgi tallsvar med enhet**. Hold samme svarform som fasiten
   (brøk `0,67`, intervall, sekunder/bit/s). Regn systematisk, ikke gjett.
5. **Emnets/pensumbokas notasjon er fasit.** Bruk Kurose-notasjonen oppgavene forventer:
   `T_trans = L/R`, `T_prop = d/(2·10⁸ m/s)`, subnett `= IP AND maske` (binært),
   `/n`-prefiks med `2^{32−n} − 2` brukbare adresser, CRC `D‖0^r ÷ G` (modulo-2/XOR),
   seq/ACK-aritmetikk (`neste seq = seq + databyte`, kumulativ ACK), three-way handshake
   `SYN/SYN-ACK/ACK`, `U = T_trans/(T_trans + 2·T_prop)`, polling `R/(1 + dR/Q)`, Caesar
   `c = (m + k) mod 26`. Engelsk fagterm beholdes der pensum bruker det, med kort norsk
   forklaring ved første forekomst («store-and-forward (lagre-og-videresend)»,
   «round-trip time (RTT)», «longest prefix match»).

**Hybridvalget (skal dokumenteres — jf. produksjonsløypens krav):** TTM4100 er
**primært regnefag** (DNA-regnefag): seks faste regne-tvillinger går igjen nesten uendret
år etter år, og de er de sikreste poengene. Men **~65–70 % av eksamen er konseptuell** —
protokollforståelse, «X vs. Y»-drøftinger og MC om protokolldetaljer. For den konseptuelle
tyngden **lånes NTNU-kortsvarsstilen fra `tdt4120`**: (a) «presisjon over lengde /
kortsvar skal være kort» som gjennomgående stilregel; (b) **delvis uttelling per moment**
med margnotater i drill- og eksamenscasene; (c) «svar bare på det du blir spurt om». Der
tdt4120 er rent kortsvars-CLRS, er TTM4100 en **jevn hybrid**: hvert lag får både
regnemetoden (formel→innsetting→enheter→svar, DNA-regnefag) OG den konseptuelle
momentliste-drøftingen (kortsvar, tdt4120). Boka speiler dermed at eksamen selv er en MC-
og regnebank med arbeidsviste kortsvar.

**Avvik fra DNA/README-malen (dokumentert):**
- **Makrostruktur følger Kurose top-down / MC-kapittelinndelingen, ikke ren faglig
  frekvens.** DNA-en ordner temadeler etter faglig avhengighet og lar frekvens styre
  omfang. Her styrer **Kurose-lagrekkefølgen** (som gjeldende MC-blokk Q1 er delt etter:
  Ch. 1 → Ch. 2&3 → Ch. 4&5 → Ch. 6–8) fordi eksamen er organisert slik og studenten skal
  kunne lese boka «i eksamensrekkefølge». Frekvensen styrer i stedet **omfanget** innad
  (topptemaer får flere kapitler + eget drillkapittel). Rekkefølgen er dessuten faglig
  progressiv top-down (grunnlag → app → transport → nett → lenke → trådløst/media →
  sikkerhet).
- **Quiz kalibreres høyt (722) fordi MC ER halve eksamen.** Gjeldende Q1 er en stor
  MC/matching/utfyllingsblokk (65–100 p) — plattformens MC-quiz er derfor **direkte
  eksamenstrening**. Tre konsekvenser: (i) `options[0]` = riktig svar (runtime stokker);
  (ii) reelle **«velg de riktige»**-, **matching**- og **utfyllings**-oppgaver splittes til
  enkeltstående ett-riktig-svar-quiz (ett per påstand/felt), fordi plattformen har ett
  riktig svar per quiz-item; (iii) hver quiz-forklaring begrunner både hvorfor det riktige
  er riktig OG hvorfor de sentrale distraktorene er gale (de faste MC-fellene i §5 er
  gjenbrukte som distraktorer). Regne- og kortsvarstrening skjer i `exercise`-blokkene
  (`solution` + `hints`).
- **«Symbol- og formelliste» → «Symbol-, formel- og protokollapparat».** README krever en
  `collapsible` per delkapittel. For et nettverksfag er apparatet ikke bare formler, men
  **protokollnotasjon**: forsinkelsesformlene, adresse-/maskenotasjon (binært), header-felt
  (UDP 8 byte / TCP 20 byte, IPv4 32 bit / IPv6 128 bit), seq/ACK-felt, CRC-generator,
  portnumre, RR-format `(Name, Value, Type, TTL)`. Blokken heter derfor **«Symbol-, formel-
  og protokollapparat»** og lister ALT delkapitlet bruker (per delkapittel, ikke arv).
  Unntak kun for helt symbol-/formelfrie kapitler.
- **`theorem`-blokker brukes for tre ting:** (a) de faste **regneprosedyrene** (de seks
  tvillingene + Wireshark-trace), (b) **momentliste-malene** for «X vs. Y»-drøftingene (den
  faste listen sensor gir poeng for), og (c) **protokoll-fakta-kontrakter** (f.eks.
  IPv4/IPv6-fakta, 802.11-adressefelt, brannmurtypene). Disse er bokas «teoremer».
- **Flashcards kalibreres som begrep ↔ definisjon ↔ fast feilslutning.** Genereres KUN fra
  toppnivå `definition`-blokker med `title`. Faget er svært begrepsrikt (protokoller,
  header-felt, «X vs. Y»-skiller, MAC-mekanismer, sikkerhetsprimitiver), så flashcards
  siktes høyt (574) og kalibreres som gjenkalling: **begrep → presis definisjon + den faste
  fella** (f.eks. «SSL/TLS → sikrer **TCP**, ikke IP»; «Digital signatur → signér med
  **privat** nøkkel, ikke offentlig»; «Lenkelagssvitsj → MAC-basert, **ingen** IP-adresse,
  transparent»). Fordi eksamen er hjelpemiddelfattig (kun kalkulator), ER dette
  puggematerialet.
- **Drillkapitlene ligger i sine temadeler** (1.4, 3.5, 4.5, 5.5, 7.5), fordi hver
  regne-/drøftesjanger drilles rett etter teorien. Del 8 beholder sjangerguide,
  Wireshark-drill og de tre øvingseksamenene.
- **Kapittelantall (37) ligger over DNA-veiledningen (20–35)** og er begrunnet: **hele
  protokollstakken pluss sikkerhet og multimedia kommer hvert år** (bredden er
  eksamensformen), og de fem tunge lagene (transport, nettverk, lenke, app, sikkerhet)
  krever hver egen del med både teori, «X vs. Y»-drøfting og regne-drill.

---

## 2. Makrostruktur

Delene 1–7 følger **Kurose top-down-rekkefølgen** (som gjeldende MC-blokk Q1 er delt
etter), innad ordnet etter forkunnskaper. `sectionNames` (bokforsiden) settes fra kolonne 2.

| Del | `sectionName` (bokforsiden) | Kap. | Innhold / eksamenskobling |
|---|---|---|---|
| 0 | Eksamenskart og eksamenshåndverk | 2 | Prioriteringsverktøyet + MC-/kortsvar-/regnehåndverket; kjerne i studieguiden. |
| 1 | Nettverksgrunnlag og forsinkelse | 4 | Hva er Internett, pakke- vs. linjesvitsjing, lagdelt arkitektur/innkapsling, forsinkelse/throughput (**regne:** store-and-forward). Kurose Ch. 1. |
| 2 | Applikasjonslaget | 4 | Sockets, **HTTP/web (75 %)**, e-post/SMTP, **DNS (56 %)**. Kurose Ch. 2. |
| 3 | Transportlaget | 5 | UDP/TCP + checksum, pålitelig overføring + **stop-and-wait (regne)**, three-way handshake + **seq/ACK (regne)**, **flyt- vs. overlastkontroll**. Kurose Ch. 3. **Nivå 1**. |
| 4 | Nettverkslaget | 5 | Videresending vs. ruting, IP-adressering/IPv6, **subnetting/VLSM (regne, 69 %)**, lengste-prefiks-match/NAT/ICMP. Kurose Ch. 4&5. |
| 5 | Lenkelaget og lokalnett | 5 | Feildeteksjon **CRC/2D-paritet (regne, 63/56 %)**, **multippel aksess (69 %)**, svitsj/ARP/Ethernet, **802.11 (63 %)**. Kurose Ch. 6. |
| 6 | Multimedia og trådløst/mobilt | 2 | **Multimedia/VoIP (69 %)** streaming vs. interaktiv, **FEC vs. interleaving**, mobilt (bør kjenne til). Kurose Ch. 7/8. |
| 7 | Nettverkssikkerhet | 5 | **Topptema (94 %):** symmetrisk/offentlig nøkkel + Caesar, signatur/sertifikat, SSL/TLS, brannmur. Kurose Ch. 8. **Nivå 1**. |
| 8 | Eksamenstrening | 5 | Sjangerguide (C-format) + Wireshark-trace-drill + 3 komplette øvingseksamener. |

**Avvik fra DNA-makrostrukturen (dokumentert):** DNA-en ordner temadelene etter faglig
avhengighet og lar frekvens styre omfang. Her styrer **Kurose top-down-rekkefølgen**
delinndelingen (samme som MC-blokkens fire kapittelbolker), slik at studenten kan lese
«i eksamensrekkefølge». Rekkefølgen er samtidig faglig progressiv. Frekvensen styrer
**omfanget**: sikkerhet (94 %) og transport (Nivå 1) får 5 kapitler hver med eget
drillkapittel; multimedia (69 %, Nivå 2, ingen tung regning) får 2. Drillkapitlene (1.4,
3.5, 4.5, 5.5, 7.5) ligger i sine deler. Del 8 beholder sjangerguide, Wireshark-drill og
de tre øvingseksamenene.

---

## 3. Sjangerkatalog

Faget har to ortogonale akser: **oppgaveformen** (F1–F6, hvordan svaret leveres og rettes)
og **innholdssjangeren** (A–I, temablokkene fra EKSAMENSANALYSE §3). Hvert kapittel
refererer begge. Del 0 presenterer dem for studenten.

### Oppgaveformer (F)

| Kode | Form | Mekanikk | Fallgruve |
|---|---|---|---|
| **F1** | MC, ett riktig (radioknapp / sann-usann) | Ett korrekt alternativ | Distraktorene er de faste MC-fellene (§5) |
| **F2** | MC, flere riktige («velg de riktige») | Rabatt-scoring: 5 gratis feilkryss, så −0,5 p (gulv 0) | Rå avkryssing av alt straffes; kryss det du er sikker på |
| **F3** | Matching (par påstand ↔ begrep) | Ett begrep per påstand | Nesten-riktige begrepspar |
| **F4** | Utfylling / fyll-inn | Skriv IP/port fra trace, eller regnesvar («0,67») | Feil form (desimal der brøk kreves), feil felt |
| **F5** | Kortsvar (arbeidsvist, per-moment) | **Kort** — 1–3 setninger; delpoeng per moment | Essay gir 0; «riktig i mengden» belønnes ikke |
| **F6** | Regneoppgave | Formel → innsetting med enheter → svar | Mangler enheter/metode; blander bit/byte |

> **MC er halve eksamen:** gjeldende Q1 (F1–F4) er 65–100 av 100 poeng. Q2–Q6 (F5–F6) er
> ~5 arbeidsviste kortsvar/regneoppgaver. Boka driller begge; quiz-banken er F1–F4-trening
> (splittet til ett-riktig-svar), `exercise`-blokkene er F5–F6-trening.

### Innholdssjangre (A–I) — destillert fra EKSAMENSANALYSE §3

| Kode | Innholdssjanger | Del | Frekvens |
|---|---|---|---|
| **A** | Forsinkelse/gjennomstrømning (store-and-forward, stop-and-wait, polling, HTTP-nedlasting) | 1/3/5 | forsinkelse 63 %, stop-and-wait 25 %, polling 25 % |
| **B** | IP-adressering/subnetting (bitvis AND, VLSM, lengste-prefiks, behovsdimensjonering) | 4 | **69 %** — sikreste poeng på nettverkslaget |
| **C** | Feildeteksjon (CRC-langdivisjon, 2D-paritet, Internett-checksum) | 5/3 | CRC 63 %, paritet 56 %, checksum 31 % |
| **D** | Transportlag: TCP/UDP, flyt vs. overlast, seq/ACK, handshake | 3 | flyt/overlast 63 %, TCP-oppsett 56 %, UDP/TCP 44 % |
| **E** | Applikasjonslag: HTTP, DNS, sockets | 2 | HTTP **75 %**, DNS 56 %, sockets 44 % |
| **F** | Lenkelag/multiaksess: CSMA/CD vs. CA, svitsj vs. ruter, ARP, 802.11 | 5 | multiaksess **69 %**, svitsj/ruter 63 %, 802.11 63 % |
| **G** | Multimedia/mobilt: streaming vs. interaktiv, FEC vs. interleaving, jitter | 6 | **69 %** |
| **H** | Sikkerhet: symmetrisk/offentlig, signatur/sertifikat, SSL, brannmur, Caesar | 7 | **94 %** (topptema) |
| **I** | Wireshark/trace-lesing (seq+len, IP-payload, SSL-records, IP/port) | 8/3/7 | 44 % (voksende, fast i 2023/2024) |

### Momentliste-mal (den faste sensor-mekanikken)

Hver «X vs. Y»-drøfting leveres med en **momentliste** — den faste listen sensor gir
delpoeng per. Malen (skal stå i Del 0.2 og gjentas per drøfting som en `theorem`):

> **Momentliste for «drøft X vs. Y»:** (1) definér X kort, (2) definér Y kort, (3) det
> **avgjørende skillet** (hva/hvor/hvilket lag), (4) minst ett bruks-/konsekvenseksempel
> per side, (5) den faste fella som IKKE skal krysses av. Skriv KORT — ett moment per
> setning. Sensor krysser av mot listen; manglende kjernemoment koster, ekstra korrekt
> moment honoreres.

De åtte «X vs. Y»-drøftingene med egen momentliste (kapittel i parentes):

1. **Linjesvitsjing vs. pakkesvitsjing** (1.1)
2. **TCP vs. UDP** (3.1)
3. **Flytkontroll vs. overlastkontroll** (3.4) — fagets viktigste drøfting
4. **CSMA/CD vs. CSMA/CA** (5.2)
5. **Svitsj vs. ruter** (5.3)
6. **Streaming vs. interaktiv media** (6.1)
7. **FEC vs. interleaving** (6.2)
8. **Symmetrisk vs. offentlig nøkkel** (7.1)

### Regne-verktøykassen (de seks tvillingene + Wireshark)

De faste regneoppgavene som MÅ drilles til feilfrihet, hver som en `theorem`-prosedyre med
formel→innsetting→enheter→svar (kapittel i parentes):

1. **Store-and-forward / linje- vs. pakkesvitsjet forsinkelse** (1.3, drill 1.4)
2. **Subnetting / VLSM / lengste-prefiks-match** (4.3, drill 4.5)
3. **CRC-langdivisjon (modulo-2)** (5.1, drill 5.5)
4. **2D-paritet (lokalisér/rett)** (5.1, drill 5.5)
5. **Stop-and-wait / polling-throughput** (3.2 + 5.2, drill 3.5/5.5)
6. **TCP seq/ACK-aritmetikk** (3.3, drill 3.5)
7. **(+) Wireshark-trace-lesing** (drill 8.2) — seq+len, IP-payload, SSL-records, IP/port

---

## 4. Kapitler

Feltene følger DNA-ens «Skjelett-krav». **Innholdskontrakt** = definisjoner/regler/
prosedyrer/momentlister kapitlet SKAL lære (i emnets/Kuroses notasjon). **Symbol-, formel-
og protokollapparat** = det `collapsible`-apparatet delkapitlet krever. Prioritetsklasser:
**perfekt** / **kunne** / **kjenne**. Hvert teorikapittel har standard-DNA-en:
Eksamensvinkel-`tip` → Forkunnskaper-`text` + Symbol-/formel-/protokollapparat-`collapsible`
→ Motivasjon → `definition`/`theorem` (i emnets notasjon; momentlister/regneprosedyrer som
`theorem`) → utledning/prosedyre m/intuisjon → 2–4 `example` (siste på eksamensnivå, i
oppgaveform F1–F6, regning som formel→innsetting→enheter→svar) → Typiske-feil-`warning`
(inkl. korthetskravet ved «X vs. Y») → 6–12 `exercise` (stigende, ender på eksamensnivå,
oppgaveformer F1–F6, alle med `solution` + `hints`) → Repetisjons-`collapsible`.
Drillkapitler: Eksamensvinkel → løsningsoppskrift → sensor-kommentert eksamenscase →
12–16 oppgaver på eksamensnivå.

---

### Del 0 — Eksamenskart og eksamenshåndverk

#### Kapittel 0.1: Eksamenskartet — slik testes TTM4100

- **id:** `ttm4100-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen (én firetimers digital eksamen, kalkulator, A–F, 100 poeng), de tre formatfamiliene (A/B/C med gjeldende C som primær), MC-kapittelinndelingen etter Kurose, temafrekvensene og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet 2016–2024. Skal gjengi: (i) **formen** — digital skoleeksamen, **4 timer**, kode **D** (kun kalkulator), A–F, teller 100 %, obligatoriske øvinger godkjent; **100 poeng**; (ii) **trefamilie-regelen** — A objektiv MC (2016–19/2022), B fritekst+regning (høst 2016–2021), **C gjeldende (2023–2024): stor MC/matching/utfyllingsblokk Q1 delt i fire Kurose-bolker + ~5 arbeidsviste kortsvar/regne Q2–Q6**; drill mot C, bruk B for momentlister, A for MC-drilling; (iii) **Q1s fire kapittelbolker** — Ch. 1 (intro/innkapsling) → Ch. 2&3 (app+transport) → Ch. 4&5 (nett) → Ch. 6–8 (lenke/trådløst/sikkerhet); (iv) **bredden ER eksamensformen** — hele stakken hvert år; (v) **rabatt-scoringen** (5 gratis feilkryss, så −0,5 p, gulv 0; manglende riktig kryss teller ikke) og de harde takene i A-familien; (vi) **temafrekvens-tabellen** (sikkerhet 94 %, HTTP 75 %, subnetting 69 %, multiaksess 69 %, multimedia 69 %, flyt/overlast 63 %, CRC 63 %, 802.11 63 %, forsinkelse 63 %, svitsj/ruter 63 %, paritet 56 %, DNS 56 %, TCP-oppsett 56 %, …); (vii) **regne vs. teori ~30–35 % / ~65–70 %**; (viii) **2005-settet er utgått** (OSI 7-lag, PSTN/GSM, SIP, WiMAX, Fourier, Manchester) — ikke mal.
- **Innholdskontrakt:** Oppgaveform-katalogen F1–F6 (§3) + innholdssjangrene A–I som studentens sjekkliste med typisk del og vekt. **Den gjennomgående regelen:** *regneferdighetene er de sikreste poengene* — de seks tvillingene har hver én entydig fasit (eller brøk) og fast metode. **Prognosen for neste ordinære eksamen** (C-format): stor kapittelinndelt MC/matching/utfylling (Q1) + ~5 kortsvar/regne (Q2–Q6) fra de faste temaene — flyt/overlast, SSL/Wireshark, subnetting, multiaksess-throughput, DNS + minst én forsinkelses- eller CRC/paritet-regning; **sikkerhet dukker nesten garantert opp**. Avslutt med **leseplanen**: de seks regne-tvillingene + de åtte «X vs. Y»-momentlistene skal sitte perfekt (Nivå 1); Nivå 2 (multimedia, Wireshark, fragmentering/NAT/ICMP, innkapsling) avgjør de mellomstore; Nivå 3 (ruting-detaljer, mobilt, MPLS, IPsec) fyller ut settet.
- **Oppgavesjangre:** Ingen fagoppgaver; 3–4 refleksjonsoppgaver, f.eks.: «Med rabatt-scoring der fem feilkryss er gratis og manglende riktig kryss ikke teller — hvor aggressivt bør du krysse?» og «Rangér de fem lagene etter hvor mange garanterte regnepoeng de rommer.»
- **Typiske feil:** Metafeilene — pugge formen på ett format og bli overrasket av et annet (drill C, kjenn A/B); over-krysse i A-familien der taket er hardt; tro et lag «kan droppes» (hele stakken hvert år); **bruke 2005-settet som mal**; nedprioritere sikkerhet (94 %).
- **Quiz: 14 · Flashcards: 14** (form, tre familier, F1–F6, Kurose-bolker, frekvenser, rabatt-scoring)

#### Kapittel 0.2: Eksamenshåndverket — MC-scoring, kortsvarsdisiplin og regnestil

- **id:** `ttm4100-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `ttm4100-0-1` · **kapitteltype:** eksamenskart
- **description:** De tre håndverksferdighetene som gir poeng uansett tema: (1) MC-rabatt-scoringstrategi, (2) kortsvarsdisiplinen (KORT, per-moment, momentliste), (3) regnestilen (formel→innsetting med enheter→svar). Håndverket boka driller i hvert kapittel.
- **Eksamensbelegg:** Metakapittel — destillert fra sensorveiledningene (særlig B-settene 2018–2021 for momentlister, høst 2020 for regnestil-kravet, 2024 for rabatt-scoringen). Håndverket avgjør poeng på tvers av alle temaer.
- **Innholdskontrakt:** `theorem` **MC-strategi**: rabatt-modellen (5 gratis feilkryss, så −0,5 p, gulv 0; manglende riktig kryss teller ikke) → kryss hvert alternativ isolert når du er rimelig sikker; A-familiens harde tak (maks 10 / −3 per kryss > 20) → ikke over-kryss der. `theorem` **momentliste-malen** (§3): definér X → definér Y → avgjørende skille → eksempel per side → fast felle; skriv ett moment per setning. `theorem` **kortsvarsdisiplinen**: maks 1–3 setninger; svar bare på det som spørres; «riktig i mengden» belønnes ikke; delvis uttelling per moment. `theorem` **regnestilen**: formel → innsetting med enheter → tallsvar med enhet; hold fasitens form (brøk/intervall); bit = byte·8; lyshastighet i fiber `2·10⁸ m/s`. **Symbol-, formel- og protokollapparat:** enhetene (bit, bit/s, s, m/s), `2·10⁸ m/s`, brøk-/desimalform, poeng-per-moment.
- **Oppgavesjangre:** F1–F6 (meta). Mønstereksempel (F5): «Drøft flytkontroll vs. overlastkontroll i maks tre setninger» → vis en A-besvarelse på 3 setninger + margnotat om hvilke tre momenter som gir poeng.
- **Typiske feil:** Skrive essay på et kortsvar (kan gi 0); plugge tall uten metode/enheter (ikke godt nok); over-krysse i A-familien; glemme at et manglende riktig kryss ikke teller i C-familien (svar det du kan).
- **Quiz: 16 · Flashcards: 14** (rabatt-scoring, momentliste-mal, kortsvarsdisiplin, regnestil)

---

### Del 1 — Nettverksgrunnlag og forsinkelse *(Kurose Ch. 1)*

> Del 1 legger fundamentet (nettverk av nettverk, lagdelt arkitektur, innkapsling) og
> rommer den første regne-tvillingen: **store-and-forward / linje- vs. pakkesvitsjet
> forsinkelse** (63 %, nesten identisk fra år til år). Innkapsling og lagmodell er fast
> Q1.1-tema. Kapittel 1.4 er drillkapitlet.

#### Kapittel 1.1: Hva er Internett — pakke- vs. linjesvitsjing

- **id:** `ttm4100-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Internett som «nettverk av nettverk», nettverkskant (endesystemer) vs. kjerne, aksessnett, og den faste drøftingen linjesvitsjing vs. pakkesvitsjing (multipleksing, effektivitet, kø).
- **Eksamensbelegg:** Sjanger E-slekt / A, Q1.1-tema. Linje- vs. pakkesvitsjing 44 %, «nettverk av nettverk» fast MC. Prioritet: **kunne** (drøftingen), grunnlag for 1.3-regning.
- **Innholdskontrakt:** `definition` endesystem/vert, aksessnett, kjerne, ISP-hierarki. `definition` **linjesvitsjing** (dedikert rute, reservert kapasitet, FDM/TDM) vs. **pakkesvitsjing** (store-and-forward, statistisk multipleksing, kø). `theorem` **momentliste «linjesvitsjing vs. pakkesvitsjing»**: (1) linjesvitsjing = reservert kapasitet/dedikert rute; (2) pakkesvitsjing = statistisk multipleksing, ingen reservasjon; (3) skillet = garantert rate vs. bedre utnyttelse ved sporadisk trafikk; (4) eksempel: pakkesvitsjing er billigere/mer effektivt ved burst, linjesvitsjing gir forutsigbar ytelse; (5) fella: pakkesvitsjing gir kø/tap under last. **Symbol-, formel- og protokollapparat:** rate `R` (bit/s), multipleksing (FDM/TDM/statistisk), kø.
- **Oppgavesjangre:** E/A (F1/F5). Mønstereksempel (F5): «Nevn to grunner til at pakkesvitsjing brukes i Internett fremfor linjesvitsjing (maks 3 setninger).» — statistisk multipleksing + enklere/billigere; fella: kø ved overbelastning.
- **Typiske feil:** Tro pakkesvitsjing reserverer kapasitet; tro linjesvitsjing tåler burst best; blande «nettverk av nettverk» med ett flatt nett; skrive essay på en 3-setnings-drøfting.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.2: Lagdelt arkitektur, protokollstakk og innkapsling

- **id:** `ttm4100-1-2` · **number:** 1.2 · **estimatedMinutes:** 45 · **prerequisites:** `ttm4100-1-1` · **kapitteltype:** teori
- **description:** Fem-lags TCP/IP-modellen (applikasjon, transport, nettverk, lenke, fysisk), hvert lags oppgave, PDU-navnene (melding/segment/datagram/ramme) og innkapsling ned/opp gjennom stakken.
- **Eksamensbelegg:** Sjanger E/A, Q1.1-tema, fast hvert år. Innkapsling og lagmodell er garantert MC. Prioritet: **perfekt** (billige, sikre MC-poeng).
- **Innholdskontrakt:** `definition` de fem lagene med oppgave. `theorem` **PDU-navn per lag**: applikasjon = melding, transport = segment, nettverk = datagram/pakke, lenke = ramme. `theorem` **innkapsling**: hvert lag legger til eget hode (og evt. hale) → melding→segment→datagram→ramme nedover; mottaker fjerner hodene oppover. `text` skillet mot OSI 7-lag (nevnes kort — 2005-settets syv lag er utgått; Kurose bruker fem). **Symbol-, formel- og protokollapparat:** PDU-navnene, hode/payload, de fem lagene.
- **Oppgavesjangre:** E (F1/F3). Mønstereksempel (F3): «Match hvert lag med sin PDU: transport ↔ ?, nettverk ↔ ?, lenke ↔ ?» (segment / datagram / ramme).
- **Typiske feil:** Blande PDU-navnene (segment vs. datagram vs. ramme); bruke OSI 7-lag (utgått); tro innkapsling fjerner hoder nedover; feil rekkefølge på lagene.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.3: Forsinkelse, tap og gjennomstrømning

- **id:** `ttm4100-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `ttm4100-1-2` · **kapitteltype:** teori
- **description:** De fire forsinkelseskomponentene (prosessering, kø, transmisjon, propagasjon), forskjellen transmisjon vs. propagasjon, og store-and-forward-prinsippet — grunnlaget for regne-tvillingen i 1.4.
- **Eksamensbelegg:** Sjanger A, forsinkelse 63 %. «Bytte om transmisjon og propagasjon» er en fast MC-felle. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` de fire forsinkelsestypene. `theorem` **transmisjonstid** `T_trans = L/R` (L i bit, R i bit/s). `theorem` **propagasjon** `T_prop = d/(2·10⁸ m/s)` (uavhengig av L og R). `theorem` **store-and-forward**: en pakkesvitsj mottar hele pakken før den videresender → forsinkelse per link. `theorem` (regne-tvilling 1, oppsett): **linjesvitsjet** = oppsett + L/R + ΣT_prop (uavhengig av antall linker); **pakkesvitsjet (én pakke, n linker)** = n·(L/R) + ΣT_prop. `text` tap = fulle køer. **Symbol-, formel- og protokollapparat:** `T_trans=L/R`, `T_prop=d/(2·10⁸)`, `L`, `R`, `d`, oppsettstid, n linker, bit=byte·8, `2·10⁸ m/s`.
- **Oppgavesjangre:** A (F6/F1). Mønstereksempel (F6, nyskrevne tall): «En fil på 500 KB sendes over 4 linker à R = 1 Mbit/s, hver med propagasjon 5 ms. Regn pakkesvitsjet store-and-forward-tid for én pakke.» → `T_trans = (500·1024·8)/10⁶ = 4,096 s` per link → `4·4,096 s + 4·5 ms = 16,384 + 0,020 = 16,404 s` (vis formel→innsetting med enheter→svar).
- **Typiske feil:** Bytte om transmisjon og propagasjon (§#7); glemme propagasjon (§#3); blande bit og byte; tro propagasjon avhenger av R.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 1.4: DRILL — Forsinkelsesregning (store-and-forward, linje vs. pakke)

- **id:** `ttm4100-1-4` · **number:** 1.4 · **estimatedMinutes:** 80 · **prerequisites:** `ttm4100-1-3` · **kapitteltype:** drill
- **description:** Systematisk drill på regne-tvilling 1: linje- vs. pakkesvitsjet forsinkelse, store-and-forward over n linker, med enheter og metode — de sikreste forsinkelsespoengene.
- **Eksamensbelegg:** Sjanger A, forsinkelse 63 %. «Nesten identisk fra år til år.» Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **konvertér** filstørrelse til bit (byte·8); 2) **linjesvitsjet**: oppsett + L/R + ΣT_prop; 3) **pakkesvitsjet store-and-forward**: n·(L/R) + ΣT_prop (husk å gange transmisjonstiden med antall linker); 4) **propagasjon**: Σ(d_i/(2·10⁸ m/s)); 5) svar med enhet, hold fasitens form. Sensor-kommentert case med margnotat om at store-and-forward-multipliseringen er selve fella og at propagasjon aldri må glemmes. 12–16 oppgaver (F6/F1) som roterer variantene (linje/pakke, ulikt antall linker, med/uten oppsett).
- **Oppgavesjangre:** A. Mønstereksempel (F6): «Samme fil linjesvitsjet med 200 ms oppsett — regn total tid» → oppsett + L/R + ΣT_prop, sammenlign med pakkesvitsjet.
- **Typiske feil:** Glemme å gange med antall linker (§#3); glemme propagasjon; blande bit/byte; regne propagasjon avhengig av R.
- **Quiz: 24 · Flashcards: 8**

**Prøve-kvote Del 1:** 4 prøver (Nettverksgrunnlag og forsinkelse)
1. Prøve 1.A (20 min): Nettverk av nettverk + linje- vs. pakkesvitsjing (E/A, F1/F5).
2. Prøve 1.B (20 min): Lagmodell, PDU-navn og innkapsling (E, F1/F3).
3. Prøve 1.C (25 min): Forsinkelsestyper + store-and-forward-regning (A, F6).
4. Prøve 1.D (25 min): Blandet — linje vs. pakke over n linker med enheter (A, F6/F1).

---

### Del 2 — Applikasjonslaget *(Kurose Ch. 2)*

> Del 2 rommer fagets nest hyppigste tema: **HTTP/web (75 %)** med persistens, caching,
> cookies og nedlastingsregning, pluss **DNS (56 %)** med RR-format. HTTP vs. SMTP og
> sockets er faste MC-feller. Ingen eget drillkapittel (regningen er lettere), men HTTP-
> nedlastingstid drilles i 2.2.

#### Kapittel 2.1: Applikasjonslaget og sockets

- **id:** `ttm4100-2-1` · **number:** 2.1 · **estimatedMinutes:** 45 · **prerequisites:** `ttm4100-1-2` · **kapitteltype:** teori
- **description:** Klient-server vs. P2P-arkitektur, socket-API-et (ServerSocket vs. ConnectionSocket, SOCK_STREAM/SOCK_DGRAM) og hvilke transporttjenester en app trenger (pålitelighet, båndbredde, forsinkelse).
- **Eksamensbelegg:** Sjanger E, sockets 44 %. «SOCK_DGRAM = UDP» er fast MC. Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` klient-server vs. P2P. `definition` **ServerSocket** = velkjent lytteport for oppkoblingsforespørsler; **ConnectionSocket** = opprettes per forbindelse. `theorem` **transporttjeneste-behov**: pålitelighet, throughput, tidskrav, sikkerhet → styrer valg TCP vs. UDP (peker fram til Del 3). `text` SOCK_STREAM = TCP, SOCK_DGRAM = UDP. **Symbol-, formel- og protokollapparat:** socket, port, ServerSocket/ConnectionSocket, SOCK_STREAM/SOCK_DGRAM.
- **Oppgavesjangre:** E (F1/F5). Mønstereksempel (F1): «Hvilken socket opprettes per innkommende forbindelse på en TCP-server?» (ConnectionSocket).
- **Typiske feil:** Blande ServerSocket (lytter) og ConnectionSocket (per forbindelse); tro SOCK_DGRAM = TCP; tro P2P alltid er raskere; tro sockets ligger i transportlaget.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 2.2: HTTP og web-caching

- **id:** `ttm4100-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `ttm4100-2-1` · **kapitteltype:** teori
- **description:** HTTP over TCP: tilstandsløshet, persistent vs. ikke-persistent, GET, cookies (tilstand), web-caching/CDN, og nedlastingstidsregningen (RTT-bidrag per objekt).
- **Eksamensbelegg:** Sjanger E, HTTP **75 %** — fagets nest hyppigste tema. MC (persistens/caching/cookies) + nedlastingsregning. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` HTTP (klient-server, tilstandsløs, over TCP). `theorem` **persistent vs. ikke-persistent**: ikke-persistent = ny TCP-forbindelse per objekt; persistent = én forbindelse for flere objekter. `definition` cookies (tilstand tross tilstandsløs HTTP), web-cache/proxy, CDN (redusér forsinkelse + trafikk). `theorem` (regne, HTTP-nedlasting): **ikke-persistent** = Σ_objekter(oppsett-RTT + forespørsel-RTT + T_trans); **persistent** teller oppsett én gang; **parallell** deler RTT. `text` HTTP GET-formål; conditional GET/caching. **Symbol-, formel- og protokollapparat:** RTT, oppsett-RTT, T_trans, objekt, persistent/ikke-persistent, cache-treff/bom.
- **Oppgavesjangre:** E (F6/F1). Mønstereksempel (F6, nyskrevne tall): «En side har 1 basisobjekt + 5 bilder, RTT = 40 ms, transmisjon neglisjerbar. Regn nedlastingstid ikke-persistent vs. persistent.» → ikke-persistent `= (1+5)·2·RTT = 12·40 ms = 480 ms`; persistent `= 2·RTT (oppsett+basis) + 5·RTT = 7·40 = 280 ms` (vis RTT-bidragene oppdelt).
- **Typiske feil:** Telle oppsett-RTT per objekt i persistent modus; glemme forespørsel-RTT; tro HTTP er tilstandsfullt uten cookies; tro caching endrer innhold (den reduserer forsinkelse/trafikk).
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 2.3: E-post og HTTP vs. SMTP

- **id:** `ttm4100-2-3` · **number:** 2.3 · **estimatedMinutes:** 45 · **prerequisites:** `ttm4100-2-2` · **kapitteltype:** teori
- **description:** SMTP for e-post og den faste sammenligningen HTTP vs. SMTP (push vs. pull, ASCII-hoder, hvem initierer), samt kort om hentprotokoller (IMAP-konseptet, bør kjenne til).
- **Eksamensbelegg:** Sjanger E. «HTTP vs. SMTP» er fast MC-felle. Prioritet: **kunne**. (POP3/IMAP/MIME-detaljer er 2005-nivå — kun konseptet nevnes.)
- **Innholdskontrakt:** `definition` SMTP (push, sender initierer, ASCII). `theorem` **HTTP vs. SMTP**: HTTP = pull (mottaker henter), SMTP = push (sender dytter); begge ASCII-hoder over TCP; HTTP hvert objekt egen respons, SMTP flere objekter i én melding (MIME). `text` hentprotokoll-konseptet (kort, «bør kjenne til»). **Symbol-, formel- og protokollapparat:** push/pull, ASCII-hode, MIME (konsept), TCP-basert.
- **Oppgavesjangre:** E (F1/F5). Mønstereksempel (F1): «HTTP er en pull-protokoll og SMTP en push-protokoll — sant eller usant?» (sant).
- **Typiske feil:** Bytte om push/pull; tro SMTP er binær/ikke over TCP; gå i dybden på POP3/IMAP/base64 (utgått detaljnivå).
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 2.4: DNS — hierarki og resource records

- **id:** `ttm4100-2-4` · **number:** 2.4 · **estimatedMinutes:** 50 · **prerequisites:** `ttm4100-2-1` · **kapitteltype:** teori
- **description:** DNS som distribuert hierarkisk database + applikasjonsprotokoll: root → TLD → autoritativ, iterativ vs. rekursiv oppslag, resource record-formatet (Name, Value, Type, TTL) og registrering av ny server.
- **Eksamensbelegg:** Sjanger E, DNS 56 %. RR-format + tjenester er fast kortsvar (Q2–Q6 i 2024). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` DNS (navn↔IP-oversettelse, alias/CNAME, mailserver/MX, lastfordeling). `theorem` **hierarki**: root → TLD → autoritativ; lokal DNS-server som mellomledd; iterativ vs. rekursiv. `theorem` **resource record** `= (Name, Value, Type, TTL)`; A/NS/CNAME/MX-typene. `text` **ny server via registrar**: legg inn NS + A (+ MX). **Symbol-, formel- og protokollapparat:** RR-format `(Name, Value, Type, TTL)`, A/NS/CNAME/MX, root/TLD/autoritativ, iterativ/rekursiv, TTL.
- **Oppgavesjangre:** E (F4/F5). Mønstereksempel (F4): «Skriv RR-en som knytter aliaset `www.eksempel.no` til det kanoniske navnet.» → `(www.eksempel.no, srv1.eksempel.no, CNAME, TTL)`.
- **Typiske feil:** Blande RR-typene (A vs. CNAME vs. MX vs. NS); tro DNS bare er én sentral server; blande iterativ/rekursiv; glemme TTL-feltet.
- **Quiz: 20 · Flashcards: 18**

**Prøve-kvote Del 2:** 4 prøver (Applikasjonslaget)
1. Prøve 2.A (20 min): Sockets + app-arkitektur + transporttjenestebehov (E, F1/F5).
2. Prøve 2.B (25 min): HTTP persistens/caching/cookies + nedlastingsregning (E, F6/F1).
3. Prøve 2.C (20 min): HTTP vs. SMTP + e-post (E, F1/F5).
4. Prøve 2.D (25 min): DNS-hierarki + RR-format + registrering (E, F4/F5).

---

### Del 3 — Transportlaget *(Kurose Ch. 3 · Nivå 1 — perfekt)*

> Transportlaget er fagets tyngste Nivå 1-blokk: i praksis hvert sett, både MC og
> kortsvar. Her ligger **flyt- vs. overlastkontroll** (fagets viktigste drøfting),
> **TCP vs. UDP**, tre regne-tvillinger (**stop-and-wait**, **seq/ACK**, Internett-
> checksum) og three-way handshake. Fem kapitler med eget drillkapittel (3.5).

#### Kapittel 3.1: Transportlagets tjenester — UDP vs. TCP og checksum

- **id:** `ttm4100-3-1` · **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** `ttm4100-1-2` · **kapitteltype:** teori
- **description:** Transportlagets rolle (multipleksing/demultipleksing via porter), UDP vs. TCP (forbindelsesløs/forbindelsesorientert, hode 8/20 byte, hvilke kontrollmekanismer), og Internett-checksum.
- **Eksamensbelegg:** Sjanger D/C, UDP/TCP 44 % + checksum 31 %, men MC-fellene er faste hvert år. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` multipleksing/demultipleksing (portnumre). `theorem` **momentliste «TCP vs. UDP»** (seks momenter): (1) UDP forbindelsesløs / TCP forbindelsesorientert (three-way handshake); (2) UDP ingen oppsett / TCP oppsett; (3) UDP-hode 8 byte / TCP-hode 20 byte; (4) TCP har flyt- **og** overlastkontroll, UDP ingen; (5) **begge** har checksum; (6) bruk UDP: sanntid/tap-tolerant, DNS, mindre overhead. `theorem` **Internett-checksum**: summér 16-bits ord med wrap-around (end-around carry), ta 1-komplement; mottaker summerer alt → 0 ved feilfritt. **Symbol-, formel- og protokollapparat:** portnummer, UDP-hode (8 byte), TCP-hode (20 byte), checksum, 16-bits ords-sum, wrap-around, 1-komplement.
- **Oppgavesjangre:** D/C (F1/F2/F6). Mønstereksempel (F2): «Kryss av alle SANNE påstander om UDP.» — forbindelsesløs ✓, hode 8 byte ✓, har checksum ✓; (har overlastkontroll ✗, har oppsett ✗). Checksum-regne (F6): summér to 16-bits ord med wrap-around.
- **Typiske feil:** Tro UDP har oppsett/overlastkontroll (§#2); tro TCP mangler checksum eller er upålitelig/simplex (§#2); tro TCP og UDP har ulik checksum (§#11); tro TCP-hode er 8 byte.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 3.2: Pålitelig dataoverføring og stop-and-wait

- **id:** `ttm4100-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `ttm4100-3-1` · **kapitteltype:** teori
- **description:** Prinsippene for pålitelig overføring (ACK, sekvensnummer, timeout, retransmisjon), stop-and-wait vs. pipelining, og utilization-regningen som viser hvor dårlig en rask link utnyttes over lang avstand.
- **Eksamensbelegg:** Sjanger A/D, stop-and-wait 25 %. Regne-tvilling — «illustrerer dårlig utnyttelse». Prioritet: **perfekt** (regnedelen).
- **Innholdskontrakt:** `definition` ACK, sekvensnummer, timeout/retransmisjon, stop-and-wait vs. pipelining (Go-Back-N/selective repeat-konseptet, kort). `theorem` (regne-tvilling 5a): **stop-and-wait utilization** `U = T_trans/(T_trans + 2·T_prop)`; **maks datarate = U·R**. `text` intuisjon: senderen venter en full RTT per pakke → rask link står stille. **Symbol-, formel- og protokollapparat:** `U`, `T_trans`, `T_prop`, RTT `= 2·T_prop`, maks datarate `= U·R`, ACK, sekvensnummer.
- **Oppgavesjangre:** A/D (F6/F1). Mønstereksempel (F6, nyskrevne tall): «R = 10 Mbit/s, pakke L = 8000 bit, T_prop = 15 ms. Regn U og maks datarate.» → `T_trans = 8000/10⁷ = 0,8 ms`; `U = 0,8/(0,8 + 30) = 0,026`; maks datarate `= 0,026·10 Mbit/s ≈ 260 kbit/s` (vis formel→innsetting med enheter→svar).
- **Typiske feil:** Bruke `T_prop` i stedet for `2·T_prop` i nevneren; glemme å gange U med R for datarate; blande bit/byte; tro stop-and-wait utnytter en rask link godt.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 3.3: TCP-forbindelsen — handshake og seq/ACK-aritmetikk

- **id:** `ttm4100-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `ttm4100-3-1` · **kapitteltype:** teori
- **description:** TCP-forbindelsesoppsett (three-way handshake), sekvens- og kvitteringsnummer, kumulativ ACK og seq/ACK-aritmetikken — regne-tvilling 6, også kjernen i Wireshark-trace-lesing.
- **Eksamensbelegg:** Sjanger D/I, TCP-oppsett 56 %. Fast regne-/trace-tema. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **three-way handshake**: SYN (seq = x) / SYN-ACK (seq = y, ack = x+1) / ACK (ack = y+1). `theorem` (regne-tvilling 6): **seq/ACK-aritmetikk**: neste seq = forrige seq + antall databyte; **kumulativ ACK** = første ikke-mottatte byte (venter på hull ved reordering). `theorem` (Wireshark-kobling): i trace har SYN/SYN-ACK **seq = 0**; kumulativ ACK − initiell seq = mottatte databyte. `text` forbindelsesnedbygging (kort). **Symbol-, formel- og protokollapparat:** seq, ack, SYN/SYN-ACK/ACK, databyte, kumulativ ACK, `neste seq = seq + len`.
- **Oppgavesjangre:** D/I (F4/F6). Mønstereksempel (F4, nyskrevne tall): «A sender segment med seq = 500 og 200 databyte. Hva blir Bs ACK-nummer, og hvilken seq har As neste segment?» → ACK = 700; neste seq = 700.
- **Typiske feil:** Regne kumulativ ACK som siste mottatte i stedet for første ikke-mottatte; feil `+1` i handshake (ack = x+1); glemme at seq teller byte, ikke segmenter; tro seq/ack starter på 1 i trace (starter effektivt på 0).
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 3.4: Flytkontroll vs. overlastkontroll

- **id:** `ttm4100-3-4` · **number:** 3.4 · **estimatedMinutes:** 55 · **prerequisites:** `ttm4100-3-3` · **kapitteltype:** teori
- **description:** Fagets viktigste drøfting: flytkontroll (beskytter mottakerbufferen, rwnd) vs. overlastkontroll (beskytter nettet, slow start/congestion avoidance/fast recovery, AIMD) — hva, hvor og hvilket lag.
- **Eksamensbelegg:** Sjanger D, flyt 63 % + overlast 63 %, «nesten alltid paret». **Kjernemomentet er skillet.** Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **momentliste «flytkontroll vs. overlastkontroll»**: (1) flytkontroll beskytter **mottakerens buffer** (ende-til-ende, sender+mottaker); (2) overlastkontroll beskytter **nettet**; (3) TCP gjør begge ende-til-ende ut fra observerte tap/forsinkelser; (4) lag: flytkontroll finnes i transport- **og** lenkelaget, overlastkontroll i transportlaget assistert av nettverkslaget; (5) fella: å forveksle de to. `theorem` **TCP-flytkontroll konkret**: mottakervindu **rwnd**, oppdatert via kumulative kvitteringer; rwnd = 0 → sender én-byte-prober. `theorem` **overlastkontroll**: slow start → congestion avoidance → fast recovery; **AIMD** («sagtann»). **Symbol-, formel- og protokollapparat:** rwnd, cwnd (konsept), AIMD, slow start/congestion avoidance/fast recovery, én-byte-prober.
- **Oppgavesjangre:** D (F5/F1). Mønstereksempel (F5): «Forklar forskjellen på flyt- og overlastkontroll i maks tre setninger.» → flyt = mottakerbuffer (ende-til-ende); overlast = nettet; TCP gjør begge — nøyaktig tre momenter, KORT.
- **Typiske feil:** Forveksle flyt og overlast (§#1) — fagets vanligste feil; tro UDP har overlastkontroll; skrive essay på en 3-setnings-drøfting; tro overlastkontroll bare ligger i nettverkslaget.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 3.5: DRILL — Transportregning: seq/ACK, stop-and-wait og checksum

- **id:** `ttm4100-3-5` · **number:** 3.5 · **estimatedMinutes:** 85 · **prerequisites:** `ttm4100-3-4` · **kapitteltype:** drill
- **description:** Full drill på transportlagets tre regne-tvillinger: TCP seq/ACK-aritmetikk (inkl. trace), stop-and-wait utilization, og Internett-checksum — med metode og enheter.
- **Eksamensbelegg:** Sjanger D/A/C/I. Prioritet: **perfekt**. Speiler Q2/Q6 (flyt/overlast + regne) i C-formatet.
- **Innholdskontrakt (løsningsoppskrift):** 1) **seq/ACK**: neste seq = seq + databyte, kumulativ ACK = første ikke-mottatte byte; i trace SYN = seq 0; 2) **stop-and-wait**: `U = T_trans/(T_trans + 2T_prop)`, maks datarate = U·R; 3) **checksum**: summér 16-bits ord med wrap-around, 1-komplement, mottaker → 0. Sensor-kommentert case med margnotat om `2·T_prop`-fella, kumulativ-ACK-fella og enhetskravet. 12–16 oppgaver (F4/F6) som roterer alle tre tvillingene.
- **Oppgavesjangre:** D/A/C. Mønstereksempel (F6): «Regn U for en satellittlink (T_prop = 250 ms) med R = 1 Mbit/s og L = 10000 bit.» → `T_trans = 0,01 s`; `U = 0,01/(0,01+0,5) ≈ 0,0196`.
- **Typiske feil:** `T_prop` i stedet for `2·T_prop`; kumulativ ACK feil; glemme wrap-around i checksum; mangle enheter/metode.
- **Quiz: 24 · Flashcards: 8**

**Prøve-kvote Del 3:** 4 prøver (Transportlaget)
1. Prøve 3.A (25 min): UDP vs. TCP-momentliste + checksum-regning (D/C, F2/F6).
2. Prøve 3.B (25 min): Pålitelig overføring + stop-and-wait utilization (A/D, F6).
3. Prøve 3.C (25 min): Three-way handshake + seq/ACK-aritmetikk (D/I, F4/F6).
4. Prøve 3.D (25 min): Flyt- vs. overlastkontroll-momentliste (kort) (D, F5/F1).

---

### Del 4 — Nettverkslaget *(Kurose Ch. 4&5)*

> Del 4 rommer den sikreste regnepoengkilden på nettverkslaget: **subnetting/VLSM
> (69 %)**, alltid som regning. Pluss IP-adressering (IPv4 32 bit / IPv6 128 bit — fast
> MC-felle), lengste-prefiks-match, NAT og ICMP. Kapittel 4.5 er drillkapitlet.

#### Kapittel 4.1: Nettverkslaget — videresending vs. ruting og tjenestemodell

- **id:** `ttm4100-4-1` · **number:** 4.1 · **estimatedMinutes:** 45 · **prerequisites:** `ttm4100-1-2` · **kapitteltype:** teori
- **description:** Data-plane vs. control-plane, videresending (lokal, per pakke) vs. ruting (nettomfattende, bygger tabellen), og Internetts best-effort-tjenestemodell (vs. QoS).
- **Eksamensbelegg:** Sjanger F-slekt, ruting/videresending 38 %, best-effort/QoS i MC. «Bytte om propagasjon og transmisjon i QoS-definisjonene» er fast MC-felle. Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **videresending** (data-plane, lokal, per pakke) vs. **ruting** (control-plane, nettomfattende, bygger videresendingstabellen). `definition` best-effort (ingen garantier) vs. QoS-konseptet. `text` pakketap i svitsjematrise (kort). **Symbol-, formel- og protokollapparat:** data-/control-plane, videresendingstabell, best-effort, QoS.
- **Oppgavesjangre:** F (F1/F3). Mønstereksempel (F1): «Videresending hører til data-plane, ruting til control-plane — sant eller usant?» (sant).
- **Typiske feil:** Blande videresending (lokal) og ruting (nettomfattende); tro best-effort gir garantier; bytte om propagasjon/transmisjon i QoS (§#7).
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 4.2: IP-adressering — IPv4, CIDR, subnett og IPv6

- **id:** `ttm4100-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `ttm4100-4-1` · **kapitteltype:** teori
- **description:** IPv4-adressen (32 bit, punktdesimal), nettmaske/prefiks (CIDR), subnett = IP AND maske, og IPv4 vs. IPv6-fakta (128 bit, ingen hode-checksum, ingen ruter-fragmentering) — grunnlaget for subnetting-regningen.
- **Eksamensbelegg:** Sjanger B, IP-adressering 69 %. IPv4/IPv6-fakta er fast MC-felle. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` IPv4-adresse (32 bit, fire oktetter), prefiks `/n`, nettmaske. `theorem` **subnett = IP AND maske** (binært, bitvis AND). `theorem` **IPv4/IPv6-fakta**: IPv4 = **32 bit**, IPv6 = **128 bit**; IPv6-hode har **ingen checksum**; IPv6-rutere **fragmenterer ikke** (dropper + «Packet Too Big»/ICMP). `text` fragmentering (IPv4 vs. IPv6, reassemblering i endesystem — kort). **Symbol-, formel- og protokollapparat:** 32-/128-bits adresse, `/n`-prefiks, nettmaske, bitvis AND, oktett, punktdesimal.
- **Oppgavesjangre:** B (F6/F1). Mønstereksempel (F6, nyskrevne tall): «Gitt IP 172.16.20.130 og maske /25, finn subnettadressen (bitvis AND).» → `172.16.20.128`.
- **Typiske feil:** Tro IPv4 = 48/64 bit eller IPv6 = 132/256 bit (§#6); tro IPv6-hode har checksum eller at IPv6-rutere fragmenterer (§#6); feil oktett i bitvis AND.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.3: Subnetting, VLSM og behovsdimensjonering

- **id:** `ttm4100-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `ttm4100-4-2` · **kapitteltype:** teori
- **description:** Regne-tvilling 2: del et adresseområde i subnett med ulike behov (VLSM), velg minste prefiks som dekker kravet, og dimensjonér etter antall verter — den sikreste poengkilden på nettverkslaget.
- **Eksamensbelegg:** Sjanger B, 69 %, alltid som regning. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` (regne-tvilling 2): **brukbare adresser i /n** `= 2^{32−n} − 2` (nett- og broadcast-adressen trekkes fra). `theorem` **VLSM**: tildel **størst subnett først**, velg minste prefiks `/n` som dekker behovet, ingen overlapp. `theorem` **behovsdimensjonering**: for ~V verter, velg minste `/n` med `2^{32−n} − 2 ≥ V`. **Symbol-, formel- og protokollapparat:** `2^{32−n} − 2`, VLSM, prefiks `/n`, nett-/broadcast-adresse, subnettadresse.
- **Oppgavesjangre:** B (F6/F4). Mønstereksempel (F6, nyskrevne tall): «Del 10.20.0.0/20 i subnett for ADM ≥ 1000, SAL ≥ 500, DRIFT ≥ 200 verter. Tildel størst først.» → ADM `/22` (1022 brukbare), SAL `/23` (510), DRIFT `/24` (254); vis `2^{32−n} − 2`-utregningen for hvert.
- **Typiske feil:** Glemme å trekke fra nett-/broadcast-adressen (§#8); velge for lite prefiks; ikke tildele størst først (overlapp); regne `2^{32−n}` uten `−2`.
- **Quiz: 20 · Flashcards: 16**

#### Kapittel 4.4: IP-videresending — lengste-prefiks-match, NAT og ICMP

- **id:** `ttm4100-4-4` · **number:** 4.4 · **estimatedMinutes:** 50 · **prerequisites:** `ttm4100-4-2` · **kapitteltype:** teori
- **description:** Videresendingstabell-oppslag via lengste-prefiks-match, NAT (adressedeling, port-oversettelse) og ICMP (feilmeldinger, echo) — voksende MC-temaer i C-formatet.
- **Eksamensbelegg:** Sjanger B/F, lengste-prefiks + NAT/ICMP voksende i MC-blokken. Prioritet: **kunne**.
- **Innholdskontrakt:** `theorem` **lengste-prefiks-match**: ekspandér riktig oktett binært, match lengste prefiks mot destinasjon → interface; ellers default. `definition` **NAT** (privat↔offentlig adresse, port-oversettelse, adressedeling). `definition` **ICMP** (feil-/kontrollmeldinger: echo/ping, «Packet Too Big», Time Exceeded). **Symbol-, formel- og protokollapparat:** videresendingstabell, lengste-prefiks-match, interface, default-rute, NAT-tabell, ICMP-meldingstyper.
- **Oppgavesjangre:** B/F (F4/F1). Mønstereksempel (F4): «Gitt en videresendingstabell med prefiksene /21, /24, /26 — hvilket interface for destinasjon X?» → match lengste prefiks.
- **Typiske feil:** Velge kortere prefiks når et lengre matcher; feil oktett-ekspansjon (§#8); tro NAT er en sikkerhetsmekanisme; blande ICMP og TCP/UDP.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.5: DRILL — Subnetting, VLSM og lengste-prefiks-match

- **id:** `ttm4100-4-5` · **number:** 4.5 · **estimatedMinutes:** 85 · **prerequisites:** `ttm4100-4-4` · **kapitteltype:** drill
- **description:** Full drill på regne-tvilling 2: subnett fra IP+maske, VLSM-oppdeling med størst-først, behovsdimensjonering og lengste-prefiks-oppslag — de sikreste poengene på nettverkslaget.
- **Eksamensbelegg:** Sjanger B, 69 %. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **subnett fra IP+maske**: skriv binært, bitvis AND; 2) **VLSM**: sortér behov, tildel størst først, minste prefiks med `2^{32−n} − 2 ≥ behov`; 3) **behovsdimensjonering**: minste `/n` som holder; 4) **lengste-prefiks-match**: ekspandér oktett, match lengste prefiks. Sensor-kommentert case med margnotat om `−2`-fella og størst-først-regelen. 12–16 oppgaver (F6/F4) som roterer variantene.
- **Oppgavesjangre:** B. Mønstereksempel (F4, nyskrevne tall): «IP 192.168.5.201 med /27 → oppgi subnettadressen.» → `192.168.5.192`.
- **Typiske feil:** Glemme `−2`; velge for lite prefiks; feil oktett-ekspansjon; ikke tildele størst først.
- **Quiz: 24 · Flashcards: 8**

**Prøve-kvote Del 4:** 4 prøver (Nettverkslaget)
1. Prøve 4.A (20 min): Videresending vs. ruting + best-effort/QoS (F, F1/F3).
2. Prøve 4.B (25 min): IPv4/IPv6-fakta + subnett via bitvis AND (B, F6/F1).
3. Prøve 4.C (25 min): VLSM-oppdeling + behovsdimensjonering (B, F6/F4).
4. Prøve 4.D (25 min): Lengste-prefiks-match + NAT/ICMP (B/F, F4/F1).

---

### Del 5 — Lenkelaget og lokalnett *(Kurose Ch. 6)*

> Del 5 er tung på regne-tvillinger og «X vs. Y»-drøftinger: **CRC-langdivisjon (63 %)**,
> **2D-paritet (56 %)**, **multippel aksess (69 %)** med CSMA/CD vs. CA og polling-
> throughput, **svitsj vs. ruter (63 %)** med ARP, og **802.11 (63 %)**. Fem kapitler med
> eget drillkapittel (5.5).

#### Kapittel 5.1: Lenkelagets tjenester og feildeteksjon — paritet og CRC

- **id:** `ttm4100-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `ttm4100-1-2` · **kapitteltype:** teori
- **description:** Lenkelagets oppgaver (rammer, feildeteksjon) og de to regne-tvillingene i feildeteksjon: CRC-langdivisjon (modulo-2) og 2D-paritet (lokalisér/rett én bitfeil).
- **Eksamensbelegg:** Sjanger C, CRC 63 % + paritet 56 %. Fast regne-MC og kortsvar. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` (regne-tvilling 3): **CRC**: legg `r = len(G) − 1` nuller på D, gjør **modulo-2-divisjon (XOR)** med generator G, rest R = sjekksum; send D‖R; mottaker får rest 0 ved feilfritt. `theorem` (regne-tvilling 4): **2D even parity**: rad- + kolonneparitet; **korrigerer 1 bitfeil** (rad+kolonne-mismatch krysser i feilbiten), **detekterer 2**. `theorem` **nyanse**: CRC er **ikke** en sikkerhetsmekanisme — algoritmen er kjent, en mellommann kan endre data og regne ny CRC. **Symbol-, formel- og protokollapparat:** D (data), G (generator), R (rest), `r = len(G)−1`, modulo-2/XOR, even parity, rad-/kolonneparitet.
- **Oppgavesjangre:** C (F6/F4). Mønstereksempel (F6, nyskrevne tall): «D = 110101, G = 1011 → finn CRC-resten R (vis langdivisjonen).» → legg 3 nuller, XOR-divisjon, R = 3-bits rest.
- **Typiske feil:** Glemme at mottaker skal få rest 0 (§#9); tro 2D-paritet korrigerer mer enn én bitfeil (§#9); tro CRC er en sikkerhetsmekanisme (§#9); feil antall nuller (`r = len(G)−1`).
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 5.2: Multippel aksess — CSMA/CD vs. CSMA/CA og polling

- **id:** `ttm4100-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `ttm4100-5-1` · **kapitteltype:** teori
- **description:** Multiaksessproblemet og protokollklassene (partisjonering/tilfeldig/turordning): Aloha, CSMA/CD vs. CSMA/CA, polling — pluss polling-throughput-regningen (regne-tvilling 5b).
- **Eksamensbelegg:** Sjanger F, multiaksess **69 %**, både MC og throughput-regning. Polling 25 %. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **momentliste «CSMA/CD vs. CSMA/CA»**: (1) forklar akronymene (CS/MA/CD/CA); (2) **CD** sender straks ved ledig medium, oppdager kollisjon under sending (kablet Ethernet); (3) **CA** trekker **backoff** (teller ned kun når mediet er ledig) + bruker eksplisitt **ACK** + interframe-mellomrom (trådløst, kollisjon kan ikke detekteres); (4) **CSMA/CD hører ikke hjemme i 802.11**; (5) fella: plassere CD i trådløst. `theorem` (regne-tvilling 5b): **polling-throughput** maks `= R/(1 + dR/Q)` (d = polling-forsinkelse per node, Q = bit per node per runde; N faller ut). `text` slotted-argumenter (2L/T, L/T, 2L/3T — kort). **Symbol-, formel- og protokollapparat:** CS/MA/CD/CA, backoff, ACK, SIFS/DIFS, `R/(1 + dR/Q)`, d, Q.
- **Oppgavesjangre:** F/A (F5/F6). Mønstereksempel (F6, nyskrevne tall): «Utled polling-throughput for R = 2 Mbit/s, d = 0,5 ms, Q = 2000 bit.» → `R/(1 + dR/Q)`, sett inn, svar. Kortsvar (F5): forklar CSMA/CD vs. CA i tre setninger.
- **Typiske feil:** Plassere CSMA/CD i 802.11 (§#4); liste SIFS/HSS som CD-element; feil i polling-formelen; skrive essay på CD/CA-drøftingen.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 5.3: Svitsjet LAN — Ethernet, ARP og svitsj vs. ruter

- **id:** `ttm4100-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `ttm4100-5-2` · **kapitteltype:** teori
- **description:** MAC-adresser, den selvlærende transparente lenkelagssvitsjen, ARP (IP↔MAC lokalt), og den faste drøftingen svitsj vs. ruter.
- **Eksamensbelegg:** Sjanger F, svitsj/ruter 63 %, «ofte paret med ARP». Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` MAC-adresse, Ethernet-ramme. `theorem` **momentliste «svitsj vs. ruter»**: (1) svitsj = lenkelag, videresender/filtrerer på **MAC-adresser**; (2) svitsjetabell er **selvlærende, selvkonfigurerende, transparent**; (3) svitsj har **ingen egen IP-adresse**; (4) ruter = nettverkslag, opererer på **IP**; (5) fella: tro en svitsj har IP / ikke er transparent. `theorem` **ARP**: oversetter **IP↔MAC lokalt** (tabeller i host/ruter-minne) — **ikke** IP↔vertsnavn. **Symbol-, formel- og protokollapparat:** MAC-adresse, svitsjetabell (selvlærende/transparent), ARP-tabell, IP↔MAC.
- **Oppgavesjangre:** F (F1/F5). Mønstereksempel (F1): «En lenkelagssvitsj har sin egen IP-adresse — sant eller usant?» (usant — transparent).
- **Typiske feil:** Tro en svitsj har IP-adresse (§#10); tro ARP mapper til vertsnavn (§#10 — det er IP↔MAC); blande svitsj (MAC) og ruter (IP); tro svitsjetabellen må konfigureres manuelt.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 5.4: Trådløst 802.11

- **id:** `ttm4100-5-4` · **number:** 5.4 · **estimatedMinutes:** 50 · **prerequisites:** `ttm4100-5-2` · **kapitteltype:** teori
- **description:** 802.11-MAC (CSMA/CA, RTS/CTS, ACK, DIFS/SIFS), skjult-terminal-problemet, infrastruktur- vs. ad hoc-modus og de fire adressefeltene i 802.11-rammen.
- **Eksamensbelegg:** Sjanger F/G, 802.11 63 %. Adressefelt + RTS/CTS er faste MC. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **802.11-MAC**: CSMA/CA + eksplisitt ACK; **SIFS < DIFS** gir ACK prioritet; **RTS/CTS** løser **skjult terminal** (kun for lange rammer pga. overhead). `theorem` **802.11-ramme (fire adressefelt)**: adresse 1/2 = destinasjon/kilde (host eller AP), adresse 3 = MAC til ruter-interfacet AP-en henger på. `definition` infrastruktur- vs. ad hoc-modus. `text` overlappende 802.11-nett (kort). **Symbol-, formel- og protokollapparat:** CSMA/CA, RTS/CTS, ACK, SIFS/DIFS, fire adressefelt, infrastruktur/ad hoc, skjult terminal.
- **Oppgavesjangre:** F/G (F1/F3). Mønstereksempel (F3): «Match: RTS/CTS ↔ ?, SIFS < DIFS ↔ ?» (skjult terminal / ACK-prioritet).
- **Typiske feil:** Plassere CSMA/CD i 802.11 (§#4); feil rekkefølge SIFS/DIFS; tro RTS/CTS brukes for alle rammer (kun lange); blande de fire adressefeltene.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 5.5: DRILL — CRC, 2D-paritet og multiaksess-throughput

- **id:** `ttm4100-5-5` · **number:** 5.5 · **estimatedMinutes:** 85 · **prerequisites:** `ttm4100-5-4` · **kapitteltype:** drill
- **description:** Full drill på lenkelagets regne-tvillinger: CRC-langdivisjon (finn R), 2D-paritet (lokalisér/rett/fyll inn), og polling/slotted-throughput — med metode.
- **Eksamensbelegg:** Sjanger C/F, CRC 63 % / paritet 56 % / multiaksess 69 %. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **CRC**: legg `r = len(G)−1` nuller, modulo-2-divisjon (XOR), rest R; verifisér mottaker → 0; 2) **2D-paritet**: regn rad- og kolonneparitet, kryss rad+kolonne-mismatch for å lokalisere/rette feilbiten; 3) **polling**: `R/(1 + dR/Q)`, sett inn med enheter. Sensor-kommentert case med margnotat om nuller-antallet i CRC, kryssingsregelen i 2D-paritet og enhetskravet. 12–16 oppgaver (F6/F4) som roterer variantene («hvilken matrise er korrekt», «fyll inn paritetsbit», «lokalisér feilen», CRC-rest, polling).
- **Oppgavesjangre:** C/F. Mønstereksempel (F4): «I en 2D-paritetsmatrise er rad 3 og kolonne 5 i mismatch — hvor er feilbiten?» → (rad 3, kolonne 5).
- **Typiske feil:** Feil antall nuller i CRC; glemme mottaker-rest-0-sjekken; tro 2D-paritet retter to feil; feil i polling-formelen; mangle enheter.
- **Quiz: 24 · Flashcards: 8**

**Prøve-kvote Del 5:** 4 prøver (Lenkelaget og lokalnett)
1. Prøve 5.A (25 min): CRC-langdivisjon + 2D-paritet + checksum-nyanse (C, F6/F4).
2. Prøve 5.B (25 min): CSMA/CD vs. CSMA/CA-momentliste + polling-throughput (F/A, F5/F6).
3. Prøve 5.C (20 min): Svitsj vs. ruter + ARP (F, F1/F5).
4. Prøve 5.D (25 min): 802.11 — RTS/CTS, SIFS/DIFS, adressefelt, infrastruktur/ad hoc (F/G, F1/F3).

---

### Del 6 — Multimedia og trådløst/mobilt *(Kurose Ch. 7/8)*

> Del 6 dekker **multimedia/VoIP (69 %, Nivå 2)**: streaming vs. interaktiv, jitter/
> buffring, og den faste **FEC vs. interleaving**-drøftingen. Ingen tung regning →
> to kompakte kapitler. Mobilt (3G/4G) er «bør kjenne til».

#### Kapittel 6.1: Multimedia og VoIP — streaming vs. interaktiv

- **id:** `ttm4100-6-1` · **number:** 6.1 · **estimatedMinutes:** 45 · **prerequisites:** `ttm4100-3-1` · **kapitteltype:** teori
- **description:** Multimediaklassene (lagret/streaming vs. interaktiv tale/video), jitter og avspillingsbuffer, og hvorfor UDP ofte foretrekkes for sanntid.
- **Eksamensbelegg:** Sjanger G, multimedia 69 %. Streaming vs. interaktiv er fast drøfting. Prioritet: **kunne**.
- **Innholdskontrakt:** `theorem` **momentliste «streaming vs. interaktiv media»**: (1) lagret/streaming = én vei, tåler buffring/forsinkelse; (2) interaktiv tale/video = to veier, stramt sanntidskrav, tåler litt tap men lite forsinkelse; (3) skillet = forsinkelsestoleranse vs. sanntidskrav; (4) eksempel: video-on-demand vs. VoIP-samtale; (5) fella: tro interaktiv media tåler stor buffring. `definition` **jitter** = variasjon i pakkeforsinkelse; fjernes i mottaker via **avspillingsbuffer**. `text` UDP for sanntid (ingen oppsett, mindre overhead). **Symbol-, formel- og protokollapparat:** jitter, avspillingsbuffer, sanntidskrav, streaming/interaktiv.
- **Oppgavesjangre:** G (F1/F5). Mønstereksempel (F5): «Hvorfor tåler streaming mer forsinkelse enn en VoIP-samtale? (maks 3 setninger)» → én vei vs. to veier + buffring.
- **Typiske feil:** Tro interaktiv media tåler stor buffring; blande jitter (variasjon) og forsinkelse (nivå); tro TCP alltid er best for sanntid.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 6.2: Tapshåndtering — FEC vs. interleaving (+ mobilt)

- **id:** `ttm4100-6-2` · **number:** 6.2 · **estimatedMinutes:** 45 · **prerequisites:** `ttm4100-6-1` · **kapitteltype:** teori
- **description:** De tre tapshåndteringsmetodene (FEC med XOR, FEC med lav-rate ekstrastrøm, interleaving) sammenlignet på overhead vs. forsinkelse, pluss en kort «bør kjenne til»-oversikt over mobilt (3G/4G, all-IP, OFDM).
- **Eksamensbelegg:** Sjanger G, «fast FEC vs. interleaving-drøfting». Mobilt er lavfrekvent (Nivå 3). Prioritet: FEC/interleaving **kunne**, mobilt **kjenne** (merkes «bør kjenne til», sist).
- **Innholdskontrakt:** `theorem` **momentliste «FEC vs. interleaving»** (tre metoder): (1) **FEC med XOR** — rekonstruér tapt pakke, koster **kapasitet/overhead**; (2) **FEC med lav-rate ekstrastrøm** — erstatt tapt med lavere kvalitet; (3) **interleaving** — spre tap utover, koster **forsinkelse**, uegnet for interaktivt; (4) *error concealment* godtas som tredje metode; (5) sammenlign alltid på **overhead vs. forsinkelse**. `text` (bør kjenne til) mobilt: 3G vs. 4G (all-IP-kjerne, OFDM-radio), LTE-kjernefunksjoner (HSS) — kort, merket. **Symbol-, formel- og protokollapparat:** FEC, XOR, interleaving, error concealment, overhead vs. forsinkelse.
- **Oppgavesjangre:** G (F5/F1). Mønstereksempel (F5): «Nevn to tapshåndteringsmetoder for VoIP og hva de koster.» → FEC (kapasitet) + interleaving (forsinkelse).
- **Typiske feil:** Tro interleaving passer interaktiv media (den øker forsinkelse); blande de to FEC-variantene; glemme overhead/forsinkelse-avveiningen; gå i dybden på 3G/4G (Nivå 3).
- **Quiz: 18 · Flashcards: 18**

**Prøve-kvote Del 6:** 4 prøver (Multimedia og trådløst/mobilt)
1. Prøve 6.A (20 min): Streaming vs. interaktiv + jitter/buffring (G, F1/F5).
2. Prøve 6.B (20 min): FEC vs. interleaving-momentliste (G, F5/F1).
3. Prøve 6.C (20 min): Multimedia-transportvalg (UDP for sanntid) (G/D, F1/F5).
4. Prøve 6.D (20 min): Blandet multimedia + mobilt «bør kjenne til» (G, F1/F3).

---

### Del 7 — Nettverkssikkerhet *(Kurose Ch. 8 · topptema 94 % · Nivå 1)*

> Sikkerhet er fagets **hyppigste tema (94 %)** — fast innslag hvert år, ofte egen del +
> MC-feller. Fem kapitler: symmetrisk/offentlig nøkkel + Caesar (regne), signatur/
> sertifikat, SSL/TLS (sikrer TCP), brannmur (tre typer), og eget drillkapittel (7.5) for
> momentlistene og Caesar.

#### Kapittel 7.1: Kryptografi — symmetrisk vs. offentlig nøkkel og Caesar

- **id:** `ttm4100-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `ttm4100-1-2` · **kapitteltype:** teori
- **description:** Kryptografiens grunnprinsipp (algoritmen antas kjent, sikkerheten ligger i nøkkelen), symmetrisk vs. offentlig nøkkel, og Caesar-chifferet som liten regne-MC.
- **Eksamensbelegg:** Sjanger H, topptema 94 %. Symmetrisk/offentlig er fast MC + drøfting. Caesar 3 %↑ (regne-MC). Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **momentliste «symmetrisk vs. offentlig nøkkel»**: (1) algoritmen antas kjent, sikkerheten ligger i **nøkkelen**; (2) symmetrisk = **delt hemmelig nøkkel** (utfordring: nøkkeldistribusjon); (3) offentlig nøkkel = **nøkkelpar**; (4) krypter med **mottakers offentlige nøkkel**; (5) fella: kalle offentlig-nøkkel-krypto «symmetrisk». `theorem` (regne): **Caesar** `c = (m + k) mod 26` (norsk 29); «finn nøkkelen» = tell skiftet. **Symbol-, formel- og protokollapparat:** symmetrisk/offentlig nøkkel, nøkkelpar, delt hemmelig nøkkel, Caesar `c = (m + k) mod 26`, alfabetlengde.
- **Oppgavesjangre:** H (F1/F6/F5). Mønstereksempel (F6, nyskrevne tall): «Klartekst `KATT` med Caesar-nøkkel k = 4 (26-bokstavs alfabet) → chiffer?» → skift hver bokstav +4.
- **Typiske feil:** Kalle offentlig-nøkkel-krypto «symmetrisk» (§#5); tro symmetrisk bruker nøkkelpar; kryptere med egen offentlig nøkkel i stedet for mottakers; feil modulo i Caesar.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 7.2: Integritet og autentisering — signatur og sertifikat

- **id:** `ttm4100-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `ttm4100-7-1` · **kapitteltype:** teori
- **description:** Hash/MAC for integritet, digital signatur (krypter hash med avsenders private nøkkel), og sertifikat/CA som garanterer at en offentlig nøkkel tilhører rett part.
- **Eksamensbelegg:** Sjanger H, topptema 94 %. «Signere med feil nøkkel» er fast MC-felle. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` hash/MAC (integritet). `theorem` **digital signatur**: krypter (hash/MAC av) dokumentet med **avsenders private nøkkel**; verifiseres med **offentlig nøkkel**; i praksis signeres en hash (ytelse). `theorem` **sertifikat/CA**: en CA garanterer at en offentlig nøkkel tilhører rett part. `text` nonce mot replay. **Symbol-, formel- og protokollapparat:** hash, MAC, digital signatur, privat/offentlig nøkkel, CA, sertifikat, nonce.
- **Oppgavesjangre:** H (F1/F5). Mønstereksempel (F1): «Med hvilken nøkkel signerer avsender et dokument?» (avsenders **private** nøkkel).
- **Typiske feil:** Signere med feil nøkkel — signér med **privat** (§#5); tro sertifikat krypterer data (det garanterer eierskap); tro hele dokumentet krypteres (en hash signeres); glemme nonce mot replay.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 7.3: Sikker kommunikasjon i praksis — SSL/TLS

- **id:** `ttm4100-7-3` · **number:** 7.3 · **estimatedMinutes:** 45 · **prerequisites:** `ttm4100-7-2` · **kapitteltype:** teori
- **description:** SSL/TLS: sikrer TCP (ikke IP), fasene (handshake / nøkkelutledning / dataoverføring), nonce mot replay, MAC for integritet — og koblingen til SSL-records i Wireshark-trace.
- **Eksamensbelegg:** Sjanger H/I, SSL/TLS + Wireshark voksende (fast i 2023/2024). «SSL sikrer IP» er fast MC-felle. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **SSL/TLS sikrer TCP** (ikke IP). `theorem` faser: handshake → nøkkelutledning → dataoverføring; nonce mot replay; MAC for integritet. `theorem` (Wireshark-kobling): telle SSL-records i en pakke, identifisere kryptert master-secret, hvilke pakker bærer kryptert brukerdata. **Symbol-, formel- og protokollapparat:** SSL/TLS, handshake, master-secret, MAC, nonce, SSL-record, sikrer TCP.
- **Oppgavesjangre:** H/I (F1/F4). Mønstereksempel (F1): «SSL/TLS sikrer IP-laget — sant eller usant?» (usant — sikrer TCP).
- **Typiske feil:** «SSL sikrer IP» (§#5) — sikrer **TCP**; tro SSL erstatter TCP; glemme MAC/nonce-rollene; blande SSL-records og TCP-segmenter i trace.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 7.4: Nettverksforsvar — brannmurer

- **id:** `ttm4100-7-4` · **number:** 7.4 · **estimatedMinutes:** 45 · **prerequisites:** `ttm4100-7-1` · **kapitteltype:** teori
- **description:** De tre brannmurtypene (tradisjonell pakkefiltrering, stateful, applikasjonsgateway) med fast momentliste, og en kort «bør kjenne til»-note om IDS og IPsec/VPN.
- **Eksamensbelegg:** Sjanger H, brannmur 31 %, «tre typer — fast momentliste». Prioritet: **kunne** (brannmur), IPsec/VPN **kjenne**.
- **Innholdskontrakt:** `theorem` **brannmurtypene (tre)**: (1) **tradisjonell pakkefiltrering** — per-pakke på adresse/port/flagg; (2) **stateful** — sporer TCP-forbindelser via forbindelsestabell; (3) **applikasjonsgateway** — applikasjonsspesifikk proxy. `text` (bør kjenne til) IDS, IPsec/VPN — kort, merket. **Symbol-, formel- og protokollapparat:** pakkefilter, stateful, forbindelsestabell, applikasjonsgateway/proxy.
- **Oppgavesjangre:** H (F1/F3). Mønstereksempel (F3): «Match: sporer TCP-forbindelser ↔ ?, per-pakke på adresse/port ↔ ?» (stateful / pakkefilter).
- **Typiske feil:** Blande stateful og pakkefilter; tro en pakkefilter-brannmur sporer forbindelser; gå i dybden på IPsec/VPN (Nivå 3); tro applikasjonsgateway er per-pakke.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 7.5: DRILL — Sikkerhet: momentlister, signatur, brannmur og Caesar

- **id:** `ttm4100-7-5` · **number:** 7.5 · **estimatedMinutes:** 85 · **prerequisites:** `ttm4100-7-4` · **kapitteltype:** drill
- **description:** Full drill på fagets topptema: symmetrisk/offentlig-momentlisten, signatur (privat nøkkel), sertifikat/CA, SSL-sikrer-TCP, brannmurtypene, og Caesar-regning — med kortsvarsdisiplin og de faste MC-fellene.
- **Eksamensbelegg:** Sjanger H, 94 %. Prioritet: **perfekt**. Speiler den nesten garanterte sikkerhetsdelen i hvert sett.
- **Innholdskontrakt (løsningsoppskrift):** 1) **symmetrisk vs. offentlig**: nøkkel bærer sikkerheten, delt vs. par, krypter med mottakers offentlige; 2) **signatur**: hash → **privat nøkkel** → verifisér med offentlig → CA garanterer eierskap; 3) **SSL sikrer TCP**; 4) **brannmur**: pakkefilter/stateful/applikasjonsgateway; 5) **Caesar**: `c = (m+k) mod 26`, «finn nøkkel» = tell skift. Sensor-kommentert case med margnotat om privat-nøkkel-fella, SSL-sikrer-TCP-fella og kortsvarsdisiplinen. 12–16 oppgaver (F1/F5/F6) som roterer momentlistene og Caesar.
- **Oppgavesjangre:** H. Mønstereksempel (F6): «Chiffer `SIKKER` har Caesar-skift k = 7 — finn klarteksten.» → skift hver bokstav −7.
- **Typiske feil:** Signere med offentlig nøkkel (§#5); «SSL sikrer IP» (§#5); kalle offentlig-nøkkel «symmetrisk»; essay på en momentliste-drøfting; feil modulo i Caesar.
- **Quiz: 24 · Flashcards: 10**

**Prøve-kvote Del 7:** 4 prøver (Nettverkssikkerhet)
1. Prøve 7.A (25 min): Symmetrisk vs. offentlig nøkkel-momentliste + Caesar (H, F5/F6).
2. Prøve 7.B (25 min): Digital signatur (privat nøkkel) + sertifikat/CA (H, F1/F5).
3. Prøve 7.C (20 min): SSL/TLS sikrer TCP + SSL-records i trace (H/I, F1/F4).
4. Prøve 7.D (20 min): Brannmurtypene — tre-momentlisten (H, F1/F3).

---

### Del 8 — Eksamenstrening

> Del 8 samler håndverket: sjangerguiden for gjeldende C-format, en Wireshark-trace-drill
> (regne-tvilling 7), og tre komplette firetimers øvingseksamener som speiler C-malen
> (stor MC-blokk + ~5 arbeidsviste kortsvar/regne). Ingen egne temaprøver (Del 8 **er**
> øvingseksamenene).

#### Kapittel 8.1: Sjangerguide — C-formatet, MC-blokken og kortsvarshåndverket

- **id:** `ttm4100-8-1` · **number:** 8.1 · **estimatedMinutes:** 40 · **prerequisites:** `ttm4100-0-2` · **kapitteltype:** eksamenstrening
- **description:** Hvordan gjeldende C-format er bygd (Q1 stor kapittelinndelt MC/matching/utfylling + Q2–Q6 arbeidsviste kortsvar/regne), tidsbudsjett over 4 timer, og hvordan MC-strategi, momentlister og regnestil fra Del 0 anvendes under press.
- **Eksamensbelegg:** Metakapittel — destillert fra 2023/2024-settene (C-format). Prioritet: **perfekt** (håndverk).
- **Innholdskontrakt:** `theorem` **C-formatets oppbygning**: Q1 = fire Kurose-bolker (Ch. 1 → Ch. 2&3 → Ch. 4&5 → Ch. 6–8) med F1–F4 og rabatt-scoring; Q2–Q6 = ~5 kortsvar/regne (flyt/overlast, SSL/Wireshark, subnetting, multiaksess-throughput, DNS + forsinkelse/CRC/paritet). `theorem` **tidsbudsjett** (~4 timer, prioritér sikre regnepoeng og MC-du-kan først). `text` sammenkobling til de seks tvillingene og de åtte momentlistene. **Symbol-, formel- og protokollapparat:** Q1/Q2–Q6, F1–F6, rabatt-scoring, Kurose-bolker.
- **Oppgavesjangre:** Meta (F1–F6). Mønstereksempel: «Lag en 4-timers slagplan for et C-sett — hvilken rekkefølge tar du Q1-bolkene og Q2–Q6?»
- **Typiske feil:** Bruke for lang tid på ett kortsvar (essay = 0 + stjeler tid); hoppe over sikre regnepoeng; over-krysse i MC; nedprioritere sikkerhet.
- **Quiz: 14 · Flashcards: 12**

#### Kapittel 8.2: DRILL — Wireshark/trace-lesing

- **id:** `ttm4100-8-2` · **number:** 8.2 · **estimatedMinutes:** 70 · **prerequisites:** `ttm4100-3-3` · **kapitteltype:** drill
- **description:** Full drill på regne-tvilling 7 (voksende, fast i 2023/2024): les seq/ACK og lengder fra en TCP-trace, regn IP-payload, tell SSL-records og les IP/port fra pakkehoder.
- **Eksamensbelegg:** Sjanger I, 44 % voksende. Prioritet: **kunne** (prioritér gitt trend). Speiler SSL/Wireshark-kortsvaret i C-formatet.
- **Innholdskontrakt (løsningsoppskrift):** 1) **TCP**: neste segments seq = seq + len; SYN/SYN-ACK har seq = 0; kumulativ ACK − initiell seq = mottatte databyte; 2) **IP-payload** = Total Length − hodelengde (typisk 20 byte); 3) **SSL-records**: tell records i en pakke, identifisér kryptert master-secret / brukerdata; 4) **utfylling**: les kilde-/destinasjon-IP og portnummer fra pakkehodet. Sensor-kommentert case med margnotat om seq+len-regelen og IP-payload-subtraksjonen. 12–16 oppgaver (F4/F6) på tvers av TCP-seq, IP-payload, SSL-records og IP/port.
- **Oppgavesjangre:** I. Mønstereksempel (F6, nyskrevne tall): «Et IP-datagram har Total Length = 60 byte og 20 byte hode — hvor stor er payload?» → `60 − 20 = 40 byte`. TCP (F4): «Segment med seq = 1 og len = 120 → neste seq?» → 121.
- **Typiske feil:** Glemme at IP-payload = Total Length − hode (§ Wireshark); regne seq uten len; tro SYN har seq = 1; blande SSL-records og TCP-segmenter.
- **Quiz: 20 · Flashcards: 8**

#### Kapittel 8.3: Øvingseksamen 1 — typisk C-sett

- **id:** `ttm4100-8-3` · **number:** 8.3 · **estimatedMinutes:** 240 · **prerequisites:** `ttm4100-8-1` · **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers sett etter gjeldende C-mal: stor kapittelinndelt MC/matching/utfyllingsblokk (Q1, fire Kurose-bolker) + fem arbeidsviste kortsvar/regneoppgaver (Q2–Q6), 100 poeng, rabatt-scoring på MC.
- **Eksamensbelegg/miks:** Speiler prognosen (§1/§7). **Q1:** Ch. 1 (innkapsling/pakke-vs-linje), Ch. 2&3 (HTTP/DNS/sockets + UDP/TCP/checksum/slow start), Ch. 4&5 (subnett/lengste-prefiks/IPv6/NAT/ICMP), Ch. 6–8 (multiaksess/2D-paritet/802.11 + sikkerhet). **Q2–Q6:** flyt/overlast (drøft + rwnd), SSL/Wireshark-trace, subnetting/VLSM, multiaksess-throughput, DNS (RR). Alle oppgaver nyskrevne (egne tall/adresser/traces). **Løsningsforslag i `collapsible` per oppgave** som A-besvarelse — MC-forklaring per alternativ, kortsvar KORT per moment, regning som formel→innsetting med enheter→svar. Innledende `tip` om tidsbudsjett og rabatt-scoring.
- **Innholdskontrakt:** Dekker sjangrene A–I over hele stakken.
- **Oppgavesjangre:** A–I, oppgaveformer F1–F6.
- **Quiz: 12 · Flashcards: 0**

#### Kapittel 8.4: Øvingseksamen 2 — regne-tungt sett

- **id:** `ttm4100-8-4` · **number:** 8.4 · **estimatedMinutes:** 240 · **prerequisites:** `ttm4100-8-3` · **kapitteltype:** øvingseksamen
- **description:** Komplett C-sett med tyngdepunkt på de seks regne-tvillingene (store-and-forward, subnetting/VLSM, CRC, 2D-paritet, stop-and-wait/polling, seq/ACK) + Wireshark — men fortsatt full bredde over stakken.
- **Eksamensbelegg/miks:** ~Q1 + Q2–Q6, ekstra vekt på beregning: Q1 med beregnings-MC (forsinkelse, checksum, Caesar); Q2–Q6 med store-and-forward-forsinkelse, VLSM-oppdeling, CRC-langdivisjon + 2D-paritet, stop-and-wait/polling-throughput, TCP seq/ACK + Wireshark-trace. Alle nyskrevne. **Løsningsforslag som A-besvarelse** med margnotat om de faste regnefellene (glemt propagasjon, `−2` i subnetting, feil nuller i CRC, `2·T_prop`, kumulativ ACK, manglende enheter).
- **Innholdskontrakt:** Dekker A–I; supplerer 8.3 med tyngre regning.
- **Oppgavesjangre:** A–I, F1–F6 (vekt F6).
- **Quiz: 12 · Flashcards: 0**

#### Kapittel 8.5: Øvingseksamen 3 — konsept- og sikkerhetstungt sett

- **id:** `ttm4100-8-5` · **number:** 8.5 · **estimatedMinutes:** 240 · **prerequisites:** `ttm4100-8-4` · **kapitteltype:** øvingseksamen
- **description:** Komplett C-sett med tyngdepunkt på de åtte «X vs. Y»-momentlistene og topptemaet sikkerhet (94 %) — MC med de faste distraktorene + kortsvar med momentdisiplin.
- **Eksamensbelegg/miks:** ~Q1 + Q2–Q6, ekstra vekt på «velg de riktige»-MC og kortsvar: Q1 med de faste MC-fellene (flyt/overlast, TCP/UDP, CSMA-CD/CA, svitsj/ruter, IPv4/IPv6, SSL-sikrer-TCP, signatur-nøkkel); Q2–Q6 med flyt- vs. overlast-momentliste, symmetrisk/offentlig + signatur, brannmurtypene, FEC vs. interleaving, streaming vs. interaktiv. Alle nyskrevne. **Løsningsforslag som eksplisitt begrunner hvorfor hver sentrale distraktor er gal** (flyt≠overlast, UDP≠oppsett, CD≠802.11, svitsj≠IP, signér≠offentlig, SSL≠IP), med `tip` om at kortsvarsdisiplinen (KORT, per moment) er selve ferdigheten. De tre settene sammen dekker A–I og hele stakken flere ganger.
- **Innholdskontrakt:** Dekker A–I; supplerer med konsept-/momentliste-tyngde og distraktortrening.
- **Oppgavesjangre:** A–I, F1–F6 (vekt F2/F5).
- **Quiz: 12 · Flashcards: 0**

---

## 5. Summeringskontroll (quiz/flashcards) — AUTORITATIV

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.2 | 14+16 = **30** | 14+14 = **28** |
| 1 | 1.1–1.4 | 20+20+20+24 = **84** | 20+20+18+8 = **66** |
| 2 | 2.1–2.4 | 18+24+18+20 = **80** | 18+22+16+18 = **74** |
| 3 | 3.1–3.5 | 22+20+20+22+24 = **108** | 22+18+18+22+8 = **88** |
| 4 | 4.1–4.5 | 18+20+20+20+24 = **102** | 18+20+16+20+8 = **82** |
| 5 | 5.1–5.5 | 22+22+20+20+24 = **108** | 20+22+20+20+8 = **90** |
| 6 | 6.1–6.2 | 18+18 = **36** | 18+18 = **36** |
| 7 | 7.1–7.5 | 22+22+18+18+24 = **104** | 22+22+18+18+10 = **90** |
| 8 | 8.1–8.5 | 14+20+12+12+12 = **70** | 12+8+0+0+0 = **20** |
| **Sum** | **37 kap.** | **722 ≥ 500 ✓** (MC er halve eksamen — siktet høyt) | **574 ≥ 500 ✓** |

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler eksamensformen: **quiz er direkte MC-eksamenstrening** (F1–F4) og er
derfor kalibrert høyt (722), fordi gjeldende Q1 er en stor MC/matching/utfyllingsblokk
(65–100 av 100 poeng). De tre Nivå 1-blokkene med eget drillkapittel får tyngst dekning —
transport (Del 3: 108), lenkelag (Del 5: 108), sikkerhet (Del 7: 104, topptema 94 %) —
mens nettverkslag (Del 4: 102) ligger like bak. Multimedia (Del 6: 36) er Nivå 2 uten tung
regning og har derfor to kapitler. Drillkapitlene (1.4, 3.5, 4.5, 5.5, 7.5, 8.2) har høyest
quiz (24) fordi de **er** treningsbanken for regne-tvillingene. Flashcards vektes mot
**begrep → definisjon → fast felle** og siktes høyt (574) fordi faget er svært begrepsrikt
(protokoller, header-felt, «X vs. Y»-skiller, MAC-mekanismer, sikkerhetsprimitiver) og
eksamen er hjelpemiddelfattig (kun kalkulator). Øvingseksamenene (8.3–8.5) gir 0 flashcards
(rene sett) men 12 quiz hver (MC-blokken).

---

## 6. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–7 → 28 prøver)

Hver prøve er nyskrevne oppgaver i eksamens oppgaveformer (F1–F6), med løsningsforslag som
holder sensorens form (momentliste for kortsvar, formel→innsetting→enheter→svar for
regning, per-alternativ-forklaring for MC) og oppgir poengfordeling. Prøvekapitler bygges
som `ttm4100-<del>-prove` (chapterNumber `<del>.P`) etter plattformmønsteret, eller som
egne exercise-seksjoner i delens siste kapittel. Prøvekvotene per del står i sluttblokken
til hver del over (Del 1–7). Del 0 og Del 8 får ikke egne prøver (Del 8 **er**
øvingseksamenene).

### Øvingseksamener (3 komplette sett — se kap. 8.3–8.5)

| Sett | Profil | Miks |
|---|---|---|
| Øvingseksamen 1 (8.3) | Typisk gjeldende C-sett | Q1 (fire Kurose-bolker) + Q2–Q6 (flyt/overlast, SSL/Wireshark, subnetting, multiaksess, DNS), full bredde |
| Øvingseksamen 2 (8.4) | Regne-tungt sett | De seks tvillingene + Wireshark, beregnings-MC, full bredde |
| Øvingseksamen 3 (8.5) | Konsept-/sikkerhetstungt sett | De åtte momentlistene + sikkerhet (94 %) + faste MC-distraktorer |

Hvert sett er bygd som **gjeldende C-format (stor MC/matching/utfyllingsblokk Q1 + ~5
arbeidsviste kortsvar/regne Q2–Q6, 100 poeng, rabatt-scoring på MC)**, med løsningsforslag
som A-besvarelse (MC per alternativ, kortsvar KORT per moment, regning med enheter). Til
sammen dekker de tre settene alle sjangre A–I og hele protokollstakken flere ganger.

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — én firetimers digital eksamen (kalkulator), A–F, 100 poeng;
   **tre formatfamilier** (A/B/C) med **gjeldende C** som primær (stor MC-blokk + ~5
   arbeidsviste kortsvar/regne); **bredden ER eksamensformen** (hele stakken hvert år);
   **rabatt-scoringen** på MC; **2005-settet er utgått** — fra kap. 0.1/8.1.
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer: **perfekt**
   (transport: flyt/overlast + TCP/UDP + seq/ACK; sikkerhet 94 %; forsinkelse/throughput;
   subnetting/VLSM 69 %; feildeteksjon CRC/paritet; multiaksess + svitsj/ruter + 802.11;
   HTTP 75 % + DNS), **kunne** (multimedia/FEC-interleaving 69 %, Wireshark-trace,
   fragmentering/NAT/ICMP, innkapsling/lagmodell, sockets, brannmur), **kjenne** (ruting-
   detaljer, mobilt 3G/4G, MPLS, IPsec/VPN, HOL-blokkering).
3. **Oppgaveform- og sjangerguiden** — F1–F6 (MC ett/flere riktige, matching, utfylling,
   kortsvar, regning) med strategien fra kap. 0.2/8.1, og innholdssjangrene A–I med
   løsningsoppskriftene fra drillkapitlene (1.4, 3.5, 4.5, 5.5, 7.5, 8.2) i kortform.
4. **Regne-verktøykassen** — de seks tvillingene + Wireshark samlet som puggeark med formel
   og fast felle: store-and-forward (`n·L/R + ΣT_prop`), subnetting/VLSM (`2^{32−n} − 2`),
   CRC (`D‖0^r ÷ G`), 2D-paritet (kryss rad+kolonne), stop-and-wait/polling
   (`U = T_trans/(T_trans+2T_prop)`, `R/(1+dR/Q)`), seq/ACK (`neste seq = seq + databyte`),
   Wireshark (IP-payload `= Total Length − hode`, `neste seq = seq + len`). Alltid
   formel→innsetting med enheter→svar.
5. **Momentliste-arket** — de åtte «X vs. Y»-drøftingene med sine faste momentlister
   (linje/pakkesvitsjing, TCP/UDP, flyt/overlast, CSMA-CD/CA, svitsj/ruter, streaming/
   interaktiv, FEC/interleaving, symmetrisk/offentlig nøkkel). Skriv KORT — ett moment per
   setning; sensor krysser av mot listen.
6. **Feilkatalogen** — de faste fellene (§5 i analysen) samlet, hver med henvisning til
   kapitlet som forebygger den: forveksle flyt/overlast (3.4), UDP har oppsett/overlast
   (3.1), glemme propagasjon / ikke gange med linker (1.3/1.4), CSMA/CD i 802.11 (5.2/5.4),
   signere med offentlig nøkkel (7.2), SSL sikrer IP (7.3), IPv4/IPv6-bit-fakta (4.2),
   subnetting uten `−2` (4.3/4.5), CRC som sikkerhet (5.1), ARP↔vertsnavn / svitsj har IP
   (5.3), TCP-payload har IP-adresser (3.1/3.3), bruke 2005-settet (0.1).
7. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant): fordi bredden
   *er* eksamensformen, dekk hele stakken — men prioritér de tre Nivå 1-tyngdene
   (transport, sikkerhet, subnetting/CRC-regning) og de seks tvillingene tidlig (Del 1
   forsinkelse → Del 3 transport → Del 4 subnetting → Del 5 CRC/multiaksess → Del 7
   sikkerhet), legg deretter app (Del 2) og multimedia (Del 6), og kjør prøvene underveis +
   de tre øvingssettene de siste ukene under tidspress (240 min, C-format).

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `ttm4100` med alle 37 kapitler
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites/
   linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra §2-tabellen (obligatorisk).
   **`number` er del-basert** («3.4», ALDRI lineær «18» — jf. JUS1111-lærdommen;
   prosareferanser i innholdet bruker samme form, «kap. 3.4»).
2. **Del 0** (kap. 0.1–0.2) — etablerer oppgaveformene F1–F6, innholdssjangrene A–I,
   frekvenstallene, trefamilie-regelen, rabatt-scoringen, momentliste-malen,
   kortsvarsdisiplinen og regnestilen resten refererer til.
3. **De sju temadelene** bygges i Kurose top-down-rekkefølge Del 1 → Del 7 (innad følger
   kapitlene forkunnskaper: 1.2 før 1.3/1.4; 2.1 før 2.2; 3.1 før 3.2–3.5; 4.2 før 4.3/4.5;
   5.1 før 5.2/5.5; 7.1 før 7.2–7.5). Prioritér innhold/kvalitet på de tre Nivå 1-tyngdene
   (Del 3 transport, Del 5 lenkelag, Del 7 sikkerhet) og de seks regne-tvillingene.
4. Del 8 (eksamenstreningen) til slutt — den gjenbruker alle oppgaveformer og sjangre;
   øvingseksamenene speiler C-malen (stor MC-blokk Q1 + ~5 arbeidsviste Q2–Q6, 100 poeng).
5. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som kapitlene
   ferdigstilles; prøvene (§6) legges i respektive delers prøvekapittel/exercise-seksjoner.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (escape `"`
  i norske sitattegn og i traces/adresser; `\\` for LaTeX-kommandoer); `npm run build` grønn.
- [ ] **Quiz er MC-eksamenstrening**: `options[0]` = riktig svar (runtime stokker); reelle
  «velg de riktige»-, matching- og utfyllings-oppgaver er splittet til ett-riktig-svar-quiz;
  hver quiz-forklaring begrunner riktig svar OG de sentrale distraktorene (de faste MC-fellene).
- [ ] **Rabatt-scoring / MC-strategi**: Del 0 sier at fem feilkryss er gratis (så −0,5 p,
  gulv 0) og at manglende riktig kryss ikke teller i C-familien; A-familiens harde tak
  (maks 10 / −3 per kryss > 20) er flagget.
- [ ] **Kortsvar-disiplin (KORT)**: hvert kapittel med en «X vs. Y»-drøfting har `warning`
  om at kortsvar skal være 1–3 setninger og at essay kan gi 0; løsningsforslag på kortsvar
  er KORTE og per-moment.
- [ ] **Momentliste-malene som `theorem`**: hver av de åtte «X vs. Y»-drøftingene (linje/
  pakke 1.1, TCP/UDP 3.1, flyt/overlast 3.4, CSMA-CD/CA 5.2, svitsj/ruter 5.3, streaming/
  interaktiv 6.1, FEC/interleaving 6.2, symmetrisk/offentlig 7.1) har en `theorem` med den
  faste momentlisten (definér X → definér Y → avgjørende skille → eksempel per side → fast
  felle).
- [ ] **Regne-verktøykassen som `theorem` (formel→innsetting→enheter→svar)**: de seks
  tvillingene + Wireshark (store-and-forward 1.3/1.4, subnetting/VLSM 4.3/4.5, CRC 5.1/5.5,
  2D-paritet 5.1/5.5, stop-and-wait/polling 3.2/5.2/3.5/5.5, seq/ACK 3.3/3.5, Wireshark 8.2)
  — hver med gjennomregnet nyskrevet eksempel; enheter alltid med (bit/bit/s/s/m/s); hold
  fasitens form (brøk/intervall); bit = byte·8; `2·10⁸ m/s`.
- [ ] **Symbol-, formel- og protokollapparat per delkapittel**: hvert delkapittel som bruker
  notasjon har `collapsible` rett etter Forkunnskaper, som forklarer ALT delkapitlet bruker
  (forsinkelsesformler, adresse-/maskenotasjon, header-felt, seq/ACK-felt, CRC-generator,
  RR-format — per delkapittel, ikke arv).
- [ ] **De faste fellene som warnings**: hvert relevant kapittel har `warning` for sin felle
  — flyt/overlast (3.4), UDP-oppsett/overlast (3.1), propagasjon/linker (1.3/1.4), CSMA/CD i
  802.11 (5.2/5.4), signatur-nøkkel (7.2), SSL-sikrer-TCP (7.3), IPv4/IPv6-bit (4.2),
  subnetting `−2` (4.3/4.5), CRC-som-sikkerhet (5.1), ARP/svitsj-IP (5.3), TCP-payload (3.1).
- [ ] **Trefamilie-regelen + 2005-caveat**: Del 0 + kap. 8.1 sier at formatet har skiftet
  tre ganger (A/B/C), at C er primær, og at 2005-settet (OSI 7-lag, PSTN/GSM, SIP, WiMAX,
  Fourier, Manchester) er utgått og ikke skal brukes som mal.
- [ ] **Sikkerhet prioritert (94 %)**: Del 7 har fem kapitler + eget drillkapittel; sikkerhet
  dekkes også i øvingseksamenene (garantert innslag).
- [ ] **Wireshark/trace-lesing dekket (voksende)**: kap. 8.2 (+ 3.3/7.3) har seq+len,
  IP-payload `= Total Length − hode`, SSL-records, IP/port fra trace — med nyskrevne traces.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra dette
  skjelettet), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå i oppgaveform
  F1–F6), 6–12 øvinger (F1–F6) med `solution` + `hints`, repetisjons-`collapsible`;
  drillkapitler har løsningsoppskrift + sensor-kommentert case + 12–16 oppgaver.
- [ ] **Quiz-sum ≥ 722 og flashcard-sum ≥ 574** per kvotetabellen (§5); quiz kalibrert som
  direkte MC-eksamenstrening; flashcards som begrep → definisjon → fast felle.
- [ ] **Prøver**: 4 per temadel 1–7 (28 stk) + 3 øvingseksamener (kap. 8.3–8.5) som sammen
  dekker sjangrene A–I, oppgaveformene F1–F6 og hele protokollstakken flere ganger.
- [ ] **Opphavsrett**: ALLE oppgaver, tall, adresser, traces, matriser og innpakninger
  nyskrevne — egne verdier/kontekster; protokollnavn, standardnotasjon, adressenotasjon og
  fagbegreper er allmenn faglig kunnskap, men ingen oppgavetekster/fasiter/sensorformuleringer
  fra reelle sett gjengis; pensum (Kurose & Ross) refereres (begrep/verk), aldri siteres.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 +
  innhold), jf. lærdommen om `getChapterMeta`.
