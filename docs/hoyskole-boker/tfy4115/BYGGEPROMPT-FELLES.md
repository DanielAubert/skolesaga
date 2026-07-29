# Felleskrav for alle byggeagenter — tfy4115

Denne fila er destillert fra `BYGGEPLAN-MAL.md` steg 1 (PROMPT-MAL byggeagent)
så hver agent får identisk ordlyd. Den ERSTATTER ikke `BYGGEKONTRAKT.md` — den
er sikkerhetsnettet som gjentar det som oftest glipper.

## Arbeidstre

Jobb i `.claude/worktrees/bok-tfy4115`, ikke i hovedtreet.

## Les først

1. `docs/hoyskole-boker/tfy4115/BYGGEKONTRAKT.md` — HELE. Autoritativ.
2. `docs/hoyskole-boker/tfy4115/SKJELETT.md` — «Bokens identitet»,
   «Makrostruktur», og NØYE per-kapittel-DNA for DINE kapitler.
3. `src/lib/data/chapters/econ1310-2-1.json` — kun strukturreferanse.

## Læringsløkker (ufravikelig)

`content[]` struktureres som gjentatte små løkker: teori
(`text`/`definition`/`theorem`) → `example` → `exercise` — IKKE all teori øverst
og alle oppgaver nederst. `exercise`-blokkene står INLINE rett etter eksempelet
de hører til; plattformen renderer dem inline.

INGEN oppgave får kreve et begrep, en regel, en formel eller en metode som ikke
er introdusert tidligere — til og med eksempelet foran, eller en refererte
forkunnskap.

## Nybegynner-inngang

Boka skal forstås av en som ALDRI har hatt faget. Hver kode (sjanger-/
oppgavekode, feilkode #N, karakterbokstav) og all karaktersjargong («C-stoff»,
«A-markør») + insider-term skrives FULLT UT i klarspråk ved FØRSTE bruk. Ingen
kald kode i `competenceGoals` eller i aller første tekstboks. Feilkoder glosses
ved første bruk PER KAPITTEL.

## Interne lenker — MERK

«kap. X.Y» i forkunnskaper og fasiter skrives som markdown-lenke:

    [kap. X.Y](/tfy4115/tfy4115-X-Y)

⚠ `/bok`-prefikset ble FJERNET 27. juli 2026. Skriv ALDRI `/bok/…`. Lenk kun til
kapitler som finnes.

## Deloppgaver

a), b), c) i `task`/`solution`: HVER på egen linje med fet merking —
`…\n\n**a)** …\n**b)** …`. ALDRI bak hverandre i løpende tekst. Ikke bruk
`subTasks`-feltet.

## Studentpanel-krav (skal inn i FØRSTEutkastet)

- Statiske flervalg i prøve-collapsibles har STOKKEDE fasit-bokstaver — aldri
  «alle a». Quiz-filene beholder `options[0]`-invarianten. Prøve-tipen sier hvor
  flervalget bor.
- Hver stor begrepsbank åpner med «flashcard-stoff — hopp trygt over ved
  førstegangslesing»-notisen. `definition`-blokker slettes ALDRI for å «rydde».
- Modellbesvarelser ærlig merket, med minst én autentisk B-/midtnivåbesvarelse.
  De lander IKKE alle på samme kompromissform — minst én skarp, veid konklusjon.
- Avkryssbar selvdiagnose-sjekkliste (☐) etter hver prøvefasit.
- Én lett innstegsoppgave tidlig i teorikapitler der første oppgave ellers er
  full eksamenssjanger.
- Abstrakte kjernetemaer åpner med hverdagsanker og bruker verdens-caser — ikke
  «en medstudent skriver …».
- Avvik mellom deklarert oppgavetid og sum deltider forklares.
- Collapsibles har `content`-nøkkel med blokker. Aldri tom, aldri `text`.
- Alle `exercises` har utfylte `hints`. Første hint = formel eller første grep,
  ALDRI konklusjonen. Unntak kun i merket kald bank.
- Signal- og hintbokser står ETTER oppgaven de varsler.
- Meta-fasit er forbudt: «en A-besvarelse ville ha drøftet …» → skriv
  drøftelsen UT.
- Frekvenspåstander («N av M sett») stemmer EKSAKT med belegg-listene. Tell.
- Kapitler over 45 min har tidsanslag per løkke eller pausepunkt-markører.
  Prøvekapitler deklarerer «N prøver à ~X min» + «kan deles over flere kvelder».
- Karakter-realisme: «C er en god og vanlig karakter». ALDRI «Prioritet:
  perfekt» — skriv «høyeste prioritet».

## INGEN LENGDE-TELL (skjerpet 15. juli 2026, produkteier)

Fasiten skal IKKE være det lengste eller mest detaljerte alternativet. Alle fire
alternativer skal ha jevn lengde og presisjonsgrad — en student som «velger det
lengste» skal treffe ~25 %, ikke 77 %. Skriv distraktorene like fyldige og
plausible som fasiten; trim heller fasiten.

Distraktorer gjengir ALDRI bokas egne nyanser som «galt» svar. Nær-sanne
distraktorer forklares i fasit-kommentaren.

Verifiser med `node scripts/hoyskolebok/quiz-lengdesjekk.mjs` før du melder ferdig.

## Fysikk-særkrav (full ordlyd i BYGGEKONTRAKT §N, §H, §M, §S, §G, §R)

- **§M FLERVALGET ER HELE EKSAMEN.** I nyeste dokumenterte form (2019–2020) er
  eksamen 100 % flervalg med **seks alternativer A–F**, ~40 spørsmål, fast delt
  i mekanikk 1–20 og termofysikk 21–40. Eldre sett (2013/2017/2018) har 50
  spørsmål med **fem alternativer A–E**. Ett poeng riktig, null for feil eller
  blankt, ingen delpoeng — kun bokstavsvaret.
  ⚠ **Statiske sett (D-prøver, øvingseksamener, MC-drill) skrives med SEKS
  alternativer A–F.** Plattformens quiz har fire. Boka MÅ si forskjellen i
  klartekst i kap. 0.1 og 12.1 — ellers lærer den bort feil gjettesannsynlighet:
  **17 % med A–F, ikke 25 %.**
- **§M FORM-TELL** (fagets versjon av LENGDE-TELL): fasiten skal ikke skille seg
  ut på form — ikke lengst, ikke mest presis, ikke den eneste med enhet, ikke
  den eneste med fortegn. Mål det selv.
- **§H HJELPEMIDDELKONTRAKTEN.** Kode C: **Rottmann** og et **utdelt
  fysikk-formelark**. Marker toveis: `[står på det utdelte arket]` /
  `[Rottmann]` / `[må kunne brukes eller utledes aktivt]`.
  ⚠ Boka får ALDRI love at egne notater er tillatt, og ingen oppskrift får hvile
  på grafisk eller programmerbar kalkulator — det er derfor kap. 11.1 er
  håndkjørte iterasjoner.
- **§N NOTASJONSKOLLISJONENE** er fem, og de krysser mekanikk mot termo:
  `\gamma` (demping / adiabateksponent), `p` (bevegelsesmengde / trykk),
  `T` (periode / temperatur), `R` (radius / gasskonstant / termisk motstand),
  `S` (taustrekk / entropi). Marker begge veier i symbollistene.
  **Kelvin-disiplin** og **3–4 gjeldende siffer gjennom hele kjeden** — fordi
  flervalgsalternativene ligger tett, og avrunding underveis flytter svaret.
- **§G FIGURKONTRAKTEN:** 21 obligatoriske figurer, hver med en 17-punkts
  fysikk-kontroll. Lag dem som ekte SVG, last opp med
  `scripts/hoyskolebok/last-opp-figurer.py`, verifiser med `sjekk-figurer.py` —
  porten tester mot Storage, ikke disk.
  ⚠ fys1001-boka hadde en figur med **fysisk umulig kraftretning** som slapp
  gjennom til verifiseringen. Kontroller hver figur mot fysikken, ikke bare mot
  at den rendrer.
- **§R REGNEKONTRAKTEN:** 13 obligatoriske numeriske sannhetskontroller. Etterregn
  ALT med python3 — hvert fortegn, hver enhet, hver omregning. fys1001 hadde feil
  omløpsretning for en ladd partikkel og feil netto stråling (255 W) som først ble
  fanget i verifiseringsbølgen.
- **ORDET «sensorveiledning» er FORBUDT** utenfor kap. 0.1. Arkivet har ingen —
  bruk «løsningsforslagene viser …».

## Quiz

Skriv til `src/lib/data/quiz-staging/<id>.quiz.json`. Kvoter = skjelettets
kvotesammendrag, AUTORITATIVT. `options[0]` alltid riktig.

## Usikre referanser

Merkes med den FULLE forklarende formen, f.eks. «(verifiser mot gjeldende pensum
— f-strenger varslet inn etter 2019)». ALDRI den bokstavelige strengen
«(verifiser)» alene: sluttporten `sjekk-bok.py` avviser den.

## Valider før du melder ferdig

- `python3 -c "import json; json.load(open(f))"` på hver fil
- kvotetelling mot skjelettet
- at `content[]` veksler teori→eksempel→oppgave i løkker, oppgaver inline
- at ingen oppgave krever usett forkunnskap
- `python3 scripts/hoyskolebok/sjekk-latex.py tfy4115` — tett LaTeX-bok; porten
  fanger rå LaTeX og prosa satt som matte. **Dollartegn som ikke er matte MÅ
  escapes `\$`** — to uescapede på samme linje er partall og slipper forbi den
  gamle ubalanse-sjekken.
- `python3 scripts/hoyskolebok/sjekk-figurer.py tfy4115` — mot Storage.

## Rapporter

Filer skrevet, kvotestatus, valideringsstatus, og eventuelle steder du måtte ta
et faglig valg skjelettet ikke dekket.
