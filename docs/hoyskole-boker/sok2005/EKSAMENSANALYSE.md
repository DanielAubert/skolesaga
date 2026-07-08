# Eksamensanalyse: SØK2005 / SOK2005 Finansmarkeder (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på eksamensarkivet i `~/Desktop/Eksamner/NTNU/SOK2005/`: rundt 30 oppgavesett fra H2010 til H2025 samt seks sensorveiledninger og fem fullstendige løsningsforslag (V2017, V2015, V2020, V2021, V2022, V2018, H18, H23-konte). Sensorveiledningene og løsningsforslagene er alle bildebaserte skanninger (håndskrevne fasiter); tekstinnholdet er hentet ut med OCR og manuell lesning der det var mulig, og bekrefter oppgavesettenes profil. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller sensorformuleringer. Modellsammenhenger, tallsvar og faglige fakta er gjengitt fritt (uten verkshøyde). Analysen er kvantitativ der kildene tillater det.
>
> **Emnekode-merknad:** Emnet skrives både «SØK2005» og «SOK2005» i arkivet (samme emne). Fullt navn: *Finansmarkeder* (engelsk tittel *Financial Markets*), 7,5 studiepoeng, Institutt for samfunnsøkonomi, NTNU. **Status: aktivt** — eksamensarkivet går fram til og med høsten 2025 (H25), og faglig kontakt er i dag Snorre Lindset. Emnet gir en videregående mikroøkonomisk behandling av finansielle problemstillinger: sparing/lån over tid, valg under usikkerhet, porteføljevalg, verdsetting av aksjer, obligasjoner og derivater, rentens terminstruktur og risikoteori (systematisk vs. usystematisk risiko).

---

## 0. Kort om emnet og forholdet til beslektede fag (les dette først)

SØK2005 er NTNUs anvendte finansemne på bachelornivå. Det tar mikroøkonomiens beslutningsapparat — nyttemaksimering, valg over tid, valg under usikkerhet — og retter det inn mot finansmarkedene. Faget er **tydelig kvantitativt**: nesten hver deloppgave krever en utregning (obligasjonspris, durasjon, opsjonsverdi, forventet avkastning, beta, PVGO), gjerne kombinert med en kort verbal tolkning. Det er ikke et institusjonelt/beskrivende finansfag, men et regnefag bygget på et lite antall bærende modeller.

Faget står i et klart nettverk av beslektede NTNU-emner, og skillelinjene er viktige for bokdesignet:

| Emne | Forhold til SØK2005 |
|---|---|
| **SOK1002 Mikroøkonomisk analyse** | Leverer *fundamentet*: nyttemaksimering, valg under usikkerhet (forventet nytte), intertemporalt valg (sparing/lån, nåverdi, rente). SØK2005 forutsetter dette apparatet og anvender det på finansaktiva. |
| **SOK1004 Statistikk for økonomer** | Leverer *sannsynlighetsverktøyet*: forventning, varians, standardavvik, kovarians/korrelasjon, regneregler for lineærkombinasjoner. Porteføljevariansen i SØK2005 er en direkte anvendelse av `Var(aX+(1−a)Y)`. |
| **SØK2010 Banking** | Deler den kvantitative renteregnings- og obligasjonssøylen (neddiskontering, yield to maturity, forward-renter, pris–rente-sammenheng). SØK2010 dreier mot bank, regulering og stabilitet; SØK2005 dreier mot verdsetting og derivater. Se del 7. |
| **SOK2012 Atferdsøkonomi** | Deler temaet *beslutning under risiko* (forventet nytte, risikoaversjon fra konkav nytte, sikkerhetsekvivalent), men SØK2005 bruker det i porteføljesammenheng, mens SOK2012 problematiserer det (prospektteori). |

**Kort sagt:** SØK2005 = SOK1002s beslutningsteori + SOK1004s sannsynlighetsregning, anvendt på fire aktivaklasser (risikofritt aktivum, aksjer, obligasjoner, opsjoner/forwards).

---

## 1. Eksamensform og utvikling

### Form
- **Skriftlig skoleeksamen, 4 timer, karakter A–F, 7,5 studiepoeng.** Digital via Inspera Assessment. Besvarelsen føres i stor grad på håndtegnede ark (utregninger og figurer) med sjukisifret kodeidentifikasjon, eventuelt supplert med Inspera-tekst eller nettbrett-opplasting. Ekstra tid (15–30 min) legges til for digitalisering/opplasting av håndskrevne ark.
- **Hjelpemidler:** Varierer med årstall og periode:
  - **Kode C** (normalen): godkjent kalkulator + matematisk formelsamling (Sydsæter, Strøm & Berck, *Matematisk formelsamling for økonomer*). Dette gjelder de eldre settene (2010–2017) og igjen fra V2025.
  - **Kode A / alle hjelpemidler** under korona-perioden (bl.a. V2020, V2021, V2018-varianter og enkelte hjemmeeksamener).
  - **Kode H** (kun kalkulator, alle typer) på nyere sett (H2025).
- Ved opsjonsoppgaver med kontinuerlig tid (Black–Scholes) oppgis en **normalfordelingstabell** som vedlegg (H2016).
- **Målform:** Her skiller SØK2005 seg klart fra de fleste NTNU-økonomiemnene: **de nyere settene (V2024, H2024, V2025, H2025, H2023) er kun på engelsk**, og har vært det gjennom hele Lindset-perioden. Eldre sett (2010–2020) er på **bokmål og nynorsk** (og hadde ofte i tillegg en engelsk versjon vedlagt for internasjonale studenter). Faget kan altså både undervises og eksamineres på engelsk, og en eksamensrettet bok bør trene begge terminologiene (norsk *avkastning/forventet avkastning/salgsopsjon* ↔ engelsk *return/expected return/put*).
- **Oppgavestillere (roterer, forklarer stilvariasjoner):** Snorre Lindset (dominerende de siste ~10 år, signaturprofilen med obligasjon + binomisk opsjon + CAPM/aksjeverdi), tidligere Egil Matsen, Ragnar Torvik, Hans Jørgen Tranvåg, Hans Jørgen/Knut Anton Mork-miljøet. Matsen/Torvik-settene (2010–2012) er noe mer verbale/teoritunge (rentekurve-hypoteser, risikopremie-drøfting, dividendediskonteringsmodell utledet fra grunnprinsipper), mens Lindset-settene er strammere regnesett.

### Struktur — svært stabil under Lindset
Grunnmalen fra ca. 2015 og framover er **fire oppgaver som teller likt (25 % hver)**, én per hovedtema:

- **Oppgave 1 = porteføljeteori / CAPM / risiko** (forventet avkastning, varians, minimum-varians-andel, Sharpe, beta, SML/CML, optimal andel gitt kvadratisk nytte)
- **Oppgave 2 = obligasjoner og renter** (prising, yield to maturity, durasjon/modifisert durasjon, current yield vs. yield, HPR, rentekurve/forward-renter)
- **Oppgave 3 = derivater** (binomisk opsjonsprising, put-call-paritet, forward/arbitrasje, opsjonsstrategier/payoff-diagrammer, strukturerte produkter)
- **Oppgave 4 = aksjeverdsetting / CAPM-anvendelse** (dividendediskontering, Gordons vekstmodell, PVGO, ROE/plowback, alfa)

Avvik fra 25/25/25/25-malen:
- **Tre-oppgavevarianter** med 30/30/40 eller 33⅓/33⅓/33⅓ (H2025, V2020, H2018) der ett tema slås sammen eller sløyfes.
- **To-oppgave-varianter** i de eldste settene (V2012, H2012: to likeveide oppgaver), typisk «risiko/CAPM» + «renter/opsjoner».
- **50/30/20-vekting** (V2010, H2010) med porteføljeteori som tung hovedoppgave (50 %).
- Vektingen er nesten alltid merket som **veiledende** («only indicative»), og studenten oppfordres til å gjøre egne forutsetninger.

### Vektings-/strukturhistorikk (utvalg)

| Sett | Målform | Struktur / hovedtemaer |
|---|---|---|
| V2010 | nb/nn/en | 3 oppg. 50/30/20 (portefølje / valuta-forward / …) |
| H2010 | nb | 3 oppg. 50/25/25 (CAPM+CML/SML / valuta-forward / …) |
| H2011 | nb | 3 oppg. 40/20/… (CAPM+CML / dividendemodell / …) |
| V2012 | nb/en | 2 oppg. likt (CAPM+SML / opsjoner+put-call) |
| H2012 | nb | 2 oppg. likt (rentekurve/forventningshypotese / risikopremie+CAPM) |
| V2013 | nb | 3 oppg. (portefølje+kvadratisk nytte / obligasjon+durasjon / binomisk opsjon) |
| V2014 | nb | 3 oppg. 25/25/25 (CAPM+Sharpe / evigvarende obl.+durasjon / opsjonsstrategier) |
| V2016 | nb | obligasjon+HPR / binomisk+eksotiske opsjoner / aksjeverdi+PVGO |
| H2016 | nb | 4 oppg. 25 % (CAPM/SML / obligasjon+durasjon / Black–Scholes+put-call / aksjeverdi+PVGO) |
| V2017 | nb/nn | portefølje/CAPM-blokk (nyttefunksjon, betapris, aksjeplukker, risikonøytral opsjon) |
| H2017 | nb | 4 oppg. 10/35/35/20 (portefølje / to-aktiva-optimering / obligasjon+durasjon / binomisk+put-call) |
| V2018 | nb | 4 oppg. 25 % (CAPM+beta+ρ / obligasjon+kredittrisiko / opsjonskonstruksjon / aksje) |
| H2018 | nb | 4 oppg. 30/30/20/20 (3-aktiva-portefølje / obligasjon+kredittrisiko+CDS / opsjonsspekulasjon / aksje) |
| V2019 | nb/nn | obligasjon+HPR+forward-rente / binomisk opsjon / aksje+PVGO |
| V2020 | nb/nn | 3 oppg. 33⅓ (portefølje+arbitrasje / obligasjon+durasjon / strukturert produkt) |
| V2021 | nb (alle hjelpem.) | fil-opplasting; portefølje/obligasjon/opsjon/aksje |
| V2022 | en | 4 oppg. (portefølje / rente / opsjon / aksje) |
| H2023 | en | 4 oppg. 25 % (forventet nytte / obligasjon+kredittrisiko / opsjonsstrategier / CAPM+aksjeverdi) |
| V2024 | en | 4 oppg. 25 % (portefølje+kvadratisk nytte / forward-renter+syntetisk obl. / binomisk opsjon / PVGO) |
| H2024 | en | 4 oppg. 25 % (varians-kovarians-matrise / obligasjon+durasjon / forward-arbitrasje / de fire grunnene til finansmarkeder) |
| V2025 | en | 4 oppg. 25 % (CAPM-mulighetstest / obligasjon+durasjon+HPR / binomisk+eksotisk opsjon / …) |
| H2025 | en | 3 oppg. 30/30/40 (CAPM+SML+prosjekt / obligasjon+durasjon / to-periode-binomisk+state prices) |

**Konstanter på tvers av settene:**
1. Hvert sett prøver **tre til fire av de fire aktivaklassene**: risikofri+risikabel portefølje (CAPM/risiko), obligasjoner, derivater (opsjoner/forwards) og aksjer.
2. **Obligasjonsoppgaven og opsjonsoppgaven er nesten alltid til stede** — de er de mest stabile enkeltblokkene.
3. Oppgavene er **rene regneoppgaver med tallverdier**, ofte med et innebygd «vis at»-krav (vis at prisen er X, vis at yielden er Y%) som lar studenten verifisere at metoden er riktig.
4. Aktualitet brukes som innpakning (PGS-obligasjonen fra Finansavisen i H23, strukturert spareprodukt fra bank i V2020, «Gordon Growth» som fiktiv direktør i V2019), men modellen er alltid den samme.

---

## 2. Temafrekvens

Frekvensen er beregnet som andelen av de ~24 lesbare settene der temaet inngår som deloppgave eller mer. Fordi hvert sett spenner over flere aktivaklasser, summerer ikke prosentene til 100.

### 2A. Hovedtemaer (aktivaklasse-blokker)

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **Obligasjonsprising, yield, durasjon** | **~90 %** | Nesten alltid egen oppgave; pris = neddiskontert kupong+hovedstol, yield to maturity, durasjon D og modifisert durasjon D* |
| **Derivater: binomisk opsjonsprising / put-call / payoff** | **~85 %** | Nesten alltid egen oppgave; binomisk tre + risikonøytrale sannsynligheter er signaturmetoden |
| **Porteføljeteori: forventet avkastning + varians + optimal andel** | **~80 %** | To-aktiva-varians, minimum-varians-andel a*, Sharpe-rate, effekten av korrelasjon |
| **CAPM / SML / beta / risikopremie** | **~75 %** | E[rᵢ]=rf+βᵢ(E[rM]−rf); beta fra kovarians; alfa; SML-figur; «godt kjøp?»-vurdering |
| **Aksjeverdsetting: dividendemodell, Gordon, PVGO** | **~65 %** | P = D/(k−g), g = b·ROE, verdien av vekstmuligheter (PVGO), ROE/plowback |
| **Rentekurve / terminstruktur / forward-renter** | **~40 %** | Forventningshypotesen, likviditetspreferanse, forward-rente fra yieldkurven, HPR-kobling |
| **Forward/futures og arbitrasje** | **~25 %** | Arbitrasjefri forwardpris F=S₀(1+rf), utnytte arbitrasje, valuta-forward (renteparitet) |
| **Valg under usikkerhet: kvadratisk nytte, risikoaversjon** | **~40 %** | U=E[r]−½Aσ²; optimal risikoandel; maksimal risikoaversjon; sikkerhetsekvivalent-tankegang |
| **Kredittrisiko / CDS** | **~15 %** | Obligasjon med misligholdssannsynlighet; forsikringspremie på CDS (H2018) |
| **Strukturerte produkter** | **~10 %** | Kapitalgarantert produkt = nullkupongobligasjon + kjøpsopsjon (V2020) |
| **De økonomiske grunnene til finansmarkeder (drøfting)** | **~10 %** | H2024 oppg. 4: fire kjernefunksjoner finansmarkedene fyller |

### 2B. Regne-/metodeelementer (bygger inn i flere blokker)

| Element | Gjenganger-score | Kommentar |
|---|---|---|
| Neddiskontering / nåverdi av kontantstrøm | ~95 % | Bunnplaten i både obligasjon, aksje og opsjon |
| Forventning, varians, standardavvik, kovarians (fra SOK1004) | ~85 % | Porteføljestatistikk; beta via kovarians |
| Risikonøytral sannsynlighet p* | ~80 % | Motoren i all binomisk opsjonsprising og state prices |
| Derivasjon/optimering (finn a*, w*, y*) | ~60 % | Førsteordensbetingelse for optimal porteføljeandel |
| Put-call-paritet | ~40 % | C₀ = S₀ − X/(1+rf) + P₀ (og kontinuerlig versjon) |
| Systematisk vs. usystematisk risiko (dekomponering) | ~40 % | Total risiko = systematisk (β·σM) + usystematisk (diversifiserbar) |

**Viktigste funn:**
1. **Emnet ER fire aktivaklasser prøvd med samme grunnverktøy (neddiskontering + sannsynlighetsregning).** En lærebok skal bygges som fire søyler: (i) risiko og porteføljevalg / CAPM, (ii) obligasjoner og renter, (iii) derivater, (iv) aksjeverdsetting — hvilende på et felles kapittel om nåverdi, forventning/varians og risikonøytral prising.
2. **Obligasjon + binomisk opsjon er de to mest stabile enkeltblokkene** — de forekommer i praktisk talt hvert Lindset-sett og bør beherskes perfekt.
3. **Den binomiske modellen med risikonøytrale sannsynligheter er signaturmetoden.** Den brukes til europeiske call/put, amerikanske put (tidlig utøvelse), eksotiske/lookback-opsjoner, og i sin reneste form til **state-contingent claims / state prices** (H2025). Studenten må kunne rekke fra ett-periode til to-periode-tre og forstå at prisingen er preferansefri.
4. **CAPM er den samlende teorien** som binder sammen risiko, forventet avkastning og aksjeverdsetting. Beta, SML/CML, alfa og «godt kjøp»-vurderingen går igjen, og CAPM leverer avkastningskravet k som mates inn i dividendemodellen og PVGO.
5. **Durasjon er kronspørsmålet i obligasjonsoppgaven** — både beregning (vektet gjennomsnittlig tid til kontantstrømmene) og bruk (modifisert durasjon til å anslå prisendring ved renteendring). Nesten alltid spurt.
6. **Systematisk vs. usystematisk risiko** er et fast begrepspar: total risiko dekomponeres, usystematisk risiko diversifiseres bort, kun systematisk risiko prises (beta).

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen, med typisk plassering og krav. Hvert omskrevet eksempel er formulert fritt for å unngå ordrett gjengivelse.

### A. Porteføljevarians og minimum-varians-andel
- **Krav:** Skriv opp porteføljevariansen for to aktiva, `σp² = a²σ₁² + (1−a)²σ₂² + 2a(1−a)σ₁,₂` (der `σ₁,₂ = ρσ₁σ₂`). Deriver med hensyn på a og sett lik null for å finne minimum-varians-andelen `a* = (σ₂² − σ₁,₂)/(σ₁² + σ₂² − 2σ₁,₂)`. Forklar hvordan korrelasjonen ρ påvirker diversifiseringsgevinsten (lav/negativ ρ gir størst risikoreduksjon).
- **Omskrevet eksempel:** «Gitt varians-kovarians-matrisen for to aktiva, finn andelen a i aktivum 1 som minimerer porteføljevariansen, og angi hvilken korrelasjon som gjør at investoren legger hele formuen i aktivum 1.»

### B. Kapitalallokering med kvadratisk (mean-variance) nytte
- **Krav:** Med nyttefunksjon `U = E[rp] − ½Aσp²` (A = risikoaversjon) og en kombinasjon av risikofritt aktivum og en risikabel portefølje: skriv `E[rp] = rf + w(µ − rf)` og `σp = wσ`, sett inn, deriver mhp. w og finn den optimale risikoandelen `w* = (µ − rf)/(Aσ²)`. Regn ut maksimal nytte og drøft hvordan A påvirker w*.
- **Variant:** finn den *maksimale* risikoaversjonen A som fortsatt gjør at investoren velger det risikable framfor det sikre (V2017).
- **Omskrevet eksempel:** «Med U = E[rp] − (5/4)σp² og markedsporteføljens Sharpe-rate 0,3, finn den optimale andelen a* investert i markedsporteføljen og vis at maksimal nytte blir 0,082.»

### C. CAPM, beta og SML
- **Krav:** Bruk `E[rᵢ] = rf + βᵢ(E[rM] − rf)`. Finn beta fra `βᵢ = σᵢ,M/σM² = ρᵢ,M·σᵢ/σM`. Tegn verdipapirmarkedslinjen (SML) og plott aktivaene; et aktivum over SML har positiv **alfa** (godt kjøp). Skill fra kapitalmarkedslinjen (CML), som gjelder effisiente porteføljer i (σ, E[r])-planet.
- **Omskrevet eksempel:** «Markedets forventede avkastning er 11 %, rf = 5 %. Aksje XYZ har E[r]=12 %, β=1; aksje ABC har E[r]=13 %, β=1,5. Finn alfaen til hver aksje ifølge CAPM, plott dem mot SML og avgjør hvilken som er det beste kjøpet.»

### D. «Aksjeplukker»-analyse (alfa vs. rå avkastning)
- **Krav:** Sammenlign to forvaltere med ulik gjennomsnittsavkastning og ulik beta. Poenget: rå avkastning sier ingenting uten justering for systematisk risiko — beregn alfa (`αᵢ = r̄ᵢ − [rf + βᵢ(r̄M − rf)]`) for begge, gitt rf og markedsavkastning, og se at rangeringen kan snu med ulike rf/rM-antakelser.
- **Omskrevet eksempel:** «Zolen hadde snittavkastning 15 % (β=1,6), Månen 20 % (β=1). Med rf=5 % og markedsavkastning 15 %, hvem var den beste aksjeplukkeren? Hva blir svaret om rf=2 % og markedsavkastning 10 %?»

### E. Obligasjonsprising, yield og current yield
- **Krav:** Pris = nåverdien av kupongstrømmen pluss neddiskontert hovedstol, `P₀ = Σ C/(1+r)ᵗ + F/(1+r)ᵀ`. Ved flat rente kan annuitetsformelen brukes; ved en full yieldkurve diskonteres hver kontantstrøm med sin egen spotrente. **Yield to maturity** er den ene renten som gir observert pris (løses/verifiseres). **Current yield** = årlig kupong / pris; forklar hvorfor current yield ligger mellom kupongrate og yield når obligasjonen handles til over-/underkurs, og hvorfor P₀ > F ved premie.
- **Omskrevet eksempel:** «En femårig obligasjon betaler årlig kupong 40 og har pålydende 1000. Gitt zero-kupong-yieldkurven, finn prisen, avgjør om den handles til over- eller underkurs, og kontroller at yield to maturity er 3,782 %.»

### F. Durasjon og modifisert durasjon
- **Krav:** Durasjon `D = Σ [t·NV(kontantstrøm_t)] / P` (vektet gjennomsnittlig løpetid). Modifisert durasjon `D* = D/(1+y)`. Bruk `ΔP ≈ −D*·P·Δy` til å anslå priseffekten av en renteendring. Forklar hvorfor lengre løpetid / lavere kupong gir høyere durasjon (mer vekt lengre ut i tid).
- **Omskrevet eksempel:** «Beregn durasjonen til obligasjonen og anslå prisendringen (i kroner) dersom yielden øker med 0,2 prosentpoeng.»

### G. Rentekurve, forventningshypotese og forward-renter
- **Krav:** Forklar yieldkurven og forventningshypotesen (lange renter = geometrisk snitt av forventede korte renter). Utled forward-renten `(1+r₀,₂)² = (1+r₀,₁)(1+f₁,₂)`. Bruk forward-rentene til å bygge yieldkurven eller til å avtale en framtidig låne-/plasseringsrente i dag. Nevn likviditetspremie-korreksjonen.
- **Omskrevet eksempel:** «Gitt forward-rentene f₀,₁, f₁,₂, f₂,₃, f₃,₄, vis at yieldkurven blir r₀,₁=5 %, r₀,₂=5,5 %, r₀,₃=6 %, r₀,₄=6,5 %, og konstruer en fireårig obligasjon syntetisk av nullkupongobligasjoner.»

### H. Binomisk opsjonsprising (kjernesjangeren i derivatoppgaven)
- **Krav (fast oppbygging):**
  1. Tegn det binomiske treet for aksjeprisen (opp-faktor u, ned-faktor d) over én eller to perioder.
  2. Beregn den **risikonøytrale sannsynligheten** `p* = ((1+rf) − d)/(u − d)`.
  3. Verdsett opsjonen som neddiskontert forventet payoff under p*: `C₀ = [p*·Cᵤ + (1−p*)·C_d]/(1+rf)`, iterert bakover gjennom treet.
  4. For **amerikansk put**: sjekk i hver node om umiddelbar utøvelse (X − S) er bedre enn å holde; forklar at forskjellen mot europeisk skyldes verdien av tidlig utøvelse.
  5. For **eksotiske/lookback**-opsjoner: sporer maks/min-pris langs stien og verdsetter på tilsvarende måte.
- **Omskrevet eksempel:** «S₀=100, u=1,2, d=0,9, rf=2 % per periode, to perioder. Finn verdien av en europeisk call og put med X=100, av den amerikanske put-en, og av en lookback-call der utøvelseskursen er periodens laveste aksjekurs.»

### I. Put-call-paritet
- **Krav:** Vis/bruk `C₀ + X/(1+rf)ᵀ = P₀ + S₀`. Kontroller at beregnede call- og put-priser er konsistente; bruk pariteten til å prise den ene fra den andre. Kontinuerlig versjon `C₀ = S₀ − Xe^{−rfT} + P₀` (H2016). Kobles ofte til at en portefølje av aksje + put replikerer call + risikofri plassering (protective put / beskyttet posisjon).
- **Omskrevet eksempel:** «Vis hvordan en aksje pluss en salgsopsjon kan gjenskapes med en kjøpsopsjon og en risikofri plassering, og hvilken prissammenheng dette gir mellom kjøps- og salgsopsjonen.»

### J. Opsjonsstrategier og payoff-diagrammer
- **Krav:** Tegn kontantstrøm/payoff ved forfall for sammensatte posisjoner (protective put, covered call / dekket kjøpsopsjon, straddle, bull spread, collar, short-aksje + calls). Angi for hvilke sluttpriser strategien gir positiv payoff, og bestem startverdien via ingen-arbitrasje. Forklar spekulantens motiv (tro på oppgang/nedgang/økt volatilitet).
- **Omskrevet eksempel:** «Illustrer forfall-payoff for (a) én aksje + én lang put med innløsning X, (b) protective put der man i tillegg skriver en call, (c) short aksje + to lange calls. For hvilke sluttpriser gir (c) positiv payoff?»

### K. Forward/futures og arbitrasje
- **Krav:** Arbitrasjefri forwardpris `F = S₀(1+rf)ᵀ`. Hvis markedsprisen avviker: beskriv arbitrasjen (kjøp/short spot, motsatt forward, lån/plasser risikofritt) og hvor mange kontrakter som kreves for gitt risikofri gevinst. **Valuta-forward** via dekket renteparitet: `F = S₀(1+r_hjemme)/(1+r_ute)`.
- **Omskrevet eksempel:** «S₀=100, rf=5 %, markedets ettårs-forwardpris er 104. Finn den arbitrasjefrie forwardprisen, vis hvordan arbitrasjen utnyttes, og hvor mange kontrakter som trengs for en risikofri gevinst i dag.»

### L. Aksjeverdsetting: dividendemodell, Gordon, PVGO
- **Krav:** Fundamentalverdi = neddiskontert dividendestrøm. Gordons vekstmodell `P = D₁/(k − g)` med vekstrate `g = b·ROE` (b = tilbakeholdt andel/plowback). **PVGO** = P − E₁/k: verdien av vekstmuligheter er totalverdien minus verdien av selskapet uten reinvestering. Avkastningskravet k hentes fra CAPM.
- **Omskrevet eksempel:** «Selskapet forventer fortjeneste 100 neste år, holder tilbake 25 % og har ROE 20 %. Med markedsavkastning 9 %, rf 5 %, β beregnet fra σ og ρ, finn verdien av selskapets vekstmuligheter (PVGO).»

### M. Valg under usikkerhet / kredittrisiko / de fire grunnene (mindre faste, men gjentakende)
- **Krav:** Forventet-nytte-oppgaver (`U = E[r] − ½Aσ²`, sikkerhetsekvivalent). Obligasjon med misligholdssannsynlighet: prising ved forventet kontantstrøm; verdsett en CDS som utligner kredittrisikoen. Verbal drøfting: de fire økonomiske grunnene til at finansmarkeder finnes (kanalisere sparing til investering, risikodeling/-spredning, likviditet, informasjon/prising).
- **Omskrevet eksempel:** «En obligasjon har 50 % sannsynlighet for å betale hele hovedstolen og 50 % for kun å betale 600. Finn prisen når kredittrisikoen prises inn, og beregn den årlige premien på en CDS som gjør obligasjonen risikofri.»

---

## 4. Sensorens krav

Sensorveiledningene og løsningsforslagene er håndskrevne fasiter (skanninger); det følgende er utledet av dem og av oppgavenes konstruksjon.

### Faste metaregler
1. **Utregning skal vises.** Faget er kvantitativt, og fasitene er trinnvise utregninger. «Vis at»-formuleringene i oppgavene forventer at studenten fører hele veien fram til det oppgitte svaret — ikke bare postulerer det.
2. **Regning skal tolkes.** Det holder ikke å presentere et tall (durasjon, beta, alfa, PVGO, current yield). Studenten skal si hva tallet betyr økonomisk — hvorfor current yield er høyere enn yield, hvorfor obligasjon 2 har høyere durasjon enn obligasjon 1, hvorfor et aktivum over SML er et godt kjøp, hva PVGO forteller om selskapet.
3. **Figur der det er naturlig.** SML/CML tegnes; payoff-diagrammer tegnes; binomiske trær tegnes. Kurvene og punktene skal navngis.
4. **Egne forutsetninger presiseres.** Fordi vektingen er veiledende og oppgavene bevisst er litt åpne, honoreres det at studenten oppgir sine antakelser (f.eks. flat rente, årlig kupong etterskuddsvis, ingen dividende).
5. **Ingen-arbitrasje og risikonøytral prising er de bærende prinsippene.** Sensor forventer at studenten priser derivater preferansefritt (via p*), ikke via subjektive sannsynligheter — og at strukturerte produkter og forwards prises ved replikering/arbitrasje.
6. **Enheter og desimaler.** Flere sett spesifiserer antall desimaler i svarene (to for priser, tre for durasjon); presisjon teller.

### Hva som skiller karakternivåene
- **Bunn (E–D):** riktig oppsett av grunnformelen (CAPM-likningen, obligasjonsprisformelen, binomisk p*), riktig neddiskontering, og riktig hovedtall i de enkleste deloppgavene.
- **Midt (C):** komplett, korrekt utregning gjennom flere ledd — durasjon *og* modifisert durasjon *og* priseffekt; full binomisk verdsetting av europeisk call og put; beta fra kovarians og korrekt SML; Gordon-modell med g = b·ROE.
- **Topp (A/B):** behersker de subtile poengene — **amerikansk vs. europeisk put** (verdien av tidlig utøvelse), **eksotiske/lookback- og state-contingent-priser**, **PVGO** som differansen mot ren utdelingspolitikk, **arbitrasjekonstruksjonen** ved feilprisede forwards/strukturerte produkter, **dekomponering av total risiko** i systematisk og usystematisk del, og at **rangeringen av aksjeplukkere avhenger av CAPM-referansen**. Kobler CAPM-avkastningskravet konsistent inn i aksjeverdsettingen, og tolker alle tall verbalt.

---

## 5. Typiske feil

Utledet av det oppgavene er bygget for å avsløre:

1. **Presentere tall uten tolkning** — durasjon, beta, alfa, current yield, PVGO uten den økonomiske forklaringen sensor ber om.
2. **Feil diskontering av obligasjoner** — bruke én flat yield når oppgaven gir en full yieldkurve (hver kontantstrøm skal diskonteres med sin egen spotrente), eller glemme at første kupong kommer om ett år.
3. **Bruke faktiske («fysiske») sannsynligheter i opsjonsprising** i stedet for de risikonøytrale p*. Dette er den mest alvorlige metodefeilen i derivatoppgaven.
4. **Overse tidlig utøvelse** ved amerikansk put — behandle den som identisk med den europeiske og dermed underprise den.
5. **Blande current yield, yield to maturity og kupongrate** — og ikke kunne forklare hvorfor de rangeres som de gjør ved over-/underkurs.
6. **Feil beta** — regne β = ρσᵢ/σM feil vei, eller forveksle kovarians med korrelasjon; glemme at β = σᵢ,M/σM².
7. **Ikke skille systematisk fra usystematisk risiko** — anta at et aktivums totale standardavvik (og ikke bare beta/systematisk del) prises i CAPM.
8. **Forveksle SML og CML** — plotte aktiva mot standardavvik når CAPM prises mot beta, eller omvendt.
9. **Feil PVGO** — sette PVGO = P i stedet for P − E₁/k, eller bruke feil avkastningskrav (ikke CAPM-basert k).
10. **Rangere aksjeplukkere på rå avkastning** uten å justere for beta/systematisk risiko (alfa).
11. **Glemme durasjonens fortegn** — `ΔP ≈ −D*·P·Δy`; prisen faller når renten stiger.
12. **Feil arbitrasjeretning** ved feilpriset forward — kjøpe der man skal shorte; ikke spesifisere antall kontrakter for ønsket risikofri gevinst.
13. **Uklare payoff-diagrammer** — knekkpunkter (ved X), fortegn og aksenavn må være entydige.

---

## 6. Modell- og notasjonsapparat

Notasjonen er stabil, og fordi de nyere settene er på engelsk bør en bok trene begge språkene parallelt.

### Notasjonskonvensjoner
- **Avkastning og risiko:** forventet avkastning `E[rᵢ]` (eng. *expected return*), standardavvik `σᵢ`, varians `σᵢ²`, kovarians `σᵢ,ⱼ` / `Cov(rᵢ,rⱼ)`, korrelasjon `ρᵢ,ⱼ`, risikofri rente `rf`, markedsporteføljen `M`.
- **Portefølje:** andeler `a`, `w`, `y` i risikabelt aktivum/portefølje; porteføljeavkastning `E[rp]`, porteføljerisiko `σp`; Sharpe-rate `S = (E[r] − rf)/σ`.
- **CAPM:** beta `βᵢ = σᵢ,M/σM² = ρᵢ,M σᵢ/σM`; alfa `αᵢ`; verdipapirmarkedslinjen **SML**; kapitalmarkedslinjen **CML**.
- **Obligasjon:** pris `P₀`, kupong `C`/`K`, pålydende/hovedstol `F`/`PT`, yield to maturity `y`/`r`, current yield, durasjon `D`, modifisert durasjon `D*`, holding period return `HPR`; spotrenter `r₀,ₜ`, forward-renter `fᵢ,ⱼ`.
- **Derivater:** aksjepris `S₀`/`Sₜ`, opp-/ned-faktor `u`/`d`, innløsningskurs `X`/`K`, call `C₀`, put `P₀`, amerikansk put `P₀ᴬ`, risikonøytral sannsynlighet `p*`, forwardpris `F`, state price `π`.
- **Aksjeverdi:** dividende `D`, fortjeneste per aksje `E`, avkastningskrav `k`, vekstrate `g`, ROE, plowback/tilbakeholdt andel `b`, PVGO.
- **Nytte:** kvadratisk (mean-variance) nytte `U = E[r] − ½Aσ²` med risikoaversjon `A`.

### Må beherskes aktivt (regnes, tegnes og forklares)

**1. Porteføljestatistikk og optimal allokering:** porteføljevarians for to aktiva, minimum-varians-andel a*, kombinasjon av risikofritt aktivum + risikabel portefølje, optimal andel w* fra kvadratisk nytte, Sharpe-rate, effekten av korrelasjon på diversifisering.

**2. CAPM-apparatet:** SML og CML, beta fra kovarians, alfa, «godt kjøp»-vurdering, likevektsbetingelser (finn rf og E[rM] fra to aktiva), dekomponering av total risiko i systematisk (β·σM) og usystematisk (diversifiserbar) del.

**3. Obligasjonsregning:** prising med flat rente og med full yieldkurve, yield to maturity, current yield, HPR over ett år, durasjon og modifisert durasjon, priseffekt av renteendring, evigvarende obligasjon, obligasjon med kredittrisiko/CDS.

**4. Terminstruktur:** forventningshypotesen, likviditetspreferansehypotesen, forward-renter fra spotrenter, syntetisk konstruksjon av kupongobligasjon fra nullkupongobligasjoner.

**5. Binomisk derivatprising:** ett- og to-periode-tre, risikonøytral sannsynlighet p*, europeisk call/put, amerikansk put med tidlig utøvelse, eksotiske/lookback-opsjoner, state-contingent claims og state prices, utledning av risikofri rente fra state prices.

**6. Put-call-paritet og opsjonsstrategier:** paritet (diskret og kontinuerlig), payoff-diagrammer for sammensatte posisjoner, ingen-arbitrasje-verdsetting av strategier.

**7. Forward/arbitrasje:** arbitrasjefri forwardpris, gjennomføring av arbitrasje, valuta-forward via dekket renteparitet.

**8. Aksjeverdsetting:** dividendediskontering, Gordons vekstmodell, g = b·ROE, PVGO, kobling til CAPM-avkastningskrav.

### Aktivt vs. kvalitativt
- **Aktivt (regnes/tegnes) — tyngdepunktet:** alt i punktene 1–8 over. Faget er dominert av regning; en bok må ha rikelig med gjennomregnede eksempler og øvingsoppgaver med fasit.
- **Kvalitativt (drøftes verbalt):** rentekurve-hypotesene, de fire grunnene til at finansmarkeder finnes, forklaring av risikopremie og hvorfor høyere risikopremie gir lavere aksjekurs, spekulantens bruk av opsjoner, forskjellen amerikansk/europeisk opsjon, markedseffisiens (nevnt i eldre sett). Disse er få, men gir lettvinte poeng når de kommer.

### Matematisk verktøykasse (forutsettes — formelsamling ofte tillatt)
Neddiskontering og geometriske rekker (annuitet, evigvarende), forventning/varians/kovarians for lineærkombinasjoner (fra SOK1004), enkel derivasjon for optimering (a*, w*, y*), løsning av likninger (yield, forward-rente), og — der Black–Scholes brukes — normalfordelingstabellen. Nivået ligger over SOK1002 i finansielt innhold, men den rene matematikken er moderat; det er *modellrepertoaret* som er stort.

### Skal IKKE bygges tungt på
- **Kontinuerlig Black–Scholes med full utledning** er marginalt: det dukker opp i ett eldre sett (H2016) med normalfordelingstabell og put-call-paritet, men den **binomiske modellen er den sentrale opsjonsmetoden**. En bok bør dekke Black–Scholes kort (formel + tabellbruk + paritet), ikke som hovedspor.
- **Institusjonell bank-/reguleringskunnskap** (Basel, innskuddsgaranti, bank run, finanskrisen) hører til SØK2010, ikke SØK2005 — utover en kort kontekstuell nevning.
- **Ren mikroteori uten finansanvendelse** (markedslikevekt, monopol, spillteori, velferd) hører til SOK1002/senere emner og forekommer ikke.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (avgjør karakteren)
1. **Obligasjonsprising, yield og durasjon** — pris fra kontantstrøm (flat rente og yieldkurve), yield to maturity, current yield, durasjon + modifisert durasjon + priseffekt, HPR. ~90 % frekvens, egen oppgave nesten hvert år.
2. **Binomisk opsjonsprising** — risikonøytral sannsynlighet, ett-/to-periode-tre, europeisk og amerikansk put, put-call-paritet. ~85 % frekvens.
3. **Porteføljeteori og CAPM** — porteføljevarians, minimum-varians-andel, optimal allokering fra kvadratisk nytte, beta, SML/CML, alfa. ~80 % frekvens.
4. **Aksjeverdsetting** — dividendemodell, Gordon (g = b·ROE), PVGO, med CAPM-avkastningskrav. ~65 % frekvens.

### Nivå 2 — må kunne (gir 20–30 % når de kommer)
5. **Rentekurve og forward-renter** — forventningshypotesen, forward fra spot, syntetisk obligasjon.
6. **Opsjonsstrategier og payoff-diagrammer** — protective put, covered call, straddle, bull spread, collar; ingen-arbitrasje-verdsetting.
7. **Forward/futures og arbitrasje** — arbitrasjefri pris, gjennomføring, valuta-forward.
8. **Valg under usikkerhet** — kvadratisk nytte, risikoaversjon, sikkerhetsekvivalent, maksimal A.

### Nivå 3 — bør kjenne godt (roterer inn)
9. **Kredittrisiko og CDS** — obligasjon med misligholdssannsynlighet, forsikringspremie.
10. **Strukturerte produkter** — kapitalgaranti = nullkupongobligasjon + call.
11. **Eksotiske opsjoner og state prices** — lookback, opsjon-på-opsjon, state-contingent claims (i vekst i de nyeste settene, jf. H2025).
12. **Kvalitative drøftinger** — de fire grunnene til finansmarkeder, risikopremie og aksjekurs, systematisk vs. usystematisk risiko, markedseffisiens.

### Prognose for neste eksamen
Med overveldende sannsynlighet **fire likeveide oppgaver (25 % hver)**, én per aktivaklasse, på engelsk:

- **Oppgave 1 (risiko/portefølje/CAPM):** porteføljevarians eller kvadratisk-nytte-allokering, eller en CAPM-«mulighetstest» (er situasjonen forenlig med CAPM?), med beta, SML og alfa.
- **Oppgave 2 (obligasjon):** prising fra yieldkurve eller flat rente, yield/current yield, durasjon + modifisert durasjon + priseffekt, ofte HPR eller forward-rente.
- **Oppgave 3 (derivater):** binomisk opsjonsprising (europeisk + amerikansk put, evt. eksotisk/state prices), eller forward-arbitrasje, eller opsjonsstrategi-payoff.
- **Oppgave 4 (aksje):** CAPM-avkastningskrav → dividendemodell/Gordon → PVGO, evt. med ROE/plowback.

Boken bør derfor bygges som **fire søyler** (risiko & portefølje/CAPM · obligasjoner & renter · derivater · aksjeverdsetting) på et **felles fundamentkapittel** (nåverdi/neddiskontering, forventning/varians/kovarians, ingen-arbitrasje og risikonøytral prising), med **rikelig gjennomregnede eksempler og fasitoppgaver på engelsk og norsk**. Den binomiske modellen og obligasjonsregningen bør ha mest plass, siden de er de sikreste eksamensblokkene.

### Overlapp-funn (bokdesign på tvers av emner)
- **SOK1002 (fundament):** SØK2005 forutsetter SOK1002s nyttemaksimering, **valg under usikkerhet** og **intertemporale valg** (sparing/lån, nåverdi, rente over to perioder). Fundamentkapitlet kan gjenbruke SOK1002-bokas behandling av forventet nytte og nåverdi som forkunnskapsbro.
- **SOK1004 (fundament):** porteføljevariansen er en direkte anvendelse av SOK1004s regneregler for forventning/varians/kovarians for lineærkombinasjoner. Del gjerne dette statistikkgrunnlaget.
- **SØK2010 Banking (nærmeste nabo):** SØK2010-analysen navngir eksplisitt overlappet med SØK2005 på **renteregning, obligasjonsprising, pris–rente-sammenheng, yield to maturity, forward-renter og markedseffisiens**. De to bøkene bør dele en **kvantitativ renteregnings-/obligasjonssøyle**; SØK2005 legger til derivater, porteføljeteori og aksjeverdsetting, mens SØK2010 legger til bank, regulering og finansiell stabilitet.
- **SOK2012 Atferdsøkonomi:** deler *beslutning under risiko* (forventet nytte, risikoaversjon fra konkav/kvadratisk nytte, sikkerhetsekvivalent). SØK2005 bruker det instrumentelt til porteføljevalg; SOK2012 problematiserer det.
- **ECON-fag:** Ingen av de analyserte UiO-ECON-emnene i `docs/hoyskole-boker/` er et rent finans-/porteføljeteoriemne på SØK2005-nivå (ECON-treffene på «CAPM/portefølje/opsjon» er sporadiske nevninger i makro-/økonometri-/statistikkfag, ikke egne finansemner). SØK2005 har altså **ingen direkte ECON-tvilling** i porteføljen per nå; nærmeste slektning forblir SØK2010.
- **Kredittreduksjon/overlapp:** Emnebeskrivelsen antyder studiepoengreduksjon mot beslektede finans-/bankemner. Arkivets sensorveiledninger er håndskrevne fasiter og inneholder ingen egen «overlapp/reduksjon»-tekst; den formelle reduksjonen bør verifiseres mot NTNUs emnekatalog, men den faglige overlappen er som beskrevet mot SØK2010 (renter/obligasjoner) og forkunnskapsmessig mot SOK1002/SOK1004.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/SOK2005/`.

**Sensorveiledninger / løsningsforslag (6 + 5, alle bildebaserte skanninger av håndskrevne fasiter):** `SensorveiledningSØK2005-v-17` (V2017), `SØK2005SensorveiledningV-15` (V2015), `SØK2005_V20.sensorveiledning (1)` (V2020), `Sensurveiledning SØK2005, løsningsforslag vår 21` (V2021), `Sensurveiledning SØK2005`, `SØK2005 sensorveiledning`, samt løsningsforslag `Exam SØK2005 V22 answer key` (V2022), `SØK2005 The_finale_solution`, `SØK2005 Solution_the_finale_konte_H23` (H2023-konte), `SØK2005.Losningsforslag_V2018` (V2018), `SØK2005_finale_H-18` (H2018). Disse ga lite/ingen tekst med `pdftotext`; innholdet er verifisert via OCR (tesseract) og manuell lesning der mulig, og bekrefter oppgaveprofilen (state prices, forward-renter, CAPM/PVGO m.m.).

**Eksamensoppgaver lest grundig (siste ~8 år):** `SØK2005 H25`, `SØK2005 V25`, `SØK2005 H24`, `SØK2005 V24`, `SØK2005 H23`, `SØK2005_V20` (V2020), `SØK2005V-19` (V2019), `SØK2005.bokmål` (V2018), `SØK2005V-17 (002)` (V2017, bokmål+nynorsk), `SØK2005H-17 (002)` (H2017), `SØK2005H-16` (H2016), `SØK2005V-16-bokmål` (V2016). `2005.pdf` er V2021-forsiden (fil-opplasting).

**Eksamensoppgaver skummet (eldre, for strukturbekreftelse):** `SØK2005V-10`, `SØK2005H-10`, `SØK2005H-11`, `SØK2005V-12`, `SØK2005H-12`, `SØK2005V-13`, `SØK2005V-14`. `SØK2005V-15` og `SØK2005V-11` er bildebaserte og ga ikke tekst (dekket indirekte av øvrige kilder).

**Hjelpemiddel/kontekst:** oppgavesettene oppgir tillatt hjelpemiddel (kode C: matematisk formelsamling Sydsæter/Strøm/Berck + kalkulator; kode A/H under/etter korona), faglig kontakt (Snorre Lindset nå; tidligere Egil Matsen, Ragnar Torvik, Hans Jørgen Tranvåg), og eksamensform (Inspera, 4 timer, A–F, 7,5 sp).

**Merknader om kildene:**
- Alle sensorveiledninger og løsningsforslag i arkivet er **rene bildeskanninger** av håndskrevne fasiter. Der teksten var lesbar via OCR er metodene bekreftet; ellers er sensorkravene i del 4 utledet av oppgavenes konstruksjon og av «vis at»-formuleringene, ikke av ordrett sensor­tekst.
- Fagprofilen er utledet av arkivet (oppgaver + fasiter) kombinert med den offisielle emnebeskrivelsens temaliste (spare-/låne-beslutninger, valg under usikkerhet, porteføljevalg, verdsetting av aksjer/obligasjoner/derivater, rentens terminstruktur, systematisk vs. usystematisk risiko).
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller sensorformuleringer er gjengitt ordrett. Modellsammenhengene og tallsvarene er faglige fakta uten verkshøyde.
