# Byggekontrakt — STK1100 Sannsynlighetsregning og statistisk modellering (UiO), regnefag-arketype

Instansiert fra `BYGGEKONTRAKT-MAL.md`. Arketype: **DNA-regnefag**. Denne
kontrakten er bindende for hver kapittelforfatter. Les den HELT før du skriver.
SKJELETTET (`SKJELETT.md`) er autoritativt for per-kapittel-DNA, kvoter og
eksamensbelegg; ved konflikt vinner skjelettet på faginnhold, denne kontrakten
på form/struktur.

## Filplassering
Ett JSON-dokument per kapittel: `src/lib/data/chapters/stk1100-<del>-<nr>.json`
(prøver: `stk1100-<del>-prove.json`). Quiz:
`src/lib/data/quiz-staging/stk1100-<del>-<nr>.quiz.json`.
IKKE rør `_registry.json`, `textbook-courses*.ts`, `quiz-data*.ts` — wiring er
sentral (fase 5). Generer ALL JSON via python `json.dump(..., ensure_ascii=False,
indent=2)` — aldri for hånd (LaTeX-backslash må bli `\\` i JSON).

## Kapittel-JSON (toppnivå)
`{ id, courseId: 'stk1100', chapterNumber: '<del>.<nr>' (fra skjelettet),
title, description, estimatedMinutes, competenceGoals: [2–4 «kunne …» — INGEN
kald kode/sjangerbokstav her], content: [blokker], exercises: [] }`

## Blokktyper (eksakte felt — referanse: src/lib/data/chapters/econ1310-2-1.json)
- `text`: `{id, type, content}` (markdown + LaTeX `$...$`/`$$...$$`)
- `definition`: `{id, type, title, content}` — **title OBLIGATORISK**; åpne med
  forklaring i ORD, formelen kommer ETTER (aldri ligning som første linje).
  Flashcards genereres KUN fra toppnivå definition-blokker med title.
- `theorem`: `{id, type, title, content}`
- `example`: `{id, type, title, problem, solution}` (solution = A-besvarelse
  med utledningskjeden/mellomregning eksplisitt, kompakt slik STK1100-fasiten er)
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
   `[kap. X.Y](/stk1100/stk1100-X-Y)` + kryssbok-lenker KUN til filer som
   finnes. **Verifiserte kryssbok-id-er** (fra skjelettets §6): sannsynlighet
   [r1-8-4](/r1/r1-8-4), [r1-8-3](/r1/r1-8-3), [s1-5-2](/s1/s1-5-2);
   fordelinger [s1-6-1](/s1/s1-6-1), [s2-4-1](/s2/s2-4-1),
   [s2-4-6](/s2/s2-4-6); integrasjon [r2-2-2](/r2/r2-2-2),
   [r2-2-4](/r2/r2-2-4), [r2-3-2](/r2/r2-3-2), [s2-1-1](/s2/s2-1-1);
   derivasjon [r1-4-1](/r1/r1-4-1). Lenk KUN til disse — ikke gjett nye id-er.
   Tunge kapitler (Del 5–6, drill 6.3): VIS de 2–3 nøkkelformlene ferdig
   oppfrisket («Sist du var her») — ikke bare lenke.
3. Læringsløkker: teori (`text`/`definition`/`theorem` + evt. utledning med
   «Intuisjon:»-linjer etter HVERT steg) → `example` → `exercise` INLINE,
   gjentatt løkke for løkke gjennom delkapitlet. IKKE all teori øverst / alle
   oppgaver nederst.
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

Drillkapitler (2.3, 3.2, 4.3, 5.3, 6.3): `tip` Eksamensvinkel → `text`
**Forkunnskaper** → `text` **Løsningsoppskrift** (nummerert algoritme for
sjangeren) → `example` **Gjennomregnet eksamenscase** med sensor-margnotater →
8–15 `exercise` på eksamensnivå (roter variantene) → `warning` Typiske feil →
Symbol- og formelliste. Drill trenger ikke egen begrepsbank hvis flashcard-
kvoten er lav; følg skjelettets flashcard-tall — lag definition-blokker som
«oppskriftskort»/«formelkort» (åpne med ord) for å nå kvoten.

## Læringsløkke + ingen usett teknikk (UFRAVIKELIG)
`content[]` veksler teori→eksempel→oppgave i løkker. Ingen oppgave får kreve en
formel/teknikk/begrep som ikke er vist tidligere i SAMME kapittel (t.o.m.
eksempelet rett foran) eller i et tidligere kapittel oppført i Forkunnskaper.
Sjekk hver exercise eksplisitt.

## Nybegynner-inngang / ingen uforklart sjargong
HVER sjangerbokstav (A–L), feilkode og karakterbokstav forklares i klarspråk
ved FØRSTE bruk i kapitlet; ALDRI kald kode i competenceGoals eller aller
første tekstboks. Tunge fagtermer (pivot/pivotal, MGF/momentgenererende
funksjon, minneløshet, forventningsrett/skjevhet, frihetsgrader, marginaltetthet,
Jacobi-determinant, likelihood, bootstrap) skrives ut med klarspråksforklaring
første gang. «C er en god og vanlig karakter» skal stå i Del 0. «Prioritet:
perfekt» er FORBUDT — skriv «høyeste prioritet». Modellbesvarelser ærlig merket
(en «C-besvarelse» ER på C-nivå); minst én autentisk B-/midtnivå-besvarelse i
prøvene. Meta-fasit forbudt («en A-besvarelse ville ha drøftet …» → skriv det UT).

## Deloppgaver
a), b), c) i task/solution: HVER på egen linje med fet merking —
`…\n\n**a)** …\n**b)** …`. ALDRI bak hverandre i løpende tekst. IKKE subTasks.

## Hint + difficulty
Alle exercises har utfylte `hints` (første hint = formel/første grep/riktig
transformasjon, ALDRI konklusjonen). Stigende vanskelighet: 2–3 lett, 2–4
middels, 2–4 vanskelig. Boka SAMLET (særlig 6.3 + 9.1) skal ha noen
«(krevende)»-merkede oppgaver og én merket kald bank uten hint (fasit =
momentliste) i Del 9. IKKE skriv «(krevende)»/«(vanskelig)» inne i task-teksten
(redundant med difficulty-feltet).

## Studentpanel (SKAL inn i førsteutkast)
- Statiske flervalg i prøve-collapsibles: STOKKEDE fasit-bokstaver (aldri «alle
  a»/«alle felle»); prøve-tipen sier hvor flervalget bor. Quiz-filer beholder
  options[0]-invarianten.
- Avkryssbar selvdiagnose-sjekkliste (☐) etter hver prøvefasit.
- Én lett innstegsoppgave (difficulty lett, ren gjengivelse) tidlig i
  teorikapitler der første oppgave ellers er full eksamenssjanger.
- Abstrakte kjernetemaer åpner med hverdagsanker; eksempler er verdens-caser
  (levetider, konsentrasjoner, inntekter, tellinger, målinger, diagnosetester),
  ALDRI «en medstudent skriver …».
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
sjangerkode-liste A–L (hver forklart), og at typiske feil har et samlet register
(Feilkatalogen, 13 feil). Ramm inn tunge symboler («du trenger ikke forstå
$\chi^2_{2n}$ eller $\Gamma(\alpha)$ ennå — de forklares der de brukes»).
«Lite tid?»-boks (hurtigrute 3–5 dager + ukeplan fra summerte estimatedMinutes;
anslag = LESEtid, ×1,5 ved håndskriving). Kildenote for frekvens-empirien:
bygger på UiOs STK1100-arkiv, **10 avsluttende skoleeksamener 2015–2024** (7 sett
lest grundig med offisielle løsningsforslag 2018–2024, 3 sett 2015–2017 uten
løsningsforslag), destillert i EKSAMENSANALYSE.md — nevn KUN oppgavesett/
løsningsforslag som kilder (arkivet har IKKE offisielle sensorveiledninger — ikke
påstå det; STK1100-fasitene ER offisielle faglærer-løsningsforslag, det kan sies).
Formel-minimum-side (collapsible: de uunngåelige formlene som IKKE står brukbart
i formelsamlingen — momentregneregler, ML-ritualet, standardpivotalene,
gammaintegralet, E(Vʳ)-formelen — hver med én ordlinje + «resten kan du slå opp i
formelsamlingen for STK1100/STK1110»). Deltidsrute (10-ukers + 3-ukers intensiv,
progresjon Del 0→1→2→3→4→5→6→7→8, øvingseksamener de tre siste ukene).
«Lese mye, skrive lite»-boks. Prosedyre-/sjangerkort A–L på ÉN side.
STK1110-avgrensningen (hypotesetesting/kombinatorikk/ordningsvariable UTELATT)
nevnes her og aldri igjen.

## Prøvekapitler (stk1100-<del>-prove)
chapterNumber `<del>.P`, tittel «Prøver til del <del>: <deltittel>».
Struktur: `tip` (deklarerer «4 prøver à ~X min» + «kan trygt deles over flere
kvelder — én prøve per økt») + `text` **Forkunnskaper** (KREVES av port) +
`text` intro + fire `collapsible` («Prøve <del>.A»–«Prøve <del>.D», buttonText
«Vis prøve <del>.X») med nyskrevne oppgaver og full A-fasit + avkryssbar
selvdiagnose (☐) etter hver fasit + SIST en `collapsible` **Symbol- og
formelliste** (KREVES av port siden prøvene har LaTeX). De fire prøvene per del
er spesifisert i skjelettets «Prøve-kvote Del N». Kap-referanser i fasiter =
markdown-lenker. Ingen quiz/begrepsbank i prøvefiler. Prøvedeler: 1–8 (Del 0 og
Del 9 har ikke egne temaprøver — Del 9 ER øvingseksamenene).

## Øvingseksamener (kap. 9.2–9.4)
Komplett 4-timers sett per skjelettets miks (§4-tabellen). `text` Forkunnskaper
+ hver oppgave som `collapsible` med oppgavetekst + A-besvarelse-fasit +
`tip`-notat om vekt/tidsbudsjett. Alle tre har Python-innslag. Symbol- og
formelliste SIST. Ber en oppgave om figur/plott («skisser», «tegn», «vis i
figur/diagram», «tegn integrasjonsområdet») SKAL fasiten vise faktisk SVG
(image-blokk med opplastet src) — ikke bare «Figur i ord».

## FAGSPESIFIKK STIL — STK1100 (notasjon, forbudt-termer)

### Notasjonsstandard (følges slavisk — grep-sjekkes i verifisering)
- Store bokstaver stokastiske ($X$), små observasjoner ($x$); estimatorer med
  hatt og stor bokstav ($\hat{\theta}, \hat{\mu}, \hat{\sigma}, \hat{\beta}$);
  $\bar{X}$, $S^2$ (ALLTID $n-1$). Skill estimator (stokastisk) og estimat (tall)
  KONSEKVENT (sensorkrav 6).
- $X \sim N(\mu, \sigma^2)$ — **annet argument er VARIANSEN**, aldri
  standardavviket. $\Phi$ = standardnormal fordelingsfunksjon.
- **Gamma$(\alpha, \beta)$ med $\beta$ = SKALAparameter** (forventning
  $\alpha\beta$, varians $\alpha\beta^2$, MGF $(1-\beta t)^{-\alpha}$).
  **Kjikvadrat med $n$ frihetsgrader = gamma$(n/2, 2)$.**
- **Eksponensialfordelingen VISES BEGGE parametriseringene** (dette er et bevisst
  pedagogisk poeng — analysens dokumenterte felle §5.6, og skiller STK1100-boka
  fra TMA4245-boka): rate $f(x)=\lambda e^{-\lambda x}$, $F(x)=1-e^{-\lambda x}$,
  $E(X)=1/\lambda$; OG forventning $f(x)=\frac{1}{\mu}e^{-x/\mu}$, $E(X)=\mu$.
  Hvert kapittel/oppgave som bruker eksponensial SIER hvilken parametrisering det
  bruker, og trener studenten til å lese oppgavens egen definisjon. $\lambda$
  reserveres for rater i Poisson-prosesser. (Rate-formen $\lambda e^{-\lambda x}$
  er her TILLATT og forventet — motsatt TMA4245-kontrakten.)
- Kvantiler med ØVRE haleareal: $z_\alpha$, $\chi^2_{\nu,\alpha}$ (dvs.
  $P(Z>z_\alpha)=\alpha$, $P(\chi^2_\nu > \chi^2_{\nu,\alpha})=\alpha$).
- Eksponensialens pivot er ALLTID $\chi^2_{2n}$ (aldri $\chi^2_n$/$\chi^2_{n-1}$
  i eksponensialtilfellet); normal-med-kjent-$\mu$-pivoten er $\chi^2_n$; Weibull
  gamma$(n,1)$; Pareto gamma$(n,2)$ — les hvilken pivot gjelder (sensorkrav 13).
- LaTeX: alle formler i `$...$`/`$$...$$` med `\\` i JSON. INGEN unicode-
  mattesymboler i formeltekst («χ²», «Σ», «≤», «≥», «√», «∞», «·» som ganger,
  «≈», «Γ», «μ», «σ», «α», «β», «θ», «λ», «ρ», «π», «∫») → bruk `\\chi^2`,
  `\\sum`, `\\le`, `\\ge`, `\\sqrt`, `\\infty`, `\\approx`, `\\Gamma`, `\\mu`,
  `\\sigma`, `\\alpha`, `\\beta`, `\\theta`, `\\lambda`, `\\rho`, `\\pi`, `\\int`.
  (Løpende brødtekst kan bruke «≈» sparsomt, men i formler: LaTeX.)
- Python: numpy/scipy-idiomatisk (`np.random.uniform(size=n)`,
  `stats.norm.rvs(mu, sigma, size=n)` der sigma=STANDARDAVVIK,
  `np.var(x, ddof=1)`, `np.std(x, ddof=1)`, vektorisering, `for _ in range(B)`).
  ALL kode komplett og faktisk kjørt med `python3` før innsjekk (sensorkrav 10 —
  gjelder også boka). Skriv kode i ```python-fenced blokker i `content`-markdown.

### Formelsamling-merking
Hvert kapittel skiller eksplisitt «står i formelsamlingen — tren oppslaget»
(fordelingskatalog med E/Var/MGF, gammafunksjonens egenskaper, kvantiltabeller
$\Phi/z_\alpha/\chi^2/$gamma, standard-KI-formler) fra «må utledes aktivt» (ML,
pivotaler, transformasjoner, minneløshet, bootstrap) i tråd med innholdskontrakten.
Pugge-stoff finnes ikke i dette emnet.

### Matematisk sannhetskontroll (UFRAVIKELIG)
Fortegns-/entydighets-/«alltid større/mindre»-påstander og ALLE talleksempler/
fasitsvar ETTERREGNES numerisk med `python3` FØR de skrives (frihetsgrader,
tabelloppslag $\chi^2_{\nu,\alpha}$/$z_\alpha$, standardiseringer, integraler,
ML-uttrykk, KI-endepunkter, E(Vʳ)-/Γ-verdier, bootstrap-SE). Er en påstand bare
betinget sann, skriv betingelsen. En «Vis at …» som ikke holder ubetinget skal
ikke skrives. Særlig: kontroller at det eksakte pivotal-intervallets endepunkter
er riktige (kvantil i riktig endepunkt, riktige frihetsgrader), at
dekningstallene (95,9 % vs. 91,1 % for $n=10$) er konsistente, og at
skjevhetsfaktorene (Γ-forhold) stemmer.

### Figurkrav
STK1100-eksamen krever ikke kurvetegning som mikro-/makrofag, men enkelte
oppgaver ber om at man **tegner integrasjonsområdet** for dobbeltintegral
(sensorkrav 3, sjanger D — kap. 3.1, 3.2 og prøver/øvingseksamener med
$P(Y\ge X)$/$P(X^2+Y^2\le r^2)$). Der en oppgave/prøve/fasit eksplisitt sier
«tegn integrasjonsområdet», «skisser området», «vis i figur/diagram» SKAL
løsningen vise en faktisk SVG (image-blokk `{type:'image', id,
src:'/images/textbook/stk1100/<navn>.svg', alt, caption}`) — ikke bare «Figur i
ord». Simuleringskapitlene (7.1–7.2) kan vise en histogram-/dekningsillustrasjon
som SVG der teksten lover en figur. SVG-stil: akser `#6b7280`, norsk tekst,
transparent bakgrunn, viewBox ~480x360, tydelige akse-/områdeetiketter, stiplede
hjelpelinjer. Prosabeskrivelse er KOMPLEMENT, aldri erstatning. Alle nye SVG
lastes opp til Storage i fase 5 (byggeleder kjører kirurgisk opplasting). Meld
fra i sluttrapporten hvilke SVG-filer du la i `public/images/textbook/stk1100/`.

### Forbudt-termer (grep = 0; håndheves i port + verifisering)
- `Prioritet: perfekt` (skriv «høyeste prioritet»)
- `en A-besvarelse ville` / `ville ha drøftet` (meta-fasit — skriv drøftelsen ut)
- unicode `χ²`/`Σ`/`√`/`Γ`/`μ`/`σ`/`≤`/`≥` inne i `$...$`
- forbudt-TEMAER i teoridelene (kun kjenne-omtale i 0.1 er tillatt):
  hypotesetesting ($H_0$/$H_1$/p-verdi/nullhypotese/testobservator/styrke),
  kombinatorikk som telleoppgave, ordningsvariable (min/maks-fordeling,
  serie/parallell-system).

## Quiz
`src/lib/data/quiz-staging/<id>.quiz.json`:
`[{question, options:[4 — options[0] ALLTID riktig], explanation}]`. Kvote per
kapittel = skjelettets kvotesammendrag (AUTORITATIVT — overskyt aldri
underskrid). Distraktorer = reelle feller fra skjelettets «Typiske feil». Jevn
lengde på alle fire alternativer (ingen lengde-tell).

## Opphavsrett (ufravikelig)
ALLE oppgaver/case/tall NYSKREVNE (egne tall, kontekster — behold STK1100-
profilen: levetider, konsentrasjoner, inntekter, tellinger, målinger,
diagnosetester, bølgehøyder, komponent-/fiberstyrke). Skjelettets
mønstereksempler er selv omskrivinger og skal varieres videre, ALDRI kopieres
ordrett. Ingen formuleringer fra reelle sett/løsningsforslag.

## Kvalitetskrav før ferdigmelding (per agent)
1. `python3 json.load` på hver fil (helst generert via json.dump);
2. kvotetelling: toppnivå definition-blokker med title == skjelettets
   flashcard-tall; quiz-antall == skjelettets quiz-tall;
3. forbudt-termer-grep = 0 (inkl. forbudt-temaer i teorideler);
4. alle kryssbok-/kap-lenker peker på filer som finnes i
   `src/lib/data/chapters/`;
5. læringsløkke: content veksler teori→eksempel→oppgave med exercise inline;
6. forkunnskapsdekning: ingen usett teknikk i noen oppgave;
7. nybegynner-inngang: ingen kald kode i competenceGoals/første blokk;
8. Symbol- og formelliste SIST i hvert kapittel; Forkunnskaper-blokk finnes;
   Typiske feil-`warning` finnes (teori/drill);
9. ingen tom collapsible (`content` med blokker);
10. alle talleksempler/fasitsvar numerisk etterregnet (python3), inkl.
    frihetsgrader, kvantiler, KI-endepunkter, Γ-/E(Vʳ)-verdier;
11. all Python-kode kjørt (python3), `ddof=1` der empirisk varians/SE;
12. flervalg i prøver: stokkede fasit-bokstaver;
13. eksponensial: hver bruk oppgir parametriseringen (rate ELLER forventning).
Rapporter kort: filer skrevet, kvotestatus per fil, valideringsstatus, ev. SVG
lagt til, ev. usikre referanser (merk `(verifiser)`).
