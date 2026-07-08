# Eksamensanalyse: SØK2010 Banking (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på eksamensarkivet i `~/Desktop/Eksamner/NTNU/SOK2010/`: ca. 25 filer, hvorav **8 sensorveiledninger/løsningsforslag lest grundig** og ~17 oppgavesett fra V2014 til V2024 (de siste ~8 årene grundig, eldre skummet). **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller sensorformuleringer. Modellsammenhenger, tallsvar og faglige fakta er gjengitt fritt (uten verkshøyde). Analysen er kvantitativ der kildene tillater det.
>
> **Filene som er lest grundig:** `sensorveiledning SØK2010.pdf` (V2022, engelsk, komplett fasit), `Sensurveiledning SØK2010 V21 Exam Solution.pdf` (V2021, engelsk), `Final SOK2010_solution.pdf` (V2024, engelsk, med flervalgsdel), `Solution and grading guidelines to Final SØK2010 Banking.pdf` (peker til problemsett PS2–PS5), `SØK 2010 Sensorveiledning (1).pdf` (H2016/juni 2016, engelsk), `SØK2010 Sensorveiledning fall 2019.pdf`, `SØK2010 Sensorveiledning spring 2019.pdf`, `SØK2010v18_sensorveiledning.pdf` (V2018, bokmål). Oppgavesett lest grundig: V2017, H2017, V2018, H2018, V2019, V2020 (to varianter), V2022 (bm+en), H2022, H2023, V2024, samt eldre H2016/V2016. Fire eldre sett (V2014, H2014, V2015 og enkelte skanninger) er bildebaserte og ga lite/ingen tekst med `pdftotext` — de er brukt kun til strukturbekreftelse.
>
> **Emnekode-merknad:** Arkivet skriver emnet «SØK2010»; den offisielle koden i dagens NTNU-katalog kan skrives «SOK2010» (samme emne). Fullt navn veksler i kildene: **«Banking»**, «Bank- og finansmarkeder», «Bank- og kredittmarkeder». 7,5 studiepoeng, Institutt for samfunnsøkonomi, NTNU. Status: aktivt. **Merk at det ikke finnes én fast pensumbok** — kildene henviser til lærebokstoff, artikler (bl.a. Brunnermeier 2008, Diamond–Dybvig 1983, Stiglitz–Weiss 1981, Zingales) og problemsett (PS2–PS5). Se del 7.

---

## 0. Kort om emnet + forhold til beslektede emner (les dette først)

SØK2010 «Banking» er NTNUs innføringsemne i **bankvirksomhet, finansiell formidling og finansmarkeder**. Emnet er bredt og institusjonelt/anvendt: det dekker penger og pengeskaping, obligasjoner og renter, bankens balanse og risiko, asymmetrisk informasjon (uheldig utvalg og moralsk hasard), bankreguleringen, sentralbanken og pengepolitikken, finansiell stabilitet og finanskriser, samt teknologiens virkning på finansinstitusjonene. Det er **ikke** et rent teoriemne slik SOK1002 (mikro) er — men det har en fast kjerne av regne- og modelloppgaver (obligasjonsprising, delegert overvåking, to-typemodellen for kredittmarkedet, Diamond–Dybvig).

### Grense mot SØK2005 Finansmarkeder (viktigst)
Begge emnene dekker **finansiell formidling og verdipapirer** (obligasjoner, aksjer, renter, prising). Overlappet er reelt på verktøysiden: neddiskontering, obligasjonsprising, pris–rente-sammenhengen, yield to maturity, forward-renter, markedseffisiens.

**Det som er unikt for SØK2010 (bank-vinkelen)** — og som en bok må bygge rundt:
- **Banken som institusjon:** bankens balanse (aktiva/passiva, hvorfor innskudd er gjeld og lån er eiendeler), egenkapital, løpetidstransformasjon (maturity conversion), likviditetsforsyning, innskuddspooling.
- **Asymmetrisk informasjon i kredittmarkedet:** uheldig utvalg (adverse selection) og moralsk hasard, samt bankens virkemidler (overvåking, pant, screening, signalisering) — og formelle modeller (to-typemodellen, delegert overvåking à la Diamond, Stiglitz–Weiss-kredittrasjonering).
- **Bankregulering og sikkerhetsnett:** innskuddsgaranti, kapital- og likviditetskrav (Basel III), risikovekting, egenkapitalandel vs. uvektet gjeldsgrad (leverage ratio), lender of last resort, statlige redningspakker, bank run og tiltak mot dem.
- **Sentralbank og pengepolitikk:** sentralbankens balanse, styringsrente, NOWA/interbankrente, åpne markedsoperasjoner, reservekrav, sentralbankens uavhengighet, mål for pengepolitikken.
- **Finansiell stabilitet og kriser:** finanskrisen 2007–09 (årsaker, forløp, håndtering, ettertidens regulering), brannsalg, smitte, sammenkobling, securitisering og «origination and distribution», repo-finansiering.

**Konklusjon for bokdesign:** SØK2010 er et **bredt bank- og finansmarkedsemne** der studenten både skal beherske en håndfull kvantitative modeller (obligasjon, delegert overvåking, kredittmarked med asymmetrisk informasjon, Diamond–Dybvig, intertemporalt valg) og kunne drøfte institusjonelle og regulatoriske spørsmål med presise begreper. Boken bør ha én kvantitativ verktøysøyle (renteregning, obligasjonsprising) delt med SØK2005, men tyngdepunktet på bank, regulering, sentralbank og stabilitet — det som gjør emnet unikt.

### Kritisk observasjon: eksamen er som regel på engelsk
Bekreftet: **de fleste settene i arkivet er på engelsk** (V2017, H2017, V2019, H2019, V2020, V2021, V2022-en, H2022, H2023, V2024 m.fl.), gjerne med parallell bokmåls-/nynorskversjon av oppgaveteksten. Enkelte eldre sett og enkelte sensorveiledninger er på norsk bokmål (V2018, deler av V2022). **Fagterminologien studenten møter er derfor engelsk** (moral hazard, adverse selection, collateral, maturity conversion, risk-weighted assets, leverage ratio, yield to maturity, bank run). En norsk lærebok bør konsekvent oppgi engelsk fagterm i parentes ved hvert nøkkelbegrep, siden studenten skal kunne svare på engelsk eksamen.

---

## 1. Eksamensform og utvikling

### Form
- **Skriftlig skoleeksamen, 4 timer** (09:00–13:00), karakter A–F, 7,5 studiepoeng. Digital i Inspera Assessment; håndtegnede figurer/utregninger kan lastes opp (V2024: +15 min til filopplasting).
- **Hjelpemidler:** normalt **kode C** — matematisk formelsamling (Sydsæter/Strøm/Berck) + godkjent kalkulator (V2024 og eldre sett oppgir dette eksplisitt). Under korona (V2020, V2021) var oppsettet hjemme-/åpen bok med «gjør de forutsetningene du finner nødvendige».
- **Målform:** oppgaveteksten gis oftest på **engelsk**, gjerne med parallell **bokmål + nynorsk**. Enkelte sett og veiledninger er kun på norsk (V2018). Studenten kan besvare på norsk eller engelsk.
- **Fast instruks:** «gjør dine egne forutsetninger hvis en oppgave er uklar»; «konsise svar belønnes» (særlig på essayoppgaver).
- **Oppgavestillere (roterer — forklarer to tydelige stilepoker):**
  - **Mork-epoken (ca. 2014–2020):** Knut Anton Mork. Preg: 5–6 småoppgaver à 10–15 % + **stort essay (50 %)**; obligasjoner/forward-renter, bankbalanse, sentralbank/pengepolitikk, finanskrise-essay, forsikring, valuta.
  - **Wang-epoken (ca. 2021–2024):** Yabin Wang. Preg: begreps-/kortsvarsblokk + tyngre **modelloppgaver** (delegert overvåking, to-typemodell for kredittmarkedet, Diamond–Dybvig, intertemporalt valg) + i V2024 en **flervalgsdel** knyttet til artikler lest i kurset.

### Struktur — to tydelige maler
Emnet har **ikke** én fast oppgavemal slik SOK1002 har, men to gjenkjennelige formater etter epoke:

**A) Mork-malen (2014–2020):** Fem–seks korte oppgaver (definisjoner, én obligasjons-/renteoppgave, én sentralbank-/reguleringsoppgave, én markedseffisiens-/aksjeoppgave) **pluss ett stort essay (50 %)** om et overordnet tema (finanskrisen 2007–09; det moderne finanssystemet vs. tradisjonell bank; aksjer/obligasjoner/banklån som finansieringsformer).

**B) Wang-malen (2021–2024):** Én **begreps-/kortsvarsblokk (20–30 %)** + to–tre **modelloppgaver** (kredittmarked med asymmetrisk informasjon, delegert overvåking, Diamond–Dybvig liquidity insurance, intertemporalt valg, bankbalanse-analyse) + evt. **flervalgsdel** (V2024, 40 poeng, om pensumartikler).

### Vektings-/strukturhistorikk (utvalg)

| Sett | Struktur | Språk |
|---|---|---|
| V2016/H2016 | 5×10 % + essay 50 % (Mork) | en/nb/nn |
| V2017 | 5×10 % + essay 50 % | en/nb/nn |
| H2017 | 5×10 % + essay 50 % (finansiering: aksje/obl./lån) | en |
| V2018 | Renteregning, obligasjon m/mislighold, forventningshypotese, finansiell tjenesteyting, sentralbank | nb |
| H2018 | Rule of 72, valuta/loven om én pris, bankbalanse m/valutarisiko, inflasjon, finanspolitikk/EMU | nb |
| V2019 | Moderne bank, bankbalanse, forward-renter, aksje vs. obligasjon, risikovekting/leverage, sentralbank | en |
| H2019 | Begreper (pooling, maturity conversion, likviditet, kapital-/likviditetskrav), innskuddsgaranti, brannsalg/smitte, markedseffisiens, boliglånsregulering, «er finans bra?» | en |
| V2020 | Obligasjonsverdi/yield, begreper, livsforsikring, overinvestering (gjeld/agentproblem) | en |
| V2020 (var.) | Deposit multiplier, pensjonsforsikring, bank run, bankforvaltning | en |
| V2021 | Sentralbankbalanse, innskuddsgaranti, agentproblem, sentralbankstyring av rente, kredittmodell m/pant | en |
| V2022 | Begreper (11), obligasjonsmarked (tilbud/etterspørsel), relasjonsbank, bank run, to-typemodell (40 %) | en/nb |
| H2022 | Begreper (8), to-typemodell (40 %), obligasjonsutstedelse/pris–rente (35 %) | en |
| H2023 | Asymmetrisk info/insolvent vs. illikvid/sikkerhetsnett, intertemporalt valg, Diamond–Dybvig, bankbalanse | en |
| **V2024** | Asym. info/MBS/securitisert bank (30) + delegert overvåking (30) + **flervalg om artikler (40)** | en |

**Konstanter på tvers av settene:**
1. **Én begreps-/definisjonsblokk** finnes i så å si hvert sett (bank run, penger, collateral, likviditet, kredittvurdering, styringsrente, neddiskontering osv.).
2. **Minst én obligasjons-/renteoppgave** i de fleste sett (prising, yield, forward-renter, pris–rente-sammenheng).
3. **Asymmetrisk informasjon** (uheldig utvalg / moralsk hasard) er gjennomgående — som begrep, som modell, eller begge.
4. **Sentralbank/pengepolitikk og regulering** dukker opp nesten hvert år (styringsrente, åpne markedsoperasjoner, innskuddsgaranti, kapital-/likviditetskrav, bank run-tiltak).
5. **Finanskrise/finansiell stabilitet** — som essay (Mork) eller som artikkelbasert flervalg/drøfting (Wang).

---

## 2. Temafrekvens

Frekvensen bygger på de settene der oppgaveteksten er lesbar (~17 sett) samt de 8 sensorveiledningene/løsningsforslagene. Score = andel sett der temaet inngår som deloppgave eller mer. Emnet er tematisk bredt, så jeg deler i fem spor.

### 2A. Penger, renter og obligasjoner (kvantitativ verktøykasse)

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **Neddiskontering / nåverdi (NPV)** | **~90 %** | Fundamentet under obligasjon, forsikring, intertemporalt valg |
| **Obligasjonsprising + pris–rente-sammenheng** | **~80 %** | Nullkupong og kupong; `P = FV/(1+i)ⁿ`; invers pris/rente |
| **Yield to maturity** | ~55 % | Regnes fra pris (f.eks. kjøpt til 75 % av pålydende) |
| **Forward-renter / rentens terminstruktur** | ~35 % | V2017, V2019; forventningshypotesen (V2018) |
| **Penger: funksjoner, pengeskaping, kryptovaluta** | **~65 %** | Byttemiddel/regneenhet/verdioppbevaring; banker skaper penger via utlån |
| **Rule of 72 / rentesammensetning** | ~25 % | H2018, V2018 (doblingstid, månedlig vs. årlig rente) |
| Realrente, inflasjon, hyperinflasjon | ~40 % | Ofte i begrepsblokken |

### 2B. Bank, balanse og risiko

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **Bankens balanse** (aktiva/passiva, hvorfor innskudd=gjeld, lån=eiendel, EK på passivasiden) | **~70 %** | V2019, H2018, H2023, V2020-variant; risiko på hver side |
| **Bankens funksjoner / finansiell formidling** | **~65 %** | Pooling, løpetidstransformasjon, likviditet, diversifisering, informasjon |
| **Insolvent vs. illikvid** | ~45 % | Fast begrepspar; grunnlag for bank run og regulering |
| **Leverage / gearing (økt avkastning OG risiko)** | ~40 % | H2016, V2024 (ROE-risikoskifting) |
| Løpetids-/valuta-/renterisiko (også MBS-durasjon) | ~40 % | H2018 (valuta), V2024 (MBS og renterisiko) |
| Behandling av tap på utlån (loan-loss provisions) | ~20 % | H2016/V2016-sett |

### 2C. Asymmetrisk informasjon og kredittmarkedet (modelltungt)

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **Uheldig utvalg + moralsk hasard** (begrep + skille) | **~90 %** | Selve ryggraden i emnet; klassifiser eksempler og foreslå tiltak |
| **Bankens virkemidler: overvåking, pant, screening, signalisering** | **~75 %** | Fast «løsnings»-liste; hvert virkemiddel må forklares kort |
| **To-typemodell for kredittmarkedet** (sikre/risikable prosjekter, rente under monopol vs. frikonkurranse) | **~40 %** | V2021, V2022, H2022 — ofte 40 % av settet |
| **Delegert overvåking** (Diamond: én bank overvåker flere lån, sparer duplisert overvåking) | ~20 % | V2024 (30 poeng), tydelig i nyere sett |
| **Kredittrasjonering (Stiglitz–Weiss)** | ~15 % | V2024 flervalg; renteøkning kan senke forventet avkastning |
| **Overinvestering / risikoskifting** (gjeldsfinansiering vrir låntakeratferd) | ~25 % | V2020 (gammel gjeld → firma tar ulønnsomt prosjekt) |
| **Intertemporalt valg / konsum over to perioder** | ~25 % | H2023 (log-nytte, låne/spare), sammen med SØK2005-verktøy |

### 2D. Regulering, sentralbank og pengepolitikk

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **Bank run** (hva, årsaker, tiltak) | **~70 %** | Nesten fast; moderne vs. 100 år siden; «alt eller ingenting» |
| **Innskuddsgaranti → behov for regulering** | **~65 %** | Garanti fjerner overvåkingsinsentiv → moralsk hasard → tilsyn |
| **Kapital- og likviditetskrav / Basel III** | **~55 %** | Risikovektede eiendeler (RWA), Tier 1, buffere |
| **Risikovekting vs. leverage ratio** | ~35 % | V2019; fordeler/ulemper ved hver |
| **Sentralbanken: balanse, styringsrente, NOWA, åpne markedsoperasjoner, reservekrav** | **~60 %** | V2021, V2017, V2018; hvordan sentralbanken styrer korte renter |
| Sentralbankens uavhengighet + mål for pengepolitikk | ~30 % | V2018; lav/stabil inflasjon, finansiell stabilitet |
| Lender of last resort / redningspakker / suspensjon av konvertibilitet | ~40 % | V2021, Diamond–Dybvig-koblingen |
| Boliglånsregulering (gjeldsgrad, LTV) | ~15 % | H2019 (maks 4,5× inntekt) |

### 2E. Finansiell stabilitet, kriser og teknologi

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **Finanskrisen 2007–09** (årsaker, forløp, håndtering, ny regulering) | **~50 %** | Stort essay (Mork) eller flervalg (Wang); Brunnermeier 2008 |
| **Securitisering / MBS / «origination and distribution»** | ~35 % | V2024; skifte fra tradisjonell bank; repo-finansiering |
| Brannsalg, smitte, sammenkobling | ~25 % | H2019; hvorfor krisen ble alvorlig |
| Markedseffisiens (kjøp aksje analytiker anbefaler? «buy on dips») | ~40 % | V2019, H2019, H2016; arbitrasje finnes ikke i effisient marked |
| OTC-derivater / systemrisiko | ~15 % | H2016 |
| Diamond–Dybvig (likviditetsforsikring, selvoppfyllende run) | ~25 % | H2023, V2024 flervalg |
| Teknologi/kryptovaluta/kontantløst samfunn | ~30 % | H2016 (avskaffe kontanter), begrepsblokk (krypto) |
| Livs-/skadeforsikring, pensjon (rettferdig premie) | ~25 % | V2020 (livsforsikringspremie), V2020-variant (pensjon) |

**Viktigste funn:**
1. **Asymmetrisk informasjon er emnets navlestreng.** Uheldig utvalg og moralsk hasard går igjen som begrep, som klassifiseringsøvelse (klassifiser eksempler) og som formell modell (to-typemodell, delegert overvåking, kredittrasjonering). En bok må dekke dette på tre nivåer: intuisjon, klassifisering, og regning.
2. **Obligasjonsprising + neddiskontering er den faste regnekjernen** — sammen med bankens balanse. Disse må studenten kunne mekanisk (nullkupong `P = FV/(1+i)ⁿ`, kupongobligasjon, yield, forward-renter).
3. **Regulering, sentralbank og finansiell stabilitet er selve bank-vinkelen** som skiller SØK2010 fra SØK2005: innskuddsgaranti → regulering, bank run → sikkerhetsnett, kapital-/likviditetskrav, styringsrente og åpne markedsoperasjoner.
4. **Finanskrisen 2007–09 er det store overbyggende temaet** — som essay før 2021 og som artikkelbasert flervalg/drøfting etter. Boken bør ha et fyldig krisekapittel (årsaker, forløp, håndtering, Basel III/Dodd-Frank).
5. **To eksamensstiler krever to beredskaper:** Mork-essayet (bredt, drøftende, konsist) og Wang-modellene (regning + flervalg om konkrete artikler). Boken må trene begge.

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen, med typisk krav og omskrevne eksempler.

### A. Begrepsforklaringer (kortsvarsblokk — nesten alltid)
- **Krav:** Presis, konsis definisjon; gjerne ett kjennetegn/eksempel eller et matematisk uttrykk. Sensor belønner korthet uttrykkelig.
- **Gjengangerbegreper:** penger (byttemiddel/regneenhet/verdioppbevaring), pengeskaping, kryptovaluta, neddiskontering, realrente, styringsrente, NOWA, netto nåverdi, kredittvurdering (credit rating), likvid/illikvid eiendel, collateral (pant), risikoaversjon, kupongobligasjon, hyperinflasjon, forretningsbank, intertemporær optimering, deposit multiplier, likviditetsfelle, kredittskvis, innskuddspooling, løpetidstransformasjon, likviditetsforsyning, kapitalkrav, likviditetskrav.
- **Omskrevet eksempel:** «Forklar kort hva som menes med *collateral* (pant), og hvorfor det reduserer bankens tap ved mislighold.»

### B. Obligasjonsprising og yield (regneoppgave)
- **Metode (fasitenes standard):** Prisen = neddiskontert nåverdi av kontantstrømmene. Nullkupong: `P = FV/(1+i)ⁿ`; kupongobligasjon: sum av neddiskonterte kuponger + neddiskontert pålydende. Yield to maturity løses implisitt fra pris. Pris og rente beveger seg motsatt.
- **Fasit-eksempler:** kjøpt til 75 % av pålydende, 8 år igjen (opprinnelig 10 år, kjøpt etter 2) → yield ≈ 3,7 % (`(1/0,75)^(1/8) − 1`); kupong 5, pålydende 100, 3 år, ulike terminrenter → verdi + yield (V2020); kredittspread 3,2 % legges til for selskapsobligasjon.
- **Omskrevet eksempel:** «En bank utsteder en treårig nullkupongobligasjon med pålydende 100. Renten for bankens kredittvurdering er 7 %. Finn prisen, og forklar sammenhengen mellom pris og rente.»

### C. Pris–rente med tilbud og etterspørsel (figur + drøfting)
- **Krav:** Tegn obligasjonsmarkedet med pris og mengde på aksene. Tilbudskurve stigende (flere vil selge ved høyere pris), etterspørselskurve fallende. Skift kurvene og les av pris- og renteeffekt for gitte hendelser. Bruk pris–rente-inversen fra B.
- **Typiske skift-hendelser:** svakere/bedre kredittvurdering av utsteder, økt samlet investering i økonomien, sentralbanken hever styringsrenten, økt usikkerhet i aksjemarkedet, økt inflasjon, bedret bedriftsforventning.
- **Omskrevet eksempel:** «Bruk en tilbuds- og etterspørselsanalyse til å vise hva som skjer med prisen og renten på en obligasjon når utstederens kredittvurdering svekkes.»

### D. Forward-renter og terminstruktur
- **Krav:** Bygg impliserte ettårige forward-renter av yield-kurven: `(1+yₙ)ⁿ = (1+r₀₁)(1+r₁₂)···`. Løs for `r₁₂ = (1+y₂)²/(1+y₁) − 1` osv. Approksimasjon `r₁₂ ≈ 2y₂ − y₁` når rentene er små. Forventningshypotesen: lang rente = snitt av forventede korte renter; kan forklare samvariasjon og at korte renter svinger mest, men ikke hvorfor lange renter typisk er høyere (terminpremie).
- **Omskrevet eksempel:** «Gitt ett-, to- og treårige statsrenter, beregn de impliserte ettårs forward-rentene om ett og to år.»

### E. Bankens balanse og risiko
- **Krav:** Plasser poster riktig (kontanter, verdipapirer, lån, anleggsmidler = eiendeler; innskudd, obligasjonsgjeld, egenkapital = gjeld/EK). Forklar hvorfor innskudd er gjeld (bankens forpliktelse), lån er eiendeler (bankens krav), egenkapital står på passivasiden (residualen som balanserer). Identifiser risiko: kredittrisiko og markedsrisiko på aktivasiden, run-/refinansieringsrisiko på passivasiden, samt løpetids-, rente- og valutarisiko.
- **Omskrevet eksempel:** «En bank har lånt kortsiktig i euro og dollar og lånt ut langsiktig i begge valutaer. Sett opp en forenklet balanse og drøft risikoene banken står overfor.»

### F. Asymmetrisk informasjon — klassifisering og tiltak
- **Krav:** Skille **uheldig utvalg** (adverse selection, *før* kontrakt — skjult type) fra **moralsk hasard** (moral hazard, *etter* kontrakt — skjult handling). Klassifiser gitte eksempler og begrunn. Foreslå tiltak: mot moralsk hasard → overvåking, pant, kontraktsvilkår (covenants); mot uheldig utvalg → screening (kreditthistorikk), signalisering, differensiert rente.
- **Omskrevet eksempel:** «En innskuddsforsikret bank tar mer risiko på utlånssiden enn den ellers ville gjort. Er dette uheldig utvalg eller moralsk hasard? Begrunn, og foreslå et mottiltak.»

### G. To-typemodell for kredittmarkedet (kjernemodell, ofte 40 %)
- **Oppsett:** To perioder. Prosjekt investerer `I` i periode 0, betaler i periode 1. Investor har egenkapital `E`, trenger lån `L = I − E`. Sikre prosjekter (type 1): kjent utbetaling `A > I`, andel `s`. Risikable (type 2): utbetaling `U` med sannsynlighet `p`, ellers 0, andel `1−s`. Antas `U > A > I ≥ L`.
- **Krav:**
  1. **Investors deltakelsesvilkår:** `p(U − (1+r)L) ≥ E` (risikabelt prosjekt).
  2. **Bankens deltakelsesvilkår:** `p(1+r)L ≥ L`.
  3. **Rente:** intervall mellom frikonkurranse (bank uten profitt: `1+r = 1/p`) og monopol (bank tar all profitt). Under asymmetrisk info: `1+r = 1/(s+(1−s)p)` ved frikonkurranse.
  4. **Komparativ statikk:** effekt på renten av økt `p`, `E` — avhenger av markedsform.
  5. **Effektivitet:** uheldig utvalg gjør at sikre prosjekter subsidierer risikable; marked kan bli ineffektivt (prosjekter med negativ NPV finansieres); effisient hvis `pU > E + L`.
  6. **Tallcase:** sett inn parameterverdier, regn NPV, forventet profitt for de to prosjekttypene og for banken, kommenter.
- **Omskrevet eksempel:** «Med `U=13, V=12, I=10, E=5, p=0,8, α=0,5`, finn NPV for de to prosjekttypene, forventet profitt for investorene og for banken, og kommenter resultatet.»

### H. Delegert overvåking (Diamond)
- **Krav:** Vis at duplisert overvåking (hver småsparer overvåker selv) er dyrt (`antall långivere × kostnad`). Straffekontrakt uten overvåking gir en `f` som må dekke krevd avkastning: `p·f = 1+krav → f`. **Bank som delegert overvåker** overvåker flere uavhengige lån; regn ut sannsynlighetsfordeling for bankens innbetalinger (0, 1 eller 2 mislighold: `p²`, `2p(1−p)`, `(1−p)²`), forventet innbetaling til innskytere, lovet innskuddsrente og nødvendig pålydende `F` per lån.
- **Omskrevet eksempel:** «En bank finansierer to uavhengige lån med samme risikoprofil via innskudd. Sett opp sannsynlighetene for null, ett og to mislighold, og finn den lovede innskuddsrenten.»

### I. Diamond–Dybvig / likviditetsforsikring
- **Krav:** Med nytte `u(c)=1−1/c`, sannsynlighet for tidlig uttak, og avkastning 1 (ett år) vs. 2 (to år): finn (1) forventet nytte uten bank; (2) beløpet banken må betale for å gjøre innskyterne like godt stilt; (3) bankens forventede profitt og maks andel tidlige uttak før insolvens; (4) effekten av økt konkurranse (høyere innskuddsbetaling); (5) drøft uavhengighetsantakelsen (run som selvoppfyllende når uttak korrelerer).
- **Omskrevet eksempel:** «Vis hvordan en bank som tilbyr lik utbetaling uansett uttakstidspunkt kan bedre risikodelingen, og finn den høyeste andelen tidlige uttak banken tåler uten å bli insolvent.»

### J. Intertemporalt valg / konsum og sparing over to perioder
- **Krav:** Nyttefunksjon over konsum `c₁, c₂` (f.eks. `log c₁ + 0,9 log c₂`), inntekt i hver periode, brutto rente `r`. Sett opp maksimeringsproblemet, løs optimal låne-/spareadferd og konsum. Vis at finansmarkedet gir høyere nytte enn autarki, og at transaksjonskostnader (låne­rente > sparerente) reduserer nytten.
- **Omskrevet eksempel:** «En aktør har `u = log c₁ + 0,9 log c₂`, inntekt 2 i periode 1 og 1 i periode 2, og brutto rente 1,25. Finn optimal sparing/låning og konsum i hver periode.»

### K. Overinvestering / risikoskifting (gjeldens virkning på låntakeratferd)
- **Krav:** Vis at et prosjekt med negativ NPV likevel gjennomføres når firmaet allerede har gjeld det ikke kan betjene fullt ut — fordi egenkapitaleierne har begrenset ansvar og «spiller med bankens penger» (risikoskifting/gambling for resurrection). Finn kritisk gjeldsnivå der overinvesteringsproblemet forsvinner.
- **Omskrevet eksempel:** «Et firma skylder banken 1020 ved tid 1, men eiendelene blir bare verdt 1000. Vis at eierne tjener på å ta et ulønnsomt prosjekt, og finn høyeste gjeldsnivå der problemet forsvinner.»

### L. Sentralbank og pengepolitikk
- **Krav:** Sentralbankens balanse (verdipapirer, valutareserver, utlån til banker, gull = eiendeler; sedler/reserver = gjeld). Hvordan sentralbanken styrer korte renter: **åpne markedsoperasjoner** (salg reduserer reserver → høyere rente), **reservekrav**, **styringsrente/utlånsrente** som gulv/tak for interbankrenten (NOWA). Sentralbankens uavhengighet, transparens, komitébeslutning; mål (lav/stabil inflasjon, høy sysselsetting, finansiell stabilitet).
- **Omskrevet eksempel:** «Forklar hvordan et åpent markedssalg av statsobligasjoner påvirker reservetilbudet og den korte renten. Illustrer med figur.»

### M. Regulering, bank run og sikkerhetsnett
- **Krav:** Definer bank run (mange innskytere vil ta ut samtidig; moderne: elektronisk flytting), insolvent vs. illikvid. Tiltak: innskuddsgaranti, likviditetskrav, kapitalkrav, lender of last resort, suspensjon av konvertibilitet, redningspakker. Koblingen sikkerhetsnett → regulering: garanti fjerner innskyternes overvåkingsinsentiv → moralsk hasard → staten må regulere risiko. Risikovekting (RWA), leverage ratio (uvektet), Basel III (kapital + likviditet + buffere).
- **Omskrevet eksempel:** «Hvorfor skaper en statlig innskuddsgaranti behov for offentlig regulering av bankenes risikotaking?»

### N. Essay (Mork-malen, 50 %)
- **Krav:** Sammenhengende, konsist essay om et bredt tema. Faste tema: (a) finanskrisen 2007–09 — årsaker (deregulering, finansiell innovasjon, securitisering, OTC-derivater, asymmetrisk info), forløp (frosne markeder, resesjon), håndtering (rentekutt, kvantitative lettelser, finanspolitikk), ny regulering (Dodd-Frank, Basel III) og egen vurdering; (b) det moderne finanssystemet vs. tradisjonell bank; (c) aksjer/obligasjoner/banklån som finansieringsformer.
- **Omskrevet eksempel:** «Skriv et kort essay om finanskrisen 2007–09: årsaker, økonomiske og finansielle virkninger, hvordan den ble håndtert, og de nye reguleringstiltakene i etterkant — med din egen vurdering av styrker og svakheter.»

### O. Flervalg om pensumartikler (Wang-malen, V2024)
- **Krav:** Ett riktig svar per spørsmål (feil eller flere valg = 0). Bygger på **konkrete artikler lest i kurset**: Diamond–Dybvig (1983), Stiglitz–Weiss (1981), «Wholesale Funding Dry-Ups», Lehmans «Repo 105», norske OMF/covered bonds, Basel III. Krever detaljkunnskap om artiklenes funn.
- **Omskrevet eksempel:** «Hvilket utsagn om Diamond–Dybvig-modellen er *ikke* riktig?» (fasit: at et run ikke oppstår i en solvent bank ved flokkadferd — modellen viser nettopp at forventninger kan gi selvoppfyllende run).

---

## 4. Sensorens krav

### Faste metaregler (gjentas på tvers av veiledningene)
1. **Konsise, poengterte svar belønnes eksplisitt** — særlig på essay og kortsvar. Utenomsnakk gir ikke uttelling.
2. **Vis fremgangsmåten.** «Endelige svar uten drøfting/utregning gir ikke poeng» (H2023). Delvis uttelling gis for riktig oppsett selv ved regnefeil (V2024, «Solution and grading guidelines»).
3. **Definer, ikke forutsett.** Begreper (moralsk hasard, uheldig utvalg, insolvent/illikvid, RWA, leverage ratio, maturity conversion) skal defineres presist.
4. **Klassifiser riktig og begrunn.** Ved agentproblem-oppgaver må studenten både klassifisere (uheldig utvalg vs. moralsk hasard) *og* forklare hvorfor, og foreslå riktig mottiltak.
5. **Tolk tallene økonomisk.** Fortegn på deriverte (`∂r/∂p`, `∂R/∂D`), NPV, profitt-intervaller og elastisiteter skal oversettes til økonomisk innhold, ikke bare regnes.
6. **Figur der relevant.** Tilbud/etterspørsel i obligasjonsmarkedet, sentralbankens reservemarked, bankbalansen — skal illustreres og forklares.
7. **Fullstendig virkemiddel-liste.** Ved «hva kan banken gjøre?» krever fasiten at *hvert* virkemiddel (overvåking, pant, screening, signalisering) forklares kort — ikke bare listes.
8. **Artikkelforankring (Wang-epoken).** Flervalg og enkelte drøftinger forutsetter at studenten har lest de oppgitte artiklene (Brunnermeier 2008, Diamond–Dybvig, Stiglitz–Weiss, «Wholesale Funding Dry-Ups», «Repo 105», norske OMF).

### Hva som skiller karakternivåene
- **Bunn (E–D):** riktige definisjoner, riktig klassifisering av agentproblem, korrekt oppsett av obligasjonsprising/deltakelsesvilkår, hovedkonklusjonen (pris, rente, klassifisering, tiltak).
- **Midt (C):** komplett utregning (yield, forward-renter, rente-intervall under frikonkurranse/monopol, sannsynlighetsfordeling i delegert overvåking), korrekt figur med skift, korrekt komparativ statikk med fortegn.
- **Topp (A/B):** behersker **effektivitetsdrøftingen** (når subsidierer sikre prosjekter risikable; når er markedet effektivt tross asymmetrisk info); ser **selvoppfyllende run** og uavhengighetsantakelsens rolle (Diamond–Dybvig); skiller **risikovekting fra leverage ratio** med fordeler/ulemper; kobler securitisering/repo til krisen; og skriver et **stramt, strukturert essay** med egen vurdering.

---

## 5. Typiske feil

Utledet av det veiledningene advarer mot og det oppgavene er bygget for å avsløre:

1. **Bytte om uheldig utvalg og moralsk hasard** — huskeregelen er *tidspunkt*: uheldig utvalg er *før* kontrakt (skjult type), moralsk hasard er *etter* (skjult handling).
2. **Bare liste virkemidler** uten å forklare hvordan hvert virker (overvåking, pant, screening, signalisering) — gir ikke full uttelling.
3. **Glemme pris–rente-inversen** eller behandle obligasjoner som «bare nedsiderisiko» — de kan stige i verdi før forfall når renten faller (V2019, V2022 d).
4. **Ikke tolke fortegn på deriverte** i to-typemodellen: effekten av økt `p` på renten avhenger av markedsform (faller under frikonkurranse, kan stige under monopol) — ren derivasjon uten tolkning er utilstrekkelig.
5. **Feil deltakelsesvilkår** i kredittmodellen — blande investors vilkår (`p(U−(1+r)L) ≥ E`) med bankens (`p(1+r)L ≥ L`), eller glemme monopol/frikonkurranse-skillet.
6. **Behandle bank run som irrasjonelt** — i Diamond–Dybvig kan et run være selvoppfyllende og ramme en fundamentalt solvent bank (V2024-flervalg fanger dette).
7. **Sette egenkapital på feil side** av balansen, eller ikke forstå at innskudd er gjeld og lån er eiendeler.
8. **Overse risikoskifting/overinvestering:** ikke se at gjeld med begrenset ansvar vrir låntakeratferd mot risikable, ulønnsomme prosjekter (V2020).
9. **Blande risikovektet kapitaldekning og leverage ratio** — teller/nevner: kapital delt på RWA vs. kapital delt på uvektede eiendeler.
10. **Skrive langt og ufokusert essay** — konsisitet belønnes uttrykkelig; struktur (årsak/virkning/håndtering/regulering) mangler.
11. **Svare på flervalg uten artikkelkunnskap** — gjetting straffes (feil eller flere valg = 0 poeng).
12. **Regnefeil i rentesregning** — blande enkel og sammensatt rente, årlig vs. månedlig rente, eller feil i Rule of 72 (doblingstid ≈ 72/rente).

---

## 6. Modell- og notasjonsapparat

Notasjonen er stabil, men **engelskspråklig** i de fleste settene. Boka bør konsekvent oppgi engelsk fagterm i parentes.

### Notasjonskonvensjoner
- **Renter/obligasjon:** rente `i`/`r`, yield `y`, pålydende/face value `FV`/`F`, pris `P`, løpetid `n`/`T`, kredittspread. Nullkupong: `P = FV/(1+i)ⁿ`. Forward: `(1+yₙ)ⁿ = ∏(1+r)`.
- **Kredittmodell:** investering `I`, egenkapital `E`, lån `L = I − E`, rente `r`, utbetaling `U` (risikabelt), `A`/`V` (sikkert), suksess-sannsynlighet `p`, andel sikre `s`/`α`, pant/collateral `C`, mislighold-verdi `D`.
- **Delegert overvåking:** overvåkingskostnad `c`, straffeterskel `f`, pålydende lån `F`, antall långivere, mislighold-sannsynligheter `p²`, `2p(1−p)`, `(1−p)²`.
- **Bank/regulering:** risikovektede eiendeler `RWA`, kapitaldekning `= kapital/RWA`, leverage ratio `= kapital/(uvektede eiendeler)`, ROE, Tier 1.
- **Intertemporalt:** konsum `c₁, c₂`, inntekt `y₁, y₂`, brutto rente `r`, nyttefunksjon (log eller CRRA).

### Må beherskes aktivt (regnes, tegnes, forklares)
1. **Neddiskontering og obligasjonsprising:** nullkupong og kupong; yield to maturity; forward-renter; pris–rente-inversen; kredittspread.
2. **Bankens balanse:** riktig plassering, hvorfor innskudd=gjeld/lån=eiendel/EK=passiva; risiko på hver side.
3. **Asymmetrisk informasjon:** skille + klassifisere + tiltak; to-typemodell (deltakelsesvilkår, rente-intervall, komparativ statikk, NPV/profitt, effektivitet).
4. **Delegert overvåking:** duplisert vs. delegert overvåkingskostnad; sannsynlighetsfordeling; innskuddsrente.
5. **Diamond–Dybvig:** forventet nytte med/uten bank; insolvensterskel; selvoppfyllende run.
6. **Intertemporalt valg:** optimal sparing/låning; finansmarkedets velferdsgevinst; transaksjonskostnader.
7. **Sentralbank:** balanse; åpne markedsoperasjoner; styringsrente/NOWA; reservemarkedet i figur.
8. **Regulering:** bank run + tiltak; innskuddsgaranti→regulering; RWA vs. leverage ratio; Basel III.

### Matematisk verktøykasse (forutsettes — formelsamling tillatt)
Neddiskontering/nåverdi, geometriske rekker (kupongobligasjon), potens- og logaritmeregning (yield, Rule of 72), forventningsverdi og enkel sannsynlighet (mislighold-scenarier), derivasjon for komparativ statikk (`∂r/∂p` osv.), enkel optimering av intertemporal nytte, tilbud/etterspørsel-figurer.

### Skal IKKE tynge boka
- Ren aktiv-mikroteori (nyttemaks/produsentteori à la SOK1002) er ikke relevant utover det intertemporale valget.
- Detaljert porteføljeteori/CAPM/derivatprising hører til SØK2005 (Finansmarkeder) — nevnes kort som avgrensning, men bygges ikke ut.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (avgjør karakteren)
1. **Asymmetrisk informasjon** — uheldig utvalg vs. moralsk hasard (skille, klassifisere, tiltak). ~90 % frekvens, går igjen i alle epoker.
2. **Obligasjonsprising og neddiskontering** — nullkupong/kupong, yield, pris–rente-inversen. ~80 %.
3. **Bankens balanse og risiko** — plassering, hvorfor, risiko på hver side, insolvent vs. illikvid. ~70 %.
4. **To-typemodell for kredittmarkedet** — deltakelsesvilkår, rente under frikonkurranse/monopol, komparativ statikk, effektivitet. Ofte 40 % av settet i Wang-epoken.
5. **Bank run, innskuddsgaranti og regulering** — koblingen sikkerhetsnett → regulering, kapital-/likviditetskrav. ~70 %.

### Nivå 2 — må kunne (gir 20–40 % når de kommer)
6. **Sentralbank og pengepolitikk** — balanse, åpne markedsoperasjoner, styringsrente/NOWA, uavhengighet.
7. **Begrepsrepertoaret** (~20–25 gjengangere) — presise, konsise definisjoner; sikrer poeng i kortsvarsblokken.
8. **Delegert overvåking** (Diamond) og **Diamond–Dybvig** — modell + intuisjon; sentralt i nyere sett.
9. **Forward-renter og terminstruktur** — beregning + forventningshypotesen.
10. **Finanskrisen 2007–09** — årsaker/forløp/håndtering/regulering; essay eller flervalg.

### Nivå 3 — bør kjenne godt (roterer inn)
11. **Intertemporalt valg / sparing** — to-periodemodell, transaksjonskostnader.
12. **Overinvestering/risikoskifting** — gjeldens virkning på låntakeratferd.
13. **Markedseffisiens** — «kjøp aksjen analytikeren anbefaler?», «buy on dips».
14. **Leverage/gearing, risikovekting vs. leverage ratio, Basel III-detaljer.**
15. **Forsikring** (livs-/skade-/pensjon, rettferdig premie), **valuta/loven om én pris**, **securitisering/MBS/repo**, **kryptovaluta/kontantløst samfunn** — anvendelser og temaartikler.

### Prognose for neste eksamen
Sannsynlig oppbygging (Wang-epoken, mest relevant fremover):
- **Kortsvars-/begrepsblokk (20–30 %):** 6–11 begreper fra fast liste (penger, collateral, likviditet, kredittvurdering, styringsrente, moralsk hasard/uheldig utvalg, insolvent vs. illikvid, MBS, securitisert bank).
- **Modelloppgave 1 (25–40 %):** kredittmarked med asymmetrisk informasjon (to-typemodell) *eller* delegert overvåking — deltakelsesvilkår, rente, komparativ statikk, tallcase.
- **Modelloppgave 2 (25–30 %):** Diamond–Dybvig likviditetsforsikring, intertemporalt valg, *eller* bankbalanse-analyse.
- **Evt. flervalg (opptil 40 %):** om pensumartikler (Diamond–Dybvig, Stiglitz–Weiss, «Wholesale Funding Dry-Ups», Repo 105, OMF, Basel III).

Skulle Mork-malen brukes igjen: 5–6 korte oppgaver (obligasjon/rente, bankbalanse, sentralbank, markedseffisiens, begreper) **pluss et stort essay (50 %)** om finanskrisen eller det moderne finanssystemet.

**Bokdesign:** bygg fire søyler — (1) **renter og obligasjoner** (regnekjernen, delt med SØK2005), (2) **bank som institusjon** (balanse, funksjoner, risiko, asymmetrisk informasjon med formelle modeller), (3) **regulering og sentralbank** (sikkerhetsnett, Basel III, pengepolitikk), (4) **finansiell stabilitet, kriser og teknologi** (2007–09, securitisering, krypto). Legg konsekvent engelsk fagterm i parentes, tren både konsist essay og flervalg om konkrete artikler, og gi rikelig med modelleksempler med tallcase (to-typemodell, delegert overvåking, Diamond–Dybvig).

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/SOK2010/`.

**Sensorveiledninger/løsningsforslag lest grundig (8):**
- `sensorveiledning SØK2010.pdf` — V2022, engelsk, komplett fasit (begreper, obligasjonsmarked, relasjonsbank, bank run, to-typemodell med tallcase).
- `Sensurveiledning SØK2010 V21 Exam Solution.pdf` — V2021, engelsk (sentralbankbalanse, innskuddsgaranti, agentproblem, sentralbankstyring av rente, kredittmodell med pant/collateral).
- `Final SOK2010_solution.pdf` — V2024, engelsk (asymmetrisk info/MBS/securitisert bank, delegert overvåking med sannsynlighetstabell, flervalgsdel om pensumartikler).
- `Solution and grading guidelines to Final SØK2010 Banking.pdf` — bildebasert fasit som refererer problemsettene PS2–PS5 (asymmetrisk info, insolvent/illikvid, sikkerhetsnett↔regulering).
- `SØK 2010 Sensorveiledning (1).pdf` — H2016/juni 2016, engelsk (bank run, yield to maturity, markedseffisiens, leverage, tap på utlån, finanskrise-essay basert på Brunnermeier 2008).
- `SØK2010 Sensorveiledning fall 2019.pdf` — H2019, engelsk (begreper: pooling/maturity conversion/likviditet/kapital-/likviditetskrav; innskuddsgaranti→regulering; brannsalg/smitte; markedseffisiens; boliglånsregulering; «er finans bra?»/Zingales).
- `SØK2010 Sensorveiledning spring 2019.pdf` — V2019, engelsk (moderne bank; bankbalanse; forward-renter; aksje vs. obligasjon; risikovekting/leverage ratio; sentralbank).
- `SØK2010v18_sensorveiledning.pdf` — V2018, bokmål (Rule of 72; obligasjon med mislighold/risikoaversjon; forventningshypotesen; finansiell tjenesteyting; sentralbankens uavhengighet og mål).

**Oppgavesett lest grundig (siste ~8 år):** `SØK2010V-19` (som er 2017-settet i filnavnet, men gjengir V2019-teksten), `SØK2010V-17`, `SØK2010H-17`, `SØK2010V-18`, `SØK2010h18`, `SØK2010_V20`, `SOK2010_70055718_…` (V2020-variant), `SØK2010_V22_bm`, `SØK2010 H22`, `SØK2010 H23`, `SØK2010 V24`, `2010.pdf` (nyere Inspera-sett).

**Oppgavesett skummet (eldre/bildebaserte, for strukturbekreftelse):** `SØK2010-V-14`, `SØK2010H-14`, `SØK2010V-15`, `SØK2010V-16`, `SØK2010H-16-Ny`, `SØK2010H-17`.

**Merknader om kildene:**
- Flere eldre filer (V2014, H2014, V2015 og enkelte skanninger) er bildebaserte og ga lite/ingen tekst med `pdftotext`; de er kun brukt til å bekrefte Mork-malens struktur (5–6 korte + essay 50 %).
- Filnavn og år stemmer ikke alltid overens (f.eks. `SØK2010V-19.pdf` har «Examination date: 27.05.2017» på forsiden men gjengir V2019-oppgavene); dateringen i analysen bygger på oppgaveinnholdet, ikke filnavnet.
- Emnet har **ingen entydig pensumbok** i arkivet — kildene henviser til lærebokstoff (bl.a. Mishkin-lignende bankstoff), forelesningsnotater, problemsett (PS2–PS5) og navngitte artikler: Brunnermeier (2008, JEP), Diamond & Dybvig (1983, JPE), Stiglitz & Weiss (1981), Zingales (presidenttale), «Wholesale Funding Dry-Ups», Lehmans «Repo 105», Norges Banks Financial Stability Report og «Norwegian covered bonds» (OMF). Wang-epokens flervalg forutsetter disse artiklene.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller sensorformuleringer er gjengitt ordrett. Modellsammenhengene og tallsvarene er faglige fakta uten verkshøyde.
