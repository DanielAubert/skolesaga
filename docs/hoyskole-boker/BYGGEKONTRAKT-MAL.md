# Byggekontrakt-mal (generisk) — instansieres per fag i fase 3

Når et fag skal bygges: kopier denne til `<emne>/BYGGEKONTRAKT.md`, erstatt
`<emne>`/`<EMNEKODE>` og fyll inn fagspesifikk stil-seksjon fra SKJELETTETS
identitetsseksjon (notasjonsregler, forbudt-termer, arketypesærtrekk).
Referanse-instansieringer: `econ1310/BYGGEKONTRAKT.md` (regnefag),
`jus1111/BYGGEKONTRAKT.md` (jus).

## Filplassering
Ett JSON-dokument per kapittel: `src/lib/data/chapters/<kapittel-id>.json`.
IKKE rør `_registry.json`, `_all.json`, `textbook-courses*.ts`, `quiz-data*.ts`
— wiring gjøres sentralt (fase 5). Generer JSON via python `json.dump`.

## Kapittel-JSON (toppnivå)
`{ id, courseId: '<emne>', chapterNumber: '<del>.<nr>' (fra skjelettet),
title, description, estimatedMinutes, competenceGoals: [2–4 «kunne …»],
content: [blokker], exercises: [] }`

## Blokktyper (eksakte felt — referanse: econ1310-2-1.json)
- `text`: `{id, type, content}` (markdown + LaTeX `$...$`/`$$...$$`, `\\` i JSON)
- `definition`: `{id, type, title, content}` — **title OBLIGATORISK**
  (flashcards genereres KUN fra toppnivå definition-blokker med title)
- `theorem`: `{id, type, title, content}`
- `example`: `{id, type, title, problem, solution}` (solution = A-besvarelse)
- `tip` / `warning`: `{id, type, title, content}`
- `exercise`: `{id, type, exercise: {id, number, type: 'classic', difficulty:
  'lett'|'middels'|'vanskelig', task, solution, hints: []}}` (+subTasks ved
  behov). ALDRI solutionVideo/allowsUpload/allowsCanvasDrawing/answer.
- `collapsible`: `{id, type, title, buttonText, content: [blokker]}`
Blokk-id-er: `<kapittel-id>-<løpenavn>`, unike i kapitlet.

## Obligatorisk kapittelstruktur
Per arketypens kapittel-DNA (DNA-regnefag/DNA-jus/DNA-drofting) og skjelettets
per-kapittel-kontrakt. Alltid, i denne rekkefølgen først i kapitlet:
1. `tip` **Eksamensvinkel** (frekvens, vekt, sjangre — fra skjelettet)
2. `text` **Forkunnskaper** (kapitler i boka + kryssbok-lenker
   `[tittel](/bok/<courseId>/<chapterId>)` — KUN til kapitler som finnes i
   `src/lib/data/chapters/`; «kan leses uten forkunnskaper» hvis ingen)
3. `collapsible` **Symbol- og formelliste** (title «Symbol- og formelliste»,
   buttonText «Vis symboler og formler»): markdown-tabell `| Symbol | Betydning |`
   + «**Formler i dette delkapitlet:**» med display-LaTeX + tolkning. ALLE
   symboler/formler brukt i delkapitlet — per delkapittel, ikke arv. Unntak
   kun for helt symbolfrie kapitler.
Og alltid: `warning` **Typiske feil** (fra skjelettet) + begrepsbank-
definisjoner til flashcard-kvoten + `collapsible` repetisjon (teorikapitler).

## Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»)
- Kun eksamensrelevant stoff; «kjenne til» sist og merket.
- Korte avsnitt (2–4 setninger), «du»-form, konkret norsk knagg før
  formalisme — presisjon vinner ved tvil.
- Hver oppgave synlig eksamensforankret («(Eksamenssjanger X — …)») eller
  åpenbart relevant.
- **Læringsløkke Teori → Eksempel → Oppgave:** `content[]` veksler teori
  (`text`/`definition`/`theorem`) → `example` → `exercise` i gjentatte små
  løkker gjennom delkapitlet, IKKE all teori øverst og alle oppgaver samlet
  nederst. `exercise`-blokkene plasseres INLINE i `content[]` rett etter
  eksempelet/teorien de hører til (plattformen renderer inline oppgaver).
- **Ingen usett forkunnskap:** ingen oppgave får kreve et begrep, en regel, en
  formel eller en metode som ikke er introdusert tidligere i kapitlet (t.o.m.
  eksempelet rett foran) eller i et tidligere kapittel referert i Forkunnskaper-
  blokken. Bygg oppgaveprogresjonen bit for bit.

## Prøvekapitler
Id `<emne>-<del>-prove`, chapterNumber `<del>.P`, tittel «Prøver til del
<del>: <deltittel>»: `tip` (dekning + tidsbruk) + `text` Forkunnskaper + fire
`collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med oppgaver og
full fasit (jus/drøfting: «må-punkter / pluss-punkter / feller»-struktur).
Ingen quiz/begrepsbank.

## Quiz
`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`:
`[{question, options: [4 stk — options[0] ALLTID riktig], explanation}]`.
Kvote per kapittel = skjelettets kvotesammendrag (AUTORITATIVT — aldri
overstyr). Distraktorer = reelle feller fra analysen.

## Opphavsrett (ufravikelig)
Alle oppgaver/case/faktum NYSKREVNE (egne tall, parter, kontekster) —
eksamenssjangrene er malen, aldri originaloppgavene. Pensum refereres,
aldri siteres i lengde. Referanser fag-agenten er usikker på merkes
`(verifiser)` og løses i fase 6 (jus: mot Lovdata).

## Fagspesifikk stil (FYLLES INN per fag fra skjelettets identitetsseksjon)
- Notasjonsstandard: …
- Forbudt-termer (grep-sjekkes): …
- Arketypesærtrekk (modellbesvarelser/figur-i-ord/R-kode/…): …

## Kvalitetskrav før ferdigmelding (per agent)
1. `python3 json.load` på hver fil; 2. kvotetelling mot skjelettet
(definitions + quiz); 3. fagets forbudt-termer-grep = 0; 4. kryssbok-lenker
peker på eksisterende filer; 5. **læringsløkke**: `content[]` veksler
teori→eksempel→oppgave i løkker med `exercise`-blokker inline (ikke all teori
topp / alle oppgaver bunn); 6. **forkunnskapsdekning**: gå gjennom hver
`exercise` og bekreft at den bare hviler på stoff introdusert tidligere i
kapitlet eller i en refererte forkunnskap — ingen usett begrep/regel/formel.
