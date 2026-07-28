# Byggekontrakt — MAT1120 Lineær algebra (UiO)

Instansiert fra `BYGGEKONTRAKT-MAL.md` for `mat1120`. Arketype: **regnefag**
(`DNA-regnefag.md`). Autoritativ innholds- og kvotekilde:
`docs/hoyskole-boker/mat1120/SKJELETT.md` (les «Bokens identitet» §1.5 + per-
kapittel-DNA for DINE kapitler). Denne kontrakten gjelder HELE boka.

## Filplassering
Ett JSON-dokument per kapittel: `src/lib/data/chapters/mat1120-<del>-<nr>.json`
(+ `mat1120-<del>-prove.json` for temaprøver). IKKE rør `_registry.json`,
`_all.json`, `textbook-courses*.ts`, `quiz-data*.ts` — wiring gjøres sentralt
(steg 2). Generer JSON via python `json.dump` (LaTeX krever `\\` i JSON).

## Kapittel-JSON (toppnivå)
`{ id, courseId: 'mat1120', chapterNumber: '<del>.<nr>' (fra skjelettet),
title, description, estimatedMinutes, competenceGoals: [2–4 «kunne …»],
content: [blokker], exercises: [] }`

## Blokktyper (eksakte felt — referanse: `src/lib/data/chapters/econ1310-2-1.json`)
- `text`: `{id, type, content}` (markdown + LaTeX `$...$`/`$$...$$`, `\\` i JSON)
- `definition`: `{id, type, title, content}` — **title OBLIGATORISK**
  (flashcards genereres KUN fra toppnivå definition-blokker med title)
- `theorem`: `{id, type, title, content}`
- `example`: `{id, type, title, problem, solution}` (solution = A-besvarelse)
- `tip` / `warning`: `{id, type, title, content}`
- `exercise`: `{id, type, exercise: {id, number, type: 'classic', difficulty:
  'lett'|'middels'|'vanskelig', task, solution, hints: []}}`. ALDRI
  solutionVideo/allowsUpload/allowsCanvasDrawing/answer/subTasks.
- `image`: `{id, type, src:'/images/textbook/mat1120/<fil>.svg', alt, caption}`
  (for kjeglesnitt-skisser og geometriske refleksjonsfigurer — se «Figurkrav»).
- `collapsible`: `{id, type, title, buttonText, content: [blokker]}`
Blokk-id-er: `<kapittel-id>-<løpenavn>`, unike i kapitlet.

## Obligatorisk kapittelstruktur (teorikapittel)
I denne rekkefølgen FØRST i kapitlet:
1. `tip` **Eksamensvinkel** (frekvens/vekt/sjangre — fra skjelettets per-kapittel-DNA)
2. `text` **Forkunnskaper** (kapitler i boka + kryssbok-lenker; se «Kryssbok» under)

SIST i kapitlet: `collapsible` **Symbol- og formelliste** (title «Symbol- og
formelliste», buttonText «Vis symboler og formler»): første linje «Oppslagsverk —
alt her forklares underveis i kapitlet.», deretter markdown-tabell
`| Symbol | Betydning |` + «**Formler i dette delkapitlet:**» med display-LaTeX +
tolkning. ALLE symboler/formler brukt i kapitlet — per kapittel, ikke arv.

Alltid ellers: `warning` **Typiske feil** (fra skjelettet) + begrepsbank-
`definition`-blokker til flashcard-kvoten (hver stor begrepsbank åpner med
standard-notisen «flashcard-/repetisjonsstoff — hopp trygt over ved
førstegangslesing; tidsanslaget gjelder kjernestoffet») + `collapsible`
repetisjon (teorikapitler). Collapsibles har ALDRI tomt `content` (feltnavnet er
`content`, skal ha blokker — aldri `text`-nøkkel eller tom array).

Drillkapitler (1.4, 2.7, 3.4, 4.3, 5.3, 6.4): `tip` Eksamensvinkel + `text`
Løsningsoppskrift (algoritme) + gjennomregnet sensor-kommentert `example`-case +
10–15 `exercise` på eksamensnivå. Kap. 7.3 fører komplette modellbevis med
forutsetningssjekk. Kap. 8.1 er metodekapittel (føring + teoremnavn-bank).

## Prøvekapitler
Id `mat1120-<del>-prove`, chapterNumber `<del>.P`, tittel «Prøver til del <del>:
<deltittel>»: `tip` (dekning + «4 prøver à ~X min, kan trygt deles over flere
kvelder — én prøve per økt») + `text` Forkunnskaper + fire `collapsible` («Prøve
1»–«Prøve 4», buttonText «Vis prøve N») med oppgaver og full fasit etter
føringsstandarden (8.1). Der en prøve krever RREF/`poly`/`eig`: gjengi et
**vedlegg** som løsningen siterer. Prøvedetaljer i skjelettets §4. Etter hver
prøvefasit: avkryssbar selvdiagnose-sjekkliste (☐). Kap-referanser som markdown-
lenker. Ingen quiz/begrepsbank i prøvekapitler.

## Øvingseksamener (8.2–8.4)
Komplett 4-timers sett, 10 deloppgaver à 10 p, **eget vedlegg** (gjengitt
RREF/`poly`/`eig` for settets matriser). Løsningsforslag i `collapsible` per
deloppgave som A-besvarelse, med `tip`-notat om tidsbudsjett (~24 min/deloppgave)
og hvor føringspoengene sitter. Miks per sett: se skjelettets §4-tabell.

## Kryssbok-lenker (KUN til kapitler som finnes på dette treet)
- **MAT1110** (forkunnskapsemnet) ER NÅ BYGGET og live på treet (40 kapitler,
  registrert i `textbook-courses-hoyskole.ts`) → lenk NORMALT, kun til reelle
  kapitler. Aktiveringsmarkør-placeholderen er utfaset (rettet 22. juli). Mål:
  radreduksjon/trappeform → `/mat1110/mat1110-1-1`; nullrom/søylerom/rang →
  `mat1110-1-2`; invers matrise → `mat1110-1-3`; lineæravbildninger →
  `mat1110-1-4`; egenverdier → `mat1110-6-1`; diagonalisering → `mat1110-6-2`.
  For emner MAT1110 IKKE dekker (indreproduktrom/Cauchy–Schwarz): skriv «MAT1110»
  som ren tekst UTEN lenke — ALDRI fabrikker en lenke til et kapittel som ikke
  dekker emnet.
- Bygde bøker lenkes normalt (verifiserte mål på dette treet):
  `[…](/bi-okonomi/bi-okonomi-9-3)` (Gauss/likningssystem),
  `[…](/bi-okonomi/bi-okonomi-2-1)` (lineære likninger),
  `[…](/r2/r2-5-1)` (vektorer i 3D), `[…](/r2/r2-3-1)` (derivasjon),
  `[…](/r2/r2-2-1)` (komplekse tall), `[…](/r2/r2-4-1)` (integral),
  `[…](/r2/r2-5-6)` (kjeglesnitt), `[…](/r2/r2-6-6)` (bevis),
  `[…](/r1/r1-6-3)` (skalarprodukt).
- «kap. X.Y» internt = markdown-lenke `[kap. X.Y](/mat1120/mat1120-X-Y)`.

## Leserkrav (ufravikelig — full ordlyd i README «Leserkrav» + DNA-regnefag)
- **Læringsløkke Teori → Eksempel → Oppgave:** `content[]` veksler
  `text`/`definition`/`theorem` → `example` → `exercise` i gjentatte små løkker
  gjennom kapitlet, `exercise` INLINE rett etter teorien/eksempelet de trener —
  IKKE all teori øverst med oppgavene samlet nederst. Den store stigende
  oppgavepuljen kan samles til slutt som drill, men grunnstoffet gjennomarbeides
  løkke for løkke.
- **Ingen usett teknikk:** en oppgave får bare bruke definisjoner/teoremer/metoder
  vist tidligere i kapitlet (t.o.m. eksempelet foran) eller i et refererte
  forkunnskapskapittel. Sjekk hver `exercise` eksplisitt.
- **Deloppgaver a), b), c)** i `task`/`solution`: HVER på egen linje med fet
  merking — `…\n\n**a)** …\n**b)** …`. ALDRI bak hverandre i løpende tekst. Ikke
  `subTasks`.
- **Nybegynner-inngang:** definition-blokker åpner med forklaringen i ORD, formelen
  kommer etter (aldri en ligning som første linje). Tunge fagtermer (komparativ
  statikk finnes ikke her, men: koordinatavbildning, spektralteorem, isomorfi,
  algebraisk vs. geometrisk multiplisitet, indreprodukt, Rayleigh-kvotient,
  singulærverdi) skrives ut med klarspråksforklaring ved FØRSTE bruk. Sjangerkoder
  A–L forklares fullt ut ved første bruk; ingen kald kode i `competenceGoals`
  eller aller første tekstboks.
- **Del 0 (kap. 0.1)** har: «Slik leser du denne boka»-orienteringsboks (type
  `text`/`tip`, ALDRI `definition`) med karakterskala A–F + kompakt sjangerkodeliste
  (A–L) + at typiske feil har et samlet register + ramme rundt tunge symboler («du
  trenger ikke forstå $[T]_{\mathcal{B}}$/$P_{\mathcal{C}\leftarrow\mathcal{B}}$/
  $A=U\Sigma V^{T}$ ennå — de forklares der de brukes»); **formel-minimum-side**
  (collapsible «Formlene du må kunne utenat …») med de ~5–8 uunngåelige
  formlene/teoremene hver med én ordlinje (dette er regnefagets samlede
  oppslagskort); **«Lite tid?»-boks** (hurtigrute 3–5 dager + ukeplan fra summerte
  estimatedMinutes; sier at anslag er lesetid, ×1,5 ved håndskriving); **kildenote**
  for frekvens-empirien (sju offisielle løsningsforslag H2018–H2024 + oppgavesett —
  ALDRI oppdiktede sensorveiledninger); **deltidsrute** (10–12 uker) + «lese mye,
  regne mye»-boks. «C er en god og vanlig karakter» eksplisitt; «Prioritet:
  perfekt» FORBUDT (skriv «høyeste prioritet»).
- **Karakter-realisme + modellbesvarelser:** løsningsforslag er nyskrevne
  A-besvarelser, ærlig merket; minst én midtnivå-/B-besvarelse i eksamenstreningen.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter hver prøvefasit; én lett
  innstegsoppgave (difficulty lett, ren gjengivelse) tidlig i teorikapitler.
- **Hint på alle exercises:** første hint = formelen/teoremet/første grep, ALDRI
  konklusjonen. Boka SAMLET har noen «(krevende)»-merkede oppgaver + én merket
  kald bank UTEN hint (fasit = momentliste) i eksamenstreningsdelen (8.x).
- **Øktmerking:** kapitler > 45 min har løkke-tidsanslag/pausepunkt-markører; lange
  modellbevis/-besvarelser har «— naturlig pausepunkt —»; tunge kapitler (Del 6–7,
  8.x) har «Sist du var her»-blokk som VISER nøkkelformlene/-teoremene.

## Studentpanel-krav (SKAL inn i førsteutkastet)
- **Stokket flervalg** i prøve-collapsibles (aldri «alle a»); quiz-filene beholder
  `options[0]`-invarianten. Prøve-tipen sier hvor flervalget bor.
- **INGEN LENGDE-TELL** i quiz: fasiten (`options[0]`) skal IKKE være det lengste/
  mest detaljerte alternativet. Alle fire alternativer jevn lengde og presisjon; en
  student som «velger det lengste» skal treffe ~25 %. Skriv distraktorene like
  fyldige som fasiten (reelle feller fra §5). Sjekk med
  `scripts/hoyskolebok/quiz-lengdesjekk.mjs` før ferdig.
- **Distraktorer** gjengir ALDRI bokas egne nyanser som «galt» svar; nær-sanne
  distraktorer forklares i `explanation`.
- **Fasitmønster-variasjon** i ALLE ensartede fasitlister.
- **Signalbokser** («hva denne drilloppgaven tester») står ETTER oppgaven.
- **Frekvenstall = telte belegg:** «N av M sett» stemmer eksakt med belegget i
  EKSAMENSANALYSE.md. Aldri oppdiktet.

## Fagspesifikk stil (MAT1120 — fra SKJELETT §1.5)
- **Notasjonsstandard (Lay — bokstandard):** $\operatorname{Nul}A$,
  $\operatorname{Col}A$, $\operatorname{Row}A$, $\operatorname{rang}A$;
  $\operatorname{Span}\{\dots\}$; koordinatvektor $[\mathbf{x}]_{\mathcal{B}}$;
  overgangsmatrise $P_{\mathcal{C}\leftarrow\mathcal{B}}$ (leses «$\mathcal{C}$ fra
  $\mathcal{B}$»; søylene er $\mathcal{B}$-vektorenes $\mathcal{C}$-koordinater;
  $P_{\mathcal{B}\leftarrow\mathcal{C}}=(P_{\mathcal{C}\leftarrow\mathcal{B}})^{-1}$);
  matriserepresentasjon $[T]_{\mathcal{B}}$ og
  $[T]_{\mathcal{C}}=P_{\mathcal{C}\leftarrow\mathcal{B}}[T]_{\mathcal{B}}P_{\mathcal{B}\leftarrow\mathcal{C}}$;
  indreprodukt $\langle\mathbf{u},\mathbf{v}\rangle$; ortogonal projeksjon
  $\operatorname{proj}_W\mathbf{y}$; ortogonalkomplement $W^{\perp}$; diagonalisering
  $A=PDP^{-1}$; **ortogonal diagonalisering $A=PDP^{T}$** (Lays $P$-konvensjon — IKKE
  $QDQ^{T}$, hold $P$ konsekvent gjennom HELE boka); kvadratisk form
  $Q(\mathbf{x})=\mathbf{x}^{T}A\mathbf{x}$; normallikninger
  $C^{T}C\hat{\mathbf{x}}=C^{T}\mathbf{b}$; SVD $A=U\Sigma V^{T}$; karakteristisk
  likning $\det(A-\lambda I)=0$. All matematikk i `$...$`/`$$...$$`; ingen
  unicode-brøker; vektorer med `\mathbf`.
- **Vedlegget er metoden.** Hvert RREF-/`poly`/`eig`-baserte kapittel, hver prøve og
  hver øvingseksamen har et **eksplisitt vedlegg** (gjengitt RREF / karakteristisk
  polynom / egenverdier med egenvektorer for oppgavens matriser) som løsningen
  SITERER: «Fra vedlegget/Matlab-utskriften ($\operatorname{rref}$/
  $\operatorname{poly}$/$\operatorname{eig}$) ser vi at …». ALDRI manuell
  radreduksjon av store (≥3×4) matriser — det er byggefeil. Små 2×2-kontroller
  (verifisere $A\mathbf{v}=\lambda\mathbf{v}$, en liten normallikning) gjøres for
  hånd.
- **Føringsstandard i ALLE løsningsforslag (A-besvarelse):** mellomregning ledd for
  ledd; navngi teoremet der argumentet bæres (spektralteoremet,
  diagonaliserbarhetskriteriet, dimensjonsteoremet/rang–nullitet, ortogonal
  dekomposisjon, Rayleigh Teorem 6/7 §7.3, isomorfi-kriteriet); $\operatorname{Col}A$-
  basis fra **original** (ikke RREF); $P/D$ matchet søyle for søyle; $P$ ortonormal
  der ortogonal diagonalisering kreves ($P^{T}P=I$); kryssledd i $Q$ **delt på 2**;
  $P_{\mathcal{C}\leftarrow\mathcal{B}}$ i **riktig retning**; $\sigma_i$ **synkende**
  i $\Sigma$; $\ker T$/$\operatorname{Nul}[T]_{\mathcal{B}}$ **oversatt tilbake til
  funksjoner/polynomer**; verbal konklusjonssetning; **eksakt sluttsvar** markert
  (heltall/brøk/$\sqrt2$/$\tfrac{1}{\sqrt5}$ — ALDRI desimaltilnærming).
- **Diagonaliserbarhet begrunnes ALLTID** med multiplisitet eller en navngitt
  snarvei ($n$ distinkte ⇒ diagonaliserbar; symmetrisk ⇒ ortogonalt diagonaliserbar;
  triangulær ⇒ egenverdier avlest; ellers geo = alg per egenverdi). Ikke-
  diagonaliserbar vises ved geo < alg (et egenrom for lite).
- **Ikke-standard indreprodukt = den skarpeste fellen.** Når en oppgave oppgir et
  vektet ($\sum w_ix_iy_i$), integral ($\int_a^b p q\,dt$) eller evaluerings-
  indreprodukt ($\sum p(t_i)q(t_i)$): ALLE skalarprodukt, normer og
  ortogonalitetssjekker regnes med den definisjonen, også normen i Gram–Schmidt/
  normalisering. Hvert kapittel som berører indreprodukt har en `warning` om dette;
  Del 4–5 + øvingseksamen 8.4 driller det.
- **Delpunktgjenbruk er designet inn:** samme matrise/underrom gjenbrukes gjennom en
  hovedoppgave; løsningsforslagene VISER koblingen eksplisitt.
- **Aktiveringsmarkør for MAT1110** (se «Kryssbok»): klartekst, aldri død lenke.
- **Forbudt-termer (grep = 0):** `QDQ^T` og `QDQ^{T}` (bruk $A=PDP^{T}$);
  «Prioritet: perfekt»; «en A-besvarelse ville»; «ville ha drøftet»; desimal-
  tilnærminger av «pene» svar (f.eks. `0.7071`, `1.414`, `0.577` for
  $\tfrac{1}{\sqrt2}$/$\sqrt2$/$\tfrac{1}{\sqrt3}$); ordet «sensorveiledning» (arkivet
  har **løsningsforslag**, ikke sensorveiledninger).

## Figurkrav (kjeglesnitt + geometriske refleksjoner)
MAT1120 er ikke et kurveskift-fag, men to steder krever en oppgave/deloppgave som
sier «skisser»/«tegn figur» en faktisk figur i løsningen (DNA-regnefag «ber oppgaven
om figur, SKAL løsningen vise figuren»):
- **Kjeglesnitt** (kap. 6.3, drill 6.4, øvingseksamen 8.4): når en oppgave ber om å
  skissere en ellipse/hyperbel i hovedaksene etter variabelskiftet $\mathbf{x}=P\mathbf{y}$,
  skal løsningen ha en `image`-blokk med en SVG av kurven i hovedaksene (akser
  `#6b7280`, kurve mid-tone, norsk tekst, transparent bakgrunn, viewBox ~480×360,
  merkede hovedakser $y_1,y_2$).
- **Householder-refleksjon** (kap. 7.3): en `image`-blokk som viser speiling om
  hyperplanet $\mathbf{v}^{\perp}$ (en vektor, hyperplanet, og speilbildet) der den
  geometriske tolkningen forklares.
Filer: `public/images/textbook/mat1120/<navn>.svg`. Alternativt formulér oppgaven
UTEN figurkrav («klassifiser kurven» i stedet for «skisser»). Skreddersydd `caption`
per plassering; `alt` beskriver figuren bokstavelig. Nye SVG-er lastes opp til
Supabase Storage (steg 4) — ellers 404 i prod.

## Quiz
`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`:
`[{question, options: [4 stk — options[0] ALLTID riktig], explanation}]`. Kvote per
kapittel = skjelettets Summeringskontroll (§ SKJELETT, AUTORITATIV — aldri
underskrid). Distraktorer = reelle feller fra §5. LENGDE-TELL-regelen over gjelder.

## Opphavsrett (ufravikelig)
Alle oppgaver/matriser/tall NYSKREVNE (egne pene tall, egne matriser, egne rom) —
sjangrene og skjelettets mønstereksempler er malen, ALDRI kopiert ordrett inn. Lay
refereres, aldri siteres i lengde. Referanser du er usikker på merkes `(verifiser)`.

## Kvalitetskrav før ferdigmelding (per agent)
1. `python3 json.load` på hver fil; 2. kvotetelling (definitions + quiz) mot
skjelettets Summeringskontroll; 3. forbudt-termer-grep = 0; 4. kryssbok-lenker peker
på eksisterende filer (MAT1110 som klartekst); 5. **læringsløkke**: `content[]`
veksler teori→eksempel→oppgave med `exercise` inline; 6. **forkunnskapsdekning**:
ingen oppgave hviler på usett teknikk; 7. **nybegynner-inngang** + Del 0-pakken;
8. **prøve-flervalg** stokket; 9. grep «Prioritet: perfekt» = 0; 10. ingen tom
collapsible; 11. kap-referanser er markdown-lenker; 12. **vedleggsbruk**: hvert
RREF-/egenverdi-basert løsningsforslag siterer et eksplisitt vedlegg; 13.
**matematisk sannhetskontroll**: alle talleksempler/fasiter ETTERREGNET numerisk
(python3) — egenverdier, RREF-avlesninger, Gram–Schmidt, projeksjoner,
normallikninger, diagonaliseringer $PDP^{-1}$/$PDP^{T}$, SVD; fortegns-/
entydighetspåstander parametersjekket; 14. **hints** utfylt (unntatt merket kald
bank); 15. **eksakte svar** overalt; 16. **notasjonskonsistens** ($A=PDP^{T}$, ikke
$QDQ^{T}$).
