# Byggekontrakt: EXFAC03-HARK Examen facultatum for historie, arkeologi og konservering (UiO) — teknisk kontrakt for kapittelforfattere

Gjelder ALLE forfatter-agenter som bygger kapitler til `exfac03-hark`. Faglig
innhold styres av `SKJELETT.md` (Talldisiplin-seksjonen + identitetsseksjonen
§1–§2 + per-kapittel-kontraktene i §3) — les ditt kapittels avsnitt ORDRETT, og
`EKSAMENSANALYSE.md` ved behov. Denne kontrakten definerer format, sjangerkrav,
kildepåstander, tall, formkalibrering og kvalitetsporter.

**Ved faglig konflikt vinner SKJELETT.md. Ved format-, sjanger-, tall-, kilde-
eller formkalibreringskonflikt vinner denne kontrakten.** Instansiert fra
`../BYGGEKONTRAKT-MAL.md`.

⚠ **Fire av skjelettets tall er etterregnet og holder ikke**, og ett av dem er
gjentatt seks steder. Sjangerbankens størrelse, «en tredel av eksamen»,
«fire av fire ordinære terminer» og nevneren 3 er rettet i **§20**. **§6.2 er den
ENESTE lovlige kilden til «N av M»-påstander i boka**, og **§6.2.1 er den eneste
lovlige kilden til hvilke kapitler som kan påberope seg hvilken oppgavetekst.**
Sprikene står dokumentert i §20 med utregningen, så ingen «retter» dem tilbake.

**Emnets navn.** Emnet heter **EXFAC03-HARK — Examen facultatum for historie,
arkeologi og konservering** og undervises ved Institutt for arkeologi,
konservering og historie (IAKH), Universitetet i Oslo. Emnekoden `EXFAC03-HARK`
skrives alltid ut — den er bokas viktigste søkeord. Emnet er **10 studiepoeng**,
undervises og eksamineres **kun om høsten**, er obligatorisk for programmene det
betjener, og har **180 plasser** per høst (UiOs emneside). Karakterskala **A–F**.
⚠ **Kulturhistorie hører ikke i emnenavnet** — det er en studentgruppe
H2024-veiledningen navngir, ikke en del av tittelen (hard port, §14.5).

**Leseren er i sitt første semester.** H2024-veiledningen beskriver kullet
direkte: arkeologi- og kulturhistoriestudentene tar emnet i 1. semester,
historiestudentene i 3. semester og har derfor bedre forutsetninger,
konserveringsstudentene varierer. Sensor bes uttrykkelig om å utvise skjønn på
grunn av skjevheten. **Boka skrives for førstesemesterstudenten** — ingen
faguttrykk uten forklaring ved første bruk, og ingen forutsetning om at leseren
kjenner en faghistorisk debatt fra før (§10).

**Arketype: drøfting** (`../DNA-drofting.md`) — **ren, ingen lån fra andre
arketyper.** Emnet er formelfritt, uten regning, uten rettskilder og uten
praktikum. Alle seks oppgavesjangre er drøftingsarketypens egne former. Emnets
**signaturapparat** er likevel fagspesifikt og bygges her: **periodenettet**
(kap. 1.2, fylt ut gjennom Del 2, ferdig som ett oppslagskort i studieguiden) og
**den lange linjen i sju trinn** (kap. 7.3), apparatet som gjør en sjutrinns
tendens skrivbar på én side i stedet for to lange.

**Nærmeste bygde søskenbøker:** `exphil03` (34 kapittelfiler, live) og
`svexfac03` (53 kapittelfiler, live). Kopier **arbeidsmåte og formkrav** derfra
— **aldri faglig innhold**, og lenk bare dit §15 sier.

### Fem forskjeller fra søskenbøkene som endrer byggingen

1. **Bokas største enkeltrisiko er formkalibreringen.** Emnet la om fra ESSAY til
   MAPPE, og **bare én av de seks dokumenterte terminene (H2024) beskriver den
   formen studenten faktisk møter**. Fem terminer dokumenterer et regime som ikke
   finnes lenger, og H2023 — der omleggingen må ha skjedd — mangler helt. §7 er
   denne bokas strengeste seksjon og har egen hard port.
2. **1 750 ord er en SLUTNING, ikke et belegg.** Tallet er UiOs 5 000-ordsgrense
   minus gruppeoppgavens 1 500, delt på to. Boka regner ordbudsjetter med det,
   så det er skjelettets mest belastede slutning. §7.4 binder hvordan det
   skrives, med egen port.
3. **Arkivet er ett av de tynneste i katalogen: 6 terminer, 6 filer.** SVEXFAC03
   har 22 terminer og 29 filer, JUROFF1500 har 34 terminer og 48 filer. Med 6
   terminer er forskjellen mellom «4 av 6» og «3 av 6» én oppgavetekst.
   **Frekvenstallene viser hva som har vært prøvd, aldri hva som kommer** (§6.3).
4. **Emnet har aldri hatt en flervalgsdel.** Arkivet inneholder null
   flervalgsspørsmål. Bokas quiz- og flashcardbank er et **lesehjelpemiddel for
   et stort pensum**, ikke en simulering av en eksamensdel — og det skal stå i
   klartekst to steder (§7.7).
5. **Boka er formelfri.** Ingen matematikk, ingen `$…$` (§14.1). Kravet om
   «Symbol- og formelliste» er ikke relevant (README-unntaket for symbolfrie
   fag) — hvert temakapittel har `collapsible` **«Pensumkart for kapitlet»** og
   til slutt `collapsible` **«Begreps- og avsenderliste»** i stedet.

---

## 1. LÆRINGSLØKKE-KONTRAKT (ufravikelig byggekrav — produkteier 9. juli 2026)

Fra skjelettets topp, tatt inn her som bindende byggekrav:

- HVERT kapittels `content[]` struktureres som gjentatte SMÅ løkker
  **Teori → Eksempel → Oppgave**, én løkke per begrep/teoribit:
  1. begrepet med navngitt avsender eller periode (`definition`, evt. + `text`
     om posisjoner og drøftingsaksen), →
  2. `example` som viser begrepet BRUKT — skrevet slik en god redegjørelse eller
     drøfting ville skrevet det, med koblingen **begrunnet**, aldri bare
     konstatert, →
  3. `exercise` INLINE i `content[]` rett etter eksempelet (plattformen renderer
     inline oppgaver), →
  4. neste begrep.
- **ALDRI** all teori øverst med oppgavene samlet nederst, og aldri alle
  definisjonene i én bolk fulgt av alle eksemplene. Grupper til meningsfulle
  biter — ikke én oppgave per setning.
- **Ingen usett forkunnskap:** ingen oppgave får kreve et begrep, en periode, en
  avsender eller en sjangerregel som ikke er introdusert tidligere i SAMME
  kapittel (t.o.m. eksempelet rett foran) eller i et tidligere kapittel referert
  i Forkunnskaper-blokka. Særlig utsatt her: **ingen oppgave i Del 2 får kreve
  periodenettet** uten at kap. 1.2 står i forkunnskapene, **ingen oppgave i Del 6
  får kreve hermeneutikken** uten at kap. 4.4 er referert, og **ingen oppgave i
  Del 7 får kreve et periodekapittel** som ikke står i forkunnskapene.
- **Unntak:** prøvekapitlene, sjangerkapitlene (7.1–7.7) og
  modellbesvarelseskapitlene (7.8–7.10) følger sin egen arketype — komplett
  bestilling først, løsninger i `collapsible`.
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer
  REKKEFØLGEN.

⚠ **Underoverskrifter er ALDRI byggespråk.** «Løkke», «Bolk», «Blokk», «Runde»,
«Sekvens», «Modul», «Iterasjon» er byggeplanens ord, ikke leserens. Overskriften
skal si hva avsnittet handler om, pluss tidsanslaget:

```
✗ ## Løkke 3 — Horisontsammensmeltning (~15 min)
✓ ## Horisontsammensmeltning (~15 min)
```

Vis til tidligere avsnitt ved NAVN, aldri ved nummer («da vi gikk gjennom
kontrastleddet», ikke «i løkke 2»). «Løkke» er ikke et fagord i dette emnet, så
**all** bruk er byggespråk. Fire former har sluppet gjennom tidligere ryddinger —
tall i overskrift, liten forbokstav i prosa, bokstav i stedet for tall, og
tabellkolonnen `| Løkke |`. Kjør denne før ferdigmelding og forvent null treff:

```bash
grep -rnE '#{2,4}[[:space:]]*Løkke|[Ll]økke[[:space:]]+[0-9A-ZÆØÅ]|\| Løkke \|' \
  src/lib/data/chapters/exfac03-hark-*.json
```

---

## 2. Filplassering og filantall

Ett JSON-dokument per kapittel:
`src/lib/data/chapters/exfac03-hark-<del>-<nr>.json` (prøvekapitler:
`exfac03-hark-<del>-prove.json`). Quiz til
`src/lib/data/quiz-staging/exfac03-hark-<del>-<nr>.quiz.json`.

IKKE rør `_registry.json`, `_all.json`, `textbook-courses*.ts`, `quiz-data*.ts`
eller `src/app/trinn/hoyere/institusjoner.ts` — wiring gjøres sentralt med
`scripts/hoyskolebok/wire-bok.py exfac03-hark` (fase 5). Generer ALLTID JSON via
python `json.dump`: faget er fullt av anførselstegn («den lange søvnen», «vi» mot
«de andre», «fordom», «planke», «ordnaboene», «myk» mot «hard» humaniora, «gjør
rede for») — én uescapet anførsel har tidligere blokkert hele plattformens
prebuild.

**45 filer totalt:** 38 innholdskapitler (skjelettets §3) + 7 prøvekapitler
(`exfac03-hark-1-prove` … `exfac03-hark-7-prove`). Wiringen genererer
prøvekapitlenes metadata selv fra `BOKCONFIG.json` (`prøvedeler`) — filene må
finnes, men skal ikke listes i skjelettets §3.

### 2.1 Skjelettet ER i v3-format (verifisert 6. august 2026)

`wire-bok.py` parser skjelettet med `^#### Kapittel (\d+\.\d+):\s*(.+)$` og
`\*\*id:\*\* \`(exfac03-hark-\d+-\d+)\``. Kjørt mot `SKJELETT.md` med parserens
egen kode:

| kontroll | resultat |
|---|---|
| kapitteloverskrifter parset | **38 av 38** |
| `id:`-felter parset | **38 av 38** |
| tomme `description`-felt | **0** |
| `description` med LaTeX, fet skrift eller backticks | **0** |
| `- **Description:**` uten tom linje etter | **0** |
| `prerequisites` uten backticks eller utenfor bokas id-er | **0** |
| sum `estimatedMinutes` | **2 140** (stemmer med kvotesammendraget) |
| `sectionNames` funnet fra del-overskriftene | alle 8 (del 0–7) |
| `python3 scripts/hoyskolebok/sjekk-skjelett.py exfac03-hark` | **KVALITETSPORT OK** |

Ingen v3-konvertering er nødvendig. **Endrer du skjelettet, kjør begge testene på
nytt før fase 5.** Tre detaljer må overleve enhver senere redigering:

1. **`prerequisites` MÅ stå i backticks.** Parseren plukker dem med
   `` re.findall(rf"`({emne}-\d+-\d+)`", …) `` — uten backticks finnes de ikke.
   «ingen» skrives uten (gjelder kun kap. 0.1).
2. **Tom linje etter `- **Description:**`-blokka.** Uten den blør beskrivelsen
   inn i `**Eksamensbelegg:**` — samme mekanisme som ga 53 avkuttede
   kursbeskrivelser i tidligere bøker.
3. **Kapittel-JSONs eget `description` overstyrer skjelettet** (parseren
   foretrekker kapittelfila). Fyll det derfor alltid ut **ordrett likt** begge
   steder. ⚠ **Ett unntak: kap. 7.6**, der skjelettets description er rettet i
   §20 sprik 2 — der er kontraktens tekst den bindende.

⚠ **Kosmetisk avvik som IKKE skal «rettes»:** `sjekk-skjelett.py` teller
«6 prøve-kvote-linjer» fordi den leter etter `**Prøve-kvote Del N`, og Del 7s
kvote står som overskrift (`### Prøve-kvote Del 7 (Eksamenstrening) — …`) i
stedet for i fet skrift. Porten er grønn, prøvedelene er sju, og alle sju
prøvekapitler skal bygges. SVEXFAC03 har nøyaktig samme avvik. **La den stå.**

### 2.2 Prøvekapitlene og de to hardkodingene i plattformen

**1. `wire-bok.py` linje 94 genererer prøvekapitlenes beskrivelse** og kan ikke
overstyres fra skjelettet. Ordlyden per 6. august 2026:

> «Fire prøver som dekker del N (…) på eksamensnivå, med fullstendige løsninger
> skrevet av oss.»

To konsekvenser:

- **«Fire prøver» er en hardkoding, ikke en anbefaling.** Hvert av de sju
  prøvekapitlene MÅ ha nøyaktig fire `collapsible`-prøver. Skjelettets §4 gir
  fire per del for del 1–6 (24 prøver) og fire for Del 7 — **én sjangerprøve
  pluss tre øvingsmapper** — nettopp derfor ligger sjangerprøven først. Fjerner
  du den, lyver beskrivelsen leseren møter. Totalt **28 prøver**.
- **Auto-teksten er sannferdig i dagens form** («fullstendige løsninger skrevet
  av oss» — ikke «løsningsforslag»), og trenger ingen omskriving. ⚠ **Men den er
  et script, ikke en garanti:** kjør `grep -n "Fire prøver" scripts/hoyskolebok/wire-bok.py`
  i fase 5, og hvis ordet «løsningsforslag» har kommet tilbake, skriv om de sju
  beskrivelsene til «… med fulle momentliste-fasiter, skrevet av oss.» Arkivet
  har null løsningsforslag (§6.1), og koblingen «eksamensnivå +
  løsningsforslag» er nøyaktig den lesningen §6.1 bruker hele seksjonen på å
  avvise.

**2. Kursbeskrivelsens temaliste splittes på BÅDE komma og « og ».** Se §18.1 —
`BOKCONFIG.json` er allerede testet mot parserens egen regex og gir fem
velformede chips.

---

## 3. Kapittel-JSON (toppnivå)

```json
{
  "id": "exfac03-hark-4-4",
  "courseId": "exfac03-hark",
  "chapterNumber": "4.4",
  "title": "…(fra skjelettet, ordrett)…",
  "description": "…(fra skjelettet, ordrett)…",
  "estimatedMinutes": 65,
  "competenceGoals": ["kunne bruke Gadamers fem begreper til å gjøre et konkret arbeid i en analyse, ikke bare gjengi hva de betyr", "…"],
  "content": [ "…blokker…" ],
  "exercises": []
}
```

- **`chapterNumber` er ALLTID del-basert** (`<del>.<nr>`: `0.1`, `4.4`, `7.10`) —
  **ALDRI lineær** («14»). Prøvekapitler: `<del>.P`. Dette er enkeltfeilen som
  ødelegger navigasjonen i en hel bok (PRODUKSJONSLØYPE-lærdommen fra JUS1111).
- `title` og `description` tas **ordrett** fra skjelettet (unntak: kap. 7.6, §20).
- `competenceGoals`: 2–4 «kunne …»-formuleringer destillert fra kapitlets
  begrepskontrakt. Dette er **Skolesagas EGNE** mål — ALDRI kopi av UiOs
  offisielle læringsutbyttebeskrivelser. UI-et deklarerer kilden automatisk.
- **Ingen kald kode i `competenceGoals`** — ikke «EPO», ikke «LIN», ikke «#13»,
  ikke «A-markør» eller «C-stoff» uten forklaring.

### 3.1 `description`, `title` og navigasjonsfelt er REN TEKST (UFRAVIKELIG)

`title`, `description`, `topics`/`sectionNames` og `competenceGoals` rendres
**RÅTT**. `description` havner uendret i `<meta name="description">`,
`og:description` og `twitter:description` — altså i **Google-treffet og i
lenkeforhåndsvisningen** — og i den synlige kroppen på kapittelsiden. Markdown
rendres aldri der. 122 kapitler i 17 bøker viste `$…$` og `**fet**` i Google før
dette ble oppdaget.

```
✗ Gadamers **fire** begreper, og hvorfor «fordom» er en $positiv$ veiviser.
✓ Gadamers fire begreper, og hvorfor fordom er en positiv veiviser.
```

Ingen `$…$`, ingen `**fet**`, ingen `*kursiv*`, ingen backticks, ingen
markdown-lenker i disse feltene. Verktitler skrives med «anførselstegn», aldri
kursiv. Markdown hører kun hjemme i
`content`/`problem`/`solution`/`task`/`hints`.

Skjelettets 38 descriptions er kontrollert mot denne regelen: **ingen inneholder
LaTeX, fet skrift eller backticks.** Enkelte inneholder komma og tankestrek, som
er ren tekst og helt lovlig — det er bare `BOKCONFIG.json`-beskrivelsen som har
et hardt tegnkrav (§18.1).

⚠ **Metadataen må holdes i synk for seg.** `description` i
`textbook-courses*.ts` skrives fra skjelettet, mens kapittelfila er autoritativ.
Retter du bare det ene stedet, står det andre igjen — `econ1100-3-1` hadde to
helt forskjellige setninger. `sjekk-bok.py` blokkerer på markdown i
`description`.

---

## 4. Blokktyper (eksakte felt — strukturreferanse: `src/lib/data/chapters/exphil03-3-3.json`)

- `text`: `{id, type: "text", content}` — markdown-prosa.
- `definition`: `{id, type: "definition", title, content}` — **`title`
  OBLIGATORISK**. Flashcards genereres KUN fra **toppnivå** `definition`-blokker
  med `title` (en definisjon nøstet inne i en `collapsible` teller IKKE).
  I EXFAC03-HARK er `title` enten en **kobling begrep ↔ periode** («Teleologisk
  historiesyn — middelalderen», «Universalisme og stadietenkning —
  opplysningstiden», «Kulturarkeologi og den lange søvnen») eller en **kobling
  begrep ↔ avsender** («Fordom (Gadamer)», «Digital epistemologi (Ingvarsson)»,
  «Objektet som numerisk verdi (Bastiansen)», «Konservering som
  teoretisk-praktisk konstruksjon (Hölling)»). Åpne innholdet med forklaringen i
  ORD, lukk med **distinksjonen mot nabobegrepet** (historisme mot hermeneutikk,
  materielt mot funksjonelt kildesyn, nærlesning mot fjernlesning, positivisme
  mot relativisme, fordom i dagligspråk mot fordom hos Gadamer, kulturarkeologi
  mot post-prosessuell arkeologi, brudd mot kontinuitet) og med det stedet i en
  oppgave der begrepet gjør arbeid.
- `theorem`: `{id, type: "theorem", title, content}` — brukes **sparsomt**, til
  modeller som skal stå som én enhet: periodenettets seks kolonner,
  sjutrinnsapparatet, epokekarakteristikkens firetrinnsform,
  avgrensningsoppgavens tre ledd, faghistorieoppgavens fem trinn, Gadamers fem
  begreper, revisjonsrubrikken fra kap. 0.3. Ikke pynt — dette er ikke et
  regnefag.
- `example`: `{id, type: "example", title, problem, solution}` — `solution`
  skrives som en **god redegjørelses-, anvendelses- eller drøftingsdel**, aldri
  som referat, og har ALLTID koblingen BEGRUNNET, ikke bare konstatert (§9.1).
- `tip` / `warning`: `{id, type, title, content}`.
- `exercise`: `{id, type: "exercise", exercise: {id, number, type: "classic",
  difficulty: "lett"|"middels"|"vanskelig", task, solution, hints: []}}`.
  ⚠ **`difficulty` har nøyaktig tre lovlige verdier: `lett`, `middels`,
  `vanskelig`.** IKKE `medium`, IKKE `hard`, IKKE `easy` — det er plattformens
  engelske interne verdier, og fem kapitler i en søskenbok måtte rettes fordi en
  agent brukte dem. (EXPHIL03-kontrakten sier `"medium"` overalt; **den regelen
  gjelder IKKE her** — ikke kopier den.) Verdien skrives aldri inn i `task`.
  ALDRI `solutionVideo`, `allowsUpload`, `allowsCanvasDrawing`, `answer` eller
  `subTasks` (deloppgaver skrives inn i `task`/`solution`, se §12).
- `collapsible`: `{id, type: "collapsible", title, buttonText, content: [blokker]}`
  — feltnavnet er `content` og det skal inneholde BLOKKER. En `text`-nøkkel eller
  tom array rendrer som en tom boks og er en byggefeil.

Blokk-id-er: `<kapittel-id>-<løpenavn>` (f.eks. `exfac03-hark-4-4-def-fordom`),
unike i kapitlet. Duplikate blokk-id-er felles av kvalitetsporten.

**Grep-sjekk før ferdigmelding:**

```bash
grep -l '"difficulty": *"\(medium\|hard\|easy\)"' src/lib/data/chapters/exfac03-hark-*.json
# skal gi null treff
```

---

## 5. Obligatorisk kapittelstruktur

### 5.1 Alltid først, i denne rekkefølgen

1. `tip` **Eksamensvinkel** — frekvens, sjangre og typiske bestillinger, med de
   EKSAKTE tallene fra **§6.2 i denne kontrakten**, med **nevneren og enheten
   skrevet ut** (§6.3) og med **regimet oppgitt**. **Forfatteren skal ALDRI finne
   på frekvenstall og aldri regne om dem.** ⚠ I kapitler som sier noe om hva
   mappa krever, står **formrammen fra §7.2 i samme boks**.
2. `text` **Forkunnskaper** — kapitler i boka som markdown-lenker
   (`[kap. 1.2](/exfac03-hark/exfac03-hark-1-2)`) + eventuell kryssbok-lenke fra
   §15. «Dette kapitlet kan leses uten forkunnskaper» der skjelettet sier
   `prerequisites: ingen` (kun 0.1).

**Oppfrisket forkunnskap (bindende).** I kapitler med stor avstand til
forkunnskapen SKAL Forkunnskaper-blokka **VISE 2–3 kjernepåstander ferdig
oppfrisket**, ikke bare lenke:

> **Fra kap. 1.1:** humaniora som eget felt er noe som kommer til etter ca.
> 1800; før det handler spørsmålet om hvordan kunnskap om mennesket og synet på
> fortiden ble formulert og avgrenset.
> **Fra kap. 1.2:** rutenettet har seks kolonner — menneskesyn, kunnskapssyn,
> institusjon, grense mot nabofeltet og synet på fortiden — og radene leses
> vertikalt, fordi kontrasten mot forrige periode er halve bestillingen.

⚠ **Frasen «Sist du var her» er FORBUDT** (grep-sjekkes, §14.5), **også i
overskrifter**. Blokka oppsummerer et ANNET kapittel — den kan ikke si «her», og
en lærebok vet ikke hva leseren har gjort. Mange lesere hopper rett til det
kapitlet de er reddest for. Overskriften skal være **`## Forkunnskaper`**, ikke
«Forkunnskaper — sist du var her» (246 kapitler i ni bøker hadde den formen, og
første rydding fant den ikke fordi den sto med liten forbokstav midt i en
overskrift).

| ✗ | ✓ |
|---|---|
| Sist du var her sto dette … | Dette sto der … |
| Sist du var her (fra kap. 1.2): | Fra kap. 1.2: |
| Som du husker fra kap. 2.3 … | I kap. 2.3 står … |
| Da vi gikk gjennom dette sist … | I gjennomgangen i kap. 2.3 … |

Samme forbud rammer «som du sikkert husker», «du har jo allerede sett», «dette
kan du fra før».

**Kapitler der oppfrisket forkunnskap er OBLIGATORISK** (stor avstand til
forkunnskapen, utledet av skjelettets `prerequisites`):

| Kapittel | Hva som skal stå ferdig oppfrisket |
|---|---|
| 1.1 | fra 0.2: hva en avgrensning er, og at bestilling og problemstilling ikke er det samme |
| 2.1 | fra 1.2: rutenettets seks kolonner, med menneskesyn og kunnskapssyn skrevet ut |
| 3.1 | fra 1.1: hva som skal til for at noe er et eget kunnskapsfelt; fra 2.3: at kildekritikken oppstår i renessansen |
| 3.2 | fra 2.5: at humaniora blir et eget felt først etter ca. 1800 |
| 3.3 | fra 2.6: hva strukturalisme og de nye samfunnsvitenskapene la av press på de historiske fagene |
| 4.1 | fra 2.3: renessansens tidlige kildekritikk |
| 4.2 | fra 2.5: historismens ideal i én setning; fra 4.1: skillet materielt mot funksjonelt kildesyn |
| 5.1 | fra 3.2: at grensedragningen fikk både erkjennelsesmessige og metodiske følger |
| 5.2 | fra 5.1: hva de-kontekstualisering er; fra 4.2: historismens ideal |
| 6.1 | fra 2.7: hva som skjer med kildens status etter 1970 |
| 6.4 | fra 5.3: arkeologiens tidfesting, og at fagene ikke går i takt |
| 7.1 | fra 0.2: at avgrensningen er et eget, vurdert trinn; fra 2.7: kontrastleddet |
| 7.3 | fra 2.7: de sju trinnene i rekkefølge |
| 7.5 | fra 4.4: Gadamers fem begreper; fra 6.2: hva N-gram viser og ikke viser |
| 7.6 | fra 6.4: hva et åpent spørsmål til en samling er |
| 7.8–7.10 | oppgavens sjangerkrav i tre punkter, hentet fra sitt sjangerkapittel |

### 5.2 Temakapittel (Del 1–6, 25 kapitler) — DNA-drøfting + skjelettets per-kapittel-DNA

Etter eksamensvinkel og forkunnskaper går kapitlet i LÆRINGSLØKKER (§1). Disse
blokkene skal finnes, fordelt i løkkene — ikke stablet:

- `text` **Temaet i emnets landskap** — hvilket spørsmål temaet svarer på.
  Abstrakte kjernetemaer åpner med et **hverdagsanker FØR apparatet** (§12).
- `definition` **kjernebegreper** — flashcard-kilden, toppnivå med `title`, hvert
  begrep forankret i periode eller avsender fra skjelettets begrepskontrakt, og
  hvert med **distinksjonen mot nabobegrepet** utskrevet. Distinksjonene ER
  redegjørelseskravet (feil #1, #3).
- `text` **posisjoner og spenninger** — kapitlets drøftingsakser fra skjelettet,
  skrevet slik at leseren har råstoff til BEGGE sider.
- `example` **anvendelse** ×1–3 — case-forslagene fra skjelettet, nyskrevet, hver
  med eksplisitt **begrep + begrunnet kobling + drøfting**.
- **`exercise` ×4–8 INLINE — hardt minimum fire, hardt tak åtte.** Fordeling:
  minst én `lett` innstegsoppgave tidlig (ren gjengivelse med egne ord), 1–2
  redegjørelsesoppgaver, 1–2 kontrast- eller plasseringsoppgaver, og minst én
  flerleddet oppgave i mappeformat med momentliste. Minst én oppgave per temadel
  har `difficulty: "vanskelig"`. ⚠ **Ingen oppgave er en tidtaking** (§7.6).
- `warning` **Typiske feil** — feilkodene fra skjelettets «Typiske feil»-linje,
  **glosset i klarspråk ved første bruk PER KAPITTEL**: «(feil #8 — å behandle
  Gadamers «fordom» som noe negativt: hos Gadamer er fordommen den
  forforståelsen som gjør at teksten i det hele tatt sier deg noe)».
- `tip` **A-markør** — det grepet som løfter svaret fra god (C) til beste (A) i
  akkurat dette temaet, med kapitlets drøftingsakse navngitt eksplisitt.
  Obligatorisk i ALLE temakapitler.
- `collapsible` **Pensumkart for kapitlet** — markdown-tabell
  `| Avsender eller verk | Begrep de «eier» | Distinksjonen | Hvor det brukes på eksamen |`.
  Åpner med begrepsbank-notisen (§12). ⚠-merkede koblinger beholder forbeholdet
  (§9.2). **Kun de ni bidragene i §9.2** — ingen andre.
- `collapsible` **Begreps- og avsenderliste** — SIST i kapitlet. Emnet er
  formelfritt, så «Symbol- og formelliste» blir her en markdown-tabell
  `| Begrep | Betydning |` over alle begreper brukt i delkapitlet, pluss en kort
  «Avsendere i dette delkapitlet»-liste. Første linje: «Oppslagsverk — alt her
  forklares underveis i kapitlet.» ⚠ `sjekk-bok.py` krever «Symbol- og
  formelliste» bare i kapitler som faktisk bruker LaTeX-symboler (verifisert i
  koden), og denne boka bruker ingen — derfor er navnet fritt, men **listen skal
  stå**: den er oppslag, ikke inngang.
- `collapsible` **Repetisjon** — 4–6 korte spørsmål fra forkunnskapskapitlene.

### 5.3 Fast tilleggskontrakt for Del 2 (kapitlene 2.1–2.7)

Ufravikelig, fra skjelettets Del 2-innledning:

1. Hvert kapittel **fyller ut sin rad i periodenettet** — menneskesyn ·
   kunnskapssyn · institusjon · grense mot nabofeltet · synet på fortiden — som
   en `text` eller `theorem` med samme kolonnerekkefølge i alle sju kapitler.
2. Hvert kapittel har et eget, kort avsnitt **«Hva som skiller denne perioden fra
   den forrige»**. Kontrastleddet er halve bestillingen i epokekarakteristikken
   og står skrevet inn i selve oppgaveteksten i **3 av de 11
   oppgavetekst-forekomstene**.
3. **Kapitlene 2.1–2.4 gjentar tesen** om at humaniora som felt ikke finnes ennå
   (feil #6). Kap. 2.4 er siste gjentakelse.
4. ⚠ **Takhøydeklausulen skal stå i kap. 1.2 og gjentas i kap. 7.3:**
   H2021-veiledningen sier uttrykkelig at det finnes mange måter å organisere
   stoffet på, og at studentens egen inndeling skal møtes med stor takhøyde.
   Sjutrinnsrekka er **ett brukbart oppsett**, aldri den eneste riktige
   inndelingen. Formuleringen «slik emnet selv deler det inn, og du står fritt
   til å dele annerledes hvis du begrunner det» skal stå første gang nettet
   presenteres.

### 5.4 Fast tilleggskontrakt for Del 5 (kapitlene 5.2, 5.3 og 5.4)

Hvert fag behandles med **samme fire spørsmål**, i samme rekkefølge, slik at
leseren kan sammenligne dem: (1) når blir faget et eget kunnskapsfelt, (2)
hvilket vitenskapelig ideal henter det, (3) hvilke metoder følger av idealet,
(4) **når** plukker faget opp den bredere utviklingen i humaniora. Det fjerde
spørsmålet er det som skiller fagene, og det er nøyaktig det H2024-veiledningen
bruker mest plass på. **Tosporstidslinjen** (humaniora på ett spor, faget på det
andre, forskyvningen målt i tiår) innføres i kap. 5.3 og brukes i kap. 7.4.

### 5.5 Sjanger- og håndverkskapitler (0.1, 0.2, 0.3, 7.1–7.7)

1. `tip` Eksamensvinkel — sjangerens frekvens (tall fra §6.2).
2. `text` **Oppskrift** — trinnvis disponering med **ordbudsjett**, ikke
   tidsbudsjett (§6.6 og §7.6).
3. `example` **gjennomskrevet besvarelse** med margkommentarer om hva som gir
   uttelling hvor. Margkommentarer skrives som egne linjer i `solution`:
   `> Margnotat: her sier kontrastleddet hva som endret seg fra forrige periode, i stedet for å beskrive perioden på nytt — det er dette grepet som løfter fra C.`
4. `exercise` ×3–6 nyskrevne oppgaver, løsning = **momentliste** strukturert som
   **minimumskrav / gode besvarelser / sterke besvarelser / feller**, aldri som
   sjekkliste. Antallet per sjangerkapittel er fastsatt i skjelettet: 7.1 fire
   øvingsoppgaver, 7.2 fire pluss grensetilfellebanken på seks fagområder, 7.3
   fire, 7.4 fire, 7.5 fire (hvorav én merket **kald bank uten hint**), 7.6 fire,
   7.7 tolv gjenkjenningsutdrag.
5. `warning` Typiske feil + `collapsible` med sjangerens sjekkliste (§6.4).

⚠ **Alle treningsoppgaver i Del 7 har to obligatoriske trinn** som ingen annen
bok i katalogen krever, fordi mappa er reviderte tekster (§7.6): et
**avgrensningstrinn** som vurderes for seg, og en **revisjonsrunde** mot
rubrikken fra kap. 0.3.

Kap. **0.1** har Del 0-pakken (§12.1), kildenoten (§6.1.1), sjangerkortet på ÉN
side og quiz-ærligheten (§7.7).
Kap. **0.2** har ordbudsjett-boksen med regnestykket (§7.4) og
**vippe-casen**: to avgrensninger som begge er fullt forsvarlige, der fasiten
skriver ut begge og sier hva hver av dem koster.
Kap. **0.3** etablerer bokas to mantraer (§6.7), **revisjonsrubrikken** (§6.4) og
E-, C- og A-versjonen av samme korte bestilling.

Kap. **7.7 (feilvaksinen)** har én seksjon per feil #1–#14, alle fire ledd:
(a) feilen slik veiledningen formulerer den, med hvilken termin den er hjemlet i,
(b) et nyskrevet «slik ser den ut i en besvarelse»-utdrag, (c) samme passasje
omskrevet slik den skulle vært, (d) en varsellampe leseren kan kjenne igjen i
egen tekst. Deretter gjenkjenningsdrill på **tolv nyskrevne besvarelsesutdrag**
med stokket fasit — aldri samme feilkode som fasit to ganger på rad — der leseren
skal identifisere feilen og **reparere tre av dem**. ⚠ **Tre av de tolv
utdragene inneholder ingen feil**, og fasiten sier hvorfor de er forsvarlige.

⚠ **Ærlighetsforbeholdet SKAL stå i 7.7s åpning og der registeret først
presenteres i Del 0:** sensorveiledningene uttrykker sensors
**forhåndsforventninger**, ikke observerte feil. **To unntak, begge i H2024
oppgave 1** — at ubalansen i tidfestingen mellom fagene «kan ha skapt litt
usikkerhet», og at pensumet er for stort og vanskelighetsgraden har vært høy for
mange. Disse to er **rapporterte observasjoner**. ⚠ **#13 er utledet**, ikke
sitert. ⚠ **#14 gjelder bare dem som velger podkastformatet.**

Kap. **7.7** gjentar også **raushetskontrakten** (§6.4), fordi et feilregister
lest alene skaper nøyaktig den panikken H2024-veiledningen advarer mot.

### 5.6 Modellbesvarelseskapitler (7.8–7.10)

1. `text` med den nyskrevne oppgaven, formulert slik den ville stått i en
   mappebestilling, pluss ærlighetslinjen fra §11.1 og ordbudsjettet med
   slutningsmerkingen fra §7.4.
2. `collapsible` **A-besvarelse** — full, sammenhengende tekst med margnotater og
   «— naturlig pausepunkt —» mellom leddene.
3. `collapsible` **Kommentert C-besvarelse** — samme oppgave, korrekt men flat,
   med notater om gapet opp til A rammet inn som **oppgraderingsmeny**, ikke
   mangelliste.
4. **Kap. 7.8 skal i tillegg ha `collapsible` «Autentisk midtnivåbesvarelse»** —
   se §11.3. Dette er et README-krav og gjelder minst ett sted i boka.
5. `tip` **Sensorblikket** — momentliste strukturert som minimumskrav / gode
   besvarelser / sterke besvarelser, anvendt på akkurat denne oppgaven, med den
   eksplisitte setningen om hvorfor C-versjonen ikke ble B, og med avkryssbar
   selvdiagnose (☐).
6. `warning` **Typiske feil** — feilene C-versjonen demonstrerer (skjelettet
   angir dem: 7.8 → #10, #3, #2 · 7.9 → #8, #7, #11, #3 · 7.10 → #12, #4, #14).
   Kravet om `warning`-blokk gjelder også disse kapitlene; tittelen
   «Modellbesvarelse» fritar dem IKKE i kvalitetsporten.

⚠ **Alle tre modellbesvarelseskapitlene speiler H2024s tre mappeoppgaver, og
alle tre hviler derfor på ett sett.** Formrammen fra §7.2 skal stå i hvert av
dem, i oppgavens innledning.

### 5.7 Prøvekapitler (`exfac03-hark-<del>-prove`, del 1–7)

Id `exfac03-hark-<del>-prove`, `chapterNumber` `<del>.P`, tittel «Prøver til del
<del>: <deltittel>».

Struktur: `tip` (dekning + «4 prøver à ~25–45 min» + «kan trygt deles over flere
kvelder — én prøve per økt» + hvor flervalget bor) + `text` Forkunnskaper +
**fire** `collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med
nyskrevne oppgaver og full fasit. **Prøvenes tema og oppgavetyper per del står i
skjelettets §4 — følg dem punkt for punkt.**

⚠ **Minuttanslaget er et ARBEIDSOMFANG, ikke en tidtaking.** Prøvene deklarerer i
tillegg et **ordbudsjett** der skjelettet oppgir ett (600, 700, 800 og 500 ord),
og prøve-tipen sier at prøvene trygt kan deles over flere kvelder. Ingen prøve
ber leseren skrive noe «på tid» (§7.6, hard port).

**Fasitstruktur** (obligatorisk i hver prøvefasit):

> **Minimumskrav** (uten disse når svaret ikke E-terskelen) · **Gode
> besvarelser** (det som gir C–B) · **Sterke besvarelser** (det som gir A —
> begrunnelsen, argumentene begge veier, den utskrevne alternative lesningen) ·
> **Feller** (det veiledningene faktisk sier skal trekke, med feilkode).

⚠ **Nivåbeskrivelsene er UTLEDET av karakterbeskrivelsen i H2020 og av
belønningskriteriene i de fire sensorveiledningene — ikke observert.** Arkivet
inneholder ingen A- eller C-eksempler. Det skal stå der nivåene presenteres
første gang i hvert prøvekapittel (§11.1, port i §14.5).

Etter hver prøvefasit: **avkryssbar selvdiagnose-sjekkliste (☐)** — bruk
rubrikkene i §6.4. Kap-referanser i fasitene som markdown-lenker. **Ingen quiz og
ingen begrepsbank i prøvekapitler.**

⚠ **Ja/nei- og riktig/galt-lister:** `sjekk-statiskflervalg.py` leser `a) b) c)
d)` under et nummerert spørsmål som et flervalg. Er listen et sett med
SELVSTENDIGE påstander (ikke deloppgaver av én oppgave), bruk romertall
**(i), (ii), (iii)** — det er nummerering av påstander, ikke listemerking av
deloppgaver. Dette treffer særlig **prøve 2 i del 1** (anakronismedrillen, ti
setninger der seks er forsvarlige), **prøve 2 i del 4** (fordomsdrillen, åtte
setninger) og **prøve 1 i del 7** (sjanger- og feilgjenkjenning). Beholder du
a)–e), sjekk portens tall mot en manuell telling før du «retter» noe. **Dette er
det ENESTE stedet romertall er tillatt.** Deloppgaver merkes alltid **a), b),
c)** (§12).

### 5.8 Prøvekapitlet i Del 7 (`exfac03-hark-7-prove`)

`chapterNumber` `7.P`. **Fire prøver, i denne rekkefølgen** — antallet er
hardkodet i beskrivelsen wiringen genererer (§2.2):

1. `collapsible` **«Prøve 1 — sjanger- og feilgjenkjenning (~30 min)»:** 20
   nyskrevne flervalg fordelt over de seks sjangrene og de fjorten feilene.
   Fasitbokstavene er stokket. ⚠ **Prøve-tipen sier eksplisitt at
   flervalgsformatet er bokas eget verktøy og ikke speiler noen eksamensdel**
   (§7.7).
2. `collapsible` **«Prøve 2 — øvingsmappe A: de individuelle arbeidene»** — to
   bestillinger, én faghistorisk og én hermeneutisk med digital undersøkelse,
   ordbudsjett om lag 1 750 ord hver ⚠ (slutning, §7.4). Leseren leverer
   problemstilling for begge **før** hun skriver, og reviderer begge etter
   rubrikken.
3. `collapsible` **«Prøve 3 — øvingsmappe B: hele mappa i miniatyr»** — alle tre
   arbeidene i redusert omfang (700 + 700 + 600 ord) med et samlet ordbudsjett
   som må holdes. Formålet er å trene **fordelingen** mellom arbeidene.
4. `collapsible` **«Prøve 4 — øvingsmappe C: sjangerbanken fra det utgåtte
   regimet»** — fire bestillinger bygget på sjangerbanken (§8.2): en
   epokekarakteristikk, en avgrensningsoppgave, en lang linje fram til ca. 1800
   og en lang linje over 1900-tallet. ⚠ **Prøven sier eksplisitt til leseren hva
   den er:** formen er fra et regime som ikke finnes lenger, men håndverket er
   det samme.

Videre:

- `tip` **Slik tar du disse mappene** øverst — ordbudsjett, at hver mappe skal
  skrives over dager og ikke timer, og at hvert arbeid skal gjennom **én
  revisjonsrunde** mot rubrikken fra kap. 0.3 før leseren leser fasiten.
- Fasitene er momentlister strukturert som minimumskrav / gode besvarelser /
  sterke besvarelser, med nivåbeskrivelse per ledd og **utledet-merkingen**.
- Avkryssbar **selvdiagnose-sjekkliste (☐)** etter hver fasit.

---

## 6. EKSAMENSKONTRAKTEN (fagets kjerne — bindende for alle løsninger og modellsvar)

Alt i denne seksjonen etableres i Del 0 (kap. 0.1–0.3) og refereres i resten av
boka. Det er dette som gjør at mange forfattere skriver samme bok.

### 6.1 Kildegrunnlaget og TALLDISIPLINEN

Tallene er **talt i emnemappa**, ikke hentet fra en indekskolonne, og etterprøvd
ved å åpne alle seks filene (analysens § 2). De er gjengitt her fordi denne
kontrakten er porten forfatteren leser.

| Fakta | Tall |
|---|---|
| **Eksamensterminer dokumentert** | **6** — 4 ordinære + 2 utsatte |
| Årsspenn | 5 kalenderår, 2020–2024 |
| Vårterminer | **0** — emnet undervises og eksamineres kun høst |
| **Filer i emnemappa** | **6** — ingen md5-dubletter |
| Tekstlig unike dokumenter | **5** — to filer er ordrett like bortsett fra årstallet |
| **Sensorveiledninger** | **4** — H2020, H2021, H2022, H2024 |
| **Rene oppgavesett uten veiledning** | **2** — H2020 utsatt, H2021 utsatt |
| **Løsningsforslag / modellbesvarelser / fasiter fra UiO** | **0 — finnes ikke** |
| **Flervalgsspørsmål bevart** | **0** — emnet har aldri hatt flervalgsdel |
| Terminer med oppgavetekst | **6 av 6** |
| Terminer med sensorveiledning | **4 av 6** |
| **Oppgavetekst-forekomster over de 6 terminene** | **11** |
| **Unike oppgavetekster** | **10** — 9 fra kjent termin + 1 uten kjent termin |
| **Terminer i gjeldende mappe-regime** | **1** — H2024 |
| **Terminer i utgått essay-regime** | **5** — H2020 t.o.m. H2022 |
| **Arbeider i mappa** | **3** — 2 individuelle + 1 gruppearbeid |

**Kontrollsummer (regn dem etter — de skal gå opp hver gang boka bruker et tall):**

- 4 sensorveiledninger + 2 rene oppgavesett = **6 filer** ✓
- 4 ordinære + 2 utsatte = **6 terminer** ✓
- 5 terminer i utgått regime + 1 i gjeldende = **6 terminer** ✓
- Forekomster: H2020 2 + H2020-utsatt 2 + H2021 1 + H2021-utsatt 2 + H2022 1
  + H2024 3 = **11** ✓
- 11 forekomster − 2 ordrette gjentakelser = **9 unike fra kjent termin**;
  + 1 uten kjent termin = **10 unike oppgavetekster** ✓
- Sjangerklyngene: EPO 3 + AVG 2 + LIN 2 + FAG 1 + MET 1 + GRP 1 + dualisme 1
  = **11 av 11** ✓
- Sjangerbanken fra det utgåtte regimet: 8 forekomster, 6 unike; 6 + 3 fra H2024
  = **9 unike fra kjent termin** ✓ (§8.2 — dette er skjelettets største
  regnefeil, se §20 sprik 1)

**Ti ufravikelige konsekvenser:**

1. **Ordene «fasit» og «løsningsforslag» kan ALDRI brukes om arkivet.** UiO har
   publisert null av begge deler for dette emnet. Det som finnes, er
   **sensorveiledninger** (4 stykker). Boka sier «sensorveiledning» når den mener
   det, og omtaler sine egne modellbesvarelser som **nyskrevne** — aldri som ekte
   studentbesvarelser eller offisielle løsninger. Ordene er fortsatt lovlige i
   bokas egne sammenhenger («prøvefasit», «fasiten skriver ut begge lesningene»);
   det er koblingen til arkivet og til UiO som er forbudt. Prosaregel-kontrollert
   (§14.5, port 5).
2. **Sju lovlige nevnere, og bare sju** (§6.3). Står tallet ikke der, skal det
   ikke skrives i boka.
3. **Enheten skrives alltid ut.** «4 av 6 terminer», aldri «4 av 6». Uten enhet
   vet ikke leseren om det telles terminer, forekomster, filer eller
   veiledninger — og det er nettopp der utv1000 og inter1000 gikk i grøfta.
4. **Nevneren 1 skal aldri skjules og aldri gjøres om til prosent.** Boka skal
   ikke skrive «i gjeldende regime prøves X i 100 % av terminene» — det er sant
   og verdiløst. Den skal skrive «den ene dokumenterte mappeeksamenen (H2024) ba
   om X».
5. **Sensorkrav har nevner 4 sensorveiledninger.** Ingen påstand om hva sensor
   belønner eller straffer kan bygge på H2020-utsatt eller H2021-utsatt — de er
   rene oppgavesett uten veiledning. Formuleringene «H2019-veiledningen»,
   «H2023-veiledningen», «H2025-veiledningen» og «H2020-utsatt-veiledningen»
   omtaler dokumenter som ikke finnes og er **hardt forbudt** (§14.5).
6. **Filtelling og oppgavetelling er ikke det samme.** Seks filer gir fem
   tekstlig unike dokumenter og ti unike oppgavetekster. De to utsatte settene
   er ordrett like bortsett fra årstallet, og teller som **én** oppgavepar-tekst
   i sjangerbanken, men som **to** terminer.
7. **Den tiende oppgaveteksten har ingen kjent termin.** H2022-fila inneholder en
   oppgavetekst og en sensorveiledning som ikke gjelder samme oppgave.
   Veiledningen kommenterer en tredelt hermeneutikkoppgave. Den oppgaveteksten
   telles i de **10 unike**, men **ikke** i de **11 termin-forekomstene**, og
   forbeholdet skal stå i boka — ikke skjules (prosaregel 8, §14.5).
8. **Temafrekvens rangerer ikke.** Med 6 terminer er forskjellen mellom «4 av 6»
   og «3 av 6» én oppgavetekst. Frekvenstallene viser hva som **har vært prøvd**,
   aldri hva som **kommer**. Boka skal si dette der den viser tallene.
9. **Lavfrekvens er ikke lav viktighet.** Digitale metoder (Del 6), museer
   (kap. 6.4) og den filosofiske dualismen (kap. 3.1) står 1 av 6 hver. De to
   første står der utelukkende fordi de er **nye i dagens format** — de er de
   eneste temaene som er dokumentert i formatet studenten faktisk møter. Å
   skrive dem ned ville vært den groveste feilen boka kunne gjort. Dualismen står
   der fordi et tema med lav frekvens i et arkiv på seks terminer ikke er et
   lavfrekvent tema, men et tema vi har for lite data om.
10. **Ingen påstander om strykprosent, karakterfordeling eller
    sensurstatistikk.** Materialet inneholder ingenting om det, og ingen
    veiledning viser hva en besvarelse på et gitt nivå faktisk inneholder
    (hard port, §14.5).

**Fire ting som IKKE står i arkivet, og hvor de kommer fra.** Disse er hentet fra
**UiOs emneside**, ikke fra kildematerialet, og skal merkes slik der de brukes:

| Opplysning | Kilde | Hvordan den skrives |
|---|---|---|
| **Maks 5 000 ord for hele mappa** | UiOs emneside | alltid med kilden i samme setning; port 3 i §14.5 |
| **1 750 ord per individuelt arbeid** | ⚠ **SLUTNING** fra 5 000 minus 1 500, delt på to | alltid med regnestykket synlig og ordet «slutning»; **egen port**, §7.4 |
| **180 plasser per høst** | UiOs emneside | kun der kullstørrelse er relevant; **aldri utled et kulltall** fra at 40 studenter deltok på H2024-ekskursjonen |
| **Emnets offisielle navn** | UiOs emneside | «Examen facultatum for historie, arkeologi og konservering» — kulturhistorie er studentgruppe, ikke emnenavn (hard port, §14.5) |

⚠ **Indeksene er ikke kilde for dette emnet.** `TERMINER.csv` har riktig
radantall (6), men `har_fasit=ja` på 4 rader betyr «har sensorveiledning», og
`oppgavefiler=0` for alle fire ordinære terminer betyr ikke at oppgaveteksten
mangler: alle fire veiledningene gjengir den. **Oppgaveteksten mangler for null
terminer, ikke fire.**

### 6.1.1 Kildenote-mal for kap. 0.1

Bruk denne ordlyden — tilpasset i språk, **aldri i tall**. Malen er testet mot
forbudt-regexen i §14.5 og gir **null treff** (testen står i §14.5).

> Boka er kalibrert mot hele EXFAC03-HARK-arkivet ved UiO: **6 eksamensterminer
> fra høsten 2020 til høsten 2024**, fire ordinære og to utsatte, dokumentert
> gjennom **4 sensorveiledninger** og **2 rene oppgavesett** — til sammen 6
> filer. Oppgaveteksten foreligger for alle seks terminene, fordi
> sensorveiledningene gjengir den. Det gir **11 oppgavetekst-forekomster** og
> **10 unike oppgavetekster**: to tekster er gitt ordrett to ganger, og én tekst
> finnes uten kjent termin.
> **Arkivet inneholder ingen fasit og ingen løsninger fra UiO for dette emnet.**
> Det som finnes, er sensorveiledninger, og de beskriver hva sensor forventer —
> ikke hva kandidater faktisk gjorde. Alt du finner av modellbesvarelser,
> momentlister og prøvefasiter i denne boka, er skrevet av oss.
> **Og det viktigste forbeholdet, som du har krav på å vite før du bruker boka:**
> eksamensformen ble lagt om mellom høsten 2022 og høsten 2024. **Fem av de seks
> terminene er skrevet til et essay-regime som ikke finnes lenger, og bare én
> termin — høsten 2024 — dokumenterer mappa du selv skal levere.** Høsten 2023
> mangler helt, så omleggingen kan ikke dateres. Boka er kalibrert mot mappa for
> form, omfang og arbeidsmåte, og bruker de eldre oppgavetekstene som sjangerbank
> for skrivehåndverket. Alt boka sier om hva mappa krever, hviler derfor på ett
> sett.
> **Emnet har aldri hatt en flervalgsdel, og arkivet inneholder ingen
> flervalgsspørsmål.** Quiz- og flashcardbanken i denne boka er skrevet av oss
> som lesehjelp for et stort pensum, ikke som en simulering av en eksamensdel.
> **Forbehold:** ingenting fra før høsten 2020 og ingenting etter høsten 2024
> finnes, og emnet er eldre enn arkivet. At mappa samlet kan være på maks 5 000
> ord, står på UiOs emneside og ikke i arkivet — sjekk semestersiden for ditt
> semester. Ingen vekting mellom mappas tre arbeider er oppgitt noe sted. Verken
> pensumutgave, årstall eller sidetall er oppgitt i materialet.

⚠ **Fellen malen er kalibrert rundt:** «offisielle løsningsforslag» er riktig i
sak, men blokkert av porten. Malen sier derfor «ingen fasit og ingen løsninger
fra UiO», som er like sant og passerer. En annen felle er nær: «boka har ikke
trent på tidligere flervalgsoppgaver» er også sant, men står i forbudt-regexen —
en negasjon som inneholder påstanden, overlever ikke skumlesing og overlever ikke
et søkemotorutdrag. Skriv det positivt: «skrevet av oss». **Skriv aldri om malen
til noen av de forbudte formene, og legg aldri til «alle eksamener» eller et
årstall utenfor 2020–2024.**

### 6.2 AUTORITATIV frekvenstabell per kapittel

**Regelen: tallet er ALLTID antall LISTEDE terminer eller forekomster i
belegg-lista.** Ikke et anslag, ikke en omregning. **Enheten SKAL skrives ut, og
regimet skal oppgis der tallet gjelder ett bestemt regime.**

Alle 38 kapitlers frekvenspåstander er etterregnet mot belegg-listene sine
6. august 2026. **De temafrekvens- og forekomsttallene skjelettet oppgir per
kapittel, stemmer** — de fire sprikene i §20 gjelder avledede tall, ikke
belegg-listene.

| Kap. | Bindende påstand (nevner og enhet skrevet ut) |
|---|---|
| 0.1 | metakapittel — hele grunnlaget: **6 terminer**, **4 sensorveiledninger**, **11 oppgavetekst-forekomster**, **10 unike oppgavetekster**, **5 terminer i det utgåtte regimet**, **1 termin i gjeldende**, **3 arbeider i mappa** |
| 0.2 | avgrensning og problemstilling er eksplisitt krav i **2 av mappas 3 oppgaver** (H2024-1 og H2024-3); H2022-veiledningen gir arkivets mest presise disponeringsinstruks |
| 0.3 | sensorkravene — **4 sensorveiledninger**; karakterbeskrivelsen A–F finnes **kun i H2020**, altså i **1 av de 4 sensorveiledningene** |
| 1.1 | periodisering og epokekarakteristikk **6 av 6 terminer** · humanioras avgrensning **4 av 6 terminer** |
| 1.2 | menneskesyn og menneskelige fellesskap som eget tema **2 av 6 terminer** (H2020, H2021), men aksene løper gjennom alle **6 av 6** · H2022-veiledningen ber om **sju trinn** |
| 1.3 | avgrensning av humaniora **4 av 6 terminer** (H2020-utsatt, H2021, H2021-utsatt, H2024) |
| 2.1 | periodisering **6 av 6 terminer** · første trinn i sjutrinnsrekka |
| 2.2 | periodisering **6 av 6 terminer** · andre trinn |
| 2.3 | periodisering **6 av 6 terminer** · kildekritikk, historisme og kildesyn **2 av 6 terminer** |
| 2.4 | H2020-1 gitt som eget oppgavealternativ = **1 av 11 forekomster** · positivisme, enhetsvitenskap og relativisme **4 av 6 terminer** |
| 2.5 | romantikken gitt som eget oppgavealternativ i **2 av 11 forekomster** (H2020-utsatt-1 og H2021-utsatt-1, **ordrett like**, altså **1 av de 10 unike oppgavetekstene**) |
| 2.6 | H2022s oppgavetekst = **1 av 11 forekomster** · positivisme m.m. **4 av 6 terminer** · fagenes etablering **2 av 6 terminer** ⚠ **deler forekomsten med kap. 2.7** (§6.2.1) |
| 2.7 | drøftingsleddet i samme H2022-oppgave = **samme 1 av 11 forekomster som kap. 2.6** ⚠ **skal ikke telles på nytt** (§6.2.1) |
| 3.1 | avgrensningsbestillingen gitt ordrett i **2 av 11 forekomster** (H2020-utsatt-2 og H2021-utsatt-2, ordrett like) · avgrensning **4 av 6 terminer** · filosofisk dualisme **1 av 11 forekomster** (H2020-2) og **1 av 6 terminer** |
| 3.2 | premisset i H2024-1 = **1 av 11 forekomster** · avgrensning **4 av 6 terminer** |
| 3.3 | positivisme, enhetsvitenskap og relativisme **4 av 6 terminer** · H2022-veiledningens sjutrinnsbestilling |
| 4.1 | kildekritikk, historisme og kildesyn **2 av 6 terminer** (H2021, H2024) |
| 4.2 | kildekritikk og historisme **2 av 6 terminer** · kontrastfigur til Gadamer, hjemlet i H2024-veiledningen |
| 4.3 | hermeneutikk **2 av 6 terminer** ⚠ (H2022 **via veiledningen, uten kjent oppgavetermin**, og H2024) · hele innholdet i **den tiende oppgaveteksten** |
| 4.4 | kjernen i H2024-2 = **1 av 11 forekomster** · hermeneutikk **2 av 6 terminer** ⚠ (samme forbehold) |
| 5.1 | H2024-1 = **1 av 11 forekomster** · fagenes etablering **2 av 6 terminer** (H2022, H2024) |
| 5.2 | ett av de tre fagene i H2024-1 (**samme forekomst som 5.1**) · fagenes etablering **2 av 6 terminer** |
| 5.3 | ett av de tre fagene i H2024-1 (**samme forekomst**) · arkeologi er dessuten nevnt i H2022s oppgavetekst |
| 5.4 | ett av de tre fagene i H2024-1 (**samme forekomst**) · fagenes etablering **2 av 6 terminer** |
| 6.1 | digitale metoder og digital epistemologi **1 av 6 terminer** (H2024), og **2 av mappas 3 oppgaver** innpasser det digitale · eksplisitt nytt av året i H2024 |
| 6.2 | kjernen i den digitale halvdelen av H2024-2 = **1 av 11 forekomster** · **1 av 6 terminer** · **2 av mappas 3 oppgaver** |
| 6.3 | digital epistemologi **1 av 6 terminer** (H2024, gruppeoppgaven) · **2 av mappas 3 oppgaver** |
| 6.4 | H2024-3 = **1 av 11 forekomster** · museer, samlinger og kulturarv **1 av 6 terminer** · **2 av mappas 3 oppgaver** |
| 7.1 | epokekarakteristikken **3 av 11 forekomster** (H2020-1, H2020-utsatt-1, H2021-utsatt-1) — men **2 av de 10 unike oppgavetekstene**, siden to av dem er ordrett like · periodisering **6 av 6 terminer** |
| 7.2 | avgrensningsoppgaven **2 av 11 forekomster**, **1 av de 10 unike oppgavetekstene** · avgrensning **4 av 6 terminer** ⚠ deler forekomstene med kap. 3.1 |
| 7.3 | den lange linjen **2 av 11 forekomster** (H2021, H2022) **pluss den tiende oppgaveteksten** · UiOs læringsmål om de lange linjene er berørt i **4 av 4 ordinære terminer** ⚠ **se §20 sprik 3 — dette er læringsmålet, ikke sjangeren** |
| 7.4 | faghistorieoppgaven **1 av 11 forekomster** (H2024-1) **pluss H2022s oppgavetekst** · fagenes etablering **2 av 6 terminer** |
| 7.5 | metodeanvendelsen **1 av 11 forekomster** (H2024-2) **pluss ledd 2 i den tiende oppgaveteksten** |
| 7.6 | gruppeoppgaven **1 av 11 forekomster** (H2024-3) — **ett av mappas tre arbeider** ⚠ **ikke «en tredel av eksamen»**, se §20 sprik 2 |
| 7.7 | feilregisteret — **14 feil**, destillert fra **4 sensorveiledninger**; **2 av 6 terminer** har ingen veiledning |
| 7.8 | speiler H2024-1 = **1 av 11 forekomster** |
| 7.9 | speiler H2024-2 = **1 av 11 forekomster**, sjangermessig identisk med den tiende oppgaveteksten |
| 7.10 | speiler H2024-3 = **1 av 11 forekomster** |

### 6.2.1 ⚠ Hvem eier hvilken oppgavetekst — den eneste lovlige tilordningen

**Flere kapitler bygger på SAMME oppgavetekst-forekomst.** Legges tallene sammen
på tvers av kapitler, får man flere forekomster enn arkivet har — det er nøyaktig
inter1000-feilen («6 av de 9 settene» + «0 av de 7 før» = 16 av 15) og
SVEXFAC03s H2024-3-kollisjon. Tabellen er **uttømmende**:

| # | Forekomst | Klynge | Kapitler som kan påberope seg den |
|---|---|---|---|
| 1 | **H2020-1** opplysningstiden | EPO | 0.1, 2.4, 7.1 |
| 2 | **H2020-2** filosofisk dualisme | dualisme | 0.1, 3.1 |
| 3 | **H2020-utsatt-1** romantikken | EPO | 2.5, 7.1 |
| 4 | **H2020-utsatt-2** avgrensning | AVG | 3.1, 7.2 |
| 5 | **H2021** humaniora fram til ca. 1800 | LIN | 1.1, 1.2, 7.3 |
| 6 | **H2021-utsatt-1** romantikken (ordrett lik #3) | EPO | 2.5, 7.1 |
| 7 | **H2021-utsatt-2** avgrensning (ordrett lik #4) | AVG | 3.1, 7.2 |
| 8 | **H2022** 1900-tallet og postmodernismen | LIN | 2.6, 2.7, 5.3, 7.3, 7.4 |
| 9 | **H2024-1** fagenes etablering | FAG | 3.2, 5.1, 5.2, 5.3, 5.4, 7.4, 7.8 |
| 10 | **H2024-2** hermeneutikk og N-gram | MET | 4.4, 6.2, 7.5, 7.9 |
| 11 | **H2024-3** gruppeoppgaven | GRP | 6.4, 7.6, 7.10 |
| — | **Den tiende oppgaveteksten** (hermeneutikk, **uten kjent termin**) | MET/LIN | 4.3, 4.4, 7.3, 7.5 |

**Kontrollsum:** EPO 3 (#1, #3, #6) + AVG 2 (#4, #7) + LIN 2 (#5, #8) + FAG 1
(#9) + MET 1 (#10) + GRP 1 (#11) + dualisme 1 (#2) = **11 av 11** ✓

**Bindende:** et kapittel som påberoper seg en forekomst som ikke står i raden
sin, er en byggefeil. Og **to kapitler som deler en forekomst, skriver begge
«samme oppgavetekst som i kap. X.Y»** — særlig 2.6/2.7, 3.1/7.2 og de fem
Del 5-kapitlene som alle hviler på H2024-1.

### 6.3 NEVNERPORTEN — sju lovlige nevnere, og bare sju

| Nevner | Når den brukes | Eksempel |
|---|---|---|
| **6 terminer** | ALL temafrekvens og all formhistorikk — **hovednevneren** | «Periodisering er prøvd i 6 av 6 terminer.» |
| **4 sensorveiledninger** | **alt** om hva sensor belønner, straffer eller lar passere | «Alle 14 feilene er hjemlet i minst én av de 4 sensorveiledningene.» |
| **11 oppgavetekst-forekomster** | oppgavefordeling over de 6 terminene | «Epokekarakteristikken står 3 av 11 oppgavetekst-forekomster.» |
| **10 unike oppgavetekster** | sjangerfordeling der gjentakelsene ikke skal telles dobbelt | «Sjangerbanken dekker 7 av de 10 unike oppgavetekstene.» |
| **5 terminer** | det utgåtte essay-regimet — **alltid merket historikk** | «I det utgåtte regimet, som dekker 5 av de 6 terminene …» |
| **1 termin** | gjeldende mappe-regime — ⚠ **aldri som prosent, aldri skjult** | «Den ene dokumenterte mappeeksamenen (H2024) ba om …» |
| **3 oppgaver / 3 arbeider** | mappas egen inndeling i H2024 — ⚠ **alltid bundet til H2024** | «2 av mappas 3 oppgaver innpasser det digitale elementet.» |

⚠ **Nevneren 3 er ny i denne kontrakten** og står ikke i skjelettets liste over
lovlige nevnere, enda skjelettet selv bruker den seks steder. Den er lovlig, men
**bare** i formen «av mappas 3 oppgaver» / «av mappas tre arbeider» / «to av tre
mappeoppgaver», og **bare** om H2024. Se §20 sprik 4.

⚠ **Nevneren «4 ordinære terminer» er lovlig, men farlig**, fordi tallet 4 også
er antallet sensorveiledninger. Den brukes **kun** i kap. 0.1, 7.3 og
studieguiden, **alltid** med enheten «ordinære terminer» skrevet ut, og **alltid**
om **læringsmålet** «de lange linjene» — aldri om sjangeren, som er **2 av 11
forekomster**. Se §20 sprik 3.

**Ufravikelige konsekvenser:**

- **Enheten skrives alltid ut** — «4 av 6 terminer», aldri «4 av 6».
- **«Sett» er ALDRI en nevner i denne boka.** Ordet er tvetydig her (6 filer, 5
  tekstlig unike dokumenter, 6 terminer). Skriv «terminer», «forekomster» eller
  «unike oppgavetekster».
- **«I de fleste terminene», «gjennomgående», «nesten alltid» og «ofte» er
  FORBUDT som frekvenspåstander** uten et telt tall ved siden av. Unntak:
  kvalitative sensorkarakteristikker («karakterbeskrivelsens akse går igjen i
  alle fire veiledningene»), som skal merkes som veiledningenes egne vurderinger.
- **Nevneren for et TEMA er ikke nevneren for et DELTEMA.** Positivisme,
  enhetsvitenskap og relativisme står 4 av 6 terminer; det betyr **ikke** at
  enhetsvitenskapen, den sterke relativismen eller den «myke» humanioraen hver
  for seg er prøvd fire ganger. Dette er den vanligste måten å produsere et sant
  tall som sier noe usant.
- **Aldri sammenlign de to regimene uten å nevne forskjellen i antall tilbudte
  oppgavetekster per termin.** En termin i regime 1 tilbød én eller to
  oppgavetekster; H2024 hadde tre. «Digital humaniora er prøvd i 1 av 6 terminer,
  men i 2 av mappas 3 oppgaver» er en meningsløs setning uten den forklaringen.
- **Formtallene er ikke nevnere.** 5 000 ord, 1 500 ord, 1 750 ord ⚠, 10 minutter
  podkast, 100 ord over grensen, 3–5 normalsider og 2 300 tegn beskriver
  **eksamen**, ikke frekvens, og skal aldri stå i en «N av M»-brøk.

### 6.4 Karakteraksen, raushetskontrakten og de fire rubrikkene

**Karakterbeskrivelsen A–F finnes kun i H2020** — altså i **1 av de 4
sensorveiledningene**. De tre andre har ingen. Alle sjangerkapitler,
modellbesvarelser og prøvefasiter skal referere til nivåene ved navn — aldri bare
«sensor vil ha god drøfting».

| Nivå | Hva H2020s beskrivelse faktisk sier (omskrevet) |
|---|---|
| **A** | framifrå prestasjon som skiller seg klart ut; **særs god vurderingsevne** og **stor grad av selvstendighet** |
| **B** | mykje god prestasjon; mykje god vurderingsevne og selvstendighet |
| **C** | jevnt god prestasjon, tilfredsstillende på de fleste områder; god vurderingsevne og selvstendighet **på de viktigste områdene** |
| **D** | akseptabel prestasjon med noen vesentlige mangler; **en viss grad** av vurderingsevne og selvstendighet |
| **E** | tilfredsstiller minimumskravene, men heller ikke mer; **lita** vurderingsevne og **lite** selvstendighet |
| **F** | tilfredsstiller ikke de faglige minimumskravene; **manglende** vurderingsevne og selvstendighet |

**Bokas gjennomgangsmelodi, og den skal stå i hver A-markør-boks:** skalaen måler
**vurderingsevne og selvstendighet** langs hele lengden. **Kunnskapsmengde nevnes
ikke i en eneste av de seks beskrivelsene.** Det er ikke mengden som skiller A
fra C — det er hva du gjør med den.

**Det som belønnes — ni punkter, hvert med hjemmel** (skal stå i kap. 0.3):

1. **Selvstendighet framfor reproduksjon** (H2024, oppgave 2 — formuleringen er
   direkte; karakterbeskrivelsen i H2020 sier det samme langs hele skalaen).
2. **Aktiv bruk av pensum** (H2024, oppgave 1: at studentene bruker pensum aktivt
   og viser forståelse, er det som **skiller gode fra mindre gode oppgaver** —
   den eneste setningen i arkivet som med de ordene sier hva som skiller
   karakterene).
3. **Avgrensning og problemstilling** (H2024, **2 av mappas 3 oppgaver**).
4. **Bred litteraturbruk, også utenfor pensum** ⚠ (H2020 alene, ett regime
   tilbake — skal merkes slik).
5. **Å bruke et begrep aktivt, ikke bare nevne det** (H2022, om hermeneutikk —
   generaliserbart til alle fagbegreper).
6. **Å følge oppgavens egen vekting** (H2022: redegjørelsesleddet er «planke» og
   skal ikke spise brorparten).
7. **Å reflektere over metodenes forskjell** (H2024, oppgave 2: refleksjon over
   forskjellen mellom nærlesning og digital fjernlesning **øker uttellingen**).
8. **Å relatere til strømninger utenfor selve casen** (H2024, oppgave 2: «det
   siste momentet som skal gi uttelling»).
9. **Å produsere en drøftende, ikke bare beskrivende, framstilling** (H2020
   krever et implikasjonsledd, H2022 et drøftingsledd, H2024 en problemstilling
   som belyses).

**RAUSHETSKONTRAKTEN — de åtte belagte punktene om hva som IKKE straffes.** Skal
stå samlet i én boks i kap. 0.1, med hjemmel per punkt i kap. 0.3, og gjentas i
kap. 7.4 og 7.7. Emnet har et pensum sensor selv kaller for stort; en bok som
forsterker panikken, gjør skade.

1. **H2020:** det skal **ikke straffes** å bare bruke pensum.
2. **H2024, oppgave 1:** det er **absolutt ingen krav** om at besvarelsen
   inneholder alle elementene veiledningen nevner, for å stå.
3. **H2024, oppgave 1:** sensor må være åpen for variasjon fordi studentene
   kommer fra ulike fag, og skal utvise skjønn der tidfestingen mellom fagene er
   ubalansert.
4. **H2024, oppgave 2:** «orden i referansene» veier mindre enn god tenkning.
5. **H2024, oppgave 3:** museumsbesøk og eksplisitt digital-epistemologisk
   diskusjon er flott, men **ikke nødvendig** for høy måloppnåelse.
6. **H2024, oppgave 3:** ordgrensen tåler 100 ord over.
7. **H2024, generelt:** referansestil varierer etter faglig tilhørighet, og
   sensor skal ikke straffe stilvalget. ⚠ **Boka skal derfor ikke foreskrive én
   referansestil.**
8. **H2021:** **stor takhøyde** for hvordan studenten velger å organisere og dele
   inn stoffet.

I tillegg rapporterer H2024-veiledningen at **kurset har et for stort pensum og
at vanskelighetsgraden har vært høy for mange**. Det er det ene av to steder i
hele arkivet der en veiledning sier noe **observert** om studentene. Boka bruker
det som argument for prioritering — **ikke som et løfte om at eksamen er lett**.

**De fire rubrikkene (bindende selvrettingsverktøy, binære — leseren skal kunne
krysse av uten skjønn).** De står i kap. 0.2 og 0.3 og i sitt sjangerkapittel, og
hver prøvefasit viser tilbake til den som passer.

**Avgrensningsrubrikken (AVGR), kap. 0.2:**

☐ Står problemstillingen i første avsnitt, formulert som ett spørsmål?
☐ Er det avgrenset i tid — hvilke perioder?
☐ Er det avgrenset i felt — hvilket fag, hvilken sjanger av kilder?
☐ Er spørsmålet **åpent** (hva, hvor, hvorfor, hvordan) og ikke et oppslag?
☐ Sier teksten selv hva den **ikke** dekker?
☐ Er ordbudsjettet satt før du skriver?

**Revisjonsrubrikken (REV), kap. 0.3 — bokas viktigste enkeltverktøy:**

☐ Står problemstillingen i første avsnitt?
☐ Er hvert pensumbidrag brukt til noe, ikke bare nevnt?
☐ Er drøftingsleddet lengre enn redegjørelsesleddet?
☐ Er det minst én innvending, og er den besvart?
☐ Sier teksten selv hva den ikke dekker?
☐ Er ordbudsjettet holdt?

**Kontrastrubrikken (KON), kap. 7.1:**

☐ Er epoken avgrenset, og er grensene begrunnet?
☐ Er trekkene sortert etter periodenettets kolonner, ikke som en liste?
☐ Er **kontrasten** mot forrige epoke skrevet ledd for ledd i samme nett?
☐ Er implikasjonsleddet skrevet — hva perioden gjorde mulig, og hva senere
perioder har kritisert?

**Anvendelsesrubrikken (ANV), kap. 7.5:**

☐ Er fenomenet valgt **og avgrenset**, med en setning om hvorfor det egner seg?
☐ Gjør hvert av Gadamers begreper et **konkret arbeid** i teksten?
☐ Står det eksplisitt hva frekvensgrafen viser og hva den ikke viser?
☐ Er de to lesningene faktisk **sammenlignet**, ikke bare lagt ved siden av
hverandre?
☐ Er fenomenet plassert i faghistoriske, politiske eller kulturelle strømninger?

### 6.5 Sjangrenes anatomi (bindende for alle modellsvar og fasiter)

Kodene **EPO**, **AVG**, **LIN**, **FAG**, **MET** og **GRP** er byggespråk.
**Skriv alltid sjangerens navn først, koden i parentes**, og skriv navnet fullt ut
ved første bruk per kapittel (§14.2).

**EPO — epokekarakteristikken, fire trinn:** (1) avgrens epoken og si hvorfor du
setter grensene der du setter dem · (2) trekkene, sortert etter periodenettets
kolonner · (3) **kontrasten** mot forrige epoke, ledd for ledd i samme nett ·
(4) implikasjonene. **Sensorkravet (H2020) gir rekkefølgen: trekk → kontekst →
implikasjoner. Et svar som bare gir trekk, har svart på en tredel av
bestillingen.** Den innebygde fella er trinn 3: kontrastleddet er halve oppgaven,
og det er leddet som krever at kandidaten kan **mer enn én periode**.

**AVG — avgrensningsoppgaven, tre ledd med vekting:** (1) definer humaniora,
kort og med avsender · (2) si hva som skiller det fra naturvitenskapen, langs to
akser (gjenstand og metode), ikke som en tospaltet liste · (3) **vurder selve
kategoriseringen av fag og framgangsmåter**. **Tredje ledd er sjangerens hjerte
og skal ha hovedtyngden.** Oppgaven ber ikke om at kandidaten forsvarer skillet,
men om at hun vurderer inndelingen. En besvarelse som bare setter opp to spalter
og fyller dem, har hoppet over drøftingen.

**LIN — den lange linjen, fem trinn:** (1) navngi tendensen i én setning ·
(2) sett opp de sju trinnene med ett stikkord hver fra periodenettet · (3) skriv
**to til tre setninger per trinn** — hva tendensen så ut som der, og hva som
endret seg fra forrige trinn · (4) si hva som **består** gjennom alle sju og hva
som **skifter** · (5) drøft om utviklingen er en linje, en pendel eller et brudd.
**Sensorkravet (H2022) er sjutrinns:** antikken, middelalderen, renessansen,
opplysningstiden, romantikken og historismen, 1900-tallet og etter 1970.
**Vektingskravet (H2022, eksplisitt):** det innledende redegjørelsesleddet er
«planke» og skal **ikke spise brorparten** — andre og tredje ledd skal utgjøre
hovedtyngden. Dette er den mest presise disponeringsinstruksen i hele arkivet.

**FAG — faghistorieoppgaven, fem trinn:** (1) velg **ett** fag og si hvorfor ·
(2) når og hvordan blir det et eget kunnskapsfelt · (3) hvilket vitenskapelig
ideal henter det, og hvilke metoder følger · (4) **plasser faget mot humanioras
samtidige utvikling og noter forskyvningen** · (5) drøft hva
vitenskapeliggjøringen kostet — de-kontekstualiseringen. **Trinn 4 er det
H2024-veiledningen bruker mest plass på**, og det er der feil #10 bor.

**MET — metodeanvendelsen på egen case, fem trinn:** (1) velg og **avgrens**
fenomenet, og si hvorfor det egner seg · (2) hermeneutisk analyse med Gadamers
begreper **anvendt** — hvert begrep gjør et konkret arbeid · (3) digital
undersøkelse med N-gram, med en eksplisitt setning om hva grafen viser og ikke
viser · (4) **sammenligningen** — hva så den ene lesningen som den andre ikke så
· (5) plasseringen i strømningene rundt fenomenet. **Sensorkravene er rangert i
H2024-veiledningen** (§6.4, punkt 1, 5, 7, 8 og 4).

**GRP — gruppeoppgaven, fire trinn:** (1) velg samling og si hva som gjorde den
valgbar · (2) formuler **ett åpent spørsmål** og vis at det kan belyses med
digitalt tilgjengelig materiale · (3) belys det med pensumets perspektiver og
metoder · (4) vær **eksplisitt** på at kilden er digital. **Maks 1 500 ord
inkludert fotnoter**, litteraturliste i tillegg; ordgrensen tåler 100 ord over.
**Podkast eller video, maks 10 minutter, er tillatt alternativ**, med
referanseopplesning etter slutten som kommer i tillegg til tidsrammen.
⚠ **Skriftlig innlevering vurderes strengere på form.** ⚠ **Det er en
gruppeoppgave, og det skal tas hensyn til i vurderingen.**

**Alle seks sjangrene er essays**, og alle tre mappeoppgavene kombinerer et
redegjørelsesledd med et drøftingsledd. Boka trener hver sjanger for seg i Del 7
og kombinerer dem i prøvene og modellbesvarelsene.

### 6.6 Ordbudsjett, ikke tidsbudsjett (bruk denne modellen konsekvent)

⚠ **Denne boka har ingen tidsbudsjettmodell for eksamen, og skal ikke lage en.**
Mappa skrives over et semester, med tre innleveringer, tilbakemelding fra
seminarlærer og medstudenter, og en revisjonsrunde per arbeid. Der andre bøker
skriver «~30 min per oppgave», skriver denne boka **ordbudsjett** og
**arbeidsrekkefølge**.

**Modellen boka bruker for ett individuelt arbeid** (om lag 1 750 ord ⚠, §7.4):
avgrensning og problemstilling ~150 ord → redegjørelsesledd ~500 ord →
drøftingsledd ~900 ord → landing med det teksten ikke dekker ~200 ord.
**Drøftingsleddet er lengst — det er H2022s «planke»-instruks gjort om til tall.**

**Modellen for gruppeoppgaven** (1 500 ord): samlingen og valget ~200 →
spørsmålet og hvorfor det kan belyses digitalt ~250 → belysningen med pensum
~800 → det etiske eller historiske leddet og den eksplisitte digital-setningen
~250.

**Arbeidskalenderen** (kap. 0.1, casen «Slik leser du en mappebestilling»): hvert
arbeid gjennom **utkast → tilbakemelding → revisjon** før innlevering i mappa.
Gruppeoppgaven går over hele semesteret med tre avsatte arbeidsøkter i seminaret.

**«Lite tid?»-boksen sier eksplisitt at kapitlenes `estimatedMinutes` er
LESEtid**, og at den som skriver for hånd bør legge på ca. ×1,5. ⚠ **Boksens
standard minimumsråd fra malen — «skriv minst én full oppgave på tid» — gjelder
IKKE her.** Erstatt det med: **skriv minst ett fullt individuelt arbeid med
avgrensningstrinn og én revisjonsrunde, og minst ett åpent spørsmål til en
digital samling.**

**De to formregimene** (kap. 0.1, kort, og eksplisitt merket): det utgåtte
essay-regimet (**5 av de 6 terminene**, H2020–H2022) med ett essay valgt blant
ett eller to alternativer, levert som PDF, ⚠ 3–5 normalsider à 2 300 tegn uten
mellomrom — **oppgitt kun i H2020** → mappe-regimet (**1 av de 6 terminene**,
H2024, gjeldende) med tre arbeider og maks 5 000 ord samlet. Formålet med
historikken er nøyaktig ett: at leseren som åpner et sett fra 2021 skjønner
hvorfor det ber om ett essay.

### 6.7 Bokas to mantraer

1. **«Det er ikke mengden, det er hva du gjør med den.»** Etableres i kap. 0.3,
   gjentas i hvert sjangerkapittel og i hver A-markør-boks. Begrunnelsen er
   karakterskalaen selv: den måler vurderingsevne og selvstendighet, og
   kunnskapsmengde nevnes ikke i en eneste av de seks beskrivelsene.
2. **«Et begrep du bare nevner, har du ikke brukt.»** Etableres i kap. 0.3.
   Begrunnelsen er H2022-veiledningen, som sier at hermeneutikk må brukes
   **aktivt som begrep** — generalisert til alle fagbegreper, og til grunn for
   firetrinnsformen for aktiv pensumbruk i kap. 0.3.

Begge mantraene forklares i klarspråk ved første bruk — «C-stoff» er
karaktersjargong og skal gloses (§12).

---

## 7. FORMKALIBRERINGEN (bokas største enkeltrisiko — harde porter)

### 7.1 De to regimene, og hvorfor det ene ikke finnes lenger

| regime | dokumentert | form | omfang | vurdering |
|---|---|---|---|---|
| **utgått essay-regime** | H2020–H2022 — **5 av de 6 terminene** | **ett essay** levert som PDF, valgt blant ett eller to alternativer | ⚠ 3–5 normalsider à 2 300 tegn uten mellomrom — **oppgitt kun i H2020** | karakter A–F |
| **gjeldende mappe-regime** | H2024 — **1 av de 6 terminene** | **mappeinnlevering**: 2 individuelle arbeider + 1 gruppearbeid | **maks 5 000 ord samlet** (UiOs emneside); gruppeoppgaven maks 1 500 ord inkl. fotnoter | karakter A–F |

⚠ **Overgangen skjedde i det ene hullet arkivet har (H2023), og kan ikke
dateres.**

**Boka kalibreres mot mappe-regimet** for form, omfang, arbeidsmåte og digitale
krav, og bruker det utgåtte regimets oppgavetekster som **sjangerbank** for
skrivehåndverket (§8.2). Begrunnelsen er at *håndverket* er felles selv om
formatet ikke er: avgrensning, aktiv pensumbruk, den lange linjen, faghistorisk
plassering, drøfting framfor redegjørelse og selvstendighet framfor reproduksjon
går igjen i begge regimer.

**Hva det utgåtte regimet gir og ikke gir:**

- Det gir **sjangerbanken** (§8.2), og den bærer Del 7.
- Det gir **ikke** eksamensform, omfang, arbeidsmåte eller tidsramme.
- ⚠ **Om det var hjemme- eller skoleeksamen står ikke i noen fil.** PDF-levering,
  krav om forside og 3–5 sider peker mot hjemmeeksamen, men det er en slutning.
  **Boka skal aldri oppgi eksamensdøgn eller varighet for det utgåtte regimet**,
  og ordet «hjemmeeksamen» skal bare stå med slutningsmerkingen (prosaregel 7,
  §14.5). «Skoleeksamen» og «eksamensdøgn» er hardt forbudt (§14.5).
- ⚠ **Hjelpemidler er ikke et meningsfullt begrep i mappeformatet** og står ikke
  oppgitt noe sted. **Boka skal ikke skrive om hjelpemidler** (hard port, §14.5;
  kap. 0.1 er automatisk unntatt og kan si at begrepet ikke gir mening her).
- ⚠ **Utsatt eksamen er dokumentert for H2020 og H2021, ikke for H2022–H2024.**
  Boka skal ikke påstå at ordningen er avviklet.

**Gjenbruk er dokumentert — men over to terminer, ikke som mønster.** Den utsatte
eksamenen i H2021 er ordrett lik den i H2020. Det er belegg for at trening på
gamle oppgaver ikke er bortkastet. ⚠ **Boka skal formulere dette som en
observasjon over to terminer, aldri som en regel om gjenbruk**, og aldri som en
spådom om at en oppgave kommer igjen.

### 7.2 FORMRAMMEN — bindende ramme rundt enhver påstand om hva mappa krever

Dette er kontraktens viktigste enkeltregel.

> **Bindende:** enhver påstand i boka om hva mappeeksamen krever, forventer,
> belønner eller straffer, skal stå innenfor en ramme som sier at grunnlaget er
> **én dokumentert termin (H2024)**. Rammen skrives ut i klartekst minst én gang
> per kapittel — i `tip` **Eksamensvinkel** — og i selve setningen der påstanden
> er sterkest.

**Malen (testet mot forbudt-regexen i §14.5, null treff):**

> Alt denne boka sier om hva mappa krever, hviler på én dokumentert termin:
> H2024. Fem av de seks terminene i arkivet er skrevet til essay-regimet som ble
> lagt om, og høsten 2023 mangler helt.

Kortformer som også passerer og kan varieres: «den ene dokumenterte
mappeeksamenen (H2024)» · «i det ene settet vi har fra dagens form» · «hjemlet i
H2024-veiledningen, som er den eneste vi har fra mappeformatet».

**Fire ting rammen forbyr, og som en agent ellers ville skrevet uten å merke det:**

1. **Flertall om mappeformen.** «Mappeeksamenene», «mappeeksamener»,
   «mappeterminene», «de siste mappeeksamenene» — alle hardt forbudt (§14.5).
   Det finnes **én**.
2. **Vane- og regelmessighetsspråk.** «Mappa ber som regel om», «mappa spør
   alltid om», «gjennomgående i mappeformatet», «i de fleste mappeoppgavene»,
   «typisk for mappeeksamen» — hardt forbudt. Ett sett kan ikke etablere en
   regelmessighet.
3. **Prosentregning på nevneren 1.** «I gjeldende regime prøves X i 100 % av
   terminene» er sant og verdiløst (§6.1 punkt 4).
4. **Sammenblanding av regimenes tall.** «Digital humaniora er prøvd i 1 av 6
   terminer, men i 2 av mappas 3 oppgaver» krever forklaringen om at en termin i
   det utgåtte regimet tilbød én eller to oppgavetekster mens H2024 hadde tre
   (§6.3).

⚠ **Motsatt vei:** rammen er ikke en unnskyldning for å nedprioritere
mappestoffet. Del 6, kap. 6.4 og hele Del 7 skal skrives i full bredde nettopp
fordi de dekker det formatet studenten faktisk møter (§6.1 punkt 9, §7.5).

**PORT A — formrammen, kapittelvid.** Hvert kapittel som omtaler mappa, må
etablere rammen et sted i kapitlet:

```bash
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-hark \
  "mappeeksamen|mappeinnlevering|eksamensmappa|mappeformat|mappeformen|\bmappa\b|mappeoppgave" \
  "H2024|én termin|ett sett|bare én termin|kun én termin|én dokumentert|ett dokumentert|1 av 6 terminer|én av de seks terminene"
```

**Porten skal gi null avvik.** Den fanger ikke alt — flertallsformene og
vanespråket fanges av den harde regexen i §14.5 — men den fanger det vanligste:
et kapittel som beskriver mappa uten noen gang å si hvor tynt grunnlaget er.

### 7.3 REGIMEMERKING — hvert frekvenstall oppgir hvilket regime det gjelder

Et tall uten regimemerking er et tall som lyver, fordi de to regimene tilbød
ulikt antall oppgavetekster per termin.

- Et **6-tall** (terminer) spenner over begge regimer og skal si det der
  sammenligningen betyr noe.
- Et **5-tall** er alltid «i det utgåtte essay-regimet» eller «historikk».
- Et **1-tall** er alltid «den ene dokumenterte mappeeksamenen (H2024)».
- Et **3-tall** er alltid «av mappas 3 oppgaver» og alltid om H2024.
- Et **11-tall** eller **10-tall** spenner over begge regimer.

⚠ **Utgått stoff genererer ingen flashcards og ingen quiz.** Eksamensform,
omfang, forsidekrav, sidetall og arbeidsmåte fra det utgåtte regimet skal ikke
pugges. Bare oppgavetekstene brukes, og de brukes som **sjanger** (§8.2). Ett
enkelt flashcard om at formen ER lagt om, er tillatt — da skal svaret handle om
omleggingen, ikke om det gamle formatet.

### 7.4 ORDBUDSJETTET — 1 750 ord er en SLUTNING (hard port)

**Dette er skjelettets mest belastede slutning.** Arkivet oppgir bare
gruppeoppgavens grense (maks 1 500 ord). De 5 000 ordene står på UiOs emneside.
Tallet 1 750 står **ingen steder** — det er de to tallene trukket fra hverandre
og delt på to. Boka regner ordbudsjetter med det i kap. 0.1, 0.2, 7.3, 7.8, 7.9
og i øvingsmappe A, så det opptrer ofte nok til å bli lest som et krav.

> **Bindende:** hver gang tallet 1 750 skrives, skal **regnestykket være synlig
> i samme eller nabosetningen**, og ordet **slutning** skal stå. Tallet
> presenteres **aldri** som et oppgitt krav, aldri som «UiO oppgir», aldri som
> «kravet er om lag 1 750 ord».

**Malen (testet mot forbudt-regexen i §14.5, null treff):**

> UiOs emneside oppgir at hele mappa kan være på maks 5 000 ord.
> H2024-veiledningen oppgir at gruppeoppgaven ikke skal overstige 1 500 ord
> inkludert fotnoter. Trekker du det ene fra det andre og deler på to, får du om
> lag **1 750 ord per individuelt arbeid**. ⚠ Det tallet er en **slutning fra to
> tall** — ingen kilde oppgir det. Regnestykket står her fordi boka bruker tallet
> til ordbudsjetter, og du skal kunne se hvor det kommer fra: 5 000 minus 1 500
> er 3 500, delt på to individuelle arbeider gir 1 750.

Etter at malen har stått én gang i kap. 0.1 og én gang i kap. 0.2, kan senere
forekomster forkortes til **«om lag 1 750 ord ⚠ (slutning, se kap. 0.2)»** — men
ordet «slutning» skal fortsatt stå i samme setning. Porten under er `--streng`
nettopp fordi rammen ikke kan arves over kapittelgrenser.

**PORT B — slutningsmerkingen, per forekomst:**

```bash
python3 scripts/hoyskolebok/sjekk-prosaregel.py --streng exfac03-hark \
  "1\s?750" \
  "slutning|regnestykk|5 000 ord|5000 ord|ikke et krav|ikke oppgitt|utledet|minus 1 500"
```

**PORT B2 — femtusenordsgrensen er en UiO-opplysning, ikke arkivbelegg:**

```bash
python3 scripts/hoyskolebok/sjekk-prosaregel.py --streng exfac03-hark \
  "5\s?000 ord" \
  "emneside|emnesiden|semestersiden|UiO oppgir|ikke i arkivet|står ikke i arkivet"
```

**Begge porter skal gi null avvik.** ⚠ Gruppeoppgavens 1 500 ord er derimot
**ekte arkivbelegg** (H2024-veiledningen) og trenger ingen slutningsmerking — men
skal alltid stå med «inkludert fotnoter, litteraturliste i tillegg» og med at
ordgrensen tåler 100 ord over.

⚠ **Vektingen mellom mappas tre arbeider er ikke oppgitt noe sted.** Boka skal
ikke antyde en. «Teller likt», «vektes likt», «hver teller en tredel» og «en
tredel av eksamen» er hardt forbudt (§14.5, §20 sprik 2).

### 7.5 DEL 6 SKAL VÆRE OVERDIMENSJONERT — og hvert kapittel gjentar nevner-boksen

Del 6 har fire kapitler på et tema som formelt står **1 av 6 terminer**. Det er
**bevisst**, og begrunnelsen er at det digitale treffer **2 av mappas 3
oppgaver** i den eneste dokumenterte mappeeksamenen, og at H2024-veiledningen
sier det var nytt av året.

> **Bindende:** ingen senere agent skal krympe, slå sammen eller nedprioritere
> Del 6 på frekvens alene. Frekvenstallet 1 av 6 terminer måler det utgåtte
> regimets fravær av temaet, ikke temaets vekt i dagens form.

For at ingen skal kunne «rette» det ned uten å møte begrunnelsen, **gjentar hvert
av de fire kapitlene nevner-boksen én gang**, i `tip` Eksamensvinkel, med alle
tre elementene: **1 av 6 terminer** · **2 av mappas 3 oppgaver** · **H2024**.

**PORT C — Del 6-nevnerboksen (fikstur-testet 6. august 2026: fanger et kapittel
som mangler ett eller flere av de tre elementene, slipper gjennom de tre som har
dem):**

```bash
python3 - <<'EOF'
# PORT C — EXFAC03-HARK: Del 6 skal gjenta nevner-boksen i HVERT kapittel.
import glob, json, os, re, sys
KAT = "src/lib/data/chapters"
KRAV = {
    "1 av 6 terminer": re.compile(r"1 av 6 terminer|én av de seks terminene", re.I),
    "2 av mappas 3 oppgaver": re.compile(r"2 av mappas 3 oppgaver|to av mappas tre oppgaver|2 av de 3 oppgavene|to av de tre oppgavene", re.I),
    "H2024": re.compile(r"H2024"),
}
def tekst(o):
    if isinstance(o, str): return o
    if isinstance(o, dict): return " ".join(tekst(v) for v in o.values())
    if isinstance(o, list): return " ".join(tekst(v) for v in o)
    return ""
avvik, filer = [], [p for p in sorted(glob.glob(os.path.join(KAT, "exfac03-hark-6-*.json")))
                    if not p.endswith("prove.json")]
for p in filer:
    t = tekst(json.load(open(p, encoding="utf-8")))
    for navn, rx in KRAV.items():
        if not rx.search(t):
            avvik.append(f"{os.path.basename(p)}: mangler «{navn}» i nevner-boksen")
print(f"Del 6: {len(filer)} kapitler | avvik: {len(avvik)}")
for a in avvik: print(" -", a)
sys.exit(1 if avvik else 0)
EOF
```

⚠ **Samme motsatte forbehold gjelder to andre steder:** **kap. 6.4** (museer og
samlinger, 1 av 6 terminer) og **den filosofiske dualismen i kap. 3.1** (1 av 11
forekomster) **skal stå i full bredde**. Et tema med lav frekvens i et arkiv på
seks terminer er ikke et lavfrekvent tema — det er et tema vi har for lite data
om.

### 7.6 MAPPEFORMATET STYRER OPPGAVEDESIGNET — ingen tidtaking noe sted

Mappa er per definisjon **reviderte tekster**: hvert av de tre arbeidene er
levert, kommentert av seminarlærer **og medstudenter**, og skrevet om før det
lastes opp. Eksamen er ikke én prestasjon, men en revidert versjon av tre
tidligere leveranser.

> **Bindende: ingen oppgave i boka er av typen «skriv dette på 45 minutter».**
> Hver treningsoppgave i Del 7 og hver prøve med ordbudsjett har
> **avgrensning og problemstilling som eget, vurdert trinn**, og en
> **revisjonsrunde** der leseren retter sin egen tekst mot rubrikken fra
> kap. 0.3 før hun leser fasiten.

Hardt forbudt (§14.5): `på 45 minutter` · `skriv dette på N minutt` · `besvar
dette på N minutt` · `på tid` · `tidtaking` · `ta tiden på` · `eksamensdøgn` ·
`skoleeksamen` · `hjelpemidler`.

Lovlig og ønsket: **arbeidsomfang** i minutter på prøvene («4 prøver à ~25–45
min»), **ordbudsjett** i ord, **lesetid** i `estimatedMinutes`, og
podkastformatets **maks 10 minutter**, som er en formregel fra H2024 og ikke en
tidtaking.

⚠ **Dette overstyrer to standardformuleringer fra malen:** «Lite tid?»-boksens
minimumsråd om å «skrive minst én full oppgave på tid» (§6.6), og prøve-tipenes
vanlige tidsangivelse som eneste omfangsmål. Begge erstattes av ordbudsjett og
revisjonsrunde.

### 7.7 QUIZ-ÆRLIGHETEN — banken er lesehjelp, ikke eksamenssimulering

**Emnet har aldri hatt en flervalgsdel, og arkivet inneholder null
flervalgsspørsmål.** Bokas 742 quiz-spørsmål og 699 flashcards er **nykonstruert
lesehjelp** for et pensum sensor selv kaller for stort — ikke en simulering av
noen eksamensdel.

**Konsekvensen er bindende:**

1. **Boka skal aldri, noe sted, antyde at den har trent på tidligere
   flervalgsoppgaver.** Ikke i markedsføringstone, ikke i en bisetning, ikke i en
   prøve-tip (hard regex, §14.5).
2. **Ærligheten skal stå i klartekst tre steder, ikke i en fotnote:** kildenoten
   i **kap. 0.1** (§6.1.1), åpningen av **kap. 7.7**, og prøve-tipen til
   **sjangerprøven i `exfac03-hark-7-prove`** (§5.8).
3. **Kvoten er vektet mot temadelene**, der pensummengden ligger, og er lav i
   Del 7, der ferdighetene trenes med skriveoppgaver i stedet.

**Ærlighetsmal for kap. 7.7 og for sjangerprøven** (testet mot forbudt-regexen i
§14.5, null treff — bruk ordlyden, tilpasset i språk, aldri i sak):

> Emnet har aldri hatt en flervalgsdel. Ingen av de seks dokumenterte terminene
> inneholder ett eneste flervalgsspørsmål, og det er ikke fordi vi ikke har lett
> — delen har aldri eksistert. Spørsmålene i quizen og kortene i flashcardbanken
> er derfor skrevet av oss, som lesehjelp for et pensum sensor selv kaller for
> stort. Bruk dem til å holde begreper, perioder og avsendere i live mens du
> skriver, ikke som en spådom om hva eksamen ser ut som — for eksamen ser ikke
> slik ut i det hele tatt.

---

## 8. SJANGERVEKTINGEN ER LÅST, OG SJANGERBANKEN ER MINDRE ENN SKJELETTET SIER

### 8.1 Sjanger foran tema — en bindende regel, ikke en anbefaling

**13 av bokas 38 kapitler (34 %) er håndverkskapitler** — 3 i Del 0 og 10 i
Del 7 — mot 25 temakapitler. Begrunnelsen står i skjelettets §1 og i analysens
§ 10.1: seks oppgavetekster gir et **skarpt** bilde av hva slags svar som kreves
og et **tynt** bilde av hvilke temaer som kan komme. De seks sjangrene er stabile
over begge regimene; temaene lar seg ikke rangere på seks terminer.

> **BINDENDE REGEL (ikke en anbefaling).** Enhver senere utvidelse av boka som
> legger til temakapitler **på bekostning av** kapitler i Del 0 eller Del 7,
> bryter kalibreringen og skal avvises.
>
> - **Skal boka vokse, vokser den med flere sjangerkapitler og flere prøver
>   først.**
> - **Nye temakapitler krever nytt belegg i `EKSAMENSANALYSE.md`** — en ny
>   dokumentert termin, en ny oppgavetekst eller en ny sensorveiledning. En
>   magefølelse om at et tema «kan komme», er ikke belegg.
> - **Håndverksandelen skal aldri under 13 av 38 kapitler.** Legges det til
>   temakapitler, skal håndverksandelen holdes ved å legge til
>   sjangerkapitler i samme operasjon.
> - **Del 0 er tre kapitler, ikke to.** Utvidelsen fra DNA-standardens to til
>   tre er begrunnet i at mappeformatet krever eget håndverk: problemstilling,
>   aktiv pensumbruk, revisjon og ordbudsjett. Kap. 0.3 skal ikke slås sammen med
>   0.2.

**Kontroll før ferdigmelding:** `ls src/lib/data/chapters/exfac03-hark-0-*.json`
gir 3 filer og `ls src/lib/data/chapters/exfac03-hark-7-*.json` gir 10 + 1
prøvekapittel. 3 + 10 = 13 av 38 = **34 %** ✓

### 8.2 SJANGERBANKEN — 8 forekomster, 6 unike, 7 med den tiende

⚠ **Skjelettet sier «regime 1s ni oppgavetekster» seks steder. Det er feil, og
det er bokas viktigste enkeltregnefeil.** Utregningen står i §20 sprik 1. Riktige
tall:

| Størrelse | Tall | Utregning |
|---|---|---|
| Oppgavetekst-forekomster i det utgåtte regimet | **8 av 11** | H2020 2 + H2020-utsatt 2 + H2021 1 + H2021-utsatt 2 + H2022 1 |
| Unike oppgavetekster derfra, fra kjent termin | **6 av 10** | 8 forekomster − 2 ordrette gjentakelser |
| Unike tekster i sjangerbanken totalt | **7 av 10** | 6 + den tiende oppgaveteksten, som ikke har kjent termin |
| Unike oppgavetekster fra H2024 | **3 av 10** | H2024-1, H2024-2, H2024-3 |

**Kontrollsum:** 6 + 3 = **9 unike fra kjent termin** ✓ · 9 + 1 uten kjent termin
= **10 unike oppgavetekster** ✓ · 8 + 3 = **11 forekomster** ✓

**Bindende formuleringer:**

- «Sjangerbanken fra det utgåtte regimet dekker **8 av de 11
  oppgavetekst-forekomstene** og gir **6 av de 10 unike oppgavetekstene** — sju,
  hvis den tiende oppgaveteksten uten kjent termin regnes med.»
- Øvingsmappe C i `exfac03-hark-7-prove` skriver **«sju av de ti unike
  oppgavetekstene»**, ikke «ni av ti».
- Kap. 0.1 skriver **«de eldre oppgavetekstene»** eller **«sjangerbanken»**, ikke
  «de ni oppgavetekstene».

Formene `ni oppgavetekster`, `de ni oppgavetekstene`, `ni unike oppgavetekster`,
`ni av ti` og `9 av 10 unike` er **hardt forbudt** (§14.5).
⚠ **Merk at «de ni bidragene» om pensumlitteraturen er et helt annet og korrekt
tall (§9.2) — det skal ikke «rettes».**

### 8.3 Sjangerfordelingen i Del 7 følger sjangerbanken, ikke frekvensen

Del 7 har ett kapittel per dokumentert sjanger (7.1–7.6), feilvaksinen (7.7) og
tre modellbesvarelser (7.8–7.10, DNA-krav ≥3, én per mappeoppgave). ⚠ **De tre
modellbesvarelsene speiler H2024s tre arbeider og hviler alle på ett sett**
(§5.6). Sjangerkapitlene 7.1–7.3 hviler derimot i hovedsak på sjangerbanken fra
det utgåtte regimet, og skal si det.

---

## 9. FAGETS SANNHETSKONTROLL

### 9.1 Begrunnelsesregelen (ufravikelig)

Enhver kobling i boka — i et eksempel, i en modellbesvarelse, i en fasit — skal
være **begrunnet i én setning som svarer på «hvorfor akkurat dette?»**. En
konstatert kobling er C-stoff, og boka skal aldri vise C-stoff som om det var
A-stoff.

| ✗ Konstatert | ✓ Begrunnet |
|---|---|
| «Krøniken har et teleologisk historiesyn.» | «Krøniken har et teleologisk historiesyn, fordi hendelsen ikke forklares av det som gikk forut, men av hva den peker fram mot: uværet er et varsel, ikke et resultat. Hadde forfatteren forklart det med årstid og vindretning, ville forklaringen vært av en helt annen type.» |
| «Denne lesningen er historistisk.» | «Lesningen er historistisk fordi den måler handlingen mot samtidens egne normer og ikke mot våre — og den koster oss muligheten til å kalle handlingen gal, som er nettopp det Gadamer sier vi ikke kan slippe unna.» |
| «Frekvenskurven viser at ordet endret betydning.» | «Frekvenskurven viser at ordet ble brukt oftere, ikke at det betydde noe nytt. Skal betydningen fanges, må man se ordet med sine naboer i konkordansen — og det er nøyaktig skillet H2024-veiledningen bruker mest plass på.» |

### 9.2 Pensumapparatet — ni bidrag, og aldri utgave, årstall eller sidetall

Arkivet navngir **ni bidrag**. Boka skal ikke bruke andre som pensumankere.

| Bidrag | Hvor navngitt | Hva det bærer |
|---|---|---|
| **Jordheim m.fl.**, «Humaniora» | H2021, H2022 | emnets hovedbok; humanioras historie og avgrensning; hermeneutikk som tradisjon, teori og metode |
| **Sandmo**, «Tid for historie» | H2021, H2022 | historiefagets egen historie; synet på fortiden gjennom periodene |
| **Olsen** | H2022 | arkeologisk teori; den lange linjen og post-prosessuell arkeologi ⚠ **tittel ikke oppgitt i arkivet — boka skal ikke finne på en** |
| **Hölling** | H2024, oppgave 1 | konserveringsfagets egenart mellom humaniora og naturvitenskap, mellom tradisjon og fornying |
| **Ingvarsson** | H2024, oppgave 3 | begrepet digital epistemologi; at digitaliseringen løsriver samlingen **ytterligere** fra kontekstene som skapte den |
| **Bastiansen** | H2024, oppgave 3 | objektet omformet fra fysisk gjenstand til et numerisk tall mellom 0 og 1 |
| **Gadamer** | H2024, oppgave 2 | hermeneutisk sirkel, fordom, forståelseshorisont, horisontsammensmeltning, virkningshistorie |
| **Herodot og Thukydid** | H2021 | antikkens to måter å fortelle om «oss» og «de andre» |
| **Platon og Descartes** | H2020, oppgave 2 | den filosofiske dualismens to hovedskikkelser, med kritikere og alternativer |

**Bindende:**

- **Aldri utgave, aldri årstall, aldri sidetall.** Hard regex fanger `\bs\. N`,
  `side N`, `sidene N`, `N. utgave` og parentesårstall `(2017)` (§14.5). Arkivet
  oppgir aldri utgave og bare unntaksvis årstall, og UiOs semesterside er ikke
  lest.
- **Olsen står uten tittel.** Skriv «Olsen» og hva bidraget bærer — aldri en
  oppdiktet boktittel.
- **⚠-merking beholdes** der skjelettets begrepskontrakter merker en
  pensumkobling som uverifisert (blant annet *paideia*, *auctoritas*, folkeånd,
  den språklige vendingen, innlevelse, proveniens, reversibilitet og «den lange
  søvnen» som veiledningens egen betegnelse). Merkingen skal stå i pensumkartet.
- **Verktøy er ikke litteratur.** Nasjonalbibliotekets DH-lab (N-gram-appen og
  appen for konkordansanalyse) og GPTUiO er navngitte **verktøy**. ⚠ Boka skal
  beskrive **hva metodene gjør**, aldri hvilke knapper som finnes i
  grensesnittet.
- **⚠ De to pensumartiklene om digitalisering av norsk kulturarv er ikke
  navngitt** i arkivet. Ingvarsson og Bastiansen kan være dem, men det står ikke,
  og boka skal ikke påstå det.
- **⚠ Ingen fullstendig pensumliste finnes i arkivet.** Boka skal ikke antyde å
  gjengi en.
- **⚠ Panelbeskrivelsen i H2024-veiledningen** («en arkeolog, en konservator og
  en arkeolog») er trolig en skrivefeil, er ikke verifisert, og **skal ikke
  gjengis i boka**.
- **⚠ Kunstig intelligens i faglig arbeid** (GPTUiO) er seminarinnhold i H2024 og
  er **ikke prøvd i noen oppgave**. Nevnes i én kort, tydelig merket boks i
  kap. 6.1, bærer ikke kapittel og genererer ingen egen quiz- eller
  flashcard-kvote utover et par kontrollspørsmål.

### 9.3 Periodenavn og faglig konsistens (grep-konsistens)

**Periodenavnene skrives konsekvent** slik de brukes i kap. 1.2 og Del 2:
antikken · middelalderen · renessansen · opplysningstiden · romantikken og
historismen · 1900-tallet · tiden etter 1970. Periodegrenser skrives «ca. 1800»,
aldri «~1800». Årstall skrives i vanlig tekst.

**⚠ Boka skal ikke framstille utviklingen som en framskrittshistorie med en
vinner.** Positivismen skal aldri framstilles som en naiv posisjon —
H2022-veiledningen behandler den som en av to reelle varianter gjennom hele
perioden. Historismens ideal skal framstilles som et seriøst program med ekte
gevinster, ikke som en naivitet Gadamer avslører. En kandidat som karikerer
motparten, har svekket sin egen drøfting, og en bok som gjør det, lærer henne
det.

**⚠ Vippe-caser (bindende):** minst fire steder i boka skal en oppgave ha to
fullt forsvarlige landinger, der fasiten skriver **UT begge lesningene**. De er
gitt av skjelettet: **kap. 0.2** (to forsvarlige avgrensninger), **kap. 1.2** (to
periodiseringer av samme hundreår), **kap. 2.7** (er postmodernismen et brudd),
**kap. 3.1** (fordeler og ulemper ved kategoriseringen), **kap. 5.3** (var
arkeologiens ventetid tap eller modning) og **kap. 5.4**
(konserveringsdilemmaet). Entydige fasiter hele veien trener aldri håndtering av
ekte faglig ambivalens — og det er ambivalensen sensor premierer.

**⚠ Etiske spørsmål er åpne drøftingsspørsmål.** Kulturarvsetikken i kap. 6.4
framstilles med seriøse argumenter på flere sider, aldri som et standpunkt
studenten forventes å innta, og aldri med en policyanbefaling i bokas egen
stemme.

---

## 10. NYBEGYNNER-INNGANGEN (bindende)

**⚠ Leseren er i sitt første semester.** H2024-veiledningen sier at arkeologi- og
kulturhistoriestudentene tar emnet i 1. semester og historiestudentene i 3., at
historiestudentene derfor har bedre forutsetninger, og at sensor må utvise skjønn
på grunn av skjevheten. **Boka skrives for førstesemesterstudenten.**
Konsekvensene for byggingen:

- **Ingen faguttrykk fra historiefaget forutsettes kjent.** «Kildekritikk»,
  «levning» mot «beretning», «historisme», «positivisme», «hermeneutikk»,
  «teleologisk», «anakronisme», «proveniens» og «de-kontekstualisering» forklares
  i klarspråk ved **første bruk per kapittel**, med en konkret norsk knagg før
  fagtermen.
- **Ingen forutsetning om at leseren kjenner en faghistorisk debatt.** Herodot og
  Thukydid, Gadamer, Platon og Descartes refereres som **posisjoner i emnets eget
  materiale**, ikke som et lesepensum boka forutsetter at leseren har lest.
- **Fagstoffet er allerede nybegynnervennlig — det er METAspråket som må ryddes.**
  Sjangerkodene EPO, AVG, LIN, FAG, MET og GRP, feilkodene #1–#14 og all
  karaktersjargong («C-stoff», «A-markør», «C-terskelen») skrives ut i klarspråk
  ved første bruk per kapittel. **Ingen kald kode i `competenceGoals` eller i
  kapitlets aller første tekstboks.**
- **Hverdagsanker før apparatet.** Skjelettet gir det viktigste i kap. 1.1 (to
  nyskrevne setninger om antikken, den ene anakronistisk). Legg tilsvarende
  ankere i **1.2** (hvorfor to kart over samme landskap kan vise ulike ting),
  **4.4** (hva du så etter da du kom til et sted du hadde hørt mye om), **6.2**
  (hva et søketall faktisk teller) og **6.4** (hvordan en samling blir til).
- **Én ærlig opplysning om leseren skal stå i kap. 0.1:** arkeologi- og
  kulturhistoriestudentene tar emnet i første semester, historiestudentene i
  tredje. Boka forutsetter det første. Leseren som allerede har to semestre bak
  seg, kan lese Del 1 raskt.
- **Ingen policyanbefalinger i bokas egen stemme.** Emnet er fullt av åpne
  spørsmål — hvem eier kulturarven, bør digitalisering prioriteres, er en
  faggrense en oppdagelse eller en beslutning. Boka fremstiller **posisjonene med
  sitt beste argument** og lar modellbesvarelsen lande. Det er besvarelsens
  landing, ikke bokas.
- **Nybegynner-sjargongfella:** eksamens-metaspråk og koder brukt før de er
  forklart, gjør Del 0 uforståelig. Del 0 skal ha orienteringsboksen **«Slik
  leser du denne boka»** (type `text` eller `tip`, **ALDRI** `definition` — det
  ville endret flashcard-kvoten) med karakterskalaen A–F, at **C er en god og
  vanlig karakter**, hva «C-stoff» og «A-markør» betyr, de seks sjangerkodene
  skrevet fullt ut, og at typiske feil har et samlet register (#1–#14) med eget
  kapittel (7.7).

---

## 11. MODELLBESVARELSER (ærlighet, nivå og variasjon)

### 11.1 Ærlig merking — ufravikelig

- Hver modellbesvarelse innledes med denne linjen (testet mot forbudt-regexen i
  §14.5, null treff):

  > **Nyskrevet modellbesvarelse — skrevet av oss for denne boka.**
  > EXFAC03-HARK-arkivet har fire sensorveiledninger som beskriver hva sensor
  > forventer, men ingen publiserte besvarelser og ingen fasit.
  > Nivåbeskrivelsene er utledet av karakterbeskrivelsen i H2020 og av
  > belønningskriteriene i de fire veiledningene, ikke observert. Dette er ikke
  > en ekte kandidatbesvarelse.

- ⚠ **Nivåbeskrivelsene er UTLEDET, ikke observert.** Arkivet inneholder **ingen
  A- eller C-eksempler**, og ingen veiledning viser hva en besvarelse på et gitt
  nivå faktisk inneholder. Dette skal stå der nivåene presenteres første gang i
  hvert kapittel og hvert prøvekapittel (prosaregel 9, §14.5).
- En boks som heter «C-besvarelse» skal **VÆRE en C** — tittel, tekst og
  margnotater skal stemme. En polert A merket som C er en byggefeil. Samme for
  E-versjonen i kap. 0.3: den skal faktisk mangle det den sier den mangler.
- Ordet «studentbesvarelse» er forbudt i bokinnholdet (grep-sjekkes, §14.5).
  Skriv «modellbesvarelse», og bruk «ikke en ekte kandidatbesvarelse» i
  ærlighetslinjen.
- **Oppgavene er nyskrevne, også når de ligner** (§17).

### 11.2 Meta-fasit er FORBUDT

«En A-besvarelse ville her ha drøftet …» er en regibemerkning, ikke en fasit.
**Drøftelsen skal skrives UT** — kort, skarp, forankret, med landing.
Grep-sjekkes: `en A-besvarelse ville|en toppbesvarelse ville|ville ha drøftet|det
kan argumenteres begge veier` = 0 treff.

Margnotater er lov og ønsket, men de skal **peke på tekst som faktisk står der**:
`> Margnotat: her gjør «fordom» et konkret arbeid — den navngir hva leseren tok med seg inn, og hva i kilden som motsa det. Det er nettopp forskjellen H2024-veiledningen ber om mellom å nevne begrepet og å anvende det.`

### 11.3 Nivåfordeling og profilvariasjon (bindende)

| Kapittel | Nivåer som SKAL finnes | Profil |
|---|---|---|
| 0.3 | samme korte bestilling på **E-, C- og A-nivå**, med margkommentarer som viser nøyaktig hvor forskjellen ligger | E: to beskrivelser, ingen kontrast, ingen pensumbruk · C: korrekt kontrast, pensum nevnt i parentes, drøftingsledd som gjentar redegjørelsen · A: kontrasten driver et argument, to pensumbidrag gjør hvert sitt arbeid, én innvending besvares |
| 7.1–7.7 | momentliste (minimumskrav / gode / sterke besvarelser + feller) på hver oppgave | — |
| **7.8** (fagets etablering) | A + kommentert C + **autentisk midtnivåbesvarelse** | **A-en er en DYBDE-A**: ett fag, men forskyvningen mot humaniora notert og drøftet helt inn |
| **7.9** (hermeneutikk og digital undersøkelse) | A + kommentert C | **konkluderer SKARPT** (se 11.4); margnotatene viser hvor «fordom» brukes positivt, hvor frekvensfellen unngås, og hvor de to lesningene faktisk møtes |
| **7.10** (gruppeoppgaven) | A + kommentert C + **podkastvariant** | **A-en er en BREDDE-A** innenfor 1 500 ord, med ordtelling markert underveis så leseren ser hvordan budsjettet holdes |

**Den autentiske midtnivåbesvarelsen i kap. 7.8** er et README-krav: ekte
studentspråk, litt rotete disposisjon, ett godt selvstendig poeng om
de-kontekstualiseringen, men en avgrensning som aldri blir brukt. Med margnotater
om hva som er **BRA NOK** og de to–tre grepene som skiller den fra toppnivå.
Leseren trenger et realistisk sammenligningspunkt, ikke bare polert A og
karikert C.

**Podkastvarianten i kap. 7.10** er samme innhold som et manus på ti minutter,
med tidsanslag per del og referanseopplesningen etter slutten, pluss en kort boks
om hva som måtte endres fra den skriftlige versjonen og hvorfor en opplest
oppgave ikke er en podkast (feil #14). ⚠ **Skriftlig innlevering vurderes
strengere på form** — det skal stå.

### 11.4 Konklusjonsvariasjon (bindende)

- **Kap. 7.9 skal konkludere SKARPT:** A-besvarelsen tar klart standpunkt til hva
  de to lesningene sammen viser om fenomenet, skriver begrunnelsen ut — og er
  likevel toppnivå. Margnotat: «Forbehold er et verktøy, ikke obligatorisk
  garnityr. En skarp, begrunnet konklusjon er en fullgod A-form.»
- **7.8 og 7.10** kan lande mer avveiende, men må da begrunne selve avveiningen —
  «det kommer an på» uten grunner er feil #13 i ny drakt.
- Ikke alle modellbesvarelser skal lande på samme kompromissform.

---

## 12. Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»; SKAL i førsteutkastet)

- **Kun eksamensrelevant stoff.** «Bør kjenne til»-stoffet (den filosofiske
  dualismen i kap. 3.1, KI-boksen i kap. 6.1, historikk-notene om det utgåtte
  regimet) plasseres SIST i sitt kapittel og merkes eksplisitt med sin lave
  frekvens — men **aldri fjernes** (§7.5).
- **HARDT LINJEBRUTT PROSA ER FORBUDT (rendrings-kritisk).** Rendreren gjør HVERT
  enkelt `\n` om til `<br />`. Regelen: **ett avsnitt = én lang linje i
  JSON-strengen**, `\n\n` mellom avsnitt, og enkelt `\n` KUN der linjeskiftet
  faktisk er ønsket (deloppgaver, listelinjer, tabellrader, margnotater,
  flervalgsalternativer). Gjelder `content`, `problem`, `solution`, `task` og
  `hints`.
- **Godt, flytende norsk bokmål (UFRAVIKELIG).** Hele setninger, korte avsnitt
  (2–4 setninger), aktiv «du»-form. Telegramstil er FORBUDT — «Periode:
  middelalderen. Kunnskapssyn: Guds plan.» skrives «I middelalderen er kunnskapen
  forstått som del av en guddommelig plan». Konkret norsk knagg før fagtermen;
  presisjon vinner ved tvil. Latinske og fremmede uttrykk (*humanitas*,
  *paideia*, *auctoritas*, korpus, konkordans) får norsk forklaring først,
  termen i parentes ved første bruk per kapittel.
- **Hver oppgave synlig eksamensforankret** med sjangerens navn i ledende
  parentes:
  `(Eksamenssjanger epokekarakteristikk — EPO; slike oppgaver ber om epokens trekk, hva som skiller den fra den forrige, og hva senere perioder har kritisert ved den.)`
  Sjangerkoden skrives fullt ut ved første bruk per kapittel. Vanskelighetsgraden
  skrives ALDRI inn i `task` (den ligger i `difficulty`).
- **Deloppgaver merkes a), b), c) — ALDRI (i), (ii), (iii).** Ufravikelig
  produkteierregel. Hver deloppgave starter på **egen linje med merket i fet**:
  `…\n\n**a)** …\n**b)** …`. ALDRI a) b) c) bak hverandre i løpende tekst, aldri
  A)/[A]. Ikke bruk `subTasks`. Eneste unntak: ja/nei- og riktig/galt-lister av
  SELVSTENDIGE påstander i prøvekapitler (§5.7). ⚠ Retter du noe her, må oppgave
  OG fasit rettes i samme operasjon, og prosahenvisninger uten parentes («i ledd
  ii og iii») byttes ikke av et søk etter `(ii)`.
- **Inline-nummerering** `(1) … (2) … (3) …` med tre eller flere påfølgende settes
  på egne linjer. Gjelder særlig periodenettets seks kolonner, sjutrinnsrekka,
  epokekarakteristikkens fire trinn, avgrensningsoppgavens tre ledd,
  faghistorieoppgavens fem trinn, Gadamers fem begreper og revisjonsrubrikkens
  seks punkter.
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. 4.4](/exfac03-hark/exfac03-hark-4-4)`. Død «se kapittel
  X.Y»-tekst er FORBUDT. Aldri lenker i `title`-felt.
- **Karakter-realisme:** Del 0 sier eksplisitt at **C er en god og vanlig
  karakter**, og hva C faktisk krever (jevnt god prestasjon, tilfredsstillende på
  de fleste områder, god vurderingsevne og selvstendighet på de viktigste
  områdene). Formuleringen **«Prioritet: perfekt» er FORBUDT** — skriv «høyeste
  prioritet». Prioritetsklassene fra skjelettet oversettes: *høyeste* →
  **høyeste prioritet**, *bør beherskes* → **bør beherskes**, *bør kjennes til* →
  **bør kjenne til**. «Gapet til A» rammes inn som **oppgraderingsmeny**, ikke
  mangelliste.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter HVER prøvefasit og etter hver
  fasit i modellbesvarelsene — bruk rubrikkene i §6.4. I hvert temakapittel:
  minst én **lett innstegsoppgave** tidlig (`difficulty: "lett"`, ren gjengivelse
  med egne ord, vennlig fasit) før første fulle eksamenssjanger.
- **Verdens-caser, ikke metaeksempler.** Casene handler om et kassabokoppslag fra
  en landhandel, en beltespenne fra et gravfunn, et gavebrev som utgir seg for å
  være eldre enn det er, en krønike som forklarer et uvær, en digitaliseringsplan
  for et lokalarkiv og en frekvenskurve som stiger i et tiår — ALDRI «en
  medstudent skriver …».
- **Erfarings-bro (DNA-krav, kap. 7.5):** mange lesere har sterk personlig
  tilknytning til hjemstedet sitt, og H2024-2 ber uttrykkelig om et fenomen
  derfra. Kort `tip`-boks som viser KONVERTERINGEN: (1) start i Gadamers begrep,
  (2) bruk erfaringen som **illustrasjon** av forforståelsen, aldri som
  begrunnelse alene, (3) koble tilbake til sammenligningen. Å bare advare mot
  personlig synsing skyver bort nettopp de leserne som har mest materiale.
- **Difficulty-spredning + kald bank:** boka skal ha genuint krevende oppgaver
  merket `difficulty: "vanskelig"` (minst én per temadel), ikke alt på middels.
  Én merket **kald bank** i kap. 7.5 (§5.5), med momentliste som fasit.
- **Hint på alle oppgaver:** hvert `exercise` har utfylte `hints`. Første hint =
  hvilket begrep, hvilken periode, hvilken avsender eller hvilket første grep
  oppgaven krever («Start i hvilken kolonne i periodenettet spørsmålet gjelder —
  er det menneskesynet eller kunnskapssynet?») — **ALDRI konklusjonen**. Eneste
  unntak er den kalde banken.
- **Stokket flervalg og varierte fasit-mønstre:** statiske flervalg i
  prøve-`collapsible`-er har stokkede fasit-bokstaver (ALDRI «alle a»), og
  prøve-tipen sier hvor flervalget bor. Gjelder ALLE ensartede fasitlister, også
  anakronismedrillen i Del 1-prøve 2, fordomsdrillen i Del 4-prøve 4 og «hvilken
  feil begår kandidaten»-drillen i kap. 7.7 — aldri «alle feil», aldri samme
  fasit to ganger på rad. ⚠ **Blandingen skal være ekte:** seks av de ti
  setningene i anakronismedrillen er forsvarlige, og tre av de tolv utdragene i
  kap. 7.7 inneholder ingen feil.
- **Distraktorer straffer aldri grundig lesing:** en distraktor gjengir ALDRI
  bokas egen presisering som «galt» svar. Ligger en distraktor nær sannheten
  (typisk: «hermeneutikk er en metode for å tolke tekster», «fordom er noe man
  må legge fra seg», «historisme betyr interesse for historie», «N-gram viser
  hvordan betydningen endrer seg»), skal `explanation` forklare eksplisitt
  hvorfor den ikke holder.
- **Signal-/hintbokser ETTER oppgaven:** en boks som varsler hva en drilloppgave
  tester («her ligger fella med å lese frekvens som betydning») plasseres ETTER
  oppgaven eller som collapsible hint, aldri foran.
- **Frekvenstall = §6.2.** Ingen egne opptellinger, ingen «N av M» uten belegg i
  §6.2, ingen omregning, ingen bruk av skjelettets fire spriktall (§20).
- **Begrepsbank = oppslagsverk:** hvert pensumkart og hver begreps- og
  avsenderliste åpner med standardnotisen: «Begrepsbanken er
  flashcard-/repetisjonsstoff — den gjentar det du nettopp har lest. Hopp trygt
  over ved førstegangslesing; tidsanslaget for kapitlet gjelder kjernestoffet.»
  `definition`-blokker slettes ALDRI for å «rydde» — de er flashcard-kilden.
- **Øktmerking:** **alle 38 kapitler har `estimatedMinutes ≥ 45`**, og de 33 med
  mer enn 45 minutter skal ha tidsanslag i underoverskriftene («## Kontrasten mot
  middelalderen (~12 min)») eller eksplisitte «— naturlig pausepunkt
  —»-markører. Lange modellbesvarelser har pausepunkt mellom leddene.
  ⚠ Overskriften bærer NAVNET, aldri løkkenummeret (§1).
- **Tidsbudsjett-konsistens:** «Lite tid?»-boksen sier eksplisitt at kapitlenes
  tidsanslag er **LESEtid**, og at den som skriver for hånd bør legge på ca.
  ×1,5. ⚠ **Minimumsrådet er omskrevet for denne boka** (§7.6).

### 12.1 Del 0-pakken (alt dette SKAL finnes i kap. 0.1, der ikke annet er sagt)

- **«Slik leser du denne boka»-orienteringsboks** (type `text` eller `tip` —
  **ALDRI `definition`**) med karakterskalaen A–F, at **C er en god og vanlig
  karakter**, hva «C-stoff» og «A-markør» betyr, de seks sjangerkodene skrevet
  fullt ut, og at typiske feil har et samlet register (#1–#14) med eget kapittel
  (7.7).
- **«Lite tid?»-boks** (`tip`): hurtigrute for 3–5 dager (prioriter Del 0, Del 1,
  Del 2 og Del 7 — apparatet og håndverket — pluss kap. 4.4 og 6.2) og ukeplan
  bygget av summerte `estimatedMinutes`. **Summen av de 38 kapitlene er eksakt
  2 140 minutter ≈ 36 timer lesetid**; prøvekapitlene kommer i tillegg med
  7 × 120 = 840 minutter.
- **Deltidsrute 10–12 uker** med temadelprøvene fordelt underveis, sjangerprøven
  midtveis og øvingsmappe A, B og C de siste tre ukene — aldri stablet i siste
  uke. ⚠ Planen skal ta høyde for at mappa i virkeligheten skrives gjennom hele
  semesteret, med tre innleveringer og tre revisjoner.
- **«Lese mye, skrive lite»-boks:** legitim rute for lese-øveren (les
  bestillingen → formuler problemstilling og disposisjon mentalt i to setninger →
  les modellbesvarelsen som sensor) + minimumsrådet fra §7.6: **skriv minst ett
  fullt individuelt arbeid med avgrensningstrinn og én revisjonsrunde, og minst
  ett åpent spørsmål til en digital samling.**
- **Kildenoten** — ordlyden i §6.1.1, aldri utvidet.
- **Temafrekvenstabellen** som leserens prioriteringskart, med nevneren og
  enheten skrevet ut: periodisering og epokekarakteristikk **6 av 6 terminer** ·
  humanioras avgrensning **4 av 6** · positivisme, enhetsvitenskap og relativisme
  **4 av 6** · kildekritikk, historisme og kildesyn **2 av 6** · hermeneutikk
  **2 av 6** ⚠ · fagenes etablering **2 av 6** · menneskesyn og menneskelige
  fellesskap **2 av 6** · filosofisk dualisme **1 av 6** · digitale metoder og
  digital epistemologi **1 av 6** · museer, samlinger og kulturarv **1 av 6**.
  ⚠ **Med advarselen om at seks terminer ikke kan rangere temaer**, og med den
  motsatte advarselen om at de tre siste radene har 1 av 6 fordi de er **nye i
  dagens format**.
- **Sjangerkortet på ÉN side** som ER kortet: sjanger → én linjes oppskrift →
  hvilket ledd som bærer vekten → vanligste feil → hvilket kapittel i Del 7 som
  trener den. Ikke en lenkeliste.
- **«Hvem eier hva»-kortet** — begrep → verk eller avsender → poeng, for de ni
  bidragene arkivet faktisk navngir (§9.2).
- **Raushetskortet** — de åtte belagte punktene om hva som **ikke** straffes, på
  én side (§6.4).
- **De to formregimene** forklart kort og eksplisitt merket, med
  kalibreringsforbeholdet fra §7.2 skrevet ut, og med den ene setningen om
  hvorfor et sett fra 2021 ber om ett essay.
- **Quiz-ærligheten** (§7.7) — i klartekst, ikke i en fotnote.
- **Ordbudsjett-regnestykket** (§7.4) og arbeidskalenderen med
  tilbakemeldingsrunden (§6.6).
- **Casen «Slik leser du en mappebestilling»** på en nyskrevet tre-arbeiders
  mappe i gjeldende form, der leseren setter opp et ordbudsjett for de tre
  arbeidene og en arbeidskalender som tar høyde for at hvert arbeid skal gjennom
  en tilbakemeldingsrunde før innlevering.

---

## 13. Kvotekontrakt (AUTORITATIV — bindende total, aldri overstyr)

Verifisert mot skjelettets kvotesammendrag 6. august 2026 ved å lese de 38
kapittelblokkenes egne «Kvote:»-linjer programmatisk: **alle åtte deltotaler og
begge totaler summerer**, og summen av `estimatedMinutes` er **eksakt 2 140**.

| Del | Kapitler | Quiz | Flashcards | Minutter | Prøver |
|---|---|---|---|---|---|
| 0 | 0.1–0.3 | 42 | 32 | 160 | 0 |
| 1 | 1.1–1.3 | 66 | 66 | 165 | 4 |
| 2 | 2.1–2.7 | 170 | 170 | 425 | 4 |
| 3 | 3.1–3.3 | 70 | 70 | 175 | 4 |
| 4 | 4.1–4.4 | 92 | 92 | 230 | 4 |
| 5 | 5.1–5.4 | 90 | 90 | 225 | 4 |
| 6 | 6.1–6.4 | 88 | 88 | 220 | 4 |
| 7 | 7.1–7.10 | 124 | 91 | 540 | 4 (én sjangerprøve + tre øvingsmapper) |
| **Sum** | **38 kap.** | **742 ✓ (≥500)** | **699 ✓ (≥500)** | **2 140** | **28** |

Per kapittel (quiz · flashcards · minutter) — **minimum, aldri under;
overskyting er lov**:

| Kap. | Q · F · min | Kap. | Q · F · min | Kap. | Q · F · min |
|---|---|---|---|---|---|
| 0.1 | 12 · 10 · 45 | 2.5 | 24 · 24 · 60 | 5.3 | 24 · 24 · 60 |
| 0.2 | 16 · 12 · 60 | 2.6 | 26 · 26 · 65 | 5.4 | 22 · 22 · 55 |
| 0.3 | 14 · 10 · 55 | 2.7 | 24 · 24 · 60 | 6.1 | 20 · 20 · 50 |
| 1.1 | 24 · 24 · 60 | 3.1 | 24 · 24 · 60 | 6.2 | 24 · 24 · 60 |
| 1.2 | 22 · 22 · 55 | 3.2 | 22 · 22 · 55 | 6.3 | 22 · 22 · 55 |
| 1.3 | 20 · 20 · 50 | 3.3 | 24 · 24 · 60 | 6.4 | 22 · 22 · 55 |
| 2.1 | 24 · 24 · 60 | 4.1 | 22 · 22 · 55 | 7.1 | 14 · 10 · 50 |
| 2.2 | 22 · 22 · 55 | 4.2 | 20 · 20 · 50 | 7.2 | 14 · 10 · 50 |
| 2.3 | 24 · 24 · 60 | 4.3 | 24 · 24 · 60 | 7.3 | 16 · 12 · 60 |
| 2.4 | 26 · 26 · 65 | 4.4 | 26 · 26 · 65 | 7.4 | 14 · 10 · 55 |
| | | 5.1 | 20 · 20 · 50 | 7.5 | 16 · 12 · 60 |
| | | 5.2 | 24 · 24 · 60 | 7.6 | 14 · 10 · 55 |
| | | | | 7.7 | 18 · 12 · 55 |
| | | | | 7.8–7.10 | 6 · 5 · (50/55/50) |

**Bindende total: quiz 742 · flashcards 699 · 2 140 minutter.** Flashcards telles
som **toppnivå `definition`-blokker med `title`**. Prøvekapitler har ingen kvote
(ingen quiz, ingen begrepsbank). **Utgått eksamensform genererer null flashcards
og null quiz på innholdet** (§7.3).

**Hvorfor kvoten er som den er — og hva den IKKE er.** Emnet har aldri hatt en
flervalgsdel, og arkivet inneholder null flervalgsspørsmål. Banken er derfor
**ikke** en simulering av en eksamensdel, men et **lesehjelpemiddel for et stort
pensum** — hjemlet i at H2024-veiledningen selv sier at kurset har et for stort
pensum og at vanskelighetsgraden har vært høy for mange. Kvoten er vektet mot
**temadelene**, der pensummengden ligger, og er lav i Del 7, der ferdighetene
trenes med skriveoppgaver i stedet (§7.7).

### 13.1 Quiz-filformat

`src/lib/data/quiz-staging/exfac03-hark-<del>-<nr>.quiz.json`:

```json
[{ "question": "…", "options": ["riktig", "distraktor", "distraktor", "distraktor"], "explanation": "…" }]
```

Nøyaktig **4 alternativer**, `options[0]` **ALLTID** riktig. **Runtime stokker
rekkefølgen**, så `explanation` skal ALDRI si «alternativ to», «det tredje
alternativet», «svaret over» eller «det siste alternativet» — gjenta innholdet i
stedet: «Riktig svar er at fordommen hos Gadamer er den forforståelsen som gjør
at teksten i det hele tatt sier deg noe …». **Posisjonsreferanser er en hard
produkteierregel** (verifiseres med `sjekk-alternativref.py`). Ingen duplikate
alternativer. `explanation` på 2–4 setninger sier hvorfor fasiten er riktig OG
hvilken felle hver nære distraktor tester.

**LENGDE-TELL (hard produkteierregel):** fasiten skal **verken være det lengste
eller det korteste** alternativet systematisk. Alle fire alternativer skal ha
jevn lengde og presisjonsgrad — en leser som «velger det lengste» skal treffe
~25 %, ikke 77 %.

⚠ **Dette MÅLES, og førsteutkast lander erfaringsmessig på 60–80 %.** Grunnen er
strukturell: fasiten er den presise formuleringen av et begrep, og presisjon
koster ord, mens en distraktor er lett å skrive kort. **Rettemåten er å FORLENGE
DISTRAKTORENE**, ikke å trimme fasiten til den blir upresis — en distraktor skal
være en fullverdig, plausibel formulering som er gal på ett punkt. Trimming av
fasiten produserer nettopp de upresise redegjørelsene emnet straffer.

```bash
node scripts/hoyskolebok/quiz-lengdesjekk.mjs exfac03-hark   # flagger over 35 %
```

**Distraktor-kalibrering** — nabobegrep-distraktorer, aldri tullesvar:
positivisme mot relativisme (og svak mot sterk relativisme) · historisme mot
hermeneutikk · historisme mot historisisme · materielt mot funksjonelt kildesyn ·
levning mot beretning · nærlesning mot fjernlesning · frekvens mot
betydningsendring · fordom i dagligspråk mot fordom hos Gadamer · forståelses
horisont mot horisontsammensmeltning · kulturarkeologi mot post-prosessuell
arkeologi · de tre fagenes tidfesting mot hverandre · teleologisk mot organisk
mot stadiebasert historiesyn · universalisme mot det historisk spesifikke ·
begivenhetshistorie mot samfunnshistorie · digitalisert samling mot fysisk
samling · kunnskapsfelt mot fag mot disiplin · formell mot uformell institusjon.
I tillegg «hvilken periode hører dette utsagnet hjemme i»-koblinger, «hvilket
verk eller hvilken avsender bærer dette begrepet»-koblinger og «hvilken feil
begår denne kandidaten»-spørsmål.

**Fasitfordelingen rebalanseres til slutt** (jevn a/b/c/d) — men rebalanseringen
kjøres på quiz-filene, aldri på statiske flervalg i prøvetekster uten at fasiten
rettes i samme operasjon.

### 13.2 Flashcard-profil

Hovedvekten ligger på **begrep ↔ periode ↔ avsender**, fordi det er nøyaktig
presisjonen redegjørelsesleddene måler. Fem korttyper:

1. **Periodekort** — periode ↔ menneskesyn ↔ kunnskapssyn (rutenettets egne
   rader), pluss institusjon, grense mot nabofeltet og synet på fortiden.
2. **Kontrastkort** — begrep ↔ kontrastbegrep, med forskjellen som svar:
   positivisme mot relativisme · materielt mot funksjonelt kildesyn · nærlesning
   mot fjernlesning · brudd mot kontinuitet · begivenhets- mot samfunnshistorie ·
   historisme mot hermeneutikk.
3. **Gadamerkort** — begrep ↔ **hva det gjør i en analyse** (ikke bare hva det
   betyr).
4. **Fagkort** — fag ↔ tidfesting ↔ hva som skjedde i humaniora samtidig, med
   forskyvningen som svar.
5. **Avsenderkort** — verk eller avsender ↔ hvilket begrep det bærer, for de ni
   bidragene i §9.2. ⚠ Uten utgave, årstall og sidetall.

⚠ **Ingen flashcards på utgått eksamensform** (§7.3), og ingen flashcards på
pensumutgaver, sidetall eller panelbeskrivelsen fra H2024 (§9.2).

---

## 14. Fagspesifikk stil (ufravikelig for EXFAC03-HARK)

### 14.1 Notasjonsstandard

- **Norsk bokmål. Emnet er FORMELFRITT: ingen matematisk notasjon, ingen `$…$`
  noe sted.** Kravet om «Symbol- og formelliste» er dermed ikke relevant
  (README-unntaket for symbolfrie fag) — hvert temakapittel har `collapsible`
  **«Pensumkart for kapitlet»** og til slutt **«Begreps- og avsenderliste»**
  (§5.2).
- **Dollartegn som ikke er matte MÅ escapes som `\\$`.** Et enkelt bart `$` i en
  streng kutter resten av teksten til rå LaTeX-kilde for leseren. Oddetall `$` i
  samme tekstfelt felles av `sjekk-latex.py`.
- **Årstall skrives i vanlig tekst.** Periodegrenser skrives «ca. 1800», aldri
  «~1800». Terminer skrives «H2024» og «H2020-utsatt» (aldri «h24», aldri
  «høsten -24»). Oppgavenumre skrives «H2024-2» og «H2020-utsatt-1» (§6.2.1).
- **Tallformat:** norsk desimalkomma, prosent med mellomrom («34 %»),
  tusenskille med hardt mellomrom («5 000 ord», «1 750 ord», «2 300 tegn»).
- **Verktitler** skrives med «anførselstegn» i `title`-felter og i kursiv i
  brødtekst. ⚠ **Aldri sidetall, aldri utgave, aldri årstall for
  pensumlitteratur** (§9.2).
- **Periodenavn** skrives konsekvent (§9.3).
- **Skrivemåter (grep-konsistens):** «humaniora» · «humanitas» · «paideia» ·
  «kunnskapsfelt» / «fag» / «disiplin» · «det menneskeskapte» / «det naturskapte»
  · «anakronisme» · «menneskesyn» / «kunnskapssyn» · «formell» / «uformell
  institusjon» · «fakultetsinndeling» · «differensiering» · «nabofelt» ·
  «grensedragning» · «periodisering» · «teleologisk historiesyn» ·
  «frelseshistorie» · «auctoritas» · «kildekritikk» · «ytre» / «indre
  kildekritikk» · «levning» / «beretning» · «materielt» / «funksjonelt kildesyn»
  · «arkivstudier» · «tendens» / «opphavssituasjon» · «jegets fødsel» ·
  «universalisme» · «stadietenkning» · «enhetsvitenskap» · «framskritt» ·
  «historisme» · «det historisk spesifikke» / «det allmenne» · «folkeånd» ·
  «organisk utviklingstanke» · «strukturalisme» · «positivisme» / «relativisme»
  (svak og sterk) · «den myke» / «den harde humanioraen» · «forklare» / «forstå»
  · «historiens drivkrefter» · «begivenhetshistorie» / «samfunnshistorie» ·
  «postmodernisme» · «den språklige vendingen» · «brudd» / «kontinuitet» ·
  «representasjon» · «humanvitenskapens egenart» · «kategorisering» ·
  «erkjennelsesmessig» / «metodisk konsekvens» · «hermeneutikk» som «tradisjon,
  teori og metode» · «den hermeneutiske sirkelen» · «fordom» ·
  «forståelseshorisont» · «horisontsammensmeltning» · «virkningshistorie» ·
  «fortolkerens situering» · «nærlesning» / «fjernlesning» ·
  «vitenskapeliggjøring» · «de-kontekstualisering» · «erkjennelsesteori» ·
  «nasjonale historiske skoler» · «kulturarkeologi» · «den lange søvnen» ·
  «underteoretisert» · «post-prosessuell arkeologi» · «materiell kultur» ·
  «fasedrift» · «teoretisk-praktisk konstruksjon» · «tradisjon» / «fornying» ·
  «objektets sannhet» · «inngrep» / «reversibilitet» · «grensefag» ·
  «digitalisering» · «korpus» / «korpusskjevhet» · «tilgjengeliggjøring» /
  «bevaring» · «utvalg» · «grafisk grensesnitt» · «N-gram» · «frekvens» ·
  «konkordans» / «ordnaboer» · «digital epistemologi» · «løsrivelse fra kontekst»
  · «objektet som numerisk verdi» · «samling» / «innsamlingskontekst» ·
  «proveniens» · «kulturarv» · «utstillingskontekst» / «magasinkontekst» /
  «digital kontekst» · «kulturarvsetikk» · «åpent» / «lukket spørsmål» ·
  «bestilling» / «problemstilling» · «avgrensning» · «ordbudsjett» ·
  «revisjonsrunde» · «mappe» / «mappeinnlevering».

### 14.2 Sjangerkodene (introduseres i kap. 0.1, skrives fullt ut ved første bruk per kapittel)

**Kodene er byggespråk og skal ALDRI stå alene.** Skriv alltid sjangerens navn
først, koden i parentes. **Aldri kald kode i `competenceGoals` eller i kapitlets
første tekstboks.**

| Kode | Navn som skal brukes | Hva det er | Belegg |
|---|---|---|---|
| **EPO** | epokekarakteristikken | hva karakteriserer epoken filosofisk og historisk, hva skiller den fra tidligere epoker, og hva senere perioder har kritisert ved den | **3 av 11 forekomster** |
| **AVG** | avgrensningsoppgaven | definer humaniora, si hva som skiller det fra naturvitenskapen, og **vurder selve kategoriseringen** | **2 av 11 forekomster** |
| **LIN** | den lange linjen | følg én tendens gjennom sju perioder | **2 av 11 forekomster** + den tiende oppgaveteksten |
| **FAG** | faghistorieoppgaven | ett fags etablering som eget kunnskapsfelt, plassert mot humanioras samtidige utvikling | **1 av 11 forekomster** + H2022s oppgavetekst |
| **MET** | metodeanvendelsen på egen case | hermeneutisk analyse av et selvvalgt fenomen, deretter samme fenomen digitalt, og en sammenligning | **1 av 11 forekomster** + den tiende oppgaveteksten |
| **GRP** | gruppeoppgaven med digital utforskning | gruppens eget åpne spørsmål til en digitalt tilgjengelig samling, maks 1 500 ord, podkast tillatt | **1 av 11 forekomster** |

### 14.3 Feilkodene #1–#14 (glosses ved første bruk PER KAPITTEL)

| # | Feil | Hovedhjem |
|---|---|---|
| #1 | beskrive en epoke uten å si hva som skiller den fra den forrige | 7.1 |
| #2 | la det enkle redegjørelsesleddet spise oppgaven | 2.7 og 7.3 |
| #3 | bruke et fagbegrep som etikett uten å aktivere det | 4.3 |
| #4 | levere uten avgrensning og problemstilling | 0.2 |
| #5 | reprodusere pensum i stedet for å løse et problem | 7.5 |
| #6 | skrive om humaniora før 1800 som om feltet allerede fantes | 1.1 |
| #7 | lese N-gram-frekvens som betydningsendring | 6.2 |
| #8 | behandle Gadamers «fordom» som noe negativt | 4.4 |
| #9 | tro at hermeneutikk bare er en metode | 4.4 |
| #10 | skrive ett fags historie som om den gjaldt alle | 5.1 og 5.3 |
| #11 | la det digitale bli pynt i stedet for metode | 6.2 |
| #12 | framstille en digital samling som om man har stått foran den | 6.4 |
| #13 | prøve å dekke alt, og dermed ikke drøfte noe | 7.2 |
| #14 | levere en podkast som er en opplest oppgave | 7.6 |

**Registeret har nøyaktig fjorten koder.** Ikke innfør en femtende noe sted. Hele
registeret gjennomgås i kap. 7.7, og hver feil er hjemlet i minst én navngitt
sensorveiledning — med ærlighetsforbeholdet fra §5.5: **veiledningene uttrykker
sensors forhåndsforventninger, ikke observerte feil.** ⚠ **#13 er utledet**, ikke
sitert. ⚠ **#14 gjelder bare dem som velger podkastformatet.**

### 14.4 Prioritetsklasser

**høyeste prioritet** (skjelettets «høyeste» — 0.1, 0.2, 0.3, 1.1, 1.2, 1.3, 2.1,
2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 3.1, 3.2, 3.3, 4.3, 4.4, 5.1, 5.2, 5.3, 7.1, 7.2,
7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 7.10) · **bør beherskes** (4.1, 4.2, 5.4, 6.1,
6.2, 6.3, 6.4) · **bør kjenne til** (den filosofiske dualismen som eget tema i
3.1, KI-boksen i 6.1, historikk-notene om det utgåtte regimet).
**Skriv ALDRI «Prioritet: perfekt».** ⚠ «Bør beherskes» og «bør kjenne til» betyr
færre minutter og lavere kvote — **aldri at stoffet kan utelates**: hele Del 6
skal skrives i full bredde (§7.5).

### 14.5 Forbudt-termer og prosaregler (grep-sjekkes)

**Hard port** — `sjekk-bok.py`-regexen skal gi **0 treff** (kjøres
case-insensitivt; skriptet unntar automatisk kap. 0.1, som skal beskrive
kildesituasjonen og som er eneste sted «hjelpemidler» kan nevnes, og da bare for
å si at begrepet ikke gir mening i mappeformatet):

```
Prioritet: perfekt|Sist du var her|som du sikkert husker|du har jo allerede sett|dette kan du fra før|en A-besvarelse ville|en toppbesvarelse ville|ville ha drøftet|det kan argumenteres begge veier|studentbesvarelse|offisiell fasit|offisielle fasiter|eksamensfasit|arkivets fasit|fasit fra UiO|UiOs fasit|sensorveiledningenes fasit|offisiell løsning|offisielle løsninger|offisielle løsningsforslag|løsningsforslag fra UiO|UiOs løsningsforslag|modellbesvarelse fra UiO|autentiske eksamensoppgaver|hentet fra eksamenssettet|gjengitt fra sensorveiledningen|tidligere flervalgsoppgaver|tidligere flervalgsspørsmål|autentiske flervalgsspørsmål|autentiske flervalgsoppgaver|ekte flervalgsspørsmål|ekte eksamensspørsmål|flervalgsspørsmål fra UiO|eksamensspørsmål fra UiO|gjenkjente eksamensspørsmål|emnets flervalgsdel|eksamens flervalgsdel|alle eksamener|samtlige eksamener|alle terminer\b|samtlige terminer|H2019-veiledningen|H2023-veiledningen|H2025-veiledningen|H2026-veiledningen|veiledningen fra H2023|veiledningen fra H2025|utsatt-veiledningen|mappeeksamenene|mappeeksamener\b|mappeterminer|mappeterminene|mappesettene|flere mappeeksamen|alle mappeeksamen|hver mappeeksamen|de dokumenterte mappeeksamen|av 6 mappe|av seks mappe|de siste mappeeksamen|mappa pleier|mappa bruker å|mappa ber alltid|mappa spør alltid|mappa krever alltid|mappa ber som regel|mappa spør som regel|mappeformatet pleier|mappeoppgavene pleier|i de fleste mappeoppgavene|som regel i mappa|typisk for mappeeksamen|gjennomgående i mappeformatet|erfaringsmessig ber|ni oppgavetekster|de ni oppgavetekstene|ni unike oppgavetekster|ni av ti|9 av 10 unike|en tredel av eksamen|en tredjedel av eksamen|teller like mye|teller likt|vektes likt|hver teller en tredel|på 45 minutter|på 45 min\b|skriv dette på \d+ minutt|besvar dette på \d+ minutt|\bpå tid\b|tidtaking|ta tiden på|eksamensdøgn|skoleeksamen|hjelpemidler|strykprosent|karakterfordeling|sensurstatistikk|gjenbruke på exphil|gjenbrukes på exphil|uttelling på exphil|uttelling i exphil|samme stoff som i exphil|overføringsverdi til exphil|dobbelt opp med exphil|dekker begge emner|svexfac|facultatum for historie, arkeologi og kulturhistorie|\bs\.\s?\d+|\bside(ne)? \d+|\d\.\s*utgave|\((19|20)\d{2}\)
```

```bash
python3 scripts/hoyskolebok/sjekk-bok.py exfac03-hark "<regexen over, i én linje>"
```

**Begrunnelse per gruppe:**

- `Prioritet: perfekt` er plattformforbud (karakter-realisme, §12).
- Deiksis-uttrykkene peker feil vei — Forkunnskaper-blokka oppsummerer et ANNET
  kapittel (§5.1).
- Meta-fasit-uttrykkene er forbudt fordi drøftelsen skal skrives ut (§11.2).
- «studentbesvarelse» er usant — alle modellbesvarelser er nyskrevne (§11.1).
- Fasit- og løsningspåstandene er usanne: arkivet har **null** av begge deler
  (§6.1 punkt 1).
- **Flervalgsgruppen** (§7.7): hver av disse formuleringene ville påstått at boka
  har trent på spørsmål som aldri har eksistert. Emnet har aldri hatt en
  flervalgsdel.
- `alle eksamener`, `samtlige eksamener` og `alle terminer` bryter
  nevnerdisiplinen (§6.1 punkt 2 og §6.3): emnet er eldre enn arkivet.
- **`H2019-veiledningen`, `H2023-veiledningen`, `H2025-veiledningen` og
  `utsatt-veiledningen` omtaler dokumenter som ikke finnes** (§6.1 punkt 5).
  Dette er den mest sannsynlige enkeltfeilen i talldisiplinen, fordi H2023 og de
  to utsatte settene står i terminlistene og frister til å bli omtalt som om de
  hadde veiledning. **Sensorveiledning finnes bare for H2020, H2021, H2022 og
  H2024.**
- **Mappeform-gruppen er bokas viktigste port** (§7.2): flertallsformer,
  vanespråk og regelmessighetspåstander om en eksamensform som er dokumentert i
  **ett** sett.
- `ni oppgavetekster` og følgesvennene fanger skjelettets regnefeil (§8.2,
  §20 sprik 1). ⚠ **«de ni bidragene» om pensum er et annet og korrekt tall og
  treffes ikke av mønsteret** — det er «oppgavetekster» og «av ti» som er
  forbudt.
- `en tredel av eksamen` og vektingsformene antyder en vekting mellom mappas tre
  arbeider som ikke er oppgitt noe sted (§7.4, §20 sprik 2).
- Tidtakingsgruppen bryter mappeformatet (§7.6). `skoleeksamen` og `eksamensdøgn`
  er dessuten påstander om det utgåtte regimet arkivet ikke hjemler (§7.1).
  `hjelpemidler` er ikke et meningsfullt begrep i mappeformatet.
- `strykprosent`, `karakterfordeling` og `sensurstatistikk` finnes ikke i
  materialet (§6.1 punkt 10).
- Exphil-gruppen er kryssgevinst-forbudet (§15). `svexfac` er hardt forbudt fordi
  slektskapet er forretningsmessig, ikke faglig, og ingen lenke dit er tillatt.
- `facultatum for historie, arkeologi og kulturhistorie` fanger feil emnenavn —
  kulturhistorie er en studentgruppe, ikke en del av tittelen. ⚠ Mønsteret er
  skrevet med komma og full setning med vilje: «arkeologi- og
  kulturhistoriestudentene» er en helt lovlig og nødvendig formulering.
- `\bs\.\s?\d+`, `\bside(ne)? \d+`, `\d\.\s*utgave` og `\((19|20)\d{2}\)` fanger
  sidetall, utgaver og parentesårstall i pensumreferanser — ingen av delene er
  attestert (§9.2). ⚠ Mønsteret `\bside(ne)? \d+` er skrevet slik og ikke
  `\bsiden? \d+` med vilje: det siste ville felt «siden 2020», som er helt vanlig
  prosa i denne boka.

**⚠ Malene i §6.1.1 (kildenoten), §7.2 (formrammen), §7.4 (ordbudsjettet), §7.7
(quiz-ærligheten) og §11.1 (modellbesvarelseslinjen) er testet mot denne regexen
6. august 2026 og gir alle null treff.** Regexen er samtidig kontrollert mot ni
planlagte brudd, som alle ble fanget. **Endrer du en av malene, kjør testen på
nytt:**

```bash
python3 - <<'EOF'
import re
MAL = open("docs/hoyskole-boker/exfac03-hark/BYGGEKONTRAKT.md", encoding="utf-8").read()
# Regexen leses ut av kontrakten selv, så testen aldri kan komme i utakt med den.
RX = re.search(r"^Prioritet: perfekt\|.*$", MAL, re.M).group(0)
def utsnitt(a, b):
    s = MAL.index(a); e = MAL.index(b, s) + len(b)
    return MAL[s:e]
# ⚠ Bruk sluttmarkør, ikke et fast tegnvindu: kommentarene rett ETTER malene
# siterer med vilje de forbudte formene, og et for stort vindu gir falske treff.
for navn, (a, b) in {
    "KILDENOTE":  ("Boka er kalibrert mot hele EXFAC03-HARK-arkivet",
                   "oppgitt i materialet."),
    "FORMRAMME":  ("Alt denne boka sier om hva mappa krever",
                   "høsten 2023 mangler helt."),
    "ORDBUDSJETT": ("UiOs emneside oppgir at hele mappa",
                    "gir 1 750."),
    "QUIZMAL":    ("Emnet har aldri hatt en flervalgsdel. Ingen av de seks",
                   "slik ut i det hele tatt."),
    "MODELLSVAR": ("Nyskrevet modellbesvarelse — skrevet av oss",
                   "ekte kandidatbesvarelse."),
}.items():
    print(navn + ":", re.findall(RX, utsnitt(a, b), re.I) or "ingen — malen er lovlig")
EOF
```

**Prosaregler** — ord som SKAL kunne stå, men bare i en ramme
(`sjekk-prosaregel.py`, ±200 tegn rundt treffet). `--streng` slår av den
kapittelvide fallbacken og krever rammen ved HVER forekomst. Alle skal være
grønne:

```bash
# 1. FORMPORTEN (§7.2): hvert kapittel som omtaler mappa, må si at grunnlaget
#    er én dokumentert termin. Kapittelvid ramme er nok.
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-hark \
    "mappeeksamen|mappeinnlevering|eksamensmappa|mappeformat|mappeformen|\bmappa\b|mappeoppgave" \
    "H2024|én termin|ett sett|bare én termin|kun én termin|én dokumentert|ett dokumentert|1 av 6 terminer|én av de seks terminene"

# 2. ORDBUDSJETT-PORTEN (§7.4): 1 750 er en SLUTNING, og regnestykket skal være
#    synlig ved HVER forekomst.
python3 scripts/hoyskolebok/sjekk-prosaregel.py --streng exfac03-hark \
    "1\s?750" \
    "slutning|regnestykk|5 000 ord|5000 ord|ikke et krav|ikke oppgitt|utledet|minus 1 500"

# 3. UVERIFISERT-PORTEN (§6.1): 5 000-ordsgrensen er en UiO-opplysning.
python3 scripts/hoyskolebok/sjekk-prosaregel.py --streng exfac03-hark \
    "5\s?000 ord" \
    "emneside|emnesiden|semestersiden|UiO oppgir|ikke i arkivet|står ikke i arkivet"

# 4. NEVNERPORTEN (§6.3): enhver «av N»-brøk må bruke en lovlig nevner, med
#    enheten skrevet ut.
python3 scripts/hoyskolebok/sjekk-prosaregel.py --streng exfac03-hark \
    "\bav \d+ (terminer|eksamensterminer|sensorveiledninger|veiledninger|forekomster|oppgavetekster|oppgaver|sett|eksamenssett|filer|mappeoppgaver|arbeider)" \
    "av 6 terminer|av 4 sensorveiledninger|av 11 forekomster|av 11 oppgavetekst-forekomster|av 10 unike oppgavetekster|av 5 terminer|av 4 ordinære terminer|av 3 oppgaver|av 3 mappeoppgaver|av 3 arbeider|av mappas 3"

# 5. SANNFERDIGHETSPORTEN (§6.1 punkt 1): «løsningsforslag» og «fasit fra» kan
#    bare stå der boka sier at slikt IKKE finnes.
python3 scripts/hoyskolebok/sjekk-prosaregel.py --streng exfac03-hark \
    "løsningsforslag|fasit fra|modellbesvarelse fra eksamen|ekte kandidatbesvarelse|offisiell besvarelse" \
    "ingen|null|finnes ikke|inneholder ikke|har ikke|aldri|ikke er|ikke en ekte|nyskrev|skrevet av oss"

# 6. HISTORIKKPORTEN (§7.3): det utgåtte regimets FORM skal alltid merkes utgått.
python3 scripts/hoyskolebok/sjekk-prosaregel.py --streng exfac03-hark \
    "3–5 normalsider|2 300 tegn|normalsider" \
    "utgått|ikke lenger|tidligere regime|kun oppgitt i H2020|historikk|H2020"

# 7. SLUTNINGSPORTEN (§7.1): om det utgåtte regimet var hjemmeeksamen, vet vi ikke.
python3 scripts/hoyskolebok/sjekk-prosaregel.py --streng exfac03-hark \
    "hjemmeeksamen" \
    "slutning|vet ikke|ikke belegg|står ikke|ikke oppgitt|peker mot"

# 8. TIENDE-OPPGAVETEKST-PORTEN (§6.1 punkt 7): forbeholdet skal stå i kapitlet.
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-hark \
    "den tiende oppgaveteksten|tredelte hermeneutikkoppgaven" \
    "uten kjent termin|ukjent termin|ikke samme oppgave|gjelder ikke samme|forbehold"

# 9. NIVÅPORTEN (§11.1): nivåbeskrivelsene er utledet, ikke observert.
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-hark \
    "A-besvarelse|C-besvarelse|sterke besvarelser|minimumskrav" \
    "utledet|ikke observert|nyskrev|skrevet av oss"

# 10. KRYSSGEVINST-PORTEN (§15): exphil kun som annet emne med egne krav.
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-hark \
    "exphil|examen philosophicum" \
    "annet emne|eget pensum|andre krav|ingen uttelling|ikke uttelling|nevner ikke|rent tematisk|ikke en snarvei|forskjellen i spørsmålsstilling"

# 11. RAPPORTERT-PORTEN (§5.5): «erfaringsvis» og «erfaringsmessig» finnes bare
#     som H2024s to rapporterte observasjoner.
python3 scripts/hoyskolebok/sjekk-prosaregel.py --streng exfac03-hark \
    "erfaringsvis|erfaringsmessig|sensor har sett|kandidater pleier" \
    "H2024|rapportert|observert|for stort pensum|usikkerhet"

# 12. HEDGE-PORTEN (§9.3): «noen mener» kun der det finnes en reell uenighet.
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-hark \
    "noen mener|mange mener|det hevdes at" \
    "posisjon|omstridt|uenig|debatt|drøft|standpunkt|begge sider|takhøyde"
```

Port **1, 2, 3, 4, 5, 6, 7, 8 og 11** er **sannferdighetsportene** og de
viktigste i denne boka: et kapittel som beskriver mappa uten å si at grunnlaget
er ett sett, lover bredere formbelegg enn arkivet gir; 1 750 uten regnestykket
blir lest som et krav; 5 000 uten kilden blir lest som arkivbelegg; en brøk med
ulovlig nevner er en oppdiktet frekvenspåstand; «løsningsforslag» om arkivet er
usant; det utgåtte regimets sidetall presentert uten merking trener feil form; og
«erfaringsvis» uten H2024-rammen gjør sensors forhåndsforventninger om til
observerte feil.

I tillegg gjelder **PORT C** (Del 6-nevnerboksen, §7.5) og **PORT E**
(forekomst-eierskapet, §6.2.1).

### 14.6 PORT E — forekomst-eierskapet (fikstur-testet 6. august 2026)

Porten fanger både oppdiktede oppgavenumre og oppgavenumre brukt i feil kapittel.
Kjørt mot fikstur: den fanget «H2024-2» og «H2020-utsatt-2» påberopt i et
kapittel som ikke eier dem, og slapp gjennom de lovlige i 5-2, 6-2 og 6-4.

```bash
python3 - <<'EOF'
# PORT E — EXFAC03-HARK: oppgavetekst-forekomstene er hjemlet per kapittel (§6.2.1).
import glob, json, os, re, sys
KAT = "src/lib/data/chapters"
EIER = {
    "H2020-1":        {"0-1", "2-4", "7-1"},
    "H2020-2":        {"0-1", "3-1"},
    "H2020-utsatt-1": {"2-5", "7-1"},
    "H2020-utsatt-2": {"3-1", "7-2"},
    "H2021-utsatt-1": {"2-5", "7-1"},
    "H2021-utsatt-2": {"3-1", "7-2"},
    "H2024-1":        {"3-2", "5-1", "5-2", "5-3", "5-4", "7-4", "7-8"},
    "H2024-2":        {"4-4", "6-2", "7-5", "7-9"},
    "H2024-3":        {"6-4", "7-6", "7-10"},
}
# Kap. 0.1 gir hele oversikten, prøvekapitlene speiler flere deler, og kap. 7.7
# er feilregisteret som siterer på tvers.
FRI = {"0-1", "7-7"} | {f"{d}-prove" for d in range(1, 8)}
RX = re.compile(r"H20(?:20|21|24)(?:-utsatt)?-\d")
def tekst(o):
    if isinstance(o, str): return o
    if isinstance(o, dict): return " ".join(tekst(v) for v in o.values())
    if isinstance(o, list): return " ".join(tekst(v) for v in o)
    return ""
avvik, n = [], 0
for p in sorted(glob.glob(os.path.join(KAT, "exfac03-hark-*.json"))):
    kap = os.path.basename(p)[len("exfac03-hark-"):-5]
    for m in RX.finditer(tekst(json.load(open(p, encoding="utf-8")))):
        n += 1
        d = m.group(0)
        if d not in EIER:
            avvik.append(f"{kap}: «{d}» finnes ikke — arkivet har 11 forekomster, se §6.2.1")
        elif kap not in EIER[d] and kap not in FRI:
            avvik.append(f"{kap}: «{d}» er hjemlet i {sorted(EIER[d])}, ikke her")
print(f"{n} forekomstreferanser | avvik: {len(set(avvik))}")
for a in sorted(set(avvik)): print(" -", a)
sys.exit(1 if avvik else 0)
EOF
```

⚠ **Porten dekker ikke H2021 og H2022**, fordi de har bare én oppgavetekst hver
og derfor skrives uten nummer. Kontroller manuelt at H2021 bare påberopes i
kap. 1.1, 1.2 og 7.3, og at H2022s **oppgavetekst** bare påberopes i kap. 2.6,
2.7, 5.3, 7.3 og 7.4. **H2022-veiledningen** kan derimot siteres som sensorkrav
overalt — den er en ekte sensorveiledning fra emnet uansett hvilken oppgave den
hører til (§6.1 punkt 7).

---

## 15. Kryssbok-lenker — NØYAKTIG ÉN, og ingen andre

⚠ **Ingen av de fire sensorveiledningene nevner EXPHIL03 med ett ord.** Boka skal
derfor **ikke love uttelling for exphil-stoff**. Overlappet er lite og gjelder
**personer, ikke spørsmål**:

| figur | i EXPHIL03 (vår bok) | i EXFAC03-HARK |
|---|---|---|
| **Descartes** | kap. 1.1 metodisk tvil og cogito; kap. 2.4 dualismen og Elisabeths innvending | H2020-2: dualismens **rolle i europeisk humaniorahistorie**, med kritikere og alternativer |
| **Platon** | kap. 2.1 Menon, Faidon og idélæren | H2020-2: dualismens opphav som ledd i en idéhistorisk linje |
| **Kant** | kap. 1.4 «Hva er opplysning?»; kap. 3.2 pliktetikken | H2020-1: opplysningstiden som **epoke**, ikke Kants argument |
| **Aristoteles** | kap. 2.2 substans, de fire årsakene, teleologi | H2021: middelalderens teleologiske historiesyn |

**Forskjellen er systematisk:** EXPHIL03 ber kandidaten rekonstruere et
**argument** og drøfte om det holder. EXFAC03-HARK ber henne plassere en
**posisjon i en periode** og forklare hva den gjorde med fagenes selvforståelse.

**Den eneste tillatte kryssbok-lenken i hele boka:**

| Kapittel | Lenke | Innramming (skal stå i samme setning) |
|---|---|---|
| **3.1** | `[Sinn og kropp — Descartes' dualisme og Elisabeths innvending](/exphil03/exphil03-2-4)` | «Et annet emne med eget pensum og egne krav. **Der spør eksamen om argumentet holder; her spør den hvilken rolle posisjonen spilte i humanioras historie.** Ingen EXFAC03-HARK-veiledning nevner exphil, så det gir ingen uttelling her å ha lest det.» |

**Bindende:**

- **Ingen andre kryssbok-lenker.** Ikke i noe kapittel, ikke i noen fasit, ikke i
  noen studieguide-seksjon.
- **Lenketeksten skal si hva som er forskjellen i spørsmålsstilling.** En lenke
  uten den forskjellen skrevet ut er en byggefeil.
- **Ingen kryssgevinst skal loves.** Formuleringer av typen «dette kan du
  gjenbruke på exphil», «her får du uttelling på begge emner» eller «samme stoff
  som i exphil» er hardt forbudt (§14.5), og prosaregel 10 håndhever rammen.
- **Ingen lenker til `svexfac03`.** Slektskapet er forretningsmessig, ikke
  faglig. Ett reelt berøringspunkt finnes — positivismedebatten og skillet mellom
  naturvitenskapelig og humanvitenskapelig forklaring — men EXFAC03-HARK
  behandler det som **faghistorie**, SVEXFAC03 som **metodologi**. Ordet
  `svexfac` er hardt forbudt (§14.5).

**⚠ Eksplisitt FORBUDTE lenkemål**, kontrollert 6. august 2026:

| Mål | Hvorfor det er fristende | Status |
|---|---|---|
| `svexfac03` | samme emnetype, samme fakultetsblokk, 53 kapittelfiler på disk | **forbudt** — se over |
| `jfexfac04` | samme emnetype, 41 kapittelfiler på disk | **forbudt** — annet fakultet, annet pensum, ingen hjemmel i arkivet |
| `exfac03-east`, `exfac03-nord`, `exfac03-spr` | søsteremner med samme kodefamilie | **forbudt** — skjelett finnes, men **null kapittelfiler på disk**; en død lenke i en live bok er en synlig feil |
| `fil1001` | idéhistorisk nabo, 37 kapittelfiler på disk | **forbudt** — ingen hjemmel i arkivet |
| `historie` (VGS, 150 kapittelfiler) | boka handler om historiefagets historie | **forbudt** — annet nivå, og arkivet gir ingen støtte for VGS-repetisjon |
| `kulkom1001`, `tik4001`, `fil1003` | tematisk nære | **forbudt** — null kapittelfiler på disk |

Interne lenker skrives som `[kap. 4.4](/exfac03-hark/exfac03-hark-4-4)` og skal
kun peke på kapitler som allerede er bygget når boka gates. Vil du legge til en
lenke som ikke står i tabellen, kjør `ls src/lib/data/chapters/<id>.json` **og**
grep etter id-en i `src/lib/data/textbook-courses*.ts` først — `sjekk-bok.py`
avviser døde lenker.

**Byggerekkefølge** (fra skjelettets §6): Del 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 →
prøver. Merk at **0.2 og 0.3 må stå ferdig FØR alt annet**, **1.2 FØR Del 2**,
**2.3 FØR 3.1 og 4.1**, **2.5 FØR 3.2 og 4.2**, **2.6 FØR 3.3**, **4.1 FØR 4.2**,
**4.3 FØR 4.4**, **5.1 FØR 5.2–5.4**, **6.2 FØR 6.3**, **5.3 og 6.3 FØR 6.4**, og
**hele Del 1–6 FØR Del 7**. Beltespenne-casen introduseres i kap. 5.1 og tas opp
igjen i kap. 6.3; sjutrinnsdrillen introduseres i kap. 3.3 og videreføres i
kap. 7.3.

---

## 16. Tekniske feller (les før første `json.dump`)

1. **JSON-gyldighet.** Bruk `json.dump`. Faget er fullt av anførselstegn — én
   uescapet anførsel blokkerer hele plattformens prebuild.
2. **Hardt linjebrutt prosa er FORBUDT.** Rendreren gjør hvert enkelt `\n` om til
   `<br />`. Ett avsnitt = én lang linje; `\n\n` mellom avsnitt; enkelt `\n` kun
   der linjeskiftet er ønsket. Gjelder `content`, `problem`, `solution`, `task`
   og `hints`. Ikke bruk trippelfnutt-strenger med innrykk eller `textwrap` på
   brødtekst.
3. **Bart `$` er forbudt** — skriv `\\$`. Oddetall `$` i samme tekstfelt =
   avkuttet tekst = rå kildekode synlig for leseren. Boka har ingen LaTeX i det
   hele tatt (§14.1).
4. **`chapterNumber` alltid del-basert** («4.4»), aldri lineær («18»).
   Prøvekapitler: «4.P».
5. **`difficulty` er `lett` | `middels` | `vanskelig`** — aldri `medium`/`hard`
   (§4). EXPHIL03-kontrakten sier `"medium"`; **ikke kopier den regelen hit.**
6. **Ingen tom `collapsible`.** Feltet heter `content` og skal inneholde blokker.
   En `text`-nøkkel eller `[]` rendrer som en tom boks.
7. **Unike blokk-id-er** innen kapitlet.
8. **Flashcards kommer KUN fra toppnivå `definition` med `title`.** Flytter du en
   definisjon inn i en `collapsible` for å «rydde», forsvinner kortet fra kvoten.
   Orienteringsboksen i Del 0 skal derfor være `text`/`tip`, ALDRI `definition`.
9. **`(verifiser)`-markører** skrives i den literale formen `(verifiser)` og løses
   i fase 6 FØR `sjekk-bok.py` kjøres siste gang. ⚠ Gjelder særlig
   pensumkoblingene skjelettet merker med ⚠ (§9.2).
10. **Ingen `subTasks`, `answer`, `solutionVideo`, `allowsUpload`,
    `allowsCanvasDrawing`** i `exercise`.
11. **Quiz-forklaringer refererer aldri til alternativets plassering** — runtime
    stokker (§13.1).
12. **Ikke bruk `grep -o` med `.{0,N}`-kontekst** mot kapittelfilene: de er
    kompakt JSON på én linje, og mønsteret er kvadratisk (17 GB RAM på
    byggemaskinen 25. juli 2026). Bruk `sjekk-prosaregel.py` og portene i §7.5 og
    §14.6, som leser JSON-strukturen.
13. **Ikke skriv «Løkke N» i overskrifter eller prosa** (§1).
14. **Ingen markdown i `description`/`title`/`competenceGoals`** (§3.1) — feltet
    havner rått i Google-treffet.
15. **Deloppgaver a), b), c) — og fasiten rettes i samme operasjon** som oppgaven
    om merkingen endres (§12).
16. ⚠ **Emnet er formelfritt, men `sjekk-latex.py` skal likevel kjøres** — den
    fanger bare `$`-tegn, og et bart dollartegn i en prosasetning ville kuttet
    teksten for leseren.

---

## 17. Opphavsrett (ufravikelig)

ALLE oppgaver, case, eksempler, «modellbesvarelser» og flervalgsspørsmål er
**NYSKREVNE** — eksamenssjangrene er malen, ALDRI originaloppgavene. Ingen
formuleringer fra UiO-oppgavesettene eller fra de fire sensorveiledningene
gjengis ordrett, heller ikke i omskrevet-nær form.

⚠ **Gjentakelsen er den største fristelsen i denne boka.** De to utsatte settene
er ordrett like, og formelen i epokekarakteristikken gjentas nesten ordrett i tre
oppgavetekster. **De gjengis ikke som oppgavetekst.** Boka kan si hva
bestillingen handler om og hvor ofte den er gitt, og skal så gi leseren en
**nyskrevet** oppgave i samme sjanger.

**Arkivets caser gjengis aldri.** Seminarcaset H2022-veiledningen navngir og
ekskursjonen til Historisk museum i H2024 **skal ikke gjengis**. De kan nevnes
som eksempler på hva slags undervisning emnet har hatt, men alle analyser er på
bokas egne, nyskrevne caser.

**Pensumlitteraturen refereres og parafraseres** — aldri siteres i lengde, aldri
med sidetall, aldri med utgave eller årstall (§9.2). De etablerte begrepene er
faglig allmenneie og forklares under sine egne navn. **Tillatte pensumankere er
uttømmende gitt av §9.2.** Ingen oppdiktede referanser, verk, forskere, årstall
eller tall — og **ingen oppdiktet tittel på Olsens bidrag**.

⚠ **Panelbeskrivelsen fra H2024-veiledningen gjengis ikke** (§9.2).

Boka fremstiller seg ALDRI som offisiell, godkjent eller UiO-tilknyttet, og lover
ALDRI et eksamensutfall. (Uavhengighetsdeklarasjonen vises automatisk av
plattformen for `level: 'Høyskole'` — se README «Juridiske deklarasjoner».)

---

## 18. BOKCONFIG og wiring (fase 5)

`BOKCONFIG.json` ligger ferdig i denne mappa:

```json
{
  "title": "EXFAC03-HARK Examen facultatum for historie, arkeologi og konservering",
  "description": "Eksamensrettet lærebok for EXFAC03-HARK ved UiO — kalibrert mot seks eksamensterminer 2020–2024: humanioras sju perioder, grensen mot naturvitenskapen, hermeneutikken etter Gadamer, fagenes etablering som kunnskapsfelt og digital humaniora",
  "icon": "🏺",
  "institusjon": "uio",
  "prøvedeler": [1, 2, 3, 4, 5, 6, 7],
  "sectionNames": { "0": "Eksamenskart og mappehåndverk", "…": "…", "7": "Eksamenstrening" }
}
```

`sectionNames` er skjelettets åtte seksjonstitler, ordrett. `icon` er **🏺** —
kontrollert mot de 41 andre `BOKCONFIG.json`-filene 6. august 2026: ingen annen
bok bruker den, så institusjonsgridet på `/trinn/hoyere` forblir lesbart.

### 18.1 `description` — HARDT FORMATKRAV, verifisert programmatisk

Kursforsiden parser feltet og splitter det i en ingress, en «Bygget på …»-boks og
emne-chips. Parseren i `src/app/[courseId]/page.tsx`:

```js
description.match(/^(.*?)\s*—\s*kalibrert mot\s+([^:]+?)\s*(?::\s*(.+?))?\.?$/)
// topics: m[3].split(/,\s*|\s+og\s+/)
```

Kjørt mot beskrivelsen over 6. august 2026:

| ledd | verdi | krav |
|---|---|---|
| ingress | «Eksamensrettet lærebok for EXFAC03-HARK ved UiO» (47 tegn) | ≤ ~90 ✓ |
| kalibrering | «seks eksamensterminer 2020–2024» | kort, uten «bygget på»-ord ✓ |
| temaer | humanioras sju perioder · grensen mot naturvitenskapen · hermeneutikken etter Gadamer · fagenes etablering som kunnskapsfelt · digital humaniora | 5 stk, 2–4 ord hver ✓ |
| samlet lengde | 239 tegn | < 250 ✓ |
| forbudte tegn inne i leddene | ingen `;`, `:` eller `—` | ✓ |
| « og » inne i et enkelt temaledd | ingen | ✓ |

⚠ **Temalista splittes på BÅDE komma og « og ».** Et temaledd som selv inneholder
«og» sprekker i to meningsløse chips. Derfor står «fagenes etablering som
kunnskapsfelt» og «digital humaniora» som to atskilte ledd, og derfor er
årstallene skrevet med tankestrek «2020–2024» og ikke som «fra 2020 til 2024»
(som ville vært lengre uten å gi bedre chips). Testen:

```bash
python3 - <<'EOF'
import json, re
cfg = json.load(open("docs/hoyskole-boker/exfac03-hark/BOKCONFIG.json", encoding="utf-8"))
d = cfg["description"]
m = re.match(r"^(.*?)\s*—\s*kalibrert mot\s+([^:]+?)\s*(?::\s*(.+?))?\.?$", d)
assert m, "MATCHER IKKE parseren — hele beskrivelsen ville falt ut som én grå tekstblokk"
topics = [t.strip() for t in re.split(r",\s*|\s+og\s+", m.group(3))]
print("len:", len(d), "| ingress:", len(m.group(1)), "| kalibrering:", m.group(2))
print("temaer:", topics)
assert len(d) < 250 and len(m.group(1)) <= 90 and 3 <= len(topics) <= 6
assert not [c for c in d.replace(" — ", "", 1).replace(": ", "", 1) if c in ";—:"]
assert not any(" og " in t for t in topics)
print("OK")
EOF
```

Kjørt 6. august 2026: **OK** (len 239, ingress 47, fem temaer, ingen ulovlige
tegn).

⚠ **Hvorfor beskrivelsen IKKE nevner mappeformen.** Kalibreringsleddet sier hva
boka er bygget på — seks terminer — og det er sant. Det påstår ingenting om at
mappeformen er dokumentert i seks terminer, og skal heller ikke gjøre det. **Vil
noen legge til «mappeeksamen» i ingressen eller kalibreringsleddet, MÅ strengen
testes på nytt mot både parseren over og forbudt-regexen i §14.5** — flertallsformer
som «mappeeksamener» felles av porten, og lengdegrensen på 250 tegn er bare 11
tegn unna. **Ett-termins-forbeholdet hører i `kildegrunnlag.ts` og i kap. 0.1**
(§18.3), ikke i kursbeskrivelsen.

### 18.2 `title` — et teknisk krav, ikke pynt

`wire-bok.py` skriver `cfg['title']` både til kursmetadataen og til
`src/app/trinn/hoyere/institusjoner.ts`, og kursets `title` er det
`HoyskoleDisclaimer` bruker for å avgjøre om en fagspesifikk ansvarslinje vises:

```js
erJus(courseId, title)   // /^jus/i.test(courseId) || /\brett(s\w*)?\b|juridisk/i.test(title)
erHelse(courseId, title) // /^psy/i.test(courseId) || /…|helse|psykolog|…/i.test(`${courseId} ${title}`)
```

Testet 6. august 2026 med tittelen «EXFAC03-HARK Examen facultatum for historie,
arkeologi og konservering»: **erJus = False, erHelse = False.** Det er riktig —
dette er verken et juridisk eller et helsefaglig emne, og boka skal bare ha den
generelle uavhengighetsdeklarasjonen.

⚠ **Ikke skriv «rettsvitenskap», «rettskilder» eller «kulturarvsrett» inn i
tittelen** for å gjøre den mer beskrivende: `\brett(s\w*)?\b` ville da slått inn
og gitt leseren en Lovdata-linje på et emne uten en eneste rettskilde. ⚠ **Ikke
kort tittelen ned til «EXFAC03-HARK Examen facultatum»** — da forsvinner
fagangivelsen som skiller emnet fra SVEXFAC03, JFEXFAC04 og de tre andre
EXFAC03-variantene. ⚠ **Og aldri «kulturhistorie» inn i emnenavnet** (§14.5).

```bash
python3 - <<'EOF'
import json, re
t = json.load(open("docs/hoyskole-boker/exfac03-hark/BOKCONFIG.json", encoding="utf-8"))["title"]
erJus = lambda cid, x: bool(re.search(r"^jus", cid, re.I) or re.search(r"\brett(s\w*)?\b|juridisk", x, re.I))
erHelse = lambda cid, x: bool(re.search(r"^psy", cid, re.I) or re.search(r"sykepl|medisin|farmako|anatomi|fysiologi|helse|psykolog|odontolog|tannlege", f"{cid} {x}", re.I))
print(t, "→ erJus:", erJus("exfac03-hark", t), "| erHelse:", erHelse("exfac03-hark", t))
assert not erJus("exfac03-hark", t) and not erHelse("exfac03-hark", t)
assert "kulturhistorie" not in t.lower()
print("OK")
EOF
```

### 18.3 Wiring-sjekkliste (fase 5)

1. `python3 scripts/hoyskolebok/wire-bok.py exfac03-hark` — parser 38 kapitler
   fra skjelettet og genererer 7 prøvekapitler. Alle 45 filene må finnes først.
2. **Kontroller prøvekapitlenes auto-tekst** (§2.2): `grep -n "Fire prøver"
   scripts/hoyskolebok/wire-bok.py`. Sier den «fullstendige løsninger skrevet av
   oss», er den sannferdig og skal stå. Er ordet «løsningsforslag» kommet
   tilbake, skriv om de sju beskrivelsene til «… med fulle momentliste-fasiter,
   skrevet av oss.» Kontroller samtidig at hvert prøvekapittel faktisk har
   **fire** prøver, siden auto-teksten sier det.
3. **Legg til oppføring i `src/lib/data/kildegrunnlag.ts`** med tallene fra §6.1:
   6 eksamensterminer høsten 2020 – høsten 2024 (4 ordinære + 2 utsatte) · 4
   sensorveiledninger · 2 rene oppgavesett · 6 filer · 11
   oppgavetekst-forekomster · 10 unike oppgavetekster · **0 løsningsforslag og 0
   fasiter** · **0 bevarte flervalgsspørsmål**. `forbehold`-lista skal inneholde:
   **eksamensformen ble lagt om mellom H2022 og H2024, og bare én termin
   dokumenterer dagens mappeformat** · H2023 mangler helt, så omleggingen kan
   ikke dateres · 2 av 6 terminer har ingen sensorveiledning · veiledningene er
   sensors forhåndsforventninger, ikke observerte feil · H2022-fila inneholder en
   oppgavetekst og en veiledning som ikke gjelder samme oppgave · emnet har aldri
   hatt en flervalgsdel · maks 5 000 ord og 180 plasser er UiO-opplysninger, ikke
   arkivbelegg · **1 750 ord per individuelt arbeid er en slutning** · ingen
   vekting mellom mappas tre arbeider er oppgitt · pensumutgaver, årstall og
   sidetall er ikke oppgitt noe sted · ingenting før H2020 og ingenting etter
   H2024 finnes.
4. `institusjoner.ts` patches automatisk under `slug: 'uio'` med tittel og ikon
   fra `BOKCONFIG.json`. Verifiser at **verken** jus- eller helse-linja vises
   (§18.2).
5. Verifiser narrativ-ruter (hvis narrativer bygges) med prod-server og curl —
   200, ikke bare at filene finnes.

---

## 19. Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json; json.load(open('…'))"` på HVER fil du har skrevet.
2. **Kvotetelling** mot tabellen i §13 (toppnivå `definition`-blokker med `title`
   + antall quiz-spørsmål) — minimum, aldri under. Total **742 quiz / 699
   flashcards / 2 140 minutter**.
3. **PORT A (formrammen, §7.2) = 0 avvik.** Dette er bokas viktigste port.
4. **PORT B og B2 (ordbudsjettet, §7.4) = 0 avvik.** Hvert «1 750» har
   regnestykket og ordet «slutning»; hvert «5 000 ord» har UiO-kilden.
5. **PORT C (Del 6-nevnerboksen, §7.5) = 0 avvik.** Alle fire kapitlene i Del 6
   har «1 av 6 terminer», «2 av mappas 3 oppgaver» og «H2024».
6. **PORT E (forekomst-eierskapet, §14.6) = 0 avvik**, og H2021/H2022 kontrollert
   manuelt.
7. **Forbudt-termer-grep = 0** (regexen i §14.5), og alle tolv prosareglene
   grønne. Mal-testen i §14.5 kjørt hvis en av malene er endret.
8. **Kildepåstander (§6.1–§6.3):** hver «N av M» finnes i §6.2, bruker en av de
   sju lovlige nevnerne, **skriver ut enheten** OG oppgir regimet der det
   gjelder; ingen påstand om fasit eller løsningsforslag fra UiO; ingen påstand
   som hviler på en sensorveiledning fra H2019, H2023, H2025 eller fra de to
   utsatte settene; nevneren 1 er aldri skrevet som prosent; ingen påstand om
   strykprosent eller karakterfordeling.
9. **Delmengdene summerer:** hver gang boka bryter et tall ned, kontrollregn.
   4 + 2 = 6 filer · 4 + 2 = 6 terminer · 5 + 1 = 6 terminer · sjangerklyngene
   3 + 2 + 2 + 1 + 1 + 1 + 1 = 11 · 11 − 2 + 1 = 10 unike oppgavetekster ·
   sjangerbanken 8 forekomster og 6 unike, 6 + 3 = 9 fra kjent termin (§8.2).
10. **Formkalibreringen (§7):** ingen kapittel bygget på det utgåtte regimets
    form, omfang eller arbeidsmåte — kun de merkede historikk-notene i kap. 0.1
    og sjangerbanken brukt som sjanger. ⚠ Motsatt: **hele Del 6, kap. 6.4 og
    dualismen i kap. 3.1 SKAL stå**, selv med 1 av 6 hver.
11. **Sjangervektingen holdt (§8.1):** Del 0 har 3 kapitler og Del 7 har 10 — 13
    av 38 = 34 %. Ingen temakapitler lagt til på bekostning av
    håndverkskapitler.
12. **Mappeformatet respektert (§7.6):** ingen oppgave er en tidtaking; hver
    treningsoppgave i Del 7 har et **avgrensningstrinn** og en
    **revisjonsrunde**; prøvene deklarerer ordbudsjett der skjelettet oppgir ett.
13. **Kryssbok- og internlenker (§15):** nøyaktig **én** kryssbok-lenke i hele
    boka, fra kap. 3.1 til `exphil03-2-4`, med forskjellen i spørsmålsstilling
    skrevet ut; ingen lenker til de forbudte målene; alle interne lenker peker på
    eksisterende, registrerte filer.
14. **Læringsløkke:** `content[]` veksler teori → eksempel → oppgave i løkker med
    `exercise`-blokker INLINE. Unntak: prøve-, sjanger- og
    modellbesvarelseskapitler. Byggespråk-grepet fra §1 gir null treff.
15. **Forkunnskapsdekning:** gå gjennom HVER `exercise` og bekreft at den kun
    hviler på stoff introdusert tidligere i kapitlet eller i en referert
    forkunnskap. Særlig: ingen oppgave i Del 2 krever periodenettet uten at
    kap. 1.2 står i forkunnskapene, ingen oppgave i Del 6 krever hermeneutikken
    uten at kap. 4.4 er referert, og ingen oppgave i Del 7 krever et
    periodekapittel som ikke står der.
16. **Oppfrisket forkunnskap (§5.1):** kapitlene i tabellen har 2–3
    kjernepåstander VIST, ikke bare lenket; **grep for «Sist du var her» = 0**,
    også i overskrifter, og ingen overskrift heter «Forkunnskaper — sist du var
    her».
17. **Del 2- og Del 5-kontraktene (§5.3, §5.4):** hvert Del 2-kapittel fyller sin
    rad i periodenettet og har avsnittet «Hva som skiller denne perioden fra den
    forrige»; kapitlene 2.1–2.4 gjentar tesen om at humaniora ikke finnes som
    felt ennå; kapitlene 5.2–5.4 følger de samme fire spørsmålene i samme
    rekkefølge.
18. **Pensumkart, begrepsliste og oppgaveantall:** HVERT temakapittel (Del 1–6)
    har `collapsible` «Pensumkart for kapitlet», `collapsible` «Begreps- og
    avsenderliste» sist, `tip` «A-markør», `warning` «Typiske feil» og **4–8
    `exercise`-blokker inline**. Tell dem.
19. **`difficulty`** er `lett`/`middels`/`vanskelig` i alle `exercise` — grep for
    `"difficulty": "medium"` og `"difficulty": "hard"` gir null. Minst én
    `vanskelig` per temadel, minst én `lett` innstegsoppgave tidlig i hvert
    temakapittel.
20. **Nybegynner-inngang (§10):** alle sjangerkoder (EPO/AVG/LIN/FAG/MET/GRP),
    feilkoder (#1–#14) og karakterbokstaver forklart ved første bruk PER
    KAPITTEL; ingen kald kode i `competenceGoals` eller i første tekstboks; Del 0
    har «Slik leser du denne boka»-boksen (type `text`/`tip`, ALDRI `definition`)
    og hele Del 0-pakken (§12.1).
21. **Eksamenskontrakten:** hver `example.solution`, hver `exercise.solution` og
    hver prøvefasit viser den strukturen sjangeren krever (§6.5), og
    prøvefasitene har minimumskrav / gode besvarelser / sterke besvarelser +
    feller. En EPO-fasit uten kontrastledd er en byggefeil (#1); en LIN-fasit med
    tre grundige trinn og fire utelatte er en byggefeil (#13).
22. **Begrunnelsesregelen (§9.1):** ingen kobling står ubegrunnet i noe eksempel,
    modellsvar eller fasit.
23. **Pensumdisiplinen (§9.2):** kun de ni bidragene; ingen utgave, årstall eller
    sidetall; ingen oppdiktet tittel på Olsens bidrag; ⚠-merkingen beholdt i
    pensumkartene; panelbeskrivelsen ikke gjengitt.
24. **Modellbesvarelser (§11):** ærlig merket som nyskrevne; **nivåbeskrivelsene
    merket utledet, ikke observert**; C-en er en C; autentisk midtnivåbesvarelse
    finnes i 7.8; 7.9 konkluderer skarpt; podkastvarianten finnes i 7.10;
    meta-fasit-grep = 0.
25. **Vippe-caser (§9.3):** minst fire steder skriver fasiten ut **begge**
    forsvarlige landinger.
26. **Prøvekapitler:** nøyaktig **fire** prøver i hvert av de sju (hardt
    plattformkrav, §2.2); fasitmønsteret varierer (aldri «alle a», aldri «alle
    feil»); blandingsdrillene har ekte blanding (seks av ti forsvarlige i
    anakronismedrillen, tre av tolv uten feil i kap. 7.7); prøve-tipen sier hvor
    flervalget bor; selvdiagnose (☐) etter hver fasit; ja/nei-lister av
    selvstendige påstander bruker romertall (§5.7), og alle ekte deloppgaver
    bruker a), b), c).
27. **hints** utfylt på alle `exercise` unntatt den merkede kalde banken i
    kap. 7.5; første hint røper aldri konklusjonen.
28. **Quiz:** `options[0]` alltid riktig; nøyaktig 4 alternativer; ingen
    posisjonsreferanser i `explanation`; **LENGDE-TELL under 35 %** — og husk at
    rettemåten er å **forlenge distraktorene** (§13.1).
29. **Øktmerking:** de 33 kapitlene over 45 minutter har tidsanslag i
    underoverskriftene eller pausepunkter; lange modellbesvarelser har «— naturlig
    pausepunkt —»; prøvekapitlene deklarerer «4 prøver à ~25–45 min» + deling
    over flere kvelder.
30. **Feilkode-gloss** ved første bruk per kapittel; ingen kode #15;
    ærlighetsforbeholdet står der registeret presenteres (Del 0 og kap. 7.7).
31. **Ingen tom `collapsible`**; ingen duplikate blokk-id-er; kap-referanser i
    fasiter og forkunnskaper er markdown-lenker; ingen hardt linjebrutt prosa;
    ingen markdown i `description`/`title`/`competenceGoals`.
32. **`(verifiser)`-rester = 0** før siste `sjekk-bok.py`-kjøring — særlig
    pensumkoblingene merket ⚠ i skjelettet (§9.2). Det som ikke lar seg
    verifisere, reduseres til det arkivet faktisk attesterer: avsenderens navn og
    kjernebegrepet.
33. **Opphavsrett (§17):** ingen av arkivets oppgavetekster eller caser gjengitt;
    ingen ordrette formuleringer fra oppgavesett eller veiledninger; ingen
    oppdiktede referanser.
34. **Juridiske deklarasjoner:** innholdet fremstiller seg ALDRI som offisielt
    eller UiO-tilknyttet, lover aldri eksamensutfall, og verken jus- eller
    helse-linja utløses av tittelen (§18.2).
35. **Porter grønne før ferdigmelding:**

```bash
python3 scripts/hoyskolebok/status-bok.py exfac03-hark
python3 scripts/hoyskolebok/sjekk-skjelett.py exfac03-hark
python3 scripts/hoyskolebok/sjekk-latex.py exfac03-hark
python3 scripts/hoyskolebok/sjekk-fasitfordeling.py exfac03-hark
python3 scripts/hoyskolebok/sjekk-alternativref.py exfac03-hark
python3 scripts/hoyskolebok/sjekk-statiskflervalg.py exfac03-hark
python3 scripts/hoyskolebok/sjekk-bok.py exfac03-hark "<forbudt-regex fra §14.5>"
# PORT A, B, B2 (§7.2, §7.4), PORT C (§7.5), PORT E (§14.6)
# og de tolv prosareglene fra §14.5
node scripts/hoyskolebok/quiz-lengdesjekk.mjs exfac03-hark
npm run build
```

---

## 20. SPRIK MOT SKJELETTET — dokumentert her så ingen «retter» dem tilbake

Skjelettets Talldisiplin-seksjon og alle 38 kapitlers belegg-blokker er
etterregnet 6. august 2026. **Belegg-listene og temafrekvenstallene stemmer,
kvotesummene stemmer (742 quiz, 699 flashcards, 2 140 minutter over 38 kapitler),
og kapittel- og håndverkskontrollen stemmer.** Fire avledede tall gjør det
likevel ikke, og ett av dem er gjentatt seks steder.

### Sprik 1 (det viktigste): «regime 1s ni oppgavetekster» → 8 forekomster / 6 unike

Skjelettet skriver fire steder «regime 1s ni oppgavetekster» eller «de ni
oppgavetekstene fra regime 1», og Øvingsmappe C skriver «sjangerbanken er det
største vi har — ni av ti unike oppgavetekster». **Ingen av tallene kan stemme.**

**Utregningen.** Forekomster i det utgåtte regimet: H2020 **2** + H2020-utsatt
**2** + H2021 **1** + H2021-utsatt **2** + H2022 **1** = **8**. H2024 har **3**.
8 + 3 = **11 forekomster** ✓ — som er skjelettets eget tall. Var det utgåtte
regimets bidrag ni, ville totalen blitt tolv.

Unike tekster derfra: 8 forekomster minus de **2** ordrette gjentakelsene i
H2021-utsatt = **6 unike**. 6 + 3 fra H2024 = **9 unike fra kjent termin** ✓ — og
det er nettopp der tallet ni kommer fra. **«9 fra kjent termin» inkluderer
H2024s tre oppgaver og er ikke det utgåtte regimets bidrag.** «Ni av ti unike»
ville dessuten latt bare én unik tekst være igjen til H2024, som har tre.

**Bindende (§8.2):** det utgåtte regimet gir **8 av de 11
oppgavetekst-forekomstene** og **6 av de 10 unike oppgavetekstene** — **7** med
den tiende oppgaveteksten uten kjent termin. Øvingsmappe C skriver **«sju av de
ti unike oppgavetekstene»**. Formene `ni oppgavetekster`, `de ni
oppgavetekstene`, `ni unike oppgavetekster`, `ni av ti` og `9 av 10 unike` står i
forbudt-regexen (§14.5).

⚠ **«De ni bidragene» om pensumlitteraturen (§9.2) er et helt annet og korrekt
tall.** Regexen treffer det ikke, og ingen skal «rette» det.

### Sprik 2: «en tredel av eksamen» i kap. 7.6 → «ett av mappas tre arbeider»

Skjelettet sier to steder at gruppeoppgaven er «en tredel av eksamen» — én gang i
kapitlets **`description`**, som havner rått i Google-treffet, og én gang i
prioritetslinjen. **Samtidig sier skjelettet selv, to andre steder, at vektingen
mellom mappas tre arbeider ikke er oppgitt noe sted og at boka ikke skal antyde
en.** «En tredel av eksamen» er nøyaktig en slik antydning.

**Bindende:** kap. 7.6s `description` skrives — i kapittelfila **og** i
metadataen, ordrett likt:

> Ett av mappas tre arbeider som ingen lærebok dekker: gruppens eget spørsmål til
> en digital samling, arbeidsdelingen over et semester, og reglene som gjelder
> hvis dere velger podkast.

og prioritetslinjen skrives «høyeste prioritet — det er ett av mappas tre
arbeider og finnes ikke i noen lærebok». Formene `en tredel av eksamen`, `en
tredjedel av eksamen`, `teller likt`, `teller like mye`, `vektes likt` og `hver
teller en tredel` står i forbudt-regexen (§14.5).

⚠ Dette er det ene stedet der kapittelfilas `description` **skal** avvike fra
skjelettets linje (§2.1 punkt 3). Skjelettet kan rettes av produkteier; til da
gjelder kontraktens tekst.

### Sprik 3: «fire av fire ordinære terminer» — lovlig, men tre feller i ett tall

Skjelettets kap. 7.3 skriver, både i `description` og i belegget, at UiOs
læringsmål om de lange linjene «treffer fire av fire ordinære terminer».
Påstanden er riktig og hentet fra analysens § 1 — men den bærer tre feller:

1. **Nevneren «4 ordinære terminer» står ikke i skjelettets liste over lovlige
   nevnere**, og kolliderer numerisk med «4 sensorveiledninger». En leser som ser
   «fire av fire» rett etter en setning om veiledningene, leser feil tall.
2. **Påstanden gjelder LÆRINGSMÅLET, ikke sjangeren.** Den lange linjen som
   oppgavesjanger er **2 av 11 oppgavetekst-forekomster** (H2021 og H2022), pluss
   den tiende oppgaveteksten. En agent som slår sammen de to, ville skrevet «den
   lange linjen er prøvd i fire av fire terminer», som er usant.
3. **De to utsatte terminene faller utenfor**, og det må stå: nevneren er
   **ordinære** terminer, ikke alle seks.

**Bindende (§6.3):** nevneren «4 ordinære terminer» er lovlig, men brukes **kun**
i kap. 0.1, kap. 7.3 og studieguiden, **alltid** med enheten «ordinære terminer»
skrevet ut, og **alltid** om læringsmålet. Setningen skal ha sjangertallet ved
siden av seg: *«Læringsmålet om de lange linjene er berørt i 4 av 4 ordinære
terminer, mens den lange linjen som egen oppgavesjanger står 2 av de 11
oppgavetekst-forekomstene.»*

### Sprik 4: nevneren 3 er i bruk, men mangler i skjelettets liste

Skjelettets Talldisiplin-seksjon lister seks lovlige nevnere og sier «står tallet
ikke her, skal det ikke skrives i boka». Skjelettet bruker likevel selv nevneren
**3** seks steder: «2 av 3 oppgaver i dagens format» (del 2), «eksplisitt krav i
to av tre mappeoppgaver» (del 2 og kap. 0.2), «to av de tre obligatoriske
oppgavene innpasser det digitale elementet» (kap. 6.1) og «avgrensning og
problemstilling (H2024, to av tre oppgaver)» (kap. 0.3).

Tallet er **ekte belegg** — H2024-mappa har tre arbeider — men det er et
**formtall**, ikke en frekvensnevner over terminer, og det er bundet til én
termin.

**Bindende (§6.3):** nevneren **3** er lovlig, men **bare** i formen «av mappas 3
oppgaver» / «av mappas tre arbeider» / «to av tre mappeoppgaver», og **bare** om
H2024. Den skal aldri stå naken («2 av 3»), aldri om noe annet enn mappas
inndeling, og aldri sammenlignes med 6-nevneren uten forklaringen fra §6.3.

### Sprik 5 (ikke en feil, men en presisering): flere kapitler deler samme forekomst

Skjelettet lar kap. 2.6 og 2.7 hver skrive «1 av 11 forekomster» om **samme**
H2022-oppgave, lar kap. 3.1 og 7.2 hver skrive «2 av 11 forekomster» om **samme**
oppgavepar, og lar fem Del 5-kapitler pluss 3.2, 7.4 og 7.8 alle hvile på H2024-1.
Hver enkelt påstand er riktig; summen av dem er det ikke. Legges tallene sammen,
får man langt flere enn 11 forekomster — nøyaktig inter1000-feilen.

**Bindende (§6.2.1):** tabellen over hvilke kapitler som kan påberope seg hvilken
forekomst er uttømmende, og to kapitler som deler en forekomst, skriver begge
«samme oppgavetekst som i kap. X.Y». **PORT E** (§14.6) håndhever
tilordningen maskinelt.

⚠ **Rangeringen, kapittelfordelingen og kvotene er uendret** av alle fem
punktene, så skjelettets §2-rasjonale står: periodiseringen (6 av 6 terminer) får
Del 1 og Del 2 med til sammen 10 kapitler, avgrensningen (4 av 6) får Del 3,
hermeneutikken (2 av 6, men én av tre mappeoppgaver) får Del 4, fagenes
etablering (2 av 6, men hele H2024-1) får Del 5, det digitale (1 av 6, men to av
mappas tre oppgaver) får Del 6, og håndverket får 13 av 38 kapitler.
