# Byggekontrakt: SOSANT1000 Innføring i sosialantropologi / Antropologisk samfunnsanalyse (UiO) — teknisk kontrakt for kapittelforfattere

Gjelder ALLE forfatter-agenter som bygger kapitler til `sosant1000`. Faglig
innhold styres av `SKJELETT.md` (identitetsseksjonen §1–§2 + per-kapittel-DNA i
§3) — les ditt kapittels avsnitt der ORDRETT, og `EKSAMENSANALYSE.md` ved behov.
Denne kontrakten definerer format, sjangerkrav, faglig sannhetskontroll og
kvalitetsporter, og er bindende der den er mer presis enn skjelettet. **Ved
faglig konflikt vinner SKJELETT.md; ved format-, sjanger- eller
kildepåstandskonflikt vinner denne kontrakten.** Instansiert fra
`../BYGGEKONTRAKT-MAL.md`.

**Emnets navn.** Emnet het lenge *Innføring i sosialantropologi* og har byttet
tittel til **Antropologisk samfunnsanalyse**. Begge navn er i bruk — i søk, i
studentprat og i eldre eksamenssett. Boka bruker **begge**: den nye tittelen som
hovedform i kap. 0.1 og i omtale av dagens emne, den gamle i parentes ved første
omtale og der eldre sett/veiledninger omtales («SOSANT1000 Antropologisk
samfunnsanalyse — tidligere Innføring i sosialantropologi»). Emnekoden
`SOSANT1000` skrives alltid ut, den er bokas viktigste søkeord.

**Arketype: drøfting** (`../DNA-drofting.md`), med ÉN dokumentert utvidelse fra
skjelettets §1: eksamen er **todelt** (kortsvar + langsvar) med *begge deler
bestått*-krav, så de to sjangrene trenes eksplisitt og hver for seg. Del 0 har
derfor tre kapitler (mot DNA-normen to), og Del 9 speiler todelingen.

**Nærmeste bygde søskenbøker:** `exphil03` og `fil1001` (samme arketype, samme
institusjon). Kopier arbeidsmåte og formkrav derfra — **aldri faglig innhold**.
Tre forskjeller som endrer byggingen:

1. **Kildesituasjonen er motsatt av fil1001s.** FIL1001 har én sensorveiledning
   og ingen fasit. SOSANT1000 har **ti publiserte sensorveiledninger** — det
   rikeste sensorgrunnlaget noen bok i dette prosjektet har hatt. Sensorkravene
   skal derfor forankres i ti uavhengige kilder, ikke i én, og formuleringen
   «sensorveiledningene» i flertall er her **sann og påkrevd** (§6.1).
2. **Etnografisk belegg erstatter argumentrekonstruksjonen.** Der FIL1001 måler
   premiss→konklusjon, måler SOSANT1000 om påstanden er forankret i konkret
   etnografi fra pensum. Dette er fagets viktigste karakterskiller og har sin
   egen bindende seksjon (§7).
3. **Faget behandler levende folkegrupper.** Normativ varsomhet er ikke
   høflighet, men faglig presisjon, og er bindende (§8).

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
  2. `example` som viser begrepet BRUKT på en konkret etnografi eller et case —
     skrevet slik et godt eksamenssvar ville skrevet det, →
  3. `exercise` INLINE i `content[]` rett etter eksempelet (plattformen renderer
     inline oppgaver), →
  4. neste begrep.
- **ALDRI** all teori øverst med oppgavene samlet nederst, og aldri alle
  definisjonene i én blokk fulgt av alle eksemplene. Grupper til meningsfulle
  biter — ikke én oppgave per setning.
- **Ingen usett forkunnskap:** ingen oppgave får kreve et begrep, en antropolog,
  en etnografi eller en sjangerregel som ikke er introdusert tidligere i SAMME
  kapittel (t.o.m. eksempelet rett foran) eller i et tidligere kapittel referert
  i Forkunnskaper-blokken. Flytt teoribiten tidligere ved behov.
- **Unntak:** prøvekapitler, øvingseksamener og modellbesvarelseskapitler
  (9.6–9.8) følger sin egen arketype — komplett oppgave først, løsning i
  `collapsible`.
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer
  REKKEFØLGEN.

---

## 2. Filplassering og filantall

Ett JSON-dokument per kapittel: `src/lib/data/chapters/sosant1000-<del>-<nr>.json`
(prøvekapitler: `sosant1000-<del>-prove.json`). Quiz til
`src/lib/data/quiz-staging/sosant1000-<del>-<nr>.quiz.json`.

IKKE rør `_registry.json`, `_all.json`, `textbook-courses*.ts`, `quiz-data*.ts`
eller `institusjoner.ts` — wiring gjøres sentralt med
`scripts/hoyskolebok/wire-bok.py sosant1000` (fase 5). Generer ALLTID JSON via
python `json.dump`: faget er fullt av anførselstegn, apostrofer og
fremmedspråklige navn («matter out of place», *hau*, Kwakwa̱ka̱ʼwakw), og én
uescapet anførsel har tidligere blokkert hele plattformens prebuild.

**38 filer totalt:** 29 innholdskapitler (skjelettets §3) + 9 prøvekapitler
(`sosant1000-1-prove` … `sosant1000-9-prove`). Wiringen genererer
prøvekapitlenes metadata selv fra `BOKCONFIG.json` (`prøvedeler`) — filene må
finnes, men skal ikke listes i skjelettets §3.

**Del 0 har ingen prøvekapittel** (metadel — dekkes av øvingseksamenene).
**Del 9s prøvekapittel er ikke fire prøver**, men de tre komplette
øvingseksamenene (§5.7).

**Kjent wiring-nuanse (ikke din jobb, men vær klar over den):** `wire-bok.py`
leter etter `**description:**` med liten forbokstav, mens skjelettet skriver
`**Description:**`. Kursmetadataens `description` blir derfor tom ved
auto-wiring. **Kapittel-JSONs eget `description`-felt er den autoritative
kilden** — fyll det alltid ut ordrett fra skjelettet; fase 5 fyller
kursmetadataen fra kapittelfilene.

---

## 3. Kapittel-JSON (toppnivå)

```json
{
  "id": "sosant1000-2-1",
  "courseId": "sosant1000",
  "chapterNumber": "2.1",
  "title": "…(fra skjelettet, ordrett)…",
  "description": "…(fra skjelettet, ordrett)…",
  "estimatedMinutes": 70,
  "competenceGoals": ["kunne forklare Mauss' tre plikter og vise dem i et konkret etnografisk eksempel", "…"],
  "content": [ "…blokker…" ],
  "exercises": []
}
```

- **`chapterNumber` er ALLTID del-basert** (`<del>.<nr>`: `0.1`, `2.1`, `9.8`) —
  **ALDRI lineær** («17»). Prøvekapitler: `<del>.P`. Dette er den enkeltfeilen
  som ødelegger navigasjonen i en hel bok.
- `title` og `description` tas ordrett fra skjelettet.
- `competenceGoals`: 2–4 «kunne …»-formuleringer destillert fra kapitlets
  begrepskontrakt. Dette er **Skolesagas EGNE** mål — ALDRI kopi av UiOs
  offisielle læringsutbyttebeskrivelser. UI-et deklarerer kilden automatisk.
- **Ingen kald kode i `competenceGoals`** — ikke «K», ikke «MONO», ikke «#1»,
  ikke «A-besvarelse» uten forklaring.

### Rene tekstfelter — INGEN markdown (UFRAVIKELIG)

`title`, `topics` og `competenceGoals` renderes RÅTT i UI-et. Bruk ALDRI
markdown der (ingen `*kursiv*`, `**fet**`, ingen lenker). Verktitler i disse
feltene skrives med «anførselstegn», aldri kursiv — f.eks. «Shah,
"Nightmarch"». Markdown hører kun hjemme i
`content`/`problem`/`solution`/`task`-feltene.

---

## 4. Blokktyper (eksakte felt — strukturreferanse: `src/lib/data/chapters/exphil03-2-4.json`)

- `text`: `{id, type: "text", content}` — markdown-prosa.
- `definition`: `{id, type: "definition", title, content}` — **`title`
  OBLIGATORISK**. Flashcards genereres KUN fra **toppnivå** `definition`-blokker
  med `title` (en definisjon nøstet inne i en `collapsible` teller IKKE).
  I SOSANT1000 er `title` en **kobling begrep ↔ antropolog**: «Resiprositet
  (Mauss)», «Liminalitet (Turner)», «Relatedness (Carsten)», «Sacrifice zones
  (Swanson)», «Strukturell vold (Farmer)». Åpne innholdet med forklaringen i
  ORD, og lukk med den etnografien begrepet «eier» (§7).
- `theorem`: `{id, type: "theorem", title, content}` — brukes **sparsomt**, til
  teser som skal stå som en enhet: gavens tre plikter som system, de tre
  rituelle fasene, Eriksens åtte nøkkelord som liste, tesen «økonomi kan ikke
  forstås løsrevet». Ikke bruk `theorem` som pynt — dette er ikke et regnefag.
- `example`: `{id, type: "example", title, problem, solution}` — `solution`
  skrives som et **godt eksamenssvar** (§6), aldri som referat, og har ALLTID
  minst ett navngitt etnografisk eksempel.
- `tip` / `warning`: `{id, type, title, content}`.
- `exercise`: `{id, type: "exercise", exercise: {id, number, type: "classic",
  difficulty: "lett"|"middels"|"vanskelig", task, solution, hints: []}}`.
  ALDRI `solutionVideo`, `allowsUpload`, `allowsCanvasDrawing`, `answer` eller
  `subTasks` (deloppgaver skrives inn i `task`/`solution`, se §10).
- `collapsible`: `{id, type: "collapsible", title, buttonText, content: [blokker]}`
  — feltnavnet er `content` og det skal inneholde BLOKKER. En `text`-nøkkel
  eller tom array rendrer som en tom boks og er en byggefeil.

Blokk-id-er: `<kapittel-id>-<løpenavn>` (f.eks. `sosant1000-2-1-def-resiprositet`),
unike i kapitlet. Duplikate blokk-id-er felles av kvalitetsporten.

---

## 5. Obligatorisk kapittelstruktur

### 5.1 Alltid først, i denne rekkefølgen

1. `tip` **Eksamensvinkel** — frekvens, sjangre og typiske oppgaveformuleringer,
   med de EKSAKTE tallene fra skjelettets «Eksamensbelegg»-linje for ditt
   kapittel («Slektskap i 8 av 11 sett»). **Forfatteren skal ALDRI finne på
   frekvenstall**, og nevneren er alltid **11 sett** (§6.1).
2. `text` **Forkunnskaper** — kapitler i boka som markdown-lenker
   (`[kap. 1.1](/sosant1000/sosant1000-1-1)`) + eventuelle kryssbok-lenker
   fra tabellen i §13. «Dette kapitlet kan leses uten forkunnskaper» der
   skjelettet sier `prerequisites: ingen`. **«Sist du var her»:** i kapitler med
   stor avstand til forkunnskapen (6.1 bygger på 1.2; 8.1 på 7.1; hele Del 9 på
   temadelene) SKAL blokken VISE de 2–3 kjernepåstandene ferdig oppfrisket
   («holisme = fenomener forstås i sin helhetlige sammenheng: økonomi,
   slektskap, religion og politikk henger sammen»), ikke bare lenke.

### 5.2 Temakapittel (Del 1–8) — DNA-drøfting + skjelettets per-kapittel-DNA

Etter eksamensvinkel og forkunnskaper går kapitlet i LÆRINGSLØKKER (§1). Disse
blokkene skal finnes, fordelt i løkkene — ikke stablet:

- `text` **Temaet i fagets landskap** — hvilket problem temaet svarer på, og
  hvorfor det er et problem i faget. Abstrakte kjernetemaer åpner med et
  **hverdagsanker FØR apparatet** (§10).
- `definition` **kjernebegreper** — flashcard-kilden, toppnivå med `title`,
  hvert begrep forankret i antropolog/verk fra skjelettets begrepskontrakt.
- `text` **posisjoner og spenninger** — drøftingsaksene fra skjelettet, skrevet
  slik at leseren har råstoff til BEGGE sider.
- `collapsible` **Etnografisk eksempellager** — 2–3 ferdige pensumetnografier
  leseren kan gjenbruke på eksamen, hver etter malen i §7.2: folk og sted → hvem
  som studerte det og når → hva studien faktisk viste → hvilke temaer eksempelet
  kan belegge → én linje om folkets situasjon i dag. Dette er kapitlets mest
  eksamensnyttige blokk; den skal ALDRI kuttes.
- `example` **anvendelse** ×1–3 — case-forslagene fra skjelettet, nyskrevet,
  hver med eksplisitt **teori + etnografi**-kobling.
- `exercise` ×4–8 INLINE — 2–3 begreps-/kortsvarsoppgaver (minst én `lett`
  innstegsoppgave tidlig), 1–2 kortdrøftinger med disposisjonsforslag som
  løsning, 1–2 eksamenslike oppgaver med momentliste.
- `warning` **Typiske feil** — feilkodene fra skjelettets «Typiske feil»-linje,
  **glosset ved første bruk PER KAPITTEL**: «(#1 — teori uten etnografisk
  forankring: begrepet defineres riktig, men uten et eneste konkret eksempel)».
- `collapsible` **Pensumkart for kapitlet** — markdown-tabell
  `| Antropolog | Verk | Eier disse begrepene | Etnografien de kommer fra |`.
  Åpner med begrepsbank-notisen (§10).
- `collapsible` **Repetisjon** — 4–6 korte spørsmål fra forkunnskapskapitlene.

### 5.3 Sjangerkapittel (9.1–9.4)

1. `tip` Eksamensvinkel — sjangeren over årene (tall fra skjelettet).
2. `text` **Oppskrift** — trinnvis disponering med tidsbudsjett (§6.5).
   Kortsvaret har fire trinn (9.1), langsvaret fem (9.2), komparativ oppgave
   akse-strukturen (9.3), monografi-langsvaret oppskriften i §6.4 (9.4).
3. `example` **gjennomskrevet besvarelse** med margkommentarer om hva som gir
   uttelling hvor. Margkommentarer skrives som egne linjer i `solution`:
   `> Margnotat: her er den etnografiske forankringen — dette er akse 1, og uten den stopper svaret på minimumsnivå.`
4. `exercise` ×3–4 nyskrevne oppgaver i sjangeren, løsning = **tre-nivå-momentliste**
   (minimumskrav / god / meget god), ikke fullt essay.
5. `warning` Typiske feil + `collapsible` med sjangerens sjekkliste (§6.3).

Kap. 9.3 har i tillegg **sammenligningskartene** som `collapsible`: de faste
KOMP-parene (gave/marked, kula/gimwali, små-/storskalasamfunn,
kapitalistisk samfunn/Adivasi-samfunnet) med 3–4 sammenligningsakser hver.

Kap. 9.4 avslutter med bokas ene **kalde bank**: 8–10 nyskrevne
oppgaveformuleringer på tvers av alle sjangrene, UTEN `hints`, fasit = ren
momentliste, eksplisitt merket «Kald bank — ingen hint. Her er det å mobilisere
begreper og etnografi selv som trenes.» Dette er eneste unntak fra hint-kravet
i §10.

### 5.4 Feilvaksinekapittel (9.5)

Én seksjon per feil #1–#12: (a) feilen slik sensor ser den, (b) nyskrevet «slik
ser den ut»-utdrag, (c) omskrevet god/meget god-versjon av samme passasje,
(d) varsellampe-heuristikk. Sentrale før/etter-par (fra skjelettet):
eksempelløst → etnografisk forankret (#1); to kilder → tre koblede (#2);
referat → drøfting (#3); parallelle perspektiver → koblede (#4); flat definisjon
→ presis med distinksjon (#6/#8); biologisk → sosialt (#9). Deretter
gjenkjenningsoppgaver («hvilken feil begår denne kandidaten?») i flervalgsformat
i `exercise.task`, med stokket fasit (§10).

### 5.5 Modellbesvarelseskapittel (9.6–9.8)

1. `text` med den nyskrevne oppgaven, ordrett slik den ville stått i et sett,
   pluss ærlighetslinjen fra §9.1.
2. `collapsible` **A-besvarelse (meget god)** — full, sammenhengende tekst med
   margnotater. «— naturlig pausepunkt —» mellom hovedseksjonene.
3. `collapsible` **Kommentert C-besvarelse (god)** — samme oppgave, korrekt men
   deskriptiv, med notater om gapet opp til A rammet inn som
   **oppgraderingsmeny**.
4. `collapsible` **E-besvarelse (minimumskrav)** — det som så vidt passerer, med
   notat om nøyaktig hva som mangler. I 9.7 demonstrerer E-versjonen at
   3-referanse-regelen er brutt, og hva det koster uansett øvrig kvalitet.
5. **Kap. 9.7 skal i tillegg ha `collapsible` «Midtnivå-besvarelse (B)»** — se
   §9.3. Dette er et README-krav og gjelder minst ett sted i boka.
6. `tip` **Sensorblikket** — momentliste bygget på de fire vurderingsaksene
   (§6.2) og tre-nivå-graderingen, anvendt på akkurat denne oppgaven.
7. `warning` **Typiske feil** — feilene C-/E-versjonene demonstrerer. (Kravet om
   `warning`-blokk gjelder også disse kapitlene; tittelen «Modellbesvarelse»
   fritar dem IKKE i kvalitetsporten.)

### 5.6 Prøvekapitler (`sosant1000-<del>-prove`, del 1–8)

Id `sosant1000-<del>-prove`, `chapterNumber` `<del>.P`, tittel «Prøver til del
<del>: <deltittel>».

Struktur: `tip` (dekning + «4 prøver à ~20–45 min» + «kan trygt deles over flere
kvelder — én prøve per økt» + hvor flervalget bor) + `text` Forkunnskaper + fire
`collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med nyskrevne
oppgaver og full fasit. **Prøvenes tema per del står i skjelettets
«Prøve-kvote Del N»-blokk — følg dem punkt for punkt.**

**Fasitstruktur for drøftingsfag** (obligatorisk i hver prøvefasit):

> **Må-punkter** (uten disse når svaret ikke minimumskravet) · **Pluss-punkter**
> (det som løfter fra god til meget god) · **Feller** (det sensor faktisk
> trekker for, med feilkode).

Der prøven speiler et eksamensspørsmål, skal fasiten i tillegg ha
**tre-nivå-momentlisten** (minimumskrav → god → meget god), fordi det er sensors
egen mal (§6.2).

Etter hver prøvefasit: **avkryssbar selvdiagnose-sjekkliste (☐)** — bruk
rubrikken i §6.3 (kortsvarsrubrikken for K-oppgaver, langsvarsrubrikken for
L/PÅ/KOMP/MONO). Kap-referanser i fasitene som markdown-lenker. **Ingen quiz og
ingen begrepsbank i prøvekapitler.**

### 5.7 De tre øvingseksamenene — hjemsted (AVGJORT HER)

Skjelettets §4 krever tre komplette øvingseksamener i todelt form, men §3 gir
dem **ikke egne kapitler**, og bokas kapittelantall (29) er bindende. Wiringen
plukker dessuten kun kapitler på formen `#### Kapittel <d>.<n>` fra skjelettet,
så en ny fil utenfor det mønsteret ville aldri blitt wiret.

**Bindende løsning:** øvingseksamenene bygges i **`sosant1000-9-prove`**
(`chapterNumber` `9.P`), som er bokas eneste prøvekapittel UTEN fire prøver:

- `collapsible` «Øvingseksamen A — bredde over kjernetemaene», buttonText «Vis
  øvingseksamen A»
- `collapsible` «Øvingseksamen B — ritualer, slektskap og miljø», buttonText
  «Vis øvingseksamen B»
- `collapsible` «Øvingseksamen C — monografi- og makttung», buttonText «Vis
  øvingseksamen C»

Innholdet i hver følger skjelettets §4 punkt for punkt (Del 1: seks kortsvar,
svar på fire · Del 2: tre langsvarsalternativer, svar på ett). Hver inneholder
det komplette nyskrevne settet FØRST, deretter momentliste-fasit per spørsmål
med tre-nivå-beskrivelse. **3-referanse-regelen håndheves eksplisitt i hver
langsvar-fasit.** Innsett «— naturlig pausepunkt —» mellom eksamenene.

`tip`-blokken øverst deklarerer: «Tre komplette øvingseksamener à 4 timer. Ta én
om gangen — hele kapitlet er ikke én økt», og at settene skal skrives på tid.
Øvingseksamen A skal i fasiten demonstrere **strykregelen i Del 1** (to F blant
de fire valgte kortsvarene ⇒ hele eksamen F, med helhetsvurderings-forbeholdet)
og **feil #7** (å svare på alle seks). Øvingseksamen C skal demonstrere
**feil #10** (monografioppgave uten dybde i monografien).

**Sannferdighetskrav ved wiring:** auto-teksten fra `wire-bok.py` for et
prøvekapittel sier «Fire prøver …». For `sosant1000-9-prove` er det USANT.
Fase 5 SKAL rette tittel og beskrivelse for 9.P til «Øvingseksamener — tre
komplette sett i eksamensform» / «Tre komplette øvingseksamener i gjeldende
todelte form (kortsvar 4 av 6 + langsvar 1 av 3), med fulle momentliste-fasiter».

---

## 6. ESSAYKONTRAKTEN (fagets kjerne — bindende for alle løsninger og modellsvar)

Alt i denne seksjonen etableres i Del 0 (kap. 0.1–0.3) og refereres i resten av
boka. Det er dette som gjør at mange forfattere skriver samme bok.

### 6.1 Kildegrunnlaget bak kravene — si det presist, aldri mer

Arkivet `~/Desktop/Eksamner/UiO/SOSANT1000/` er **verifisert 26. juli 2026** med
md5-summer på alle filer. Resultatet er bindende:

| Fakta | Tall |
|---|---|
| Filer i katalogen (alle PDF) | **28** |
| Unike dokumenter (7 filer er dublettnavn på samme PDF) | **21** |
| Unike **eksamensoppgavesett** (PUB-OPPGAVE, fritt etter åndsverkloven § 14) | **11** |
| Unike **publiserte sensorveiledninger** (PUB-SENSORVEIL, fritt etter § 14) | **10** |
| **Løsningsforslag** (INTERNT-LF, vernet) | **0 — finnes ikke** |
| Årsspenn | H2020–H2025 (inkl. utsatte; H2025 utsatt avholdt jan. 2026) |

De elleve settene: H2020 ordinær, H2020 utsatt, H2021, H2022 ordinær, H2022
utsatt, H2023 ordinær, H2023 utsatt, H2024 ordinær, H2024 utsatt, H2025 ordinær,
H2025 utsatt. De ti veiledningene dekker de samme semestrene **unntatt H2020
utsatt**.

**Konsekvenser (ufravikelige):**

- **Nevneren i ALLE frekvenspåstander er 11 sett.** Aldri 28, aldri 21, aldri
  «over tjue». Skal du snevre inn, si hvilken delmengde du mener: «i alle åtte
  settene med dagens todelte skoleeksamensform (H2022–H2025, ordinære og
  utsatte)».
- **«Sensorveiledningene» i flertall er SANT og påkrevd.** Skriv «de ti
  sensorveiledningene», ikke «sensorveiledningen». Der en påstand hviler på
  alle ti, si det — det er bokas sterkeste autoritetskilde og et reelt
  konkurransefortrinn.
- **Det finnes ingen løsningsforslag og ingen fasit for dette emnet.** ALLE
  modellbesvarelser, momentlister og prøvefasiter i boka er **nyskrevet av oss**
  fra pensumkunnskap og veiledningenes nivåbeskrivelser. Boka skal ALDRI antyde
  at den gjengir ekte kandidatbesvarelser eller offisielle løsningsforslag
  (grep-sjekkes, §12.5).
- **Betinget regel om vernet materiale:** skulle arkivet senere få tilført
  filer klassifisert `INTERNT-LF`, er de opphavsrettslig **vernet**. De kan da
  brukes som *fasitkilde* for å kontrollere våre egne, nyskrevne løsninger, men
  aldri gjengis ordrett eller nær-ordrett, og aldri omtales i bokinnholdet. Per
  26. juli 2026 finnes ingen slike filer, og boka skal ikke omtale dem.
- **Ingen sidetall noe sted** (grep-sjekkes). Arkivet attesterer ingen, og
  pensumutgavene skifter.
- **Ingen ordrette gjengivelser** av oppgavetekster eller veiledningstekst —
  heller ikke i omskrevet-nær form (§15).
- **Forbehold som skal stå i kildenoten:** H2020 utsatt har ingen veiledning;
  H2021-oppgavesettene er bildebaserte PDF-er og er rekonstruert fra
  veiledningen; kurset gjennomgikk en pensumrevisjon til H2023 (monografiskifte
  West → Shah), og nye sett kan endre bildet.

**Kildenote-mal for kap. 0.1** (bruk denne ordlyden, tilpasset i språk, aldri i
tall):

> Boka er kalibrert mot **11 eksamenssett** og **10 publiserte
> sensorveiledninger** fra Sosialantropologisk institutt, UiO, fra høsten 2020
> til og med den utsatte eksamenen i januar 2026 — ordinære og utsatte sett
> begge veier. Veiledningene er uvanlig rike: de graderer hvert enkelt spørsmål
> i tre nivåer, og de sier eksplisitt hva som skiller et godt svar fra et meget
> godt. Det er dette grunnlaget kravene i boka hviler på, ikke gjetning.
> **Det finnes ingen offisielle løsningsforslag og ingen fasit for SOSANT1000.**
> Alt du finner av modellbesvarelser og momentlister her er derfor skrevet av
> oss, ut fra pensum og veiledningenes egne nivåbeskrivelser.
> **Forbehold:** den utsatte eksamenen høsten 2020 har ingen veiledning,
> oppgavene fra 2021 er rekonstruert fra veiledningen fordi filene er
> bildebaserte, og kurset la om pensum i 2023 — nye sett kan endre bildet.

**Merknad om EKSAMENSANALYSE.md:** analysens innledning og §8 sier «11
sensorveiledninger». Kildelisten i §8 lister **ti**, og disktellingen bekrefter
ti (H2021-veiledningen ligger i to filer med identisk innhold). **Ti er det
bindende tallet i boka.**

### 6.2 De fire vurderingsaksene og tre-nivå-graderingen (fra de ti veiledningene)

Veiledningene er påfallende konsistente H2020→H2025 og opererer med fire akser.
Alle sjangerkapitler, modellbesvarelser og prøvefasiter skal referere til dem
**ved navn og nummer** — aldri bare «sensor vil ha god drøfting».

| Akse | Hva den måler | Vekt |
|---|---|---|
| **Akse 1 — Etnografisk forankring** | Enhver teoretisk påstand belegges med konkret etnografi fra pensum. Den hyppigste positive markøren i hele arkivet, og fraværet den vanligste feilen. | Viktigst. Et abstrakt, eksempelløst svar kan aldri nå toppen. |
| **Akse 2 — Pensumforankring og kildebredde** | Langsvar: minst tre pensumtekster (§6.6). Kortsvar: minst ett etnografisk eksempel. Tekster utenfor lista teller når de «antropologiseres». | Bare 1–2 kilder i langsvar trekker ned uansett øvrig kvalitet. |
| **Akse 3 — Selvstendige koblinger og komparativt blikk** | Å sette pensumtekster i forhold til hverandre, sammenligne perspektiver, trekke inn faghistorie. | **Dette er A-markøren** — det som løfter fra god til meget god. |
| **Akse 4 — Presisjon og begrepsbeherskelse** | Definisjoner som treffer pensumforfatterens bruk, og begrepets distinksjon. | Flate definisjoner plasseres lavt selv når alt annet er på plass. |

**Tre-nivå-graderingen** går igjen i hvert eneste spørsmål i alle ti
veiledningene, og er malen for E/C/A i boka:

| Sensors nivå | Karakterspeil | Hva som faktisk står der |
|---|---|---|
| **Minimumskrav** | E/D | Korrekt definisjon eller gjengivelse. Ingen distinksjon, ingen eller tynn etnografi. |
| **God** | C | Definisjon + presis distinksjon + etnografisk eksempel fra pensum. Deskriptiv: får frem hovedpoengene, men drøfting og koblinger uteblir. |
| **Meget god** | A/B | Selvstendige koblinger på tvers av tekster, komparativt og gjerne faghistorisk blikk, tydelig egen argumentasjon. |

**Karakterskalaen er A–F**, ikke bestått/ikke bestått, tross emnesidens ordlyd —
samtlige veiledninger bruker A–F med de standardiserte bachelor-kriteriene.
Ingen «bestått-på-marginen»-logikk i modellsvar eller studieguide.

**Strykregelen (Del 1)** er bokas viktigste strategiske poeng ved siden av
3-referanse-regelen: står **to eller flere** av de fire valgte kortsvarene til F,
står hele eksamen til F. MEN sensor gjør en **helhetsvurdering** — gode øvrige
kortsvar og et godt langsvar kan veie opp to bommer som skyldes at oppgaven ble
misforstått. Regelen forklares i kap. 0.1, gjentas i hver øvingseksamenfasit, og
hver gang boka anbefaler en prioritering. Praktisk konsekvens som skal skrives
ut: **velg de fire kortsvarene du kan forankre etnografisk, og skriv ikke flere
enn fire** (sensor leser uansett bare fire — feil #7).

**Slingringsmonn:** veiledningene ber eksplisitt om et mildt blikk på
førsteårsstudenter som ikke er programstudenter. Si det i Del 0 sammen med
karakter-realismen (§10): C er en god og vanlig karakter i et innføringsemne.

### 6.3 De to binære rubrikkene (bindende selvrettingsverktøy)

Boka har to rubrikker fordi eksamen har to deler. De står i kap. 0.2 (kortsvar)
og 0.3 (langsvar), gjentas i 9.1 og 9.2, og hver prøvefasit viser tilbake til
den som passer. Rubrikkene er **binære** — leseren skal kunne krysse av uten
skjønn.

**Kortsvarsrubrikken (K):**

☐ Står det en definisjon som treffer den pensumforfatteren begrepet er hentet
fra, med forfatteren navngitt?
☐ Er begrepets distinksjon med (tilskrevet/ervervet · kula/gimwali · emisk/etisk
· metodologisk/etisk relativisme · vertikal/horisontal · avstamning/allianse ·
sex/gender · gave/marked)?
☐ Er det minst ETT konkret etnografisk eksempel, med **folk og etnograf**
navngitt?
☐ Sier svaret hva eksempelet VISER — ikke bare at det finnes?
☐ Er det én løftende setning som kobler til en annen pensumtekst, til
monografien eller til fagets holisme?
☐ Har du svart på nøyaktig fire kortsvar — ikke fem, ikke seks?

**Langsvarsrubrikken (L / PÅ / KOMP / MONO):**

☐ Er oppgavens nøkkelbegrep avklart og *problematisert* i innledningen, ikke
bare definert?
☐ Står det en analytisk tråd — en påstand som svarer på oppgaven — og ikke en
oppramsing?
☐ Er **minst tre pensumtekster** navngitt med forfatter?
☐ Har hver av dem et konkret etnografisk eksempel knyttet til seg?
☐ Er minst to av tekstene satt EKSPLISITT i forhold til hverandre (likhet,
forskjell eller uenighet)? *(akse 3 — A-markøren)*
☐ Er påstanden *prøvd* — står det minst én innvending eller nyansering?
☐ I KOMP: er BEGGE ledd behandlet på hver sammenligningsakse, med etnografi på
begge?
☐ I MONO: er det konkret empiri fra monografien, minst én annen tekst, og en
refleksjon over hvordan feltarbeidet frembringer kunnskapen?
☐ Svarer siste avsnitt på spørsmålet som faktisk ble stilt, og er alle
delspørsmål besvart?

**Standpunktet er fritt.** Alle landinger kan gi toppkarakter når begrunnelsen
er stringent og etnografisk forankret. Det er begrunnelseskvaliteten som
premieres, aldri konklusjonens retning. Dette sies eksplisitt hver gang boka ber
leseren ta stilling.

### 6.4 Instruksjonsverbet styrer sjangeren (bindende)

Hver oppgave i boka — og hvert modellsvar — skal svare i den sjangeren
instruksjonsverbet krever. Å svare i feil sjanger er feil #3 eller #5, uansett
hvor godt innholdet er. Tell instruksjonsverbene, og svar på alle.

| Instruksjonsverb i oppgaven | Hva svaret MÅ inneholde | Sjanger |
|---|---|---|
| «Forklar X» / «Hva menes med X?» (nesten alltid + «bruk minst ett eksempel») | Definisjon som treffer forfatteren → distinksjonen → minst ett pensum-etnografisk eksempel → én løftende kobling. | **K** |
| «Gjør rede for X» | Presis, ordnet framstilling. Drøfting er ikke krevd — men etnografisk eksempel er det fortsatt. Å drøfte i stedet for å gjøre rede for er også feil sjanger. | **K** |
| «Drøft X, bruk minst tre pensumtekster» | Begrepsavklaring → analytisk tråd → tre+ etnografier fra ulike tekster → **komparasjon** → selvstendig relevanskobling. | **L** |
| «Drøft utsagnet/påstanden …» | Påstanden skal *prøves*, ikke bekreftes mekanisk: vis hvor den holder OG hvor den må nyanseres, og lande begrunnet. | **PÅ** |
| «Sammenlign X og Y» / «Hva er forskjellene mellom X og Y?» | 2–4 eksplisitte sammenligningsakser, BEGGE ledd behandlet på HVER akse, etnografi på begge. Aldri to parallelle referater, aldri bare det ene leddet (feil #11). | **KOMP** |
| «… med utgangspunkt i [årets monografi]» | Konkret empiri fra monografien → kobling til minst én annen pensumtekst → refleksjon over hvordan feltarbeidet frembringer kunnskapen. | **MONO** |
| «Velg to av …» (typisk Eriksens åtte nøkkelord) | Svar på nøyaktig to, hver med egen presis kjerne og eget eksempel. Å ta alle åtte er å bomme på oppgaven. | **K** |
| «Bruk minst ett eksempel fra pensum» | Kravet er **pensum**-etnografi. Et eget hverdagseksempel kan komme i tillegg, aldri i stedet. | alle |

Sammensatte formuleringer er normen («gjør rede for … og drøft …»). Dette
drilles eksplisitt i kap. 9.1, 9.2 og i prøve 1 til Del 9.

### 6.5 Tidsbudsjett (bruk denne modellen konsekvent i hele boka)

Eksamen er **4 timer = 240 minutter**, digital skoleeksamen (Inspera, kl. 09–13).
Eneste tillatte hjelpemiddel er en forhåndslevert og kontrollert ordbok — ingen
digitale hjelpemidler.

- **~10 min:** les hele settet, velg fire kortsvar og ett langsvar, skriv
  stikkordsdisposisjon for langsvaret.
- **Del 1 — 4 × ~12 min ≈ 48 min:** kortsvarene, ett om gangen.
- **Del 2 — ~90–100 min:** ~10 min disponering, ~70 min skriving, ~10 min
  kontroll av kildekravet (tell tekstene).
- **~35–45 min buffer:** kladd underveis, gjennomlesing og retting til slutt.

Der boka oppgir «~12 min per kortsvar» og «~90–100 min på langsvaret» er det
**skrivetid**; differansen opp til 240 er settlesing, valg, disponering og
gjennomlesing. Denne differansen skal forklares eksplisitt der den først nevnes.

### 6.6 3-referanse-regelen (bokas nest viktigste mantra)

Langsvar krever normalt **minst tre pensumtekster**, oppgitt eksplisitt i
oppgaveteksten. **Bare 1–2 kilder trekker ned uavhengig av øvrig kvalitet** —
gjentatt i hver eneste veiledning og den vanligste enkeltårsaken til trekk.

Regelen skal stå i kap. 0.3, gjentas i **hver** langsvar-, PÅ-, KOMP- og
MONO-fasit i Del 9, i alle L-prøver og i alle tre øvingseksamenene. To
presiseringer skal alltid følge med, ellers blir regelen mekanisk:

1. **Tre tekster NEVNT er ikke tre tekster BRUKT.** Kravet er at hver av dem
   bærer et etnografisk eksempel som argumentet faktisk hviler på — og at minst
   to av dem settes i forhold til hverandre (akse 3).
2. **Helhetsvurderingen:** har kortsvarene dokumentert god pensumbeherskelse, er
   det ifølge veiledningene fullt ut akseptabelt at langsvaret trekker på færre
   tekster. Sensor veier eksamen som helhet. Si dette — ellers skriver leseren
   tre tynne referanser i stedet for to gode.

Mantraene som innføres i Del 0 og gjentas gjennom boka: **«forankre påstander
etnografisk»** og **«minst tre pensumtekster i langsvar»**.

---

## 7. ETNOGRAFISK BELEGG (fagets sannhetskontroll)

Dette er SOSANT1000s motstykke til regnefagenes numeriske parametersjekk og
jusfagenes hjemmelskontroll. Brudd her er **faglige feil, ikke stilfeil**.

### 7.1 Belegg-regelen (ufravikelig)

- **Hvert teoretisk poeng i boka har minst ett navngitt etnografisk eksempel.**
  Et begrep som introduseres uten at leseren får se det i bruk på et konkret
  folk, et konkret sted og en konkret studie, er ikke ferdig skrevet.
- **Et eksempel er navngitt når fire ting står der:** hvilket folk/hvilken
  gruppe, hvor og omtrent når, hvilken etnograf og verk, og **hva studien
  faktisk viste**. «Et eksempel fra Melanesia» er ikke et eksempel. «Kula-byttet
  på Trobriandøyene, som Malinowski beskrev på 1910-tallet og som Mauss bygger
  gaveanalysen på» er det.
- **Hvert temakapittel har «Etnografisk eksempellager»-blokken** (§5.2) med 2–3
  ferdige, gjenbrukbare pensumetnografier. Det er dette lageret leseren tar med
  seg inn i eksamenslokalet.
- **Hvert modellsvar på A-nivå viser teori + etnografi-koblingen eksplisitt**,
  og margnotatet peker på den: `> Margnotat: her går påstanden fra teori til belegg — dette er akse 1.`
- **Distinksjonen mellom eksempeltyper skal være tydelig for leseren.** Bokas
  egne hverdagsanker (russefeiring, Vipps-runden, dugnad) er *pedagogiske
  innganger* og kan aldri erstatte pensumetnografien i et eksamenssvar. Si det
  første gang et hverdagsanker brukes.

### 7.2 Case-registeret — hva hver etnografi faktisk viste

Malen for hver oppføring i eksempellageret er: **folk og sted → etnograf, verk
og omtrentlig tid → hva studien faktisk viste → hva den IKKE viser → hvilke
temaer den kan belegge → én linje om situasjonen i dag** (§8.2).

Registeret under er **attestert** — disse opplysningene kan skrives rett ut.
Alt som ikke står her, og alt du er usikker på, følger `(verifiser)`-disiplinen
i §7.4.

| Case (folk, sted) | Etnograf / verk | Hva studien faktisk viste | Kapitler |
|---|---|---|---|
| **Trobrianderne** (Massim-området, Papua Ny-Guinea, 1910-tallet) | Malinowski; brukt av Mauss i *Gaven* | Kula = seremonielt, langsiktig prestisjebytte av halskjeder og armbånd mellom øyer; **gimwali** = den prosaiske prutthandelen ved siden av. Å oppføre seg som i gimwali under kula er en fornærmelse — det er skillet sensor ser etter. | 2.1, 2.2, 1.4, 9.1 |
| **Kwakwa̱ka̱ʼwakw** («kwakiutl» i eldre tekster), nordvestkysten av Nord-Amerika | Boas' materiale, brukt av Mauss | Potlatch = konkurrerende gaveutdeling der prestisje vinnes ved å gi bort. Prestisje- og maktdimensjonen er poenget — ikke «fest». Kolonial kontekst er påkrevd: **potlatch var forbudt ved lov i Canada 1885–1951**, og praksisen er i dag revitalisert. | 2.1, 2.2 |
| **Nuer** (Sør-Sudan, feltarbeid på 1930-tallet) | E.E. Evans-Pritchard, *The Nuer* (1940) | Patrilineær avstamning og segmentær organisering: politisk orden **uten** sentralstat, der konflikter fusjonerer og splitter grupper etter slektskapsnivå. Kveg som gjennomgripende idiom for økonomi, slektskap og ritual. | 3.1, 7.1, 1.1 |
| **Ndembu** (Zambia, den gang Nord-Rhodesia, 1950-tallet) | Victor Turner, *The Ritual Process* (1969) | Initiasjonsritualene viser terskelfasen der vanlig sosial struktur oppheves — **liminalitet** — og den intense likestilte fellesskapsfølelsen mellom liminalpersoner, **communitas**. Communitas er Turners egen utvidelse av van Gennep, ikke van Genneps begrep. | 4.1 |
| **Overgangsritualer generelt** (komparativ syntese, 1909) | Arnold van Gennep, *Les rites de passage* | De tre fasene **separasjon → liminalitet (terskel) → reintegrasjon** som felles form for fødsel, pubertet, ekteskap og død. Van Gennep gjorde ikke feltarbeid — dette er en sammenlignende syntese av andres materiale. | 4.1 |
| **Klassifikasjon og urenhet** (Lele i Kasai, DR Kongo + tekstanalyse av Tredje Mosebok) | Mary Douglas, *Purity and Danger* (1966) | Skitt er «matter out of place» — det som ikke passer inn i klassifikasjonssystemet. Teorien er **ikke** en hygieneforklaring; den handler om anomalier i en orden. Analysen av matforbudene er tekstanalyse, ikke feltarbeid blant dem som følger dem. | 4.2, 1.2 |
| **Religion og sosial struktur** (australske urfolks totemisme, via andres rapporter, 1912) | Émile Durkheim, *Religionens elementære former* | Det hellige/det profane som grunnskille, og tesen om at religionen uttrykker og opprettholder samfunnets egen struktur. Durkheim gjorde **ikke** feltarbeid; premisset om «elementære former» hos «enkle» samfunn er evolusjonistisk faghistorie som faget senere har forlatt — si det (§8.5). | 4.2 |
| **Bali/Java/Marokko** | Clifford Geertz (i dette emnet lest via Eriksen) | Kultur som intersubjektive meningssystemer som må tolkes — «tett beskrivelse» — og kultur som «modell av» og «modell for» virkeligheten. | 1.2 |
| **Langkawi** (Malaysia) | Janet Carsten, *The Heat of the Hearth* (1997) | **Relatedness**: slektskap skapes gjennom delt mat, delt ildsted og delt bosted over tid — noe man *gjør*, ikke bare arver. Poenget er ikke at biologi er irrelevant, men at skillet biologisk/sosialt ikke lar seg trekke slik vi antar. | 3.1 |
| **Transnasjonal adopsjon til Norge** | Signe Howell, *The Kinning of Foreigners* (2006) | **Kinning**: den aktive prosessen der et barn gjøres til slekt — slektskap som arbeid og praksis. | 3.1 |
| **Kumaon-Himalaya** (Uttarakhand, India) | Radhika Govindrajan, *Animal Intimacies* (2018) | Dyreofring der geita både er familiemedlem og offer: relasjoner **på tvers av arter** binder slektskap, økonomi og religion sammen. | 4.2, 3.1, 6.1 |
| **Norsk lakseoppdrett** | Marianne Lien, *Becoming Salmon* (2015) | Oppdrettslaksen blir til i skjæringspunktet mellom biologi, teknologi, marked og forvaltning — natur og kultur lar seg ikke skille i praksis. | 6.1, 6.2, 5.1 |
| **Jardim Gramacho, Rio de Janeiro** | Kathleen Millar, *Reclaiming the Discarded* (2018) | Søppelplukkerne vender tilbake til fyllinga ikke bare av nød: arbeidets rytme og relative selvstendighet passer et prekært liv. **Prekaritet er en livsform, ikke bare mangel** — den vanligste feillesningen er å gjøre studien til ren elendighetsbeskrivelse. | 2.3 |
| **Adivasi og naxalitt-geriljaen** (Jharkhand m.fl., India) | Alpa Shah, *Nightmarch* (2018) | Sju netters marsj med en maoistisk gerilja: staten som frarøver og geriljaen som alternativ — men også bevegelsens **egne** motsetninger (lederskap av høyere kaster, ulikhet mellom kjønnene, uklare motiver hos rekruttene). Shah romantiserer ikke; hun viser begge deler. Kjønn og tillit i felt er en del av analysen, ikke en fotnote. | 8.1, 7.1, 3.2, 1.4 |
| **Strukturell vold** (Haiti) | Paul Farmer | Vold innebygd i sosiale og økonomiske strukturer, historisk skapt, som rammer systematisk uten en identifiserbar gjerningsperson. Presisjon som løfter et svar: **begrepet er opprinnelig Galtungs (1969)**; Farmer gjør det etnografisk. | 7.1 |
| **Tiv** (sentrale Nigeria) | Paul Bohannan | Byttesfærer: ulike goder sirkulerte i atskilte sfærer (livsopphold, prestisjegoder som messingstenger, rettigheter i mennesker), og allmennpenger brøt sfærene ned. | 2.2 |
| **New Guinea / Samoa** | Margaret Mead | At kjønnstemperament varierer på tvers av samfunn, og altså ikke følger av biologi alene. Ærlighetskrav: Samoa-materialet har vært **omstridt** siden Freemans kritikk — si det i én setning; det er et pluss-punkt, ikke en svekkelse. | 3.2 |
| **Papua Ny-Guinea** (Gimi-området) | Paige West | Emnets monografi H2020–H2022, om hvordan naturvern og kaffemarked kobler et lokalsamfunn til globale kretsløp. Nevnes kun som forgjenger til Shah (⚠ §12.6). | 8.1 |

**Ikke-etnografiske pensumbidrag** som likevel må tilskrives riktig: **Mauss**
(*Gaven*, 1925) gjorde ikke feltarbeid — han syntetiserte Malinowskis, Boas' og
andres materiale sammen med rettshistorie; **de Beauvoir** og **Butler** er
filosofer, ikke antropologer, og **performativitet** hos Butler betyr at kjønn
blir til gjennom gjentatte handlinger, ikke at det er et rollespill en ferdig
person velger; **Eriksen** (*Små steder, store spørsmål*) er grunnbok og
syntese, og de åtte globaliseringsnøkkelordene er hans analytiske raster, ikke
et empirisk funn.

### 7.3 Tilskriv aldri en etnografi en konklusjon den ikke trakk

Dette er fagets alvorligste feil, og den tyngste kvalitetsporten i denne boka.
Tabellen er obligatorisk der posisjonene behandles:

| Ikke skriv | Skriv |
|---|---|
| «Mauss fant i sitt feltarbeid at …» | Mauss **syntetiserte andres etnografi** — Malinowskis Trobriand-materiale, Boas' potlatch-materiale, rettshistoriske kilder. Han var ikke i felt. |
| «Kula er handel» | Kula er **seremonielt prestisjebytte**; den prosaiske handelen heter **gimwali** og holdes bevisst atskilt. Å blande dem er nøyaktig fellen sensor tester. |
| «Potlatch handler om å ødelegge rikdom» | Potlatch er **konkurrerende gaveutdeling** der prestisje vinnes ved å gi. Ødeleggelse forekommer i enkelte former og perioder, men er ikke definisjonen — og eskaleringen på 1800-tallet skjedde under kolonial omveltning og forbud. |
| «Evans-Pritchard viste at Nuer levde i anarki» | Han viste **orden uten sentralstat**: et segmentært system der grupper fusjonerer og splittes etter slektskapsnivå. «Anarki» i dagligtalens betydning er det motsatte av poenget. |
| «Turner fant de tre fasene» | **Van Gennep** formulerte de tre fasene (1909). **Turner** utviklet liminalitetsfasen videre og la til **communitas**. Å slå dem sammen er en presisjonsfeil sensor merker. |
| «Douglas forklarte matforbud med hygiene» | Douglas forklarte urenhet som **anomali i et klassifikasjonssystem** — «matter out of place». Hygieneforklaringen er nettopp den hun avviser. |
| «Durkheim beviste at religion er samfunnet» | Durkheim **argumenterte** for at religiøse forestillinger uttrykker sosial struktur, på grunnlag av andres rapporter om australske urfolk. Det er en tese med kjente svakheter, ikke et bevis. |
| «Carsten viste at slektskap ikke er biologisk» | Carsten viste at slektskap **skapes gjennom delt substans og hverdagsliv**, og at skillet biologisk/sosialt ikke lar seg trekke rent. Ikke at biologi er irrelevant. |
| «Millar viste hvor fælt de har det» | Millar viste at prekært arbeid er en **livsform med egen logikk** — rytme, relativ selvstendighet, relasjoner — ikke bare mangel. Elendighetslesningen er feil lesning. |
| «Shah viser at naxalittene kjemper Adivasienes sak» | Shah viser **både** statens frarøvelse og bevegelsens egne motsetninger: kasteskjevt lederskap, kjønnsulikhet, sammensatte motiver hos rekruttene. Ensidigheten er feil #10 i ny drakt. |
| «Swanson viste at oppdrett skaper sacrifice zones» | Formuler forsiktig og merk `(verifiser)` til pensumteksten er kontrollert (§7.4): begrepet **sacrifice zones** brukes om områder som ofres for produksjon andre steder, koblet til sentrum/periferi-logikk. |
| «Mead beviste at kjønn er sosialt» | Mead **argumenterte** for at kjønnstemperament varierer kulturelt; Samoa-materialet er omstridt. Argumentet står, beviset er svakere enn slagordet. |
| «Butler mener kjønn er et rollespill» | Butlers **performativitet** betyr at kjønn blir til gjennom gjentatte, normstyrte handlinger — ikke at en ferdig person velger en rolle om morgenen. |
| «Farmer fant opp strukturell vold» | Begrepet er **Galtungs** (1969); Farmer gir det etnografisk innhold gjennom arbeidet på Haiti. |

**Konsekvens for oppgaver og fasiter:** en fasit som tilskriver en etnografi en
konklusjon den ikke trakk, er en byggefeil på linje med feil svar i et regnefag —
også når den «låter riktig».

### 7.4 `(verifiser)`-disiplin

- Skjelettet merker selv en rekke etnografiske detaljer med `(verifiser)`:
  Turners Ndembu-detaljer, Carstens Langkawi, Howells kinning, Bohannan/Tiv,
  Govindrajans tittel, Douglas' matforbud, Durkheims totemisme, Swansons
  Chile/Japan-laks, Millars Rio-fylling, Andersson, Leivestad & Schober, Zengin,
  Farmers Haiti. Der §7.2 gir en attestert formulering, bruk den. Der du går
  utover den, **merk med den literale strengen `(verifiser)`**.
- **Bruk NØYAKTIG formen `(verifiser)`** — ikke «(verifiser tittel)», ikke
  «(verifiser detaljer)». Kvalitetsporten leter etter den literale strengen, og
  varianter slipper gjennom uoppdaget.
- `(verifiser)`-markører er **påkrevd i førsteutkastet** der du er usikker, men
  de **feller sluttporten**. De løses i verifiseringsbølgen (fase 6) FØR
  `sjekk-bok.py` kjøres siste gang.
- **Usikre detaljer utelates hellere enn gjettes.** Skriv «Swansons arbeid om
  industrielt lakseoppdrett» framfor å gjette land, årstall eller artikkeltittel.
  **Ingen oppdiktede verk, årstall, folkenavn eller feltsteder** — det er den
  ene feilen som ødelegger bokas troverdighet hos en fagperson.
- **Utgave-sensitivitet ⚠:** monografien og de skiftende artiklene (Swanson,
  Andersson, Millar, Govindrajan, Zengin, Leivestad & Schober; tidligere
  Nuttall, Stensrud, Gudeman, Stewart & Strathern, Rakopoulos) er
  **utskiftbart eksempellager** og presenteres som *eksempler*, ikke som stabile
  ankere. Stabile ankere (aldri ⚠): Eriksen, Mauss, van Gennep/Turner,
  Evans-Pritchard, Durkheim, Douglas, Geertz.

---

## 8. KULTURRELATIVISME OG NORMATIV VARSOMHET (bindende — faglig presisjon, ikke høflighet)

Faget handler om **levende folkegrupper**. En fremstilling som gjør dem til
kuriositeter eller til historieløse illustrasjoner, er faglig gal — og sensor
merker forskjellen umiddelbart, fordi hele fagets metodologiske relativisme
handler om nettopp dette.

### 8.1 Språk (grep-sjekkes, §12.5)

- **Forbudt som bokas egne ord:** «primitiv(e)», «naturfolk», «usivilisert»,
  «de innfødte», «eksotisk» om folk eller praksiser, «stammefolk»/«stammesamfunn»
  som analytisk kategori, «underutviklet» om samfunn.
- **Skriv i stedet:** folkets eget navn (Adivasi, Nuer, Ndembu,
  Kwakwa̱ka̱ʼwakw, Tiv, Trobriandere), «urfolk», «småskalasamfunn» /
  «storskalasamfunn» (fagets egne, nøytrale termer og et fast KOMP-par),
  «samfunn uten sentralstat» / «statsløse samfunn» (Evans-Pritchards egen
  analytiske kategori).
- **Tre presise unntak** der ordene MÅ kunne stå, alltid med ramme:
  1. **Verktitler** gjengis korrekt (Meads *Sex and Temperament in Three
     Primitive Societies*, Wests *From Modern Production to Imagined Primitive*)
     — i anførselstegn eller kursiv, aldri som bokas egen beskrivelse.
  2. **Faghistorisk kritikk:** når boka forklarer at antropologien selv brukte
     «primitiv» i en evolusjonistisk ramme den senere har forlatt (§8.5).
  3. **Statlige kategorier:** Adivasi omtales i indisk lovgivning som
     «Scheduled Tribes», og «tribal» er en kolonial-administrativ merkelapp.
     Skriv **Adivasi** (folkets egen betegnelse, «de opprinnelige innbyggerne»),
     og forklar statskategorien som nettopp det — en kategori staten bruker, med
     anførselstegn, aldri bokas egen.
- Disse tre unntakene kontrolleres med `sjekk-prosaregel.py` (§12.5): hvert treff
  skal stå i en setning som også bærer rammen.
- **Ingen «vi» mot «dem».** Skriv aldri «vår kultur» mot «deres kultur» — det er
  etnosentrismen faget skal lære leseren å få øye på. Bruk konkrete
  betegnelser: «i Norge i dag», «blant Ndembu på 1950-tallet».

### 8.2 Etnografisk nåtid er forbudt som standard

Presens-formen «Nuerne bruker kveg som …» gjør et folk historieløst og
fastfryser dem i etnografens feltperiode. Boka skriver i **datid med tidfesting**:
«Da Evans-Pritchard gjorde feltarbeid på 1930-tallet, var kveg …». Presens er
tillatt om praksiser som beviselig pågår, og da med tidsmarkør («i dag», «fortsatt»).

**Hvert case i eksempellageret skal ha én linje om situasjonen i dag** — det
koster to setninger og fjerner hele museumseffekten:

- **Nuer:** i dagens Sør-Sudan, sterkt preget av borgerkrig og fordriving siden
  2013.
- **Trobrianderne:** Milne Bay-provinsen i Papua Ny-Guinea; kula-nettverket
  eksisterer fortsatt.
- **Kwakwa̱ka̱ʼwakw:** British Columbia, Canada; potlatchen ble forbudt
  1885–1951 og er i dag revitalisert som levende praksis.
- **Ndembu:** nordvestlige Zambia.
- **Adivasi:** rundt hundre millioner mennesker i India, med pågående konflikter
  om land, gruvedrift og rettigheter.
- **Tiv:** sentrale Nigeria.

### 8.3 Kolonial kontekst nevnes der den er relevant

Ikke som moralsk tilleggsmerknad, men fordi den forklarer **hvordan kunnskapen
ble til** — og fordi det er en typisk «meget god»-markør å se det:

- Malinowskis Trobriand-feltarbeid foregikk under australsk kolonialstyre.
- Evans-Pritchards Nuer-feltarbeid ble gjort i det anglo-egyptiske Sudan, i
  kjølvannet av britiske straffeekspedisjoner og med kolonialadministrasjonens
  medvirkning.
- Potlatchforbudet i Canada (1885–1951) er statlig undertrykking av nettopp den
  praksisen Mauss analyserer.
- Mauss, van Gennep og Durkheim bygde på rapporter samlet inn i kolonitiden, av
  misjonærer og administratorer.
- Adivasienes marginalisering i India har en lang historie av frarøvelse
  (dispossession) — det er selve premisset for Shahs analyse.
- Swanson, Lien og Govindrajan skriver i en tradisjon som eksplisitt utfordrer
  «vestlige» kunnskapsregimer som enerådende. Skriv «eurosentriske» eller
  «vestlige» med anførselstegn der begrepet drøftes, aldri som selvsagt kategori.

### 8.4 Sensitive praksiser

Initiasjonsritualer med smerte eller omskjæring, dyreofring, kaste, arrangerte
ekteskap og væpnet konflikt behandles **i kontekst og uten sensasjon**. Boka
bruker sin egen metodologiske relativisme aktivt: forklar praksisen slik den gir
mening i sin sammenheng (akse 1 og 4), og skill eksplisitt mellom den
**metodologiske** relativismen (et forskningsprinsipp) og den **etiske** (den
problematiske påstanden om at alt er like rett). Boka tar ikke stilling på
leserens vegne i menneskerettighetsspørsmål, men skjuler heller ikke at
spørsmålet finnes — det er nettopp drøftingsaksen i kap. 1.2.

### 8.5 Fagets egen fortid skal stå

Antropologien selv opererte med en evolusjonistisk trapp fra «primitiv» til
«sivilisert», og flere av bokas egne klassikere er skrevet innenfor den. Det
skal sies der klassikerne innføres (Durkheims «elementære former», Meads
boktittel, Mauss' materiale) — kort, faktuelt, uten unnskyldninger og uten
fordømmelse. Det er både faghistorisk presisjon (akse 3) og bokas beste vern mot
å arve språket.

---

## 9. MODELLBESVARELSER (ærlighet, nivå og variasjon)

### 9.1 Ærlig merking — ufravikelig

- Hver modellbesvarelse innledes med én linje: **«Nyskrevet modellbesvarelse —
  skrevet av oss for denne boka. SOSANT1000 har ti publiserte sensorveiledninger
  som beskriver nivåene, men ingen publiserte løsningsforslag og ingen
  kandidatbesvarelser. Dette er derfor ikke en ekte studentbesvarelse.»**
- En boks som heter «C-besvarelse» skal **VÆRE en C** — tittel, tekst og
  margnotater skal stemme. En polert A merket som C er en byggefeil. Samme for
  E-boksen: den skal faktisk mangle det den sier den mangler.
- Ordet «studentbesvarelse» er forbudt i bokinnholdet utenfor
  ærlighetslinjen over (grep-sjekkes, §12.5). Skriv «modellbesvarelse».

### 9.2 Meta-fasit er FORBUDT

«En A-besvarelse ville her ha drøftet …» er en regibemerkning, ikke en fasit.
**Drøftelsen skal skrives UT** — kort, skarp, etnografisk forankret, med
landing. Grep-sjekkes: `en A-besvarelse ville|ville ha drøftet` = 0 treff.

Margnotater er lov og ønsket, men de skal **peke på tekst som faktisk står
der**: `> Margnotat: her settes Mauss og Millar opp mot hverandre i samme avsnitt — det er akse 3, og det er dette som løfter fra god til meget god.`

### 9.3 Nivåfordeling i boka (bindende)

| Kapittel | Nivåer som SKAL finnes |
|---|---|
| 9.6 (kortsvar: tilskrevet vs. ervervet status) | A/meget god + C/god + E/minimumskrav |
| 9.7 (langsvar: «økonomi ikke løsrevet») | A/meget god + C/god + E/minimumskrav + **midtnivå-besvarelse (B)** |
| 9.8 (monografi-langsvar ⚠) | A/meget god + C/god + E/minimumskrav |
| 0.2 (kortsvarhåndverket) | Samme korte kortsvar besvart på E-, C- og A-nivå med margkommentarer |
| 0.3 (langsvarhåndverket) | Samme langsvarsoppgave skissert på E-, C- og A-nivå med margkommentarer på de fire aksene |

**Midtnivå-besvarelsen (B) i kap. 9.7** er et README-krav: realistisk
førsteårsspråk, litt rotete disposisjon, tre tekster brukt men den ene tynt, ett
begrep upresist — og faglig god. Med margnotater om hva som er **BRA NOK** og de
2–3 grepene som skiller den fra A. Leseren trenger et realistisk
sammenligningspunkt, ikke bare polert A og karikatur-E.

### 9.4 Konklusjonsvariasjon (bindende)

Modellbesvarelsene skal **ikke alle lande på samme kompromissform** («X er et
hensyn, ikke hele svaret»):

- **Kap. 9.7 skal konkludere SKARPT:** A-besvarelsen tar klart parti — at
  påstanden holder også for den moderne markedsøkonomien, med begrunnelsen
  utskrevet gjennom de tre tekstene — og er likevel toppnivå. Margnotat:
  «Forbehold er et verktøy, ikke obligatorisk garnityr. En skarp, etnografisk
  begrunnet konklusjon er en fullgod A-form.»
- **Kap. 9.6 og 9.8** kan lande mer avveiende, men må da begrunne selve
  avveiningen — «det er sammensatt» uten grunner er feil #3 i ny drakt.

### 9.5 Vippe-case (bindende)

Minst én drøftingsoppgave i boka skal ha to fullt forsvarlige landinger. Fasiten
skriver **UT begge lesningene** og merker oppgaven **«(omstridt — begge
landinger forsvarlige)»**. Anbefalt plassering: kap. 4.1 (vinner eller taper
liminalitetsbegrepet ved å strekkes ut over ritualene?) eller kap. 6.1 (bør
skillet natur/kultur oppheves analytisk, eller mister vi da et nyttig verktøy?).
Entydige fasiter hele veien trener aldri håndtering av ekte faglig ambivalens —
og langsvarene er ifølge veiledningene «med vilje laget relativt åpne».

---

## 10. Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»; SKAL i førsteutkastet)

- **Kun eksamensrelevant stoff.** «Bør kjenne til»-stoffet (Butlers
  performativitet i 3.2; Douglas og Durkheim i 4.2; formalisme/substantivisme i
  2.3; etnisitet/nasjonalisme) plasseres SIST i sitt kapittel og merkes
  eksplisitt med sin lave frekvens.
- **HARDT LINJEBRUTT PROSA ER FORBUDT (rendrings-kritisk).** Rendreren gjør
  HVERT enkelt `\n` om til `<br />`. Brødtekst som er brutt ved ~60 tegn i
  python-kilden gir derfor linjeskift midt i setningene for leseren. Regelen:
  **ett avsnitt = én lang linje i JSON-strengen**, `\n\n` mellom avsnitt, og
  enkelt `\n` KUN der linjeskiftet faktisk er ønsket (deloppgaver, listelinjer,
  premisslinjer, tabellrader, margnotater). Dette gjelder ALLE tekstbærende
  felter: `content`, `problem`, `solution`, `task`, `hints`. Ikke la
  editor-ombrekking, `textwrap` eller trippelfnutt-strenger med innrykk lekke
  inn i dataene.
- **Godt, flytende norsk (UFRAVIKELIG).** Hele setninger, korte avsnitt (2–4
  setninger), aktiv «du»-form. Telegramstil er FORBUDT: «Begrep: resiprositet.
  Kilde: Mauss.» skal være «Resiprositet er Mauss' begrep for bytte styrt av
  gjensidighet snarere enn pris.» Konkret norsk knagg før fagtermen; presisjon
  vinner ved tvil. Fremmedord får norsk knagg først, fagtermen i parentes:
  «gjensidighet (resiprositet)», «terskelfase (liminalitet)», «frarøvelse
  (dispossession)».
- **Ingen uforklart sjargong.** Fagstoffet er nybegynnervennlig — det er
  METAspråket som må ryddes. Sjangerkodene K, L, KOMP, MONO og PÅ, feilkodene
  #1–#12 og all karaktersjargong («C-stoff», «A-markør», «meget god») forklares
  i klarspråk ved FØRSTE bruk **per kapittel**.
- **Hver oppgave synlig eksamensforankret** med sjanger-tag i ledende parentes:
  `(Eksamenssjanger kortsvar — Del 1; slike oppgaver ber alltid om minst ett etnografisk eksempel.)`
  Sjangerkoden skrives fullt ut ved første bruk per kapittel.
  Vanskelighetsgraden skrives ALDRI inn i `task` (den ligger i `difficulty`).
- **Deloppgaver på egen linje med fet merking:** `…\n\n**a)** …\n**b)** …`.
  ALDRI a) b) c) bak hverandre i løpende tekst. Små bokstaver, aldri A)/[A].
  Ikke bruk `subTasks`.
- **Inline-nummerering** `(1) … (2) … (3) …` med tre eller flere påfølgende
  settes på egne linjer. Gjelder særlig de tre pliktene og de tre rituelle
  fasene — de skal uansett stå som egne linjer, i rekkefølge.
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. X.Y](/sosant1000/sosant1000-X-Y)`. Død «se kapittel
  X.Y»-tekst er FORBUDT. Aldri lenker i `title`-felt.
- **Karakter-realisme:** Del 0 sier eksplisitt at **C er en god og vanlig
  karakter**, særlig i et innføringsemne der mange er i sitt første semester og
  ikke er programstudenter (veiledningene ber selv om et mildt blikk her).
  Formuleringen **«Prioritet: perfekt» er FORBUDT** — skriv «høyeste prioritet».
  Prioritetsklassene fra skjelettet oversettes slik: *perfekt* → **høyeste
  prioritet**, *kunne* → **kunne**, *kjenne* → **bør kjenne til**. «Gapet til A»
  rammes inn som **oppgraderingsmeny**, ikke mangelliste. Eksamen er A–F, så
  «bestått-på-marginen»-varianten er ikke påkrevd — men fordi **begge deler må
  bestås**, SKAL boka minst ett sted vise et kortsvar som så vidt når
  minimumskravet, med konkret oppgraderingsmeny (kap. 0.2, E-versjonen).
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter HVER prøvefasit — bruk
  rubrikkene i §6.3. I hvert temakapittel: minst én **lett innstegsoppgave**
  tidlig (`difficulty: "lett"`, ren gjengivelse med egne ord, vennlig fasit) før
  første fulle eksamenssjanger.
- **Hverdagsanker + verdens-caser:** abstrakte kjernetemaer åpner med et konkret
  anker FØR apparatet (gaven: at du «må» gi noe tilbake når naboen kommer med
  kake; liminalitet: dagene mellom siste eksamen og første arbeidsdag;
  status/rolle: at du er samme person hjemme og på jobb, men gjør noe annet).
  Ankeret kobles alltid tilbake til pensumetnografien (§7.1). Eksemplene er
  verdens-caser — ALDRI metaeksempler av typen «en medstudent skriver …».
- **Erfarings-bro:** mange lesere har egne erfaringer fra flerkulturelle miljøer,
  reiser, helse eller skole. Legg en kort `tip`-boks i kap. 0.3 som viser
  KONVERTERINGEN: (1) start i antropologens begrep, (2) bruk erfaringen som
  ILLUSTRASJON av begrepet, aldri som belegg alene, (3) koble tilbake til
  pensumetnografien og drøftingsaksen. Å bare advare mot «synsing» uten å vise
  konverteringen skyver bort leserne som har mest materiale.
- **Difficulty-spredning + kald bank:** boka skal ha genuint krevende oppgaver
  merket `difficulty: "vanskelig"` (og «(krevende)» i oppgaveteksten der det
  hjelper), ikke alt på middels. Én merket **kald bank** i kap. 9.4 (§5.3).
- **Hint på alle oppgaver:** hvert `exercise` har utfylte `hints`. Første hint =
  hvilket begrep, hvilken antropolog eller hvilken etnografi oppgaven krever
  («Start i skillet mellom kula og gimwali — hva er det som faktisk sirkulerer i
  hver av dem?») — **ALDRI konklusjonen**. Eneste unntak er den kalde banken.
- **Stokket flervalg og varierte fasit-mønstre:** statiske flervalg i
  prøve-`collapsible`-er har stokkede fasit-bokstaver (ALDRI «alle a»), og
  prøve-tipen sier hvor flervalget bor. Gjelder ALLE ensartede fasitlister, også
  «hvilken feil begår kandidaten»-drillen i kap. 9.5 — aldri samme feilkode som
  fasit to ganger på rad. Verifiseres med `sjekk-fasitfordeling.py` (terskel 45 %).
- **Distraktorer straffer aldri grundig lesing:** en distraktor gjengir ALDRI
  bokas egen presisering som «galt» svar. Ligger en distraktor nær sannheten
  (typisk: «Turner formulerte de tre fasene», «Douglas forklarte urenhet med
  hygiene», «Mauss gjorde feltarbeid blant Trobrianderne»), skal
  `explanation`/fasitkommentaren forklare eksplisitt hvorfor den ikke holder.
- **Signal-/hintbokser ETTER oppgaven:** en boks som varsler hva en drilloppgave
  tester («her ligger kula/gimwali-fella») plasseres ETTER oppgaven, aldri foran.
- **Frekvenstall = telte belegg:** hver «N av 11 sett»-påstand skal stemme EKSAKT
  med skjelettets belegg-liste for kapitlet, og nevneren er alltid **11** (§6.1).
- **Begrepsbank = oppslagsverk:** hvert pensumkart og hvert etnografisk
  eksempellager åpner med standardnotisen: «Begrepsbanken er
  flashcard-/repetisjonsstoff — den gjentar det du nettopp har lest. Hopp trygt
  over ved førstegangslesing; tidsanslaget for kapitlet gjelder kjernestoffet.»
  `definition`-blokker slettes ALDRI for å «rydde» — de er flashcard-kilden.
- **Øktmerking:** alle kapitler med `estimatedMinutes > 45` — altså 0.2, 0.3,
  1.1, 1.2, 1.4, 2.1, 2.2, 2.3, 3.1, 3.3, 4.1, 4.2, 5.1, 5.2, 6.1, 6.2, 7.1,
  8.1, 9.2, 9.5, 9.7 og 9.8 — har tidsanslag per løkke («Løkke 3 — potlatch og
  prestisje (~15 min)») eller eksplisitte «— naturlig pausepunkt —»-markører.
  Lange modellbesvarelser har pausepunkt mellom hovedseksjonene.
- **Tidsbudsjett-konsistens:** der en oppgaves deklarerte tid avviker fra summen
  av deltidene, forklares differansen (§6.5). «Lite tid?»-boksen sier eksplisitt
  at kapitlenes tidsanslag er **LESEtid**, og at den som skriver besvarelser for
  hånd bør legge på ca. ×1,5.

### 10.1 Del 0-pakken (alt dette SKAL finnes i kap. 0.1, der ikke annet er sagt)

- **«Slik leser du denne boka»-orienteringsboks** (type `text` eller `tip` —
  **ALDRI `definition`**, det ville endret flashcard-kvoten) med: karakterskalaen
  A–F og sensors tre-nivå-gradering (minimumskrav → god → meget god), hva
  «C-stoff» og «A-markør» betyr, en kompakt liste over sjangerkodene K, L, KOMP,
  MONO og PÅ skrevet fullt ut, og at typiske feil har et samlet register
  (#1–#12) med eget kapittel (9.5).
- **«Lite tid?»-boks** (`tip`): hurtigrute for 3–5 dager (kapittelrekkefølge +
  timeanslag; prioriter de syv kjernetemaene, ikke favorittene) og ukeplan
  bygget av summerte `estimatedMinutes`. **Summen av de 29 kapitlene er 1 565
  minutter ≈ 26 timer lesetid** — bruk det telte tallet, ikke skjelettets
  avrundede «~1 610».
- **Kildenote for frekvens-empirien** — ordlyden i §6.1, aldri utvidet.
- **Sjangerkort på ÉN side** som ER kortet: sjanger (K, L, KOMP, MONO, PÅ) →
  én linjes oppskrift → plassering (Del 1 eller Del 2) og tidsbudsjett →
  vanligste feil. Ikke en lenkeliste.
- **Deltidsrute** 10–12 uker (~8 t/uke) med de tre øvingseksamenene fordelt på
  tre ulike helger — aldri stablet i siste uke.
- **«Lese mye, skrive lite»-boks:** legitim rute for lese-øveren (les oppgaven →
  formuler svaret mentalt i én setning → les modellbesvarelsen som sensor) +
  minimumsrådet: skriv minst ÉN øvingseksamen på tid. Fire timers skriving er en
  fysisk ferdighet, også på tastatur.
- **Bokas samlede oppslagskort** (DNA-drøftings «hvem eier hva»-kort): én
  `collapsible` med ren, printbar tabell **etnografi → antropolog → begrepet den
  belegger → hjemkapittel (lenke)** over alle casene i §7.2. Fullversjonen med
  «hva studien faktisk viste» bor i temakapitlenes eksempellagre; kortet i 0.1
  er den glemsomme leserens gjenopptaksverktøy.
- **Eksamensformen og strykregelen** forklart som bokas strategiske hovedpoeng
  (§6.2), med et nyskrevet miniatyrsett (6 kortsvar + 3 langsvar) som viser
  hvordan man velger fire og ett.

---

## 11. Kvotekontrakt (AUTORITATIV — bindende total, aldri overstyr)

Verifisert mot skjelettets kvotesammendrag: alle deltotaler og totalene summerer.

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1–0.3 | 40 | 28 | 0 (metadel) |
| 1 | 1.1–1.4 | 86 | 88 | 4 |
| 2 | 2.1–2.3 | 76 | 80 | 4 |
| 3 | 3.1–3.3 | 64 | 64 | 4 |
| 4 | 4.1–4.2 | 50 | 50 | 4 |
| 5 | 5.1–5.2 | 50 | 48 | 4 |
| 6 | 6.1–6.2 | 46 | 46 | 4 |
| 7 | 7.1 | 28 | 28 | 4 |
| 8 | 8.1 | 26 | 28 | 4 |
| 9 | 9.1–9.8 | 83 | 53 | 0 (3 øvingseksamener) |
| **Sum** | **29 kap.** | **549 ✓ (≥500)** | **513 ✓ (≥500)** | **32 + 3 ØE** |

Per kapittel (quiz · flashcards · estimatedMinutes) — **minimum, aldri under;
overskyting er lov**:

| Kap. | Q · F · min | Kap. | Q · F · min | Kap. | Q · F · min |
|---|---|---|---|---|---|
| 0.1 | 10 · 8 · 40 | 3.1 | 26 · 26 · 60 | 6.2 | 24 · 24 · 55 |
| 0.2 | 15 · 10 · 55 | 3.2 | 18 · 18 · 45 | 7.1 | 28 · 28 · 65 |
| 0.3 | 15 · 10 · 65 | 3.3 | 20 · 20 · 50 | 8.1 | 26 · 28 · 70 |
| 1.1 | 20 · 20 · 55 | 4.1 | 28 · 28 · 60 | 9.1 | 14 · 8 · 45 |
| 1.2 | 22 · 24 · 60 | 4.2 | 22 · 22 · 50 | 9.2 | 14 · 8 · 55 |
| 1.3 | 20 · 20 · 45 | 5.1 | 28 · 26 · 60 | 9.3 | 12 · 8 · 45 |
| 1.4 | 24 · 24 · 60 | 5.2 | 22 · 22 · 55 | 9.4 | 10 · 6 · 45 |
| 2.1 | 30 · 32 · 70 | 6.1 | 22 · 22 · 55 | 9.5 | 15 · 8 · 50 |
| 2.2 | 26 · 28 · 55 | | | 9.6 | 6 · 5 · 40 |
| 2.3 | 20 · 20 · 55 | | | 9.7 | 6 · 5 · 50 |
| | | | | 9.8 | 6 · 5 · 50 |

**Bindende total: quiz 549 · flashcards 513 · 1 565 minutter.** Flashcards
telles som **toppnivå `definition`-blokker med `title`**. Prøvekapitler har
ingen kvote (ingen quiz, ingen begrepsbank).

### 11.1 Quiz-filformat

`src/lib/data/quiz-staging/sosant1000-<del>-<nr>.quiz.json`:

```json
[{ "question": "…", "options": ["riktig", "distraktor", "distraktor", "distraktor"], "explanation": "…" }]
```

Nøyaktig **4 alternativer**, `options[0]` **ALLTID** riktig. Runtime stokker
rekkefølgen, så `explanation` skal ALDRI si «alternativ to» eller «det tredje
alternativet» — gjenta innholdet i stedet: «Riktig svar er at kula er
seremonielt prestisjebytte …». (Verifiseres med `sjekk-alternativref.py`; 483
slike feil er funnet i live bøker.) Ingen duplikate alternativer.
`explanation` på 2–4 setninger sier hvorfor fasiten er riktig OG hvilken felle
hver nære distraktor tester.

**Distraktor-kalibrering** — nabobegrep-distraktorer fra skjelettets
quiz-profil, aldri tullesvar: tilskrevet/ervervet · metodologisk/etisk
relativisme · kula/gimwali · vertikal/horisontal differensiering · emisk/etisk ·
sex/gender · gave/marked · avstamning/allianse · liminalitet/communitas ·
separasjon/reintegrasjon · dispossession/strukturell vold. I tillegg:
rekkefølge-spørsmål (de tre rituelle fasene, de tre pliktene), «hvem eier
begrepet»-koblinger (van Gennep vs. Turner, Carsten vs. Howell, Galtung vs.
Farmer) og «hvilken feil begår kandidaten»-gjenkjenning.

**INGEN LENGDE-TELL:** fasiten skal IKKE være det lengste eller mest detaljerte
alternativet. Alle fire alternativer skal ha jevn lengde og presisjonsgrad — en
leser som «velger det lengste» skal treffe ~25 %, ikke 77 %. Skriv distraktorene
like fyldige som fasiten; trim heller fasiten. Verifiseres med
`node scripts/hoyskolebok/quiz-lengdesjekk.mjs` etter wiring.

### 11.2 Flashcard-profil

Hovedvekt på **begrep ↔ antropolog ↔ etnografi**-koblinger: Mauss ↔ de tre
pliktene ↔ kula/potlatch · Eriksen ↔ de åtte nøkkelordene ↔ globalisering ·
van Gennep/Turner ↔ liminalitet/communitas ↔ Ndembu · Swanson ↔ sacrifice zones
↔ industrielt lakseoppdrett · Carsten ↔ relatedness ↔ delt mat og ildsted ·
Howell ↔ kinning ↔ transnasjonal adopsjon · Evans-Pritchard ↔ statsløse samfunn
↔ Nuer · Douglas ↔ «matter out of place» ↔ klassifikasjon · Farmer ↔ strukturell
vold ↔ Haiti · Millar ↔ prekaritet ↔ Rio · Shah ↔ makt/motstand ↔
Adivasi/naxalitter. Formatet speiler kortsvarets kjerne: presise «hva er X hos
Y, og hvilken etnografi belegger det»-kort — nøyaktig presisjonen sensor måler.

---

## 12. Fagspesifikk stil (ufravikelig for SOSANT1000 — fra skjelettets §1–§2)

### 12.1 Notasjonsstandard

- **Norsk bokmål. Ingen matematisk notasjon, ingen `$…$` noe sted.** Boka er
  symbolfri, og kravet om «Symbol- og formelliste» er dermed ikke relevant
  (README-unntaket for symbolfrie fag). Hvert temakapittel har `collapsible`
  **«Pensumkart for kapitlet»** i stedet.
- **Dollartegn som ikke er matte MÅ escapes som `\\$`.** Et enkelt bart `$` i en
  streng kutter resten av teksten til rå LaTeX-kilde for leseren. Oddetall `$` i
  samme tekstfelt felles av `sjekk-latex.py`.
- **Verktitler** skrives i kursiv i brødtekst (*Gaven*, *Nightmarch*, *Små
  steder, store spørsmål*, *The Nuer*) og med «anførselstegn» i `title`-felter.
  **Aldri sidetall.**
- **Skrivemåter (grep-konsistens):** «kula» og «gimwali» (små bokstaver, kursiv
  ved første bruk) · «potlatch» · «communitas» · «matter out of place» (engelsk,
  i anførselstegn) · «sacrifice zones» · «relatedness» · «kinning» ·
  «dispossession (frarøvelse)» · «prekaritet» · «Adivasi» (stor A) ·
  «naxalitter» · «emisk» / «etisk» · «tilskrevet» / «ervervet status» ·
  «deltagende observasjon» · «Kwakwa̱ka̱ʼwakw» ved første omtale, deretter kan
  «kwakiutl» brukes med noten om at det er den eldre formen Mauss bruker.
- Fremmedspråklige begreper får norsk knagg først, fagtermen i parentes ved
  første bruk per kapittel.

### 12.2 Sjangerkoder (introduseres i kap. 0.1, skrives fullt ut ved første bruk per kapittel)

**K** kortsvar — begrepsforklaring/redegjørelse med minst ett etnografisk
eksempel (Del 1, svar på 4 av 6, ~12 min per svar) · **L** langsvar — «drøft X
med minst tre pensumtekster» (Del 2, 1 av 3, drøftende komparativt essay) ·
**KOMP** komparativ oppgave — sammenlign to fenomener eller perspektiver, begge
ledd med belegg · **MONO** monografi-langsvar — bygd rundt årets monografi +
minst én annen tekst (obligatorisk langsvarssjanger) · **PÅ** påstandsdrøfting —
«drøft utsagnet», som skal *prøves*, ikke bekreftes mekanisk.

### 12.3 Feilkodene #1–#12 (glosses ved første bruk PER KAPITTEL)

| # | Feil | Forebygges i |
|---|---|---|
| #1 | Teori/begrep uten etnografisk forankring — hyppigste enkeltfeil | alle temakapitler, 0.2, 9.5 |
| #2 | Bare 1–2 kilder i langsvar — automatisk trekk | 0.3, 9.2, 9.7 |
| #3 | Rent referat/gjengivelse uten drøfting | 0.3, 9.2, 9.5 |
| #4 | Tekstene ikke koblet — ramset opp side om side (typisk C) | 0.3, 9.2, 9.7 |
| #5 | Misforstått oppgave — kan gi F på et kortsvar; to slike ⇒ stryk | 0.1, 0.2, 9.1 |
| #6 | Flate definisjoner som ikke treffer pensumforfatterens bruk | 1.1–1.3, 9.1 |
| #7 | Svare på flere enn fire kortsvar — sensor leser bare fire | 0.1, 9.1 |
| #8 | Overse begrepets distinksjoner (gjør «god» til minimumskrav) | 1.3, 2.2, 3.3, 9.1 |
| #9 | Naturalisere det sosiale — slektskap eller kjønn som rent biologisk | 3.1, 3.2 |
| #10 | Monografioppgave uten dybde i monografien | 8.1, 9.4, 9.8 |
| #11 | Ensidig komparasjon — bare det ene leddet beskrevet | 2.2, 9.3 |
| #12 | Ubalansert besvarelse — sterk på ett kortsvar, tynn på resten | 0.1, 9.5 |

**Registeret har nøyaktig tolv koder.** Ikke innfør en trettende noe sted.

### 12.4 Prioritetsklasser

**høyeste prioritet** (skjelettets «perfekt») · **kunne** · **bør kjenne til**.
Skriv ALDRI «Prioritet: perfekt».

### 12.5 Forbudt-termer og prosaregler (grep-sjekkes)

**Hard port** — `sjekk-bok.py`-regexen skal gi **0 treff** (kjøres
case-insensitivt; unntar kap. 0.1, som skal beskrive kildesituasjonen):

```
Prioritet: perfekt|en A-besvarelse ville|ville ha drøftet|studentbesvarelse|offisiell fasit|offisielle løsningsforslag|løsningsforslag fra UiO|naturfolk|usivilisert|de innfødte|\bs\. ?\d+
```

```bash
python3 scripts/hoyskolebok/sjekk-bok.py sosant1000 "Prioritet: perfekt|en A-besvarelse ville|ville ha drøftet|studentbesvarelse|offisiell fasit|offisielle løsningsforslag|løsningsforslag fra UiO|naturfolk|usivilisert|de innfødte|\bs\. ?\d+"
```

Begrunnelse per term: `Prioritet: perfekt` er plattformforbud (karakter-realisme)
· meta-fasit-uttrykkene er forbudt fordi drøftelsen skal skrives ut ·
«studentbesvarelse» er usant (alle modellbesvarelser er nyskrevne — ærlighets-
linjen i §9.1 er eneste tillatte forekomst, og den ligger i kapitler porten
dekker, så bruk formuleringen «ikke en ekte kandidatbesvarelse» der) ·
fasit-/løsningsforslagspåstandene er usanne (ingen finnes i arkivet) ·
«naturfolk», «usivilisert» og «de innfødte» er nedvurderende og faglig
utdaterte (§8.1) · `s. 12`-mønsteret fanger sidetall, som ikke er attestert.

**Prosaregler** — ord som SKAL kunne stå, men bare i en ramme
(`sjekk-prosaregel.py`, ±200 tegn rundt treffet):

```bash
python3 scripts/hoyskolebok/sjekk-prosaregel.py sosant1000 \
    "primitiv" "faghistor|evolusjonis|forlatt|utdatert|kritis|boktittel|originaltittel|verkets tittel"

python3 scripts/hoyskolebok/sjekk-prosaregel.py sosant1000 \
    "stammefolk|stammesamfunn" "Adivasi|Scheduled Tribes|kolonial|statens kategori|myndighetenes kategori|anførselstegn"

python3 scripts/hoyskolebok/sjekk-prosaregel.py sosant1000 \
    "kwakiutl" "Kwakwa|eldre form|eldre skrivemåte|Mauss bruker"
```

### 12.6 Påkrevd terminologi (skal FINNES)

«etnografisk forankring» · «minst tre pensumtekster» · «minimumskrav» / «god» /
«meget god» · «deltagende observasjon» · «totale sosiale fenomen» · «de tre
pliktene» · «kula» · «gimwali» · «potlatch» · «liminalitet» · «communitas» ·
«matter out of place» · «tilskrevet» · «ervervet» · «emisk» · «etisk» ·
«holisme» · «relatedness» · «kinning» · «dispossession» · «strukturell vold» ·
«prekaritet» · «sacrifice zones» · «Adivasi».

**⚠ Monografi-modularitet.** Kapitlene **8.1, 9.4 og 9.8** skal bære
⚠-merkingen, bygges på **gjeldende** monografi (Alpa Shah, *Nightmarch*) og
navngi **Paige West** som forgjenger for kandidater på eldre pensum. Rammen
(«årets monografi som tverrgående eksempellager» + koblingskravet +
metoderefleksjonen) er stabil; empirien er utskiftbar. **Før kap. 8.1 skrives:
sjekk hvilken monografi som står på GJELDENDE pensumliste.** Bytter emnet
monografi, byttes empirien — ikke rammen. Skriv aldri Shah som om hun er evig
pensum.

---

## 13. Kryssbok-lenker (verifisert 26. juli 2026 — alle målfilene finnes i `src/lib/data/chapters/`)

SOSANT1000 er den første sosialantropologiboka i systemet. To bygde bøker har
relevant forkunnskapsstoff: VGS-boka `sosiologi` (Sosiologi og sosialantropologi)
og `exphil03` (drøftingshåndverk i et annet fag). Bruk NØYAKTIG disse titlene og
stiene:

| Kapittel | Lenke |
|---|---|
| 1.1 | `[Hva er sosialantropologi?](/sosiologi/sosiologi-1-2)` |
| 1.2 | `[Kultur – begreper og perspektiver](/sosiologi/sosiologi-2-3)`, `[Etnosentrisme og kulturrelativisme](/sosiologi/sosiologi-2-4)` |
| 1.4 | `[Kvalitative metoder](/sosiologi/sosiologi-6-1)` |
| 3.1 | `[Familie og familieformer](/sosiologi/sosiologi-3-1)` |
| 3.2 | `[Kjønn og kjønnsroller](/sosiologi/sosiologi-4-1)` |
| 3.3 | `[Sosial ulikhet – begreper og perspektiver](/sosiologi/sosiologi-3-3)`, `[Rasisme og diskriminering](/sosiologi/sosiologi-5-6)` |
| 5.1 / 5.2 | `[Globalisering – prosesser og perspektiver](/sosiologi/sosiologi-5-3)` |
| 7.1 | `[Makt – teorier og perspektiver](/sosiologi/sosiologi-4-3)` |
| 0.3 | `[Drøftingshåndverket og sensorens fem krav](/exphil03/exphil03-0-2)` (valgfri — beslektet drøftingshåndverk i et annet fag; presiser at kravene der er exphil-krav, ikke SOSANT1000s fire vurderingsakser) |

Kryssbok-lenkene rammes ALLTID inn som «repetisjon fra videregående — dekker
grunnideen, men SOSANT1000 krever pensumforankring og etnografisk belegg i
tillegg». En VGS-lenke skal aldri fremstå som pensum i emnet.

**Ingen andre kryssbok-lenker.** Vil du legge til en lenke som ikke står i
tabellen, kjør `ls src/lib/data/chapters/<id>.json` først — `sjekk-bok.py`
avviser døde lenker, og en død lenke i en live bok er en synlig feil for
leseren.

Interne lenker (innad i sosant1000) skrives som
`[kap. 2.1](/sosant1000/sosant1000-2-1)` og skal kun peke på kapitler som
allerede er bygget når boka gates. Bygg i skjelettets rekkefølge (§6 i
skjelettet): Del 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → prøver. Merk at 1.2 må
stå ferdig FØR 6.1, og 7.1 FØR 8.1.

---

## 14. Tekniske feller (les før første `json.dump`)

1. **JSON-gyldighet.** Bruk `json.dump`. Faget er fullt av anførselstegn,
   apostrofer og diakritiske tegn — én uescapet anførsel blokkerer hele
   prebuild for hele plattformen.
2. **Hardt linjebrutt prosa er FORBUDT.** Rendreren gjør hvert enkelt `\n` om
   til `<br />`. Ett avsnitt = én lang linje; `\n\n` mellom avsnitt; enkelt `\n`
   kun der linjeskiftet er ønsket. Gjelder `content`, `problem`, `solution`,
   `task` og `hints`. Ikke bruk trippelfnutt-strenger med innrykk eller
   `textwrap` på brødtekst.
3. **LaTeX i JSON krever dobbel backslash.** Boka skal ikke ha LaTeX i det hele
   tatt (§12.1), men regelen gjelder om noe skulle snike seg inn: i
   python-kilden skriver du `"$\\alpha$"` (eller `r"$\alpha$"`). Havner det bare
   én backslash i JSON-fila, blir `\a` et kontrolltegn og rendrer som søppel —
   uten at noe nødvendigvis klager.
4. **Bart `$` er forbudt** utenfor matte — skriv `\\$`. Oddetall `$` i samme
   tekstfelt = avkuttet tekst = rå kildekode synlig for leseren.
5. **`chapterNumber` alltid del-basert** («2.3»), aldri lineær («12»).
   Prøvekapitler: «2.P».
6. **Ingen tom `collapsible`.** Feltet heter `content` og skal inneholde
   blokker. En `text`-nøkkel eller `[]` rendrer som en tom boks.
7. **Unike blokk-id-er** innen kapitlet.
8. **Flashcards kommer KUN fra toppnivå `definition` med `title`.** Flytter du
   en definisjon inn i en `collapsible` for å «rydde», forsvinner kortet fra
   kvoten.
9. **`(verifiser)`-markører** skrives i den literale formen `(verifiser)` (§7.4)
   og løses i fase 6 FØR `sjekk-bok.py` kjøres siste gang.
10. **Ingen `subTasks`, `answer`, `solutionVideo`, `allowsUpload`,
    `allowsCanvasDrawing`** i `exercise`.
11. **Quiz-forklaringer refererer aldri til alternativets plassering** — runtime
    stokker (§11.1).
12. **Ikke bruk `grep -o` med `.{0,N}`-kontekst** mot kapittelfilene: de er
    kompakt JSON på én linje, og mønsteret er kvadratisk (17 GB RAM på
    byggemaskinen 25. juli 2026). Bruk `sjekk-prosaregel.py`, som leser
    JSON-strukturen.

---

## 15. Opphavsrett (ufravikelig)

ALLE oppgaver, case, etnografiske gjenfortellinger, «sitatlignende» passasjer og
modellbesvarelser er **NYSKREVNE** — eksamenssjangrene er malen, ALDRI
originaloppgavene. Ingen formuleringer fra UiO-settene eller fra de ti
sensorveiledningene gjengis ordrett, heller ikke i omskrevet-nær form.
Oppgavesettene og veiledningene er frie etter åndsverkloven § 14, men de er
**mønster, aldri kopikilde**.

Pensumlitteraturen (Eriksen, Mauss, Shah, van Gennep, Turner, Douglas, Durkheim,
Evans-Pritchard, Carsten, Howell, Lien, Swanson, Govindrajan, Millar, Andersson,
Leivestad & Schober, Farmer, Geertz, Mead, de Beauvoir, Butler, Zengin,
Bohannan, West) **refereres og parafraseres** — aldri siteres i lengde, aldri
med sidetall. De klassiske etnografiene er faglig allmenneie og forklares under
sine egne navn i temakapitlene; det er nyskrevne oppgave- og case-VARIANTER som
skal ha endrede fakta, tall og kontekster.

**Tillatte antropologer/verk er uttømmende gitt av skjelettets
begrepskontrakter** (lista over). Navn utenfor denne lista skal ikke innføres
som pensumankere. **Ingen oppdiktede referanser, verk, folkenavn eller årstall.**
Referanser du er usikker på merkes `(verifiser)` og løses i fase 6.

Boka fremstiller seg ALDRI som offisiell, godkjent eller UiO-tilknyttet, og
lover ALDRI et eksamensutfall. (Uavhengighetsdeklarasjonen vises automatisk av
plattformen for `level: 'Høyskole'` — se README «Juridiske deklarasjoner».)

---

## 16. Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json; json.load(open('…'))"` på HVER fil du har skrevet.
2. **Kvotetelling** mot tabellen i §11 (toppnivå `definition`-blokker med
   `title` + antall quiz-spørsmål) — minimum, aldri under.
3. **Forbudt-termer-grep = 0** (regexen i §12.5), og de tre prosareglene grønne.
4. **Kryssbok- og internlenker** peker på eksisterende filer (§13).
5. **Læringsløkke:** `content[]` veksler teori → eksempel → oppgave i løkker med
   `exercise`-blokker INLINE. Unntak: prøve-, øvingseksamen- og
   modellbesvarelseskapitler.
6. **Forkunnskapsdekning:** gå gjennom HVER `exercise` og bekreft at den kun
   hviler på stoff introdusert tidligere i kapitlet eller i en referert
   forkunnskap — ingen usett antropolog, begrep eller etnografi.
7. **Nybegynner-inngang:** alle sjangerkoder (K, L, KOMP, MONO, PÅ), feilkoder
   (#1–#12) og karakterbokstaver forklart ved første bruk PER KAPITTEL; ingen
   kald kode i `competenceGoals` eller i første tekstboks; Del 0 har «Slik leser
   du denne boka»-boksen (type `text`/`tip`, ALDRI `definition`) og hele
   Del 0-pakken (§10.1).
8. **Essaykontrakten:** hver `example.solution`, hver `exercise.solution` og hver
   prøvefasit viser den strukturen instruksjonsverbet krever (§6.4), og
   drøftingsfasiter har må-punkter / pluss-punkter / feller + tre-nivå-momentliste.
   En fasit som bare gjengir begrepet er en byggefeil (feil #1/#3).
9. **Etnografisk belegg (§7):** hvert teoretisk poeng har minst ett navngitt
   case (folk + etnograf + hva studien viste); hvert temakapittel har
   «Etnografisk eksempellager»-blokken; ingen av feiltilskrivningene i §7.3
   forekommer; alle usikre detaljer er merket `(verifiser)` i literal form.
10. **Normativ varsomhet (§8):** ingen forbudte betegnelser utenfor de tre
    rammene; ingen etnografisk nåtid uten tidfesting; hvert case har sin
    «i dag»-linje; kolonial kontekst nevnt der §8.3 krever det.
11. **Modellbesvarelser:** ærlig merket som nyskrevne; C er en C og E er en E;
    midtnivå-B finnes i 9.7; kap. 9.7 konkluderer skarpt; minst ett vippe-case
    merket «(omstridt — begge landinger forsvarlige)»; meta-fasit-grep = 0.
12. **3-referanse-regelen** står i kap. 0.3 OG i hver langsvar-/PÅ-/KOMP-/MONO-
    fasit i Del 9, i alle L-prøver og i alle tre øvingseksamenene; E-nivået
    demonstrerer trekket for 1–2 kilder.
13. **Prøve-flervalg:** fasitmønsteret varierer (aldri «alle a»); prøve-tipen
    sier hvor flervalget bor; selvdiagnose (☐) etter hver fasit.
14. **Frekvenstall = telte belegg**, alltid med nevner **11 sett**; «ti
    sensorveiledninger» der veiledningene omtales; ingen oppdiktede tall.
15. **hints** utfylt på alle `exercise` unntatt den merkede kalde banken i 9.4;
    første hint røper aldri konklusjonen.
16. **Øktmerking:** kapitler > 45 min har løkke-tidsanslag eller pausepunkter;
    prøvekapitlene deklarerer «4 prøver à ~20–45 min» + deling over flere
    kvelder; `sosant1000-9-prove` deklarerer de tre øvingseksamenene à 4 timer.
17. **Feilkode-gloss** ved første bruk per kapittel; ingen kode #13.
18. **Ingen tom `collapsible`**; ingen duplikate blokk-id-er; kap-referanser i
    fasiter og forkunnskaper er markdown-lenker; ingen hardt linjebrutt prosa.
19. **⚠ Monografi-modularitet:** 8.1, 9.4 og 9.8 er merket, bygget på gjeldende
    monografi, og navngir West som forgjenger; pensumlista er sjekket før 8.1.
20. **Juridiske deklarasjoner:** innholdet fremstiller seg ALDRI som offisielt
    eller UiO-tilknyttet, lover aldri eksamensutfall, og all omtale av
    kildegrunnlaget følger §6.1 ordrett i sak.
21. **Rendering og porter grønne før ferdigmelding:**

```bash
python3 scripts/hoyskolebok/status-bok.py sosant1000
python3 scripts/hoyskolebok/sjekk-latex.py sosant1000
python3 scripts/hoyskolebok/sjekk-fasitfordeling.py sosant1000
python3 scripts/hoyskolebok/sjekk-alternativref.py sosant1000
python3 scripts/hoyskolebok/sjekk-bok.py sosant1000 "<forbudt-regex fra §12.5>"
node scripts/hoyskolebok/quiz-lengdesjekk.mjs
npm run build
```
