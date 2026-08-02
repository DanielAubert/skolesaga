# Byggekontrakt: JFEXFAC04 Examen facultatum, rettsvitenskapelig variant (UiO) — teknisk kontrakt for kapittelforfattere

Gjelder ALLE forfatter-agenter som bygger kapitler til `jfexfac04`. Faglig
innhold styres av `SKJELETT.md` (Talldisiplin-seksjonen + identitetsseksjonen
§1–§2 + per-kapittel-kontraktene i §3) — les ditt kapittels avsnitt ORDRETT, og
`EKSAMENSANALYSE.md` ved behov. Denne kontrakten definerer format, sjangerkrav,
kildepåstander, tall og kvalitetsporter. **Ved faglig konflikt vinner
SKJELETT.md; ved format-, sjanger-, tall- eller kildepåstandskonflikt vinner
denne kontrakten.** Instansiert fra `../BYGGEKONTRAKT-MAL.md`.

⚠ **Ett unntak fra «skjelettet vinner faglig»: frekvenstallene.** Skjelettets
Talldisiplin-seksjon er etterprøvd og holder — men **tre av skjelettets
avledede tall gjør det ikke** (vektingen, trekløveret og «de siste 8»).
**§6.2 i denne kontrakten er den ENESTE lovlige kilden til «N av M»-påstander i
boka.** Sprikene står der, kapittel for kapittel, med begrunnelse, så ingen
«retter» dem tilbake.

**Emnets navn.** Emnet heter **JFEXFAC04 Examen facultatum, rettsvitenskapelig
variant** og undervises ved Det juridiske fakultet, Universitetet i Oslo.
Emnekoden `JFEXFAC04` skrives alltid ut — den er bokas viktigste søkeord. Emnet
ligger i **3. semester** av det femårige rettsvitenskapsprogrammet, er
**obligatorisk for hvert kull**, og undervises høsten 2026 (verifisert mot UiOs
programside, dokumentert i `../UIO-HOST-2026-PRIORITERING.md`). Leseren er
altså jusstudent i sitt andre studieår, men **helt fersk i rettsfilosofi og
språkteori** — boka skal kunne leses uten et eneste filosofiemne bak seg.

**Arketype: drøfting** (`../DNA-drofting.md`), med **ett dokumentert lån fra
`../DNA-jus.md`**: normkartet i kap. 7.2 (§7.2 her). Begrunnelsen står i
skjelettets §1 og gjentas her fordi den styrer hva som IKKE skal bygges:
JFEXFAC04 er et **rent teoriemne**. Det finnes ingen praktikum, ingen
typetilfeller og ingen faktumanalyse i noen av de 40 terminene. Ren jus-arketype
ville trent en sjanger som ikke finnes.

**Nærmeste bygde søskenbok: `exphil03`** (34 kapitler, live). Samme emnetype
(obligatorisk innføringsemne, hele kullet), samme arketype, samme todeling
kunnskapsspørsmål + drøftingsspørsmål, og samme problem med utgått pensum som
forurenser de eldre settene. Kopier arbeidsmåte og formkrav derfra — **aldri
faglig innhold**. Andre bygde naboer: `fil1001` (metafysikk/bevissthetsfilosofi,
samme drøftingsformer), `jus1111` (samme fakultet, motsatt arketype — brukes som
KONTRAST, se §14).

**Fire forskjeller fra EXPHIL03 som endrer byggingen:**

1. **Kildesituasjonen er rikere og farligere.** EXPHIL03 har 40 oppgavesett;
   JFEXFAC04 har 40 dokumenterte terminer, 43 oppgavesett-filer og 37
   sensorveiledninger — men **null løsningsforslag**. Rikdommen frister til
   «gjennomgående» og «i de fleste settene». §6.1 fastsetter nevnerne, §6.2
   teller dem per kapittel, og to prosaregel-porter håndhever dem (§13.5).
2. **Tre store pensumområder er utgått** og skal ikke bære kapitler
   (profesjonsetikk, polysentri/internasjonalisering, Sands legitimitets- og
   systemteoristoff). Kalibreringsregelen i §7.4 er like bindende som
   EXPHIL03s «Vite, være, gjøre»-regel.
3. **Emnet har tre konkurrerende begrepsapparater samtidig** (Eng, Kolflaath,
   Høgberg) og sensorveiledningene sier uttrykkelig at kandidaten står fritt til
   å velge. Boka skal derfor **anbefale ett arbeidsspråk og navngi de to andre**
   — aldri late som det finnes én riktig terminologi (§7.3).
4. **Boka er symbolfri.** Ingen matematikk, ingen `$…$` (§13.1). Kravet om
   «Symbol- og formelliste» er ikke relevant (README-unntaket for symbolfrie
   fag) — hvert temakapittel har `collapsible` **«Pensumkart for kapitlet»** i
   stedet.

---

## 1. LÆRINGSLØKKE-KONTRAKT (ufravikelig byggekrav — produkteier 9. juli 2026)

Fra skjelettets topp, tatt inn her som bindende byggekrav:

- HVERT kapittels `content[]` struktureres som gjentatte SMÅ løkker
  **Teori → Eksempel → Oppgave**, én løkke per begrep/teoribit:
  1. begrepet med navngitt avsender (`definition`, evt. + `text` om posisjoner
     og drøftingsaksen), →
  2. `example` som viser begrepet BRUKT — skrevet slik en god redegjørelse
     eller drøfting ville skrevet det, med klassifiseringen BEGRUNNET i teorien
     og ikke i intuisjonen, →
  3. `exercise` INLINE i `content[]` rett etter eksempelet (plattformen
     renderer inline oppgaver), →
  4. neste begrep.
- **ALDRI** all teori øverst med oppgavene samlet nederst, og aldri alle
  definisjonene i én bolk fulgt av alle eksemplene. Grupper til meningsfulle
  biter — ikke én oppgave per setning.
- **Ingen usett forkunnskap:** ingen oppgave får kreve et begrep, en tenker, en
  normtype eller en sjangerregel som ikke er introdusert tidligere i SAMME
  kapittel (t.o.m. eksempelet rett foran) eller i et tidligere kapittel referert
  i Forkunnskaper-blokka. Flytt teoribiten tidligere ved behov. Særlig utsatt
  her: **ingen oppgave i Del 2, 5 eller 6 får kreve normtyper fra Del 1** uten
  at Del 1-kapitlet står i forkunnskapene.
- **Unntak:** prøvekapitlene, sjangerkapitlene (7.1–7.5), modellbesvarelsene
  (7.6–7.8) og øvingseksamenene (`jfexfac04-7-prove`) følger sin egen arketype —
  komplett oppgave/sett først, løsning i `collapsible`.
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer
  REKKEFØLGEN.

⚠ **Underoverskrifter er ALDRI byggespråk.** «Løkke», «Bolk», «Blokk», «Runde»,
«Sekvens», «Modul», «Iterasjon» er byggeplanens ord, ikke leserens. Overskriften
skal si hva avsnittet handler om, pluss tidsanslaget:

```
✗ ## Løkke 3 — Kompetansekriteriene (~15 min)
✓ ## Kompetansekriteriene (~15 min)
```

Vis til tidligere avsnitt ved NAVN, aldri ved nummer («da vi gikk gjennom
kompetansekriteriene», ikke «i løkke 2»). «Løkke» er ikke et fagord i dette
faget, så **all** bruk er byggespråk. Kjør denne før ferdigmelding og forvent
null treff:

```bash
grep -rnE '#{2,4}[[:space:]]*Løkke|[Ll]økke[[:space:]]+[0-9A-ZÆØÅ]|\| Løkke \|' \
  src/lib/data/chapters/jfexfac04-*.json
```

---

## 2. Filplassering og filantall

Ett JSON-dokument per kapittel: `src/lib/data/chapters/jfexfac04-<del>-<nr>.json`
(prøvekapitler: `jfexfac04-<del>-prove.json`). Quiz til
`src/lib/data/quiz-staging/jfexfac04-<del>-<nr>.quiz.json`.

IKKE rør `_registry.json`, `_all.json`, `textbook-courses*.ts`, `quiz-data*.ts`
eller `institusjoner.ts` — wiring gjøres sentralt med
`scripts/hoyskolebok/wire-bok.py jfexfac04` (fase 5). Generer ALLTID JSON via
python `json.dump`: faget er fullt av anførselstegn («go native» finnes ikke her,
men «norm», «gyldighet», «diskuter», «de lege lata» og alle sitatlignende
oppgaveformuleringer settes i anførselstegn) — én uescapet anførsel har tidligere
blokkert hele plattformens prebuild.

**41 filer totalt:** 34 innholdskapitler (skjelettets §3) + 7 prøvekapitler
(`jfexfac04-1-prove` … `jfexfac04-7-prove`). Wiringen genererer prøvekapitlenes
metadata selv fra `BOKCONFIG.json` (`prøvedeler`) — filene må finnes, men skal
ikke listes i skjelettets §3.

### 2.1 Skjelettet ER i v3-format (verifisert 3. august 2026)

`wire-bok.py` parser skjelettet med `^#### Kapittel (\d+\.\d+):\s*(.+)$` og
`\*\*id:\*\* \`(jfexfac04-\d+-\d+)\``. Testet mot `SKJELETT.md`:
**34 av 34 kapitler parses**, alle med id, `estimatedMinutes`, `prerequisites` i
backticks og en `- **Description:**`-linje som ikke blør inn i belegg-blokka.
Ingen v3-konvertering er nødvendig — i motsetning til SVMET1010, som lå i den
eldre formen og ga 0 treff. **Endrer du skjelettet, kjør parse-testen på nytt
før fase 5.**

Tre detaljer må overleve enhver senere redigering av skjelettet:

1. **`prerequisites` MÅ stå i backticks.** «ingen» skrives uten (gjelder kun
   kap. 0.1).
2. **Tom linje etter `- **Description:**`-blokka.** Uten den blør beskrivelsen
   inn i `**Eksamensbelegg:**` — samme mekanisme som ga 53 avkuttede
   kursbeskrivelser i tidligere bøker.
3. **Kapittel-JSONs eget `description` overstyrer skjelettet** (parseren
   foretrekker kapittelfila). Fyll det derfor alltid ut **ordrett likt** begge
   steder.

### 2.2 ⚠ Hullet skjelettet etterlater: de tre øvingseksamenene

Skjelettets §4 krever tre komplette øvingseksamener, men §3 gir dem ingen
kapittel-id, og kvotesammendraget fører Del 7 med «0 prøver (dekkes av
øvingseksamenene)». **Denne kontrakten plasserer dem i
`jfexfac04-7-prove`** (`chapterNumber` `7.P`), etter mønster fra
`svmet1010-9-prove` og `sosant1000-9-prove`. `BOKCONFIG.json` fører derfor Del 7
i `prøvedeler`. Del 1–6 har fire temadelprøver hver (24 prøver); Del 7 har de
tre øvingseksamenene. **Del 0 har ingen prøve** — håndverkskapitlene 0.1/0.2 og
sjangerkapitlene 7.1–7.5 dekker det.

### 2.3 ⚠ Sannferdighetskrav ved wiring (fase 5)

`wire-bok.py` skriver automatisk denne beskrivelsen for et prøvekapittel:

> «Fire prøver som dekker del N (…) på eksamensnivå, med fulle
> **løsningsforslag**.»

Ordet «løsningsforslag» kan leses som om det finnes offisielle løsninger fra
UiO. **Det gjør det ikke** (§6.1), og formuleringen felles dessuten av
prosaregel 3 i §13.5. Fase 5 SKAL formulere om:

| kapittel | tittel etter wiring | beskrivelse etter wiring |
|---|---|---|
| `jfexfac04-1-prove` … `jfexfac04-6-prove` | «Prøver til del N: \<deltittel\>» (auto er riktig) | «Fire prøver som dekker del N (…) på eksamensnivå, med fulle momentliste-fasiter, skrevet av oss.» |
| `jfexfac04-7-prove` | **«Øvingseksamener — tre komplette sett i eksamensform»** | «Tre komplette øvingseksamener i gjeldende eksamensform, med momentliste-fasiter skrevet av oss.» |

---

## 3. Kapittel-JSON (toppnivå)

```json
{
  "id": "jfexfac04-1-3",
  "courseId": "jfexfac04",
  "chapterNumber": "1.3",
  "title": "…(fra skjelettet, ordrett)…",
  "description": "…(fra skjelettet, ordrett)…",
  "estimatedMinutes": 70,
  "competenceGoals": ["kunne skille de tre kompetansekriteriene fra hverandre og peke dem ut i en konkret bestemmelse", "…"],
  "content": [ "…blokker…" ],
  "exercises": []
}
```

- **`chapterNumber` er ALLTID del-basert** (`<del>.<nr>`: `0.1`, `1.3`, `7.8`) —
  **ALDRI lineær** («14»). Prøvekapitler: `<del>.P`. Dette er enkeltfeilen som
  ødelegger navigasjonen i en hel bok (PRODUKSJONSLØYPE-lærdommen fra JUS1111).
- `title` og `description` tas **ordrett** fra skjelettet.
- `competenceGoals`: 2–4 «kunne …»-formuleringer destillert fra kapitlets
  begrepskontrakt. Dette er **Skolesagas EGNE** mål — ALDRI kopi av UiOs
  offisielle læringsutbyttebeskrivelser. UI-et deklarerer kilden automatisk.
- **Ingen kald kode i `competenceGoals`** — ikke «RED», ikke «LOV», ikke «#8»,
  ikke «A-markør» eller «C-stoff» uten forklaring.

### 3.1 `description`, `title` og navigasjonsfelt er REN TEKST (UFRAVIKELIG)

`title`, `description`, `topics`/`sectionNames` og `competenceGoals` rendres
**RÅTT**. `description` havner uendret i `<meta name="description">`,
`og:description` og `twitter:description` — altså i **Google-treffet og i
lenkeforhåndsvisningen** — og i den synlige kroppen på kapittelsiden. Markdown
rendres aldri der. 122 kapitler i 17 bøker viste `$…$` og `**fet**` i Google før
dette ble oppdaget.

```
✗ Definisjonsmåtene i **tre** pensumtradisjoner, og hva som kreves av et godt `definiens`.
✓ Definisjonsmåtene i tre pensumtradisjoner, og hva som kreves av et godt definiens.
```

Ingen `$…$`, ingen `**fet**`, ingen `*kursiv*`, ingen backticks, ingen
markdown-lenker i disse feltene. Verktitler skrives med «anførselstegn», aldri
kursiv. Markdown og LaTeX-fri prosa hører kun hjemme i
`content`/`problem`/`solution`/`task`/`hints`-feltene.

⚠ **Metadataen må holdes i synk for seg.** `description` i
`textbook-courses*.ts` skrives fra skjelettet, mens kapittelfila er autoritativ
(§2.1 pkt. 3). Retter du bare det ene stedet, står det andre igjen — `econ1100-3-1`
hadde to helt forskjellige setninger. `sjekk-bok.py` blokkerer på markdown i
`description`.

Skjelettets descriptions er kontrollert mot denne regelen: **ingen av de 34
inneholder LaTeX, fet skrift eller backticks.** Fire av dem inneholder en
tankestrek (`—`), som er ren tekst og helt lovlig — det er bare
`BOKCONFIG.json`-beskrivelsen som har et hardt tankestrek-krav (§17).

---

## 4. Blokktyper (eksakte felt — strukturreferanse: `src/lib/data/chapters/exphil03-3-3.json`)

- `text`: `{id, type: "text", content}` — markdown-prosa.
- `definition`: `{id, type: "definition", title, content}` — **`title`
  OBLIGATORISK**. Flashcards genereres KUN fra **toppnivå** `definition`-blokker
  med `title` (en definisjon nøstet inne i en `collapsible` teller IKKE).
  I JFEXFAC04 er `title` en **kobling begrep ↔ avsender**: «Kvalifikasjonsnorm
  (Eng)», «Koblingsord (Ross)», «Retningslinje om vekt (Eng)», «Semantisk
  flertydighet (Kolflaath)», «Legaldefinisjon (Eng, Kolflaath)», «Formalkritikk
  (Eriksen)», «Rettsstatens verdigrunnlag (Mæhle og Aarli)», «Det kategoriske
  imperativ (Kant)». Åpne innholdet med forklaringen i ORD, lukk med
  **distinksjonen mot nabobegrepet** (pliktnorm mot kompetansenorm, vaghet mot
  flertydighet, kvalifikasjonsnorm mot legaldefinisjon, intern mot ekstern
  kritikk) og med det stedet i en lovtekst der begrepet gjør arbeid.
- `theorem`: `{id, type: "theorem", title, content}` — brukes **sparsomt**, til
  modeller som skal stå som én enhet: de fire pliktmodalitetene, de tre
  kompetansekriteriene, Hohfelds fire relasjonspar, de fire innvendingene mot
  utilitarismen, femtrinnsmetoden for lovtekstanalyse, de fem
  sammenligningsaksene. Ikke pynt — dette er ikke et regnefag.
- `example`: `{id, type: "example", title, problem, solution}` — `solution`
  skrives som en **god redegjørelses- eller drøftingsdel** (§6.5), aldri som
  referat, og har ALLTID klassifiseringen BEGRUNNET, ikke bare konstatert.
- `tip` / `warning`: `{id, type, title, content}`.
- `exercise`: `{id, type: "exercise", exercise: {id, number, type: "classic",
  difficulty: "lett"|"middels"|"vanskelig", task, solution, hints: []}}`.
  ⚠ **`difficulty` har nøyaktig tre lovlige verdier: `lett`, `middels`,
  `vanskelig`.** IKKE `medium`, IKKE `hard`, IKKE `easy` — det er plattformens
  engelske interne verdier, og fem kapitler i en søskenbok måtte rettes fordi en
  agent brukte dem. (EXPHIL03-kontrakten sier `"medium"` overalt; **den regelen
  gjelder IKKE her** — ikke kopier den.) Verdien skrives aldri inn i `task`.
  ALDRI `solutionVideo`, `allowsUpload`, `allowsCanvasDrawing`, `answer` eller
  `subTasks` (deloppgaver skrives inn i `task`/`solution`, se §11).
- `collapsible`: `{id, type: "collapsible", title, buttonText, content: [blokker]}`
  — feltnavnet er `content` og det skal inneholde BLOKKER. En `text`-nøkkel eller
  tom array rendrer som en tom boks og er en byggefeil.

Blokk-id-er: `<kapittel-id>-<løpenavn>` (f.eks.
`jfexfac04-1-3-def-kompetansekriterier`), unike i kapitlet. Duplikate blokk-id-er
felles av kvalitetsporten.

**Grep-sjekk før ferdigmelding:**

```bash
grep -l '"difficulty": *"\(medium\|hard\|easy\)"' src/lib/data/chapters/jfexfac04-*.json
# skal gi null treff
```

---

## 5. Obligatorisk kapittelstruktur

### 5.1 Alltid først, i denne rekkefølgen

1. `tip` **Eksamensvinkel** — frekvens, sjangre og typiske oppgaveformuleringer,
   med de EKSAKTE tallene fra **§6.2 i denne kontrakten** (ikke fra skjelettets
   belegg-linje der §6.2 avviker). **Forfatteren skal ALDRI finne på
   frekvenstall og aldri regne om dem** (§6.3).
2. `text` **Forkunnskaper** — kapitler i boka som markdown-lenker
   (`[kap. 1.1](/jfexfac04/jfexfac04-1-1)`) + eventuelle kryssbok-lenker fra
   tabellen i §14. «Dette kapitlet kan leses uten forkunnskaper» der skjelettet
   sier `prerequisites: ingen` (kun 0.1).

**Oppfrisket forkunnskap (bindende).** I kapitler med stor avstand til
forkunnskapen SKAL Forkunnskaper-blokka **VISE 2–3 kjernepåstander ferdig
oppfrisket**, ikke bare lenke:

> **Fra kap. 1.2:** en pliktnorm er regulativ — den regulerer en handling som
> finnes uavhengig av normen.
> **Fra kap. 1.3:** en kompetansenorm er konstitutiv — den skaper selv adgangen
> til å frembringe rettsvirkninger, og mangler du kompetansen, blir handlingen
> ugyldig, ikke rettsstridig.

⚠ **Frasen «Sist du var her» er FORBUDT** (grep-sjekkes, §13.5). Blokka
oppsummerer et ANNET kapittel — den kan ikke si «her», og en lærebok vet ikke
hva leseren har gjort. Mange lesere hopper rett til det kapitlet de er redde for
på eksamen. Overskriften skal være **`## Forkunnskaper`**, ikke «Forkunnskaper —
sist du var her» (246 kapitler i ni bøker hadde den formen, og første rydding
fant den ikke fordi den sto med liten forbokstav midt i en overskrift).

| ✗ | ✓ |
|---|---|
| Sist du var her sto dette … | Dette sto der … |
| Sist du var her (fra kap. 1.3): | Fra kap. 1.3: |
| Som du husker fra kap. 2.1 … | I kap. 2.1 står … |
| Da vi gikk gjennom dette sist … | I gjennomgangen i kap. 2.1 … |

Samme forbud rammer «som du sikkert husker», «du har jo allerede sett», «dette
kan du fra før» — alt som gjør en påstand om leseren i stedet for om stoffet.

**Kapitler der oppfrisket forkunnskap er OBLIGATORISK** (stor avstand til
forkunnskapen, utledet av skjelettets `prerequisites`):

| Kapittel | Hva som skal stå ferdig oppfrisket |
|---|---|
| 1.5 | fra 1.2: hva som gjør en pliktnorm regulativ, og at den anvendes alt eller intet |
| 1.6 | fra 1.4: koblingsordet som teknisk mellomledd mellom rettsfaktum og rettsvirkning |
| 2.1 | fra 0.2: skillet «redegjør» mot «diskuter» — hva et redegjørelsesspørsmål faktisk ber om |
| 2.4 | fra 1.4: hva en kvalifikasjonsnorm gjør; fra 2.3: skillet deskriptiv/normativ definisjon |
| 3.1 | fra 1.1: skillet mellom et utsagns saksinnhold og dets modalitet |
| 4.1 | fra 0.2: at «diskuter» betyr ta standpunkt |
| 5.1 | fra 4.1: hva kognitivisme og non-kognitivisme er, og hvorfor det avgjør hvilken kritikk som er mulig |
| 6.1 | fra 5.1: skillet intern/ekstern kritikk i én setning; fra 1.6: rettigheter som forankret i retten |
| 7.2 | fra 1.4 og 2.4: de to klassifiseringene leseren skal ha for hånden i normkartet |
| 7.6–7.8 | oppgavens sjangerkrav i tre punkter, hentet fra sitt sjangerkapittel |

### 5.2 Temakapittel (Del 1–6) — DNA-drøfting + skjelettets per-kapittel-DNA

Etter eksamensvinkel og forkunnskaper går kapitlet i LÆRINGSLØKKER (§1). Disse
blokkene skal finnes, fordelt i løkkene — ikke stablet:

- `text` **Temaet i fagets landskap** — hvilket problem temaet svarer på.
  Abstrakte kjernetemaer åpner med et **hverdagsanker FØR apparatet** (§11).
- `definition` **kjernebegreper** — flashcard-kilden, toppnivå med `title`, hvert
  begrep forankret i avsender fra skjelettets begrepskontrakt, og hvert med
  **distinksjonen mot nabobegrepet** utskrevet. Distinksjonene ER
  redegjørelseskravet (feil #6, #7).
- `text` **posisjoner og spenninger** — kapitlets drøftingsakser fra skjelettet,
  skrevet slik at leseren har råstoff til BEGGE sider.
- `example` **anvendelse** ×1–3 — case-forslagene fra skjelettet, nyskrevet, hver
  med eksplisitt **begrep + begrunnet klassifisering + drøfting**-kobling.
- **`exercise` ×4–8 INLINE — hardt minimum fire, hardt tak åtte.** Fordeling:
  minst én `lett` innstegsoppgave tidlig (ren gjengivelse med egne ord), 1–2
  redegjørelsesoppgaver i RED-format, 1–2 kortdrøftinger med disposisjonsforslag
  som løsning, og minst én eksamenslik oppgave med momentliste. Minst én oppgave
  per temadel har `difficulty: "vanskelig"`.
- `warning` **Typiske feil** — feilkodene fra skjelettets «Typiske feil»-linje,
  **glosset ved første bruk PER KAPITTEL**: «(feil #6 — å blande vaghet og
  flertydighet: å lete etter vage *formuleringer*, når det er *betydningen* som
  er vag)».
- `tip` **A-markør** — det grepet som løfter svaret fra god (C) til beste (A) i
  akkurat dette temaet. Obligatorisk i ALLE temakapitler; skal navngi kapitlets
  drøftingsakse eksplisitt.
- `collapsible` **Pensumkart for kapitlet** — markdown-tabell
  `| Avsender/verk | Begrep de «eier» | Distinksjonen | Hvor det brukes på eksamen |`.
  Erstatter «Symbol- og formelliste» (boka er symbolfri). Åpner med
  begrepsbank-notisen (§11). ⚠-merkede koblinger beholder forbeholdet (§7.3).
- `collapsible` **Repetisjon** — 4–6 korte spørsmål fra forkunnskapskapitlene.

### 5.3 Sjanger- og håndverkskapitler (0.2, 7.1–7.5)

1. `tip` Eksamensvinkel — sjangerens frekvens (tall fra §6.2).
2. `text` **Oppskrift** — trinnvis disponering med tidsbudsjett (§6.6).
3. `example` **gjennomskrevet besvarelse** med margkommentarer om hva som gir
   uttelling hvor. Margkommentarer skrives som egne linjer i `solution`:
   `> Margnotat: her begrunnes klassifiseringen i normteorien i stedet for i intuisjonen — det er dette skillet som løfter fra C.`
4. `exercise` ×3–6 nyskrevne oppgaver, løsning = **momentliste** strukturert som
   **må-punkter / pluss-punkter / feller**, aldri som sjekkliste. Antallet per
   sjangerkapittel er fastsatt i skjelettet: 7.1 fem oppgaver, 7.2 fire, 7.3
   fire, 7.4 fire (to per sjanger).
5. `warning` Typiske feil + `collapsible` med sjangerens sjekkliste (§6.4).

Kap. **0.2** skal i tillegg vise ÉN og samme korte oppgave («gjør rede for
skillet mellom vaghet og flertydighet») på **E-, C- og A-nivå** med
margkommentarer, og etablere bokas to mantraer (§6.7).

Kap. **7.5 (feilvaksinen)** har én seksjon per feil #1–#16, alle fire ledd:
(a) feilen slik veiledningen formulerer den, med hvilken termin den er hjemlet i,
(b) nyskrevet «slik ser den ut i en besvarelse»-utdrag, (c) samme passasje
omskrevet slik den skulle vært, (d) en varsellampe leseren kan kjenne igjen i
egen tekst. Deretter gjenkjenningsoppgaver («hvilken feil begår denne
kandidaten?») på tolv nyskrevne besvarelsesutdrag, med stokket fasit — aldri
samme feilkode som fasit to ganger på rad — der leseren skal identifisere feilen
og reparere tre av dem.

⚠ **Ærlighetsforbeholdet SKAL stå i 7.5s åpning og der registeret først
presenteres i Del 0:** ingen av de 37 sensorveiledningene er skrevet etter at
besvarelser er lest. Registeret er hva veiledningene sier skal trekke — ikke en
kartlegging av hva kandidater faktisk gjør.

Kap. **7.5** avslutter med bokas ene **kalde bank**: 8–10 nyskrevne
oppgaveformuleringer på tvers av sjangrene, UTEN `hints`, fasit = ren
momentliste, eksplisitt merket «Kald bank — ingen hint. Her er det å mobilisere
begreper, avsendere og begrunnelser selv som trenes.» Dette er eneste unntak fra
hint-kravet i §11.

### 5.4 Modellbesvarelseskapittel (7.6–7.8)

1. `text` med den nyskrevne oppgaven, formulert slik den ville stått i et sett,
   pluss ærlighetslinjen fra §10.1.
2. `collapsible` **A-besvarelse** — full, sammenhengende tekst med margnotater.
   «— naturlig pausepunkt —» mellom hovedseksjonene.
3. `collapsible` **Kommentert C-besvarelse** — samme oppgave, korrekt men flat,
   med notater om gapet opp til A rammet inn som **oppgraderingsmeny**.
4. **Kap. 7.8 skal i tillegg ha `collapsible` «Midtnivåbesvarelse (B)»** — se
   §10.3. Dette er et README-krav og gjelder minst ett sted i boka.
5. `tip` **Sensorblikket** — momentliste strukturert som må-punkter /
   pluss-punkter / feller, anvendt på akkurat denne oppgaven, med den eksplisitte
   setningen om hvorfor C-versjonen ikke ble B.
6. `warning` **Typiske feil** — feilene C-versjonen demonstrerer (angitt per
   kapittel i skjelettet: 7.6 → #4, #5, #14 · 7.7 → #1, #8, #3 · 7.8 → #1, #2,
   #3). Kravet om `warning`-blokk gjelder også disse kapitlene; tittelen
   «Modellbesvarelse» fritar dem IKKE i kvalitetsporten.

### 5.5 Prøvekapitler (`jfexfac04-<del>-prove`, del 1–6)

Id `jfexfac04-<del>-prove`, `chapterNumber` `<del>.P`, tittel «Prøver til del
<del>: <deltittel>».

Struktur: `tip` (dekning + «4 prøver à ~20–45 min» + «kan trygt deles over flere
kvelder — én prøve per økt» + hvor flervalget bor) + `text` Forkunnskaper + fire
`collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med nyskrevne
oppgaver og full fasit. **Prøvenes tema og oppgavetyper per del står i
skjelettets §4 «Temadelprøver» — følg dem punkt for punkt.**

**Fasitstruktur** (obligatorisk i hver prøvefasit):

> **Må-punkter** (uten disse når svaret ikke C-terskelen) · **Pluss-punkter**
> (det som løfter fra C til B/A — begrunnelsen, den utskrevne alternative
> lesningen, det egne eksempelet) · **Feller** (det veiledningene faktisk sier
> skal trekke, med feilkode).

Etter hver prøvefasit: **avkryssbar selvdiagnose-sjekkliste (☐)** — bruk
rubrikkene i §6.4. Kap-referanser i fasitene som markdown-lenker. **Ingen quiz
og ingen begrepsbank i prøvekapitler.**

⚠ **Ja/nei- og riktig/galt-lister:** `sjekk-statiskflervalg.py` leser `a) b) c)
d)` under et nummerert spørsmål som et flervalg. Er listen et sett med
SELVSTENDIGE påstander (ikke deloppgaver av én oppgave), bruk romertall
**(i), (ii), (iii)** — det er nummerering av påstander, ikke listemerking av
deloppgaver, og produkteierregelen om små bokstaver gjelder derfor ikke der.
Beholder du a)–e), sjekk portens tall mot en manuell telling før du «retter»
noe. **Dette er det ENESTE stedet romertall er tillatt.** Deloppgaver merkes
alltid **a), b), c)** — ALDRI (i), (ii), (iii) (§11).

### 5.6 Øvingseksamenkapitlet (`jfexfac04-7-prove`)

`chapterNumber` `7.P`, tittel «Øvingseksamener — tre komplette sett i
eksamensform». Innhold, i denne rekkefølgen:

1. `tip` **Slik tar du disse settene** — tre sett, hvilket format hvert sett
   speiler, tidsbudsjett (§6.6), og at hvert sett kan deles over to økter med
   den eksplisitte merknaden at ekte eksamen er sammenhengende.
2. Tre `collapsible` — **«Øvingseksamen A (høstprofil: lovtekstanalyse og
   kritikk)»**, **«Øvingseksamen B (vårprofil: rett og moral og
   argumentasjonsteori)»**, **«Øvingseksamen C (femtimersformatet 2008–2019, tre
   deler med oppgitt vekting)»** — med de nyskrevne settene fra skjelettets §4
   og full momentliste-fasit per oppgave, med C- og A-beskrivelse.
3. **Øvingseksamen A oppgir ingen vekting** — leseren skal selv utlede at delene
   teller om lag likt, slik H2024-, V2025- og V2026-veiledningene sier.
   **Øvingseksamen B oppgir 1/3 – 2/3.** **Øvingseksamen C oppgir 1/2 – 1/4 –
   1/4.**
4. Avkryssbar **selvdiagnose-sjekkliste (☐)** etter hver fasit.
5. Øvingseksamen C åpner med én setning om hvorfor et utgått format er med:
   gjenbruk er normalen i dette materialet, og de eldre settene er derfor direkte
   treningsverdige — men de delene som traff profesjonsetikk, polysentri eller
   Sands legitimitetsstoff er byttet ut med gjeldende pensum. Setningen skal si
   dette eksplisitt, slik at leseren forstår hva hun møter når hun åpner et ekte
   sett fra 2009.

---

## 6. EKSAMENSKONTRAKTEN (fagets kjerne — bindende for alle løsninger og modellsvar)

Alt i denne seksjonen etableres i Del 0 (kap. 0.1–0.2) og refereres i resten av
boka. Det er dette som gjør at mange forfattere skriver samme bok.

### 6.1 Kildegrunnlaget og TALLDISIPLINEN (bokas strengeste seksjon)

Tallene er **talt i emnemappa 2. august 2026** (`~/Desktop/Eksamner/UiO/JFEXFAC04/`),
ikke hentet fra en indekskolonne, og etterprøvd ved å åpne filene. De er
gjengitt her fordi denne kontrakten er porten forfatteren leser.

| Fakta | Tall |
|---|---|
| **Eksamensterminer dokumentert** | **40** (V2006 – V2026) |
| Årsspenn | 21 kalenderår, 2006–2026 |
| Vårterminer / høstterminer | 21 / 19 — **H2016 mangler helt** |
| Filer i emnemappa | 109 |
| Unike filer etter md5-dedup | 80 (29 er rene duplikater under andre navn) |
| **Oppgavesett-filer (unike)** | **43**, som dekker **37 terminer** (43 − 6 nynorskdubletter) |
| **Sensorveiledninger (unike)** | **37**, som dekker **37 terminer** (én fil per termin) |
| **Løsningsforslag, modellbesvarelser og fasiter fra UiO** | **0 — finnes ikke** |
| Terminer med BÅDE oppgavesett og sensorveiledning | **34** |
| Terminer der oppgaveteksten foreligger i en eller annen form | **40 av 40** |

**Kontrollsum:** 43 + 37 = 80 unike filer. 40 = 37 med oppgavesett + 3 uten
(V2006, H2013, H2017). 40 = 37 med veiledning + 3 uten (V2013, V2015, H2025).
34 = 40 − 3 − 3.

**Seks ufravikelige konsekvenser:**

1. **Ordene «fasit» og «løsningsforslag» kan ALDRI brukes om arkivet.** UiO har
   publisert null av begge deler for dette emnet. Det som finnes er
   **sensorveiledninger**. Boka sier «sensorveiledning» når den mener det, og
   omtaler sine egne modellbesvarelser som **nyskrevne** — aldri som ekte
   studentbesvarelser eller offisielle løsninger. Ordene er fortsatt lovlige i
   bokas egne sammenhenger («prøvefasit», «fasiten skriver ut begge lesningene»,
   «Engs liste må ikke anses som en fasit»); det er koblingen til arkivet og til
   UiO som er forbudt. Prosaregel-kontrollert (§13.5, port 3).
2. **Nevneren er 40 — aldri 41, aldri «alle terminer 2006–2026».** H2016 finnes
   ikke i arkivet, verken som oppgavesett eller veiledning. Enhver omtale av
   H2016 må si at terminen mangler (prosaregel, §13.5 port 5).
3. **Temafrekvens har nevner 40 terminer.** Oppgaveteksten foreligger for alle 40
   (for V2006, H2013 og H2017 gjennom sensorveiledningens ordrette gjengivelse).
4. **Sensorkrav har nevner 37 sensorveiledninger.** Påstander om hva sensor
   belønner eller trekker for kan **ikke** bygge på V2013, V2015 eller H2025 —
   disse tre har oppgavesett, men ingen veiledning. Formuleringene
   «V2013-veiledningen», «V2015-veiledningen» og «H2025-veiledningen» er derfor
   **hardt forbudt** (§13.5): de omtaler dokumenter som ikke finnes.
5. **43 er et FILTALL, ikke et settall.** Seks av de 43 filene er
   nynorskversjoner av sett som også finnes på bokmål. En brøk med nevner 43
   ville telt de samme eksamenene to ganger. Tallet 43 skrives derfor alltid som
   «43 oppgavesett-filer», alltid sammen med «som dekker 37 terminer», og opptrer
   **kun i kildenoten** (prosaregel, §13.5 port 6). Dette er nøyaktig fella fra
   utv1000, der «6 av 19 sett» hvilte på en liste der én oppføring var en
   sensorveiledning.
6. **Fem veiledninger har forbehold i seg selv.** V2016, V2019 og H2020 er merket
   som **utkast** av forfatteren selv; V2006 og H2018 er **foreløpige** versjoner
   skrevet før sensormøtet (H2018 finnes også i revidert versjon). Endelige
   versjoner finnes ikke i arkivet for V2016 og V2019. En påstand som hviler
   ALENE på V2016-, V2019- eller H2020-veiledningen skal derfor bære merknaden
   «(utkast)». Skjelettet nevner ikke dette; analysens §8.5 gjør det.

**⚠ Indeksene er IKKE kilde for dette emnet.** `INDEKS.csv` og `TERMINER.csv` ble
bygget før arkivet ble sortert, og alle tre målte defektene i
`../ARKIV-HOVEDMAPPE.md` rammer nettopp JFEXFAC04:

| Defekt i indeksen | Hva den gjør med JFEXFAC04 |
|---|---|
| `har_fasit=ja` betyr «har sensorveiledning» | 35 av 38 rader er merket `ja`, mens arkivet har **null** løsningsforslag. Kolonnen er ubrukelig her. |
| «U»- og tom sesong slår terminer sammen | `TERMINER.csv` har **38 rader mot 40 faktiske terminer**: `2015U` dekker både V2015 og H2015, og **V2017 mangler helt**. |
| Tom sesong gjør at filer teller som fravær | 13 av 89 rader har tom eller «U» sesong. Derfor sier indeksen 0 oppgavefiler for V2016, V2018, V2020, V2022, H2022 og V2024, og `har_fasit=nei` for V2019 — enda alle filene ligger i mappa. |

I tillegg: **`jfexfac_v09.pdf` er typet `losningsforslag` i `INDEKS.csv`, men er
oppgaveteksten for V2009** — den eneste fila i hele emnemappa som er typet som
løsningsforslag, og den er det ikke. Og **20 av mappas 109 filer står ikke i
`INDEKS.csv` i det hele tatt** (19 md5-duplikater + `JFEXFAC04_V2017.pdf`, det
eneste eksemplaret av V2017-settet).

**Regelen: hvert «N av M»-tall som skrives inn i boka, skal stå i §6.2 under.
Finn det ikke der, skal det ikke skrives.**

### 6.1.1 Kildenote-mal for kap. 0.1

Bruk denne ordlyden — tilpasset i språk, **aldri i tall**. Malen er testet mot
forbudt-regexen i §13.5 og gir **null treff** (testen står i §13.5).

> Boka er kalibrert mot hele JFEXFAC04-arkivet ved UiO: **40 eksamensterminer
> fra våren 2006 til våren 2026**, dokumentert gjennom **43 oppgavesett-filer
> som dekker 37 terminer** og **37 sensorveiledninger som dekker 37 terminer**.
> 34 terminer har begge deler. For V2006, H2013 og H2017 finnes ikke
> oppgavesettet i arkivet, men sensorveiledningen gjengir oppgaveteksten ordrett
> — derfor foreligger oppgaveteksten for alle 40 terminene. For V2013, V2015 og
> H2025 finnes oppgavesettet, men ingen sensorveiledning; ingenting om hva
> sensor belønner eller trekker for bygger på disse tre. Høsten 2016 mangler
> helt i arkivet, og derfor er nevneren 40 og ikke 41.
> **Arkivet inneholder ingen fasit og ingen løsninger fra UiO for dette emnet.**
> Det som finnes er sensorveiledninger, og de er skrevet før besvarelsene er
> lest — de beskriver hva sensor forventer, ikke hva kandidater faktisk gjorde.
> Alt du finner av modellbesvarelser, momentlister og prøvefasiter i denne boka
> er derfor skrevet av oss, ut fra pensum og veiledningenes egne
> nivåbeskrivelser. Ingen av dem er hentet fra en ekte besvarelse.
> **Forbehold:** pensum har skiftet flere ganger i perioden, og de eldste settene
> prøver stoff som ikke er pensum i dag. Fem av veiledningene er utkast eller
> foreløpige versjoner. Eksamensformen for de nyeste terminene er utledet av
> varighet og klokkeslett, ikke oppgitt i kildene. Nøyaktige pensumutgaver må
> sjekkes mot UiOs semesterside.

**⚠ Fellen malen er kalibrert rundt:** fire agenter i søskenbøker skrev
«**offisielle løsningsforslag**» i kildenoten sin — riktig i sak, men blokkert av
porten. Malen sier derfor «**ingen fasit og ingen løsninger fra UiO**», som er
like sant og passerer. Skriv aldri om malen til den forbudte formen, og legg
aldri til «43 sett» eller «41 terminer».

### 6.2 AUTORITATIV frekvenstabell per kapittel — erstatter skjelettets tall

**Regelen: tallet er ALLTID antall LISTEDE terminer i belegg-lista.** Ikke antall
forekomster, ikke et anslag, ikke en omregning. Er du i tvil om et belegg er én
eller to terminer, teller du det som én.

**Nevneren er 40 terminer der ikke annet står, og enheten SKAL skrives ut**
(«22 av 40 terminer», aldri «22 av 40»).

| Kap. | Påstand | **Telt (bindende)** | Skjelettets tall | Sprik |
|---|---|---|---|---|
| 0.1 | metakapittel | hele arkivet (§6.1) | — | — |
| 0.1 | dokumenterte gjentakelser | **8 oppgavefamilier** | 8 | ✓ |
| 0.2 | sensorkravene | **37 sensorveiledninger** (ikke V2013, V2015, H2025) | — | — |
| 0.2 | **vekting oppgitt i oppgaveteksten** | **22 av 40 terminer** (23 om V2018s anbefalte tidsbruk regnes med) | 24 av 40 | **−2** |
| 1.1–1.4 | normtypelæren som tema | **22 av 40 terminer** | 22 | ✓ |
| 1.2 | skillet regulativ/konstitutiv direkte spurt | **2 terminer** (V2006, H2024) | — | — |
| 1.3 | kompetanse og gyldighet eksplisitt | **5 terminer** (V2006, H2007, V2015, H2015, H2017) | — | — |
| 1.4 | kvalifikasjonsnormer eksplisitt | **4 terminer** (V2011, V2012, H2017, H2024) | — | — |
| 1.5 | avveiningsnormer som eget tema | **8 av 40 terminer**, **7 av de 8 om våren** | 8 / 7 av 8 | ✓ |
| 1.6 | rettigheter som eget tema | **4 av 40 terminer** | 4 | ✓ |
| 2.1 | vaghet og flertydighet | **7 av 40 terminer** | 7 | ✓ |
| 2.2 | årsaker til tolkningsproblemer | **4 terminer** (H2012, V2015, V2017, V2020), del av gruppen på 7 av 40 | 4 | ✓ |
| 2.3 | definisjonslære | **11 av 40 terminer** | 11 | ✓ |
| 2.4 | legaldefinisjoner | **3 av de 4 moderne lovtekstanalysene** (H2020, H2022, H2024); del av 11 av 40 terminer | — | — |
| 3.1 | argumentasjons- og utsagnsteori | **16 av 40 terminer** | 16 | ✓ |
| 3.1 | «er juristers utsagn forskjellige fra rettens normer?» | **3 terminer** (H2008, H2014, V2016) | — | — |
| 3.2 | standpunkt-, holdbarhets- og relevansargumenter | **4 terminer** (H2021, V2023, V2024, V2026) | 4 | ✓ |
| 3.3 | logisk gyldig form | **3 terminer** (V2014, V2016, H2019) | 3 | ✓ |
| 3.3 | sannhetsteoriene / hermeneutikk | **2 terminer** (H2013, H2018) / **1 termin** (H2019) | — | — |
| 4.1 | rettsfilosofiske hovedposisjoner | **22 av 40 terminer** | 22 | ✓ |
| 4.1 | **i de siste terminene** | **5 av de 8 siste terminene** (V2023, V2024, V2025, H2025, V2026) | 6 av de siste 8 | **−1** |
| 4.1 | kognitivisme/non-kognitivisme som eksplisitt tema | **6 av 40 terminer** | 6 | ✓ |
| 4.2 | skandinavisk rettsrealisme | **9 av 40 terminer** | 9 | ✓ |
| 4.3 | utilitarisme | **17 av 40 terminer** — materialets hyppigste enkeltposisjon | 17 | ✓ |
| 4.4 | tortur-oppgaven | **3 terminer** (H2006, H2011, V2018) | 3 | ✓ |
| 4.5 | kantiansk rettsfilosofi | **16 av 40 terminer** | 16 | ✓ |
| 4.6 · 7.7 | **de tre posisjonene i én og samme oppgave** | **7 terminer** (H2007, V2010, H2010, H2013, H2015, V2021, V2024) — pluss **5 terminer** i redusert todelt form, utilitarisme mot Kant (V2009, H2011, V2018, V2022, V2025) | 9 terminer | **−2** |
| 4.6 | moralske skranker for lovgivningskompetansen | **2 terminer** (H2007, H2015) | 2 | ✓ |
| 5.1 | kritikk av retten | **11 av 40 terminer** | 11 | ✓ |
| 5.2 | de tre kritikkformene direkte spurt | **1 termin** (H2018) + beslektede formuleringer i **5 terminer** (H2011, H2015, H2017, V2018, H2022) | — | — |
| 5.3 | kjønnsperspektiv og kvinnerett | **1 termin** (H2023) | — | — |
| 6.1 | samlekategorien rett, samfunn og rettsstat | **24 av 40 terminer** — men se kalibreringsnoten under | 24 | ✓ |
| 6.1 | **rettsstatsstoffet i moderne form** | **5 terminer** (V2019, V2021, V2022, H2022, V2025) | 5 | ✓ |
| 6.2 | rett, politikk og etikk som argumentasjonsformer | **3 terminer** (H2014, V2017, V2018) | 3 | ✓ |
| 6.2 | utgått: profesjonsetikk / polysentri | **5 terminer, alle vår, alle før 2011** / **6 terminer, alle høst, alle før 2012** | 5 / 6 | ✓ |
| 7.1 | redegjørelsesspørsmålet | **ingen brøk** — vanligste enkeltform, forekommer i alle temagrupper; **kontrollspørsmålsvarianten: 1 termin** (H2019) | — | — |
| 7.2 · 7.6 | lovtekstanalyse | **13 av 40 terminer**; **7 av de 14 terminene fra H2019 og utover**; **4 høstterminer** bærer den moderne malen (H2020, H2021, H2022, H2024) | 13 / 7 av 14 / 4 | ✓ |
| 7.3 | drøftingsoppgaven | **ingen brøk** — «tyngst vektet i så godt som alle moderne sett» er en kvalitativ påstand fra veiledningene; **5 dokumenterte drøftingsformuleringer** (V2021, V2022, H2022, V2025, V2026) | — | — |
| 7.4 | case-rammen / kortsvarsbatteriet | **1 termin** (V2021) / **1 termin** (H2019) | 1 / 1 | ✓ |
| 7.5 | feilregisteret | **16 feil, destillert fra 37 sensorveiledninger** | 16 | ✓ |
| 7.8 | kritikk + rettsstat | kritikk **11 av 40 terminer**; rettsstat i moderne form **5 terminer** | 11 / 5 | ✓ |

**De tre sprikene — hvorfor de oppstod, dokumentert her så ingen «retter» dem
tilbake:**

1. **Vektingen (24 → 22).** Analysens §3.5 og skjelettets kap. 0.2 sier begge
   «oppgitt i 24 av 40 terminer», men lista under påstanden inneholder 26
   terminer, og **fire av dem hører ikke hjemme i brøken**: H2024, V2025 og
   V2026 står oppført under «Likt» med den uttrykkelige begrunnelsen «fordi
   ingenting er sagt» — det er nettopp fravær av oppgitt vekting — og V2018
   oppga **anbefalt tidsbruk i stedet for brøk**. 26 − 3 − 1 = **22 terminer med
   oppgitt vektingsbrøk**; 23 om V2018 regnes med. Boka skriver:
   *«Vektingen er oppgitt i 22 av 40 terminer, og i én termin til (V2018) er det
   oppgitt anbefalt tidsbruk i stedet for brøk.»*
   ⚠ For V2023 står vektingen i sensorveiledningen, ikke i den arkiverte
   oppgavesett-fila (vektingssiden har falt ut). Terminen telles med, men
   påstanden «det er opplyst i oppgaven» hviler på veiledningen.
2. **Trekløveret (9 → 7).** Analysens §2.2 skriver «i 9 terminer» og lister
   deretter **sju**: H2007, V2010, H2010, H2013, H2015, V2021, V2024. De fem i
   redusert todelt form er listet for seg. 7 + 5 = 12, ikke 9 — tallet 9 har
   ingen liste bak seg. Dette er nøyaktig defekten fra inter1000 («6 av de 9
   settene» + «0 av de 7 før» = 16 av 15). Boka skriver:
   *«De tre posisjonene settes opp mot hverandre i én og samme oppgave i sju
   terminer, og i redusert todelt form — utilitarisme mot kantiansk
   rettsfilosofi — i fem til.»*
3. **«De siste 8» (6 → 5).** De åtte siste terminene i arkivet er H2022, V2023,
   H2023, V2024, H2024, V2025, H2025 og V2026. Av 22-lista for rettsfilosofiske
   hovedposisjoner finnes fem av dem: V2023, V2024, V2025, H2025 og V2026.
   H2022, H2023 og H2024 står ikke i lista. Boka skriver:
   *«Rett og moral er prøvd i 22 av 40 terminer og i fem av de åtte siste
   (V2023, V2024, V2025, H2025 og V2026).»*

⚠ **Rangeringen er uendret**, så skjelettets §2-rasjonale for kapittelfordelingen
står: normtypelæren (22) og trekløveret (22) er fortsatt de to tunge søylene og
får 12 av 24 temakapitler.

⚠ **Kalibreringsnoten til 24 av 40 (kap. 6.1).** Samlekategorien «rett, samfunn,
legitimitet og rettsstat» scorer 24 av 40 terminer — høyest i materialet — men
**mesteparten av scoren hviler på utgått Sand-stoff**. Skriver boka «24 av 40
terminer» uten å si dette i samme åndedrag, lover den leseren et pensumvolum som
ikke finnes. Regelen: tallet 24 skal **alltid** stå sammen med de fem terminene
som bærer det moderne stoffet (V2019, V2021, V2022, H2022, V2025).

### 6.3 NEVNERPORTEN — hvilken nevner til hvilken påstandstype

Hver frekvenspåstand har én nevner, og bare disse er lovlige:

| Nevner | Når den brukes | Eksempel |
|---|---|---|
| **40 terminer** | ALLE temafrekvens-påstander | «Normtypelæren er prøvd i 22 av 40 terminer.» |
| **37 sensorveiledninger** | påstander om hva sensor belønner eller trekker for | «Alle 16 feilene er hjemlet i minst én av de 37 sensorveiledningene.» |
| **37 terminer** | når enheten er termin med oppgavesett, eller termin med veiledning | «37 av 40 terminer har et arkivert oppgavesett.» |
| **34 terminer** | når en påstand krever begge kildetyper | «34 terminer har både oppgavesett og sensorveiledning.» |
| **43 oppgavesett-filer** | KUN i kildenoten, alltid med «som dekker 37 terminer» | — |
| **de 14 terminene fra H2019 og utover** | lovtekstanalysens moderne bølge | «7 av de 14 terminene fra H2019 og utover.» |
| **de 8 siste terminene** | rett og moral i nyere tid | «5 av de 8 siste terminene.» |
| **de 4 moderne lovtekstanalysene** | legaldefinisjonenes plass | «3 av de 4 moderne lovtekstanalysene.» |
| **de 8 forekomstene av avveiningsnormer** | sesongmønsteret | «7 av de 8 om våren.» |

**Ufravikelige konsekvenser:**

- **Enheten skrives alltid ut.** «22 av 40 terminer», aldri «22 av 40». Uten
  enhet vet ikke leseren om det telles sett, filer eller terminer — og det er
  nettopp der utv1000 og inter1000 gikk i grøfta.
- **«Sett» er ALDRI en nevner i denne boka.** Ordet er tvetydig her (43 filer, 37
  terminer), og bokmål/nynorsk-dublettene gjør enhver settelling feil. Skriv
  «terminer».
- **«I de fleste terminene», «gjennomgående», «nesten alltid» og «ofte» er
  FORBUDT som frekvenspåstander** uten et telt tall ved siden av.
  Prosaregel-kontrollert (§13.5, port 2). Unntak: kvalitative
  sensorkarakteristikker som «tyngst vektet i så godt som alle moderne sett» —
  disse er veiledningenes egne vurderinger og skal merkes som det, ikke som
  telling.
- **Nevneren for et TEMA er ikke nevneren for et DELTEMA.** Normtypelæren er
  prøvd i 22 av 40 terminer; det betyr **ikke** at pliktnormer, kompetansenormer
  eller kvalifikasjonsnormer hver for seg er prøvd 22 ganger. Kap. 1.2, 1.3 og
  1.4 skal skrive «som del av normtypelæren, prøvd i 22 av 40 terminer» og
  deretter sitt eget, mindre tall fra §6.2. Dette er den vanligste måten å
  produsere et sant tall som sier noe usant.
- **Sesong- og periodepåstander beholder scopet sitt.** «V2020 og V2022 er de
  eneste vårterminene» gjelder **lovtekstanalyse i moderne form (2020→)**, ikke
  alle 13 terminene. Faller scopet bort, blir påstanden gal — seks av de 13
  lovtekstterminene er vårterminer.

### 6.4 Karakternivåene, vektingsreglene og strykterskelen (fra de 37 sensorveiledningene)

Alle sjangerkapitler, modellbesvarelser og prøvefasiter skal referere til
nivåene ved navn — aldri bare «sensor vil ha god drøfting».

| Nivå | Hva veiledningene faktisk sier |
|---|---|
| **A/B** | Forståelse foran gjengivelse. Selvstendig refleksjon og problematisering. Egne, treffende eksempler (H2018 gir *betydelig* uttelling for selvstendige eksempler på kritikkformene). Å se at flere klassifiseringer kan forsvares og argumentere for en kombinasjon. Å gå utenfor hovedlitteraturen når kjernen først er dekket. Å bruke tidligere delsvar videre. |
| **C (terskelen)** | Korrekt, men gjengivende. Begrepene er der, begrunnelsen og problematiseringen mangler. Tre korrekte referater etter hverandre uten sammenligning er den vanligste C-en i dette emnet. |
| **D/E** | Klare misforståelser, for korte delsvar, dagligspråklig synsing om fagbegreper. |
| **F** | Blank eller bare alminnelige synsinger over ordenes dagligspråklige betydning (H2018 sier at dette er et spørsmål om kandidaten kan bestå i det hele tatt). |

**Det som IKKE straffes** (skal stå eksplisitt i kap. 0.2 — det er
karakter-realisme, ikke trøst):

- **Feil konklusjon** (V2021, V2022, H2024, V2025).
- **Valg av terminologi** (H2024, H2022) — Kolflaaths, Høgbergs og Engs
  begrepsapparater er tre nært beslektede inndelinger, kandidaten står fritt,
  og de konkurrerende inndelingene kan virke forvirrende «slik at det ikke bør
  trekke for mye».
- **Ufullstendighet** — veiledningenes lister er ikke sjekklister, og V2026 sier
  uttrykkelig at framstillingen ikke er uttømmende.
- **Svak disposisjon** (V2018, V2019) — det avgjørende er at forståelsen er der,
  ikke hvor i besvarelsen den står.
- **Svake faktiske premisser i case-oppgaver** (V2021).
- **At oppgaven treffer stoff læringskravene bare krever kjennskap til** (H2013,
  H2019, V2023).

**Strykterskelen:** én sviktende hoveddel drar hele besvarelsen med seg — V2019,
V2018, H2017, H2020 og H2018 sier alle en variant av dette. Dette skal stå i
kap. 0.2 og gjentas i sjangerkapitlene, fordi det er argumentet for å skrive
**noe brukbart på alt** framfor å perfeksjonere én del.

**Vektingsreglene** (skal stå eksplisitt i kap. 0.2 og styre alle fasiter):

1. Vekting er oppgitt i **22 av 40 terminer** (§6.2), og varierer systematisk:
   3/4 – 1/4 · 3/5 – 2/5 · 2/3 – 1/3 · 1/2 – 1/4 – 1/4 · 1/4 – 3/4 · likt.
2. **Er ingenting oppgitt, teller delene om lag likt** — H2024, V2025 og V2026
   sier alle det samme.
3. **Sprik i kvalitet vurderes ut fra helhetsinntrykket**, og den oppgaven som
   dekker mest pensum kan tillegges noe mer vekt (H2021, V2021).
4. **Anbefalt tidsbruk kan komme i stedet for brøk** (V2018: ca. 3 t på del A,
   ca. 2 t på del B).
5. **Delsvar trenger ikke være like lange**, men et delspørsmål som ikke er
   ordentlig besvart, gir trekk (V2023), og helt korte delbesvarelser gir trekk
   (H2019).
6. **Ved valgfrihet: svar på nøyaktig det antallet oppgaven ber om.** Å svare på
   færre gir trekk; å svare på flere gir ingen gevinst (H2019).

**De tre rubrikkene (bindende selvrettingsverktøy, binære — leseren skal kunne
krysse av uten skjønn).** De står i kap. 0.2 og i 7.1–7.3, og hver prøvefasit
viser tilbake til den som passer.

**Redegjørelsesrubrikken (RED):**

☐ Er det avgrenset hva spørsmålet ber om — og skrevet hva det ikke ber om?
☐ Er begrepet definert presist, med avsender navngitt?
☐ Er distinksjonen mot nabobegrepet skrevet ut?
☐ Er det ett eget eksempel, gjerne fra en lovtekst?
☐ Står det én løftesetning som problematiserer eller kobler videre?

**Lovtekstrubrikken (LOV):**

☐ Er bestemmelsen lest leddvis og punktumsvis?
☐ Er hvert ledd klassifisert: hva slags utsagn, hva slags norm, hva slags
definisjon?
☐ Er klassifiseringen begrunnet i teorien og ikke i intuisjonen?
☐ Er minst én alternativ lesemåte vurdert og veid, ikke bare nevnt?
☐ Er dybde valgt framfor uttømmende opplisting?
☐ Er terminologien konsekvent gjennom hele analysen?

**Drøftingsrubrikken (DRØ):**

☐ Står standpunktet i første avsnitt?
☐ Er begge posisjoner fremstilt slik en tilhenger ville kjent seg igjen i dem?
☐ Er det minst én innvending fra en navngitt posisjon?
☐ Er innvendingen faktisk besvart?
☐ Er egen vurdering utskrevet, ikke bare antydet?
☐ Er alle delspørsmål besvart?

### 6.5 Sjangrenes anatomi (bindende for alle modellsvar og fasiter)

Kodene **RED**, **LOV**, **DRØ** og **CASE** er byggespråk. **Skriv alltid
sjangerens navn først, koden i parentes**, og skriv navnet fullt ut ved første
bruk per kapittel (§11).

**RED — redegjørelsesspørsmålet, fire trinn:** (1) avgrens hva spørsmålet
faktisk ber om, og hva det ikke ber om · (2) presis definisjon forankret i en
navngitt tradisjon · (3) eget eksempel, gjerne fra lovtekst · (4) én løftesetning
som problematiserer eller kobler videre.
V2025 skiller uttrykkelig mellom «redegjør» og «diskuter»: et
redegjørelsesspørsmål *krever ikke* drøftelse, men gode besvarelser går bredere
eller dypere og problematiserer. H2024: rene gjengivelser av tilstøtende stoff
oppgaven ikke ber om, gir ikke særlig uttelling.
**Kontrollspørsmålsvarianten** (H2019, fire av fem korte begrepsforklaringer):
fem korte svar à ~10 minutter, samme omtrentlige omfang på hvert, og nøyaktig
det antallet oppgaven ber om.

**LOV — lovtekstanalysen, fem trinn:** (1) les leddvis og punktumsvis ·
(2) klassifiser hvert ledd · (3) begrunn klassifiseringen i teorien, ikke i
intuisjonen · (4) se at samme setning kan leses som flere normtyper samtidig og
argumenter for en kombinasjon · (5) velg dybde framfor uttømmende opplisting.
H2021 og V2022 sier begge at en velbegrunnet, uttømmende analyse vanskelig kan
forventes på tilgjengelig tid.

**DRØ — drøftingsoppgaven:** standpunkt tidlig → beste argument for → beste
innvending fra en navngitt posisjon → veiing → konklusjon. V2026 sier
uttrykkelig at den som problematiserer godt og drøfter selvstendig, skal ha
**ekstra uttelling** når oppgaveteksten sier «diskuter».

**CASE — anvendelsesoppgaven:** skill premiss fra teori; bruk bakteppet som
anledning til å anvende posisjonene, ikke til å vise faktakunnskap; hypotetiske
eksempler er fullt gyldige. V2021 understreker at faktakunnskap om caset ikke
skal telle, og at svakheter i de faktiske premissene ikke i seg selv gir trekk.

**Gjenbruksregelen (gjelder alle sjangre):** H2024 sier at en redegjørelse under
a) skal gi uttelling også når den brukes i b) eller c). Modellbesvarelsene skal
vise gjenbruken eksplisitt («den sondringen fra a) gjør arbeidet også her, fordi
…»), og drøftingsdelen skal aldri starte «på nytt».

### 6.6 Tidsbudsjett (bruk denne modellen konsekvent i hele boka)

**Gjeldende form (4 timer, digital skoleeksamen i Inspera med Lovdata Pro i
eksamensmodus uten fritekstmerknader, fra H2022):** to (av og til tre) oppgaver,
ofte med delspørsmål a–c, karakter A–F. Ved to likevektede oppgaver: ~15 min
lesing og disponering av hele settet → ~1 t 40 min per oppgave → ~15 min
gjennomlesning. Innenfor en lovtekstanalyse: lese bestemmelsen leddvis (10 min)
→ fylle normkartet (15) → skrive klassifiseringene med begrunnelse (45) → veie
de alternative lesemåtene (20) → landing og gjennomlesning (10).

**De fire formregimene** (kap. 0.1, kort): 6 timers papireksamen V2006–H2007 →
5 timers skoleeksamen V2008–V2019 → hjemmeeksamen med alle hjelpemidler
V2020–V2022 (5 t i V2020, 4 t fra V2021; V2020 var bestått/ikke bestått etter
dekanvedtak, deretter gradert igjen) → 4 timers digital skoleeksamen fra H2022.

⚠ **Eksamensformen for V2023 og senere er en SLUTNING, ikke et sitat**
(analysens §8.6): den er utledet av varighet, klokkeslett og fravær av
hjemmeeksamensformuleringer. Boka skriver dette som en slutning der formen
omtales for disse terminene, og klokkeslettene (H2023 og H2024 kl. 15–19; H2025,
V2025 og V2026 kl. 09–13) presenteres som opplysninger fra settene, ikke som
belegg for formen.

Der en oppgaves deklarerte tid avviker fra summen av deltidene, forklares
differansen (skrivetid mot total). «Lite tid?»-boksen sier eksplisitt at
kapitlenes tidsanslag er **LESEtid**, og at den som skriver besvarelser for hånd
bør legge på ca. ×1,5.

### 6.7 Bokas to mantraer

1. **«Forståelse foran gjengivelse.»** Etableres i kap. 0.2, gjentas i hvert
   sjangerkapittel og i hver A-markør-boks. Det er gjennomgangstonen i hele det
   moderne materialet, og V2022 er skarpest: etter at hjelpemidler ble tillatt
   bør rene gjengivelser av pensum i liten grad gi uttelling, siden studentene
   har litteraturen tilgjengelig.
2. **«Diskuter betyr ta standpunkt.»** Etableres i kap. 0.2. Begrunnelse: V2026
   sier at den som problematiserer godt og drøfter selvstendig skal ha ekstra
   uttelling, og V2025 at det ikke holder å redegjøre når oppgaven ber om
   begrunnelsen.

Begge mantraene forklares i klarspråk ved første bruk — «C-stoff» er
karaktersjargong og skal gloses (§11).

---

## 7. FAGETS SANNHETSKONTROLL

### 7.1 Begrunnelsesregelen (ufravikelig)

Enhver klassifisering i boka — i et eksempel, i en modellbesvarelse, i en fasit —
skal være **begrunnet i én setning som svarer på «hvorfor akkurat dette?»**. En
konstatert klassifisering er C-stoff, og boka skal aldri vise C-stoff som om det
var A-stoff.

| ✗ Konstatert | ✓ Begrunnet |
|---|---|
| «Første ledd er en kompetansenorm.» | «Første ledd er en kompetansenorm fordi det ikke regulerer en handling som finnes uavhengig av normen, men selv skaper adgangen til å treffe vedtaket — bryter man kravene, blir vedtaket ugyldig, ikke rettsstridig.» |
| «Uttrykket er vagt.» | «Uttrykket er vagt fordi betydningen har en gråsone: det finnes klare tilfeller i begge ender og et felt i midten der ingen språklig regel avgjør. Det er betydningen som er vag, ikke formuleringen.» |
| «Utilitarismen kan ikke begrunne et totalforbud.» | «Handlingsutilitarismen kan ikke begrunne et unntaksfritt forbud, fordi enhver regel må vike der bruddet gir størst samlet nytte; regelutilitarismen kan komme nærmere, men da flyttes spørsmålet til om regelen som helhet maksimerer nytte.» |

### 7.2 Normkartet — lånet fra DNA-jus, og hva det IKKE er

Kap. 7.2 bruker et **normkart**: en tabell `ledd → utsagnstype → normtype →
begrunnelse` som leseren fyller ut før hun skriver. Lånet er avgrenset og skal
holdes avgrenset:

- **Normkartet er IKKE et hjemmelskart.** Ingenting subsumeres, ingenting
  konkluderes, og det finnes ingen fasit — sensorveiledningene sier uttrykkelig
  at flere klassifiseringer kan forsvares. Skriv det eksplisitt der kartet
  innføres, og lenk til `jus1111`s praktikumsmetode som **KONTRAST** (§14).
- **To sensorregler rammer kartet inn:** konklusjonen er ikke fasit (V2022:
  hvilke konklusjoner kandidaten trekker trenger ikke være avgjørende — det er
  forståelsen analysen viser som teller; H2024: ulike forståelser av normbegrepet
  er akseptable, og det som premieres er å *se* problemstillingen), men **klare
  misforståelser gir trekk** (V2022), og tolkninger godtas «så lenge tolkningene
  ikke er søkte» (V2022).
- **Ingen praktikum, ingen typetilfeller, ingen faktumanalyse noe sted i boka.**
  Det finnes ikke i noen av de 40 terminene, og å trene det ville trent en
  sjanger som ikke prøves.

### 7.3 Avsenderkoblinger — riktig tilskrivning (grep-sjekk mot denne tabellen)

Sensor merker en feilplassert forfatterkobling umiddelbart, og
redegjørelsesspørsmålet lever av at koblingen er riktig.

| Begrep | Riktig avsender | ALDRI tilskriv |
|---|---|---|
| Norm som meningskomponent + virkelighetskomponent; saksinnhold og modalitet; pliktmodalitetene; regulativ/konstitutiv; kompetansekriteriene; kvalifikasjonsnorm; avveiningsnorm og retningslinje; normer, verdier og rettigheter; de fire innvendingene mot utilitarismen | **Eng**, *Rettsfilosofi* | Kolflaath, Høgberg |
| Koblingsord — ordet som teknisk mellomledd mellom rettsfaktum og rettsvirkning | **Ross**, formidlet via Eng | Eng alene, Olivecrona |
| Sanksjonsanalysen; vurderingen av normers bindende kraft | **Olivecrona** | Ross |
| De fire relasjonsparene krav–plikt, frihet–ikke-krav, kompetanse–avhengighet, immunitet–inkompetanse | **Hohfeld** | Eng |
| Vaghet/flertydighet, definisjonsmåtene «kategori og tilleggskrav» mot oppregnende, standpunkt-/holdbarhets-/relevansargumenter, konsekvensargumenter | **Kolflaath** ⚠ (pensum fra V2023) | Eng, Høgberg |
| Intensjonal/ekstensjonal definisjon; «I språkets bilde» | **Høgberg** ⚠ (pensum t.o.m. H2022 — historisk) | Kolflaath |
| Konnotasjons- og denotasjonsangivelse | **Eng** | Høgberg |
| Kritikk som fagbegrep; intern/ekstern kritikk; formalkritikk, normativ og empirisk kritikk med sine redskaper; rettssosiologisk rettskritikk | **Eriksen**, *Kritikk* | Mæhle og Aarli |
| Kvinnerett og kjønnsperspektiv | **Ikdahl** ⚠ (pensum fra H2023) | Eriksen |
| Rettsstatsidéen, rettsstatens verdigrunnlag, rettens funksjoner | **Mæhle og Aarli**, *Fra lov til rett* ⚠ (pensum fra V2021) | Sand, Eriksen |
| Legitimitetstypologien, polysentri, kommunikativ differensiering, risikosamfunn | **Sand** ⚠ (UTGÅTT t.o.m. H2019 — kun i historikk-delen i kap. 6.2) | noen som helst som pensumanker i dag |
| Nytteprinsippet, kvantitativ hedonisme | **Bentham** | Mill |
| Kvalitativ hedonisme, høyere og lavere gleder, rettigheter som midler til nyttemaksimering | **Mill** | Bentham |
| Det kategoriske imperativ, formelen om mennesket som formål i seg selv, rettsprinsippet om størst mulig handlingsrom | **Kant** | «naturretten» generelt |
| Valgteori om rettigheter / interesseteori om rettigheter | **Hart** / **MacCormick** — begge merket RANDSONE, utenfor hovedlitteraturen | Eng |

**Tillatte avsendere er uttømmende:** Eng · Kolflaath · Høgberg (⚠ historisk) ·
Eriksen · Ikdahl · Mæhle og Aarli · Sand (⚠ utgått, kun i kap. 6.2) · Olivecrona
· Ross · Hohfeld · Bentham · Mill · Kant · Hart og MacCormick (randsone).
**Navn utenfor denne lista skal ikke innføres som pensumankere.**

**De tre begrepsapparatene skal presenteres side om side.** H2024 og H2022 sier
begge at Kolflaaths, Høgbergs og Engs inndelinger er tre nært beslektede
apparater, at kandidaten står fritt til å velge, og at kandidaten ikke kan
forventes å drøfte forholdet mellom dem. Boka **anbefaler ett arbeidsspråk**
(Eng for normteorien, Kolflaath for språk- og definisjonsteorien), **navngir de
to andre**, og later aldri som det finnes én riktig terminologi.

### 7.4 Kalibreringsregelen — det utgåtte pensumet (UFRAVIKELIG)

Boka kalibreres mot dagens pensumregime: **Eng + Kolflaath + Eriksen + Mæhle og
Aarli (+ Ikdahl fra H2023)**. Tre stoffområder er utgått og skal **ikke bære
kapitler, ikke generere flashcards og ikke generere quiz**:

| utgått stoff | prøvd i | siste gang |
|---|---|---|
| Profesjonsetikk, juristroller, eksamensløftet | 5 terminer, alle vår | V2010 |
| Rettslig polysentri, pluralisme, internasjonalisering | 6 terminer, alle høst | H2011 |
| Sands legitimitetstypologi, kommunikativ differensiering, risikosamfunn, miljørett | del av samlekategorien | H2019 |

Bokas **eneste** omtale er den korte, eksplisitt merkede historikk-delen i
kap. 6.2, som har ett formål: at leseren som trener på gamle sett skjønner
hvorfor halve oppgaveteksten handler om noe hun ikke skal kunne. Historikken gis
som navn med **én forklarende setning hver**, alle merket «ikke pensum i dag;
står her for at gamle oppgavesett skal gi mening», og skal **ikke** ha
begrepsdefinisjoner som genererer flashcards.

Del 6-prøve 4 («Pensumhistorikk-beredskap») tester å **kjenne igjen** utgåtte
temaer i gamle oppgavetekster og vite at de ikke skal besvares i dag — ingen av
spørsmålene der krever kunnskap om det utgåtte stoffets innhold.

### 7.5 `(verifiser)`-disiplin og pensumrotasjon

**⚠ Utgave-sensitive ankere** (⚠-merkingen beholdes i pensumkartene som
«utgave-/pensumavhengig»): Kolflaath (*Språk og argumentasjon*, fra 2023/2024
*Ordlyd og resonnement*), Høgberg (historisk), Ikdahl (antologibidrag), Mæhle og
Aarli. Stabilt anker gjennom hele materialet: **Eng, *Rettsfilosofi***.

Referanser du er usikker på merkes i den literale formen `(verifiser)` og løses i
fase 6 FØR `sjekk-bok.py` kjøres siste gang. **Ingen oppdiktede referanser,
verk, forskere, årstall eller tall. Ingen sidetall, ingen utgaveangivelser,
ingen pensumavgrensninger utover det skjelettet attesterer** — nøyaktige utgaver
må verifiseres mot UiOs semesterside før de brukes som henvisning.

**Scope-disiplin:** hermeneutikk, sannhetsteoriene, kjønnsperspektivet og
Hart/MacCormick er «bør kjenne til»-stoff. De plasseres SIST i sitt kapittel,
merkes eksplisitt, og får ikke lange sidespor andre steder.

---

## 8. FAGLIG OG POLITISK NØYTRALITET (bindende — faglig presisjon, ikke høflighet)

JFEXFAC04 er et emne der pensum selv består av konkurrerende posisjoner, og der
oppgavene handler om tortur, krig, vaksinasjonsplikt, menneskerettigheter og
grensene for lovgiverens makt. En fremstilling som tar stilling på leserens
vegne er **faglig gal** — sensor premierer nettopp evnen til å se begge sider.
Men nøytralitet betyr **ikke** å relativisere.

| Type påstand | Slik behandles den |
|---|---|
| **Rettsfilosofisk stridsspørsmål** («kan det etableres kriterier til vurdering og kritikk av gjeldende rett?», «gjelder det moralske skranker for lovgivningskompetansen?») | **Posisjonspar.** Begge sider får sitt beste argument. Dette er ikke svakhet — det er drøftingsstoffet sensor premierer. |
| **Politisk omstridt spørsmål** («bør en rettsstat innføre vaksinasjonsplikt?», «er et totalforbud mot tortur riktig?») | **Posisjonene beskrives, aldri bedømmes i bokas egen stemme.** Minst to posisjoner, hver med sin sterkeste begrunnelse. Modellbesvarelsene kan og skal lande — men det er *besvarelsens* landing, ikke bokas. |
| **Etablert fagregel** («både kantiansk rettsfilosofi og utilitarisme er kognitivistiske, skandinavisk rettsrealisme er non-kognitivistisk»; «flertydighet er en egenskap ved uttrykket, vaghet ved betydningen») | **Presenteres som det det er**, med sitt faktiske belegg. Å pakke en etablert fagregel inn i «noen mener» er å svekke faget, ikke å være nøytral. Prosaregel-kontrollert (§13.5, port 7). |
| **Teoretisk omstridt begrep** («norm», «rettighet») | Sies eksplisitt at det ER omstridt — V2025 og H2024 premierer begge kandidater som problematiserer hva de legger i begrepet framfor å forutsette én betydning stilltiende (feil #16). |
| **Begrep med politisk ladning** («menneskeverd», «rettssikkerhet», «sårbar gruppe») | Brukes **analytisk**, definert ved første bruk per kapittel. Aldri som honnørord. |

**Konkrete bindinger:**

- **Ingen policyanbefalinger i bokas egen stemme.** «Vi må», «det er på tide at»,
  «myndighetene bør» hører ikke hjemme. Boka kan gjengi en posisjon som mener
  dette — merket som posisjon.
- **Posisjonene fremstilles slik en tilhenger ville kjent seg igjen i dem.** En
  karikert utilitarisme gir en verdiløs drøfting, og sensor ser det.
- **Vippe-case (bindende):** minst to drøftingsoppgaver i boka skal ha to fullt
  forsvarlige landinger. Fasiten skriver **UT begge lesningene** og merker
  oppgaven **«(omstridt — begge forsvarlige)»**. Skjelettet plasserer dem i
  kap. 3.1 (er et de lege lata-utsagn deskriptivt eller normativt?) og kap. 5.3
  (er kvinneretten intern eller ekstern kritikk?); i tillegg har kap. 1.2, 2.4 og
  7.2 tvilstilfeller i lovtekstene der begge klassifiseringer skrives ut.
  Entydige fasiter hele veien trener aldri håndtering av ekte faglig ambivalens —
  og det er ambivalensen sensor premierer.
- **Jus og moral holdes fra hverandre.** Boka sier aldri at en rettsregel er
  ugyldig fordi den er umoralsk, og aldri at et moralsk spørsmål er avgjort fordi
  retten har talt. Nettopp forholdet mellom de to ER emnet.

---

## 9. GJENBRUKSTABELLEN — de åtte oppgavefamiliene (bindende for kap. 0.1 og for oppgavevalget)

Gjenbruk er normalen i dette materialet, ikke unntaket. Det er hele begrunnelsen
for at boka ber leseren trene på gamle sett — og for at bokas egne nyskrevne
oppgaver følger nøyaktig disse malene. Åtte familier er dokumentert:

| Familie | Terminer | Merknad |
|---|---|---|
| Normtypene og sammenhengen mellom dem + «er juristers utsagn om hva som er rett forskjellige fra rettens normer?» | **H2008, H2014, V2016** | V2016-veiledningen sier uttrykkelig at H2014-veiledningen fortsatt er dekkende |
| Tortur-oppgaven (er et totalforbud forenlig med utilitarisme og kantiansk etikk?) | **H2006, H2011, V2018** | nesten identisk formulering i de to siste |
| Moralske skranker for lovgivningskompetansen, besvart fra de tre posisjonene | **H2007, H2015** | H2015-veiledningen sier selv at oppgaven bygger på H2007 og at veiledningen derfra er gjenbrukt |
| Normer og verdier + avveiningsnormer og retningslinjer + «er avveining reell normativ styring?» | **V2007, V2012** | ord for ord |
| Utfordringer og målsettinger ved formulering av definisjoner | **H2014, H2015** | identisk |
| «Redegjør for årsaker til tolkningsproblemer» | **H2012, V2015, V2017, V2020** | V2020 skilte mellom årsaker *og kilder* |
| Praktisk fornuft i de tre retningene | **H2010, H2011, V2018** | i H2011 og V2018 som kritikk-kriterium |
| Rettigheter og forbindelsen mellom normer og rettigheter | **H2023, V2025** | bare små formuleringsforskjeller |

**Bindende konsekvenser:**

- Tabellen står i kap. 0.1, med setningen om at trening på gamle sett derfor er
  direkte eksamensrelevant.
- **Bokas nyskrevne oppgaver følger disse malene** — det er slik en oppgavebank
  blir eksamensrelevant uten å gjengi noe. Men formuleringene er våre egne (§16).
- **Antall familier er åtte.** Skriv ikke «ni gjentakelser» eller «en rekke» —
  tallet er telt, og listen er uttømmende for det arkivet dokumenterer.
- ⚠ **V2015 har ingen sensorveiledning.** Familien «årsaker til
  tolkningsproblemer» kan derfor bare hjemles på hva sensor forventer gjennom
  H2012-, V2017- og V2020-veiledningene (§6.1 pkt. 4).

---

## 10. MODELLBESVARELSER (ærlighet, nivå og variasjon)

### 10.1 Ærlig merking — ufravikelig

- Hver modellbesvarelse innledes med én linje: **«Nyskrevet modellbesvarelse —
  skrevet av oss for denne boka. JFEXFAC04-arkivet har 37 sensorveiledninger som
  beskriver hva sensor forventer, men ingen publiserte besvarelser og ingen
  fasit. Dette er derfor ikke en ekte kandidatbesvarelse.»**
- En boks som heter «C-besvarelse» skal **VÆRE en C** — tittel, tekst og
  margnotater skal stemme. En polert A merket som C er en byggefeil. Samme for
  E-skissen i 0.2: den skal faktisk mangle det den sier den mangler.
- Ordet «studentbesvarelse» er forbudt i bokinnholdet (grep-sjekkes, §13.5).
  Skriv «modellbesvarelse», og bruk formuleringen «ikke en ekte
  kandidatbesvarelse» i ærlighetslinjen.
- **Oppgavene er nyskrevne, også når de ligner.** De faktiske bestemmelsene
  arkivet har brukt (smittevernloven, bilansvarslova, helseforskningsloven,
  straffeloven, Grunnloven, FN-pakten, EMK, vegtrafikkloven) **gjengis ikke** —
  de kan nevnes som eksempler på hva slags bestemmelser sjangeren bruker, men
  analysene er på bokas egne tekster (§16).

### 10.2 Meta-fasit er FORBUDT

«En A-besvarelse ville her ha drøftet …» er en regibemerkning, ikke en fasit.
**Drøftelsen skal skrives UT** — kort, skarp, forankret, med landing.
Grep-sjekkes: `en A-besvarelse ville|ville ha drøftet|en toppbesvarelse ville`
= 0 treff.

Margnotater er lov og ønsket, men de skal **peke på tekst som faktisk står der**:
`> Margnotat: her holdes to lesninger av andre ledd åpne og veies mot hverandre — det er dette grepet H2024-veiledningen sier skal honoreres.`

### 10.3 Nivåfordeling og profilvariasjon (bindende)

| Kapittel | Nivåer som SKAL finnes | Profil |
|---|---|---|
| 0.2 | samme korte oppgave på **E-, C- og A-nivå** | — |
| 7.1–7.5 | momentliste (må-punkter / pluss-punkter / feller) på hver oppgave | — |
| **7.6** (lovtekstanalyse) | A + kommentert C | **A-en er en DYBDE-A**: færre ledd behandlet, men hvert av dem begrunnet og drevet langt — jf. H2021 og V2022 om at uttømmende analyse ikke kan forventes |
| **7.7** (de tre posisjonene) | A + kommentert C | **konkluderer SKARPT** (se 10.4) |
| **7.8** (kritikk og rettsstat) | A + kommentert C + **midtnivåbesvarelse (B)** | **A-en er en BREDDE-A**: begge kritikkformer og alle fire verdier berørt, ingen drevet ekstremt dypt |

**Breddeprofil mot dybdeprofil er ikke pynt** — det er sjekkliste-forbudet gjort
synlig: veiledningene sier gjennomgående at listene deres ikke er sjekklister, og
V2026 at framstillingen ikke er uttømmende. Begge modellbesvarelsene skal ha
margnotat som sier eksplisitt at den andre profilen ville vært like god.

**Midtnivåbesvarelsen (B) i kap. 7.8** er et README-krav: realistisk
studentspråk, litt rotete disposisjon, ett godt selvstendig eksempel, men
innvendingen mangler svar. Med margnotater om hva som er **BRA NOK** og de 2–3
grepene som skiller den fra A. Merk at V2018 og V2019 sier at svak disposisjon i
seg selv ikke er grunn til trekk hvis forståelsen gjenfinnes et annet sted — det
er nettopp poenget med B-eksempelet. Leseren trenger et realistisk
sammenligningspunkt, ikke bare polert A og karikatur-C.

### 10.4 Konklusjonsvariasjon (bindende)

- **Kap. 7.7 skal konkludere SKARPT:** A-besvarelsen tar klart standpunkt om
  hvilken posisjon som gir det mest overbevisende svaret på om lovgiveren står
  moralsk fritt, med begrunnelsen utskrevet — og er likevel toppnivå. Margnotat:
  «Forbehold er et verktøy, ikke obligatorisk garnityr. En skarp, begrunnet
  konklusjon er en fullgod A-form.»
- **7.6 og 7.8** kan lande mer avveiende, men må da begrunne selve avveiningen —
  «det kommer an på» uten grunner er C-stoff i ny drakt.
- Ikke alle modellbesvarelser skal lande på samme kompromissform.

---

## 11. Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»; SKAL i førsteutkastet)

- **Kun eksamensrelevant stoff.** «Bør kjenne til»-stoffet (hermeneutikk,
  sannhetsteoriene, kjønnsperspektivet, Hart og MacCormick, pensumhistorikken)
  plasseres SIST i sitt kapittel og merkes eksplisitt med sin lave frekvens.
- **HARDT LINJEBRUTT PROSA ER FORBUDT (rendrings-kritisk).** Rendreren gjør HVERT
  enkelt `\n` om til `<br />`. Regelen: **ett avsnitt = én lang linje i
  JSON-strengen**, `\n\n` mellom avsnitt, og enkelt `\n` KUN der linjeskiftet
  faktisk er ønsket (deloppgaver, listelinjer, tabellrader, margnotater,
  flervalgsalternativer). Gjelder `content`, `problem`, `solution`, `task` og
  `hints`.
- **Godt, flytende norsk (UFRAVIKELIG).** Hele setninger, korte avsnitt (2–4
  setninger), aktiv «du»-form. Telegramstil er FORBUDT — «Funksjon: pliktnorm.
  Modalitet: påbud.» skrives «Leddet uttrykker en pliktnorm, og modaliteten er
  påbud». Konkret norsk knagg før fagtermen; presisjon vinner ved tvil.
  Latinske uttrykk (de lege lata, de lege ferenda, definiens) får norsk
  forklaring først, termen i parentes ved første bruk per kapittel.
- **Ingen uforklart sjargong.** Fagstoffet er nybegynnervennlig — det er
  METAspråket som må ryddes. Sjangerkodene RED/LOV/DRØ/CASE, feilkodene #1–#16 og
  all karaktersjargong («C-stoff», «A-markør», «C-terskelen») forklares i
  klarspråk ved FØRSTE bruk **per kapittel**. Ingen kald kode i
  `competenceGoals` eller i kapitlets aller første tekstboks.
- **Hver oppgave synlig eksamensforankret** med sjangerens navn i ledende
  parentes:
  `(Eksamenssjanger lovtekstanalyse — LOV; slike oppgaver ber om leddvis klassifisering med begrunnelse, ikke om en konklusjon.)`
  Sjangerkoden skrives fullt ut ved første bruk per kapittel. Vanskelighetsgraden
  skrives ALDRI inn i `task` (den ligger i `difficulty`).
- **Deloppgaver merkes a), b), c) — ALDRI (i), (ii), (iii).** Ufravikelig
  produkteierregel. Hver deloppgave starter på **egen linje med merket i fet**:
  `…\n\n**a)** …\n**b)** …`. ALDRI a) b) c) bak hverandre i løpende tekst, aldri
  A)/[A]. Ikke bruk `subTasks`. Eneste unntak: ja/nei- og riktig/galt-lister av
  SELVSTENDIGE påstander i prøvekapitler (§5.5).
- **Inline-nummerering** `(1) … (2) … (3) …` med tre eller flere påfølgende settes
  på egne linjer. Gjelder særlig de fire pliktmodalitetene, de tre
  kompetansekriteriene, Hohfelds fire relasjonspar, de fire innvendingene mot
  utilitarismen, femtrinnsmetoden og de fem sammenligningsaksene — de skal
  uansett stå som egne linjer, i rekkefølge.
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. 1.3](/jfexfac04/jfexfac04-1-3)`. Død «se kapittel
  X.Y»-tekst er FORBUDT. Aldri lenker i `title`-felt.
- **Karakter-realisme:** Del 0 sier eksplisitt at **C er en god og vanlig
  karakter**. Formuleringen **«Prioritet: perfekt» er FORBUDT** — skriv «høyeste
  prioritet». Prioritetsklassene fra skjelettet oversettes slik: *perfekt* →
  **høyeste prioritet**, *kunne* → **kunne**, *kjenne* → **bør kjenne til**.
  «Gapet til A» rammes inn som **oppgraderingsmeny**, ikke mangelliste.
  ⚠ Karaktersjargong som motsier eksamensformen skal rammes inn: V2020 var
  **bestått/ikke bestått**, så «A-kandidat» gir ikke mening om den terminen.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter HVER prøvefasit og etter hver
  fasit i øvingseksamenene — bruk rubrikkene i §6.4. I hvert temakapittel: minst
  én **lett innstegsoppgave** tidlig (`difficulty: "lett"`, ren gjengivelse med
  egne ord, vennlig fasit) før første fulle eksamenssjanger.
- **Hverdagsanker + verdens-caser:** abstrakte kjernetemaer åpner med et konkret
  anker FØR apparatet (norm: en husordensregel mot en oppslagstavlebeskjed;
  vaghet: hvor mange strå som skal til før det er en haug; kognitivisme:
  setningen «denne loven er urettferdig» lest tre ganger). Eksemplene er
  verdens-caser — ALDRI metaeksempler av typen «en medstudent skriver …».
- **Erfarings-bro:** mange lesere har sterke moralske intuisjoner om
  eksempeltemaene (tortur, vaksinasjonsplikt, krig). Legg en kort `tip`-boks i
  kap. 7.3 som viser KONVERTERINGEN: (1) start i posisjonens eget begrep,
  (2) bruk intuisjonen som ILLUSTRASJON av begrepet, aldri som begrunnelse
  alene, (3) koble tilbake til drøftingsaksen. Å bare advare mot pensumløs
  synsing uten å vise konverteringen skyver bort nettopp de leserne som har mest
  materiale.
- **Difficulty-spredning + kald bank:** boka skal ha genuint krevende oppgaver
  merket `difficulty: "vanskelig"` (og «(krevende)» i oppgaveteksten der det
  hjelper), ikke alt på middels. Én merket **kald bank** i kap. 7.5 (§5.3).
- **Hint på alle oppgaver:** hvert `exercise` har utfylte `hints`. Første hint =
  hvilket begrep, hvilken avsender, hvilken sjangerregel eller hvilket første
  grep oppgaven krever («Start i skillet mellom uttrykk og betydning — er det
  ordet som kan bety flere ting, eller er det grensen for hva ordet dekker som er
  uskarp?») — **ALDRI konklusjonen**. Eneste unntak er den kalde banken.
- **Stokket flervalg og varierte fasit-mønstre:** statiske flervalg i
  prøve-`collapsible`-er og øvingseksamener har stokkede fasit-bokstaver (ALDRI
  «alle a»), og prøve-tipen sier hvor flervalget bor. Gjelder ALLE ensartede
  fasitlister, også «hvilken feil begår kandidaten»-drillen i 7.5 og
  riktig/galt-listene — aldri «alle felle», aldri samme fasit to ganger på rad.
  Verifiseres med `sjekk-fasitfordeling.py` (terskel 45 %).
- **Distraktorer straffer aldri grundig lesing:** en distraktor gjengir ALDRI
  bokas egen presisering som «galt» svar. Ligger en distraktor nær sannheten
  (typisk: «en kvalifikasjonsnorm er det samme som en legaldefinisjon», «vaghet
  er når en formulering er upresis», «en tillatelse er bare fravær av forbud»),
  skal `explanation` forklare eksplisitt hvorfor den ikke holder.
- **Signal-/hintbokser ETTER oppgaven:** en boks som varsler hva en drilloppgave
  tester («her ligger vaghet/flertydighet-fella») plasseres ETTER oppgaven, aldri
  foran.
- **Frekvenstall = §6.2.** Ingen egne opptellinger, ingen «N av M» uten belegg i
  §6.2, ingen omregning, ingen bruk av skjelettets tre spriktall.
- **Begrepsbank = oppslagsverk:** hvert pensumkart åpner med standardnotisen:
  «Begrepsbanken er flashcard-/repetisjonsstoff — den gjentar det du nettopp har
  lest. Hopp trygt over ved førstegangslesing; tidsanslaget for kapitlet gjelder
  kjernestoffet.» `definition`-blokker slettes ALDRI for å «rydde» — de er
  flashcard-kilden.
- **Øktmerking:** alle kapitler med `estimatedMinutes > 45` — altså 0.2, 1.1,
  1.2, 1.3, 1.5, 1.6, 2.1, 2.3, 2.4, 3.1, 3.2, 3.3, 4.1, 4.2, 4.3, 4.4, 4.5,
  4.6, 5.1, 5.2, 6.1, 7.2, 7.3, 7.5, 7.6, 7.7, 7.8 — har tidsanslag i
  underoverskriften («## Kompetansekriteriene (~15 min)») eller eksplisitte
  «— naturlig pausepunkt —»-markører. Lange modellbesvarelser har pausepunkt
  mellom hovedseksjonene. ⚠ Overskriften bærer NAVNET, aldri løkkenummeret (§1).
- **Tidsbudsjett-konsistens:** der en oppgaves deklarerte tid avviker fra summen
  av deltidene, forklares differansen (§6.6). «Lite tid?»-boksen sier eksplisitt
  at kapitlenes tidsanslag er **LESEtid**, og at den som skriver besvarelser for
  hånd bør legge på ca. ×1,5.

### 11.1 Del 0-pakken (alt dette SKAL finnes i kap. 0.1, der ikke annet er sagt)

- **«Slik leser du denne boka»-orienteringsboks** (type `text` eller `tip` —
  **ALDRI `definition`**, det ville endret flashcard-kvoten) med: karakterskalaen
  A–F og hva C, B og A faktisk krever, hva «C-stoff» og «A-markør» betyr, de fire
  sjangrene skrevet fullt ut med kodene i parentes, og at typiske feil har et
  samlet register (#1–#16) med eget kapittel (7.5).
- **«Lite tid?»-boks** (`tip`): hurtigrute for 3–5 dager (kapittelrekkefølge +
  timeanslag; prioriter Del 1 og Del 4 — de to tunge søylene — pluss kap. 0.2 og
  7.5) og ukeplan bygget av summerte `estimatedMinutes`. **Summen av de 34
  kapitlene er eksakt 1 870 minutter ≈ 31 timer lesetid** (verifisert mot
  skjelettet).
- **Kildenote for frekvens-empirien** — ordlyden i §6.1.1, aldri utvidet.
- **Frekvenstabellen** — tallene fra §6.2, med nevneren og enheten skrevet ut:
  rett/samfunn/rettsstat 24 (⚠ mest utgått stoff — 5 terminer moderne) ·
  normtypelæren 22 · rettsfilosofiske hovedposisjoner 22 · argumentasjons- og
  utsagnsteori 16 · lovtekstanalyse 13 · definisjonslære 11 · kritikk av retten
  11 · avveiningsnormer 8 · vaghet og flertydighet 7 · profesjonsetikk 5 (utgått)
  · rettigheter 4 (stigende). Innenfor rettsfilosofien: utilitarisme 17 ·
  kantiansk rettsfilosofi 16 · skandinavisk rettsrealisme 9 ·
  kognitivisme/non-kognitivisme 6. **Alle med nevner 40 terminer.**
- **Sjangerkortet på ÉN side** som ER kortet: sjanger → én linjes oppskrift →
  typisk plassering og vekting → vanligste feil. Ikke en lenkeliste.
- **«Hvem eier hva»-kortet** — begrep → avsender → poeng, for de gjennomgående
  begrepene og posisjonene. Fullversjonen bor i temakapitlenes pensumkart; kortet
  i 0.1 er den glemsomme leserens gjenopptaksverktøy.
- **Gjenbrukstabellen** — de åtte dokumenterte oppgavefamiliene som gjentar seg,
  med terminene, og setningen om at trening på gamle sett derfor er direkte
  eksamensrelevant.
- **Eksamensformens fire regimer** forklart kort, med den eksplisitte setningen
  om at eldre sett viser sjangrene, ikke dagens format — og med
  slutnings-forbeholdet fra §6.6.
- **Utgått pensum-advarselen** (§7.4) med årstall for når hvert stoffområde
  forsvant.
- **Deltidsrute** 10–12 uker med temadelprøvene fordelt underveis og
  modellbesvarelsene + de tre øvingseksamenene de siste to ukene — aldri stablet
  i siste uke.
- **«Lese mye, skrive lite»-boks:** legitim rute for lese-øveren (les oppgaven →
  formuler standpunkt og disposisjon mentalt i to setninger → les
  modellbesvarelsen som sensor) + minimumsrådet: skriv minst ÉN full
  lovtekstanalyse og ÉN full drøfting på tid.
- **Obligatorisk oppgave som inngangsbillett**, og at obligtemaet varsler
  eksamenstema: H2023-obligen handlet blant annet om skillet mellom intern og
  ekstern kritikk, som deretter kom på eksamen samme semester.

---

## 12. Kvotekontrakt (AUTORITATIV — bindende total, aldri overstyr)

Verifisert mot skjelettets kvotesammendrag 3. august 2026: alle deltotaler og
begge totaler summerer, og summen av `estimatedMinutes` er **eksakt 1 870**.

| Del | Kapitler | Quiz | Flashcards | Minutter | Prøver |
|---|---|---|---|---|---|
| 0 | 0.1–0.2 | 28 | 22 | 100 | 0 |
| 1 | 1.1–1.6 | 156 | 156 | 335 | 4 |
| 2 | 2.1–2.4 | 100 | 100 | 225 | 4 |
| 3 | 3.1–3.3 | 70 | 70 | 165 | 4 |
| 4 | 4.1–4.6 | 156 | 150 | 360 | 4 |
| 5 | 5.1–5.3 | 66 | 66 | 155 | 4 |
| 6 | 6.1–6.2 | 44 | 46 | 110 | 4 |
| 7 | 7.1–7.8 | 92 | 65 | 420 | 3 øvingseksamener |
| **Sum** | **34 kap.** | **712 ✓ (≥500)** | **675 ✓ (≥500)** | **1 870** | **24 + 3** |

Per kapittel (quiz · flashcards · minutter) — **minimum, aldri under;
overskyting er lov**:

| Kap. | Q · F · min | Kap. | Q · F · min | Kap. | Q · F · min |
|---|---|---|---|---|---|
| 0.1 | 12 · 10 · 40 | 2.3 | 30 · 32 · 70 | 4.6 | 24 · 18 · 55 |
| 0.2 | 16 · 12 · 60 | 2.4 | 24 · 24 · 55 | 5.1 | 24 · 22 · 55 |
| 1.1 | 26 · 26 · 55 | 3.1 | 24 · 22 · 55 | 5.2 | 24 · 26 · 55 |
| 1.2 | 26 · 24 · 55 | 3.2 | 24 · 24 · 55 | 5.3 | 18 · 18 · 45 |
| 1.3 | 30 · 30 · 70 | 3.3 | 22 · 24 · 55 | 6.1 | 28 · 28 · 70 |
| 1.4 | 22 · 24 · 45 | 4.1 | 24 · 24 · 55 | 6.2 | 16 · 18 · 40 |
| 1.5 | 26 · 24 · 55 | 4.2 | 24 · 26 · 55 | 7.1 | 14 · 10 · 45 |
| 1.6 | 26 · 28 · 55 | 4.3 | 30 · 30 · 70 | 7.2 | 16 · 12 · 70 |
| 2.1 | 26 · 24 · 55 | 4.4 | 24 · 22 · 55 | 7.3 | 14 · 10 · 55 |
| 2.2 | 20 · 20 · 45 | 4.5 | 30 · 30 · 70 | 7.4 | 12 · 8 · 45 |
| | | | | 7.5 | 18 · 10 · 55 |
| | | | | 7.6–7.8 | 6 · 5 · 50 hver |

**Bindende total: quiz 712 · flashcards 675 · 1 870 minutter.** Flashcards telles
som **toppnivå `definition`-blokker med `title`**. Prøvekapitler har ingen kvote
(ingen quiz, ingen begrepsbank). **Utgått pensum genererer null flashcards og
null quiz** (§7.4).

### 12.1 Quiz-filformat

`src/lib/data/quiz-staging/jfexfac04-<del>-<nr>.quiz.json`:

```json
[{ "question": "…", "options": ["riktig", "distraktor", "distraktor", "distraktor"], "explanation": "…" }]
```

Nøyaktig **4 alternativer**, `options[0]` **ALLTID** riktig. **Runtime stokker
rekkefølgen**, så `explanation` skal ALDRI si «alternativ to», «det tredje
alternativet», «svaret over» eller «det siste alternativet» — gjenta innholdet i
stedet: «Riktig svar er at flertydighet er en egenskap ved uttrykket …».
**Posisjonsreferanser er en hard produkteierregel** (verifiseres med
`sjekk-alternativref.py`). Ingen duplikate alternativer. `explanation` på 2–4
setninger sier hvorfor fasiten er riktig OG hvilken felle hver nære distraktor
tester.

**LENGDE-TELL (hard produkteierregel):** fasiten skal **verken være det lengste
eller det korteste** alternativet systematisk. Alle fire alternativer skal ha
jevn lengde og presisjonsgrad — en leser som «velger det lengste» skal treffe
~25 %, ikke 77 %. Skriv distraktorene like fyldige som fasiten; trim heller
fasiten. Verifiseres med `node scripts/hoyskolebok/quiz-lengdesjekk.mjs`, som
flagger over **35 %**.

**Distraktor-kalibrering** — nabobegrep-distraktorer, aldri tullesvar: vaghet mot
flertydighet · pliktnorm mot kompetansenorm · kvalifikasjonsnorm mot
legaldefinisjon · regulativ mot konstitutiv · tillatelse mot fritak ·
kompetansemangel mot pliktbrudd · retningslinje om retning mot om vekt ·
kognitivisme mot non-kognitivisme · handlings- mot regelutilitarisme · Bentham
mot Mill · intern mot ekstern kritikk · formalkritikk mot normativ kritikk ·
holdbarhets- mot relevansargument · de lege lata mot de lege ferenda · gyldig
form mot sunt resonnement. I tillegg: «hvilken posisjon hevder dette»-koblinger,
«hvem eier begrepet»-koblinger (Eng mot Kolflaath, Ross mot Olivecrona, Eriksen
mot Mæhle og Aarli) og «hvilken feil begår denne kandidaten».

### 12.2 Flashcard-profil

Tre korttyper i om lag lik andel:

1. **Begrepskort med avsender og distinksjon** — «hva er X hos Y, og hva skiller
   det fra nabobegrepet Z»: kompetansekriterium ↔ personell/situasjonell/
   innholdsmessig ↔ Eng · definisjonsmåte ↔ kategori-og-tilleggskrav mot
   oppregnende ↔ Kolflaath ⚠ · kritikkform ↔ redskap ↔ Eriksen · rettsstatsverdi
   ↔ innhold ↔ Mæhle og Aarli ⚠.
2. **Posisjonskort** — «posisjon → plassering på kognitivisme-aksen → hva som
   gjør en handling rett → hvilken rettskritikk den kan bære»: skandinavisk
   rettsrealisme · utilitarisme (Bentham og Mill) · kantiansk rettsfilosofi.
3. **Prosedyrekort** — «sjanger/modell → trinnene i rekkefølge»: RED-oppskriftens
   fire trinn · LOV-metodens fem trinn · DRØ-disposisjonen · de fire
   innvendingene mot utilitarismen · de fem sammenligningsaksene · Hohfelds fire
   relasjonspar.

Formatet speiler redegjørelsesspørsmålet (definere presist med avsender) og
lovtekstanalysen (gjenkjenne distinksjonen i en tekst).

---

## 13. Fagspesifikk stil (ufravikelig for JFEXFAC04)

### 13.1 Notasjonsstandard

- **Norsk bokmål. Ingen matematisk notasjon, ingen `$…$` noe sted.** Boka er
  symbolfri, og kravet om «Symbol- og formelliste» er dermed ikke relevant
  (README-unntaket for symbolfrie fag). Hvert temakapittel har `collapsible`
  **«Pensumkart for kapitlet»** i stedet.
- **Dollartegn som ikke er matte MÅ escapes som `\\$`.** Et enkelt bart `$` i en
  streng kutter resten av teksten til rå LaTeX-kilde for leseren. Oddetall `$` i
  samme tekstfelt felles av `sjekk-latex.py`.
- **Tallformat:** norsk desimalkomma, prosent med mellomrom («40 %»). Årstall og
  semestre skrives «H2024» og «V2016» (aldri «h24», aldri «høsten -24»).
- **Lovtekst-skrivemåter:** «første ledd», «andre ledd», «bokstav a», «§ 3»
  (mellomrom etter paragraftegnet), «jf.». Nyskrevne bestemmelser presenteres i
  blokk med leddene på egne linjer.
- **Verktitler** skrives i kursiv i brødtekst og med «anførselstegn» i
  `title`-felter. **Aldri sidetall, aldri utgaveangivelser, aldri kapittelnumre i
  pensumbøker.**
- **Skrivemåter (grep-konsistens):** «norm» · «pliktnorm» · «kompetansenorm» ·
  «kvalifikasjonsnorm» · «gyldighetsnorm» · «avveiningsnorm» · «retningslinje» ·
  «regulativ» / «konstitutiv» · «forbud» / «påbud» / «tillatelse» / «fritak» ·
  «kompetansekriterier» · «personelle» / «situasjonelle» / «innholdsmessige» ·
  «enekompetanse» / «delt kompetanse» / «konkurrerende kompetanse» ·
  «rettsfaktum» / «rettsvirkning» · «koblingsord» · «meningskomponent» /
  «virkelighetskomponent» · «saksinnhold» / «modalitet» · «deskriptivt utsagn» /
  «normativt utsagn» · «de lege lata» / «de lege ferenda» · «vaghet» /
  «flertydighet» · «semantisk» / «syntaktisk» / «pragmatisk flertydighet» ·
  «presisering» · «definiens» · «deskriptiv definisjon» / «normativ (stipulativ)
  definisjon» · «legaldefinisjon» · «karakteristikk» · «presiserbarhet» /
  «operasjonaliserbarhet» / «ikke-sirkularitet» · «standpunktargument» /
  «holdbarhetsargument» / «relevansargument» · «konsekvensargument» · «logisk
  gyldig form» / «sunt resonnement» · «hermeneutisk tolkning» ·
  «korrespondanse-» / «koherens-» / «konsensus-» / «performativ sannhetsteori» ·
  «praktisk fornuft» · «kognitivisme» / «non-kognitivisme» · «skandinavisk
  rettsrealisme» · «sanksjonsanalyse» · «nytteprinsippet» / «konsekvensialisme» ·
  «kvantitativ» / «kvalitativ hedonisme» · «handlingsutilitarisme» /
  «regelutilitarisme» · «sammenligningsproblemet» / «normativitetsproblemet» /
  «rettighetsproblemet» / «begrunnelsesproblemet» · «kategorisk imperativ» ·
  «fornuftsbasert naturrett» · «intern kritikk» / «ekstern kritikk» ·
  «formalkritikk» / «normativ kritikk» / «empirisk kritikk» · «rettssosiologisk
  rettskritikk» · «kjønnsperspektiv» / «kvinnerett» · «rettsstatsidéen» /
  «rettsstatens verdigrunnlag» · «rettssikkerhet» / «menneskeverd» ·
  «menneskerettigheter» · «Hohfelds relasjonspar».

### 13.2 Sjangerkodene (introduseres i kap. 0.1, skrives fullt ut ved første bruk per kapittel)

**Kodene er byggespråk og skal ALDRI stå alene.** Skriv alltid sjangerens navn
først, koden i parentes.

| Kode | Navn som skal brukes | Hva det er |
|---|---|---|
| **RED** | redegjørelsesspørsmålet | «gjør rede for», «forklar», «angi» — presis, avgrenset framstilling av et begrepspar eller en distinksjon. Vanligste enkeltform i hele materialet. Ytterpunkt: kontrollspørsmålsformen (fire av fem korte begrepsforklaringer, H2019). |
| **LOV** | lovtekstanalysen | en konkret bestemmelse gjengitt i oppgaveteksten skal analyseres med norm-, definisjons- og/eller språkteorien. Den moderne signaturoppgaven. |
| **DRØ** | drøftingsoppgaven | «diskuter», «drøft», «vurder holdbarheten av» — krever selvstendig standpunkt med begrunnelse. Tyngst vektet i så godt som alle moderne sett. |
| **CASE** | anvendelsesoppgaven med case-ramme | et faktisk bakteppe og spørsmål som ber om anvendelse av teorien på det. Opptrer én gang i materialet (V2021), men er den eneste sjangeren som ligner en praktikum. |

### 13.3 Feilkodene #1–#16 (glosses ved første bruk PER KAPITTEL)

| # | Feil | Hovedhjem |
|---|---|---|
| #1 | pugget gjengivelse uten forståelse | 0.2, 7.3 |
| #2 | dagligspråklig synsing om fagbegreper | 0.2, 5.2 |
| #3 | å svare på noe annet enn det oppgaven spør om | 0.1, 7.1 |
| #4 | å stoppe ved den overfladiske klassifiseringen | 2.3, 2.4, 7.2 |
| #5 | å behandle sensors klassifisering som fasit | 1.6, 7.2 |
| #6 | å blande vaghet og flertydighet | 2.1 |
| #7 | å sette likhetstegn mellom kvalifikasjonsnorm og definisjon | 1.4, 2.4 |
| #8 | å plassere posisjonene feil på kognitivisme-aksen | 4.1, 4.6 |
| #9 | å behandle utilitarismen som én teori | 4.3, 4.4 |
| #10 | å utelate ett av flere sidestilte delspørsmål | 0.1, 7.1 |
| #11 | å svare på færre enn antallet oppgaven ber om — eller på flere i håp om gevinst | 0.1, 7.4 |
| #12 | å bruke faktisk kunnskap som erstatning for teoretisk analyse | 7.4 |
| #13 | å presse en søkt tolkning på lovteksten | 7.2 |
| #14 | uttømmende opplisting på bekostning av dybde | 2.2, 7.2 |
| #15 | å bruke terminologi man ikke behersker | 3.2, 4.2 |
| #16 | å overse at «norm» og «rettighet» er teoretisk omstridte begreper | 1.1, 1.6 |

**Registeret har nøyaktig seksten koder.** Ikke innfør en syttende noe sted. Hele
registeret gjennomgås i kap. 7.5, og hver feil er hjemlet i minst én navngitt
sensorveiledning — med ærlighetsforbeholdet fra §5.3.

### 13.4 Prioritetsklasser

**høyeste prioritet** (skjelettets «perfekt» — 0.1, 0.2, 1.1, 1.2, 1.3, 1.4, 2.1,
2.3, 2.4, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 5.1, 5.2, 6.1, 7.1, 7.2, 7.3, 7.5, 7.6,
7.7, 7.8) · **kunne** (1.5, 1.6, 2.2, 3.1, 3.2, 3.3, 6.2, 7.4) · **bør kjenne
til** (5.3 og «bør kjenne til»-halene i 3.3, 1.6, 4.1 og 6.2).
Skriv ALDRI «Prioritet: perfekt».

### 13.5 Forbudt-termer og prosaregler (grep-sjekkes)

**Hard port** — `sjekk-bok.py`-regexen skal gi **0 treff** (kjøres
case-insensitivt; skriptet unntar automatisk kap. 0.1, som skal beskrive
kildesituasjonen):

```
Prioritet: perfekt|Sist du var her|som du sikkert husker|du har jo allerede sett|dette kan du fra før|en A-besvarelse ville|en toppbesvarelse ville|ville ha drøftet|studentbesvarelse|offisiell fasit|offisielle fasiter|offisiell løsning|offisielle løsninger|offisielle løsningsforslag|løsningsforslag fra UiO|UiOs løsningsforslag|fasit fra UiO|UiOs fasit|arkivets fasit|sensorveiledningenes fasit|eksamensfasit|autentiske eksamensoppgaver|hentet fra eksamenssettet|gjengitt fra sensorveiledningen|V2013-veiledningen|V2015-veiledningen|H2025-veiledningen|41 termin|alle terminer 2006|alle terminer fra 2006|samtlige terminer siden|ubrutt rekke av terminer|av 43 sett|av 43 oppgavesett\b|\bs\. ?\d+
```

```bash
python3 scripts/hoyskolebok/sjekk-bok.py jfexfac04 "Prioritet: perfekt|Sist du var her|som du sikkert husker|du har jo allerede sett|dette kan du fra før|en A-besvarelse ville|en toppbesvarelse ville|ville ha drøftet|studentbesvarelse|offisiell fasit|offisielle fasiter|offisiell løsning|offisielle løsninger|offisielle løsningsforslag|løsningsforslag fra UiO|UiOs løsningsforslag|fasit fra UiO|UiOs fasit|arkivets fasit|sensorveiledningenes fasit|eksamensfasit|autentiske eksamensoppgaver|hentet fra eksamenssettet|gjengitt fra sensorveiledningen|V2013-veiledningen|V2015-veiledningen|H2025-veiledningen|41 termin|alle terminer 2006|alle terminer fra 2006|samtlige terminer siden|ubrutt rekke av terminer|av 43 sett|av 43 oppgavesett\b|\bs\. ?\d+"
```

Begrunnelse per gruppe:

- `Prioritet: perfekt` er plattformforbud (karakter-realisme, §11).
- Deiksis-uttrykkene peker feil vei — Forkunnskaper-blokka oppsummerer et ANNET
  kapittel (§5.1).
- Meta-fasit-uttrykkene er forbudt fordi drøftelsen skal skrives ut (§10.2).
- «studentbesvarelse» er usant — alle modellbesvarelser er nyskrevne (§10.1).
- Fasit- og løsningspåstandene er usanne: arkivet har **null** løsningsforslag
  (§6.1 pkt. 1).
- **`V2013-veiledningen`, `V2015-veiledningen` og `H2025-veiledningen` omtaler
  dokumenter som ikke finnes** (§6.1 pkt. 4). Dette er den mest sannsynlige
  enkeltfeilen i denne boka, fordi alle tre terminene har oppgavesett og derfor
  står i temalistene.
- `41 termin` og «alle terminer …» bryter H2016-regelen (§6.1 pkt. 2).
- `av 43 sett` / `av 43 oppgavesett` er filtellingen brukt som nevner (§6.1
  pkt. 5).
- `\bs\. ?\d+` fanger sidetall, som ikke er attestert (§7.5).

**⚠ Kildenote-malen (§6.1.1) er testet mot denne regexen og gir null treff.
Beskrivelsen i `BOKCONFIG.json` likeså.** Endrer du malen, kjør testen på nytt:

```bash
python3 - <<'EOF'
import re
RX = r"Prioritet: perfekt|Sist du var her|som du sikkert husker|du har jo allerede sett|dette kan du fra før|en A-besvarelse ville|en toppbesvarelse ville|ville ha drøftet|studentbesvarelse|offisiell fasit|offisielle fasiter|offisiell løsning|offisielle løsninger|offisielle løsningsforslag|løsningsforslag fra UiO|UiOs løsningsforslag|fasit fra UiO|UiOs fasit|arkivets fasit|sensorveiledningenes fasit|eksamensfasit|autentiske eksamensoppgaver|hentet fra eksamenssettet|gjengitt fra sensorveiledningen|V2013-veiledningen|V2015-veiledningen|H2025-veiledningen|41 termin|alle terminer 2006|alle terminer fra 2006|samtlige terminer siden|ubrutt rekke av terminer|av 43 sett|av 43 oppgavesett\b|\bs\. ?\d+"
MAL = open("docs/hoyskole-boker/jfexfac04/BYGGEKONTRAKT.md", encoding="utf-8").read()
# ⚠ Bruk sluttmarkør, ikke et fast tegnvindu: kommentaren rett ETTER malen
# siterer med vilje de forbudte formene («offisielle løsningsforslag», «41
# terminer»), og et for stort vindu gir to falske treff. Testen ble skrevet med
# +2200 tegn først og felte sin egen mal.
s = MAL.index("Boka er kalibrert mot hele JFEXFAC04-arkivet")
e = MAL.index("sjekkes mot UiOs semesterside.", s) + len("sjekkes mot UiOs semesterside.")
print("KILDENOTE:", re.findall(RX, MAL[s:e], re.I) or "ingen — malen er lovlig")
CFG = open("docs/hoyskole-boker/jfexfac04/BOKCONFIG.json", encoding="utf-8").read()
print("BOKCONFIG:", re.findall(RX, CFG, re.I) or "ingen — beskrivelsen er lovlig")
EOF
```

Kjørt 3. august 2026: **KILDENOTE: ingen — malen er lovlig · BOKCONFIG: ingen —
beskrivelsen er lovlig.**

**⚠ Fellen malen er kalibrert rundt:** «offisielle løsningsforslag» er riktig i
sak, men blokkert av porten. Malen sier derfor «ingen fasit og ingen løsninger
fra UiO», som er like sant og passerer. Skriv aldri om malen til den forbudte
formen.

**Prosaregler** — ord som SKAL kunne stå, men bare i en ramme
(`sjekk-prosaregel.py`, ±200 tegn rundt treffet). Alle sju skal være grønne:

```bash
# 1. Sannferdighetsport: entall «sensorveiledningen» krever navngitt termin
#    (de 37 terminene som FAKTISK har veiledning — V2013, V2015 og H2025 er ikke med)
python3 scripts/hoyskolebok/sjekk-prosaregel.py jfexfac04 \
    "sensorveiledningen" \
    "V2006|H2006|V2007|H2007|V2008|H2008|V2009|H2009|V2010|H2010|V2011|H2011|V2012|H2012|H2013|V2014|H2014|H2015|V2016|V2017|H2017|V2018|H2018|V2019|H2019|V2020|H2020|V2021|H2021|V2022|H2022|V2023|H2023|V2024|H2024|V2025|V2026"

# 2. NEVNERPORTEN: enhver «av N»-brøk må bruke en lovlig nevner fra §6.3,
#    med enheten skrevet ut
python3 scripts/hoyskolebok/sjekk-prosaregel.py jfexfac04 \
    "\bav \d+ (sett|oppgavesett|eksamenssett|terminer|eksamensterminer|sensorveiledninger|veiledninger)" \
    "av 40 terminer|av 40 eksamensterminer|av 37 terminer|av 37 sensorveiledninger|av 34 terminer|av 43 oppgavesett-filer"

# 3. Løsningsforslag-porten: ordet kan bare stå der boka sier at slikt IKKE finnes
python3 scripts/hoyskolebok/sjekk-prosaregel.py jfexfac04 \
    "løsningsforslag|modellbesvarelse fra eksamen|ekte kandidatbesvarelse" \
    "ingen|null|finnes ikke|inneholder ikke|har ikke|aldri|ikke er|feiltypet|nyskrev"

# 4. Utgått-pensum-porten (§7.4): de utgåtte begrepene kun i historikk-ramme
python3 scripts/hoyskolebok/sjekk-prosaregel.py jfexfac04 \
    "polysentri|rettslig pluralisme|kommunikativ differensiering|risikosamfunn|profesjonsetikk|juristroller|legitimitetstypologi" \
    "ikke pensum|utgått|historikk|gamle oppgavesett|forsvant|t\.o\.m\.|til og med|ikke lenger"

# 5. H2016-porten: terminen som mangler skal alltid omtales som manglende
python3 scripts/hoyskolebok/sjekk-prosaregel.py jfexfac04 \
    "H2016" \
    "mangler|finnes ikke|ikke i arkivet|hull|verken"

# 6. Filtall-porten: 43 er et filtall og skal alltid stå med «-filer» og med 37 terminer
python3 scripts/hoyskolebok/sjekk-prosaregel.py jfexfac04 \
    "\b43\b" \
    "oppgavesett-filer|filer|dekker 37 terminer"

# 7. Hedge-porten: «noen mener» kun der det finnes en reell uenighet
python3 scripts/hoyskolebok/sjekk-prosaregel.py jfexfac04 \
    "noen mener|mange mener|det hevdes at" \
    "posisjon|omstridt|uenig|debatt|drøft|standpunkt|begge sider|dilemma"
```

Prosaregel 1, 2, 3, 5 og 6 er **sannferdighetsportene** og er de viktigste i
denne boka: entall «sensorveiledningen» er kun riktig om ÉN navngitt veiledning
som faktisk finnes, en brøk med ulovlig nevner er en oppdiktet frekvenspåstand,
ordet «løsningsforslag» brukt om arkivet er usant, en H2016-påstand er en
påstand om en termin ingen har sett, og tallet 43 brukt som nevner teller de
samme eksamenene to ganger.

Prosaregel 7 er **nøytralitetsportens motsatte side**: den fanger tilfeller der
en etablert fagregel pakkes inn i «noen mener» (§8).

### 13.6 Påkrevd terminologi (skal FINNES)

Hele begrepslista i §13.1 «Skrivemåter» er påkrevd terminologi — den er
destillert fra skjelettets begrepskontrakter og analysens §6, og hvert begrep
skal ha minst ett flashcard med avsender.

---

## 14. Kryssbok-lenker (verifisert 3. august 2026 — alle målfilene finnes i `src/lib/data/chapters/` OG er registrert i kursmetadataen)

Bruk NØYAKTIG disse titlene og stiene:

| Kapittel | Lenke | Innramming |
|---|---|---|
| 0.1 | `[Lovdata Pro og rettskildebruk under eksamen](/jus1111/jus1111-0-3)` | «annet emne, men samme hjelpemiddelsituasjon — Lovdata Pro i eksamensmodus» |
| 0.2 | `[Drøftingshåndverket og sensorens fem krav](/exphil03/exphil03-0-2)` | «beslektet drøftingshåndverk i et annet emne; kravene der er EXPHIL03s egne, ikke JFEXFAC04s» |
| 4.1 | `[Realisme, idealisme og en note om metaetikk](/fil1001/fil1001-1-4)` | RANDSONE — moralsk realisme/antirealisme. V2023 gir uttelling til den som trekker dette inn, men det skal ikke gå på bekostning av kjernen |
| 4.3 · 4.4 | `[Mill — utilitarismen og dens forsvar](/exphil03/exphil03-3-3)` | «samme tenker i et annet emne — EXPHIL03 leser Mill som etikk, JFEXFAC04 som rettsfilosofi» |
| 4.5 | `[Kant — den gode vilje, plikt og det kategoriske imperativ](/exphil03/exphil03-3-2)` | samme innramming som over |
| 4.6 | `[Teoritrekanten i praksis — sammenligning og case-anvendelse](/exphil03/exphil03-3-4)` | «sammenligningshåndverk i et naboemne» |
| 7.2 | `[Praktikumsmetoden — fra anførsler til disposisjon](/jus1111/jus1111-0-2)` | **KONTRAST** — normkartet er IKKE et hjemmelskart: ingenting subsumeres, ingenting konkluderes, og det finnes ingen fasit (§7.2) |
| 7.3 | `[Sjanger — redegjør, diskuter kritisk og ta stilling (grunnformen)](/fil1001/fil1001-7-1)` | «beslektet drøftingssjanger i et annet emne» |

Lenken til `jus1111-0-2` rammes ALLTID inn som **kontrast**, aldri som metode:
JUS1111 subsumerer faktum under hjemler og konkluderer; JFEXFAC04 klassifiserer
utsagn og holder flere lesninger åpne. Prosaregel-ideen bak dette står i §7.2.

Lenkene til `exphil03` og `fil1001` rammes inn som «beslektet fag, andre krav».
Mange av leserne har EXPHIL03 bak seg — V2023-veiledningen sier uttrykkelig at
den som trekker inn moralsk realisme/antirealisme derfra skal ha uttelling — så
lenkene er faglig begrunnet, ikke pynt.

**Ingen andre kryssbok-lenker.** Vil du legge til en lenke som ikke står i
tabellen, kjør `ls src/lib/data/chapters/<id>.json` **og** grep etter id-en i
`src/lib/data/textbook-courses*.ts` først — `sjekk-bok.py` avviser døde lenker,
og en død lenke i en live bok er en synlig feil for leseren.

**⚠ Eksplisitt FORBUDTE lenkemål (skjelett finnes, men ingen kapittelfiler på
disk per 3. august 2026):** `svmet1010`, `jus1211`, `jus2111`, `jus1000`,
`fil1003`, `stv1020`. Flere av disse er fristende naboer — **ikke lenk dit**.

Interne lenker skrives som `[kap. 1.3](/jfexfac04/jfexfac04-1-3)` og skal kun
peke på kapitler som allerede er bygget når boka gates. Bygg i skjelettets
rekkefølge (§6 i skjelettet): Del 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → prøver. Merk at
**0.2 må stå ferdig FØR alt annet** (fem kapitler har den som forkunnskap),
**1.4 og 2.4 FØR 7.2**, **4.1 FØR Del 5**, **5.1 FØR 6.1**, og **hele Del 1–6
FØR Del 7**.

---

## 15. Tekniske feller (les før første `json.dump`)

1. **JSON-gyldighet.** Bruk `json.dump`. Faget er fullt av anførselstegn — én
   uescapet anførsel blokkerer hele plattformens prebuild.
2. **Hardt linjebrutt prosa er FORBUDT.** Rendreren gjør hvert enkelt `\n` om til
   `<br />`. Ett avsnitt = én lang linje; `\n\n` mellom avsnitt; enkelt `\n` kun
   der linjeskiftet er ønsket. Gjelder `content`, `problem`, `solution`, `task`
   og `hints`. Ikke bruk trippelfnutt-strenger med innrykk eller `textwrap` på
   brødtekst.
3. **Bart `$` er forbudt** — skriv `\\$`. Oddetall `$` i samme tekstfelt =
   avkuttet tekst = rå kildekode synlig for leseren. Boka har ingen LaTeX i det
   hele tatt (§13.1).
4. **`chapterNumber` alltid del-basert** («1.3»), aldri lineær («7»).
   Prøvekapitler: «1.P».
5. **`difficulty` er `lett` | `middels` | `vanskelig`** — aldri `medium`/`hard`
   (§4). EXPHIL03-kontrakten sier `"medium"`; **ikke kopier den regelen hit.**
6. **Ingen tom `collapsible`.** Feltet heter `content` og skal inneholde blokker.
   En `text`-nøkkel eller `[]` rendrer som en tom boks.
7. **Unike blokk-id-er** innen kapitlet.
8. **Flashcards kommer KUN fra toppnivå `definition` med `title`.** Flytter du en
   definisjon inn i en `collapsible` for å «rydde», forsvinner kortet fra kvoten.
9. **`(verifiser)`-markører** skrives i den literale formen `(verifiser)` (§7.5)
   og løses i fase 6 FØR `sjekk-bok.py` kjøres siste gang.
10. **Ingen `subTasks`, `answer`, `solutionVideo`, `allowsUpload`,
    `allowsCanvasDrawing`** i `exercise`.
11. **Quiz-forklaringer refererer aldri til alternativets plassering** — runtime
    stokker (§12.1).
12. **Ikke bruk `grep -o` med `.{0,N}`-kontekst** mot kapittelfilene: de er
    kompakt JSON på én linje, og mønsteret er kvadratisk (17 GB RAM på
    byggemaskinen 25. juli 2026). Bruk `sjekk-prosaregel.py`, som leser
    JSON-strukturen.
13. **Ikke skriv «Løkke N» i overskrifter eller prosa** (§1).
14. **Ingen markdown i `description`/`title`/`competenceGoals`** (§3.1) — feltet
    havner rått i Google-treffet.

---

## 16. Opphavsrett (ufravikelig)

ALLE oppgaver, bestemmelser, case, «modellbesvarelser», flervalgsspørsmål og
eksempler er **NYSKREVNE** — eksamenssjangrene er malen, ALDRI originaloppgavene.
Ingen formuleringer fra UiO-settene eller fra de 37 sensorveiledningene gjengis
ordrett, heller ikke i omskrevet-nær form.

**Arkivets analyseobjekter gjengis aldri.** De faktiske bestemmelsene arkivet har
brukt — vegtrafikkloven § 34, EMK art. 8, Grunnloven §§ 5, 76, 85, 97, 100, 104,
112, 115 og 121, utlendingsloven § 28, smittevernloven §§ 1-3, 4-8 og 6-1,
bilansvarslova §§ 3–4, FN-pakten, helseforskningsloven § 4 og straffeloven § 185
— **skal ikke gjengis**. De kan nevnes som eksempler på hva slags bestemmelser
sjangeren bruker, men alle analyser er på bokas egne, nyskrevne tekster.

⚠ **Ett unntak, snevert:** kap. 1.3 kan lese Grunnloven § 76 leddvis som
kompetansenorm, slik skjelettets case-forslag angir, fordi bestemmelsen er kort,
allment kjent og strukturelt eksemplarisk. Selv der skrives analysen med egne ord
og uten å kopiere noen oppgavetekst, og resten av kapitlets øvelser er på
nyskrevne bestemmelser.

**Dommene omtales kort, aldri som kanon.** Rt. 2010 s. 1445, Rt. 2015 s. 93
(Maria) og Rt. 2015 s. 1286 (Rolfsen) er analyseobjekter eller eksempler i
arkivet, ikke rettskilder i emnet. Boka bygger **ingen** domskanon; nevnes en dom,
får den 1–2 setningers faktum ved første omtale og ikke mer.

Pensumlitteraturen **refereres og parafraseres** — aldri siteres i lengde, aldri
med sidetall. De etablerte begrepene er faglig allmenneie og forklares under sine
egne navn.

**Tillatte avsendere er uttømmende gitt av §7.3.** **Ingen oppdiktede referanser,
verk, forskere, årstall eller tall.**

Boka fremstiller seg ALDRI som offisiell, godkjent eller UiO-tilknyttet, og lover
ALDRI et eksamensutfall. (Uavhengighetsdeklarasjonen vises automatisk av
plattformen for `level: 'Høyskole'` — se README «Juridiske deklarasjoner».)

---

## 17. BOKCONFIG og wiring (fase 5)

`BOKCONFIG.json` ligger ferdig i denne mappa. Feltene er valgt slik:

```json
{
  "title": "JFEXFAC04 Examen facultatum, rettsvitenskapelig variant",
  "description": "Eksamensrettet lærebok for JFEXFAC04 Examen facultatum ved UiO — kalibrert mot 40 eksamensterminer fra 2006 til 2026: normtypelæren, definisjonslæren, rettsfilosofiske hovedposisjoner, lovtekstanalyse og kritikk av retten",
  "icon": "📜",
  "institusjon": "uio",
  "prøvedeler": [1, 2, 3, 4, 5, 6, 7],
  "sectionNames": { "0": "…", "7": "Eksamenstrening" }
}
```

### 17.1 `description` — HARDT FORMATKRAV, verifisert programmatisk

Kursforsiden parser feltet og splitter det i en ingress, en «Bygget på …»-boks og
emne-chips. Parseren i `src/app/[courseId]/page.tsx`:

```js
description.match(/^(.*?)\s*—\s*kalibrert mot\s+([^:]+?)\s*(?::\s*(.+?))?\.?$/)
// topics: m[3].split(/,\s*|\s+og\s+/)
```

Kjørt mot beskrivelsen over gir den:

| ledd | verdi | krav |
|---|---|---|
| ingress | «Eksamensrettet lærebok for JFEXFAC04 Examen facultatum ved UiO» (62 tegn) | ≤ ~90 ✓ |
| kalibrering | «40 eksamensterminer fra 2006 til 2026» | kort, uten «bygget på»-ord ✓ |
| temaer | normtypelæren · definisjonslæren · rettsfilosofiske hovedposisjoner · lovtekstanalyse · kritikk av retten | 3–6 stk, hver 2–5 ord ✓ |
| samlet lengde | 221 tegn | < 250 ✓ |
| forbudte tegn inne i leddene | ingen `;`, `:` eller `—` | ✓ |

⚠ **Skjelettets forslag til description kan IKKE brukes.** Skjelettets §1 foreslår
«… normtypelæren, definisjons- og språkteori, rett og moral og kritikk av
retten». Parseren splitter temalista på både komma **og « og »**, så den strengen
produserer seks chips der tre er ødelagt: `definisjons-`, `rett`, `moral`.
**Regel: ingen temaledd får inneholde « og » eller en hengende bindestrek.**
Testen:

```bash
python3 - <<'EOF'
import json, re
d = json.load(open("docs/hoyskole-boker/jfexfac04/BOKCONFIG.json", encoding="utf-8"))["description"]
m = re.match(r"^(.*?)\s*—\s*kalibrert mot\s+([^:]+?)\s*(?::\s*(.+?))?\.?$", d)
assert m, "MATCHER IKKE parseren — hele beskrivelsen ville falt ut som én grå tekstblokk"
topics = [t.strip() for t in re.split(r",\s*|\s+og\s+", m.group(3))]
print("len:", len(d), "| ingress:", len(m.group(1)), "| kalibrering:", m.group(2))
print("temaer:", topics)
assert len(d) < 250 and len(m.group(1)) <= 90 and 3 <= len(topics) <= 6
assert not [c for c in d.replace(" — ", "").replace(": ", "", 1) if c in ";—:"]
print("OK")
EOF
```

**Kalibreringsleddet er termin-basert med vilje.** «43 oppgavesett» ville vært et
filtall (§6.1 pkt. 5), og «43 sett» ville telt de samme eksamenene to ganger.
Kildetallene i full bredde hører i `kildegrunnlag.ts` og i kildenoten i kap. 0.1,
ikke i beskrivelsen.

### 17.2 `title` — bærer jus-deklarasjonen

`wire-bok.py` skriver `cfg['title']` både til kursmetadataen og til
`institusjoner.ts`, og kursets `title` er det `HoyskoleDisclaimer` bruker for å
avgjøre om den fagspesifikke jus-linja skal vises:

```js
function erJus(courseId, title) {
  return /^jus/i.test(courseId) || /\brett(s\w*)?\b|juridisk/i.test(title);
}
```

`jfexfac04` starter ikke med «jus». **Skjelettets foreslåtte navigasjonsnavn
«JFEXFAC04 Examen facultatum (jus)» treffer IKKE heuristikken** (testet: `False`)
— da ville setningen «Innholdet er læringsstoff, ikke juridisk rådgivning — sjekk
Lovdata for gjeldende rett» falt bort på et emne der lovtekstanalyse er
signaturoppgaven. Tittelen «JFEXFAC04 Examen facultatum, rettsvitenskapelig
variant» treffer på «rettsvitenskapelig» (testet: `True`) og er dessuten emnets
offisielle navn. **Ikke kort den ned.**

### 17.3 Wiring-sjekkliste (fase 5)

1. `python3 scripts/hoyskolebok/wire-bok.py jfexfac04` — parser 34 kapitler fra
   skjelettet og genererer 7 prøvekapitler. Alle 41 filene må finnes først.
2. **Skriv om prøvekapitlenes auto-tekst** etter tabellen i §2.3 — ordet
   «løsningsforslag» er usant her og felles av prosaregel 3.
3. **Legg til oppføring i `src/lib/data/kildegrunnlag.ts`** med tallene fra §6.1,
   destillert fra analysens §8: 40 eksamensterminer 2006–2026 · 43
   oppgavesett-filer som dekker 37 terminer · 37 sensorveiledninger som dekker 37
   terminer · 34 terminer med begge · **0 løsningsforslag og 0 fasiter**.
   `forbehold`-lista skal inneholde: H2016 mangler helt · V2013, V2015 og H2025
   har ingen veiledning · V2006, H2013 og H2017 har ingen oppgavesett-fil ·
   V2016-settet er en skanning uten tekstlag · H2022-settet mangler Del II og
   V2023-settet mangler vektingssiden, begge må leses fra veiledningen · fem
   veiledninger er utkast eller foreløpige · pensum har skiftet flere ganger.
4. `institusjoner.ts` patches automatisk under `slug: 'uio'` med tittel og ikon
   fra `BOKCONFIG.json`. Verifiser at jus-linja i `hoyskole-disclaimer.tsx` vises
   (§17.2).
5. Verifiser narrativ-ruter (hvis narrativer bygges) med prod-server og curl —
   200, ikke bare at filene finnes.

---

## 18. Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json; json.load(open('…'))"` på HVER fil du har skrevet.
2. **Kvotetelling** mot tabellen i §12 (toppnivå `definition`-blokker med `title`
   + antall quiz-spørsmål) — minimum, aldri under. Total 712 quiz / 675
   flashcards.
3. **Forbudt-termer-grep = 0** (regexen i §13.5), og alle sju prosareglene
   grønne. Kildenote- og BOKCONFIG-testen i §13.5 kjørt hvis noe er endret.
4. **Kryssbok- og internlenker** peker på eksisterende, registrerte filer (§14);
   ingen lenker til de forbudte målene.
5. **Læringsløkke:** `content[]` veksler teori → eksempel → oppgave i løkker med
   `exercise`-blokker INLINE. Unntak: prøve-, sjanger-, modellbesvarelses- og
   øvingseksamenkapitler. Byggespråk-grepet fra §1 gir null treff.
6. **Forkunnskapsdekning:** gå gjennom HVER `exercise` og bekreft at den kun
   hviler på stoff introdusert tidligere i kapitlet eller i en referert
   forkunnskap — ingen usett begrep, normtype, avsender eller sjangerregel.
   Særlig: ingen oppgave i Del 2, 5 eller 6 krever normtyper fra Del 1 uten at
   kapitlet står i forkunnskapene.
7. **Oppfrisket forkunnskap:** kapitlene i tabellen i §5.1 har 2–3
   kjernepåstander VIST, ikke bare lenket; **grep for «Sist du var her» = 0**, og
   ingen overskrift heter «Forkunnskaper — sist du var her».
8. **Pensumkart + oppgaveantall:** HVERT temakapittel (Del 1–6) har `collapsible`
   «Pensumkart for kapitlet» og **4–8 `exercise`-blokker inline**. Tell dem.
9. **`difficulty`** er `lett`/`middels`/`vanskelig` i alle `exercise` — grep for
   `"difficulty": "medium"` og `"difficulty": "hard"` gir null.
10. **Nybegynner-inngang:** alle sjangerkoder (RED/LOV/DRØ/CASE), feilkoder
    (#1–#16) og karakterbokstaver forklart ved første bruk PER KAPITTEL; ingen
    kald kode i `competenceGoals` eller i første tekstboks; Del 0 har «Slik leser
    du denne boka»-boksen (type `text`/`tip`, ALDRI `definition`) og hele
    Del 0-pakken (§11.1).
11. **Eksamenskontrakten:** hver `example.solution`, hver `exercise.solution` og
    hver prøvefasit viser den strukturen sjangeren krever (§6.5), og
    drøftingsfasiter har må-punkter / pluss-punkter / feller. En LOV-fasit uten
    begrunnede klassifiseringer er en byggefeil (#4, #5).
12. **Begrunnelsesregelen (§7.1):** ingen klassifisering står ubegrunnet i noe
    eksempel, modellsvar eller fasit.
13. **Avsenderkoblinger (§7.3):** ingen av glidningene i tabellen forekommer;
    distinksjonene (vaghet/flertydighet, pliktnorm/kompetansenorm,
    kvalifikasjonsnorm/legaldefinisjon, regulativ/konstitutiv, intern/ekstern
    kritikk) er utskrevet der begrepene innføres; ⚠-merkingen er beholdt i
    pensumkartene.
14. **Kalibreringen (§7.4):** ingen kapitler om profesjonsetikk, juristroller,
    polysentri, rettslig pluralisme, internasjonalisering, kommunikativ
    differensiering, risikosamfunn eller miljørettens utfordringer — kun den
    merkede historikk-delen i 6.2, og null flashcards og null quiz på utgått
    stoff.
15. **Kildepåstander (§6.1–§6.3):** hver «N av M» finnes i §6.2, bruker en lovlig
    nevner OG skriver ut enheten; ingen påstand om fasit eller løsningsforslag
    fra UiO; ingen påstand som hviler på V2013-, V2015- eller H2025-veiledningen;
    tallet 43 står bare som filtall i kildenoten; H2016 omtales bare som
    manglende; tallet 24 for samlekategorien står alltid sammen med de fem
    moderne terminene.
16. **De tre spriktallene (§6.2):** grep i alle `jfexfac04-*.json` etter
    `24 av 40`, `9 terminer` og `6 av de siste 8` — null treff. Riktige tall er
    **22 av 40 terminer**, **7 terminer** og **5 av de 8 siste terminene**.
17. **Nøytralitet (§8):** omstridte spørsmål har minst to posisjoner med sin
    sterkeste begrunnelse; etablerte fagregler er presentert som fagregler, ikke
    pakket inn i «noen mener»; ingen policyanbefalinger i bokas egen stemme;
    minst to vippe-case merket «(omstridt — begge forsvarlige)».
18. **Modellbesvarelser:** ærlig merket som nyskrevne; C er en C; midtnivå-B
    finnes i 7.8; 7.6 er en dybde-A og 7.8 en bredde-A med margnotat om at begge
    profiler er A-verdige; 7.7 konkluderer skarpt; meta-fasit-grep = 0.
19. **Prøve-flervalg:** fasitmønsteret varierer (aldri «alle a», aldri «alle
    felle»); prøve-tipen sier hvor flervalget bor; selvdiagnose (☐) etter hver
    fasit; ja/nei-lister av selvstendige påstander bruker romertall (§5.5), og
    alle ekte deloppgaver bruker a), b), c).
20. **hints** utfylt på alle `exercise` unntatt den merkede kalde banken i 7.5;
    første hint røper aldri konklusjonen.
21. **Quiz:** `options[0]` alltid riktig; nøyaktig 4 alternativer; ingen
    posisjonsreferanser i `explanation`; **ingen lengde-tell** (fasiten verken
    systematisk lengst eller kortest).
22. **Øktmerking:** alle kapitler > 45 min har tidsanslag i underoverskriftene
    eller pausepunkter; prøvekapitlene deklarerer «4 prøver à ~20–45 min» +
    deling over flere kvelder; `7-prove` sier at hvert sett kan deles over to
    økter, men at ekte eksamen er sammenhengende.
23. **Feilkode-gloss** ved første bruk per kapittel; ingen kode #17.
24. **Ingen tom `collapsible`**; ingen duplikate blokk-id-er; kap-referanser i
    fasiter og forkunnskaper er markdown-lenker; ingen hardt linjebrutt prosa;
    ingen markdown i `description`/`title`/`competenceGoals`.
25. **Opphavsrett (§16):** ingen av arkivets bestemmelser gjengitt (unntatt
    Grunnloven § 76 i kap. 1.3); ingen ordrette formuleringer fra oppgavetekster
    eller veiledninger; ingen domskanon.
26. **Juridiske deklarasjoner:** innholdet fremstiller seg ALDRI som offisielt
    eller UiO-tilknyttet, lover aldri eksamensutfall, og all omtale av
    kildegrunnlaget følger §6.1 ordrett i sak.
27. **Porter grønne før ferdigmelding:**

```bash
python3 scripts/hoyskolebok/status-bok.py jfexfac04
python3 scripts/hoyskolebok/sjekk-latex.py jfexfac04
python3 scripts/hoyskolebok/sjekk-fasitfordeling.py jfexfac04
python3 scripts/hoyskolebok/sjekk-alternativref.py jfexfac04
python3 scripts/hoyskolebok/sjekk-statiskflervalg.py jfexfac04
python3 scripts/hoyskolebok/sjekk-bok.py jfexfac04 "<forbudt-regex fra §13.5>"
# de sju prosareglene fra §13.5
node scripts/hoyskolebok/quiz-lengdesjekk.mjs
npm run build
```
