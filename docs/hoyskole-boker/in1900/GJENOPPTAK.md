# Gjenopptak: IN1900 Introduksjon til programmering med vitenskapelige anvendelser (UiO)

- **Branch:** `bok/in1900`
- **Arbeidsmappe:** `.claude/worktrees/bok-in1900` (eget git-arbeidstre — bruk KUN denne)
- **Status nå:** steg 0 ferdig (BYGGEKONTRAKT.md, BOKCONFIG.json, GJENOPPTAK.md,
  FIGUR-BESTILLINGER.md + kodeporten `scripts/hoyskolebok/sjekk-kode.py`).
  Ingen kapittelfiler på disk.
- **Arketype:** DNA-regnefag, undertype **kodefag** — plattformens første.
  Kontrakten setter presedens for IN1000/IN1010/IN2040/TDT4110/TDT4100/TDT4102.

## ⚠️ BLOKKERING FØR BYGGEBØLGEN (byggeleders beslutning)

`LatexRenderer` støtter ikke kodeblokker og beskytter ikke kode mot
markdown-transformene: ```` ```python ````-blokker kollapser til én inline-`<code>`
uten innrykk, `__init__` blir `_<em>init</em>_`, og `x**2 + y**2` blir
`x<strong>2 + y</strong>2`. Se **BYGGEKONTRAKT §0** for målingene og den
minimale patchen (park fences + inline kode før markdown-transformene, med
`escapeHtml`). Patchen fikser samtidig de 159 eksisterende kapittelfilene som
bruker ```` ```python ````. Bygg gjerne kapitlene før patchen — formatet er det
samme — men boka kan ikke deployes før porten er grønn:

```bash
# etter patch: skal finne <pre og IKKE finne <em>init</em>
curl -s localhost:3111/bok/in1900/in1900-5-1 | grep -c "<pre"
curl -s localhost:3111/bok/in1900/in1900-5-1 | grep -c "<em>init</em>"
```

## Sjekk status

```bash
python3 scripts/hoyskolebok/status-bok.py in1900          # hva finnes på disk
python3 scripts/hoyskolebok/sjekk-kode.py in1900          # kodeporten (ny)
python3 scripts/hoyskolebok/sjekk-latex.py in1900         # LaTeX/kontrolltegn
```

## Agent-oppdrag (kapittel-id-er fra SKJELETT.md §4, kvoter fra §5)

Sju oppdrag, delt på del-grenser. Hvert oppdrag skriver kapittelfilene,
prøvekapitlet for sine deler, og quiz til staging.

| Agent | Deler | Kapittel-id-er | Filer | Quiz · FC |
|---|---|---|---|---|
| **B1** | Del 0 + Del 1 | `in1900-0-1`; `in1900-1-1`…`in1900-1-7`; `in1900-1-prove` | 9 | 162 · 144 |
| **B2** | Del 2 + Del 3 | `in1900-2-1`, `in1900-2-2`, `in1900-2-prove`; `in1900-3-1`…`in1900-3-3`, `in1900-3-prove` | 7 | 88 · 80 |
| **B3** | Del 4 + Del 6 | `in1900-4-1`…`in1900-4-3`, `in1900-4-prove`; `in1900-6-1`…`in1900-6-3`, `in1900-6-prove` | 8 | 98 · 92 |
| **B4** | Del 5 | `in1900-5-1`…`in1900-5-5`; `in1900-5-prove` | 6 | 84 · 78 |
| **B5** | Del 7 | `in1900-7-1`…`in1900-7-5`; `in1900-7-prove` | 6 | 78 · 72 |
| **B6** | Del 8 | `in1900-8-1`…`in1900-8-3`; `in1900-8-prove` | 4 | 52 · 44 |
| **B7** | Del 9 | `in1900-9-1`, `in1900-9-2`, `in1900-9-3` | 3 | 32 · 0 |

**Summeringskontroll mot skjelettets §5 (autoritativ):**

| | Filer | Quiz | Flashcards |
|---|---|---|---|
| Sum oppdrag B1–B7 | 9+7+8+6+6+4+3 = **43** | 162+88+98+84+78+52+32 = **594** | 144+80+92+78+72+44+0 = **510** |
| Skjelettets §5 | 35 kapitler + 8 prøvekapitler = **43** | **594** | **510** |
| Avvik | **0** | **0** | **0** |

Summen stemmer eksakt. Del-totalene bak oppdragstallene: Del 0 12·12 · Del 1
150·132 · Del 2 36·34 · Del 3 52·46 · Del 4 48·48 · Del 5 84·78 · Del 6 50·44 ·
Del 7 78·72 · Del 8 52·44 · Del 9 32·0. Kvotene er **minimum per kapittel** —
overskyting er lov, underskyting aldri. Per-kapittel-tabellen står i
BYGGEKONTRAKT «Kvotetabell».

Prøvekapitlene har ingen quiz-/flashcard-kvote (32 prøver totalt, 4 per temadel
1–8, med minuttanslag fra skjelettets §6).

## Rekkefølge ved parallellkjøring (fra skjelettets §8)

Faglig avhengighet: Del 1 er fundamentet for alt. Del 4 (NumPy) må være skrevet
før Del 6 og Del 7 kan gjøres ferdig. Del 9 gjenbruker alle sjangre.

1. **B1 først, alene** — Del 0 etablerer sjangernavnene A–O, feilkodene #1–#24
   og frekvenstallene resten refererer til, og Del 1 er fundamentet.
2. Deretter **B2, B3, B4 parallelt** (maks 2 samtidige agenter, jf.
   BYGGEPLAN-MAL). B3 bygger Del 4 FØR Del 6 internt.
3. **B5 (Del 7)** etter B3 (krever 4.1) og B4 (krever 5.3, arv).
4. **B6 (Del 8)** kan kjøre parallelt med B5 (krever bare 1.5).
5. **B7 (Del 9)** sist — øvingseksamenene gjenbruker alle sjangre og skal dekke
   A–O til sammen.

Kryssreferanser til kapitler som ennå ikke finnes, legges inn av byggeleder ved
wiring (`sjekk-bok.py` avviser døde lenker).

## Filstier

- Kapittelinnhold: `src/lib/data/chapters/<id>.json`
- Quiz (mellomprodukt, slettes etter wiring): `src/lib/data/quiz-staging/<id>.quiz.json`
- Figurer: `public/images/textbook/in1900/*.svg` (bestilles i
  `FIGUR-BESTILLINGER.md`; lastes opp med `npx tsx scripts/upload-media-storage.ts`)
- Kjørt kode: scratchpad, ikke i repoet.

## Videre etter byggebølgen

1. Wiring: `python3 scripts/hoyskolebok/wire-bok.py in1900` → «WIRING OK»,
   deretter slett `src/lib/data/quiz-staging/in1900-*`.
2. Kildegrunnlag-oppføring i `src/lib/data/kildegrunnlag.ts` (destillert fra
   EKSAMENSANALYSE §8 — 38 sett + offisielle løsningsforslag, 76 filer;
   **ikke** «sensorveiledninger» som egen dokumenttype).
3. Registrer emnet i `src/app/bok/trinn/hoyere/institusjoner.ts` under UiO som
   «IN1900 Introduksjon til programmering med vitenskapelige anvendelser».
4. Verifikatorbølge (steg 3) — inkludert oppgaven å løse ALLE `(verifiser)`,
   særlig ODESolver-referansemodulens kropp (§K5).
5. Sluttport (steg 4): `sjekk-kode.py` · `sjekk-latex.py` ·
   `sjekk-bok.py in1900 "<forbudt-regex fra kontrakten>"` · `npx tsc --noEmit` ·
   `npm run build` · prod-curl (inkl. `<pre`-sjekken over).

Les alltid først: `BYGGEKONTRAKT.md` (format og krav — HELE, særlig §0 og
Kodekontrakten), `SKJELETT.md` (faglig innhold per kapittel),
`../DNA-regnefag.md` (arketype), `../README.md` «Leserkrav».
