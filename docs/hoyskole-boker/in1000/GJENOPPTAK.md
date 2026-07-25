# Gjenopptak: IN1000 Introduksjon til objektorientert programmering (UiO)

- **Branch:** `bok/in1000`
- **Arbeidsmappe:** `.claude/worktrees/bok-in1000` (eget git-arbeidstre — bruk KUN denne)
- **Status nå (26. juli 2026):** **34 av 37 filer på disk** — alle 26
  teori-/drillkapitler og alle 8 prøvekapitler er ferdige, gatet og committet.

  | Del | Filer | Status |
  |---|---|---|
  | 0–4 | `0-1`, `1-1`…`1-3`+`1-prove`, `2-1`,`2-2`+`2-prove`, `3-1`…`3-4`+`3-prove`, `4-1`,`4-2`+`4-prove` | ferdig (oppdrag B1–B3) |
  | 5 | `5-1`…`5-5` + `5-prove` | **ferdig** (oppdrag B4) |
  | 6 | `6-1`…`6-5` + `6-prove` | **ferdig** (oppdrag B5, del 2) |
  | 7 | `7-1`, `7-2` + `7-prove` | **ferdig** (oppdrag B5, del 1) |
  | 8 | `8-1`, `8-2` + `8-prove` | **ferdig** (oppdrag B6) |
  | 9 | `9-1`, `9-2`, `9-3` | **GJENSTÅR** (oppdrag B7) |

  `status-bok.py` 26. juli: **26/29 kapitler · 580 flashcard-definisjoner ·
  220 oppgaver**. Quiz i staging: 492 spørsmål (kvoten for de 26 ferdige
  kapitlene er 492 — alle oppfylt eller overskutt).

- **Neste fil:** `in1000-9-1` (øvingseksamen 1, bibliotek). Oppdrag B7 = de tre
  komplette settene, 8 quiz hver, **0 flashcards**, `estimatedMinutes` 240.
  Kap. 9.1 skal i tillegg ha den merkede **kalde banken** (8–10 oppgaver uten
  hint, fasit = momentliste), jf. BYGGEKONTRAKT.
- **Arketype:** DNA-regnefag, undertype **kodefag** — plattformens ANDRE.
  Presedens: `docs/hoyskole-boker/in1900/` (bygget og verifisert 25. juli 2026).
- **Ingen blokkeringer.**

## Datafiler for Del 7 (og Del 6.5) — MÅ lages før utskriftsporten kjøres

Kapitlene `in1000-7-1`, `in1000-7-2`, `in1000-7-prove`, `in1000-6-5` og
`in1000-6-prove` leser ekte tekstfiler. De ligger IKKE i repoet (byggekontrakten
forbyr det). Byggeskriptet `mk_data7.py` i scratchpad lager dem; innholdet er
gjengitt i kapitlene selv, så de kan rekonstrueres derfra.

Kjør porten med datamappa som **andre argument**:

```bash
python3 scripts/hoyskolebok/sjekk-utskrift.py \
  src/lib/data/chapters/in1000-7-1.json <DATADIR>
```

Filene: `medlemmer.txt`, `varer.txt`, `sykler.txt` (header), `turer.txt`,
`Kolonier.txt`, `Ordjakt.txt`, `containere.txt`, `okter.txt`,
`medlemsregister.txt` (header), `varelager.txt`, `timeplan.txt` (header),
`resultat.txt`, `sykkelturer.txt`, `retter.txt` (header), `utlaan.txt`,
`Speilsal.txt`, `Spinning.txt`.

## Sjekk status (kjør etter HVERT ferdig kapittel — gå aldri forbi en rød port)

```bash
python3 scripts/hoyskolebok/status-bok.py in1000                    # hva finnes på disk
python3 scripts/hoyskolebok/sjekk-utskrift.py src/lib/data/chapters/in1000-X-Y.json
python3 scripts/hoyskolebok/sjekk-sporing.py in1000                 # sjanger A-fasiter
python3 scripts/hoyskolebok/sjekk-kode.py in1000                    # kodeporten
python3 scripts/hoyskolebok/sjekk-latex.py in1000                   # LaTeX/kontrolltegn
python3 scripts/hoyskolebok/sjekk-prosaregel.py in1000 "rekursj" \
  "utenfor pensum|ikke pensum|uønsket"
python3 scripts/hoyskolebok/sjekk-prosaregel.py in1000 \
  "polymorfi|super\(\)|\barv(en|es|ing)?\b" \
  "utenfor pensum|ikke pensum|testes ikke|IN1010"
python3 -c "import json; json.load(open('src/lib/data/chapters/in1000-X-Y.json'))"
```

Prod-curl av rendringen (når nok kapitler finnes): HTML-en skal inneholde
`<pre` og IKKE `<em>init</em>`.

### Fire porter er BYGGET i dette løpet — bruk dem, ikke finn dem opp igjen

- **`sjekk-utskrift.py`** (ny): kjører hver ```python-blokk og sammenligner med
  «**Utskrift:**»-blokken. Gjør IN1900-lærdom 1 deterministisk. Obligatorisk per
  kapittel.
- **`sjekk-prosaregel.py`** (ny): kontekst-grep over JSON-strukturen. **Erstatter
  `grep -o` med `.{0,N}`-kontekst, som brukte 17 GB RAM på byggemaskinen.** Bruk
  ALDRI det gamle mønsteret mot kapittelfilene.
- **`sjekk-kode.py`** (utvidet): kjenner nå forskjell på en «Prøve …»-boks
  (oppgavesett, skal ikke ha fasit ved siden av koden) og en «Fasit …»-boks. Uten
  det ville utskrift-plikten tvunget fasiten inn i selve prøven.
- **`sjekk-sporing.py`** (ny, 25. juli kveld): utskriftsporten kan IKKE sjekke
  sporingsoppgaver, fordi koden står i `exercise.task` mens svaret står i
  `exercise.solution` som en løsrevet «**Utskrift:**»-blokk uten kodeblokk
  foran. Denne porten kjører koden fra oppgaveteksten og sammenligner. Den er
  konservativ (hopper over flerprogram-oppgaver, `import`/`sys.argv`, fil,
  modul, stdin, og fasiter som bare mangler avsluttende linjeskift).
  **Den fant tre gale sjanger A-fasiter ved første kjøring** — én av dem i et
  kapittel som allerede var committet. Kjør den på HVERT kapittel med
  sporingsoppgaver.

### Fallgruver som allerede har kostet tid

- **Kodeportens rekursjonssjekk flagger samme-navn-delegering.** `def skriv` som
  kaller `b.skriv()` meldes som rekursjon. Se BYGGEKONTRAKT §K5b — container-
  metoden skal hete noe annet (`skriv_alle`). Dette treffer Del 5, 6 og 7 hardt.
- **«**Utskrift:**» må stå RETT etter kodeblokken**, ikke med et avsnitt prosa
  imellom.
- **En uendelig løkke i en `warning` må ha fence-taggen ```text**, ellers henger
  utskriftsporten i 15 sekunder og melder avvik.
- **Del 2 kommer før Del 3 i lesestrekket.** Lister og ordbøker er derfor IKKE
  innført i kap. 2.1/2.2 — alle løkker der går over tekst. Skjelettets
  mønstereksempel for 2.1 bruker en liste; det er bevisst byttet til tekst, med
  en setning om at mønsteret er identisk for lister.
- **Kap. 0.1 lenker til alle bokas kapitler.** `sjekk-bok.py` avviser døde
  lenker, så den porten blir først grønn når hele boka står på disk. Det er
  forventet, ikke et avvik.
- **Feilmeldinger vises som ```text-blokker, ikke som «**Utskrift:**».**
  Utskriftsporten sammenligner mot **stdout**, og en traceback går til stderr —
  et `python`-eksempel som krasjer, gir derfor alltid avvik. Presedensen i boka
  (kap. 2.1, 3.1, 3.3, 4.2) er å vise den plantede feilen i en ```text-blokk og
  sitere siste linje i feilmeldingen i prosaen.
- **Prøvekapitler bør BYGGES med kjørt utskrift.** `in1000-4-prove` har en
  byggefil (mønster i scratchpad) der hver sporingsoppgave er en tuppel
  `(poeng, kode, kommentar)`; byggefila kjører koden og limer den faktiske
  stdout inn i fasiten. Fasiten kan da ikke være skrevet fra hukommelsen, og
  ingen manuell etterkontroll trengs. Bruk det mønsteret for Del 5–8-prøvene.
- **Utskriftsporten kjører HVER ```python-blokk for seg.** En blokk som bruker
  en klasse definert i en tidligere blokk, krasjer med `NameError`. Enten samle
  klasse + bruk i ÉN blokk, eller la delblokken være ```text. Dette styrte
  blokkinndelingen i hele Del 5–8.
- **En ```python-blokk som inneholder `print(` NOEN STEDS — også inne i en
  metodekropp — krever «**Utskrift:**» rett etter.** Delvise klasseutdrag med
  `print` i en metode må derfor være ```text.
- **`input()`-kode kan ikke kjøres av porten** (stdin er lukket). Kap. 6.4 løser
  det med ```text + «**Terminaldialog:**», pluss en kjørbar variant der
  «brukerens» svar hentes fra en liste via en hjelpemetode `les(...)`. Bruk
  samme grep i Del 9 hvis en modellbesvarelse har `input`.
- **§K5b gjelder også mellom to KLASSER.** `Kantine.selg` som kaller
  `Rett.selg` flagges som rekursjon av kodeporten. Bruk `selg_rett`,
  `laan_ut_bok`, `skriv_alle`, `totalt_antall_…`.
- **Skriv ALDRI «Vent — …»-selvkorreksjoner i fasitprosa.** Kjør koden først,
  lim inn den faktiske utskriften, og skriv forklaringen ut fra den.
- **Verifiser også påstander om KODE SOM ER FEIL.** I kap. 4.2 var to påstander
  om plantet kode gale (`NameError` var i virkeligheten `UnboundLocalError`, og
  «går fint på tom liste» var feil). Kjør alltid den gale koden også, og noter
  hva den faktisk gjør.

## Kapittelinndeling og kvoter (kapittel-id-er fra SKJELETT.md §4, kvoter fra §5)

**37 filer:** 29 kapitler + 8 prøvekapitler. Quiz 516 · flashcards 508.

| Del | Kapitler | Prøvekapittel | Quiz | FC |
|---|---|---|---|---|
| 0 Eksamenskart | `in1000-0-1` | — | 12 | 16 |
| 1 Python-grunnlaget | `in1000-1-1`…`in1000-1-3` | `in1000-1-prove` | 66 | 64 |
| 2 Funksjoner | `in1000-2-1`, `in1000-2-2` | `in1000-2-prove` | 38 | 40 |
| 3 Lister, ordbøker, strenger | `in1000-3-1`…`in1000-3-4` | `in1000-3-prove` | 88 | 84 |
| 4 Kodesporing | `in1000-4-1`, `in1000-4-2` | `in1000-4-prove` | 42 | 30 |
| 5 Klasser og referanser | `in1000-5-1`…`in1000-5-5` | `in1000-5-prove` | 94 | 102 |
| 6 Stor klassemodellering | `in1000-6-1`…`in1000-6-5` | `in1000-6-prove` | 82 | 96 |
| 7 Filbehandling | `in1000-7-1`, `in1000-7-2` | `in1000-7-prove` | 34 | 38 |
| 8 Nøstede strukturer | `in1000-8-1`, `in1000-8-2` | `in1000-8-prove` | 36 | 38 |
| 9 Eksamenstrening | `in1000-9-1`…`in1000-9-3` | — | 24 | 0 |

Per-kapittel-kvotene står i BYGGEKONTRAKT «Kvotetabell» (autoritativ). Kvotene
er **minimum per kapittel** — overskyting er lov, underskyting aldri.

## Agent-oppdrag

Sju oppdrag, delt på del-grenser. Hvert oppdrag skriver kapittelfilene,
prøvekapitlet for sine deler, og quiz til staging.

| Agent | Deler | Kapittel-id-er | Filer | Quiz · FC |
|---|---|---|---|---|
| **B1** | Del 0 + Del 1 | `in1000-0-1`; `in1000-1-1`…`in1000-1-3`; `in1000-1-prove` | 5 | 78 · 80 |
| **B2** | Del 2 + Del 3 | `in1000-2-1`, `in1000-2-2`, `in1000-2-prove`; `in1000-3-1`…`in1000-3-4`, `in1000-3-prove` | 8 | 126 · 124 |
| **B3** | Del 4 | `in1000-4-1`, `in1000-4-2`; `in1000-4-prove` | 3 | 42 · 30 |
| **B4** | Del 5 | `in1000-5-1`…`in1000-5-5`; `in1000-5-prove` | 6 | 94 · 102 |
| **B5** | Del 7 + Del 6 | `in1000-7-1`, `in1000-7-2`, `in1000-7-prove`; `in1000-6-1`…`in1000-6-5`, `in1000-6-prove` | 9 | 116 · 134 |
| **B6** | Del 8 | `in1000-8-1`, `in1000-8-2`; `in1000-8-prove` | 3 | 36 · 38 |
| **B7** | Del 9 | `in1000-9-1`, `in1000-9-2`, `in1000-9-3` | 3 | 24 · 0 |

**Summeringskontroll mot skjelettets §5 (autoritativ):**

| | Filer | Quiz | Flashcards |
|---|---|---|---|
| Sum oppdrag B1–B7 | 5+8+3+6+9+3+3 = **37** | 78+126+42+94+116+36+24 = **516** | 80+124+30+102+134+38+0 = **508** |
| Skjelettets §5 | 29 kapitler + 8 prøvekapitler = **37** | **516** | **508** |
| Avvik | **0** | **0** | **0** |

Filtellingen per oppdrag: B1 = 1 + (3 + prøve) = 5 · B2 = (2 + prøve) +
(4 + prøve) = 8 · B3 = 2 + prøve = 3 · B4 = 5 + prøve = 6 · B5 = (2 + prøve) +
(5 + prøve) = 9 · B6 = 2 + prøve = 3 · B7 = 3.

Del-totalene bak oppdragstallene: Del 0 12·16 · Del 1 66·64 · Del 2 38·40 ·
Del 3 88·84 · Del 4 42·30 · Del 5 94·102 · Del 6 82·96 · Del 7 34·38 ·
Del 8 36·38 · Del 9 24·0.

Prøvekapitlene har ingen quiz-/flashcard-kvote (32 prøver totalt, 4 per temadel
1–8, med minuttanslag fra skjelettets §6; sum 945 min).

## Rekkefølge ved parallellkjøring (fra skjelettets §8)

Faglig avhengighet, i den rekkefølgen konstruksjonene forutsetter hverandre:

1. **B1 først, alene** — Del 0 etablerer sjangernavnene A–I, feilkodene #1–#16
   og frekvenstallene resten refererer til, og Del 1 (variabler, betingelser,
   løkker) er fundamentet under alt annet.
2. Deretter **B2** (Del 2 funksjoner → Del 3 lister/ordbøker/strenger; krever
   Del 1). Del 3 bærer hele Oppgave 3 og er nest tyngst.
3. **B3 (Del 4 kodesporing)** etter B2 — drillen sporer over lister og ordbøker
   og forutsetter kap. 3.2.
4. **B4 (Del 5 klasser)** kan kjøre parallelt med B3 (krever bare kap. 2.2
   scope).
5. **B5** bygger **Del 7 FØR kap. 6.5** — skjelettet gjør 6.5 avhengig av 7.1
   (filinnlesing inngår i den store modelleringen). Krever B4 ferdig (Del 5).
6. **B6 (Del 8)** kan kjøre parallelt med B5 (krever kap. 3.2 og 2.1).
7. **B7 (Del 9)** sist — de tre øvingseksamenene gjenbruker alle sjangre og
   skal dekke A–I til sammen.

Maks 2 samtidige agenter (BYGGEPLAN-MAL). Kryssreferanser til kapitler som ennå
ikke finnes, legges inn av byggeleder ved wiring (`sjekk-bok.py` avviser døde
lenker).

## Commit-disiplin (delt arbeidstre)

Git-indeksen deles med andre økter. Stage og commit i ÉN operasjon, kun egne
filer, uten hooks:

```bash
git add src/lib/data/chapters/in1000-X-Y.json src/lib/data/quiz-staging/in1000-X-Y.quiz.json \
  && git commit --no-verify -m "in1000 kap. X.Y: <tittel> (N quiz, M flashcards)"
```

Commit etter HVERT ferdig kapittel — ikke til slutt.

## Filstier

- Kapittelinnhold: `src/lib/data/chapters/<id>.json`
- Quiz (mellomprodukt, slettes etter wiring): `src/lib/data/quiz-staging/<id>.quiz.json`
- Figurer: `public/images/textbook/in1000/*.svg` (bestilles i
  `FIGUR-BESTILLINGER.md`; lastes opp med `npx tsx scripts/upload-media-storage.ts`)
- Kjørt kode og datafiler: scratchpad, ikke i repoet.

## Videre etter byggebølgen

1. Wiring: `python3 scripts/hoyskolebok/wire-bok.py in1000` → «WIRING OK»,
   deretter slett `src/lib/data/quiz-staging/in1000-*`.
2. Kildegrunnlag-oppføring i `src/lib/data/kildegrunnlag.ts` (destillert fra
   EKSAMENSANALYSE §8 — 8 avsluttende sett, 3 fulle løsningsforslag, 4
   prøveeksamener med fasit, 27 filer; fire av dem er skannede uten uttrekkbar
   tekst; **ingen «sensorveiledninger»** som dokumenttype).
3. Registrer emnet i `src/app/bok/trinn/hoyere/institusjoner.ts` under UiO som
   «IN1000 Introduksjon til objektorientert programmering».
4. Verifikatorbølge (steg 3) — inkludert å løse ALLE `(verifiser)`.
5. Sluttport (steg 4): `sjekk-kode.py` · `sjekk-latex.py` ·
   `sjekk-bok.py in1000 "<forbudt-regex fra kontrakten>"` · `npx tsc --noEmit` ·
   `npm run build` · prod-curl (inkl. `<pre`-sjekken).

Les alltid først: `BYGGEKONTRAKT.md` (format og krav — HELE, særlig §0,
Kodekontrakten og §K5b delegerings-navneregelen), `SKJELETT.md` (faglig innhold
per kapittel), `../DNA-regnefag.md` (arketype), `../README.md` «Leserkrav».
