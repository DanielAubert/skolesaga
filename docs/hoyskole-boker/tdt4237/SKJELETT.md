# Bokskjelett: TDT4237 Programvaresikkerhet og personvern — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i
> kapitlet eller i eksplisitt refererte forkunnskaper (flytt teoribiten
> tidligere ved behov). Autoritativ kilde: README «Leserkrav» + arketypens
> DNA-fil. Unntak: øvingseksamen-/prøve-/modellbesvarelseskapitler følger sin
> egen arketype (komplett sett først, løsninger i collapsibles). Kvotene og
> innholdskontraktene i dette skjelettet er uendret — løkka styrer REKKEFØLGEN.


> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> **forfatteren leser IKKE eksamensarkivet.** Alle frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (NTNUs arkiv for TDT4237 *Software Security* / fra 2022 *Software Security and
> Data Privacy*: 8 oppgavesett V2015–V2023, hvorav 5 med offisiell sensorveiledning;
> faglærere Carl-Fredrik Sørensen 2015, Jingyue Li 2016–, personverndelen Per Håkon
> Meland). Emnet er aktivt (masternivå NTNU, neste tilbud V2027), undervises og
> eksamineres på **engelsk**; svar kan gis på engelsk eller norsk. Boka skrives på
> **norsk bokmål med engelsk fagterminologi** (OWASP, CWE, RMF, BSIMM osv. beholder
> engelsk navn ved første forekomst).
>
> **Faget er overveiende konseptuelt, ikke matematisk — INGEN tallregning finnes i
> noe sett.** «Det tekniske» er (a) *kodelesing* (finn sårbarheten, forklar
> utnyttelsen, skriv den strukturelle fiksen) og (b) *strukturert risikovurdering
> av et case (RMF)*. Balansen er ~85 % konseptuell forklaring/drøfting, ~15 %
> kodeanalyse — begge kvalitative.
>
> **Alle case, kodesnutter, oppgaver og «modellbesvarelser» i boka skal være
> NYSKREVNE** (se §8). Rammeverksnavn, angreps-/forsvarsmekanismer og standard-
> referanser (OWASP, CWE, CVE, RMF, BSIMM, Bell-LaPadula, GDPR art. 5) er allmenn
> faglig kunnskap; ingen oppgavetekster eller sensorkommentarer gjengis ordrett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tdt4237` |
| Tittel | **TDT4237 Programvaresikkerhet og personvern (NTNU)** |
| Institusjon | **NTNU** (i `institusjoner.ts`; visningsnavn «TDT4237 Programvaresikkerhet og personvern») |
| Level | `'Høyskole'` |
| Arketype | **Hybrid: DNA-drøfting (base) + prosedyre-/sjangerkapitler i DNA-regnefag-stil** — se hybridvalget under |
| Antall kapitler | **34** (Del 0: 3 · temadeler 1–9: 26 · eksamenstrening Del 10: 5) |
| Estimert totaltid | **≈ 2 190 min ≈ 37 timer** (fordelt per kapittel under; øvingseksamenene teller tungt) |
| Quiz totalt | **656** (krav ≥500 — se §5) |
| Flashcards totalt | **656** (krav ≥500 — se §5) |
| Prøver | **36** (4 per temadel 1–9) + **3 øvingseksamener** (kap. 10.3–10.5) |

**Pitch (én avsnitt):** TDT4237 har ett soleklart tyngdepunkt: **RMF-risikovurdering
av et case** dukker opp i *hvert eneste* sett (8/8 = 100 %) og utgjør 25–40 % av
poengene — *dette er selve faget*. Alt annet er byggeklosser som mates inn i caset.
Rundt kjernen ligger tre nesten like sikre kortsvarsblokker: **trusselmodellering**
(misuse cases + attack trees, 100 %), **injeksjon/OWASP-websårbarheter** (SQLi/XSS/
CSRF, 100 %) og **sikker programvareutvikling/SDLC** (BSIMM vs OpenSAMM, touchpoints,
CIA, 88 %), pluss **autentisering & sesjon** (88 %). Boka driller derfor tre
kalibrerte ferdigheter: (1) å **kjøre RMF-kjeden som en oppskrift** koblet til caset,
(2) å **diagnostisere og fikse de faste kodesnuttene strukturelt** (tre-ledds a-b-c-
malen), og (3) å **gjengi kjerne-kortsvarene presist** (SQLi-rotårsak, sesjonstoken-
tabellen, Biba vs Bell-LaPadula, BSIMM vs OpenSAMM, riktig nøkkelbruk, GDPR art. 5).
Formen har skiftet fra papir-langsvar (2015–2019) til Inspera digital (2020→) med
RMF-case + kortsvar à 3–4 p + fra 2023 en **ren flervalgsbolk à 1 p** som feier hele
pensum — de billigste, mest drillbare poengene. Personvern/GDPR og AI/ML-sikkerhet er
klare vekstakser.

**Kritiske kalibreringsregler (ufravikelige — gjelder HELE boka):**

1. **RMF-caset er oppskrift-håndverk, ikke tema.** Den faste kjeden
   *forretningsmål → verdier (assets) → forretningsrisiko (risikomatrise) → misuse
   cases + attack trees → ≥10 tekniske risikoer → sikkerhetskrav → black-box
   pen-test-caser → personvern/GDPR* drilles som en algoritmisk prosedyre (Del 9).
   Hvert modellsvar følger kjeden ledd for ledd.
2. **«Koble til caset»-regelen (den dyreste feilen).** Sensor trekker typisk **−2
   poeng** når tekniske risikoer bare er en generisk liste (SQLi, DDoS, svakt
   passord) *uten* eksplisitt kobling til misuse case/attack tree OG til det konkrete
   caset OG til en business risk. Denne warningen (feil #1) skal stå i HVER
   RMF-relatert `warning`-blokk (Del 3 og Del 9).
3. **Kodeanalyse krever alltid tre ledd** (feil #4): **(a) sårbarhet + eksakt
   linje/lokasjon**, **(b) hvorfor den er farlig + utnyttelsesveien**, **(c) forklart
   strukturell fiks** (ikke bare «saniter input», feil #5). Mangler ett ledd, mistes
   poeng. Denne tre-ledds-malen er en `theorem`-blokk (prosedyre-kontrakt) i kap. 2.5
   og gjentas i hver kodeoppgave-fasit.
4. **Eksakt antall er absolutt** (feil #12). Ber oppgaven om «list minst 3/list 10»,
   gir hvert element 1 (del)poeng — treff antallet. Hver kortsvarsfasit sier eksplisitt
   hvor mange elementer som kreves, og leverer minst så mange.
5. **«Brief and to the point».** Sensor belønner **kompakt og punktvis**, ikke langt
   og svevende (feil #13). Modellsvarene er stramme; boka lærer eksplisitt at ekstra
   tekst ikke gir uttelling.
6. **Presis navngiving skiller sterk fra svak.** Kall XSS «stored» når den er lagret
   (feil #6); si Biba = «no write up, no read down» og Bell-LaPadula = «no write down,
   no read up» korrekt (feil #7); skill CVE (liste over sårbarheter) fra CVSS
   (alvorlighetsscore, feil #8); skill BSIMM (deskriptiv) fra OpenSAMM (preskriptiv,
   feil #9); krypter med **mottakers offentlige** nøkkel og signer med **egen private**
   (feil #10).
7. **STRIDE-avviket** (se §3 og kap. 3.3): fagbeskrivelsen nevner STRIDE, men **INGEN
   av de åtte settene bruker STRIDE** — den faktiske eksamensmetoden er **misuse cases
   + attack trees (+ RMF)**. Boka bygger på misuse cases/attack trees og behandler
   STRIDE som *bakgrunn* («bør kjenne til»), aldri som eksamensmetode. `(verifiser mot
   gjeldende pensum/forelesningsnotater.)`

**Vektings-caveat (skal stå i Del 0):** Formen og vektingen har skiftet **to ganger**
— 70/30 skriftlig/øving (2015–2019) → 50/50 (2020–2021, korona-hjemme) → dagens
ordning som oppgir **4 t skriftlig skoleeksamen 100 %, hjelpemiddelkode E, A–F**.
**2020–2021 er ikke representative** (korona-hjemmeeksamener redusert til nesten bare
RMF-caset), men er ypperlig case-trening. Boka bygges mot **dagens Inspera-form**
(RMF-case + kortsvar + flervalgsbolk). Alle vektingstall merkes `(verifiser mot
emnebeskrivelsen for det aktuelle året)`.

### Hybridvalget (dokumentert — jf. analysen §8)

**Base: DNA-drøftingsfag** — kjernen er forklarende kortsvar og drøfting uten
tallfasit; sensor vurderer begrepspresisjon, korrekt navngiving og kobling, ikke
mellomregning. **Forsterket med prosedyre-/sjangerkapitler i DNA-regnefag-stil** —
fagets flaggskip (RMF-caset) og kodeanalysen er *prosedyriske oppskrifter* der samme
mønster gjentas identisk hvert år og må drilles som håndverk (regnefag-natur:
løsningsoppskrift → gjennomskrevet sensor-kommentert case → mange oppgaver på
eksamensnivå). Konkret betyr hybriden:

- **Temakapitlene** (Del 1–8) følger drøfting-DNA-ens temakapittel-mal: Eksamensvinkel
  → temaet i landskapet → kjernebegreper presist definert → posisjoner/avveininger →
  anvendelse → typiske feil → oppgaver.
- **Sjanger-/prosedyrekapitlene** (kodeanalyse-drill 2.5, RMF-oppskrift 9.1, pen-test-
  design 9.4, flervalgsdrill 10.1) følger regnefag-DNA-ens drill-mal: løsningsoppskrift
  → gjennomskrevet case med margnotater om poenguttelling → mange oppgaver.
- **Modellbesvarelse-kapitlene** (9.2–9.3 RMF, 10.2 kortsvarsbank) følger drøfting-
  DNA-ens modellbesvarelse-mal, men på prosedyresjangeren: full modellbesvarelse +
  kommentert svakere variant + sensorblikk.

**Avvik fra DNA-malene (bevisste, dokumentert):**

- **«Symbol- og formelliste» → «Begreps- og forkortelsesliste».** README/DNA krever en
  `collapsible` symbol-/formelliste per delkapittel. Faget har nesten ingen matematiske
  symboler; det presise apparatet er **akronymer og standardnavn** (OWASP-kategorier,
  CWE-numre, RMF-trinn, BSIMM/OpenSAMM, Bell-LaPadula/Biba, GDPR art. 5) og noen få
  notasjoner (`c = m ⊕ k`, PK/SK, IV, CBC/ECB). Blokken heter derfor **«Begreps- og
  forkortelsesliste»** og forklarer ALLE forkortelser, rammeverksnavn og notasjoner
  delkapitlet bruker. Regelen «per delkapittel, ikke arv» beholdes.
- **`theorem`-blokker brukes for prosedyre-kontrakter og faste tabeller.** Faget har
  ingen matematiske teoremer. `theorem` huser i stedet de **faste oppskriftene som
  skal sitte i ryggmargen**: RMF-kjeden (kap. 9.1), kodeanalysens tre-ledds-mal (kap.
  2.5), misuse-case-notasjonen threaten/mitigate/exploit (kap. 3.1), touchpoints i
  effektivitetsrekkefølge (kap. 4.1), sesjonstoken-tabellen (kap. 5.2), tilgangskontroll-
  regelretningene (kap. 5.3) og TLS-handshaken i 4 steg (kap. 6.2). Disse er bokas
  «teoremer».
- **Begrepsforankring til rammeverk/standard, ikke til pensum-forfatter-drøfting.**
  Drøfting-DNA-en forankrer hvert begrep i en navngitt forfatter/verk. Her forankres
  begrepene i **rammeverk og standarder** (OWASP Top 10, McGraw RMF/touchpoints,
  Sindre/Opdahl misuse cases, Bell-LaPadula/Biba, BSIMM/OWASP SAMM, GDPR art. 5) —
  det er disse fasitene faktisk krever, ikke akademisk pensum-drøfting. Navngitte
  opphav nevnes der de er faste (McGraw for RMF, Sindre/Opdahl for misuse cases).
- **Quiz kalibreres som eksamenstrening for flervalgsbolken.** Uvanlig godt tilpasset:
  Inspera-eksamen har **fra 2023 en ren flervalgsbolk à 1 p** (~18 MCQ) som feier
  pensumbredden. Plattformens quiz ER dermed direkte eksamenstrening. Quiz kalibreres
  som gjenkjenning av kjernefakta (CIA, symmetrisk/asymmetrisk, CVE/CVSS, buffer
  overflow-forsvar, session hijacking-mottiltak, Biba-regler, «hvilken sårbarhet er
  dette»). `options[0]` = riktig svar (runtime stokker).
- **Flashcards kalibreres som begrep ↔ definisjon/rotårsak/fiks/regelretning.** Faget er
  ekstremt begrepsrikt; flashcards parer et **navn** med presis **kjerne** (f.eks.
  «SQLi-rotårsak → input tolkes som kontroll (kommando) i stedet for data»; «Biba →
  no write up, no read down (integritet)»; «BSIMM → deskriptiv»; «CSRF-fiks →
  anti-CSRF-token verifisert server-side»). Dette er puggematerialet for en
  hjelpemiddelfri eksamen.
- **Kapittelantall (34) og RMF-tyngden.** Drøfting-DNA-en veileder 15–30 kapitler; 34
  er en bevisst konsekvens av (a) fagets bredde (åtte høyfrekvente temaer + fem
  «bør kjenne»-temaer) og (b) at RMF-praktikumdelen (Del 9) er stor og fortjener egen
  oppskrift + to fulle modellbesvarelser + pen-test-design (jf. «RMF er selve faget»).
- **Del 0 har 3 håndverkskapitler, og RMF-håndverket er flyttet til egen stor Del 9.**
  Drøfting-DNA-en legger typisk RMF-/case-håndverket i Del 0. Fordi RMF er så stort og
  sentralt, får det i stedet en egen praktikumdel (Del 9) med oppskrift + modell-
  besvarelser; Del 0 dekker kortsvar-, drøftings- og flervalgshåndverket.

---

## 2. Makrostruktur

Rekkefølgen bygger fra grunnbegreper mot faget flaggskip: sikkerhetsgrunnlag → de tre
sikre kortsvarsblokkene (websårbarheter, trusselmodellering, SDLC) → autentisering →
krypto → personvern → **bør kjenne**-temaene → **RMF-praktikum (klimaks)** →
eksamenstrening. Frekvensen (analysen §2/§7) styrer *omfanget*: perfekt-temaer får
flere kapitler + drill; kjenne-temaer får kompakte kapitler. `sectionNames`
(bokforsiden) settes fra kolonne 2.

| Del | `sectionName` (bokforsiden) | Kap. | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|
| 0 | Eksamenskart, kortsvar, drøfting og flervalg | 3 | DNA-obligatorisk + flervalgs-utvidelse: Inspera-formen (RMF-case + kortsvar + flervalgsbolk) krever eget håndverk for hver svarform. Sensorens metaregler («brief and to the point», eksakt antall, koble alt) etableres FØR fagstoffet. |
| 1 | Sikkerhetsgrunnlag: CIA, trusselaktører og CVE/CVSS | 3 | Grunnbegrepene alle kortsvar hviler på. CIA/SDLC 88 %; threat agents eget MCQ (2023); CVE/CVSS nytt MCQ-/kortsvarstoff (2023, ↑). |
| 2 | Websårbarheter (OWASP) og kodeanalyse | 5 | **Injeksjon/OWASP 100 % + kodeanalyse-sjanger 75 %** (nivå 1). SQLi/XSS/CSRF nesten garantert + den faste tre-ledds kodesnutt-analysen → 4 tema + eget kodeanalyse-drillkapittel. |
| 3 | Trusselmodellering: misuse cases og attack trees | 3 | **Trusselmodellering 100 %** (nivå 1) — del av caset + eget MCQ. Selve metoden RMF bygger på (mater tekniske risikoer). STRIDE-avviket avklares her. |
| 4 | Sikker programvareutvikling: SDLC og modenhetsmodeller | 2 | **SDLC 88 %** (nivå 1). Touchpoints-rekkefølge, BSIMM vs OpenSAMM (fast favoritt), CIA, «godt sikkerhetskrav». |
| 5 | Autentisering, sesjon og tilgangskontroll | 3 | **Auth & sesjon 88 %** (nivå 1) + tilgangskontroll-modeller 63 % (nivå 2). Sesjonstoken-tabellen og Biba vs Bell-LaPadula er faste kortsvar. |
| 6 | Anvendt kryptografi (konseptuelt) | 2 | **Krypto konseptuelt 75 %** (nivå 2). Symmetrisk/asymmetrisk + riktig nøkkelbruk, OTP-gjenbruk, ECB→CBC+IV, Vigenère, signatur, TLS-handshake. Ingen tallregning. |
| 7 | Personvern og GDPR | 2 | **Personvern 75 % ↑** (nivå 2, klareste vekstakse). GDPR art. 5, direkte/indirekte personopplysninger, anonymisering, privacy by design. |
| 8 | Bør kjenne: minnesikkerhet, sky og AI/ML-sikkerhet | 2 | Nivå 3 (lavfrekvent/voksende), men fyller flervalgsbolken. Buffer/heap overflow 38 %, skysikkerhet 38 %, AI/ML 25 % ↑. |
| 9 | RMF-risikovurdering (praktikum) | 4 | **RMF-caset 100 %, 25–40 p — selve faget** (nivå 1, tyngst). Egen oppskrift + to fulle modellbesvarelser + pen-test-case-design med juss. |
| 10 | Eksamenstrening | 5 | Flervalgsdrill (2023-formen) + kortsvar-/drøftingsbank + **3 øvingseksamener** (RMF-case + kortsvar + flervalgsbolk). |

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart, kortsvar, drøfting og flervalg |
| 1 | Sikkerhetsgrunnlag: CIA, trusselaktører og CVE/CVSS |
| 2 | Websårbarheter (OWASP) og kodeanalyse |
| 3 | Trusselmodellering: misuse cases og attack trees |
| 4 | Sikker programvareutvikling: SDLC og modenhetsmodeller |
| 5 | Autentisering, sesjon og tilgangskontroll |
| 6 | Anvendt kryptografi (konseptuelt) |
| 7 | Personvern og GDPR |
| 8 | Bør kjenne: minnesikkerhet, sky og AI/ML-sikkerhet |
| 9 | RMF-risikovurdering (praktikum) |
| 10 | Eksamenstrening |

---

## 3. Sjangerkatalog, feilkoder, vurderingsakser og prosedyre-maler

### Sjangerkoder (brukes i eksamensbelegg under, fra analysen §3)

**RMF** — RMF-risikovurdering av case (garantert, tyngst, 25–40 p): hele kjeden
*goals → assets → business risks (matrise) → misuse cases + attack trees → ≥10 tekniske
risikoer → sikkerhetskrav → black-box pen-test-caser → personvern/GDPR*. ·
**KODE** — kodesnutt-sårbarhetsanalyse, obligatorisk tre-ledds (a linje + b utnyttelse
+ c strukturell fiks). · **KORT** — teori-kortsvar, poeng per delelement, eksakt antall
kreves. · **DRØFT** — drøfting/dilemma (personvern-etikk, juss ved pentest, AI/ML-
grenser). · **PENTEST** — black-box testcase, **teststeg + forventet resultat per
steg**. · **MCQ** — flervalg à 1 p (Inspera 2023→), gjenkjenning, feier hele pensum.

### Feilkoder (brukes i «Typiske feil» under, fra analysen §5)

**#1** tekniske risikoer uten kobling til misuse case/attack tree OG caset OG business
risk (**den dyreste, −2 p**) · **#2** glemme teststeg/forventet resultat i pen-test-
casene (halv uttelling) · **#3** blande forretningsmål og verdier (assets), eller hoppe
over risikomatrise-rangeringen · **#4** kodeanalyse uten linjenummer eller uten
utnyttelsesvei (ett av tre ledd mangler) · **#5** «saniter input» som eneste fiks der
sensor vil ha den strukturelle løsningen (prepared statements / tilgangskontroll /
whitelist / `SecureRandom`) · **#6** ikke kalle XSS «stored» når den er lagret (kun
delvis uttelling) · **#7** bytte om tilgangskontrollreglene (Biba = no write up/no read
down; Bell-LaPadula = no write down/no read up) · **#8** forveksle CVE (sårbarhetsliste)
og CVSS (alvorlighetsscore) · **#9** forveksle BSIMM (deskriptiv) og OpenSAMM
(preskriptiv) · **#10** feil nøkkel i asymmetrisk krypto/signatur (krypter med mottakers
offentlige; signer med egen private) · **#11** glemme IV/kjeding ved CBC, eller ikke
forklare *hvorfor* OTP-nøkkelgjenbruk lekker (`c1 ⊕ c2 = m1 ⊕ m2`) · **#12** treffe feil
antall delelementer · **#13** skrive langt og svevende i stedet for kompakt/punktvis ·
**#14** glemme personvernkoblingen til slutt i caset (identifiser personopplysningene +
drøft mot art. 5).

### Sensorens metaregler og vurderingsakser (malen for alle modellsvar, analysen §4)

1. **«Brief and to the point»** i hvert sett — stramt, men fullstendig; konkret og
   punktvis belønnes.
2. **Poeng per delelement; antallskrav er absolutte** — treff antallet.
3. **Kodeanalyse: alltid (a) linje + (b) utnyttelsesvei + (c) forklart fiks.**
4. **Case: koble hver teknisk risiko til misuse case/attack tree OG caset OG en
   business risk** — generiske lister → −2 p.
5. **Pen-test-caser: teststeg + forventet resultat per steg** — ikke bare «test for
   SQLi».
6. **Dokumentér antakelser eksplisitt** når oppgaven er tvetydig (oppfordret i alle
   sett).
7. **Fasiten godtar flere korrekte varianter** i de åpne case-/drøftingsdelene, men
   krever presisjon og kobling. **Strukturell fiks slår «saniter input».**

Modellbesvarelsene graderes i tre nivåer (minimum → god → meget god) på fire akser:
**presis navngiving** · **strukturell/riktig mekanisme** (ikke overflate) · **kobling**
(risiko↔trusselmodell↔case; kode↔utnyttelse↔fiks) · **treff på antall/format** (eksakt
antall; teststeg+forventet).

### Prosedyre-mal A — RMF-oppskriften (`theorem` i kap. 9.1, gjentas i 9.2–9.3)

Den faste kjeden sensor forlanger, ledd for ledd (McGraw RMF). Alle ledd **koblet til
det konkrete caset**:

1. **Forstå forretningskonteksten → forretningsmål + verdier (assets).** Skill de to
   klart (feil #3). Mål = omdømme, flere brukere, inntekt, rask/sikker betaling,
   tilgjengelighet. Assets = brukeridentiteter/credentials, personopplysninger,
   betalingstransaksjoner, kredittkort/bankkonto, krypteringsnøkler, admin-tilganger,
   logg. Treff minimumsantallet oppgaven ber om («minst 4/5»).
2. **Forretningsrisikoer i risikomatrise** (sannsynlighet × konsekvens → L/M/H), med
   *kort begrunnelse* for rangeringen.
3. **Misuse cases + attack trees** — tegn/beskriv dem (aktør, use case, misuse case,
   vulnerability, security use case, relasjoner threaten/mitigate/exploit; attack tree
   = angrepsmål på toppen, angrepsveier nedover).
4. **≥10 tekniske risikoer** — hver **utledet fra misuse case/attack tree OG koblet til
   en business risk OG til caset** (feil #1, −2 p). Én risiko = 1 poeng.
5. **Sikkerhetskrav** — ett per teknisk risiko. Et *godt* krav sier **hva** som skal
   oppnås, ikke **hvordan** (bind ikke mekanismevalget).
6. **Black-box pen-test-caser** — hver med **teststeg + forventet resultat per steg**
   (feil #2). Én krav+test = 1 poeng.
7. **Personvern/GDPR-avslutning** (feil #14) — pek ut personopplysningene (direkte:
   e-post, kredittkort, navn, adresse; indirekte: brukernavn, alder, kjønn, medisinske
   data, sensordata) og drøft mot **art. 5-prinsippene** (transparency, purpose
   limitation, data minimisation, fair use, rights). Ofte «drøft to av fem».

### Prosedyre-mal B — Kodeanalysens tre-ledds-mal (`theorem` i kap. 2.5, gjentas i hver KODE-fasit)

For hver snutt, tre ledd — mangler ett, mistes poeng (feil #4):
- **(a) Identifiser sårbarheten OG eksakt linjenummer/lokasjon.**
- **(b) Forklar hvorfor den er farlig OG hvordan den utnyttes** (skriv utnyttelsesveien).
- **(c) Fiks koden strukturelt** (pseudokode ok, men **forklar** fiksen — den *riktige*
  mekanismen, ikke bare «saniter», feil #5).

Fast katalog av plantede sårbarheter og deres strukturelle fiks (drilles i 2.5):

| Sårbarhet | Strukturell fasit-fiks |
|---|---|
| Insecure randomness (statistisk PRNG) | Kryptografisk PRNG (`SecureRandom`) |
| Predikerbart/svakt sesjonstoken (`md5($username)`) | Legg til entropi/randomness i tokenet |
| Stored/reflected/DOM **XSS** | Saniter + escape output; **kall den «stored»** når lagret (feil #6) |
| **CSRF** | Anti-CSRF-token i skjult felt, verifiser server-side (+ SameSite) |
| Insecure deserialization / object injection | Ikke deserialiser rå input; valider / bruk JSON |
| Directory/path traversal (`../`) | Whitelist / `basename(realpath())`, fjern `../` |
| Insecure Direct Object Reference (IDOR) | Håndhev autorisasjon server-side |
| **SQL/XPath-injeksjon** (strengkonkatenert query) | Parameteriserte spørringer (skill data-plan fra kontroll-plan) |
| Open redirect (`sendRedirect(url)`) | «Accept known good» whitelist av mål |
| Sensitive data i klartekst (passord i DB) | Hash + salt (aldri klartekst/reversibelt) |
| Buffer overflow (`strcpy` i C) | Trygge funksjoner (`strncpy`/`strlcpy`), grensesjekk |
| Insufficient session expiration / info leakage | Kort levetid / generisk feilmelding |

---

## 4. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens (av 8 sett) + sjangerkoder (RMF/KODE/
> KORT/DRØFT/PENTEST/MCQ) + prioritetsklasse (**perfekt** = nivå 1 / **kunne** = nivå 2
> / **kjenne** = nivå 3, fra analysen §7). **Kvote** = quiz/flashcards (autoritativt,
> §5). Temakapitler følger drøfting-DNA-ens temakapittel-DNA: `tip` Eksamensvinkel →
> `text` Forkunnskaper (+ `collapsible` Begreps- og forkortelsesliste) → `text` temaet
> i landskapet → `definition` kjernebegreper (flashcard-kilden — toppnivå med title!)
> → `text` posisjoner/avveininger → `example` anvendelse ×1–3 → `warning` Typiske feil
> → `exercise` ×4–8 → `collapsible` repetisjon. Sjanger-/drill-/praktikumkapitler følger
> regnefag-DNA-ens drill-mal (løsningsoppskrift som `theorem` → gjennomskrevet
> sensor-kommentert case → oppgaver på eksamensnivå).

### Del 0 — Eksamenskart, kortsvar, drøfting og flervalg

#### Kapittel 0.1: Slik testes TDT4237
**id:** `tdt4237-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen (to epoker, Inspera-formen i dag), vektings-skiftet,
  hjelpemiddelkode E, temafrekvensen og hvordan boka brukes mot eksamen.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (8 sett V2015–V2023).
  Skal formidle: (a) **to epoker** — 2015–2019 papir-langsvar (3 problem: teori-kortsvar
  + case-RMF + kodeanalyse), 2020→ Inspera digital (RMF-case + kortsvar à 3–4 p + fra
  2023 **flervalgsbolk à 1 p**); (b) **vektings-skiftet** 70/30 → 50/50 → dagens 100 %
  skriftlig, hjelpemiddelkode E, A–F `(verifiser mot emnebeskrivelsen)`; (c)
  **2020–2021 ikke representative** (korona-hjemme, nesten bare RMF-caset) men god
  case-trening; (d) **temafrekvenstabellen** (av 8 sett): RMF-case 8/8 · trusselmodellering
  8/8 · injeksjon/OWASP 8/8 · SDLC 7/8 · auth & sesjon 7/8 · krypto 6/8 · kodeanalyse
  6/8 · personvern 6/8 ↑ · tilgangskontroll 5/8 · pentest 5/8 · minnesikkerhet 3/8 ·
  sky 3/8 · AI/ML 2/8 ↑ · CVE/CVSS 1/8 ↑. Prioritet: perfekt (metanivå).
- **Begrepskontrakt:** ingen fagbegreper — men presise beskrivelser av de seks sjangrene
  RMF/KODE/KORT/DRØFT/PENTEST/MCQ med typisk plassering og tidsbudsjett (RMF-case ~60–90
  min; kortsvar ~8–12 min hver; flervalg ~1–2 min hver). Tre mantraer innføres: «**koble
  alt til caset**», «**tre ledd i hver kodeanalyse**», «**treff eksakt antall**».
- **Drøftingsakser:** ingen (kartkapittel).
- **Case-forslag:** «Slik leser du et Inspera-sett» — gjennomgang av ett nyskrevet sett i
  dagens form (RMF-case + ~10 kortsvar + ~15 flervalg), med demonstrasjon av tidsbudsjett
  og rekkefølge (sikre flervalgspoengene raskt, invester i RMF-caset).
- **Typiske feil:** #13 skrive langt (ingen ekstra uttelling, tapt tid); #12 treffe feil
  antall; #1 glemme case-koblingen (peker frem til Del 9).
- **Kvote:** 12 quiz / 8 flashcards (eksamensform, epokene, vekting, hjelpemiddelkode,
  sjangergjenkjenning, temafrekvens-tall).

#### Kapittel 0.2: Kortsvar- og drøftingshåndverket
**id:** `tdt4237-0-2` · **number:** 0.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4237-0-1`

- **Kapitteltype:** sjangerhåndverk (KORT + DRØFT).
- **Description:** Hvordan et teori-kortsvar og en kort drøfting bygges, og hva som
  skiller minimum / god / meget god ifølge sensorveiledningene.
- **Eksamensbelegg:** Destillat av kortsvars-/drøftingskravene (analysen §3 Type C/D,
  §4). Prioritet: perfekt. Skal operasjonalisere **firetrinns-kortsvaret:** (1) presis
  definisjon med korrekt navngiving; (2) relevant distinksjon der begrepet har en
  (stored/reflected XSS, CVE/CVSS, BSIMM/OpenSAMM, symmetrisk/asymmetrisk, Biba/Bell-
  LaPadula); (3) **treff eksakt antall** delelementer oppgaven ber om (nevn ≥3 av 5
  motmidler osv.); (4) konkret eksempel/utnyttelse, ikke løs prat. **Tre-nivå-gradering:**
  minimum = korrekt kjerne; god = kjerne + distinksjon + eksempel; meget god =
  strukturell mekanisme + kobling + presis navngiving. Drøftingsdelen (DRØFT): fremstill
  posisjonene ærlig, dokumentér antakelser (§4 pkt. 6), konkluder.
- **Begrepskontrakt:** kortsvarsarkitekturen (fire trinn) + tidsbudsjett (~8–12 min per
  svar) + «brief and to the point» + «poeng per delelement». Mantra: «definisjon uten
  presis navngiving og uten eksempel er minimums-/C-stoff».
- **Drøftingsakser:** presisjon vs. bredde (heller treffe antallet enn skrive langt);
  når «koble til et annet tema» løfter et kortsvar uten å sprenge tidsrammen.
- **Case-forslag:** samme kortsvarsoppgave («forklar rotårsaken til SQL-injeksjon og nevn
  minst tre motmidler») besvart tre ganger — E (bare «brukerinput er farlig»), C/god
  (rotårsak + tre motmidler), A/meget god (data/kontroll-separasjon + prepared statements
  som strukturell fiks + eksempel) — med margkommentarer.
- **Typiske feil:** #12 treffe feil antall; #13 skrive langt; #5 overflatefiks i stedet
  for strukturell; #8/#9 upresis navngiving.
- **Kvote:** 14 quiz / 10 flashcards (fire trinn, tre-nivå-kjennetegn, tidsbudsjett,
  eksakt-antall-regelen, «brief and to the point»).

#### Kapittel 0.3: Flervalgshåndverket (Inspera-bolken)
**id:** `tdt4237-0-3` · **number:** 0.3 · **estimatedMinutes:** 35 · **prerequisites:** `tdt4237-0-1`

- **Kapitteltype:** sjangerhåndverk (MCQ).
- **Description:** Hvordan flervalgsbolken (2023→) høstes raskt og trygt — de billigste
  poengene, samme pensum som kortsvarene i gjenkjenningsformat.
- **Eksamensbelegg:** 2023-settets flervalgsbolk (~18 MCQ à 1 p, Q16–33): CIA-triaden,
  symmetrisk/asymmetrisk krypto, CVE/CVSS, buffer overflow-forsvar, session hijacking-
  mottiltak (HttpOnly/Secure), captcha, command injection, trusselaktør-karakteristikker,
  sikkerhetskrav-definisjon, kode-diagnose. Prioritet: perfekt (billige garanterte poeng).
  `(svakt belagt for trekkregel — ingen fasit i arkivet oppgir MCQ-trekk.)`
- **Begrepskontrakt:** ingen nye fagbegreper — men lesestrategi for flervalg: (1)
  gjenkjenn hvilket tema spørsmålet feier; (2) elimér distraktorer via presis navngiving
  (CVE ≠ CVSS, BSIMM ≠ OpenSAMM, stored ≠ reflected); (3) tidsbudsjett ~1–2 min/spørsmål;
  (4) at flervalg dekker *nøyaktig samme pensum* som kortsvarene.
- **Drøftingsakser:** ingen (håndverkskapittel).
- **Case-forslag:** 12 nyskrevne flervalgsspørsmål med kommentar til hver distraktor —
  hvorfor de gale er «nesten riktige» (de spiller på de faste forvekslingene #7–#10).
- **Typiske feil:** #8/#9/#7/#10 falle for forveksling-distraktorer; #13 bruke for lang
  tid på ett flervalg når det teller likt med et vanskeligere kortsvar.
- **Kvote:** 12 quiz / 8 flashcards (flervalgs-lesestrategi, distraktor-fellene, hvilke
  temaer bolken feier, tidsbudsjett).

### Del 1 — Sikkerhetsgrunnlag: CIA, trusselaktører og CVE/CVSS

#### Kapittel 1.1: CIA-triaden og kjernebegrepene
**id:** `tdt4237-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4237-0-2`

- **Kapitteltype:** tema.
- **Description:** Confidentiality/Integrity/Availability + de utvidede egenskapene, og
  skillet asset/vulnerability/threat/risk som hele faget bygger på.
- **Eksamensbelegg:** CIA innbakt i SDLC (7/8) + eget MCQ (2023). Sjangre: KORT, MCQ,
  koblingsstoff i RMF (assets/risk-begrepene). Prioritet: **perfekt** (§7 — grunnlaget
  alle andre kortsvar og hele RMF-caset hviler på).
- **Begrepskontrakt:** **CIA-triaden** — confidentiality (fortrolighet), integrity
  (integritet), availability (tilgjengelighet), hver med et konkret eksempel; utvidet:
  authenticity, non-repudiation (uavviselighet), accountability; **asset** (verdi),
  **vulnerability** (svakhet), **threat** (trussel), **threat agent** (trusselaktør),
  **risk** = sannsynlighet × konsekvens, **attack surface** (angrepsflate); **defense
  in depth**; skillet **security ≠ privacy** (peker frem til Del 7).
- **Drøftingsakser:** når CIA-egenskapene står i konflikt (tilgjengelighet vs.
  fortrolighet); hvorfor «risk» krever både sannsynlighet OG konsekvens (bygger risiko-
  matrisen i RMF); asset-begrepet som brua fra CIA til RMF-trinn 1.
- **Case-forslag:** klassifiser et nyskrevet system (f.eks. en pasientjournal-app) langs
  CIA — hvilken egenskap veier tyngst, og hvorfor.
- **Typiske feil:** #3 blande asset og risiko/trussel; #6-variant upresis definisjon av
  én CIA-egenskap; gjengi CIA uten et eksempel som viser egenskapen.
- **Kvote:** 24 quiz / 32 flashcards (CIA + eksempler, utvidede egenskaper, asset/vuln/
  threat/risk, attack surface, begrep↔definisjon).

#### Kapittel 1.2: Trusselaktører og angrepsflate
**id:** `tdt4237-1-2` · **number:** 1.2 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4237-1-1`

- **Kapitteltype:** tema.
- **Description:** Hvem angriperne er (threat agents), hva som driver dem, og hvordan
  angrepsflaten kartlegges — grunnlaget for trusselmodellering og RMF.
- **Eksamensbelegg:** Trusselmodellering 8/8 (threat agents eget MCQ 2023). Sjangre: MCQ,
  KORT, koblingsstoff i RMF (misuse case-aktører). Prioritet: **kunne** (§7 pkt. 2/13 —
  matere til trusselmodellen).
- **Begrepskontrakt:** **threat agent / trusselaktør**-typer (script kiddie, innsider,
  organisert kriminalitet, statlig aktør, hacktivist) med **motivasjon, ressurser og
  ferdighet** som karakteristikker; **attack surface** (summen av inngangspunkter);
  **abuse case** (misbruk sett fra angriperens side); hvordan aktørprofilen bestemmer
  hvilke misuse cases som er realistiske.
- **Drøftingsakser:** hvorfor angriperens ressurser/motivasjon endrer risikorangeringen;
  innsidetrussel vs. ekstern; når «reduser angrepsflaten» er billigere enn å forsvare
  hvert inngangspunkt.
- **Case-forslag:** kartlegg angrepsflaten til en nyskrevet nett-tjeneste og knytt to
  aktørtyper til realistiske misuse cases (peker frem til kap. 3.1).
- **Typiske feil:** #6 threat agent-typer uten karakteristikkene (motivasjon/ressurs/
  ferdighet); behandle alle angripere som like; overse innsidetrusselen.
- **Kvote:** 18 quiz / 22 flashcards (aktørtyper + karakteristikker, angrepsflate, abuse
  case, aktør↔misuse case).

#### Kapittel 1.3: CVE, CVSS og sårbarhetslandskapet
**id:** `tdt4237-1-3` · **number:** 1.3 · **estimatedMinutes:** 40 · **prerequisites:** `tdt4237-1-1`

- **Kapitteltype:** tema.
- **Description:** Forskjellen på en sårbarhetsliste (CVE), en alvorlighetsscore (CVSS)
  og en svakhetskatalog (CWE) — nytt, voksende MCQ-/kortsvarstoff.
- **Eksamensbelegg:** 1/8 ↑ (2023: score Heartbleed, CVE vs CVSS — nytt MCQ + kortsvar).
  Sjangre: MCQ, KORT. Prioritet: **kjenne** (§7 pkt. 13, ↑). `(svakt belagt — kun ett
  sett; verifiser vekt mot gjeldende pensum.)`
- **Begrepskontrakt:** **CVE** (Common Vulnerabilities and Exposures — en *liste/ID over
  kjente sårbarheter*, f.eks. Heartbleed) vs. **CVSS** (Common Vulnerability Scoring
  System — en *alvorlighetsscore* 0–10) — skillet sensor tester (feil #8); **CWE**
  (Common Weakness Enumeration — katalog over svakhetstyper, brukt som kildereferanse i
  settene: CWE-384 session fixation, CWE-601 open redirect, CWE-613 session expiration,
  CWE-643 XPath); patch-/oppdateringssyklus, «vulnerable and outdated components».
- **Drøftingsakser:** hvorfor en høy CVSS-score ikke automatisk betyr høyest prioritet i
  *ditt* system (kontekst/eksponering); CVE/CWE/CVSS som komplementære, ikke konkurrerende.
- **Case-forslag:** gitt en nyskrevet sårbarhetsbeskrivelse — plasser den som CVE, foreslå
  et grovt CVSS-nivå med begrunnelse, og pek på CWE-typen.
- **Typiske feil:** #8 forveksle CVE og CVSS (den sentrale); tro CVSS er en liste;
  behandle CWE som en enkeltsårbarhet.
- **Kvote:** 16 quiz / 20 flashcards (CVE vs CVSS vs CWE, Heartbleed-eksempel, CWE-numre,
  begrep↔definisjon).

**Prøve-kvote Del 1:** 4 prøver (`tdt4237-1-prove`, chapterNumber 1.P):
1. *CIA-drill:* 10 MCQ (CIA + eksempler, asset/vuln/threat/risk, attack surface) + 1 KORT
   (definer integritet med eksempel).
2. *Trusselaktører:* KORT (nevn ≥3 aktørtyper med karakteristikker) + kort DRØFT (innside
   vs. ekstern trussel, momentliste).
3. *CVE/CVSS/CWE:* 2 KORT (CVE vs CVSS-skillet; hva CWE er) à tre-nivå-mal.
4. *Blandet grunnlags-miniformat:* 8 nyskrevne MCQ (CIA, threat agents, CVE/CVSS,
   angrepsflate) — trener flervalgshøstingen fra kap. 0.3.

### Del 2 — Websårbarheter (OWASP) og kodeanalyse

#### Kapittel 2.1: Injeksjon — SQLi, XPath, command og XXE
**id:** `tdt4237-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4237-1-1`

- **Kapitteltype:** tema.
- **Description:** Injeksjonens felles rotårsak (input tolkes som kontroll, ikke data) og
  den strukturelle fiksen (parameterisering) — fagets sikreste kortsvar.
- **Eksamensbelegg:** Injeksjon/OWASP 8/8 (100 %). Sjangre: KORT (SQLi-rotårsak + ≥3
  motmidler), KODE, RMF-risiko, MCQ. Prioritet: **perfekt** (§7 pkt. 2).
- **Begrepskontrakt:** **SQL-injeksjon** — rotårsak = brukerinput tolkes som **kontroll
  (kommando)** i stedet for **data**; **prepared statements + bind-variabler** tvinger
  input til alltid å tolkes som data (skill data-plan fra kontroll-plan); **motmidler
  (nevn ≥3 av 5):** blacklisting, whitelisting, escaping, prepared statements/bind-
  variabler, mitigere impact (minste privilegium på DB-bruker); slektningene **XPath-
  injeksjon** (CWE-643), **command injection**, **XXE** (XML external entity, 2018).
- **Drøftingsakser:** hvorfor escaping alene er sprøtt (blacklisting-svakhet) mens
  parameterisering er robust; når whitelisting er eneste mulige forsvar (dynamiske
  identifikatorer); injeksjon som mønster på tvers av SQL/XPath/OS/XML.
- **Case-forslag:** en nyskrevet innloggings- eller søkefunksjon med strengkonkatenert
  query — vis angreps-input (`' OR '1'='1`) og skriv den parameteriserte fiksen.
- **Typiske feil:** #5 «saniter input» som eneste fiks (sensor vil ha prepared statements);
  #12 nevne bare ett motmiddel når «minst tre» kreves; rotårsak forklart som «dårlig
  validering» uten data/kontroll-skillet.
- **Kvote:** 26 quiz / 30 flashcards (SQLi-rotårsak, prepared statements, ≥3 motmidler,
  XPath/command/XXE, begrep↔fiks).

#### Kapittel 2.2: XSS — stored, reflected og DOM
**id:** `tdt4237-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4237-2-1`

- **Kapitteltype:** tema.
- **Description:** De tre XSS-variantene, hvorfor navngivingen «stored» avgjør uttelling,
  og den strukturelle fiksen (kontekstriktig escaping av output).
- **Eksamensbelegg:** XSS i 2016, 2018 (KODE) + OWASP-kortsvar + MCQ. Sjangre: KODE, KORT,
  RMF-risiko, MCQ. Prioritet: **perfekt** (§7 pkt. 2).
- **Begrepskontrakt:** **XSS (cross-site scripting)** — angriperens skript kjøres i
  offerets nettleser; **stored** (lagret i databasen, rammer alle som ser innholdet) vs.
  **reflected** (reflektert fra request, krever lokke-lenke) vs. **DOM-basert** (skjer i
  klient-siden JS); **strukturell fiks:** kontekstriktig **output-escaping** + input-
  validering + Content-Security-Policy + `HttpOnly` på sesjonscookie (begrenser
  tyveri). `⚠️ Må kalles «stored» for full uttelling når den er lagret (feil #6).`
- **Drøftingsakser:** hvorfor stored XSS er farligst (persistens + rekkevidde); hvorfor
  input-validering ikke er nok uten output-escaping; XSS vs. CSRF som ulike angrep (peker
  til 2.3).
- **Case-forslag:** et nyskrevet kommentarfelt som lagrer og viser HTML uescaped — vis
  `<script>`-injeksjonen, klassifiser som stored, skriv escaping-fiksen.
- **Typiske feil:** #6 ikke kalle den «stored» når den er lagret; #5 «fjern script-
  taggen» i stedet for kontekstriktig escaping; blande XSS og injeksjon i backend.
- **Kvote:** 22 quiz / 24 flashcards (stored/reflected/DOM, output-escaping, HttpOnly/CSP,
  navngivingskravet, begrep↔fiks).

#### Kapittel 2.3: CSRF og clickjacking
**id:** `tdt4237-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4237-2-2`

- **Kapitteltype:** tema.
- **Description:** Hvordan nettleseren lures til å sende med sesjonscookien (CSRF) eller
  klikke skjult (clickjacking), og de konkrete forsvarene sensor krever.
- **Eksamensbelegg:** CSRF i 2015, 2016, 2018 (KODE + KORT). Sjangre: KODE, KORT, MCQ,
  RMF-risiko. Prioritet: **perfekt** (§7 pkt. 2).
- **Begrepskontrakt:** **CSRF (cross-site request forgery)** — offerets nettleser sender
  automatisk med sesjonscookien til en request angriperen utløser (vis angrepssiden,
  f.eks. `<img src=".../account/delete">`); **forsvar:** anti-CSRF-token i skjult felt
  verifisert server-side, `SameSite`-cookie, re-autentisering for sensitive handlinger;
  **clickjacking** — usynlig iframe over en klikkbar knapp; **forsvar:** `X-Frame-Options`
  / frame-busting / CSP `frame-ancestors`. «Er nettstedet sårbart?» → gi en **black-box
  testprosedyre steg-for-steg** eller kildekode-inspeksjon.
- **Drøftingsakser:** hvorfor cookie-basert sesjon er CSRF-eksponert (kobler til
  sesjonstoken-tabellen 5.2); anti-CSRF-token vs. SameSite som lag; når re-autentisering
  er nødvendig.
- **Case-forslag:** en nyskrevet «slett konto»-endepunkt uten CSRF-vern — vis angrepssiden,
  forklar hvorfor cookien sendes med, skriv token-fiksen.
- **Typiske feil:** #5 «valider input» mot CSRF (feil klasse — CSRF handler om
  request-opprinnelse, ikke innhold); «Vulnerable to CSRF» uten å vise angrepssiden
  (feil: løs prat, §4); glemme server-side-verifisering av tokenet.
- **Kvote:** 20 quiz / 22 flashcards (CSRF-mekanisme, anti-CSRF-token, SameSite,
  clickjacking + X-Frame-Options, angrepssiden, begrep↔fiks).

#### Kapittel 2.4: Andre OWASP Top 10-kategorier
**id:** `tdt4237-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4237-2-1`

- **Kapitteltype:** tema.
- **Description:** Resten av OWASP-rammen som styrer kortsvarene: IDOR, open redirect,
  sensitive data exposure, security misconfiguration, vulnerable & outdated components,
  insufficient logging & monitoring.
- **Eksamensbelegg:** IDOR + open redirect (2019, KODE); «Exposure of Sensitive
  Information», «Vulnerable and Outdated Components», «Insufficient Logging and
  Monitoring» ordrett OWASP-kortsvar (2022–2023). Sjangre: KORT, KODE, MCQ, RMF-risiko.
  Prioritet: **perfekt** (§7 pkt. 2 — OWASP-rammen som helhet).
- **Begrepskontrakt:** **IDOR (insecure direct object reference)** — bruker-ID i URL uten
  autorisasjonssjekk; fiks = håndhev autorisasjon server-side; **open redirect** (CWE-601)
  — `sendRedirect(url)` med ukontrollert mål; fiks = «accept known good» whitelist;
  **sensitive data exposure** (klartekst/svak kryptering); **security misconfiguration**
  (standardpassord, åpne feilmeldinger); **vulnerable & outdated components** (kjente CVE
  i tredjeparts-bibliotek → patch); **insufficient logging & monitoring** (angrep
  oppdages ikke). Kort om OWASP Top 10-rammen (2021-utgaven) som organiserende struktur.
- **Drøftingsakser:** hvorfor IDOR er en autorisasjons- (ikke autentiserings-) svikt;
  logging vs. personvern (hva bør *ikke* logges — kobler til Del 7); komponentsårbarhet
  som forsyningskjede-risiko.
- **Case-forslag:** en nyskrevet «last ned faktura?id=123»-funksjon (IDOR) — vis at bytte
  av ID gir andres faktura, skriv autorisasjonsfiksen.
- **Typiske feil:** #5 «skjul ID-en» mot IDOR (fiksen er server-side autorisasjon, ikke
  obfuskering); behandle open redirect som harmløst; overse logging/monitoring som
  sikkerhetskrav.
- **Kvote:** 22 quiz / 26 flashcards (IDOR, open redirect, de fire øvrige kategoriene,
  OWASP-rammen, begrep↔fiks).

#### Kapittel 2.5: DRILL — Kodeanalyse (tre-ledds-malen)
**id:** `tdt4237-2-5` · **number:** 2.5 · **estimatedMinutes:** 80 · **prerequisites:** `tdt4237-2-4`

- **Kapitteltype:** drill (sjangerkapittel, regnefag-stil).
- **Description:** Selve kodeanalyse-sjangeren: for hver snutt (a) sårbarhet + linje,
  (b) utnyttelsesvei, (c) strukturell fiks — drillet på hele den faste sårbarhets-
  katalogen.
- **Eksamensbelegg:** Kodeanalyse-sjanger 6/8 (egen 20–30 p-bolk 2015–2019; enkeltspm
  2022–2023). Sjangre: KODE. Prioritet: **perfekt** (§7 pkt. 3). Dekker HELE §3B-katalogen
  (prosedyre-mal B, §3): insecure randomness, svakt sesjonstoken, XSS, CSRF, insecure
  deserialization, path traversal, IDOR, SQL/XPath-injeksjon, open redirect, klartekst-
  passord, buffer overflow, session expiration.
- **Innholdskontrakt (`theorem` — tre-ledds prosedyre-kontrakt):** gjengi prosedyre-mal B
  (§3) som en `theorem`-blokk «Kodeanalysens tre ledd», deretter den faste katalogen med
  strukturell fiks per type (§3-tabellen). **Gjennomskrevne modeller (≥3):** minst tre
  fullstendige a-b-c-modellbesvarelser på nyskrevne snutter (f.eks. (i) et svakt
  sesjonstoken `md5(brukernavn)` → mangler entropi; (ii) en path traversal i
  fil-nedlasting; (iii) en klartekst-passordlagring → hash+salt), hver med margnotater om
  hva som gir uttelling ved hvert ledd. 8–12 nyskrevne snutt-oppgaver (Java/PHP/Python/C i
  pseudokode-nær form) som roterer katalogen, alle med tre-ledds fasit.
- **Oppgavesjangre:** KODE. Nyskrevne snutter i katalogens typer — endre språk, variabel-
  navn og kontekst; algoritmemønsteret (sårbarheten) er allmenn kunnskap.
- **Typiske feil:** #4 mangler linjenummer eller utnyttelsesvei; #5 «saniter»/«valider» i
  stedet for den strukturelle mekanismen (`SecureRandom`, prepared statements,
  autorisasjon, whitelist, hash+salt); #6 ikke kalle XSS «stored»; #13 skrive langt i
  stedet for de tre stramme leddene.
- **Kvote:** 24 quiz / 22 flashcards (tre-ledds-malen, sårbarhet↔strukturell fiks for hele
  katalogen, språkuavhengig mønstergjenkjenning).

**Prøve-kvote Del 2:** 4 prøver (`tdt4237-2-prove`, chapterNumber 2.P):
1. *Injeksjon:* 8 MCQ (SQLi-rotårsak, prepared statements, XPath/command/XXE) + 1 KORT
   (SQLi-rotårsak + ≥3 motmidler).
2. *XSS + CSRF:* 2 KORT (stored/reflected/DOM med navngivingskrav; CSRF-mekanisme + ett
   forsvar med angrepssiden) à tre-nivå-mal.
3. *Kodeanalyse (KODE):* 3 nyskrevne snutter à tre-ledds-fasit (a linje + b utnyttelse +
   c strukturell fiks) — trener feil #4/#5/#6.
4. *OWASP-bredde:* 8 MCQ (IDOR, open redirect, sensitive data, misconfiguration, outdated
   components, logging) + 1 KORT (IDOR som autorisasjonssvikt med fiks).

### Del 3 — Trusselmodellering: misuse cases og attack trees

#### Kapittel 3.1: Misuse case-diagrammer
**id:** `tdt4237-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4237-1-2`

- **Kapitteltype:** tema.
- **Description:** Sindre/Opdahls misuse case-notasjon (aktør, use case, misuse case,
  vulnerability, security use case) med relasjonene threaten/mitigate/exploit — den ene
  halvdelen av RMF-trinn 3.
- **Eksamensbelegg:** Trusselmodellering 8/8 (100 %; del av RMF-caset hvert år). Sjangre:
  RMF (obligatorisk komponent), KORT, MCQ. Prioritet: **perfekt** (§7 pkt. 2).
- **Begrepskontrakt:** **misuse case** (Sindre/Opdahl) — et use case sett fra en fiendtlig
  aktørs side; **elementene:** actor, use case, **misuse case**, **vulnerability**,
  **security use case (mottiltak)**; **relasjonene:** *threaten* (misuse case truer use
  case), *mitigate* (security use case demper misuse case), *exploit* (misuse case
  utnytter vulnerability); hvordan diagrammet **utleder tekniske risikoer** (mater
  RMF-trinn 4).
- **Drøftingsakser:** misuse case vs. abuse case (nyanse); hvorfor security use cases
  utledes *fra* misuse cases (ikke omvendt); når diagrammet er ferdig nok (dekning av de
  viktigste aktørene).
- **Case-forslag:** tegn/beskriv et misuse case-diagram for en nyskrevet innloggings-flyt
  (aktør: angriper; misuse case: brute-force; vulnerability: svak passordpolicy; security
  use case: rate-limiting + sterk policy) — vis alle tre relasjonene.
- **Typiske feil:** #1 liste sårbarheter uten å knytte dem til misuse case/aktør (dyreste
  i RMF); utelate security use case-siden; blande relasjonene threaten/mitigate/exploit.
- **Kvote:** 22 quiz / 24 flashcards (misuse case-elementene, de tre relasjonene, misuse
  vs. abuse, kobling til tekniske risikoer).

#### Kapittel 3.2: Attack trees
**id:** `tdt4237-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4237-3-1`

- **Kapitteltype:** tema.
- **Description:** Attack tree-notasjonen (angrepsmål på toppen, del-angrep som grener,
  AND/OR-noder) — den andre halvdelen av RMF-trinn 3.
- **Eksamensbelegg:** Trusselmodellering 8/8 (attack trees fast i RMF-caset). Sjangre:
  RMF, KORT, MCQ. Prioritet: **perfekt** (§7 pkt. 2).
- **Begrepskontrakt:** **attack tree** — **angrepsmål (root)** på toppen, **angrepsveier/
  del-mål** som grener nedover; **AND-noder** (alle del-angrep må lykkes) vs. **OR-noder**
  (ett holder); bladnoder = konkrete angrepshandlinger; hvordan treet prioriteres (kostnad/
  sannsynlighet per gren) og **utleder tekniske risikoer** (mater RMF-trinn 4). Forhold
  til misuse cases (komplementære, ikke konkurrerende).
- **Drøftingsakser:** attack tree vs. misuse case (når velge hva); AND/OR-strukturen som
  angir hvor forsvar bryter kjeden billigst; treet som kommunikasjonsverktøy mot ikke-
  tekniske interessenter.
- **Case-forslag:** bygg et attack tree med mål «få tak i en brukers penger» for en
  nyskrevet betalings-app — grener: stjel credentials (OR: phishing / keylogger / brute-
  force), kap sesjon, misbruk API — merk AND/OR og pek på billigste forsvar.
- **Typiske feil:** blande AND og OR (endrer hele risikobildet); glemme root-målet;
  #1 grener som ikke kobles videre til tekniske risikoer/case.
- **Kvote:** 20 quiz / 22 flashcards (attack tree-struktur, AND/OR-noder, root/blad,
  prioritering, kobling til tekniske risikoer).

#### Kapittel 3.3: Fra trusselmodell til tekniske risikoer (+ STRIDE som bakgrunn)
**id:** `tdt4237-3-3` · **number:** 3.3 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4237-3-2`

- **Kapitteltype:** tema (bro til RMF).
- **Description:** Hvordan misuse cases og attack trees oversettes til de ≥10 koblede
  tekniske risikoene RMF krever — og hvorfor STRIDE er bakgrunn, ikke eksamensmetode.
- **Eksamensbelegg:** Trusselmodellering 8/8; koblingsledd til RMF-trinn 4 (den koblede
  risikolisten). Sjangre: RMF (kritisk komponent), KORT. Prioritet: **perfekt** (§7 pkt.
  1/2). **STRIDE-avviket:** `⚠️ Fagbeskrivelsen nevner STRIDE, men INGEN av de åtte
  settene bruker STRIDE — den faktiske metoden er misuse cases + attack trees. STRIDE
  behandles som «bør kjenne til», aldri som eksamensmetode. (verifiser mot gjeldende
  pensum.)`
- **Begrepskontrakt:** **utledningsregelen** — hver teknisk risiko skal peke tilbake på et
  misuse case / en attack tree-gren OG frem til en business risk OG til caset (feil #1,
  −2 p); «tekniske risikoer ≠ generisk sårbarhetsliste»; kort om **STRIDE** (Spoofing,
  Tampering, Repudiation, Information disclosure, Denial of service, Elevation of
  privilege) som *alternativt* rammeverk studenten bør kjenne navnet på, men ikke bruke
  som primærmetode her.
- **Drøftingsakser:** hvorfor kobling (ikke lengde) er det som gir uttelling; STRIDE vs.
  misuse cases (hva hver fanger); risikoliste som fortelling fra aktør → sårbarhet →
  konsekvens.
- **Case-forslag:** ta attack tree-et fra 3.2 og skriv ut fem koblede tekniske risikoer,
  hver på formen «risiko — utledet fra [gren] — truer [business risk] — i [caset]».
- **Typiske feil:** #1 generisk liste uten kobling (den dyreste, gjentas her eksplisitt);
  bruke STRIDE-kategorier som om de var fasit; feil antall risikoer (§RMF krever ≥10).
- **Kvote:** 18 quiz / 20 flashcards (utledningsregelen, koblings-tripelet, STRIDE-navnet
  som bakgrunn, «liste ≠ koblet risiko»).

**Prøve-kvote Del 3:** 4 prøver (`tdt4237-3-prove`, chapterNumber 3.P):
1. *Misuse case-drill:* 8 MCQ (elementene, de tre relasjonene) + 1 KORT (tegn/beskriv et
   misuse case for en gitt funksjon).
2. *Attack tree:* KORT (bygg et attack tree med root + AND/OR-grener for et gitt mål) +
   kort DRØFT (attack tree vs. misuse case, momentliste).
3. *Fra modell til risiko:* KORT (skriv 5 koblede tekniske risikoer fra et gitt attack
   tree — trener feil #1) à tre-nivå-mal.
4. *STRIDE-vaksine + bredde:* 6 MCQ (STRIDE-navn som bakgrunn, misuse/attack tree-fakta)
   + 1 KORT (hvorfor «liste uten kobling» trekker −2 p).

### Del 4 — Sikker programvareutvikling: SDLC og modenhetsmodeller

#### Kapittel 4.1: Touchpoints, SDL og agil sikkerhet
**id:** `tdt4237-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4237-1-1`

- **Kapitteltype:** tema.
- **Description:** McGraws touchpoints i effektivitetsrekkefølge, SDL-fasene, og hvordan
  sikkerhet integreres i agil utvikling.
- **Eksamensbelegg:** SDLC 7/8 (88 %; touchpoints fast kortsvar; agil-SDL 2020). Sjangre:
  KORT, MCQ. Prioritet: **perfekt** (§7 pkt. 4).
- **Begrepskontrakt (`theorem` for rekkefølgen):** **touchpoints (McGraw) i
  effektivitetsrekkefølge** — (1) code review, (2) architectural risk analysis, (3)
  penetration testing, (4) risk-based security tests, (5) abuse cases, (6) security
  requirements, (7) security operations (gjengis som `theorem`-blokk); **SDL** —
  sikkerhet inn i requirements → design → implementation → verification →
  team-organisering; **agil sikkerhet** (sikkerhet i hver iterasjon, ikke som separat
  fase); **abuse cases** som SDL-artefakt (kobler til Del 3).
- **Drøftingsakser:** hvorfor code review rangeres høyest (billigst å fange feil tidlig);
  spenning mellom agil hastighet og sikkerhetsporter; «shift left» som prinsipp.
- **Case-forslag:** plasser fem sikkerhetsaktiviteter for en nyskrevet utviklings-sprint på
  touchpoints-listen og begrunn rekkefølgen.
- **Typiske feil:** #12 gjengi touchpoints i feil/ufullstendig rekkefølge; behandle
  sikkerhet som en sluttfase (mot SDL-poenget); blande touchpoints og RMF-trinn.
- **Kvote:** 20 quiz / 24 flashcards (touchpoints-rekkefølgen, SDL-fasene, agil sikkerhet,
  abuse cases, begrep↔plassering).

#### Kapittel 4.2: BSIMM vs OpenSAMM og «godt sikkerhetskrav»
**id:** `tdt4237-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4237-4-1`

- **Kapitteltype:** tema.
- **Description:** Fagets favoritt-kortsvar — deskriptiv (BSIMM) vs. preskriptiv
  (OpenSAMM) modenhetsmodell — og hva som kjennetegner et godt sikkerhetskrav.
- **Eksamensbelegg:** SDLC 7/8; BSIMM vs OpenSAMM «fast favoritt» (analysen §2). Sjangre:
  KORT, MCQ, koblingsstoff i RMF (sikkerhetskrav-trinnet). Prioritet: **perfekt** (§7 pkt.
  4).
- **Begrepskontrakt:** **BSIMM** — **deskriptiv** modenhetsmodell (måler hva firmaer
  *faktisk* gjør, bygd fra observasjon); **OpenSAMM / OWASP SAMM** — **preskriptiv**
  (hva du *bør* gjøre: 4 forretningsfunksjoner × sikkerhetspraksiser × modenhetsnivå 0–3);
  skillet deskriptiv/preskriptiv er selve poenget (feil #9); **godt sikkerhetskrav** —
  sier **hva** som skal oppnås, ikke **hvordan** (bind ikke mekanismevalget); ett krav per
  teknisk risiko (kobler til RMF-trinn 5).
- **Drøftingsakser:** når en bedrift har nytte av deskriptiv benchmarking vs. preskriptiv
  veiledning; hvorfor «bruk bcrypt» er et *dårlig* krav (mekanisme) mens «passord skal
  ikke kunne gjenopprettes fra lagring» er godt; modenhetsnivåer som veikart.
- **Case-forslag:** skriv om tre dårlige (mekanisme-bindende) sikkerhetskrav til gode
  (hva-ikke-hvordan) krav for en nyskrevet app.
- **Typiske feil:** #9 forveksle BSIMM (deskriptiv) og OpenSAMM (preskriptiv) — den
  sentrale; skrive «hvordan»-krav; blande sikkerhetskrav og sikkerhetsmekanisme.
- **Kvote:** 22 quiz / 28 flashcards (BSIMM deskriptiv, OpenSAMM preskriptiv, SAMM-
  strukturen, godt sikkerhetskrav = hva ikke hvordan, begrep↔egenskap).

**Prøve-kvote Del 4:** 4 prøver (`tdt4237-4-prove`, chapterNumber 4.P):
1. *Touchpoints-drill:* 8 MCQ (rekkefølge, SDL-faser, agil) + 1 KORT (list touchpoints i
   effektivitetsrekkefølge med begrunnelse for topp-plasseringen).
2. *BSIMM vs OpenSAMM:* KORT (deskriptiv vs. preskriptiv med ett eksempel hver) à
   tre-nivå-mal — trener feil #9.
3. *Godt sikkerhetskrav:* KORT (omform tre «hvordan»-krav til «hva»-krav) + kort DRØFT
   (hvorfor mekanismebinding er et dårlig krav).
4. *SDLC-bredde:* 8 MCQ (CIA, touchpoints, SAMM-nivåer, abuse cases, agil sikkerhet).

### Del 5 — Autentisering, sesjon og tilgangskontroll

#### Kapittel 5.1: Autentisering og passord
**id:** `tdt4237-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4237-1-1`

- **Kapitteltype:** tema.
- **Description:** De tre autentiseringsfaktorene, passord-policy, salting (hva det
  faktisk beskytter mot), 2FA/OTP og captcha.
- **Eksamensbelegg:** Auth & sesjon 7/8 (88 %). Sjangre: KORT, KODE (klartekst-passord
  2022), MCQ (captcha, salting), RMF-krav. Prioritet: **perfekt** (§7 pkt. 5).
- **Begrepskontrakt:** **tre autentiseringsfaktorer** — noe du *vet* (know: passord), *har*
  (have: token/telefon), *er* (are: biometri), hver med fordel/ulempe; **passord-policy**
  (lengde/kompleksitet/rotasjon — nyansert); **salting** (unik salt per bruker hindrer
  rainbow-tabeller/ordbokangrep på tvers — beskytter *ikke* mot et målrettet angrep på én
  konto); **hashing** (envegs, aldri klartekst — feil #5-fiks fra 2.5); **2FA/OTP** (to
  faktorer, engangskode); **captcha** (skiller menneske fra bot).
- **Drøftingsakser:** hvorfor salting beskytter mot ordbok/rainbow, men ikke mot målrettet
  angrep; biometri-avveininger (kan ikke byttes); 2FA som forsvar mot passordlekkasje.
- **Case-forslag:** en nyskrevet innloggingstjeneste med klartekst-passord og ingen 2FA —
  foreslå hash+salt + 2FA + policy, og forklar hva hver fikser.
- **Typiske feil:** #5 «krypter passordet» i stedet for hash+salt (kryptering er
  reversibel); tro salting stopper et målrettet angrep; blande de tre faktorene.
- **Kvote:** 22 quiz / 26 flashcards (tre faktorer, salting vs. det den *ikke* beskytter,
  hash≠kryptering, 2FA/OTP, captcha, begrep↔funksjon).

#### Kapittel 5.2: Sesjonshåndtering
**id:** `tdt4237-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4237-5-1`

- **Kapitteltype:** tema.
- **Description:** Hvor sesjonstoken lagres (med fordel/ulempe hver), session fixation/
  hijacking og cookie-flaggene — den faste sesjonstoken-tabellen.
- **Eksamensbelegg:** Auth & sesjon 7/8; svakt sesjonstoken KODE (2016, 2018); session
  hijacking-mottiltak MCQ (2023). Sjangre: KORT (sesjonstoken-tabellen), KODE, MCQ,
  RMF-krav. Prioritet: **perfekt** (§7 pkt. 5).
- **Begrepskontrakt (`theorem` for tabellen):** **sesjonstoken-lagring** med **én fordel +
  én ulempe hver** (gjengis som `theorem`-blokk): **URL** (lekker via Referer/logg);
  **skjult felt** (forsvarer mot CSRF, men duger ikke for lange sesjoner); **cookie**
  (sendes automatisk → CSRF-eksponert, men praktisk); **cookie-flagg:** `HttpOnly` (JS
  når den ikke → mot XSS-tyveri), `Secure` (kun HTTPS), `SameSite` (mot CSRF); **session
  fixation** (CWE-384: angriper planter kjent token → regenerer token ved innlogging);
  **session hijacking** (stjeler token → HttpOnly/Secure/kort levetid); **svakt token**
  (predikerbart `md5(brukernavn)` → krev entropi/kryptografisk PRNG); **session expiration**
  (CWE-613).
- **Drøftingsakser:** hvorfor cookie er standard tross CSRF-eksponering (og hvordan
  SameSite/anti-CSRF-token demper det); token-entropi vs. levetid; fixation vs. hijacking
  (ulike angrep, ulike forsvar).
- **Case-forslag:** en nyskrevet app som legger sesjonstoken i URL — vis Referer-lekkasjen,
  flytt til `HttpOnly`+`Secure`+`SameSite`-cookie, forklar hvert flagg.
- **Typiske feil:** #4 diagnostisere svakt token uten linje/utnyttelsesvei; blande fixation
  og hijacking; glemme token-regenerering ved innlogging (mot fixation).
- **Kvote:** 24 quiz / 24 flashcards (sesjonstoken-tabellen med fordel/ulempe, cookie-flagg,
  fixation vs. hijacking, svakt token-fiks, begrep↔forsvar).

#### Kapittel 5.3: Tilgangskontroll-modeller
**id:** `tdt4237-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4237-1-1`

- **Kapitteltype:** tema.
- **Description:** Bell-LaPadula vs. Biba (regelretningen sensor tester), DAC og trojaner-
  svakheten, multilevel/multilateral, SSO og Android-permission-modellen.
- **Eksamensbelegg:** Tilgangskontroll 5/8 (63 %; «forklar Biba / hvorfor beskytter det
  integritet»). Sjangre: KORT, MCQ, RMF-krav. Prioritet: **kunne** (§7 pkt. 8).
- **Begrepskontrakt (`theorem` for regelretningene):** **Bell-LaPadula** (konfidensialitet:
  **«no write down, no read up»**) vs. **Biba** (integritet: **«no write up, no read
  down»**) — med ett konkret eksempel hver; regelretningene gjengis som `theorem`-blokk
  (feil #7, svært lett å snu); **DAC (discretionary access control)** + **trojansk hest**-
  svakheten (eier kan lekke rettigheter videre); **multilevel** (én rangert dimensjon) vs.
  **multilateral** (Chinese Wall / Lattice / compartmentation — skille på tvers, ikke
  bare opp/ned); **SSO** (identity provider + service provider + bruker med token-
  utveksling); **Android-permission-modellen** (protection levels: normal/dangerous/
  signature; «first one wins») `(verifiser detalj)`.
- **Drøftingsakser:** hvorfor konfidensialitet og integritet gir *motsatte* regler
  (kjernen i #7); DAC-fleksibilitet vs. trojansk-hest-risiko; multilevel vs. multilateral
  på et konkret scenario (interessekonflikt).
- **Case-forslag:** avgjør hvilken modell (BLP/Biba/DAC/Chinese Wall) som passer et
  nyskrevet scenario (f.eks. en revisor med kundekonflikt → Chinese Wall) og skriv den
  relevante regelen korrekt.
- **Typiske feil:** #7 bytte om Biba og Bell-LaPadula-reglene (den sentrale); DAC uten
  trojansk-hest-svakheten; blande multilevel og multilateral.
- **Kvote:** 24 quiz / 30 flashcards (BLP «no write down/no read up», Biba «no write up/no
  read down», DAC + trojaner, multilevel/multilateral, SSO, Android-permissions,
  regel↔modell).

**Prøve-kvote Del 5:** 4 prøver (`tdt4237-5-prove`, chapterNumber 5.P):
1. *Autentisering:* 8 MCQ (tre faktorer, salting, hash≠kryptering, 2FA, captcha) + 1 KORT
   (hva salting beskytter mot — og ikke).
2. *Sesjon:* KORT (sesjonstoken-tabellen: URL/skjult/cookie med fordel+ulempe hver) +
   KODE (svakt token `md5(brukernavn)` med tre-ledds-fasit).
3. *Tilgangskontroll:* KORT (Biba vs. Bell-LaPadula med korrekte regler + eksempel) à
   tre-nivå-mal — trener feil #7.
4. *Bredde:* 8 MCQ (session hijacking-mottiltak, fixation, DAC-svakhet, SSO, Android-
   permissions).

### Del 6 — Anvendt kryptografi (konseptuelt)

#### Kapittel 6.1: Symmetrisk kryptografi, OTP og blokkmoduser
**id:** `tdt4237-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4237-1-1`

- **Kapitteltype:** tema.
- **Description:** Symmetrisk kryptering, hvorfor OTP-nøkkelgjenbruk lekker, ECB→CBC+IV, og
  Vigenère-knekking i to steg — alt konseptuelt, ingen tallregning.
- **Eksamensbelegg:** Krypto konseptuelt 6/8 (75 %; «forklar …»). Sjangre: KORT, MCQ.
  Prioritet: **kunne** (§7 pkt. 6). **Ingen mellomregning kreves.**
- **Begrepskontrakt:** **symmetrisk kryptering** (samme nøkkel — rask, men nøkkelutveksling
  er problemet); **OTP (one-time pad)** — `c = m ⊕ k`; **nøkkelgjenbruk lekker:** `c1 ⊕ c2
  = m1 ⊕ m2` (nøkkelen faller ut, klartekst-mønster avsløres — feil #11); **blokkchiffer-
  moduser:** **ECB** lekker datamønstre (like blokker → like chiffer) → **CBC med IV**
  (initialiseringsvektor + kjeding skjuler mønster — glem aldri IV, feil #11); **Vigenère**
  (nøkkel = streng) **knekkes i to steg:** (1) finn nøkkellengde (Kasiski/frekvensanalyse),
  (2) frekvensanalyser hver kolonne (vanligste tegn ⇒ ‘e’).
- **Drøftingsakser:** hvorfor OTP er «perfekt» kun med ekte tilfeldig engangsnøkkel;
  ECB-svakheten visuelt (pingvinbildet); symmetrisk hastighet vs. nøkkeldistribusjons-
  problemet (motiverer asymmetrisk, 6.2).
- **Case-forslag:** forklar hvorfor to meldinger kryptert med samme OTP-nøkkel lekker, og
  hvorfor ECB avslører struktur i et nyskrevet eksempel — uten tall.
- **Typiske feil:** #11 glemme IV ved CBC, eller ikke forklare *hvorfor* OTP-gjenbruk
  lekker; behandle Vigenère-knekking som ett steg; blande ECB og CBC.
- **Kvote:** 24 quiz / 30 flashcards (symmetrisk, OTP c=m⊕k + gjenbrukslekkasje, ECB vs
  CBC+IV, Vigenère to steg, begrep↔egenskap).

#### Kapittel 6.2: Asymmetrisk kryptografi, signatur og PKI/TLS
**id:** `tdt4237-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4237-6-1`

- **Kapitteltype:** tema.
- **Description:** Riktig nøkkelbruk (den mest straffede feilen), digital signatur, CA/PKI
  og TLS-handshaken i fire steg.
- **Eksamensbelegg:** Krypto 6/8; asymmetrisk nøkkelvalg + signatur + TLS-handshake fast
  kortsvar. Sjangre: KORT (poeng per handshake-steg), MCQ. Prioritet: **kunne** (§7 pkt.
  6).
- **Begrepskontrakt (`theorem` for handshaken):** **asymmetrisk kryptering** (nøkkelpar
  PK/SK); **riktig nøkkelbruk (feil #10):** krypter til mottaker med **mottakerens
  offentlige (PK)** nøkkel; **signer** med **egen private (SK)** nøkkel; **digital
  signatur** = hash av melding + kryptert med **avsenders private** nøkkel (integritet +
  autentisitet + uavviselighet); **CA/PKI** — CA signerer serverens PK med sin egen SK →
  **sertifikat**; **TLS-handshake i 4 steg** (gjengis som `theorem`-blokk): (1) klient →
  request, (2) server → sertifikat (PK-server), (3) klient krypterer delt nøkkel med
  PK-server, (4) server dekrypterer med SK-server; **nøkkelgenerering** (KDF, HW-RNG,
  entropi — ikke gjenbruk nøkler).
- **Drøftingsakser:** hvorfor signatur bruker *privat* nøkkel mens kryptering-til-mottaker
  bruker *offentlig* (motsatt logikk — kjernen i #10); hvorfor TLS kombinerer asymmetrisk
  (nøkkelutveksling) og symmetrisk (bulk-kryptering); CA som tillitsanker.
- **Case-forslag:** avgjør hvilken nøkkel som brukes i hvert steg av et nyskrevet
  «send hemmelig melding + signer den»-scenario.
- **Typiske feil:** #10 feil nøkkel (kryptere med egen offentlig, signere med mottakers);
  glemme hash-steget i signatur; feil rekkefølge/nøkkel i handshaken (poeng per steg).
- **Kvote:** 24 quiz / 30 flashcards (PK/SK-bruk, signatur = hash+privat, CA/sertifikat,
  TLS-handshake 4 steg, nøkkelgenerering, begrep↔nøkkelvalg).

**Prøve-kvote Del 6:** 4 prøver (`tdt4237-6-prove`, chapterNumber 6.P):
1. *Symmetrisk:* 8 MCQ (OTP, ECB/CBC, IV, Vigenère) + 1 KORT (hvorfor OTP-gjenbruk lekker,
   med `c1⊕c2=m1⊕m2`) — trener feil #11.
2. *Asymmetrisk nøkkelbruk:* KORT (hvilken nøkkel til kryptering vs. signatur, med
   begrunnelse) à tre-nivå-mal — trener feil #10.
3. *Signatur + PKI/TLS:* KORT (TLS-handshake i 4 steg + CA-rollen, poeng per steg).
4. *Krypto-bredde:* 8 MCQ (symmetrisk vs. asymmetrisk, ECB-svakhet, signatur-egenskaper,
   handshake-steg, nøkkelgenerering).

### Del 7 — Personvern og GDPR

#### Kapittel 7.1: GDPR og personvernprinsippene
**id:** `tdt4237-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4237-1-1`

- **Kapitteltype:** tema.
- **Description:** GDPR art. 5-prinsippene, skillet direkte/indirekte personopplysninger,
  og privacy by design — den klareste vekstaksen og case-avslutningen i RMF.
- **Eksamensbelegg:** Personvern 6/8 ↑ (75 %; art. 5-drøfting 2019, 2022; navnendring
  2022). Sjangre: DRØFT, KORT, RMF (obligatorisk case-avslutning). Prioritet: **kunne**
  (§7 pkt. 7, ↑ — forvent minst én ren personverndel fremover).
- **Begrepskontrakt:** **GDPR art. 5-prinsippene** — **transparency** (åpenhet), **purpose
  limitation** (formålsbegrensning), **data minimisation** (dataminimering), **fair use**
  (rettferdig behandling), **rights** (den registrertes rettigheter) — kunn navngi og
  forklare hver; **direkte personopplysninger** (identifiserer alene: navn, e-post,
  kredittkort, adresse) vs. **indirekte** (identifiserer i kombinasjon: brukernavn, alder,
  kjønn, medisinske data, sensordata); **sensitive/særlige kategorier**; **privacy by
  design & by default**; **security ≠ privacy** (repetert fra 1.1). Ofte kreves «drøft to
  av de fem prinsippene» (feil #12/#14).
- **Drøftingsakser:** GDPR i en krisesituasjon (personvern vs. samfunnsnytte, 2022-
  dilemmaet); dataminimering vs. produktnytte; når indirekte data blir identifiserende i
  kombinasjon.
- **Case-forslag:** ta en nyskrevet app (f.eks. en treningsdagbok), pek ut de direkte og
  indirekte personopplysningene, og drøft to art. 5-prinsipper mot den (RMF-avslutnings-
  malen).
- **Typiske feil:** #14 glemme personvernkoblingen i caset; #12 drøfte færre prinsipper
  enn bedt om; blande direkte/indirekte; forveksle personvern (privacy) og sikkerhet
  (security).
- **Kvote:** 22 quiz / 28 flashcards (de fem art. 5-prinsippene, direkte vs. indirekte,
  privacy by design, security≠privacy, prinsipp↔definisjon).

#### Kapittel 7.2: Anonymisering og personvern i praksis
**id:** `tdt4237-7-2` · **number:** 7.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4237-7-1`

- **Kapitteltype:** tema.
- **Description:** De fire anonymiseringsteknikkene (k-anonymitet-familien) anvendt på en
  tabell, og de etiske dilemmaene rundt personvern.
- **Eksamensbelegg:** Anonymisering egen oppgave 2020 (8 p). Sjangre: KORT, DRØFT.
  Prioritet: **kunne** (§7 pkt. 7). `(svakt belagt — kun ett sett, men eksplisitt pensum;
  verifiser.)`
- **Begrepskontrakt:** **anonymiseringsteknikker** — **generalization** (grovkorn:
  «34 år» → «30–39»), **suppression** (fjern/masker felt), **anatomization** (skill
  identifikatorer fra sensitive attributter i separate tabeller), **permutation**
  (omstokk koblinger) — anvendt på en konkret tabell; **k-anonymitet** (hver post ligner
  minst k−1 andre på kvasi-identifikatorer); **pseudonymisering ≠ anonymisering**
  (reversibel vs. ikke); re-identifiseringsrisiko via kvasi-identifikatorer.
- **Drøftingsakser:** anonymisering vs. datanytte (mer generalisering → mindre presis
  analyse); hvorfor pseudonymisering ikke fritar fra GDPR; personvern under kriser (etisk
  dilemma, kobler til 7.1).
- **Case-forslag:** anonymiser en nyskrevet pasient-/brukertabell med de fire teknikkene og
  drøft gjenværende re-identifiseringsrisiko.
- **Typiske feil:** #12 nevne færre enn de fire teknikkene når oppgaven ber om dem;
  forveksle pseudonymisering og anonymisering; overse re-identifisering via kombinasjon.
- **Kvote:** 20 quiz / 24 flashcards (de fire teknikkene, k-anonymitet, pseudonym≠anonym,
  re-identifisering, teknikk↔effekt).

**Prøve-kvote Del 7:** 4 prøver (`tdt4237-7-prove`, chapterNumber 7.P):
1. *GDPR-prinsippene:* 8 MCQ (art. 5-prinsippene, direkte/indirekte, privacy by design) +
   1 KORT (forklar to art. 5-prinsipper med eksempel).
2. *Personopplysninger i case:* KORT (pek ut direkte + indirekte personopplysninger i et
   gitt system) à tre-nivå-mal — trener feil #14.
3. *Anonymisering:* KORT (anvend de fire teknikkene på en gitt tabell) + kort DRØFT
   (anonymisering vs. datanytte).
4. *Personvern-dilemma (DRØFT):* GDPR i en krisesituasjon (momentliste — vis begge sider,
   dokumentér antakelser).

### Del 8 — Bør kjenne: minnesikkerhet, sky og AI/ML-sikkerhet

#### Kapittel 8.1: Minnesikkerhet — buffer- og heap-overflow
**id:** `tdt4237-8-1` · **number:** 8.1 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4237-2-5`

- **Kapitteltype:** tema (bør kjenne).
- **Description:** Hvordan buffer-/heap-overflow utnyttes, og de (≥3) forsvarene sensor
  vil ha — inkludert `strcpy`-snutten som kodeanalyse-mål.
- **Eksamensbelegg:** Minnesikkerhet 3/8 (38 %; buffer overflow KODE 2023 `strcpy` i C +
  kode-MCQ). Sjangre: KODE, MCQ, KORT. Prioritet: **kjenne** (§7 pkt. 10).
- **Begrepskontrakt:** **buffer overflow** (skriving forbi buffergrensa overskriver
  tilstøtende minne / returadresse → kan gi kodekjøring); **heap overflow**; **utnyttelse**
  (overskrive returadresse/funksjonspeker); **forsvar (nevn ≥3):** trygge funksjoner
  (`strncpy`/`strlcpy` med grensesjekk), compiler-forsvar (stack canaries, ASLR, DEP/NX),
  bounds checking, statisk analyse, type-trygt/minnetrygt språk (unngå C for
  utsatt kode). Kobler til kodeanalyse-katalogen (2.5).
- **Drøftingsakser:** hvorfor minnetrygge språk fjerner hele klassen (Rust/Java vs. C);
  dybdeforsvar (flere lag samtidig); hvorfor `strcpy` er farlig og `strncpy` ikke er nok
  uten korrekt lengde.
- **Case-forslag:** en nyskrevet C-snutt med `strcpy` fra ukontrollert input — vis
  overflow-utnyttelsen (a-b-c-malen) og skriv den grensesjekkede fiksen.
- **Typiske feil:** #4 kodeanalyse uten utnyttelsesvei; #12 nevne færre enn tre forsvar;
  tro «bruk `strncpy`» er nok uten korrekt grensehåndtering.
- **Kvote:** 16 quiz / 18 flashcards (buffer/heap overflow, utnyttelse, ≥3 forsvar,
  minnetrygt språk, sårbarhet↔forsvar).

#### Kapittel 8.2: Skysikkerhet og AI/ML-sikkerhet
**id:** `tdt4237-8-2` · **number:** 8.2 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4237-1-1`

- **Kapitteltype:** tema (bør kjenne, voksende).
- **Description:** IaaS-ansvarsdelingen og WAF (hva skyen dekker vs. egen kode), og AI/ML-
  sikkerhet (adversarial ML, malicious AI, AI-verktøys muligheter og grenser).
- **Eksamensbelegg:** Sky 3/8 (38 %; Azure WAF, IaaS 2020); AI/ML 2/8 ↑ (25 %; adversarial
  ML 2022, malicious AI 2023 MCQ). Sjangre: KORT, DRØFT, MCQ. Prioritet: **kjenne** (§7
  pkt. 11/12, ↑). `(svakt belagt — verifiser vekt mot gjeldende pensum, særlig AI/ML.)`
- **Begrepskontrakt:** **IaaS-ansvarsdeling** (shared responsibility: skyleverandøren
  sikrer infrastrukturen, kunden sikrer egen kode/konfigurasjon/data); **WAF (web
  application firewall)** — filtrerer kjente angreps­mønstre, men **dekker ikke** logiske
  feil i egen kode (kompletterer, erstatter ikke sikker koding); **adversarial ML**
  (bevisst forstyrret input som lurer en modell, f.eks. ansiktsgjenkjenning); **malicious
  AI / AI-assisterte angrep**; **AI-verktøy i sikkerhet** (muligheter: skala, mønster­
  gjenkjenning; grenser: falske positiver, forgiftning, forklarbarhet).
- **Drøftingsakser:** hva WAF *ikke* fanger (forretningslogikk-feil); hvor ansvarsgrensa
  går i sky (den vanligste misforståelsen); AI som både forsvars- og angrepsverktøy.
- **Case-forslag:** for en nyskrevet sky-hostet app: hva sikrer leverandøren, hva må teamet
  sikre selv, og hva WAF-en ikke redder deg fra.
- **Typiske feil:** tro WAF erstatter sikker koding; feilplassere ansvarsgrensa i sky;
  behandle AI/ML-sikkerhet som ren science fiction (undervurdere adversarial ML).
- **Kvote:** 16 quiz / 18 flashcards (IaaS-ansvarsdeling, WAF-grenser, adversarial ML,
  malicious AI, AI-verktøys muligheter/grenser, begrep↔grense).

**Prøve-kvote Del 8:** 4 prøver (`tdt4237-8-prove`, chapterNumber 8.P):
1. *Minnesikkerhet:* 8 MCQ (buffer/heap overflow, forsvarene) + 1 KODE (`strcpy`-snutt med
   tre-ledds-fasit).
2. *Buffer overflow-forsvar:* KORT (nevn ≥3 forsvar med hvordan hver virker) à tre-nivå-mal.
3. *Sky:* KORT (IaaS-ansvarsdeling + hva WAF ikke dekker) + kort DRØFT (ansvarsgrensa i sky).
4. *AI/ML (DRØFT):* AI-verktøys muligheter og grenser i sikkerhet (momentliste) + 4 MCQ
   (adversarial ML, malicious AI).

### Del 9 — RMF-risikovurdering (praktikum)

#### Kapittel 9.1: RMF-oppskriften — hele kjeden ledd for ledd
**id:** `tdt4237-9-1` · **number:** 9.1 · **estimatedMinutes:** 75 · **prerequisites:** `tdt4237-3-3`

- **Kapitteltype:** drill/håndverk (regnefag-stil, fagets flaggskip).
- **Description:** RMF-kjeden som en algoritmisk oppskrift med tidsbudsjett — den største,
  sikreste potten i faget, drillet som håndverk.
- **Eksamensbelegg:** RMF-case 8/8 (100 %, 25–40 p — garantert hvert år). Sjangre: RMF.
  Prioritet: **perfekt** (§7 pkt. 1 — «selve faget»). Bygger på Del 1 (assets/risk), Del 2
  (websårbarheter som risikoer), Del 3 (misuse cases/attack trees), Del 4 (sikkerhetskrav),
  Del 5–6 (mekanismer), Del 7 (GDPR-avslutning).
- **Innholdskontrakt (`theorem` — RMF-oppskriften):** gjengi **prosedyre-mal A** (§3) som
  en `theorem`-blokk «RMF-kjeden», ledd 1–7, hver med **hva sensor krever + eksakt-antall-
  krav + koble-til-caset-regelen**. Deretter **tidsbudsjett** for en ~60–90 min case-del
  (grovt: forretningskontekst 10 %, risikomatrise 10 %, trusselmodell 25 %, tekniske
  risikoer 25 %, krav+pentest 20 %, GDPR 10 %). `⚠️ Koble-til-caset-warning (feil #1, −2
  p) fremheves eksplisitt ved ledd 4.` En kort gjennomgang av ett ledd av gangen på et
  mini-case, som forberedelse til de fulle modellbesvarelsene i 9.2–9.3.
- **Oppgavesjangre:** RMF (delvis — enkeltledd øves isolert: «skriv 5 assets for dette
  systemet», «lag risikomatrisen», «utled 10 koblede tekniske risikoer»). 6–8 ledd-
  oppgaver med fasit.
- **Typiske feil:** #1 generisk risikoliste uten kobling (−2 p, gjentas her); #3 blande
  mål/assets eller hoppe over matrisen; #2 pentest uten teststeg+forventet; #14 glemme
  GDPR-avslutningen; #12 feil antall (ledd 1 og 4).
- **Kvote:** 22 quiz / 26 flashcards (RMF-trinn 1–7, hva hvert trinn krever, eksakt-antall-
  reglene, koble-til-caset, tidsbudsjett, trinn↔innhold).

#### Kapittel 9.2: Modellbesvarelse A — RMF på en nyskrevet e-helse-app
**id:** `tdt4237-9-2` · **number:** 9.2 · **estimatedMinutes:** 70 · **prerequisites:** `tdt4237-9-1`

- **Kapitteltype:** modellbesvarelse (praktikum).
- **Description:** En fullstendig, gjennomskrevet RMF-besvarelse på et nyskrevet case (en
  e-helse-/telemedisin-app) med margkommentarer om poenguttelling ved hvert ledd.
- **Eksamensbelegg:** RMF-case 8/8. Sjangre: RMF (full modellbesvarelse). Prioritet:
  **perfekt** (§7 pkt. 1). Caset er **nyskrevet** (egne parter, funksjoner, data — ikke lånt
  fra noe reelt sett).
- **Innholdskontrakt:** full besvarelse gjennom hele kjeden (prosedyre-mal A): (1)
  forretningsmål + ≥5 assets (pasientdata, credentials, resepter, betalingsinfo,
  krypteringsnøkler); (2) risikomatrise med begrunnet rangering; (3) misuse cases +
  attack tree (nyskrevet); (4) **≥10 tekniske risikoer, hver eksplisitt koblet** til
  misuse case/attack tree + business risk + caset (viser koble-regelen i praksis); (5) ett
  sikkerhetskrav per risiko (hva-ikke-hvordan); (6) ≥3 black-box pen-test-caser med
  **teststeg + forventet resultat**; (7) personvern: direkte/indirekte personopplysninger
  + drøft to art. 5-prinsipper. Levert som `collapsible` **full besvarelse** med
  margnotater + `collapsible` **kommentert svakere variant** (generisk risikoliste uten
  kobling → viser −2 p-fallet) + `tip` **sensorblikk** (delpoeng per ledd).
- **Oppgavesjangre:** RMF. Én stor nyskrevet case-oppgave med full fasit.
- **Typiske feil:** #1 (demonstreres via den svake varianten), #2, #3, #14 — hver knyttet
  til et konkret ledd i modellsvaret.
- **Kvote:** 14 quiz / 10 flashcards (case-spesifikke koblinger, assets↔risiko↔krav-
  triplene, pentest-teststeg, GDPR-koblingen).

#### Kapittel 9.3: Modellbesvarelse B — RMF på en nyskrevet betalings-/delingsapp
**id:** `tdt4237-9-3` · **number:** 9.3 · **estimatedMinutes:** 70 · **prerequisites:** `tdt4237-9-1`

- **Kapitteltype:** modellbesvarelse (praktikum).
- **Description:** En andre full RMF-modellbesvarelse på et annerledes nyskrevet case (en
  betalings-/delingsøkonomi-app à la elsparkesykkel/betalingsformidling) — viser at
  oppskriften er case-uavhengig.
- **Eksamensbelegg:** RMF-case 8/8; speiler 2021-formen (RMF på en «kjent app»-type).
  Sjangre: RMF. Prioritet: **perfekt** (§7 pkt. 1). **Nyskrevet case.**
- **Innholdskontrakt:** samme fulle kjede som 9.2, men på et betalings-/mobilitetscase med
  andre assets (betalingstransaksjoner, posisjonsdata, kjøretøy-tilgang, bankkonto) og
  andre dominerende risikoer (transaksjonssvindel, kontokapring, IDOR på kjøretøy-ID,
  posisjonssporing som personvern). Demonstrerer at **de samme sju leddene** gir en helt
  annen konkret besvarelse. `collapsible` full besvarelse + margnotater + `tip` sensorblikk.
  Framhever forskjellen i **hvilke** personopplysninger som er indirekte (posisjon/
  bevegelsesmønster) og hvilke art. 5-prinsipper som er mest spente (dataminimering,
  formålsbegrensning).
- **Oppgavesjangre:** RMF. Én stor nyskrevet case-oppgave med full fasit.
- **Typiske feil:** #1/#3/#2/#14 gjentatt i ny kontekst; ekstra: overse posisjonsdata som
  (indirekte) personopplysning.
- **Kvote:** 14 quiz / 10 flashcards (case-B-koblinger, betalings-/posisjonsrisiko, IDOR på
  kjøretøy-ID, art. 5-spenninger).

#### Kapittel 9.4: Pen-test-case-design og juridiske forhold
**id:** `tdt4237-9-4` · **number:** 9.4 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4237-9-1`

- **Kapitteltype:** drill (sjangerkapittel) + drøfting.
- **Description:** Hvordan en black-box pen-test-case skrives (krav → teststeg → forventet
  resultat per steg) og de juridiske forholdene ved penetrasjonstesting.
- **Eksamensbelegg:** Pentest 5/8 (63 %; case-Task 3 fast; juss-drøfting 2016). Sjangre:
  PENTEST (RMF-trinn 6), DRØFT (juss). Prioritet: **kunne** (§7 pkt. 9).
- **Innholdskontrakt:** **pen-test-case-malen** (`theorem`): **sikkerhetskrav → teststeg →
  forventet resultat per steg** (f.eks. Req: sterk passordpolicy → Test: kjør ordbok-brute-
  force → Forventet: kontoen låses / passord knekkes ikke) — hver test knyttet til ett
  krav (feil #2 = glemme teststeg/forventet); black-box vs. white-box; **juridiske forhold:**
  scope, skriftlig autorisasjon (unngå uautorisert tilgang), ansvarsfraskrivelse,
  taushetsplikt, håndtering av funn. 6–8 nyskrevne krav→test-oppgaver med fasit.
- **Oppgavesjangre:** PENTEST (skriv testcaser med teststeg+forventet for gitte krav),
  DRØFT (juridiske forutsetninger for en lovlig pentest).
- **Typiske feil:** #2 test uten teststeg/forventet resultat («test for SQLi» alene);
  koble test til feil krav; overse autorisasjon/scope i juss-delen.
- **Kvote:** 18 quiz / 18 flashcards (krav→teststeg→forventet-malen, black/white-box, de
  juridiske forutsetningene, krav↔test).

**Prøve-kvote Del 9:** 4 prøver (`tdt4237-9-prove`, chapterNumber 9.P):
1. *RMF-ledd-drill:* KORT-serie — for et gitt nyskrevet mini-case: skriv ≥5 assets, lag
   risikomatrisen, og utled 5 koblede tekniske risikoer (trener ledd 1/2/4 + feil #1).
2. *Trusselmodell → krav:* for de 5 risikoene fra prøve 1, skriv ett godt sikkerhetskrav
   (hva-ikke-hvordan) hver (trener RMF-trinn 5 + kap. 4.2).
3. *Pen-test-caser (PENTEST):* skriv 4 black-box testcaser med teststeg + forventet
   resultat for gitte krav — trener feil #2.
4. *Full mini-RMF:* en komprimert full case-besvarelse (alle 7 ledd på ~40 min,
   momentliste + fasit) med eksplisitt GDPR-avslutning — trener feil #14 og hele kjeden.

### Del 10 — Eksamenstrening

#### Kapittel 10.1: Flervalgsdrill (hele pensum)
**id:** `tdt4237-10-1` · **number:** 10.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4237-0-3`

- **Kapitteltype:** drill (MCQ-sjanger).
- **Description:** En stor flervalgsbolk som feier hele pensum i 2023-formen — de billigste
  poengene, kalibrert som ren gjenkjenning.
- **Eksamensbelegg:** Flervalgsbolk 2023 (Q16–33, à 1 p). Sjangre: MCQ. Prioritet:
  **perfekt** (billige garanterte poeng). `(svakt belagt for trekkregel.)`
- **Innholdskontrakt:** stor MCQ-samling som dekker hele pensumbredden (CIA, threat agents,
  CVE/CVSS, SQLi/XSS/CSRF-diagnose, session hijacking-mottiltak, symmetrisk/asymmetrisk,
  buffer overflow-forsvar, captcha, BSIMM/OpenSAMM, Biba/BLP, GDPR-prinsipper, sikkerhets-
  krav-definisjon, kode-diagnose), med distraktorer som spiller på de faste forvekslingene
  (#7–#10). Hver med kort forklaring på hvorfor riktig er riktig og distraktorene «nesten».
- **Oppgavesjangre:** MCQ (dette kapitlet leverer mest quiz — det ER flervalgstreningen).
- **Typiske feil:** #7–#10 forvekslinger; #13 bruke for lang tid på ett flervalg.
- **Kvote:** 24 quiz / 8 flashcards (pensumbredde-MCQ som eksamenstrening; de faste
  distraktor-fellene).

#### Kapittel 10.2: Kortsvar- og drøftingsbank (modellsvar)
**id:** `tdt4237-10-2` · **number:** 10.2 · **estimatedMinutes:** 65 · **prerequisites:** `tdt4237-0-2`

- **Kapitteltype:** modellbesvarelse (kortsvar/drøfting på tvers).
- **Description:** En bank av A-nivå modellsvar på de faste kortsvarene, hver med
  kommentert svakere variant — kjernepotten på tvers av alle sett.
- **Eksamensbelegg:** Faste kortsvar (analysen §3C, §7 sluttavsnitt). Sjangre: KORT, DRØFT.
  Prioritet: **perfekt** (kjerne-kortsvarene «tar en stor, trygg grunnpott»).
- **Innholdskontrakt:** gjennomskrevne modellsvar (nyskrevne) på de faste kortsvarene:
  SQLi-rotårsak + ≥3 motmidler; sesjonstoken-tabellen med fordel/ulempe; Biba vs. Bell-
  LaPadula med korrekte regler; BSIMM vs. OpenSAMM; touchpoints-rekkefølgen; riktig
  nøkkelbruk (kryptering/signatur); TLS-handshake i 4 steg; GDPR to art. 5-prinsipper;
  XSS stored/reflected/DOM. Hvert svar i `collapsible` **A-versjon** (kort, presis,
  korrekt navngiving) + `collapsible` **kommentert C-versjon** (korrekt men flat/upresis,
  med notat om gapet) + `tip` sensorblikk.
- **Oppgavesjangre:** KORT, DRØFT. 8–10 modellsvar med A/C-kontrast.
- **Typiske feil:** #6/#7/#8/#9/#10/#11 (hver demonstrert via C-versjonens svakhet); #13
  langt i stedet for stramt.
- **Kvote:** 18 quiz / 14 flashcards (A/C-kjennetegn per kortsvar, de faste
  navngiving-/regelfaktaene, begrep↔presist svar).

#### Kapittel 10.3: Øvingseksamen 1 — bredt Inspera-sett
**id:** `tdt4237-10-3` · **number:** 10.3 · **estimatedMinutes:** 180 · **prerequisites:** `tdt4237-10-2`

- **Kapitteltype:** øvingseksamen.
- **Description:** Et komplett Inspera-sett i dagens form: ett RMF-case + kortsvar à 3–4 p
  + en flervalgsbolk à 1 p, med full temabredde.
- **Eksamensbelegg/miks:** Speiler prognosen (§7): **1 RMF-case (~26 p)** på et nyskrevet
  system + **~8 kortsvar** (SQLi/injeksjon, XSS-navngiving, CSRF, sesjonstoken-tabellen,
  Biba vs. BLP, BSIMM vs. OpenSAMM, nøkkelbruk, GDPR to prinsipper) + **~15 flervalg**
  (hele pensum). Alle nyskrevne. Løsningsforslag i `collapsible` per oppgave (kort,
  A-nivå), med `tip` om delpoeng og tidsbudsjett. Sjangre: RMF, KORT, KODE, MCQ.
  Prioritet: **perfekt** (full generalprøve).
- **Innholdskontrakt:** dekker RMF, KORT, KODE, MCQ og alle de fem perfekt-temaene minst
  én gang.
- **Oppgavesjangre:** RMF, KORT, KODE, MCQ.
- **Typiske feil:** hele feilkatalogen #1–#14 (løsningsforslagene markerer hvor hver lurer).
- **Kvote:** 14 quiz / 0 flashcards (rent oppgavesett; quiz = flervalgsbolken).

#### Kapittel 10.4: Øvingseksamen 2 — kode- og kryptotungt sett
**id:** `tdt4237-10-4` · **number:** 10.4 · **estimatedMinutes:** 180 · **prerequisites:** `tdt4237-10-3`

- **Kapitteltype:** øvingseksamen.
- **Description:** Et sett med tyngdepunkt på kodeanalyse (tre-ledds) og konseptuell krypto,
  men fortsatt full bredde og et RMF-case.
- **Eksamensbelegg/miks:** ~1 RMF-case (~25 p) + **~4 KODE-snutter** (svakt token, path
  traversal, klartekst-passord, buffer overflow — hver tre-ledds) + ~4 KORT (OTP-gjenbruk,
  ECB→CBC+IV, TLS-handshake, signatur-nøkkelbruk) + ~15 MCQ. Alle nyskrevne. Løsningsforslag
  som A-besvarelse med tre-ledds-markering og delpoeng-`tip`. Sjangre: RMF, KODE, KORT, MCQ.
  Prioritet: **perfekt** (supplerer 10.3 med tyngre kode/krypto).
- **Innholdskontrakt:** dekker RMF, KODE (hele katalogen), krypto-kortsvarene, MCQ.
- **Oppgavesjangre:** RMF, KODE, KORT, MCQ.
- **Typiske feil:** #4/#5/#6 (kode) + #10/#11 (krypto) + #1/#2 (case).
- **Kvote:** 14 quiz / 0 flashcards (rent oppgavesett; quiz = flervalgsbolken).

#### Kapittel 10.5: Øvingseksamen 3 — personvern- og RMF-tungt fremtidssett
**id:** `tdt4237-10-5` · **number:** 10.5 · **estimatedMinutes:** 180 · **prerequisites:** `tdt4237-10-4`

- **Kapitteltype:** øvingseksamen.
- **Description:** Et sett som vekter personvern/GDPR og AI/ML tyngre (prognosens vekstakser)
  rundt et stort RMF-case — der toppkarakteren avgjøres.
- **Eksamensbelegg/miks:** ~1 RMF-case (~28 p) med **tung GDPR-avslutning** (direkte/indirekte
  personopplysninger + drøft to art. 5-prinsipper) + ~3 KORT (anonymiseringsteknikkene,
  privacy by design, security≠privacy) + ~2 DRØFT (GDPR i krise; AI/ML-verktøys grenser) +
  ~15 MCQ (bred, med CVE/CVSS og adversarial ML). Alle nyskrevne. Løsningsforslag som
  A-besvarelse med eksplisitt markering av hva som løfter til topp (koblingene, GDPR-delen).
  Sjangre: RMF, KORT, DRØFT, MCQ. Prioritet: **perfekt** (fremtidsrettet generalprøve).
- **Innholdskontrakt:** de tre settene 10.3–10.5 dekker sammen alle sjangre (RMF/KODE/KORT/
  DRØFT/PENTEST/MCQ) og alle temadeler flere ganger; personvern/AI/ML vektes tyngst her.
- **Oppgavesjangre:** RMF, KORT, DRØFT, MCQ.
- **Typiske feil:** #14 (GDPR-koblingen), #12 (feil antall prinsipper), #1 (case-kobling).
- **Kvote:** 14 quiz / 0 flashcards (rent oppgavesett; quiz = flervalgsbolken).

---

## 5. Summeringskontroll (quiz/flashcards) — AUTORITATIV

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.3 | 12+14+12 = **38** | 8+10+8 = **26** |
| 1 | 1.1–1.3 | 24+18+16 = **58** | 32+22+20 = **74** |
| 2 | 2.1–2.5 | 26+22+20+22+24 = **114** | 30+24+22+26+22 = **124** |
| 3 | 3.1–3.3 | 22+20+18 = **60** | 24+22+20 = **66** |
| 4 | 4.1–4.2 | 20+22 = **42** | 24+28 = **52** |
| 5 | 5.1–5.3 | 22+24+24 = **70** | 26+24+30 = **80** |
| 6 | 6.1–6.2 | 24+24 = **48** | 30+30 = **60** |
| 7 | 7.1–7.2 | 22+20 = **42** | 28+24 = **52** |
| 8 | 8.1–8.2 | 16+16 = **32** | 18+18 = **36** |
| 9 | 9.1–9.4 | 22+14+14+18 = **68** | 26+10+10+18 = **64** |
| 10 | 10.1–10.5 | 24+18+14+14+14 = **84** | 8+14+0+0+0 = **22** |
| **Sum** | **34 kap.** | **656 ≥ 500 ✓** | **656 ≥ 500 ✓** |

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens, eksamensform og at faget er **svært begrepsrikt** (jf.
PRODUKSJONSLOYPE: «≥500 er et gulv» — begrepsrike drøftingsfag skal ligge høyt på
flashcards; her ~656). **Quiz** er kalibrert som direkte eksamenstrening for
flervalgsbolken (2023→) — de tunge OWASP-/kode-/krypto-/RMF-delene (2, 5, 6, 9) og
flervalgsdrillen (10.1) bærer mest. **Flashcards** vektes mot begrep ↔ definisjon/
rotårsak/fiks/regelretning — puggematerialet for hjelpemiddelfri eksamen; de tyngste
begrepsdelene (2 websårbarheter, 5 auth/sesjon/tilgang, 6 krypto) bærer mest.
Øvingseksamenene (10.3–10.5) gir 0 flashcards (rene oppgavesett) men bidrar med quiz
(flervalgsbolken).

---

## 6. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–9 → 36 prøver)

Hver prøve er nyskrevne oppgaver i eksamens sjangre (RMF/KODE/KORT/DRØFT/PENTEST/MCQ),
med kort løsningsforslag og poengfordeling. Prøvekapitler bygges som `tdt4237-<del>-prove`
(chapterNumber `<del>.P`) etter plattformmønsteret, eller som egne exercise-seksjoner i
delens siste kapittel. Prøvekvotene per del står i sluttblokken til hver del over
(Del 1–9). Del 0 (håndverk) og Del 10 (eksamenstrening) får ikke egne prøver — Del 10
**er** øvingseksamenene.

### Øvingseksamener (3 komplette sett — se kap. 10.3–10.5)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (10.3) | Typisk Inspera-sett | 1 RMF-case + ~8 kortsvar (full bredde) + ~15 flervalg |
| Øvingseksamen 2 (10.4) | Kode-/kryptotungt sett | 1 RMF-case + ~4 KODE-snutter (tre-ledds) + krypto-kortsvar + ~15 flervalg |
| Øvingseksamen 3 (10.5) | Personvern-/RMF-tungt fremtidssett | 1 RMF-case m/tung GDPR + anonymisering/AI-DRØFT + ~15 flervalg |

Til sammen dekker de tre settene alle sjangre (RMF/KODE/KORT/DRØFT/PENTEST/MCQ — PENTEST
via RMF-casenes trinn 6) og alle temadeler flere ganger.

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — Inspera-formen (RMF-case + kortsvar à 3–4 p + flervalgsbolk à
   1 p), de to epokene, vektings-skiftet og hjelpemiddelkode E `(verifiser)`, og at
   2020–2021 ikke er representative (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvensen omgjort til tre lesenivåer: **perfekt**
   (RMF-caset Del 9, injeksjon/OWASP + kodeanalyse Del 2, trusselmodellering Del 3, SDLC
   Del 4, auth & sesjon Del 5), **kunne** (krypto Del 6, personvern Del 7, tilgangskontroll
   5.3, pentest 9.4), **kjenne** (minnesikkerhet, sky, AI/ML, CVE/CVSS — Del 8 + 1.3).
3. **Sjangerguiden** — de seks sjangrene RMF/KODE/KORT/DRØFT/PENTEST/MCQ med oppskriftene:
   RMF-kjeden (9.1), kodeanalysens tre ledd (2.5), kortsvarshåndverket (0.2),
   pen-test-malen (9.4), flervalgshøstingen (0.3).
4. **Prosedyre-malene** — RMF-oppskriften (prosedyre-mal A) og kodeanalysens tre-ledds-mal
   (prosedyre-mal B), pluss de faste tabellene som `theorem`-blokker: touchpoints-
   rekkefølgen, sesjonstoken-tabellen, Biba/Bell-LaPadula-regelretningene, TLS-handshaken.
5. **Sensorreglene** — de sju metareglene (§3): brief and to the point; poeng per
   delelement + eksakt antall; kodeanalyse tre ledd; koble hver risiko til trusselmodell +
   case + business risk (−2 p ellers); pentest teststeg+forventet; dokumentér antakelser;
   strukturell fiks slår «saniter».
6. **Feilkatalogen** — de 14 typiske feilene (§3), hver med henvisning til kapitlet som
   forebygger den: risiko uten kobling (Del 3/9), pentest uten teststeg (9.4), mål/assets-
   forveksling (9.1), kode uten linje/utnyttelse (2.5), overflatefiks (2.x), XSS ikke kalt
   «stored» (2.2), Biba/BLP snudd (5.3), CVE/CVSS (1.3), BSIMM/OpenSAMM (4.2), feil
   nøkkelbruk (6.2), IV/OTP-lekkasje (6.1), feil antall (0.2), langt svar (0.2), glemt
   GDPR-kobling (7.1/9).
7. **Begreps- og forkortelsesark** — alle rammeverk og akronymer samlet (OWASP-kategoriene,
   CWE-numrene, RMF-trinnene, touchpoints, BSIMM/OpenSAMM, Bell-LaPadula/Biba-reglene, GDPR
   art. 5, TLS-handshaken, krypto-notasjonene `c=m⊕k`/PK/SK/IV) — puggeark for
   hjelpemiddelfri eksamen.
8. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant): Del 0
   (sjangrene) → Del 1 (grunnbegreper) → Del 2 (OWASP + kodeanalyse — sikreste kortsvar) →
   Del 3 (trusselmodellering) → Del 9 (RMF-oppskriften + modellbesvarelsene — selve faget) →
   Del 4/5 (SDLC + auth) → Del 6/7 (krypto + personvern) → Del 8 (bør kjenne) → Del 10
   (flervalgsdrill + de tre øvingssettene under tidspress de siste ukene).

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `tdt4237` med alle 34 kapitler
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites/
   linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra §2-tabellen (obligatorisk).
   **`number` er del-basert** («5.2», ALDRI lineær «22» — jf. JUS1111-lærdommen;
   prosareferanser i innholdet bruker samme form, «kap. 5.2»). NTNU legges inn i
   `src/app/trinn/hoyere/institusjoner.ts` (visningsnavn «TDT4237 Programvaresikkerhet
   og personvern»).
2. **Del 0** (kap. 0.1–0.3) — etablerer sjangernavnene RMF/KODE/KORT/DRØFT/PENTEST/MCQ,
   frekvenstallene, sensorens metaregler og de tre svarhåndverkene resten refererer til.
3. **Grunnlaget**: Del 1 (CIA/threat agents/CVE-CVSS — kreves av alle kortsvar og RMF).
4. **De sikre kortsvarsblokkene**: Del 2 (OWASP + kodeanalyse) → Del 3 (trusselmodellering)
   → Del 4 (SDLC) → Del 5 (auth/sesjon/tilgang) → Del 6 (krypto) → Del 7 (personvern) →
   Del 8 (bør kjenne).
5. **Del 9 (RMF-praktikum)** bygges av én agent som leser HELE skjelettet (gjenbruker Del
   1–7): 9.1 oppskrift → 9.2/9.3 modellbesvarelser → 9.4 pentest/juss.
6. **Del 10 (eksamenstrening)** sist — gjenbruker alle sjangre og temaer.
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert; prøvene (§6)
   i respektive delers prøvekapittel/exercise-seksjoner.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (escape `"`
  i norske sitattegn og i kodesnutter; `\\` der nødvendig); `npm run build` grønn.
- [ ] **RMF-kjeden komplett**: kap. 9.1 har `theorem` med alle 7 ledd; 9.2 og 9.3 er fulle
  modellbesvarelser med **≥5 assets, risikomatrise, misuse case + attack tree, ≥10 koblede
  tekniske risikoer, ett krav per risiko, ≥3 pen-test-caser med teststeg+forventet, GDPR-
  avslutning**; hver risiko eksplisitt koblet til trusselmodell + business risk + caset.
- [ ] **Koble-til-caset-warning (feil #1, −2 p)** står i hver RMF-relatert `warning` (Del
  3.3 og hele Del 9).
- [ ] **Kodeanalysens tre-ledds-mal**: kap. 2.5 har `theorem` med (a) linje + (b) utnyttelse
  + (c) strukturell fiks; ≥3 gjennomskrevne a-b-c-modeller; hver KODE-oppgave i boka har
  tre-ledds-fasit; strukturell fiks (ikke «saniter», feil #5); XSS kalt «stored» (feil #6).
- [ ] **Eksakt-antall-krav**: hver kortsvarsfasit som ber om «minst N» leverer minst N og
  sier eksplisitt antallet (feil #12).
- [ ] **STRIDE-avviket**: kap. 3.3 (og §1) sier eksplisitt at boka bruker misuse cases +
  attack trees, at STRIDE er bakgrunn/«bør kjenne», og at INGEN sett bruker STRIDE
  `(verifiser mot gjeldende pensum)`.
- [ ] **Faste tabeller/regler som `theorem`**: touchpoints-rekkefølge (4.1), sesjonstoken-
  tabellen med fordel/ulempe (5.2), Biba/Bell-LaPadula-regelretningene (5.3), TLS-handshaken
  i 4 steg (6.2), RMF-kjeden (9.1), kodeanalyse-malen (2.5), pen-test-malen (9.4). Korrekte
  regelretninger (feil #7) og riktig nøkkelbruk (feil #10).
- [ ] **Begreps- og forkortelsesliste per delkapittel**: hvert kapittel har `collapsible`
  «Begreps- og forkortelsesliste» rett etter Forkunnskaper, som forklarer ALLE akronymer,
  rammeverksnavn og notasjoner brukt i delkapitlet (per delkapittel, ikke arv).
- [ ] **Kapittel-DNA**: hvert temakapittel har Eksamensvinkel-`tip` (med tallene herfra),
  Typiske feil-`warning`, kjernebegreper som toppnivå `definition` med title (flashcard-
  kilden), 1–3 eksempler, 4–8 øvinger; drill-/praktikumkapitler har oppskrift (`theorem`)
  + gjennomskrevet sensor-kommentert case + oppgaver på eksamensnivå.
- [ ] **Vektings-caveat**: Del 0 sier eksplisitt at vekting/hjelpemiddelkode har skiftet to
  ganger og skal verifiseres mot emnebeskrivelsen; 2020–2021 ikke representative.
- [ ] **Quiz-sum ≥ 656 og flashcard-sum ≥ 656** per kvotetabellen (§5); quiz kalibrert som
  flervalgs-eksamenstrening, `options[0]` = riktig svar; flashcards som begrep ↔ definisjon/
  rotårsak/fiks/regelretning.
- [ ] **Prøver**: 4 per temadel 1–9 (36 stk) + 3 øvingseksamener (kap. 10.3–10.5) som
  sammen dekker sjangrene RMF/KODE/KORT/DRØFT/PENTEST/MCQ og alle temadeler.
- [ ] **Opphavsrett**: ALLE case, kodesnutter, oppgaver, tall og «modellbesvarelser»
  nyskrevne — egne parter/systemer/data; rammeverksnavn (OWASP, CWE, CVE, RMF, BSIMM,
  Bell-LaPadula, GDPR art. 5), angreps-/forsvarsmekanismer og standardnotasjon er allmenn
  faglig kunnskap, men ingen oppgavetekster/fasiter/sensorkommentarer fra reelle sett
  gjengis; pensumlitteratur refereres (forfatter/verk/begrep), aldri siteres i lengde.
- [ ] **Usikkerhetsmarkører**: lavfrekvente/voksende temaer (AI/ML, CVE/CVSS, anonymisering)
  og alle vektings-/pensumdetaljer merket `(verifiser)` der belegget er svakt.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 +
  innhold), jf. lærdommen om `getChapterMeta`.
