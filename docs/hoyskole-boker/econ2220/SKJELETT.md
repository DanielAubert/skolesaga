# Bokskjelett: ECON2220 Mikroøkonomi 2 — eksamensrettet lærebok

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
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (7 ordinære sett V2018–V2025, 7 sensorveiledninger,
> 4 utsatt-sett med 4 utsatt-sensorveiledninger — 22 dokumenter). Arketype:
> **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/
> øvingseksamen) er obligatoriske og gjentas ikke her. Alle mønstereksempler i
> skjelettet er omskrivninger; forfatteren skal variere dem videre, aldri
> kopiere inn ordrett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `econ2220` |
| Tittel | **ECON2220 Mikroøkonomi 2** |
| Level | `'Høyskole'` |
| Arketype | Regnefag (optimerings- og utledningsfag med fast tre-oppgavers mal) |
| Antall kapitler | **34** (1 eksamenskart + 28 verktøy/tema/beredskap + 5 eksamenstrening) |
| Estimert totaltid | **2 340 min = 39 timer** |
| Quiz totalt | **570** (krav ≥500) |
| Flashcards totalt | **510** (krav ≥500) |
| Forgjengerbok | `econ1210` (ECON1210 Mikroøkonomi 1) — forkunnskapslenker peker dit |

**Pitch (ett avsnitt):** ECON2220-eksamen gjennomgikk et regimeskifte i 2023:
spillteori og atferdsøkonomi, som bar 30–40 % av settet 2018–2022, er borte fra
alle sju sett 2023–2025, og eksamen har lagt seg på en fast **tre-oppgavers mal
à 30–35 %**: (1) konsumentens optimering med Lagrange, Cobb-Douglas-utledning,
normalitet ved derivasjon og Slutsky-dekomponering; (2) generell likevekt med
bytteboks, presise definisjoner, Pareto og velferdsteoremene — temaparet med
100 % frekvens i alle elleve arkivsett; (3) produsentteori med kostnads-
minimering, skalautbytte-batteriet og nullprofitt — fast oppgave hvert år siden
2022. Denne boka er kalibrert mot nettopp det: den driller de tre oppgavene til
A-nivå, gir utsatt-eksamenens favoritter (beholdnings-Slutsky, Robinson–Fredag,
intertemporalt valg) egne kapitler, trener den nye aktualiserte
diskusjonssjangeren fra 2025 — og holder spillteori/Fehr-Schmidt ved like på
billigste måte i en beredskapsdel, siden temaene fortsatt står i
emnebeskrivelsen. Bokas viktigste enkeltferdighet: **utlede matematisk OG
tolke i økonomiske enheter** — sensor krever begge deler hver eneste gang.

**Kritisk modellregel (gjelder HELE boka):** Tilbudssiden bygges på **klassisk
produsentteori**: produktfunksjon $F(K,L)$, kostnadsfunksjon $c(y)$,
profittmaksimering $p = c'(y)$, skalautbytte og stigende marginalkostnad.
Dette KOLLIDERER med forgjengerboka: ECON1210 bruker (fra H2024)
CORE-anleggsmodellen med konstante enhetskostnader og gitt kapasitet. Boka skal
EKSPLISITT bygge broen (kap. 1.1): de to er ulike modellvalg for samme fenomen,
ikke motstridende fakta — og ECON2220-eksamen krever den klassiske varianten
med derivasjon. Anleggsmodellen omtales KUN i brokapitlet 1.1; alle
tilbudsanalyser ellers i boka bruker $c(y)$-apparatet.

**Kritisk notasjonsregel (gjelder HELE boka):** Konsum $c_1, c_2$ (ikke
$x_1, x_2$ — nevn i kap. 0.1 at eldre sett har brukt begge); priser $p_1, p_2$;
inntekt $m$; **beholdning $\omega$** ($\omega_1, \omega_2$; $\omega_1^A$ osv. i
to-konsument-økonomier); faktorpriser **$r$ og $w$** (aldri $\omega$ om
faktorpriser — eksamen har vært inkonsekvent her, boka standardiserer og sier
det). Konsumenter heter **A og B**. Marginalnytter $u'_1, u'_2$. Produsent:
$F(K,L)$ med $F'_K, F'_L$; én-faktor-varianten $x = F(n)$; produktpris $p$;
kostnadsfunksjon $c(y)$, variable kostnader $c_v(y)$, faste kostnader $F$;
profitt $\pi = py - c(y)$. Norsk begrepsapparat: **MSB** (marginal
substitusjonsbrøk), **MTB** (marginal transformasjonsbrøk), **MTSB** (marginal
teknisk substitusjonsbrøk). Nøkkelbetingelser i eksamens form:
$u'_1/u'_2 = p_1/p_2$; $c_1 = am/p_1$, $c_2 = (1-a)m/p_2$;
$p_1c_1 + p_2c_2 = p_1\omega_1 + p_2\omega_2$;
$\frac{\partial c_1}{\partial p_1} = \frac{\partial c_1^s}{\partial p_1} + (\omega_1 - c_1)\frac{\partial c_1}{\partial m}$;
$p = c'(y)$ / $pF'(n) = w$; $F'_K/F'_L = r/w$; $F(tK,tL) \gtreqless tF(K,L)$;
$\text{MTB} = p_1/p_2 = \text{MSB}$. **Slutsky-substitusjon** (kompensasjon =
råd til samme godekurv) er bokas standard; Hicks nevnes kun i fotnote (godtas
på eksamen, men er ikke kursets hovedspor). Budsjett- og ressursbetingelser
holder alltid med likhet.

**Kritisk sjangerregel (gjelder HELE boka):** Sensor krever **matematisk
utledning for full score i optimeringsoppgaver** — figur er støtte, aldri
erstatning. Og motsatt: enhver formell betingelse skal **tolkes i økonomiske
enheter** («MSB = prisforholdet» uten enhetsforklaring gir trekk). Alle
eksempler og løsningsforslag i boka følger derfor tretrinnsmalen: (i) sett opp
problemet formelt, (ii) utled steg for steg, (iii) oversett resultatet til
bytteforhold i enheter — pluss figurbeskrivelse i ord der sensor forventer
figur. Egenskaper skal *vises*, aldri påstås: normalitet krever derivasjon
mhp. $m$; skalautbytte krever $F(tK,tL)$-testen eller fortegnet på $c''(y)$;
konveksitet krever figur/blandingsargument.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen); frekvensen styrer *omfanget*:

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden; begrunner utelatelsene. |
| 1 | Grunnmuren: fra ECON1210 til Lagrange | 3 | Broen fra 1210 (etterspørselskurve → optimering; CORE-anlegg → $c'(y)$), preferanseapparatet (monotone transformasjoner testet V2024, konveksitet V2025-utsatt) og Lagrange-/innsettingsmetoden som alt annet står på → 3 verktøykapitler. |
| 2 | Konsumentteori: optimering, etterspørsel og Slutsky | 5 | Oppgave 1-malen: nyttemaksimering m/tolkning 86 %, Slutsky 86 %, Cobb-Douglas-trilogien 3/3 siste år, kompensasjonsanalysen dokumentert oblig-resirkulert; 30–45 % av poengene hvert av de tre siste årene → nivå 1 «perfekt» → 4 teorikapitler + drillkapittel. |
| 3 | Beholdningsøkonomi og intertemporale valg | 4 | Endowment-budsjett 57 % ordinært, 3/4 utsatt; endowment-Slutsky ordinært i V2025 og **utsatt-favoritt** (3/4); intertemporalt valg bar 40 % av V2024-utsatt → nivå 1 (beholdning)/nivå 2 (intertemporalt) → 3 teorikapitler + drillkapittel. |
| 4 | Generell likevekt og velferdsteori | 5 | **100 % frekvens i alle 11 sett**; 35–50 % av poengene i 2023–2025-regimet; bytteboks, definisjonspresisjon, velferdsteoremene m/forutsetninger og omfordelingsanalyse er faste delspørsmål → nivå 1 → 4 teorikapitler + drillkapittel. |
| 5 | Produsentteori | 5 | Fast oppgave (20–50 %) i alle sett siden 2022; Cobb-Douglas-utledning + normalitet + skalautbytte 3/3 siste år; kostnadsminimering m/Lagrange og nullprofitt/grunnrente er dokumenterte sensorkrav → nivå 1 → 4 teorikapitler + drillkapittel. |
| 6 | Likevekt med produksjon og eksternaliteter | 3 | Robinson–Fredag/MTB=MSB: 3/4 utsatt-sett + V2023 → nivå 2 «kunne» (avgjør konte og toppkarakter); eksternaliteter/Pigou 20 % i V2018 og V2025-utsatt, bryter velferdsteoremene → 3 kompakte kapitler. |
| 7 | Beredskap: spillteori og atferdsøkonomi | 3 | 30–40 % av hvert sett 2018–2022, **null forekomster i alle sju sett 2023–2025** — men står i emnebeskrivelsen (verifisert 2026) og et foreleserbytte kan reversere bortfallet → nivå 3 «kjenne» → 3 kompakte kapitler. |
| 8 | Eksamenstrening | 5 | Den aktualiserte diskusjonssjangeren (begge 2025-sett; forvent gjentakelse) + sann/usann-sjangeren + 3 komplette øvingseksamener etter tre-oppgavers-malen. |

**Avvik fra DNA-malen (dokumentert):**
1. **Drillkapitlene ligger i temadelene sine** (2.5, 3.4, 4.5, 5.5), ikke i
   siste del, fordi de tre oppgavesjangrene er 86–100 %-gjengangere som må
   drilles rett etter teorien — Del 8 beholder de to tverrgående sjangrene
   (aktualisert diskusjon, påstandsoppgaver) og øvingseksamenene.
2. **Del 1 er en grunnmursdel, ikke en temadel**: Lagrange-håndverket og
   preferanseapparatet er felles verktøy for oppgave 1, 2 OG 3 og må stå før
   alle temadelene; brokapitlet 1.1 er pålagt av leserkravene (forkunnskaper
   eksplisitt) og av konfliktpunktet mot 1210s anleggsmodell.
3. **Monopol, asymmetrisk informasjon og kollektive goder får ingen egne
   teorikapitler** til tross for at de står i emnebeskrivelsen: temaene er
   **aldri testet som egne oppgaver i noen av de 11 arkivsettene** — de opptrer
   kun i listen over forutsetninger for velferdsteoremene, og dekkes der
   (kap. 4.3) pluss med kryssbok-lenker til econ1210 (som eier monopolstoffet).
   Begrunnelsen gjentas for studenten i kap. 0.1.
4. **Eksternaliteter ligger i Del 6** (sammen med produksjonsøkonomien) fremfor
   i en egen markedssvikt-del, fordi eksamens eneste eksternalitets-vinklinger
   er (i) brudd på velferdsteoremene/MTB=MSB og (ii) Pigou-logikken — begge
   trenger apparatet fra Del 4–6, og hovedbehandlingen av Pigou i FK-diagram
   bor i econ1210-boka.

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–N) refererer
til oppgavetype-katalogen i denne bokas Del 0 (gjengitt der fra analysen §3):
A nyttemaksimering med tolkningskrav, B figurforklaring av (ikke-)optimal
tilpasning, C Cobb-Douglas-etterspørsel + normalitet, D Slutsky-dekomponering,
E beholdnings-Slutsky/netto kjøper-selger, F bytteboks (Edgeworth),
G likevekts- og Pareto-definisjoner med presisjonskrav, H velferdsteoremene,
I kostnadsminimering, J profittmaksimering/skalautbytte/kurvene,
K MTB=MSB-produksjonsøkonomien (Robinson–Fredag), L sann/usann-påstander med
begrunnelse, M aktualisert åpen drøfting, N spillteori-/atferdsblokken
(dvale). Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) /
**kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes ECON2220

- **id:** `econ2220-0-1` · **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, regimeskiftet i 2023, tre-oppgavers-malen, temafrekvensene og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle 7 ordinære sett + 4 utsatt. Skal gjengi: (i) formen: 4 timers digital skoleeksamen, karakter A–F, obligatorisk innlevering må være godkjent; oppgitte prosentvekter skal følges, og **deloppgavene innad i en oppgave teller omtrent likt** (eksplisitt i flere veiledninger); settene er lange — sensor regner med tidsnød selv hos de beste og bruker utpekte skilleoppgaver; (ii) **regimeskiftet 2023**: spillteori og Fehr-Schmidt-atferdsøkonomi bar 30–40 % av hvert sett 2018–2022, men forekommer i null av sju sett 2023–2025 (ordinær + utsatt); samtidig ble produsentteori fast tredjeoppgave og veiledningsstilen endret seg (ny foreleser); (iii) **den faste malen 2023–2025**: tre oppgaver à 30–35 % — konsumentteori (30–35 %) + generell likevekt/bytteøkonomi (35–50 %) + produsentteori (20–30 %); vektingshistorikk: V2023 30/20/50, V2025 35/35/30 (V2024 uten oppgitte vekter, samme struktur); (iv) temafrekvens-tabellen: generell likevekt/Pareto/velferdsteoremer **100 % (alle 11 sett)**, nyttemaksimering m/Lagrange og Slutsky 86 %, produsentteori 100 % siden 2022, Cobb-Douglas-utledning + normalitetsderivasjon + skalautbytte 3/3 siste år, beholdningsøkonomi 57 % ordinært og 3/4 utsatt, MTB/MSB og endowment-Slutsky = utsatt-favoritter (3/4), intertemporalt valg 40 % av V2024-utsatt, aktualisert åpen drøfting ny fast sjanger fra 2025, spillteori/atferd 0 % siden 2022, **monopol/asymmetrisk informasjon/kollektive goder aldri testet som egne oppgaver i noen av de 11 settene**; (v) **utsatt eksamen er systematisk vanskeligere/skjevere** — konte-kandidater må prioritere Del 3 og Del 6; (vi) sensorens metaregler: matematisk utledning for full score i optimeringsoppgaver (figur er støtte); tolkning forbi formelen (bytteforhold i enheter); vis egenskaper, ikke påstå dem; presisjon i likevektsbegrepet (markedsklarering i alle markeder); forutsetningene for velferdsteoremene er selvstendige poeng; raus delvis uttelling ved riktig metode (konsistent resonnement trumfer fasit); oblig-temaene resirkuleres på eksamen; (vii) karakternivåene: E = løse konsumentens maksimeringsproblem med noenlunde god tolkning + grunnforståelse i de letteste deloppgavene ellers; C = god forståelse av grunnelementene i alle oppgavene + noe på de vanskelige; A = godt svar på alt, der skilleoppgavene typisk er utledningsledd og de åpne diskusjonsspørsmålene.
- **Innholdskontrakt:** Oppgavetype-katalogen A–N presenteres som studentens sjekkliste med frekvens per sjanger (A 86 %, B fast siden 2023, C 3/3 siste år, D 86 %, E V2025 + 3/4 utsatt, F 5 av 11 sett, G eksplisitt spurt i 7 av 11, H 86 %, I fast siden 2023, J fast siden 2022, K 3/4 utsatt + V2023, L V2023/V2024, M begge 2025-sett, N 0 % siden 2022). **Begrunnelse for utelatelsene** (studenten skal slippe å lure): monopol, asymmetrisk informasjon og kollektive goder står i emnebeskrivelsen, men er aldri testet som egne oppgaver — de dekkes kun som forutsetningsbrudd i kap. 4.3, og monopolapparatet bor i [Monopolets tilpasning](/econ1210/econ1210-5-1) i ECON1210-boka. Prognose for neste ordinære eksamen: (1) konsumentteori med Cobb-Douglas-utledning, normalitetsderivasjon og Slutsky — sannsynligvis med beholdning og en aktualisert diskusjonshale; (2) bytteøkonomi med bytteboks, definisjonspresisjon, velferdsteoremene m/forutsetninger og en omfordelings- eller produksjonsutvidelse (MTB=MSB står for tur ordinært); (3) produsentteori med kostnadsminimering eller kort-sikt-kostnader, skalautbytte-kurver og en åpen norsk-økonomi-drøfting (grunnrente-sporet). Avslutt med leseplan: Del 1–5 «må perfekt», Del 6 + diskusjonssjangeren «må kunne», Del 7 «bør kjenne»; konte-kandidater dobler innsatsen på Del 3 og 6.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt vektene 35/35/30 og 240 minutter — sett opp tidsbudsjett per deloppgave når deloppgavene teller likt».
- **Typiske feil:** Metafeilene: levere figur der det kreves utledning; gjenta formelen som «tolkning»; pugge spillteori på 2018–2022-nivå på bekostning av produsentteori; undervurdere at utsatt eksamen henter fra andre sjangre enn ordinær.
- **Quiz: 10 · Flashcards: 10** (frekvenser, vekter, metaregler)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Grunnmuren: fra ECON1210 til Lagrange *(prioritet: PERFEKT — verktøy for alt)*

#### Kapittel 1.1: Broen fra ECON1210: samme marked, nytt verktøy

- **id:** `econ2220-1-1` · **number:** 1.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen (forkunnskaper: econ1210)
- **Kapitteltype:** teori (bro/forkunnskaper)
- **description:** Hva ECON2220 gjør annerledes enn ECON1210: kurvene du kjente blir løsninger av optimeringsproblemer — og tilbudssiden bytter modell.
- **Eksamensbelegg:** Metakapittel uten egne eksamensoppgaver, men pålagt av leserkravene (forkunnskaper eksplisitt) og av arkivfunnet om progresjonen: 1210 analyserer FK-markedet grafisk med lineær algebra; 2220 *utleder* samme apparat fra optimering. Konfliktpunktet er dokumentert: 1210 bruker (fra H2024) CORE-anleggsmodellen med konstante enhetskostnader og kapasitet; 2220-eksamen krever klassisk produsentteori med $c'(y)$, skalautbytte og stigende MK. Prioritet: **perfekt** (leses av alle først).
- **Innholdskontrakt:** (i) **Etterspørselssiden**: etterspørselskurven fra [Etterspørselskurven](/econ1210/econ1210-1-1) og konsumenttilpasningen fra [Konsumentteori: budsjettlinje, indifferenskurver og tilpasning](/econ1210/econ1210-7-1) er i 2220 *løsningen* av nyttemaksimeringsproblemet — det 1210 postulerte, skal 2220 utlede med Lagrange; 1210s verbale substitusjons-/inntektseffekt fra [Arbeidstilbudet: substitusjons- og inntektseffekt](/econ1210/econ1210-6-2) blir 2220s Slutsky-likning. (ii) **Tilbudssiden — konfliktpunktet, eget delkapittel**: [Tilbudskurven: anleggsmodellen](/econ1210/econ1210-1-2) bygger tilbudet av anlegg med konstante enhetskostnader og gitt kapasitet; ECON2220 bruker klassisk produsentteori der én bedrift har kostnadsfunksjon $c(y)$ og velger kvantum der $p = c'(y)$. Boka skal si rett ut: dette er **to ulike modellvalg for samme fenomen, ikke motstridende fakta** — anleggsmodellen aggregerer diskrete enheter, den klassiske modellen glatter til en deriverbar kostnadsfunksjon; ECON2220-eksamen krever den klassiske varianten, og resten av denne boka bruker den konsekvent. (iii) **Likevekts- og velferdsbegrepene**: [Markedslikevekt](/econ1210/econ1210-1-3) og [KO, PO og SO](/econ1210/econ1210-2-1) generaliseres i 2220 til likevekt i *alle* markeder samtidig (generell likevekt) og Pareto-effektivitet. (iv) **Arbeidsdelingen mellom bøkene**: monopol, prisregulering, skatteoverveltning og klimapolitikk bor i 1210-boka; 2220-boka eier Lagrange, generell likevekt, velferdsteoremene og (forsikringsvis) spillteorien. (v) Kort selvtest: 5 oppgaver fra 1210-pensum (likevekt, KO/PO, skift) som avdekker hull, med lenker til 1210-kapitlene som tetter dem.
- **Oppgavesjangre:** Ingen eksamenssjanger direkte; selvtest + 2–3 «oversett fra 1210-språk til 2220-språk»-oppgaver (f.eks. «i 1210 sa vi at etterspørselen faller når prisen stiger — formuler påstanden som et utsagn om løsningen av et maksimeringsproblem»).
- **Typiske feil:** Bruke anleggsmodellens språk (enhetskostnader, kapasitet, «anlegg inn/ut») i 2220-produsentoppgaver; tro at 1210- og 2220-tilbudsteorien motsier hverandre; hoppe over Lagrange fordi «kurvene er kjent fra før».
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 1.2: Preferanser, nytte og indifferenskurver

- **id:** `econ2220-1-2` · **number:** 1.2 · **estimatedMinutes:** 45 · **prerequisites:** `econ2220-1-1`
- **Kapitteltype:** teori
- **description:** Preferanseaksiomer, nyttefunksjonen som rangering, monotone transformasjoner, konveksitet og MSB — begrepsgrunnlaget eksamen tester direkte.
- **Eksamensbelegg:** Monotone transformasjoner testet direkte i V2024 (vis at $v = 10u$ representerer samme preferanser); konveksitet testet i V2025-utsatt (tegn indifferenskurven fra likningen og forklar konvekse preferanser); MSB-tolkningen er obligatorisk i sjanger A (86 %); konvekse preferanser er tilleggskravet i 2. velferdsteorem (sjanger H). Prioritet: **perfekt**.
- **Innholdskontrakt:** Preferanserelasjonen og rasjonalitetsaksiomene (fullstendighet, transitivitet) kort; monotoni/«mer er bedre» og lokalt umettelige preferanser (navngis — dukker opp i forutsetningslisten til velferdsteoremene, kap. 4.3); nyttefunksjonen som *rangering*, ikke måling → **monotone transformasjoner**: $v = g(u)$ med $g$ strengt voksende representerer samme preferanser fordi rangeringen bevares — vis med $v = 10u$ og $v = \ln u$; konsekvens: log-form og potensform av Cobb-Douglas er samme preferanser (brukes tungt i kap. 2.2). Indifferenskurver: definisjon, kan ikke krysse, **indifferenskurve-likningen løst for $c_2$** (fra $u(c_1,c_2) = \bar{u}$ — V2025-utsatt-ferdigheten); **konveksitet**: blandinger foretrekkes — vis både med figur og med blandingsargumentet i ord. **MSB** (marginal substitusjonsbrøk) $= u'_1/u'_2$: definer som helningen på indifferenskurven (tallverdi) og tolk i enheter — hvor mange enheter av vare 2 konsumenten maksimalt vil gi opp for én ekstra enhet av vare 1; avtakende MSB langs kurven ↔ konveksitet.
- **Oppgavesjangre:** Fundament for A/B/C; egen sjangerandel: transformasjons- og konveksitetsspørsmålene. Mønstereksempel (omskrevet): «En konsument har nyttefunksjonen $u(c_1,c_2) = c_1^{0{,}4} c_2^{0{,}6}$. Vis at $v = 5\ln u$ representerer de samme preferansene, finn likningen for indifferenskurven gjennom punktet $(4, 9)$ løst for $c_2$, og forklar hva det betyr at preferansene er konvekse.»
- **Typiske feil:** Tro at nyttetall måler «mengde lykke» (kardinaltolkning) — bare rangeringen er innhold; påstå konveksitet uten figur/blandingsargument; blande MSB (helning på indifferenskurven) med prisforholdet (helning på budsjettlinjen) før optimum er etablert; glemme at monoton transformasjon endrer marginalnyttene, men ikke MSB.
- **Quiz: 15 · Flashcards: 20**

#### Kapittel 1.3: Lagrange- og innsettingsmetoden

- **id:** `econ2220-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ2220-1-2`
- **Kapitteltype:** teori (metodeverktøy)
- **description:** Bokas arbeidshest: maksimering og minimering under bibetingelse med Lagrange — og når innsetting fungerer (og når den er umulig).
- **Eksamensbelegg:** Lagrange er sensorens forventede metode i begge kanoniske problemer: nyttemaksimering (86 % av ordinære sett; innsetting godtas som alternativ) og kostnadsminimering (fast siden 2023; **her er innsetting umulig og Lagrange obligatorisk** — eksplisitt sensorpoeng i V2025). $\lambda = 1/m$-trikset testet V2024; kvasi-lineær nytte $2\sqrt{x} + c$ med FOB $1/\sqrt{x} = p$ testet V2023. Prioritet: **perfekt**.
- **Innholdskontrakt:** Kort repetisjon av partiell derivasjon og kjerneregel (kun det som trengs; lenk generell derivasjon som forkunnskap). **Innsettingsmetoden**: løs bibetingelsen for én variabel, sett inn, maksimer i én variabel — fungerer når bibetingelsen kan løses ut (budsjettlinjen); **Lagrange-metoden** steg for steg med intuisjon per steg: sett opp $\mathcal{L} = u(c_1,c_2) - \lambda(p_1c_1 + p_2c_2 - m)$, deriver mhp. $c_1$, $c_2$ og $\lambda$, sett lik null, **kombiner FOB-ene ved å dele dem på hverandre** → $u'_1/u'_2 = p_1/p_2$ (λ elimineres); hvorfor metoden virker (i optimum er nivåkurven til målfunksjonen tangent til bibetingelsen). **Når innsetting er umulig**: i $\min rK + wL$ gitt $F(K,L) = \bar{y}$ kan beskrankningen generelt ikke løses ut — Lagrange er obligatorisk (forbereder kap. 5.2). **Tolkningen av $\lambda$**: skyggeprisen på bibetingelsen — marginalnytten av én ekstra krone; for Cobb-Douglas på log-form blir $\lambda = 1/m$ (regnes ut som eksempel). Gjennomregnet eksempel med **kvasi-lineær nytte** $u = 2\sqrt{c_1} + c_2$: FOB gir $1/\sqrt{c_1} = p_1/p_2$, etterspørselen $c_1 = (p_2/p_1)^2$ uavhengig av $m$ — brukes igjen i kap. 4.2 (numerisk likevekt).
- **Oppgavesjangre:** Metodefundament for A, C, I, K. Mønstereksempel: «Løs $\max\, c_1^{1/3} c_2^{2/3}$ gitt $2c_1 + 4c_2 = 120$ både med innsetting og med Lagrange, og vis at svaret blir det samme. Forklar deretter hvorfor innsetting ikke er tilgjengelig i problemet $\min\, 3K + 12L$ gitt $K^{1/4}L^{1/4} = 10$.»
- **Typiske feil:** Prøve innsetting på kostnadsminimering der beskrankningen ikke kan løses ut (dokumentert felle — koster metoden); glemme å kombinere FOB-ene (stoppe før $\lambda$ er eliminert); fortegnsfeil i Lagrange-oppsettet; derivere feil i potens- og logfunksjoner; behandle $\lambda$ som svar i stedet for skyggepris.
- **Quiz: 15 · Flashcards: 15**

**Prøve-kvote Del 1:** 4 prøver (1.A begreper — preferanser, MSB, monotone transformasjoner, sjanger B/L-fundament; 1.B indifferenskurve fra likning + konveksitetsargument, V2025-utsatt-varianten; 1.C Lagrange vs. innsetting på nye funksjoner med λ-tolkning; 1.D blandet grunnmursprøve på eksamensnivå inkl. 1210-broen).

---

### Del 2 — Konsumentteori: optimering, etterspørsel og Slutsky *(prioritet: PERFEKT — oppgave 1-malen)*

#### Kapittel 2.1: Nyttemaksimering med tolkningskrav

- **id:** `econ2220-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ2220-1-3`
- **Kapitteltype:** teori
- **description:** Oppgave 1s åpning: sett opp problemet, løs med Lagrange, kombiner til tilpasningsbetingelsen — og tolk den i enheter slik sensor krever.
- **Eksamensbelegg:** Sjanger A i 6 av 7 ordinære sett (86 %) + 3 av 4 utsatt — åpner konsumentoppgaven som bar 30–45 % av poengene hvert av de tre siste årene. Sensorkrav dokumentert: **matematisk utledning kreves for full score** (figur alene holder ikke — eksplisitt i V2025); tolkningen skal forbi «MSB = prisforholdet» — den marginale betalingsviljen for vare 1 målt i enheter av vare 2 skal være lik hvor mange enheter vare 2 markedet krever for én ekstra enhet vare 1. Sjanger B (figurforklaring) fast følgesvenn: V2023 ga navngitte punkter på budsjettlinjen som skulle diskuteres; V2025 ba studenten konstruere motesempelet selv. Prioritet: **perfekt**.
- **Innholdskontrakt:** Budsjettmengden og budsjettlinjen $p_1c_1 + p_2c_2 = m$: helning $-p_1/p_2$ tolket som markedets bytteforhold; kurset antar alltid budsjettlikhet (monotoni). Problemet $\max u(c_1,c_2)$ gitt budsjettet: løs med Lagrange (kap. 1.3-oppskriften) OG nevn at innsetting godtas; kombiner FOB-ene til **tilpasningsbetingelsen $u'_1/u'_2 = p_1/p_2$**; grafisk: indifferenskurve tangerer budsjettlinjen. **Tolkningsavsnittet er kapitlets kjerne** (bokas standardformulering etableres her): venstresiden er konsumentens marginale betalingsvilje for vare 1 målt i vare 2; høyresiden er hva markedet krever av vare 2 per enhet vare 1; i optimum er de like — ellers finnes en byttehandel som øker nytten. **Figurforklaring av ikke-optimale punkter** (sjanger B, eget delkapittel): punkt på budsjettlinjen med MSB > prisforholdet → konsumenten kan bytte til seg mer vare 1 billigere enn hun verdsetter det → flytt langs linjen; punkt innenfor linjen → bruker ikke hele budsjettet (utelukket av monotoni); konstruér motesempel selv (V2025-ferdigheten).
- **Oppgavesjangre:** A + B. Mønstereksempel (omskrevet): «En student bruker hele stipendet $m$ på mat ($c_1$) og transport ($c_2$). Sett opp og løs nyttemaksimeringsproblemet med Lagrange, og forklar med økonomiske ord — i enheter — hva tilpasningsbetingelsen sier. Pek deretter på et punkt på budsjettlinjen der $u'_1/u'_2 > p_1/p_2$ og forklar hvorfor studenten kan få det bedre.»
- **Typiske feil:** Levere figur i stedet for utledning (koster full score — dokumentert V2025); gjenta formelen som «tolkning» uten enheter/økonomisk innhold; glemme å begrunne budsjettlikheten; tegne tangering uten å kunne forklare hva som er galt i punkter uten tangering; rote med hvilken helning som er MSB og hvilken som er prisforholdet.
- **Quiz: 25 · Flashcards: 20**

#### Kapittel 2.2: Cobb-Douglas-verktøykassa: utlede etterspørselen og vise normalitet

- **id:** `econ2220-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ2220-2-1`
- **Kapitteltype:** teori
- **description:** Den faste utledningen siden 2023: fra log- eller potensnytte til $c_1 = am/p_1$ — og normalitet vist ved derivasjon, ikke påstand.
- **Eksamensbelegg:** Sjanger C fast i **alle tre siste ordinære sett (3/3)**: (i) utled etterspørselen fra log- eller potensform, (ii) vis normalitet ved å derivere mhp. $m$ (kun verbal påstand gir bare delvis uttelling — eksplisitt i to av veiledningene), (iii) dekomponer en prisøkning (kap. 2.3). V2024 la til monotone transformasjoner (kap. 1.2) og det pene poenget at for Cobb-Douglas er etterspørselen etter vare 1 **uavhengig av $p_2$** — SE og IE er nøyaktig like store og motsatte. $\lambda = 1/m$-trikset (V2024). Prioritet: **perfekt**.
- **Innholdskontrakt:** Begge funksjonsformer skal beherskes: $u = a\ln c_1 + (1-a)\ln c_2$ og $u = c_1^a c_2^{1-a}$ — og kap. 1.2-poenget om at de representerer samme preferanser. **Standardutledningen steg for steg** (bokas oppskrift): regn ut marginalnyttene, sett inn i $u'_1/u'_2 = p_1/p_2$, kombiner med budsjettet, bruk $a + (1-a) = 1$-trikset, løs til $c_1 = am/p_1$, $c_2 = (1-a)m/p_2$. **Budsjettandels-resultatet**: konsumenten bruker den faste andelen $a$ av inntekten på vare 1 — tolkes og brukes som rimelighetskontroll. **Normalitet ved derivasjon**: $\partial c_1/\partial m = a/p_1 > 0$ — normalt gode; etabler også definisjonene normalt/mindreverdig gode. **Uavhengighets-poenget**: $c_1 = am/p_1$ inneholder ikke $p_2$ — krysspriseffekten er null fordi SE og IE er like store med motsatt fortegn (forbereder kap. 2.3); dette er et dokumentert pluss-poeng. $\lambda = 1/m$ for log-formen som gjennomregnet eksempel. Generalisering: samme oppskrift med vilkårlige positive eksponenter $a, b$ (normaliser med $a+b$).
- **Oppgavesjangre:** C. Mønstereksempel (omskrevet): «Konsumenten har nyttefunksjonen $u = 0{,}3\ln c_1 + 0{,}7\ln c_2$ og inntekt $m$. Utled begge etterspørselsfunksjonene, avgjør ved derivasjon om vare 1 er et normalt gode, og forklar hvorfor etterspørselen etter vare 1 ikke avhenger av $p_2$.»
- **Typiske feil:** Påstå normalitet uten å derivere (dokumentert — gir bare delvis uttelling); regnefeil i marginalnyttene på potensformen (glemme kjerneregel/eksponent); ikke bruke $a+b=1$-trikset og gå seg vill i algebraen; tro at log- og potensformen krever ulike svar; stoppe ved $c_1 = am/p_1$ uten budsjettandels-tolkningen når oppgaven ber om økonomisk forklaring.
- **Quiz: 25 · Flashcards: 20**

#### Kapittel 2.3: Slutsky: substitusjons- og inntektseffekt

- **id:** `econ2220-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `econ2220-2-2`
- **Kapitteltype:** teori
- **description:** Prisendringens to kanaler: Slutsky-dekomponeringen i likning, figur og ord — med kursets egne konvensjoner.
- **Eksamensbelegg:** Sjanger D i 6 av 7 ordinære sett (86 %) + 3 av 4 utsatt. Kursets dokumenterte konvensjon: **Slutsky-substitusjon** — kompensasjonen gir råd til *samme godekurv* som før (ikke samme nyttenivå); Hicks er fotnote og godtas. Kan besvares med Slutsky-likningen, grafisk (A→B = SE, B→C = IE) eller verbalt — men **grafiske/matematiske svar skal alltid tolkes**. SE alltid ikke-positiv for godet som ble dyrere — testet som sann/usann-påstand med avslørte preferanser som fasitargument (V2023). Prioritet: **perfekt**.
- **Innholdskontrakt:** Tankeeksperimentet i tre bilder: prisøkning på vare 1 → (i) **substitusjonseffekten**: gi konsumenten akkurat nok inntekt til å ha råd til den gamle kurven (Slutsky-kompensasjon — budsjettlinjen roterer gjennom det gamle konsumpunktet); hun vrir seg bort fra godet som ble relativt dyrere; **SE er alltid ikke-positiv** — begrunn med avslørte preferanser (den gamle kurven er fortsatt tilgjengelig; velges noe annet, må det nye ha mer av det billigere godet); (ii) **inntektseffekten**: ta kompensasjonen tilbake — lavere realinntekt gir mindre av begge goder *gitt normalitet*; (iii) total effekt = SE + IE. Grafisk standardfigur: opprinnelig punkt A, kompensert punkt B (rotert linje gjennom A), nytt punkt C — bevegelsen A→B er SE, B→C er IE; figurbeskrivelse i ord er obligatorisk. **Slutsky-likningen uten beholdning** presenteres og tolkes ledd for ledd. Hicks-varianten i én fotnote (samme nyttenivå; godtas på eksamen). Cobb-Douglas-regneeksempel som viser uavhengighets-poenget fra kap. 2.2: for krysseffekten er SE og IE nøyaktig like store og motsatte. Mindreverdige goder: IE trekker motsatt vei; Giffen som logisk mulighet i én setning (aldri testet).
- **Oppgavesjangre:** D + L. Mønstereksempel (omskrevet): «Prisen på kollektivtransport øker. Dekomponer virkningen på etterspørselen i substitusjons- og inntektseffekt både grafisk og i ord, med Slutsky-kompensasjon. Ta deretter stilling til påstanden: 'Substitusjonseffekten av prisøkningen kan være positiv.' Begrunn svaret.»
- **Typiske feil:** Bruke Hicks-kompensasjon som hovedspor (kurset bruker Slutsky — samme kurv); levere figuren uten tolkning; feil retning på SE; glemme normalitets-forbeholdet på IE; rotere budsjettlinjen gjennom feil punkt; blande hvilken bevegelse som er SE og hvilken som er IE i figuren.
- **Quiz: 25 · Flashcards: 20**

#### Kapittel 2.4: Kompensasjonsanalyse: prissubsidie mot kontantstøtte

- **id:** `econ2220-2-4` · **number:** 2.4 · **estimatedMinutes:** 40 · **prerequisites:** `econ2220-2-3`
- **Kapitteltype:** teori
- **description:** Oblig-klassikeren som resirkuleres på eksamen: hvorfor kontantstøtte gjennom det gamle konsumpunktet gir høyere nytte enn prissubsidien.
- **Eksamensbelegg:** Dokumentert oblig-resirkulering: subsidie vs. kontantoverføring var tema på obligatorisk oppgave og dukket opp på eksamen (V2024) — veiledningene begrunner krav med «dette var tema på obligatorisk oppgave». Nivå 2-tema i analysen (avgjør toppkarakter), men hører faglig hjemme rett etter Slutsky. Prioritet: **kunne**.
- **Innholdskontrakt:** Oppsettet: staten vil hjelpe en konsument som rammes av høy pris på vare 1 — to virkemidler med samme kostnad for staten: (i) **prissubsidie** som senker $p_1$ akkurat nok til at konsumenten kan nå det gamle nyttenivået (eller en gitt tilpasning); (ii) **kontantstøtte** som gir råd til det gamle/subsidierte konsumpunktet. Kjerneresultatet med figur: budsjettlinjen ved kontantstøtte er et parallellskift som *går gjennom* det subsidierte konsumpunktet, men har brattere helning (uforvridde priser) — den **skjærer** indifferenskurven der, så konsumenten kan flytte langs linjen til høyere nytte. Konklusjon: for samme statlige utlegg gir kontantstøtte minst like høy (typisk høyere) nytte, fordi subsidien vrir relativprisene. Mekanismen fortalt i SE-språk: subsidien «låser» konsumenten til et kunstig billig gode. Kobling til [Stykksubsidie og subsidie-paradokset](/econ1210/econ1210-3-2) i 1210-boka (markedsversjonen av samme innsikt) og fremover til den aktualiserte diskusjonssjangeren (kap. 8.1: elbilsubsidie-casen).
- **Oppgavesjangre:** Varianter av D + M. Mønstereksempel (omskrevet): «Kommunen vurderer å subsidiere barnefamiliers utgifter til fritidsaktiviteter, eller å gi et kontantbeløp med samme kostnad. Vis i en figur at kontantstøtte som når gjennom familiens konsumpunkt under subsidien, gir minst like høy nytte — og forklar mekanismen med substitusjonseffekten.»
- **Typiske feil:** Tegne kontantstøtte-linjen parallelt med subsidielinjen (den skal ha *uforvridd* helning); konkludere «likt» fordi begge når samme punkt (skjæring ≠ tangering — det er nettopp poenget); glemme at sammenlikningen holder statens utlegg fast; normativ synsing uten modell.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 2.5: Drill: konsumentoppgaven

- **id:** `econ2220-2-5` · **number:** 2.5 · **estimatedMinutes:** 90 · **prerequisites:** `econ2220-2-4`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på oppgave 1: fra oppgitt nyttefunksjon til fullført A-besvarelse — oppsett, Lagrange, tolkning, Cobb-Douglas, normalitet, Slutsky og diskusjonshale.
- **Eksamensbelegg:** Dekker sjangrene A (86 %), B (fast siden 2023), C (3/3 siste år) og D (86 %) — samlet konsumentoppgaven som bar 30–45 % av poengene hvert av de tre siste årene, pluss diskusjonshalen fra 2025. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) sett opp problemet formelt (målfunksjon + budsjett med likhet); 2) løs med Lagrange, kombiner FOB-ene; 3) tolk tilpasningsbetingelsen i enheter; 4) utled etterspørselsfunksjonene (a+b=1-trikset), kontroller med budsjettandelene; 5) vis normalitet ved derivasjon mhp. $m$; 6) dekomponer prisendring i SE og IE (figur + ord, Slutsky-kompensasjon); 7) svar på figurspørsmål om ikke-optimale punkter; 8) diskusjonshale: koble til aktuelt case via budsjettandel, substituerbarhet og normalitet. Gjennomregnet eksamenscase med sensor-margnotater (hva som gir uttelling ved hvert steg — utledning, enhetstolkning, derivasjonsbeviset, tolket figur). **10–15 oppgaver på eksamensnivå** som roterer: log-form vs. potensform × ulike eksponenter × prisøkning vs. prisfall × normalitetsspørsmål × figurspørsmål × kvasi-lineær variant ($u = \alpha\sqrt{c_1} + c_2$) × én kompensasjonsanalyse-hale — alle med nyskrevne tall og case (strømutgifter, treningsabonnement, kaffe/te, streaming/kino).
- **Oppgavesjangre:** A, B, C, D i full kjede. Mønstereksempel (full deloppgave-kjede à la 2023–2025-malen): «(a) Sett opp og løs konsumentens problem; tolk tilpasningsbetingelsen. (b) Utled etterspørselsfunksjonene. (c) Er godene normale? Vis ved derivasjon. (d) Prisen på vare 1 øker — dekomponer virkningen i SE og IE med figur og ord. (e) Anta at vare 1 er en stor budsjettpost for lavinntektshusholdninger — drøft hvem prisøkningen rammer hardest.»
- **Typiske feil:** Hele §5-repertoaret for oppgave 1 samlet: figur i stedet for utledning; formel-gjentakelse som tolkning; normalitet uten derivasjon; Hicks i stedet for Slutsky; utolkede figurer; algebra-kollaps uten $a+b=1$-trikset.
- **Quiz: 15 · Flashcards: 15**

**Prøve-kvote Del 2:** 4 prøver (2.A oppsett + Lagrange + enhetstolkning, sjanger A; 2.B Cobb-Douglas-utledning + normalitetsderivasjon + monoton transformasjon, sjanger C; 2.C Slutsky grafisk/verbalt + sann/usann om SE-fortegn, sjanger D + L; 2.D full konsumentoppgave på eksamensnivå med diskusjonshale, sjanger A+B+C+D+M).

---

### Del 3 — Beholdningsøkonomi og intertemporale valg *(prioritet: PERFEKT (beholdning) / KUNNE (intertemporalt) — utsatt-eksamenens tyngdepunkt)*

#### Kapittel 3.1: Beholdningsbudsjettet: når inntekten er varer

- **id:** `econ2220-3-1` · **number:** 3.1 · **estimatedMinutes:** 45 · **prerequisites:** `econ2220-2-1`
- **Kapitteltype:** teori
- **description:** Budsjettet $p_1c_1 + p_2c_2 = p_1\omega_1 + p_2\omega_2$: linjen som alltid går gjennom beholdningspunktet — og roterer der når prisene endres.
- **Eksamensbelegg:** Beholdningsøkonomi i 4 av 7 ordinære sett (57 %) og 3 av 4 utsatt; fundamentet for endowment-Slutsky (kap. 3.2, ordinært V2025) og for hele bytteøkonomien i Del 4. Dokumentert felle: budsjettlinjen ved prisendring tegnes som parallellskift — feil, den **roterer gjennom beholdningspunktet** (påpekt i to utsatt-veiledninger). Prioritet: **perfekt**.
- **Innholdskontrakt:** Budsjettet når inntekten er en varebeholdning: $p_1c_1 + p_2c_2 = p_1\omega_1 + p_2\omega_2$ — verdien av konsumet = verdien av det du eier; beholdningspunktet $W = (\omega_1, \omega_2)$ ligger *alltid* på budsjettlinjen (du kan alltid konsumere ditt eget). **Rotasjonsresultatet** med figur: prisendring endrer helningen $-p_1/p_2$, men $W$ er fortsatt tilgjengelig → linjen roterer gjennom $W$ (kontrast mot parallellskiftet ved pengeinntekt). **Netto kjøper og netto selger**: $c_1 > \omega_1$ = netto kjøper av vare 1; $c_1 < \omega_1$ = netto selger; realinntektsvirkningen av en prisøkning på vare 1 avhenger av posisjonen — netto selger blir *rikere* (det du eier steg i verdi), netto kjøper fattigere. Optimering på beholdningsbudsjettet: samme Lagrange-apparat, tilpasningsbetingelsen uendret. **Notasjonsrydding** (bokas standard): $\omega$ = beholdning, $r/w$ = faktorpriser; nevn at arkivsettene har vært inkonsekvente (ett sett brukte $y$ om beholdning, ett brukte $\omega$ om faktorpriser) slik at studenten ikke forvirres av gamle sett.
- **Oppgavesjangre:** E-fundament. Mønstereksempel (omskrevet): «En fisker eier 40 kg fisk og 10 kg poteter, og kan kjøpe og selge begge til markedspris. Sett opp budsjettbetingelsen, vis at beholdningspunktet alltid ligger på budsjettlinjen, og vis i figur hva som skjer med linjen når fiskeprisen stiger. Er fiskeren netto kjøper eller netto selger av fisk i tilpasningen — og hvorfor betyr det noe?»
- **Typiske feil:** Parallellskifte budsjettlinjen ved prisendring (dokumentert felle — den roterer gjennom $W$); skrive budsjettet med pengeinntekt $m$ når inntekten er beholdning; overse at prisøkning kan gjøre konsumenten *rikere* (netto selger); blande $\omega$ (beholdning) og faktorpriser.
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 3.2: Slutsky med beholdningsledd: netto kjøper mot netto selger

- **id:** `econ2220-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ2220-3-1`, `econ2220-2-3`
- **Kapitteltype:** teori
- **description:** Utsatt-favoritten som kom ordinært i 2025: Slutsky-likningen med endowment-ledd og de tre effektene — med fortegn som avhenger av nettoposisjonen.
- **Eksamensbelegg:** Sjanger E: ordinært i V2025 (45 %-oppgavens kjerne på utsatt samme år) og **3 av 4 utsatt-sett** — analysens funn 4: en bok som skal dekke konteeksamen må ha dette. Slutsky-likningen med endowment-ledd er nøkkelbetingelse i eksamens form: $\frac{\partial c_1}{\partial p_1} = \frac{\partial c_1^s}{\partial p_1} + (\omega_1 - c_1)\frac{\partial c_1}{\partial m}$. Dokumenterte feller: feil fortegn (glemme at netto selger blir rikere av prisøkning); de to inntektseffektene blandes sammen. Prioritet: **perfekt** (nivå 1-punkt 4 i analysen).
- **Innholdskontrakt:** **Slutsky-likningen med endowment-ledd**, ledd for ledd: substitusjonsleddet $\partial c_1^s/\partial p_1 \le 0$ (som før); inntektsvirkningen skaleres nå med $(\omega_1 - c_1)$ — nettoposisjonen. Spalt inntektseffekten pedagogisk i to: **ordinær IE** (konsumvaren ble dyrere → fattigere som kjøper) og **beholdnings-IE** (det du eier ble mer verdt → rikere som eier); nettofortegnet bestemmes av om $\omega_1 - c_1$ er negativ (netto kjøper) eller positiv (netto selger). **Det faste konklusjonssettet** (etterspurt på eksamen): netto kjøper av godet som blir dyrere → alle effekter trekker ned → lavere etterspørsel og **lavere nytte**; netto selger → beholdnings-IE trekker opp → totaleffekten på etterspørselen er ubestemt, og **nytten kan øke**. Grafisk versjon: rotasjon gjennom $W$, kompensert linje gjennom gammelt konsumpunkt, tre bevegelser. Gjennomregnet Cobb-Douglas-eksempel med konkret beholdning. Nytteresonnementet via avslørte preferanser: netto selger kan alltid velge $W$ — og hadde råd til gammel tilpasning pluss litt til.
- **Oppgavesjangre:** E. Mønstereksempel (omskrevet): «En kornbonde konsumerer korn og 'alt annet', og eier kornbeholdningen sin. Verdensmarkedsprisen på korn stiger. Bruk Slutsky-likningen med beholdningsledd til å avgjøre hvordan bondens kornkonsum påvirkes, og forklar hvorfor bonden — i motsetning til en byhusholdning — kan komme bedre ut. Vis begge inntektseffektene hver for seg.»
- **Typiske feil:** Feil fortegn på beholdnings-IE (glemme at prisøkning på noe du er netto selger av øker realinntekten — dokumentert); slå sammen de to inntektseffektene så mekanismen forsvinner; bruke likningen uten $(\omega_1 - c_1)$-leddet; parallellskift i figuren (kap. 3.1-fellen); konkludere bestemt fortegn for netto selger (den totale etterspørselseffekten er ubestemt).
- **Quiz: 25 · Flashcards: 20**

#### Kapittel 3.3: Intertemporalt valg: sparing, lån og renten som pris

- **id:** `econ2220-3-3` · **number:** 3.3 · **estimatedMinutes:** 45 · **prerequisites:** `econ2220-3-2`
- **Kapitteltype:** teori
- **description:** To-periode-modellen som beholdningsøkonomi: budsjettet på nåverdiform, renten som relativpris på konsum i dag — og sparerens renteøkning som endowment-Slutsky.
- **Eksamensbelegg:** Sjanger E-intertemporal: bar **40 % av V2024-utsatt** — analysens funn 4 (utsatt-sjanger som egen kunne-kapittel); veiledningen kjørte endowment-Slutsky-logikken intertemporalt (renteøkning; sparer = netto tilbyder av konsum i dag). Nåverdiregning er kalkulatorfri per design (typetall à la $200 + 105/1{,}05 = 300$). Prioritet: **kunne** (avgjør konte og toppkarakter).
- **Innholdskontrakt:** To perioder med inntekt $(m_1, m_2)$ — en *beholdning av kjøpekraft over tid*; spare/låne til rente $r$. **Budsjettbetingelsen på nåverdiform**: $c_1 + \frac{c_2}{1+r} = m_1 + \frac{m_2}{1+r}$ (utledes fra periodebudsjettene); alternativt sluttverdiform. **Renten som relativpris**: prisen på konsum i dag målt i konsum i morgen er $(1+r)$ — budsjettlinjens helning; nåverdi kort repetert med kalkulatorfrie typetall (lenk [Nåverdi](/econ1210/econ1210-7-3) som forkunnskap). Optimering: Lagrange gir $u'_1/u'_2 = 1+r$ med tolkning (marginal betalingsvilje for konsum i dag målt i konsum i morgen = markedets bytteforhold via renten). **Sparer/låner = netto selger/kjøper av konsum i dag**: inntektspunktet $(m_1, m_2)$ spiller rollen som $W$; renteendring roterer budsjettlinjen gjennom det. **Renteøknings-analysen som endowment-Slutsky** (V2024-utsatt-sjangeren): for spareren (netto tilbyder av konsum i dag) gjør renteøkningen beholdningen mer verdt → SE mot mindre konsum i dag, beholdnings-IE mot mer → ubestemt effekt på dagens konsum, men nytten øker; for låneren entydig verre. 
- **Oppgavesjangre:** E-intertemporal + L. Mønstereksempel (omskrevet): «En husholdning har inntekt 300 i periode 1 og 210 i periode 2, og renten er 5 %. Sett opp budsjettbetingelsen på nåverdiform og regn ut nåverdien av inntekten uten kalkulator. Husholdningen sparer i utgangspunktet — bruk Slutsky-logikken til å avgjøre hvordan en renteøkning påvirker (i) nytten og (ii) konsumet i dag.»
- **Typiske feil:** Diskontere feil periode (blande nåverdi- og sluttverdiform); glemme at helningen er $-(1+r)$, ikke $-r$; behandle sparer og låner likt (nettoposisjonen avgjør); konkludere bestemt fortegn på sparerens konsum i dag (ubestemt); regne nåverdi med kalkulatortall der oppgaven er designet for hoderegning.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 3.4: Drill: beholdnings- og intertemporaloppgaven

- **id:** `econ2220-3-4` · **number:** 3.4 · **estimatedMinutes:** 75 · **prerequisites:** `econ2220-3-3`
- **Kapitteltype:** drill
- **description:** Konte-forsikringen: endowment-Slutsky og to-periode-varianten drillet i alle fortegnskombinasjoner.
- **Eksamensbelegg:** Dekker sjanger E i begge drakter — ordinært belegg V2025 (35–45 %) og 3 av 4 utsatt-sett + V2024-utsatt intertemporalt (40 %). Prioritet: **perfekt** for beholdning, **kunne** for intertemporalt.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) skriv budsjettet med beholdning (varer eller inntektsstrøm) og identifiser $W$; 2) fastslå nettoposisjonen ($c_1$ vs. $\omega_1$); 3) prisendring → roter linjen gjennom $W$ i figur; 4) Slutsky-likningen med endowment-ledd: fortegn på hvert ledd; 5) spalt inntektseffekten i ordinær og beholdnings-IE; 6) konkluder for etterspørsel OG nytte etter posisjon; 7) tolk alt i ord. Gjennomregnet eksamenscase med sensor-margnotater. **8–15 oppgaver på eksamensnivå** som systematisk roterer: netto kjøper vs. netto selger × prisøkning vs. prisfall × varebeholdning vs. to-periode-inntekt × spørsmål om etterspørsel vs. nytte × én sann/usann-variant («en prisøkning gjør alltid konsumenten fattigere» — usann for netto selger); nyskrevne case (strømprodusent med eget forbruk, bonde, pensjonssparer, student med studielån).
- **Oppgavesjangre:** E (begge varianter), L. Mønstereksempel: «(a) Sett opp budsjettet for en strømkunde med egne solcellepaneler som produserer mer enn eget forbruk om sommeren. (b) Strømprisen stiger — vis i figur og med Slutsky-likningen hvordan tilpasningen endres, og avgjør om kunden får høyere eller lavere nytte. (c) Sammenlikn med en leilighetskunde uten paneler.»
- **Typiske feil:** Fortegnsfeilene fra 3.2/3.3 i alle varianter; glemme nyttespørsmålet (oppgavene spør nesten alltid om begge); parallellskift; blande sparer/låner med kjøper/selger.
- **Quiz: 15 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (3.A beholdningsbudsjett + rotasjon + nettoposisjon, sjanger E-fundament; 3.B full endowment-Slutsky med begge inntektseffekter, sjanger E; 3.C to-periode-modellen med nåverdibudsjett og renteøkning, sjanger E-intertemporal; 3.D blandet konte-prøve på utsatt-nivå: endowment-Slutsky + intertemporal hale + sann/usann, sjanger E + L).

---

### Del 4 — Generell likevekt og velferdsteori *(prioritet: PERFEKT — 100 % frekvens i alle 11 sett)*

#### Kapittel 4.1: Bytteøkonomien og Edgeworth-boksen

- **id:** `econ2220-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ2220-3-1`
- **Kapitteltype:** teori
- **description:** Bytteboks-håndverket: konstruksjon, indifferenskurver mot hvert sitt origo, beholdningspunktet — og hvorfor samme linje er budsjettlinje for begge.
- **Eksamensbelegg:** Sjanger F i 5 av 11 sett (V2019, V2022, V2023, V2025 + V2023-utsatt); del av temaparet med 100 % frekvens. Faste delspørsmål dokumentert: (i) lese figuren (hvem eier mest av hva); (ii) markere en Pareto-effektiv allokering (tangering) og en ineffektiv (kryssende kurver → linsen); (iii) forklare hvordan handel løfter begge over autarki-nytten; (iv) **hvorfor samme linje er budsjettlinje for begge** — sensor godtar både det geometriske argumentet (Bs diagram rotert 180°, samme helning, felles punkt $W$) og adding-up-argumentet (total forbruksverdi = total beholdningsverdi, så As budsjett impliserer Bs). Prioritet: **perfekt**.
- **Innholdskontrakt:** To konsumenter A og B, to varer, beholdninger $\omega^A = (\omega_1^A, \omega_2^A)$ og $\omega^B$; **konstruksjonen steg for steg**: boksens dimensjoner = totale beholdninger; As origo nede til venstre, **Bs origo oppe til høyre** (rotert 180°); ethvert punkt i boksen = en fullstendig fordeling av totalmengdene; beholdningspunktet $W$; indifferenskurver som krummer mot hvert sitt origo. **Leseferdigheten**: hvem eier mest av hva, hvem får mer/mindre i en bevegelse. **Linsen**: i punkter der kurvene krysser, avgrenser de mengden av allokeringer begge foretrekker — Pareto-forbedringer; **tangering** $\text{MSB}_A = \text{MSB}_B$ = ingen gjensidig fordelaktige bytter igjen; kontraktkurven som samlingen av tangeringspunkter (intuisjon, kort). **Handelsgevinsten**: fra $W$ inn i linsen — begge over autarki-nytten. **Felles budsjettlinje — begge argumenter skal med**: geometrisk (Bs figur er rotert 180°: samme helning $-p_1/p_2$, felles punkt $W$) og adding-up (verdien av samlet konsum = verdien av samlet beholdning; når A overholder sitt budsjett, følger Bs av regnskapet).
- **Oppgavesjangre:** F. Mønstereksempel (omskrevet): «To hytteeiere A og B har beholdninger av ved og fisk. Tegn byttediagrammet med beholdningspunktet, marker én allokering som er Pareto-effektiv og én som ikke er det, og forklar forskjellen. Forklar deretter — med begge argumentene — hvorfor A og B står overfor samme budsjettlinje når de kan handle til prisene $p_1, p_2$.»
- **Typiske feil:** Tegne Bs indifferenskurver med krumning mot As origo; glemme at boksens sider er *totale* beholdninger; markere «effektiv» allokering uten tangering; kun ett av de to budsjettlinje-argumentene når oppgaven ber om forklaring; forveksle Pareto-forbedring (bevegelse) med Pareto-effektivitet (egenskap ved punktet).
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 4.2: Markedslikevekt i bytteøkonomien: definisjoner, klarering og Walras' lov

- **id:** `econ2220-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `econ2220-4-1`
- **Kapitteltype:** teori
- **description:** De presise definisjonene sensor krever — allokering, likevekt, generell mot partiell — pluss numerisk likevektspris og Walras' lov.
- **Eksamensbelegg:** Sjanger G: definisjonene etterspørres eksplisitt i V2020, V2023, V2024, V2025 + tre utsatt-sett (7 av 11). Dokumentert presisjonskrav: **markedslikevekt = priser + optimal tilpasning slik at samlet etterspørsel = tilgang *i alle markeder*** — det holder ikke å beskrive den enkeltes tilpasning (eksplisitt sensortrekk); grafisk er det nyttemaksimerende punktet på budsjettlinjen *samme punkt* for begge. Numerisk likevektspris testet V2020 og V2023 (kvasi-lineær variant); Walras' lov navngitt i V2019. Generell vs. partiell likevekt spurt i V2023-utsatt. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Definisjonstrioen i bokas standardformuleringer** (drilles som flashcard-gull): *Allokering* = en fullstendig fordeling av totalmengdene på konsumentene; *markedslikevekt* = et sett priser og en allokering slik at (i) hver konsument velger optimalt gitt prisene og sitt budsjett og (ii) samlet etterspørsel = samlet tilgang i **alle** markeder; *generell vs. partiell likevekt* = klarering i alle markeder samtidig vs. ett marked isolert. Grafisk i bytteboksen: begge konsumenters optimale valg på den felles budsjettlinjen er **samme punkt** — det er selve klareringsvilkåret. **Prisen som koordinator** (prissignal-fortellingen, kvalitativt): relativprisen formidler marginal betalingsvilje mellom aktører som aldri møtes; bare relativprisen $p_1/p_2$ er bestemt — normalisering ($p_2 = 1$) forklares. **Numerisk likevekt** (regneoppskrift): utled hver konsuments etterspørsel (Cobb-Douglas fra kap. 2.2 med beholdningsinntekt fra kap. 3.1), aggreger, sett samlet etterspørsel = samlet beholdning i ett marked, løs for relativprisen; kvasi-lineær variant der FOB $1/\sqrt{x} = p$ gir $x = 1/p^2$ og klarering gir prisen. **Walras' lov** som navngitt resultat: summen av verdien av overskuddsetterspørslene er null → klarerer $n-1$ markeder, klarerer det siste automatisk; derfor holder det å regne på ett marked i to-vare-økonomien.
- **Oppgavesjangre:** G + regnevariant. Mønstereksempel (omskrevet): «Definer begrepene allokering og markedslikevekt presist, og forklar forskjellen på generell og partiell likevekt. A og B har log-nytte med andeler 0,5/0,5 og beholdninger $\omega^A = (6, 2)$, $\omega^B = (2, 6)$. Sett $p_2 = 1$ og beregn likevektsprisen på vare 1. Forklar hvorfor du bare trenger å klarere ett av markedene, og navngi resultatet du bruker.»
- **Typiske feil:** Beskrive individuell tilpasning og kalle det likevekt — markedsklarering mangler (dokumentert sensortrekk); glemme «i alle markeder» i definisjonen; løse for absolutte priser uten normalisering; regne begge markeder uten å nevne Walras' lov (mister navngivnings-poenget); definere allokering som «en fordeling» uten fullstendighets-kravet.
- **Quiz: 20 · Flashcards: 25**

#### Kapittel 4.3: Pareto-effektivitet og velferdsteoremene

- **id:** `econ2220-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `econ2220-4-2`
- **Kapitteltype:** teori
- **description:** Emnets mest testede resultatpar: begge velferdsteoremene med den rangerte forutsetningslisten og verdimaksimerings-argumentet sensor selv bruker.
- **Eksamensbelegg:** Sjanger H: velferdsteoremene eksplisitt i 6 av 7 ordinære sett (86 %) + 2 av 4 utsatt; Pareto-definisjonen i **alle 11 sett** (100 %). Dokumentert: **forutsetningene gir poengene** — kjernetrioen pristakere/ingen eksternaliteter/rivaliserende goder er «det sensor har brukt mest tid på»; bonuslisten (lokalt umettelige preferanser, kjente priser/kvalitet, ingen transaksjonskostnader, ingen stordriftsfordeler) gir ekstra; 2. teorem krever i tillegg konvekse preferanser og kostnadsfri omfordeling. **Verdimaksimerings-argumentet er foreleserens eget** (gjentatt i to veiledninger — tryggest i boka); tangeringsargumentet i bytteboksen godtas også. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Pareto-effektivitet presist**: en allokering er Pareto-effektiv når ingen kan få høyere nytte uten at noen andre får lavere; Pareto-forbedring som bevegelses-begrep. **1. velferdsteorem**: enhver markedslikevekt er Pareto-effektiv. **2. velferdsteorem**: enhver Pareto-effektiv allokering kan realiseres som markedslikevekt etter en (kostnadsfri) omfordeling av beholdningene. **Forutsetningslisten rangert som på eksamen**: kjernetrio — (i) alle er pristakere (ingen markedsmakt), (ii) ingen eksterne virkninger, (iii) godene er rivaliserende (ingen fellesgoder); bonus — lokalt umettelige/voksende preferanser, kjente priser og kvalitet, ingen transaksjonskostnader, ingen stordriftsfordeler; tillegg for 2. teorem — konvekse preferanser + kostnadsfri omfordeling. Her (og KUN her) omtales monopol/asymmetrisk informasjon/kollektive goder — som *forutsetningsbrudd*, med lenker til [Monopolets tilpasning](/econ1210/econ1210-5-1) og [Kollektive goder og markedssvikt-katalogen](/econ1210/econ1210-4-3) for selve apparatet. **Verdimaksimerings-argumentet steg for steg** (bokas hovedbevis): hver konsument har valgt den beste kurven budsjettet tillater; skal noen få det bedre, må de få varer av høyere verdi til gjeldende priser — men totalverdien er gitt (i produksjonsøkonomien: maksimert av bedriftene), så noen andre må få varer av lavere verdi, og dermed lavere nytte (de hadde alt valgt optimalt). Tangeringsargumentet som godkjent alternativ: i likevekt er $\text{MSB}_A = p_1/p_2 = \text{MSB}_B$ → tangering → ingen linse. Prissignal-fortellingen som intuisjonen bak 1. teorem.
- **Oppgavesjangre:** H + G. Mønstereksempel (omskrevet): «Formuler begge velferdsteoremene presist. Hvilke forutsetninger bygger det første på — og hvilke ekstra krav stiller det andre? Gi deretter et argument for at markedslikevekten i en bytteøkonomi er Pareto-effektiv, uten å bruke figur.»
- **Typiske feil:** Stryke forutsetningene eller ramse dem uten rangering (kjernetrioen skal frem); blande 1. og 2. teorem (retningene er motsatte); glemme konveksitets- og kostnadsfri-omfordeling-kravene i 2. teorem; «bevise» 1. teorem ved å gjenta definisjonen av likevekt; tro at teoremet sier at markedet er *rettferdig* (forbereder 4.4).
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 4.4: Omfordeling og Pareto-begrepets grenser

- **id:** `econ2220-4-4` · **number:** 4.4 · **estimatedMinutes:** 45 · **prerequisites:** `econ2220-4-3`
- **Kapitteltype:** teori
- **description:** Anvendelsene som skiller A-kandidatene: omfordelingsanalyse med 2. teorem, hjørneallokeringer — og hvorfor Pareto-begrepet er blindt for fordeling.
- **Eksamensbelegg:** Anvendelsesvariantene er dokumenterte gjengangere: kan staten nå alle Pareto-effektive allokeringer ved konfiskasjon og omdeling? (V2020 — ja, 2. teorem); «skattlegging» ved å flytte beholdning fra B til A → ny likevekt som ikke er en Pareto-*forbedring*, men likevel Pareto-*effektiv* (V2025); hjørneallokering der én konsument eier alt er også Pareto-effektiv → **Pareto-begrepet sier ingenting om fordeling** (gjenganger-poeng, V2019 + V2025). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Omfordelingsanalysen som oppskrift**: flytt beholdning (lumpsum) fra B til A → nytt beholdningspunkt → ny budsjettlinje → ny likevekt; den nye likevekten er Pareto-effektiv (1. teorem gjelder fortsatt — omfordelingen endrer *utgangspunktet*, ikke mekanismen); men bevegelsen fra gammel til ny likevekt er **ikke** en Pareto-forbedring (B taper) — begrepsparet forbedring/effektivitet holdes fra hverandre. **2. teorem operativt**: enhver ønsket Pareto-effektiv allokering kan nås ved først å omfordele beholdningene og så la markedet virke — statens fordelingspolitikk kan i prinsippet skilles fra effektivitetspolitikken (kostnadsfri omfordeling som kritisk forutsetning; én setning om at reell skattlegging vrir priser). **Hjørneresultatet**: allokeringen der A eier alt er Pareto-effektiv (enhver endring gjør A verre) → effektivitet er forenlig med ekstrem ulikhet → **Pareto-begrepet er et effektivitets-, ikke rettferdighetsbegrep**; normative vurderinger krever noe mer (én nøktern setning — ingen politisk slagside). Kontraktkurven som menyen 2. teorem velger fra.
- **Oppgavesjangre:** H-anvendelse + L. Mønstereksempel (omskrevet): «Myndighetene flytter en del av Bs beholdning over til A, og markedet finner en ny likevekt. Ta stilling til påstandene: (i) 'Den nye likevekten er en Pareto-forbedring.' (ii) 'Den nye likevekten er Pareto-effektiv.' (iii) 'At en allokering er Pareto-effektiv, betyr at den er rimelig fordelt.' Begrunn hvert svar.»
- **Typiske feil:** Tolke Pareto-effektivitet normativt (dokumentert gjenganger-trekk); kalle omfordelingslikevekten en Pareto-forbedring; tro at 1. teorem slutter å gjelde etter omfordeling; overse at hjørneallokeringer er effektive; glemme kostnadsfri-forutsetningen når 2. teorem anvendes politisk.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 4.5: Drill: likevekts- og velferdsoppgaven

- **id:** `econ2220-4-5` · **number:** 4.5 · **estimatedMinutes:** 90 · **prerequisites:** `econ2220-4-4`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på oppgave 2 — eksamens tyngste enkeltoppgave (35–50 %): bytteboks, definisjoner, numerisk likevekt, teoremene og omfordelingshalen i én kjede.
- **Eksamensbelegg:** Dekker sjangrene F, G og H — oppgaven med 100 % frekvens i alle 11 sett og 35–50 % av poengene i 2023–2025-regimet. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) tegn boksen korrekt (dimensjoner, origo-plassering, $W$); 2) svar på leseferdighets-spørsmål; 3) definisjonene ordrett-presist (allokering/likevekt/Pareto); 4) marker effektiv (tangering) og ineffektiv (linse) allokering; 5) felles budsjettlinje med begge argumenter; 6) numerisk: utled etterspørsler, klarer ett marked, påkall Walras; 7) teoremene med rangert forutsetningsliste; 8) verdimaksimerings-argumentet; 9) omfordelings-/anvendelseshale (forbedring vs. effektivitet). Gjennomregnet eksamenscase med sensor-margnotater. **10–15 oppgaver på eksamensnivå** som roterer: ulike beholdningsfordelinger × Cobb-Douglas vs. kvasi-lineær × definisjonsspørsmål × teorem-med-forutsetninger × omfordelingsvariant × konfiskasjon-og-omdeling-varianten × hjørneallokering-påstand; nyskrevne case (studenter som deler matbudsjett, to land som bytter energi og korn, hyttenaboer).
- **Oppgavesjangre:** F, G, H i full kjede. Mønstereksempel: «(a) Tegn byttediagrammet og marker beholdningspunktet. (b) Definer markedslikevekt presist. (c) Beregn likevektsprisen når begge har log-nytte. (d) Vis at likevekten er Pareto-effektiv — uten figur. (e) Staten omfordeler før handelen starter — hva sier det andre velferdsteoremet om hva som kan oppnås?»
- **Typiske feil:** Hele §5-repertoaret for oppgave 2: individuell tilpasning kalt likevekt; strøkne forutsetninger; blandede teoremer; normativ Pareto-tolkning; feiltegnet boks; manglende Walras-navngiving.
- **Quiz: 15 · Flashcards: 10**

**Prøve-kvote Del 4:** 4 prøver (4.A bytteboks-håndverket med felles budsjettlinje, sjanger F; 4.B definisjonstrioen + numerisk likevekt + Walras, sjanger G; 4.C teoremene med forutsetninger + verdimaksimerings-argumentet, sjanger H; 4.D full likevekts- og velferdsoppgave på eksamensnivå med omfordelingshale, sjanger F+G+H).

---

### Del 5 — Produsentteori *(prioritet: PERFEKT — fast oppgave siden 2022)*

#### Kapittel 5.1: Produktfunksjonen og skalautbytte

- **id:** `econ2220-5-1` · **number:** 5.1 · **estimatedMinutes:** 45 · **prerequisites:** `econ2220-1-3`
- **Kapitteltype:** teori
- **description:** Teknologien: produktfunksjon, marginalprodukter — og skalautbytte-testen $F(tK,tL) \gtreqless tF(K,L)$ som sensor krever utført, ikke påstått.
- **Eksamensbelegg:** Skalautbytte (definisjon + kobling til kostnads-/tilbudskurver) i **alle tre siste ordinære sett (3/3)** + 2 av 4 utsatt; sensorkrav dokumentert: skalautbytte krever $F(tK,tL)$-testen (eller $c''$-fortegnet, kap. 5.3) — verbal påstand gir trekk. Prioritet: **perfekt**.
- **Innholdskontrakt:** Produktfunksjonen $F(K,L)$ (og én-faktor-varianten $x = F(n)$); marginalproduktene $F'_K, F'_L$ og avtakende marginalproduktivitet (brukes igjen i PMK-krumningen, kap. 6.1); isokvanter som teknologiens «indifferenskurver». **Skalautbytte-definisjonene via testen**: konstant hvis $F(tK,tL) = tF(K,L)$ for $t > 1$, tiltakende hvis $>$, avtakende hvis $<$ — utfør testen eksplisitt på konkrete funksjoner: $\sqrt{KL}$ (konstant), $K^{1/3}L^{1/3}$ (avtakende), $K^{2/3}L^{2/3}$ (tiltakende); Cobb-Douglas-regelen (eksponentsummen mot 1) som huskeregel *etter* testen. Skille aktivt/passivt: testen skal kunne *utføres* (aktiv ferdighet); intuisjonen (kopiere fabrikken; koordinasjonskostnader; en fast faktor i det skjulte) kvalitativt. Forhåndsvarsle koblingen som eksamen alltid spør om: skalaregime ↔ kostnadsfunksjonens form ↔ tilbudskurven (kap. 5.3–5.4).
- **Oppgavesjangre:** J-fundament. Mønstereksempel (omskrevet): «Et gartneri har produktfunksjonen $F(K,L) = K^{0{,}4}L^{0{,}4}$. Avgjør ved å teste $F(tK,tL)$ hvilket skalautbytte teknologien har, og forklar med ord hva svaret betyr for kostnadene ved å doble produksjonen.»
- **Typiske feil:** Påstå skalautbytte fra eksponentsummen uten å utføre testen (sensor krever visning); blande avtakende *marginalproduktivitet* (én faktor økes) med avtakende *skalautbytte* (alle faktorer skaleres); regne testen med $t$ satt inn feil; glemme tolkningen etter testen.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 5.2: Kostnadsminimering: Lagrange uten fluktrute

- **id:** `econ2220-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ2220-5-1`
- **Kapitteltype:** teori
- **description:** $\min rK + wL$ gitt $F(K,L) = \bar{y}$: problemet der innsetting er umulig, MTSB-tolkningen — og fellen om hva kostnadsminimering IKKE bestemmer.
- **Eksamensbelegg:** Sjanger I: full utledning i V2025, påstandsvariant i V2023, hele veien til kostnadsfunksjonen i V2023-utsatt. Dokumenterte sensorkrav: **innsetting er umulig her; Lagrange må brukes** (eksplisitt i V2025-veiledningen); FOB gir $F'_K/F'_L = r/w$ med tolkning i enheter. Klassisk felle testet som påstand (V2023): kostnadsminimering bestemmer **ikke** produsert kvantum — bare billigste faktormiks for gitt kvantum; implikasjonen går motsatt vei (profittmaksimering ⇒ kostnadsminimering). Prioritet: **perfekt**.
- **Innholdskontrakt:** Problemet $\min rK + wL$ gitt $F(K,L) = \bar{y}$; **hvorfor innsetting ikke er tilgjengelig** (beskrankningen kan generelt ikke løses ut — kap. 1.3-poenget gjentas der det gjelder); Lagrange steg for steg; FOB-ene kombineres til **$F'_K/F'_L = r/w$: MTSB = faktorprisforholdet**, med bokas enhetstolkning: hvor mange enheter arbeid som må erstatte én enhet kapital for uendret produksjon, skal være lik hvor mange enheter arbeid markedet gir for én enhet kapital. Grafisk: isokvanten tangerer den innerste oppnåelige isokostlinjen (kostnadsminimering «speiler» konsumentens problem — pedagogisk bro til kap. 2.1). Gjennomregnet eksempel med $F = \sqrt{x_1 x_2}$-type teknologi **hele veien til kostnadsfunksjonen** $c(y) = 2y\sqrt{rw}$ (V2023-utsatt-løypa, med bokas faktorprisnotasjon). **Felle-delkapitlet**: kostnadsminimering tar $\bar{y}$ som gitt — den sier ingenting om hvor mye som skal produseres; logikken går én vei: profittmaksimering ⇒ kostnadsminimering, aldri omvendt (sann/usann-drill).
- **Oppgavesjangre:** I + L. Mønstereksempel (omskrevet): «Et vaskeri skal levere $\bar{y}$ tonn tøy med teknologien $F(K,L) = \sqrt{KL}$, og står overfor faktorprisene $r$ og $w$. Forklar hvorfor problemet må løses med Lagrange, utled førsteordensbetingelsen og tolk den i enheter. Utled kostnadsfunksjonen. Ta så stilling til: 'Et vaskeri som minimerer kostnadene, maksimerer dermed profitten.'»
- **Typiske feil:** Prøve innsettingsmetoden (dokumentert — beskrankningen kan ikke løses ut); tro at kostnadsminimering bestemmer kvantum (V2023-fellen); MTSB-tolkning som bare gjentar brøken; blande isokost (helning $-r/w$... presiser konvensjon) og isokvant; stoppe før kostnadsfunksjonen når oppgaven ber om den.
- **Quiz: 25 · Flashcards: 20**

#### Kapittel 5.3: Kostnadsfunksjoner: skalaregimene og kort sikt

- **id:** `econ2220-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ2220-5-2`
- **Kapitteltype:** teori
- **description:** Fra teknologi til kostnadsbilde: $c(y)$ under tre skalaregimer, marginal- og gjennomsnittskostnad, kort sikt med fast kapital — og nedleggingsbetingelsen.
- **Eksamensbelegg:** Kostnads-/tilbudskurve-koblingen fast i skalautbytte-batteriet (3/3 siste år): avtakende skala ↔ stigende MK ↔ konveks kostnadsfunksjon (**vis $c''(y) > 0$**); konstant skala ↔ $c(y) = k \cdot y$. Kort sikt testet V2024-utsatt: fast kapital gir $c_v(y) = wy^2$ fra $y = \sqrt{l}$; sunk kost påvirker ikke kvantumsvalget; gjenvinnbare faste kostnader gir nedleggingsbetingelsen $p < \min \text{GK}$. MK/GK-diagram med profitt som rektangelareal (V2025). Prioritet: **perfekt**.
- **Innholdskontrakt:** Kostnadsfunksjonen $c(y)$ som *resultatet* av kostnadsminimering for hvert kvantum (broen fra 5.2); marginalkostnad $c'(y)$ og gjennomsnittskostnad $c(y)/y$ med figurregler (MK skjærer GK i GK-minimum). **Skalaregime-tabellen** (eksamens faste treklang): avtakende skala ↔ $c$ konveks ↔ $c''(y) > 0$ ↔ stigende MK; konstant skala ↔ $c(y) = k\,y$ (der $k$ = enhetskostnaden gitt faktorprisene) ↔ MK = GK konstant; tiltakende skala ↔ fallende GK — hvert ledd skal kunne *vises*, med $c''$-fortegnet som godkjent alternativ til $F(tK,tL)$-testen. **Kort sikt**: kapital fast → variable kostnader fra én-faktor-teknologien: $y = \sqrt{l}$ gir $l = y^2$ og $c_v(y) = wy^2$ (regnes ut); faste kostnader: **sunk** (ugjenkallelige — irrelevante for kvantumsvalget) vs. **gjenvinnbare** (kan unngås ved nedlegging) → nedleggingsbetingelse: legg ned hvis $p < \min$ gjennomsnittskostnad inklusive de gjenvinnbare. MK/GK-diagrammet etableres som bokas standardfigur, med profitt som rektangelareal $(p - \text{GK}(y^*))\,y^*$.
- **Oppgavesjangre:** J. Mønstereksempel (omskrevet): «Et bakeri har på kort sikt teknologien $y = \sqrt{l}$ og timelønn $w$, pluss en husleie som delvis kan sies opp. Utled de variable kostnadene og marginalkostnaden, vis at kostnadsfunksjonen er konveks, og forklar under hvilken betingelse bakeriet bør stenge — og hvorfor den ugjenkallelige delen av husleien ikke inngår i vurderingen.»
- **Typiske feil:** Påstå kurveform uten å vise $c''$-fortegn; blande MK og GK (og tegne MK gjennom feil punkt på GK); la sunk kost påvirke kvantums-/nedleggingsvalget; glemme at konstant skala gir *lineær* kostnadsfunksjon; regne $c_v$ feil fra teknologien (glemme å invertere).
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 5.4: Profittmaksimering, tilbudskurven og nullprofitt

- **id:** `econ2220-5-4` · **number:** 5.4 · **estimatedMinutes:** 60 · **prerequisites:** `econ2220-5-3`
- **Kapitteltype:** teori
- **description:** $p = c'(y)$, tilbudskurven i begge skalaregimer, nullprofitt-resultatet med alternativkostnad på kapital — og grunnrente-drøftingen som topper oppgave 3.
- **Eksamensbelegg:** Sjanger J fast siden 2022 (V2022, V2023, V2024, V2025 + 2 utsatt): profittmaks $\max py - c(y)$ → $p = c'(y)$; én-faktor-varianten $\max pF(n) - wn$ → $pF'(n) = w$ med tolkning (V2022: $w/p$ signaliserer arbeidskraftens marginale verdi for resten av økonomien). Konstant skala ↔ **horisontal tilbudskurve** (null under, «uendelig» over; likevekt krever $p$ = enhetskostnaden) ↔ **nullprofitt** — og tolkningen (V2024): null *renprofitt* betyr at driftsoverskuddet akkurat dekker alternativkostnaden på kapitalen; regnskapsmessig overskudd er forenlig med resultatet. Toppsjikt-drøfting (V2025): hvorfor kan $p > \text{GK}$ vare i årevis — grunnrente (olje, oppdrett, vannkraft), etableringshindringer, nettverkseffekter; åpen oppgave uten fasit. Prioritet: **perfekt**.
- **Innholdskontrakt:** Profittmaksimering $\max_y\, py - c(y)$: FOB $p = c'(y)$ med tolkning (utvid produksjonen til siste enhet akkurat dekker sin marginalkostnad); andreordensbetingelsen kort (stigende MK). Én-faktor-varianten $\max_n\, pF(n) - wn$ → $pF'(n) = w$: verdien av marginalproduktet = faktorprisen; realavlønningstolkningen av $w/p$. **Tilbudskurven i to regimer**: avtakende skala → tilbud = den stigende MK-kurven over min GK (nedleggingsbetingelsen fra 5.3); konstant skala → **horisontal tilbudskurve** ved enhetskostnaden — under: null; over: ubegrenset; markedslikevekt krever da $p = $ enhetskostnad → **nullprofitt-resultatet**. **Nullprofitt tolket riktig** (eget delkapittel — dokumentert eksamenskrav): kostnadsfunksjonen inkluderer alternativkostnaden på kapitalen (normalavkastning); null renprofitt = eierne får normal avkastning, ikke «ingen tjener penger»; forsoning med observerte regnskapsoverskudd. **Grunnrente-drøftingen** (toppsjikt, forberedelse til sjanger M): varig $p > \text{GK}$ peker mot en knapp faktor ingen kan kopiere — naturressurser (grunnrente i olje/oppdrett/vannkraft), etableringshindringer, nettverkseffekter; renprofitt konkurreres normalt bort ved fri etablering; strukturert teoribruk uten fasit. MK/GK-diagram med profittareal gjentas som figurstandard.
- **Oppgavesjangre:** J + L + M-hale. Mønstereksempel (omskrevet): «En transportbedrift har konstant skalautbytte. Utled tilbudskurven og forklar hvorfor likevekten gir null renprofitt. Regnskapet viser likevel overskudd år etter år — ta stilling til om det motsier resultatet. Drøft til slutt hvorfor lønnsomheten i enkelte norske næringer kan ligge over normalen i lang tid.»
- **Typiske feil:** Nullprofitt tolket som «ingen tjener penger» (dokumentert — alternativkostnaden på kapital ligger i kostnadsfunksjonen); glemme nedleggingsbetingelsen i tilbudskurven; horisontalt tilbud behandlet som stigende; $pF'(n) = w$ uten tolkning; i den åpne drøftingen: skrive om noe annet enn det spurte.
- **Quiz: 25 · Flashcards: 20**

#### Kapittel 5.5: Drill: produsentoppgaven

- **id:** `econ2220-5-5` · **number:** 5.5 · **estimatedMinutes:** 90 · **prerequisites:** `econ2220-5-4`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på oppgave 3: kostnadsminimering → kostnadsfunksjon → skalabatteri → profittmaks → tilbud → nullprofitt/grunnrente i én kjede.
- **Eksamensbelegg:** Dekker sjangrene I og J — fast oppgave (20–50 %) i alle sett siden 2022 og 2 av 4 utsatt; skalautbytte-batteriet 3/3 siste år. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) klassifiser teknologien med $F(tK,tL)$-testen; 2) kostnadsminimering med Lagrange (aldri innsetting), MTSB = $r/w$ tolket i enheter; 3) utled $c(y)$; 4) vis kurveform med $c''$-fortegn og koble til skalaregimet; 5) profittmaks $p = c'(y)$, løs for $y^*$; 6) tilbudskurven (regime-avhengig) og nedleggingsbetingelse; 7) nullprofitt-tolkningen der skalaen er konstant; 8) grunnrente-/drøftingshale. Gjennomregnet eksamenscase med sensor-margnotater. **10–15 oppgaver på eksamensnivå** som roterer: konstant vs. avtakende skala × to-faktor vs. én-faktor × lang vs. kort sikt (inkl. $c_v = wy^2$-varianten og sunk kost) × påstandsvarianter («kostnadsminimering ⇒ profittmaksimering»; «overskudd i regnskapet motbeviser nullprofitt») × én åpen norsk-økonomi-drøfting; nyskrevne case (settefiskanlegg, datasenter, snekkerverksted, solkraftpark).
- **Oppgavesjangre:** I, J, L, M-hale i full kjede. Mønstereksempel: «(a) Test skalautbyttet til $F(K,L) = K^{1/2}L^{1/2}$. (b) Utled kostnadsfunksjonen med Lagrange. (c) Hva er tilbudskurven, og hvorfor? (d) Vis at likevekten gir null renprofitt, og forklar hva resultatet betyr — og ikke betyr. (e) Drøft hvorfor kraftprodusenter likevel kan ha varig høy lønnsomhet.»
- **Typiske feil:** Hele §5-repertoaret for oppgave 3: innsetting på kostnadsminimering; kvantum fra kostnadsminimering; påstått skalautbytte; feiltolket nullprofitt; MK/GK-forveksling; utolkede betingelser.
- **Quiz: 15 · Flashcards: 10**

**Prøve-kvote Del 5:** 4 prøver (5.A skalautbytte-testen + intuisjon, sjanger J-fundament; 5.B kostnadsminimering med Lagrange, MTSB-tolkning og kostnadsfunksjon + påstandsfelle, sjanger I + L; 5.C kort sikt: $c_v$, sunk kost, nedlegging og MK/GK-diagram, sjanger J; 5.D full produsentoppgave på eksamensnivå med nullprofitt og grunnrente-drøfting, sjanger I+J+M).

---

### Del 6 — Likevekt med produksjon og eksternaliteter *(prioritet: KUNNE — utsatt-favoritt og toppkarakter-stoff)*

#### Kapittel 6.1: Produksjonsmulighetskurven og MTB

- **id:** `econ2220-6-1` · **number:** 6.1 · **estimatedMinutes:** 45 · **prerequisites:** `econ2220-5-1`, `econ2220-4-2`
- **Kapitteltype:** teori
- **description:** Fra teknologi og ressursskranke til produksjonsmulighetskurven — helningen som MTB, krumningen fra avtakende marginalproduktivitet.
- **Eksamensbelegg:** PMK fra eksplisitt teknologi er sjanger K-fundament: V2025-utsatt ($x_1 = \sqrt{L_1}$, $x_2 = \sqrt{L_2}$, $L_1 + L_2 = L$ ⇒ $x_1^2 + x_2^2 = L$); V2018-varianten med generelle $f(n_1), g(n_2)$ — forklar hvorfor kurven blir brattere mot høyre via avtakende marginalproduktivitet begge steder. MTB/MSB-likevekt i 3 av 4 utsatt-sett + V2023. Prioritet: **kunne**.
- **Innholdskontrakt:** Oppsettet: én ressurs (arbeidskraft $L$), to produksjonssektorer med teknologier $x_1 = f(n_1)$, $x_2 = g(n_2)$, ressursskranke $n_1 + n_2 = L$. **Utled PMK eksplisitt** for kvadratrot-teknologiene: $n_1 = x_1^2$, $n_2 = x_2^2$ → $x_1^2 + x_2^2 = L$ (kvartsirkel); generell variant med $f, g$. **MTB** = tallverdien av PMK-helningen: hvor mange enheter vare 2 samfunnet må gi opp for én ekstra enhet vare 1 — alternativkostnad på samfunnsnivå; uttrykt via marginalproduktene ($\text{MTB} = g'(n_2)/f'(n_1)$). **Krumningen**: avtakende marginalproduktivitet i begge sektorer → stadig dyrere å vri produksjonen → PMK konkav (brattere mot høyre) — fortelles i ord slik eksamen krever. **Verdimaksimering på kurven**: $\max p_1x_1 + p_2x_2$ på PMK (Lagrange eller isoprofitt-tangering) gir **MTB = $p_1/p_2$** — bedriftenes tilpasning setter samfunnets bytteforhold lik markedets.
- **Oppgavesjangre:** K-fundament. Mønstereksempel (omskrevet): «En øyøkonomi har 100 arbeidstimer som kan brukes til å sanke bær ($x_1 = \sqrt{n_1}$) eller fange krabbe ($x_2 = \sqrt{n_2}$). Utled produksjonsmulighetskurven, forklar hva helningen måler, og vis at verdimaksimering til gitte priser krever MTB = prisforholdet.»
- **Typiske feil:** Tegne PMK lineær (glemme krumningsargumentet); MTB uten enhetstolkning; feil vei i utledningen (glemme å invertere teknologien); slurve med hvilken vare som står på hvilken akse i helningsuttrykket.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 6.2: Robinson–Fredag-økonomien: MTB = MSB

- **id:** `econ2220-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ2220-6-1`, `econ2220-4-3`
- **Kapitteltype:** teori
- **description:** Likevekt med produksjon: effektivitetsbetingelsen MTB = MSB, den konkrete Pareto-forbedringen når den brytes — og planlegger-versjonen.
- **Eksamensbelegg:** Sjanger K er **utsatt-eksamenens favoritt**: V2023-utsatt (50 %), V2024-utsatt (30 %), V2025-utsatt (35 %) + V2018 (planlegger-versjonen med $u'_1/u'_2 = g'/f'$) og V2023 h — analysens prognose: MTB=MSB «står for tur ordinært». Fast toppsjikt-øvelse dokumentert: gitt MTB = 2 og MSB = 1 — konstruer den konkrete Pareto-forbedringen (vri produksjonen, kompenser, del overskuddet). Med negativ eksternalitet i produksjonen sikrer MTB = MSB **ikke** lenger effektivitet (V2023-utsatt). Prioritet: **kunne** (avgjør konte og toppkarakter).
- **Innholdskontrakt:** Økonomien med produksjon og konsum (Robinson–Fredag-innramming): produsentsiden velger punkt på PMK med MTB = $p_1/p_2$ (kap. 6.1); konsumentsiden tilpasser seg med MSB = $p_1/p_2$ (kap. 2.1) → i markedslikevekt: **MTB = MSB** — og det er effektivitetsbetingelsen med produksjon (1. velferdsteorem i produksjonsøkonomien). Tolkningen i enheter: det samfunnet må gi opp av vare 2 for én ekstra vare 1 (produksjonssiden) = det konsumentene er villige til å gi opp (konsumsiden). **Pareto-forbedringskonstruksjonen** (toppsjikt-øvelsen, steg for steg): anta MTB = 2, MSB = 1 — å produsere én vare 1 mindre frigjør 2 enheter vare 2, men konsumenten krever bare 1 for å være like fornøyd → 1 enhet til overs → del overskuddet, alle bedre stilt; generaliser (avvik uansett retning gir en gjennomførbar forbedring). **Planlegger-versjonen** (V2018-varianten): maksimer nytte direkte på PMK → $u'_1/u'_2 = g'(n_2)/f'(n_1)$ — samme betingelse uten priser; markedet desentraliserer planleggerens løsning (prissignal-fortellingen fullføres). **Eksternalitets-forbeholdet** (bro til 6.3): med negativ eksternalitet i produksjonen er privat MTB ≠ samfunnets reelle transformasjonsbrøk → MTB = MSB sikrer ikke lenger effektivitet.
- **Oppgavesjangre:** K. Mønstereksempel (omskrevet): «I en økonomi er MTB = 3 og MSB = 1. Forklar hvorfor allokeringen ikke er Pareto-effektiv, og konstruer eksplisitt en omlegging av produksjon og konsum som gjør alle bedre stilt. Vis deretter at markedslikevekten oppfyller MTB = MSB, og forklar prisenes rolle.»
- **Typiske feil:** Gjengi MTB = MSB uten å kunne *konstruere* forbedringen ved avvik (selve toppsjikt-testen); blande MTB og MSB (hvilken side av økonomien de kommer fra); glemme at begge lik prisforholdet er *mekanismen*; overse eksternalitets-forbeholdet når oppgaven legger opp til det.
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 6.3: Eksternaliteter: når velferdsteoremene ryker

- **id:** `econ2220-6-3` · **number:** 6.3 · **estimatedMinutes:** 40 · **prerequisites:** `econ2220-6-2`
- **Kapitteltype:** teori
- **description:** Negative eksterne virkninger som forutsetningsbrudd: overforbruk, Pigou-prising som førstevalg — og elbil-substituerbarhets-casen.
- **Eksamensbelegg:** Eksternaliteter bar 20 % av V2018 og 20 % av V2025-utsatt (elbil-casen); kjerneforutsetning i sjanger H (kap. 4.3) og forbeholdet i sjanger K (kap. 6.2); Pigou-logikken dokumentert sensor-favoritt: prising av den eksterne virkningen gir ønsket atferdsendring uten utilsiktede vridninger. Prioritet: **kunne**.
- **Innholdskontrakt:** Negativ eksternalitet: privatøkonomisk kostnad < samfunnsøkonomisk kostnad → markedet **overproduserer/overforbruker** relativt til effektiv mengde; positive eksternaliteter speilvendt (kort). Kobling bakover: bryter forutsetning (ii) i velferdsteoremene (kap. 4.3) og gjør MTB = MSB utilstrekkelig (kap. 6.2). **Pigou-logikken**: legg en pris på den eksterne virkningen lik marginal ekstern kostnad → aktørene internaliserer; hvorfor prising foretrekkes fremfor påbud (treffer marginalvurderingene, ikke vilkårlige vridninger) — hovedapparatet med FK-figurer bor i [Eksterne virkninger og Pigou-avgiften](/econ1210/econ1210-4-1) og [Karbonprising](/econ1210/econ1210-4-2); dette kapitlet holder seg til 2220-vinklingene: forutsetningsbrudd + generell likevekt. **Substituerbarhets-casen** (V2025-utsatt-sjangeren, forberedelse til kap. 8.1): subsidie på elbil-*bruk* når fossil- og elbil er nære substitutter → relativprisen avgjør nesten alt, fossilbruken presses mot null; fjerne substitutter → subsidien øker mest total bilbruk — virkemiddeleffekt avhenger av substituerbarheten. Presis lesing av oppgaven (bruk vs. kjøp — dokumentert felle).
- **Oppgavesjangre:** H-forutsetningsbrudd + M. Mønstereksempel (omskrevet): «Produksjonen av en vare slipper ut mikroplast som skader fisket. Forklar hvorfor markedslikevekten ikke lenger er Pareto-effektiv, hvilket av velferdsteoremets vilkår som er brutt, og hvorfor en avgift per enhet utslipp er økonomenes førstevalg. Drøft til slutt hvordan effekten av en subsidie på et 'grønt' substitutt avhenger av hvor nære substitutter varene er.»
- **Typiske feil:** Si «forurensning er ulovlig/umoralsk» i stedet for kostnadskilen; glemme hvilken forutsetning som brytes; anbefale forbud uten å sammenlikne med prising; svare om kjøp når oppgaven spør om *bruk* (dokumentert felle); glemme at MTB = MSB fortsatt kan holde privat uten å være samfunnsøkonomisk riktig.
- **Quiz: 15 · Flashcards: 15**

**Prøve-kvote Del 6:** 4 prøver (6.A PMK-utledning fra teknologi + MTB-tolkning, sjanger K-fundament; 6.B MTB=MSB med Pareto-forbedringskonstruksjonen, sjanger K; 6.C planlegger-versjonen + prissignal-fortellingen, sjanger K + G; 6.D eksternalitet i produksjonsøkonomien med Pigou- og substituerbarhets-drøfting på utsatt-nivå, sjanger K + H + M).

---

### Del 7 — Beredskap: spillteori og atferdsøkonomi *(prioritet: KJENNE — 0 % siden 2022, men står i emnebeskrivelsen)*

#### Kapittel 7.1: Statisk spillteori: Nash, dominans og rasjonaliserbarhet

- **id:** `econ2220-7-1` · **number:** 7.1 · **estimatedMinutes:** 45 · **prerequisites:** `econ2220-0-1`
- **Kapitteltype:** teori (beredskap)
- **description:** NE-definisjonen, beste-svar-analyse i matrisen og iterert eliminering — vedlikeholdsdose for et tema som kan komme tilbake.
- **Eksamensbelegg:** Sjanger N: spillteori bar 30–40 % av hvert sett 2018–2022 (inkl. 30 %-flervalgsblokk V2019), **null forekomster 2023–2025** (ordinær + utsatt, kun V2022-utsatt i randsonen). Beholdes fordi emnebeskrivelsen (verifisert 2026) fortsatt lister temaet og fire årganger med tunge spilloppgaver ligger i arkivet studentene øver på. Dokumenterte krav den gang: definer NE (ingen angrer gitt de andres valg); finn NE ved beste-svar-analyse; rasjonelle vs. **rasjonaliserbare** strategier via iterert eliminering av strengt dominerte strategier — inkludert dominans av **blandede** strategier (V2022). Prioritet: **kjenne**.
- **Innholdskontrakt:** Normalform: spillere, strategier, payoffs; **Nash-likevekt definert presist** (gjensidig beste svar — ingen angrer gitt de andres valg); beste-svar-metoden i matrisen (marker beste svar per rad/kolonne, NE der markeringene møtes); strengt dominerte strategier og **iterert eliminering** (vis rekkefølgen eksplisitt); rasjonaliserbarhet som «overlever elimineringen»; **dominans via blandet strategi** i ett gjennomregnet eksempel (en ren strategi kan være dominert av en miks selv når ingen ren strategi dominerer den); fangens dilemma og koordinasjonsspill som standardeksempler (lenk [Spillteori: 2×2-matrisen, Nash og fangens dilemma](/econ1210/econ1210-7-2) som mykere inngang). Kompakt — dette er vedlikehold, ikke fordypning.
- **Oppgavesjangre:** N. Mønstereksempel (omskrevet): «To kaféer velger samtidig mellom tre prisnivåer. Sett opp matrisen fra tekst, finn alle Nash-likevekter ved beste-svar-analyse, og undersøk om noen strategi kan elimineres — også mot blandede strategier. Hvilke strategier er rasjonaliserbare?»
- **Typiske feil:** Blande NE («ingen angrer») med Pareto-optimalitet; stoppe elimineringen for tidlig; overse blandet dominans (dokumentert V2022-trekk); finne bare én NE når flere finnes; definere NE upresist («det beste for alle»).
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 7.2: Dynamisk spillteori: SPNE, strategitelling og troverdighet — med Cournot og Stackelberg

- **id:** `econ2220-7-2` · **number:** 7.2 · **estimatedMinutes:** 50 · **prerequisites:** `econ2220-7-1`
- **Kapitteltype:** teori (beredskap)
- **description:** Spilltre, produktregelen for strategitelling, baklengs induksjon og ikke-troverdige trusler — pluss duopol-regneeksemplet fra utsatt-arkivet.
- **Eksamensbelegg:** Sjanger N: SPNE-definisjonen (NE i alle delspill), **strategitelling med produktregelen** (3 valg etter 3 noder = 27; 4×4 = 16; $4^4$ = 256 — dokumenterte eksamensverdier), baklengs induksjon og **ikke-troverdige trusler/løfter** (inntrengningsspillet V2020; Stackelberg-trusselen V2022-utsatt) var faste krav 2018–2022. Cournot/Stackelberg kun i V2022-utsatt — kalibrering (til nivåvalg, ikke gjenbruk): lineær invers etterspørsel med konstant grensekostnad, reaksjonsfunksjoner $q_i = a - q_j/2$, Cournot-kvanta like, Stackelberg-leder dobler følgerens kvantum. Prioritet: **kjenne**.
- **Innholdskontrakt:** Ekstensiv form: spilltre, noder, informasjonsmengder (kort); **en strategi er en komplett plan** — derav **produktregelen for strategitelling**: antall strategier = produktet av antall handlingsvalg over spillerens beslutningsnoder (regn de dokumenterte typetallene: $3^3 = 27$, $4 \times 4 = 16$, $4^4 = 256$); **baklengs induksjon** steg for steg; **SPNE definert som NE i alle delspill**; skillet NE vs. SPNE via **ikke-troverdige trusler/løfter**: en NE kan hvile på en trussel spilleren ikke ville gjennomført om noden faktisk ble nådd — inntrengningsspill-varianten gjennomregnes; hvorfor baklengs induksjon fjerner slike likevekter. **Cournot/Stackelberg-eksemplet** (nyskrevne tall i samme sjanger som utsatt-arkivets): utled reaksjonsfunksjonene fra profittmaksimering, finn Cournot-likevekten, la én bedrift binde seg først (Stackelberg) og vis førstetrekksfordelen; koble tilbake: Stackelberg-følgerens «trussel» om å holde Cournot-kvantum er ikke troverdig.
- **Oppgavesjangre:** N. Mønstereksempel (omskrevet): «I et to-trinns spill velger entreprenøren først mellom fire kontraktstyper; kommunen observerer valget og svarer med ett av fire tilbud i hvert tilfelle. Hvor mange strategier har hver spiller? Finn SPNE ved baklengs induksjon, og konstruer en Nash-likevekt som ikke er delspill-perfekt — hva er den ikke-troverdige trusselen?»
- **Typiske feil:** Feiltelling av strategier — glemme produktregelen (dokumentert klassiker); blande NE og SPNE; «finne» SPNE uten baklengs induksjon; overse at ikke-troverdige løfter/trusler ikke overlever induksjonen; regne reaksjonsfunksjoner med feil derivasjonsvariabel.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 7.3: Atferdsøkonomi: Fehr-Schmidt, ultimatum- og tillitsspill

- **id:** `econ2220-7-3` · **number:** 7.3 · **estimatedMinutes:** 40 · **prerequisites:** `econ2220-7-2`
- **Kapitteltype:** teori (beredskap)
- **description:** Ulikhetsaversjon i praksis: utligningslogikken, avslagsgrensen — og kontrasten mot den egoistiske prediksjonen.
- **Eksamensbelegg:** Sjanger N-atferd: ultimatum-/tillitsspill med **Fehr-Schmidt-preferanser** i 3 av settene 2018–2022 (alltid med $\alpha = 0{,}8$, $\beta = 0{,}6$), null siden. Dokumenterte krav: vis at mottakeren utligner beholdningene (å ligge over koster $\beta$-leddet, å ligge under koster både direkte og $\alpha$-leddet); respondenten avslår tilbud $m < \alpha/(1+2\alpha)$; kontrast mot egoistisk prediksjon (forslagsstiller tar nesten alt — de to SPNE-variantene). Prioritet: **kjenne**.
- **Innholdskontrakt:** **Fehr-Schmidt-nytten**: $U_i = x_i - \alpha\max\{x_j - x_i, 0\} - \beta\max\{x_i - x_j, 0\}$ med $\alpha > \beta$ (misunnelse svir mer enn skyld); tolk hvert ledd; kursets faste parametre $\alpha = 0{,}8$, $\beta = 0{,}6$ brukes i alle regneeksempler. **Ultimatumspillet**: egoistisk SPNE via baklengs induksjon (respondenten godtar alt positivt → forslagsstilleren tilbyr minst mulig; de to variantene ettersom respondenten er indifferent ved null); med Fehr-Schmidt: **avslagsgrensen** utledes — respondenten avslår andeler $m < \alpha/(1+2\alpha)$ (regn med kursparametrene); prediksjonen flyttes mot jevnere tilbud. **Tillitsspillet/utligningslogikken**: vis ved regning at en Fehr-Schmidt-aktør som fordeler en pott, utligner beholdningene — å beholde mer koster $\beta$-ledd, å gi bort for mye koster både direkte og $\alpha$-ledd; kontrast mot egoistisk null-tilbakebetaling. Én avsluttende brotekst: eksperimentelle avvik fra egoisme-prediksjonen motiverte modellen (kort, uten historikk-utsvevelser).
- **Oppgavesjangre:** N-atferd. Mønstereksempel (omskrevet): «I et ultimatumspill om 100 kroner har respondenten Fehr-Schmidt-preferanser med $\alpha = 0{,}8$ og $\beta = 0{,}6$. Utled hvilke tilbud som avslås, forklar logikken i hvert ledd av nyttefunksjonen, og sammenlikn med prediksjonen når begge er egoistiske.»
- **Typiske feil:** Feil ledd aktivt (bruke $\beta$-leddet når man ligger *under*); glemme at bare ett av max-leddene er positivt om gangen; utlede avslagsgrensen med feil ulikhetsretning; presentere den egoistiske SPNE-en som «feil» i stedet for som referanseprediksjon; glemme baklengs induksjon i tillitsspillet.
- **Quiz: 15 · Flashcards: 15**

**Prøve-kvote Del 7:** 4 prøver (7.A matrisespill fra tekst — NE, dominans, rasjonaliserbarhet, sjanger N; 7.B dynamisk spill — strategitelling, SPNE, ikke-troverdig trussel, sjanger N; 7.C Fehr-Schmidt — avslagsgrense og utligning, sjanger N-atferd; 7.D blandet beredskapsprøve i 2018–2022-format: 30 %-spilloppgave med statisk + dynamisk + atferdsdel, sjanger N komplett).

---

### Del 8 — Eksamenstrening

#### Kapittel 8.1: Den aktualiserte diskusjonsoppgaven: fra nyhetsbilde til modell

- **id:** `econ2220-8-1` · **number:** 8.1 · **estimatedMinutes:** 40 · **prerequisites:** `econ2220-2-5`, `econ2220-5-5`
- **Kapitteltype:** sjangertrening
- **description:** Den nye faste sjangeren fra 2025: åpne spørsmål uten fasit der strukturert teoribruk gir poengene.
- **Eksamensbelegg:** Sjanger M: begge 2025-sett avslutter oppgaver med aktualiserte, åpne diskusjonsspørsmål der sensor eksplisitt sier «ingen fasit» og premierer strukturert teoribruk; regnes som vanskelig (skilleoppgave). Dokumenterte case-typer (omskrevet): et råvareprissjokk — hvem rammes hardest (høy budsjettandel → sterk IE; lav substituerbarhet → svak demping; mindreverdig gode → skjev fordelingsvirkning; netto selger tjener); varig renprofitt i norske sektorer (grunnrente-sporet); subsidie og substituerbarhet (elbil-casen). Analysens bokimplikasjon: hvert teorikapittel ender med en «oversett nyhetsbildet til modellen»-øvelse — dette kapitlet samler og systematiserer sjangeren. Prioritet: **kunne** (forvent gjentakelse).
- **Innholdskontrakt:** **Sjangeranalysen**: hva «ingen fasit» betyr (poeng for struktur, presis begrepsbruk og relevante mekanismer — ikke for meninger); svar på det *spurte* (dokumentert felle: drøfte kjøp når oppgaven sier bruk). **Oversettelsesnøkkelen** (bokas sjekkliste): (i) hvilken modell? (konsument/produsent/GE); (ii) hvilke størrelser bærer effekten? — budsjettandel (styrer IE-styrken), substituerbarhet (styrer SE-styrken og virkemiddeleffekt), nettoposisjon (kjøper/selger — fortegnet på velferdseffekten), normalitet/mindreverdighet (fordelingsprofilen), skalaregime/etableringshindringer (lønnsomhetens varighet); (iii) konkluder betinget («jo større andel …, desto …»). Tre gjennomarbeidede mønsterdrøftinger i nyskrevne case (matprissjokk etter avlingssvikt; varig lønnsomhet i oppdrett; subsidie på kollektivreiser med by/land-substituerbarhet), hver med sensor-margnotater om hva som gir uttelling. 5–8 øvingsoppgaver med momentliste som «fasit».
- **Oppgavesjangre:** M. Mønstereksempel (omskrevet): «Verdensmarkedsprisen på ris dobles etter en tørke. Drøft hvem som rammes hardest — bruk begrepene budsjettandel, substitusjonsmulighet, normalt/mindreverdig gode og netto kjøper/selger, og skill mellom virkninger på kort og lang sikt.»
- **Typiske feil:** Skrive om noe annet enn det spurte (dokumentert); meningsytring uten modell; nevne alle begreper uten å koble dem til casen; ubetingede konklusjoner der effekten avhenger av parametre; hoppe over fordelingsdimensjonen når oppgaven ber om den.
- **Quiz: 10 · Flashcards: 15**

#### Kapittel 8.2: Sann eller usann: påstandsoppgaven

- **id:** `econ2220-8-2` · **number:** 8.2 · **estimatedMinutes:** 30 · **prerequisites:** `econ2220-8-1`
- **Kapitteltype:** sjangertrening
- **description:** Ta stilling og begrunn: påstandssjangeren med de dokumenterte gjengangerne og en drillbank av nye.
- **Eksamensbelegg:** Sjanger L testet V2023 og V2024; verbalt argument godtas eksplisitt der det sies. Dokumenterte påstander (omskrevet): «kostnadsminimering medfører profittmaksimering» (usann — implikasjonen går motsatt vei); «substitusjonseffekten av en prisøkning kan være positiv» (usann — avslørte preferanser); «regnskapsoverskudd motbeviser nullprofitt-resultatet» (usann — alternativkostnad på kapital). Prioritet: **kunne**.
- **Innholdskontrakt:** **Svarmalen**: (i) ta eksplisitt stilling; (ii) begrunn med presis mekanisme (verbalt holder når oppgaven sier det — men aldri bare «sann»); (iii) avgrens om påstanden er betinget sann (gitt normalitet, gitt konveksitet osv.) — betingede påstander er sjangerens yndlingsfelle. Drillbank på 12–15 nyskrevne påstander som dekker hele boka: SE-fortegn, normalitet, kostnadsminimering vs. kvantum, nullprofitt, Pareto vs. fordeling, forbedring vs. effektivitet etter omfordeling, rotasjon vs. parallellskift av beholdningsbudsjett, netto selger og prisøkning, MTB=MSB med eksternalitet, NE vs. SPNE — hver med A-besvarelse-fasit og «hvorfor nesten-riktige svar trekkes».
- **Oppgavesjangre:** L. Mønstereksempel (omskrevet): «Ta stilling til påstanden og begrunn svaret: 'En bedrift som velger den billigste måten å produsere sitt planlagte kvantum på, har dermed også valgt det kvantumet som maksimerer profitten.'»
- **Typiske feil:** Stilling uten begrunnelse eller omvendt; snu implikasjonsretningen; glemme betingelsene (svare ubetinget på betingede påstander); begrunne riktig konklusjon med feil mekanisme.
- **Quiz: 10 · Flashcards: 10**

#### Kapittel 8.3: Øvingseksamen 1: den ordinære malen

- **id:** `econ2220-8-3` · **number:** 8.3 · **estimatedMinutes:** 240 · **prerequisites:** `econ2220-8-2`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett firetimers sett etter 2025-malen: konsument med beholdning 35 % + bytteøkonomi 35 % + produsent 30 %.
- **Eksamensbelegg:** Speiler tre-oppgavers-malen à 30–35 % (V2025-vektingen 35/35/30) og analysens V2026-prognose. Prioritet: treningskapittel.
- **Innholdskontrakt:** Oppgave 1 (35 %): konsumentteori med Cobb-Douglas-utledning, normalitetsderivasjon, Slutsky med beholdning (rotasjon gjennom $W$, netto kjøper) og aktualisert diskusjonshale. Oppgave 2 (35 %): bytteboks-konstruksjon, definisjonstrio, numerisk likevektspris, velferdsteoremene med rangert forutsetningsliste, omfordelingsvariant (effektiv men ikke forbedring). Oppgave 3 (30 %): skalautbytte-test, kostnadsminimering med Lagrange, kostnads-/tilbudskurve, nullprofitt-tolkning og grunnrente-drøfting. Alle deloppgaver teller likt innad i oppgaven; **løsningsforslag i eget `collapsible` per oppgave, skrevet som A-besvarelse** (utledning + enhetstolkning + figurbeskrivelse i ord), med `tip`-notat om vekting og hvor skilleoppgavene ligger. Nyskrevne tall og case gjennomgående.
- **Oppgavesjangre:** A+B+C+D+E+M / F+G+H / I+J+M.
- **Typiske feil:** Tidsbudsjett-feil (241 min-fellen); repertoaret fra drillkapitlene 2.5, 4.5, 5.5.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 8.4: Øvingseksamen 2: den tunge GE-varianten

- **id:** `econ2220-8-4` · **number:** 8.4 · **estimatedMinutes:** 240 · **prerequisites:** `econ2220-8-3`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett sett etter V2023-malen med tung generell likevekt: konsument 30 % + produsent 20 % + GE 50 %.
- **Eksamensbelegg:** Speiler vektingsvarianten 30/20/50 (V2023) — GE-oppgaven kan bære halve settet; inkluderer kvasi-lineær numerisk likevekt og MTB=MSB-hale (V2023 h-sporet). Prioritet: treningskapittel.
- **Innholdskontrakt:** Oppgave 1 (30 %): nyttemaksimering med kvasi-lineær nytte, figurspørsmål om navngitte punkter på budsjettlinjen (B-sjangeren i V2023-stil), SE-fortegns-påstand. Oppgave 2 (20 %): kostnadsminimerings-påstand (L-varianten) + skalautbytte med $c''$-fortegn. Oppgave 3 (50 %): bytteboks, definisjoner, numerisk likevektspris med kvasi-lineær etterspørsel, Walras' lov navngitt, velferdsteoremene, MTB=MSB-hale med Pareto-forbedringskonstruksjon. Løsningsforslag som A-besvarelser i `collapsible`, vektings-`tip` per oppgave.
- **Oppgavesjangre:** A+B+D+L / I+J+L / F+G+H+K.
- **Typiske feil:** Undervurdere 50 %-oppgaven; glemme markedsklarerings-presisjonen under tidspress; hoppe over Walras-navngivingen.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 8.5: Øvingseksamen 3: utsatt-varianten (konte-beredskap)

- **id:** `econ2220-8-5` · **number:** 8.5 · **estimatedMinutes:** 240 · **prerequisites:** `econ2220-8-4`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett sett i utsatt-profil: endowment-Slutsky 40 % + produsent kort sikt 30 % + Robinson–Fredag med eksternalitetshale 30 %.
- **Eksamensbelegg:** Speiler de fire utsatt-settenes dokumenterte profil (40/30/30-vekting; endowment-Slutsky, intertemporalt, Robinson–Fredag og eksternaliteter er utsatt-favoritter). Prioritet: treningskapittel — obligatorisk for konte-kandidater.
- **Innholdskontrakt:** Oppgave 1 (40 %): beholdningsøkonomi med full endowment-Slutsky (tre effekter, netto selger-variant, nyttekonklusjon) og intertemporal deloppgave (nåverdibudsjett, renteøkning for sparer — kalkulatorfrie tall). Oppgave 2 (30 %): kort-sikt-produsent: $c_v$ fra teknologi, sunk kost, nedleggingsbetingelse, MK/GK-diagram med profittareal. Oppgave 3 (30 %): PMK fra kvadratrot-teknologi, MTB = prisforhold via Lagrange, MTB=MSB, eksternalitetshale (hvorfor betingelsen ikke lenger er tilstrekkelig) og substituerbarhets-diskusjon. Løsningsforslag som A-besvarelser i `collapsible`, vektings-`tip`, eksplisitt «utsatt er vanskeligere»-forord.
- **Oppgavesjangre:** E (begge varianter) / J / K+H+M.
- **Typiske feil:** Fortegnsfeilene i endowment-Slutsky under tidspress; parallellskift; sunk kost i nedleggingsvurderingen; drøfte feil spørsmål i halen.
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 8:** ingen egne prøver (delen består av sjangertrening + 3 øvingseksamener).

---

### Kvotesammendrag (quiz/flashcards/prøver) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1 | 10 | 10 | 0 |
| 1 | 1.1–1.3 | 15+15+15 = **45** | 15+20+15 = **50** | 4 |
| 2 | 2.1–2.5 | 25+25+25+15+15 = **105** | 20+20+20+15+15 = **90** | 4 |
| 3 | 3.1–3.4 | 20+25+15+15 = **75** | 15+20+15+10 = **60** | 4 |
| 4 | 4.1–4.5 | 25+20+25+15+15 = **100** | 25+25+25+15+10 = **100** | 4 |
| 5 | 5.1–5.5 | 20+25+20+25+15 = **105** | 20+20+15+20+10 = **85** | 4 |
| 6 | 6.1–6.3 | 15+20+15 = **50** | 15+15+15 = **45** | 4 |
| 7 | 7.1–7.3 | 15+15+15 = **45** | 15+15+15 = **45** | 4 |
| 8 | 8.1–8.5 | 10+10+5+5+5 = **35** | 15+10+0+0+0 = **25** | 0 (3 øvingseksamener) |
| **Sum** | **34 kap.** | **570 ≥ 500 ✓** | **510 ≥ 500 ✓** | **28 + 3 ØE** |

Kontrollsum quiz: 10+45+105+75+100+105+50+45+35 = **570**.
Kontrollsum flashcards: 10+50+90+60+100+85+45+45+25 = **510**.
Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens: Del 2 + Del 4 + Del 5 (de tre eksamensoppgavene)
står for 310 av 570 quiz; beredskapsdelen (Del 7) holdes bevisst lav.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–7, 28 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med løsningsforslag
(A-besvarelse: utledning + enhetstolkning + figurbeskrivelse i ord) og
poengfordeling der deloppgavene teller likt (eksamens regel). Omfang i minutter.

**Del 1 — Grunnmuren**
1. Prøve 1.A (25 min): Begreper — preferanser, MSB, lokalt umettelige preferanser, monotone transformasjoner (sjanger B/L-fundament).
2. Prøve 1.B (30 min): Indifferenskurve fra likning løst for $c_2$ + konveksitetsargument (V2025-utsatt-varianten).
3. Prøve 1.C (35 min): Lagrange vs. innsetting på nye funksjoner, inkl. λ-tolkning og et problem der innsetting er umulig.
4. Prøve 1.D (40 min): Blandet grunnmursprøve på eksamensnivå inkl. 1210-broen (oversett anleggsspråk til $c(y)$-språk) og kvasi-lineær FOB.

**Del 2 — Konsumentteori**
1. Prøve 2.A (35 min): Nyttemaksimering — oppsett, Lagrange, tilpasningsbetingelse med enhetstolkning + figurspørsmål om ikke-optimalt punkt (sjanger A + B).
2. Prøve 2.B (35 min): Cobb-Douglas-utledning begge former + normalitetsderivasjon + monoton transformasjon + uavhengighets-poenget (sjanger C).
3. Prøve 2.C (35 min): Slutsky grafisk og verbalt med Slutsky-kompensasjon + sann/usann om SE-fortegn med avslørte preferanser (sjanger D + L).
4. Prøve 2.D (55 min): Full konsumentoppgave på eksamensnivå (35 %-format) med kompensasjonsanalyse- eller diskusjonshale (sjanger A+B+C+D+M).

**Del 3 — Beholdningsøkonomi og intertemporalt**
1. Prøve 3.A (30 min): Beholdningsbudsjett — linje gjennom $W$, rotasjon, nettoposisjon (sjanger E-fundament).
2. Prøve 3.B (40 min): Full endowment-Slutsky med begge inntektseffekter og nyttekonklusjon per posisjon (sjanger E).
3. Prøve 3.C (35 min): To-periode-modellen — nåverdibudsjett (kalkulatorfritt), $u'_1/u'_2 = 1+r$-tolkning, renteøkning for sparer (sjanger E-intertemporal).
4. Prøve 3.D (50 min): Konte-prøve på utsatt-nivå: endowment-Slutsky 60 % + intertemporal hale + sann/usann («prisøkning gjør alltid konsumenten fattigere») (sjanger E + L).

**Del 4 — Generell likevekt og velferd**
1. Prøve 4.A (35 min): Bytteboks-håndverket — konstruksjon, lesing, effektiv/ineffektiv allokering, felles budsjettlinje med begge argumenter (sjanger F).
2. Prøve 4.B (35 min): Definisjonstrioen + numerisk likevektspris (Cobb-Douglas) + Walras' lov navngitt (sjanger G).
3. Prøve 4.C (35 min): Velferdsteoremene med rangert forutsetningsliste + verdimaksimerings-argumentet uten figur (sjanger H).
4. Prøve 4.D (60 min): Full likevekts- og velferdsoppgave i 50 %-format: boks → definisjoner → numerisk → teoremer → omfordelingshale (forbedring vs. effektivitet) (sjanger F+G+H).

**Del 5 — Produsentteori**
1. Prøve 5.A (25 min): Skalautbytte-testen på tre teknologier + kobling til kostnadsbildet i ord (sjanger J-fundament).
2. Prøve 5.B (40 min): Kostnadsminimering med Lagrange til ferdig kostnadsfunksjon + MTSB-enhetstolkning + «kostnadsmin ⇒ profittmaks»-påstand (sjanger I + L).
3. Prøve 5.C (35 min): Kort sikt — $c_v$ fra teknologi, konveksitet via $c''$, sunk kost og nedleggingsbetingelse, MK/GK-diagram (sjanger J).
4. Prøve 5.D (55 min): Full produsentoppgave i 30 %-format med nullprofitt-tolkning og grunnrente-drøfting (sjanger I+J+M).

**Del 6 — Likevekt med produksjon**
1. Prøve 6.A (30 min): PMK-utledning fra kvadratrot-teknologi + MTB-tolkning + krumningsargument (sjanger K-fundament).
2. Prøve 6.B (35 min): MTB=MSB — vis betingelsen i likevekt og konstruer Pareto-forbedringen ved oppgitt avvik (sjanger K).
3. Prøve 6.C (30 min): Planlegger-versjonen $u'_1/u'_2 = g'/f'$ + prissignal-fortellingen (sjanger K + G).
4. Prøve 6.D (50 min): Utsatt-nivå: produksjonsøkonomi med negativ eksternalitet — hvorfor MTB=MSB ikke lenger holder, Pigou-virkemiddel og substituerbarhets-drøfting (sjanger K + H + M).

**Del 7 — Beredskap**
1. Prøve 7.A (30 min): Matrisespill fra tekst — NE ved beste svar, iterert eliminering inkl. blandet dominans, rasjonaliserbarhet (sjanger N).
2. Prøve 7.B (35 min): Dynamisk spill — strategitelling med produktregelen, baklengs induksjon, SPNE, ikke-troverdig trussel (sjanger N).
3. Prøve 7.C (30 min): Fehr-Schmidt — utligningslogikken og avslagsgrensen med kursparametrene (sjanger N-atferd).
4. Prøve 7.D (60 min): Beredskapsprøve i 2018–2022-format: 30 %-spilloppgave med statisk del + dynamisk del + atferdsdel (sjanger N komplett).

### Øvingseksamener (3 komplette sett — se kap. 8.3–8.5)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 8.3) | V2025-malen (35/35/30) | Konsument m/beholdning + diskusjonshale 35 % + bytteøkonomi m/omfordeling 35 % + produsent m/skala og grunnrente 30 % |
| Øvingseksamen 2 (kap. 8.4) | V2023-malen (30/20/50) | Konsument kvasi-lineær + figur 30 % + produsent-påstander 20 % + tung GE m/numerisk likevekt, Walras og MTB=MSB-hale 50 % |
| Øvingseksamen 3 (kap. 8.5) | Utsatt-profilen (40/30/30) | Endowment-Slutsky + intertemporalt 40 % + kort-sikt-produsent 30 % + Robinson–Fredag m/eksternalitetshale 30 % |

Til sammen dekker de tre settene sjangrene A–M; sjanger N (spill/atferd) dekkes
bevisst kun av prøvene 7.A–7.D, siden temaet ikke har båret en eksamensoppgave
siden 2022 og øvingseksamenene skal speile *typiske* sett (DNA-regelen: en
«typisk» eksamen, ikke en uvanlig).

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4 timer, 3 oppgaver à 30–35 %, deloppgaver
   teller likt), regimeskiftet 2023, vektingshistorikken og V2026-prognosen
   (fra kap. 0.1); egen boks for konte-kandidater (utsatt er systematisk
   vanskeligere og henter fra Del 3 og 6).
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer:
   perfekt (Del 1–5: Lagrange-håndverket, konsumentoppgaven komplett,
   beholdnings-Slutsky, bytteboks/definisjoner/velferdsteoremene,
   produsentpakken), kunne (intertemporalt valg, MTB=MSB med
   Pareto-forbedringskonstruksjonen, eksternaliteter, diskusjons- og
   påstandssjangrene, kompensasjonsanalysen), kjenne (spillteori kompakt,
   Fehr-Schmidt) — og eksplisitt hvorfor monopol/asymmetrisk
   informasjon/kollektive goder IKKE skal prioriteres (aldri testet; bor i
   ECON1210-boka).
3. **Sjangerguiden** — oppgavetypene A–N med løsningsoppskriftene fra
   drillkapitlene (2.5, 3.4, 4.5, 5.5) og sjangertreningen (8.1, 8.2) i
   kortform: konsumentkjeden, endowment-algoritmen, GE-kjeden,
   produsentkjeden, oversettelsesnøkkelen for åpne drøftinger, svarmalen for
   påstander.
4. **Sensorreglene** — metareglene (utledning for full score; tolkning i
   enheter; vis egenskaper, ikke påstå; markedsklarering i likevektsdefinisjonen;
   forutsetningene er selvstendige poeng; raus delvis uttelling ved konsistent
   metode; oblig-temaene resirkuleres) + karaktertersklene E/C/A og de typiske
   skilleoppgavene (utledningsledd, åpne drøftinger) fra kap. 0.1.
5. **Feilkatalogen** — de 13 typiske feilene samlet (figur i stedet for
   utledning; formel som tolkning; normalitet/skala uten derivasjon/test;
   kostnadsmin bestemmer kvantum; innsetting på kostnadsmin; individuell
   tilpasning kalt likevekt; strøkne teorem-forutsetninger; normativ
   Pareto-tolkning; fortegnsfeil i beholdnings-Slutsky; parallellskift av
   beholdningsbudsjett; nullprofitt som «ingen tjener penger»;
   spillteori-arven; svare på feil spørsmål i åpne oppgaver), hver med
   henvisning til kapitlet som forebygger den.
6. **Formelark i emnets notasjon** — én side: $u'_1/u'_2 = p_1/p_2$;
   $c_1 = am/p_1$, $c_2 = (1-a)m/p_2$; $p_1c_1 + p_2c_2 = p_1\omega_1 + p_2\omega_2$;
   Slutsky med endowment-ledd; $c_1 + \frac{c_2}{1+r} = m_1 + \frac{m_2}{1+r}$;
   $F'_K/F'_L = r/w$; $p = c'(y)$ / $pF'(n) = w$; $F(tK,tL) \gtreqless tF(K,L)$;
   $c(y) = k\,y$ ved konstant skala; $\text{MTB} = p_1/p_2 = \text{MSB}$;
   $u'_1/u'_2 = g'(n_2)/f'(n_1)$; Fehr-Schmidt-nytten med avslagsgrensen
   $m < \alpha/(1+2\alpha)$ — med markering av hva som skal *utledes aktivt*
   (Lagrange-løypene, Cobb-Douglas, PMK, avslagsgrensen) vs. kun brukes.
7. **Figurbiblioteket** — de ~10 standardfigurene i ord (budsjettlinje med
   indifferenskurver og tangering; ikke-optimale punkter; Slutsky A→B→C;
   beholdningsbudsjett med rotasjon gjennom $W$; to-periode-budsjettet;
   Edgeworth-boksen komplett; isokvant/isokost; MK/GK-diagram med
   profittareal; PMK med isoprofitt-tangering; spilltre) med merkekravene per
   figur — og regelen om at figur alltid ledsager, aldri erstatter, utledningen.
8. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant):
   Del 0 → 1 → 2 → 3 (konsumentaksen først), deretter 4 → 5 (de to andre
   eksamensoppgavene), så 6, 8.1–8.2, og 7 til slutt; prøver underveis;
   øvingseksamenene de tre siste ukene under tidspress (240 min med
   tidsbudsjett per deloppgave siden deloppgavene teller likt); konte-løpet
   prioriterer Del 3, 6 og øvingseksamen 3.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `econ2220` med alle 34
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`
   (eller `textbook-courses-hoyskole.ts` der econ1310/econ1210 ligger);
   `sectionNames` fra makrostruktur-tabellen (§2).
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–N og frekvenstallene som
   resten refererer til.
3. **Konsumentaksen i avhengighetsrekkefølge**: Del 1 → Del 2 → Del 3
   (oppgave 1-stoffet + konte-tyngdepunktet).
4. Del 4 → Del 5 (oppgave 2 og 3), deretter Del 6 → Del 7.
5. Del 8 til slutt (sjangertreningen og øvingseksamenene gjenbruker alt).
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert
   som kapitlene ferdigstilles; prøvene (§4) legges i prøvekapitler per del
   etter byggekontraktens spesifikasjon (`econ2220-<del>-prove`, chapterNumber
   `<del>.P`).

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (generer helst via `json.dump`; husk å escape `"` i norske sitattegn);
  `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON
  (`\\frac`, `\\omega`, `\\partial`); ingen unicode-brøker eller
  unicode-subskript ($c_1$, aldri «c₁», i kapittelinnholdet); konsistent
  $u'_1/u'_2$, $\omega$, $\pi$, $\mathcal{L}$.
- [ ] **Notasjonskonsistens**: tekstsøk over alle econ2220-filer — forbudte
  termer: «Hicks» utenfor de markerte fotnotene i 2.3/2.5; «$x_1$/$x_2$» som
  primær konsumnotasjon (kun i en engangsmerknad i 0.1 om at eldre sett
  varierer); «anleggsmodell»/«enhetskostnad og kapasitet» utenfor kap. 1.1;
  «MRS»/«MRT»/«MRTS» som primærtermer (norsk MSB/MTB/MTSB er standard;
  engelsk kun i parentes ved første forekomst); $\omega$ brukt om faktorpriser;
  «D-kurven»/«S-kurven»; monopol-/MI=MK-analyse noe sted (bor i econ1210);
  påkrevd: $c_1, c_2$, $p_1, p_2$, $m$, $\omega$, $r$, $w$, $F(K,L)$, $c(y)$,
  $\pi$, MSB, MTB, MTSB, Slutsky-kompensasjon.
- [ ] **Klassisk produsentteori overalt**: alle tilbudsanalyser bruker
  $c(y)$-apparatet; anleggsmodellen KUN i brokapitlet 1.1 — grep etter
  «anlegg» utenfor 1.1 skal gi null treff i teorikapitlene.
- [ ] **Utledning + tolkning**: hvert eksempel og løsningsforslag med en
  optimering inneholder både den matematiske utledningen OG enhetstolkningen;
  hver figur har figurbeskrivelse i ord; normalitet vises alltid ved
  derivasjon, skalautbytte alltid ved test/c''-fortegn.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med
  tallene fra dette skjelettet), Forkunnskaper-blokk med lenker + Symbol- og
  formelliste-`collapsible` (per delkapittel — ALLE symboler/formler brukt i
  delkapitlet), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå),
  6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`;
  drillkapitler har løsningsoppskrift + sensor-kommentert case + 8–15 oppgaver;
  øvingseksamener har løsningsforslag i `collapsible` per oppgave med
  vektings-`tip`.
- [ ] **Kryssbok-lenker**: alle `/econ1210/...`-lenker peker på id-er som
  finnes i econ1210-metadataen (`econ1210-1-1`, `econ1210-1-2`, `econ1210-1-3`,
  `econ1210-2-1`, `econ1210-3-2`, `econ1210-4-1`, `econ1210-4-2`,
  `econ1210-4-3`, `econ1210-5-1`, `econ1210-6-2`, `econ1210-7-1`,
  `econ1210-7-2`, `econ1210-7-3` er brukt i dette skjelettet — verifiser mot
  registry før bygging).
- [ ] **Quiz-sum ≥ 570 og flashcard-sum ≥ 510** per kvotetabellen
  (kontrollsummér mot §3-tabellen — den er autoritativ).
- [ ] **Prøver**: 4 per temadel 1–7 (28 stk) + 3 øvingseksamener; settene og
  prøvene dekker samlet sjangrene A–N minst én gang (N kun i prøvene 7.A–7.D).
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egne case og
  bransjer, egne formuleringer; ingen formuleringer fra reelle sett eller
  sensorveiledninger (skjelettets mønstereksempler er selv omskrivninger og
  skal varieres videre, ikke kopieres ordrett inn); kalibreringsverdier fra
  arkivet (f.eks. Cournot-tallene, nåverdi-typetall, Fehr-Schmidt-parametrene
  $\alpha = 0{,}8/\beta = 0{,}6$ som er kursets faste regime) brukes kun til
  nivå- og sjangervalg — oppgavetallene skal være nye; pensum (Varian m.fl.)
  refereres, aldri siteres i lengde. Pensumreferansen «Varian, *Intermediate
  Microeconomics (with Calculus)*» er analysens beste slutning — marker som
  (verifiser) i bokteksten eller utelat forlagsreferansen.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og
  narrativ-ruter (200 + kapittelspesifikk streng), jf. lærdommen om
  `getChapterMeta`.
