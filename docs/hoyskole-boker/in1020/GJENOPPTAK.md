# Gjenopptak: IN1020 Introduksjon til datateknologi (UiO)

- **Branch:** `bok/in1020`
- **Arbeidsmappe:** `.claude/worktrees/bok-in1020` (eget git-arbeidstre — bruk KUN denne)
- **Arketype:** DNA-regnefag, **hybrid**: tre garanterte regneteknikker
  (tallkonvertering, cache, subnetting/overføringstid) + to mekanikker
  (LMC-sporing, kretsanalyse) + et stort, presist begrepsapparat (sikkerhet,
  arkitektur, nettverkstjenester, OS).
- **Eksamensformen styrer alt:** én firetimers digital flervalgseksamen med
  **negativ poenggiving**, **fire seksjoner à 25 poeng som hver må bestås**,
  bestått/ikke bestått. Derfor: hvert løsningsforslag begrunner **hvorfor hvert
  gale alternativ er galt**, og de fire temadelene er like fullverdige.

## Status

Se `git log --oneline` på branchen for hva som er landet. Måling mot disk:

```bash
python3 scripts/hoyskolebok/status-bok.py in1020      # hva finnes på disk
python3 scripts/hoyskolebok/sjekk-latex.py in1020     # LaTeX/$-fella/kontrolltegn
python3 scripts/hoyskolebok/sjekk-skjelett.py in1020  # skjelettets kvalitetsport
```

`status-bok.py` teller de 32 kapitlene fra skjelettet. **De fire
prøvekapitlene** (`in1020-1-prove` … `in1020-4-prove`) står ikke i skjelettets
id-liste og telles derfor ikke der — sjekk dem med `ls`:

```bash
ls src/lib/data/chapters/in1020-*-prove.json
ls src/lib/data/quiz-staging/in1020-*.quiz.json | wc -l   # skal ende på 32
```

- **Steg 0: ferdig** (BYGGEKONTRAKT.md, BOKCONFIG.json, GJENOPPTAK.md,
  FIGUR-BESTILLINGER.md).
- **Steg 1: pågår.** Skriv kapitler i rekkefølgen under; commit hvert ferdig
  kapittel for seg.

## Agent-oppdrag (kapittel-id-er fra SKJELETT.md §4, kvoter fra §5)

Fem oppdrag, delt på del-grenser. Hvert oppdrag skriver kapittelfilene,
prøvekapitlet for sin del, og quiz til staging.

| Agent | Deler | Kapittel-id-er | Filer | Quiz · FC |
|---|---|---|---|---|
| **B1** | Del 0 + Del 1 | `in1020-0-1`; `in1020-1-1`…`in1020-1-7`; `in1020-1-prove` | 9 | 174 · 152 |
| **B2** | Del 2 | `in1020-2-1`…`in1020-2-7`; `in1020-2-prove` | 8 | 154 · 128 |
| **B3** | Del 3 | `in1020-3-1`…`in1020-3-7`; `in1020-3-prove` | 8 | 150 · 146 |
| **B4** | Del 4 | `in1020-4-1`…`in1020-4-6`; `in1020-4-prove` | 7 | 130 · 118 |
| **B5** | Del 5 | `in1020-5-1`…`in1020-5-4` | 4 | 89 · 12 |

**Summeringskontroll mot skjelettets §5 (autoritativ):**

| | Filer | Quiz | Flashcards |
|---|---|---|---|
| Sum oppdrag B1–B5 | 9+8+8+7+4 = **36** | 174+154+150+130+89 = **697** | 152+128+146+118+12 = **556** |
| Skjelettets §5 | 32 kapitler + 4 prøvekapitler = **36** | **697** | **556** |
| Avvik | **0** | **0** | **0** |

Deltotaler bak oppdragstallene: Del 0 16·14 · Del 1 158·138 · Del 2 154·128 ·
Del 3 150·146 · Del 4 130·118 · Del 5 89·12. Prøvekapitlene har ingen quiz-
eller flashcard-kvote. Kvotene er **minimum per kapittel** — overskyting er
lov, underskyting aldri. Per-kapittel-tabellen står i BYGGEKONTRAKT
«Kvotetabell».

Tidsbudsjett: 2 290 min på de 32 kapitlene + 465 min på de fire prøvekapitlene
= **2 755 min ≈ 46 timer**. Tallet skal brukes ordrett i «Lite tid?»-boksen i
kap. 0.1.

## Rekkefølge ved parallellkjøring (fra skjelettets §8)

1. **B1 først, alene.** Del 0 etablerer svarformene F1–F4, sjangrene A–K,
   feilkodene #1–#12 og frekvenstallene som resten refererer til. Del 1 er
   dessuten forkunnskap for kap. 4.2 (binær adresseregning).
2. Deretter **B2 og B3 parallelt** (maks 2 samtidige agenter, jf.
   BYGGEPLAN-MAL) — de to delene er faglig uavhengige av hverandre.
3. **B4 (Del 4)** etter B1 (kap. 4.2 krever binærkonvertering fra kap. 1.1).
4. **B5 (Del 5)** sist — sjangerguiden og de tre øvingseksamenene gjenbruker
   alle sjangre og skal dekke A–K og alle fire seksjoner flere ganger.

Innad i hver del følger kapitlene forkunnskapene: 1.1 før 1.3/1.4, 1.4 før 1.5
før 1.6; 2.1 før 2.2 før 2.3, 2.4 før 2.5/2.6 før 2.7; 3.1 før 3.2/3.3, 3.3 før
3.4 før 3.5; 4.1 før 4.5/4.6, 4.2/4.3 før 4.4.

Kryssreferanser til kapitler som ennå ikke finnes, legges inn av byggeleder ved
wiring (`sjekk-bok.py` avviser døde lenker).

## Filstier

- Kapittelinnhold: `src/lib/data/chapters/<id>.json`
- Quiz (mellomprodukt, slettes etter wiring): `src/lib/data/quiz-staging/<id>.quiz.json`
- Figurer: `public/images/textbook/in1020/*.svg` (bestilles i
  `FIGUR-BESTILLINGER.md`; lastes opp med `npx tsx scripts/upload-media-storage.ts`)
- Kontrollregning og LMC-simulator: scratchpad, ikke i repoet.

## Commit-disiplin (delt git-indeks)

Arbeidstreet deler indeks med andre agenter. Stage og commit i ÉN operasjon,
kun egne filer, uten pre-commit-hooken:

```bash
git add <fil> <fil> && git commit --no-verify -m "in1020 kap. X.Y: <tittel> (N quiz, M flashcards)

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

## Videre etter byggebølgen

1. Wiring: `python3 scripts/hoyskolebok/wire-bok.py in1020` → «WIRING OK»,
   deretter slett `src/lib/data/quiz-staging/in1020-*`.
2. Kildegrunnlag-oppføring i `src/lib/data/kildegrunnlag.ts`, destillert fra
   EKSAMENSANALYSE §8: seks årganger (H2017, H2018, H2019, H2020, H2022, H2023),
   oppgavesett + offisiell fasit for de fem første, **sensorveiledning kun for
   H2023**, faglærernes «Kommentarer til eksamen» for H2019, og de ærlige
   forbeholdene (ingen dokumenter fra 2021; H2020 var korona-hjemmeeksamen og
   ikke representativ; hjelpemiddel-avviket mellom arkivet og gjeldende
   emnebeskrivelse).
3. `in1020` er allerede dekket av institusjonen `uio` i
   `src/app/bok/trinn/hoyere/institusjoner.ts` — wire-bok.py patcher inn
   emnet; kontroller at oppføringen kom med.
4. Verifikatorbølge (steg 3) — særlig: etterregn ALLE talleksempler på nytt,
   spor alle LMC-programmer, og les hver oppgave for usett forkunnskap.
5. Sluttport (steg 4): `sjekk-latex.py` · `sjekk-bok.py in1020 "<forbudt-regex
   fra kontrakten>"` · pensum-avgrensnings-grepen · `npx tsc --noEmit` ·
   `npm run build` · prod-curl.

Les alltid først: `BYGGEKONTRAKT.md` (format og krav — HELE, særlig §R
Regnekontrakten og §F Flervalgskontrakten), `SKJELETT.md` (faglig innhold per
kapittel), `../DNA-regnefag.md` (arketype), `../README.md` «Leserkrav».
