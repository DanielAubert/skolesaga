# Eksamensanalyse: IN2060 Digitalteknikk og datamaskinarkitektur (UiO)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på UiOs offisielle
> eksamensarkiv for IN2060 fra høsten 2018 til høsten 2023: oppgavesett H2018,
> H2019, H2021, H2022 og H2023, samt fasit/sensorveiledning for alle seks år
> (H2018 i to deler – autoretting og en manuell sensorveiledning fra faglærer,
> H2020 kun som fasit). **Alt innhold er omskrevet med egne ord** – ingen
> oppgavetekster, fasiter eller sensorkommentarer er gjengitt ordrett. Tall,
> instruksjonssett, kretsnavn og fagbegreper er allmenn faglig notasjon og ikke
> opphavsrettslig beskyttet. Analysen er kvantitativ der kildene tillater det.
>
> **Emnet er aktivt** (verifisert mot UiOs emneside juli 2026): IN2060 undervises
> fortsatt med ordinær høsteksamen (planlagt H2025 og H2026, ingen
> nedleggelsesvarsel). Faget er langt dypere enn det beslektede IN1020 – der
> IN1020 gir en bred oversikt fra bit til nettverk, går IN2060 i dybden på
> **digitalteknikk og datamaskinarkitektur**: boolsk logikk, sekvensielle
> kretser, VHDL, ARM-assembly, mikroarkitektur og minnehierarki. Pensumboka er
> Harris & Harris, *Digital Design and Computer Architecture, ARM Edition*, og
> både notasjon og løsningsteknikk i fasitene følger denne boka tett.

---

## 1. Eksamensform og utvikling

### Grunnform (gjeldende)

**Skriftlig digital skoleeksamen i Inspera, 4 timer, karakterskala A–F.** Emnet
har obligatoriske øvinger som må være godkjent samme semester for å få gå opp.
Hele karakteren avgjøres på slutteksamen. Eksamen gir **100 poeng totalt**, og
poengsummen for hver oppgave står oppført på oversiktssiden slik at kandidaten
kan disponere tiden.

Fra og med H2019 er settet bygd opp av **ca. 23 nummererte oppgaver gruppert i
åtte faste temablokker**, i denne rekkefølgen:

1. **Digital representasjon** (tallsystemer, 2-er-komplement, bitoppløsning)
2. **Kombinatorisk logikk** (porter → funksjonsuttrykk, boolsk forenkling)
3. **Sekvensiell logikk** (latch vs. flip-flop, tidsdiagram, begrepsflervalg)
4. **Digital design / HDL** (VHDL-klassifisering, tilstandsmaskin, kritisk sti)
5. **Digitale byggeblokker** (adder-typer, ALU, shifter, ROM/LUT, dekoder)
6. **(Datamaskin-)arkitektur** (ARM-assembly, maskinkode, funksjonskallkonvensjon,
   branch target)
7. **Mikroarkitektur** (single-/multi-cycle/pipeline, CPI, hazards, branch
   prediction)
8. **Minnesystemer** (cache-oppbygning, miss-/treffrate, virtuelt minne/TLB)

**Hvert tema treffes hvert år.** Bredden er nesten identisk fra sett til sett; det
er verdiene, kretsene og kodebitene som byttes ut, ikke oppgavetypene.

### ⚠️ To viktige nyanser mot grunnbeskrivelsen

**(a) «Ingen hjelpemidler» – men med et maskinkodevedlegg.** Emnebeskrivelsen sier
ingen personlige hjelpemidler, og det stemmer. Men eksamen leverer selv et
**datablad/vedlegg** som er en del av oppgaven: ARM-instruksjonsformatene
(data-processing / memory / branch), tabell over `cmd`-felt, betingelseskoder og
mnemonics (EQ=Z, NE=!Z, MI=N, LT=N⊕V, GE=!(N⊕V) …) og flaggforklaringer (N, Z, C,
V). Studenten skal derfor **ikke pugge opcode-bit**, men **slå opp i vedlegget** og
kode/dekode ut fra det. Et godt løsningsforslag bør vise oppslaget eksplisitt.

**(b) Ingen poengtrekk for feil avkrysning.** Forsidearket sier uttrykkelig at det
**ikke gis trekk for feil svar** (fra H2019). Dette er en viktig kontrast til det
beslektede IN1020, som straffer gale avkrysninger. I IN2060 lønner det seg alltid
å svare. På «velg de N som er …»-oppgaver låser Inspera antall avkrysninger til
det korrekte antallet – man kan ikke krysse av flere enn det er riktige svar.

### Oppgaveformater

Alt fra og med H2019 er **auto-rettbart** i Inspera:

- **Flervalg med radioknapp** (ett riktig svar) – den vanligste typen.
- **Flervalg med avkrysning** («velg de N riktige/gale») – f.eks. kombinatorisk
  vs. sekvensiell, funksjonskallkonvensjon.
- **Fyll inn tall / Numeric Entry** – bitoppløsning, klokkesykler, cache-bit,
  miss-/treffrate (ofte oppgitt med aksepterte intervaller eller brøk).
- **Nedtrekk / Inline Choice** – oversett til assembly, VHDL-klassifisering,
  pipeline-forløp, maskinkode-sammensetting, latch/FF-paring.

Store oppgaver veier tungt: sekvensielle kretser og VHDL 10–14 p, assembly og
cache/minneoppslag 6–10 p.

### Utviklingslinje 2018 → 2023

| Trekk | **H2018** | **H2019** | **H2020** | **H2021–H2023** |
|---|---|---|---|---|
| **Retting** | Hybrid: auto + **manuell** | Fullt auto | Fullt auto (fasit) | Fullt auto |
| **Frisvar** | Ja – **tegn tidsdiagram, skriv VHDL-dekoder, tegn tilstandsdiagram, cache med begrunnelse** | Nei | Nei (noe VHDL-utfylling i fasit) | Nei |
| **VHDL testes som** | **skriving** (produsere kode) + tegning | **lesing/klassifisering** | lesing + noe utfylling | lesing/klassifisering |
| **Virtuelt minne** | Ikke med | Med | Med | Med |
| **Representativt for i dag** | Delvis (annen form) | Ja | Ja (men uten oppgave-PDF) | **Ja (gjeldende form)** |

**Den viktigste formendringen: H2018 var en hybrideksamen.** Den hadde fire tunge
frisvarsoppgaver som ble rettet manuelt med prosentbaserte trekkregler – tegne inn
manglende tidsforløp for latch/flip-flop-kretser (15 p), **skrive fullstendig VHDL
for en 3-til-8-dekoder** (5 p), **tegne tilstandsdiagram ut fra gitt VHDL** (10 p)
og en cache-sammenligning med **skriftlig begrunnelse** (15 p). Fra H2019 ble hele
eksamen lagt om til rene auto-rettbare formater, og VHDL gikk fra å **skrives** til
å **leses og klassifiseres**. En student som øver på H2018 vil derfor møte
oppgavetyper (fritegning, kodeskriving) som **ikke lenger forekommer** – men det
underliggende pensumet (latch/FF-forløp, dekoder-VHDL, tilstandsmaskiner, cache) er
det samme og testes nå gjennom gjenkjenning i stedet for produksjon.

**To nyere tilføyelser å merke seg:** H2023 introduserte **kritisk sti (critical
path)** som eget deltema i VHDL-oppgaven, og en **omvendt oversettelse** – «hvilken
C-funksjon svarer til denne assemblerkoden?» (i tillegg til den vanlige C→ARM).
**Branch prediction** dukket også opp som eget begrepsspørsmål i H2023.

---

## 2. Temafrekvens

Basert på seks eksamensår med fasit: **H2018, H2019, H2020, H2021, H2022, H2023.**
Celleverdi = antall av de seks årene der temaet har minst én egen (del)oppgave.
Fordi hvert sett dekker alle åtte temablokker, treffer kjerneområdene nesten hvert
år; **gjenganger-scoren måler sikkerhet/bredde, ikke vekt innen ett sett.** (H2018
telles med, men skiller seg i form – se del 1.)

| Tema | Blokk | Score | Kommentar |
|---|---|---|---|
| **Desimal → binær + 2-er-komplement** | 1 | **6/6 = 100 %** | Alltid oppgave 1–2. `n<0`: |n| binært, inverter, +1 |
| **VHDL / HDL** (klassifisering, tidligere skriving) | 4 | **6/6 = 100 %** | Alltid 10–14 p, den tyngste blokka |
| **Cache-oppbygning** (adressebit / sett / tag) | 8 | **6/6 = 100 %** | Fyll-inn-tall, entydige heltall |
| **Cache miss-/treffrate** (aksesssekvens) | 8 | **6/6 = 100 %** | Ofte brøk (n/15 e.l.) + LRU-variant |
| **Boolsk forenkling** (algebra til minimalt uttrykk) | 2 | **5/6 = 83 %** | Absorpsjon/consensus/distribusjon |
| **Kombinatorisk vs. sekvensiell** (begrepsflervalg) | 3 | **5/6 = 83 %** | «Velg de N riktige/gale» |
| **Latch vs. flip-flop – tidsdiagram** (paring u₁…uₙ) | 3 | **5/6 = 83 %** | Nivå- vs. flankestyring; distraktorforløp |
| **ARM-assembly-oversettelse** (C↔ARM, betinget kjøring) | 6 | **5/6 = 83 %** | + H2023: C-funksjon-matching |
| **Maskinkode dekode/kode** (via datablad) | 6 | **5/6 = 83 %** | Hent cond/op/cmd/S/I fra vedlegg |
| **Virtuelt minne / TLB / paging** | 8 | **5/6 = 83 %** | Adressebit, sidenummerbit, TLB-fakta |
| **Pipeline-hazard-lokalisering** (data-/control) | 7 | **5/6 = 83 %** | Skriv 1. halvsykel, les 2. halvsykel |
| **Porter → funksjonsuttrykk** (les kretsen) | 2 | **4/6 = 67 %** | Propagér lag for lag, NAND/NOR-bobler |
| **Funksjonskallkonvensjon** (caller/callee-save) | 6 | **4/6 = 67 %** | Caller R0–R3, callee R4–R11 |
| **Klokkesykler / CPI-telling** (single/multi/pipeline) | 7 | **4/6 = 67 %** | Tell sykler per arkitektur |
| **Prosessorytelse** (måling, single vs. pipeline) | 7 | **4/6 = 67 %** | Ytelse = 1/(CPI · sykeltid) |
| **ALU** (Result i hex + flagg N/Z/C/V) | 5 | **3/6 = 50 %** | Følg ALUControl gjennom mux-ene |
| **ROM / LUT** (les lagret ord, realiser funksjon) | 5 | **3/6 = 50 %** | Dott = logisk 1; LUT ≈ vilkårlig funksjon |
| **Dekoder** (skriv/identifiser) | 5 | **3/6 = 50 %** | H2018: skriv VHDL; senere: identifiser |
| **Branch target / imm24** | 6 | **3/6 = 50 %** | `imm24 = (mål − (adr+8))/4` |
| **Adder-typer / propageringstid** | 5 | **3/6 = 50 %** | Prefiks/CLA ∝ log₂n, ripple ∝ n |
| **Datamaskinarkitektur** (RISC/CISC, arkitektur vs. impl.) | 6 | **3/6 = 50 %** | Program bundet til arkitektur, ikke impl. |
| **Bitoppløsning** (⌈log₂K⌉) | 1 | **2/6 = 33 %** ↑ | 500 farger → 9 bit |
| **Cache – gjennomsnittlig aksesstid (AMAT)** | 8 | **2/6 = 33 %** ↑ | Vektet snitt treff/bom |
| **Control-signaler / control-hazard** (pipeline) | 7 | **2/6 = 33 %** | Buffere forsinker signalene |
| **Tilstandsmaskin – antall flip-flop** (⌈log₂ tilst.⌉) | 4 | **2/6 = 33 %** | Binær vs. one-hot vs. gray |
| **Shifter** (SLL/SRL/SRA/ROL/ROR via mux) | 5 | **1/6 = 17 %** | |
| **Branch prediction** (formål: redusere stalls) | 7 | **1/6 = 17 %** ↑ *ny H2023* | |
| **Kritisk sti** (critical path i VHDL) | 4 | **1/6 = 17 %** ↑ *ny H2023* | |
| **FPGA / programmerbar logikk-fakta** | 5 | **1/6 = 17 %** | LUT-er, tristate, LE/IOE (H2018) |
| **Pipeline – plassering av registre** | 7 | **1/6 = 17 %** | Frisvar-variant (H2018) |

### Viktigste funn

1. **Faget har ingen enkelt «kjerneoppgave» – det har åtte kjerneblokker som alle
   kommer hvert år.** Fire temaer scorer 100 % (digital representasjon, VHDL, cache-
   oppbygning, cache miss-rate), og ytterligere syv ligger på 83 %. Bredden *er*
   eksamensformen. I motsetning til IN1020 er det imidlertid **ingen krav om å bestå
   hver blokk for seg** – poengene summeres til én A–F-karakter – men fordi hvert
   tema veier og går igjen, kan man ikke droppe en hel blokk uten å tape mye.

2. **De tre store poengmagnetene er VHDL-klassifisering (10–14 p), cache/minneoppslag
   (8–10 p) og ARM-assembly (6–10 p).** Til sammen utgjør disse tre gjerne 25–35 av
   100 poeng. Den som mestrer disse tre sikrer en solid grunnpott.

3. **Regneferdighetene er de sikreste poengene:** tallkonvertering/2-er-komplement,
   cache-adressedeling (bit/sett/tag), miss-/treffrate og virtuelt-minne-bit har alle
   én entydig verdi og en fast metode. Dette er billige, garanterte poeng for den som
   drillet teknikken – og de kommer hvert år.

4. **Latch-vs-flip-flop-forløpet er den klassiske «skille-oppgaven».** Den paret over
   flere år (12 p i H2019/H2021/H2022) og tester om studenten forstår nivåstyring
   (latch) mot flankestyring (flip-flop). To distraktorforløp legges alltid inn.

5. **Voksende gjengangere:** bitoppløsning (⌈log₂K⌉), AMAT-beregning, branch
   prediction og kritisk sti er nye/økende. Forvent dem fremover.

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen, med fasitens foretrukne løsningsmetode.

### A. Tallrepresentasjon (digital representasjon)
- **Krav:** Desimal → 8-bits binær, og **negative tall på 2-er-komplement**.
  Fasitmetode: skriv |n| binært, **inverter alle bit, legg til 1**. Eksempel:
  −21 → 21 = 00010101 → inverter 11101010 → +1 = 11101011. Egen **bitoppløsnings**-
  oppgave: minste antall bit for K ulike verdier = **⌈log₂K⌉** (500 farger → 9 bit).
  Regn systematisk med potenser av 2; ikke gjett.
- **Frekvens:** representasjon 100 %, bitoppløsning 33 % (voksende).

### B. Boolsk algebra og porter
- **Krav:** To varianter. **(i) Les kretsen** og finn funksjonsuttrykket ved å
  propagere lag for lag fra inngang til utgang (NAND = komplement av produkt, NOR =
  komplement av sum, boble = invertering). **(ii) Forenkle maksimalt** med algebra.
  Fasiten bruker de klassiske lovene – særlig **absorpsjon/consensus** og
  distribusjon: `(A+B)(A+C) = A+BC`, `AB + B(A'+AC) = B`, `XYZ + XY' + XYZ' = X`.
  Metode: bruk DeMorgan for å fjerne komplement av parenteser, distribuér, absorbér
  til minimalt SOP/POS.
- **Frekvens:** forenkling 83 %, kretslesing 67 %.

### C. Kombinatorisk vs. sekvensiell logikk (begrepsflervalg)
- **Krav:** Sekvensiell logikk **husker tidligere verdier / har tilbakekobling /
  inneholder bistabile (minne)elementer**; utgangen avhenger av **nåværende +
  tidligere** innganger. Kombinatorisk utgang avhenger **kun av nåværende innganger**
  og har **ingen** minneelementer. Faste feller (som skal velges som gale): «kombina-
  torisk endrer bare på klokkeflanke», «kombinatorisk kan huske/inneholde minne»,
  «synkron sekvensiell logikk er ikke avhengig av klokke».
- **Frekvens:** 83 %.

### D. Sekvensielle kretser – latch vs. flip-flop (tidsdiagram-paring)
- **Krav:** Gitt 2–3 kretser (D-latch, D-flip-flop, master-slave, med/uten port foran
  D) og et clk/s-forløp: **par hvert utgangssignal (a, b, c, d) mot riktig tidsforløp
  (u₁…uₙ)**. Fasitmetode: **latch er nivåstyrt** (utgang følger D så lenge clk er
  aktiv/høy), **flip-flop er flankestyrt** (oppdateres kun på stigende klokkeflanke).
  Spor forløpet punkt for punkt; ignorer portforsinkelse. To ekstra distraktorforløp
  legges alltid inn. *(I H2018 skulle forløpet tegnes inn for hånd, 15 p; fra H2019 er
  det paring.)*
- **Frekvens:** 83 %.

### E. HDL / VHDL-klassifisering
- **Krav:** Gitt flere VHDL-moduler skal man fylle inn: **hvilken krets** (full adder,
  half adder, ripple-carry adder, carry-lookahead adder, prefiksadder, testbench/
  simuleringsmodul), **kombinatorisk vs. sekvensiell**, og **kodestil** (dataflow,
  structural, behavioral, RTL). Metode:
  - `process` med `if rising_edge(clk)` + register → **sekvensiell / RTL**
  - rene samtidige `<=`-tilordninger → **dataflow / kombinatorisk**
  - instansiering av delkomponenter (`port map`, `generate`) → **structural**
  - algoritmisk `process` uten klokke → **behavioral**
  - modul med `assert`/`wait`/stimuli-løkke og tom entity → **testbench/simulering**
  Kan også be om **antall flip-flop for en tilstandsmaskin**: binærkoding gir minimum
  **⌈log₂(antall tilstander)⌉** (3 tilstander → 2 FF); one-hot = én FF per tilstand.
  H2023 la til **kritisk sti** (lengste forsinkelsesvei gjennom kretsen).
- **Historisk (H2018):** samme stoff testet som **skriving** – produsere fullstendig
  VHDL for en 3-til-8-dekoder, og **tegne tilstandsdiagram** ut fra gitt VHDL.
- **Frekvens:** 100 % (tyngste blokk, 10–14 p).

### F. Digitale byggeblokker
- **(a) Adder-typer / ytelse:** ripple-carry er tregest, men færrest porter
  (forsinkelse ∝ antall bit); carry-lookahead og prefiks er raskere, og **prefiks-
  og CLA-adder har forsinkelse ∝ log₂(antall bit)**. Pass på hvilket uttrykk som hører
  til hvilken adder.
- **(b) ROM / LUT:** les ut lagret ord for en adresse (dott = logisk 1), og bruk at en
  ROM/oppslagstabell kan realisere en vilkårlig logisk funksjon (f.eks. gjenkjenn en
  half adder fra sannhetstabellen).
- **(c) ALU:** følg `ALUControl(1:0)` gjennom mux-ene (A+B, A−B via inverter + carry-in,
  A AND B, A OR B) og regn ut Result i hex. Flagg: **Z = 1 når Result = 0**,
  **N = fortegnsbit**, **C = carry-ut**, **V = fortegns-overflyt**.
- **(d) Shifter (mux-basert):** identifiser SLL/SRL/SRA/ROL/ROR ut fra hvilke
  inngangsbit (og 0 eller fortegnsbit) mux-ene kobler til utgangen.
- **Frekvens:** ALU 50 %, ROM/LUT 50 %, dekoder 50 %, adder-typer 50 %, shifter 17 %.

### G. Arkitektur / ARM-assembly
- **(a) Oversett C ↔ ARM:** bruk `CMP` + betinget branch (`BLT/BEQ/BGT`) for `if/else`;
  utnytt **betinget kjøring** (`ADDLT`, `SUBGE`, `ADDMI`) for å minimere instruksjons-
  antall. Konvensjon: variablene ligger i R0/R1 (oppgitt). H2023-vri: **omvendt** –
  finn hvilken C-funksjon en gitt assemblerfunksjon svarer til.
- **(b) Funksjonskallkonvensjon (caller/callee-save):** **caller** («den som kaller»)
  må selv redde **R0–R3** (scratch/argument) rundt et kall hvis de trengs etterpå;
  **callee** må bevare **R4–R11** hvis den bruker dem (PUSH/POP). Gjenkjenn hvilke
  registre en funksjon overskriver.
- **(c) Branch target / imm24:** ARM regner `PC = (PC+8) + imm24·4`, dvs.
  **`imm24 = (mål − (adresse+8))/4`** (fortegnet, i ord).
- **(d) Maskinkode dekode/kode:** bruk **vedlegget** – hent `cond` (E = AL/alltid),
  `op`, `cmd`, `S` (setter flagg?), `I` (immediate?), `Rn/Rd/Rm/Src2` – og gjenkjenn
  instruksjonstype (data-processing / memory / branch).
- **Frekvens:** oversettelse 83 %, maskinkode 83 %, PCS 67 %, branch target 50 %.

### H. Mikroarkitektur / ytelse
- **(a) Single-cycle vs. multicycle vs. pipeline:** ved **samme klokkefrekvens** er
  single-cycle raskest per instruksjon (CPI = 1), og pipeline typisk raskere enn
  multicycle. Poenget i praksis: pipeline tillater høyere klokkefrekvens; ytelse ∝
  **1/(CPI · sykeltid)**.
- **(b) Tell klokkesykler** for et gitt program under hver arkitektur (single-cycle:
  1/instr; multicycle: fast CPI · antall instr; pipeline: antall instr + fyll/stalls).
- **(c) Hazard-lokalisering** i pipeline-diagram: **skriv til registerfila i første
  halvsykel, les i andre halvsykel**; data-hazard oppstår når en instruksjon **leser et
  register i samme eller tidligere sykel enn skrivingen fullføres** – spor RAW-
  avhengigheter. Oppgaven ber ofte om å angi *både* registeraktivitet (leser/skriver/
  ingen) og hazardtype (data/control/ingen) per sykel.
- **(d) Branch prediction:** formålet er å **gjette utfallet av en branch tidlig for å
  redusere pipeline-stalls** (ny H2023).
- **(e) CPI ≠ 1 på pipeline** skyldes **data- og control-hazards**, ikke selve
  oppdelingen i steg.
- **Frekvens:** hazard-lokalisering 83 %, klokkesykler 67 %, ytelse 67 %,
  control-signaler 33 %, branch prediction 17 %.

### I. Minnesystemer / cache
- **Adressedeling (byte-adressert):** **adressebredde = log₂(fysisk minne i byte)**;
  **byte-offset = log₂(blokkstørrelse i byte)**; **antall sett S = kapasitet /
  (blokkstørrelse · N)** (direktemappet N = 1); **indeks = log₂S**;
  **tag = adressebredde − indeks − offset**.
- **Miss/treff:** **tvungne (compulsory) miss = antall unike blokker** som aksesseres;
  **miss-rate** telles over aksess-sekvensen (spot konflikt-miss i direktemappet, og
  hvordan **2-veis set-assosiativ + LRU** fjerner dem). Ved uendelig gjentakelse
  **konvergerer treffraten mot 1** når arbeidssettet får plass i cachen.
- **AMAT:** gjennomsnittlig aksesstid = `treffrate·1 + missrate·miss-kostnad`
  klokkesykler; kan sammenlignes mellom to systemer.
- **Virtuelt minne / paging:** sidetabellen ligger i **hovedminne (evt. disk)**, ikke i
  cache; TLB er en liten, ofte **fullt assosiativ** cache for adresseoversettelser.
  Virtuelt minne gir **isolasjon/beskyttelse** (to programmer kan bruke samme virtuelle
  adresse uten konflikt), ikke nødvendigvis mer lagring. Bit-oppgaver: fysisk
  adressebredde = log₂(fysisk minne), sidenummerbit = adressebredde − offset.
- **Frekvens:** oppbygning 100 %, miss-/treffrate 100 %, virtuelt minne 83 %, AMAT 33 %.

---

## 4. Sensorens krav

### Faste metaregler (auto-rettede sett, H2019–)
1. **Entydige, korte svar.** Hver oppgave har ett alternativ eller ett tall (eventuelt
   et brøk-/intervallsvar). Fasitene aksepterer for tall ofte et lite **intervall**
   (f.eks. «15,8–16» klokkesykler) eller en **brøkform** («andel av én»), og oppgir at
   inntil 2–3 desimaler kan kreves. Løsningsforslag bør holde samme form som fasiten
   (brøk der fasiten bruker brøk).
2. **Ingen trekk for feil avkrysning** (forsidearket). Det lønner seg alltid å svare.
   Men Inspera **låser antall avkrysninger** til korrekt antall på «velg de N»-oppgaver.
3. **Slå opp i vedlegget** for assembly/maskinkode i stedet for å pugge bit. Fasiten
   forutsetter at kandidaten bruker det medfølgende instruksjonsformat-databladet.
4. **Følg pensumbokas konvensjoner** (Harris & Harris, ARM Edition): 5-stegs pipeline,
   registerfil skrives i første og leses i andre halvsykel, `PC+8`-forskyvning,
   caller/callee-registerinndeling.

### Manuell sensurering (H2018 – historisk, men lærerik)
Den manuelle sensorveiledningen fra H2018 viser hvordan **frisvar** ble vurdert, og er
nyttig for å forstå hva som teller som «riktig»:
- **Ingen negativ score** på en enkeltoppgave (minimum 0).
- **Delvis uttelling med prosenttrekk:** i VHDL-dekoderoppgaven ble poeng fordelt på
  bibliotek (20 %), entity (40 %) og arkitektur (40 %); **rene skrivefeil (glemt
  semikolon) trakk ikke** med mindre de var gjennomgående. Det avgjørende var at
  **antall bit korresponderer og er riktig i både entity og arkitektur**, og at alle
  digitale tilstander er beskrevet (`when others` ikke strengt nødvendig).
- **Tilstandsdiagram:** feil antall tilstander gir normalt 0; glemte piler eller
  utgangsverdier trekker inntil 50 %, enkeltfeil ca. 10 % per feil. Et fullstendig
  ASM-diagram godtas som likeverdig (ASM var ikke pensum, men ikke feil).

### Hva som skiller sterk fra svak besvarelse
- **Presisjon over synsing** – riktig verdi/alternativ på regneoppgavene (tall-
  konvertering, cache-bit, miss-rate, klokkesykler, imm24) er billige, sikre poeng.
- **Riktig skille latch/flip-flop** og **riktig retning på caller/callee-save** er de
  enkeltpoengene som oftest avgjør de mellomstore oppgavene.
- **VHDL-klassifisering** krever at man kjenner igjen kodestil og kretstype raskt –
  den tyngste blokka, og der de fleste poengene ligger å hente eller tape.

---

## 5. Typiske feil

1. **Forveksle latch (nivåstyrt) og flip-flop (flankestyrt)** i tidsdiagram-paringen –
   den klassiske fella. En latch følger D så lenge clk er høy; en flip-flop oppdaterer
   bare på flanken.
2. **Blande caller-save (R0–R3) og callee-save (R4–R11)** i funksjonskallkonvensjonen.
3. **Regne cache-indeks/tag feil** – glemme byte-offset, eller sette N (antall veier)
   inn feil i `S = kapasitet/(blokkstørrelse·N)`.
4. **Glemme `PC+8`-forskyvningen** i branch target: `imm24 = (mål − (adresse+8))/4`,
   ikke `(mål − adresse)/4`.
5. **Feil VHDL-kodestil:** kalle en `process` med `rising_edge` for «dataflow», eller
   en `port map`-instansiering for «behavioral». Klokke + register ⇒ RTL/sekvensiell;
   samtidige `<=` ⇒ dataflow/kombinatorisk; delkomponenter ⇒ structural.
6. **Velge feil adder-forsinkelse:** log₂n hører til prefiks-/lookahead-adder, lineær
   (∝ n) til ripple-carry. Ikke bytt om.
7. **Påstå at kombinatorisk logikk har minne / endrer bare på klokkeflanke** – begge er
   gale distraktorer som stadig gjenbrukes.
8. **Regne 2-er-komplement uten å inkludere +1** etter inverteringen, eller glemme at
   fortegnsbiten har vekt −2⁷.
9. **Plassere sidetabellen i cache** (den ligger i hovedminne/disk), eller tro at
   TLB-en er direktemappet (den er typisk fullt assosiativ).
10. **Feil flaggsetting i ALU:** glemme at Z settes når Result = 0, forveksle carry (C)
    og overflyt (V), eller sette flagg uten `S`-suffiks.
11. **Bruke H2018-oppgavetyper som mal:** øve på å tegne tidsforløp for hånd eller skrive
    full VHDL – det testes ikke lenger i den formen. Stoffet er det samme, formatet ikke.

---

## 6. Notasjons- og konstruksjonsapparat

Læreboken bør bruke nøyaktig disse konvensjonene, siden oppgavene og fasitene gjør det.

### Tallsystemer
- Basesubskript: `54₁₀`, `00110110₂`, `0x0A55`. 8-bits binær som standard bredde.
- **2-er-komplement (8 bit):** med fortegn = `−2⁷·b₇ + Σ 2ⁱ·bᵢ`. Metode `n<0`:
  |n| binært → inverter alle bit → +1.
- **Bitoppløsning:** minste antall bit for K verdier = `⌈log₂K⌉`.

### Boolsk algebra og porter
- Notasjon: `A'` for NOT, `AB`/`A·B` for AND, `A+B` for OR, `⊕` for XOR.
- Identiteter/lover: `A+A=A`, `A·A=A`, `A+A'=1`, DeMorgan, absorpsjon `A+AB=A`,
  consensus, distribusjon `(A+B)(A+C)=A+BC`.
- Kretslesing: propagér lag for lag; boble = invertering; NAND = `(AB)'`, NOR = `(A+B)'`.

### Sekvensiell logikk
- **Latch:** nivåstyrt (transparent når clk aktiv). **Flip-flop:** flankestyrt
  (oppdaterer på stigende clk-flanke). Master-slave = to latcher i serie ⇒ flanke.
- **Tilstandsmaskin:** minimum flip-flop = `⌈log₂(antall tilstander)⌉` (binær);
  one-hot = én per tilstand.

### VHDL – kodestiler
| Stil | Kjennetegn |
|---|---|
| **dataflow** | samtidige `<=`-tilordninger, kombinatorisk |
| **structural** | `component` + `port map` (+ `generate`), instansierer delkretser |
| **behavioral** | algoritmisk `process` (uten klokke), variabler, `if/case` |
| **RTL** | `process(clk)` med `rising_edge` + register ⇒ sekvensiell |
| **testbench** | tom `entity`, stimuli-løkke, `assert`/`report`/`wait` |

### Digitale byggeblokker
- **Adder-forsinkelse:** ripple-carry ∝ n; carry-lookahead / prefiks ∝ log₂n.
- **ALU-flagg:** `Z = (Result==0)`, `N = fortegnsbit`, `C = carry-ut`, `V = overflyt`.
- **ROM/LUT:** dott = 1; realiserer vilkårlig funksjon.

### ARM-arkitektur
- `imm24 = (mål − (adresse+8))/4` (branch, fortegnet, i ord).
- **Caller-save:** R0–R3. **Callee-save:** R4–R11.
- Maskinkode-felt: `cond` (E=AL), `op`, `cmd`, `S` (flagg), `I` (immediate), `Rn/Rd/Rm/Src2`.
- Betinget kjøring: suffiks EQ/NE/LT/GE/MI/PL … på data-processing-instruksjoner.

### Mikroarkitektur
- Ytelse ∝ `1/(CPI · sykeltid)`; single-cycle CPI = 1; pipeline CPI ≥ 1 pga. hazards.
- Registerfil: skriv i **første** halvsykel, les i **andre**.

### Minnesystemer
- `adressebredde = log₂(fysisk minne i byte)`; `offset = log₂(blokk i byte)`;
  `S = kapasitet/(blokk·N)`; `indeks = log₂S`; `tag = adressebredde − indeks − offset`.
- `AMAT = treffrate·1 + missrate·miss-kostnad`.
- Sidetabell i hovedminne/disk; TLB fullt assosiativ; virtuelt minne = isolasjon/beskyttelse.

---

## 7. Prognose og prioritering

### Nivå 1 – må beherskes perfekt (100 % / 83 %, tunge poeng)
1. **VHDL-klassifisering** (100 %, 10–14 p) – kretstype, kombinatorisk/sekvensiell,
   kodestil (dataflow/structural/behavioral/RTL/testbench), antall flip-flop, kritisk sti.
2. **Cache** (oppbygning + miss-/treffrate, begge 100 %, 8–10 p) – adressedeling i
   bit/sett/tag, tvungne miss, miss-rate over sekvens, 2-veis + LRU, konvergens mot 1.
3. **Digital representasjon** (100 %) – des→binær, 2-er-komplement (inverter + 1),
   bitoppløsning ⌈log₂K⌉.
4. **ARM-assembly** (oversettelse 83 %, maskinkode 83 %) – C↔ARM med betinget kjøring,
   caller/callee-save, branch target imm24, maskinkode via vedlegg.
5. **Sekvensiell logikk** (latch/FF-paring 83 %, begrepsflervalg 83 %) – nivå- vs.
   flankestyring, spor forløpet, faste distraktorpåstander.
6. **Boolsk algebra/porter** (forenkling 83 %, kretslesing 67 %) – minimér med lovene,
   propagér uttrykk lag for lag.
7. **Pipeline-hazard** (83 %) + **CPI/klokkesykler** (67 %) – lokaliser data-/control-
   hazard, tell sykler per arkitektur.
8. **Virtuelt minne** (83 %) – adressebit, sidetabell i hovedminne, TLB fullt assosiativ,
   isolasjonsformål.

### Nivå 2 – må kunne (avgjør ofte de mellomstore oppgavene)
9. **Funksjonskallkonvensjon** (67 %) – caller R0–R3, callee R4–R11.
10. **Prosessorytelse** (67 %) – single/multi/pipeline, ytelse = 1/(CPI·sykeltid).
11. **ALU** (50 %) – Result i hex via ALUControl, flagg N/Z/C/V.
12. **ROM/LUT + dekoder + adder-typer** (hver 50 %) – les LUT, prefiks/CLA ∝ log₂n.
13. **Branch target imm24** (50 %) og **datamaskinarkitektur-begreper** (50 %).

### Nivå 3 – bør kjenne til (lavfrekvent, men fyller ut settet)
14. **Bitoppløsning** (33 %, voksende), **AMAT** (33 %, voksende).
15. **Control-signaler/control-hazard** (33 %), **shifter** (17 %).
16. **Branch prediction** (17 %, ny) og **kritisk sti** (17 %, ny) – forvent begge fremover.

**Ikke prioriter som eksamensform (men behold stoffet):** å *tegne* tidsdiagram for
hånd, *skrive* full VHDL fra bunn, og *tegne* tilstandsdiagram – dette var H2018-frisvar
og testes nå gjennom gjenkjenning/klassifisering. FPGA-fakta og pipeline-register-
plassering var også H2018-spesifikke. Læreboken bør fortsatt lære **konstruksjonen**
(elevene forstår VHDL bedre av å skrive litt selv), men **drille eksamensformen**:
lese og klassifisere gitt kode, og pare gitt forløp.

**Prognose for neste ordinære eksamen:** ca. 23 auto-rettede oppgaver, 100 poeng, åtte
temablokker i fast rekkefølge, ingen trekk for feil, med maskinkodevedlegg. Forvent:
digital representasjon (des→binær + 2-er-komplement, muligens bitoppløsning); boolsk
forenkling + kretslesing; latch/FF-forløp + kombinatorisk/sekvensiell-begreper; **stor
VHDL-klassifiseringsoppgave** (10–14 p); byggeblokker (ALU/adder/LUT/shifter/dekoder,
2–3 av dem); ARM-assembly (oversettelse + maskinkode + PCS + branch target); mikro-
arkitektur (ytelse + klokkesykler + hazard-lokalisering + branch prediction); og
minnesystemer (**cache-adressedeling + miss-/treffrate med LRU-variant** + virtuelt
minne/TLB). Studenten som drillet cache-adressedelingen, 2-er-komplement, VHDL-
klassifisering og latch/FF-skillet til feilfrihet, tar en stor og trygg grunnpott.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/UiO/IN2060/`
(`eksamen/` og `fasit/`).

**Fasit/sensorveiledning lest grundig:**
- `fasit/IN2060-H2018-fasit-autoretting.pdf` og `fasit/IN2060-H2018-fasit-manuell.pdf`
  – sistnevnte er en manuell sensorveiledning fra faglærer med prosentbaserte
  trekkregler for frisvarsoppgavene (VHDL-dekoder, tilstandsdiagram).
- `fasit/IN2060-H2019-fasit.pdf`, `fasit/IN2060-H2020-fasit.pdf`,
  `fasit/IN2060-H2021-fasit.pdf`, `fasit/IN2060-H2022-fasit.pdf`,
  `fasit/IN2060-H2023-fasit.pdf` – fasitene inneholder oppgavesettet med korrekte
  numeriske svar (fyll-inn-tall) og markerte alternativer.

**Oppgavesett lest grundig:**
`eksamen/IN2060-H2018.pdf` (avvikende form – hybrid med frisvar; PDF-en er
tegnkodet vanskelig, men innholdet er dekket via autoretting-fasiten),
`eksamen/IN2060-H2019.pdf`, `eksamen/IN2060-H2021.pdf`,
`eksamen/IN2060-H2022.pdf`, `eksamen/IN2060-H2023.pdf`.

**Fagbeskrivelse:** omskrevet sammendrag av UiOs emnebeskrivelse for IN2060
(scratchpad: `fagbeskrivelse-in2060.md`; kilde:
<https://www.uio.no/studier/emner/matnat/ifi/IN2060/>). Pensumbok: Harris & Harris,
*Digital Design and Computer Architecture, ARM Edition*.

**Merknader om kildene:**
- **Strukturen er svært stabil H2019–H2023** (åtte faste temablokker, ca. 23
  oppgaver, 100 poeng). H2018 skiller seg med hybridform (frisvar + manuell retting)
  og uten virtuelt minne, og er derfor tatt med i frekvenstellingen, men markert som
  ikke-representativ for gjeldende auto-rettede form.
- **H2020** finnes kun som fasit (ingen egen oppgave-PDF i arkivet); innholdet følger
  samme mønster som H2019/H2021.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer
  er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller
  løsningsforslag er gjengitt ordrett. Tallverdier, standardnotasjon, instruksjonssett,
  VHDL-konstruksjoner og fagbegreper er allmenn faglig kunnskap og ikke opphavsrettslig
  beskyttet tekst.
</content>
</invoke>
