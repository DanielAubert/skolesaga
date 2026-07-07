# Bokskjelett: TTM4135 Anvendt kryptografi og nettverkssikkerhet — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alle frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (NTNUs eksamensarkiv for TTM4135, 14 sett med fasit V2015–V2024,
> faglærer Colin Boyd / Anamaria Costache; pensum Stallings, *Cryptography and Network
> Security* + forelesningsnotater). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) —
> **hybrid**: en kvantitativ kryptomatematisk kjerne (modulær aritmetikk, RSA, DH,
> primalitet) OG en konseptuell anvendt-sikkerhet-del (moduser, hash/MAC, signaturer,
> PKI, TLS, Kerberos, Signal, kvantetrussel). Kapittel-DNA-ene i regnefag-malen (teori /
> drill / øvingseksamen) er obligatoriske og gjentas ikke i sin helhet her, men er
> tilpasset et fag der eksamen er **nøyaktig 50/50 flervalg (MCQ) og skriftlig** (§1).
> **All notasjon følger emnets og pensumbokas konvensjoner** (Stallings/Boyd): `mod`,
> `φ(n)`, `Z*ₚ`, `g^{ab}`, `E(·,K)`, Feistel-rundeligninger, ciphersuite-strenger.
> Alle oppgaver, tallverdier, chiffernøkler, moduli og innpakninger i den ferdige boka
> skal være **nyskrevne** (opphavsrett): algoritmer, protokollnavn, standardnotasjon og
> tallteori er allmenn faglig kunnskap, men ingen oppgavetekster, fasiter eller
> sensorformuleringer fra reelle sett gjengis. **Tospråklig:** norsk bokmål med engelsk
> fagterm i parentes ved første forekomst, fordi pensum og eksamen er på engelsk.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `ttm4135` |
| Tittel | **TTM4135 Anvendt kryptografi og nettverkssikkerhet (NTNU)** |
| Institusjon | **NTNU** (finnes fra før i `institusjoner.ts`, jf. TDT4120/TFY4104) |
| Level | `'Høyskole'` |
| Arketype | Regnefag — **hybrid** (kvantitativ kryptomatematisk kjerne + konseptuell anvendt sikkerhet); låner **kortsvars-/utledningsdrill** fra tdt4120 for den skriftlige halvdelen (se §«Avvik») |
| Antall kapitler | **41** (2 eksamenskart/håndverk + 34 tema/drill + 5 eksamenstrening) |
| Estimert totaltid | **≈ 2 660 min ≈ 44 timer** (inkl. 3 tretimers øvingseksamener à 180 min) |
| Quiz totalt | **762** (krav ≥500; siktet **høyt** fordi MCQ **er halve eksamen** — se §5) |
| Flashcards totalt | **566** (krav ≥500 — svært begrepsrikt fag; kode D ≈ hjelpemiddelfri ⇒ pugg) |
| Prøver | **40** (4 per temadel 1–10) + **3 øvingseksamener** (kap. 11.3–11.5) |

**Pitch (én avsnitt):** TTM4135 er NTNUs masteremne i anvendt kryptografi og
nettverkssikkerhet. Vurderingen er en **mappevurdering**: en avsluttende **3-timers
digital skriftlig eksamen (60 %)** pluss lab-arbeid og nettbaserte quizer (40 %) —
**begge deler må bestås**. Eksamen er på **engelsk**, karakter **A–F**,
hjelpemiddelkode **D** (kun en enkel kalkulator, ingen trykte notater). Selve
eksamensformen styrer boka: settet gir **60 poeng delt nøyaktig 50/50** — **Exercise 1
= 30 firealternativs flervalgsspørsmål** (30 p; **feil kryss −0,33, blankt 0**) som
feier hele pensumbredden, og **Exercise 2 = 5 skriftlige oppgaver** (30 p) med
deloppgaver som deler poengene likt. Fordi de to halvdelene veier likt, **drilles boka
like tungt på begge**: en stor MCQ-bank som ren gjenkjenningstrening (quiz er **direkte
eksamenstrening**, ikke bare faktakontroll) **og** en systematisk utledningsdrill for de
skriftlige oppgavene. De tre skriftlige sjangrene som er praktisk talt garantert hvert
år — **klassisk chiffer/kryptoanalyse (Q1, ~100 %)**, **blokkchiffermodus/Feistel/DRBG
(Q2, ~100 %)** og **tallteori/RSA-regning (midtdel, ~100 %, ofte to oppgaver)** — får
hvert sitt teori- **og** drillkapittel. Regnesjangrene med én entydig fasit (modulær
invers, RSA-CRT, square-and-multiply-telling, Miller–Rabin-sekvens, Hill-matrise mod
`n`, DH-generator/delt hemmelighet) er den tryggeste grunnpotten og driller til
feilfrihet. Protokolldelen (TLS, Kerberos, Signal, PKI) læres gjennom **fire faste
akser** — ferskhet, identitetsbinding, forward secrecy og ende-til-ende vs. lenke — slik
at studenten kan analysere en ukjent protokoll med samme verktøykasse. Post-kvante og
Signal dekkes som de klare vekstområdene.

**Kritisk stilregel (gjelder HELE boka) — «to halvdeler, samme pensum»:**
1. **50/50-disiplinen.** MCQ og skriftlig veier likt (30 p + 30 p). Boka behandler dem
   som to *ferdigheter på samme stoff*: flervalgs**gjenkjenning** (rask, entydig,
   billig) og skriftlig **utledning** (vis mellomregning, navngi teorem, skriv konkret
   angrep). Hvert temakapittel trener begge — quiz for MCQ-refleksen, `exercise` +
   drillkapitler for den skriftlige utledningen.
2. **MCQ: svar når du kan eliminere, ikke ellers.** Gjeldende form gir **−0,33 for feil
   kryss og 0 for blankt**. Det lønner seg å svare når minst ett alternativ kan
   elimineres; rent gjett er marginalt negativt. Boka lærer denne kalkylen eksplisitt i
   kap. 0.2, og hver quiz-forklaring begrunner **både** hvorfor det riktige er riktig
   **og** hvorfor de sentrale distraktorene er gale (elimineringsferdigheten faget
   tester).
3. **Skriftlig: vis mellomregningen — «Show your working».** I regneoppgavene forlanger
   fasiten eksplisitte steg: square-and-multiply-tellingen, Euklid-kjeden,
   Miller–Rabin-sekvensen, matriseinverteringen mod `n`, CRT-kombinasjonen. **Rett
   tallsvar uten utregning gir sjelden full uttelling.** Alle skriftlige løsningsforslag
   i boka viser regnekjeden kompakt og oppgir tallsvaret konkret.
4. **Navngi teoremet.** Begrunn med **Euler, Fermats lille teorem, Euklid,
   fødselsdagsparadokset** der det er naturlig — ikke «tallmagi». Fasitene skriver
   eksplisitt «applying Euler» / «by Fermat's theorem». Bokas løsningsforslag og
   `theorem`-blokker navngir alltid resultatet som begrunner steget.
5. **Protokoll: skriv det konkrete angrepet, ikke essay.** På protokolloppgaver
   forventer fasiten at du *skriver ned angrepsmeldingene* (hvilke verdier angriperen
   sender/bytter) og *konsekvensen* — ikke «protokollen er usikker». Faget har **ingen
   essay-natur**: modellsvarene er 2–6 setninger per deloppgave. Boka bruker en fast
   **protokollangreps-mal** (§3) i alle protokollkapitler.
6. **Poeng deles likt på deler — delvis uttelling.** En 6-poengsoppgave med tre deler ⇒
   2 p hver; en riktig del redder poeng selv om en annen bommer. Løsningsforslagene
   markerer delpoengene, og oppfordrer til å ta det man kan først.
7. **Emnets/pensumbokas notasjon er fasit, engelsk fagterm i parentes.** Bruk `a^{-1}
   \bmod n`, `\varphi(n)`, `\gcd`, `Z_p^*`, `g^{ab}`, `E(P,K)`/`D(C,K)`,
   Feistel-`L_i,R_i`, ciphersuite-strenger (`TLS_RSA_WITH_AES_128_CBC_SHA256`) nøyaktig
   som oppgavene forventer gjenkjenning. Første forekomst av et begrep gir engelsk term i
   parentes («fødselsdagsparadokset (*birthday paradox*)», «forward secrecy»,
   «ratchet»), fordi eksamen og pensum er på engelsk.

**⚠️ Formen har skiftet tre ganger — bygg på sjangrene, ikke tallene (skal stå i Del
0):** Arkivet spenner over tre tellinger: 2017–2018 hadde **30 MCQ + 6 skriftlige**;
korona-formen 2020–2022 hadde **15 tre-alternativs MCQ + 6 skriftlige** (med
begrunnelseskrav, ikke representativ for dagens MCQ-form); og **gjeldende 2023–2024** har
**30 firealternativs MCQ + 5 skriftlige**. **Pensumet og oppgavesjangrene er nesten
uendret** gjennom hele perioden — Q1 klassisk chiffer, Q2 modus/Feistel, midtdel
tallteori/RSA, siste protokoller. Boka bygges derfor på **sjangrene** (stabile), ikke det
eksakte oppgaveantallet (varierer). Del 0 sier eksplisitt: korona-settenes 15-MCQ-form
med tre alternativer og begrunnelse er **ikke** dagens form (30 firealternativs uten
begrunnelse, −0,33 for feil), men **innholdet** i de MCQ-ene er like nyttig — det er de
samme temaene.

**Nye/voksende innslag (skal dekkes — «forvent fremover», Del 10):** **post-kvante**
(Shor bryter faktorisering OG (EC)DLP, Grover halverer symmetrisk, «harvest now, decrypt
later»), **Signal** (Double Ratchet, X3DH, post-compromise security), **TLS 1.3** (alltid
forward secrecy, ingen RSA key transport, kun AEAD, 0-RTT), **PKI/sertifikater** (X.509,
CRL). GCM/AEAD og ECDSA/ECDH dominerer nå der 3DES/CBC+HMAC-SHA-1 sto før. Del 0 flagger
alle som voksende.

**Avvik fra DNA/README-malen (dokumentert):**
- **Quiz ER eksamenstrening, ikke bare faktakontroll — og kalibreres HØYT (762).** Fordi
  **MCQ utgjør nøyaktig halve eksamen** (30 av 60 poeng) er plattformens MC-quiz **direkte
  eksamenstrening** av Exercise 1, ikke bare et supplement. Dette er samme kalibrering som
  i2060-forbildet (der eksamen selv er auto-rettet), og forskjellig fra tdt4120 (der
  eksamen er frisvar og quiz «bare» er faktakontroll). Konsekvenser: (i) `options[0]` =
  riktig svar (runtime stokker); (ii) hver quiz-forklaring begrunner **både** riktig svar
  **og** hvorfor de sentrale distraktorene er gale (−0,33-elimineringsferdigheten); (iii)
  quiz-banken feier hele pensumbredden akkurat som Exercise 1 gjør, med tyngde på de
  MCQ-sikre temaene (modulær aritmetikk, moduser, RSA/hash-fakta, TLS, post-kvante). Den
  **skriftlige** utledningspresisjonen (Exercise 2) trenes i `exercise`- og
  drillkapitlene (`solution` + `hints`), ikke i quiz.
- **Hybrid-lån: kortsvars-/utledningsdrill fra tdt4120 for den skriftlige halvdelen.**
  DNA-en er ren regnefag, men TTM4135s skriftlige del er halvt konseptuell (protokoller,
  egenskaper). Analysen anbefaler eksplisitt en **hybrid in2060 × tdt4120**. Fra
  **in2060** lånes teori+regneeksempel-strukturen, `theorem`-blokker for *regneprosedyrer*
  og MCQ-som-eksamenstrening. Fra **tdt4120** lånes **kortsvarsdisiplinen**: modellsvarene
  er 2–6 setninger, «lange svar teller ikke positivt», svar på det etterspurte, navngi
  teoremet, delvis uttelling per del. Denne kortsvarsdrillen brukes der analysen krever
  konseptuell presisjon — særlig protokoll- og egenskapsoppgaver (Del 6–10). **Valget er
  dokumentert her** per DNA-kravet: hybrid fordi eksamen selv er hybrid (50 % MCQ som
  in2060, 50 % kortsvar-utledning som tdt4120).
- **«Symbol- og formelliste» → «Formel- og algoritmeliste».** README krever en
  `collapsible` «Symbol- og formelliste» per delkapittel. For et kryptofag er det presise
  apparatet ikke bare symboler, men **algoritmeprosedyrer** (utvidet Euklid,
  square-and-multiply, Miller–Rabin, CRT-kombinasjon, Feistel-runder, modus-ligninger).
  Blokken heter derfor **«Formel- og algoritmeliste»** og lister ALT delkapitlet bruker:
  hver variabel/symbol med betydning **og** hver algoritme/prosedyre med inn/ut og
  ett-linjes fremgangsmåte (f.eks. «`a^{-1} \bmod n` — modulær invers, finnes via utvidet
  Euklid; eksisterer ⇔ `\gcd(a,n)=1`»). Regelen «per delkapittel, ikke arv fra tidligere»
  beholdes. Unntak kun for kapitler helt uten formler/algoritmer (finnes knapt).
- **`theorem`-blokker brukes for algoritmeprosedyrer OG kryptografiske nøkkelresultater.**
  Der DNA-en bruker `theorem` for matematiske resultater, brukes den her for **begge**:
  (a) de faste **regneprosedyrene** som må sitte (utvidet Euklid → invers, square-and-
  multiply-telling, RSA-CRT-kombinasjon, Miller–Rabin-sekvensen, Hill `K=CP^{-1}`, DH delt
  hemmelighet) — presentert som nummererte prosedyre-`theorem`er, og (b) **navngitte
  teoremer** (Euler, Fermats lille teorem, kinesisk restteorem, fødselsdagsparadokset,
  maks-flyt-analoger finnes ikke her, men «RSA virker fordi Euler»). Disse er bokas
  «teoremer», og hvert regnekapittel har minst én prosedyre-`theorem` og ett navngitt
  teorem.
- **Protokollangreps-mal (fast struktur, §3) i alle protokollkapitler.** Sensor krever
  *konkrete angrepsmeldinger + konsekvens*, ikke essay. Der DNA-en har fri form, innfører
  denne boka en obligatorisk fem-punkts angrepsmal (parter/antakelser → protokollflyt →
  hvilken sjekk mangler → angriperens konkrete meldinger → konsekvens + tiltak) som
  gjentas i Del 8–10. Dette er bokas motstykke til tdt4120s «reduksjonsretning».
- **Flashcards kalibreres som begrep/prosedyre ↔ presis definisjon + fast feilslutning.**
  Flashcards genereres KUN fra toppnivå `definition`-blokker med `title`. Faget er svært
  begrepsrikt (chiffertyper, moduser, egenskaper, protokoll-primitiver, angrepstyper), så
  flashcards siktes høyt (566) og kalibreres som gjenkalling: **begrep → presis definisjon
  + den faste sammenblandingen** (f.eks. «Forward secrecy → *langtidsnøkkel kompromittert
  SENERE* avslører ikke tidligere øktnøkler; **ikke** post-compromise security»; «CTR →
  parallelliserbar maskemodus, feil endrer **bare** samme bit i samme blokk»; «MAC → krever
  delt nøkkel, gir **ikke** ikke-benekting — i motsetning til signatur»). Fordi kode D
  ≈ hjelpemiddelfri, ER dette puggematerialet.
- **Drillkapitler ligger i sine temadeler** (ikke samlet i siste del), fordi hver
  høyfrekvent regne-/analysesjanger må drilles umiddelbart etter teorien: 1.4 (klassisk
  kryptoanalyse), 2.5 (modus/Feistel/DRBG), 3.4 (modulær invers/gcd/CRT), 4.5 (RSA-regning),
  5.3 (DH), 9.3 (protokollangrep). Del 11 beholder MCQ-mesterdrillen, utledningshåndverket
  og de tre komplette øvingseksamenene.
- **Kapittelantall (41) ligger over DNA-veiledningen (20–35)** og er begrunnet: faget er en
  **bred hybrid** med en tung kvantitativ kjerne (Del 3–5: tallteori + RSA + DH, ni
  kapitler) *og* en bred protokolldel (Del 8–10, ni kapitler), og fordi **MCQ er halve
  eksamen** må hele pensumbredden dekkes fullverdig — man kan ikke droppe et tema uten å
  tape MCQ-poeng. To eksamenskart-/håndverkskapitler kreves fordi eksamen har to
  likestilte former. Tallet er på linje med forbildene (in2060: 37, tdt4120: 38).

---

## 2. Makrostruktur

Delene 1–10 følger **faglig avhengighet** (DNA-regelen): symmetrisk krypto først (krever
lite forkunnskap og er Q1/Q2), deretter den tallteoretiske kjernen (fundament → RSA → DH),
så hash/signaturer, og til slutt protokollene som bygger på alt det foregående. Frekvensen
styrer *omfanget*: perfekt-temaer (Del 1–5) får teori **+ eget drillkapittel**; kunne/kjenne
får kompakte kapitler. `sectionNames` (bokforsiden) settes fra kolonne 2.

| Del | `sectionName` (bokforsiden) | Kap. | Begrunnelse (frekvens → omfang) | Prioritet |
|---|---|---|---|---|
| 0 | Eksamenskart og eksamenshåndverk | 2 | Prioriteringsverktøyet + MCQ-/utledningshåndverket (to former ⇒ to metakapitler). Kjerne i studieguiden. | — |
| 1 | Klassiske chiffer og kryptoanalyse | 4 | **Skriftlig Q1 ~100 %**, MCQ ~80 %. Nøkkeltelling + Hill-angrep + chosen-plaintext. 3 teori + drill. | perfekt |
| 2 | Symmetrisk krypto: blokkchiffer, moduser og DRBG | 5 | **Skriftlig Q2 ~100 %**, MCQ ~100 %. Moduser, Feistel-brudd, feilforplantning, DRBG-kompromiss. 4 teori + drill. | perfekt |
| 3 | Tallteori og modulær aritmetikk (fundamentet for RSA) | 4 | MCQ ~100 %, fundament for all PK-matte. Invers, Euler/Fermat, CRT. 3 teori + drill. | perfekt |
| 4 | RSA: nøkler, regning og angrep | 5 | **Skriftlig ~100 %, ofte to oppgaver** — den kvantitative kjernen. Square-and-multiply, CRT, Miller–Rabin, split-d. 4 teori + drill. | perfekt |
| 5 | Diffie–Hellman og diskret logaritme | 3 | Skriftlig ~71 %, MCQ ~90 %. Generator, delt hemmelighet, forward secrecy. 2 teori + drill. | perfekt |
| 6 | Hashfunksjoner, MAC og fødselsdagsparadokset | 2 | MCQ ~90 %, skriftlig ~21 %. Kollisjonsresistens, MAC vs signatur. 2 teori. | kunne |
| 7 | Digitale signaturer | 2 | Skriftlig ~57 %, MCQ ~90 %. RSA vs DSA/ECDSA, nonce-gjenbruk, forfalskning. 2 teori. | kunne |
| 8 | PKI, sertifikater og TLS | 3 | TLS skriftlig ~57 %, MCQ ~90 %; PKI ~14 %↑. X.509-kjede, handshake, TLS 1.3. 3 teori. | kunne/kjenne |
| 9 | Autentiseringsprotokoller: Kerberos og Needham–Schroeder | 3 | Skriftlig ~57 %. Ferskhet, identitet, replay, maskerade. 2 teori + protokollangreps-drill. | kunne |
| 10 | Nyere tema: post-kvante, Signal og metadata | 3 | MCQ ~60 %↑, skriftlig ~21 %↑. Shor/Grover, Double Ratchet/X3DH, PGP/STARTTLS/IPsec. 3 teori. | kjenne (↑) |
| 11 | Eksamenstrening | 5 | MCQ-mesterdrill + utledningshåndverk + **3 komplette øvingseksamener** (30 MCQ + 5 skriftlige). | — |

**Avvik fra DNA-makrostrukturen (dokumentert):** DNA-en legger alle sjangerkapitlene i
siste del. Her ligger drillkapitlene (1.4, 2.5, 3.4, 4.5, 5.3, 9.3) i sine respektive
temadeler, fordi hver er en 71–100 %-gjenganger som må drilles umiddelbart etter teorien
(jf. forbildene). Del 11 beholder **MCQ-mesterdrillen** (den tverrgående flervalgsbanken —
unik for dette faget fordi MCQ er halve eksamen), **utledningshåndverket** (den skriftlige
kortsvarssjangeren) og de tre komplette øvingseksamenene. Rekkefølgen symmetrisk → tallteori
→ RSA → DH → hash → signatur → protokoller er både faglig progressiv OG omtrent den
rekkefølgen oppgavene kommer i på settet (Q1 klassisk, Q2 modus, midtdel RSA/DH, siste
protokoll).

---

## 3. Sjangerkatalog

Faget har to ortogonale akser: **eksamensformen** (M = flervalg / W = skriftlig, det
50/50-delte settet) og **innholdssjangeren** (A–H, temablokkene fra EKSAMENSANALYSE §2–3).
I tillegg drilles seks **regnesjangre (R1–R6)** med entydig fasit — sensorens sikreste
poeng. Hvert kapittel refererer aksene; Del 0 presenterer dem for studenten.

### Eksamensformer (E)

| Kode | Form | Mekanikk | Fallgruve |
|---|---|---|---|
| **M** | Flervalg (Exercise 1) | 30 spm, 4 alternativer, ett riktig, 1 p hver; **−0,33 for feil, 0 for blankt** | Distraktorene er «nesten riktige»; svar bare når du kan eliminere ≥1 |
| **W** | Skriftlig (Exercise 2) | 5 oppgaver à maks 6 p, deloppgaver deler poengene likt; **vis mellomregning**, navngi teorem, skriv konkret angrep | Essay teller ikke; rett tallsvar uten utregning gir sjelden full uttelling |

### Innholdssjangre (A–H) — destillert fra EKSAMENSANALYSE §2–3

| Kode | Innholdssjanger | Blokk/Del | Skriftlig | MCQ | Prioritet |
|---|---|---|---|---|---|
| **A** | Klassisk chiffer + kryptoanalyse (Hill, substitusjon, transposisjon, Vigenère, Autokey, OTP) | 1 | **~100 %** (Q1) | ~80 % | perfekt |
| **B** | Blokkchiffermodus / Feistel / DRBG (dekrypteringsligning, feilforplantning, parallellitet, Feistel-brudd, tilstandskompromiss, MAC fra modus) | 2 | **~100 %** (Q2) | ~100 % | perfekt |
| **C** | Tallteori + RSA-regning (invers, Euklid, square-and-multiply, Fermat/Miller–Rabin, √1→faktoriser, CRT, φ(n), split-d) | 3–4 | **~100 %** (ofte to) | ~100 % | perfekt |
| **D** | Diffie–Hellman / diskret log / ElGamal / autentisert nøkkelutveksling | 5 | ~71 % | ~90 % | perfekt |
| **E** | Digitale signaturer (RSA vs DSA/ECDSA, nonce-gjenbruk, eksistensiell forfalskning) | 7 | ~57 % | ~90 % | kunne |
| **F** | TLS-handshake / ciphersuiter / PKI (forward secrecy, key transport vs ECDHE, nedgradering, 0-RTT, X.509-kjede) | 8 | ~57 % | ~90 % | kunne |
| **G** | Autentiseringsprotokoller (Kerberos, Needham–Schroeder: ferskhet, identitet, replay, maskerade) | 9 | ~57 % | ~70 % | kunne |
| **H** | Hash/MAC + nyere (fødselsdagsparadoks, MAC vs signatur, Signal, post-kvante, metadata/e-post, passord) | 6, 10 | ~21 %↑ | ~60–90 % | kunne/kjenne |

### Regnesjangre (R1–R6) — entydig fasit, sensorens sikreste poeng (drillmål)

| Kode | Regnesjanger | Fast oppskrift | Drilles i |
|---|---|---|---|
| **R1** | Modulær invers | utvidet Euklid; `2^{-1} = (n+1)/2` for odde `n` | 3.1, 3.4 |
| **R2** | RSA-CRT | `M_p = C^{d \bmod p-1} \bmod p`, `M_q = …`, kombiner med CRT (~4× fart) | 4.2, 4.5 |
| **R3** | Square-and-multiply-telling | kvadreringer ≈ `⌈\log_2 e⌉`, multiplikasjoner = (antall 1-bit − 1) | 4.2, 4.5 |
| **R4** | Miller–Rabin-sekvens | `n-1 = 2^s m`; sjekk `a^m, a^{2m},…` for `−1` før 1; mangler `−1` ⇒ sammensatt | 4.3, 4.5 |
| **R5** | Hill-matrise mod `n` | `K = CP^{-1}` (chosen: `P=I` ⇒ `K=C`); invers via `\det^{-1}·\text{adj}` mod 26 | 1.2, 1.4 |
| **R6** | DH-generator / delt hemmelighet | generator: `g^{(p-1)/q} ≠ 1` for hver primfaktor `q` av `p-1`; delt = `g^{ab}` | 5.1, 5.3 |

### Protokollangreps-mal (fast fem-punkts struktur — Del 8–10, sjanger F/G/H)

Sensor krever *konkrete angrepsmeldinger + konsekvens*, ikke essay. Hver protokolloppgave
løses med denne malen (bokas motstykke til tdt4120s reduksjonsretning):

1. **Parter og antakelser** — hvem, hvilke nøkler/nonce/timestamps, hva angriperen kan.
2. **Protokollflyt** — meldingene i rekkefølge, med feltene.
3. **Hvilken sjekk mangler** — ferskhet (nonce/timestamp), identitetsbinding, integritet,
   forward secrecy.
4. **Angriperens konkrete meldinger** — *skriv ut* hvilke verdier angriperen fanger,
   gjenbruker eller bytter (f.eks. «replay av `{K_{AB}, ID_A}` fra økt 1»).
5. **Konsekvens + tiltak** — hva angriperen oppnår (replay/maskerade/nøkkellekkasje) og
   hvilken mekanisme som stopper det (timestamp, AEAD, efemer DH).

---

## 4. Kapitler

Feltene følger DNA-ens «Skjelett-krav». **Innholdskontrakt** = definisjoner/teoremer/
**regneprosedyrer** kapitlet SKAL lære (i emnets notasjon). **Formel- og algoritmeliste** =
det `collapsible`-apparatet delkapitlet krever. Prioritetsklasser: **perfekt** / **kunne** /
**kjenne**. Hvert teorikapittel har standard-DNA-en: Eksamensvinkel-`tip` (med tallene fra
dette skjelettet) → Forkunnskaper-`text` + Formel-og-algoritmeliste-`collapsible` →
Motivasjon → `definition`/`theorem` (i emnets notasjon, inkl. regneprosedyre-theorem der
relevant) → utledning m/intuisjon (kun der eksamen krever aktiv utledning) → 2–4 `example`
(siste på eksamensnivå, **gjennomregnet kryptoeksempel med nyskrevne tall**) →
Typiske-feil-`warning` → 6–12 `exercise` (stigende, ender på eksamensnivå, både M- og
W-form, alle med `solution` + `hints`) → Repetisjons-`collapsible`. Drillkapitler:
Eksamensvinkel → løsningsoppskrift → sensor-kommentert case → 10–16 oppgaver på eksamensnivå.

---

### Del 0 — Eksamenskart og eksamenshåndverk

#### Kapittel 0.1: Eksamenskartet — slik testes TTM4135

- **id:** `ttm4135-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen (mappevurdering: 3-timers digital skriftlig 60 % + lab/quiz 40 %, begge må bestås; 60 poeng delt 50/50 mellom 30 MCQ og 5 skriftlige; engelsk, kode D, A–F), temafrekvensene, sjangerkatalogen A–H og E/W-formene, regnesjangrene R1–R6, og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet V2015–V2024. Skal gjengi: (i) **formen** — mappevurdering med avsluttende **3-timers digital skriftlig eksamen (60 %)** + lab/quiz (40 %), **begge må bestås**; **engelsk**; kode **D** (kun enkel kalkulator); **A–F**; settet gir **60 poeng delt nøyaktig 50/50**; (ii) **Exercise 1** — **30 firealternativs flervalg**, 1 p hver, **feil −0,33, blankt 0**, feier hele pensumbredden; (iii) **Exercise 2** — **5 skriftlige oppgaver** à maks 6 p, deloppgaver deler poengene likt, korte utledningsdrevne svar; (iv) **de tre garanterte skriftlige sjangrene** — Q1 klassisk chiffer/kryptoanalyse (~100 %), Q2 blokkchiffermodus/Feistel/DRBG (~100 %), midtdel tallteori/RSA (~100 %, ofte to), + roterende DH/signatur og protokoll (Q5–Q6); (v) **formen har skiftet 3× men sjangrene er stabile** (2017–18: 30 MCQ+6; korona 2020–22: 15 tre-alt-MCQ+6, ikke representativ; 2023–24: 30 MCQ+5) — bygg på sjangrene; (vi) **temafrekvens-tabellene** (skriftlig: A 100 %, B 100 %, C 100 %, D 71 %, E 57 %, F 57 %, G 57 %, H/Signal 21 %↑; MCQ: modulær aritmetikk ~100 %, moduser ~100 %, AES/DES ~100 %, RSA-teori ~100 %, hash/fødselsdag ~90 %, DH ~90 %, signatur ~90 %, TLS ~90 %, PKI ~70 %, primalitet ~70 %, klassisk ~80 %, OTP ~70 %, kvante ~60 %↑); (vii) **de voksende områdene** — post-kvante, Signal, TLS 1.3, PKI; forvent dem fremover.
- **Innholdskontrakt:** E-formene (M/W) og innholdssjangrene A–H (§3) som studentens sjekkliste med typisk vekt. Regnesjangrene **R1–R6** presenteres som «de sikreste poengene» — hver med entydig fasit og fast oppskrift, testet i BÅDE MCQ og skriftlig. **Prognosen for neste ordinære eksamen**: 30 MCQ over hele pensum + 5 skriftlige ≈ Q1 klassisk chiffer/kryptoanalyse + Q2 modus eller Feistel/DRBG + én–to tallteori/RSA (invers/square-and-multiply/CRT/primalitet/split-d) + én DH/signatur + én roterende protokoll (TLS 1.3, Kerberos, Signal eller PKI). Avslutt med **leseplanen**: perfekt-kjernen (Del 1 klassisk, Del 2 modus, Del 3–4 tallteori/RSA, Del 5 DH) skal sitte feilfritt i begge former; nivå 2 (signatur, TLS, Kerberos, hash/MAC) avgjør de mellomstore oppgavene; nivå 3 (Signal, PKI, metadata, post-kvante, passord) fyller settet og vokser.
- **Oppgavesjangre:** Ingen fagoppgaver; 3–4 refleksjonsoppgaver, f.eks.: «Med −0,33 for feil MCQ og 0 for blankt — når lønner det seg å gjette? Regn ut forventet verdi ved å eliminere 0, 1 og 2 alternativer.» og «Rangér de skriftlige sjangrene A–H etter forventet antall poeng på neste sett.»
- **Typiske feil:** Metafeilene — øve på korona-settenes 15-MCQ-form som om det var dagens (det er 30 firealternativs uten begrunnelse); gjette blindt på MCQ (−0,33 gjør rent gjett negativt); nedprioritere MCQ fordi «det bare er avkrysning» (det er halve eksamen); skrive essay på skriftlige protokolloppgaver (fasiten vil ha konkret angrep).
- **Quiz: 18 · Flashcards: 14** (form, 50/50-vektingen, sjangre A–H, regnesjangre R1–R6, frekvenser, voksende tema)

#### Kapittel 0.2: Eksamenshåndverk — MCQ-strategi og skriftlig utledningsdisiplin

- **id:** `ttm4135-0-2` · **number:** 0.2 · **estimatedMinutes:** 40 · **prerequisites:** `ttm4135-0-1` · **kapitteltype:** eksamenskart
- **description:** Det doble håndverket eksamen krever: (1) MCQ-strategi under −0,33-regelen (eliminér før du svarer, kjenn distraktortypene), og (2) den skriftlige kortsvars-/utledningssjangeren (vis mellomregning, navngi teoremet, skriv konkret angrep, høst delpoeng).
- **Eksamensbelegg:** Metakapittel — destillert fra sensorreglene (EKSAMENSANALYSE §4). Skal etablere de to ferdighetene resten av boka trener. **MCQ-strategien**: forventet-verdi-kalkylen (svar når ≥1 alternativ elimineres; rent gjett er marginalt negativt), de faste distraktortypene (forvekslet offentlig/privat nøkkel, forvekslet FS/PCS, feil hash-størrelse, «3DES/CBC er sikker»). **Utledningssjangeren**: 2–6 setninger per deloppgave; «Show your working» kreves i regnedelen; navngi teoremet (Euler/Fermat/Euklid/fødselsdagsparadokset); på protokoll skriv angrepsmeldingene; poeng deles likt ⇒ ta det du kan først.
- **Innholdskontrakt:** `theorem`/`text` **MCQ-forventningsverdi**: 4 alternativer, +1 riktig, −0,33 feil, 0 blankt ⇒ blindt gjett = `¼·1 + ¾·(−0,33) ≈ 0`; eliminér 1 ⇒ `⅓·1 + ⅔·(−0,33) ≈ +0,11` (svar); eliminér 2 ⇒ `½·1 + ½·(−0,33) ≈ +0,33` (svar). `text` **kortsvarsregelen** (lån fra tdt4120): «lange svar teller ikke positivt» — svar med det etterspurte (ett tall / ett uttrykk / ett konkret angrep), rått, uten overflødig utledning UNNTATT den påkrevde mellomregningen. `text` **navngi-teoremet-regelen** med eksempler. `text` **protokollangreps-malen** (§3, fem punkter) introduseres her og gjenbrukes i Del 8–10. **Formel- og algoritmeliste:** forventningsverdi-formelen, de fire distraktorklassene, kortsvarssjekklisten, protokollangreps-malen.
- **Oppgavesjangre:** Metanivå (M + W-håndverk). Mønstereksempel (M-strategi): «Du kan utelukke ett av fire alternativer men er usikker på resten. Bør du svare? Regn forventet verdi.» (Ja, ≈ +0,11.) Mønstereksempel (W-disiplin): «Gitt et langt, svevende svar på en RSA-oppgave — omskriv til det korte som viser regnekjeden og navngir Euler.»
- **Typiske feil:** Gjette blindt (≈ 0 forventet, men risiko); skrive langt der kort kreves (tapt tid på 30 andre spørsmål); hoppe over mellomregningen (rett tallsvar alene gir sjelden full uttelling); glemme å navngi teoremet; svare essay på protokoll i stedet for konkret angrep.
- **Quiz: 16 · Flashcards: 10** (−0,33-kalkylen, distraktortyper, kortsvarsregelen, navngi-teoremet, protokollangreps-malen)

**Del 0 har ingen egne prøver** (metakapitler; kjerne i studieguiden).

---

### Del 1 — Klassiske chiffer og kryptoanalyse *(sjanger A: PERFEKT — skriftlig Q1 ~100 %)*

> Del 1 rommer den nesten garanterte Q1: klassisk chiffer + kryptoanalyse. Den tester
> nøkkeltelling (skriv formelen), Hill-matriseangrep (R5), og chosen/known-plaintext på
> alle chiffertypene, pluss frekvensglatting. Kapittel 1.4 er det store drillkapitlet.

#### Kapittel 1.1: Klassiske chiffer og nøkkeltelling

- **id:** `ttm4135-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Simpel substitusjon, transposisjon, Vigenère, Autokey og engangsblokk (OTP) — mekanikken og hvordan man **teller nøkkelrommet** (skriv formelen), pluss trusselmodellene (passiv/aktiv, ciphertext-only/known/chosen-plaintext).
- **Eksamensbelegg:** Sjanger A, skriftlig Q1 ~100 %, MCQ ~80 %. Nøkkeltelling er en fast deloppgave. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition`-blokker per chiffer med krypteringsregel. `theorem` **nøkkeltelling**: simpel substitusjon over `m`-tegns alfabet = `m!`; simpel transposisjon på blokk av `b` tegn = `b!`; Vigenère med nøkkellengde `L` over `m` tegn = `m^L`; **Autokey har samme nøkkelrom som Vigenère**. `definition` **OTP / perfekt hemmelighet** (*perfect secrecy*): engangsbruk, nøkkel like lang som melding; `C = P \oplus K`; gjenbruk ⇒ `C_1 \oplus C_2 = P_1 \oplus P_2`. `definition` **trusselmodeller**: ciphertext-only / known-plaintext / chosen-plaintext; passiv vs. aktiv angriper. **Formel- og algoritmeliste:** `m!`, `b!`, `m^L`, XOR `\oplus`, nøkkelstrøm, de tre angrepsmodellene, `m`/`L`/`b`-symbolene.
- **Oppgavesjangre:** A (W: skriv formel; M: velg riktig antall). Mønstereksempel (W, nyskrevet): «Hvor mange nøkler har en Vigenère-chiffer med nøkkellengde 4 over et 26-tegns alfabet? Og hvordan endres tallet for Autokey?» (`26^4`; **samme** for Autokey.)
- **Typiske feil:** Blande `m!` (substitusjon) og `m^L` (Vigenère); tro Autokey har større nøkkelrom enn Vigenère; kalle OTP «sikker ved gjenbruk» (den mister perfekt hemmelighet); forveksle passiv (avlytting) og aktiv (endring) trussel.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 1.2: Hill-chifferet og modulær matrisealgebra

- **id:** `ttm4135-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `ttm4135-1-1` · **kapitteltype:** teori
- **description:** Hill-chifferet som `C = KP \bmod 26`, matriseinvertering mod 26 (determinant, adjugat, `\det^{-1}`), invertibilitetskravet, og hvorfor `m^{d^2}` er en **øvre grense** for nøkkeltallet (ikke alle matriser er invertible). Regnesjanger **R5**.
- **Eksamensbelegg:** Sjanger A / regnesjanger R5, skriftlig ~høy. Matriseinvertering mod 26 er en klassisk W-deloppgave. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **Hill-kryptering/dekryptering**: `C = KP \bmod 26`, `P = K^{-1}C \bmod 26`. `theorem` (regneprosedyre) **2×2-matriseinvers mod 26**: `K^{-1} = (\det K)^{-1} \begin{psmallmatrix}d&-b\\-c&a\end{psmallmatrix} \bmod 26`; eksisterer ⇔ `\gcd(\det K, 26)=1`. `theorem` **nøkkeltelling Hill**: `d×d`-matriser over `m`-tegns alfabet ≈ `m^{d^2}` som **øvre grense** — ikke alle er invertible. `warning`/`text` **ikke-kommutativitet**: rekkefølgen i `K^{-1}(C-L)` teller. **Formel- og algoritmeliste:** `K`, `P`, `C` (matriser/vektorer), `\det`, adjugat, `(\det K)^{-1} \bmod 26`, invertibilitetskravet `\gcd(\det K,26)=1`, `m^{d^2}` (øvre grense).
- **Oppgavesjangre:** A / R5 (W). Mønstereksempel (W, nyskrevne tall): «`K = \begin{psmallmatrix}3&2\\5&7\end{psmallmatrix}`. Regn `K^{-1} \bmod 26`.» (`\det = 21-10 = 11`; `11^{-1} \bmod 26 = 19`; `K^{-1} = 19\begin{psmallmatrix}7&-2\\-5&3\end{psmallmatrix} = \begin{psmallmatrix}3&14\\9&5\end{psmallmatrix} \bmod 26` — vis stegene.)
- **Typiske feil:** Telle Hill-nøkler som `m^{d^2}` **uten forbehold** (ikke alle invertible — §typiske feil #1); glemme at matrisemultiplikasjon ikke er kommutativ (#2); regne `\det^{-1}` feil (må være modulær invers, ikke `1/\det`); bruke matrise med `\gcd(\det,26)>1` (ikke invertibel).
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 1.3: Kryptoanalyse — angrepsmodeller og frekvens

- **id:** `ttm4135-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `ttm4135-1-2` · **kapitteltype:** teori
- **description:** Hvordan hver klassisk chiffer knekkes: ciphertext-only via frekvensanalyse, chosen-plaintext via `P=I`/hele alfabetet, og hva transposisjon vs. substitusjon vs. Hill gjør med tegnfordelingen (frekvensglatting).
- **Eksamensbelegg:** Sjanger A, skriftlig Q1 ~100 %. Angrepsdelen er selve kjernen i Q1. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **Hill ciphertext-only**: bruk trigram-/digramfrekvenser til å gjette vanlige ord → løs `K = CP^{-1}` når `P` er invertibel; prøv flere kandidater. `theorem` **chosen-plaintext-angrep**: *Hill:* velg `P=I` ⇒ les nøkkelen direkte som `C` (R5); *substitusjon:* krypter hele alfabetet (`m` tegn); *transposisjon:* ett blokk med `b` forskjellige tegn gir permutasjonen; *Vigenère/Autokey:* kjent-klartekst avslører skiftet posisjon for posisjon (`L` tegn for Vigenère). `theorem` **frekvensglatting**: transposisjon glatter trigram-/tegnfordeling (flytter bokstaver ut av kontekst); simpel substitusjon **bevarer** tegnfordelingen (bare omdøpt); Hill glatter (hvert tegn avhenger av naboene). **Formel- og algoritmeliste:** `K=CP^{-1}`, `P=I`-trikset, frekvenstabell-idé, angrepsmodellene fra 1.1.
- **Oppgavesjangre:** A (W). Mønstereksempel (W): «Du kan velge klartekst til en 2×2 Hill-chiffer. Hvilken klartekst avslører nøkkelen med minst arbeid, og hvordan?» (`P = I` ⇒ `C = K` direkte.)
- **Typiske feil:** Anta at substitusjon glatter frekvensen (den bevarer den); glemme at Hill ciphertext-only krever invertibel `P`-blokk; tro chosen-plaintext på transposisjon trenger mer enn ett blokk; forveksle hvilke chiffer som glatter fordelingen.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 1.4: DRILL — Klassisk kryptoanalyse

- **id:** `ttm4135-1-4` · **number:** 1.4 · **estimatedMinutes:** 80 · **prerequisites:** `ttm4135-1-3` · **kapitteltype:** drill
- **description:** Full drill på sjanger A / regnesjanger R5: nøkkeltelling for alle chiffertyper, Hill-matriseinvertering og -angrep (`P=I` / `K=CP^{-1}`), chosen/known-plaintext på substitusjon/transposisjon/Vigenère, og frekvensglatting.
- **Eksamensbelegg:** Sjanger A, skriftlig Q1 ~100 %. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **nøkkeltelling** — velg riktig formel (`m!`/`b!`/`m^L`), oppgi Hill som øvre grense; 2) **Hill-angrep** — chosen: `P=I`⇒`K=C`; ciphertext-only: gjett ord, `K=CP^{-1}`, verifiser; 3) **chosen-plaintext** på øvrige — krypter hele alfabetet (substitusjon) / ett blokk (transposisjon) / `L` tegn (Vigenère); 4) **frekvens** — klassifiser hvilket chiffer som glatter. Sensor-kommentert case med margnotat om at Hill-nøkkeltall er øvre grense og at rekkefølgen i `K^{-1}(C-L)` teller. 12–16 oppgaver (M+W) som roterer alle variantene.
- **Oppgavesjangre:** A / R5. Mønstereksempel (W, nyskrevne tall): «Gitt `C = \begin{psmallmatrix}3&2\\5&7\end{psmallmatrix}` fra chosen-plaintext `P=I`. Hva er nøkkelen `K`?» (`K = C`.)
- **Typiske feil:** §#1 (Hill uten øvre-grense-forbehold), §#2 (kommutativitet), blande nøkkeltellingsformlene, glemme å verifisere en gjettet ciphertext-only-nøkkel.
- **Quiz: 24 · Flashcards: 8**

**Prøve-kvote Del 1:** 4 prøver (Klassiske chiffer og kryptoanalyse)
1. Prøve 1.A (20 min): Nøkkeltelling for alle chiffertyper + Autokey-fella (A, W/M).
2. Prøve 1.B (25 min): Hill-matriseinvertering mod 26 + kryptering/dekryptering (A/R5, W).
3. Prøve 1.C (25 min): Chosen/known-plaintext-angrep på substitusjon/transposisjon/Vigenère (A, W).
4. Prøve 1.D (25 min): Blandet Q1 — Hill-angrep + frekvensglatting + trusselmodell (A, M/W).

---

### Del 2 — Symmetrisk krypto: blokkchiffer, moduser og DRBG *(sjanger B: PERFEKT — skriftlig Q2 ~100 %)*

> Del 2 rommer den nesten garanterte Q2: blokkchiffermodus/Feistel/DRBG. Den tester
> dekrypteringsligning, feilforplantning, parallellitet, Feistel-brudd og
> tilstandskompromiss. MCQ ~100 % på AES/DES-fakta og modus-egenskaper. Kapittel 2.5 er
> drillkapitlet.

#### Kapittel 2.1: Blokkchiffer-fundamentet — AES, DES og produktchiffer

- **id:** `ttm4135-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Blokkchifferet som permutasjon av blokkrommet, AES (SPN, 128-bit blokk, 128/192/256-bit nøkkel) vs. DES/3DES (Feistel, 64-bit blokk), Kerckhoffs' prinsipp, avalanche, og møt-i-midten-angrepet (MITM) på 2DES.
- **Eksamensbelegg:** MCQ ~100 % (gyldig AES-nøkkelstørrelse, SPN vs Feistel, Kerckhoffs, 3DES ~112-bit sikkerhet). Prioritet: **perfekt** (MCQ).
- **Innholdskontrakt:** `definition` **blokkchiffer**: `E(\cdot,K)` er en permutasjon av blokkrommet for fast `K`. `definition` **AES**: SPN/iterert produktchiffer, blokk 128 bit, nøkkel 128/192/256 bit. `definition` **DES/3DES**: Feistel, blokk 64 bit; 3DES ~112-bit sikkerhet (pga. MITM). `theorem` **MITM på 2DES**: dobbel kryptering gir ~`2^{k+1}`, ikke `2^{2k}`, fordi angriper møtes i midten. `definition` **Kerckhoffs' prinsipp** og **avalanche**. **Formel- og algoritmeliste:** blokk-/nøkkelstørrelser, `2^{k+1}` (MITM), SPN vs Feistel, Kerckhoffs, avalanche.
- **Oppgavesjangre:** B/H (M hovedsakelig). Mønstereksempel (M, nyskrevet): «Hvilken av disse er en gyldig AES-nøkkelstørrelse? (a) 112 (b) 168 (c) 192 (d) 512 bit» (c).
- **Typiske feil:** Tro 2DES gir dobbel sikkerhet (MITM halverer effektivt); blande AES (SPN, 128-bit blokk) og DES (Feistel, 64-bit blokk); kalle 3DES «256-bit sikker»; tro at hemmelig algoritme øker sikkerheten (Kerckhoffs).
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 2.2: Feistel-strukturen og Feistel-brudd

- **id:** `ttm4135-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `ttm4135-2-1` · **kapitteltype:** teori
- **description:** Feistel-rundeligningene `L_i = R_{i-1}`, `R_i = L_{i-1} \oplus f(R_{i-1}, K_i)`, hvorfor dekryptering bruker samme struktur, og hvordan en **svak rundefunksjon** `f` knekker chifferet med ett kjent-klartekst-par.
- **Eksamensbelegg:** Sjanger B, skriftlig Q2-variant. Feistel-brudd er en fast W-oppgave. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` (regneprosedyre) **Feistel-runder**: `L_i = R_{i-1}`, `R_i = L_{i-1} \oplus f(R_{i-1}, K_i)`; `f`-utdata = **halv blokklengde**; dekryptering = kjør runder baklengs. `theorem` **Feistel-brudd**: ved svak `f` (f.eks. `f(R,K)=R\oplus K` eller `f` ignorerer `R`), regn rekursivt bakover og vis at `(L_n,R_n) = (L_0,R_0) \oplus` konstanter ⇒ knekk med ett kjent-klartekst-par. **Formel- og algoritmeliste:** `L_i`, `R_i`, `f(R,K)`, `\oplus`, halv-blokk-kravet, rundenøkkel `K_i`.
- **Oppgavesjangre:** B (W). Mønstereksempel (W, nyskrevet): «En 2-runders Feistel har `f(R,K)=R\oplus K`. Uttrykk chifferteksten som funksjon av klartekst og rundenøkler, og vis hvordan ett kjent par avslører `K_1 \oplus K_2`.»
- **Typiske feil:** Glemme at `f`-utdata må være halv blokk; regne Feistel-runder feil vei; tro Feistel krever invertibel `f` (den gjør ikke); ikke se at svak `f` kollapser til XOR-konstanter.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 2.3: Blokkchiffermoduser — ECB, CBC, CTR, GCM

- **id:** `ttm4135-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `ttm4135-2-1` · **kapitteltype:** teori
- **description:** De fire modusene med krypterings-/dekrypteringsligning, meldingsstørrelse, feilforplantning og parallellitet — og at GCM gir AEAD (konfidensialitet + integritet).
- **Eksamensbelegg:** Sjanger B, skriftlig Q2 ~100 %, MCQ ~100 %. «Hvilken modus sender færrest bit», feilforplantning, GCM = integritet+konfidensialitet. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem`-blokker per modus: **ECB** (`C_t = E(P_t)`, lekker blokk-likhet); **CBC** (`C_t = E(P_t \oplus C_{t-1})`, IV, dekrypt `P_t = D(C_t)\oplus C_{t-1}`); **CTR** (`C_t = P_t \oplus E(N\|t)`, parallell, maskemodus); **GCM** (AEAD = konfidensialitet + integritet). `theorem` **meldingsstørrelse**: ECB/CTR minimal, CBC + IV størst. `theorem` **feilforplantning**: maske-/tellermoduser (CTR) — kun **samme bit i samme blokk**; kjedede moduser (CBC) — feilen sprer seg til **neste** blokk. `theorem` **parallellitet**: kryptering kan **ikke** parallelliseres når `C_t` avhenger av `C_{t-1}` (CBC); dekryptering kan ofte (alle `C_{t-1}` mottatt). **Formel- og algoritmeliste:** hver modus-ligning, IV, nonce `N`, teller `t`, `\oplus`, feilforplantningsregelen, parallellitetsregelen, AEAD.
- **Oppgavesjangre:** B (W+M). Mønstereksempel (M): «I hvilken modus endrer en enkelt bitfeil i chifferteksten kun samme bit i samme klartekstblokk? (a) CBC (b) CTR (c) ECB (d) ingen» (b, CTR). Mønstereksempel (W): «Skriv dekrypteringsligningen for CBC og forklar hvorfor dekryptering kan parallelliseres.»
- **Typiske feil:** Anta parallell **kryptering** i kjedede moduser (§#3 — umulig, men parallell dekryptering ofte mulig); feil feilforplantning (§#4 — maskemodus endrer bare én bit, kjedet sprer til neste); tro ECB er trygg (lekker blokk-likhet); tro CTR gir integritet (kun GCM/AEAD).
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 2.4: Strømchiffer, OTP og DRBG-tilstandskompromiss

- **id:** `ttm4135-2-4` · **number:** 2.4 · **estimatedMinutes:** 50 · **prerequisites:** `ttm4135-2-3` · **kapitteltype:** teori
- **description:** Synkrone strømchiffer, engangsblokk (OTP) og perfekt hemmelighet, deterministiske tilfeldighetsgeneratorer (DRBG) og hva som skjer ved **tilstandskompromiss** — med og uten envegs-hash — pluss å forfalske en MAC bygd av en modus.
- **Eksamensbelegg:** Sjanger B/H, skriftlig (DRBG-tilstandskompromiss er en fast W-variant), MCQ ~70 % (OTP). Prioritet: **perfekt** (DRBG-delen), **kunne** (OTP/MAC).
- **Innholdskontrakt:** `definition` **synkront strømchiffer / OTP**: `C = P \oplus K`; kjent-klartekst ⇒ nøkkelstrømbit `K = P \oplus C`; gjenbruk ⇒ `C_1 \oplus C_2 = P_1 \oplus P_2`. `theorem` **DRBG-tilstandskompromiss**: telleroppdatering (`S_{t+1} = S_t + 1`) er **invertibel** ⇒ kompromiss på tid `t` gir angriper **alle** blokker (fram OG tilbake); en **envegs-hash** `K' = h(K)` hver 100. blokk blokkerer bakoverretningen (kun fra siste nøkkelbytte og framover). `theorem` **MAC fra modus**: en «siste-blokk»-MAC eller `D(M,K)` er lett å forfalske hvis taggen bare avhenger av deler av meldingen (bytt to blokker med samme XOR). **Formel- og algoritmeliste:** `\oplus`, nøkkelstrøm, `S_t`, `S_{t+1}=S_t+1`, `h(K)` (envegs), fram/tilbake-egenskapen, MAC-tagg.
- **Oppgavesjangre:** B/H (W). Mønstereksempel (W, nyskrevet): «En DRBG oppdaterer tilstanden med `S_{t+1}=S_t+1` og hasher `K'=h(K)` hver 100. blokk. En angriper kompromitterer tilstanden ved blokk 250. Hvilke blokker kan hun regne ut, og hvorfor ikke de før blokk 200?»
- **Typiske feil:** Tro telleroppdatering skjuler tidligere blokker (invertibel); glemme at envegs-hashen bare beskytter **bakover**; tro OTP-gjenbruk er trygt; forfalske MAC uten å utnytte at taggen bare dekker deler.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 2.5: DRILL — Modus, Feistel og DRBG (Q2-oppgaven)

- **id:** `ttm4135-2-5` · **number:** 2.5 · **estimatedMinutes:** 85 · **prerequisites:** `ttm4135-2-4` · **kapitteltype:** drill
- **description:** Full drill på sjanger B: inverter krypteringsligningen (dekrypteringsligning), tell feilforplantning, avgjør parallellitet, knekk en svak Feistel, og analyser DRBG-tilstandskompromiss — nøyaktig slik Q2 stiller det.
- **Eksamensbelegg:** Sjanger B, skriftlig Q2 ~100 %. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **dekrypteringsligning** — er `E` en ren maske (`C_t = O_t \oplus …`)? da ingen `D` nødvendig; brukt direkte (`C_t = E(…)`)? da `D`; 2) **feilforplantning** — maskemodus: én bit samme blokk; kjedet: neste blokk; 3) **parallellitet** — nei ved `C_t`-avhengighet (kryptering), ofte ja (dekryptering); 4) **Feistel-brudd** — regn bakover, samle XOR-konstanter, bruk ett kjent par; 5) **DRBG** — teller invertibel (fram+tilbake), hash blokkerer bakover. Sensor-kommentert case med margnotat per steg. 12–16 oppgaver (M+W).
- **Oppgavesjangre:** B. Mønstereksempel (W, nyskrevet modus): «En modus krypterer `C_t = P_t \oplus E(C_{t-1})`. Skriv dekrypteringsligningen, angi feilforplantningen ved én bitfeil i `C_5`, og si om dekryptering kan parallelliseres.»
- **Typiske feil:** §#3 (parallell kryptering i kjedet modus), §#4 (feil feilforplantning), unødvendig `D` i maskemodus, glemme halv-blokk-kravet i Feistel, tro DRBG-teller skjuler fortid.
- **Quiz: 24 · Flashcards: 8**

**Prøve-kvote Del 2:** 4 prøver (Symmetrisk krypto)
1. Prøve 2.A (25 min): AES/DES/3DES-fakta + MITM + Kerckhoffs (B/H, M).
2. Prøve 2.B (25 min): Modus-ligninger + meldingsstørrelse + GCM/AEAD (B, M/W).
3. Prøve 2.C (25 min): Feilforplantning + parallellitet + Feistel-brudd (B, W).
4. Prøve 2.D (25 min): DRBG-tilstandskompromiss + MAC-forfalskning + OTP (B/H, W).

---

### Del 3 — Tallteori og modulær aritmetikk (fundamentet for RSA) *(sjanger C: PERFEKT — MCQ ~100 %)*

> Del 3 er den tallteoretiske grunnmuren all offentlig-nøkkel-krypto hviler på: modulær
> invers (R1), Euler/Fermat og φ(n), og kinesisk restteorem (CRT). MCQ ~100 %; leverer
> også regnesjangrene som RSA (Del 4) og DH (Del 5) gjenbruker. Kapittel 3.4 er drillkapitlet.

#### Kapittel 3.1: Modulær aritmetikk og Euklids algoritme

- **id:** `ttm4135-3-1` · **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Regning modulo `n`, største felles divisor (`\gcd`) via Euklids algoritme, og modulær invers via **utvidet** Euklid — inkludert snarveien `2^{-1} = (n+1)/2` for odde `n`. Regnesjanger **R1**.
- **Eksamensbelegg:** Sjanger C / R1, MCQ ~100 % (`2^{-1} \bmod n`), skriftlig fundament. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **kongruens** `a \equiv b \pmod n`, `\gcd`, koprimitet. `theorem` (regneprosedyre) **utvidet Euklid → invers**: kjør Euklid til rest 1, baklengs-substituér for å finne `x` med `ax \equiv 1 \pmod n`; **invers eksisterer ⇔ `\gcd(a,n)=1`**. `theorem` **snarvei**: `2^{-1} \bmod n = (n+1)/2` for odde `n`. **Navngi Euklid** som begrunnelse. **Formel- og algoritmeliste:** `\bmod`, `\gcd`, `a^{-1}`, utvidet-Euklid-kjeden, `(n+1)/2`-snarveien, koprimitetskravet.
- **Oppgavesjangre:** C / R1 (W+M). Mønstereksempel (W, nyskrevne tall): «Finn `5^{-1} \bmod 17` med utvidet Euklid.» (`17 = 3\cdot5 + 2`, `5 = 2\cdot2 + 1` ⇒ `1 = 5 - 2\cdot2 = 5 - 2(17-3\cdot5) = 7\cdot5 - 2\cdot17` ⇒ `5^{-1} = 7`.)
- **Typiske feil:** Regne `1/a` i stedet for modulær invers; glemme at invers krever `\gcd(a,n)=1`; regnefeil i baklengs-substitusjonen; bruke `(n+1)/2`-snarveien på partall `n`.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 3.2: Euler, Fermat og φ(n)

- **id:** `ttm4135-3-2` · **number:** 3.2 · **estimatedMinutes:** 45 · **prerequisites:** `ttm4135-3-1` · **kapitteltype:** teori
- **description:** Euler-φ-funksjonen (`\varphi(pq)=(p-1)(q-1)`), Eulers teorem og Fermats lille teorem — begrunnelsen for at RSA virker og for rask eksponentiering.
- **Eksamensbelegg:** Sjanger C, MCQ ~100 % (`\varphi(105)` osv.), skriftlig fundament («navngi teoremet»). Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **Euler-φ**: `\varphi(pq)=(p-1)(q-1)`; `\varphi(n)` er alltid **partall** for `n>2`. `theorem` **Eulers teorem**: `a^{\varphi(n)} \equiv 1 \pmod n` for `\gcd(a,n)=1`. `theorem` **Fermats lille teorem**: `a^{p-1} \equiv 1 \pmod p` for prim `p`. Bruk til å redusere eksponenter mod `\varphi(n)`. **Navngi Euler/Fermat** eksplisitt. **Formel- og algoritmeliste:** `\varphi(n)`, `\varphi(pq)=(p-1)(q-1)`, Eulers og Fermats kongruens, eksponentreduksjon `a^e \equiv a^{e \bmod \varphi(n)}`.
- **Oppgavesjangre:** C (M+W). Mønstereksempel (M, nyskrevet): «`\varphi(77) = ?` (a) 76 (b) 60 (c) 70 (d) 66» (b, `6\cdot10`). Mønstereksempel (W): «Bruk Fermats teorem til å regne `4^{100} \bmod 13`.»
- **Typiske feil:** Regne `\varphi(pq)` som `pq-1` i stedet for `(p-1)(q-1)`; bruke Euler uten `\gcd(a,n)=1`; forveksle Euler (generell `n`) og Fermat (prim `p`); ikke navngi teoremet i W-svar.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 3.3: Kongruenser og kinesisk restteorem (CRT)

- **id:** `ttm4135-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `ttm4135-3-2` · **kapitteltype:** teori
- **description:** Løse systemer av kongruenser med kinesisk restteorem (CRT): når det er løsbart, konstruksjonsformelen, og hvorfor CRT gir RSA ~4× fart (Del 4).
- **Eksamensbelegg:** Sjanger C, MCQ ~100 % (hvilke kongruenser CRT løser), skriftlig (CRT-kombinasjon i RSA-CRT, R2). Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **kinesisk restteorem**: løsbart ⇔ modulusene er **parvis koprime**; `x = \sum a_i N_i (N_i^{-1} \bmod n_i) \bmod N` der `N = \prod n_i`, `N_i = N/n_i`. `theorem` (regneprosedyre) **CRT-kombinasjon**: gitt `x \equiv a_1 \pmod{n_1}`, `x \equiv a_2 \pmod{n_2}` → konstruer `x` steg for steg. **Navngi kinesisk restteorem**. Pek fram til RSA-CRT (4.2, R2). **Formel- og algoritmeliste:** `n_i` (parvis koprime), `N`, `N_i`, `N_i^{-1} \bmod n_i`, konstruksjonssummen, løsbarhetskravet.
- **Oppgavesjangre:** C / R2-forberedelse (W+M). Mønstereksempel (W, nyskrevne tall): «Løs `x \equiv 2 \pmod 5`, `x \equiv 3 \pmod 7`.» (`x = 2\cdot7\cdot(7^{-1}\bmod5) + 3\cdot5\cdot(5^{-1}\bmod7) \bmod 35 = 17`.)
- **Typiske feil:** Bruke CRT når modulusene **ikke** er koprime; regne `N_i^{-1}` i feil modul; glemme å redusere sluttsummen mod `N`; blande `a_i` og `N_i` i formelen.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 3.4: DRILL — Modulær invers, gcd og CRT

- **id:** `ttm4135-3-4` · **number:** 3.4 · **estimatedMinutes:** 80 · **prerequisites:** `ttm4135-3-3` · **kapitteltype:** drill
- **description:** Full drill på regnesjangrene R1 (modulær invers via utvidet Euklid) og R2-forberedelse (CRT-kombinasjon), pluss φ(n) og eksponentreduksjon med Euler/Fermat.
- **Eksamensbelegg:** Sjanger C / R1+R2, MCQ ~100 % + skriftlig fundament. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **invers** — utvidet Euklid, baklengs-substituér, sjekk `\gcd=1`; snarvei `(n+1)/2` for `2^{-1}`; 2) **φ(n)** — faktoriser, `\prod(p_i-1)p_i^{k-1}`; 3) **eksponentreduksjon** — Euler/Fermat, reduser eksponent mod `\varphi(n)`; 4) **CRT** — sjekk koprimitet, konstruer `x`. Sensor-kommentert case med margnotat om at man **navngir teoremet** og viser Euklid-kjeden. 12–16 oppgaver (M+W).
- **Oppgavesjangre:** C / R1, R2. Mønstereksempel (W): «Regn `7^{-1} \bmod 26` og `\varphi(45)`, og bruk Euler til `3^{200} \bmod 45` — vis stegene og navngi teoremet.»
- **Typiske feil:** `\gcd \ne 1` (ingen invers); regnefeil i Euklid-kjeden; feil `\varphi` for primpotens; ikke navngi Euler/Fermat; CRT på ikke-koprime moduli.
- **Quiz: 24 · Flashcards: 8**

**Prøve-kvote Del 3:** 4 prøver (Tallteori og modulær aritmetikk)
1. Prøve 3.A (25 min): Modulær invers via utvidet Euklid + `2^{-1}`-snarvei (C/R1, W).
2. Prøve 3.B (20 min): φ(n) + Euler/Fermat eksponentreduksjon, navngi teoremet (C, W/M).
3. Prøve 3.C (25 min): CRT — løsbarhet + konstruksjon (C/R2, W).
4. Prøve 3.D (25 min): Blandet fundament — invers + φ + CRT (C, M/W).

---

### Del 4 — RSA: nøkler, regning og angrep *(sjanger C: PERFEKT — skriftlig ~100 %, ofte to oppgaver)*

> Del 4 er fagets kvantitative kjerne: RSA forekommer skriftlig hvert år, ofte som to
> oppgaver. Her ligger regnesjangrene R2 (RSA-CRT), R3 (square-and-multiply-telling) og R4
> (Miller–Rabin), pluss √1→faktorisering og split-d. Kapittel 4.5 er det store drillkapitlet.

#### Kapittel 4.1: RSA-algoritmen — nøkkelgenerering og hvorfor det virker

- **id:** `ttm4135-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `ttm4135-3-2` · **kapitteltype:** teori
- **description:** RSA-nøkkelgenerering (`n=pq`, `ed \equiv 1 \pmod{\varphi(n)}`), kryptering `c=m^e \bmod n`, dekryptering `m=c^d \bmod n`, hvorfor det virker (Euler), valget `e=2^{16}+1`, og OAEP-randomisering.
- **Eksamensbelegg:** Sjanger C, skriftlig ~100 %, MCQ ~100 % (`M^{ed} \bmod n = M`, hvorfor ikke liten `d`). Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` (regneprosedyre) **RSA**: velg primer `p,q`; `n=pq`, `\varphi(n)=(p-1)(q-1)`; velg `e` koprim med `\varphi(n)`; `d = e^{-1} \bmod \varphi(n)`; `c=m^e \bmod n`, `m=c^d \bmod n`. `theorem` **hvorfor det virker**: `m^{ed} = m^{1+k\varphi(n)} \equiv m \pmod n` **ved Euler**. `text` **e=2^{16}+1** (rask verifisering/kryptering), **OAEP** (randomiserer, hindrer deterministisk lekkasje), sikkerhet ⇔ faktorisering (subeksponentiell). **Navngi Euler**. **Formel- og algoritmeliste:** `n=pq`, `\varphi(n)`, `e`, `d=e^{-1}\bmod\varphi(n)`, `c=m^e`, `m=c^d`, `e=2^{16}+1`, OAEP.
- **Oppgavesjangre:** C (W+M). Mønstereksempel (W, nyskrevne tall): «`p=11`, `q=13`, `e=7`. Finn `n`, `\varphi(n)` og `d`.» (`n=143`, `\varphi=120`, `d = 7^{-1}\bmod120 = 103`.)
- **Typiske feil:** Regne `d = e^{-1} \bmod n` i stedet for `\bmod \varphi(n)`; velge `e` ikke koprim med `\varphi(n)`; tro liten `d` er trygt (angreps­bart); ikke navngi Euler i «hvorfor virker»-svaret.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.2: Rask eksponentiering — square-and-multiply og RSA-CRT

- **id:** `ttm4135-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `ttm4135-4-1` · **kapitteltype:** teori
- **description:** Square-and-multiply for `m^e \bmod n` (og hvordan man **teller** kvadreringer og multiplikasjoner, R3), og RSA-CRT for ~4× raskere dekryptering (R2) — inkludert hvorfor CRT krever faktorene.
- **Eksamensbelegg:** Sjanger C / R2+R3, skriftlig ~100 %. Square-and-multiply-telling og RSA-CRT er faste W-oppgaver. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` (regneprosedyre) **square-and-multiply**: fra binærrepr. av `e`, kvadrer per bit, multipliser der biten er 1; **kvadreringer ≈ `⌈\log_2 e⌉`**, **multiplikasjoner = (antall 1-bit − 1)**. `theorem` (regneprosedyre) **RSA-CRT**: `M_p = C^{d \bmod (p-1)} \bmod p`, `M_q = C^{d \bmod (q-1)} \bmod q`, kombiner med CRT; **~4× fart** (halv modulus ⇒ ~25 % arbeid per eksponentiering); krever **faktorene** `p,q`. **Formel- og algoritmeliste:** binærrepr. av `e`, kvadrering/multiplikasjon-tellingen, `M_p`/`M_q`, CRT-kombinasjonen, ~4×-argumentet.
- **Oppgavesjangre:** C / R2, R3 (W). Mønstereksempel (W, nyskrevet): «Hvor mange kvadreringer og multiplikasjoner bruker square-and-multiply for eksponent `e=23`?» (`23 = 10111_2`; 4 kvadreringer, 3 multiplikasjoner.) Mønstereksempel (W): «Bruk RSA-CRT med `p=11, q=13` til å dekryptere — vis `M_p`, `M_q` og kombinasjonen.»
- **Typiske feil:** §#5 (glemme å telle multiplikasjonene / blande kvadreringer og multiplikasjoner); §#6 (tro CRT kan brukes uten faktorene); regne `d \bmod (p-1)` feil; feil CRT-kombinasjon.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 4.3: Primalitetstesting — Fermat vs. Miller–Rabin

- **id:** `ttm4135-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `ttm4135-3-2` · **kapitteltype:** teori
- **description:** Fermat-testen og dens svakhet (Carmichael-tall), Miller–Rabin-testen (sekvensen av kvadratrøtter, `−1` før 1), og hvordan en ikke-triviell √1 avslører at et tall er sammensatt. Regnesjanger **R4**.
- **Eksamensbelegg:** Sjanger C / R4, MCQ ~70 % (M–R slår Fermat, √1 avslører sammensatt), skriftlig. Prioritet: **perfekt** (garantert billige poeng).
- **Innholdskontrakt:** `theorem` **Fermat-test**: `a^{n-1} \equiv 1 \pmod n`? svakhet: **Carmichael-tall** (f.eks. 561, 1105) passerer. `theorem` (regneprosedyre) **Miller–Rabin**: skriv `n-1 = 2^s m`; regn `a^m, a^{2m}, a^{4m}, …`; **mangler `−1` før man når 1 ⇒ sammensatt**. `theorem` **ikke-triviell √1**: en `x \ne \pm1` med `x^2 \equiv 1 \pmod n` gir `\gcd(x\pm1, n)` = faktor. **Navngi Fermat**. **Formel- og algoritmeliste:** `a^{n-1}`, `n-1=2^s m`, kvadratrot-sekvensen, `−1`-kriteriet, `\gcd(x\pm1,n)`.
- **Oppgavesjangre:** C / R4 (W+M). Mønstereksempel (W, nyskrevet): «Kjør Miller–Rabin på `n=65` med base `a=8`. Vis sekvensen og konkludér.» (`64 = 2^6 \cdot 1`; `8^1=8`, `8^2=64\equiv-1` ⇒ M–R aksepterer for denne basen — vis at en annen base avslører sammensatt.)
- **Typiske feil:** §#7 (stole på Fermat — Carmichael-tall lurer den); glemme å faktorisere `n-1 = 2^s m` riktig; se etter 1 uten å sjekke `−1` først; feil konklusjon når sekvensen når 1 uten `−1`.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 4.4: RSA-angrep og hemmelighetsdeling — √1, split-d og felles faktor

- **id:** `ttm4135-4-4` · **number:** 4.4 · **estimatedMinutes:** 50 · **prerequisites:** `ttm4135-4-2` · **kapitteltype:** teori
- **description:** Hvordan RSA brytes gitt ekstra informasjon: en ikke-triviell √1 → faktorisering → privatnøkkel; kjennskap til `(e,d)` → faktoriser `n`; felles primfaktor i to moduli via `\gcd`; og split-d-hemmelighetsdeling (`d=d_1+d_2 \bmod \varphi(n)`).
- **Eksamensbelegg:** Sjanger C, skriftlig (split-d og √1→faktorisering er faste W-varianter). Prioritet: **perfekt** (kunne)/**kunne**.
- **Innholdskontrakt:** `theorem` **√1 → faktorisering**: ikke-triviell `x` med `x^2\equiv1` gir `\gcd(x\pm1,n)>1` = faktor ⇒ `\varphi(n)` ⇒ `d`. `theorem` **felles primfaktor**: to moduli `n_1,n_2` med felles `p` avsløres med `\gcd(n_1,n_2)`. `theorem` (regneprosedyre) **split-d**: `d = d_1 + d_2 \bmod \varphi(n)`; `C^{d_1}\cdot C^{d_2} = C^{d_1+d_2} = C^d = M` **ved Euler**; én del alene lekker (nesten) ingenting (som engangsblokk); **CRT kan ikke brukes** uten faktorene (ødelegger hemmelighetsdelingen). **Formel- og algoritmeliste:** `x^2\equiv1`, `\gcd(x\pm1,n)`, `\gcd(n_1,n_2)`, `d=d_1+d_2`, `C^{d_1}C^{d_2}=C^d`.
- **Oppgavesjangre:** C (W). Mønstereksempel (W, nyskrevne tall): «Med `n=143` finner du `x=12` slik at `12^2 \equiv 1 \pmod{143}` og `x\ne\pm1`. Faktoriser `n`.» (`\gcd(11,143)=11`, `\gcd(13,143)=13`.)
- **Typiske feil:** §#6 (tro CRT kan brukes i split-d — krever faktorene); glemme at √1 må være **ikke-triviell** (`\ne\pm1`); tro én split-d-del lekker `d`; ikke navngi Euler i split-d-verifikasjonen.
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 4.5: DRILL — RSA-regning

- **id:** `ttm4135-4-5` · **number:** 4.5 · **estimatedMinutes:** 85 · **prerequisites:** `ttm4135-4-4` · **kapitteltype:** drill
- **description:** Full drill på RSA-regnesjangrene: nøkkelgenerering (`d=e^{-1}\bmod\varphi(n)`), square-and-multiply-telling (R3), RSA-CRT (R2), Miller–Rabin-sekvens (R4), og √1/split-d-angrep — den kvantitative kjernen som ofte gir to skriftlige oppgaver.
- **Eksamensbelegg:** Sjanger C / R2+R3+R4, skriftlig ~100 %, ofte to oppgaver. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **nøkler** — `\varphi(n)=(p-1)(q-1)`, `d=e^{-1}\bmod\varphi(n)` (utvidet Euklid); 2) **kryptering/dekryptering** — square-and-multiply, tell kvadreringer/multiplikasjoner; 3) **CRT-fart** — `M_p, M_q`, kombiner, ~4×-argumentet; 4) **primalitet** — Miller–Rabin-sekvens, `−1`-kriteriet; 5) **angrep** — √1→`\gcd`→faktor→`d`; split-d ved Euler. Sensor-kommentert case med margnotat om at man **viser regnekjeden** og **navngir Euler/Fermat**. 12–16 oppgaver (W hovedsakelig + noen M).
- **Oppgavesjangre:** C / R2, R3, R4. Mønstereksempel (W, nyskrevne tall): «`p=17, q=19, e=5`. (a) Finn `d`. (b) Tell operasjonene i `m^5`. (c) Bruk RSA-CRT til å dekryptere `C=…`.»
- **Typiske feil:** Hele §#5–#7 (square-and-multiply-telling, CRT uten faktorer, Fermat-tillit); `d \bmod n` i stedet for `\bmod\varphi(n)`; ikke vise mellomregning; ikke navngi teoremet.
- **Quiz: 26 · Flashcards: 8**

**Prøve-kvote Del 4:** 4 prøver (RSA)
1. Prøve 4.A (25 min): Nøkkelgenerering + kryptering/dekryptering + «hvorfor virker» (C, W).
2. Prøve 4.B (25 min): Square-and-multiply-telling + RSA-CRT (C/R2/R3, W).
3. Prøve 4.C (25 min): Miller–Rabin vs. Fermat + √1→faktorisering (C/R4, W).
4. Prøve 4.D (25 min): Split-d + felles faktor + blandet RSA-regning (C, W).

---

### Del 5 — Diffie–Hellman og diskret logaritme *(sjanger D: PERFEKT — skriftlig ~71 %, MCQ ~90 %)*

> Del 5 dekker nøkkelutveksling uten delt hemmelighet på forhånd: verifiser generator
> (R6), regn delt hemmelighet (R6), autentisert DH og forward secrecy, pluss ElGamal.
> Kapittel 5.3 er drillkapitlet.

#### Kapittel 5.1: Diskret logaritme, generatorer og orden

- **id:** `ttm4135-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `ttm4135-3-2` · **kapitteltype:** teori
- **description:** Multiplikativ gruppe `Z_p^*`, generator/primitiv rot, orden, og diskret-logaritme-problemet (DLP) — inkludert den raske generatortesten `g^{(p-1)/q} \ne 1`. Regnesjanger **R6**.
- **Eksamensbelegg:** Sjanger D / R6, MCQ ~90 % (er 2/3 generator, DLP-definisjon), skriftlig. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **`Z_p^*` og generator**: `g` genererer hele gruppen; orden av `g` = minste `k` med `g^k=1`. `theorem` (regneprosedyre) **generatortest**: for prim `p`, `g` er generator ⇔ `g^{(p-1)/q} \ne 1` for **hver** primfaktor `q` av `p-1`. `definition` **DLP**: gitt `y=g^x \bmod p`, finn `x`; klassisk subeksponentielt (indekskalkyl), ECDLP kun eksponentielt. **Formel- og algoritmeliste:** `Z_p^*`, generator, orden, `g^{(p-1)/q}`, primfaktorer av `p-1`, DLP `y=g^x`.
- **Oppgavesjangre:** D / R6 (W+M). Mønstereksempel (W, nyskrevne tall): «`p=23`, `p-1=22=2\cdot11`. Er `g=5` en generator? Sjekk `5^{11}` og `5^2 \bmod 23`.» (`5^{11}\equiv22\equiv-1`, `5^2=2\ne1` ⇒ ja, generator.)
- **Typiske feil:** Sjekke alle eksponenter i stedet for bare `(p-1)/q` for primfaktorene `q`; glemme en primfaktor av `p-1`; forveksle generator (orden `p-1`) og element med mindre orden; tro DLP og faktorisering er samme problem.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 5.2: Diffie–Hellman, ECDH og ElGamal

- **id:** `ttm4135-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `ttm4135-5-1` · **kapitteltype:** teori
- **description:** DH-nøkkelutveksling (`g^{ab}`), ECDH (`aB=bA`), autentisert DH med langtidsnøkler og **forward secrecy**, og ElGamal-kryptering med krav om ny `k` per melding.
- **Eksamensbelegg:** Sjanger D / R6, skriftlig ~71 %, MCQ ~90 %. Delt hemmelighet + forward secrecy er faste W-oppgaver. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` (regneprosedyre) **DH**: `A=g^a`, `B=g^b`; delt = `g^{ab} = A^b = B^a`. `theorem` **ECDH**: `A=aG`, `B=bG`, delt = `aB=bA`. `theorem` **autentisert DH + forward secrecy**: efemer DH ⇒ FS; ved langtidsnøkler `x,y`: begge regner `g^{ax+by}`, men en angriper med kompromitterte `x,y` regner `A^x B^y = g^{ax+by}` fra avlyttede `A,B` — **manglende forward secrecy**. `text` **ElGamal**: ny `k` per melding (ellers avsløres `y^k` ved kjent-klartekst); dekrypt `m = C_1 (C_2^z)^{-1}`. **Definér forward secrecy** presist. **Formel- og algoritmeliste:** `g^a`, `g^b`, `g^{ab}`, `aB=bA`, `g^{ax+by}`, forward secrecy, ElGamal `(C_1,C_2)`.
- **Oppgavesjangre:** D / R6 (W). Mønstereksempel (W, nyskrevne tall): «`p=23, g=5`, Alice `a=6`, Bob `b=15`. Regn `A`, `B` og delt hemmelighet.» (`A=5^6\bmod23=8`, `B=5^{15}\bmod23=19`, delt `=8^{15}=19^6\bmod23=2`.)
- **Typiske feil:** Regne `g^{a+b}` i stedet for `g^{ab}`; blande forward secrecy (efemer) og statisk DH (ingen FS); glemme ny `k` i ElGamal; §#12 (forveksle offentlig/privat i autentisert variant).
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 5.3: DRILL — DH-generator, delt hemmelighet og forward secrecy

- **id:** `ttm4135-5-3` · **number:** 5.3 · **estimatedMinutes:** 80 · **prerequisites:** `ttm4135-5-2` · **kapitteltype:** drill
- **description:** Full drill på regnesjanger R6: verifiser generator, regn delt DH-hemmelighet (også ECDH), og analyser forward secrecy i autentisert DH — skriv hvordan en angriper med langtidsnøkler bryter den.
- **Eksamensbelegg:** Sjanger D / R6, skriftlig ~71 %, MCQ ~90 %. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **generator** — `g^{(p-1)/q}\ne1` for hver primfaktor `q`; 2) **delt hemmelighet** — bygg tabell over `g^i` for småtall, `g^{ab}`; 3) **ECDH** — `aB=bA`; 4) **forward secrecy** — er nøklene efemere (FS) eller langtids (ingen FS)? skriv angriperens `A^x B^y`-regning. Sensor-kommentert case med margnotat om FS vs. PCS-skillet (§#10). 12–16 oppgaver (W+M).
- **Oppgavesjangre:** D / R6. Mønstereksempel (W, nyskrevne tall): «`p=29, g=2`. Verifiser at `g` er generator, og regn delt hemmelighet for `a=5, b=12`.»
- **Typiske feil:** Sjekke feil eksponenter i generatortesten; regnefeil i `g^{ab}`; §#10 (blande FS og post-compromise security); glemme at statisk DH mangler FS.
- **Quiz: 22 · Flashcards: 8**

**Prøve-kvote Del 5:** 4 prøver (Diffie–Hellman og diskret logaritme)
1. Prøve 5.A (20 min): Generatortest + orden + DLP-definisjon (D/R6, W/M).
2. Prøve 5.B (25 min): DH delt hemmelighet + ECDH (D/R6, W).
3. Prøve 5.C (25 min): Autentisert DH + forward secrecy-brudd (D, W).
4. Prøve 5.D (20 min): ElGamal + blandet DH + FS vs. PCS (D, W/M).

---

### Del 6 — Hashfunksjoner, MAC og fødselsdagsparadokset *(sjanger H: KUNNE — MCQ ~90 %)*

> Del 6 er hovedsakelig MCQ-tema (~90 %), men fletter inn i modus-/signaturoppgaver
> skriftlig. Kjernen: kollisjonsresistens og fødselsdagsparadokset (hash-størrelse), og
> MAC vs. signatur.

#### Kapittel 6.1: Hashfunksjoner og fødselsdagsparadokset

- **id:** `ttm4135-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Kryptografiske hashfunksjoners egenskaper (preimage-, andre-preimage-, kollisjonsresistens) og fødselsdagsparadokset: `n`-bit utdata gir `~2^{n/2}` kollisjonssikkerhet, så `k`-bit symmetrisk sikkerhet krever `2k`-bit hash.
- **Eksamensbelegg:** Sjanger H, MCQ ~90 % («128-bit symmetrisk ⇒ 256-bit hash»). Prioritet: **kunne** (men billige, sikre MCQ-poeng).
- **Innholdskontrakt:** `definition` **hash-egenskaper**: preimage, andre-preimage, kollisjonsresistens. `theorem` **fødselsdagsparadokset**: kollisjoner finnes etter `~2^{n/2}` for `n`-bit utdata ⇒ for `k`-bit symmetrisk sikkerhet trengs **`2k`-bit** hashutdata (128-bit AES ⇒ 256-bit hash). **Navngi fødselsdagsparadokset**. **Formel- og algoritmeliste:** hash `h(\cdot)`, `2^{n/2}`, `2k`-bit-regelen, de tre resistensegenskapene.
- **Oppgavesjangre:** H (M+W). Mønstereksempel (M): «For 112-bit symmetrisk sikkerhetsnivå, hvilken minste hash-utdatastørrelse trengs mot kollisjoner? (a) 112 (b) 128 (c) 224 (d) 256 bit» (c, `2\cdot112`).
- **Typiske feil:** §#8 (feil hash-størrelse mot fødselsdagsparadokset — bruke `n` i stedet for `2k`); forveksle preimage- og kollisjonsresistens; tro hashen alene gir autentisitet (ingen nøkkel).
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 6.2: MAC, HMAC og MAC vs. signatur

- **id:** `ttm4135-6-2` · **number:** 6.2 · **estimatedMinutes:** 45 · **prerequisites:** `ttm4135-6-1` · **kapitteltype:** teori
- **description:** Meldingsautentiseringskoder (MAC) — hvorfor de krever en delt nøkkel, HMAC for record-integritet i TLS, og hvorfor en MAC gir integritet men **ikke** ikke-benekting (i motsetning til en signatur).
- **Eksamensbelegg:** Sjanger H, MCQ ~høy («MAC krever nøkkel»). Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **MAC**: `T = \text{MAC}(M,K)`; krever **delt** nøkkel; hash gjør ikke. `definition` **HMAC**: hash-basert MAC, gir record-integritet i TLS. `theorem` **MAC ≠ signatur**: MAC gir integritet + autentisitet, men **ikke ikke-benekting** (delt nøkkel ⇒ begge parter kan lage taggen); signatur gir ikke-benekting (privat nøkkel). **Formel- og algoritmeliste:** `T=\text{MAC}(M,K)`, HMAC, delt vs. privat nøkkel, ikke-benekting.
- **Oppgavesjangre:** H (M+W). Mønstereksempel (M): «Hvorfor gir en MAC ikke ikke-benekting? (a) den er for kort (b) begge parter deler nøkkelen (c) den bruker en hash (d) den er offentlig» (b).
- **Typiske feil:** Tro MAC gir ikke-benekting (delt nøkkel); forveksle MAC (nøkkel) og hash (ingen nøkkel); §#12 (blande MAC og signatur / nøkkeltyper).
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 6:** 4 prøver (Hash, MAC og fødselsdagsparadokset)
1. Prøve 6.A (20 min): Hash-egenskaper + fødselsdagsparadokset-størrelser (H, M/W).
2. Prøve 6.B (20 min): MAC vs. signatur + HMAC (H, M/W).
3. Prøve 6.C (20 min): Kollisjonssikkerhet-utregning + navngi teoremet (H, W).
4. Prøve 6.D (20 min): Blandet hash/MAC + nøkkeltyper (H, M).

---

### Del 7 — Digitale signaturer *(sjanger E: KUNNE — skriftlig ~57 %, MCQ ~90 %)*

> Del 7 tester RSA- vs. DSA/ECDSA-størrelser og -hastighet, den faste
> nonce-gjenbruk-angrepet, og eksistensiell forfalskning. Nesten alltid en av de
> mellomstore oppgavene.

#### Kapittel 7.1: RSA-, DSA- og ECDSA-signaturer

- **id:** `ttm4135-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** `ttm4135-4-1` · **kapitteltype:** teori
- **description:** Signering med privat nøkkel / verifisering med offentlig, RSA-signatur (én modulus-stor komponent) vs. DSA/ECDSA (to `q`-store komponenter), størrelses- og hastighetssammenligning, og verifiseringskostnaden ved `e=2^{16}+1`.
- **Eksamensbelegg:** Sjanger E, skriftlig ~57 %, MCQ ~90 % («privat signerer, offentlig verifiserer»). Prioritet: **kunne**.
- **Innholdskontrakt:** `theorem` **signatur-retning**: signering bruker signerers **private** nøkkel, verifisering signerers **offentlige**. `theorem` **størrelser/hastighet**: RSA-signatur = 1 modulus-stor komponent; DSA/ECDSA = to `q`-store (kortere); `e=2^{16}+1` ⇒ ~17 multiplikasjoner ved verifisering vs. ~`|n|` for tilfeldig `e`. `text` offentlig-info-størrelse: RSA `(n,e)`, DSA `(p,g,y)` (`p,g` deles, `y` ikke). **Formel- og algoritmeliste:** privat/offentlig nøkkelrolle, RSA `(n,e)`, DSA `(p,g,y)`, `e=2^{16}+1`-verifiseringskost, komponentstørrelser.
- **Oppgavesjangre:** E (M+W). Mønstereksempel (W): «Sammenlign signaturstørrelse og verifiseringshastighet for RSA (`e=2^{16}+1`) og ECDSA. Hvilken har kortest signatur, og hvilken raskest verifisering?»
- **Typiske feil:** §#12 (forveksle offentlig/privat nøkkelbruk — signering = privat); tro RSA-signatur er kortere enn DSA (motsatt); glemme at kort `e` gir rask verifisering, ikke signering.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 7.2: Signaturangrep — nonce-gjenbruk og eksistensiell forfalskning

- **id:** `ttm4135-7-2` · **number:** 7.2 · **estimatedMinutes:** 50 · **prerequisites:** `ttm4135-7-1` · **kapitteltype:** teori
- **description:** Det klassiske nonce-gjenbruk-angrepet på DSA/ElGamal (samme `k` ⇒ `k` og privatnøkkelen `x` avsløres), og eksistensiell forfalskning på RSA (velg `s`, regn `m=s^e`) — inkludert `d=-e`-fella.
- **Eksamensbelegg:** Sjanger E, skriftlig ~57 %. Nonce-gjenbruk er «en fast favoritt». Prioritet: **kunne** (men høyverdi W).
- **Innholdskontrakt:** `theorem` **nonce-gjenbruk**: samme `k` ⇒ samme `r`; da gir `s_1 - s_2 = k(m_1 - m_2) \bmod q` verdien `k`, deretter privatnøkkelen `x`. `theorem` **eksistensiell forfalskning RSA**: velg `s`, regn `m=s^e \bmod n` (gyldig par uten privatnøkkel); ved `d=-e \bmod \varphi(n)`: angriper regner `s=(h(m)^e)^{-1}` direkte ⇒ **hashen må være kollisjonsresistent, fast `d` er dødelig**. **Protokollangreps-mal** brukes. **Formel- og algoritmeliste:** `(r,s)`-signatur, nonce `k`, `s_1-s_2=k(m_1-m_2)`, `m=s^e`, `d=-e`-fella.
- **Oppgavesjangre:** E (W). Mønstereksempel (W, nyskrevne tall): «To DSA-signaturer bruker samme `k`. Vis hvordan du regner ut `k` og deretter `x` fra `(r,s_1)` og `(r,s_2)`.»
- **Typiske feil:** Glemme at samme `k` gir samme `r` (angrepsstart); regne `k` men ikke fullføre til `x`; tro RSA uten hash er trygt (eksistensiell forfalskning); overse `d=-e`-fella.
- **Quiz: 16 · Flashcards: 14**

**Prøve-kvote Del 7:** 4 prøver (Digitale signaturer)
1. Prøve 7.A (20 min): Signatur-retning + RSA vs. DSA/ECDSA-størrelser (E, M/W).
2. Prøve 7.B (25 min): Nonce-gjenbruk-angrep — regn `k` og `x` (E, W).
3. Prøve 7.C (20 min): Eksistensiell forfalskning + `d=-e`-fella (E, W).
4. Prøve 7.D (20 min): Blandet signatur + verifiseringshastighet (E, M/W).

---

### Del 8 — PKI, sertifikater og TLS *(sjanger F: KUNNE/KJENNE — TLS skriftlig ~57 %, MCQ ~90 %)*

> Del 8 dekker tillitsinfrastrukturen: X.509-sertifikatkjeden (~14 %↑), TLS 1.2-handshake
> og ciphersuiter (~57 % skriftlig, ~90 % MCQ), og TLS 1.3 (voksende). Protokollangreps-
> malen (§3) brukes gjennomgående.

#### Kapittel 8.1: PKI og X.509-sertifikater

- **id:** `ttm4135-8-1` · **number:** 8.1 · **estimatedMinutes:** 45 · **prerequisites:** `ttm4135-7-1` · **kapitteltype:** teori
- **description:** Offentlig-nøkkel-infrastruktur (PKI): X.509-sertifikatet (subjektets offentlige nøkkel + CAs signatur), verifikasjon av signaturkjeden opp til en forhåndslastet rot-CA, og revokering via CRL.
- **Eksamensbelegg:** Sjanger F, MCQ ~70 % («sertifikatet må inneholde CAs signatur»), skriftlig ~14 %↑ (Korona-sertifikat 2022V). Prioritet: **kjenne** (↑).
- **Innholdskontrakt:** `definition` **X.509-sertifikat**: inneholder subjektets offentlige nøkkel + **CAs signatur**. `theorem` **kjedeverifikasjon**: verifiser hver signatur opp til en forhåndslastet **rot-CA**; hvert ledd signerer neste. `definition` **revokering / CRL**: når en nøkkel lekker, settes sertifikatet på revokeringslisten. **Protokollangreps-mal** (falskt sertifikat uten gyldig kjede). **Formel- og algoritmeliste:** sertifikatfeltene, CAs signatur, rot-CA, sertifikatkjede, CRL.
- **Oppgavesjangre:** F (M+W). Mønstereksempel (M): «Hva må et X.509-sertifikat inneholde for å kunne verifiseres? (a) subjektets private nøkkel (b) CAs signatur (c) en delt hemmelighet (d) en nonce» (b).
- **Typiske feil:** Tro sertifikatet inneholder subjektets **private** nøkkel (offentlig); glemme at kjeden må ende i en forhåndslastet rot-CA; tro revokering skjer automatisk uten CRL/OCSP; §#12 (nøkkeltyper).
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 8.2: TLS 1.2-handshake og ciphersuiter

- **id:** `ttm4135-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** `ttm4135-5-2` · **kapitteltype:** teori
- **description:** TLS 1.2-handshaket, forskjellen på RSA key transport (ingen forward secrecy, «weak») og ECDHE (forward secrecy), tolkning av ciphersuite-strenger, og hvordan finished-hashen hindrer versjons-/ciphersuite-nedgradering.
- **Eksamensbelegg:** Sjanger F, skriftlig ~57 %, MCQ ~90 % (tolk `TLS_RSA_WITH_AES_128_CBC_SHA256`). Prioritet: **kunne**.
- **Innholdskontrakt:** `theorem` **forward secrecy i TLS**: efemer DH (ECDHE) ⇒ FS; **RSA key transport ⇒ ingen FS** (klassifiseres som «weak»). `theorem` **ciphersuite-tolkning**: `TLS_RSA_WITH_AES_128_CBC_SHA256` ⇒ RSA key transport, AES-128-CBC, HMAC-SHA-256 (record-integritet). `theorem` **nedgraderingsvern**: finished-meldingens hash over **alle** handshake-meldinger hindrer versjons-/ciphersuite-nedgradering (POODLE/SCSV). **Protokollangreps-mal** (nedgraderingsangrep). **Formel- og algoritmeliste:** handshake-meldingene, RSA key transport vs. ECDHE, ciphersuite-strengfeltene, finished-hash, forward secrecy.
- **Oppgavesjangre:** F (M+W). Mønstereksempel (W): «Forklar hvorfor en ciphersuite med RSA key transport klassifiseres som «weak», og hva ECDHE gir i stedet.» (Ingen forward secrecy vs. FS.)
- **Typiske feil:** §#9 (kalle RSA key transport / CBC+HMAC «sikker»); blande forward secrecy og sanntidssikkerhet; feil tolkning av ciphersuite-feltene; tro nedgradering hindres uten finished-hash.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 8.3: TLS 1.3

- **id:** `ttm4135-8-3` · **number:** 8.3 · **estimatedMinutes:** 45 · **prerequisites:** `ttm4135-8-2` · **kapitteltype:** teori
- **description:** Hva TLS 1.3 endret: alltid (EC)DHE (forward secrecy), kun AEAD, ingen RSA key transport, tidlig keyshare og 0-RTT (med replay-risiko).
- **Eksamensbelegg:** Sjanger F, MCQ ~90 % (hva 1.3 fjerner), skriftlig ~voksende. Prioritet: **kunne** (↑, erstatter gammelt TLS 1.2-stoff).
- **Innholdskontrakt:** `theorem` **TLS 1.3**: alltid (EC)DHE (FS), **kun AEAD**, **ingen RSA key transport**, tidlig keyshare (færre rundeturer), **0-RTT** (tidlig data, men **replay-risiko**). Kontrast mot 1.2. **Formel- og algoritmeliste:** (EC)DHE, AEAD, 0-RTT, tidlig keyshare, forward secrecy.
- **Oppgavesjangre:** F (M+W). Mønstereksempel (M): «Hva fjernet TLS 1.3 sammenlignet med 1.2? (a) forward secrecy (b) RSA key transport (c) AEAD (d) sertifikater» (b).
- **Typiske feil:** Tro TLS 1.3 beholder RSA key transport; overse 0-RTTs replay-risiko; tro 1.3 tillater ikke-AEAD-chiffer; blande hva 1.2 og 1.3 tilbyr.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 8:** 4 prøver (PKI, sertifikater og TLS)
1. Prøve 8.A (20 min): X.509-sertifikat + kjedeverifikasjon + CRL (F, M/W).
2. Prøve 8.B (25 min): TLS 1.2 forward secrecy + ciphersuite-tolkning (F, M/W).
3. Prøve 8.C (25 min): Nedgraderingsvern + RSA key transport «weak» (F, W).
4. Prøve 8.D (20 min): TLS 1.3-endringer + 0-RTT-replay (F, M/W).

---

### Del 9 — Autentiseringsprotokoller: Kerberos og Needham–Schroeder *(sjanger G: KUNNE — skriftlig ~57 %)*

> Del 9 dekker de klassiske autentiseringsprotokollene gjennom de fire aksene (ferskhet,
> identitet, replay, maskerade). Kjernen er å **skrive de konkrete angrepsmeldingene**.
> Kapittel 9.3 er protokollangreps-drillen.

#### Kapittel 9.1: Ferskhet, identitetsbinding og angrepsmodell

- **id:** `ttm4135-9-1` · **number:** 9.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** De fire aksene protokollanalyse hviler på: ferskhet (nonce/timestamp mot replay), identitetsbinding (mot maskerade), integritet, og forward secrecy — verktøykassen for enhver protokolloppgave.
- **Eksamensbelegg:** Sjanger G, grunnlag for ~57 % skriftlig. Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **ferskhet**: nonce (tilfeldig engangsverdi) eller timestamp sikrer at en melding er ny, ikke en replay. `definition` **identitetsbinding**: ID i den beskyttede meldingen hindrer maskerade. `definition` **replay-angrep** og **maskerade**. `theorem` **de fire aksene** som sjekkliste. **Protokollangreps-mal** (§3) introduseres formelt her. **Formel- og algoritmeliste:** nonce, timestamp, `ID_A`, replay, maskerade, de fire aksene.
- **Oppgavesjangre:** G (M+W). Mønstereksempel (M): «Hvilken mekanisme hindrer at en gammel melding spilles av på nytt? (a) identitetsbinding (b) nonce/timestamp (c) forward secrecy (d) komprimering» (b).
- **Typiske feil:** §#11 (hoppe over ferskhets-/identitetssjekk); forveksle replay (gjenbruk) og maskerade (utgi seg for annen); tro forward secrecy hindrer replay (det gjør ikke).
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 9.2: Kerberos og Needham–Schroeder

- **id:** `ttm4135-9-2` · **number:** 9.2 · **estimatedMinutes:** 55 · **prerequisites:** `ttm4135-9-1` · **kapitteltype:** teori
- **description:** Kerberos (billett med AEAD, timestamp/nonce mot replay, ID mot maskerade, ingen forward secrecy) og Needham–Schroeder (det klassiske replay-angrepet ved manglende ferskhet, og malleabilitet med strømchiffer).
- **Eksamensbelegg:** Sjanger G, skriftlig ~57 % (enten Kerberos ELLER N–S i nesten hvert eldre sett). Prioritet: **kunne**.
- **Innholdskontrakt:** `theorem` **Kerberos**: billett `\{K_{AB}, ID_A, …\}` beskyttet med AEAD (GCM); nonce/timestamp mot replay; ID hindrer maskerade; **ingen forward secrecy** (langtidsnøkkel dekrypterer billetten). `theorem` **Needham–Schroeder-angrepet**: manglende nonce-/ferskhetssjekk ⇒ replay av gammel øktnøkkel; timestamp (Kerberos) gjør angrepet ugyldig. `theorem` **malleabilitet**: med strømchiffer i stedet for AEAD kan angriper XOR-e inn et kjent felt (`ID_B \to ID_C`). **Protokollangreps-mal** brukes i alle eksempler. **Formel- og algoritmeliste:** billett, `K_{AB}`, `ID_A`, nonce/timestamp, AEAD, malleabilitet, strømchiffer-XOR.
- **Oppgavesjangre:** G (W). Mønstereksempel (W): «Vis Needham–Schroeder-replay-angrepet: hvilken melding gjenbruker angriperen, og hvordan hindrer en timestamp det?» (Skriv de konkrete meldingene.)
- **Typiske feil:** §#11 (overse manglende ferskhetssjekk); tro Kerberos gir forward secrecy (nei); glemme at strømchiffer gir malleabilitet; skrive essay i stedet for de konkrete angrepsmeldingene (§#13).
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 9.3: DRILL — Protokollangrep

- **id:** `ttm4135-9-3` · **number:** 9.3 · **estimatedMinutes:** 80 · **prerequisites:** `ttm4135-9-2` · **kapitteltype:** drill
- **description:** Full drill på sjanger G med protokollangreps-malen: gitt en protokoll (Kerberos-/N–S-variant, eller en autentisert DH), finn den manglende sjekken og **skriv de konkrete angrepsmeldingene** og konsekvensen.
- **Eksamensbelegg:** Sjanger G, skriftlig ~57 %. Prioritet: **kunne** (høyverdi W).
- **Innholdskontrakt (løsningsoppskrift = protokollangreps-malen, §3):** 1) parter/antakelser; 2) protokollflyt med felter; 3) hvilken av de fire aksene svikter (ferskhet/identitet/integritet/FS); 4) angriperens konkrete meldinger (replay/bytte/XOR); 5) konsekvens + tiltak. Sensor-kommentert case med margnotat om at fasiten vil ha **konkrete meldinger**, ikke «protokollen er usikker». 10–14 oppgaver (W) som roterer replay, maskerade, malleabilitet, manglende FS.
- **Oppgavesjangre:** G. Mønstereksempel (W): «En forenklet protokoll sender `\{K, ID_B\}` med strømchiffer. Vis hvordan en aktiv angriper endrer `ID_B` til `ID_C`, og hvilken mekanisme (AEAD) stopper det.»
- **Typiske feil:** §#11 (hoppe over ferskhet/identitet), §#13 (essay i stedet for konkret angrep); glemme tiltaket; blande hvilken akse som svikter.
- **Quiz: 18 · Flashcards: 8**

**Prøve-kvote Del 9:** 4 prøver (Autentiseringsprotokoller)
1. Prøve 9.A (20 min): De fire aksene + replay vs. maskerade (G, M/W).
2. Prøve 9.B (25 min): Needham–Schroeder-replay — skriv angrepsmeldingene (G, W).
3. Prøve 9.C (25 min): Kerberos-billett + hvorfor ingen forward secrecy (G, W).
4. Prøve 9.D (25 min): Malleabilitet med strømchiffer + AEAD-tiltak (G, W).

---

### Del 10 — Nyere tema: post-kvante, Signal og metadata *(sjanger H: KJENNE ↑ — MCQ ~60 %↑)*

> Del 10 dekker de klare vekstområdene: kvantetrusselen (~60 % MCQ↑), Signal
> (Double Ratchet/X3DH, ~21 % skriftlig↑) og e-post-/metadata-sikkerhet. «Forvent
> fremover.»

#### Kapittel 10.1: Kvantetrusselen og post-kvante-krypto

- **id:** `ttm4135-10-1` · **number:** 10.1 · **estimatedMinutes:** 50 · **prerequisites:** `ttm4135-4-1` · **kapitteltype:** teori
- **description:** Hvordan kvantedatamaskiner truer krypto: Shors algoritme bryter både faktorisering og (EC)DLP (RSA/DH/ECC faller), Grover halverer symmetrisk/hash, «harvest now, decrypt later», og ECC-sikkerhetsnivåer (≈ 2× symmetrisk).
- **Eksamensbelegg:** Sjanger H, MCQ ~60 %↑ (harvest-now-decrypt-later, ECC-gruppestørrelse). Prioritet: **kjenne** (↑ — prioritér gitt trenden).
- **Innholdskontrakt:** `theorem` **Shor**: bryter både faktorisering og (EC)DLP ⇒ RSA, DH og ECC faller. `theorem` **Grover**: halverer symmetrisk krypto/hash (128-bit ⇒ 64-bit effektivt) ⇒ doble nøkkellengden. `definition` **«harvest now, decrypt later»**: fang chiffertekst nå, dekrypter når kvantemaskin finnes. `text` **ECC-sikkerhetsnivå**: gruppestørrelse ≈ 2× symmetrisk (256-bit kurve ≈ 128-bit symmetrisk). **Formel- og algoritmeliste:** Shor (faktorisering + (EC)DLP), Grover (`2^{n}\to2^{n/2}`), harvest-now-decrypt-later, ECC ≈ 2× symmetrisk.
- **Oppgavesjangre:** H (M+W). Mønstereksempel (M): «Hvilke primitiver bryter Shors algoritme? (a) kun RSA (b) kun ECC (c) RSA, DH og ECC (d) AES» (c).
- **Typiske feil:** Tro Shor bare bryter RSA (også DH/ECC); tro Grover bryter symmetrisk helt (kun halverer); forveksle Shor og Grover; tro ECC er kvantesikker.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 10.2: Signal — Double Ratchet og X3DH

- **id:** `ttm4135-10-2` · **number:** 10.2 · **estimatedMinutes:** 50 · **prerequisites:** `ttm4135-5-2` · **kapitteltype:** teori
- **description:** Signal-protokollen: DH-ratchet (ny delt hemmelighet ved retningsskifte ⇒ post-compromise security/selvheling), hash-ratchet (envegs nøkkeloppdatering ⇒ forward secrecy), og X3DH med efemer nøkkel mot replay — pluss det faste FS vs. PCS-skillet.
- **Eksamensbelegg:** Sjanger H, skriftlig ~21 %↑ (2021–2023), MCQ. Prioritet: **kjenne** (↑).
- **Innholdskontrakt:** `theorem` **DH-ratchet**: ny DH-hemmelighet ved hvert retningsskifte ⇒ **post-compromise security** (selvheling etter kompromiss). `theorem` **hash-ratchet**: envegs nøkkeloppdatering ved påfølgende meldinger samme vei ⇒ **forward secrecy**. `definition` **X3DH**: efemer nøkkel `EK` mot replay ved oppsett. `theorem` **FS vs. PCS**: FS = *tidligere* økter trygge ved *senere* kompromiss; PCS = *gjenvinne* sikkerhet *etter* kompromiss. **Formel- og algoritmeliste:** DH-ratchet, hash-ratchet, X3DH, `EK`, forward secrecy, post-compromise security.
- **Oppgavesjangre:** H (M+W). Mønstereksempel (W): «Hvilken av Signals to ratcheter gir forward secrecy, og hvilken gir post-compromise security? Forklar forskjellen.»
- **Typiske feil:** §#10 (blande forward secrecy og post-compromise security); tro hash-ratchet gir selvheling (det er DH-ratchet); glemme X3DHs efemere nøkkel; forveksle de to ratchetene.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 10.3: E-postsikkerhet, metadata og passordlagring

- **id:** `ttm4135-10-3` · **number:** 10.3 · **estimatedMinutes:** 45 · **prerequisites:** `ttm4135-8-3` · **kapitteltype:** teori
- **description:** Ende-til-ende vs. lenke-sikkerhet: PGP (ende-til-ende, åpne headere), STARTTLS (opportunistisk lenke), IPsec tunnelmodus (skjuler IP-header), TLS (rører ikke IP-header), pluss passordlagring med salt mot ordboksangrep.
- **Eksamensbelegg:** Sjanger H, MCQ ~70 % (tunnelmodus skjuler metadata, PGP-headere), skriftlig ~21 %. Passord ~30 %. Prioritet: **kjenne**.
- **Innholdskontrakt:** `theorem` **metadata/e-post**: **PGP** = ende-til-ende men skjuler ikke headere; **STARTTLS** = opportunistisk lenke-sikkerhet (må stole på serverne); **IPsec tunnelmodus** kapsler inn IP-headere; **TLS** rører ikke IP-headere; ekte forward secrecy umulig for ren e-post (mottaker ikke online). `definition` **salt**: hindrer forhåndsberegnet hash-ordbok (rainbow tables). **Formel- og algoritmeliste:** ende-til-ende vs. lenke, PGP/STARTTLS/IPsec-tunnel/TLS-lagene, salt, ordboksangrep.
- **Oppgavesjangre:** H (M+W). Mønstereksempel (M): «Hvilken mekanisme skjuler IP-headerne mellom to nettverk? (a) PGP (b) STARTTLS (c) IPsec tunnelmodus (d) TLS» (c).
- **Typiske feil:** Tro PGP skjuler headere/metadata (nei); forveksle ende-til-ende (PGP) og lenke (STARTTLS); tro TLS/IPsec transport skjuler IP-header (kun tunnelmodus); glemme at salt hindrer forhåndsberegning, ikke gjetting av ett passord.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 10:** 4 prøver (Nyere tema)
1. Prøve 10.A (20 min): Shor/Grover + harvest-now-decrypt-later + ECC-nivå (H, M/W).
2. Prøve 10.B (25 min): Signal — DH-ratchet/hash-ratchet + FS vs. PCS (H, W).
3. Prøve 10.C (20 min): X3DH + Signal-fakta (H, M/W).
4. Prøve 10.D (20 min): Metadata/e-post (PGP/STARTTLS/IPsec/TLS) + salting (H, M/W).

---

### Del 11 — Eksamenstrening

> Del 11 samler de to eksamensferdighetene (MCQ-refleks + skriftlig utledning) i én
> tverrgående MCQ-mesterdrill, ett utledningshåndverk-kapittel, og **tre komplette
> øvingseksamener** i gjeldende form (30 MCQ + 5 skriftlige).

#### Kapittel 11.1: MCQ-mesterdrill — hele pensum

- **id:** `ttm4135-11-1` · **number:** 11.1 · **estimatedMinutes:** 90 · **prerequisites:** `ttm4135-10-3` · **kapitteltype:** drill
- **description:** Den tverrgående flervalgsbanken som speiler Exercise 1: 1–4 spørsmål per tema over hele pensumbredden (modulær aritmetikk, moduser, AES/DES, RSA-teori, hash/fødselsdag, DH, signatur, TLS, PKI, primalitet, klassisk chiffer, OTP, kvante, protokoll-fakta, passord), med −0,33-elimineringstrening.
- **Eksamensbelegg:** Exercise 1 (30 MCQ, ~50 % av eksamen) feier hele pensumbredden hvert år. Dette kapitlet **er** MCQ-eksamenstreningen. Prioritet: **perfekt** (MCQ er halve eksamen).
- **Innholdskontrakt (løsningsoppskrift):** For hvert MCQ: 1) identifisér temaet; 2) eliminér distraktorene aktivt (hver forklaring sier hvorfor de gale er gale — de faste sammenblandingene fra §5); 3) anvend −0,33-kalkylen (svar når ≥1 eliminert). Dekker MCQ-frekvenstabellen fra Del 0 tema for tema. Fordi kapitlet er ren MCQ-trening, ligger tyngden i quiz-banken (30) og i `exercise`-blokker som modellerer firealternativs-spørsmål med full distraktorforklaring.
- **Oppgavesjangre:** M (alle temaer A–H). Mønstereksempel (M): «`\varphi(91)=?` (a) 90 (b) 72 (c) 84 (d) 78» (b, `6\cdot12`) — forklar hvorfor hver distraktor er en typisk feil.
- **Typiske feil:** Hele §5-katalogen som distraktorer; gjette blindt (−0,33); ikke eliminere før man svarer; nedprioritere MCQ.
- **Quiz: 30 · Flashcards: 0**

#### Kapittel 11.2: Utledningshåndverket — den skriftlige sjangeren

- **id:** `ttm4135-11-2` · **number:** 11.2 · **estimatedMinutes:** 60 · **prerequisites:** `ttm4135-11-1` · **kapitteltype:** drill
- **description:** Den skriftlige kortsvars-/utledningssjangeren (Exercise 2) samlet: vis mellomregning, navngi teoremet, skriv konkret protokollangrep, høst delpoeng — omgjør et langt svevende svar til det korte som gir full uttelling.
- **Eksamensbelegg:** Exercise 2 (5 skriftlige, ~50 % av eksamen). Metakapittel som destillerer sensorreglene (§4). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **regneoppgave** — vis regnekjeden kompakt (Euklid, square-and-multiply, Miller–Rabin, CRT), oppgi tallsvaret, navngi teoremet; 2) **konseptoppgave** — 2–6 setninger, riktig retning på egenskapen (FS ≠ PCS), ingen essay; 3) **protokolloppgave** — protokollangreps-malen (§3), konkrete meldinger; 4) **delpoeng** — ta det du kan først, del svarene på deloppgavene. Sensor-kommentert «forbedre svaret»-case. 8–12 «gjør svaret kort og korrekt»-oppgaver på tvers av sjangrene C/D/E/F/G/H.
- **Oppgavesjangre:** Alle W-sjangre (metanivå). Mønstereksempel: «Her er et langt svar på en split-d-oppgave. Skriv det korte som viser `C^{d_1}C^{d_2}=C^d` og navngir Euler.»
- **Typiske feil:** §#13 (essay); hoppe over mellomregning; ikke navngi teoremet; ikke bruke protokollangreps-malen; henge fast på én deloppgave.
- **Quiz: 14 · Flashcards: 10**

#### Kapittel 11.3: Øvingseksamen 1 — bredt ordinært sett (30 MCQ + 5 skriftlige)

- **id:** `ttm4135-11-3` · **number:** 11.3 · **estimatedMinutes:** 180 · **prerequisites:** `ttm4135-11-2` · **kapitteltype:** øvingseksamen
- **description:** Komplett 3-timers sett i gjeldende form: Exercise 1 = 30 firealternativs MCQ over hele pensum; Exercise 2 = 5 skriftlige oppgaver som speiler den typiske temafordelingen.
- **Eksamensbelegg/miks:** Speiler prognosen (2023V/2024V-nivå). **Exercise 1:** 30 MCQ fordelt etter MCQ-frekvenstabellen (flest på modulær aritmetikk, moduser, RSA-teori, hash, DH, TLS; noen kvante/Signal/PKI). **Exercise 2:** Q1 klassisk chiffer/kryptoanalyse (A) + Q2 blokkchiffermodus (B) + Q3 RSA-regning (C: invers/square-and-multiply/CRT) + Q4 DH + forward secrecy (D) + Q5 protokoll (G/F: Kerberos eller TLS). Alle nyskrevne med egne tallverdier/kontekster. Løsningsforslag som modellsvar i `collapsible` per oppgave (MCQ: avkryssing + kort begrunnelse; skriftlig: kompakt regnekjede med navngitt teorem), `tip` om delpoeng og −0,33-strategi. Innledende `tip` om tidsbudsjett (~90 min MCQ + ~90 min skriftlig; ~3 min/MCQ, ~18 min/skriftlig oppgave).
- **Innholdskontrakt:** Dekker sjangrene A, B, C, D, F/G + MCQ over H.
- **Oppgavesjangre:** M + A, B, C, D, F/G.
- **Quiz: 16 · Flashcards: 0**

#### Kapittel 11.4: Øvingseksamen 2 — regnetungt sett (tallteori/RSA/DH)

- **id:** `ttm4135-11-4` · **number:** 11.4 · **estimatedMinutes:** 180 · **prerequisites:** `ttm4135-11-3` · **kapitteltype:** øvingseksamen
- **description:** Komplett sett med tyngdepunkt på den kvantitative kjernen (regnesjangrene R1–R6), men fortsatt full bredde i MCQ-delen.
- **Eksamensbelegg/miks:** Speiler et regnetungt sett (RSA ofte to oppgaver). **Exercise 1:** 30 MCQ med ekstra vekt på modulær aritmetikk, RSA-teori, primalitet, DH. **Exercise 2:** Q1 klassisk chiffer/Hill-matrise (A/R5) + Q2 modus/DRBG (B) + Q3 RSA-regning: nøkler + square-and-multiply-telling + CRT (C/R2/R3) + Q4 Miller–Rabin + √1→faktorisering (C/R4) + Q5 DH-generator + delt hemmelighet + forward secrecy (D/R6). Alle nyskrevne tall. Løsningsforslag med **vist regnekjede** og navngitt teorem, `tip` om delpoeng.
- **Innholdskontrakt:** Dekker A, B, C (tungt), D + MCQ-bredde — driller alle seks regnesjangre.
- **Oppgavesjangre:** M + A, B, C, D (R1–R6).
- **Quiz: 16 · Flashcards: 0**

#### Kapittel 11.5: Øvingseksamen 3 — protokoll- og nyere-tema-tungt sett

- **id:** `ttm4135-11-5` · **number:** 11.5 · **estimatedMinutes:** 180 · **prerequisites:** `ttm4135-11-4` · **kapitteltype:** øvingseksamen
- **description:** Komplett sett med tyngdepunkt på protokoll- og vekstområdene (TLS 1.3, Kerberos, Signal, PKI, post-kvante), der de roterende Q5–Q6 avgjøres.
- **Eksamensbelegg/miks:** Speiler et protokolltungt sett. **Exercise 1:** 30 MCQ med ekstra vekt på TLS, PKI, kvante, Signal, hash/MAC, signatur. **Exercise 2:** Q1 klassisk chiffer (A) + Q2 modus/Feistel (B) + Q3 signaturer: nonce-gjenbruk (E) + Q4 protokollangrep: Needham–Schroeder eller Kerberos med protokollangreps-malen (G) + Q5 nyere: Signal FS vs. PCS **eller** TLS 1.3/PKI (F/H). Alle nyskrevne. Løsningsforslag med **konkrete angrepsmeldinger** (ikke essay), `tip` om delpoeng og at fasiten godtar flere korrekte varianter når antakelsene forklares.
- **Innholdskontrakt:** Dekker A, B, E, F, G, H — de tre settene sammen dekker alle sjangre A–H og alle regnesjangre R1–R6 flere ganger.
- **Oppgavesjangre:** M + A, B, E, F, G, H.
- **Quiz: 16 · Flashcards: 0**

---

## 5. Summeringskontroll (quiz/flashcards) — AUTORITATIV

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.2 | 18+16 = **34** | 14+10 = **24** |
| 1 | 1.1–1.4 | 20+18+18+24 = **80** | 22+16+16+8 = **62** |
| 2 | 2.1–2.5 | 22+18+22+18+24 = **104** | 24+16+22+18+8 = **88** |
| 3 | 3.1–3.4 | 20+18+18+24 = **80** | 18+18+16+8 = **60** |
| 4 | 4.1–4.5 | 20+18+18+16+26 = **98** | 20+16+16+14+8 = **74** |
| 5 | 5.1–5.3 | 18+18+22 = **58** | 18+18+8 = **44** |
| 6 | 6.1–6.2 | 18+16 = **34** | 18+16 = **34** |
| 7 | 7.1–7.2 | 18+16 = **34** | 18+14 = **32** |
| 8 | 8.1–8.3 | 16+18+16 = **50** | 16+18+16 = **50** |
| 9 | 9.1–9.3 | 16+16+18 = **50** | 16+16+8 = **40** |
| 10 | 10.1–10.3 | 16+16+16 = **48** | 16+16+16 = **48** |
| 11 | 11.1–11.5 | 30+14+16+16+16 = **92** | 0+10+0+0+0 = **10** |
| **Sum** | **41 kap.** | **762 ≥ 500 ✓** | **566 ≥ 500 ✓** |

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri underskride.
**Quiz siktes bevisst høyt (762)** fordi flervalg (Exercise 1) **er nøyaktig halve
eksamen** — quiz er direkte eksamenstrening av MCQ-delen, ikke bare et supplement.
Fordelingen speiler frekvens og form: de tre garanterte skriftlige delene (1 klassisk, 2
modus, 3–4 tallteori/RSA) og den MCQ-tunge modulær-aritmetikk/modus/RSA-kjernen bærer
mest; MCQ-mesterdrillen (11.1) alene gir 30. **Flashcards vektes mot begrep ↔ presis
definisjon + fast feilslutning** (chiffertyper, moduser, egenskaper, protokoll-primitiver,
FS vs. PCS, MAC vs. signatur) — puggematerialet for en (nær) hjelpemiddelfri eksamen
(kode D). Øvingseksamenene (11.3–11.5) gir 0 flashcards (rene oppgavesett) men bidrar med
quiz. Flashcard-tettheten (~14/kapittel) er justert opp for det svært begrepsrike faget,
men holdes under quiz siden MCQ-drillen er den tyngste eksamensinvesteringen.

---

## 6. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–10 → 40 prøver)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med kort modellsvar og
poengfordeling. Prøvekapitler bygges som `ttm4135-<del>-prove` (chapterNumber `<del>.P`)
etter plattformmønsteret, eller som egne exercise-seksjoner i delens siste kapittel.
Prøvekvotene per del står i sluttblokken til hver del over (Del 1–10). Del 0 og Del 11 får
ikke egne prøver (Del 0 er metakapitler; Del 11 **er** øvingseksamenene).

### Øvingseksamener (3 komplette sett — se kap. 11.3–11.5)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (11.3) | Typisk ordinært sett (2023V/2024V) | 30 MCQ + 5 skriftlige, bred fordeling |
| Øvingseksamen 2 (11.4) | Regnetungt sett (RSA ofte to oppg.) | 30 MCQ + 5 skriftlige, tyngde på R1–R6 |
| Øvingseksamen 3 (11.5) | Protokoll-/nyere-tema-tungt sett | 30 MCQ + 5 skriftlige, tyngde på F/G/H |

Alle tre settene er i **gjeldende form** (30 firealternativs MCQ med −0,33 for feil + 5
skriftlige oppgaver, 3 timer, engelsk-format). Til sammen dekker de sjangrene A–H og
regnesjangrene R1–R6 flere ganger. Korona-formen (15 tre-alternativs MCQ) brukes ikke som
mal (Del 0 forklarer hvorfor).

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — mappevurdering (3-timers digital skriftlig 60 % + lab/quiz
   40 %, begge må bestås), 60 poeng delt **50/50** mellom 30 MCQ (−0,33 for feil) og 5
   skriftlige, engelsk, kode D, A–F; at formen har skiftet 3× men sjangrene er stabile
   (fra kap. 0.1–0.2).
2. **Prioriteringskartet** — temafrekvens-tabellene (skriftlig + MCQ) omgjort til tre
   lesenivåer: **perfekt** (klassisk chiffer Del 1, modus Del 2, tallteori/RSA Del 3–4, DH
   Del 5), **kunne** (signatur Del 7, TLS Del 8, Kerberos Del 9, hash/MAC Del 6), **kjenne
   ↑** (Signal, PKI, metadata, post-kvante, passord — Del 10).
3. **Eksamenshåndverket** — det doble håndverket (kap. 0.2): MCQ-strategien under
   −0,33-regelen (eliminér før du svarer) og den skriftlige utledningssjangeren (vis
   mellomregning, navngi teoremet, skriv konkret angrep, høst delpoeng).
4. **Regnesjangrene R1–R6** — de seks entydige-fasit-oppskriftene (modulær invers,
   RSA-CRT, square-and-multiply-telling, Miller–Rabin, Hill-matrise, DH-generator/delt
   hemmelighet) fra drillkapitlene (1.4, 2.5, 3.4, 4.5, 5.3) i kortform — sensorens
   sikreste poeng.
5. **Protokollangreps-malen** — den faste fem-punkts strukturen (§3) for sjanger F/G/H,
   med de fire aksene (ferskhet, identitet, forward secrecy, ende-til-ende vs. lenke).
6. **Sensorreglene** — de fem metareglene (kort/utledningsdrevet; vis mellomregning;
   navngi teoremet; poeng deles likt; MCQ −0,33) + at fasiten godtar flere korrekte
   varianter når antakelsene forklares.
7. **Feilkatalogen** — de 13 typiske feilene (§5 i analysen) samlet, hver med henvisning
   til kapitlet som forebygger den: Hill-nøkkeltall uten forbehold, matrise-kommutativitet,
   parallell kryptering i kjedet modus, feil feilforplantning, square-and-multiply-telling,
   CRT i split-d, Fermat-tillit (Carmichael), feil hash-størrelse, «3DES/CBC sikker»,
   FS vs. PCS, hoppe over ferskhet/identitet, offentlig/privat-nøkkelforveksling,
   essay i stedet for konkret angrep.
8. **Formel- og algoritmeark** — alt regneapparatet samlet (utvidet Euklid,
   square-and-multiply, RSA-CRT, Miller–Rabin, CRT-kombinasjon, Hill-invers, DH-generator/
   delt hemmelighet, φ(n), fødselsdagsstørrelsen), de navngitte teoremene (Euler, Fermat,
   Euklid, kinesisk restteorem, fødselsdagsparadokset), modus-ligningene og
   protokoll-primitivene — puggeark for kode D.
9. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant): Del 1
   (klassisk — Q1) → Del 2 (modus — Q2) → Del 3 (tallteori-fundament) → Del 4 (RSA — den
   kvantitative kjernen) → Del 5 (DH) → Del 6–7 (hash/signatur) → Del 8–9 (TLS/protokoller)
   → Del 10 (nyere) → prøvene underveis → MCQ-mesterdrillen + utledningshåndverket +
   de tre øvingssettene de siste ukene under tidspress (180 min).

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `ttm4135` med alle 41 kapitler
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites/
   linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra §2-tabellen
   (obligatorisk). **`number` er del-basert** («4.2», ALDRI lineær «22» — jf.
   JUS1111-lærdommen; prosareferanser i innholdet bruker samme form, «kap. 4.2»).
2. **Del 0** (kap. 0.1–0.2) — etablerer sjangernavnene A–H, regnesjangrene R1–R6,
   E-formene (M/W), 50/50-disiplinen, MCQ-strategien, utledningssjangeren og
   protokollangreps-malen som resten refererer til.
3. **De fem perfekt-delene i avhengighetsrekkefølge**: Del 1 (klassisk — lite forkunnskap,
   Q1) → Del 2 (modus/Feistel — Q2) → Del 3 (tallteori-fundament) → Del 4 (RSA; krever Del
   3) → Del 5 (DH; krever Del 3). Bygg Del 3 før Del 4 og Del 5.
4. Del 6 (hash/MAC) → Del 7 (signatur; krever Del 4) → Del 8 (PKI/TLS; krever Del 5+7) →
   Del 9 (Kerberos/N–S) → Del 10 (nyere; krever Del 4+5+8) → Del 11 (eksamenstreningen til
   slutt — den gjenbruker alle sjangre og regnesjangre).
5. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; prøvene (§6) legges i respektive delers prøvekapittel/
   exercise-seksjoner.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (escape
  `"` i norske sitattegn og i LaTeX; `\\` for LaTeX-kommandoer); `npm run build` grønn.
- [ ] **Notasjonskonsistens**: all krypto-notasjon følger emnet/Stallings (`a^{-1}\bmod
  n`, `\varphi(n)`, `Z_p^*`, `g^{ab}`, `E(P,K)`, Feistel-`L_i,R_i`, ciphersuite-strenger);
  engelsk fagterm i parentes ved første forekomst (tospråklig).
- [ ] **50/50-kalibrering**: hvert temakapittel trener BÅDE MCQ (quiz + M-`exercise`) OG
  skriftlig utledning (W-`exercise` med `solution` + `hints`); quiz-forklaringene
  begrunner både riktig svar og hvorfor distraktorene er gale (−0,33-elimineringen).
- [ ] **Regneprosedyrer som `theorem`-blokker**: hvert regnekapittel har minst én
  nummerert regneprosedyre-`theorem` (utvidet Euklid, square-and-multiply, RSA-CRT,
  Miller–Rabin, CRT-kombinasjon, Hill-invers, DH delt hemmelighet).
- [ ] **«Navngi teoremet»**: alle W-løsningsforslag som bruker Euler/Fermat/Euklid/
  kinesisk restteorem/fødselsdagsparadokset navngir teoremet eksplisitt; ingen «tallmagi».
- [ ] **«Show your working»**: alle regne-løsningsforslag viser mellomregningen kompakt
  (Euklid-kjede, square-and-multiply-telling, Miller–Rabin-sekvens, matriseinvers, CRT);
  rett tallsvar uten utregning markeres som utilstrekkelig.
- [ ] **Protokollangreps-malen**: alle protokollkapitler (Del 8–10, sjanger F/G/H) bruker
  den faste fem-punkts malen (§3) og **skriver de konkrete angrepsmeldingene**, ikke essay.
- [ ] **Formel- og algoritmeliste per delkapittel**: hvert delkapittel som bruker
  formler/algoritmer har `collapsible` «Formel- og algoritmeliste» rett etter
  Forkunnskaper, som forklarer ALLE symboler OG algoritmer/prosedyrer brukt i delkapitlet
  (per delkapittel, ikke arv).
- [ ] **Regnesjangrene R1–R6 drilles til feilfrihet**: drillkapitlene 1.4 (R5), 2.5 (B),
  3.4 (R1/R2), 4.5 (R2/R3/R4), 5.3 (R6), 9.3 (G) har løsningsoppskrift +
  sensor-kommentert case + 10–16 oppgaver på eksamensnivå.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra dette
  skjelettet), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå, **gjennomregnet
  kryptoeksempel med nyskrevne tall**), 6–12 øvinger (M+W) med `solution` + `hints`,
  repetisjons-`collapsible`.
- [ ] **Quiz-sum ≥ 762 og flashcard-sum ≥ 566** per kvotetabellen (§5); quiz kalibrert som
  MCQ-eksamenstrening, `options[0]` = riktig svar; flashcards kalibrert som begrep ↔
  definisjon + fast feilslutning.
- [ ] **Prøver**: 4 per temadel 1–10 (40 stk) + 3 øvingseksamener (kap. 11.3–11.5) i
  gjeldende form (30 MCQ + 5 skriftlige) som sammen dekker sjangrene A–H og R1–R6.
- [ ] **Formskifte-caveat**: Del 0 sier eksplisitt at korona-formen (15 tre-alternativs
  MCQ + begrunnelse, 2020–2022) IKKE er dagens form (30 firealternativs, −0,33); boka
  bygges mot gjeldende 2023–2024-form.
- [ ] **Voksende tema dekket**: post-kvante (10.1), Signal (10.2), TLS 1.3 (8.3), PKI (8.1)
  er bygget og flagget «forvent fremover» i Del 0.
- [ ] **Opphavsrett**: ALLE oppgaver, tallverdier, chiffernøkler, moduli og innpakninger
  nyskrevne — egne tall/kontekster; algoritmer, protokollnavn og standardnotasjon er
  allmenn faglig kunnskap, men ingen oppgavetekster/fasiter/sensorformuleringer fra reelle
  sett gjengis; pensumlitteratur (Stallings) refereres (forfatter/verk/begrep), aldri
  siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 +
  innhold), jf. lærdommen om `getChapterMeta`.
