# Eksamensanalyse: SØK3007 / SOK3007 Skatt, beslutningsatferd og økonomisk politikk (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok (fase 1). Bygger på NTNUs eksamensarkiv i `~/Desktop/Eksamner/NTNU/SOK3007/` — 28 filer som dekker perioden **vår 2015 til vår 2024**. Arkivet inneholder oppgavesett fra V/H 2015–2024 (med enkelte hull) og **åtte lesbare sensorveiledninger/sensurveiledninger** (H2015 og V2016 er kun til stede som skann; lesbare er H2016, V2019, H2020, H2022, V2023, H2023 + korte varianter). Siste ~8 år (2017–2024) er lest grundig; eldre sett skummet for struktur- og temabekreftelse. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller sensorformuleringer. Modelligninger, faglige fakta, standardnotasjon og modellsammenhenger er faglige fakta uten verkshøyde. Analysen er kvantitativ der kildene tillater det.
>
> **Kildemerknad om leselighet:** De aller fleste oppgavesettene og de nyere sensurveiledningene er **tekstbaserte** og gir god tekst med `pdftotext` — dette er et vesentlig bedre kildegrunnlag enn i søsteremnene SØK3004/SØK3001, der fasitene stort sett er håndskrevne skann. Følgende filer er derimot **rene skann** (tomt/nær tomt fra `pdftotext`, hoppet over): `SØK3007-sensorveiledningH-15.pdf` og duplikatene `(1)`/`(2)` (5 tegn hver) og **`SØK3007 Sensurveiledning eksamen V24.pdf`** (4,3 MB, 8 tegn — bildebasert skann; V2024-profilen hviler derfor på selve V2024-oppgavesettet, som er tekstbasert og lest fullt ut). Den skannede V2016-sensuren mangler tekst, men V2016-oppgavesettet er lest.
>
> **Emnekode-merknad:** Emnet skrives både «SØK3007» (som i arkivet) og «SOK3007» (offisiell kode). Samme emne. Fullt navn: *Skatt, beslutningsatferd og økonomisk politikk* (engelsk: *Taxation, Decision Behavior and Economic Policy*), **7,5 studiepoeng**, aktivt masteremne ved Institutt for samfunnsøkonomi, NTNU. Faglærere/oppgavestillere: **Jørn Rattsø** og **Lars-Erik Borge** (Borge er faglig kontakt på forsidene). Pensumbok: **Jean Hindriks & Gareth D. Myles, *Intermediate Public Economics* (2. utgave)** — sensurveiledningene henviser gjennomgående til kapitler i denne (kap. 5, 6, 7, 11, 12, 15, 17, 19, 20). Utvalgte pensumartikler (Sandmo; Mankiw et al.) supplerer skatteteorien.

---

## 0. Kort om emnet + overlapp/avgrensning (les dette først)

SØK3007 er **offentlig økonomi (public economics / offentlig sektors økonomi)** på masternivå: teorien for *hvorfor* det offentlige griper inn, *hvordan* inngrepene bør utformes, og *hva som går galt* i den politiske og byråkratiske beslutningsprosessen. Faget er et rendyrket **teori-/modellfag med regneinnslag** — ikke matematikk (som SØK3004) og ikke økonometri/data (som SØK3001). Studenten skal kunne *stille opp en modell, utlede og tolke førsteordensbetingelser, og drøfte resultatet politisk-økonomisk*. Kjernearkitekturen (fra emnebeskrivelsen og bekreftet av oppgavene) er:

- **Markedssvikt som begrunnelse for offentlig inngripen:** kollektive goder (ikke-rivaliserende/ikke-ekskluderbare), eksternaliteter, klubbgoder og trengsel (congestion), allmenningens tragedie.
- **Skatteteori:** skattens vridningseffekter og effektivitetstap (dødvektstap, DWL), optimal vareskatt (Ramsey-regelen og invers elastisitetsregel), skatt vs. lump-sum, effektivitet mot fordeling, skatteunndragelse.
- **Kollektiv beslutningstaking (public choice):** medianvelgerteoremet, Downs' to-partimodell (konvergens/divergens), flertallsvalg, rent-seeking (tilkarringsvirksomhet).
- **Organisering og insentiver i offentlig produksjon:** byråkratimodeller (Niskanen), agent-problemet i offentlig sektor, Wagners lov om vekst i offentlig sektor.
- **Fiskal føderalisme:** forholdet mellom forvaltningsnivåer, statlige overføringer, myke vs. harde budsjettskranker, og **skattekonkurranse** på mobile skattegrunnlag (kapital).
- **Fordeling:** Gini-koeffisienten, sosiale velferdsfunksjoner, omfordeling.

### Overlapp og avgrensning mot UiO-master og mot søsteremnene

Det finnes **ingen dedikert public economics-analyse i `docs/hoyskole-boker/` ennå** (`grep`-sjekk over mappa treffer bare `sok3001`/`sok3004` blant NTNU-emnene og ingen `econ46*`/`offentlig`/`skatt`-analyse). De nærmeste UiO-slektningene er derfor konseptuelle, ikke allerede analyserte:

| Emne | Relasjon til SØK3007 |
|---|---|
| **ECON4620-familien (UiO, «Offentlig økonomi / Public Economics»)** | Nærmeste master-motstykke i innhold: kollektive goder, eksternaliteter, optimal beskatning, fordeling, offentlig produksjon. Samme fagtradisjon (offentlig sektors økonomi). Bør bli den primære UiO-krysshenvisningen når/hvis en slik analyse skrives. |
| **ECON3610/4610 (UiO, «Samfunnsøkonomisk lønnsomhet og økonomisk politikk / velferd»)** | Beslektet på velferdsteori-siden: samfunnsøkonomisk effektivitet, velferdsfunksjoner, markedssvikt og korrigerende inngrep. Overlapper i *normativ* apparat (effektivitet vs. fordeling, Samuelson-betingelsen). |
| **ECON1210 / ECON3010 (UiO, mikro + anvendt økonomisk analyse)** | `docs/hoyskole-boker/econ3010/` er den nærmeste *eksisterende* analysen i ånd: et drøftings-/anvendelsesfag der mikroteori brukes på normative politikkspørsmål. SØK3007 er tyngre modellforankret enn ECON3010 (det kreves eksplisitt utledning), men delen om **effektivitet/fordeling/eksternaliteter/kollektive goder** deler tankegods med ECON1210-mikroen. |
| **ECON4260 (UiO, atferdsøkonomi)** | Kun perifert relevant. «Beslutningsatferd» i SØK3007-tittelen betyr *kollektiv/politisk* beslutningsatferd (public choice: velgere, partier, byråer), **ikke** individuell atferdsøkonomi (prospektteori, tidsinkonsistens). Ikke forveksle de to. |

**Skille mot de to NTNU-søsteremnene (viktig):**
- **SØK3004** (`../sok3004/`) er *matematikk for økonomer* — integrasjon, lineær algebra, differensiallikninger, optimering. SØK3007 *bruker* matematikk (Lagrange, FOC, komparativ statikk) men er et **innholdsfag** om offentlig sektor, ikke et regneteknikkfag.
- **SØK3001** (`../sok3001/`) er *økonometri* — data, regresjon, IV, panel. SØK3007 har **ingen** data/estimering; det er ren teori + modellregning.

**Konsekvens for boka:** SØK3007-boka skal bygges som en **offentlig-økonomi-lærebok** rundt Hindriks & Myles' arkitektur, med tyngde på at studenten kan (a) sette opp de tilbakevendende modellene (kollektivt gode med Nash/Samuelson/Lindahl, medianvelger med kopp-skatt vs. inntektsskatt, DWL/Ramsey, skattekonkurranse), (b) utlede og *tolke* førsteordensbetingelsene, og (c) drøfte effektivitet mot fordeling. Boka bør forutsette mikro- og optimeringsgrunnlaget (SØK3004-nivå Lagrange) og kryssreferere dit for teknikk, men bruke sin egen plass på modellene og drøftingen.

---

## 1. Eksamensform og utvikling

### Form
- **Skriftlig skoleeksamen, 4 timer** (09:00–13:00), karakter A–F, **7,5 studiepoeng**. Digital i **Inspera**; håndtegnede figurer/utledninger digitaliseres og lastes opp som filvedlegg (30 min ekstra tid er avsatt kun til digitalisering/opplasting).
- **Hjelpemidler — historisk variasjon som er verdt å merke seg:**
  - **Kode C** (de eldre skoleeksamenene, f.eks. H2015, V2016, H2016): godkjent kalkulator **+ Sydsæter/Strøm/Berck matematisk formelsamling for økonomer / *Economists' Mathematical Manual***.
  - **Kode A** (V2021, `3007 (1).pdf`: «Alle hjelpemidler tillatt») og de rene **hjemme-/koronaeksamenene** (H2020).
  - **Kode H** (dagens ordinære form, jf. oppdraget): **ingen trykte/skrevne hjelpemidler, kun kalkulator.** Da må modelloppsett, standardresultater og utledningsteknikk sitte i hodet.
  - Praktisk konsekvens: boka bør trene studenten til å **reprodusere modellene fra grunnen** (Lagrange-oppsett, FOC, Nash/Samuelson/Lindahl-sammenligning, DWL-utledning) uten formelstøtte, siden dagens kode er H.
- **Målform:** oppgaveteksten gis på **bokmål og nynorsk** (parallelt i de fleste settene; enkelte eldre sett også med engelsk terminologi).
- **Faste instruksjoner:** «Gjør dine egne antagelser og presiser hvilke forutsetninger du har lagt til grunn», og «**Gode forklaringer og tolkninger belønnes på alle oppgaver**» — den siste går igjen ordrett-nær i nesten alle nyere sett og er et sterkt signal om at *tolkning*, ikke bare regning, gir uttelling.

### Struktur — fra fire småoppgaver til to store

Formatet har utviklet seg tydelig over ti år, fra mange korte oppgaver mot **få, store, sammensatte oppgaver**:

| Sett | Struktur / vekting | Merknad |
|---|---|---|
| H2015 | 4 oppgaver à 25 % (pendler-eksternalitet · Gini/velferdsfunksjon · flat tax/median · …) | Kode C, 4 t |
| V2016 | 4 oppgaver à 25 % (kollektivt gode/gratispassasjer · pendler · … · …) | Kode C |
| H2016 | 3 oppgaver (35/…/…): median m/inntektsskatt · optimal vareskatt · skatteunndragelse | Kode C; sensur lesbar |
| V2017 | 3 oppgaver (30/40/30): kollektivt gode desentralisert/sentralisert · parti-konvergens/divergens · internpris/overskuddsskatt | |
| H2017 | 2 oppgaver, likt: byrå/informasjonsfordel (agent) · skattekonkurranse | |
| V2018 | 2 oppgaver, likt: skattekonkurranse mellom kommuner · byråkratimodell | |
| H2018 | 2 oppgaver, likt: Ramsey-regel · Wagners lov + byråkrati | |
| V2019 | 2 oppgaver, likt: Ramsey-regel · Wagners lov + Niskanen | Sensur lesbar |
| H2019 | 2 oppgaver (40/60): allmenningens tragedie (skatt/kvote) · optimal vareskatt + fordeling | |
| **V2020** | 2 oppgaver, likt: skattekonkurranse · skattebyrde/effektivitet+fordeling | Kortfattet oppgavesett |
| **H2020** | **3 oppgaver, likt (hjemmeeksamen)**: rent-seeking u/usikkerhet + monopoltap · kollektivt gode/gratispassasjer · myke budsjettskranker | Korona: mindre detaljerte utledninger kreves; intuisjon belønnes |
| V2021 | 3 oppgaver, likt: median (kopp-skatt vs. inntektsskatt) · pendler-eksternalitet + avgift · optimal indirekte skatt vs. lump-sum | Kode A |
| V2022 | 2 oppgaver (40/60): median (kopp vs. inntektsskatt) · skattekonkurranse + politisk styringssvikt | |
| H2022 | 2 oppgaver, likt: kollektivt gode (Nash/Samuelson/Lindahl) · DWL + Ramsey/invers elastisitet + fordeling | |
| V2023 | 2 oppgaver à 50 %: Downs-konvergens/divergens · klubbgode/to-delt tariff (alpin) | |
| H2023 | 2 oppgaver (⅓ / ⅔): agent-problem i offentlig sektor · skattekonkurranse (samarbeid, «size matters») | |
| **V2024** | 2 oppgaver, likt: DWL + Ramsey + fordeling · median (kopp vs. inntektsskatt) | Sensur kun som skann |

**Konstanter på tvers av settene:**
1. **To hovedbein alltid til stede:** ett bein om **kollektive goder / eksternaliteter / offentlig produksjon / beslutningsteori**, og ett bein om **skatt / skattekonkurranse / fordeling**. De to store oppgavene i de nyere settene fordeler seg nesten alltid slik.
2. **De store oppgavene er sammensatte:** en typisk oppgave har 3–4 deloppgaver (a–d) som bygger på hverandre — sett opp modell → utled FOC → sammenlign med effektiv løsning → drøft/utvid.
3. **«Vis at …» + «tolk/forklar/drøft» i samme oppgave.** Rene utledningsoppgaver kombineres alltid med et tolknings-/drøftingsledd.
4. **Skattekonkurranse (fiskal føderalisme) og optimal vareskatt (Ramsey/DWL) er de to mest gjentatte skatte-temaene**, og medianvelger-modellen er den mest gjentatte public choice-modellen.

---

## 2. Temafrekvens

Score = anslått andel av de ~17 lesbare settene 2015–2024 der temaet inngår som deloppgave eller mer, supplert med de åtte lesbare sensurveiledningene. Delt i de to hovedsporene faget alltid prøver, pluss beslutningsteori/organisering.

### 2A. Skatt, effektivitet og fordeling

| Tema | Gjenganger-score | Kommentar / pensumanker |
|---|---|---|
| **Skattekonkurranse på mobilt skattegrunnlag** (kommuner/land, «for lav» kildeskatt på kapital) | **~55 %** | Den hyppigste enkeltmodellen på skattesiden: V2018, H2017, V2020, V2022, H2023 (+ «Strategic»/«Competitive Behavior», «Size matters», kap. 20.2). Reaksjonskurver, figur 20.2, samarbeid mellom land. |
| **Optimal vareskatt: Ramsey-regelen** (relative kvantumsendringer like langs kompensert etterspørsel) | **~45 %** | H2016, H2018, V2019, H2019, H2022, V2024. Kap. 15.5.2 + Sandmos artikkel. |
| **Invers elastisitetsregel** (uelastiske varer beskattes hardest) | **~35 %** | Ofte alternativ/forenkling til Ramsey (kap. 15.5.1/15.1.1). |
| **Dødvektstap ved beskatning (DWL)** — utledning `DWL = ½·ε·(X₀/p)·t²` | **~30 %** | H2022, V2024 (+ figur med ulike elastisiteter). «Lave skatter på brede grunnlag». Kap. 15.2. |
| **Effektivitet mot fordeling** i skattedesign (uelastiske = nødvendighetsgoder for lavinntekt) | **~45 %** | Fast drøftingsledd på skatteoppgavene; motvirkes av (progressiv/optimal) inntektsskatt (Mankiw et al., «Lesson 6»). |
| **Skatt vs. lump-sum / hvorfor indirekte skatt er vridende** | ~20 % | V2021 oppg. 3b, H2019. |
| **Skatteunndragelse** (forventet nytte, `p ≥ 1/(1−F)`, tredjepartsrapportering, normer) | ~15 % | H2016 oppg. 3, kap. 17.3. |
| **Gini-koeffisient / sosiale velferdsfunksjoner / omfordeling** | ~15 % | H2015 oppg. 2 (Gini-invariant omfordeling, velferdsfunksjon). |

### 2B. Markedssvikt: kollektive goder, eksternaliteter, klubbgoder

| Tema | Gjenganger-score | Kommentar / pensumanker |
|---|---|---|
| **Kollektivt gode: privat forsyning (Nash) vs. effektiv forsyning (Samuelson) + gratispassasjer** | **~40 %** | H2022, V2017, H2020, V2016. Reaksjonsfunksjoner, symmetrisk Nash-likevekt, undertilbud pga. free-riding. Kap. 6.2–6.4. |
| **Lindahl-løsningen** (kostnadsdeling etter marginal betalingsvilje; effektiv) | ~20 % | H2022 c/d, kap. 6.6. Sterkere preferanse ⇒ høyere kostnadsandel. |
| **Eksternalitet: pendler-/kømodell** (bil vs. tog/buss, `C(x)=a+bx`, privat vs. samfunnsoptimal andel, Pigou-avgift) | **~35 %** | H2015, V2016, V2021 — en signaturoppgave. Optimal avgift = ekstern marginalkostnad × tidsverdi. |
| **Definisjon av kollektivt gode** (ikke-rivaliserende/ikke-ekskluderbart; klubbgoder; trengsel) | **~30 %** | H2020, H2022, kap. 6.2. Congestion/klubbgoder trekker opp. |
| **Klubbgode / optimal klubbstørrelse / to-delt tariff** | ~15 % | V2023, kap. 7.3.2–7.3.3 (alpinanlegg: dags- vs. sesongkort). |
| **Allmenningens tragedie** (skatt og kvote som virkemiddel) | ~10 % | H2019 oppg. 1. |

### 2C. Kollektiv beslutning, byråkrati og fiskal føderalisme

| Tema | Gjenganger-score | Kommentar / pensumanker |
|---|---|---|
| **Medianvelgerteoremet** (forutsetninger: én dimensjon, entoppede preferanser; kopp-skatt vs. proporsjonal inntektsskatt; høyreskjev fordeling) | **~45 %** | H2016, V2021, V2022, V2024 — den mest gjentatte public choice-modellen. Skattepris `yᵢ/(N·ȳ)`; kap. 11 / «A Political Model» 5.3.4. |
| **Downs' to-partimodell: konvergens vs. divergens** (usikkerhet om velgerpreferanser, verdi av regjeringsmakt) | **~25 %** | V2017, V2023, H2023-sensur. Kap. 11.8.1 (konvergens) og 11.8.2 (divergens). |
| **Byråkrati / offentlig sektor «for stor»: Niskanen-modellen** (budsjett til sponsors nytte = 0; allokerings- men ikke kostnadsineffektivitet) | **~30 %** | H2017, V2018, H2018, V2019. |
| **Wagners lov** (inntektselastisitet > 1 forklarer vekst i offentlig sektor) | ~20 % | H2018, V2019. |
| **Agent-problemet i offentlig sektor / asymmetrisk informasjon om kostnader** (Bureaucracy 5.4.1 / Government Agency 5.4.5) | ~20 % | H2017, H2023. Naiv first-best-løsning svikter når agenten kjenner egne kostnader. |
| **Fiskal føderalisme: myke vs. harde budsjettskranker** (statlige overføringer, uheldige låneinsentiver) | ~20 % | H2020, H2023-relatert, kap. 19.6 (spill stat–kommuner). |
| **Rent-seeking / tilkarringsvirksomhet** (probabilistic vs. deterministic game; sløsing øker med antall aktører; monopoltap) | ~10 % | H2020, kap. 12.3. |

**Viktigste funn:**
1. **Faget har to garanterte hovedbein.** Nesten hvert nyere sett har én stor oppgave på **markedssvikt/beslutning/organisering** (kollektivt gode, eksternalitet, median, byrå, føderalisme) og én på **skatt** (skattekonkurranse, Ramsey/DWL, fordeling). Boka må dekke begge like grundig.
2. **Fem kjernemodeller går igjen og bør kunnes «på rygg-margen»:** (i) kollektivt gode Nash↔Samuelson↔Lindahl, (ii) medianvelger med kopp-skatt vs. proporsjonal inntektsskatt, (iii) DWL + Ramsey/invers elastisitet, (iv) skattekonkurranse på mobilt grunnlag (reaksjonskurver), (v) pendler-/køeksternalitet med Pigou-avgift.
3. **Utledning + tolkning i par.** Ingen ren regneoppgave: hver «vis at …» følges av «forklar/tolk/drøft». Sensuren belønner *intuisjonen* bak resultatet (hvorfor undertilbud, hvorfor konvergens, hvorfor lav skatt i lite land).
4. **Effektivitet mot fordeling er den tverrgående drøftingsaksen** — den dukker opp både i skattedesign (Ramsey rammer nødvendighetsgoder), i medianvelger (kopp-skatt vs. inntektsskatt) og i velferdsteori (Gini/velferdsfunksjon).
5. **Skattekonkurranse er den mest robuste enkeltprognosen** på skattesiden; **medianvelger** på beslutningssiden.

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen, med typisk plassering og krav. Alle eksempler er **omskrevet**.

### A. Kollektivt gode: privat (Nash) vs. effektiv (Samuelson) forsyning + Lindahl
- **Krav:** Sett opp konsumentens budsjett (`xʰ = M − gʰ`) og nyttefunksjon (typisk `Uʰ = log xʰ + α log G`, `G = g₁ + g₂`). Maksimer mht. eget bidrag → **reaksjonsfunksjon** (fallende i den andres bidrag). Finn symmetrisk **Nash-likevekt**. Maksimer så velferdsfunksjonen `W = U₁ + U₂` for den **effektive** allokeringen (Samuelson-betingelsen: sum av marginale betalingsviljer = marginalkostnad). Vis at Nash gir **undertilbud** pga. **gratispassasjerproblemet**. **Lindahl:** individuelle priser `τ` og `1−τ` etter marginal betalingsvilje ⇒ effektiv; likere kostnadsdeling ved like preferanser, høyere andel på den med sterkere preferanse.
- **Omskrevet eksempel:** «To identiske konsumenter kjøper et ikke-rivaliserende gode `G` i marked til pris 1. Utled konsument 1s reaksjonsfunksjon, finn Nash-likevektens samlede kjøp, sammenlign med den velferdsmaksimerende løsningen, og forklar avviket.»

### B. Eksternalitet: pendler-/kømodell med Pigou-avgift
- **Krav:** Reisetid `C(x) = a + b·x` (bil) mot fast/lineært kollektivalternativ. **Privat likevekt:** individer minimerer egen tid ⇒ likevekt der reisetidene er like (marginal beslutning). **Samfunnsoptimal andel:** minimer *total* (gjennomsnittlig) reisetid — internaliserer at flere bilister øker alles tid. Forklar **eksternaliteten** (egen bilkjøring øker andres reisetid). **Implementering:** en avgift lik den eksterne marginalkostnaden (× tidsverdi/timelønn) flytter privat likevekt til optimum.
- **Omskrevet eksempel:** «Bilreisetiden er `C(x)=20+50x` og toget tar 50 min. Finn den frie (private) andelen bilister og den andelen som minimerer gjennomsnittlig reisetid. Hvilken avgift implementerer optimum når tidsverdien er 300 kr/time?»

### C. Medianvelger: kopp-skatt vs. proporsjonal inntektsskatt
- **Krav:** Velgernes preferanser over privat konsum og kollektivt gode (`Uᵢ = α log G + (1−α)log xᵢ`, eller kvasilineær `xᵢ + b(G)`). Utled velger `i`s **ønskede `G*`** under (a) kopp-skatt (lik `T` for alle) og (b) proporsjonal inntektsskatt (`Gᵢ* = α N ȳ` e.l.). Vis at ønsket `G` avhenger av **skatteprisen** `yᵢ/(N·ȳ)`. **Begrunn medianvelgerteoremet:** budsjettbetingelsen reduserer (t,G) til én dimensjon; preferansene er entoppede (konkav nytte i `G`). Finn den politiske likevekten (medianvelgeren). Ved **høyreskjev inntektsfordeling** (median < gjennomsnitt): sammenlign utfallene og drøft om løsningen er Pareto-/samfunnsøkonomisk effektiv.
- **Omskrevet eksempel:** «Med `Uᵢ = α log G + (1−α) log xᵢ` og kopp-skatt, vis at `Gᵢ* = α N yᵢ`. Begrunn at medianvelgerteoremet gjelder, finn likevekten, og sammenlign med utfallet under proporsjonal inntektsskatt når fordelingen er høyreskjev.»

### D. Dødvektstap + optimal vareskatt (Ramsey / invers elastisitet) + fordeling
- **Krav:** For perfekt elastisk tilbud og fallende etterspørsel, utled **effektivitetstapet** `DWL = ½·ε·(X₀/p)·t²` og tolk: DWL øker med etterspørselselastisiteten og med *kvadratet* av satsen ⇒ «lave skatter på brede grunnlag». **Optimal design (kun effektivitet):** **invers elastisitetsregel** (uelastiske varer beskattes hardest) eller **Ramsey-regelen** (like relative kvantumsreduksjoner langs kompensert etterspørsel; Ramsey trekker mer enn invers elastisitet fordi den ikke forutsetter uavhengig etterspørsel). **Fordeling:** uelastiske varer er ofte nødvendighetsgoder for lavinntektshushold ⇒ konflikt effektivitet/fordeling; kan motvirkes ved progressiv/optimal inntektsskatt (sett avgifter etter effektivitet, fordel via inntektsskatt).
- **Omskrevet eksempel:** «Utled `DWL = ½·ε·(X₀/p)·t²` for en enhetsavgift, tolk uttrykket, og drøft hvordan Ramsey-regelen bør modifiseres av fordelingshensyn.»

### E. Skattekonkurranse (fiskal føderalisme)
- **Krav:** Forklar **skattekonkurranse**: mobilt skattegrunnlag (kapital) flykter til lavskatteregioner ⇒ hver kommune/hvert land setter «for lav» skatt fordi den ikke internaliserer at skattegrunnlaget den tiltrekker seg forsvinner fra andre (fiskal eksternalitet). Presenter modellen («Strategic»/«Competitive Behavior», kap. 20.2): utled og forklar **reaksjonskurver** (figur 20.2), finn likevekten, vis at den gir underforsyning av offentlige goder. **Utvidelser:** kan **samarbeid mellom land** begrense uønsket konkurranse? **«Size matters»** (kap. 20.2.3): små land setter lavere skatt enn store og er *ikke* tjent med samarbeid (jf. Irlands lave selskapsskatt) ⇒ vanskeligere å koordinere.
- **Omskrevet eksempel:** «Vis med en modell for skattekonkurranse mellom to kommuner hvordan skatt på et mobilt grunnlag blir for lav, og drøft om og hvordan koordinering kan rette opp underforsyningen.»

### F. Byråkrati / offentlig sektor «for stor» (Niskanen + Wagner)
- **Krav:** **Niskanen:** byrået har informasjonsfordel og maksimerer budsjettet opp til der sponsors netto nytte = 0 ⇒ produksjon *over* det effektive (der grensenytte = grensekostnad); allokeringsineffektivitet, men ikke nødvendigvis kostnadsineffektivitet. **Wagners lov:** offentlig sektor vokser fordi de tjenestene det offentlige produserer har **inntektselastisitet > 1**. Sammenlign byråets størrelse med den samfunnsøkonomisk effektive.
- **Omskrevet eksempel:** «Forklar hvordan et budsjettmaksimerende byrå kan gjøre offentlig sektor for stor, og sammenlign med den effektive produksjonen der grensenytte = grensekostnad.»

### G. Kollektiv beslutning: Downs' to-partimodell (konvergens/divergens)
- **Krav:** **Konvergens (11.8.1):** to partier flytter mot medianposisjonen; resultatet holder *uavhengig* av om partiene bryr seg om politikken, fordi det å ligge nærmere medianen gir både valgseier og en politikk nærmere egen ideal. Forutsetninger: troverdige løfter, ingen usikkerhet om velgerne, én dimensjon, entoppede preferanser. **Divergens (11.8.2):** når partiene *ikke* kjenner medianvelgerens preferanser — sett opp partienes optimeringsproblem, utled FOC, finn Nash-likevekten; mer usikkerhet ⇒ større divergens; høyere verdi av regjeringsmakt ⇒ likere plattformer.
- **Omskrevet eksempel:** «Vis at to partier konvergerer mot medianvelgeren uansett om de bryr seg om politikken, og modifiser modellen så den forklarer divergens.»

### H. Agent-problem / asymmetrisk informasjon i offentlig produksjon
- **Krav:** Velger/politiker (prinsipal) kjenner bare sannsynlighetsfordelingen for byråets/agentens kostnader; agenten kjenner dem selv. Vis at den «naive» first-best-løsningen svikter under asymmetrisk informasjon, og utled/forklar den andre-beste kontrakten (Bureaucracy 5.4.1 eller Government Agency 5.4.5).
- **Omskrevet eksempel:** «Analyser agent-problemet i offentlig produksjon når politikeren bare kjenner sannsynlighetsfordelingen for byråets kostnader.»

### I. Fordeling: Gini og velferdsfunksjoner
- **Krav:** Definer Gini-koeffisienten; gi en omfordeling som *ikke* endrer Gini; beskriv en sosial velferdsfunksjon som er invariant under samme omfordeling. Kobler fordelingsmål til normativ velferdsteori.
- **Omskrevet eksempel:** «Gi et eksempel på en omfordeling mellom tre individer som lar Gini-koeffisienten være uendret, og beskriv en velferdsfunksjon som er forenlig med dette.»

### J. Klubbgode / to-delt tariff, allmenningens tragedie, rent-seeking
- **Krav (klubbgode):** optimal klubbstørrelse med trengselskostnader; to-delt tariff (fast + variabel) for optimal utnyttelse (kap. 7.3). Forklar hvorfor virkelige prismodeller (dags- vs. sesongkort) avviker: heterogene brukere og konkurranse mellom tilbydere. **(Allmenning):** overforbruk av felles ressurs; skatt eller kvote gjenoppretter effektivitet. **(Rent-seeking):** ressurser sløst på å kapre en gevinst; sløsingen øker med antall aktører; anvendes på effektivitetstap ved monopol.

---

## 4. Sensorkrav / vurderingskriterier

Sensurveiledningene i arkivet er **prosatekst med eksplisitt pensumdekning per deloppgave** (henviser til kapittel/figur i Hindriks & Myles og til pensumartiklene). Dette er et rikere og mer eksplisitt vurderingsgrunnlag enn i SØK3004/SØK3001. Kriteriene nedenfor er utledet av de åtte lesbare veiledningene (H2016, V2019, H2020, H2022, V2023, H2023 + korte varianter).

### Faste metaregler
1. **«Gode forklaringer og tolkninger belønnes.»** Denne formuleringen står i nesten alle sett. Et korrekt sluttresultat uten intuisjon/tolkning gir *ikke* full uttelling; en utledning skal alltid ledsages av hva resultatet betyr økonomisk.
2. **Modellforankring kreves.** Sensuren angir konsekvent hvilket kapittel/modell besvarelsen skal bygge på (f.eks. «Pensumdekning er kapittel 12.3.2»). Verbale svar godtas noen steder, men **«formell analyse trekker opp»** går igjen — full uttelling krever eksplisitt oppsett + FOC.
3. **Vis reaksjonskurver/figurer korrekt.** For kollektivt-gode- og skattekonkurransemodellene honoreres riktig figur: at reaksjonskurvene er fallende, at den ene er brattere enn den andre, at figur 20.2 utledes og forklares. «Figurillustrasjon trekker opp.»
4. **Sammenlign alltid med den effektive løsningen.** Poenget i modelloppgavene er avviket: Nash < Samuelson (gratispassasjer), byrå > effektiv størrelse, skattekonkurranse ⇒ for lav skatt. Konklusjonen om *retningen* og *årsaken* til avviket er kjernen.
5. **Forutsetningene skal presiseres.** For medianvelger: én dimensjon + entoppede preferanser, og *begrunn* hvorfor de er oppfylt (budsjettbetingelsen kollapser (t,G) til én dimensjon; nytten er konkav i G). For Downs: troverdige løfter, ingen usikkerhet.
6. **Effektivitet vs. fordeling skal drøftes eksplisitt** der oppgaven inviterer — inkludert poenget om at fordeling helst ivaretas av (progressiv/optimal) inntektsskatt slik at avgifter kan settes etter ren effektivitet (Mankiw «Lesson 6»).
7. **«Ekstra» modeller/analyser trekker opp** uten å være påkrevd: å nevne både Bureaucracy og Government Agency, å presentere risikoaversjon i rent-seeking, å ta med hard budsjettskranke-analysen, å utlede Ramsey i stedet for bare invers elastisitet.
8. **Pensumforankring:** veiledningene henviser eksplisitt til **Hindriks & Myles** (kapittel-/figurnummer) og til pensumartiklene **Sandmo** (normativ beskatningsteori) og **Mankiw et al.** (optimal taxation in theory and practice).

### Hva som skiller karakternivåene (utledet)
- **Bunn (E–D):** kjenner igjen riktig modell og setter den opp; utleder hovedresultatet delvis; gir en verbal, uformell forklaring uten full utledning; nevner effektivitet/fordeling-konflikten uten å presisere.
- **Midt (C):** korrekt modelloppsett med FOC og riktig hovedresultat (reaksjonsfunksjon, Nash- og Samuelson-løsning, `Gᵢ*`, DWL-uttrykket, reaksjonskurvene i skattekonkurranse); riktig figur; begrunner medianvelger-forutsetningene; tolker hovedresultatet.
- **Topp (A/B):** utleder alt formelt og *tolker* konsekvent (skattepris, hvorfor undertilbud, hvorfor konvergens/divergens, «size matters»); tar med **ekstramodellene** som trekker opp; drøfter **effektivitet mot fordeling** presist inkludert inntektsskatt-argumentet; håndterer spesialtilfeller (høyreskjev fordeling, Pareto-effektivitet, sterkere preferanse ⇒ høyere Lindahl-andel, small-country-resultatet); og kobler modellresultatet til virkelighet (selskapsskatt/Irland, alpin dags- vs. sesongkort).

---

## 5. Typiske feil

Utledet av det sensuren fremhever og det oppgavene er konstruert for å avsløre:

1. **Stoppe ved utledningen uten tolkning** — hovedfeilen, gitt at «gode forklaringer og tolkninger belønnes» står i hvert sett.
2. **Bare verbal drøfting der formell analyse kreves** — «formell analyse trekker opp»; ren prosa gir midlere uttelling.
3. **Glemme å sammenligne med den effektive løsningen** — regne ut Nash-likevekten uten å vise at den er *lavere* enn Samuelson-løsningen og forklare gratispassasjerproblemet.
4. **Ikke begrunne medianvelger-forutsetningene** — hoppe rett til «medianvelgeren bestemmer» uten å vise at problemet er endimensjonalt og preferansene entoppede.
5. **Rote med reaksjonskurvene** — feil helning, eller ikke få med at den ene kurven er brattere enn den andre (kollektivt gode), eller ikke utlede reaksjonskurvene i skattekonkurransemodellen.
6. **Forveksle privat og samfunnsoptimal andel** i eksternalitetsmodellen — sette gjennomsnittsminimering lik individuell tidsminimering.
7. **Feil om DWL-uttrykket** — glemme at tapet vokser med *kvadratet* av satsen (⇒ brede grunnlag), eller ikke koble til elastisiteten.
8. **Blande Ramsey og invers elastisitet** — behandle dem som identiske; Ramsey forutsetter ikke uavhengig etterspørsel og «trekker mer opp».
9. **Overse effektivitet–fordeling-konflikten** — eller overse motargumentet om at inntektsskatten kan bære fordelingshensynet slik at avgiftene settes rent effektivt.
10. **Feil retning på skattekonkurranse-resultatet** — ikke få frem at skatten blir *for lav* (fiskal eksternalitet / underforsyning), eller ikke fange «size matters» (lite land velger lav skatt og er ikke tjent med samarbeid).
11. **Byråkratimodellen bakvendt** — påstå at Niskanen-byrået gir *for liten* sektor, eller blande allokerings- og kostnadsineffektivitet.
12. **Ikke presisere egne forutsetninger** som oppgaven ber om.

---

## 6. Prioritering for boka

### Nivå 1 — MÅ beherskes perfekt (avgjør ståkarakteren; høyest frekvens, alltid ett av de to hovedbeina)
1. **Kollektivt gode: Nash (privat) ↔ Samuelson (effektiv) ↔ Lindahl** + gratispassasjer. Reaksjonsfunksjon, symmetrisk likevekt, undertilbud, kostnadsdeling.
2. **Medianvelgermodellen** — ønsket `G*` under kopp-skatt vs. proporsjonal inntektsskatt, skattepris, forutsetninger (endimensjonalitet + entoppethet), politisk likevekt, høyreskjev fordeling.
3. **DWL + optimal vareskatt** — utled `DWL = ½·ε·(X₀/p)·t²`, tolk; Ramsey-regelen og invers elastisitetsregel; effektivitet mot fordeling.
4. **Skattekonkurranse** — mobilt grunnlag, «for lav» skatt, reaksjonskurver (figur 20.2), koordinering, «size matters».

### Nivå 2 — MÅ kunne (avgjør C→A; høy frekvens)
5. **Eksternalitet / pendler-kømodell** med Pigou-avgift (privat vs. samfunnsoptimal andel, optimal avgift).
6. **Byråkrati (Niskanen) + Wagners lov** — offentlig sektor «for stor»; sammenligning med effektiv størrelse.
7. **Downs' to-partimodell** — konvergens (uavhengig av politikkpreferanse) og divergens (usikkerhet, regjeringsverdi).

### Nivå 3 — bør kunne godt (roterer inn regelmessig)
8. **Agent-problemet i offentlig sektor** (asymmetrisk informasjon om kostnader; Bureaucracy / Government Agency).
9. **Fiskal føderalisme: myke vs. harde budsjettskranker** (statlige overføringer, låneinsentiver, kap. 19.6).
10. **Klubbgode / to-delt tariff** (optimal størrelse, trengsel; dags- vs. sesongkort).
11. **Definisjon og typologi av goder** (kollektivt/klubb/congestion) — «gratis» poeng når det spørres.

### Nivå 4 — nice-to-have (sjeldnere, men gir bredde og trekker opp)
12. **Skatteunndragelse** (forventet nytte, `p ≥ 1/(1−F)`, tredjepartsrapportering, normer).
13. **Gini-koeffisient og sosiale velferdsfunksjoner**, omfordeling.
14. **Rent-seeking** (probabilistic/deterministic game, monopoltap) og **allmenningens tragedie** (skatt/kvote).

### Prognose for neste eksamen
Med høy sannsynlighet **to store, sammensatte oppgaver** (likt vektet, eller ⅓ / ⅔), 4 timer, **kode H** (kun kalkulator):
- **Én oppgave fra markedssvikt/beslutning/organisering-beinet:** mest sannsynlig **kollektivt gode (Nash/Samuelson/Lindahl)** eller **medianvelger**, alternativt eksternalitet/pendler, byråkrati eller agent-problem.
- **Én oppgave fra skatte-beinet:** mest sannsynlig **skattekonkurranse** eller **DWL + Ramsey/invers elastisitet + fordeling**.

Hver oppgave vil kombinere **«vis at …» (utledning) med «forklar/tolk/drøft»**, og minst én vil kreve en **figur** (reaksjonskurver, DWL, indifferens/budsjett). Boka bør bygges som **to likestilte hoveddeler** — (I) markedssvikt, kollektiv beslutning og offentlig organisering; (II) skatt, effektivitet og fordeling — med et kort **modell-verktøykapittel** i bunn (Lagrange/FOC, komparativ statikk, konsument- og velferdsteori) og et gjennomgående grep om at **hver modell skal utledes *og* tolkes**, siden kode H krever at alt sitter i hodet.

---

## 7. Pensum / notasjon / kildeankere

### Pensum (fra sensurveiledningene)
- **Hovedbok:** **Jean Hindriks & Gareth D. Myles, *Intermediate Public Economics*, 2. utgave.** Alle sensurveiledninger fra 2016 og framover forankrer besvarelsene i denne, med eksplisitte kapittelhenvisninger: kap. **5** (offentlig produksjon / politisk modell / bureaucracy / government agency), **6** (kollektive goder: definisjon, privat forsyning, effektiv forsyning, Lindahl), **7** (klubbgoder, to-delt tariff), **11** (public choice / medianvelger / Downs), **12** (rent-seeking: probabilistic/deterministic game, risikoaversjon), **15** (skatt: DWL, invers elastisitet, Ramsey), **17.3** (skatteunndragelse), **19.6** (fiskal føderalisme, myke budsjettskranker), **20.2** (skattekonkurranse: competitive/strategic behavior, «size matters»).
- **Pensumartikler:** **Agnar Sandmo**, *Normativ beskatningsteori — problemstillinger og resultater* (Ramsey-utledning); **N. Gregory Mankiw, Matthew Weinzierl & Danny Yagan**, *Optimal Taxation in Theory and Practice* («Lesson 6» om skatt vs. inntektsskatt for fordeling).
- **Formelsamling (kun ved kode C, ikke dagens kode H):** Sydsæter/Strøm/Berck, *Matematisk formelsamling for økonomer* / *Economists' Mathematical Manual*.

### Notasjonskonvensjoner (stabile i arkivet)
- **Kollektivt gode:** `G` (kollektivt gode), `xᵢ`/`xʰ` (privat konsum), `gʰ` (individ `h`s bidrag), `G = g₁ + g₂`; nyttefunksjon typisk `Uʰ = log xʰ + α log G` eller kvasilineær `xᵢ + b(G)` med `b′>0, b″<0`. Velferdsfunksjon `W = ΣUʰ`. Lagrange-multiplikator `λ`.
- **Medianvelger:** `N` velgere, inntekt `yᵢ`, gjennomsnitt `ȳ`, median `yₘ`; kopp-skatt `T`, proporsjonal sats `t`; ønsket kollektivt gode `Gᵢ*`; skattepris `yᵢ/(N·ȳ)`; preferansevekt `α`.
- **Skatt/DWL:** enhetsavgift `t`, priselastisitet `ε`, produsentpris `p`, kvantum før skatt `X₀`; dødvektstap `DWL = ½·ε·(X₀/p)·t²`; skatteunndragelse-betingelse `p ≥ 1/(1−F)`.
- **Eksternalitet:** andel bilister `x`, reisetid `C(x) = a + b·x` (bil), `B(x)`/fast tid (kollektiv), tidsverdi/timelønn, Pigou-avgift.
- **Skattekonkurranse:** mobilt skattegrunnlag (kapital), skattesats/kildeskatt, reaksjonskurver (figur 20.2), stort vs. lite land.
- **Public choice / byrå:** medianposisjon, entoppede preferanser, budsjettmaksimerende byrå (grensenytte = grensekostnad ved effektiv størrelse), sponsors nytte, inntektselastisitet (Wagner).

### Modell-verktøykasse (forutsettes; bygg kort i boka)
Lagrange med bibetingelse og førsteordensbetingelser, komparativ statikk (fortegn på deriverte), konsument-/nytteteori (Cobb–Douglas/log-nytte, kvasilineær nytte), enkel spillteori (Nash-likevekt, reaksjonsfunksjoner), velferdsteori (Pareto-effektivitet, samfunnsøkonomisk overskudd, velferdsfunksjon), figurbruk (etterspørsel/tilbud, indifferens/budsjett, reaksjonskurver). Dette er SØK3004-/mikro-nivå og bør kryssrefereres dit; SØK3007 bruker plassen på *modellene og drøftingen*, ikke på ren teknikk. Merk **kode H**: alt dette må kunnes uten formelsamling.

### Skal bygges bevisst (to hovedbein + verktøy)
Del I — markedssvikt (kollektive goder, eksternaliteter, klubbgoder), kollektiv beslutning (median, Downs, rent-seeking), offentlig organisering (byrå/Niskanen, agent-problem, Wagner, fiskal føderalisme/budsjettskranker). Del II — skatt (DWL, Ramsey/invers elastisitet, skatt vs. lump-sum, skatteunndragelse), effektivitet mot fordeling (Gini, velferdsfunksjoner), skattekonkurranse. Bundet sammen av det gjennomgående grepet: *sett opp modell → utled FOC → sammenlign med effektiv løsning → tolk og drøft (særlig effektivitet vs. fordeling)*.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/SOK3007/` (28 filer).

**Sensurveiledninger lest grundig (lesbar tekst, 8):** `Sensorveiledning_SØK3007_v19.pdf` (V2019), `Sensurveiledning SOK3007 H2020.pdf` (H2020, hjemmeeksamen), `Sensurveiledning Eksamen SOK3007 H22.pdf` (H2022, full modellutledning), `Eksamen SOK3007 V23 Sensurveiledning.pdf` og `Eksamen SØK3007 Vår 2023.pdf` (V2023), `SØK3007 Sensurveiledning H23.pdf` (H2023), `SØK3007-sensorveiledning-h-16 (1).pdf` (H2016, full), samt kortversjonene innbakt i settene.

**Oppgavesett lest grundig (siste ~8 år, tekstbaserte):** `SØK3007 Eksamen V24.pdf` (V2024), `SØK3007 Eksamen H23.pdf` (H2023), `SØK3007 H22.pdf` (H2022), `Eksamen SOK3007 V22.pdf` (V2022), `Eksamen SOK3007 H21.pdf` (H2021), `3007 (1).pdf` (V2021-forside + info), `SOK3007_70501012_1606388780794.pdf` (H2020-oppgave), `SØK3007_V20.pdf` (V2020), `SØK3007H-19.pdf`, `SØK3007V-19.pdf`, `SØK3007H-18.pdf`, `SØK3007V-18.pdf`, `SØK3007H-17.pdf`, `SØK3007V-17.pdf`.

**Oppgavesett skummet (eldre, for struktur- og temabekreftelse):** `SØK3007H-15.pdf` (H2015), `SØK3007V-16.pdf` (V2016), `SØK3007H-2016.pdf` (H2016).

**Rene skann — hoppet over (tomt/nær tomt fra `pdftotext`):** `SØK3007-sensorveiledningH-15.pdf` og duplikatene `(1)`/`(2)` (5 tegn hver), og **`SØK3007 Sensurveiledning eksamen V24.pdf`** (4,3 MB, 8 tegn — bildebasert; V2024-profilen bygger derfor på V2024-*oppgavesettet*, som er tekstbasert). Den skannede V2016-sensuren mangler også tekst, men V2016-oppgavesettet er lest.

**Hjelpemiddel/kontekst fra settene:** 4 timer (09:00–13:00), digital i Inspera med opplasting av håndtegninger; hjelpemiddelkode varierer historisk (C = kalkulator + Sydsæter-formelsamling i eldre sett; A = alle hjelpemidler i V2021 og hjemmeeksamenene; **H = kun kalkulator i dagens ordinære form**). Faglig kontakt: Lars-Erik Borge (også oppgavestiller sammen med Jørn Rattsø). Pensumbok Hindriks & Myles med kapittelhenvisninger i alle nyere veiledninger.

**Merknader om kildene:**
- **Leselighet:** oppgavesettene og de nyere sensurveiledningene er overveiende tekstbaserte og godt lesbare — et bedre kildegrunnlag enn i SØK3004/SØK3001. Unntakene er de rene skannene nevnt over.
- **Overlappssjekk:** `grep` over `docs/hoyskole-boker/` viser at det **ikke** finnes noen eksisterende public economics-analyse (`econ46*`/`offentlig`/`skatt`); nærmeste konseptuelle UiO-slektninger er ECON4620-familien (offentlig økonomi) og ECON3610/4610 (velferd/økonomisk politikk), mens `econ3010` (anvendt økonomisk analyse) er den nærmeste *eksisterende* analysen i ånd (mikro anvendt på politikk). SØK3007-boka bør koordineres med disse hvis/når de skrives, og holdes skarpt atskilt fra `sok3004` (matematikk) og `sok3001` (økonometri).
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller sensorformuleringer er gjengitt ordrett. Modelligninger, kapittel-/figurhenvisninger, standardnotasjon, modellsammenhenger og faglige fakta er uten verkshøyde.
