# Byggekontrakt: JUROFF1500 Strafferett (UiO) — teknisk kontrakt for kapittelforfattere

Gjelder ALLE forfatter-agenter som bygger kapitler til `juroff1500`. Faglig
innhold styres av `SKJELETT.md` (Talldisiplin-seksjonen + identitetsseksjonen
§1–§4 + per-kapittel-kontraktene i §5) — les ditt kapittels avsnitt ORDRETT, og
`EKSAMENSANALYSE.md` ved behov. Denne kontrakten definerer format, sjangerkrav,
kildepåstander, tall, lovkalibrering og kvalitetsporter.

**Ved faglig konflikt vinner SKJELETT.md. Ved format-, sjanger-, tall-,
kilde- eller domskanonkonflikt vinner denne kontrakten.** Instansiert fra
`../BYGGEKONTRAKT-MAL.md`.

⚠ **Fire av skjelettets tall er etterregnet og holder ikke.** Domskanonens
størrelse, V2015/H2015-merkelisten, ANA-terminene i kap. 1.2 og
passivitetsspørsmålets «ordrett»-tall er rettet i §20. **§6.2 og §8.1 er de
eneste lovlige kildene til henholdsvis «N av M»-påstander og domsnavn i boka.**
Sprikene står dokumentert i §20 med utregningen, så ingen «retter» dem tilbake.

**Emnets navn.** Emnet heter **JUROFF1500 – Strafferett** og undervises ved Det
juridiske fakultet, Universitetet i Oslo. Emnekoden `JUROFF1500` skrives alltid
ut — den er bokas viktigste søkeord. Emnet er et **10-studiepoengs støtteemne i
Kriminologi (bachelor)**, undervises og eksamineres **kun om høsten**, har ingen
forkunnskapskrav ut over generell studiekompetanse og ingen obligatorisk
aktivitet. Karakterskala **A–F**.

**Leseren er IKKE jusstudent.** H2025-veiledningen sier at det trolig ikke lenger
er jusstudenter som tar emnet. H2022 og H2023 sier at de aller fleste kandidatene
ikke har erfaring med juridiske fag, at mange er tidlig i studieløpet, og at
terskelen for en god karakter derfor neppe bør legges særlig høyt. H2024 sier at
det bare kreves kunnskap — ikke bred eller dyp kunnskap — om *elementær*
strafferett. **Boka bygger juridisk metode fra null og forutsetter den aldri**
(§10).

**Arketype: jus** (`../DNA-jus.md`), med **to dokumenterte lån fra
`../DNA-drofting.md`**: kortsvarssjangeren som eget sjangerkapittel (kap. 8.1) og
den rettspolitiske drøftingsaksen i hvert temakapittel. Begrunnelsen står i
skjelettets §1 og gjentas her fordi den styrer hva som skal bygges: **28 av 34
terminer er rene kortsvarssett uten faktum**, og DNA-jus har ingen form for den
frittstående begrepsoppgaven på 30–50 minutter.

**Nærmeste bygde søskenbok: `jus1111`** (42 kapittelfiler, live). Samme fakultet,
samme praktikummetode, samme må-/pluss-/felle-fasitstruktur. Kopier arbeidsmåte
og formkrav derfra — **aldri faglig innhold**. `jfexfac04` (samme fakultet, samme
nybegynnerprofil, samme problem med utgått pensum) har skjelett og kontrakt, men
**ingen kapittelfiler på disk** — den kan leses som forbilde, men det er
**forbudt å lenke dit** (§15).

**Fire forskjeller fra JUS1111 som endrer byggingen:**

1. **Karakterskalaen er A–F, ikke bestått/ikke bestått.** «A-besvarelse» og
   «C-besvarelse» er derfor lovlige ord her, i motsetning til i JUS1111 — men
   «C er en god og vanlig karakter» skal stå eksplisitt i Del 0, og en boks som
   heter C-besvarelse skal **være** en C (§11).
2. **20 av 34 terminer er skrevet til en lov som ikke gjelder.** JUS1111 har
   ingen tilsvarende kalibreringsrisiko. §7 er denne bokas strengeste seksjon.
3. **Domsmaterialet er magert og uttømmende.** JUS1111 har en rikelig domskanon;
   her navngir arkivet **20 avgjørelser totalt**, og for medvirkning,
   uaktsomhet, nødverge, nødrett, rus og tilregnelighet navngir det **ingen**
   (§8).
4. **Arkivet har null løsningsforslag og null modellbesvarelser.** Det som finnes
   er 42 oppgavesett-filer og **6 sensorveiledninger, alle fra H2020–H2025**.
   Ordene «fasit» og «løsningsforslag» kan aldri brukes om arkivet (§6.1).

---

## 1. LÆRINGSLØKKE-KONTRAKT (ufravikelig byggekrav — produkteier 9. juli 2026)

Fra skjelettets topp, tatt inn her som bindende byggekrav:

- HVERT kapittels `content[]` struktureres som gjentatte SMÅ løkker
  **Teori → Eksempel → Oppgave**, én løkke per regel/vilkårssett:
  1. regelen med hjemmel (`definition` med paragrafen i `title`, + `text` som tar
     vilkårene ett for ett med tolkningsmomenter), →
  2. `example` som viser regelen BRUKT — subsumsjon på et nyskrevet faktum,
     disponert regel → faktum → subsumsjon → delkonklusjon, →
  3. `exercise` INLINE i `content[]` rett etter eksempelet (plattformen renderer
     inline oppgaver), →
  4. neste regel.
- **ALDRI** all teori øverst med oppgavene samlet nederst, og aldri alle
  definisjonene i én bolk fulgt av alle eksemplene. Grupper til meningsfulle
  biter — ikke én oppgave per setning.
- **Ingen usett forkunnskap:** ingen oppgave får kreve en hjemmel, et vilkår, en
  skyldform eller en sjangerregel som ikke er introdusert tidligere i SAMME
  kapittel (t.o.m. eksempelet rett foran) eller i et tidligere kapittel referert
  i Forkunnskaper-blokka. Særlig utsatt her: **ingen oppgave i del 4, 5 eller 7
  får kreve skyldformene fra del 3** uten at del 3-kapitlet står i
  forkunnskapene, og **ingen oppgave i del 5 får kreve tredelingen fra kap. 5.1**
  før den er innført.
- **Unntak:** prøvekapitlene, sjangerkapitlene (8.1–8.4) og
  modellbesvarelseskapitlene (8.5–8.7) følger sin egen arketype — komplett
  oppgave/sett først, løsning i `collapsible`.
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer
  REKKEFØLGEN.

⚠ **Underoverskrifter er ALDRI byggespråk.** «Løkke», «Bolk», «Blokk», «Runde»,
«Sekvens», «Modul», «Iterasjon» er byggeplanens ord, ikke leserens. Overskriften
skal si hva avsnittet handler om, pluss tidsanslaget:

```
✗ ## Løkke 3 — Dolus eventualis (~15 min)
✓ ## Dolus eventualis (~15 min)
```

Vis til tidligere avsnitt ved NAVN, aldri ved nummer («da vi gikk gjennom
dekningsprinsippet», ikke «i løkke 2»). «Løkke» er ikke et fagord i strafferett,
så **all** bruk er byggespråk. Kjør denne før ferdigmelding og forvent null
treff:

```bash
grep -rnE '#{2,4}[[:space:]]*Løkke|[Ll]økke[[:space:]]+[0-9A-ZÆØÅ]|\| Løkke \|' \
  src/lib/data/chapters/juroff1500-*.json
```

---

## 2. Filplassering og filantall

Ett JSON-dokument per kapittel:
`src/lib/data/chapters/juroff1500-<del>-<nr>.json` (prøvekapitler:
`juroff1500-<del>-prove.json`). Quiz til
`src/lib/data/quiz-staging/juroff1500-<del>-<nr>.quiz.json`.

IKKE rør `_registry.json`, `_all.json`, `textbook-courses*.ts`, `quiz-data*.ts`
eller `src/app/trinn/hoyere/institusjoner.ts` — wiring gjøres sentralt med
`scripts/hoyskolebok/wire-bok.py juroff1500` (fase 5). Generer ALLTID JSON via
python `json.dump`: faget er fullt av anførselstegn («foretar noe som leder
direkte mot utføringen», «mishandling», «vold», «kunne innse», «Alle spørsmål
skal besvares»), og én uescapet anførsel har tidligere blokkert hele
plattformens prebuild.

**47 filer totalt:** 40 innholdskapitler (skjelettets §5) + 7 prøvekapitler
(`juroff1500-1-prove` … `juroff1500-7-prove`). Wiringen genererer
prøvekapitlenes metadata selv fra `BOKCONFIG.json` (`prøvedeler`) — filene må
finnes, men skal ikke listes i skjelettets §5.

### 2.1 Skjelettet ER i v3-format (verifisert 3. august 2026)

`wire-bok.py` parser skjelettet med `^#### Kapittel (\d+\.\d+):\s*(.+)$` og
`\*\*id:\*\* \`(juroff1500-\d+-\d+)\``. Kjørt mot `SKJELETT.md` med parserens
egen kode:

| kontroll | resultat |
|---|---|
| kapitler parset | **40 av 40** |
| tomme `description`-felt | **0** |
| `prerequisites` som peker utenfor bokas id-er | **0** |
| sum `estimatedMinutes` | **2 290** (stemmer med kvotesammendraget) |
| `sectionNames` funnet fra del-overskriftene | alle 9 (del 0–8) |

Ingen v3-konvertering er nødvendig. **Endrer du skjelettet, kjør parse-testen på
nytt før fase 5.** Tre detaljer må overleve enhver senere redigering:

1. **`prerequisites` MÅ stå i backticks.** Parseren plukker dem med
   `` re.findall(rf"`({emne}-\d+-\d+)`", …) `` — uten backticks finnes de ikke.
   «ingen» skrives uten (gjelder kun kap. 0.1).
2. **Tom linje etter `- **Description:**`-blokka.** Uten den blør beskrivelsen
   inn i `**Eksamensbelegg:**` — samme mekanisme som ga 53 avkuttede
   kursbeskrivelser i tidligere bøker.
3. **Kapittel-JSONs eget `description` overstyrer skjelettet** (parseren
   foretrekker kapittelfila). Fyll det derfor alltid ut **ordrett likt** begge
   steder.

### 2.2 ⚠ Wiringens auto-tekst er usann for denne boka

`wire-bok.py` linje 94 genererer prøvekapitlenes beskrivelse og kan **ikke**
overstyres fra skjelettet:

> «Fire prøver som dekker del N (…) på eksamensnivå, med fulle
> **løsningsforslag**.»

To ting følger av det:

1. **«Fire prøver» er en hardkoding, ikke en anbefaling.** Hvert av de sju
   prøvekapitlene MÅ ha nøyaktig fire `collapsible`-prøver. Skjelettets §7 gir
   fire per del for alle sju deler — verifisert. Bygger noen tre, får leseren en
   beskrivelse som ikke stemmer.
2. **Ordet «løsningsforslag» skal skrives om i fase 5.** Arkivet har null
   løsningsforslag (§6.1), og selv om auto-teksten gjelder bokas EGNE prøver, er
   koblingen «eksamensnivå + løsningsforslag» nøyaktig den lesningen boka ellers
   bruker hele §6.1 på å avvise. Fase 5 retter til:

| kapittel | beskrivelse etter wiring |
|---|---|
| `juroff1500-1-prove` … `juroff1500-7-prove` | «Fire prøver som dekker del N (…) på eksamensnivå, med fulle momentliste-fasiter, skrevet av oss.» |

---

## 3. Kapittel-JSON (toppnivå)

```json
{
  "id": "juroff1500-4-1",
  "courseId": "juroff1500",
  "chapterNumber": "4.1",
  "title": "…(fra skjelettet, ordrett)…",
  "description": "…(fra skjelettet, ordrett)…",
  "estimatedMinutes": 65,
  "competenceGoals": ["kunne begrunne hvor forsøkets nedre grense går med de tre momentene, ikke bare konstatere den", "…"],
  "content": [ "…blokker…" ],
  "exercises": []
}
```

- **`chapterNumber` er ALLTID del-basert** (`<del>.<nr>`: `0.1`, `4.1`, `8.7`) —
  **ALDRI lineær** («14»). Prøvekapitler: `<del>.P`. Dette er enkeltfeilen som
  ødelegger navigasjonen i en hel bok (PRODUKSJONSLØYPE-lærdommen fra JUS1111).
- `title` og `description` tas **ordrett** fra skjelettet.
- `competenceGoals`: 2–4 «kunne …»-formuleringer destillert fra kapitlets
  regelkontrakt. Dette er **Skolesagas EGNE** mål — ALDRI kopi av UiOs offisielle
  læringskrav. UI-et deklarerer kilden automatisk.
- **Ingen kald kode i `competenceGoals`** — ikke «KORT», ikke «PRAK», ikke «#14»,
  ikke «Prioritet: perfekt», ikke «A-markør».

### 3.1 `description`, `title` og navigasjonsfelt er REN TEKST (UFRAVIKELIG)

`title`, `description`, `topics`/`sectionNames` og `competenceGoals` rendres
**RÅTT**. `description` havner uendret i `<meta name="description">`,
`og:description` og `twitter:description` — altså i **Google-treffet og i
lenkeforhåndsvisningen** — og i den synlige kroppen på kapittelsiden. Markdown
rendres aldri der. 122 kapitler i 17 bøker viste `$…$` og `**fet**` i Google før
dette ble oppdaget.

```
✗ Vilkårene i **strl. § 16** og de tre momentene fra `Rt. 2008 s. 867`.
✓ Vilkårene i straffeloven § 16 og de tre momentene fra Rt. 2008 s. 867.
```

Ingen `$…$`, ingen `**fet**`, ingen `*kursiv*`, ingen backticks, ingen
markdown-lenker i disse feltene. Verktitler skrives med «anførselstegn», aldri
kursiv. Markdown hører kun hjemme i
`content`/`problem`/`solution`/`task`/`hints`.

Skjelettets 40 descriptions er kontrollert mot denne regelen: **ingen inneholder
LaTeX, fet skrift eller backticks.** Noen inneholder kolon og tankestrek, som er
ren tekst og helt lovlig — det er bare `BOKCONFIG.json`-beskrivelsen som har et
hardt tegnkrav (§18.1).

---

## 4. Blokktyper (eksakte felt — strukturreferanse: `src/lib/data/chapters/jus1111-4-1.json`)

- `text`: `{id, type: "text", content}` — markdown-prosa.
- `definition`: `{id, type: "definition", title, content}` — **`title`
  OBLIGATORISK**. Flashcards genereres KUN fra **toppnivå** `definition`-blokker
  med `title` (en definisjon nøstet inne i en `collapsible` teller IKKE).
  I JUROFF1500 er `title` enten **paragraf ↔ regelinnhold** («Forsøk — strl.
  § 16 første ledd», «Nødverge — strl. § 18», «Faktisk uvitenhet — strl. § 25
  første ledd») eller **begrep ↔ vilkårsliste** («Dolus eventualis — de to
  vilkårene», «Uekte unnlatelsesdelikt — de tre vilkårene», «Straffritaksgrunn»).
  Åpne innholdet med forklaringen i ORD, lukk med **distinksjonen mot
  nabobegrepet** (nødverge mot nødrett, straffrihet mot straffritak mot
  straffbortfall, faktisk mot rettslig villfarelse, kroppskrenkelse mot
  kroppsskade, dolus eventualis mot bevisst uaktsomhet).
- `theorem`: `{id, type: "theorem", title, content}` — brukes **sparsomt**, til
  modeller som skal stå som én enhet: de fire straffbarhetsvilkårene, de tre
  momentene fra Rt. 2008 s. 867, femtrinnsmetoden for lovanalyse, de fire
  kumulative nødvergevilkårene, tredelingen straffrihet/straffritak/
  straffbortfall. Ikke pynt — dette er ikke et regnefag.
- `example`: `{id, type: "example", title, problem, solution}` — `solution`
  disponeres **regel → faktum → subsumsjon → delkonklusjon** og skrives slik en
  sterk besvarelse gjør det. Regelgjengivelse uten subsumsjon forekommer ALDRI i
  en `example.solution`.
- `tip` / `warning`: `{id, type, title, content}`.
- `exercise`: `{id, type: "exercise", exercise: {id, number, type: "classic",
  difficulty: "lett"|"middels"|"vanskelig", task, solution, hints: []}}`.
  ⚠ **`difficulty` har nøyaktig tre lovlige verdier: `lett`, `middels`,
  `vanskelig`.** IKKE `medium`, IKKE `hard`, IKKE `easy` — det er plattformens
  engelske interne verdier, og fem kapitler i en søskenbok måtte rettes fordi en
  agent brukte dem. Verdien skrives aldri inn i `task`. ALDRI `solutionVideo`,
  `allowsUpload`, `allowsCanvasDrawing`, `answer` eller `subTasks` (deloppgaver
  skrives inn i `task`/`solution`, se §12).
- `collapsible`: `{id, type: "collapsible", title, buttonText, content: [blokker]}`
  — feltnavnet er `content` og det skal inneholde BLOKKER. En `text`-nøkkel eller
  tom array rendrer som en tom boks og er en byggefeil.

Blokk-id-er: `<kapittel-id>-<løpenavn>` (f.eks. `juroff1500-4-1-def-forsok-16`),
unike i kapitlet. Duplikate blokk-id-er felles av kvalitetsporten.

**Grep-sjekk før ferdigmelding:**

```bash
grep -l '"difficulty": *"\(medium\|hard\|easy\)"' src/lib/data/chapters/juroff1500-*.json
# skal gi null treff
```

---

## 5. Obligatorisk kapittelstruktur

### 5.1 Alltid først, i denne rekkefølgen

1. `tip` **Eksamensvinkel** — med de EKSAKTE tallene fra **§6.2 i denne
   kontrakten**. ⚠ **Metoderådet står FØRST i boksen**, og årstallslistene
   komprimeres («16 av 34 terminer — se kildenoten i kap. 0.1»). Panelet fant at
   lange årstallsrader fikk lesere til å hoppe over hele boksen og dermed miste
   metoderådet bakerst. **Forfatteren skal ALDRI finne på frekvenstall og aldri
   regne om dem** (§6.3).
2. `text` **Forkunnskaper** — kapitler i boka som markdown-lenker
   (`[kap. 3.2](/juroff1500/juroff1500-3-2)`) + eventuelle kryssbok-lenker fra
   tabellen i §15. «Dette kapitlet kan leses uten forkunnskaper» der skjelettet
   sier `prerequisites: ingen` (kun 0.1).

**Oppfrisket forkunnskap (bindende).** I kapitler med stor avstand til
forkunnskapen SKAL Forkunnskaper-blokka **VISE 2–3 kjernepåstander ferdig
oppfrisket**, ikke bare lenke:

> **Fra kap. 3.1:** dekningsprinsippet krever at skylden dekker hvert enkelt
> element i gjerningsbeskrivelsen, på handlingstidspunktet.
> **Fra kap. 2.2:** handleplikten i det uekte unnlatelsesdeliktet må ha en
> kilde — særlig tilknytning, forutgående farevoldende handling, avtale eller
> stilling.

⚠ **Frasen «Sist du var her» er FORBUDT** (grep-sjekkes, §14.5). Blokka
oppsummerer et ANNET kapittel — den kan ikke si «her», og en lærebok vet ikke hva
leseren har gjort. Mange lesere hopper rett til det kapitlet de er redde for på
eksamen. Overskriften skal være **`## Forkunnskaper`**, ikke «Forkunnskaper —
sist du var her» (246 kapitler i ni bøker hadde den formen, og første rydding
fant den ikke fordi den sto med liten forbokstav midt i en overskrift).

| ✗ | ✓ |
|---|---|
| Sist du var her sto dette … | Dette sto der … |
| Sist du var her (fra kap. 3.2): | Fra kap. 3.2: |
| Som du husker fra kap. 2.1 … | I kap. 2.1 står … |
| Da vi gikk gjennom dette sist … | I gjennomgangen i kap. 2.1 … |

Samme forbud rammer «som du sikkert husker», «du har jo allerede sett», «dette
kan du fra før».

**Kapitler der oppfrisket forkunnskap er OBLIGATORISK** (stor avstand til
forkunnskapen, utledet av skjelettets `prerequisites`):

| Kapittel | Hva som skal stå ferdig oppfrisket |
|---|---|
| 1.5 | fra 1.3: legalitetsprinsippets skranke mot ansvar ut over ordlyden |
| 2.1 | fra 1.2: hva utvidende, innskrenkende og analogisk tolkning er |
| 3.1 | fra 2.1: de fire straffbarhetsvilkårene og at de er kumulative |
| 4.1 | fra 3.2: hva fullbyrdelsesforsett krever, og at forsettsformene prøves i rekkefølge |
| 4.4 | fra 2.2: de tre vilkårene for det uekte unnlatelsesdeliktet; fra 4.3: at hver medvirker vurderes for seg |
| 5.1 | fra 2.1: at «fravær av straffrihetsgrunn» er ett av de fire vilkårene |
| 6.1 | fra 1.4: skillet mellom reelle hensyn som tolkningsargument og som rettspolitisk argument |
| 7.1 | fra 3.1: hva dekningsprinsippet gjør med skyldkravet i en gjerningsbeskrivelse |
| 8.5–8.7 | oppgavens sjangerkrav i tre punkter, hentet fra sitt sjangerkapittel |

### 5.2 Regelkapittel (skjelettets «Kapitteltype: regel») — DNA-jus

Etter eksamensvinkel og forkunnskaper går kapitlet i LÆRINGSLØKKER (§1). Disse
blokkene skal finnes, fordelt i løkkene — ikke stablet:

- `text` **Plassering** — hvor regelsettet hører hjemme og hvilke
  livssituasjoner det regulerer. Abstrakte kjernetemaer åpner med et
  **hverdagsanker FØR paragrafene** (§12).
- `definition` **hovedregelen / vilkårssettet** — flashcard-kilden, toppnivå med
  `title` som inneholder paragrafen, og med **distinksjonen mot nabobegrepet**
  utskrevet.
- `text` **vilkårene ett for ett** — innhold, tolkningsmomenter, terskel. Dette
  er kjernestoffet.
- `example` **subsumsjonseksempel** ×2–3 — ett klart og ett tvilsomt tilfelle.
  Faktum er NYSKREVET (§17).
- **`exercise` ×4–8 INLINE — hardt minimum fire, hardt tak åtte.** Fordeling:
  minst én `lett` innstegsoppgave tidlig (ren gjengivelse med egne ord), 1–2
  kortsvarsoppgaver i firetrinnsmalen hjemmel + formål + hovedformer + eksempel,
  1–2 minipraktikum med momentliste som fasit, og minst én oppgave per temadel
  med `difficulty: "vanskelig"`.
- `warning` **Typiske feil** — feilkodene fra skjelettets «Typiske feil»-linje,
  **glosset i klarspråk ved første bruk PER KAPITTEL**: «(feil #3 — å blande
  nødverge og nødrett: å bruke nødvergevilkårene på en handling som rammer en
  uskyldig tredjeperson)».
- `tip` **Slik løftes svaret** — det grepet som løfter fra C til A i akkurat
  dette temaet, med kapitlets drøftingsakse navngitt eksplisitt. Obligatorisk i
  alle temakapitler.
- `collapsible` **Paragraf- og domsregister for kapitlet** — markdown-tabell
  `| Hjemmel | Én linjes innhold | Hvor det brukes på eksamen |`, pluss
  domsraden(e) der kapitlet har dom i kanonen (§8). Åpner med
  begrepsbank-notisen (§12).
- `collapsible` **Symbol- og begrepsliste** SIST i kapitlet. ⚠ Boka har ingen
  matematikk; listen er derfor en **begreps- og hjemmelsliste**, ikke en
  formelliste. Første linje: «Oppslagsverk — alt her forklares underveis i
  kapitlet.»

### 5.3 Typetilfellekapittel (3.4, 4.4, 6.3, 7.3)

`tip` Eksamensvinkel → `text` Forkunnskaper → `text` **tvistepunkt-kartet** (hvilke
spørsmål typetilfellet reiser, i hvilken rekkefølge, hva som er prinsipalt og hva
som er subsidiært) → `example` **gjennomdrøftet variant** med margkommentarer →
`exercise` ×3–6 **varianter som flytter tvilen** (skjelettet gir variantene
(a)–(d) per kapittel — følg dem) → `warning` Typiske feil → begrepsbank.

### 5.4 Sjanger- og håndverkskapitler (0.2, 0.3, 8.1–8.4)

1. `tip` Eksamensvinkel — sjangerens frekvens (tall fra §6.2).
2. `text` **Oppskrift** — trinnvis disponering med tidsbudsjett (§6.6).
3. `example` **gjennomskrevet besvarelse** med margkommentarer om hva som gir
   uttelling hvor. Margkommentarer skrives som egne linjer i `solution`:
   `> Margnotat: her begrunnes den nedre grensen med de tre momentene i stedet for å konstateres — det er dette skillet som løfter fra C.`
4. `exercise` ×3–6 nyskrevne oppgaver, løsning = **momentliste** strukturert som
   **må-punkter / pluss-punkter / feller**, aldri som sjekkliste. Skjelettet
   fastsetter antallet der det er angitt (8.1: seks øvingsoppgaver, 8.2: fire).
5. `warning` Typiske feil + `collapsible` med sjangerens sjekkliste (§6.4).

Kap. **0.2** har i tillegg den **UFRAVIKELIGE lovhenvisningsboksen** fra DNA-jus
(10–15 linjer klarspråk): «jf.» = jamfør · «§ 16 (2)» = «§ 16 annet ledd» ·
paragrafanatomien ledd → punktum → bokstav · domsnavnene «Rt. 2008 s. 867» og
«HR-2019-47-A» med hva formene betyr og når de skiftet · Ot.prp., Prop. L og NOU
· at enkelte lover er på nynorsk. Her ligger også bokas **to første
Lovdata-driller** (§9.3).

Kap. **0.3** etablerer bokas to mantraer (§6.7) og hele Del 0-pakken (§12.1).

Kap. **8.1** har i tillegg «Slik oversetter du et gammelt sett»-drillen: fire
nyskrevne kortsvarsspørsmål i 1902-form der leseren skal (a) markere hvilke som
fortsatt er gyldige, (b) skrive om paragrafhenvisningene, og (c) kjenne igjen det
ene som gjelder et institutt som er borte. Notasjonsregelen i §7.2 gjelder også i
drilloppgavene.

Kap. **8.4 (feilregisteret)** har én seksjon per feil #1–#16, alle med fire ledd:
(a) feilen slik kilden formulerer den, med hvilken termin den er hjemlet i,
(b) et nyskrevet «slik ser den ut i en besvarelse»-utdrag, (c) samme passasje
omskrevet slik den skulle vært, (d) en varsellampe leseren kan kjenne igjen i
egen tekst. Deretter gjenkjenningsdrill på **12 nyskrevne besvarelsesutdrag**,
med stokket fasit — aldri samme feilkode som fasit to ganger på rad.

⚠ **Ærlighetsforbeholdet SKAL stå i 8.4s åpning og der registeret først
presenteres i Del 0:** ingen av de seks sensorveiledningene er skrevet etter at
besvarelser er lest (H2022 og H2023 sier det uttrykkelig). Registeret er hva
veiledningene sier skal trekke — ikke en kartlegging av hva kandidater faktisk
gjør. Og **28 av 34 terminer har ingen veiledning**.

Kap. **8.4** avslutter med bokas ene **kalde bank**: de fire siste utdragene
leveres UTEN `hints`, fasit = ren momentliste, eksplisitt merket «Kald bank —
ingen hint. Her er det å kjenne igjen feilen selv som trenes.» Dette er eneste
unntak fra hint-kravet i §12.

### 5.5 Modellbesvarelseskapitler (8.5–8.7)

1. `text` med den nyskrevne oppgaven, formulert slik den ville stått i et sett,
   pluss ærlighetslinjen fra §11.1.
2. `collapsible` **A-besvarelse** — full, sammenhengende tekst med margnotater og
   «— naturlig pausepunkt —» mellom hovedseksjonene.
3. `collapsible` **Kommentert C-besvarelse** (8.5 og 8.6) — samme oppgave,
   korrekt men flat, med notater om gapet opp til A rammet inn som
   **oppgraderingsmeny**, ikke mangelliste.
4. `collapsible` **«Bestått-på-marginen»-besvarelse** i **8.5 og 8.7** — viser
   terskelen NEDENFRA, med margnotater om hva som så vidt holder.
5. `tip` **Sensorblikket** — momentliste strukturert som må-punkter /
   pluss-punkter / feller, anvendt på akkurat denne oppgaven, med den eksplisitte
   setningen om hvorfor C-versjonen ikke ble B, og med «minimum for en
   beståttkarakter på denne oppgaven» utledet av må-punktene.
6. `warning` **Typiske feil** — feilene C-versjonen demonstrerer (skjelettet
   angir dem: 8.5 → #5, #6, #8 · 8.6 → #1, #10, #16 · 8.7 → #14, #2, #5, #16).
   Kravet om `warning`-blokk gjelder også disse kapitlene.

⚠ **Kap. 8.7 skal si i klartekst at H2026-formen er ukjent.** Fire timers digital
skoleeksamen med Lovdata Pro i eksamensmodus og krav om korrekte
kildehenvisninger — men **ingen sett i den formen finnes ennå**. Settet er bygget
på det dokumenterte mønsteret (metode eller legalitetsprinsipp i den ene delen,
ansvarslære eller ett straffebud i den andre), ikke på et sett. **Vekting oppgis
ikke**, fordi vektingen har snudd (1/4–3/4 i H2020 og H2021, 3/4–1/4 i H2024,
forlatt i H2025) og derfor ikke kan antas.

### 5.6 Prøvekapitler (`juroff1500-<del>-prove`, del 1–7)

Id `juroff1500-<del>-prove`, `chapterNumber` `<del>.P`, tittel «Prøver til del
<del>: <deltittel>».

Struktur: `tip` (dekning + «4 prøver à ~30–45 min» + «kan trygt deles over flere
kvelder — én prøve per økt» + hvor flervalget bor) + `text` Forkunnskaper + **fire**
`collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med nyskrevne
oppgaver og full fasit. **Prøvenes tema og oppgavetyper per del står i
skjelettets §7 — følg dem punkt for punkt.**

**Fasitstruktur** (obligatorisk i hver prøvefasit):

> **Må-punkter** (uten disse når svaret ikke C-terskelen) · **Pluss-punkter**
> (det som løfter — begrunnelsen, den utskrevne alternative lesningen, det egne
> eksempelet) · **Feller** (det veiledningene faktisk sier skal trekke, med
> feilkode).

Etter hver prøvefasit: **avkryssbar selvdiagnose-sjekkliste (☐)** — bruk
rubrikkene i §6.4. Kap-referanser i fasitene som markdown-lenker. **Ingen quiz og
ingen begrepsbank i prøvekapitler.**

⚠ **Ja/nei- og riktig/galt-lister:** `sjekk-statiskflervalg.py` leser `a) b) c)
d)` under et nummerert spørsmål som et flervalg. Er listen et sett med
SELVSTENDIGE påstander (ikke deloppgaver av én oppgave), bruk romertall
**(i), (ii), (iii)** — det er nummerering av påstander, ikke listemerking av
deloppgaver. Dette treffer særlig **prøve 4 i del 1** (10 riktig/galt-påstander),
**prøve 2 i del 4** (10 riktig/galt) og **prøve 1 i del 3**. Beholder du a)–e),
sjekk portens tall mot en manuell telling før du «retter» noe. **Dette er det
ENESTE stedet romertall er tillatt.** Deloppgaver merkes alltid **a), b), c)**
(§12).

---

## 6. EKSAMENSKONTRAKTEN (fagets kjerne — bindende for alle løsninger og modellsvar)

Alt i denne seksjonen etableres i Del 0 (kap. 0.1–0.3) og refereres i resten av
boka.

### 6.1 Kildegrunnlaget og TALLDISIPLINEN (bokas strengeste seksjon etter §7)

Tallene er talt i emnemappa og etterprøvd mot UiOs egne publiseringer 3. august
2026. De er gjengitt her fordi denne kontrakten er porten forfatteren leser.

| Fakta | Tall |
|---|---|
| **Eksamensterminer dokumentert av UiO, 2005–2025** | **34** |
| Årsspenn | 21 kalenderår — ingen H2007, ingen V2010, ingen vår etter 2019 |
| Vårterminer / høstterminer | **14 / 20** |
| Terminer med oppgavesett i **arkivet** | **32** |
| Terminer lest fra uio.no, **ikke i arkivet** | **2** — V2015 og H2015 |
| Filer i emnemappa | **48** — alle unike md5 |
| **Oppgavesett-filer** | **42**, som dekker **32 terminer** (10 filpar er samme sett i to filformater) |
| Innholdsunike dokumenter | **38** |
| **Sensorveiledninger** | **6 filer, 6 terminer** — **kun H2020, H2021, H2022, H2023, H2024, H2025** |
| **Løsningsforslag / modellbesvarelser / fasiter** | **0** |
| Terminer der oppgaveteksten er lest (arkiv + uio.no) | **34 av 34** |

**Kontrollsum filer:** 42 + 6 = 48. 42 − 10 dublerte filformater = 32
oppgavesett-dokumenter = 32 terminer. 32 + 6 = 38 innholdsunike dokumenter.
**Kontrollsum terminer:** 32 i arkivet + V2015 + H2015 = 34. Vår 14 + høst 20 = 34.

**Åtte ufravikelige konsekvenser:**

1. **Ordene «fasit», «løsningsforslag» og «modellbesvarelse fra eksamen» kan
   ALDRI brukes om arkivet.** UiO har publisert null av hver for dette emnet. Det
   som finnes er **oppgavesett** og **sensorveiledninger**. Bokas egne
   modellbesvarelser er **nyskrevne** og skal alltid omtales slik. Ordene er
   fortsatt lovlige i bokas egne sammenhenger («prøvefasit», «fasiten skriver ut
   begge lesningene»); det er koblingen til arkivet og til UiO som er forbudt.
   Prosaregel-kontrollert (§14.5, port 3).
2. **Nevneren for temafrekvens er 34 terminer — aldri 32, aldri 42, aldri
   «alle terminer 2005–2026».** Enheten skrives alltid ut: «16 av 34 terminer»,
   aldri «16 av 34».
3. **⚠ V2015 og H2015 er ikke i arkivet.** De er publisert av UiO, lest derfra,
   og teller i frekvensen. **Hver frekvensrad der de inngår, skal bære merkingen
   «(ikke i arkivet)».** Den fulle listen over kapitler dette gjelder står i §6.2
   — **17 kapitler, 22 forekomster**, ikke de 9 skjelettets verifikasjonsliste
   nevner (§20, sprik 2). Rotårsaken er en filnavnkollisjon: UiO publiserer
   V2015, H2015 og V2016 med samme basenavn.
4. **Sensorpåstander har nevner 6 sensorveiledninger, og de dekker kun
   H2020–H2025.** Alt boka sier om hva sensor belønner, straffer eller lar
   passere, gjelder de seks terminene. **28 av 34 terminer har ingen
   veiledning**, og ingen påstand om vurdering kan bygge på dem. Formuleringer
   som «V2014-veiledningen» eller «H2016-veiledningen» omtaler dokumenter som
   ikke finnes og er **hardt forbudt** (§14.5).
5. **⚠ Alle seks sensorveiledningene er skrevet FØR besvarelsene er lest.** H2022
   og H2023 sier det uttrykkelig. Feilregisteret uttrykker altså sensors
   forhåndsforventninger, ikke en kartlegging av hva kandidater gjør. Dette
   ærlighetsforbeholdet SKAL stå der registeret presenteres (kap. 0.3 og 8.4).
6. **42 er et FILTALL, ikke et settall.** Ti av de 42 filene er samme sett i et
   annet filformat. En brøk med nevner 42 ville telt de samme eksamenene to
   ganger. Tallet 42 skrives derfor alltid som «42 oppgavesett-filer», alltid
   sammen med «som dekker 32 terminer», og opptrer **kun i kildenoten**.
7. **Fire ting boka ikke har belegg for:** (a) hvorfor H2007 og V2010 mangler —
   det er **ikke belegg** for om eksamen ikke ble avholdt eller om oppgaven bare
   aldri ble publisert; (b) **strykprosent, karakterfordeling eller
   sensurstatistikk** — det finnes ikke i materialet, og fakultetets skjema sier
   at det ikke gjennomføres aktiv normalfordeling; (c) **eksamensdatoene i
   praktikumsregimet H2020–H2025** — Inspera-utskriftene har ikke dato, og
   veiledningenes datoer er ikke eksamensdatoer; (d) **karakterkriteriene A–F**
   ligger i fakultetets generelle sensorveiledningsskjema (sist oppdatert 19.
   september 2024), som er publisert på emnesiden, men **ikke er i arkivet**.
8. **Nevnere som IKKE er lovlige:** «35 terminer», «34 sensorveiledninger», «alle
   terminer 2005–2026», «N av 42 sett», «N av 48 filer», og enhver formulering
   som antyder at emnet har både vår- og høsteksamen i dag. **Emnet undervises og
   eksamineres kun om høsten.**

### 6.1.1 Kildenote-mal for kap. 0.1

Bruk denne ordlyden — tilpasset i språk, **aldri i tall**. Malen er testet mot
forbudt-regexen i §14.5 og gir **null treff** (testen står i §14.5).

> Boka er kalibrert mot hele JUROFF1500-arkivet ved UiO: **34 eksamensterminer
> fra våren 2005 til høsten 2025**, dokumentert gjennom **42 oppgavesett-filer
> som dekker 32 terminer** og **6 sensorveiledninger som dekker 6 terminer**.
> V2015 og H2015 finnes ikke i arkivet, men er publisert av UiO og lest derfra —
> derfor foreligger oppgaveteksten for alle 34 terminene, og de to er merket
> «(ikke i arkivet)» hver gang de inngår i et frekvenstall. Sensorveiledning
> finnes bare fra og med H2020: seks terminer har den, 28 har den ikke, og
> ingenting boka sier om hva sensor belønner eller trekker for, bygger på de 28.
> H2007 og V2010 finnes ikke hos UiO heller, og det er ikke belegg for å si
> hvorfor. **Arkivet inneholder ingen fasit og ingen løsninger fra UiO for dette
> emnet.** Sensorveiledningene er dessuten skrevet før besvarelsene er lest — de
> beskriver hva sensor forventer, ikke hva kandidater faktisk gjorde. Alt du
> finner av modellbesvarelser, momentlister og prøvefasiter i denne boka er
> derfor skrevet av oss, ut fra lovtekst, pensum og veiledningenes egne
> nivåbeskrivelser. **Forbehold:** 20 av de 34 terminene er skrevet til
> straffeloven av 1902, som ikke gjelder i dag — se kap. 1.5. Eksamensformen
> legges om fra høsten 2026, og ingen sett i den nye formen finnes ennå.

⚠ **Fellen malen er kalibrert rundt:** «offisielle løsningsforslag» er riktig i
sak, men blokkert av porten. Malen sier derfor «ingen fasit og ingen løsninger
fra UiO», som er like sant og passerer. Skriv aldri om malen til den forbudte
formen, og legg aldri til «42 sett» eller «35 terminer».

### 6.2 AUTORITATIV frekvenstabell per kapittel

**Regelen: tallet er ALLTID antall LISTEDE terminer i belegg-lista.** Ikke antall
forekomster, ikke et anslag, ikke en omregning.

**Alle 40 kapitlers frekvenspåstander er etterregnet mot terminlistene sine 3.
august 2026: 40 påstander med liste, og alle 40 stemmer.** Skjelettets
belegg-blokker kan derfor brukes ordrett — med de fire unntakene i §20.
Kolonnen **«2015»** sier om raden inneholder V2015 og/eller H2015 og dermed
KREVER merkingen «(ikke i arkivet)».

| Kap. | Påstand (bindende form) | 2015 |
|---|---|---|
| 0.1 | metakapittel — hele grunnlaget, 34 terminer. Spørsmålsantall: 10 spørsmål i **11 terminer**, 8 i **14 terminer**, 6 i **3 terminer**; 11 + 14 + 3 = **28 terminer** i kortsvarsregimet, de resterende **6 av 34** er praktikumsregimet | ja (i 8-listen) |
| 0.2 | formkravet i settene fra V2014; kildehenvisningskravet fra H2026 | nei |
| 0.3 | sensorkravene — **6 sensorveiledninger**, kun H2020–H2025 | nei |
| 1.1 | rettskildefaktorer og lovtolkning **8 av 34 terminer** · Grunnloven **5 av 34** · forskrifter **4 av 34** · rettspraksis **6 av 34** · samlekategorien juridisk metode **31 av 34** (fraværende bare i H2014, V2018 og H2021) | ja (rettspraksis) |
| 1.2 | del av lovtolkningstemaet **8 av 34 terminer**; lovanalyseoppgaven er prøvd med navngitt bestemmelse i **13 av 34 terminer** ⚠ **rettet fra skjelettets «elleve», se §20 sprik 3** | nei |
| 1.3 | legalitetsprinsippet **16 av 34 terminer**, **15 i arkivet**, og til stede i **5 av de 6 terminene fra H2020** | ja |
| 1.4 | reelle hensyn **10 av 34 terminer**, alle ti i arkivet, spørsmålet ordrett eller nær ordrett i **alle ti**; ingen forekomster etter H2016 | nei |
| 1.5 | virkeområdet i tid **2 av 34 terminer** (H2024, H2025) · **20 av 34 terminer (V2005–H2015) er skrevet til straffeloven 1902** · utgåtte institutter **3 av 34** hver | ja (overlegg) |
| 2.1 | straffbarhetsvilkårene som system **4 av 34 terminer**, **3 i arkivet** · deliktstypologien **1 av 34** | ja |
| 2.2 | unnlatelse **11 av 34 terminer**, alle elleve i arkivet; gjengangerspørsmålet **ordrett i 7 terminer og med ett ord lagt til i én — til sammen 8 av 34 terminer** ⚠ **presisert, se §20 sprik 4** | nei |
| 2.3 | rettsstridsreservasjonen **6 av 34 terminer**, heller mot vår (4 av 6) | nei |
| 3.1 | skyld generelt **6 av 34 terminer** · dekningsprinsippet **6 av 34**, **5 i arkivet** · samlekategorien skyldlæren **30 av 34** (fraværende bare i H2013, V2016, H2023 og H2025) | ja (dekningsprinsippet) |
| 3.2 | forsett **13 av 34 terminer**, **12 i arkivet** | ja |
| 3.3 | uaktsomhet **15 av 34 terminer**, **13 i arkivet** | ja (begge) |
| 3.4 | faktisk villfarelse **7 av 34 terminer** · rettsvillfarelse **7 av 34** · alle fjorten i arkivet · rettsvillfarelsesspørsmålet ordrett i **6 terminer** | nei |
| 3.5 | rus **13 av 34 terminer**, **11 i arkivet**; bevisstløshetsspørsmålet ordrett i **3 terminer** | ja (begge) |
| 3.6 | tilregnelighet **14 av 34 terminer**, **12 i arkivet**; **13 av de 14 er skrevet før H2024** | ja (begge) |
| 4.1 | forsøk **21 av 34 terminer**, **19 i arkivet**, og prøvd i **3 av de 6 terminene fra H2020** | ja (begge) |
| 4.2 | del av forsøkskomplekset **21 av 34 terminer** · tilbaketreden **4 av 34** | nei |
| 4.3 | medvirkning **18 av 34 terminer**, alle atten i arkivet; det selvstendige ansvaret gitt ordrett i **5 terminer** (V2007, V2008, V2009, V2012, V2018) | nei |
| 4.4 | krysningen medvirkning **18 av 34** og unnlatelse **11 av 34**; ingen termin ber om krysningen som egen oppgave | nei |
| 5.1 | systematikken **9 av 34 terminer** · samlekategorien straffrihetsgrunner **24 av 34** | nei |
| 5.2 | nødverge **8 av 34 terminer**, **7 i arkivet**; 5 av de 7 forekomstene i kortsvarsregimet er høsttermin | ja |
| 5.3 | nødrett **8 av 34 terminer**, **7 i arkivet**; 4 vår og 4 høst | ja |
| 5.4 | samtykke **4 av 34 terminer** · provokasjon og retorsjon **6 av 34** · alle ti i arkivet | nei |
| 6.1 | straffens begrunnelse **2 av 34 terminer** (H2024, H2025) — men et karakterkriterium på hvert nivå A–F | nei |
| 6.2 | straffer og reaksjoner **12 av 34 terminer**, **11 i arkivet** · samlekategorien reaksjonslæren **19 av 34** · foretaksstraff **2 av 34** | ja |
| 6.3 | barn og straff **5 av 34 terminer**, alle fem i arkivet | nei |
| 6.4 | strafferamme og utmåling **4 av 34** · konkurrens **4 av 34**, alle fire om høsten · foreldelse **4 av 34**, **3 i arkivet** | ja (foreldelse) |
| 7.1 | tyveri **9 av 34 terminer**, alle ni i arkivet; analyseoppgaven i **6 terminer i 1902-form** og **2 i gjeldende form** — 6 + 2 = 8, og H2021 tester tyveri i praktikumsform | nei |
| 7.2 | vold og kroppskrenkelse **11 av 34 terminer**, alle elleve i arkivet; gjengangerformuleringen ordrett i **5 terminer**, alle i 1902-regimet | nei |
| 7.3 | mishandling i nære relasjoner **2 av 34 terminer** (H2024, H2025) | nei |
| 7.4 | drap **4 av 34** · narkotika **5 av 34** · ran **2 av 34** · seksuallovbrudd **2 av 34** — alle tretten forekomstene i arkivet | nei |
| 8.1 | kortsvarssjangeren dominerer **28 av 34 terminer** | nei |
| 8.2 | teorioppgaven i **5 av de 6 terminene H2020–H2025** · systematiseringsoppgaven **1 gang** (H2024) | nei |
| 8.3 | praktikum **6 av 34 terminer**, alle de seks siste; før 2020 finnes ikke ett eneste praktikum | nei |
| 8.4 | feilregisteret — **16 feil**, destillert fra **6 sensorveiledninger**; 28 av 34 terminer har ingen veiledning | nei |
| 8.5 | kombinerer forsøk **21 av 34**, medvirkning **18 av 34** og skyldlæren **30 av 34** | nei |
| 8.6 | legalitetsprinsippet i **5 av de 6 terminene fra H2020**; kortsvarsbatteriet speiler **28 av 34 terminer** | nei |
| 8.7 | speiler H2026-formen — **ingen sett i den formen finnes ennå** | ja (i 8-listen) |

**Kapitler som MÅ bære «(ikke i arkivet)»-merkingen** (17 kapitler, 22
forekomster — telt i skjelettet 3. august 2026): **0.1, 0.3, 1.1, 1.3, 1.5, 2.1,
3.1, 3.2, 3.3, 3.5, 3.6, 4.1, 5.2, 5.3, 6.2, 6.4, 8.7.** Merkingen skal stå i
selve frekvensraden, ikke i en fotnote.

### 6.3 NEVNERPORTEN — hvilken nevner til hvilken påstandstype

| Nevner | Når den brukes | Eksempel |
|---|---|---|
| **34 terminer** | ALLE temafrekvens-påstander | «Forsøk er prøvd i 21 av 34 terminer.» |
| **6 sensorveiledninger** | påstander om hva sensor belønner eller trekker for | «Alle 16 feilene er hjemlet i minst én av de 6 sensorveiledningene.» |
| **32 terminer** | når enheten er termin med oppgavesett i arkivet | «32 av 34 terminer har et arkivert oppgavesett.» |
| **28 terminer** | kortsvarsregimet V2005–H2019 | «Kortsvarsformen dominerer 28 av 34 terminer.» |
| **de 6 terminene fra H2020** | praktikumsregimet | «5 av de 6 terminene fra H2020.» |
| **de 6 siste terminene** | samme sett, annen innramming | «alle de seks siste» |
| **42 oppgavesett-filer** | KUN i kildenoten, alltid med «som dekker 32 terminer» | — |

**Ufravikelige konsekvenser:**

- **Enheten skrives alltid ut.** «21 av 34 terminer», aldri «21 av 34». Uten
  enhet vet ikke leseren om det telles sett, filer eller terminer — og det er
  nettopp der utv1000 og inter1000 gikk i grøfta.
- **«Sett» er ALDRI en nevner i denne boka.** Ordet er tvetydig her (42 filer, 32
  terminer i arkivet, 34 terminer totalt), og filformat-dublettene gjør enhver
  settelling feil. Skriv «terminer».
- **«I de fleste terminene», «gjennomgående», «nesten alltid» og «ofte» er
  FORBUDT som frekvenspåstander** uten et telt tall ved siden av. Unntak:
  kvalitative sensorkarakteristikker («gjennomgangstonen i alle seks
  veiledningene»), som skal merkes som veiledningenes egne vurderinger.
- **Nevneren for et TEMA er ikke nevneren for et DELTEMA.** Skyldlæren er prøvd i
  30 av 34 terminer; det betyr **ikke** at forsett, uaktsomhet eller rus hver for
  seg er prøvd 30 ganger. Kap. 3.2, 3.3 og 3.5 skal skrive «som del av
  skyldlæren, prøvd i 30 av 34 terminer» og deretter sitt eget, mindre tall fra
  §6.2. Dette er den vanligste måten å produsere et sant tall som sier noe usant.
- **Sesong- og periodepåstander beholder scopet sitt.** «Nødverge er et
  høstspørsmål: 5 av de 7 forekomstene i kortsvarsregimet er høsttermin» gjelder
  **kortsvarsregimet**, ikke alle 8 forekomstene — den åttende (H2020) ligger i
  praktikumsregimet. Faller scopet bort, blir påstanden gal. ⚠ Og skjelettet er
  tydelig: **ingen av sesongmønstrene er sterke nok til å bære en prognose**, og
  fra H2020 finnes bare høstterminer.

### 6.4 Karakternivåene, sensorreglene og de tre rubrikkene

Alle sjangerkapitler, modellbesvarelser og prøvefasiter skal referere til nivåene
ved navn — aldri bare «sensor vil ha god drøfting». Kilden er fakultetets
generelle sensorveiledningsskjema (sist oppdatert 19. september 2024, publisert på
emnesiden, **ikke i arkivet**) og de seks emneveiledningene.

**Den bærende aksen gjennom hele skalaen er «vurderingsevne og selvstendighet»:**

| | |
|---|---|
| **A** | svært god vurderingsevne og **stor grad** av selvstendighet |
| **B** | meget god vurderingsevne og selvstendighet |
| **C** | god vurderingsevne og selvstendighet **på de viktigste områdene** |
| **D** | **en viss grad** av vurderingsevne og selvstendighet |
| **E** | **liten** vurderingsevne og selvstendighet |
| **F** | **manglende** vurderingsevne og selvstendighet |

Innholdskriteriene som gjentas på hvert nivå med gradert styrke: klare og presise
svar på det oppgaven spør om · oversikt over temaet · å skille vesentlig fra
uvesentlig og sikkert fra tvilsomt · å resonnere kritisk og uavhengig · **blikk
for rettspolitiske dimensjoner**. På metodeaksen: å finne fram til og formulere
rettslige problemstillinger, herunder skille prinsipale fra subsidiære · å drøfte
faglig forsvarlig og skjønnsomt · og å **dimensjonere besvarelsen fornuftig**,
som er et selvstendig kriterium og ikke bare et råd.

**Det som belønnes** (alle seks veiledningene): selvstendighet framfor avskrift ·
å håndtere et sammensatt rettskildebilde (H2022 og H2023 sier begge at det er
viktigere å gi uttelling til den som håndterer flere kilder enn å se strengt på
den som ikke er like grundig overalt, fordi det er reelt vanskelig for uinnvidde
å bruke Lovdatas søkemotorer) · å se metodiske poenger av eget initiativ (H2025)
· å finne rettskilder ut over dem undervisningen ga, og si noe om **vekten** av
dem (H2022, H2024) · å problematisere der stoffet faktisk er tvilsomt (H2023) ·
å koble regelen til begrunnelsen (H2022, H2024) · å skrive sammenhengende framfor
punktvis (H2024).

**Det som straffes:** avskrift fra pensum — den eneste straffebestemmelsen som
går igjen i alle seks, og H2024 utformet teorioppgaven slik at den **ikke kunne
løses** med avskrift · å skrive seg bort fra spørsmålet, særlig når det går på
bekostning av tiden til de andre spørsmålene (H2020) · ufullstendig besvarelse av
teorioppgavens deler, som H2022 sier i utgangspunktet bør vurderes i det nedre
sjiktet · uetterprøvelig kildegrunnlag (H2025).

**Det som IKKE straffes** (skal stå eksplisitt i kap. 0.3 — det er
karakter-realisme, ikke trøst): **feil konklusjon** (H2023, H2025, og
H2025-oppgaveteksten sier det til studentene selv) · **svak struktur i
praktikum**, fordi formen er ny for kandidatene (H2020, H2021) · **manglende
juridisk oppgaveteknikk** (H2024) · **å bygge på utdatert lovtekst når pensum er
utdatert** (H2024 om ungdomsstraffen) · **å overse et avansert poeng** (H2023 om
personforveksling — toppkarakter skal være mulig uten det) · **uheldig
oppgaveformulering**, som H2025 to steder erkjenner selv.

**De tre rubrikkene (bindende selvrettingsverktøy, binære — leseren skal kunne
krysse av uten skjønn).** De står i kap. 0.3 og i 8.1–8.3, og hver prøvefasit
viser tilbake til den som passer.

**Kortsvarsrubrikken (KORT):**

☐ Er hjemmelen oppgitt med lov, paragraf og ledd?
☐ Er formålet med regelen sagt i én setning?
☐ Er hovedformene eller vilkårene listet og forklart?
☐ Er det ett **eget** eksempel som viser begrepet i arbeid?
☐ Er svaret dimensjonert til tiden — omtrent like langt som de andre svarene?

**Lovanalyserubrikken (ANA):**

☐ Er det sagt hvem som kan være gjerningsperson?
☐ Er de objektive vilkårene skilt ut ett for ett?
☐ Er det sentrale substantivet tolket, ikke bare gjentatt?
☐ Er det sentrale verbet tolket?
☐ Er skyldkravet identifisert og knyttet til gjerningsbeskrivelsen?
☐ Er analysen gjort på **gjeldende** lovtekst?

**Praktikumsrubrikken (PRAK):**

☐ Er problemstillingen utledet av lovens vilkår og ikke av magefølelsen?
☐ Er hjemmelen forankret før tolkningen starter?
☐ Er vilkåret tolket før det subsumeres?
☐ Bruker subsumsjonen faktums konkrete momenter?
☐ Er det drøftet subsidiært der konklusjonen ellers stenger resten?
☐ Er det klare behandlet kort og det tvilsomme grundig?

### 6.5 Sjangrenes anatomi (bindende for alle modellsvar og fasiter)

Kodene **KORT**, **ANA**, **PRAK**, **TEO** og **SYST** er byggespråk. **Skriv
alltid sjangerens navn først, koden i parentes**, og skriv navnet fullt ut ved
første bruk per kapittel (§14.2).

**KORT — kortsvarsspørsmålet, fire trinn:** (1) **hjemmelen** — hvor regelen står
og hva ordlyden sier · (2) **formålet** med prinsippet eller bestemmelsen ·
(3) **hovedformene** eller vilkårene · (4) **et eget eksempel**. Malen er hentet
fra oppgavesettenes egen formulering: fra V2014 står «Henvisning(er) til lov skal
gjøres der det er naturlig» under settene, og i H2015, V2016 og V2017 i tillegg
at formålet og hovedformene bør nevnes. Tidsbudsjett: **30–50 minutter per
spørsmål**. **Sammenlikningsvarianten** trenes separat: begge begrepene
defineres, **forskjellen** formuleres eksplisitt i én setning, og eksempelet
velges slik at det ville falle ulikt ut for de to.

**ANA — lovanalyseoppgaven, fem trinn:** (1) hvem kan være gjerningsperson →
(2) de objektive vilkårene → (3) hva betyr det sentrale substantivet → (4) hva
betyr det sentrale verbet → (5) hva er skyldkravet. **Dette er ikke praktikum.**
Det finnes ikke noe faktum — kandidaten skal **tolke** lovteksten, ikke
subsumere. Å konstruere et faktum å subsumere under er sjangerfeilen her.

**PRAK — praktikumsoppgaven, fem trinn per problemstilling:** (1) presis
problemstilling utledet av lovens vilkår → (2) hjemmel → (3) tolkning av vilkåret
→ (4) subsumsjon med faktums konkrete momenter → (5) konklusjon. Pluss tre
disposisjonsregler: **rekkefølgen følger straffbarhetsvilkårene**, ikke faktums
kronologi · **subsidiaritet** er obligatorisk der en konklusjon ellers avskjærer
resten · **proporsjon** — kort om det klare, dybde i det tvilsomme. **Riktig
konklusjon kreves ikke.**

**TEO — teorioppgaven:** innledning som avgrenser → problemstilling →
sammenhengende fremstilling i disponerte deler → sammenfatning eller egen
vurdering. H2020 beskriver den som «et ordinært spørsmål slik det vanligvis
gis», bare med rom for og fordel av å skrive mer. ⚠ **H2022 sier at kandidater
som ikke besvarer alle delene av teorioppgaven dekkende, i utgangspunktet bør
vurderes i det nedre sjiktet.** Det er materialets skarpeste enkeltanvisning om
denne sjangeren, og den skal stå.

**SYST — systematiseringsoppgaven:** som TEO, men underspørsmålene settes
eksplisitt i sin naturlige sammenheng. H2024 sier hva som skiller nivåene: de
flinkeste skriver en **sammenhengende** oppgave, de svakeste svarer enkeltvis —
og **begge deler godtas**. Boka skal si det.

**Gjenbruksregelen (gjelder alle sjangre):** en redegjørelse gitt under ett
underspørsmål skal gi uttelling også når den brukes videre i et senere — den skal
altså trekkes eksplisitt inn («den sondringen fra a) gjør arbeidet også her,
fordi …»), ikke gjentas.

### 6.6 Tidsbudsjett (bruk denne modellen konsekvent i hele boka)

**Gjeldende form fra H2026 (4 timer, digital skoleeksamen i Inspera, åpen bok med
Lovdata Pro i eksamensmodus, krav om korrekte kildehenvisninger):** ⚠ **strukturen
er ikke kjent.** Bokas arbeidsmodell, som skal presenteres som en modell og ikke
som et sett: ~20 min lesing og disponering av hele settet → ~1 t 40 min per
hoveddel ved to likevektede deler → ~20 min gjennomlesning og kildekontroll.
Innenfor et praktikum: lese faktum og liste problemstillinger (15 min) → forankre
hjemlene i Lovdata (15) → tolke og subsumere det tvilsomme (60) → subsidiære
spørsmål (15) → landing og gjennomlesning (15).

**De tre formregimene** (kap. 0.1, kort): fem timers skoleeksamen med 6–10
kortsvarsspørsmål V2005–H2019 (kl. 10:00–15:00) → fire timers hjemmeeksamen med
teori pluss praktikum H2020–H2025 → fire timers digital skoleeksamen fra H2026.
H2020 ble omgjort fra skoleeksamen «i siste liten» på grunn av pandemien.

⚠ **Vektingen er ikke en konstant og kan ikke antas:** H2020 og H2021 la 1/4 på
teori og 3/4 på praktikum · H2022 oppga bare tid (1 time / 3 timer), **ingen
brøk** · H2023 oppga «en halvtime» / «3,5 timer» · **H2024 snudde det: 3/4 på
teorioppgaven** · H2025 forlot todelingen og sa bare at spørsmål 1 skulle ha
hovedprioritet.

Der en oppgaves deklarerte tid avviker fra summen av deltidene, forklares
differansen (skrivetid mot total). «Lite tid?»-boksen sier eksplisitt at
kapitlenes tidsanslag er **LESEtid**, og at den som skriver besvarelser for hånd
bør legge på ca. ×1,5.

### 6.7 Bokas to mantraer

1. **«Forståelse foran gjengivelse.»** Etableres i kap. 0.3, gjentas i hvert
   sjangerkapittel. Hjemmelen er hjelpemiddelsituasjonen: H2020, H2021, H2022 og
   H2025 sier alle at fri kildetilgang gjør at ren gjengivelse av læreboka skal
   skille seg negativt ut.
2. **«Drøftelsen teller, ikke konklusjonen.»** Etableres i kap. 0.3. H2023 og
   H2025 sier det uttrykkelig, og H2025-oppgaveteksten sier det til studentene
   selv.

Begge mantraene forklares i klarspråk ved første bruk — «C-stoff» er
karaktersjargong og skal gloses (§12).

---

## 7. 1902-KALIBRERINGEN (bokas største enkeltrisiko — hard port)

**20 av 34 terminer (V2005–H2015) er skrevet til straffeloven av 1902.** Hele
paragrafapparatet i disse settene finnes ikke i gjeldende lov. En bok som gjengir
gammel nummerering som gjeldende rett, er ikke bare unyttig — den er **direkte
skadelig** for en kriminologistudent som fra H2026 skal svare med korrekte
kildehenvisninger og slå opp i Lovdata Pro under eksamen. Et paragrafnummer hun
har lært av oss og ikke finner i Lovdata, koster henne tid hun ikke har.

### 7.1 Omregningstabellen (kap. 1.5, gjentas i studieguiden)

| straffeloven 1902 | straffeloven 2005 | prøvd i 1902-form |
|---|---|---|
| § 257 tyveri | **§ 321** | H2005, H2006, V2007, V2009, H2010, V2013 |
| § 228 legemsfornærmelse | **§ 271** kroppskrenkelse | V2007, H2008, H2010 |
| § 229 legemsbeskadigelse | **§ 273** kroppsskade | V2007 |
| § 233 drap | **§ 275** | H2008, H2011 |
| § 162 narkotikaovertredelse | **§ 231** | V2011 |
| § 49 forsøk / § 50 tilbaketreden | **§ 16** (begge deler) | H2008 |
| § 219 mishandling i nære relasjoner | **§ 282** | ikke prøvd i 1902-form |

**Merk nyansen H2025 belønner:** § 282 er ikke realitetsendret fra 1902 § 219 ut
over strafferammen, så rettskildene til den gamle bestemmelsen er fortsatt
relevante **for den**. Det gjelder **ikke** generelt, og boka skal si det. Feilen
er å behandle 1902-loven som opphevet i alle henseender — eller som gjeldende i
alle.

### 7.2 Notasjonsregelen — gammel nummerering merkes ALLTID

Ingen 1902-paragraf skrives noen gang alene:

```
✗ § 257 stiller fem vilkår for tyveri
✓ 1902 § 257 — i dag straffeloven § 321 — stilte fem vilkår for tyveri
```

Regelen er **grep-sjekkbar på paragrafnummeret**, ikke på ordet — jf. minnet
«Forankret erstatning». Formuleringen kan varieres, men tre ting må stå i samme
setning: **årstallet 1902**, **det gamle nummeret** og (i samme eller
nabosetningen) **det gjeldende nummeret**.

### 7.3 PORT A — sentnivåkontroll av notasjonsregelen (testet 3. august 2026)

⚠ **`sjekk-prosaregel.py` duger IKKE til denne regelen.** Skriptet har en
kapittelvid fallback: treffer unntaksregexen ÉN gang et sted i kapitlet, slipper
**alle** treff gjennom. Kap. 7.1 vil nevne «1902» i innledningen sin uansett, og
dermed ville hver eneste bare «§ 257» i resten av kapitlet passere. Bruk denne
dedikerte porten i stedet. Den er kjørt mot to fikstur-kapitler: den slipper
gjennom alle åtte korrekte former, og fanger alle fire bruddformene (bar
paragraf, manglende gjeldende nummer, utgått institutt uten ramme, `§§ 49 og 50`
uten `§ 16`).

```bash
python3 - <<'EOF'
# PORT A — JUROFF1500: 1902-notasjonsregelen, kontrollert PER SETNING.
import glob, json, os, re, sys
PAR = {"257": "321", "228": "271", "229": "273", "233": "275",
       "162": "231", "219": "282", "49": "16", "50": "16"}
UTGATT = {"43"}   # culpa levissima — ingen ren ekvivalent, krever utgått-ramme
RAMME = re.compile(r"utgått|ikke lenger|opphevet|bortfalt|historikk|ikke gjeldende", re.I)
FINN = re.compile(r"§§?\s*(" + "|".join(sorted(set(PAR) | UTGATT, key=len, reverse=True)) + r")(?!\d)")
FORK = ("jf.", "nr.", "s.", "Rt.", "kap.", "bl.a.", "f.eks.", "pkt.", "flg.",
        "utg.", "osv.", "dvs.", "ca.", "m.m.", "Ot.prp.", "st.", "avsn.")
def setninger(s):
    v = s
    for f in FORK:
        v = v.replace(f, f.replace(".", "\x00"))
    return [b.replace("\x00", ".") for b in re.split(r"(?<=[.!?])\s+|\n+", v)]
def strenger(o, sti=""):
    if isinstance(o, str): yield sti, o
    elif isinstance(o, dict):
        for k, v in o.items(): yield from strenger(v, f"{sti}.{k}")
    elif isinstance(o, list):
        for i, v in enumerate(o): yield from strenger(v, f"{sti}[{i}]")
treff, avvik = 0, []
for p in sorted(glob.glob("src/lib/data/chapters/juroff1500-*.json")):
    navn = os.path.basename(p)
    for sti, s in strenger(json.load(open(p, encoding="utf-8"))):
        setn = setninger(s)
        for i, snt in enumerate(setn):
            for m in FINN.finditer(snt):
                treff += 1; nr = m.group(1); nabo = " ".join(setn[max(0, i-1): i+2])
                if "1902" not in snt:
                    avvik.append(f'{navn}{sti}: «§ {nr}» UTEN «1902» i samme setning → «{snt.strip()[:150]}»')
                elif nr in UTGATT and not RAMME.search(nabo):
                    avvik.append(f'{navn}{sti}: «§ {nr}» uten utgått-ramme → «{snt.strip()[:150]}»')
                elif nr in PAR and not re.search(r"§§?\s*" + PAR[nr] + r"(?!\d)", nabo):
                    avvik.append(f'{navn}{sti}: «§ {nr}» uten gjeldende «§ {PAR[nr]}» i nærheten → «{snt.strip()[:150]}»')
print(f"{treff} forekomster av 1902-paragrafer | avvik: {len(avvik)}")
for a in avvik[:40]: print(" -", a)
sys.exit(1 if avvik else 0)
EOF
```

**Porten skal gi null avvik.** To ting den ikke kan fange, og som forfatteren må
kontrollere manuelt: at det gjeldende nummeret faktisk er RIKTIG (§9), og at
1902-omtalen er en *opplysning om gamle sett*, ikke en fremstilling av gjeldende
rett.

### 7.4 Utgåtte institutter — NULL kapitler, NULL flashcards, NULL quiz

| institutt | prøvd i | status |
|---|---|---|
| Skillet **forbrytelser / forseelser** | **3 av 34 terminer** — V2005, H2011, V2014 | bortfalt med straffeloven 2005. Null pensumverdi |
| **Culpa levissima** («kunne innse», 1902 § 43) | **3 av 34 terminer** — H2010, V2011, H2014 | bortfalt som selvstendig skyldform. ⚠ Erstatningen i strl. § 24 **skal verifiseres mot Lovdata** før boka nevner paragrafnummeret |
| **«Overlegg»** (1902 § 233 annet ledd) | **3 av 34 terminer** — H2013, H2015 *(ikke i arkivet)*, V2017 | ⚠ V2017 ligger **etter** lovskiftet, så begrepet levde i undervisningen minst ett år inn i 2005-regimet. **Avklar status før boka omtaler det som noe annet enn historikk** |

Bokas **eneste** omtale er den korte, eksplisitt merkede historikk-delen i
kap. 1.5, pluss de tre korte merknadene skjelettet plasserer i kap. 3.3 (culpa
levissima), 5.4 (1902 § 228 tredje ledd) og 7.4 («overlegg»). Historikken har ett
formål: at leseren som åpner et sett fra 2011 skjønner hvorfor to av åtte
spørsmål handler om noe hun ikke skal kunne.

**Bindende:** de tre instituttene får **ingen egne kapitler**, **ingen
flashcards** og **ingen quiz på innholdet**. Ett enkelt flashcard og eventuelt
ett quizspørsmål per institutt om at det **er utgått**, er tillatt — men da skal
svaret handle om statusen, ikke om vilkårene. Prøve 4 i del 1
(«Lovvalg i tid og 1902-oversetting») tester å **kjenne igjen** et utgått
institutt i en gammel oppgavetekst; ingen oppgave der krever kunnskap om
instituttets innhold.

**PORT B — utgått-rammen (streng, uten kapittelvid fallback):**

```bash
python3 - <<'EOF'
import glob, json, os, re, sys
TREFF = re.compile(r"culpa levissima|forbrytelse[rn]? og forseelse|forseelse|overlegg", re.I)
RAMME = re.compile(r"utgått|ikke lenger|opphevet|bortfalt|historikk|ikke gjeldende|1902|null pensumverdi", re.I)
V = 200
def strenger(o, sti=""):
    if isinstance(o, str): yield sti, o
    elif isinstance(o, dict):
        for k, v in o.items(): yield from strenger(v, f"{sti}.{k}")
    elif isinstance(o, list):
        for i, v in enumerate(o): yield from strenger(v, f"{sti}[{i}]")
avvik, n = [], 0
for p in sorted(glob.glob("src/lib/data/chapters/juroff1500-*.json")):
    for sti, s in strenger(json.load(open(p, encoding="utf-8"))):
        for m in TREFF.finditer(s):
            n += 1
            if not RAMME.search(s[max(0, m.start()-V): m.start()+V]):
                avvik.append(f"{os.path.basename(p)}{sti}: «{m.group(0)}» uten utgått-ramme")
print(f"{n} treff | avvik: {len(avvik)}")
for a in avvik[:30]: print(" -", a)
sys.exit(1 if avvik else 0)
EOF
```

I tillegg, manuelt: tell `definition`-blokker og quizspørsmål som handler om
instituttenes **innhold**. Tallet skal være **0**.

### 7.5 Pensum er selv utdatert på ett punkt ⚠

**Frøberg, «Alminnelig strafferett i et nøtteskall», 2. utgave 2020, er utdatert
på reaksjonslæren.** H2024-veiledningen sier det selv: læreboka er skrevet før
ungdomsstraffendringene og viser til samtykkekravet slik det var. **Boka
kalibreres mot lovteksten, ikke mot Frøberg 2020.**

Konkret er ungdomsstraffen endret ved **lov 20. desember 2023 nr. 110, i kraft
1. september 2024**: samtykkekravet i § 52a bokstav c er tatt bort, § 52a tredje
ledd om rett til medvirkning er ny, § 52a annet ledd regulerer lovbrytere over 18
år på ett eller flere handlingstidspunkt, gjennomføringstiden i § 52b bokstav a
er redusert fra seks måneder til 120 dager, og § 52c fjerde ledd åpner for
elektronisk kontroll. **Alt dette skal kontrolleres mot Lovdata før det skrives**
(§9). Ungdomsstraff er prøvd i V2016 og V2017 — **begge før endringen**.

⚠ **Samtidig skal boka si at studenten ikke straffes for pensums etterslep.**
H2024 sier uttrykkelig at det må være greit at studentene forholder seg til loven
slik den var før endringen, fordi pensumlitteraturen er fra 2020. Dette er
karakter-realisme og hører i kap. 6.3 og i «det som ikke straffes»-listen i
kap. 0.3. **Men boka selv skal være oppdatert.**

**Pensumhistorikken forfatteren skal kjenne, men ikke gjengi ut over dette:**
Andenæs og Slettan/Øie fram til ca. 2012 (belegg: H2012-settet spør om et poeng
begge skriver om) · H2022: Andenæs «Innføring i rettsstudiet» 6. utg. 2002,
Frøberg 2020, Fredriksen «Norm, skyldkrav og straffetrussel» 2017 · H2023:
Andenæs ut, Mestad inn · H2024–H2025: Frøberg 2020 og Fredriksen 2021 er de
eneste bøkene veiledningene henviser til. ⚠ **Ingen sidetall, ingen
utgaveangivelser ut over dette, ingen pensumavgrensninger.** Leganto-listene er
ikke lest.

### 7.6 Tre §-plasseringer er UVERIFISERTE og skal kalibreres mot Lovdata FØR de skrives

Skjelettet merker disse tre med ⚠ fordi de er utledet av oppgavetekster og
veiledninger, ikke lest ut av lovteksten. **Ingen av dem skrives som gjeldende
rett før den er slått opp:**

| # | Påstand som må kalibreres | Hvor den skal brukes | Hva som er usikkert |
|---|---|---|---|
| 1 | **Rusfiksjonens leddplassering** — «den som er i selvforskyldt rus, bedømmes som om han var edru» | kap. 3.5 | Om regelen står i **strl. § 25 tredje ledd**, i **§ 20**, eller fordelt på begge, og hvordan de to bestemmelsene henger sammen etter endringen i 2019 |
| 2 | **Hovedregelen om forsett** — «forsett kreves med mindre annet er bestemt» | kap. 3.1 | Hvilken paragraf hovedregelen står i, og den nøyaktige ordlyden |
| 3 | **Virkningen av nødvergeoverskridelse** | kap. 5.2 | Om overskridelse gir straffritak, straffnedsettelse eller begge deler, og hvilken hjemmel og hvilket ledd som bærer virkningen — dette er nøyaktig krysningen mot tredelingen i kap. 5.1 |

**Prosedyre (ufravikelig):** slå opp bestemmelsen i Lovdata, skriv ned ledd og
ordlyd, og skriv deretter teksten. Er du usikker etter oppslaget, skriv regelen
uten leddangivelse og marker med den literale strengen `(verifiser)` — som løses
i fase 6 FØR `sjekk-bok.py` kjøres siste gang. **Å gjette et ledd er verre enn å
utelate det:** kap. 5.1 lærer leseren at kategorien velges ut fra *virkningen*,
så en gal virkningsangivelse i 5.2 river ned et helt kapittel lenger bak.

---

## 8. DOMSKANONEN — UTTØMMENDE, 20 AVGJØRELSER

### 8.1 Kanonen (den eneste lovlige kilden til domsnavn i boka)

Arkivet navngir **20 avgjørelser**, alle i sensorveiledningene H2022–H2025.
⚠ **Skjelettet sier «sytten» to steder; det er feil — se §20, sprik 1.**
Tallet er 20, telt ut av skjelettets egen tabell i §4.

| tema | avgjørelser | lovlig i kapitlene |
|---|---|---|
| Legalitetsprinsippets utvikling (de fem som ble gjennomgått på forelesning, H2022) | Rt. 1973 s. 433 (Passbåt) · Rt. 1995 s. 1734 (Elvebåt) · Rt. 2009 s. 780 (Derivat) · Rt. 2011 s. 469 · Rt. 2012 s. 1211 (Ekstrembloggerkjennelsen) | 1.3, 8.6 |
| Legalitet — nevnt som mulig problematisering (H2022) | HR-2017-2333-U · HR-2022-2089-U | 1.3, 8.6 |
| Forsøkets nedre grense (H2022, H2023) | **Rt. 2008 s. 867 avsnitt 20** (hovedavgjørelsen) · Rt. 1939 s. 890 · Rt. 1995 s. 17 | 4.1, 4-prove, 8.5, 8.7 |
| Tilbaketreden fra forsøk (H2022, H2023) | **HR-2019-47-A** · Rt. 1988 s. 18 | 4.2, 4-prove, 8.5 |
| Utjenlig forsøk (H2022) | Rt. 2010 s. 287 | 4.2, 4-prove |
| Mishandling i nære relasjoner (alle H2025) | Rt. 2013 s. 879 · Rt. 2010 s. 129 · Rt. 2012 s. 835 · Rt. 2013 s. 329 · HR-2017-667-A | 7.3, 7-prove |
| Forvaring av barn (H2024) | HR-2019-832-A · HR-2017-290-A | 6.3, 6-prove |

Kap. **0.2** har lov til å bruke **Rt. 2008 s. 867** og **HR-2019-47-A** som
eksempler på *domsnavnets form* (Norsk Retstidende med side og årgang, mot
Høyesteretts eget saksnummer fra 2016) — det er nettopp den bruken skjelettets
kap. 0.2 (d) forutsetter.

**Hver dom refereres med 1–2 setningers faktum ved første omtale i hvert
kapittel.** Et domsnavn uten faktum kan bare navngis, ikke brukes i
argumentasjon — og blir et angstflashkort.

⚠ **Alle 20 verifiseres mot Lovdata før de skrives:** riktig Rt.-årgang og
sidetall, riktig HR-nummer, og at faktumsetningen faktisk beskriver den
avgjørelsen.

### 8.2 FORBUDET — seks temaer der materialet navngir INGEN dom

For **medvirkning, uaktsomhet, nødverge, nødrett, rus og tilregnelighet** navngir
arkivet **ingen** avgjørelse. Det er nøyaktig luken en forfatteragent ville fylt:
temaene er tunge (medvirkning 18 av 34 terminer, uaktsomhet 15, tilregnelighet
14, rus 13, nødverge 8, nødrett 8), fremstillingen roper etter en dom, og en
plausibel Rt.-referanse er lett å konstruere.

**Bindende: forfatteren skal ikke finne på dommer for disse områdene.** Enten
verifiseres en dom mot Lovdata og føres inn i kanontabellen i §8.1 av
produkteier — eller så skrives fremstillingen **uten domsnavn**. En fremstilling
uten dom er fullt akseptabel her: 28 av 34 terminer er kortsvarssett der
kortsvarsmalen er hjemmel + formål + hovedformer + eksempel, og ingen av de seks
veiledningene krever dom på disse temaene.

Kapitlene dette rammer direkte: **3.3, 3.5, 3.6, 4.3, 4.4, 5.2, 5.3** — samt
**7.4**, der drap, narkotika, ran og seksuallovbrudd heller ikke har navngitt dom
i materialet.

⚠ **Ett tilsynelatende unntak som IKKE er et unntak:** skjelettets kap. 8.6 sier
at A-besvarelsen skal demonstrere det H2022 belønner — å bruke **en dom utover de
gjennomgåtte** og si noe om vekten av den. Det skal løses **innenfor kanonen**:
de fem gjennomgåtte er Rt. 1973 s. 433, Rt. 1995 s. 1734, Rt. 2009 s. 780,
Rt. 2011 s. 469 og Rt. 2012 s. 1211, mens **HR-2017-2333-U og HR-2022-2089-U er
nettopp de to materialet selv plasserer utenfor forelesningsutvalget**. Bruk en
av dem, og la A-besvarelsen si noe om vekten. **Alternativt** demonstrerer
besvarelsen *metoden* — hvordan leseren finner en avgjørelse selv i Lovdata og
hva hun skal si om vekten av den — uten å navngi en avgjørelse boka ikke har
verifisert.

### 8.3 PORT C — domskanonen (testet 3. august 2026)

Porten fanger både oppdiktede dommer og dommer brukt i feil kapittel. Kjørt mot
fikstur: den fanget en oppdiktet «Rt. 2001 s. 1671» i et medvirkningskapittel og
en kanon-dom brukt utenfor sitt hjemkapittel, og slapp gjennom de tre lovlige i
kap. 4.1.

```bash
python3 - <<'EOF'
# PORT C — JUROFF1500: domskanonen er uttømmende, og hjemlet per kapittel.
import glob, json, os, re, sys
KANON = {
    "Rt. 1973 s. 433":  {"1-3", "0-2", "8-6"}, "Rt. 1995 s. 1734": {"1-3", "8-6"},
    "Rt. 2009 s. 780":  {"1-3", "8-6"},        "Rt. 2011 s. 469":  {"1-3", "8-6"},
    "Rt. 2012 s. 1211": {"1-3", "8-6"},        "HR-2017-2333-U":   {"1-3", "8-6"},
    "HR-2022-2089-U":   {"1-3", "8-6"},
    "Rt. 2008 s. 867":  {"4-1", "0-2", "8-5", "8-7", "4-prove"},
    "Rt. 1939 s. 890":  {"4-1", "4-prove"},    "Rt. 1995 s. 17":   {"4-1", "4-prove"},
    "HR-2019-47-A":     {"4-2", "0-2", "8-5", "4-prove"},
    "Rt. 1988 s. 18":   {"4-2", "4-prove"},    "Rt. 2010 s. 287":  {"4-2", "4-prove"},
    "Rt. 2013 s. 879":  {"7-3", "7-prove"},    "Rt. 2010 s. 129":  {"7-3", "7-prove"},
    "Rt. 2012 s. 835":  {"7-3", "7-prove"},    "Rt. 2013 s. 329":  {"7-3", "7-prove"},
    "HR-2017-667-A":    {"7-3", "7-prove"},
    "HR-2019-832-A":    {"6-3", "6-prove"},    "HR-2017-290-A":    {"6-3", "6-prove"},
}
DOM = re.compile(r"Rt\.\s*\d{4}\s*s\.\s*\d+|HR-\d{4}-\d+-[A-ZÆØÅ]+")
def strenger(o):
    if isinstance(o, str): yield o
    elif isinstance(o, dict):
        for v in o.values(): yield from strenger(v)
    elif isinstance(o, list):
        for v in o: yield from strenger(v)
avvik, n = [], 0
for p in sorted(glob.glob("src/lib/data/chapters/juroff1500-*.json")):
    navn = os.path.basename(p)[:-5]; kap = navn[len("juroff1500-"):]
    for s in strenger(json.load(open(p, encoding="utf-8"))):
        for m in DOM.finditer(s):
            n += 1; d = re.sub(r"\s+", " ", m.group(0))
            if d not in KANON:
                avvik.append(f"{navn}: «{d}» står IKKE i domskanonen — oppdiktet eller uverifisert")
            elif kap not in KANON[d]:
                avvik.append(f"{navn}: «{d}» er hjemlet i {sorted(KANON[d])}, ikke her")
print(f"{n} domsreferanser | kanon: {len(KANON)} avgjørelser | avvik: {len(set(avvik))}")
for a in sorted(set(avvik)): print(" -", a)
sys.exit(1 if avvik else 0)
EOF
```

**Forarbeider.** ⚠ H2024 sier uttrykkelig at det **ikke kan forventes** at
studentene bruker forarbeider, fordi pensum nesten ikke henviser til dem. Boka
presenterer forarbeider som **plusspoeng, ikke krav**. De fire som er navngitt,
og de eneste som skal nevnes: **Ot.prp. nr. 90 (2003–2004) kap. 15.2** om
skyldevne (kap. 3.6) · **Prop. 135 L (2010–2011)** om ungdomsstraff (kap. 6.3) ·
**Ot.prp. nr. 113 (2004–2005)** og **Ot.prp. nr. 22 (2008–2009)** om
mishandlingsbestemmelsen (kap. 7.3).

---

## 9. LOVDATA-KALIBRERING (alle paragrafer verifiseres FØR de skrives)

### 9.1 Paragrafer med KJENT endringsrisiko — kontrolleres særskilt

| Bestemmelse | Hvorfor | Kapittel |
|---|---|---|
| **§ 20** skyldevne | endret ved lov 21. juni 2019 nr. 48 — verifiser ikrafttredelse og gjeldende ordlyd; 13 av de 14 terminene som tester temaet er skrevet før H2024 | 3.6 |
| **§ 24** (culpa levissimas erstatning) | paragrafnummeret er ikke verifisert — skriv det ikke før det er slått opp | 1.5, 3.3 |
| **§ 25** faktisk uvitenhet og rusfiksjonen | leddstrukturen er usikker (§7.6, punkt 1) | 3.4, 3.5 |
| **kap. 8a §§ 52a–52c** ungdomsstraff | endret ved lov 20. desember 2023 nr. 110, i kraft 1.9.2024 (§7.5) | 6.3 |
| **§§ 291 og 297** seksuallovbrudd | H2023-veiledningen bygger på ordlyden i 2023 og viser til NOU 2022: 21 om reform — sjekk om bestemmelsen er endret siden | 7.4 |
| **barnevernsloven 2021 § 6-2** | erstatter barnevernloven § 4-24; H2024-veiledningen nevner erstatningen | 6.3 |

### 9.2 Øvrige paragrafer som SKAL kontrolleres mot Lovdata

**§ 3** (virkeområde i tid) · **§ 14** · **§ 15** medvirkning · **§ 16** forsøk og
tilbaketreden · **§ 17** nødrett · **§ 18** nødverge · **§ 22** forsett med
bokstav c om dolus eventualis · **§ 23** uaktsomhet · **§ 26** rettsuvitenhet ·
**§§ 29–30** straffartene · **§ 48** samfunnsstraff · **§§ 62–63** tvungent
psykisk helsevern og tvungen omsorg · **§§ 33, 78 bokstav i, 79, 80**
utmålingsmomenter · **§§ 86–87** foreldelse · **§§ 271–273** med **§ 272** ·
**§ 275** og **§ 281** · **§ 282** · **§§ 321–322** · **§§ 327–328** · **§ 231** ·
**§§ 263–264** og **§ 266** (randsone) · **Grunnloven §§ 96 og 97** · **EMK
art. 7** (og art. 6 for uskyldspresumsjonen i kap. 1.3s randsone).

**Regelen:** en paragrafhenvisning som ikke er slått opp, skrives ikke. Er du
usikker etter oppslaget, marker med den literale strengen `(verifiser)`.
`sjekk-bok.py` flagger gjenstående `(verifiser)`-markører, og de skal være løst
før siste kjøring.

### 9.3 Lovdata-drillene (DNA-krav — 3–4 stykker spredt i boka)

De to første ligger i kap. **0.2**: «Åpne Lovdata og finn straffeloven § 16 annet
ledd. Stemmer bokas gjengivelse? Hvor lang tid tok det?» og «Finn strafferammen i
§ 321 og i § 322 — hva er forskjellen på tyveri og grovt tyveri?». Minst én til
legges i **kap. 7.1** (femtrinnsanalysen på gjeldende § 321) og én i **kap. 1.5**
(slå opp et gammelt paragrafnummer i dagens Lovdata og se at det ikke finnes —
det er feil #14 gjort synlig). Fasiten bekrefter teksten og normaliserer
ubehaget. **Eksamen ER Lovdata Pro i Inspera** — boka lar aldri leseren slippe å
navigere ekte lovtekst.

---

## 10. NIVÅFORBEHOLDET OG NYBEGYNNER-INNGANGEN (bindende)

**⚠ Nivåforbeholdet er den viktigste enkeltopplysningen i hele materialet**
(§0). Konsekvensene for byggingen:

- **Juridisk metode bygges fra null.** Kap. 0.2 forutsetter ingenting: hva «jf.»
  betyr, hvordan en paragraf er bygget, hva et domsnavn er, hva forarbeider er.
- **Hver insider-term forklares i klarspråk ved FØRSTE bruk per kapittel** —
  minst: praktikum, faktum, kumulative vilkår (alle må være oppfylt samtidig),
  subsumsjon, hjemmel, gjerningsbeskrivelse, rettsfaktum, Rt./HR/Ot.prp./NOU,
  årskodene V2024 og H2023 (vår og høst), prinsipalt og subsidiært, sensor,
  sensorveiledning.
- **Fagstoffet er allerede nybegynnervennlig — det er METAspråket som må
  ryddes.** Sjangerkodene KORT/ANA/PRAK/TEO/SYST, feilkodene #1–#16 og all
  karaktersjargong («C-stoff», «A-markør», «C-terskelen») skrives ut i klarspråk
  ved første bruk per kapittel. **Ingen kald kode i `competenceGoals` eller i
  kapitlets aller første tekstboks.**
- **Hverdagsanker før apparatet.** Skjelettet gir dem der de er viktigst
  (kap. 1.1 åpner med to husordensregler som sier noe ulikt om samme forhold).
  Legg tilsvarende ankere i 1.3 (hvorfor må det stå i loven på forhånd?), 3.1
  (hva betyr det å ta feil av noe?) og 5.1 (er handlingen lovlig, eller er den
  straffbar men ustraffet?).
- **Ingen policyanbefalinger i bokas egen stemme.** Emnet er fullt av
  rettspolitikk — bør uaktsomhet være straffbart, bør alvorlige lovbrudd kunne
  foreldes, bør det å se på uten å gripe inn være straffbart. Boka fremstiller
  **posisjonene med sitt beste argument** og lar modellbesvarelsen lande. Det er
  besvarelsens landing, ikke bokas. Det er også faglig riktig: fakultetets skjema
  har «blikk for rettspolitiske dimensjoner» som kriterium på hvert nivå.
- ⚠ **Den rettspolitiske løftesetningen er et verktøy med bremser.** H2020
  straffer å skrive seg bort fra oppgaven, særlig når det går på bekostning av
  tiden til de andre spørsmålene, og H2024 kaller det «lite skjønnsomt» å bruke
  plass på det som ikke er etterspurt. Boka lærer begge deler: å legge inn
  perspektivet der det løfter, og å la være der det stjeler tid.

---

## 11. MODELLBESVARELSER (ærlighet, nivå og variasjon)

### 11.1 Ærlig merking — ufravikelig

- Hver modellbesvarelse innledes med én linje: **«Nyskrevet modellbesvarelse —
  skrevet av oss for denne boka. JUROFF1500-arkivet har seks sensorveiledninger
  som beskriver hva sensor forventer, men ingen publiserte besvarelser og ingen
  fasit. Dette er derfor ikke en ekte kandidatbesvarelse.»**
- En boks som heter «C-besvarelse» skal **VÆRE en C** — tittel, tekst og
  margnotater skal stemme. En polert A merket som C er en byggefeil. Samme for
  E-versjonen i kap. 8.1: den skal faktisk mangle det den sier den mangler.
- Ordet «studentbesvarelse» er forbudt i bokinnholdet (grep-sjekkes, §14.5).
- **Oppgavene er nyskrevne, også når de ligner.** Alle parter, tall, steder og
  hendelser er nye (§17).

### 11.2 Meta-fasit er FORBUDT

«En A-besvarelse ville her ha drøftet …» er en regibemerkning, ikke en fasit.
**Drøftelsen skal skrives UT** — kort, skarp, forankret, med landing.
Grep-sjekkes: `en A-besvarelse ville|ville ha drøftet|det kan argumenteres begge
veier` = 0 treff.

Margnotater er lov og ønsket, men de skal **peke på tekst som faktisk står der**:
`> Margnotat: her brukes de tre momentene fra Rt. 2008 s. 867 på faktum i stedet for å ramses opp — det er dette grepet H2023-veiledningen beskriver.`

### 11.3 Nivåfordeling og profilvariasjon (bindende)

| Kapittel | Nivåer som SKAL finnes | Profil |
|---|---|---|
| 8.1 | samme korte kortsvarsspørsmål på **E-, C- og A-nivå** | E: definisjonen gjengitt, ingen hjemmel, intet eksempel · C: korrekt med hjemmel, men uten eget eksempel og uten formål · A: alle fire trinn pluss en løftesetning som problematiserer |
| 8.2 | fasiter viser **både** en sammenhengende og en punktvis besvarelse på systematiseringsoppgavene, med margnotat om at **begge godtas** (H2024) | — |
| 8.4 | momentliste (må / pluss / feller) på hver oppgave | — |
| **8.5** (praktikum) | A + kommentert C + **bestått-på-marginen** | **A-en lander SKARPT** (se 11.4) |
| **8.6** (teori + kortsvarsbatteri) | A + kommentert C | A-en viser **gjenbruksregelen** i arbeid og bruker en dom utover de fem gjennomgåtte, jf. §8.2 |
| **8.7** (generalprøven) | A + **bestått-på-marginen** | prioriteringsfasiten er kapitlets kjerne: hvert punkt merket **må / pluss / felle** med tidsbudsjett som summerer til fire timer inkludert 20 minutter disposisjon |

**Bestått-på-marginen-besvarelsene** (8.5 og 8.7) viser terskelen **nedenfra**,
med margnotater om hva som så vidt holder. Sensorblikket angir «minimum for en
beståttkarakter på denne oppgaven», utledet av må-punktene. Leseren trenger et
realistisk sammenligningspunkt, ikke bare polert A og karikatur-C.

### 11.4 Konklusjonsvariasjon (bindende)

- **Kap. 8.5 skal konkludere SKARPT:** A-besvarelsen tar klart standpunkt på
  forsøkets nedre grense og på tilbaketredenens frivillighet, med begrunnelsen
  utskrevet — og er likevel toppnivå. Margnotat: «Forbehold er et verktøy, ikke
  obligatorisk garnityr. En skarp, begrunnet konklusjon er en fullgod A-form.»
- **Grensetilfelle-trening (DNA-krav):** minst ett faktum i kap. 8.3 med
  vippe-momenter der **to fullt utskrevne, motsatte men begrunnede landinger**
  vises, med forklaring på hvorfor begge når opp. Dette er den direkte
  anvendelsen av at konklusjonen ikke er avgjørende. Tilsvarende vippetilfeller
  er bestilt i prøvene til del 1, 2, 5, 6 og 7 — der skriver fasiten ut begge
  lesningene.
- Ikke alle modellbesvarelser skal lande på samme kompromissform.

---

## 12. Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»; SKAL i førsteutkastet)

- **Kun eksamensrelevant stoff.** «Bør kjenne til»-stoffet (uskyldspresumsjonen,
  deliktstypologien, rettsreglenes fragmentariske karakter, foretaksstraff,
  trusler og hensynsløs atferd) plasseres SIST i sitt kapittel og merkes
  eksplisitt med sin lave frekvens.
- **HARDT LINJEBRUTT PROSA ER FORBUDT (rendrings-kritisk).** Rendreren gjør HVERT
  enkelt `\n` om til `<br />`. Regelen: **ett avsnitt = én lang linje i
  JSON-strengen**, `\n\n` mellom avsnitt, og enkelt `\n` KUN der linjeskiftet
  faktisk er ønsket (deloppgaver, listelinjer, tabellrader, margnotater,
  flervalgsalternativer). Gjelder `content`, `problem`, `solution`, `task` og
  `hints`.
- **Godt, flytende norsk bokmål (UFRAVIKELIG).** Hele setninger, korte avsnitt
  (2–4 setninger), aktiv «du»-form. Telegramstil er FORBUDT — «Vilkår 1:
  ulovlig angrep. Vilkår 2: rettet mot angriperen.» skrives «Det første vilkåret
  er at det foreligger et ulovlig angrep, og det andre at forsvarshandlingen er
  rettet mot angriperen». Konkret norsk knagg før fagtermen. Latinske uttrykk
  (dolus eventualis, culpa levissima, de lege lata) får norsk forklaring først,
  termen i parentes ved første bruk per kapittel.
- **Hver oppgave synlig eksamensforankret** med sjangerens navn i ledende
  parentes:
  `(Eksamenssjanger kortsvar — KORT; slike oppgaver ber om hjemmel, formål, hovedformer og ett eget eksempel, og gis 30–50 minutter.)`
  Sjangerkoden skrives fullt ut ved første bruk per kapittel. Vanskelighetsgraden
  skrives ALDRI inn i `task` (den ligger i `difficulty`).
- **Deloppgaver merkes a), b), c) — ALDRI (i), (ii), (iii).** Ufravikelig
  produkteierregel. Hver deloppgave starter på **egen linje med merket i fet**:
  `…\n\n**a)** …\n**b)** …`. ALDRI a) b) c) bak hverandre i løpende tekst, aldri
  A)/[A]. Ikke bruk `subTasks`. **Retter du dette, må oppgave OG fasit rettes i
  samme operasjon** — ellers peker fasiten på etiketter som ikke finnes. Eneste
  unntak: ja/nei- og riktig/galt-lister av SELVSTENDIGE påstander i
  prøvekapitler (§5.6).
- **Inline-nummerering** `(1) … (2) … (3) …` med tre eller flere påfølgende settes
  på egne linjer. Gjelder særlig de fire straffbarhetsvilkårene, de tre momentene
  fra Rt. 2008 s. 867, de fire nødvergevilkårene, de tre medvirkningsformene, de
  tre forsettsformene og femtrinnsmetoden — de skal uansett stå som egne linjer,
  i rekkefølge.
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. 3.2](/juroff1500/juroff1500-3-2)`. Død «se kapittel
  X.Y»-tekst er FORBUDT. Aldri lenker i `title`-felt.
- **Karakter-realisme:** Del 0 sier eksplisitt at **C er en god og vanlig
  karakter**. Formuleringen **«Prioritet: perfekt» er FORBUDT** — skriv «høyeste
  prioritet». Prioritetsklassene oversettes: *perfekt* → **høyeste prioritet**,
  *kunne* → **kunne**, *kjenne* → **bør kjenne til**. «Gapet til A» rammes inn
  som **oppgraderingsmeny**, ikke mangelliste. A-språket er lovlig her (emnet har
  A–F), i motsetning til i JUS1111.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter HVER prøvefasit og etter hver
  fasit i modellbesvarelsene — bruk rubrikkene i §6.4. I hvert temakapittel:
  minst én **lett innstegsoppgave** tidlig (`difficulty: "lett"`, ren gjengivelse
  med egne ord) før første fulle eksamenssjanger.
- **Verdens-caser, ikke metaeksempler.** Faktum handler om isfiske, verandaer,
  butikkbakdører, trappeoppganger og lagerinnbrudd — ALDRI «en medstudent skriver
  …».
- **Difficulty-spredning + kald bank:** boka skal ha genuint krevende oppgaver
  merket `difficulty: "vanskelig"` (minst én per temadel), ikke alt på middels.
  Én merket **kald bank** i kap. 8.4 (§5.4).
- **Hint på alle oppgaver:** hvert `exercise` har utfylte `hints`. **Første hint
  er riktig hjemmel eller første grep** («Start i strl. § 16 første ledd — hvilket
  av de tre vilkårene er det tvil om her?»), andre hint er første moment —
  **ALDRI konklusjonen**. Eneste unntak er den kalde banken.
- **Signal-/hintbokser ETTER oppgaven:** en boks som varsler hva en drilloppgave
  tester («her ligger villfarelsesfella») plasseres ETTER oppgaven eller som
  collapsible hint, aldri foran. Gjelder særlig identifikasjonsdrillen i kap. 8.3
  — drillen skal teste radaren, ikke oppslaget.
- **Stokket flervalg og varierte fasit-mønstre:** statiske flervalg i
  prøve-`collapsible`-er har stokkede fasit-bokstaver (ALDRI «alle a»), og
  prøve-tipen sier hvor flervalget bor. Gjelder ALLE ensartede fasitlister, også
  riktig/galt-listene og «hvilken feil begår kandidaten»-drillen i 8.4 — aldri
  «alle felle», aldri samme fasit to ganger på rad. Verifiseres med
  `sjekk-fasitfordeling.py`.
- **Distraktorer straffer aldri grundig lesing:** en distraktor gjengir ALDRI
  bokas egen presisering som «galt» svar. Ligger en distraktor nær sannheten
  (typisk: «dolus eventualis er at gjerningspersonen så følgen som mulig»,
  «nødrett krever et ulovlig angrep», «foreldelse er en straffrihetsgrunn»), skal
  `explanation` forklare eksplisitt hvorfor den ikke holder.
- **Begrepsbank = oppslagsverk:** hver stor begrepsbank åpner med
  standardnotisen: «Begrepsbanken er flashcard- og repetisjonsstoff — den gjentar
  det du nettopp har lest. Hopp trygt over ved førstegangslesing; tidsanslaget
  for kapitlet gjelder kjernestoffet.» `definition`-blokker slettes ALDRI for å
  «rydde» — de er flashcard-kilden.
- **Øktmerking:** alle kapitler med `estimatedMinutes > 45` — altså 0.2, 0.3,
  1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 4.1, 4.2, 4.3,
  4.4, 5.2, 6.2, 6.3, 6.4, 7.1, 7.2, 7.4, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7 — har
  tidsanslag i underoverskriften («## Dolus eventualis (~15 min)») eller
  eksplisitte «— naturlig pausepunkt —»-markører. Lange modellbesvarelser har
  pausepunkt mellom hovedseksjonene. ⚠ Overskriften bærer NAVNET, aldri
  løkkenummeret (§1).

### 12.1 Del 0-pakken (alt dette SKAL finnes, i kap. 0.1 der ikke annet er sagt)

- **«Slik leser du denne boka»-orienteringsboks** i kap. **0.3** (type `text`
  eller `tip` — **ALDRI `definition`**, det ville endret flashcard-kvoten) med:
  karakterskalaen A–F og hva C, B og A faktisk krever, at **C er en god og vanlig
  karakter**, hva «C-stoff» og «A-markør» betyr, de fem sjangrene skrevet fullt
  ut med kodene i parentes, og at typiske feil har et samlet register (#1–#16)
  med eget kapittel (8.4).
- **«Lite tid?»-boks** (`tip`): hurtigrute for 3–5 dager (prioriter del 1, 3 og 4
  — de tre tunge søylene — pluss kap. 0.2, 0.3 og 8.4) og ukeplan bygget av
  summerte `estimatedMinutes`. **Summen av de 40 kapitlene er eksakt 2 290
  minutter ≈ 38 timer lesetid** (verifisert mot skjelettet); prøvekapitlene
  kommer i tillegg med 7 × 120 = 840 minutter.
- **Deltidsrute 10–12 uker** med temadelprøvene fordelt underveis og
  modellbesvarelsene + generalprøven (kap. 8.7) de siste to ukene — aldri stablet
  i siste uke.
- **«Lese mye, skrive lite»-boks:** legitim rute for lese-øveren (les oppgaven →
  formuler problemstilling og disposisjon mentalt i to setninger → les
  modellbesvarelsen som sensor) + minimumsrådet: skriv minst ÉN full lovanalyse
  og ÉTT fullt praktikum på tid.
- **Kildenote for frekvens-empirien** — ordlyden i §6.1.1, aldri utvidet.
- **Temafrekvenstabellen** som leserens prioriteringskart, med nevneren og
  enheten skrevet ut: forsøk 21 · medvirkning 18 · legalitetsprinsippet 16 ·
  uaktsomhet 15 · tilregnelighet 14 · rus 13 · forsett 13 · straffer og
  reaksjoner 12 · vold 11 · unnlatelse 11 · reelle hensyn 10 · tyveri 9 ·
  straffrihetssystematikken 9 · nødrett 8 · rettskildefaktorer 8 · nødverge 8 ·
  rettsvillfarelse 7 · faktisk villfarelse 7. Samlekategorier: juridisk metode
  **31** · skyldlæren **30** · spesiell strafferett **27** · straffrihetsgrunner
  **24** · forsøkskomplekset **21** · reaksjonslæren **19**. **Alle med nevner 34
  terminer.**
- **Gjenbrukstabellen** — de fem tydeligste gjentakelsene, med setningen om at
  trening på gamle sett derfor er direkte eksamensrelevant: passivitetsspørsmålet
  i **8 terminer** · reelle hensyn i **alle sine 10** · tyverianalysen i **6
  terminer som 1902 § 257 og 2 som § 321** · rettsvillfarelsesspørsmålet i **6** ·
  vold-/legemsfornærmelsesspørsmålet i **5**. H2013 og H2016 deler fire av åtte
  spørsmål ordrett.
- **Sjangerkortet på ÉN side** som ER kortet: sjanger → én linjes oppskrift →
  typisk plassering og tidsbudsjett → vanligste feil. Ikke en lenkeliste.
- **Bokas samlede hjemmelskart** (DNA-jus-krav) — én printbar `collapsible`:
  lov → paragraf → én linjes innhold → kapittellenke, bygget fra kapitlenes egne
  registre. Dette er studieguidens viktigste enkeltside.
- **Eksamensformens tre regimer** og H2026-omleggingen, med den eksplisitte
  setningen om at oppgavestrukturen i den nye formen **ikke er kjent**.
- **⚠ 1902-advarselen** (§7) — leseren skal forstå den **før** hun åpner et gammelt
  sett.

---

## 13. Kvotekontrakt (AUTORITATIV — bindende total, aldri overstyr)

Verifisert mot skjelettets kvotesammendrag 3. august 2026 ved å summere
kapittelavsnittenes egne «Kvote:»-linjer: **alle ni deltotaler og alle tre
totaler stemmer eksakt.**

| Del | Kapitler | Quiz | Flashcards | Minutter | Prøver |
|---|---|---|---|---|---|
| 0 | 0.1–0.3 | 44 | 36 | 155 | 0 |
| 1 | 1.1–1.5 | 114 | 114 | 280 | 4 |
| 2 | 2.1–2.3 | 62 | 58 | 165 | 4 |
| 3 | 3.1–3.6 | 138 | 136 | 355 | 4 |
| 4 | 4.1–4.4 | 92 | 88 | 250 | 4 |
| 5 | 5.1–5.4 | 80 | 80 | 205 | 4 |
| 6 | 6.1–6.4 | 80 | 82 | 225 | 4 |
| 7 | 7.1–7.4 | 82 | 84 | 225 | 4 |
| 8 | 8.1–8.7 | 82 | 58 | 430 | 0 |
| **Sum** | **40 kap.** | **774 ✓ (≥500)** | **736 ✓ (≥500)** | **2 290** | **28** |

Per kapittel (quiz · flashcards · minutter) — **minimum, aldri under;
overskyting er lov**:

| Kap. | Q · F · min | Kap. | Q · F · min | Kap. | Q · F · min |
|---|---|---|---|---|---|
| 0.1 | 14 · 10 · 45 | 3.2 | 26 · 26 · 65 | 6.1 | 14 · 12 · 45 |
| 0.2 | 14 · 14 · 50 | 3.3 | 24 · 24 · 60 | 6.2 | 24 · 26 · 65 |
| 0.3 | 16 · 12 · 60 | 3.4 | 24 · 24 · 60 | 6.3 | 22 · 22 · 60 |
| 1.1 | 24 · 26 · 55 | 3.5 | 20 · 18 · 55 | 6.4 | 20 · 22 · 55 |
| 1.2 | 22 · 22 · 55 | 3.6 | 24 · 24 · 60 | 7.1 | 22 · 24 · 60 |
| 1.3 | 28 · 26 · 65 | 4.1 | 26 · 26 · 65 | 7.2 | 22 · 22 · 60 |
| 1.4 | 18 · 16 · 50 | 4.2 | 24 · 24 · 65 | 7.3 | 18 · 18 · 50 |
| 1.5 | 22 · 24 · 55 | 4.3 | 26 · 26 · 65 | 7.4 | 20 · 20 · 55 |
| 2.1 | 22 · 22 · 60 | 4.4 | 16 · 12 · 55 | 8.1 | 14 · 10 · 55 |
| 2.2 | 24 · 22 · 60 | 5.1 | 20 · 20 · 50 | 8.2 | 12 · 8 · 50 |
| 2.3 | 16 · 14 · 45 | 5.2 | 22 · 22 · 55 | 8.3 | 14 · 10 · 60 |
| 3.1 | 20 · 20 · 55 | 5.3 | 20 · 20 · 50 | 8.4 | 18 · 12 · 55 |
| | | 5.4 | 18 · 18 · 50 | 8.5–8.7 | 8 · 6 · (65/55/90) |

**Bindende total: quiz 774 · flashcards 736 · 2 290 minutter.** Flashcards telles
som **toppnivå `definition`-blokker med `title`**. Prøvekapitler har ingen kvote
(ingen quiz, ingen begrepsbank). **Utgåtte institutter genererer null flashcards
og null quiz på innholdet** (§7.4).

### 13.1 Quiz-filformat

`src/lib/data/quiz-staging/juroff1500-<del>-<nr>.quiz.json`:

```json
[{ "question": "…", "options": ["riktig", "distraktor", "distraktor", "distraktor"], "explanation": "…" }]
```

Nøyaktig **4 alternativer**, `options[0]` **ALLTID** riktig. **Runtime stokker
rekkefølgen**, så `explanation` skal ALDRI si «alternativ to», «det tredje
alternativet», «svaret over» eller «det siste alternativet» — gjenta innholdet i
stedet: «Riktig svar er at dolus eventualis krever både at følgen ble sett som
mulig og at den positivt ble innvilget …». **Posisjonsreferanser er en hard
produkteierregel** (verifiseres med `sjekk-alternativref.py`). Ingen duplikate
alternativer. `explanation` på 2–4 setninger sier hvorfor fasiten er riktig OG
hvilken felle hver nære distraktor tester.

**LENGDE-TELL (hard produkteierregel):** fasiten skal **verken være det lengste
eller det korteste** alternativet systematisk. Alle fire alternativer skal ha
jevn lengde og presisjonsgrad — en leser som «velger det lengste» skal treffe
~25 %, ikke 77 %.

⚠ **Dette MÅLES, og førsteutkast lander erfaringsmessig på 60–80 %.** Grunnen er
strukturell: fasiten i et jusfag er den presise regelen, og presisjon koster ord,
mens en distraktor er lett å skrive kort. **Rettemåten er å FORLENGE
DISTRAKTORENE**, ikke å trimme fasiten til den blir upresis — en distraktor skal
være en fullverdig, plausibel regelformulering som er gal på ett punkt.

```bash
node scripts/hoyskolebok/quiz-lengdesjekk.mjs juroff1500   # flagger over 35 %
```

**Distraktor-kalibrering** — nabobegrep-distraktorer, aldri tullesvar:
rettsvillfarelse mot faktisk villfarelse · nødverge mot nødrett · straffrihet mot
straffritak mot straffbortfall · dolus eventualis mot bevisst uaktsomhet ·
forberedelse mot forsøk · fullendt mot ufullendt forsøk · kroppskrenkelse mot
kroppsskade · § 275 mot § 281 · ideal- mot realkonkurrens · ekte mot uekte
unnlatelsesdelikt · **1902-paragraf mot gjeldende paragraf**. I tillegg «hvilken
feil begår denne kandidaten»-spørsmål og «hvilken hjemmel gjelder»-koblinger.

### 13.2 Flashcard-profil

Hovedvekten ligger på **vilkårslister** og **paragraf ↔ regelinnhold**-koblinger,
fordi det er nøyaktig presisjonen kortsvaret og lovanalysen måler. Fire
korttyper:

1. **Vilkårskort** — hvert vilkår i en vilkårsstige som eget kort: § 16 forsøk,
   § 18 nødverge, § 17 nødrett, § 15 medvirkning, de fire straffbarhetsvilkårene,
   de tre vilkårene for det uekte unnlatelsesdeliktet.
2. **Hjemmelskort** — paragraf → én linjes innhold.
3. **Sondringskort** — begrepspar med forskjellen som svar: straffrihet/
   straffritak/straffbortfall · ekte/uekte unnlatelse · ideal-/realkonkurrens ·
   faktisk/rettslig villfarelse · nødverge/nødrett · forsett/uaktsomhet ·
   kroppskrenkelse/kroppsskade.
4. **Domskort** — dom → kallenavn → hva den brukes til, med kort faktum. **Kun de
   20 i §8.1.**

---

## 14. Fagspesifikk stil (ufravikelig for JUROFF1500)

### 14.1 Notasjonsstandard

- **Norsk bokmål. Ingen matematisk notasjon, ingen `$…$` noe sted.** Boka er
  symbolfri; `collapsible`-en til slutt er en **begreps- og hjemmelsliste**, ikke
  en formelliste (§5.2).
- **Dollartegn som ikke er matte MÅ escapes som `\\$`.** Et enkelt bart `$` i en
  streng kutter resten av teksten til rå LaTeX-kilde for leseren. Oddetall `$` i
  samme tekstfelt felles av `sjekk-latex.py`.
- **Lovhenvisning:** `strl. § 16 annet ledd`. Ledd skrives med ord ved første
  bruk i et kapittel og kan deretter forkortes `§ 16 (2)` — begge former
  forklares i kap. 0.2. Mellomrom etter paragraftegnet. Andre lover får alltid
  prefiks (`bvl.`, `strpl.`, `Grl.`, `EMK art. 7`). **1902-paragrafer følger
  notasjonsregelen i §7.2.**
- **Domsnavn:** `Rt. 2008 s. 867` (til og med 2015) og `HR-2019-47-A` (fra 2016),
  med avsnittsnummer der det er relevant («Rt. 2008 s. 867 avsnitt 20»).
- **Tallformat:** norsk desimalkomma, prosent med mellomrom («10–17 %»). Terminer
  skrives «H2024» og «V2016» (aldri «h24», aldri «høsten -24»).
- **Verktitler** skrives med «anførselstegn» i `title`-felter og i kursiv i
  brødtekst. **Aldri sidetall, aldri utgaveangivelser ut over §7.5.**
- **Skrivemåter (grep-konsistens):** «straffbarhetsvilkår» · «gjerningsbeskrivelse»
  · «handlingsdelikt» / «følgedelikt» / «unnlatelsesdelikt» · «ekte» / «uekte
  unnlatelsesdelikt» · «handleplikt» · «rettsstridsreservasjon» ·
  «legalitetsprinsippet» · «klarhetskravet» · «utvidende» / «innskrenkende» /
  «analogisk tolkning» · «rettskildefaktor» · «reelle hensyn» · «prejudikat» ·
  «dekningsprinsippet» · «hensiktsforsett» / «sannsynlighetsforsett» / «dolus
  eventualis» · «positiv innvilgelse» · «simpel» / «grov uaktsomhet» · «faktisk
  uvitenhet» / «rettsuvitenhet» · «selvforskyldt rus» / «uforskyldt rus» ·
  «fiksjonsregelen» · «skyldevne» · «fullbyrdelsesforsett» · «forsøkets nedre
  grense» / «øvre grense» · «utjenlig forsøk» · «tilbaketreden» · «ufullendt» /
  «fullendt forsøk» · «fysisk» / «psykisk» / «passiv medvirkning» ·
  «selvstendig straffansvar» · «straffrihetsgrunn» / «straffritaksgrunn» /
  «straffbortfallsgrunn» · «nødverge» / «nødrett» · «interesseavveining» ·
  «provokasjon» / «retorsjon» · «samtykke» · «allmennprevensjon» /
  «individualprevensjon» · «forvaring» · «ungdomsstraff» / «ungdomsoppfølging» ·
  «tvungent psykisk helsevern» / «tvungen omsorg» · «samfunnsstraff» ·
  «strafferamme» / «straffutmåling» · «idealkonkurrens» / «realkonkurrens» ·
  «foreldelse» · «kroppskrenkelse» / «kroppsskade» · «mishandling i nære
  relasjoner» · «subsumsjon» · «prinsipalt» / «subsidiært».

### 14.2 Sjangerkodene (introduseres i kap. 0.1 og 0.3, skrives fullt ut ved første bruk per kapittel)

| Kode | Navn som skal brukes | Hva det er |
|---|---|---|
| **KORT** | kortsvarsspørsmålet | «Hva er X?», «Forklar kort», «Angi kort». Dominerende i 28 av 34 terminer, 30–50 min per spørsmål. Undervariant: sammenlikningsspørsmålet |
| **ANA** | lovanalyseoppgaven | «Analyser straffeloven § …». Ingen faktum — bestemmelsen brytes ned i vilkår etter femtrinnsmetoden |
| **PRAK** | praktikumsoppgaven | Faktum med navngitte parter. Signaturoppgaven fra H2020. Riktig konklusjon kreves ikke |
| **TEO** | teorioppgaven | Bredere og mer sammenhengende enn kortsvaret, med innledning, problemstilling og sammenfatning |
| **SYST** | systematiseringsoppgaven | Flere underspørsmål som skal settes i sammenheng. Opptrer én gang (H2024), men ligger nærmest den formen H2026 kan gi |

### 14.3 Feilkodene #1–#16 (glosses ved første bruk PER KAPITTEL)

| # | Feil | Hovedhjem |
|---|---|---|
| #1 | gjengi pensum i stedet for å svare | 0.3, 2.2 |
| #2 | blande rettsvillfarelse og faktisk villfarelse | 3.4 |
| #3 | blande nødverge og nødrett | 5.2, 5.3 |
| #4 | blande straffrihetsgrunn, straffritaksgrunn og straffbortfallsgrunn | 5.1, 5.4 |
| #5 | stoppe ved den ytre klassifiseringen i praktikum | 2.1, 8.3 |
| #6 | behandle dolus eventualis som ren mulighetsforståelse | 3.2 |
| #7 | tro at utjenlig forsøk er straffritt | 4.2 |
| #8 | forveksle tilbaketreden med anger i ettertid | 4.2 |
| #9 | behandle forsøkets nedre grense som et tidspunkt i stedet for en sammensatt vurdering | 4.1 |
| #10 | redegjøre for det som er felles når oppgaven ber om det som er særegent | 6.3, 8.2 |
| #11 | tro at «vold» rommer de psykiske elementene | 7.2, 7.3 |
| #12 | tro at gjentatt kritikkverdig atferd uten videre er mishandling | 7.3 |
| #13 | legge vekt på at fornærmede har opprettholdt kontakten | 7.3 |
| #14 | bruke feil straffelov | 1.5, 7.1 |
| #15 | oppgi kilder man ikke har | 0.2, 1.1 |
| #16 | svare på færre spørsmål enn settet krever | 0.1, 8.1 |

**Registeret har nøyaktig seksten koder.** Ikke innfør en syttende noe sted. Hele
registeret gjennomgås i kap. 8.4, og hver feil er hjemlet i minst én navngitt
kilde — med ærlighetsforbeholdet fra §6.1 punkt 5.

### 14.4 Prioritetsklasser

**høyeste prioritet** (skjelettets «perfekt» — 0.1, 0.2, 0.3, 1.1, 1.2, 1.3, 1.5,
2.1 som ramme, 2.2, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 4.1, 4.2, 4.3, 4.4, 5.1, 5.2,
5.3, 7.1, 7.2, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7) · **kunne** (1.4, 2.1 som eget
kortsvar, 2.3, 5.4, 6.1, 6.2, 6.3, 6.4, 7.3, 7.4) · **bør kjenne til**
(randsone-halene: uskyldspresumsjonen i 1.3, rettsreglenes fragmentariske
karakter i 1.1, deliktstypologien i 2.1, foretaksstraff i 6.2, trusler og
hensynsløs atferd i 7.4). **Skriv ALDRI «Prioritet: perfekt».**

### 14.5 Forbudt-termer og prosaregler (grep-sjekkes)

**Hard port** — `sjekk-bok.py`-regexen skal gi **0 treff** (kjøres
case-insensitivt; skriptet unntar automatisk kap. 0.1, som skal beskrive
kildesituasjonen):

```
Prioritet: perfekt|Sist du var her|som du sikkert husker|du har jo allerede sett|dette kan du fra før|en A-besvarelse ville|en toppbesvarelse ville|ville ha drøftet|det kan argumenteres begge veier|studentbesvarelse|offisiell fasit|offisielle fasiter|offisiell løsning|offisielle løsninger|offisielle løsningsforslag|løsningsforslag fra UiO|UiOs løsningsforslag|fasit fra UiO|UiOs fasit|arkivets fasit|sensorveiledningenes fasit|eksamensfasit|autentiske eksamensoppgaver|hentet fra eksamenssettet|gjengitt fra sensorveiledningen|35 termin|alle terminer 2005|alle terminer fra 2005|samtlige terminer siden|av 42 sett|av 42 oppgavesett\b|av 48 filer|34 sensorveiledninger|V20(0[5-9]|1[0-9])-veiledningen|H20(0[5-9]|1[0-9])-veiledningen|\bs\. ?\d+ i (Frøberg|Fredriksen|Andenæs|Mestad)
```

```bash
python3 scripts/hoyskolebok/sjekk-bok.py juroff1500 "<regexen over>"
```

Begrunnelse per gruppe:

- `Prioritet: perfekt` er plattformforbud (karakter-realisme, §12).
- Deiksis-uttrykkene peker feil vei — Forkunnskaper-blokka oppsummerer et ANNET
  kapittel (§5.1).
- Meta-fasit-uttrykkene er forbudt fordi drøftelsen skal skrives ut (§11.2).
- «studentbesvarelse» er usant — alle modellbesvarelser er nyskrevne (§11.1).
- Fasit- og løsningspåstandene er usanne: arkivet har **null** løsningsforslag
  (§6.1 punkt 1).
- **`V2005-veiledningen` … `H2019-veiledningen` omtaler dokumenter som ikke
  finnes** (§6.1 punkt 4). Dette er den mest sannsynlige enkeltfeilen i denne
  boka, fordi alle disse terminene står i temalistene og frister til å bli omtalt
  som om de hadde veiledning. **Sensorveiledning finnes bare for H2020–H2025.**
- `35 termin`, `av 42 sett`, `av 48 filer` og `34 sensorveiledninger` er ulovlige
  nevnere (§6.1 punkt 2, 6 og 8).
- Sidetallsmønsteret fanger pensumhenvisninger som ikke er attestert (§7.5).

**Strenge prosaregler.** ⚠ **`sjekk-prosaregel.py` har en kapittelvid fallback**
(treffer unntaksregexen ÉN gang i kapitlet, slipper alle treff gjennom). Den er
riktig for regler der rammen etableres én gang i åpningsblokka, men **for lav for
denne bokas tallregler**. Bruk derfor den strenge varianten under — den er testet
3. august 2026 og fanget nøyaktig de tre planlagte bruddene i en fikstur, mens
korrekt rammet prosa slapp gjennom:

Lagre den som en midlertidig fil (den tar to argumenter, så heredoc-formen med
`"$@"` virker ikke), eller lim den inn med argumentene rett etter `-`:

```bash
python3 - '\bav 34\b' 'av 34 terminer|av 34 eksamensterminer' <<'EOF'
# STRENG PROSAREGEL — per treff, ingen kapittelvid fallback.
# Argumentene står etter «python3 -»: sys.argv[1] = treff, sys.argv[2] = unntak.
import glob, json, os, re, sys
V = 200
def strenger(o, sti=""):
    if isinstance(o, str): yield sti, o
    elif isinstance(o, dict):
        for k, v in o.items(): yield from strenger(v, f"{sti}.{k}")
    elif isinstance(o, list):
        for i, v in enumerate(o): yield from strenger(v, f"{sti}[{i}]")
treff = re.compile(sys.argv[1], re.I); unntak = re.compile(sys.argv[2], re.I)
avvik, n = [], 0
for p in sorted(glob.glob("src/lib/data/chapters/juroff1500-*.json")):
    for sti, s in strenger(json.load(open(p, encoding="utf-8"))):
        for m in treff.finditer(s):
            n += 1
            if not unntak.search(s[max(0, m.start()-V): m.start()+V]):
                avvik.append(f"{os.path.basename(p)}{sti}: «{m.group(0)}» → …{s[max(0,m.start()-90):m.start()+90]}…")
print(f"{n} treff på /{sys.argv[1]}/ | avvik: {len(avvik)}")
for a in avvik[:30]: print(" -", a)
sys.exit(1 if avvik else 0)
EOF
```

Kjør den med disse fire argumentparene, og forvent **null avvik** i alle fire:

| # | treff-regex | unntak-regex | hva den fanger |
|---|---|---|---|
| 1 | `\bav 34\b` | `av 34 terminer\|av 34 eksamensterminer` | brøk uten enhet (§6.3) |
| 2 | `\bav \d+ (sett\|oppgavesett\|eksamenssett\|terminer\|eksamensterminer\|sensorveiledninger\|veiledninger)` | `av 34 terminer\|av 34 eksamensterminer\|av 32 terminer\|av 28 terminer\|av 6 terminer\|av 6 sensorveiledninger\|av 42 oppgavesett-filer` | ulovlig nevner |
| 3 | `løsningsforslag\|modellbesvarelse fra eksamen\|ekte kandidatbesvarelse\|\bfasit fra\b` | `ingen\|null\|finnes ikke\|inneholder ikke\|har ikke\|aldri\|ikke er\|nyskrev\|skrevet av oss` | fasit-/løsningspåstand om arkivet |
| 4 | `V2015\|H2015` | `ikke i arkivet\|uio\.no\|publisert av UiO\|ikke i emnemappa` | manglende «(ikke i arkivet)»-merking (§6.1 punkt 3) |

I tillegg gjelder **PORT A** (§7.3), **PORT B** (§7.4) og **PORT C** (§8.3).

---

## 15. Kryssbok-lenker (verifisert 3. august 2026 — alle målfilene finnes i `src/lib/data/chapters/` OG er registrert i kursmetadataen)

Bruk NØYAKTIG disse titlene og stiene:

| Kapittel | Lenke | Innramming |
|---|---|---|
| 0.2 | `[Lovdata Pro og rettskildebruk under eksamen](/jus1111/jus1111-0-3)` | «annet emne, men samme hjelpemiddelsituasjon — Lovdata Pro i eksamensmodus. Kravene der er JUS1111s egne» |
| 8.3 | `[Praktikumsmetoden — fra anførsler til disposisjon](/jus1111/jus1111-0-2)` | «samme metode i et annet jusemne. JUS1111 subsumerer privatrettslige krav; her er rammen straffbarhetsvilkårene» |
| 6.1 | `[Mill — utilitarismen og dens forsvar](/exphil03/exphil03-3-3)` | RANDSONE — «beslektet etikkemne, ikke pensum i JUROFF1500. Nyttebetraktningene der er slektninger av prevensjonshensynene her» |
| 6.1 | `[Kant — den gode vilje, plikt og det kategoriske imperativ](/exphil03/exphil03-3-2)` | RANDSONE — samme innramming; gjengjeldelses- og rettferdighetshensynene har sin filosofiske slektning der |

**Ingen andre kryssbok-lenker.** Vil du legge til en lenke som ikke står i
tabellen, kjør `ls src/lib/data/chapters/<id>.json` **og** grep etter id-en i
`src/lib/data/textbook-courses*.ts` først — `sjekk-bok.py` avviser døde lenker,
og en død lenke i en live bok er en synlig feil for leseren.

**⚠ Eksplisitt FORBUDTE lenkemål (skjelett finnes, men ingen kapittelfiler på
disk per 3. august 2026):** `jfexfac04`, `krim1501`, `jus1211`, `jus2111`,
`jus4213`. `krim1501` og `jus4213` er særlig fristende naboer fordi de har
overlapp med emnet — **ikke lenk dit.**

Interne lenker skrives som `[kap. 3.2](/juroff1500/juroff1500-3-2)` og skal kun
peke på kapitler som allerede er bygget når boka gates. Bygg i skjelettets
rekkefølge (§9 i skjelettet): Del 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → prøver.
Merk at **0.2 og 0.3 må stå ferdig FØR alt annet**, **1.2 FØR 2.1**, **2.1 FØR
del 3, 5 og 7**, **3.2 FØR 4.1**, **2.2 og 4.3 FØR 4.4**, **1.4 FØR 6.1**, og
**hele del 1–7 FØR del 8**.

---

## 16. Tekniske feller (les før første `json.dump`)

1. **JSON-gyldighet.** Bruk `json.dump`. Faget er fullt av anførselstegn — én
   uescapet anførsel blokkerer hele plattformens prebuild.
2. **Hardt linjebrutt prosa er FORBUDT.** Rendreren gjør hvert enkelt `\n` om til
   `<br />`. Ett avsnitt = én lang linje; `\n\n` mellom avsnitt; enkelt `\n` kun
   der linjeskiftet er ønsket. Gjelder `content`, `problem`, `solution`, `task`
   og `hints`. Ikke bruk trippelfnutt-strenger med innrykk eller `textwrap` på
   brødtekst.
3. **Bart `$` er forbudt** — skriv `\\$`. Boka har ingen LaTeX i det hele tatt
   (§14.1).
4. **`chapterNumber` alltid del-basert** («4.1»), aldri lineær («18»).
   Prøvekapitler: «4.P».
5. **`difficulty` er `lett` | `middels` | `vanskelig`** — aldri `medium`/`hard`
   (§4).
6. **Ingen tom `collapsible`.** Feltet heter `content` og skal inneholde blokker.
7. **Unike blokk-id-er** innen kapitlet.
8. **Flashcards kommer KUN fra toppnivå `definition` med `title`.** Flytter du en
   definisjon inn i en `collapsible` for å «rydde», forsvinner kortet fra kvoten.
9. **`(verifiser)`-markører** skrives i den literale formen `(verifiser)` (§9) og
   løses i fase 6 FØR `sjekk-bok.py` kjøres siste gang.
10. **Ingen `subTasks`, `answer`, `solutionVideo`, `allowsUpload`,
    `allowsCanvasDrawing`** i `exercise`.
11. **Quiz-forklaringer refererer aldri til alternativets plassering** — runtime
    stokker (§13.1).
12. **Ikke bruk `grep -o` med `.{0,N}`-kontekst** mot kapittelfilene: de er
    kompakt JSON på én linje, og mønsteret er kvadratisk (17 GB RAM på
    byggemaskinen 25. juli 2026). Bruk portene i §7.3, §7.4, §8.3 og §14.5, som
    leser JSON-strukturen.
13. **Ikke skriv «Løkke N» i overskrifter eller prosa** (§1).
14. **Ingen markdown i `description`/`title`/`competenceGoals`** (§3.1) — feltet
    havner rått i Google-treffet.
15. **⚠ `sjekk-prosaregel.py`s kapittelvide fallback** gjør den ubrukelig som
    1902-port og som nevnerport (§7.3, §14.5). Bruk de strenge variantene.

---

## 17. Opphavsrett (ufravikelig)

ALLE oppgaver, faktum, parter, tall, bestemmelser, «modellbesvarelser»,
flervalgsspørsmål og eksempler er **NYSKREVNE** — eksamenssjangrene er malen,
ALDRI originaloppgavene. Ingen formuleringer fra UiO-settene eller fra de seks
sensorveiledningene gjengis ordrett, heller ikke i omskrevet-nær form.

⚠ **Gjengangerformuleringene er den største fristelsen i denne boka.**
Passivitetsspørsmålet er stilt ordrett i 8 terminer, tyverianalysen i 6,
rettsvillfarelsesspørsmålet i 6, reelle hensyn i 10. **De gjengis ikke som
oppgavetekst.** Boka kan si hva spørsmålet handler om og hvor ofte det kommer, og
skal så gi leseren en **nyskrevet** oppgave i samme sjanger.

**Analyseobjektene gjengis aldri som oppgavetekst.** De faktiske bestemmelsene
arkivets oppgaver analyserer (1902 §§ 50, 162, 228, 233, 257; strl. §§ 271, 321,
328) **skal ikke gjengis som oppgavetekst**. Analysene i boka gjøres på
**gjeldende lovtekst som leseren selv slår opp i Lovdata**, og øvingsoppgavene
bruker **nyskrevne** bestemmelser (skjelettet bestiller dem eksplisitt i kap.
1.2, 1.3, 2.1, 2.3, 7.1, 7.4 og i prøvene til del 1, 2 og 7).

Pensumlitteraturen **refereres og parafraseres** — aldri siteres i lengde, aldri
med sidetall, og aldri med utgaveangivelser ut over det §7.5 attesterer. De
etablerte begrepene er faglig allmenneie og forklares under sine egne navn.

**Domsomtale:** kun de 20 i §8.1, hver med 1–2 setningers faktum ved første
omtale, alle verifisert mot Lovdata. **Ingen oppdiktede referanser, verk,
forskere, årstall eller tall.**

Boka fremstiller seg ALDRI som offisiell, godkjent eller UiO-tilknyttet, og lover
ALDRI et eksamensutfall. (Uavhengighetsdeklarasjonen vises automatisk av
plattformen for `level: 'Høyskole'` — se README «Juridiske deklarasjoner».)

---

## 18. BOKCONFIG og wiring (fase 5)

`BOKCONFIG.json` ligger ferdig i denne mappa:

```json
{
  "title": "JUROFF1500 Strafferett — juridisk innføring for ikke-jurister",
  "description": "Eksamensrettet lærebok for JUROFF1500 Strafferett ved UiO — kalibrert mot 34 eksamensterminer fra 2005 til 2025: legalitetsprinsippet i strafferetten, forsøkslæren, medvirkningsansvaret, skyldlæren og straffrihetsgrunnene",
  "icon": "📕",
  "institusjon": "uio",
  "prøvedeler": [1, 2, 3, 4, 5, 6, 7],
  "sectionNames": { "0": "…", "8": "Eksamenstrening" }
}
```

`icon` er **📕** og ikke ⚖️, fordi ⚖️ allerede er i bruk av to andre bøker i
kursregisteret — institusjonsgridet på `/trinn/hoyere` blir uleselig når to
jusbøker deler ikon.

### 18.1 `description` — HARDT FORMATKRAV, verifisert programmatisk

Kursforsiden parser feltet og splitter det i en ingress, en «Bygget på …»-boks og
emne-chips. Parseren i `src/app/[courseId]/page.tsx`:

```js
description.match(/^(.*?)\s*—\s*kalibrert mot\s+([^:]+?)\s*(?::\s*(.+?))?\.?$/)
// topics: m[3].split(/,\s*|\s+og\s+/)
```

Kjørt mot beskrivelsen over gir den:

| ledd | verdi | krav |
|---|---|---|
| ingress | «Eksamensrettet lærebok for JUROFF1500 Strafferett ved UiO» (57 tegn) | ≤ ~90 ✓ |
| kalibrering | «34 eksamensterminer fra 2005 til 2025» | kort, uten «bygget på»-ord ✓ |
| temaer | legalitetsprinsippet i strafferetten · forsøkslæren · medvirkningsansvaret · skyldlæren · straffrihetsgrunnene | 5 stk, 1–3 ord hver ✓ |
| samlet lengde | 221 tegn | < 250 ✓ |
| forbudte tegn inne i leddene | ingen `;`, `:` eller `—` | ✓ |

⚠ **Temalista splittes på BÅDE komma og « og ».** Et tema som selv inneholder
«og» sprekker i to meningsløse chips. Derfor er årstallene skrevet «fra 2005 til
2025» og ikke med bindestrek, og derfor inneholder ingen av de fem temaleddene
ordet «og». **Skjelettets §1 foreslår «det strafferettslige
legalitetsprinsippet» som første tema — den formen er lovlig, men chipen begynner
med artikkelen «det».** Kontrakten bruker «legalitetsprinsippet i strafferetten»,
som gir samme innhold og en bedre chip. Testen:

```bash
python3 - <<'EOF'
import json, re
d = json.load(open("docs/hoyskole-boker/juroff1500/BOKCONFIG.json", encoding="utf-8"))["description"]
m = re.match(r"^(.*?)\s*—\s*kalibrert mot\s+([^:]+?)\s*(?::\s*(.+?))?\.?$", d)
assert m, "MATCHER IKKE parseren — hele beskrivelsen ville falt ut som én grå tekstblokk"
topics = [t.strip() for t in re.split(r",\s*|\s+og\s+", m.group(3))]
print("len:", len(d), "| ingress:", len(m.group(1)), "| kalibrering:", m.group(2))
print("temaer:", topics)
assert len(d) < 250 and len(m.group(1)) <= 90 and 3 <= len(topics) <= 6
assert not [c for c in d.replace(" — ", "", 1).replace(": ", "", 1) if c in ";—:"]
print("OK")
EOF
```

Kjørt 3. august 2026: **OK** (len 221, ingress 57, fem temaer, ingen ulovlige
tegn).

### 18.2 `title` — ET TEKNISK KRAV, ikke pynt ⚠

`wire-bok.py` skriver `cfg['title']` både til kursmetadataen og til
`src/app/trinn/hoyere/institusjoner.ts`, og kursets `title` er det
`HoyskoleDisclaimer` bruker for å avgjøre om den fagspesifikke jus-linja vises:

```js
function erJus(courseId, title) {
  return /^jus/i.test(courseId) || /\brett(s\w*)?\b|juridisk/i.test(title);
}
```

**`juroff1500` starter ikke på «jus», og «Strafferett» treffer heller ikke.**
`\brett` krever ordgrense, og i «Strafferett» står «rett» rett etter en «e».
Testet:

| tittel | `erJus('juroff1500', …)` |
|---|---|
| «JUROFF1500 Strafferett — juridisk innføring for ikke-jurister» | **True** ← valgt |
| «JUROFF1500 Strafferett» | **False** |
| «JUROFF1500 Strafferett for ikke-jurister» | **False** |
| «JUROFF1500 Strafferett, strafferettslig innføring» | **False** |

Tittelen treffer altså **utelukkende på ordet «juridisk»**. Uten det faller
setningen «Innholdet er læringsstoff, ikke juridisk rådgivning — sjekk Lovdata
for gjeldende rett» bort — på en bok der lovtekstanalyse er signaturoppgaven og
leseren skal ha Lovdata Pro åpen på eksamen.

⚠ **ADVARSEL TIL ENHVER SOM SENERE VIL KORTE NED TITTELEN:** forbeholdet
forsvinner **stille**. Ingen port fanger det, ingen build feiler, ingen test blir
rød — jus-linja slutter bare å rendre. Endres tittelen, MÅ denne kjøres på nytt:

```bash
python3 - <<'EOF'
import json, re
t = json.load(open("docs/hoyskole-boker/juroff1500/BOKCONFIG.json", encoding="utf-8"))["title"]
erJus = lambda cid, x: bool(re.search(r"^jus", cid, re.I) or re.search(r"\brett(s\w*)?\b|juridisk", x, re.I))
print(t, "→ erJus:", erJus("juroff1500", t))
assert erJus("juroff1500", t), "TITTELEN MISTER LOVDATA-FORBEHOLDET"
EOF
```

### 18.3 Wiring-sjekkliste (fase 5)

1. `python3 scripts/hoyskolebok/wire-bok.py juroff1500` — parser 40 kapitler fra
   skjelettet og genererer 7 prøvekapitler. Alle 47 filene må finnes først.
2. **Skriv om prøvekapitlenes auto-tekst** etter tabellen i §2.2 — ordet
   «løsningsforslag» skal ut.
3. **Legg til oppføring i `src/lib/data/kildegrunnlag.ts`** med tallene fra §6.1:
   34 eksamensterminer 2005–2025 · 42 oppgavesett-filer som dekker 32 terminer ·
   6 sensorveiledninger som dekker 6 terminer (kun H2020–H2025) · **0
   løsningsforslag og 0 fasiter**. `forbehold`-lista skal inneholde: V2015 og
   H2015 finnes ikke i arkivet, men er lest fra uio.no · H2007 og V2010 finnes
   ikke hos UiO heller, og det er ikke belegg for hvorfor · 28 av 34 terminer har
   ingen sensorveiledning · alle seks veiledningene er skrevet før besvarelsene
   er lest · eksamensdatoene i praktikumsregimet er ikke kjent · ingen
   strykprosent eller karakterstatistikk finnes · 20 av 34 terminer er skrevet
   til straffeloven 1902 · eksamensformen legges om fra H2026, og ingen sett i
   den formen finnes ennå.
4. `institusjoner.ts` patches automatisk under `slug: 'uio'` med tittel og ikon
   fra `BOKCONFIG.json`. **Verifiser at jus-linja i `hoyskole-disclaimer.tsx`
   vises** (§18.2).
5. Verifiser narrativ-ruter (hvis narrativer bygges) med prod-server og curl —
   200, ikke bare at filene finnes.

---

## 19. Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json; json.load(open('…'))"` på HVER fil du har skrevet.
2. **Kvotetelling** mot tabellen i §13 (toppnivå `definition`-blokker med `title`
   + antall quiz-spørsmål) — minimum, aldri under. Total 774 quiz / 736
   flashcards / 2 290 minutter.
3. **PORT A (1902-notasjonen, §7.3) = 0 avvik.** Dette er bokas viktigste port.
4. **PORT B (utgåtte institutter, §7.4) = 0 avvik**, og null flashcards og null
   quiz om instituttenes innhold.
5. **PORT C (domskanonen, §8.3) = 0 avvik.** Ingen dom utenfor de 20; ingen dom i
   kapitlene 3.3, 3.5, 3.6, 4.3, 4.4, 5.2, 5.3 og 7.4.
6. **Forbudt-termer-grep = 0** (regexen i §14.5), og alle fire strenge
   prosaregler grønne.
7. **Kildepåstander:** hver «N av M» finnes i §6.2, bruker en lovlig nevner (§6.3)
   OG skriver ut enheten; ingen påstand om fasit eller løsningsforslag fra UiO;
   ingen påstand som hviler på en sensorveiledning før H2020; tallet 42 står bare
   som filtall i kildenoten; V2015 og H2015 er merket «(ikke i arkivet)» i alle
   17 kapitlene i §6.2.
8. **Lovdata-kalibrering (§9):** alle paragrafhenvisninger er slått opp; de tre
   uverifiserte plasseringene i §7.6 er avklart eller merket `(verifiser)`;
   kap. 6.3 er skrevet mot lovteksten etter 1.9.2024, ikke mot Frøberg 2020.
9. **Kryssbok- og internlenker** peker på eksisterende, registrerte filer (§15);
   ingen lenker til de forbudte målene.
10. **Læringsløkke:** `content[]` veksler teori → eksempel → oppgave i løkker med
    `exercise`-blokker INLINE. Unntak: prøve-, sjanger- og
    modellbesvarelseskapitler. Byggespråk-grepet fra §1 gir null treff.
11. **Forkunnskapsdekning:** gå gjennom HVER `exercise` og bekreft at den kun
    hviler på stoff introdusert tidligere i kapitlet eller i en referert
    forkunnskap — ingen usett hjemmel, vilkår eller skyldform.
12. **Oppfrisket forkunnskap:** kapitlene i tabellen i §5.1 har 2–3
    kjernepåstander VIST, ikke bare lenket; **grep for «Sist du var her» = 0**, og
    ingen overskrift heter «Forkunnskaper — sist du var her».
13. **Registre + oppgaveantall:** HVERT temakapittel (del 1–7) har `collapsible`
    «Paragraf- og domsregister», en avsluttende begreps- og hjemmelsliste og
    **4–8 `exercise`-blokker inline**. Tell dem.
14. **`difficulty`** er `lett`/`middels`/`vanskelig` i alle `exercise` — grep for
    `"difficulty": "medium"` og `"difficulty": "hard"` gir null. Minst én
    `vanskelig` per temadel.
15. **Nybegynner-inngang:** alle sjangerkoder (KORT/ANA/PRAK/TEO/SYST), feilkoder
    (#1–#16) og karakterbokstaver forklart ved første bruk PER KAPITTEL; ingen
    kald kode i `competenceGoals` eller i første tekstboks; Del 0 har «Slik leser
    du denne boka»-boksen (type `text`/`tip`, ALDRI `definition`), Del 0-pakken
    (§12.1) og lovhenvisningsboksen i kap. 0.2.
16. **Eksamenskontrakten:** hver `example.solution`, hver `exercise.solution` og
    hver prøvefasit viser den strukturen sjangeren krever (§6.5), og
    praktikum-/drøftingsfasiter har må-punkter / pluss-punkter / feller. En
    PRAK-fasit uten subsumsjon på faktums konkrete momenter er en byggefeil (#5).
17. **Karakter-realisme:** «C er en god og vanlig karakter» står eksplisitt i
    Del 0; grep «Prioritet: perfekt» = 0; C-besvarelsene **er** C-er; kap. 8.5
    lander skarpt; det finnes bestått-på-marginen-besvarelser i 8.5 og 8.7;
    meta-fasit-grep = 0.
18. **Prøvekapitler:** nøyaktig **fire** prøver i hvert av de sju (hardt
    plattformkrav, §2.2); fasitmønsteret varierer (aldri «alle a», aldri «alle
    felle»); prøve-tipen sier hvor flervalget bor; selvdiagnose (☐) etter hver
    fasit; ja/nei-lister av selvstendige påstander bruker romertall (§5.6), og
    alle ekte deloppgaver bruker a), b), c).
19. **hints** utfylt på alle `exercise` unntatt den merkede kalde banken i 8.4;
    første hint røper aldri konklusjonen.
20. **Quiz:** `options[0]` alltid riktig; nøyaktig 4 alternativer; ingen
    posisjonsreferanser i `explanation`; **LENGDE-TELL under 35 %** — og husk at
    rettemåten er å forlenge distraktorene (§13.1).
21. **Øktmerking:** alle kapitler > 45 min har tidsanslag i underoverskriftene
    eller pausepunkter; prøvekapitlene deklarerer «4 prøver à ~30–45 min» +
    deling over flere kvelder.
22. **Opphavsrett (§17):** ingen av arkivets bestemmelser gjengitt som
    oppgavetekst; ingen gjengangerformulering gjengitt ordrett; ingen
    domskanon-utvidelse.
23. **Ingen tom `collapsible`**; ingen duplikate blokk-id-er; kap-referanser i
    fasiter og forkunnskaper er markdown-lenker; ingen hardt linjebrutt prosa;
    ingen markdown i `description`/`title`/`competenceGoals`.
24. **Juridiske deklarasjoner:** innholdet fremstiller seg ALDRI som offisielt
    eller UiO-tilknyttet, lover aldri eksamensutfall, og jus-linja er verifisert
    (§18.2).
25. **Porter grønne før ferdigmelding:**

```bash
python3 scripts/hoyskolebok/status-bok.py juroff1500
python3 scripts/hoyskolebok/sjekk-skjelett.py juroff1500
python3 scripts/hoyskolebok/sjekk-latex.py juroff1500
python3 scripts/hoyskolebok/sjekk-fasitfordeling.py juroff1500
python3 scripts/hoyskolebok/sjekk-alternativref.py juroff1500
python3 scripts/hoyskolebok/sjekk-statiskflervalg.py juroff1500
python3 scripts/hoyskolebok/sjekk-bok.py juroff1500 "<forbudt-regex fra §14.5>"
# PORT A (§7.3), PORT B (§7.4), PORT C (§8.3) og de fire strenge prosareglene (§14.5)
node scripts/hoyskolebok/quiz-lengdesjekk.mjs juroff1500
npm run build
```

---

## 20. SPRIK MOT SKJELETTET — dokumentert her så ingen «retter» dem tilbake

Skjelettets Talldisiplin-seksjon og alle 40 kapitlers frekvenspåstander er
etterregnet mot terminlistene sine 3. august 2026. **40 av 40 frekvenspåstander
med liste stemmer eksakt** — dette skjelettet har ikke inter1000-defekten. Fire
avledede tall gjør det likevel ikke:

**1. Domskanonen: «sytten» → 20 avgjørelser.** Skjelettets §8 punkt 7 og
verifikasjonslista sier begge «sytten avgjørelser». Telt ut av skjelettets egen
tabell i §4: legalitetsprinsippet 5 + problematiseringene 2 + forsøkets nedre
grense 3 + tilbaketreden 2 + utjenlig forsøk 1 + mishandling 5 + forvaring av
barn 2 = **20**. Ingen lesning gir 17: uten de to problematiseringene blir det
18. Boka skriver: *«Arkivet navngir tjue avgjørelser, og listen i kap. 8.1 er
uttømmende.»* Dette er ikke en detalj — tallet står i studieguidens domskanon-side
og i verifikasjonslista, og en agent som teller 17 og finner 20 vil «rydde» tre
lovlige dommer bort.

**2. V2015/H2015-merkingen: 9 → 17 kapitler.** Skjelettets verifikasjonsliste
sier «Sjekk særlig kapitlene 1.3, 3.3, 3.5, 3.6, 4.1, 5.2, 5.3, 6.2 og 6.4» — ni
kapitler. Telt i skjelettets egne belegg-blokker: merkingen «(ikke i arkivet)»
forekommer **22 ganger i 17 kapitler** — de ni over pluss **0.1, 0.3, 1.1, 1.5,
2.1, 3.1, 3.2 og 8.7**. Ordet «særlig» gjør skjelettets liste formelt riktig,
men en agent som bruker den som sjekkliste vil slippe åtte kapitler gjennom.
Bindende liste står i §6.2.

**3. ANA-terminene i kap. 1.2: «elleve» → 13 av 34 terminer.** Skjelettets
kap. 1.2 sier at lovanalyseoppgaven er «prøvd med navngitt bestemmelse i elleve
terminer». Telt fra analysens §4.2, som lister analyseobjektene: 1902 § 50
(H2008) · 1902 § 228 tredje ledd (H2008, H2010) · 1902 § 233 (H2008) · 1902 § 257
(H2005, H2006, V2007, V2009, H2010, V2013) · 1902 § 162 (V2011) · strl. § 271
annet ledd (V2018) · strl. § 321 (V2016, H2017) · strl. § 328 (H2018, V2019).
Unionen er **13 terminer**: H2005, H2006, V2007, H2008, V2009, H2010, V2011,
V2013, V2016, H2017, H2018, V2018, V2019. Tallet 11 har ingen liste bak seg.
⚠ To andre tellinger av samme materiale gir 8 (antall bestemmelser brukt som
analyseobjekt) og 16 (bestemmelse × termin) — **ingen av dem er 11 heller**, så
ikke rekonstruer tallet. Boka skriver: *«En navngitt bestemmelse er gitt som
analyseobjekt i 13 av 34 terminer.»*

**4. Passivitetsspørsmålet i kap. 4.4: «ordrett i 8 terminer» → 7 + 1.** Kap. 2.2
er presis: formuleringen er stilt **ordrett i 7 terminer** og **med ett ord lagt
til i V2011** — til sammen 8 av 34 terminer. Kap. 4.4 komprimerer dette til
«ordrett i 8 terminer», som er en tanke for sterkt. Begge kapitler skal bruke
2.2s form.

**5. BOKCONFIG-beskrivelsen er justert, ikke rettet.** Skjelettets §1 foreslår
ingressen «Eksamensrettet lærebok for JUROFF1500 ved UiO» og temaet «det
strafferettslige legalitetsprinsippet». Begge er lovlige og består parsertesten.
Kontrakten bruker «… for JUROFF1500 Strafferett ved UiO» (emnenavnet er
søkeord) og «legalitetsprinsippet i strafferetten» (chipen bør ikke begynne med
en artikkel). Begge versjoner er testet mot parseren; den valgte står i §18.1.

⚠ **Rangeringen og kapittelfordelingen er uendret** av alle fem punktene, så
skjelettets §3-rasjonale står: skyldlæren (30 av 34 terminer) og
forsøk/medvirkning (21 og 18) får 10 av 30 temakapitler, metode og
legalitetsprinsipp 5, straffrihetsgrunnene 4, reaksjonslæren 4, spesiell
strafferett 4, ansvarsrammen 3, og utgåtte institutter **null**.
