# Felleskrav for alle byggeagenter — tdt4110

Denne fila er destillert fra `BYGGEPLAN-MAL.md` steg 1 (PROMPT-MAL byggeagent)
så hver agent får identisk ordlyd. Den ERSTATTER ikke `BYGGEKONTRAKT.md` — den
er sikkerhetsnettet som gjentar det som oftest glipper.

## Arbeidstre

Jobb i `.claude/worktrees/bok-tdt4110`, ikke i hovedtreet.

## Les først

1. `docs/hoyskole-boker/tdt4110/BYGGEKONTRAKT.md` — HELE. Autoritativ.
2. `docs/hoyskole-boker/tdt4110/SKJELETT.md` — «Bokens identitet»,
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

    [kap. X.Y](/tdt4110/tdt4110-X-Y)

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

## Kodefag-særkrav (full ordlyd i BYGGEKONTRAKT §K1–§K11)

- Alle ` ```python `-blokker SKAL kompilere. Ikke-kjørbare fragmenter, pseudokode
  og plantede syntaksfeil merkes ` ```text `.
- `print(...)` i et fasit- eller teorifelt følges av en «**Utskrift:**»-blokk med
  den faktiske utskriften.
- Ingen OOP, ingen NumPy/Matplotlib/pandas/sympy, ingen `if __name__ ==
  '__main__'`, ingen dekoratorer, dataclass, walrus eller match/case.
- 4 mellomrom som innrykk. Aldri TAB i Python-kilden.
- **`input()`-kode vises med «Kjøring:»-blokk** (mønster utviklet av Del 2-agenten
  28. juli, gjelder 1.4, 7.7 og Del 9). Interaktiv kode kan verken kjøres av
  utskriftsporten eller stå som dødt `text`-fragment. Formen er:
  1. ` ```python `-blokka viser bare definisjonen — den kjører rent, uten utskrift.
  2. «**Utskrift:** ingen — funksjonen definerer bare» som ren tekst.
  3. «**Kjøring:**»-blokk med den FAKTISK kjørte dialogen: stdin matet inn,
     brukerens svar flettet der terminalen ville vist dem, markert med pil — og
     én setning som sier at pilen ikke står på skjermen.
  Dialogen skal være ekte kjørt, aldri skrevet fra hukommelsen.
- Rekursjon ER pensum i TDT4110 (~60 % av settene) — men hører hjemme i Del 5 og
  Del 6, ikke i grunnlagsdelene.

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
- `python3 scripts/hoyskolebok/sjekk-kode.py tdt4110` — kan feile på andre
  agenters ufullstendige kapitler; se bare på DINE filer

## Rapporter

Filer skrevet, kvotestatus, valideringsstatus, og eventuelle steder du måtte ta
et faglig valg skjelettet ikke dekket.
