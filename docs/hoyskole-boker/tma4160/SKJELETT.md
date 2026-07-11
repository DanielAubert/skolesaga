# Bokskjelett: TMA4160 Kryptografi (NTNU) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i kapitlet
> eller i eksplisitt refererte forkunnskaper (flytt teoribiten tidligere ved
> behov). Autoritativ kilde: README «Leserkrav» + `DNA-regnefag.md`. Unntak:
> øvingseksamen-/prøve-kapitler følger sin egen arketype (komplett sett først,
> løsninger i collapsibles). Kvotene og innholdskontraktene i dette skjelettet er
> uendret — løkka styrer REKKEFØLGEN.

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alle frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra
> `docs/hoyskole-boker/tma4160/EKSAMENSANALYSE.md` (NTNU-arkivet for TMA4160,
> ~40 filer 2001–2024; offisielle løsningsforslag 2013–2019 lest grundig, siste
> ~8 sett med innebygde «suggestion for answers», eldre skummet). Arketype:
> **DNA-regnefag** (`DNA-regnefag.md`) — **hybrid**: en beregningstung
> tallteori-/ECC-kjerne (Gjøsteen-tradisjonen, «regn ut / knekk for hånd») OG en
> beviselig-sikkerhet-del (Pan-tradisjonen, «vis at skjemaet er (u)sikkert» med
> sikkerhetsspill og reduksjoner à la Boneh–Shoup), pluss et stigende
> gitter-/Ring-LWE-lag. Alle oppgaver, tallverdier, chiffernøkler, moduli, kurver
> og innpakninger i den ferdige boka skal være **NYSKREVNE** (opphavsrett):
> algoritmenavn, protokollnavn, standardnotasjon (RSA, ElGamal, IND-CPA, …) og
> tallteori er allmenn faglig kunnskap, men ingen oppgavetekster, fasiter eller
> sensorformuleringer fra reelle sett gjengis. Norsk bokmål; engelsk fagterm i
> parentes ved første forekomst (eksamen og pensum er på engelsk).

> **Matematisk presisjon er kritisk (DNA-regnefag «sannhetskontroll»).**
> Fortegns-, entydighets- og «alltid»-påstander parametersjekkes numerisk i
> modellens fulle parameterrom FØR de skrives; betingelser skrives eksplisitt ut.
> Påstander forfatteren er usikker på merkes `(verifiser)`. Tre kjerne­påstander
> er allerede parametersjekket i skjelettfasen (python3):
> - **Hasses teorem** $|\#E-(p+1)|\le 2\sqrt{p}$ verifisert for $p=19,23,271$;
>   eksempelkurven $E: y^2=x^3-x+15$ over $\mathbb{F}_{19}$ har **$\#E=17$**
>   (ligger i Hasse-intervallet $[11.3,\,28.7]$) — bruk dette som
>   ferdig­kontrollert modelltall.
> - **CDH $\Leftarrow$ Square-DH:** identiteten $(x+y)^2-x^2-y^2=2xy$ gir
>   $g^{xy}$ fra **nøyaktig 3 SqDH-orakelkall** (på $g^{x+y}$, $g^x$, $g^y$)
>   pluss én «halvering i eksponenten» ($\cdot\,2^{-1}\bmod q$). **Betingelse
>   (må skrives ut):** halveringen krever at gruppeordenen $q$ er **odde** (ellers
>   er ikke $2$ invertibel mod $q$); i primtallsordens-grupper $q$ odde er dette
>   oppfylt. En annen gyldig variant bruker $g^{(x+y)^2}/g^{x^2}\cdot\ldots$ — flere
>   angrep godtas (sensorkrav 5).
> - **RSA:** eksponenten $e$ må være **invertibel mod $\varphi(N)$**, dvs.
>   $\gcd(e,\varphi(N))=1$; for odde $\varphi(N)/2$-struktur betyr det at $e$ må
>   være odde. Skriv betingelsen, ikke bare «$e$ odde».

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tma4160` |
| Tittel | **TMA4160 Kryptografi (NTNU)** |
| Institusjon (navigasjon) | **NTNU**. Visningsnavn i `institusjoner.ts`: «TMA4160 Kryptografi». (NTNU finnes fra før — jf. TTM4135/TDT4120/TFY4104.) Registrering i `institusjoner.ts` er en byggefase-oppgave (README «Navigasjon»), ikke del av skjelett-porten. |
| Level | `'Høyskole'` |
| Status | **AKTIVT** (verifisert mot ntnu.no/studier/emner/TMA4160, 2026-07-11): undervisningsstart høst 2026, ordinær eksamen **21.11.2026**, kont. sommer 2027. Ingen nedleggingsvarsel. Studiepoengreduksjon mot SIF5023 (7,5 sp) og TMA4155 (4,5 sp). Se §0 for full begrunnelse. |
| Arketype | Regnefag — **hybrid** (beregningstung tallteori/ECC + beviselig sikkerhet + gitter). Låner sikkerhetsspill-/reduksjonsdrill fra `ttm4135` for bevisdelen, tallteori-/RSA-/DL-regnedrill fra `ma1301`/`ttm4135`. Se §2 «Arketypetilpasning». |
| Antall kapitler | **34** (Del 0: 2 · temadeler 1–11: 27 · eksamenstrening Del 12: 5) |
| Estimert totaltid | **≈ 2 480 min ≈ 41 timer** (inkl. tre firetimers øvingseksamener à 240 min) |
| Quiz totalt | **590** (krav ≥500; autoritativ per-kapittel-sum i §4 — sikta høyt fordi arkivet spenner over to regimer og hele bredden må dekkes) |
| Flashcards totalt | **568** (krav ≥500 — svært begrepsrikt: hjelpemiddelregimet er åpent, men definisjoner/spill/reduksjonsmaler må sitte) |
| Prøver | **44** (4 per temadel 1–11) + **3 øvingseksamener** (kap. 12.3–12.5) |

**Pitch (ett avsnitt):** TMA4160 er NTNUs kryptografi-emne (7,5 sp, 4-timers
skriftlig skoleeksamen, karakter A–F). Det er blant de **minst forutsigbare**
emnene i arkivet fordi det har byttet regime to ganger på fem år: (1) den
**klassiske epoken (2001–2019, Gjøsteen-tradisjonen)** er tung håndregning —
klassiske chiffer å knekke, diskret-logaritme-algoritmer (Baby-step Giant-step,
Pohlig–Hellman, Pollard ρ), faktorisering (Fermat, Pollard ρ/p−1), elliptiske
kurver med eksplisitt punktregning og punkttelling (Hasse), RSA/ElGamal/Rabin/
Schnorr-signaturer, Jacobi-symbol; (2) den **moderne epoken (2020–2024,
Pan-tradisjonen à la Boneh–Shoup)** er beviselig sikkerhet — sikkerhetsspill
(IND-CPA/CCA, UF-CMA, anonymitet), reduksjonsbevis (CDH ⇐ Square-DH), PRG/PRF/PRP,
MAC-forfalskning, negligible-funksjoner; (3) de nyeste settene **(2023–2024)**
blander begge og legger til **gitter-/Ring-LWE-krypto** (norm-ulikheter). Fordi
arkivet ikke garanterer hvilket regime som gjelder ved neste sett, **må boka dekke
BEGGE tradisjonene** — men vekte den moderne bevislinjen tyngst (enerådende
2020–2024) og ta gitter med som obligatorisk framtidsmål. Fem stabile søyler går
igjen på tvers av begge epoker: **RSA, ElGamal, signaturer, elliptiske kurver og
diskret logaritme** — disse fem får hver sin del med teori- **og** drillkapittel og
høyest kvote. Boka er bygd baklengs fra det sensor faktisk premierer:
**vis metoden, ikke bare svaret** (klassisk); **skriv sikkerhetsspillet i
forelesningsstil og begrunn simuleringens fordeling i begge tilfeller** (moderne).

**Kritisk stilregel (gjelder HELE boka) — «to regimer, samme kjerne»:**
1. **Robusthet mot begge tradisjoner.** Boka drilles like grundig på beregning
   (regn ut / knekk for hånd) og på bevisføring (definer spill, gjør reduksjon).
   Hvert relevant tema har både en «regne»-side og en «bevis/angrep»-side der
   arkivet støtter det.
2. **Klassisk: vis metoden, ikke bare svaret.** Fasitene teller til og med
   *arbeidsmengden* («6 multiplikasjoner mod 47 og én inversjon») — sensor
   forventer effektiv metodevalg og kostnadstelling. Rett tallsvar uten utregning
   gir sjelden full uttelling. Der en oppgave ber om samme resultat via to metoder
   (Pohlig–Hellman *og* BSGS), skal svarene eksplisitt kryssjekkes (konsistens
   premieres).
3. **Moderne: skriv spillet i forelesningsstil.** Grading notes sier eksplisitt:
   «det viktigste er å skrive ned sikkerhetsspillet i stilen fra forelesningene» —
   utfordrer↔angriper-diagram, tilfeldig $b\leftarrow\{0,1\}$, definert fordel
   $\mathrm{Adv}=|\Pr[\hat b=b]-\tfrac12|$. Uformelt argument uten spill gir tap.
4. **Reduksjoner skal begrunne simuleringens fordeling i BEGGE tilfeller.** Full
   uttelling krever å vise at ekte instans ⇒ perfekt simulering OG tilfeldig
   instans ⇒ utfordringen er uavhengig av $b$. Delvis uttelling for å korrekt
   angi *hvor* antakelses-instansen embeddes.
5. **Angrep godtas i flere varianter.** «Full uttelling så lenge argumentet er
   korrekt» — men angrepet må være fullstendig (både forfalskning OG at den
   passerer verifikasjon).
6. **Bruk resultater fra tidligere delpunkt** (eksplisitt tillatt, også om du ikke
   løste dem) — belønner strukturert oppgaveløsning; delpunkt-kjeding er vanlig.
7. **Emnets notasjon er fasit.** $\mathbb{Z}_n^*$, $\mathbb{F}_q$, $\langle g\rangle$,
   $\log_g x$, $\varphi(N)$, Jacobi $(a/n)$; ECC $P=(x,y)$, $\mathcal{O}$, $kP$,
   $\log_P Q$, $\#E$; sikkerhetsparameter $\lambda$, $\mathrm{negl}(\lambda)$;
   $\mathrm{Enc}/\mathrm{Dec}/\mathrm{Gen}$, $\mathrm{Sign}/\mathrm{Ver}$,
   $pk/sk$, $\oplus$; angriper $\mathcal{A}$, reduksjon $\mathcal{B}$; gitter
   $\Lambda$, basis $B$, $\|\cdot\|_\infty,\|\cdot\|_1$, ring
   $R=\mathbb{F}_q[X]/(X^n+1)$. All matematikk i LaTeX.

**Hjelpemiddelregime (skal stå i Del 0):** Klassisk epoke (kode B): *alt* trykt og
håndskrevet materiale + en enkel kalkulator — svært åpent, så eksamen tester
**metode og forståelse**, ikke pugging. Boka lærer studenten å lage et eget
kompakt **algoritme-ark** (BSGS/Pohlig–Hellman/Pollard, ECC-addisjonsformler,
Jacobi-reduksjonsregler) og et **definisjons-ark** for sikkerhetsspill. Moderne
epoke: hjemme-/Inspera-baserte sett med flervalgsdeler auto-rettet + håndskrevne
bevisdeler. **Prognosen er mer usikker enn for stabile matematikkemner** — Del 0
sier dette eksplisitt og bygger boka på sjangrene, ikke det eksakte oppgaveantallet.

**Overlapp/arbeidsdeling (skal stå i Del 0 og relevante Forkunnskaper-blokker):**
Kryptografien bygger på **grupper, ringer og endelige kropper** (syklisk gruppe
$\langle g\rangle$, $\mathbb{Z}_n^*$, $\mathbb{F}_q$, Lagrange, CRT som
ringisomorfi). Disse **grunnbegrepene** dekkes primært i TMA4150 Algebra og MA1301
Tallteori — her forutsettes de kjent og behandles kun i den grad kryptografien
**anvender** dem (konstruksjon av $\mathbb{F}_{16}$ for AES-S-boks, orden av
elementer i $\mathbb{Z}_n^*$, CRT for faktorisering). Boka lenker til disse
kapitlene i Forkunnskaper-blokkene (`(verifiser lenke)` der usikker) og resirkulerer
de 2–3 nøkkelresultatene ferdig oppfrisket i tunge sene kapitler («Sist du var her»).

**Kode­teori-appendiks — bevisst UTELATT (dokumentert beslutning):**
`docs/hoyskole-boker/tma4185/STATUS.md` (Kodeteori, nedlagt) reiser om et kort
kodeteori-tillegg bør bli appendiks til denne boka. **Vurdering:** klassisk
kanaltkodeteori (lineære blokk-koder, Hamming-avstand, Reed–Solomon/BCH)
forekommer **null ganger** i TMA4160-arkivet (2001–2024). Per README «Leserkrav»
(kun eksamensrelevant) og «ikke bygg for byggingens skyld» tas det derfor **ikke**
inn — det ville vært eksamens-irrelevant ballast. Det *gitterbaserte*
post-kvante-laget (Ring-LWE) som faktisk forekommer (2015, 2024) dekkes derimot
fullt (Del 10). Denne beslutningen noteres i kap. 0.1.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regnefag-regelen), IKKE frekvens.
Frekvensen styrer *omfanget*: de fem stabile søylene (RSA, ElGamal, signaturer,
ECC, DL) + beviselig sikkerhet får hver sin del med teori- **og** drillkapittel og
høyest kvote; lavfrekvent stoff (klassiske chiffer, Jacobi, kropper/AES) får ett
kompakt kapittel. Grunnlaget (modulær aritmetikk-oppfriskning, symmetriske
primitiver) kommer først; DL/faktorisering/ECC danner tallteori-tyngdepunktet;
offentlig-nøkkel-krypto (RSA/ElGamal) og signaturer bygger på det; beviselig
sikkerhet er den moderne kjernen; gitter og anonymitet er framtidsmålene;
eksamenstrening binder alt sammen.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og håndverk | 2 | perfekt (meta) | Formen (to regimer, 4 t, håndregning + sikkerhetsbevis), hjelpemiddelregimet, temafrekvensene, sensorkravene, algoritme-/definisjons-arket og prognose-usikkerheten må etableres FØR fagstoffet. |
| 1 | Grunnlag: symmetrisk krypto og perfekt sikkerhet | 3 | kunne (19–33 %) | One-time pad/perfekt sikkerhet (19 %), klassiske chiffer (33 %, K-favoritt + flervalg 2024), blokkchiffer-moduser + AES som PRP (19 %), strømchiffer/LFSR (10 %). Inngangsdøra og lettere «gratis»-poeng. |
| 2 | Tallteoretisk verktøykasse og endelige kropper | 2 | kunne/grunnlag (33 %) | Modulær aritmetikk-oppfriskning (utvidet Euklid, rask eksponentiasjon, CRT, Fermat/Euler) + endelige kropper $\mathbb{F}_q$, $\mathbb{F}_2[x]/(p)$, irreducibilitet, AES-S-boks (33 %, overlapp TMA4150). Fundamentet for DL/faktorisering/RSA/ECC. |
| 3 | Diskret logaritme og DL-algoritmer | 3 | perfekt (62 %) | DL-algoritmer i 13/21 sett. BSGS + Pohlig–Hellman, Pollard ρ + DL fra relasjoner, + drillkapittel (ikke-invertible eksponent-koeffisienter, konsistenssjekk). Den ene 62 %-søylen på K-siden. |
| 4 | Faktorisering | 2 | kunne (48 %) | Faktorisering i 10/21 sett (nesten kun K). Fermat + Pollard ρ/p−1, $x^2\equiv y^2$/relasjoner + via $\varphi(N)$, + drill. Fast beredskap. |
| 5 | Elliptiske kurver i kryptografi | 3 | perfekt (62 %) | ECC i 13/21 sett; bærebjelke i K, tilbake 2024. Punktaritmetikk + $kP$, orden + Hasse-punkttelling + syklisitet, ECC-DL + ECC-ElGamal, + drillkapittel. |
| 6 | RSA og Rabin | 3 | perfekt (67 %) | RSA i 14/21 sett — begge epoker. Bruk/nøkkelgenerering + $\varphi(N)$-faktorisering, nøkkelsvakheter + determinisme-/formbarhetsangrep, Rabin + Jacobi/kvadratiske rester, + drill. |
| 7 | ElGamal og Diffie–Hellman | 3 | perfekt (62 %) | ElGamal i 13/21, DH-antakelser i 8/21. DH + CDH/DDH/SqDH-antakelser, ElGamal-kryptering (homomorfi/formbarhet/nonce-gjenbruk), + drill. Forutsetning for IND-CPA-beviset (Del 9). |
| 8 | Signaturer og identifikasjon | 3 | perfekt (67 %) | Signaturer i 14/21 sett — begge epoker. Klassiske konstruksjoner (RSA/ElGamal/Rabin/Lamport/blind), Schnorr-signatur + identifikasjon + 2-special soundness/witness-ekstraksjon, UF-CMA/UF-KOA-angrep + bevis, + drill. |
| 9 | Beviselig sikkerhet: primitiver, spill og reduksjoner | 4 | perfekt (43 % totalt, ~100 % i M) | Den definerende moderne søylen. PRG/PRF/PRP + negligible (29 %/24 %), sikkerhetsdefinisjoner som attack games (IND-CPA/CCA, semantisk), reduksjoner (CDH⇐SqDH-malen, IND-CPA under DDH), hash + MAC (33 %/38 %), + reduksjonsdrill. |
| 10 | Gitter og post-kvante (Ring-LWE) | 2 | kjenne/stigende (10 %) | 2015 (GGH-lignende) + 2024 (Ring-LWE). Gitter-grunnlag + GGH-PKE, Ring-LWE i $\mathbb{F}_q[X]/(X^n+1)$ (norm-ulikheter, dekrypterings-korrekthet + $q$-grense, homomorfi). **Obligatorisk framtidsmål.** |
| 11 | Avanserte anvendelser (bør kjenne til) | 2 | kjenne (5–14 %) | Anonym PKE (14 %, ny stigende M-sjanger), Shamir hemmelighetsdeling/Lagrange (14 %), homomorf stemmetelling (5 %), side-kanal/timing (5 %) — lav-frekvent beredskap/kolorit. |
| 12 | Eksamenstrening | 5 | perfekt (meta) | Sjangerspill (løsningsoppskrifter A–M), kald bank, + **3 komplette firetimers øvingseksamener** (blandet regime, full modellfasit). |

**Rasjonale:** de fem 62–67 %-søylene (DL, ECC, RSA, ElGamal, signaturer) +
beviselig sikkerhet (Del 9) får hver sin del med drillkapittel og høyest kvote;
klassiske chiffer/Jacobi/kropper får kompakte kapitler; gitter får to kapitler
fordi det er obligatorisk framtidsmål tross lav historisk frekvens. Nesten hele
bredden kan komme — prioriteringen styrer dybde og drillmengde, ikke *om* et tema
er med.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og håndverk |
| 1 | Symmetrisk krypto og perfekt sikkerhet |
| 2 | Tallteoretisk verktøykasse og endelige kropper |
| 3 | Diskret logaritme og DL-algoritmer |
| 4 | Faktorisering |
| 5 | Elliptiske kurver i kryptografi |
| 6 | RSA og Rabin |
| 7 | ElGamal og Diffie–Hellman |
| 8 | Signaturer og identifikasjon |
| 9 | Beviselig sikkerhet: primitiver, spill og reduksjoner |
| 10 | Gitter og post-kvante (Ring-LWE) |
| 11 | Avanserte anvendelser |
| 12 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

**A** Klassiske chiffer — knekk for hånd (shift/affin/substitusjon/Hill mod 26) ·
**B** Diskret logaritme via generiske algoritmer (BSGS, Pohlig–Hellman, Pollard ρ,
DL fra relasjoner) · **C** Faktorisering av $n=pq$ (Fermat, Pollard ρ/p−1,
$x^2\equiv y^2$, via $\varphi(N)$) · **D** Elliptiske kurver: punktaritmetikk,
orden, Hasse-punkttelling, ECC-DL · **E** RSA — bruk, nøkkelgenerering, svakheter,
$\varphi(N)$-faktorisering · **F** ElGamal — kryptering, formbarhet, homomorfi,
nonce-gjenbruk-angrep · **G** Signaturskjemaer, klassisk konstruksjon (RSA/ElGamal/
Rabin/Lamport/blind) · **H** Signatur-/MAC-angrep og -bevis (UF-CMA-forfalskning,
nonce-gjenbruk, 2-special soundness, reduksjon til DLog) · **I** Beviselig
sikkerhet: definer spill + reduksjon (IND-CPA/CCA, semantisk, CDH/DDH/SqDH) ·
**J** PRG/PRF/PRP, negligible-funksjoner og MAC-korrekthet («gratis»-deloppgaver) ·
**K** Gitter/Ring-LWE (basis, closest-vector, norm-ulikheter, gitter-PKE, homomorfi) ·
**L** Jacobi/Legendre-symbol og kvadratiske rester (inkl. Goldwasser–Micali/Rabin) ·
**M** Endelige kropper og AES-aritmetikk ($\mathbb{F}_2[x]/(p)$, S-boks,
irreducibilitet). *(Peripher: anonym PKE, Shamir hemmelighetsdeling, homomorf
telling, side-kanal — lav frekvens.)*

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

1. **Vis metoden, ikke bare svaret** (klassisk instruks «begrunn alle svar»);
   fasiten teller arbeidsmengden — velg effektiv beregningsvei og tell kostnaden.
2. **Konsistenssjekk premieres** når samme resultat kreves via to metoder.
3. **Sikkerhetsspill skal skrives i forelesningsstil** (utfordrer/angriper-diagram,
   tilfeldig $b$, definert fordel). Uformelt argument uten spill gir tap.
4. **Reduksjoner skal begrunne simuleringens fordeling i BEGGE tilfeller.**
5. **Angrep godtas i flere varianter** — men fullstendig (forfalskning + at den
   passerer verifikasjon).
6. **Åpne spørsmål: begrunnelsen teller, ikke «riktig» konklusjon** («ja» og «nei»
   gir full score så lenge du argumenterer godt).
7. **Delvis uttelling** for korrekt nøkkelidé (særlig: korrekt *hvor* instansen
   embeddes i en reduksjon).
8. **Bruk resultater fra tidligere delpunkt** (eksplisitt tillatt).

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**#1** Ikke-invertible eksponent-koeffisienter i DL ($\gcd(\text{koeff},\text{orden})\ne1$
→ svar bare mod en divisor, sjekk kandidatene). · **#2** Feil ECC-addisjonsformel
(dobling vs. distinkte punkter; glem ikke spesialtilfellet $x_1=x_2$). · **#3**
Punkttelling uten Hasse-avgrensning eller uten at punktorden deler $\#E$
(Lagrange). · **#4** Feil modulus i eksponent-aritmetikk (mod $p$ i stedet for mod
$p-1$/gruppeorden — klassisk RSA/DL-tabbe). · **#5** Sikkerhetsspill uten definert
fordel. · **#6** Reduksjon uten fordelingsargument i begge tilfeller. · **#7**
Glemme at lekebok-skjemaer er formbare/deterministiske (determinisme bryter
IND-CPA; multiplikativ homomorfi bryter integritet). · **#8** Nonce-gjenbruk
oversett (samme $r/k$ i to signaturer/chiffer lekker hemmelig nøkkel). · **#9**
Norm-ulikheter i gitter feil (glem ikke reduksjon mod $X^n+1$; $q$ må dominere
støyleddet $\|w-xs\|_\infty$). · **#10** Jacobi $=1$ tolket som kvadratisk rest mod
sammensatt $n$ (gjelder bare primtall/Legendre). · **#11** Ikke-irreducibelt
reduksjonspolynom i $\mathbb{F}_q$-konstruksjon (ringen blir ikke en kropp → ikke
alle elementer invertible). · **#12** Negligible-feilklassifisering (invers-polynom
$1/\lambda^k$ er *ikke* neglisjerbar). · **#13** Tidsfelle: de dyre bevisoppgavene
(25–37 p) taper på for lang tid brukt på tallteori-håndregning tidlig.

### Arketypetilpasning (dokumenterte hybridvalg og avvik)

1. **Regnefag i to-regime-hybridvariant.** DNA-regnefag forutsetter regne-/
   utledningsoppgaver med entydige fasitsvar. Det gjelder K-siden (DL/faktorisering/
   ECC/RSA-regning) fullt ut. M-siden (sikkerhetsspill, reduksjoner, angrep) har
   **argumentative fasiter** med delpoeng — nærmere `ttm4135`s skriftlige
   utledningsdrill enn ren tallregning. Boka bruker **to kapittel-DNA-varianter**:
   **regne-/beregningskapittel-DNA (A)** for K-tunge kapitler (Del 1–7), og
   **bevis-/spillkapittel-DNA (B)** for M-tunge kapitler (Del 8 delvis, Del 9).
2. **«Symbol- og formelliste» beholdes** per delkapittel (README-krav) — for
   beregningskapitler samler den formler/algoritmer, for beviskapitler samler den
   spilldefinisjoner, antakelser og reduksjonsmaler.
3. **Drillkapitler for søylene** (DL 3.3, faktorisering 4.2, ECC 5.3, RSA 6.3,
   ElGamal/DH 7.3, signaturer 8.3, reduksjoner 9.4) — de mest resirkulerte og
   mekaniserbare sjangrene.
4. **Flashcards vektet mot definisjoner, spill og reduksjonsmaler (588).** Selv om
   hjelpemiddelregimet er åpent, må sikkerhetsdefinisjoner (IND-CPA/CCA/UF-CMA som
   attack games), antakelser (CDH/DDH/SqDH), algoritme-oppskrifter (BSGS/PH/Pollard),
   ECC-addisjonsformlene, Jacobi-reglene og reduksjonsmalene sitte for å svare på
   tid. **Quiz-profilen** driller nabobegrep-distraktorer (SN1/SN2-analog:
   IND-CPA/IND-CCA, CDH/DDH, PRF/PRG/PRP, semantisk/perfekt, enantiomer-analog:
   formbarhet/homomorfi, aktiv/passiv angriper).
5. **To-regime-forbeholdet er gjennomgående.** Hver Eksamensvinkel-blokk skiller
   K-frekvens fra M-frekvens der de spriker, og Del 0 sier eksplisitt at prognosen
   er usikker (regimeskifte kan svinge settet kraftig).
6. **Ingen oppdiktede matematiske påstander.** Fortegn/entydighet/betingelser
   parametersjekkes numerisk før de skrives; usikkert merkes `(verifiser)`. De tre
   kjernepåstandene (Hasse, CDH⇐SqDH, RSA-invertibilitet) er allerede sjekket
   (topp-forbeholdet).

**Avvik fra prompt-ordningen (dokumentert):** (a) **Ingen eget kodeteori-appendiks**
— dokumentert utelatt over (null eksamensbelegg). (b) **Grunnbegrepene grupper/
ringer/kropper** ligger i TMA4150/MA1301; boka har bare en kompakt
verktøykasse-oppfriskning (Del 2) + anvendelseslenker. (c) **Gitter (Del 10)** er
prioritert som eget dobbeltkapittel tross 10 % historisk frekvens, fordi
2024-signalet + post-kvante-dreiningen gjør det til obligatorisk framtidsmål.

### Kapittel-DNA A — beregnings-/regnekapittel (Del 1–7, K-tunge)

Obligatorisk blokk-rekkefølge (plattformens blokktyper), i læringsløkker:

1. `tip` **Eksamensvinkel** — frekvens/vekt (K vs. M der de spriker), sjangre
   (A–M) temaet inngår i, hva sensor ser etter. Fra skjelettets Eksamensbelegg —
   forfatteren finner IKKE på frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka + kryssbok-lenker (README-leserkrav;
   tunge sene kapitler viser de 2–3 nøkkelformlene ferdig oppfrisket). `collapsible`
   **Symbol- og formelliste** (SIST i delkapitlet, «Oppslagsverk …»-notis).
3. `text` **Motivasjon** — kort (maks 2–3 avsnitt): hva verktøyet løser.
4. `definition`/`theorem` — begreper/resultater i emnets notasjon; åpner med
   forklaring i ORD, formelen etter.
5. `text` **Utledning med intuisjon** — for det som kreves aktivt utledet
   (algoritmens korrekthet); ren bruk vises uten utledning (merk skillet).
6. `example` × 2–4 — første enkelt, siste på EKSAMENSNIVÅ, modellert på en reell
   sjanger; løsning skrevet som en toppbesvarelse (full regnekjede + kostnadstelling).
7. `warning` **Typiske feil** — feilkodene (#1–#13) for temaet.
8. `exercise` × 6–12 — stigende (2–3 lett innøving, 2–4 middels, 2–4 eksamensklone
   med nyskrevne tall/kurver/moduli); alle med `solution` + `hints` (første hint =
   formelen/algoritmen, aldri konklusjonen). Løkke-plassert INLINE.
9. `collapsible` **Repetisjonsoppgaver** — 4–6 korte fra forutgående kapitler.

### Kapittel-DNA B — bevis-/spillkapittel (Del 8 delvis, Del 9)

1. `tip` **Eksamensvinkel** — M-frekvens, sjangre H/I/J, hva sensor premierer
   (spill i forelesningsstil, fordelingsargument).
2. `text` **Forkunnskaper** + `collapsible` **Definisjons- og spilliste**
   (attack games, antakelser, reduksjonsmaler — «må sitte»).
3. `text` **Rammeverk/motivasjon** — hva sikkerhetsmålet er, hvorfor spill.
4. `definition` **Sikkerhetsspill/antakelse** (attack game i forelesningsstil) —
   flashcard-kilden.
5. `text` **Bevis-/reduksjonsprosedyre** — algoritmisk «slik setter du opp
   reduksjonen»: (1) hva antar du bryter, (2) embed instansen i pk/utfordring,
   (3) simuler oraklene, (4) argumentér fordeling i begge tilfeller, (5) tell
   orakelkall — avsluttet med **fordelings-/simuleringsmalen**.
6. `example` × 2–3 **Modellbevis** — første enkelt (f.eks. tekstbok-RSA ikke
   UF-CMA), siste på eksamensnivå (CDH⇐SqDH med orakel-telling, eller IND-CPA
   under DDH). Skrevet slik en toppbesvarelse ser ut (fullt spilldiagram + begge
   fordelingstilfeller).
7. `warning` **Typiske feil** (#5, #6, #7, #12 m.fl.); inkl. «spill uten definert
   fordel = tap».
8. `exercise` × 6–12 — stigende varianter (definer spill / gjør reduksjon /
   konstruer angrep), nyskrevne skjemaer; alle med `solution` + `hints`.
9. `collapsible` **Repetisjon** — antakelser/definisjoner fra forutgående kapitler.

Eksamenstreningskapitlene (Del 12) har egne oppsett — se §3.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt (K/M der de spriker) +
> sjangerkoder (A–M) + prioritetsklasse (perfekt/kunne/kjenne/grunnlag/meta), alt
> «per 2001–2024-arkivet». **Innholdskontrakt** = definisjoner/teoremer/algoritmer
> som SKAL med (flashcard-/regnekilden), med notasjon. **Kvote** = quiz/flashcards.
> Kryssbok-lenker peker på eksisterende MA1301/TMA4150/TTM4135-kapitler
> (`(verifiser lenke)` der usikker).

### Del 0 — Eksamenskart og håndverk *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes TMA4160
**id:** `tma4160-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Slik testes TMA4160: to-regime-eksamenen (klassisk beregning
  2001–2019 + beviselig sikkerhet 2020–2024 + gitter 2023–2024), 4-timers form,
  hjelpemiddelregimet, temafrekvensene, de fem stabile søylene, sensorkravene,
  prognose-usikkerheten og kildeforbeholdet — verktøyet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet). Skal formidle: (a) **formen** —
  4 t skriftlig, karakter A–F, 4–10 oppgaver, «begrunn alle svar»; (b) **de to
  regimene og regimeskiftene** (2019→2020 beregning→bevis; 2023→2024 gjeninnføring
  av beregning + gitter); (c) **de fem stabile søylene** (RSA 67 %, signaturer
  67 %, ElGamal 62 %, ECC 62 %, DL 62 %) + beviselig sikkerhet (43 % totalt,
  ~100 % i M); (d) **temafrekvens-tabellen** (K ~13 sett / M ~8 sett); (e)
  **sensorkravene 1–8** (§2); (f) **hjelpemiddelregimet** (klassisk kode B åpen +
  kalkulator; moderne Inspera); (g) **prognose-usikkerheten** — regimeskifte kan
  svinge settet kraftig, boka bygges på sjangrene; (h) **kildeforbeholdet** — full
  fasit kun 2013–2019, nyere sett har innebygde «suggestion for answers», enkelte
  eldre er skann/OCR-skadet `(verifiser)`; (i) **kodeteori-utelatelsen** (null
  belegg). Prioritet: perfekt (meta).
- **Innholdskontrakt (Del 0-pakken, README):** sjangerkatalogen A–M som
  sjekkliste med frekvens per sjanger; **«Slik leser du denne boka»-boks** (`tip`,
  ikke `definition`) som forklarer karakterskalaen A–F, sjangerkodene A–M i
  klarspråk, at typiske feil har et samlet register (#1–#13), og rammer inn tunge
  symboler leseren møter senere («du trenger ikke forstå $\mathrm{negl}(\lambda)$
  eller $\|w-xs\|_\infty$ ennå»); **«Lite tid?»-boks** (hurtigrute 3–5 dager +
  ukeplan fra summerte `estimatedMinutes`, med lese- vs. gjøre-tid ×1,5);
  **kildenote for frekvens-empirien** (semestre/årstall + forbehold, fra
  EKSAMENSANALYSE, ALDRI oppdiktet); **deltidsrute** (10–12 uker à ~8 t, tre
  øvingseksamener fordelt); **«lese mye, skrive lite»-boks** + minst én
  håndskreven øvingseksamen på tid; **karakter-realisme** (C er god og vanlig;
  «Gapet til A» som oppgraderingsmeny). Ingen forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver («gitt en
  4-timers mal — sett opp tidsbudsjett og rekkefølge når settet blander beregning
  og bevis», «avgjør av en oppgavetekst om den krever et sikkerhetsspill eller en
  håndregning»).
- **Typiske feil:** metafeilene — tro at arkivfrekvensene er stabile (les
  regimeskifte-forbeholdet); vente bare beregning ELLER bare bevis; #13 (tidsfelle:
  la de dyre bevisoppgavene ligge).
- **Kvote:** 12 quiz / 12 flashcards (formfakta, søylene, regimene, temafrekvens,
  sensorkravene, sjangerkodene, kildeforbeholdet).

#### Kapittel 0.2: Håndverket — algoritme-arket og definisjons-arket
**id:** `tma4160-0-2` · **number:** 0.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4160-0-1`

- **Kapitteltype:** håndverkskapittel (meta — arbeidsverktøy for begge regimer).
- **Description:** De to ferdighetene som gir poeng uansett regime: å **regne
  effektivt med et eget algoritme-ark** (klassisk) og å **skrive et sikkerhetsspill
  + en reduksjon i forelesningsstil med et definisjons-ark** (moderne). Etablerer
  malene resten av boka bruker.
- **Eksamensbelegg:** Gjennomgående (sensorkrav 1–8 på tvers). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 0.1; [Modulær aritmetikk og Euklid](/bok/ma1301/ma1301-1-2)
  `(verifiser lenke)`. `collapsible` **Definisjons- og formelliste:** notasjonskanon
  (§1 stilregel 7) + de to arkene i kortform.
- **Innholdskontrakt (flashcard-kilde):** **Algoritme-arket** (klassisk):
  utvidet Euklid (invers), square-and-multiply (rask eksponentiasjon med
  kostnadstelling), CRT-oppskriften, BSGS/Pohlig–Hellman/Pollard-ρ-skjelettene,
  ECC-addisjonsformlene, Jacobi-reduksjonsreglene. **Definisjons-arket** (moderne):
  malen for et attack game (utfordrer↔angriper, $b\leftarrow\{0,1\}$, utfordring,
  gjett $\hat b$, $\mathrm{Adv}=|\Pr[\hat b=b]-\tfrac12|$), **reduksjonsmalen**
  (embed instans → simuler orakler → fordeling i begge tilfeller → tell orakelkall),
  negligible-definisjonen. **Kostnadstelling** som eget prinsipp (tell
  multiplikasjoner/inversjoner — sensor teller arbeidsmengden). **Konsistenssjekk**
  som selvkontroll (samme resultat via to metoder).
- **Prosedyre:** (1) for beregning: velg effektiv metode, skriv regnekjeden, tell
  kostnaden, kryssjekk; (2) for bevis: skriv spillet i forelesningsstil, definer
  fordelen, gjør reduksjonen med fordelingsargument i begge tilfeller.
- **Typiske feil:** #4 (feil modulus), #5 (spill uten definert fordel), #6
  (reduksjon uten fordelingsargument); + å regne uten kostnadstelling.
- **Modellsvar:** «Sett opp den generiske malen for et IND-CPA-spill og forklar hva
  fordelen måler»; «Skriv square-and-multiply for $g^{13}$ og tell antall
  multiplikasjoner/kvadreringer».
- **Kvote:** 14 quiz / 18 flashcards.

**Prøve-kvote Del 0:** ingen egen prøve (dekkes av øvingseksamenene i Del 12).

### Del 1 — Symmetrisk krypto og perfekt sikkerhet *(prioritet: KUNNE — 19–33 %)*

#### Kapittel 1.1: One-time pad og perfekt sikkerhet
**id:** `tma4160-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** `tma4160-0-2`

- **Kapitteltype:** beregnings-/definisjonskapittel (kunne).
- **Description:** One-time pad, Shannons perfekte sikkerhet (definisjon +
  nøkkellengde-nødvendighet), kjent-klartekst-angrep og dobbel-OTP-bruddet
  (gjenbrukt nøkkel).
- **Eksamensbelegg:** 19 % (4/21), mest M (dobbel-OTP-brudd). Sjanger I (perfekt
  sikkerhet som definisjon) + kortsvar. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 0.2. `collapsible` **Symbol- og formelliste:**
  $\oplus$, nøkkelrom, perfekt sikkerhet $\Pr[M=m\mid C=c]=\Pr[M=m]$.
- **Innholdskontrakt:** OTP-kryptering $c=m\oplus k$; **perfekt sikkerhet**
  (definisjon i ord + formel); teoremet at perfekt sikkerhet krever
  $|\mathcal{K}|\ge|\mathcal{M}|$ (utledes med intuisjon); **nøkkelgjenbruk-angrep**
  $c_1\oplus c_2=m_1\oplus m_2$; malleability (OTP er formbar).
- **Typiske feil:** #7 (tro OTP er «sikker» også ved gjenbruk); blande perfekt og
  beregnings-sikkerhet.
- **Modellsvar:** «To meldinger kryptert med samme OTP-nøkkel — hva kan angriperen
  utlede?»; «Vis at perfekt sikkerhet krever like langt nøkkelrom som meldingsrom».
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 1.2: Klassiske chiffer — knekk for hånd
**id:** `tma4160-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `tma4160-1-1`

- **Kapitteltype:** beregningskapittel (kunne — K-favoritt).
- **Description:** Shift/Cæsar (uttømmende søk mod 26), affin $c=am+b$ (to lineære
  likninger fra kjent klartekst, $a$ invertibel mod 26), substitusjon
  (frekvensanalyse), Hill blokk 2 (matriseinvers mod 26) — knekk for hånd.
- **Eksamensbelegg:** 33 % (7/21), K-favoritt, som flervalg i 2024. Sjanger A.
  Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 1.1; [Modulær invers](/bok/ma1301/ma1301-1-2)
  `(verifiser lenke)`. `collapsible` **Symbol- og formelliste:** mod-26-aritmetikk,
  invertible rester mod 26, matriseinvers mod $n$.
- **Innholdskontrakt:** de fire chiffertypene med angrepsmetode; **$a$ må være
  invertibel mod 26** ($\gcd(a,26)=1$ — skriv betingelsen, #1-slekt); Hill:
  $K=A^{-1}C \bmod 26$ fra kjent klartekst.
- **Typiske feil:** velge ikke-invertibel $a$; feil matriseinvers mod 26; glemme
  at frekvensanalyse trenger nok tekst.
- **Modellsvar:** «Chifferteksten er antatt shift-kryptert — finn en plausibel
  dekryptering»; «Affin med kjent klartekst-fragment — løs for $(a,b)$».
- **Kvote:** 20 quiz / 18 flashcards.

#### Kapittel 1.3: Blokkchiffer-moduser, AES som PRP og strømchiffer
**id:** `tma4160-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `tma4160-1-1`

- **Kapitteltype:** beregnings-/definisjonskapittel (kunne).
- **Description:** ECB/CBC/CTR-moduser og deres sikkerhet (ECB lekker mønster),
  AES som pseudo-tilfeldig permutasjon (PRP), og strømchiffer/LFSR (bryt via kjent
  klartekst).
- **Eksamensbelegg:** Moduser + AES-som-PRP 19 % (mest M); LFSR 10 % (eldste K).
  Sjangre J (PRP) + kortsvar. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 1.1. `collapsible` **Symbol- og formelliste:**
  $E(P,K)$, IV, LFSR-tilbakekoblingspolynom, PRP-definisjon.
- **Innholdskontrakt:** de tre modusene (formel + sikkerhetsegenskap); **ECB
  usikker** (like blokker → like chiffer); **AES som PRP** (definisjon, brukt i
  konstruksjoner); **LFSR-brudd** via kjent klartekst (lineære likninger over
  $\mathbb{F}_2$).
- **Typiske feil:** #7 (tro ECB skjuler mønster); blande PRP og PRF; feil
  LFSR-tilstandsrekonstruksjon.
- **Modellsvar:** «Hvorfor lekker ECB struktur i en bildeliknende klartekst?»;
  «Bryt en LFSR-strøm gitt nok kjent klartekst».
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 1:** 4 prøver (1.A OTP/perfekt sikkerhet + dobbel-OTP · 1.B
klassiske chiffer (shift/affin/Hill) · 1.C moduser + AES-PRP + LFSR · 1.D samlet
grunnlagsprøve på eksamensnivå).

### Del 2 — Tallteoretisk verktøykasse og endelige kropper *(prioritet: KUNNE/GRUNNLAG — 33 %)*

#### Kapittel 2.1: Modulær aritmetikk, Euklid, rask eksponentiasjon og CRT
**id:** `tma4160-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4160-0-2`

- **Kapitteltype:** beregningskapittel (grunnlag — anvendt oppfriskning).
- **Description:** Verktøykassen kryptografien bruker overalt: utvidet Euklid
  (invers), square-and-multiply, CRT (som ringisomorfi + til faktorisering/
  punkttelling), Fermats lille teorem og Eulers teorem med $\varphi(N)$, Lagranges
  teorem (orden deler gruppeorden). Grunnbegrepene ligger i MA1301/TMA4150 — her
  er anvendelsen og kostnadstellingen.
- **Eksamensbelegg:** CRT 43 % (9/21, verktøy sjelden egen oppgave); Euklid/rask
  eksponentiasjon gjennomgående. Sjangre B, C, D, E (verktøy). Prioritet: grunnlag.
- **Forkunnskaper/kryssbok:** kap. 0.2; [Euklids algoritme og CRT](/bok/ma1301/ma1301-1-3)
  `(verifiser lenke)`, [Fermat/Euler](/bok/ma1301/ma1301-2-2) `(verifiser lenke)`.
  `collapsible` **Symbol- og formelliste:** $\gcd$, $a^{-1}\bmod n$, $\varphi(N)$,
  Fermat/Euler, CRT-formelen.
- **Innholdskontrakt:** utvidet Euklid → invers; **rask eksponentiasjon** med
  kostnadstelling; **CRT** som system $x\equiv a_i\pmod{n_i}$ og som ringisomorfi
  $\mathbb{Z}_{pq}\cong\mathbb{Z}_p\times\mathbb{Z}_q$; **Fermat**
  $a^{p-1}\equiv1\pmod p$, **Euler** $a^{\varphi(N)}\equiv1$; **Lagrange** (orden
  deler gruppeorden — grunnlag for #3). Poengter #4 (eksponenter mod $\varphi/$orden).
- **Typiske feil:** #4 (feil modulus i eksponent); feil CRT-sammensetting; regne
  invers uten å sjekke $\gcd=1$.
- **Modellsvar:** «Beregn $7^{-1}\bmod 40$ med utvidet Euklid»; «Løs et CRT-system
  og forklar ringisomorfien».
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 2.2: Endelige kropper og AES-aritmetikk
**id:** `tma4160-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `tma4160-2-1`

- **Kapitteltype:** beregnings-/konstruksjonskapittel (kunne — overlapp TMA4150).
- **Description:** Konstruksjon av $\mathbb{F}_q$ og $\mathbb{F}_2[x]/(p(x))$,
  irreducibilitet, inverser via utvidet Euklid i $\mathbb{F}_2[x]$, og AES-S-boksen
  (invers i $\mathbb{F}_{2^8}$ + affin transformasjon) — hva som går galt hvis
  reduksjonspolynomet ikke er irreducibelt.
- **Eksamensbelegg:** 33 % (7/21). Sjanger M. Grunnbegrepene i TMA4150; her
  anvendelsen. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 2.1; [Ringer og kropper](/bok/tma4150/tma4150-4-1)
  `(verifiser lenke)`. `collapsible` **Symbol- og formelliste:** $\mathbb{F}_q$,
  $\mathbb{F}_2[x]/(p(x))$, irreducibelt polynom, multiplikativgruppe.
- **Innholdskontrakt:** konstruer $\mathbb{F}_{16}=\mathbb{F}_2[x]/(x^4+x+1)$, vis
  at $x$ genererer multiplikativgruppa; inverser via utvidet Euklid i
  $\mathbb{F}_2[x]$; **irreducibilitet er nødvendig** (#11 — ellers ikke en kropp,
  ikke alle invertible); AES-S-boks som invers + affin transform.
- **Typiske feil:** #11 (reducibelt reduksjonspolynom); feil polynomdivisjon i
  $\mathbb{F}_2[x]$; blande legeme-orden $q$ med utvidelsesgrad.
- **Modellsvar:** «Konstruer $\mathbb{F}_{16}$ og finn inversen til et gitt
  element»; «Forklar hvorfor et reducibelt $p(x)$ bryter AES-S-boksen».
- **Kvote:** 18 quiz / 22 flashcards.

**Prøve-kvote Del 2:** 4 prøver (2.A Euklid/invers + rask eksponentiasjon · 2.B
CRT (system + ringisomorfi) · 2.C endelige kropper + AES-aritmetikk · 2.D samlet
verktøykasse-prøve på eksamensnivå).

### Del 3 — Diskret logaritme og DL-algoritmer *(prioritet: PERFEKT — 62 %)*

#### Kapittel 3.1: Baby-step Giant-step og Pohlig–Hellman
**id:** `tma4160-3-1` · **number:** 3.1 · **estimatedMinutes:** 65 · **prerequisites:** `tma4160-2-1`

- **Kapitteltype:** beregningskapittel (perfekt).
- **Description:** DL-problemet, Baby-step Giant-step (Shanks, $L\approx\sqrt p$,
  babystep-tabell), og Pohlig–Hellman (faktoriser gruppeorden, løs modulo hver
  primtallspotens, CRT sammen) — med den innebygde konsistenssjekken.
- **Eksamensbelegg:** DL-algoritmer 62 % (13/21), nesten alltid i K. Sjanger B.
  Ofte «bruk metode X *og* Y og sjekk at svarene stemmer». Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1; [Orden og sykliske grupper](/bok/tma4150/tma4150-2-1)
  `(verifiser lenke)`. `collapsible` **Symbol- og formelliste:** $\log_g x$,
  gruppeorden, BSGS-parametere, Pohlig–Hellman-CRT.
- **Innholdskontrakt:** **BSGS** (algoritme + $O(\sqrt p)$-kostnad, utledes med
  intuisjon); **Pohlig–Hellman** (per primtallspotens + CRT); **konsistenssjekk**
  (samme $\log_g x$ via begge). Kostnadstelling (sensorkrav 1).
- **Typiske feil:** feil $L$-valg i BSGS; feil per-potens-oppløsning i PH; #4
  (eksponenter mod gruppeorden).
- **Modellsvar:** «Beregn $\log_6 51$ i $\mathbb{F}_{271}^*$ med Pohlig–Hellman
  *og* Shanks, og kryssjekk» (nyskrevne tall).
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 3.2: Pollard ρ og diskret logaritme fra relasjoner
**id:** `tma4160-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `tma4160-3-1`

- **Kapitteltype:** beregningskapittel (perfekt).
- **Description:** Pollard ρ for DL (syklussøk med partisjonert iterasjonsfunksjon
  $S_1,S_2,S_3$), og DL fra lineære relasjoner mellom eksponenter (ta logaritmer,
  løs kongruens — pass på ikke-invertible koeffisienter).
- **Eksamensbelegg:** Del av DL-62 %. Sjanger B. **#1 er den hyppigste fellen her.**
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1. `collapsible` **Symbol- og formelliste:**
  iterasjonsfunksjon, Floyd-syklussøk, lineær kongruens mod orden.
- **Innholdskontrakt:** **Pollard ρ for DL** (skjelett); **DL fra relasjoner**
  (f.eks. $g^a y^b=g^c y^d$ → lineær kongruens); **ikke-invertible koeffisienter**
  ($\gcd(\text{koeff},\text{orden})\ne1$ → svar bare mod en divisor, sjekk alle
  kandidatene — #1, skriv betingelsen eksplisitt).
- **Typiske feil:** #1 (dele ulovlig når $\gcd\ne1$); feil syklussøk; glemme
  kandidatsjekk.
- **Modellsvar:** «Gitt $3a\equiv 123\pmod{270}$ fra en relasjon — finn alle
  mulige $a$ og velg riktig ved sjekk» (nyskrevne tall).
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 3.3: DL-drill
**id:** `tma4160-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `tma4160-3-2`

- **Kapitteltype:** drillkapittel (DNA A-drill).
- **Description:** Blandet DL-drill: velg metode (BSGS/PH/Pollard/relasjon),
  kryssjekk, håndter ikke-invertible koeffisienter — alt på eksamensnivå.
- **Eksamensbelegg:** Meta (sjanger B). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1–3.2. `collapsible` **Symbol- og
  formelliste:** de tre algoritmeskjelettene + konsistenssjekk-oppskriften.
- **Innhold:** `text` Løsningsoppskrift (velg metode etter gruppeorden-struktur);
  `example` gjennomregnet case med kostnadstelling; `warning` #1/#4;
  `exercise` × 8–12 varianter (glatt vs. ikke-glatt orden, to-metode-kryssjekk,
  relasjonsoppgaver med $\gcd\ne1$).
- **Typiske feil:** #1, #4; velge dyr metode når orden er glatt (PH er raskere).
- **Kvote:** 16 quiz / 12 flashcards.

**Prøve-kvote Del 3:** 4 prøver (3.A BSGS · 3.B Pohlig–Hellman + CRT · 3.C
Pollard ρ + relasjoner (#1) · 3.D samlet DL-prøve med to-metode-kryssjekk).

### Del 4 — Faktorisering *(prioritet: KUNNE — 48 %, K-tungt)*

#### Kapittel 4.1: Fermat, Pollard ρ, Pollard p−1 og x²≡y²
**id:** `tma4160-4-1` · **number:** 4.1 · **estimatedMinutes:** 65 · **prerequisites:** `tma4160-2-1`

- **Kapitteltype:** beregningskapittel (kunne).
- **Description:** Faktorisering av $n=pq$: Fermat ($n=a^2-b^2$, nær-like
  primtall), Pollard ρ ($f(x)=x^2+1$, Floyd, $\gcd(s_i-t_i,n)$), Pollard p−1
  ($\gcd(a^{B!}-1,n)$), $x^2\equiv y^2$-metoden (glatte relasjoner → kvadrat), og
  via $\varphi(N)$ (løs $N=pq$, $\varphi=(p-1)(q-1)$).
- **Eksamensbelegg:** 48 % (10/21), nesten kun K. Sjanger C. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 2.1. `collapsible` **Symbol- og formelliste:**
  $n=pq$, $\varphi(N)$, Pollard-iterasjon, glatt tall.
- **Innholdskontrakt:** de fire+én metodene med når hver passer (Fermat ved
  nær-like $p,q$; p−1 ved glatt $p-1$); **via $\varphi(N)$** som ligningssystem.
  Kostnadstelling.
- **Typiske feil:** feil Floyd-syklussøk; velge Fermat når $p,q$ er langt fra
  hverandre; regnefeil i $\gcd$.
- **Modellsvar:** «Faktoriser $n$ med Pollard ρ og $f(x)=x^2+1$, startverdi gitt»;
  «Gitt $N$ og $\varphi(N)$, finn $p,q$» (nyskrevne tall).
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 4.2: Faktoriserings-drill
**id:** `tma4160-4-2` · **number:** 4.2 · **estimatedMinutes:** 45 · **prerequisites:** `tma4160-4-1`

- **Kapitteltype:** drillkapittel (DNA A-drill).
- **Description:** Velg riktig faktoriseringsmetode ut fra strukturen til $n$, og
  kjør den for hånd — på eksamensnivå.
- **Eksamensbelegg:** Meta (sjanger C). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 4.1. `collapsible` **Symbol- og formelliste:**
  metodevalg-treet + $\gcd$-oppskriften.
- **Innhold:** `text` metodevalg-oppskrift; `example` gjennomregnet case;
  `warning` metodefeil; `exercise` × 8–12 varianter (nær-like $p,q$; glatt $p-1$;
  via $\varphi$; $x^2\equiv y^2$).
- **Typiske feil:** velge feil metode for $n$-strukturen; ufullstendig syklussøk.
- **Kvote:** 14 quiz / 10 flashcards.

**Prøve-kvote Del 4:** 4 prøver (4.A Fermat + via $\varphi(N)$ · 4.B Pollard ρ ·
4.C Pollard p−1 + $x^2\equiv y^2$ · 4.D samlet faktoriserings-prøve med metodevalg).

### Del 5 — Elliptiske kurver i kryptografi *(prioritet: PERFEKT — 62 %)*

#### Kapittel 5.1: Punktaritmetikk og rask punkt-multiplikasjon
**id:** `tma4160-5-1` · **number:** 5.1 · **estimatedMinutes:** 65 · **prerequisites:** `tma4160-2-1`

- **Kapitteltype:** beregningskapittel (perfekt).
- **Description:** Elliptiske kurver over $\mathbb{F}_p$, addisjonsformlene
  (distinkte punkter vs. dobling), $\mathcal{O}$, og rask punkt-multiplikasjon
  $kP$ (double-and-add) — all aritmetikk i $\mathbb{F}_p$.
- **Eksamensbelegg:** ECC 62 % (13/21), bærebjelke i K, tilbake 2024. Sjanger D.
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1. `collapsible` **Symbol- og formelliste:**
  $E: y^2=x^3+Ax+B$, $P=(x,y)$, $\mathcal{O}$, $\alpha$ (stigningstall), $kP$.
- **Innholdskontrakt:** **addisjonsformlene** — distinkte:
  $\alpha=(y_2-y_1)/(x_2-x_1)$; dobling: $\alpha=(3x_1^2+A)/(2y_1)$; deretter
  $x_3=\alpha^2-x_1-x_2$, $y_3=\alpha(x_1-x_3)-y_1$ (alt mod $p$); **spesialtilfellet
  $x_1=x_2$** (gir $\mathcal{O}$ eller krever dobling — #2); **double-and-add** for
  $kP$ med kostnadstelling.
- **Typiske feil:** #2 (feil formel / glemt spesialtilfelle); regnefeil i
  $\mathbb{F}_p$-inversjon.
- **Modellsvar:** «$E: y^2=x^3-x+15$ over $\mathbb{F}_{19}$, $P=(3,1)$ — regn ut
  $2P$ og $16P$ med double-and-add». *(Merk: $\#E=17$ for denne kurven — verifisert;
  brukes i 5.2.)*
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 5.2: Punktorden, Hasses teorem og punkttelling
**id:** `tma4160-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `tma4160-5-1`

- **Kapitteltype:** beregningskapittel (perfekt).
- **Description:** Orden av et punkt, Hasses teorem
  $|\#E-(p+1)|\le 2\sqrt p$, punkttelling (kombiner Hasse-intervallet med kjent
  punktorden via Lagrange, evt. CRT), og syklisitet.
- **Eksamensbelegg:** Del av ECC-62 %. Sjanger D. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.1; [Lagranges teorem](/bok/tma4150/tma4150-2-1)
  `(verifiser lenke)`. `collapsible` **Symbol- og formelliste:** $\#E$, punktorden,
  Hasse-grensen, Lagrange.
- **Innholdskontrakt:** **punktorden** (minste $k$ med $kP=\mathcal{O}$);
  **Hasses teorem** (verifisert: $|\#E-(p+1)|\le2\sqrt p$ — bruk til å begrense
  intervallet, #3); **punktorden deler $\#E$** (Lagrange); **syklisk** hvis det
  finnes punkt av orden $\#E$. Ferdig­kontrollert modelltall: $E: y^2=x^3-x+15$
  over $\mathbb{F}_{19}$ har $\#E=17$ (i intervallet $[11.3,28.7]$).
- **Typiske feil:** #3 (telle uten Hasse-avgrensning / glemme Lagrange); feil
  intervallgrenser.
- **Modellsvar:** «Bestem $\#E$ for en gitt kurve ved å kombinere Hasse-intervallet
  med ordenen til et kjent punkt; er kurven syklisk?».
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 5.3: ECC-DL, ECC-ElGamal og ECC-drill
**id:** `tma4160-5-3` · **number:** 5.3 · **estimatedMinutes:** 60 · **prerequisites:** `tma4160-5-2`

- **Kapitteltype:** beregnings-/drillkapittel (perfekt).
- **Description:** DL på kurven ($\log_P Q$ via gitte multipler / lineære
  relasjoner mod gruppeorden), ECC-ElGamal ($(rP, rQ+M)$), og blandet
  punktregnings-drill på eksamensnivå.
- **Eksamensbelegg:** Del av ECC-62 %; ECC-DL tilbake 2024. Sjanger D (+ F for
  ECC-ElGamal). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.2; kap. 7.1 (ElGamal, framoverlenke — kort
  oppfriskning av ElGamal-strukturen «Sist du var her»). `collapsible` **Symbol-
  og formelliste:** $\log_P Q$, ECC-ElGamal-chiffer, lineære relasjoner mod orden.
- **Innholdskontrakt:** **$\log_P Q$** via kjente multipler/relasjoner (kobler til
  #1 for ikke-invertible koeffisienter mod orden); **ECC-ElGamal** kryptering/
  dekryptering; drill (punktregning → orden → punkttelling → ECC-DL i kjede,
  delpunkt-kjeding).
- **Typiske feil:** #1 (koeffisient ikke invertibel mod orden), #2, #3.
- **Modellsvar:** «Gitt $P,Q,R$ på kurven med kjente multippel-relasjoner, finn
  $\log_P Q$»; «Krypter og dekrypter en melding med ECC-ElGamal».
- **Kvote:** 18 quiz / 16 flashcards.

**Prøve-kvote Del 5:** 4 prøver (5.A punktaritmetikk + $kP$ · 5.B orden + Hasse +
punkttelling + syklisitet · 5.C ECC-DL + ECC-ElGamal · 5.D samlet ECC-prøve med
delpunkt-kjeding).

### Del 6 — RSA og Rabin *(prioritet: PERFEKT — 67 %)*

#### Kapittel 6.1: RSA — bruk, nøkkelgenerering og φ(N)-faktorisering
**id:** `tma4160-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4160-2-1`

- **Kapitteltype:** beregningskapittel (perfekt).
- **Description:** RSA-kryptering/dekryptering ($c=m^e\bmod n$,
  $d=e^{-1}\bmod\varphi(n)$, evt. mod $\mathrm{lcm}(p-1,q-1)$), nøkkelgenerering,
  og å faktorisere $n$ gitt $\varphi(N)$.
- **Eksamensbelegg:** RSA 67 % (14/21), begge epoker. Sjanger E. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1; [RSA-grunnlaget](/bok/ma1301/ma1301-3-1)
  `(verifiser lenke)`. `collapsible` **Symbol- og formelliste:** $n=pq$, $e$, $d$,
  $\varphi(n)$, $\mathrm{lcm}(p-1,q-1)$.
- **Innholdskontrakt:** RSA-oppsett + korrekthet (via Euler); **$e$ må være
  invertibel mod $\varphi(n)$** ($\gcd(e,\varphi(n))=1$ — verifisert betingelse,
  ikke bare «$e$ odde»); dekryptering; **faktoriser $n$ fra $\varphi(N)$** som
  ligningssystem; RSA-CRT for fart. #4 (eksponent mod $\varphi$, ikke mod $n$).
- **Typiske feil:** #4; velge $e$ med $\gcd(e,\varphi)\ne1$; feil $d$-beregning.
- **Modellsvar:** «Generer en RSA-nøkkel med gitte $p,q,e$ og dekrypter et
  chiffer»; «Gitt $n$ og $\varphi(n)$, finn $p,q$».
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 6.2: RSA-svakheter, determinisme- og formbarhetsangrep
**id:** `tma4160-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4160-6-1`

- **Kapitteltype:** beregnings-/angrepskapittel (perfekt).
- **Description:** Hvorfor bestemte nøkkelgenererings-oppskrifter er usikre (delt
  $n$, delt $p$, forutsigbar $q$, $q=\mathrm{nextprime}(p)\Rightarrow$ Fermat), og
  determinisme-/formbarhetsangrep på lekebok-RSA (kjent liten meldingsmengde;
  multiplikativ homomorfi bryter integritet) — motmiddel randomisert padding.
- **Eksamensbelegg:** Del av RSA-67 %. Sjangre E, H. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 6.1, kap. 4.1 (Fermat-faktorisering).
  `collapsible` **Symbol- og formelliste:** determinisme, multiplikativ homomorfi
  $\mathrm{Enc}(m)\cdot\mathrm{Enc}(m')=\mathrm{Enc}(mm')$, padding.
- **Innholdskontrakt:** de usikre oppskriftene med *hvorfor*; **lekebok-RSA er
  deterministisk** (bryter IND-CPA, #7) og **multiplikativt formbar** (#7);
  padding som motmiddel.
- **Typiske feil:** #7 (anta lekebok-RSA sikker); #4; overse Fermat-angrepet ved
  nær-like $p,q$.
- **Modellsvar:** «Fire foreslåtte oppskrifter for effektiv RSA-nøkkelgenerering —
  forklar hvorfor ingen bør brukes»; «Vis at lekebok-RSA er formbar».
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 6.3: Rabin, Jacobi-symbol og kvadratiske rester
**id:** `tma4160-6-3` · **number:** 6.3 · **estimatedMinutes:** 60 · **prerequisites:** `tma4160-6-1`

- **Kapitteltype:** beregningskapittel (kunne — K-tema, samlet med RSA-slekt).
- **Description:** Jacobi-/Legendre-symbol (kvadratisk resiprositet +
  reduksjonsregler), kvadratiske rester mod $n=pq$, Rabin-kryptering/-signatur
  (kvadratrøtter mod $n$ med $p,q\equiv3\pmod4$), og at kvadratrot ⇒ faktorisering.
- **Eksamensbelegg:** Jacobi/kvadratiske rester 33 % (7/21, rent K); Rabin del av
  signatur-blokken. Sjangre L, G. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 6.1; [Kvadratiske rester](/bok/ma1301/ma1301-4-2)
  `(verifiser lenke)`. `collapsible` **Symbol- og formelliste:** $(a/n)$,
  Legendre vs. Jacobi, kvadratisk resiprositet.
- **Innholdskontrakt:** beregn Jacobi-symbol via resiprositet; **Jacobi $=1$ er
  IKKE kvadratisk rest mod sammensatt $n$** (#10 — gjelder bare primtall/Legendre);
  Rabin (fire kvadratrøtter, $\gcd(z-x,n)$ → faktorisering); Goldwasser–Micali-idé
  nevnt (bør kjenne til).
- **Typiske feil:** #10 (Jacobi = kvadratisk rest); feil resiprositets-reduksjon.
- **Modellsvar:** «Beregn $(a/n)$ og avgjør om $a$ er kvadratisk rest mod $p$»;
  «Vis hvordan en kvadratrot mod $n$ gir en faktorisering».
- **Kvote:** 18 quiz / 18 flashcards.

**Prøve-kvote Del 6:** 4 prøver (6.A RSA bruk + nøkkelgenerering + $\varphi$-fakt. ·
6.B RSA-svakheter + determinisme/formbarhet · 6.C Rabin + Jacobi + kvadratiske
rester · 6.D samlet RSA/Rabin-prøve på eksamensnivå).

### Del 7 — ElGamal og Diffie–Hellman *(prioritet: PERFEKT — 62 %)*

#### Kapittel 7.1: Diffie–Hellman og antakelsene CDH, DDH, Square-DH
**id:** `tma4160-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4160-3-1`

- **Kapitteltype:** definisjons-/beregningskapittel (perfekt).
- **Description:** Diffie–Hellman-nøkkelutveksling og de tre hardhetsantakelsene
  DLog, CDH, DDH og Square-DH — definisjonene som beviselig sikkerhet hviler på.
- **Eksamensbelegg:** DH-antakelser 38 % (8/21), tung i M (SqDH-reduksjon 2× +
  2024). Sjanger I (grunnlag). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1. `collapsible` **Symbol- og formelliste:**
  $g^{ab}$, CDH, DDH, SqDH — hver som problem/antakelse.
- **Innholdskontrakt:** DH-protokollen; **DLog / CDH / DDH / Square-DH** som
  presise problemer; hvordan de rangeres i hardhet; grunnlaget for reduksjoner
  (Del 9).
- **Typiske feil:** blande CDH og DDH; #4.
- **Modellsvar:** «Skriv ned DH-utvekslingen og forklar hva CDH- og DDH-antakelsen
  hver sier».
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 7.2: ElGamal-kryptering — homomorfi, formbarhet og nonce-gjenbruk
**id:** `tma4160-7-2` · **number:** 7.2 · **estimatedMinutes:** 60 · **prerequisites:** `tma4160-7-1`

- **Kapitteltype:** beregnings-/angrepskapittel (perfekt).
- **Description:** ElGamal-kryptering $(g^r, y^r m)$, dekryptering med hemmelig
  $a$, multiplikativ homomorfi/formbarhet, og nonce-gjenbruk-angrepet ($r_1=r_2
  \Rightarrow C_1/C_2=M_1/M_2$).
- **Eksamensbelegg:** ElGamal 62 % (13/21), svært stabil. Sjanger F. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 7.1. `collapsible` **Symbol- og formelliste:**
  $(g^r, y^r m)$, homomorfi, nonce/randomness $r$.
- **Innholdskontrakt:** kryptering/dekryptering; **homomorfi** (komponentvis
  produkt → chiffer av produktet); **formbarhet** (gang $y^r m$ med $m'$ → chiffer
  av $mm'$); **nonce-gjenbruk** (#8); at kjent klartekst ikke gir brudd (DL-hardhet).
- **Typiske feil:** #8 (overse nonce-gjenbruk); #7 (tro ElGamal er ikke-formbar);
  #4.
- **Modellsvar:** «To ElGamal-chiffer med samme $R$ — hva utledes om $M_1,M_2$?»;
  «Lag et chiffer av $mm'$ fra et chiffer av $m$ uten å dekryptere».
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 7.3: ElGamal/DH-drill
**id:** `tma4160-7-3` · **number:** 7.3 · **estimatedMinutes:** 45 · **prerequisites:** `tma4160-7-2`

- **Kapitteltype:** drillkapittel (DNA A-drill).
- **Description:** Blandet drill: DH-antakelse-gjenkjenning, ElGamal-regning,
  formbarhets-/homomorfi-/nonce-angrep — på eksamensnivå.
- **Eksamensbelegg:** Meta (sjangre F, I). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 7.1–7.2. `collapsible` **Symbol- og
  formelliste:** ElGamal + antakelsene i kortform.
- **Innhold:** `text` løsningsoppskrift; `example` gjennomregnet case; `warning`
  #7/#8; `exercise` × 8–12 (dekryptering, formbarhet, homomorf produkt,
  nonce-gjenbruk, antakelse-klassifisering).
- **Typiske feil:** #7, #8.
- **Kvote:** 14 quiz / 12 flashcards.

**Prøve-kvote Del 7:** 4 prøver (7.A DH + CDH/DDH/SqDH-antakelsene · 7.B
ElGamal-kryptering/dekryptering · 7.C homomorfi/formbarhet/nonce-gjenbruk · 7.D
samlet ElGamal/DH-prøve på eksamensnivå).

### Del 8 — Signaturer og identifikasjon *(prioritet: PERFEKT — 67 %)*

#### Kapittel 8.1: Klassiske signaturskjemaer — RSA, ElGamal, Rabin, Lamport, blind
**id:** `tma4160-8-1` · **number:** 8.1 · **estimatedMinutes:** 65 · **prerequisites:** `tma4160-6-1`

- **Kapitteltype:** beregnings-/konstruksjonskapittel (perfekt).
- **Description:** Konstruksjon av de klassiske signaturskjemaene: RSA-signatur
  ($\sigma^e\equiv h(m)$), ElGamal-signatur, Rabin, Lamport engangs-signatur
  (hash-basert), og blind signatur (blind → signer → avblind, med korrekthet +
  at signereren ikke lærer $m$).
- **Eksamensbelegg:** Signaturer 67 % (14/21), begge epoker (K: konstruksjon).
  Sjanger G. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 6.1, kap. 7.2. `collapsible` **Symbol- og
  formelliste:** $\mathrm{Sign}/\mathrm{Ver}$, $h(m)$, blindingsfaktor $r$.
- **Innholdskontrakt:** RSA-signatur + verifikasjon; ElGamal-signatur
  ($\gamma=g^k$, $\delta=(m-a\gamma)k^{-1}$); Rabin (kvadratrøtter, Jacobi-triks);
  Lamport (hash-basert, engangs); **blind signatur** ($t=r^e h(m)$,
  $\tau=t^d$, $\sigma=\tau r^{-1}$ — vis korrekthet + blindhet).
- **Typiske feil:** #4 (eksponent-modulus); #8 (nonce $k$-gjenbruk i ElGamal-
  signatur — framoverpeker til 8.3); feil blindingsavblinding.
- **Modellsvar:** «Sett opp en RSA-signatur og verifiser den»; «Vis at Bob i en
  blind-signatur-protokoll ikke lærer meldingen».
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 8.2: Schnorr — signatur, identifikasjon og 2-special soundness
**id:** `tma4160-8-2` · **number:** 8.2 · **estimatedMinutes:** 65 · **prerequisites:** `tma4160-7-1`

- **Kapitteltype:** bevis-/beregningskapittel (perfekt).
- **Description:** Schnorr-signatur ($v=H(m,g^r)$, $w=r+av$), Schnorr-
  identifikasjonsprotokoll (commitment–challenge–response), og 2-special soundness /
  witness-ekstraksjon (to transkript med samme commitment, ulik challenge →
  $w=(\mathrm{resp}_1-\mathrm{resp}_2)/(\mathrm{ch}_1-\mathrm{ch}_2)$).
- **Eksamensbelegg:** Del av signatur-67 %; Schnorr-ID + 2-special soundness tung
  i 2023. Sjangre G, H. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 7.1. `collapsible` **Definisjons- og
  formelliste:** Schnorr-protokollen, special soundness, witness-ekstraksjon,
  Fiat–Shamir.
- **Innholdskontrakt:** Schnorr-signatur + verifikasjon; **identifikasjons­protokollen**
  (commit $g^r$ → challenge → response); **2-special soundness** (witness-ekstraksjon
  — vis formelen, betingelse: $\mathrm{ch}_1-\mathrm{ch}_2$ invertibel mod orden,
  #1-slekt); Fiat–Shamir (nevnt: ID → signatur).
- **Typiske feil:** #1 (challenge-differanse ikke invertibel); #8 (nonce-gjenbruk);
  #5/#6 hvis soundness-argumentet ikke føres presist.
- **Modellsvar:** «Ekstraher witness fra to Schnorr-transkript med samme commitment
  og ulik challenge»; «Gjør Schnorr-ID om til en signatur med Fiat–Shamir».
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 8.3: Signatur-/MAC-angrep og -bevis — drill
**id:** `tma4160-8-3` · **number:** 8.3 · **estimatedMinutes:** 60 · **prerequisites:** `tma4160-8-2`

- **Kapitteltype:** bevis-/angrepsdrill (DNA B-drill).
- **Description:** Moderne angreps- og bevissjanger: tekstbok-RSA-signatur ikke
  UF-CMA (forfalskning $(m x^e,\sigma x)$), nonce-gjenbruk i Schnorr/ElGamal-
  signatur (løs ut hemmelig nøkkel), MAC-forfalskning, og UF-KOA/UF-CMA-bevis
  (reduser til DLog: embed instans i $pk$, ekstraher $x$ fra forfalskningen).
- **Eksamensbelegg:** Del av signatur-67 % (M-siden, stigende). Sjanger H.
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 8.1–8.2; kap. 0.2 (reduksjonsmalen).
  `collapsible` **Definisjons- og formelliste:** UF-CMA/UF-KOA som attack games,
  forfalskningsmalene.
- **Innhold:** `text` løsningsoppskrift (angrep: finn forfalskning + vis at den
  passerer; bevis: reduksjonsmalen); `example` tekstbok-RSA-forfalskning + en
  DLog-reduksjon med sensor-margnotater; `warning` #5/#6/#8; `exercise` × 8–12
  (forfalskning, nonce-utvinning, MAC-kollisjon, reduksjon til DLog).
- **Typiske feil:** #5, #6, #8; ufullstendig angrep (glemmer å vise at forfalskningen
  verifiserer).
- **Kvote:** 16 quiz / 14 flashcards.

**Prøve-kvote Del 8:** 4 prøver (8.A klassiske signaturer (RSA/ElGamal/blind) · 8.B
Rabin/Lamport + Schnorr-signatur · 8.C Schnorr-ID + 2-special soundness/witness ·
8.D angrep + UF-CMA/UF-KOA-bevis).

### Del 9 — Beviselig sikkerhet: primitiver, spill og reduksjoner *(prioritet: PERFEKT — 43 % totalt, ~100 % i M)*

#### Kapittel 9.1: PRG, PRF, PRP og negligible-funksjoner
**id:** `tma4160-9-1` · **number:** 9.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4160-1-3`

- **Kapitteltype:** definisjons-/bevisskapittel (perfekt — M-«gratis»-poeng).
- **Description:** Pseudo-tilfeldige generatorer/funksjoner/permutasjoner
  (PRG/PRF/PRP) som sikkerhetsspill, og negligible-funksjoner (avgjør/bevis,
  lukning under addisjon/multiplikasjon).
- **Eksamensbelegg:** PRG/PRF 29 % (6/21), negligible 24 % (5/21) — faste, relativt
  greie M-deloppgaver. Sjanger J. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 0.2 (spill-malen), kap. 1.3 (AES som PRP).
  `collapsible` **Definisjons- og formelliste:** PRG/PRF/PRP-spillene,
  $\mathrm{negl}(\lambda)$.
- **Innholdskontrakt:** **PRG/PRF/PRP** som attack games (skille dem); **negligible**
  (raskere enn invers-polynom; lukning under $+/\times$; moteksempel for kvotient);
  **#12** (invers-polynom $1/\lambda^k$ er *ikke* neglisjerbar). PRG-usikkerhet
  (lekker $s_1$ / lineær) som eksempel.
- **Typiske feil:** #12; blande PRF og PRP; spill uten definert fordel (#5).
- **Modellsvar:** «Avgjør om $f(\lambda)$ er neglisjerbar og bevis lukning under
  addisjon»; «Avgjør om $H(s_1\|s_2)$ er en sikker PRG».
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 9.2: Sikkerhetsdefinisjoner — IND-CPA, IND-CCA og semantisk sikkerhet
**id:** `tma4160-9-2` · **number:** 9.2 · **estimatedMinutes:** 65 · **prerequisites:** `tma4160-9-1`

- **Kapitteltype:** definisjons-/bevisskapittel (perfekt).
- **Description:** Kryptering-sikkerhet som attack games: semantisk/perfekt,
  IND-CPA og IND-CCA, med fordel-definisjonen — og hvorfor lekebok-skjemaer
  (deterministisk RSA, formbar ElGamal) feiler dem.
- **Eksamensbelegg:** Kjernen i M (definer et spill, vis at lekebok-skjema ikke
  oppfyller det). Sjanger I. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 9.1, kap. 6.2 (RSA-determinisme), kap. 7.2
  (ElGamal-formbarhet). `collapsible` **Definisjons- og formelliste:** IND-CPA/CCA-
  spillene, semantisk sikkerhet, fordel.
- **Innholdskontrakt:** **IND-CPA** og **IND-CCA** som spill i forelesningsstil
  ($b\leftarrow\{0,1\}$, utfordring, gjett, fordel); **semantisk sikkerhet**;
  **lekebok-brudd** (deterministisk → ikke IND-CPA, #7; CCA-orakel bryter formbare
  skjemaer). PRF-basert kryptering + korrekthet + CPA-angrep (stream-cipher-typen:
  to like klartekster → likt chiffer).
- **Typiske feil:** #5 (fordel udefinert); #7; blande CPA og CCA.
- **Modellsvar:** «Definer IND-CPA-spillet og vis at deterministisk kryptering
  aldri er IND-CPA-sikker»; «Gi et CCA-angrep på et formbart skjema».
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 9.3: Hash-funksjoner og MAC
**id:** `tma4160-9-3` · **number:** 9.3 · **estimatedMinutes:** 55 · **prerequisites:** `tma4160-9-1`

- **Kapitteltype:** definisjons-/beregningskapittel (kunne).
- **Description:** Hash-egenskaper (kollisjonsresistens, 2. pre-image, trapdoor-
  kollisjon, DL-/RSA-basert hash) og MAC (poly-MAC engangs, PRF-basert,
  encrypted-hash, UF-CMA + forfalskning).
- **Eksamensbelegg:** Hash 33 % (7/21), MAC 38 % (8/21) — begge epoker. Sjangre J, H.
  Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 9.1; kap. 3.1 (DL for DL-hash). `collapsible`
  **Definisjons- og formelliste:** kollisjonsresistens, 2. pre-image, MAC-UF-CMA.
- **Innholdskontrakt:** hash-egenskapene (definisjoner); trapdoor-kollisjon; DL-/
  RSA-hash; **MAC**-typene + korrekthet; **MAC-forfalskning** (finn kolliderende
  input som nuller PRF-ledd). Fødselsdagsgrense nevnt.
- **Typiske feil:** blande kollisjonsresistens og 2. pre-image; #5 i MAC-UF-CMA-spill.
- **Modellsvar:** «Vis en trapdoor-kollisjon for en DL-basert hash»; «Forfalsk en
  engangs-poly-MAC».
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 9.4: Reduksjonsdrill — CDH⇐SqDH og IND-CPA under DDH
**id:** `tma4160-9-4` · **number:** 9.4 · **estimatedMinutes:** 65 · **prerequisites:** `tma4160-9-2`

- **Kapitteltype:** bevisdrill (DNA B-drill) — bokas tyngste bevissjanger.
- **Description:** Reduksjonsdrill: CDH⇐Square-DH (kall SqDH-løseren, kombiner,
  tell orakelkall), IND-CPA under DDH for ElGamal-varianter (embed DDH-instansen,
  argumentér fordeling i begge tilfeller). Full spilldiagram-føring.
- **Eksamensbelegg:** 43 % totalt, ~100 % i M; SqDH-reduksjon i tre moderne sett.
  Sjanger I. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 9.2, kap. 7.1 (antakelsene); kap. 0.2
  (reduksjonsmalen). `collapsible` **Definisjons- og formelliste:** SqDH/CDH/DDH,
  reduksjonsmalen, orakel-telling.
- **Innholdskontrakt:** **CDH⇐SqDH** — verifisert: identiteten
  $(x+y)^2-x^2-y^2=2xy$ gir $g^{xy}$ fra **3 SqDH-orakelkall** + halvering i
  eksponenten ($\cdot\,2^{-1}\bmod q$); **betingelse (skriv ut):** $q$ odde
  (primtallsorden ⇒ oppfylt), ellers er $2$ ikke invertibel. Flere gyldige angrep
  godtas (#5-slekt: kreativitet premieres). **IND-CPA under DDH** for ElGamal:
  embed DDH-tuppel i $pk$/utfordring, vis ekte tuppel ⇒ perfekt simulering,
  tilfeldig ⇒ utfordring uavhengig av $b$ (#6). Orakel-telling er en poenggiver.
- **Typiske feil:** #6 (mangler fordelingsargument i ett av tilfellene); feil
  orakel-telling; glemme $q$-odde-betingelsen i halveringen.
- **Modellsvar:** «Gitt en Square-DH-løser, konstruer en CDH-løser — hvor mange
  kall trengs, og hvilken betingelse på gruppeordenen bruker du?»; «Vis at
  ElGamal er IND-CPA under DDH».
- **Kvote:** 18 quiz / 16 flashcards.

**Prøve-kvote Del 9:** 4 prøver (9.A PRG/PRF/PRP + negligible · 9.B IND-CPA/CCA +
lekebok-brudd · 9.C hash + MAC + forfalskning · 9.D reduksjon (CDH⇐SqDH,
IND-CPA/DDH) med orakel-telling).

### Del 10 — Gitter og post-kvante (Ring-LWE) *(prioritet: KJENNE/STIGENDE — 10 %, framtidsmål)*

#### Kapittel 10.1: Gitter, GGH-lignende PKE og closest-vector
**id:** `tma4160-10-1` · **number:** 10.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4160-2-1`

- **Kapitteltype:** beregnings-/konstruksjonskapittel (kjenne — stigende).
- **Description:** Gitter og basis, unimodulær matrise (heltalls, invertibel),
  closest-vector via avrunding $\lfloor zB^{-1}\rceil B$, og GGH-lignende PKE
  (offentlig «stygg» basis $B'=UB$, dekrypter med «pen» basis + rund av).
- **Eksamensbelegg:** Gitter 10 % (2015 GGH-lignende + 2024). Sjanger K. Prioritet:
  kjenne (men obligatorisk framtidsmål).
- **Forkunnskaper/kryssbok:** kap. 2.1; [Matriser og determinant](/bok/tma4110/tma4110-3-1)
  `(verifiser lenke)`. `collapsible` **Symbol- og formelliste:** gitter $\Lambda$,
  basis $B$, unimodulær $U$, closest-vector.
- **Innholdskontrakt:** gitter/basis; **unimodulær $U$** knytter to baser til samme
  gitter; **closest-vector-avrunding**; **GGH-PKE** (kryptering med stygg basis,
  dekryptering med pen basis + avrunding).
- **Typiske feil:** feil avrunding; blande gitter-basiser; determinant-fortegn.
- **Modellsvar:** «Gitt to baser, avgjør om de spenner samme gitter (unimodulær
  overgangsmatrise)»; «Dekrypter en GGH-lignende chiffer med den pene basisen».
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 10.2: Ring-LWE — norm-ulikheter, dekryptering og homomorfi
**id:** `tma4160-10-2` · **number:** 10.2 · **estimatedMinutes:** 65 · **prerequisites:** `tma4160-10-1`

- **Kapitteltype:** beregnings-/bevisskapittel (kjenne — stigende, 2024-signal).
- **Description:** Ring-LWE-lignende skjema i $R=\mathbb{F}_q[X]/(X^n+1)$:
  norm-ulikhetene, at $\|w-xs\|_\infty$ er begrenset, valg av $q$ for korrekt
  dekryptering, og additiv homomorfi.
- **Eksamensbelegg:** 2024 (Ring-LWE-oppgave, tung). Sjanger K. Prioritet: kjenne
  (obligatorisk framtidsmål).
- **Forkunnskaper/kryssbok:** kap. 10.1, kap. 2.2 (polynomringer). `collapsible`
  **Symbol- og formelliste:** $R=\mathbb{F}_q[X]/(X^n+1)$, $\|\cdot\|_\infty$,
  $\|\cdot\|_1$, støyledd.
- **Innholdskontrakt:** **norm-ulikhetene** ($\|ub\|_\infty\le|u|\,\|b\|_\infty$;
  $\|a+b\|_\infty\le\|a\|_\infty+\|b\|_\infty$; $\|b\|_1\le n\|b\|_\infty$;
  produktformel med **reduksjon mod $X^n+1$** — #9); vis $\|w-xs\|_\infty$ begrenset;
  **velg $q$** slik at støyleddet ikke ødelegger dekrypteringen ($q$ må dominere
  $\|w-xs\|_\infty$ — skriv betingelsen); **additiv homomorfi**.
- **Typiske feil:** #9 (glem reduksjon mod $X^n+1$; feil $q$-grense).
- **Modellsvar:** «Vis at $\|w-xs\|_\infty$ er begrenset og finn nødvendig $q$ for
  korrekt dekryptering»; «Vis at skjemaet er additivt homomorft».
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 10:** 4 prøver (10.A gitter/basis + unimodulær + closest-vector ·
10.B GGH-PKE · 10.C Ring-LWE norm-ulikheter + $q$-grense · 10.D samlet
gitter/post-kvante-prøve).

### Del 11 — Avanserte anvendelser *(prioritet: KJENNE — 5–14 %, bør kjenne til)*

#### Kapittel 11.1: Anonym PKE
**id:** `tma4160-11-1` · **number:** 11.1 · **estimatedMinutes:** 50 · **prerequisites:** `tma4160-9-2`

- **Kapitteltype:** definisjons-/bevisskapittel (kjenne — stigende M-sjanger).
- **Description:** Anonymitet for offentlig-nøkkel-kryptering som attack game:
  hvorfor RSA og ElGamal ikke er anonyme, og hvorfor hashet ElGamal er det —
  også under CCA (2024).
- **Eksamensbelegg:** 14 % (3/21), ny stigende M-sjanger (2022, 2024). Sjanger I
  (variant). Prioritet: kjenne.
- **Forkunnskaper/kryssbok:** kap. 9.2, kap. 7.2. `collapsible` **Definisjons- og
  formelliste:** anonymitetsspillet, hashet ElGamal.
- **Innholdskontrakt:** **anonymitet** som spill; **RSA ikke anonym** (modulus-
  lekkasje); **ElGamal ikke anonym** under CCA; **hashet ElGamal anonym**.
- **Typiske feil:** #5 (spill udefinert); blande anonymitet og konfidensialitet.
- **Modellsvar:** «Definer anonymitetsspillet og vis at RSA-kryptering ikke er
  anonym».
- **Kvote:** 14 quiz / 14 flashcards.

#### Kapittel 11.2: Hemmelighetsdeling, homomorf telling og side-kanal
**id:** `tma4160-11-2` · **number:** 11.2 · **estimatedMinutes:** 50 · **prerequisites:** `tma4160-2-2`

- **Kapitteltype:** beregnings-/anvendelseskapittel (kjenne).
- **Description:** Shamir hemmelighetsdeling / Lagrange-interpolasjon over
  $\mathbb{F}_q$ (juksesjekk), homomorf stemmetelling med ElGamal, og side-kanal-/
  timing-angrep (square-and-multiply-lekkasje) — lavfrekvent beredskap.
- **Eksamensbelegg:** Shamir 14 % (3/21, K); homomorf telling 5 % (2019);
  side-kanal 5 %. Prioritet: kjenne.
- **Forkunnskaper/kryssbok:** kap. 2.2, kap. 7.2. `collapsible` **Symbol- og
  formelliste:** Shamir $(t,n)$-deling, Lagrange-interpolasjon, timing-lekkasje.
- **Innholdskontrakt:** **Shamir** ($t$-av-$n$, Lagrange-interpolasjon over
  $\mathbb{F}_q$); **homomorf stemmetelling** (ElGamal-homomorfi → aggregat);
  **side-kanal** (square-and-multiply lekker bitmønster). Alt merket «bør kjenne til».
- **Typiske feil:** feil Lagrange-interpolasjon; overse at homomorf telling trenger
  homomorf ordning.
- **Modellsvar:** «Rekonstruer hemmeligheten fra $t$ Shamir-andeler med Lagrange»;
  «Forklar hvordan ElGamal-homomorfi gir stemmetelling uten å dekryptere enkeltstemmer».
- **Kvote:** 14 quiz / 12 flashcards.

**Prøve-kvote Del 11:** 4 prøver (11.A anonym PKE-definisjon + RSA/ElGamal-brudd ·
11.B hashet ElGamal anonym · 11.C Shamir + Lagrange · 11.D homomorf telling +
side-kanal).

### Del 12 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 12.1: Sjangerspill — løsningsoppskrifter for A–M
**id:** `tma4160-12-1` · **number:** 12.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4160-11-2`

- **Kapitteltype:** sjangerdrill/konsolidering.
- **Description:** Alle tretten oppgavesjangrene (A–M) med sine løsningsoppskrifter
  samlet på ett sted — studentens hurtigreferanse rett før eksamen, delt i
  «beregning» (K) og «bevis/angrep» (M).
- **Eksamensbelegg:** Meta (alle sjangre). Sensorkravene 1–8. Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka. `collapsible` **Definisjons- og
  formelliste:** sjangeroppskriftene + algoritme-/definisjons-arket i kortform.
- **Innhold:** `text` Sjangerguiden — for hver sjanger A–M: kjennetegn,
  løsningsoppskrift, sensorpremie, vanligste feil (#-kode). `definition`/`collapsible`
  Hurtigreferanse (flashcard-kilde): algoritme-arket (BSGS/PH/Pollard, ECC-formlene,
  Jacobi-reglene) + definisjons-arket (spill-malen, reduksjonsmalen, antakelsene).
  `example` én per hovedsjanger. `exercise` = «identifiser sjanger + skisser
  angreps-/løsningsplan» for blandede oppgavestammer.
- **Typiske feil:** hele #1–#13-katalogen med kobling til forebyggende kapittel.
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 12.2: Kald bank — uvante vinklinger uten hint
**id:** `tma4160-12-2` · **number:** 12.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4160-12-1`

- **Kapitteltype:** kald bank (README «Difficulty-spredning + kald bank»).
- **Description:** 8–10 genuint krevende oppgaver med uvante vinklinger/kombinasjoner
  (kryssregime: en beregning som mater et bevis; en reduksjon med uvanlig antakelse;
  en ECC-oppgave som ender i en anonymitetsvurdering) UTEN hint — fasit kun momentliste.
- **Eksamensbelegg:** Meta (topplesers strekk). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka.
- **Innhold:** `text` innramming («dette er kald bank — ingen hint, momentfasit»);
  `exercise` × 8–10 merket **kald/krevende** (`difficulty: vanskelig`, ingen `hints`),
  hver med momentliste-`solution`. Blander sjangre og regimer.
- **Typiske feil:** hele registeret, men uten forhåndsvarsling (radaren testes).
- **Kvote:** 10 quiz / 6 flashcards.

#### Kapittel 12.3: Øvingseksamen 1 (komplett firetimers sett)
**id:** `tma4160-12-3` · **number:** 12.3 · **estimatedMinutes:** 240 · **prerequisites:** `tma4160-12-2`

- **Kapitteltype:** øvingseksamen.
- **Description:** Komplett nyskrevet sett i **2023–2024-blandingsmalen**: 5–6
  oppgaver over 4 timer, flervalgs-/kortsvarsblokk + håndskrevne bevisdeler, full
  modellfasit.
- **Eksamensbelegg:** Meta — speiler prognosen (§7): én flervalgs-/kortsvarsblokk
  (konfidensialitet/formbarhet/hash/negligible/klassisk chiffer), én ECC- eller
  tallteori-beregningsoppgave, én gitter-/Ring-LWE-oppgave, én reduksjons-/
  antakelsesoppgave (SqDH⇒CDH med orakel-telling), én sikkerhetsdefinisjon-/
  angrepsoppgave, én signatur-/commitment-oppgave. Prioritet: perfekt (meta).
- **Innhold:** `collapsible` full løsning per oppgave (modellsvar slik sensor vil
  se det: regnekjede + kostnadstelling for K-delene, fullt spilldiagram +
  fordelingsargument for M-delene); `tip` **Sensorblikket** (delpoeng, hva som
  skiller bestått fra topp). **Kildeforbehold:** malen bygger på 2001–2024-arkivet;
  full fasit kun 2013–2019, nyere «suggestion for answers» `(verifiser)`;
  prognose-usikkerhet pga. regimeskifte. Deklareres som «kan deles over flere
  økter»; håndskriving anbefales for minst ett sett.
- **Typiske feil:** #1–#13 anvendt i Sensorblikket; #13 (tidsfelle) fremhevet.
- **Kvote:** 8 quiz / 2 flashcards.

#### Kapittel 12.4: Øvingseksamen 2 (komplett firetimers sett — klassisk-tungt)
**id:** `tma4160-12-4` · **number:** 12.4 · **estimatedMinutes:** 240 · **prerequisites:** `tma4160-12-3`

- **Kapitteltype:** øvingseksamen.
- **Description:** Andre sett, vektet mot **Gjøsteen-regimet** (beregning): klassisk
  chiffer, DL med to-metode-kryssjekk, faktorisering, ECC-punktregning + punkttelling,
  RSA-nøkkelsvakhet, en klassisk signatur — for beredskap mot et beregnings-tungt sett.
- **Eksamensbelegg:** Meta. Prioritet: perfekt (meta).
- **Innhold:** som 12.3, men K-tung profil; full løsning med regnekjeder +
  kostnadstelling + konsistenssjekk; Sensorblikket. Kildeforbehold + regime-forbehold.
- **Typiske feil:** #1, #2, #3, #4 fremhevet.
- **Kvote:** 8 quiz / 2 flashcards.

#### Kapittel 12.5: Øvingseksamen 3 (komplett firetimers sett — bevis-tungt)
**id:** `tma4160-12-5` · **number:** 12.5 · **estimatedMinutes:** 240 · **prerequisites:** `tma4160-12-4`

- **Kapitteltype:** øvingseksamen.
- **Description:** Tredje sett, vektet mot **Pan-regimet** (bevis): negligible,
  IND-CPA/CCA + lekebok-brudd, CDH⇐SqDH-reduksjon med orakel-telling, MAC-
  forfalskning, Schnorr-2-special-soundness, anonym PKE — for beredskap mot et
  bevis-tungt sett. Til sammen dekker de tre settene sjangrene A–M minst én gang.
- **Eksamensbelegg:** Meta. Prioritet: perfekt (meta).
- **Innhold:** som 12.3, men M-tung profil; full løsning med spilldiagrammer +
  fordelingsargument i begge tilfeller + orakel-telling; Sensorblikket med
  A/B/C-terskelbeskrivelse (karakter-realisme). Kildeforbehold + regime-forbehold +
  oppfordring til å bygge egne varianter.
- **Typiske feil:** #5, #6, #7, #8, #12 fremhevet.
- **Kvote:** 8 quiz / 2 flashcards.

**Prøve-kvote Del 12:** ingen egen prøve (Del 12 ER de tre øvingseksamenene 12.3–12.5
+ sjangerspill + kald bank).

---

## 4. Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 2 | 26 | 30 | 0 (dekkes av øvingseksamenene) |
| 1 | 3 | 52 | 50 | 4 |
| 2 | 2 | 36 | 44 | 4 |
| 3 | 3 | 54 | 50 | 4 |
| 4 | 2 | 32 | 28 | 4 |
| 5 | 3 | 56 | 54 | 4 |
| 6 | 3 | 52 | 54 | 4 |
| 7 | 3 | 48 | 48 | 4 |
| 8 | 3 | 52 | 52 | 4 |
| 9 | 4 | 70 | 68 | 4 |
| 10 | 2 | 32 | 32 | 4 |
| 11 | 2 | 28 | 26 | 4 |
| 12 | 5 | 52 | 32 | 0 (= 3 øvingseksamener + sjangerspill + kald bank) |
| **Sum** | **34** | **590** | **568** | **44 + 3 øvingseksamener** |

Summeringskontroll per del (quiz / flashcards) — kontrollregnet per kapittel FØR totalen:
- Del 0: 12+14 = **26** / 12+18 = **30**
- Del 1: 16+20+16 = **52** / 16+18+16 = **50**
- Del 2: 18+18 = **36** / 22+22 = **44**
- Del 3: 20+18+16 = **54** / 20+18+12 = **50**
- Del 4: 18+14 = **32** / 18+10 = **28**
- Del 5: 20+18+18 = **56** / 20+18+16 = **54**
- Del 6: 18+16+18 = **52** / 20+16+18 = **54**
- Del 7: 16+18+14 = **48** / 18+18+12 = **48**
- Del 8: 18+18+16 = **52** / 20+18+14 = **52**
- Del 9: 18+18+16+18 = **70** / 18+18+16+16 = **68**
- Del 10: 16+16 = **32** / 16+16 = **32**
- Del 11: 14+14 = **28** / 14+12 = **26**
- Del 12: 18+10+8+8+8 = **52** / 20+6+2+2+2 = **32**
- **Totalt: 590 quiz / 568 flashcards.** *(590 ≥ 500 ✓ · 568 ≥ 500 ✓)*

> **Gate-tall (autoritativt):** den REELLE summen av kapittelkvotene er
> **590 quiz / 568 flashcards** (kontrollregnet per kapittel over, deretter summert).
> §1-identitetstabellen speiler samme tall. Begge ligger over gulvet (≥500/500).

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens og natur: de fem søylene + beviselig sikkerhet (Del 3
DL, Del 5 ECC, Del 6 RSA, Del 7 ElGamal, Del 8 signaturer, Del 9 bevis) bærer
332 av 590 quiz og 326 av 568 flashcards.

**Flashcard-profilen (568) ligger over gulvet (500)** fordi faget er begrepsrikt:
sikkerhetsdefinisjoner (IND-CPA/CCA/UF-CMA som attack games), antakelser
(CDH/DDH/SqDH), algoritme-oppskrifter (BSGS/PH/Pollard), ECC-addisjonsformlene,
Jacobi-reglene, norm-ulikhetene og reduksjonsmalene må sitte for å svare på tid.
Korttyper: **algoritme↔oppskrift** (BSGS-steg; Pohlig–Hellman-CRT; Pollard-ρ-
iterasjon), **formel↔bruk** (ECC-addisjon distinkt/dobling; Hasse-grensen;
RSA $d=e^{-1}\bmod\varphi$), **definisjon↔spill** (IND-CPA/CCA/UF-CMA/anonymitet;
PRG/PRF/PRP; negligible), **antakelse↔hardhet** (DLog/CDH/DDH/SqDH), **angrep↔mal**
(nonce-gjenbruk; determinisme-brudd; witness-ekstraksjon; MAC-forfalskning),
**reduksjon↔teknikk** (CDH⇐SqDH 3 kall + $q$ odde; IND-CPA/DDH fordelingsargument),
**norm-ulikhet↔betingelse** (reduksjon mod $X^n+1$; $q$-grense). **Quiz-profilen**
driller nabobegrep-distraktorer (IND-CPA/IND-CCA, CDH/DDH, PRF/PRG/PRP, semantisk/
perfekt, formbarhet/homomorfi, Jacobi/kvadratisk-rest, Legendre/Jacobi, aktiv/passiv
angriper, PRP/PRF).

### Prøver (4 per temadel, 44 totalt)

Fire prøver per temadel (Del 1–11). Hver prøve speiler eksamensmalen i miniatyr: en
blanding av beregnings- og bevis-/angrepsoppgaver (regn ut / knekk / definer spill /
gjør reduksjon) med **full modellfasit** (regnekjede + kostnadstelling for K;
spilldiagram + fordelingsargument for M). Omfang 30–50 min. Alle oppgaver NYSKREVNE.
Prøvekapittel-id `tma4160-<del>-prove`, chapterNumber `<del>.P` (jf. BYGGEKONTRAKT).
Del 0 og Del 12 har ingen egen prøve (Del 12s tre øvingseksamener + sjangerspill +
kald bank dekker helheten). Prøvetitlene er spesifisert per del i §3
(Prøve-kvote-linjene).

### Komplette øvingseksamener (3 — kapitlene 12.3–12.5)

Tre nyskrevne firetimers sett i arkivmalen: **12.3 blandet (2023–2024-mal)**,
**12.4 klassisk-tungt (Gjøsteen-beredskap)**, **12.5 bevis-tungt (Pan-beredskap)** —
med full modellsvar-fasit (regnekjeder + kostnadstelling; spilldiagrammer +
fordelingsargument + orakel-telling) og Sensorblikket per oppgave.
**Kildeforbehold + regime-forbehold i alle tre:** full fasit kun 2013–2019, nyere
«suggestion for answers» `(verifiser)`; prognose-usikkerhet pga. to regimeskift.
Til sammen dekker de tre settene sjangrene A–M minst én gang.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4 t skriftlig, A–F, to regimer, hjelpemiddel­regimet),
   de fem søylene + beviselig sikkerhet, temafrekvensene, prognose-usikkerheten og
   kildeforbeholdet (fra kap. 0.1).
2. **Håndverket** — algoritme-arket (klassisk) + definisjons-/reduksjonsmalen
   (moderne), kostnadstelling og konsistenssjekk (fra kap. 0.2).
3. **De fem søylene i dybden** — DL (Del 3), ECC (Del 5), RSA (Del 6), ElGamal (Del 7),
   signaturer (Del 8): teori + drill.
4. **Den moderne kjernen** — beviselig sikkerhet (Del 9): spill, primitiver,
   reduksjoner.
5. **Beredskapen** — symmetrisk/klassisk (Del 1), verktøykasse/kropper (Del 2),
   faktorisering (Del 4), gitter/post-kvante (Del 10), avanserte anvendelser (Del 11).
6. **Eksamenstrening** — sjangerspill A–M, kald bank, tre komplette firetimers sett
   (blandet/klassisk-tungt/bevis-tungt) (Del 12).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge
1. Del 0 (etablerer sjangre A–M, feilkoder #1–#13, arkene, forbeholdene).
2. Del 2 (verktøykasse — forutsetning for Del 3–7) og Del 1 (uavhengig grunnlag).
3. Søylene i avhengighetsrekkefølge: Del 3 (DL) → Del 4 (fakt.) → Del 5 (ECC) →
   Del 6 (RSA) → Del 7 (ElGamal/DH) → Del 8 (signaturer).
4. Del 9 (beviselig sikkerhet — bygger på Del 1.3, 6.2, 7.x).
5. Del 10 (gitter) og Del 11 (anvendelser).
6. Del 12 (eksamenstrening) sist — trekker på hele boka.
7. Prøver per temadel og narrativ-versjoner + quiz genereres per kapittel; kvotene
   fra §4 er fasit.

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)
- Alle matematiske påstander parametersjekket (python3) eller merket `(verifiser)`;
  betingelser (RSA-invertibilitet, $q$-odde i halveringen, Hasse-intervall) skrevet
  ut eksplisitt.
- Læringsløkke (Teori→Eksempel→Oppgave inline) i alle teori-/drillkapitler; ingen
  oppgave krever usett teknikk.
- Sikkerhetsspill skrevet i forelesningsstil med definert fordel; reduksjoner med
  fordelingsargument i begge tilfeller.
- Kvotene per kapittel ≥ §4-tallene; sum ≥ 500/500.
- Kryssbok-lenker verifisert (`(verifiser lenke)` fjernet der bekreftet).
- Institusjonen registrert i `institusjoner.ts` (NTNU, «TMA4160 Kryptografi»);
  `hoyskole-disclaimer.tsx`-heuristikken dekker emnet (regnefag — ingen jus/helse-linje).
- Alle oppgaver/tall/kurver/moduli NYSKREVNE (opphavsrett).
