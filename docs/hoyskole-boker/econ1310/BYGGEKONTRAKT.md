# Byggekontrakt: ECON1310 — teknisk kontrakt for kapittelforfattere

Denne kontrakten gjelder ALLE forfatter-agenter som bygger kapitler til
`econ1310`. Den definerer eksakt filformat. Faglig innhold styres av
`SKJELETT.md` (per-kapittel-DNA) — les ditt kapittels avsnitt der nøye,
pluss `EKSAMENSANALYSE.md` ved behov for mer kontekst.

## Filplassering

Ett JSON-dokument per kapittel: `src/lib/data/chapters/<kapittel-id>.json`
(f.eks. `econ1310-2-2.json`). IKKE rør `_registry.json`, `_all.json`,
`textbook-courses*.ts` eller `quiz-data*.ts` — wiring gjøres sentralt.

## Kapittel-JSON (toppnivå)

```json
{
  "id": "econ1310-2-2",
  "courseId": "econ1310",
  "chapterNumber": "2.2",
  "title": "Multiplikatoren på tilvekstform: kjerneteknikken",
  "description": "…(én setning fra skjelettet)…",
  "estimatedMinutes": 70,
  "competenceGoals": ["utlede multiplikatoren på endringsform", "…"],
  "content": [ …blokker… ],
  "exercises": []
}
```

`competenceGoals`: 2–4 «kunne …»-formuleringer avledet av skjelettets
innholdskontrakt. `exercises` er alltid tom liste (oppgaver ligger som
blokker i `content`).

## Blokktyper (eksakte felt)

- `text`: `{ "id", "type": "text", "content": "markdown + LaTeX" }`
- `definition`: `{ "id", "type": "definition", "title": "Begrepet", "content": "forklaring" }`
  — **title er OBLIGATORISK** (flashcards genereres automatisk fra
  definition-blokkenes title/content).
- `theorem`: `{ "id", "type": "theorem", "title": "Navn på resultat", "content": "…" }`
- `example`: `{ "id", "type": "example", "title": "Eksempel N: …", "problem": "…", "solution": "…" }`
- `tip`: `{ "id", "type": "tip", "title": "…", "content": "…" }`
- `warning`: `{ "id", "type": "warning", "title": "…", "content": "…" }`
- `exercise`: `{ "id", "type": "exercise", "exercise": { "id", "number": "1", "type": "classic", "difficulty": "lett"|"middels"|"vanskelig", "task": "…", "solution": "…", "hints": ["…"] } }`
  — deloppgaver ved behov: `"subTasks": [{ "label": "a", "task": "…", "solution": "…" }]`
  (da kan `task` være en kort fellesingress). IKKE bruk `solutionVideo`,
  `allowsUpload`, `allowsCanvasDrawing` eller `answer`.
- `collapsible`: `{ "id", "type": "collapsible", "title": "…", "buttonText": "Vis …", "content": [ …blokker… ] }`

Blokk-id-er: `<kapittel-id>-<løpenavn>`, f.eks. `econ1310-2-2-def-1`,
`econ1310-2-2-ex-3`. Unike innen kapitlet.

## Obligatorisk kapittelstruktur (teorikapitler)

Rekkefølge per DNA-regnefag: (1) `tip` «Eksamensvinkel» FØRST, (2) `text`
motivasjon, (3) definisjoner/teoremer, (4) `text` utledning med intuisjon
(kun det skjelettet merker «utledes aktivt»), (5) 2–4 `example` med stigende
nivå — siste på eksamensnivå, (6) `warning` «Typiske feil», (7) 6–12
`exercise` stigende (lett→middels→vanskelig; de vanskelige = eksamenskloner
av sjangrene i skjelettet), (8) `collapsible` «Repetisjonsoppgaver» (4–6
korte oppgaver fra forutsetningskapitlene). Drill-/eksamenskapitler følger
sine DNA-varianter (løsningsoppskrift + gjennomregnet case + 8–15 varianter).

## Begrepsbank (flashcard-kvoten)

Flashcards genereres KUN fra `definition`-blokker på TOPPNIVÅ i `content`
(ikke inni collapsible). Hvert kapittel skal treffe flashcard-kvoten fra
skjelettets summeringstabell slik: kjernebegrepene defineres naturlig i
teksten (pkt. 3 over), og kapitlet avsluttes med en `text`-blokk
`## Begrepsbank til eksamen` fulgt av korte `definition`-blokker (én per
begrep, 1–3 setninger, eksamensrettet formulering) til kvoten er nådd.
Ingen duplikater av begreper som alt er definert tidligere i kapitlet —
kvoten = totalt antall definition-blokker i kapitlet.

## Quiz-kvoten

Quiz skrives IKKE i kapittel-JSON. Hver forfatter skriver i stedet én fil
per kapittel: `src/lib/data/quiz-staging/econ1310-<del>-<nr>.quiz.json` med:

```json
[
  { "question": "Hva skjer med multiplikatoren når $t$ øker?",
    "options": ["Den blir mindre", "…", "…", "…"],
    "explanation": "Skattelekkasjen demper …" }
]
```

**REGEL: options[0] er ALLTID riktig svar** (runtime stokker). Nøyaktig 4
options. Antall spørsmål = kapitlets quiz-kvote i skjelettet. Distraktorene
skal være typiske feil (fortegnsfeil, forvekslede begreper, glemt
skattelekkasje) — ikke tullesvar.

## Leserkrav (ufravikelig — fra produkteier)

- **Kun eksamensrelevant stoff**: hvert avsnitt skal enten være eksamensrelevant
  eller bygge opp mot noe eksamensrelevant. «Kjenne til»-stoff legges sist i
  kapitlet og merkes tydelig (f.eks. «Nivå 3 — bør kjenne til»). Ingen
  leksikonstoff uten eksamensbelegg.
- **Forkunnskaper eksplisitt**: rett etter Eksamensvinkel-blokken kommer en
  `text`-blokk «**Forkunnskaper:** …» som sier (i) hvilke kapitler i DENNE boka
  kapitlet bygger på (nevn kapittelnummer — metadata-prerequisites gir i
  tillegg klikkbare piller automatisk), og (ii) nødvendige forkunnskaper
  UTENFOR boka med markdown-lenke til kapittel i annen bok i systemet, format
  `[Derivasjon (Matematikk for økonomer 4.1)](/bok/bi-okonomi/bi-okonomi-4-1)`.
  Lenk kun til kapitler som faktisk finnes (verifiser id i
  `src/lib/data/chapters/`). Har kapitlet ingen forkunnskaper: si det («Dette
  kapitlet kan leses uten forkunnskaper»).
- **Lett å lese og engasjerende**: korte avsnitt (2–4 setninger), aktiv «du»-form,
  konkrete norske eksempler (renta di, strømregninga, lønnsoppgjøret) før
  formalisme; hvert nytt begrep motiveres med spørsmålet det besvarer. Aldri
  på bekostning av faglig presisjon — ved tvil vinner presisjon.
- **Meningsfulle oppgaver**: hver oppgave skal enten (a) være eksplisitt
  eksamensforankret — da starter løsningen eller oppgaveingressen med hvilken
  eksamenssjanger den trener (f.eks. «Typisk deloppgave (a) på eksamen») —
  eller (b) ha en kontekst som gjør den åpenbart relevant (aktuell norsk
  økonomi, tall studenten kjenner). Ingen «regn ut for øvelsens skyld»-oppgaver.

## Faglig stil (ufravikelig)

- **Holden-notasjon konsekvent**: z-skiftledd ($z^C, z^I, z^T, z^\pi$),
  multiplikator på tilvekstform, renteregel/RR, PK med forventningsledd —
  eksakt slik skjelettets innholdskontrakter angir ligningene. ALDRI
  IS-LM/AD-AS/Solow-apparat.
- Mekanismeforklaring i ord er sensorkravet: hver utledning og hvert
  løsningsforslag forklarer intuisjonen per steg (direkte effekt →
  multiplikatorrunder, dempere/forsterkere).
- LaTeX: `$...$` inline, `$$...$$` display. I JSON-strenger dobles
  backslash: `\\Delta`, `\\frac{1}{1 - c_1(1-t) - b_1}`.
- Norsk bokmål. Løsningsforslag skrives som A-besvarelser.
- **Opphavsrett**: alle oppgaver/case NYSKREVNE (egne tall, egne kontekster);
  sjangrene fra skjelettet er malen, aldri originaloppgavene.

## Prøve-kapitler (egne id-er)

Temaprøvene fra SKJELETT §4 bygges som egne kapitler med id
`econ1310-<del>-prove`, chapterNumber `<del>.P`, tittel «Prøver til del <del>:
<deltittel>». Innhold: `tip` (hva prøvene dekker + anbefalt tidsbruk) og
deretter fire `collapsible` («Prøve 1» … «Prøve 4», buttonText «Vis prøve N»)
som hver inneholder oppgavene (exercise-blokker med full solution) i det
omfanget skjelettets prøvetabell angir. Ingen begrepsbank/quiz-kvote for
prøve-kapitler med mindre skjelettet sier noe annet.

## Kvalitetskrav før du er ferdig

1. Hver JSON-fil validerer med `python3 -c "import json; json.load(open('…'))"`.
2. Ingen trailing commas, ingen uescapede `"` eller `\` i strenger
   (LaTeX-backslash = `\\`).
3. Kvotene stemmer: tell definition-blokker og quiz-spørsmål mot skjelettets
   summeringstabell for dine kapitler.
4. Notasjonssjekk: grep etter `LM`, `AD-AS`, `Solow` i egne filer — skal gi 0 treff.
