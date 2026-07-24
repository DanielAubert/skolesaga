# GJENOPPTAK — ECON2220 Mikroøkonomi 2 (UiO)

Branch: `bok/econ2220` · Arbeidstre:
`.claude/worktrees/bok-econ2220` (eget git-arbeidstre, egen indeks — commit
derfra, aldri fra hovedtreet). Alt arbeid ligger på disk og i git.

## Mål fremdrift FØRST — alltid

```bash
python3 scripts/hoyskolebok/status-bok.py econ2220            # oversikt per del
python3 scripts/hoyskolebok/status-bok.py econ2220 --mangler  # bare id-ene som gjenstår
```

Skriptet leser disk (skjelettets kapittel-id-er mot `src/lib/data/chapters/`),
teller definisjoner/oppgaver og flagger ugyldig JSON. NB: det ble lagt til på
`main` etter at denne branchen ble skilt ut — hent det ved behov med
`git checkout main -- scripts/hoyskolebok/status-bok.py`.

## Byggeoppdrag (agent → kapittel-id-er, 41 filer totalt)

| Oppdrag | Del | Kapittel-id-er |
|---|---|---|
| C1 | 0 + 1 | `econ2220-0-1` · `econ2220-1-1` · `econ2220-1-2` · `econ2220-1-3` · `econ2220-1-prove` |
| C2 | 2 | `econ2220-2-1` · `econ2220-2-2` · `econ2220-2-3` · `econ2220-2-4` · `econ2220-2-5` · `econ2220-2-prove` |
| C3 | 3 | `econ2220-3-1` · `econ2220-3-2` · `econ2220-3-3` · `econ2220-3-4` · `econ2220-3-prove` |
| C4 | 4 | `econ2220-4-1` · `econ2220-4-2` · `econ2220-4-3` · `econ2220-4-4` · `econ2220-4-5` · `econ2220-4-prove` |
| C5 | 5 | `econ2220-5-1` · `econ2220-5-2` · `econ2220-5-3` · `econ2220-5-4` · `econ2220-5-5` · `econ2220-5-prove` |
| C6 | 6 + 7 | `econ2220-6-1` · `econ2220-6-2` · `econ2220-6-3` · `econ2220-6-prove` · `econ2220-7-1` · `econ2220-7-2` · `econ2220-7-3` · `econ2220-7-prove` |
| C7 | 8 | `econ2220-8-1` · `econ2220-8-2` · `econ2220-8-3` · `econ2220-8-4` · `econ2220-8-5` |

Hver agent leser `SKJELETT.md` (sitt kapittelavsnitt) + `BYGGEKONTRAKT.md` og
committer **etter hvert ferdige kapittel** (`git commit --no-verify`, kun egne
filer). Kvoter: quiz 570 · flashcards 510 (kvotetabellen i byggekontrakten er
autoritativ). Quiz legges i `src/lib/data/quiz-staging/<id>.quiz.json`.

## Etterpå

Neste steg etter at alle kapitler er på disk: wiring
(`scripts/hoyskolebok/wire-bok.py`), deretter `sjekk-bok.py`, verifikatorbølge,
sluttport.
