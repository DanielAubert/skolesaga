# Felleskrav for alle byggeagenter — in2010

Denne fila er destillert fra `BYGGEPLAN-MAL.md` steg 1 (PROMPT-MAL byggeagent)
så hver agent får identisk ordlyd. Den ERSTATTER ikke `BYGGEKONTRAKT.md` — den
er sikkerhetsnettet som gjentar det som oftest glipper.

## Arbeidstre

Jobb i `.claude/worktrees/bok-in2010`, ikke i hovedtreet.

## Les først

1. `docs/hoyskole-boker/in2010/BYGGEKONTRAKT.md` — HELE. Autoritativ.
2. `docs/hoyskole-boker/in2010/SKJELETT.md` — «Bokens identitet»,
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

    [kap. X.Y](/in2010/in2010-X-Y)

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

## Algoritmefag-særkrav (full ordlyd i BYGGEKONTRAKT §P, §H, §R)

- **KODESPRÅKET ER GENERISK PSEUDOKODE** — verken Java, Python eller CLRS.
  UiO bruker `Procedure`-hoder med Input/Output-spesifikasjon og selvforklarende
  navn (`RemoveMin`, `HeapInsert`, `DFSVisit`).
  ⚠ **Array-indeks fra 0**: forelder er ⌊(i−1)/2⌋, barn er 2i+1 og 2i+2 —
  MOTSATT av CLRS og NTNUs TDT4120. Ikke kopier CLRS-konvensjonen.
  Kjøretid forenkles ved **løkketelling, aldri masterteorem**. Hovedsakelig O,
  ingen o eller ω.
- **ALL pseudokode i ```text-gjerder.** ```python, ```java og ```pseudo er
  FORBUDT i kapittelfilene — ```python ville dessuten trigge `compile()` i
  sjekk-kode.py på kode som ikke er Python.
- **§H HÅNDKJØRING er en egen eksamensferdighet.** Sporingstavler — BST-
  innsetting, heap-sift, Dijkstra-tabell, linear probing, AVL-rotasjoner,
  Huffman, Kahn — SKAL genereres PROGRAMMATISK: skriv en simulator i
  scratchpad, kjør den, lim inn utskriften ordrett. Aldri for hånd, og aldri
  via `heapq`/`dict`-snarveier som skjuler stegene.
  NB: `sjekk-sporing.py` gir «0 sjekket» her, siden boka ikke har Python.
  Porten erstatter altså IKKE simulatoren din — den er ditt eget ansvar.
- **§R REKURSJON ER PENSUM.** `in2010` står i `REKURSJON_ER_PENSUM` i
  sjekk-kode.py, så porten flagger ikke selvkall. in1900-regelen om at
  rekursjon er utenfor pensum skal IKKE kopieres inn.
- **DEL 3 ER TYNGRE ENN VED NTNU.** Hashing har 100 % frekvens her mot 41 % i
  TDT4120, og testes både som håndkjøring og pseudokode. Samme gjelder
  AVL-rotasjoner. Motsatt er DP, maks-flyt, masterteorem, Floyd–Warshall og
  Gale–Shapley IKKE pensum.
- **ETTERREGN kjøretidspåstander** (§P4). En O-påstand som ikke stemmer med
  løkketellingen, er verre enn ingen påstand.
- **SENSORVEILEDNING er et SANT ord her.** IN2010 er et av få emner med ekte
  sensorveiledninger: 7 stykker, H2018–H2024, frie etter åndsverkloven § 14.
  De kan siteres. Alt innhold i boka er likevel nyskrevet.
- **KVOTEAVVIK I SKJELETTET:** §1 sier 504 flashcards, §5-summeringen gir 502.
  **§5 er autoritativ — bygg 502.** Ikke «rett» dette.

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
- `python3 scripts/hoyskolebok/sjekk-latex.py in2010`
- `python3 scripts/hoyskolebok/sjekk-figurer.py in2010` — mot Storage, ikke disk

## Rapporter

Filer skrevet, kvotestatus, valideringsstatus, og eventuelle steder du måtte ta
et faglig valg skjelettet ikke dekket.
