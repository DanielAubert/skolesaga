# Byggekontrakt — FYS1001 Innføring i fysikk (UiO)

Instansiert fra BYGGEKONTRAKT-MAL for `fys1001`. Emne-slug: `fys1001`,
EMNEKODE: `FYS1001` (emnet het **FYS1000** frem til ca. 2017 — samme
eksamenstradisjon; arkivet er navngitt FYS1001 for hele serien). Arketype:
**regnefag** (`DNA-regnefag.md`). Les også `fys1001/SKJELETT.md` (§1 identitet,
§2 makrostruktur, §3 per-kapittel-kontrakter, §4 kvoter) og
`fys1001/EKSAMENSANALYSE.md`.

> Alle steder malen sier `<emne>` = `fys1001`, `<EMNEKODE>` = `FYS1001`,
> `<courseId>` = `fys1001`. Kryssbok-lenker: kun VGS-bøker som finnes (1T, R1,
> R2, Fysikk 2) lenkes — lenkene i SKJELETT §3 er verifiserte og skal brukes
> som de står.

**Bokens omfang:** 35 kapitler (1 eksamenskart + 27 tema + 7 eksamenstrening)
+ 7 prøvekapitler (del 1–7), 2 665 min ≈ 44 timer, **550 quiz** og
**505 flashcards** (begge ≥ 500-kravet).

## Filplassering
Ett JSON-dokument per kapittel: `src/lib/data/chapters/<kapittel-id>.json`.
IKKE rør `_registry.json`, `_all.json`, `textbook-courses*.ts`, `quiz-data*.ts`
— wiring gjøres sentralt (fase 5, `scripts/hoyskolebok/wire-bok.py`). Generer
JSON via python `json.dump`.

## Kapittel-JSON (toppnivå)
`{ id, courseId: 'fys1001', chapterNumber: '<del>.<nr>' (fra skjelettet),
title, description, estimatedMinutes, competenceGoals: [2–4 «kunne …»],
content: [blokker], exercises: [] }`

## Blokktyper (eksakte felt — referanse: econ1310-2-1.json)
- `text`: `{id, type, content}` (markdown + LaTeX `$...$`/`$$...$$`, `\\` i JSON)
- `definition`: `{id, type, title, content}` — **title OBLIGATORISK**
  (flashcards genereres KUN fra toppnivå definition-blokker med title)
- `theorem`: `{id, type, title, content}`
- `example`: `{id, type, title, problem, solution}` (solution = A-besvarelse)
- `tip` / `warning`: `{id, type, title, content}`
- `exercise`: `{id, type, exercise: {id, number, type: 'classic', difficulty:
  'lett'|'middels'|'vanskelig', task, solution, hints: []}}`. ALDRI
  solutionVideo/allowsUpload/allowsCanvasDrawing/answer.
- `collapsible`: `{id, type, title, buttonText, content: [blokker]}`
- `image`: `{id, type, src, alt, caption}` — for SVG-figurer (se «Figurkrav»).
Blokk-id-er: `<kapittel-id>-<løpenavn>`, unike i kapitlet.

## Obligatorisk kapittelstruktur
Per DNA-regnefag og skjelettets per-kapittel-kontrakt. Alltid, i denne
rekkefølgen først i kapitlet:
1. `tip` **Eksamensvinkel** (frekvens, vekt, sjangre — hentes ORDRETT fra
   kapitlets «Eksamensbelegg»-punkt i SKJELETT §3; frekvenstallene er telte
   belegg og skal ikke rundes eller pyntes)
2. `text` **Forkunnskaper** (kapitler i boka + kryssbok-lenker
   `[tittel](/bok/<courseId>/<chapterId>)` — KUN til kapitler som finnes i
   `src/lib/data/chapters/`; «kan leses uten forkunnskaper» hvis ingen. Kap.
   4.1, 6.1 og 7.2 er merket «kan leses uavhengig» i skjelettet)
Og SIST i kapitlet: `collapsible` **Symbol- og formelliste** (title «Symbol-
og formelliste», buttonText «Vis symboler og formler»): første linje
«Oppslagsverk — alt her forklares underveis i kapitlet.», deretter
markdown-tabell `| Symbol | Betydning |` + «**Formler i dette
delkapitlet:**» med display-LaTeX + tolkning. ALLE symboler/formler brukt i
delkapitlet — per delkapittel, ikke arv. **FYS1001-tillegg:** hver formel i
listen merkes «(står på formelarket)» eller «(må kunne brukes aktivt)», og
listen sier hvilken betydning kolliderende symboler har i nettopp dette
delkapitlet ($B$ = oppdrift eller magnetisk flukstetthet, $E$ = energi eller
elektrisk feltstyrke, $R$ = friksjonskraft eller resistans, $\lambda$ =
bølgelengde, henfallskonstant eller varmeledningsevne). Collapsibles skal
ALDRI være tomme — `content` er feltnavnet og skal ha blokker (ikke `text`).
Og alltid: `warning` **Typiske feil** (fra skjelettets «Typiske feil»-punkt) +
begrepsbank-definisjoner til flashcard-kvoten (hver stor begrepsbank åpner med
standard-notisen «flashcard-/repetisjonsstoff — hopp trygt over ved
førstegangslesing; tidsanslaget gjelder kjernestoffet») + `collapsible`
repetisjon (teorikapitler).

## Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»)
- Kun eksamensrelevant stoff; «bør kjenne til» sist og merket (i FYS1001
  gjelder dette Poiseuille i 3.2, Carnot/entropi i 4.3, gitter i 6.1,
  dosimetri i 7.3, satellittdetaljer i 1.4).
- Korte avsnitt (2–4 setninger), «du»-form, konkret norsk knagg før
  formalisme — presisjon vinner ved tvil.
- Hver oppgave synlig eksamensforankret («(Eksamenssjanger C — skråplan og
  bremsing)») eller åpenbart relevant. Sjangerbokstavene A–Q defineres i kap.
  0.1 og glosses ved første bruk i hvert kapittel.
- **Læringsløkke Teori → Eksempel → Oppgave:** `content[]` veksler teori
  (`text`/`definition`/`theorem`) → `example` → `exercise` i gjentatte små
  løkker gjennom delkapitlet, IKKE all teori øverst og alle oppgaver samlet
  nederst. `exercise`-blokkene plasseres INLINE i `content[]` rett etter
  eksempelet/teorien de hører til (plattformen renderer inline oppgaver).
- **Ingen usett forkunnskap:** ingen oppgave får kreve et begrep, en regel, en
  formel eller en metode som ikke er introdusert tidligere i kapitlet (t.o.m.
  eksempelet rett foran) eller i et tidligere kapittel referert i Forkunnskaper-
  blokken. Bygg oppgaveprogresjonen bit for bit.
- **Deloppgaver på egen linje, fet merking:** deloppgaver a), b), c) i `task`/
  `solution` skal HVER starte på egen linje med merket i fet — format
  `…\n\n**a)** …\n**b)** …`. ALDRI a) b) c) bak hverandre i løpende tekst.
  (Bruk ikke `subTasks`-feltet.)
- **Nybegynner-inngang / ingen uforklart sjargong:** HVER kode (sjangerkode
  A–Q, feilkode #N, karakterbokstav) og all karaktersjargong forklares i
  klarspråk ved FØRSTE bruk; ingen kald kode i `competenceGoals` eller i aller
  første tekstboks. Del 0 skal ha en **«Slik leser du denne boka»-
  orienteringsboks (type `text`/`tip`, ALDRI `definition` — ville endret
  flashcard-kvoten)** med karakterskalaen A–F, midtveis/slutt-vektingen
  20/80 %, kompakt liste over sjangerkodene A–Q, og at typiske feil har et
  samlet register (feilkatalogen). Boksen skal eksplisitt ramme inn tunge
  symboler leseren møter senere («du trenger ikke forstå $\varepsilon\sigma A
  T^4$ ennå — det forklares der det brukes»).
- **Stokket flervalg i prøvetekster:** statiske flervalg i prøve-collapsibles
  har stokkede fasit-bokstaver (ALDRI «alle a»); prøve-tipen sier hvor
  flervalget bor. Quiz-filene beholder options[0]-invarianten.
  NB: FYS1001s slutteksamen har **aldri** flervalg — flervalg i prøver skal
  derfor merkes som treningsform, ikke som eksamensform (midtveis 2007–2019
  hadde flervalg, det kan nevnes).
- **Del 0-pakken:** «Lite tid?»-boks (hurtigrute 3–5 dager + ukeplan fra
  summerte `estimatedMinutes`, totalt 2 665 min) + kildenote for
  frekvens-empirien + prosedyre-/sjangerkort på ÉN side (kortet selv, ikke
  lenkeliste) + deltidsrute (10–12 uker) + «lese mye, skrive lite»-boks +
  regnefagets **formel-minimum-side** (collapsible «Formlene du må kunne
  brukes aktivt — resten står på formelarket»).
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. X.Y](/bok/fys1001/fys1001-X-Y)`; død «se kapittel»-
  tekst er FORBUDT (aldri lenker i title-felt).
- **Karakter-realisme:** «C er en god og vanlig karakter» eksplisitt i Del 0;
  «Prioritet: perfekt» FORBUDT (skriv «høyeste prioritet»); «Gapet til A» =
  oppgraderingsmeny; modellbesvarelser ærlig merket og **nyskrevne** (aldri
  omtalt som ekte studentbesvarelser) + minst én autentisk B-/midtnivå-
  besvarelse i Del 0 og i øvingseksamenene.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter hver prøvefasit; lett
  innstegsoppgave (difficulty lett, ren gjengivelse/enhetsomregning) tidlig i
  teorikapitler der første oppgave ellers er full eksamenssjanger.
- **Hverdagsanker + verdens-caser:** hvert abstrakt tema åpner med et
  hverdagsanker før apparatet. FYS1001-eksamen er konsekvent kledd i
  hverdags-/natur-/medisinkontekst (sykkel, heis, blodstrøm, husisolasjon,
  solcelle, vulkan, havarikommisjon, armens biomekanikk) — eksemplene skal
  være det samme, aldri «naken» formelregning og aldri metaeksempler.
- **Tidsbudsjett-konsistens:** avvik mellom deklarert oppgavetid og sum
  deltider forklares. «Lite tid?»-boksen sier at anslagene er LESEtid
  (×1,5 ved håndskriving); eksamensmålet er ~11 min per deloppgave à 4 poeng.
- **Hint + difficulty-spredning:** alle exercises har utfylte `hints` (første =
  formelen/første grep, ALDRI konklusjonen); boka har noen «(krevende)»-merkede
  oppgaver + én merket kald bank UTEN hint (fasit = momentliste) i Del 8.
- **Fasitmønster-variasjon:** gjelder ALLE ensartede fasitlister — aldri «alle
  a», aldri «alle felle»/«alle riktig». Distraktorer gjengir ALDRI bokas egne
  nyanser som «galt» svar.
- **Meta-fasit forbudt:** «en A-besvarelse ville ha forklart …» erstattes av
  faktisk utskrevet forklaring.
- **Signalbokser ETTER oppgaven:** varsel om hva en drilloppgave tester står
  etter oppgaven/som collapsible hint, aldri foran.
- **Frekvenstall = telte belegg:** «N av M sett» skal stemme eksakt med
  skjelettets tall (36 slutteksamener er nevneren for temafrekvensene).
  **Sannferdige kildepåstander (UFRAVIKELIG):** grunnlaget omtales som
  **49 eksamenssett med tilhørende løsningsforslag (36 slutteksamener + 13
  midtveiseksamener, 2003–2024)**, der 2017–2024 er lest grundig. Bruk ALDRI
  «sensorveiledning» som selvstendig kildetype — arkivet består av
  oppgavesett + løsningsforslag i par. Metaregler om retting formuleres som
  «løsningsforslagene viser/krever …», ikke «sensor sier …» der belegget er
  et løsningsforslag. Forbehold som skal med i kildenoten: 2003–2016 er
  skumlest (±1 sett per celle), 2020v/2021v var hjemmeeksamener (unntaksår),
  midtveissett mangler i arkivet etter 2019.
- **Øktmerking + prøvedeling + feilkode-gloss:** kapitler > 45 min (alle
  drillkapitler og de fleste teorikapitlene) har tidsanslag per løkke og
  «— naturlig pausepunkt —»-markører; feilkoder glosses ved første bruk PER
  KAPITTEL; tunge kapitler (5.4, 7.1, 7.3, Del 8) har «Sist du var her»-
  forkunnskapsblokk som VISER de 2–3 nøkkelformlene ferdig oppfrisket.

## Prøvekapitler (7 stk — del 1 til 7)
Id `fys1001-<del>-prove`, chapterNumber `<del>.P`, tittel «Prøver til del
<del>: <deltittel>»: `tip` (dekning + tidsbruk) + `text` Forkunnskaper + fire
`collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med nyskrevne
oppgaver og full fasit skrevet som A-besvarelse (begrunnelse i hvert ledd,
enhet på hvert tallsvar, figur der sensor forventer figur), med poeng à 4 per
deloppgave. Innhold og minutter per prøve er fastlagt i SKJELETT §4 (f.eks.
Del 1: 1.A kinematikk og grafer 30 min · 1.B Newton og friksjon 40 min ·
1.C sirkelbevegelse og statikk 40 min · 1.D samlet mekanikkprøve 45 min).
Tip/description deklarerer «4 prøver à ~30–45 min» + «kan trygt deles over
flere kvelder — én prøve per økt» (aldri bare totalsum). Prøvene **1.D, 2.D,
3.D og 4.D** skal i tillegg si at de samlet (180 min) fungerer som
generalprøve til midtsemestereksamen (20 % av karakteren, dekker kun
mekanikk/fluid/innledende termofysikk). Etter hver prøvefasit: avkryssbar
selvdiagnose-sjekkliste (☐). Kap-referanser i fasitene som markdown-lenker.
Ingen quiz/begrepsbank i prøvekapitlene. Del 8 har INGEN prøvekapittel —
øvingseksamenene 8.3–8.5 dekker den funksjonen.

## Quiz
`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`:
`[{question, options: [4 stk — options[0] ALLTID riktig], explanation}]`.
Kvote per kapittel = tabellen under (AUTORITATIV — aldri underskrid).
Distraktorer = reelle feller fra analysen (celsius i gassloven, $U^2/R$ med
kildespenningen, kinematikk på krum bane, «tid til null» på henfallskurven,
lineær-tenkning i kvadrat-/fjerdegradslover).

## Kvoter (AUTORITATIVE — SKJELETT §4)

| Kap. | Quiz | Flashcards | | Kap. | Quiz | Flashcards |
|---|---|---|---|---|---|---|
| 0.1 | 10 | 10 | | 4.5 | 10 | 5 |
| 1.1 | 20 | 20 | | 5.1 | 15 | 15 |
| 1.2 | 25 | 25 | | 5.2 | 25 | 25 |
| 1.3 | 20 | 15 | | 5.3 | 10 | 5 |
| 1.4 | 15 | 15 | | 5.4 | 20 | 20 |
| 1.5 | 15 | 15 | | 6.1 | 20 | 20 |
| 1.6 | 15 | 5 | | 6.2 | 15 | 15 |
| 2.1 | 20 | 20 | | 6.3 | 15 | 15 |
| 2.2 | 25 | 20 | | 7.1 | 15 | 20 |
| 2.3 | 20 | 15 | | 7.2 | 15 | 15 |
| 2.4 | 15 | 5 | | 7.3 | 20 | 20 |
| 3.1 | 15 | 15 | | 7.4 | 10 | 5 |
| 3.2 | 20 | 20 | | 8.1 | 20 | 35 |
| 3.3 | 10 | 5 | | 8.2 | 10 | 10 |
| 4.1 | 20 | 20 | | 8.3 | 5 | 0 |
| 4.2 | 15 | 15 | | 8.4 | 5 | 0 |
| 4.3 | 20 | 20 | | 8.5 | 5 | 0 |
| 4.4 | 15 | 20 | | **Sum** | **550** | **505** |

Delsummer (kontrollsummér per del): Del 0 = 10/10 · Del 1 = 110/95 ·
Del 2 = 80/60 · Del 3 = 45/40 · Del 4 = 80/80 · Del 5 = 70/65 ·
Del 6 = 50/50 · Del 7 = 60/60 · Del 8 = 45/45. **Totalt 550 quiz (≥500) og
505 flashcards (≥500).** Kvotene er minimum per kapittel — forfatteren kan
overskyte, aldri underskride. Flashcards telles som toppnivå
`definition`-blokker med `title`.

## Opphavsrett (ufravikelig)
Alle oppgaver/case/tall NYSKREVNE (egne tall, kontekster, formuleringer) —
eksamenssjangrene er malen, aldri originaloppgavene. Skjelettets
mønstereksempler er selv omskrivninger og skal varieres videre, ikke kopieres
ordrett inn. Ingen tekst fra reelle sett eller løsningsforslag. Referanser
forfatteren er usikker på merkes `(verifiser)` og løses i verifikatorfasen.

## Fagspesifikk stil (FYS1001 — fra SKJELETT §1)

### Formelark-doktrinen (gjelder HELE boka — viktigste enkeltregel)
Eksamen deler ut **formelark** og tillater Gyldendals *Tabeller og formler i
fysikk*. Boka skal derfor ALDRI fremstille formler eller konstanter som
puggestoff. Skillet som skal gå igjen overalt:
- **«Må kunne brukes aktivt»** — velges, kombineres og omformes under
  tidspress: kjerneverktøyene i kapitlenes innholdskontrakter (kinematikk med
  gyldighetsflagg, $\Sigma F = ma$, energibevaring med friksjonslekkasje,
  $p$-bevaring gjennom støt, Bernoulli med punktvalg, $Q = cm\Delta T$/$Q=lm$,
  $pV=NkT=nRT$, $\Delta U = Q - W$, $P=\varepsilon\sigma A(T^4-T_{\text{omg}}^4)$,
  $U=RI$/$P=RI^2$, $r = mv/(qB)$, $n_1\sin\theta_1 = n_2\sin\theta_2$,
  $1/a + 1/b = 1/f$, A/Z-bevaring, $N = N_0(\tfrac12)^{t/t_{1/2}}$,
  $E = \Delta mc^2$).
- **«Hentes fra formelark/tabell»** — alle naturkonstanter ($c$, $h$, $k$,
  $e$, $\sigma$, $\gamma$, $R$, $N_A$, Coulomb-$k$, $k_m$, u→kg), materialdata
  (tettheter, $c$- og $l$-verdier, varmeledningsevner, brytningsindekser,
  lydfarter), kjernemasser og halveringstider (eget vedlegg), og sjeldne
  formler (Poiseuille, Wiens konstant).
Treningsrådet gjentas i Del 0 og i drillkapitlene: **løs alltid oppgaver med
formelarket ved siden av, slik eksamen faktisk er.**

### Notasjonsstandard (UFRAVIKELIG — hold konsekvent over alle agentgrenser)
- $G = mg$ er **tyngden** (kraften). Gravitasjonskonstanten skrives
  **$\gamma$** — ALDRI «$G$». $F = \gamma mM/r^2$, banefart $v=\sqrt{\gamma M/r}$.
- $N$ = normalkraft · $R = \mu N$ = friksjonskraft (i kretskapitlene er $R$
  resistans — symbollisten i delkapitlet sier hvilken som gjelder) ·
  $S$ = snordrag · $B = \rho V g$ = oppdrift (i magnetismekapitlene er $B$
  magnetisk flukstetthet — de kolliderer aldri i samme oppgave, men skal
  alltid defineres i delkapitlets symbolliste).
- $k$ = Coulomb-konstanten · $k_m$ = magnetisk konstant · $k$ (Boltzmann) i
  $pV = NkT$ — defineres per delkapittel. $E$ = energi *eller* elektrisk
  feltstyrke, defineres per delkapittel.
- **Temperatur i kelvin** i gasslov, i $\Delta V/V = \Delta T/T$, i
  $Q = T\Delta S$ og i strålingslovene. Celsius kun der differanser inngår, og
  da med eksplisitt kommentar.
- Alle tallsvar med **enhet** og **2–3 gjeldende siffer** — boka skal
  *modellere* sensorkravet (manglende/gal enhet: −1 poeng). Egne symboler
  innføres eksplisitt før bruk, også i løsningsforslag.
- All matematikk i `$...$`/`$$...$$`; ingen unicode-brøker eller unicode-
  eksponenter (skriv `$T^4$`, ikke «T⁴»); LaTeX-backslash er `\\` i JSON
  (generer via python `json.dump`). Konsistente symboler: $v_0$, $t_{1/2}$,
  $\lambda_{\text{maks}}$, $\Delta m$, $\varepsilon$, $\gamma$, $\mu$, $\rho$,
  $\theta$, $\eta$.

### Forbudt-termer og forbudt innhold (grep-sjekkes = 0)
Generelt: `Prioritet: perfekt` · `en A-besvarelse ville` · `ville ha drøftet`.
Fagspesifikt (**unntak: kap. 0.1 har ett avgrensningsavsnitt som eksplisitt
sier hva som IKKE er dekket og hvorfor — der er termene tillatt**):
- `sensorveiledning` (arkivet har oppgavesett + løsningsforslag — skriv
  «løsningsforslag»)
- Numerikk/programmering som eksamensstoff: `numerisk metode`,
  `Eulers metode`, `Python`, `programmering`
- SHM-formalisme: `2\pi\sqrt{l/g}`, `\omega = \sqrt{k/m}`, `harmonisk
  svingning` som regnesjanger
- Induksjon/transformator som regnesjanger: `Faradays lov`, `Lenz`,
  `indusert spenning`, `transformator`
- Utgåtte kretser: `RC-krets`, `Wheatstone`, `galvanometer`
- Relativitet utover $E=\Delta mc^2$ i kjernefysikk-kontekst: `Lorentz-faktor`,
  `tidsdilatasjon`, `relativistisk masse`
- «$G$» brukt om gravitasjonskonstanten (grep etter `gravitasjonskonstanten
  $G$`, `konstanten G` og `6{,}67` i nærheten av «G»)

### Arketypesærtrekk (regnefag — DNA-regnefag)
- **Modellbesvarelser = A-besvarelser:** mellomregning ledd for ledd,
  begrunnelse i HVERT ledd (rene tallsvar gir nesten null), navngitt lov der
  argumentet bæres, figur der sensor forventer figur, enhet på hvert tallsvar,
  verbal konklusjonssetning og rimelighetsvurdering til slutt. Minst én
  ærlig merket B-/midtnivå-besvarelse i Del 0 og i øvingseksamenene.
- **Metodevalg > riktig tall:** flere gyldige metoder godtas, men *feil* metode
  med riktig tall gir null. Bokas to navngitte metoderegler skal formuleres
  eksplisitt og gjentas i drillkapitlene: (i) krum bane eller varierende kraft
  → energimetode, aldri konstant-$a$-kinematikk (kap. 2.2); (ii) i sammensatte
  kretser → $P = RI^2$, aldri $U^2/R$ uten å vise at $U$ er spenningen over
  akkurat den motstanden (kap. 5.2).
- **Kvalitativ-kvoten (sjanger Q):** 25–40 % av eksamens deloppgaver er
  «forklar/begrunn». Samme andel av øvingene i teorikapitlene skal være
  kvalitative, med modellsvar i **2–4 setninger** etter svarmalen fra kap.
  8.1: 1) navngi mekanismen med fagbegrep, 2) koble mekanismen til
  situasjonen, 3) konkluder. Ingen helgardering (to alternative svar gir
  trekk), ingen essay.
- **Fysisk sannhetskontroll (UFRAVIKELIG — regnefagets parametersjekk):** ALLE
  tallsvar, fasiter og grafavlesninger etterregnes numerisk (python3) FØR de
  skrives, med enhetskontroll (dimensjonsanalyse) og størrelsesorden-sjekk
  (per henfall: MeV-skala; luftmotstand: N-skala). Fortegns- og
  «alltid»-påstander (f.eks. «banefarten avhenger bare av radien»,
  «parallellmotstanden er alltid mindre enn den minste grenen») verifiseres i
  hele det relevante parameterrommet før de påstås. En «vis at …» som ikke
  holder ubetinget, skal ha betingelsen skrevet ut.
- **Figurkrav (SVG, ikke bare ord):** ber en oppgave, et eksempel eller en
  prøvetekst om figur («tegn frilegemediagram», «skisser», «tegn T–t-kurven»,
  «marker avlesningen på grafen»), SKAL løsningen vise en faktisk `image`-blokk
  med SVG — «*Figur i ord:*» alene er ufullstendig, også inne i
  `collapsible`-er. Kjernefigurene som SKAL rendres: frilegemediagram
  (skråplan, heis, trinse), kraftdiagram i loopens topp/bunn, energiregnskap-
  skisse, strømningsskisse med punkt 1 og 2, T–t-kurve med faseknekk og
  markerte avlesninger, TS-syklus med areal, kretsskjema med strømretninger,
  feltlinjer i platekondensator, baneskisse med $v$/$B$/$F$ og kryss/prikk-
  notasjon, strålegang gjennom linse/prisme med normal og vinkler,
  energinivådiagram med overgangspiler, henfallskurve med halveringsavlesning.
  Filer: `public/images/textbook/fys1001/<navn>.svg`; akser i `#6b7280`,
  norsk tekst, transparent bakgrunn, viewBox ca. 480×360, valider XML.
  ETTER at figurene er skrevet: `npx tsx scripts/upload-media-storage.ts`
  (ellers 404 i prod). Caption skrives skreddersydd per plassering; `alt`
  beskriver figuren bokstavelig.
- **Sjangerkodene A–Q** (definert i kap. 0.1, gjentas glosset ved første bruk
  per kapittel): A kortsvarsserie · B støt-kjeden · C skråplan/bremsing/
  Newton 2 · D statikk/momentbalanse · E sirkelbevegelse/loop/satellitt ·
  F Bernoulli/Torricelli/kontinuitet · G kalorimetri/faseoverganger ·
  H ideell gass/prosesser · I strålings-/varmebalanse · J kretsanalyse ·
  K Coulomb/kraftbalanse · L ladd partikkel i felt · M bølger/lyd/seismikk ·
  N geometrisk optikk · O atom-/kvantefysikk · P kjernefysikk/stråling ·
  Q kvalitative hverdagsforklaringer.
- **Kryssbok-lenker:** kun 1T, R1, R2 og Fysikk 2 lenkes, med de eksakte
  id-ene som står i SKJELETT §3 (f.eks.
  `[Trigonometri i rettvinklede trekanter](/bok/1t/1t-5-4)`,
  `[Sirkelbevegelse og sentripetalkraft](/bok/fysikk2/fysikk2-1-4)`).
  Internlenker: `/bok/fys1001/fys1001-X-Y`.

## Kvalitetskrav før ferdigmelding (per agent)
1. `python3 json.load` på hver fil; 2. kvotetelling mot tabellen over
(definition-blokker + quiz); 3. forbudt-termer-grep = 0; 4. kryssbok-lenker
peker på eksisterende filer; 5. **læringsløkke**: `content[]` veksler
teori→eksempel→oppgave i løkker med `exercise`-blokker inline (ikke all teori
topp / alle oppgaver bunn); 6. **forkunnskapsdekning**: hver `exercise` hviler
bare på stoff introdusert tidligere i kapitlet eller i en referert forkunnskap;
7. **nybegynner-inngang**: alle sjangerkoder/karaktersjargong/insider-termer
forklart ved første bruk, ingen kald kode i competenceGoals/første tekstboks,
og Del 0 har «Slik leser du denne boka»-boksen (type `text`/`tip`, ALDRI
`definition`) med skala + kodeliste A–Q + feilregister; 8. **prøve-flervalg**:
fasitmønsteret sjekket — riktig svar varierer posisjon (aldri «alle a»);
9. grep «Prioritet: perfekt» = 0; 10. **ingen tom collapsible** (feltet heter
`content` og skal ha blokker — aldri `text`-nøkkel eller tom array);
11. kap-referanser i fasiter/forkunnskaper er markdown-lenker til
eksisterende filer; 12. **Del 0-pakken** på plass («Lite tid?»-boks m/
lesetid-setningen, kildenote for frekvens-empirien med de fire forbeholdene,
sjangerkort, deltidsrute, «lese mye, skrive lite»-boks, formel-minimum-siden)
og begrepsbank-notisene står først i hver stor bank; 13. **tidsbudsjett**:
deklarert oppgavetid vs. sum deltider forklart der de avviker;
14. **juridiske deklarasjoner**: innholdet fremstiller seg ALDRI som offisielt
eller UiO-tilknyttet og lover aldri eksamensutfall (deklarasjonene vises
automatisk av plattformen; ved wiring registreres boka på institusjon `uio`);
15. **fasitmønster** sjekket i ALLE ensartede fasitlister; 16. **hints** utfylt
på alle exercises (unntatt den merkede kalde banken i Del 8), første hint røper
aldri konklusjonen; 17. **frekvenstall** = skjelettets telte belegg (nevner 36
for slutteksamener, 49 for hele arkivet); 18. grep for meta-fasit = 0;
19. **øktmerking**: kapitler > 45 min har løkke-tidsanslag/pausepunkter og
prøvekapitlene deklarerer «4 prøver à ~30–45 min» + deling; 20. **feilkode-/
sjangerkode-gloss** ved første bruk per kapittel; 21. **regnefag-sjekkene**:
alle tallsvar etterregnet numerisk, enheter og gjeldende siffer på hvert svar,
kelvin der loven krever det, $\gamma$ (ikke $G$) for gravitasjonskonstanten,
og hver figur-forespørsel i oppgave/prøve besvart med en faktisk SVG.
