# Bokskjelett: PSY1010 Innføring i metode — eksamensrettet lærebok

> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (29 sett 2008–2025, 10 sensorveiledninger V2018–V2025).
> Alle oppgaver, case, tallsett og formuleringer i boka skal være NYSKREVNE (se del 7).

---

## 1. Bokens identitet

- **Kurs-id:** `psy1010`
- **Tittel:** *PSY1010 Innføring i metode — eksamensrettet lærebok (UiO)*
- **Level:** `'Høyskole'`
- **Arketype:** **HYBRID** — primær: drøfting (DNA-drofting.md), med lånte
  regnefag-elementer (DNA-regnefag.md) i tallkapitlene. Hybrid-valgene er
  dokumentert i §2b under.
- **Kapittelantall:** 34 (Del 0: 2 · temadeler 1–7: 23 · eksamenstrening Del 8: 9)
- **Estimert totaltid:** ~1 745 minutter (~29 timer) fordelt per kapittel under
- **Quiz totalt:** 548 (krav ≥500) · **Flashcards totalt:** 520 (krav ≥500)
- **Fakta:** 10 studiepoeng, Psykologisk institutt UiO; samkjørt med PSYC1100
  (profesjonsstudiet) — identiske oppgavesett. Kun våreksamen siden 2019.
  Hjelpemidler: ordbok + enkel kalkulator.

**Pitch:** PSY1010-eksamen har hatt samme DNA i snart to tiår: 3 timer, fire
scenariobaserte oppgaver, **besvar 3 av 4 — alle teller likt**. To supergjengangere
bærer eksamen: korrelasjonspakken (20 av 29 sett) og hypotesetestingspakken (19 av
29), og siden V2023 er kvalitativ metode fast egen oppgave med eksplisitt lave
karakterkrav — en bortimot gratis tredjedel for den forberedte. Sensor krever
statistisk **forståelse**, ikke regneteknikk: formler oppgis alltid, fremgangsmåten
teller mer enn tallet, og den ene feilen med eksplisitt trekk-instruks er å tolke
p-verdien som sannsynligheten for at H0 er feil. Gjenbruk av oppgaver er dokumentert
norm — derfor er denne boka bygget som drøftingsbok *med innebygd tallforståelse*:
hvert statistikkbegrep skal kunne forklares i prosa, tolkes i en konkret studie OG
regnes ut med enkel kalkulator, og øvingsmaterialet kloner de reelle
oppgavemønstrene tett (alltid med nyskrevne tall, case og formuleringer).

---

## 2. Makrostruktur

Primærmalen er DNA-drøfting: Del 0 (eksamenskart + besvarelseshåndverk) → temadeler
etter faglig avhengighet med omfang etter gjenganger-score → eksamenstrening
(sjangerkapitler + modellbesvarelser). Temadelene speiler de fire eksamensoppgavenes
faste temafordeling (analysen §7 «Anbefalt bokdesign»): én oppgave om
korrelasjon/regresjon, én om hypotesetesting/statistikk, én om design/eksperiment,
én om måling/utvalg/kvalitativ.

### Seksjonstitler (blir `sectionNames` i metadata)

| Del | Seksjonstittel | Kap. | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|
| 0 | Eksamenskart og besvarelseshåndverk | 2 | DNA-obligatorisk. 3-av-4-strategien, relevansfilteret og «C-kjerne + A-lag»-modellen må etableres før fagstoffet. |
| 1 | Forskningsprosessen, måling og utvalg | 4 | UV/AV/målenivåer 13 forekomster (standard åpningsdeloppgave), utvalg 9, reliabilitet/testvaliditet 8, forskningsprosessen 4 men hovedoppgave i to av tre siste sett. |
| 2 | Design og validitet | 4 | Indre/ytre validitet 10+, testforståelse-designdelen, overføringseffekter 7+, faktorielle 6, N=1 6, kvasi 5. Designklassifisering er «må beherskes perfekt» nr. 5. |
| 3 | Deskriptiv statistikk og slutningslogikk | 4 | Deskriptiv 13, slutningslogikk/SE 9 (V2022 ga en hel oppgave på «logikken»); SD vs. SE er eksplisitt A-skille. Hybrid-del: regnefag-lån (se §2b). |
| 4 | Hypotesetesting og testvalg | 3 | Supergjenganger nr. 2: 19 sett; Type I/II i ~17; testvalg t/ANOVA/ANCOVA 12 og uttalt A-skille; power stigende (egen deloppgave V2024). |
| 5 | Korrelasjon og regresjon | 4 | Supergjenganger nr. 1: 20 sett, egen oppgave i praktisk talt hvert sett siden 2013; regresjon 14, r² 11, andre koeffisienter 5. |
| 6 | Kvalitativ metode | 2 | 6 forekomster, men fast egen oppgave hvert år fra 2023 med nesten ordrett gjentatte spørsmål og eksplisitt lave krav — billigste poeng på eksamen. |
| 7 | Etikk, åpen vitenskap og kunnskapsoppsummering | 2 | Etikk 5 (comeback som deloppgave V2025), HARKing/pre-registrering ny og programfestet (V2025), review/meta 3 (tilbake V2025), + restbegrepsbank (kappa, Likert, takeffekt m.m. — billig flervalgsdekning). |
| 8 | Eksamenstrening | 9 | 5 sjangerkapitler (dekker oppgavetypene T1–T8 fra analysen §3, tre sammenslåinger — se §2b) + feilvaksine + 3 modellbesvarelser (DNA-krav ≥3, analysens anbefalte tre sjangre). |

Rasjonale: ⭐⭐⭐-temaene (korrelasjon 20, hypotesetesting 19, regresjon 14,
UV/AV 13, deskriptiv 13, testvalg 12, r² 11, validitet 10+, SE-logikk 9, utvalg 9,
reliabilitet 8, overføringseffekter 7+, kvalitativ fast fra 2023) får 19 av 23
temakapitler; ⭐⭐-temaer (faktoriell, N=1, kvasi, prosess, power, etikk, åpen
vitenskap) får kompakte kapitler eller deler kapittel; ⭐-temaer (kappa,
spørreskjemakonstruksjon, fagfellevurdering, takeffekt, KI/Bayes) samles i 7.2 som
flervalgsberedskap — IKKE egne kapitler (analysen: «utfaset/perifert — dekkes kort»).

### 2b. Hybrid-valg og avvik fra DNA-malene (dokumentasjonsplikt fra README §2)

**Primær arketype er drøfting** fordi sensor vurderer forståelse, begrepspresisjon,
pensumforankring (Bordens & Abbott, Kvale & Brinkmann, Johannessen m.fl.,
forelesningene) og case-anvendelse — ikke fasitsvar. Alle kapitler følger
drøftings-DNAets blokkrekkefølge (tip Eksamensvinkel → text landskap →
definition kjernebegreper → text posisjoner/spenninger → example anvendelse →
warning typiske feil → exercise → collapsible pensumkart).

**Lånt fra DNA-regnefag.md** (begrunnelse: hvert sett 2008–2022 blander
begrepsdrøfting med små regneoppgaver; formler oppgis alltid, men A-kandidater som
kjenner dem honoreres; regning er nedtonet 2023–2025 men veiledningenes boilerplate
åpner for retur — og tolkningsforståelsen bygges best gjennom regning):

1. **`example`/`exercise` med full utregning** i tallkapitlene **3.1–3.4, 5.3 og
   2.3** (+ drillkapitlet 8.3): gjennomregnede eksempler steg for steg med
   intuisjonsforklaring per steg, exercise-serier med stigende vanskelighetsgrad
   som ender på eksamensnivå, alle med `solution` + `hints`. Tallene skal være
   «snille» som i eksamenssettene (f.eks. varians 2,25 → SD 1,5) — nyskrevne
   analoger til veiledningenes historiske tall.
2. **Formel-/notasjonskontrakt per tallkapittel** (regnefag-DNAets
   innholdskontrakt): formler og notasjon angis eksplisitt i skjelettet under og
   skal brukes i EMNETS notasjon (tabellen i §2c) — ikke lærebok-alternativer.
3. **Drillkapittel-mekanikk** i kap. 8.3 (regnefag-DNAets drillkapittel:
   løsningsoppskrift → gjennomregnet case med sensor-margnotater → 8–12 varianter).
4. **Kalibrert regne-didaktikk:** hver regneoppgave i boka OPPGIR formelen i
   oppgaveteksten (slik eksamen alltid gjør) — boka trener aldri formelpugging som
   mål, men merker «kjenn denne»-formler (SE = SD/√n) som A-plusspoeng.

**Tolkningskrav (hybrid-regel, gjelder ALLE utregninger i boka):** hvert
regnestykke avsluttes med en prosatolkning av hva tallet betyr i studien
(«SD vs. SE i ord», «hva 9 % delt varians innebærer»). En utregning uten tolkning
er ikke ferdig — dette speiler sensorregelen om at forståelsen av tallet veier
tyngre enn tallet.

**Avvik fra ren drøftings-DNA (begrunnede):**
- **Modellbesvarelsene bruker «C-kjerne + A-plusspoeng-lag»** i stedet for to
  separate fulltekst-besvarelser: veiledningene selv skiller slik (kjernemomenter
  som definerer «godt besvart» + eksplisitte pluss-markører), og analysen §7
  anbefaler formatet. A-laget markeres i margen på én besvarelse; en kort
  kommentert C-variant viser gapet.
- **Feilvaksine-kapittel (8.6)** — utvidelse av DNA-malen, eksplisitt anbefalt i
  analysen §7; SVMET1010-presedens.
- **Pensumforankringen er tynnere enn i rene drøftingsfag:** emnet har fire ankere
  (Bordens & Abbott; Kvale & Brinkmann kap. 1; Johannessen m.fl.; forelesningene) —
  ikke SVMET-aktig forfattermangfold. Flashcard-profilen dreies derfor fra
  begrep↔forfatter til **begrep↔definisjon↔kontrastbegrep** (Type I↔II, SD↔SE,
  kasus↔N=1, mediator↔moderator) — det er nøyaktig presisjonen deloppgavene tester.
- **Sjangerkapitlene slår sammen beslektede oppgavetyper:** T4+T5+T6
  (design/måling/testvalg deler diagnose-logikk, kap. 8.4) og T7+T8
  (kvalitativ + prosess/bredde, kap. 8.5) — arkivets åtte typer dekkes med fem
  sjangerkapitler uten tap.
- **Ingen jus-/lovsjekk** (ikke relevant fagtype); ingen WebFetch-behov.

### 2c. Notasjonskontrakt (AUTORITATIV — brukes i hele boka)

Alle symboler under er hentet fra oppgavetekster/veiledninger og er bokas
standardnotasjon. README-kravet om **Symbol- og formelliste per delkapittel**
(collapsible rett etter Forkunnskaper) gjelder ALLE kapitler som bruker symboler —
også drøftingskapitler som bare nevner r eller p. Listen er per delkapittel og
arver aldri fra tidligere kapitler.

| Notasjon | Betydning |
|---|---|
| x̄ (x̄₁, x̄₂) | utvalgsgjennomsnitt |
| μ | populasjonsgjennomsnitt (i H0/H1; «my/mu» godtas skriftlig) |
| s², SD (= √s²) | utvalgsvarians, standardavvik; s² = ∑(x − x̄)²/(n − 1) |
| SE = SD/√n (også sₘ, s_x̄) | standardfeil til gjennomsnittet |
| SE(D) = Sp√(1/n₁ + 1/n₂) | standardfeil for differansen (Sp = samlet SD) |
| t = (x̄₁ − x̄₂)/SE(D) | t-observator; tolkes som avvik målt i standardfeil |
| r, r² | Pearson-korrelasjon; forklart/delt varians |
| Ŷ = a + bX | regresjonsligning: predikert Y, intercept a, regresjonsvekt b |
| H0, H1 (Ha) | null- og alternativ-/forskningshypotese |
| α, p, β, 1 − β | signifikansnivå, p-verdi, Type II-risiko, styrke/power |
| z | standardskåre; ±1,96 ↔ 95 % |
| K = (Po − Pc)/(1 − Pc) | Cohens kappa (perifer) |
| n, N | utvalgsstørrelse |

Regneferdigheter boka skal drille (alle med oppgitt formel og snille tall):
sentraltendens; varians/SD fra 6–14 verdier; SE fra SD og n; SE(D) og t for to
grupper; r² fra r; Ŷ fra a, b og x; prosent enighet og kappa; avlesning av
boksplott/histogram/stem-and-leaf; skissering av regresjonslinje.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = forekomster/år + oppgavetyper fra analysen
> §3 (T1 korrelasjonsoppgaven, T2 hypotesetestingsoppgaven, T3 regne-/tolknings-
> oppgaven, T4 designoppgaven, T5 måle-/utvalgsoppgaven, T6 testvalgsoppgaven,
> T7 kvalitativ-oppgaven, T8 bredde-/prosessoppgaven) + prioritetsklasse
> (perfekt / kunne / kjenne, fra analysen §7). **Kvote** = quiz/flashcards.
> **Typiske feil** refererer analysens §5 med #nummer (fordelingen samles i 8.6).
> ⚠ = utgave-/pensumsensitiv kobling (begrepet er stabilt, ankeret må revideres
> ved pensumskifte; gjelder særlig Johannessen-kapitlene og forelesningsstoff).

### Del 0 — Eksamenskart og besvarelseshåndverk

#### Kapittel 0.1: Slik testes PSY1010
- **id:** `psy1010-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart.
- *Description:* Eksamensformatet «besvar 3 av 4», temafrekvensen 2008–2025, de åtte
  oppgavetypene og strategien som følger av at gjenbruk er normen.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (29 sett). Skal
  formidle: (a) 3 timers skoleeksamen, fire oppgaver, velg tre, **alle teller
  likt** (gjennomsnitt); å besvare alle fire gir null ekstra — sensor stryker den
  SISTE, ikke den dårligste; kun to besvarte = automatisk stryk; én reelt tom
  oppgave kan felle (mildnet fra 2021/2022: svak-men-ikke-tom kan reddes av gode
  snitt). (b) Deloppgavene har bevisst ulik vanskelighetsgrad — kjente A-skiller:
  ANCOVA-spørsmålet, SD vs. SE, interaksjon-uten-hovedeffekt, enhalet/tohalet,
  samplingfordelingens rolle. (c) Fasene: 2008–2014 begrepsoppgaver;
  2013–2019 gjennomgående case + kalkulator; kun våreksamen fra 2019; 2020–2022
  åpen bok; 2023→ ny profil: kvalitativ fast egen oppgave, regnekrav i praksis
  borte (kun tolkning av oppgitte tall), åpen vitenskap inn (V2025).
  (d) Temafrekvens-tabellen fra analysen §2 i destillert form. (e) Oppgavene er
  tematisk «rene» (én korrelasjon/regresjon, én hypotesetesting, én
  design/eksperiment, én måling/utvalg/kvalitativ) — man KAN i praksis velge bort
  ett hovedtema, men bør ikke planlegge med det (temaene kombineres fritt).
  (f) Gjenbruk er normen: hele oppgaver resirkuleres med kosmetiske endringer —
  å drille sjangrene er den mest treffsikre forberedelsen. (g) Formler oppgis
  alltid. Prioritet: perfekt (metanivå).
- **Begrepskontrakt:** ingen fagbegreper — presise beskrivelser av oppgavetypene
  T1–T8 med typisk deloppgaveforløp og tidsbudsjett (~55 min per oppgave + margin).
- **Drøftingsakser:** ingen (kartkapittel).
- **Case-forslag:** «Slik leser du et sett»-gjennomgang av ett nyskrevet
  eksempelsett i 2023–2025-profil (fire oppgaver: korrelasjon, hypotesetesting,
  design, kvalitativ).
- **Typiske feil:** #14 svare på alle fire oppgaver (bortkastet tid — den siste
  ignoreres); tidsfellen: å bruke 90 min på favorittoppgaven.
- **Kvote:** 10 quiz / 8 flashcards (formatfakta, sjangergjenkjenning).

#### Kapittel 0.2: Besvarelseshåndverket — fra definisjon til begrunnet anvendelse
- **id:** `psy1010-0-2` · **number:** 0.2 · **estimatedMinutes:** 50 · **prerequisites:** `psy1010-0-1`
- **Kapitteltype:** besvarelseshåndverk (drøftings-DNAets essayhåndverk, kalibrert
  til PSY1010s deloppgaveformat).
- *Description:* Sensorens vurderingsfilosofi og hvordan en toppbesvarelse bygges:
  C-kjernen først, A-laget bevisst.
- **Eksamensbelegg:** Destillat av sensorkravene (analysen §4) — samme kjerneteam
  og gjenbrukt «generell del» 2018–2025. Prioritet: perfekt. Skal operasjonalisere:
  (a) **Forståelse trumfer reproduksjon** — veiledningene er momentlister, ikke
  fasit; uortodokse løsninger vurderes på egne premisser. (b) **Relevansfilteret:**
  stoff honoreres bare når det er gjort relevant for spørsmålet; «jeg kan også
  dette»-utbrodering gir null (trekker ikke ned, men stjeler tid). (c) **Gode
  eksempler trekker opp** — eksplisitt i hver veiledning. (d) **Regneoppgaver:
  fremgangsmåten teller**; regnefeil med riktig metode straffes mildt; utregning
  MÅ vises. (e) Nivåbildet: A/B løser de vanskelige deloppgavene, begrunner valg,
  knytter begreper sammen (varians → SD → SE → p; reliabilitet ↔ validitet;
  design ↔ validitetstype), case-tilpasser alt; C treffer kjernepoengene men blir
  stående i definisjonene; D/E blander begrepspar; F = to oppgaver eller én tom.
  (f) A-markørene fra §4 (naturlig vs. påført variasjon, kausalmodell-vokabular,
  utvalgsfordelings-resonnementet, signifikans ≠ viktighet, power-resonnement,
  begrepene bekvemmelighetsutvalg/familywise error/ANCOVA/HARKing uoppfordret,
  kost-nytte i designvalg, forskningsspørsmålet styrer designet). Bokas mantra
  innføres: **«definer — anvend på caset — begrunn»** og «C-kjerne + A-lag».
- **Begrepskontrakt:** besvarelsesarkitektur per deloppgave (definisjon i 1–2
  setninger → anvendelse på scenariet → begrunnelse/kobling); tidsbudsjett-modell
  for 3 timer; «vis utregningen»-regelen.
- **Drøftingsakser:** bredde (alle deloppgaver besvart) vs. dybde (A-skillene
  løst) — begge trengs fordi alt teller likt; når man skal hoppe over et A-skille
  og komme tilbake.
- **Case-forslag:** Samme deloppgave («hva betyr r = 0,40 her?») besvart tre
  ganger — E (kun «middels sterk»), C (retning + styrke + konvensjon), A (+
  naturlig variasjon, vilkårlige roller, forbehold) — med margkommentarer.
- **Typiske feil:** #15 «jeg kan også dette»-utbrodering; #8 oppramsing uten
  begrunnelse (skjema-svar gir C-tak); #13 usynlig utregning.
- **Kvote:** 12 quiz / 8 flashcards (nivåkjennetegn, A-markørliste, sensorregler).

### Del 1 — Forskningsprosessen, måling og utvalg

#### Kapittel 1.1: Forskningsprosessen fra idé til rapport
- **id:** `psy1010-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** `psy1010-0-2`
- **Kapitteltype:** tema.
- *Description:* Hele forskningsløpet — idé, forskningsspørsmål, hypotese,
  operasjonalisering, design, utvalg, måling, pilot, analyse, rapport — og hvorfor
  prosessen er syklisk.
- **Eksamensbelegg:** 4 sett (H2011, H2015, V2024, V2025) — ⭐⭐ med comeback:
  hovedoppgave i to av de tre siste settene. Type T8. Prioritet: kunne
  (§7 pkt. 12 — stigende).
- **Begrepskontrakt (anker: Bordens & Abbott, *Research Design and Methods*,
  prosessfiguren fig. 1-2):** vitenskapelig metode vs. hverdagskunnskap;
  forskningsidé-kilder (tilfeldig og systematisk observasjon, litteratur, teori);
  krav til forskningsspørsmål (empirisk testbart, gjennomførbart, viktig);
  hypotese (utledet ved deduksjon, minst to variabler, falsifiserbar);
  operasjonalisering (gjør fenomener målbare — frempek 1.2); designvalg → utvalg →
  målemetode → pilotstudie → analyse → rapport; teori vs. lov vs. modell
  (A-markør); grunnforskning vs. anvendt forskning (A-markør); prosessen er
  **syklisk** (resultater føder nye ideer — A-markør); fagfellevurdering (én
  setning, dybde i 7.2).
- **Drøftingsakser:** forskningsspørsmålet styrer designet — ikke omvendt
  (eksplisitt A-markør i veiledningene); hverdagskunnskapens feilkilder vs.
  metodens korrektiver; når er et spørsmål forskbart?
- **Case-forslag:** Fra anekdote til studie: «folk sier de husker bedre med
  håndskrevne notater» følges gjennom alle trinn til en ferdig designskisse —
  hvert trinn med funksjonsforklaring (hvorfor trinnet finnes).
- **Typiske feil:** #8-varianten: å ramse trinnene uten å forklare hvert trinns
  funksjon (prosessoppgavene belønner forklaring, ikke liste).
- **Kvote:** 20 quiz / 20 flashcards (trinnene i rekkefølge, kravtriader,
  teori/lov/modell-skillet).

#### Kapittel 1.2: Variabler, operasjonalisering og målenivåer
- **id:** `psy1010-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `psy1010-1-1`
- **Kapitteltype:** tema.
- *Description:* UV og AV i konkrete scenarier, operasjonelle definisjoner og de
  fire målenivåene — standard åpningsdeloppgave på eksamen.
- **Eksamensbelegg:** 13 sett (H2008, V2010, H2013, V2013, V2014, H2015, V2017,
  V2018, H2018u, V2019, V2020, V2021, V2022) — «hva er UV og AV her?» er standard
  åpningsdeloppgave. Typer: T5 (+ komponent i T4). Prioritet: **perfekt**
  (som komponent i design- og måleoppgavene).
- **Begrepskontrakt (Bordens & Abbott):** uavhengig variabel (manipuleres) /
  avhengig variabel (måles); kvasi-UV (egenskap som ikke kan manipuleres — kjønn,
  alder); operasjonalisering/operasjonell definisjon; målenivåene nominal /
  ordinal / intervall / forhold med klassifiseringsregler og standardeksempler
  (kjønn nominal, klassetrinn ordinal, sumskår intervall, antall/tid forhold);
  Likert-skala med ankerpunkter (kort — detaljer i 7.2); i korrelasjonsstudier er
  UV/AV-rollene et VALG, ikke gitt av data (A-presisjon); konfunderende variabel
  (én setning — dybde i 5.2).
- **Formler/notasjon + tolkningskrav:** symbolfattig kapittel; kun
  målenivå-konsekvensen: målenivået bestemmer hvilke statistiske mål som er
  meningsfulle (median krever ordinal, gjennomsnitt intervall — frempek 3.1).
- **Drøftingsakser:** samme fenomen operasjonalisert på flere måter — hva hver
  operasjonalisering fanger og mister; grensen ordinal/intervall for sumskårer
  (konvensjon, ikke naturlov).
- **Case-forslag:** Scenario «musikk under lesing og hukommelse»: identifiser UV,
  AV, kvasi-UV og klassifiser alle variabler med begrunnelse — slik en
  A-besvarelse gjør det (klassifisering + regel, ikke bare merkelapp).
- **Typiske feil:** #8: klassifisering uten begrunnelse («ordinal» uten å si
  hvorfor); å kalle kjønn en manipulert UV.
- **Kvote:** 20 quiz / 25 flashcards (nivå↔kjennetegn↔eksempel-tripler,
  UV/AV-diagnoser).

#### Kapittel 1.3: Reliabilitet og testvaliditet
- **id:** `psy1010-1-3` · **number:** 1.3 · **estimatedMinutes:** 60 · **prerequisites:** `psy1010-1-2`
- **Kapitteltype:** tema.
- *Description:* Måleteoriens to spørsmål — måler testen stabilt, og måler den det
  den skal? — og skillet mot slutningsvaliditet som koster karakterer å blande.
- **Eksamensbelegg:** 8 sett (V2010, H2010, V2012 (kappa), V2013, V2017, V2018,
  V2020, V2021). Typer: T5. Prioritet: kunne (§7 pkt. 9 — differensierende).
- **Begrepskontrakt (Bordens & Abbott, reliabilitets- og validitetstypologiene):**
  reliabilitet som stabilitet/konsistens og forutsetning for validitet; metodene
  test-retest, parallelle former, split-half, intern konsistens (Cronbachs α —
  tolke oppgitt verdi, f.eks. 0,82; aldri regnes), interrater-reliabilitet
  (prosent enighet; Cohens kappa perifert — formel oppgis, dybde i 7.2);
  testvaliditet: face-, innholds-, kriterievaliditet (samtidig + prediktiv),
  begrepsvaliditet; **reliabel-uten-valid-logikken** (stabilt feil måleinstrument —
  nyskrevet analogi, f.eks. en klokke som konsekvent går 10 minutter for fort) og
  hvorfor det omvendte ikke går; **skillet testvaliditet vs. slutningsvaliditet**
  (indre/ytre validitet gjelder *slutninger fra studier*, ikke tester — analysens
  feil #5, påpekt av veiledningene hvert år det spørres).
- **Formler/notasjon + tolkningskrav:** K = (Po − Pc)/(1 − Pc) presenteres med
  oppgitt-formel-regel; α tolkes i prosa (hva 0,82 betyr, hvorfor «høyere er
  bedre» har tak).
- **Drøftingsakser:** hvilken reliabilitetsmetode passer hvilket instrument
  (test-retest forutsetter stabilt fenomen; split-half krever homogen test);
  face-validitetens dobbeltrolle (motivasjon vs. gjennomskuelighet).
- **Case-forslag:** En ny skala for eksamensstress valideres trinn for trinn:
  velg reliabilitetsmetoder med begrunnelse, tolk α = 0,82, design
  kriterievalidering (samtidig mot etablert skala, prediktiv mot fysiologisk mål).
- **Typiske feil:** #5 testvaliditet ≠ slutningsvaliditet (svare indre/ytre når
  det spørres om validering av en test); #8 alle validitetsformene uten å knytte
  dem til scenariet.
- **Kvote:** 25 quiz / 30 flashcards (metode↔hva den fanger-par,
  validitetstype↔spørsmålet den besvarer — typologiene er flashcard-gull).

#### Kapittel 1.4: Utvalg og rekruttering
- **id:** `psy1010-1-4` · **number:** 1.4 · **estimatedMinutes:** 50 · **prerequisites:** `psy1010-1-1`
- **Kapitteltype:** tema.
- *Description:* Fra populasjon til utvalg: sannsynlighets- og
  ikke-sannsynlighetsutvalg, bekvemmelighetsrefleksen og frivillighetsbias.
- **Eksamensbelegg:** 9 sett (H2008, H2014, V2015, V2016, H2016, V2019, V2020,
  V2022, V2025). Typer: T5 (+ komponent i T4/T8). Prioritet: kunne (§7 pkt. 10).
- **Begrepskontrakt (Bordens & Abbott, utvalgskapitlet):** populasjon,
  utvalgsramme, utvalg («miniatyrkopi»-idealet); sannsynlighetsutvalg: enkel
  tilfeldig, stratifisert (± proporsjonal), systematisk, klynge (cluster —
  forelesningens tolkning av forelesningsutvalg ⚠); ikke-sannsynlighetsutvalg:
  **bekvemmelighetsutvalg** som riktig merkelapp på «spørreskjema på
  forelesning»/Facebook-rekruttering (bonusord i veiledningene — skal sitte som
  refleks); **frivillighetsbias** — hva som kjennetegner folk som melder seg
  frivillig, og hva det gjør med ytre validitet; selektivt frafall; responsrate;
  koblingen skjev seleksjon → generaliserbarhet (bro til 2.1s ytre validitet).
- **Drøftingsakser:** praktisk gjennomførbarhet vs. representativitet — når
  bekvemmelighetsutvalg er forsvarlig (og hva som da MÅ sies om generalisering);
  stratifisering vs. enkel tilfeldig for små subgrupper.
- **Case-forslag:** En søvnstudie rekrutterer via studentgruppe på sosiale medier:
  diagnostiser utvalget (bekvemmelighet + frivillighetsbias), konsekvenser for
  generalisering, og design et sannsynlighetsalternativ med utvalgsramme.
- **Typiske feil:** #9 å behandle forelesnings-/Facebook-utvalg som representativt;
  #8 å liste alle teknikkene uten å velge og begrunne (veiledningene ber sensor
  sjekke nettopp dette).
- **Kvote:** 20 quiz / 25 flashcards (teknikk↔kjennetegn↔eksempel; biasbegrepene).

**Prøve-kvote Del 1:** 4 prøver (se §4).

### Del 2 — Design og validitet

#### Kapittel 2.1: Det ekte eksperimentet — indre og ytre validitet
- **id:** `psy1010-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `psy1010-1-2`
- **Kapitteltype:** tema.
- *Description:* Hva som gjør et eksperiment ekte, hvorfor randomisering er
  kausalitetens pris — og validitetsspråket alle designoppgaver vurderes i.
- **Eksamensbelegg:** Indre/ytre validitet: 10+ sett (H2009, H2011, V2011, V2013,
  H2014, V2015, V2018, V2018u, H2018, V2021 + komponent i nesten alle
  designoppgaver). Typer: T4 (begge undervarianter), T5. Prioritet: **perfekt**
  (§7 pkt. 5).
- **Begrepskontrakt (Bordens & Abbott):** ekte eksperiment = manipulasjon +
  randomisert tilordning + kontrollgruppe; randomisering fordeler feilvarians
  likt mellom gruppene (kjernesetning); systematisk vs. usystematisk feilvarians
  (+ planlagt systematisk varians — H2018-begrep); pretest-posttest
  kontrollgruppedesign; venteliste-kontroll; blinding (enkel/dobbel) og hvorfor
  fravær truer; **indre validitet** (holdbar årsaksslutning) vs. **ytre validitet**
  (generaliserbarhet) og spenningen mellom dem (streng laboratoriekontroll →
  kunstighet); reaktivitet og demand characteristics (deltakere som kjenner
  formålet); Solomon firegruppedesign som idealdesign mot pretest-effekter
  (bør kjenne — V2016, V2019).
- **Drøftingsakser:** kontroll vs. økologisk gyldighet; venteliste-kontrollens
  etikk (bro til 7.1); når kvasi er det beste man etisk/praktisk kan få
  (frempek 2.4).
- **Case-forslag:** Venteliste-RCT for en app mot eksamensangst: klassifiser
  designet, identifiser at det er ekte men ublindet, drøft
  reaktivitet/forventningseffekter og foreslå forbedringer — mønsteret fra
  T4-undervariant 1 («klassifiser og forbedre»).
- **Typiske feil:** #5 (reprise fra måleperspektivet: indre/ytre validitet brukt
  om tester); #8 svakhetsliste uten kobling til scenariet.
- **Kvote:** 20 quiz / 20 flashcards (kjennetegns-triaden, validitetspar,
  trusselbegreper).

#### Kapittel 2.2: Mellomgruppe- og innengruppedesign — overføringseffekter og motbalansering
- **id:** `psy1010-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `psy1010-2-1`
- **Kapitteltype:** tema.
- *Description:* Valget mellom å sammenligne personer og å la personen være sin
  egen kontroll — med de seks overføringseffektene som pris.
- **Eksamensbelegg:** 7+ sett (H2008, V2011, H2014, H2016, V2018, V2018u, V2023);
  overføringseffekter alene i 7 sett. Typer: T4, T5. Prioritet: **perfekt**
  (§7 pkt. 5).
- **Begrepskontrakt (Bordens & Abbott):** mellomgruppedesign vs.
  innengruppe-/repetert design; innengruppens gevinster: kontrollerer
  individforskjeller (mindre feilvarians/støy), færre deltakere, høyere statistisk
  styrke; kostnaden: **de seks overføringseffektene** — trening, uttrøtting,
  habituering, sensitivisering, kontrast, adaptasjon — som systematisk
  feilvarians; mottiltak: full og delvis motbalansering, latinsk kvadrat,
  treningsrunder, rekkefølge som egen UV; kost-nytte-resonnementet (mellomgruppe
  sparer per-person-belastning, innengruppe sparer deltakere — eksplisitt
  A-markør).
- **Drøftingsakser:** når overføringseffekter er så alvorlige at innengruppe er
  uaktuelt (irreversible effekter: læring, behandling); full motbalansering vs.
  latinsk kvadrat (kombinatorikk-kostnaden).
- **Case-forslag:** Smakstest av to energidrikker designet begge veier: vis
  konkret hvilke av de seks effektene som truer innengruppe-varianten
  (kontrast/adaptasjon), og motbalanser.
- **Typiske feil:** #8-varianten: liste de seks effektene uten å identifisere
  hvilke som er relevante i scenariet (case-tilpasning er A-kravet).
- **Kvote:** 18 quiz / 20 flashcards (de seks effektene ↔ definisjon ↔ eksempel;
  mottiltakene).

#### Kapittel 2.3: Faktorielle design — hovedeffekter og interaksjon
- **id:** `psy1010-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `psy1010-2-2`
- **Kapitteltype:** tema (tallinnslag — hybrid).
- *Description:* 2×2-designet: å lese hovedeffekter fra marginaler og interaksjon
  fra cellemønsteret — inkludert A-skillet «kan interaksjon finnes uten
  hovedeffekt?».
- **Eksamensbelegg:** 6 sett (H2009, H2011, H2012, V2017, V2019, V2022 —
  PTSD-caset). «Kan interaksjon finnes uten hovedeffekt?» er et uttalt
  differensieringsledd. Typer: T4, T6. Prioritet: kunne (A-stoff, §7 pkt. 8).
- **Begrepskontrakt (Bordens & Abbott):** faktor, nivå, celle; 2×2 = fire
  betingelser; hovedeffekt leses av marginalgjennomsnitt (rad/kolonne);
  interaksjon leses av cellemønsteret (effekten av én faktor avhenger av nivået
  på den andre); **interaksjon uten hovedeffekt** er mulig (kryssende linjer som
  nuller marginalene) og interaksjon kan maskere hovedeffekter — vises med
  firefeltstabell OG linjediagram; analyseres med tofaktor-ANOVA (frempek 4.3);
  kvasi-UV som faktor (kjønn × betingelse).
- **Formler/notasjon + tolkningskrav (hybrid):** marginalgjennomsnitt regnes fra
  oppgitte celletall (små, snille tall); hvert regnestykke tolkes («faktor A har
  ingen hovedeffekt fordi marginalene er like — men se cellene»). `example` ×2
  gjennomregnet: én med to hovedeffekter uten interaksjon, én med ren interaksjon
  uten hovedeffekter.
- **Drøftingsakser:** hvorfor faktorielle design gir mer enn to separate
  eksperimenter (interaksjonen er informasjonen); grafisk vs. numerisk
  interaksjonsdiagnose.
- **Case-forslag:** 2×2: terapiform (eksponering/samtale) × format
  (fysisk/digitalt) med nyskrevne celletall der digital eksponering og fysisk
  samtale virker best — ren interaksjon, null hovedeffekter.
- **Typiske feil:** å lese interaksjon som «begge faktorer virker»; å lete etter
  interaksjon i marginalene; #13 uleselig celleregning.
- **Kvote:** 15 quiz / 15 flashcards (begrepstripler, tabelldiagnoser).

#### Kapittel 2.4: Kvasieksperiment, N=1-design og kasusstudien
- **id:** `psy1010-2-4` · **number:** 2.4 · **estimatedMinutes:** 60 · **prerequisites:** `psy1010-2-1`
- **Kapitteltype:** tema.
- *Description:* Design uten randomisering (kvasi) og design uten grupper (N=1) —
  og fellen som veiledningene advarer mot to ganger: kasusstudien er ikke et
  N=1-eksperiment.
- **Eksamensbelegg:** Kvasi: 5 sett (V2011, V2013, V2014, H2014, H2018u —
  dagslys-caset gjenbrukt V2014 → H2018u). N=1: 6 sett (V2012, V2015, H2017,
  H2018, V2020, V2021). Typer: T4. Prioritet: kunne (§7 pkt. 11).
- **Begrepskontrakt (Bordens & Abbott + forelesningene ⚠ for klassikerne):**
  kvasieksperiment: manipulasjon uten randomisert tilordning; ikke-ekvivalente
  grupper; felteksperiment; seleksjonstrusler mot indre validitet; når kvasi er
  eneste mulighet (naturlige grupper, etikk); **N=1/single-subject er et EKTE
  eksperiment** (manipulasjon, kontrollbetingelser — personen er sin egen
  kontroll); tre varianter: baseline-design, discrete trials, dynamiske design;
  ABAB med faseforklaring — flere reverseringer gir bedre indre validitet;
  baseline-stabilitetskriteriet og drifting baseline som problem; svak ytre
  validitet; **kasusstudien er deskriptiv/ikke-eksperimentell** — må aldri blandes
  med N=1 (analysens feil #4, advart mot to ganger i veiledningene); klassiske
  N=1-eksempler: Ebbinghaus, Pavlov, Thorndike, Skinner, Moser & Moser
  (forelesningsanker ⚠).
- **Drøftingsakser:** kvasi vs. ekte når randomisering er mulig men dyr; ABAB når
  effekten ikke er reversibel (etisk og logisk grense); hva N=1 kan si som
  gruppedesign ikke kan (individnivå-kausalitet) og omvendt (generalisering).
- **Case-forslag:** (a) To skoler får nytt lysanlegg, to naboskoler ikke —
  klassifiser (kvasi, ikke-ekvivalente grupper), trusler, forbedring til ekte
  eksperiment (mønsterklon av T4 med nye fakta). (b) ABAB-design for
  belønningsopplegg mot tics hos ett barn: faser, baseline-krav, reverseringens
  logikk.
- **Typiske feil:** #4 kasusstudie ≠ N=1 (bokas nest viktigste før/etter-drill
  etter p-verdien); å hente kvalitative kasuseksempler som «N=1».
- **Kvote:** 20 quiz / 25 flashcards (design↔kjennetegn↔eksempel; klassikerne;
  ABAB-fasene).

**Prøve-kvote Del 2:** 4 prøver (se §4).

### Del 3 — Deskriptiv statistikk og slutningslogikk (hybrid-del)

> Regnefag-lånet gjelder hele delen: gjennomregnede `example`-blokker med
> intuisjon per steg, exercise-serier med solution + hints, snille tall,
> obligatorisk prosatolkning etter hvert regnestykke. Symbol- og formelliste-
> collapsible er obligatorisk i alle fire kapitler.

#### Kapittel 3.1: Sentraltendens og spredning
- **id:** `psy1010-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `psy1010-1-2`
- **Kapitteltype:** tema/regnekapittel (hybrid).
- *Description:* Gjennomsnitt, median og modus — og hva spriket mellom dem
  avslører; varians og standardavvik regnet for hånd med forståelse av hvert ledd.
- **Eksamensbelegg:** 13 sett (V2011, H2012, H2013, H2014, V2015, H2015, V2016,
  H2016, V2017, H2017, V2018u, V2019, V2022) — regneoppgaven 2011–2019, kun
  begrepsnivå etter 2019 (men «billig å vedlikeholde», §7 pkt. 6). Typer: T3.
  Prioritet: **perfekt** (vedlikeholdsklasse).
- **Begrepskontrakt (Bordens & Abbott):** gjennomsnitt, median, modus — og NÅR de
  spriker (skjevfordeling; gjennomsnittet mest uteligger-følsomt); uteligger;
  variasjonsbredde, interkvartilbredde (IQR); varians og standardavvik;
  **hvorfor nevneren er n − 1** (utvalgsestimat/frihetsgrader — fast
  deloppgave); målenivå-koblingen fra 1.2 (hvilket mål krever hvilket nivå).
- **Formler/notasjon + tolkningskrav:** x̄ = ∑x/n; s² = ∑(x − x̄)²/(n − 1);
  SD = √s². Tolkningskrav: hvert regnestykke ender i prosa («gjennomsnittet
  ligger over medianen fordi de to høye skårene drar — fordelingen er
  høyreskjev»). `example` ×3 (regnefag-stigen): enkel 6-verdiers serie →
  10-verdiers med uteligger → eksamensnivå 11–14 verdier der alle tre målene
  spriker og skal forklares. Nyskrevne tallsett kalibrert mot veiledningenes
  «snille» tall (varians 2,25 → SD 1,5-typen).
- **Drøftingsakser:** hvilket sentralmål er «riktig» for skjeve fordelinger
  (inntekt/reaksjonstid-typen); rapportere ett mål eller flere.
- **Case-forslag:** Elleve nyskrevne skårer fra en ordforrådstest med én ekstrem
  verdi (mønsterklon av T3-tallrekka, nye tall): regn alle tre, regn s² og SD med
  oppgitt formel, forklar spriket og n − 1.
- **Typiske feil:** #13 regning uten synlig fremgangsmåte (kan ikke reddes av
  «riktig metode»-regelen); å glemme kvadratrota (rapportere s² som SD).
- **Kvote:** 20 quiz / 18 flashcards (mål↔egenskap↔følsomhet; formelledd i ord).

#### Kapittel 3.2: Fordelinger, figurer og z-skårer
- **id:** `psy1010-3-2` · **number:** 3.2 · **estimatedMinutes:** 45 · **prerequisites:** `psy1010-3-1`
- **Kapitteltype:** tema/regnekapittel (hybrid, lett).
- *Description:* Å lese fordelinger fra figurer — histogram, boksplott,
  stem-and-leaf — og normalfordelingen som parametrisk grunnmur, med z-skåren som
  felles målestokk.
- **Eksamensbelegg:** Figuravlesning i T3-varianter (H2012 figurtolkning, V2018u
  boksplott m.fl.); normalfordeling/z: 3 sett (V2014, H2018u, V2020). Typer: T3.
  Prioritet: kunne (§7 pkt. 13).
- **Begrepskontrakt (Bordens & Abbott):** frekvensfordeling, histogram; boksplott
  (median, kvartiler, IQR, uteliggermarkering — avlesning); stem-and-leaf;
  skjevfordeling og konsekvensen for gjennomsnitt vs. median (kobling 3.1);
  normalfordelingens egenskaper og 68,2/95/99,7-regelen; hvorfor
  normalfordelingen er grunnlag for parametrisk statistikk; **z-skåre**: snitt 0,
  SD 1, muliggjør sammenligning på tvers av skalaer, endrer IKKE fordelingens
  form; ±1,96 ↔ 95 % (frempek til SE/p i 3.3).
- **Formler/notasjon + tolkningskrav:** z = (x − x̄)/SD. Tolkningskrav: z-verdier
  oversettes alltid til prosa («1,5 SD over snittet — blant de ~7 % høyeste»).
  `example`: to elever på ulike skalaer sammenlignes via z.
- **Drøftingsakser:** når normalantakelsen er rimelig for psykologiske mål — og
  når den ryker (takeffekter, reaksjonstid); figurvalg som kommunikasjon.
- **Case-forslag:** Nyskrevet boksplott over skjermtid i to klasser: les av
  median/IQR/uteligger, avgjør skjevhet, forklar hvorfor gjennomsnittet ikke
  vises i plottet.
- **Typiske feil:** å tro standardisering normaliserer en skjev fordeling; å
  forveksle IQR og variasjonsbredde ved avlesning.
- **Kvote:** 15 quiz / 18 flashcards (figurelementer, prosentregelen,
  z-egenskaper).

#### Kapittel 3.3: Slutningslogikken — populasjon, utvalgsfordeling og standardfeil
- **id:** `psy1010-3-3` · **number:** 3.3 · **estimatedMinutes:** 60 · **prerequisites:** `psy1010-3-1`, `psy1010-1-4`
- **Kapitteltype:** tema (bokas statistiske tyngdepunkt).
- *Description:* Historien som gjør all slutningsstatistikk begripelig: fra
  populasjon via tilfeldig utvalgsvariasjon til utvalgsfordeling, standardfeil —
  og det eksamenskritiske skillet SD vs. SE.
- **Eksamensbelegg:** 9 sett (V2010, V2014, V2018, H2018, H2018u, V2020, V2021,
  V2022, V2023); V2022 oppgave 3 ga en HEL oppgave på «forklar hele logikken» —
  sjangerens toppunkt; SD vs. SE er eksplisitt differensieringsledd. Typer: T2,
  T3. Prioritet: **perfekt** (§7 pkt. 4 + 6).
- **Begrepskontrakt (Bordens & Abbott, sₘ/s_x̄-notasjonen):** fortellingen som
  fast pensumstykke: populasjon → tilfeldig utvalg → utvalgsverdier avviker
  tilfeldig fra populasjonsverdien → tenkte gjentatte utvalg gir en
  **utvalgsfordeling** av gjennomsnitt → dens standardavvik er **standardfeilen**
  → p-verdier beregnes fra utvalgsfordelingen (A-markør) → beslutning; SE = SD/√n;
  **SD vs. SE presist**: SD = spredning i data (samme skala som målingen),
  SE = presisjonen i gjennomsnittsestimatet (standardavviket i utvalgsfordelingen);
  sentralgrense-resonnementet (A-markør: utvalgsfordelingen blir normal når n
  øker); n → mindre SE → mer presisjon (bro til power i 4.2); 95 % innenfor
  ±1,96 SE (A-markør).
- **Formler/notasjon + tolkningskrav:** SE = SD/√n med snille tall (SD 3, n 36 →
  SE 0,5-typen, nyskrevne varianter). Tolkningskrav: hvert SE-regnestykke
  avsluttes med SD-vs-SE-setning i ord. `example` ×2: regne SE + «fortell
  historien» for et konkret scenario.
- **Drøftingsakser:** hvorfor vi kan si noe om en fordeling vi aldri observerer
  (utvalgsfordelingen er teoretisk); hva som skjer med SE når n firedobles
  (√-effekten — presisjon er dyr).
- **Case-forslag:** En normert konsentrasjonstest (populasjonssnitt kjent):
  fortell hele logikken fra «hvorfor avviker utvalgssnittet?» til «hva p bygger
  på» — V2022-sjangeren som gjennomskrevet fortelling, nyskrevet scenario.
- **Typiske feil:** #6 SD ≠ SE (behandle SE som «enda et spredningsmål» uten
  utvalgsfordelingen); #12 å glemme at slutningen gjelder populasjonen (μ), ikke
  utvalget.
- **Kvote:** 20 quiz / 18 flashcards (kjedens ledd i rekkefølge, SD/SE-kontraster,
  √n-effekter).

#### Kapittel 3.4: t-regnestykket — fra varians til t
- **id:** `psy1010-3-4` · **number:** 3.4 · **estimatedMinutes:** 50 · **prerequisites:** `psy1010-3-3`
- **Kapitteltype:** regnekapittel (hybrid, drillnært).
- *Description:* Den komplette regnesekvensen for togruppesammenligning — varians
  → SD → SE → SE(D) → t — slik den sto på eksamen 2018–2021, med tolkning som
  mål.
- **Eksamensbelegg:** Full regnesekvens i V2018 (p = 0,295), H2018 (p = 0,0012),
  V2021 (p = 0,002); tyngst 2018–2021, i praksis borte 2023–2025 — men
  boilerplaten i veiledningene åpner for retur, og sekvensen ER
  forståelsestrening for 3.3/4.1. Typer: T3, T2. Prioritet: **perfekt**
  (vedlikeholdsklasse, §7 pkt. 6).
- **Begrepskontrakt:** hele kjeden som meningsbærende ledd (ikke oppskrift):
  varians per gruppe → SD → SE per gruppe → SE for differansen SE(D) → t som
  «observert differanse målt i standardfeil-enheter» → oppgitt p tolkes mot α
  (p-tolkningens dybde kommer i 4.1); hvorfor store |t| gir små p.
- **Formler/notasjon + tolkningskrav:** SD = √s²; SE = SD/√n;
  SE(D) = Sp√(1/n₁ + 1/n₂); t = (x̄₁ − x̄₂)/SE(D). Alltid oppgitte formler og
  snille tall (varians 2,25/2,75-klassen, nyskrevne). Tolkningskrav: siste ledd i
  hver løsning er alltid en konklusjon i ord («differansen er 3,2 standardfeil —
  usannsynlig hvis H0 stemmer; oppgitt p = 0,002 < 0,05 → forkast»). `example`:
  ett fullt gjennomregnet case med margkommentar per steg (regnefag-DNAets
  «sensor-kommentarer»); `exercise` ×6–10 varianter.
- **Drøftingsakser:** hva t «ser» og ikke ser (differanse relativt til støy —
  store n kan gjøre trivielle differanser signifikante, bro til 4.1s
  signifikans ≠ viktighet).
- **Case-forslag:** To undervisningsmetoder, n = 16 per gruppe, nyskrevne snille
  tall: regn hele kjeden, tolk oppgitt p både ved α = 0,05 og 0,01.
- **Typiske feil:** #13 usynlig fremgangsmåte; #6 å bruke SD der SE(D) skal stå;
  avrundingskaskader (rund først til slutt).
- **Kvote:** 15 quiz / 12 flashcards (leddene i rekkefølge, formel↔funksjon-par).

**Prøve-kvote Del 3:** 4 prøver (se §4).

### Del 4 — Hypotesetesting og testvalg

#### Kapittel 4.1: H0, H1 og nullhypotesetestingens trinn
- **id:** `psy1010-4-1` · **number:** 4.1 · **estimatedMinutes:** 70 · **prerequisites:** `psy1010-3-3`
- **Kapitteltype:** tema (bokas viktigste enkeltkapittel sammen med 5.1/5.2).
- *Description:* Å formulere hypoteser med μ-notasjon, kjøre trinnene i
  nullhypotesetesting — og definere p-verdien riktig: den ene feilen sensor har
  eksplisitt trekk-instruks for.
- **Eksamensbelegg:** Supergjenganger: 19 sett (H2009, H2011, V2012, H2012, V2013,
  V2014, H2015, V2016, H2016, H2017, V2018, H2018, H2018u, V2019, V2021, V2022,
  V2023, V2024, V2025). Typer: T2. Prioritet: **perfekt** (§7 pkt. 2).
- **Begrepskontrakt (Bordens & Abbott):** H0 og H1 formulert med μ-notasjon for
  konkrete scenarier — hypoteser gjelder POPULASJONSGJENNOMSNITT (feil #12);
  ikke-retningsbestemt H1 → tohalet test; retningsbestemt H1 krever begrunnelse
  (V2025: eksplisitt minus uten — feil #11); trinnene: formuler hypoteser → velg
  α (konvensjon 0,05/0,01) → velg test → beregn/motta p → forkast H0 hvis p ≤ α;
  **det er H0 som testes**; **p-verdiens korrekte definisjon: sannsynligheten for
  et minst like ekstremt resultat GITT at H0 er sann** — aldri sannsynligheten
  for at H0 er sann/feil (feil #1, eksplisitt trekk-instruks i
  H2018-veiledningen); p beregnes fra utvalgsfordelingen (A-markør, kobling 3.3);
  tolkning av oppgitte p-verdier (0,017/0,048/0,072/0,295-klassen, nyskrevne):
  konklusjon ved gitt α, hva som skjer ved α-skifte 0,05 ↔ 0,01 (vippeverdiene),
  enhalet/tohalet-halveringen (p = 0,072 tohalet ↔ 0,036 enhalet —
  differensieringsledd V2024); **signifikans ≠ stor eller viktig effekt**; α som
  konvensjon, ikke naturlov (begge A-markører).
- **Formler/notasjon + tolkningskrav:** H0: μ = μ₀; H1: μ ≠ μ₀ (ev. > / < med
  begrunnelse). Ingen nye regneformler; tolkningskravet er verbalt: hver
  p-tolkning skal inneholde «gitt at H0 er sann»-leddet.
- **Drøftingsakser:** hvorfor logikken er indirekte (vi tester H0, ikke H1);
  hva «ikke signifikant» IKKE betyr (bevis for H0); konvensjonens vilkårlighet
  (0,049 vs. 0,051).
- **Case-forslag:** Normeringsscenario (mønsterklon av T2): befolkningssnitt 50 på
  en konsentrasjonstest, nytt utvalg får 52, oppgitt p tohalet — formuler
  hypoteser, gjør rede for trinnene, konkluder ved to α-nivåer, drøft hva enhalet
  test ville endret (og hva som kreves for å velge den).
- **Typiske feil:** #1 p-verdi-feilen (bokas VIKTIGSTE før/etter-drill — egen
  warning-blokk med korrekt og gal formulering side ved side); #11 retningsbestemt
  H1 uten begrunnelse; #12 hypoteser om utvalgsverdier.
- **Kvote:** 25 quiz / 22 flashcards (trinnene, p-definisjonen i varianter,
  vippe-p-er, en-/tohalet).

#### Kapittel 4.2: Type I- og Type II-feil, power og utvalgsstørrelse
- **id:** `psy1010-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `psy1010-4-1`
- **Kapitteltype:** tema.
- *Description:* De to feilbeslutningene og balansen mellom dem — med power som
  det stigende A-temaet: hvorfor større utvalg gjør det lettere å avsløre en
  falsk H0.
- **Eksamensbelegg:** Type I/II spurt i ~17 av settene (del av
  19-sett-gjengangeren); power: 4+ sett (H2015, H2017, V2022, V2024 — egen
  deloppgave V2024) + plusspoeng-moment i mange veiledninger. Typer: T2.
  Prioritet: **perfekt** (Type I/II) / kunne-stigende (power).
- **Begrepskontrakt (Bordens & Abbott):** Type I-feil = forkaste en sann H0
  (risiko = α, «falsk alarm»); Type II-feil = beholde en falsk H0 (risiko = β,
  «oversett effekt»); relasjonen: lavere α → flere Type II-feil; β påvirkes av
  effektstørrelse, n og α; **power = 1 − β**; konvensjonene 5 % Type I-risiko og
  80 % power; kjeden større n → mindre SE → lettere å forkaste falsk H0 (V2024s
  deloppgave, kobling 3.3); huskeregler mot forveksling (feil #2 — V2024:
  «ganske vanlig at studentene blander»); anvendelse på scenario: hva hver
  feiltype BETYR konkret i studien (A-krav).
- **Formler/notasjon + tolkningskrav:** beslutningsmatrisen (2×2: H0 sann/falsk ×
  forkast/behold) skal kunne tegnes og tolkes; ingen utregning av power (aldri
  krevd).
- **Drøftingsakser:** hvilken feiltype er verst? — avhenger av kontekst
  (screening vs. medikamentgodkjenning); hvorfor 80 %-konvensjonen aksepterer
  β = 0,20 > α = 0,05.
- **Case-forslag:** Ny behandling mot flyskrekk testes: formuler hva Type I og
  Type II ville bety her (ta i bruk en virkningsløs behandling vs. forkaste en
  virksom), og drøft en kollegas forslag om å doble utvalget (mønsterklon av
  V2024-leddet).
- **Typiske feil:** #2 Type I/II-forveksling (fast huskeregel-drill: «Type I =
  varsler brann uten røyk; Type II = overser brannen»— nyskrevet analogi i boka).
- **Kvote:** 20 quiz / 18 flashcards (feiltype↔symbol↔konsekvens;
  power-determinantene).

#### Kapittel 4.3: Testvalg — t-test, ANOVA og ANCOVA
- **id:** `psy1010-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `psy1010-4-1`, `psy1010-2-3`
- **Kapitteltype:** tema (A-stoff).
- *Description:* «Hvilken test, og hvorfor?» — differensieringsformelen gjennom ti
  år, fra to grupper til fem, og kovariat-grepet sensor kaller en oppgave «ment å
  skille gode kandidater».
- **Eksamensbelegg:** 12 sett (V2014, H2015, V2016, H2016, V2017, H2017, V2018,
  H2018, H2018u, V2019, V2020, V2021). ANCOVA-leddet er uttalt A/B-skille.
  Typer: T6 (+ statistikkdel av T4). Prioritet: kunne/A-stoff (§7 pkt. 7).
- **Begrepskontrakt (Bordens & Abbott):** to uavhengige grupper → uparet t-test
  (tohalet med mindre retning er begrunnet — kobling 4.1); tre eller flere
  grupper (typisk fem) → enveis mellomgruppe-ANOVA; KJERNEBEGRUNNELSEN sensor
  krever: én samlet test i stedet for mange parvise t-tester holder den samlede
  feilraten (**familywise error**) nede — antall parvise sammenligninger
  eksploderer (5 grupper → 10 par, liten talleillustrasjon, merket som
  illustrasjon); **ANCOVA**: kovariat som korrelerer med UV og AV kontrolleres
  bort (SES/kjønn-mønsteret fra settene); toveis ANOVA som akseptert alternativ
  med god begrunnelse (tilleggsvariabelen som ekstra faktor — men da kvasi-UV,
  kobling 2.3); partisjonert varians (én setning); V2024s «tenk selv»-variant:
  bedre kausal kontroll i korrelasjonsspørsmål via longitudinelle design,
  multippel regresjon med kontrollvariabler, gruppesammenligninger, RCT med etisk
  forbehold (bro til 5.4).
- **Formler/notasjon + tolkningskrav:** ingen ANOVA-regning (aldri krevd) — men
  testvalget skal alltid BEGRUNNES i prosa; familywise-illustrasjonen tolkes
  («ti tester à 5 % risiko er ikke 5 % samlet risiko»).
- **Drøftingsakser:** ANCOVA vs. toveis ANOVA for samme tilleggsvariabel (kontrollere
  bort vs. modellere); hvorfor «flere t-tester med strengere α» er nest best.
- **Case-forslag:** Fem studieteknikk-grupper sammenlignes (mønsterklon av
  T6-formelen): hvorfor ANOVA og ikke ti t-tester; deretter «forskerne vil ta
  hensyn til søvnmengde — hva bør de gjøre, og hva heter det?» (ANCOVA-leddet med
  nyskrevet kovariat).
- **Typiske feil:** #7 mange t-tester ved 3+ grupper — eller ANOVA uten å kunne
  begrunnelsen (begrunnelsen ER poenget).
- **Kvote:** 18 quiz / 15 flashcards (beslutningstre gruppe-antall→test;
  ANCOVA-vilkårene).

**Prøve-kvote Del 4:** 4 prøver (se §4).

### Del 5 — Korrelasjon og regresjon

#### Kapittel 5.1: Korrelasjon — å tolke r
- **id:** `psy1010-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `psy1010-1-2`, `psy1010-3-1`
- **Kapitteltype:** tema.
- *Description:* Hva r = −0,35 faktisk sier: samvariasjon, retning, styrke med
  forbehold — og A-markøren som skiller toppbesvarelsene: naturlig vs. påført
  variasjon.
- **Eksamensbelegg:** Den suverene gjengangeren: 20 sett (H2008, H2010, H2012,
  H2013, V2014, V2015, H2016, V2017, H2017, V2018, V2018u, H2018, H2018u, V2019,
  V2020, V2021, V2022, V2023, V2024, V2025) — egen oppgave i praktisk talt hvert
  sett siden 2013. Typer: T1. Prioritet: **perfekt** (§7 pkt. 1).
- **Begrepskontrakt (Bordens & Abbott + forelesningene ⚠ for konvensjonene):**
  samvariasjon som prinsipp; Pearsons r fra −1 til +1; retning (positiv: beveger
  seg i takt; negativ: motsatt); styrke med FORBEHOLD om at grensene (~0,3 lav,
  ~0,5 moderat) er konvensjoner (forelesningsanker ⚠); X/Y-rollene er vilkårlige
  ved korrelasjon (kobling 1.2); **naturlig variasjon vs. eksperimentets påførte
  variasjon under kontroll** (eksplisitt A-markør); nullkorrelasjon og
  kurvlineær sammenheng (én setning — dybde i 5.4); korrelasjonsdesign vs.
  eksperiment som studietyper.
- **Formler/notasjon + tolkningskrav:** r regnes ALDRI ut på eksamen — men tolkes
  alltid; tolkningsmalen (retning + styrke m/forbehold + samvariasjon ≠
  kausalitet + variasjonstypen) drilles som fast firedelt svarstruktur.
- **Drøftingsakser:** hvorfor konvensjonsgrensene er kontekstavhengige (r = 0,3
  kan være stort i psykologi); hva korrelasjonen IKKE sier (individnivå,
  kausalitet — bro til 5.2).
- **Case-forslag:** «Forskere finner r = 0,25 mellom podkast-lytting og
  eksamenskarakterer» — full firedelt tolkning slik en A-besvarelse gjør det
  (mønsterklon av T1a med nytt scenario og ny r).
- **Typiske feil:** #3 kausal tolkning av korrelasjon (hoppe fra r til «X fører
  til Y»); å tolke r = −0,35 som «svak» uten konvensjonsforbeholdet — eller som
  35 %.
- **Kvote:** 20 quiz / 18 flashcards (tolkningsmalen, retning/styrke-diagnoser,
  variasjonstypene).

#### Kapittel 5.2: Tredjevariabler, kausalmodeller og spuriøse sammenhenger
- **id:** `psy1010-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `psy1010-5-1`
- **Kapitteltype:** tema.
- *Description:* De tre kanoniske grunnene til at korrelasjon ikke er kausalitet —
  og kausalmodell-vokabularet (konfunder, mediator, moderator) som er eksplisitt
  A-markør.
- **Eksamensbelegg:** Kjernedeloppgavene i T1 gjennom hele 20-sett-serien;
  «spuriøs sammenheng + tre hverdagseksempler» fast fra 2020 (V2020–V2025);
  kausalmodell-leddet i V2019, V2022, V2023, V2024, V2025 m.fl. Typer: T1.
  Prioritet: **perfekt** (§7 pkt. 1).
- **Begrepskontrakt (Bordens & Abbott + forelesningenes kausalmodell-figurer ⚠):**
  de tre kanoniske grunnene: (i) retningsproblemet (kausaliteten kan gå motsatt
  vei), (ii) tredjevariabler (z), (iii) spuriøse sammenhenger; kausalmodellene
  TEGNES: bakenforliggende/konfunderende variabel (z → både X og Y), mediator
  (X → z → Y), moderator (z endrer styrken på X–Y); rivaliserende hypoteser og
  hvorfor de ikke kan utelukkes i naturlige settinger (kobling 5.1s
  variasjonstyper); spuriøs sammenheng definert + TRE nyskrevne hverdagseksempler
  (sjangerkrav fra 2020: boka lager egne — f.eks. paraplysalg og
  forsinkelser i kollektivtrafikken (z = regnvær); antall livredningsvakter og
  drukningsulykker (z = badesesong); ett rent tilfeldighetseksempel fra store
  datamengder); case-tilpasning som A-krav (modellene anvendt på scenarioets
  variabler, ikke bare definert).
- **Formler/notasjon + tolkningskrav:** modellfigurene (pil-diagrammer) er
  «formlene» her — alle tre skal kunne tegnes og leses; beskrivelse av figur
  regnes som del av løsningen (sensor forventer figur der figur er naturlig).
- **Drøftingsakser:** konfunder vs. mediator — samme z, helt ulik konklusjon
  (kontrollere bort vs. forklare mekanismen); moderator som «for hvem
  gjelder det»-spørsmål; kan retningsproblemet løses uten eksperiment?
  (longitudinelle data — bro til 5.4).
- **Case-forslag:** «Ungdommer med strengere skjermregler har bedre karakterer» —
  tegn og case-tilpass alle tre modellene (foreldreoppfølging som konfunder,
  søvn som mediator, alder som moderator), pek på rivaliserende hypoteser.
- **Typiske feil:** #3 (hovedhjem — kausalspranget); å blande mediator og
  konfunder (nabobegrep-forveksling — quizbanken driller skillet).
- **Kvote:** 20 quiz / 18 flashcards (modell↔figur↔eksempel-tripler; de tre
  grunnene).

#### Kapittel 5.3: Regresjon — prediksjon, minste kvadrater og r²
- **id:** `psy1010-5-3` · **number:** 5.3 · **estimatedMinutes:** 60 · **prerequisites:** `psy1010-5-1`
- **Kapitteltype:** tema/regnekapittel (hybrid).
- *Description:* «Regresjon som videreføring av korrelasjon» — resonnementet som
  har stått i minst ti sett — pluss Ŷ = a + bX ledd for ledd, prediksjon med
  tall og delt varians.
- **Eksamensbelegg:** Regresjon: 14 sett (H2008, H2010, H2012, H2014, V2015,
  H2016, H2017, V2018, H2018, V2019, V2020, V2022, V2023, V2025) — nesten alltid
  som siste ledd i korrelasjonsoppgaven; «videreføring av korrelasjon» i minst
  ti sett; r²: 11 sett (fast d-ledd t.o.m. 2020). Typer: T1 (+T3 for regningen).
  Prioritet: **perfekt** (§7 pkt. 1).
- **Begrepskontrakt (Bordens & Abbott):** DET FERDIG INNØVDE RESONNEMENTET:
  korrelasjon måler bare styrke/retning; regresjon gir en ligning som PREDIKERER
  Y fra X — fortsatt uten kausalitet; Ŷ = a + bX ledd for ledd (Ŷ predikert
  verdi, a intercept, b regresjonsvekt = endring i Ŷ per enhet X);
  prediktorvariabel og kriterievariabel; minste kvadraters metode (konseptuelt:
  linjen som minimerer summen av kvadrerte residualer); residual = Y − Ŷ;
  skissering av regresjonslinje i spredningsdiagram; **r² som delt/forklart
  varians** (r = 0,30 → 9 %) og tolkningspoenget: r kan bare rangeres
  (r = 0,4 er ikke «dobbelt så sterkt» som 0,2), r² gir andeler som kan
  sammenlignes — målenivåskiftet fra analysens faste d-ledd.
- **Formler/notasjon + tolkningskrav (hybrid):** Ŷ = a + bX med oppgitte a, b, x
  (regne Ŷ); r² fra r; alle utregninger tolkes («modellen forklarer 9 % av
  variasjonen i karakterer — 91 % skyldes annet»). `example` ×2–3 (stige):
  tolk b i ord → prediker Ŷ for gitt x → regn r² og tolk; `exercise`-serie med
  solution + hints.
- **Drøftingsakser:** prediksjon uten kausalitet (forsikringslogikk); residualene
  som modellens ærlighet; ekstrapoleringsfaren (prediksjon utenfor observert
  X-område).
- **Case-forslag:** Studietimer → eksamensskåre med oppgitt a = 20, b = 2,5
  (nyskrevne tall): tolk a og b i ord, prediker for x = 12, regn r² fra r = 0,40
  og forklar hvorfor «videreføring av korrelasjon» er en presis beskrivelse.
- **Typiske feil:** #3 (prediksjon lest som årsak); #13 (Ŷ-regning uten synlige
  ledd); å tolke a som «effekten av X».
- **Kvote:** 20 quiz / 18 flashcards (leddene i ligningen, resonnementet,
  r→r²-par).

#### Kapittel 5.4: Randsonen — andre koeffisienter og kausal kontroll i korrelasjonsdata
- **id:** `psy1010-5-4` · **number:** 5.4 · **estimatedMinutes:** 40 · **prerequisites:** `psy1010-5-2`, `psy1010-5-3`
- **Kapitteltype:** tema (kompakt «bør kjenne til»-dekning + stigende
  V2024-stoff).
- *Description:* Korrelasjonsfamiliens spesialverktøy — Spearman, punkt-biserial,
  phi, kurvlineære sammenhenger — og stigen mot bedre kausal kontroll uten
  eksperiment.
- **Eksamensbelegg:** Andre koeffisienter: 5 sett (H2012, H2013, V2017, V2022,
  V2018u); kurvlineær korrelasjon i samme klynge; multippel
  regresjon/kontrollvariabler: V2024s «tenk selv»-ledd (nyere). Typer: T1
  (d-ledd), T6. Prioritet: kjenne (koeffisientene, §7 pkt. 16) / kunne
  (kausal kontroll — stigende).
- **Begrepskontrakt (Bordens & Abbott, korrelasjonskoeffisientene):** Spearmans
  rho (ordinaldata/rangeringer); punkt-biserial (én dikotom × én kontinuerlig);
  phi (to dikotome); valget styres av målenivå (kobling 1.2); kurvlineær
  sammenheng — r ≈ 0 kan skjule en sterk ikke-lineær sammenheng (nyskrevet
  eksempel: prestasjon ved økende aktivering — først opp, så ned); stigen mot
  kausal kontroll i ikke-eksperimentelle data (V2024): longitudinelle design
  (tidsrekkefølge), multippel regresjon med kontrollvariabler (statistisk
  kontroll av z), gruppesammenligninger, til slutt RCT med etisk forbehold —
  kobling 4.3 og 2.1.
- **Formler/notasjon + tolkningskrav:** ingen utregning av koeffisientene (aldri
  krevd) — kun valg + begrunnelse; koeffisientvalg-tabellen (målenivå-par →
  koeffisient) er kapitlets «formelliste».
- **Drøftingsakser:** statistisk kontroll vs. eksperimentell kontroll — hva
  multippel regresjon kan og ikke kan utelukke (bare målte tredjevariabler).
- **Case-forslag:** Fire småscenarier der riktig koeffisient skal velges og
  begrunnes (rangert trivsel × rangert innsats → rho; kjønn × testskåre →
  punkt-biserial; osv.), + ett V2024-aktig «hvordan komme nærmere kausalitet
  uten eksperiment?»-scenario.
- **Typiske feil:** å bruke Pearson på rangdata uten forbehold; å tro r ≈ 0
  betyr «ingen sammenheng» (kurvlineær-fellen).
- **Kvote:** 15 quiz / 16 flashcards (koeffisient↔datatyper; kontrollstigen).

**Prøve-kvote Del 5:** 4 prøver (se §4).

### Del 6 — Kvalitativ metode

#### Kapittel 6.1: Kvalitativ og kvantitativ metode — kvalitative forskningsspørsmål
- **id:** `psy1010-6-1` · **number:** 6.1 · **estimatedMinutes:** 40 · **prerequisites:** `psy1010-1-1`
- **Kapitteltype:** tema (pugglistekapittel — bevisst kompakt og formelaktig).
- *Description:* Kjennetegnene ved kvalitative forskningsspørsmål og ferdigheten
  eksamen faktisk tester: å formulere ett på sparket — de billigste poengene på
  eksamen for den forberedte.
- **Eksamensbelegg:** Kvalitativ metode: 6 sett (H2013, V2016, V2018u, V2023,
  V2024, V2025) — **fast egen oppgave hvert år fra 2023**, med nesten ordrett
  gjentatte spørsmål og eksplisitt lave karakterkrav («har kandidaten sagt X, er
  oppgaven godt besvart» — to–tre kjernepoenger definerer toppsvar). Typer: T7.
  Prioritet: **perfekt** (§7 pkt. 3 — «bortimot gratis 1/3 av eksamen»).
- **Begrepskontrakt (Johannessen m.fl. ⚠ — kapitlene «Hverdagskunnskap og
  forskning» (2019) og «Teori og analyse» (2018); kapittel-/utgavekoblingen er
  pensumsensitiv):** kvalitativ vs. kvantitativ tilnærming (dybde/mening vs.
  utbredelse/tall); kjennetegn ved kvalitative forskningsspørsmål — ÅPNE
  spørreord (hvordan/hva/hvilke), IKKE hypoteser, IKKE ja/nei; inviterer
  detaljerte, utfyllende beskrivelser; utforskning fremfor årsak–virkning;
  ferdighetstrening: formulere eget kvalitativt forskningsspørsmål (eneste krav:
  spørreord + ikke hypotese/ja-nei — og eneste stryk-felle: hypoteseform);
  eksempeldomenene i forelesningene ⚠ kretser om utsatte gruppers hverdagsliv —
  boka lager egne domener (f.eks. førsteårsstudenters overgang til
  universitetet, ungdoms opplevelse av deltidsarbeid); spørreskjema
  kvantifiserer utbredelse vs. intervju/dagbok gir mening (Johannessens
  kontrast, nyskrevet eksempel).
- **Drøftingsakser:** (bevisst få — sjangeren belønner presis gjengivelse):
  når kvalitativ tilnærming er riktig verktøy (eksplorerende felt, mening,
  prosess) vs. når kvantitativ trengs (utbredelse, sammenligning, testing).
- **Case-forslag:** Omformuleringsverksted: «Reduserer skjermbruk
  søvnkvaliteten?» (kvantitativt/hypoteseformet) skrives om til kvalitativt
  («Hvordan opplever ungdommer at kveldsskjermbruk påvirker leggerutinene
  deres?») — med feilvarianter som diagnostiseres.
- **Typiske feil:** #10 hypoteseformede «kvalitative forskningsspørsmål» (ja/nei
  eller hypotese der det bes om åpne spørreords-spørsmål — kvalitativ-oppgavens
  eneste stryk-felle, eksplisitt i veiledningen).
- **Kvote:** 15 quiz / 15 flashcards (kjennetegnslisten, godkjent/underkjent
  spørsmålsformuleringer).

#### Kapittel 6.2: Det kvalitative forskningsintervjuet
- **id:** `psy1010-6-2` · **number:** 6.2 · **estimatedMinutes:** 45 · **prerequisites:** `psy1010-6-1`
- **Kapitteltype:** tema (pugglistekapittel).
- *Description:* Kvale & Brinkmanns intervjubegrep — livsverden, mening, det
  åpne formatet — og den faste kontrasten mot spørreskjemaet.
- **Eksamensbelegg:** V2023, V2024, V2025 (nesten ordrett gjentatt spørsmål) +
  V2016 (intervjuundersøkelse). Typer: T7. Prioritet: **perfekt** (§7 pkt. 3).
- **Begrepskontrakt (Kvale & Brinkmann, *Det kvalitative forskningsintervju*,
  kap. 1 — eneste kapittel på pensum):** intervjuet som SAMTALE med struktur og
  formål; henter beskrivelser av intervjupersonens **livsverden** for å FORTOLKE
  MENINGEN i fenomenene som beskrives; subjektivitet og erfaring som data;
  språket som nøkkel; åpne spørsmål uten forhåndsdefinerte kategorier → forskeren
  kan lære noe hun ikke kunne forutse; kontrasten til spørreskjema: lukkede
  alternativer kvantifiserer utbredelse, intervjuet gir dybde og mening;
  pluss-stoff (ikke krav): forskningsintervjuet vs. journalistisk intervju og
  forhør (formål, maktforhold, dokumentasjonskrav); eksplisitt IKKE forventet:
  faghistorien i kapitlet.
- **Drøftingsakser:** hva intervjuet kan gi som spørreskjemaet aldri kan (det
  uforutsette) — og omvendt (sammenlignbarhet, utbredelse); strukturgraden som
  valg.
- **Case-forslag:** Samme forskningsinteresse («hvordan opplever nyutdannede
  sykepleiere nattevakter?») planlagt som intervju og som spørreskjema — vis
  punkt for punkt hva hver metode fanger; brukes som ferdig
  «intervju vs. spørreskjema»-svarmal.
- **Typiske feil:** å beskrive intervjuet som «ustrukturert prat» (det HAR
  struktur og formål); å svare med faghistorie (gir null — relevansfilteret);
  #10-naboen: lukkede intervjuspørsmål i eksempelguider.
- **Kvote:** 15 quiz / 15 flashcards (kjernekjennetegnene, livsverden-definisjonen,
  kontrastpar intervju/spørreskjema).

**Prøve-kvote Del 6:** 4 prøver (se §4).

### Del 7 — Etikk, åpen vitenskap og kunnskapsoppsummering

#### Kapittel 7.1: Forskningsetikk
- **id:** `psy1010-7-1` · **number:** 7.1 · **estimatedMinutes:** 40 · **prerequisites:** `psy1010-1-4`
- **Kapitteltype:** tema.
- *Description:* Deltakerens rettigheter og forskerens plikter — med fagbegreper,
  ikke moralprat.
- **Eksamensbelegg:** 5 sett (H2009, H2010, V2013, H2014, V2025) — frittstående
  2009–2014, borte 2015–2024, tilbake som deloppgave i V2025. Typer: T8
  (+ etikk-komponent i designoppgaver). Prioritet: kunne (deloppgavenivå,
  §7 pkt. 15).
- **Begrepskontrakt (Bordens & Abbott):** deltakerrettighetene som begrepssett:
  rett til informasjon, **informert samtykke**, personvern/konfidensialitet,
  rett til å trekke seg når som helst uten begrunnelse; **deception** bare når
  nødvendig for studien, alltid med **debriefing**; frivillighet i rekruttering
  (kobling 1.4 — press og avhengighetsforhold); dyreforskningsetikk (H2009 —
  kort: begrunnelseskrav, velferd, reduksjon); etikk som designpremiss
  (venteliste-kontroll fra 2.1 som eksempel).
- **Drøftingsakser:** deception vs. informert samtykke (når kunnskap om formålet
  ødelegger studien — demand characteristics fra 2.1 som metodisk begrunnelse);
  vitenskapelig gevinst vs. deltakerbelastning.
- **Case-forslag:** En studie av hjelpeatferd krever at deltakerne ikke kjenner
  formålet: design deception-bruken etisk (minimering, debriefing-innhold,
  trekk-rett) — med fagbegrepene som bæreverk.
- **Typiske feil:** #16 etikk som moralprat — generelle betraktninger uten
  fagbegrepene (informert samtykke, personvern, trekk-rett, debriefing) gir
  ikke uttelling; sensor vil ha fagforankring.
- **Kvote:** 15 quiz / 15 flashcards (rettighetene, deception-vilkårene,
  begrep↔innhold-par).

#### Kapittel 7.2: Åpen vitenskap, kunnskapsoppsummering og restbegrepsbanken
- **id:** `psy1010-7-2` · **number:** 7.2 · **estimatedMinutes:** 50 · **prerequisites:** `psy1010-4-1`, `psy1010-7-1`
- **Kapitteltype:** tema (stigende stoff + oppsamlingskapittel for
  flervalgsberedskap).
- *Description:* HARKing, pre-registrering og p-hacking — det nye programfestede
  stoffet — pluss review vs. meta-analyse og restbegrepene som er billige å ha
  dekket.
- **Eksamensbelegg:** Åpen vitenskap: V2025 (helt ny og programfestet — hva som
  er galt med å endre hypotesen etter analysen, og hvordan pre-registrering
  forebygger det); review vs. meta-analyse: 3 sett (V2012, V2016, V2025 —
  tilbake); fagfellevurdering: H2010-klyngen; kappa: V2012;
  spørreskjema/Likert: 3 sett (V2010, V2013, V2015); sensitivitet/takeffekt:
  V2011; KI/Bayes: nevnt i pensum, aldri krevd. Typer: T2 (HARKing-halen), T8.
  Prioritet: kunne (åpen vitenskap — stigende, §7 pkt. 12) / kjenne (resten,
  §7 pkt. 14–18).
- **Begrepskontrakt:** **HARKing** (Hypothesizing After Results are Known) — 
  hvorfor det er galt: hypotesen tilpasses data i etterkant, og
  testlogikken fra 4.1 forutsetter at hypotesen kom FØR dataene (kobling til
  «gitt H0»-premisset); V2025-trekk: å antyde at etterkant-endring er greit
  uten åpenhet gir minus; **pre-registrering** som botemiddel + åpenhet om
  eksplorative vs. konfirmerende analyser; **p-hacking**;
  **publikasjonsskjevhet**; **review vs. meta-analyse** (begge oppsummerer et
  felt; review tolker kvalitativt, meta-analyse kombinerer statistisk;
  systematikk i søk/seleksjon; problemene: kvalitetsvurdering, epler-og-pærer,
  manglende rapportering, seleksjons-/forskerbias, overvekting av svake studier;
  de gir ofte samme svar); fagfellevurdering; restbank (kjenne-nivå, primært
  quiz/flashcards): Likert-skala med ankerpunkter og leddformulering
  (spørreskjemakonstruksjon kort); prosent enighet + Cohens kappa med oppgitt
  formel K = (Po − Pc)/(1 − Pc) og ett gjennomregnet minieksempel (kobling 1.3);
  AV-kvalitet: sensitivitet, takeffekt/gulveffekt (range effects);
  konfidensintervall (én presis setning + ±1,96 SE-koblingen fra 3.3);
  Bayesiansk tilnærming (én setning — finnes, kontrasterer p-logikken).
- **Formler/notasjon + tolkningskrav:** kappa-formelen oppgis alltid;
  minieksemplet tolkes («enighet utover tilfeldighet»); ellers verbalt stoff.
- **Drøftingsakser:** hvorfor publisert litteratur kan gi et skjevt bilde
  (p-hacking + publikasjonsskjevhet sammen); pre-registrering vs. forskningens
  fleksibilitet (eksplorative analyser er lov — med åpenhet).
- **Case-forslag:** En forsker finner uventet at effekten bare gjelder én
  undergruppe og vurderer å «oppdatere» hypotesen før innsending — diagnostiser
  (HARKing), vis riktig håndtering (rapporter som eksplorativt funn,
  pre-registrer replikasjon) — V2025-mønsteret med nytt scenario.
- **Typiske feil:** V2025-trekket (etterkant-endring uten åpenhet framstilt som
  akseptabelt); å blande review og meta-analyse (nabobegrep-par for quiz);
  #16-naboen: åpen vitenskap som honnørord uten mekanismene.
- **Kvote:** 20 quiz / 28 flashcards (restbanken er flashcard-råstoff — boka skal
  her tømme analysens §6-begrepsbank slik at ALLE historiske begreper er dekket
  et sted i boka).
- **Kalibreringsnote for forfatteren:** dette kapitlet skal eksplisitt dekke
  begrepene fra analysens «bør kjenne til»-liste (§7 pkt. 14–18) som ikke har
  eget hjem: Solomon-designet står i 2.1, kohort-sekvensielle design nevnes i
  5.4s longitudinelle stige (én setning), kurvlineær/Spearman/punkt-biserial/phi
  i 5.4 — resten (kappa, spørreskjema, fagfellevurdering, sensitivitet/takeffekt,
  KI, Bayes) her.

**Prøve-kvote Del 7:** 4 prøver (se §4).

### Del 8 — Eksamenstrening

> Sjangerkapitlene følger drøftings-DNAets sjangerkapittel-mal (tip Eksamensvinkel
> → text Oppskrift med tidsbudsjett → example gjennomskrevet besvarelse med
> margkommentarer → exercise ×3–6 nyskrevne oppgaver med momentliste-løsninger).
> 8.3 bruker regnefag-DNAets drillkapittel-mal (hybrid-lån). Modellbesvarelsene
> (8.7–8.9) bruker «C-kjerne + A-plusspoeng-lag»-formatet (se §2b).
> ALT oppgavemateriale er nyskrevet, men skal klone de reelle mønstrene tett —
> gjenbruk er dokumentert norm i emnet, så mønstertro trening er presis trening.

#### Kapittel 8.1: Sjanger — korrelasjonsoppgaven
- **id:** `psy1010-8-1` · **number:** 8.1 · **estimatedMinutes:** 50 · **prerequisites:** `psy1010-5-3`
- **Kapitteltype:** sjanger (T1).
- *Description:* Den sikreste gjengangeren løst som fast femtrinnsforløp: tolk r →
  hvorfor ikke kausal → kausalmodeller → spuriøse eksempler → regresjon som
  videreføring.
- **Eksamensbelegg:** T1 i 20 sett; standardforløpet over deloppgavene a–e er
  stabilt (analysen §3 Type 1). Prioritet: perfekt.
- **Innhold:** Oppskrift med tidsbudsjett (~55 min): (a) firedelt r-tolkning fra
  5.1 (5–8 min), (b) de tre kanoniske grunnene (10 min), (c) tegn og
  case-tilpass kausalmodellene (15 min — figurene gir uttelling), (d) spuriøs +
  tre hverdagseksempler (8 min — ha tre innøvde klare), (e)
  videreførings-resonnementet + ev. Ŷ/r²-ledd (12 min). Gjennomskrevet eksempel
  med margkommentarer på nyskrevet case (anbefalt: treningsapp-bruk og
  ryggsmerter, r = −0,30). 4–5 nyskrevne oppgaver i sjangeren med
  momentliste-løsninger — én med regresjonsregning (Ŷ), én uten tall
  (2023–2025-profil).
- **Typiske feil:** #3 (kausalspranget); å definere modellene uten å
  case-tilpasse dem (C-taket).
- **Kvote:** 12 quiz / 8 flashcards.

#### Kapittel 8.2: Sjanger — hypotesetestingsoppgaven
- **id:** `psy1010-8-2` · **number:** 8.2 · **estimatedMinutes:** 50 · **prerequisites:** `psy1010-4-2`, `psy1010-7-2`
- **Kapitteltype:** sjanger (T2).
- *Description:* Nest sikreste gjenganger som fast forløp: H0/H1 → trinnene →
  tolk oppgitt p (med α-skifte og halering) → Type I/II på caset → power → ev.
  HARKing-hale.
- **Eksamensbelegg:** T2 i 19 sett; forløpet 1–6 i analysen §3 Type 2;
  HARKing-halen ny fra V2025. Prioritet: perfekt.
- **Innhold:** Oppskrift med tidsbudsjett (~55 min): (a) H0/H1 med μ og
  populasjonspresisering (8 min), (b) trinnene med «det er H0 som testes» og
  korrekt p-definisjon (12 min — p-definisjonen ORDRETT riktig, det er
  trekk-feilen), (c) konklusjon ved gitt α + α-skifte + enhalet/tohalet-drøfting
  (12 min), (d) Type I/II anvendt på caset + relasjonen (12 min), (e) power/n
  (6 min), (f) ev. HARKing (5 min). Gjennomskrevet eksempel på nyskrevet
  scenario (normert leseflyt-test, p = 0,041 tohalet). 4–5 nyskrevne oppgaver med
  momentlister — varier p-verdiene så både forkastning, beholdning og
  vippe-tilfeller (α-skifte, halvering) trenes.
- **Typiske feil:** #1 (p-definisjonen — sjekkpunkt i HVER momentliste), #2,
  #11, #12.
- **Kvote:** 12 quiz / 8 flashcards.

#### Kapittel 8.3: Sjanger — regne- og tolkningsoppgaven (drill)
- **id:** `psy1010-8-3` · **number:** 8.3 · **estimatedMinutes:** 55 · **prerequisites:** `psy1010-3-4`, `psy1010-5-3`
- **Kapitteltype:** drillkapittel (regnefag-DNA — hybrid-lånet i renest form).
- *Description:* Alle regnevariantene fra 2011–2021 drillet med
  løsningsoppskrift, gjennomregnet eksamenscase og varianter på eksamensnivå.
- **Eksamensbelegg:** T3-katalogen (analysen §3 Type 3): tallrekke →
  sentraltendens/varians/SD; figuravlesning; SE; full t-sekvens; Ŷ og r²;
  normalfordeling/z. Formler alltid oppgitt, tall alltid snille. Nedtonet
  2023–2025 — treningsverdien består (tolkningsforståelse). Prioritet: perfekt
  (vedlikehold).
- **Innhold:** Løsningsoppskrift (algoritmisk, regnefag-stil): (1) identifiser
  hva som spørres og hvilken oppgitt formel som hører til, (2) sett opp alle
  ledd synlig, (3) regn med kontroll (rimelighetssjekk mot data), (4) TOLK
  resultatet i prosa (obligatorisk siste steg — det er tolkningen sensor
  vekter). Gjennomregnet eksamenscase med sensor-margnotater (hva som gir
  uttelling ved hvert steg; hvor «vis utregningen»-regelen slår inn).
  `exercise` ×8–12 varianter på eksamensnivå som dekker HELE katalogen:
  2 tallrekker (sprikende sentralmål + n − 1-forklaring), 1 boksplott- og
  1 histogram-avlesning, 2 SE-oppgaver (inkl. SD-vs-SE-forklaring), 2 fulle
  t-sekvenser, 1 z-skåre, 1 Ŷ-prediksjon, 1 r²-tolkning — alle med nyskrevne
  snille tall i veiledningstall-klassen og full solution + hints.
- **Typiske feil:** #13 (hovedhjem — usynlig fremgangsmåte), #6, avrundingskaos.
- **Kvote:** 12 quiz / 6 flashcards.

#### Kapittel 8.4: Sjanger — design-, testvalgs- og måleoppgaven
- **id:** `psy1010-8-4` · **number:** 8.4 · **estimatedMinutes:** 55 · **prerequisites:** `psy1010-2-4`, `psy1010-4-3`, `psy1010-1-4`
- **Kapitteltype:** sjanger (T4 + T5 + T6 — sammenslått, se §2b).
- *Description:* Diagnose-sjangrene: klassifiser et beskrevet opplegg, velg design
  selv, velg riktig test, og plukk måle-/utvalgsscenariet fra hverandre.
- **Eksamensbelegg:** T4 (begge undervarianter — «klassifiser og forbedre» og
  «velg design selv»), T5 (UV/AV → målenivå → reliabilitet/validitet → utvalg som
  fast kjede), T6 (testvalgsformelen gjennom ti år + ANCOVA-A-skillet).
  Prioritet: perfekt (T4/T5-kjernen) / A-stoff (T6-ANCOVA).
- **Innhold:** Tre oppskrifter: (1) **Klassifiser-og-forbedre:** identifiser
  designet → BEGRUNN med kjennetegnene (manipulasjon? randomisering? pretest?) →
  trusler (seleksjon, blinding, frafall, reaktivitet) → konkrete forbedringer;
  (2) **Velg-design-selv:** la forskningsspørsmålet styre (kausalspørsmål → RCT;
  to faktorer → 2×2; få deltakere → N=1/ABAB) — sensor premierer selvstendig
  resonnement; (3) **Test- og målediagnosen:** gruppetelling → test (med
  familywise-begrunnelsen), kovariat-signal → ANCOVA; UV/AV → målenivå →
  reliabilitets-/validitetsvalg → utvalgsdiagnose. Gjennomskrevet eksempel med
  margkommentarer (nyskrevet: kommunalt leseprogram over fire skoler uten
  randomisering — klassifiser, forbedre, velg analyse). `exercise` ×5–6 nyskrevne
  på tvers av de tre oppskriftene, med momentlister.
- **Typiske feil:** #4 (kasus/N=1 i velg-selv-svar), #5, #7, #8 (remser uten
  begrunnelse — sjangerens C-tak), #9.
- **Kvote:** 12 quiz / 8 flashcards.

#### Kapittel 8.5: Sjanger — kvalitativ- og prosessoppgaven
- **id:** `psy1010-8-5` · **number:** 8.5 · **estimatedMinutes:** 45 · **prerequisites:** `psy1010-6-2`, `psy1010-1-1`, `psy1010-7-2`
- **Kapitteltype:** sjanger (T7 + T8 — sammenslått, se §2b).
- *Description:* De to «redegjør»-sjangrene: kvalitativ-oppgavens tre faste
  spørsmål (gratispoengene) og bredde-/prosessoppgaven med etikk- og review-haler.
- **Eksamensbelegg:** T7: fast fra V2023, tre nesten ordrett gjentatte spørsmål,
  eksplisitt snille karakterkrav. T8: prosess (H2011, H2015, V2024, V2025),
  review/meta (V2012, V2016, V2025), etikk-deloppgave (V2025).
  Prioritet: perfekt (T7) / kunne (T8).
- **Innhold:** Kvalitativ-oppskriften: de tre faste spørsmålene besvart med
  pugglistene fra 6.1/6.2 i besvarelsesform — to–tre kjernepoenger per spørsmål
  er toppsvar-nivå; eget spørsmål formulert etter sjekkregelen
  (spørreord + ikke hypotese); tidsgevinsten: denne oppgaven skal ta ~40 min og
  frigjøre tid til A-skillene i de andre. Prosess-oppskriften: trinnene med
  funksjonsforklaring per trinn + de tre A-markørene (teori/lov/modell,
  grunn/anvendt, syklisk + spørsmålet-styrer-designet). Review/meta- og
  etikk-deloppgaver som korte, fagbegrepstette svar. Gjennomskrevet eksempel:
  én full kvalitativ-oppgave + én prosessoppgave, begge nyskrevne, med
  margkommentarer. `exercise` ×4 med momentlister.
- **Typiske feil:** #10 (T7s eneste felle), #8 (trinn-remse i prosessvar),
  #16 (etikkhalen), #15 (overforklare T7 — den er billig, ikke gratis-å-utbrodere).
- **Kvote:** 12 quiz / 8 flashcards.

#### Kapittel 8.6: Feilvaksinen — de 16 feilene som senker karakteren
- **id:** `psy1010-8-6` · **number:** 8.6 · **estimatedMinutes:** 60 · **prerequisites:** Del 0–7 (alle temadeler)
- **Kapitteltype:** tverrgående drillkapittel (utvidelse av DNA-malen, anbefalt i
  analysen §7 «Feilvaksine-seksjon»).
- *Description:* Alle 16 sensordokumenterte feil drillet med
  før/etter-omskrivinger — særlig p-verdi-definisjonen, Type I/II, kasus-vs-N=1 og
  testvaliditet-vs-slutningsvaliditet.
- **Eksamensbelegg:** Analysen §5 komplett; #1 har eksplisitt trekk-instruks
  (H2018-veiledningen), #2 er «ganske vanlig» ifølge V2024, #4 er advart mot to
  ganger, #5 påpekes hvert år det spørres. Prioritet: perfekt
  (feilunngåelse er karakterforsikring).
- **Innhold:** Én seksjon per feil: (a) feilen slik sensor ser den, (b) nyskrevet
  «slik ser den ut i en besvarelse»-utdrag, (c) A-omskriving av samme passasje,
  (d) varsellampe-heuristikk. Feilenes hjemkapitler: #1→4.1/8.2, #2→4.2,
  #3→5.1/5.2, #4→2.4, #5→1.3/2.1, #6→3.3/3.4, #7→4.3, #8→0.2/1.4/8.4, #9→1.4,
  #10→6.1/8.5, #11→4.1, #12→4.1/3.3, #13→3.1/3.4/8.3, #14→0.1, #15→0.2/8.5,
  #16→7.1. Dette kapitlet samler dem og driller gjenkjenning («hvilken feil begår
  denne kandidaten?»-oppgaver — utmerket flervalgsformat). De fire farligste
  (#1, #2, #4, #5) får dobbel dose med før/etter-formuleringspar til pugging.
- **Kvote:** 20 quiz / 10 flashcards (feil↔riktig-omskrivingspar).

#### Kapittel 8.7: Modellbesvarelse — korrelasjonsoppgaven
- **id:** `psy1010-8-7` · **number:** 8.7 · **estimatedMinutes:** 45 · **prerequisites:** `psy1010-8-1`
- **Kapitteltype:** modellbesvarelse.
- **Oppgavesjanger:** T1 (gjeldende 2023–2025-profil: tolkning uten egen
  utregning, med regresjons-videreføringsledd).
- **Tema/oppgave (nyskrevet):** «Forskere finner en sammenheng mellom hvor mye
  ungdomsskoleelever gamer på hverdager og skoleprestasjoner, r = −0,28.
  (a) Hva betyr dette? (b) Hvorfor kan vi ikke konkludere med at gaming svekker
  prestasjonene? (c) Vis med kausalmodeller hvordan en tredjevariabel kan
  forklare sammenhengen. (d) Forklar hvorfor regresjonsanalyse kan ses som en
  videreføring av korrelasjon.»
- **Karakternivåer (C-kjerne + A-lag, se §2b):** Full besvarelse der C-kjernen
  (retning, styrke, de tre grunnene, én modell, videreføringssetningen) står i
  brødtekst og A-laget er margmarkert («her: naturlig vs. påført variasjon —
  plusspoeng», «her: alle tre modellene TEGNET og case-tilpasset», «her:
  konvensjonsforbeholdet»). Kort kommentert C-variant viser gapet (definisjoner
  uten case-tilpasning). Avsluttes med `tip` **Sensorblikket**: momentliste +
  vektingen (alle deloppgaver i én oppgave teller samlet; c-leddet er
  A-skilleren).
- **Typiske feil demonstrert i C-varianten:** #3 (nesten-glipp), #8.
- **Kvote:** 5 quiz / 4 flashcards.

#### Kapittel 8.8: Modellbesvarelse — hypotesetestingsoppgaven
- **id:** `psy1010-8-8` · **number:** 8.8 · **estimatedMinutes:** 45 · **prerequisites:** `psy1010-8-2`
- **Kapitteltype:** modellbesvarelse.
- **Oppgavesjanger:** T2 (2023–2025-profil med oppgitt p, α-skifte, Type I/II,
  power-ledd og HARKing-hale).
- **Tema/oppgave (nyskrevet):** «En hukommelsestest ble normert i 2010 med
  befolkningssnitt 40. Forskere tester 81 tilfeldig valgte voksne i dag; snittet
  er 42, p = 0,046 (tohalet). (a) Formuler H0 og H1. (b) Gjør rede for trinnene i
  nullhypotesetesting. (c) Hva konkluderer du med ved α = 0,05? Ved α = 0,01?
  (d) Forklar hva Type I- og Type II-feil ville bety her. (e) En kollega vil
  halvere utvalget for å spare tid — hva gjør det med testens styrke? (f) En
  annen kollega foreslår å endre hypotesen i etterkant slik at den passer
  funnene — hva er galt med det, og hva forebygger det?»
- **Karakternivåer:** C-kjerne (korrekte hypoteser med μ, trinnene, riktig
  konklusjon ved begge α) i brødtekst; A-lag margmarkert («her: p-definisjonen
  med gitt-H0-leddet — ordrett presisjon», «her: utvalgsfordelingen nevnt
  uoppfordret», «her: n → SE → power-kjeden», «her: pre-registrering +
  eksplorativ åpenhet»). Kommentert C-variant med den vanligste glippen (#1
  formulert galt) og notat om at akkurat dén koster. `tip` Sensorblikket:
  momentliste + hvilke ledd som er bevisste A-skiller (c-skiftet, f-leddet).
- **Typiske feil demonstrert:** #1 (i C-varianten, med korreksjon), #2, #11.
- **Kvote:** 5 quiz / 4 flashcards.

#### Kapittel 8.9: Modellbesvarelse — kvalitativ-oppgaven
- **id:** `psy1010-8-9` · **number:** 8.9 · **estimatedMinutes:** 35 · **prerequisites:** `psy1010-8-5`
- **Kapitteltype:** modellbesvarelse.
- **Oppgavesjanger:** T7 (det faste tre-spørsmålsformatet fra V2023/V2024/V2025).
- **Tema/oppgave (nyskrevet):** «(a) Hva kjennetegner kvalitative
  forskningsspørsmål? (b) Formuler selv et kvalitativt forskningsspørsmål om
  studenters bruk av lesesal. (c) Hva kjennetegner det kvalitative
  forskningsintervjuet, og hvordan skiller det seg fra et spørreskjema?»
- **Karakternivåer:** Her er poenget det OMVENDTE av 8.7/8.8: vise hvor LITE som
  skal til («har kandidaten sagt X, er oppgaven godt besvart») — C-kjernen er i
  praksis toppsvar; A-laget er tynt (presis livsverden-formulering, det
  uforutsette-poenget, intervju vs. forhør som pluss). Margnotatene viser
  tidsstrategien: ~40 minutter her kjøper A-skille-tid i de to andre oppgavene.
  Kommentert stryk-variant viser sjangeren eneste felle: hypoteseformet
  «kvalitativt» spørsmål i (b). `tip` Sensorblikket: kjernepoeng-listen per
  spørsmål + eksplisitt «faghistorie forventes ikke».
- **Typiske feil demonstrert:** #10 (i stryk-varianten), #15 (utbrodering som
  stjeler tid).
- **Kvote:** 5 quiz / 4 flashcards.

### Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 2 | 22 | 16 | — |
| 1 | 4 | 85 | 100 | 4 |
| 2 | 4 | 73 | 80 | 4 |
| 3 | 4 | 70 | 66 | 4 |
| 4 | 3 | 63 | 55 | 4 |
| 5 | 4 | 75 | 70 | 4 |
| 6 | 2 | 30 | 30 | 4 |
| 7 | 2 | 35 | 43 | 4 |
| 8 | 9 | 95 | 60 | 3 øvingseksamener |
| **Sum** | **34** | **548 ✓ (≥500)** | **520 ✓ (≥500)** | **28 + 3** |

Summeringskontroll per del (quiz): Del 0: 10+12=22 · Del 1: 20+20+25+20=85 ·
Del 2: 20+18+15+20=73 · Del 3: 20+15+20+15=70 · Del 4: 25+20+18=63 ·
Del 5: 20+20+20+15=75 · Del 6: 15+15=30 · Del 7: 15+20=35 ·
Del 8: 12+12+12+12+12+20+5+5+5=95. Totalsum 22+85+73+70+63+75+30+35+95 = **548**.

Summeringskontroll per del (flashcards): Del 0: 8+8=16 · Del 1: 20+25+30+25=100 ·
Del 2: 20+20+15+25=80 · Del 3: 18+18+18+12=66 · Del 4: 22+18+15=55 ·
Del 5: 18+18+18+16=70 · Del 6: 15+15=30 · Del 7: 15+28=43 ·
Del 8: 8+8+6+8+8+10+4+4+4=60. Totalsum 16+100+80+66+55+70+30+43+60 = **520**.

**Flashcard-profil:** hovedvekt på begrep↔definisjon↔kontrastbegrep-par (Type
I↔II, SD↔SE, kasus↔N=1, mediator↔moderator↔konfunder, reliabilitet↔validitet,
testvaliditet↔slutningsvaliditet, probe-nivå-presisjon på målenivåer og
utvalgsteknikker) — det er nøyaktig presisjonen deloppgavene og feilene #2/#4/#5/#6
tester. **Quiz-profil:** flervalg med nabobegrep-distraktorer + «hvilken feil begår
kandidaten?»-format + p-verdi-definisjonens gale varianter som distraktorer
(direkte trening mot trekk-feilen) + små regneoppgaver med oppgitt formel.

---

## 4. Prøver

### Temadelprøver (4 per temadel, Del 1–7 = 28 prøver)

Hver prøve speiler eksamens deloppgaveformat (scenariobasert med a/b/c-ledd +
flervalgsinnslag). Omfang 20–45 min der ikke annet er angitt. Alle scenarier og
tall er nyskrevne.

- **Del 1:** (1) Prosess + variabler — 10 flervalg + UV/AV/målenivå-diagnose på
  2 miniscenarier; (2) Reliabilitet/validitet — typologi-flervalg + «valider
  denne skalaen»-kortdrøfting (inkl. tolke oppgitt α); (3) Utvalgsdiagnosen —
  3 rekrutteringsscenarier klassifiseres og begrunnes (bekvemmelighets-refleksen
  + frivillighetsbias); (4) Blandet delprøve i eksamensformat — én full
  T5-oppgave (a–d) med momentliste.
- **Del 2:** (1) Designkjennetegn — 12 flervalg (ekte/kvasi/N=1/kasus-diagnoser);
  (2) Overføringseffektene — koble effekt↔scenario + motbalanser et gitt
  innengruppedesign; (3) Faktoriell tabelldiagnose — 3 firefeltstabeller: finn
  hovedeffekter/interaksjon, tegn linjediagram, inkl. ett
  interaksjon-uten-hovedeffekt-tilfelle; (4) Full T4-oppgave (a–c:
  klassifiser–trusler–forbedre) under tidspress (45 min, momentliste).
- **Del 3:** (1) Sentraltendens/spredning — regneprøve med oppgitt formel
  (tallrekke med uteligger) + n−1-forklaring; (2) Figuravlesning — boksplott +
  histogram + stem-and-leaf med skjevhetsdiagnose; (3) SD vs. SE —
  regn SE for 3 tallsett + forklar skillet i prosa (A-skille-trening);
  (4) Full t-sekvens (30 min): varians → SD → SE → SE(D) → t → tolk oppgitt p.
- **Del 4:** (1) Hypoteser og trinn — formuler H0/H1 for 3 scenarier (μ-notasjon,
  en-/tohalet-valg med begrunnelse) + p-definisjonens flervalg (gale varianter som
  distraktorer); (2) p-tolkningsverksted — 5 oppgitte p-verdier mot ulike α,
  inkl. vippe- og halveringstilfeller; (3) Type I/II + power — feiltype-diagnoser
  i 4 scenarier + n-dobling-spørsmålet; (4) Testvalgsprøven — 5 scenarier →
  test + begrunnelse (familywise/ANCOVA-leddene er A-sjekk), 40 min.
- **Del 5:** (1) r-tolkning — 4 r-verdier i 4 scenarier med firedelt
  tolkningsmal; (2) Kausalmodell-verksted — tegn og case-tilpass
  konfunder/mediator/moderator for 2 scenarier + lag tre spuriøs-eksempler;
  (3) Regresjonsprøve — tolk a og b, prediker Ŷ, regn r² fra r, skisser linjen
  (oppgitte tall); (4) Full T1-oppgave (a–d) i 2023–2025-profil (45 min,
  momentliste).
- **Del 6:** (1) Kjennetegn-flervalg — 10 spørsmål (kval/kvant-kontraster,
  spørsmålsformkrav); (2) Formuleringsverksted — 4 kvantitative/hypoteseformede
  spørsmål skrives om + 2 egne formuleringer for gitte temaer; (3) Kvale &
  Brinkmann-presisjon — livsverden/mening/det uforutsette som kortsvar + intervju
  vs. spørreskjema-tabellen; (4) Full T7-oppgave i tre-spørsmålsformatet (40 min,
  kjernepoeng-fasit).
- **Del 7:** (1) Etikk-begrepsbank — 10 flervalg (rettigheter,
  deception-vilkårene); (2) Etikk-kasuistikk — 2 scenarier: identifiser og
  operasjonaliser (fagbegreper, ikke moralprat); (3) Åpen vitenskap — 
  HARKing-diagnose i nyskrevet scenario + pre-registreringens mekanisme +
  review/meta-kontrasten; (4) Restbank-lynprøve — 12 flervalg på tvers (kappa
  m/oppgitt formel, Likert, takeffekt, KI, fagfellevurdering).

### Komplette øvingseksamener (3, i 3-av-4-formatet)

Alle: 3 timer, fire scenariobaserte oppgaver med 3–6 deloppgaver, **besvar 3 av 4,
alle teller likt**; full momentliste-fasit per deloppgave med markerte A-skiller +
nivåkommentar (C-kjerne vs. A-lag); nyskrevne scenarier og tall. De fire oppgavene
følger den faste temafordelingen (korrelasjon/regresjon · hypotesetesting ·
design/eksperiment · måling/utvalg/kvalitativ).

1. **Øvingseksamen A (2023–2025-profil — gjeldende form):** Oppgave 1:
   korrelasjon/regresjon (sosiale medier-bruk og ensomhet, r = 0,32; a–d uten egen
   utregning, med kausalmodeller + videreføringsledd). Oppgave 2: hypotesetesting
   (normert motorikktest, p = 0,038; H0/H1, trinn, α-skifte, Type I/II, power +
   HARKing-hale). Oppgave 3: design (frivillige søvnkurs-deltakere uten
   randomisering: klassifiser, trusler, forbedre; + overføringseffekt-ledd).
   Oppgave 4: kvalitativ (tre-spørsmålsformatet, tema: eldres bruk av
   velferdsteknologi) + etikk-deloppgave (V2025-mønsteret).
2. **Øvingseksamen B (2018–2021-profil — med regning):** Oppgave 1: deskriptiv +
   SE (12 nyskrevne skårer: sentraltendens, varians/SD med oppgitt formel, n − 1,
   SE + SD-vs-SE-forklaring). Oppgave 2: full t-sekvens for to grupper (snille
   tall; SE(D), t, tolk oppgitt p = 0,004) + testvalgsledd (fem grupper → ANOVA →
   kovariat → ANCOVA). Oppgave 3: korrelasjonsoppgave med regneledd (r² fra
   r = 0,40; Ŷ-prediksjon med oppgitte a/b). Oppgave 4: design med
   validitetsdrøfting (2×2-scenario: hovedeffekt/interaksjon fra celletall +
   interaksjon-uten-hovedeffekt-leddet). Begrunnelse for profilen: regnekravet kan
   komme tilbake (boilerplaten står), og sekvensene er beste
   forståelsestrening.
3. **Øvingseksamen C (gjennomgående case, 2013–2019-stil):** Ett scenario («Les
   først oppgave 1»: en kommune undersøker ungdoms fritidsvaner og psykisk helse)
   følges gjennom alle fire oppgaver — design/utvalg (bekvemmelighetsfellen) →
   deskriptiv analyse (figuravlesning + sentralmål) → korrelasjon/tredjevariabel
   (SES-mønsteret med nyskrevet kovariat) → signifikanstest (p-tolkning +
   feiltyper). Begrunnelse: casebindingen var normen 2013–2019 og trener
   overgangene mellom temaene — nøyaktig der C-kandidater mister koblingene.

---

## 5. Studieguide-disposisjon

1. **Slik er eksamen** — 3-av-4-formatet, alle-teller-likt, ikke-svar-på-alle-fire,
   deloppgave-vanskelighetsspredning med de kjente A-skillene, tidsbudsjett
   (~55 min × 3 + margin), hjelpemidler (ordbok + enkel kalkulator), «formler
   oppgis alltid» (fra kap. 0.1).
2. **De to supergjengangerne** — korrelasjonspakken og hypotesetestingspakken som
   ferdige svarforløp (femtrinns- og sekstrinnsoppskriftene fra 8.1/8.2) med de
   farligste feilene (#1, #3) innfelt.
3. **Gratistredjedelen** — kvalitativ-oppgavens tre faste spørsmål med
   kjernepoeng-pugglister (6.1/6.2) og den ene fellen (#10); tidsstrategien.
4. **Statistikkfortellingen** — slutningslogikken fra 3.3 som sammenhengende
   historie (populasjon → utvalg → utvalgsfordeling → SE → p → beslutning) +
   notasjonskontrakten (§2c) som oppslagstabell.
5. **Formel- og regnekort** — alle regneferdighetene med formler, ett
   minieksempel hver og tolkningssetning-maler (SD vs. SE i ord, r² i ord).
6. **Begrepsbank med kontraster** — kontrastparene (Type I/II, SD/SE, kasus/N=1,
   mediator/moderator/konfunder, testvaliditet/slutningsvaliditet,
   reliabilitet/validitet, en-/tohalet) i tabellform — flashcard-speilet i prosa.
7. **Feilvaksine-kortversjonen** — de 16 feilene som énlinjers varsellamper, med
   de fire farligste uthevet.
8. **Karakterkalibrering** — A/C/E-kjennetegnene fra §4-destillatet (0.2) +
   sensorreglene (relevansfilteret, eksempel-bonusen, fremgangsmåte-regelen).
9. **Ukeplan** — 6-ukers og 2-ukers lesningsløp mot eksamen med
   prøve-innplassering (temadelprøver underveis; øvingseksamen A først, B og C de
   siste to ukene; feilvaksinen som siste gjennomgang).

---

## 6. Byggerekkefølge og verifikasjon

### Rekkefølge for forfatter-agenten (Opus)

1. **Metadata først:** `TextbookCourse`-oppføring (mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; wiring i
   `textbook-courses-hoyskole.ts` per produksjonsløypa fase 5): id `psy1010`,
   title, `level: 'Høyskole'`, alle 34 kapitler med
   id/number/title/description/estimatedMinutes/topics/prerequisites fra dette
   skjelettet; `sectionNames` fra §2-tabellen. `number` er DEL-BASERT («3.2»),
   aldri lineær — prosareferanser i innholdet bruker samme form («kap. 3.3»).
2. **Del 0** (etablerer mantraene alle senere kapitler refererer: «definer —
   anvend — begrunn», «C-kjerne + A-lag», relevansfilteret, «vis utregningen»).
3. **Del 1 → 2 → 3 → 4 → 5 → 6 → 7** i rekkefølge (prerequisites peker bakover:
   4.1 bygger på 3.3; 5.3 på 5.1; 7.2 på 4.1; rekkefølgen respekterer dette).
4. **Del 8** til slutt (sjangerkapitlene og modellbesvarelsene gjenbruker
   oppskrifter og begreper fra temadelene).
5. **Prøvekapitler** (id `psy1010-<del>-prove`, chapterNumber `<del>.P`, bygges av
   samme agent som delen) og **øvingseksamenene** (én agent som leser hele
   skjelettet) etter at temakapitlene finnes.
6. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel, jf. `/narrativ`) og
   quiz-registrering til slutt.

Per kapittel gjelder drøftings-DNAets blokkstruktur (tip Eksamensvinkel → text
Forkunnskaper med kryssbok-lenker + collapsible **Symbol- og formelliste** → text
landskap → definition kjernebegreper → text posisjoner/spenninger → example
anvendelse → warning typiske feil → exercise → collapsible pensumkart), med
hybrid-innslagene fra §2b i tallkapitlene (2.3, 3.1–3.4, 5.3, 8.3): gjennomregnede
example-blokker, exercise med solution + hints i stigende serie, obligatorisk
prosatolkning etter hvert regnestykke. Eksamensvinkel- og Typiske feil-blokkene
fylles med belegget og feilnumrene fra dette skjelettet — forfatteren skal IKKE
finne på frekvenstall. Flashcards genereres KUN fra toppnivå definition-blokker
med title (plattformregel).

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering:** alle nye `src/lib/data/chapters/psy1010-*.json` parser
      med `json.load`/`JSON.parse` (generer via `json.dump` — LaTeX i JSON krever
      `\\`). `npm run build` grønn — vis output.
- [ ] **Metadata-konsistens:** alle 34 kapittel-id-er + prøvekapitler i
      course-oppføringen har eksisterende content-fil; prerequisites peker på
      eksisterende id-er; `sectionNames` satt (ellers viser bokforsiden
      «Seksjon N»); narrativ-id-er registrert slik at toggle rendrer (verifiser
      med prod-server + curl at narrativ-ruter gir 200).
- [ ] **Notasjonskontrakt:** all statistikknotasjon følger §2c (x̄, μ, s², SD, SE,
      SE(D), t, r, r², Ŷ = a + bX, H0/H1, α/p/β/1 − β, z, n) — ingen
      lærebok-alternativer (σ-baserte formler, «b₀/b₁» osv.).
- [ ] **Tolkningskravet:** hvert regnestykke i boka (example og
      exercise-løsninger) ender i en prosatolkning; ingen «fasit uten mening».
- [ ] **p-verdi-vaksinen:** den korrekte p-definisjonen («minst like ekstremt
      resultat gitt at H0 er sann») står ORDRETT konsistent alle steder den
      forekommer; den gale varianten («sannsynligheten for at H0 er sann/feil»)
      forekommer KUN som markert feileksempel i warning-blokker/8.6.
- [ ] **Pensumreferanser EKTE:** kun ankere fra dette skjelettet (Bordens &
      Abbott *Research Design and Methods*; Kvale & Brinkmann *Det kvalitative
      forskningsintervju* kap. 1; Johannessen m.fl. ⚠; forelesningene ⚠ for
      konvensjoner/kausalmodellfigurer/klassiker-eksemplene). ALDRI oppdiktede
      referanser, sidetall eller årstall utover skjelettets; ⚠-koblinger beholder
      forbehold («pensum-/utgaveavhengig») i pensumkart-blokkene.
- [ ] **Kvotesum:** quiz ≥548 og flashcards ≥520 fordelt per kapittel som angitt
      (hardt minstekrav ≥500/≥500); 4 prøver per temadel (28) + 3 øvingseksamener
      i 3-av-4-format; fasit-svaralternativer rebalansert (jevn a/b/c/d — husk
      options[0] = riktig i staging, runtime stokker).
- [ ] **Opphavsrett:** alle oppgaver, scenarier, tallsett, figurer og
      modellbesvarelser er NYSKREVNE — mønstre og deloppgaveforløp kan og skal
      klones (gjenbruk er emnets norm), men ingen formuleringer, case-navn eller
      talloppsett fra UiO-sett/veiledninger gjenbrukes (ikke IQ/Flynn-caset,
      ikke røyking/karakterer, ikke kildesortering, ikke dagslys-caset, ikke
      Utøya/PTSD — analoge NYE scenarier). Ingen direktesitater fra
      pensumlitteratur — referer og parafraser.
- [ ] **Kalibreringssjekk:** kvalitativ-delen fremstilt som forutsigbar og
      lavterskel (aldri overakademisert); regnetrening til stede men aldri
      formelpugging som krav (formler oppgis i oppgavetekstene); utfaset stoff
      (kappa, spørreskjemakonstruksjon, fagfellevurdering, takeffekt, KI, Bayes)
      finnes KUN i 7.2/randsonekapitlene — ikke egne kapitler; alle 16 feil fra
      §5 dekket i sine hjemkapitler OG samlet i 8.6.
