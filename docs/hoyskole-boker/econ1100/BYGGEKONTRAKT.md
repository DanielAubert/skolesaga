# Byggekontrakt: ECON1100 Matematikk I (for økonomer), UiO — teknisk kontrakt for kapittelforfattere

Gjelder ALLE forfatter-agenter som bygger kapitler til `econ1100`. Faglig
innhold styres av `SKJELETT.md` (identitetsseksjonen §1 + per-kapittel-DNA i
§3) — les ditt kapittels avsnitt der nøye, og `EKSAMENSANALYSE.md` ved behov.
Denne kontrakten definerer format og krav, og er bindende der den er mer presis
enn skjelettet. Ved faglig konflikt vinner SKJELETT.md; ved formatkonflikt
vinner denne kontrakten. Instansiert fra `../BYGGEKONTRAKT-MAL.md`.

**Arketype: DNA-regnefag** (`../DNA-regnefag.md`) — matematisk verktøyfag med
fast oppgavemal. Kapittel-DNA-ene der (teori / drill / øvingseksamen) er
obligatoriske og gjentas ikke i sin helhet her.

**Nærmeste bygde søskenbøker:** `econ1210` (samme institutt, samme arketype) og
`mat1100` (UiO-matematikk). Kopier arbeidsmåte derfra — aldri innhold. Merk at
ECON1100 er *matematikk for økonomer*, ikke kalkulus: **ikke lån struktur eller
notasjon fra MAT1100** (se «Kritisk faglig avgrensning» under).

---

## Filplassering

Ett JSON-dokument per kapittel: `src/lib/data/chapters/econ1100-<del>-<nr>.json`
(prøvekapitler: `econ1100-<del>-prove.json`). Quiz til
`src/lib/data/quiz-staging/econ1100-<del>-<nr>.quiz.json`.

IKKE rør `_registry.json`, `_all.json`, `textbook-courses*.ts`, `quiz-data*.ts`
— wiring gjøres sentralt (`scripts/hoyskolebok/wire-bok.py`). Generer JSON via
python `json.dump` (LaTeX krever `\\` i JSON-strenger).

## Kapittel-JSON (toppnivå)

```
{ id, courseId: 'econ1100', chapterNumber: '<del>.<nr>' (fra skjelettet — ALLTID
del-basert, «8.2», aldri lineær), title, description, estimatedMinutes,
competenceGoals: [2–4 «kunne …» — ingen kald sjangerkode/karakterbokstav],
content: [blokker], exercises: [] }
```

`competenceGoals` er Skolesagas EGNE formuleringer (destillert fra
eksamensanalysen), aldri kopier av UiOs offisielle læringsutbytte.

## Blokktyper (eksakte felt — strukturreferanse: `src/lib/data/chapters/econ1310-2-1.json`)

- `text`: `{id, type, content}` (markdown + LaTeX `$...$`/`$$...$$`, `\\` i JSON)
- `definition`: `{id, type, title, content}` — **title OBLIGATORISK**
  (flashcards genereres KUN fra toppnivå `definition`-blokker med `title`).
  Åpne med forklaringen i ORD; formelen kommer etter — aldri en ligning som
  første linje.
- `theorem`: `{id, type, title, content}`
- `example`: `{id, type, title, problem, solution}` (solution = A-besvarelse
  med full føring, jf. «Føringsstandard»)
- `tip` / `warning`: `{id, type, title, content}`
- `exercise`: `{id, type, exercise: {id, number, type: 'classic', difficulty:
  'lett'|'middels'|'vanskelig', task, solution, hints: []}}`. ALDRI
  `solutionVideo` / `allowsUpload` / `allowsCanvasDrawing` / `answer` /
  `subTasks`.
- `image`: `{id, type, src: '/images/textbook/econ1100/<fil>.svg', alt, caption}`
- `collapsible`: `{id, type, title, buttonText, content: [blokker]}` — ALDRI
  tom; feltnavnet er `content` og skal inneholde blokker (en `text`-nøkkel
  eller tom array rendrer som tom boks).

Blokk-id-er: `<kapittel-id>-<løpenavn>`, unike i kapitlet.

---

## LÆRINGSLØKKE-KONTRAKT (ufravikelig byggekrav — produkteier 9. juli 2026)

`content[]` i hvert teori- og drillkapittel struktureres som gjentatte SMÅ
løkker **Teori → Eksempel → Oppgave**, én løkke per metode/formel:

1. metode eller formel (`definition`/`theorem` + evt. `text`-utledning), →
2. gjennomregnet `example` på nettopp den metoden, →
3. `exercise` INLINE i `content[]` rett etter eksempelet (plattformen renderer
   inline oppgaver), →
4. neste metode.

IKKE all teori øverst og alle oppgaver samlet nederst. Den store, stigende
oppgavepuljen kan fortsatt samles til slutt som eksamensdrill — men grunnstoffet
skal først være gjennomarbeidet løkke for løkke.

**Ingen usett forkunnskap:** en oppgave får bare bruke formler, teoremer og
teknikker som allerede er vist — tidligere i SAMME kapittel (t.o.m. eksempelet
rett foran) eller i et tidligere kapittel referert i Forkunnskaper-blokken.
Sjekk dette eksplisitt før ferdigmelding.

Unntak: prøvekapitler og øvingseksamener følger sin egen arketype (komplett
sett først, løsninger i `collapsible`-er).

---

## Obligatorisk kapittelstruktur

### Teorikapitler (DNA-regnefag + skjelettets per-kapittel-DNA)

Først i kapitlet, i denne rekkefølgen:

1. `tip` **Eksamensvinkel** — frekvens, vekt og sjangre med de EKSAKTE tallene
   fra skjelettets per-kapittel-DNA («Oppgave 1 i 16 av 16 sett»,
   «Lagrange i 13 av 16 sett — 81 %»). Tell beleggene; ingen oppdiktede tall.
2. `text` **Forkunnskaper** — kapitler i boka (markdown-lenker
   `[kap. X.Y](/bok/econ1100/econ1100-X-Y)`) + kryssbok-lenker fra listen under
   «Kryssbok-lenker». KUN til kapitler som finnes. «Kan leses uten
   forkunnskaper» der skjelettet sier `prerequisites: ingen`.
   **«Sist du var her»:** i tunge kapitler med stor avstand til forkunnskapen
   (Del 8, 9, 11 særlig) SKAL blokken VISE de 2–3 nøkkelformlene ferdig
   oppfrisket, ikke bare lenke.

Deretter LÆRINGSLØKKER (se over) gjennom hele delkapitlet, med `text`
**Motivasjon** (maks 2–3 avsnitt) som inngang og `text` **Utledning med
intuisjon** der eksamen krever aktiv utledning (se «Utledes vs. brukes»).

Og alltid, uansett plassering:

- `warning` **Typiske feil** — feilene fra skjelettets «Typiske feil»-linje,
  med feilkodene fra feilkatalogen (#1–#12) **glosset ved første bruk PER
  KAPITTEL**: «(#2 — konkludere om ekstremum fra $f''=0$ i punktet)».
- Begrepsbank-`definition`-blokker til flashcard-kvoten. Hver stor begrepsbank
  åpner med notisen: «Begrepsbanken er flashcard-/repetisjonsstoff — den
  gjentar det du nettopp har lest. Hopp trygt over ved førstegangslesing;
  tidsanslaget for kapitlet gjelder kjernestoffet.» `definition`-blokker
  slettes ALDRI for å «rydde».
- `collapsible` **Repetisjonsoppgaver** (teorikapitler): 4–6 korte oppgaver fra
  forkunnskapskapitlene.
- **SIST i kapitlet:** `collapsible` **Symbol- og formelliste** (se egen
  seksjon under — obligatorisk i alle kapitler i denne boka).

Oppgavemengde per teorikapittel: 6–12 `exercise` med stigende vanskelighet
(2–3 lett, 2–4 middels, 2–4 vanskelig/eksamensklone), alle med `solution` og
utfylte `hints`. 2–4 `example`, der det siste ligger på eksamensnivå.

### Drillkapitler (1.6, 4.5, 6.2, 8.5, 9.3, 11.1)

1. `tip` **Eksamensvinkel** — hvilke varianter av sjangeren som har forekommet.
2. `text` **Løsningsoppskrift** — den nummererte algoritmen fra skjelettets
   innholdskontrakt, ordrett i innhold (egne formuleringer).
3. `example` **Gjennomregnet eksamenscase** med sensor-margnotater: hva som
   gir uttelling ved hvert steg (rett metode valgt, tilbakesubstitusjon gjort,
   forenklet, begrunnelse vist).
4. 8–15 `exercise` på eksamensnivå som roterer sjangerens varianter (antall og
   miks er spesifisert per drillkapittel i skjelettet).

### Øvingseksamener (11.2–11.4)

Komplett nyskrevet sett FØRST, i eksamensform: 5 oppgaver, 100 poeng likt
fordelt per delpunkt, 180 minutter. Deretter `collapsible` per oppgave med
løsningsforslaget som A-besvarelse. `tip` med vekting og tidsbudsjett per
oppgave (skjelettet oppgir minuttfordelingen). Lange løsningsforslag har
«— naturlig pausepunkt —» mellom hovedseksjonene.

### Prøvekapitler

Id `econ1100-<del>-prove`, `chapterNumber` `<del>.P`, tittel «Prøver til del
<del>: <deltittel>». Ti prøvedeler: **[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]** — fire
prøver hver (40 totalt). **Del 0 er metadel** og **Del 11 har ingen egne
prøver** (den ER eksamenstreningen).

Struktur: `tip` (dekning + «4 prøver à ~X min» + «kan trygt deles over flere
kvelder — én prøve per økt») + `text` Forkunnskaper + fire `collapsible`
(«Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med nyskrevne oppgaver i
eksamens sjangre og full fasit (A-besvarelse med utregning/begrunnelse synlig +
poengfordeling). Prøvenes tema per del står i skjelettets «Prøve-kvote Del
N»-linjer og §4 — følg dem.

Flervalg i prøve-`collapsible`-er: **stokkede fasit-bokstaver** (aldri «alle
a»), og prøve-tipen sier hvor flervalget bor. Etter hver prøvefasit: avkryssbar
selvdiagnose-sjekkliste (☐). Kap-referanser i fasitene som markdown-lenker.
**Ingen quiz og ingen begrepsbank i prøvekapitler.**

---

## Symbol- og formelliste (obligatorisk i ALLE kapitler i denne boka)

ECON1100 har ingen symbolfrie kapitler. SIST i hvert kapittel:

```
{"id": "econ1100-X-Y-symbolliste", "type": "collapsible",
 "title": "Symbol- og formelliste",
 "buttonText": "Vis symboler og formler",
 "content": [ … ]}
```

Første blokk i `content`: «Oppslagsverk — alt her forklares underveis i
kapitlet.» Deretter markdown-tabell `| Symbol | Betydning |` med ALLE symboler
brukt i delkapitlet, så «**Formler i dette delkapitlet:**» med display-LaTeX og
én tolkningslinje per formel. **Per delkapittel — ingen arv:** at $f'_x$ ble
forklart i kap. 1.2 gjør den ikke forklart i kap. 8.2. (Studentpanel: en
symbolvegg i døråpningen skremmer — listen er oppslag, ikke inngangsport.)

## Formel-minimum (bokas samlede oppslagskort — Del 0)

Kap. 0.1 skal ha en `collapsible` «Formlene du må kunne utenat — og resten kan
du slå opp» med de uunngåelige formlene, hver med én ordlinje, og eksplisitt
beskjed om at resten kan slås opp. Dette ER regnefagets samlede oppslagskort
(README «Leserkrav»), og det skal være en ren, printbar tabell. Minimumsinnhold
(fra skjelettets §5 punkt 7), med markering av hva som skal **utledes** vs. kun
**brukes**:

| Formel | Ordlinje | Utledes / brukes |
|---|---|---|
| $f'_x$, $f''_{xy}$ | deriver mht. én variabel, hold de andre konstante | brukes |
| $\ln y = g\ln f \Rightarrow y'/y=\dots$ | logaritmisk derivasjon for variabel eksponent | brukes |
| $df = f'_x\,dx + f'_y\,dy$ | begge ledd med, alltid | brukes |
| $f\approx f_0+f'_x\Delta x+f'_y\Delta y$ | lineær approksimasjon rundt et punkt | brukes |
| $\mathrm{El}_x f=\frac{x}{f}f'(x)$ | prosent per prosent | brukes |
| $\mathrm{El}_x f=\mathrm{El}_u g\cdot\mathrm{El}_x u$ | kjerneregel for elastisiteter | **utledes** |
| $f(tx,ty)=t^k f(x,y)$ | homogen av grad $k$; dobling ganger med $2^k$ | brukes |
| $xf'_x+yf'_y=kf$ | Eulers relasjon | **utledes** |
| $y'=-F'_x/F'_y$ | nivåkurvens helning | **utledes** |
| $D=f''_{xx}f''_{yy}-(f''_{xy})^2$ | Hesse-determinanten: $<0$ sadel, $>0$ min/maks etter $f''_{xx}$ | brukes |
| $L=F-\lambda(g-m)$, FOB, MRS = prisforhold | Lagrange-oppskriften | brukes |
| $dV/da=\partial L^*/\partial a$ | omhyllingsteoremet — brukes direkte | brukes |
| $g'(y)=1/f'(x)$ | den inverses deriverte | brukes |
| $\int x^n dx$, $\int\frac1x dx=\ln\lvert x\rvert$, $\int e^{kx}dx$ | de tre antideriverte du trenger | brukes |
| $\sum_{t=0}^{\infty}ar^t=\frac{a}{1-r}$, $\lvert r\rvert<1$ | geometrisk rekke — konvergenskravet er halve poenget | brukes |

---

## Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»; SKAL i førsteutkastet)

- **Kun eksamensrelevant stoff.** «Kjenne til»-stoffet (Del 10) kommer sist og
  merkes ærlig med sin lave frekvens (hver 31 %, nesten alltid som
  sant/usant-punkt).
- **Korte avsnitt** (2–4 setninger), aktiv «du»-form, konkret norsk knagg før
  formalismen. Godt, flytende norsk — ingen telegramstil. Presisjon vinner ved
  tvil.
- **Hver oppgave synlig eksamensforankret** med sjanger-tag i ledende parentes:
  `(Eksamenssjanger P1 — partiellderivasjon, Oppgave 1.)`. Sjangerkodene
  P1/SU/LG/FD/NK/HD/PR/DA/EL/HG/OM/HR/IN/IT/SR skrives FULLT UT ved første bruk
  per kapittel («sjanger SU — «sant eller usant? begrunn», Oppgave 2»).
  Vanskelighetsgraden skrives ALDRI inn i `task` (den ligger i `difficulty`).
- **Deloppgaver på egen linje med fet merking:** `…\n\n**a)** …\n**b)** …`.
  ALDRI a) b) c) bak hverandre i løpende tekst. Små bokstaver, aldri A)/[A].
  Ikke bruk `subTasks`.
- **Inline-nummerering** `(1) … (2) … (3) …` (≥3 påfølgende) settes på egne
  linjer. Merk at dette IKKE gjelder FOB-nummereringen «FOB (1)», «FOB (2)» —
  den er fagets egen notasjon og står som den skal i løpende utledning.
- **Nybegynner-inngang / ingen uforklart sjargong:** HVER sjangerkode, HVER
  feilkode #N og hver karakterbokstav forklares i klarspråk ved FØRSTE bruk PER
  KAPITTEL. Ingen kald kode i `competenceGoals` eller i aller første tekstboks.
  Tunge fagtermer (komparativ statikk, marginal substitusjonsrate,
  skyggepris, homogenitetsgrad, stasjonærpunkt) skrives ut med
  klarspråksforklaring første gang.
- **Del 0 (kap. 0.1) skal ha «Slik leser du denne boka»-orienteringsboks**
  (type `text` eller `tip`, **ALDRI `definition`** — ville endret
  flashcard-kvoten) med: karakterskalaen A–F og hva de tre sjiktene faktisk
  mestrer (fra skjelettets «Karakterskillene»), en kompakt liste over
  sjangerkodene P1–SR, at typiske feil har et samlet register (#1–#12), og en
  eksplisitt innramming av tung notasjon: «du trenger ikke forstå $\lambda$,
  $\mathrm{El}_x f$ eller $D=f''_{xx}f''_{yy}-(f''_{xy})^2$ ennå — de forklares
  der de brukes».
- **Del 0-pakken** (alt i kap. 0.1):
  (a) **«Lite tid?»-boks** (`tip`): hurtigrute for 3–5 dager (kapittelrekkefølge
  + timeanslag) og ukeplan bygget av summerte `estimatedMinutes` — med
  setningen om at anslagene er LESEtid, og at den som regner for hånd bør legge
  på ca. ×1,5.
  (b) **Kildenote for frekvens-empirien** — se «Sannferdig kildenote» under.
  (c) **Sjangerkort på ÉN side** som ER kortet (sjanger → én linjes oppskrift →
  typisk plassering/vekt → vanligste feil), ikke en lenkeliste.
  (d) **Deltidsrute** 10–12 uker (~8 t/uke) med de tre øvingseksamenene fordelt
  på flere økter — aldri stablet i siste uke. Skjelettets §5 punkt 8 gir
  progresjonen (Del 0 → 1 → 3 → 4 → 5 → 8, så 2 → 6 → 7 → 9, så 10, så 11).
  (e) **«Lese mye, skrive lite»-boks**: legitim rute for lese-øveren (les
  oppgaven → formuler fremgangsmåten i én setning → les fasiten som sensor) +
  minimumsrådet om å regne minst ÉN øvingseksamen for hånd på tid.
  (f) **Formel-minimum-siden** (se egen seksjon over).
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. X.Y](/bok/econ1100/econ1100-X-Y)`. Død «se kapittel
  X.Y»-tekst er FORBUDT. Aldri lenker i `title`-felt.
- **Karakter-realisme:** Del 0 sier eksplisitt at **C er en god og vanlig
  karakter**, særlig i første semester. Formuleringen **«Prioritet: perfekt» er
  FORBUDT** — skriv «høyeste prioritet». «Gapet til A» rammes inn som
  oppgraderingsmeny. Modellbesvarelser merkes ÆRLIG (en «C-besvarelse» ER en
  C), og boka skal ha minst én autentisk B-/midtnivå-besvarelse — realistisk
  studentføring, litt rotete, med margnotat om hva som er BRA NOK. Eksamen er
  A–F (ikke bestått/ikke-bestått), så «bestått-på-marginen»-varianten er ikke
  påkrevd; i stedet vises minst én besvarelse som lander på D/E-nivå med
  konkret oppgraderingsmeny.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter HVER prøvefasit. I
  teorikapitler der første oppgave ellers ville vært full eksamenssjanger: én
  lett innstegsoppgave tidlig (`difficulty: 'lett'`, ren gjengivelse/enkel
  utregning, vennlig fasit).
- **Hverdagsanker + verdens-caser:** abstrakte kjernetemaer (elastisitet,
  homogenitet, omhyllingsteoremet, nivåkurver) åpner med et konkret
  hverdagsanker FØR apparatet. Eksemplene er verdens-caser (strømpris og
  forbruk, klimakvoter, bemanning i en butikk, matbudsjett), ALDRI
  metaeksempler av typen «en medstudent skriver …».
- **Stokket flervalg og varierte fasit-mønstre:** ALLE ensartede fasitlister
  varierer — aldri «alle a», aldri «alle usant». Sant/usant-drillen (kap. 11.1)
  og alle SU-prøver skal ha en blanding av sanne og usanne påstander i
  uforutsigbar rekkefølge; en student som svarer «usant» på alt skal ikke
  komme godt ut. Quiz-filene beholder `options[0]`-invarianten (runtime
  stokker).
- **Distraktorer straffer aldri grundig lesing:** en distraktor gjengir ALDRI
  bokas egen presisering som «galt» svar. Ligger en distraktor nær sannheten,
  forklarer `explanation` eksplisitt hvorfor den ikke holder.
- **Hint på alle oppgaver:** hvert `exercise` har utfylte `hints`. Første hint =
  formelen / metodevalget / første grep («Eksponenten er variabel — hvilken
  metode forventer sensor da?»), ALDRI konklusjonen. Eneste unntak: den ene
  merkede kalde banken.
- **Difficulty-spredning + kald bank:** boka skal ha genuint krevende oppgaver
  merket `difficulty: 'vanskelig'`, og ÉN merket **kald bank** (8–10 oppgaver
  uten hint, fasit = momentliste) i eksamenstreningsdelen — legges i kap. 11.1
  som avsluttende «kald bank: sant/usant uten hint».
- **A-konklusjonsvariasjon + meta-fasit forbudt:** fasitene skriver argumentet
  UT. «En A-besvarelse ville her ha vist …» er en regibemerkning og er FORBUDT
  — vis utregningen i stedet.
- **Signal-/hintbokser ETTER oppgaven:** en boks som varsler hva en drilloppgave
  tester («her ligger $f''=0$-fellen») plasseres ETTER oppgaven, som del av
  fasit-oppfølgingen eller som `collapsible` hint — aldri rett foran.
- **Frekvenstall = telte belegg:** hver «N av M sett»-påstand skal stemme
  EKSAKT med skjelettets belegg. Nevneren er **16** (9 ordinære + 7 utsatte)
  når hele arkivet menes, **9** når bare ordinære menes, **7** når bare utsatte
  menes — si alltid hvilken nevner du bruker. «6/6 ordinære sett 2020–2025» er
  en egen, snevrere påstand enn «8/16».
- **Øktmerking:** kapitler med `estimatedMinutes > 45` (1.2, 1.6, 2.1, 4.1,
  4.2, 4.3, 4.5, 5.1, 5.2, 6.1, 6.2, 8.1, 8.2, 8.5, 9.1, 9.2, 9.3, 11.1–11.4)
  har tidsanslag per løkke («Løkke 2 — kvotientregelen (~15 min)») eller
  eksplisitte «— naturlig pausepunkt —»-markører.
- **Tidsbudsjett-konsistens:** der en oppgaves deklarerte tid avviker fra
  summen av deltidene, forklares differansen (anbefalingene er regnetid; resten
  er lesing av settet, kladd og kontrollregning).

### Sannferdig kildenote (UFRAVIKELIG — produkteier)

ECON1100 har et **uvanlig rikt arkiv**, og kildenoten skal si det presist og
sannferdig — verken mer eller mindre:

> Boka er kalibrert mot **16 eksamenssett med offisielle sensorveiledninger**
> fra Økonomisk institutt, UiO: 9 ordinære (V2018 og H2018–H2025) og 7 utsatte
> (V2018-utsatt og H2020–H2025-utsatt). De siste årgangene er lest grundig;
> V2018-settene er skummet. **Forbehold:** V2018-settene følger et gammelt
> format (integrasjon som storoppgave, andrederiverte i Oppgave 1) og er minst
> representative — boka er kalibrert mot H2021–H2025-malen. Nye sett kan endre
> bildet.

Til forskjell fra MAT1100 og IN1900 **finnes det faktisk sensorveiledninger**
her, så ordet skal brukes — men bare om de 16 settene, aldri utvidet. Andre
regler: modellbesvarelser omtales ALLTID som **nyskrevne** (aldri som ekte
studentbesvarelser); boka fremstiller seg ALDRI som offisiell eller tilknyttet
UiO; ingen påstand om eksamensutfall.

---

## Fagspesifikk stil (ufravikelig for ECON1100 — fra skjelettets §1)

### Kritisk faglig avgrensning (gjelder HELE boka)

Følgende har **0 forekomster i alle 16 sett** og skal IKKE bygges ut — de
nevnes med ÉN setning i kap. 0.1 (fraværsbildet), slik at studenten vet at
fraværet er trygt, og deretter aldri mer:

- lineær algebra / matriser / determinanter
- differensiallikninger
- integrasjonsteknikker (substitusjon, delvis integrasjon, delbrøk)
- Taylorpolynom / rekkeutvikling
- komplekse tall

Integrasjon opptrer KUN som elementære antideriverte og bestemte integraler
(kap. 10.2). **Andreordensbetingelse under bibetingelse (rand-Hessian) er
bekreftet ikke pensum** (H2023 O3c) og omtales KUN i kap. 8.4 (og kort i 8.5 og
0.1) som noe studenten *ikke* skal bruke.

Dette skiller ECON1100 skarpt fra MAT1100 Kalkulus: **ikke lån struktur eller
notasjon derfra.**

### Notasjonsstandard (grep-konsistens over alle econ1100-filer)

Bruk eksamenssettenes notasjon, ikke lærebok-alternativer:

- **Partiellderiverte:** $f'_x$, $f'_y$, $f''_{xx}$, $f''_{yy}$, $f''_{xy}$.
  $\partial f/\partial x$-notasjonen er likestilt og introduseres PARALLELT i
  kap. 1.2 (sensor bruker begge) — men den primære skrivemåten i boka er
  aksentnotasjonen.
- **Elastisitet:** $\mathrm{El}_x f$, definert som $\mathrm{El}_x f =
  \frac{x}{f}\,f'(x)$. ALDRI $E_x$, $\varepsilon$ eller andre varianter.
- **Lagrange:** $L$ for Lagrange-funksjonen, $\lambda$ for multiplikatoren,
  $x^*$, $y^*$ for optimale verdier. Bibetingelse $p_1x+p_2y=m$ (budsjett)
  eller $F(K,L)=\bar Y$ (produksjon).
- **Førsteordensbetingelser** nummereres «FOB (1)», «FOB (2)», …
  Tangeringsbetingelsen tolkes ALLTID som «MRS = prisforhold» (marginal
  substitusjonsrate — skriv termen ut ved første bruk per kapittel).
- **Hesse-determinanten:** $D = f''_{xx}f''_{yy} - (f''_{xy})^2$. Skriv
  «Hesse-determinanten $D$» — ALDRI «Hesse-matrisen» (ordet *matrise* er
  forbudt, se under).
- **Nivåkurvens helning:** $y'(x) = -\,F'_x/F'_y$.
- **Produsentteori:** $r$ (kapitalpris), $w$ (lønn), $K$, $L$, $N$
  (sysselsetting), $\bar Y$/$\bar Q$ (produksjonskrav), CES-teknologi
  $(K^\gamma+L^\gamma)^{\alpha/\gamma}$ med substitusjonselastisitet
  $\sigma = 1/(\gamma-1)$.
- All matematikk i `$...$`/`$$...$$`; **ingen unicode-brøker eller
  unicode-symboler** i brødteksten (`\\` i JSON: `\\lambda`, `\\frac`,
  `\\partial`, `\\mathrm{El}`).

### Kritisk sjangerregel: «Begrunnelse er alt» (KONTRAKTSLINJE)

Sensor gir **0 poeng for ubegrunnet ja/nei** i sant/usant-oppgaven, selv når
konklusjonen er riktig. Dette er fagets viktigste enkeltregel, og den styrer
hvordan ALT skrives:

- Hvert `example.solution`, hver `exercise.solution` og hver prøvefasit på en
  «avgjør/begrunn»-oppgave viser **utregningen eller argumentet**, aldri bare
  konklusjonen. En fasit som bare sier «Usann» er en BYGGEFEIL.
- Malen er: **konklusjon + fullstendig begrunnelse** (sett inn, regn ut,
  forenkle, sammenlign ledd for ledd med påstanden — eller: vis argumentet).
- Følgefeil straffes ikke (bygg videre på eget mellomresultat), men **åpenbar
  forenkling kreves for full uttelling**, og **metoden bærer poengene, ikke
  svaret**. Alle løsningsforslag skrives som en A-besvarelse med disse
  prinsippene synlige.

### Føringsstandard (A-besvarelse — bokas håndverkskrav)

Hvert løsningsforslag føres slik sensor vil se det:

- Mellomregning ledd for ledd; metodevalget navngis når det bærer argumentet
  («logaritmisk derivasjon», «kjerneregelen for flere variabler»,
  «fortegnsanalyse av $f'$», «omhyllingsteoremet»).
- **Tilbakesubstitusjon** for indre variabler er eksplisitt i multivariabel
  kjerneregel — sluttsvaret uttrykkes i de opprinnelige variablene (feil #5).
- **Fortegnsintervaller begrunnes** med fortegnslinje/fortegnsanalyse, aldri
  bare oppgis (feil #10).
- **Definisjonsområdet sjekkes FØRST** når $\ln$ eller $\sqrt{\;}$ inngår, og
  konklusjonen om globale ekstrempunkter bygger på definisjonsområde + fortegn
  på $f'$ — ALDRI på innsatte tallverdier (feil #1).
- Sluttsvaret **forenkles åpenbart** og markeres.
- Verbal konklusjonssetning til slutt («Nivåkurven er altså konveks, fordi
  $y''>0$ for alle $x>0$ i definisjonsområdet»).

### De tre strenge fallgruvene (hver med egen `warning`-blokk)

Disse tre er karakterskillet i faget, og hver SKAL ha en eksplisitt
`warning`-blokk med det korrekte argumentet utskrevet:

1. **Kap. 4.3 — hjørne-/randløsning:** globale ekstrempunkter på randen
   argumenteres via definisjonsområdets endepunkt + fortegnet på $f'$. Å sette
   inn ulike $x$-verdier «beviser» ingenting og gir bare delvis uttelling.
2. **Kap. 4.2 — $x^4$-fellen:** når $f''=0$ i det stasjonære punktet er
   andrederiverttesten inkonklusiv. Minimum av $x^4$ vises via **global
   konveksitet** ($f''(x)=12x^2\ge0$ overalt) eller førstederiverttesten —
   innsetting i $f''(0)$ gir **null uttelling**.
3. **Kap. 8.4 — klassifisering under bibetingelse:** sammenlign
   **funksjonsverdier** i kandidatpunktene. Andreordensbetingelse under
   bibetingelse er ikke pensum og skal ALDRI brukes som løsningsvei.

Kap. 0.1 og kap. 11.1 refererer alle tre; kap. 4.5 og 8.5 driller dem.

### Utledes vs. brukes (skillet er eksamensrelevant)

**Skal utledes aktivt** (vis steg for steg med «Intuisjon:»-linje etter HVERT
steg):

- nivåkurvens helning $y'=-F'_x/F'_y$ fra $dF=F'_x\,dx+F'_y\,dy=0$ (kap. 5.1)
- kjerneregelen for elastisiteter $\mathrm{El}_x f=\mathrm{El}_u g\cdot
  \mathrm{El}_x u$ (kap. 2.2)
- Eulers relasjon og homogenitet av deriverte (kap. 7.2)

**Skal bare brukes** (presenteres uten utledning; sensor forventer direkte
bruk): omhyllingsteoremet (kap. 8.3 — å reutlede det er en feil, ikke en dyd),
substitusjonselastisiteten $\sigma=1/(\gamma-1)$ (kap. 9.2, utledningen bør
kjennes men brukes ikke), Youngs teorem $f''_{xy}=f''_{yx}$ (kap. 1.2),
ABC-formelen.

### Figurkrav (DNA-regnefag — figur-i-ord er KOMPLEMENT, aldri erstatning)

ECON1100 har grafiske delpunkter: FD-oppgaven ber om **skisse** (H2021 O3 gir
egenskapene og ber om grafen; H2020 O4 gir grafen til $f$ eller $f'$ og ber om
avlesning), og nivåkurve-/Lagrange-oppgavene lever av tangeringsbildet.

1. **Figur-i-ord er obligatorisk i HVERT figursvar:** akse-konvensjon, kurvens
   form, nullpunkter/ekstrempunkter/vendepunkter markert, tangenten tegnet inn,
   asymptotisk oppførsel. Dette er dessuten selve ferdigheten som testes — på
   en hjelpemiddelfri eksamen må kandidaten kunne beskrive og tegne selv.
2. **Ber oppgaven om figur, SKAL løsningsforslaget vise figuren** (skjerpet 15.
   juli 2026, produkteier). Sier oppgave-/deloppgaveteksten «skisser», «tegn
   grafen», «vis i figur», «marker i diagrammet», er et løsningsforslag som
   bare skriver «*Figur i ord:* …» UFULLSTENDIG — den faktiske SVG-en skal inn
   rett etter delsvaret den hører til. Gjelder også prøver og øvingseksamener
   skrevet som tekstblokker inne i `collapsible`-er (nøstede `image`-blokker
   rendres, men MÅ ha `id` og `src` mot en opplastet fil).
3. **Bestilling:** figurer bestilles i `FIGUR-BESTILLINGER.md` og lages i
   figurfasen. Filer: `public/images/textbook/econ1100/<navn>.svg`; akser i
   `#6b7280`, norsk tekst, transparent bakgrunn (lesbar i lys og mørk modus),
   viewBox ca. 480×360, merkede akser og punkter med stiplede hjelpelinjer.
   ETTER at nye SVG-er er skrevet: `npx tsx scripts/upload-media-storage.ts`
   FØR deploy — ellers 404 i produksjon.
4. **`caption` skreddersys per plassering** (knytt figuren til kapitlets eget
   eksempel og termbruk); `alt` beskriver figuren bokstavelig for skjermleser.
   En figur viser bare det kapitlet har lært bort — del figuren ved behov.
5. **Ingen «grafisk drill» uten figur.** Loves en figur, skal den finnes.
   Kapitlet skal likevel være lesbart FØR SVG-en finnes: figur-i-ord står på
   egne ben, og `image`-blokken wires inn der teksten står.

### Enhets- og konvensjonsdeklarasjon (DNA-regnefag)

ECON1100 er notasjonstungt snarere enn enhetstungt, men følgende konvensjoner
deklareres ÉN gang (kap. 0.1 eller ved første bruk) og varsles med
`warning`-blokk hvert sted de kan forveksles:

- **Elastisitet er enhetsløs** og leses som «prosent per prosent» — den er ikke
  en endring i kroner. Fortegnet er informasjon: $\mathrm{El}_{p_1}x=-1$ betyr
  at etterspørselen faller like mange prosent som prisen stiger.
- **$\lambda$-fortegnet i Lagrange-funksjonen er valgfritt**
  ($L=F-\lambda(g-m)$ eller $L=F+\lambda(m-g)$) så lenge bibetingelsen er med;
  boka bruker gjennomgående $L=F-\lambda(g-m)$, og et `warning` sier at andre
  bøker kan ha motsatt fortegn og at tolkningen av $\lambda$ som skyggepris
  følger valget.
- **Differensial $df$ vs. faktisk tilvekst $\Delta f$** skilles eksplisitt
  (kap. 3.1); approksimasjonsfeilen er $\Delta f - df$, og fortegnet knyttes
  til krumningen.
- **Homogenitetsgrad $k$ vs. doblingsfaktor $2^k$** — aldri $2k$ (feil i
  kap. 7.1).
- **Priser og inntekt** i Lagrange-oppgaver: $p_1,p_2$ og $m$ i samme
  pengeenhet; oppgaveteksten sier hvilken. Faktorpriser i produsentteori: $r$
  (kapital) og $w$ (arbeid), aldri byttet om.
- Samme størrelse kalibreres ikke ulikt i to kapitler uten at begge steder
  flagger det.

### Matematisk sannhetskontroll (UFRAVIKELIG — DNA-regnefag bølge 4)

**Alle** fortegns-, entydighets- og «alltid større/mindre enn»-påstander
PARAMETERSJEKKES NUMERISK med `python3` i modellens FULLE parameterrom FØR de
skrives. En «Vis at …»-oppgave der påstanden ikke holder ubetinget KAN IKKE
LØSES — det er verre enn en manglende oppgave. Er påstanden bare betinget sann,
skrives betingelsen eksplisitt ut («gjelder for $\alpha+\beta<1$»).

Denne boka har uvanlig mange slike påstander, fordi sant/usant-oppgaven ER
fagets kjerne. Sjekk minst disse familiene numerisk før de skrives:

- **Fortegnet på $y'$ og $y''$ på en nivåkurve** — over hele det aktuelle
  definisjonsområdet, ikke bare i ett punkt. Konveksitetspåstander om
  indifferenskurver/isokvanter skal holde i hele området du påstår dem for.
- **Hesse-klassifiseringen** i hvert kandidatpunkt: regn $D$ og $f''_{xx}$
  numerisk i punktet, og sjekk at «lokalt» ikke er skrevet som «globalt» uten
  at betingelsen holder overalt.
- **Approksimasjonsfeilens fortegn** ($\Delta f - df$): sjekk med tall for både
  konveks og konkav funksjon, og både positiv og negativ $\Delta x$.
- **Elastisitetsregnereglene** på konkrete funksjoner (produkt og kvotient),
  og standardresultatene $\mathrm{El}_{p_1}x=-1$, $\mathrm{El}_m x=1$,
  $\mathrm{El}_K Q=\alpha$ — verifiser at de gjelder for den
  nyttefunksjonen/produktfunksjonen du faktisk bruker.
- **Homogenitetsgrad**: sett inn $tx,ty$ symbolsk OG sjekk numerisk for minst
  to $t$-verdier at $f(tx,ty)/f(x,y)=t^k$.
- **Lagrange-løsningene**: sett $x^*,y^*$ tilbake i bibetingelsen og i FOB og
  bekreft numerisk; sjekk at ingen rot faller utenfor definisjonsområdet
  (feil #11).
- **Omhyllingsteoremet**: verifiser $dV/dm=\lambda$ numerisk ved å regne
  $V(m)$ for to nære $m$-verdier og sammenligne differansekvoten med $\lambda$.
- **Substitusjonselastisiteten** $\sigma=1/(\gamma-1)$ og komparativ statikk
  $dN^*/dw$: sjekk fortegnet numerisk for flere parameterverdier før det
  påstås.
- **Konvergens av geometriske rekker**: regn delsummene numerisk; påstander om
  konvergens krever $\lvert r\rvert<1$ eksplisitt.

Alle talleksempler i fasiter etterregnes. Nyskrevne oppgaver skal ha **pene
svar** — kalibrer koeffisientene til det stemmer, ikke omvendt.

### Sjangerkoder (fra skjelettets §2 — introduseres i kap. 0.1)

`P1` partiellderivasjon (Oppg. 1) · `SU` sant/usant med begrunnelse (Oppg. 2) ·
`LG` Lagrange/betinget optimering · `FD` endimensjonal funksjonsdrøfting ·
`NK` nivåkurve/implisitt derivasjon · `HD` fri tovariabel-optimering + Hesse ·
`PR` produsentteori · `DA` differensial/lineær approksimasjon · `EL`
elastisitet · `HG` homogenitet/skalautbytte/Euler · `OM` omhyllingsteoremet ·
`HR` hjørne-/randløsninger · `IN` inverse funksjoner · `IT` elementær
integrasjon · `SR` serier/geometriske summer.

Prioritetsklasser: **høyeste prioritet** (nivå 1) / **kunne** (nivå 2) /
**kjenne** (nivå 3). Skriv ALDRI «Prioritet: perfekt».

### Feilkatalogen #1–#12 (glosses ved første bruk PER KAPITTEL)

Fra EKSAMENSANALYSE §5 — bruk disse kodene i «Typiske feil»-blokkene, og skriv
alltid glossen ut første gang i hvert kapittel:

| # | Feil | Forebygges i |
|---|---|---|
| #1 | «Bevise» globalt ekstremum ved å sette inn tallverdier i stedet for et randargument | 4.3 |
| #2 | Konkludere om ekstrempunkt fra $f''=0$ i punktet (null uttelling for $x^4$) | 4.2 |
| #3 | Glemme at $y=y(x)$ når nivåkurvens andrederiverte regnes ut | 5.2 |
| #4 | Utelate ett ledd i differensialet eller den lineære approksimasjonen | 3.1, 3.2 |
| #5 | Ikke substituere tilbake for indre variabler i multivariabel kjerneregel | 1.3 |
| #6 | Ikke sjekke definisjonsområdet før man leter etter ekstrempunkter | 4.3 |
| #7 | Kalle $f''=0$ et vendepunkt uten at $f''$ skifter fortegn | 4.2 |
| #8 | Blande stasjonærpunkt og ekstrempunkt | 4.2 |
| #9 | Ubegrunnet ja/nei i sant/usant — gir 0 | 11.1 |
| #10 | Ikke begrunne fortegnsintervaller i drøfting | 4.1 |
| #11 | Ta med rot utenfor definisjonsområdet i Lagrange-løsningen | 8.2 |
| #12 | Fortegnsfeil i partiellderiverte av kvotienter/CES-uttrykk | 1.1, 9.2 |

Kap. 0.1 presenterer registeret samlet; hvert kapittel refererer bare til de
kodene det faktisk forebygger.

---

## Kryssbok-lenker (verifisert 25. juli 2026 — alle filene finnes i `src/lib/data/chapters/`)

Bruk NØYAKTIG disse titlene og stiene i Forkunnskaper-blokkene:

| Kapittel | Lenke |
|---|---|
| 1.1 | `[Derivasjonsregler](/bok/r1/r1-4-1)`, `[Produktregelen og kvotientregelen](/bok/r1/r1-4-4)`, `[Kjerneregelen](/bok/r1/r1-4-3)`, `[Derivasjon av eksponential- og logaritmefunksjoner](/bok/r1/r1-4-2)` |
| 1.3 | `[Sammensatte funksjoner](/bok/r1/r1-2-3)`, `[Kjerneregelen](/bok/r1/r1-4-3)` |
| 1.4 | `[Potenser og logaritmer](/bok/r1/r1-1-2)`, `[Eksponential- og logaritmeligninger](/bok/r1/r1-1-3)` |
| 4.1 | `[Funksjonsdrøfting](/bok/r1/r1-4-6)`, `[Fullstendig funksjonsdrøfting](/bok/s2/s2-3-1)` |
| 4.2 | `[Andrederiverte og vendepunkter](/bok/s2/s2-3-2)`, `[Optimering](/bok/s2/s2-3-3)` |
| 4.3 | `[Globale ekstremalpunkter](/bok/r1/r1-4-8)` |
| 8.1 | `[Optimering](/bok/s2/s2-3-3)`, `[Profittoptimering](/bok/s2/s2-8-2)` |
| 10.1 | `[Omvendte funksjoner](/bok/r1/r1-2-2)`, `[Derivasjon av omvendte funksjoner](/bok/r1/r1-4-5)` |
| 10.2 | `[Ubestemt integral](/bok/r2/r2-2-2)`, `[Bestemt integral som grenseverdi](/bok/r2/r2-2-4)`, `[Areal mellom kurver](/bok/r2/r2-2-7)` |
| 10.3 | `[Geometriske følger](/bok/r2/r2-1-3)`, `[Rekker og summasjon](/bok/r2/r2-1-4)`, `[Uendelige rekker og konvergens](/bok/r2/r2-1-5)` |

**Rettelse mot skjelettet (verifisert):** skjelettets kap. 8.1 oppgir
`[Optimering med bibetingelser](/bok/s2/s2-8-5)`. Fila `s2-8-5.json` finnes,
men heter **«Vekstmodeller i økonomi»** — det finnes ingen S2-/R2-bok om
optimering under bibetingelse i systemet. Bruk derfor lenkene i tabellen over
for kap. 8.1, og la Lagrange-metoden være genuint ny i boka (den er det).

Alle kryssbok-lenker peker på kapitler som ER bygget — sjekk med
`ls src/lib/data/chapters/<id>.json` før du skriver en lenke som ikke står i
tabellen. `sjekk-bok.py` avviser døde lenker.

---

## Quiz-kvoten

`src/lib/data/quiz-staging/econ1100-<del>-<nr>.quiz.json`:

```json
[{ "question": "…", "options": ["riktig", "distraktor", "distraktor", "distraktor"], "explanation": "…" }]
```

Nøyaktig **4 alternativer**, `options[0]` **ALLTID** riktig (runtime stokker
rekkefølgen). Ingen duplikate alternativer. `explanation` (2–4 setninger) sier
hvorfor fasiten er riktig OG hvilken felle hver nære distraktor tester.

**Kalibrering:** distraktorene er de faktiske fellene fra feilkatalogen #1–#12
— manglende ledd i differensialet, glemt tilbakesubstitusjon, fortegnsfeil i
$-F'_x/F'_y$, $2k$ i stedet for $2^k$, $g'=f'$ i stedet for $1/f'$, uendelig
sum brukt når $\lvert r\rvert\ge1$, $D$ regnet med feil fortegn på $(f''_{xy})^2$
— aldri tullesvar. Mange spørsmål bør ha formen «hvilken begrunnelse holder?»,
ikke bare «hva er svaret?» — det speiler sant/usant-oppgaven.

**INGEN LENGDE-TELL (produkteier 15. juli 2026):** fasiten skal IKKE være det
lengste eller mest detaljerte alternativet. Alle fire alternativer skal ha jevn
lengde og presisjonsgrad — en student som «velger det lengste» skal treffe
~25 %, ikke 77 %. Skriv distraktorene like fyldige og plausible som fasiten;
trim heller fasiten. Gjelder også når alternativene er formler eller uttrykk:
fire uttrykk av omtrent samme kompleksitet. Verifiser med
`node scripts/hoyskolebok/quiz-lengdesjekk.mjs` (etter wiring) — måltall:
`options[0]` er unikt lengst i under 30 % av spørsmålene.

### Kvotetabell (AUTORITATIV — bindende total, aldri overstyr)

Verifisert mot skjelettets kvotesammendrag (§ «Kvotesammendrag») 25. juli 2026:
alle deltotaler og totalene summerer.

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1 | 12 | 12 | 0 (metadel) |
| 1 | 1.1–1.6 | 103 | 90 | 4 |
| 2 | 2.1–2.2 | 32 | 30 | 4 |
| 3 | 3.1–3.2 | 32 | 32 | 4 |
| 4 | 4.1–4.5 | 78 | 68 | 4 |
| 5 | 5.1–5.2 | 33 | 29 | 4 |
| 6 | 6.1–6.2 | 30 | 24 | 4 |
| 7 | 7.1–7.2 | 26 | 22 | 4 |
| 8 | 8.1–8.5 | 80 | 68 | 4 |
| 9 | 9.1–9.3 | 44 | 38 | 4 |
| 10 | 10.1–10.3 | 36 | 36 | 4 |
| 11 | 11.1–11.4 | 35 | 55 | 0 (3 øvingseksamener) |
| **Sum** | **37 kap.** | **541 ✓ (≥500)** | **504 ✓ (≥500)** | **40 + 3 ØE** |

Per kapittel (quiz · flashcards) — **minimum, aldri under; overskyting er lov**:

| Kap. | Q · F | Kap. | Q · F | Kap. | Q · F |
|---|---|---|---|---|---|
| 0.1 | 12 · 12 | 4.4 | 14 · 12 | 8.4 | 15 · 12 |
| 1.1 | 18 · 18 | 4.5 | 12 · 8 | 8.5 | 14 · 8 |
| 1.2 | 22 · 22 | 5.1 | 18 · 17 | 9.1 | 16 · 12 |
| 1.3 | 18 · 16 | 5.2 | 15 · 12 | 9.2 | 16 · 16 |
| 1.4 | 18 · 14 | 6.1 | 16 · 14 | 9.3 | 12 · 10 |
| 1.5 | 15 · 12 | 6.2 | 14 · 10 | 10.1 | 12 · 12 |
| 1.6 | 12 · 8 | 7.1 | 14 · 12 | 10.2 | 12 · 12 |
| 2.1 | 18 · 18 | 7.2 | 12 · 10 | 10.3 | 12 · 12 |
| 2.2 | 14 · 12 | 8.1 | 18 · 18 | 11.1 | 20 · 55 |
| 3.1 | 16 · 16 | 8.2 | 18 · 16 | 11.2 | 5 · 0 |
| 3.2 | 16 · 16 | 8.3 | 15 · 14 | 11.3 | 5 · 0 |
| 4.1 | 18 · 18 | | | 11.4 | 5 · 0 |
| 4.2 | 18 · 18 | | | | |
| 4.3 | 16 · 12 | | | | |

**Bindende total: quiz 541 · flashcards 504.** Flashcards telles som toppnivå
`definition`-blokker med `title`. Prøvekapitler har ingen kvote.

Fordelingen speiler frekvens: de fire delene med høyeste prioritet (Del 1
partiellderivasjon, Del 4 funksjonsdrøfting, Del 8 Lagrange, samt Del 3 og 5)
står for 326 av 541 quiz. Kap. 11.1 har 55 flashcards — den store
repetisjonsbanken med én kort per påstandstype-variant, gjenkjenningsmønster og
felle. Øvingseksamenene (11.2–11.4) har 0 flashcards.

---

## Forbudt-termer (grep-sjekkes — skal gi 0 treff)

Regex til sluttporten (`sjekk-bok.py` kjører den case-insensitivt og **unntar
kap. 0.1**, som skal beskrive fraværsbildet):

```
Prioritet: perfekt|en A-besvarelse ville|ville ha drøftet|rand-Hessian|randhessian|bordered Hessian|matrise|lineær algebra|differensiallikning|differensialligning|Taylor|rekkeutvikling|komplekse tall|varepsilon
```

Kommandolinje:

```bash
python3 scripts/hoyskolebok/sjekk-bok.py econ1100 "Prioritet: perfekt|en A-besvarelse ville|ville ha drøftet|rand-Hessian|randhessian|bordered Hessian|matrise|lineær algebra|differensiallikning|differensialligning|Taylor|rekkeutvikling|komplekse tall|varepsilon"
```

Begrunnelse per term: de fem fraværstemaene (matrise/lineær algebra/
differensiallikning/Taylor/komplekse tall) har 0/16 forekomster og skal ikke
inn i noe kapittel unntatt fraværsbildet i 0.1; `rand-Hessian`/`bordered
Hessian` er ikke pensum; `varepsilon` fordi elastisitet ALLTID skrives
$\mathrm{El}_x f$; de tre siste er plattformens standardforbud.
Skriv «Hesse-**determinanten** $D$», aldri «Hesse-matrisen».

### Kontekstbegrensede termer (manuell/scopet grep — ikke i hard-regexen)

Disse SKAL forekomme, men bare der de hører hjemme, og alltid som omtale av noe
studenten *ikke* skal bruke:

| Term | Tillatt kun i |
|---|---|
| `andreordensbetingelse under bibetingelse` | 0.1, 8.4, 8.5 (alltid som «ikke pensum») |
| `delvis integrasjon`, `integrasjon ved substitusjon` | 0.1, 10.2 (alltid som «ikke pensum») |

Scopet kontroll:

```bash
grep -l "andreordensbetingelse under bibetingelse" src/lib/data/chapters/econ1100-*.json
grep -l "delvis integrasjon" src/lib/data/chapters/econ1100-*.json
```

### Påkrevd notasjon (skal FINNES)

$f'_x$ / $\partial$ · $\mathrm{El}_x f$ · $L$ · $\lambda$ · $x^*$ · «FOB» ·
«MRS = prisforhold» · $D=f''_{xx}f''_{yy}-(f''_{xy})^2$ ·
$y'=-F'_x/F'_y$ · $\sigma=1/(\gamma-1)$.

---

## Opphavsrett (ufravikelig)

ALLE oppgaver, case og tall er **NYSKREVNE** (egne funksjoner, egne
koeffisienter, egen innramming: klima, energimiks, konsum, produksjon,
arbeidskraft) — eksamenssjangrene er malen, ALDRI originaloppgavene.
Skjelettets mønstereksempler er selv omskrivninger og skal varieres videre
(nye tall, ny innramming), aldri kopieres ordrett inn. Kalibreringsverdiene fra
reelle fasiter brukes KUN til å velge vanskelighetsgrad, aldri som oppgavetall.
Sensorformuleringer parafraseres, aldri siteres. Standardteoremer og
matematiske uttrykk er faglig allemannseie.

Referanser du er usikker på merkes `(verifiser)` og løses i verifiseringsfasen
(`sjekk-bok.py` flagger gjenstående markeringer).

---

## Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json; json.load(open('…'))"` på HVER fil; ingen trailing
   commas, ingen uescapede `"` eller `\` (LaTeX-backslash = `\\`).
2. **Kvotetelling** mot kvotetabellen over (toppnivå `definition`-blokker med
   `title` + antall quiz-spørsmål) — minimum, aldri under.
3. **Forbudt-termer-grep = 0** (regexen over) + de to kontekstbegrensede
   termene bare i tillatte kapitler.
4. **Kryssbok-lenker** peker på eksisterende filer (tabellen over).
5. **Læringsløkke:** `content[]` veksler teori → eksempel → oppgave i løkker
   med `exercise`-blokker INLINE. Unntak: prøve-/øvingseksamenkapitler.
6. **Forkunnskapsdekning:** hver `exercise` hviler kun på stoff introdusert
   tidligere i kapitlet eller i en referert forkunnskap.
7. **Nybegynner-inngang:** alle sjangerkoder (P1–SR), feilkoder (#1–#12) og
   karakterbokstaver forklart ved første bruk PER KAPITTEL; ingen kald kode i
   `competenceGoals` eller første tekstboks; Del 0 har «Slik leser du denne
   boka»-boksen (type `text`/`tip`, ALDRI `definition`).
8. **Symbol- og formelliste** SIST i hvert kapittel, per delkapittel, med
   åpningsnotisen.
9. **Begrunnelse er alt:** ingen fasit på en «avgjør/begrunn»-oppgave består
   bare av en konklusjon — utregningen/argumentet er skrevet ut.
10. **De tre fallgruvene** har hver sin `warning`-blokk med det korrekte
    argumentet (4.2, 4.3, 8.4).
11. **Matematisk sannhetskontroll:** alle fortegns-/entydighetspåstander
    parametersjekket numerisk med `python3` i fullt parameterrom; alle
    talleksempler etterregnet; Lagrange-løsninger satt tilbake i FOB og
    bibetingelse.
12. **Figurløfter innfridd:** enhver oppgave som ber om skisse/figur har figur
    (SVG bestilt i `FIGUR-BESTILLINGER.md` + figur-i-ord) i løsningen.
13. **Prøve-flervalg:** fasitmønsteret varierer (aldri «alle a», aldri «alle
    usant»); prøve-tipen sier hvor flervalget bor; selvdiagnose (☐) etter hver
    fasit.
14. grep «Prioritet: perfekt» = 0; ingen tom `collapsible`; kap-referanser i
    fasiter/forkunnskaper er markdown-lenker; Del 0-pakken komplett.
15. **hints** utfylt på alle `exercise` (unntatt den merkede kalde banken),
    første hint røper aldri konklusjonen; **frekvenstall** = telte belegg med
    riktig nevner (16 / 9 / 7); meta-fasit-grep = 0.
16. **Øktmerking:** kapitler > 45 min har løkke-tidsanslag eller pausepunkter;
    prøvekapitler deklarerer «4 prøver à ~X min» + deling over flere kvelder.
17. **Feilkode-gloss** ved første bruk per kapittel.
18. **Quiz-lengde:** ingen systematisk lengde-tell (`quiz-lengdesjekk.mjs`
    etter wiring).
19. **Juridiske deklarasjoner:** innholdet fremstiller seg ALDRI som offisielt
    eller UiO-tilknyttet og lover aldri eksamensutfall; kildepåstander følger
    «Sannferdig kildenote».
20. **Rendering:** `python3 scripts/hoyskolebok/sjekk-latex.py econ1100` og
    `sjekk-figurer.py econ1100` grønne før ferdigmelding.
