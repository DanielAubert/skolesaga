# Byggekontrakt: EXFAC03-SPR Examen facultatum, språkvitenskap (UiO) — teknisk kontrakt for kapittelforfattere

Gjelder ALLE forfatter-agenter som bygger kapitler til `exfac03-spr`. Faglig
innhold styres av `SKJELETT.md` (Talldisiplin-seksjonen + identitetsseksjonen
§1–§2 + per-kapittel-kontraktene i §3) — les ditt kapittels avsnitt ORDRETT, og
`EKSAMENSANALYSE.md` ved behov. Denne kontrakten definerer format, notasjon,
sjangerkrav, kildepåstander, tall og kvalitetsporter.

**Ved faglig konflikt vinner SKJELETT.md. Ved format-, notasjons-, sjanger-,
tall- eller kildepåstandskonflikt vinner denne kontrakten.** Instansiert fra
`../BYGGEKONTRAKT-MAL.md`.

⚠ **Fem av skjelettets bindinger er etterprøvd teknisk og justert.** Den
viktigste: skjelettets antakelse om at `sjekk-latex.py` fanger LaTeX-innpakket
IPA er **feil** — porten er beviselig blind for den (§7.2), og boka trenger sin
egen. De øvrige fire står i §19 med utregningen, så ingen «retter» dem tilbake.
**§6.2 er den eneste lovlige kilden til «N av M»-påstander, og §14 den eneste
lovlige kilden til kryssbok-lenker.**

**Emnets navn.** Emnet heter **EXFAC03-SPR Examen facultatum, språkvitenskap**
og undervises ved Det humanistiske fakultet, Universitetet i Oslo. Emnekoden
`EXFAC03-SPR` skrives alltid ut — den er bokas viktigste søkeord. Emnet er en
bred innføring i allmenn språkvitenskap som dekker ni saksområder.
⚠ **Studiepoeng, semesterplassering og adgangskrav står ikke i ett eneste av de
sju dokumentene i arkivet.** De omtales derfor ikke i boka i det hele tatt
(§6.1, punkt 5).

**Leseren har aldri sett et IPA-tegn.** Kap. 1.1 er bokas første fagkapittel og
skal kunne leses av en som ikke vet hva en plosiv er. Samtidig er emnet
notasjonstungt fra første side. Hele §7 finnes fordi den kombinasjonen —
nybegynner + tett symbolbruk — er der bøker av denne typen ryker.

**Arketype: formell-hybrid.** Strukturfagene (Del 1–5) etter `../DNA-regnefag.md`,
redegjørelsesfagene (Del 6–9) etter `../DNA-drofting.md`. Begrunnelsen står i
skjelettets §1.1 og gjentas her fordi den styrer hva som skal bygges:
transkripsjon, artikulatorisk beskrivelse, fonemanalyse, morfsegmentering og
trebygging er **prosedyrer med etterprøvbart svar og trekk per feil**, mens
semantikk, pragmatikk, typologi og språkendring måles på **presis begrepsbruk og
begrunnelse framfor konklusjon**. **Del 3 er hybriden** og bokas viktigste
enkeltkonstruksjon: regnefag i formen, drøftingsfag i kriteriet (§8).

**Nærmeste bygde søskenbøker:** `ling1100` (samme fagfelt, samme institutt —
men se §9, som er et forbud like mye som en tillatelse), `svexfac03` og
`jfexfac04`-familien (samme emnetype: obligatorisk innføringsemne et helt kull
tar). Kopier arbeidsmåte og formkrav derfra — **aldri faglig innhold**.

**Fem forskjeller fra søskenbøkene som endrer byggingen:**

1. **Boka er formelfri, men ikke symbolfri.** Ingen `$…$` noe sted — og
   samtidig tettere symbolbruk enn noen annen bok i katalogen. Det er ikke en
   selvmotsigelse: IPA er Unicode-tekst, ikke matematikk. **Hele §7 handler om
   den forskjellen, og §7.2 dokumenterer at plattformens LaTeX-port ikke fanger
   den.**
2. **Grunnlaget er tynt: seks terminer over femten år.** Ingen vårtermin, ni
   høsttermin-hull. Boka skal si det høyt i kap. 0.1 og aldri antyde bredere
   dekning (§6.1).
3. **Ett saksområde har ingen entydig fasit.** Transkripsjonsoppgaven vurderes
   på **intern konsistens med kandidatens egen oppgitte bakgrunn**, ikke på
   likhet med et fasitsvar. Det finnes ikke i noe annet emne i katalogen, og
   hele §8 er bygget rundt det.
4. **Karakterskalaen skiftet, og vi vet ikke når.** H2022 var bestått/ikke
   bestått, H2025 er A–F, og de to terminene mellom mangler. All
   karaktersjargong rammes inn av dette (§6.4).
5. **Feilregisteret er sensors forventninger, ikke observerte feil.** Ikke ett
   sted i de fire veiledningene rapporterer en sensor hva kandidatene faktisk
   gjorde galt. Ærlighetsforbeholdet er ufravikelig (§6.1, punkt 6).

---

## 1. LÆRINGSLØKKE-KONTRAKT (ufravikelig byggekrav — produkteier 9. juli 2026)

Fra skjelettets topp, tatt inn her som bindende byggekrav:

- HVERT kapittels `content[]` struktureres som gjentatte SMÅ løkker
  **Teori → Eksempel → Oppgave**, én løkke per prosedyre eller begrep:
  1. regelen, prosedyren eller begrepet (`definition` med `title`, `theorem` for
     prosedyrer som skal stå som én enhet, `text` som tar trinnene ett for ett), →
  2. `example` som viser prosedyren GJENNOMFØRT — hele løsningen skrevet ut,
     aldri «slik gjør du det» uten at det blir gjort, →
  3. `exercise` INLINE i `content[]` rett etter eksempelet (plattformen renderer
     inline oppgaver), →
  4. neste prosedyre.
- **ALDRI** all teori øverst med oppgavene samlet nederst, og aldri hele
  symbolinventaret i én bolk fulgt av alle eksemplene. Grupper til meningsfulle
  biter — ikke én oppgave per symbol.
- **Ingen usett forkunnskap:** ingen oppgave får kreve et symbol, en akse, en
  prosedyre, en term eller en sjangerregel som ikke er introdusert tidligere i
  SAMME kapittel (t.o.m. eksempelet rett foran) eller i et tidligere kapittel
  referert i Forkunnskaper-blokka. Særlig utsatt her:
  **ingen oppgave i Del 3 får kreve distribusjonsanalysen** uten at kap. 2.2 står
  i forkunnskapene · **ingen oppgave i Del 5 får kreve frasebegrepet** uten
  kap. 5.1 · **ingen oppgave i Del 9 får kreve allofonibegrepet** uten kap. 2.2 ·
  **ingen oppgave noe sted får kreve et IPA-tegn som ikke står i kapitlets egen
  symbol- og termliste eller i en referert forkunnskap.**
- **Unntak:** prøvekapitlene, sjangerkapitlene (10.1–10.8) og
  modellbesvarelseskapitlet (10.9) følger sin egen arketype — komplett
  oppgave/sett først, løsning i `collapsible`.
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer
  REKKEFØLGEN.

⚠ **Underoverskrifter er ALDRI byggespråk.** «Løkke», «Bolk», «Blokk», «Runde»,
«Sekvens», «Modul», «Iterasjon» er byggeplanens ord, ikke leserens. Overskriften
skal si hva avsnittet handler om, pluss tidsanslaget:

```
✗ ## Løkke 3 — Retroflekser (~15 min)
✓ ## Retroflekser (~15 min)
```

Vis til tidligere avsnitt ved NAVN, aldri ved nummer («da vi satte trykk og
bitrykk», ikke «i løkke 2»). «Løkke» er ikke et fagord i lingvistikk, så **all**
bruk er byggespråk. Fire former har sluppet gjennom tidligere ryddinger — tall i
overskrift, liten forbokstav i prosa, bokstav i stedet for tall, og
tabellkolonnen `| Løkke |`. Kjør denne før ferdigmelding og forvent null treff:

```bash
grep -rnE '#{2,4}[[:space:]]*Løkke|[Ll]økke[[:space:]]+[0-9A-ZÆØÅ]|\| Løkke \|' \
  src/lib/data/chapters/exfac03-spr-*.json
```

---

## 2. Filplassering og filantall

Ett JSON-dokument per kapittel:
`src/lib/data/chapters/exfac03-spr-<del>-<nr>.json` (prøvekapitler:
`exfac03-spr-<del>-prove.json`). Quiz til
`src/lib/data/quiz-staging/exfac03-spr-<del>-<nr>.quiz.json`.

IKKE rør `_registry.json`, `_all.json`, `textbook-courses*.ts`, `quiz-data*.ts`
eller `src/app/trinn/hoyere/institusjoner.ts` — wiring gjøres sentralt med
`scripts/hoyskolebok/wire-bok.py exfac03-spr` (fase 5).

⚠ **Generer ALLTID JSON via python `json.dump`.** Faget er fullt av
anførselstegn, apostrofer og enkle anførselstegn rundt betydninger
(*kjeks* ‘kjeks’), og én uescapet anførsel har tidligere blokkert hele
plattformens prebuild. **Men merk paradokset i §7.2:** `json.dump` er også det
som gjør den farligste IPA-feilen usynlig for plattformens LaTeX-port. Derfor
skal PORT A (§7.3) kjøres i tillegg, ikke i stedet.

**57 filer totalt:** 47 innholdskapitler (skjelettets §3) + 10 prøvekapitler
(`exfac03-spr-1-prove` … `exfac03-spr-10-prove`). Wiringen genererer
prøvekapitlenes metadata selv fra `BOKCONFIG.json` (`prøvedeler`) — filene må
finnes, men skal ikke listes i skjelettets §3.

### 2.1 Skjelettet ER i v3-format (verifisert programmatisk 6. august 2026)

`wire-bok.py` parser skjelettet med `^#### Kapittel (\d+\.\d+):\s*(.+)$` og
`\*\*id:\*\* \`(exfac03-spr-\d+-\d+)\``. Kjørt mot `SKJELETT.md` med parserens
egen kode:

| kontroll | resultat |
|---|---|
| kapitler parset | **47 av 47** |
| tomme `description`-felt | **0** |
| `prerequisites` som peker utenfor bokas id-er | **0** |
| kapitler uten `prerequisites` | **1** — `exfac03-spr-0-1`, som skal være det |
| duplikate id-er | **0** |
| sum `estimatedMinutes` | **2 570** (stemmer med kvotesammendraget) |
| lengste `description` | 202 tegn — ren tekst, ingen markdown |
| markdown (`$`, `**`, backtick) i noen `description` | **0** |
| `sectionNames` utledet fra del-overskriftene | alle 11 (del 0–10), identisk med §2-tabellen |
| kapitler per del | 2 · 5 · 4 · 3 · 5 · 7 · 3 · 3 · 3 · 3 · 9 = **47** ✓ |

`python3 scripts/hoyskolebok/sjekk-skjelett.py exfac03-spr` gir
**KVALITETSPORT OK**. Ingen v3-konvertering er nødvendig. **Endrer du skjelettet,
kjør begge testene på nytt før fase 5.**

⚠ **Kosmetisk avvik som IKKE skal «rettes»:** `sjekk-skjelett.py` melder «20
prøve-kvote-linjer». Skjelettet har 21 `Prøve-kvote Del N`-forekomster, men den
siste (Del 10 i §4) står som `### `-overskrift og treffes ikke av portens
`\*\*Prøve-kvote Del (\d+)`-mønster. Porten er grønn, prøvedelene er ti, og alle
ti prøvekapitler skal bygges. Gjør du overskriften om til fet-form for å «fikse»
tellingen, endrer du et dokument som allerede er gatet — la den stå.

Tre detaljer må overleve enhver senere redigering av skjelettet:

1. **`prerequisites` MÅ stå i backticks.** Parseren plukker dem med
   `` re.findall(rf"`({emne}-\d+-\d+)`", …) `` — uten backticks finnes de ikke.
   «ingen» skrives uten (gjelder kun kap. 0.1).
2. **Tom linje etter `- **Description:**`-blokka.** Uten den blør beskrivelsen
   inn i `**Eksamensbelegg:**` — samme mekanisme som ga 53 avkuttede
   kursbeskrivelser i tidligere bøker.
3. **Kapittel-JSONs eget `description` overstyrer skjelettet** (parseren
   foretrekker kapittelfila). Fyll det derfor alltid ut **ordrett likt** begge
   steder.

### 2.2 Prøvekapitlene og plattformens hardkoding

`wire-bok.py` genererer prøvekapitlenes beskrivelse og den kan **ikke**
overstyres fra skjelettet. Ordlyden per 6. august 2026 er:

> «Fire prøver som dekker del N (…) på eksamensnivå, med fullstendige løsninger
> skrevet av oss.»

To ting følger av det:

1. **«Fire prøver» er en hardkoding, ikke en anbefaling.** Hvert av de ti
   prøvekapitlene MÅ ha nøyaktig fire `collapsible`-prøver. Skjelettets §4 gir
   fire per del for alle ti deler — verifisert, inkludert Del 10, der
   **sjangerprøven ligger først nettopp for at det skal bli fire** (én
   sjangerprøve + tre øvingseksamener). Fjerner du sjangerprøven, lyver
   beskrivelsen leseren møter.
2. **Ordlyden er allerede sannferdig og skal IKKE skrives om.** Tidligere bøker
   måtte rette «med fulle løsningsforslag» i fase 5, fordi ordet
   «løsningsforslag» ville koblet bokas egne prøver til et arkiv som ikke har
   noen. Den formuleringen er borte fra `wire-bok.py`; «fullstendige løsninger
   skrevet av oss» er presist og passerer §13.4. **Kontroller at ordlyden
   fortsatt er slik når du wirer** — endres skriptet, gjelder rettekravet igjen.

⚠ **Prøvedelene er 1–10, ikke 0–10.** Skjelettet sier uttrykkelig
«Prøve-kvote Del 0: ingen — metadel, dekkes av øvingseksamenene i Del 10».
`BOKCONFIG.json` har derfor `"prøvedeler": [1,2,3,4,5,6,7,8,9,10]`.
40 prøver totalt (36 temadelprøver + 4 i Del 10).

⚠ **Seksjonstitlene inneholder ingen kolon.** `wire-bok.py` bygger
prøvekapittelets tittel som «Prøver til del N: \<seksjonstittel\>», og en kolon
inne i seksjonstittelen ville gitt to. Verifisert: null kolon i alle elleve.

---

## 3. Kapittel-JSON (toppnivå)

```json
{
  "id": "exfac03-spr-3-2",
  "courseId": "exfac03-spr",
  "chapterNumber": "3.2",
  "title": "…(fra skjelettet, ordrett)…",
  "description": "…(fra skjelettet, ordrett)…",
  "estimatedMinutes": 60,
  "competenceGoals": ["kunne oppgi din språklige bakgrunn og transkribere konsistent med den gjennom hele besvarelsen", "…"],
  "content": [ "…blokker…" ],
  "exercises": []
}
```

- **`chapterNumber` er ALLTID del-basert** (`<del>.<nr>`: `0.1`, `3.2`, `10.9`) —
  **ALDRI lineær** («14»). Prøvekapitler: `<del>.P`. Dette er enkeltfeilen som
  ødelegger navigasjonen i en hel bok (PRODUKSJONSLØYPE-lærdommen fra JUS1111).
- `title` og `description` tas **ordrett** fra skjelettet.
- `competenceGoals`: 2–4 «kunne …»-formuleringer destillert fra kapitlets
  innholdskontrakt. Dette er **Skolesagas EGNE** mål — ALDRI kopi av UiOs
  offisielle læringsutbyttebeskrivelser. UI-et deklarerer kilden automatisk.
- **Ingen kald kode i `competenceGoals`** — ikke «TRA», ikke «BES», ikke «#16»,
  ikke «Prioritet: perfekt», ikke «A-markør». Og **ingen IPA-tegn**: feltet
  rendres rått i navigasjonen (§3.1).

### 3.1 `description`, `title` og navigasjonsfelt er REN TEKST (UFRAVIKELIG)

`title`, `description`, `topics`/`sectionNames` og `competenceGoals` rendres
**RÅTT**. `description` havner uendret i `<meta name="description">`,
`og:description` og `twitter:description` — altså i **Google-treffet og i
lenkeforhåndsvisningen** — og i den synlige kroppen på kapittelsiden. Markdown
rendres aldri der. 122 kapitler i 17 bøker viste `$…$` og `**fet**` i Google før
dette ble oppdaget.

```
✗ Skillet mellom `/ˈkjɛks/` og `[ˈçɛks]`, og hvorfor **konsistens** slår normaluttale.
✓ Skillet mellom fonemisk og fonetisk form, og hvorfor konsistens slår normaluttale.
```

Ingen `$…$`, ingen `**fet**`, ingen `*kursiv*`, ingen backticks, ingen
markdown-lenker i disse feltene.

⚠ **Og den fagspesifikke skjerpingen: backticks er forbudt i `description`, men
IPA er bokas naturlige språk.** §7.1 regel 6 sier at inline-transkripsjon i prosa
SKAL stå i backticks — nettopp for at proporsjonal font ikke skal skille tegnene
fra hverandre. I `description` er begge deler umulig: backticken ville vist seg
som en backtick, og bar IPA i et søketreff er uleselig ute av kontekst.
**Regelen er derfor: `description` beskriver transkripsjonen i ord, og
inneholder ingen IPA-tegn i det hele tatt.** Skjelettets 47 beskrivelser er
kontrollert mot dette og er alle rene — de omtaler «fonetisk transkripsjon»,
«retroflekser» og «palatal frikativ» i klartekst uten ett eneste symbol. Hold
det slik.

Skjelettets 47 descriptions er dessuten kontrollert mot markdown-regelen:
**ingen inneholder LaTeX, fet skrift eller backticks.** Enkelte inneholder kolon
og tankestrek, som er ren tekst og helt lovlig — det er bare
`BOKCONFIG.json`-beskrivelsen som har et hardt tegnkrav (§17.1).

---

## 4. Blokktyper (eksakte felt — strukturreferanse: `src/lib/data/chapters/ling1100-2-1.json`)

- `text`: `{id, type: "text", content}` — markdown-prosa.
- `definition`: `{id, type: "definition", title, content}` — **`title`
  OBLIGATORISK**. Flashcards genereres KUN fra **toppnivå** `definition`-blokker
  med `title` (verifisert i `src/lib/data/flashcard-definitions.ts`: den løper
  gjennom `chapter.content` og plukker `block.type === 'definition'` på
  toppnivå — en definisjon nøstet inne i en `collapsible` teller IKKE).
  I EXFAC03-SPR er `title` enten **symbol ↔ beskrivelse**
  («ʂ — ustemt retrofleks frikativ», «ə — reduksjonsvokalen»), **term ↔
  definisjon** («Allofon», «Sammensetningsformativ», «Finittposisjon») eller
  **prosedyre ↔ navn** («Uttalekontrakten — de tre trinnene»). Åpne innholdet med
  forklaringen i ORD, lukk med **distinksjonen mot nabobegrepet** (fon mot fonem
  mot allofon, hovedallofon mot biallofon, retrofleks mot dental,
  avledningsformativ mot bøyningsformativ, ordklasse mot setningsledd,
  temaposisjon mot finittposisjon, polysemi mot homonymi mot homofoni).
- `theorem`: `{id, type: "theorem", title, content}` — brukes til **prosedyrene**,
  som skal stå som én enhet: beskrivelsesprosedyren i fire trinn,
  fonemanalysen i tre, distribusjonsanalysen i fire, uttalekontrakten i tre,
  transkripsjonsprosedyren i seks, segmenteringen i fem, helsetningsanalysen i
  fire, trebyggingen i seks, glosseringsanalysen i fem. Ikke pynt — men i denne
  boka er prosedyrene selve varen, så `theorem` brukes mer enn i et rent
  drøftingsfag.
- `example`: `{id, type: "example", title, problem, solution}` — `solution` viser
  prosedyren **gjennomført**, trinn for trinn, med det ferdige svaret utskrevet.
  ⚠ En `example.solution` som beskriver hva man skulle gjort uten å gjøre det,
  er en byggefeil — og i treoppgavene er den forbudt eksplisitt (§7.4).
- `tip` / `warning`: `{id, type, title, content}`.
- `exercise`: `{id, type: "exercise", exercise: {id, number, type: "classic",
  difficulty: "lett"|"middels"|"vanskelig", task, solution, hints: []}}`.
  ⚠ **`difficulty` har nøyaktig tre lovlige verdier: `lett`, `middels`,
  `vanskelig`.** IKKE `medium`, IKKE `hard`, IKKE `easy` — det er plattformens
  engelske interne verdier, og fem kapitler i en søskenbok måtte rettes fordi en
  agent brukte dem. Verdien skrives aldri inn i `task`. ALDRI `solutionVideo`,
  `allowsUpload`, `allowsCanvasDrawing`, `answer` eller `subTasks` (deloppgaver
  skrives inn i `task`/`solution`, se §11).
- `collapsible`: `{id, type: "collapsible", title, buttonText, content: [blokker]}`
  — feltnavnet er `content` og det skal inneholde BLOKKER. En `text`-nøkkel eller
  tom array rendrer som en tom boks og er en byggefeil.

Blokk-id-er: `<kapittel-id>-<løpenavn>` (f.eks. `exfac03-spr-3-2-def-uttalekontrakt`),
unike i kapitlet. Duplikate blokk-id-er felles av kvalitetsporten.

**Grep-sjekk før ferdigmelding:**

```bash
grep -l '"difficulty": *"\(medium\|hard\|easy\)"' src/lib/data/chapters/exfac03-spr-*.json
# skal gi null treff
```

---

## 5. Obligatorisk kapittelstruktur

### 5.1 Alltid først, i denne rekkefølgen

1. `tip` **Eksamensvinkel** — frekvens, poengvekt, sjangre og trekkregler, med
   de EKSAKTE tallene fra **§6.2 i denne kontrakten**. **Forfatteren skal ALDRI
   finne på frekvenstall og aldri regne om dem** (§6.3).
2. `text` **Forkunnskaper** — kapitler i boka som markdown-lenker
   (`[kap. 2.2](/exfac03-spr/exfac03-spr-2-2)`) + eventuelle kryssbok-lenker fra
   tabellen i §14. «Dette kapitlet kan leses uten forkunnskaper» der skjelettet
   sier `prerequisites: ingen` (kun 0.1).

**Oppfrisket forkunnskap (bindende).** I kapitler med stor avstand til
forkunnskapen SKAL Forkunnskaper-blokka **VISE 2–3 kjernepåstander ferdig
oppfrisket**, ikke bare lenke. I denne boka betyr «vise» ofte at **selve tegnet
skal stå der**, ikke bare navnet på det:

> **Fra kap. 1.3:** r + dental gir retrofleks — `ɳ ʈ ɖ ɭ ʂ` — og regelen virker
> også over ordgrensen i en sammensetning.
> **Fra kap. 2.2:** komplementær distribusjon betyr at de to lydene aldri
> opptrer i samme omgivelse; der den ene kan stå, kan den andre ikke.

⚠ **Frasen «Sist du var her» er FORBUDT** (grep-sjekkes, §13.4). Blokka
oppsummerer et ANNET kapittel — den kan ikke si «her», og en lærebok vet ikke hva
leseren har gjort. Mange lesere hopper rett til det kapitlet de er reddest for.
Overskriften skal være **`## Forkunnskaper`**, ikke «Forkunnskaper — sist du var
her» (246 kapitler i ni bøker hadde den formen, og første rydding fant den ikke
fordi den sto med liten forbokstav midt i en overskrift).

| ✗ | ✓ |
|---|---|
| Sist du var her sto dette … | Dette sto der … |
| Sist du var her (fra kap. 1.3): | Fra kap. 1.3: |
| Som du husker fra kap. 2.1 … | I kap. 2.1 står … |
| Da vi gikk gjennom dette sist … | I gjennomgangen i kap. 2.1 … |

Samme forbud rammer «som du sikkert husker», «du har jo allerede sett», «dette
kan du fra før».

**Kapitler der oppfrisket forkunnskap er OBLIGATORISK** (stor avstand til
forkunnskapen, eller et symbolapparat som må være på plass før første oppgave):

| Kapittel | Hva som skal stå ferdig oppfrisket, med tegnene utskrevet |
|---|---|
| 1.5 | fra 1.1–1.4: de tre konsonantaksene og de fire vokalaksene, i den faste rekkefølgen beskrivelsen skal skrives |
| 2.1 | fra 1.4: hva klammer og skråstreker betyr, og at ortografi står i kursiv |
| 3.1 | fra 2.1 og 2.2: allofon og komplementær distribusjon i én setning hver |
| 3.2 | fra 1.3: de fenomenene en uttalevariant faktisk låser — retroflekser, `ç` mot `ʃ`, tjukk l `ɽ` |
| 3.3 | fra 3.1: forklaringsmalen «her står X i klammer og Y mellom skråstreker, fordi …»; fra 3.2: de tre trinnene i uttalekontrakten |
| 4.3 | fra 4.2: de fire merkelappene rot, avledningsformativ, bøyningsformativ, sammensetningsformativ |
| 5.1 | fra 4.2: at ordklasse ikke er det samme som funksjon |
| 5.4 | fra 5.2: funksjonsetikettsettet; fra 5.3: hva innleiring er |
| 8.1 | fra 5.1 og 5.2: hva et hode er, og at frasen heter det hodet heter |
| 9.2 | fra 1.3: assimilasjon og bortfall slik de ser ut synkront; fra 2.2: hva en omgivelse er |
| 10.1–10.8 | de 2–3 påstandene sjangeren hviler på, hentet fra sitt hjemkapittel |
| 10.9 | oppgavens sjangerkrav i tre punkter, hentet fra sitt sjangerkapittel |

### 5.2 Teorikapittel i strukturfagene (Del 1–5) — DNA-regnefag

Etter eksamensvinkel og forkunnskaper går kapitlet i LÆRINGSLØKKER (§1). Disse
blokkene skal finnes, fordelt i løkkene — ikke stablet:

- `text` **Hverdagsanker FØR apparatet.** Abstrakte kjernetemaer åpner konkret:
  kap. 1.1 med hva munnen faktisk gjør før termene kommer · kap. 2.1 med to ord
  som betyr noe forskjellig fordi én lyd er byttet · kap. 4.1 med et langt ord
  leseren selv kan dele opp · kap. 5.2 med at «hvem gjorde hva» er et annet
  spørsmål enn «hvilken ordklasse er dette».
- `definition` **kjernebegrepene** — flashcard-kilden, toppnivå med `title`, hver
  med **distinksjonen mot nabobegrepet** utskrevet.
- `theorem` **prosedyren** — nummererte trinn, under ti linjer.
- `example` **gjennomført anvendelse** ×2–3 — ett rett fram og ett med et
  grensetilfelle. Alle ord, setninger og datasett er NYSKREVNE (§16).
- **`exercise` ×4–8 INLINE — hardt minimum fire, hardt tak åtte.** Fordeling:
  minst én `lett` innstegsoppgave tidlig (ren gjengivelse med egne ord), 1–2
  prosedyreoppgaver med fasit, 1–2 egeneksempel-oppgaver der begrunnelsen er
  selve kravet, og minst én oppgave per temadel med `difficulty: "vanskelig"`.
- `warning` **Typiske feil** — feilkodene fra skjelettets «Typiske feil»-linje,
  **glosset i klarspråk ved første bruk PER KAPITTEL**: «(feil #16 — å beskrive
  et fonem så løst at beskrivelsen passer på flere lyder: sier du bare «ustemt
  frikativ», har du ikke skilt `ʂ` fra `ʃ`, `ç`, `f` eller `s`)».
- `tip` **Slik løftes svaret** — det grepet som løfter fra C til A i akkurat
  dette temaet. Obligatorisk i alle temakapitler.
- `collapsible` **Symbol- og termliste** SIST i kapitlet (§7.5).

### 5.3 Drillkapittel (1.5, 2.4, 3.3, 4.3, 5.4, 8.3) — DNA-regnefag

`tip` Eksamensvinkel → `text` Forkunnskaper → `theorem` **løsningsoppskriften**
→ `text` **variantkatalogen** (hvilke tilfeller som finnes, og hva som skiller
dem) → oppgavebolker med stigende vanskegrad, hver med fullstendig fasit →
**trekkregnskap skrevet ut** (hva 0,5 per feil faktisk koster i denne
oppgavetypen) → **én merket kald bank uten hint til slutt** → `warning` Typiske
feil → **avkryssbar selvdiagnose-sjekkliste (☐)** → `collapsible` Symbol- og
termliste.

Antallet drilloppgaver er fastsatt i skjelettet per kapittel og er et
**minimum**: 1.5 → 30 · 2.4 → 25 · 3.3 → minst 60 nyskrevne ord · 4.3 → 25 ·
5.4 → 12 setninger · 6.3 → 12 ordpar · 8.3 → 8 datasett · 9.2 → 15 endringspar.

⚠ **Grensetilfellene skrives ut i begge lesninger** og merkes
**«(omstridt — begge forsvarlige)»**. Det er ikke en høflighet: H2025 godtar
uttrykkelig `til-` både som rot og som avledning i en segmentering, og både
polysemi og homofoni på ett og samme ordpar. En fasit som later som slike
tilfeller har ett svar, lærer bort noe emnet straffer (feil #9).

⚠ **Signalbokser står ETTER oppgaven.** En boks som varsler hva en drilloppgave
tester («her ligger retrofleksfella over ordgrensen») plasseres ETTER oppgaven
eller som collapsible hint, aldri foran. Gjelder særlig gyldighetsdrillen i
kap. 3.2 og «nær korrekt er godt nok»-boksen i kap. 5.4, som skjelettet
uttrykkelig plasserer **etter** de første oppgavene så den ikke leses som en
invitasjon til slurv.

### 5.4 Teorikapittel i redegjørelsesfagene (Del 6–9) — DNA-drøfting

Samme ramme, men tre forskjeller:

- **`definition` bærer mer.** Kriteriet er presis begrepsbruk, så definisjonen
  med kontrastbegrepet ER redegjørelseskravet.
- **`example` viser et BEGRUNNET svar, ikke et regnestykke.** Enhver kobling —
  «dette paret er polysemi», «dette leddet er et adjunkt» — skal være begrunnet i
  én setning som svarer på «hvorfor akkurat dette?». En konstatert kobling er
  C-stoff, og boka skal aldri vise C-stoff som om det var A-stoff.
- **Drillen er begrunnelsesdrill, ikke fasitdrill.** Oppgaven er ikke «hva er
  svaret», men «skriv argumentet, så konklusjonen».

### 5.5 Sjanger- og håndverkskapitler (0.1, 0.2, 10.1–10.8)

1. `tip` Eksamensvinkel — sjangerens frekvens (tall fra §6.2).
2. `text` **Oppskrift** — trinnvis disponering med tidsbudsjett (§6.6).
3. `example` **gjennomskrevet besvarelse** med margkommentarer om hva som gir
   uttelling hvor. Margkommentarer skrives som egne linjer i `solution`:
   `> Margnotat: her navngis den konkrete omgivelsen som utløser aspirasjonen — det er dette som skiller et poenggivende svar fra den generelle frasen H2025 avviser.`
4. `exercise` ×4 nyskrevne øvingsoppgaver (skjelettet fastsetter fire i hvert av
   10.1–10.7), fasit = **momentliste** strukturert som **må-punkter /
   pluss-punkter / feller**, med **poengregnskap** der oppgavetypen er poengsatt.
5. `warning` Typiske feil + `collapsible` med sjangerens sjekkliste (§6.4).

Kap. **0.2** har i tillegg **sjangerkortet på ÉN side** (kortet selv, ikke en
lenkeliste) og **prosedyrekortet** for de tre tunge prosedyrene.

Kap. **10.8 (feilvaksinen)** har én seksjon per feil #1–#16, alle med fire ledd:
(a) feilen slik veiledningen formulerer den, med hvilken termin den er hjemlet i,
(b) et nyskrevet «slik ser den ut i en besvarelse»-utdrag, (c) samme passasje
omskrevet slik den skulle vært, med den konkrete endringen markert, (d) en
varsellampe leseren kan kjenne igjen i egen tekst. Deretter
gjenkjenningsdrill på nyskrevne besvarelsesutdrag med **stokket fasit** — aldri
samme feilkode som fasit to ganger på rad.

⚠ **Ærlighetsforbeholdet SKAL stå i 10.8s åpning og der registeret først
presenteres i Del 0:** de fire sensorveiledningene uttrykker sensors
**forhåndsforventninger**, ikke observerte studentfeil. **Ikke ett sted i
materialet rapporterer en sensor hva kandidatene faktisk gjorde galt.** Dette
skiller emnet fra flere søskenemner — SVEXFAC03 har én veiledning som sier
«erfaringsvis», og her finnes ingen — og leseren har krav på å vite det.

Kap. **10.8** avslutter med bokas ene **kalde bank** utenfor drillkapitlene:
utdragene til slutt leveres UTEN `hints`, fasit = ren momentliste, eksplisitt
merket «Kald bank — ingen hint. Her er det å kjenne igjen feilen selv som
trenes.»

### 5.6 Modellbesvarelseskapitlet (10.9)

1. `text` med det nyskrevne oppgavesettet på ni spørsmål og 65 poeng, formulert
   slik det ville stått i et sett, pluss ærlighetslinjen fra §10.1 og
   karakterforbeholdet fra §6.4.
2. `collapsible` **Besvarelse i A-sjiktet** — full, sammenhengende tekst med
   margnotater og «— naturlig pausepunkt —» mellom hovedseksjonene.
3. `collapsible` **Kommentert besvarelse i C-sjiktet** — samme sett, faglig
   riktig i hovedsak, med gjenkjennelige tap: en generell forklaring der oppgaven
   ba om konkrete tegn, en manglende obligatorisk term, et eksempel uten
   begrunnelse. **Den er ærlig merket som C, og teksten sier eksplisitt at C er
   en god og vanlig karakter.**
4. `collapsible` **Besvarelse på marginen** — akkurat over E-terskelen på 30 av
   65 poeng, med margnotater om hva som så vidt holder. Den leses også som
   «bestått på marginen» for den som trener på H2022-format (20 av 49 poeng).
5. Etter hver besvarelse: **poengregnskap per delspørsmål**,
   **oppgraderingsmenyen** (hva som skiller denne besvarelsen fra den over, punkt
   for punkt, med poengverdi) og en avkryssbar selvdiagnose (☐).
6. `warning` **Typiske feil** — de fire som faktisk skiller nivåene: #3, #6, #8
   og en manglende obligatorisk term. Kravet om `warning`-blokk gjelder også
   dette kapitlet; tittelen «Modellbesvarelser» fritar det IKKE i kvalitetsporten.

⚠ **Ingen meta-fasit.** Drøftelsene er faktisk utskrevet, aldri erstattet av «en
A-besvarelse ville ha …» (§10.2).

### 5.7 Prøvekapitler (`exfac03-spr-<del>-prove`, del 1–10)

Id `exfac03-spr-<del>-prove`, `chapterNumber` `<del>.P`, tittel «Prøver til del
<del>: <deltittel>» (auto fra wiringen — riktig som den er).

Struktur: `tip` (dekning + «4 prøver à ~20–45 min» + «kan trygt deles over flere
kvelder — én prøve per økt» + hvor flervalget bor) + `text` Forkunnskaper +
**fire** `collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med
nyskrevne oppgaver og full fasit. **Prøvenes tema og oppgavetyper per del står i
skjelettets §4 — følg dem punkt for punkt.**

**Fasitstruktur** (obligatorisk i hver prøvefasit):

> **Poengregnskap per delspørsmål** etter mønsteret fra de to poengsatte
> terminene, med **trekk** der oppgavetypen har trekk (0,5 per feil) · og der
> oppgaven er redegjørende: **må-punkter** (uten disse når svaret ikke opp) ·
> **pluss-punkter** (det som løfter — begrunnelsen, den utskrevne alternative
> lesningen, det egne eksempelet) · **feller** (det veiledningene faktisk sier
> skal trekke, med feilkode).

Etter hver prøvefasit: **avkryssbar selvdiagnose-sjekkliste (☐)** — bruk
rubrikkene i §6.4. Kap-referanser i fasitene som markdown-lenker. **Ingen quiz og
ingen begrepsbank i prøvekapitler.**

⚠ **Ja/nei- og riktig/galt-lister:** `sjekk-statiskflervalg.py` leser `a) b) c)
d)` under et nummerert spørsmål som et flervalg. Er listen et sett med
SELVSTENDIGE påstander (ikke deloppgaver av én oppgave), bruk romertall
**(i), (ii), (iii)** — det er nummerering av påstander, ikke listemerking av
deloppgaver. Dette treffer særlig **gyldighetsdrillen i Del 3-prøve 2** (åtte
transkripsjoner som hver skal vurderes konsistent eller ikke) og
**sjangerprøven i Del 10**. Beholder du a)–e), sjekk portens tall mot en manuell
telling før du «retter» noe. **Dette er det ENESTE stedet romertall er tillatt.**
Deloppgaver merkes alltid **a), b), c)** (§11).

⚠ **Prøvekapitlene er unntatt fra symbolliste- og warning-kravet** i
`sjekk-bok.py` (porten kjenner igjen `-prove` og ordet «prøve» i tittelen).
Det betyr ikke at de kan sløyfe fasitstrukturen over.

---

## 6. EKSAMENSKONTRAKTEN (fagets kjerne — bindende for alle løsninger og modellsvar)

Alt i denne seksjonen etableres i Del 0 (kap. 0.1–0.2) og refereres i resten av
boka.

### 6.1 Kildegrunnlaget og TALLDISIPLINEN (bokas strengeste seksjon etter §7)

Tallene er talt i emnemappa (`EKSAMENSANALYSE.md` §7) og gjengitt her fordi denne
kontrakten er porten forfatteren leser.

| Fakta | Tall |
|---|---|
| **Eksamensterminer dokumentert** | **6** — H2011, H2018, H2020, H2021, H2022, H2025 |
| Årsspenn | 15 kalenderår, 2011–2025 |
| Vårterminer / høstterminer | **0 / 6** |
| Filer i emnemappa | **7** — alle md5-unike, ingen dubletter |
| **Oppgavesett-filer** | **3**, som dekker **3 terminer** (H2011, H2021, H2022) |
| **Sensorveiledninger** | **4**, som dekker **4 terminer** (H2018, H2020, H2022, H2025) |
| **Løsningsforslag og fasitark som egne dokumenter** | **0 — finnes ikke** |
| Terminer med ordrett oppgavetekst | **5 av 6** (alle unntatt H2020) |
| Terminer med kjent temafordeling | **6 av 6** |
| Terminer med poengsetting og oppgitt karakterskala | **2** (H2022, H2025) — og skalaene er ULIKE |
| **Spørsmål totalt** | **45** |
| **Poeng totalt i de poengsatte terminene** | **114** (H2022: 49 · H2025: 65) |

**Kontrollsummer:** 3 + 4 = 7 filer ✓ · 0 vår + 6 høst = 6 terminer ✓ ·
6 + 8 + 8 + 7 + 7 + 9 = **45** spørsmål ✓ · 49 + 65 = **114** poeng ✓ ·
5 terminer med ordrett oppgavetekst + 1 uten = 6 ✓ · 6 terminer i arkivet +
9 manglende høstterminer = 15 høstterminer i spennet ✓

**Åtte ufravikelige konsekvenser:**

1. **Ordene «fasit» og «løsningsforslag» kan ALDRI brukes om arkivet.** UiO har
   publisert null av begge deler for dette emnet. Det som finnes, er
   **sensorveiledninger** (4 stykker), og tre av dem inneholder utskrevne
   modellsvar — men de er sensorveiledninger, og boka skal kalle dem det.
   ⚠ **Og her skiller denne boka seg fra søskenbøkene:** ordene «fasit»,
   «prøvefasit» og «fasitsvar» er **påkrevd, hyppig og helt legitimt** språk om
   bokas egne drilloppgaver, prøver og om vurderingsregelen i Del 3
   («kriteriet er konsistens, ikke likhet med et fasitsvar»). Et blankt forbud
   mot ordet ville felt hundrevis av korrekte forekomster. **Det forbudte er
   koblingen til arkivet og til UiO**, og porten er derfor smalt anlagt på
   nettopp de koblingene (§13.4).
2. **Fem frekvensnevnere er lovlige, og bare fem:** **6 terminer** (temafrekvens
   og sjangerfrekvens) · **45 spørsmål** (oppgavefordeling) · **114 poeng**
   (vekting) · **4 sensorveiledninger** (alt om hva sensor belønner og straffer) ·
   **2 terminer** (alt om karakterskala og terskler).
3. ⚠ **Men tre poengsum-nevnere er lovlige i tillegg, og skjelettet krever dem
   selv:** **49** og **65** (poengsummen i én termin — «10 av 65 poeng», «14 av
   49 poeng») og **14** (poengsummen i H2022-1, brukt som «3 av de 14 poengene i
   oppgaven»). I tillegg **15** (høstterminer i spennet 2011–2025). Skjelettets
   setning «Står tallet ikke her eller i en belegg-blokk i del 3, skal det ikke
   skrives i boka» er formelt riktig — 49, 65 og 14 står i belegg-blokkene — men
   en port bygget på «de fem» ville felt de ~31 stedene der skjelettet selv
   skriver «av 65 poeng». **Den bindende, maskinelt håndhevede lista er derfor
   åtte: 2, 4, 6, 14, 15, 45, 49, 114 og 65.** Se §19, sprik 1.
4. **Enheten skrives alltid ut.** «4 av 6 terminer», aldri «4 av 6». Uten enhet
   vet ikke leseren om det telles terminer, spørsmål eller poeng — og de tre
   tallene måler helt ulike ting. I en tabell kan enheten stå i kolonnehodet;
   i prosa skal den stå i setningen.
5. **Sensorkrav har nevner 4.** Ingen påstand om hva sensor belønner eller
   straffer kan bygge på **H2011** eller **H2021** — de har oppgavesett, men
   ingen veiledning. Formuleringene «H2011-veiledningen» og «H2021-veiledningen»
   omtaler dokumenter som ikke finnes og er **hardt forbudt** (§13.4).
6. ⚠ **Alle fire veiledningene uttrykker forhåndsforventninger.** Ikke ett sted
   rapporterer en sensor hva kandidatene faktisk gjorde galt. Feilregisteret
   #1–#16 er hva veiledningene sier skal trekke. **Dette ærlighetsforbeholdet
   SKAL stå der registeret presenteres** (kap. 0.1, kap. 0.2 og kap. 10.8).
7. **Fem ting står IKKE i arkivet og skal derfor ikke skrives:** studiepoeng,
   semesterplassering og adgangskrav · pensumboka (verken tittel, forfatter,
   utgave, årstall eller sidetall) · varighet og hjelpemidler for H2025 · når
   karakterskalaen skiftet · hvordan analysetrær leveres i en digital eksamen.
   ⚠ De fire timene i eksamensformtabellen gjelder de fem terminene der de
   faktisk er oppgitt, **ikke H2025** — som er terminen boka kalibreres mot.
8. **Nevnere og påstander som IKKE er lovlige:** «alle eksamener» · «samtlige
   terminer» · ethvert årstall før 2011 brukt som eksamenstermin · enhver
   vårtermin · «7 sett» (7 er et FILtall: 3 oppgavesett + 4 veiledninger, og
   opptrer kun i kildenoten) · og **enhver påstand om strykprosent,
   karakterfordeling eller sensurstatistikk** — materialet inneholder ingenting
   om det.

#### 6.1.1 Kildenote-mal for kap. 0.1 (testet mot portene — bruk ordlyden)

Malen er kjørt gjennom PORT B (§13.4) og PORT A (§7.3) og gir **null avvik**.
Tilpass i språk, **aldri i tall**:

> Boka er kalibrert mot hele EXFAC03-SPR-arkivet ved UiO: seks dokumenterte
> eksamensterminer, alle om høsten, fra høsten 2011 til høsten 2025. Grunnlaget
> er tre oppgavesett som dekker tre terminer (H2011, H2021 og H2022) og fire
> sensorveiledninger som dekker fire terminer (H2018, H2020, H2022 og H2025) —
> sju dokumenter i alt. Oppgaveteksten foreligger ordrett for 5 av 6 terminer;
> H2020 har bare sensorveiledning, og den oppgir saksområdet for hvert spørsmål
> uten å gjengi teksten. UiO har ikke publisert løsningsforslag eller fasitark
> for dette emnet — ingen av delene finnes. Det som finnes, er
> sensorveiledninger, og de beskriver hva sensor forventer, ikke hva kandidater
> faktisk gjorde: ikke ett sted rapporterer en veiledning hva kandidatene gjorde
> galt. Alle oppgaver, ord, transkripsjoner, segmenteringer, analysetrær og
> modellbesvarelser i denne boka er derfor skrevet av oss. **Forbehold:** alle
> seks terminene er høstterminer, og 9 av 15 høstterminer i spennet mangler helt
> — H2012 til og med H2017, H2019, H2023 og H2024. Perioden 2012 til 2017 er
> tom. Karakterskalaen er kjent for 2 av 6 terminer, og de to er ulike: H2022 var
> bestått eller ikke bestått, H2025 er A–F. Overgangen kan ikke tidfestes.
> Studiepoeng, semesterplassering, adgangskrav og pensumlitteratur står ikke i
> ett eneste av de sju dokumentene, og omtales derfor ikke her.

⚠ **To feller malen er kalibrert rundt, begge oppdaget ved å kjøre malen mot
bokas egen port:**

1. **Første utkast skrev «arkivet inneholder ingen eksamen fra vårsemesteret».**
   Setningen er sann, men felles av vårporten — og det er med vilje: en negasjon
   som inneholder det forbudte ordet, overlever verken skumlesing eller et
   søkemotorutdrag. Malen sier derfor **«alle seks terminene er høstterminer»**,
   som er like sant, sier mer, og passerer.
2. **Skriv aldri «ingen fasit fra UiO».** Den formen står i forbudt-regexen.
   Malen sier «UiO har ikke publisert løsningsforslag eller fasitark», som er
   presist og lovlig.

Skriv aldri om malen til de forbudte formene, og legg aldri til «7 sett» eller
«alle eksamener».

### 6.2 AUTORITATIV frekvenstabell per kapittel

**Regelen: tallet er ALLTID antall LISTEDE terminer, spørsmål eller poeng i
belegg-lista.** Ikke antall forekomster, ikke et anslag, ikke en omregning.

Skjelettets belegg-blokker er etterregnet mot terminlistene sine og
kontrollsummene i `EKSAMENSANALYSE.md` §3: **spørsmålsradene summerer til 45,
poengradene til 114, og strukturfagene til 80 av 114 (70,2 %) — alle tre
stemmer.** Skjelettets belegg-blokker kan derfor brukes ordrett. Tabellen under
er den bindende kortversjonen; står tallet ikke her eller i ditt kapittels
belegg-blokk, skal det ikke skrives.

| Saksområde | Terminer | Spørsmål | Poeng | Deler |
|---|---|---|---|---|
| Fonetikk og fonologi | **6 av 6 terminer** | 8 av 45 spørsmål | **29 av 114 poeng** | 1–3 |
| Syntaks | **6 av 6 terminer** | **10 av 45 spørsmål** | 26 av 114 poeng | 5 |
| Morfologi | **6 av 6 terminer** | 8 av 45 spørsmål | 25 av 114 poeng | 4 |
| Pragmatikk | 4 av 6 terminer | 4 av 45 spørsmål | 13 av 114 poeng | 7 |
| Semantikk | 4 av 6 terminer | 4 av 45 spørsmål | 12 av 114 poeng | 6 |
| Språktypologi | 4 av 6 terminer | 4 av 45 spørsmål | 7 av 114 poeng | 8 |
| Språkendring | 4 av 6 terminer | 4 av 45 spørsmål | 2 av 114 poeng | 9 |
| Kontekstlære | 1 av 6 terminer | 1 av 45 spørsmål | — | 7.1 |
| Lingvistikkens grunnlag | 1 av 6 terminer | 1 av 45 spørsmål | — | 9.3 |
| Retorikk | 1 av 6 terminer | 1 av 45 spørsmål | — | 9.3 |

**Sjangerfrekvens (nevner 6 terminer):** transkripsjonsoppgaven **4 av 6** ·
beskrivelsesoppgaven **3 av 6** · segmenteringsoppgaven **3 av 6** ·
treoppgaven **4 av 6** · redegjørelsesoppgaven **6 av 6** ·
egeneksempel-oppgaven **6 av 6** · klassifiseringsoppgaven **3 av 6**.
⚠ Klassifiseringsraden har **fire belegg i tre terminer** (H2025 har to). Det er
ikke en regnefeil — nevneren er terminer, og H2025 teller én gang. Skriv aldri
«4 av 6 terminer» om den.

**Poengvekter som skal skrives ut der de brukes:** transkripsjon 10 av 65 poeng
(H2025) · segmentering 10 av 65 poeng, 2 poeng per ord · tre 10 av 65 poeng
(H2025) og 5 av 49 poeng (H2022) · fonembeskrivelse 1 poeng per stykk, 5 poeng
totalt, ingen delpoeng · fon/allofon/fonem 14 av 49 poeng (H2022-1), med
stavelse og sonoritet som 3 av de 14 poengene · språkhandlinger 8 av 65 poeng ·
maksimene 5 av 49 poeng, 1 poeng per maksime · bøyningsklasser 5 av 65 poeng ·
typologi med glossert data 4 poeng, fordelt 1 for svaret og 3 for begrunnelsen ·
synkroni mot diakroni 2 av 49 poeng.

**Trekkregler (H2025, den eneste terminen som oppgir trekk):** 0,5 per feil i
transkripsjonen · 0,5 per feil i segmenteringen · 0,5 per feilanalysert
setningsledd i leddanalysen og i treet.

⚠ **Nevneren for et SAKSOMRÅDE er ikke nevneren for en OPPGAVETYPE.**
Fonetikk og fonologi er prøvd i 6 av 6 terminer; det betyr **ikke** at
transkripsjonsoppgaven, beskrivelsesoppgaven eller stavelsesoppgaven hver for seg
er prøvd seks ganger. Kapitlene 1.5, 2.3, 3.1–3.3 og 10.1–10.2 skal skrive «som
del av fonetikk og fonologi, prøvd i 6 av 6 terminer» og deretter sitt eget,
mindre tall. **Dette er den vanligste måten å produsere et sant tall som sier noe
usant.**

### 6.3 NEVNERPORTEN — hvilken nevner til hvilken påstandstype

| Nevner | Når den brukes | Eksempel |
|---|---|---|
| **6 terminer** | ALLE tema- og sjangerfrekvenser | «Treoppgaven står i 4 av 6 terminer.» |
| **45 spørsmål** | oppgavefordeling | «Syntaks er 10 av 45 spørsmål.» |
| **114 poeng** | vekting på tvers av de to poengsatte terminene | «Strukturfagene er 80 av 114 poeng.» |
| **65 poeng** | vekting innenfor H2025 | «Treoppgaven gir 10 av 65 poeng.» |
| **49 poeng** | vekting innenfor H2022 | «Fonologioppgaven var 14 av 49 poeng.» |
| **14 poeng** | vekting innenfor H2022-1 | «Stavelsen gir 3 av de 14 poengene.» |
| **4 sensorveiledninger** | alt om hva sensor belønner eller trekker for | «Alle 16 feilene er hjemlet i minst én av de 4 sensorveiledningene.» |
| **2 terminer** | alt om karakterskala og terskler | «Karakterskalaen er kjent for 2 av 6 terminer.» |
| **15 høstterminer** | hull i serien | «9 av 15 høstterminer i spennet mangler.» |

**Ufravikelige konsekvenser:**

- **«Sett» er ALDRI en nevner i denne boka.** Ordet er tvetydig her (7 filer,
  3 oppgavesett, 6 terminer). Skriv «terminer», «spørsmål» eller «poeng».
- **«I de fleste terminene», «gjennomgående», «nesten alltid» og «ofte» er
  FORBUDT som frekvenspåstander** uten et telt tall ved siden av.
- **Bare de tre saksområdene med 6 av 6 er robuste.** Faller ett sett bort, endrer
  alle 4-av-6-radene seg. Boka skal si det i kap. 0.1 og aldri presentere et
  4-av-6-tall som et mønster.
- **Prosentandeler skrives med nevneren ved siden av.** «70,2 %» alene er en
  påstand uten hjemmel; «80 av 114 poeng (70,2 %)» er den samme påstanden med
  belegget synlig.

### 6.4 Karakterrammen, tersklene og de fire rubrikkene

Boka kalibreres mot **A–F**, fordi det er den nyeste dokumenterte skalaen
(H2025). **Hver gang skalaen brukes til noe, skal denne rammen følge med:**

| Karakter | Poeng (av 65) | Andel |
|---|---|---|
| A | 58,5–65,0 | 90–100 % |
| B | 52,0–58,0 | 80–89 % |
| C | 45,5–51,5 | 70–79 % |
| D | 39,0–45,0 | 60–69 % |
| E | 30,0–38,5 | 46–59 % |
| F | under 30,0 | under 46 % |

- **H2022 hadde todelt skala:** bestått 20–49 poeng, ikke bestått 0–19.
  Terskelen var 20 av 49 poeng = 40,8 %.
- **Overgangen kan ikke tidfestes.** Den skjedde i H2023 eller H2024, og begge
  mangler i arkivet.
- **Poenggrensene er veiledende.** H2025 sier uttrykkelig at helhetsinntrykket av
  besvarelsen også teller, og at sensors skjønn kan gi justeringer.
- ⚠ **Det finnes ingen kvalitativ karakterbeskrivelse i noen av de fire
  veiledningene.** Ingen «A-besvarelsen viser …»-tabell. **Dette emnet skiller
  karakterer med poeng, ikke med prosa, og boka kan ikke oppfinne en kvalitativ
  skala den ikke har belegg for.** Nivåene i kap. 10.9 er derfor definert av
  **poengsum**, ikke av prosa om hva en A-besvarelse «viser».
- **«C er en god og vanlig karakter» skal stå eksplisitt i Del 0.**
- ⚠ **Ingen doble beståkrav.** Ingen av veiledningene har regler om at én del må
  bestås separat — i motsetning til SVEXFAC03. Ikke importer den mekanikken.

**Det som belønnes** (alle hjemlet i de 4 veiledningene, skal stå i kap. 0.2):
begrunnelse framfor konklusjon (H2025: 1 poeng for svaret, 3 for forklaringen) ·
egne eksempler, forklart (H2020: begrunnede egeneksempler teller litt mer **selv
når begrunnelse ikke er bedt om**) · eksplisitt bruk av den obligatoriske
fagtermen · systematikken forklart, ikke bare gjengitt (H2018) · konkret
forklaring på konkrete tegn (H2025) · å nyansere et begrep i stedet for å bruke
det flatt (H2025 om synonymi) · å argumentere for en alternativ analyse (H2018:
avvikende tilhekting kan være et pluss) · å svare med egne formuleringer (H2020).

**Det som straffes:** generelle utsagn der oppgaven ber om konkrete · å nevne en
term uten å forklare den · å hoppe over et oppgaveledd · å gi færre eksempler enn
bestilt · feil i en transkripsjon eller segmentering (0,5 per feil) · å gjette
uten begrunnelse.

**De fire rubrikkene (bindende selvrettingsverktøy, binære — leseren skal kunne
krysse av uten skjønn).** De står i kap. 0.2 og i sitt sjangerkapittel, og hver
prøvefasit viser tilbake til den som passer.

**Transkripsjonsrubrikken (TRA):**

☐ Har du oppgitt din språklige bakgrunn før du begynte å transkribere?
☐ Er den fonetiske formen i klammer og den fonemiske mellom skråstreker?
☐ Er transkripsjonen konsistent med bakgrunnen du oppga — hele veien?
☐ Har du skrevet én forklaringssetning per tegn som skiller de to formene?
☐ Navngir hver forklaringssetning den konkrete omgivelsen, ikke bare regelen?

**Beskrivelsesrubrikken (BES):**

☐ Står akseverdiene i fast rekkefølge — stemthet, sted, måte for konsonanter;
høyde, plassering, rundethet, lengde for vokaler?
☐ Har du prøvd beskrivelsen mot nabolydene, så ingen annen norsk lyd passer?
☐ Er systematikken bak termene forklart, ikke bare nevnt?
☐ Er det lagt ved et norsk eksempelord?

**Analyserubrikken (SEG og TRE):**

☐ Er hver eneste morf eller hvert eneste ledd merket — ingen står umerket?
☐ Er merkingen funksjon (SUBJEKT, rot, bøyningsformativ), ikke bare kategori?
☐ Er grensetilfellene begrunnet med én linje hver?
☐ Er treet faktisk tegnet, ikke beskrevet i ord?
☐ Har du regnet ut hva 0,5 per feil koster i akkurat denne oppgaven?

**Redegjørelsesrubrikken (RED, EGE og KLA):**

☐ Står begrunnelsen FØR konklusjonen?
☐ Er den obligatoriske termen brukt OG forklart, der oppgaven har en?
☐ Er eksempelet ditt eget, og står det eksplisitt hvilken del av eksempelet som
svarer til hvilken del av definisjonen?
☐ Har du levert like mange eksempler som oppgaven ba om?
☐ Er lengden styrt av poengene — er en to-poengs oppgave faktisk kort?

### 6.5 Sjangrenes anatomi (bindende for alle modellsvar og fasiter)

Kodene **TRA**, **BES**, **SEG**, **TRE**, **RED**, **EGE** og **KLA** er
byggespråk. **Skriv alltid sjangerens navn først, koden i parentes**, og skriv
navnet fullt ut ved første bruk per kapittel (§13.2).

**TRA — transkripsjonsoppgaven, tre ledd i alle fire terminene:** (1) transkriber
fonetisk **og** fonemisk · (2) **oppgi din språklige bakgrunn** · (3) forklar hva
forskjellene skyldes. **Vurderingsregelen er intern konsistens, ikke likhet med
et fasitsvar** (§8). ⚠ **Det skarpeste sensorkravet i hele materialet ligger i
ledd 3:** H2025 avviser uttrykkelig et generelt utsagn av typen «allofonisk
variasjon tas ikke med i en fonemisk transkripsjon». Utsagnet er riktig, og det
gir **null poeng**. Forklaringen må ta for seg **konkrete tegn** og navngi den
konkrete omgivelsen de oppstår i.

**BES — beskrivelsesoppgaven, fire trinn og tre retninger:** (1) plasser lyden på
alle aksene · (2) prøv beskrivelsen mot nabolydene og legg til akseverdier til
ingen nabo passer · (3) skriv i fast rekkefølge · (4) legg ved et norsk
eksempelord. Retningene er **symbol → beskrivelse**, **beskrivelse → symbol** og
**term → systematikk**. **Skillekravet er fasitkriteriet:** beskrivelsen skal
skille fonemet fra **alle andre** fonemer i norsk, og det gis **ingen delpoeng**.

**SEG — segmenteringsoppgaven, fem trinn:** (1) finn rota eller røttene · (2)
skrell av bøyningsformativet ytterst · (3) identifiser avledningene innenfra og
ut · (4) merk fugemorfene · (5) skriv én begrunnelseslinje for hver merking som
ikke er opplagt. **Oppsettet er fritt så lenge analysen er forståelig, men
merkingen må være fullstendig** (H2025) og opplysningene om røtter, stammer,
avlednings- og bøyningsformativer **eksplisitte hele veien** (H2020).

**TRE — treoppgaven, bygget nedenfra og opp i seks trinn.** Etikettsettet er
H2025s eget: `helsetning` øverst, funksjonsetiketter (SUBJEKT, FINITT VERBAL,
INFINITT VERBAL, DIREKTE OBJEKT, SUBJEKTSPREDIKATIV, ADVERBIAL) på leddene,
`leddsetning` og `subjunksjonal` for innleiringer, frasekategorier under
funksjonene, ordklasse nederst. ⚠ **De to mildeste sensorkravene i materialet
ligger her:** et tre som er **nær korrekt** får full uttelling (H2025), og en
**alternativ tilhekting kan være et pluss** hvis kandidaten argumenterer for den
med erstatning og flytting (H2018). Det gjør treoppgaven til en av de mest
lønnsomme å forsøke seg på — og boka skal si det.

**RED — redegjørelsesoppgaven, fire trinn:** (1) avgrens hva spørsmålet gjelder ·
(2) definer presist · (3) sett opp mot kontrastbegrepet · (4) presiser ett
grensetilfelle. **Ordet «kort» er en instruks:** poengene forteller hvor langt
svaret skal være, og å skrive en side på en to-poengs oppgave er den dyreste
disponeringsfeilen i emnet.

**EGE — egeneksempel-oppgaven, fire trinn:** (1) navngi fenomenet · (2) gi
eksempelet · (3) si **eksplisitt** hvilken del av eksempelet som svarer til
hvilken del av definisjonen · (4) si hva som ville gjort eksempelet til et
**dårlig** eksempel. **Punkt 3 og 4 er hele forskjellen — punkt 1 og 2 klarer
alle.** Oppgaven kommer ofte som punktliste a)–e) med egen spesifikasjon per
punkt, og da er fullstendighet halve poenget.

**KLA — klassifiserings- og begrunnelsesoppgaven, fem trinn:** (1) sett opp
kandidatkategoriene · (2) prøv dataene mot hver · (3) skriv ut testen · (4)
konkluder · (5) si hva som ville endret konklusjonen. ⚠ **Dette er i realiteten
en argumentasjonsoppgave forkledd som en sorteringsjobb:** H2025 gir **1 poeng
for riktig svar og 3 for forklaringen**, med den begrunnelsen at det er 50/50
sjanse for å gjette riktig — og godtar flere ulike konklusjoner når de er godt
begrunnet.

**De seks obligatoriske termene** (§13.3) er den billigste poengkilden i emnet.
Uten termen er svaret ufullstendig uansett hvor godt det ellers er.

### 6.6 Tidsbudsjett (bruk denne modellen konsekvent i hele boka)

**Dokumentert form:** fem av seks terminer er **fire timers skriftlig eksamen**
med 6 til 9 nummererte spørsmål, der **alle spørsmål skal besvares** (H2022).
⚠ **Varighet og hjelpemidler er ikke oppgitt for H2025** — de fire timene gjelder
de fem terminene der de faktisk står, og det skal skrives slik hver gang.

Modellen boka bruker, i et ni-spørsmålssett på 65 poeng: **~10 min på å lese hele
settet og fordele tiden etter poeng** → **~3 min per poeng** → **~20 min
gjennomlesning og kontroll av at hvert ledd faktisk er besvart**. Innenfor
transkripsjonsoppgaven: bakgrunn (~2 min) → fonetisk form (~8) → fonemisk form
(~4) → forklaringsledd (~8) → kontroll (~3). ⚠ **Rekkefølgen er ikke fri:**
forklaringsleddet skal skrives selv om transkripsjonen ikke er ferdig, fordi den
dyreste enkeltdisponeringsfeilen i oppgaven er å gi opp forklaringen fordi
transkripsjonen tok all tiden.

**De tre formene, kort i kap. 0.1:** skoleeksamen uten hjelpemidler kl. 9–13
(H2011, H2022) → hjemmeeksamen med alle hjelpemidler kl. 15–19 (H2020, H2021) →
digital eksamen der IPA-tegn limes inn fra et vedlagt dokument (H2025).
- **Hjemmeeksamen var korona, ikke en reform.** H2020-veiledningen skriver at
  studentene «denne gangen» satt hjemme med lærebok og pdf-er. H2022 er
  tilbakevendingen.
- ⚠ **En observasjon, ikke en regel:** de to bekreftede campus-terminene lå
  kl. 9–13 og de to bekreftede hjemmeterminene kl. 15–19. Mønsteret hviler på
  fire terminer og skal formuleres som en observasjon.
- **Dagens eksamen krever svar på alt.** H2022 skriver det ut på begge målformer.
  Tre eldre terminer (H2018, H2020, H2021) sa uttrykkelig det motsatte — at man
  kan bestå uten å svare på alt. Boka formidler H2022-regelen som gjeldende og
  sier at eldre sett kandidaten trener på hadde en mildere regel.

Der en oppgaves deklarerte tid avviker fra summen av deltidene, forklares
differansen (skrivetid mot total). «Lite tid?»-boksen sier eksplisitt at
kapitlenes tidsanslag er **LESEtid**, og at den som skriver besvarelser for hånd
bør legge på ca. ×1,5. **Summen av de 47 kapitlene er eksakt 2 570 minutter ≈
42,8 timer lesetid** (verifisert mot skjelettet); prøvekapitlene kommer i tillegg.

### 6.7 Bokas to mantraer

1. **«Begrunnelsen før konklusjonen.»** Etableres i kap. 0.2, gjentas i hvert
   sjangerkapittel. Hjemmelen er poengfordelingen selv: 1 poeng for svaret og 3
   for forklaringen i typologioppgaven, og flere konklusjoner godtas i
   synonymioppgaven når de er godt begrunnet.
2. **«Ordene er nye hver gang — prosedyren er det ikke.»** Etableres i kap. 0.1
   og bæres av kap. 3.3 og 4.3. Hjemmelen er at ordene som skal transkriberes og
   segmenteres, er forskjellige i hver eneste termin, mens fenomenene de er
   konstruert for å tvinge fram, er de samme. ⚠ **Boka skal ikke love at trening
   på gamle sett gir gjenkjennelse** — bare at oppgavetypen er stabil.

Begge mantraene forklares i klarspråk ved første bruk.

---

## 7. IPA-KONTRAKTEN (bokas største enkeltrisiko — hard port)

Fonetisk transkripsjon er emnets signatur, og notasjonen berører nesten halve
boka. Skjelettets §1.2 gir tolv regler. Denne seksjonen operasjonaliserer dem,
og retter én antakelse i skjelettet som ikke holder teknisk.

### 7.1 De tolv reglene, operasjonalisert

**De to negative reglene, som er de viktigste:**

1. **ALDRI LaTeX-innpakning av IPA.** Ikke `\textipa{}`, ikke `\v{s}`, ikke
   `\int` som stand-in for `ʃ`, ikke `\ng` for `ŋ`, ikke `\ipa{}`.
2. **ALDRI IPA inne i `$…$`.** Transkripsjon er ikke matematikk.

**De positive reglene:**

3. **IPA skrives som direkte Unicode i JSON-strengen.** Inventaret boka bruker:
   `ɑː ɛ ə æ ʉ ʊ ø œ ɔ y` · `ɳ ʈ ɖ ɭ ʂ` · `ç ʃ ŋ ɾ ʁ ɽ` · `pʰ tʰ kʰ` · `ɱ` ·
   `ˈ ˌ ː`. Verifisert: tegnene overlever `json.dumps`/`json.loads` uendret,
   inneholder ingen backslash, ingen `$`, ingen `%` og ingen kontrolltegn.
4. **Kombinerende diakritika skrives som grunntegn + kombinerende tegn:**
   stavelsesbærende `n̩` og `l̩` (grunntegn + U+0329), ustemthet `n̥` (U+0325),
   dental `t̪` (U+032A). Verifisert med `unicodedata`: ingen av de fire har en
   prekomponert form, `unicodedata.normalize("NFC", …)` lar dem stå urørt, og
   rundturen gjennom JSON er identisk. **Skriv tegnene direkte; bygg dem aldri
   med markup, og la aldri det kombinerende tegnet stå alene etter et mellomrom**
   — da fester det seg på mellomrommet og forsvinner visuelt (PORT A, sjekk 6).
5. **Fonemisk form mellom skråstreker, fonetisk form i klammer:** `/ˈkjɛks/` mot
   `[ˈçɛks]`. Ortografisk form i kursiv, betydning i enkle anførselstegn:
   *kjeks* ‘kjeks’.
6. **Inline i prosa settes transkripsjonen i backticks**, slik at proporsjonal
   font ikke skiller tegnene fra hverandre. ⚠ **Unntak: `description`,
   `title` og `competenceGoals`** — der er backticks forbudt fordi feltet er ren
   tekst (§3.1), og derfor står det ingen IPA-tegn der i det hele tatt.
7. **Lengdetegnet er `ː` (U+02D0)**, ikke kolon. **Trykkmarkørene er `ˈ` (U+02C8)
   og `ˌ` (U+02CC)**, ikke apostrof og komma.
8. **Bokas g er vanlig ASCII-g (U+0067).** IPA-`ɡ` (U+0261) har **null**
   forekomster. Grunnen er at de to formene er visuelt nesten identiske, at
   ASCII-g er det tegnet studenten faktisk har på tastaturet, og at en bok som
   blander dem lærer bort en forskjell som ikke finnes i faget.
   ⚠ **Merk at skjelettets egne regellinjer inneholder tegnet** (tre steder, alle
   der regelen formuleres) og at `EKSAMENSANALYSE.md` §11 har det i teststrengen
   sin. **Kopierer du en regellinje inn i et kapittel, tar du med deg tegnet.**
   PORT A er derfor scopet til `src/lib/data/chapters/exfac03-spr-*.json` og
   aldri til `docs/`.
9. **Tonelag er et valg, ikke et krav.** Markerer boka tonelag, brukes ¹ og ²
   foran den trykksterke stavelsen, og boka sier eksplisitt at markeringen er
   valgfri og at kandidaten må være konsekvent. Arkivet dokumenterer ikke at
   tonemmarkering kreves, og boka skal ikke påstå at den gjør det.
10. **Analysetrær tegnes, aldri beskrives i ord** (§7.4).
11. **Emnet er formelfritt.** Ingen LaTeX noe sted. Trekkregnskap skrives i ren
    tekst («trekk 0,5 per feil»), poengsummer som «10 av 65 poeng».
    **`$` har null forekomster i kapittelfilene** — også som valutategn, også
    escapet. Trenger du et dollartegn, skriv «dollar».
12. **«Symbol- og formelliste» blir her en symbol- og termliste** (§7.5).

### 7.2 ⚠ HVORFOR `sjekk-latex.py` IKKE FANGER DEN VIKTIGSTE FEILEN

Skjelettets §1.2 sier at «en løs backslash slår ut i `sjekk-latex.py` og gir rå
kildekode til leseren». **Det er bare halvveis sant, og den halvdelen som ikke
er sann, er den farlige.** Testet mot skriptet 6. august 2026:

| Hva forfatteren skriver | Hva som havner i strengen | `sjekk-latex.py` |
|---|---|---|
| rå JSON med **enkel** backslash: `"Se \textipa{S}"` | `\t` = TAB-kontrolltegn | **FANGET** — «KONTROLLTEGN \t (TAB)» |
| `json.dump` av `"Se \\textipa{S}"` | `\textipa{S}` — én ekte backslash | **GRØNN. Null avvik.** |
| `json.dump` av `"\\v{s}"`, `"\\ipa{a}"`, `"\\qtree"` | `\v{s}` `\ipa{a}` `\qtree` | **GRØNN. Null avvik.** |
| `json.dump` av `"$/fɑ/$"` | `$/fɑ/$` | **GRØNN** — KaTeX rendrer det uten feil |

Årsaken er `RA_LATEX`-mønsteret i skriptet. Det lister kjente LaTeX-kommandoer
og krever ordgrense: `\\(?:text|mathrm|frac|…)\b`. I `\textipa` står `\text`
etterfulgt av `i`, så `\b` slår ikke til — og `textipa`, `ipa`, `v`, `ng`,
`qtree` og `tikz` står ikke på lista i det hele tatt. Kjørt som fikstur:
et kapittel med `\textipa{}`, `\v{s}`, `\ipa{a}`, `\qtree` og `$/fɑ/$` ga
**«LATEX-PORT OK — ingen kontrolltegn, ingen KaTeX-feil»**.

**Konsekvensen er et paradoks denne kontrakten må uttale eksplisitt:**
§2 påbyr `json.dump` (og det påbudet står ved lag — én uescapet anførsel
blokkerer prebuild). Men `json.dump` er nettopp det som gjør `\textipa` til én
ekte backslash i stedet for et kontrolltegn, og dermed usynlig for porten. **En
agent som gjør alt riktig teknisk, produserer den ene feilen ingen eksisterende
port ser** — og leseren får `\textipa{[ʃɛks]}` bokstavelig på skjermen.

Derfor: **PORT A under er obligatorisk, i tillegg til `sjekk-latex.py`, ikke i
stedet for.** `sjekk-latex.py` skal fortsatt kjøres og skal fortsatt være grønn
— den fanger kontrolltegn, ubalanserte `$` og linjeskift i inline-matte, som
PORT A ikke ser etter.

### 7.3 PORT A — IPA-notasjonen (testet 6. august 2026)

Porten leser JSON-strukturen, aldri `grep -o` med `.{0,N}`-kontekst (jf. minnet
«Grep-minnefelle»: et slikt mønster mot kompakt énlinjes JSON tok 17 GB RAM).

**Testet mot tre fiksturer:** en lovlig (IPA, kombinerende diakritika,
ASCII-tre med `/ \`-grener, markdown-lenker, kodeblokker) → **0 avvik** · en med
alle bruddformene plantet → **21 avvik, alle riktige** · en med IPA og kolon i
en markdown-lenketekst → **0 avvik** (guarden mot falske positiver virker).

```bash
python3 - <<'EOF'
# PORT A — EXFAC03-SPR: IPA-notasjonen. Leser JSON-strukturen, aldri grep -o.
import glob, json, os, re, sys, unicodedata
GLOB = sys.argv[1] if len(sys.argv) > 1 else "src/lib/data/chapters/exfac03-spr-*.json"
IPA_TEGN = "ɑɛəʉʊœɔɳʈɖɭʂçʃŋɾʁɽɱˈˌːʰɡ"   # æ og ø er UTELATT: vanlige norske bokstaver
KOMMANDO  = re.compile(r"\\(?=[A-Za-zÆØÅæøå{])")        # \textipa \ipa \v{ \tikz \begin{…}
PAKKE     = re.compile(r"qtree|tikz|\\forest|pst-|\bTree\[", re.I)
IPA_SPENN = re.compile(r"\[[^\[\]\n]{1,80}\]|/[^/\n]{1,80}/|`[^`\n]{1,80}`")
def strenger(o, sti=""):
    if isinstance(o, str): yield sti, o
    elif isinstance(o, dict):
        for k, v in o.items(): yield from strenger(v, f"{sti}.{k}")
    elif isinstance(o, list):
        for i, v in enumerate(o): yield from strenger(v, f"{sti}[{i}]")
avvik, n_ipa, n_lengde, n_trykk = [], 0, 0, 0
filer = sorted(glob.glob(GLOB))
if not filer: sys.exit("fant ingen kapittelfiler")
for p in filer:
    navn = os.path.basename(p)
    for sti, s in strenger(json.load(open(p, encoding="utf-8"))):
        n_ipa += sum(s.count(c) for c in IPA_TEGN if c != "ɡ")
        n_lengde += s.count("ː"); n_trykk += s.count("ˈ") + s.count("ˌ")
        # 1. formelfri bok: ingen dollartegn i det hele tatt
        for m in re.finditer(r"\$", s):
            avvik.append(f"{navn}{sti}: «$» — boka er formelfri, IPA skal ALDRI stå i $…$ → …{s[max(0,m.start()-50):m.start()+50]}…")
        # 2. ingen LaTeX-kommando. ASCII-trærnes «/ \» slipper: backslash foran
        #    mellomrom eller linjeskift treffer ikke mønsteret.
        for m in KOMMANDO.finditer(s):
            avvik.append(f"{navn}{sti}: LaTeX-kommando «{s[m.start():m.start()+12]}» — IPA skrives som direkte Unicode")
        # 3. ingen tre-pakker
        for m in PAKKE.finditer(s):
            avvik.append(f"{navn}{sti}: tre-pakke «{m.group(0)}» — trær tegnes i kodeblokk eller klammenotasjon")
        # 4. ASCII-g er bokas standard
        for m in re.finditer("ɡ", s):
            avvik.append(f"{navn}{sti}: IPA-ɡ (U+0261) — bokas standard er ASCII-g (U+0067)")
        # 5. lengde og trykk skrives med ː ˈ ˌ, ikke kolon og apostrof
        for m in IPA_SPENN.finditer(s):
            sp = m.group(0)
            if not any(c in sp for c in IPA_TEGN): continue
            if "](" in sp or "kap." in sp: continue   # markdown-lenke, ikke transkripsjon
            for tegn, riktig in ((":", "ː (U+02D0)"), ("'", "ˈ (U+02C8)"), ("ʼ", "ˈ (U+02C8)"), ("´", "ˈ (U+02C8)")):
                if tegn in sp:
                    avvik.append(f"{navn}{sti}: «{tegn}» i transkripsjonen {sp!r} — bruk {riktig}")
        # 6. kombinerende diakritika: grunntegn + kombinerende tegn, aldri løst
        for i, ch in enumerate(s):
            if unicodedata.combining(ch) and (i == 0 or s[i-1] in " \t\n([/`"):
                avvik.append(f"{navn}{sti}: løst kombinerende tegn U+{ord(ch):04X} uten grunntegn → {s[max(0,i-30):i+10]!r}")
        if unicodedata.normalize("NFC", s) != s:
            # NFC-forskjell er LOVLIG for n̩ l̩ n̥ t̪ (ingen prekomponert form),
            # men ikke for tegn som HAR en prekomponert form (e + ́  → é).
            for i, ch in enumerate(s):
                if unicodedata.combining(ch) and i and unicodedata.normalize("NFC", s[i-1]+ch) != s[i-1]+ch:
                    avvik.append(f"{navn}{sti}: {s[i-1]+ch!r} har prekomponert form — bruk den, ikke kombinerende tegn")
print(f"{len(filer)} filer · {n_ipa} IPA-tegn · {n_lengde} lengdetegn ː · {n_trykk} trykkmarkører ˈ/ˌ")
# De to siste er HELBOK-kontroller og gir mening bare i en full kjøring.
if len(filer) > 5 and n_ipa and not n_lengde: avvik.append("boka bruker IPA, men ikke ETT lengdetegn ː — kolon er sannsynligvis brukt i stedet")
if len(filer) > 5 and n_ipa and not n_trykk:  avvik.append("boka bruker IPA, men ingen ˈ/ˌ — apostrof er sannsynligvis brukt i stedet")
print(f"avvik: {len(avvik)}")
for a in avvik[:40]: print(" -", a)
sys.exit(1 if avvik else 0)
EOF
```

**Porten skal gi null avvik.** Fire ting den bevisst IKKE gjør, og som du må
kjenne til:

- **Den forbyr ikke backslash foran mellomrom eller linjeskift**, fordi et
  ASCII-tegnet tre bruker `/` og `\` som grener. `\` foran en bokstav eller `{`
  er derimot alltid en LaTeX-kommando i denne boka.
- **Den kjenner igjen en transkripsjon på at spennet inneholder et IPA-tegn.**
  `æ` og `ø` er utelatt fra gjenkjenningssettet fordi de er vanlige norske
  bokstaver — ellers ville hvert «høsten» og «spørsmål» talt som IPA. En
  transkripsjon som bare inneholder `æ` eller `ø` og ingenting annet særmerket,
  slipper derfor gjennom kolon-kontrollen. Det er sjelden, men se etter det.
- **De to siste kontrollene er helboksjekker** og hoppes over ved kjøring på
  under seks filer, slik at en enkeltfil uten transkripsjoner ikke gir falskt
  utslag.
- **Den sier ingenting om at transkripsjonen er RIKTIG.** Det er §8s jobb.

### 7.4 Trær tegnes, aldri beskrives

⚠ **Ber en oppgave om et analysetre, SKAL fasiten vise et faktisk tre.**
«Treet i ord» er ikke et svar, og PORT B (§13.4) grep-sjekker frasen til null.

**To lovlige former, begge vist i kap. 5.4 slik at leseren kan velge:**

1. **Innrykket tekst i en fenced kodeblokk** — bokas hovedform:

```
helsetning
  SUBJEKT (NP)
    leddsetning
      SUBJUNKSJONAL  som
      FINITT VERBAL  satt
      ADVERBIAL      bakerst
  FINITT VERBAL (V)  hørte
  DIREKTE OBJEKT (NP)  talen
```

2. **Merket klammenotasjon** — kompakt, for trær inne i en setning:
   `[helsetning [SUBJEKT …] [FINITT VERBAL …] [DIREKTE OBJEKT …]]`

**Forbudt i alle former:** `qtree`, `tikz`, `forest`, `\Tree[`, `pst-`-pakker.
PORT A feller alle fem.

⚠ **Velger boka ekte grafikk i stedet, er det en egen operasjon med egen
risiko.** SVG-en må lastes opp med `upload-media-storage.ts` — figurene serveres
fra Supabase Storage, ikke fra `public/`, så «fila ligger i repoet» er **ikke**
et bevis på at figuren vises. Kjør `python3 scripts/hoyskolebok/sjekk-figurer.py
exfac03-spr` og få den grønn, ellers er figuren 404 for leseren. **Anbefalingen
er å la være:** kodeblokk-treet er lesbart, søkbart, oversettbart til nynorsk og
har null 404-risiko.

⚠ **Og boka skal si at den ikke vet hvordan trær leveres på en digital eksamen.**
H2025 er dokumentert digital (IPA limes inn fra et vedlagt dokument), men
leveranseformen for trær står ingen steder. Veiledningens eget modellsvar er
håndtegnet, men det er sensorens arbeidsdokument, ikke kandidatens leveranse.

### 7.5 Symbol- og termlisten (obligatorisk, sist i hvert kapittel)

`collapsible` med `title` **«Symbol- og termliste»** og `buttonText`
**«Vis symboler og termer»**. Første linje:
**«Oppslagsverk — alt her forklares underveis i kapitlet.»**

Deretter en markdown-tabell `| Symbol | Betydning |` med **alle** IPA-tegn brukt
i delkapitlet, hver med artikulatorisk beskrivelse og et norsk eksempelord —
**per delkapittel, ikke arvet fra tidligere kapitler**. Dette er samtidig bokas
mest brukte oppslagsverk.

⚠ **Navnet er fritt, og det er verifisert.** `sjekk-bok.py` krever tittelen
«Symbol- og formelliste» **bare** i kapitler som faktisk inneholder `$…$`-matte
(`har_latex and not har_liste and not er_vurdering`). Denne boka har null `$`,
så kravet utløses aldri, og «Symbol- og termliste» er lovlig. **Men listen skal
stå uansett** — den er oppslag, ikke inngang, og et fonetikkapittel uten den er
ubrukelig som repetisjonsverktøy.

⚠ **Åpningslinjen er ikke pynt.** Studentpanelet fant at en symbolvegg i
døråpningen skremmer. Derfor står listen SIST, i en lukket collapsible, med en
setning som sier at alt i den er forklart underveis.

---

## 8. UTTALEKONTRAKTEN (Del 3 — bokas viktigste enkeltkonstruksjon)

Transkripsjonsoppgaven ser ut som et fasitfag og er det ikke. Den har prosedyre
og trekk per feil **og** et vurderingskriterium som godtar flere ulike svar.
Kombinasjonen finnes ikke i noen annen bok i katalogen, og hele Del 3 er bygget
rundt den. Denne seksjonen er bindende for kap. 3.1–3.3, 10.1, Del 3-prøven og
enhver transkripsjonsoppgave ellers i boka.

### 8.1 Vurderingsregelen, ordrett i sak

**H2025 sier det rett ut:** siden kandidatene skal transkribere sin **egen**
uttale, godtas ulike varianter så lenge de vurderes som en mulig eller sannsynlig
uttale gitt kandidatens **oppgitte** bakgrunn. H2020 gir én foreslått østnorsk
transkripsjon og kaller den nettopp **et forslag**. Bestillingen «oppgi din
språklige bakgrunn» står uttrykkelig i **H2018-4, H2021-2 og H2025-4**.

**Kriteriet er altså intern konsistens, ikke likhet med et fasitsvar.**

### 8.2 De tre trinnene (bindende form i hele boka)

1. **Oppgi bakgrunnen** — hvor du er fra, hvilken varietet du transkriberer, og
   hvilke valg det låser.
2. **Transkriber konsistent med den** — gjennom hele besvarelsen, også i senere
   oppgaver på samme sett.
3. **Forsvar de valgene som avviker** fra en normaluttale, med én setning per
   valg.

**Valgpunktene kandidaten må ta stilling til**, hvert med de vanligste variantene
og hva de forplikter til: skarre-r mot rulle-r og hva det gjør med retrofleksene
· `ç` mot `ʃ` og et eventuelt sammenfall · tjukk l `ɽ` · palatalisering av
dentaler · trykkplassering i importord · reduksjonsvokalens kvalitet.

**`warning` «Konsistens slår normaluttale»:** en gjennomført vestnorsk
transkripsjon uten retroflekser er et **bedre** svar enn en halvveis østnorsk med
dem. **Erfaringsbroen:** leseren har allerede en uttale — boka lærer henne å
beskrive den, ikke å bytte den ut.

### 8.3 TO BAKGRUNNER I HVER FASIT (hardt krav)

⚠ **Dette er den enkeltbindingen som er lettest å bryte og dyrest å bryte.**

**Hver transkripsjonsoppgave i boka SKAL ha fasit for minst TO ulike oppgitte
bakgrunner**, skrevet ut i sin helhet på begge nivåer. Kravet er eksplisitt i
skjelettet for kap. 3.3 («fullstendig fasit på begge nivåer for minst to
oppgitte bakgrunner»), kap. 10.1 («4 nyskrevne øvingsoppgaver med fullstendig
fasit for to ulike oppgitte bakgrunner hver») og Del 3-prøve 3 («fasit for to
ulike bakgrunner, med trekkregnskap 0,5 per feil»). Det gjelder også overalt
ellers der en oppgave ber om en transkripsjon.

**Hvorfor kravet er hardt, og ikke en pedagogisk finesse:** en fasit med ett svar
lærer bort at det finnes ett svar. Det er nøyaktig feil #2 sett fra den andre
siden, og det er den ene tingen emnets vurderingsregel ikke tåler. En student som
har lest en enkeltfasit, vil rette sin egen korrekte vestnorske transkripsjon mot
bokas østnorske — og gjøre den inkonsistent med bakgrunnen hun selv oppga.

**Formen fasiten skal ha:**

> **Bakgrunn A — østnorsk med retroflekser og skarring i importord.**
> Fonetisk form · fonemisk form · forklaringssetning per tegn som skiller dem.
> **Bakgrunn B — vestnorsk med skarre-r og uten retroflekser.**
> Fonetisk form · fonemisk form · forklaringssetning per tegn som skiller dem.
> **Hva de to har felles, og hva som skiller dem** — én kort avsluttende
> setning som sier at begge er fullt tellende, og hvorfor.

**Flere svar godtas når de er internt konsistente.** Fasiten sier det eksplisitt,
hver gang: det er ikke to alternativer der ett er «riktigst», men to besvarelser
som begge oppfyller kriteriet fordi hver av dem er konsistent med den bakgrunnen
den selv oppgir. Der en tredje variant også ville holdt, sier fasiten det.

**Trekkregnskapet regnes innenfor hver bakgrunn**, ikke på tvers: et tegn er ikke
en feil fordi det avviker fra den andre bakgrunnen, men bare hvis det avviker fra
den bakgrunnen kandidaten selv oppga.

### 8.4 Gyldighetsdrillen (kap. 3.2 og Del 3-prøve 2)

Åtte korte transkripsjoner med **oppgitt bakgrunn**, der leseren skal avgjøre om
transkripsjonen er konsistent med bakgrunnen. Fordelingen er bindende: **noen
treffer, noen bommer på en identifiserbar måte, og minst to er grensetilfeller**
der fasiten skriver ut begge lesningene og merker oppgaven
**«(omstridt — begge forsvarlige)»**.

⚠ Bruk romertall **(i), (ii), (iii)** her hvis listen er selvstendige påstander
og ikke deloppgaver av én oppgave (§5.7) — ellers leser
`sjekk-statiskflervalg.py` a)–h) som et flervalg og måler fasiten feil.

### 8.5 Variantkatalogen (kap. 3.3)

Sju fenomenkort, ett per fenomen, hvert med fire felt: **hva som utløser det** ·
**hvordan det ser ut i klammer** · **hva som skjer med det mellom skråstreker** ·
**hvilken setning som forklarer det konkret**. Fenomenene er retrofleksjon,
aspirasjon, palatal frikativ, nasalassimilasjon, reduksjonsvokal,
stavelsesbærende konsonant og bitrykk som markør for sammensetning.

⚠ **Alle ord i kapitlet er nyskrevne.** Arkivets transkripsjons- og
segmenteringsord (§16) nevnes bare som dokumentasjon av **ordtypen** i kap. 1.3
og 3.3, og **transkriberes ikke** og brukes ikke som oppgave noe sted i boka.

---

## 9. LING1100 — hva som er tillatt, og hva som er forbudt

### 9.1 Rammen

Katalogen har allerede én lingvistikkbok: **LING1100 Innføring i semantikk og
pragmatikk** (UiO). Overlappet er reelt, men avgrenset — og det treffer bare de
**letteste** delene av EXFAC03-SPR: semantikk (12 av 114 poeng) og pragmatikk
(13 av 114), til sammen **25 av 114 poeng, 21,9 %**.

⚠ **Ingen av de fire sensorveiledningene nevner LING1100 med ett ord.** Det
finnes ingen dokumentert bro mellom emnene, og boka skal ikke antyde en.

⚠ **Den farlige retningen skal skrives ut i boka:** LING1100s dybde i semantikk
og pragmatikk overstiger EXFAC03-SPRs behov betydelig. **En student som leser
LING1100-kapitlene i stedet for sine egne, bruker tiden sin på 22 % av poengene
og mister de 70 % som ligger i strukturfagene.** Setningen skal stå i **kap. 0.1,
kap. 5.6 og kap. 6.1** (§9.3 forklarer hvorfor tre steder).

### 9.2 Den uttømmende lenketabellen

Ni lenker, i fem vertskapitler. **Alle ni målfilene er verifisert 6. august 2026:
de finnes i `src/lib/data/chapters/` OG er registrert i
`textbook-courses-hoyskole.ts`.**

| Vertskapittel | Lenke | Innramming |
|---|---|---|
| 5.6 | `[Tematiske roller, theta-grid og argument mot adjunkt](/ling1100/ling1100-6-1)` | ⚠ Den eneste lenken i Del 1–5. «Fordypning i et annet emne — theta-grid og proto-roller ligger utenfor det EXFAC03-SPR prøver.» Bærer 22 %-advarselen. |
| 6.1 | `[Meningsrelasjoner — synonymi, hyponymi, meronymi](/ling1100/ling1100-2-1)` | «Fordypning. LING1100 går mye dypere enn EXFAC03-SPR prøver.» Bærer 22 %-advarselen. |
| 6.1 | `[Antonymi i fem typer](/ling1100/ling1100-2-2)` | fordypning |
| 6.1 | `[Referanse og bestemte beskrivelser](/ling1100/ling1100-1-3)` | fordypning |
| 7.1 | `[Deiksis og Kaplans character mot content](/ling1100/ling1100-10-1)` | fordypning |
| 7.2 | `[Austin — performativ mot konstativ](/ling1100/ling1100-9-1)` | fordypning |
| 7.2 | `[Searles fem kategorier](/ling1100/ling1100-9-2)` | fordypning |
| 7.3 | `[Samarbeidsprinsippet og de fire maksimene](/ling1100/ling1100-8-1)` | fordypning |
| 7.3 | `[Implikaturens egenskaper og Horns Q og R](/ling1100/ling1100-8-2)` | fordypning |

**Reglene:**

- Lenkene er tillatt **kun** i de fem kapitlene over, og **kun** som fordypning:
  «vil du lenger ned i antonymitypene, står de i LING1100». **Aldri** som
  eksamensrelevant snarvei.
- **NULL lenker fra Del 1–4.** LING1100 har ingenting der, og en lenke ville vært
  et løfte boka ikke kan holde.
- **Ingen andre kryssbok-lenker i boka i det hele tatt** — verken til `ling1100`
  utenfor tabellen eller til andre emner. Vil du legge til en, kjør
  `ls src/lib/data/chapters/<id>.json` **og** grep etter id-en i
  `src/lib/data/textbook-courses*.ts` først; `sjekk-bok.py` avviser døde lenker,
  og en død lenke i en live bok er en synlig feil for leseren.

### 9.3 ⚠ Motsigelsen i skjelettet, og hvordan den er løst

Skjelettets §1.3 sier to ting som ikke kan være sanne samtidig:

- **«Ingen kryssbok-lenker fra Del 1–5»** (den generelle regelen), og
- **kap. 5.6 skal ha lenke til `ling1100-6-1`** — som står både i §1.3s egen
  tabell og i kap. 5.6s per-kapittel-kontrakt, med et påbudt følgeutsagn.

Kap. 5.6 ligger i Del 5. **Bindende løsning: den spesielle bestemmelsen vinner
over den generelle.** Begrunnelsen er faglig, ikke formell: LING1100 kap. 6.1
dekker faktisk theta-grid og argument mot adjunkt, og `EKSAMENSANALYSE.md` §10.2
fører semantiske roller og argument mot adjunkt opp som reelt overlapp. Den
generelle setningen er skrevet ut fra antakelsen om at overlappet er rent
semantisk og pragmatisk, og den antakelsen er én rad for smal.

**Regelen som gjelder, og som PORT C håndhever:** null lenker fra **Del 1–4**,
og i **Del 5 nøyaktig én — den i kap. 5.6**.

Sikkerhetshensynet bak den generelle regelen — at en student erstatter
strukturfagene med LING1100 — ivaretas ved at **kap. 5.6 bærer 22 %-advarselen i
fulltekst**, ikke bare den milde fordypningsrammen. Og fordi 5.6 kommer før 6.1 i
lesningen, mens skjelettet legger advarselen «i den første lenken som
forekommer» (som i §1.3 leses som 6.1), er kravet **her** at advarselen står i
**både 5.6 og 6.1** — samt i kap. 0.1. Da er den der uansett hvilken vei leseren
kommer.

### 9.4 PORT C — LING1100-lenkene (testet 6. august 2026)

Testet mot to fiksturer: den lovlige konfigurasjonen (sju kapitler, ni lenker,
advarsel i 0.1, 5.6 og 6.1) → **0 avvik** · en med en lenke i Del 2, et
ikke-hjemlet mål og manglende advarsel i 0.1 → **5 avvik, alle riktige**.

```bash
python3 - <<'EOF'
# PORT C — EXFAC03-SPR: LING1100-lenkene er uttømmende og hjemlet per kapittel.
import glob, json, os, re, sys
GLOB = sys.argv[1] if len(sys.argv) > 1 else "src/lib/data/chapters/exfac03-spr-*.json"
TILLATT = {
    "5-6": {"ling1100-6-1"},
    "6-1": {"ling1100-2-1", "ling1100-2-2", "ling1100-1-3"},
    "7-1": {"ling1100-10-1"},
    "7-2": {"ling1100-9-1", "ling1100-9-2"},
    "7-3": {"ling1100-8-1", "ling1100-8-2"},
}
ADVARSEL = {"0-1", "5-6", "6-1"}          # her SKAL 22-prosent-advarselen stå
LENKE  = re.compile(r"/ling1100/(ling1100-\d+-\d+)")
RAMME  = re.compile(r"fordypning|går (?:mye )?dypere|utenfor det EXFAC03-SPR prøver|annet emne", re.I)
VARSEL = re.compile(r"22\s*(?:%|prosent)", re.I)
def strenger(o):
    if isinstance(o, str): yield o
    elif isinstance(o, dict):
        for v in o.values(): yield from strenger(v)
    elif isinstance(o, list):
        for v in o: yield from strenger(v)
avvik, n, sett = [], 0, set()
filer = sorted(glob.glob(GLOB))
if not filer: sys.exit("fant ingen kapittelfiler")
for p in filer:
    navn = os.path.basename(p); kap = navn[:-5].replace("exfac03-spr-", "")
    tekst = " ".join(strenger(json.load(open(p, encoding="utf-8"))))
    if VARSEL.search(tekst) and "LING1100" in tekst.upper(): sett.add(kap)
    treff = set(LENKE.findall(tekst)); n += len(treff)
    lov = TILLATT.get(kap, set())
    for t in treff - lov:
        avvik.append(f"{navn}: lenker til {t} — ikke hjemlet. Kap. {kap} har lov til: {sorted(lov) or 'ingen'}")
    if treff and not RAMME.search(tekst):
        avvik.append(f"{navn}: LING1100-lenke uten fordypningsramme i kapitlet")
    if treff and kap.split('-')[0] in {"1", "2", "3", "4"}:
        avvik.append(f"{navn}: LING1100-lenke i Del {kap.split('-')[0]} — Del 1–4 skal ha NULL lenker")
for k in sorted(ADVARSEL - sett):
    avvik.append(f"kap. {k}: mangler advarselen om at LING1100 dekker 22 % av poengene")
print(f"{len(filer)} filer · {n} LING1100-lenker · avvik: {len(avvik)}")
for a in avvik: print(" -", a)
sys.exit(1 if avvik else 0)
EOF
```

**Porten skal gi null avvik, og totalen skal være nøyaktig 9 lenker.**

---

## 10. MODELLBESVARELSER (ærlighet, nivå og variasjon)

### 10.1 Ærlig merking — ufravikelig

- Hver modellbesvarelse innledes med én linje, testet mot PORT B og lovlig:
  **«Nyskrevet modellbesvarelse — skrevet av oss for denne boka. EXFAC03-SPR-arkivet
  har fire sensorveiledninger som beskriver hva sensor forventer, men ingen
  publiserte besvarelser og ingen løsninger fra UiO. Dette er derfor ikke en ekte
  kandidatbesvarelse.»**
  ⚠ **Skriv aldri «ingen fasit fra UiO»** — den formen felles av porten. «Ingen
  løsninger fra UiO» sier det samme og passerer.
- **En boks som heter «Besvarelse i C-sjiktet» skal VÆRE en C** — tittel, tekst,
  poengregnskap og margnotater skal stemme, og summen skal faktisk lande i
  45,5–51,5 av 65 poeng. En polert A merket som C er en byggefeil.
  Samme for besvarelsen på marginen: den skal faktisk lande så vidt over 30 av 65.
- Ordet «studentbesvarelse» er forbudt i bokinnholdet (grep-sjekkes, §13.4).
- **Oppgavene er nyskrevne, også når de ligner** (§16).

### 10.2 Meta-fasit er FORBUDT

«En A-besvarelse ville her ha …» er en regibemerkning, ikke en fasit.
**Drøftelsen, transkripsjonen, segmenteringen og treet skal skrives UT.**
Grep-sjekkes: `en A-besvarelse ville|en toppbesvarelse ville|ville ha drøftet|
ville pekt på` = 0 treff.

Margnotater er lov og ønsket, men de skal **peke på tekst som faktisk står der**:
`> Margnotat: her navngis omgivelsen — «foran f» — i stedet for å nevne nasalassimilasjon som regel. Det er nettopp denne konkretiseringen H2025 gir poeng for, og den generelle formen null.`

### 10.3 Nivåfordeling og profilvariasjon (bindende)

| Kapittel | Nivåer som SKAL finnes | Profil |
|---|---|---|
| 0.2 | innstegsoppgaven på ett nivå + sjangerkortet | — |
| 10.1–10.7 | momentliste (må / pluss / feller) + poengregnskap på hver oppgave | — |
| **10.9** | **A-sjikt + C-sjikt + på marginen**, alle tre poengsatt per delspørsmål | A-en lander **skarpt** der oppgaven inviterer til det (se 10.4); C-en har tre gjenkjennelige tap; margin-besvarelsen viser terskelen NEDENFRA |

**Besvarelsen på marginen** er ikke pynt. Leseren trenger et realistisk
sammenligningspunkt, ikke bare polert A og karikert C — og i et emne der
E-terskelen er 30 av 65 poeng, er «hva som faktisk skal til for å komme gjennom»
et konkret, tellbart spørsmål boka kan svare presist på.

Etter hver besvarelse: **oppgraderingsmenyen** — hva som skiller denne
besvarelsen fra den over, punkt for punkt, **med poengverdi på hvert punkt**.
Rammes inn som meny, ikke som mangelliste.

### 10.4 Konklusjonsvariasjon (bindende)

- **A-besvarelsen skal konkludere SKARPT i klassifiseringsoppgavene.** Den tar
  klart standpunkt i polysemi/homofoni-spørsmålet og i typologioppgaven, med
  begrunnelsen utskrevet — og er likevel toppnivå. Margnotat: «Forbehold er et
  verktøy, ikke obligatorisk garnityr. En skarp, begrunnet konklusjon er en
  fullgod A-form — og H2025 sier uttrykkelig at flere konklusjoner godtas når de
  er godt begrunnet.»
- **Men i transkripsjonsoppgaven skal A-en vise det motsatte:** at to ulike
  transkripsjoner begge er fullt tellende når hver er konsistent med sin oppgitte
  bakgrunn (§8.3).
- Ikke alle modellbesvarelser skal lande på samme kompromissform.

---

## 11. Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»; SKAL i førsteutkastet)

- **Kun eksamensrelevant stoff.** «Bør kjenne til»-stoffet (PRO og kontroll i
  kap. 5.7, behaviorisme og mentalisme og retorikkens fem faser i kap. 9.3)
  plasseres SIST i sin del og merkes eksplisitt med sin lave frekvens.
  ⚠ **Men lavfrekvens gir færre minutter, aldri stryking.** Språkendring falt til
  null poeng i H2025 og står likevel i 4 av 6 terminer; H2025 innførte samtidig
  en helt ny oppgaveform. **Alle ti saksområdene skal dekkes**, og ingen agent
  skal skrive at et tema «neppe kommer igjen».
- **HARDT LINJEBRUTT PROSA ER FORBUDT (rendrings-kritisk).** Rendreren gjør HVERT
  enkelt `\n` om til `<br />`. Regelen: **ett avsnitt = én lang linje i
  JSON-strengen**, `\n\n` mellom avsnitt, og enkelt `\n` KUN der linjeskiftet
  faktisk er ønsket (deloppgaver, listelinjer, tabellrader, margnotater,
  trelinjer i kodeblokk). Gjelder `content`, `problem`, `solution`, `task` og
  `hints`.
- **Godt, flytende norsk bokmål (UFRAVIKELIG).** Hele setninger, korte avsnitt
  (2–4 setninger), aktiv «du»-form. Telegramstil er FORBUDT — «Sted: alveolar.
  Måte: frikativ. Stemthet: ustemt.» skrives «Lyden er ustemt, den lages ved
  alveolarkanten, og luften presses gjennom en trang passasje — den er altså en
  ustemt alveolar frikativ». **Konkret norsk knagg før fagtermen**, og i denne
  boka betyr det: si hva munnen gjør før du sier hva det heter.
- **Hver oppgave synlig eksamensforankret** med sjangerens navn i ledende
  parentes:
  `(Eksamenssjanger transkripsjon — TRA; slike oppgaver ber om begge nivåer, din oppgitte bakgrunn og en forklaring som navngir konkrete tegn, og gir 10 av 65 poeng med trekk 0,5 per feil.)`
  Sjangerkoden skrives fullt ut ved første bruk per kapittel. Vanskelighetsgraden
  skrives ALDRI inn i `task` (den ligger i `difficulty`).
- **Deloppgaver merkes a), b), c) — ALDRI (i), (ii), (iii).** Ufravikelig
  produkteierregel. Hver deloppgave starter på **egen linje med merket i fet**:
  `…\n\n**a)** …\n**b)** …`. ALDRI a) b) c) bak hverandre i løpende tekst, aldri
  A)/[A]. Ikke bruk `subTasks`. **Eneste unntak:** ja/nei- og
  konsistensvurderingslister av SELVSTENDIGE påstander i prøvekapitler (§5.7).
  ⚠ Retter du noe her, må oppgave OG fasit rettes i samme operasjon, og
  prosahenvisninger uten parentes («i ledd b og c») byttes ikke av et søk etter
  `**b)**`.
- **Inline-nummerering** `(1) … (2) … (3) …` med tre eller flere påfølgende settes
  på egne linjer. Gjelder særlig de tre konsonantaksene, de fire vokalaksene, de
  tre trinnene i uttalekontrakten, de fem trinnene i segmenteringen, de seks i
  transkripsjonsprosedyren og de seks i trebyggingen — de skal uansett stå som
  egne linjer, i rekkefølge.
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. 2.2](/exfac03-spr/exfac03-spr-2-2)`. Død «se kapittel
  X.Y»-tekst er FORBUDT. Aldri lenker i `title`-felt.
- **Karakter-realisme:** Del 0 sier eksplisitt at **C er en god og vanlig
  karakter**, og hva C faktisk krever (45,5–51,5 av 65 poeng, altså 70–79 %).
  Formuleringen **«Prioritet: perfekt» er FORBUDT** — skriv «høyeste prioritet».
  Prioritetsklassene oversettes: *perfekt* → **høyeste prioritet**, *kunne* →
  **bør beherskes**, *kjenne* → **bør kjenne til**. «Gapet til A» rammes inn som
  **oppgraderingsmeny**. ⚠ **All karaktersjargong bæres av forbeholdet i §6.4** —
  skalaen var todelt så sent som H2022, og det finnes ingen kvalitativ
  karakterbeskrivelse i noen veiledning.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter HVER prøvefasit, etter hver
  drillfasit og etter hver besvarelse i kap. 10.9 — bruk rubrikkene i §6.4.
  I hvert temakapittel: minst én **lett innstegsoppgave** tidlig
  (`difficulty: "lett"`, ren gjengivelse med egne ord) før første fulle
  eksamenssjanger.
- **Hverdagsanker + verdens-caser.** Eksempelordene er ekte norske ord fra
  verden, ikke konstruerte metaeksempler av typen «en medstudent skriver …».
  Setningene i treoppgavene handler om noe.
- **Difficulty-spredning + kalde banker:** boka skal ha genuint krevende oppgaver
  merket `difficulty: "vanskelig"` (minst én per temadel), ikke alt på middels.
  **Én merket kald bank i hvert drillkapittel** (1.5, 2.4, 3.3, 4.3, 5.4) og i
  kap. 10.8 — fasit = ren momentliste, eksplisitt merket.
- **Hint på alle oppgaver:** hvert `exercise` har utfylte `hints`. **Første hint
  er første grep, testen eller termen** («Start med å høre etter
  sammensetningsfugen — hvor faller bitrykket?»), andre hint er neste trinn —
  **ALDRI konklusjonen**. Eneste unntak er de merkede kalde bankene.
- **Signal- og hintbokser ETTER oppgaven**, aldri foran (§5.3).
- **Stokket flervalg og varierte fasit-mønstre:** statiske flervalg i
  prøve-`collapsible`-er har stokkede fasit-bokstaver (ALDRI «alle a»), og
  prøve-tipen sier hvor flervalget bor. Gjelder ALLE ensartede fasitlister, også
  gyldighetsdrillen i 3.2 og feilgjenkjenningsdrillen i 10.8 — aldri «alle
  felle», aldri samme fasit to ganger på rad. Verifiseres med
  `sjekk-fasitfordeling.py` og `sjekk-statiskflervalg.py`.
- **Distraktorer straffer aldri grundig lesing:** en distraktor gjengir ALDRI
  bokas egen presisering som «galt» svar. Ligger en distraktor nær sannheten
  (typisk: «komplementær distribusjon betyr at lydene aldri står i samme ord»,
  «en biallofon er den som forekommer sjeldnest», «full synonymi betyr samme
  referanse»), skal `explanation` forklare eksplisitt hvorfor den ikke holder.
- **Begrepsbank = oppslagsverk:** hver stor begrepsbank åpner med
  standardnotisen: «Begrepsbanken er flashcard- og repetisjonsstoff — den gjentar
  det du nettopp har lest. Hopp trygt over ved førstegangslesing; tidsanslaget
  for kapitlet gjelder kjernestoffet.» `definition`-blokker slettes ALDRI for å
  «rydde» — de er flashcard-kilden (§12.2).
- **Øktmerking:** alle kapitler med `estimatedMinutes > 45` — det er **40 av de
  47** (alle unntatt 0.1 på 40, 5.7 og 9.1 på 45, 9.3 på 45, 10.2, 10.3 og 10.7
  på 45) — har tidsanslag i underoverskriftene («## Retroflekser (~15 min)»)
  eller eksplisitte «— naturlig pausepunkt —»-markører. **Kap. 3.3, 4.3, 5.4,
  10.8 og 10.9 SKAL ha «— naturlig pausepunkt —» midtveis** (skjelettkrav).
  ⚠ Overskriften bærer NAVNET, aldri løkkenummeret (§1).
- **Tidsbudsjett-konsistens:** der en oppgaves deklarerte tid avviker fra summen
  av deltidene, forklares differansen (§6.6).

### 11.1 Del 0-pakken (alt dette SKAL finnes i kap. 0.1, der ikke annet er sagt)

- **«Slik leser du denne boka»-orienteringsboks** (type `text` eller `tip` —
  **ALDRI `definition`**, det ville endret flashcard-kvoten) med: karakterskalaen
  A–F med hele forbeholdet fra §6.4, at **C er en god og vanlig karakter**, den
  kompakte kodelista for de sju sjangrene skrevet fullt ut, og at typiske feil
  har et samlet register (#1–#16) med eget kapittel (10.8).
- **«Lite tid?»-boks** (`tip`): hurtigrute for 3–5 dager som prioriterer Del 1–5
  — de tre tunge saksområdene — pluss kap. 0.2, 10.5 og 10.8, med ukeplan bygget
  av summerte `estimatedMinutes`. **Summen av de 47 kapitlene er eksakt 2 570
  minutter ≈ 42,8 timer lesetid**; prøvekapitlene kommer i tillegg. Anslagene er
  **LESEtid** og ganges med ca. 1,5 ved håndskriving.
- **Deltidsrute 10–12 uker** med temadelprøvene fordelt underveis, sjangerprøven
  midtveis og de tre øvingseksamenene de siste to ukene — aldri stablet i siste uke.
- **«Lese mye, skrive lite»-boks:** legitim rute for lese-øveren (les oppgaven →
  sett opp prosedyren mentalt i tre trinn → les modellbesvarelsen som sensor) +
  minimumsrådet: skriv minst ÉN full transkripsjon med begrunnelsesledd, ÉN full
  segmentering og ÉTT tre på tid.
- **Kildenoten** — ordlyden i §6.1.1, aldri utvidet.
- **Temafrekvenstabellen** som leserens prioriteringskart, med alle tre nevnerne
  og enhetene skrevet ut (§6.2), og med den eksplisitte setningen om at
  **strukturfagene er 80 av 114 poeng (70,2 %)** — 35 av 49 i H2022 og 45 av 65 i
  H2025 — og at andelen er praktisk talt uendret over tre år og to helt ulike sett.
- **Sjangerkortet på ÉN side** som ER kortet (bor i kap. 0.2): sjanger → én
  linjes bestilling → typisk poeng → førstegrep → vanligste feil. Ikke en lenkeliste.
- **Prosedyrekortet** for de tre tunge prosedyrene — transkripsjon, segmentering,
  tre — hver som en nummerert trinnliste på under ti linjer.
- **Termkortet:** de seks obligatoriske termene med hjemmel og setningsmal
  (§13.3). Emnets billigste poeng, på et halvt ark.
- **Eksamensformens tre former** og korona-forbeholdet (§6.6), med den eksplisitte
  setningen om at dagens eksamen krever svar på alt, mens eldre sett kandidaten
  trener på hadde en mildere regel.
- **«På vei ut»-tabellen** fra skjelettets §2, med forbeholdet om at seks
  terminer med ni års hull ikke kan bære en utfasingspåstand — og med den
  motsatte påminnelsen ved siden av: H2025 innførte en helt ny oppgaveform.
- **«Hva vi ikke vet»** — de fem tingene som ikke står i arkivet (§6.1 punkt 7)
  og de ni terminene som mangler. Leseren har krav på å vite hvor boka slutter å
  ha belegg.
- **LING1100-advarselen** (§9.1).
- **IPA-orienteringen:** at tegnene limes inn fra et vedlagt dokument på en
  digital eksamen, at det tar tid, og at boka bruker vanlig ASCII-g fordi det er
  tegnet studenten har på tastaturet (§7.1 regel 8).

---

## 12. Kvotekontrakt (AUTORITATIV — bindende total, aldri overstyr)

Verifisert mot skjelettets kvotesammendrag: alle elleve deltotaler og alle tre
totaler summerer, og summen av `estimatedMinutes` er **eksakt 2 570**.

| Del | Kapitler | Quiz | Flashcards | Minutter | Prøver |
|---|---|---|---|---|---|
| 0 | 0.1–0.2 | 30 | 26 | 90 | 0 |
| 1 | 1.1–1.5 | 112 | 108 | 295 | 4 |
| 2 | 2.1–2.4 | 82 | 74 | 225 | 4 |
| 3 | 3.1–3.3 | 60 | 42 | 190 | 4 |
| 4 | 4.1–4.5 | 104 | 98 | 285 | 4 |
| 5 | 5.1–5.7 | 144 | 136 | 390 | 4 |
| 6 | 6.1–6.3 | 60 | 60 | 160 | 4 |
| 7 | 7.1–7.3 | 64 | 66 | 165 | 4 |
| 8 | 8.1–8.3 | 56 | 52 | 165 | 4 |
| 9 | 9.1–9.3 | 54 | 56 | 150 | 4 |
| 10 | 10.1–10.9 | 116 | 74 | 455 | 4 |
| **Sum** | **47 kap.** | **882 ✓ (≥500)** | **792 ✓ (≥500)** | **2 570** | **40** |

Per kapittel (quiz · flashcards · minutter) — **minimum, aldri under;
overskyting er lov**:

| Kap. | Q · F · min | Kap. | Q · F · min | Kap. | Q · F · min |
|---|---|---|---|---|---|
| 0.1 | 14 · 12 · 40 | 4.1 | 20 · 22 · 50 | 7.1 | 20 · 20 · 50 |
| 0.2 | 16 · 14 · 50 | 4.2 | 24 · 24 · 60 | 7.2 | 22 · 24 · 60 |
| 1.1 | 24 · 26 · 60 | 4.3 | 22 · 12 · 70 | 7.3 | 22 · 22 · 55 |
| 1.2 | 22 · 24 · 55 | 4.4 | 20 · 22 · 55 | 8.1 | 20 · 20 · 55 |
| 1.3 | 24 · 24 · 60 | 4.5 | 18 · 18 · 50 | 8.2 | 20 · 20 · 50 |
| 1.4 | 24 · 26 · 55 | 5.1 | 22 · 24 · 50 | 8.3 | 16 · 12 · 60 |
| 1.5 | 18 · 8 · 65 | 5.2 | 24 · 24 · 60 | 9.1 | 16 · 16 · 45 |
| 2.1 | 22 · 24 · 55 | 5.3 | 20 · 20 · 50 | 9.2 | 22 · 22 · 60 |
| 2.2 | 22 · 22 · 55 | 5.4 | 22 · 14 · 75 | 9.3 | 16 · 18 · 45 |
| 2.3 | 20 · 20 · 55 | 5.5 | 20 · 18 · 55 | 10.1 | 14 · 8 · 50 |
| 2.4 | 18 · 8 · 60 | 5.6 | 20 · 20 · 55 | 10.2 | 14 · 8 · 45 |
| 3.1 | 20 · 18 · 55 | 5.7 | 16 · 16 · 45 | 10.3 | 12 · 8 · 45 |
| 3.2 | 18 · 14 · 60 | 6.1 | 22 · 24 · 55 | 10.4 | 14 · 8 · 55 |
| 3.3 | 22 · 10 · 75 | 6.2 | 20 · 20 · 50 | 10.5 | 14 · 10 · 50 |
| | | 6.3 | 18 · 16 · 55 | 10.6 | 12 · 8 · 50 |
| | | | | 10.7 | 12 · 8 · 45 |
| | | | | 10.8 | 16 · 10 · 55 |
| | | | | 10.9 | 8 · 6 · 60 |

**Bindende total: quiz 882 · flashcards 792 · 2 570 minutter.** Flashcards telles
som **toppnivå `definition`-blokker med `title`** (verifisert i
`flashcard-definitions.ts`). Prøvekapitler har ingen kvote (ingen quiz, ingen
begrepsbank).

⚠ **Tell 47 quizfiler FØR `wire-bok.py` kjøres.** JUROFF1500 ble wiret med 750 av
774 spørsmål fordi ett kapittels quizfil ble skrevet etter wiringen, og bokporten
var grønn likevel.

### 12.1 Quiz-filformat

`src/lib/data/quiz-staging/exfac03-spr-<del>-<nr>.quiz.json`:

```json
[{ "question": "…", "options": ["riktig", "distraktor", "distraktor", "distraktor"], "explanation": "…" }]
```

Nøyaktig **4 alternativer**, `options[0]` **ALLTID** riktig. **Runtime stokker
rekkefølgen** (`quiz-client.tsx` kaller `shuffleArray(q.options)`), så
`explanation` skal ALDRI si «alternativ to», «det tredje alternativet», «svaret
over» eller «det siste alternativet» — gjenta innholdet i stedet: «Riktig svar er
at hovedallofonen er varianten med den videste distribusjonen …».
**Posisjonsreferanser er en hard produkteierregel** (verifiseres med
`sjekk-alternativref.py`, som **leser quiz-staging direkte** og altså kan kjøres
før wiring). Ingen duplikate alternativer. `explanation` på 2–4 setninger sier
hvorfor fasiten er riktig OG hvilken felle hver nære distraktor tester.

⚠ **IPA i quiz-alternativer** følger §7: direkte Unicode, ingen LaTeX, ingen
`$…$`. Et alternativ som består av en transkripsjon, settes **uten** backticks i
`options`-strengen — alternativene rendres ikke som markdown.

**LENGDE-TELL (hard produkteierregel):** fasiten skal ikke systematisk være det
lengste alternativet. En leser som «velger det lengste» skal treffe ~25 %,
ikke 77 %.

⚠ **Dette MÅLES, og førsteutkast lander erfaringsmessig på 60–80 %.** Grunnen er
strukturell: fasiten er den presise regelen, og presisjon koster ord, mens en
distraktor er lett å skrive kort. **Rettemåten er å FORLENGE DISTRAKTORENE**,
aldri å trimme fasiten til den blir upresis — en distraktor skal være en
fullverdig, plausibel formulering som er gal på ett punkt.

⚠⚠ **Og her er tallet som overrasker, målt på fikstur 6. august 2026:** porten
teller **strengt lengste**, ikke «mye lengre». Et forsøk der distraktorene ble
skrevet ut til nesten samme lengde som fasiten ga fortsatt **100 %** — fasiten
var bare 8 tegn lengre, og det holdt. **Kravet er derfor operasjonelt, ikke
estetisk: i omtrent tre av fire spørsmål skal MINST ÉN DISTRAKTOR være
LENGRE enn fasiten.** Roterer du hvilket av de fire alternativene som er lengst,
lander banken på 25 % — verifisert på fikstur.

`quiz-lengdesjekk.mjs` leser `quiz-data-<emne>.ts`, som først finnes **etter**
wiring. Bruk denne staging-varianten mens du bygger; den speiler metrikken og
terskelen på 35 %, og sjekker samtidig alternativantall og duplikater:

```bash
python3 - <<'EOF'
# LENGDE-TELL PÅ STAGING — speiler quiz-lengdesjekk.mjs (terskel 35 %) FØR wiring.
import glob, json, os, sys
G = sys.argv[1] if len(sys.argv) > 1 else "src/lib/data/quiz-staging/exfac03-spr-*.quiz.json"
filer = sorted(glob.glob(G))
if not filer: sys.exit("fant ingen quizfiler i staging")
tot = strict = longest = shortest = 0; verst = []; feil = []
for p in filer:
    navn = os.path.basename(p)
    for i, q in enumerate(json.load(open(p, encoding="utf-8"))):
        o = q.get("options") or []
        if len(o) != 4: feil.append(f"{navn}[{i}]: {len(o)} alternativer — skal være nøyaktig 4")
        if len(set(o)) != len(o): feil.append(f"{navn}[{i}]: duplikate alternativer")
        if not o: continue
        tot += 1; L = [len(str(x)) for x in o]; mx = max(L)
        if L[0] == mx: longest += 1
        if L[0] == mx and L.count(mx) == 1:
            strict += 1; verst.append((L[0] - max(L[1:]), navn, str(q.get("question", ""))[:60]))
        if L[0] == min(L): shortest += 1
pct = lambda n: f"{100*n/tot:.0f} %"
print(f"{len(filer)} filer · {tot} spørsmål · fasit eneste lengst: {strict} ({pct(strict)}) · "
      f"delt lengst: {longest} ({pct(longest)}) · korteste: {shortest} ({pct(shortest)})")
for f in feil[:20]: print(" -", f)
if strict / tot > 0.35:
    print(f"⚠️ LENGDE-TELL: {pct(strict)} over taket på 35 % — FORLENG DISTRAKTORENE, ikke kort ned fasiten.")
    for g, n, q in sorted(verst, reverse=True)[:8]: print(f"   +{g} tegn [{n}] «{q}…»")
sys.exit(1 if feil or strict / tot > 0.35 else 0)
EOF
```

**Distraktor-kalibrering** — nabobegrep-distraktorer, aldri tullesvar:
`ç` mot `ʃ` · retrofleks mot dental · aspirert mot uaspirert · fon mot fonem mot
allofon · komplementær distribusjon mot fri variasjon · hovedallofon mot
biallofon · avledningsformativ mot bøyningsformativ mot sammensetningsformativ ·
rot mot stamme · ordklasse mot setningsledd · frasekategori mot funksjon ·
temaposisjon mot finittposisjon · argument mot adjunkt · polysemi mot homonymi mot
homofoni · synonymi mot delvis synonymi · performativ mot konstativ · hode mot
dependent · markert mot umarkert · assimilasjon mot bortfall mot omlyd · synkroni
mot diakroni. I tillegg **«hvilken feil begår denne kandidaten»**-spørsmål bygget
på de seksten feilkodene, og **«hvilken obligatorisk term mangler i dette
svaret»**-spørsmål.

**Fasitfordelingen rebalanseres til slutt** (jevn a/b/c/d) — men rebalanseringen
kjøres på quiz-filene, aldri på statiske flervalg i prøvetekster uten at fasiten
rettes i samme operasjon.

### 12.2 Flashcard-profil

Hovedvekten ligger på **symbol ↔ beskrivelse ↔ eksempelord**, fordi det er
nøyaktig presisjonen beskrivelsesoppgaven måler, og på **term ↔ definisjon ↔
test**. Fem korttyper:

1. **Symbolkort** — IPA-symbol ↔ stemthet, sted og måte ↔ norsk eksempelord ·
   vokalsymbol ↔ høyde, plassering, rundethet, lengde ↔ eksempelord.
2. **Fenomenkort** — fenomen ↔ hva som utløser det ↔ hva som skjer med det
   mellom skråstreker.
3. **Sondringskort** — begrepspar med forskjellen som svar: fon/fonem/allofon ·
   hovedallofon/biallofon · rot/stamme · de tre formativtypene · ordklasse/ledd ·
   temaposisjon/finittposisjon · argument/adjunkt · polysemi/homonymi/homofoni.
4. **Testkort** — setningsledd ↔ testen som identifiserer det ↔ typisk
   frasekategori · betydningsrelasjon ↔ testen · lydendringstype ↔ omgivelsen som
   utløser den.
5. **Termkort** — obligatorisk term ↔ hvilken oppgave den hører til ↔
   setningsmalen som får den inn naturlig.

⚠ **Flashcards genereres KUN fra toppnivå `definition`-blokker med `title`** —
begrepsbankene må derfor bygges som ekte `definition`-blokker, ikke som
tekstlister. Flytter du en definisjon inn i en `collapsible` for å «rydde»,
forsvinner kortet fra kvoten.

---

## 13. Fagspesifikk stil (ufravikelig for EXFAC03-SPR)

### 13.1 Notasjonsstandard

- **Norsk bokmål. Emnet er FORMELFRITT: ingen matematisk notasjon, ingen `$…$`
  noe sted** — heller ikke escapet. IPA-notasjonen står i §7.
- **Tallformat:** norsk desimalkomma («trekk 0,5 per feil», «58,5 poeng»),
  prosent med mellomrom («70,2 %»). Terminer skrives **«H2025»** og aldri «h25»,
  «høsten -25» eller «V-noe» (§13.4). Spørsmålsnumre skrives «H2025-4».
- **Poeng skrives med nevner:** «10 av 65 poeng», aldri «10 poeng» alene der
  nevneren finnes.
- **Trekk skrives i ren tekst:** «trekk 0,5 per feil», «minus 0,5 poeng per
  feilanalysert setningsledd».
- **Verktitler** skrives med «anførselstegn» i `title`-felter og i kursiv i
  brødtekst. ⚠ **Men pensumboka har ingen tittel i denne boka** — den navngis
  aldri (§16).
- **Ortografi i kursiv, betydning i enkle anførselstegn:** *kjeks* ‘kjeks’.
- **Skrivemåter (grep-konsistens):** «artikulasjonssted» / «artikulasjonsmåte» /
  «stemthet» · «bilabial» / «labiodental» / «dental» / «alveolar» /
  «postalveolar» / «retrofleks» / «palatal» / «velar» / «uvular» / «glottal» ·
  «apiko-» / «lamino-» / «dorso-» · «plosiv» / «nasal» / «frikativ» /
  «approksimant» / «lateral» / «tapp» / «vibrant» / «affrikat» · «tungehøyde» /
  «fremre» / «bakre» / «rundethet» / «lengde» · «vokalfirkanten» · «diftong» ·
  «reduksjonsvokal» · «aspirasjon» · «retrofleksjon» · «nasalassimilasjon» ·
  «stavelsesbærende konsonant» · «tjukk l» · «hovedtrykk» / «bitrykk» ·
  «fon» / «fonem» / «allofon» · «distinktiv opposisjon» · «minimalt par» ·
  «komplementær distribusjon» / «fri variasjon» · «hovedallofon» / «biallofon» ·
  «ansats» / «kjerne» / «koda» · «åpen» / «lukket stavelse» ·
  «sonoritetshierarkiet» / «sonoritetsprinsippet» · «fonetisk» / «fonemisk
  transkripsjon» · «uttalekontrakten» · «morf» / «morfem» / «allomorf» ·
  «nullmorf» · «rot» / «stamme» · «avledningsformativ» / «bøyningsformativ» /
  «sammensetningsformativ» · «fugemorf» · «segmentering» · «orddanning» ·
  «konversjon» / «forkorting» / «sammentrekning» / «tilbakedanning» ·
  «bøyningsklasse» / «paradigme» · «ordklasse» / «frase» / «hode» / «utfylling» ·
  «nominalfrase» / «verbalfrase» / «adjektivfrase» / «adverbfrase» /
  «preposisjonsfrase» · «flyttetesten» / «erstatningstesten» / «spørsmålstesten» ·
  «SUBJEKT» / «FINITT VERBAL» / «INFINITT VERBAL» / «DIREKTE OBJEKT» /
  «SUBJEKTSPREDIKATIV» / «ADVERBIAL» · «helsetning» / «leddsetning» /
  «subjunksjonal» / «innleiring» · «konstituenttre» / «tilhekting» ·
  «temaposisjon» / «finittposisjon» / «setningsskjema» · «argument» / «adjunkt» /
  «argumentstruktur» · «semantisk rolle» / «agens» / «patiens» / «mottaker» /
  «instrument» / «erfarer» · «PRO» / «kontroll» / «subjektskontroll» /
  «objektskontroll» · «betydning» / «referanse» · «synonymi» / «antonymi» /
  «hyponymi» / «hyperonymi» / «meronymi» · «polysemi» / «homonymi» / «homofoni» /
  «homografi» · «konnotasjon» / «bruksbetingelser» / «sosial betydning» ·
  «språklig kontekst» / «situasjonskontekst» / «kulturkontekst» · «deiktisk
  uttrykk» · «performativ» / «konstativ» · «vellykkethetsbetingelser» / «talerens
  autorisasjon» · «samarbeidsprinsippet» / «maksime» / «implikatur» /
  «maksimebrudd» · «hode» / «dependent» · «markert» / «umarkert» / «ikonisitet» /
  «økonomi» · «glossert materiale» · «synkroni» / «diakroni» · «betinga
  lydendringer» · «assimilasjon» / «bortfall» / «innskudd» / «omlyd» / «metatese»
  / «sammensmelting» · «urnordisk» / «norrønt» · «behaviorisme» / «mentalisme».

### 13.2 Sjangerkodene (introduseres i kap. 0.1, skrives fullt ut ved første bruk per kapittel)

**Kodene er byggespråk og skal ALDRI stå alene.** Skriv alltid sjangerens navn
først, koden i parentes. **Ingen kald kode i `competenceGoals` eller i kapitlets
aller første tekstboks.**

| Kode | Navn som skal brukes | Frekvens (nevner 6 terminer) |
|---|---|---|
| **TRA** | transkripsjonsoppgaven | 4 av 6 terminer · 10 av 65 poeng i H2025 |
| **BES** | beskrivelsesoppgaven | 3 av 6 terminer · 1 poeng per beskrivelse, ingen delpoeng |
| **SEG** | segmenteringsoppgaven | 3 av 6 terminer · 10 av 65 poeng, 2 poeng per ord |
| **TRE** | treoppgaven | 4 av 6 terminer · 10 av 65 poeng i H2025, 5 av 49 i H2022 |
| **RED** | redegjørelsesoppgaven | 6 av 6 terminer — den vanligste byggeklossen |
| **EGE** | egeneksempel-oppgaven | 6 av 6 terminer |
| **KLA** | klassifiserings- og begrunnelsesoppgaven | 3 av 6 terminer (fire belegg) |

### 13.3 De seks obligatoriske termene og feilkodene #1–#16

**De seks termene** — den billigste poengkilden i emnet, drilles samlet i
kap. 10.5:

| term | hjemmel | eierkapittel |
|---|---|---|
| **betinga lydendringer** (fellesbetegnelsen) | H2018 | 9.2 |
| **kontroll** (om PRO) | H2018 | 5.7 |
| **tema(tiserings)posisjon** | H2020 | 5.5 |
| **finittposisjon** | H2020 | 5.5 |
| **performativ** — brukt OG forklart | H2025 | 7.2 |
| **talerens autorisasjon** | H2025 | 7.2 |

**Feilkodene #1–#16** (glosses i klarspråk ved første bruk PER KAPITTEL):

| # | Feil | Hovedhjem |
|---|---|---|
| #1 | transkribere uten å oppgi språklig bakgrunn | 3.2 |
| #2 | transkribere inkonsistent med den bakgrunnen man oppga | 3.2 |
| #3 | forklare nivåforskjellen med en generell frase i stedet for konkrete tegn | 3.1 |
| #4 | nevne fagtermer uten å forklare systematikken bak dem | 1.1 |
| #5 | hoppe over ett av oppgavens ledd | 0.1 |
| #6 | gi et eksempel uten å begrunne det | 0.2 |
| #7 | gi færre eksempler enn oppgaven ber om | 4.4 |
| #8 | svare på et klassifiseringsspørsmål uten begrunnelse | 0.2 |
| #9 | tro at et klassifiseringsspørsmål har ett riktig svar | 6.2 |
| #10 | utelate fellesbetegnelsen i språkendringsoppgaven | 9.2 |
| #11 | analysere setningsstruktur uten posisjonstermene | 5.5 |
| #12 | begrunne PRO uten å nevne kontroll | 5.7 |
| #13 | definere synonymi som identisk referanse | 6.3 |
| #14 | beskrive en performativ setning uten term og uten talerens autorisasjon | 7.2 |
| #15 | gjengi lærebokas eksempler i stedet for å lage egne | 10.6 |
| #16 | beskrive et fonem så løst at det ikke skiller det fra andre fonemer | 1.2 |

**Registeret har nøyaktig seksten koder.** Ikke innfør en syttende noe sted.
Hele registeret gjennomgås i kap. 10.8 — med ærlighetsforbeholdet fra §6.1
punkt 6, som **ikke har noe unntak i denne boka**: ingen av de fire veiledningene
rapporterer observerte studentfeil.

### 13.4 PORT B — forbudt-termer og talldisiplin (testet 6. august 2026)

Porten dekker det `sjekk-bok.py`s enkle regex ikke får til her: nevnerkontroll
med enhetskrav, og syntaktisk forankrede forbud som ikke kan skrives som ett
ord. Den leser JSON-strukturen, aldri `grep -o`.

**Testet mot fire fiksturer:** alle formene skjelettet krever («6 av 6 terminer»,
«14 av 49 poeng», «3 av de 14 poengene», «Vår egen framstilling», «Fasiten viser
et faktisk tre», «fasitsvar») → **0 avvik** · en med alle bruddformene plantet →
**15 avvik, alle riktige** · kildenote-malen (§6.1.1) → **0 avvik** ·
modellbesvarelses- og uttalekontraktsmalene (§10.1, §8.2) → **0 avvik**.

```bash
python3 - <<'EOF'
# PORT B — EXFAC03-SPR: talldisiplin, vårforbud, årstallsgrense og forbudte påstander.
import glob, json, os, re, sys
GLOB = sys.argv[1] if len(sys.argv) > 1 else "src/lib/data/chapters/exfac03-spr-*.json"
LOVLIG = {"2", "4", "6", "14", "15", "45", "49", "65", "114"}
ENHET  = re.compile(r"termin|spørsmål|poeng|sensorveiledning|veiledning|høsttermin", re.I)
BROK   = re.compile(r"(?<![\d,.])(\d+(?:,\d+)?)\s+av\s+(?:de\s+)?(\d+)(?!\d)")
HARD = [
 (re.compile(r"\bV\d{4}\b|\bvåren?\s+20\d\d|\bvåreksamen|\bvårtermin|\bvårsemester", re.I),
  "vårtermin — arkivet har null våreksamener"),
 (re.compile(r"\bH(?:1\d{3}|20(?:0\d|10))\b"),
  "eksamenstermin før H2011 — emnet er eldre enn arkivet, men arkivet er ikke"),
 (re.compile(r"alle eksamene[rn]|samtlige eksamener|alle terminer|samtlige terminer", re.I),
  "ulovlig totalitetspåstand — grunnlaget er seks terminer"),
 (re.compile(r"\bs\.\s?\d+|\bsidene?\s+\d+|\d\.\s*utgave|Sveen", re.I),
  "pensumboka navngitt eller sidetall oppgitt — arkivet oppgir ingen av delene"),
 (re.compile(r"treet i ord|figur i ord|treet beskrevet i ord", re.I),
  "tre beskrevet i ord — fasiten SKAL vise et faktisk tre"),
 (re.compile(r"Prioritet: perfekt|Sist du var her|som du sikkert husker|du har jo allerede sett|dette kan du fra før", re.I),
  "forbudt plattformfrase"),
 (re.compile(r"en A-besvarelse ville|en toppbesvarelse ville|ville ha drøftet|ville pekt på", re.I),
  "meta-fasit — drøftelsen skal skrives ut"),
 (re.compile(r"offisiell(e)? løsning(er|sforslag)?|løsningsforslag fra UiO|UiOs (fasit|løsningsforslag)|"
             r"fasit fra UiO|arkivets fasit|eksamensfasit|modellbesvarelse fra UiO|studentbesvarelse|"
             r"autentiske eksamensoppgaver|H2011-veiledningen|H2021-veiledningen|"
             r"strykprosent|karakterfordeling|sensurstatistikk", re.I),
  "usann kildepåstand eller statistikkpåstand"),
]
def strenger(o, sti=""):
    if isinstance(o, str): yield sti, o
    elif isinstance(o, dict):
        for k, v in o.items(): yield from strenger(v, f"{sti}.{k}")
    elif isinstance(o, list):
        for i, v in enumerate(o): yield from strenger(v, f"{sti}[{i}]")
avvik, radgivende, n = [], [], 0
filer = sorted(glob.glob(GLOB))
if not filer: sys.exit("fant ingen kapittelfiler")
for p in filer:
    navn = os.path.basename(p); kap = navn[:-5].replace("exfac03-spr-", "")
    for sti, s in strenger(json.load(open(p, encoding="utf-8"))):
        for m in BROK.finditer(s):
            n += 1
            if m.group(2) not in LOVLIG:
                avvik.append(f"{navn}{sti}: «{m.group(0)}» — ulovlig nevner {m.group(2)}; lovlige er {sorted(LOVLIG, key=int)}")
            elif not ENHET.search(s[m.end():m.end()+40]):
                radgivende.append(f"{navn}{sti}: «{m.group(0)}» uten enhet → …{s[max(0,m.start()-40):m.end()+40]}…")
        for rx, hvorfor in HARD:
            for m in rx.finditer(s):
                if kap == "0-1" and "fasit" in m.group(0).lower(): continue   # kildenoten beskriver kildesituasjonen
                avvik.append(f"{navn}{sti}: «{m.group(0)}» — {hvorfor}")
print(f"{len(filer)} filer · {n} «N av M»-påstander · avvik: {len(avvik)} · rådgivende (enhet mangler): {len(radgivende)}")
for a in avvik[:40]: print(" -", a)
for a in radgivende[:15]: print(" ?", a)
sys.exit(1 if avvik else 0)
EOF
```

**Den harde delen skal gi null avvik. Den rådgivende delen skal gjennomgås
manuelt:** i en tabellrad kan enheten stå i kolonnehodet, og da er treffet
legitimt; i prosa skal enheten stå i setningen (§6.3).

**Fire ting porten er anlagt for å IKKE gjøre, alle forankret i minnet
«Forankret erstatning»:**

- **Den forbyr ikke ordet «vår».** «Vår egen framstilling», «vårt eksempel» og
  «vårmånedene» er helt vanlig norsk. Forbudet er forankret på syntaks:
  `V<fire siffer>`, «våren 20xx», «våreksamen», «vårtermin», «vårsemester».
- **Den forbyr ikke årstall før 2011 i seg selv.** Boka skal kunne skrive om
  norrønt og urnordisk, og om at perioden 2012–2017 er tom. Forbudet gjelder
  **eksamensterminer**: `H` + et årstall før 2011.
- **Den forbyr ikke ordet «fasit».** «Prøvefasit», «fasiten skriver ut begge
  lesningene» og «ikke likhet med et fasitsvar» er påkrevd språk i denne boka
  (§6.1 punkt 1). Bare koblingene til arkivet og til UiO er forbudt.
- **Den forbyr ikke «lærebok».** Feil #15 heter «gjengi lærebokas eksempler i
  stedet for å lage egne», og den setningen skal stå. Forbudet gjelder å
  **navngi** boka og å oppgi **sidetall** eller **utgave**.

I tillegg kjøres plattformens egen port med den enkle regexen:

```bash
python3 scripts/hoyskolebok/sjekk-bok.py exfac03-spr \
  "Prioritet: perfekt|Sist du var her|som du sikkert husker|du har jo allerede sett|dette kan du fra før|en A-besvarelse ville|en toppbesvarelse ville|ville ha drøftet|ville pekt på|studentbesvarelse|offisiell fasit|offisielle fasiter|eksamensfasit|arkivets fasit|fasit fra UiO|UiOs fasit|offisiell løsning|offisielle løsninger|offisielle løsningsforslag|løsningsforslag fra UiO|UiOs løsningsforslag|modellbesvarelse fra UiO|autentiske eksamensoppgaver|hentet fra eksamenssettet|gjengitt fra sensorveiledningen|alle eksamener|samtlige eksamener|H2011-veiledningen|H2021-veiledningen|treet i ord|figur i ord|strykprosent|karakterfordeling|sensurstatistikk|\\\\textipa|\\\\ipa\\{|qtree|tikz"
```

⚠ **`sjekk-bok.py` unntar automatisk kapitler som slutter på `-0-1`** fra
forbudt-regexen, fordi kildenoten skal beskrive kildesituasjonen. PORT B gjør det
samme, men bare for fasit-treff — de øvrige forbudene gjelder også i kap. 0.1.

⚠ **`sjekk-prosaregel.py` har en kapittelvid fallback:** treffer unntaksregexen
ÉN gang et sted i kapitlet, slipper **alle** treff i kapitlet gjennom. Den er
derfor for svak til talldisiplinen her — kap. 0.1 nevner uansett «terminer» én
gang, og da ville hver naken brøk i resten av kapitlet passere. Bruk PORT B.

### 13.5 Prioritetsklasser

**høyeste prioritet** (skjelettets «perfekt» — 0.1, 0.2, 1.1, 1.2, 1.3, 1.4, 1.5,
2.1, 2.2, 2.4, 3.1, 3.2, 3.3, 4.1, 4.2, 4.3, 5.1, 5.2, 5.3, 5.4, 5.5, 7.2,
10.1–10.9) · **bør beherskes** (2.3, 4.4, 4.5, 5.6, 6.1, 6.2, 6.3, 7.1, 7.3, 8.1,
8.2, 8.3, 9.1, 9.2) · **bør kjenne til** (5.7, 9.3).
**Skriv ALDRI «Prioritet: perfekt».** ⚠ «Bør kjenne til» betyr færre minutter og
lavere kvote — **aldri at stoffet kan utelates**.

---

## 14. Kryssbok-lenker

**Den fullstendige, uttømmende tabellen står i §9.2: ni lenker til `ling1100`,
i fem kapitler. Det finnes ingen andre kryssbok-lenker i denne boka.**

Interne lenker skrives som `[kap. 2.2](/exfac03-spr/exfac03-spr-2-2)` og skal kun
peke på kapitler som allerede er bygget når boka gates. Bygg i skjelettets
rekkefølge (§6 i skjelettet): Del 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10 →
prøver. Merk at **0.2 må stå ferdig FØR alt annet**, **Del 1 og 2 FØR Del 3**
(Del 3 hviler helt på begge), **4.2 FØR 5.1**, **5.2 FØR 8.1**, **1.3 og 2.2 FØR
9.2**, og **hele Del 1–9 FØR Del 10**.

⚠ **Forbudte lenkemål:** ethvert emne som har skjelett men ingen kapittelfiler på
disk. Kjør `ls src/lib/data/chapters/<id>.json` **og** grep etter id-en i
`src/lib/data/textbook-courses*.ts` før du legger til en lenke som ikke står i
§9.2 — `sjekk-bok.py` avviser døde lenker, og en død lenke i en live bok er en
synlig feil for leseren.

---

## 15. Tekniske feller (les før første `json.dump`)

1. **JSON-gyldighet.** Bruk `json.dump`. Faget er fullt av anførselstegn og
   enkle anførselstegn rundt betydninger — én uescapet anførsel blokkerer hele
   plattformens prebuild. ⚠ **Men se §7.2:** `json.dump` er også det som gjør
   LaTeX-innpakket IPA usynlig for `sjekk-latex.py`. Kjør PORT A i tillegg.
2. **Hardt linjebrutt prosa er FORBUDT.** Rendreren gjør hvert enkelt `\n` om til
   `<br />`. Ett avsnitt = én lang linje; `\n\n` mellom avsnitt; enkelt `\n` kun
   der linjeskiftet er ønsket. ⚠ **Unntak som er hele poenget: trelinjene i en
   kodeblokk.** Der er hvert `\n` ønsket, og innrykket bærer strukturen.
3. **`$` er forbudt i alle former** — også escapet, også som valutategn. Boka har
   ingen LaTeX i det hele tatt (§7.1 regel 11).
4. **`chapterNumber` alltid del-basert** («3.2»), aldri lineær («12»).
   Prøvekapitler: «3.P».
5. **`difficulty` er `lett` | `middels` | `vanskelig`** — aldri `medium`/`hard`
   (§4).
6. **Ingen tom `collapsible`.** Feltet heter `content` og skal inneholde blokker.
   En `text`-nøkkel eller `[]` rendrer som en tom boks.
7. **Unike blokk-id-er** innen kapitlet.
8. **Flashcards kommer KUN fra toppnivå `definition` med `title`** (§12.2).
   Orienteringsboksen i Del 0 skal derfor være `text`/`tip`, ALDRI `definition`.
9. **`(verifiser)`-markører** skrives i den literale formen `(verifiser)` og
   løses i fase 6 FØR `sjekk-bok.py` kjøres siste gang. I denne boka skal de
   være få: alt faglig innhold er allmenneie eller hjemlet i skjelettet. Bruk
   markøren der du er usikker på en artikulatorisk beskrivelse eller på om et
   dialektfenomen er korrekt beskrevet.
10. **Ingen `subTasks`, `answer`, `solutionVideo`, `allowsUpload`,
    `allowsCanvasDrawing`** i `exercise`.
11. **Quiz-forklaringer refererer aldri til alternativets plassering** — runtime
    stokker (§12.1).
12. **Ikke bruk `grep -o` med `.{0,N}`-kontekst** mot kapittelfilene: de er
    kompakt JSON på én linje, og mønsteret er kvadratisk (17 GB RAM på
    byggemaskinen 25. juli 2026). Bruk PORT A, B og C, som leser JSON-strukturen.
13. **Ikke skriv «Løkke N» i overskrifter eller prosa** (§1).
14. **Ingen markdown og ingen IPA-tegn i `description`/`title`/`competenceGoals`**
    (§3.1) — feltet havner rått i Google-treffet.
15. **Deloppgaver a), b), c) — og fasiten rettes i samme operasjon** som oppgaven
    om merkingen endres (§11).
16. **Kombinerende diakritika tåler ikke å bli «ryddet» av et søk-og-erstatt.**
    `n̩` er to kodepunkter, og et regex som `n(?=[ ,.])` treffer ikke det.
    Gjør du en global erstatning i kapittelfilene, kjør PORT A etterpå.

---

## 16. Opphavsrett (ufravikelig)

ALLE oppgaver, ord, setninger, transkripsjoner, segmenteringer, analysetrær,
datasett, flervalgsspørsmål og «modellbesvarelser» er **NYSKREVNE** —
eksamenssjangrene er malen, ALDRI originaloppgavene. Ingen formuleringer fra
UiO-settene eller fra de fire sensorveiledningene gjengis ordrett, heller ikke i
omskrevet-nær form.

⚠ **Arkivets ord er den største fristelsen i denne boka**, fordi de er så
velvalgte. **De transkriberes ikke og segmenteres ikke, og de brukes ikke som
oppgave noe sted.** De kan nevnes **én gang hver**, i kap. 1.3 og 3.3, som
dokumentasjon av **ordtypen** — «ordene er alltid lange, sammensatte og norske» —
og der stopper det. Det gjelder både transkripsjonsordene og
segmenteringsordene.

**Analyseobjektene gjengis aldri som oppgavetekst.** Setningene arkivets
treoppgaver bruker, gjengis ikke; de tolv setningene i kap. 5.4 er nyskrevne.
Datasettene i kap. 8.3 er nyskrevne fra konstruerte språk, og boka **navngir ikke
språket arkivets oppgave brukte som om det var pensum**.

**Pensumlitteraturen navngis ikke i det hele tatt** — verken tittel, forfatter,
utgave, årstall eller sidetall. Arkivet oppgir ingen av delene, og
kapittelnummer og sidetall som forekommer i oppgavetekstene, brukes ikke (§6.1
punkt 7). De etablerte begrepene er faglig allmenneie og forklares under sine
egne navn.

**Ingen oppdiktede referanser, verk, forskere, årstall eller tall.**

Boka fremstiller seg ALDRI som offisiell, godkjent eller UiO-tilknyttet, og lover
ALDRI et eksamensutfall. (Uavhengighetsdeklarasjonen vises automatisk av
plattformen for `level: 'Høyskole'` — se README «Juridiske deklarasjoner».)

---

## 17. BOKCONFIG og wiring (fase 5)

`BOKCONFIG.json` ligger ferdig i denne mappa:

```json
{
  "title": "EXFAC03-SPR Examen facultatum, språkvitenskap",
  "description": "Eksamensrettet lærebok for EXFAC03-SPR ved UiO — kalibrert mot seks høsteksamener 2011–2025: fonetisk transkripsjon, fonemanalyse, morfologisk segmentering, syntaktiske analysetrær og språktypologi",
  "icon": "🗣️",
  "institusjon": "uio",
  "prøvedeler": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  "sectionNames": { "0": "Eksamenskart og svarhåndverket", "…": "…", "10": "Eksamenstrening" }
}
```

`sectionNames` er skjelettets elleve seksjonstitler, ordrett — verifisert
identiske med det `wire-bok.py` selv ville utledet av del-overskriftene, så
oppføringen er en forsikring mot senere redigering av skjelettet, ikke en
overstyring.

`icon` er **🗣️** fordi det er ledig i `institusjoner.ts` (kontrollert mot alle 48
oppføringer) og fordi det skiller seg fra LING1100s 💬 — de to
lingvistikkbøkene skal ikke se like ut i institusjonsgridet.

### 17.1 `description` — HARDT FORMATKRAV, verifisert programmatisk

Kursforsiden parser feltet og splitter det i en ingress, en «Bygget på …»-boks og
emne-chips. Parseren i `src/app/[courseId]/page.tsx`:

```js
description.match(/^(.*?)\s*—\s*kalibrert mot\s+([^:]+?)\s*(?::\s*(.+?))?\.?$/)
// topics: m[3].split(/,\s*|\s+og\s+/)
```

Kjørt mot beskrivelsen over 6. august 2026:

| ledd | verdi | krav |
|---|---|---|
| ingress | «Eksamensrettet lærebok for EXFAC03-SPR ved UiO» (46 tegn) | ≤ ~90 ✓ |
| kalibrering | «seks høsteksamener 2011–2025» | kort, uten «bygget på»-ord ✓ |
| temaer | fonetisk transkripsjon · fonemanalyse · morfologisk segmentering · syntaktiske analysetrær · språktypologi | 5 stk, 1–3 ord hver ✓ |
| samlet lengde | **197 tegn** | < 250 ✓ |
| forbudte tegn inne i leddene | ingen `;`, `:` eller `—` | ✓ |

⚠ **Skjelettet oppgir 198 tegn; den faktiske lengden er 197.** Avviket er
kosmetisk og godt innenfor taket — men det er telt, og ingen skal «rette» det
tilbake (§19, sprik 5).

⚠ **Temalista splittes på BÅDE komma og « og ».** Et temaledd som selv inneholder
«og» sprekker i to meningsløse chips. Ingen av de fem leddene inneholder ordet,
og ingen ender på en hengende bindestrek. ⚠ Merk at **tankestreken i «2011–2025»
er en tankestrek (U+2013), ikke em-dash (U+2014)** — den ene em-dashen i strengen
er leddskilleren, og en em-dash til ville brutt parseren. Testen:

```bash
python3 - <<'EOF'
import json, re
c = json.load(open("docs/hoyskole-boker/exfac03-spr/BOKCONFIG.json", encoding="utf-8"))
d = c["description"]
m = re.match(r"^(.*?)\s*—\s*kalibrert mot\s+([^:]+?)\s*(?::\s*(.+?))?\.?$", d)
assert m, "MATCHER IKKE parseren — hele beskrivelsen ville falt ut som én grå tekstblokk"
topics = [t.strip() for t in re.split(r",\s*|\s+og\s+", m.group(3))]
print("len:", len(d), "| ingress:", len(m.group(1)), "| kalibrering:", m.group(2))
print("temaer:", topics)
assert len(d) < 250 and len(m.group(1)) <= 90 and 3 <= len(topics) <= 6
assert not [x for x in d.replace(" — ", "", 1).replace(": ", "", 1) if x in ";—:"]
assert not [t for t in topics if " og " in t or t.endswith("-")]
assert c["prøvedeler"] == list(range(1, 11))
sk = open("docs/hoyskole-boker/exfac03-spr/SKJELETT.md", encoding="utf-8").read()
auto = {mm.group(1): mm.group(2).strip() for mm in re.finditer(r"^###+ +DEL (\d+)\s*[—–:-]+\s*([^(\n*]+)", sk, re.M | re.I)}
assert auto == c["sectionNames"], "sectionNames avviker fra skjelettets del-overskrifter"
assert not [k for k, v in c["sectionNames"].items() if ":" in v], "kolon i seksjonstittel gir to kolon i prøvekapittelets tittel"
print("OK")
EOF
```

Kjørt 6. august 2026: **OK** (len 197, ingress 46, fem temaer, ingen ulovlige
tegn, prøvedeler 1–10, sectionNames identiske med skjelettet).

**Kalibreringsleddet er terminbasert med vilje.** «Sju dokumenter» ville vært
sant, men er et filtall (§6.1 punkt 8); «tre oppgavesett og fire
sensorveiledninger» ville vært presist, men er en oppramsing av filtyper som
hører i kildenoten og i `kildegrunnlag.ts`, ikke i en salgslinje.
**«Seks høsteksamener» sier både omfanget og at det ikke finnes vårterminer** —
og det er nøyaktig det leseren trenger å vite på ett sekund.

### 17.2 `title` — verifisert mot begge heuristikkene

`wire-bok.py` skriver `cfg['title']` både til kursmetadataen og til
`src/app/trinn/hoyere/institusjoner.ts`, og kursets `title` er det
`HoyskoleDisclaimer` bruker for å avgjøre om en fagspesifikk ansvarslinje vises:

```js
erJus(courseId, title)   // /^jus/i.test(courseId) || /\brett(s\w*)?\b|juridisk/i.test(title)
erHelse(courseId, title) // /^psy/i.test(courseId) || /sykepl|medisin|farmako|anatomi|fysiologi|helse|psykolog|odontolog|tannlege/i.test(`${courseId} ${title}`)
```

Testet 6. august 2026 med tittelen «EXFAC03-SPR Examen facultatum,
språkvitenskap»: **erJus = False, erHelse = False.** Det er riktig — emnet er
verken juridisk eller helsefaglig, og boka skal bare ha den generelle
uavhengighetsdeklarasjonen. Skjelettets §1 slår fast det samme.

⚠ **Ikke skriv «rettskriving», «rettskrivingsnorm» eller «språkrett» inn i
tittelen** for å gjøre den mer beskrivende: `\brett(s\w*)?\b` ville slått inn og
gitt leseren en Lovdata-linje på et emne uten en eneste rettskilde. Og ikke kort
tittelen til «EXFAC03-SPR Examen facultatum» — da forsvinner variantnavnet som
skiller emnet fra SVEXFAC03 og JFEXFAC04, og emnekoden alene er ikke lesbar for
en student som søker på «examen facultatum språk».

```bash
python3 - <<'EOF'
import json, re
t = json.load(open("docs/hoyskole-boker/exfac03-spr/BOKCONFIG.json", encoding="utf-8"))["title"]
erJus = lambda cid, x: bool(re.search(r"^jus", cid, re.I) or re.search(r"\brett(s\w*)?\b|juridisk", x, re.I))
erHelse = lambda cid, x: bool(re.search(r"^psy", cid, re.I) or re.search(r"sykepl|medisin|farmako|anatomi|fysiologi|helse|psykolog|odontolog|tannlege", f"{cid} {x}", re.I))
print(t, "→ erJus:", erJus("exfac03-spr", t), "| erHelse:", erHelse("exfac03-spr", t))
assert not erJus("exfac03-spr", t) and not erHelse("exfac03-spr", t)
EOF
```

### 17.3 Wiring-sjekkliste (fase 5)

1. `python3 scripts/hoyskolebok/wire-bok.py exfac03-spr` — parser 47 kapitler fra
   skjelettet og genererer 10 prøvekapitler. **Alle 57 filene må finnes først**,
   og **alle 47 quizfilene må ligge i staging før wiringen** (§12).
2. **Kontroller prøvekapitlenes auto-tekst.** Ordlyden per 6. august 2026
   («fullstendige løsninger skrevet av oss») er sannferdig og skal stå. Endres
   `wire-bok.py` tilbake til «løsningsforslag», må teksten rettes i fase 5 (§2.2).
3. **Legg til oppføring i `src/lib/data/kildegrunnlag.ts`** med tallene fra §6.1:
   6 eksamensterminer 2011–2025, alle høst · 3 oppgavesett-filer som dekker 3
   terminer (H2011, H2021, H2022) · 4 sensorveiledninger som dekker 4 terminer
   (H2018, H2020, H2022, H2025) · **0 løsningsforslag og 0 fasitark**.
   `forbehold`-lista skal inneholde: ni høstterminer mangler helt (H2012–H2017,
   H2019, H2023, H2024) · arkivet har ingen termin fra vårsemesteret · H2020 har
   veiledning uten ordrett oppgavetekst · H2011 og H2021 har oppgavesett uten
   veiledning, så ingen sensorpåstand bygger på dem · alle fire veiledningene
   uttrykker forhåndsforventninger, ikke observerte feil · karakterskalaen er
   kjent for to terminer og de er ulike, og overgangen kan ikke tidfestes ·
   poenggrensene er veiledende fordi helhetsinntrykket teller · varighet og
   hjelpemidler er ikke oppgitt for H2025 · studiepoeng, semesterplassering,
   adgangskrav og pensumlitteratur står ikke i arkivet · ingen strykprosent eller
   karakterstatistikk finnes.
4. `institusjoner.ts` patches automatisk under `slug: 'uio'` med tittel og ikon
   fra `BOKCONFIG.json`. **Verifiser at verken jus- eller helse-linja vises**
   (§17.2).
5. Verifiser narrativ-ruter (hvis narrativer bygges) med prod-server og curl —
   **200, ikke bare at filene finnes**. `getChapterMeta` må finne narrativ-id-en,
   ellers gir ruten 404 og toggelen skjules stille.

---

## 18. Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json; json.load(open('…'))"` på HVER fil du har skrevet.
2. **Kvotetelling** mot tabellen i §12 (toppnivå `definition`-blokker med `title`
   + antall quiz-spørsmål) — minimum, aldri under. Total 882 quiz / 792
   flashcards / 2 570 minutter.
3. **PORT A (IPA-notasjonen, §7.3) = 0 avvik.** Dette er bokas viktigste port, og
   den fanger det `sjekk-latex.py` beviselig ikke ser (§7.2).
4. **PORT B (talldisiplin og forbudte påstander, §13.4) = 0 harde avvik**, og den
   rådgivende enhetslista gjennomgått manuelt.
5. **PORT C (LING1100-lenkene, §9.4) = 0 avvik**, og totalen nøyaktig 9 lenker
   i 5 kapitler. Null lenker fra Del 1–4.
6. **`sjekk-latex.py` grønn i tillegg** — den fanger kontrolltegn og ubalanserte
   `$` som PORT A ikke ser etter.
7. **Kildepåstander:** hver «N av M» bruker en lovlig nevner (§6.3) OG skriver ut
   enheten; ingen påstand om fasit eller løsningsforslag fra UiO; ingen påstand
   som hviler på H2011- eller H2021-veiledningen (de finnes ikke); tallet 7 står
   bare som filtall i kildenoten; ingen påstand om strykprosent eller
   karakterfordeling.
8. **Uttalekontrakten (§8):** HVER transkripsjonsoppgave i boka — i teori,
   drill, sjangerkapittel og prøve — har fasit for **minst to ulike oppgitte
   bakgrunner**, begge nivåer skrevet ut, med den eksplisitte setningen om at
   begge er fullt tellende. **Tell dem.** Dette er kravet det er lettest å
   glemme i én enkelt oppgave, og lettest for leseren å bli skadet av.
9. **Trær er tegnet, ikke beskrevet:** hver oppgave som ber om et analysetre, har
   et faktisk utskrevet tre i fasiten (kodeblokk eller klammenotasjon). Grep
   etter «treet i ord» og «figur i ord» = 0 (dekket av PORT B). Brukes SVG, er
   filene lastet opp med `upload-media-storage.ts` og
   `sjekk-figurer.py exfac03-spr` er grønn.
10. **Læringsløkke:** `content[]` veksler teori → eksempel → oppgave i løkker med
    `exercise`-blokker INLINE. Unntak: prøve-, sjanger- og
    modellbesvarelseskapitler. Byggespråk-grepet fra §1 gir null treff.
11. **Forkunnskapsdekning:** gå gjennom HVER `exercise` og bekreft at den kun
    hviler på stoff introdusert tidligere i kapitlet eller i en referert
    forkunnskap — **inkludert hvert enkelt IPA-tegn**. Særlig: ingen oppgave i
    Del 3 krever distribusjonsanalysen uten kap. 2.2, ingen i Del 5 krever
    frasebegrepet uten kap. 5.1, ingen i Del 9 krever allofonibegrepet uten
    kap. 2.2.
12. **Oppfrisket forkunnskap:** kapitlene i tabellen i §5.1 har 2–3
    kjernepåstander VIST med tegnene utskrevet, ikke bare lenket; **grep for
    «Sist du var her» = 0**, og ingen overskrift heter «Forkunnskaper — sist du
    var her».
13. **Symbol- og termliste + oppgaveantall:** HVERT temakapittel har
    `collapsible` «Symbol- og termliste» SIST, med alle tegn brukt i
    delkapitlet og uten arv, `tip` «Slik løftes svaret», `warning` «Typiske feil»
    og **4–8 `exercise`-blokker inline**. Tell dem.
14. **`difficulty`** er `lett`/`middels`/`vanskelig` i alle `exercise` — grep for
    `"difficulty": "medium"` og `"difficulty": "hard"` gir null. Minst én
    `vanskelig` per temadel, og minst én `lett` innstegsoppgave tidlig i hvert
    temakapittel.
15. **Nybegynner-inngang:** alle sjangerkoder (TRA/BES/SEG/TRE/RED/EGE/KLA),
    feilkoder (#1–#16) og karakterbokstaver forklart i klarspråk ved første bruk
    PER KAPITTEL; ingen kald kode i `competenceGoals` eller i første tekstboks;
    Del 0 har «Slik leser du denne boka»-boksen (type `text`/`tip`, ALDRI
    `definition`) og hele Del 0-pakken (§11.1).
16. **Eksamenskontrakten:** hver `example.solution`, hver `exercise.solution` og
    hver prøvefasit viser den strukturen sjangeren krever (§6.5), med
    **poengregnskap** der oppgavetypen er poengsatt og **trekkregnskap** der
    terminene oppgir trekk. En TRA-fasit uten forklaringsledd på konkrete tegn er
    en byggefeil (#3). En SEG-fasit med umerkede morfer er en byggefeil (#5).
17. **Grensetilfeller:** drillkapitlene og prøvene har de tilfellene skjelettet
    bestiller, merket **«(omstridt — begge forsvarlige)»**, med begge lesninger
    skrevet ut.
18. **Karakter-realisme:** «C er en god og vanlig karakter» står eksplisitt i
    Del 0 med poengintervallet; grep «Prioritet: perfekt» = 0; C-besvarelsen i
    10.9 **er** en C og summerer til 45,5–51,5 av 65 poeng; margin-besvarelsen
    lander så vidt over 30 av 65; hvert sted A–F brukes står forbeholdet fra
    §6.4; meta-fasit-grep = 0.
19. **Feilregisterets forbehold** står hvert sted registeret presenteres (kap.
    0.1, 0.2 og 10.8): veiledningene uttrykker sensors forhåndsforventninger, og
    ingen av dem rapporterer observerte studentfeil.
20. **Prøvekapitler:** nøyaktig **fire** prøver i hvert av de ti (hardt
    plattformkrav, §2.2); fasitmønsteret varierer (aldri «alle a», aldri «alle
    felle»); prøve-tipen sier hvor flervalget bor; selvdiagnose (☐) etter hver
    fasit; konsistensvurderingslister av selvstendige påstander bruker romertall
    (§5.7), og alle ekte deloppgaver bruker a), b), c).
21. **hints** utfylt på alle `exercise` unntatt de merkede kalde bankene; første
    hint røper aldri konklusjonen.
22. **Quiz:** `options[0]` alltid riktig; nøyaktig 4 alternativer; ingen
    duplikate alternativer; ingen posisjonsreferanser i `explanation`; **ingen
    IPA i `$…$` og ingen backticks i `options`**; **LENGDE-TELL under 35 %** på
    staging-varianten i §12.1 — og husk at rettemåten er å la minst én distraktor
    være lengre enn fasiten i omtrent tre av fire spørsmål.
23. **Øktmerking:** de 40 kapitlene over 45 minutter har tidsanslag i
    underoverskriftene eller pausepunkter; kap. 3.3, 4.3, 5.4, 10.8 og 10.9 har
    «— naturlig pausepunkt —»; prøvekapitlene deklarerer «4 prøver à ~20–45 min»
    + deling over flere kvelder.
24. **Opphavsrett (§16):** ingen av arkivets ord transkribert eller segmentert;
    ingen av arkivets setninger brukt i en treoppgave; pensumboka ikke navngitt;
    ingen sidetall, utgaver eller oppdiktede referanser.
25. **Ingen tom `collapsible`**; ingen duplikate blokk-id-er; kap-referanser i
    fasiter og forkunnskaper er markdown-lenker til eksisterende filer; ingen
    hardt linjebrutt prosa; ingen markdown og ingen IPA i
    `description`/`title`/`competenceGoals`.
26. **Juridiske deklarasjoner:** innholdet fremstiller seg ALDRI som offisielt
    eller UiO-tilknyttet, lover aldri eksamensutfall, og verken jus- eller
    helse-linja utløses (§17.2).
27. **Porter grønne før ferdigmelding:**

```bash
python3 scripts/hoyskolebok/status-bok.py exfac03-spr
python3 scripts/hoyskolebok/sjekk-skjelett.py exfac03-spr
python3 scripts/hoyskolebok/sjekk-latex.py exfac03-spr
python3 scripts/hoyskolebok/sjekk-fasitfordeling.py exfac03-spr
python3 scripts/hoyskolebok/sjekk-alternativref.py exfac03-spr
python3 scripts/hoyskolebok/sjekk-statiskflervalg.py exfac03-spr
python3 scripts/hoyskolebok/sjekk-figurer.py exfac03-spr      # kun hvis SVG brukes
python3 scripts/hoyskolebok/sjekk-bok.py exfac03-spr "<forbudt-regex fra §13.4>"
# PORT A (§7.3), PORT B (§13.4), PORT C (§9.4) og staging-LENGDE-TELL (§12.1)
npm run build
```

---

## 19. SPRIK MOT SKJELETTET — dokumentert her så ingen «retter» dem tilbake

Skjelettets Talldisiplin-seksjon og alle 47 kapitlers belegg-blokker er
etterprøvd mot `EKSAMENSANALYSE.md` §3 og §7: **spørsmålsradene summerer til 45,
poengradene til 114, strukturfagene til 80 av 114 (70,2 %), kapittelkontrollen
til 47 og minuttkontrollen til 2 570 — alle fem stemmer eksakt.** Skjelettet er
et solid dokument. Fem avledede punkter holder likevel ikke som skrevet:

**1. «De fem lovlige nevnerne» er i praksis ni.** Skjelettets Talldisiplin sier
at bare 6, 45, 114, 4 og 2 er lovlige, med tillegget «eller i en belegg-blokk i
del 3». Talt i skjelettet selv står det **31 forekomster av «av 65»**, **21 av
«av 49»** og **2 av «av 14»** — alle i belegg-blokkene, alle påkrevde
(«10 av 65 poeng», «14 av 49 poeng», «3 av de 14 poengene»). I tillegg krever
kildenoten «9 av 15 høstterminer». **En port bygget på «de fem» ville felt
bokas egne obligatoriske setninger.** Den bindende, maskinelt håndhevede lista er
derfor **2, 4, 6, 14, 15, 45, 49, 65 og 114** (§6.3). Rangeringen og
vektfordelingen er uendret — det er bare porten som er gjort riktig.

**2. «Ingen kryssbok-lenker fra Del 1–5» kolliderer med kap. 5.6.** Skjelettets
§1.3 forbyr lenker fra Del 1–5 og bestiller samtidig, to steder, en lenke i
kap. 5.6. Løsningen er dokumentert i §9.3: **den spesielle bestemmelsen vinner**,
regelen er «null lenker fra Del 1–4, og i Del 5 nøyaktig én — den i kap. 5.6», og
5.6 bærer 22 %-advarselen i fulltekst som kompensasjon. **Merk også at
lenketabellen har ni rader, men bare fem vertskapitler** (5.6, 6.1, 7.1, 7.2,
7.3) — 6.1 eier tre lenker, 7.2 og 7.3 to hver. Formuleringen «lenker kun i de ni
kapitlene skjelettet navngir» er en feillesning av tabellen.

**3. Advarselen «ved den første lenken» er tvetydig.** §1.3 sier at
22 %-advarselen skal stå «i kap. 0.1 og i den første lenken som forekommer»,
mens kap. 6.1s kontrakt sier at «den første av disse lenkene» skal ledsages av
setningen. I lesningsrekkefølge kommer 5.6 før 6.1. **Bindende: advarselen står i
kap. 0.1, 5.6 OG 6.1**, slik at den er der uansett hvilken vei leseren kommer.
PORT C håndhever alle tre.

**4. Påstanden om at `sjekk-latex.py` fanger LaTeX-innpakket IPA er feil.**
Skjelettets §1.2 regel 1 sier at «en løs backslash slår ut i `sjekk-latex.py`».
Testet mot skriptet: `\textipa{}`, `\v{s}`, `\ipa{}`, `\qtree` og `$/fɑ/$` gir
alle **LATEX-PORT OK** når fila er skrevet med `json.dump`, fordi `RA_LATEX`
krever ordgrense etter et kjent kommandonavn og ingen av de fem står på lista.
Bare den **enkle** backslashen (rå JSON uten escaping) fanges, som kontrolltegn.
**Skjelettets regel er riktig; begrunnelsen er ikke.** Konsekvensen er PORT A
(§7.3), som er ny og obligatorisk. Se §7.2 for reproduksjonen.

**5. BOKCONFIG-beskrivelsen er 197 tegn, ikke 198.** Skjelettets §1 oppgir 198.
Målt: 197. Ingressen er 46 tegn som oppgitt, de fem chipsene er som oppgitt, og
strengen består parsertesten. Avviket er kosmetisk, men det er telt (§17.1).

⚠ **Ett skjelettdetalj som IKKE er et sprik, men som ser ut som ett:** skjelettet
skriver «KLA — 3 av 6 terminer (H2018-8, H2021-6, H2025-1, H2025-7)» — fire
belegg i tre terminer. Det er riktig: nevneren er terminer, og H2025 teller én
gang. Skriv aldri «4 av 6 terminer» om klassifiseringsoppgaven.

⚠ **Og ett til:** skjelettets egne regellinjer inneholder tegnet IPA-`ɡ`
(U+0261) tre steder, alle der forbudet formuleres, og `EKSAMENSANALYSE.md` §11
har det i teststrengen sin. **Kopierer du en regellinje inn i et kapittel, tar du
med deg det forbudte tegnet.** PORT A er derfor scopet til
`src/lib/data/chapters/exfac03-spr-*.json` og skal aldri kjøres mot `docs/`.

⚠ **Rangeringen og kapittelfordelingen er uendret** av alle fem punktene, så
skjelettets §2-rasjonale står: strukturfagene får 24 av 47 kapitler, 1 385 av
2 570 minutter (53,9 %) og 502 av 882 quiz (56,9 %) for de 70,2 prosentene av
poengene de bærer.
