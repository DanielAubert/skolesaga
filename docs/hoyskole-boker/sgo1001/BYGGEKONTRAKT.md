# Byggekontrakt: SGO1001 Innføring i samfunnsgeografi (UiO) — teknisk kontrakt for kapittelforfattere

Gjelder ALLE forfatter-agenter som bygger kapitler til `sgo1001`. Faglig innhold
styres av `SKJELETT.md` (identitetsseksjonen §1–§2 + per-kapittel-DNA i §3) — les
ditt kapittels avsnitt der ORDRETT, og `EKSAMENSANALYSE.md` ved behov. Denne
kontrakten definerer format, sjangerkrav, faglig sannhetskontroll og
kvalitetsporter, og er bindende der den er mer presis enn skjelettet. **Ved
faglig konflikt vinner SKJELETT.md; ved format-, sjanger- eller
kildepåstandskonflikt vinner denne kontrakten.** Instansiert fra
`../BYGGEKONTRAKT-MAL.md`.

**Emnets navn.** Emnet heter **SGO1001 Innføring i samfunnsgeografi** og
undervises ved Institutt for sosiologi og samfunnsgeografi (ISS), Universitetet i
Oslo. Emnekoden `SGO1001` skrives alltid ut — den er bokas viktigste søkeord.
Emnet er aktivt t.o.m. H2026 (analysen §1), og boka bygges for **dagens format**.

**Arketype: drøfting** (`../DNA-drofting.md`), undertype **begrepstungt essay-/
definisjonsfag** (sosant1000/stv1100-familien), med **to dokumenterte utvidelser**
fra DNA-normen (skjelettets §1):

1. **Eksamen er todelt** — Del 1 kortsvar (svar på **3 av 4**, maks 200 ord,
   teller **40 %**) og Del 2 langsvar (svar på **2 av 3**, maks 1000 ord, teller
   **60 %**). De to sjangrene trenes **eksplisitt og hver for seg**. Del 0 har
   derfor **tre** kapitler (mot DNA-normens to): eksamenskart + kortsvarhåndverk
   + langsvarhåndverk. Del 8 speiler todelingen (8.1 kortsvar, 8.2 langsvar).
2. **Kjernebegrepstriaden rom–sted–skala** er den eneste tematikken som er stabil
   gjennom hele arkivet (2003→2025). Triaden får sin egen tunge del FØRST
   (**Del 1, fire kapitler**), OG hvert tematisk kapittel i Del 3–7 fører en
   eksplisitt **kjernebegrepsakse** («hvordan trekkes rom/sted/skala inn her»).
   Dette er bokas signaturgrep og har sin egen bindende seksjon (§6.6).

**Ytterligere avvik fra DNA-normen, dokumentert her:**

- **Fem sjangerkoder**, ikke DNA-malens generiske: **K · L · KOMP · CASE · FH**
  (§12.2). **Ti feilkoder** #1–#10 (§12.3) og **fire vurderingsakser** (§6.2).
- **Sju prøvekapitler, ikke ni** — kun temadelene 1–7 har prøvekapittel. Del 0 og
  Del 8 har ingen: håndverkskapitlene, sjangerdrillene og modellbesvarelsene
  dekker dem, og egne prøver ville dublert de samme bankene (skjelettets §4).
- **Modellbesvarelseskapitlene (8.5–8.7) er spesifisert med A og C**, ikke med
  full A/C/E-trapp. E-nivået ligger i 0.2 og 0.3, der samme oppgave besvares på
  E-, C- og A-nivå. **Beslutning tatt i denne kontrakten (§9.3):** kap. **8.6**
  skal i tillegg ha en **midtnivå-besvarelse (B)** — det er et README-krav som må
  innfris minst ett sted i boka, og 8.6 er stedet.

**Nærmeste bygde søskenbøker:** `sosant1000` (samme arketype, samme institusjon,
samme todelte-eksamens-utvidelse), `stv1100` og `exphil03`. Kopier arbeidsmåte og
formkrav derfra — **aldri faglig innhold**. Tre forskjeller som endrer byggingen:

1. **Kildesituasjonen.** SGO1001 har **34 eksamenssett** og **8 publiserte
   sensorveiledninger**. Flertallsformen «sensorveiledningene» er her **sann og
   påkrevd** — men arkivet spenner over et **pensumbrudd** (~2016–2017), så
   frekvenstall må alltid leses i lys av det (§6.1, §7.4).
2. **Eksempelkravet erstatter etnografikravet.** Der SOSANT1000 måler etnografisk
   forankring, måler SGO1001 om påstanden er belagt med et **konkret, geografisk
   forankret eksempel**. «Eksempelløse svar kan aldri nå toppen» er den mest
   gjennomgående markøren i alle åtte veiledningene, og har sin egen bindende
   seksjon (§7).
3. **Kjernebegrepsløftet.** Det finnes ingen tilsvarende mekanikk i søskenbøkene:
   ethvert tematisk svar kan løftes ett hakk ved å trekke inn rom/sted/skala.
   Dette er A-markøren, og det skal være synlig i hvert eneste temakapittel.

**Ingen matematikk, ingen `$…$`.** Boka er symbolfri (§12.1). Kravet om
«Symbol- og formelliste» er dermed ikke relevant; hvert temakapittel har
`collapsible` **«Pensumkart for kapitlet»** i stedet.

---

## 1. LÆRINGSLØKKE-KONTRAKT (ufravikelig byggekrav — produkteier 9. juli 2026)

Fra skjelettets topp, tatt inn her som bindende byggekrav:

- HVERT kapittels `content[]` struktureres som gjentatte SMÅ løkker
  **Teori → Eksempel → Oppgave**, én løkke per begrep/teoribit:
  1. begrepet med navngitt pensumforankring (`definition`, evt. + `text` om
     posisjoner og spenninger), →
  2. `example` som viser begrepet BRUKT på en konkret case — skrevet slik en god
     kortsvars- eller langsvarsdel ville skrevet det, →
  3. `exercise` INLINE i `content[]` rett etter eksempelet (plattformen renderer
     inline oppgaver), →
  4. neste begrep.
- **ALDRI** all teori øverst med oppgavene samlet nederst, og aldri alle
  definisjonene i én bolk fulgt av alle eksemplene. Grupper til meningsfulle
  biter — ikke én oppgave per setning.
- **Ingen usett forkunnskap:** ingen oppgave får kreve et begrep, en teoretiker,
  en case eller en sjangerregel som ikke er introdusert tidligere i SAMME kapittel
  (t.o.m. eksempelet rett foran) eller i et tidligere kapittel referert i
  Forkunnskaper-blokken. Flytt teoribiten tidligere ved behov.
- **Unntak:** prøvekapitler, sjangerdriller (8.1–8.4) og modellbesvarelses-
  kapitler (8.5–8.7) følger sin egen arketype — komplett oppgave først, løsning i
  `collapsible`.
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer
  REKKEFØLGEN.

---

## 2. Filplassering og filantall

Ett JSON-dokument per kapittel: `src/lib/data/chapters/sgo1001-<del>-<nr>.json`
(prøvekapitler: `sgo1001-<del>-prove.json`). Quiz til
`src/lib/data/quiz-staging/sgo1001-<del>-<nr>.quiz.json`.

IKKE rør `_registry.json`, `_all.json`, `textbook-courses*.ts`, `quiz-data*.ts`
eller `institusjoner.ts` — wiring gjøres sentralt med
`scripts/hoyskolebok/wire-bok.py sgo1001` (fase 5). Generer ALLTID JSON via
python `json.dump`: faget er fullt av anførselstegn, engelske fagtermer i
anførselstegn («sense of place», «the Other», «planetary urbanism») og
apostrofer — én uescapet anførsel har tidligere blokkert hele plattformens
prebuild.

**37 filer totalt:** 30 innholdskapitler (skjelettets §3) + 7 prøvekapitler
(`sgo1001-1-prove` … `sgo1001-7-prove`). Wiringen genererer prøvekapitlenes
metadata selv fra `BOKCONFIG.json` (`prøvedeler`) — filene må finnes, men skal
ikke listes i skjelettets §3.

**Del 0 og Del 8 har ingen prøvekapittel** (håndverks-, sjanger- og
modellbesvarelseskapitlene dekker dem — skjelettets §4).

**Sannferdighetskrav ved wiring:** auto-teksten fra `wire-bok.py` for et
prøvekapittel er «Fire prøver som dekker del N (…) på eksamensnivå, med fulle
løsningsforslag.» Ordet «løsningsforslag» kan leses som om det finnes offisielle
løsningsforslag fra UiO. **Det gjør det ikke** (§6.1). Fase 5 SKAL formulere om
til «… med fulle momentliste-fasiter, skrevet av oss».

**Kursmetadataens `description`** fylles av `wire-bok.py` fra skjelettets
`**Description:**`-linjer. **Kapittel-JSONs eget `description`-felt er den
autoritative kilden** — fyll det alltid ut ordrett fra skjelettet.

---

## 3. Kapittel-JSON (toppnivå)

```json
{
  "id": "sgo1001-1-2",
  "courseId": "sgo1001",
  "chapterNumber": "1.2",
  "title": "…(fra skjelettet, ordrett)…",
  "description": "…(fra skjelettet, ordrett)…",
  "estimatedMinutes": 65,
  "competenceGoals": ["kunne forklare Harveys tredeling av rombegrepet og vise hver forståelse på et konkret sted", "…"],
  "content": [ "…blokker…" ],
  "exercises": []
}
```

- **`chapterNumber` er ALLTID del-basert** (`<del>.<nr>`: `0.1`, `1.2`, `8.7`) —
  **ALDRI lineær** («17»). Prøvekapitler: `<del>.P`. Dette er den enkeltfeilen som
  ødelegger navigasjonen i en hel bok (PRODUKSJONSLOYPE-lærdommen fra JUS1111).
- `title` og `description` tas ordrett fra skjelettet.
- `competenceGoals`: 2–4 «kunne …»-formuleringer destillert fra kapitlets
  begrepskontrakt. Dette er **Skolesagas EGNE** mål — ALDRI kopi av UiOs
  offisielle læringsutbyttebeskrivelser. UI-et deklarerer kilden automatisk.
- **Ingen kald kode i `competenceGoals`** — ikke «K», ikke «KOMP», ikke «#1»,
  ikke «A-besvarelse» uten forklaring.

### Rene tekstfelter — INGEN markdown (UFRAVIKELIG)

`title`, `topics` og `competenceGoals` renderes RÅTT i UI-et. Bruk ALDRI markdown
der (ingen `*kursiv*`, `**fet**`, ingen lenker). Verk- og begrepstitler i disse
feltene skrives med «anførselstegn», aldri kursiv. Markdown hører kun hjemme i
`content`/`problem`/`solution`/`task`-feltene.

---

## 4. Blokktyper (eksakte felt — strukturreferanse: `src/lib/data/chapters/sosant1000-2-1.json`)

- `text`: `{id, type: "text", content}` — markdown-prosa.
- `definition`: `{id, type: "definition", title, content}` — **`title`
  OBLIGATORISK**. Flashcards genereres KUN fra **toppnivå** `definition`-blokker
  med `title` (en definisjon nøstet inne i en `collapsible` teller IKKE).
  I SGO1001 er `title` en **kobling begrep ↔ teoretiker**: «Relasjonelt rom
  (Harvey)», «Skala som nivåhierarki (Herod)», «Sense of place (Agnew/Cresswell)»,
  «Oppgradering (Gereffi)», «Verdifangst (Coe/Yeung)», «Tilpasningskapasitet
  (IPCC)», «Strukturering (Giddens)». Åpne innholdet med forklaringen i ORD, lukk
  med **distinksjonen** mot nabobegrepet og med det eksempelet begrepet «eier»
  (§7).
- `theorem`: `{id, type: "theorem", title, content}` — brukes **sparsomt**, til
  teser som skal stå som en enhet: Harveys tredeling som system, Agnews tre
  stedsbetydninger, de to skalaforståelsene, byplanleggingens tre faser, de fire
  omstillingsdiskursene, de tre oppgraderingstypene. Ikke bruk `theorem` som pynt
  — dette er ikke et regnefag.
- `example`: `{id, type: "example", title, problem, solution}` — `solution`
  skrives som en **god kortsvars- eller langsvarsdel** (§6), aldri som referat, og
  har ALLTID minst ett konkret, geografisk forankret eksempel.
- `tip` / `warning`: `{id, type, title, content}`.
- `exercise`: `{id, type: "exercise", exercise: {id, number, type: "classic",
  difficulty: "lett"|"middels"|"vanskelig", task, solution, hints: []}}`.
  ALDRI `solutionVideo`, `allowsUpload`, `allowsCanvasDrawing`, `answer` eller
  `subTasks` (deloppgaver skrives inn i `task`/`solution`, se §10).
- `collapsible`: `{id, type: "collapsible", title, buttonText, content: [blokker]}`
  — feltnavnet er `content` og det skal inneholde BLOKKER. En `text`-nøkkel eller
  tom array rendrer som en tom boks og er en byggefeil.

Blokk-id-er: `<kapittel-id>-<løpenavn>` (f.eks. `sgo1001-1-2-def-relasjonelt-rom`),
unike i kapitlet. Duplikate blokk-id-er felles av kvalitetsporten.

---

## 5. Obligatorisk kapittelstruktur

### 5.1 Alltid først, i denne rekkefølgen

1. `tip` **Eksamensvinkel** — frekvens, sjangre og typiske oppgaveformuleringer,
   med de EKSAKTE tallene og scorene fra skjelettets «Eksamensbelegg»-linje for
   ditt kapittel. **Forfatteren skal ALDRI finne på frekvenstall** (§6.1).
2. `text` **Forkunnskaper** — kapitler i boka som markdown-lenker
   (`[kap. 1.2](/sgo1001/sgo1001-1-2)`) + eventuelle kryssbok-lenker fra tabellen
   i §13. «Dette kapitlet kan leses uten forkunnskaper» der skjelettet sier
   `prerequisites: ingen` (kun 0.1). **«Sist du var her»:** i kapitler med stor
   avstand til forkunnskapen (3.1 bygger på 1.2; 4.1, 5.1 og 6.1 på 1.4; 7.1 og
   7.2 på 1.3; hele Del 8 på temadelene) SKAL blokken VISE de 2–3
   kjernepåstandene ferdig oppfrisket («relasjonelt rom = rommet konstituert av
   relasjoner og nettverk: et sted er summen av sine forbindelser»), ikke bare
   lenke.

### 5.2 Temakapittel (Del 1–7) — DNA-drøfting + skjelettets per-kapittel-DNA

Etter eksamensvinkel og forkunnskaper går kapitlet i LÆRINGSLØKKER (§1). Disse
blokkene skal finnes, fordelt i løkkene — ikke stablet:

- `text` **Temaet i fagets landskap** — hvilket problem temaet svarer på, og
  hvorfor det er et problem i faget. Abstrakte kjernetemaer åpner med et
  **hverdagsanker FØR apparatet** (§10).
- `definition` **kjernebegreper** — flashcard-kilden, toppnivå med `title`, hvert
  begrep forankret i teoretiker/verk fra skjelettets begrepskontrakt, og hvert med
  **distinksjonen mot nabobegrepet** utskrevet.
- `text` **posisjoner og spenninger** — drøftingsaksene fra skjelettet, skrevet
  slik at leseren har råstoff til BEGGE sider.
- `collapsible` **Eksempellager** — 2–3 ferdige, gjenbrukbare caser etter malen i
  §7.2: fenomen og sted → hvilke begreper det belegger → hva caset faktisk viser →
  hvilke oppgavetyper det kan brukes på → én linje om hva caset IKKE viser. Dette
  er kapitlets mest eksamensnyttige blokk; den skal ALDRI kuttes.
- `example` **anvendelse** ×1–3 — case-forslagene fra skjelettet, nyskrevet, hver
  med eksplisitt **definisjon + eksempel + drøfting**-kobling.
- `exercise` ×4–8 INLINE — 2–3 begreps-/kortsvarsoppgaver (minst én `lett`
  innstegsoppgave tidlig), 1–2 KOMP-/CASE-kortdrøftinger med disposisjonsforslag
  som løsning, 1–2 eksamenslike L-oppgaver med momentliste.
- `warning` **Typiske feil** — feilkodene fra skjelettets «Typiske feil»-linje,
  **glosset ved første bruk PER KAPITTEL**: «(#1 — definisjon uten eksempel:
  begrepet defineres riktig, men uten et eneste konkret tilfelle)».
- `tip` **Grep-markør** — det analytiske grepet og kjernebegrepsløftet som løfter
  svaret fra god (C) til beste (A/B) i akkurat dette temaet (§6.6). Obligatorisk i
  ALLE temakapitler; i Del 3–7 skal den navngi kjernebegrepsaksen eksplisitt.
- `collapsible` **Pensumkart for kapitlet** — markdown-tabell
  `| Teoretiker | Begrep de «eier» | Distinksjonen | Caset det belegges med |`.
  Åpner med begrepsbank-notisen (§10).
- `collapsible` **Repetisjon** — 4–6 korte spørsmål fra forkunnskapskapitlene.

### 5.3 Sjangerkapittel (8.1–8.3)

1. `tip` Eksamensvinkel — sjangeren over årene (tall fra skjelettet).
2. `text` **Oppskrift** — trinnvis disponering med tidsbudsjett (§6.5).
   Kortsvaret har **fire trinn** (8.1), langsvaret **fem** (8.2), KOMP
   akse-strukturen og CASE begrepsanvendelses-strukturen (8.3).
3. `example` **gjennomskrevet besvarelse** med margkommentarer om hva som gir
   uttelling hvor. Margkommentarer skrives som egne linjer i `solution`:
   `> Margnotat: her går svaret fra definisjon til eksempel — dette er Akse 2, og uten det stopper svaret på minimumsnivå.`
4. `exercise` ×3–6 nyskrevne oppgaver i sjangeren, løsning = **tre-nivå-momentliste**
   (minimum / god / beste), ikke fullt essay.
5. `warning` Typiske feil + `collapsible` med sjangerens sjekkliste (§6.3).

Kap. **8.1** skal drille **10–14** nyskrevne kortsvar over alle Nivå 1–2-begrepene
(skjelettets liste), hvert med minimum/god/beste-fasit og margkommentar på
distinksjonen + eksempelet, og avsluttes med en «hvilket begrep testes her?»-
gjenkjenning.

Kap. **8.2** skal ha **5–7** nyskrevne langsvar over toppfamiliene + FH-oppgaven
«velg én av fagets vendinger», hver med momentliste og eksplisitt A/C-skille.

Kap. **8.3** har i tillegg **sammenligningskartene** som `collapsible`: de faste
KOMP-parene (GVC/GPN, entreprenørialisme/ny-rasjonalisme, induktiv/deduktiv,
absolutt/relativt rom) med 3–4 sammenligningsakser hver.

Kap. **8.3** avslutter med bokas ene **kalde bank**: 8–10 nyskrevne
oppgaveformuleringer på tvers av alle fem sjangrene, UTEN `hints`, fasit = ren
momentliste, eksplisitt merket «Kald bank — ingen hint. Her er det å mobilisere
begreper og eksempler selv som trenes.» Dette er eneste unntak fra hint-kravet i
§10.

### 5.4 Feilvaksinekapittel (8.4)

Én seksjon per feil #1–#10: (a) feilen slik sensor ser den, (b) nyskrevet «slik
ser den ut»-utdrag, (c) omskrevet god/beste-versjon av samme passasje,
(d) varsellampe-heuristikk. Sentrale før/etter-par (fra skjelettet):
definisjon → definisjon + eksempel (#1); referat → drøfting (#2); flat
rom-definisjon → Harveys tredeling (#3); ensidig → begge ledd (#4); helgardering →
velg og stå for det (#5); oppramsing → analytisk grep (#6); irrelevant → relevant
(#7); tema uten kjernebegrep → kjernebegrepsløft (#8); empirisk briljering →
begrepsanvendelse (#9); ubalanse → jevn besvarelse (#10). Deretter
gjenkjenningsoppgaver («hvilken feil begår denne kandidaten?») i flervalgsformat i
`exercise.task`, med stokket fasit (§10).

### 5.5 Modellbesvarelseskapittel (8.5–8.7)

1. `text` med den nyskrevne oppgaven, ordrett slik den ville stått i et sett,
   pluss ærlighetslinjen fra §9.1.
2. `collapsible` **A-besvarelse (beste)** — full, sammenhengende tekst med
   margnotater på de fire aksene. «— naturlig pausepunkt —» mellom
   hovedseksjonene.
3. `collapsible` **Kommentert C-besvarelse (god)** — samme oppgave, korrekt men
   deskriptiv, med notater om gapet opp til A rammet inn som
   **oppgraderingsmeny**.
4. **Kap. 8.6 skal i tillegg ha `collapsible` «Midtnivå-besvarelse (B)»** — se
   §9.3. Dette er et README-krav og gjelder minst ett sted i boka.
5. `tip` **Sensorblikket** — momentliste bygget på de fire vurderingsaksene (§6.2)
   og tre-nivå-graderingen, anvendt på akkurat denne oppgaven, med den eksplisitte
   setningen om hvorfor C-versjonen ikke ble B.
6. `warning` **Typiske feil** — feilene C-versjonen demonstrerer. (Kravet om
   `warning`-blokk gjelder også disse kapitlene; tittelen «Modellbesvarelse»
   fritar dem IKKE i kvalitetsporten.)

### 5.6 Prøvekapitler (`sgo1001-<del>-prove`, del 1–7)

Id `sgo1001-<del>-prove`, `chapterNumber` `<del>.P`, tittel «Prøver til del
<del>: <deltittel>».

Struktur: `tip` (dekning + «4 prøver à ~20–45 min» + «kan trygt deles over flere
kvelder — én prøve per økt» + hvor flervalget bor) + `text` Forkunnskaper + fire
`collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med nyskrevne
oppgaver og full fasit. **Prøvenes tema per del står i skjelettets «Prøve-kvote
Del N»-blokk — følg dem punkt for punkt.** Alle sju delene åpner med en
flervalgsbolk på **12 spørsmål** som begrepsdrill; fasit-bokstavene skal være
stokket (§10).

**Fasitstruktur for drøftingsfag** (obligatorisk i hver prøvefasit):

> **Må-punkter** (uten disse når svaret ikke minimumskravet) · **Pluss-punkter**
> (det som løfter fra god til beste) · **Feller** (det sensor faktisk trekker for,
> med feilkode).

Der prøven speiler et eksamensspørsmål, skal fasiten i tillegg ha
**tre-nivå-momentlisten** (minimum → god → beste), fordi det er sensors egen mal
(§6.2).

Etter hver prøvefasit: **avkryssbar selvdiagnose-sjekkliste (☐)** — bruk
rubrikken i §6.3 (kortsvarsrubrikken for K-oppgaver, langsvarsrubrikken for
L/KOMP/CASE/FH). Kap-referanser i fasitene som markdown-lenker. **Ingen quiz og
ingen begrepsbank i prøvekapitler.**

---

## 6. EKSAMENSKONTRAKTEN (fagets kjerne — bindende for alle løsninger og modellsvar)

Alt i denne seksjonen etableres i Del 0 (kap. 0.1–0.3) og refereres i resten av
boka. Det er dette som gjør at mange forfattere skriver samme bok.

### 6.1 Kildegrunnlaget bak kravene — si det presist, aldri mer

Arkivet `~/Desktop/Eksamner/UiO/SGO1001/` er gjennomgått i `EKSAMENSANALYSE.md`.
Resultatet er bindende:

| Fakta | Tall |
|---|---|
| **Eksamensoppgavesett** (V2003–H2025, skole-, hjemme- og utsatte/vår-varianter) | **34** |
| **Publiserte sensorveiledninger** (H2018, V2019, H2020, H2021, H2022, H2023, H2024, H2025) | **8** |
| **Offisielle løsningsforslag / fasit** | **0 — finnes ikke** |
| Årsspenn | V2003–H2025 (emnet aktivt t.o.m. H2026) |

**Konsekvenser (ufravikelige):**

- **«Sensorveiledningene» i flertall er SANT og påkrevd** når du omtaler korpuset.
  Skriv «de åtte sensorveiledningene», aldri «sensorveiledningen» om korpuset.
  Entall er kun riktig om ÉN navngitt veiledning: «H2025-veiledningen».
  Prosaregel-kontrollert (§12.5).
- **Grunnlaget er 34 sett og 8 veiledninger.** Aldri «over førti», aldri «alle
  sett siden 2003 har …» uten belegg i skjelettet.
- **Frekvenstall skrives ALDRI av forfatteren.** Skjelettet oppgir relative
  gjenganger-scorer (rom/sted/skala ~75 %, økonomisk geografi ~70 %, bygeografi
  ~70 %, natur/klima ~70 %, politisk geografi ~65 %, faghistorie ~60 %, migrasjon/
  mobilitet ~45 %, fattigdom/ulikhet ~40 %, metode ~35 %, kultur/diskurs ~30 %) og
  per-kapittel-belegg med semestermerking (H2023-k, H2024-l osv.). Bruk dem
  ORDRETT. Score-tallene er **relative gjenganger-scorer over 34 sett**, ikke
  «N av M» — skriv dem alltid som «omtrent ⅔ av settene», «i rundt 70 % av
  settene», aldri som et telt N/M du ikke har.
- **Én tillatt innsnevring, med presis ordlyd:** dagens 4-timers todelte
  skoleeksamensform gjelder fra **H2023**, og arkivet har **tre sett i denne
  formen (H2023, H2024, H2025)** — fire hvis du regner med H2022, som hadde samme
  todeling men 6 timer. Sier du «i alle settene med dagens form», SKAL du oppgi
  hvilke semestre du mener.
- **Pensumbruddet må alltid ledsage lange tidsserier.** Arkivet spenner over to
  pensumregimer (§7.4). En påstand av typen «temaet har vært på eksamen siden
  2003» må presisere at begrepsapparatet skiftet ~2016–2017, og at fase
  1-oppgavene brukte et annet vokabular.
- **Det finnes ingen offisielle løsningsforslag og ingen fasit for dette emnet.**
  ALLE modellbesvarelser, momentlister og prøvefasiter i boka er **nyskrevet av
  oss** fra pensumkunnskap og veiledningenes nivåbeskrivelser. Boka skal ALDRI
  antyde at den gjengir ekte kandidatbesvarelser eller offisielle løsningsforslag
  (grep-sjekkes, §12.5).
- **Ingen sidetall noe sted** (grep-sjekkes). Arkivet attesterer ingen, og
  pensumutgavene skifter.
- **Ingen ordrette gjengivelser** av oppgavetekster eller veiledningstekst —
  heller ikke i omskrevet-nær form (§15).
- **Forbehold som skal stå i kildenoten:** sensorveiledninger eldre enn H2018
  finnes ikke i arkivet; flervalgsdelene i flere 2016–2019-sett er ikke publisert
  (H2020-settets 20 flervalgsoppgaver er den best bevarte flervalgskilden); noen
  av de eldste settene er skann med mest forside- og instrukstekst; emnet la om
  pensum ~2016–2017, og nye sett kan endre bildet.

**Kildenote-mal for kap. 0.1** (bruk denne ordlyden, tilpasset i språk, aldri i
tall):

> Boka er kalibrert mot **34 eksamenssett** fra våren 2003 til høsten 2025 og mot
> **8 publiserte sensorveiledninger** (H2018, V2019 og hvert høstsemester
> 2020–2025) fra Institutt for sosiologi og samfunnsgeografi, UiO. Veiledningene
> er uvanlig konkrete: de beskriver hvert spørsmål på tre nivåer og sier rett ut
> hva som skiller et godt svar fra et av de beste. Det er dette grunnlaget kravene
> i boka hviler på, ikke gjetning.
> **UiO publiserer verken fasit eller løsningsforslag for SGO1001, og ingen fasit.** Alt
> du finner av modellbesvarelser og momentlister her er derfor skrevet av oss, ut
> fra pensum og veiledningenes egne nivåbeskrivelser.
> **Forbehold:** emnet la om pensum rundt 2016–2017, så oppgavene fra 2003–2015
> bruker delvis et annet begrepsapparat enn det som gjelder i dag — boka bygger på
> dagens pensum og bruker de eldre settene til å vise hvilke temaer som har holdt
> seg. Det finnes ingen sensorveiledninger eldre enn 2018, og flervalgsdelene fra
> 2016–2019 er ikke publisert. Eksamensformen har vært stabil siden 2023, men nye
> sett kan endre bildet.

### 6.2 De fire vurderingsaksene og tre-nivå-graderingen (fra de åtte veiledningene)

Veiledningene er påfallende konsistente H2018→H2025 og opererer med fire akser.
Alle sjangerkapitler, modellbesvarelser og prøvefasiter skal referere til dem
**ved navn og nummer** — aldri bare «sensor vil ha god drøfting».

| Akse | Hva den måler | Vekt |
|---|---|---|
| **Akse 1 — Presis begrepsbeherskelse** | En «formålstjenlig» definisjon som treffer pensumforfatterens bruk, med den riktige distinksjonen (ikke «rom», men hvilken av Harveys tre; ikke «skala», men målestokk ELLER nivåhierarki). | Grunnkravet. Flate definisjoner plasseres lavt selv når alt annet er på plass. |
| **Akse 2 — Eksempel og anvendelse** | Om påstanden er belagt med et konkret, gjerne geografisk forankret eksempel — og i langsvar om eksempelet *bygger* argumentet i stedet for å pynte på det. | **Viktigst.** Et abstrakt, eksempelløst svar kan aldri nå toppen. Den mest gjennomgående markøren i hele arkivet. |
| **Akse 3 — Drøfting, grep og koblinger** | Å velge få begreper og *bruke* dem, binde argumentene sammen til en analytisk tråd, drøfte kritisk, koble på tvers av pensum og trekke inn kjernebegrepstriaden. | **Dette er A-markøren** — det som løfter fra god til beste. |
| **Akse 4 — Relevans og aktualitet** | Samfunnsrelevant kontekst og aktuelle eksempler (klima og «Hans», iPhone, Oslo, Equinor), og refleksjon over hva det romlige perspektivet tilfører. | Løfter, og premieres eksplisitt i veiledningene. |

**Tre-nivå-graderingen** går igjen i veiledningene og er malen for E/C/A i boka:

| Sensors nivå | Karakterspeil | Hva som faktisk står der |
|---|---|---|
| **Minimum** | E/D | Korrekt definisjon eller gjengivelse. Ingen distinksjon, intet eller tynt eksempel. |
| **God** | C | Definisjon + presis distinksjon + relevant eksempel. Deskriptiv: får frem hovedpoengene, men drøfting, grep og koblinger uteblir. |
| **Beste** | A/B | Distinksjonen sitter, eksempelet er *brukt* til å bygge argumentet, drøftingen har et grep, og kjernebegrepsløftet er der. |

**Karakterskalaen er A–F**, gradert (bekreftet i H2023-oppgaveteksten). Ingen
«bestått-på-marginen»-logikk i modellsvar eller studieguide. H2018-veiledningens
terskelverdier (A fra 177 av 200; per kortsvar A 18–20, per langsvar A 33–40) er
**illustrerende, ikke gjeldende** — brukes de, skal det stå at de er fra H2018 og
at dagens sett vektes 40/60.

**Vektingsregelen** er bokas viktigste strategiske poeng: Del 1 teller **40 %** og
Del 2 **60 %**, men Del 1 er tre korte svar og Del 2 to lange. Praktisk konsekvens
som skal skrives ut: **velg de kortsvarene og langsvarene du kan forankre med et
eksempel**, og skriv ikke flere enn oppgaven ber om (feil #10 og #5).

### 6.3 De to binære rubrikkene (bindende selvrettingsverktøy)

Boka har to rubrikker fordi eksamen har to deler. De står i kap. 0.2 (kortsvar) og
0.3 (langsvar), gjentas i 8.1 og 8.2, og hver prøvefasit viser tilbake til den som
passer. Rubrikkene er **binære** — leseren skal kunne krysse av uten skjønn.

**Kortsvarsrubrikken (K):**

☐ Står det en definisjon som treffer den pensumforfatteren begrepet er hentet fra,
med teoretikeren navngitt der begrepet har en avsender?
☐ Er begrepets distinksjon med (absolutt/relativt/relasjonelt rom · målestokk/
nivåhierarki · location/locale/sense of place · GVC/GPN · økonomiske/sosio-
kulturelle forklaringer på gentrifisering · urbanisering/byvekst · government/
governance · medborgerskap/statsborgerskap · idiografisk/nomotetisk · induktiv/
deduktiv)?
☐ Er det minst ETT konkret eksempel, med sted eller aktør navngitt?
☐ Sier svaret hva eksempelet VISER — ikke bare at det finnes?
☐ Er det én løftende setning som knytter begrepet til rom, sted eller skala, eller
til et større tema?
☐ Er svaret innenfor ordgrensen, og har du svart på nøyaktig tre kortsvar — ikke
fire?

**Langsvarsrubrikken (L / KOMP / CASE / FH):**

☐ Er oppgavens nøkkelbegrep avklart i innledningen — definisjonskomponenten?
☐ Står det en analytisk tråd — en påstand som svarer på oppgaven — og ikke en
oppramsing?
☐ Er påstanden *prøvd*: står det minst én innvending eller nyansering —
drøftingskomponenten?
☐ Er minst ett konkret case BRUKT til å bygge argumentet, ikke bare nevnt?
*(Akse 2)*
☐ Er teoretikerne navngitt der begrepene har en avsender?
☐ Er rom, sted eller skala trukket inn som analytisk løft der det er naturlig?
*(Akse 3 — A-markøren)*
☐ I KOMP: er BEGGE ledd behandlet på hver sammenligningsakse, med eksempel på
begge?
☐ I CASE: er begrepene faktisk anvendt på caset — ikke bare caset beskrevet?
☐ I FH: er ÉN vending valgt og fulgt i dybden, med et tydelig fra/til?
☐ Svarer siste avsnitt på spørsmålet som faktisk ble stilt, innenfor 1000 ord, og
er alle delspørsmål besvart?

**Standpunktet er fritt.** Alle landinger kan gi toppkarakter når begrunnelsen er
stringent og eksempelforankret. Det er begrunnelseskvaliteten som premieres, aldri
konklusjonens retning. Dette sies eksplisitt hver gang boka ber leseren ta
stilling.

### 6.4 Instruksjonsverbet styrer sjangeren (bindende)

Hver oppgave i boka — og hvert modellsvar — skal svare i den sjangeren
instruksjonsverbet krever. Å svare i feil sjanger er feil #2 eller #5, uansett hvor
godt innholdet er. Tell instruksjonsverbene, og svar på alle.

| Instruksjonsverb i oppgaven | Hva svaret MÅ inneholde | Sjanger |
|---|---|---|
| «Definer X» / «Hva menes med X?» (nesten alltid + «gi et eksempel») | Presis definisjon som treffer pensumbruken → distinksjonen → minst ett konkret eksempel → én løftende kobling til rom/sted/skala. | **K** |
| «Gjør rede for X» (i Del 1) | Ordnet, presis framstilling. Drøfting er ikke krevd — men eksempel er det fortsatt. | **K** |
| «Gjør rede for X og drøft/anvend …» | Begrepsavklaring → redegjørelse for de relevante teoriene → analytisk grep → case *brukt* → kobling på tvers + kritisk refleksjon + kjernebegrepsløft. **Både definisjons- og diskusjonskomponent.** | **L** |
| «Sammenlign X og Y» / «Hva er forskjellen mellom X og Y?» | 2–4 eksplisitte sammenligningsakser, BEGGE ledd behandlet på HVER akse, eksempel på begge. Aldri to parallelle referater, aldri bare det ene leddet (feil #4). | **KOMP** |
| «Bruk begrepene/vedlegget til å analysere …» | Velg få begreper og anvend dem stringent på materialet. Vurderes på **begrepsanvendelse**, ikke på empirisk detaljkunnskap om caset (feil #9). | **CASE** |
| «Velg én av fagets vendinger og gjør rede for …» / «Drøft påstanden at …» | Velg ÉN og gå i dybden med et tydelig fra/til; prøv påstanden i stedet for å bekrefte den mekanisk. Å ramse opp alle tre vendinger er å bomme (feil #5). | **FH** |
| «Bruk eksempler» / «Gi et eksempel» | Kravet er et **konkret** eksempel med sted eller aktør navngitt. Et hverdagseksempel er lov, men det må vise begrepet. | alle |

Sammensatte formuleringer er normen («gjør rede for … og drøft …»). Dette drilles
eksplisitt i kap. 8.1, 8.2 og 8.3.

### 6.5 Tidsbudsjett (bruk denne modellen konsekvent i hele boka)

Eksamen er **4 timer = 240 minutter**, digital skoleeksamen (Inspera), **ingen
hjelpemidler**. Besvarelse på norsk, svensk, dansk eller engelsk; oppgaven gis på
bokmål og nynorsk.

- **~10–15 min:** les hele settet, velg tre kortsvar og to langsvar, skriv
  stikkordsdisposisjon for langsvarene.
- **Del 1 — 3 × ~15–20 min ≈ 45–60 min:** kortsvarene, ett om gangen, maks 200 ord
  hver.
- **Del 2 — 2 × ~50–60 min ≈ 100–120 min:** per langsvar ~10 min disponering,
  ~40 min skriving, ~10 min kontroll. Maks 1000 ord hver.
- **~45–70 min buffer:** kladd underveis, gjennomlesing og retting til slutt.

Der boka oppgir «~15–20 min per kortsvar» og «~50–60 min per langsvar» er det
**skrivetid**; differansen opp til 240 er settlesing, valg, disponering og
gjennomlesing. Denne differansen skal forklares eksplisitt der den først nevnes.
Si også hvorfor Del 2 får mest tid selv om Del 1 teller 40 %: to lange svar krever
disposisjon, tre korte krever presisjon.

### 6.6 Kjernebegrepsløftet og de tre mantraene (bokas signaturgrep)

Tre mantraer innføres i Del 0 og gjentas gjennom boka:

1. **«Definer OG gi eksempel»** — kortsvarets minstemål (Akse 1 + 2).
2. **«Redegjør OG drøft»** — langsvarets minstemål; rent referat plasseres lavt
   (feil #2).
3. **«Løft med rom, sted eller skala»** — kjernebegrepsløftet (Akse 3).

**Kjernebegrepsløftet er bindende i hvert temakapittel i Del 3–7** og skal stå i
`tip` **Grep-markør** (§5.2), formulert konkret for temaet:

- **Del 3:** globalisering som re-organisering av rom (relativt/relasjonelt rom);
  varekjeden som romlig utstrekning; GPN på ulike skalanivåer.
- **Del 4:** byen som sted og som skala; gentrifisering som endring av sense of
  place.
- **Del 5:** klima som lokalt OG globalt (skala); sårbarhet som stedbundet.
- **Del 6:** styring fordelt på skalanivåer (flernivåstyring); inviterte og
  oppfunne rom som romlig begrep.
- **Del 7:** transnasjonalisme som utfordring til stedbundet tilhørighet;
  representasjon som produksjon av sted.

To presiseringer skal alltid følge med, ellers blir løftet mekanisk:

1. **Løftet er én til tre setninger, ikke et nytt kapittel.** Det skal svare på
   «hva ser vi når vi legger rom/sted/skala på dette?», ikke gjenta Del 1.
2. **Løftet må være relevant.** Et påklistret «dette kan også ses som skala» uten
   innhold er feil #7 (irrelevante momenter), ikke et løft. Si dette eksplisitt.

---

## 7. EKSEMPELKRAVET OG BEGREPSFORANKRINGEN (fagets sannhetskontroll)

Dette er SGO1001s motstykke til regnefagenes numeriske parametersjekk og
jusfagenes hjemmelskontroll. Brudd her er **faglige feil, ikke stilfeil**.

### 7.1 Eksempel-regelen (ufravikelig)

- **Hvert teoretisk poeng i boka har minst ett konkret eksempel.** Et begrep som
  introduseres uten at leseren får se det brukt på et konkret sted, en konkret vare
  eller en konkret hendelse, er ikke ferdig skrevet.
- **Et eksempel er konkret når tre ting står der:** hva/hvor (sted, vare, aktør,
  hendelse), hvilket begrep det belegger, og **hva eksempelet faktisk viser**.
  «Et eksempel fra global sør» er ikke et eksempel. «Monteringen av iPhone i Kina
  mens design og merkevare ligger i USA — verdien fanges der de immaterielle
  leddene er» er det.
- **Hvert temakapittel har «Eksempellager»-blokken** (§5.2) med 2–3 ferdige,
  gjenbrukbare caser. Det er dette lageret leseren tar med seg inn i
  eksamenslokalet.
- **Hvert modellsvar på A-nivå viser definisjon + eksempel + drøfting eksplisitt**,
  og margnotatet peker på den:
  `> Margnotat: her går svaret fra begrep til belegg — dette er Akse 2, og her bygger eksempelet argumentet i stedet for å pynte på det.`
- **Distinksjonen mellom eksempeltyper skal være tydelig.** Bokas egne
  hverdagsankre (pendling, netthandel, hyttefelt) er *pedagogiske innganger*; på
  eksamen premieres et pensumnært eller aktuelt samfunnseksempel. Si det første
  gang et hverdagsanker brukes.
- **Egne, nyere eksempler er lov og premieres** (Akse 4). Boka skal si eksplisitt
  at de faste caseene er en trygg base, ikke en fasit.

### 7.2 Case-registeret — hva hvert case faktisk viser

Malen for hver oppføring i eksempellageret er: **fenomen og sted → hvilke begreper
det belegger → hva caset faktisk viser → hva det IKKE viser → hvilke oppgavetyper
det kan brukes på**.

Registeret under er skjelettets faste caser. Empiriske detaljer, årstall og tall
merkes `(verifiser)` der du går utover det som står her (§7.4).

| Case | Belegger | Hva det viser | Kapitler |
|---|---|---|---|
| **iPhone** (design i USA, komponenter fra flere land, montering i Kina) | GVC, styringsformer, oppgradering, GPN og verdifangst | At en vare er en geografisk spredt kjede, og at verdien ikke fanges der monteringen skjer. Kjernecaset for GVC↔GPN-skillet. | 3.2, 3.3, 8.6 |
| **IKEA** (leverandørnettverk) | GVC, oppkjøperdrevet kjede, leverandørrelasjoner | At en detaljist kan styre en kjede uten å eie produksjonen. | 3.2, 3.3 |
| **Suez-blokaden 2021** `(verifiser detaljer)` | økonomisk globalisering, relasjonelt og relativt rom, sårbarhet i varekjeder | At funksjonell integrasjon gjør avstand til et relasjonelt spørsmål — og at nettverk har flaskehalser. | 3.1, 1.2 |
| **Ekstremværet «Hans» / Nesbyen** `(verifiser detaljer)` | sårbarhet, tilpasningskapasitet, ujevn fordeling, arealplanlegging | At skaden ikke bare følger av nedbøren, men av hvordan samfunnet var forberedt — sårbarhet er sosialt betinget. Fagets faste langsvarsmal. | 5.1, 8.5 |
| **Oslo gjennom byplanleggingens faser** (drabantby → Aker Brygge/Bjørvika → nyere helhetsplanlegging) | modernisme, entreprenørialisme, ny-rasjonalisme | At planleggingsidealer skifter, og at hver fase etterlater fysiske spor i samme by. | 4.2 |
| **Grünerløkka / gentrifiserte bydeler i Oslo** | gentrifisering (økonomisk OG sosio-kulturelt), sense of place, fortrengning | At samme prosess forklares både med leiegap og med livsstilspreferanser — sensor vil ha begge. | 4.3, 1.3 |
| **Oslo øst/vest** | boligsegregasjon, institusjonell praksis, diskriminering | At romlig sortering er både valg og struktur. | 4.3 |
| **Schellings segregasjonsmodell (1978)** | boligsegregasjon som mekanisme | At selv en svak preferanse for like naboer kan gi sterk segregasjon. **Det er en modell/simulering, ikke et empirisk funn** — si det. | 4.3 |
| **Equinor / Telenor** | statlig eierskap, government→governance, flernivåstyring | At staten er en aktør i markedet og et styringsverktøy, ikke bare en regulator. | 6.1, 3.3 |
| **Trump og identitetspolitikk** | identitetspolitikk (bred vs. snever), politisk aktørskap | At identitet mobiliseres politisk på tvers av det tradisjonelle venstre/høyre-skillet. Behandles analytisk, aldri partisk (§8.4). | 6.2 |
| **Fylkes-/regionreformen i Norge** `(verifiser detaljer)` | skala som sosialt konstruert, re-skalering | At et skalanivå kan endres politisk — nivåene er ikke naturgitte. | 1.4, 6.1 |
| **Rask urbanisering og slumvekst i global sør** | urbanisering som relativt fenomen (Davis), byvekst | At urbanisering er en *andel*, ikke et absolutt tall — og at de to kan gå i hver sin retning. | 4.1 |

**Ikke-empiriske pensumbidrag** som likevel må tilskrives riktig: **Harvey**s
tredeling er et analytisk skjema, ikke et funn; **Herod**s poeng om sosialt
konstruerte skalanivåer er et argument, ikke et måleresultat; **IPCC**-
definisjonene er rammeverksdefinisjoner fra en vurderingsprosess, ikke ett
enkeltstudium; **de fire omstillingsdiskursene** er en analytisk firfeltstabell
`(verifiser diskursnavn)`, ikke en empirisk kartlegging.

### 7.3 Tilskriv aldri en teoretiker et poeng vedkommende ikke har

Dette er fagets alvorligste feil, og den tyngste kvalitetsporten i denne boka.
Tabellen er obligatorisk der posisjonene behandles:

| Ikke skriv | Skriv |
|---|---|
| «Rom er stedet der noe skjer» (flat definisjon) | **Harveys tredeling:** absolutt rom (objektiv ramme, koordinater — rommet som beholder), relativt rom (avhenger av observatør og målemåte — reisetid, kostnad), relasjonelt rom (konstituert av relasjoner og nettverk). Sensor måler hvilken av de tre. Feil #3. |
| «Relativt og relasjonelt rom er det samme» | **Relativt** = avstand målt i noe annet enn meter (tid, kostnad, tilgjengelighet). **Relasjonelt** = et sted ER summen av sine forbindelser. Å blande dem er nøyaktig fellen sensor tester. |
| «Harvey lanserte TPSN» | **TPSN** (territorium–sted–skala–nettverk) tilskrives **Jessop, Jones og Brenner**, ikke Harvey. |
| «Cresswell fant opp de tre stedsbetydningene» | Tredelingen **location–locale–sense of place** tilskrives **John Agnew**, og formidles og videreutvikles hos **Tim Cresswell**. Skriv «Agnews tredeling, slik den brukes hos Cresswell». |
| «Skala betyr målestokk» | **Begge** forståelsene: skala som målestokk (forholdet mellom kart og virkelighet) OG skala som vertikalt nivåhierarki (lokal–regional–nasjonal–global). Å ta bare den ene er feil #3 — det ble eksplisitt målt H2025. |
| «Herod beviste at skala er sosialt konstruert» | **Herod argumenterer for** at skalanivåer ikke er naturgitte, men skapes, forhandles og kan endres. Det er et argument med konsekvenser for analysen, ikke et måleresultat. |
| «Urbanisering betyr at byene vokser» | **Urbanisering er et relativt fenomen** (Davis): andelen av befolkningen som bor i byer. **Byvekst** er det absolutte tallet. En by kan vokse uten at urbaniseringsgraden stiger. |
| «Lefebvre skrev om planetary urbanism» | Skriv **Lefebvres tese om at det urbane er en prosess som gjennomsyrer hele samfunnet, videreført i litteraturen om «planetary urbanism»**. Ikke legg uttrykket i munnen på Lefebvre selv; sjekk gjeldende pensums formulering og merk `(verifiser)` der du er usikker. |
| «Urbanisme er det samme som urbanisering» | **Urbanisme** (Wirth) = byen som levemåte. **Urbanisering** = befolkningsandel. **Byvekst** = absolutte tall. Tre begreper, tre betydninger. |
| «GVC og GPN er to ord for det samme» | **GVC** (Gereffi m.fl.) ser på kjedens koordinering og styring — lineær, firmasentrert. **GPN** (Coe, Yeung, Henderson) ser på det bredere nettverket, maktrelasjoner og hvem som skaper og *tilegner seg* verdi — inkluderer stat og arbeidskraft. Dette skillet er en nesten sikker delkarakter. |
| «Gentrifisering skyldes at rike folk liker gamle bydeler» | Sensor vil ha **begge forklaringstypene**: økonomiske (leiegap/rent gap) OG sosio-kulturelle (livsstil, preferanser). Bare den ene er feil #3. |
| «Schelling viste at folk er fordomsfulle» | Schellings modell viser at **selv en svak preferanse** for like naboer kan gi sterk segregasjon som samlet utfall. Det er en simulering av en mekanisme, ikke en påstand om holdninger. |
| «Sårbarhet betyr at været er farlig» | **IPCC-forståelsen:** sårbarhet = graden av negative konsekvenser av en klimapåkjenning, **tilpasningskapasitet** = evnen til å justere seg for å redusere skade — begge **ujevnt fordelt** som følge av politiske, økonomiske og sosiale prosesser. Uten den ujevne fordelingen mangler kjernepoenget. |
| «Bridge viste at naturressurser er begrenset» | **Bridge:** natur blir **ressurs** når mennesker tillegger den verdi. Ressurs er en **relasjon** mellom samfunn og natur, ikke en iboende egenskap ved tingen. |
| «Ressursforbannelsen beviser at olje er skadelig» | Ressursforbannelsen er en **tendens som er observert og omstridt**: ressursrikdom kan gi konflikt og svakt styresett i stedet for velstand. Formuler som mekanisme, ikke som lov. |
| «Governance betyr styring» | **Government** = hierarkisk statlig styring. **Governance** = styring gjennom nettverk av offentlige, private og sivile aktører — bredere og mer horisontalt. Skillet ER oppgaven. |
| «Medborgerskap er det samme som statsborgerskap» | **Medborgerskap er flerdimensjonalt** — medlemskap, rettigheter og deltagelse — og er bredere enn det juridiske statsborgerskapet. Forvekslingen er en dokumentert feil #3. |
| «Giddens mente at strukturene styrer oss» | **Strukturering:** struktur både **muliggjør og begrenser** handling, og reproduseres eller endres gjennom handlingen. Verken ren determinisme eller ren frihet. |
| «Naturdeterminismen viser at klima former kulturer» | Naturdeterminismen (Semple, Huntington) er en **historisk, avvist posisjon** som faget har gjort opp med. Den presenteres alltid med rammen: hva den hevdet, hvorfor den ble avvist, og hva som er ideologisk problematisk ved den (§8.3). |
| «Haraway mente at all kunnskap er like gyldig» | **Situert kunnskap:** all kunnskap er posisjonert — det finnes ingen «guds øye»-utsikt. Det er et krav om å gjøre posisjonen eksplisitt, ikke en påstand om at alt er like sant. |
| «Miraftab skiller mellom lovlige og ulovlige protester» | **Inviterte rom** = deltakelse på myndighetenes premisser (høringer, råd). **Oppfunne (invented) rom** = deltakelsesformer folk skaper selv. Skillet handler om hvem som setter rammene, ikke om lovlighet. |
| «Mobilitet betyr at folk flytter på seg» | **Cresswell:** mobilitet er bevegelse som **erfart og meningsbærende praksis** — hvem som er mobil, på hvilke vilkår og med hvilken mening. Ren forflytning er feil #3. |
| «Diskurs betyr måten man snakker på» | **Diskursiv representasjon:** framstillinger gjennom språk og tegnsystemer som er med på å **skape** virkeligheten, ikke bare gjengi den — og som konkurrerer om å bli den normale. Makten ligger i hvem som får representere. |

**Konsekvens for oppgaver og fasiter:** en fasit som tilskriver en teoretiker et
poeng vedkommende ikke har, er en byggefeil på linje med feil svar i et regnefag —
også når den «låter riktig».

### 7.4 `(verifiser)`-disiplin og pensumbrudd-scope

- **Bruk NØYAKTIG formen `(verifiser)`** — ikke «(verifiser tittel)», ikke
  «(verifiser detaljer)» som eneste markør. Kvalitetsporten leter etter den
  literale strengen, og varianter slipper gjennom uoppdaget. (Skjelettet bruker
  begge former; bruk alltid den literale `(verifiser)` i selve kapittelteksten.)
- Skjelettet merker selv en rekke detaljer: Suez-blokadens detaljer, iPhone-
  kjedens sammensetning, «Hans»/Nesbyen-detaljene, norske hageby-områder, den
  kvantitative vendingens modeller, H2024-metodecaset, diskursnavnene i
  firfeltstabellen. Der §7.2 gir en attestert formulering, bruk den. Går du
  utover den, merk.
- `(verifiser)`-markører er **påkrevd i førsteutkastet** der du er usikker, men de
  **feller sluttporten**. De løses i verifiseringsbølgen (fase 6) FØR
  `sjekk-bok.py` kjøres siste gang.
- **Usikre detaljer utelates hellere enn gjettes.** Skriv «norsk lakseoppdrett som
  ressursnæring» framfor å gjette tall, årstall eller kommunenavn. **Ingen
  oppdiktede referanser, verk, teoretikere, årstall eller tekstboks-numre** — det
  er den ene feilen som ødelegger bokas troverdighet hos en fagperson.
- **⚠ FØR temakapitlene skrives: sjekk GJELDENDE pensumliste** (Leganto).
  Begrepene er stabile, men tekstbokskoblinger og konkrete tekstboks-referanser
  kan være endret. Skriv aldri «tekstboks 16.1» e.l.
- **Pensumbrudd-scope (bindende):** boka bygger på **fase 2/3-pensumet** (2017→).
  Gammelt-pensum-begreper — **befolkningspyramide, demografisk overgang,
  moderniserings- og avhengighetsteori, postfordisme, world cities / rank-size,
  Mackinder og «Heartland», Hägerstrands tidsgeografi, sonemodellen/LA-modellen,
  push/pull (Lee), hybride kulturer** — opptrer **KUN** som kort faghistorisk
  bakteppe, plassert SIST i sitt kapittel og eksplisitt merket «bør kjenne til —
  ikke lenger eksamensaktuelt som kjernestoff». ALDRI som anbefalt eksamensstoff.
- **Stabile ankere (aldri ⚠):** Harvey, Agnew/Cresswell, Herod, Jessop/Jones/
  Brenner (TPSN), Gereffi, Coe/Yeung/Henderson, Markusen, Davis, Lefebvre, Wirth,
  Howard, Schelling, IPCC, Bridge, Giddens, Miraftab, Semple/Huntington,
  Hartshorne/Sauer, Gregory, Staeheli & Mitchell, Haraway, Sheller & Urry, Lee.
  **Navn utenfor denne lista skal ikke innføres som pensumankere.**

---

## 8. NORMATIV VARSOMHET OG GEOGRAFISK SPRÅK (bindende — faglig presisjon, ikke høflighet)

Faget handler om levende samfunn, om ulikhet mellom verdensdeler og om politisk
omstridte spørsmål. En fremstilling som gjør folk til kulisser eller som tar
partipolitisk stilling, er faglig gal — og sensor merker forskjellen umiddelbart.

### 8.1 Språk (grep- og prosaregel-sjekkes, §12.5)

- **Forbudt som bokas egne ord:** «naturfolk», «usivilisert», «de innfødte»,
  «underutviklede land», «primitiv(e)» om samfunn.
- **Skriv i stedet:** **«global sør» / «global nord»** (fagets egne, nøytrale
  termer og skjelettets valg), «lav- og mellominntektsland», landets eller
  regionens eget navn.
- **Tre presise unntak** der de utdaterte ordene MÅ kunne stå, alltid med ramme:
  1. **Faghistorisk kritikk** — når boka forklarer naturdeterminismens
     evolusjonistiske ramme, eller moderniseringsteoriens «utviklingstrapp», som
     posisjoner faget har forlatt (§8.3).
  2. **Verk- og begrepstitler** gjengis korrekt, i anførselstegn, aldri som bokas
     egen beskrivelse.
  3. **Analytiske begreper i anførselstegn** — «the Other» er et postkolonialt
     analysebegrep om konstruksjonen av «de andre», og skal alltid stå i
     anførselstegn med forklaringen ved siden av.
- **Ingen «vi» mot «dem».** Skriv aldri «vår del av verden» mot «deres». Bruk
  konkrete betegnelser: «i Norge i dag», «i Jharkhand på 2010-tallet», «i global
  sør».
- **Slum, fattigdom og migrasjon behandles med aktørskap.** Mennesker i slum, i
  prekært arbeid eller på flukt er handlende aktører under strukturelle
  begrensninger (Giddens-poenget, kap. 6.2), ikke passive ofre eller
  elendighetskulisse.

### 8.2 Steder og folk skal ha tid og sted

Skriv ikke «i global sør urbaniseres det raskt» uten tidfesting og eksempel. Fest
alltid caset i tid og rom: «rask urbanisering i mange land i global sør fra
1990-tallet og framover, tydeligst i …». Et case uten tid og sted er ikke et
eksempel (§7.1) og teller ikke på Akse 2.

### 8.3 Fagets egen fortid skal stå

Samfunnsgeografien har selv produsert naturdeterminisme, kolonial kartografi og
moderniseringsteoriens «utviklingstrapp». Det skal sies der klassikerne innføres
(Semple/Huntington i kap. 2.1, kart som politiske i 2.3, gammelt-pensum-teoriene i
7.1) — kort, faktuelt, uten unnskyldninger og uten fordømmelse. Det er både
faghistorisk presisjon (Akse 3) og bokas beste vern mot å arve språket.

### 8.4 Politisk omstridte temaer

Klimapolitikk, innvandring, identitetspolitikk, vindkraft, statlig eierskap og
gentrifisering er politisk omstridte. Boka **fremstiller posisjonene ærlig og tar
ikke stilling på leserens vegne** — den viser hva som står på spill og hvordan
hver posisjon begrunnes. Trump-caset i kap. 6.2 brukes **analytisk** (mobilisering
av identitet), aldri som partipolitisk vurdering. Sensor premierer at kandidaten
kan drøfte begge sider; det er nettopp drøftingsaksen.

---

## 9. MODELLBESVARELSER (ærlighet, nivå og variasjon)

### 9.1 Ærlig merking — ufravikelig

- Hver modellbesvarelse innledes med én linje: **«Nyskrevet modellbesvarelse —
  skrevet av oss for denne boka. SGO1001 har åtte publiserte sensorveiledninger
  som beskriver nivåene, men ingen publiserte løsningsforslag og ingen publiserte
  kandidatbesvarelser. Dette er derfor ikke en ekte kandidatbesvarelse.»**
- En boks som heter «C-besvarelse» skal **VÆRE en C** — tittel, tekst og
  margnotater skal stemme. En polert A merket som C er en byggefeil. Samme for
  E-skissene i 0.2 og 0.3: de skal faktisk mangle det de sier de mangler.
- Ordet «studentbesvarelse» er forbudt i bokinnholdet (grep-sjekkes, §12.5). Skriv
  «modellbesvarelse», og bruk formuleringen «ikke en ekte kandidatbesvarelse» i
  ærlighetslinjen.

### 9.2 Meta-fasit er FORBUDT

«En A-besvarelse ville her ha drøftet …» er en regibemerkning, ikke en fasit.
**Drøftelsen skal skrives UT** — kort, skarp, eksempelforankret, med landing.
Grep-sjekkes: `en A-besvarelse ville|ville ha drøftet` = 0 treff.

Margnotater er lov og ønsket, men de skal **peke på tekst som faktisk står der**:
`> Margnotat: her settes GVC-perspektivet opp mot GPN-perspektivet i samme avsnitt — det er Akse 3, og det er dette som løfter fra god til beste.`

### 9.3 Nivåfordeling i boka (bindende)

| Kapittel | Nivåer som SKAL finnes |
|---|---|
| 0.2 (kortsvarhåndverket) | Samme kortsvar besvart på E-, C- og A-nivå med margkommentarer |
| 0.3 (langsvarhåndverket) | Samme langsvarsoppgave skissert på E-, C- og A-nivå med margkommentarer på de fire aksene |
| 8.1 / 8.2 / 8.3 (sjangerdriller) | Tre-nivå-momentliste (minimum / god / beste) på hver oppgave |
| 8.5 (L: sårbarhet og «Hans») | A/beste i full tekst + C/god |
| 8.6 (L/KOMP: GVC vs. GPN og utvikling) | A/beste + C/god + **midtnivå-besvarelse (B)** |
| 8.7 (FH: «velg én vending») | A/beste + C/god |

**Midtnivå-besvarelsen (B) i kap. 8.6** er et README-krav: realistisk
førsteårsspråk, litt rotete disposisjon, GVC/GPN-skillet er der men ett av leddene
er tynt, utviklingsdrøftingen kommer men uten kjernebegrepsløft — og faglig god.
Med margnotater om hva som er **BRA NOK** og de 2–3 grepene som skiller den fra A.
Leseren trenger et realistisk sammenligningspunkt, ikke bare polert A og
karikatur-C.

### 9.4 Konklusjonsvariasjon (bindende)

Modellbesvarelsene skal **ikke alle lande på samme kompromissform** («X er et
hensyn, ikke hele svaret»):

- **Kap. 8.6 skal konkludere SKARPT:** A-besvarelsen tar klart parti — at
  GPN-perspektivet gir det mest treffsikre bildet av utviklingseffekten, med
  begrunnelsen utskrevet gjennom verdifangst og oppgradering — og er likevel
  toppnivå. Margnotat: «Forbehold er et verktøy, ikke obligatorisk garnityr. En
  skarp, eksempelforankret konklusjon er en fullgod A-form.»
- **Kap. 8.5 og 8.7** kan lande mer avveiende, men må da begrunne selve
  avveiningen — «det er sammensatt» uten grunner er feil #6 i ny drakt.

### 9.5 Vippe-case (bindende)

Minst én drøftingsoppgave i boka skal ha to fullt forsvarlige landinger. Fasiten
skriver **UT begge lesningene** og merker oppgaven **«(omstridt — begge landinger
forsvarlige)»**. Anbefalt plassering: kap. 4.3 (er gentrifisering byfornyelse
eller fortrengning?) eller kap. 6.1 (styrker eller svekker governance den
demokratiske deltakelsen?). Entydige fasiter hele veien trener aldri håndtering av
ekte faglig ambivalens — og langsvarene er med vilje laget relativt åpne.

---

## 10. Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»; SKAL i førsteutkastet)

- **Kun eksamensrelevant stoff.** «Bør kjenne til»-stoffet (gammelt pensum §7.4,
  push/pull, hybride kulturer, interseksjonalitet, klassisk geopolitikk,
  Eratosthenes/fagets røtter, GIS-teknikk) plasseres SIST i sitt kapittel og
  merkes eksplisitt med sin lave frekvens.
- **HARDT LINJEBRUTT PROSA ER FORBUDT (rendrings-kritisk).** Rendreren gjør HVERT
  enkelt `\n` om til `<br />`. Brødtekst brutt ved ~60 tegn i python-kilden gir
  linjeskift midt i setningene for leseren. Regelen: **ett avsnitt = én lang linje
  i JSON-strengen**, `\n\n` mellom avsnitt, og enkelt `\n` KUN der linjeskiftet
  faktisk er ønsket (deloppgaver, listelinjer, tabellrader, margnotater). Gjelder
  ALLE tekstbærende felter: `content`, `problem`, `solution`, `task`, `hints`.
- **Godt, flytende norsk (UFRAVIKELIG).** Hele setninger, korte avsnitt (2–4
  setninger), aktiv «du»-form. Telegramstil er FORBUDT: «Begrep: relasjonelt rom.
  Kilde: Harvey.» skal være «Relasjonelt rom er Harveys betegnelse på rommet slik
  det konstitueres av relasjoner og nettverk.» Konkret norsk knagg før fagtermen;
  presisjon vinner ved tvil. Engelske fagtermer får norsk knagg først, termen i
  parentes: «stedsfølelse (sense of place)», «arena (locale)», «oppgradering
  (upgrading)», «verdifangst (value capture)», «innveving (embeddedness)».
- **Ingen uforklart sjargong.** Fagstoffet er nybegynnervennlig — det er
  METAspråket som må ryddes. Sjangerkodene K, L, KOMP, CASE og FH, feilkodene
  #1–#10 og all karaktersjargong («C-stoff», «A-markør», «beste») forklares i
  klarspråk ved FØRSTE bruk **per kapittel**.
- **Hver oppgave synlig eksamensforankret** med sjanger-tag i ledende parentes:
  `(Eksamenssjanger kortsvar — Del 1; slike oppgaver ber nesten alltid om et eksempel.)`
  Sjangerkoden skrives fullt ut ved første bruk per kapittel. Vanskelighetsgraden
  skrives ALDRI inn i `task` (den ligger i `difficulty`).
- **Deloppgaver på egen linje med fet merking:** `…\n\n**a)** …\n**b)** …`. ALDRI
  a) b) c) bak hverandre i løpende tekst. Små bokstaver, aldri A)/[A]. Ikke bruk
  `subTasks`.
- **Inline-nummerering** `(1) … (2) … (3) …` med tre eller flere påfølgende settes
  på egne linjer. Gjelder særlig de tre romforståelsene, de tre stedsbetydningene,
  de tre planleggingsfasene, de tre oppgraderingstypene og de fire
  omstillingsdiskursene — de skal uansett stå som egne linjer, i rekkefølge.
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. 1.2](/sgo1001/sgo1001-1-2)`. Død «se kapittel X.Y»-tekst
  er FORBUDT. Aldri lenker i `title`-felt.
- **Karakter-realisme:** Del 0 sier eksplisitt at **C er en god og vanlig
  karakter**, særlig i et innføringsemne der mange er i sitt første semester.
  Formuleringen **«Prioritet: perfekt» er FORBUDT** — skriv «høyeste prioritet».
  Prioritetsklassene fra skjelettet oversettes slik: *perfekt* → **høyeste
  prioritet**, *kunne* → **kunne**, *kjenne* → **bør kjenne til**. «Gapet til A»
  rammes inn som **oppgraderingsmeny**, ikke mangelliste. Eksamen er A–F, så
  «bestått-på-marginen»-varianten er ikke påkrevd — men boka SKAL minst ett sted
  vise et kortsvar som så vidt når minimumskravet, med konkret oppgraderingsmeny
  (kap. 0.2, E-versjonen).
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter HVER prøvefasit — bruk
  rubrikkene i §6.3. I hvert temakapittel: minst én **lett innstegsoppgave** tidlig
  (`difficulty: "lett"`, ren gjengivelse med egne ord, vennlig fasit) før første
  fulle eksamenssjanger.
- **Hverdagsanker + verdens-caser:** abstrakte kjernetemaer åpner med et konkret
  anker FØR apparatet (rom: at «nærme» betyr noe annet i reisetid enn i kilometer;
  skala: at samme sak diskuteres i kommunestyret og i FN; sted: forskjellen på en
  adresse og et hjem). Ankeret kobles alltid tilbake til et pensumnært eksempel
  (§7.1). Eksemplene er verdens-caser — ALDRI metaeksempler av typen «en
  medstudent skriver …».
- **Erfarings-bro:** mange lesere har erfaring fra egen kommune, egen bydel, eget
  arbeidsliv eller egen migrasjonshistorie. Legg en kort `tip`-boks i kap. 0.3 som
  viser KONVERTERINGEN: (1) start i begrepet, (2) bruk erfaringen som ILLUSTRASJON
  av begrepet, aldri som belegg alene, (3) koble tilbake til drøftingsaksen og til
  et pensumnært eksempel. Å bare advare mot «synsing» uten å vise konverteringen
  skyver bort leserne som har mest materiale.
- **Difficulty-spredning + kald bank:** boka skal ha genuint krevende oppgaver
  merket `difficulty: "vanskelig"` (og «(krevende)» i oppgaveteksten der det
  hjelper), ikke alt på middels. Én merket **kald bank** i kap. 8.3 (§5.3).
- **Hint på alle oppgaver:** hvert `exercise` har utfylte `hints`. Første hint =
  hvilket begrep, hvilken teoretiker eller hvilken distinksjon oppgaven krever
  («Start i skillet mellom målestokk og nivåhierarki — hvilken av dem spør
  oppgaven om?») — **ALDRI konklusjonen**. Eneste unntak er den kalde banken.
- **Stokket flervalg og varierte fasit-mønstre:** statiske flervalg i
  prøve-`collapsible`-er har stokkede fasit-bokstaver (ALDRI «alle a»), og
  prøve-tipen sier hvor flervalget bor. Gjelder ALLE ensartede fasitlister, også
  «hvilken feil begår kandidaten»-drillen i kap. 8.4 — aldri samme feilkode som
  fasit to ganger på rad. Verifiseres med `sjekk-fasitfordeling.py` (terskel 45 %).
- **Distraktorer straffer aldri grundig lesing:** en distraktor gjengir ALDRI bokas
  egen presisering som «galt» svar. Ligger en distraktor nær sannheten (typisk:
  «relativt rom er rommet konstituert av relasjoner», «urbanisering er byvekst»,
  «GPN er en nyere betegnelse på GVC»), skal `explanation`/fasitkommentaren
  forklare eksplisitt hvorfor den ikke holder.
- **Signal-/hintbokser ETTER oppgaven:** en boks som varsler hva en drilloppgave
  tester («her ligger relativt/relasjonelt-fella») plasseres ETTER oppgaven, aldri
  foran.
- **Frekvenstall = skjelettets tall.** Ingen egne opptellinger, ingen «N av M»
  uten belegg i skjelettet (§6.1).
- **Begrepsbank = oppslagsverk:** hvert pensumkart og hvert eksempellager åpner med
  standardnotisen: «Begrepsbanken er flashcard-/repetisjonsstoff — den gjentar det
  du nettopp har lest. Hopp trygt over ved førstegangslesing; tidsanslaget for
  kapitlet gjelder kjernestoffet.» `definition`-blokker slettes ALDRI for å
  «rydde» — de er flashcard-kilden.
- **Øktmerking:** alle kapitler med `estimatedMinutes > 45` — altså 0.2, 0.3, 1.2,
  1.3, 1.4, 2.1, 2.2, 2.3, 3.1, 3.2, 3.3, 4.1, 4.2, 4.3, 5.1, 5.2, 5.3, 6.1, 6.2,
  7.1, 7.2, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6 og 8.7 — har tidsanslag per løkke
  («Løkke 3 — relasjonelt rom og Suez (~15 min)») eller eksplisitte «— naturlig
  pausepunkt —»-markører. Lange modellbesvarelser har pausepunkt mellom
  hovedseksjonene. Kun 0.1 og 1.1 (45 min) er unntatt.
- **Tidsbudsjett-konsistens:** der en oppgaves deklarerte tid avviker fra summen av
  deltidene, forklares differansen (§6.5). «Lite tid?»-boksen sier eksplisitt at
  kapitlenes tidsanslag er **LESEtid**, og at den som skriver besvarelser for hånd
  bør legge på ca. ×1,5.

### 10.1 Del 0-pakken (alt dette SKAL finnes i kap. 0.1, der ikke annet er sagt)

- **«Slik leser du denne boka»-orienteringsboks** (type `text` eller `tip` —
  **ALDRI `definition`**, det ville endret flashcard-kvoten) med: karakterskalaen
  A–F og sensors tre-nivå-gradering (minimum → god → beste), hva «C-stoff» og
  «A-markør» betyr, en kompakt liste over sjangerkodene K, L, KOMP, CASE og FH
  skrevet fullt ut, og at typiske feil har et samlet register (#1–#10) med eget
  kapittel (8.4).
- **«Lite tid?»-boks** (`tip`): hurtigrute for 3–5 dager (kapittelrekkefølge +
  timeanslag; prioriter Del 1 og de fem toppfamiliene, ikke favorittene) og ukeplan
  bygget av summerte `estimatedMinutes`. **Summen av de 30 kapitlene er 1 680
  minutter ≈ 28 timer lesetid** — bruk det telte tallet, ikke skjelettets avrundede
  «~1 690».
- **Kildenote for frekvens-empirien** — ordlyden i §6.1, aldri utvidet.
- **Sjangerkort på ÉN side** som ER kortet: sjanger (K, L, KOMP, CASE, FH) → én
  linjes oppskrift → plassering (Del 1 eller Del 2) og tidsbudsjett → vanligste
  feil. Ikke en lenkeliste.
- **Deltidsrute** 8–10 uker (~4–6 t/uke) med temadelprøvene fordelt underveis og
  kortsvars-/langsvarsdrillen + modellbesvarelsene de siste to ukene — aldri
  stablet i siste uke.
- **«Lese mye, skrive lite»-boks:** legitim rute for lese-øveren (les oppgaven →
  formuler svaret mentalt i én setning → les modellbesvarelsen som sensor) +
  minimumsrådet: skriv minst ÉN full besvarelse på tid. Fire timers skriving er en
  fysisk ferdighet, også på tastatur.
- **Bokas samlede oppslagskort** (DNA-drøftings «hvem eier hva»-kort): én
  `collapsible` med ren, printbar tabell **teoretiker → begrepet de eier →
  distinksjonen → caset som belegger det → hjemkapittel (lenke)** over alle
  begrepene i §7.2 og §12.6. Fullversjonen bor i temakapitlenes pensumkart; kortet
  i 0.1 er den glemsomme leserens gjenopptaksverktøy.
- **Kjernebegrepstriaden-kortet** — rom (Harvey), sted (Agnew/Cresswell), skala
  (Herod) som ett oppslag, med de tre mantraene (§6.6).
- **Eksamensformen og vektingen** forklart som bokas strategiske hovedpoeng
  (§6.2), med et nyskrevet miniatyrsett (4 kortsvar + 3 langsvar) som viser hvordan
  man velger tre og to.

---

## 11. Kvotekontrakt (AUTORITATIV — bindende total, aldri overstyr)

Verifisert mot skjelettets kvotesammendrag: alle deltotaler og totalene summerer.

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1–0.3 | 44 | 28 | 0 (dekkes av sjangerkapitlene) |
| 1 | 1.1–1.4 | 86 | 94 | 4 |
| 2 | 2.1–2.3 | 70 | 74 | 4 |
| 3 | 3.1–3.3 | 74 | 78 | 4 |
| 4 | 4.1–4.3 | 72 | 76 | 4 |
| 5 | 5.1–5.3 | 70 | 76 | 4 |
| 6 | 6.1–6.2 | 50 | 54 | 4 |
| 7 | 7.1–7.2 | 50 | 50 | 4 |
| 8 | 8.1–8.7 | 94 | 55 | 0 (sjanger + modellsvar) |
| **Sum** | **30 kap.** | **610 ✓ (≥500)** | **585 ✓ (≥500)** | **28** |

Per kapittel (quiz · flashcards · estimatedMinutes) — **minimum, aldri under;
overskyting er lov**:

| Kap. | Q · F · min | Kap. | Q · F · min | Kap. | Q · F · min |
|---|---|---|---|---|---|
| 0.1 | 12 · 8 · 45 | 3.1 | 22 · 22 · 55 | 6.1 | 26 · 28 · 60 |
| 0.2 | 16 · 10 · 55 | 3.2 | 26 · 28 · 65 | 6.2 | 24 · 26 · 60 |
| 0.3 | 16 · 10 · 65 | 3.3 | 26 · 28 · 60 | 7.1 | 26 · 26 · 60 |
| 1.1 | 18 · 20 · 45 | 4.1 | 24 · 24 · 55 | 7.2 | 24 · 24 · 50 |
| 1.2 | 24 · 26 · 65 | 4.2 | 24 · 26 · 60 | 8.1 | 20 · 12 · 55 |
| 1.3 | 22 · 24 · 55 | 4.3 | 24 · 26 · 60 | 8.2 | 18 · 10 · 60 |
| 1.4 | 22 · 24 · 55 | 5.1 | 26 · 28 · 65 | 8.3 | 16 · 10 · 55 |
| 2.1 | 24 · 26 · 55 | 5.2 | 22 · 24 · 55 | 8.4 | 16 · 8 · 50 |
| 2.2 | 24 · 26 · 55 | 5.3 | 22 · 24 · 55 | 8.5 | 8 · 5 · 50 |
| 2.3 | 22 · 22 · 55 | | | 8.6 | 8 · 5 · 50 |
| | | | | 8.7 | 8 · 5 · 50 |

**Bindende total: quiz 610 · flashcards 585 · 1 680 minutter.** Flashcards telles
som **toppnivå `definition`-blokker med `title`**. Prøvekapitler har ingen kvote
(ingen quiz, ingen begrepsbank).

### 11.1 Quiz-filformat

`src/lib/data/quiz-staging/sgo1001-<del>-<nr>.quiz.json`:

```json
[{ "question": "…", "options": ["riktig", "distraktor", "distraktor", "distraktor"], "explanation": "…" }]
```

Nøyaktig **4 alternativer**, `options[0]` **ALLTID** riktig. **Runtime stokker
rekkefølgen**, så `explanation` skal ALDRI si «alternativ to», «det tredje
alternativet», «svaret over» eller «det siste alternativet» — gjenta innholdet i
stedet: «Riktig svar er at relasjonelt rom er rommet konstituert av relasjoner og
nettverk …». **Posisjonsreferanser er en hard produkteierregel** (verifiseres med
`sjekk-alternativref.py`; 483 slike feil er funnet i live bøker). Ingen duplikate
alternativer. `explanation` på 2–4 setninger sier hvorfor fasiten er riktig OG
hvilken felle hver nære distraktor tester.

**Distraktor-kalibrering** — nabobegrep-distraktorer fra skjelettets quiz-profil,
aldri tullesvar: absolutt/relativt/relasjonelt rom · målestokk/nivåhierarki ·
location/locale/sense of place · GVC/GPN · urbanisering/byvekst/urbanisme ·
government/governance · medborgerskap/statsborgerskap · idiografisk/nomotetisk ·
induktiv/deduktiv · økonomiske/sosio-kulturelle gentrifiseringsforklaringer ·
sårbarhet/tilpasningskapasitet/eksponering · bruksverdi/bytteverdi · inviterte/
oppfunne rom. I tillegg: «hvem eier begrepet»-koblinger (Harvey vs. Jessop m.fl.,
Agnew vs. Cresswell, Gereffi vs. Coe/Yeung, Semple/Huntington, Haraway, Miraftab),
«hvilket case illustrerer X»-spørsmål og «hvilken feil begår kandidaten»-
gjenkjenning.

**INGEN LENGDE-TELL (hard produkteierregel):** fasiten skal IKKE være det lengste
eller mest detaljerte alternativet. Alle fire alternativer skal ha jevn lengde og
presisjonsgrad — en leser som «velger det lengste» skal treffe ~25 %, ikke 77 %.
Skriv distraktorene like fyldige som fasiten; trim heller fasiten. Verifiseres med
`node scripts/hoyskolebok/quiz-lengdesjekk.mjs` etter wiring.

### 11.2 Flashcard-profil

Tre korttyper i om lag lik andel (skjelettets profil):

1. **Begrepskort med avsender og distinksjon** — «hva er X hos Y, og hva skiller
   det fra nabobegrepet Z»: absolutt vs. relasjonelt rom (Harvey) · målestokk vs.
   nivåhierarki (Herod) · GVC vs. GPN (Gereffi vs. Coe/Yeung) · gentrifisering med
   økonomiske vs. sosio-kulturelle forklaringer · government vs. governance ·
   medborgerskap vs. statsborgerskap.
2. **Eksempelkort** — «case → begrep → hva det viser»: iPhone → GVC/oppgradering ·
   «Hans» → sårbarhet/tilpasningskapasitet · Oslo → byplanleggingsfaser ·
   Grünerløkka → gentrifisering · Equinor → statlig eierskap/flernivåstyring ·
   Suez → relasjonelt rom · Schelling → boligsegregasjon.
3. **Faghistorie-/forankringskort** — «begrep → teoretiker → kjernepoeng»:
   idiografisk/nomotetisk · naturdeterminisme (Semple/Huntington) · de tre
   vendingene · situert kunnskap (Haraway) · strukturering (Giddens) · inviterte/
   oppfunne rom (Miraftab) · natur→ressurs (Bridge) · klebrige steder (Markusen).

Formatet speiler kortsvarets kjerne: presise «hva er X hos Y, og hvilket eksempel
belegger det»-kort — nøyaktig presisjonen sensor måler.

---

## 12. Fagspesifikk stil (ufravikelig for SGO1001 — fra skjelettets §1–§2)

### 12.1 Notasjonsstandard

- **Norsk bokmål. Ingen matematisk notasjon, ingen `$…$` noe sted.** Boka er
  symbolfri, og kravet om «Symbol- og formelliste» er dermed ikke relevant
  (README-unntaket for symbolfrie fag). Hvert temakapittel har `collapsible`
  **«Pensumkart for kapitlet»** i stedet.
- **De to stedene faget nærmer seg notasjon skrives i ORD:** målestokk skrives som
  ren tekst («1:50 000»), og **urbaniseringsraten forklares som «andelen av
  totalbefolkningen som bor i byer»** — ALDRI som brøk, indeks eller LaTeX. Skal en
  liten begrepsliste likevel gi mening (GVC-styringstypologien, de to
  skalaforståelsene), lages den som markdown-tabell inne i pensumkartet, aldri som
  formelliste.
- **Dollartegn som ikke er matte MÅ escapes som `\\$`.** Et enkelt bart `$` i en
  streng kutter resten av teksten til rå LaTeX-kilde for leseren. Oddetall `$` i
  samme tekstfelt felles av `sjekk-latex.py`.
- **Verktitler** skrives i kursiv i brødtekst og med «anførselstegn» i
  `title`-felter. **Aldri sidetall, aldri tekstboks-numre.**
- **Skrivemåter (grep-konsistens):** «absolutt rom» / «relativt rom» / «relasjonelt
  rom» · «TPSN» (skrevet ut ved første bruk per kapittel: territorium–sted–skala–
  nettverk) · «location» / «locale» / «sense of place» (engelsk, i anførselstegn
  eller kursiv ved første bruk, med norsk knagg) · «skala som målestokk» / «skala
  som nivåhierarki» · «GVC» og «GPN» (skrevet ut ved første bruk per kapittel:
  globale verdikjeder / globale produksjonsnettverk) · «oppgradering» ·
  «gentrifisering» · «boligsegregasjon» · «urbanisering» / «byvekst» / «urbanisme»
  · «planetary urbanism» (engelsk, i anførselstegn) · «hagebyen» ·
  «entreprenørialisme» / «ny-rasjonalisme» · «sårbarhet» /
  «tilpasningskapasitet» · «dobbel eksponering» · «ressursforbannelse» ·
  «government» → «governance» · «flernivåstyring» · «medborgerskap» ·
  «identitetspolitikk» · «politisk aktørskap» · «inviterte» / «oppfunne rom» ·
  «mobilitet» · «transnasjonalisme» · «diskursiv representasjon» ·
  «idiografisk» / «nomotetisk» · «naturdeterminisme» · «situert kunnskap» ·
  «global sør» / «global nord» (små bokstaver).
- Engelske fagtermer får norsk knagg først, termen i parentes ved første bruk per
  kapittel.

### 12.2 Sjangerkoder (introduseres i kap. 0.1, skrives fullt ut ved første bruk per kapittel)

**K** kortsvar — begrepsdefinisjon med eksempel (Del 1, svar på 3 av 4, ~200 ord,
~15–20 min per svar) · **L** langsvar — «redegjør for X og drøft/anvend» (Del 2,
2 av 3, maks 1000 ord; må ha BÅDE definisjons- og diskusjonskomponent) · **KOMP**
komparativ oppgave — «sammenlign X og Y», med belegg for *begge* ledd · **CASE**
anvendelses-/caseoppgave — «bruk begrepene/vedlegget til å analysere …», vurdert
på begrepsanvendelse, ikke på empirisk detalj · **FH** åpen faghistorie-/
påstandsoppgave — «velg én vending og gjør rede for …», «drøft påstanden at …».

*(Historisk sjanger: flervalg, kun 2016–2020. Ikke i dagens format — men
H2020-settets 20 spørsmål er en ferdig quiz-/flashcard-kilde og forklarer hvorfor
boka har flervalgsdriller i prøvene.)*

### 12.3 Feilkodene #1–#10 (glosses ved første bruk PER KAPITTEL)

| # | Feil | Forebygges i |
|---|---|---|
| #1 | Definisjon uten eksempel — hyppigste enkeltfeil; kan aldri nå toppen | alle temakapitler, 0.2, 8.1, 8.4 |
| #2 | Rent referat/gjengivelse uten drøfting (særlig langsvar; typisk C) | 0.3, 8.2, 8.4, 8.5 |
| #3 | Flat definisjon som ikke treffer pensumbruken (rom uten Harveys tredeling; skala uten nivå-skillet; GPN uten makt; gentrifisering med bare én forklaringstype) | 1.2–1.4, 2.1, 3.3, 4.3, 8.1 |
| #4 | Ensidig komparasjon — bare det ene leddet beskrevet | 3.3, 4.2, 8.3, 8.6 |
| #5 | Ramse opp begreper uten å velge og stå for dem (helgardering) | 0.3, 2.2, 5.3, 8.2, 8.7 |
| #6 | Manglende grep i drøftingen — ingen analytisk tråd | 0.3, 8.2, 8.4 |
| #7 | Klart irrelevante momenter — trekker eksplisitt ned | 0.2, 8.1, 8.3 |
| #8 | Ikke koble til kjernebegrepene når det er naturlig | Del 3–7 (Grep-markøren), 0.3, 8.4 |
| #9 | Empirisk briljering på bekostning av begrepsforståelse (i CASE) | 2.3, 3.2, 8.3 |
| #10 | Ubalansert besvarelse — sterk på ett svar, tynn på resten | 0.1, 8.4 |

**Registeret har nøyaktig ti koder.** Ikke innfør en ellevte noe sted.

### 12.4 Prioritetsklasser

**høyeste prioritet** (skjelettets «perfekt») · **kunne** · **bør kjenne til**.
Skriv ALDRI «Prioritet: perfekt».

### 12.5 Forbudt-termer og prosaregler (grep-sjekkes)

**Hard port** — `sjekk-bok.py`-regexen skal gi **0 treff** (kjøres
case-insensitivt; unntar kap. 0.1, som skal beskrive kildesituasjonen):

```
Prioritet: perfekt|en A-besvarelse ville|ville ha drøftet|studentbesvarelse|offisiell fasit|offisielle løsningsforslag|løsningsforslag fra UiO|naturfolk|usivilisert|de innfødte|underutviklede land|\bs\. ?\d+
```

```bash
python3 scripts/hoyskolebok/sjekk-bok.py sgo1001 "Prioritet: perfekt|en A-besvarelse ville|ville ha drøftet|studentbesvarelse|offisiell fasit|offisielle løsningsforslag|løsningsforslag fra UiO|naturfolk|usivilisert|de innfødte|underutviklede land|\bs\. ?\d+"
```

Begrunnelse per term: `Prioritet: perfekt` er plattformforbud (karakter-realisme) ·
meta-fasit-uttrykkene er forbudt fordi drøftelsen skal skrives ut ·
«studentbesvarelse» er usant (alle modellbesvarelser er nyskrevne — bruk
formuleringen «ikke en ekte kandidatbesvarelse» i ærlighetslinjen) ·
fasit-/løsningsforslagspåstandene er usanne (ingen finnes i arkivet) ·
«naturfolk», «usivilisert», «de innfødte» og «underutviklede land» er
nedvurderende og faglig utdaterte (§8.1) · `s. 12`-mønsteret fanger sidetall, som
ikke er attestert.

**Prosaregler** — ord som SKAL kunne stå, men bare i en ramme
(`sjekk-prosaregel.py`, ±200 tegn rundt treffet):

```bash
python3 scripts/hoyskolebok/sjekk-prosaregel.py sgo1001 \
    "primitiv" "faghistor|evolusjonis|forlatt|utdatert|kritis|boktittel|originaltittel|verkets tittel|avvist"

python3 scripts/hoyskolebok/sjekk-prosaregel.py sgo1001 \
    "den tredje verden|u-land|utviklingsland" "faghistor|gammelt pensum|eldre term|avvist|moderniseringsteori|anførselstegn|global sør"

python3 scripts/hoyskolebok/sjekk-prosaregel.py sgo1001 \
    "the Other" "postkolonial|konstruksjon|representasjon|diskurs|anførselstegn"

python3 scripts/hoyskolebok/sjekk-prosaregel.py sgo1001 \
    "sensorveiledningen" "H2018|V2019|H2020|H2021|H2022|H2023|H2024|H2025"
```

Den siste er **sannferdighetsporten**: entall «sensorveiledningen» er kun riktig om
ÉN navngitt veiledning. Om korpuset skriver du «de åtte sensorveiledningene»
(§6.1).

### 12.6 Påkrevd terminologi (skal FINNES)

«absolutt rom» · «relativt rom» · «relasjonelt rom» · «TPSN» · «location» ·
«locale» · «sense of place» · «skala som målestokk» · «nivåhierarki» · «sosialt
konstruert skala» · «geografisk forestillingsevne» · «idiografisk» ·
«nomotetisk» · «naturdeterminisme» · «situert kunnskap» · «økonomisk
globalisering» · «internasjonal arbeidsdeling» · «FDI» · «GVC» · «GPN» ·
«styringsformer» · «oppgradering» · «verdiskaping» · «verdifangst» ·
«urbanisering» · «byvekst» · «urbanisme» · «planetary urbanism» ·
«agglomerasjonsfordeler» · «entreprenørialisme» · «ny-rasjonalisme» · «hagebyen» ·
«gentrifisering» · «boligsegregasjon» · «sårbarhet» · «tilpasningskapasitet» ·
«eksponering» · «dobbel eksponering» · «ressursforbannelse» · «omstilling» ·
«sosio-tekniske systemer» · «government» · «governance» · «flernivåstyring» ·
«statlig eierskap» · «politisk aktørskap» · «strukturering» · «medborgerskap» ·
«identitetspolitikk» · «inviterte rom» · «oppfunne rom» · «mobilitet» ·
«transnasjonalisme» · «absolutt fattigdom» · «relativ fattigdom» · «deprivasjon» ·
«diskursiv representasjon» · «stedsrepresentasjoner» · «global sør» ·
«definisjon og eksempel» · «redegjør og drøft» · «minimum» / «god» / «beste».

**⚠ Utgave-sensitivitet.** Følgende er **ikke stabile ankere** og presenteres som
*eksempler*, ikke som faste pensumpunkter: konkrete tekstboks-referanser, roterende
artikler, diskursnavnene i firfeltstabellen `(verifiser diskursnavn)`, og de
aktuelle caseene (Suez, «Hans», Trump, regionreformen). Rammen er stabil; empirien
er utskiftbar. **Før temakapitlene skrives: sjekk gjeldende pensumliste** (§7.4).

---

## 13. Kryssbok-lenker (verifisert 31. juli 2026 — alle målfilene finnes i `src/lib/data/chapters/` og i kursmetadataen)

SGO1001 er den første samfunnsgeografiboka i systemet. Tre bygde bøker har
relevant forkunnskapsstoff: VGS-boka `geografi` (Geografi VG1), VGS-boka
`sosiologi` (Sosiologi og sosialantropologi) og høyskolebøkene `exphil03`/
`stv1100` (drøftingshåndverk i andre fag). Bruk NØYAKTIG disse titlene og stiene:

| Kapittel | Lenke |
|---|---|
| 1.1 | `[Hva er geografi?](/geografi/geografi-1-1-1)` |
| 2.3 | `[Kart og kartprojeksjoner](/geografi/geografi-1-1-2)`, `[GIS og digitale kart](/geografi/geografi-1-1-3)`, `[Kvalitative metoder](/sosiologi/sosiologi-6-1)`, `[Kvantitative metoder](/sosiologi/sosiologi-6-2)` |
| 3.1 | `[Globalisering – økonomi og handel](/geografi/geografi-1-7-1)`, `[Globalisering – prosesser og perspektiver](/sosiologi/sosiologi-5-3)` |
| 4.1 | `[Urbanisering – drivkrefter og prosesser](/geografi/geografi-1-6-1)`, `[Megabyer og slum](/geografi/geografi-1-6-3)` |
| 4.2 | `[Byers funksjon og struktur](/geografi/geografi-1-6-2)`, `[Bærekraftig byutvikling](/geografi/geografi-1-6-4)` |
| 5.1 | `[Naturkatastrofer og sårbarhet](/geografi/geografi-1-8-4)`, `[Klimapolitikk og klimatilpasning](/geografi/geografi-1-3-7)` |
| 5.2 | `[Konflikter om ressurser](/geografi/geografi-1-8-2)`, `[Bærekraftig ressursforvaltning](/geografi/geografi-1-4-6)` |
| 6.1 | `[Makt – teorier og perspektiver](/sosiologi/sosiologi-4-3)` |
| 6.2 | `[Demokrati og medborgerskap](/sosiologi/sosiologi-4-4)` |
| 7.1 | `[Migrasjon – årsaker og typer](/geografi/geografi-1-5-3)`, `[Utvikling og ulikhet](/geografi/geografi-1-7-3)` |
| 7.2 | `[Kultur – begreper og perspektiver](/sosiologi/sosiologi-2-3)`, `[Kulturell globalisering](/geografi/geografi-1-7-2)` |
| 0.3 | `[Drøftingshåndverket og sensorens fem krav](/exphil03/exphil03-0-2)`, `[Sammenligning, anvendelse og drøftingshybriden](/stv1100/stv1100-0-3)` (begge valgfrie — beslektet drøftingshåndverk i andre fag; presiser at kravene der er de fagenes egne, ikke SGO1001s fire vurderingsakser) |

Kryssbok-lenkene til `geografi` og `sosiologi` rammes ALLTID inn som «repetisjon
fra videregående — dekker grunnideen, men SGO1001 krever pensumforankret
begrepspresisjon og et eksempel i tillegg». En VGS-lenke skal aldri fremstå som
pensum i emnet. Merk særlig at VGS-geografien bruker et **annet begrepsapparat**
enn SGO1001 (naturgeografisk tyngdepunkt, demografisk overgang) — si det der
lenken settes.

**Ingen andre kryssbok-lenker.** Vil du legge til en lenke som ikke står i
tabellen, kjør `ls src/lib/data/chapters/<id>.json` først — `sjekk-bok.py` avviser
døde lenker, og en død lenke i en live bok er en synlig feil for leseren.

Interne lenker (innad i sgo1001) skrives som
`[kap. 1.2](/sgo1001/sgo1001-1-2)` og skal kun peke på kapitler som allerede er
bygget når boka gates. Bygg i skjelettets rekkefølge (§6 i skjelettet): Del 0 → 1 →
2 → 3 → 4 → 5 → 6 → 7 → 8 → prøver. Merk at 1.2 må stå ferdig FØR Del 3, og 1.4 FØR
Del 4 og Del 6.

---

## 14. Tekniske feller (les før første `json.dump`)

1. **JSON-gyldighet.** Bruk `json.dump`. Faget er fullt av anførselstegn og
   engelske termer i anførselstegn — én uescapet anførsel blokkerer hele prebuild
   for hele plattformen.
2. **Hardt linjebrutt prosa er FORBUDT.** Rendreren gjør hvert enkelt `\n` om til
   `<br />`. Ett avsnitt = én lang linje; `\n\n` mellom avsnitt; enkelt `\n` kun
   der linjeskiftet er ønsket. Gjelder `content`, `problem`, `solution`, `task` og
   `hints`. Ikke bruk trippelfnutt-strenger med innrykk eller `textwrap` på
   brødtekst.
3. **LaTeX i JSON krever dobbel backslash.** Boka skal ikke ha LaTeX i det hele
   tatt (§12.1), men regelen gjelder om noe skulle snike seg inn: i python-kilden
   skriver du `"$\\alpha$"` (eller `r"$\alpha$"`).
4. **Bart `$` er forbudt** utenfor matte — skriv `\\$`. Oddetall `$` i samme
   tekstfelt = avkuttet tekst = rå kildekode synlig for leseren.
5. **`chapterNumber` alltid del-basert** («4.3»), aldri lineær («16»).
   Prøvekapitler: «4.P».
6. **Ingen tom `collapsible`.** Feltet heter `content` og skal inneholde blokker.
   En `text`-nøkkel eller `[]` rendrer som en tom boks.
7. **Unike blokk-id-er** innen kapitlet.
8. **Flashcards kommer KUN fra toppnivå `definition` med `title`.** Flytter du en
   definisjon inn i en `collapsible` for å «rydde», forsvinner kortet fra kvoten.
9. **`(verifiser)`-markører** skrives i den literale formen `(verifiser)` (§7.4) og
   løses i fase 6 FØR `sjekk-bok.py` kjøres siste gang.
10. **Ingen `subTasks`, `answer`, `solutionVideo`, `allowsUpload`,
    `allowsCanvasDrawing`** i `exercise`.
11. **Quiz-forklaringer refererer aldri til alternativets plassering** — runtime
    stokker (§11.1).
12. **Ikke bruk `grep -o` med `.{0,N}`-kontekst** mot kapittelfilene: de er kompakt
    JSON på én linje, og mønsteret er kvadratisk (17 GB RAM på byggemaskinen
    25. juli 2026). Bruk `sjekk-prosaregel.py`, som leser JSON-strukturen.

---

## 15. Opphavsrett (ufravikelig)

ALLE oppgaver, caser, vedlegg, «sitatlignende» passasjer og modellbesvarelser er
**NYSKREVNE** — eksamenssjangrene er malen, ALDRI originaloppgavene. Ingen
formuleringer fra UiO-settene eller fra de åtte sensorveiledningene gjengis
ordrett, heller ikke i omskrevet-nær form. Oppgavesettene og veiledningene er
**mønster, aldri kopikilde**.

Pensumlitteraturen (grunnboka i samfunnsgeografi og forfatterne i §7.4)
**refereres og parafraseres** — aldri siteres i lengde, aldri med sidetall og
aldri med tekstboks-numre. De klassiske begrepene er faglig allmenneie og forklares
under sine egne navn; det er oppgave- og case-VARIANTENE som skal ha egne tall,
aktører og kontekster.

**Tillatte teoretikere/verk er uttømmende gitt av skjelettets begrepskontrakter**
(§7.4). Navn utenfor denne lista skal ikke innføres som pensumankere. **Ingen
oppdiktede referanser, verk, teoretikere, årstall eller tall.** Referanser du er
usikker på merkes `(verifiser)` og løses i fase 6.

Boka fremstiller seg ALDRI som offisiell, godkjent eller UiO-tilknyttet, og lover
ALDRI et eksamensutfall. (Uavhengighetsdeklarasjonen vises automatisk av
plattformen for `level: 'Høyskole'` — se README «Juridiske deklarasjoner».)

---

## 16. Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json; json.load(open('…'))"` på HVER fil du har skrevet.
2. **Kvotetelling** mot tabellen i §11 (toppnivå `definition`-blokker med `title`
   + antall quiz-spørsmål) — minimum, aldri under.
3. **Forbudt-termer-grep = 0** (regexen i §12.5), og de fire prosareglene grønne.
4. **Kryssbok- og internlenker** peker på eksisterende filer (§13).
5. **Læringsløkke:** `content[]` veksler teori → eksempel → oppgave i løkker med
   `exercise`-blokker INLINE. Unntak: prøve-, sjanger- og
   modellbesvarelseskapitler.
6. **Forkunnskapsdekning:** gå gjennom HVER `exercise` og bekreft at den kun hviler
   på stoff introdusert tidligere i kapitlet eller i en referert forkunnskap —
   ingen usett teoretiker, begrep eller case.
7. **Nybegynner-inngang:** alle sjangerkoder (K, L, KOMP, CASE, FH), feilkoder
   (#1–#10) og karakterbokstaver forklart ved første bruk PER KAPITTEL; ingen kald
   kode i `competenceGoals` eller i første tekstboks; Del 0 har «Slik leser du
   denne boka»-boksen (type `text`/`tip`, ALDRI `definition`) og hele Del 0-pakken
   (§10.1).
8. **Eksamenskontrakten:** hver `example.solution`, hver `exercise.solution` og hver
   prøvefasit viser den strukturen instruksjonsverbet krever (§6.4), og
   drøftingsfasiter har må-punkter / pluss-punkter / feller + tre-nivå-momentliste.
   En fasit som bare gjengir begrepet er en byggefeil (feil #1/#2).
9. **Eksempelkravet (§7):** hvert teoretisk poeng har minst ett konkret eksempel
   (hva/hvor + hva det viser); hvert temakapittel har «Eksempellager»-blokken;
   ingen eksempelløs definisjon i modellsvarene; alle usikre detaljer merket
   `(verifiser)` i literal form.
10. **Begrepsforankring (§7.3):** ingen av feiltilskrivningene i tabellen
    forekommer; distinksjonene (rom-triaden, skala, sted, GVC/GPN, urbanisering/
    byvekst, government/governance, medborgerskap/statsborgerskap) er utskrevet
    der begrepene innføres.
11. **Kjernebegrepsløftet (§6.6):** hvert temakapittel i Del 3–7 har `tip`
    **Grep-markør** med kjernebegrepsaksen; A-nivået i modellsvarene bruker løftet;
    C-versjonene demonstrerer feil #8.
12. **Definisjon + drøfting i langsvar:** hvert L-modellsvar og hver L-fasit har
    BÅDE en definisjons-/redegjørelseskomponent OG en drøftings-/
    anvendelseskomponent; C-versjonene demonstrerer feil #2.
13. **Normativ varsomhet (§8):** ingen forbudte betegnelser utenfor de tre
    rammene; «global sør/nord» brukt konsekvent; caser tidfestet og stedfestet;
    politisk omstridte temaer fremstilt uten partisk landing.
14. **Modellbesvarelser:** ærlig merket som nyskrevne; C er en C; midtnivå-B finnes
    i 8.6; kap. 8.6 konkluderer skarpt; minst ett vippe-case merket «(omstridt —
    begge landinger forsvarlige)»; meta-fasit-grep = 0.
15. **Pensumbrudd-scope (§7.4):** gammelt-pensum-begreper opptrer kun som merket
    faghistorisk bakteppe, aldri som kjernestoff; pensumlista er sjekket før
    temakapitlene.
16. **Kildepåstander (§6.1):** hver omtale av grunnlaget sier **34 eksamenssett** og
    **8 sensorveiledninger**; ingen påstand om løsningsforslag eller fasit; ingen
    egne frekvenstall; hver innsnevring til «dagens form» oppgir semestrene.
17. **Prøve-flervalg:** fasitmønsteret varierer (aldri «alle a»); prøve-tipen sier
    hvor flervalget bor; selvdiagnose (☐) etter hver fasit.
18. **hints** utfylt på alle `exercise` unntatt den merkede kalde banken i 8.3;
    første hint røper aldri konklusjonen.
19. **Quiz:** `options[0]` alltid riktig; nøyaktig 4 alternativer; ingen
    posisjonsreferanser i `explanation`; **ingen lengde-tell** (fasiten er ikke det
    lengste alternativet).
20. **Øktmerking:** kapitler > 45 min har løkke-tidsanslag eller pausepunkter;
    prøvekapitlene deklarerer «4 prøver à ~20–45 min» + deling over flere kvelder.
21. **Feilkode-gloss** ved første bruk per kapittel; ingen kode #11.
22. **Ingen tom `collapsible`**; ingen duplikate blokk-id-er; kap-referanser i
    fasiter og forkunnskaper er markdown-lenker; ingen hardt linjebrutt prosa.
23. **Juridiske deklarasjoner:** innholdet fremstiller seg ALDRI som offisielt
    eller UiO-tilknyttet, lover aldri eksamensutfall, og all omtale av
    kildegrunnlaget følger §6.1 ordrett i sak.
24. **Rendering og porter grønne før ferdigmelding:**

```bash
python3 scripts/hoyskolebok/status-bok.py sgo1001
python3 scripts/hoyskolebok/sjekk-latex.py sgo1001
python3 scripts/hoyskolebok/sjekk-fasitfordeling.py sgo1001
python3 scripts/hoyskolebok/sjekk-alternativref.py sgo1001
python3 scripts/hoyskolebok/sjekk-bok.py sgo1001 "<forbudt-regex fra §12.5>"
node scripts/hoyskolebok/quiz-lengdesjekk.mjs
npm run build
```
