# BYGGSTATUS — MAT1120 Lineær algebra

Branch: `bok/mat1120` (worktree). Oppdateres ved HVER commit.
Ny byggeleder overtok 22. juli (forrige leder døde på API-feil).

## Kvoter (autoritativ = SKJELETT Summeringskontroll)
- Kapitler: **33** (0.1 + 28 tema/drill + 1 føring(8.1) + 3 øvingseks) + **7 prøvekapitler** (Del 1–7)
- Quiz totalt: **≥539** · Flashcards totalt: **≥628**

## Faser
- [x] Steg 0 — kontrakt/fagprofil/BOKCONFIG/BYGGSTATUS
- [~] Steg 1 — byggebølge: Del 0–6 + prøve 1–6 FERDIG+committet. Del 7 + Del 8 GJENSTÅR.
- [ ] Steg 2 — wiring (wire-bok.py + kildegrunnlag + institusjoner)
- [ ] Steg 3 — verifikatorbølge (numerisk etterregning)
- [ ] Steg 4 — sluttport (sjekk-bok + studentpanel + SVG + tsc + build + prod-curl)

## Byggebølge-batcher (maks 2 samtidige agenter)
| Batch | Kapitler | Status |
|---|---|---|
| A | 0.1, 1.1–1.4, prøve-1 | FERDIG+committet |
| B | 2.1–2.7 + prøve-2 | FERDIG+committet |
| C | 3.1–3.4, prøve-3 | FERDIG+committet |
| D | 4.1–4.3, prøve-4 | FERDIG+committet |
| E | 5.1–5.3, prøve-5 | FERDIG+committet |
| F | 6.1–6.4, prøve-6 (+4 SVG) | FERDIG+committet (overtakelse 22. juli) |
| G | 7.1–7.3, prøve-7 | **GJENSTÅR — bygges nå** |
| H | 8.1–8.4 (føring + 3 øvingseks) | **GJENSTÅR — bygges nå** |

## Overtakelseskorreksjoner (22. juli)
- mat1110 er nå LIVE → alle 24 placeholder-markører gjort til ekte lenker (Del 0–6);
  indreprodukt-referanser (4-1, 4-prove) satt som ren tekst (mat1110 dekker ikke Cauchy–Schwarz).
- Shell-interpolasjonsskann fullført: 0 nye artefakter (odd-$ = 0, ingen /bin/-lekkasjer);
  den ene i 5-1 bb-22 var rettet av forrige leder (84f5e533).

## Filer på disk (mat1120)
- chapters: 32 / 40 (mangler 7-1,7-2,7-3,7-prove,8-1,8-2,8-3,8-4)
- quiz-staging: 26 (mangler Del 7+8)
- SVG: 4 (Del 6)

## Gjenstår
- Del 7 (SVD/dynamikk/bevis) + Del 8 (føring + 3 øvingseksamener), inkl. quiz.
- Steg 2 wiring, Steg 3 verifikator, Steg 4 sluttport.
