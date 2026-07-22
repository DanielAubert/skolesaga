# BYGGSTATUS: STK1110 Statistiske metoder og dataanalyse (UiO)

Arbeidssted: `.claude/worktrees/bok-stk1110`, branch `bok/stk1110`.
Byggeplan: `docs/hoyskole-boker/BYGGEPLAN-MAL.md` (steg 0→4).

## Kvoter (AUTORITATIVT fra SKJELETT §5)
- Kapitler: 25 (+ 3 prøvekapitler stk1110-1/2/3-prove)
- Quiz totalt: 515 · Flashcards totalt: 505
- Prøver: 12 temaprøver (4×Del 1–3) + 3 øvingseksamener (Del 4)

## Steg 0 — Forutsetninger ✅
- [x] EKSAMENSANALYSE.md + SKJELETT.md finnes
- [x] sjekk-skjelett.py stk1110 → KVALITETSPORT OK
- [x] BYGGEKONTRAKT.md opprettet (instansiert fra mal + regnefag-stil)
- [x] BOKCONFIG.json opprettet (prøvedeler [1,2,3], sectionNames 0–4)
- [x] Verifisert: stk1100 IKKE i registry → STK1100-lenker = KLARTEKST
- [x] Verifisert: r2-2-4, r1-4-1 finnes → ekte markdown-lenker

## Steg 1 — Byggebølge (kapittelforfattere, maks 2 samtidige)
| Del | Kapitler | Status |
|---|---|---|
| 0 | 0.1, 0.2 | ✅ committet (def 10/25, quiz 10/15) |
| 1 | 1.1–1.4 | ✅ committet (def 30/35/30/25, quiz 25/30/30/20) |
| 1 | 1.5 drill + 1-prove | ✅ committet 99024a8c (def 15, quiz 25) |
| 2 | 2.1–2.3 | ✅ committet 999c2d94 (def 30/30/30, quiz 30/30/25) |
| 2 | 2.4–2.6 | ✅ committet 7409d9b7 (def 20/15/15, quiz 15/15/15) |
| 2 | 2.7 + 2-prove | ✅ committet (def 15, quiz 25; salvage-verifisert) |
| 3 | 3.1–3.2 | ✅ committet (def 30/25, quiz 30/25; salvage-verifisert) |
| 3 | 3.3–3.7 (+ 3-prove) | ⏳ ikke startet |
| 4 | 4.1–4.4 | ⏳ ikke startet |

Figurer: 9 SVG ✅ committet (b8bbe40e), lastes opp i Steg 4.

## Steg 2 — Wiring ⏳
## Steg 3 — Verifiseringsbølge ⏳
## Steg 4 — Sluttport + deploy ⏳

## Commit-logg
- 325284b1 Steg 0 (BYGGEKONTRAKT+BOKCONFIG+BYGGSTATUS)
- b8bbe40e 9 SVG-figurer
- e30ce9f2 Del 0 (0.1, 0.2)
- ba269ed5 kap 1.1-1.2
- b9a7e5d4 kap 1.3-1.4

## Lærdom
- ECONNRESET drepte 2 agenter midt i bølge; innhold var berget på disk hver gang.
  Protokoll: mål disk → json.load → kvotetell → commit gyldig → relanser kun det som mangler.
