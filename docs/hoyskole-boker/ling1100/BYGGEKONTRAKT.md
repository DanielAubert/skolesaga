# Byggekontrakt: LING1100 Innføring i semantikk og pragmatikk (UiO) — teknisk kontrakt for kapittelforfattere

Gjelder ALLE forfatter-agenter som bygger kapitler til `ling1100`. Faglig
innhold styres av `SKJELETT.md` (identitetsseksjonen §1.1–1.4 + per-kapittel-DNA
i §3) — les ditt kapittels avsnitt der ORDRETT, og `EKSAMENSANALYSE.md` når du
trenger mer kontekst. Denne kontrakten definerer filformat, notasjon,
sjangerkrav, kildepåstander og kvalitetsporter. **Ved faglig konflikt vinner
SKJELETT.md; ved format-, notasjons- eller sjangerkonflikt vinner denne
kontrakten.** Instansiert fra `../BYGGEKONTRAKT-MAL.md` 26. juli 2026.

**Arketype: formell-hybrid.** Semantikk-halvdelen (Del 1–7) bygges etter
`../DNA-regnefag.md`, pragmatikk-halvdelen (Del 8–10) etter
`../DNA-drofting.md`. Hybridvalget er dokumentert i skjelettets §1.1 og er
bindende per del — det er ikke opp til den enkelte agenten.

**Nærmeste bygde søskenbøker — les begge før du skriver:**

| Bok | Hva du henter derfra | Hva du IKKE henter |
|---|---|---|
| `../fys1100/BYGGEKONTRAKT.md` | notasjonskontrakt, figurkontrakt (ekte SVG), fasit-disiplin, «alt begrunnes», per-kapittel-kvoter | fysikkfaglig innhold, formelark-tenkningen (LING1100 har **ingen** hjelpemidler) |
| `../fil1001/BYGGEKONTRAKT.md` | modellbesvarelses-regimet, instruksjonsverb → sjanger, ærlig kildenote ved tynt arkiv, karakter-realisme | filosofifaglig innhold, «fri drøfting» som normalform (den er ~5 % her) |

LING1100 ligger mellom dem. Det har **både** oppgaver med objektivt riktig
fasit **og** oppgaver som må skrives ut som resonnement — og de to halvdelene
har kvalitativt ulike terskler. Det er hele poenget med boka.

---

## §M MERKNAD OM FAGETS INNHOLD (les denne først)

LING1100 ved UiO er **innføringsemnet i semantikk og pragmatikk** — ikke et
bredt innføringsemne i allmenn lingvistikk. Det betyr konkret:

- **Fonetikk/fonologi, morfologisk segmentering, syntaktisk trebygging,
  sosiolingvistikk, språkendring, språktypologi og språktilegnelse er IKKE
  pensum her** og skal ikke bygges ut som temaer. Ingen av de 12 settene i
  arkivet har en oppgave i noen av dem.
- Det som ser ut som «trestrukturer» i dette faget er **Jackendoffs konseptuelle
  tre-diagram** (Del 7) og **scope-/kvantorløftings-representasjoner** (Del 4) —
  ikke syntaktiske frasestrukturtrær.
- Fonemisk/fonetisk notasjon og Leipzig-glossering forekommer bare **perifert**
  (se §N4 og §N5): når et eksempel hentes fra et annet språk enn norsk (typisk
  sosial deiksis og høflighetsformer i Del 10), eller når homonymi/polysemi
  krever at man skiller lydform fra skriftform (Del 2).

Notasjonsreglene for disse tilfellene står likevel i §N og er **bindende der de
gjelder**. Grunnen er enkel: en enkelt feilskrevet transkripsjon eller en
uglossert fremmedspråklig eksempelsetning er like synlig for leseren i en
semantikkbok som i en fonetikkbok.

---

## §0 PLATTFORMSTØTTE — hva du kan stole på

1. **Markdown + LaTeX rendres** av `LatexRenderer`: `$…$` inline, `$$…$$`
   display, markdown-tabeller, fet/kursiv, lister, markdown-lenker.
2. **Kodeblokker rendres.** Trippel-backtick med språktagg (```` ```text ````)
   settes som `<pre><code>` med bevart innrykk, og inline-kode i
   `` `backticks` `` er beskyttet mot både matte- og markdown-transformene
   (fikset på main 25. juli 2026). **Dette er den viktigste plattformfakta i
   denne boka:** nummererte eksempelsett, glosseringer og alle ASCII-figurer
   SKAL ligge i ```` ```text ````-blokker (§N3, §N5) — der overlever både
   kolonnejustering, stjernen `*` og firkanttegnet `#`.
3. **`$`-fella (ufravikelig).** Et dollartegn som IKKE er matte MÅ escapes som
   `\$` i JSON-strengen. To uescapede `$` på samme linje er partall, og
   rendreren parrer dem og setter alt imellom som formel. `$` inne i backticks
   eller i en ```` ``` ````-blokk er trygt.
4. **Hvert enkelt `\n` blir `<br />`.** Se §N9 — hardt linjebrutt brødtekst er
   FORBUDT i denne boka.
5. **Bilder:** `alt` rendres rått som HTML-attributt — ingen LaTeX, ingen
   markdown, ingen backticks der. `caption` rendres i inline-modus: `$…$`
   virker, men ikke markdown og ikke backticks.
6. **Unicode rendres fint i vanlig prosa** (`→`, `≈`, `⊆`, `·`, `⟨`, `⟩`, `∈`,
   `∀`, `∃`, `¬`, `∧`, `∨`), men **all logikk og mengdelære skal likevel i
   LaTeX** (§N1). Unicode brukes kun i overskrifter, tabellceller,
   ```` ```text ````-blokker og i IPA (§N4, der LaTeX er direkte forbudt).
7. **Flashcards genereres KUN fra toppnivå `definition`-blokker med `title`** —
   ikke fra definisjoner inne i en `collapsible`.
8. **Quiz stokkes ved kjøretid**, derfor er `options[0]` alltid fasit i
   staging-filene.
9. **Nøstede `image`-blokker inne i `collapsible`-er rendres** (verifisert i
   fys1100 og econ2310) — men de MÅ ha `id` og `src`, og fila MÅ være lastet opp
   til Storage (§G).

---

## §1 LÆRINGSLØKKE-KONTRAKTEN (ufravikelig byggekrav — produkteier 9. juli 2026)

Fra skjelettets topp, tatt inn her som bindende byggekrav:

- HVERT kapittels `content[]` struktureres som gjentatte SMÅ løkker
  **Teori → Eksempel → Oppgave**. `exercise`-blokker plasseres INLINE i
  `content[]` rett etter teorien eller eksempelet de trener — ALDRI all teori
  øverst med oppgavene samlet nederst.
- **I semantikk-halvdelen (Del 1–7)** er løkka konkret: `definition`/`theorem`
  som innfører ÉN test, ÉN klasse, ÉN regel eller ÉN prosedyre → `example` som
  gjennomfører prosedyren trinn for trinn på en nyskrevet setning, med
  begrunnelsen skrevet ut → `exercise` som krever nøyaktig den prosedyren.
  Deretter neste bit.
- **I pragmatikk-halvdelen (Del 8–10)** er løkka: `definition` med
  teoretiker-forankring → `text` om mekanismen og spenningene → `example` der
  begrepet er BRUKT på et nyskrevet eksempel (med det egne eksempelet som
  eksamen faktisk krever) → `exercise` inline.
- **Ingen usett forkunnskap.** Ingen oppgave får kreve et begrep, en test, en
  klasse, et symbol eller en prosedyre som ikke er innført tidligere i kapitlet
  (t.o.m. eksempelet rett foran) eller i et kapittel som står i
  Forkunnskaper-blokken. Konkrete feller i LING1100:
  - be om **kansellerbarhetstesten** i kap. 3.4 uten at implikatur er
    forhåndsvist der (Del 8 kommer senere — forhåndsvisningen SKAL stå i 3.4
    selv, ikke forutsettes);
  - bruke **⟦ ⟧-notasjon** eller «tolkningsfunksjon» før kap. 4.3;
  - be om **Vendler/Dowty-klasse** i kap. 5.1 (klassene innføres i 5.2 — 5.1 har
    bare de tre trekkparene);
  - be om **proto-roller** i kap. 6.1 (de innføres i 6.2);
  - bruke **∀/∃** i kap. 1.3 (Russells kvantoranalyse) uten å notere at
    kvantorene innføres fullt i 4.1 — skriv Russell i ord der, eller forklar
    symbolene på stedet;
  - be om **Horn-skala** før 8.2, eller **ansikt/FTA** før 9.2;
  - bruke **downward entailment** før 3.4.
- **Unntak:** prøvekapitlene (`ling1100-<del>-prove`), modellbesvarelsene
  (11.4–11.5) og øvingseksamenene (11.6–11.8) følger sin egen arketype —
  komplett sett først, løsninger i `collapsible`-er.
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer kun
  REKKEFØLGEN.

---

## §2 Filplassering og filtelling

Ett JSON-dokument per kapittel: `src/lib/data/chapters/ling1100-<del>-<nr>.json`
(prøvekapitler: `ling1100-<del>-prove.json`). Quiz til
`src/lib/data/quiz-staging/ling1100-<del>-<nr>.quiz.json`.

IKKE rør `_registry.json`, `_all.json`, `textbook-courses*.ts`, `quiz-data*.ts`,
`institusjoner.ts` eller `kildegrunnlag.ts` — wiring gjøres sentralt av
byggeleder med `scripts/hoyskolebok/wire-bok.py ling1100` (fase 5).

**Generer ALLTID JSON via python `json.dump`.** Skriv aldri JSON for hånd i
denne boka: den er full av enkle anførselstegn i den tospråklige terminologien
(«talehandlinger (‘speech acts’)»), av LaTeX-backslasher og av escapede
stjerner. Én uescapet anførsel har tidligere blokkert hele prebuild for hele
plattformen.

**Boka består av 53 kapittelfiler:**

- **43 innholdskapitler:** Del 0 (2) + semantikk Del 1–7 (24) + pragmatikk
  Del 8–10 (9) + eksamenstrening Del 11 (8).
- **10 prøvekapitler:** `ling1100-1-prove` … `ling1100-10-prove`. Del 0 og
  Del 11 har INGEN prøvekapittel (skjelettets §4 og §3-halene sier det
  eksplisitt: Del 0 er metadel, og Del 11s prøver ER de tre øvingseksamenene
  11.6–11.8).

Pluss **43 quiz-staging-filer** — én per innholdskapittel. Prøvekapitler har
verken quiz eller begrepsbank.

> **Merk om skjelettets 12 «Prøve-kvote Del N»-linjer:** de dekker Del 0–11, men
> to av dem sier eksplisitt «ingen». Antall prøvekapitler er **10**, ikke 12.
> `BOKCONFIG.json` har `"prøvedeler": [1,…,10]` og er autoritativ for wiringen.

---

## §3 Kapittel-JSON (toppnivå)

```json
{
  "id": "ling1100-6-2",
  "courseId": "ling1100",
  "chapterNumber": "6.2",
  "title": "…(fra skjelettet, ordrett)…",
  "description": "…(setningen fra skjelettet)…",
  "estimatedMinutes": 55,
  "competenceGoals": ["kunne forklare Dowtys proto-roller som knipper av entailment-egenskaper", "…"],
  "content": [ "…blokker…" ],
  "exercises": []
}
```

- **`chapterNumber` er ALLTID del-basert** (`<del>.<nr>`: `0.1`, `6.2`, `11.7`) —
  **ALDRI lineær** («28»). Prøvekapitler: `<del>.P`. Bokforsiden grupperer på
  `number.split('.')[0]`; lineær nummerering ødelegger navigasjonen i hele boka.
- `id`, `title`, `description` og `estimatedMinutes` tas ORDRETT fra skjelettets
  kapittelavsnitt.
- `competenceGoals`: 2–4 «kunne …»-formuleringer destillert fra kapitlets
  innholds-/begrepskontrakt. Dette er **Skolesagas EGNE** mål — ALDRI kopi av
  UiOs offisielle læringsutbyttebeskrivelser. **Ingen kald kode her:** ikke
  «F3», ikke «#2», ikke «A-besvarelse».
- `exercises` er ALLTID tom liste — oppgaver ligger som `exercise`-blokker
  inline i `content`.

### 3.1 Rene tekstfelter — INGEN markdown, INGEN LaTeX (UFRAVIKELIG)

`title`, `topics` og `competenceGoals` renderes RÅTT i UI-et. Bruk aldri
markdown eller `$…$` der. Konkret for dette faget: skriv «Dowtys proto-roller»,
ikke «Dowtys *proto-roller*»; skriv «allkvantor og eksistenskvantor», ikke
«$\forall$ og $\exists$»; skriv verktitler med «anførselstegn» — «Saeed,
"Semantics"» — aldri i kursiv. Markdown og LaTeX hører kun hjemme i
`content` / `problem` / `solution` / `task` / `hints` / `caption`.

---

## §4 Blokktyper (eksakte felt — strukturreferanse: `src/lib/data/chapters/econ1310-2-1.json`)

- `text`: `{ "id", "type": "text", "content": "markdown + LaTeX + ```text-blokker" }`
- `definition`: `{ "id", "type": "definition", "title": "Begrepet", "content": "…" }`
  — **`title` er OBLIGATORISK** (flashcard-kilden). I LING1100 kalibreres
  `definition` slik:
  - **Semantikk (Del 1–7):** *begrepet i ord → testen eller kriteriet som
    avgjør det → notasjonen*. Aldri formel eller symbol som første linje.
  - **Pragmatikk (Del 8–10):** `title` er en **kobling** —
    «Samarbeidsprinsippet (Grice)», «Character og content (Kaplan)»,
    «Ansiktstruende handling (Brown & Levinson)», «Q-prinsippet (Horn)».
    Innholdet åpner med forklaringen i ORD, deretter mekanismen, deretter det
    engelske fagbegrepet.
  - **Tospråklighet i `content`, ikke i `title`:** den engelske termen står i
    brødteksten i definisjonen, ikke i tittelen — tittelen er
    flashcard-forsiden og skal være kort og norsk.
- `theorem`: `{ "id", "type": "theorem", "title", "content" }` — brukes for
  (a) **testene** (negasjonstesten, kansellerbarhetstesten, de diagnostiske
  aspekttestene, entailment-testen), (b) **de formelle definisjonene**
  (sannhetsbetingelsene for hvert konnektiv, entailment, presupposisjon,
  oversettelsesmønstrene for kvantorer, evalueringsregelen mot en modell), og
  (c) **prosedyrene** (F1–F5-oppskriftene). Brukes sparsomt i Del 8–10.
- `example`: `{ "id", "type": "example", "title": "Eksempel N: …", "problem", "solution" }`
  — `solution` skrives som en fullstendig besvarelse etter §F (semantikk) eller
  §A (pragmatikk), aldri som et referat.
- `tip` / `warning`: `{ "id", "type", "title", "content" }`
- `exercise`: `{ "id", "type": "exercise", "exercise": { "id", "number", "type": "classic", "difficulty": "lett"|"middels"|"vanskelig", "task", "solution", "hints": [] } }`
  — ALDRI `solutionVideo` / `allowsUpload` / `allowsCanvasDrawing` / `answer`.
  Ikke bruk `subTasks` (deloppgaver skrives inline, se §L).
- `image`: `{ "id", "type": "image", "src": "/images/textbook/ling1100/<navn>.svg", "alt", "caption" }`
  — se §G. Figuren MÅ finnes på disk og være lastet opp til Storage.
- `collapsible`: `{ "id", "type": "collapsible", "title", "buttonText": "Vis …", "content": [ "…blokker…" ] }`
  — feltnavnet er `content` og skal inneholde BLOKKER. En `text`-nøkkel eller
  tom array rendrer som en tom boks og er en byggefeil porten fanger.

Blokk-id-er: `<kapittel-id>-<løpenavn>`, f.eks. `ling1100-6-2-def-protoagent`,
`ling1100-6-2-oppg-4`, `ling1100-7-2-fig-go`. Unike innen kapitlet.

---

## §5 Obligatorisk kapittelstruktur

### 5.1 Alltid først, i denne rekkefølgen

1. `tip` **Eksamensvinkel** — frekvens, sjangre og typiske oppgaveformuleringer,
   med de EKSAKTE tallene fra skjelettets «Eksamensbelegg»-linje («Tematiske
   roller står i 9 av de 12 settene»). **Forfatteren skal ALDRI finne på
   frekvenstall**, og nevneren er **alltid 12** (§S1).
2. `text` **Forkunnskaper** — kapitler i boka som markdown-lenker
   (`[kap. 3.2](/ling1100/ling1100-3-2)`) + eventuelle kryssbok-lenker fra
   tabellen i §X. «Dette kapitlet kan leses uten forkunnskaper» der skjelettet
   sier `prerequisites: ingen`. Ordet **«Forkunnskaper» må stå i teksten** —
   porten leter etter strengen.
   **«Sist du var her»:** i kapitler med stor avstand til forkunnskapen (7.1
   bygger på 4.3; 7.2 på 6.1; 10.2 på 3.3 og 8.1; hele Del 11) SKAL blokken VISE
   de 2–3 kjernereglene ferdig oppfrisket — f.eks. «negasjonstesten:
   presupposisjonen overlever når du negerer setningen; entailmentet gjør det
   ikke» — ikke bare lenke.

### 5.2 Semantikk-teorikapittel (Del 1–7) — DNA-regnefag

Etter eksamensvinkel og forkunnskaper går kapitlet i LÆRINGSLØKKER (§1):

- `text` **Hverdagsanker** før apparatet i abstrakte kapitler (§L). Eksempler:
  presupposisjon = det spørsmålet ditt allerede har bestemt seg for; entailment
  = det du har sagt uten å si det; modellteori = å slå opp i en liste over hvem
  som faktisk gjorde hva.
- `definition` **kjernebegreper** — toppnivå med `title`, flashcard-kilden.
- `theorem` **testen/regelen/prosedyren**, presist formulert.
- `example` **gjennomført analyse** ×2–4 — hvert steg vist, med begrunnelsen
  skrevet ut (§F2).
- `exercise` ×5–9 INLINE — minst én `lett` innstegsoppgave tidlig (ren
  gjengivelse eller ett enkelt tilfelle), deretter stigende til full
  eksamenssjanger.
- `warning` **«Fasit — ikke slark»** i hvert formelt kapittel (§F3).
- `warning` **«Ikke bland …»** i hvert kapittel som innfører et begrepspar
  (§F4) — kan slås sammen med Typiske feil-blokken hvis kapitlet ellers blir
  varselstungt, men innholdet skal med.
- `warning` **Typiske feil** — feilkodene fra skjelettets «Typiske
  feil»-linje, **glosset ved første bruk PER KAPITTEL**: «(#3 — å blande de tre
  slutningstypene: entailment, presupposisjon og implikatur)».
- `collapsible` **«Symbol- og formelliste»** (§N8) der kapitlet bruker `$…$`.
- `collapsible` **Repetisjon** — 4–6 korte spørsmål fra forkunnskapskapitlene.

### 5.3 Pragmatikk-temakapittel (Del 8–10) — DNA-drøfting

- `text` **Temaet i fagets landskap** — hvilket problem teorien svarer på.
- `definition` **kjernebegreper med teoretiker-forankring** — flashcard-kilden.
- `text` **mekanismen forklart** (§A3) — ikke bare taksonomien.
- `example` **anvendelse** ×2–3 med **egne, nyskrevne eksempler**.
- `exercise` ×5–8 INLINE, hver med eksplisitt krav om eget eksempel der
  eksamen krever det (§A2).
- `warning` **«Ikke bland …»** + `warning` **Typiske feil**.
- `collapsible` **Pensumkart for kapitlet** — markdown-tabell
  `| Teoretiker | Verk | Eier disse begrepene |`. Åpner med
  begrepsbank-notisen (§L).
- `collapsible` **«Term-liste (norsk ↔ engelsk)»** i kapitler UTEN `$…$`;
  `collapsible` **«Symbol- og formelliste»** så snart kapitlet bruker `$…$`
  (§N8 — porten er streng her, og kap. 10.1 bruker `$…$` for character).

### 5.4 Drillkapittel med fasit (2.4, 3.5, 4.4, 5.3, 6.3)

1. `tip` Eksamensvinkel — hvilke varianter av sjangeren som har forekommet.
2. `text` **Løsningsoppskrift** — algoritmisk, nummerert, med testene navngitt.
3. `example` **gjennomgått case med margnotater**: `> Margnotat: her står testen
   FØR kategorinavnet — det er den rekkefølgen som gir uttelling.`
4. `exercise` × antallet skjelettet krever (12–16 for 2.4/3.5/4.4/5.3/6.3), alle
   på eksamensnivå, med nyskrevet materiale.
5. `warning` Typiske feil + `collapsible` sjangerens sjekkliste.

### 5.5 Redegjørelses-drill (8.3, 9.3, 10.3)

Samme skjelett, men punkt 2 er en **disposisjonsoppskrift**, ikke en algoritme,
og løsningene er **momentlister/modellsvar**, ikke fasit. 8–10 oppgaver.
Hver oppgave sier eksplisitt at eget eksempel kreves.

### 5.6 Sjangerkapitler (11.1 formell, 11.2 redegjørende)

Én løsningsoppskrift per sjanger — F1–F5 i 11.1, A1–A4 i 11.2 — hver med
sensor-margnotater og én gjennomgått eksamenscase. 11.2 samler bokas
A3-kontrastpar i én tabell. 11.1 samler de fem formelle prosedyrene som ett
printbart kort (§L, «samlet oppslagskort»).

**Bokas ene kalde bank** ligger i **11.2**: 8–10 nyskrevne oppgaveformuleringer
UTEN `hints`, fasit = ren momentliste, eksplisitt merket «Kald bank — ingen
hint. Her er det å mobilisere begrepsapparatet selv som trenes.» Dette er eneste
unntak fra hint-kravet i §L.

### 5.7 Feilvaksinen (11.3)

Én seksjon per feil #1–#10: (a) feilen slik den rammer, (b) nyskrevet «slik ser
den ut»-utdrag, (c) omskrevet korrekt versjon av samme passasje, (d)
varsellampe-heuristikk. Deretter gjenkjenningsoppgaver (flervalg i
`exercise.task` med **stokket fasit** — aldri samme feilkode to ganger på rad,
aldri «alle er #2»).

### 5.8 Modellbesvarelser (11.4 formell, 11.5 redegjørende)

1. `text` med den nyskrevne oppgaven, ordrett slik den ville stått i et sett,
   pluss ærlighetslinja fra §MB1.
2. `collapsible` **Fullstendig svar** — full tekst med margnotater.
   «— naturlig pausepunkt —» mellom hovedseksjonene.
3. `collapsible` **«Slark»-svar** (11.4) / **Ufullstendig svar** (11.5) — samme
   oppgave, korrekt men tynt, med gapet rammet inn som **oppgraderingsmeny**.
4. `collapsible` **Midtnivå-besvarelse** — se §MB3: minst ÉN i boka, plassert i
   **11.5**.
5. `tip` **Sensorblikket** — bygget på §S2.
6. `warning` **Typiske feil** — feilene den svake versjonen demonstrerer.
   (Kravet om `warning`-blokk gjelder også disse kapitlene.)

### 5.9 Øvingseksamener (11.6–11.8)

Komplett nyskrevet sett FØRST, deretter løsning per oppgave i `collapsible`.

- **11.6 og 11.7 er engelskspråklige** og speiler H2024: 5 Topics à 3 spørsmål
  der kandidaten velger 2 → 10 besvarelser. **Symbollisten gjengis øverst i
  settet** (§N1), og oppgaver som ber om et diagram sier eksplisitt at eksamen
  tilbyr digital håndtegning.
- **11.8 er norskspråklig** og speiler det eldre valg-/Inspera-formatet (min. 2
  semantikk + 2 pragmatikk).
- `tip` øverst deklarerer: «Tre komplette sett à 4 timer. Ta ett om gangen —
  hele kapitlet er ikke én økt», og forklarer valgstrategien (nøyaktig 2 av 3
  per Topic; å svare på alle tre gir ikke ekstrapoeng — feil #9).
- Fasitene er **fasit-løsning** for semantikk-Topics og **momentliste/modellsvar**
  for pragmatikk-Topics, alltid med poeng-/nivåbeskrivelse i ord (aldri
  karaktergrenser i tall — §S3).

### 5.10 Prøvekapitler (`ling1100-<del>-prove`, del 1–10)

Id `ling1100-<del>-prove`, `chapterNumber` `<del>.P`, tittel «Prøver til del
<del>: <seksjonstittel fra BOKCONFIG>». `estimatedMinutes: 120` (wiringen setter
dette tallet selv — bruk samme i fila så metadata og innhold stemmer).

Struktur: `tip` (dekning + **«fire prøver à ~30 min»** + «kan trygt deles over
flere kvelder — én prøve per økt» + hvor flervalget bor) + `text` Forkunnskaper
+ fire `collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med
nyskrevne oppgaver og full løsning. Prøvenes tema per del står i skjelettets §4
— følg dem punkt for punkt.

**Løsningsstruktur, differensiert etter halvdel:**

| Del | Løsningsform |
|---|---|
| 1–7 (semantikk) | **Fasit-løsning:** presist svar → testen/begrunnelsen → eget eksempel. Trinnvis føring der oppgaven er formell. |
| 8–10 (pragmatikk) | **Momentliste:** *må-punkter* (uten disse er svaret ufullstendig) · *pluss-punkter* (det som løfter) · *feller* (med feilkode). |

Etter hver prøvefasit: **avkryssbar selvdiagnose-sjekkliste (☐)** — bruk
rubrikkene i §F5 (semantikk) og §A5 (pragmatikk). Kap-referanser i fasitene som
markdown-lenker. **Ingen quiz og ingen begrepsbank i prøvekapitler.**

Statiske flervalg i prøve-`collapsible`-er har **stokkede fasit-bokstaver** —
aldri «alle a» (porten fanger `1a … 2a … 3a`).

---

## §N NOTASJONSKONTRAKTEN (fagets største tekniske risiko)

LING1100 blander fire notasjonssystemer som bruker overlappende tegn: logikk og
mengdelære, denotasjonssemantikk, lingvistisk eksempelnotasjon og — perifert —
fonetisk transkripsjon. Uten en fastsatt kontrakt kolliderer de, og
kollisjonene rendrer som søppel. **Denne seksjonen er bindende for alle
kapitler.**

### §N1 Logikk og mengdelære = eksamenens symbolliste, alltid i LaTeX

H2024-settet deler ut en symbolliste. Boka bruker **nøyaktig det settet**, og
all logikk og mengdelære skrives i LaTeX — aldri som bar unicode i brødtekst.

| Symbol | LaTeX | Betydning | Innføres i |
|---|---|---|---|
| ¬ | `$\lnot$` | negasjon | 3.1 |
| ∧ | `$\land$` | konjunksjon | 3.1 |
| ∨ | `$\lor$` | inklusiv disjunksjon | 3.1 |
| ⊻ | `$\veebar$` | eksklusiv disjunksjon (XOR) | 3.1 |
| → | `$\rightarrow$` | material implikasjon | 3.1 |
| ↔ | `$\leftrightarrow$` | biimplikasjon | 3.1 |
| ⊨ | `$\vDash$` | entailment («$p$ entailer $q$») | 3.2 |
| ∩ ∪ ⊆ ∈ | `$\cap$ $\cup$ $\subseteq$ $\in$` | snitt, union, delmengde, medlemskap | 3.4 |
| ∀ ∃ | `$\forall$ $\exists$` | allkvantor, eksistenskvantor | 4.1 |
| ⟦ ⟧ | `$\llbracket \rrbracket$` | denotasjon | 4.3 |
| ⟨ ⟩ | `$\langle \rangle$` | ordnet par | 4.3 |
| { } | `$\{\ \}$` | mengde | 3.4 |

**Bindende avklaringer:**

1. **Alle symbolene over er testet mot repoets KaTeX (0.16.27) 26. juli 2026 og
   rendrer:** `\llbracket`, `\rrbracket`, `\vDash`, `\veebar`, `\langle`,
   `\rangle`. Du skal altså ikke finne på erstatninger. Skulle KaTeX-versjonen
   endres, er den eneste godkjente reserven for denotasjonsklammene
   `$[\![\,\alpha\,]\!]$` (også testet) — **aldri** bar unicode ⟦ ⟧ i brødtekst.
2. **`$\vDash$` (dobbelt turnstile) brukes om entailment, ALDRI `$\models$`
   blandet inn i samme bok, og ALDRI `$\Rightarrow$`.** Entailment og material
   implikasjon er to forskjellige ting, og kapittel 3.2 handler nettopp om å
   ikke blande dem — da kan ikke boka blande symbolene.
3. **`$\rightarrow$` er material implikasjon, ikke «fører til».** Bruk ordet
   «gir» eller «medfører» i prosa; pilen er reservert.
4. Presupposisjonsrelasjonen skrives i **ord** («$p$ presupponerer $q$»), ikke
   med et eget symbol. Arkivet bruker ikke ett, og et oppfunnet symbol ville
   vært en usann notasjonspåstand.
5. **Modellen** skrives $M=\langle D,F\rangle$: $D$ = domenet,
   $F$ = tolkningsfunksjonen. Relasjoner tolkes som mengder av ordnede par:
   $F(R)=\{\langle a,b\rangle, \langle b,c\rangle\}$. **Ordnede par er
   ordnede** — $\langle a,b\rangle \neq \langle b,a\rangle$ skal stå eksplisitt
   som en `warning` i 4.3.

### §N2 Kollisjonstabellen (løst her, én gang, bindende for hele boka)

Dette er notasjonskontraktens viktigste avsnitt. Fire tegnpar har mer enn én
konvensjonell bruk i lingvistikken. Boka velger ÉN bruk per tegn:

| Tegn | **Reservert for** | **FORBUDT bruk i denne boka** | Skriv i stedet |
|---|---|---|---|
| `⟨ ⟩` (`$\langle\rangle$`) | **ordnede par** (4.3) og **Horn-skalaer** (8.2) | ortografisk form («⟨katt⟩») | ortografisk form i *kursiv*: *katt* |
| `[ … ]` | **semantiske trekk** i trekkknipper: `[+ANIMAT]`, `[−VOKSEN]`, `[±TELISK]` | fonetisk transkripsjon uten varsel | fonetisk form kun i kap. der §N4 er varslet, og alltid med IPA-merking i teksten |
| `/ … /` | **fonemisk form** (§N4) | «enten/eller» i formell tekst | skriv «eller», eller bruk `$\lor$` |
| `' … '` (enkle anførselstegn) | **betydning/glose**: engelsk fagterm og betydningsangivelse — «implikasjon (‘entailment’)», «*bok* ‘bound volume’» | sitater fra pensum | sitat er uansett forbudt (§O) |

**Semantiske trekk (§N2b):** trekk skrives med `±` og trekknavnet i store
bokstaver: `[+STATISK]`, `[−TELISK]`, `[+ANIMAT]`, `[−VOKSEN]`. I brødtekst
skrives de i backticks eller i en ```` ```text ````-blokk slik at `[` og `]`
aldri kolliderer med markdown-lenkesyntaks. **Aldri** `$[\pm\text{TELISK}]$` —
trekk er ikke matematikk, og LaTeX-versjonen trigger unødvendig
symbolliste-krav (§N8).

**Trekkknipper i tabell** (Vendler/Dowty i 5.2, komponentanalyse i 2.3) settes
som markdown-tabell med én kolonne per trekk, ikke som løpende tekst.

### §N3 Eksempelsetninger: nummerering og grammatikalitetsmarkører

Lingvistikkens eksempelnotasjon er **bindende** — den er en av de tingene sensor
ser med én gang, og den er samtidig en alvorlig rendringsfelle.

**N3a. Nummerering.** Eksempelsetninger som analyseres nummereres fortløpende
innenfor kapitlet: `(1)`, `(2)`, `(3)`, med deleksempler `(1a)`, `(1b)`.
Referanser i prosa og fasit bruker samme nummer: «I (2b) overlever
presupposisjonen negasjonen.» Nummereringen starter på nytt i hvert kapittel.

**N3b. Grammatikalitets- og aksepterbarhetsmarkører:**

| Markør | Betyr | Brukes i |
|---|---|---|
| `*` | ugrammatisk — grammatikken genererer ikke strengen | alle deler |
| `?` / `??` | tvilsom / svært tvilsom aksepterbarhet | sparsomt |
| `#` | grammatisk, men pragmatisk avvikende eller semantisk anomal i kontekst | 8–10 |

`*` betyr **aldri** «dårlig språk» eller «feil av en språkbruker» — se §V1.
Forklar markørene ved første bruk per kapittel (§L, nybegynner-inngangen).

**N3c. RENDRINGSFELLA — dette er den viktigste tekniske regelen i §N.**
`*` er markdowns kursiv-/fetmarkør og `#` er markdowns overskriftsmarkør. En
eksempelsetning som begynner med `*Kari sovnet barnet` blir enten kursivert
eller spist. Løsningen er bindende:

- **Nummererte eksempelsett skrives i en ```` ```text ````-blokk.** Der er både
  `*`, `#`, `?` og kolonnejustering trygge, og settet leses som en enhet:

  ```text
  (1) a.  Barnet sovnet.
      b. *Kari sovnet barnet.
      c.  Kari fikk barnet til å sovne.
  ```

- **Enkeltstående eksempler inline i prosa:** escape markøren —
  `\*Kari sovnet barnet` i JSON-kilden skrives `"\\*Kari sovnet barnet"`.
  Alternativt legg hele eksempelet i backticks.
- **`#` i starten av en linje MÅ escapes** som `\#`, ellers blir linja en
  overskrift.
- **`?` er trygt** og trenger ingen escaping.

**N3d. Eksempler i `title`-felt er forbudt** (§3.1). Et eksempel med `*` i en
`title` rendrer rått og ser ut som en skrivefeil.

### §N4 Fonemisk, fonetisk og ortografisk form — og IPA

Perifert i dette faget (§M), men bindende der det forekommer — typisk i kap. 2.1
(homonymi vs. polysemi, der lydform og skriftform kan sprike) og i kap. 10.1–10.2
(deiksis og høflighetsformer i andre språk).

1. **Fonemisk form mellom skråstreker:** `/kɑːt/`. **Fonetisk form i klammer:**
   `[kʰɑːt]`. Skillet er ikke pynt — fonemisk = det abstrakte lydsystemet,
   fonetisk = den faktiske realiseringen. Bruker du én av dem, forklar skillet på
   stedet i én setning.
2. **IPA skrives som direkte unicode-tegn i JSON-strengen** — `ʃ`, `ð`, `ŋ`, `ə`,
   `ɑ`, `ː`, `ʰ`. **LaTeX-hack er ABSOLUTT FORBUDT:** ikke `\textipa{}`, ikke
   `\v{s}`, ikke `\ng`, ikke `$\int$` som stand-in for `ʃ`. KaTeX har ingen
   IPA-pakke; slike konstruksjoner rendrer som søppel eller stille feil, og
   `sjekk-latex.py` fanger dem ikke alle. Unicode er den eneste tillatte formen.
3. **IPA settes aldri inne i `$…$`.** Transkripsjon er ikke matematikk. Ligger
   den inline i prosa, skriv den i backticks: `` `/kɑːt/` `` — da er den beskyttet
   mot både matte- og markdown-transformen.
4. **Ortografisk form** (bokstavrekka som sådan) skrives i *kursiv*: «ordet
   *bank* har to urelaterte betydninger». Vinkelparenteser er reservert (§N2).
5. **Betydning/glose** i enkle anførselstegn: «*bank* ‘finansinstitusjon’ mot
   *bank* ‘elvebredd’».
6. Bruk aldri fonetisk transkripsjon der ortografi holder. En unødvendig
   transkripsjon i en semantikkbok er støy, og støy koster leseren tid hun ikke
   har.

### §N5 Glossering (Leipzig-konvensjonen)

Bindende **når og bare når** en eksempelsetning er på et annet språk enn norsk,
dansk, svensk eller engelsk. Det skjer i praksis i Del 10 (sosial deiksis,
høflighetsdeiksis, honorifika) og eventuelt i Del 2 og Del 5 der et
typologisk poeng gjøres.

**Formen er tre linjer, alltid i en ```` ```text ````-blokk** (kolonnene MÅ
være justert, og bare kodeblokken bevarer det):

```text
(4)  Anata-wa      hon-o        yon-da        ka?
     du-TOP        bok-AKK      lese-PST      SPM
     'Leste du boka?'
```

Reglene:

1. **Linje 1** = originalspråket, med **morfemgrenser markert med bindestrek**
   `-`. Klitika markeres med `=` der det er relevant. Bindestrekene i linje 1 og
   linje 2 SKAL stå i samme antall og i samme rekkefølge.
2. **Linje 2** = glosselinja. Leksikalske morfemer gloses med et norsk ord i
   små bokstaver; **grammatiske kategorier skrives i KAPITÉLER** — det vil si
   med STORE BOKSTAVER, siden verken markdown eller KaTeX har ekte kapitéler.
   Bruk Leipzigs standardforkortelser: `NOM ACC GEN DAT PL SG 1 2 3 PST PRS FUT
   PFV IPFV TOP FOC DEF INDF NEG Q HON POL`. **Norske ekvivalenter er tillatt og
   å foretrekke der de finnes** (`AKK`, `GEN`, `FL`, `ENT`, `PRET`, `SPM`,
   `NEKT`, `HØFL`) — men velg ÉN linje og hold den i hele boka.
3. **Linje 3** = fri oversettelse til norsk, i enkle anførselstegn.
4. **Hver forkortelse forklares ved første bruk per kapittel** — enten i en
   parentes rett etter blokka eller i kapitlets term-liste. En uforklart glosse
   er nybegynner-sjargong (§L).
5. **Kolonnejustering:** linje 1 og linje 2 justeres morfem for morfem med
   mellomrom. Ikke bruk tabulator (den rendrer ulikt).
6. **Aldri glosser i en `title`, `alt` eller `caption`.**

### §N6 Trestrukturer, diagrammer og andre figurer

**Bindende og et dokumentert avvik fra skjelettet.** Skjelettets §1.2 punkt 6
sier at Jackendoff-trær «beskrives i tekst/ASCII slik en A-besvarelse ville
håndtegnet dem». Den regelen er **overstyrt her** av produkteierregelen fra
15. juli 2026 (README-leserkravene og `../DNA-regnefag.md` «Figurkrav»):

> **Ber en oppgave om en figur, SKAL løsningen vise figuren — som ekte SVG.**

Konsekvensene står i §G. Kort oppsummert:

- Alle **Jackendoff-trær** (7.2, Del 7-prøven, øvingseksamen 1 og 2), alle
  **Venn-diagrammer** (3.4), **scope-representasjonene** (4.2), og
  **modell-visualiseringen** (4.3) er `image`-blokker med SVG.
- ASCII-versjoner i ```` ```text ````-blokker er et **komplement** — de er
  nyttige fordi de viser leseren hva hun selv skal klare å tegne for hånd på
  fire timer — men de er **aldri en erstatning**.
- Strengen «Figur i ord» er forbudt i hele boka (§FB).

### §N7 Tospråklighet (norsk brødtekst + engelsk fagterm)

Fra skjelettets §1.2 punkt 5, tatt inn som byggekrav:

- Norsk brødtekst. **Den engelske fagtermen står i enkle anførselstegn i
  parentes ved FØRSTE forekomst i HVERT kapittel** — ikke arv fra tidligere
  kapitler: «situasjonstyper (‘situation types’)», «samarbeidsprinsippet
  (‘Cooperative Principle’)», «logisk implikasjon (‘entailment’)».
- Der den engelske termen er den som faktisk brukes i undervisningen og i
  H2024-settet — *entailment*, *downward entailment*, *character*, *content*,
  *flouting*, *hedging*, *proto-agent*, *proto-patient*, *accomplishment*,
  *achievement* — brukes den engelske formen som hovedterm i brødteksten, med
  norsk forklaring ved første bruk. Ikke oversett bort en term studenten møter
  på engelsk i eksamenssettet.
- **Øvingseksamen 1 og 2 (11.6, 11.7) er helengelske** — oppgavetekst,
  symbolliste og instruksjoner. Løsningene skrives på norsk med engelske
  fagtermer, slik resten av boka.
- Norske og engelske termer brukes **konsekvent**, ikke om hverandre i samme
  avsnitt.

### §N8 Symbol- og formelliste / term-liste (obligatorisk, per delkapittel)

`collapsible` SIST i kapitlet, med:

- `title`: **`"Symbol- og formelliste"`** — literalt. `sjekk-bok.py` leter etter
  akkurat den strengen.
- `buttonText`: `"Vis symboler og formler"`
- første linje i første `text`-blokk inne i collapsiblen, ORDRETT:
  «Oppslagsverk — alt her forklares underveis i kapitlet.»
- deretter markdown-tabell `| Symbol | Betydning |` med ALLE symboler
  delkapitlet bruker — **per delkapittel, ikke arv**
- deretter «**Formler og notasjonsregler i dette delkapitlet:**» med
  display-LaTeX og én linjes tolkning per regel.

> **PORT-FELLE (les denne).** `sjekk-bok.py` krever «Symbol- og formelliste» i
> **ethvert** kapittel som inneholder minst ett `$…$` med en bokstav eller en
> backslash i seg — også et rent pragmatikk-kapittel. Kap. 10.1 skriver
> character som $\text{character}: \text{kontekst}\rightarrow \text{proposisjon}$
> og trenger derfor listen. **Enten** tar du med listen, **eller** skriver du
> uttrykket i ren prosa uten `$…$`. Ikke prøv å slippe unna med en term-liste
> som heter noe annet.

**Rent symbolfrie kapitler** (typisk 8.1, 9.1, 9.2, 9.3, 11.2) har i stedet en
`collapsible` med `title` **«Term-liste (norsk ↔ engelsk)»**, buttonText «Vis
termlisten», og en markdown-tabell `| Norsk term | Engelsk term | Kort |`.

### §N9 Hardt linjebrutt prosa er FORBUDT

Rendreren gjør **hvert enkelt `\n` om til `<br />`**. Brødtekst som er brutt ved
~60 tegn (slik en tekstredigerer bryter markdown-kildefiler) gir derfor
linjeskift midt i setninger hos leseren.

- **Ett avsnitt = én lang linje i JSON-strengen.** Avsnittsskille er `\n\n`.
- `\n` brukes bevisst og bare til: avsnittsskille (`\n\n`), listepunkter,
  tabellrader, deloppgaver på egen linje (`\n\n**a)** …`), margnotat-linjer og
  linjer inne i ```` ```text ````-blokker.
- Dette gjelder ALLE tekstbærende felter: `content`, `problem`, `solution`,
  `task`, `hints[]`, `caption`.
- Kontroll før ferdigmelding: se sjekken i §Q punkt 12.

### §N10 Skrivemåter (grep-konsistens — velg én form, hold den)

«entailment» (ikke «entailement») · «downward entailment» · «presupposisjon»
(ikke «presupposition» i norsk brødtekst) · «implikatur» · «konversasjonell
implikatur» · «samarbeidsprinsippet» · «maksime»/«maksimene» · «håning
(‘flouting’)» · «gardering (‘hedging’)» · «kansellerbarhet» · «lokusjonær /
illokusjonær / perlokusjonær» · «hell-vilkår (‘felicity conditions’)» ·
«konstativ» / «performativ» · «tematiske roller» · «agens» / «actor» ·
«proto-agent» / «proto-patient» · «argumentseleksjonsprinsippet» · «telisk» /
«atelisk» · «semelfaktiv» · «accomplishment» / «achievement» (engelsk form,
kursiv ikke nødvendig) · «Vendler/Dowty-klassene» · «tolkningsfunksjon» ·
«ordnede par» · «kvantorløfting (QR)» · «character» / «content» (alltid engelsk,
alltid Kaplan ved første bruk) · «Horn-skala» · «relevansteori».

Personnavn: Grice, Austin, Searle, Dowty, Vendler, Jackendoff, Kaplan, Horn,
Huang, Saeed, Elbourne, Zimmermann & Sternefeld, Sperber & Wilson, Brown &
Levinson, Russell, Strawson, Frege, Berlin & Kay. **Ingen andre navngis som
pensumankere** (§O).

---

## §G FIGURKONTRAKTEN — tegneoppgaven er en selvstendig ferdighet

H2024 tilbyr **digital håndtegning** og ber eksplisitt om tre-diagram (Topic 5),
og H2019 ber om Venn-diagram. En bok som bare beskriver diagrammene i prosa
underviser ikke ferdigheten.

**G1. Figur-i-ord er et KOMPLEMENT, ALDRI en erstatning.** Der denne kontrakten
lover en figur (G4), SKAL det stå en faktisk `image`-blokk med SVG.
Prosabeskrivelsen og en eventuell ASCII-versjon beholdes som forklaring TIL
figuren.

**G2. Ber en oppgave om figur, SKAL løsningen vise figuren.** Sier
oppgaveteksten «tegn treet», «tegn et konseptuelt tre-diagram», «vis med et
Venn-diagram», «skisser de to lesningene», er en løsning som bare skriver
«*Figur i ord:* …» UFULLSTENDIG. Gjelder også prøver og øvingseksamener skrevet
som tekstblokker inne i `collapsible`-er (nøstede `image`-blokker rendres, men
MÅ ha `id` og `src`).

**G3. Standarden boka modellerer for Jackendoff-trær:**

1. rotnoden er **hendelses-/tilstandskategorien** ([Event] eller [State]);
2. **hovedfunksjonen** står som node: GO, BE, STAY, CAUSE;
3. argumentene er merket med **kategori**: [Thing], [Path], [Place];
4. Path-noden inneholder retningsfunksjonen (TO, FROM, TOWARD) med sitt
   [Place]- eller [Thing]-argument;
5. **løvnodene merkes med det leksikalske innholdet** fra setningen;
6. treet er komplett — et tre uten Path-argument i en bevegelsessetning er GALT,
   og den ene tillatte forekomsten av et galt tre er som eksplisitt merket
   moteksempel i en `warning`, der det står at figuren er gal.

**G4. Figurer som MINIMUM skal finnes** (dette er kontraktens Figurkrav-liste —
skjelettet har ikke et eget Figurkrav-felt, så listen er autoritativ her):

| Kapittel | Figur |
|---|---|
| 2.2 | beslutningstre for de fem antonymitypene (hvilken test, hvilket utfall) |
| 3.4 | Venn-diagram for snitt og union · Venn-illustrasjon av delmengdeslutning (downward entailment) · testflyt-diagram for de tre slutningstypene |
| 4.2 | de to scope-lesningene av én setning, side om side |
| 4.3 | modellen $M=\langle D,F\rangle$ visualisert: domene, predikat som mengde, relasjon som piler mellom individer |
| 5.2 | beslutningstre for Vendler/Dowty-klassifisering, med trekkene på grenene |
| 6.2 | proto-agent- og proto-patient-egenskapene som to knipper, med et gradert eksempel |
| 7.2 | **tomt tre-skjelett** (prosedyrefigur) + minst tre ferdige trær: GO/PATH/TO, BE/PLACE, CAUSE |
| 7.2 (drill) | **ett fasit-tre per tegneoppgave** i den innebygde drillen |
| 7.P | fasit-tre til prøvens tegneoppgave |
| 11.6, 11.7 | fasit-tre til hver tegneoppgave i settet |

**G5. Filer og stil:** `public/images/textbook/ling1100/<navn>.svg`. Linjer og
noder i mid-tone farger, aksefarge `#6b7280`, **norsk tekst i etikettene
(kategori- og funksjonsnavn beholder sin engelske form: GO, PATH, Thing)**,
**transparent bakgrunn** (må være lesbar i både lys og mørk modus), viewBox ca.
480×360, tydelige etiketter. Valider XML før wiring.

**G6. Etter at nye figurer er skrevet:** kjør
`npx tsx scripts/upload-media-storage.ts` — bilder serveres fra Supabase
Storage, og uten opplasting blir det **404 i prod selv om fila finnes i repoet**.
Kjør deretter `python3 scripts/hoyskolebok/sjekk-figurer.py ling1100`.

**G7. Skreddersydd caption per plassering.** Hver `caption` skrives for nettopp
den plasseringen og knyttes til kapitlets eget eksempel og termbruk — aldri en
generisk gjentakelse. `alt` beskriver figuren bokstavelig for skjermleser (ren
tekst, ingen LaTeX, ingen markdown, ingen backticks). **En figur skal bare vise
det kapitlet har lært bort:** ikke tegn CAUSE inn i et tre i den delen som bare
har innført GO — lag to figurer.

---

## §F FASITKONTRAKTEN (semantikk-halvdelen — analyseoppgaver med ett riktig svar)

Rundt 55–60 % av eksamen er oppgaver med objektivt riktig svar.
H2022-veiledningen er kategorisk: her finnes **utvetydige fasitsvar, og «slark» i
formuleringen er feil**. Denne seksjonen er semantikk-halvdelens motstykke til
regnefagenes §R.

### §F1 Hver fasit er KONTROLLERT før den skrives

**F1a. Sannhetstabeller og logiske påstander verifiseres maskinelt.** Før du
skriver en sannhetstabell, en sannhetsbetingelse, en entailment-påstand, en
predikatlogisk oversettelse eller en modell-evaluering, kjør den gjennom
`python3` og se at hver rad stemmer. Eksempel på minimumssjekk:

```text
python3 -c "
from itertools import product
for p,q in product([True,False],repeat=2):
    print(p,q,'XOR',p!=q,'| ->',(not p) or q)
"
```

Dette gjelder ALLE tabeller i boka, også de i prøver og øvingseksamener, og
**særlig** de fire fellene: at $p\rightarrow q$ er sann når $p$ er usann; at
inklusiv $\lor$ er sann når begge er sanne; at $\veebar$ er usann når begge er
sanne; at $\forall$ parres med $\rightarrow$ og $\exists$ med $\land$.

**F1b. Modell-evalueringer regnes ut, ikke gjettes.** For hver
modell-oppgave: skriv ned $D$ og $F$ eksplisitt, og verifiser hvert atom og hver
kvantor med en liten python-sjekk over domenet. **Ordnede par sjekkes i begge
retninger** — den vanligste feilen i 4.3 er å tro at $\langle a,b\rangle\in F(R)$
medfører $\langle b,a\rangle\in F(R)$.

**F1c. Klassifiseringsfasiter kontrolleres mot testen, ikke mot magefølelsen.**
For hver setning du klassifiserer (antonymitype, situasjonstype, tematisk rolle,
slutningstype, meningsrelasjon): kjør testen skriftlig for deg selv først, og
skriv den inn i fasiten. Er testen tvetydig for setningen din, **bytt setning** —
en klassifiseringsoppgave med omstridt fasit er verre enn ingen oppgave.

**F1d. Der en fasit er faglig standard snarere enn dokumentert i arkivet**,
merkes den i klartekst: «Dette er standardanalysen i pensumlitteraturen; UiO har
ikke publisert fasit for dette emnet.» Bruk **aldri** den literale markøren
`(verifiser)` i kapittelfilene — `sjekk-bok.py` feiler på den (§Q). Skriv
usikkerheten ut med ord.

### §F2 Framgangsmåten vises trinn for trinn — aldri bare svaret

Hver formell `example.solution`, `exercise.solution` og prøvefasit følger den
samme tredelte føringen (dette er bokas «formelle modus», etablert i kap. 0.2):

> **1) Presist svar** → **2) testen eller regelen som ga svaret, gjennomført** →
> **3) eget eksempel eller kontrasttilfelle som viser at du har forstått
> mekanismen.**

Konkret per sjanger:

| Sjanger | Trinn 1 | Trinn 2 | Trinn 3 |
|---|---|---|---|
| **F1** sannhetstabell | hele tabellen, alle rader | forklar hver rad, og hva variablene står for | eget eksempel på begrepet (f.eks. eksklusiv lesning) |
| **F2** predikatlogikk | formelen | hvilke predikater/konstanter du valgte og hvorfor; kvantor–konnektiv-parringen | en parafrase tilbake til norsk |
| **F2** modell | sannhetsverdien | oppslag av hvert atom i $F$, medlemskapstest, trinnvis oppbygging | hva som ville endret svaret |
| **F3** situasjonstype | trekkene + klassen | minst to diagnostiske tester gjennomført på setningen | egen eksempelsetning i samme klasse |
| **F4** tematiske roller | rollen per ledd | begrunnelsen per rolle; agens vs. actor der det gjelder; proto-rolle-egenskapene | egen setning med rolle–syntaks-mismatch |
| **F5** tre/diagram | figuren (SVG, §G) | hovedfunksjon → argumenter → løvnoder, forklart | hva et galt alternativ ville sett ut som |

**Et svar som bare oppgir kategorinavnet er ufullstendig** — det er feil #1, og
det er den hyppigste enkeltfeilen faget dokumenterer.

### §F3 `warning` «Fasit — ikke slark» (obligatorisk i hvert formelt kapittel)

Hvert kapittel i Del 3, 4, 5, 6 og 7 (samt 2.2 og 2.4) har en `warning` med
`title` **«Fasit — ikke slark»** som setter den **presise** formuleringen mot
den **vage**, i to kolonner eller to avsnitt. Eksempel på formen (skriv ditt
eget innhold, ikke dette):

> **Vagt:** «‘$p$ og $q$’ er sann når begge er omtrent sanne.»
> **Presist:** «‘$p$ og $q$’ er sann hviss $p$ er sann og $q$ er sann; i alle
> andre tre tilfeller er den usann.»

Ordet **«hviss»** (hvis og bare hvis) innføres og forklares ved første bruk.

### §F4 `warning` «Ikke bland …» (obligatorisk der et par innføres)

Faget er bygd på nærliggende motsetningspar, og forveksling er den mest
sannsynlige kunnskapsfeilen (feil #2). Hvert kapittel som innfører et par har en
`warning` med `title` som starter **«Ikke bland …»**, og som gir **den skarpe
forskjellen i én setning + en test som skiller dem**:

| Par | Hjemkapittel | Det skarpe skillet må nevne |
|---|---|---|
| homonymi / polysemi | 2.1 | om betydningene er historisk og semantisk relatert |
| komplementære / graderbare antonymer | 2.2 | negasjonstesten og mellomtrinn/komparativ |
| konverser / reverser | 2.2 | argumentbytte mot retningsomvending |
| inklusiv / eksklusiv disjunksjon | 3.1 | raden der begge er sanne |
| material implikasjon / entailment | 3.2 | at entailment gjelder i alle situasjoner, ikke i én |
| entailment / presupposisjon / implikatur | 3.3, 3.4 | negasjonstesten og kansellerbarhetstesten |
| analytisk / syntetisk | 3.2 | sant i kraft av betydning mot i kraft av verden |
| $\langle a,b\rangle$ / $\langle b,a\rangle$ | 4.3 | at par er ordnede |
| telisk / atelisk | 5.1 | naturlig endepunkt, «på X tid»-testen |
| accomplishment / achievement | 5.2 | durativitet |
| agens / actor | 6.2 | intensjonalitet/volisjon |
| proto-agent / proto-patient | 6.2 | at de er graderte egenskapsknipper, ikke kategorier |
| sense / reference | 1.2 | presentasjonsmåte mot referent |
| konvensjonell / konversasjonell implikatur | 8.2 | om den er knyttet til ordet eller til samarbeidet |
| epistemisk / deontisk modalitet | 10.2 | kunnskap mot tillatelse/forpliktelse |
| character / content | 10.1 | at character er en **funksjon** fra ytringskontekst til proposisjon |
| eksplikatur / implikatur | 10.2 | om innholdet utfyller det sagte eller kommer i tillegg |

### §F5 Selvdiagnose for formelle svar (binær rubrikk)

Etter hver formell prøvefasit, og i kap. 0.2 og 11.1:

☐ Står det **presise svaret** først, uten forbehold og uten «omtrent»?
☐ Er **testen eller regelen gjennomført** på det konkrete materialet, ikke bare
  navngitt?
☐ Er **alle rader/ledd/setninger** i oppgaven besvart (tell dem)?
☐ Er det **egne eksempelet** med, der oppgaven ber om det?
☐ Er **paret** i oppgaven holdt fra hverandre med den skarpe forskjellen?
☐ Er **tempus** oppgitt der oppgaven ber om situasjonstype *og* tempus (feil #8)?
☐ Er **figuren tegnet** der oppgaven ber om en figur (feil #7)?

---

## §A REDEGJØRELSESKONTRAKTEN (pragmatikk-halvdelen)

Rundt 35–40 % av eksamen er strukturert redegjørelse med applikasjon, og bare
~5 % er fri drøfting. **Dette er ikke et essayfag i exphil-forstand** —
normalformen er «forklar X presist + anvend det på disse eksemplene + lag egne
eksempler», ikke «drøft og ta stilling».

### §A1 Instruksjonsverbet styrer sjangeren (bindende)

Hver oppgave i boka — og hver modellbesvarelse — skal svare i den sjangeren
instruksjonsverbet krever. Å svare i feil sjanger er feil #1, uansett hvor godt
innholdet er.

| Instruksjonsverb | Hva svaret MÅ inneholde | Sjanger |
|---|---|---|
| «Gjør rede for X» / «forklar X» | definisjon (m/engelsk term) → taksonomien → **mekanismen** → egne eksempler. H2020u er eksplisitt: *svar uten forklaring er ikke fullstendige*. | A1 |
| «Illustrer med egne eksempler» | minst ett **nyskrevet** eksempel per kategori det spørres om. Å utelate dem gir ufullstendig svar. | A1 |
| «Avgjør for hvert … og begrunn» | kriteriet/testen FØRST → anvendt mekanisk på hvert ledd → begrunnelsen skrevet ut, ikke bare kategorinavnet. | A2 |
| «Sammenlign X og Y» / «hvordan skiller de seg?» | posisjon A → posisjon B → **eksplisitte sammenligningsakser** (2–4) → kort vurdering per akse. Aldri to parallelle monologer. | A3 |
| «Er du enig?» / «skriv en halv side om …» | still opp spørsmålet → argumenter for og mot forankret i pensum → **begrunnet stillingtaken**. Standpunktet er fritt; begrunnelsen premieres. | A4 |
| Flerdelt a/b/c | hver deloppgave besvares for seg; å hoppe over én er feil #9. | alle |

Sammensatte formuleringer er normen. **Tell instruksjonsverbene, og svar på
alle.** Dette drilles eksplisitt i kap. 0.2, 11.2 og i prøve 1 til Del 9.

### §A2 «Egne eksempler» er et KRAV, ikke pynt

Fra Inspera-fasen og framover står det i settene selv at man skal gi egne
eksempler der det bes om det. Konsekvenser for deg som skriver:

1. Oppgaveteksten i boka sier det **eksplisitt** når den krever det: «… og gi ett
   eget eksempel per kategori.»
2. Løsningen **viser** det egne eksempelet, ferdig skrevet — ikke «her ville man
   gitt et eksempel».
3. Eksemplene er **verdens-caser**, ikke metaeksempler av typen «en medstudent
   sier …». En dialog på et kjøkken, en beskjed på jobben, en samtale i en butikk.
4. Boka har **ingen** eksempler som gjenbruker arkivets faste eksempelsett (§O).

### §A3 Mekanismen FORKLARES, ikke bare eksemplifiseres

Dette er A-aksen i pragmatikk-halvdelen, og det er det H2022-veiledningen er
tydeligst på. Fire steder er obligatoriske:

| Begrep | Hva som MÅ forklares (ikke bare vises) |
|---|---|
| **Dowtys proto-roller** (6.2) | at de er **knipper av entailment-egenskaper**, graderte, ikke faste kategorier — og argumentseleksjonsprinsippet: flest proto-agent-egenskaper → subjekt |
| **Huangs sju egenskaper** (8.2) | hver egenskap **navngitt OG forklart** med hva den innebærer; minst fire behandles fullt |
| **Horns Q- og R-prinsipp** (8.2) | Q-prinsippet som hørerorientert («si nok») og R som talerorientert («ikke si mer enn nødvendig»), og **skalaen koblet til Q** — ikke dagligspråks-assosiasjoner om «nedover» |
| **Kaplans character** (10.1) | character som en **funksjon fra ytringskontekst til proposisjon**, ikke «bare betydningen» |

En redegjørelse som lister uten å forklare er feil #5.

### §A4 Drøftingsdelen (A4) — det sjeldne unntaket

Ekte «er du enig?»-drøfting finnes praktisk talt bare i universalitets-/
relativitetstemaet. Den får:

- ett sjangeravsnitt i kap. 11.2 med disposisjonsmal,
- den korte «bør kjenne til»-halen i kap. 2.3,
- én oppgave i Del 2-prøven.

**Ikke** bygg ut fri drøfting som normalform noe annet sted. Å trene studenten i
å drøfte fritt der eksamen ber om presis redegjørelse er å trene feil ferdighet.

Der drøfting faktisk forekommer gjelder: **standpunktet er fritt**, alle utfall
kan være gode når begrunnelsen er stringent, og det skal sies eksplisitt hver
gang boka ber leseren ta stilling.

### §A5 Selvdiagnose for redegjørende svar (binær rubrikk)

☐ Er begrepet **definert presist**, med den engelske termen?
☐ Er **taksonomien** komplett (alle fem Searle-kategorier, alle fire maksimer,
  alle fem antonymityper — tell dem)?
☐ Er **mekanismen forklart**, ikke bare illustrert?
☐ Er det **egne eksempler** der oppgaven ber om dem — ett per kategori?
☐ Er **paret** i oppgaven holdt fra hverandre (feil #2)?
☐ Er **alle instruksjonsverb** i oppgaven besvart?
☐ Er svaret **fyldig nok** — også på siste oppgave (H2022 forventer overskudd)?

---

## §S SENSORKONTRAKTEN — og ærligheten om et tynt grunnlag

### §S1 Kildegrunnlaget: si det presist, aldri mer

Arkivet `~/Desktop/Eksamner/UiO/LING1100/` er verifisert 26. juli 2026 og
inneholder **13 filer**:

- **12 eksamensoppgaver** (PUB-OPPGAVE, fritt tilgjengelige etter åndsverkloven
  § 14): H2011, H2012, H2013, H2014, H2015, H2017, H2018, H2019, **H2020-utsatt
  (avholdt januar 2021)**, H2021, H2022, H2024.
- **1 sensorveiledning** (PUB-SENSORVEIL): **H2022**, og bare den.

Undermappene `eksamen/`, `fasit/`, `losningsforslag/`, `sensorveiledning/` og
`utsatt/` er **tomme** — alle filene ligger i rotmappa.

**Bindende språkregler:**

1. **Nevneren for ALLE frekvenspåstander er 12.** Hver «N av 12 sett»-påstand
   skal stemme eksakt med skjelettets belegg-liste for det temaet. Skal du
   snevre inn, si hvilken delmengde du mener: «i de fire settene fra 2019 og
   senere».
2. **Sensorveiledningen omtales ALLTID i ENTALL.** Skriv «den ene
   sensorveiledningen som finnes (H2022)». Flertallsformene **«sensorveiledninger»
   og «sensorveiledningene» er FORBUDT** og grep-sjekkes (§FB) — de ville vært
   usanne.
3. **Sensorkravene hviler på to ben:** (1) den ene H2022-veiledningen, og (2)
   oppgavesettenes egne instruksjonsverb og rubrikker («det er mulig å bestå selv
   om man ikke svarer på alt»; «det er viktig å gi egne eksempler alle steder der
   det blir bedt om det»). Der en påstand om sensorpraksis hviler på H2022 alene,
   **skal boka si det i klartekst** — ikke med en markør, men med en setning.
4. **Ingen karaktergrenser.** Terskeltall for A–F er ikke dokumentert i arkivet
   og skal ikke oppgis noe sted i boka.
5. **Ingen fasit og ingen løsningsforslag finnes** for dette emnet. Alle
   fasiter, momentlister og modellbesvarelser i boka er **nyskrevet av oss**.
   Boka skal aldri antyde noe annet.
6. **Ingen andre kildetyper nevnes** — ingen karakterstatistikk, intet
   sensorpanel, ingen eksamensrapport, ingen «UiOs fasit».
7. **Ingen sidetall** noe sted (arkivet attesterer ingen; grep-sjekkes).

**Kildenote-mal for kap. 0.1** (bruk denne ordlyden — tilpass språket, aldri
tallene):

> Boka er kalibrert mot **12 eksamenssett** i LING1100 fra Institutt for
> lingvistiske og nordiske studier (ILN), UiO: høsten 2011, 2012, 2013, 2014,
> 2015, 2017, 2018, 2019, den utsatte prøven for høsten 2020 (avholdt i januar
> 2021), samt høsten 2021, 2022 og 2024. Emnet gis bare om høsten, og settene
> for 2016 og 2023 mangler i arkivet. **Det finnes ingen offisielle
> løsningsforslag og ingen fasit for dette emnet**, og bare **én
> sensorveiledning** — for høsten 2022. Alt du finner av fasiter,
> modellbesvarelser og momentlister i denne boka er derfor skrevet av oss, ut
> fra pensumlitteraturen og oppgavenes egne krav. **Forbehold:** når vi sier hva
> sensor legger vekt på, hviler det på den ene veiledningen fra 2022 og på det
> oppgavetekstene selv sier — et tynt grunnlag, og et nytt sett kan endre bildet.
> Pensum er dessuten i endring: settene fra 2017 og framover bygger på flere
> bøker enn de eldste, og 2024-settet er både helengelsk og klart mer formelt
> enn de foregående. Boka er kalibrert mot de nyeste settene.

### §S2 Hva den ene veiledningen belønner og straffer (bokas «Sensorblikket»)

Alle modellbesvarelser, sjangerkapitler og prøvefasiter refererer til disse
sju punktene ved innhold — aldri bare til «god besvarelse»:

1. **Egne eksempler er obligatoriske der de bes om.** Å utelate dem gir
   ufullstendig svar.
2. **Parvise begreper må ikke forveksles** — character/content, agens/actor,
   proto-agent/proto-patient. Character skal helst forklares som en *funksjon*
   fra ytringskontekst til proposisjon.
3. **Formelle svar har fasit, og vaghet straffes.** For sannhetsbetingelser og
   biimplikasjoner finnes utvetydige svar; «slark» er direkte feil. *Downward
   entailment* må vise reell innsikt, ikke gjenkjenning av ordene.
4. **Dybde slår gjenfortelling.** Huangs egenskaper skal navngis OG forklares;
   Horn-skalaen skal kobles til Q-prinsippet.
5. **Det som er drillet i undervisningen forventes «fyldig og riktig»** —
   veiledningen peker særlig ut situasjonstyper og tematiske roller/Dowty.
6. **Tidsbudsjett:** sensor forventer overskudd til å skrive mer enn to–tre
   setninger også på siste oppgave. Å sluntre unna slutten koster.
7. **Der det ikke finnes fasit** (typisk teori-om-mening-oppgaven) må kandidaten
   vise faglig innsikt og forklare hovedposisjonene, forankret i
   pensumlitteraturens framstilling.

### §S3 Eksamensformen (gjengis korrekt overalt i boka)

| Felt | Verdi |
|---|---|
| Form | Skriftlig **skoleeksamen, 4 timer** |
| Hjelpemidler | **Ingen** — hele eksamenen er uten hjelpemidler; ingen del 1/del 2 |
| Karakter | **A–F** (ingen terskeltall dokumentert — oppgi aldri noen) |
| Obligatorisk | Én innlevering må være godkjent på forhånd; den teller ikke på karakteren |
| Semester | Bare høst |
| Nyeste format (H2024) | **5 temablokker (Topics) à 3 spørsmål, velg 2 → 10 besvarelser**, kun engelsk, egen symbolliste, digital håndtegning tilbys |
| Eldre formater | 2012: velg 5 av 10, minst 2 pragmatikk + 2 semantikk · 2013–2015: 5 obligatoriske · 2017–2022 (Inspera): 8–9 spørsmål med a/b/c og rubrikken «det er mulig å bestå selv om man ikke svarer på alt» |

**Tidsbudsjett-modellen boka bruker konsekvent** (H2024-formatet): 240 minutter,
10 besvarelser.

- **20 min:** les hele settet, velg 2 av 3 i hver Topic, skriv stikkordsdisposisjon.
- **10 × ~20 min = 200 min:** skriving, én besvarelse om gangen.
- **20 min:** gjennomlesing og retting.

Der boka oppgir «~20 min per besvarelse» er det **skrivetid**; differansen opp
til 240 er settlesing, valg og gjennomlesing. Denne differansen skal forklares
eksplisitt der den først nevnes.

---

## §V SPRÅKLIG VARSOMHET (fagets etiske sannhetskontroll)

Lingvistikk beskriver levende språksamfunn. Brudd her er **faglige feil**, ikke
stilfeil — deskriptiv lingvistikk beskriver, den rangerer ikke.

**V1. `*` betyr «ikke generert av grammatikken», ikke «dårlig språk».** Der
markøren innføres (§N3b), skal det stå eksplisitt at den er et
grammatikalitetsutsagn om en bestemt varietet, ikke en dom over en språkbruker.

**V2. Verdiladet omtale av språkvarianter er FORBUDT og grep-sjekkes** (§FB).
Ingen varietet er «dårlig», «primitiv», «ukorrekt», «forfallen» eller «enklere».
Alle språk og alle dialekter har full uttrykkskraft. Der en varietet omtales,
omtales den **deskriptivt**: «i mange norske dialekter …», ikke «i enkelte
dialekter sier man feilaktig …».

**V3. Norske forhold skal være presise og oppdaterte.** Der boka nevner dem:

- **Samisk** er ikke ett språk. Skriv **nordsamisk**, **lulesamisk** eller
  **sørsamisk** når du mener ett av dem; «samiske språk» i flertall når du mener
  gruppa. Samiske språk er urfolksspråk i Norge, ikke minoritetsspråk i
  minoritetsspråkpakt-forstand.
- **Kvensk** er et eget språk med status som nasjonalt minoritetsspråk — ikke «en
  finsk dialekt».
- **Norsk tegnspråk** er et fullverdig språk med egen grammatikk — ikke «norsk på
  hendene», ikke «tegn-til-tale», ikke et hjelpemiddel.
- **Dialekter** i Norge har høy status og brukes i alle domener; ikke framstill
  dialektbruk som avvik fra en standard.
- **Bokmål og nynorsk** er to jamstilte skriftlige målformer, ikke «hovedspråk»
  og «sidemål» i normativ forstand.

Nevn disse forholdene **bare der de er faglig relevante** — dette er et
semantikk- og pragmatikkemne, ikke et sosiolingvistikkemne (§M). Feil i en
sideopplysning er like synlig som feil i kjernestoffet.

**V4. Eksempelsetninger skal ikke reprodusere skadelige mønstre.** Arkivets mest
resirkulerte presupposisjonsoppgave er bygget rundt vold i nære relasjoner
(«Har du sluttet å slå …?»). Den skal **ikke** gjenskapes, verken ordrett eller
med byttet offer. Presupposisjonstriggeren *slutte å* fungerer like godt med
nøytralt innhold: å slutte å drikke kaffe om morgenen, å slutte å sykle til
jobben, å slutte å abonnere på noe. Det samme gjelder eksempler som gjør
stereotypier om kjønn, etnisitet, religion, funksjonsevne eller nasjonalitet til
premiss. **Eksempler skal være uinteressante på alle andre måter enn den
lingvistiske** — det er også god pedagogikk, fordi innholdet ikke skal stjele
oppmerksomhet fra strukturen.

**V5. Ingen påstand om et språk uten dekning.** Skriv aldri «i japansk …» eller
«mange språk har …» med mindre påstanden er standard pensumkunnskap. Er du i
tvil, bruk et norsk eller engelsk eksempel i stedet. **Oppdiktede
språkeksempler fra virkelige språk er en faglig feil**, og en glossering av en
setning du ikke er sikker på er verre enn ingen glossering.

---

## §MB MODELLBESVARELSER (ærlighet, nivå og variasjon)

**MB1. Ærlig merking — ufravikelig.** Hver modellbesvarelse innledes med én
linje: **«Nyskrevet modellbesvarelse — skrevet av oss for denne boka. LING1100
har ingen publiserte løsningsforslag, så dette er ikke en ekte
kandidatbesvarelse.»** Ordet «studentbesvarelse» er forbudt i bokinnholdet
(grep-sjekkes, §FB).

**MB2. Meta-fasit er FORBUDT.** «En A-besvarelse ville her ha forklart
proto-rollene …» er en regibemerkning, ikke en fasit. **Forklaringen skal
skrives UT** — kort, presist, ferdig. Grep-sjekkes: `en A-besvarelse ville` og
`ville ha drøftet` = 0 treff.

Margnotater er ønsket, men skal peke på tekst som faktisk står der:
`> Margnotat: her er negasjonstesten faktisk gjennomført på setningen, ikke bare
navngitt — det er dette skillet fasit-svaret hviler på.`

**MB3. Nivåfordeling i boka (bindende):**

| Kapittel | Nivåer som SKAL finnes |
|---|---|
| 11.4 (formell: situasjonstyper + roller) | **Fullstendig svar** + kommentert **«slark»-svar** |
| 11.5 (redegjørende: talehandlinger + implikatur) | **Fullstendig svar** + kommentert **ufullstendig svar** + **midtnivå-besvarelse** |
| 0.2 (det doble håndverket) | samme korte oppgave besvart på tre nivåer — tynt, midt på treet og fullstendig — i begge moduser |

**Midtnivå-besvarelsen i 11.5** er et README-krav: realistisk
førsteårsspråk, litt rotete disposisjon, ett begrep upresist, men faglig god —
med margnotater om hva som er **BRA NOK** og de 2–3 grepene som skiller den fra
et fullstendig svar. Leseren trenger et realistisk sammenligningspunkt, ikke bare
et polert toppsvar og en karikatur.

**MB4. Boksen skal VÆRE det den heter.** En «slark»-versjon som i praksis er et
godt svar er en byggefeil. Slark-versjonen skal faktisk demonstrere feilene:
kategorinavn uten test, proto-roller eksemplifisert men ikke definert, egenskaper
listet uten forklaring, ingen egne eksempler.

**MB5. Konklusjonsvariasjon.** Der en modellbesvarelse har et drøftende ledd,
skal ikke alle lande på samme forbeholdne kompromissform. **Kap. 11.5 skal
konkludere skarpt** i sitt drøftende ledd (og likevel være toppnivå), med
margnotat: «Forbehold er et verktøy, ikke obligatorisk garnityr.»

**MB6. Karakter-realisme.** Del 0 sier eksplisitt at **C er en god og vanlig
karakter**, særlig i et innføringsemne i første studieår. Formuleringen
**«Prioritet: perfekt» er FORBUDT** (grep-sjekkes) — skjelettets prioritetsklasser
oversettes slik: *perfekt* → **høyeste prioritet**, *kunne* → **kunne**,
*kjenne* → **bør kjenne til**. «Gapet opp» rammes inn som **oppgraderingsmeny**,
aldri som mangelliste.

---

## §K KVOTEKONTRAKTEN (AUTORITATIV — fra skjelettets summeringskontroll)

**Bindende total: quiz 681 · flashcards 678.** Verifisert 26. juli 2026: alle
deltotaler og totalene summerer. Kvotene er **minimum per kapittel** —
overskyting er lov, underskyting er kontraktsbrudd.

| Del | Kapitler | Quiz | Flashcards | Prøver | Kapittelminutter |
|---|---|---|---|---|---|
| 0 | 0.1–0.2 | 26 | 24 | — (metadel) | 90 |
| 1 | 1.1–1.3 | 52 | 62 | 4 (120) | 145 |
| 2 | 2.1–2.4 | 70 | 74 | 4 (120) | 220 |
| 3 | 3.1–3.5 | 92 | 96 | 4 (120) | 295 |
| 4 | 4.1–4.4 | 66 | 66 | 4 (120) | 245 |
| 5 | 5.1–5.3 | 54 | 52 | 4 (120) | 180 |
| 6 | 6.1–6.3 | 58 | 58 | 4 (120) | 180 |
| 7 | 7.1–7.2 | 30 | 34 | 4 (120) | 100 |
| 8 | 8.1–8.3 | 54 | 56 | 4 (120) | 165 |
| 9 | 9.1–9.3 | 60 | 58 | 4 (120) | 165 |
| 10 | 10.1–10.3 | 48 | 50 | 4 (120) | 150 |
| 11 | 11.1–11.8 | 71 | 48 | — (11.6–11.8 ER prøvene) | 445 |
| **Sum** | **43 kap. + 10 prøvekap.** | **681 ✓ (≥500)** | **678 ✓ (≥500)** | **40 prøver (1 200 min)** | **2 380 min** |

Per kapittel (quiz · flashcards) — **minimum, aldri under**:

| Kap. | Q · F | Kap. | Q · F | Kap. | Q · F |
|---|---|---|---|---|---|
| 0.1 | 12 · 12 | 3.4 | 18 · 22 | 7.2 | 16 · 18 |
| 0.2 | 14 · 12 | 3.5 | 16 · 6 | 8.1 | 20 · 24 |
| 1.1 | 18 · 20 | 4.1 | 18 · 22 | 8.2 | 18 · 24 |
| 1.2 | 18 · 22 | 4.2 | 14 · 16 | 8.3 | 16 · 8 |
| 1.3 | 16 · 20 | 4.3 | 18 · 22 | 9.1 | 22 · 26 |
| 2.1 | 18 · 24 | 4.4 | 16 · 6 | 9.2 | 20 · 24 |
| 2.2 | 20 · 24 | 5.1 | 18 · 22 | 9.3 | 18 · 8 |
| 2.3 | 16 · 20 | 5.2 | 20 · 24 | 10.1 | 18 · 22 |
| 2.4 | 16 · 6 | 5.3 | 16 · 6 | 10.2 | 16 · 20 |
| 3.1 | 20 · 22 | 6.1 | 20 · 26 | 10.3 | 14 · 8 |
| 3.2 | 18 · 22 | 6.2 | 20 · 24 | 11.1 | 16 · 14 |
| 3.3 | 20 · 24 | 6.3 | 18 · 8 | 11.2 | 14 · 12 |
| 7.1 | 14 · 16 | 11.3 | 14 · 10 | 11.4 | 6 · 6 |
| 11.5 | 6 · 6 | 11.6 | 5 · 0 | 11.7 | 5 · 0 |
| 11.8 | 5 · 0 | | | | |

Flashcards telles som **toppnivå `definition`-blokker med `title`**.
Prøvekapitler har ingen kvote.

### §K1 Bokas tidsbudsjett (etterregnet — bruk disse tallene i Del 0)

- **43 innholdskapitler: 2 380 minutter** ≈ **39,7 timer** lesetid.
- **10 prøvekapitler à 120 min: 1 200 minutter** ≈ 20 timer.
- **Boka totalt: 3 580 minutter ≈ 60 timer.**

> **NB — dokumentert avvik fra skjelettet.** Skjelettets §1-tabell oppgir
> «~2 190 min ≈ 36,5 timer». Summen av de 43 kapitlenes egne
> `estimatedMinutes` er **2 380**. Det etterregnede tallet gjelder. «Lite
> tid?»-boksen og ukeplanene i kap. 0.1 SKAL bygge på 2 380 / 3 580, ellers
> lover boka en plan som ikke går opp.

### §K2 Quiz-filformat

`src/lib/data/quiz-staging/ling1100-<del>-<nr>.quiz.json`:

```json
[{ "question": "…", "options": ["riktig", "distraktor", "distraktor", "distraktor"], "explanation": "…" }]
```

Nøyaktig **4 alternativer**, `options[0]` **ALLTID** riktig (runtime stokker
rekkefølgen — derfor skal `explanation` ALDRI si «alternativ a)», men gjenta
innholdet: «Riktig er at presupposisjonen overlever negasjonen …»). Ingen
duplikate alternativer. `explanation` på 2–4 setninger sier hvorfor fasiten er
riktig OG hvilken felle hver nære distraktor tester.

**Distraktor-kalibrering** — nabobegrep-distraktorer fra skjelettets
quiz-profil, aldri tullesvar: character/content · agens/actor ·
proto-agent/proto-patient · telisk/atelisk · accomplishment/achievement ·
epistemisk/deontisk · konstativ/performativ · entailment/presupposisjon/
implikatur · inklusiv/eksklusiv disjunksjon · homonymi/polysemi ·
konvensjonell/konversasjonell · sense/reference · komplementær/graderbar
antonymi · konvers/revers. I tillegg: fasit-spørsmål (én rad i en
sannhetstabell, én rolletilordning, én situasjonstypeklasse, én predikatlogisk
oversettelse, ett medlemskapsspørsmål $\langle a,b\rangle\in F(R)$),
«hvem hevder hva»-koblinger (Grice, Austin, Searle, Dowty, Kaplan, Horn,
Vendler, Jackendoff, Sperber & Wilson, Russell/Strawson, Berlin & Kay) og
prosedyre-rekkefølge (trinnene i modell-evaluering, i entailment-testen, i
tre-diagrammet).

**INGEN LENGDE-TELL:** fasiten skal IKKE være det lengste eller mest detaljerte
alternativet. Alle fire alternativer skal ha jevn lengde og presisjonsgrad — en
leser som «velger det lengste» skal treffe ~25 %, ikke 77 %. Verifiseres med
`node scripts/hoyskolebok/quiz-lengdesjekk.mjs` etter wiring.

**Distraktorer straffer aldri grundig lesing:** en distraktor gjengir ALDRI
bokas egen presisering som «galt» svar. Ligger en distraktor nær sannheten,
forklarer `explanation` eksplisitt hvorfor den ikke holder.

---

## §C SJANGERKODER OG FEILKODER (introduseres i kap. 0.1, glosses per kapittel)

### §C1 Formelle sjangre (fasit) — fra skjelettets §2.1

**F1** sannhetstabeller og sannhetsbetingelser · **F2** predikatlogikk-
oversettelse og modellteoretisk evaluering (ny 2024) · **F3** klassifisering
etter binære trekk (situasjonstyper: ±statisk, ±durativ/punktuell, ±telisk +
Vendler/Dowty-klasse) · **F4** identifiser tematiske roller og forklar
actor/proto-roller · **F5** tegn diagram (Jackendoff-tre, Venn — ny 2024).

### §C2 Redegjørende sjangre

**A1** redegjør og eksemplifiser (arkivets vanligste form) · **A2** skill to
nærliggende begreper (avgjør-og-begrunn, med test) · **A3** sammenlign to
teorier eller teoretikere · **A4** fri drøfting (sjelden —
universalitet/relativitet).

**Skrivemåte i oppgavene:** hver oppgave er eksamensforankret med sjanger-tag i
ledende parentes: `(Eksamenssjanger F3 — klassifisering etter binære trekk.)`
Koden skrives fullt ut ved FØRSTE bruk per kapittel. **Vanskelighetsgrad skrives
ALDRI inn i `task`** — den ligger i `difficulty`.

### §C3 Feilkodene #1–#10 (glosses ved første bruk PER KAPITTEL)

| # | Feil | Forebygges i |
|---|---|---|
| #1 | Svare uten forklaring eller eksempel — bare kategorinavnet | 0.2, alle drillkapitler |
| #2 | Bytte om parvise begreper (character/content, agens/actor, proto-roller, telisk/atelisk, epistemisk/deontisk, konstativ/performativ) | hvert kapittel med et par (§F4) |
| #3 | Blande de tre slutningstypene — entailment, presupposisjon, implikatur | 3.2, 3.3, 3.4 |
| #4 | Vaghet («slark») i formelle svar | 3.1, 3.5, 4.1, 4.3, 4.4 |
| #5 | Gjenfortelle i stedet for å forklare mekanismen | 6.2, 8.2, 10.1 |
| #6 | Behandle situasjonstyper og roller overfladisk der sensor forventer fyldighet | 5.1–5.3, 6.1–6.3 |
| #7 | Hoppe over den formelle 2024-verktøykassa (predikatlogikk, modell, tre) | 0.1, Del 4, 7.2 |
| #8 | Ignorere tempus når det etterspørres sammen med situasjonstype | 5.2, 5.3 |
| #9 | Svare på feil antall valgoppgaver (nøyaktig 2 av 3 per Topic) | 0.1, 11.6–11.8 |
| #10 | Utelate egne eksempler i talehandlings- og implikaturoppgaver | 8.1–8.3, 9.1–9.3 |

**Registeret har nøyaktig ti koder.** Ikke innfør en ellevte noe sted.

---

## §L LESERKRAV (ufravikelig — full ordlyd i README «Leserkrav»; SKAL i førsteutkastet)

- **Kun eksamensrelevant stoff.** «Bør kjenne til»-stoffet (universalitet/
  relativitet og Berlin & Kay i 2.3; informasjonsstruktur i 10.2) plasseres SIST
  i sitt kapittel og merkes eksplisitt med sin lave frekvens.
- **Godt, flytende norsk (UFRAVIKELIG).** Hele setninger, korte avsnitt (2–4
  setninger), aktiv «du»-form. Telegramstil er FORBUDT: «Type: achievement.
  Test: punktuell.» skal være «Setningen er en *achievement*, fordi den er
  telisk og punktuell — den tåler ikke ‘holde på med’-testen.» Konkret norsk
  knagg før fagtermen; presisjon vinner ved tvil.
- **Ingen uforklart sjargong.** Fagstoffet skal være forståelig for en student
  som aldri har hatt lingvistikk. Sjangerkodene F1–F5/A1–A4, feilkodene #1–#10,
  all karaktersjargong og alle insider-termer (*entailment*, *flouting*,
  *character*, *proto-role*, *hviss*, *aksjonsart*, `[±TELISK]`, `*`, `⟨ ⟩`)
  forklares i klarspråk ved FØRSTE bruk **per kapittel**.
- **Hver oppgave synlig eksamensforankret** (§C2).
- **Deloppgaver på egen linje med fet merking:** `…\n\n**a)** …\n**b)** …`.
  ALDRI a) b) c) bak hverandre i løpende tekst. Små bokstaver, aldri A)/[A].
  Ikke bruk `subTasks`.
- **Inline-nummerering** `(1) … (2) … (3) …` med tre eller flere påfølgende
  settes på egne linjer. **NB:** dette kolliderer visuelt med
  eksempelnummereringen i §N3 — bruk derfor `(i)`, `(ii)`, `(iii)` for
  oppregninger i prosa i kapitler som også har nummererte eksempelsett, så
  `(1)`, `(2)` alltid betyr «eksempel».
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. X.Y](/ling1100/ling1100-X-Y)`. Død «se kapittel
  X.Y»-tekst er FORBUDT. Aldri lenker i `title`-felt.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter HVER prøvefasit (§F5/§A5).
  I hvert teori-/temakapittel: minst én **lett innstegsoppgave** tidlig
  (`difficulty: "lett"`, ren gjengivelse eller ett enkelt tilfelle, vennlig
  fasit) før første fulle eksamenssjanger.
- **Hverdagsanker + verdens-caser:** abstrakte kjernetemaer åpner med et konkret
  anker FØR apparatet. Eksempler er verdens-caser, aldri metaeksempler av typen
  «en medstudent skriver …».
- **Difficulty-spredning + kald bank:** boka skal ha genuint krevende oppgaver
  merket `difficulty: "vanskelig"` (og «(krevende)» i oppgaveteksten der det
  hjelper), ikke alt på middels. Én merket **kald bank** i kap. 11.2 (§5.6).
- **Hint på alle oppgaver:** hvert `exercise` har utfylte `hints`. Første hint =
  hvilken test, hvilket begrep eller hvilket første grep oppgaven krever («Start
  med å negere setningen — hva skjer med bakgrunnsantakelsen?») — **ALDRI
  konklusjonen**. Eneste unntak er den kalde banken.
- **Stokket flervalg og varierte fasit-mønstre:** gjelder ALLE ensartede
  fasitlister, også «hvilken feil begår kandidaten»-drillen i 11.3 og
  riktig/galt-batterier — aldri «alle a», aldri «alle er feller».
- **Signal-/hintbokser ETTER oppgaven:** en boks som varsler hva en drilloppgave
  tester («her ligger presupposisjon/entailment-fella») plasseres ETTER
  oppgaven, aldri foran.
- **Frekvenstall = telte belegg:** hver «N av 12 sett»-påstand skal stemme
  EKSAKT med skjelettets belegg-liste. Nevneren er alltid 12 (§S1).
- **Begrepsbank = oppslagsverk:** hvert pensumkart og hver stor begrepsbank
  åpner med standardnotisen: «Begrepsbanken er flashcard-/repetisjonsstoff — den
  gjentar det du nettopp har lest. Hopp trygt over ved førstegangslesing;
  tidsanslaget for kapitlet gjelder kjernestoffet.» `definition`-blokker slettes
  ALDRI for å «rydde» — de er flashcard-kilden.
- **Øktmerking:** alle kapitler med `estimatedMinutes > 45` — det vil si alle
  unntatt 0.1, 1.1, 2.3 og 7.1 — har tidsanslag per løkke («Løkke 3 —
  negasjonstesten (~15 min)») eller eksplisitte «— naturlig pausepunkt —»-
  markører. Lange modellbesvarelser har pausepunkt mellom hovedseksjonene.
- **Tidsbudsjett-konsistens:** «Lite tid?»-boksen sier eksplisitt at
  kapitlenes tidsanslag er **LESEtid**, og at den som skriver besvarelser for
  hånd bør legge på ca. ×1,5.

### §L1 Del 0-pakken (alt dette SKAL finnes i kap. 0.1, der ikke annet er sagt)

- **«Slik leser du denne boka»-orienteringsboks** (type `text` eller `tip` —
  **ALDRI `definition`**, det ville endret flashcard-kvoten) med: karakterskalaen
  A–F og hva de tre sjiktene faktisk mestrer (uten terskeltall, §S1), hva de to
  svarmodusene er, en kompakt liste over sjangerkodene F1–F5 og A1–A4 skrevet
  fullt ut, og at typiske feil har et samlet register (#1–#10) med eget kapittel
  (11.3).
- **«Lite tid?»-boks** (`tip`): hurtigrute for 3–5 dager (kapittelrekkefølge +
  timeanslag; prioriter de sju topptemaene, ikke de tre favorittene) og ukeplan
  bygget av summerte `estimatedMinutes` — **bruk 2 380 / 3 580 min** (§K1).
- **Kildenote for frekvens-empirien** — ordlyden i §S1, aldri utvidet.
- **Sjangerkort på ÉN side** som ER kortet: sjanger F1–F5/A1–A4 → én linjes
  oppskrift → typisk plassering og tidsbudsjett → vanligste feil. Ikke en
  lenkeliste.
- **Deltidsrute** 10–12 uker (~5 t/uke) med de tre øvingseksamenene fordelt på
  tre ulike helger — aldri stablet i siste uke. **Del 4 (den formelle
  verktøykassa) legges tidlig i ruta**, ikke sist.
- **«Lese mye, skrive lite»-boks:** legitim rute for lese-øveren (les oppgaven →
  formuler svaret mentalt i én setning → les modellbesvarelsen som sensor) +
  minimumsrådet: skriv minst ÉN øvingseksamen for hånd på tid — fire timer
  håndskrift er en fysisk ferdighet, og tegneoppgavene skal også gjøres for hånd.
- **Bokas samlede oppslagskort** — én `collapsible` med en ren, printbar tabell
  som kombinerer to ting: (a) **symbol → betydning → hjemkapittel** for hele
  eksamenens symbolliste, og (b) **teoretiker → begrep → hjemkapittel (lenke)**
  for alle 17 navnene i §N10. Den fulle prosedyrekatalogen bor i 11.1; kortet i
  0.1 er den glemsomme leserens gjenopptaksverktøy.
- **Valgstrategien** forklart som bokas strategiske hovedpoeng: nøyaktig 2 av 3
  per Topic; å svare på alle tre gir ikke ekstrapoeng og sløser tid (feil #9).
  Begge settformater (temablokk og eldre valgformat) vises som nyskrevne
  miniatyrer.
- **Hybrid-profilen** i tall: ~55–60 % formell fasit-løsning, ~35–40 %
  redegjørelse med egne eksempler, ~5 % fri drøfting — og at den formelle
  andelen stiger.

---

## §O OPPHAVSRETT (ufravikelig)

ALLE oppgaver, eksempelsetninger, sannhetstabeller, testsetninger,
predikatlogiske oversettelser, modeller, trær, dialoger og modellbesvarelser er
**NYSKREVNE** — egne setninger, egne navn, egne domener. Eksamenssjangrene er
malen, ALDRI originaloppgavene. Ingen formuleringer fra UiO-settene eller fra
H2022-veiledningen gjengis ordrett, heller ikke i omskrevet-nær form.
**Skjelettets mønstereksempler er selv omskrivninger og skal varieres videre**,
ikke kopieres ordrett inn som oppgaver.

Arkivets gjengangere er **sjangertrekk, ikke materiale**. Disse skal ikke
gjenbrukes med samme innhold:

| Arkivets gjenganger | Slik gjør du det i stedet |
|---|---|
| «Har du sluttet å slå …?» | annen *slutte å*-trigger, med nøytralt innhold (§V4) |
| presupposisjonstrigger-batteriet (julaften / flyttet tilbake / kongen / visste ikke at / hvis jeg var …) | eget batteri med samme fem triggertyper, helt andre setninger |
| rolle-setningene med bil og vase | eget setningspar med samme rolle–syntaks-mismatch |
| cappuccino-setningene for situasjonstyper | egne testsetninger, egne verb |
| «Sally traveled to India» for GO/PATH/TO | egen bevegelsessetning med samme konseptuelle struktur |
| antonymi-ordforrådet fra H17/H19/H21 | eget ordforråd som dekker alle fem typene |

**Pensumlitteraturen** (Saeed *Semantics*; Huang *Pragmatics*; Elbourne
*Meaning: A Slim Guide to Semantics*; Zimmermann & Sternefeld *Introduction to
Semantics*) **refereres og parafraseres** — forfatter, verk, begrep — aldri
siteres i lengde, aldri med sidetall. Standard fagbegreper og standardanalyser er
allmenneie. **Ingen oppdiktede referanser, verk eller årstall.** Teoretikere
utenfor lista i §N10 innføres ikke som pensumankere.

Boka fremstiller seg ALDRI som offisiell, godkjent eller UiO-tilknyttet, og
lover ALDRI et eksamensutfall. (Uavhengighetsdeklarasjonen vises automatisk av
plattformen for `level: 'Høyskole'` — se README «Juridiske deklarasjoner».)

---

## §FB FORBUDT-TERMER (grep-sjekkes — skal gi 0 treff)

Kjør ved ferdigmelding. `sjekk-bok.py` tar regexen som argument 2 og hopper over
`ling1100-0-1`, som er avgrensnings-/metakapitlet og skal beskrive
kildesituasjonen med egne ord:

```bash
python3 scripts/hoyskolebok/sjekk-bok.py ling1100 \
  "Prioritet: perfekt|en A-besvarelse ville|ville ha drøftet|sensorveiledninger\b|sensorveiledningene|studentbesvarelse|offisiell fasit|offisielle løsningsforslag|løsningsforslag fra UiO|UiOs fasit|Figur i ord|dårlig norsk|dårlig språk|primitivt språk|primitive språk|ukorrekt dialekt|språklig forfall|\bs\. ?\d+"
```

Begrunnelse per term:

- **`Prioritet: perfekt`** — plattformforbud (karakter-realisme, §MB6).
- **meta-fasit-uttrykkene** — forklaringen skal skrives ut (§MB2).
- **flertallsformene av «sensorveiledning»** — det finnes **én** (§S1).
- **«studentbesvarelse»** — alle modellbesvarelser er nyskrevne (§MB1).
- **fasit-/løsningsforslagspåstandene** — ingen finnes for dette emnet.
- **«Figur i ord»** — figurer skal være ekte SVG (§G1).
- **verdiladet omtale av språkvarianter** — faglig feil (§V2). Meta-omtalen av
  regelen hører hjemme i kap. 0.1, som porten unntar.
- **`\bs\. ?\d+`** — sidetall, som ikke er attestert noe sted i arkivet.

### §FB1 Påkrevd terminologi (skal FINNES i boka)

«entailment» · «downward entailment» · «constancy under negation» ·
«kansellerbarhet» · «flouting» · «hedging» · «hell-vilkår» · «proto-agent» ·
«proto-patient» · «argumentseleksjonsprinsippet» · «semelfaktiv» ·
«tolkningsfunksjon» · «ordnede par» · «kvantorløfting» · «character» ·
«content» · «Horn-skala» · «kompositsjonalitetsprinsippet» · «hviss».

### §FB2 Ekstra deterministiske kontroller (0 avvik)

```bash
python3 - <<'PY'
import json, glob, re, sys

def flat(n):
    if isinstance(n, str): yield n
    elif isinstance(n, dict):
        for v in n.values(): yield from flat(v)
    elif isinstance(n, list):
        for v in n: yield from flat(v)

avvik = 0
IPA_LATEX = re.compile(r"\\textipa|\\textipa\{|\\ng\b|\\v\{s\}|\\textesh")
VERIF     = re.compile(r"\(verifiser\)", re.I)
# rå asterisk i starten av en markdown-linje (ugrammatikalitet uten escaping),
# utenfor kodeblokker: fanges konservativt som «\n*<stor bokstav>»
RAA_STJ   = re.compile(r"\n\*[A-ZÆØÅ]")
RAA_HASH  = re.compile(r"\n#[A-ZÆØÅa-zæøå]")

for f in sorted(glob.glob("src/lib/data/chapters/ling1100-*.json")
                + glob.glob("src/lib/data/quiz-staging/ling1100-*.json")):
    d = json.load(open(f, encoding="utf-8"))
    for t in flat(d):
        for navn, rx in (("IPA-i-LaTeX", IPA_LATEX), ("(verifiser)", VERIF),
                         ("rå *-markør", RAA_STJ), ("rå #-markør", RAA_HASH)):
            if rx.search(t):
                print(navn, f, repr(t[:120])); avvik += 1
print("avvik:", avvik)
sys.exit(1 if avvik else 0)
PY
```

> **⚠️ ALDRI `grep -o` med `.{0,N}`-kontekst mot kapittelfilene.** JSON-filene er
> kompakt tekst på få, svært lange linjer; kombinasjonen gir kvadratisk arbeid og
> sprengte buffere (17 GB RAM på byggemaskinen 25. juli 2026, som har 8 GB
> fysisk minne). `grep -c` og `grep -l` UTEN `-o` og uten `.{0,N}` er trygt.
> Trenger du kontekst, bruk python-sjekkeren over.

---

## §X KRYSSBOK-LENKER (verifisert mot disk 26. juli 2026 — alle målfilene finnes)

LING1100 er fabrikkens **første lingvistikkfag**, så det finnes ingen bygd
søskenbok med lingvistisk forkunnskapsstoff. Disse fem er verifisert, og de er
de eneste tillatte:

| Kapittel | Lenke | Hva leseren henter der |
|---|---|---|
| 3.1 | `[Formell og uformell logikk](/filosofi-etikk/fil-7-2)` | proposisjonslogikk og logiske former, som mykt tilløp før sannhetstabellene |
| 3.2 | `[Argumentasjon og gyldighet](/filosofi-etikk/fil-7-1)` | premiss, konklusjon og gyldighet — bakgrunn for entailment |
| 3.4, 4.3 | `[Mengdelære](/1t/1t-1-7)` | mengdenotasjon, $\in$, snitt og union |
| 1.2 | `[Språkfilosofi](/filosofi-etikk/fil-8-3)` | forholdet mellom språk, mening og virkelighet — kontekst for mening-teoriene |
| 0.2, 11.2 | `[Sjanger — drøftingsdelen (c/d)](/exphil03/exphil03-4-3)` | beslektet redegjørelses-/drøftingshåndverk (presiser at kravene der er exphil-krav, ikke LING1100s) |

**Ingen andre kryssbok-lenker.** LING1100 forutsetter ingen matematikk ut over
elementær mengdelære, ingen programmering og ingen metode. Vil du legge til en
lenke som ikke står i tabellen, kjør `ls src/lib/data/chapters/<id>.json` først —
`sjekk-bok.py` avviser døde lenker, og en død lenke i en live bok er en synlig
feil for leseren. **Merk at `fil-*`-kapitlene har `courseId: filosofi-etikk`** —
URL-en er `/filosofi-etikk/fil-7-2`, ikke `/fil/…`.

Interne lenker skrives `[kap. 3.2](/ling1100/ling1100-3-2)` og skal kun peke
på kapitler som er bygget når boka gates. Bygg i skjelettets rekkefølge (§6 i
skjelettet): Del 0 → 1 → 2 → 3 → **4** → 5 → 6 → 7 → 8 → 9 → 10 → 11 → prøver.
Merk at 3.1 må stå ferdig FØR 4.1, og at 3.4 (mengdelære) må stå ferdig FØR 4.3.

---

## §T TEKNISKE FELLER (les før første `json.dump`)

1. **JSON-gyldighet.** Bruk `json.dump`. Faget er fullt av enkle anførselstegn i
   den tospråklige terminologien — én uescapet anførsel blokkerer hele prebuild
   for hele plattformen.
2. **LaTeX = dobbel backslash i JSON.** I python-kilden skriver du
   `"$\\forall x(A(x)\\rightarrow B(x))$"` (eller `r"$\forall x…$"`); `json.dump`
   skriver da riktig escaping til fila. Havner det bare én backslash i
   JSON-fila, blir `\f` et kontrolltegn og rendrer som søppel — uten at KaTeX
   nødvendigvis klager.
3. **Bart `$` er forbudt** utenfor matte — skriv `\$`. Oddetall `$` i samme
   tekstfelt = avkuttet formel = rå LaTeX synlig for leseren
   (`sjekk-latex.py` fanger det).
4. **`*` og `#` i eksempelsetninger** — se §N3c. Rå `*` i starten av en linje
   kursiverer resten; rå `#` lager en overskrift. Bruk ```` ```text ````-blokk
   eller escape (`\*`, `\#`).
5. **IPA aldri i LaTeX** — se §N4 punkt 2. Direkte unicode, i backticks når den
   står inline.
6. **Hardt linjebrutt prosa** — se §N9. Ett avsnitt = én lang linje.
7. **`chapterNumber` alltid del-basert** («5.2»), aldri lineær («22»).
   Prøvekapitler: «5.P».
8. **Ingen tom `collapsible`.** Feltet heter `content` og skal inneholde
   blokker. En `text`-nøkkel eller `[]` rendrer som en tom boks.
9. **Unike blokk-id-er** innen kapitlet — porten sjekker.
10. **Flashcards kommer KUN fra toppnivå `definition` med `title`.** Flytter du
    en definisjon inn i en `collapsible` for å «rydde», forsvinner kortet fra
    kvoten.
11. **`(verifiser)` som literal markør feller porten.** Skriv usikkerheten ut i
    klartekst i stedet (§F1d).
12. **«Symbol- og formelliste» kreves så snart kapitlet har ett `$…$`** — også i
    pragmatikk-kapitler (§N8, PORT-FELLE).
13. **Ingen `subTasks`, `answer`, `solutionVideo`, `allowsUpload`,
    `allowsCanvasDrawing`** i `exercise`.
14. **Gåseøyne og enkle anførselstegn inne i matte** («…», ‘…’) har ingen
    glyffer i KaTeX — hold dem utenfor `$…$`.
15. **Figurer må lastes opp til Storage** etter skriving, ellers 404 i prod
    (§G6) — også når fila ligger i repoet.

---

## §Q KVALITETSKRAV FØR FERDIGMELDING (per agent)

1. `python3 -c "import json; json.load(open('…'))"` på HVER fil du har skrevet.
2. **Kvotetelling** mot §K (toppnivå `definition`-blokker med `title` + antall
   quiz-spørsmål per fil) — minimum, aldri under.
3. **Forbudt-termer-grep = 0** (§FB) og **de fire ekstra kontrollene = 0 avvik**
   (§FB2).
4. **Kryssbok- og internlenker** peker på eksisterende filer (§X).
5. **Læringsløkke:** `content[]` veksler teori → eksempel → oppgave i løkker med
   `exercise`-blokker INLINE. Unntak: prøve-, modellbesvarelses- og
   øvingseksamenkapitler.
6. **Forkunnskapsdekning:** gå gjennom HVER `exercise` og bekreft at den kun
   hviler på stoff introdusert tidligere i kapitlet eller i en referert
   forkunnskap — ingen usett test, klasse, symbol eller teoretiker (§1).
7. **Nybegynner-inngang:** alle sjangerkoder (F1–F5, A1–A4), feilkoder (#1–#10),
   notasjonsmarkører (`*`, `#`, `[±TREKK]`, `⟨ ⟩`, `⟦ ⟧`) og karaktersjargong
   forklart ved første bruk PER KAPITTEL; ingen kald kode i `competenceGoals`
   eller i første tekstboks; Del 0 har hele §L1-pakken.
8. **Notasjonskontrakten §N:** symbollisten brukt konsistent; kollisjonstabellen
   (§N2) respektert; eksempelsett i ```` ```text ````-blokker med escapede
   markører der de står inline; glosser i tre linjer med kategorier i STORE
   BOKSTAVER; IPA som unicode; ingen hardt linjebrutt prosa.
9. **Figurkontrakten §G:** hvert figurløfte i §G4 innfridd med ekte SVG; hver
   oppgave som ber om en figur har figur i løsningen; ingen «Figur i ord»;
   `python3 scripts/hoyskolebok/sjekk-figurer.py ling1100` grønn;
   `npx tsx scripts/upload-media-storage.ts` kjørt etter nye figurer.
10. **Fasitkontrakten §F:** hver sannhetstabell, entailment-påstand,
    predikatlogisk oversettelse og modell-evaluering **etterregnet med python**;
    hver klassifiseringsfasit begrunnet med testen; «Fasit — ikke slark»- og
    «Ikke bland …»-warnings på plass der §F3/§F4 krever dem.
11. **Redegjørelseskontrakten §A:** hver A-oppgave svarer i sjangeren
    instruksjonsverbet krever; egne eksempler faktisk skrevet ut; de fire
    mekanismene i §A3 forklart, ikke bare illustrert.
12. **Prosaport:** ingen hardt linjebrutt brødtekst. Kjør:

```bash
python3 - <<'PY'
import json, glob, re, sys
def flat(n):
    if isinstance(n, str): yield n
    elif isinstance(n, dict):
        for v in n.values(): yield from flat(v)
    elif isinstance(n, list):
        for v in n: yield from flat(v)
avvik = 0
for f in sorted(glob.glob("src/lib/data/chapters/ling1100-*.json")):
    for t in flat(json.load(open(f, encoding="utf-8"))):
        if "```" in t:      # kodeblokker skal ha enkle linjeskift
            continue
        # tre eller flere korte linjer på rad = hardt linjebrudd
        linjer = [l for l in t.split("\n")]
        run = 0
        for l in linjer:
            s = l.strip()
            if s and not s.startswith(("|", "-", "*", ">", "☐", "#")) and 25 < len(s) < 78:
                run += 1
                if run >= 3:
                    print("HARDT LINJEBRUDD", f, repr(t[:100])); avvik += 1; break
            else:
                run = 0
print("avvik:", avvik)
sys.exit(1 if avvik else 0)
PY
```

13. **Modellbesvarelser §MB:** ærlig merket som nyskrevne; slark-versjonen er
    faktisk tynn; midtnivå-besvarelsen finnes i 11.5; 11.5 konkluderer skarpt i
    sitt drøftende ledd; meta-fasit-grep = 0.
14. **Språklig varsomhet §V:** ingen verdiladet omtale av språkvarianter; norske
    forhold presist gjengitt; ingen eksempler som reproduserer arkivets
    voldseksempel eller andre skadelige mønstre; ingen udekkede påstander om
    fremmede språk.
15. **Kildepåstander §S1:** nevneren er 12 overalt; sensorveiledningen omtalt i
    entall; ingen karaktergrenser; ingen sidetall; kildenoten i 0.1 følger malen
    i sak.
16. **Prøve-flervalg:** fasitmønsteret varierer (aldri «alle a»); prøve-tipen
    sier hvor flervalget bor; selvdiagnose (☐) etter hver fasit.
17. **hints** utfylt på alle `exercise` unntatt den merkede kalde banken i 11.2;
    første hint røper aldri konklusjonen.
18. **Øktmerking:** kapitler > 45 min har løkke-tidsanslag eller pausepunkter;
    prøvekapitlene deklarerer «fire prøver à ~30 min» + deling over flere
    kvelder; 11.6–11.8 deklarerer «ett sett om gangen».
19. **Ingen tom `collapsible`**; ingen duplikate blokk-id-er; kap-referanser i
    fasiter og forkunnskaper er markdown-lenker.
20. **Juridiske deklarasjoner:** innholdet fremstiller seg ALDRI som offisielt
    eller UiO-tilknyttet, lover aldri eksamensutfall, og all omtale av
    kildegrunnlaget følger §S1 i sak.
21. **Porter og build grønne før ferdigmelding:**

```bash
python3 scripts/hoyskolebok/status-bok.py ling1100
python3 scripts/hoyskolebok/sjekk-latex.py ling1100
python3 scripts/hoyskolebok/sjekk-figurer.py ling1100
python3 scripts/hoyskolebok/sjekk-fasitfordeling.py ling1100
python3 scripts/hoyskolebok/sjekk-bok.py ling1100 "<forbudt-regex fra §FB>"
node scripts/hoyskolebok/quiz-lengdesjekk.mjs ling1100
npm run build
```

22. **Rendering verifisert:** prod-server (`PORT=3057 npm run start`) + curl mot
    institusjonssiden, bokforsiden og minst fem ruter — ett formelt teorikapittel
    (3.1), ett drillkapittel (4.4), ett pragmatikk-kapittel (9.2), ett
    prøvekapittel (7.P) og ett kapittel med figur (7.2) — 200 og innholdssjekk,
    inkludert at SVG-ene faktisk lastes.
