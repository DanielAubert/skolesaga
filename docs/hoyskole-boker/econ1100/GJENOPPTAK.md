# Gjenopptak: ECON1100 Matematikk I (for økonomer), UiO

- **Branch:** `bok/econ1100`
- **Arbeidsmappe:** `.claude/worktrees/bok-econ1100` (eget git-arbeidstre — bruk KUN denne)
- **Status nå:** steg 0 ferdig (BYGGEKONTRAKT.md, BOKCONFIG.json, GJENOPPTAK.md,
  FIGUR-BESTILLINGER.md). Ingen kapittelfiler på disk. Ingen blokkeringer.
- **Arketype:** DNA-regnefag — matematisk verktøyfag med fast oppgavemal.
- **Hvorfor denne boka:** UiO bachelor 1. semester, ≥215 plasser, obligatorisk i
  fem økonomiprogram. Verktøyfaget resten av økonomistudiet henter fra —
  naturlig søsterbok til den bygde `econ1210`.

## Sjekk status

```bash
python3 scripts/hoyskolebok/status-bok.py econ1100     # hva finnes på disk
python3 scripts/hoyskolebok/sjekk-skjelett.py econ1100 # skjelettporten (OK per 25. juli 2026)
python3 scripts/hoyskolebok/sjekk-latex.py econ1100    # LaTeX/kontrolltegn
python3 scripts/hoyskolebok/sjekk-figurer.py econ1100  # figurløfter vs. filer
```

## Agent-oppdrag (kapittel-id-er fra SKJELETT.md §3, kvoter fra kvotesammendraget)

Åtte oppdrag, delt på del-grenser. Hvert oppdrag skriver kapittelfilene,
prøvekapitlet for sine deler, og quiz til `src/lib/data/quiz-staging/`.

| Agent | Deler | Kapittel-id-er | Filer | Quiz · FC | Prøvekap. |
|---|---|---|---|---|---|
| **B1** | Del 0 + Del 1 | `econ1100-0-1`; `econ1100-1-1`…`econ1100-1-6`; `econ1100-1-prove` | 8 | 115 · 102 | 1 |
| **B2** | Del 3 + Del 5 | `econ1100-3-1`, `econ1100-3-2`, `econ1100-3-prove`; `econ1100-5-1`, `econ1100-5-2`, `econ1100-5-prove` | 6 | 65 · 61 | 2 |
| **B3** | Del 4 | `econ1100-4-1`…`econ1100-4-5`; `econ1100-4-prove` | 6 | 78 · 68 | 1 |
| **B4** | Del 8 | `econ1100-8-1`…`econ1100-8-5`; `econ1100-8-prove` | 6 | 80 · 68 | 1 |
| **B5** | Del 2 + Del 7 | `econ1100-2-1`, `econ1100-2-2`, `econ1100-2-prove`; `econ1100-7-1`, `econ1100-7-2`, `econ1100-7-prove` | 6 | 58 · 52 | 2 |
| **B6** | Del 6 + Del 9 | `econ1100-6-1`, `econ1100-6-2`, `econ1100-6-prove`; `econ1100-9-1`…`econ1100-9-3`, `econ1100-9-prove` | 7 | 74 · 62 | 2 |
| **B7** | Del 10 | `econ1100-10-1`…`econ1100-10-3`; `econ1100-10-prove` | 4 | 36 · 36 | 1 |
| **B8** | Del 11 | `econ1100-11-1`…`econ1100-11-4` | 4 | 35 · 55 | 0 |

Del 1 (6 kapitler) og Del 4/Del 8 (5 kapitler hver) bygges av ÉN agent hver —
BYGGEPLAN-MAL splitter først deler over 7 kapitler, og disse delene har intern
notasjons- og metodeavhengighet som ikke tåler agentgrenser.

### Summeringskontroll mot skjelettets kvotesammendrag (autoritativ)

| | Filer | Quiz | Flashcards |
|---|---|---|---|
| Sum oppdrag B1–B8 | 8+6+6+6+6+7+4+4 = **47** | 115+65+78+80+58+74+36+35 = **541** | 102+61+68+68+52+62+36+55 = **504** |
| Skjelettets kvotesammendrag | 37 kapitler + 10 prøvekapitler = **47** | **541** | **504** |
| **Avvik** | **0** | **0** | **0** |

Summen stemmer eksakt. Del-totalene bak oppdragstallene (quiz · flashcards):
Del 0 12·12 · Del 1 103·90 · Del 2 32·30 · Del 3 32·32 · Del 4 78·68 ·
Del 5 33·29 · Del 6 30·24 · Del 7 26·22 · Del 8 80·68 · Del 9 44·38 ·
Del 10 36·36 · Del 11 35·55. Kvotene er **minimum per kapittel** — overskyting
er lov, underskyting aldri. Per-kapittel-tabellen står i BYGGEKONTRAKT
«Kvotetabell».

Prøvekapitlene har ingen quiz-/flashcard-kvote: 40 prøver totalt, 4 per temadel
1–10. Del 0 er metadel og Del 11 ER eksamenstreningen (stordrill + 3
øvingseksamener), så ingen av dem har prøvekapittel.

**Merknad om et telleavvik i skjelettet (verifiser ikke nødvendig — talt):**
skjelettets identitetstabell og kvotesammendrag oppgir «38 kapitler», men
skjelettet spesifiserer 37 (1 + 6 + 2 + 2 + 5 + 2 + 2 + 2 + 5 + 3 + 3 + 4).
`sjekk-skjelett.py econ1100` teller også 37. Kvotesummene (541/504) er
uberørte av dette — det er kun overskriftstallet som er én for høyt.
Byggeleder kan rette «38 kap.» → «37 kap.» i skjelettet ved anledning.

## Rekkefølge ved parallellkjøring (maks 2 samtidige agenter, jf. BYGGEPLAN-MAL)

Faglig avhengighet fra skjelettets §6: Del 1 er fundamentet for alt; Del 5
(nivåkurver) må ligge før Del 8 (Lagrange); Del 8 må ligge før Del 9; Del 11
gjenbruker alle temaene.

1. **B1 først, alene** — Del 0 etablerer sjangerkodene P1–SR, feilkodene
   #1–#12, frekvenstallene og de tre fallgruvene som resten refererer til, og
   Del 1 fastsetter notasjonen ($f'_x$, tilbakesubstitusjon, logaritmisk
   derivasjon) hele boka arver.
2. Deretter **B2 (Del 3 + 5)** og **B3 (Del 4)** parallelt — begge bygger bare
   på Del 1.
3. **B4 (Del 8)** etter B2 (krever kap. 5.1, nivåkurve/MRS) — kan kjøre
   parallelt med **B5 (Del 2 + 7)**, som bare krever kap. 1.1.
4. **B6 (Del 6 + 9)** etter B3 (krever 4.2), B4 (krever 8.2) og B5 (krever
   7.1) — parallelt med **B7 (Del 10)**, som krever 4.1 og 1.1.
5. **B8 (Del 11)** sist og alene. Sant/usant-stordrillen (11.1) henviser til
   alle tolv påstandstyper i sine teorikapitler, og de tre øvingseksamenene
   skal til sammen dekke P1, SU, LG, FD, NK, HD, DA, EL, PR, HG, OM. B8 leser
   HELE skjelettet.

Kryssreferanser til kapitler som ennå ikke finnes, legges inn av byggeleder ved
wiring (`sjekk-bok.py` avviser døde lenker). Etter HVER bølge: mål disk med
`status-bok.py` og gap-fill kun det som mangler — aldri bygg om.

## Filstier

- Kapittelinnhold: `src/lib/data/chapters/econ1100-<del>-<nr>.json`
  (prøver: `econ1100-<del>-prove.json`)
- Quiz (mellomprodukt, slettes etter wiring):
  `src/lib/data/quiz-staging/econ1100-<del>-<nr>.quiz.json`
- Figurer: `public/images/textbook/econ1100/*.svg` (bestilt i
  `FIGUR-BESTILLINGER.md`; lastes opp med
  `npx tsx scripts/upload-media-storage.ts`)
- Numeriske sannhetskontroller (python3-snutter): scratchpad, ikke i repoet.

## Kildegrunnlag-oppføring (legges inn av byggeleder ved wiring)

Skal inn i `src/lib/data/kildegrunnlag.ts` som `econ1100`, destillert fra
EKSAMENSANALYSE §9 «Kildeliste». ECON1100 har — til forskjell fra MAT1100 og
IN1900 — **ekte offisielle sensorveiledninger**, så ordet skal brukes, men bare
om de 16 settene:

- `institusjon`: «Universitetet i Oslo (UiO) — Økonomisk institutt»
- `sammendrag`: Boka er kalibrert mot ECON1100s eksamensarkiv ved UiO: 16
  eksamenssett med tilhørende offisielle sensorveiledninger, 9 ordinære
  (V2018 og H2018–H2025) og 7 utsatte (V2018-utsatt og H2020–H2025-utsatt).
  Analysen kartla den faste 5-oppgavers dramaturgien, temafrekvensene og de
  strenge punktene sensor faktisk trekker for.
- `eksamenssett`: «16 eksamenssett (V2018 – H2025)» — 9 ordinære skoleeksamener
  (V2018 + én per høst 2018–2025) og 7 utsatte eksamener. Oppgavetekstene er
  gjennomgått for format- og temaregistrering.
- `sensorveiledninger`: «16 offisielle sensorveiledninger (V2018 – H2025)» —
  én per sett, både ordinære og utsatte. De siste årgangene er lest grundig;
  V2018-settene er skummet. Veiledningene definerer sensorens seks metaregler
  (bl.a. at ubegrunnet ja/nei gir 0) og de fagspesifikke strenge punktene.
- `andreKilder`: UiOs emnebeskrivelse for ECON1100 (omskrevet sammendrag —
  eksamensform, obligkrav, karakterskala), verifisert aktiv 2026.
- `forbehold`:
  - V2018-settene følger et gammelt format (integrasjon som egen storoppgave,
    andrederiverte i Oppgave 1) og er minst representative; boka er kalibrert
    mot H2021–H2025-malen.
  - Arkivmappen inneholder duplikate kopier av samme sett under ulike filnavn;
    analysen bygger på de organiserte undermappe-versjonene.
  - Nye sett kan endre frekvensbildet; fraværet av lineær algebra,
    differensiallikninger og integrasjonsteknikk er likevel stabilt gjennom
    hele arkivet 2018–2025.
  - Alle modellbesvarelser i boka er nyskrevne av Skolesaga — ingen ekte
    studentbesvarelser inngår.
- `analysedato`: juli 2026

## Videre etter byggebølgen

1. **Wiring:** `python3 scripts/hoyskolebok/wire-bok.py econ1100` → «WIRING OK»,
   deretter slett `src/lib/data/quiz-staging/econ1100-*`.
2. **Institusjonsregistrering:** emnet inn i
   `src/app/bok/trinn/hoyere/institusjoner.ts` under UiO som «ECON1100
   Matematikk I». (UiO finnes allerede — `econ1210`, `mat1100` m.fl. ligger
   der.) Sjekk at jus-/helse-heuristikken i
   `src/components/textbook/hoyskole-disclaimer.tsx` IKKE treffer econ1100
   (det er verken jus eller helse).
3. **Kildegrunnlag** inn i `src/lib/data/kildegrunnlag.ts` (teksten over).
4. **Verifikatorbølge (steg 3):** 4 redaktør-agenter à 10–13 filer, 2 samtidige.
   Særlig oppdrag: løse ALLE `(verifiser)`-markeringer, og ETTERREGNE alle
   fortegns-/entydighetspåstander numerisk (python3) — se BYGGEKONTRAKT
   «Matematisk sannhetskontroll».
5. **Figurfase:** bygg SVG-ene fra `FIGUR-BESTILLINGER.md`, wire inn
   `image`-blokkene, kjør `npx tsx scripts/upload-media-storage.ts`.
6. **Sluttport (steg 4):** `sjekk-latex.py` · `sjekk-figurer.py` ·
   `sjekk-bok.py econ1100 "<forbudt-regex fra kontrakten>"` ·
   `quiz-lengdesjekk.mjs` · `npx tsc --noEmit` · `npm run build` · prod-curl
   (`PORT=3111 npm run start`, deretter 200 + innholds-grep på
   `/bok/trinn/hoyere/uio`, `/bok/econ1100`, tre kapittelruter,
   `/quiz/econ1100-1-2`, `/bok/econ1100/flashcards`, `/bok/econ1100/kildegrunnlag`).
7. Oppdater statustavlen i `docs/hoyskole-boker/README.md` og kryss av i
   `docs/hoyskole-boker/TODO-OPUS.md`.

Les alltid først: `BYGGEKONTRAKT.md` (format og krav — HELE),
`SKJELETT.md` (faglig innhold per kapittel — særlig §1 identitet, §2
makrostruktur og ditt kapittels DNA i §3), `../DNA-regnefag.md` (arketype),
`../README.md` «Leserkrav».
