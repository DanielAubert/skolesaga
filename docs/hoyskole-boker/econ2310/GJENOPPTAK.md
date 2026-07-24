# Gjenopptak: ECON2310 Makroøkonomi 2 (UiO)

- **Branch:** `bok/econ2310`
- **Arbeidsmappe:** `.claude/worktrees/bok-econ2310` (eget git-arbeidstre — bruk KUN denne)
- **Status nå:** steg 0 ferdig (BYGGEKONTRAKT.md, BOKCONFIG.json, GJENOPPTAK.md). Ingen kapittelfiler på disk.

## Sjekk status

```bash
python3 scripts/hoyskolebok/status-bok.py econ2310
```

## Agent-oppdrag (kapittel-id-er fra SKJELETT.md)

| Agent | Deler | Kapittel-id-er | Quiz · FC |
|---|---|---|---|
| **B1** | Del 0 + Del 1 | `econ2310-0-1`; `econ2310-1-1`…`econ2310-1-7`; `econ2310-1-prove` | 165 · 160 |
| **B2** | Del 2 + Del 3 | `econ2310-2-1`, `econ2310-2-2`, `econ2310-2-prove`; `econ2310-3-1`, `econ2310-3-2`, `econ2310-3-prove` | 75 · 70 |
| **B3** | Del 4 | `econ2310-4-1`…`econ2310-4-6`; `econ2310-4-prove` | 140 · 125 |
| **B4** | Del 5 + Del 6 | `econ2310-5-1`…`econ2310-5-3`, `econ2310-5-prove`; `econ2310-6-1`…`econ2310-6-4`, `econ2310-6-prove` | 95 · 110 |
| **B5** | Del 7 | `econ2310-7-1`, `econ2310-7-2`, `econ2310-7-3`, `econ2310-7-4` | 40 · 45 |

Totalt **35 filer** (29 kapitler + 6 prøvekapitler). Bindende total:
**quiz 515 · flashcards 510** (kvotetabellen i BYGGEKONTRAKT.md er autoritativ).

Kapittelfiler: `src/lib/data/chapters/<id>.json` · quiz:
`src/lib/data/quiz-staging/<id>.quiz.json` · figurer:
`public/images/textbook/econ2310/*.svg` (lastes opp med `upload-media-storage.ts`).

Rekkefølge ved parallellkjøring: B1 og B2 kan starte samtidig; B3 forutsetter at
`econ2310-3-1` finnes (kryssreferanse), B4 forutsetter Del 3–4, B5 sist.

## Videre

Neste steg etter at alle kapitler er på disk: wiring
(`scripts/hoyskolebok/wire-bok.py`), deretter `sjekk-bok.py`, verifikatorbølge,
sluttport.

Les alltid først: `BYGGEKONTRAKT.md` (format og krav), `SKJELETT.md` (faglig
innhold per kapittel), `../DNA-regnefag.md` (arketype).
