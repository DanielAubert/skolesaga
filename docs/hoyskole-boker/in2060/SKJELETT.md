# Bokskjelett: IN2060 Digitalteknikk og datamaskinarkitektur — eksamensrettet lærebok

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
> forfatteren leser IKKE eksamensarkivet. Alle frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (UiOs eksamensarkiv for IN2060 H2018–H2023: oppgavesett
> H2018/H2019/H2021/H2022/H2023, fasit/sensorveiledning for alle seks år, H2020 kun
> som fasit, samt UiOs emnebeskrivelse). Arketype: **DNA-regnefag**
> (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori / drill / øvingseksamen) er
> obligatoriske og gjentas ikke i sin helhet her, men er tilpasset et **fullt
> auto-rettet digitalteknikk-/arkitekturfag uten poengtrekk for feil svar** (se §1).
> **All notasjon følger emnets og pensumbokas konvensjoner** (Harris & Harris,
> *Digital Design and Computer Architecture, ARM Edition*): basesubskript,
> 2-er-komplement, VHDL-konstruksjoner, ARM-instruksjonssettet, cache-parametre.
> Alle oppgaver, tall, kretser, VHDL-moduler, kodebiter og innpakninger i den ferdige
> boka skal være **nyskrevne** (opphavsrett): instruksjonssett, tallverdier,
> standardnotasjon og VHDL-konstruksjoner er allmenn faglig kunnskap, men ingen
> oppgavetekster, fasiter eller sensorformuleringer fra reelle sett gjengis.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `in2060` |
| Tittel | **IN2060 Digitalteknikk og datamaskinarkitektur (UiO)** |
| Institusjon | **UiO** (Universitetet i Oslo — finnes fra før, jf. ECON1310/JUS1111/IN1020) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (kvantitativt/teknisk fag med faste, gjentakende oppgavemønstre) — hybrid: garanterte regneteknikker + tung klassifiserings-/begrepskontroll |
| Antall kapitler | **37** (1 eksamenskart + 32 tema/drill + 4 eksamenstrening) |
| Estimert totaltid | **≈ 2 590 min ≈ 43 timer** (inkl. 3 firetimers øvingseksamener) |
| Quiz totalt | **745** (krav ≥500; siktemål 650–750 — quiz **er** auto-rettet eksamenstrening) |
| Flashcards totalt | **580** (krav ≥500 — svært begrepsrikt fag, siktet høyt) |
| Prøver | **32** (4 per temadel 1–8) + **3 øvingseksamener** (kap. 9.2–9.4) |

**Pitch (én avsnitt):** IN2060 er UiOs dybdefag i hvordan digital maskinvare bygges og
hvordan en datamaskin fungerer helt ned til portnivå — fra bit og boolsk port, gjennom
sekvensielle kretser og VHDL, opp til ARM-assembly, mikroarkitektur og cache. Det er
langt **dypere** enn det beslektede IN1020: der IN1020 gir bred oversikt fra bit til
nettverk, går IN2060 i dybden på **digitalteknikk og datamaskinarkitektur**. Vurderingen
er én **firetimers digital skoleeksamen** i Inspera, karakter **A–F**, som gir **100
poeng** og teller 100 % (obligatoriske øvinger må være godkjent for å gå opp). Formen er
det som styrer boka: fra og med H2019 er settet **ca. 23 auto-rettede oppgaver** (flervalg
med radioknapp, «velg de N»-avkrysning, fyll-inn-tall, nedtrekk) gruppert i **åtte faste
temablokker i samme rekkefølge hvert år**: digital representasjon → kombinatorisk logikk →
sekvensiell logikk → HDL/VHDL → digitale byggeblokker → arkitektur → mikroarkitektur →
minnesystemer. **Hvert tema treffes hvert år** — bredden *er* eksamensformen. Til forskjell
fra IN1020 gis det **ingen trekk for feil avkrysning** (det lønner seg alltid å svare) og
**ingen seksjon må bestås for seg** (poengene summeres til én karakter) — men fordi hvert
tema veier og går igjen, taper man mye på å droppe en hel blokk. Boka speiler dette 1:1:
én del per temablokk, i eksamens rekkefølge. Den driller de garanterte regneteknikkene til
feilfrihet (desimal→binær + 2-er-komplement, cache-adressedeling bit/sett/tag,
miss-/treffrate med LRU), den tunge **VHDL-klassifiseringen** (10–14 p — kode **leses og
klassifiseres**, skrives ikke lenger), ARM-assembly med **maskinkodevedlegget**, og
latch/flip-flop-skillet — og bruker quizbanken som **direkte auto-rettet eksamenstrening**.

**Kritisk stilregel (gjelder HELE boka) — «auto-rettet, ingen trekk, med vedlegg»:**
1. **Ingen trekk for feil avkrysning — svar alltid.** Fra H2019 sier forsidearket
   uttrykkelig at det **ikke gis trekk for feil svar**. Dette er den viktigste kontrasten
   mot IN1020 (som straffer gjetting). I IN2060 lønner det seg alltid å krysse av noe.
   Boka lærer eksplisitt: la aldri en oppgave stå tom. På **«velg de N riktige/gale»**
   låser Inspera antall avkrysninger til det korrekte antallet — man kan ikke krysse av
   flere enn det er riktige svar.
2. **Ingen seksjon må bestås for seg — poengene summeres.** Til forskjell fra IN1020
   summeres alle poeng til én A–F-karakter; ingen blokk har eget bestått-krav. Men fordi
   alle åtte blokker kommer hvert år og veier, kan man ikke droppe en hel blokk uten å tape
   mye. De tre store poengmagnetene er **VHDL-klassifisering (10–14 p)**, **cache/minne
   (8–10 p)** og **ARM-assembly (6–10 p)** — til sammen 25–35 av 100 poeng. Boka gir disse
   tre tyngst dekning, men holder alle åtte blokker fullverdige.
3. **Slå opp i vedlegget — ikke pugg opcode-bit.** «Ingen hjelpemidler» stemmer, men
   eksamen leverer selv et **maskinkodevedlegg** som er en del av oppgaven: ARM-instruksjons-
   formatene (data-processing / memory / branch), tabell over `cmd`-felt, betingelseskoder
   (EQ=Z, NE=!Z, MI=N, LT=N⊕V, GE=!(N⊕V) …) og flaggforklaringer (N, Z, C, V). Studenten
   skal **slå opp** og kode/dekode ut fra vedlegget. Boka trener **vedleggsbruk** eksplisitt:
   arkitekturkapitlene inneholder et gjengitt (nyskrevet) instruksjonsformat-vedlegg, og hvert
   maskinkode-løsningsforslag **viser oppslaget** steg for steg.
4. **Hold sensorens svarform i løsningsforslagene — brøk der fasiten bruker brøk.** Fasitene
   aksepterer for tall ofte et lite **intervall** (f.eks. «15,8–16» klokkesykler) eller en
   **brøkform** (miss-rate `n/15`). Løsningsforslag skal holde **samme form som fasiten** —
   oppgi miss-/treffrate i brøkform (ikke bare avrundet desimal), og angi intervall der
   fasiten gjør det. Regn systematisk med potenser av 2; ikke gjett.
5. **Bit-bredde må korrespondere i entity og arkitektur.** Sensorkravet i VHDL (fra den
   manuelle H2018-veiledningen, fortsatt gjeldende faglig) er at **antall bit korresponderer
   og er riktig i både entity og arkitektur**. Alle VHDL-eksempler i boka følger dette:
   signal- og portbredder er konsistente, og lesekontraktene peker eksplisitt på
   bit-bredden som et av tingene man sjekker.
6. **Emnets/pensumbokas notasjon er fasit.** Bruk basesubskript (`54₁₀`, `00110110₂`,
   `0x0A55`), 2-er-komplement på 8 bit (`−2⁷·b₇ + Σ2ⁱ·bᵢ`), boolsk notasjon (`A′`, `AB`,
   `A+B`, `⊕`), VHDL-konstruksjonene (`process`, `rising_edge`, `port map`, `<=`),
   ARM-mnemonics (`ADD`, `SUB`, `CMP`, `B`, `LDR`, `STR`, betingelsessuffiks) og
   cache-parametrene (adressebredde, offset, indeks, tag, S, N) — nøyaktig som oppgavene
   forventer gjenkjenning. Engelsk fagterm i parentes ved første forekomst der det er
   innarbeidet («oppslagstabell (*look-up table*, LUT)», «kritisk sti (*critical path*)»).

**Åtte-blokk-regelen (skal stå i Del 0 og styre hele boka):** Fra H2019 er settet ca. 23
auto-rettede oppgaver i **åtte faste temablokker i samme rekkefølge hvert år**. Konsekvens
for læreboka: **delene 1–8 følger nøyaktig disse åtte blokkene i eksamens rekkefølge**, slik
at studenten kan lese boka «i eksamensrekkefølge». Innenfor hver del styrer frekvensen
*omfanget* (perfekt-temaer får teori + eget drillkapittel; kjenne-temaer får ett kompakt
kapittel), men ingen del kuttes bort — hvert tema kommer hvert år.

**Ærlighetskrav — H2018 var en hybrideksamen (skal stå tydelig i Del 0 — «feller fra gamle
sett»):** H2018 hadde fire **frisvarsoppgaver** med manuell retting: tegne inn manglende
tidsforløp for latch/flip-flop (15 p), **skrive fullstendig VHDL** for en 3-til-8-dekoder
(5 p), **tegne tilstandsdiagram** ut fra gitt VHDL (10 p), og en cache-sammenligning med
**skriftlig begrunnelse** (15 p). Fra H2019 ble hele eksamen lagt om til **rene
auto-rettede formater**, og **VHDL gikk fra å skrives til å leses og klassifiseres**. En
student som øver på H2018 møter derfor oppgavetyper (fritegning, kodeskriving) som **ikke
lenger forekommer**. Del 0 sier dette eksplisitt: det underliggende pensumet (latch/FF-forløp,
dekoder-VHDL, tilstandsmaskiner, cache) er **det samme**, men testes nå gjennom **gjenkjenning
og klassifisering**, ikke produksjon. Boka lærer fortsatt *konstruksjonen* (man forstår VHDL
bedre av å lese den kritisk), men **driller eksamensformen**: lese og klassifisere gitt kode,
og pare gitt forløp.

**Nye H2023-temaer (skal dekkes — voksende gjengangere):** **kritisk sti** (*critical path*
i VHDL, kap. 4.3), **omvendt oversettelse** («hvilken C-funksjon svarer til denne
assemblerkoden?», kap. 6.2), og **branch prediction** (som eget begrepsspørsmål, kap. 7.4).
Bitoppløsning (⌈log₂K⌉) og AMAT er også voksende. Del 0 flagger alle fem som «forvent
fremover».

**Avvik fra DNA/README-malen (dokumentert):**
- **Quiz ER auto-rettet eksamenstrening — ikke bare faktakontroll.** Fordi den reelle
  eksamen selv er auto-rettet flervalg/fyll-inn/nedtrekk, er plattformens MC-quiz **direkte
  eksamenstrening** og kalibreres høyt (745). Tre konsekvenser: (i) `options[0]` = riktig
  svar (runtime stokker); (ii) reelle **«velg de N riktige/gale»**-oppgaver og
  **nedtrekks-oppgaver med flere felt** splittes til enkeltstående ett-riktig-svar-spørsmål
  (ett per utsagn/felt), fordi plattformen har ett riktig svar per quiz-item; (iii) fordi det
  **ikke gis trekk**, kalibreres quiz som ren gjenkjenningstrening — men hver quiz-forklaring
  begrunner likevel både hvorfor det riktige er riktig og hvorfor de sentrale distraktorene
  er gale (klassifiseringsferdigheten faget tester). Mengdetrening i fyll-inn-tall- og
  paringsform gjøres i `exercise`-blokkene (`solution` + `hints`).
- **«Symbol- og formelliste» → «Notasjons- og konstruksjonsliste».** README krever en
  `collapsible` «Symbol- og formelliste» per delkapittel. For et digitalteknikk-/arkitekturfag
  er det presise apparatet ikke bare formler, men **konstruksjonsnotasjon**: binærnotasjon og
  2-er-komplement, **VHDL-konstruksjoner** (kodestiler + nøkkelord), **ARM-instruksjoner**
  (mnemonic ↔ virkning ↔ maskinkodefelt) og **cache-/minneparametre** (adressebredde, offset,
  indeks, tag, S, N, treff-/miss-rate). Blokken heter derfor **«Notasjons- og
  konstruksjonsliste»** og lister ALT delkapitlet bruker, med kort forklaring/virkning per
  element. Regelen «per delkapittel, ikke arv» beholdes. Unntak kun for kapitler helt uten
  notasjon (finnes knapt).
- **`theorem`-blokker brukes for regneprosedyrer, lesekontrakter og instruksjonskontrakter.**
  Der DNA-en bruker `theorem` for matematiske resultater, brukes den her for (a) de faste
  **regneprosedyrene** som må sitte (des→binær, 2-er-komplement `inverter + 1`, bitoppløsning
  `⌈log₂K⌉`, cache-adressedeling, miss-rate, imm24, ⌈log₂ tilst.⌉), (b) **VHDL-lesekontrakter**
  (kjennetegn → kodestil/kretstype/kombinatorisk-vs-sekvensiell), og (c)
  **ARM-instruksjonskontrakter** (mnemonic ↔ virkning på register/PC/flagg ↔ maskinkodefelt).
  Disse er bokas «teoremer».
- **Flashcards kalibreres som begrep/mønster ↔ definisjon ↔ fast distraktor.** Flashcards
  genereres KUN fra toppnivå `definition`-blokker med `title`. Faget er svært begrepsrikt
  (kodestiler, kretstyper, ARM-konvensjoner, cache-parametre, hazardtyper, latch/FF-skillet),
  så flashcards siktes høyt (580) og kalibreres som gjenkalling: **begrep → presis definisjon
  + den faste feilslutningen** (f.eks. «Latch → nivåstyrt (transparent når clk aktiv),
  **ikke** flankestyrt»; «Caller-save → R0–R3, **ikke** R4–R11»; «`process(clk)` med
  `rising_edge` → RTL/sekvensiell, **ikke** dataflow»). Fordi eksamen er hjelpemiddelfri, ER
  dette puggematerialet.
- **Drillkapitler ligger i sine temadeler** (ikke samlet i siste del), fordi hver
  høyfrekvent regne-/klassifiseringssjanger må drilles umiddelbart etter teorien. Del 9
  beholder kun sjangerguiden og de komplette øvingseksamenene.
- **Kapittelantall (37) ligger over DNA-veiledningen (20–35)** og er begrunnet: faget har
  **åtte kjerneblokker som alle kommer hvert år** (mot IN1020s fire), det er «langt dypere»
  digitalteknikk/arkitektur, og de tre poengmagnetene (VHDL, cache, ARM) krever hver egen del
  med teori + drill. 32 tema-/drillkapitler fordelt på åtte deler gir ~4 kapitler per blokk —
  nødvendig for fullverdig dybdedekning.

---

## 2. Makrostruktur

Delene 1–8 følger **eksamens åtte faste temablokker i eksamens rekkefølge** (ikke ren faglig
avhengighet — men innad i hver del ordnes kapitlene etter forkunnskaper). `sectionNames`
(bokforsiden) settes fra kolonne 2.

| Del | `sectionName` (bokforsiden) | Kap. | Eksamens temablokk (fast rekkefølge) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. |
| 1 | Digital representasjon | 4 | **Blokk 1.** Tallsystemer, des→binær, 2-er-komplement, bitoppløsning, flyttall. |
| 2 | Kombinatorisk logikk | 4 | **Blokk 2.** Porter → funksjonsuttrykk (kretslesing), boolsk forenkling, mux/dekoder som kombinatoriske byggeblokker. |
| 3 | Sekvensiell logikk | 4 | **Blokk 3.** Kombinatorisk vs. sekvensiell, latch vs. flip-flop, tidsdiagram-paring, tilstandsmaskiner. |
| 4 | HDL og VHDL | 4 | **Blokk 4.** VHDL leses/klassifiseres: kodestil, kretstype, kombinatorisk/sekvensiell, antall FF, kritisk sti. Tyngste blokk (10–14 p). |
| 5 | Digitale byggeblokker | 3 | **Blokk 5.** Addere/propageringstid, ALU + flagg, ROM/LUT/dekoder/shifter. |
| 6 | Datamaskinarkitektur | 5 | **Blokk 6.** ARM-instruksjonssett + vedlegg, C↔ARM + omvendt oversettelse, maskinkode + branch target, funksjonskallkonvensjon, arkitektur vs. implementasjon. |
| 7 | Mikroarkitektur | 4 | **Blokk 7.** Single/multi/pipeline, CPI/klokkesykler, ytelse, pipeline-hazards, branch prediction. |
| 8 | Minnesystemer | 4 | **Blokk 8.** Cache-oppbygning (bit/sett/tag), miss-/treffrate + LRU + AMAT, virtuelt minne/TLB/paging. |
| 9 | Eksamenstrening | 4 | Sjangerguide (23 oppgaver i 8 blokker) + 3 komplette øvingseksamener. |

**Avvik fra DNA-makrostrukturen (dokumentert):** DNA-en ordner temadelene etter faglig
avhengighet og lar frekvens styre omfang. Her styrer **eksamens åtte-blokk-rekkefølge**
delinndelingen, fordi settet er bygd av åtte faste blokker i samme rekkefølge hvert år og
boka skal la studenten lese «i eksamensrekkefølge». Rekkefølgen er dessuten stort sett også
faglig progressiv (representasjon → logikk → sekvens → HDL → byggeblokker → arkitektur →
mikroarkitektur → minne). Faglig avhengighet respekteres *innad* i hver del (porter før
kretslesing; latch før tidsdiagram; instruksjonssett før maskinkode; cache-oppbygning før
miss-rate). Drillkapitlene (1.4, 2.4, 3.3, 4.4, 6.5, 7.3, 8.3) ligger i sine deler. Del 9
beholder sjangerguiden og de tre øvingseksamenene.

---

## 3. Sjangerkatalog

Faget har to ortogonale akser: **svarformen** (S1–S4, det auto-rettede formatet) og
**innholdssjangeren** (A–I, temablokkene fra EKSAMENSANALYSE §3). Hvert kapittel refererer
begge. Del 0 presenterer dem for studenten.

### Svarformer (S) — alle auto-rettet, ingen trekk for feil

| Kode | Svarform | Mekanikk | Fallgruve |
|---|---|---|---|
| **S1** | Flervalg, radioknapp (ett riktig) | Den vanligste typen; ett korrekt alternativ | Distraktorene er «nesten riktige» klassifiseringer |
| **S2** | Flervalg, avkrysning («velg de N riktige/gale») | Flere riktige; **Inspera låser antall avkrysninger** til korrekt N | De faste gale påstandene (§5); kryss av *nøyaktig* N |
| **S3** | Fyll inn tall / Numeric Entry | Ett tall, ofte med akseptert **intervall** eller **brøkform** | Regnefeil; feil form (desimal der brøk kreves) |
| **S4** | Nedtrekk / Inline Choice | Ett valg per delfelt (oversett-linje, VHDL-klassifisering, pipeline-forløp, maskinkode-felt) | Delvis uttelling per felt; klassifiser hvert felt for seg |

> **Ingen trekk, men låst antall:** Det gis aldri minuspoeng for feil avkrysning (svar
> alltid), men på S2 kan man ikke krysse av flere enn det er riktige svar. Store oppgaver
> veier tungt: sekvensielle kretser og VHDL 10–14 p, assembly og cache/minne 6–10 p.

### Innholdssjangre (A–I) — destillert fra EKSAMENSANALYSE §3

| Kode | Innholdssjanger | Blokk/Del | Frekvens |
|---|---|---|---|
| **A** | Tallrepresentasjon (des→binær, 2-er-komplement, bitoppløsning ⌈log₂K⌉) | 1 | representasjon **100 %**, bitoppløsning 33 %↑ |
| **B** | Boolsk algebra & porter (kretslesing → uttrykk, forenkling) | 2 | forenkling 83 %, kretslesing 67 % |
| **C** | Kombinatorisk vs. sekvensiell (begrepsflervalg) | 3 | **83 %** |
| **D** | Sekvensielle kretser — latch vs. flip-flop (tidsdiagram-paring) | 3 | **83 %** |
| **E** | HDL/VHDL-klassifisering (kodestil, kretstype, komb./sekv., antall FF, kritisk sti) | 4 | **100 %** (tyngst, 10–14 p) |
| **F** | Digitale byggeblokker (adder-typer, ALU + flagg, ROM/LUT, dekoder, shifter) | 5 | hver 50 % (shifter 17 %) |
| **G** | Arkitektur/ARM-assembly (C↔ARM, maskinkode, PCS, branch target, omvendt overs.) | 6 | oversettelse 83 %, maskinkode 83 %, PCS 67 %, branch target 50 % |
| **H** | Mikroarkitektur/ytelse (single/multi/pipeline, CPI, hazards, branch prediction) | 7 | hazard 83 %, klokkesykler 67 %, ytelse 67 %, branch pred. 17 %↑ |
| **I** | Minnesystemer/cache (bit/sett/tag, miss-/treffrate, LRU, AMAT, virtuelt minne/TLB) | 8 | oppbygning **100 %**, miss-rate **100 %**, virtuelt minne 83 %, AMAT 33 %↑ |

---

## 4. Kapitler

Feltene følger DNA-ens «Skjelett-krav». **Innholdskontrakt** = definisjoner/regler/prosedyrer/
lese-/instruksjonskontrakter kapitlet SKAL lære (i emnets/pensumbokas notasjon). **Notasjons-
og konstruksjonsliste** = det `collapsible`-apparatet delkapitlet krever (binærnotasjon,
VHDL-konstruksjoner, ARM-instruksjoner, cache-parametre). Prioritetsklasser: **perfekt** /
**kunne** / **kjenne**. Hvert teorikapittel har standard-DNA-en: Eksamensvinkel-`tip` →
Forkunnskaper-`text` + Notasjons-og-konstruksjonsliste-`collapsible` → Motivasjon →
`definition`/`theorem` (i emnets notasjon) → utledning/prosedyre m/intuisjon → 2–4 `example`
(siste på eksamensnivå, i auto-rettet svarform) → Typiske-feil-`warning` → 6–12 `exercise`
(stigende, ender på eksamensnivå, svarformer S1–S4, alle med `solution` + `hints`) →
Repetisjons-`collapsible`. Drillkapitler: Eksamensvinkel → løsningsoppskrift →
sensor-kommentert case → 12–16 oppgaver på eksamensnivå.

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet — slik testes IN2060

- **id:** `in2060-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen (én firetimers auto-rettet digital eksamen, ca. 23 oppgaver i åtte faste temablokker, ingen trekk for feil svar, med maskinkodevedlegg), de åtte blokkene i rekkefølge, temafrekvensene, svarformene S1–S4 og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet H2018–H2023. Skal gjengi: (i) **formen** — digital skoleeksamen i Inspera, **4 timer**, karakter A–F, teller 100 %, obligatoriske øvinger må være godkjent; **100 poeng**, poeng per oppgave oppgitt; **fullt auto-rettet** (S1–S4) med **ingen trekk for feil avkrysning** (svar alltid; Inspera låser antall avkrysninger på «velg de N»); (ii) **åtte faste temablokker i samme rekkefølge hvert år** — digital representasjon → kombinatorisk logikk → sekvensiell logikk → HDL/VHDL → digitale byggeblokker → arkitektur → mikroarkitektur → minnesystemer; **hvert tema hvert år**, bredden *er* eksamensformen; (iii) **ingen seksjon-bestått-krav** — poeng summeres til én karakter (kontrast til IN1020); (iv) **vedlegget** — ARM-instruksjonsformatene følger med, slå opp, ikke pugg; (v) **ærlighetskravet om H2018** — hybrideksamen med frisvar (tegn tidsdiagram, skriv VHDL, tegn tilstandsdiagram) som **ikke lenger forekommer**; VHDL **leses/klassifiseres** nå, skrives ikke; (vi) **temafrekvens-tabellen** (A representasjon 100 %/bitoppløsning 33 %↑, B forenkling 83 %/kretslesing 67 %, C komb.-vs-sekv. 83 %, D latch/FF 83 %, E VHDL 100 % tyngst, F byggeblokker ~50 %, G assembly 83 %/maskinkode 83 %/PCS 67 %/branch target 50 %, H hazard 83 %/klokkesykler 67 %/ytelse 67 %/branch pred. 17 %↑, I cache-oppbygning 100 %/miss-rate 100 %/virtuelt minne 83 %/AMAT 33 %↑); (vii) **de tre poengmagnetene** — VHDL-klassifisering (10–14 p), cache/minne (8–10 p), ARM-assembly (6–10 p); (viii) **nye H2023-temaer** — kritisk sti, omvendt oversettelse, branch prediction; forvent dem fremover.
- **Innholdskontrakt:** Svarform-katalogen S1–S4 (§3) + innholdssjangrene A–I som studentens sjekkliste med typisk blokk og vekt. **Den gjennomgående regelen**: *regneferdighetene er de sikreste poengene* — des→binær + 2-er-komplement, cache-adressedeling, miss-rate og virtuelt-minne-bit har hver én entydig fasit (eller brøk) og fast metode. **Prognosen for neste ordinære eksamen**: blokk 1 = des→binær + 2-er-komplement (+ muligens bitoppløsning); blokk 2 = boolsk forenkling + kretslesing; blokk 3 = latch/FF-forløp + komb./sekv.-begreper; blokk 4 = **stor VHDL-klassifisering** (10–14 p) + evt. kritisk sti; blokk 5 = 2–3 byggeblokker (ALU/adder/LUT/shifter/dekoder); blokk 6 = ARM-oversettelse + maskinkode + PCS + branch target; blokk 7 = ytelse + klokkesykler + hazard-lokalisering + branch prediction; blokk 8 = cache-adressedeling + miss-/treffrate med LRU + virtuelt minne/TLB. Avslutt med **leseplanen**: de fire ryggradene (2-er-komplement, VHDL-klassifisering, cache-adressedeling+miss-rate, latch/FF-skillet) skal sitte perfekt; nivå 2 (ARM-assembly, boolsk forenkling, hazard, virtuelt minne) avgjør de mellomstore oppgavene; nivå 3 (byggeblokker, ytelse, bitoppløsning, AMAT, branch prediction, kritisk sti) fyller ut settet.
- **Oppgavesjangre:** Ingen fagoppgaver; 3–4 refleksjonsoppgaver, f.eks.: «Med ingen trekk for feil svar og poeng som summeres — bør du la en oppgave stå tom? Begrunn.» og «Rangér de åtte blokkene etter hvor mange garanterte regnepoeng de rommer.»
- **Typiske feil:** Metafeilene — la en oppgave stå tom (ingen trekk = alltid svar); tro en blokk «kan droppes» (alle kommer hvert år og veier); **bruke H2018-oppgavetyper som mal** (tegne tidsdiagram for hånd, skrive full VHDL — testes ikke lenger); ikke bruke maskinkodevedlegget (prøve å pugge opcode-bit); avrunde miss-rate der brøkform kreves.
- **Quiz: 16 · Flashcards: 14** (form, svarformer S1–S4, åtte blokker, frekvenser, vedlegg, H2018-ærlighetskrav)

---

### Del 1 — Digital representasjon *(Blokk 1)*

> Blokk 1 rommer de billigste garanterte poengene i faget: desimal→binær og
> 2-er-komplement (100 %), begge med én entydig fasit og en klassisk felle (glemme
> `+1`-en). Bitoppløsning (⌈log₂K⌉) er voksende, flyttall er «bør kjenne til». Kapittel
> 1.4 er det store drillkapitlet.

#### Kapittel 1.1: Tallsystemer og desimal→binær

- **id:** `in2060-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Binær, heksadesimal og desimal, plassverdisystemet, og den systematiske konverteringen desimal→binær (gjentatt divisjon / potenser av 2) og binær↔hex (nibbler).
- **Eksamensbelegg:** Sjanger A, 100 %. Alltid oppgave 1–2. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` plassverdisystem og base. `theorem` **des→binær**: gjentatt divisjon med 2 (les restene nedenfra), eller trekk fra fallende 2-er-potenser; **binær↔hex** = grupper i 4-er blokker/nibbler (`0x0A55 = 0000 1010 0101 0101₂`). Basesubskript-notasjon (`54₁₀`, `00110110₂`, `0x0A55`); 8-bits binær som standardbredde; hex-sifferverdier A–F = 10–15. **Notasjons- og konstruksjonsliste:** basesubskript, potenser av 2 (til 2⁸), 4-bits nibbelgruppering, hex-sifferverdier.
- **Oppgavesjangre:** A (S3/S1). Mønstereksempel (nyskrevet, S3): «Skriv `54₁₀` som 8-bits binærtall.» (`00110110₂`) — vis potens-for-potens-trekk (32+16+4+2).
- **Typiske feil:** Gjette i stedet for å regne systematisk med potenser av 2; feil nibbelgruppering ved hex; glemme ledende nuller opp til standardbredden; blande hex-sifferverdiene A–F.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.2: To-er-komplement og negative tall

- **id:** `in2060-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `in2060-1-1` · **kapitteltype:** teori
- **description:** Hvordan negative heltall representeres på 2-er-komplement (8 bit): fortegnsbitens vekt −2⁷, metoden «inverter alle bit, legg til 1», og tilbakeveien.
- **Eksamensbelegg:** Sjanger A, 100 %. Den klassiske fella er å glemme `+1`. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **2-er-komplement (8 bit)**: med fortegn = `−2⁷·b₇ + Σ2ⁱ·bᵢ`; mest signifikante bit har vekt **−2⁷ = −128**. `theorem` **negasjonsmetoden `n<0`**: skriv `|n|` binært → **inverter alle bit** → **+1** (eksempel: `−21` → `21 = 00010101` → inverter `11101010` → +1 = `11101011`). Tilbakeveien (samme operasjon). Rekkevidde `−128 … +127` for 8 bit. **Notasjons- og konstruksjonsliste:** fortegnsbit, `−2⁷`-vekten, invertering, `+1`-steget, 8-bits rekkevidde.
- **Oppgavesjangre:** A (S3/S1). Mønstereksempel (S3): «Skriv `−45₁₀` på 8-bits 2-er-komplement.» (`45 = 00101101` → inverter `11010010` → +1 = `11010011`.)
- **Typiske feil:** Regne 2-er-komplement **uten `+1`** etter inverteringen (§ typiske feil #8); glemme at fortegnsbiten har vekt `−2⁷`; regne mer enn 8 bit; bare invertere (som er 1-er-komplement).
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 1.3: Bitoppløsning og flyttall

- **id:** `in2060-1-3` · **number:** 1.3 · **estimatedMinutes:** 40 · **prerequisites:** `in2060-1-1` · **kapitteltype:** teori
- **description:** Minste antall bit for K ulike verdier (`⌈log₂K⌉`) og en kort innføring i flyttallsrepresentasjon (fortegn/eksponent/mantisse) — det ene voksende, det andre «bør kjenne til».
- **Eksamensbelegg:** Sjanger A. Bitoppløsning 33 % **voksende** (500 farger → 9 bit); flyttall lavfrekvent (pensumboka dekker det). Prioritet: bitoppløsning **kunne** (prioritér gitt trend), flyttall **kjenne**. Ligger sist i delen; flyttall merkes «bør kjenne til».
- **Innholdskontrakt:** `theorem` **bitoppløsning**: minste antall bit for K verdier = `⌈log₂K⌉` (500 verdier → `⌈log₂500⌉ = 9` bit, siden `2⁸=256 < 500 ≤ 512 = 2⁹`). Regn med potenser av 2, ikke gjett. `definition`/`text` **flyttall** (kort, «bør kjenne til»): fortegn + eksponent + mantisse; normalisert form; hvorfor flyttall gir stort spenn men begrenset presisjon. **Notasjons- og konstruksjonsliste:** `⌈·⌉` (takfunksjon), `log₂`, potenser av 2, flyttallsfeltene fortegn/eksponent/mantisse.
- **Oppgavesjangre:** A (S3). Mønstereksempel (S3): «Hvor mange bit trengs for å kode 500 ulike farger?» (`⌈log₂500⌉ = 9`.)
- **Typiske feil:** Runde `log₂K` **ned** i stedet for opp (takfunksjon); gjette i stedet for å ramme inn med `2ⁿ`; tro flyttall gir mer presisjon jo større tallet er.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 1.4: DRILL — Tallkonvertering, 2-er-komplement og bitoppløsning

- **id:** `in2060-1-4` · **number:** 1.4 · **estimatedMinutes:** 80 · **prerequisites:** `in2060-1-3` · **kapitteltype:** drill
- **description:** Systematisk drill på sjanger A: des↔binær↔hex begge veier, 2-er-komplement fram og tilbake, og bitoppløsning — de garanterte poengene i blokk 1.
- **Eksamensbelegg:** Sjanger A, 100 % (representasjon) + bitoppløsning 33 %↑. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **konvertering**: velg gjentatt divisjon (des→binær) eller nibbelgruppering (binær↔hex); 2) **negativt tall**: `|n|` binært → inverter → `+1`; 3) **tolke gitt 2-er-komplement**: `−2⁷·b₇ + Σ2ⁱ·bᵢ`; 4) **bitoppløsning**: `⌈log₂K⌉`, ram inn med potenser av 2. Sensor-kommentert case med margnotat om hvorfor `+1`-steget er kritisk og hvorfor man rammer inn med `2ⁿ`. 12–16 oppgaver (S1/S3) som roterer alle variantene.
- **Oppgavesjangre:** A. Mønstereksempel (S3): «`11101011₂` som 2-er-komplement er hvilket desimaltall?» (`−128 + 107 = −21`.)
- **Typiske feil:** Glemme `+1` (§#8); regne mer enn 8 bit; runde bitoppløsning ned; feil nibbelgruppering.
- **Quiz: 26 · Flashcards: 8**

**Prøve-kvote Del 1:** 4 prøver (Digital representasjon)
1. Prøve 1.A (20 min): Desimal→binær→hex begge veier (sjanger A, S3).
2. Prøve 1.B (25 min): 2-er-komplement — begge retninger + fortegnsvekt (sjanger A, S3/S1).
3. Prøve 1.C (20 min): Bitoppløsning ⌈log₂K⌉ + flyttall-begreper (sjanger A, S3/S1).
4. Prøve 1.D (25 min): Blandet blokk 1 — konvertering + 2-er-komplement + bitoppløsning (A, S1/S3).

---

### Del 2 — Kombinatorisk logikk *(Blokk 2)*

> Blokk 2 blander en garantert regneferdighet (boolsk forenkling, 83 %) med kretslesing
> (67 %). Multipleksere og dekodere introduseres her som kombinatoriske byggeblokker; de
> exam-drilles i Del 5 (byggeblokker). Kapittel 2.4 er drillkapitlet.

#### Kapittel 2.1: Logiske porter og kretslesing

- **id:** `in2060-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** De grunnleggende portene (AND/OR/NOT/NAND/NOR/XOR/XNOR) og hvordan man leser en krets: propagér funksjonsuttrykket lag for lag fra inngang til utgang.
- **Eksamensbelegg:** Sjanger B (kretslesing), 67 %. «Les kretsen, finn uttrykket» er en fast variant. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition`-blokker: hver port med symbol, boolsk uttrykk og sannhetstabell (`AND = AB`, `OR = A+B`, `NOT = A′`, `NAND = (AB)′`, `NOR = (A+B)′`, `XOR = A⊕B`, `XNOR = (A⊕B)′`). `theorem` **kretslesing**: propagér lag for lag fra inngangene; **boble = invertering**; NAND = komplement av produkt, NOR = komplement av sum. Notasjon: `A′` (NOT), `AB`/`A·B` (AND), `A+B` (OR), `⊕` (XOR). **Notasjons- og konstruksjonsliste:** portsymboler + boolsk skrivemåte, boble-invertering, lag-for-lag-propagering, sannhetstabell-oppsett.
- **Oppgavesjangre:** B (S1/S4). Mønstereksempel (S4): «Kretsen har en AND-port med boble på utgangen matet inn i en OR — hvilket uttrykk gir utgangen?» — propagér til `(AB)′ + C`.
- **Typiske feil:** Propagere feil vei (fra utgang mot inngang); overse en boble (invertering); forveksle NAND (`(AB)′`) og NOR (`(A+B)′`); blande AND- og OR-symbolet.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 2.2: Boolsk algebra og forenkling

- **id:** `in2060-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `in2060-2-1` · **kapitteltype:** teori
- **description:** Forenkle et boolsk uttrykk til minimalt SOP/POS med de klassiske lovene — særlig absorpsjon, consensus, distribusjon og De Morgan.
- **Eksamensbelegg:** Sjanger B (forenkling), 83 %. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **boolske lover**: `A+A=A`, `A·A=A`, `A+A′=1`, `A·A′=0`, kommutativitet, distribusjon `(A+B)(A+C)=A+BC`, absorpsjon `A+AB=A`, consensus, De Morgan `(AB)′=A′+B′`. `theorem` **forenklingsmetode**: bruk De Morgan for å fjerne komplement av parenteser, distribuér, absorbér til minimalt uttrykk (mønstre: `AB + B(A′+AC) = B`, `XYZ + XY′ + XYZ′ = X`). **Notasjons- og konstruksjonsliste:** de boolske lovene (absorpsjon/consensus/distribusjon/De Morgan), SOP/POS-form.
- **Oppgavesjangre:** B (S1/S3). Mønstereksempel (S1): «Hvilket uttrykk er `(A+B)(A+C)` forenklet lik? (a) `A+BC` (b) `AB+AC` (c) `A+B+C` (d) `ABC`» — a riktig (distribusjonsloven).
- **Typiske feil:** Ikke forenkle helt (stoppe før minimalt); glemme De Morgan ved komplement av parenteser; feil bruk av absorpsjon/consensus; regnefeil i distribusjon.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 2.3: Multipleksere og kombinatoriske byggeblokker

- **id:** `in2060-2-3` · **number:** 2.3 · **estimatedMinutes:** 45 · **prerequisites:** `in2060-2-1` · **kapitteltype:** teori
- **description:** Multiplekser (velger én av flere innganger), demultiplekser/dekoder og koder som kombinatoriske byggeblokker — konseptet og hva de gjør. (Exam-drillede varianter: se Del 5.)
- **Eksamensbelegg:** Sjanger B-slekt / F (kombinatoriske byggeblokker). Multiplekser og dekoder gjenkjennes både her (konsept) og i blokk 5 (dekoder 50 %). Prioritet: **kunne**. Forbereder ALU/shifter (Del 5) og datapath (Del 7).
- **Innholdskontrakt:** `definition` **multiplekser (mux)**: `2ⁿ`-til-1-velger styrt av n selektbit; utgang = valgt inngang. `definition` **dekoder**: n-til-`2ⁿ`, aktiverer én utgangslinje per inngangskombinasjon (peker fram til 5.3). `definition` **koder**: den omvendte. `text` at alle er rent kombinatoriske (ingen minne). Kort merknad om at en mux kan realisere vilkårlige funksjoner. **Notasjons- og konstruksjonsliste:** mux/demux/dekoder/koder-symboler, selektbit, `2ⁿ`-utganger.
- **Oppgavesjangre:** F/B (S1/S4). Mønstereksempel (S1): «En 4-til-1-mux har hvor mange selektbit?» (2.)
- **Typiske feil:** Blande mux (velger) og dekoder (aktiverer linje); tro en dekoder «husker» (den er kombinatorisk); feil antall selektbit (`log₂` av inngangene).
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 2.4: DRILL — Kretslesing og boolsk forenkling

- **id:** `in2060-2-4` · **number:** 2.4 · **estimatedMinutes:** 80 · **prerequisites:** `in2060-2-2` · **kapitteltype:** drill
- **description:** Full drill på sjanger B: les kretser til funksjonsuttrykk og forenkl uttrykk til minimalt SOP/POS.
- **Eksamensbelegg:** Sjanger B, forenkling 83 % / kretslesing 67 %. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **kretslesing**: propagér lag for lag fra inngangene, hold styr på bobler; 2) **forenkling**: De Morgan for parentes-komplement, distribuér, absorbér til minimalt uttrykk; 3) verifiser via sannhetstabell ved tvil. Sensor-kommentert case med margnotat om hvor absorpsjon/consensus sparer steg. 12–16 oppgaver (S1/S3/S4): les krets, forenkl, «hvilket uttrykk er ekvivalent».
- **Oppgavesjangre:** B. Mønstereksempel (S1): «Forenkl `AB + B(A′ + AC)`.» (`= B`.)
- **Typiske feil:** Ufullstendig propagering; overse boble; stoppe forenklingen for tidlig; glemme De Morgan.
- **Quiz: 24 · Flashcards: 8**

**Prøve-kvote Del 2:** 4 prøver (Kombinatorisk logikk)
1. Prøve 2.A (25 min): Port-ID + kretslesing til uttrykk (sjanger B, S1/S4).
2. Prøve 2.B (25 min): Boolsk forenkling — absorpsjon/consensus/distribusjon (sjanger B, S1/S3).
3. Prøve 2.C (20 min): Ekvivalente uttrykk + De Morgan (sjanger B, S1).
4. Prøve 2.D (25 min): Multipleksere/dekodere som byggeblokker + blandet forenkling (F/B, S1/S4).

---

### Del 3 — Sekvensiell logikk *(Blokk 3)*

> Blokk 3 rommer «skille-oppgaven» i faget: latch (nivåstyrt) vs. flip-flop (flankestyrt),
> paret mot tidsforløp (83 %, ofte 12 p). Pluss begrepsflervalget komb. vs. sekv. (83 %) og
> tilstandsmaskiner. Kapittel 3.3 er drillkapitlet — det viktigste i delen.

#### Kapittel 3.1: Kombinatorisk vs. sekvensiell logikk

- **id:** `in2060-3-1` · **number:** 3.1 · **estimatedMinutes:** 40 · **prerequisites:** `in2060-2-1` · **kapitteltype:** teori
- **description:** Det faste begrepsskillet: sekvensiell logikk husker (har minneelementer/tilbakekobling), kombinatorisk logikk avhenger kun av nåværende innganger — pluss de faste gale påstandene som skal velges bort.
- **Eksamensbelegg:** Sjanger C, 83 %. «Velg de N riktige/gale» (S2). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **sekvensiell logikk**: utgang avhenger av **nåværende + tidligere** innganger; har **bistabile (minne)elementer** og/eller tilbakekobling. `definition` **kombinatorisk logikk**: utgang avhenger **kun av nåværende** innganger; **ingen** minneelementer. `warning`/`theorem` **faste gale påstander** (velges som gale): «kombinatorisk endrer bare på klokkeflanke», «kombinatorisk kan huske/inneholde minne», «synkron sekvensiell logikk er ikke avhengig av klokke». **Notasjons- og konstruksjonsliste:** minneelement, tilbakekobling, synkron/asynkron, klokke.
- **Oppgavesjangre:** C (S2/S1). Mønstereksempel (S2): «Kryss av de utsagnene som er **gale** om kombinatorisk logikk.» — de tre faste distraktorene.
- **Typiske feil:** Påstå at kombinatorisk logikk har minne / endrer bare på klokkeflanke (§#7); tro synkron sekvensiell logikk er klokkeuavhengig; ikke krysse av nøyaktig N.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 3.2: Latcher og flip-flopper

- **id:** `in2060-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `in2060-3-1` · **kapitteltype:** teori
- **description:** D-latch (nivåstyrt/transparent) vs. D-flip-flop (flankestyrt), master-slave-konstruksjonen, og hvordan utgangen følger D — grunnlaget for tidsdiagram-paringen.
- **Eksamensbelegg:** Sjanger D (grunnlag), 83 %. Forveksling latch/FF er den klassiske fella. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **latch**: **nivåstyrt** — transparent (utgang følger D) så lenge clk er aktiv/høy. `definition` **flip-flop**: **flankestyrt** — oppdateres kun på **stigende klokkeflanke**. `theorem` **master-slave** = to latcher i serie → gir flankeoppførsel. `text` sporing av utgangsforløp punkt for punkt (ignorer portforsinkelse). **Notasjons- og konstruksjonsliste:** D, clk, nivåstyrt vs. flankestyrt, transparent, stigende flanke, master-slave.
- **Oppgavesjangre:** D (S1/S4). Mønstereksempel (S1): «clk er høy og D endrer seg fra 0 til 1. Hva skjer med utgangen på en D-latch?» (Følger med til 1 — transparent.)
- **Typiske feil:** Forveksle latch (nivåstyrt) og flip-flop (flankestyrt) (§#1); tro en latch bare oppdaterer på flanken; glemme at master-slave gir flanke; ta med portforsinkelse.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 3.3: DRILL — Tidsdiagram: latch/flip-flop-paring

- **id:** `in2060-3-3` · **number:** 3.3 · **estimatedMinutes:** 80 · **prerequisites:** `in2060-3-2` · **kapitteltype:** drill
- **description:** Full drill på faget klassiske «skille-oppgave»: gitt 2–3 kretser (D-latch, D-FF, master-slave, med/uten port foran D) og et clk/D-forløp, par hvert utgangssignal mot riktig tidsforløp.
- **Eksamensbelegg:** Sjanger D, 83 % (ofte 12 p i H2019/H2021/H2022). Prioritet: **perfekt**. *(I H2018 skulle forløpet tegnes for hånd, 15 p — testes nå som paring, jf. Del 0.)*
- **Innholdskontrakt (løsningsoppskrift):** 1) klassifiser hver krets (latch = nivåstyrt, FF = flankestyrt, master-slave = flanke); 2) spor forløpet **punkt for punkt**: latch følger D når clk er aktiv, FF sampler D på stigende flanke; 3) ignorer portforsinkelse; 4) par hvert utgangssignal (a, b, c, d) mot riktig tidsforløp (u₁…uₙ); 5) elimér de to distraktorforløpene ved å finne hvor de bryter regelen. Sensor-kommentert case med margnotat om hvor latch og FF skiller lag. 12–16 paringsoppgaver (S4) med varierte krets- og forløpskombinasjoner.
- **Oppgavesjangre:** D (S4). Mønstereksempel (S4): «Par hver av kretsene a–c med riktig utgangsforløp u₁–u₅ gitt clk/D nedenfor.»
- **Typiske feil:** Forveksle latch/FF-forløp (§#1); glemme at latch er transparent mellom flanker; velge et distraktorforløp; ta med portforsinkelse.
- **Quiz: 24 · Flashcards: 10**

#### Kapittel 3.4: Tilstandsmaskiner (FSM)

- **id:** `in2060-3-4` · **number:** 3.4 · **estimatedMinutes:** 45 · **prerequisites:** `in2060-3-2` · **kapitteltype:** teori
- **description:** Endelige tilstandsmaskiner (Moore/Mealy), tilstandskoding, og minste antall flip-flop for en gitt tilstandsmengde — binær vs. one-hot vs. gray.
- **Eksamensbelegg:** Sjanger D-slekt / E. «Antall flip-flop for en tilstandsmaskin» 33 % (blokk 4-tilknyttet, men konseptuelt sekvensielt). Prioritet: **kunne**. Peker fram til VHDL (4.3) der FSM-er klassifiseres.
- **Innholdskontrakt:** `definition` **tilstandsmaskin (FSM)**: tilstandsregister + neste-tilstand-logikk + utgangslogikk; Moore (utgang av tilstand) vs. Mealy (utgang av tilstand + inngang). `theorem` **minimum flip-flop** = `⌈log₂(antall tilstander)⌉` ved binærkoding (3 tilstander → 2 FF); **one-hot** = én FF per tilstand; gray-koding. **Notasjons- og konstruksjonsliste:** tilstand, tilstandsregister, `⌈log₂ tilst.⌉`, binær/one-hot/gray-koding, Moore/Mealy.
- **Oppgavesjangre:** D/E (S3/S1). Mønstereksempel (S3): «En FSM med 5 tilstander trenger minst hvor mange flip-flop ved binærkoding?» (`⌈log₂5⌉ = 3`.)
- **Typiske feil:** Runde `log₂` ned; forveksle binær (`⌈log₂n⌉`) og one-hot (n) FF-antall; blande Moore og Mealy.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 3:** 4 prøver (Sekvensiell logikk)
1. Prøve 3.A (20 min): Kombinatorisk vs. sekvensiell — «velg de N gale» (sjanger C, S2).
2. Prøve 3.B (30 min): Latch/flip-flop-paring mot tidsforløp (sjanger D, S4).
3. Prøve 3.C (20 min): Latch- og flip-flop-egenskaper (nivå vs. flanke) (sjanger D, S1).
4. Prøve 3.D (25 min): Tilstandsmaskiner — antall FF + koding + Moore/Mealy (D/E, S1/S3).

---

### Del 4 — HDL og VHDL *(Blokk 4 — tyngste, 10–14 p)*

> Blokk 4 er den tyngste poengmagneten (10–14 p, 100 %). VHDL **leses og klassifiseres**,
> ikke skrives (siden H2019). Studenten skal kjenne igjen kodestil, kretstype,
> kombinatorisk/sekvensiell, antall FF og — nytt fra H2023 — kritisk sti. Kapittel 4.4 er
> det store drillkapitlet. **Bit-bredde må korrespondere i entity og arkitektur** i alle
> eksempler (sensorkrav).

#### Kapittel 4.1: VHDL — lesekontrakt: entity, arkitektur, signaler, prosesser

- **id:** `in2060-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `in2060-3-1` · **kapitteltype:** teori
- **description:** Hvordan lese en VHDL-modul: entity (grensesnitt/porter/bit-bredde), architecture (implementasjon), signaler, samtidige tilordninger vs. `process` — grunnlaget for å klassifisere.
- **Eksamensbelegg:** Sjanger E (grunnlag), 100 %-blokk. Å lese entity/arkitektur riktig er forutsetningen for klassifisering. Prioritet: **kunne** (byggende).
- **Innholdskontrakt:** `definition` **entity** (grensesnittet: porter med retning `in/out` og bit-bredde, f.eks. `std_logic_vector(3 downto 0)`); **architecture** (implementasjonen). `definition` **signal** vs. **variabel**; **samtidig tilordning** `<=` (utenfor process) vs. **`process`** (sekvensiell utførelse innad). `theorem` **lesekontrakt — bit-bredde**: sjekk at portbredder i entity **korresponderer** med signalbredder i arkitektur (sensorkrav; en 3-til-8-dekoder har 3-bits inngang og 8-bits utgang — antall bit må stemme begge steder). **Notasjons- og konstruksjonsliste:** `entity`/`architecture`/`port`/`signal`/`process`/`<=`, `std_logic`/`std_logic_vector`, `in`/`out`, `downto`, bit-bredde-korrespondanse.
- **Oppgavesjangre:** E (S4/S1). Mønstereksempel (S1): «Hvilken bit-bredde har utgangen på en dekoder med 3-bits inngang?» (8 bit — `2³`.)
- **Typiske feil:** Overse bit-bredden i entity vs. arkitektur (sensorkrav); blande signal og variabel; tro alt i en `process` skjer samtidig.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 4.2: VHDL-kodestiler og klassifisering

- **id:** `in2060-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `in2060-4-1` · **kapitteltype:** teori
- **description:** De fem kodestilene (dataflow, structural, behavioral, RTL, testbench) og hvordan man klassifiserer en gitt modul som kombinatorisk eller sekvensiell ut fra kjennetegnene.
- **Eksamensbelegg:** Sjanger E, 100 % (kjernen i den tyngste blokka). Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **kodestil-lesekontrakt** (kjennetegn → stil):
  - `process(clk)` med `rising_edge(clk)` + register → **RTL / sekvensiell**
  - rene samtidige `<=`-tilordninger → **dataflow / kombinatorisk**
  - `component` + `port map` (+ `generate`), instansierer delkretser → **structural**
  - algoritmisk `process` uten klokke (variabler, `if/case`) → **behavioral / kombinatorisk**
  - tom `entity`, stimuli-løkke, `assert`/`report`/`wait` → **testbench / simulering**
  `theorem` **komb. vs. sekv. i VHDL**: klokke + register ⇒ sekvensiell; ellers kombinatorisk. **Notasjons- og konstruksjonsliste:** de fem kodestilene med kjennetegn, `rising_edge`, `port map`, `generate`, `assert`/`wait`, komb./sekv.-kriteriet.
- **Oppgavesjangre:** E (S4). Mønstereksempel (S4): «Klassifiser modulen: kodestil = [dataflow/structural/behavioral/RTL/testbench], og [kombinatorisk/sekvensiell].» — for en modul med `process(clk)`/`rising_edge` → RTL, sekvensiell.
- **Typiske feil:** Kalle en `process` med `rising_edge` for «dataflow», eller en `port map`-instansiering for «behavioral» (§#5); tro samtidige `<=` er sekvensielle; overse `assert`/`wait` som testbench-signal.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 4.3: Kretstype-gjenkjenning, antall flip-flop og kritisk sti

- **id:** `in2060-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `in2060-4-2` · **kapitteltype:** teori
- **description:** Kjenn igjen hvilken krets en VHDL-modul beskriver (full/half adder, ripple-carry, carry-lookahead, prefiksadder, testbench), regn antall FF for en FSM-modul, og finn kritisk sti (nytt fra H2023).
- **Eksamensbelegg:** Sjanger E, 100 %. Kritisk sti 17 % **ny/voksende** (H2023). Prioritet: **perfekt** (kretstype) / **kunne** (kritisk sti). *(H2018 testet samme stoff som skriving — skrive dekoder-VHDL, tegne tilstandsdiagram; testes nå som gjenkjenning, jf. Del 0.)*
- **Innholdskontrakt:** `theorem` **kretstype-gjenkjenning**: match kode/struktur mot half adder, full adder, ripple-carry adder (kjede av full-addere), carry-lookahead/prefiksadder, dekoder, testbench. `theorem` **antall FF** = `⌈log₂(antall tilstander)⌉` (binær) / n (one-hot) — jf. 3.4. `definition` **kritisk sti (*critical path*)**: den **lengste forsinkelsesveien** (flest porter/logikklag) fra inngang til utgang; bestemmer maksimal klokkefrekvens. `text` at bit-bredde må korrespondere entity/arkitektur (sensorkrav). **Notasjons- og konstruksjonsliste:** adder-typene, dekoder, testbench-kjennetegn, `⌈log₂ tilst.⌉`, kritisk sti (lengste forsinkelsesvei), bit-bredde-korrespondanse.
- **Oppgavesjangre:** E (S4/S1/S3). Mønstereksempler: (S4) «Hvilken krets beskriver modulen?» (ripple-carry adder); (S3) «Hvor mange logikklag har kritisk sti gjennom kretsen?»
- **Typiske feil:** Feil kretstype-gjenkjenning; runde FF-antall ned; regne kritisk sti som **korteste** i stedet for lengste vei; overse bit-bredde-mismatch.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.4: DRILL — VHDL les-og-klassifiser

- **id:** `in2060-4-4` · **number:** 4.4 · **estimatedMinutes:** 85 · **prerequisites:** `in2060-4-3` · **kapitteltype:** drill
- **description:** Full drill på den tyngste blokka: gitt flere VHDL-moduler, fyll inn kodestil, kombinatorisk/sekvensiell, kretstype, antall FF og kritisk sti — nøyaktig eksamensformen (10–14 p).
- **Eksamensbelegg:** Sjanger E, 100 %, 10–14 p. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** For hver modul: 1) les entity (bit-bredde, porter); 2) klokke + register? → **sekvensiell/RTL**, ellers kombinatorisk; 3) `port map`/`generate` → structural; `assert`/`wait`/tom entity → testbench; algoritmisk process uten klokke → behavioral; samtidige `<=` → dataflow; 4) kretstype (adder-familie/dekoder); 5) for FSM: `⌈log₂ tilst.⌉` FF; 6) kritisk sti = lengste forsinkelsesvei. Sensor-kommentert case med margnotat: hvorfor delvis uttelling gis (bit-bredde-korrespondanse teller mest; skrivefeil trekker ikke). 12–16 klassifiseringsoppgaver (S4) over alle modultyper.
- **Oppgavesjangre:** E (S4). Mønstereksempel (S4): «For modul M1–M4: velg kodestil og komb./sekv. i nedtrekkene.»
- **Typiske feil:** §#5 (feil kodestil); runde FF-antall ned; kritisk sti som korteste vei; overse at bit-bredde må korrespondere.
- **Quiz: 26 · Flashcards: 10**

**Prøve-kvote Del 4:** 4 prøver (HDL og VHDL)
1. Prøve 4.A (25 min): Les entity/arkitektur + bit-bredde-korrespondanse (sjanger E, S1/S4).
2. Prøve 4.B (35 min): Kodestil-klassifisering — dataflow/structural/behavioral/RTL/testbench (sjanger E, S4).
3. Prøve 4.C (30 min): Kombinatorisk/sekvensiell + kretstype-gjenkjenning + antall FF (sjanger E, S3/S4).
4. Prøve 4.D (25 min): Kritisk sti + blandet VHDL-klassifisering (sjanger E, S3/S4).

---

### Del 5 — Digitale byggeblokker *(Blokk 5)*

> Blokk 5 er en samling mellomstore temaer på ~50 % hver (shifter 17 %): adder-typer og
> propageringstid, ALU med flagg, og ROM/LUT/dekoder/shifter. Alle «kunne»-nivå — hvert
> tema får ett kompakt kapittel. To–tre av dem kommer hvert år.

#### Kapittel 5.1: Addere og propageringstid

- **id:** `in2060-5-1` · **number:** 5.1 · **estimatedMinutes:** 45 · **prerequisites:** `in2060-2-1` · **kapitteltype:** teori
- **description:** Half/full adder, ripple-carry-kjeden, carry-lookahead og prefiksadder — og skillet i propageringstid (ripple ∝ n, prefiks/CLA ∝ log₂n).
- **Eksamensbelegg:** Sjanger F (adder-typer), 50 %. Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` half adder (`S=A⊕B`, `C=AB`), full adder (med carry-inn). `definition` **ripple-carry adder** (kjede av full-addere; carry propagerer). `definition` **carry-lookahead (CLA)** / **prefiksadder** (parallell carry-beregning). `theorem` **propageringstid**: ripple-carry ∝ **antall bit (n)** — tregest, men færrest porter; CLA/prefiks ∝ **log₂n** — raskere. **Notasjons- og konstruksjonsliste:** half/full adder, carry, ripple-carry, CLA/prefiks, forsinkelse ∝ n vs. ∝ log₂n.
- **Oppgavesjangre:** F (S1/S3). Mønstereksempel (S1): «Hvilken adder har forsinkelse proporsjonal med log₂n?» (Prefiks/CLA — ikke ripple-carry.)
- **Typiske feil:** Bytte om adder-forsinkelsene (log₂n hører til prefiks/CLA, ∝ n til ripple) (§#6); tro ripple-carry er raskest fordi den er enklest.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 5.2: ALU og flagg

- **id:** `in2060-5-2` · **number:** 5.2 · **estimatedMinutes:** 45 · **prerequisites:** `in2060-5-1` · **kapitteltype:** teori
- **description:** Aritmetisk-logisk enhet: følg `ALUControl` gjennom mux-ene (A+B, A−B, A AND B, A OR B), regn Result i hex, og sett flaggene N/Z/C/V.
- **Eksamensbelegg:** Sjanger F (ALU), 50 %. Prioritet: **kunne**.
- **Innholdskontrakt:** `theorem` **ALU-operasjon**: følg `ALUControl(1:0)` gjennom mux-ene — `A+B`, `A−B` (via inverter + carry-in = 1), `A AND B`, `A OR B`; regn Result i hex. `theorem` **flagg**: **Z = 1 når Result = 0**, **N = fortegnsbit**, **C = carry-ut**, **V = fortegns-overflyt**. **Notasjons- og konstruksjonsliste:** ALUControl, mux, `A−B` via inverter+carry-in, flaggene N/Z/C/V, Result i hex.
- **Oppgavesjangre:** F (S3/S1). Mønstereksempel (S3): «ALUControl velger A−B med A=0x0C, B=0x0C. Oppgi Result (hex) og flaggene N/Z/C/V.» (Result = 0x00; Z=1, N=0.)
- **Typiske feil:** Glemme at Z settes når Result = 0; forveksle carry (C) og overflyt (V); glemme at A−B bruker inverter + carry-in = 1; feil fortegnsbit (§#10).
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 5.3: ROM, oppslagstabeller, dekodere og shiftere

- **id:** `in2060-5-3` · **number:** 5.3 · **estimatedMinutes:** 45 · **prerequisites:** `in2060-2-3` · **kapitteltype:** teori
- **description:** Les ut lagret ord fra en ROM/LUT (dott = 1), bruk at en LUT realiserer vilkårlig funksjon, identifiser en dekoder, og gjenkjenn shift-operasjoner (SLL/SRL/SRA/ROL/ROR) via mux.
- **Eksamensbelegg:** Sjanger F: ROM/LUT 50 %, dekoder 50 %, shifter 17 %. Prioritet: **kunne** (ROM/LUT/dekoder) / **kjenne** (shifter). Ligger sist i delen; shifter merkes «bør kjenne til».
- **Innholdskontrakt:** `theorem` **ROM/LUT**: les lagret ord for en adresse (**dott = logisk 1**); en ROM/oppslagstabell (*look-up table*, LUT) realiserer **vilkårlig** logisk funksjon (gjenkjenn f.eks. en half adder fra sannhetstabellen). `definition` **dekoder**: n-til-`2ⁿ`, aktiverer én linje (jf. 2.3). `definition` **shifter** (mux-basert): identifiser SLL/SRL/SRA/ROL/ROR ut fra hvilke inngangsbit (og 0 eller fortegnsbit) mux-ene kobler til utgangen. **Notasjons- og konstruksjonsliste:** ROM/LUT (dott = 1), vilkårlig funksjon, dekoder, shift-typene SLL/SRL/SRA/ROL/ROR.
- **Oppgavesjangre:** F (S1/S3). Mønstereksempel (S1): «En LUT lagrer sannhetstabellen for `S=A⊕B`, `C=AB`. Hvilken krets realiserer den?» (Half adder.)
- **Typiske feil:** Lese dott som 0; tro en LUT bare kan realisere spesielle funksjoner; blande SRL (logisk, fyll 0) og SRA (aritmetisk, fyll fortegnsbit); blande dekoder og mux.
- **Quiz: 18 · Flashcards: 20**

**Prøve-kvote Del 5:** 4 prøver (Digitale byggeblokker)
1. Prøve 5.A (20 min): Adder-typer + propageringstid (∝ n vs. ∝ log₂n) (sjanger F, S1/S3).
2. Prøve 5.B (25 min): ALU — Result i hex + flagg N/Z/C/V (sjanger F, S3).
3. Prøve 5.C (20 min): ROM/LUT — les ord + realiser funksjon (sjanger F, S1).
4. Prøve 5.D (20 min): Dekoder + shifter + blandet byggeblokk (sjanger F, S1/S4).

---

### Del 6 — Datamaskinarkitektur *(Blokk 6)*

> Blokk 6 er en poengmagnet (6–10 p): ARM-assembly-oversettelse (83 %) og maskinkode
> (83 %), med funksjonskallkonvensjon (67 %) og branch target (50 %). **Slå opp i
> vedlegget** — arkitekturkapitlene inneholder et nyskrevet instruksjonsformat-vedlegg som
> løsningsforslagene bruker eksplisitt. Nytt fra H2023: **omvendt oversettelse** (C fra
> assembly). Kapittel 6.5 er drillkapitlet.

#### Kapittel 6.1: ARM-instruksjonssettet og maskinkodevedlegget

- **id:** `in2060-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** `in2060-1-2` · **kapitteltype:** teori
- **description:** ARM-instruksjonssettet (data-processing, memory, branch), registrene, betingelseskodene, og hvordan man slår opp i det medfølgende maskinkodevedlegget i stedet for å pugge opcode-bit.
- **Eksamensbelegg:** Sjanger G (grunnlag), 83 %-blokk. Vedleggsbruk er en forutsetning for hele blokken. Prioritet: **perfekt** (byggende). Følger pensumboka (Harris & Harris, ARM Edition).
- **Innholdskontrakt:** `definition`/`theorem` **instruksjonskontrakter** (mnemonic ↔ virkning ↔ maskinkodetype): data-processing (`ADD`, `SUB`, `AND`, `ORR`, `MOV`, `CMP`), memory (`LDR`, `STR`), branch (`B`, `BL`). `theorem` **maskinkodevedlegget** (nyskrevet, gjengitt som `collapsible`): instruksjonsformatene med feltene `cond`, `op`, `cmd`, `S` (setter flagg?), `I` (immediate?), `Rn/Rd/Rm/Src2`; betingelseskoder (EQ=Z, NE=!Z, MI=N, LT=N⊕V, GE=!(N⊕V), AL/E=alltid); flaggene N/Z/C/V. `text` at man **slår opp**, ikke pugger. **Notasjons- og konstruksjonsliste:** de tre instruksjonstypene, registrene R0–R15, betingelseskodene, maskinkodefeltene, N/Z/C/V.
- **Oppgavesjangre:** G (S1/S4). Mønstereksempel (S4): «Slå opp i vedlegget: hvilket `cond`-felt svarer til `LT`?» (N⊕V.)
- **Typiske feil:** Prøve å pugge opcode-bit i stedet for å bruke vedlegget; blande instruksjonstypene; forveksle betingelseskodene.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 6.2: C↔ARM-oversettelse og omvendt oversettelse

- **id:** `in2060-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `in2060-6-1` · **kapitteltype:** teori
- **description:** Oversett C-kode til ARM-assembly med `CMP` + betinget branch og betinget kjøring, og — nytt fra H2023 — den omvendte veien: finn hvilken C-funksjon en gitt assemblerkode svarer til.
- **Eksamensbelegg:** Sjanger G (oversettelse), 83 %; omvendt oversettelse ny H2023. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **C→ARM**: `if/else` → `CMP` + betinget branch (`BLT/BEQ/BGT`); minimer instruksjoner med **betinget kjøring** (`ADDLT`, `SUBGE`, `ADDMI` — suffiks på data-processing); variablene ligger i oppgitte registre (typisk R0/R1). `theorem` **omvendt oversettelse (ARM→C)**: les assemblerfunksjonen linje for linje, spor register→variabel, gjenkjenn løkke/betingelse, formuler C-funksjonen. **Notasjons- og konstruksjonsliste:** `CMP`, betinget branch, betingelsessuffiks (LT/GE/EQ/MI/PL), betinget kjøring, register↔variabel.
- **Oppgavesjangre:** G (S4/S1). Mønstereksempler: (S4) «Fyll inn instruksjonen som gjør `if (a<b) c=c+1` med betinget kjøring» (`CMP R0,R1` + `ADDLT R2,R2,#1`); (S1) «Hvilken C-funksjon svarer denne assemblerkoden til?» (omvendt).
- **Typiske feil:** Bruke branch der betinget kjøring er kortere; feil betingelsessuffiks; blande register↔variabel i omvendt oversettelse; feil retning på sammenligningen.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 6.3: Maskinkode og branch target

- **id:** `in2060-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `in2060-6-1` · **kapitteltype:** teori
- **description:** Kode og dekode ARM-maskinkode ved å slå opp feltene i vedlegget, og regn branch target / imm24 med PC+8-forskyvningen.
- **Eksamensbelegg:** Sjanger G (maskinkode 83 %, branch target 50 %). Prioritet: **perfekt** (maskinkode) / **kunne** (branch target).
- **Innholdskontrakt:** `theorem` **maskinkode dekode/kode**: hent `cond` (E=AL/alltid), `op`, `cmd`, `S` (flagg?), `I` (immediate?), `Rn/Rd/Rm/Src2` fra **vedlegget**; gjenkjenn instruksjonstype (data-processing / memory / branch). `theorem` **branch target / imm24**: `PC = (PC+8) + imm24·4`, dvs. **`imm24 = (mål − (adresse+8))/4`** (fortegnet, i ord). **Notasjons- og konstruksjonsliste:** maskinkodefeltene, `PC+8`-forskyvning, `imm24`-formelen, instruksjonstypene.
- **Oppgavesjangre:** G (S3/S4). Mønstereksempler: (S4) «Dekod maskinordet: `op`/`cmd`/`S`/registre?»; (S3) «Et branch fra adresse `0x8000` til `0x8020` gir hvilken `imm24`?» (`(0x8020 − 0x8008)/4 = 6`.)
- **Typiske feil:** Glemme `PC+8`-forskyvningen (`imm24 = (mål − (adr+8))/4`, ikke `(mål − adr)/4`) (§#4); lese feil felt i vedlegget; overse `S`-flagget; feil fortegn på imm24.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 6.4: Funksjonskallkonvensjon og arkitektur vs. implementasjon

- **id:** `in2060-6-4` · **number:** 6.4 · **estimatedMinutes:** 45 · **prerequisites:** `in2060-6-1` · **kapitteltype:** teori
- **description:** Caller-save (R0–R3) vs. callee-save (R4–R11), PUSH/POP rundt kall, og skillet arkitektur (instruksjonssett programmet er bundet til) vs. implementasjon (mikroarkitektur).
- **Eksamensbelegg:** Sjanger G: funksjonskallkonvensjon 67 %, arkitektur vs. implementasjon (RISC/CISC) 50 %. Prioritet: **kunne**.
- **Innholdskontrakt:** `theorem` **funksjonskallkonvensjon (*procedure call standard*, PCS)**: **caller** (den som kaller) må selv redde **R0–R3** (scratch/argument) rundt et kall hvis de trengs etterpå; **callee** må bevare **R4–R11** hvis den bruker dem (PUSH/POP). `definition` **arkitektur vs. implementasjon**: et program er bundet til **arkitekturen** (instruksjonssettet), ikke implementasjonen (mikroarkitektur/klokke); RISC vs. CISC kort. **Notasjons- og konstruksjonsliste:** caller-save R0–R3, callee-save R4–R11, PUSH/POP, arkitektur vs. implementasjon, RISC/CISC.
- **Oppgavesjangre:** G (S2/S1). Mønstereksempel (S2): «Kryss av registrene en callee **må** bevare hvis den bruker dem.» (R4–R11.)
- **Typiske feil:** Blande caller-save (R0–R3) og callee-save (R4–R11) (§#2); tro et program er bundet til implementasjonen; blande RISC og CISC.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 6.5: DRILL — ARM-assembly, maskinkode og branch target

- **id:** `in2060-6-5` · **number:** 6.5 · **estimatedMinutes:** 85 · **prerequisites:** `in2060-6-4` · **kapitteltype:** drill
- **description:** Full drill på sjanger G: C↔ARM (begge veier), maskinkode-dekoding via vedlegg, branch target, og funksjonskallkonvensjon — den store poengmagneten.
- **Eksamensbelegg:** Sjanger G, oversettelse/maskinkode 83 %, 6–10 p. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **C→ARM**: `CMP` + betinget branch, minimer med betinget kjøring; 2) **ARM→C**: spor register→variabel, gjenkjenn løkke/betingelse; 3) **maskinkode**: slå opp `cond/op/cmd/S/I/Rn/Rd/Rm` i vedlegget, vis oppslaget; 4) **branch target**: `imm24 = (mål − (adr+8))/4`; 5) **PCS**: caller R0–R3, callee R4–R11. Sensor-kommentert case med margnotat om vedleggsoppslaget og PC+8-fella. 12–16 oppgaver (S1/S3/S4) som roterer alle variantene.
- **Oppgavesjangre:** G. Mønstereksempel (S4): «Oversett `for`-løkken til ARM med minst mulig instruksjoner (betinget kjøring).»
- **Typiske feil:** §#2 (caller/callee), §#4 (glemt PC+8), feil betingelsessuffiks, lese feil vedleggsfelt.
- **Quiz: 24 · Flashcards: 8**

**Prøve-kvote Del 6:** 4 prøver (Datamaskinarkitektur)
1. Prøve 6.A (30 min): C→ARM + betinget kjøring (sjanger G, S4).
2. Prøve 6.B (25 min): Omvendt oversettelse (ARM→C) + register↔variabel (sjanger G, S1).
3. Prøve 6.C (30 min): Maskinkode dekode/kode via vedlegg + branch target imm24 (sjanger G, S3/S4).
4. Prøve 6.D (25 min): Funksjonskallkonvensjon (caller/callee) + arkitektur vs. implementasjon (sjanger G, S1/S2).

---

### Del 7 — Mikroarkitektur *(Blokk 7)*

> Blokk 7 rommer hazard-lokalisering (83 %) som den sikreste poengen, pluss CPI/klokkesykler
> (67 %) og ytelse (67 %). **Registerfil skrives i første halvsykel, leses i andre; PC+8**
> (pensumbokas 5-stegs pipeline). Nytt fra H2023: **branch prediction**. Kapittel 7.3 er
> drillkapitlet.

#### Kapittel 7.1: Prosessoren — single-cycle, multicycle og pipeline

- **id:** `in2060-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `in2060-6-1` · **kapitteltype:** teori
- **description:** De tre mikroarkitekturene (single-cycle, multicycle, 5-stegs pipeline), datapath og kontroll, og hvordan pipelinen deler instruksjonen i overlappende trinn.
- **Eksamensbelegg:** Sjanger H (grunnlag), 100 %-blokk. Prioritet: **kunne** (byggende). Følger pensumbokas 5-stegs pipeline.
- **Innholdskontrakt:** `definition` **single-cycle** (CPI = 1, én lang sykel), **multicycle** (fast CPI > 1, kortere sykel), **pipeline** (5 steg: fetch/decode/execute/memory/writeback, overlappende). `theorem` **registerfil-timing**: skriv i **første** halvsykel, les i **andre** (kritisk for hazard-lokalisering); **PC+8**-forskyvning. `text` datapath (dataveier) vs. kontroll (styresignaler). **Notasjons- og konstruksjonsliste:** single/multi/pipeline, 5-stegs pipeline (fetch/decode/execute/memory/writeback), CPI, registerfil skriv-1./les-2.-halvsykel, PC+8, datapath/kontroll.
- **Oppgavesjangre:** H (S1/S4). Mønstereksempel (S1): «Hvilken arkitektur har CPI = 1 ved samme klokkefrekvens?» (Single-cycle.)
- **Typiske feil:** Tro pipeline har CPI = 1 uansett (den er ≥ 1 pga. hazards); glemme registerfil-timingen; blande datapath og kontroll.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 7.2: Ytelse — CPI, klokkesykler og ytelsesligningen

- **id:** `in2060-7-2` · **number:** 7.2 · **estimatedMinutes:** 45 · **prerequisites:** `in2060-7-1` · **kapitteltype:** teori
- **description:** Tell klokkesykler for et program under hver arkitektur, og bruk ytelsesligningen (ytelse ∝ 1/(CPI · sykeltid)) til å sammenligne.
- **Eksamensbelegg:** Sjanger H: klokkesykler 67 %, ytelse 67 %. Prioritet: **kunne**.
- **Innholdskontrakt:** `theorem` **klokkesykler**: single-cycle = 1/instr; multicycle = fast CPI · antall instr; pipeline = antall instr + fyll/stalls. `theorem` **ytelse** ∝ **1/(CPI · sykeltid)**; ved samme frekvens er single-cycle raskest per instruksjon, men pipeline tillater høyere frekvens. Svar kan oppgis i **intervall** der fasiten gjør det. **Notasjons- og konstruksjonsliste:** CPI, sykeltid, ytelsesligningen, fyll/stalls, klokkesykel-telling per arkitektur.
- **Oppgavesjangre:** H (S3). Mønstereksempel (S3): «Et program med 8 instruksjoner på en 5-stegs pipeline uten stalls tar hvor mange sykler?» (`8 + 4 = 12` sykler, fyll = 4.)
- **Typiske feil:** Glemme pipeline-fyllet (antall instr + (steg−1)); regne CPI = 1 på pipeline med hazards; blande CPI og sykeltid; ikke oppgi intervall der det kreves.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 7.3: DRILL — Pipeline-hazards

- **id:** `in2060-7-3` · **number:** 7.3 · **estimatedMinutes:** 80 · **prerequisites:** `in2060-7-2` · **kapitteltype:** drill
- **description:** Full drill på hazard-lokalisering i pipeline-diagram: angi registeraktivitet (leser/skriver/ingen) og hazardtype (data/control/ingen) per sykel, med registerfil-timingen som nøkkel.
- **Eksamensbelegg:** Sjanger H (hazard-lokalisering), 83 %. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) tegn/les pipeline-diagrammet; 2) **registerfil skriver i første halvsykel, leser i andre**; 3) **data-hazard** oppstår når en instruksjon leser et register i **samme eller tidligere sykel** enn skrivingen fullføres (spor RAW-avhengigheter); 4) **control-hazard** ved branch (styresignaler forsinkes av buffere); 5) angi *både* registeraktivitet og hazardtype per sykel; 6) CPI ≠ 1 skyldes hazards, ikke selve oppdelingen. Sensor-kommentert case med margnotat om første/andre-halvsykel-regelen. 12–16 hazard-oppgaver (S4/S2) med varierte instruksjonssekvenser.
- **Oppgavesjangre:** H (S4). Mønstereksempel (S4): «Per sykel: angi om R2 leses/skrives/ingen, og om det er data-/control-/ingen hazard.»
- **Typiske feil:** Glemme registerfil-timingen (skriv 1., les 2. halvsykel); tro CPI ≠ 1 skyldes oppdelingen (det er hazards); blande data- og control-hazard; overse RAW-avhengighet.
- **Quiz: 24 · Flashcards: 10**

#### Kapittel 7.4: Branch prediction og control-hazards

- **id:** `in2060-7-4` · **number:** 7.4 · **estimatedMinutes:** 40 · **prerequisites:** `in2060-7-3` · **kapitteltype:** teori
- **description:** Hvorfor branch prediction finnes (gjett branch-utfallet tidlig for å redusere stalls) og hvordan control-hazards oppstår — nye/lavfrekvente, men voksende temaer.
- **Eksamensbelegg:** Sjanger H: branch prediction 17 % **ny/voksende** (H2023), control-signaler/-hazard 33 %. Prioritet: **kunne** (branch prediction, gitt trend) / **kjenne** (control-signaler). Ligger sist i delen.
- **Innholdskontrakt:** `definition` **branch prediction**: formålet er å **gjette utfallet av en branch tidlig** for å **redusere pipeline-stalls** (unngå å vente på at betingelsen avgjøres). `definition` **control-hazard**: styresignaler forsinkes av pipeline-buffere; branch skaper usikkerhet om neste instruksjon. `text` at CPI ≠ 1 på pipeline skyldes data- og control-hazards. **Notasjons- og konstruksjonsliste:** branch prediction (formål: færre stalls), control-hazard, stall, styresignal/buffer.
- **Oppgavesjangre:** H (S1/S2). Mønstereksempel (S1): «Hva er hovedformålet med branch prediction?» (Redusere pipeline-stalls ved å gjette branch-utfallet tidlig.)
- **Typiske feil:** Tro branch prediction «gjør klokka raskere» (den reduserer stalls); blande data- og control-hazard; tro control-hazard ikke påvirker CPI.
- **Quiz: 14 · Flashcards: 16**

**Prøve-kvote Del 7:** 4 prøver (Mikroarkitektur)
1. Prøve 7.A (25 min): Single/multi/pipeline + registerfil-timing + PC+8 (sjanger H, S1/S4).
2. Prøve 7.B (25 min): Klokkesykler + ytelsesligningen (sjanger H, S3).
3. Prøve 7.C (30 min): Hazard-lokalisering — registeraktivitet + hazardtype per sykel (sjanger H, S4).
4. Prøve 7.D (20 min): Branch prediction + control-hazards + CPI-årsak (sjanger H, S1/S2).

---

### Del 8 — Minnesystemer *(Blokk 8)*

> Blokk 8 er den andre poengmagneten (8–10 p): cache-oppbygning (bit/sett/tag, 100 %) og
> miss-/treffrate med LRU (100 %) er begge garanterte, entydige regnepoeng — hold **brøkform**
> på miss-rate. Virtuelt minne/TLB (83 %) og AMAT (33 %↑) fyller ut. Kapittel 8.3 er
> drillkapitlet.

#### Kapittel 8.1: Cache-oppbygning — adressedeling i bit/sett/tag

- **id:** `in2060-8-1` · **number:** 8.1 · **estimatedMinutes:** 50 · **prerequisites:** `in2060-1-3` · **kapitteltype:** teori
- **description:** Del en byte-adressert adresse i tag, indeks og byte-offset, og regn antall sett (S) ut fra kapasitet, blokkstørrelse og antall veier (N) — den garanterte cache-oppgaven.
- **Eksamensbelegg:** Sjanger I (oppbygning), 100 %. Fyll-inn-tall, entydige heltall. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **adressedeling (byte-adressert)**: `adressebredde = log₂(fysisk minne i byte)`; `byte-offset = log₂(blokkstørrelse i byte)`; `antall sett S = kapasitet / (blokkstørrelse · N)` (direktemappet N = 1); `indeks = log₂S`; `tag = adressebredde − indeks − offset`. Regn systematisk med potenser av 2. **Notasjons- og konstruksjonsliste:** adressebredde, byte-offset, indeks, tag, kapasitet, blokkstørrelse, N (antall veier), S (antall sett), `log₂`.
- **Oppgavesjangre:** I (S3). Mønstereksempel (S3): «32 KB direktemappet cache, 16-byte blokker, 32-bits adresser. Oppgi offset, indeks og tag-bit.» (offset = 4, S = 2¹¹ → indeks = 11, tag = 32 − 11 − 4 = 17.)
- **Typiske feil:** Glemme byte-offset; sette N (antall veier) feil i `S = kapasitet/(blokk·N)` (§#3); regne indeks/tag feil rekkefølge; ikke bruke potenser av 2.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 8.2: Cache-ytelse — miss-/treffrate, LRU og AMAT

- **id:** `in2060-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** `in2060-8-1` · **kapitteltype:** teori
- **description:** Tell tvungne miss (unike blokker) og miss-/treffrate over en aksesssekvens (i brøkform), se hvordan 2-veis set-assosiativ + LRU fjerner konflikt-miss, og regn AMAT.
- **Eksamensbelegg:** Sjanger I: miss-/treffrate 100 %, AMAT 33 %↑. Ofte brøk (`n/15`) + LRU-variant. Prioritet: **perfekt** (miss-rate) / **kunne** (AMAT).
- **Innholdskontrakt:** `theorem` **miss/treff**: **tvungne (compulsory) miss = antall unike blokker** aksessert; **miss-rate** telles over sekvensen (hold **brøkform**, f.eks. `4/15`); i **direktemappet** oppstår **konflikt-miss** — **2-veis set-assosiativ + LRU** fjerner mange; ved uendelig gjentakelse **konvergerer treffraten mot 1** når arbeidssettet får plass. `theorem` **AMAT** = `treffrate·1 + missrate·miss-kostnad` (klokkesykler). **Notasjons- og konstruksjonsliste:** tvungne/konflikt-miss, miss-rate (brøk), treffrate, LRU, 2-veis set-assosiativ, konvergens mot 1, AMAT.
- **Oppgavesjangre:** I (S3). Mønstereksempel (S3): «Aksesssekvensen treffer 4 unike blokker over 15 aksesser i en direktemappet cache. Oppgi miss-rate i brøkform.» (`4/15` tvungne + evt. konflikt — hold brøk.)
- **Typiske feil:** Avrunde miss-rate der brøkform kreves; overse konflikt-miss i direktemappet; tro LRU ikke hjelper; feil AMAT-vekting (treff koster 1 sykel).
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 8.3: DRILL — Cache-adressedeling og miss-/treffrate

- **id:** `in2060-8-3` · **number:** 8.3 · **estimatedMinutes:** 85 · **prerequisites:** `in2060-8-2` · **kapitteltype:** drill
- **description:** Full drill på cache: adressedeling i bit/sett/tag, miss-/treffrate over aksesssekvenser (brøkform), LRU-effekten og AMAT — de garanterte 8–10 poengene.
- **Eksamensbelegg:** Sjanger I, oppbygning + miss-rate 100 %. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **adressedeling**: offset = log₂(blokk), S = kapasitet/(blokk·N), indeks = log₂S, tag = resten; 2) **miss-rate**: tell tvungne miss (unike blokker) + konflikt-miss over sekvensen, oppgi i **brøkform**; 3) **LRU**: 2-veis set-assosiativ fjerner konflikt-miss — simuler sett for sett; 4) **konvergens**: treffrate → 1 ved gjentatt arbeidssett som får plass; 5) **AMAT** = treffrate·1 + missrate·miss-kostnad. Sensor-kommentert case med margnotat om brøkform og LRU-simulering. 12–16 oppgaver (S3) med varierte konfigurasjoner.
- **Oppgavesjangre:** I (S3). Mønstereksempel (S3): «Samme sekvens i direktemappet vs. 2-veis LRU-cache: oppgi miss-rate for hver (brøkform).»
- **Typiske feil:** §#3 (feil N i S-formelen); glemme byte-offset; avrunde miss-rate; feil LRU-simulering (utkast eldst brukte).
- **Quiz: 26 · Flashcards: 10**

#### Kapittel 8.4: Virtuelt minne, paging og TLB

- **id:** `in2060-8-4` · **number:** 8.4 · **estimatedMinutes:** 50 · **prerequisites:** `in2060-8-1` · **kapitteltype:** teori
- **description:** Virtuelt minne og paging (sidetabellen ligger i hovedminne, ikke cache), TLB som liten fullt assosiativ oversettelsescache, og adressebit-regningen — pluss at virtuelt minne gir isolasjon/beskyttelse.
- **Eksamensbelegg:** Sjanger I (virtuelt minne), 83 %. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition`/`theorem` **virtuelt minne**: gir **isolasjon/beskyttelse** (to programmer kan bruke samme virtuelle adresse uten konflikt), ikke nødvendigvis mer lagring; **sidetabellen ligger i hovedminne (evt. disk)**, **ikke i cache**; **TLB** = liten, ofte **fullt assosiativ** cache for adresseoversettelser. `theorem` **bit-regning**: `fysisk adressebredde = log₂(fysisk minne)`; `sidenummerbit = adressebredde − offset`. **Notasjons- og konstruksjonsliste:** virtuell/fysisk adresse, sidetabell (i hovedminne), TLB (fullt assosiativ), paging, offset, sidenummerbit, isolasjon/beskyttelse.
- **Oppgavesjangre:** I (S3/S2). Mønstereksempler: (S2) «Kryss av de sanne utsagnene om TLB og sidetabell.»; (S3) «Fysisk minne 1 GB, sidestørrelse 4 KB — hvor mange sidenummerbit?» (`30 − 12 = 18`.)
- **Typiske feil:** Plassere sidetabellen i cache (den ligger i hovedminne/disk) (§#9); tro TLB er direktemappet (den er typisk fullt assosiativ); tro virtuelt minne primært gir mer lagring (det gir isolasjon).
- **Quiz: 20 · Flashcards: 22**

**Prøve-kvote Del 8:** 4 prøver (Minnesystemer)
1. Prøve 8.A (30 min): Cache-adressedeling — offset/indeks/tag/S (sjanger I, S3).
2. Prøve 8.B (30 min): Miss-/treffrate + LRU (brøkform) (sjanger I, S3).
3. Prøve 8.C (25 min): AMAT + konvergens mot 1 (sjanger I, S3).
4. Prøve 8.D (25 min): Virtuelt minne/TLB/paging — bit + fakta (sjanger I, S2/S3).

---

### Del 9 — Eksamenstrening

#### Kapittel 9.1: Eksamensdisiplinen — åtte blokker, auto-retting og vedleggsbruk

- **id:** `in2060-9-1` · **number:** 9.1 · **estimatedMinutes:** 40 · **prerequisites:** `in2060-0-1` · **kapitteltype:** teori (sjangerguide)
- **description:** Selve eksamensdisiplinen: hvordan svare på S1–S4 uten trekk for feil, hvordan disponere tiden over åtte blokker og 100 poeng, hvordan bruke maskinkodevedlegget, og hvordan holde sensorens svarform (brøk/intervall).
- **Eksamensbelegg:** Metakapittel over alle svarformer og blokker. Trener de viktigste føringene — *svar alltid (ingen trekk)*, *slå opp i vedlegget*, *hold brøkform*, *bit-bredde korresponderer*. Prioritet: **perfekt** (påvirker score i alle åtte blokker).
- **Innholdskontrakt:** `tip`/`text`: (i) **svarform-strategi** — S1 radioknapp: velg det ene beste; S2 «velg de N»: Inspera låser antallet, kryss nøyaktig N, vær obs på de faste gale påstandene; S3 fyll-inn-tall: oppgi **brøk der fasiten bruker brøk**, intervall der det aksepteres; S4 nedtrekk: klassifiser hvert felt for seg (delvis uttelling); (ii) **ingen trekk** — la aldri en oppgave stå tom; (iii) **åtte-blokk-disponering** — poeng summeres (ingen bestått-krav per blokk), men alle åtte kommer; sikre de tre poengmagnetene (VHDL 10–14 p, cache 8–10 p, ARM 6–10 p) og de garanterte regnepoengene (2-er-komplement, cache-adressedeling, miss-rate); (iv) **vedleggsbruk** — slå opp ARM-instruksjonsformatene, vis oppslaget; (v) **tidsbudsjett** — ~10 min per 25 poeng, ikke bli sittende fast; (vi) **H2018-ærlighetskravet** — ikke øv på å tegne tidsdiagram/skrive VHDL for hånd (testes ikke lenger). Sammendrag av sensor-metareglene (entydige/brøk-svar, ingen trekk, vedleggsbruk, pensumbokas konvensjoner).
- **Oppgavesjangre:** Alle S1–S4 (metanivå). 6–8 «hvordan bør du svare?»-oppgaver: gitt en svarform og en situasjon, avgjør beste strategi (f.eks. brøk vs. desimal, kryss nøyaktig N, bruk vedlegget).
- **Typiske feil:** La en oppgave stå tom (ingen trekk = alltid svar); avrunde der brøk kreves; ikke bruke vedlegget; bruke for lang tid på VHDL-blokka; øve på H2018-frisvarsformer.
- **Quiz: 14 · Flashcards: 10**

#### Kapittel 9.2: Øvingseksamen 1 — 23 oppgaver i åtte blokker (typisk sett)

- **id:** `in2060-9-2` · **number:** 9.2 · **estimatedMinutes:** 240 · **prerequisites:** `in2060-9-1` · **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers auto-rettet sett etter gjeldende mal (H2019–H2023): ca. 23 oppgaver i åtte faste temablokker i rekkefølge, 100 poeng, ingen trekk, med maskinkodevedlegg.
- **Eksamensbelegg/miks:** Speiler prognosen (§1/§7). **Blokk 1:** des→binær + 2-er-komplement (+ bitoppløsning). **Blokk 2:** boolsk forenkling + kretslesing. **Blokk 3:** latch/FF-paring + komb./sekv.-begreper. **Blokk 4:** stor VHDL-klassifisering (10–14 p) + evt. kritisk sti. **Blokk 5:** 2–3 byggeblokker (ALU/adder/LUT/shifter/dekoder). **Blokk 6:** ARM-oversettelse + maskinkode + branch target + PCS. **Blokk 7:** ytelse + klokkesykler + hazard-lokalisering + branch prediction. **Blokk 8:** cache-adressedeling + miss-/treffrate med LRU + virtuelt minne/TLB. Oppgavene i alle svarformer (S1–S4). Alle nyskrevne (egne tall/kretser/VHDL/kode/kontekster). **Løsningsforslag i `collapsible` per oppgave**, skrevet som A-besvarelse med **vedleggsoppslag vist** og **brøkform holdt**, `tip` om poeng/vekting. Innledende `tip` om tidsbudsjett (~10 min/25 p) og maskinkodevedlegget (`collapsible`).
- **Innholdskontrakt:** Dekker sjangrene A–I i alle åtte blokker.
- **Oppgavesjangre:** A–I, svarformer S1–S4.
- **Quiz: 23 · Flashcards: 0**

#### Kapittel 9.3: Øvingseksamen 2 — regne- og VHDL-tungt sett

- **id:** `in2060-9-3` · **number:** 9.3 · **estimatedMinutes:** 240 · **prerequisites:** `in2060-9-2` · **kapitteltype:** øvingseksamen
- **description:** Komplett sett med tyngdepunkt på de garanterte regneteknikkene (2-er-komplement, cache-adressedeling, miss-rate) og VHDL-klassifiseringen — men fortsatt full bredde over åtte blokker.
- **Eksamensbelegg/miks:** Ca. 23 oppgaver, åtte blokker, ekstra vekt på beregning/klassifisering: blokk 1 med tyngre 2-er-komplement + bitoppløsning; blokk 4 med større VHDL-klassifisering + kritisk sti + antall FF; blokk 6 med maskinkode-dekoding + branch target; blokk 8 med cache-adressedeling + miss-rate (direktemappet vs. 2-veis LRU, brøkform) + AMAT. Alle svarformer, alle nyskrevne. **Løsningsforslag som A-besvarelse** med margnotat om de faste fellene (glemt `+1`, feil N i S-formelen, avrundet brøk, feil kodestil, glemt PC+8).
- **Innholdskontrakt:** Dekker A–I; supplerer 9.2 med tyngre regning og VHDL.
- **Oppgavesjangre:** A–I, S1–S4.
- **Quiz: 23 · Flashcards: 0**

#### Kapittel 9.4: Øvingseksamen 3 — begreps- og klassifiseringstungt sett

- **id:** `in2060-9-4` · **number:** 9.4 · **estimatedMinutes:** 240 · **prerequisites:** `in2060-9-3` · **kapitteltype:** øvingseksamen
- **description:** Komplett sett med tyngdepunkt på de begreps-/klassifiseringstunge temaene (komb./sekv., VHDL-kodestil, latch/FF, PCS, hazardtyper, TLB-fakta) og de faste distraktorene.
- **Eksamensbelegg/miks:** Ca. 23 oppgaver, åtte blokker, ekstra vekt på «velg de N» og nedtrekk: blokk 2 med kretslesing + ekvivalente uttrykk; blokk 3 med komb./sekv.-begreper + latch/FF-paring; blokk 4 med kodestil-klassifisering (alle fem stiler) + kritisk sti; blokk 6 med funksjonskallkonvensjon + omvendt oversettelse; blokk 7 med hazardtyper + branch prediction; blokk 8 med virtuelt minne/TLB-fakta. Alle svarformer, alle nyskrevne. **Løsningsforslag som eksplisitt begrunner hvorfor hver sentrale distraktor er gal** (latch/FF, caller/callee, kodestil, sidetabell-i-cache), med `tip` om at klassifiseringspresisjon er selve ferdigheten faget tester. De tre settene sammen dekker alle sjangre A–I og alle åtte blokker flere ganger.
- **Innholdskontrakt:** Dekker A–I; supplerer med begreps-/klassifiseringstyngde og distraktortrening.
- **Oppgavesjangre:** A–I, S1–S4.
- **Quiz: 23 · Flashcards: 0**

---

## 5. Summeringskontroll (quiz/flashcards) — AUTORITATIV

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 16 | 14 |
| 1 | 1.1–1.4 | 20+22+16+26 = **84** | 20+20+16+8 = **64** |
| 2 | 2.1–2.4 | 20+20+16+24 = **80** | 22+18+18+8 = **66** |
| 3 | 3.1–3.4 | 18+20+24+16 = **78** | 20+22+10+16 = **68** |
| 4 | 4.1–4.4 | 18+22+20+26 = **86** | 22+24+20+10 = **76** |
| 5 | 5.1–5.3 | 18+18+18 = **54** | 18+18+20 = **56** |
| 6 | 6.1–6.5 | 18+20+20+18+24 = **100** | 22+20+20+20+8 = **90** |
| 7 | 7.1–7.4 | 18+18+24+14 = **74** | 20+16+10+16 = **62** |
| 8 | 8.1–8.4 | 22+22+26+20 = **90** | 22+20+10+22 = **74** |
| 9 | 9.1–9.4 | 14+23+23+23 = **83** | 10+0+0+0 = **10** |
| **Sum** | **37 kap.** | **745 ≥ 500 ✓** (siktemål 650–750) | **580 ≥ 500 ✓** |

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler eksamensformen: **quiz er direkte auto-rettet eksamenstrening** (S1–S4)
og er derfor kalibrert høyt (745). De tre poengmagnetene får tyngst quiz-dekning — VHDL
(Del 4: 86), ARM-arkitektur (Del 6: 100, med 5 kapitler) og cache/minne (Del 8: 90) —
mens de mellomstore blokkene (Del 5 byggeblokker: 54, Del 7 mikroarkitektur: 74) ligger
lavere fordi de har færre kapitler og lavere frekvens. Drillkapitlene (1.4, 2.4, 3.3, 4.4,
6.5, 7.3, 8.3) har høyest quiz (24–26) fordi de **er** treningsbanken for de garanterte
regne-/klassifiseringssjangrene. Flashcards vektes mot **begrep/mønster → definisjon → fast
distraktor** og siktes høyt (580) fordi faget er svært begrepsrikt (kodestiler, kretstyper,
ARM-konvensjoner, cache-parametre, hazardtyper, latch/FF-skillet) og eksamen er
hjelpemiddelfri. Øvingseksamenene (9.2–9.4) gir 0 flashcards (rene oppgavesett) men bidrar
med 23 quiz hver (matcher de ~23 eksamensoppgavene).

---

## 6. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–8 → 32 prøver)

Hver prøve er nyskrevne auto-rettede oppgaver i eksamens svarformer (S1–S4), med
løsningsforslag som holder sensorens form (brøk/intervall, vedleggsoppslag) og oppgir
poengfordeling. Prøvekapitler bygges som `in2060-<del>-prove` (chapterNumber `<del>.P`)
etter plattformmønsteret, eller som egne exercise-seksjoner i delens siste kapittel.
Prøvekvotene per del står i sluttblokken til hver del over (Del 1–8). Del 0 og Del 9 får
ikke egne prøver (Del 9 **er** øvingseksamenene).

### Øvingseksamener (3 komplette sett — se kap. 9.2–9.4)

| Sett | Profil | Miks |
|---|---|---|
| Øvingseksamen 1 (9.2) | Typisk gjeldende sett (H2019–H2023-mal) | ~23 oppgaver, åtte blokker i rekkefølge, full bredde, alle S1–S4 |
| Øvingseksamen 2 (9.3) | Regne- og VHDL-tungt sett | ~23 oppgaver, vekt på 2-er-komplement/cache/miss-rate + VHDL-klassifisering |
| Øvingseksamen 3 (9.4) | Begreps-/klassifiseringstungt sett | ~23 oppgaver, vekt på «velg de N» + nedtrekk + faste distraktorer |

Hvert sett er bygd som **ca. 23 auto-rettede oppgaver i åtte faste temablokker (100 poeng,
ingen trekk, med maskinkodevedlegg)**, med løsningsforslag som A-besvarelse (brøkform holdt,
vedleggsoppslag vist). Til sammen dekker de tre settene alle sjangre A–I og alle åtte blokker
flere ganger.

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — én firetimers auto-rettet digital eksamen (Inspera), A–F,
   100 poeng, **ingen trekk for feil svar**, **åtte faste temablokker i rekkefølge**,
   **ingen seksjon-bestått-krav** (poeng summeres), med **maskinkodevedlegg**, og
   H2018-ærlighetskravet (frisvar testes ikke lenger; VHDL leses/klassifiseres) — fra
   kap. 9.1/0.1.
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer: **perfekt**
   (2-er-komplement + des→binær, VHDL-klassifisering, cache-adressedeling + miss-rate,
   latch/FF-skillet, boolsk forenkling, ARM-oversettelse + maskinkode, hazard-lokalisering,
   virtuelt minne), **kunne** (funksjonskallkonvensjon, ytelse/klokkesykler, ALU,
   adder-typer, ROM/LUT, tilstandsmaskiner, branch target, AMAT), **kjenne** (bitoppløsning,
   flyttall, shifter, branch prediction, kritisk sti, control-signaler).
3. **Svarform- og sjangerguiden** — S1–S4 (radioknapp, «velg de N», fyll-inn-tall, nedtrekk)
   med strategien fra kap. 9.1, og innholdssjangrene A–I med løsningsoppskriftene fra
   drillkapitlene (1.4, 2.4, 3.3, 4.4, 6.5, 7.3, 8.3) i kortform.
4. **Sensorreglene** — svar alltid (ingen trekk); hold brøkform/intervall der fasiten gjør
   det; slå opp i vedlegget og vis oppslaget; følg pensumbokas konvensjoner (5-stegs
   pipeline, registerfil skriv-1./les-2.-halvsykel, PC+8, caller/callee); bit-bredde
   korresponderer i entity/arkitektur.
5. **Feilkatalogen** — de faste fellene (§5 i analysen) samlet, hver med henvisning til
   kapitlet som forebygger den: forveksle latch/flip-flop (3.2/3.3), blande caller/callee-save
   (6.4), feil cache-indeks/tag/N (8.1/8.3), glemme PC+8 i branch target (6.3), feil
   VHDL-kodestil (4.2/4.4), feil adder-forsinkelse log₂n vs. n (5.1), påstå kombinatorisk har
   minne (3.1), glemme `+1` i 2-er-komplement (1.2/1.4), plassere sidetabell i cache /
   direktemappet TLB (8.4), feil ALU-flagg N/Z/C/V (5.2), bruke H2018-oppgavetyper (0.1).
6. **Notasjons- og konstruksjonsark** — samlet puggeark for en hjelpemiddelfri eksamen:
   basesubskript + 2-er-komplement-formelen (`−2⁷·b₇ + Σ2ⁱ·bᵢ`, `inverter + 1`),
   bitoppløsning `⌈log₂K⌉`, boolske lover, latch/FF-skillet, **VHDL-kodestiltabellen**
   (dataflow/structural/behavioral/RTL/testbench med kjennetegn), `⌈log₂ tilst.⌉`, adder-
   forsinkelse (∝ n vs. ∝ log₂n), ALU-flaggene, **ARM-instruksjonssettet + betingelseskodene
   + maskinkodefeltene** (jf. vedlegget), `imm24 = (mål − (adr+8))/4`, caller/callee-inndeling,
   ytelse ∝ `1/(CPI·sykeltid)`, **cache-adressedelingen** (offset/indeks/tag/S/N), miss-rate
   (brøk) + AMAT, virtuelt minne/TLB-fakta.
7. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant): fordi bredden
   *er* eksamensformen, dekk alle åtte blokker — men prioritér de tre poengmagnetene (VHDL,
   cache, ARM) og de garanterte regnepoengene tidlig (Del 1 tall/2-komplement → Del 8
   cache/miss-rate → Del 4 VHDL-klassifisering → Del 3 latch/FF), legg deretter de mellomstore
   (Del 2 boolsk, Del 6 ARM, Del 7 hazard), og kjør prøvene underveis + de tre øvingssettene de
   siste ukene under tidspress (240 min, åtte blokker).

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `in2060` med alle 37 kapitler
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites/
   linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra §2-tabellen (obligatorisk).
   **`number` er del-basert** («4.2», ALDRI lineær «18» — jf. JUS1111-lærdommen;
   prosareferanser i innholdet bruker samme form, «kap. 4.2»).
2. **Del 0** (kap. 0.1) — etablerer svarformene S1–S4, innholdssjangrene A–I, frekvenstallene,
   åtte-blokk-regelen, vedleggsbruken, H2018-ærlighetskravet og eksamensdisiplinen resten
   refererer til.
3. **De åtte temadelene** bygges i eksamens rekkefølge Del 1 → Del 8 (innad følger kapitlene
   forkunnskaper: 1.1 før 1.2/1.4; 2.1 før 2.2/2.4; 3.2 før 3.3; 4.1 før 4.2/4.4; 6.1 før
   6.2/6.3/6.5; 7.1 før 7.2/7.3; 8.1 før 8.2/8.3). Prioritér innhold/kvalitet på de tre
   poengmagnetene (Del 4 VHDL, Del 6 ARM, Del 8 cache).
4. Del 9 (eksamenstreningen) til slutt — den gjenbruker alle svarformer og sjangre;
   øvingseksamenene speiler åtte-blokk-malen (~23 oppgaver, 100 poeng).
5. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som kapitlene
   ferdigstilles; prøvene (§6) legges i respektive delers prøvekapittel/exercise-seksjoner.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (escape `"` i
  norske sitattegn og i VHDL/kode; `\\` for LaTeX-kommandoer); `npm run build` grønn.
- [ ] **Quiz er auto-rettet eksamenstrening**: `options[0]` = riktig svar (runtime stokker);
  reelle «velg de N»- og fler-felt-nedtrekk-oppgaver er splittet til ett-riktig-svar-quiz;
  hver quiz-forklaring begrunner riktig svar og de sentrale distraktorene (klassifiseringen).
- [ ] **Ingen trekk / svar alltid**: Del 0 + kap. 9.1 sier eksplisitt at det ikke gis trekk
  for feil avkrysning (kontrast til IN1020), og at Inspera låser antall på «velg de N».
- [ ] **Ingen seksjon-bestått-krav**: Del 0 sier at poeng summeres til én karakter (ingen
  blokk må bestås for seg), men at alle åtte blokker kommer hvert år og veier.
- [ ] **Notasjons- og konstruksjonsliste per delkapittel**: hvert delkapittel som bruker
  notasjon har `collapsible` «Notasjons- og konstruksjonsliste» rett etter Forkunnskaper, som
  forklarer ALT delkapitlet bruker (binærnotasjon, VHDL-konstruksjoner, ARM-instruksjoner,
  cache-parametre — per delkapittel, ikke arv).
- [ ] **Regneprosedyrene som `theorem` (med brøkform)**: des→binær + 2-er-komplement
  (`inverter + 1`), bitoppløsning `⌈log₂K⌉`, cache-adressedeling (offset/indeks/tag/S/N),
  **miss-rate i brøkform** + AMAT, imm24 (`PC+8`), `⌈log₂ tilst.⌉`, ytelse `1/(CPI·sykeltid)`
  — alle med gjennomregnet eksempel; løsningsforslag holder brøk/intervall der fasiten gjør.
- [ ] **VHDL-lesekontrakter (kode leses, ikke skrives)**: kap. 4.1–4.4 har `theorem`-blokker
  med kodestil-/kretstype-/komb.-sekv.-kjennetegn; VHDL-eksempler har **korresponderende
  bit-bredde i entity og arkitektur** (sensorkrav); kritisk sti dekkes (H2023).
- [ ] **ARM-instruksjonskontrakter + vedlegg**: kap. 6.1 har et nyskrevet maskinkodevedlegg
  (`collapsible`) med instruksjonsformater/betingelseskoder/felt; hvert maskinkode-
  løsningsforslag **viser vedleggsoppslaget**; caller/callee-inndeling og imm24 med PC+8.
- [ ] **De faste fellene som warnings**: hvert relevant kapittel har `warning` for sin felle —
  latch/FF (3.2/3.3), caller/callee (6.4), cache-N/indeks (8.1/8.3), PC+8 (6.3), VHDL-kodestil
  (4.2/4.4), adder-forsinkelse (5.1), kombinatorisk-har-minne (3.1), `+1` i 2-komplement
  (1.2/1.4), sidetabell-i-cache/TLB (8.4), ALU-flagg (5.2).
- [ ] **H2018-ærlighetskrav**: Del 0 + kap. 9.1 sier at H2018-frisvar (tegne tidsdiagram,
  skrive VHDL, tegne tilstandsdiagram) ikke lenger forekommer; VHDL leses/klassifiseres nå.
- [ ] **Nye H2023-temaer dekket**: kritisk sti (4.3/4.4), omvendt oversettelse C←ARM (6.2),
  branch prediction (7.4), samt bitoppløsning (1.3) og AMAT (8.2) som voksende.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra dette
  skjelettet), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå i auto-rettet
  svarform), 6–12 øvinger (S1–S4) med `solution` + `hints`, repetisjons-`collapsible`;
  drillkapitler har løsningsoppskrift + sensor-kommentert case + 12–16 oppgaver.
- [ ] **Quiz-sum ≥ 745 og flashcard-sum ≥ 580** per kvotetabellen (§5); quiz kalibrert som
  direkte auto-rettet eksamenstrening; flashcards som begrep/mønster ↔ definisjon ↔ fast
  distraktor.
- [ ] **Prøver**: 4 per temadel 1–8 (32 stk) + 3 øvingseksamener (kap. 9.2–9.4) som sammen
  dekker sjangrene A–I, svarformene S1–S4 og alle åtte blokker flere ganger.
- [ ] **Opphavsrett**: ALLE oppgaver, tall, kretser, VHDL-moduler, kodebiter og innpakninger
  nyskrevne — egne verdier/kontekster; instruksjonssett, tallverdier, standardnotasjon og
  VHDL-konstruksjoner er allmenn faglig kunnskap, men ingen oppgavetekster/fasiter/
  sensorformuleringer fra reelle sett gjengis; pensum (Harris & Harris) refereres
  (begrep/verk), aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 +
  innhold), jf. lærdommen om `getChapterMeta`.
