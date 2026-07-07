# Eksamensanalyse: TDT4237 Programvaresikkerhet og personvern (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på NTNUs eksamensarkiv
> for TDT4237 *Software Security* (fra 2022: *Software Security and Data
> Privacy*): oppgavesett og/eller offisielle sensorveiledninger for **V2015,
> V2016, V2018, V2019, V2020, V2021, V2022 og V2023** — åtte sett, hvorav **fem
> har full sensorveiledning** (2015, 2016, 2018, 2019, 2023). De tre øvrige
> (2020, 2021, 2022) finnes som oppgavesett uten fasit. Alle fem
> sensorveiledningene og alle åtte oppgavesettene er lest grundig; arkivet er
> lite (13 filer), så hele arkivet er dekket.
>
> **Alt innhold er omskrevet med egne ord.** Ingen oppgavetekster,
> fasiter eller sensorkommentarer er gjengitt ordrett. Fagbegreper, angreps- og
> forsvarsmekanismer, rammeverksnavn (OWASP, RMF, BSIMM, CWE) og kodemønstre er
> allmenn faglig kunnskap og ikke opphavsrettslig beskyttet. Analysen er
> kvantitativ der arkivet tillater det, men **evidensgrunnlaget er lite** (8 sett
> mot TTM4135s 14) — der en påstand hviler på ett eller to sett, er den merket
> `(svakt belagt)`.
>
> **Emnet er aktivt** (verifisert mot NTNUs emneside juli 2026): TDT4237
> undervises på masternivå, neste tilbud vår 2027. Undervisning og eksamen på
> **engelsk**; svar kan gis på engelsk eller norsk. Fagansvarlig har vært
> Carl-Fredrik Sørensen (2015), deretter **Jingyue Li** (2016–), med Per Håkon
> Meland involvert i case-/personverndelen (privacy-oppgavene og 2022-caset
> bærer hans preg).
>
> **Faget er overveiende konseptuelt, ikke matematisk.** I motsetning til
> søsteremnet TTM4135 (anvendt kryptografi, ~50 % regning) finnes det **så godt
> som ingen tallregning** her. «Det tekniske» er **kodelesing** (finn sårbarheten,
> forklar utnyttelsen, skriv fiksen i pseudokode) og **strukturert
> risikovurdering av et case**. Balansen er anslagsvis **~85 % konseptuell
> forklaring/drøfting og ~15 % kodeanalyse** — begge deler kvalitative. Se del 1.

---

## 1. Eksamensform og utvikling

### To epoker — pass nøye på hvilket sett du øver på

Arkivet spenner over et **tydelig formskifte** rundt 2020, men **pensumet og
oppgavetypene er bemerkelsesverdig stabile** gjennom hele perioden. Det er
*innpakningen* (papir-langsvar → Inspera digital + flervalg) og *vektingen* som
har endret seg, ikke hva som testes.

| Periode | Format | Struktur | Varighet | Vekting skriftlig |
|---|---|---|---|---|
| **2015** | Papir, langsvar | 3 problem: teori-kortsvar (40 p) + case-RMF (40 p) + kodeanalyse (20 p) | 4 t (09–13) | 70 % (+ 30 % øvinger) |
| **2016** | Papir, langsvar | 3 problem: teori-kortsvar 9 spm (45 p) + kodeanalyse (20 p) + case-RMF (35 p) | 4 t (09–13) | 70 % (+ 30 % øvinger) |
| **2018** | Papir, langsvar | 3 problem: teori-kortsvar 10 spm (40 p) + kodeanalyse 5 snutter (30 p) + case-RMF (30 p) | **2 t (15–17)** | 70 % (+ 30 % øvinger) |
| **2019** | Papir, langsvar | 3 problem: teori-kortsvar 11 spm (40 p) + kodeanalyse 5 snutter (30 p) + case-RMF (30 p) | 4 t | 70 % (+ 30 % øvinger) |
| **2020** | Inspera, PDF-opplasting (hjemme/korona) | case-RMF (32 p) + anonymisering (8 p) + Azure-sky (5 p) + agil-SDL (5 p) | — | 50 % (+ 50 % øvinger) |
| **2021** | Inspera, PDF-opplasting (hjemme/korona) | ett case-RMF på valgfri kjent app (Vipps/Uber/Amazon/Booking) (30 p) | — | — |
| **2022** | Inspera, blandet | case-RMF-PDF (25 p) + korte OWASP-/kodespørsmål (Q2–18) | — | — |
| **2023** | Inspera, blandet | case-RMF (26 p) + kortsvar à 4 p (Q2–15) + **flervalg à 1 p (Q16–33)** | — | — |

**Grunnbeskrivelsen i dag** oppgir 4 timers skriftlig skoleeksamen som teller
**100 %**, hjelpemiddelkode E, karakter A–F. Dette er en tredje ordning som
avløser både 70/30- (2015–2019) og 50/50-modellen (2020). **Verifiser vektingen
mot emnebeskrivelsen for det året løsningen dekker** — den har endret seg to
ganger.

### Tre ting følger av formskiftet

- **2020–2021 er ikke representative for hele eksamensbredden.** De var
  korona-hjemmeeksamener redusert til (nesten) bare RMF-caset. De er likevel
  ypperlig case-trening — caset er kjernesjangeren i *alle* sett.
- **Inspera-formen (2022–2023) har lagt til rene flervalgspørsmål** (2023: ~18
  MCQ à 1 poeng) som feier over pensumbredden (CIA, symmetrisk/asymmetrisk
  krypto, CVE/CVSS, buffer overflow, captcha, session hijacking, trusselaktører).
  Dette er nye, billige, drillbare poeng — men **innholdet er de samme temaene**
  som de gamle kortsvarspørsmålene, bare i gjenkjenningsformat.
- **Kodeanalysen har flyttet, ikke forsvunnet.** Der 2015–2019 hadde én stor
  30-poengs snutt-analyse, er koden i Inspera spredt på enkeltspørsmål (2022 Q6/Q9
  «finn inngangspunktene», 2023 Q14 «fiks sårbarheten», + kode-MCQ-er der man
  velger riktig sårbarhetsdiagnose).

### Nye/voksende innslag (2022→)

Fagnavnet fikk tillegget **«and Data Privacy»** fra 2022, og innholdet fulgte:

- **GDPR / personvern** er nå en fast, egen bolk (privacy-prinsippene art. 5,
  anonymiseringsteknikker, personvern under kriser) — ikke bare en sluttdrøfting.
- **AI/ML-sikkerhet** er et klart vekstområde: adversarial ML / «lure
  ansiktsgjenkjenning» (2022 Task 8), «Malicious AI» (2023 Q12), og
  fagbeskrivelsens eksplisitte mål om *AI-assisterte sikkerhetsverktøy*.
- **OWASP Top 10-rammen** (2021-utgaven) styrer nå kortsvarene direkte:
  «Exposure of Sensitive Information», «Vulnerable and Outdated Components»,
  «Insufficient Logging and Monitoring» er ordrett OWASP-kategorier (2022–2023).
- **CVE/CVSS** (score Heartbleed, CVE vs CVSS) er nytt MCQ-/kortsvarstoff (2023).

---

## 2. Temafrekvens

Måling over de 8 settene (2015, 2016, 2018, 2019, 2020, 2021, 2022, 2023).
Celleverdi = antall sett der temaet dukker opp som **minst ett eget spørsmål,
delspørsmål eller obligatorisk case-komponent**. Fordi RMF-caset i praksis er
identisk hvert år og selv trekker inn trusselmodellering, personvern og
sikkerhetskrav, scorer flere «case-interne» temaer svært høyt.

| # | Tema | Score | Typisk form |
|---|---|---|---|
| 1 | **RMF-risikovurdering av case** (business goals/assets/risks → misuse cases + attack trees → ≥10 technical risks → security requirements → black-box pen-test cases) | **8/8 = 100 %** | Alltid ett stort problem, 25–40 p. Kjernen i hele faget |
| 2 | **Trusselmodellering** (misuse cases, attack trees, trusselaktører/threat agents, attack surface) | **8/8 = 100 %** | Del av caset + eget MCQ (2023 threat agents) |
| 3 | **Injeksjon / OWASP-websårbarheter** (SQLi, XSS, CSRF, command/XPath/XML-injeksjon) | **8/8 = 100 %** | Kortsvar + kodeanalyse + case-risiko |
| 4 | **Sikker programvareutvikling / SDLC** (touchpoints, BSIMM, OpenSAMM/SAMM, agil sikkerhet, CIA-triaden, «godt sikkerhetskrav») | **7/8 = 88 %** | Kortsvar. Fast favoritt: BSIMM vs OpenSAMM |
| 5 | **Autentisering & sesjonshåndtering** (autentiseringsmåter, sesjonstoken-lagring, session fixation/hijacking, passord-policy, salting, 2FA/OTP) | **7/8 = 88 %** | Kortsvar + kodeanalyse + case-krav |
| 6 | **Anvendt kryptografi (konseptuelt)** (symmetrisk vs asymmetrisk, OTP, Vigenère, ECB/CBC+IV, digital signatur, TLS-handshake, CA/PKI, nøkkelgenerering) | **6/8 = 75 %** | Kortsvar «forklar …». Ingen tallregning |
| 7 | **Kodeanalyse-sjanger** (finn sårbarhet + linje, forklar utnyttelse, fiks i pseudokode) | **6/8 = 75 %** | Egen 20–30 p-bolk (2015–2019); enkeltspm (2022–2023) |
| 8 | **Personvern / GDPR** (privacy-prinsippene art. 5, anonymisering, privacy by design, etiske dilemmaer) | **6/8 = 75 % ↑** | Case-avslutning + egen oppgave (2020 anonymisering) |
| 9 | **Tilgangskontroll-modeller** (Bell-LaPadula, Biba, DAC, multilevel vs multilateral, SSO, Android-permission-modell) | **5/8 = 63 %** | Kortsvar «forklar Biba/hvorfor beskytter det integritet» |
| 10 | **Sikkerhetstesting / penetrasjonstesting** (black-box testcase med teststeg + forventet resultat, juridiske forhold ved pentest) | **5/8 = 63 %** | Case-Task 3 (fast); juss-drøfting 2016 |
| 11 | **Minnesikkerhet** (buffer overflow, heap overflow — angrep + forsvar) | **3/8 = 38 %** | Kortsvar + kode-MCQ (2023) |
| 12 | **Skysikkerhet** (Azure WAF, IaaS-ansvarsdeling — hva skyen dekker vs egen kode) | **3/8 = 38 %** | Kortsvar + case-tillegg |
| 13 | **AI/ML-sikkerhet** (adversarial ML, malicious AI, AI-verktøy) | **2/8 = 25 % ↑** | Ny; drøfting (2022) + MCQ (2023) |
| 14 | **CVE / CVSS** (score-tolkning, CVE vs CVSS) | **1/8 = 13 % ↑** | Nytt MCQ + kortsvar (2023) |
| 15 | **Diverse enkelttemaer** (blockchain/proof-of-work 2019, iOS-filkryptering 2019, IPsec/SSH-kombo 2018, XXE 2018) | **1–2/8** | Roterende enkeltspørsmål, lavfrekvent |

### Viktigste funn

1. **RMF-caset er faget.** Ett stort case-basert risikovurderingsproblem er
   garantert hvert eneste år og utgjør 25–40 % av poengene. Det følger alltid
   den samme kjeden: *forretningsmål → verdier → forretningsrisiko → misuse
   cases + attack trees → ≥10 tekniske risikoer → sikkerhetskrav → black-box
   testcaser → personvern/GDPR*. Den som mestrer *denne kjeden som håndverk* har
   sikret grunnpotten. Alt annet i faget er byggeklosser som mates inn i caset.
2. **Trusselmodellering + injeksjon + SDLC er de tre sikreste kortsvarsblokkene**
   (100 %, 100 %, 88 %). SQLi/XSS/CSRF og BSIMM-vs-OpenSAMM/touchpoints er nesten
   garantert.
3. **Kryptografien er konseptuell, ikke kvantitativ.** Der TTM4135 lar deg regne
   RSA-CRT, ber TDT4237 deg *forklare* hvorfor OTP-nøkkelgjenbruk lekker, *beskrive*
   Vigenère-knekking i to steg, eller *velge* riktig nøkkel i et asymmetrisk
   oppsett. Ingen mellomregning kreves.
4. **Personvern er den klareste vekstaksen.** Fra en etikk-drøfting (2015) til
   egen anonymiseringsoppgave (2020), GDPR-art.5-drøfting (2019, 2022) og
   navnendring. Forvent minst én ren personverndel fremover.
5. **Flervalg er kommet for å bli** (2023) og gir de billigste poengene — men
   dekker nøyaktig samme pensum som kortsvarene.

---

## 3. Oppgavetype-katalog (med sensors foretrukne metode)

De sjangrene som faktisk går igjen, med fasitens krav destillert fra de fem
sensorveiledningene.

### A. RMF-caset (garantert, tyngst — Problem/Task-kjeden)

Sensor forlanger at studenten **følger Risk Management Framework (McGraw)**
trinn for trinn og **kobler alt til det konkrete caset**. Fast oppgavekjede:

1. **Business goals + assets** (skill disse to klart): mål = omdømme, flere
   brukere, inntekt, rask/sikker betaling, tilgjengelighet; verdier/*assets* =
   brukeridentiteter/credentials, personopplysninger, betalingstransaksjoner,
   kredittkort/bankkonto, krypteringsnøkler, admin-tilganger, logg. Sensor
   krever ofte et **minimum antall** («minst 4/5») — treff antallet.
2. **Business risks** i en **risikomatrise** (sannsynlighet × konsekvens →
   L/M/H). Studenten må *begrunne* rangeringen kort.
3. **Misuse cases + attack trees**: sensor krever eksplisitt at de tegnes/beskrives
   (aktører, use case, misuse case, vulnerability, security use case, med
   koblinger *threaten/mitigate/exploit*). Attack tree = mål på toppen,
   angrepsveier nedover.
4. **≥10 tekniske risikoer** — **utledet fra misuse case / attack tree OG koblet
   til business risk OG til caset**. `⚠️ Sensor trekker typisk 2 poeng hvis
   risikoene bare er en generisk liste (SQLi, DDoS, svakt passord) uten kobling.`
   Én risiko = 1 poeng.
5. **Sikkerhetskrav** — ett per teknisk risiko. Et *godt* krav sier **hva** som
   skal oppnås, ikke **hvordan** (bind ikke mekanismevalget).
6. **Black-box penetrasjonstest-caser** — **hver testcase MÅ ha teststeg +
   forventet resultat per steg** (f.eks. Req: sterk passordpolicy → Test: kjør
   ordbok-brute-force → Forventet: passord knekkes ikke). Én krav+test = 1 poeng.
7. **Personvern/GDPR-avslutning**: pek ut personopplysningene (direkte:
   e-post, kredittkort, navn, adresse; indirekte: brukernavn, alder, kjønn,
   medisinske data, sensordata) og drøft mot **privacy-prinsippene art. 5**
   (transparency, purpose, rights, fair use, minimalisation). Ofte kreves «drøft
   to av de fem prinsippene».

### B. Kodesnutt-sårbarhetsanalyse (fast 20–30 p i 2015–2019)

**Obligatorisk tredelt svarstruktur for hver snutt** — sensor trekker poeng hvis
ett ledd mangler:
- **(a) Identifiser sårbarheten OG eksakt linjenummer/lokasjon.**
- **(b) Forklar hvorfor den er farlig OG hvordan den utnyttes.** (2019-settet
  sier eksplisitt: skriv utnyttelsesveien.)
- **(c) Fiks koden** (pseudokode ok, men **forklar** fiksen).

Faste plantede sårbarheter og fasitens strukturelle fiks (ikke bare «saniter»):

| Sårbarhet | Sett | Fasit-fiks |
|---|---|---|
| Insecure randomness (statistisk PRNG) | 2015 | Bruk `SecureRandom` / kryptografisk PRNG |
| Predikerbart/svakt sesjonstoken (`md5($username)`) | 2016, 2018 | Legg til entropi/randomness i tokenet |
| Stored/reflected/DOM **XSS** | 2016, 2018 | Saniter + escape output. `⚠️ Må kalles «stored» for full uttelling` |
| **CSRF** | 2015, 2016, 2018 | Anti-CSRF-token i skjult felt, verifiser server-side |
| Insecure deserialization / PHP object injection | 2015, 2019 | Ikke deserialiser rå input; valider / bruk JSON |
| Directory/path traversal (`os.path.join`, `../`) | 2018, 2019 | Whitelist/`basename(realpath())`, fjern `../` |
| Insecure Direct Object Reference (bruker-ID i URL) | 2019 | Håndhev autorisasjon server-side |
| **XPath/SQL-injeksjon** (strengkonkatenert query) | 2019 | Parameteriserte spørringer — skill data-plan fra kontroll-plan |
| Open redirect (`sendRedirect(url)`) | 2019 | «Accept known good» whitelist av mål |
| Sensitive data i klartekst (passord i DB) | 2022 | Hash + salt (aldri klartekst/reversibelt) |
| Buffer overflow (`strcpy` i C) | 2023 | Trygge funksjoner (`strncpy`/`strlcpy`), grensesjekk |
| Insufficient session expiration / info leakage | 2018 | Kort levetid / generisk feilmelding |

### C. Teori-kortsvar (fast Problem 1 i 2015–2019, kortsvar i Inspera)

Sensor **poengsetter per delelement** og krever ofte et **eksplisitt antall**
(«list minst tre/fire»). Faste mønstre sensor belønner:

- **SQL-injeksjon:** rotårsak = brukerinput tolkes som **kontroll (kommando)** i
  stedet for **data**; prepared statements + bind-variabler tvinger input til å
  alltid tolkes som data. Motmidler (nevn ≥3 av 5): blacklisting, whitelisting,
  escaping, prepared statements/bind-variabler, mitigere impact.
- **Sesjonstoken-lagring** (URL / skjult felt / cookie) med **én fordel + én
  ulempe hver**: URL lekker via Referer; skjult felt forsvarer mot CSRF men
  duger ikke for lange sesjoner; cookie sendes automatisk → CSRF-eksponert.
- **CSRF/clickjacking:** forklar angrep **og** minst ett konkret forsvar
  (anti-CSRF-token + re-autentisering; X-Frame-Options / frame-busting mot
  clickjacking). «Er nettstedet sårbart?» → gi en **black-box testprosedyre
  steg-for-steg** eller kildekode-inspeksjon etter forsvaret.
- **Kryptografi:** OTP `c = m ⊕ k`, nøkkelgjenbruk gir `c1⊕c2 = m1⊕m2` (lekker);
  ECB lekker datamønstre → bruk CBC med **IV** og kjeding; Vigenère-knekking i
  to steg (1: finn nøkkellengde via frekvensanalyse, 2: gjett hvert tegn — det
  vanligste ⇒ ‘e’); asymmetrisk kryptering bruker **mottakerens offentlige
  nøkkel**; signatur = hash + **avsenders private** nøkkel.
- **Digital signatur + PKI/TLS-handshake:** CA signerer serverens PK med SK-CA →
  sertifikat; handshake i 4 steg (request → sertifikat → klient krypterer delt
  nøkkel med PK-Server → server dekrypterer med SK-Server). Poeng per steg.
- **Tilgangskontroll:** Bell-LaPadula (konfidensialitet: «no write down, no read
  up») vs **Biba** (integritet: «no write up, no read down») — med et konkret
  eksempel hver; multilevel vs multilateral (Chinese Wall / Lattice /
  compartmentation); DAC-svakhet (trojansk hest). SSO = identity provider +
  service provider + bruker med token-utveksling.
- **Sikker utvikling:** touchpoints i effektivitetsrekkefølge (1 code review, 2
  arkitektonisk risikoanalyse, 3 pentest, 4 risk-based tests, 5 abuse cases, 6
  security requirements, 7 security operations); **BSIMM = deskriptiv** (måler
  hva firmaer faktisk gjør) vs **OpenSAMM = preskriptiv** (hva du bør gjøre);
  CIA-triaden; CVE (liste over kjente sårbarheter) vs CVSS (alvorlighetsscore).

### D. Personvern / anonymisering (voksende)

- **Anonymisering** (2020): anvend **generalization, suppression, anatomization,
  permutation** på en konkret tabell. Beslektet med k-anonymitet. `(svakt belagt
  — kun ett sett, men eksplisitt pensum.)`
- **GDPR-prinsippene (art. 5):** transparency, purpose limitation, rights, fair
  use, data minimisation. Drøft mot caset + nevn dilemmaer (f.eks. GDPR i
  krisesituasjon, 2022).

### E. Flervalg (Inspera, 2023)

Ett kryss per spørsmål à 1 poeng. Feier hele pensum: CIA-triaden,
symmetrisk/asymmetrisk krypto, CVE/CVSS, buffer overflow-forsvar, session
hijacking-mottiltak (HttpOnly/secure-flagg), captcha, command injection,
trusselaktør-karakteristikker, sikkerhetskrav-definisjon, kode-diagnose.
`(svakt belagt for trekkregel — ingen fasit i arkivet oppgir MCQ-trekk.)`

---

## 4. Sensorens krav

Destillert fra de fem offisielle sensorveiledningene (Sørensen 2015; Li 2016–2023).

### Faste metaregler

1. **«Your answers should be brief and to the point»** står i *hvert* sett. Hold
   svaret stramt, men fullstendig — sensor belønner konkret og punktvis, ikke
   langt og svevende.
2. **Poeng deles per delelement, og antallskrav er absolutte.** Ber oppgaven om
   «minst 3 motmidler» / «10 tekniske risikoer», gir hvert element 1 (del)poeng —
   treff antallet. Halve svar gir halve poeng.
3. **Kodeanalyse: alltid (a) linje/lokasjon + (b) utnyttelsesvei + (c) forklart
   fiks.** Mangler ett av de tre, mistes poeng. Pseudokode er greit.
4. **Case: koble hver teknisk risiko eksplisitt til misuse case/attack tree OG
   til caset OG til en business risk.** Generiske lister uten kobling → typisk
   −2 poeng (eksplisitt i 2019- og 2021-settene).
5. **Pen-test-caser må ha teststeg + forventet resultat per steg** — ikke bare
   «test for SQLi».
6. **Dokumentér antakelser eksplisitt** når oppgaveteksten er tvetydig — oppfordret
   i alle sett («Document the necessary assumptions / Explain why you need them»).
7. **Fasiten godtar flere korrekte varianter** i de åpne case-/drøftingsdelene
   («other valid answers will also get full points»), men krever presisjon og
   kobling.

### Hva som skiller sterk fra svak besvarelse

- **Strukturell fiks slår «saniter input».** På kodeoppgaver vil sensor se den
  *riktige* mekanismen: parameterisering (ikke bare escaping) mot injeksjon,
  tilgangskontroll mot IDOR, whitelist mot open redirect, `SecureRandom` mot
  svak PRNG.
- **Presis navngiving.** Kall XSS «stored» når den er lagret (ellers 20 % av
  poengene, 2016); si «no write up / no read down» korrekt for Biba; skill CVE
  fra CVSS; skill BSIMM (deskriptiv) fra OpenSAMM (preskriptiv).
- **Konkret utnyttelse, ikke løs prat.** «Vulnerable to CSRF» holder ikke —
  vis angrepssiden (`<img src=".../account/del">`) og hvorfor nettleseren
  sender med sesjonscookien.
- **Riktig nøkkelbruk.** Krypter til mottaker med **mottakerens offentlige**
  nøkkel; signer med **egen private**. Fasiten straffer sammenblanding.

---

## 5. Typiske feil

1. **Ramse opp tekniske risikoer uten å koble dem til misuse case/attack tree og
   til caset** — den dyreste feilen (−2 p), advart om eksplisitt i flere sett.
2. **Glemme teststeg/forventet resultat** i pen-test-casene — halv uttelling.
3. **Blande sammen forretningsmål og verdier (assets)** i RMF-trinn 1, eller
   hoppe over risikomatrise-rangeringen.
4. **Kodeanalyse uten linjenummer eller uten utnyttelsesvei** — ett av de tre
   obligatoriske leddene mangler.
5. **«Saniter input» som eneste fiks** der sensor vil ha den strukturelle løsningen
   (prepared statements / tilgangskontroll / whitelist / `SecureRandom`).
6. **Ikke kalle XSS «stored»** når den er lagret → kun delvis uttelling.
7. **Bytte om tilgangskontrollreglene:** Biba = «no write up, no read down»
   (integritet); Bell-LaPadula = «no write down, no read up» (konfidensialitet).
   Svært lett å snu.
8. **Forveksle CVE og CVSS** (liste over sårbarheter vs alvorlighetsscore).
9. **Forveksle BSIMM og OpenSAMM** (deskriptiv vs preskriptiv).
10. **Feil nøkkel i asymmetrisk kryptering/signatur** (kryptér med mottakers
    offentlige; signér med egen private).
11. **Glemme IV/kjeding når man foreslår CBC** som ECB-erstatning, eller ikke
    forklare *hvorfor* OTP-nøkkelgjenbruk lekker (`c1⊕c2 = m1⊕m2`).
12. **Treffe feil antall** delelementer («list minst fire» → lever bare to).
13. **Skrive langt og svevende** i stedet for kompakt og punktvis — mot fagets
    uttrykte stil.
14. **Glemme personvernkoblingen** til slutt i caset (identifiser
    personopplysningene + drøft mot art. 5-prinsippene).

---

## 6. Begreps- og rammeverkapparat

Læreboken bør bruke nøyaktig disse rammeverkene og termene, siden oppgavene og
fasitene gjør det. Engelsk fagterminologi der pensum er engelsk.

### Prosessrammeverk
- **RMF (Risk Management Framework, McGraw):** (1) forstå forretningskontekst →
  goals + assets, (2) identifiser business risks, (3) identifiser technical risks
  (via trusselmodeller), (4) syntetiser & ranger (risikomatrise), (5)
  sikkerhetskrav + mitigering, (6) valider (pen-test). **Dette er ryggraden i
  hvert case.**
- **Touchpoints (McGraw), i effektivitetsrekkefølge:** code review → architectural
  risk analysis → penetration testing → risk-based security tests → abuse cases →
  security requirements → security operations.
- **BSIMM** (deskriptiv modenhetsmodell, målt fra reelle firmaers praksis) vs
  **OpenSAMM/OWASP SAMM** (preskriptiv: 4 forretningsfunksjoner × sikkerhets-
  praksiser × modenhetsnivå 0–3).
- **SDL / agil sikkerhet:** sikkerhet inn i requirements, design, implementation,
  verification, team organization.

### Trusselmodellering (NB: misuse cases + attack trees, IKKE STRIDE)
- **Misuse case-diagram** (Sindre/Opdahl): aktører, use case, misuse case,
  vulnerability, security use case, med relasjoner *threaten/mitigate/exploit*.
- **Attack tree:** angrepsmål på toppen, del-angrep/veier som grener.
- **Threat agents / attack surface / abuse cases.**
- `⚠️ Merk: fagbeskrivelsen nevner STRIDE, men INGEN av de åtte settene bruker
  STRIDE — den faktiske metoden i eksamen er misuse cases + attack trees (+ RMF).
  Behandle STRIDE som bakgrunn, ikke som eksamensmetode. (verifiser mot gjeldende
  pensum.)`

### Websårbarheter (OWASP Top 10-rammen)
- **Injeksjon:** SQLi, XPath-injeksjon, command injection, XXE — rotårsak: input
  tolkes som kontroll. Fiks: parameterisering (data/kontroll-separasjon).
- **XSS** (stored / reflected / DOM), **CSRF**, **clickjacking**, open redirect,
  IDOR, sensitive data exposure, security misconfiguration, vulnerable & outdated
  components, insufficient logging & monitoring.
- **CWE** brukes som kildereferanse i settene (CWE-384 session fixation, CWE-601
  open redirect, CWE-613 session expiration, CWE-643 XPath). **CVE** (kjente
  sårbarheter) / **CVSS** (alvorlighetsscore).

### Autentisering & tilgangskontroll
- Tre autentiseringsfaktorer (know/have/are, med fordeler/ulemper); sesjonstoken-
  lagring (URL/skjult felt/cookie); session fixation/hijacking; passord-salting
  (mot ordbokangrep, ikke mot målrettet angrep); 2FA/OTP.
- **Bell-LaPadula** (konfidensialitet), **Biba** (integritet), **DAC** (+ trojansk
  hest-svakhet), multilevel vs multilateral (Chinese Wall/Lattice), **SSO** (IdP +
  SP + bruker), Android-permission-modell (protection levels: normal/dangerous/
  signature; «first one wins»).

### Anvendt kryptografi (konseptuelt)
- Symmetrisk vs asymmetrisk (nøkkelhåndtering vs hastighet); OTP (`c=m⊕k`,
  gjenbruk lekker); Vigenère (nøkkel = streng; knekk i to steg); blokkchiffer-
  moduser (ECB lekker mønster → CBC med IV); digital signatur (hash + privat
  nøkkel); CA/PKI + TLS-handshake (4 steg); nøkkelgenerering (KDF, HW-RNG,
  entropi — ikke gjenbruk nøkler).

### Personvern
- **GDPR art. 5-prinsippene:** transparency, purpose limitation, data minimisation,
  fair use, rights. Direkte vs indirekte personopplysninger. **Anonymisering:**
  generalization, suppression, anatomization, permutation (k-anonymitet-familien).
  Privacy by design.

### Øvrige
- Buffer/heap overflow (forsvar: trygge funksjoner, compiler-forsvar,
  grensesjekk, statisk analyse, type-trygt språk); skysikkerhet (WAF, IaaS-
  ansvarsdeling); AI/ML-sikkerhet (adversarial ML, AI-verktøys muligheter/
  begrensninger); juridiske forhold ved pentest (scope, autorisasjon,
  ansvarsfraskrivelse, taushetsplikt).

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes feilfritt (garantert, tunge poeng)
1. **RMF-caset som håndverk** (100 %, 25–40 p): hele kjeden goals→assets→business
   risks→misuse cases+attack trees→≥10 koblede tekniske risikoer→sikkerhetskrav→
   black-box pen-test-caser→GDPR. Dette er den største, sikreste potten. Drill
   *sjangeren*, ikke bare temaet.
2. **Injeksjon + OWASP-websårbarheter** (100 %): SQLi (data/kontroll), XSS
   (stored/reflected/DOM), CSRF, command/XPath/XXE — med strukturell fiks.
3. **Kodeanalyse-sjangeren** (75 %): (a) linje + (b) utnyttelse + (c) fiks, for
   de faste snutt-typene i tabellen i §3B.
4. **Sikker utvikling / SDLC** (88 %): touchpoints-rekkefølge, BSIMM vs OpenSAMM,
   CIA, «godt sikkerhetskrav = hva ikke hvordan».
5. **Autentisering & sesjon** (88 %): sesjonstoken-lagring med fordel/ulempe,
   session fixation/hijacking-forsvar, salting, passord-policy.

### Nivå 2 — må kunne (avgjør de mellomstore oppgavene)
6. **Anvendt krypto konseptuelt** (75 %): symmetrisk/asymmetrisk + riktig
   nøkkelbruk, OTP-gjenbruk, ECB→CBC+IV, digital signatur, TLS-handshake (4 steg),
   Vigenère-knekking.
7. **Personvern / GDPR** (75 %, ↑): art. 5-prinsippene, direkte/indirekte
   personopplysninger, anonymiseringsteknikkene.
8. **Tilgangskontroll-modeller** (63 %): Biba vs Bell-LaPadula (regelretning!),
   DAC-svakhet, multilevel/multilateral, SSO.
9. **Sikkerhetstesting / pentest** (63 %): black-box testcase med teststeg +
   forventet resultat; juridiske forhold.

### Nivå 3 — bør kjenne til (lavfrekvent, men fyller settet / vokser)
10. **Minnesikkerhet** (38 %): buffer/heap overflow angrep + ≥3 forsvar.
11. **Skysikkerhet** (38 %): WAF (hva den dekker/ikke dekker), IaaS-ansvarsdeling.
12. **AI/ML-sikkerhet** (25 %, ↑): adversarial ML, AI-verktøys muligheter/grenser.
13. **CVE/CVSS** (13 %, ↑), trusselaktør-typer, captcha, blockchain/PoW, iOS-kryptering.

### Prognose for neste ordinære eksamen
Forvent **Inspera-form**: ett stort **RMF-case** (~26 p) + en rekke **kortsvar
à 3–4 p** (OWASP-sårbarheter, krypto-konsepter, tilgangskontroll, SDLC,
personvern, kode-fiks) + en bolk **flervalg à 1 p** som feier hele pensum.
Personvern/GDPR og AI/ML-sikkerhet vil trolig veie tyngre enn i de eldre settene.
Ingen tallregning — vekten ligger på **presis begrepsforklaring, strukturell
kode-fiks og den fulle RMF-kjeden koblet til caset**.

**Studenten som kan kjøre RMF-caset som en oppskrift (med misuse case/attack
tree-kobling og teststeg/forventet-resultat-pentester), diagnostisere og fikse de
faste kodesnuttene strukturelt, og gjengi kjerne-kortsvarene presist (SQLi-rotårsak,
sesjonstoken-tabell, Biba vs Bell-LaPadula, BSIMM vs OpenSAMM, riktig nøkkelbruk,
GDPR art. 5) — tar en stor og trygg grunnpott på tvers av alle settene.**

---

## 8. Anbefalt bokarketype

**Base: DNA-drøftingsfag, kraftig forsterket med prosedyre-/sjangerkapitler i
regnefag-stil.** TDT4237 er et hybrid konseptuelt fag: kjernen er
**forklarende kortsvar og drøfting** (drøftingsfag-natur — begrepspresisjon,
ingen tallfasit), men fagets flaggskip-sjanger (RMF-caset) og kodeanalysen er
**prosedyriske oppskrifter** som må drilles som håndverk (regnefag-natur:
mønsteret gjentas identisk hvert år).

Konkret bør boka ha:
- **Del 0 — Eksamenskart + to håndverkskapitler:** (1) «Slik kjører du RMF-caset»
  (den fulle kjeden som trinn-for-trinn-oppskrift med tidsbudsjett og
  gjennomskrevet modell-case), (2) «Slik analyserer du en kodesnutt» (a-b-c-malen
  med gjennomgang av hver faste sårbarhetstype).
- **Temadeler** etter §2-frekvensen, med drøftingsfag-kapittel-DNA (kjernebegreper
  presist definert, posisjoner/avveininger, anvendelse, typiske feil fra
  sensorveiledningene).
- **Sjangerkapitler** (regnefag-stil, ett per sjanger fra §3): RMF-praktikum,
  kodeanalyse, pen-test-case-design, personvern/anonymisering — hver med
  gjennomskrevet modellbesvarelse og margkommentarer om poenguttelling.
- **Flervalgsdrill** som eget innslag (2023-formen) — billige, drillbare poeng.

Dette skiller seg fra TTM4135-arketypen: **ingen kvantitativ krypto-drill**, men
tung vekt på **prosedyriske case-/kode-sjangre + presis konseptuell drøfting**.

---

## 9. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TDT4237/`.

**Sensorveiledninger lest grundig (5):**
`TDT4237_x2015_sensuguide.pdf` (Sørensen), `TDT4237-2016-sensorguide.pdf`,
`TDT4237-2018-exam-censor-guide.pdf`, `TDT4237-2019-exam-censor-guide.pdf`,
`TDT4237-2023-exam-censor-guide.pdf` (Li).

**Oppgavesett lest grundig (8):** `TDT4237_x2015_eng.pdf`, `TDT4237-2016-exam.pdf`,
`TDT4237-2018-exam.pdf`, `TDT4237-2019-exam.pdf`, `TDT4237-2020-exam.pdf`,
`TDT4237-2021-exam.pdf`, `TDT4237-2022-exam.pdf`, `TDT4237-2023-exam.pdf`.

**Fagbeskrivelse:** omskrevet sammendrag av NTNUs emnebeskrivelse for TDT4237
(scratchpad: `fagbeskrivelse-tdt4237.md`; kilde:
<https://www.ntnu.no/studier/emner/TDT4237>).

**Forbilder:** `docs/hoyskole-boker/ttm4135/EKSAMENSANALYSE.md` (struktur og
NTNU-masternivå) og tdt4120 (kortsvarsstil).

### Merknader om evidensstyrke
- **Lite arkiv (8 sett, 5 med fasit).** Frekvensene i §2 er robuste for de
  høyfrekvente temaene (RMF, injeksjon, SDLC) men usikre for de lavfrekvente
  (AI/ML, CVE/CVSS, anonymisering) — disse er merket `↑`/`(svakt belagt)` og bør
  **verifiseres** mot gjeldende pensum/forelesningsnotater før de vektes tungt i
  boka.
- **Formen har skiftet to ganger** (papir-langsvar → Inspera → dagens 100 %-
  ordning); kontroller vekting og hjelpemiddelkode mot emnebeskrivelsen for det
  aktuelle året.
- **STRIDE-avviket** (§6): fagbeskrivelsen nevner STRIDE, men eksamensarkivet
  bruker konsekvent misuse cases + attack trees. Verifiser hvilken metode
  gjeldende kull undervises i.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og
  sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen
  oppgavetekster, fasiter eller løsningsforslag er gjengitt ordrett. Fagbegreper,
  rammeverksnavn, angreps-/forsvarsmekanismer og standardreferanser (OWASP, CWE,
  CVE, RMF, BSIMM) er allmenn faglig kunnskap.
