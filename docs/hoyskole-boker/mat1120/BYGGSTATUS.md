# BYGGSTATUS — MAT1120 Lineær algebra

Branch: `bok/mat1120` (worktree). Oppdateres ved HVER commit.
Ny byggeleder overtok 22. juli (forrige leder døde på API-feil).

## Kvoter (autoritativ = SKJELETT Summeringskontroll)
- Kapitler: **33** (0.1 + 28 tema/drill + 1 føring(8.1) + 3 øvingseks) + **7 prøvekapitler** (Del 1–7)
- Quiz totalt: **≥539** · Flashcards totalt: **≥628**

## Faser
- [x] Steg 0 — kontrakt/fagprofil/BOKCONFIG/BYGGSTATUS
- [x] Steg 1 — byggebølge: HELE boka (Del 0–8, 40 kap + 33 quiz) FERDIG+committet.
- [x] Steg 2 — wiring: wire-bok.py kjørt (COURSE_MAT1120 40 kap, registry +40,
      quiz-data-mat1120.ts 539 spm, 644 def, institusjoner uio) + kildegrunnlag
      (sannferdig: 7 løsningsforslag H2018–H2024). sjekk-bok BOKPORT OK. tsc rent,
      npm run build grønn.
- [~] Steg 3 — verifikatorbølge (numerisk etterregning) — PÅGÅR
- [~] Steg 4 — sluttport: sjekk-bok ✓, tsc ✓, build ✓. GJENSTÅR: SVG-opplasting
      Storage + prod-curl PORT=3061.

## Byggebølge-batcher (maks 2 samtidige agenter)
| Batch | Kapitler | Status |
|---|---|---|
| A | 0.1, 1.1–1.4, prøve-1 | FERDIG+committet |
| B | 2.1–2.7 + prøve-2 | FERDIG+committet |
| C | 3.1–3.4, prøve-3 | FERDIG+committet |
| D | 4.1–4.3, prøve-4 | FERDIG+committet |
| E | 5.1–5.3, prøve-5 | FERDIG+committet |
| F | 6.1–6.4, prøve-6 (+4 SVG) | FERDIG+committet (overtakelse 22. juli) |
| G | 7.1–7.3, prøve-7 (+Householder-SVG) | FERDIG+committet (f674bc9c) |
| H | 8.1–8.4 (føring + 3 øvingseks, +kjeglesnitt-SVG) | FERDIG+committet (d31ce9ed) |

## Overtakelseskorreksjoner (22. juli)
- mat1110 er nå LIVE → alle 24 placeholder-markører gjort til ekte lenker (Del 0–6);
  indreprodukt-referanser (4-1, 4-prove) satt som ren tekst (mat1110 dekker ikke Cauchy–Schwarz).
- Shell-interpolasjonsskann fullført: 0 nye artefakter (odd-$ = 0, ingen /bin/-lekkasjer);
  den ene i 5-1 bb-22 var rettet av forrige leder (84f5e533).

## Filer på disk (mat1120)
- chapters: 40 / 40 (alle wiret i COURSE_MAT1120)
- quiz: 539 spm i quiz-data-mat1120.ts (alle 33 nøkler + prøver)
- SVG: 6 (4 i Del 6 + 7-3 Householder + 8-4 kjeglesnitt)

## Steg 3 — verifikatorbølge (startet 22. juli, ny byggeleder)
Numerisk etterregning (python3/numpy/sympy) av alle fasiter del for del:
| Del | Status | Avvik funnet/rettet |
|---|---|---|
| 0+1 | FERDIG (alle fasiter etterregnet eksakt m/sympy) | 0 avvik; quiz 0-1…1-4 OK (prøvekap. har bevisst ingen quiz-nøkkel) |
| 2 | FERDIG (122 sympy-sjekker: koordinater/basisskifte/[T]_B/Wronski, kryssverifisert) | 0 fasitavvik; quiz 2-1…2-7 OK; 1 defekt distraktor rettet (2-4 P_{E←B}: «transponert»-alternativ var lik fasit pga. symmetri → byttet til inversmatrisen) |
| 3 | FERDIG (112 sympy-kontroller: charpoly/egenrom/PDP⁻¹/A^k symbolsk) | 0 avvik; quiz 74 spm OK. Merknad: poly(A)-omtale i 3-1/3-4 bruker monisk konvensjon, def-blokk det(A−λI) — samme røtter, latt stå |
| 4 | FERDIG (169 sjekker: indreprodukt/GS/normer, alle mellomverdier) | 1 tekstavvik rettet (4-1-thm-cs kyrilliske tegn); quiz 54 spm OK, 1 distraktor-tenkenotis ryddet (4-1 norm-spm) |
| 5 | venter | – |
| 6 | FERDIG (93 sympy-sjekker + geometri i alle 4 SVG-er verifisert) | 3 rettet: 6-3-ex3-fig caption (største→minste egenverdi gir lengste akse), 6-4-e7 hint (forfatter-selvsnakk), 6-1-l2-teori (ortogonal/ortonormal-terminologi). Quiz 66 spm OK |
| 7 | FERDIG (SVD rekonstruert UΣVᵀ=A eksakt, dynamikk, Householder-bevis+SVG-geometri) | 0 fasitavvik; quiz 48 spm OK, 1 defekt distraktor rettet (7-1 SVD-rang: alternativ var ekvivalent med fasit → byttet til m−n) |
| 8 | FERDIG (102 sjekker: alle vedleggs-RREF-er etterregnet, 3 øvingseks fullregnet, kjeglesnitt-SVG OK) | 2 tellefeil rettet (8-3-tip + 8-4-tip: «elleve»→«tolv» deloppgaver, 20 min/stk); quiz 29 spm OK, 1 nær-defekt distraktor byttet (8-3 σ-rekkefølge). Redaksjonell rest: titlene 8-3/8-4 sier «10 deloppgaver» men settene har 12 (O5 ekstra — forklart i tip) |

## Gjenstår
- Steg 3 verifikator (pågår), Steg 4 sluttport (SVG-opplasting Storage + prod-curl PORT=3061).
