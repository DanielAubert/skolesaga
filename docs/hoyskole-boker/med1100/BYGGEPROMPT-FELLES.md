# Felleskrav for alle byggeagenter — med1100

Denne fila er destillert fra `BYGGEPLAN-MAL.md` steg 1 (PROMPT-MAL byggeagent)
så hver agent får identisk ordlyd. Den ERSTATTER ikke `BYGGEKONTRAKT.md` — den
er sikkerhetsnettet som gjentar det som oftest glipper.

## Arbeidstre

Jobb i `.claude/worktrees/bok-med1100`, ikke i hovedtreet.

## Les først

1. `docs/hoyskole-boker/med1100/BYGGEKONTRAKT.md` — HELE. Autoritativ.
2. `docs/hoyskole-boker/med1100/SKJELETT.md` — «Bokens identitet»,
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

    [kap. X.Y](/med1100/med1100-X-Y)

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

## Fagsærkrav (full ordlyd i BYGGEKONTRAKT §B, §H, §M, §T, §S, §R, §G)

- **§H HELSEFAGLIG FORBEHOLD — ufravikelig.** Boka er eksamensforberedelse,
  ALDRI helseråd eller klinisk veiledning. Ingen setning skal kunne leses som
  behandlingsanbefaling. Kliniske vignetter er innpakning rundt mekanismen,
  ikke pasientråd. Farmakologi omtales som mekanisme. Alle case er fiktive.
  Ingen utfallsløfter.
- **§M MEDISINSK PRESISJON.** Tall og normalverdier dikes ALDRI opp. Usikre
  verdier fra eldre sett (2021–2022) får standard klartekst-forbehold og logges
  i `USIKRE-TALL.md`. Et usikkert tall blir ALDRI fasit i quiz, flashcard eller
  prøve.
- **§B BLOKK-KONTRAKTEN.** Tre separate eksamener med ulik logikk — hver oppgave
  merkes med blokk (B1/B2/B3). Blokk 1: digital ~5 t, kalkulator + statistiske
  tabeller + formelsamling. Blokk 2: 6 t skriftlig, oppgaver A–I med vekttall
  som summerer til 100. Blokk 3: flervalgsbank, presis latinsk nomenklatur.
  Minuspoeng-asymmetrien mellom blokkene skal være tydelig for leseren.
- **§T LATIN OG NOTASJON.** Riktig bøyning, n./nn., artsnavn i kursiv.
  Fantasinavn kun som eksplisitt merkede distraktorer.
- **§T5 NØKKELFAKTA- OG FORMELLISTE.** Collapsible rett etter Forkunnskaper.
  Første tekstlinje ORDRETT slik kontrakten angir — den inneholder strengen
  «Symbol- og formelliste», som sluttporten krever i alle kapitler med
  LaTeX-symboler.
- **§S SENSORKONTRAKTEN.** Vurderingen er bestått/ikke bestått.
  Karakterbokstaver er FORBUDT i modellbesvarelser — bruk «full pott» og
  «bestått på marginen».
- **§G FIGURKONTRAKTEN.** Skjematiske SVG-er. Ingen tegning får utgi seg for å
  være et ekte preparat- eller pasientbilde.

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
- `python3 scripts/hoyskolebok/sjekk-latex.py med1100` — MED1100 har LaTeX i
  statistikk- og regnekapitlene; porten fanger rå LaTeX og prosa satt som matte.
  Kan feile på andre agenters ufullstendige kapitler; se bare på DINE filer.
- **Dollartegn som ikke er matte MÅ escapes `\$`.** To uescapede `$` på samme
  linje er partall, så den gamle ubalanse-sjekken så dem ikke — rendreren parret
  dem og satte teksten mellom som formel. Rammet 21 filer i live bøker 25. juli.

## Rapporter

Filer skrevet, kvotestatus, valideringsstatus, og eventuelle steder du måtte ta
et faglig valg skjelettet ikke dekket.
