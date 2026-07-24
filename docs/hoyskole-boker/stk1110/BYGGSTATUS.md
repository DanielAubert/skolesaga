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
| 3 | 3.3–3.7 + 3-prove | ✅ committet (def 30/20/20/15/15, quiz 30/20/20/10/25) |
| 4 | 4.1–4.4 | ✅ committet (def 25/0/0/0, quiz 15/10/10/10; alle tall scipy-verifisert) |

**Steg 1 KOMPLETT:** 25 kap + 3 prøvekap. Kvoter: quiz 515/515, flashcards 505/505 ✓

Figurer: 9 SVG ✅ committet (b8bbe40e), lastes opp i Steg 4.

## Steg 2 — Wiring ✅ (dde6b867)
- wire-bok.py: COURSE_STK1110 (28 kap), registry 10855, quiz-data-stk1110.ts (515),
  quiz-data.ts, institusjoner.ts (uio), kildegrunnlag.ts, quiz-staging slettet.
- sjekk-bok: 4 manglende Typiske feil-warnings (0.2/1.5/2.7/3.7) fikset → BOKPORT OK.
- LENGDE-TELL: fasit eneste-lengst 21 % ✓. tsc grønn.

## Steg 3 — Verifiseringsbølge ✅ (18ec5686 + a55ad238)
- 5 verifikatorer (2 døde på ECONNRESET uten endringer, relansert mindre):
  Del 0+1: 193 num + 25 sympy + 6 MC → 0 avvik. Del 2: 312 sjekker → 9
  siste-desimal-avvik rettet. Del 3: ~290 sjekker → 2 regnekjeder i 3.1 rettet
  (Syy-kjeden) + 3.2/3.5 desimaler. Del 4: 175 sjekker → 0 avvik.

## Steg 4 — Sluttport + deploy ✅
- sjekk-bok BOKPORT OK · studentpanel-/bølgeporter grønne (14 kalde oppgaver
  korrekt merket, ingen alle-a, Del 0-pakken komplett)
- npm run build: ✓ Compiled, Kombinerte 10855 kapitler
- prod-curl PORT=3111: 9/9 ruter 200 (inst/bok/teori/drill/prøve/øvingseksamen/
  quiz/flashcards/kildegrunnlag), Forkunnskaper+Symbolliste+læringsløkke servert
- 9 SVG lastet opp til Supabase Storage (upload-media-storage.ts)

## Commit-logg
- 325284b1 Steg 0 (BYGGEKONTRAKT+BOKCONFIG+BYGGSTATUS)
- b8bbe40e 9 SVG-figurer
- e30ce9f2 Del 0 (0.1, 0.2)
- ba269ed5 kap 1.1-1.2
- b9a7e5d4 kap 1.3-1.4

## Lærdom
- ECONNRESET drepte 2 agenter midt i bølge; innhold var berget på disk hver gang.
  Protokoll: mål disk → json.load → kvotetell → commit gyldig → relanser kun det som mangler.
