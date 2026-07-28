# Byggekontrakt — MAT1100 Kalkulus (UiO)

Instansiert fra `../BYGGEKONTRAKT-MAL.md`. Arketype: **DNA-regnefag**
(`../DNA-regnefag.md`). Denne kontrakten + skjelettets per-kapittel-DNA er
forfatter-agentens fulle mandat. Ved konflikt vinner SKJELETT.md.

## Filplassering
Ett JSON-dokument per kapittel: `src/lib/data/chapters/mat1100-<del>-<nr>.json`.
IKKE rør `_registry.json`, `_all.json`, `textbook-courses*.ts`, `quiz-data*.ts`
— wiring gjøres sentralt (fase 5, `wire-bok.py`). Generer JSON via python
`json.dump` (LaTeX krever `\\` i JSON-strenger). Quiz til
`src/lib/data/quiz-staging/mat1100-<del>-<nr>.quiz.json`.

## Kapittel-JSON (toppnivå)
`{ id, courseId: 'mat1100', chapterNumber: '<del>.<nr>' (fra skjelettet),
title, description, estimatedMinutes, competenceGoals: [2–4 «kunne …» — ingen
kald sjangerkode/karakterbokstav], content: [blokker], exercises: [] }`

## Blokktyper (eksakte felt — referanse: src/lib/data/chapters/econ1310-2-1.json)
- `text`: `{id, type, content}` (markdown + LaTeX `$...$`/`$$...$$`, `\\` i JSON)
- `definition`: `{id, type, title, content}` — **title OBLIGATORISK**
  (flashcards genereres KUN fra toppnivå definition-blokker med title). Åpne med
  forklaringen i ORD; formelen kommer etter — aldri ligning som første linje.
- `theorem`: `{id, type, title, content}`
- `example`: `{id, type, title, problem, solution}` (solution = A-besvarelse
  med full føring)
- `tip` / `warning`: `{id, type, title, content}`
- `exercise`: `{id, type, exercise: {id, number, type: 'classic', difficulty:
  'lett'|'middels'|'vanskelig', task, solution, hints: []}}`. ALDRI
  solutionVideo/allowsUpload/allowsCanvasDrawing/answer/subTasks.
- `image`: `{id, type, src:'/images/textbook/mat1100/<fil>.svg', alt, caption}`
- `collapsible`: `{id, type, title, buttonText, content: [blokker]}` — ALDRI tom;
  `content` er feltnavnet og skal ha blokker.
Blokk-id-er: `<kapittel-id>-<løpenavn>`, unike i kapitlet.

## Obligatorisk kapittelstruktur (teorikapittel, i denne rekkefølgen først)
1. `tip` **Eksamensvinkel** — frekvens, vekt, sjangre (fra skjelettets
   per-kapittel-DNA, med de eksakte tallene). Merk ærlighetsnotatene i Del 6.
2. `text` **Forkunnskaper** — kapitler i boka + kryssbok-lenker
   `[tittel](/mat1100/mat1100-X-Y)` og VGS-kryssbok `[tittel](/<kurs>/<id>)`
   fra skjelettets «Forkunnskaper (kryssbok)». KUN til kapitler som finnes.
   Tunge kapitler (siste deler / lang avstand til forkunnskap) VISER 2–3
   nøkkelformler oppfrisket («Sist du var her»).
Deretter LÆRINGSLØKKER: `definition`/`theorem`(+`text`-utledning) → `example`
→ `exercise` INLINE, én løkke per metode/formel, til alt delkapittel-stoffet er
dekket. IKKE all teori øverst / alle oppgaver nederst.
Og alltid:
- `warning` **Typiske feil** (fra skjelettet).
- Begrepsbank-`definition`-blokker til flashcard-kvoten; hver stor begrepsbank
  åpner med notisen «flashcard-/repetisjonsstoff — hopp trygt over ved
  førstegangslesing; tidsanslaget gjelder kjernestoffet».
- SIST i kapitlet: `collapsible` **Symbol- og formelliste** (title «Symbol- og
  formelliste», buttonText «Vis symboler og formler»): første linje «Oppslagsverk
  — alt her forklares underveis i kapitlet.», så markdown-tabell
  `| Symbol | Betydning |` + «**Formler i dette delkapitlet:**» med display-LaTeX
  + tolkning. ALLE symboler/formler brukt i delkapitlet (per delkapittel).
- `collapsible` **Repetisjonsoppgaver** (teorikapitler): 4–6 korte oppgaver fra
  forkunnskapskapitlene.

Drillkapittel-DNA: `tip` Eksamensvinkel + `text` **Løsningsoppskrift**
(algoritme) + `example` **Gjennomregnet eksamenscase** med sensor-margnotater +
8–15 `exercise` på eksamensnivå. Øvingseksamen/simulering: komplett sett først,
løsningsforslag i `collapsible` per oppgave/delpunkt som A-besvarelse med
`tip`-notat om delpoeng/tidsbudsjett.

## Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»)
- Kun eksamensrelevant stoff; «kjenne til»-stoff (Del 6, induksjonsdelen 5.3,
  definisjonsvarianten 5.6) sist og MERKET med ærlig eksamensvinkel.
- Korte avsnitt (2–4 setninger), «du»-form, konkret norsk knagg før formalisme.
- Hver oppgave synlig eksamensforankret via sjanger-tag `(Eksamenssjanger X — …)`
  eller `(Midtveis, flervalg — …)` (sjangerbokstavene A–N + MV, se Del 0).
- **Læringsløkke Teori → Eksempel → Oppgave**, `exercise` inline.
- **Ingen usett forkunnskap:** ingen oppgave krever en formel/regel/metode som
  ikke er introdusert tidligere i kapitlet eller i en referert forkunnskap.
- **Deloppgaver på egen linje, fet merking:** `…\n\n**a)** …\n**b)** …`. Aldri
  a) b) c) bak hverandre i løpende tekst. Ikke bruk `subTasks`.
- **Nybegynner-inngang / ingen uforklart sjargong:** HVER sjangerkode (A–N, MV),
  feilkode og karakterbokstav forklares i klarspråk ved FØRSTE bruk PER KAPITTEL;
  ingen kald kode i `competenceGoals`/første tekstboks. Del 0 (kap. 0.1) har
  **«Slik leser du denne boka»-orienteringsboks (type `text`/`tip`, ALDRI
  `definition`)** med karakterskala (A–F, bestått ≈ mekaniske delpunkter, «C er
  en god og vanlig karakter») + kompakt sjangerkodeliste A–N/MV + at feil har et
  samlet register + innramming av tung notasjon («du trenger ikke forstå
  $\nabla f$ eller $re^{i\theta}$ ennå — de forklares der de brukes»).
- **Stokket flervalg i prøve-collapsibles:** statiske flervalg har stokkede
  fasit-bokstaver (ALDRI «alle a»); prøve-tipen sier hvor flervalget bor. Quiz i
  quiz-staging beholder options[0]-invarianten.
- **Del 0-pakken:** «Lite tid?»-boks (3–5-dagers hurtigrute + ukeplan fra
  summerte estimatedMinutes; anslag = LESEtid, ×1,5 ved håndskriving) +
  **deltidsrute 10–12 uker** synkronisert med semesteret (Del 1–3 +
  midtveissimulering FØR midtveis i oktober; Del 4–5 → Del 6 → prøver →
  slutteksamen-simuleringene siste to uker) + **3-ukers intensivvariant** (Del
  4–5 + 3.3 + 7.1 + simuleringene) + kildenote for frekvens-empirien (se
  «Sannferdige kildepåstander» under) + sjangerkort A–N/MV på ÉN side +
  formel-minimum-side (collapsible, ~6–10 uunngåelige formler, hver med én
  ordlinje) som også er bokas «lese mye, skrive lite»-boks / samlede oppslagskort.
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. X.Y](/mat1100/mat1100-X-Y)`. Aldri lenker i title.
- **Karakter-realisme:** «C er en god og vanlig karakter» i Del 0; **«Prioritet:
  perfekt» FORBUDT** (skriv «høyeste prioritet» — se forbudt-termer);
  modellbesvarelser ærlig merket (en «C-besvarelse» ER C) + minst én autentisk
  B-/midtnivå-besvarelse.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter hver prøvefasit; lett
  innstegsoppgave (difficulty lett) tidlig i teorikapitler.
- **Hverdagsanker + verdens-caser:** abstrakte kjernetemaer åpner med
  hverdagsanker; eksempler er verdens-caser (insektbestand, filialer, velgere,
  ballong, kinosete), aldri «en medstudent skriver …».
- **Tidsbudsjett-konsistens:** avvik deklarert tid vs. sum deltider forklares.
- **Hint + difficulty-spredning:** alle exercises har utfylte `hints` (første =
  formel/hjemmel/første grep, ALDRI konklusjonen); noen «(krevende)»-merkede
  oppgaver + én merket kald bank UTEN hint (fasit = momentliste) i Del 7.
- **Fasitmønster-variasjon:** ALLE ensartede fasitlister varierer — aldri «alle
  a», aldri «alle felle». Distraktorer gjengir ALDRI bokas egne nyanser som
  «galt» svar (nær-sanne distraktorer forklares i fasit-kommentaren).
- **INGEN LENGDE-TELL (produkteier 15. juli 2026):** i quiz skal `options[0]`
  (fasiten) IKKE være det lengste/mest detaljerte alternativet. Alle fire
  alternativer skal ha jevn lengde og presisjonsgrad; skriv distraktorene like
  fyldige og plausible, trim heller fasiten. Verifiser med
  `scripts/hoyskolebok/quiz-lengdesjekk.mjs` før ferdig.
- **Meta-fasit forbudt:** «en A-besvarelse ville ha drøftet …» → skriv løsningen
  UT. Minst én modellbesvarelse lander SKARPT.
- **Signalbokser ETTER oppgaven** (varsel om hva en drilloppgave tester).
- **Frekvenstall = telte belegg:** «N av M sett» stemmer eksakt med
  skjelettets belegg. **Sannferdige kildepåstander (UFRAVIKELIG):** kildenoten
  og all omtale av grunnlaget nevner KUN kildetyper som faktisk finnes i
  MAT1100-arkivet: **21 slutteksamener H2003–H2023 (18 med løsningsforslag) + 16
  midtveiseksamener H2003–H2018**. Arkivet har løsningsforslag/fasiter, IKKE
  «sensorveiledninger» i egentlig forstand — skriv «løsningsforslag» / «fasit»,
  aldri «sensorveiledning». Forbeholdet «arkivet stopper i 2023» skal med der
  prognoser gis. Modellbesvarelser omtales som NYSKREVNE, aldri som ekte
  studentbesvarelser.
- **Øktmerking + prøvedeling + feilkode-gloss:** kapitler > 45 min har
  tidsanslag per løkke / pausepunkt-markører; lange modellbesvarelser
  (simuleringene à 120/240 min) har «— naturlig pausepunkt —»; feilkoder glosses
  ved første bruk PER KAPITTEL; prøvekapitler deklarerer «N prøver à ~X min» +
  «kan trygt deles over flere kvelder — én prøve per økt».

## Fagspesifikk stil (ufravikelig for MAT1100 — fra skjelettets identitetsseksjon)

### To komplementære eksamensformer (arketypesærtrekk)
MAT1100 har to prøver som nesten ikke deler temaer: **midtveis** (oktober, 1/3,
2 t, 18–20 flervalg à 5 alternativer, ingen gjettestraff) og **slutteksamen**
(desember, 2/3, 4 t, 12–13 kjedede begrunnede langsvar-delpunkter siden 2017).
- **Quiz i Del 1–3 skrives som midtveisflervalg**: 4 alternativer i quiz-staging
  (options[0] riktig), distraktorer bygget på de dokumenterte fellene (byttet
  kvadrant, glemt $2k\pi$, byttet kvantorrekkefølge, glemt kjerneregel-faktor).
- **Teorikapitlenes oppgaver + prøver trener langsvar** med full føring.

### Notasjonsstandard (grep-konsistens over alle mat1100-filer)
- Retningsderivert: **$f'(\mathbf{a}; \mathbf{r}) = \nabla f(\mathbf{a}) \cdot
  \mathbf{r}$** — gjelder ubetinget, også for unormalisert $\mathbf{r}$
  (normaliser KUN når oppgaven ber om enhetsvektor). ALDRI $D_{\mathbf{v}}f$
  eller $\partial f/\partial \mathbf{v}$.
- Gradient $\nabla f$; matrisepotens $M^k$; overgangsmodell
  $\mathbf{x}_{n+1} = M\mathbf{x}_n$ (rader = mottaker); polarform $re^{i\theta}
  = r(\cos\theta + i\sin\theta)$; konjugat $\bar{z}$; modulus $|z|$.
- **Ubestemt form markeres eksplisitt** ($[0/0]$, $[\infty/\infty]$) FØR HVER
  L'Hôpital-bruk (gjentatt bruk = ny markering).
- Sammenligningstestene: «GS-testen» (grensesammenligning) og «p-integral» /
  «p-rekke» brukes som fasitspråk.
- All matematikk i `$...$`/`$$...$$`; ingen unicode-brøker/-symboler; `\\` i JSON.

### Føringsstandard (KRITISK — sensorregelen «ubegrunnet svar = 0»)
Hvert løsningsforslag (i `example`, `exercise.solution` og prøve-fasiter) skrives
som A-besvarelse: mellomregning ledd for ledd, **teoremer navngis** når de bærer
argumentet (skjæringssetningen, Rolle, MVT, skviseteoremet med uttalt
begrensethet $|\sin|\le 1$/$|\cos|\le 1$, FTC + kjerneregel, sammenlignings-/
GS-test, «inverterbar $\Leftrightarrow \det\ne 0$», L'Hôpital), verbal
konklusjonssetning, markert sluttsvar. Bokføringskrav:
- **Substitusjon**: $u$, $du/dx$, $dx$ og NYE GRENSER i egen boks.
- **Delvis integrasjon**: valget av $u$/$v'$ dokumenteres (LIATE).
- **Monotoni/konveksitet**: fortegnsskjema tegnes/beskrives.
- **Uegentlige integraler**: eksplisitt $\lim$-notasjon — ALDRI «sett inn
  $\infty$»; sammenligningsintegral navngis som konvergent/divergent p-integral.
- Ubegrunnet fasitsvar i et løsningsforslag er en BYGGEFEIL.

### Deriverbarhet i punkt (ufravikelig)
Deriverbarhet i et punkt VISES med grensedefinisjonen $f'(a) = \lim_{h\to 0}
\frac{f(a+h)-f(a)}{h}$ — å derivere uttrykket og ta grensen er IKKE gyldig bevis.
Grense-av-derivert-setningen er et lovlig verktøy når forutsetningene er
etablert (boka lærer begge og når hver gjelder). **INGEN løsning konkluderer
«ikke deriverbar» fra at $\lim f'(x)$ ikke finnes** (oscillasjonsfellen — emnets
tydeligste karakterskille, drilles i kap. 3.3).

### Figurkrav (regnefag med grafisk innslag)
Der en oppgave/deloppgave ber om figur («marker i det komplekse planet»,
«skisser mengden», «tegn/beskriv området», «marker røttene på sirkelen») SKAL
løsningsforslaget vise en faktisk `image`-SVG (rett etter delsvaret), ikke bare
«Figur i ord: …». SVG-filer: `public/images/textbook/mat1100/<navn>.svg`, akser
i `#6b7280`, norsk tekst, transparent bakgrunn, viewBox ca. 480×360. Valider XML.
ETTER at figurer er skrevet lastes de opp: `npx tsx scripts/upload-media-storage.ts`
(ellers 404 i prod). Aktuelt bl.a.: komplekse tall i planet + geometriske
mengder (1.1), n-te-røtter jevnt på sirkel (1.2), relaterte rater / omdreinings-
område (3.6, 4.7). Figur-i-ord beholdes som komplement TIL SVG-en, aldri i
stedet for.

### Matematisk sannhetskontroll (UFRAVIKELIG)
Fortegns-, entydighets- og «alltid»-påstander PARAMETERSJEKKES NUMERISK (python3)
i modellens fulle parameterrom FØR de skrives. Alle talleksempler i fasiter
etterregnes. En «Vis at …»-oppgave der påstanden ikke holder ubetinget KAN IKKE
brukes — skriv betingelsen eksplisitt i stedet.

### Enhets-/konvensjonsvalg
Argumentkonvensjon (reduksjon mod $2\pi$), retningsderivert-konvensjonen
(normalisert vs. ikke), og p-kriteriene ($\int_1^\infty x^{-p}$ konv. $\Leftrightarrow
p>1$; $\int_0^1 x^{-p}$ konv. $\Leftrightarrow p<1$) deklareres én gang der de
innføres; hvert sted en konvensjon kan forveksles varsles med `warning`.

## Forbudt-termer (grep = 0 — sjekkes i sjekk-bok.py)
`Prioritet: perfekt` · `D_{\mathbf{v}}` · `D_\mathbf{v}` · `\partial f/\partial \mathbf{v}`
· `en A-besvarelse ville` · `ville ha drøftet` · `sensorveiledning`
(regex-streng til sluttporten:
`Prioritet: perfekt|D_\{?\\mathbf\{v\}|en A-besvarelse ville|ville ha drøftet|sensorveiledning`).

## Prøvekapitler
Id `mat1100-<del>-prove`, chapterNumber `<del>.P`, tittel «Prøver til del <del>:
<deltittel>»: `tip` (dekning + «4 prøver à ~X min», deling over kvelder) + `text`
Forkunnskaper + fire `collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve
N») med nyskrevne oppgaver (§4-spesifikasjonen) og full fasit etter
føringsstandarden. Flervalg-prøver: stokkede fasit-bokstaver + prøve-tipen sier
hvor flervalget bor. Etter hver prøvefasit: avkryssbar selvdiagnose (☐).
Kap-referanser som markdown-lenker. Ingen quiz/begrepsbank i prøvekapitler.

## Quiz
`src/lib/data/quiz-staging/mat1100-<del>-<nr>.quiz.json`:
`[{question, options: [4 stk — options[0] ALLTID riktig, men IKKE lengst],
explanation}]`. Kvote per kapittel = skjelettets summeringskontroll (AUTORITATIVT
— aldri underskrid). Del 1–3-quiz = midtveisflervalg med feller som distraktorer.

## Opphavsrett (ufravikelig)
ALLE oppgaver/case/tall NYSKREVNE (egne funksjoner, tall, kontekster) —
eksamenssjangrene er malen, aldri originaloppgavene; skjelettets mønster-
eksempler er selv omskrivninger og varieres videre, ikke kopieres. Pensum
refereres, aldri siteres i lengde. Usikre referanser merkes `(verifiser)`.

## Kvalitetskrav før ferdigmelding (per agent)
1. `python3 json.load` på hver fil; 2. kvotetelling mot skjelettet (definitions
+ quiz); 3. forbudt-termer-grep = 0; 4. kryssbok-lenker peker på eksisterende
filer; 5. læringsløkke (teori→eksempel→oppgave inline); 6. forkunnskapsdekning
(ingen usett metode); 7. nybegynner-inngang (koder forklart, Del 0-orienterings-
boks); 8. prøve-flervalg-fasit varierer posisjon; 9. grep «Prioritet: perfekt»
= 0; 10. ingen tom collapsible; 11. kap-referanser er markdown-lenker; 12. Del
0-pakken på plass; 13. tidsbudsjett forklart; 14. juridiske deklarasjoner
(fremstiller seg aldri som offisielt); 15. fasitmønster varierer; 16. hints
utfylt (unntatt merket kald bank); 17. frekvenstall = listede belegg; 18. grep
meta-fasit = 0; 19. øktmerking; 20. feilkode-gloss; 21. alle fortegns-/
entydighetspåstander parametersjekket numerisk; deriverbarhet-i-punkt-regelen
overholdt (grensedefinisjon, aldri «ikke deriverbar fordi $\lim f'$ mangler»);
lengde-tell-sjekk (quiz-lengdesjekk.mjs).
