# Byggekontrakt: TDT4120 Algoritmer og datastrukturer (NTNU) — teknisk kontrakt for kapittelforfattere

Denne kontrakten gjelder ALLE forfatter-agenter som bygger kapitler til
`tdt4120`. Den definerer eksakt filformat, obligatorisk struktur, notasjon,
kildepåstander og kvalitetsporter.

**Konfliktregel (les denne først).** `SKJELETT.md` er faglig autoritet: kvoter,
innholdskontrakter, kapittelrekkefølge, prioritetsklasser og hva et kapittel
skal lære bort. **Denne kontrakten vinner ved format- og kildepåstandskonflikt**
— filformat, notasjon, hvor mange sett noe er belagt i, hva NTNU faktisk
publiserer, og hvordan et tall skal formuleres. Der kontrakten korrigerer
skjelettet eller `EKSAMENSANALYSE.md`, står korreksjonen eksplisitt i §K3 med
belegg. **Ingen agent skal «rette tilbake» til skjelettets ordlyd på disse
punktene.**

Les: ditt kapittels avsnitt i `SKJELETT.md` §4 ordrett, `EKSAMENSANALYSE.md` for
kontekst, og `../DNA-regnefag.md` for arketypen.

Instansiert fra `../BYGGEKONTRAKT-MAL.md` 1. august 2026. Mønstre for dybde og
form: `../econ1310/BYGGEKONTRAKT.md` (referanseinstansiering for regnefag),
`../in2010/BYGGEKONTRAKT.md` (nærmeste søsterfag — **men se §P0: IN2010 bruker
en ANNEN notasjonsstandard, og den skal ikke lekke inn her**) og
`../tfy4115/BYGGEKONTRAKT.md` (nyeste NTNU-regnefag).

TDT4120 er et **regnefag** etter `DNA-regnefag.md`, men et av de mest særegne:
oppgavene har entydige fasitsvar, mønstrene gjentas år etter år, og eksamen er
**~20 korte frisvarsoppgaver som teller likt** på fire timer **uten
hjelpemidler**. Bredden ER eksamensformen. Det gir kontrakten sju bindende
fagspesifikke deler:

| Del | Hva den styrer |
|---|---|
| **§K Kildekontrakten** | hva arkivet faktisk inneholder, hvilke nevnere som gjelder, og de fem korreksjonene mot skjelett/analyse |
| **§S Kortsvarskontrakten** | presisjonsdisiplinen — og nøyaktig hvor langt belegget for den rekker |
| **§P Pseudokodekontrakten** | CLRS-navn og -pseudokode, ```text-gjerder, pseudokode-kontrakt som `theorem` |
| **§A Analysekontrakten** | kjøretids- og fortegnspåstander etterregnes; masterteoremets tilfelle 2; matematisk sannhetskontroll |
| **§H Håndkjøringskontrakten** | sporingstavler og sluttilstander genereres PROGRAMMATISK, aldri fra hukommelsen |
| **§G Figurkontrakten** | grafer, trær, hauger og flytnett som ekte SVG — og opplasting til Storage |
| **§M Quiz- og flervalgskontrakten** | LENGDE-TELL begge veier, målt fra start, og prøvekapitlenes blindsone |

---

## §0 PLATTFORMSTØTTE — hva du kan stole på

1. **Markdown + LaTeX rendres** av `LatexRenderer`: `$…$` inline, `$$…$$`
   display, tabeller, fete/kursiverte former, lister, markdown-lenker.
2. **Kodeblokker rendres.** Trippel-backtick med språktagg settes som
   `<pre><code>` med bevart innrykk, og inline-kode i `` `backticks` `` er
   beskyttet mot både matte- og markdown-transformene (fikset på main 25. juli
   2026). Denne boka er full av pseudokode — se §P1 for den bindende formen.
3. **`$`-fella (ufravikelig).** Et dollartegn som IKKE er matte MÅ escapes som
   `\$` i JSON-strengen. To uescapede `$` på samme linje er **partall**, og
   rendreren parrer dem og setter alt imellom som formel. Den gamle
   ubalanse-sjekken så derfor ikke feilen — den rammet 21 filer i live bøker
   25. juli 2026. `sjekk-latex.py` har nå en egen **PROSA SATT SOM
   MATTE**-kontroll (punkt 6) som fanger nettopp partallstilfellet. Risikoen i
   denne boka er lav, men reell i tre mønstre: kostnadsinnpakninger i
   designoppgaver («murer koster 40 \$ per meter»), ryggsekk-/Huffman-caser med
   priser, og enhver `$`-bruk i en `example.problem`. **Kode og pseudokode i
   backticks eller ```text-gjerder er trygt** — der teller `$` ikke som
   avgrenser.
4. **Bilder:** `alt` rendres rått som HTML-attributt — **ingen LaTeX, ingen
   markdown, ingen backticks der**. `caption` rendres i inline-modus: `$…$`
   virker, men ikke markdown og ikke backticks.
5. **Matematikk i prosa skal være LaTeX, ikke unicode** — se §P5. Unntaket er
   `title` og `description`, som er ren tekst (punkt 6), og innsiden av
   ```text-gjerder (punkt 2).
6. **Unicode-regelens virkeområde:** regelen gjelder `content`-felter,
   oppgavetekster, fasiter og tabeller. Den gjelder IKKE `title` og
   `description`, som vises som ren tekst i navigasjon, søk og på bokforsiden.
   Skjelettets titler og beskrivelser tas **ORDRETT** som de står — også når de
   inneholder `Θ`, `²` eller `→`. En agent som «retter» en skjeletttittel for å
   tilfredsstille unicode-regelen, innfører et avvik mellom navigasjon og
   kapittelside.
7. **Flashcards genereres KUN fra toppnivå `definition`-blokker med `title`** —
   ikke fra definisjoner inne i en `collapsible`.
8. **Quiz stokkes ved kjøretid**, derfor er `options[0]` alltid fasit i
   staging-filene. Konsekvens: en `explanation` som sier «alternativ to» peker på
   et tilfeldig alternativ for leseren — beskriv alltid distraktoren ved INNHOLD
   («alternativet som oppgir `Build-Max-Heap` som $\Theta(n\lg n)$»), aldri ved
   posisjon. Porten `sjekk-alternativref.py` fanger dette; 483 slike feil er
   funnet i live bøker.
9. **`/bok`-prefikset finnes ikke lenger** (fjernet 27. juli 2026). Interne
   lenker er `[kap. X.Y](/tdt4120/tdt4120-X-Y)`.

---

## 1. LÆRINGSLØKKE-KONTRAKT (ufravikelig byggekrav — produkteier 9. juli 2026)

Fra skjelettets topp, tatt inn her som bindende byggekrav:

- HVERT kapittels `content[]` struktureres som gjentatte små løkker
  **Teori → Eksempel → Oppgave**. `exercise`-blokker plasseres INLINE i
  `content[]` rett etter teorien/eksempelet de trener — ALDRI all teori øverst
  med oppgavene samlet nederst.
- I dette faget er løkka konkret: `definition`/`theorem` som innfører ÉN
  algoritme, ÉN struktur, ÉN definisjon eller ÉN regel (inkl. dens
  **pseudokode-kontrakt**, §P2) → `example` som enten kjører algoritmen for hånd
  med full sporingstavle (§H) eller viser den ferdige kortsvarsformen (§S) →
  `exercise` som krever nøyaktig den ferdigheten. Deretter neste bit.
- **Ingen usett forkunnskap.** Ingen oppgave får kreve en algoritme, en
  datastruktur, et kjøretidsfaktum, en definisjon eller en metode som ikke er
  innført tidligere i kapitlet (t.o.m. eksempelet rett foran) eller i et kapittel
  som står i Forkunnskaper-blokken. Konkrete feller i TDT4120:
  - bruke masterteoremet i kap. 2.1 (`Merge-Sort`-rekurrensen) uten å referere
    kap. 1.4 — kap. 2.1 har `tdt4120-1-4` som prerequisite nettopp derfor;
  - be om `Heapsort` i kap. 3.1 før haugegenskapen og `Max-Heapify` er innført i
    samme kapittel;
  - bruke `Union-Find` i `MST-Kruskal` (kap. 4.2) uten å referere kap. 3.5;
  - bruke **pseudopolynomisk** i kap. 5.2 uten å ha innført begrepet der — det
    hentes formelt inn igjen i kap. 7.2, men kap. 5.2 kommer FØRST og må derfor
    innføre det selv, i den formen kapitlet trenger;
  - bruke 0-1-ryggsekkens `\Theta(nm)` som «pseudopolynomisk» i kap. 6.2 før
    samme kapittel har koblet `m` til en tallverdi;
  - bruke DP eller maks-flyt i designdrillen 8.2 uten at Del 5 og Del 6 står i
    Forkunnskaper;
  - bruke `\lg`-notasjonen uten at kap. 1.1 har sagt at $\lg n = \log_2 n$.
- **Unntak:** prøvekapitlene (`tdt4120-<del>-prove`) og øvingseksamenene
  (kap. 8.3–8.5) følger sin egen arketype — komplett sett først, løsninger i
  collapsibles.
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer kun
  REKKEFØLGEN.

---

## 2. Filplassering og filantall

Ett JSON-dokument per kapittel: `src/lib/data/chapters/<kapittel-id>.json`
(f.eks. `tdt4120-3-1.json`). Quiz til
`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`.

IKKE rør `_registry.json`, `_all.json`, `textbook-courses*.ts`, `quiz-data*.ts`,
`institusjoner.ts` eller `kildegrunnlag.ts` — wiring gjøres sentralt av
byggeleder med `scripts/hoyskolebok/wire-bok.py`. Boka registreres på
institusjon **NTNU** med navnet «TDT4120 Algoritmer og datastrukturer»
(`BOKCONFIG.json`).

Boka består av **45 kapittelfiler**:

- **38 innholdskapitler**: 1 eksamenskart (0.1) + 32 tema-/drillkapitler
  (1.1–7.4) + 5 eksamenstreningskapitler (8.1–8.5).
- **7 prøvekapitler**: `tdt4120-1-prove` … `tdt4120-7-prove`. **Del 0 og Del 8
  har INGEN prøvekapittel** — Del 0 er metakapitlet, og i Del 8 er 8.3–8.5 selve
  vurderingskapitlene.

Pluss **38 quiz-staging-filer** (én per innholdskapittel, også for 8.3–8.5 som
har kvote 16 hver; prøvekapitler har ingen quiz).

**Generer JSON via python `json.dump`** (garantert gyldig escaping av `\` og
`"`). Skriv aldri JSON for hånd i denne boka — den er full av LaTeX og
pseudokode. Se «Tekniske feller» T1.

---

## 3. Kapittel-JSON (toppnivå)

```json
{
  "id": "tdt4120-3-1",
  "courseId": "tdt4120",
  "chapterNumber": "3.1",
  "title": "…(fra skjelettet, ORDRETT)…",
  "description": "…(setningen fra skjelettet, ORDRETT)…",
  "estimatedMinutes": 55,
  "competenceGoals": ["kunne bygge en maks-haug fra et vilkårlig array og forklare hvorfor det tar lineær tid", "…"],
  "content": [ "…blokker…" ],
  "exercises": []
}
```

`chapterNumber` = skjelettets `number` (`<del>.<nr>`; prøvekapitler `<del>.P`).
**ALDRI lineær nummerering** («12») — alltid del-basert («3.1»). Lineær
nummerering ødelegger bokforsidens seksjonsinndeling (JUS1111-lærdommen).

`competenceGoals`: 2–4 «kunne …»-formuleringer avledet av kapitlets
innholdskontrakt. **Ingen kald kode her** — ingen bar «sjanger C», «felle #2»,
ingen karakterbokstav, ingen uforklart `\le_p`. Skriv «kunne avgjøre hvilken vei
en reduksjon må gå for å vise at et problem er vanskelig», ikke «kunne sjanger
G». Målene er Skolesagas egne formuleringer, aldri kopi av NTNUs offisielle
læringsutbytte.

`exercises` er ALLTID tom liste — oppgaver ligger som `exercise`-blokker inline
i `content`.

### 3.1 Kapitteltitler og metadata tas ORDRETT fra `SKJELETT.md` §4

`id`, `title`, `description`, `estimatedMinutes` og `prerequisites` tas
**ORDRETT** fra skjelettet — aldri fra en byggeprompt, aldri omskrevet, aldri
forkortet, heller ikke «DRILL — »-prefikset eller tankestreken.

| id | nr. | `estimatedMinutes` | type | Quiz · Fc | title (ORDRETT) |
|---|---|---|---|---|---|
| `tdt4120-0-1` | 0.1 | 35 | eksamenskart | 14 · 14 | Eksamenskartet — slik testes TDT4120 |
| `tdt4120-1-1` | 1.1 | 45 | teori | 18 · 18 | Asymptotisk notasjon — de fem symbolene |
| `tdt4120-1-2` | 1.2 | 50 | teori | 18 · 14 | Forenkling av asymptotiske uttrykk |
| `tdt4120-1-3` | 1.3 | 80 | drill | 22 · 10 | DRILL — Asymptotisk forenkling og notasjon |
| `tdt4120-1-4` | 1.4 | 50 | teori | 16 · 16 | Rekurrenser — masterteoremet |
| `tdt4120-1-5` | 1.5 | 55 | teori | 16 · 16 | Rekurrenser — iterasjon, substitusjon og splitt-og-hersk |
| `tdt4120-1-6` | 1.6 | 80 | drill | 18 · 10 | DRILL — Rekurrensløsning med navngitt metode |
| `tdt4120-2-1` | 2.1 | 55 | teori | 18 · 22 | Sammenligningsbaserte sorteringer |
| `tdt4120-2-2` | 2.2 | 45 | teori | 16 · 18 | Lineær sortering og stabilitet |
| `tdt4120-2-3` | 2.3 | 45 | teori | 12 · 14 | Utvelgelse — Partition, Randomized-Select og Select |
| `tdt4120-2-4` | 2.4 | 80 | drill | 20 · 12 | DRILL — Sortering: håndkjøring, kjøretid og kombinasjon |
| `tdt4120-3-1` | 3.1 | 55 | teori | 16 · 20 | Hauger og Heapsort |
| `tdt4120-3-2` | 3.2 | 50 | teori | 16 · 18 | Binære søketrær |
| `tdt4120-3-3` | 3.3 | 85 | drill | 20 · 12 | DRILL — Håndkjøring av hauger og BST |
| `tdt4120-3-4` | 3.4 | 45 | teori | 14 · 16 | Hashing |
| `tdt4120-3-5` | 3.5 | 55 | teori | 16 · 18 | Køer, stakker, amortisert analyse og disjunkte mengder |
| `tdt4120-4-1` | 4.1 | 60 | teori | 16 · 20 | Grafrepresentasjon, traversering og topologisk sortering |
| `tdt4120-4-2` | 4.2 | 55 | teori | 16 · 18 | Minimale spenntrær — Prim og Kruskal |
| `tdt4120-4-3` | 4.3 | 60 | teori | 16 · 20 | Korteste vei fra én kilde — Dijkstra, Bellman-Ford, DAG |
| `tdt4120-4-4` | 4.4 | 50 | teori | 14 · 16 | Alle-til-alle korteste vei |
| `tdt4120-4-5` | 4.5 | 85 | drill | 18 · 10 | DRILL — Håndkjøring av grafalgoritmer |
| `tdt4120-5-1` | 5.1 | 55 | teori | 16 · 18 | Flytnett, restnett og snitt |
| `tdt4120-5-2` | 5.2 | 55 | teori | 16 · 18 | Ford-Fulkerson, Edmonds-Karp og maks-flyt/min-snitt |
| `tdt4120-5-3` | 5.3 | 85 | drill | 18 · 10 | DRILL — Håndkjøring av maks-flyt og flyt-modellering |
| `tdt4120-6-1` | 6.1 | 55 | teori | 16 · 18 | Dynamisk programmering — mekanikk |
| `tdt4120-6-2` | 6.2 | 55 | teori | 16 · 16 | DP-klassikere — stavkapping, LCS og ryggsekk |
| `tdt4120-6-3` | 6.3 | 85 | drill | 18 · 10 | DRILL — DP-design og rekonstruksjon |
| `tdt4120-6-4` | 6.4 | 50 | teori | 14 · 16 | Grådighet — Huffman og aktivitetsutvelgelse |
| `tdt4120-6-5` | 6.5 | 50 | teori | 14 · 14 | Stabil matching — Gale-Shapley |
| `tdt4120-7-1` | 7.1 | 50 | teori | 16 · 18 | P, NP og co-NP — sertifikat og verifikasjon |
| `tdt4120-7-2` | 7.2 | 55 | teori | 18 · 16 | Polynomiske reduksjoner og reduksjonsretning |
| `tdt4120-7-3` | 7.3 | 50 | teori | 14 · 18 | NP-komplette problemer |
| `tdt4120-7-4` | 7.4 | 85 | drill | 20 · 10 | DRILL — Reduksjonsretning og NP-argumenter |
| `tdt4120-8-1` | 8.1 | 45 | sjangerguide | 12 · 12 | Kortsvarssjangeren — å skrive presise, korte svar |
| `tdt4120-8-2` | 8.2 | 90 | drill | 16 · 8 | DRILL — Åpen algoritmedesign via reduksjon |
| `tdt4120-8-3` | 8.3 | 240 | øvingseksamen | 16 · 0 | Øvingseksamen 1 — bredt ordinært sett (kode E) |
| `tdt4120-8-4` | 8.4 | 240 | øvingseksamen | 16 · 0 | Øvingseksamen 2 — datastruktur- og graftungt sett |
| `tdt4120-8-5` | 8.5 | 240 | øvingseksamen | 16 · 0 | Øvingseksamen 3 — designtungt topp-sett |

Prøvekapitlene har tittelen «Prøver til del `<N>`: `<deltittel>`», der
deltittelen er `sectionNames`-tittelen fra `BOKCONFIG.json`:

| id | nr. | Tittel (ORDRETT) | Prøver à |
|---|---|---|---|
| `tdt4120-1-prove` | 1.P | Prøver til del 1: Asymptotisk analyse og rekurrenser | 25 · 30 · 30 · 35 min |
| `tdt4120-2-prove` | 2.P | Prøver til del 2: Sortering og utvelgelse | 25 · 30 · 30 · 35 min |
| `tdt4120-3-prove` | 3.P | Prøver til del 3: Datastrukturer: hauger, søketrær og hashing | 30 · 30 · 25 · 30 min |
| `tdt4120-4-prove` | 4.P | Prøver til del 4: Grafalgoritmer: traversering, spenntrær og korteste vei | 30 · 30 · 35 · 35 min |
| `tdt4120-5-prove` | 5.P | Prøver til del 5: Maksimal flyt | 30 · 35 · 30 · 40 min |
| `tdt4120-6-prove` | 6.P | Prøver til del 6: Dynamisk programmering, grådighet og stabil matching | 30 · 40 · 30 · 30 min |
| `tdt4120-7-prove` | 7.P | Prøver til del 7: NP-kompletthet og reduksjoner | 25 · 35 · 30 · 35 min |

Innholdet i hver prøve er fastlagt i skjelettets «Prøve-kvote Del N»-linje og
skal følges (f.eks. Del 3: 3.A haug-håndkjøring · 3.B BST-håndkjøring · 3.C BST
mot haug og kjøretider · 3.D hashing, kø med wraparound og `Union-Find`).

---

## 4. Blokktyper (eksakte felt — strukturreferanse: `src/lib/data/chapters/econ1310-2-1.json`; kodeformat: `src/lib/data/chapters/in2010-4-4.json`)

- `text`: `{ "id", "type": "text", "content": "markdown + LaTeX + ```text-gjerder" }`
- `definition`: `{ "id", "type": "definition", "title": "Begrepet", "content": "…" }`
  — **title er OBLIGATORISK** (flashcard-kilden). I dette faget kalibreres kortene
  som **navn ↔ kjøretid ↔ krav/egenskap** (skjelettets dokumenterte avvik): `title`
  er navnet (algoritme, struktur, begrep, symbol), `content` gir forklaringen i
  ORD først, deretter presis kjøretid og kravet/egenskapen. **Aldri en formel som
  første linje** — vegrere hopper over blokken, og dermed flashcard-stoffet.
  Riktig form: title «Dijkstra», content «finner korteste vei fra én kilde ved å
  plukke den nærmeste ubehandlede noden fra en prioritetskø og slakke kantene ut
  fra den. Kjøretid $O(E\lg V)$ med binærhaug. **Krever ikke-negative kantvekter**
  — med én eneste negativ kant kan svaret bli galt, og da må du bruke
  `Bellman-Ford`.» Fordi eksamen er hjelpemiddelfri, ER dette puggematerialet.
- `theorem`: `{ "id", "type": "theorem", "title": "…", "content": "…" }`
  — brukes til to ting (skjelettets dokumenterte avvik): (a) **resultatene som
  skal sitte i ryggmargen** — masterteoremet, snittegenskapen, maks-flyt/
  min-snitt-teoremet, heltallsteoremet, $\Omega(n\lg n)$-grensen for
  sammenligningssortering, reduksjonsretningen, `P=NP`-konsekvensen — og
  (b) **pseudokode-kontrakter**: hvert algoritmekapittel har minst én `theorem`
  med tittel «Pseudokode-kontrakt: `<CLRS-Navn>`» etter §P2.
- `example`: `{ "id", "type": "example", "title": "Eksempel N: …", "problem": "…", "solution": "…" }`
  — `solution` = A-besvarelse i **kortsvarsform** (§S2). Ved håndkjøring: full
  sporingstavle (§H) fulgt av sluttilstanden alene, i eksamensformatet.
- `tip` / `warning`: `{ "id", "type", "title", "content" }`
- `exercise`: `{ "id", "type": "exercise", "exercise": { "id", "number", "type": "classic", "difficulty": "lett"|"middels"|"vanskelig", "task", "solution", "hints": [] } }`
  — ALDRI `solutionVideo` / `allowsUpload` / `allowsCanvasDrawing` / `answer`.
  Ikke bruk `subTasks`-feltet (deloppgaver skrives inline, se §11).
- `image`: `{ "id", "type": "image", "src": "/images/textbook/tdt4120/<navn>.svg", "alt": "…", "caption": "…" }`
  — se §G. Figuren MÅ finnes på disk OG være lastet opp til Storage.
- `collapsible`: `{ "id", "type": "collapsible", "title", "buttonText": "Vis …", "content": [ "…blokker…" ] }`
  — Notasjons- og pseudokodeliste, prøver, repetisjon, kald bank. **ALDRI tom:**
  feltnavnet er `content` og skal ha blokker (en `text`-nøkkel eller tom array
  rendrer som en tom boks).

Blokk-id-er: `<kapittel-id>-<løpenavn>`, f.eks. `tdt4120-3-1-def-3`,
`tdt4120-3-1-oppg-5`, `tdt4120-3-1-fig-2`. Unike innen kapitlet (porten sjekker).

---

## 5. Obligatorisk kapittelstruktur

### 5.1 Teorikapitler (0.1 unntatt; 1.1, 1.2, 1.4, 1.5, 2.1–2.3, 3.1, 3.2, 3.4, 3.5, 4.1–4.4, 5.1, 5.2, 6.1, 6.2, 6.4, 6.5, 7.1–7.3, 8.1)

Alltid, i denne rekkefølgen først i kapitlet:

1. `tip` **Eksamensvinkel** — frekvens, vekt og sjangre med tallene fra
   skjelettets Eksamensbelegg-felt for NETTOPP dette kapitlet (og ingen andre
   tall). Sjangerkoden skrives ut i klarspråk ved første bruk i kapitlet:
   «sjanger C — håndkjøring, altså at du utfører algoritmen steg for steg og
   oppgir bare sluttilstanden». Frekvensen skrives med **oppgitt nevner** (§K2):
   «94 % (16 av de 17 settene i grunnlaget)». Tipen sier også hvilken
   prioritetsklasse temaet har, i klarspråk (§S3): «høyeste prioritet — dette må
   sitte».
2. `text` **Forkunnskaper** (`## Forkunnskaper` som første linje i blokken).
   Blokken skal (i) lenke kapitlene i boka dette bygger på — markdown-lenker
   `[kap. X.Y](/tdt4120/tdt4120-X-Y)`, og (ii) lenke kryssbok der forkunnskapen
   ikke dekkes i boka (tabellen i §14 — KUN filer som finnes). Har kapitlet
   ingen forkunnskaper (1.1), sier blokken det.
   **I tunge, sene kapitler skal blokken VISE de oppfriskede resultatene**, ikke
   bare lenke til dem. ⚠ Selve frasen «Sist du var her» er FORBUDT — boka vet
   ikke hvor leseren har vært. Skriv «Dette sto der», «Fra kap. X» eller
   «I det kapitlet lærte du …». Blokken skal
   VISE de 2–3 nøkkelresultatene ferdig oppfrisket, ikke bare lenker. Det er
   ufravikelig i **4.2** (`Union-Find` fra 3.5), **4.5** (haug-/BST-reglene fra
   3.3 og slakkeregelen fra 4.3), **5.3** (restnettdefinisjonen fra 5.1),
   **6.3** (rekurrensmønsteret fra 6.2), **7.2** (pseudopolynomisk fra 5.2) og
   **8.2** (flytmodellen fra 5.3 og DP-oppskriften fra 6.3).
3. `collapsible` **Notasjons- og pseudokodeliste** — se §5.5. (Skjelettet
   plasserer den her, rett etter Forkunnskaper; README-malen plasserer
   symbollisten sist. **Skjelettet vinner**: i et algoritmefag er listen et
   arbeidsverktøy leseren slår opp i mens hun leser.)

Deretter DNA-løpet i læringsløkker: `text` konkret anker/motivasjon (maks 2–3
avsnitt — dette er ikke et dannelsesfag) → `definition`/`theorem` (flashcard-
kilden — toppnivå med title!) → `text` utledning med «Intuisjon:»-linje etter
HVERT steg, men **kun der eksamen krever aktiv utledning** (§A4) → `example` med
gjennomarbeidet case eller kjørt sporingstavle → `exercise` inline som trener
nøyaktig den biten → neste bit. 2–4 eksempler per kapittel, det siste på
eksamensnivå; 6–12 `exercise` i kapitlet, stigende (lett → middels →
vanskelig), de vanskeligste = eksamenskloner av kapitlets sjangre.

`warning` **Typiske feil** (fra feilkatalogen §12, med feilkoden glosset ved
første bruk i kapitlet) plasseres der den er mest relevant — ofte rett etter
algoritmen som utløser feilen. Minst én per kapittel (porten krever en
`warning`).

Til slutt i kapitlet, i denne rekkefølgen:

- begrepsbank-`definition`-blokker opp til flashcard-kvoten. Hver stor
  begrepsbank åpner med standard-notisen: «Begrepsbanken er flashcard- og
  repetisjonsstoff — den gjentar det du nettopp har lest. Hopp trygt over ved
  førstegangslesing; tidsanslaget for kapitlet gjelder kjernestoffet.»
- `collapsible` **Repetisjonsoppgaver** — 4–6 korte oppgaver fra kapitlene dette
  bygger på.

**Kjøretidstabell:** hvert kapittel med flere algoritmer avsluttes med en
markdown-tabell `navn → best / verste / forventet + krav/egenskap`. Disse er
bokas viktigste puggeflater og samles i Del 0 (§13).

### 5.2 Drillkapitler (1.3, 1.6, 2.4, 3.3, 4.5, 5.3, 6.3, 7.4, 8.2)

`tip` Eksamensvinkel → `text` Forkunnskaper → `collapsible` Notasjons- og
pseudokodeliste → `text`/`theorem` **Løsningsoppskrift** (den nummererte
algoritmen ordrett fra skjelettets «Innholdskontrakt (løsningsoppskrift)»-felt)
→ `example` **gjennomarbeidet eksamenscase med margnotater** — hva som gir
uttelling ved HVERT steg, hva som gir delpoeng, og hvor «svar bare på det du
blir spurt om» slår inn → **10–16 `exercise` på eksamensnivå** som roterer
sjangerens varianter, alle med `solution` + `hints`, alle med nyskrevne
kontekster (§16). Antallet per kapittel står i skjelettets innholdskontrakt
(1.3: 12–16; 1.6, 2.4, 3.3, 4.5, 7.4, 8.2: 10–14; 5.3, 6.3: 8–12).

Drillkapitlene har lav flashcard-kvote (8–12) — de er treningsbanker, ikke
begrepsbanker. Signalbokser som varsler hva en drilloppgave tester, står **ETTER**
oppgaven (som fasit-oppfølging eller collapsible hint), aldri foran.

Håndkjøringsdrillene (2.4, 3.3, 4.5, 5.3) følger i tillegg §H uten unntak.

### 5.3 Prøvekapitler (`tdt4120-1-prove` … `tdt4120-7-prove`)

- `tip`: dekning + tidsbruk. Deklarerer **«4 prøver à ~25–40 min»** med den
  faktiske fordelingen fra tabellen i §3.1, pluss «kan trygt deles over flere
  kvelder — én prøve per økt», og sier **hvor flervalget bor** (statiske
  flervalg inline i prøveteksten; de interaktive flervalgsspørsmålene ligger i
  quizen til delens kapitler).
- `text` **Forkunnskaper** (porten krever «Forkunnskaper» i alle kapitler
  utenom Del 0), med markdown-lenker til delens kapitler.
- Fire `collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med
  nyskrevne oppgaver i eksamens sjangre og **full fasit** i kortsvarsform (§S2),
  med delpoeng-notat der oppgaven har flere ledd.
- **Statiske flervalg har STOKKEDE fasit-bokstaver** — aldri «alle a»; porten
  flagger mønsteret «1a · 2a · 3a». Se §M3 for hvordan de måles.
- Ja/nei-prøver (sjanger F) blander reelle og feller — aldri «alle nei».
- For sjanger C: **full sporingstavle i fasiten** (§H) — prøvekapitlene er IKKE
  unntatt §H. Det er nettopp i prøvene en feil fasit gjør mest skade.
- Etter hver prøvefasit: avkryssbar selvdiagnose-sjekkliste (☐), formulert
  fagkonkret: «☐ oppga du bare det som ble etterspurt, ikke mer?
  ☐ er kjøretiden det strammeste uttrykket du kan gi? ☐ står `\Theta` der
  garantien er tett, og `O` der den bare er øvre? ☐ går reduksjonen FRA det
  vanskelige problemet? ☐ leverte du hele tabellen, inkludert døde celler?»
- Kap-referanser i fasitene som markdown-lenker.
- Ingen begrepsbank og ingen quizkvote for prøvekapitler.

Prøvekapitler regnes som vurderingskapitler i `sjekk-bok.py` og er derfor
unntatt kravene om «Typiske feil»-warning og notasjons-/symbolliste.

### 5.4 Eksamenstrening (Del 8)

- **8.1 Kortsvarssjangeren** (`estimatedMinutes` 45) er et strategikapittel og
  følger teorikapittel-strukturen uten tung utledning: `tip` Eksamensvinkel →
  `text` Forkunnskaper → **svarformen per sjanger** (§S2-tabellen) →
  delvis-uttelling-strategien → **tidsbudsjett** (~12 min per oppgave på 20 likt
  vektede oppgaver på fire timer; ikke bli sittende fast på én åpen
  designoppgave når 19 andre teller like mye) → læringsmål-treff → 6–8
  «forbedre svaret»-oppgaver der et langt, upresist svar skal skrives om til det
  korte som gir full uttelling.
- **8.2 Designdrillen** følger §5.2, men er tverrgående: den gjenbruker maks-flyt
  (Del 5), DP (Del 6), Gale-Shapley (6.5) og BFS (4.1), og skal derfor ha
  oppfrisket forkunnskap som VISER flytmodellen og DP-oppskriften
  (uten frasen «Sist du var her», jf. §5.1).
- **8.3–8.5 Øvingseksamener** (`estimatedMinutes` 240 hver): `tip` med format
  (4 timer, ~20 kortsvarsoppgaver à 5 %, hjelpemiddelkode E, ~12 min per
  oppgave) og at settet trygt kan deles over flere kvelder → `text`
  Forkunnskaper → nyskrevet oppgavesett som `text`-blokker, i stigende
  vanskelighet med designoppgavene til slutt → `collapsible` løsningsforslag
  **per oppgave**, skrevet i kortsvarsform med margnotat om hva som gir
  uttelling og hvor delpoenget faller. Miksen per sett er fastlagt i skjelettets
  §4 for 8.3–8.5 og skal følges.
- Lange løsningsdeler har «— naturlig pausepunkt —»-markører.

**Kald bank:** boka skal ha ÉN merket kald bank (8–10 oppgaver med uvante
innpakninger, UTEN hint, fasit = momentliste) — den legges i **kap. 8.2** som en
egen `collapsible` «Kald bank — uten hint».

### 5.5 «Notasjons- og pseudokodeliste» — navn, plassering og port-triks

> **Navnet er skjelettets dokumenterte avvik fra README** («Symbol- og
> formelliste» → «Notasjons- og pseudokodeliste», fordi apparatet i et
> algoritmefag ikke bare er greske bokstaver, men kjøretidsuttrykk, grafnotasjon
> og pseudokode-navn med kontrakt). `sjekk-bok.py` krever den **literale**
> strengen «Symbol- og formelliste» i hvert kapittel som bruker LaTeX-symboler,
> så blokken skal ha:
>
> - `title`: `"Notasjons- og pseudokodeliste"`
> - `buttonText`: `"Vis notasjon og pseudokode"`
> - første linje i første `text`-blokk inne i collapsiblen, ORDRETT:
>   «Oppslagsverk — alt her forklares underveis i kapitlet. Dette er kapitlets
>   Symbol- og formelliste, tilpasset et algoritmefag: den lister
>   kjøretidsuttrykk og pseudokode-operasjoner i stedet for bare greske
>   bokstaver.»
>
> Da er både README-notisen og porten oppfylt uten å endre skript.

Innholdet, i tre deler — for **dette delkapitlet**, ikke arvet fra tidligere:

1. Markdown-tabell `| Symbol | Betydning |` med de asymptotiske og
   graf-teoretiske symbolene kapitlet bruker: $n$, $V$, $E$, $h$, $\alpha$,
   $O$, $\Omega$, $\Theta$, $o$, $\omega$, $\lg$, $G=(V,E)$, $w(u,v)$,
   $c_f(u,v)$, $d[u]$, $\pi[u]$, snittet $(S,T)$, $\le_p$,
   $\lfloor\cdot\rfloor$.
2. Markdown-tabell `| Algoritme/operasjon | Kontrakt | Kjøretid |` med **hver**
   CLRS-algoritme kapitlet bruker, én linje hver: inn/ut-kontrakt + kjøretid.
   Eksempel: `` `Build-Max-Heap(A)` `` | «bygger en maks-haug av `A[1..n]` på
   stedet ved å kalle `Max-Heapify` nedenfra og opp» | $\Theta(n)$.
3. «**Formler i dette delkapitlet:**» med display-LaTeX for det som faktisk er
   formler (masterteoremets tre tilfeller; haugindeksene
   $\lfloor i/2\rfloor$, $2i$, $2i+1$; $c_f(u,v)=c(u,v)-f(u,v)$; lastfaktoren
   $\alpha = n/m$; vekstordningen
   $1 < \lg n < n < n\lg n < n^2 < n^3 < 2^n < n!$) med én linjes tolkning hver.

Unntak kun for helt notasjonsfrie kapitler — de finnes knapt i denne boka.

---

## §K KILDEKONTRAKTEN (bindende — telt på disk 1. august 2026)

### §K1 Hva arkivet faktisk inneholder

Talt i `~/Desktop/Eksamner/_nedlastet-2026-07-30/TDT4120/arkiv/`
(`~/Desktop/Eksamner/NTNU/TDT4120/` er en delmengde — 17 terminer 2015–2023 —
og inneholder ingenting det store arkivet mangler):

| Størrelse | Tall |
|---|---|
| Eksamensfiler i mappa (pluss `guide.pdf` og `pensumhefte.pdf`) | **177** |
| Distinkte eksamensdatoer (år + termin) | **73** |
| — derav med løsningsforslag | **72 (99 %)** |
| **Under emnekoden TDT4120** | **45 terminer, des 2003 – des 2025** |
| — derav med NTNUs offisielle løsningsforslag | **45 av 45 (100 %)** |
| Forgjengerkoden 45011 (NTH) | 13 terminer, jan 1992 – des 1997 |
| Forgjengerkoden SIF8010 | 10 terminer, des 1998 – aug 2003 |
| Parallellkoden 78010/45011 (kortere sett, samme dag som SIF8010) | 2 terminer, des 1998 og jul 2000 |
| **Sum i TDT4120-linjen (distinkte datoer)** | **68, 1992–2025** |

**Nabokoder som IKKE er TDT4120 og som holdes UTENFOR alt:**

- **IT1105** (4 terminer, jun 2004 – jun 2007) — et eget emne «Algoritmer og
  datastrukturer» med egen eksamensdato, egen varighet og kalkulator som tillatt
  hjelpemiddel. Merk at des 2004-settet er trykt med topptekst
  «IT1105/TDT4120»; det er likevel talt under TDT4120 fordi filnavnet og
  eksamensdatoen tilhører TDT4120-serien. De fire rene IT1105-junisettene er
  ikke med.
- **MNFIT112**, som i arkivet ligger **feilnavngitt som `mnfit115`**
  (2002.jun) — PDF-ens egen topptekst er «EKSAMENSOPPGÅVE I FAG MNFIT112 –
  ALGORITMER OG DATASTRUKTURAR», nynorsk, annen faglærer, annet fakultet. Dette
  er den eneste av de 73 datoene uten løsningsforslag. **Bruk den ikke.**

> **NTNU-fella som var varslet:** arkivet koder ofte dokumenttype som
> `E_`/`L_`-prefiks i filnavnet, og TMA4240/TMA4245 deler arkivmappe. For
> TDT4120 er dokumenttypen i stedet kodet som `.losn.` / `.oppg.` og målformen
> som `.no.` / `.en.`, og mappa er ikke delt med et søsteremne. Men
> nabokode-risikoen er reell og materialiserte seg: **ett filnavn er feil**
> (`mnfit115` = MNFIT112), og fem terminer i mappa tilhører andre emner. Sjekk
> alltid PDF-ens egen topptekst før du bruker et sett som belegg.

### §K2 Nevnerne — hvilket tall gjelder hvor

Dette er den viktigste tabellen i §K. **Enhver «N av M»- eller
prosentpåstand i boka skal ha nevneren sin fra denne tabellen, og nevneren skal
stå i teksten.** Blandede nevnere i samme setning er forbudt.

| Påstandstype | Nevner | Spenn | Kilde |
|---|---|---|---|
| **Temafrekvenser** («asymptotikk 100 %», «maks-flyt 94 %») | **17 sett** | aug 2015 – aug 2023 | `EKSAMENSANALYSE.md` §2. Dette er de eneste frekvenstallene boka har lov til å bruke. |
| **Dagens eksamensform** (kode E, 4 timer, ~20 oppgaver à 5 %) | **7 terminer** | des 2022 – des 2025 | Talt i §K1-arkivet: hjelpemiddelkode E står trykt på alle sju. |
| **Korona-unntaket** (kode A, hjemmeeksamen) | **5 terminer** | aug 2020 – aug 2022 | Kode A står trykt på alle fem. |
| **Den forrige ordinære formen** (kode D) | **11 terminer** | aug 2013 – nov 2019 | Kode D står trykt på alle elleve. |
| **Arkivets dybde** (markedsføring, kildegrunnlag, Del 0-kildenoten) | **45 TDT4120-terminer**, alle med løsningsforslag | des 2003 – des 2025 | §K1 |

**Konsekvenser (ufravikelige):**

1. **Skjelettets og analysens prosenter har nevner 17.** Skriv «94 % (16 av de
   17 settene i grunnlaget)», aldri «94 % av alle sett» og aldri «94 % (16 av
   45)». Prosenten og antallet skal stemme eksakt med skjelettets
   Eksamensbelegg-felt for NETTOPP ditt kapittel. **Tell før du skriver; ikke
   oppfinn nye prosenter.**
2. **De 17 settene stopper i august 2023.** Arkivet har fem nyere TDT4120-
   terminer (des 2023, aug 2024, des 2024, aug 2025, des 2025) som **ikke er
   temaregistrert**. Boka skal si det i kildenoten, og skal aldri påstå at
   frekvenstabellen dekker dem.
3. **Finnes ikke tallet, oppgi INTET.** Det finnes ingen karakterstatistikk,
   ingen strykprosent, ingen eksamensrapport og intet sensorpanel for dette
   emnet i arkivet. Skriv aldri «rundt X % stryker», «de fleste kandidater» eller
   «erfaringsmessig». Skriv i stedet det som er belagt, eller ingenting.
4. **Ingen nye opptellinger på egen hånd.** Trenger du et tall som ikke står i
   skjelettet eller i §K2/§K3, skal du la være å tallfeste. Skriv «temaet går
   igjen i grunnlaget» framfor å finne på en brøk.

### §K3 Fem korreksjoner mot skjelett og analyse (kontrakten vinner)

Alle fem er verifisert mot PDF-ene i §K1-arkivet 1. august 2026. **Bygg etter
kolonnen «Skriv dette».**

| # | Skjelettet/analysen skriver | **Skriv dette** | Belegg |
|---|---|---|---|
| **K3.1** | «NTNU-sett med **offisielle løsningsforslag**» — men mange søsterbøker bruker en kildenote-mal som sier at institusjonen ikke publiserer fasit | **NTNU publiserer offisielle løsningsforslag for TDT4120, og har gjort det i hver eneste termin i arkivet.** 45 av 45 TDT4120-terminer (des 2003 – des 2025) har `losn`-fil. Dette er en av fagets største fordeler og skal brukes aktivt | fil-telling §K1; nyeste er des 2025 |
| **K3.2** | «Den viktigste formelle føringen går igjen i **hvert sett**: *Lange svar teller ikke positivt*» (SKJELETT §1) / «En instruks går igjen i **alle sett**» (ANALYSE §1) | **Setningen står trykt i 6 terminer: des 2015, aug 2016, des 2016, aug 2017, des 2017 og des 2018.** Den tilhører papirtidens instruksblokk («svarene skal få plass i rutene på oppgavearkene») og er **borte fra hvert eneste sett fra aug 2019 og framover**, inkludert alle sju kode-E-settene. **Disiplinen** er derimot fortsatt dokumentert — se §S1 | fulltekstsøk i alle 45 TDT4120-sett |
| **K3.3** | Masterteoremets tilfelle 2: «pensumvariant `f(n)=Θ(n^{log_b a} lg^k n)`, **`k>0`**» | **Skriv `k \ge 0`.** Med `k>0` faller `Merge-Sort` (`T(n)=2T(n/2)+n`, `k=0`) utenfor tilfelle 2 — og det motsier bokas egen eksempeltabell OG to fasiter. Det dokumenterte unntaket er **negativ `k`** | des 2016-fasit bruker tilfelle 2 med `k=0`; aug 2025-fasit likeså; aug 2023-fasit avviser `k=-1` og tar oppgaven ut av sensur. Se §A2 |
| **K3.4** | Stabil matching/Gale-Shapley: «**12 %** (2 av 17), nivå 3, prioritet **kjenne**» | Behold kvoten og kapittelplasseringen (skjelettet er faglig autoritet), men skriv frekvensen slik: **«2 av de 17 settene i grunnlaget — men verifisert til stede i 6 av de 7 settene med dagens hjelpemiddelkode E (des 2022 – aug 2025), fraværende bare i des 2025. Regn med at den kommer.»** Kap. 6.5 og 8.2 skal behandle den som et tema du må kunne, ikke som kuriosa | nøkkelordssøk i alle 7 kode-E-sett med fasit |
| **K3.5** | Analysen omtaler §5 som feil «i **fasitene**», og `DNA-regnefag.md` sier «de konkrete feilene fra **sensorveiledningene**» | **Det finnes ingen sensorveiledninger for TDT4120.** Arkivet har oppgavesett og løsningsforslag. Skriv alltid «løsningsforslagene viser/krever/fremhever …», aldri «sensor sier» eller «sensorveiledningen». Ordet `sensorveiledning` er grep-forbudt (§15) | fil-telling §K1 |

### §K4 Hva løsningsforslagene faktisk gir oss (og som skal utnyttes)

Verifisert i PDF-ene:

- **Fasiten oppgir læringsmålet per oppgave**, fra ca. 2016 og framover:
  «Relevant læringsmål: Kunne løse rekurrenser med masterteoremet.» Det er en
  gullgruve: et godt svar treffer nøyaktig den ferdigheten. Boka skal derfor
  formulere `competenceGoals` og Eksamensvinkel-tipene i samme ånd
  («kunne utføre», «kunne definere», «kunne løse», «forstå hvorfor»).
- **Fasitens egen forbeholdslinje** (verifisert ordrett tilstede i des 2025):
  løsningsforslagene er *eksempler på svar som vil gi uttelling*, og mange
  beslektede svar godtas, særlig ved forklaringsoppgaver. Boka skal si dette
  eksplisitt i kap. 0.1 og 8.1 — det er en av de mest beroligende opplysningene
  faget har.
- **Delpoeng er dokumentert flere ganger**: «gis det 1 poeng», «det gis uansett
  bare 4 av 5 poeng», «her får man 4 poeng for `Θ(n)`». Boka skal derfor
  markere hovedpoenget først i definisjoner (§S2) og si at delvis riktig
  håndkjøring gir delvis uttelling.
- **Robust sensur er dokumentert to ganger**: en rekurrens ble tatt ut av sensur
  fordi den falt utenfor pensumvarianten av masterteoremet (aug 2023), og en
  skrivefeil i en pseudokodelinje ble tatt hensyn til under sensur (aug 2025).
  Boka kan si at dette skjer — men skal ALDRI oppfordre til å satse på det.
- **Fasitene siterer læreboka med kapittel- og sidetall.** Boka skal **ikke**
  gjøre det (§K5).

### §K5 Pensumanker — uttømmende liste

**Ett pensumanker er hjemlet for TDT4120, og bare ett:**

> **Cormen, Leiserson, Rivest og Stein — *Introduction to Algorithms* (CLRS).**
> Belegg: `EKSAMENSANALYSE.md` §8 dokumenterer CLRS som pensum gjennom hele
> perioden, og faglærer Magnus Lie Hetland som faglig kontakt på samtlige sett.

Regler som følger:

1. **CLRS skal navngis** der boka forklarer hvorfor notasjonen og algoritmenavnene
   er som de er (kap. 0.1, og ved første pseudokode-kontrakt i hver del). Det er
   grunnen til at `Merge-Sort` heter `Merge-Sort` og ikke `mergesort`.
2. **Ingen andre avsendere innføres som pensumanker.** Ikke Sedgewick, ikke
   Kleinberg–Tardos, ikke Skiena, ikke Knuth, ikke Hetlands egne bøker, ikke
   forelesningsnotater. De står ikke på den hjemlede lista.
3. **Algoritmenavn er allmenn faglig navngiving, ikke tilskrivning.** Dijkstra,
   Prim, Kruskal, Bellman–Ford, Floyd–Warshall, Ford–Fulkerson, Edmonds–Karp,
   Huffman, Gale–Shapley og Borůvka kan brukes fritt som navn. Boka skal
   **ikke** påstå hvilket CLRS-kapittel en algoritme står i, hvilken utgave som
   er pensum, eller noe biografisk/historisk den ikke har kilde for.
4. **Gale-Shapley er et konkret eksempel på regel 3.** Algoritmen er verifisert i
   oppgavesettene (§K3.4), men **hvor den står i pensumlitteraturen er ikke
   dokumentert i arkivet**. Skriv den derfor uten tilskrivning til et
   pensumkapittel: «`Gale-Shapley` finner en stabil matching …», aldri
   «`Gale-Shapley` i CLRS kapittel N». Dette er den generelle regelen: **skriv
   rundt det usikre framfor å merke det.**
5. **Ingen sidetall og ingen kapittelnumre i pensumlitteraturen** noe sted i
   boka (grep-sjekkes, §15). Utgavene skifter; fasitenes sidehenvisninger er
   deres, ikke våre.
6. **`(verifiser)`-markøren skal ligge på null.** `sjekk-bok.py` avviser
   gjenstående markører, og en bok full av forbehold er et redaksjonelt problem,
   ikke en løsning. Er en påstand usikker: **skriv rundt den** — utelat den, gjør
   den mindre spesifikk, eller etterregn den (§A). Markøren er en nødutgang for
   noe som må løses før ferdigmelding, ikke et arbeidsverktøy.

### §K6 Sannferdig kildenote — mal for kap. 0.1

Bruk denne ordlyden eller en trofast omskrivning. **Språket kan tilpasses,
tallene ikke.**

> Prioriteringene i denne boka bygger på NTNUs eget eksamensarkiv for TDT4120.
> **NTNU publiserer offisielle løsningsforslag til hver eneste eksamen i dette
> faget** — arkivet vårt har 45 eksamensterminer fra desember 2003 til desember
> 2025, og alle 45 har fasit. Det er uvanlig godt, og det er grunnen til at vi
> kan si noe presist om hva som faktisk gir uttelling i stedet for å gjette.
> **Frekvenstallene** du møter i kapitlene («100 %», «94 %») er telt i de **17
> settene fra august 2015 til august 2023** som er gjennomgått tema for tema —
> det er nevneren hver gang. De fem nyeste settene (desember 2023 til desember
> 2025) er lest for form og eksamensordning, men ikke temaregistrert, så de
> inngår ikke i prosentene.
> **Arkivet har ingen sensorveiledninger** — det vi vet om hva som premieres,
> kommer fra løsningsforslagene selv, som fra 2016 og framover oppgir hvilket
> læringsmål hver oppgave tester. Løsningsforslagene sier dessuten selv at
> svarene deres bare er *eksempler* på svar som gir uttelling, og at mange
> beslektede svar godtas.
> **Forbehold:** settene fra 2020 til august 2022 var korona-hjemmeeksamener med
> alle hjelpemidler og en annen oppgaveform; de er ikke representative, og det
> sier vi hver gang de nevnes. Alle oppgaver, tall, grafer, navn og
> løsningsforslag i denne boka er nyskrevet av oss.

Opplysningen om at emnet er **aktivt med undervisning høsten 2026** er hentet fra
NTNUs emneside, ikke fra arkivet, og det skal sies der den presenteres: «tallene
er hentet fra NTNUs emneside — sjekk den for ditt eget semester, siden
vurderingsordninger og hjelpemidler kan endres». Boka skal **ikke** omtale
TDT4120 som utfaset, under omlegging eller erstattet: `PROG1001` gir 7,5 sp
reduksjon fra H2026, men det er et Gjøvik-emne fra 2019 og en kryss-campus-
registrering, ikke en erstatningskode (`../EMNESTATUS-2026-07-31.md`).

---

## §S KORTSVARSKONTRAKTEN — presisjon over lengde, og hvor langt belegget rekker

### §S1 Hva som faktisk er dokumentert

Skjelettet kaller «Lange svar teller ikke positivt» bokas viktigste stilføring.
Disiplinen er riktig; **belegget er smalere enn skjelettet sier** (§K3.2). Slik
skal boka formulere det:

| Påstand | Status | Slik skrives den |
|---|---|---|
| Setningen «lange svar teller ikke positivt» | trykt i **6 terminer**, des 2015 – des 2018 | «I settene fra 2015 til 2018 sto det svart på hvitt på oppgavearket: lange svar teller ikke positivt.» ALDRI «i hvert sett» / «i alle sett» |
| Disiplinen i dagens sett | **dokumentert, men annerledes** | Oppgavene sier det direkte i oppgaveteksten: «Du skal her kun svare med output fra algoritmen», «Oppgi svaret i `\Theta`-notasjon», «Forklar kort». Og fasitene svarer med ett tall eller ett uttrykk — des 2025s første fasit er hele svaret: `\Theta(n)`. |
| Hvorfor det gjelder uansett | **strukturelt** | 20 oppgaver teller likt på fire timer. Tid brukt på overflødig utledning er tid tatt fra 19 andre oppgaver. Dette argumentet er alltid sant og krever ingen kilde. |

De fire øvrige metareglene fra analysen §4 (svar bare på det du blir spurt om,
delvis uttelling med hovedpoeng først, læringsmål-treff, robust sensur) er
dokumentert i løsningsforslagene selv (§K4) og kan skrives uten forbehold — så
lenge de tilskrives **løsningsforslagene**, ikke «sensor».

### §S2 Svarformen per sjanger (bindende for ALLE løsningsforslag)

Hver `example.solution`, hver `exercise.solution` og hver prøvefasit skal ha
formen sjangeren krever — og **ikke mer**:

| Sjanger | Svarformen | Typisk lengde |
|---|---|---|
| **A** asymptotisk forenkling | ett strammeste uttrykk | 1 linje |
| **B** rekurrens | **metodens navn** + svaret på riktig form (asymptotisk eller eksakt) + hvilket masterteorem-tilfelle | 1–3 linjer |
| **C** håndkjøring | **kun sluttilstanden**, i det formatet oppgaven ber om (§H4) | tavlen i undervisningen, sluttilstanden alene som svar |
| **D** definisjon | én presis setning, **hovedpoenget først** | 1–2 setninger |
| **E** kjøretid | uttrykket, med `\Theta` vs. `O` bevisst valgt | 1 linje, evt. + én linje utregning |
| **F** «stemmer dette?» | **ja/nei FØRST**, deretter én presis setning | 2 linjer |
| **G** reduksjon/NP | retningen + hva den beviser + hva den **ikke** beviser | 2–4 linjer |
| **H** åpen design | (1) navngi det klassiske problemet, (2) navngi paradigmet, (3) konstruksjonen, (4) **rekonstruksjon av selve løsningen**, (5) kjøretid | 5–10 linjer, ikke mer |

**Hvert løsningsforslag markerer eksplisitt hva oppgaven faktisk ber om**, der
det er en felle: «Oppgaven ber om output, ikke om en forklaring av algoritmen»,
«Oppgaven ber om hele tabellen, ikke bare den logiske køen».

**I undervisningen** skal metoden selvsagt forklares fullt ut — det er
læringsløkkens teoridel som gjør den jobben. Kortsvarsdisiplinen gjelder
**svarene**, ikke pedagogikken. Boka skal si dette forskjellet eksplisitt i
kap. 8.1, slik at leseren ikke tror at kapitlene motsier eksamensrådet.

### §S3 Karakter-realisme og prioritetsspråk

Faget har karakterskala **A–F**, én firetimers eksamen, 100 %.

- Kap. 0.1 sier eksplisitt at **C er en god og vanlig karakter**, og at
  bestått-terskelen (E) i praksis nås av den som kan grunnoppgavene: riktige tall
  på asymptotikk, riktig håndkjøring, standarddefinisjonene og riktig retning på
  reduksjonsspørsmål.
- «Gapet til A» rammes inn som en **oppgraderingsmeny**, ikke en mangelliste:
  komplett løsning på de åpne designoppgavene, riktig reduksjonsretning,
  rekonstruksjon av selve løsningen (ikke bare verdien), og finessene
  (heltallsteoremet, korteste forøkende sti, pseudopolynomisk ≠ polynomisk).
- **`Prioritet: perfekt` er FORBUDT** (grep-sjekkes). Skjelettets
  prioritetsklasser skrives i boka som «**høyeste prioritet — dette må sitte**»
  (perfekt), «**bør sitte**» (kunne) og «**kjenne til**» (kjenne).
- **Modellbesvarelser er ærlig merket.** En «C-besvarelse» ER på C-nivå. Boka
  skal ha minst én autentisk midtnivåbesvarelse (riktig paradigmevalg, detaljene
  halter, kjøretiden er der men ikke strammest) i hver av 8.3–8.5, og minst én
  som lander skarpt. **Meta-fasit er forbudt** (grep-sjekkes): skriv aldri «en
  A-besvarelse ville her ha …» — skriv resonnementet ut.
- **Modellbesvarelsene er nyskrevet av Skolesaga.** De omtales aldri som ekte
  studentbesvarelser og aldri som hentet fra et løsningsforslag.

---

## §P PSEUDOKODEKONTRAKTEN (bindende)

### §P0 CLRS er standarden — og IN2010s standard skal ikke lekke inn

TDT4120s oppgaver og fasiter bruker **CLRS-navn og CLRS-pseudokode**, og
forventer gjenkjenning. Søsterboka IN2010 (UiO) bruker det motsatte, og de to
kontraktene skal ikke blandes:

| TDT4120 (denne boka) | IN2010 (ikke her) |
|---|---|
| CLRS-navn: `Merge-Sort`, `Build-Max-Heap`, `Heap-Extract-Max`, `Tree-Insert`, `MST-Kruskal`, `Ford-Fulkerson` | generiske navn: `RemoveMin`, `HeapInsert`, `DFSVisit` |
| **Array-indeks fra 1**: rot på 1, forelder $\lfloor i/2\rfloor$, barn $2i$ og $2i+1$ | indeks fra 0, forelder $\lfloor (i-1)/2\rfloor$, barn $2i+1$, $2i+2$ |
| **Alle fem symbolene** $O,\Omega,\Theta,o,\omega$ — å definere dem er en fast oppgave | hovedsakelig $O$ |
| **Masterteoremet, iterasjons- og substitusjonsmetoden er kjernepensum** | ikke pensum |
| `$\lg n$` for $\log_2 n$ (CLRS-konvensjon, brukt i fasitene) | `$\log n$` |
| Grafstørrelser skrives `$V$` og `$E$` i kjøretidsuttrykk: `$O(E\lg V)$`, `$\Theta(V+E)$`, `$\Theta(V^3)$` | `$O(\|V\|+\|E\|)$` med absoluttverdi |
| `$f(n) = O(g(n))$` (CLRS skriver likhetstegn, leses «tilhører mengden» — si det én gang i kap. 1.1) | samme |

**Fagspråk (norsk bokmål):** «kjøretid» (ikke «tidskompleksitet» hver gang),
«naboliste»/«nabomatrise», «sti»/«sykel», «spenntre», «prioritetskø»,
«restnett»/«restkapasitet»/«forøkende sti», «snitt», «stabil sortering», «på
stedet» kan skrives «in-place» (etablert term — forklares én gang),
«håndkjøring». Engelsk fagterm i parentes ved første forekomst der eksamen
bruker den: «minimalt spenntre (*minimum spanning tree*, MST)», «blokkerende par
(*blocking pair*)», «restkapasitet (*residual capacity*)» — fasitene gjør det
samme.

### §P1 Pseudokode i JSON — gjerde, tagg og escaping

**All pseudokode står i trippel-backtick-blokker med taggen `text`:**

````
```text
Build-Max-Heap(A)
  Input:  array A[1..n]
  Output: A omorganisert til en maks-haug, på stedet
  A.heap-size = A.length
  for i = floor(A.length/2) downto 1
      Max-Heapify(A, i)
  Kjøretid: Theta(n)
```
````

- **Taggen er alltid `text`.** ```python er FORBUDT: `sjekk-kode.py` ville
  `compile()`-sjekket blokken, og faget har ingen Python. ```java, ```pseudo,
  ```algorithm og ubemerket gjerde er også forbudt.
- Kortere fragmenter og enkeltnavn står i inline-backticks:
  `` `Build-Max-Heap(A)` ``, `` `A[1..n]` ``, `` `c_f(u,v)` ``.
- **Pseudokode-navn skal ALDRI stå i matte-modus.** `$Merge-Sort$` er forbudt
  (KaTeX tolker bindestreken som minus) — skriv `` `Merge-Sort` ``.
- **Inne i gjerdet skrives ingen LaTeX.** Skriv `Theta(n)`, `floor(i/2)`,
  `<=`, `!=` — gjerdet er ren tekst. Unicode (`⌊`, `≤`, `←`) er lesbart inne i
  gjerder og røres ikke av rendreren, men vær konsekvent gjennom hele boka: velg
  **ASCII** i gjerder.
- **Tilordning:** bruk `=` konsekvent (CLRS-stil), aldri en blanding av `=`,
  `:=` og `←`.
- **Escaping i JSON** (bruk alltid `json.dump`, aldri håndskriv): linjeskift
  `\n`; innrykk = **2 eller 4 mellomrom, aldri TAB** (`sjekk-latex.py` avviser
  kontrolltegn utenfor gjerder); `"` → `\"`; `\` → `\\`.
- `$` inne i et gjerde eller i backticks teller ikke som matte-avgrenser
  (presisert i rendreren 25. juli 2026).

### §P2 Pseudokode-kontrakten som `theorem`-blokk

Hvert algoritmekapittel har minst én `theorem` med tittel
«Pseudokode-kontrakt: `<CLRS-Navn>`». Innholdet har **fem** faste deler, i denne
rekkefølgen:

1. **Antagelser om representasjon** — «arrayet er `A[1..n]`, indeks fra 1» /
   «grafen er gitt som nabolister; hver node `v` har feltene `v.d` og `v.pi`» /
   «flytnettet er `G=(V,E)` med kilde `s`, sluk `t` og kapasiteter `c(u,v) >= 0`».
2. **Pre-/postbetingelse** — hva som må gjelde før, og hva som gjelder etter.
3. **Selve pseudokoden** i et ```text-gjerde, med Input/Output-linjer.
4. **Invarianten eller grunnideen i én setning** — hvorfor den virker.
   («Etter iterasjon `j` er `A[1..j]` sortert og inneholder de samme elementene
   som opprinnelig.»)
5. **Kjøretid med begrunnelse i én setning** («hver node og hver kant besøkes én
   gang ⇒ $\Theta(V+E)$»).

Maks ~20 linjer pseudokode per blokk. Trenger algoritmen mer, deles den
(`Heapsort` som kaller `Build-Max-Heap` og `Max-Heapify`), med en setning
imellom.

**Pseudokoden er NYSKREVET i CLRS-stil.** Navnene og strukturen er allmenn
faglig notasjon, men linjene skrives av oss — ingen ordrett gjengivelse fra
pensumboka eller fra et oppgavesett (§16).

### §P3 Sjanger H — designsvarets fem obligatoriske ledd

Hver `example`- og `exercise`-`solution` som besvarer en åpen designoppgave skal
ha alle fem ledd, i denne rekkefølgen. De er løsningsforslagenes faktiske krav,
og det er her toppkarakteren avgjøres:

1. **Navngi det klassiske problemet** — «dette er et tilordningsproblem med
   kapasiteter ⇒ maks-flyt», «dette er billigste barriere ⇒ min-snitt», «dette
   er en delsekvens-/oppdelingsstruktur ⇒ DP».
2. **Navngi paradigmet eksplisitt** (grådig / DP / splitt-og-hersk / grafsøk /
   flyt / stabil matching).
3. **Konstruksjonen** — nodene, kantene, kapasitetene / delproblemet,
   rekurrensen, grunntilfellene.
4. **Rekonstruksjon av selve løsningen**, ikke bare verdien — med eksplisitt
   setning om at det **ikke** øker den asymptotiske kjøretiden (felle #6).
   Ved flytmodellering: si at **heltallsteoremet** gir en heltallig tilordning.
5. **Kjøretid** med `V`, `E`, `n`, `m` definert.

Mangler ett av leddene, er fasiten ufullstendig — også i prøver og
øvingseksamener.

### §P4 Reduksjonsretningen (bindende for Del 7 og alle designoppgaver)

$A \le_p B$ betyr «A reduseres til B», og at **B er minst like vanskelig som A**.
For å vise at et problem X er vanskelig, reduserer du **FRA** et kjent vanskelig
problem **TIL** X — aldri motsatt. Å redusere *til* et NP-komplett problem
beviser **ingenting** om ditt problems vanskelighet.

- Dette er det enkeltpoenget løsningsforslagene oftest fremhever som skille
  mellom riktig og galt (analysen §5.1). Det får eget drillkapittel (7.4) og
  gjennomsyrer designdelen (8.2).
- **Ingen fasit i boka reduserer feil vei.** Gå gjennom hver reduksjon du skriver
  og les den høyt: «jeg reduserer FRA <kjent vanskelig> TIL <mitt problem>, altså
  er mitt problem minst like vanskelig.»
- Skriv alltid ut **hva reduksjonen ikke beviser** — det er halve poenget i
  sjanger G.
- Skillet **NP-hardt** (alt i NP reduseres til det) vs. **NP-komplett** (NP-hardt
  **og** i NP) skal stå eksplisitt hver gang begge er i spill.
- Skillet **pseudopolynomisk** vs. **NP-hardt** likeså: `Ford-Fulkerson` er
  pseudopolynomisk fordi kjøretiden avhenger av kapasitetenes *størrelse* — det
  er ikke et tegn på at maks-flyt er vanskelig (felle #7).

### §P5 Matematikk i prosa SKAL være LaTeX

Skriv `$\Theta(n\lg n)$`, `$O(E\lg V)$`, `$\lfloor i/2\rfloor$`,
`$c_f(u,v)=c(u,v)-f(u,v)$`, `$A \le_p B$`, `$P \subseteq NP$`,
`$1 < \lg n < n < n\lg n < n^2 < n^3 < 2^n < n!$`.

FORBUDT i prosa: `Θ`, `Ω`, `ω`, `≤`, `≥`, `≈`, `⊆`, `≤ₚ`, `⇒`, `→`, `·`, `²`,
`ⁿ`, `⌊`, `⌋`, `Σ`, `√` — bruk LaTeX eller ordet. Dobbel backslash i JSON
(`\\Theta`, `\\lg`, `\\lfloor`, `\\subseteq`, `\\le_p`).

`<` og `>` i prosa skrives `$k > 0$` eller `` `k > 0` ``, aldri bart (rå `<` går
uendret inn i HTML).

Unntak: `title`/`description` (§0.6) og innsiden av ```text-gjerder (§P1).

---

## §A ANALYSEKONTRAKTEN — etterregn før du skriver

### §A1 Kjøretidspåstander skal begrunnes, ikke huskes

**Hver kjøretids- og egenskapspåstand du skriver, skal du kunne begrunne i én
setning før du limer den inn.** Faste tall som er lette å bomme på og som SKAL
stemme (de er alle dokumenterte fasitpunkter):

| Påstand | Riktig | Vanlig feil |
|---|---|---|
| `Build-Max-Heap` | $\Theta(n)$ | $\Theta(n\lg n)$ (felle #9) |
| `Max-Heapify`, `Heap-Extract-Max` | $O(\lg n)$ | — |
| `Heapsort` | $\Theta(n\lg n)$, på stedet, **ustabil** | «stabil» |
| `Insertion-Sort` | $\Theta(n)$ beste (ferdigsortert), $\Theta(n^2)$ verste | $\Omega(n\lg n)$ beste (felle #9) |
| `Merge-Sort` | $\Theta(n\lg n)$, **ikke** på stedet, stabil | «in-place» |
| `Quicksort` | $\Theta(n\lg n)$ forventet, $\Theta(n^2)$ verste | forventet oppgitt som verste |
| `Randomized-Quicksort` | $\Theta(n\lg n)$ forventet uansett input | «garantert» |
| `Counting-Sort` | $\Theta(n+k)$, **stabil**, krever heltallsnøkler i $[0..k]$ med $k = O(n)$ | «alltid lineær» |
| `Radix-Sort` | $\Theta(d(n+k))$, **krever stabil delsortering** | fungerer med ustabil |
| `Randomized-Select` | $\Theta(n)$ **forventet**, $\Theta(n^2)$ verste | $\Theta(n)$ verste |
| `Select` (median av medianer) | $\Theta(n)$ **verste** | forvekslet med forrige |
| BST-høyde | $\Theta(\lg n)$ forventet for tilfeldig bygd, $\Theta(n)$ verste | «alltid balansert» |
| `Inorder-Tree-Walk` | $\Theta(n)$, gir **sortert** utskrift | «gir innsettingsrekkefølgen» |
| Hashing med kjeding | $\Theta(1+\alpha)$ forventet, $\Theta(n)$ verste | «garantert $O(1)$» |
| `Table-Insert` | amortisert $O(1)$ | $\Theta(n)$ per innsetting |
| `BFS`, `DFS`, `Topological-Sort`, `DAG-Shortest-Path` | $\Theta(V+E)$ | — |
| `Dijkstra` med binærhaug | $O(E\lg V)$, **krever ikke-negative vekter** | brukt på negative kanter (felle #8) |
| `Bellman-Ford` | $\Theta(VE)$, tåler negative kanter, **oppdager** negative sykler; $\Theta(V+E)$ beste med tidlig stopp | «finner bare» |
| `MST-Prim`, `MST-Kruskal` | $O(E\lg V)$ | — |
| `Floyd-Warshall` | $\Theta(V^3)$ | — |
| `Slow-APSP` | $\Theta(V^4)$ naivt, **min-pluss**-produkt | vanlig matriseprodukt |
| `Edmonds-Karp` | $O(VE^2)$, polynomisk, krever **korteste** forøkende sti | «FF er polynomisk» |
| `Ford-Fulkerson` | **pseudopolynomisk** | «NP-hardt» (felle #7) |
| `Huffman` | $O(n\lg n)$ | — |
| `Gale-Shapley` | $O(n^2)$, terminerer alltid, gir alltid stabil matching, **frier-optimal** | «matchingen er unik» |
| 0-1-`Knapsack` | $\Theta(nm)$ — **pseudopolynomisk**, fordi $m$ er en tallverdi | «polynomisk» |
| LCS | $\Theta(nm)$ | — |
| `Rod-Cutting` | $\Theta(n^2)$ | — |

**Skillet garantert vs. inputavhengig skal være bevisst hver gang.** `\Theta`
der grensen er tett, `O` der bare øvre grense er vist, «forventet» der det er en
forventning over tilfeldige valg. En fasit som skriver `\Theta` der oppgaven bare
har `O`-belegg, underviser fellen.

### §A2 Masterteoremet — den bindende formen (jf. §K3.3)

`theorem`-blokken i kap. 1.4 skal ha denne formen, og alle senere kapitler skal
være konsistente med den:

> $T(n) = aT(n/b) + f(n)$ med $a \ge 1$, $b > 1$. Sammenlign $f(n)$ med
> $n^{\log_b a}$.
> **Tilfelle 1:** $f(n) = O(n^{\log_b a - \varepsilon})$ for en $\varepsilon > 0$
> ⇒ $T(n) = \Theta(n^{\log_b a})$.
> **Tilfelle 2:** $f(n) = \Theta(n^{\log_b a}\lg^{k} n)$ med $k \ge 0$
> ⇒ $T(n) = \Theta(n^{\log_b a}\lg^{k+1} n)$.
> **Tilfelle 3:** $f(n) = \Omega(n^{\log_b a + \varepsilon})$ for en
> $\varepsilon > 0$, og regularitetsbetingelsen holder ⇒ $T(n) = \Theta(f(n))$.

**`k \ge 0`, ikke `k > 0`.** Skriver du `k > 0`, faller `Merge-Sort`
($T(n)=2T(n/2)+n$, $k=0$ ⇒ $\Theta(n\lg n)$) utenfor tilfelle 2 — og da er
skjelettets egen eksempeltabell selvmotsigende. Belegg: to fasiter bruker
tilfelle 2 med $k=0$ (des 2016 med $a=10\,000$, $b=10$, $\log_b a = 4$ ⇒
$\Theta(n^4\lg n)$; aug 2025 med $f = \Theta(n^{\log_b a})$ ⇒
$\Theta(n^{\log_b a}\lg n)$).

**Det dokumenterte unntaket er negativ $k$:** en rekurrens som
$T(n)=2T(n/2)+n/\lg n$ svarer til $k=-1$ og **faller utenfor pensumvarianten**.
Den oppgaven ble tatt ut av sensur (aug 2023). Dette er kapitlets viktigste
felle-eksempel og skal med som `warning` — men det skal skrives som «$k$ må være
ikke-negativ», ikke som «$k$ må være strengt positiv».

To ting til som skal med i kap. 1.4/1.5, fordi de står i fasitene:

- **Grunntilfellet:** for algoritmiske rekurrenser antas $T(k) = \Theta(1)$ for
  en konstant $k$ — et oppgitt grunntilfelle som $T(0)=0$ er ofte uten betydning
  for det asymptotiske svaret. Fasitene sier dette eksplisitt.
- **Antall nivåer i rekursjonstreet** er $\Theta(\log_b n)$ — et fast
  delspørsmål.

### §A3 Matematisk sannhetskontroll (UFRAVIKELIG — DNA-regnefag)

**Fortegns-, entydighets- og «alltid»-påstander skal etterregnes numerisk med
`python3` i det fulle parameterrommet FØR de skrives.** For dette faget betyr det
konkret:

1. **Alle asymptotiske klassifiseringsoppgaver etterregnes.** Skriver du «er
   $3n^2+5n = \omega(n)$?», sjekk definisjonen numerisk: for alle $c>0$ finnes
   $n_0$ slik at $3n^2+5n > c\,n$ for $n \ge n_0$? Kjør det for
   $c \in \{0{,}01, 1, 10^6\}$.
2. **Alle masterteorem-oppgaver sjekkes mot begge former:** regn ut
   $\log_b a$ eksakt, avgjør hvilket tilfelle $f(n)$ faller i, og verifiser at
   tilfellet faktisk er oppfylt (inkludert regularitetsbetingelsen i tilfelle 3).
   Sjekk deretter svaret numerisk ved å ekspandere rekurrensen for
   $n = b^1, b^2, \dots, b^{12}$ og sammenligne veksten med det påståtte svaret.
3. **Alle iterasjonsoppgaver sjekkes ved å kjøre rekurrensen.** Påstår du
   $T(n)=T(n-1)+n$, $T(0)=0$ ⇒ $T(n)=n(n+1)/2$, kjør løkka for $n \le 200$ og
   sammenlign. Eksakte svar skal være **eksakte**.
4. **Alle «alltid/aldri»-påstander parametersjekkes.** Eksempler som MÅ
   sjekkes: «`Build-Max-Heap` er alltid raskere enn $n$ kall til `Heap-Insert`»,
   «en letteste kant over et snitt er alltid trygg» (og betingelsen «som
   respekterer valgene så langt» — uten den er påstanden gal), «MST er unikt»
   (den er **gal** ved like kantvekter — skriv betingelsen), «`Radix-Sort` er
   raskere enn `Merge-Sort`» (betinget på $d$ og $k$).
5. **En «vis at …»-oppgave der påstanden ikke holder ubetinget, KAN IKKE
   LØSES** — det er verre enn en manglende oppgave. Skriv heller «vis at det
   gjelder når …, og finn betingelsen».
6. **Kombinasjonsregelen i kap. 2.4** er nettopp en slik betinget påstand:
   `Merge-Sort` **før** `Insertion-Sort` gir $\Theta(n\lg n)$; motsatt
   rekkefølge risikerer $\Theta(n^2)$. Skriv ut hvorfor (Insertion er
   $\Theta(n)$ på nesten sortert input; Merge bryr seg ikke om
   forhåndssortering), og gi et talleksempel begge veier.
7. **Alle tallverdier i håndkjøringsoppgaver kommer fra §H, ikke fra hodet.**

Behold `.py`-filene i scratchpad til kapitlet er ferdigmeldt, og oppgi i
ferdigmeldingen hvor mange kontroller du kjørte.

### §A4 Hva som utledes aktivt, og hva som bare brukes

Skjelettet merker dette per kapittel. Hovedregelen:

- **Utledes med «Intuisjon:»-linje per steg:** iterasjonsmetoden (teleskoperingen
  vises steg for steg), substitusjonsmetodens induksjonssteg, den stramme
  $\Theta(n)$-analysen av `Build-Max-Heap`, hvorfor `Edmonds-Karp` er polynomisk,
  hvorfor rekonstruksjon fra en DP ikke øker kjøretiden, og bytteargumentet i
  grådighet.
- **Brukes uten utledning:** masterteoremets bevis, beslutningstre-beviset for
  $\Omega(n\lg n)$ (kort argument, ikke fullt bevis), maks-flyt/min-snitt-beviset,
  Cook–Levin-argumentet for `CIRCUIT-SAT` (hovedideen i ord: kretsen simulerer
  verifikatoren, sertifikatet er inputen — ikke beviset).
- Symbolgrep leseren kanskje ikke har fra R1/R2 — $\lg$, $\log_b a$,
  $\lfloor\cdot\rfloor$, mengdenotasjon, $\le_p$ — introduseres eksplisitt ved
  første bruk eller omskrives.

---

## §H HÅNDKJØRINGSKONTRAKTEN — sporingstavler genereres PROGRAMMATISK

**Håndkjøring (sjanger C) er en egen ferdighet i dette faget** og forekommer i
nær hvert sett; BST og haug er de hyppigste (94 % av de 17 settene). Studenten
skal kunne føre en struktur gjennom en operasjon steg for steg og oppgi
sluttilstanden feilfritt.

### §H1 Sporingstavler skrives ALDRI for hånd

En sporingstavle skrevet fra hodet er den farligste feilen denne boka kan gjøre:
den lærer leseren feil sluttilstand på nettopp den sjangeren som er nesten
garantert på eksamen, og feilen er usynlig for alle andre porter.

> **Hver sporingstavle og hver oppgitte sluttilstand i boka skal være generert av
> et program som faktisk utfører algoritmen.**

Dette gjelder tavler i `example.solution`, i `exercise.solution`, i
prøve-collapsibles og i øvingseksamenenes fasiter.

### §H2 Arbeidsflyten (obligatorisk)

```
1. skriv simulatoren:  <scratchpad>/tdt4120-<kapittel-id>-<n>.py
   – implementér operasjonen i ren Python 3, med BOKAS regler:
     array A[1..n] (bruk en dummy på indeks 0 eller offset konsekvent),
     forelder floor(i/2), barn 2i og 2i+1, Max-Heapify siver mot STØRSTE barn,
     Partition med siste element som pivot, Kruskal sorterer kantene stigende
     og bryter likhet deterministisk, Edmonds-Karp velger korteste forøkende
     sti med BFS
   – la den skrive ut tilstanden ETTER hvert steg, i tabellform
2. kjør:  python3 <scratchpad>/tdt4120-<kapittel-id>-<n>.py
3. lim utskriften ORDRETT inn i sporingstavlen / sluttilstanden
4. behold .py-fila i scratchpad til kapitlet er ferdigmeldt, og oppgi i
   ferdigmeldingen hvor mange tavler du genererte
```

- **Byggemiljøet:** `python3` er 3.9.6. Ikke installer noe — standardbiblioteket
  holder.
- Simulatoren er et **verktøy**, ikke innhold: den skal ALDRI limes inn i
  kapittelfila. Boka viser CLRS-pseudokode (```text) og tavlen — aldri Python.
- Simulatoren må implementere **bokas** regler, ikke Pythons bekvemmeligheter:
  ingen `heapq` (den er 0-indeksert min-haug og skjuler siftetrinnene du skal
  vise), ingen `sorted()` som erstatning for en håndkjørt `Counting-Sort`, ingen
  `dict` der du skal vise kjedingen.
- **Ugyldig input skal kjøres mekanisk.** Ber oppgaven om `Heap-Extract-Max` på
  et array som IKKE er en gyldig haug, skal simulatoren gjøre nøyaktig det
  algoritmen sier — uten å reparere først (felle #10). Skriv simulatoren slik at
  den ikke «hjelper».
- Endrer du tallene i en oppgave, **kjør på nytt**. Håndretting av ett tall i en
  ferdig tavle er den vanligste kilden til inkonsistens.

### §H3 Tavlens form

Markdown-tabell med én rad per steg, én kolonne per størrelse som endrer seg, og
en sluttkolonne med strukturens tilstand:

| Steg | Operasjon | Sammenligning | Array etter steget |
|---|---|---|---|
| 1 | `Max-Heapify(A, 2)` | `A[2]=3` mot `A[4]=9`, `A[5]=8` | `[7, 9, 5, 3, 8, 1]` |

Faste regler:

- Tabellen skal være så mekanisk at leseren kan gjøre nøyaktig det samme på
  papir. Ingen steg hoppes over.
- **Sluttilstanden gjentas alene til slutt**, i den formen eksamen krever (§H4)
  — det er den studenten skal levere.
- Etter tavlen: **én-linjes fellenote** som navngir feilen sporingen tester, med
  feilkode: «Fellen her er #10 — å reparere haugen før du utfører operasjonen.»
- I drillkapitlene (2.4, 3.3, 4.5, 5.3) legges det til et margnotat om at
  **delvis riktig tilstand gir delvis uttelling**, og hva det siste poenget
  henger på.
- **Tavlen er undervisning; svaret er sluttilstanden.** Fasiten skal si det:
  «På eksamen leverer du bare linja under — tavlen er her for å vise hvordan du
  kommer dit.»

### §H4 Sluttilstandens format per struktur (eksamensdisiplin)

| Struktur | Leveres som | Fallgruve |
|---|---|---|
| Maks-haug | hele arrayet, kommaseparert, indeks fra 1 | å levere treet i stedet for arrayet |
| `Heapsort` (én iterasjon) | arrayet etter iterasjonen, med haugstørrelsen oppgitt | å kjøre hele sorteringen når bare én iterasjon var spurt |
| BST | `Inorder-Tree-Walk`-utskriften (som er **sortert**), evt. rotverdi | å tro at inorder gir innsettingsrekkefølgen |
| `Counting-Sort` | telletabellen `C` etter det etterspurte steget, eller output-arrayet | å oppgi begge når bare ett var spurt |
| `Partition` | arrayet etter partisjoneringen + pivotens sluttindeks `q` | feil pivotplassering |
| FIFO-kø | **hele** tabellen inkludert «døde» celler, pluss `head` og `tail` | bare den logiske køen; glemt wraparound (felle #3) |
| `Kruskal` | kantene i den rekkefølgen de legges til | å liste alle kanter, også de forkastede, uten å merke dem |
| `Floyd-Warshall` | den etterspurte matrisen (`d` eller `pi`) for det etterspurte `k` | å blande `d`- og `pi`-regelen |
| `Slow-APSP` | den etterspurte cellen $l^{(2)}_{ij}$ | vanlig matriseprodukt i stedet for min-pluss |
| `Bellman-Ford` / `Dijkstra` | `v.d` for hver node, i nodenes rekkefølge | å stoppe før iterasjonen er ferdig |
| Maks-flyt | flytverdien **og** et min-snitt når begge er spurt | bare verdien |
| `Huffman` | kodelengde per tegn (evt. totalt antall bits) | kortest kode til sjeldnest tegn |
| `Gale-Shapley` | den ferdige matchingen, og hvilken orientering som ble kjørt | å glemme at orienteringen bestemmer utfallet |

---

## §G FIGURKONTRAKTEN

### §G1 Figur-i-ord er et KOMPLEMENT, ALDRI en erstatning

Dette faget er grafisk: grafer, trær, hauger som trær, flytnett med restnett,
Huffman-trær og DP-tabeller. **Ber en oppgave, et eksempel eller en prøvetekst om
en figur** («tegn treet», «tegn restnettet», «skisser flytnettet», «vis grafen»,
«modellér som et flytnett og tegn konstruksjonen»), er et løsningsforslag som
bare skriver «*Figur i ord:* …» **UFULLSTENDIG** — den faktiske SVG-en skal inn i
løsningen, rett etter delsvaret den hører til. Dette gjelder også inne i
`collapsible`-er: nøstede `image`-blokker rendres, men MÅ ha `id` og `src`.

Prosabeskrivelsen beholdes som forklaring TIL figuren, aldri i stedet for den.

### §G2 Figurene som MINIMUM skal finnes

| Kap. | Figur |
|---|---|
| 1.1 | vekstordningen: $\lg n$, $n$, $n\lg n$, $n^2$, $2^n$ i samme diagram, med $n_0$ og $c\cdot g(n)$ inntegnet for én av dem |
| 1.4 | rekursjonstre for $T(n)=aT(n/b)+f(n)$ med arbeidet per nivå og antall nivåer $\log_b n$ |
| 2.1 | `Merge`-steget: to sorterte halvdeler som flettes; og beslutningstreet bak $\Omega(n\lg n)$ |
| 2.2 | `Counting-Sort`: input, telletabell `C`, kumulativ `C`, output — og stabiliteten vist med to like nøkler |
| 3.1 | haug som tre OG som array side om side, med $\lfloor i/2\rfloor$, $2i$, $2i+1$ merket |
| 3.2 | BST med innsettingsvei inntegnet, og inorder-rekkefølgen nummerert — pluss det degenererte treet med høyde $\Theta(n)$ |
| 3.3 | referansefigur: «slik ser en gyldig maks-haug ut» og «slik ser et gyldig BST ut», i kontrast (felle #2) |
| 3.4 | hashtabell med kjeding: bøtter, kollisjon, lastfaktor |
| 3.5 | sirkulær FIFO-kø med `head`, `tail` og wraparound, med døde celler synlige |
| 4.1 | samme graf som nabomatrise og naboliste; BFS-lag; DFS med discover-/finish-tid og kantklassifisering |
| 4.2 | et snitt $(S,T)$ i en vektet graf med den letteste kryssende kanten markert som trygg |
| 4.3 | slakking av én kant med `d`- og `pi`-verdier før og etter; graf med negativ kant der Dijkstra går galt |
| 4.4 | `Floyd-Warshall`-matrisen for én $k$-runde, `d` og `pi` side om side |
| 5.1 | flytnett med `f/c` på hver kant, tilhørende restnett med ryggkanter, og et snitt $(S,T)$ |
| 5.2 | forøkende sti i restnettet før og etter forøkning; min-snittet som skiller `s` fra `t` |
| 5.3 | modelleringsmalen: kilde → venstre nodesett → høyre nodesett → sluk, med kapasiteter |
| 6.1 | rekursjonstreet med overlappende delproblemer markert, mot D&C-treet uten overlapp |
| 6.2 | LCS-tabellen med retningspekere og rekonstruksjonsstien |
| 6.4 | Huffman-treet bygget trinn for trinn fra frekvenser |
| 6.5 | Gale-Shapley: preferanselister og den stabile matchingen; et blokkerende par illustrert |
| 7.2 | reduksjonspilen $A \le_p B$ tegnet med retning, og hva den beviser |
| 7.3 | reduksjonskjeden mellom de navngitte NPC-problemene, med pilretninger |

Drill-, prøve- og øvingseksamenskapitler har ikke egne figurkrav i tabellen, men
**hver oppgave som ber om en figur, skal ha figuren i fasiten** (§G1). Gjenbruk
gjerne samme `src` som referansefigur i drillkapitler («slik skal ditt tre se
ut») — med ny `id` og ny, stedsspesifikk `caption`.

### §G3 Figurkontroll (ufravikelig)

**En figur som rendrer, er ikke en figur som er riktig.** Hver figur i denne boka
kontrolleres mot algoritmen, ikke bare mot at den vises:

1. **Haug mot BST.** En maks-haug har forelder $\ge$ **begge** barn og **ingen**
   venstre–høyre-orden. Et BST har venstre deltre $\le$ rot $\le$ høyre deltre.
   En figur som blander dem underviser fagets nest mest fremhevede feil (#2).
   **Tegn dem aldri i samme figur uten at kontrasten er hele poenget.**
2. **Haug-arrayet skal stemme med haug-treet, node for node.** Generer begge fra
   samme simulator (§H2).
3. **Inorder-rekkefølgen i en BST-figur skal være sortert.** Sjekk det.
4. **Restnettet skal ha ryggkanter.** En restnettfigur uten motsatt-vei-kanter
   underviser den vanligste flytfeilen.
5. **Snittet:** $s \in S$, $t \in T$, og snittkapasiteten teller **bare**
   $S \to T$-kanter. Snittet trenger ikke dele grafen i to like store deler.
6. **Retningen på reduksjonspilen** i 7.2/7.3 skal være FRA det kjente vanskelige
   problemet TIL det nye. En pil tegnet feil vei er den dyreste figurfeilen i
   boka.
7. **Kantvektene i en MST-figur skal gi det spenntreet figuren viser.** Regn det
   ut; ikke tegn etter øyemål.
8. **En figur skal bare vise det kapitlet har lært bort.** Ikke tegn
   kantklassifisering inn i BFS-figuren i 4.1 før DFS er innført — del figuren.
9. **Alle tall i en figur skal komme fra simulatoren**, ikke fra hodet.

### §G4 Filer, stil og opplasting

- Filer: `public/images/textbook/tdt4120/<navn>.svg`.
- Stil: akser i `#6b7280`, noder og kanter i mid-tone farger, **norsk tekst**,
  **transparent bakgrunn** (må være lesbar i både lys og mørk modus), viewBox ca.
  480×360, tydelige node-/kant-/aksemerker. Valider XML før wiring.
- **ETTER at nye figurer er skrevet:**
  ```bash
  python3 scripts/hoyskolebok/last-opp-figurer.py <arbeidstre> tdt4120
  python3 scripts/hoyskolebok/sjekk-figurer.py tdt4120
  ```
  **Porten tester mot Supabase Storage, ikke mot disk.** `public/images` er ikke
  lenger sporet i git, så «fila ligger i repoet» er IKKE bevis på at figuren
  vises. En figur som bare ligger lokalt, gir **404 for leseren**. Alternativt
  kan `npx tsx scripts/upload-media-storage.ts` kjøres. **`sjekk-figurer.py` er
  den eneste gyldige kvitteringen.**
- **Skreddersydd `caption` per plassering** — knyttet til kapitlets eget eksempel
  og termbruk («haugen fra Eksempel 2, tegnet både som tre og som array»), ikke
  en generisk gjentakelse. `alt` beskriver figuren bokstavelig for skjermleser
  (ren tekst, §0.4 — ingen LaTeX, ingen backticks).
- Lover en caption eller en `tip` en figur («figuren i kap. 5.1»), skal figuren
  faktisk finnes der det loves.

### §G5 Audit før ferdigmelding

Kjør per kapittel: grep alle oppgave-, eksempel- og prøvetekster for
figurforespørsel
(`tegn|skisser|vis .*figur|i figuren|i diagrammet|modellér .* og vis`) og sjekk
at løsnings-subtreet har minst én `image`-blokk. Manglende figur = gjøremål, ikke
en akseptabel «figur i ord».

---

## §M QUIZ- OG FLERVALGSKONTRAKTEN

### §M1 Filformat og kalibrering

`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`:

```json
[{ "question": "…", "options": ["riktig", "distraktor", "distraktor", "distraktor"], "explanation": "…" }]
```

Nøyaktig **4 alternativer**, `options[0]` **ALLTID** riktig (runtime stokker).
Ingen duplikate alternativer innen et spørsmål, ingen duplikate spørsmål på tvers
av kapitler i samme del.

**Kalibrering (skjelettets dokumenterte avvik):** den reelle eksamen er
**frisvar, ikke flervalg**. Quiz brukes derfor til **hjelpemiddelfri
faktakontroll med entydig fasit**: kjøretidsfakta, asymptotisk forenkling (ett
strammeste uttrykk), definisjonsgjenkjenning, ja/nei-utsagn («stemmer dette?»),
reduksjonsretning, «hvilken algoritme løser dette problemet», «hvilket krav
stiller algoritmen». Selve frisvars-**presisjonen** trenes i `exercise`- og
drillkapitlene, som har `solution` + `hints`.

**Antigjettings-kalibrering:** minst 1–2 spørsmål per kapittel skal ha en
distraktor som fanger nøyaktig den usikre kandidaten fra feilkatalogen (§12):
`Build-Max-Heap` som $\Theta(n\lg n)$, `Insertion-Sort` beste som
$\Omega(n\lg n)$, `Randomized-Select` verste som $\Theta(n)$, Dijkstra på
negative kanter, topologisk sortering via starttid, reduksjon *til* et
NPC-problem.

**Hver `explanation`** (2–4 setninger) sier hvorfor fasiten stemmer OG hvilken
konkret feil den nærmeste distraktoren representerer — **beskrevet ved innhold,
aldri ved posisjon** (§0.8).

### §M2 LENGDE-TELL — måles fra start, i begge retninger

Fasiten skal ikke kunne gjettes på form. To skjevheter er observert i live
bøker: fasiten systematisk **lengst** (77 % i én bok) og fasiten systematisk
**kortest** (funnet i en bok bygget denne uka).

**Måltall — mål dem FRA START, ikke etter at kapitlet er ferdig:**

- `options[0]` er **unikt lengst** i **under 25 %** av spørsmålene i hver
  quizfil.
- `options[0]` er **unikt kortest** i **under 25 %** av spørsmålene i hver
  quizfil.
- Tilfeldig nivå er 25 %. Portens harde terskel er 35 %, men **kontraktens krav
  er 25 %** — sikt mot tilfeldig, ikke mot terskelen.

Praktisk: er alternativene kjøretidsuttrykk (`$\Theta(n)$`, `$\Theta(n\lg n)$`,
`$O(\lg n)$`, `$\Theta(n^2)$`), er de naturlig like lange og problemet er borte.
Er de setninger, skal de ha omtrent samme antall ord og samme presisjonsgrad.
Fasiten skal ikke være den eneste som nevner en betingelse, den eneste med et
forbehold eller den eneste som er detaljert. Er det naturlig at fasiten er
presis, skal distraktorene være like presise — men gale.

**Mål slik, per fil, før du melder ferdig:**

```bash
python3 - <<'PY'
import json, glob, sys
for f in sorted(glob.glob("src/lib/data/quiz-staging/tdt4120-*.quiz.json")):
    qs = json.load(open(f, encoding="utf-8"))
    n = len(qs); lang = kort = 0
    for q in qs:
        L = [len(o) for o in q["options"]]
        if L[0] == max(L) and L.count(max(L)) == 1: lang += 1
        if L[0] == min(L) and L.count(min(L)) == 1: kort += 1
    flagg = "  <-- JUSTER" if n and (lang/n > .25 or kort/n > .25) else ""
    print(f"{f.split('/')[-1]:34} n={n:3}  unikt lengst {lang/n:5.0%}  unikt kortest {kort/n:5.0%}{flagg}")
PY
```

Etter wiring: `npx tsx scripts/hoyskolebok/quiz-lengdesjekk.mjs tdt4120`.

**En distraktor gjengir ALDRI bokas egne presiseringer som «galt» svar.** Ligger
en distraktor nær sannheten (typisk: «`Randomized-Select` er $\Theta(n)$» — sant
for forventet, galt for verste), skal `explanation` si eksplisitt hvorfor den
likevel ikke holder.

### §M3 Prøvekapitlenes statiske flervalg — den kjente blindsonen

`quiz-lengdesjekk.mjs` leser `quiz-data-tdt4120.ts` og ser **ikke** de statiske
flervalgsoppgavene som står som tekst inne i prøve-`collapsible`-er eller i
øvingseksamenene. De er en dokumentert blindsone, og de skal måles **separat og
manuelt**:

1. **Fasitbokstavene er stokket** over hver prøve og over hvert øvingssett. Aldri
   «alle a»; porten flagger mønsteret «1a · 2a · 3a», men den fanger bare det
   groveste. Tell fordelingen a/b/c/d selv — over et helt sett skal den være
   rimelig jevn.
2. **LENGDE-TELL gjelder også her.** Tell alternativlengdene i hver statiske
   flervalgsoppgave med samme 25 %-mål som §M2. En prøve med fire spørsmål der
   fasiten er lengst i alle fire, er en gjettbar prøve.
3. **Ja/nei- og «stemmer dette?»-lister blander reelle og feller.** Aldri «alle
   nei», aldri «alle ja». Tell dem.
4. **Prøve-tipen sier hvor flervalget bor** — inline i prøveteksten, eller i den
   interaktive quizen til delens kapitler.
5. Etter wiring: `python3 scripts/hoyskolebok/sjekk-fasitfordeling.py tdt4120`.

**Rapportér målingen fra punkt 1–3 eksplisitt i ferdigmeldingen.** Det er den
eneste kontrollen prøvekapitlene har.

---

## §12 Feilkatalogen #1–#11 (identisk nummerert med `EKSAMENSANALYSE.md` §5)

**Endre ALDRI nummereringen** — skjelettets per-kapittel-felt henviser til
«§5-fellen». Feilkodene glosses i klarspråk ved **FØRSTE bruk PER KAPITTEL**
(«felle #2 — å blande haugegenskapen med BST-egenskapen»), og samles i kap. 0.1
med henvisning til kapitlet som forebygger hver av dem.

| # | Fellen | Forebygges i |
|---|---|---|
| **#1** | **Reversert reduksjonsretning** — å redusere *til* et NPC-problem beviser ingenting om ditt problems vanskelighet. Fagets mest fremhevede feil | 7.2, 7.4, 8.2 |
| **#2** | Forveksle **BST-egenskapen** (venstre $\le$ rot $\le$ høyre) med **haugegenskapen** (forelder $\ge$ begge barn, ingen venstre–høyre-orden) | 3.1, 3.2, 3.3 |
| **#3** | **Køfeil ved håndkjøring** — bytte om `head`/`tail`, glemme **wraparound**, eller oppgi bare den logiske køen i stedet for hele tabellen med døde celler | 3.5, 3.3 |
| **#4** | **Løs asymptotisk grense der en strammere finnes** — å «kaste bort informasjon» under forenklingen | 1.1, 1.2, 1.3 |
| **#5** | **Feil masterteorem-tilfelle** — særlig glemme logaritmefaktoren i tilfelle 2, eller bruke tilfelle 2 med negativ $k$ (utenfor pensumvarianten) | 1.4, 1.6 |
| **#6** | Påstå at **rekonstruksjon fra en DP er «trivielt gratis»** — det krever lagrede beslutninger, men uten økt asymptotisk kjøretid | 6.1, 6.3, 8.2 |
| **#7** | Blande **pseudopolynomisk og NP-hardt** — `Ford-Fulkerson` er pseudopolynomisk, ikke et tegn på at maks-flyt er vanskelig | 5.2, 7.2, 7.4 |
| **#8** | **Dijkstra på negative kantvekter** — Dijkstra krever ikke-negative vekter; `Bellman-Ford` tåler negative kanter og oppdager negative sykler | 4.3, 4.5 |
| **#9** | **Feil kjøretidsfakta** — `Build-Max-Heap` som $\Theta(n\lg n)$ (den er $\Theta(n)$), `Insertion-Sort` beste som $\Omega(n\lg n)$ (den er $\Theta(n)$) | 2.1, 3.1, 2.4 |
| **#10** | **«Reparere» før mekanisk håndkjøring** — når oppgaven ber deg kjøre `Heap-Extract-Max` på et array som ikke er en gyldig haug, utfører du trinnene mekanisk | 3.1, 3.3 |
| **#11** | Blande **topologisk sortering med starttid** — den bruker synkende **finish-tid** fra DFS | 4.1, 4.5 |

---

## §13 Sjangerkatalog A–I (fra skjelettets §3 — gjengis i kap. 0.1)

Kodene skrives ut i klarspråk ved **FØRSTE bruk i HVERT kapittel**. Kap. 0.1
presenterer hele katalogen som studentens sjekkliste, med frekvens og nevner.

| Kode | Sjanger | Svarform | Frekvens (nevner 17 sett) |
|---|---|---|---|
| **A** | Asymptotisk forenkling og notasjon | ett uttrykk | 100 % (17 av 17), ofte 2–3 oppgaver per sett |
| **B** | Rekurrensløsning med **navngitt** metode | uttrykk + metodenavn | 76 % (13 av 17) |
| **C** | Håndkjøring av navngitt CLRS-algoritme | sluttilstand / ett tall / hele tabellen | nær hvert sett; BST og haug hyppigst |
| **D** | Definisjon «med egne ord» | én presis setning, hovedpoeng først | flere per sett |
| **E** | Kjøretidskunnskap og -sammenligning | uttrykk | innbakt i sortering (100 %) og korteste vei (76 %) |
| **F** | «Stemmer dette?» | ja/nei først, så én setning | 41–76 % avhengig av tema |
| **G** | Reduksjoner og NP-kompletthet | retning + konsekvens | 100 % (17 av 17) |
| **H** | Åpen algoritmedesign | kort designskisse, fem ledd (§P3) | hvert ordinært sett, de siste 3–5 oppgavene |
| **I** | Nivådelt essay | essay | **kun korona-settene — ikke representativt**, omtales bare i kap. 0.1 |

**Del 0 skal i tillegg ha bokas samlede oppslagskort** (regnefagets
«formel-minimum», jf. `DNA-regnefag.md`): en `collapsible` **«Det du må kunne
utenat — og resten kan du utlede»**, med (i) de fem asymptotiske symbolene,
(ii) masterteoremets tre tilfeller, (iii) kjøretidstabellen for alle
pensumalgoritmene samlet, (iv) de tre definisjonene som kommer oftest
(spenntre, stabil sortering, restkapasitet), og (v) reduksjonsretningen i én
linje. Hver med én ordlinje. Kortet er printbart og skal fungere alene.
**Eksamen er hjelpemiddelfri (kode E) — «du kan slå det opp» er en holdning boka
aldri skal formidle.**

---

## §14 Kvotekontrakt (AUTORITATIV — fra skjelettets §5)

**Bindende total: quiz 622 · flashcards 534.** Verifisert 1. august 2026: alle
deltotaler summerer eksakt, og §5-tabellen stemmer med per-kapittel-feltene i
skjelettets §4. Kvotene er **minimum per kapittel** — overskyting er lov,
underskyting er kontraktsbrudd.

| Del | Kapitler | Quiz | Flashcards | Prøver | Kapittelminutter |
|---|---|---|---|---|---|
| 0 | 0.1 | 14 | 14 | — (metadel) | 35 |
| 1 | 1.1–1.6 | 108 | 84 | 4 (120 min) | 360 |
| 2 | 2.1–2.4 | 66 | 66 | 4 (120 min) | 225 |
| 3 | 3.1–3.5 | 82 | 84 | 4 (115 min) | 290 |
| 4 | 4.1–4.5 | 80 | 84 | 4 (130 min) | 310 |
| 5 | 5.1–5.3 | 50 | 46 | 4 (135 min) | 195 |
| 6 | 6.1–6.5 | 78 | 74 | 4 (130 min) | 295 |
| 7 | 7.1–7.4 | 68 | 62 | 4 (125 min) | 240 |
| 8 | 8.1–8.5 | 76 | 20 | — (3 øvingseksamener) | 855 |
| **Sum** | **38 kap. + 7 prøvekap.** | **622 ✓ (≥500)** | **534 ✓ (≥500)** | **28 prøver (875 min)** | **2 805 min** |

Per kapittel: se kolonnen «Quiz · Fc» i tabellen i §3.1 — **minimum, aldri
under**.

**Flashcards telles som toppnivå `definition`-blokker med `title`.** Ligger en
definisjon inne i en `collapsible`, teller den ikke.

Fordelingen speiler frekvens og eksamensform: de tre 100 %-delene (1
asymptotikk, 2 sortering, 7 NP) og de tre 94 %-delene (3 datastrukturer, 5
maks-flyt, 6 DP) bærer mest. Øvingseksamenene (8.3–8.5) gir 0 flashcards, men
bidrar med 16 quiz hver. Flashcards kalibreres som **navn ↔ kjøretid ↔
krav/egenskap** — puggematerialet for en hjelpemiddelfri eksamen.

### Tidsbudsjett (etterregnet 1. august 2026 — bruk DISSE tallene)

| Blokk | Filer | Minutter |
|---|---|---|
| Innholdskapitler (0.1–8.5) | 38 | **2 805** |
| Prøvekapitler (1.P–7.P, 28 prøver) | 7 | **875** |
| **Sum** | **45** | **3 680 ≈ 61 timer** |

Skjelettets §1-identitetstabell oppgir «≈ 2 805 min ≈ 47 timer» — det er summen
av **innholdskapitlene alene**, og stemmer. **Bokas totale budsjett inkludert
prøvene er 3 680 min ≈ 61 timer**, og det er tallet «Lite tid?»-boksen i kap. 0.1
skal bruke. De tre øvingseksamenene utgjør 720 av kapittelminuttene — boksen skal
si at de tas på tid, én per kveld, aldri stablet i siste uke.

---

## §15 Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»; SKAL i førsteutkastet)

- **Kun eksamensrelevant stoff**; «kjenne til» sist og merket. Gjelder særlig
  `Select`/median av medianer (2.3), amortisert analyse (3.5),
  `Transitive-Closure` og `Print-All-Pairs-Shortest-Path` (4.4),
  aktivitetsutvelgelse (6.4), og abstrakte vs. konkrete problemer / formelle
  språk (7.1).
- **Korte avsnitt** (2–4 setninger), aktiv «du»-form, konkret norsk knagg før
  formalismen. Godt, flytende norsk; ALDRI telegramstil («Haug: array. Feil:
  indeks.» er FORBUDT). Presisjon vinner ved tvil.
- **Meningsfulle oppgaver:** hver oppgave er synlig eksamensforankret.
  Sjanger-/nivåmetadata skrives som en **LEDENDE parentes** i `task`, f.eks.
  `(Eksamensnivå, sjanger C — håndkjøring.)`, ALDRI midt i brødteksten. Ikke
  gjenta `difficulty` i teksten («(krevende)» skrives ikke i `task` — feltet
  vises i oppgavehodet).
- **Læringsløkke Teori → Eksempel → Oppgave** med `exercise`-blokker INLINE (§1).
- **Ingen usett forkunnskap** (§1).
- **Deloppgaver på egen linje, fet merking:** a), b), c) i `task`/`solution` HVER
  på egen linje — `…\n\n**a)** …\n**b)** …`. ALDRI bak hverandre i løpende tekst;
  ikke bruk `subTasks`.
- **Nybegynner-inngang / ingen uforklart sjargong (UFRAVIKELIG).** Boka skal
  forstås av en som aldri har hatt faget:
  - **Sjangerkodene A–I** skrives ut i klarspråk ved FØRSTE bruk i HVERT
    kapittel.
  - **Feilkodene #1–#11** glosses ved FØRSTE bruk PER KAPITTEL.
  - **Eksamens-metaspråk** forklares før bruk: «hjelpemiddelkode E»,
    «kortsvarsoppgave», «svarrute», «kontinuasjonseksamen», «delvis uttelling»,
    «gjenganger-score», «læringsmål».
  - **Fagtermer** forklares ved første bruk, ALDRI kaldt: «asymptotisk»,
    «amortisert», «invariant», «pre-/postbetingelse», «in-place / på stedet»,
    «stabil sortering», «pivot», «haugegenskap», «lastfaktor», «kjeding»,
    «kantklassifisering», «finish-tid», «snitt», «restnett», «forøkende sti»,
    «heltallsteoremet», «optimal substruktur», «overlappende delproblemer»,
    «memoisering», «bytteargument», «blokkerende par», «sertifikat»,
    «verifikasjonsalgoritme», «polynomisk reduksjon», «pseudopolynomisk»,
    «avgjørelsesproblem».
  - Ingen kald kode i `competenceGoals` eller i aller første tekstboks.
  - **Kap. 0.1 har en «Slik leser du denne boka»-orienteringsboks** (type `text`
    eller `tip`, **ALDRI `definition`** — det ville endret flashcard-kvoten) med:
    karakterskalaen A–F og at C er en god og vanlig karakter; eksamensformen i
    tre linjer (4 timer, ~20 kortsvarsoppgaver som teller likt, ingen
    hjelpemidler); kompakt liste over sjangrene A–I; kompakt liste over
    feilkodene #1–#11 med at de har et samlet register; og en eksplisitt
    innramming av de tunge symbolene leseren møter senere: «du trenger ikke
    forstå $T(n)=aT(n/b)+f(n)$, $c_f(u,v)=c(u,v)-f(u,v)$ eller $A \le_p B$ ennå
    — de forklares der de brukes».
- **Del 0-pakken (kap. 0.1):**
  - **«Lite tid?»-boks** (`tip`) med hurtigrute 3–5 dager og ukeplan bygget av
    summerte `estimatedMinutes`. **Bokas sum er 3 680 min ≈ 61 timer** (§14).
    Boksen sier at anslagene er LESEtid, og at den som faktisk håndkjører og
    skriver bør legge på ca. ×1,5. Hurtigruten prioriterer de tre
    100 %-temaene (asymptotikk, sortering, NP/reduksjonsretning) + BST/haug-
    håndkjøring.
  - **Kildenote** for frekvens-empirien — ordrett eller trofast omskrevet fra
    §K6.
  - **Sjanger-/prosedyrekort på ÉN side** — kortet SELV (sjanger → én linjes
    oppskrift → typisk antall oppgaver → vanligste felle), ikke en lenkeliste.
  - **Formel-minimum / samlet oppslagskort** — §13.
  - **Deltidsrute** 10–12 uker (~5–6 t/uke): Del 0 → Del 1 (asymptotikk, billige
    garanterte poeng) → Del 2 (sortering) → Del 3 (BST/haug-håndkjøring) →
    Del 4 (graf) → Del 5 (maks-flyt) → Del 6 (DP) → Del 7 (NP) → Del 8, med
    prøvene underveis og de tre øvingssettene fordelt på tre ulike helger.
  - **«lese mye, skrive lite»-boks** — legitim rute for lese-øveren (les
    oppgaven → formuler svaret i én setning i hodet → les fasiten som en
    fasitskriver) + minimumsrådet: **håndkjør minst én haug og ett BST på papir,
    og gjennomfør minst én øvingseksamen på tid uten hjelpemidler.** Fire timer
    med 20 oppgaver er også en tempoferdighet.
  - **Korona-caveaten** eksplisitt: settene med hjelpemiddelkode A (2020 til aug
    2022) var hjemmeeksamener med alle hjelpemidler, delvis bestått/ikke bestått
    og essayformat. De er ikke representative, og sjanger I omtales bare her.
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. X.Y](/tdt4120/tdt4120-X-Y)`; død «se kapittel»-tekst er
  FORBUDT (aldri lenker i `title`-felt). **Skriv ALDRI `/bok/tdt4120/…`.** Lenk
  kun til filer som finnes på disk når du skriver; byggeleder legger inn resten
  ved wiring.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter hver prøvefasit og etter hver
  øvingseksamen-fasit.
- **Lett innstegsoppgave** (difficulty `lett`, ren gjengivelse med egne ord eller
  ett kjøretidsoppslag) tidlig i teorikapitler der første oppgave ellers er full
  eksamenssjanger.
- **Hverdagsanker + verdens-caser:** abstrakte kjernetemaer åpner med et konkret
  anker før apparatet — køen i kantina (FIFO med wraparound), pakkesortering på
  et postterminal (`Counting-Sort`), tildeling av vikarer til vakter (maks-flyt),
  ruteplanlegging med bomstasjoner (korteste vei), studentopptak (Gale-Shapley).
  Innpakningene er virkelige situasjoner, aldri «en medstudent skriver …»-
  metaeksempler.
- **Øktmerking:** alle kapitler med `estimatedMinutes` > 45 — altså alle utenom
  0.1 (35), 1.1 (45), 2.2 (45), 2.3 (45), 3.4 (45) og 8.1 (45) — har tidsanslag
  per avsnitt — og overskriften skal si hva avsnittet HANDLER OM, aldri
  «Løkke 3»/«Bolk B» («## `Build-Max-Heap` og hvorfor den er lineær (~15 min)»)
  eller «— naturlig pausepunkt —»-markører. De ni drillkapitlene (80–90 min) og
  de tre øvingseksamenene (240 min) skal ha eksplisitte pausepunkter.
- **Hint + difficulty-spredning:** alle `exercise` har utfylte `hints` (første
  hint = formelen, algoritmenavnet eller første grep — **ALDRI konklusjonen og
  aldri sluttilstanden**). Unntak: den merkede kalde banken i kap. 8.2. Boka har
  flere genuint krevende oppgaver merket `vanskelig` — f.eks. å finne
  betingelsen for når `Radix-Sort` slår `Merge-Sort`, å konstruere en instans der
  `Ford-Fulkerson` bruker mange runder, og å avgjøre om et gitt NPC-argument er
  gyldig.
- **Fasitmønster-variasjon:** se §M2 og §M3.
- **Meta-fasit forbudt:** ingen «en A-besvarelse ville her ha …». Skriv
  resonnementet ut.
- **Signalbokser ETTER oppgaven:** en boks som varsler hva en drilloppgave
  tester, plasseres etter oppgaven eller som collapsible hint, aldri foran.
- **Tidsbudsjett-konsistens:** der en oppgaves eller prøves deklarerte tid avviker
  fra summen av deltidene, forklares differansen (anbefalingene er arbeidstid;
  resten er lesing av oppgaveteksten og gjennomlesing).
- **Juridisk:** innholdet fremstiller seg ALDRI som offisielt eller
  NTNU-tilknyttet, og lover aldri eksamensutfall. Uavhengighetsdeklarasjonen
  vises automatisk av plattformen for `level: 'Høyskole'`.

---

## §16 Opphavsrett (ufravikelig)

- **ALLE oppgaver, tall, arrayer, grafer, kantvekter, frekvenser, stedsnavn og
  innpakninger er NYSKREVNE.** Algoritmenavn, kjøretidsuttrykk, pseudokode-
  strukturen og standardnotasjon er allmenn faglig notasjon og kan brukes fritt,
  men **ingen oppgavetekst, intet løsningsforslag og ingen graf fra et reelt
  TDT4120-sett gjengis** — heller ikke i omskrevet form som er gjenkjennelig
  linje for linje. Skjelettets mønstereksempler er selv omskrivninger og skal
  varieres videre, ikke kopieres ordrett inn som oppgaver.
- **Figur-universet er vårt eget.** Oppgavene i de reelle settene bruker
  gjennomgående navnene **Lurvik, Smartnes, Gløgsund, Klokland, Visdal og
  Flinckenhagen** — verifisert i sett så nye som august 2023. **De er
  grep-forbudt i denne boka** (§17). Finn på egne navn, egne steder og egne
  historier.
- **Løsningsforslagene er lovlig tilgjengelige** (offentlig institusjon,
  åndsverkloven § 14) og er analysens primærkilde for hva som gir uttelling. Det
  gir rett til å bygge på innsikten, ikke til å gjengi teksten. Formuleringer
  parafraseres; delpoeng omtales som mønstre («typisk 4 av 5 poeng hvis
  hovedpoenget mangler»), ikke som kopierte tabeller.
- **Pensumlitteraturen (CLRS) refereres** med forfatter/verk/begrep, aldri sitert
  i lengde, aldri med kapittelnummer og aldri med sidetall (§K5).
- **Ingen skjermbilder eller utdrag** fra NTNUs sider.
- **`(verifiser)` skal ligge på null ved ferdigmelding** — se §K5 punkt 6.
  Skriv rundt det usikre.

---

## §17 Forbudt-termer (grep-sjekkes — skal gi 0 treff)

Kjør ved ferdigmelding (`sjekk-bok.py` tar regexen som argument 2; den hopper
over `tdt4120-0-1`, som er metakapitlet):

```bash
python3 scripts/hoyskolebok/sjekk-bok.py tdt4120 \
  "```python|```java|```pseudo|sensorveiledning|Prioritet: perfekt|en A-besvarelse ville|ville ha drøftet|/bok/|Lurvik|Smartnes|Gløgsund|Klokland|Visdal|Flinckenhagen"
```

- **```python / ```java / ```pseudo** — all pseudokode i ```text (§P1);
  `sjekk-kode.py` ville `compile()`-sjekket en python-blokk, og faget har ingen
  Python.
- **`sensorveiledning`** — finnes ikke i dette arkivet (§K3.5). Skriv
  «løsningsforslag». Eneste tillatte forekomst er kildenoten i kap. 0.1, som sier
  at slike ikke foreligger.
- **`Prioritet: perfekt`** — skrives «høyeste prioritet — dette må sitte» (§S3).
- **meta-fasit** — «en A-besvarelse ville», «ville ha drøftet»: skriv
  resonnementet ut.
- **`/bok/`** — prefikset ble fjernet 27. juli 2026.
- **De seks navnene fra de reelle settenes figur-univers** (§16).

I tillegg skal denne python-porten gi 0 avvik. Den fanger de tre
kildepåstandene som faktisk kan gå galt i denne boka:

```bash
python3 - <<'PY'
import json, glob, re, sys

# 1) «lange svar»-påstanden får ALDRI kobles til «hvert/alle sett» (§K3.2)
lange = re.compile(r"lange svar[^.]{0,120}(hvert sett|alle sett|alltid|hver eksamen)"
                   r"|(hvert sett|alle sett)[^.]{0,120}lange svar", re.I)
# 2) masterteoremets tilfelle 2 skal aldri skrives med «k > 0» (§K3.3/§A2)
mastk = re.compile(r"tilfelle 2[^.]{0,200}k\s*(>|\\gt)\s*0"
                   r"|k\s*(>|\\gt)\s*0[^.]{0,200}tilfelle 2", re.I)
# 3) ubelagte tallpåstander om kandidater/karakterer (§K2 punkt 3).
#    Smal med vilje: «hver oppgave teller 5 %» er lovlig og skal ikke treffe.
ubelagt = re.compile(r"(strykprosent|stryker|karakterfordeling|"
                     r"(de fleste|flertallet av|rundt|omtrent) kandidat\w*)"
                     r"[^.]{0,30}\d{1,3}\s*%"
                     r"|\d{1,3}\s*%[^.]{0,30}(stryker|av kandidatene)", re.I)
# 4) IN2010-notasjon som har lekket inn (§P0)
in2010 = re.compile(r"RemoveMin|HeapInsert|DFSVisit|\(i-1\)/2|2i\s*\+\s*2", re.I)
# 5) sidetall/kapittelnummer i PENSUMLITTERATUREN (§K5 punkt 5).
#    Treffer ikke bokas egne «kap. X.Y»-lenker — bare henvisninger som
#    plasserer et nummer INNE i CLRS/læreboka.
sidetall = re.compile(r"(CLRS|Cormen|læreboka|pensumboka)[^.]{0,40}"
                      r"(s\.\s*\d|side\s*\d|sidene\s*\d)"
                      r"|kap(ittel)?\.?\s*\d[^.]{0,25}(i CLRS|i Cormen|"
                      r"i læreboka|i pensumboka)", re.I)

def flat(n):
    if isinstance(n, str): yield n
    elif isinstance(n, dict):
        for v in n.values(): yield from flat(v)
    elif isinstance(n, list):
        for v in n: yield from flat(v)

avvik = 0
for f in sorted(glob.glob("src/lib/data/chapters/tdt4120-*.json")
                + glob.glob("src/lib/data/quiz-staging/tdt4120-*.json")):
    for t in flat(json.load(open(f, encoding="utf-8"))):
        for navn, rx in (("LANGE-SVAR-OVERDRIVELSE", lange), ("MASTER-K>0", mastk),
                         ("UBELAGT-TALL", ubelagt), ("IN2010-NOTASJON", in2010),
                         ("SIDETALL", sidetall)):
            m = rx.search(t)
            if m:
                print(navn, f, repr(t[max(0, m.start()-60):m.start()+120])); avvik += 1
print("avvik:", avvik)
sys.exit(1 if avvik else 0)
PY
```

Ikke-grepbare regler som kontrolleres manuelt:

- **Ingen unicode-matematikk i prosa** (§P5) — sjekk med
  `grep -o "[ΘΩω≤≥≈⊆⇒→·²ⁿ⌊⌋Σ√]" src/lib/data/chapters/tdt4120-*.json | sort | uniq -c`
  og verifiser at hvert treff står inne i et ```text-gjerde.
- **Ingen 0-indeksert haugformel** — boka bruker $\lfloor i/2\rfloor$, $2i$,
  $2i+1$ (§P0).
- **Ingen `$Navn-Med-Bindestrek$`** i matte-modus (§P1).

> **⚠️ ALDRI `grep -o` med `.{0,N}`-kontekst mot kapittelfilene.** JSON-filene er
> kompakt tekst på få, svært lange linjer; kombinasjonen gir kvadratisk arbeid og
> sprengte buffere (17 GB RAM på en byggemaskin med 8 GB fysisk minne, 25. juli
> 2026). `grep -c` og `grep -l` UTEN `-o` og uten `.{0,N}` er trygt. Trenger du
> kontekst, bruk python-porten over.

---

## §18 Kryssbok-lenker (verifisert mot disk 1. august 2026 — alle filene finnes i `src/lib/data/chapters/`)

Lenkeform `[tittel](/<courseId>/<id>)`. **Titlene under er de faktiske
kapitteltitlene og skal brukes ordrett.** Lenk ALDRI til en fil som ikke finnes
(`sjekk-bok.py` fanger døde lenker).

| Brukes i | courseId | id | Tittel (ordrett) | Rolle |
|---|---|---|---|---|
| 1.1, 1.4 | `r1` | `r1-1-2` | Potenser og logaritmer | $\lg$ og $\log_b a$ bak masterteoremet |
| 1.5 | `r2` | `r2-1-4` | Rekker og summasjon | teleskopering, $1+2+\dots+n = n(n+1)/2$ |
| 1.5 | `s2` | `s2-7-2` | Geometriske følger og rekker | $1+2+4+\dots+2^{n-1} = 2^n - 1$ |
| 1.5, 1.6 | `r2` | `r2-1-6` | Induksjonsbevis | substitusjonsmetodens induksjonssteg |
| 1.5, 1.6 | `r1` | `r1-9-2` | Induksjon | mykere første møte med induksjon |
| 1.1, 5.1, 7.1 | `1t` | `1t-1-7` | Mengdelære | mengdenotasjon bak $G=(V,E)$ og «tilhører $O(g)$» |
| 0.1, 1.2 | `tdt4110` | `tdt4110-6-3` | Algoritmedefinisjon, pseudokode og kompleksitet (Big-O) | NTNUs eget introemne — mykere første møte med $O$ og pseudokode |
| 2.1, 2.4 | `tdt4110` | `tdt4110-6-1` | Sortering: boblesortering, `.sort()` og gitt `sort_list` | sortering konkret, før invariantene |
| 1.5 | `tdt4110` | `tdt4110-6-2` | Søking: sekvensielt søk og binærsøk | binærsøk konkret, før `Bisect`-rekurrensen |
| 1.5, 6.1 | `tdt4110` | `tdt4110-5-2` | Rekursjon — spore og skrive | rekursjon som ferdighet (pensum også her) |

**Refereres i KLARTEKST, aldri som lenke:**

- **IN2010 (UiO)** — søsteremnet «Algoritmer og datastrukturer». Boka finnes på
  plattformen, men **skal ikke lenkes fra TDT4120**: den bruker generisk
  pseudokode, 0-indekserte hauger og har verken masterteoremet, maks-flyt eller
  DP som pensum (§P0). En leser som følger lenken midt i kap. 3.1 møter motsatt
  indekseringskonvensjon. Nevn den bare der kontrasten er poenget, i klartekst.
- **CLRS** — pensumlitteraturen, refereres med forfatter/verk (§K5), aldri som
  lenke og aldri med sidetall.

Interne lenker: `[kap. X.Y](/tdt4120/tdt4120-X-Y)`. **Aldri `/bok/…`.** Lenker
til kapitler som ennå ikke er skrevet, legges inn først når fila finnes på disk —
koordineres av byggeleder ved wiring.

---

## §19 Tekniske feller (de som faktisk har ødelagt bøker)

**T1. LaTeX i JSON = dobbel backslash — og dette faget har de farligste
sekvensene.** Enkel backslash gjør LaTeX-kommandoen til et **kontrolltegn**, og
KaTeX kaster ikke alltid feil — den rendrer bare *galt*.

| Skrevet med ÉN backslash | Blir | Opptrer i |
|---|---|---|
| `\Theta` | ingen match | overalt |
| `\to` | vertikal tabulator | reduksjonspiler, grenseoverganger |
| `\times` | ingen match | matriseprodukt i APSP |
| `\times`, `\theta`, `\tau` | ingen match | — |
| `\lfloor`, `\lceil` | ingen match | haugindekser |
| `\lg`, `\log` | ingen match | hver eneste kjøretid |
| `\le_p` | ingen match | reduksjonsrelasjonen |
| `\pi` | ingen match | forgjengermatrisen i `Floyd-Warshall` |
| `\alpha` | BEL | lastfaktoren i hashing |
| `\t`, `\n`, `\r`, `\b`, `\f`, `\v`, `\a` | TAB, linjeskift, CR, BEL, FF, VT, BEL | `\text{}`, `\Theta`, `\frac`, `\bmod` … |

**Derfor: generer ALLTID med `json.dump`**, og skriv kildeteksten som Python
rå-strenger (`r"$\Theta(n\lg n)$"`) eller med doble backslasher. Porten
`sjekk-latex.py` fanger kontrolltegn — kjør den.

**T2. `$`-fella (§0.3).** Ethvert dollartegn som ikke er matte MÅ escapes som
`\$`. To uescapede `$` på samme linje er partall og pares av rendreren.
`sjekk-latex.py` punkt 6 (PROSA SATT SOM MATTE) fanger det.

**T3. `chapterNumber` alltid del-basert.** «3.1», aldri «12». Prøvekapitler:
«3.P».

**T4. Ingen tom `collapsible`.** Feltet heter `content` og skal inneholde
blokker. En `text`-nøkkel eller tom array rendrer som en tom boks.

**T5. Ingen dupliserte blokk-id-er** innen et kapittel (porten sjekker), og ingen
dupliserte quiz-spørsmål på tvers av kapitler i samme del.

**T6. Bindestrek i algoritmenavn må ut av matte-modus.** `$Merge-Sort$` rendres
som «Merge minus Sort». Skriv `` `Merge-Sort` ``.

**T7. Søk-og-erstatt over kapitteldata har ødelagt innhold tre ganger.** Forankre
alltid på syntaks, let etter mønsteret i PROSA først, tørrkjør — og husk at
skriptet treffer sin egen kildekode.

**T8. `sjekk-kode.py` er allerede emne-gatet for `tdt4120`** (`tdt4120` står i
settet `REKURSJON_ER_PENSUM`), så rekursive algoritmer flagges ikke. Ikke slå av
punkt 2 i skriptet — det verner in1900/in1000 samtidig.

---

## §20 Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json; json.load(open('…'))"` på HVER fil du har skrevet
   (kapittel + quiz-staging). Ingen trailing commas, ingen uescapede `"`/`\`.
2. **Titler og metadata ORDRETT** fra tabellen i §3.1: `title`, `description`,
   `chapterNumber`, `estimatedMinutes` — tegn for tegn, også tankestrek og
   «DRILL — »-prefiks. En tittel fra byggeprompten er et avvik.
3. **Kvotetelling** mot §14: toppnivå `definition`-blokker med `title` =
   flashcard-kvoten; antall quiz-spørsmål = quiz-kvoten. Minimum, aldri under.
4. **Sporingstavler generert programmatisk** (§H2): oppgi i ferdigmeldingen hvor
   mange tavler du genererte, og at simulatorfilene ligger i scratchpad. Ingen
   tavle skrevet fra hukommelsen.
5. **Analysekontrakten §A:** hver kjøretidspåstand kontrollert mot tabellen i
   §A1; masterteoremets tilfelle 2 skrevet med `k \ge 0`; hver
   fortegns-/«alltid»-påstand parametersjekket numerisk; ingen «vis at
   …»-oppgave på en påstand som ikke holder ubetinget.
6. **Pseudokodekontrakten §P:** ingen ```python/```java/```pseudo; all pseudokode
   i ```text med CLRS-navn og indeks fra 1; pseudokode-kontrakt (`theorem`) i
   hvert algoritmekapittel med alle fem delene; sjanger H-fasitene har alle fem
   leddene i §P3; ingen reduksjon i boka går feil vei.
   Kjør `python3 scripts/hoyskolebok/sjekk-kode.py tdt4120`.
7. **Kortsvarskontrakten §S:** hvert løsningsforslag har svarformen sjangeren
   krever og ikke mer; «lange svar»-påstanden er formulert etter §S1-tabellen
   (aldri «i hvert sett»); ingen «sensor sier».
8. **Kildekontrakten §K:** hver «N av M»/prosentpåstand har nevneren sin fra
   §K2 og nevneren står i teksten; kildenoten følger §K6; ingen ubelagte tall om
   kandidater eller karakterer; ingen pensumanker utenfor §K5.
9. **Figurkontrakten §G:** hvert figurløfte innfridd med ekte SVG; hver figur
   kontrollert mot §G3-listen; hver oppgave som ber om figur, har figuren i
   fasiten (§G5); figurene lastet opp
   (`python3 scripts/hoyskolebok/last-opp-figurer.py <arbeidstre> tdt4120` eller
   `npx tsx scripts/upload-media-storage.ts`) og
   `python3 scripts/hoyskolebok/sjekk-figurer.py tdt4120` grønn — **porten tester
   Storage, ikke disk**.
10. **LENGDE-TELL §M2 målt manuelt per quizfil** (unikt lengst < 25 %, unikt
    kortest < 25 %) — **oppgi begge tallene i ferdigmeldingen**, ikke bare det
    ene. Etter wiring:
    `npx tsx scripts/hoyskolebok/quiz-lengdesjekk.mjs tdt4120`.
11. **Prøvekapitlenes statiske flervalg §M3 målt separat** — fasitbokstavene
    stokket, lengdefordelingen målt, ja/nei-listene blandet. **Rapportér
    målingen**; ingen port ser dette.
12. **Læringsløkke:** `content[]` veksler teori → eksempel → oppgave med
    `exercise`-blokker INLINE. Unntak: prøve- og øvingseksamenskapitler.
13. **Forkunnskapsdekning:** gå gjennom HVER `exercise` og bekreft at den bare
    hviler på stoff introdusert tidligere i kapitlet eller i en referert
    forkunnskap — med skjelettets kapittelrekkefølge i hånden.
14. **Nybegynner-inngang:** sjangerkodene A–I, feilkodene #1–#11,
    karakterbokstaver, eksamens-metaspråk og fagsjargong forklart ved første bruk
    (feilkoder: per kapittel); ingen kald kode i `competenceGoals` eller første
    tekstboks; kap. 0.1 har «Slik leser du denne boka»-boksen (type `text`/`tip`,
    ALDRI `definition`) og hele Del 0-pakken (§15).
15. **Notasjons- og pseudokodeliste** i hvert teori-/drillkapittel, med det
    ordrette notis-avsnittet (så `sjekk-bok.py` finner «Symbol- og formelliste»),
    og med ALLE symboler, algoritmer og formler brukt i delkapitlet.
16. **Forkunnskaper-blokk** i hvert kapittel utenom Del 0, med nøkkelresultatene
    VIST i 4.2, 4.5, 5.3, 6.3, 7.2 og 8.2.
17. **Håndkjøringsdisiplin §H4:** sluttilstanden i eksamensformatet — hele
    kø-tabellen med døde celler, haug-arrayet fra indeks 1, inorder-utskriften,
    flytverdi **og** min-snitt når begge er spurt.
18. **Forbudt-term-grepet og python-porten** i §17 = 0 treff; ingen gjenstående
    `(verifiser)`.
19. **Ingen tom collapsible**; ingen dupliserte blokk-id-er; kap-referanser er
    markdown-lenker til eksisterende filer uten `/bok`-prefiks.
20. **hints** utfylt på alle `exercise` (unntatt den merkede kalde banken i 8.2);
    første hint røper aldri konklusjonen eller sluttilstanden.
21. **Øktmerking** i kapitler > 45 min; prøvekapitler deklarerer «4 prøver à
    ~25–40 min» + deling over flere kvelder.
22. Porter, alle grønne:
    `python3 scripts/hoyskolebok/status-bok.py tdt4120` ·
    `python3 scripts/hoyskolebok/sjekk-bok.py tdt4120 "<forbudt-regex>"` ·
    `python3 scripts/hoyskolebok/sjekk-latex.py tdt4120` ·
    `python3 scripts/hoyskolebok/sjekk-skjelett.py tdt4120` ·
    `python3 scripts/hoyskolebok/sjekk-kode.py tdt4120` ·
    `python3 scripts/hoyskolebok/sjekk-sporing.py tdt4120` ·
    `python3 scripts/hoyskolebok/sjekk-figurer.py tdt4120` ·
    `python3 scripts/hoyskolebok/sjekk-alternativref.py tdt4120` ·
    (etter wiring) `python3 scripts/hoyskolebok/sjekk-fasitfordeling.py tdt4120` ·
    `npx tsx scripts/hoyskolebok/quiz-lengdesjekk.mjs tdt4120`.
23. **Ferdigmelding krever rendringsbevis:** `npm run build` grønn + prod-server
    (`PORT=3057 npm run start`) og `curl` mot kapittel- og narrativ-ruter (200 +
    kapittelspesifikk streng). ALDRI meld ferdig uten dette.
24. **Rapportér kort:** filer skrevet, kvotestatus per kapittel, portstatus,
    antall sporingstavler og antall numeriske kontroller kjørt, LENGDE-TELL
    begge veier per quizfil, §M3-målingen for prøvekapitlene, og alt du måtte
    skrive rundt fordi det ikke lot seg belegge.
