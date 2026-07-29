# Byggekontrakt: IN2010 Algoritmer og datastrukturer (UiO) — teknisk kontrakt for kapittelforfattere

Gjelder ALLE forfatter-agenter som bygger kapitler til `in2010`. Faglig innhold
styres av `SKJELETT.md` (identitetsseksjon §1 + per-kapittel-DNA i §4) — les ditt
kapittels avsnitt der nøye, og `EKSAMENSANALYSE.md` ved behov. Denne kontrakten
definerer format og krav, og er bindende der den er mer presis enn skjelettet.
Arketype: **DNA-regnefag** (`DNA-regnefag.md`), undertype **algoritmefag**:
leseren skal kunne (i) **håndkjøre** en datastruktur steg for steg og oppgi
sluttilstanden feilfritt, (ii) **skrive presis pseudokode** for graf-, tre- og
hashing-algoritmer med oppgitt kjøretid, og (iii) svare **sikkert** på
sant/usant-fakta under et antigjettings-regime som straffer usikkerhet til null.

**Nærmeste slektninger er `in1900/BYGGEKONTRAKT.md` og
`tdt4110/BYGGEKONTRAKT.md`** (UiO/NTNU-kodefag). Tre forskjeller gjennomsyrer
hele dokumentet:

1. **Boka inneholder ingen Python.** Eksamensspråket er **generisk pseudokode**,
   ikke Java og ikke Python. Alle algoritmer skrives i ```text-gjerder etter
   §P1. ```python er FORBUDT i kapittelfilene — Python brukes kun som
   forfatterens verifikasjonsverktøy i scratchpad (§H2).
2. **Håndkjøring er en egen ferdighet med egen kontrakt** (§H). Sporingstavler
   for BST-innsetting, heap-sift, linear probing, AVL-rotasjoner, Dijkstra og
   Kahn genereres **programmatisk fra faktisk kjøring** — aldri for hånd.
3. **Rekursjon er PENSUM** (§R). Tre-algoritmene i Del 4 og DFS i Del 5 ER
   rekursive. `sjekk-kode.py` er allerede emne-gatet for `in2010` i
   `REKURSJON_ER_PENSUM`, så porten flagger dem ikke.

---

## §0 PLATTFORM OG LENKER — hva du kan stole på

Plattformen **støtter kodeblokker**. `LatexRenderer`
(`src/components/textbook/latex-renderer.tsx`) plukker ut både
trippel-backtick-gjerder med språktagg og inline-kode (`` `…` ``) **før** matten
og markdown-transformene, rendrer gjerder som `<pre><code class="language-x">`
med `escapeHtml`, og setter blokkene tilbake helt til slutt (fikset av
byggeleder 25. juli 2026, commit `274ce8af` + oppfølger på main).

**Garantien:** alt som står i et ```-gjerde eller i backticks er urørt av matte-
og markdown-kjeden. Innrykk, TAB, `$`, `*`, `_` og linjestartende `#` bevares.
Konkret betyr det at pseudokode med `A[2*i + 1]`, `h(k) = k mod N`,
`(i + 1) mod N` og `v.left` rendres som skrevet — ingen fet av `**`, ingen
kollapset innrykk, ingen løse backticks.

**Verifikasjon i sluttporten (prod-curl, jf. BYGGEPLAN-MAL steg 4):** hent en
kapittelrute med pseudokode og sjekk at HTML-en inneholder `<pre` og at ingen
algoritmenavn er blitt kursivert.

### Interne lenker — `/bok`-prefikset er BORTE (27. juli 2026)

Alle interne kapittellenker skrives

```
[kap. 4.2](/in2010/in2010-4-2)
```

Formen `](/bok/in2010/…)` er **FORBUDT** og gir død lenke. Prefikset er fjernet
fra plattformen; `sjekk-bok.py` fanger døde lenker, og forbudt-term-grepet
(§ «Forbudt-termer») inneholder `/bok/`. Kryssbok-lenker skrives
`[tittel](/<courseId>/<id>)` og KUN til filer som finnes på disk (tabellen i
§ «Kryssbok-lenker»). Aldri lenke i et `title`-felt.

### KAPITTELTITLER TAS ORDRETT FRA `SKJELETT.md` — aldri fra en byggeprompt

**Dette er en hard regel med historikk:** i tidligere bøker fikk fire kapitler
feil tittel fordi byggelederen forkortet tittelen i agentens prompt, og agenten
skrev prompt-varianten inn i `title`. Tittelen er en del av bokas metadata,
vises i navigasjonen og i PDF-en, og må stemme med skjelettet og wiringen.

- `title` = strengen etter kolon i skjelettets `#### Kapittel X.Y: …`, **ordrett**
  — samme tankestrek (`—`, ikke `-`), samme parenteser, samme store/små
  bokstaver, samme «DRILL — »-prefiks.
- Står det en annen (kortere) tittel i byggeprompten din: **skjelettet vinner**.
  Meld avviket til byggeleder, ikke velg selv.
- Fasiten er tabellen under. Kopiér derfra.

| id | number | title (ORDRETT) | min | type | Quiz · Fc | prerequisites |
|---|---|---|---|---|---|---|
| `in2010-0-1` | 0.1 | Eksamenskartet — slik testes IN2010 | 35 | eksamenskart | 14 · 14 | ingen |
| `in2010-1-1` | 1.1 | Asymptotisk notasjon — O (og kort Ω, Θ) | 45 | teori | 18 · 20 | ingen |
| `in2010-1-2` | 1.2 | Kjøretidsanalyse fra kode — løkketelling | 50 | teori | 18 · 14 | `in2010-1-1` |
| `in2010-1-3` | 1.3 | DRILL — Kode → O-notasjon | 80 | drill | 20 · 10 | `in2010-1-2` |
| `in2010-1-4` | 1.4 | Kjøretids- og teori-fakta — sant/usant og antigjettings-strategi | 55 | teori | 24 · 20 | `in2010-1-1` |
| `in2010-2-1` | 2.1 | Sammenligningsbaserte sorteringer og invarianter | 55 | teori | 16 · 24 | `in2010-1-2` |
| `in2010-2-2` | 2.2 | Effektive sorteringer og nedre grense | 50 | teori | 14 · 20 | `in2010-2-1` |
| `in2010-2-3` | 2.3 | Lineær sortering — bucket, counting og radix | 45 | teori | 16 · 18 | `in2010-2-2` |
| `in2010-2-4` | 2.4 | DRILL — Sorteringsegenskaper, invarianter og valg | 80 | drill | 20 · 12 | `in2010-2-3` |
| `in2010-3-1` | 3.1 | Hashtabeller og lukket hashing (linear probing) | 55 | teori | 16 · 20 | `in2010-1-2` |
| `in2010-3-2` | 3.2 | Load-faktor, rehashing og hashmap/-set som verktøy | 45 | teori | 14 · 16 | `in2010-3-1` |
| `in2010-3-3` | 3.3 | DRILL — Linear-probing håndkjøring og insert-pseudokode | 80 | drill | 18 · 10 | `in2010-3-2` |
| `in2010-3-4` | 3.4 | Søk i pseudokode — binærsøk, finn duplikat og finn par | 55 | teori | 14 · 16 | `in2010-3-2` |
| `in2010-4-1` | 4.1 | Binære søketrær (BST) | 50 | teori | 16 · 18 | `in2010-2-1` |
| `in2010-4-2` | 4.2 | Tre-algoritmer i pseudokode — beskjæring og lineær rekursjon | 55 | teori | 14 · 14 | `in2010-4-1` |
| `in2010-4-3` | 4.3 | Balanserte trær — AVL og rød-svart | 55 | teori | 14 · 18 | `in2010-4-1` |
| `in2010-4-4` | 4.4 | Heap og prioritetskø | 55 | teori | 16 · 24 | `in2010-2-2` |
| `in2010-4-5` | 4.5 | DRILL — Håndkjøring av heap og AVL | 85 | drill | 20 · 12 | `in2010-4-4` |
| `in2010-5-1` | 5.1 | Grafrepresentasjon og grunnbegreper | 45 | teori | 14 · 20 | `in2010-1-2` |
| `in2010-5-2` | 5.2 | BFS og DFS — traversering | 55 | teori | 16 · 18 | `in2010-5-1` |
| `in2010-5-3` | 5.3 | Komponenter, 2-fargelegging og sykeldeteksjon | 50 | teori | 14 · 14 | `in2010-5-2` |
| `in2010-5-4` | 5.4 | SCC og komponentgraf (kondensasjon) — UiO-signatur | 55 | teori | 14 · 14 | `in2010-5-2` |
| `in2010-5-5` | 5.5 | DRILL — Grafalgoritmer i pseudokode: mønstergjenkjenning | 90 | drill | 18 · 12 | `in2010-5-4` |
| `in2010-6-1` | 6.1 | Topologisk sortering og DAG-egenskaper | 45 | teori | 14 · 14 | `in2010-5-2` |
| `in2010-6-2` | 6.2 | Korteste vei — BFS, Dijkstra, DAG og reversert graf | 60 | teori | 16 · 22 | `in2010-6-1` |
| `in2010-6-3` | 6.3 | Minimale spenntrær — Prim, Kruskal, Borůvka | 50 | teori | 14 · 16 | `in2010-6-2` |
| `in2010-6-4` | 6.4 | Huffman-koding | 45 | teori | 12 · 12 | `in2010-4-4` |
| `in2010-6-5` | 6.5 | DRILL — Korteste-vei-matrisen og MST-modellering | 85 | drill | 18 · 10 | `in2010-6-4` |
| `in2010-7-1` | 7.1 | ADT-design — mediankø, bøttekø og trie | 50 | teori | 12 · 16 | `in2010-4-4` |
| `in2010-7-2` | 7.2 | Drøft to strategier | 45 | teori | 12 · 10 | `in2010-3-2` |
| `in2010-7-3` | 7.3 | NP-kompletthet — og hva som IKKE er IN2010-pensum | 55 | teori | 16 · 14 | `in2010-1-4` |
| `in2010-8-1` | 8.1 | DRILL — Del 2-strategi: velg lavest kjøretid (poengtrappen) og skriv presis pseudokode | 90 | drill | 14 · 10 | `in2010-7-3` |
| `in2010-8-2` | 8.2 | Øvingseksamen 1 — bredt ordinært sett (epoke 3) | 240 | øvingseksamen | 12 · 0 | `in2010-8-1` |
| `in2010-8-3` | 8.3 | Øvingseksamen 2 — håndkjørings- og hashing-tungt sett | 240 | øvingseksamen | 12 · 0 | `in2010-8-2` |
| `in2010-8-4` | 8.4 | Øvingseksamen 3 — grafmodellerings-tungt topp-sett | 240 | øvingseksamen | 12 · 0 | `in2010-8-3` |

Samme regel gjelder `description` (setningen fra skjelettets
**description**-felt), `estimatedMinutes` og `chapterNumber`.

---

## LÆRINGSLØKKE-KONTRAKT (ufravikelig byggekrav — produkteier 9. juli 2026)

Fra skjelettets topp, tatt inn her som bindende byggekrav:

- HVERT kapittels `content[]` struktureres som gjentatte små løkker
  **Teori → Eksempel → Oppgave**. `exercise`-blokker plasseres INLINE i
  `content[]` rett etter teorien/eksempelet de trener — ALDRI all teori øverst
  med oppgavene samlet nederst.
- I et algoritmefag er løkka konkret: `definition`/`theorem` som introduserer ÉN
  struktur/algoritme (med pseudokode-kontrakt) → `example` med en **kjørt
  sporingstavle** eller en gjennomarbeidet pseudokode-besvarelse → `exercise`
  som trener nøyaktig den operasjonen (håndkjøring, kode→O, eller «skriv
  algoritmen»). Deretter neste bit.
- **Ingen usett forkunnskap:** ingen oppgave får bruke en struktur, en algoritme,
  et kjøretidsuttrykk eller et mønster som ikke er introdusert tidligere i
  kapitlet (t.o.m. eksempelet rett foran) eller i et kapittel referert i
  Forkunnskaper-blokken. Skarpt eksempel: en oppgave i kap. 3.4 som løser «finn
  par» med en **prioritetskø** er brudd — heap kommer først i kap. 4.4. En
  oppgave i kap. 5.3 som bruker **topologisk sortering** er brudd — Kahn kommer
  i kap. 6.1. Flytt teoribiten tidligere, eller bytt verktøy i oppgaven.
- **Unntak:** prøvekapitlene (`in2010-<del>-prove`) og øvingseksamenene
  (kap. 8.2–8.4) følger sin egen arketype — komplett oppgavesett først,
  løsninger i collapsibles.
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer kun
  REKKEFØLGEN.

---

## Filplassering

Ett JSON-dokument per kapittel: `src/lib/data/chapters/<kapittel-id>.json`
(f.eks. `in2010-4-5.json`). IKKE rør `_registry.json`, `_all.json`,
`textbook-courses*.ts` eller `quiz-data*.ts` — wiring gjøres sentralt med
`scripts/hoyskolebok/wire-bok.py`. Generer JSON via python `json.dump`
(garantert gyldig escaping). Quiz til
`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`.

Boka består av **42 filer**: 35 kapitler (1 eksamenskart + 30 tema/drill + 1
strategidrill + 3 øvingseksamener) + 7 prøvekapitler (`in2010-1-prove` …
`in2010-7-prove`).

**Institusjon:** UiO finnes allerede i `src/app/trinn/hoyere/institusjoner.ts`
(sammen med ECON1310, JUS1111, IN1000, IN1020, IN1900). Ingen ny
institusjonsoppføring skal lages — wiringen kobler `in2010` til den
eksisterende.

---

## Kapittel-JSON (toppnivå)

```json
{
  "id": "in2010-4-5",
  "courseId": "in2010",
  "chapterNumber": "4.5",
  "title": "…(fra tabellen over, ORDRETT)…",
  "description": "…(setningen fra skjelettet)…",
  "estimatedMinutes": 85,
  "competenceGoals": ["kunne håndkjøre innsetting og sletting i en min-heap på arrayform og oppgi sluttilstanden", "…"],
  "content": [ …blokker… ],
  "exercises": []
}
```

`chapterNumber` = skjelettets `number` (`<del>.<nr>`; prøvekapitler `<del>.P`).
**`number` er del-basert («4.5»), aldri lineær** — bokforsiden grupperer på
`number.split('.')[0]`, og JUS1111-lærdommen var at lineær nummerering knuser
delinndelingen. `competenceGoals`: 2–4 «kunne …»-formuleringer avledet av
kapitlets innholdskontrakt — **ingen kald sjangerkode (A–L), feilkode (#N)
eller karakterbokstav her**, og ingen bar pseudokode-identifikator uten
backticks. `exercises` er alltid tom liste (oppgaver ligger som
`exercise`-blokker inline i `content`).

---

## Blokktyper (eksakte felt — strukturreferanse: `src/lib/data/chapters/econ1310-2-1.json`, kodeformat: `src/lib/data/chapters/tdt4110-6-3.json`)

- `text`: `{ "id", "type": "text", "content": "markdown + LaTeX + ```text-gjerder" }`
- `definition`: `{ "id", "type": "definition", "title": "Begrepet", "content": "…" }`
  — **title er OBLIGATORISK** (flashcards genereres KUN fra toppnivå
  `definition`-blokker med title). I dette faget er kortene kalibrert som
  **algoritme ↔ kjøretid ↔ egenskap**: `title` er navnet (algoritme, struktur,
  begrep), `content` gir presis kjøretid + krav/egenskap. Eksempel:
  title «Dijkstra», content «finner korteste vei fra én kilde med prioritetskø;
  $O((|V|+|E|)\log|V|)$; krever **ikke-negative** kantvekter». Fordi eksamen er
  hjelpemiddelfri, ER dette puggematerialet.
- `theorem`: `{ "id", "type": "theorem", "title": "…", "content": "…" }`
  — brukes til to ting (skjelettets dokumenterte avvik): (a) resultatene som
  skal sitte i ryggmargen (heap-egenskapen, BST-egenskapen,
  $O(n\log n)$-nedre grensen, at komponentgrafen er en DAG, invariantene etter
  $i$ iterasjoner), og (b) **pseudokode-kontrakter** — hvert algoritmekapittel
  har minst én `theorem` med tittel «Pseudokode-kontrakt: `<Navn>`» som gjengir
  algoritmen etter §P2.
- `example`: `{ "id", "type": "example", "title": "Eksempel N: …", "problem": "…", "solution": "…" }`
  — `solution` = A-besvarelse: pseudokode ELLER klar naturlig-språk-forklaring,
  alltid med oppgitt kjøretid og antagelser (§P3). Ved håndkjøring: full
  sporingstavle (§H).
- `tip` / `warning`: `{ "id", "type", "title", "content" }`
- `exercise`: `{ "id", "type": "exercise", "exercise": { "id", "number", "type": "classic", "difficulty": "lett"|"middels"|"vanskelig", "task", "solution", "hints": [] } }`
  — ALDRI `solutionVideo` / `allowsUpload` / `allowsCanvasDrawing` / `answer`.
  Ikke bruk `subTasks`-feltet (deloppgaver skrives inline, se Leserkrav).
- `image`: `{ "id", "type": "image", "src": "/images/textbook/in2010/<navn>.svg", "alt": "…", "caption": "…" }`
  — figurbehovet er reelt her (grafer, trær, heap-som-tre). **Ber en oppgave om
  en figur, MÅ løsningen vise en faktisk SVG**, ikke «figur i ord». SVG-er MÅ
  lastes opp med `scripts/upload-media-storage.ts` — de ligger ikke lenger i
  git, og en ikke-opplastet fil gir 404. Trenger du en figur du ikke kan lage
  selv, bestill den i `FIGUR-BESTILLINGER.md` og bruk «figur i ord» midlertidig.
- `collapsible`: `{ "id", "type": "collapsible", "title", "buttonText": "Vis …", "content": [blokker] }`
  — Notasjons- og pseudokodeliste, prøver, repetisjon, kald bank. ALDRI tom:
  feltnavnet er `content` og skal ha blokker (en `text`-nøkkel eller tom array
  rendrer som tom boks).

Blokk-id-er: `<kapittel-id>-<løpenavn>`, f.eks. `in2010-4-5-ex-3`,
`in2010-4-5-def-2`. Unike innen kapitlet (porten sjekker).

---

## Obligatorisk kapittelstruktur

### Teorikapitler (DNA-regnefag + skjelettet)

Alltid, i denne rekkefølgen først i kapitlet:

1. `tip` **Eksamensvinkel** — frekvens, vekt og sjangre, med tallene fra
   skjelettets Eksamensbelegg-felt for NETTOPP dette kapitlet (og ingen andre
   tall). Sjangerkoden skrives ut i klarspråk ved første bruk i hvert kapittel:
   «sjanger E — håndkjøring, altså at du utfører operasjonen steg for steg og
   oppgir sluttilstanden».
2. `text` **Forkunnskaper** — kapitler i boka (markdown-lenker
   `[kap. X.Y](/in2010/in2010-X-Y)`) + kryssbok-lenker der forkunnskapen ikke
   dekkes i boka (tabellen lenger nede, KUN filer som finnes). «Kan leses uten
   forkunnskaper» hvis ingen. I tunge, sene kapitler (4.5, 5.4, 5.5, 6.2, 6.5,
   7.1, 8.1) skal blokken være en **«Sist du var her»**-blokk som VISER de 2–3
   nøkkelresultatene ferdig oppfrisket (heap-indeksformlene, DFS-full-kjøretiden,
   `mod N`-regelen), ikke bare lenker.
3. `collapsible` **Notasjons- og pseudokodeliste** — se under. (Skjelettet
   plasserer den her, rett etter Forkunnskaper; README-malen plasserer
   symbollisten sist. Skjelettet vinner: i et algoritmefag er listen et
   arbeidsverktøy leseren slår opp i mens hun leser.)

Deretter DNA-løpet i læringsløkker: `text` konkret anker/motivasjon →
`definition`/`theorem` (flashcard-kilden — toppnivå med title!) → `example` med
kjørt sporingstavle eller gjennomarbeidet pseudokode → `exercise` inline som
trener nøyaktig det → neste bit. 2–4 eksempler per delkapittel, siste på
eksamensnivå; 6–12 `exercise` i kapitlet, stigende (lett → middels →
vanskelig), de vanskeligste = eksamenskloner av kapitlets sjangre. `warning`
**Typiske feil** (fra feilkatalogen #1–#12) plasseres der den er mest relevant —
ofte rett etter operasjonen som utløser feilen, og alltid minst én i kapitlet.

Til slutt: begrepsbank-`definition`-blokker opp til flashcard-kvoten. Hver stor
begrepsbank åpner med standard-notisen «Begrepsbanken er flashcard-/
repetisjonsstoff — den gjentar det du nettopp har lest. Hopp trygt over ved
førstegangslesing; tidsanslaget for kapitlet gjelder kjernestoffet.» Deretter
`collapsible` repetisjon.

### «Notasjons- og pseudokodeliste» — navn, plassering og port-triks

> **Navnet er skjelettets dokumenterte avvik fra README** («Symbol- og
> formelliste» → «Notasjons- og pseudokodeliste», fordi apparatet i et
> algoritmefag ikke bare er symboler, men kjøretidsuttrykk og pseudokode-navn
> med kontrakt). `sjekk-bok.py` krever den literale strengen «Symbol- og
> formelliste» i hvert kapittel som bruker LaTeX-symboler, så blokken skal ha:
> - `title`: `"Notasjons- og pseudokodeliste"`
> - `buttonText`: `"Vis notasjon og pseudokode"`
> - første linje i første `text`-blokk inne i collapsiblen, ORDRETT:
>   «Oppslagsverk — alt her forklares underveis i kapitlet. Dette er kapitlets
>   Symbol- og formelliste, tilpasset et algoritmefag: den lister
>   kjøretidsuttrykk og pseudokode-operasjoner i stedet for greske bokstaver.»
>
> Da er både README-notisen og porten oppfylt uten å endre skript.

Innholdet, i tre deler — for **dette delkapitlet**, ikke arvet fra tidligere:

1. Markdown-tabell `| Symbol | Betydning |` med de asymptotiske og
   graf-teoretiske symbolene kapitlet bruker: $n$, $|V|$, $|E|$, $h$, $N$,
   $\alpha$, $O$, $\Omega$, $\Theta$, $G=(V,E)$, $\lfloor\cdot\rfloor$.
2. Markdown-tabell `| Operasjon | Kontrakt | Kjøretid |` med **hver** algoritme
   og operasjon kapitlet bruker, én linje hver: inn/ut-kontrakt + kjøretid.
   Eksempel: `` `RemoveMin(H)` `` | «fjerner og returnerer minste element i
   min-heapen `H`, gjenoppretter heap-egenskapen ved down-heap» | $O(\log n)$.
3. «**Formler i dette delkapitlet:**» med display-LaTeX for det som faktisk er
   formler (heap-indeksene $\lfloor (i-1)/2 \rfloor$, $2i+1$, $2i+2$;
   $h(k) = k \bmod N$; $\alpha = n/N$; vekstordningen) med én linjes tolkning
   hver.

Unntak kun for helt notasjonsfrie kapitler (finnes knapt i denne boka).

### Drillkapitler (1.3, 2.4, 3.3, 4.5, 5.5, 6.5, 8.1)

`tip` Eksamensvinkel → `text` Forkunnskaper → `collapsible` Notasjons- og
pseudokodeliste → `text`/`theorem` **Løsningsoppskrift** (algoritmen fra
skjelettets «Innholdskontrakt (løsningsoppskrift)»-felt, steg for steg og
nummerert) → `example` gjennomarbeidet eksamenscase med **sensor-margnotater**
(hva som gir uttelling ved HVERT steg, og hvor poengtrappen slår inn) → 8–15
`exercise` som roterer sjangrene, alle på eksamensnivå med nyskrevne kontekster,
alle med full `solution` + `hints`. Håndkjøringsdriller (3.3, 4.5) følger §H.
Signal-/hintbokser som varsler hva en drilloppgave tester, står ETTER oppgaven.

### Øvingseksamener (8.2–8.4)

Komplette sett etter skjelettets miks. `estimatedMinutes` 240. Struktur:
`tip` med format, poeng og tidsbudsjett (og at Del 2 avgjør karakteren) →
nyskrevet oppgavesett i **eksamens tredeling**:

1. **Oppvarming** (2 p, sjanger A) — «Hva er en algoritme?» / «Hva er en
   datastruktur?», maks fire setninger, alle rimelige svar godtas.
2. **Del 1** (auto-rettet) — sant/usant + korte svar, med
   **antigjettings-skaleringen eksplisitt angitt** i oppgaveteksten (f.eks.
   «poengsummen skaleres som $2\cdot\max(n-16,\ 0)$ av 32 riktige»).
3. **Del 2** — 5–7 større pseudokode-/resonnementsoppgaver, stigende, med de
   siste 1–2 som åpen grafmodellering.

Deretter `collapsible` modellbesvarelse per oppgave (pseudokode **eller** klar
naturlig-språk-forklaring — vis begge former minst én gang per sett) med `tip`
om **poengtrapp og delpoeng**: hva O(n)-, O(n log n)- og O(n²)-svaret ville gitt
på nettopp denne oppgaven. Lange modellbesvarelser har «— naturlig pausepunkt —»-
markører.

**Kald bank:** boka skal ha ÉN merket kald bank (8–10 oppgaver med uvante
innpakninger, UTEN hint, fasit = momentliste) — den legges i kap. 8.1 som en
egen `collapsible` «Kald bank — uten hint».

---

## Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»; SKAL i førsteutkastet)

- **Kun eksamensrelevant stoff**; «bør kjenne til» sist og merket (gjelder
  særlig rød-svart-trær i 4.3, Borůvka i 6.3, Huffman-beviset i 6.4 og hele
  NP-delen 7.3).
- **Korte avsnitt** (2–4 setninger), aktiv «du»-form, konkret norsk knagg før
  formalismen. Godt, flytende norsk; ALDRI telegramstil («Heap: array. Feil:
  indeks.» er FORBUDT).
- **Meningsfulle oppgaver:** hver oppgave er synlig eksamensforankret.
  Sjanger-/nivåmetadata skrives som en LEDENDE parentes i `task` som
  `extractGenreTag` kan trekke ut til en chip, f.eks.
  `(Eksamensnivå, sjanger H — grafalgoritme i pseudokode.)`, ALDRI midt i
  brødteksten. Ikke gjenta `difficulty` i teksten («(krevende)» skrives ikke i
  `task` — feltet vises i oppgavehodet).
- **Læringsløkke Teori → Eksempel → Oppgave** med `exercise`-blokker INLINE.
- **Ingen usett forkunnskap** (se løkke-kontrakten øverst).
- **Deloppgaver på egen linje, fet merking:** a), b), c) i `task`/`solution`
  HVER på egen linje — `…\n\n**a)** …\n**b)** …`. ALDRI bak hverandre i løpende
  tekst; ikke bruk `subTasks`.
- **Nybegynner-inngang / ingen uforklart sjargong (UFRAVIKELIG).** Boka skal
  forstås av en som nettopp har tatt IN1000:
  - **Sjangerkodene A–L** skrives ut i klarspråk ved FØRSTE bruk i HVERT
    kapittel: «sjanger F — matriseavkryssing, altså at du krysser av hvilken
    algoritme som passer hver graftype».
  - **Feilkodene #1–#12** glosses ved FØRSTE bruk PER KAPITTEL: «(#3 —
    down-heap uten å sjekke at barnet finnes)».
  - **Eksamens-metaspråk** forklares før bruk: «Inspera» (UiOs digitale
    eksamenssystem), «antigjettings-skalering», «auto-rettet», «sant/usant-blokk»,
    «hjelpemiddelfri», «sensorveiledning», «delpoeng», «poengtrapp».
  - **Fagsjargong** forklares ved første bruk, ALDRI kaldt: «asymptotisk»,
    «invariant», «in-place», «stabil sortering», «load-faktor», «probing»,
    «kondensasjon», «reachability» (bruk «hvem som kan nås fra hvem»),
    «sertifikat», «verifikator», «amortisert» (nevnes bare for å avgrenses bort).
  - Ingen kald kode i `competenceGoals` eller i aller første tekstboks.
  - Kap. 0.1 har en **«Slik leser du denne boka»-orienteringsboks** (type `text`
    eller `tip`, ALDRI `definition` — det ville endret flashcard-kvoten) med:
    karakterskalaen A–F og at eksamen teller 100 %, kompakt liste over
    sjangerkodene A–L med Del-tilhørighet, kompakt liste over feilkodene #1–#12
    med at de har et samlet register, og setningen om at hver algoritme
    forklares der den brukes.
- **Del 0-pakken (kap. 0.1):** «Lite tid?»-boks (`tip`) med hurtigrute 3–5 dager
  + ukeplan summert fra `estimatedMinutes` (bokas sum er **3 355 min ≈ 56
  timer** — 2 570 min kapitler + 785 min prøver, etterregnet over alle 42 filer,
  se § «Tidsbudsjett») + presiseringen at anslagene er LESEtid og at den som
  håndkjører og skriver pseudokode selv bør regne ca. ×1,5 · **kildenote**
  (§ «Sannferdig kildenote») · **sjangerkortet A–L på ÉN side** (kortet SELV:
  sjanger → én linjes oppskrift → typisk vekt → vanligste feil, ikke en
  lenkeliste) · **deltidsrute** 10–12 uker (~5 t/uke) med de tre
  øvingseksamenene fordelt på tre kvelder, aldri stablet til slutt ·
  **«lese mye, skrive lite»-boks** — og for et algoritmefag den motsatte
  advarselen i tillegg: **du må håndkjøre på papir og skrive pseudokode uten
  hjelpemidler**, fordi eksamen er hjelpemiddelfri; minst én øvingseksamen skal
  tas på tid uten oppslag · **formel-/notasjonsminimum** (`collapsible` «Det du
  må kunne uten oppslag»): heap-indeksene fra 0, `h(k) = k mod N` +
  wraparound, kjøretidstabellene (sortering, datastrukturer, graf),
  korteste-vei-matrisens fire tilfeller, og vekstordningen.
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. X.Y](/in2010/in2010-X-Y)`; død «se kapittel»-tekst er
  FORBUDT. **Aldri `/bok/`-prefiks.**
- **Karakter-realisme:** «C er en god og vanlig karakter» eksplisitt i Del 0;
  grep «Prioritet: perfekt» skal gi 0 treff. NB: «PERFEKT» i skjelettets
  deltitler er en *prioritetsklasse* (perfekt/kunne/kjenne = nivå 1/2/3), IKKE
  et krav om plettfrihet — skriv «må sitte / høyeste prioritet». Faget har
  eksplisitt sensorstøtte for delvis uttelling: hovedmoment (algoritmevalg +
  grunnidé) først gir mest. Modellbesvarelser merkes ÆRLIG (en «C-besvarelse»
  ER en C) + minst én autentisk B-/midtnivå-besvarelse: riktig algoritme og
  korrekt kjøretid, men O(n log n) der O(n) var mulig, eller en glemt
  kanttilfelle-sjekk — med margnotat om hva som er BRA NOK og hva som mangler
  til A.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter hver prøvefasit — konkret i
  dette faget: «☐ oppga du hele hashtabellen, med `_` for tomme plasser? ☐
  sjekket down-heap at barnet finnes? ☐ oppga du kjøretiden, og matcher den
  algoritmen du faktisk skrev? ☐ definerte du hva $n$ er?».
- **Lett innstegsoppgave** (difficulty lett, ren gjengivelse/minimal håndkjøring,
  vennlig fasit) tidlig i teorikapitler der første oppgave ellers er full
  eksamenssjanger.
- **Hverdagsanker + verdens-caser:** abstrakte kjernetemaer åpner med et konkret
  anker før apparatet (en heap som «alltid-minste-først-kø», en hashtabell som
  garderobe med nummererte knagger, SCC som «hvem kan nå hverandre begge veier»).
  Innpakningene skal være virkelige caser (rutenett og reisetid, avhengigheter
  mellom pakker, nettsider og lenker, tunnelsystem, frekvenser i en tekst),
  aldri «en medstudent skriver …»-metaeksempler. **Alle stedsnavn, tall, grafer
  og historier er nyskrevne** — se § «Opphavsrett».
- **Øktmerking:** kapitler med `estimatedMinutes` > 45 (1.2, 1.3, 1.4, 2.1, 2.2,
  2.4, 3.1, 3.3, 3.4, 4.1, 4.2, 4.3, 4.4, 4.5, 5.2, 5.3, 5.4, 5.5, 6.2, 6.3,
  6.5, 7.1, 7.3, 8.1–8.4) har tidsanslag per løkke («Løkke 2 — down-heap
  (~15 min)») eller «— naturlig pausepunkt —»-markører.
- **Hint + difficulty-spredning:** alle `exercise` har utfylte `hints` (første
  hint = første grep / hvilken struktur som er relevant, f.eks. «Regn ut
  `h(k) = k mod 7` for hver nøkkel før du setter inn» — ALDRI sluttilstanden
  eller den ferdige algoritmen). Unntak: den merkede kalde banken i 8.1. Boka
  har flere «krevende»-oppgaver (difficulty `vanskelig`), særlig i 5.5 og 8.1.
- **Fasitmønster-variasjon:** ALLE ensartede fasitlister varierer. Statiske
  flervalg i prøve-collapsibles har STOKKEDE fasit-bokstaver (aldri «alle a»);
  quizfilene beholder `options[0]`-invarianten fordi runtime stokker. I
  sant/usant-blokker skal svarene blande sant og usant (aldri «alle usant»); i
  korteste-vei-matriser skal ikke alle rader ha samme algoritme.
- **Distraktorer straffer aldri grundig lesing:** en distraktor gjengir ALDRI
  bokas egne presiseringer som «galt» svar. Nære distraktorer forklares i
  `explanation`.
- **Meta-fasit forbudt:** «en A-besvarelse ville her ha valgt …» erstattes av
  algoritmen faktisk skrevet ut. Grep «en A-besvarelse ville» / «ville ha
  drøftet» = 0.
- **Frekvenstall = telte belegg:** «100 % (7 av 7 sett)», «86 %», «43 %» skal
  stemme EKSAKT med skjelettets Eksamensbelegg-felt for kapitlet, som igjen er
  telt i EKSAMENSANALYSE §2 (nevneren er **7 sett**, H2018–H2024). Tell før du
  skriver; ikke oppfinn nye prosenter.
- **Juridisk:** innholdet fremstiller seg ALDRI som offisielt eller
  UiO-tilknyttet, og lover aldri eksamensutfall.

### Sannferdig kildenote (UFRAVIKELIG — produkteier)

Kildenoten i Del 0 og all omtale av grunnlaget nevner KUN kildetyper som
faktisk finnes i fagets arkiv, jf. `EKSAMENSANALYSE.md` §8.

**IN2010 er et av de få emnene der påstanden «sensorveiledning» faktisk holder.**
De fleste emner på plattformen har bare oppgavesett + faglærerskrevne
løsningsforslag, og der er ordet «sensorveiledning» forbudt. Her finnes UiOs
**offisielle sensorveiledninger** for alle sju settene, med fullstendige
oppgavetekster, løsningsforslag og eksplisitt poengfordeling — det er derfor
denne boka kan si noe presist om hva som gir uttelling. Bruk fordelen, og bruk
den nøyaktig.

Arkivet, talt på disk 29. juli 2026 (`…/Eksamner/UiO/IN2010/`): **34 filer**,
som er **20 unike dokumenter** — differansen er dublett-kopier (IN2010-settene
og sensorveiledningene ligger både i rotmappa og i undermappene `eksamen/` og
`sensorveiledning/`):

| Dokumenttype | Unike | Merknad |
|---|---|---|
| IN2010 oppgavesett H2018–H2024 | 7 | kun **høsteksamener** — emnet har ikke vårsett |
| IN2010 offisielle **sensorveiledninger** H2018–H2024 | 7 | analysens primærkilde; poengfordeling per delmoment |
| INF2220 oppgavesett H2015–H2017 | 3 | forgjengeremnet, epoke 1 (Java, alle hjelpemidler) |
| INF2220 løsningsforslag H2015–H2017 | 3 | brukt til formhistorikk |

Bruk denne formuleringen (eller en trofast omskrivning):

> Frekvenstallene i denne boka er telt i UiO-arkivet for IN2010 høst 2018 – høst
> 2024: sju oppgavesett med tilhørende **offisielle sensorveiledninger**.
> Sensorveiledningene inneholder løsningsforslag med eksplisitt poengfordeling,
> og er hovedkilden til alt boka sier om hva som gir uttelling. I tillegg er de
> tre settene fra forgjengeremnet INF2220 (2015–2017) med løsningsforslag
> skummet for formhistorikk — de krevde Java og alle hjelpemidler, og speiler
> ikke dagens eksamen. H2020 var korona-hjemmeeksamen med alle hjelpemidler og
> er markert særskilt. Prosentene gjelder de sju IN2010-settene. Et nytt sett
> kan endre bildet.

Presist språkbruk, fire ting:

1. Skriv «offisielle sensorveiledninger» — det er riktig her. Ikke oppgrader
   videre («sensorpanel», «karakterstatistikk», «eksamensstatistikk» finnes
   IKKE i arkivet og skal aldri nevnes).
2. **Modellbesvarelser i boka er NYSKREVNE** av Skolesaga. De omtales aldri som
   ekte studentbesvarelser, og aldri som hentet fra en sensorveiledning.
3. **Nevneren er sju sett.** Skriv «7 av 7 sett (100 %)», ikke «alltid».
   H2020-forbeholdet skal med der et tall hviler tungt på det året.
4. **Opphavsrett vs. tilgjengelighet:** sensorveiledninger og eksamensoppgaver
   fra offentlige utdanningsinstitusjoner er fritt tilgjengelige etter
   åndsverkloven § 14, og analysen bygger lovlig på dem. Det endrer likevel
   ingenting på bokas egen regel: **alt innhold er nyskrevet** (§ «Opphavsrett»).
   Ingen oppgavetekst, intet løsningsforslag og ingen graf gjengis ordrett.

---

## Fagspesifikk stil (ufravikelig for IN2010 — fra skjelettets §1)

### Eksamensform (gjengis korrekt overalt)

**Én digital skoleeksamen i Inspera, 4 timer, ingen hjelpemidler, teller 100 %.**
Karakterskala **A–F**. Obligatoriske innleveringer må være godkjent for å gå
opp. Alt — også pseudokode — skrives inn i Inspera; **ingen opplasting av
håndskrevne svar**. Engelsk oversettelse av settet legges alltid ved.

**Fast tredeling, stabil siden 2021:**

| Del av settet | Innhold | Vekt/poeng |
|---|---|---|
| **Oppvarming** | «Hva er en algoritme?» / «Hva er en datastruktur?», maks 4 setninger. Ingen fasit — alle rimelige svar gir full uttelling | 2 p (fast, gratis) |
| **Del 1 — auto-rettet** | Mange små sant/usant + korte svar: kjøretidsfakta, sortering, heap, hashing, graf, NP + små håndkjøringer og matriseavkryssinger | typisk 20–35 p |
| **Del 2 — pseudokode + resonnement** | 5–7 større oppgaver à 8–12 p, stigende; de siste 1–2 er åpen grafmodellering | der karakteren avgjøres |

Faste mekaniske detaljer som SKAL gjengis riktig:

- **Antigjettings-skalering på sant/usant.** Summen skaleres så ren gjetting i
  snitt gir null: H2023 `2·max(n − 16, 0)` av 32 riktige (16 riktige = 0 poeng);
  H2024 `2·max(n − 11, 0)` av 22; H2021 «−1 for feil eller ubesvart, kan ikke gå
  under 0». **Men:** på de vanlige korte svarene gjøres ingen forskjell på feil
  og ubesvart — der lønner det seg alltid å svare. Begge halvdeler av regelen
  skal stå hver gang antigjettingen omtales.
- **Poengtrappen: «lavere kjøretidskompleksitet er mer poenggivende.»** Ofte
  eksplisitt i veiledningen: O(n) ⇒ full pott, O(n log n) ⇒ mindre, O(n²) ⇒
  minst — på SAMME oppgave. Å velge riktig algoritme ER å velge poeng.
- **Kjøretiden må matche algoritmen du faktisk ga.** Det trekkes for manglende
  kompleksitet, for feil kompleksitet, og for å bruke $n$ uten å definere det.
- **Klar naturlig-språk-forklaring kan gi like mye som — eller mer enn — rotete
  pseudokode.** Kravet er «lett forståelig, entydig og presist», ikke syntaks.
  «En setning man ikke forstår etter to gjennomlesninger, ignoreres.»
- **Antagelser om representasjon oppgis av kandidaten.** Sensor binder seg ikke
  til nabolister/nabomatrise/objektstil, og en node antas å ha de feltene du
  trenger (`v.left`, `v.right`, `v.x`, `v.parent`).
- **Delvis uttelling er regelen**, med poengfordeling per delmoment. Hovedmoment
  (algoritmevalg + grunnidé) først.
- **Historikk-caveatene:** H2020 var korona-hjemmeeksamen med alle hjelpemidler;
  INF2220 (2015–2017) krevde **Java** og alle hjelpemidler. Begge nevnes kun som
  historikk, aldri som dagens form.

### Kodespråk og notasjonsstandard — GENERISK PSEUDOKODE, IKKE CLRS, IKKE JAVA, IKKE PYTHON

Dette er bokas mest karakteristiske stilregel, og den er belagt: UiOs oppgaver
og sensorveiledninger bruker **generiske `Procedure`-hoder med Input/Output-
spesifikasjon og selvforklarende operasjonsnavn** (`RemoveMin`, `Insert`,
`HeapInsert`, `DFSVisit`, `ParentOf`, `StronglyConnectedComponents`) — ikke
CLRS-navn, og ikke et konkret programmeringsspråk.

| Skal skrives | Ikke |
|---|---|
| ```text-gjerde med `Procedure Insert(H, x)` | ```python / ```java / ```pseudo / ubemerket gjerde |
| `RemoveMin`, `HeapInsert`, `DFSVisit`, `StronglyConnectedComponents` | `Heap-Extract-Min`, `Build-Max-Heap`, `Merge-Sort`, `Tree-Insert` (CLRS) |
| **Array-indeks fra 0**: rot på 0, forelder $\lfloor (i-1)/2 \rfloor$, barn $2i+1$ og $2i+2$ | indeks fra 1 med $\lfloor i/2 \rfloor$ (CLRS/TDT4120) |
| Hovedsakelig **O** (øvre grense); $\Omega$/$\Theta$ nevnes kort i kap. 1.1 | $o$ og $\omega$ (finnes ikke i IN2010) |
| Kjøretid ved **løkketelling** | masterteoremet, rekurrensligninger, substitusjonsmetoden |
| `$G = (V, E)$`, `$O(|V| + |E|)$`, `$O((|V|+|E|)\log|V|)$`, `$O(|V|\cdot|E|)$` | `O(V+E)` uten absoluttverdi i prosa |
| `$f(n) = O(g(n))$` (IN2010 skriver likhetstegn, leses «tilhører») | `$f \in O(g)$` som eneste form |
| `mod` som operator i pseudokode: `(i + 1) mod N` | `%` (Python/Java-syntaks) |
| `←` **ikke** i prosa; i pseudokode brukes `=` eller `:=` konsekvent i hele boka | å blande `=`, `:=` og `←` |

**Fagspråk (norsk):** «kjøretid» (ikke «tidskompleksitet» hver gang),
«naboliste»/«nabomatrise», «inngrad»/«utgrad», «sti»/«sykel», «spenntre»,
«prioritetskø», «lukket hashing / lineær probing», «kondensasjon /
komponentgraf», «stabil sortering», «på stedet» kan skrives «in-place» (etablert
term — forklares én gang). Engelske algoritmenavn beholdes (Dijkstra, Prim,
Kruskal, Borůvka, Huffman, Kahn, BFS, DFS, SCC), men forklares ved første bruk.

### Matematikk i prosa SKAL være LaTeX, ikke unicode

Skriv `$O(n \log n)$`, `$O(|V| + |E|)$`, `$\lfloor (i-1)/2 \rfloor$`,
`$\alpha = n/N$`, `$h(k) = k \bmod N$`, `$A \le_p B$`, `$P \subseteq NP$`,
`$1 < \log n < n < n\log n < n^2 < n^3 < 2^n < n!$`. FORBUDT i prosa: `⌊`, `⌋`,
`≤`, `≥`, `≈`, `⊆`, `≤ₚ`, `⇒`, `→`, `·`, `²`, `ⁿ`, `Σ`, `√` (bruk LaTeX eller
ordet). Dobbel backslash i JSON (`\\log`, `\\lfloor`, `\\bmod`, `\\subseteq`).

**Inne i ```text-gjerder er unicode-tegn derimot greit** — der er `⌊(i−1)/2⌋`
lesbart som pseudokode og røres ikke av rendreren. Men LaTeX skal ALDRI stå
inne i et gjerde eller i backticks, og pseudokode-navn skal ALDRI stå i
matte-modus (`$RemoveMin$` er forbudt — skriv `` `RemoveMin` ``).

`<` og `>` i prosa skrives `$x < 3$` eller `` `x < 3` ``, aldri bart (rå `<`
går uendret inn i HTML).

### Arketypesærtrekk

- **Modellbesvarelser** er kort pseudokode + oppgitt kjøretid + antagelser, med
  sensor-margnotat om delpoeng — aldri en fortelling om hva en A-besvarelse
  «ville» gjort. Minst én modellbesvarelse per øvingseksamen skal være skrevet
  som **ren naturlig-språk-forklaring** (uten pseudokode) og eksplisitt merket
  «denne gir full uttelling — kravet er entydighet, ikke syntaks».
- **Ingen R-kode, ingen Python, ingen Java** noe sted i boka.
- **Figur-i-ord** brukes der en figur ville hjulpet, men ikke er bestilt: skriv
  presist hva figuren ville vist (nodene, kantene, retningene, vektene). **Ber
  en oppgave om en figur, MÅ løsningen vise en faktisk SVG** — og SVG-en MÅ
  lastes opp til Storage (`scripts/upload-media-storage.ts`), ellers 404.
- **Kjøretidstabeller:** hver del med flere algoritmer avsluttes med en tabell
  `navn → best/verste/forventet + krav/egenskap`. Disse er bokas viktigste
  puggeflater og gjentas samlet i Del 0.
- **Feilkatalogens numre er identiske med `EKSAMENSANALYSE.md` §5** for #1–#12.
  Endre ALDRI nummereringen — skjelettets per-kapittel-felt henviser til
  «§5-fellen».

---

## §P PSEUDOKODEKONTRAKTEN (bindende)

### §P1 Pseudokode i JSON — fence, tagg og escaping

**All pseudokode står i trippel-backtick-blokker med taggen `text`:**

```
```text
Procedure Insert(H, x)
  Input:  min-heap H som array (indeks fra 0), element x
  Output: H med x satt inn, heap-egenskapen gjenopprettet
  i = |H|
  H[i] = x
  while i > 0 and H[(i-1)/2] > H[i]:
      bytt H[i] og H[(i-1)/2]
      i = (i-1)/2
  Kjøretid: O(log n)
```
```

- **Taggen er alltid `text`.** ```python er **FORBUDT** i in2010-kapitler:
  `sjekk-kode.py` ville `compile()`-sjekket blokken, og faget har ikke Python.
  ```java, ```pseudo, ```algorithm og ubemerket gjerde er også forbudt.
- Kortere fragmenter og enkeltnavn står i inline-backticks: `` `RemoveMin(H)` ``,
  `` `v.left` ``, `` `h(k) = k mod N` ``.
- **Escaping i JSON (bruk alltid `json.dump`, aldri håndskriv):** linjeskift
  `\n`; innrykk = **2 eller 4 mellomrom, aldri TAB** (`sjekk-latex.py` avviser
  kontrolltegn utenfor gjerder, og TAB i pseudokode er unødvendig);
  `"` → `\"`; `\` → `\\`.
- `$` inne i et gjerde eller i backticks teller ikke som matte-avgrenser
  (presisert i rendreren 25. juli 2026), men pseudokoden i dette faget trenger
  ingen `$` — bruk den ikke.

### §P2 Pseudokode-kontrakten som `theorem`-blokk

Hvert algoritmekapittel har minst én `theorem` med tittel
«Pseudokode-kontrakt: `<Navn>`». Innholdet har **fem** faste deler, i denne
rekkefølgen:

1. **Antagelser om representasjon** — «grafen er gitt som nabolister; hver node
   `v` har feltet `v.visited`» / «heapen er et array `H` med indeks fra 0».
2. **Pre-/postbetingelse** — hva som må gjelde før, og hva som gjelder etter.
3. **Selve pseudokoden** i et ```text-gjerde, med `Procedure`-hode og
   Input/Output-linjer.
4. **Invarianten eller grunnideen i én setning** — hvorfor den virker.
5. **Kjøretid** med begrunnelse i én setning («hver node og hver kant besøkes
   én gang ⇒ $O(|V| + |E|)$»).

Maks ~20 linjer pseudokode per blokk. Trenger algoritmen mer, deles den (f.eks.
`DFS-full` som kaller `DFSVisit`), med en setning imellom.

### §P3 Del 2-svarformen — fire obligatoriske ledd

Hver `example`- og `exercise`-`solution` som besvarer sjanger G, H, I eller J
skal ha alle fire ledd, i denne rekkefølgen. De er sensors faktiske krav, og
mangler ett av dem, trekkes det:

1. **Navngi problemet / velg verktøy** — «dette er reachability i en rettet graf
   ⇒ SCC + komponentgraf».
2. **Oppgi antagelser om representasjon.**
3. **Algoritmen** — pseudokode ELLER klar naturlig-språk-forklaring (begge gir
   full uttelling; vis begge former minst én gang per drillkapittel).
4. **Kjøretid som matcher koden, med $n$ (eller $|V|$, $|E|$) definert** — og
   der det er relevant: én setning om hvorfor dette er **lavest mulig**
   («poengtrappen»).

Hvert Del 2-kapittel (3.4, 4.2, 5.2–5.5, 6.1–6.3, 6.5, 7.1, 8.1) avslutter med
spørsmålet «kan dette gjøres raskere?» og parer den naive løsningen med den
optimale, med eksplisitt poengtrapp.

### §P4 Kjøretidspåstander skal etterregnes, ikke huskes

Regnefagets sannhetskontroll, oversatt til dette faget: **hver kjøretids- og
egenskapspåstand du skriver, skal du kunne begrunne i én setning før du limer
den inn.** Konkret:

- Kode→O-fasiter (sjanger B) regnes ut ved løkketelling, steg for steg i
  fasiten — aldri «dette er åpenbart $O(n^2)$».
- Faste tall som er lette å bomme på og som SKAL stemme: build-heap er $O(n)$
  (ikke $O(n\log n)$); quicksort er $O(n\log n)$ forventet / $O(n^2)$ verste;
  hashmap er $O(1)$ **forventet** / $O(n)$ verste; DFS fra én node er $O(|E|)$
  mens DFS-full er $O(|V| + |E|)$; Prim/Dijkstra med prioritetskø er
  $O((|V|+|E|)\log|V|)$; Bellman-Ford er $O(|V|\cdot|E|)$; topsort og SCC er
  $O(|V| + |E|)$; counting sort er $O(n+k)$.
- Påstander om **stabilitet/in-place** sjekkes mot tabellen i kap. 2.1/2.2 hver
  gang de gjentas.
- Er du usikker på en påstand: merk den `(verifiser)` og løs den før
  ferdigmelding — `sjekk-bok.py` avviser gjenstående `(verifiser)`.

---

## §H HÅNDKJØRINGSKONTRAKTEN — sporingstavler genereres PROGRAMMATISK

**Håndkjøring er en egen ferdighet i dette faget** (sjanger E: minst én per
sett, ofte to). Studenten skal kunne føre en struktur gjennom en operasjon steg
for steg og oppgi sluttilstanden feilfritt — min-heap Insert/RemoveMin,
linear-probing-innsetting, BST-innsetting med in-order, AVL-rotasjoner,
Huffman-kodelengder, Dijkstra-tabell, Kahn-kø, BFS-lag.

### §H1 Sporingstavler skrives ALDRI for hånd

En sporingstavle skrevet fra hodet er den farligste feilen denne boka kan gjøre:
den lærer leseren feil sluttilstand på nettopp den sjangeren som er 100 % sikker
på Del 1, og feilen er usynlig for alle andre porter. Regelen er derfor
absolutt, og den er den samme disiplinen alle kodebøkene på plattformen er bygget
med:

> **Hver sporingstavle og hver oppgitte sluttilstand i boka skal være generert
> av et program som faktisk utfører algoritmen.**

Dette gjelder tavler i `example.solution`, i `exercise.solution`, i
prøve-collapsibles og i øvingseksamenenes fasiter.

### §H2 Arbeidsflyten (obligatorisk)

```
1. skriv simulatoren:  <scratchpad>/in2010-<kapittel-id>-<n>.py
   – implementér operasjonen i ren Python 3 (indeks fra 0, samme regler
     som bokas pseudokode: down-heap mot MINSTE barn, `(i+1) % N` ved
     probing, overskriv ved lik nøkkel, …)
   – la den skrive ut tilstanden ETTER hvert steg, i tabellform
2. kjør:  python3 <scratchpad>/in2010-<kapittel-id>-<n>.py
3. lim utskriften ORDRETT inn i sporingstavlen / sluttilstanden
4. behold .py-fila i scratchpad til kapitlet er ferdigmeldt, og oppgi i
   ferdigmeldingen hvor mange tavler du genererte
```

- **Byggemiljøet:** `python3` er **3.9.6**. Ikke installer noe — alt her klarer
  seg med standardbiblioteket.
- Simulatoren er et **verktøy**, ikke innhold: den skal ALDRI limes inn i
  kapittelfila. Boka viser pseudokode (```text) og tavlen — aldri Python.
- Simulatoren må implementere **bokas** regler, ikke Pythons bekvemmeligheter:
  ingen `heapq` (den er 0-indeksert min-heap, men skjuler sift-stegene du skal
  vise), ingen `dict` som «hashtabell» (du skal vise probing-sekvensen).
- Endrer du tallene i en oppgave, **kjør på nytt**. Håndretting av ett tall i en
  ferdig tavle er den vanligste kilden til inkonsistens.

### §H3 Tavlens form

Markdown-tabell med én rad per steg, én kolonne per størrelse som endrer seg,
og en sluttkolonne med strukturens tilstand:

| Steg | Nøkkel | `h(k)` | Prøvde indekser | Tabell etter steget |
|---|---|---|---|---|
| 1 | 12 | 5 | 5 | `_, _, _, _, _, 12, _` |
| 2 | 5 | 5 | 5 → 6 | `_, _, _, _, _, 12, 5` |

Faste regler:

- Tabellen skal være så mekanisk at leseren kan gjøre nøyaktig det samme på
  papir. Ingen steg hoppes over.
- **Sluttilstanden gjentas alene til slutt**, i den formen eksamen krever
  (§H4) — det er den studenten skal levere.
- Etter tavlen: **én-linjes fellenote** som navngir feilen sporingen tester, med
  feilkode: «Fellen her er #11 — probing som går utenfor `0..N−1` fordi `mod N`
  er glemt.»
- I drillkapitlene (3.3, 4.5) legges det til en margnote om at **delvis riktig
  tilstand gir delvis uttelling**, og hva det siste poenget henger på
  (down-heap-barnsjekken, overskriving ved lik nøkkel).

### §H4 Sluttilstandens format per struktur (eksamensdisiplin)

Sensor ber om **kun sluttilstanden**. Boka skal trene nøyaktig det formatet:

| Struktur | Leveres som | Fallgruve |
|---|---|---|
| Min-heap | hele arrayet, kommaseparert, indeks fra 0 | å levere treet i stedet for arrayet |
| Hashtabell (linear probing) | **hele** tabellen, `_` for tomme plasser | å bare liste de innsatte nøklene (#11) |
| BST | in-order-utskriften (som er **sortert**), evt. rotverdi | å tro in-order gir innsettingsrekkefølgen |
| AVL | **antall enkle rotasjoner** (dobbel = to enkle) + rotverdi + «gyldig AVL?» | å telle dobbelrotasjon som én |
| Huffman | kodelengde per symbol (evt. totalt antall bits) | kortest kode til sjeldnest symbol |
| Dijkstra | avstandstabellen ved terminering | å stoppe før alle noder er ferdige |
| Topologisk sortering (Kahn) | rekkefølgen, eller «syklisk — ingen finnes» | å ikke melde sykel når ikke alle prosesseres |

### §H5 Porten `sjekk-sporing.py` — hva den faktisk dekker

`python3 scripts/hoyskolebok/sjekk-sporing.py in2010` kjører koden i en oppgaves
```python-blokk og sammenligner med «**Utskrift:**»-blokken i fasiten. Porten ble
**gjort rekursiv 28. juli 2026**, så den ser nå også inn i `collapsible`-er —
altså i prøvekapitlene, der ingen sporingsfasit tidligere var kontrollert i noen
bok. Kjør den på hvert kapittel du skriver.

Vær presis på hva dette betyr for in2010: fordi boka **ikke** inneholder
```python-blokker, vil porten normalt rapportere «0 sjekket» og er da bare et
sikkerhetsnett mot at en Python-blokk sniker seg inn (den skal uansett fanges av
§P1-regelen og forbudt-term-grepet). **Den erstatter altså ikke §H2** —
korrektheten i sporingstavlene hviler på at du faktisk kjørte simulatoren. Det
er forfatterens ansvar, og det skal rapporteres i ferdigmeldingen med antall.

---

## §R REKURSJON ER PENSUM

**Rekursjon er kjernestoff i IN2010** og skal brukes fritt der den er den
naturlige formen:

- Tre-algoritmene i kap. 4.2 ER rekursive: beskåret in-order (`InRange`),
  diameter via én DFS som returnerer subtre-høyde, `checkBST` med
  `[low, high]`-intervall, LCA.
- `DFSVisit` i kap. 5.2–5.5 skrives rekursivt (og den iterative
  stack-varianten nevnes som alternativ).
- 2-fargelegging (5.3) og SCC (5.4) bygger på rekursiv DFS.

**Ingen agent skal unngå rekursjon i denne boka.** Regelen i in1900/in1000
(«rekursjon er utenfor pensum, bruk løkke») gjelder IKKE her, og skal ikke
kopieres inn i noe kapittel. `scripts/hoyskolebok/sjekk-kode.py` er allerede
emne-gatet: `in2010` står i settet `REKURSJON_ER_PENSUM`, med belegg i
`EKSAMENSANALYSE.md` §6. Porten flagger derfor ikke selvkall, og punkt 2 i
skriptet skal **ikke** slås av — det verner in1900/in1000 samtidig.

To presiseringer som likevel gjelder:

1. **Kjøretidsanalyse gjøres ved løkketelling, ikke masterteorem.** Rekursive
   algoritmer analyseres ved å telle arbeidet per nivå eller ved å si «hver node
   besøkes én gang ⇒ $O(n)$». Masterteoremet og rekurrensligninger er **ikke
   IN2010-pensum** og skal ikke brukes (kap. 1.2 nevner kun kort
   `proc(n−1) + proc(n−1)` ⇒ $O(2^n)$ som et INF2220-arvet «kjenne»-punkt).
2. **Rekursjon har en kostnad som skal nevnes én gang** (kap. 4.2): dybden på
   kallstakken er $O(h)$, og på et skjevt tre kan $h = n$.

---

## Feilkatalogen #1–#12 (identisk nummerert med `EKSAMENSANALYSE.md` §5)

Endre ALDRI nummereringen — skjelettets per-kapittel-felt henviser til
«§5-fellen». Feilkodene glosses ved første bruk PER KAPITTEL, og samles i
Del 0 med henvisning til kapitlet som forebygger hver feil.

| # | Feil | Forebygges i |
|---|---|---|
| #1 | Full/naiv traversering der beskjæring var mulig — full in-order i `InRange`; søk fra *hver* node i stedet for én reversert Dijkstra / én SCC-kjøring. Koster halve poengsummen | 4.2, 5.4, 6.2, 8.1 |
| #2 | Kvadratisk der lineær var mulig — tre-diameter med høyde per node ($O(n^2)$) i stedet for én DFS ($O(n)$); `checkBST` med Min/Max per node | 4.2, 8.1 |
| #3 | Down-heap uten å sjekke at barnet finnes (eksplisitt takpoeng i H2019) | 4.4, 4.5 |
| #4 | Hevde at binærsøk returnerer indeks uten å nevne at det må modifiseres (pensums variant returnerer true/false) | 3.4 |
| #5 | Bucket/counting/radix på generelle sammenlignbare elementer — de krever kjent, begrenset verdiområde | 2.3, 2.4, 3.4 |
| #6 | Forveksle DFS fra én node ($O(|E|)$) med DFS-full ($O(|V|+|E|)$) i kjøretidsanalysen | 5.2, 5.5 |
| #7 | Glemme siste kant i en syklisk struktur — Hamiltonsykel-verifikator uten `(C[N−1], C[0])`; syklisk iterasjon uten `mod N` | 7.3, 3.1 |
| #8 | Reversere reduksjonsretningen — å redusere *til* et NP-komplett problem beviser ingenting; redusér *fra* det vanskelige | 7.3 |
| #9 | Forveksle BST-egenskapen (venstre–høyre) med heap-egenskapen (opp–ned) | 4.1, 4.4, 4.5 |
| #10 | Bruke $n$ uten å definere det, eller drøfte uten å referere til O-notasjon (eksplisitt trekk) | 7.2, 8.1 |
| #11 | Linear probing som går utenfor `0..N−1`, eller som ikke overskriver lik nøkkel | 3.1, 3.3 |
| #12 | Uklar/lang pseudokode — «en setning man ikke forstår etter to gjennomlesninger, ignoreres» | 5.5, 8.1 |

---

## Sjangerkatalog A–L (fra skjelettets §3 — gjengis i kap. 0.1)

Tredelingen styrer: **A** = oppvarming; **B–F** = Del 1 (auto-rettet,
antigjetting); **G–L** = Del 2 (skriv pseudokode + resonner), L spenner begge.

| Kode | Sjanger | Del | Form | Hyppighet |
|---|---|---|---|---|
| **A** | Oppvarming — «Hva er en algoritme/datastruktur?» (maks 4 setninger) | Oppv. | kortsvar | **100 %** (2 gratispoeng) |
| **B** | Kjøretidsanalyse fra kode → O (løkketelling) | Del 1 | kortsvar (uttrykk) | **100 %** |
| **C** | Kjøretids- og teori-fakta (sant/usant) | Del 1 | sant/usant | **100 %** (antigjetting) |
| **D** | Sorteringsegenskaper og -valg — stabilitet, in-place, invarianter | Del 1 | sant/usant + valg | **100 %** |
| **E** | Håndkjøring av datastruktur — heap, linear probing, AVL, Huffman; oppgi **kun sluttilstand** | Del 1 | array/tabell (2 p) | minst 1/sett |
| **F** | Matrise-/tabellavkryssing — koble egenskap til algoritme | Del 1 | avkryssing (2 p) | ~4/7 |
| **G** | Tre-algoritmer i pseudokode — InRange, diameter, LCA, checkBST | Del 2 | pseudokode + kjøretid | **86 %** |
| **H** | Grafalgoritmer i pseudokode — SCC, topsort, Prim, Dijkstra (også reversert), avgrenset BFS, 2-fargelegging | Del 2 | pseudokode + kjøretid | hvert sett (2–3) |
| **I** | Hashing/søk i pseudokode — linear-probing-insert, modifisert binærsøk, finn duplikat/par | Del 2 | pseudokode + kjøretid | ~7/7 |
| **J** | ADT-design — mediankø, bøttekø, trie | Del 2 | designskisse + kjøretid | ~3/7 ↑ |
| **K** | Drøft to strategier — kjøretid (verste + forventet) og minne; **definér $n$** | Del 2 | resonnement | ~4/7 ↑ |
| **L** | NP-kompletthet — P/NP-fakta, verifikator, reduksjonsretning | Del 1+2 | sant/usant + begrunnelse | **57 % ↓** |

Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne**
(nivå 3) — forklares i klarspråk ved første bruk, og «perfekt» skrives som «må
sitte / høyeste prioritet» (se Leserkrav, karakter-realisme).

---

## Del 3 er tyngre enn NTNU — og det skal fram

Skjelettet markerer prioritet per del. To steder står det eksplisitt at IN2010
er **tyngre enn NTNUs TDT4120**, og forskjellen er en salgs- og
prioriteringsopplysning studenten har krav på:

1. **Del 3 — hashing / linear probing (100 %).** I TDT4120 er hashing 41 % og
   testes stort sett som fakta. I IN2010 testes den **både** som håndkjøring
   (sjanger E: sett inn nøkler, oppgi hele tabellen) **og** som pseudokode
   (sjanger I: skriv `Insert` med `mod N`-wraparound og overskriving ved lik
   nøkkel), i **hvert eneste sett**. Del 3 skal derfor si dette rett ut i
   Eksamensvinkel-`tip`-en i kap. 3.1 og 3.3: at hashing her er en
   utførelsesferdighet, ikke et faktapunkt, og at studenter som kommer fra et
   NTNU-pensum eller en generisk algoritmebok systematisk undervurderer den.
2. **Del 4 — balanserte trær (43 %).** AVL-rotasjoner håndkjøres i IN2010; i
   TDT4120 har de mindre eksamensvekt. Kap. 4.3 sier det samme kort.

Motsatt vei gjelder **avgrensningen**, som er like verdifull: dynamisk
programmering, maks-flyt/Ford-Fulkerson, masterteoremet/rekurrenser,
Floyd-Warshall og Gale-Shapley er **ikke IN2010-pensum**. Dette står i kap. 7.3
(`tip`-boks) og i Del 0, slik at studenten kan legge bort de tyngste bolkene i
en generisk algoritmebok med god samvittighet. Ingen kapittel bygger på dem.

---

## Forbudt-termer (grep-sjekkes — skal gi 0 treff)

To grep, med ulik strenghet. **Det harde** kjøres som argument 2 til
`sjekk-bok.py` og skal gi 0 treff i ALLE kapitler (porten hopper automatisk over
`in2010-0-1`, som er metakapitlet):

```bash
python3 scripts/hoyskolebok/sjekk-bok.py in2010 \
  "```python|```java|```pseudo|Merge-Sort|Build-Max-Heap|Build-Min-Heap|Heap-Extract-Min|Tree-Insert|Tree-Search|Prioritet: perfekt|en A-besvarelse ville|ville ha drøftet|/bok/"
```

- **```python / ```java / ```pseudo:** boka har ingen Python og ingen Java, og
  taggen er alltid `text` (§P1).
- **CLRS-navn** (`Merge-Sort`, `Build-Max-Heap`, `Heap-Extract-Min`,
  `Tree-Insert`, `Tree-Search`): IN2010 bruker generiske navn (§ Notasjonsstandard).
- **README-/panelkrav:** «Prioritet: perfekt», «en A-besvarelse ville», «ville
  ha drøftet».
- **`/bok/`:** prefikset er fjernet fra plattformen. Alle interne lenker er
  `[kap. X.Y](/in2010/in2010-X-Y)`.

**Det avgrensende** grepet kjøres for hånd, fordi ordene SKAL forekomme ett
sted: avgrensningsavsnittet i kap. 7.3 og kap. 0.1, som forteller studenten at
disse temaene ikke er IN2010-pensum. Alle treff UTENFOR de to filene er avvik:

```bash
grep -l "masterteorem\|Master-teorem\|mastermetoden\|Floyd-Warshall\|Ford-Fulkerson\|Gale-Shapley\|dynamisk programmering\|maks-flyt" \
  src/lib/data/chapters/in2010-*.json | grep -v "in2010-0-1\|in2010-7-3"
```

→ skal gi 0 linjer. Meld i ferdigmeldingen at treffene i 7.3/0.1 er
avgrensningsomtale, ikke pensum.

I tillegg, ikke-grepbare regler som kontrolleres manuelt:

- Ingen unicode-matematikk i prosa (`≤`, `⌊`, `⇒`, `²`, `·`) — se
  notasjonsseksjonen; sjekk med
  `grep -o "[≤≥≈⌊⌋⊆⇒→·²ⁿΣ√]" src/lib/data/chapters/in2010-*.json | sort | uniq -c`
  og verifiser at hvert treff står inne i et ```text-gjerde.
- Ingen `%` som modulo-operator i pseudokode (skriv `mod`).
- Ingen 1-indeksert heap-formel (`i/2`, `2i`, `2i+1` som barn) — boka bruker
  $\lfloor (i-1)/2 \rfloor$, $2i+1$, $2i+2$.

---

## Kryssbok-lenker (verifisert mot disk 29. juli 2026 — alle filene finnes i `src/lib/data/chapters/`)

Lenkeform `[tittel](/<courseId>/<id>)`. Titlene under er de faktiske
kapitteltitlene og skal brukes ordrett. Lenk ALDRI til en fil som ikke finnes
(`sjekk-bok.py` fanger døde lenker). IN1000 er UiOs eget introemne og den
naturligste forkunnskapslenken for en IN2010-student.

| Brukes i | courseId | id | Tittel | Rolle |
|---|---|---|---|---|
| 0.1, 1.2, 1.3 | `in1000` | `in1000-1-3` | Løkker: for, while og range | Løkkene som telles i kode→O |
| 1.3 | `in1000` | `in1000-4-1` | DRILL — Kodesporing: «hva skrives ut?» | Mekanisk sporing som ferdighet |
| 3.4, 2.1 | `in1000` | `in1000-3-1` | Lister | Array-/listetenkning før hashtabellen |
| 3.2, 7.1 | `in1000` | `in1000-3-2` | Ordbøker | Hashmap slik studenten allerede har brukt den |
| 4.1, 5.1 | `in1000` | `in1000-5-1` | Klasser og objekter: `class`, `__init__` og `self` | Node-/objektrepresentasjon (`v.left`, `v.right`) |
| 4.2 | `in1000` | `in1000-8-1` | Nøstede lister og ordbøker | Nøstede strukturer før trær og nabolister |
| 1.1, 1.2 | `tdt4110` | `tdt4110-6-3` | Algoritmedefinisjon, pseudokode og kompleksitet (Big-O) | Mykere første møte med O og pseudokode |
| 2.1, 2.2 | `tdt4110` | `tdt4110-6-1` | Sortering: boblesortering, `.sort()` og gitt `sort_list` | Boblesortering konkret, før invariantene |
| 3.4 | `tdt4110` | `tdt4110-6-2` | Søking: sekvensielt søk og binærsøk | Binærsøk konkret, før den modifiseres |
| 4.2 | `tdt4110` | `tdt4110-5-2` | Rekursjon — spore og skrive | Rekursjon som ferdighet (pensum også her) |
| 1.1 | `r1` | `r1-1-2` | Potenser og logaritmer | $\log_2$ bak $O(\log n)$ |
| 2.1 | `r2` | `r2-1-6` | Induksjonsbevis | Invariant-resonnement (valgfri fordypning) |
| 5.1 | `1t` | `1t-1-7` | Mengdelære | Mengdenotasjon bak $G=(V,E)$ (valgfri) |

Interne lenker: `[kap. X.Y](/in2010/in2010-X-Y)`. Lenker til kapitler som ennå
ikke er skrevet, legges inn først når fila finnes på disk — koordineres av
byggeleder ved wiring.

---

## Prøvekapitler

Sju prøvedeler: **[1, 2, 3, 4, 5, 6, 7]** — fire prøver per temadel, altså **28
prøver**, jf. skjelettets «Prøve-kvote Del N»-linjer (bruk minuttanslagene som
står der). **Del 0 er metadel (ingen prøve). Del 8 er eksamenstrening (ingen
prøve — tre komplette sett).**

Prøvekapittel: id `in2010-<del>-prove`, `chapterNumber` `<del>.P`, tittel
«Prøver til del `<del>`: `<deltittel>`» der deltittelen er `sectionName` fra
skjelettets §2:

| Del | Prøvekapittel-tittel (ORDRETT) | Prøver à |
|---|---|---|
| 1 | Prøver til del 1: Asymptotisk analyse og kjøretidsfakta | 25 · 25 · 30 · 30 min |
| 2 | Prøver til del 2: Sortering og stabilitet | 25 · 25 · 30 · 30 min |
| 3 | Prøver til del 3: Hashing og søk | 25 · 25 · 30 · 30 min |
| 4 | Prøver til del 4: Trær: søketrær, balanserte trær og heap | 25 · 30 · 30 · 30 min |
| 5 | Prøver til del 5: Grafer: representasjon, traversering og komponenter | 25 · 30 · 30 · 35 min |
| 6 | Prøver til del 6: Korteste vei, spenntrær og grådighet | 25 · 30 · 30 · 25 min |
| 7 | Prøver til del 7: Datastruktur-design, drøfting og NP-teori | 30 · 30 · 25 · 25 min |

Innhold:

- `tip`: dekning + tidsbruk, deklarerer «4 prøver à ~X min» (minuttene over) +
  «kan trygt deles over flere kvelder — én prøve per økt», og sier hvor
  flervalget bor (inline i prøven eller i den interaktive quizen).
- `text` **Forkunnskaper** (porten krever «Forkunnskaper» i alle kapitler
  utenom Del 0), med markdown-lenker til delens kapitler.
- Fire `collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med
  nyskrevne oppgaver i eksamens sjangre og full fasit: pseudokode etter §P3,
  poengfordeling per delmoment, og for sjanger E full sporingstavle (§H).
  **Sant/usant-prøver skal angi antigjettings-skaleringen** og be studenten
  regne ut terskelen for netto poeng. Statiske flervalg har STOKKEDE
  fasit-bokstaver.
- Etter hver prøvefasit: avkryssbar selvdiagnose-sjekkliste (☐).
- Kap-referanser i fasitene som markdown-lenker.
- Ingen begrepsbank og ingen quizkvote for prøvekapitler.

Prøvekapitler regnes som vurderingskapitler i `sjekk-bok.py` og er derfor
unntatt kravene om «Typiske feil»-warning og notasjons-/symbolliste. **Men de er
IKKE unntatt §H:** sporingstavler i prøvefasiter genereres programmatisk som
alle andre — det er nettopp i prøvene en feil fasit gjør mest skade, og det var
grunnen til at `sjekk-sporing.py` ble gjort rekursiv 28. juli 2026.

---

## Quiz-kvoten

`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`:

```json
[{ "question": "…", "options": ["riktig", "distraktor", "distraktor", "distraktor"], "explanation": "…" }]
```

Nøyaktig **4 alternativer**, `options[0]` **ALLTID** riktig (runtime stokker
rekkefølgen). Ingen duplikate alternativer.

**Kalibrering (skjelettets dokumenterte avvik):** quizbanken er **direkte Del
1-trening**. Plattformens quiz er flervalg, og Del 1 ER auto-rettede sant/usant
+ korte svar — så quizen speiler eksamen direkte. Innholdet skal være:
sant/usant-utsagn om kjøretid/heap/hashing/graf/sortering/NP, kode→O-forenkling
(ett strammeste uttrykk), «hvilken algoritme passer denne begrensningen»,
korteste-avstander-matrisen, og reduksjonsretning. Selve pseudokode-presisjonen
trenes i `exercise`- og drillkapitlene, ikke i quiz.

**Antigjettings-kalibrering:** minst **1–2 spørsmål per Del 1-kapittel** skal ha
en distraktor som fanger nøyaktig den usikre kandidaten (feilkatalogen #1–#12):
build-heap som $O(n\log n)$, max fra min-heap i $O(\log n)$, quicksort $O(n\log n)$
verste, DFS-full som $O(|E|)$, bucket sort på generelle elementer, «bedre O ⇒
færre steg for all input». Quizen trener *sikkerheten* antigjettingen krever.

**LENGDE-TELL (begge veier).** Fasiten skal ikke kunne gjettes på form:

- Alle fire alternativer skal ha jevn lengde og samme presisjonsgrad. Måltall
  fra `sjekk-kode.py` punkt 7: `options[0]` er unikt lengst i **under 35 %** av
  spørsmålene — og unikt **kortest** i under 35 %. Er alternativene
  kjøretidsuttrykk, er de naturlig like lange; er de setninger, skal de ha
  omtrent samme antall ord.
- `explanation` (2–4 setninger) sier hvorfor fasiten er riktig OG hvilken felle
  hver nære distraktor tester.
- Skriv pseudokode i spørsmål/alternativer i `` `backticks` `` (én linje) eller
  i en ```text-blokk (flere linjer). Kjøretidsuttrykk i LaTeX (`$O(n \log n)$`).

Kontroll før ferdigmelding: `python3 scripts/hoyskolebok/sjekk-kode.py in2010`
(punkt 7), og etter wiring `npx tsx scripts/hoyskolebok/quiz-lengdesjekk.mjs in2010`.

### Kvotetabell (AUTORITATIV — fra skjelettets §5 summeringskontroll)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1 | 14 | 14 | 0 (metadel) |
| 1 | 1.1–1.4 | 80 | 64 | 4 |
| 2 | 2.1–2.4 | 66 | 74 | 4 |
| 3 | 3.1–3.4 | 62 | 62 | 4 |
| 4 | 4.1–4.5 | 80 | 86 | 4 |
| 5 | 5.1–5.5 | 76 | 78 | 4 |
| 6 | 6.1–6.5 | 74 | 74 | 4 |
| 7 | 7.1–7.3 | 40 | 40 | 4 |
| 8 | 8.1–8.4 | 50 | 10 | 0 (3 øvingseksamener) |
| **Sum** | **35 kap.** | **542 ✓ (≥500)** | **502 ✓ (≥500)** | **28 + 3 ØE** |

Per kapittel: se kolonnen «Quiz · Fc» i tittel-tabellen i §0 — **minimum, aldri
under; overskyting er lov**.

> **Avviksnote (må ikke «rettes» av en agent):** skjelettets §1-identitetstabell
> oppgir «Flashcards totalt **504**», mens §5-summeringskontrollen summerer til
> **502**. §5 er den autoritative kvotekilden (skjelettet sier det selv: «verifiser
> mot §8-sjekklisten»), og **502 er det som skal bygges** — begge tall er over
> kravet på 500. Ikke oppfinn to ekstra kort for å treffe 504, og ikke reduser
> noe kapittel under sin kvote.

Flashcards telles som toppnivå `definition`-blokker med `title`. Fordelingen
speiler eksamensformen: de fire 100 %-delene (1 asymptotikk/fakta, 2 sortering,
3 hashing, 5 grafer) pluss heap/tre-delen (4) bærer mest. Øvingseksamenene
(8.2–8.4) har 0 flashcards, men bidrar med quiz.

---

## Tidsbudsjett (etterregnet 29. juli 2026 — brukes i Del 0)

| Blokk | Filer | Minutter |
|---|---|---|
| Kapitler (0.1–8.4) | 35 | **2 570** |
| Prøvekapitler (1.P–7.P, 28 prøver) | 7 | **785** |
| **Sum** | **42** | **3 355 ≈ 56 timer** |

De tre øvingseksamenene utgjør 720 av kapittelminuttene — «Lite tid?»-boksen
skal si at de tas på tid, én per kveld, aldri stablet til slutt. Deltidsruten
(10–12 uker) fordeler ~5 t/uke. Avvik mellom deklarert oppgavetid og sum
deltider skal forklares (lesetid vs. arbeidstid), og «Lite tid?»-boksen sier at
anslagene er LESEtid (×1,5 når du faktisk håndkjører og skriver pseudokode).

---

## Opphavsrett (ufravikelig)

- Alle oppgaver, tall, grafer, frekvenstabeller, stedsnavn og innpakninger er
  **NYSKREVNE**. Algoritmenavn, kjøretidsuttrykk og standardnotasjon er allmenn
  faglig notasjon og kan brukes fritt, men **ingen oppgavetekst, intet
  løsningsforslag og ingen graf fra et reelt IN2010-/INF2220-sett gjengis** —
  heller ikke i omskrevet form som er gjenkjennelig linje for linje.
  Skjelettets mønstereksempler er selv omskrivninger og skal varieres videre,
  ikke kopieres ordrett.
- **Sensorveiledningene er lovlig tilgjengelige** (offentlig institusjon,
  åndsverkloven § 14) og er analysens primærkilde for *hva som gir uttelling*.
  Det gir rett til å bygge på innsikten, ikke til å gjengi teksten. Sensors
  formuleringer parafraseres; poengfordelinger omtales som mønstre («typisk
  2–3 p for riktig algoritmevalg»), ikke som kopierte tabeller.
- **Figur-universet er vårt eget.** Bruk nyskrevne historier og stedsnavn; ikke
  gjenbruk Blindern-tunnelene, DNT-rundturen, «Whops!» eller andre innpakninger
  fra de reelle settene.
- Pensumlitteraturen (Weiss; UiOs eget materiale) refereres med
  forfatter/verk/begrep, aldri sitert i lengde.
- Ingen skjermbilder eller utdrag fra Inspera eller UiOs sider.
- Referanser forfatteren er usikker på merkes `(verifiser)` og løses før
  sluttporten (`sjekk-bok.py` avviser gjenstående markører).

---

## Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json; json.load(open('…'))"` på hver fil du har skrevet;
   ingen trailing commas, ingen uescapede `"`/`\`.
2. **Titler og metadata ordrett** fra tabellen i §0: `title`, `description`,
   `chapterNumber`, `estimatedMinutes` — sjekk tegn for tegn, også tankestrek
   og «DRILL — »-prefiks. En tittel fra byggeprompten er et avvik.
3. **Sporingstavler generert programmatisk** (§H2): oppgi i ferdigmeldingen hvor
   mange tavler du genererte, og at simulatorfilene ligger i scratchpad. Ingen
   tavle skrevet fra hukommelsen.
4. **Pseudokodeporten:** ingen ```python/```java/```pseudo i kapittelfilene;
   alle algoritmer i ```text; ingen CLRS-navn; heap-indeks fra 0; ingen
   masterteorem. Kjør `python3 scripts/hoyskolebok/sjekk-kode.py in2010`
   (fanger quiz-kravene; rekursjon flagges ikke — §R) og
   `python3 scripts/hoyskolebok/sjekk-sporing.py in2010` (skal være grønn;
   forventet «0 sjekket» siden boka ikke har Python).
5. **LaTeX-porten grønn:** `python3 scripts/hoyskolebok/sjekk-latex.py in2010` —
   ingen kontrolltegn utenfor gjerder, ingen KaTeX-feil, ingen løs backslash,
   balanserte `$`. Ingen unicode-matematikk i prosa.
6. **Figurporten grønn** der kapitlet har figurer:
   `python3 scripts/hoyskolebok/sjekk-figurer.py in2010` — og hver ny SVG er
   lastet opp med `scripts/upload-media-storage.ts` (ellers 404 for leseren).
7. **Kvotetelling** mot kvotetabellen (autoritativ: 542 quiz / 502 flashcards):
   toppnivå `definition`-blokker med `title` + antall quizspørsmål per fil.
8. **Begge forbudt-term-grepene** (§ «Forbudt-termer»): det harde = 0 treff i
   alle kapitler; det avgrensende = 0 filer utenfor `in2010-7-3` og
   `in2010-0-1`.
9. **Lenker:** interne kap-referanser er markdown-lenker
   `[kap. X.Y](/in2010/in2010-X-Y)`; ingen `/bok/`-prefiks; kryssbok-lenker kun
   til filene i tabellen.
10. **Læringsløkke:** `content[]` veksler teori → eksempel → oppgave i løkker med
    `exercise`-blokker INLINE. Unntak: prøve-/øvingseksamenkapitler.
11. **Forkunnskapsdekning:** hver `exercise` hviler bare på strukturer og
    algoritmer introdusert tidligere i kapitlet eller i en referert forkunnskap
    — gå gjennom oppgavene dine med skjelettets kapittelrekkefølge i hånden
    (ingen heap før 4.4, ingen topsort før 6.1, ingen SCC før 5.4).
12. **Nybegynner-inngang:** alle sjangerkoder (A–L), feilkoder (#1–#12),
    karakterbokstaver, eksamens-metaspråk og fagsjargong forklart ved første
    bruk (feilkoder: per kapittel); ingen kald kode i `competenceGoals` eller
    første tekstboks; kap. 0.1 har «Slik leser du denne boka»-boksen (type
    `text`/`tip`, ALDRI `definition`).
13. **Notasjons- og pseudokodeliste** i hvert teori-/drillkapittel, med det
    ordrette notis-avsnittet (så `sjekk-bok.py` finner «Symbol- og
    formelliste»), og med ALLE symboler, operasjoner og formler brukt i
    delkapitlet.
14. **Pseudokode-kontrakter** (§P2) i hvert algoritmekapittel: antagelser,
    pre-/postbetingelse, kode, invariant, kjøretid.
15. **Del 2-svarformen** (§P3) i alle G/H/I/J-fasiter: problem navngitt,
    antagelser oppgitt, algoritme, kjøretid som matcher + $n$ definert +
    poengtrapp-notat.
16. **Håndkjøringsdisiplin** (§H4): sluttilstand i eksamensformatet, hele
    hashtabellen med `_`, heap-array fra 0, rotasjonstall + rotverdi for AVL.
17. **Kjøretidspåstander etterregnet** (§P4); ingen gjenstående `(verifiser)`.
18. **Prøve-flervalg:** fasitmønster stokket (aldri «alle a», aldri «alle
    usant»); selvdiagnose-sjekkliste etter hver prøvefasit; antigjettings-
    skalering angitt på sant/usant-prøvene; ingen tom `collapsible`.
19. **hints** utfylt på alle `exercise` (unntatt den merkede kalde banken i
    8.1); første hint røper aldri sluttilstanden eller algoritmen.
20. **Frekvenstall** = skjelettets tall for NETTOPP dette kapitlet (nevner: 7
    sett); kildenoten nevner arkivet slik det faktisk er (§ «Sannferdig
    kildenote»), og modellbesvarelser omtales som nyskrevne.
21. **Deloppgaveformat:** a), b), c) på egen linje med `**a)**`; ingen
    `subTasks`; sjanger-/nivåparentes som ledende tag, ikke i brødteksten.
22. **Øktmerking:** kapitler > 45 min har løkke-tidsanslag eller pausepunkter;
    prøvekapitler deklarerer «4 prøver à ~X min» + deling over flere kvelder.
23. **Juridisk:** innholdet fremstiller seg ALDRI som offisielt eller
    UiO-tilknyttet og lover aldri eksamensutfall.
24. Rapportér kort: filer skrevet, kvotestatus per kapittel, portstatus (kode +
    sporing + LaTeX + figur + json), antall sporingstavler generert, og alt du
    har måttet merke `(verifiser)`.
