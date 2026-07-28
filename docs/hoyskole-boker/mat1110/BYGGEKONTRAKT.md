# Byggekontrakt — MAT1110 Kalkulus og lineær algebra (UiO)

Instansiert fra `docs/hoyskole-boker/BYGGEKONTRAKT-MAL.md` (regnefag-arketype,
`DNA-regnefag.md`). Denne fila er autoritativ for byggeagentene sammen med
`SKJELETT.md` (per-kapittel-DNA + §1.6 stilregler). Alt her er ufravikelig.

## Filplassering
Ett JSON-dokument per kapittel: `src/lib/data/chapters/<kapittel-id>.json`
(f.eks. `src/lib/data/chapters/mat1110-1-1.json`). Quiz til
`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`. IKKE rør `_registry.json`,
`_all.json`, `textbook-courses*.ts`, `quiz-data*.ts` — wiring gjøres sentralt
(fase 5). Generer ALL JSON via python `json.dump` (LaTeX krever `\\` i strenger).

## Kapittel-JSON (toppnivå)
`{ id, courseId: 'mat1110', chapterNumber: '<del>.<nr>' (fra skjelettet, del-
basert — aldri lineær), title, description, estimatedMinutes,
competenceGoals: [2–4 «kunne …» — INGEN kald sjangerkode/karakterbokstav her],
content: [blokker], exercises: [] }`

## Blokktyper (eksakte felt)
- `text`: `{id, type, content}` (markdown + LaTeX `$...$`/`$$...$$`)
- `definition`: `{id, type, title, content}` — **title OBLIGATORISK**
  (flashcards genereres KUN fra toppnivå definition-blokker med title). Åpne med
  forklaringen i ORD; formelen kommer etter — aldri en ligning som første linje.
- `theorem`: `{id, type, title, content}`
- `example`: `{id, type, title, problem, solution}` (solution = A-besvarelse
  etter føringsstandarden under)
- `tip` / `warning`: `{id, type, title, content}`
- `exercise`: `{id, type, exercise: {id, number, type: 'classic', difficulty:
  'lett'|'middels'|'vanskelig', task, solution, hints: []}}`. ALDRI
  solutionVideo/allowsUpload/allowsCanvasDrawing/answer.
- `collapsible`: `{id, type, title, buttonText, content: [blokker]}` — `content`
  er feltnavnet og skal ALLTID ha blokker (aldri tom, aldri `text`-nøkkel).
- `image` (kun der en oppgave/løsning ber om figur): `{id, type, src:
  '/images/textbook/mat1110/<fil>.svg', alt, caption}`.
Blokk-id-er: `<kapittel-id>-<løpenavn>`, unike i kapitlet.

## Obligatorisk kapittelstruktur (teorikapittel) — DNA-regnefag
I denne rekkefølgen (læringsløkker styrer det MELLOM 1b og siste):
1. `tip` **Eksamensvinkel** — frekvens/vekt/sjangre + regimemerke, fra
   skjelettets Eksamensbelegg. Bruk de EKSAKTE tallene fra skjelettet.
2. `text` **Forkunnskaper** — kapitler i denne boka (nevn kap.nr som
   markdown-lenke `[kap. X.Y](/mat1110/mat1110-X-Y)`) + kryssbok-lenker.
   MAT1100-referanser skrives som KLARTEKST med aktiveringsmarkør *(MAT1100
   kap. X.Y — forgjengerbok, ikke bygget ennå; aktiver lenke når den finnes)* —
   ALDRI som `/mat1100/...`-lenke (mat1100 bygges parallelt; lenken ville
   vært død nå). R1/R2/S2/1T-lenker brukes normalt KUN til kapitler som finnes
   (se «Verifiserte kryssbok-lenker» nederst). Tunge kapitler langt fra
   forkunnskapen: VIS de 2–3 nøkkelformlene oppfrisket («Sist du var her»).
3. `text` **Motivasjon** — kort (maks 2–3 avsnitt): hvorfor verktøyet finnes.
4. **Læringsløkker** (blokk 3–7 i DNA vekslende, IKKE tre samlede bolker):
   `definition`/`theorem` (+ evt. `text`-utledning med «Intuisjon:»-linje per
   steg der eksamen krever aktiv utledning) → `example` på nettopp den metoden →
   `exercise`(r) INLINE rett etter, på samme metode. Så neste metode. Ingen
   oppgave får kreve en teknikk/formel/teorem som ikke er vist tidligere i
   kapitlet eller i en refererte forkunnskap.
5. `warning` **Typiske feil** — de konkrete feilene fra skjelettets «Typiske
   feil» (kan stå der mest relevant).
6. Stor stigende oppgavepulje (kan samles til slutt): 6–12 øvinger, stigende
   (2–3 lett innøving, 2–4 middels, 2–4 vanskelig eksamensklone). Minst én lett
   innstegsoppgave TIDLIG (ren gjengivelse) der første oppgave ellers er full
   eksamenssjanger. Alle med `solution` + utfylte `hints` (første hint =
   formel/første grep, ALDRI konklusjonen).
7. `collapsible` **Symbol- og formelliste** SIST (title «Symbol- og
   formelliste», buttonText «Vis symboler og formler»): første blokk `text`
   «Oppslagsverk — alt her forklares underveis i kapitlet.», så markdown-tabell
   `| Symbol | Betydning |` + «**Formler i dette delkapitlet:**» med
   display-LaTeX + tolkning. ALLE symboler/formler brukt i kapitlet (per
   kapittel, ikke arv).
8. `collapsible` **Repetisjon** (teorikapitler): 4–6 korte oppgaver fra
   forkunnskaps-kapitlene.
Begrepsbanker (definisjonspuljer til flashcard-kvoten): hver stor bank åpner
med `text`-notisen «flashcard-/repetisjonsstoff — hopp trygt over ved
førstegangslesing; tidsanslaget gjelder kjernestoffet».

## Drillkapittel-struktur (1.5, 3.4, 4.5, 5.6)
1. `tip` Eksamensvinkel (sjangervarianter). 2. `text` **Forkunnskaper**.
3. `text` **Løsningsoppskrift** (algoritmen). 4. `example` **Gjennomregnet
eksamenscase** med sensor-margnotater om føringspoengene. 5. 8–15 `exercise` på
eksamensnivå (varianter fra skjelettets variantkatalog). 6. `collapsible`
Symbol- og formelliste SIST. (Drillkapitler har lav flashcard-kvote — se
skjelettet; definisjonene ligger i teorikapitlene.)

## Øvingseksamen-/simuleringskapittel (7.2–7.4)
Komplett sett først (nyskrevne oppgaver som speiler skjelettets miks), deretter
løsningsforslag i `collapsible` per delpunkt/oppgave som A-besvarelse, med
`tip`-notat om vekting/tidsbudsjett (~24 min/deloppgave) og de udokumenterte
forbeholdene skjelettet krever (7.2 midtveisformen; 7.3/7.4 regimene). Krever
Forkunnskaper-blokk. Ingen begrepsbank ut over kvoten.

## Prøvekapitler (egne id-er: `mat1110-<del>-prove`, <del>=1..6)
chapterNumber `<del>.P`, tittel «Prøver til del <del>: <deltittel>». Innhold:
`tip` (dekning + «4 prøver à ~X min — kan trygt deles over flere kvelder, én
prøve per økt») + `text` **Forkunnskaper** + fire `collapsible` («Prøve 1»–
«Prøve 4», buttonText «Vis prøve N») med oppgavene (som `exercise`-blokker med
full `solution` + `hints`) etter skjelettets §4 prøvetabell. Etter hver
prøvefasit: avkryssbar selvdiagnose-sjekkliste (☐). Ingen quiz/begrepsbank.
Flervalg i prøver (om brukt): stokkede fasitbokstaver (aldri «alle a»).

## Faglig stil (ufravikelig — fra SKJELETT §1.6 + §6)
- **Notasjonsstandard (kursets):** $\nabla f$ gradient; $F'$ Jacobi-matrise
  (rad $i$ = $\nabla F_i$); Hesse-determinant $D = f_{xx}f_{yy} - f_{xy}^2$;
  volumelement $dV = r\,dz\,dr\,d\theta$ (sylinder) / $dV =
  \rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta$ (kule); fundamentalt
  vektorprodukt $\boldsymbol{\phi}_u \times \boldsymbol{\phi}_v$; fluks
  $\int F\cdot n\,dS$; $\operatorname{div}F$, $\operatorname{curl}F$;
  egenverdibetingelsen $\det(\lambda I - A) = 0$ (formelsamlingens form;
  $\det(A - \lambda I) = 0$ ekvivalent og godtas).
- **Føringsstandard i ALLE løsningsforslag (sensorkrav — ubegrunnet fasitsvar
  er en byggefeil):** radoperasjoner MERKES over `∼`-tegnet (`II−2I`, `III+I`);
  integrasjonsgrenser skrives som eksplisitte ulikheter FØR oppsett;
  substitusjon/variabelskifte bokføres (`u = r²`, nye grenser); teoremer NAVNGIS
  når de bærer argumentet («Ifølge omvendt funksjonsteorem …», «ifølge
  ekstremalverdisetningen …»); i Lagrange gjøres $\nabla g = 0$-sjekken; i
  fluks/divergens/Stokes gjøres fortegns-/orienteringskontrollen SYNLIG
  ($\boldsymbol{\phi}_u\times\boldsymbol{\phi}_v$ vs. oppgitt $n$; $n$ ut av $V$;
  høyrehåndsregel); verbal konklusjonssetning; **svar oppgis som EKSAKT verdi
  ($\tfrac{32}{3}$, $\tfrac{8\pi}{5}$), ALDRI desimaltilnærming.**
- **Delpunkt-kjeding er designet inn:** løsningene gjenbruker eksplisitt
  tidligere delsvar (invers fra forrige delpunkt; trippelintegral + plan-fluks
  inn i divergensteoremet). Vis koblingen.
- **Regime- og ærlighetsmerking (SKJELETT §1.6 pkt 7):** egenverdier/Markov
  (Del 6) + potensrekker (6.3–6.4): Eksamensvinkel sier ærlig «historisk
  ryggrad (~70 %/~85 %), men 0/3 i V2025 — beredskap». Gauss/Stokes/fluks
  (5.3–5.5): Eksamensvinkel forklarer at 3/3 og 1/3 i V2025 veier tyngre enn
  lav rå-frekvens. Taylor flervariabel (3.3) + difflikninger (6.6): merket
  «ikke arkivbelagt — sjekk nyere sett». Midtveissim (7.2): «formen er
  udokumentert — kalibrert på pensumvinduet».
- **Matematisk sannhetskontroll (UFRAVIKELIG):** fortegns-/entydighets-/
  «alltid»-påstander PARAMETERSJEKKES NUMERISK (python3) FØR de skrives.
  ETTERREGN alle talleksempler og fasitsvar numerisk. En «Vis at …»-oppgave der
  påstanden ikke holder er en byggefeil.
- **Figurkrav:** MAT1110 er ikke et grafisk-drill-fag som mikroøkonomi, men
  BER en oppgave/deloppgave eksplisitt om figur («skisser området», «tegn
  integrasjonsområdet», «vis i figur»), SKAL løsningen inneholde en faktisk
  `image`-SVG (ikke bare «Figur i ord»). SVG-er lagres i
  `public/images/textbook/mat1110/` (akser `#6b7280`, norsk tekst, transparent
  bakgrunn, viewBox ~480×360, valider XML) og MÅ lastes opp til Storage (byggeleder
  kjører `npx tsx scripts/upload-media-storage.ts` før deploy). Hold figurbruk
  minimal og bare der teksten faktisk ber om den. Prosabeskrivelse er komplement.
- **Enhets-/konvensjonsvalg:** ingen desimaltilnærming; eksakt algebra hele
  veien; radoperasjoner og orientering deklarert konsekvent.
- LaTeX: `$...$` inline, `$$...$$` display; i JSON dobles backslash (`\\nabla`,
  `\\iiint`, `\\boldsymbol{\\phi}`). Ingen unicode-brøker.
- Norsk bokmål. Alle oppgaver/case NYSKREVNE (egne funksjoner, tall, kontekster)
  — skjelettets mønstereksempler er selv omskrivninger og skal varieres videre,
  ALDRI kopieres ordrett. Pensum refereres, aldri siteres i lengde.

## Del 0-pakken (kap. 0.1) — ufravikelig
- **«Slik leser du denne boka»-orienteringsboks** (type `text`/`tip`, ALDRI
  `definition`): karakterskala (A–F; «C er en god og vanlig karakter»),
  kompakt sjangerliste A–R FORKLART i klarspråk, at typiske feil har et samlet
  register, og innramming av tunge symboler («du trenger ikke forstå disse
  symbolene ennå — de forklares der de brukes»).
- **Formel-minimum-side** (`collapsible`): de ~6–8 uunngåelige formlene, hver
  med én ordlinje + «resten kan slås opp». Dette er bokas samlede oppslagskort.
- **«Lite tid?»-boks**: hurtigrute (3–5 dager) + ukeplan fra summerte
  estimatedMinutes; si at anslag er LESEtid (×1,5 ved håndskriving).
- **Kildenote** for frekvens-empirien: SANNFERDIG — arkivet har oppgavesett
  (20 ordinære 2004–2025 uten 2020/2023 + 2 ekstra V2025 + 3 offisielle
  løsningsforslag, alle V2025 + utdelt formelsamling). Skriv ALDRI
  «sensorveiledninger» (finnes ikke i dette arkivet). Modellbesvarelser er
  NYSKREVNE, aldri «ekte studentbesvarelser».
- **Deltidsrute** (10–12 uker, generalprøver fordelt) + «lese mye, skrive
  lite»-boks. To-spors lesestrategi (V2025-regimet + beredskap).
- Karakter-realisme: «Prioritet: perfekt» FORBUDT (skriv «høyeste prioritet»);
  modellbesvarelser ærlig merket + minst én autentisk B-/midtnivåbesvarelse.

## Studentpanel bølge 4+5 (ufravikelig)
- ALLE ensartede fasitlister varierer (aldri «alle a», aldri «alle felle»).
- **INGEN LENGDE-TELL:** i quiz skal `options[0]` (riktig) IKKE være det
  lengste/mest detaljerte alternativet. Alle fire jevn lengde og presisjon;
  distraktorer like fyldige og plausible (trim heller fasiten). Sjekk med
  `scripts/hoyskolebok/quiz-lengdesjekk.mjs`.
- Distraktorer gjengir ALDRI bokas egne nyanser som «galt» svar (nær-sanne
  distraktorer forklares i `explanation`).
- Meta-fasit forbudt («en A-besvarelse ville ha …» → skriv utledningen UT).
- Modellbesvarelser lander ikke alle på samme kompromissform.
- Signal-/hintbokser står ETTER oppgaven de varsler.
- Frekvenspåstander («N av M sett») stemmer eksakt med belegg — bruk
  skjelettets tall (14/20, 19/20, 3/3 i V2025 osv.).
- Kapitler > 45 min: tidsanslag per løkke/pausepunkt-markører; lange
  modellbesvarelser «— naturlig pausepunkt —». Feilkoder glosses ved første
  bruk per kapittel.

## Quiz
`src/lib/data/quiz-staging/<id>.quiz.json`:
`[{question, options: [4 stk — options[0] ALLTID riktig], explanation}]`.
Kvote per kapittel = skjelettets §3 kvotesammendrag (AUTORITATIVT). Distraktorer
= reelle feller fra skjelettets «Typiske feil». Se lengde-regelen over.

## Verifiserte kryssbok-lenker (KUN disse er bekreftet å finnes)
Bruk skjelettets Forkunnskaper-lenker. Før du wirer en `/<annet>/...`-lenke:
sjekk at `src/lib/data/chapters/<id>.json` finnes. MAT1100 = ALLTID klartekst
med aktiveringsmarkør (ikke lenke). Byggeleder verifiserer alle kryssbok-lenker
mot disk før wiring; en død lenke feiler BOKPORT.

## Kvalitetskrav før ferdigmelding (per agent)
1. `python3 json.load` på hver fil. 2. Kvotetelling (definisjoner + quiz) mot
skjelettets §3-tabell for DINE kapitler. 3. Læringsløkke: `content[]` veksler
teori→eksempel→oppgave med `exercise` inline (ikke all teori topp / alle
oppgaver bunn). 4. Forkunnskapsdekning: ingen oppgave krever usett stoff.
5. Nybegynner-inngang: ingen kald kode i competenceGoals/første tekstboks; alle
sjangerkoder/termer forklart ved første bruk. 6. Føringsstandard i ALLE
løsninger (merkede radoperasjoner, ulikheter før oppsett, teoremnavn, fortegns-/
orienteringssjekk, eksakt svar). 7. Alle tall/fasitsvar ETTERREGNET numerisk.
8. Deloppgaver a) b) c) hver på egen linje med `**a)**`-merking. 9. Prøve-
flervalg stokket. 10. Ingen tom collapsible. 11. Kap-referanser = markdown-
lenker. 12. Symbol- og formelliste SIST i hvert teori-/drillkapittel.
13. `warning` Typiske feil i alle teori-/drillkapitler. Rapporter kort: filer,
kvotestatus, validering.
