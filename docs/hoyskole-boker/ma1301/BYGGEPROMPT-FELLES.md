# Felleskrav for alle byggeagenter — ma1301

Denne fila er destillert fra `BYGGEPLAN-MAL.md` steg 1 (PROMPT-MAL byggeagent)
så hver agent får identisk ordlyd. Den ERSTATTER ikke `BYGGEKONTRAKT.md` — den
er sikkerhetsnettet som gjentar det som oftest glipper.

## Arbeidstre

Jobb i `.claude/worktrees/bok-ma1301`, ikke i hovedtreet.

## Les først

1. `docs/hoyskole-boker/ma1301/BYGGEKONTRAKT.md` — HELE. Autoritativ.
2. `docs/hoyskole-boker/ma1301/SKJELETT.md` — «Bokens identitet»,
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

    [kap. X.Y](/ma1301/ma1301-X-Y)

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

## Regnefag-særkrav (full ordlyd i BYGGEKONTRAKT §9 og §15)

- **⚠ KODE D-DOKTRINEN (§9) — IKKE kopier formelark-doktrinen fra tma4135.**
  Eksamen er kode D: **ingen bok, ingen formelsamling, ingen tabeller, ingen
  egne notater.** Bare en bestemt enkel kalkulator, som ikke kan redusere
  `7^402 mod 100`, faktorisere eller kjøre Euklid.
  Derfor er en «slå opp»-vane **direkte skadelig** — den erstatter en ferdighet
  med en handling studenten ikke får utføre.
- **SKILL SKARPT mellom utenat og utledes på stedet.** Marker toveis, tre steder
  per kapittel: i teksten, i eksempelfasiten og i Symbol- og formellisten.
  Bruk ordlyden «må sitte utenat» / «utledes på stedet» så den er grep-bar.
- **EN «KAN UTLEDES»-PÅSTAND UTEN UTSKREVET UTLEDNING ER EN BYGGEFEIL.**
  Skriver du at Fermat følger av Euler, SKAL utledningen stå der, med tidsanslag.
- **`tip` «Utenat under kode D»** som blokk 2 i hvert teori- og drillkapittel.
- **KODE D-REALISME I TALLVALG:** Euklid maks 6 linjer, moduler maks 4 siffer,
  RSA med n under 10 000, potenser reduserbare i 2–5 steg. Er oppgaven ikke
  regnbar under kode D, er den feil oppgave.
- **FORBUDT SPRÅK:** «står på formelarket», «slå opp i tabellen»,
  «kalkulatoren gir …», «du trenger ikke huske dette».
- **MATEMATISK SANNHETSKONTROLL:** etterregn ALT med sympy. Hver kongruens,
  hvert Legendre-symbol, hver orden, hver RSA-nøkkel. Kontroller løsninger ved
  innsetting.
- **MA6301:** oppgavesettet for høsten 2024 var felles med MA6301 — belagt med
  filnavnet. Skriv IKKE at settene alltid deles; emnesiden sier bare «faglig
  overlapp».


## ⚠ FLASHCARD-KVOTEN KOMMER BARE FRA `definition` PÅ TOPPNIVÅ

`getFlashcardDefinitions` (src/lib/data/flashcard-definitions.ts) itererer
`for (const block of chapter.content)` — altså **kun toppnivå** — og filtrerer
`block.type === 'definition'`.

Konsekvensen, målt og verifisert 30. juli 2026:

- **`theorem`-blokker gir NULL flashcards.** Et navngitt teorem hører riktignok
  i en `theorem`-blokk for rendringens del — men da teller det ikke mot kvoten.
- **`definition` inne i en collapsible gir NULL flashcards.** Bare toppnivå.

Dette rammer særlig Del 2–8, som har flere navngitte teoremer per kapittel enn
Del 1. Del 1-agenten løste det ved å legge de ti teoremene som `theorem`
(riktig rendring) og fylle kvoten med begreps- og prosedyrekort på toppnivå.

**Regelen: tell kvoten som antall `definition`-blokker på toppnivå, og bare
dem.** Sjekk med:

    python3 -c "import json,glob;
    print(sum(1 for f in glob.glob('src/lib/data/chapters/ma1301-*.json')
              for b in json.load(open(f,encoding='utf-8')).get('content',[])
              if isinstance(b,dict) and b.get('type')=='definition'))"

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
- `python3 scripts/hoyskolebok/sjekk-latex.py ma1301` — tett LaTeX-bok; porten
  fanger rå LaTeX og prosa satt som matte. **Dollartegn som ikke er matte MÅ
  escapes `\$`** — to uescapede på samme linje er partall og slipper forbi den
  gamle ubalanse-sjekken.
- `python3 scripts/hoyskolebok/sjekk-figurer.py ma1301` — mot Storage.

## Rapporter

Filer skrevet, kvotestatus, valideringsstatus, og eventuelle steder du måtte ta
et faglig valg skjelettet ikke dekket.
