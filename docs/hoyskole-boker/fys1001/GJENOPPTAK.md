# Gjenopptak — FYS1001 (UiO)

- **Branch:** `bok/fys1001`
- **Arbeidsmappe:** `.claude/worktrees/bok-fys1001` (eget git-arbeidstre — bygg KUN her)
- **Kilder:** `docs/hoyskole-boker/fys1001/{SKJELETT,EKSAMENSANALYSE,BYGGEKONTRAKT}.md` + `BOKCONFIG.json`
- **Omfang:** 35 kapitler + 7 prøvekapitler (del 1–7) · 550 quiz · 505 flashcards · 2 665 min

## Måle fremdrift fra disk (aldri gjett)

```bash
python3 scripts/hoyskolebok/status-bok.py fys1001            # full status
python3 scripts/hoyskolebok/status-bok.py fys1001 --mangler  # bare id-ene som gjenstår
```

Merk: `status-bok.py` ligger usporet i hovedtreets `scripts/hoyskolebok/` og
finnes ikke på denne branchen — kopier den inn, eller kjør fra hovedtreet.

## Agent-oppdrag (steg 2 — bygging)

| Agent | Deler | Kapittel-id-er | Prøvekap. | Quiz/FC |
|---|---|---|---|---|
| A1 | Del 0 + Del 1 | `fys1001-0-1`, `fys1001-1-1` … `fys1001-1-6` | `fys1001-1-prove` | 120 / 105 |
| A2 | Del 2 + Del 3 | `fys1001-2-1` … `fys1001-2-4`, `fys1001-3-1` … `fys1001-3-3` | `fys1001-2-prove`, `fys1001-3-prove` | 125 / 100 |
| A3 | Del 4 | `fys1001-4-1` … `fys1001-4-5` | `fys1001-4-prove` | 80 / 80 |
| A4 | Del 5 + Del 6 | `fys1001-5-1` … `fys1001-5-4`, `fys1001-6-1` … `fys1001-6-3` | `fys1001-5-prove`, `fys1001-6-prove` | 120 / 115 |
| A5 | Del 7 | `fys1001-7-1` … `fys1001-7-4` | `fys1001-7-prove` | 60 / 60 |
| A6 | Del 8 (eksamenstrening) | `fys1001-8-1` … `fys1001-8-5` | ingen | 45 / 45 |

Sum: 35 kapitler + 7 prøvekapitler, 550 quiz, 505 flashcards (kvoter per
kapittel: BYGGEKONTRAKT §Kvoter — autoritativ). A6 leser HELE skjelettet
(Del 8 gjenbruker hele boka) og bygges sist.
Rekkefølge ellers: A1 → A2 → A3 (midtveispensum ferdig) → A4 → A5 → A6.

## Etter bygging

Neste steg etter at alle kapitler er på disk: wiring
(`scripts/hoyskolebok/wire-bok.py`), deretter `sjekk-bok.py`, verifikatorbølge, sluttport.

Sluttporten krever `npm run build` grønn, `npx tsc --noEmit` ren og prod-server
+ curl mot kapittelrutene (200 + kapittelspesifikk streng) før noe meldes ferdig.
