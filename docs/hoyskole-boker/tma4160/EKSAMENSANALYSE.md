# Eksamensanalyse: TMA4160 Kryptografi (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok (fase 1 i produksjonsløypa). Bygger på **~40 filer** i arkivet, som spenner fra 2001 til 2024. Følgende er lest **grundig**: alle offisielle løsningsforslag (2013–2019 + partielle 2020–2024) og oppgavesettene fra de siste ~8 årene (2017, 2018, 2019, 2020, sommer-2021, 2021, 2022, 2023, 2024). Eldre sett (2001–2016) er skummet for tema og oppgavetype. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller fasitformuleringer. Matematiske uttrykk, algoritmenavn og standardnotasjon (RSA, ElGamal, Diffie–Hellman, IND-CPA, osv.) er allmenn fagnotasjon og ikke opphavsrettslig beskyttet. Analysen er kvantitativ der kildene tillater det.

> **Hovedfunn (les dette først):** TMA4160 er **ikke** et stabilt emne på samme måte som f.eks. TMA4135 — det har gjennomgått **to store regimeskift** som fullstendig endrer hva eksamen tester. (1) **Den klassiske epoken (2001–2019, Gjøsteen/Lund/Galteland m.fl.)** er tungt **beregningsorientert tallteori**: klassiske chiffer å knekke for hånd, diskret-logaritme-algoritmer (Baby-step Giant-step, Pohlig–Hellman, Pollard ρ, indekskalkulus), faktorisering (Fermat, Pollard ρ, Pollard p−1, kvadratisk sil), elliptiske kurver med **eksplisitt punktregning og punkttelling** (Hasses teorem), RSA/Rabin/ElGamal/Schnorr/blindsignaturer, Jacobi-symbol og kvadratiske rester. Oppgavene er «regn ut / knekk dette for hånd»-oppgaver. (2) **Den moderne epoken (2020–2024, Jiaxin Pan)** er tungt **beviselig-sikkerhet-orientert** etter læreboka til Boneh–Shoup: sikkerhetsspill (IND-CPA/CCA, UF-CMA, semantisk sikkerhet, anonymitet), reduksjonsbevis (CDH ⇐ SqDH), PRF/PRG/PRP, MAC-forfalskninger, negligible-funksjoner, og angrep på «lekebok»-skjemaer. Her er oppgavene «vis at dette er (u)sikkert»-oppgaver med spilldiagrammer. (3) **De aller nyeste settene (2023–2024)** blander begge og legger til **gitter-basert / post-kvante-krypto** (Ring-LWE-lignende skjema med norm-ulikheter). **En eksamensrettet bok må dekke BEGGE tradisjonene**, fordi arkivet ikke gir noen garanti for hvilket regime som gjelder ved neste eksamen — men vektlegg den moderne beviselig-sikkerhet-linjen tyngst for kommende sett, siden den har vært enerådende 2020–2024.

> **Overlapp mot TMA4150 Algebra (arbeidsdeling):** Kryptografien bygger direkte på **grupper, ringer og endelige kropper** — syklisk gruppe `⟨g⟩` av primtallsorden, `Z_n^*`, `F_q`, `F_2[x]/(p(x))`, Lagranges teorem, gruppeorden, isomorfier (CRT som ringisomorfi). Disse **grunnbegrepene** analyseres og dekkes primært i TMA4150-analysen; her forutsettes de kjent og behandles kun i den grad kryptografien **anvender** dem (f.eks. konstruksjon av `F_16` for AES-S-boks, orden av elementer i `Z_n^*`, CRT for å faktorisere). Alt **kryptografi-spesifikt** stoff (chiffer, protokoller, sikkerhetsbevis, angrep, DL/faktorisering-algoritmer, ECC-krypto) dekkes fullt ut nedenfor.

---

## 1. Eksamensform og utvikling

Skriftlig skoleeksamen, **4 timer (som regel 09:00–13:00)**, bokstavkarakter A–F, 7,5 studiepoeng. Emnet er aktivt. Fast instruks på de fleste settene: **«Vis utregningen / begrunn alle svar»** (klassisk epoke: «Show your work / All answers must be justified»). Bare fasit uten begrunnelse gir ikke full uttelling — unntatt eksplisitt merkede fler­valgs-/avkryssingsdeler.

### Formathistorikk

| Periode | Foreleser (kontakt) | Struktur | Preg |
|---|---|---|---|
| **2001–2012** | Rudakov, Buan, Petrides, Gjøsteen m.fl. | 4–7 likeverdige oppgaver, «alle teller likt», håndregning | Ren tallteori/algebra: CRT, DL-relasjoner, RSA-nøkkelgenerering, `F_q`-konstruksjon, LFSR/strømchiffer, Shamir hemmelighetsdeling |
| **2013–2019** | **Gjøsteen** (+ Lund 2014, Galteland 2017) | 4–6 oppgaver med deloppgaver, ofte poeng i prosent (10 % per del) | **Klassisk høydepunkt:** klassiske chiffer, DL-algoritmer, faktorisering, ECC-punktregning + Hasse, avanserte signaturer (blind, Rabin, Lamport, ring-signatur), gitter |
| **2020** | **Pan** (hjemme-eksamen, korona) | 6 oppgaver, delvis Inspera-randomisert (system velger 2 av 5) | **Regimeskift:** PRG-sikkerhet, negligible-funksjoner, MAC UF-CMA, trapdoor-kollisjon, ElGamal-formbarhet, Schnorr engangs-signatur |
| **2021 (des) + sommer-2021** | **Pan** | 6–9 oppgaver, sum **100 poeng**; Inspera-fler­valg (oppg. 1–2) + håndskrevet (oppg. 3–6) | Beviselig sikkerhet: sant/usant, negligible, `Enc(Enc(m))=m`-angrep, PRF-basert kryptering, tekstbok-RSA-signatur, DDH-basert PKE-bevis |
| **2022** | **Pan** | 6 oppgaver, sum 100 poeng, Inspera + håndskrevet | «Sikker eller ikke»-PRF-kvitt, `Enc(Enc(m))=m`, **Square-DH-reduksjon**, MAC-forfalskning, DLog-basert signatur (UF-KOA), **anonym PKE** (RSA ikke anonym, hashet ElGamal anonym) |
| **2023** | (etterfølger; Schnorr-ID-tung) | 5 «exercises» med poeng (5–30); **eksplisitt flervalgsdel** (−2 for feil svar) | Flervalg (confidentiality/malleability/hash), dobbel-OTP-brudd, **Schnorr-ID + 2-special-soundness (witness-ekstraksjon)**, signatur-som-commitment (hiding/binding), lang-melding-ElGamal + **IND-CPA-bevis** |
| **2024** | (samme tradisjon) | 5 problemer / 10 delproblemer, hver 10 % | Substitusjonschiffer-flervalg, **ECC-punktregning + DL via kjent-multipler**, **Ring-LWE-lignende gitterskjema** (norm-ulikheter, dekryptering, homomorfi), **CDH ⇐ SqDH-reduksjon**, **anonym PKE under CCA** (ElGamal ikke anonym) |

### Konstanter på tvers av alle år
- **4 timer, 4–10 oppgaver, håndregning + (fra 2020) sikkerhetsargumentasjon.**
- **Hjelpemidler, klassisk epoke (kode B):** *alt* trykt og håndskrevet materiale tillatt + en bestemt enkel kalkulator. Dette er svært åpent — eksamen tester derfor **metode og forståelse**, ikke pugging. En eksamensrettet bok bør trene studenten på å *bruke* referansemateriale effektivt (lage eget algoritme-/formelark).
- **Hjelpemidler, moderne epoke:** hjemme-eksamen (2020) og deretter Inspera-baserte sett med fler­valgs­deler auto-rettet i systemet + håndskrevne bevisdeler.
- **Konsistenssjekk innebygd:** flere klassiske sett ber deg løse samme problem med to ulike metoder (Pohlig–Hellman *og* BSGS på samme DL), og påpeker at svarene skal stemme overens — en fin selvkontroll.
- **Delpunkt-kjeding:** senere delpunkt bruker resultat fra tidligere (typisk: finn punkt-multipler, bruk dem til punkttelling; finn `logg h`, bruk det til å lage en signatur).

### Regimeskiftene (viktigste strukturfunn)
1. **2019 → 2020: fra beregning til bevis.** Med Jiaxin Pan skifter emnet lærebok og filosofi fullstendig. Der Gjøsteen ba deg *regne ut* `logg x` med Pohlig–Hellman, ber Pan deg *bevise* at et skjema er IND-CPA-sikkert under DDH. Nesten ingen håndregning i tallteori i 2020–2022.
2. **2023 → 2024: gjeninnføring av beregning + gitter.** De siste to settene tar tilbake ECC-punktregning og klassiske chiffer (som flervalg), og **introduserer gitter-/Ring-LWE-krypto** med norm-analyse — en ny, tung primærsjanger som reflekterer post-kvante-dreiningen i faget internasjonalt.

### Usikkerhetsmoment (kritisk for prognosen)
Fordi emnet har byttet regime to ganger på fem år, er **prognosen mer usikker enn for stabile matematikkemner**. Boken bør være robust mot begge tradisjoner. Den tryggeste antakelsen for neste sett: en **blanding** — noen flervalg (chiffer/hash/gruppe-egenskaper), én ECC- eller tallteori-beregningsoppgave, én gitter-oppgave, og flere beviselig-sikkerhet-oppgaver (reduksjon, angrep på lekebok-skjema, sikkerhetsdefinisjon).

---

## 2. Temafrekvens-tabell

Celleverdi = antall sett i perioden der temaet forekommer som minst én (del)oppgave. Basert på **~22 velkarakteriserte sett** fordelt på: **Periode K (klassisk, 2003–2019, ~13 sett)** og **Periode M (moderne, 2020–2024, ~8 sett: H2020, sommer-2021, H2021, H2022, H2023, H2024 + delvis 2020-varianter)**. Eldre OCR-skadede sett (2001, 2002) er kun grovt kategorisert.

| Tema | K (~13) | M (~8) | **Gjenganger-score** | Merknad |
|---|---|---|---|---|
| **Elliptiske kurver: punktregning, orden, punkttelling (Hasse)** | 11 | 2 | **≈ 13/21 = 62 %** | Bærebjelke i K; kom tilbake i 2024 |
| **Diskret-logaritme-algoritmer** (BSGS, Pohlig–Hellman, Pollard ρ, indekskalkulus, DL fra relasjoner) | 12 | 1 | **≈ 13/21 = 62 %** | Nesten alltid i K; grunnlag i M |
| **RSA** (nøkkelgenerering, kryptering/dekryptering, `φ(N)`, svakheter, angrep) | 10 | 4 | **≈ 14/21 = 67 %** | Går igjen i begge epoker |
| **Signaturer** (RSA/ElGamal/Schnorr/Rabin/Lamport/blind + UF-CMA/UF-KOA) | 8 | 6 | **≈ 14/21 = 67 %** | Klassisk: konstruksjon; moderne: forfalskning/bevis |
| **ElGamal-kryptering** (dekryptering, formbarhet, homomorfi, angrep) | 7 | 6 | **≈ 13/21 = 62 %** | Svært stabil favoritt |
| **Faktorisering** (Fermat, Pollard ρ, Pollard p−1, kvadratisk sil / `x²≡y²`) | 9 | 1 | **≈ 10/21 = 48 %** | Nesten kun K |
| **Beviselig sikkerhet: sikkerhetsspill/definisjon + reduksjon** (IND-CPA/CCA, semantisk, DDH/CDH) | 1 | 8 | **≈ 9/21 = 43 %** | Definerer M-epoken |
| **CRT (kinesisk restteorem)** — anvendt i faktorisering, ECC-mod-`n`, punkttelling | 8 | 1 | **≈ 9/21 = 43 %** | Verktøy, sjelden egen oppgave |
| **Diffie–Hellman-antakelser** (CDH, DDH, Square-DH + reduksjoner mellom dem) | 3 | 5 | **≈ 8/21 = 38 %** | Tung i M (SqDH-reduksjon 2× + 2024) |
| **Jacobi/Legendre-symbol + kvadratiske rester** | 7 | 0 | **≈ 7/21 = 33 %** | Rent K-tema |
| **MAC** (poly-MAC engangs, PRF-basert, encrypted-hash, UF-CMA + forfalskning) | 4 | 4 | **≈ 8/21 = 38 %** | I begge, ulik smak |
| **Klassiske chiffer** (shift, affin, substitusjon, Hill — knekk for hånd) | 6 | 1 | **≈ 7/21 = 33 %** | K-favoritt; flervalg i 2024 |
| **Endelige kropper / polynomaritmetikk** (`F_q`, `F_2[x]/(p)`, irreducibilitet, AES-S-boks) | 6 | 1 | **≈ 7/21 = 33 %** | Overlapp mot TMA4150 |
| **Hash-funksjoner** (kollisjonsresistens, trapdoor-kollisjon, DL-/RSA-hash, 2. pre-image) | 3 | 4 | **≈ 7/21 = 33 %** | |
| **PRG/PRF/PRP** (definisjon, sikkerhet, konstruksjon) | 0 | 6 | **≈ 6/21 = 29 %** | Rent M-tema |
| **Negligible-funksjoner** (avgjør/bevis) | 0 | 5 | **≈ 5/21 = 24 %** | Rent M, fast «gratis»-oppgave |
| **Gitter / Ring-LWE / post-kvante** (basis, closest vector, norm-ulikheter, gitter-PKE) | 1 | 1 | **≈ 2/21 = 10 %** | Stigende: 2015 (GGH-lignende) + 2024 (Ring-LWE) |
| **Anonym PKE** (definisjon + RSA/ElGamal ikke anonym, hashet ElGamal anonym) | 0 | 3 | **≈ 3/21 = 14 %** | Ny M-sjanger (2022, 2024) |
| **One-time pad / perfekt sikkerhet** (kjent-klartekst, dobbel-OTP-brudd) | 1 | 3 | **≈ 4/21 = 19 %** | |
| **Blokkchiffer-moduser** (ECB/CBC/CTR-sikkerhet) + AES som PRP | 1 | 3 | **≈ 4/21 = 19 %** | |
| **Shamir hemmelighetsdeling / Lagrange-interpolasjon over `F_q`** (juksesjekk) | 3 | 0 | **≈ 3/21 = 14 %** | K-tema |
| **Strømchiffer / LFSR** (bryt via kjent klartekst) | 2 | 0 | **≈ 2/21 = 10 %** | Kun eldste K |
| **Side-kanal / timing-angrep** (square-and-multiply-lekkasje) | 1 | 0 | **≈ 1/21 = 5 %** | |
| **Elektronisk stemmegivning / homomorf telling** | 1 | 0 | **≈ 1/21 = 5 %** | ElGamal-anvendelse (2019) |

**Viktigste funn:**
1. **Fem stabile søyler går igjen på tvers av begge epoker:** RSA, ElGamal, signaturer, elliptiske kurver og diskret logaritme. En bok som behersker disse fem perfekt dekker mesteparten av poengene uansett regime.
2. **Beviselig sikkerhet (reduksjoner, sikkerhetsspill, IND-CPA/CCA, UF-CMA)** er den definerende moderne søylen (43 %, men **~100 % innen 2020–2024**). Dette er det tyngste å lære for studenter med regnebakgrunn og må prioriteres høyt.
3. **DH-antakelser og reduksjoner mellom dem** (spesielt Square-DH ⇒ CDH, som dukket opp i *tre* moderne sett) er en gjenganger-mal — samme reduksjonsidé, ulik innpakning.
4. **Gitter/Ring-LWE er stigende** og en obligatorisk primærsjanger for kommende sett, selv om frekvensen historisk er lav (kun 2015 og 2024). Post-kvante-dreiningen gjør dette til et sannsynlig framtidstema.
5. **Rent klassisk-beregningstunge temaer** (Jacobi-symbol, faktorisering for hånd, klassiske chiffer, LFSR, Shamir) er «avtakende» men **ikke utdødd** — 2024 tok tilbake både chiffer (som flervalg) og ECC-punktregning. Behold dem som solid dekket beredskap.

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen, med løsningsforslagets foretrukne metode (verifisert mot de offisielle fasitene der de finnes).

### A. Klassiske chiffer — knekk for hånd
- **Krav:** Gjenkjenn chifferet og bruk struktur. **Shift/Cæsar:** uttømmende søk over 26 nøkler (fasiten stopper ved første plausible engelske klartekst). **Affin (`c = a·m + b`):** bruk kjent klartekst-fragment (f.eks. «meldingen begynner med OR» eller et tema-hint) til å sette opp to lineære likninger mod 26, løs for `(a, b)` — husk `a` må være invertibel mod 26. **Substitusjon:** frekvensanalyse / gjett-og-sjekk. **Hill (blokkstørrelse 2):** kjent klartekst gir `C = A·K`, løs `K = A⁻¹C` med matriseinvers mod 26.
- **Frekvens:** 33 % (K-favoritt; 2024 som flervalg).
- **Omskrevet eksempel:** «Du har fanget opp chifferteksten `avvlhzf` og tror shift-chiffer er brukt. Finn en plausibel dekryptering.» (2018)

### B. Diskret logaritme via generiske algoritmer
- **Krav:** **Baby-step Giant-step (Shanks):** velg `L ≈ √p`, lag babystep-tabell `gⁱ`, ta giantsteps `x·g^(−jL)` til treff. **Pohlig–Hellman:** faktoriser gruppeorden, løs `logg x` modulo hver primtallspotens, sett sammen med CRT. **DL fra relasjoner:** gitt en likning som `g^a·y^b = g^c·y^d`, ta logaritmer for å få lineær kongruens i eksponenten, løs (pass på ikke-invertible koeffisienter — da får du bare svaret mod en divisor, og må sjekke kandidater). **Pollard ρ / parallell ρ:** syklussøk med iterasjonsfunksjon partisjonert i `S₁,S₂,S₃`.
- **Frekvens:** 62 %. Ofte med eksplisitt «bruk metode X *og* metode Y og sjekk at svarene stemmer».
- **Omskrevet eksempel:** «Bruk Pohlig–Hellman *og* Shanks til å beregne `log₆ 51` i `F*₂₇₁`.» (2017)

### C. Faktorisering av `n = pq`
- **Krav:** **Fermat:** finn `n + k²`-typen slik at `n = a² − b²` (nær-like primtall). **Pollard ρ:** `f(x) = x² + 1`, Floyd-syklussøk, `gcd(sᵢ − tᵢ, n)`. **Pollard p−1:** beregn `gcd(a^{B!} − 1, n)`. **`x² ≡ y²`-metoden (kvadratisk sil / relasjoner):** kombiner glatte relasjoner `rᵢ² ≡ ∏ℓⱼ^{sⱼ}` til et kvadrat på begge sider, `gcd(x − y, n)`. **Via `φ(N)`:** løs `N = pq`, `φ(N) = (p−1)(q−1)` som system.
- **Frekvens:** 48 % (nesten kun K).
- **Omskrevet eksempel:** «Bruk Pollard ρ med `f(x)=x²+1` og startverdi 14 til å faktorisere `n = 28673`.» (2013)

### D. Elliptiske kurver: punktaritmetikk, orden, punkttelling
- **Krav:** **Punktaddisjon:** `α = (y₂−y₁)/(x₂−x₁)` (distinkte punkt) eller `α = (3x₁²+A)/(2y₁)` (dobling), så `x₃ = α² − x₁ − x₂`, `y₃ = α(x₁−x₃) − y₁` — all aritmetikk i `F_p`. **Rask punkt-multiplikasjon** (double-and-add) for `kP`. **Orden av punkt:** finn minste `k` med `kP = O`; punkt med `2P` på `y = 0` har orden 2/4. **Punkttelling:** bruk Hasses teorem `|#E − (p+1)| ≤ 2√p` til å begrense intervallet, kombiner med kjent punktorden (Lagrange) og evt. CRT til å nagle `#E`. **Syklisk?** ja hvis det finnes et punkt av orden `#E`. **DL på kurven (`log_P Q`):** bruk gitte multipler / lineære relasjoner mellom `P, Q, R` mod gruppeorden.
- **Frekvens:** 62 %. Bærebjelke i K, tilbake i 2024.
- **Omskrevet eksempel:** «`E: Y² = X³ − X + 15` over `F₁₉`, `P = (3,1)`. Regn ut `16P` med rask punkt-multiplikasjon og vis `16P = −P`. Bestem antall rasjonale punkter. Er kurven syklisk?» (2016)

### E. RSA — bruk, nøkkelgenerering, svakheter
- **Krav:** Standard-RSA: `c = mᵉ mod n`, dekrypter med `d = e⁻¹ mod φ(n)` (evt. mod `lcm(p−1,q−1)` for fart). Argumentér for **hvorfor bestemte nøkkel­genererings-oppskrifter er usikre** (delt `n`, delt `p`, forutsigbar `q = nextprime(...)`, `q = nextprime(p+1)` ⇒ Fermat). **Determinisme-angrep:** siden lekebok-RSA er deterministisk kan Eve kryptere en liten kjent meldingsmengde og matche (motmiddel: randomisert padding). **`e` må være odde** (ellers kan `e | φ(N)`). **Fra `φ(N)`:** faktoriser `n`.
- **Frekvens:** 67 %.
- **Omskrevet eksempel:** «Fire oppskrifter foreslås for effektiv RSA-nøkkel­generering. Forklar hvorfor ingen bør brukes.» (2006)

### F. ElGamal — kryptering, formbarhet, homomorfi, angrep
- **Krav:** Kryptering `(g^r, y^r·m)` (eller på ECC `(rP, rQ + M)`). **Dekryptering** med hemmelig `a`. **Formbarhet:** gitt chiffer av `m`, lag chiffer av `m·m'` uten å dekryptere (gang `y^r·m` med `m'`). **Homomorfi:** gang to chiffer komponentvis ⇒ chiffer av produktet (grunnlag for homomorf stemmetelling). **Angrep ved gjenbrukt randomness** (`r₁ = r₂` ⇒ `C₁/C₂ = M₁/M₂`). **Kjent-klartekst gir ikke bruddt** (bare `g^{xr}`, ikke `x`, pga. DL-hardhet).
- **Frekvens:** 62 %.
- **Omskrevet eksempel:** «Du har to ElGamal-chiffer med samme `R`. Hva kan du utlede om `M₁, M₂`?» (sommer-2021)

### G. Signaturskjemaer — konstruksjon (klassisk)
- **Krav:** **RSA-signatur:** `σᵉ ≡ h(m)`. **Blind signatur:** Alice blinder `t = rᵉh(m)`, Bob signerer `τ = tᵈ`, Alice avblinder `σ = τr⁻¹` — vis korrekthet + at Bob ikke lærer `m`. **Rabin-signatur** (kvadratrøtter mod `n = pq` med `p,q ≡ 3 mod 4`, Jacobi-symbol-triks). **Schnorr-signatur** (`v = H(m, g^r)`, `w = r + av`). **Lamport engangs-signatur** (hash-basert; forfalskning ved to meldinger som skiller i ≥2 posisjoner). **ElGamal-signatur** (`γ = g^k`, `δ = (m − aγ)k⁻¹`).
- **Frekvens:** del av 67 %-signaturblokken (K-siden).

### H. Signatur-/MAC-angrep og sikkerhetsbevis (moderne)
- **Krav:** **Tekstbok-RSA-signatur ikke UF-CMA:** be om signatur på `m`, lag forfalskning `(m·xᵉ, σ·x)`. **Nonce-gjenbruk i Schnorr:** to signaturer med samme `r` (eller kjent `r`) ⇒ løs ut hemmelig nøkkel. **2-special soundness (Schnorr-ID):** to gyldige transkript med samme commitment, ulik challenge ⇒ ekstraher witness `w = (resp₁−resp₂)/(ch₁−ch₂)`. **MAC-forfalskning:** finn kolliderende input som nuller ut PRF-ledd. **UF-KOA/UF-CMA-bevis:** reduser til DLog (embed DLog-instans i pk, ekstraher `x` fra forfalskningen).
- **Frekvens:** del av 67 %-signaturblokken (M-siden), stigende.
- **Omskrevet eksempel:** «Vis at tekstbok-RSA-signatur ikke er UF-CMA-sikker.» (2021)

### I. Beviselig sikkerhet: definisjon, spill og reduksjon
- **Krav (kjernesjangeren i M):** **Definer et sikkerhetsspill** i forelesningsstil (utfordrer ↔ angriper, med `b ← {0,1}`, utfordring-chiffer, gjett `b̂`, fordel `= |Pr[b̂=b] − ½|`). **Reduksjonsbevis:** gitt en angriper mot skjema X, konstruer en løser for antakelse Y — tegn reduksjonsdiagrammet, embed instansen i pk/utfordring, argumentér for at simuleringen er korrekt fordelt (nøkkelgrepet: hvis `z = xy` er simuleringen ekte; hvis `z` er tilfeldig er utfordringen uavhengig av `b`). **CDH ⇐ SqDH:** kall SqDH-løseren på `xy`, `x`, `y` og kombiner `(xy)² / (x²·y²)`-typen for å isolere `g^{xy}` (tell antall orakelkall). **IND-CPA under DDH** for ElGamal-varianter.
- **Frekvens:** 43 % totalt, ~100 % i M-epoken.
- **Omskrevet eksempel:** «Vis at CDH reduserer til Square-DH: gitt en SqDH-løser, konstruer en CDH-løser. Hvor mange kall til SqDH-løseren trengs?» (2024)

### J. PRG/PRF, negligible-funksjoner og MAC-korrekthet (moderne «gratis»-poeng)
- **Krav:** **Negligible:** avgjør om `f(λ)` er neglisjerbar (raskere enn invers-polynom); bevis lukning under addisjon/multiplikasjon; gi moteksempel for kvotient. **PRG-sikkerhet:** avgjør om en konstruksjon `H(s₁‖s₂)` er sikker PRG (typisk usikker hvis output lekker `s₁` eller er lineær). **PRF ⇒ kryptering:** beskriv dekryptering + korrekthet, avgjør semantisk sikkerhet, gi CPA-angrep (stream-cipher-typen: to like klartekster gir likt chiffer).
- **Frekvens:** ~29 % PRG/PRF, 24 % negligible — faste, relativt greie deloppgaver i M.

### K. Gitter / Ring-LWE (stigende primærsjanger)
- **Krav:** **Gitter-grunnlag:** basis `B`, closest-vector via avrunding `⌊zB⁻¹⌉B`, unimodulær `U` (heltalls, invertibel) knytter to baser til samme gitter. **GGH-lignende PKE** (2015): offentlig «stygg» basis `B' = UB`, dekrypter med «pen» basis + rund av. **Ring-LWE-lignende (2024):** arbeid i `R = F_q[X]/(Xⁿ+1)`; bevis **norm-ulikheter** (`‖ub‖∞ ≤ |u|‖b‖∞`, `‖a+b‖∞ ≤ ‖a‖∞+‖b‖∞`, `‖b‖₁ ≤ n‖b‖∞`, produktformel med reduksjon mod `Xⁿ+1`); vis at `‖w − xs‖∞` er begrenset, foreslå dekryptering og finn nødvendig `q`; vis additiv homomorfi.
- **Frekvens:** 10 %, men **primærmål framover** (post-kvante).

### L. Jacobi/Legendre-symbol og kvadratiske rester
- **Krav:** Beregn Jacobi-symbol via kvadratisk resiprositet + reduksjonsregler. **Kvadrat mod `n = pq`** (`(p−1)/2, (q−1)/2` primtall): karakteriser kvadrater, vis `−1` har Jacobi-symbol 1 men er ikke-kvadrat, bruk `J/Q`-struktur til å bygge Goldwasser–Micali-lignende PKE. **Kvadratrot ⇒ faktorisering** (Rabin/oblivious transfer: fire røtter, `gcd(z−x, n)`).
- **Frekvens:** 33 % (rent K).

### M. Endelige kropper og AES-aritmetikk (overlapp mot TMA4150)
- **Krav:** Konstruer `F_16 = F_2[x]/(x⁴+x+1)`, vis at `x` genererer multiplikativgruppa, finn inverser via utvidet Euklid i `F_2[x]`, avgjør irreducibilitet. **AES-S-boks:** invers i `F_2⁸` + affin transformasjon; forklar hva som går galt hvis reduksjonspolynomet ikke er irreducibelt (ringen blir ikke en kropp ⇒ ikke alle byte invertible).
- **Frekvens:** 33 %. Grunnbegrepene ligger i TMA4150; her er *anvendelsen*.

---

## 4. Sensorens krav

Utledet fra fasitpraksis (offisielle løsningsforslag 2013–2019) og eksplisitte «grading notes» (Pan-settene 2021–2022) og prosentkarakterskalaer.

1. **Vis metoden, ikke bare svaret.** Klassisk instruks «Show your work / begrunn alle svar». Fasitene teller til og med *arbeidsmengden* («6 multiplikasjoner mod 47 og én inversjon») — sensor forventer at studenten velger en **effektiv** beregningsvei og kan telle kostnaden.
2. **Konsistenssjekk premieres.** Der en oppgave ber om samme resultat via to metoder, forventes eksplisitt kontroll av at svarene stemmer (fasiten sier: «hvis de neste svarene ikke er blant disse tre, vet du at noe er galt»).
3. **Sikkerhetsspill skal skrives i forelesningsstil.** I M-epoken sier grading notes eksplisitt: «det viktigste er å skrive ned sikkerhetsspillet i stilen fra forelesningene» — utfordrer/angriper-diagram, tilfeldig `b`, definert fordel. Uformelt argument uten spill gir tap.
4. **Reduksjoner skal begrunne simuleringens fordeling.** Full uttelling krever å vise *begge* tilfellene (ekte instans ⇒ perfekt simulering; tilfeldig instans ⇒ uavhengig utfordring), ofte via et bijektivitets-/full-rang-argument.
5. **Angrep godtas i flere varianter.** Grading notes: «det finnes flere gyldige angrep — full uttelling så lenge argumentet er korrekt.» Kreativitet premieres, men angrepet må være fullstendig (både forfalskning *og* verifikasjon at den passerer).
6. **Åpne spørsmål: begrunnelsen teller, ikke «riktig» konklusjon.** Ett fasit sier eksplisitt at både «ja» og «nei» gir full score «så lenge du argumenterer godt for standpunktet».
7. **Delvis uttelling belønnes** for korrekt nøkkelidé selv om utregningen er ufullstendig (særlig i reduksjonsbevis: «poeng gis hvis det er korrekt angitt hvor DLog-instansen embeddes»).
8. **Bruk resultater fra tidligere delpunkt.** Eksplisitt tillatt («du kan bruke resultater fra tidligere oppgaver selv om du ikke løste dem») — belønner strukturert oppgaveløsning.

---

## 5. Typiske feil

1. **Ikke-invertible eksponent-koeffisienter i DL.** Når `gcd(koeffisient, gruppeorden) ≠ 1` (f.eks. `3a ≡ 123 mod 270`), gir du bare `a` modulo en divisor og må sjekke alle kandidatene — vanlig felle å «dele» ulovlig.
2. **Feil addisjonsformel på elliptisk kurve.** Å bruke dobling-formelen for distinkte punkter eller omvendt; glemme spesialtilfellet `x₁ = x₂` (som gir `O` eller krever dobling).
3. **Punkttelling uten Hasse-avgrensning.** Å ikke bruke `|#E−(p+1)| ≤ 2√p` til å begrense intervallet, eller glemme at punktorden må dele `#E` (Lagrange).
4. **Feil modulus i eksponent-aritmetikk.** Regne eksponenter mod `p` i stedet for mod `p−1` (eller mod gruppeorden) — en klassisk RSA/DL-tabbe.
5. **Sikkerhetsspill uten definert fordel.** Å beskrive angrepet uformelt uten å skrive utfordrer/angriper-spillet og definere `Adv = |Pr[...] − ½|`.
6. **Reduksjon uten fordelingsargument.** Å tegne reduksjonsdiagrammet men ikke vise at simuleringen er korrekt fordelt i *begge* tilfeller (ekte vs. tilfeldig instans).
7. **Glemme at lekebok-skjemaer er formbare/deterministiske.** Å anta lekebok-RSA/ElGamal er sikre; overse at determinisme bryter IND-CPA og at multiplikativ homomorfi bryter integritet.
8. **Nonce-gjenbruk oversett.** Ikke se at samme tilfeldige `r`/`k` i to signaturer eller chiffer lekker den hemmelige nøkkelen (Schnorr/ElGamal/DSA-familien).
9. **Norm-ulikheter i gitter feil håndtert.** Glemme reduksjon mod `Xⁿ+1` i produktformelen, eller feil grense på `q` for korrekt dekryptering (må dominere støyleddet `‖w − xs‖∞`).
10. **Jacobi ≠ kvadratisk rest.** Å tro at Jacobi-symbol `= 1` betyr kvadrat mod `n` (gjelder bare for primtall / Legendre; sammensatt `n` kan ha Jacobi 1 uten å være kvadrat).
11. **Ikke-irreducibelt reduksjonspolynom i `F_q`-konstruksjon.** Bruke et reducibelt `p(x)` ⇒ ringen er ikke en kropp ⇒ ikke alle elementer invertible (bryter AES).
12. **Negligible-feilklassifisering.** Forveksle invers-polynom (`1/λ^k`, *ikke* neglisjerbar) med eksponentielt avtakende; feil på log-i-eksponent-former.
13. **Tidsfelle.** De store bevisoppgavene (25–37 poeng: DDH-baserte PKE-bevis, gitter-oppgaven) er tunge; bruk for lang tid på tallteori-håndregning tidlig stjeler fra de dyre bevisene.

---

## 6. Teorem-, notasjons- og formelapparat

### Må beherskes aktivt (kunne anvende og navngi)

**Tallteori & algebra (grunnlag — dekkes i TMA4150, anvendes her):**
- Modulær aritmetikk, **utvidet Euklid** (inverser), **rask eksponentiasjon** (square-and-multiply), **CRT**.
- **Fermats lille teorem**, **Eulers teorem**, `φ(N)`; **Lagranges teorem** (orden deler gruppeorden).
- Syklisk gruppe `⟨g⟩`, generator/primitivt element, `Z_n^*`, endelig kropp `F_q`, `F_2[x]/(p(x))`, irreducibilitet.
- **Jacobi-/Legendre-symbol**, kvadratisk resiprositet, kvadratiske rester.

**Kjernekryptografi:**
- **RSA:** `c = mᵉ mod n`, `d = e⁻¹ mod φ(n)`, sikkerhet = faktorisering/RSA-problemet.
- **Diffie–Hellman & antakelser:** DLog, **CDH**, **DDH**, **Square-DH**, og reduksjoner mellom dem.
- **ElGamal** (kryptering + signatur), homomorfi/formbarhet.
- **Schnorr** (identifikasjon + signatur), Fiat–Shamir, 2-special soundness, witness-ekstraksjon.
- **Elliptiske kurver:** addisjonsformlene, `kP` (double-and-add), **Hasses teorem** `|#E−(p+1)| ≤ 2√p`, orden, syklisitet.

**Algoritmer (kunne kjøre for hånd):**
- **DL:** Baby-step Giant-step, Pohlig–Hellman, Pollard ρ, indekskalkulus/relasjoner.
- **Faktorisering:** Fermat, Pollard ρ, Pollard p−1, kvadratisk sil (`x² ≡ y²`).
- **Primalitet:** Fermat-test, **Solovay–Strassen**, Miller–Rabin (nevnt).

**Beviselig sikkerhet (Boneh–Shoup-rammeverk):**
- **Definisjoner:** perfekt/semantisk sikkerhet, **IND-CPA**, **IND-CCA**, **UF-CMA**, UF-KOA, anonymitet — alle som **attack games**.
- **Primitiver:** PRG, **PRF**, **PRP** (AES som PRP), MAC, kollisjonsresistent hash, negligible-funksjon.
- **Bevisteknikk:** reduksjon, hybrid-argument, random oracle-modell (reprogrammering), forking lemma (nevnt).

**Post-kvante / gitter:**
- Gitter, basis, unimodulær matrise, closest-vector-avrunding, **GGH-lignende PKE**, **Ring-LWE** i `F_q[X]/(Xⁿ+1)`, norm-ulikheter (`‖·‖∞`, `‖·‖₁`).

### Notasjonskonvensjoner boken bør speile
`Z_n^*`, `F_q`, `⟨g⟩`, `logg x`; `φ(N)`; Jacobi `(a/n)`; ECC-punkt `P = (x,y)`, `O`, `kP`, `log_P Q`, `#E`; sikkerhetsparameter `λ`, negligible `negl(λ)`; `Enc/Dec/Gen`, `Sign/Ver/Tag`, `pk/sk`, `⊕` for XOR; angriper `A`, utfordrer/reduksjon `B`, fordel `Adv`; gitter `Λ`, basis `B`, normer `‖·‖∞, ‖·‖₁`, ring `R = F_q[X]/(Xⁿ+1)`.

> **Merk om hjelpemidler:** I den klassiske epoken var *alt* skriftlig materiale tillatt. Boken bør derfor lære studenten å **bruke oppslagsmateriale effektivt** — særlig lage et eget kompakt **algoritme-ark** (BSGS/Pohlig–Hellman/Pollard-oppskrifter, ECC-addisjonsformler, Jacobi-reduksjonsregler) og et **definisjons-ark** for sikkerhetsspill. Effektiv metodevalg og kostnadstelling premieres.

---

## 7. Prognose og prioritering

> TMA4160 er blant de **mindre forutsigbare** emnene i arkivet pga. to regimeskift på fem år. Prognosen vekter derfor de søylene som overlever begge tradisjoner tyngst, legger beviselig sikkerhet som nødvendig kjerne (den har vært enerådende 2020–2024), og tar med gitter som obligatorisk framtidsmål. Boken må være robust mot både et «Pan-tungt» bevis-sett og et «Gjøsteen-tungt» beregnings-sett.

### Nivå 1 — må beherskes perfekt (bærer eksamenen i begge regimer)
1. **RSA** (bruk, nøkkelsvakheter, determinisme-/formbarhet-angrep, `φ(N)`-faktorisering) — 67 %.
2. **Signaturer** (RSA/ElGamal/Schnorr-konstruksjon **og** UF-CMA-forfalskning + nonce-gjenbruk + witness-ekstraksjon) — 67 %.
3. **ElGamal-kryptering** (dekryptering, homomorfi/formbarhet, IND-CPA-bevis under DDH) — 62 %.
4. **Elliptiske kurver** (punktaritmetikk, orden, Hasse-punkttelling, ECC-DL) — 62 %.
5. **Diskret-logaritme-algoritmer** (BSGS, Pohlig–Hellman, Pollard ρ, DL fra relasjoner) — 62 %.
6. **Beviselig sikkerhet: sikkerhetsspill + reduksjon** (IND-CPA/CCA, semantisk, CDH/DDH/SqDH-reduksjoner) — 43 % totalt, **~100 % i 2020–2024**. Kjernen i den moderne eksamenen.

### Nivå 2 — må kunne (bredde + karakterskiller)
7. **Diffie–Hellman-antakelser og reduksjoner mellom dem** (CDH/DDH/SqDH, Square-DH ⇒ CDH-malen) — 38 %.
8. **Faktorisering for hånd** (Fermat, Pollard ρ/p−1, `x² ≡ y²`) — 48 % (K-tungt, men fast beredskap).
9. **MAC** (poly-MAC engangs, PRF-basert, encrypted-hash, UF-CMA + forfalskning) — 38 %.
10. **Hash-funksjoner** (kollisjonsresistens, trapdoor-kollisjon, DL-/RSA-hash, 2. pre-image) — 33 %.
11. **PRG/PRF/PRP + negligible-funksjoner** (definisjoner, sikkerhetsvurdering, «gratis»-deloppgaver) — 29 % / 24 %.
12. **Klassiske chiffer** (shift/affin/substitusjon/Hill — knekk for hånd, evt. flervalg) — 33 %.
13. **Jacobi-symbol & kvadratiske rester** (inkl. Goldwasser–Micali-/Rabin-konstruksjoner) — 33 %.
14. **Endelige kropper & AES-aritmetikk** (`F_2[x]/(p)`, S-boks, irreducibilitet) — 33 % (overlapp TMA4150).

### Nivå 3 — bør dekkes (stigende eller lav frekvens / beredskap)
15. **Gitter / Ring-LWE / post-kvante** (norm-ulikheter, gitter-PKE, homomorfi) — 10 %, men **obligatorisk primærmål framover** (2024-signal).
16. **Anonym PKE** (definisjon + RSA/ElGamal ikke anonym, hashet ElGamal anonym) — 14 %, ny M-sjanger, stigende.
17. **One-time pad / perfekt sikkerhet**, **blokkchiffer-moduser** (ECB/CBC/CTR) — 19 % hver, faste korte deloppgaver i M.
18. **Shamir hemmelighetsdeling / Lagrange over `F_q`**, **strømchiffer/LFSR**, **side-kanal/timing**, **e-valg/homomorf telling** — 5–14 %, lav-frekvent beredskap / anvendelseskolorit.

### Konkret prognose for neste sett
Basert på 2023–2024-malen (blanding): **5–6 oppgaver over 4 timer**, Inspera-flervalg + håndskrevne bevisdeler, sannsynligvis med:
- **En flervalgs-/kortsvarsblokk:** confidentiality/malleability/authentication, hash-egenskaper, gruppe-/generator-egenskaper, negligible-funksjoner, klassisk chiffer.
- **En ECC- eller tallteori-beregningsoppgave:** punktregning + `log_P Q` via kjente multipler, eller en DL-/faktorisering-oppgave.
- **En gitter-/Ring-LWE-oppgave:** norm-ulikheter, dekrypterings-korrekthet + `q`-grense, additiv homomorfi.
- **En reduksjons-/antakelsesoppgave:** Square-DH ⇒ CDH eller lignende, med orakel-telling.
- **En sikkerhetsdefinisjon-/angrepsoppgave:** definer et spill (anonymitet/IND-CCA), vis at et lekebok-skjema (ElGamal/RSA) ikke oppfyller det, foreslå et skjema som gjør det.
- **En signatur-/commitment-oppgave:** Schnorr-avledet, hiding/binding eller witness-ekstraksjon.

**Usikkerhetsmoment:** Fordi foreleser (og dermed lærebok/filosofi) har skiftet, kan neste sett svinge kraftig mot enten ren beregning (Gjøsteen-stil) eller ren bevisføring (Pan-stil). Boken må derfor **overtrene begge**. Verifiser mot faktisk foreleser/pensum for det aktuelle semesteret. Gitter er det tryggeste «nye» vekst­området å prioritere.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TMA4160/` (~40 PDF-er).

**Løsningsforslag lest grundig (offisielle fasiter):**
- `lf18-en.pdf` (H2018), `lf17-en.pdf` (H2017), `lf-19-en.pdf` (H2019, delvis OCR-skadet), `crypto-solutions-14.pdf` (H2014, full fasit).
- `losning15.pdf` (H2015), `losning2013.pdf` (H2013), `losning2011.pdf` (H2011), `losning2010.pdf`, `losning2012.pdf`, `losning2016.pdf`, `losning2001.pdf`–`losning2004.pdf` (kortere sketsjer, eldre sett).
- Moderne sett har **innebygde løsningsforslag/«suggestion for answers»** i selve oppgavefila: `tma4160-h2021.pdf`, `tma4160-h2022-1.pdf`, `tma4160-summer2021.pdf` (partielle), `tma4160-h2023.pdf` («exam with outlined answers»).

**Oppgavesett lest grundig (siste ~8 år + moderne):**
- `h24-en.pdf` (H2024), `tma4160-h2023.pdf` (H2023), `tma4160-h2022-1.pdf` (H2022), `tma4160-h2021.pdf` (H2021), `tma4160-summer2021.pdf` (kont. aug. 2021), `exam-h2020.pdf` (H2020), `h19-en.pdf` (H2019), `h18-en.pdf` (H2018), `h17-en.pdf` (H2017).

**Oppgavesett skummet (eldre klassisk epoke):**
- `exam-crypt16.pdf` (2016), `exam-crypt15.pdf` (2015), `exam-crypt13.pdf` (2013), `exam-crypt12.pdf` (2012), `exam-crypt11.pdf` (2011), `exam-crypt10.pdf` (2010), `exam-crypt09.pdf` (2009), `exam-crypt06.pdf` (2006), `exam-crypt05.pdf` (2005), `exam-crypt03.pdf` (2003), `crypto-english-14.pdf` (2014).

**Skann-/OCR-hull (kunne ikke tekst-utvinnes eller kun delvis):**
- **Rene skann (≈ 0 tegn tekst):** `exam-crypt04.pdf`, `exam-crypt07.pdf`, `exam-crypt08.pdf`, `exam-h2020-hints.pdf` (håndskrevne hint til H2020) — ikke analysert innholdsmessig.
- **OCR-skadet (uleselig / delvis):** `exam-crypt01.pdf`, `exam-crypt02.pdf` (tunge OCR-feil; kun grov temakategorisering mulig), `lf-19-en.pdf` (håndskrevet fasit, delvis uleselig OCR — supplert med oppgavesettet `h19-en.pdf`).
- **Hull i arkivet:** ingen fullstendig fasit for de aller nyeste settene (2023/2024 har bare skisserte svar); moderne sett dekkes likevel godt via de innebygde «suggestion for answers».

**Merknader om kildene:**
- **To epoker med ulik lærebok/filosofi:** den klassiske (2001–2019, Gjøsteen-tradisjonen, beregningstung tallteori/ECC) og den moderne (2020–2024, Pan-tradisjonen, beviselig sikkerhet à la Boneh–Shoup). En eksamensrettet bok må dekke begge; se del 7 for vekting.
- **Overlapp mot TMA4150 Algebra:** grunnbegrepene grupper/ringer/kropper dekkes primært der; her behandles kun kryptografisk anvendelse.
- **Opphavsrett:** alle beskrivelser av oppgaver, løsningsmetoder og sensorkrav er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk, algoritmenavn og standardnotasjon er allmenn fagnotasjon.

**Fagbeskrivelse:** omskrevet sammendrag basert på oppgaveinnholdet (K1-verifikasjon) — TMA4160 dekker klassisk kryptografi, tallteoretiske primitiver (RSA, DL, faktorisering), elliptiske kurver, symmetriske primitiver (PRF/PRP/AES, MAC, hash), offentlig-nøkkel-kryptering og signaturer med **beviselig sikkerhet** (IND-CPA/CCA, UF-CMA, reduksjoner), samt gryende post-kvante-/gitter-krypto.

**Forbilde:** `docs/hoyskole-boker/tma4135/EKSAMENSANALYSE.md` (8-delers strukturmal og tone — innhold ikke kopiert).
