# Byggekontrakt: STK1110 — teknisk kontrakt for kapittelforfattere

Denne kontrakten gjelder ALLE forfatter-agenter som bygger kapitler til
`stk1110`. Den definerer eksakt filformat. Faglig innhold styres av
`SKJELETT.md` (per-kapittel-DNA) — les ditt kapittels avsnitt der nøye,
pluss `EKSAMENSANALYSE.md` ved behov for mer kontekst. Arketype:
**DNA-regnefag** (`docs/hoyskole-boker/DNA-regnefag.md`).

## Filplassering

Ett JSON-dokument per kapittel: `src/lib/data/chapters/<kapittel-id>.json`
(f.eks. `stk1110-1-2.json`). IKKE rør `_registry.json`, `_all.json`,
`textbook-courses*.ts` eller `quiz-data*.ts` — wiring gjøres sentralt.
Generer JSON via python `json.dump` (unngår trailing commas / escaping-feil).

## Kapittel-JSON (toppnivå)

```json
{
  "id": "stk1110-1-2",
  "courseId": "stk1110",
  "chapterNumber": "1.2",
  "title": "Momentmetoden og maximum likelihood — den faste kjeden",
  "description": "…(én setning fra skjelettet)…",
  "estimatedMinutes": 65,
  "competenceGoals": ["utlede ML-estimatoren via L→ℓ→score→løs→bekreft maks", "…"],
  "content": [ …blokker… ],
  "exercises": []
}
```

`competenceGoals`: 2–4 «kunne …»-formuleringer avledet av skjelettets
innholdskontrakt (ingen kald sjanger-/feilkode i disse). `exercises` er
alltid tom liste (oppgaver ligger INLINE som `exercise`-blokker i `content`).
`chapterNumber` alltid del-basert («1.2»), aldri lineær.

## Blokktyper (eksakte felt — referanse: econ1310-2-1.json)

- `text`: `{ "id", "type": "text", "content": "markdown + LaTeX" }`
- `definition`: `{ "id", "type": "definition", "title": "Begrepet", "content": "forklaring" }`
  — **title er OBLIGATORISK** (flashcards genereres KUN fra toppnivå
  definition-blokker med title). Åpne ALLTID med forklaringen i ORD; formelen
  kommer etter — aldri en ligning som første linje.
- `theorem`: `{ "id", "type": "theorem", "title": "Navn på resultat", "content": "…" }`
- `example`: `{ "id", "type": "example", "title": "Eksempel N: …", "problem": "…", "solution": "…" }`
  (solution = A-besvarelse, kompakt regnekjede)
- `tip`: `{ "id", "type": "tip", "title": "…", "content": "…" }`
- `warning`: `{ "id", "type": "warning", "title": "…", "content": "…" }`
- `exercise`: `{ "id", "type": "exercise", "exercise": { "id", "number": "1", "type": "classic", "difficulty": "lett"|"middels"|"vanskelig", "task": "…", "solution": "…", "hints": ["…"] } }`
  — IKKE bruk `subTasks`, `solutionVideo`, `allowsUpload`,
  `allowsCanvasDrawing` eller `answer`. Deloppgaver a), b), c) skrives i
  `task`/`solution` HVER på egen linje med fet merking: `…\n\n**a)** …\n**b)** …`.
- `collapsible`: `{ "id", "type": "collapsible", "title": "…", "buttonText": "Vis …", "content": [ …blokker… ] }`
  — feltet heter `content` og skal ALDRI være tomt/mangle.

Blokk-id-er: `<kapittel-id>-<løpenavn>`, f.eks. `stk1110-1-2-def-ml`,
`stk1110-1-2-ex-3`. Unike innen kapitlet.

## Obligatorisk kapittelstruktur (teorikapitler) — DNA-regnefag

Rekkefølge: (1) `tip` «Eksamensvinkel» FØRST (frekvens/vekt/sjangre fra
skjelettet), (2) `text` «**Forkunnskaper:** …», (3) `text` motivasjon (maks
2–3 avsnitt), (4) definisjoner/teoremer i EMNETS notasjon, (5) `text`
utledning med «Intuisjon:»-linje per steg (kun det skjelettet merker «utledes
aktivt»; rene bruk-resultater presenteres uten utledning), (6) `example` ×2–4
stigende (siste på eksamensnivå), (7) `warning` «Typiske feil» (fra
skjelettet), (8) `exercise` ×6–12 stigende. **SIST i kapitlet:**
`collapsible` «Symbol- og formelliste» og en `collapsible`
«Repetisjonsoppgaver» (4–6 korte fra forutsetningskapitlene).

**Læringsløkke (UFRAVIKELIG):** blokkene 4–7 er IKKE tre samlede bolker.
De veksler i løkker gjennom kapitlet — én løkke per metode/formel:
teori (`definition`/`theorem` + evt. `text`-utledning) → gjennomregnet
`example` på nettopp den metoden → `exercise`(r) INLINE rett etter. Deretter
neste metode. Den store stigende oppgavepuljen kan samles til slutt som drill,
men grunnstoffet gjennomarbeides løkke for løkke. **Ingen usett teknikk:** en
oppgave får bare bruke formler/teoremer/teknikker vist tidligere i SAMME
kapittel (t.o.m. eksempelet foran) eller i et forutsetningskapittel.

Drill-kapitler (1.5, 2.7, 3.7): DNA-drillformat — `tip` Eksamensvinkel →
`text` Løsningsoppskrift (algoritmisk fremgangsmåte) → gjennomregnet
eksamenscase med sensor-margnotater → 8–15 `exercise`-varianter på
eksamensnivå (hver som en liten a–f-kjede). Øvingseksamener (4.2–4.4): komplett
sett først, løsningsforslag i eget `collapsible` per oppgave (A-besvarelse) +
`tip`-notat om delpoeng.

## Begrepsbank (flashcard-kvoten)

Flashcards genereres KUN fra `definition`-blokker på TOPPNIVÅ i `content`
(ikke inni collapsible). Kjernebegrepene defineres naturlig i teksten, og
kapitlet fyller resten av flashcard-kvoten med korte navngitte `definition`-
blokker (1–3 setninger, eksamensrettet). Åpne hver stor begrepsbank med
notisen «Flashcard-/repetisjonsstoff — hopp trygt over ved førstegangslesing;
tidsanslaget gjelder kjernestoffet.» Kvoten = totalt antall toppnivå
definition-blokker i kapitlet (= skjelettets tall, AUTORITATIVT).

## Quiz-kvoten

Quiz skrives IKKE i kapittel-JSON. Én fil per kapittel:
`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`:

```json
[
  { "question": "Hvorfor bruker vi t-fordelingen (ikke z) i intervallet $\\bar X \\pm t_{\\alpha/2,n-1} S/\\sqrt n$?",
    "options": ["Fordi σ er estimert med S", "…", "…", "…"],
    "explanation": "Når σ erstattes av S får observatoren t-fordeling med n−1 frihetsgrader." }
]
```

**REGEL: options[0] er ALLTID riktig svar** (runtime stokker). Nøyaktig 4
options. Antall spørsmål = kapitlets quiz-kvote i skjelettet (AUTORITATIVT).
Distraktorene = reelle feller fra analysen (z↔t, feil frihetsgrader, glemt
maksimums-bekreftelse, P-verdi-mistolkning, R² vs. justert R²).
**INGEN LENGDE-TELL:** options[0] skal IKKE være det lengste alternativet —
jevn lengde og presisjonsgrad på alle fire (en som «velger det lengste» skal
treffe ~25 %). Sjekk med `scripts/hoyskolebok/quiz-lengdesjekk.mjs`.

## Leserkrav (ufravikelig — jf. README «Leserkrav»)

- **Kun eksamensrelevant stoff**; «kjenne til» sist og merket.
- **Forkunnskaper eksplisitt** rett etter Eksamensvinkel: (i) kapitler i DENNE
  boka (markdown-lenke `[kap. X.Y](/stk1110/stk1110-X-Y)`), (ii)
  kryssbok-lenker. **STK1100 er IKKE bygget** → alle STK1100-referanser er
  KLARTEKST med `(→ stk1100-x-y)`, ALDRI markdown-lenke (verifikator aktiverer
  ved live STK1100). **R1/R2/S1/S2 ER bygget** → vanlige markdown-lenker
  (verifiser id finnes i `src/lib/data/chapters/`, f.eks.
  `[R2 2.4 Bestemt integral](/r2/r2-2-4)`, `[R1 4.1 Derivasjonsregler](/r1/r1-4-1)`).
- **Lett å lese**: korte avsnitt (2–4 setninger), «du»-form, konkret norsk
  anker før formalisme. Presisjon vinner ved tvil.
- **Symbol- og formelliste**: `collapsible` (title «Symbol- og formelliste»,
  buttonText «Vis symboler og formler») SIST i hvert delkapittel, første linje
  «Oppslagsverk — alt her forklares underveis i kapitlet.», deretter markdown-
  tabell `| Symbol | Betydning |` + «**Formler i dette delkapitlet:**» med
  display-LaTeX + tolkning. ALLE symboler/formler brukt i delkapitlet — per
  delkapittel, ikke arv. Ingen kapitler er symbolfrie her; lista er obligatorisk.
- **Nybegynner-inngang**: HVER sjangerkode (A–P), feilkode og karakterbokstav
  forklares i klarspråk ved FØRSTE bruk; ingen kald kode i competenceGoals/
  første tekstboks. Del 0 (kap. 0.1) har «Slik leser du denne boka»-
  orienteringsboks (type `text`/`tip`, ALDRI `definition`) med karakterskala
  A–F, kompakt sjangerkodeliste A–P, og at typiske feil har et samlet register;
  ramm inn tunge symboler («du trenger ikke forstå disse ennå»).
- **Del 0-pakken** (kap. 0.1): «Lite tid?»-boks (hurtigrute + ukeplan fra
  summerte estimatedMinutes, med setningen at anslag er LESEtid ×1,5 ved
  håndskriving) + kildenote for frekvens-empirien (22 sett 2004–2025, 11 lest
  grundig med **løsningsforslag** 2015–2025 — ALDRI «sensorveiledninger»,
  arkivet har løsningsforslag) + formel-minimum-side (collapsible «Formlene du
  må kunne utenat — og resten kan du slå opp») som også er regnefagets samlede
  oppslagskort + deltidsrute (10–12 uker) + «lese mye, skrive lite»-boks.
- **Karakter-realisme**: «C er en god og vanlig karakter» i Del 0; «Prioritet:
  perfekt» FORBUDT (skriv «høyeste prioritet»); modellbesvarelser ærlig merket
  (en «C-besvarelse» ER C) + minst én autentisk B-/midtnivå-besvarelse.
- **Studentpanel/bølge 4+5**: alle exercises har utfylte `hints` (første =
  formel/første grep, ALDRI konklusjonen); noen «(krevende)»-merkede oppgaver +
  én kald bank uten hint (fasit = momentliste) i eksamenstreningsdelen; ensartede
  fasitlister varierer (aldri «alle a»/«alle felle»); distraktorer gjengir aldri
  bokas egne nyanser som «galt»; signal-/hintbokser står ETTER oppgaven;
  frekvenspåstander («N av M sett») stemmer eksakt med belegg; kapitler > 45 min
  har løkke-tidsanslag/pausepunkter; feilkoder glosses ved første bruk per
  kapittel; tunge kapitler har «Sist du var her»-blokk som VISER nøkkelformlene.
- **Prøve-flervalg**: statiske flervalg i prøve-collapsibles har STOKKEDE fasit-
  bokstaver (aldri «alle a»); prøve-tipen sier hvor flervalget bor.

## Faglig stil (ufravikelig — fra skjelettets identitetsseksjon)

- **Notasjonsstandard (settenes egen notasjon, gjelder HELE boka):**
  - Store bokstaver for stokastiske variable ($X$), små for observasjoner ($x$);
    hatt for estimatorer ($\hat{\theta}, \hat{\mu}, \hat{\sigma}, \hat{\beta}$);
    $\bar X$, $S^2$ for utvalgsgjennomsnitt/-varians. **Skill estimator (stor
    bokstav, stokastisk) fra estimat (tall) konsekvent** — gjennomgående sensorkrav.
  - $X \sim N(\mu, \sigma^2)$ — **annet argument er variansen**, aldri
    standardavviket. $\Phi$ = standardnormal fordelingsfunksjon.
  - Kvantilnotasjon med **øvre haleareal**: $z_\alpha$, $t_{\nu,\alpha}$,
    $\chi^2_{\nu,\alpha}$, $F_{\nu_1,\nu_2,\alpha}$ (dvs. $P(Z>z_\alpha)=\alpha$);
    tosidige intervaller/tester bruker $\alpha/2$-kvantilen.
  - **Frihetsgrader:** $n-1$ (ett utvalg), $m+n-2$ (pooled to-utvalg), $n-2$
    (enkel regresjon), $n-k-1$ (multippel med $k$ prediktorer). Feil df straffes hardt.
  - Regresjon: $\beta_0$ konstantledd, $\beta_1,\dots,\beta_k$ helninger; feilledd
    $\varepsilon_i \sim N(0,\sigma^2)$ uavhengige.
- **LaTeX:** `$...$` inline, `$$...$$` display. I JSON-strenger dobles backslash:
  `\\hat{\\theta}`, `\\frac{\\sigma^2}{\\sum(x_i-\\bar x)^2}`.
- **R-utskrift som REN TEKST-TABELL** (monospace i `text`-blokk) — boka lærer
  studenten å LESE `lm`-sammendraget (Estimate | Std. Error | t value | Pr(>|t|),
  Residual standard error, Multiple/Adjusted R-squared, F-statistic), IKKE å
  skrive kode. **Boka inneholder INGEN kode.**
- **Formelsamling-prinsippet:** «Formelsamling for STK1110» er alltid tillatt —
  hvert kapittel merker innhold som «står i formelsamlingen — tren *valg* og
  oppslag» vs. «må utledes/regnes aktivt». Ren memorering finnes ikke.
- **Avgrensning mot STK1100:** STK1110 forutsetter — men gjentar IKKE —
  sannsynlighetsapparatet (simultantetthet, MGF, Jacobi, gamma/χ², kombinatorikk).
  Der et STK1100-verktøy brukes, repeteres det i 1–2 setninger med klartekst-
  referanse — ikke som ny teori.
- **Matematisk sannhetskontroll (UFRAVIKELIG):** fortegns-/entydighets-/«alltid
  mindre/større enn»-påstander parametersjekkes NUMERISK (python3) i modellens
  fulle parameterrom FØR de skrives. Betingede påstander skrives med betingelsen
  eksplisitt. En «Vis at …» der påstanden ikke holder ubetinget KAN IKKE LØSES —
  ikke skriv den.
- Norsk bokmål. Engelsk fagterminologi beholdes i parentes ved første forekomst
  der det er innarbeidet (f.eks. «leverage», «scale-location»).
- **Opphavsrett**: alle oppgaver/case/faktum NYSKREVNE (egne tall, kontekster);
  eksamenssjangrene er malen, aldri originaloppgavene. Pensum refereres, aldri
  siteres i lengde. Referanser du er usikker på merkes `(verifiser)` (løses i fase 6).
- **Sannferdighet:** kildegrunnlaget omtales som **løsningsforslag** (2015–2025),
  ALDRI «sensorveiledninger» (finnes ikke i arkivet); modellbesvarelser er
  nyskrevne, aldri «ekte studentbesvarelser».

## Prøve-kapitler (egne id-er)

Temaprøvene bygges som egne kapitler `stk1110-<del>-prove` (del 1, 2, 3),
chapterNumber `<del>.P`, tittel «Prøver til del <del>: <deltittel>». Innhold:
`tip` (dekning + «N prøver à ~X min» + «kan trygt deles over flere kvelder —
én prøve per økt») + `text` «**Forkunnskaper:** …» + fire `collapsible`
(«Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med oppgaver og full fasit.
Etter hver prøvefasit: avkryssbar selvdiagnose-sjekkliste (☐). Kap-referanser
i fasitene som markdown-lenker. Flervalg i prøver: stokkede fasit-bokstaver.
Ingen quiz/begrepsbank for prøve-kapitler. Del 4-øvingseksamenene (4.2–4.4) ER
del-prøvene for eksamenstreningen (egne kapitler, ikke `-prove`).

## Egenvalidering / kvalitetskrav før ferdigmelding (per agent)

1. `python3 json.load` på hver fil (ingen trailing commas, ingen uescapede `"`/`\`).
2. **Kvotetelling** mot skjelettets §5: toppnivå definition-blokker = flashcard-
   kvoten; quiz-spørsmål = quiz-kvoten. Ikke overstyr.
3. **Forbudt-term-grep = 0** (ingen kjørbar kode): `import `, `def `, `np.`,
   ` <- `, `lm(`, `for _ in`, ` ```python `, ` ```r `. R-utskrift = ren tekst-tabell.
4. **Kryssbok-lenker**: STK1100 = klartekst `(→ stk1100-x-y)`; R1/R2/S1/S2 =
   markdown-lenker til eksisterende filer; interne `[kap. X.Y](/stk1110/stk1110-X-Y)`.
5. **Læringsløkke**: `content[]` veksler teori→eksempel→oppgave i løkker (oppgaver
   inline), ikke all teori topp / alle oppgaver bunn.
6. **Forkunnskapsdekning**: ingen oppgave krever usett begrep/regel/formel/metode.
7. **Nybegynner-inngang**: alle koder/karaktersjargong forklart ved første bruk;
   ingen kald kode i competenceGoals/første tekstboks.
8. **Prøve-flervalg**: fasitmønster stokket (aldri «alle a»).
9. grep «Prioritet: perfekt» = 0.
10. Ingen tom collapsible (`content` med blokker).
11. **hints** utfylt på alle exercises (unntatt merket kald bank); første hint
    røper aldri konklusjonen.
12. grep meta-fasit («en A-besvarelse ville», «ville ha drøftet») = 0.
13. **Matematisk sannhetskontroll**: fortegns-/entydighetspåstander numerisk
    verifisert; **frihetsgrader** korrekt i hvert test-/KI-/regresjonseksempel;
    hvert ML-eksempel **bekrefter maksimum** ($\ell''<0$); testritual-eksempler
    har alle 5 trinn inkl. nivå-utledning og verbal P-verdi-definisjon;
    regresjonseksempler bruker **justert R²** til modellvalg og skiller
    **konfidens-** fra **prediksjonsintervall**.
14. grep `(verifiser` for oppfølging i fase 6.
