# Byggekontrakt — TMA4245 Statistikk (NTNU), regnefag-arketype

Instansiert fra `BYGGEKONTRAKT-MAL.md`. Arketype: **DNA-regnefag**. Denne
kontrakten er bindende for hver kapittelforfatter. Les den HELT før du skriver.
SKJELETTET (`SKJELETT.md`) er autoritativt for per-kapittel-DNA, kvoter og
eksamensbelegg; ved konflikt vinner skjelettet på faginnhold, denne kontrakten
på form/struktur.

## Filplassering
Ett JSON-dokument per kapittel: `src/lib/data/chapters/tma4245-<del>-<nr>.json`
(prøver: `tma4245-<del>-prove.json`). Quiz:
`src/lib/data/quiz-staging/tma4245-<del>-<nr>.quiz.json`.
IKKE rør `_registry.json`, `textbook-courses*.ts`, `quiz-data*.ts` — wiring er
sentral (fase 5). Generer ALL JSON via python `json.dump(..., ensure_ascii=False,
indent=2)` — aldri for hånd (LaTeX-backslash må bli `\\` i JSON).

## Kapittel-JSON (toppnivå)
`{ id, courseId: 'tma4245', chapterNumber: '<del>.<nr>' (fra skjelettet),
title, description, estimatedMinutes, competenceGoals: [2–4 «kunne …» — INGEN
kald kode/sjangerbokstav her], content: [blokker], exercises: [] }`

## Blokktyper (eksakte felt — referanse: src/lib/data/chapters/econ1310-2-1.json)
- `text`: `{id, type, content}` (markdown + LaTeX `$...$`/`$$...$$`)
- `definition`: `{id, type, title, content}` — **title OBLIGATORISK**; åpne med
  forklaring i ORD, formelen kommer ETTER (aldri ligning som første linje).
  Flashcards genereres KUN fra toppnivå definition-blokker med title.
- `theorem`: `{id, type, title, content}`
- `example`: `{id, type, title, problem, solution}` (solution = A-besvarelse
  med tabelloppslag/mellomregning eksplisitt)
- `tip` / `warning`: `{id, type, title, content}`
- `exercise`: `{id, type, exercise: {id, number, type:'classic', difficulty:
  'lett'|'middels'|'vanskelig', task, solution, hints:[...]}}`. ALDRI
  solutionVideo/allowsUpload/allowsCanvasDrawing/answer. IKKE bruk subTasks —
  deloppgaver a) b) c) skrives på egen linje i task/solution (se under).
- `collapsible`: `{id, type, title, buttonText, content:[blokker]}` — `content`
  er feltnavnet og skal ALLTID ha blokker (aldri tom, aldri `text`-nøkkel).
Blokk-id: `<kapittel-id>-<løpenavn>`, unike i kapitlet.

## Obligatorisk kapittelstruktur (teori/drill), i rekkefølge
1. `tip` **Eksamensvinkel** — frekvens/vekt/sjangre fra skjelettet (tallene
   EKSAKT fra skjelettets Eksamensbelegg; ikke rund opp/ned egne tall).
2. `text` **Forkunnskaper** — kapitler i boka som markdown-lenker
   `[kap. X.Y](/bok/tma4245/tma4245-X-Y)` + kryssbok-lenker KUN til filer som
   finnes. For matematiske forkunnskaper (derivasjon/integrasjon): lenk til
   R2-bøkene bare hvis du har verifisert id-en; ellers skriv «du trenger å
   kunne derivere og integrere polynomer og eksponensialfunksjoner» uten
   død lenke. Tunge kapitler (Del 6–9): VIS de 2–3 nøkkelformlene ferdig
   oppfrisket («Sist du var her»).
3. Læringsløkker: teori (`text`/`definition`/`theorem` + evt. utledning med
   «Intuisjon:»-linjer) → `example` → `exercise` INLINE, gjentatt løkke for
   løkke gjennom delkapitlet. IKKE all teori øverst / alle oppgaver nederst.
4. `warning` **Typiske feil** — de konkrete fra skjelettets «Typiske feil».
5. Begrepsbank: definition-blokker til flashcard-kvoten (hver stor bank åpner
   med notisen «Flashcard-/repetisjonsstoff — hopp trygt over ved
   førstegangslesing; tidsanslaget gjelder kjernestoffet»).
6. `collapsible` **Repetisjonsoppgaver** (teorikapitler) — 4–6 korte fra
   forkunnskapskapitlene.
7. SIST: `collapsible` **Symbol- og formelliste** (title «Symbol- og
   formelliste», buttonText «Vis symboler og formler»): første blokk/linje
   «Oppslagsverk — alt her forklares underveis i kapitlet.», deretter
   markdown-tabell `| Symbol | Betydning |` + «**Formler i dette kapitlet:**»
   med display-LaTeX + ordforklaring. ALLE symboler/formler brukt i kapitlet;
   per kapittel, ingen arv. (Port KREVER denne i hvert kapittel med LaTeX —
   også drill og prøve.)

Drillkapitler: `tip` Eksamensvinkel → `text` **Løsningsoppskrift** (nummerert
algoritme) → `example` **Gjennomregnet eksamenscase** med sensor-margnotater →
8–15 `exercise` på eksamensnivå (roter variantene) → `warning` → Symbol- og
formelliste. (Drill trenger ikke egen begrepsbank hvis flashcard-kvoten er lav;
følg skjelettets flashcard-tall — lag definition-blokker som «formelkort»/
«oppskriftskort» for å nå kvoten.)

## Læringsløkke + ingen usett teknikk (UFRAVIKELIG)
`content[]` veksler teori→eksempel→oppgave i løkker. Ingen oppgave får kreve en
formel/teknikk/begrep som ikke er vist tidligere i SAMME kapittel (t.o.m.
eksempelet rett foran) eller i et tidligere kapittel oppført i Forkunnskaper.
Sjekk hver exercise eksplisitt.

## Nybegynner-inngang / ingen uforklart sjargong
HVER sjangerbokstav (A–O), feilkode og karakterbokstav forklares i klarspråk
ved FØRSTE bruk i kapitlet; ALDRI kald kode i competenceGoals eller aller
første tekstboks. Tunge fagtermer (pivotal, MGF, minneløshet, testobservator,
frihetsgrader, forventningsrett) skrives ut med klarspråksforklaring første
gang. «C er en god og vanlig karakter» skal stå i Del 0. «Prioritet: perfekt»
er FORBUDT — skriv «høyeste prioritet». Modellbesvarelser ærlig merket (en
«C-besvarelse» ER på C-nivå); minst én autentisk B-/midtnivå-besvarelse i
prøvene. Meta-fasit forbudt («en A-besvarelse ville ha drøftet …» → skriv det
UT).

## Deloppgaver
a), b), c) i task/solution: HVER på egen linje med fet merking —
`…\n\n**a)** …\n**b)** …`. ALDRI bak hverandre i løpende tekst. IKKE subTasks.

## Hint + difficulty
Alle exercises har utfylte `hints` (første hint = formel/tabelloppslag/første
grep, ALDRI konklusjonen). Stigende vanskelighet: 2–3 lett, 2–4 middels, 2–4
vanskelig. Boka SAMLET (særlig 7.4 + 10.1) skal ha noen «(krevende)»-merkede
oppgaver og én merket kald bank uten hint (fasit = momentliste) i Del 10.
IKKE skriv «(krevende)»/«(vanskelig)» inne i task-teksten (redundant med
difficulty-feltet).

## Studentpanel (SKAL inn i førsteutkast)
- Statiske flervalg i prøve-collapsibles: STOKKEDE fasit-bokstaver (aldri «alle
  a»/«alle felle»); prøve-tipen sier hvor flervalget bor. Quiz-filer beholder
  options[0]-invarianten.
- Avkryssbar selvdiagnose-sjekkliste (☐) etter hver prøvefasit.
- Én lett innstegsoppgave (difficulty lett, ren gjengivelse) tidlig i
  teorikapitler der første oppgave ellers er full eksamenssjanger.
- Abstrakte kjernetemaer åpner med hverdagsanker; eksempler er verdens-caser
  (ingeniør/natur: levetider, målinger, prosesser, miljø), ALDRI «en
  medstudent skriver …».
- Kapitler > 45 min: tidsanslag per løkke / pausepunkt-markører; lange
  modellbesvarelser har «— naturlig pausepunkt —».
- Distraktorer gjengir ALDRI bokas egne nyanser som «galt» svar.
- INGEN LENGDE-TELL: quiz-fasiten (options[0]) skal IKKE være det lengste/mest
  detaljerte alternativet. Alle fire alternativer jevn lengde og presisjon —
  «velg det lengste» skal treffe ~25 %. Skriv distraktorene like fyldige som
  fasiten; trim heller fasiten. Sjekk med
  `scripts/hoyskolebok/quiz-lengdesjekk.mjs`.

## Del 0-pakken (kun kap. 0.1)
«Slik leser du denne boka»-orienteringsboks (type `text`/`tip`, ALDRI
`definition`) med karakterskala (A–F, «C er god og vanlig»), kompakt
sjangerkode-liste A–O (hver forklart), og at typiske feil har et samlet
register (Feilkatalogen). Ramm inn tunge symboler («du trenger ikke forstå
$\chi^2_{2n}$ ennå»). «Lite tid?»-boks (hurtigrute 3–5 dager + ukeplan fra
summerte estimatedMinutes; anslag = LESEtid, ×1,5 ved håndskriving). Kildenote
for frekvens-empirien: bygger på TMA4245/TMA4240-arkivet ~49 sett 2009–2026 (26
lest grundig med løsningsforslag), destillert i EKSAMENSANALYSE.md — nevn KUN
oppgavesett/løsningsforslag som kilder (arkivet har IKKE offisielle
sensorveiledninger — ikke påstå det). Formel-minimum-side (collapsible: de
uunngåelige formlene, hver med én ordlinje + «resten kan du slå opp i
formelsamlingen»). Deltidsrute (12-ukers + 3-ukers intensiv). «Lese mye, skrive
lite»-boks. Prosedyre-/sjangerkort på ÉN side.

## Prøvekapitler (tma4245-<del>-prove)
chapterNumber `<del>.P`, tittel «Prøver til del <del>: <deltittel>».
Struktur: `tip` (deklarerer «4 prøver à ~X min» + «kan trygt deles over flere
kvelder — én prøve per økt») + `text` **Forkunnskaper** (KREVES av port) +
`text` intro + fire `collapsible` («Prøve <del>.A»–«Prøve <del>.D», buttonText
«Vis prøve <del>.X») med nyskrevne oppgaver og full A-fasit + avkryssbar
selvdiagnose (☐) etter hver fasit + SIST en `collapsible` **Symbol- og
formelliste** (KREVES av port siden prøvene har LaTeX). De fire prøvene per del
er spesifisert i skjelettets «Prøve-kvote Del N». Kap-referanser i fasiter =
markdown-lenker. Ingen quiz/begrepsbank i prøvefiler.

## Øvingseksamener (kap. 10.2–10.4)
Komplett 4-timers sett per skjelettets miks. `tip` Forkunnskaper + hver oppgave
som `collapsible` med oppgavetekst + A-besvarelse-fasit + `tip`-notat om vekt/
tidsbudsjett. Alle tre har Python-innslag. Symbol- og formelliste SIST.
Ber en oppgave om figur/plott («skisser», «tegn», «vis i figur») SKAL fasiten
vise faktisk SVG (image-blokk med opplastet src) — ikke bare «Figur i ord».

## FAGSPESIFIKK STIL — TMA4245 (notasjon, forbudt-termer)

### Notasjonsstandard (følges slavisk — grep-sjekkes i verifisering)
- Store bokstaver stokastiske ($X$), små observasjoner ($x$); estimatorer med
  hatt og stor bokstav ($\hat{\beta}, \hat{\mu}, \hat{\theta}$); $\bar{X}$,
  $S^2$ (ALLTID $n-1$). Skill estimator (stokastisk) og estimat (tall).
- $X \sim N(\mu, \sigma^2)$ — **annet argument er VARIANSEN**, aldri
  standardavviket. $\Phi$ = standardnormal fordelingsfunksjon.
- Eksponensialfordelingen: forventningsparametrisert,
  $f(x)=\frac{1}{\beta}e^{-x/\beta}$, $E(X)=\beta$, $\text{Var}(X)=\beta^2$.
  Rate-formen $\lambda e^{-\lambda x}$ nevnes MAKS én gang som alias (kun i
  kap. 2.3) og brukes ALDRI i oppgaver. $\lambda$ reserveres for Poisson-rater.
- Kvantiler med ØVRE haleareal: $z_\alpha$, $t_{\nu,\alpha}$,
  $\chi^2_{\nu,\alpha}$ (dvs. $P(Z>z_\alpha)=\alpha$).
- Eksponensialens pivotal er ALLTID $\chi^2_{2n}$ (aldri $\chi^2_n$/
  $\chi^2_{n-1}$ i eksponensialtilfellet). Regresjon: $s^2=\text{SSE}/(n-2)$;
  origo-regresjon (8.3): $n-1$ frihetsgrader.
- LaTeX: alle formler i `$...$`/`$$...$$` med `\\` i JSON. INGEN unicode-
  mattesymboler i formeltekst («χ²», «Σ», «≤», «≥», «√», «∞», «·» som ganger,
  «≈» → bruk `\\chi^2`, `\\sum`, `\\le`, `\\ge`, `\\sqrt`, `\\infty`,
  `\\approx`). (Løpende brødtekst kan bruke «≈» sparsomt, men i formler: LaTeX.)
- Python: numpy-idiomatisk (`np.random.uniform(size=n)`,
  `np.random.normal(loc, scale, size=n)` der scale=standardavvik,
  `np.var(x, ddof=1)`, vektorisering). ALL kode komplett og faktisk kjørt med
  `python3` før innsjekk (sensorkrav 9). Skriv kode i ```python-fenced blokker
  i `content`-markdown.

### Formelsamling-merking
Hvert kapittel skiller eksplisitt «står i formelsamlingen — tren oppslaget»
(fordelingskatalog, kvantiltabeller, standard-KI/test-formler) fra «må utledes
aktivt» (ML, pivotaler, transformasjoner, styrke, LS) i tråd med
innholdskontrakten. Pugge-stoff finnes ikke.

### Matematisk sannhetskontroll (UFRAVIKELIG)
Fortegns-/entydighets-/«alltid større/mindre»-påstander og ALLE talleksempler/
fasitsvar ETTERREGNES numerisk med `python3` FØR de skrives (frihetsgrader,
tabelloppslag, standardiseringer, ML-uttrykk, styrke-n). Er en påstand bare
betinget sann, skriv betingelsen. En «Vis at …» som ikke holder ubetinget skal
ikke skrives.

### Figurkrav
Kapitler med grafisk analyse (1.4 boksplott/histogram/Q-Q, 8.2 residualplott,
og enhver oppgave som ber om «skisser/tegn/vis i figur/plott») SKAL ha SVG-
figurer (image-blokk `{type:'image', id, src:'/images/textbook/tma4245/
<navn>.svg', alt, caption}`). Prosabeskrivelse er KOMPLEMENT, aldri erstatning.
Ber en oppgave/prøve om figur, skal løsningen vise faktisk SVG (rett etter
delsvaret). Alle nye SVG lastes opp til Storage i fase 5 (byggeleder kjører
`npx tsx scripts/upload-media-storage.ts`). SVG-stil: akser `#6b7280`, norsk
tekst, transparent bakgrunn, viewBox ~480x360, tydelige akse-/kurveetiketter.
Meld fra i sluttrapporten hvilke SVG-filer du la i `public/images/textbook/
tma4245/` slik at byggeleder laster dem opp.

### Forbudt-termer (grep = 0; håndheves i port + verifisering)
- `Prioritet: perfekt` (skriv «høyeste prioritet»)
- `en A-besvarelse ville` / `ville ha drøftet` (meta-fasit — skriv drøftelsen ut)
- `\lambda e^{-\lambda x}` som HOVEDform i oppgaver (kun alias i 2.3)
- unicode `χ²`/`Σ`/`√` inne i `$...$`

## Quiz
`src/lib/data/quiz-staging/<id>.quiz.json`:
`[{question, options:[4 — options[0] ALLTID riktig], explanation}]`. Kvote per
kapittel = skjelettets kvotesammendrag (AUTORITATIVT — overskyt aldri
underskrid). Distraktorer = reelle feller fra skjelettets «Typiske feil». Jevn
lengde på alle fire alternativer (ingen lengde-tell).

## Opphavsrett (ufravikelig)
ALLE oppgaver/case/tall NYSKREVNE (egne tall, kontekster — behold ingeniør-/
naturprofilen). Skjelettets mønstereksempler er selv omskrivinger og skal
varieres videre, ALDRI kopieres ordrett. Ingen formuleringer fra reelle sett/
løsningsforslag.

## Kvalitetskrav før ferdigmelding (per agent)
1. `python3 json.load` på hver fil (helst generert via json.dump);
2. kvotetelling: toppnivå definition-blokker med title == skjelettets
   flashcard-tall; quiz-antall == skjelettets quiz-tall;
3. forbudt-termer-grep = 0;
4. alle kryssbok-/kap-lenker peker på filer som finnes i
   `src/lib/data/chapters/`;
5. læringsløkke: content veksler teori→eksempel→oppgave med exercise inline;
6. forkunnskapsdekning: ingen usett teknikk i noen oppgave;
7. nybegynner-inngang: ingen kald kode i competenceGoals/første blokk;
8. Symbol- og formelliste SIST i hvert kapittel; Forkunnskaper-blokk finnes;
   Typiske feil-`warning` finnes (teori/drill);
9. ingen tom collapsible (`content` med blokker);
10. alle talleksempler/fasitsvar numerisk etterregnet (python3);
11. all Python-kode kjørt (python3);
12. flervalg i prøver: stokkede fasit-bokstaver.
Rapporter kort: filer skrevet, kvotestatus per fil, valideringsstatus, ev. SVG
lagt til, ev. usikre referanser.
