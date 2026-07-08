# Eksamensanalyse: SØK1001 / SOK1001 / MET1001 Matematikk for økonomer (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på eksamensarkivet i `~/Desktop/Eksamner/NTNU/SOK1001/` — **36 filer**, i praksis ca. **28 oppgavesett fra H2008 til H2025** pluss løsningsforslag/sensorveiledninger. Oppgavesett lest med maskinlesbar tekst: H2025, V2025, H2024, V2023, H2023, V2022, H2022, V2020, H2020, H2019, H2018, H2017, H2016, V2019, V2017, V2016, V2015, V2018 («Vår-18»), H2014, H2011, H2010, H2009, H2008, V2009–V2012, «SØK1001.pdf» og «SØK1001 V22». **Løsningsforslag/sensorveiledninger lest grundig (fasit):** H2025 (fullstendig, ren tekst), V2025 (via OCR — «SØK1001 sensurveiledning.pdf» = «LF Søk1001 v25»), H2024 (via OCR), V2018/«V15»-veiledningen (via OCR). Bildebaserte fasiter som ikke lot seg lese fullt ut (kun delvis via OCR): Fasit V2021, LF H2023, Løsningsforslag H2022, fasit V2022. De nyeste ~8 årgangene er gjennomgått i detalj; de eldste (2008–2014) er skummet for struktur. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller sensorformuleringer. Funksjonsuttrykk, tallsvar og standardmetoder er faglige fakta uten verkshøyde og gjengis fritt. Analysen er kvantitativ der kildene tillater det.
>
> **Emnekode-merknad:** Arkivet og eldre sett bruker skrivemåten **«SØK1001»**; offisiell kode i dag skrives også **«SOK1001»** (samme emne). Fra og med 2025 kjøres emnet som **felles eksamen med MET1001** (H2025-forsiden: «Felles eksamen for MET1001/SØK1001»). Fullt navn: *Matematikk for økonomer*, 7,5 studiepoeng, Institutt for samfunnsøkonomi / NTNU Handelshøyskolen. Status: **AKTIV**. Formelsamling brukt: **Sydsæter, Strøm & Berck, *Matematisk formelsamling for økonomer* (4. utg.)** — oppgitt eksplisitt på forsidene.

---

## 0. Kort om emnet + NTNU/UiO-forskjell (les dette først)

SØK1001 er **et rent matematikkemne for økonomistudenter** — verktøyfaget som leverer regneteknikken til den påfølgende mikro- og makroøkonomien. Faget er ikke økonomisk teori; det er kalkulus, algebra, følger/rekker, finansmatematikk og optimering, pakket inn i økonomiske situasjoner (kostnadsfunksjoner, sparing, lån, nyttemaksimering).

### Forhold til UiO ECON1100 (Matematikk I for økonomer)
SØK1001 er NTNUs direkte motstykke til **UiOs ECON1100**. De to emnene deler kjernen nesten fullstendig — begge er «matematikk for økonomer»-emner bygget på Sydsæter-tradisjonen. Men **formatet og noen vektlegginger skiller seg systematisk**:

| | **SØK1001 (NTNU)** | **ECON1100 (UiO)** |
|---|---|---|
| Varighet | **4 timer** | 3 timer |
| Hjelpemidler | **Formelsamling (Sydsæter/Strøm/Berck) + kalkulator** (kode B–D/C) | **Ingen** |
| Struktur | **5–9 oppgaver**, fast temameny, vekting oppgitt pr. oppgave | 4–6 oppgaver (typisk 5), 100 poeng likt fordelt |
| Signaturoppgave | Oppgave 1 = **derivasjonspakke** (5–6 funksjoner) | Oppgave 1 = partiellderivasjon + Oppgave 2 = **sant/usant med begrunnelse** |
| «Sant/usant»-oppgave | **Finnes ikke** i SØK1001-arkivet | Fast, bærer ~15–30 % |
| Finansmatematikk | **Tung og fast** (sparing, annuitet, serielån, nåverdi — nesten hvert sett) | **Fraværende** (ingen låne-/annuitetsregning) |
| Følger/rekker | Geometrisk rekke, konvergens, oppsparing som rekke | Kun som sant/usant-punkt (endelige/geometriske summer) |
| Lagrange | Fast egen oppgave (nyttemaks/kostnadsmin) | Fast, tyngste storoppgave |
| Implisitt derivasjon | Fast egen oppgave (horisontal/vertikal tangent) | Nivåkurve/implisitt derivasjon, ~75 % |
| Todim. fri optimering | Klassifisering via `AC−B²` (Hesse) | Hesse-determinant `D` |
| Integrasjon | Sjeldnere; dukker opp som antiderivasjon (kostnadsfunksjon fra grensekostnad) | Storoppgave i gammelt format, ellers sant/usant |

**Den viktigste forskjellen** er at SØK1001 har **finansmatematikk og geometriske rekker som en tung, fast blokk** (sparing, oppsparingsannuitet, annuitetslån, serielån, nåverdi) — dette er **helt fraværende i ECON1100**. Motsatt har ECON1100 sin karakteristiske «sant eller usant, begrunn»-oppgave og et sterkere fokus på homogenitet, differensial/lineær approksimasjon og omhyllingsteoremet, som **ikke** er egne oppgavetyper i SØK1001-arkivet. Selve kalkulus-, derivasjons- og optimeringsapparatet er derimot så godt som identisk.

**Konklusjon for boka:** En SØK1001-bok kan i stor grad dele kjernekapitler (derivasjon, funksjonsdrøfting, partiell derivasjon, Lagrange, implisitt derivasjon) med en ECON1100-bok, men **må ha en solid finansmatematikk-søyle** (geometriske rekker → sparing/oppsparingsannuitet → nåverdi → annuitets- og serielån) som ECON1100-boka ikke trenger. «Sant/usant»-drillingen som er sentral for ECON1100 kan derimot **utelates** for SØK1001.

### Forhold til SOK1002 (Mikroøkonomisk analyse)
Matematikkapparatet i SØK1001 er **verktøyet som brukes i SOK1002**. Der SØK1001 lærer *hvordan* man setter opp og løser et Lagrange-problem eller deriverer en Cobb-Douglas-funksjon, er det i SOK1002 dette apparatet anvendes på økonomisk teori (nyttemaksimering, kostnadsminimering, produsentteori). Konkret:

- **Lagranges metode** (SØK1001 oppgave om betinget optimering) → nyttemaksimering og kostnadsminimering i SOK1002.
- **Cobb-Douglas-funksjoner** og deres deriverte (SØK1001) → nytte-/produktfunksjoner i SOK1002 (`x1^a·x2^(1-a)`, `A·K^α·L^β`).
- **Partiell derivasjon** (SØK1001) → marginalnytte/marginalprodukt, MSB/TSB i SOK1002.
- **Elastisitet via derivasjon** (SØK1001) → pris-/inntektselastisiteter i SOK1002.
- **Implisitt derivasjon / nivåkurver** (SØK1001) → indifferenskurver og isokvanter i SOK1002.

SØK1001 er altså det **rene matematiske fundamentet**; SOK1002 er **anvendelsen på økonomisk teori**. Boka bør peke framover mot SOK1002 der teknikken innføres (særlig ved Lagrange og Cobb-Douglas), men SØK1001-boka skal **ikke** inn i økonomisk teori — den skal lære regneteknikken.

---

## 1. Eksamensform og utvikling

### Form
- **Skriftlig skoleeksamen, 4 timer**, karakter A–F, 7,5 studiepoeng. Digital (Inspera Assessment) fra ca. 2020; håndtegninger/mellomregning kan lastes opp på skanne-ark.
- **Hjelpemidler:** normalt **kode C** — matematisk formelsamling (Sydsæter, Strøm & Berck) + godkjent, enkel kalkulator (Casio fx-82-serien, Citizen SR-270X, HP 30S; fra 2025 også finanskalkulatorer Casio FC-100V og TI BAII Plus). H2025-forsiden oppgir kode **«B–D» / «bestemt, enkel kalkulator»** — dette er nomenklaturskifte, ikke reell endring: formelsamling + kalkulator er tillatt, avanserte/programmerbare hjelpemidler er ikke.
- **Målform:** oppgaveteksten gis på **bokmål og nynorsk**, eldre sett (t.o.m. 2019) også på **engelsk**.
- **Faglærere/oppgavestillere** (roterer, forklarer små stilvariasjoner): Snorre Lindset, Jan Tore Solstad, Jan Morten Dyrstad, Hildegunn E. Stokke, Irmelin Helgesen m.fl.

### Struktur — to hovedformater
Emnet har hatt to strukturelle regimer, men **temamenyen er nesten uendret i hele perioden**:

1. **«Klassisk 5-oppgavers format»** (2008–2020, og tilbake fra 2025): 5 oppgaver med delspørsmål, alle på papir/med mellomregning, vekting oppgitt i parentes. Dette er formatet H2025 vender tilbake til (6 oppgaver, men samme profil).
2. **«Inspera flervalgsformat»** (ca. 2022–2024): 7–9 oppgaver, der de fleste er **flervalg** («Velg ett alternativ») og bare de siste 1–2 storoppgavene (Lagrange, funksjonsdrøfting) krever vist mellomregning. Flere korte oppgaver, men samme faglige innhold spredt tynnere.

Fra H2025 er formatet **igjen mellomregning-basert** (felles med MET1001), med 6 oppgaver og eksplisitt krav om vist utregning. Boka bør derfor kalibreres mot **mellomregnings-formatet** (2025-malen og 2008–2020), ikke mot flervalgs-mellomperioden.

### Vektings-/strukturhistorikk (utvalg)

| Sett | Format | Struktur / vekting |
|---|---|---|
| H2008 | Klassisk | 5 oppg. (deriver, deriver, stasjonær/global, partielle, klassifiser stasjonær) |
| H2014 | Klassisk | 5 oppg. 20/22/23/15/20 (deriver, drøfting, implisitt, klassifiser 2-var, Lagrange) |
| H2018 | Klassisk | 5 oppg. **30**/…/…/…/… (deriv.pakke tung) |
| H2019 | Klassisk | 5 oppg. **27**/20/18/20/15 (deriv, finans, implisitt, drøfting, Lagrange) |
| V2020 | Klassisk | 5 oppg. 20/24/20/16/20 (deriv, nåverdi, drøfting, implisitt, Lagrange) |
| H2020 | Klassisk | 6 oppg. 15/20/20/20/20/5 (…, Lagrange-min, implisitt, annuitetslån, …) |
| V2022 | Inspera | 9 oppg. — 7 flervalg + 2 storoppg. (drøfting m/skisse, Lagrange nyttemaks) |
| H2022 | Inspera | 9 oppg. (faktoriser, def/verdimengde, likninger, deriv.pakke, linjer, drøfting×3, Lagrange) |
| H2023 | Inspera | 8 oppg. (forenkle, likninger, deriv, drøfting, klassifiser, Lagrange, implisitt, serielån) |
| V2023 | Inspera | 9 oppg. (forenkle, likninger, deriv, integral/likn, drøfting, maks, Lagrange, tangent, annuitetslån + nåverdi) |
| H2024 | Klassisk | 5 oppg. **20 % hver** (forenkle, deriv, likninger, Lagrange nyttemaks, annuitetslån) |
| V2025 | Klassisk | 5 oppg. **20 % hver** (linje, deriv.pakke, likninger, implisitt, Lagrange-min) |
| **H2025** | Klassisk | **6 oppg.** 15/20/20/15/15/15 (grensekost→integral/asymptote, drøfting, rekke+finans, partielle+klassifiser, Lagrange, likning/grenseverdi/elastisitet) |

**Konstanter på tvers av settene (2008–2025):**
1. **Derivasjonspakken er nesten alltid oppgave 1 eller 2** — 4–6 funksjoner som skal deriveres (potens, produkt, kvotient, kjerneregel, `e^x`, `ln x`, `a^x`, røtter, sammensetninger).
2. **Lagranges metode** er en fast, nesten årviss egen oppgave — enten maksimering (nytte, `x^a·y^b` under budsjett) eller minimering (kostnad under produksjonskrav).
3. **Funksjonsdrøfting** (stasjonærpunkt → topp/bunn → vendepunkt → konveks/konkav → evt. skisse) er en fast egen oppgave.
4. **Finansmatematikk** (sparing/oppsparingsannuitet, annuitetslån, serielån, nåverdi) er en fast egen oppgave i så godt som hvert sett.
5. **Implisitt derivasjon** med horisontal/vertikal tangent er en tilbakevendende egen oppgave.

---

## 2. Temafrekvens

Score = anslått andel av de lesbare settene (~24 sett 2008–2025) der temaet inngår som (del)oppgave. Delt i fem spor etter fagets faste struktur.

### 2A. Algebra, funksjoner og likninger (grunnverktøy)

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **Derivasjon (regelrepertoar)** — potens/produkt/kvotient/kjerneregel, `e^x`, `ln x`, `a^x`, rot | **~100 %** | Egen «derivasjonspakke» nesten hvert sett; 4–6 funksjoner |
| **Løse likninger** (eksponential-/logaritme-/rasjonale/2.grads) | **~65 %** | `2^x`, `e^{rt}=2`, `ln(x+2)=7`, rasjonale likninger, ABC |
| **Forenkle/faktorisere uttrykk** (potensregler, `ln e^4/e^2`) | **~45 %** | Åpningsoppgave i flere Inspera-sett (H2022, H2023, H2024) |
| **Definisjonsmengde / verdimengde** (rot, brøk, `ln`) | **~35 %** | Ofte med grafisk illustrasjon av definisjonsmengden |
| **Rett linje** (stigningstall, ettpunkts-/topunktsformel, akseskjæring) | **~30 %** | Egen oppgave V2025, H2022; grunnleggende |
| **Asymptoter** (vertikal + skråasymptote til enhetskostnad) | ~15 % | H2025 oppg. 1c; kobles til gjennomsnittskostnad |

### 2B. Funksjoner av én variabel: derivasjon, drøfting, elastisitet

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **Funksjonsdrøfting**: stasjonærpunkt → topp/bunn via 2.derivert, vendepunkt, konveks/konkav, skisse | **~90 %** | Fagets signaturoppgave i én variabel; ofte polynom av 3.–4. grad |
| **Globale vs. lokale ekstrempunkt** (sammenlikne funksjonsverdier) | **~55 %** | H2025 oppg. 2a (to globale min), H2008, H2023 |
| **Tangentlikning** + akseskjæring | **~35 %** | `y = f'(x0)(x−x0)+f(x0)`; H2025 oppg. 2c, V2023 oppg. 8 |
| **Elastisitet** (`Elx f = (x/f)·f'(x)`), beregning/bestemme parameter | ~20 % | H2025 oppg. 6c (finn `a` slik at `Elx f = 1`); tolkning |
| **Grenseverdier / L'Hôpital** | ~15 % | H2025 oppg. 6b (`lim ln(2x−1)/(x²−1)`) |
| **Eksponentiell vekst/depresiering** (`P(t)=P0·a^t`, halveringstid) | ~20 % | H2019 oppg. 1b (maskinverdi −2,5 %/år), koblet til logaritme |

### 2C. Følger, rekker og finansmatematikk (SØK1001-signaturblokken)

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **Finansmatematikk samlet** (minst ett av under) | **~90 %** | Egen oppgave i nesten hvert sett |
| Sparing / **oppsparingsannuitet** (fast innskudd, sluttverdi) | **~55 %** | `K = (D/r)(1+r)[(1+r)^n −1]`; H2025 oppg. 3c, H2019, V2022 |
| **Annuitetslån** (finn terminbeløp, evt. rente/avdrag-splitt) | **~50 %** | H2024, H2020, V2023, «SØK1001.pdf»; nåverdi av annuitet |
| **Serielån** (første/siste terminbeløp, total rente) | **~35 %** | H2023 oppg. 8, H2019 oppg. 2b, V2022 oppg. 7 |
| **Nåverdi** (av enkeltbeløp/betalingsstrøm/annuitet) | **~45 %** | V2020 oppg. 2, V2022 oppg. 5, V2023 oppg. 9b |
| **Sluttverdi / renteregning** (`Kt=K0(1+r)^t`, finn `t`) | **~40 %** | H2025 oppg. 3b (finn antall år), grunnleggende |
| **Geometrisk rekke** (kvotient, konvergensvilkår, sum `a/(1−k)`) | **~35 %** | H2025 oppg. 3a; sparing vist *som* geometrisk rekke (H2019) |

### 2D. Funksjoner av flere variable: partielle deriverte, fri optimering

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **Partielle deriverte** (1. og 2. orden, kryssderivert) | **~55 %** | Ofte som del av derivasjonspakke eller egen oppgave |
| **Fri 2-variabel optimering + klassifisering** (`AC − B²`) | **~55 %** | Stasjonærpunkt → sadel/min/maks via andreordensdeterminant |
| **Definisjonsmengde i to variable** (grafisk) | ~20 % | H2019 oppg. 1d (`1/(x−y+3)`), illustrer i planet |

### 2E. Betinget og implisitt: Lagrange, implisitt derivasjon

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **Lagranges metode** (betinget optimering) | **~85 %** | Fast egen oppgave; maks (nytte) eller min (kostnad) |
| Lagrange **maksimering** (`x^a·y^b`/`xy`/`ln`-nytte under budsjett) | **~55 %** | H2024, V2022, H2019, H2014; ofte Cobb-Douglas |
| Lagrange **minimering** (`√K+20L` under `K+L=30`-type) | **~35 %** | V2025, V2020, H2020; kostnadsminimering |
| **Implisitt derivasjon** (finn `y'`, horisontal/vertikal tangent) | **~55 %** | V2025, V2022, H2019, H2014; kurve `F(x,y)=c` |
| **Integrasjon** (antiderivert → kostnadsfunksjon fra grensekostnad; areal) | ~25 % | H2025 oppg. 1b (`∫K'(x)dx`), V2023; ubestemt + bestemt |

**Viktigste funn:**
1. **Emnet har fem faste søyler:** (i) derivasjon + algebra, (ii) endimensjonal funksjonsdrøfting, (iii) **finansmatematikk + rekker**, (iv) flervariabel-kalkulus (partielle deriverte + fri optimering), (v) **Lagrange + implisitt derivasjon**. Så godt som hvert eneste sett trekker fra alle fem.
2. **Derivasjonspakken er det billigste og sikreste poenggulvet** — 4–6 funksjoner som må deriveres raskt og korrekt, nesten hvert sett. En kandidat som mekaniserer derivasjonsreglene sikrer 15–30 %.
3. **Finansmatematikk er SØK1001s signatur og det som tydeligst skiller faget fra ECON1100.** Oppsparingsannuitet, annuitetslån, serielån og nåverdi går igjen — og forutsetter at studenten kjenner både formlene (i formelsamlingen) *og* forskjellen på forskudds-/etterskuddsvis, annuitet vs. serielån.
4. **Lagrange og funksjonsdrøfting er de to tyngste storoppgavene** (~85–90 %). Lagrange bruker ofte Cobb-Douglas-funksjoner, som peker rett mot SOK1002.
5. **Cobb-Douglas er den gjennomgående funksjonsformen** i optimeringsoppgavene (`12x^{1/4}y^{1/3}`, `xy`, `x^a·y^b`) — samme signaturfunksjon som i SOK1002.

---

## 3. Oppgavesjangre

De sjangrene som faktisk går igjen, med typisk plassering og krav. Alle eksempler er **omskrevet** med egne tall/funksjoner.

### A. Derivasjonspakke (oppgave 1/2 — ~100 %)
- **Krav:** Deriver 4–6 funksjoner. Repertoaret som testes: potens-/sum-/differansregel, **produktregel** (`x³·ln x`), **kvotientregel** (`(x²+7)/ln x`), **kjerneregelen** (`e^{(2x+7)³}`, `(x−ln x+1)^6`, `ln(x√(x+1))`), derivasjon av `e^{kx}`, `ln x`, `a^x`, røtter og negative eksponenter.
- **Omskrevet eksempel:** «Deriver: (a) `f(x)=½x²−8x+7/3`, (b) `f(x)=e^x·ln x`, (c) `f(x)=e^{2x²}`, (d) `f(x)=(x²+7)/ln x`, (e) `f(x)=ln(7x²)`, (f) `f(x)=ln(x√(x+1))`.» (etter V2025 oppg. 2)

### B. Algebra: forenkle/faktoriser/løs likninger (~65 %)
- **Krav:** Forenkle potens- og logaritmeuttrykk (`x⁵/x³`, `ln(e⁴/e²)`, `(x²+2x+1)/(x+1)`), faktorisere, løse likninger av eksponential- (`2^x=8`, `3e^{4x⁴−4}=3`), logaritme- (`ln(x+2)=7`), rasjonal- og 2.gradstype (ABC).
- **Omskrevet eksempel:** «Løs `3e^{4x⁴−4}=3` med hensyn på `x`.» → `e^{4x⁴−4}=1 ⇒ 4x⁴−4=0 ⇒ x=1`. (etter H2025 oppg. 6a)

### C. Endimensjonal funksjonsdrøfting (~90 %)
- **Krav (fast oppbygging):** (1) `f'(x)=0` → stasjonærpunkt; (2) fortegnsskjema/andrederiverttest → topp/bunn; (3) `f''(x)=0` og fortegnsskifte → **vendepunkt**; (4) `f''`-fortegn → **konveks/konkav**-intervaller; (5) evt. **globale** ekstrempunkt ved å sammenlikne funksjonsverdier; (6) evt. **skisse** konsistent med funnene. Ofte polynom av 3.–4. grad.
- **Omskrevet eksempel:** «Gitt `f(x)=½x⁴−x²`. (a) Finn stasjonærpunkt og alle lokale/globale ekstrempunkt. (b) Avgjør hvor `f` er konveks/konkav og finn vendepunktene. (c) Finn tangentens akseskjæringer i `x=2`.» → stasjonær i `x=0` (lokalt maks) og `x=±1` (to globale min med `f=−½`); vendepunkt i `x=±1/√3`; tangent `y=12x−20`. (etter H2025 oppg. 2)

### D. Finansmatematikk — sparing, lån, nåverdi (~90 %)
- **Krav:** Kjenne og bruke formlene for **sluttverdi** (`Kt=K0(1+r)^t`), **oppsparingsannuitet**, **annuitetslån** (fast terminbeløp) og **serielån** (fast avdrag, fallende terminbeløp), samt **nåverdi** av enkeltbeløp og betalingsstrøm. Skille forskudds-/etterskuddsvis. Ofte løse for antall terminer (`t = ln(sluttverdi/K0)/ln(1+r)`).
- **Omskrevne eksempler:**
  - «100 000 kr settes i banken til 4 % årlig rente. Hvor mange år må beløpet stå for å vokse til 210 680 kr?» → `1,04^t=2,1068 ⇒ t≈19` år. (etter H2025 oppg. 3b)
  - «8000 kr settes inn 20 ganger, første gang i dag, 4 % rente. Hva står på kontoen ett år etter siste innskudd?» → oppsparingsannuitet `≈ 247 754`. (etter H2025 oppg. 3c)
  - «Et studielån på 250 000 kr, 0,5 % månedlig rente, nedbetales som annuitetslån over 10 år. Finn månedlig terminbeløp og splitt første og siste betaling i rente og avdrag.» (etter H2024 oppg. 5)
  - «Serielån på 2 000 000 kr, 5 % årlig rente, 20 år. Finn rente+avdrag første og siste år, og total betaling.» (etter H2023 oppg. 8)

### E. Geometrisk rekke og konvergens (~35 %)
- **Krav:** Finn kvotienten `k`, avgjør konvergens (`|k|<1`), bruk sumformelen for uendelig geometrisk rekke `S=a/(1−k)`. Ofte koblet til sparing (vis at oppsparing er en geometrisk rekke) eller til en likning i `x`.
- **Omskrevet eksempel:** «Rekken `x+2x²+4x³+8x⁴+…` (`x>0`). (i) Finn kvotienten og konvergensintervallet. (ii) Bestem `x` slik at summen er `2x`.» → `k=2x`, konvergerer for `0<x<½`; sum lik `2x` gir `x=¼`. (etter H2025 oppg. 3a)

### F. Partielle deriverte + fri 2-variabel optimering (~55 %)
- **Krav:** Finn 1. og 2. ordens partielle deriverte (inkl. kryssderivert `f''xy=f''yx`); finn stasjonærpunkt (`f'x=f'y=0`); klassifiser med **andreordensdeterminanten** `AC−B²` der `A=f''xx`, `B=f''xy`, `C=f''yy`: `AC−B²>0, A>0` → min; `A<0` → maks; `AC−B²<0` → **sadelpunkt**.
- **Omskrevet eksempel:** «Gitt `f(x,y)=x²y+¾y²−(3/2)xy+5`. (a) Finn alle 1. og 2. ordens partielle deriverte. (b) Finn stasjonærpunktene. (c) Klassifiser dem.» → tre stasjonærpunkt; `(¾,⅜)` er lokalt min, de to andre sadelpunkt. (etter H2025 oppg. 4)

### G. Lagranges metode (~85 %)
- **Krav:** Sett opp `F(x,y)=f(x,y) − λ(g(x,y)−c)`; skriv førsteordensbetingelsene; eliminér `λ` (del den ene FOB på den andre → tangeringsbetingelse); sett inn i bibetingelsen; løs for `x*, y*` (og evt. `λ*`). Både **maksimering** (nytte) og **minimering** (kostnad) forekommer; oppgaven kan si at andreordensbetingelsene kan antas oppfylt.
- **Omskrevne eksempler:**
  - «Maksimer `f(x,y)=12x^{1/4}y^{1/3}` gitt `3x+y=14` med Lagranges metode.» (etter H2019 oppg. 5)
  - «Minimer `√K + 20L` under `K+L=30`. (Sett opp Lagrangefunksjonen.)» (etter V2025 oppg. 5)
  - «Maksimer nyttefunksjonen under budsjettbetingelsen `p1·x1 + p2·x2 = m`, og vis hvordan etterspørselen etter de to varene endres når `p1` øker og når `m` øker.» (etter V2022 oppg. 9 — direkte bro til SOK1002)

### H. Implisitt derivasjon (~55 %)
- **Krav:** For en kurve `F(x,y)=c`: finn `y'` ved implisitt derivasjon (eller `y'=−F'x/F'y`); finn punkt der tangenten er **horisontal** (`y'=0`, dvs. teller `=0`) og **vertikal** (nevner `=0`). Ofte kombinert med skjæringspunkt med aksene.
- **Omskrevet eksempel:** «`2x²+xy+y²=14` definerer `y` implisitt. (a) Finn `y'`. (b) Finn punkt med horisontal tangent. (c) Finn punkt med vertikal tangent.» (etter V2025 oppg. 4)

### I. Integrasjon (~25 %)
- **Krav:** Ubestemt integral (antiderivert), typisk **kostnadsfunksjon fra grensekostnad** med integrasjonskonstant bestemt av faste kostnader; av og til bestemt integral / areal.
- **Omskrevet eksempel:** «Grensekostnaden er `K'(x)=½x+30`, og faste kostnader er 5000. Finn kostnadsfunksjonen `K(x)` og enhetskostnaden `A(x)=K(x)/x` med dens asymptoter.» → `K(x)=¼x²+30x+5000`; `A(x)=¼x+30+5000/x`, vertikal asymptote `x=0`, skråasymptote `y=¼x+30`. (etter H2025 oppg. 1)

### J. Elastisitet og grenseverdi (~20 %)
- **Krav:** Momentan elastisitet `Elx f = (x/f)·f'(x)`; beregne, tolke, eller bestemme en parameter slik at elastisiteten får en gitt verdi. Grenseverdier ofte via L'Hôpital.
- **Omskrevet eksempel:** «`f(x)=ax⁴−x²+x`. Bestem `a` slik at den momentane elastisiteten er 1 når `x=½`.» → `a=4`. (etter H2025 oppg. 6c)

---

## 4. Sensorkrav / vurderingskriterier

Utledet av de tilgjengelige løsningsforslagene/sensorveiledningene (H2025 fullstendig; V2025, H2024, V2018 via OCR). SØK1001 har korte, løsnings-baserte veiledninger uten lange metatekster; kravene leses derfor primært av *hvordan* fasitene fører løsningene.

1. **Mellomregning skal vises.** Der oppgaven ber om det (og i mellomregnings-formatet generelt) er det «ikke tilstrekkelig å kun gi endelig svar — mellomregning skal også vises» (eksplisitt i V2022 oppg. 8/9). Fasitene fører hvert skritt: oppsett → FOB/derivert → eliminering → innsetting → svar.
2. **Riktig metode og oppsett bærer poengene.** For Lagrange forventes hele oppskriften (Lagrangefunksjon → FOB → eliminér `λ` → bibetingelse → løsning), for drøfting hele kjeden (`f'`, fortegn, `f''`, vendepunkt, konveksitet). Fasitene viser at det er *fremgangsmåten*, ikke bare tallet, som gir uttelling.
3. **Fortegnsskjema kreves i drøftingen.** Fasitene setter alltid opp fortegnsskjema for `f'` (og `f''`) framfor å bare påstå «voksende for …». Klassifisering skal begrunnes.
4. **Tolkning der oppgaven ber om det.** Grensekostnad skal tolkes økonomisk («kostnaden øker tilnærmet med 35 når produksjonen øker med én enhet», H2025 1a); elastisitetstall og komparativ statikk (hvordan etterspørsel endres med pris/inntekt) skal forklares, ikke bare regnes.
5. **Klassifisering skal navngis presist.** Stasjonærpunkt klassifiseres som lokalt/globalt maksimum, lokalt/globalt minimum, sadelpunkt eller vendepunkt — med riktig kriterium (2.derivert i én variabel; `AC−B²` i to variable). Fasitene bruker fortegnstabell for `AC−B²`.
6. **Konvergensvilkår og definisjonsområde skal med.** For geometriske rekker oppgis konvergensintervallet (`|k|<1`) eksplisitt; for rasjonale funksjoner utelukkes verdier som gir null i nevner.
7. **Vekting styrer tidsbruk.** Vekting er oppgitt pr. oppgave, og innad i en oppgave teller delspørsmålene likt — jevn innsats lønner seg, akkurat som i ECON1100.

### Hva som skiller karakternivåene (utledet)
- **Bunn:** korrekt derivasjon av standardfunksjonene, riktig oppsett av Lagrange og drøftingskjeden, riktig bruk av finansformlene på enkle tilfeller.
- **Midt:** komplett Lagrange-løsning (eliminert `λ`, funnet `x*,y*`), korrekt `AC−B²`-klassifisering, riktig håndtering av annuitet vs. serielån og forskudds-/etterskuddsvis, korrekt geometrisk rekke med konvergensvilkår.
- **Topp:** globale vs. lokale ekstrempunkt korrekt begrunnet (sammenlikne funksjonsverdier), asymptoter og enhetskostnad, elastisitet med parameterbestemmelse, grenseverdi med L'Hôpital, komparativ statikk i Lagrange (endring i pris/inntekt), og gjennomført økonomisk tolkning.

---

## 5. Typiske feil

Utledet av det oppgavene er bygget for å avsløre og det fasitene er nøye med:

1. **Feil derivasjonsregel** — glemme kjerneregelen på sammensatte funksjoner (`e^{(2x+7)³}`, `ln(x√(x+1))`) eller anvende produkt-/kvotientregel feil.
2. **Glemme integrasjonskonstanten** ved antiderivering, eller ikke bruke faste kostnader til å bestemme den (`K(0)=F ⇒ C=F`).
3. **Ikke sette opp fortegnsskjema** i drøftingen — bare påstå topp/bunn uten å vise fortegnsanalyse; blande topp- og bunnpunkt.
4. **Forveksle vendepunkt med `f''=0`** — vendepunkt krever *fortegnsskifte* i `f''`, ikke bare nullpunkt.
5. **Stoppe ved lokale ekstrempunkt** når oppgaven ber om **globale** — glemme å sammenlikne funksjonsverdiene i kandidatpunktene (og glemme at det kan være flere globale minimum, som `x=±1` i H2025 2a).
6. **Finansmatematikk-fallgruver:** blande annuitetslån (fast terminbeløp) og serielån (fast avdrag); feil på forskudds- vs. etterskuddsvis innbetaling; bruke sluttverdiformel der nåverdi kreves (og omvendt); feil antall terminer.
7. **Glemme konvergensvilkåret** for geometrisk rekke (bruke `a/(1−k)` uten å sjekke `|k|<1`).
8. **Klassifisere feil i to variable** — regnefeil i `AC−B²`, eller trekke feil konklusjon om fortegnet (sadel vs. ekstremum).
9. **Implisitt derivasjon:** glemme at `y=y(x)` (kjerneregel på `y`-ledd), eller bytte om horisontal (teller `=0`) og vertikal (nevner `=0`) tangent.
10. **Lagrange:** ikke eliminere `λ` ryddig, kaste bort røtter uten begrunnelse, eller glemme å sette resultatet inn i bibetingelsen.
11. **Ikke tolke tallene** — grensekostnad, elastisitet og komparativ statikk skal oversettes til ord der oppgaven ber om det.

---

## 6. Prioritering for boka

### Nivå 1 — må beherskes perfekt (bærer eksamen)
1. **Derivasjonspakken** — alle regler (potens/produkt/kvotient/kjerne, `e^x`, `ln x`, `a^x`, rot), raskt og feilfritt. ~100 % frekvens, billigst poeng.
2. **Endimensjonal funksjonsdrøfting** — full kjede: `f'`→fortegnsskjema→topp/bunn→`f''`→vendepunkt→konveks/konkav→globale ekstrempunkt→skisse. ~90 %.
3. **Finansmatematikk** — sluttverdi, oppsparingsannuitet, annuitetslån, serielån, nåverdi; forskudds-/etterskuddsvis; løse for antall terminer. ~90 %. **Fagets signatur — må ha eget, grundig kapittel.**
4. **Lagranges metode** — oppsett → FOB → eliminér `λ` → bibetingelse → `x*,y*`; både maksimering (nytte, Cobb-Douglas) og minimering (kostnad). ~85 %.
5. **Implisitt derivasjon** — `y'`, horisontal/vertikal tangent, skjæringspunkt. ~55 %, men fast og enkel å score på.

### Nivå 2 — må kunne (gir 15–25 % når de kommer)
6. **Partielle deriverte + fri 2-variabel optimering** — 1./2. orden, `AC−B²`-klassifisering (sadel/min/maks). ~55 %.
7. **Algebra og likninger** — forenkle/faktorisere, løse eksponential-/logaritme-/rasjonale/2.gradslikninger, definisjons-/verdimengde, rett linje. ~65 %.
8. **Geometrisk rekke** — kvotient, konvergensvilkår, sumformel; koblingen sparing = geometrisk rekke. ~35 %.

### Nivå 3 — bør dekkes (lav/økende frekvens, karakterdifferensiering)
9. **Integrasjon** — antiderivert (kostnadsfunksjon fra grensekostnad, integrasjonskonstant fra faste kostnader), bestemt integral/areal. ~25 %.
10. **Elastisitet** — `Elx f`, beregning/parameterbestemmelse, tolkning. ~20 %.
11. **Grenseverdier / L'Hôpital**, **asymptoter** (enhetskostnad), **eksponentiell vekst/depresiering** (halveringstid). ~15–20 % hver.

### Prognose for neste eksamen (kalibrert mot H2025-malen)
5–6 mellomregnings-oppgaver, vekting oppgitt pr. oppgave, 4 timer. Svært sannsynlig:
- **En derivasjonspakke** (4–6 funksjoner, minst én kjerneregel, én kvotient, én `e^x`/`ln`).
- **En funksjonsdrøfting** (polynom av 3.–4. grad: stasjonær/vendepunkt/konveksitet, evt. globale ekstrempunkt eller tangent).
- **En finansoppgave** (sparing/oppsparingsannuitet eller annuitets-/serielån, evt. med nåverdi).
- **En Lagrange-oppgave** (maks nytte eller min kostnad, ofte Cobb-Douglas).
- **En flervariabel-oppgave** (partielle deriverte + `AC−B²`-klassifisering) **eller** implisitt derivasjon.
- **En «blandet» oppgave** med likning/algebra + evt. grenseverdi, elastisitet, integral eller geometrisk rekke.

Boka bør derfor bygges som **fem søyler**: (1) algebra + derivasjon, (2) funksjonsdrøfting i én variabel, (3) **følger/rekker + finansmatematikk**, (4) flervariabel-kalkulus (partielle deriverte + fri optimering), (5) betinget/implisitt (Lagrange + implisitt derivasjon + elementær integrasjon) — med Cobb-Douglas som gjennomgående funksjonsform og eksplisitte broer framover til SOK1002.

---

## 7. Pensum, notasjon og kildeankere

### Formelsamling og pensum
- **Formelsamling (tillatt hjelpemiddel):** Knut Sydsæter, Arne Strøm & Peter Berck, *Matematisk formelsamling for økonomer* (4. utg., Gyldendal Akademisk, 2006) — oppgitt på alle forsider. Studenten forventes å slå opp finans-, derivasjons- og optimeringsformler her, så boka bør trene *bruk* av formelsamlingen, ikke pugging.
- **Kalkulator:** enkel, ikke-programmerbar (Casio fx-82-serien, Citizen SR-270X, HP 30S); fra 2025 også finanskalkulatorer (Casio FC-100V, TI BAII Plus). Kode C (eldre) / kode B–D (H2025).
- **Pensumbok:** ikke oppgitt eksplisitt på forsidene; emnet følger Sydsæter-tradisjonen (typisk *Matematisk analyse* / *Matematikk for økonomisk analyse*). Boka kan bygges direkte på temamenyen i denne analysen uten å binde seg til én lærebok.

### Notasjonskonvensjoner boka bør speile
- **Derivasjon:** `f'(x)`, `f''(x)`; partielle `f'x, f'y, f''xx, f''xy, f''yy` (og `∂/∂x`-notasjon likestilt).
- **Klassifisering i to variable:** `A=f''xx`, `B=f''xy`, `C=f''yy`, kriterium **`AC−B²`** (NTNU-konvensjon; tilsvarer Hesse-determinanten `D` i ECON1100).
- **Elastisitet:** `Elx f = (x/f)·f'(x)`.
- **Lagrange:** `F(x,y)=f(x,y) − λ(g(x,y)−c)`, multiplikator `λ`; `x*, y*` for optimale verdier.
- **Finans:** `K0` startbeløp, `Kt=K0(1+r)^t` sluttverdi, `r` rente pr. termin, `n` antall terminer, `D` fast innbetaling/terminbeløp; annuitetslån (fast terminbeløp) vs. serielån (fast avdrag); nåverdi av betalingsstrøm.
- **Optimeringsfunksjoner:** Cobb-Douglas `f(x,y)=A·x^a·y^b` som standardcase.

### Kildeliste
Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/SOK1001/`.

- **Løsningsforslag/sensorveiledninger lest (fasit):** «SØK1001 H25 Sensorveiledning.pdf» (H2025, fullstendig ren tekst — dekker alle 6 oppgaver med tallsvar og metode); «SØK1001 sensurveiledning.pdf» (= LF Søk1001 V2025, via OCR); «SØK1001 sensorveiledning h24.pdf» (H2024, via OCR); «SØK1001sensorveiledning_søk1001_v15.pdf» (V2018-veiledning, via OCR). Delvis/bildebaserte og ikke fullt lesbare: «Fasit SØK1001, V21.pdf», «SØK1001 LF_H23.pdf», «SØK1001 Losningsforslag_finale_H22.pdf», «fasit_exam_søk1001_v22.pdf».
- **Oppgavesett lest grundig (maskinlesbar tekst):** H2025, V2025, H2024, V2023, H2023, V2022, H2022, V2020, H2020, H2019, H2018, H2017, H2016, V2019, V2017, V2016, V2015, V2018 («Vår-18»).
- **Oppgavesett skummet (eldre, for struktur):** H2014, H2011, H2010, H2009, H2008, V2009, V2010, V2011, V2012.

**Merknader om kildene:**
- **Fasit-tilgang:** H2025-sensorveiledningen er komplett og ren tekst og er hovedkilden for metode- og sensorkrav; V2025 og H2024 er verifisert via OCR (håndskrevne/skannede fasiter — matematiske uttrykk er delvis støyete i OCR, men løsningsstrukturen er lesbar). Flere fasiter (V2021, H2022, H2023, V2022) er bildebaserte og ga lite tekst; profilen er likevel godt dekket fordi selve oppgavesettene er lesbare og strukturen er svært stabil.
- **Formatmerknad:** Inspera-flervalgssettene (2022–2024) gir «Velg ett alternativ»-tekst uten selve alternativene i tekstuttrekket; oppgavenes *tema* og *vekting* er likevel klart lesbare og er registrert. Boka kalibreres mot mellomregnings-formatet (2008–2020 + 2025-malen).
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk, standardformler og standardmetoder er faglig allemannseie uten verkshøyde.
