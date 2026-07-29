# Felleskrav for alle byggeagenter — tma4135

Denne fila er destillert fra `BYGGEPLAN-MAL.md` steg 1 (PROMPT-MAL byggeagent)
så hver agent får identisk ordlyd. Den ERSTATTER ikke `BYGGEKONTRAKT.md` — den
er sikkerhetsnettet som gjentar det som oftest glipper.

## Arbeidstre

Jobb i `.claude/worktrees/bok-tma4135`, ikke i hovedtreet.

## Les først

1. `docs/hoyskole-boker/tma4135/BYGGEKONTRAKT.md` — HELE. Autoritativ.
2. `docs/hoyskole-boker/tma4135/SKJELETT.md` — «Bokens identitet»,
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

    [kap. X.Y](/tma4135/tma4135-X-Y)

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

## Regnefag-særkrav (full ordlyd i BYGGEKONTRAKT §8 og §13)

- **FORMELARK-DOKTRINEN (§8).** Eksamen er kode C: studenten har det utdelte
  formelarket OG sitt eget A5-ark. Derfor driller boka **metodevalg og føring**,
  ikke pugging. Marker toveis: «står på det utdelte formelarket — tren
  oppslaget» kontra «må kunnes eller utledes aktivt». Begrunn premisset med
  kode C der det introduseres.
- **MÅLGRUPPEBOKSEN (§0).** Kapittel 0.1 åpner med «Er dette boka di?» — se
  MÅLGRUPPE.md. Dette er den ENESTE tillatte omtalen av TMA4432 i hele boka.
- **ORDENE «utfaset», «utfasing», «utgår», «siste kull», «nedlagt» er
  FORBUDT** om TMA4135. Emnet går som normalt; emnesiden har intet slikt varsel.
- **MATEMATISK SANNHETSKONTROLL.** Etterregn ALT med python3 — hver transform,
  hver koeffisient, hver Butcher-tabell, hver stabilitetsgrense. En fortegnsfeil
  i en Laplace-tabell er verre enn ingen tabell. Kontroller fortegns- og
  entydighetspåstander numerisk i fullt parameterrom, ikke ved å påstå dem.
- **NOTASJON** følger §13: $\mathcal{L}$, $F(s)$/$Y(s)$, $\hat f(\omega)$,
  $a_n/b_n/c_n$, $u = F(x)G(t)$, Butcher-tabeller, $R(z)$, $U_i^n$.
  ⚠ **$k$-klashen:** Del 8 bruker $\Delta t$ og $r = \Delta t/h^2$, mens det
  utdelte arket kaller tidssteget $k$. Fotnote det der det først kan forvirre.
- **FREKVENSNEVNEREN ER 13.** Skriv «N av 13 sett» — ALDRI «av 29» eller «av
  56». Arkivet har flere filer, men bare 13 sett er gjennomgått. Se
  ARKIVKONTROLL.md.
- **ORDET «sensorveiledning» er FORBUDT.** Alle 27 løsningsforslag er
  faglærerskrevne og opphavsrettslig vernet — fasitkilde, aldri gjengitt.
- **FIGURER:** Fourier-utvidelser, d'Alembert-bølger, gitter med falsk node og
  stabilitetsintervall krever ekte SVG. Lag dem, last opp med
  `scripts/hoyskolebok/last-opp-figurer.py`, og verifiser med
  `sjekk-figurer.py` — porten tester mot Storage, ikke disk.

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
- `python3 scripts/hoyskolebok/sjekk-latex.py tma4135` — tett LaTeX-bok; porten
  fanger rå LaTeX og prosa satt som matte. **Dollartegn som ikke er matte MÅ
  escapes `\$`** — to uescapede på samme linje er partall og slipper forbi den
  gamle ubalanse-sjekken.
- `python3 scripts/hoyskolebok/sjekk-figurer.py tma4135` — mot Storage.

## Rapporter

Filer skrevet, kvotestatus, valideringsstatus, og eventuelle steder du måtte ta
et faglig valg skjelettet ikke dekket.
