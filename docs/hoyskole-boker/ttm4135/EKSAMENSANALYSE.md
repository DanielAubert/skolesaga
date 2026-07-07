# Eksamensanalyse: TTM4135 Anvendt kryptografi og nettverkssikkerhet (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på NTNUs offisielle
> eksamensarkiv for TTM4135 fra 2015 til 2024: oppgavesett og/eller offisielle
> løsningsforslag («Outline answers», fagansvarlig Colin Boyd, fra 2024 Anamaria
> Costache) for **V2015, K2015, V2016, K2016, V2017, K2017, V2018, K2018, V2020,
> V2021, K2021, V2022, V2023 og V2024** — til sammen 14 sett med fasit for de
> aller fleste. De ni siste årene (2017–2024) er lest grundig; de eldre (2015–2016)
> er skummet for temadekning. **Alt innhold er omskrevet med egne ord** — ingen
> oppgavetekster, fasiter eller sensorkommentarer er gjengitt ordrett. Tallverdier,
> standardnotasjon, algoritmer, protokollnavn og fagbegreper er allmenn faglig
> kunnskap og ikke opphavsrettslig beskyttet. Analysen er kvantitativ der kildene
> tillater det.
>
> **Emnet er aktivt** (verifisert mot NTNUs emneside juli 2026): TTM4135 undervises
> på masternivå med vureksamen hver vår. Undervisning og eksamen foregår på
> **engelsk**; faget het tidligere «Information security», og eksamenspapirene fra
> 2015–2018 bruker det navnet. Pensumbok er **Stallings, *Cryptography and Network
> Security*** supplert med fagansvarligs egne forelesningsnotater; både notasjon og
> løsningsteknikk i fasitene følger denne tradisjonen tett.
>
> **Faget er hybrid.** Det kombinerer en kvantitativ **kryptomatematisk kjerne**
> (modulær aritmetikk, RSA-regning, Diffie–Hellman, primalitetstesting, endelige
> grupper) med en konseptuell **anvendt-sikkerhet-del** (blokkchiffermoduser,
> hashfunksjoner/MAC, signaturer, PKI, TLS/IPsec, Kerberos, Signal, e-postsikkerhet,
> kvantetrusselen). Eksamen tester begge deler omtrent 50/50 — se del 1.

---

## 1. Eksamensform og utvikling

### Grunnform (gjeldende, 2023–2024)

**Digital skriftlig skoleeksamen, 3 timer (09:00–12:00), hjelpemiddelkode D**
(ingen trykte/håndskrevne hjelpemidler; kun en bestemt enkel kalkulator).
Karakterskala **A–F**, eksamen på engelsk. I dagens ordning er sluttkarakteren en
**mappevurdering**: avsluttende eksamen teller **60 %** og praktisk lab-arbeid +
nettbaserte quizer teller **40 %**; begge deler må bestås.

Eksamenssettet gir **maksimalt 60 poeng** og har fast todelt struktur:

1. **Exercise 1 — Multiple choice (30 poeng).** **30 flervalgsspørsmål**, hver med
   fire alternativer (a/b/c/d, ett riktig) og verdt 1 poeng. Feier over **hele**
   pensumbredden. **Feil avkryssing gir trekk (−0,33 poeng i 2024); blankt gir
   ingen trekk.** Avkrysses på eget svarark. Fasiten er bare en avkryssingstabell —
   ingen begrunnelse forventes.
2. **Exercise 2 — Written answer questions (30 poeng).** **5 skriftlige oppgaver**,
   hver verdt maks 6 poeng med deloppgaver (a/b/c) som deler poengene likt (to
   deler ⇒ 3+3, tre deler ⇒ 2+2+2). Her ligger metode- og utledningsarbeidet;
   fasiten gir korte, utledningsdrevne modellsvar.

**Poengbalansen er dermed nøyaktig 50/50 mellom flervalg og skriftlig.** Det gjør
flervalgsdrillen like viktig som den skriftlige metodetreningen — en uvanlig tung
flervalgsvekt for et NTNU-masteremne.

### ⚠️ Formen har endret seg tre ganger — pass på hvilket sett du øver på

Arkivet spenner over en tydelig utvikling. **Pensumet og oppgavetypene er nesten
uendret**, men *tellingen* av oppgaver og alternativer har variert:

| Periode | Exercise 1 (flervalg) | Exercise 2 (skriftlig) | Trekk for feil MCQ | Merknad |
|---|---|---|---|---|
| **2015 (K)** | 20 spm, **4 alt.** | 8 oppgaver | ja | «Information security» |
| **2016 (V/K)** | 25 spm, **4 alt.** | 7 oppgaver | ja | |
| **2017–2018 (V/K)** | **30 spm, 4 alt.** | 6 oppgaver | ja | Stabil «klassisk» form |
| **2020–2022 (V/K)** | **15 spm, 3 alt.** | 6 oppgaver | −0,5 | Hjemme-/koronaform, halvert MCQ |
| **2023–2024 (V)** | **30 spm, 4 alt.** | **5 oppgaver** | −0,33 | **Gjeldende form** |

**Tre ting følger av dette:**

- **2020–2022 er ikke representative for MCQ-formen.** De hadde bare **15
  tre-alternativs**-spørsmål (a/b/c), og fasiten gir en kort *begrunnelse* for hvert
  svar (delvis uttelling mulig for å forklare hvorfor ett alternativ er galt).
  Dagens form er 30 rene fire-alternativs uten begrunnelseskrav. Innholdet i disse
  MCQ-ene er likevel svært nyttig — det er de samme temaene.
- **Antall skriftlige oppgaver falt fra 6 til 5 i 2023.** Eldre sett har én ekstra
  skriftlig oppgave, men sjangrene er de samme (se del 3).
- **De skriftlige oppgavene er derimot bemerkelsesverdig stabile.** Q1 er nesten
  alltid klassisk chiffer/kryptoanalyse, Q2 blokkchiffermodus/Feistel, en midtdel
  er tallteori/RSA/DH, og de siste er protokoller (TLS/Kerberos/Signal/PKI). Flere
  fasiter har til og med innebygde **«alternate question»**-varianter der samme
  oppgave gjenbrukes med nye tall.

### Nye/voksende innslag (2021→2024)

- **Post-kvante / «harvest now, decrypt later»** (Shors algoritme bryter både
  faktorisering og ECDLP) er nå fast MCQ-stoff (2021K, 2022V, 2024V).
- **Signal-protokollen** (Double Ratchet, X3DH, post-compromise security) er blitt
  en gjenganger både i MCQ og som skriftlig Q (2021V, 2022V, 2023V).
- **TLS 1.3** (alltid forward secrecy, ingen RSA key transport, 0-RTT, kun AEAD)
  har erstattet mye av det gamle TLS 1.2-stoffet.
- **GCM / AEAD** og **ECDSA/ECDH** dominerer nå der 3DES/CBC+HMAC-SHA-1 sto før.

---

## 2. Temafrekvens

To målinger, siden faget har to atskilte oppgaveformer.

### 2A. Skriftlige oppgaver (Exercise 2) — sjangerfrekvens

Basert på 14 sett med fasit (2015V/K, 2016V/K, 2017V/K, 2018V/K, 2020V, 2021V/K,
2022V, 2023V, 2024V). Celleverdi = antall sett der sjangeren har minst én egen
skriftlig oppgave. Fordi hvert sett har 5–8 oppgaver som dekker de samme
hovedblokkene, treffer kjernesjangrene nesten hvert år.

| # | Skriftlig sjanger | Blokk | Score | Kommentar |
|---|---|---|---|---|
| 1 | **Klassisk chiffer + kryptoanalyse** (Hill, substitusjon, transposisjon, Vigenère, Autokey, OTP) | Symmetrisk | **14/14 = 100 %** | Nesten alltid Q1. Nøkkeltelling + valgt/kjent-klartekst |
| 2 | **Blokkchiffermodus / Feistel / DRBG** (dekrypteringsligning, feilforplantning, parallellitet, Feistel-brudd, MAC fra modus) | Symmetrisk | **14/14 = 100 %** | Nesten alltid Q2 |
| 3 | **Tallteori + RSA-regning** (invers, Euklid, square-and-multiply-telling, Fermat/Miller–Rabin, √1→faktoriser, CRT, φ(n)) | PK-matte | **14/14 = 100 %** | Ofte **to** oppgaver per sett; den kvantitative kjernen |
| 4 | **Diffie–Hellman / diskret log / ElGamal / autentisert nøkkelutveksling** | PK-matte | **10/14 = 71 %** | Verifiser generator, regn delt hemmelighet, forward secrecy |
| 5 | **Digitale signaturer** (RSA vs DSA-størrelser/hastighet, RSA-forfalskning d=−e, DSA/ElGamal nonce-gjenbruk, eksistensiell forfalskning) | Signatur | **8/14 = 57 %** | Klassisk nonce-gjenbruk-angrep er en fast favoritt |
| 6 | **TLS-handshake / ciphersuiter** (forward secrecy, RSA key transport vs ECDHE, versjonsnedgradering, 0-RTT, AEAD) | Protokoll | **8/14 = 57 %** | Roterer med Kerberos/Signal på Q5–Q6 |
| 7 | **Kerberos / Needham–Schroeder** (nonce/ID-sjekk, replay, maskerade) | Protokoll | **8/14 = 57 %** | Enten Kerberos ELLER N–S i nesten hvert eldre sett |
| 8 | **Signal / sikker meldingsutveksling** (DH-ratchet, hash-ratchet, X3DH, PCS) | Protokoll | **3/14 = 21 %** ↑ | Ny og voksende (2021–2023) |
| 9 | **E-postsikkerhet / metadata** (PGP vs STARTTLS, IPsec tunnelmodus, DKIM) | Protokoll | **3/14 = 21 %** | Sammenlign ende-til-ende vs lenke-sikkerhet |
| 10 | **PKI / sertifikater** (X.509-kjede, revokering, verifikasjonssteg) | PKI | **2/14 = 14 %** ↑ | Korona-sertifikat (2022V) — voksende |
| 11 | **MAC / hashfunksjon-egenskaper** (MAC vs signatur, kollisjonsresistens) | Hash/MAC | **3/14 = 21 %** | Ofte flettet inn i modus-/blokkchifferoppgaven |

### 2B. Flervalg (Exercise 1) — pensumsveip

Flervalgsdelen treffer **alle** temaene under, hvert år, med 1–4 spørsmål hver.
Scoren måler hvor sikkert temaet dukker opp som minst ett MCQ (basert på de
grundig leste settene 2017–2024). Dette er de billigste, mest drillbare poengene.

| Tema | Score | Typisk MCQ-innhold |
|---|---|---|
| **Modulær aritmetikk** (invers, φ(n), CRT-løsbarhet) | ~100 % | `2⁻¹ mod n`, `φ(105)`, hvilke kongruenser CRT løser |
| **Blokkchiffermoduser** (ECB/CBC/CTR/GCM: egenskaper + meldingsstørrelse) | ~100 % | «hvilken modus sender færrest bit», feilforplantning, GCM = integritet+konfid. |
| **AES/DES/3DES-fakta** (nøkkel-/blokkstørrelse, SPN vs Feistel, MITM på 2DES) | ~100 % | Gyldig AES-nøkkelstørrelse, Kerckhoffs, avalanche |
| **RSA-teori** (hvorfor dekryptering virker, e=2¹⁶+1, OAEP, √1→faktoriser) | ~100 % | `M^{ed} mod n = M`, hvorfor ikke lite d, faktorisering |
| **Hash/MAC + fødselsdagsparadoks** (utdatastørrelse for kollisjonsresistens) | ~90 % | «128-bit symmetrisk ⇒ 256-bit hash», MAC krever nøkkel |
| **Diskret log / DH / ECDH / generatorer** | ~90 % | Er 2/3 generator i Z*ₚ, DLP-definisjon, ECDH-delt hemmelighet |
| **Signaturer** (RSA vs DSA/ECDSA-størrelse, offentlig/privat nøkkelbruk) | ~90 % | «privat nøkkel signerer, offentlig verifiserer», ECDSA-fakta |
| **TLS 1.2 vs 1.3** (forward secrecy, ciphersuite-tolkning, key transport) | ~90 % | Tolk `TLS_RSA_WITH_AES_128_CBC_SHA256`, hva 1.3 fjerner |
| **Sertifikater / X.509 / PKI** | ~70 % | «sertifikatet må inneholde CAs signatur» |
| **Primalitet** (Fermat vs Miller–Rabin, Carmichael, prøvedivisjon) | ~70 % | M–R slår Fermat, √1 avslører sammensatt |
| **Klassiske chiffer + frekvensanalyse** (nøkkeltelling, angrepstyper) | ~80 % | Antall permutasjoner, passiv vs aktiv trussel, kjent-klartekst |
| **Strøm-/OTP** (perfekt hemmelighet, XOR-nøkkelstrøm, synkron) | ~70 % | «kjent-klartekst gir nøkkelstrømsbit», OTP-egenskaper |
| **Kvantetrussel / ECC-sikkerhetsnivå** | ~60 % ↑ | Harvest-now-decrypt-later, ECC-gruppestørrelse ≈ 2× symmetrisk |
| **IPsec / Kerberos / PGP / Signal (fakta)** | ~70 % | Tunnelmodus skjuler metadata, Kerberos ingen FS, PGP-headere |
| **Passord-lagring** (salting, ordboksangrep) | ~30 % | Salt hindrer forhåndsberegnet hash-ordbok |

### Viktigste funn

1. **Tre sjangre er praktisk talt garantert som skriftlig oppgave hvert år:**
   klassisk chiffer/kryptoanalyse (Q1), blokkchiffermodus/Feistel (Q2), og
   tallteori/RSA-regning (midtdel — ofte to oppgaver). Disse tre blokkene utgjør
   gjerne **3 av 5** skriftlige oppgaver og bør beherskes feilfritt.
2. **Faget har ingen «essay-eksamen»-natur.** Selv de konseptuelle oppgavene
   krever korte, presise svar med et konkret angrep eller en konkret egenskap —
   ikke lange drøftinger. Fasitene er gjennomgående på 2–6 setninger per deloppgave.
3. **Regnedelen er reell og sikker poeng.** Modulær invers, square-and-multiply-
   telling, RSA-CRT, Miller–Rabin-sekvenser, Hill-matriseinvertering mod n og
   DH-delt-hemmelighet har alle én entydig fasit og en fast oppskrift. Den som
   driller disse tar en stor, trygg grunnpott — både i MCQ og skriftlig.
4. **Protokoll-Q-ene roterer, men hviler på de samme prinsippene:** ferskhet
   (nonce/timestamp), identitetsbinding, forward secrecy og ende-til-ende vs
   lenke-sikkerhet. Kandidaten som forstår *disse fire aksene* kan svare på
   Kerberos, Needham–Schroeder, TLS og Signal med samme verktøykasse.
5. **Post-kvante og Signal er de klare vekstområdene.** Forvent begge fremover.

---

## 3. Oppgavetype-katalog (skriftlig)

De skriftlige sjangrene som faktisk går igjen, med fasitens foretrukne
løsningsmetode.

### A. Klassisk chiffer + kryptoanalyse (nesten alltid Q1)
- **Nøkkeltelling (skriv formel):** simpel substitusjon over `m`-tegns alfabet =
  `m!`; `d×d` Hill-chiffer ≈ `m^{d²}` (**men ikke alle matriser er invertible** —
  oppgi dette som øvre grense); simpel transposisjon på blokk av `b` tegn = `b!`;
  Vigenère med nøkkellengde `L` over `m`-tegns alfabet = `m^L`; Autokey har **samme**
  nøkkelrom som Vigenère.
- **Angrep:** *Hill, ciphertext-only:* bruk trigram-/digramfrekvenser til å gjette
  vanlige ord (THE, AND) → løs `K = C·P⁻¹` (eller `K = C·P⁻¹` for `C=KP`) når `P`
  er invertibel; prøv flere kandidater om gjettet er feil. *Hill, chosen-plaintext:*
  velg `P = I` (identitetsmatrisen) og les nøkkelen direkte ut som `C`, eller velg
  invertibel `P` og regn `K = CP⁻¹`. *Substitusjon, chosen-plaintext:* krypter hele
  alfabetet (`m` tegn) og les substitusjonen. *Transposisjon, chosen-plaintext:* ett
  blokk med `b` forskjellige tegn gir permutasjonen. *Vigenère/Autokey:* kjent-
  klartekst avslører skiftet posisjon for posisjon (`L` tegn holder for Vigenère).
- **Frekvensglatting:** transposisjon glatter trigram-/tegnfordelingen (flytter
  bokstaver ut av kontekst); simpel substitusjon *bevarer* tegnfordelingen (bare
  omdøpt); Hill glatter fordi hvert tegn krypteres ulikt avhengig av naboene.

### B. Blokkchiffermodus / Feistel / DRBG (nesten alltid Q2)
- **Dekrypteringsligning:** inverter krypteringsligningen algebraisk. Er `E` brukt
  som ren maske (`Ct = Ot ⊕ …`, `Ot = E(…)`), trengs **ingen dekryptering** — legg
  bare inn samme `Ot` igjen. Er `E` brukt direkte på klartekst (`Ct = E(…)`), krever
  dekryptering `D`.
- **Feilforplantning:** tell hvor mange (del)blokker som ødelegges av én bitfeil i
  `Ct`. Maske-/tellermoduser (CTR-lignende): kun **samme bit i samme blokk** endres.
  Kjedede moduser: feilen sprer seg til **neste** blokk (og videre om `Ct` mates inn
  igjen). Angi «én blokk helt tilfeldig + neste blokk én bit» eller lignende presist.
- **Parallellitet:** kryptering kan **ikke** parallelliseres når `Ct` avhenger av
  `Ct−1`; dekryptering **kan** ofte, siden alle `Ct−1` allerede er mottatt.
- **Feistel:** bruk rundeligningene `Li = Ri−1`, `Ri = Li−1 ⊕ f(Ri−1,Ki)`. Ved svak
  `f` (f.eks. `f(R,K)=R⊕K` eller `f` som ignorerer `R`), regn rekursivt bakover og
  vis at `(L_n,R_n)` blir `(L_0,R_0) ⊕` konstanter → knekk med ett kjent-klartekst-
  par. `f`-utdata må være **halv blokklengde**.
- **DRBG / tilstandskompromiss:** telleroppdatering (`S_{t+1}=S_t+1`) er invertibel
  ⇒ ved kompromiss på tid `t` får angriper **alle** blokker (fram OG tilbake). Legges
  det inn en **envegs-hash** `K'=h(K)` hver 100. blokk, blokkeres bakoverretningen —
  angriper får bare fra siste nøkkelbytte og framover.
- **MAC fra blokkchiffer/modus:** en «siste-blokk»-MAC eller `D(M,K)` er lett å
  forfalske hvis taggen bare avhenger av deler av meldingen (bytt to blokker med
  samme XOR, eller endre alt untatt siste blokk).

### C. Tallteori + RSA-regning (midtdel, kvantitativ kjerne — ofte to oppgaver)
- **Modulær invers:** utvidet Euklid, f.eks. `13 = 4·3+1 ⇒ 3⁻¹ = −4 = 9 mod 13`.
  Snarveier: `2⁻¹ mod n = (n+1)/2` for odde `n`.
- **Square-and-multiply:** tell kvadreringer (≈ bitlengden av eksponenten − 1) +
  multiplikasjoner (= antall 1-bit − 1). Oppgi begge eksplisitt fra binærrepr. av
  eksponenten.
- **CRT-fart:** `Mp = C^{d mod p−1} mod p`, `Mq = C^{d mod q−1} mod q`, kombiner med
  CRT. **CRT gir ~4× fart** fordi hver eksponentiering skjer med halv modulus (≈25 %
  av arbeidet), selv om antall multiplikasjoner er nesten uendret. Krever **faktorene**
  `p,q` — derfor kan CRT ikke brukes i «split-d»-oppsett (se under).
- **Primalitet:** Fermat (`a^{n−1} ≡ 1`) er svakere — Carmichael-tall (f.eks. 8911)
  lurer den. Miller–Rabin ser på sekvensen av kvadratrøtter: **mangler `−1` før man
  når 1 ⇒ sammensatt**. Vis mellomregningene.
- **√1 → faktorisering:** en ikke-triviell kvadratrot `x` av 1 mod `n` gir
  `gcd(x±1, n) > 1` (via Euklid) = en faktor ⇒ `φ(n)` ⇒ privatnøkkel. Samme idé:
  kjennskap til `(e,d)` lar deg faktorisere `n`; **felles primfaktor** i to moduler
  avsløres med `gcd`.
- **RSA-nøkkelgenerering:** `d = e⁻¹ mod φ(n)`, `c = m^e mod n`; `e` må være
  koprimt med `φ(n)`. Euler/Fermat er den gjennomgående begrunnelsen.
- **Split-d / hemmelighetsdeling:** `d = d1+d2 mod φ(n)` (eller `d1·d2`); vis at
  `C^{d1}·C^{d2} = C^{d1+d2} = C^d = M` (Euler). Drøft at én del alene lekker (nesten)
  ingenting (som engangsblokk), og at CRT ikke kan brukes uten å ødelegge poenget.

### D. Diffie–Hellman / diskret log / ElGamal
- **Verifiser generator:** sjekk ordenen. I `Z*ₚ` med `p` prim: `g` er generator hvis
  `g^{(p−1)/q} ≠ 1` for hver primfaktor `q` av `p−1`. Eks. `p=17`, `p−1=16=2⁴`: sjekk
  bare `g⁸ mod 17` — er den `−1` er `g` generator (3 er, 2 er ikke).
- **Delt hemmelighet:** regn `g^{ab}`; småtall løses ved prøving (bygg tabellen over
  `g^i`). ECDH: `A=aG`, `B=bG`, delt = `aB = bA`.
- **Autentisert DH med langtidsnøkler:** vis at begge regner samme nøkkel ved å
  skrive ut eksponentene (`g^{ax+by}`), og vis **manglende forward secrecy**: en
  angriper med kompromitterte `x,y` regner `A^x·B^y = g^{ax+by}` fra avlyttede `A,B`.
- **ElGamal:** ny `k` per melding (ellers avsløres `y^k` ved kjent-klartekst). Dekrypt
  `m = C1·(C2^z)⁻¹` e.l. avhengig av variant.

### E. Digitale signaturer
- **RSA vs DSA/ECDSA-størrelser:** RSA-signatur = 1 modulus-stor komponent; DSA =
  to `q`-store komponenter (kortere). Kort `e=2¹⁶+1` ⇒ ~17 multiplikasjoner ved
  verifisering vs ~`|n|` for tilfeldig `e` (ratio ~180–290:1). Regn ut offentlig-
  info-størrelse: RSA `(n,e)`; DSA `(p,g,y)` der `p,g` kan deles, `y` ikke.
- **Nonce-gjenbruk (fast klassiker):** samme `k` ⇒ samme `r`; da gir
  `s1−s2 = k(m1−m2) mod (p−1)` verdien `k`, deretter privatnøkkelen `x`.
- **RSA-forfalskning:** eksistensiell forfalskning — velg `s`, regn `m = s^e mod n`.
  Ved `d = −e mod φ(n)`: angriper regner `s = (h(m)^e)⁻¹` direkte. Derfor må
  hashen være kollisjonsresistent, og fast `d` er dødelig.

### F. Protokoller og anvendt sikkerhet (Q5–Q6, roterende)
- **Kerberos:** nonce for ferskhet mot replay; identiteten (`IDC`) i billetten hindrer
  maskerade; timestamp gjør Needham–Schroeder-angrepet ugyldig; ingen forward secrecy
  (langtidsnøkkel dekrypterer billetten). Billetter beskyttes med AEAD (GCM).
- **Needham–Schroeder:** manglende nonce-/identitetssjekk ⇒ replay eller
  identitetsbytte. Med strømchiffer i stedet for autentisert kryptering: malleabilitet
  lar angriper XOR-e inn et kjent felt (`IDB → IDC`).
- **TLS-handshake:** efemer DH ⇒ forward secrecy; RSA key transport ⇒ ingen FS
  (derfor «weak»); finished-meldingens hash over alle handshake-meldinger hindrer
  versjons-/ciphersuite-nedgradering (POODLE/SCSV); TLS 1.3 fjerner RSA key transport,
  krever AEAD, tillater tidlig keyshare og 0-RTT (med replay-risiko). Tolk
  ciphersuite-strenger (`TLS_RSA_WITH_AES_128_CBC_SHA256` ⇒ HMAC-SHA-256 gir
  record-integritet).
- **PKI/sertifikater:** verifiser signaturkjeden opp til en forhåndslastet
  rot-CA; revokering via CRL når en nøkkel lekker (Korona-sertifikat-oppgaven).
- **Signal:** DH-ratchet (ny delt hemmelighet ved retningsskifte ⇒ post-compromise
  security/selvheling) + hash-ratchet (envegs nøkkeloppdatering ved påfølgende
  meldinger samme vei ⇒ forward secrecy). X3DH bruker efemer `EK` mot replay.
- **Metadata/e-post:** **PGP** = ende-til-ende men skjuler ikke headere; **STARTTLS**
  = opportunistisk lenke-sikkerhet mellom e-postservere (må stole på dem); **IPsec
  tunnelmodus** kapsler inn IP-headere; **TLS** rører ikke IP-headere. Ekte forward
  secrecy er umulig for ren e-post (mottaker ikke online).

---

## 4. Sensorens krav

Destillert fra 14 offisielle løsningsforslag (Colin Boyd / Anamaria Costache).

### Faste metaregler
1. **Kort og utledningsdrevet.** Modellsvarene er 2–6 setninger per deloppgave.
   Skriv regnekjeden **kompakt** (særlig tallteori/RSA/DH), oppgi tallsvaret
   konkret, og forklar «hvorfor» i én–to setninger. Ingen lange essay.
2. **Vis mellomregningen.** I regneoppgavene forlanger fasiten eksplisitte steg
   («Show your working») — square-and-multiply-tellingen, Euklid-kjeden,
   Miller–Rabin-sekvensen, matriseinverteringen mod `n`. Rett tallsvar uten
   utregning gir sjelden full uttelling.
3. **Navngi teoremet.** Oppgi begrunnelsen som **Euler, Fermats lille teorem,
   Euklid, fødselsdagsparadokset** der det er naturlig — ikke bare «tallmagi».
   Fasitene skriver eksplisitt «applying Euler» / «by Fermat's theorem».
4. **Poeng deles likt på deler.** 6-poengsoppgave med tre deler ⇒ 2 poeng hver;
   delvis uttelling per del. En riktig del redder poeng selv om en annen bommer.
5. **Flervalg (gjeldende form):** ett kryss per spørsmål; **feil kryss trekker
   (−0,33), blankt gjør ikke.** Det lønner seg å svare når du kan eliminere minst
   ett alternativ, men rent gjett er marginalt negativt. (I 2020–2022-formen med
   begrunnelse kunne man få 0,5 poeng for å forklare hvorfor ett alternativ er galt.)

### Hva som skiller sterk fra svak besvarelse
- **Presisjon i regnedelen** (modulær invers, RSA-CRT, Miller–Rabin, DH-hemmelighet,
  Hill-matrise) er de sikreste poengene — én entydig fasit, ingen synsing.
- **Konkret angrep, ikke løs prat.** På protokolloppgaver forventer fasiten at du
  *skriver ned angrepsmeldingene* (hvilke verdier angriperen sender/bytter) og
  *konsekvensen* — ikke bare «protokollen er usikker».
- **Riktig retning på egenskapene:** forward secrecy = *langtidsnøkkel kompromittert
  SENERE* avslører ikke tidligere øktnøkler (ikke å forveksle med sanntidsangrep
  eller post-compromise security). Fasitene straffer sammenblanding.
- **Fasiten godtar flere korrekte varianter** der oppgaven er åpen (særlig PKI-/
  protokolldrøfting) — men krever at antakelsene forklares. Flere sett har eksplisitte
  «alternate answer»-varianter.

---

## 5. Typiske feil

1. **Telle Hill-nøkler som `m^{d²}` uten forbehold** — ikke alle matriser er
   invertible mod `m`; oppgi det som øvre grense.
2. **Glemme at matrisemultiplikasjon ikke er kommutativ** — rekkefølgen i
   `K⁻¹(C−L)` teller.
3. **Anta parallell kryptering i kjedede moduser** — umulig når `Ct` avhenger av
   `Ct−1`; men parallell *dekryptering* er ofte mulig.
4. **Feil feilforplantning** — glemme at maskemoduser bare endrer én bit i samme
   blokk, mens kjedede moduser sprer feilen til neste blokk.
5. **Regne square-and-multiply feil** — glemme å telle multiplikasjonene (= antall
   1-bit − 1) eller blande sammen kvadreringer og multiplikasjoner.
6. **Tro at CRT kan brukes i split-d-oppsett** — det krever faktorene, som er
   ekvivalent med å kunne hele `d` (og ødelegger hemmelighetsdelingen).
7. **Stole på Fermat-testen** — Carmichael-tall (8911, 341, 561) passerer Fermat
   men avsløres av Miller–Rabin via en ikke-triviell √1.
8. **Feil hash-størrelse mot fødselsdagsparadokset** — for `k`-bit symmetrisk
   sikkerhet trengs `2k`-bit hashutdata (128-bit AES ⇒ 256-bit hash), fordi
   kollisjoner finnes etter ~`2^{n/2}`.
9. **Kalle 3DES/SHA-1/CBC+HMAC «sikre»** — de er utdaterte/svekkede; TLS 1.2 RSA-
   key-transport-ciphersuiter klassifiseres som «weak» pga. manglende forward secrecy.
10. **Blande forward secrecy og post-compromise security** — FS handler om *tidligere*
    økter ved *senere* langtidsnøkkel-kompromiss; PCS/selvheling handler om å
    *gjenvinne* sikkerhet *etter* et kompromiss (Signal DH-ratchet).
11. **Hoppe over ferskhets-/identitetssjekk** i protokollanalyse — de fleste
    Kerberos-/Needham–Schroeder-angrepene bunner nettopp i manglende nonce/ID-sjekk.
12. **Forveksle offentlig/privat nøkkelbruk** — kryptering bruker mottakers
    *offentlige* nøkkel, dekryptering mottakers *private*; signering bruker
    signerers *private*, verifisering signerers *offentlige*.
13. **Skrive essay i stedet for konkret angrep/egenskap** — fasiten belønner
    kompakte, presise svar med tallsvar og navngitt teorem.

---

## 6. Formel- og algoritmeapparat

Læreboken bør bruke nøyaktig disse konvensjonene, siden oppgavene og fasitene gjør
det. Notasjon på engelsk der pensum er engelsk.

### Modulær aritmetikk og tallteori
- **Invers:** utvidet Euklid; `2⁻¹ mod n = (n+1)/2` (odde `n`).
- **Euler-φ:** `φ(pq) = (p−1)(q−1)`; `φ(n)` er alltid **partall** for `n>2`; Euler:
  `a^{φ(n)} ≡ 1 mod n` for `gcd(a,n)=1`; Fermat: `a^{p−1} ≡ 1 mod p`.
- **CRT:** løsbart når modulusene er parvis koprime; `x = Σ aᵢ Nᵢ (Nᵢ⁻¹ mod nᵢ) mod N`.
- **Square-and-multiply:** kvadreringer ≈ `⌈log₂ e⌉`, multiplikasjoner = (antall
  1-bit − 1).
- **Primalitet:** Fermat `a^{n−1} ≟ 1`; Miller–Rabin på `n−1 = 2^s·m`: sjekk
  `a^m, a^{2m}, …` for `−1` før 1. Ikke-triviell √1 ⇒ sammensatt ⇒ `gcd(x±1,n)` faktor.

### Symmetrisk krypto
- **Blokkchiffer:** `E(·,K)` er en permutasjon av blokkrommet for fast `K`. AES =
  SPN/iterert produktchiffer, nøkkel 128/192/256 bit, blokk 128 bit; DES/3DES =
  Feistel, blokk 64 bit; 3DES ~112-bit sikkerhet.
- **Feistel:** `Li = Ri−1`, `Ri = Li−1 ⊕ f(Ri−1,Ki)`; `f`-utdata = halv blokk.
- **Moduser:** ECB (lekker blokk-likhet), CBC (`Ct = E(Pt⊕Ct−1)`, IV), CTR
  (`Ct = Pt⊕E(N‖t)`, parallell), GCM (AEAD = konfidensialitet + integritet).
  Meldingsstørrelse: ECB/CTR minimal, CBC + IV størst.
- **OTP:** perfekt hemmelighet ved engangsbruk; gjenbruk ⇒ `C1⊕C2 = P1⊕P2`;
  kjent-klartekst ⇒ nøkkelstrømbit `K = P⊕C`.

### Hash og MAC
- Kollisjonsresistens: `n`-bit utdata gir `~2^{n/2}` sikkerhet (fødselsdag).
- MAC krever nøkkel (`T = MAC(M,K)`); hash gjør ikke. HMAC gir record-integritet i
  TLS. MAC ≠ signatur: MAC gir ikke ikke-benekting (delt nøkkel).

### Offentlig-nøkkel
- **RSA:** `n=pq`, `ed ≡ 1 mod φ(n)`, `c = m^e mod n`, `m = c^d mod n` (Euler);
  `e=2¹⁶+1` vanlig; OAEP randomiserer. Sikkerhet ⇔ faktorisering (subeksponentiell).
- **DH/DLP:** `g` generator i `Z*ₚ`; delt = `g^{ab}`; DLP: gitt `y=g^x`, finn `x`.
  ECDH: additiv notasjon, `aB=bA`. ECDLP kun eksponentielle angrep klassisk.
- **Signaturer:** RSA (1 komponent), DSA/ECDSA (to `q`-store komponenter);
  nonce-gjenbruk ⇒ `k` og `x` avsløres.
- **Kvante:** Shor bryter både faktorisering og (EC)DLP ⇒ RSA/DH/ECC faller;
  symmetrisk krypto/hash halveres (Grover). «Harvest now, decrypt later».

### Protokoller
- **Forward secrecy:** efemer DH; langtidsnøkkel-kompromiss senere avslører ikke
  gamle øktnøkler.
- **Kerberos:** billett `{KAB, IDA, …}` med AEAD, timestamp/nonce mot replay.
- **TLS 1.2 vs 1.3:** 1.3 = alltid (EC)DHE (FS), kun AEAD, ingen RSA key transport,
  0-RTT, tidlig keyshare; finished-hash hindrer nedgradering.
- **X.509/PKI:** sertifikat inneholder subjektets offentlige nøkkel + **CAs
  signatur**; verifiser kjede til rot-CA; CRL for revokering.
- **Signal:** DH-ratchet (PCS) + hash-ratchet (FS same-direction); X3DH med efemer EK.
- **Metadata:** PGP (ende-til-ende, headere åpne), STARTTLS (lenke, servertillit),
  IPsec tunnel (skjuler IP-header), TLS (rører ikke IP-header).

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes feilfritt (garantert hvert år, tunge poeng)
1. **Klassisk chiffer + kryptoanalyse** (skriftlig Q1, ~100 %): nøkkeltelling,
   Hill-matriseangrep (`P=I` / `K=CP⁻¹`), substitusjon/transposisjon/Vigenère
   chosen-plaintext, frekvensglatting.
2. **Blokkchiffermodus / Feistel / DRBG** (skriftlig Q2, ~100 %): dekrypteringsligning,
   feilforplantning, parallellitet, Feistel-brudd, tilstandskompromiss med/uten hash.
3. **Tallteori + RSA-regning** (midtdel, ~100 %, ofte to oppgaver): modulær invers
   (Euklid), square-and-multiply-telling, RSA-CRT, Fermat vs Miller–Rabin,
   √1→faktorisering, `d = e⁻¹ mod φ(n)`, split-d.
4. **Modulær aritmetikk + RSA/AES/modus-fakta i MCQ** (~100 %): de billigste
   poengene — `2⁻¹ mod n`, `φ(n)`, gyldige AES-størrelser, modus-egenskaper,
   ciphersuite-tolkning.
5. **Diffie–Hellman / diskret log** (skriftlig ~71 %, MCQ ~90 %): verifiser
   generator, delt hemmelighet, autentisert DH + forward secrecy.

### Nivå 2 — må kunne (avgjør de mellomstore oppgavene)
6. **Digitale signaturer** (~57 %): RSA vs DSA/ECDSA-størrelser/hastighet,
   nonce-gjenbruk-angrep, eksistensiell forfalskning.
7. **TLS 1.2 vs 1.3** (~57 % skriftlig, ~90 % MCQ): forward secrecy, RSA key
   transport vs ECDHE, versjonsnedgradering, 0-RTT, AEAD-krav.
8. **Kerberos / Needham–Schroeder** (~57 %): ferskhet, identitetsbinding, replay,
   maskerade — skriv angrepsmeldingene.
9. **Hash/MAC-egenskaper** (~high MCQ): fødselsdagsparadokset, MAC vs signatur.

### Nivå 3 — bør kjenne til (lavfrekvent, men fyller settet og vokser)
10. **Signal / Double Ratchet / X3DH** (~21 %, ↑): FS vs post-compromise security.
11. **PKI / X.509 / sertifikatkjede + revokering** (~14 %, ↑).
12. **E-postsikkerhet / metadata** (PGP, STARTTLS, IPsec, DKIM, ~21 %).
13. **Post-kvante / kvantetrussel** (MCQ ~60 %, ↑): Shor, harvest-now-decrypt-later,
    ECC-sikkerhetsnivåer.
14. **Passord-lagring / salting**, **trusselklassifisering** (passiv/aktiv) — lette MCQ.

### Prognose for neste ordinære eksamen
Forvent gjeldende form: **30 fire-alternativs flervalg (30 p) + 5 skriftlige
oppgaver (30 p), 3 timer, hjelpemiddelkode D, feil MCQ −0,33**. Skriftlig del:
Q1 klassisk chiffer/kryptoanalyse; Q2 blokkchiffermodus eller Feistel/DRBG; én–to
tallteori/RSA-oppgaver (invers, square-and-multiply, CRT, primalitet, eller
split-d); én DH/signatur-oppgave; og én roterende protokolloppgave (TLS 1.3,
Kerberos, Signal eller PKI). Flervalg feier hele pensum med tydelig vekt på modulær
aritmetikk, moduser, RSA/hash-fakta, TLS og — økende — post-kvante og Signal.

**Studenten som driller modulær invers, square-and-multiply-telling, RSA-CRT,
Miller–Rabin-sekvensen, Hill-matriseangrepet og DH-generator/delt-hemmelighet til
feilfrihet — og som kan skrive konkrete protokollangrep med ferskhet/identitet/
forward-secrecy-vokabularet — tar en stor og trygg grunnpott på begge deler.**

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TTM4135/`.

**Løsningsforslag («Outline answers») lest grundig (fagansvarlig Colin Boyd,
2024 Anamaria Costache):**
`TTM4135-2023V-LF.pdf`, `TTM4135-2022V-LF.pdf`, `TTM4135-2021V-LF.pdf`,
`TTM4135-2021K-LF.pdf`, `TTM4135-2020V-LF.pdf`, `TTM4135-2018V-LF.pdf`,
`TTM4135-2018K-LF.pdf`, `TTM4135-2017V-LF.pdf`, `TTM4135-2017K-LF.pdf`.

**Oppgavesett lest grundig:** `TTM4135-2024V.pdf` (ingen LF i arkivet),
`TTM4135-2023V.pdf`, `TTM4135-2021V.pdf`, `TTM4135-2021K.pdf`, `TTM4135-2020V.pdf`,
`TTM4135-2018V/K.pdf`, `TTM4135-2017V/K.pdf`.

**Skummet for temadekning (eldre form, «Information security»):**
`TTM4135-2016V-LF.pdf`, `TTM4135-2016K-LF.pdf`, `TTM4135-2015V-LF.pdf`,
`TTM4135-2015K-LF.pdf` (+ tilhørende oppgavesett). Også `TTM4135 Lab
Description 2011.pdf` (praktisk lab, bakgrunn for mappevurderingens 40 %-del).

**Fagbeskrivelse:** omskrevet sammendrag av NTNUs emnebeskrivelse for TTM4135
(scratchpad: `fagbeskrivelse-ttm4135.md`; kilde:
<https://www.ntnu.no/studier/emner/TTM4135>). Pensumbok: **Stallings,
*Cryptography and Network Security*** + fagansvarligs forelesningsnotater.

**Merknader om kildene:**
- **Formen er svært stabil i sjanger, men har variert i telling** (se del 1):
  30 vs 15 MCQ, 4 vs 3 alternativer, 5 vs 6–8 skriftlige, ulik trekksats. Den
  grundige lesningen prioriterer 2017–2024; 2020–2022 er markert som ikke
  representativ for gjeldende MCQ-form (koronahjemmeeksamen).
- **2024V finnes kun som oppgavesett** (ingen LF i arkivet); svarene er utledet mot
  det svært like 2023V-settet og øvrige fasiter.
- **2022V finnes kun som løsningsforslag** (ingen egen oppgave-PDF), men LF-en
  gjengir oppgaveteksten.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og
  sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen
  oppgavetekster, fasiter eller løsningsforslag er gjengitt ordrett. Tallverdier,
  standardnotasjon, algoritmer, protokollnavn og fagbegreper er allmenn faglig
  kunnskap og ikke opphavsrettslig beskyttet tekst.
