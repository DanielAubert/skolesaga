# Byggekontrakt: JUS1111 — teknisk kontrakt for kapittelforfattere

Gjelder ALLE forfatter-agenter for `jus1111`. Faglig innhold styres av
`SKJELETT.md` (per-kapittel-DNA) — les ditt kapittels avsnitt nøye, pluss
`EKSAMENSANALYSE.md` ved behov. Denne kontrakten definerer format og krav.

## Filplassering

Ett JSON-dokument per kapittel: `src/lib/data/chapters/<kapittel-id>.json`
(f.eks. `jus1111-1-1.json`). IKKE rør `_registry.json`, `_all.json`,
`textbook-courses*.ts` eller `quiz-data*.ts` — wiring gjøres sentralt.
Generer gjerne JSON via python `json.dump` (garantert gyldig escaping).

## Kapittel-JSON (toppnivå)

```json
{
  "id": "jus1111-1-1",
  "courseId": "jus1111",
  "chapterNumber": "4",
  "title": "Tilbud og aksept — avtalelovens bindingsmekanikk",
  "description": "…(fra skjelettet)…",
  "estimatedMinutes": 55,
  "competenceGoals": ["drøfte binding etter avtalelovens modell", "…"],
  "content": [ …blokker… ],
  "exercises": []
}
```

`chapterNumber` = skjelettets `number` (løpenummer 1–36; prøvekapitler
`<del>.P`). `competenceGoals`: 2–4 «kunne …»-formuleringer fra regelkontrakten.

## Blokktyper (eksakte felt)

Som i plattformen (referanse: `src/lib/data/chapters/econ1310-2-1.json` for
strukturmønster — men jus-innhold, ikke matte):
- `text`: `{ "id", "type": "text", "content": "markdown" }`
- `definition`: `{ "id", "type": "definition", "title": "Begrep/§", "content": "…" }`
  — **title OBLIGATORISK** (flashcards genereres fra disse; i jus:
  paragraf ↔ regelinnhold, begrep ↔ vilkårsliste)
- `example`: `{ "id", "type": "example", "title": "…", "problem": "kort faktum", "solution": "drøftelse slik en A-besvarelse gjør det" }`
- `tip` / `warning`: `{ "id", "type", "title", "content" }`
- `exercise`: `{ "id", "type": "exercise", "exercise": { "id", "number", "type": "classic", "difficulty": "lett"|"middels"|"vanskelig", "task", "solution", "hints": [] } }`
  — subTasks ved behov. IKKE solutionVideo/allowsUpload/allowsCanvasDrawing/answer.
- `collapsible`: `{ "id", "type": "collapsible", "title", "buttonText", "content": [blokker] }`

Blokk-id-er: `<kapittel-id>-<løpenavn>` (unik i kapitlet).

## Kapittelstruktur per kapitteltype (fra DNA-jus.md)

- **Regelkapittel**: (1) `tip` Eksamensvinkel, (2) `text` **Forkunnskaper**
  (se Leserkrav), (3) `text` plassering, (4) `definition` hovedregler/-vilkår
  (paragraf i title), (5) `text` vilkårene ett for ett med tolkningsmomenter
  og domsreferanser, (6) 2–3 `example` subsumsjonseksempler (ett klart + ett
  tvilsomt), (7) `warning` typiske feil, (8) 4–8 `exercise` (minipraktikum +
  kontrollspørsmål), (9) `collapsible` «Paragraf- og domsregister»,
  (10) begrepsbank-definisjoner til kvoten.
- **Typetilfellekapittel**: eksamensvinkel → forkunnskaper → tvistepunkt-kart →
  gjennomdrøftet variant med margkommentarer → 3–6 faktumvarianter som flytter
  tvilen → begrepsbank.
- **Praktikum/modellbesvarelse** (Del 5): nyskrevet praktikum → `collapsible`
  A-besvarelse → `collapsible` kommentert svakere besvarelse (C eller
  bestått-på-marginen, per skjelettet) → `tip` Sensorblikket (momentliste/vekt).
- **Prøvekapittel** (`jus1111-<del>-prove`, chapterNumber `<del>.P`, tittel
  «Prøver til del <del>: <deltittel>»): `tip` (dekning + tidsbruk) + fire
  `collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med oppgaver
  og fasit strukturert «må-punkter / pluss-punkter / feller» (skjelettets
  prøve-kvote-linje per del sier fokus). Ingen quiz/begrepsbank.

## Leserkrav (ufravikelig — fra produkteier; SKAL inn i førsteutkastet)

- **Forkunnskaper-blokk** rett etter Eksamensvinkel: (i) kapitler i denne boka
  kapitlet bygger på (kapittelnummer), (ii) forkunnskaper utenfor boka med
  markdown-lenke til eksisterende kapittel i annen bok, format
  `[tittel](/bok/<courseId>/<chapterId>)` — sjekk at målfilen finnes i
  `src/lib/data/chapters/`. Jus har få kryssbok-behov; «Dette kapitlet kan
  leses uten forkunnskaper» er ofte riktig for Del 0–1.
- **Kun eksamensrelevant**: hvert avsnitt eksamensrelevant eller oppbyggende;
  «kjenne til»-stoff sist og merket.
- **Lett å lese og engasjerende**: korte avsnitt, «du»-form, konkret
  hverdagsjuss-knagg før paragrafene (bruktbilen, Finn-annonsen,
  håndverkeren) — presisjon vinner ved tvil.
- **Meningsfulle oppgaver**: hver oppgave merkes med hva den trener
  («(Typetilfelle: avtalebinding — gjenganger i ~10 av 30 sett.)» eller
  «(Skjult delspørsmål-drill: § 4 (2).)»).

## Faglig stil (ufravikelig for jus)

- **Metode over materie**: alle løsningsforslag disponeres krav → grunnlag →
  vilkår → subsumsjon → konklusjon. Regelgjengivelse uten subsumsjon
  forekommer ALDRI i et løsningsforslag.
- **Paragrafhenvisninger presise** (lov + § + ledd, f.eks. «kjl. § 27 (2)»).
  Domsreferanser med navn; referanser skjelettet merker *(verifiser)*
  VIDEREFØRES med markeringen `(verifiser)` i innholdet — fase 6 verifiserer
  og fjerner markeringen. Ikke gjett Rt-årganger.
- **Pensumavgrensning**: familierett/arverett er IKKE pensum — null omtale.
  Hjemmelsfeller (angrerettloven ved privatsalg, skl. § 5-1-forveksling,
  produktansvarsloven) drilles som AVVISNINGSØVELSER der skjelettet sier det.
- **Opphavsrett**: alle faktum NYSKREVNE (nye parter/hendelser/beløp);
  eksamenssjangrene er malen, aldri originaloppgavene.
- Norsk bokmål. Ingen LaTeX nødvendig; beløp skrives som tekst.

## Quiz-kvoten

Per kapittel-kvote står i skjelettets kapittelavsnitt («Kvote: quiz N ·
flashcards M») og kvotesammendraget er fasit (sum 546/532). Skriv
`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`:
`[{ "question", "options": [4 stk, options[0] ALLTID riktig], "explanation" }]`
Distraktorer = reelle feller (feil hjemmel, forvekslede vilkår, «helhets-
vurdering»). Prøvekapitler har ingen quiz.

## Kvalitetskrav før ferdigmelding

1. `python3 -c "import json; json.load(open('…'))"` på hver fil.
2. Kvotetelling mot skjelettet (definition-blokker + quiz).
3. Grep i egne filer: `familierett|arverett|arveloven|ekteskapsloven` = 0 treff.
4. Alle kryssbok-lenker peker på eksisterende kapittelfiler.
