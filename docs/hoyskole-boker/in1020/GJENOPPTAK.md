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
- **Steg 1: oppdrag B1 FERDIG** (25. juli 2026) — Del 0 og hele Del 1 er på
  disk og committet, 9 filer:

  | Kapittel | Quiz | Flashcards | Oppgaver | Min |
  |---|---|---|---|---|
  | 0.1 Eksamenskartet | 16 / 16 | 14 / 14 | 3 | 35 |
  | 1.1 Tallsystemer | 22 / 22 | 24 / 24 | 8 | 45 |
  | 1.2 DRILL tallkonvertering | 26 / 26 | 12 / 12 | 14 | 80 |
  | 1.3 To-er komplement | 22 / 22 | 22 / 22 | 9 | 45 |
  | 1.4 LMC instruksjonssett | 22 / 22 | 27 / 26 | 8 | 50 |
  | 1.5 Maskinkode og selvmodifisering | 20 / 20 | 20 / 20 | 8 | 50 |
  | 1.6 DRILL LMC | 26 / 26 | 10 / 10 | 14 | 80 |
  | 1.7 Tegn, formater, farger | 20 / 20 | 24 / 24 | 7 | 45 |
  | 1.P Prøver til del 1 | — | — | 16 | 115 |
  | **Sum** | **174 / 174** | **153 / 152** | **87** | **545** |

  Alle porter grønne: `status-bok.py` 8/32 kapitler + prøvekapitlet,
  `sjekk-latex.py` LATEX-PORT OK, `sjekk-skjelett.py` KVALITETSPORT OK,
  term-sjekkeren `avvik: 0`.

- **Steg 1: oppdrag B2 og B3 FERDIG** (25. juli 2026) — hele Del 2 og Del 3 er
  på disk og committet, 16 filer:

  | Kapittel | Quiz | Flashcards | Oppgaver | Min |
  |---|---|---|---|---|
  | 2.1 Logiske porter | 22 / 22 | 33 / 24 | 8 | 45 |
  | 2.2 Kretsanalyse og boolsk algebra | 22 / 22 | 23 / 20 | 9 | 50 |
  | 2.3 DRILL port-ID og kretsanalyse | 26 / 26 | 11 / 10 | 14 | 80 |
  | 2.4 Arkitektur (von Neumann, ALU, buss) | 24 / 24 | 43 / 28 | 9 | 55 |
  | 2.5 Minnehierarki og cache | 20 / 20 | 24 / 20 | 9 | 50 |
  | 2.6 Abstraksjonsnivåer | 16 / 16 | 20 / 16 | 7 | 40 |
  | 2.7 DRILL arkitektur, cache, abstraksjon | 24 / 24 | 10 / 10 | 14 | 80 |
  | 2.P Prøver til del 2 | — | — | 16 | 115 |
  | 3.1 Sikkerhetsmål og -tiltak | 22 / 22 | 35 / 26 | 8 | 45 |
  | 3.2 Trusselmodellering og risiko | 20 / 20 | 26 / 20 | 8 | 45 |
  | 3.3 Symmetrisk og asymmetrisk krypto | 22 / 22 | 27 / 22 | 8 | 50 |
  | 3.4 Digital signatur, hash og PKI | 22 / 22 | 30 / 24 | 8 | 50 |
  | 3.5 DRILL mål/tiltak og nøkkelretning | 26 / 26 | 10 / 10 | 14 | 80 |
  | 3.6 Autentisering og passord | 18 / 18 | 23 / 20 | 8 | 45 |
  | 3.7 Personvern, GDPR og skadevare | 20 / 20 | 32 / 24 | 8 | 50 |
  | 3.P Prøver til del 3 | — | — | 16 | 115 |
  | **Sum B2+B3** | **304 / 304** | **347 / 274** | **164** | **995** |

  Alle porter grønne: `status-bok.py` 22/32 kapitler + tre prøvekapitler,
  `sjekk-latex.py` LATEX-PORT OK, `sjekk-skjelett.py` KVALITETSPORT OK,
  term- og pensum-sjekkeren `avvik: 0`, lengde-tell under 30 % i alle
  quizfiler.

- **Steg 1: oppdrag B4 og B5 FERDIG** (26. juli 2026) — hele Del 4 og Del 5 er
  på disk og committet, 11 filer. **Boka er dermed komplett: 36 av 36 filer.**

  | Kapittel | Quiz | Flashcards | Oppgaver | Min |
  |---|---|---|---|---|
  | 4.1 TCP/IP-lag og protokoller | 24 / 24 | 33 / 26 | 8 | 55 |
  | 4.2 IP-adressering og subnetting | 22 / 22 | 28 / 22 | 8 | 55 |
  | 4.3 Overføringstid og ytelse | 18 / 18 | 21 / 16 | 7 | 45 |
  | 4.4 DRILL subnetting og overføringstid | 26 / 26 | 10 / 10 | 16 | 85 |
  | 4.5 Nettjenester (NAT/CDN/DNS/IPv6/DHCP/DASH) | 22 / 22 | 33 / 26 | 8 | 50 |
  | 4.6 Aksessmodeller, svitsjing og OS | 18 / 18 | 31 / 18 | 7 | 45 |
  | 4.P Prøver til del 4 | — | — | 16 | 120 |
  | 5.1 Flervalgssjangeren og negativ poenggiving | 14 / 14 | 21 / 12 | 16 | 40 |
  | 5.2 Øvingseksamen 1 | 25 / 25 | — | 22 oppg. i seksjonstekst | 240 |
  | 5.3 Øvingseksamen 2 (regnetungt) | 25 / 25 | — | 15 oppg. i seksjonstekst | 240 |
  | 5.4 Øvingseksamen 3 (begrepstungt) | 25 / 25 | — | 16 oppg. i seksjonstekst | 240 |
  | **Sum B4+B5** | **219 / 219** | **177 / 130** | — | **1215** |

  **Boktotal: quiz 697 / 697 · flashcards 677 / 556 · 32 kapitler + 4
  prøvekapitler.** Kvoten er truffet eksakt på quiz og overskutt på flashcards.

  Alle porter grønne: `status-bok.py` **32/32 kapitler**, `sjekk-latex.py`
  LATEX-PORT OK, `sjekk-skjelett.py` KVALITETSPORT OK, term-/pensum-sjekkeren
  `avvik: 0`, lengde-tell under 30 % i alle 32 quizfiler, **ingen døde interne
  eller kryssbok-lenker igjen i hele boka**.

  **De døde lenkene fra Del 0–1 er nå levende:** kap. 0.1, 1.1 og 1.2 pekte på
  `in1020-4-1` … `in1020-4-4`, og alle fire filene finnes nå med nøyaktig de
  id-ene. `sjekk-bok.py` flagger dem ikke lenger.

  **Kap. 5.1 inneholder bokas ene merkede kalde bank** (`collapsible` «Kald bank
  — uten hint», 10 oppgaver med tomme `hints` og momentliste som fasit) og
  **«bestått på marginen»-modellbesvarelsen** (eksempel 2, nyskrevet og merket
  som det).

  Merknad om `npm run build`: arbeidstreet har **ingen `node_modules`**, så
  Turbopack-bygget kan ikke kjøres herfra (samme grunn som at `sjekk-latex.py`
  melder «mangler node_modules/katex»). Prebuild-steget `combine-chapters` kjørte
  derimot gjennom og kombinerte alle 11 184 kapitler uten JSON-feil — alle de 11
  nye filene parser. Fullt bygg tas ved wiring i hovedtreet.

  **NB (historisk, nå løst):** kap. 0.1, 1.1 og 1.2 hadde markdown-lenker til
  `in1020-4-1`, `in1020-4-2`, `in1020-4-3` og `in1020-4-4`. De var døde inntil
  Del 4 var skrevet — `sjekk-bok.py` flagget dem før det. B2 og B3 har ingen
  døde lenker.

### Verktøy bygget underveis (i scratchpad, ikke i repoet)

- **LMC-simulator** (`lmc.py`): monterer et program fra en liste av
  `(adresse, "MNEM xx")` og kjører det med `spor=True` for full sporetabell.
  **Alle LMC-programmer i Del 1 er kontrollert mot den**, også de gale
  alternativene i fyll-inn-oppgavene. Den lå fortsatt i scratchpad da B5 startet
  og ble gjenbrukt: **alle fire LMC-programmene i Del 5 er sport mot den**
  (nedtelling, selvmodifiserende `DAT 604`-hopp, absoluttverdi med baklengs
  sporing, og `OTC`-utskriften `BIT`), også for de inputverdiene som brukes i
  distraktorene.
- **Term-porten** (python-versjonen i BYGGEKONTRAKT §N2): sjekker
  forbudt-termer og pensum-avgrensning på én gang, med nærmeste omsluttende
  objekt som kontekst. Kjør den etter hvert kapittel.
- **`net.py`** (bygget av B4): `rapport(ip, cidr)` skriver ut maske, vertsbit,
  `2ⁿ − 2`, subnett- og kringkastingsadresse og hele AND/OR-oppstillingen på den
  delvise oktetten; `tid(mb, mbit_s)` regner overføringstid med og uten
  ×8-faktoren. **Hver eneste adresse og hver eneste tid i Del 4 og 5 er kjørt
  gjennom den før den ble skrevet.**
- **`port-b45.py`** (bygget av B4): samleport som på én kjøring gjør
  pensum-avgrensning, forbudt-termer, døde interne og kryssbok-lenker,
  blokk-id-unikhet, tomme collapsibles, `Forkunnskaper`-overskrift,
  «Symbol- og formelliste», warning-krav, kvotetelling mot kvotetabellen og
  lengde-tell per quizfil. Kjør den etter hvert kapittel — den fanger alt
  `sjekk-bok.py` fanger, men uten å kreve at boka er wiret.

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
   `src/app/trinn/hoyere/institusjoner.ts` — wire-bok.py patcher inn
   emnet; kontroller at oppføringen kom med.
4. Verifikatorbølge (steg 3) — særlig: etterregn ALLE talleksempler på nytt,
   spor alle LMC-programmer, og les hver oppgave for usett forkunnskap.
5. Sluttport (steg 4): `sjekk-latex.py` · `sjekk-bok.py in1020 "<forbudt-regex
   fra kontrakten>"` · pensum-avgrensnings-grepen · `npx tsc --noEmit` ·
   `npm run build` · prod-curl.

Les alltid først: `BYGGEKONTRAKT.md` (format og krav — HELE, særlig §R
Regnekontrakten og §F Flervalgskontrakten), `SKJELETT.md` (faglig innhold per
kapittel), `../DNA-regnefag.md` (arketype), `../README.md` «Leserkrav».
