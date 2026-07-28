# GJENOPPTAK — tre bøker under bygging (startet 24. juli 2026)

## STATUS 25. juli 2026

### Forrige trio — FERDIG OG LIVE I PRODUKSJON

| Bok | Filer | Flashcards | Quiz | Figurer | Verifikasjon |
|---|---|---|---|---|---|
| FYS1001 Innføring i fysikk (UiO) | 42 | 550 | 558 | 109 | ~1 880 sjekker, 48 fiks |
| ECON2220 Mikroøkonomi 2 (UiO) | 41 | 554 | 570 | 53 | ~2 400 sjekker, ~60 fiks |
| ECON2310 Makroøkonomi 2 (UiO) | 35 | 542 | 528 | 54 | ~5 100 sjekker, ~40 fiks |

Landet på main (`66b95d97`, rein fast-forward) og verifisert på www.skolesaga.no:
alle tre bokforsider 200 med riktig tittel, kapittelruter + quiz + flashcards 200
uten LaTeX-feil, figurer 200 `image/svg+xml` fra Storage.

**Felle ved prod-verifisering:** `/<emne>` svarer **200 også når boka ikke finnes**
(siden rendrer «Kurs ikke funnet» med statuskode 200). Sjekk alltid på INNHOLD
(`grep` etter boktittelen), ikke statuskode. Deploy tar ~5 min fra push.

### Nåværende trio — UNDER BYGGING (startet 25. juli 2026)

| Bok | Kapitler | Arbeidstre | Branch | Status |
|---|---|---|---|---|
| ECON2130 Statistikk 1 (UiO) | 35 | `.claude/worktrees/bok-econ2130` | `bok/econ2130` | 🔄 steg 0 |
| FYS1120 Elektromagnetisme (UiO) | 32 | `.claude/worktrees/bok-fys1120` | `bok/fys1120` | 🔄 steg 0 |
| IN1900 Programmering for realfag (UiO) | 35 | `.claude/worktrees/bok-in1900` | `bok/in1900` | 🔄 steg 0 |

Alle tre er utgått fra main `66b95d97`. Skjelett + eksamensanalyse var ferdige og
KVALITETSPORT-godkjente fra før. Steg 0 lager BYGGEKONTRAKT.md, BOKCONFIG.json,
GJENOPPTAK.md og FIGUR-BESTILLINGER.md per bok.

**Egenart å passe på i denne trioen:**
- **econ2130** er R-integrert (2025-regimet er hands-on med CSV) — kodekontrakt for R,
  og all vist kode skal være kjørbar.
- **fys1120** har eget Python-spor i Del 8 (100 % av eksamenene siden 2018) og er
  figurtungt. Fortegn og retning er faglig innhold: fys1001 hadde både omvendt
  omløpsretning for en ladd partikkel og en figur med fysisk umulig kraftretning.
- **in1900** er plattformens **første kodefag-bok**. Kodekontrakten setter presedens:
  kjørbar kode, ekte utskrift (ikke skrevet fra hukommelsen), ODESolver-signatur
  post-2023, rekursjon forbudt. NB: TAB er lovlig inne i ```-kodeblokker men er en
  feil ellers — `sjekk-latex.py` skiller nå på det.

## Landingsoppskrift (bruk `los-wiring-konflikt.py`)

```bash
git merge --no-commit --no-ff bok/<emne>
python3 scripts/hoyskolebok/los-wiring-konflikt.py <emne> COURSE_<EMNE>
git add -A src/ docs/ scripts/ public/ && npx tsc --noEmit
python3 scripts/hoyskolebok/sjekk-bok.py <emne>
python3 scripts/hoyskolebok/sjekk-latex.py <emne>
python3 scripts/hoyskolebok/last-opp-figurer.py <arbeidstre> <emne>
python3 scripts/hoyskolebok/sjekk-figurer.py <emne>
npm run build && kill -9 $(lsof -ti :3063); PORT=3063 npm run start   # prod-curl
```

## Hvor arbeidet foregår

| Bok | Kapitler | Arbeidstre | Branch |
|---|---|---|---|
| FYS1001 Innføring i fysikk (UiO) | 35 | `.claude/worktrees/bok-fys1001` | `bok/fys1001` |
| ECON2310 Makroøkonomi 2 (UiO) | 29 | `.claude/worktrees/bok-econ2310` | `bok/econ2310` |
| ECON2220 Mikroøkonomi 2 (UiO) | 34 | `.claude/worktrees/bok-econ2220` | `bok/econ2220` |

Hvert arbeidstre er et eget git-arbeidstre på egen branch, utgått fra `main`
(`0cc69421`). De deler ikke indeks, så flere agenter kan committe samtidig uten
å tråkke på hverandre. Rammeverket (EKSAMENSANALYSE.md + SKJELETT.md) er ferdig
og KVALITETSPORT-godkjent for alle tre.

## Måle fremdrift — én kommando per bok

```bash
python3 scripts/hoyskolebok/status-bok.py fys1001      # full oversikt per del
python3 scripts/hoyskolebok/status-bok.py fys1001 --mangler   # bare id-ene som gjenstår
```

Skriptet leser **disk**, ikke rapporter: det sammenligner kapittel-id-ene
skjelettet lover med JSON-filene i `src/lib/data/chapters/`, teller
flashcard-definisjoner og oppgaver, og flagger ugyldig JSON. Det er fasiten på
hvor langt boka er kommet — kjør det først, alltid.

## Byggeoppdrag (hvem eier hvilke kapitler)

Hver bok har sin egen `docs/hoyskole-boker/<emne>/GJENOPPTAK.md` med den
detaljerte tabellen (agent → kapittel-id-er). Grovinndelingen:

- **fys1001 (6 oppdrag):** A1 = Del 0+1 · A2 = Del 2+3 · A3 = Del 4 · A4 = Del 5+6 · A5 = Del 7 · A6 = Del 8 (eksamenstrening)
- **econ2310 (5 oppdrag):** B1 = Del 0+1 · B2 = Del 2+3 · B3 = Del 4 · B4 = Del 5+6 · B5 = Del 7
- **econ2220 (7 oppdrag):** C1 = Del 0+1 · C2 = Del 2 · C3 = Del 3 · C4 = Del 4 · C5 = Del 5 · C6 = Del 6+7 · C7 = Del 8

Byggeagentene committer **etter hvert ferdige kapittel**, ikke bare på slutten.
Et avbrudd koster derfor maks ett kapittel, og `git log` i arbeidstreet viser
nøyaktig hva som er landet.

## Fasene per bok (BYGGEPLAN-MAL.md styrer)

1. **Steg 0** — BYGGEKONTRAKT.md + BOKCONFIG.json + GJENOPPTAK.md.
2. **Steg 1** — byggebølge: kapittelforfatterne over.
3. **Steg 2** — wiring: `python3 scripts/hoyskolebok/wire-bok.py <emne>`
   (COURSE-entry, registry, quiz-data, institusjoner), så
   `python3 scripts/hoyskolebok/sjekk-bok.py <emne>` → BOKPORT.
4. **Steg 3** — verifikatorbølge: etterregn ALLE fasiter numerisk (python/sympy).
5. **Steg 4** — sluttport: studentpanel-port, KaTeX-port, build, prod-curl, merge
   main inn, push.

## Portene (kjør alle tre før «ferdig»)

```bash
python3 scripts/hoyskolebok/sjekk-bok.py   <emne>   # struktur, kvoter, BOKPORT
python3 scripts/hoyskolebok/sjekk-latex.py <emne>   # 6 LaTeX-klasser, LATEX-PORT
python3 scripts/hoyskolebok/sjekk-figurer.py <emne> # 404 i produksjon, FIGURPORT
```

`sjekk-latex.py` fanger seks feilklasser som alle har nådd produksjon: kontrolltegn
fra enkel backslash (`\text` -> TAB, rendrer galt UTEN KaTeX-feil), KaTeX-feil,
løs avsluttende backslash, gåseøyne i matte (ingen glyffmetrikk), **ubalansert `$`
i ett felt** (avkuttet formel -> resten vises som kilde) og **bart `%` i matte**
(starter LaTeX-kommentar og spiser resten). `sjekk-figurer.py` HTTP-sjekker hver
figurreferanse mot Storage — «fila ligger i repoet» beviser ingenting, siden
bildene serveres fra Storage og 196 av 596 referanser er Storage-bare.

## Faste feller (dyrekjøpt erfaring — les før du fortsetter)

- **Mål alltid disk før du bygger videre.** Døde agenter etterlater som regel
  ferdige filer; å bygge på nytt er sløsing. `status-bok.py` er laget for dette.
- **KaTeX-port før «ferdig»:** kjør alle `$…$`/`$$…$$` gjennom
  `katex.renderToString` og let etter `katex-error`. `\begin{psmallmatrix}`
  finnes ikke i repoets KaTeX, og en formel som ender på løs backslash knekker
  fordi rendereren `.trim()`-er strengen.
- **Ingen duplikat-datasett:** drilloppgaver og prøver skal ha egne tall — ikke
  gjenbruk av gjennomregnede eksempler i samme bok.
- **`_registry.json` har to nøkler** (`chapterIds` OG `aliases`) — behold begge
  ved merge, ellers krasjer /quiz i build.
- **Prod-curl:** `pkill -f "next start"` dreper ikke serveren (den heter
  `next-server`). Bruk `kill -9 $(lsof -ti :PORT)`, ellers tester du gammel build.
- **SVG-er må lastes opp til Supabase Storage** før deploy
  (`npx tsx scripts/upload-media-storage.ts`), ellers gir hver figur 404 i
  produksjon — bildene serveres fra Storage, ikke fra `public/`. Gjelder alle
  nye figurer agentene lager. Verifiser med curl mot
  `<SUPABASE_URL>/storage/v1/object/public/media/images/textbook/<emne>/<fil>.svg`.
- **Kjede-landing av to bøker:** når bok B merges inn i en branch som alt har
  bok A, interleaver git hunkene i `textbook-courses-hoyskole.ts` (begge
  kursobjekter ender med identiske linjer, som git leser som felles kontekst).
  «Behold begge hunks» gir da en HYBRID av de to bøkene. Riktig oppskrift: ta
  HEAD-versjonen av fila og føy hele `export const COURSE_<B>`-blokka på
  verbatim fra bokbranchen. `_registry.json` løses som union av BEGGE nøkler.
- **Flashcards ligger på KURSNIVÅ**, ikke kapittelnivå: prod-curl skal treffe
  `/<emne>/flashcards`, ikke `/<emne>/<kap>/flashcards` (404). Rutene
  `<kap>/trening` og `<kap>/oppgave` gir 404 også i live bøker — ikke et avvik.
- **Posisjonsreferanser i quizforklaringer er alltid feil:** rendereren stokker
  alternativene (`quiz-client.tsx`: «Shuffle options»), så «alternativ 2» eller
  «Alternativ b)» peker på en rekkefølge studenten aldri ser. Siter innholdet i
  svaret i stedet. Alle 51 i plattformen er nå rettet — hold tallet på 0.
- **Fasit må ikke være systematisk KORTEST heller.** LENGDE-TELL gjelder begge
  veier: en fasit som alltid er det korteste alternativet gir samme gratis-signal
  som en som alltid er lengst. Rett det ved å KORTE distraktorene, ikke ved å
  blåse opp fasiten.
- **Figurbestillinger:** agentene skriver ikke SVG selv i econ-bøkene; de fører
  `docs/hoyskole-boker/<emne>/FIGUR-BESTILLINGER.md`. Den lista er arbeidsordren
  for figurgenereringen før sluttporten.

## Gjenopptakssetning (lim inn i ny økt)

> Les docs/hoyskole-boker/GJENOPPTAK-3-BOKER.md og
> docs/hoyskole-boker/<emne>/GJENOPPTAK.md, kjør
> `python3 scripts/hoyskolebok/status-bok.py <emne>` for å måle fremdrift på
> disk, og fortsett byggingen av `<emne>` etter BYGGEPLAN-MAL.md fra det steget
> statusen viser. Bygg aldri på nytt det som allerede ligger på disk.
