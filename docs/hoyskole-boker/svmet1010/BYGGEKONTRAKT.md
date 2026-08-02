# Byggekontrakt: SVMET1010 Kvalitative metoder (UiO) — teknisk kontrakt for kapittelforfattere

Gjelder ALLE forfatter-agenter som bygger kapitler til `svmet1010`. Faglig
innhold styres av `SKJELETT.md` (identitetsseksjonen §1–§2 + per-kapittel-
kontraktene i §3) — les ditt kapittels avsnitt der ORDRETT, og
`EKSAMENSANALYSE.md` ved behov. Denne kontrakten definerer format, sjangerkrav,
faglig sannhetskontroll, kildepåstander og kvalitetsporter, og er bindende der
den er mer presis enn skjelettet. **Ved faglig konflikt vinner SKJELETT.md; ved
format-, sjanger-, tall- eller kildepåstandskonflikt vinner denne kontrakten.**
Instansiert fra `../BYGGEKONTRAKT-MAL.md`.

⚠ **Ett unntak fra «skjelettet vinner faglig»: frekvenstallene.** Skjelettets
`**Belegg:**`-linjer inneholder systematisk ANSLÅTTE tall som ikke overlever en
telling av belegg-listene. §6.2 i denne kontrakten er den ENESTE lovlige kilden
til «N av M»-påstander i boka. Sprikene er dokumentert der, kapittel for
kapittel.

**Emnets navn.** Emnet heter **SVMET1010 Kvalitative metoder** og undervises ved
Institutt for sosiologi og samfunnsgeografi (ISS), Universitetet i Oslo.
Emnekoden `SVMET1010` skrives alltid ut — den er bokas viktigste søkeord. Emnet
har **ingen forkunnskapskrav**, undervises i høstsemesteret, og boka skal kunne
leses helt frittstående: en leser uten et eneste metodeemne bak seg skal komme
gjennom Del 0 og Del 1 uten å slå opp noe annet sted.

**Arketype: drøfting** (`../DNA-drofting.md`), undertype **håndverksnært
metodefag**. Valget er begrunnet slik: eksamen premierer ikke regning og ikke
subsumsjon, men **begrunnelse** — sensorveiledningene sier eksplisitt at
«hvorvidt og hvordan studenten argumenterer for metodevalgene» er vippekriteriet
mellom to karakterer. Det er drøftingsarketypens kjerne. Ingen lånte elementer
fra regnefag- eller jus-DNA.

**Tre dokumenterte avvik fra DNA-normen:**

1. **Vurderingsformen har skiftet tre ganger på 20 år** (skoleeksamen 2004–2015 →
   emneoppgave/mappe 2016–2021 → ny skoleeksamen 2024–). Boka kalibreres mot
   **dagens skoleeksamen**, men må dekke alle tre regimene fordi kildegrunnlaget
   er fordelt på dem. Dette har sin egen bindende seksjon (§6.1) og styrer hva
   som kan telles mot hva.
2. **Åtte oppgavesjangre, ikke DNA-malens to–tre** (T1–T8, §13.2). Del 9 har
   derfor seks sjangerkapitler + fire modellbesvarelser, og de tre komplette
   øvingseksamenene bor i prøvekapitlet `svmet1010-9-prove` (§5.6).
3. **Fagets sannhetskontroll er «begrunnelse, ikke deskripsjon» + eksempellager**
   (§7). Der SOS1004 måler «funn, ikke navn», måler SVMET1010 om metodevalget er
   BEGRUNNET og om en konkret pensumstudie brukes som eksempel. Å kunne bruke
   Ugelvik, Fjær m.fl., Skilbrei m.fl., Broch, Øygarden og Wadel som eksempler er
   en gjennomgående A-markør i veiledningene.

**Nærmeste bygde søskenbok:** `sos1004` (samme arketype, samme institutt, samme
fakultet, landet og verifisert). Kopier arbeidsmåte og formkrav derfra — **aldri
faglig innhold**. Andre bygde naboer: `sosant1000` (feltarbeid), `psy1010`
(metodefag med motsatt fortegn — kvantitativ), `sgo1001`, `exphil03`.

Tre forskjeller fra SOS1004 som endrer byggingen:

1. **Kildesituasjonen er den motsatte.** Der SOS1004 har fem terminer, har
   SVMET1010 **32 eksamensterminer, 31 oppgavesett og 11 sensorveiledninger**.
   Rikdommen er en felle: det er lett å skrive «i de fleste settene» og
   «gjennomgående» i stedet for å telle. §6.1 fastsetter nevnerne, §6.2 teller
   dem per kapittel, og en egen prosaregel-port håndhever dem (§13.5).
2. **Politisk og metodisk nøytralitet er skarpere her**, ikke slappere. Casene i
   arkivet er narkotikasalg, ungdomskriminalitet, prostitusjon, papirløse,
   rusavhengige og mindreårige på nett. Boka beskriver posisjoner og gjengir funn
   (§9) — og pakker aldri et robust funn inn i «noen mener».
3. **Boka er symbolfri.** Ingen matematikk, ingen `$…$` (§13.1). Kravet om
   «Symbol- og formelliste» er derfor ikke relevant (README-unntaket for
   symbolfrie fag) — hvert temakapittel har `collapsible` **«Pensumkart for
   kapitlet»** i stedet, i tillegg til det obligatoriske **Eksempellageret**
   (§5.2).

---

## 1. LÆRINGSLØKKE-KONTRAKT (ufravikelig byggekrav — produkteier 9. juli 2026)

Fra skjelettets topp, tatt inn her som bindende byggekrav:

- HVERT kapittels `content[]` struktureres som gjentatte SMÅ løkker
  **Teori → Eksempel → Oppgave**, én løkke per begrep/teoribit:
  1. begrepet med navngitt pensumforankring (`definition`, evt. + `text` om
     posisjoner og drøftingsaksen), →
  2. `example` som viser begrepet BRUKT — skrevet slik en god redegjørelse eller
     drøfting ville skrevet det, med et konkret metodevalg som er BEGRUNNET, →
  3. `exercise` INLINE i `content[]` rett etter eksempelet (plattformen renderer
     inline oppgaver), →
  4. neste begrep.
- **ALDRI** all teori øverst med oppgavene samlet nederst, og aldri alle
  definisjonene i én bolk fulgt av alle eksemplene. Grupper til meningsfulle
  biter — ikke én oppgave per setning.
- **Ingen usett forkunnskap:** ingen oppgave får kreve et begrep, en
  pensumforfatter, en studie, en analysefase eller en sjangerregel som ikke er
  introdusert tidligere i SAMME kapittel (t.o.m. eksempelet rett foran) eller i
  et tidligere kapittel referert i Forkunnskaper-blokken. Flytt teoribiten
  tidligere ved behov.
- **Unntak:** prøvekapitlene, sjangerkapitlene (9.1–9.6), modellbesvarelsene
  (9.7–9.10) og øvingseksamenene (`svmet1010-9-prove`) følger sin egen arketype —
  komplett oppgave/sett først, løsning i `collapsible`.
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer
  REKKEFØLGEN.

⚠ **Underoverskrifter er ALDRI byggespråk.** «Løkke», «Bolk», «Blokk», «Runde»,
«Sekvens», «Modul», «Iterasjon» er byggeplanens ord, ikke leserens. Overskriften
skal si hva avsnittet handler om, pluss tidsanslaget:

```
✗ ## Løkke 3 — Fangen-kontinuumet (~15 min)
✓ ## Fangen-kontinuumet (~15 min)
```

Vis til tidligere avsnitt ved NAVN, aldri ved nummer («da vi gikk gjennom
rollekontinuumet», ikke «i løkke 2»). Kjør denne før ferdigmelding og forvent
null treff:

```bash
grep -rnE '#{2,4}[[:space:]]*Løkke|[Ll]økke[[:space:]]+[0-9A-ZÆØÅ]|\| Løkke \|' \
  src/lib/data/chapters/svmet1010-*.json
```

---

## 2. Filplassering og filantall

Ett JSON-dokument per kapittel: `src/lib/data/chapters/svmet1010-<del>-<nr>.json`
(prøvekapitler: `svmet1010-<del>-prove.json`). Quiz til
`src/lib/data/quiz-staging/svmet1010-<del>-<nr>.quiz.json`.

IKKE rør `_registry.json`, `_all.json`, `textbook-courses*.ts`, `quiz-data*.ts`
eller `institusjoner.ts` — wiring gjøres sentralt med
`scripts/hoyskolebok/wire-bok.py svmet1010` (fase 5). Generer ALLTID JSON via
python `json.dump`: faget er fullt av anførselstegn og engelske fagtermer i
anførselstegn («deep hanging out», «go native», «marker», «maximize range»,
«convenience sampling», «walk-along») — én uescapet anførsel har tidligere
blokkert hele plattformens prebuild.

**39 filer totalt:** 30 innholdskapitler (skjelettets §3) + 9 prøvekapitler
(`svmet1010-1-prove` … `svmet1010-9-prove`). Wiringen genererer prøvekapitlenes
metadata selv fra `BOKCONFIG.json` (`prøvedeler`) — filene må finnes, men skal
ikke listes i skjelettets §3.

### 2.1 ⚠ BLOKKER FOR FASE 5: skjelettet er ikke i v3-format

`wire-bok.py` parser skjelettet med disse to mønstrene:

```python
re.finditer(r"^#### Kapittel (\d+\.\d+):\s*(.+)$", sk, re.M)
re.search(rf"\*\*id:\*\* `({emne}-\d+-\d+)`", tail)
```

`SKJELETT.md` for SVMET1010 bruker den **eldre formen** — `**Kap. 3.1 — Tittel**`
etterfulgt av `` `id: svmet1010-3-1` · number 3.1 · estimatedMinutes 75 `` — og
gir derfor **0 treff på begge mønstrene**. Målt 2. august 2026: 30 kapitler i
gammelt format, 0 i v3. Kjører du `wire-bok.py svmet1010` som skjelettet står nå,
stopper det på `assert chapters, "Ingen kapitler parset — sjekk at skjelettet
følger v3-formatet"`. Til sammenligning: `sos1004` har 34 kapitler i v3-format,
`sosant1000` har 29.

**Skjelettet SKAL konverteres til v3 før fase 5** — mekanisk, uten å endre
innhold. Én blokk per kapittel:

```
#### Kapittel 3.1: Deltakerroller: Fangen-kontinuumet
**id:** `svmet1010-3-1` · **number:** 3.1 · **estimatedMinutes:** 75 · **prerequisites:** `svmet1010-1-1`

- **Kapitteltype:** tema.
- **Description:** Rollekontinuumet fra ikke-deltakende observatør til «go native»
  — emnets mest drøftede enkeltmodell — anvendt på konkrete feltarbeid.
```

Tre detaljer konverteringen må treffe:

1. **`prerequisites` må stå i backticks** (`` `svmet1010-1-1` ``) — parseren
   plukker dem med `re.findall(rf"`({emne}-\d+-\d+)`", …)`. «ingen» skrives uten
   backticks (gjelder kun kap. 0.1).
2. **`**Description:**` kan gå over flere linjer**, men fortsettelseslinjene må
   være innrykket og ikke starte et nytt `- **felt:**`. En description som brytes
   feil ga 53 avkuttede kursbeskrivelser i tidligere bøker.
3. **Kapittel-JSONs eget `description`-felt overstyrer skjelettet** (parseren
   foretrekker kapittelfila). Fyll det derfor alltid ut ordrett.

Konverteringen endrer **ikke** noe faglig og skal ikke røre §1, §2, §4, §5 eller
§6 i skjelettet.

**⚠ Hull i skjelettet som denne kontrakten lukker:** skjelettets §4 krever tre
komplette øvingseksamener, men §3 gir dem ingen kapittel-id. De bor i
**`svmet1010-9-prove`** (`chapterNumber` `9.P`), etter mønster fra
`sosant1000-9-prove`. Del 1–8 har fire temadelprøver hver (32 prøver); Del 9 har
de tre øvingseksamenene. Del 0 har ingen prøve — håndverkskapitlene 0.1/0.2 og
sjangerkapitlene 9.1–9.6 dekker det.

**Sannferdighetskrav ved wiring:** auto-teksten fra `wire-bok.py` for et
prøvekapittel er «Fire prøver som dekker del N (…) på eksamensnivå, med fulle
løsningsforslag.» Ordet «løsningsforslag» kan leses som om det finnes offisielle
løsninger fra UiO. **Det gjør det ikke** (§6.1). Fase 5 SKAL formulere om til
«… med fulle momentliste-fasiter, skrevet av oss», og for `svmet1010-9-prove`
til «Tre komplette øvingseksamener i gjeldende eksamensform, med
momentliste-fasiter skrevet av oss».

**Kursmetadataens `description`** fylles av `wire-bok.py` fra skjelettets
`*Description:*`-linjer. **Kapittel-JSONs eget `description`-felt er den
autoritative kilden** — fyll det alltid ut ordrett fra skjelettet.

---

## 3. Kapittel-JSON (toppnivå)

```json
{
  "id": "svmet1010-3-1",
  "courseId": "svmet1010",
  "chapterNumber": "3.1",
  "title": "…(fra skjelettet, ordrett)…",
  "description": "…(fra skjelettet, ordrett)…",
  "estimatedMinutes": 75,
  "competenceGoals": ["kunne plassere en forsker på Fangens rollekontinuum og begrunne plasseringen med belegg i feltbeskrivelsen", "…"],
  "content": [ "…blokker…" ],
  "exercises": []
}
```

- **`chapterNumber` er ALLTID del-basert** (`<del>.<nr>`: `0.1`, `3.1`, `9.10`) —
  **ALDRI lineær** («14»). Prøvekapitler: `<del>.P`. Dette er enkeltfeilen som
  ødelegger navigasjonen i en hel bok (PRODUKSJONSLØYPE-lærdommen fra JUS1111).
- `title` og `description` tas ordrett fra skjelettet.
- `competenceGoals`: 2–4 «kunne …»-formuleringer destillert fra kapitlets
  begrepskontrakt. Dette er **Skolesagas EGNE** mål — ALDRI kopi av UiOs
  offisielle læringsutbyttebeskrivelser. UI-et deklarerer kilden automatisk.
- **Ingen kald kode i `competenceGoals`** — ikke «T2», ikke «#8», ikke
  «A-markør» eller «C-stoff» uten forklaring.

### 3.1 Rene tekstfelter — INGEN markdown (UFRAVIKELIG)

`title`, `topics` og `competenceGoals` renderes RÅTT i UI-et. Bruk ALDRI markdown
der (ingen `*kursiv*`, `**fet**`, ingen lenker). Verk- og begrepstitler i disse
feltene skrives med «anførselstegn», aldri kursiv. Markdown hører kun hjemme i
`content`/`problem`/`solution`/`task`/`hints`-feltene.

---

## 4. Blokktyper (eksakte felt — strukturreferanse: `src/lib/data/chapters/sos1004-2-2.json`)

- `text`: `{id, type: "text", content}` — markdown-prosa.
- `definition`: `{id, type: "definition", title, content}` — **`title`
  OBLIGATORISK**. Flashcards genereres KUN fra **toppnivå** `definition`-blokker
  med `title` (en definisjon nøstet inne i en `collapsible` teller IKKE).
  I SVMET1010 er `title` en **kobling begrep ↔ pensumforfatter**: «Deltakerroller
  (Fangen)», «Markør (Weiss)», «Strategisk utvalg (Tellmann & Leseth)»,
  «Overførbarhet (Fangen)», «Levning (Kjeldstadli)», «Feltnotattyper (Tjora)»,
  «Webetnografi (Bengtsson)», «Moderatorrollen (Wibeck)». Åpne innholdet med
  forklaringen i ORD, lukk med **distinksjonen** mot nabobegrepet (probe vs.
  markør, overførbarhet vs. generalisering, levning vs. beretning, fokusgruppe
  vs. gruppeintervju) og med den studien eller det metodepoenget begrepet «eier»
  (§7).
- `theorem`: `{id, type: "theorem", title, content}` — brukes **sparsomt**, til
  modeller som skal stå som én enhet: Fangens rollekontinuum, de sju
  designkomponentene, analysens fasemodell, Ugelviks tre-akters faseforløp, de
  tre fortolkningsgradene, Kjeldstadlis kildetypologi. Ikke pynt — dette er ikke
  et regnefag.
- `example`: `{id, type: "example", title, problem, solution}` — `solution`
  skrives som en **god redegjørelses- eller drøftingsdel** (§6.4), aldri som
  referat, og har ALLTID et metodevalg som er BEGRUNNET, ikke bare konstatert.
- `tip` / `warning`: `{id, type, title, content}`.
- `exercise`: `{id, type: "exercise", exercise: {id, number, type: "classic",
  difficulty: "lett"|"middels"|"vanskelig", task, solution, hints: []}}`.
  ⚠ **`difficulty` har nøyaktig tre lovlige verdier: `lett`, `middels`,
  `vanskelig`.** IKKE `medium`, IKKE `hard`, IKKE `easy` — det er plattformens
  engelske interne verdier, og fem kapitler i en søskenbok måtte rettes fordi en
  agent brukte dem. Verdien skrives aldri inn i `task` (den ligger i feltet).
  ALDRI `solutionVideo`, `allowsUpload`, `allowsCanvasDrawing`, `answer` eller
  `subTasks` (deloppgaver skrives inn i `task`/`solution`, se §11).
- `collapsible`: `{id, type: "collapsible", title, buttonText, content: [blokker]}`
  — feltnavnet er `content` og det skal inneholde BLOKKER. En `text`-nøkkel eller
  tom array rendrer som en tom boks og er en byggefeil.

Blokk-id-er: `<kapittel-id>-<løpenavn>` (f.eks.
`svmet1010-3-1-def-deltakerroller`), unike i kapitlet. Duplikate blokk-id-er
felles av kvalitetsporten.

---

## 5. Obligatorisk kapittelstruktur

### 5.1 Alltid først, i denne rekkefølgen

1. `tip` **Eksamensvinkel** — frekvens, sjangre og typiske oppgaveformuleringer,
   med de EKSAKTE tallene fra **§6.2 i denne kontrakten** (ikke fra skjelettets
   `**Belegg:**`-linje, som er anslått). **Forfatteren skal ALDRI finne på
   frekvenstall og aldri regne om dem** (§6.1).
2. `text` **Forkunnskaper** — kapitler i boka som markdown-lenker
   (`[kap. 1.1](/svmet1010/svmet1010-1-1)`) + eventuelle kryssbok-lenker fra
   tabellen i §14. «Dette kapitlet kan leses uten forkunnskaper» der skjelettet
   sier `prerequisites: ingen` (kun 0.1).

**Oppfrisket forkunnskap (bindende).** I kapitler med stor avstand til
forkunnskapen SKAL Forkunnskaper-blokka **VISE 2–3 kjernepåstander ferdig
oppfrisket**, ikke bare lenke. Eksempel på riktig form:

> **Fra kap. 1.1:** kvalitative data er tekst, tale og observasjon, ikke tall —
> derfor kan de si noe om *hvordan* og *hvorfor*, men aldri om *hvor mange*.
> **Fra kap. 1.2:** når kvalitative funn skal gjelde ut over de studerte, heter
> det overførbarhet, ikke generalisering.

⚠ **Frasen «Sist du var her» er FORBUDT** (grep-sjekkes, §13.5). Blokka
oppsummerer et ANNET kapittel — den kan ikke si «her», og en lærebok vet ikke
hva leseren har gjort. SVMET1010 har ingen forkunnskapskrav og mange lesere
hopper rett til det kapitlet de skal ha eksamen i. Bruk i stedet:

| ✗ | ✓ |
|---|---|
| Sist du var her sto dette … | Dette sto der … |
| Sist du var her (fra kap. 3.1): | Fra kap. 3.1: |
| Som du husker fra kap. 1.2 … | I kap. 1.2 står … |
| Da vi gikk gjennom dette sist … | I gjennomgangen i kap. 1.2 … |

Samme forbud rammer «som du sikkert husker», «du har jo allerede sett», «dette
kan du fra før» — alt som gjør en påstand om leseren i stedet for om stoffet.

**Kapitler der oppfrisket forkunnskap er OBLIGATORISK** (stor avstand til
forkunnskapen, utledet av skjelettets `prerequisites`):

| Kapittel | Hva som skal stå ferdig oppfrisket |
|---|---|
| 2.1 | fra 1.1: hva et kvalitativt spørsmål kan og ikke kan svare på |
| 3.1 | fra 1.1: nærhet til feltet som datakilde; fra 1.2: overførbarhet |
| 4.1 | fra 1.1: mening/motiv/erfaring som studieobjekt; fra 2.1: hvorfor/hvordan-splitten |
| 5.1 | fra 3.1: rollekontinuumet i én setning; fra 6.1-forvarsel: skillet offentlig/privat |
| 6.1 | fra 1.1: hvorfor kvalitativ nærhet skaper egne etiske problemer |
| 6.2 | fra 3.1: rollekontinuumet; fra 6.1: de tre kjernekravene |
| 7.1 | fra 4.1: hva et intervjumateriale faktisk består av |
| 8.1 | fra 1.1: skillet egengenererte/foreliggende data |
| 8.2 | fra 1.1 og 7.2: hva fortolkning betyr i faget |
| 9.1–9.6 | de 2–3 påstandene sjangeren hviler på, hentet fra sitt hjemkapittel |
| 9.7–9.10 | oppgavens sjangerkrav i tre punkter, fra sitt sjangerkapittel |

### 5.2 Temakapittel (Del 1–8) — DNA-drøfting + skjelettets per-kapittel-DNA

Etter eksamensvinkel og forkunnskaper går kapitlet i LÆRINGSLØKKER (§1). Disse
blokkene skal finnes, fordelt i løkkene — ikke stablet:

- `text` **Temaet i fagets landskap** — hvilket metodeproblem temaet svarer på.
  Abstrakte kjernetemaer åpner med et **hverdagsanker FØR apparatet** (§11).
- `definition` **kjernebegreper** — flashcard-kilden, toppnivå med `title`, hvert
  begrep forankret i forfatter/verk fra skjelettets begrepskontrakt, og hvert med
  **distinksjonen mot nabobegrepet** utskrevet. Distinksjonene ER
  kortsvarskravet (feil #16).
- `text` **posisjoner og spenninger** — kapitlets drøftingsakser fra skjelettet,
  skrevet slik at leseren har råstoff til BEGGE sider.
- **`collapsible` «Eksempellager for kapitlet» — OBLIGATORISK i HVERT
  temakapittel.** Malen står i §7.2. Dette er kapitlets mest eksamensnyttige
  blokk og skal ALDRI kuttes. Den ble oversett i fem kapitler i en søskenbok.
  Åpner med begrepsbank-notisen (§11).
- `example` **anvendelse** ×1–3 — case-forslagene fra skjelettet, nyskrevet, hver
  med eksplisitt **begrep + begrunnet metodevalg + drøfting**-kobling.
- **`exercise` ×4–8 INLINE — hardt minimum fire, hardt tak åtte.** Også dette ble
  oversett i fem kapitler i en søskenbok. Fordeling: minst én `lett`
  innstegsoppgave tidlig (ren gjengivelse med egne ord), 1–2 kortsvarsoppgaver i
  T1-format, 1–2 kortdrøftinger med disposisjonsforslag som løsning, og minst én
  eksamenslik oppgave med momentliste. Minst én oppgave i boka per temadel har
  `difficulty: "vanskelig"`.
- `warning` **Typiske feil** — feilkodene fra skjelettets «Typiske feil»-linje,
  **glosset ved første bruk PER KAPITTEL**: «(#1 — kvantitativ logikk i kvalitativ
  kontekst: å hevde at få informanter er representative for en gruppe)».
- `tip` **A-markør** — det grepet som løfter svaret fra god (C) til beste (A) i
  akkurat dette temaet. Obligatorisk i ALLE temakapitler; skal navngi kapitlets
  drøftingsakse eksplisitt.
- `collapsible` **Pensumkart for kapitlet** — markdown-tabell
  `| Forfatter/verk | Begrep de «eier» | Distinksjonen | Hvor det brukes på eksamen |`.
  Erstatter «Symbol- og formelliste» (boka er symbolfri). Åpner med
  begrepsbank-notisen (§11).
- `collapsible` **Repetisjon** — 4–6 korte spørsmål fra forkunnskapskapitlene.

### 5.3 Sjanger- og håndverkskapitler (0.2, 9.1–9.6)

1. `tip` Eksamensvinkel — sjangerens frekvens (tall fra §6.2).
2. `text` **Oppskrift** — trinnvis disponering med tidsbudsjett (§6.5).
3. `example` **gjennomskrevet besvarelse** med margkommentarer om hva som gir
   uttelling hvor. Margkommentarer skrives som egne linjer i `solution`:
   `> Margnotat: her begrunnes bortvalget av observasjon — det er dette skillet mellom å begrunne og å konstatere som løfter fra C.`
4. `exercise` ×3–6 nyskrevne oppgaver, løsning = **tre-nivå-momentliste**
   (E-nivå / C-nivå / A-nivå), ikke fullt essay.
5. `warning` Typiske feil + `collapsible` med sjangerens sjekkliste (§6.3).

Kap. **0.2** skal i tillegg vise ÉN og samme korte drøftingsoppgave på **E-, C-
og A-nivå** med margkommentarer, og etablere bokas to mantraer (§6.6).

Kap. **9.6 (feilvaksinen)** har én seksjon per feil #1–#16: (a) feilen slik
sensor ser den, (b) nyskrevet «slik ser den ut»-utdrag, (c) omskrevet A-versjon
av samme passasje, (d) varsellampe-heuristikk. Deretter gjenkjenningsoppgaver
(«hvilken feil begår denne kandidaten?») i flervalgsformat i `exercise.task`, med
stokket fasit — aldri samme feilkode som fasit to ganger på rad.

Kap. **9.6** avslutter med bokas ene **kalde bank**: 8–10 nyskrevne
oppgaveformuleringer på tvers av sjangrene, UTEN `hints`, fasit = ren
momentliste, eksplisitt merket «Kald bank — ingen hint. Her er det å mobilisere
begreper, studier og begrunnelser selv som trenes.» Dette er eneste unntak fra
hint-kravet i §11.

### 5.4 Modellbesvarelseskapittel (9.7–9.10)

1. `text` med den nyskrevne oppgaven, formulert slik den ville stått i et sett,
   pluss ærlighetslinjen fra §10.1.
2. `collapsible` **A-besvarelse** — full, sammenhengende tekst med margnotater.
   «— naturlig pausepunkt —» mellom hovedseksjonene.
3. `collapsible` **Kommentert C-besvarelse** — samme oppgave, korrekt men flat,
   med notater om gapet opp til A rammet inn som **oppgraderingsmeny**.
4. **Kap. 9.7 skal i tillegg ha `collapsible` «Midtnivå-besvarelse (B)»** — se
   §10.3. Dette er et README-krav og gjelder minst ett sted i boka.
5. `tip` **Sensorblikket** — momentliste bygget på karakternivåene og
   vektingsreglene (§6.3), anvendt på akkurat denne oppgaven, med den eksplisitte
   setningen om hvorfor C-versjonen ikke ble B.
6. `warning` **Typiske feil** — feilene C-versjonen demonstrerer (angitt per
   kapittel i skjelettet). Kravet om `warning`-blokk gjelder også disse
   kapitlene; tittelen «Modellbesvarelse» fritar dem IKKE i kvalitetsporten.

### 5.5 Prøvekapitler (`svmet1010-<del>-prove`, del 1–8)

Id `svmet1010-<del>-prove`, `chapterNumber` `<del>.P`, tittel «Prøver til del
<del>: <deltittel>».

Struktur: `tip` (dekning + «4 prøver à ~20–40 min» + «kan trygt deles over flere
kvelder — én prøve per økt» + hvor flervalget bor) + `text` Forkunnskaper + fire
`collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med nyskrevne
oppgaver og full fasit. **Prøvenes tema og oppgavetyper per del står i skjelettets
§4 «Temadelprøver» — følg dem punkt for punkt.**

**Fasitstruktur for drøftingsfag** (obligatorisk i hver prøvefasit):

> **Må-punkter** (uten disse når svaret ikke C-terskelen) · **Pluss-punkter**
> (det som løfter fra C til B/A — begrunnelsen, det kontrafaktiske grepet, den
> konkrete pensumstudien) · **Feller** (det sensor faktisk trekker for, med
> feilkode).

Der prøven speiler et langsvar, skal fasiten i tillegg ha **tre-nivå-momentlisten**
(E → C → A). Etter hver prøvefasit: **avkryssbar selvdiagnose-sjekkliste (☐)** —
bruk rubrikkene i §6.3. Kap-referanser i fasitene som markdown-lenker. **Ingen
quiz og ingen begrepsbank i prøvekapitler.**

⚠ **Ja/nei- og riktig/galt-lister:** `sjekk-statiskflervalg.py` leser `a) b) c)
d)` under et nummerert spørsmål som et flervalg. Er listen et sett med
SELVSTENDIGE påstander (ikke deloppgaver av én oppgave), bruk romertall
**(i), (ii), (iii)** — det er nummerering av påstander, ikke listemerking av
deloppgaver, og produkteierregelen om små bokstaver gjelder derfor ikke der.
Beholder du a)–e), sjekk portens tall mot en manuell telling før du «retter» noe.

### 5.6 Øvingseksamenkapitlet (`svmet1010-9-prove`)

`chapterNumber` `9.P`, tittel «Øvingseksamener — tre komplette sett i
eksamensform». Innhold, i denne rekkefølgen:

1. `tip` **Slik tar du disse settene** — tre sett à 4 timer, hvilket format hvert
   sett speiler, tidsbudsjett (§6.5), og at hvert sett kan deles over to økter
   med den eksplisitte merknaden at ekte eksamen er sammenhengende.
2. Tre `collapsible` — **«Øvingseksamen A (H2025-format)»**, **«Øvingseksamen B
   (H2024-format)»**, **«Øvingseksamen C (vedleggsformat, 2015–2018-stil)»** —
   med de nyskrevne settene fra skjelettets §4 og full momentliste-fasit per
   oppgave, med C- og A-beskrivelse.
3. Øvingseksamen B har en **flervalgsbolk på 10 spørsmål** i H2024-form, med
   stokkede fasit-bokstaver og ærlighetslinjen fra §6.1 om at flervalgsdelen
   aldri er publisert.
4. Avkryssbar **selvdiagnose-sjekkliste (☐)** etter hver langsvarsfasit.
5. Øvingseksamen C åpner med én setning om hvorfor et utgått format er med:
   vedleggssjangrene er den beste treningsformen, og case gjenbrukes på tvers av
   år.

---

## 6. EKSAMENSKONTRAKTEN (fagets kjerne — bindende for alle løsninger og modellsvar)

Alt i denne seksjonen etableres i Del 0 (kap. 0.1–0.2) og refereres i resten av
boka. Det er dette som gjør at mange forfattere skriver samme bok.

### 6.1 Kildegrunnlaget (bokas strengeste seksjon)

Telt 2. august 2026 fra `~/Desktop/Eksamner/_nedlastet-2026-07-30/INDEKS.csv`
(42 rader med `emnekode=SVMET1010`, `type`-kolonnen brukt — ALDRI filnavnet),
`TERMINER.csv` (32 rader) og emnemappa `~/Desktop/Eksamner/UiO/SVMET1010/`
(44 filer, 42 md5-unike).

**Korpuset — hele SVMET1010-arkivet:**

| Fakta | Tall |
|---|---|
| **Oppgavesett** (INDEKS `type=oppgave`) | **31** |
| — derav utsatt/kontinuasjonssett (H2006u, H2007u, V2007u) | 3 |
| — derav udatert fil som innholdsmessig er H2025-settet | 1 |
| **Sensorveiledninger** (INDEKS `type=sensorveiledning`) | **11** |
| **Eksamensterminer i arkivet** (`TERMINER.csv`) | **32** |
| — terminer med oppgavesett | **28** |
| — terminer med sensorveiledning | **11** |
| — terminer med BÅDE oppgavesett og sensorveiledning | **7** |
| — emneoppgave-terminer, kun sensorveiledning, intet oppgavesett | **4** (H2018, V2019, H2020, H2021) |
| **Offisielle fasiter og løsninger fra UiO** | **0 — finnes ikke** |
| **Publiserte flervalgsspørsmål** | **0 — publiseres aldri** (gjenbrukes) |
| Årsspenn | **2004–2025**; 20 av 22 årganger — **2022 og 2023 mangler helt** |
| Sensorveiledningenes spenn | **V2016–H2025**; ingenting eldre enn V2016 finnes |
| Byte-identiske dubletter (teller ikke) | 2 (`SENSORVEILEDNING_svmet1010-2020.pdf`, `SENSORVEILEDNING_svmet1010-2021.pdf`) |

**⚠ Skill sensorveiledning fra oppgavesett.** `EKSAMENSANALYSE.md` §8 fører
`svmet1010-2020.pdf` og `svmet1010-2021.pdf` i tabellen **«Eksamensoppgaver»**.
De er **sensorveiledninger** (emneoppgave-instrukser) og er dessuten
byte-identiske med to andre filer i mappa. De inngår IKKE i tallet 31. Dette er
nøyaktig fella fra utv1000, der «6 av 19 sett» hvilte på en liste der fjerde
oppføring var en veiledning.

**Tillatte nevnere — og bare disse:**

| Nevner | Når den brukes |
|---|---|
| **31 oppgavesett** | ALLE temafrekvens-påstander. «Design har vært langsvarsalternativ i 20 av 31 oppgavesett.» |
| **11 sensorveiledninger** | påstander om hva sensor ser etter. Gjelder KUN 2016–2025. |
| **28 terminer med oppgavesett** | når enheten er termin, ikke sett (f.eks. «vedlegg fra og med H2015») |
| **32 eksamensterminer** | KUN for å beskrive arkivets bredde i kap. 0.1 — **aldri som frekvensnevner** |
| **7 terminer med både sett og veiledning** | når en påstand krever begge kilder |
| **4 emneoppgave-terminer** | kvalitativt, aldri som del av en brøk (se under) |

**Ufravikelige konsekvenser:**

- **Enhver frekvenspåstand har en nevner, og nevneren er én av de seks over.**
  «I de fleste settene», «gjennomgående», «nesten alltid» og «ofte» er FORBUDT
  som frekvenspåstander uten et telt tall ved siden av. Prosaregel-kontrollert
  (§13.5, port 2).
- **Emneoppgave-terminene blandes ALDRI inn i en brøk.** H2018, V2019, H2020 og
  H2021 har ingen oppgavesett — bare veiledninger til emneoppgaven. Analysen
  legger dem inn som samleposten «2018–21» og teller dem som fire i
  Score-kolonnen; det er nettopp derfor tallene der ikke stemmer. Skriv i stedet:
  «… og i tillegg testet emneoppgaven dette temaet per definisjon i alle fire
  emneoppgave-terminene (H2018, V2019, H2020 og H2021), som er dokumentert
  gjennom sensorveiledningene.»
- **Sensorveiledningsbelegg gjelder kun V2016–H2025.** En setning som «sensor har
  i 20 år sett etter …» er usann: det finnes ingen veiledning eldre enn V2016.
  Skriv «sensorveiledningene fra og med V2016 er påfallende konsistente på dette».
- **Entall «sensorveiledningen» krever navngitt termin** («H2025-veiledningen»).
  Om korpuset skriver du «de elleve sensorveiledningene». Prosaregel-kontrollert
  (§13.5, port 1).
- **Utsatt eksamen merkes.** H2006u, H2007u og V2007u er tre selvstendige sett i
  tallet 31, men skal alltid merkes «utsatt eksamen» når de siteres — aldri
  presenteres som terminens ordinære sett.
- **Der belegget er usikkert, skriv det LAVE telte tallet** og beskriv resten
  kvalitativt. Det gjelder særlig feltnotater (ett av belegg-punktene er merket
  «implisitt» i analysen) og observasjon/vitenskapsteori (se
  ambiguitets-merknaden under tabellen i §6.2).
- **Det finnes ingen fasit og ingen løsninger fra UiO for dette emnet.** ALLE
  modellbesvarelser, momentlister, flervalgsoppgaver og prøvefasiter i boka er
  **nyskrevet av oss** fra pensumkunnskap og veiledningenes nivåbeskrivelser.
  Boka skal ALDRI antyde at den gjengir ekte kandidatbesvarelser, offisielle
  løsninger eller eksamens faktiske flervalgsspørsmål (grep-sjekkes, §13.5).
- **Ingen sidetall noe sted** (grep-sjekkes, mønsteret `\bs\. ?\d+`). Analysen
  oppgir ett sidetall for Weiss' markørbegrep; det skal IKKE inn i boka.
  Pensumutgavene skifter.
- **Ingen ordrette gjengivelser** av oppgavetekster eller veiledningstekst —
  heller ikke i omskrevet-nær form (§16).

**⚠ Filnavn som lyver (AUTORITATIV korreksjonstabell).** Tre filer i arkivet er
feilmerket. All semestermerking i boka hentes herfra:

| Fil | Indeksens termin | FAKTISK innhold |
|---|---|---|
| `svmet1010-skoleeksamen-var-2018.pdf` | V2018 | **H2017-settet** |
| `svmet1010-eksamen-bokmal-h17.pdf` | H2017 | **V2018-settet** |
| `svmet1010-eksamensoppgave.pdf` | (ingen) | **H2025-settet** |
| `svmet1010-2020.pdf` / `svmet1010-2021.pdf` | H2020 / H2021 | **sensorveiledninger**, ikke oppgavesett |

Nettoeffekten på tellingen er null (begge terminer er fortsatt representert), men
en oppgave som tilskrives feil semester er en synlig feil for leseren.

**Kildenote-mal for kap. 0.1** (bruk denne ordlyden, tilpasset i språk, aldri i
tall). Malen er testet mot forbudt-regexen i §13.5 og gir null treff:

> Boka er kalibrert mot hele SVMET1010-arkivet ved UiO: **31 oppgavesett fra 2004
> til 2025 og 11 sensorveiledninger fra 2016 til 2025**, fordelt på 32
> eksamensterminer. 28 av terminene har et oppgavesett, 11 har en
> sensorveiledning, og 7 har begge deler. Fire av terminene (H2018, V2019, H2020
> og H2021) var emneoppgave-semestre — der finnes bare veiledningen, ikke noe
> oppgavesett.
> **Arkivet inneholder ingen fasit og ingen løsninger fra UiO.**
> Sensorveiledningene beskriver hva som kjennetegner de ulike karakternivåene,
> men de retter ingen konkret besvarelse. Alt du finner av modellbesvarelser,
> momentlister, prøvefasiter og flervalgsoppgaver i denne boka er derfor skrevet
> av oss, ut fra pensum og veiledningenes egne nivåbeskrivelser — ingen av dem er
> en ekte kandidatbesvarelse.
> **Forbehold:** flervalgsdelen fra H2024 er ikke publisert (spørsmålene
> gjenbrukes), så flervalgsoppgavene her er våre egne, laget ut fra pensumbredden.
> To årganger mangler helt i arkivet (2022 og 2023), og ingen sensorveiledning er
> eldre enn våren 2016. Vurderingsformen har skiftet tre ganger på 20 år, så de
> eldste settene viser sjangrene, ikke dagens format. Pensum har rullert:
> Fangen, Weiss, Tellmann & Leseth og Ugelvik er de stabile ankrene, mens
> enkelttekster kan være byttet ut.

### 6.2 Frekvenstabell per kapittel (AUTORITATIV — erstatter skjelettets tall)

**Regelen: tallet er ALLTID antall LISTEDE terminer/sett i belegg-listen.** Ikke
antall forekomster (analysens `×2`/`×3`-markeringer teller ÉN gang), ikke
samleposten «2018–21» utvidet til fire, ikke et anslag. Er du i tvil om et belegg
er ett eller to sett, teller du det som ett.

Nevneren er **31 oppgavesett** der ikke annet er sagt.

| Kap. | Tema | **Telt (bindende)** | Skjelettets anslag | Sprik |
|---|---|---|---|---|
| 0.1 | metakapittel | hele arkivet (§6.1) | — | — |
| 0.2 | sensorkravene | **11 sensorveiledninger (V2016–H2025)** | — | — |
| 1.1 | kvalitativ vs. kvantitativ | **6 av 31** | 6 | ✓ |
| 1.2 | overførbarhet, validitet, reliabilitet | **9 av 31** | 10 | −1 |
| 2.1 | forskningsspørsmål som eget tema | **3 av 31** (+ komponent i alle 20 designsettene) | «3+» | ✓ |
| 2.2 | utvalg, rekruttering, portvakt | **6 av 31** (+ komponent i alle designsett) | «6+» | ✓ |
| 2.3 | det komplette forskningsopplegget | **20 av 31** | 24 | **−4** |
| 3.1 | deltakerroller | **19 av 31** | 23 | **−4** |
| 3.2 | feltarbeid i praksis | samme 19-base; Ugelvik-vedlegg i **3 av 31** | — | — |
| 3.3 | feltnotater | **6 av 31** eksplisitt (+ ett belegg merket «implisitt») | 7 | −1 |
| 4.1 | dybdeintervjuet | **13 av 31** | 17 | **−4** |
| 4.2 | intervjuets relasjoner | **ingen brøk** — asymmetri er kortsvarsbegrep, «å intervjue bekjente» er vurderingspunkt i emneoppgave-veiledningene | — | — |
| 4.3 | fokusgrupper | **4 av 31** | 4 | ✓ |
| 5.1 | webetnografi | **4 av 31**, alle fra og med 2017 | 5 | −1 |
| 6.1 | etikkens rammeverk | **15 av 31** (+ obligatorisk komponent i alle designoppgaver, + eget kortsvar H2025) | «20+» | **−5** |
| 6.2 | etikk i praksis | **2 av 31** vedleggsbaserte (V2016, H2017) + eksplisitt sensorsjekk i H2024- og H2025-veiledningen | — | — |
| 7.1 | analysens fasemodell | **13 av 31** | 18 | **−5** |
| 7.2 | fortolkningsgrader og tradisjoner | **2 av 31** (V2007, H2016) + nevnt som gangbare strategier i H2024- og H2025-veiledningen | — | — |
| 8.1 | dokumentanalyse | **6 av 31**, alle 2009–2016 | 6 | ✓ |
| 8.2 | vitenskapsteori | **10 av 31**, alle før 2016 | 13 | **−3** |
| 8.2 | diskursanalyse | **9 av 31**, alle 2006–2015 | 9 | ✓ |
| 8.2 | henvisningsskikk | **2 av 31** | 2 | ✓ |
| 8.2 | work-along | **2 av 31** | 2 | ✓ |
| 9.1 | kortsvar (T1) | fast del av skoleeksamen 2004–2018 og i H2025; **H2024 er det ene dokumenterte settet uten kortsvarsdel** | — | — |
| 9.1 | flervalg (T7) | **1 av 31** (kun H2024) | — | — |
| 9.2 | design-sjangeren (T2) | **20 av 31** | 24 | **−4** |
| 9.3 | vedleggsanalyse (T3) | **3 av 31** (H2015, H2016, V2018) | — | — |
| 9.4 | vedleggsdrøfting av roller (T4) | **5 av 31** (H2015, V2016, V2017, H2017, V2018) | — | — |
| 9.5 | metodesammenligning (T6) | **4 av 31** (V2011, V2013, H2024, H2025) | — | — |
| 9.5 | frittstående etikkoppgave (T5) | **2 av 31** (V2009, H2025) | — | — |
| 9.6 | feilvaksinen | **16 feil, destillert fra 11 sensorveiledninger** | 16 | ✓ |
| 9.7 | modellbesvarelse design | **20 av 31** | — | — |
| 9.8 | modellbesvarelse vedleggsanalyse | **3 av 31** | — | — |
| 9.9 | modellbesvarelse deltakerrolle | **5 av 31** | — | — |
| 9.10 | modellbesvarelse kortsvar + sammenligning | se 9.1 + **4 av 31** | — | — |

**Hvorfor sprikene oppstår** (samme tre feilkilder overalt, dokumentert her så
ingen «retter» tallene tilbake):

1. Analysens Score-kolonne teller **forekomster**, ikke terminer: `2009V(×2)`,
   `2008V(×3)`, `2012H(×2)`, `2016H(×2)`, `2017V(×2)`, `2017H(×2)`,
   `2010H(×2)`, `2007Hu(×2)`, `2005V(×2)`, `2024H(×2)` gir alle +1 eller +2 til
   scoren uten å legge til en ny termin.
2. Samleposten **«2018–21»** telles som fire i Score-kolonnen. De fire terminene
   har ingen oppgavesett og kan ikke stå i en brøk med nevner 31.
3. Ett belegg er merket **«implisitt»** (feltnotater, V2015) og ett er
   **tvetydig** (se under). Begge holdes utenfor det telte tallet.

**⚠ Den tvetydige merkelappen.** Analysens §2 fører i to rader både `2007Hu` og
`2008V (jan-u)`. Analysens §8 slår fast at `SVMET1010-2007Huts.pdf` er H2007s
utsatte eksamen, **avholdt i januar 2008** — altså samme papir under to navn.
Tallene i tabellen over er derfor telt UTEN `2008V (jan-u)` (observasjon 19, ikke
20; vitenskapsteori 10, ikke 11). Er du i tvil, bruk det lave tallet: en
merkelapp som kan bety to ting kan ikke bære en frekvenspåstand.

**Skjelettets kap. 0.1 skal IKKE gjengis som den står.** Skjelettets
`**Belegg:**`-punkt (c) ramser opp hele den anslåtte frekvenslista («design 24 ·
observasjon 23 · etikk 20+ · analyse 18 · intervju 17 · overførbarhet 10 ·
diskurs 9 · feltnotater 7 · dokumentanalyse 6 · webetnografi 5 · fokusgrupper 4»).
Bygg tabellen i kap. 0.1 fra §6.2 i stedet: **design 20 · observasjon 19 · etikk
15 · analyse 13 · intervju 13 · vitenskapsteori 10 (utfaset) · overførbarhet 9 ·
diskursanalyse 9 (utfaset) · dokumentanalyse 6 (utfaset) · feltnotater 6 ·
utvalg 6 · kvalitativ/kvantitativ 6 · webetnografi 4 (stigende) · fokusgrupper 4
(stigende) · forskningsspørsmål 3.**

⚠ Rangeringen er uendret, så skjelettets §2-rasjonale for kapittelfordelingen
står: design, observasjon, etikk, analyse og intervju er fortsatt de fem tunge
temaene og får 13 av 18 temakapitler.

### 6.3 Karakternivåene og de seks vektingsreglene (fra de 11 sensorveiledningene)

Veiledningene er påfallende konsistente fra V2016 til H2025. Alle
sjangerkapitler, modellbesvarelser og prøvefasiter skal referere til nivåene ved
navn — aldri bare «sensor vil ha god drøfting».

| Karakter | Hva som faktisk står der |
|---|---|
| **A/B** | Alle valg er **begrunnet**, ikke konstatert. Klar påstand som svarer på problemstillingen. Alle designkomponenter og sammenhengen mellom dem. Fremgangsmåten plasseres i et bredere metodisk landskap (hele rollekontinuumet før den ene rollen). Forklarer HVORFOR grepene gjøres. Leser caset nøye og ser dets metodiske og etiske implikasjoner. Transparent og refleksiv om egen rolle og om gyldighetsområdet. |
| **C (terskelen)** | Adekvat, men **deskriptiv**. Redegjør greit; drøfting, begrunnelse og problematisering uteblir. Avstand mellom empiri og teori. Eller: sterk på én komponent, betydelige svakheter i resten. |
| **D/E** | Uklar eller uforskbar problemstilling. Punktlister uten forklaring. Vag etikk. Svak pensumforståelse. Betydelige mangler i flere komponenter uten kompenserende styrker. |
| **F** | Forstår ikke skillet kvalitativt/kvantitativt; kvantitativ logikk gjennomgående. Ignorerer sentrale etiske krav. |

**De seks vektingsreglene** (skal stå eksplisitt i kap. 0.2 og styre alle
fasiter):

1. **Pensumforankring** forventes, «særlig i metodedelen». Manglende forankring
   trekker VESENTLIG ned. Ekstern litteratur er greit som supplement; hovedvekt
   på ekstern litteratur trekker vesentlig ned.
2. **Teoriterskelen er lav, men absolutt:** minst ett relevant begrep brukt
   MENINGSFULLT i analysen. Avansert teori som ikke brukes gir **null**
   uttelling. Svak teoretisk ferdighet straffes ikke hardt.
3. **Etikk-asymmetrien:** manglende etikkrefleksjon trekker ned KUN der den er
   åpenbart relevant (sensitiv informasjon, samtykkeutfordringer,
   konfidensialitetsbehov). Ved ufarlige tema straffes ikke tynn etikk — men
   gode konkrete etikkgrep trekker alltid opp.
4. **Sjekkliste-forbudet:** veiledningene instruerer sensor om å IKKE bruke
   kriteriene som avkrysningsliste. **Dybde og bredde er likeverdige veier til
   A.** Konsekvens for boka: modellbesvarelsene skal vise BEGGE profiler (§10.3).
5. **Metodekombinasjon gir ingen bonus i seg selv.** Det avgjørende er samsvar
   metode–problemstilling.
6. **Relevante eksempler trekker opp i alle sjangre**, helst fra pensum. Dette er
   grunnlaget for eksempellager-kravet (§7.2).

**De tre rubrikkene (bindende selvrettingsverktøy, binære — leseren skal kunne
krysse av uten skjønn).** De står i kap. 0.2 og 9.1–9.2, og hver prøvefasit viser
tilbake til den som passer.

**Designrubrikken (T2):**

☐ Står det et forskningsspørsmål som er avgrenset, empirisk besvarbart og
kvalitativt egnet?
☐ Er caset splittet i en «hvorfor»-dimensjon (motiver) og en
«hvordan»-dimensjon (praksis), med metode valgt per dimensjon?
☐ Er det minst ett analytisk begrep som faktisk BRUKES i analysedelen — ikke
bare nevnes i innledningen?
☐ Er metodevalget BEGRUNNET, og er alternativet man velger bort nevnt?
☐ Står datainnsamlingsplanen konkret: utvalgstype, rekrutteringsvei, sted,
omfang, intervjuguide eller feltrolle?
☐ Er etikken case-tilpasset og operasjonell (tiltak, ikke moralprat), og går den
gjennom alle prosjektfaser?
☐ Står det en analysestrategi, og samsvarer den med det som faktisk beskrives?
☐ Er forventede funn formulert som tentative svar med forbehold?

**Kortsvarsrubrikken (T1):**

☐ Én presis setning som definerer begrepet slik pensumforfatteren bruker det?
☐ Forfatteren navngitt?
☐ Typologien eller variantene med, der begrepet har dem?
☐ Ett konkret eksempel, helst fra en pensumstudie?
☐ Én løftesetning som kobler til design, validitet eller etikk?

**Vedleggsrubrikken (T3/T4):**

☐ Er den prinsipielle rammen på plass FØR analysen av det konkrete (hele
kontinuumet, hele fasemodellen)?
☐ Er hver påstand belagt med et konkret sted i vedlegget?
☐ Er informantene sammenlignet, og er det aktivt lett etter et negativt tilfelle?
☐ Er det forklart HVORFOR grepene gjøres — ikke bare at de gjøres?
☐ Er det tatt inn minst ett poeng som IKKE står i vedlegget?
☐ Er den kontrafaktiske drøftingen med (hvordan en annen rolle eller et annet
grep ville endret data, relasjoner og etikk)?

### 6.4 Sjangrenes anatomi (bindende for alle modellsvar og fasiter)

**T2 «design en studie av X» — de sju komponentene, i denne rekkefølgen:**
(1) forskningsspørsmål · (2) teoretisk rammeverk med minst ett begrep som skal
brukes · (3) metodevalg med begrunnelse og bortvalg · (4) plan for
datainnsamling · (5) etiske vurderinger, case-tilpasset · (6) analysestrategi ·
(7) forventede funn med forbehold.

**T1 kortsvar — fire trinn (5–15 min per begrep):** (1) definisjon i én–to
setninger MED forfatternavn · (2) typologi/varianter der begrepet har dem ·
(3) kort eksempel, helst fra pensumstudie · (4) én løftesetning som kobler til
design, validitet eller etikk.

**T3 vedleggsanalyse — tre ledd:** (1) analysefasene som verktøykasse, ikke
tvangstrøye · (2) gjennomført analyse med belegg i konkrete tekststeder, minst
ett definert begrep, sammenligning og aktivt søk etter negative tilfeller ·
(3) eksplisitt hvorfor-forklaring av grepene.

**T4 vedleggsdrøfting — fire ledd:** (1) HELE rollekontinuumet før den ene
rollen · (2) plassering med tekstbelegg · (3) fordeler MOT ulemper, inkludert
poenger utenfor vedlegget · (4) kontrafaktisk drøfting.

**T5 etikk — tre ledd:** (1) rammeverket (NESH, kjernekravene) ·
(2) metodespesifikke dilemmaer · (3) alle-faser-poenget med operasjonelle tiltak.

**T6 sammenligning — tre dimensjoner, alle tre kreves for A/B:** identifisere
kjennetegnene OG drøfte styrker/svakheter OG vise likheter/forskjeller. Struktur:
sammenlign langs **akser** (datatype, forskerrolle, reaktivitet, etikkprofil,
ressursbruk), aldri metode-for-metode-remse.

**T7 flervalg:** distraktorene er nabobegreper (probe/markør,
overførbarhet/generalisering, levning/beretning, fokusgruppe/gruppeintervju) —
presisjon trumfer gjenkjenning.

**T8 emneoppgaven:** ikke lenger vurderingsform, men fortsatt kursets arbeidsform
og eksplisitt mal for designoppgaven i H2024-veiledningen. Omtales alltid som
*arbeidsform og mal*, aldri som noe leseren skal levere.

### 6.5 Tidsbudsjett (bruk denne modellen konsekvent i hele boka)

**H2025-formatet (4 timer):** Del 1, to kortsvar, 40 % — ~1,5 t. Del 2, langsvar
design, 60 % — ~2,5 t. Fordeling innenfor langsvaret: lese caset og identifisere
hvorfor/hvordan (10 min) → problemstilling (15) → teorivalg (10) → metodevalg med
begrunnelse og bortvalg (25) → datainnsamlingsplan (30) → case-spesifikk etikk
(20) → analysestrategi (20) → forventede funn (10) → gjennomlesning (10).

**H2024-formatet (4 timer):** Del 1, to obligatoriske langsvar, 60 %. Del 2, 10
flervalg, 40 %. **Begge deler må bestås** — dette skal skrives ut hver gang
eksamensformen omtales.

**Det klassiske formatet (3–4 timer, 2004–2018):** Oppgave 1 kortsvar (1/3),
Oppgave 2 langsvar (2/3), valgfrihet mellom to alternativer.

Der en oppgaves deklarerte tid avviker fra summen av deltidene, forklares
differansen (skrivetid vs. total). «Lite tid?»-boksen sier eksplisitt at
kapitlenes tidsanslag er **LESEtid**, og at den som skriver besvarelser for hånd
bør legge på ca. ×1,5.

### 6.6 Bokas to mantraer

1. **«Begrunnelse, ikke deskripsjon.»** Etableres i kap. 0.2, gjentas i hvert
   sjangerkapittel og i hver A-markør-boks. Det er vippekriteriet
   sensorveiledningene selv nevner mellom to karakterer.
2. **«Definisjon uten avsender er C-stoff.»** Etableres i kap. 0.2. Begrunnelse:
   kortsvarene peker på konkrete pensumsteder, og upresise definisjoner som ikke
   treffer forfatterens bruk er feil #16.

Begge mantraene forklares i klarspråk ved første bruk — «C-stoff» er
karaktersjargong og skal gloses (§11).

---

## 7. FAGETS SANNHETSKONTROLL: BEGRUNNELSE + EKSEMPELLAGER

### 7.1 Begrunnelsesregelen (ufravikelig)

Ethvert metodevalg i boka — i et eksempel, i en modellbesvarelse, i en fasit —
skal være **begrunnet i én setning som svarer på «hvorfor akkurat dette?»**. Et
konstatert valg er C-stoff, og boka skal aldri vise C-stoff som om det var
A-stoff.

| ✗ Konstatert | ✓ Begrunnet |
|---|---|
| «Jeg vil bruke dybdeintervjuer.» | «Spørsmålet gjelder motiver, altså hvordan deltakerne selv forstår valget sitt — det er dybdeintervjuets styrke, og observasjon ville bare vist praksisen, ikke resonnementet bak.» |
| «Utvalget består av åtte informanter.» | «Åtte informanter valgt for maksimal variasjon i fartstid, fordi antakelsen er at nyankomne og erfarne beskriver presset ulikt — et homogent utvalg ville skjult nettopp den forskjellen.» |
| «Jeg vil analysere materialet tematisk.» | «Materialet kodes tematisk fordi spørsmålet gjelder mønstre på tvers av informanter, ikke den enkeltes fortelling som helhet — en fortellingsanalyse ville prioritert motsatt.» |

### 7.2 Eksempellager-malen (obligatorisk `collapsible` i hvert temakapittel)

Å BRUKE en pensumstudie som eksempel er en gjennomgående A-markør i
veiledningene. Boka bygger derfor et lager leseren kan mobilisere fra. Hvert
temakapittel har `collapsible` **«Eksempellager for kapitlet»** med 2–4 kort i
markdown-tabell eller som korte avsnitt, hvert med disse seks feltene:

> **Studie → forsker → metodegrepet den «eier» → hva grepet ga → hva den IKKE
> viser → hvilke oppgavetyper den kan brukes på**

Eksempel på et ferdig kort (form, ikke innhold å kopiere):

> **Fengselsfeltarbeidet (Ugelvik).** Feltarbeid over tid i et norsk fengsel,
> uten offisiell rolle — «deep hanging out», et uttrykk Ugelvik henter fra
> Geertz. Grepet ga tilgang til det som skjer når ingen forklarer noe for
> forskeren, og lot ham beskrive sitt eget forløp fra mistenkelig fremmed til
> betrodd fortrolig. Det viser IKKE hvor utbredt noe av dette er, og det er ikke
> et argument for at skjult observasjon er greit — rollen var kjent i feltet.
> Brukbar i: deltakerrolle-drøfting (T4), designets feltdel (T2), kortsvar om
> deltakende observasjon og feltnotater (T1).

**Lageret over hele boka** (samlet i studieguiden og i kortform i kap. 0.1):
Ugelvik (fengsel, deep hanging out, autoetnografi) · Fjær, Pedersen & Sandberg
(russesitater, symbolske grenser, stempling) · Skilbrei, Tveit & Brunovskis
(anonymiseringspraksis) · Broch (håndball, medspillerrollen) · Øygarden
(boksere, kroppen som metoderedskap) · Wadel (work-along, lærlingrollen) ·
Sandberg & Pedersen (gatekapital) · Bourgois (crackselgere, seminarcase).

⚠ **Studiene omtales, gjengis aldri.** Ingen av arkivets vedleggsutdrag —
russesitatene, sexkunde-intervjuet, Ugelvik-utdragene, Skilbrei-materialet,
tigger-casene — skal reproduseres eller parafraseres nær. Nyskrevne case skal
heller ikke låne en pensumforfatters eget eksempel (§16).

### 7.3 Feiltilskrivninger (FORBUDT — grep-sjekk mot denne tabellen)

Sensor merker en feilplassert forfatterkobling umiddelbart, og kortsvarene lever
av at koblingen er riktig. Disse er dokumenterte glidninger:

| Begrep | Riktig avsender | ALDRI tilskriv |
|---|---|---|
| Rollekontinuumet, «go native», prosessuelt samtykke, fortolkningsgrader, overførbarhet | **Fangen** | Weiss, Ugelvik |
| Markør, intervjuguide-typene, pilotintervju, negative tilfeller i utvalget, den engelske utvalgstypologien (probability sampling, maximize range, convenience sampling) | **Weiss** | Fangen, Tellmann & Leseth |
| Tilfeldig vs. strategisk utvalg, den norske utvalgstypologien (ekstremt, maksimal variasjon, homogent, snøball, teoribasert), undersøkelsesenheter | **Tellmann & Leseth** | Weiss |
| «Deep hanging out», tykke beskrivelser | **Geertz**, formidlet via Ugelvik/Fangen | Ugelvik alene, Fangen alene |
| De ti feltnotattypene | **Tjora** | Fangen |
| Levning, kilde, spor, beretning | **Kjeldstadli** | Fangen |
| Moderatorrollen, gruppesammensetning, hva/hvordan-analysen i fokusgrupper | **Wibeck** | Weiss |
| Webetnografi, adgang til digitale felt, nettet som kontekst | **Bengtsson** | Fangen |
| Koding og grounded theory | **Corbin & Strauss** | Weiss |
| Work-along, lærlingrollen | **Wadel** | Fangen |
| Kritisk diskursanalyse, «analysen må stå sin prøve» | **Grue** | Fangen |
| Konstaterende vs. konstruktive spørsmål | **ingen enkelt pensumforfatter** — norsk terminologi fra forelesning/antologi | **Weiss** (dokumentert glidning) |
| NESH-retningslinjene | **NESH** (institusjon) | en pensumforfatter |

**Tillatte forfattere/verk er uttømmende:** Fangen · Weiss · Tellmann & Leseth ·
Ugelvik · Wadel · Kjeldstadli · Tjora · Wibeck · Bengtsson · Grue · Corbin &
Strauss · Skilbrei, Tveit & Brunovskis · Fjær, Pedersen & Sandberg · Sandberg &
Pedersen · Broch · Øygarden · Bourgois · Geertz (kun som opphav til «deep
hanging out» og tykke beskrivelser) · NESH. **Navn utenfor denne lista skal ikke
innføres som pensumankere.**

### 7.4 `(verifiser)`-disiplin, pensumrotasjon og scope

**⚠ Utgave-sensitive ankere** (skjelettets ⚠-merking beholdes i pensumkartene som
«utgave-/pensumavhengig»): Wibeck, Kjeldstadli, Tjora, Grue, Corbin & Strauss,
Bengtsson, Wadel (antologibidrag), Tellmann & Leseth (antologiutgave), Sandberg
& Pedersen, og Bakkens forelesningsstoff fra 2024. Stabile ankere gjennom hele
veiledningsperioden: **Fangen, Weiss, Tellmann & Leseth, Ugelvik** og antologien
*Mange ulike metoder*.

Referanser du er usikker på merkes i den literale formen `(verifiser)` og løses i
fase 6 FØR `sjekk-bok.py` kjøres siste gang. **Ingen oppdiktede referanser, verk,
forskere, årstall eller tall. Ingen sidetall.**

**Scope-disiplin:** vitenskapsteori og diskursanalyse er utfaset etter 2015 og
får IKKE egne fordypningskapitler ut over 8.2 — heller ikke som lange
sidespor i andre kapitler. Å bruke halve langsvaret på vitenskapsteori i et sett
som ikke spør om det er en dokumentert feil.

---

## 8. KVANTITATIV-LOGIKK-PORTEN (fagets strykfeil)

Feil #1 er den mest fremhevede strykfeilen i veiledningene: å hevde
representativitet, «utbredelse» eller statistisk generalisering fra få
informanter. Boka MÅ kunne forklare hva den advarer mot — men den skal aldri
gjøre feilen selv.

**Bindende:**

- Boka bruker **overførbarhet** og **analytisk generalisering** om kvalitative
  funn. Ordet «generalisering» står aldri ukvalifisert om et kvalitativt funn.
- Ordene «representativ», «representativitet», «utbredelse» og «statistisk
  generalisering» kan stå — men **bare i en ramme** som viser at de hører til
  kvantitativ logikk, er en felle, eller er det leseren skal unngå.
  Prosaregel-kontrollert (§13.5, port 4).
- Hvert temakapittel som beskriver et utvalg skal si hva utvalget **ikke** kan
  brukes til, i klartekst.
- Kryssbok-lenkene til `psy1010` (utvalg, reliabilitet/validitet) rammes ALLTID
  inn som **kontrast**, ikke som forkunnskap: «der måles kvalitetskriterier
  psykometrisk og utvalget begrunnes statistisk — i SVMET1010 begrunnes utvalget
  strategisk, og kvalitetskriteriet heter overførbarhet» (§14).
- Kvantitativ metode omtales **respektfullt og presist**. Boka skriver aldri at
  kvalitativ metode er «bedre», «dypere» eller «mer vitenskapelig»
  (grep-sjekkes, §13.5). De to logikkene svarer på ulike spørsmål; det er hele
  poenget i kap. 1.1.

---

## 9. POLITISK OG METODISK NØYTRALITET (bindende — faglig presisjon, ikke høflighet)

SVMET1010s case er narkotikasalg, ungdomskriminalitet, prostitusjon, rusbruk,
papirløst arbeid, mindreårige på nett, konspirasjonsmiljøer og manosfære-innhold.
Dette er blant de mest politisk omstridte temaene i norsk offentlighet, og
metodefaget har i tillegg sine egne stridsspørsmål. En fremstilling som tar
stilling er **faglig gal** — og sensor merker forskjellen umiddelbart. Men
nøytralitet betyr **ikke** å relativisere.

### 9.1 Grunnregelen: beskriv posisjoner, gjengi funn

| Type påstand | Slik behandles den |
|---|---|
| **Politisk omstridt spørsmål** («bør narkotikapolitikken endres?», «er sexkjøpsloven riktig?») | **Posisjonene beskrives, aldri bedømmes.** Minst to posisjoner, hver med sin sterkeste begrunnelse. Boka lander ikke på leserens vegne. |
| **Metodisk stridsspørsmål** («er skjult observasjon noen gang forsvarlig?», «er overføringsvurderingen forskerens eller leserens ansvar?») | **Posisjonspar.** Begge sider får sitt beste argument. Dette er ikke svakhet — det er drøftingsstoffet sensor premierer. |
| **Dokumentert metodisk funn eller etablert fagregel** («kvalitative funn kan ikke si noe om utbredelse»; «Fangens kontinuum har fire hovedposisjoner»; «anonymisering i Skilbrei m.fl. endret alder, reiserute og navn») | **Presenteres som det det er**, med sitt faktiske belegg. **Å pakke et robust funn inn i «noen mener» er å svekke faget, ikke å være nøytral.** |
| **Normativ konsekvens** («derfor bør forskning på lovbrudd ha kildevern») | Behandles som en **posisjon**, ikke som en følge av funnet. |
| **Begrep med politisk ladning** («sårbar gruppe», «avvik», «kriminelt miljø») | Brukes **analytisk**, definert ved første bruk per kapittel. Aldri som skjellsord eller honnørord. |

### 9.2 Konkrete bindinger

- **Kvalitativ vs. kvantitativ er ikke et rangeringsspørsmål** (§8). Kap. 1.1
  viser hva hver logikk fanger og mister — ikke hvem som vinner.
- **Vitenskapsteoretiske posisjoner** (positivisme, hermeneutikk,
  konstruktivisme) presenteres som posisjoner med hver sin logikk, aldri som
  riktig/feil. Kap. 8.2 lander ikke.
- **Skjult observasjon** er bokas tydeligste ekte dilemma: aldri forsvarlig —
  eller forsvarlig når åpenhet ødelegger feltet og skaden er minimal? Begge sider
  får empiri og argumenter (kap. 6.2).
- **Mennesker i casene er aktører, ikke kulisser.** Informanter beskrives som
  handlende under strukturelle begrensninger — aldri som elendighetskulisse og
  aldri som eksotisk materiale. Skriv «personer som selger narkotika», ikke
  merkelapper på personer.
- **Ingen policyanbefalinger i bokas egen stemme.** Formuleringer som «vi må»,
  «det er på tide at», «myndighetene bør» hører ikke hjemme. Boka kan gjengi en
  posisjon som mener dette — merket som posisjon.
- **Forskningsetikken beskrives, ikke forkynnes.** NESH-kravene gjengis som
  gjeldende retningslinjer med sin begrunnelse; etiske avveininger presenteres
  som avveininger. «Man må være etisk» er selv feil #8.
- **Sårbare grupper:** der et nyskrevet case involverer mindreårige, papirløse,
  rusavhengige eller personer i salg av seksuelle tjenester, SKAL casets etiske
  profil drøftes i samme kapittel — ikke som pynt, men fordi det er nøyaktig det
  sensor sjekker.

### 9.3 Vippe-case (bindende)

Minst én drøftingsoppgave i boka skal ha to fullt forsvarlige landinger. Fasiten
skriver **UT begge lesningene** og merker oppgaven **«(omstridt — begge landinger
forsvarlige)»**. Anbefalt plassering: kap. **6.2** (er skjult observasjon
forsvarlig i et lukket, skadelig miljø?) eller kap. **5.1** (er et åpent forum
«offentlig» og dermed fritt vilt?). Entydige fasiter hele veien trener aldri
håndtering av ekte faglig ambivalens — og det er ambivalensen sensor premierer.

### 9.4 Språk (grep- og prosaregel-sjekkes, §13.5)

- **Forbudt som bokas egne ord:** «narkoman», «fremmedkulturell»,
  «andregenerasjons innvandrer», «snikislamisering», «naturfolk», «primitive
  samfunn», «underutviklede land».
- **Skriv i stedet:** «person med rusproblemer» / «rusavhengig», «personer med
  innvandrerbakgrunn», «etterkommere», gruppens eget navn, «lav- og
  mellominntektsland».
- **Ingen «vi» mot «dem».** Feltet er ikke et annet folkeslag.
- **Ingen appeller.** Se §9.2.

---

## 10. MODELLBESVARELSER (ærlighet, nivå og variasjon)

### 10.1 Ærlig merking — ufravikelig

- Hver modellbesvarelse innledes med én linje: **«Nyskrevet modellbesvarelse —
  skrevet av oss for denne boka. SVMET1010 har elleve publiserte
  sensorveiledninger som beskriver karakternivåene, men ingen publiserte
  besvarelser og ingen fasit. Dette er derfor ikke en ekte kandidatbesvarelse.»**
- En boks som heter «C-besvarelse» skal **VÆRE en C** — tittel, tekst og
  margnotater skal stemme. En polert A merket som C er en byggefeil. Samme for
  E-skissen i 0.2: den skal faktisk mangle det den sier den mangler.
- Ordet «studentbesvarelse» er forbudt i bokinnholdet (grep-sjekkes, §13.5).
  Skriv «modellbesvarelse», og bruk formuleringen «ikke en ekte
  kandidatbesvarelse» i ærlighetslinjen.

### 10.2 Meta-fasit er FORBUDT

«En A-besvarelse ville her ha drøftet …» er en regibemerkning, ikke en fasit.
**Drøftelsen skal skrives UT** — kort, skarp, forankret, med landing.
Grep-sjekkes: `en A-besvarelse ville|ville ha drøftet` = 0 treff.

Margnotater er lov og ønsket, men de skal **peke på tekst som faktisk står der**:
`> Margnotat: her står bortvalget av fokusgruppe begrunnet i temaets sensitivitet — det er begrunnelse, ikke konstatering, og det er dette som løfter fra C.`

### 10.3 Nivåfordeling og profilvariasjon (bindende)

| Kapittel | Nivåer som SKAL finnes | Profil |
|---|---|---|
| 0.2 | samme korte drøftingsoppgave på **E-, C- og A-nivå** | — |
| 9.1–9.6 | tre-nivå-momentliste (E / C / A) på hver oppgave | — |
| **9.7** (design) | **A + C + midtnivå-besvarelse (B)** | **A-en er en BREDDE-A**: alle sju komponenter solide, ingen går ekstremt dypt |
| 9.8 (vedleggsanalyse) | A + C | **A-en er en DYBDE-A**: færre grep, men hvert av dem forklart og drevet langt |
| 9.9 (deltakerrolle) | A + C | fri profil; **konkluderer SKARPT** (se 10.4) |
| 9.10 (kortsvar + sammenligning) | A + C | fri profil |
| `9-prove` (øvingseksamener) | momentliste-fasit med C- og A-beskrivelse per oppgave | — |

**Breddeprofil vs. dybdeprofil er ikke pynt** — det er sjekkliste-forbudet (§6.3,
vektingsregel 4) gjort synlig. Begge modellbesvarelsene skal ha margnotat som
sier eksplisitt at den andre profilen ville vært like god.

**Midtnivå-besvarelsen (B) i kap. 9.7** er et README-krav: realistisk
førsteårsspråk, litt rotete disposisjon, alle sju komponenter er der men teori og
forventede funn er tynne, metodevalget er begrunnet én gang og deretter
konstatert, etikken er case-tilpasset men uten tiltak per fase — og faglig god.
Med margnotater om hva som er **BRA NOK** og de 2–3 grepene som skiller den fra
A. Leseren trenger et realistisk sammenligningspunkt, ikke bare polert A og
karikatur-C.

### 10.4 Konklusjonsvariasjon (bindende)

- **Kap. 9.9 skal konkludere SKARPT:** A-besvarelsen tar klart standpunkt om at
  den valgte rollen var riktig for akkurat dette spørsmålet, med begrunnelsen
  utskrevet — og er likevel toppnivå. Margnotat: «Forbehold er et verktøy, ikke
  obligatorisk garnityr. En skarp, begrunnet konklusjon er en fullgod A-form.»
- **9.7, 9.8 og 9.10** kan lande mer avveiende, men må da begrunne selve
  avveiningen — «det kommer an på» uten grunner er feil #4 i ny drakt.
- Ikke alle modellbesvarelser skal lande på samme kompromissform.

---

## 11. Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»; SKAL i førsteutkastet)

- **Kun eksamensrelevant stoff.** «Bør kjenne til»-stoffet (Del 8, biografiske
  intervjuer, walk-along, multilokalt feltarbeid, stedsanalyse) plasseres SIST i
  sitt kapittel og merkes eksplisitt med sin lave frekvens.
- **HARDT LINJEBRUTT PROSA ER FORBUDT (rendrings-kritisk).** Rendreren gjør HVERT
  enkelt `\n` om til `<br />`. Regelen: **ett avsnitt = én lang linje i
  JSON-strengen**, `\n\n` mellom avsnitt, og enkelt `\n` KUN der linjeskiftet
  faktisk er ønsket (deloppgaver, listelinjer, tabellrader, margnotater,
  flervalgsalternativer). Gjelder `content`, `problem`, `solution`, `task` og
  `hints`.
- **Godt, flytende norsk (UFRAVIKELIG).** Hele setninger, korte avsnitt (2–4
  setninger), aktiv «du»-form. Telegramstil er FORBUDT. Konkret norsk knagg før
  fagtermen; presisjon vinner ved tvil. Engelske fagtermer får norsk knagg
  først, termen i parentes: «å henge med over tid (deep hanging out)», «å gå helt
  opp i rollen (go native)», «å gå ved siden av (walk-along)».
- **Ingen uforklart sjargong.** Fagstoffet er nybegynnervennlig — det er
  METAspråket som må ryddes. Sjangerkodene T1–T8, feilkodene #1–#16 og all
  karaktersjargong («C-stoff», «A-markør», «C-terskelen») forklares i klarspråk
  ved FØRSTE bruk **per kapittel**. Emnet har ingen forkunnskapskrav — mange
  lesere er i sitt første semester.
- **Hver oppgave synlig eksamensforankret** med sjanger-tag i ledende parentes:
  `(Eksamenssjanger design — T2; slike oppgaver har alltid alle sju komponentene, og sammenhengen mellom dem er selve vurderingskriteriet.)`
  Sjangerkoden skrives fullt ut ved første bruk per kapittel. Vanskelighetsgraden
  skrives ALDRI inn i `task` (den ligger i `difficulty`).
- **Deloppgaver på egen linje med fet merking:** `…\n\n**a)** …\n**b)** …`. ALDRI
  a) b) c) bak hverandre i løpende tekst. Små bokstaver, aldri A)/[A]. Ikke bruk
  `subTasks`.
- **Inline-nummerering** `(1) … (2) … (3) …` med tre eller flere påfølgende settes
  på egne linjer. Gjelder særlig de sju designkomponentene, de fire trinnene i
  rollekontinuumet, analysens sju faser, de tre fortolkningsgradene og
  Kjeldstadlis kildetypologi — de skal uansett stå som egne linjer, i rekkefølge.
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. 3.1](/svmet1010/svmet1010-3-1)`. Død «se kapittel
  X.Y»-tekst er FORBUDT. Aldri lenker i `title`-felt.
- **Karakter-realisme:** Del 0 sier eksplisitt at **C er en god og vanlig
  karakter**, særlig i et emne uten forkunnskapskrav der mange er i sitt første
  semester. Formuleringen **«Prioritet: perfekt» er FORBUDT** — skriv «høyeste
  prioritet». Prioritetsklassene fra skjelettet oversettes slik: *perfekt* →
  **høyeste prioritet**, *kunne* → **kunne**, *kjenne* → **bør kjenne til**.
  «Gapet til A» rammes inn som **oppgraderingsmeny**, ikke mangelliste. Eksamen
  er gradert A–F, men **H2024- og H2025-formatene krever at begge deler bestås**
  — boka skal minst ett sted (kap. 0.1) vise nøkternt hva som skjer når den ene
  delen svikter.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter HVER prøvefasit og etter hver
  langsvarsfasit i øvingseksamenene — bruk rubrikkene i §6.3. I hvert
  temakapittel: minst én **lett innstegsoppgave** tidlig (`difficulty: "lett"`,
  ren gjengivelse med egne ord, vennlig fasit) før første fulle eksamenssjanger.
- **Hverdagsanker + verdens-caser:** abstrakte kjernetemaer åpner med et konkret
  anker FØR apparatet (overførbarhet: at du kjenner igjen noe fra én arbeidsplass
  på en annen uten å påstå at det gjelder alle; deltakerroller: at du oppfører
  deg ulikt på jobb og hjemme og ser ulike ting derfra; markør: at noen slipper
  en halv setning og skifter tema). Eksemplene er verdens-caser — ALDRI
  metaeksempler av typen «en medstudent skriver …».
- **Erfarings-bro:** mange lesere har egen erfaring fra arbeidsliv, idrett,
  helse eller frivillighet. Legg en kort `tip`-boks i kap. 0.2 som viser
  KONVERTERINGEN: (1) start i begrepet, (2) bruk erfaringen som ILLUSTRASJON,
  aldri som belegg alene, (3) koble tilbake til en pensumforfatter og en
  drøftingsakse.
- **Difficulty-spredning + kald bank:** boka skal ha genuint krevende oppgaver
  merket `difficulty: "vanskelig"` (og «(krevende)» i oppgaveteksten der det
  hjelper), ikke alt på middels. Én merket **kald bank** i kap. 9.6 (§5.3).
- **Hint på alle oppgaver:** hvert `exercise` har utfylte `hints`. Første hint =
  hvilket begrep, hvilken forfatter, hvilken sjangerregel eller hvilken
  designkomponent oppgaven krever («Start i skillet mellom probe og markør — hvilken
  av dem er noe informanten slipper, og hvilken er noe du gjør?») — **ALDRI
  konklusjonen**. Eneste unntak er den kalde banken.
- **Stokket flervalg og varierte fasit-mønstre:** statiske flervalg i
  prøve-`collapsible`-er og øvingseksamener har stokkede fasit-bokstaver (ALDRI
  «alle a»), og prøve-tipen sier hvor flervalget bor. Gjelder ALLE ensartede
  fasitlister, også «hvilken feil begår kandidaten»-drillen i 9.6 og
  riktig/galt-listene — aldri «alle felle», aldri samme fasit to ganger på rad.
  Verifiseres med `sjekk-fasitfordeling.py` (terskel 45 %).
- **Distraktorer straffer aldri grundig lesing:** en distraktor gjengir ALDRI
  bokas egen presisering som «galt» svar. Ligger en distraktor nær sannheten
  (typisk: «overførbarhet betyr at funnene gjelder for hele populasjonen», «en
  fokusgruppe er et gruppeintervju», «en markør er et oppfølgingsspørsmål»), skal
  `explanation`/fasitkommentaren forklare eksplisitt hvorfor den ikke holder.
- **Signal-/hintbokser ETTER oppgaven:** en boks som varsler hva en drilloppgave
  tester («her ligger probe/markør-fella») plasseres ETTER oppgaven, aldri foran.
- **Frekvenstall = §6.2.** Ingen egne opptellinger, ingen «N av M» uten belegg i
  §6.2, ingen omregning, ingen bruk av skjelettets anslag.
- **Begrepsbank = oppslagsverk:** hvert pensumkart og hvert eksempellager åpner
  med standardnotisen: «Begrepsbanken er flashcard-/repetisjonsstoff — den
  gjentar det du nettopp har lest. Hopp trygt over ved førstegangslesing;
  tidsanslaget for kapitlet gjelder kjernestoffet.» `definition`-blokker slettes
  ALDRI for å «rydde» — de er flashcard-kilden.
- **Øktmerking:** alle kapitler med `estimatedMinutes > 45` — altså 1.1, 1.2,
  2.2, 2.3, 3.1, 3.2, 4.1, 5.1, 6.1, 6.2, 7.1, 7.2, 9.2, 9.3, 9.4, 9.6, 9.7 —
  har tidsanslag i underoverskriften («## Fangen-kontinuumet (~15 min)») eller
  eksplisitte «— naturlig pausepunkt —»-markører. Lange modellbesvarelser har
  pausepunkt mellom hovedseksjonene. ⚠ Overskriften bærer NAVNET, aldri
  løkkenummeret (§1).
- **Tidsbudsjett-konsistens:** der en oppgaves deklarerte tid avviker fra summen
  av deltidene, forklares differansen (§6.5). «Lite tid?»-boksen sier eksplisitt
  at kapitlenes tidsanslag er **LESEtid**, og at den som skriver besvarelser for
  hånd bør legge på ca. ×1,5.

### 11.1 Del 0-pakken (alt dette SKAL finnes i kap. 0.1, der ikke annet er sagt)

- **«Slik leser du denne boka»-orienteringsboks** (type `text` eller `tip` —
  **ALDRI `definition`**, det ville endret flashcard-kvoten) med: karakterskalaen
  A–F og hva C, B og A faktisk krever, hva «C-stoff» og «A-markør» betyr, en
  kompakt liste over sjangerkodene T1–T8 skrevet fullt ut, de seks
  vektingsreglene i én linje hver, og at typiske feil har et samlet register
  (#1–#16) med eget kapittel (9.6).
- **«Lite tid?»-boks** (`tip`): hurtigrute for 3–5 dager (kapittelrekkefølge +
  timeanslag; prioriter Del 2, Del 3 og Del 6 — de tre tyngste — pluss kap. 0.2)
  og ukeplan bygget av summerte `estimatedMinutes`. **Summen av de 30 kapitlene
  er 1 625 minutter ≈ 27 timer lesetid.**
- **Kildenote for frekvens-empirien** — ordlyden i §6.1, aldri utvidet.
- **Frekvenstabellen** — de 15 tallene fra §6.2, med nevneren skrevet ut.
- **Sjangerkort på ÉN side** som ER kortet: sjanger (T1–T8) → én linjes
  oppskrift → typisk plassering og vekting → vanligste feil. Ikke en lenkeliste.
- **Eksempellager-kortet** — de åtte studiene som énlinjere: studie → forskeren →
  metodegrepet den «eier» → hjemkapittel (lenke). Fullversjonen bor i
  temakapitlenes eksempellagre; kortet i 0.1 er den glemsomme leserens
  gjenopptaksverktøy.
- **De sju designkomponentene** som huskeliste MED begrunnelses-formuleringer
  (ikke sjekkliste: eksempelfraser som viser «begrunner» vs. «konstaterer»).
- **Eksamensformens tre regimer** forklart kort, med den eksplisitte setningen om
  at eldre sett viser sjangrene, ikke dagens format — og at **begge deler må
  bestås** i H2024- og H2025-formatene.
- **Deltidsrute** 8–10 uker (~3 t/uke) med temadelprøvene fordelt underveis og
  modellbesvarelsene + de tre øvingseksamenene de siste to ukene — aldri stablet
  i siste uke.
- **«Lese mye, skrive lite»-boks:** legitim rute for lese-øveren (les oppgaven →
  formuler problemstilling og metodevalg mentalt i to setninger → les
  modellbesvarelsen som sensor) + minimumsrådet: skriv minst ÉN full
  designbesvarelse på tid, og ta minst ett komplett flervalgssett.

---

## 12. Kvotekontrakt (AUTORITATIV — bindende total, aldri overstyr)

Verifisert mot skjelettets kvotesammendrag: alle deltotaler og totalene summerer,
og summen av `estimatedMinutes` er **eksakt 1 625** — skjelettets «~1 625»
stemmer, i motsetning til frekvenstallene.

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1–0.2 | 25 | 20 | 0 |
| 1 | 1.1–1.2 | 55 | 55 | 4 |
| 2 | 2.1–2.3 | 70 | 70 | 4 |
| 3 | 3.1–3.3 | 65 | 75 | 4 |
| 4 | 4.1–4.3 | 60 | 60 | 4 |
| 5 | 5.1 | 20 | 20 | 4 |
| 6 | 6.1–6.2 | 50 | 50 | 4 |
| 7 | 7.1–7.2 | 50 | 45 | 4 |
| 8 | 8.1–8.2 | 35 | 45 | 4 |
| 9 | 9.1–9.10 | 116 | 81 | 3 øvingseksamener |
| **Sum** | **30 kap.** | **546 ✓ (≥500)** | **521 ✓ (≥500)** | **35** |

Per kapittel (quiz · flashcards · estimatedMinutes) — **minimum, aldri under;
overskyting er lov**:

| Kap. | Q · F · min | Kap. | Q · F · min | Kap. | Q · F · min |
|---|---|---|---|---|---|
| 0.1 | 10 · 10 · 40 | 3.3 | 15 · 20 · 40 | 8.1 | 15 · 20 · 40 |
| 0.2 | 15 · 10 · 60 | 4.1 | 30 · 30 · 75 | 8.2 | 20 · 25 · 45 |
| 1.1 | 30 · 30 · 60 | 4.2 | 15 · 15 · 45 | 9.1 | 25 · 15 · 45 |
| 1.2 | 25 · 25 · 60 | 4.3 | 15 · 15 · 45 | 9.2 | 15 · 10 · 60 |
| 2.1 | 15 · 15 · 45 | 5.1 | 20 · 20 · 50 | 9.3 | 10 · 8 · 50 |
| 2.2 | 25 · 30 · 60 | 6.1 | 30 · 30 · 60 | 9.4 | 10 · 8 · 50 |
| 2.3 | 30 · 25 · 90 | 6.2 | 20 · 20 · 60 | 9.5 | 12 · 10 · 45 |
| 3.1 | 30 · 30 · 75 | 7.1 | 30 · 25 · 75 | 9.6 | 20 · 10 · 60 |
| 3.2 | 20 · 25 · 60 | 7.2 | 20 · 20 · 50 | 9.7–9.10 | 6 · 5 · 50/45/45/40 |

**Bindende total: quiz 546 · flashcards 521 · 1 625 minutter.** Flashcards telles
som **toppnivå `definition`-blokker med `title`**. Prøvekapitler har ingen kvote
(ingen quiz, ingen begrepsbank).

### 12.1 Quiz-filformat

`src/lib/data/quiz-staging/svmet1010-<del>-<nr>.quiz.json`:

```json
[{ "question": "…", "options": ["riktig", "distraktor", "distraktor", "distraktor"], "explanation": "…" }]
```

Nøyaktig **4 alternativer**, `options[0]` **ALLTID** riktig. **Runtime stokker
rekkefølgen**, så `explanation` skal ALDRI si «alternativ to», «det tredje
alternativet», «svaret over» eller «det siste alternativet» — gjenta innholdet i
stedet: «Riktig svar er at en markør er et flyktig hint informanten selv slipper
…». **Posisjonsreferanser er en hard produkteierregel** (verifiseres med
`sjekk-alternativref.py`). Ingen duplikate alternativer. `explanation` på 2–4
setninger sier hvorfor fasiten er riktig OG hvilken felle hver nære distraktor
tester.

**INGEN LENGDE-TELL (hard produkteierregel):** fasiten skal IKKE være det lengste
eller mest detaljerte alternativet. Alle fire alternativer skal ha jevn lengde og
presisjonsgrad — en leser som «velger det lengste» skal treffe ~25 %, ikke 77 %.
Skriv distraktorene like fyldige som fasiten; trim heller fasiten. Verifiseres med
`node scripts/hoyskolebok/quiz-lengdesjekk.mjs`. Ekstra kritisk her, fordi
quiz-banken ER treningen mot flervalgsdelen (T7) — spørsmålene derfra publiseres
aldri, så banken er eneste mulige forberedelse.

**Distraktor-kalibrering** — nabobegrep-distraktorer, aldri tullesvar: probe vs.
markør · overførbarhet vs. statistisk generalisering · levning vs. beretning ·
fokusgruppe vs. gruppeintervju · strategisk vs. tilfeldig utvalg · konstaterende
vs. konstruktive spørsmål · deskriptive vs. teoretiske feltnotater · første- vs.
andre- vs. tredjegrads fortolkning · informert samtykke vs. konfidensialitet vs.
meldeplikt · delvis deltakende vs. fullt deltakende rolle. I tillegg: «hvem eier
begrepet»-koblinger (Fangen vs. Weiss, Tellmann & Leseth vs. Weiss, Kjeldstadli
vs. Fangen, Tjora vs. Fangen), «hvilket metodepoeng eier studien X» og «hvilken
feil begår kandidaten».

### 12.2 Flashcard-profil

Tre korttyper i om lag lik andel (skjelettets profil):

1. **Begrepskort med avsender og distinksjon** — «hva er X hos Y, og hva skiller
   det fra nabobegrepet Z»: deltakerroller (Fangen) · markør (Weiss) ·
   strategiske utvalgstyper (Tellmann & Leseth) · levning/kilde/beretning
   (Kjeldstadli) · feltnotattyper (Tjora) · webetnografi (Bengtsson) ·
   fokusgruppe (Wibeck).
2. **Eksempelkort** — «studie → forsker → metodegrepet den eier → hva det ga»:
   Ugelvik · Fjær, Pedersen & Sandberg · Skilbrei, Tveit & Brunovskis · Broch ·
   Øygarden · Wadel · Sandberg & Pedersen · Bourgois.
3. **Prosedyrekort** — «sjanger/modell → trinnene i rekkefølge»: de sju
   designkomponentene · analysens sju faser · kortsvarets fire trinn ·
   T4-oppgavens fire ledd · NESH-kjernekravene.

Formatet speiler både flervalgsdelen (gjenkjenne distinksjonen) og kortsvaret
(definere presist med avsender).

---

## 13. Fagspesifikk stil (ufravikelig for SVMET1010 — fra skjelettets §1–§2)

### 13.1 Notasjonsstandard

- **Norsk bokmål. Ingen matematisk notasjon, ingen `$…$` noe sted.** Boka er
  symbolfri, og kravet om «Symbol- og formelliste» er dermed ikke relevant
  (README-unntaket for symbolfrie fag). Hvert temakapittel har `collapsible`
  **«Pensumkart for kapitlet»** i stedet.
- **Dollartegn som ikke er matte MÅ escapes som `\\$`.** Et enkelt bart `$` i en
  streng kutter resten av teksten til rå LaTeX-kilde for leseren. Oddetall `$` i
  samme tekstfelt felles av `sjekk-latex.py`.
- **Tallformat:** norsk desimalkomma, prosent med mellomrom («40 %»). Årstall og
  semestre skrives «H2024» og «V2016» (aldri «h24», aldri «høsten -24»). Utsatt
  eksamen skrives «H2007 (utsatt)».
- **Verktitler** skrives i kursiv i brødtekst og med «anførselstegn» i
  `title`-felter. **Aldri sidetall, aldri kapittelnumre i pensumbøker.**
- **Skrivemåter (grep-konsistens):** «kvalitativ» / «kvantitativ» ·
  «overførbarhet» / «analytisk generalisering» · «deltagende observasjon» (som
  Fangens boktittel) og «deltakende observasjon» (som metodenavn) — vær
  konsekvent innen samme kapittel · «deltakerroller» · «ikke-deltakende
  observatør» / «delvis deltakende» / «fullt deltakende» / «ikke-observerende
  deltaker» · «go native» · «feltnotat(er)» · «intervjuguide» · «probe» ·
  «markør» · «konstaterende» / «konstruktive spørsmål» · «dybdeintervju» ·
  «biografisk intervju» · «fokusgruppe» · «moderator» · «webetnografi» ·
  «strategisk utvalg» / «tilfeldig utvalg» · «maksimal variasjon» /
  «snøballutvalg» / «teoribasert utvalg» / «ekstremt utvalg» · «portvakt» ·
  «metning» · «informert samtykke» / «prosessuelt samtykke» ·
  «konfidensialitet» / «anonymisering» · «meldeplikt» · «NESH» ·
  «konsekvensvurdering» · «koding» / «kategorisering» / «kontekstualisering» ·
  «negative tilfeller» · «analytisk induksjon» · «temasentrert tilnærming» ·
  «tematisk analyse» · «grounded theory» · «fortellingsanalyse» /
  «beretningsanalyse» · «etnometodologi» · «første-/andre-/tredjegrads
  fortolkning» · «tykke beskrivelser» · «refleksivitet» / «transparens» ·
  «validitet» / «reliabilitet» · «levning» / «kilde» / «spor» / «beretning» ·
  «diskursanalyse» / «kritisk diskursanalyse» · «hermeneutikk» /
  «positivisme» / «konstruktivisme» · «work-along» / «walk-along» ·
  «multilokalt feltarbeid» · «deep hanging out» · «autoetnografi».
- Engelske fagtermer får norsk knagg først, termen i parentes ved første bruk per
  kapittel.

### 13.2 Sjangerkodene T1–T8 (introduseres i kap. 0.1, skrives fullt ut ved første bruk per kapittel)

**Kodene er analysens interne merkelapper og skal ALDRI stå alene.** Skriv alltid
sjangerens navn først, koden i parentes:

| Kode | Navn som skal brukes | Hva det er |
|---|---|---|
| **T1** | kortsvar | «gjør kort rede for tre av følgende fire begreper» — presis, pensumforankret definisjon |
| **T2** | design | «utform et forskningsopplegg om X» — de sju komponentene med begrunnelser |
| **T3** | vedleggsanalyse | analyser utlevert intervjumateriale, ofte mot en gitt påstand |
| **T4** | vedleggsdrøfting | deltakerroller i et konkret feltarbeid: begrep → plassering → drøfting → kontrafaktisk |
| **T5** | etikkoppgave | frittstående redegjørelse for forskningsetikk og kvalitative dilemmaer |
| **T6** | metodesammenligning | redegjør for og sammenlign metodene langs akser |
| **T7** | flervalg | 10 spørsmål, kun dokumentert i H2024; spørsmålene publiseres aldri |
| **T8** | emneoppgaven | kursets arbeidsform og mal for designoppgaven — **ikke en vurderingsform i dag** |

*(**T8 er ikke en eksamensdel i dag.** Den var vurderingsform 2016–2021 og er
fortsatt seminarenes arbeidsform; H2024-veiledningen sier eksplisitt at
designoppgaven skal løses «slik som i emneoppgaven og på seminar». Dette skal sies
eksplisitt ved første bruk — en leser skal aldri tro at hun skal levere en
emneoppgave.)*

### 13.3 Feilkodene #1–#16 (glosses ved første bruk PER KAPITTEL)

| # | Feil | Forebygges i |
|---|---|---|
| #1 | Kvantitativ logikk i kvalitativ kontekst — representativitet, utbredelse, statistisk generalisering fra få informanter | 1.1, 1.2, 2.2, 9.6 |
| #2 | Skjult kvantitativ tilnærming i praksis — intervjuguiden er egentlig et spørreskjema; opptelling der tolkning var poenget | 4.1, 9.6 |
| #3 | Punktvise skjema-svar uten begrunnelse | 2.3, 9.2, 9.6 |
| #4 | Oppskrift i stedet for drøfting — «slik gjør man feltarbeid» uten dilemmaer | 3.1, 3.2, 9.6 |
| #5 | Ren deskripsjon av vedlegg/data — gjenfortelling, synsing uten belegg, analyse uten retning | 7.1, 9.3, 9.6 |
| #6 | Avstand mellom empiri og teori — begrepet nevnes i innledningen og brukes aldri | 2.3, 7.1, 7.2, 9.6 |
| #7 | Manglende eller marginal pensumbruk; hovedvekt på ekstern litteratur | 0.2, 9.6 |
| #8 | Vag etikk — «man må være etisk» uten tiltak; etikk som rituell seksjon; case-spesifikke implikasjoner oversett | 5.1, 6.1, 6.2, 9.6 |
| #9 | Ikke å lese oppgaveteksten nøye — overse hvorfor/hvordan-dimensjonen eller metodeforskjellen mellom alternativene | 0.1, 2.1, 9.2, 9.6 |
| #10 | Å svare på flere valgfrie oppgaver enn påkrevd — gir null uttelling, sensor teller bare den beste | 0.1, 9.1, 9.6 |
| #11 | Uklar eller uforskbar problemstilling — det hyppigst nevnte D/E-kjennetegnet | 2.1, 9.6 |
| #12 | Manglende samsvar mellom beskrevet analysemetode og faktisk analyse; irrelevante data | 2.3, 7.1, 9.6 |
| #13 | Manglende transparens om omstendighetene (tid, sted, varighet, antall informanter, relasjon) | 1.2, 3.2, 9.6 |
| #14 | Å intervjue bekjente uten å drøfte det | 4.2, 9.6 |
| #15 | Ubalanserte besvarelser — svært god på én del, svak på resten gir C, ikke B | 0.2, 9.2, 9.6 |
| #16 | Upresise definisjoner som ikke treffer pensumforfatterens bruk | 9.1 + alle begrepskapitler |

**Registeret har nøyaktig seksten koder.** Ikke innfør en syttende noe sted.

### 13.4 Prioritetsklasser

**høyeste prioritet** (skjelettets «perfekt» — 1.1, 2.1, 2.3, 3.1, 3.2, 4.1, 6.1,
6.2, 7.1, 9.1, 9.2, 9.4, 9.5, 9.6) · **kunne** (1.2, 2.2, 3.3, 4.2, 4.3, 5.1,
7.2, 9.3) · **bør kjenne til** (8.1, 8.2 og «bør kjenne til»-halene i andre
kapitler). Skriv ALDRI «Prioritet: perfekt».

### 13.5 Forbudt-termer og prosaregler (grep-sjekkes)

**Hard port** — `sjekk-bok.py`-regexen skal gi **0 treff** (kjøres
case-insensitivt; skriptet unntar automatisk kap. 0.1, som skal beskrive
kildesituasjonen):

```
Prioritet: perfekt|Sist du var her|som du sikkert husker|du har jo allerede sett|en A-besvarelse ville|ville ha drøftet|en toppbesvarelse ville|studentbesvarelse|offisiell fasit|offisielle fasiter|offisielle løsningsforslag|løsningsforslag fra UiO|UiOs løsningsforslag|fasit fra UiO|autentiske eksamensoppgaver|hentet fra eksamenssettet|gjengitt fra sensorveiledningen|de faktiske flervalgsspørsmålene|kvalitativ metode er bedre|kvalitativ forskning er bedre|mer vitenskapelig enn kvantitativ|narkoman|fremmedkulturell|snikislamisering|andregenerasjons innvandrer|naturfolk|primitive samfunn|underutviklede land|\bs\. ?\d+
```

```bash
python3 scripts/hoyskolebok/sjekk-bok.py svmet1010 "Prioritet: perfekt|Sist du var her|som du sikkert husker|du har jo allerede sett|en A-besvarelse ville|ville ha drøftet|en toppbesvarelse ville|studentbesvarelse|offisiell fasit|offisielle fasiter|offisielle løsningsforslag|løsningsforslag fra UiO|UiOs løsningsforslag|fasit fra UiO|autentiske eksamensoppgaver|hentet fra eksamenssettet|gjengitt fra sensorveiledningen|de faktiske flervalgsspørsmålene|kvalitativ metode er bedre|kvalitativ forskning er bedre|mer vitenskapelig enn kvantitativ|narkoman|fremmedkulturell|snikislamisering|andregenerasjons innvandrer|naturfolk|primitive samfunn|underutviklede land|\bs\. ?\d+"
```

Begrunnelse per term: `Prioritet: perfekt` er plattformforbud (karakter-realisme,
§11) · `Sist du var her` / `som du sikkert husker` / `du har jo allerede sett`
peker feil vei — blokka oppsummerer et ANNET kapittel (§5.1) · meta-fasit-
uttrykkene er forbudt fordi drøftelsen skal skrives ut (§10.2) ·
«studentbesvarelse» er usant (alle modellbesvarelser er nyskrevne — bruk «ikke en
ekte kandidatbesvarelse») · fasit- og løsningspåstandene er usanne (ingen finnes
i arkivet, §6.1) · rangeringene av kvalitativ over kvantitativ bryter §8 ·
«narkoman» og de øvrige betegnelsene er nedvurderende eller faglig utdaterte
(§9.4) · `s. 12`-mønsteret fanger sidetall, som ikke er attestert (§6.1).

**⚠ Kildenote-malen (§6.1) er testet mot denne regexen og gir null treff.** Endrer
du malen, kjør testen på nytt:

```bash
python3 - <<'EOF'
import re
RX = r"Prioritet: perfekt|Sist du var her|som du sikkert husker|du har jo allerede sett|en A-besvarelse ville|ville ha drøftet|en toppbesvarelse ville|studentbesvarelse|offisiell fasit|offisielle fasiter|offisielle løsningsforslag|løsningsforslag fra UiO|UiOs løsningsforslag|fasit fra UiO|autentiske eksamensoppgaver|hentet fra eksamenssettet|gjengitt fra sensorveiledningen|de faktiske flervalgsspørsmålene|kvalitativ metode er bedre|kvalitativ forskning er bedre|mer vitenskapelig enn kvantitativ|narkoman|fremmedkulturell|snikislamisering|andregenerasjons innvandrer|naturfolk|primitive samfunn|underutviklede land|\bs\. ?\d+"
MAL = open("docs/hoyskole-boker/svmet1010/BYGGEKONTRAKT.md", encoding="utf-8").read()
start = MAL.index("Boka er kalibrert mot hele SVMET1010-arkivet")
tekst = MAL[start:start+1800]
traff = re.findall(RX, tekst, re.I)
print("TREFF:", traff or "ingen — malen er lovlig")
EOF
```

**⚠ Fellen malen er kalibrert rundt:** fire agenter i søskenbøker skrev
«**offisielle løsningsforslag**» i kildenoten sin — riktig i sak, men blokkert av
porten. Malen sier derfor «**ingen fasit og ingen løsninger fra UiO**», som er
like sant og passerer. Skriv aldri om malen til den forbudte formen.

**Prosaregler** — ord som SKAL kunne stå, men bare i en ramme
(`sjekk-prosaregel.py`, ±200 tegn rundt treffet). Alle seks skal være grønne:

```bash
# 1. Sannferdighetsport: entall «sensorveiledningen» krever navngitt termin
python3 scripts/hoyskolebok/sjekk-prosaregel.py svmet1010 \
    "sensorveiledningen" "V2016|H2016|V2017|H2017|V2018|H2018|V2019|H2020|H2021|H2024|H2025"

# 2. NEVNERPORTEN: enhver «av N»-brøk må bruke en lovlig nevner fra §6.1
python3 scripts/hoyskolebok/sjekk-prosaregel.py svmet1010 \
    "\bav \d+ (sett|oppgavesett|eksamenssett|terminer|eksamensterminer|sensorveiledninger|veiledninger)" \
    "av 31 oppgavesett|av 28 terminer|av 11 sensorveiledninger|av 32 eksamensterminer|av 7 terminer"

# 3. Emneoppgave-porten: de fire emneoppgave-terminene er aldri oppgavesett
python3 scripts/hoyskolebok/sjekk-prosaregel.py svmet1010 \
    "H2018|V2019|H2020|H2021|2018–21|2018-21" \
    "emneoppgave|arbeidsform|ikke noe oppgavesett|uten oppgavesett|kun sensorveiledning|bare veiledning|mappe"

# 4. Kvantitativ-logikk-porten (§8): feilens ord kun i felle-ramme
python3 scripts/hoyskolebok/sjekk-prosaregel.py svmet1010 \
    "representativ|statistisk generalisering|utbredelse" \
    "kvantitativ|ikke|aldri|feil|felle|forveksl|overførbarhet|analytisk generalisering|survey|kan ikke|hører hjemme|myte|advar"

# 5. Kontrastporten: kvantitative naboemner rammes inn som kontrast
python3 scripts/hoyskolebok/sjekk-prosaregel.py svmet1010 \
    "psy1010|PSY1010" \
    "kontrast|kvantitativ|annet fag|andre krav|motsatt|til sammenligning"

# 6. Hedge-porten: «noen mener» kun der det finnes en reell uenighet
python3 scripts/hoyskolebok/sjekk-prosaregel.py svmet1010 \
    "noen mener|mange mener|det hevdes at" \
    "posisjon|omstridt|uenig|debatt|drøft|standpunkt|begge sider|dilemma"
```

Prosaregel 1, 2 og 3 er **sannferdighetsportene** og er de viktigste i denne
boka: entall «sensorveiledningen» er kun riktig om ÉN navngitt veiledning, en
brøk med ulovlig nevner er en oppdiktet frekvenspåstand, og en emneoppgave-termin
presentert som et oppgavesett gjør at leseren tror det finnes et sett som ikke
finnes.

Prosaregel 6 er **nøytralitetsportens motsatte side**: den fanger tilfeller der
et robust funn eller en etablert fagregel pakkes inn i «noen mener» (§9.1).

### 13.6 Påkrevd terminologi (skal FINNES)

«kvalitative data» / «kvantitative data» · «overførbarhet» · «analytisk
generalisering» · «validitet» / «reliabilitet» · «refleksivitet» / «transparens»
· «tykke beskrivelser» · «forskningsspørsmål» / «problemstilling» ·
«forskbarhet» · «hvorfor-dimensjon» / «hvordan-dimensjon» ·
«undersøkelsesenheter» · «strategisk utvalg» / «tilfeldig utvalg» · «ekstremt
utvalg» / «maksimal variasjon» / «homogent utvalg» / «snøballutvalg» /
«teoribasert utvalg» · «portvakt» · «metning» · «negative tilfeller» ·
«de sju designkomponentene» · «deltagende observasjon» · «deltakerroller» ·
«ikke-deltakende observatør» / «delvis deltakende» / «fullt deltakende» /
«ikke-observerende deltaker» · «go native» · «den intervenerende rollen» ·
«rolleskifte» · «nærhet» / «avstand» · «skjult» / «åpen observasjon» ·
«deep hanging out» · «autoetnografi» · «work-along» / «walk-along» ·
«multilokalt feltarbeid» · «kroppen som metoderedskap» · «feltnotat» ·
«deskriptive» / «teoretiske» / «metodiske notater» · «dybdeintervju» ·
«intervjuguide» · «pilotintervju» · «probe» · «markør» · «konstaterende» /
«konstruktive spørsmål» · «biografisk intervju» · «asymmetri forsker–informant»
· «å intervjue bekjente» · «fokusgruppe» · «moderator» · «gruppesammensetning» ·
«samkonstruksjon» · «webetnografi» · «offentlig» / «privat på nett» · «digitalt
personvern» · «forskningsetikk» · «NESH» · «informert samtykke» / «prosessuelt
samtykke» · «konfidensialitet» / «anonymisering» · «konsekvensvurdering» ·
«meldeplikt» · «sårbare grupper» · «koding» / «kategorisering» /
«kontekstualisering» · «tentative svar» · «begrepsutvikling» · «analytisk
induksjon» · «temasentrert tilnærming» · «tematisk analyse» · «grounded theory»
· «fortellingsanalyse» / «beretningsanalyse» · «etnometodologi» ·
«første-/andre-/tredjegrads fortolkning» · «levning» / «kilde» / «spor» /
«beretning» · «kildekritikk» · «diskursanalyse» / «kritisk diskursanalyse» ·
«positivisme» / «hermeneutikk» / «konstruktivisme» · «fagfellekontroll» ·
«henvisningsskikk» · «begrunnelse, ikke deskripsjon» · «definisjon uten avsender
er C-stoff».

---

## 14. Kryssbok-lenker (verifisert 2. august 2026 — alle målfilene finnes i `src/lib/data/chapters/` OG er registrert i kursmetadataen)

SVMET1010 er den første rene kvalitativ-metode-boka på universitetsnivå i
systemet. Bruk NØYAKTIG disse titlene og stiene:

| Kapittel | Lenke |
|---|---|
| 0.2 | `[Langsvarhåndverket — redegjør, drøft og bær paradokset](/sos1004/sos1004-0-2)`, `[Langsvarhåndverket: drøfting, komparasjon og tre kilder](/sosant1000/sosant1000-0-3)` (begge valgfrie — beslektet drøftingshåndverk i andre fag; presiser at kravene der er de fagenes egne, ikke SVMET1010s seks vektingsregler) |
| 1.1 | `[Kvalitative metoder](/sosiologi/sosiologi-6-1)`, `[Kvantitative metoder](/sosiologi/sosiologi-6-2)`, `[Kvalitativ og kvantitativ metode — kvalitative forskningsspørsmål](/psy1010/psy1010-6-1)`, `[Sosiologisk metode — design, survey og felteksperiment](/sos1004/sos1004-1-2)` |
| 1.2 | `[Reliabilitet og testvaliditet](/psy1010/psy1010-1-3)` (KONTRAST, §8), `[Metode — kvalitativ/kvantitativ, induktiv/deduktiv og GIS](/sgo1001/sgo1001-2-3)` |
| 2.2 | `[Utvalg og rekruttering](/psy1010/psy1010-1-4)` (KONTRAST, §8) |
| 2.3 | `[Å gjennomføre et sosiologisk prosjekt](/sosiologi/sosiologi-6-5)` |
| 3.1 | `[Feltarbeid og etnografisk metode](/sosant1000/sosant1000-1-4)` |
| 3.2 | `[Feltarbeid og etnografisk metode](/sosant1000/sosant1000-1-4)` |
| 4.1 | `[Det kvalitative forskningsintervjuet](/psy1010/psy1010-6-2)` |
| 6.1 | `[Forskningsetikk](/psy1010/psy1010-7-1)`, `[Forskningsetikk](/sosiologi/sosiologi-6-3)` |
| 8.1 | `[Kildekritikk og mediekritikk](/sosiologi/sosiologi-6-4)` |
| 8.2 | `[Idiografisk og nomotetisk — fagets vitenskapsteori](/sgo1001/sgo1001-2-1)`, `[Vitenskap og pseudovitenskap — Lakatos, Galileo og Jaggar](/exphil03/exphil03-1-5)`, `[Kultur, representasjon og diskurs](/sgo1001/sgo1001-7-2)` |

Kryssbok-lenkene til `sosiologi` rammes ALLTID inn som «repetisjon fra
videregående — dekker grunnideen, men SVMET1010 krever pensumforankret
begrepspresisjon med navngitt avsender i tillegg». En VGS-lenke skal aldri
fremstå som pensum i emnet.

Lenkene til `psy1010` rammes ALLTID inn som **kontrast**, aldri som forkunnskap
(§8): PSY1010 måler psykometrisk validitet og begrunner utvalget statistisk —
SVMET1010 måler overførbarhet og begrunner utvalget strategisk. Prosaregel 5
i §13.5 håndhever dette.

Lenkene til `sos1004`, `sosant1000`, `sgo1001` og `exphil03` rammes inn som
«beslektet fag, andre krav».

**Ingen andre kryssbok-lenker.** Vil du legge til en lenke som ikke står i
tabellen, kjør `ls src/lib/data/chapters/<id>.json` **og** grep etter id-en i
`src/lib/data/textbook-courses*.ts` først — `sjekk-bok.py` avviser døde lenker, og
en død lenke i en live bok er en synlig feil for leseren.

**⚠ Eksplisitt FORBUDTE lenkemål (skjelett finnes, men ingen kapittelfiler på
disk per 2. august 2026):** `sos1120`, `sos2200`, `sos2500`, `sosant1090`,
`sosant1200`, `sosant1400`, `psy1000`, `psy2013`, `psyc1201`, `stv1020`,
`sgo2100`, `fil1003`, `kulkom1001`. Flere av disse er fristende naboer — **ikke
lenk dit**. En lenke til en bok som ikke er wiret gir 404 for leseren og feller
kvalitetsporten.

Interne lenker skrives som `[kap. 3.1](/svmet1010/svmet1010-3-1)` og skal kun
peke på kapitler som allerede er bygget når boka gates. Bygg i skjelettets
rekkefølge (§6 i skjelettet): Del 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 →
prøver. Merk at **1.1 må stå ferdig FØR alt annet** (alle temadeler har den som
forkunnskap), **3.1 FØR Del 5 og 6.2**, **4.1 FØR Del 7**, og **hele Del 1–8 FØR
Del 9**.

---

## 15. Tekniske feller (les før første `json.dump`)

1. **JSON-gyldighet.** Bruk `json.dump`. Faget er fullt av anførselstegn og
   engelske termer i anførselstegn — én uescapet anførsel blokkerer hele prebuild
   for hele plattformen.
2. **Hardt linjebrutt prosa er FORBUDT.** Rendreren gjør hvert enkelt `\n` om til
   `<br />`. Ett avsnitt = én lang linje; `\n\n` mellom avsnitt; enkelt `\n` kun
   der linjeskiftet er ønsket. Gjelder `content`, `problem`, `solution`, `task` og
   `hints`. Ikke bruk trippelfnutt-strenger med innrykk eller `textwrap` på
   brødtekst.
3. **Bart `$` er forbudt** — skriv `\\$`. Oddetall `$` i samme tekstfelt =
   avkuttet tekst = rå kildekode synlig for leseren. Boka har ingen LaTeX i det
   hele tatt (§13.1).
4. **`chapterNumber` alltid del-basert** («3.1»), aldri lineær («14»).
   Prøvekapitler: «3.P».
5. **`difficulty` er `lett` | `middels` | `vanskelig`** — aldri `medium`/`hard`
   (§4).
6. **Ingen tom `collapsible`.** Feltet heter `content` og skal inneholde blokker.
   En `text`-nøkkel eller `[]` rendrer som en tom boks.
7. **Unike blokk-id-er** innen kapitlet.
8. **Flashcards kommer KUN fra toppnivå `definition` med `title`.** Flytter du en
   definisjon inn i en `collapsible` for å «rydde», forsvinner kortet fra kvoten.
9. **`(verifiser)`-markører** skrives i den literale formen `(verifiser)` (§7.4)
   og løses i fase 6 FØR `sjekk-bok.py` kjøres siste gang.
10. **Ingen `subTasks`, `answer`, `solutionVideo`, `allowsUpload`,
    `allowsCanvasDrawing`** i `exercise`.
11. **Quiz-forklaringer refererer aldri til alternativets plassering** — runtime
    stokker (§12.1).
12. **Ikke bruk `grep -o` med `.{0,N}`-kontekst** mot kapittelfilene: de er kompakt
    JSON på én linje, og mønsteret er kvadratisk (17 GB RAM på byggemaskinen
    25. juli 2026). Bruk `sjekk-prosaregel.py`, som leser JSON-strukturen.
13. **Ikke skriv «Løkke N» i overskrifter eller prosa** (§1). «Løkke» er ikke et
    fagord i dette faget, så all bruk er byggespråk.

---

## 16. Opphavsrett (ufravikelig)

ALLE oppgaver, caser, vedleggsutdrag, «intervjusitater», flervalgsspørsmål,
modellsvar og eksempler er **NYSKREVNE** — eksamenssjangrene er malen, ALDRI
originaloppgavene. Ingen formuleringer fra UiO-settene eller fra de elleve
sensorveiledningene gjengis ordrett, heller ikke i omskrevet-nær form.

**Arkivets case-tekster gjengis aldri:** tiggerne i Oslo, russesitatene fra Fjær
m.fl., Ugelvik-utdragene, sexkunde-intervjuet, Skilbrei-materialet,
NRK-artiklene, Øygarden-utdraget og Broch-utdraget omtales som pensumstudier
(§7.2) og reproduseres ikke. Nyskrevne case skal heller ikke låne en
pensumforfatters eget eksempel — er en syklubb, en matsentral eller en gamingklan
brukt i skjelettets case-forslag, er det fordi den IKKE finnes i arkivet.

Pensumlitteraturen **refereres og parafraseres** — aldri siteres i lengde, aldri
med sidetall. De etablerte begrepene er faglig allmenneie og forklares under sine
egne navn.

**Tillatte forfattere/verk er uttømmende gitt av §7.3.** Navn utenfor den lista
skal ikke innføres som pensumankere. **Ingen oppdiktede referanser, verk,
forskere, årstall eller tall.**

Boka fremstiller seg ALDRI som offisiell, godkjent eller UiO-tilknyttet, og lover
ALDRI et eksamensutfall. (Uavhengighetsdeklarasjonen vises automatisk av
plattformen for `level: 'Høyskole'` — se README «Juridiske deklarasjoner».)

---

## 17. Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json; json.load(open('…'))"` på HVER fil du har skrevet.
2. **Kvotetelling** mot tabellen i §12 (toppnivå `definition`-blokker med `title`
   + antall quiz-spørsmål) — minimum, aldri under.
3. **Forbudt-termer-grep = 0** (regexen i §13.5), og alle seks prosareglene
   grønne. Kildenote-testen i §13.5 kjørt hvis malen er endret.
4. **Kryssbok- og internlenker** peker på eksisterende, registrerte filer (§14);
   ingen lenker til de forbudte målene.
5. **Læringsløkke:** `content[]` veksler teori → eksempel → oppgave i løkker med
   `exercise`-blokker INLINE. Unntak: prøve-, sjanger-, modellbesvarelses- og
   øvingseksamenkapitler. Byggespråk-grepet fra §1 gir null treff.
6. **Forkunnskapsdekning:** gå gjennom HVER `exercise` og bekreft at den kun
   hviler på stoff introdusert tidligere i kapitlet eller i en referert
   forkunnskap — ingen usett begrep, forfatter, studie eller analysefase.
7. **Oppfrisket forkunnskap:** kapitlene i tabellen i §5.1 har 2–3
   kjernepåstander VIST, ikke bare lenket; **grep for «Sist du var her» = 0**.
8. **Eksempellager + oppgaveantall:** HVERT temakapittel (Del 1–8) har
   `collapsible` «Eksempellager for kapitlet» etter malen i §7.2, og **4–8
   `exercise`-blokker inline**. Tell dem.
9. **`difficulty`** er `lett`/`middels`/`vanskelig` i alle `exercise` — grep for
   `"difficulty": "medium"` og `"difficulty": "hard"` gir null.
10. **Nybegynner-inngang:** alle sjangerkoder (T1–T8), feilkoder (#1–#16) og
    karakterbokstaver forklart ved første bruk PER KAPITTEL; ingen kald kode i
    `competenceGoals` eller i første tekstboks; Del 0 har «Slik leser du denne
    boka»-boksen (type `text`/`tip`, ALDRI `definition`) og hele Del 0-pakken
    (§11.1).
11. **Eksamenskontrakten:** hver `example.solution`, hver `exercise.solution` og
    hver prøvefasit viser den strukturen sjangeren krever (§6.4), og
    drøftingsfasiter har må-punkter / pluss-punkter / feller + tre-nivå-
    momentliste. En T2-fasit uten begrunnelser er en byggefeil (#3).
12. **Begrunnelsesregelen (§7.1):** ingen metodevalg står ubegrunnet i noe
    eksempel, modellsvar eller fasit.
13. **Feiltilskrivninger (§7.3):** ingen av glidningene i tabellen forekommer;
    distinksjonene (probe/markør, overførbarhet/generalisering, levning/beretning,
    fokusgruppe/gruppeintervju, strategisk/tilfeldig utvalg,
    konstaterende/konstruktive spørsmål) er utskrevet der begrepene innføres.
14. **Kvantitativ-logikk-porten (§8):** prosaregel 4 grønn; ingen kvalitativt funn
    beskrevet som representativt; alle `psy1010`-lenker rammet inn som kontrast.
15. **Kildepåstander (§6.1/§6.2):** hver «N av M» finnes i §6.2 og bruker en
    lovlig nevner; ingen påstand om fasit eller løsninger; emneoppgave-terminene
    er aldri talt inn i en brøk; entall «sensorveiledningen» har alltid en
    navngitt termin; H2017- og V2018-settene er merket etter korreksjonstabellen.
16. **Politisk og metodisk nøytralitet (§9):** omstridte spørsmål har minst to
    posisjoner med sin sterkeste begrunnelse; dokumenterte funn og fagregler er
    presentert som funn, ikke pakket inn i «noen mener»; ingen appeller i bokas
    egen stemme; ingen forbudte betegnelser (§9.4); minst ett vippe-case merket
    «(omstridt — begge landinger forsvarlige)».
17. **Modellbesvarelser:** ærlig merket som nyskrevne; C er en C; midtnivå-B
    finnes i 9.7; 9.7 er en bredde-A og 9.8 en dybde-A med margnotat om at begge
    profiler er A-verdige; 9.9 konkluderer skarpt; meta-fasit-grep = 0.
18. **Prøve-flervalg:** fasitmønsteret varierer (aldri «alle a», aldri «alle
    felle»); prøve-tipen sier hvor flervalget bor; selvdiagnose (☐) etter hver
    fasit; ja/nei-lister av selvstendige påstander bruker romertall (§5.5).
19. **hints** utfylt på alle `exercise` unntatt den merkede kalde banken i 9.6;
    første hint røper aldri konklusjonen.
20. **Quiz:** `options[0]` alltid riktig; nøyaktig 4 alternativer; ingen
    posisjonsreferanser i `explanation`; **ingen lengde-tell**.
21. **Øktmerking:** alle kapitler > 45 min har løkke-tidsanslag eller
    pausepunkter; prøvekapitlene deklarerer «4 prøver à ~20–40 min» + deling over
    flere kvelder; `9-prove` sier at hvert sett kan deles over to økter, men at
    ekte eksamen er sammenhengende.
22. **Feilkode-gloss** ved første bruk per kapittel; ingen kode #17.
23. **Ingen tom `collapsible`**; ingen duplikate blokk-id-er; kap-referanser i
    fasiter og forkunnskaper er markdown-lenker; ingen hardt linjebrutt prosa.
24. **Juridiske deklarasjoner:** innholdet fremstiller seg ALDRI som offisielt
    eller UiO-tilknyttet, lover aldri eksamensutfall, og all omtale av
    kildegrunnlaget følger §6.1 ordrett i sak.
25. **Porter grønne før ferdigmelding:**

```bash
python3 scripts/hoyskolebok/status-bok.py svmet1010
python3 scripts/hoyskolebok/sjekk-latex.py svmet1010
python3 scripts/hoyskolebok/sjekk-fasitfordeling.py svmet1010
python3 scripts/hoyskolebok/sjekk-alternativref.py svmet1010
python3 scripts/hoyskolebok/sjekk-statiskflervalg.py svmet1010
python3 scripts/hoyskolebok/sjekk-bok.py svmet1010 "<forbudt-regex fra §13.5>"
python3 scripts/hoyskolebok/sjekk-prosaregel.py svmet1010 "sensorveiledningen" "V2016|H2016|V2017|H2017|V2018|H2018|V2019|H2020|H2021|H2024|H2025"
python3 scripts/hoyskolebok/sjekk-prosaregel.py svmet1010 "\bav \d+ (sett|oppgavesett|eksamenssett|terminer|eksamensterminer|sensorveiledninger|veiledninger)" "av 31 oppgavesett|av 28 terminer|av 11 sensorveiledninger|av 32 eksamensterminer|av 7 terminer"
node scripts/hoyskolebok/quiz-lengdesjekk.mjs
npm run build
```
