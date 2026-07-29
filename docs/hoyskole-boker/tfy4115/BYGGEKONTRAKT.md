# Byggekontrakt: TFY4115 Fysikk (NTNU) — teknisk kontrakt for kapittelforfattere

Denne kontrakten gjelder ALLE forfatter-agenter som bygger kapitler til
`tfy4115`. Den definerer eksakt filformat, obligatorisk struktur, notasjon,
kildepåstander og kvalitetsporter. **Faglig innhold styres av `SKJELETT.md`**
(per-kapittel-DNA) — les ditt kapittels avsnitt der ordrett, pluss
`EKSAMENSANALYSE.md` når du trenger mer kontekst, og `../DNA-regnefag.md` for
arketypen.

Instansiert fra `../BYGGEKONTRAKT-MAL.md` 30. juli 2026. Mønstre for dybde og
form: `../fys1100/BYGGEKONTRAKT.md` og `../fys1001/BYGGEKONTRAKT.md` (begge
fysikk med figurkrav).

TFY4115 er et **regnefag der eksamen i sin nyeste dokumenterte form er 100 %
flervalg**, delt i to like store halvdeler: **mekanikk** (spørsmål 1–20) og
**termisk fysikk** (spørsmål 21–40). Det er den avgjørende forskjellen fra
søsteremnet TFY4125, som har elektromagnetisme i andre halvdel.
Elektromagnetisme har **null treff i hele TFY4115-arkivet** og skal ikke bygges.

Kontrakten har seks fagspesifikke bindende deler:

| Del | Hva den styrer |
|---|---|
| **§N Notasjonskontrakten** | de fem symbolkollisjonene mellom mekanikk og termo, vektor vs. skalar, kelvin, enheter og siffer |
| **§H Hjelpemiddelkontrakten** | kode C: hva som faktisk er tillatt, og hva det betyr for undervisningen — toveismerking av hver formel |
| **§M Flervalgskontrakten** | 1 poeng riktig / 0 feil, tette alternativer, FORM-TELL og LENGDE-TELL, A–F i statiske sett vs. fire i quiz |
| **§S Rettekontrakten** | hva løsningsforslagene faktisk krever, to arbeidsmodi (MC-modus + symbolsk), karakter-realisme |
| **§G Figurkontrakten** | ekte SVG, opplasting til Storage, og fysikk-kontroll av HVER figur |
| **§R Regnekontrakten** | etterregn alt med `python3`, inkludert Carnot-grensen og entropifortegnet |

---

## §0 PLATTFORMSTØTTE — hva du kan stole på

1. **Markdown + LaTeX rendres** av `LatexRenderer`: `$…$` inline, `$$…$$`
   display, tabeller, fete/kursiverte former, lister, markdown-lenker.
2. **Kodeblokker rendres.** Trippel-backtick med språktagg settes som
   `<pre><code>` med bevart innrykk, og inline-kode i `` `backticks` `` er
   beskyttet mot både matte- og markdown-transformene (fikset på main 25. juli
   2026). Denne boka har **ikke** et kodespor (ingen programmering forutsettes,
   se §H4), men iterasjonstabeller i kap. 11.1 kan settes i en
   ```` ```text ````-blokk når kolonnene skal stå rett.
3. **`$`-fella (ufravikelig).** Et dollartegn som IKKE er matte MÅ escapes som
   `\$` i JSON-strengen. To uescapede `$` på samme linje er partall, og
   rendreren parrer dem og setter alt imellom som formel. Risikoen i denne boka
   er lav (få valutabeløp), men energipriser i varmepumpe-caser i Del 8 og
   fjernvarme-caser i Del 10 er den reelle faren.
4. **Bilder:** `alt` rendres rått som HTML-attributt — **ingen LaTeX, ingen
   markdown, ingen backticks der**. `caption` rendres i inline-modus: `$…$`
   virker, men ikke markdown og ikke backticks.
5. **Unicode-tegn rendres fint i vanlig prosa** (`→`, `≈`, `≤`, `≥`, `·`, `Δ`,
   `θ`, `ω`), men **fysikkstørrelser skal alltid i LaTeX** (§N). Bruk unicode kun
   i overskrifter, tabellceller og korte prosanavn der en full formel er overkill.
6. **Unicode-regelens virkeområde:** regelen om at matematikk i PROSA skal være
   LaTeX gjelder `content`-feltene. Den gjelder IKKE `title` og `description`,
   som rendres som ren tekst (i navigasjon, søk og bokforside). Skjelettets
   titler inneholder LaTeX (f.eks. «Krumning og normalkraft — $1/\rho=|y''|$ i
   topp- og bunnpunkt») — **de tas likevel ORDRETT som de står i skjelettet**.
   Se «Kapitteltitler» under.
7. **Flashcards genereres KUN fra toppnivå `definition`-blokker med `title`** —
   ikke fra definisjoner inne i en `collapsible`.
8. **Quiz stokkes ved kjøretid**, derfor er `options[0]` alltid fasit i
   staging-filene. Konsekvens: en `explanation` som sier «alternativ to» peker på
   et tilfeldig alternativ for leseren — beskriv alltid distraktoren ved INNHOLD
   («alternativet som glemmer rotasjonsleddet»), aldri ved posisjon. Porten
   `sjekk-alternativref.py` fanger dette.

---

## LÆRINGSLØKKE-KONTRAKT (ufravikelig byggekrav — produkteier 9. juli 2026)

Fra skjelettets topp, tatt inn her som bindende byggekrav:

- HVERT kapittels `content[]` struktureres som gjentatte små løkker
  **Teori → Eksempel → Oppgave**. `exercise`-blokker plasseres INLINE i
  `content[]` rett etter teorien/eksempelet de trener — ALDRI all teori øverst
  med oppgavene samlet nederst.
- I dette faget er løkka konkret: `definition`/`theorem` som innfører ÉN fysisk
  størrelse, ÉN lov eller ÉN prosesstype → `text`-utledning med
  «Intuisjon:»-linje etter hvert steg → **«Rask vei til tall»-avsnittet** (§M3)
  → `example` som gjennomfører oppskriften med tall, enheter og (der skjelettet
  lover figur) en faktisk SVG → `exercise` som krever nøyaktig den oppskriften.
  Deretter neste bit.
- **Ingen usett forkunnskap.** Ingen oppgave får kreve en formel, en lov, en
  prosessrelasjon eller en metode som ikke er innført tidligere i kapitlet
  (t.o.m. eksempelet rett foran) eller i et kapittel som står i
  Forkunnskaper-blokken. Konkrete feller i TFY4115:
  - be om rotasjonsenergi $\tfrac12 I\omega^2$ i et energiregnskap før kap. 4.1
    har innført $I$ — merk at kap. 2.2 bruker rulling og derfor SELV må innføre
    $I$ for kule/sylinder/skall i den formen kapitlet trenger;
  - bruke Steiners sats i kap. 5.1 (fysisk pendel) uten å referere kap. 4.1;
  - be om $\gamma$ i en adiabatoppgave før kap. 6.2 har koblet frihetsgrader til
    $C_V$, $C_P$ og $\gamma$;
  - bruke entropi i en kretsprosessoppgave i Del 8 før kap. 7.2 er referert;
  - bruke Plancks lov i kap. 11.1 uten å referere kap. 9.2;
  - bruke termisk motstand i serie i en strålingsoppgave uten at kap. 9.1 er
    referert.
- **Unntak:** prøvekapitlene (`tfy4115-<del>-prove`) og øvingseksamenene
  (kap. 12.2–12.4) følger sin egen arketype — komplett sett først, løsninger i
  collapsibles.
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer kun
  REKKEFØLGEN.

---

## Filplassering

Ett JSON-dokument per kapittel: `src/lib/data/chapters/<kapittel-id>.json`
(f.eks. `tfy4115-8-1.json`). Quiz til
`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`.

IKKE rør `_registry.json`, `_all.json`, `textbook-courses*.ts`, `quiz-data*.ts`,
`institusjoner.ts` eller `kildegrunnlag.ts` — wiring gjøres sentralt av
byggeleder med `scripts/hoyskolebok/wire-bok.py`. Boka registreres på
institusjon **NTNU** med navnet «TFY4115 Fysikk».

Boka består av **48 kapittelfiler**:

- **37 innholdskapitler**: 1 eksamenskart (0.1) + 32 tema-/drillkapitler
  (1.1–11.1) + 4 eksamenstreningskapitler (12.1–12.4).
- **11 prøvekapitler**: `tfy4115-1-prove` … `tfy4115-11-prove`. **Del 0 og
  Del 12 har INGEN prøvekapittel** — Del 0 er metakapitlet, og i Del 12 er
  12.2–12.4 selve vurderingskapitlene.

Pluss **37 quiz-staging-filer** (én per innholdskapittel, også for 12.2–12.4 som
har kvote 6 hver; prøvekapitler har ingen quiz).

**Generer JSON via python `json.dump`** (garantert gyldig escaping av `\` og `"`).
Skriv aldri JSON for hånd i denne boka — den er full av LaTeX. Se «Tekniske
feller» T1 for JSON-fella som rammer nettopp dette faget hardest.

---

## Kapittel-JSON (toppnivå)

```json
{
  "id": "tfy4115-8-1",
  "courseId": "tfy4115",
  "chapterNumber": "8.1",
  "title": "…(fra skjelettet, ORDRETT)…",
  "description": "…(setningen fra skjelettet, ORDRETT)…",
  "estimatedMinutes": 65,
  "competenceGoals": ["kunne finne trykk, volum og temperatur i hvert hjørne av en syklus", "…"],
  "content": [ "…blokker…" ],
  "exercises": []
}
```

`chapterNumber` = skjelettets `number` (`<del>.<nr>`; prøvekapitler `<del>.P`).
**ALDRI lineær nummerering** («18») — alltid del-basert («8.1»).

### Kapitteltitler (ufravikelig)

`id`, `title`, `description` og `estimatedMinutes` tas **ORDRETT fra
`SKJELETT.md` §3** — aldri fra en byggeprompt, aldri omskrevet, aldri forkortet.
Det gjelder også titler som inneholder LaTeX eller parenteser:

| Kap. | title (ordrett) |
|---|---|
| 0.1 | Eksamenskartet: slik testes TFY4115 |
| 1.1 | Kinematikk fra fartsfunksjon — derivér, integrér, tell runder |
| 1.2 | Krumning og normalkraft — $1/\rho=\|y''\|$ i topp- og bunnpunkt |
| 1.3 | Drill: kinematikk-kjeden (sjanger M10–M11, MC-tempo) |
| 2.1 | Newtons 2. lov på skråplan med friksjon |
| 2.2 | Arbeid, energibevaring og rullende legeme ($K=\tfrac{7}{10}mv^2$) |
| 2.3 | Drill: skråplan og energibevaring (sjanger M1, M3) |
| 3.1 | Bevegelsesmengde, impuls og støt |
| 3.2 | Gravitasjon, satellittbaner og rakettligning |
| 3.3 | Drill: støt, impuls og baner (sjanger M6, M12) |
| 4.1 | Massesenter, treghetsmoment og Steiners sats |
| 4.2 | Dreieimpuls, rulling, presesjon og fallende stang |
| 4.3 | Statikk og momentbalanse |
| 4.4 | Drill: treghetsmoment, dreieimpuls og statikk (sjanger M4, M5, M9) |
| 5.1 | Harmoniske svingninger, egenfrekvens, fysisk og konisk pendel |
| 5.2 | Dempede og drevne svingninger — $Q$-faktor og resonans |
| 5.3 | Drill: svingninger og pendler (sjanger M7, M8) |
| 6.1 | Ideell gasslov, molekyltall og kinetisk gassteori |
| 6.2 | Ekvipartisjon, frihetsgrader og varmekapasitet ($C_V$, $C_P$, $\gamma$) |
| 6.3 | Drill: gasslov, $v_\text{rms}$ og frihetsgrader (sjanger T1–T3) |
| 7.1 | Første hovedsetning og termodynamiske prosesser |
| 7.2 | Entropi og andre hovedsetning |
| 7.3 | Drill: prosesser, $\Delta U=Q-W$ og entropi (sjanger T4, T7, T8) |
| 8.1 | Kretsprosesser og virkningsgrad (Carnot, Otto, Stirling) |
| 8.2 | Varmepumpe og kjøleskap — effektfaktor |
| 8.3 | Drill: kretsprosessen (sjanger T5–T6) |
| 9.1 | Varmeledning i sjikt — Fouriers lov og termisk motstand |
| 9.2 | Varmestråling — Stefan–Boltzmann, platebalanse og Wien |
| 9.3 | Drill: varmeledning og stråling (sjanger T9–T10) |
| 10.1 | van der Waals, kritisk punkt og fasediagram |
| 10.2 | Clausius–Clapeyron, damptrykk og termisk utvidelse |
| 10.3 | Drill: van der Waals, fasediagram og Clausius–Clapeyron (sjanger T11–T13) |
| 11.1 | Fikspunktiterasjon og Euler-diskretisering |
| 12.1 | MC-strategi, rask vei til tall og avrundingsdisiplin |
| 12.2 | Øvingseksamen 1 — 40-spørsmålsmalen (standard) |
| 12.3 | Øvingseksamen 2 — 40-spørsmålsmalen (tyngre varianter) |
| 12.4 | Øvingseksamen 3 — 40-spørsmålsmalen (generalprøve) |

*(Merk: loddrette streker i tabellen over er escapet som `\|` fordi de står i en
markdown-tabell i DETTE dokumentet. I JSON-fila skal tittelen til kap. 1.2 ha
vanlige streker: `$1/\rho=|y''|$` — ordrett som i skjelettet.)*

Prøvekapitlene har tittelen «Prøver til del `<N>`: `<deltittel>`», der
deltittelen er `sectionNames`-tittelen fra skjelettets §2-tabell (f.eks.
«Prøver til del 8: Kretsprosesser, virkningsgrad og varmepumper»).

`competenceGoals`: 2–4 «kunne …»-formuleringer avledet av kapitlets
innholdskontrakt. **Ingen kald kode her** — ingen bar «sjanger T5», «felle #12»,
ingen karakterbokstav. Skriv «kunne regne virkningsgraden til en syklus og
sammenligne den med Carnot-grensen», ikke «kunne sjanger T5». Målene er
Skolesagas egne formuleringer, aldri kopi av NTNUs offisielle læringsutbytte.

`exercises` er ALLTID tom liste — oppgaver ligger som `exercise`-blokker inline
i `content`.

---

## Blokktyper (eksakte felt — strukturreferanse: `src/lib/data/chapters/econ1310-2-1.json`)

- `text`: `{ "id", "type": "text", "content": "markdown + LaTeX" }`
- `definition`: `{ "id", "type": "definition", "title": "Begrepet", "content": "…" }`
  — **title er OBLIGATORISK** (flashcard-kilden). Kalibreres som **begrep i ORD →
  symbol/formel → gyldighetsbetingelsen**. Aldri en formel som første linje
  (vegrere hopper over blokken, og dermed flashcard-stoffet). Riktig form:
  «Adiabatisk prosess: en prosess der systemet ikke utveksler varme med
  omgivelsene, $Q=0$. Da går all energi via arbeid: $\Delta U=-W$. Betingelsen
  er at prosessen skjer så raskt (eller så godt isolert) at varmestrømmen kan
  settes til null — og for en ideell gass gjelder i tillegg
  $pV^{\gamma}=\text{konstant}$.»
- `theorem`: `{ "id", "type": "theorem", "title": "…", "content": "…" }`
  — brukes for (a) **lovene** (Newtons 2. lov for translasjon og rotasjon,
  spinnsatsen, arbeid–energisetningen, Steiners sats, 1. og 2. hovedsetning,
  Fouriers lov, Stefan–Boltzmann), (b) **de utledbare standardresultatene**
  ($a=g(\sin\theta\pm\mu\cos\theta)$, $K=\tfrac{7}{10}mv^2$,
  $v=\sqrt{2g\Delta y/(1+c)}$, $V=\tfrac57 V_0$, $\gamma=(f+2)/f$,
  $\eta_\text{Carnot}=1-T_k/T_v$, $\varepsilon_V=\varepsilon_K+1$,
  $T_2=((T_1^4+T_3^4)/2)^{1/4}$), og (c) **metodene** (hjørnetabellen for en
  syklus, reversibel omvei for irreversibel prosess, termiske motstander i
  serie).
- `example`: `{ "id", "type": "example", "title": "Eksempel N: …", "problem": "…", "solution": "…" }`
  — `solution` viser BEGGE modi der kapitlet har begge (§S2): den symbolske
  utledningen og den korte «rask vei til tall»-kjeden som ender i et
  bokstavsvar.
- `tip` / `warning`: `{ "id", "type", "title", "content" }`
- `exercise`: `{ "id", "type": "exercise", "exercise": { "id", "number", "type": "classic", "difficulty": "lett"|"middels"|"vanskelig", "task", "solution", "hints": [] } }`
  — ALDRI `solutionVideo` / `allowsUpload` / `allowsCanvasDrawing` / `answer`.
  Ikke bruk `subTasks`-feltet (deloppgaver skrives inline, se Leserkrav).
- `image`: `{ "id", "type": "image", "src": "/images/textbook/tfy4115/<navn>.svg", "alt": "…", "caption": "…" }`
  — se §G. Figuren MÅ finnes på disk OG være lastet opp til Storage.
- `collapsible`: `{ "id", "type": "collapsible", "title", "buttonText": "Vis …", "content": [ "…blokker…" ] }`
  — symbol- og formelliste, prøver, repetisjon, MC-varianter. ALDRI tom:
  feltnavnet er `content` og skal ha blokker (en `text`-nøkkel eller tom array
  rendrer som tom boks).

Blokk-id-er: `<kapittel-id>-<løpenavn>`, f.eks. `tfy4115-8-1-def-3`,
`tfy4115-8-1-oppg-5`, `tfy4115-8-1-fig-2`. Unike innen kapitlet (porten sjekker).

---

## Obligatorisk kapittelstruktur

### Teorikapitler (1.1, 1.2, 2.1, 2.2, 3.1, 3.2, 4.1–4.3, 5.1, 5.2, 6.1, 6.2, 7.1, 7.2, 8.1, 8.2, 9.1, 9.2, 10.1, 10.2, 11.1)

Alltid, i denne rekkefølgen først i kapitlet:

1. `tip` **Eksamensvinkel** — frekvens, vekt og sjangre med tallene fra
   skjelettets Eksamensbelegg-felt for NETTOPP dette kapitlet (og ingen andre
   tall). Sjangerkoden skrives ut i klarspråk ved første bruk i kapitlet:
   «sjanger T5 — kretsprosessoppgaven, altså en gass som føres rundt en lukket
   sløyfe og der du skal finne arbeid, varme og virkningsgrad». Frekvensen
   skrives som gjenganger-score: «i praktisk talt alle sett (~100 %)» — se
   «Frekvenstall» under for hvordan tallene skal formuleres i dette faget.
   Tipen sier også **hvilken halvdel** temaet hører til (spørsmål 1–20 mekanikk
   eller 21–40 termisk fysikk).
2. `text` **Forkunnskaper — sist du var her** (overskriften skal stå ordrett slik,
   som `## Forkunnskaper — sist du var her` først i blokken). Blokken skal
   (i) lenke kapitlene i boka dette bygger på — markdown-lenker
   `[kap. X.Y](/tfy4115/tfy4115-X-Y)`, (ii) **VISE de 2–3 nøkkelformlene ferdig
   oppfrisket** (selve formelen med symbolforklaring, ikke bare navnet) — dette
   er ufravikelig i Del 4–5 (der Steiner hentes fra 4.1) og i hele termodelen
   Del 7–11 (der $C_V$, $C_P$ og $\gamma$ hentes fra 6.2), og (iii) lenke
   kryssbok der forkunnskapen ikke dekkes i boka (tabellen i «Kryssbok-lenker» —
   KUN filer som finnes). Har kapitlet ingen forkunnskaper (1.1, 6.1), sier
   blokken det og viser likevel begrepene leseren møter først.

Deretter DNA-løpet i læringsløkker: `text` hverdagsanker/motivasjon →
`definition`/`theorem` (flashcard-kilden — toppnivå med title!) →
`text` utledning med «Intuisjon:»-linje etter hvert steg → **eget, tydelig
merket «Rask vei til tall (MC-oppskrift)»-avsnitt** (§M3) → `example` med
gjennomregnet case → `exercise` inline som trener nøyaktig den biten → neste
bit. 2–4 eksempler per kapittel, det siste på eksamensnivå; 6–12 `exercise` i
kapitlet, stigende (lett → middels → vanskelig), de vanskeligste =
eksamenskloner av kapitlets sjangre.

**Minst én kvalitativ oppgave per teorikapittel** — de rene konsept- og
rangeringsspørsmålene er en reell del av settet («ranger $T$, $S$ og $\Delta U$ i
hjørnene», «hvilken prosess er umulig etter 2. hovedsetning», «hvilken graf hører
til hvilken prosess»). Modellsvar i 2–4 setninger.

`warning` **Typiske feil** (fra feilkatalogen, med feilkoden glosset ved første
bruk i kapitlet) plasseres der den er mest relevant — ofte rett etter metoden som
utløser feilen. Minst én per kapittel (porten krever en `warning`). **I tillegg
skal hvert teori- og drillkapittel ha en `warning` om avrundings-/faktor-/
fortegnsfellen som lander på nabo-alternativet i nettopp dette temaet** (§M4).
De to kan slås sammen i én `warning` når det er naturlig.

Til slutt i kapitlet, i denne rekkefølgen:

- begrepsbank-`definition`-blokker opp til flashcard-kvoten. Hver stor
  begrepsbank åpner med standard-notisen: «Begrepsbanken er flashcard- og
  repetisjonsstoff — den gjentar det du nettopp har lest. Hopp trygt over ved
  førstegangslesing; tidsanslaget for kapitlet gjelder kjernestoffet.»
- `collapsible` **Symbol- og formelliste** (§N5).
- `collapsible` **Repetisjonsoppgaver** — 4–6 korte oppgaver fra kapitlene dette
  bygger på.

### Drillkapitler (1.3, 2.3, 3.3, 4.4, 5.3, 6.3, 7.3, 8.3, 9.3, 10.3)

`tip` Eksamensvinkel → `text` Forkunnskaper — sist du var her →
`text`/`theorem` **Løsningsoppskrift** (nummerert algoritme, ordrett fra
skjelettets innholdskontrakt for kapitlet) → `example` **gjennomregnet MC-case
med margnotater** (hvor poengene faller: hvilken lov, hvilken ene regnelinje,
hvilke verdier hentes fra det utdelte arket, hvor mange siffer å beholde, og
hvilket nabo-alternativ du lander på hvis du avrunder for tidlig) →
**12–15 `exercise` på eksamensnivå** som roterer sjangerens varianter, alle med
`solution` + `hints`.

Drillkapitlene har lav flashcard-kvote (8 hver) — de er treningsbanker, ikke
begrepsbanker. Signalbokser som varsler hva en drilloppgave tester, står ETTER
oppgaven (som fasit-oppfølging eller collapsible hint), aldri foran.

Minst en tredjedel av drilloppgavene skal være i **A–F-format** (ferdige
alternativer, kun bokstavsvaret etterspurt) — resten i åpen form, slik at
studenten trener både metoden og bokstavsvaret. Alternativene følger §M.

### Prøvekapitler (`tfy4115-1-prove` … `tfy4115-11-prove`)

Id `tfy4115-<del>-prove`, `chapterNumber` `<del>.P`, tittel «Prøver til del
`<del>`: `<deltittel>`»:

- `tip`: dekning + tidsbruk. Deklarerer **«4 prøver à ~25–45 min (til sammen
  ~120 min)»** med den faktiske fordelingen (A/B/C ~25 min, D-prøven i
  MC-format ~45 min fordi den holder 8–10 spørsmål i eksamenstempo), pluss «kan
  trygt deles over flere kvelder — én prøve per økt», og sier **hvor flervalget
  bor** (D-prøven inline i teksten; de interaktive flervalgsspørsmålene ligger i
  quizen til delens kapitler).
- `text` **Forkunnskaper — sist du var her** (porten krever «Forkunnskaper» i
  alle kapitler utenom Del 0).
- Fire `collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med
  nyskrevne oppgaver og **full fasit**. Innholdet per prøve er fastlagt i
  skjelettets prøve-kvote-linje for delen og skal følges (f.eks. Del 8:
  8.A Carnot-syklus: hjørner + $\eta$ · 8.B Otto/Stirling-syklus ·
  8.C varmepumpe/kjøleskap effektfaktor · 8.D MC-format: koblet
  kretsprosess-klynge, tette alternativer).
- **Minst én prøve per del (D-prøven) er i MC-format** — tette alternativer
  A–F, kun bokstavsvaret. De øvrige tre viser symbolsk løsning + «rask vei til
  tall» side om side.
- **Statiske flervalg har STOKKEDE fasit-bokstaver** — aldri «alle a»; porten
  flagger mønsteret «1a · 2a · 3a». Se §M5 for hvordan fasitfordelingen måles.
- Etter hver prøvefasit: avkryssbar selvdiagnose-sjekkliste (☐), formulert
  fagkonkret: «☐ er alle temperaturer i kelvin? ☐ har hvert tallsvar enhet og
  riktig tierpotens? ☐ stemmer fortegnet på $Q$ og $W$ langs hvert trinn?
  ☐ ligger virkningsgraden under Carnot-grensen? ☐ beholdt du 3–4 siffer helt
  til slutt?».
- Kap-referanser i fasitene som markdown-lenker.
- Ingen begrepsbank og ingen quizkvote for prøvekapitler.

Prøvekapitler regnes som vurderingskapitler i `sjekk-bok.py` og er derfor
unntatt kravene om «Typiske feil»-warning og symbolliste.

### Eksamenstrening (Del 12)

- **12.1 MC-strategi** (`estimatedMinutes` 40) er et teori-/strategikapittel og
  følger teorikapittel-strukturen, men uten tung utledning: `tip` Eksamensvinkel
  → `text` Forkunnskaper → tidsbudsjett (~6 min per spørsmål på 40 spørsmål på
  4 timer, med margin) → avrundingsdisiplin → sjekk-før-svar-listen (enhet,
  tierpotens, fortegn, faktor, kelvin) → eliminasjonsstrategi ved dimensjon og
  størrelsesorden → **hele feilkatalogen samlet**, presentert som «hvilket galt
  alternativ ville du valgt hvis du gjorde denne feilen» → 8–10 korte
  MC-diagnostikkspørsmål blandet mekanikk og termofysikk, med forklaring på
  hvilken felle hvert galt alternativ representerer.
- **12.2–12.4 Øvingseksamener** (`estimatedMinutes` 240 hver): `tip` med format
  (~40 spørsmål A–F, 4 timer, 1 poeng riktig / 0 feil eller blankt, ingen
  delpoeng, hjelpemiddelkode C, ~6 min per spørsmål) og at settet trygt kan
  deles over flere kvelder → `text` Forkunnskaper → **spørsmål 1–20 mekanikk**
  og **spørsmål 21–40 termisk fysikk** som `text`-blokker med seks alternativer
  A–F hver → `collapsible` løsningsforslag **per spørsmål**, skrevet i
  løsningsforslagenes ånd: **den avgjørende loven + få regnelinjer +
  bokstavsvaret**, og med **felle-merking på hvert galt alternativ** («B er det
  du får hvis du glemmer rotasjonsleddet; D er det du får med $C_P$ i stedet for
  $C_V$»).
- Miksen per sett er fastlagt i skjelettets §3 for 12.2–12.4 og oppsummert i
  §4-tabellen: 12.2 standardmal, 12.3 tyngre varianter, 12.4 generalprøve.
  **Til sammen skal de tre settene dekke samtlige sjangre M1–M13 og T1–T14
  minst én gang**, alle med den faste todelingen, en kretsprosess-klynge på 3–4
  koblede spørsmål, minst ett strålingsspørsmål ($\sigma T^4$) og **et numerisk
  iterasjonsspørsmål til slutt**.
- Lange løsningsdeler har «— naturlig pausepunkt —»-markører.

**Kald bank:** boka skal ha ÉN merket kald bank (8–10 oppgaver med uvante
kombinasjoner på tvers av begge halvdeler, UTEN hint, fasit = momentliste) — den
legges i **kap. 12.1** som en egen `collapsible` «Kald bank — uten hint».

---

## §N NOTASJONSKONTRAKTEN (bindende — fra skjelettets «Kritisk notasjonsregel»)

Denne boka spenner over to fagfelt med **kolliderende symboler**. Det er fagets
største notasjonsrisiko, og den kan ikke løses én gang for hele boka — den må
løses i hvert delkapittel.

### §N1 De fem kollisjonene (ufravikelig)

| Symbol | Betyr i mekanikk (Del 1–5) | Betyr i termofysikk (Del 6–11) |
|---|---|---|
| $\gamma$ | **dempingskoeffisient**, $\gamma=b/2m$ | **adiabateksponent**, $\gamma=C_P/C_V$ |
| $p$ | **bevegelsesmengde** (vektor $\mathbf{p}=m\mathbf{v}$) | **trykk** (skalar) |
| $T$ | **periode/svingetid** | **absolutt temperatur** — alltid kelvin |
| $R$ | **radius** | **gasskonstanten** $R$ ELLER **termisk motstand** $R_\text{term}$ |
| $S$ | **taustrekk** (konisk pendel) | **entropi** |

Regler:

1. **Aldri to betydninger av samme symbol i samme delkapittel uten eksplisitt
   klargjøring.** Kan du ikke unngå det, skriv den ene med subskript
   ($R_\text{term}$, $T_p$ for periode) og si det i kapitlets første tekstblokk.
2. **Hvert delkapittels Symbol- og formelliste MÅ oppgi hvilken betydning som
   gjelder DER** (§N5). Ikke arv fra tidligere kapittel.
3. Kap. 11.1 ligger i termodelen men bruker $x$ som iterasjonsvariabel og $s$,
   $v$ fra mekanikken (Euler) — kapitlet skal si eksplisitt at begge
   symbolsettene opptrer og hva hvert betyr.
4. Porten: `python3 scripts/hoyskolebok/sjekk-bok.py` fanger ikke dette. Gjør
   sjekken selv, per kapittel, før ferdigmelding.

### §N2 Vektor vs. skalar

**Vektorstørrelser skrives med fet vektormarkering** når størrelsen opptrer som
vektor:

$$\mathbf{F},\ \mathbf{v},\ \mathbf{a},\ \mathbf{r},\ \mathbf{p},\ \mathbf{J},\ \boldsymbol{\tau},\ \mathbf{L},\ \boldsymbol{\omega},\ \boldsymbol{\alpha},\ \mathbf{N},\ \mathbf{f}$$

**Skalarer kursivt uten markering:** $m$, $t$, $W$, $K$, $U$, $I$
(treghetsmoment), $Q$, $S$, $T$, $p$ (trykk), $V$, $n$, $\eta$, $\varepsilon$,
$\kappa$, $\sigma$, $\mu$, $\theta$, $\rho$.

- **Fortegn og retning på dreieimpuls** ($\mathbf{L}=\mathbf{L}_\text{spinn}+
  \mathbf{L}_\text{bane}$) og på **$Q$ og $W$ i hovedsetningene** er yndede
  flervalgspoeng og skal behandles eksplisitt hver gang. Oppgi retningen i ord
  når du oppgir en vektorstørrelse: «$0{,}42\,\text{kg}\cdot\text{m}^2/\text{s}$
  ut av papirplanet».
- **Fortegnskonvensjonen for arbeid fastsettes én gang og holdes:** $W$ er
  arbeidet gassen gjør PÅ omgivelsene, slik at $\Delta U = Q - W$. Skriv
  konvensjonen ut i kap. 7.1 og gjenta den i symbollisten i hvert kapittel som
  bruker den.
- **Skalarer får ALDRI vektormarkering.** Treghetsmoment, entropi og trykk med
  vektorpil er en faglig feil.

### §N3 Kelvin-disiplinen (fagets dyreste enkeltfeil)

**ALLE** termofysikk-utregninger bruker **kelvin**: gasslov, $TV^{\gamma-1}$,
$T^\gamma/p^{\gamma-1}$, entropi ($\ln(T_2/T_1)$), Clausius–Clapeyron,
virkningsgrad/effektfaktor og alle strålingsuttrykk ($T^4$).

- Celsius forekommer KUN der en temperaturDIFFERANSE inngår (varmeledning
  $\Delta T$, termisk utvidelse $\Delta L=\alpha L\Delta T$) — og da med
  eksplisitt kommentar om hvorfor det er trygt der.
- Hvert kapittel i Del 6–11 har kelvin-kravet i sin `warning` eller i
  symbollisten.
- Ingen figur eller tabell i termodelen oppgir en temperatur uten enhet.

### §N4 Enheter, siffer og avrundingsdisiplin

- **Hvert tallsvar har SI-enhet.** Enheter i LaTeX med `\text{}` og tynn
  mellomrom foran: `$9{,}81\,\text{m/s}^2$`, `$1{,}5\,\text{kJ}$`,
  `$0{,}42\,\text{W/(m}\cdot\text{K)}$`. Aldri kursiv enhet.
- **Desimalkomma** skrives `9{,}81` inne i matte (klammene gir riktig avstand i
  KaTeX). I prosa utenfor matte: vanlig komma.
- **Behold 3–4 gjeldende siffer gjennom HELE regnekjeden og rund først til
  slutt.** Dette er ikke pedanteri i dette faget: alternativene ligger tett og
  systematisk (0,29 / 0,42 / 0,55 …), og en for tidlig avrunding lander på et
  nabo-alternativ. Boka skal MODELLERE dette i hvert talleksempel — vis
  mellomregningen med ett siffer mer enn sluttsvaret.
- Sluttsvar oppgis med **2–3 gjeldende siffer** når oppgaven ikke sier noe annet.
- **Benevningskontroll som sluttsjekk** modelleres i minst ett eksempel per
  regnetungt kapittel: «venstre side har enhet W, høyre side
  $\text{W/(m}\cdot\text{K)}\cdot\text{K}\cdot\text{m}^2/\text{m}=\text{W}$ —
  det stemmer».
- Boka bruker $g=9{,}81\,\text{m/s}^2$ gjennomgående og sier det én gang i
  kap. 0.1. Bruker en oppgave $9{,}8$ eller $10$ for å få pene tall, står det i
  oppgaveteksten.
- **Rundetelling** (kap. 1.1/1.3) er den ene plassen der siffer avgjør et
  HELTALL: $\lfloor\varphi/2\pi\rfloor$ tipper over til nabo-alternativet ved for
  få siffer. Dette skal stå eksplisitt som felle.

### §N5 Symbol- og formelliste (obligatorisk, per delkapittel)

`collapsible` SIST i kapitlet, med:

- `title`: `"Symbol- og formelliste"` (literalt — porten krever strengen)
- `buttonText`: `"Vis symboler og formler"`
- første linje i første `text`-blokk inne i collapsiblen, ORDRETT:
  «Oppslagsverk — alt her forklares underveis i kapitlet.»
- deretter markdown-tabell med **tre kolonner**:
  `| Symbol | Betydning | Enhet |` — ALLE symboler delkapitlet bruker, **per
  delkapittel, ikke arv fra tidligere kapitler**. Kolliderende symboler (§N1)
  får en egen linje som sier hvilken betydning som gjelder her.
- deretter «**Formler i dette delkapitlet:**» med display-LaTeX og én linjes
  tolkning per formel, og — dette er fagets særkrav — **hver formel merket
  `[står på det utdelte arket]`, `[Rottmann]` eller `[må kunne brukes eller
  utledes aktivt]`** (§H).

Unntak kun for helt symbolfrie kapitler — det finnes ingen i denne boka.

---

## §H HJELPEMIDDELKONTRAKTEN — kode C, og hva den betyr for undervisningen

### §H1 Hva som FAKTISK er tillatt (verifisert 30. juli 2026)

| Felt | Verdi |
|---|---|
| Status | Emnet er **aktivt høsten 2026**; ordinær eksamen **25. november 2026 kl. 15** (verifisert mot NTNUs emneside 30. juli 2026) |
| Anbefalt for | Elektronisk systemdesign og innovasjon, Kybernetikk og robotikk, Nanoteknologi |
| Varighet | **4 timer**, skriftlig skoleeksamen |
| Karakter | **A–F** |
| Hjelpemiddelkode | **C — spesifiserte trykte og håndskrevne hjelpemidler tillatt, pluss bestemt, enkel kalkulator** |
| Spesifikasjonen for TFY4115 (dokumentert i arkivet) | **Rottmann «Matematisk formelsamling»** + et **utdelt fysikk-formelark**, «Formler i emne TFY4115 Fysikk», vedlagt oppgavesettet (bekreftet fra 2004-settets forside og 2017-settet) |

**To presisjoner boka MÅ få riktig:**

1. **Kode C betyr «spesifiserte» hjelpemidler — ikke «alt du har skrevet
   selv».** Boka skal ALDRI love studenten at egne håndskrevne notater er
   tillatt. Formuleringen som skal brukes: «Eksamen har hjelpemiddelkode C:
   spesifiserte trykte og håndskrevne hjelpemidler pluss en bestemt, enkel
   kalkulator. For TFY4115 er spesifikasjonen i settene vi har sett Rottmann
   matematisk formelsamling, og i tillegg deles et fysikk-formelark ut sammen
   med oppgavesettet. Sjekk emnesiden for ditt eget semester — listen kan
   endres.»
2. **«Bestemt, enkel kalkulator» er ikke en grafisk eller programmerbar
   maskin.** Ingen oppgave, ingen oppskrift og ingen fasit i boka får hvile på
   en løsningsfunksjon, en `solve()`, en grafisk skjæring, symbolsk derivasjon
   eller en innebygd integrator. Dette har en konkret konsekvens i **kap. 11.1**:
   fikspunktiterasjonen gjøres med 2–4 håndkjørte iterasjoner på en enkel
   kalkulator, og Euler-tabellen føres for hånd. Det er nettopp derfor sjangeren
   fungerer på denne eksamen.

### §H2 Hva som står på arket (rekonstruert fra oppgaver og løsningsforslag)

- **Konstanter:** $g$, $k_B$, $N_A$, $R$, $\sigma$ (Stefan–Boltzmann), $G$,
  Wien-konstanten $b\approx 2{,}898\cdot10^{-3}\,\text{m}\cdot\text{K}$.
- **Mekanikk:** $a=dv/dt$, konstant-$a$-formlene, $F=ma$, $p=mv$, $dp/dt=F$,
  $W=\int \mathbf{F}\cdot d\mathbf{s}$, $K=\tfrac12mv^2$, $W_\text{tot}=\Delta K$,
  $F=-dU/dx$, $f\le\mu_s F_\perp$, $\alpha=d\omega/dt$, $v=\omega r$,
  $K_\text{rot}=\tfrac12 I\omega^2$, $\boldsymbol{\tau}=\mathbf{r}\times\mathbf{F}$,
  $\tau=I\alpha$, $L=I\omega$, $\mathbf{J}=\Delta\mathbf{p}=\int\mathbf{F}\,dt$,
  $F=GmM/r^2$, **treghetsmomenter for stang/kule/kuleskall/sylinder/plate**, og
  **Steiners sats** $I=I_0+Md^2$.
- **Svingninger:** $\ddot{x}+\omega_0^2x=0$, $\omega_0=\sqrt{k/m}$, $T=2\pi/\omega$,
  $f=1/T$; dempet $\ddot{x}+2\gamma\dot{x}+\omega_0^2x=0$ med
  $x=A_0e^{-\gamma t}\cos(\omega't+\delta)$, $\omega'=\sqrt{\omega_0^2-\gamma^2}$;
  tvungen svingning; fysisk pendel $\omega_0=\sqrt{Mgd/I}$.
- **Termofysikk:** $\Delta U=Q-W$, $pV=nRT$, $W=\int p\,dV$, $C_V$ og $C_P$ for
  en- og toatomig gass, $C_P=C_V+R$, $\gamma=C_P/C_V$, $pV^\gamma=$ konst,
  $TV^{\gamma-1}=$ konst, $\eta=W/Q_H$, $\eta_\text{Carnot}=1-T_k/T_v$,
  $dS=dQ_\text{rev}/T$, $\Delta S=nC_V\ln(T_2/T_1)+nR\ln(V_2/V_1)$ (og
  isobar-varianten), $\langle E_k\rangle=\tfrac32k_BT$, $v_\text{rms}=\sqrt{3k_BT/m}$,
  ekvipartisjon $\tfrac12k_BT$ per frihetsgrad, van der Waals, Clausius–Clapeyron,
  Fouriers lov $j=\kappa\Delta T/\ell$, Stefan–Boltzmann $j=\sigma T^4$, Wien
  $\lambda_\text{max}=b/T$.

### §H3 Toveismerkingen (bokas viktigste enkeltstilregel)

Fordi arket deles ut, skal boka **ALDRI fremstille formler eller konstanter som
puggestoff**. Den trener *valg, kombinasjon, omforming og rask utregning*. Hver
formel merkes i Symbol- og formellisten:

| Merke | Betyr | Eksempler i TFY4115 |
|---|---|---|
| `[står på det utdelte arket]` | **tren oppslaget**: gjenkjenn den, finn den raskt, sett inn riktig — pugg den aldri | treghetsmomentene for standardlegemer, alle naturkonstanter, van der Waals-formen, Clausius–Clapeyron-formen, entropiuttrykket for ideell gass, $\sigma T^4$, $\lambda_\text{max}=b/T$, Steiner, adiabatrelasjonene, $\eta_\text{Carnot}$ |
| `[Rottmann]` | matematisk oppslag | integraler og deriverte av standardfunksjoner, logaritmeregler, trigonometriske identiteter, rekker |
| `[må kunne brukes eller utledes aktivt]` | **kreves aktivt under tidspress** — det skjelettets «Utledning som kreves aktivt» sier for nettopp ditt kapittel | $a=g(\sin\theta\pm\mu\cos\theta)$ fra frilegemediagram; $K=\tfrac{7}{10}mv^2$ fra $I=\tfrac25mR^2$ og $v=\omega R$; gliding→rulling fra de to N2-likningene; $\gamma=b/2m$ fra ansatsen; $C_P=C_V+R$ fra 1. hovedsetning; $\eta_\text{Carnot}$; $\varepsilon_V=\varepsilon_K+1$; $\Delta S$ for ideell gass fra $dS=dQ_\text{rev}/T$; termiske motstander i serie; platebalansen $T_2=((T_1^4+T_3^4)/2)^{1/4}$ |

**Boka sier hvorfor.** Minst én gang per del, og samlet i kap. 0.1, står
setningen i klartekst: du får arket utdelt, så poengene ligger i å *velge* riktig
lov, *begrunne* at den gjelder her, og *utlede* det arket ikke gir. Skriv aldri
«denne formelen må du kunne utenat» om noe som står på arket.

**Kap. 0.1 har en `collapsible` «Formelarket i praksis»** — bokas samlede
oppslagskort: en ren, printbar tabell med kjerneverktøyene per tema, hver merket
med sin status, pluss treningsrådet: **løs alltid oppgaver med formelarket og
Rottmann ved siden av, slik eksamen faktisk er.**

### §H4 Det arket IKKE redder deg på

Metodevalget, oppsettet og regnekjeden. I tillegg tre ting som må sitte i
fingrene: (i) **avrundingsdisiplinen** (§N4), (ii) **fortegnsanalysen** av $Q$,
$W$ og $\Delta U$ langs en syklus, og (iii) **frihetsgradtellingen** — arket
oppgir $C_V$ for en- og toatomig gass, men å telle $f$ for et gitt molekyl ved en
gitt temperatur og gå baklengs fra oppgitt $C_V$ er en aktiv ferdighet. Si dette
eksplisitt der det hører hjemme.

**Ingen programmering forutsettes noe sted i boka.** Kap. 11.1 er håndregning
med kalkulator. Skriv aldri at studenten trenger Python.

---

## §M FLERVALGSKONTRAKTEN — formen er hele eksamen

### §M1 Formen (gjengis korrekt overalt i boka)

| Felt | Verdi |
|---|---|
| Nyeste dokumenterte form (2019–2020) | **~40 spørsmål, alternativer A–F** |
| Foregående form (2013, 2017, 2018) | **50 spørsmål, alternativer A–E** |
| Todeling (fast 2004→2020) | **spm. 1–20 mekanikk · spm. 21–40 termisk fysikk** (i 50-spørsmålsformen: 1–25 / 26–50) |
| Andel av karakteren | **100 %** — hele settet er flervalg i den nyeste dokumenterte formen |
| Retteregel | **1 poeng for riktig, 0 for feil eller blankt.** Ingen minuspoeng, ingen delpoeng for oppsett eller mellomregning |
| Hva som teller | **Kun det endelige bokstavsvaret** |
| Vekting | Alle spørsmål teller likt |

**Konsekvenser boka skal si rett ut, og deretter leve etter:**

- Fordi det ikke finnes minuspoeng, skal man **aldri levere blankt**. Boka sier
  dette i kap. 0.1 og 12.1 — men i samme åndedrag at gjetting er en siste utvei,
  ikke en strategi: med A–F er ren gjetting verdt ca. 17 % av settet, med A–E
  ca. 20 %.
- Fordi det ikke finnes delpoeng, er **et perfekt oppsett med feil sluttall verdt
  null**. Det er hele grunnlaget for «rask vei til tall»-sporet (§M3).
- Fordi kandidaten ikke kan vise hva hun mener, må hun **selv** fange feilen.
  Derfor sjekk-før-svar-listen i 12.1 og selvdiagnosene i prøvekapitlene.
- **Ærlighet om formens alder:** arkivet stopper i 2020. Boka påstår ALDRI at
  formen er bekreftet etter det — se «Kildegrunnlag».

### §M2 De statiske settene bruker seks alternativer, quizen fire

- **Statiske flervalg** (D-prøvene, 12.2–12.4, MC-oppgavene i drillkapitlene)
  skrives med **seks alternativer A–F**, slik den nyeste dokumenterte formen er.
  Det er treningsverdien: å eliminere blant seks tette tall er en annen øvelse
  enn blant fire.
- **Quiz-staging-filene har nøyaktig fire alternativer** — det er
  plattformformatet (`options[0]` alltid riktig, runtime stokker). Dette er en
  teknisk begrensning, ikke en påstand om eksamensformen. **Kap. 0.1 og 12.1 skal
  si det i klartekst**: «Den interaktive quizen har fire svaralternativer fordi
  det er formatet plattformen bruker. Eksamen har fem eller seks. Quizen trener
  regnekjeden og fellene; øvingseksamenene og D-prøvene trener det ekte
  formatet.» Uten den setningen lærer boka bort feil gjettesannsynlighet.

### §M3 «Rask vei til tall» — obligatorisk avsnitt i hvert teori- og drillkapittel

Hvert teori- og drillkapittel har et **eget, tydelig merket avsnitt** (egen
`## Rask vei til tall (MC-oppskrift)`-overskrift i en `text`-blokk, eller en
`theorem` med den tittelen) som gir den korteste feilfrie regnekjeden fra
oppgitte tall til bokstavsvaret:

1. hvilken lov (én linje),
2. hvilken ene regnelinje,
3. hvilke verdier hentes fra det utdelte arket,
4. hvor mange siffer å beholde,
5. hva du sjekker før du krysser av.

Innholdet tas fra skjelettets «Rask vei til tall (MC-oppskrift)»-punkt i
kapitlets innholdskontrakt. Avsnittet står **etter** den symbolske utledningen,
aldri i stedet for den (§S2).

### §M4 Tette alternativer og FORM-TELL (fagets versjon av LENGDE-TELL)

Eksamens alternativer ligger **tett og systematisk** og er ofte konstruert rundt
en typisk feil. Boka skal etterlikne det — men da oppstår en helt egen risiko:
**at fasiten kan gjettes på FORM i stedet for på fysikk.** En med1100-øvingseksamen
lå på 50 % gjettbarhet før den ble rettet. Klarer en student å bestå
flervalgsdelen uten å kunne faget, har boka ødelagt sin egen eksamenstrening.

**FORM-TELL — bindende for ALLE flervalgssett i boka (quiz, D-prøver, 12.2–12.4,
MC-oppgavene i drill):**

1. **Numeriske alternativer:** alle skal ha **samme format** (like mange
   desimaler eller like mange gjeldende siffer), **samme enhet**, **samme
   tierpotens der det er fysisk rimelig**, og **hver av dem skal svare til en
   konkret regnefeil** — glemt rotasjonsledd, glemt Steiner-ledd, $C_P$ for
   $C_V$, $\gamma=5/3$ for $7/5$, celsius for kelvin, glemt fjerde potens,
   $\varepsilon_K$ for $\varepsilon_V$, feil fortegn, én iterasjon for få. Ingen
   «tullesvar», og aldri ett alternativ som skiller seg ut ved å være det eneste
   runde tallet, det eneste med to desimaler eller det eneste negative.
2. **Tekstlige alternativer** (konsept- og rangeringsspørsmål): alle fire (eller
   seks) skal ha **jevn lengde og samme presisjonsgrad**. Fasiten skal ikke være
   den mest forbeholdne, den mest detaljerte eller den eneste som nevner en
   betingelse. Er det naturlig at fasiten er presis, skal distraktorene være
   like presise — men gale.
3. **Måltall:** `options[0]` skal være **unikt lengst i under 30 %** av
   spørsmålene i en quizfil, og **unikt kortest i under 30 %**. Tell det selv,
   per fil, før du melder ferdig — ikke bare til slutt.
   Etter wiring: `npx tsx scripts/hoyskolebok/quiz-lengdesjekk.mjs tfy4115`.
4. **En distraktor gjengir ALDRI bokas egne presiseringer som «galt» svar.**
   Ligger en distraktor nær sannheten, skal `explanation` si eksplisitt hvorfor
   den likevel ikke holder.
5. **Hver `explanation`** (2–4 setninger) begrunner både hvorfor fasiten stemmer
   og hvilken konkret feil den nærmeste distraktoren representerer — beskrevet
   ved innhold, aldri ved posisjon (§0.8).
6. **Ingen duplikate alternativer** innen et spørsmål, og ingen duplikate
   spørsmål på tvers av kapitler i samme del.

### §M5 Fasitfordeling

- Statiske flervalg har **stokkede fasit-bokstaver**. Aldri «alle a», aldri et
  mønster som «1a · 2a · 3a» (porten flagger det). Over et helt øvingssett skal
  A–F være rimelig jevnt fordelt — tell fordelingen selv og juster.
- Riktig/galt- og «finn fellen»-lister blander reelle og feller — aldri «alle
  felle», aldri «alle riktig».
- Quizfilene beholder `options[0]`-invarianten fordi runtime stokker.
- Etter wiring: `python3 scripts/hoyskolebok/sjekk-fasitfordeling.py tfy4115`.

---

## §S RETTEKONTRAKTEN — hva løsningsforslagene faktisk krever

**Kildepresisjon:** arkivet består av **oppgavesett og løsningsforslag**. Det
finnes **ingen egne sensorveiledninger** for TFY4115. Skriv derfor alltid
«løsningsforslagene viser/krever …», aldri «sensor sier …» eller
«sensorveiledningen krever …». Ordet `sensorveiledning` er grep-forbudt utenfor
kap. 0.1s kildenote (se «Forbudt-termer»).

### §S1 Flervalgs-æraen (2013, 2017–2020 — gjeldende)

1. **1 poeng riktig, 0 for feil eller blankt.** Ingen delpoeng for oppsett eller
   mellomregning. Kun bokstavsvaret teller.
2. **Alle spørsmål teller likt.**
3. **Presisjon avgjør:** alternativene ligger tett og er bygget rundt en typisk
   feil. Regnekjeden må være rask og feilfri, og siffer må beholdes.
4. **Løsningsforslaget viser den avgjørende loven pluss én til få regnelinjer.**
   Det er arbeidsformen kandidaten må beherske — og formen boka skal bruke i
   løsningsforslagene til 12.2–12.4 og til D-prøvene.
5. **Enkelte spørsmål er rene konsept- og rangeringsspørsmål** (ranger $T$, $S$,
   $\Delta U$ i hjørnene; hvilken graf er riktig; hvilken prosess er umulig).
   Her belønnes forståelse framfor regning — og de skal ha sin andel av
   oppgavene i boka.

### §S2 Utlednings-/hybridæraen (2004–2016) — hvorfor boka trener to modi

De eldre settene (4 store oppgaver 2004–2008; flervalg + 3–4 åpne oppgaver
2009–2016) premierer **korrekt oppsett og metode**: frilegemediagram, riktig lov
navngitt, symbolsk uttrykk, riktig fortegn og retning — selv når sluttallet
glapp. Enheter og gjeldende siffer vektlegges.

Boka skal derfor gi **to spor for hver kjerne-sjanger**:

1. **Symbolsk utledning med intuisjon** — nødvendig for forståelse, for å ikke
   huske feil formel, og for at de eldre settene kan brukes som øving.
2. **«Rask vei til tall» (MC-oppskrift)** — arbeidsformen som gir poeng i dag
   (§M3).

Boka skal si hvorfor begge finnes, og aldri fremstille den symbolske modusen som
overflødig eller MC-modusen som «juks».

### §S3 Karakter-realisme

Faget har karakterskala **A–F**. Del 0 sier eksplisitt at **C er en god og vanlig
karakter**, særlig i første studieår. «Gapet til A» rammes inn som en
oppgraderingsmeny, ikke en mangelliste. Formuleringen «Prioritet: perfekt» er
FORBUDT — skjelettets prioritetsklasser skrives i boka som «høyeste prioritet —
dette må sitte» (perfekt), «bør sitte» (kunne) og «kjenne til» (kjenne).

I et rent flervalgsfag finnes ingen «besvarelse» å modellere i klassisk forstand.
Det boka i stedet skal ha, er **ærlig merkede arbeidsprotokoller**: minst én
gjennomgang som viser en kandidat på midtnivå som regner riktig men bruker for
lang tid og må hoppe over de fire siste spørsmålene, med margnotat om hva som
faktisk var godt nok — og minst én som lander skarpt. Ingen meta-fasit («en
A-kandidat ville her ha …») — skriv resonnementet ut.

---

## §G FIGURKONTRAKTEN — fysikk krever figurer, og figuren må være FYSISK RIKTIG

### §G1 Figur-i-ord er et KOMPLEMENT, ALDRI en erstatning

Kapitler der skjelettets **Figurkrav**-felt lover en figur, SKAL ha en faktisk
`image`-blokk med SVG. Prosabeskrivelsen beholdes som forklaring TIL figuren.

Ber en oppgave, et eksempel eller en prøvetekst om figur («tegn
frilegemediagram», «skisser syklusen i $pV$-diagrammet», «tegn temperaturprofilen»),
er et løsningsforslag som bare skriver «*Figur i ord:* …» **UFULLSTENDIG**. Dette
gjelder også inne i `collapsible`-er (nøstede `image`-blokker rendres, men MÅ ha
`id` og `src`).

### §G2 Figurene som MINIMUM skal finnes (fra skjelettets Figurkrav-felt)

| Kap. | Figur |
|---|---|
| 1.1 | $v(t)/\omega(t)$ og $a(t)$ over samme tidsakse |
| 1.2 | bane med tangent (banevinkel $\beta$) og krumningssirkel i toppunktet |
| 2.1 | frilegemediagram med $m\mathbf{g}$, $\mathbf{N}$, $\mathbf{f}$ og dekomponert tyngde |
| 2.2 | høydeprofil med start-/sluttpunkt og energiregnskap |
| 3.1 | før-/etter-skisse med fartspiler; $F(t)$-graf med areal |
| 3.2 | bane med kraftvektorer; raketten med utstøtt masse |
| 4.1 | legeme med akse, CM-avstand $d$ og perpendikulære avstander for punktmasser |
| 4.2 | legeme med $\boldsymbol{\omega}$, $\mathbf{V}$, $\mathbf{L}_\text{spinn}$, $\mathbf{L}_\text{bane}$ inntegnet med retning |
| 4.3 | frilegemediagram med kraftvektorer og momentarmer |
| 5.1 | masse-fjær-system; fysisk pendel med $d$; konisk pendel med kraftdekomponering |
| 5.2 | dempet svingning med innhyllingskurve $A_0e^{-\gamma t}$; resonanskurve |
| 6.1 | *(ingen tvingende — evt. et $pV$-punkt)* |
| 6.2 | $C_V(T)$-trappekurve for et toatomig molekyl (translasjon → rotasjon → vibrasjon) |
| 7.1 | de fire prosessene i samme $pV$-diagram (adiabat vs. isoterm) |
| 7.2 | $T$–$S$-diagram; reversibel omvei for en irreversibel prosess |
| 8.1 | syklus i $pV$-diagram med trinn merket og $Q$/$W$-fortegn per trinn; evt. $T$–$S$-diagram |
| 8.2 | energiflytdiagram (reservoarer, arbeid inn, $Q_H$/$Q_L$) |
| 9.1 | sammensatt vegg med sjikt, temperaturprofil (knekt linje) og analog seriemotstand |
| 9.2 | tre parallelle plater med strålingspiler; $\lambda_\text{max}(T)$-forskyvning |
| 10.1 | $p$–$T$-fasediagram med trippel- og kritisk punkt; van der Waals-isotermer i $pV$ |
| 10.2 | damptrykkskurve $p(T)$; skinne som utvider seg |
| 11.1 | iterasjonsdiagram ($y=x$ og $y=g(x)$, trappe mot fikspunkt); Euler-steg mot eksakt kurve |

Drillkapitlene og prøvekapitlene har ikke egne figurkrav-felt, men **hver
oppgave som ber om en figur skal ha figuren i fasiten** (§G1).

### §G3 FYSIKK-KONTROLL AV HVER FIGUR (ufravikelig)

**En figur som rendrer, er ikke en figur som er riktig.** I fys1001-boka slapp en
figur med **fysisk umulig kraftretning** helt fram til verifiseringsbølgen. Hver
figur i denne boka skal kontrolleres mot fysikken, ikke bare mot at den vises.
Sjekklisten er fagspesifikk:

**Frilegemediagram (2.1, 4.3, 5.1):**
1. isolér ETT legeme;
2. tegn **alle** krefter som virker PÅ det, med **navngitte symboler**;
3. normalkraften står **vinkelrett på flaten og peker vekk fra den**;
4. friksjonen peker **mot den relative bevegelsen** (og ved statisk friksjon:
   mot den retningen legemet ville glidd);
5. snordraget peker **langs snora, vekk fra legemet**;
6. **ingen fiktiv «sentripetalkraft» og ingen «sentrifugalkraft»** tegnet inn som
   en påført kraft — sentripetalkraften er *resultanten* av de virkelige
   kreftene. Eneste tillatte forekomst er som eksplisitt merket moteksempel i en
   `warning`, der det står at figuren er GAL;
7. rimelig lengde på vektorene ($N$ mot tyngdekomponenten), koordinatsystem
   inntegnet.

**Grafer og diagrammer:**
8. **$pV$-syklusens omløpsretning bestemmer maskintypen.** Med volum til høyre og
   trykk oppover er **medklokke = netto arbeid UT = varmekraftmaskin**, og
   **motklokke = arbeid INN = varmepumpe/kjøleskap**. Sjekk retningen mot det
   kapitlet faktisk underviser (Del 8 har begge — de MÅ tegnes forskjellig).
9. **Adiabaten er brattere enn isotermen** i $pV$-diagrammet. En figur der de
   krysser med motsatt bratthet underviser fellen.
10. **$T$–$S$-diagram:** arealet under kurven er tilført varme; en isoterm er
    horisontal, en adiabat (isentrop) er vertikal.
11. **Temperaturprofilen i en sjiktvegg faller BRATTEST i det DÅRLIGSTE
    lederen** (lav $\kappa$, høy $R_\text{term}$). Dette er lett å tegne motsatt.
12. **Platebalanse:** strålingspilene går fra varm til kald, og midtplatens
    temperatur skal ligge MELLOM de to reservoarene. Regn den ut før du tegner
    (§R).
13. **Wien:** $\lambda_\text{max}$ forskyves mot **kortere** bølgelengde når $T$
    øker.
14. **$C_V(T)$-trappekurven stiger monotont** $\tfrac32R\to\tfrac52R\to\tfrac72R$
    — den går aldri ned.
15. **$p$–$T$-fasediagram:** smeltelinjen tegnes med **positiv** helning (det
    normale); at vann er unntaket med negativ helning skal stå i teksten hvis
    figuren er merket som vann. Trippelpunktet er der tre linjer møtes; det
    kritiske punktet er der væske–gass-linjen SLUTTER (den fortsetter ikke).
16. **Dempet svingning:** innhyllingskurven $A_0e^{-\gamma t}$ tangerer toppene,
    og perioden er (nær) konstant — amplituden faller, frekvensen gjør det ikke.
17. **Fikspunkt-trappediagram:** trappen skal konvergere mot skjæringen mellom
    $y=x$ og $y=g(x)$, og startverdien som er tegnet inn skal være den samme som
    i eksempelet.

**En figur skal bare vise det kapitlet har lært bort.** Ikke tegn friksjon inn i
et frilegemediagram før friksjonsmodellen er innført; lag to figurer i stedet.

### §G4 Filer, stil og opplasting

- Filer: `public/images/textbook/tfy4115/<navn>.svg`.
- Akser i `#6b7280`, kurver og kraftvektorer i mid-tone farger, **norsk tekst**,
  **transparent bakgrunn** (må være lesbar i både lys og mørk modus), viewBox ca.
  480×360, tydelige etiketter. Valider XML før wiring.
- **ETTER at nye figurer er skrevet:**
  ```bash
  python3 scripts/hoyskolebok/last-opp-figurer.py <arbeidstre> tfy4115
  python3 scripts/hoyskolebok/sjekk-figurer.py tfy4115
  ```
  **Porten tester mot Supabase Storage, ikke mot disk.** Bildene serveres fra
  Storage via `mediaUrl()` — «fila ligger i repoet» er IKKE bevis på at figuren
  vises. En figur som bare ligger lokalt, gir **404 for leseren**. To figurer i
  mat111-uib lå i et arbeidstre og var aldri lastet opp; de ga 404 i en live bok
  til porten fant dem.
- **Skreddersydd `caption` per plassering** — knyttet til kapitlets eget eksempel
  og termbruk, ikke en generisk gjentakelse. `alt` beskriver figuren bokstavelig
  for skjermleser (ren tekst, §0.4 — ingen LaTeX der).

---

## §R REGNEKONTRAKTEN — etterregn før du skriver

**R1. Etterregn HVERT talleksempel, hver enhet og hvert fortegn med `python3`
før du skriver det.** Ikke regn i hodet, ikke gjenbruk et tall fra skjelettet
uten å sjekke. fys1001-boka hadde **feil omløpsretning for en ladd partikkel** og
**feil netto stråling (255 W)** som først ble fanget i verifiseringsbølgen — begge
ville vært fanget av tretti sekunder med `python3`.

**R2. De obligatoriske fysikk-sannhetskontrollene i dette faget.** Kjør hver av
dem numerisk på dine egne tall:

1. **Carnot-grensen.** For HVER syklus du oppfinner: $\eta \le 1 - T_k/T_v$ med
   $T$ i kelvin. En syklus med $\eta$ over grensen bryter 2. hovedsetning, og en
   oppgave bygget på den kan ikke løses. Samme for varmepumpe:
   $\varepsilon_V \le T_v/(T_v-T_k)$ og $\varepsilon_K \le T_k/(T_v-T_k)$.
2. **$\varepsilon_V=\varepsilon_K+1$** skal holde i tallene dine.
3. **Entropifortegnet.** For hver irreversibel prosess:
   $\Delta S_\text{univers}=\Delta S_\text{system}+\Delta S_\text{omgivelser}>0$.
   For en syklus: gassens $\Delta S=0$ over hele sløyfa, men universets kan være
   positiv. Regn begge.
4. **Energiregnskapet i syklusen:** $\sum Q = \sum W$ over en full syklus, og
   $\Delta U=0$. Summer trinnene numerisk.
5. **Rulling:** $v=\sqrt{2g\Delta y/(1+c)}$ med riktig $c$ ($2/5$ kompakt kule,
   $1/2$ massiv sylinder, $2/3$ kuleskall) — og sjekk at $K$-uttrykket stemmer
   ($\tfrac{7}{10}mv^2$, $\tfrac34mv^2$, $\tfrac56mv^2$).
6. **Steiner legger ALLTID til:** $I=I_\text{CM}+Md^2 > I_\text{CM}$.
7. **$\gamma=(f+2)/f$:** $f=3\Rightarrow\gamma=5/3$, $f=5\Rightarrow\gamma=7/5$,
   $f=7\Rightarrow\gamma=9/7$. Sjekk at $C_P=C_V+R$ i tallene.
8. **$v_\text{rms}$:** ved samme temperatur har det TYNGRE molekylet LAVERE
   $v_\text{rms}$ (og samme $\langle E_k\rangle$). Sjekk med to molarmasser.
9. **Platebalanse:** $T_2=((T_1^4+T_3^4)/2)^{1/4}$ skal ligge mellom $T_1$ og
   $T_3$. Regn den ut — ikke gjett.
10. **Netto stråling:** $P=e\sigma A(T^4-T_\text{omg}^4)$ — sjekk fortegnet og
    størrelsesordenen (og at du ikke glemte fjerde potens).
11. **Termiske motstander i serie:** $R=\sum \ell_j/(\kappa_j A)$, og
    $\Delta T_j = P R_j$ skal summere til $\Delta T_\text{total}$.
12. **Fikspunktiterasjon:** kjør iterasjonen i `python3` og oppgi de FAKTISKE
    verdiene for $x_1, x_2, x_3$ (og tell iterasjonene — av-for-én er en
    innebygd felle). Roten er $x\approx 4{,}965$.
13. **Kelvin overalt** (§N3) — sett inn og se at tallet er fysisk rimelig.

**R3. Parametersjekk alle fortegns- og «alltid»-påstander numerisk i hele det
fysisk rimelige parameterrommet FØR du skriver dem** (DNA-regnefag «Matematisk
sannhetskontroll»). Eksempler som MÅ sjekkes: «adiabaten er alltid brattere enn
isotermen», «friksjonen reduseres når den ytre kraften har oppadrettet
komponent», «universets entropi øker ved varmeoverføring mellom to reservoarer»,
«$\varepsilon_V$ er alltid større enn 1». Er påstanden bare betinget sann, skriv
betingelsen ut.

**R4. En «vis at …»-oppgave der påstanden ikke holder ubetinget, KAN IKKE
LØSES** — det er verre enn en manglende oppgave. Skriv heller «vis at det gjelder
når …, og finn betingelsen».

**R5. Tall som skal gå opp, går opp.** Velg masser, vinkler, temperaturer og
kompresjonsforhold som gir ryddige svar. Går det ikke opp, skriv «≈» og oppgi
antall gjeldende siffer.

**R6. Varier kalibreringene.** Samme tallsett gjenbrukt i tre kapitler gir
autopilot. Bytt masser, vinkler, radier, friksjonstall, temperaturer og
gassmengder mellom kapitlene — og mellom de tre øvingseksamenene.

**R7. Distraktorene skal REGNES FRAM, ikke gjettes.** Skal alternativ B være
«svaret du får hvis du glemmer rotasjonsleddet», så regn det tallet ut med den
feilen og bruk det. Det er den eneste måten alternativene blir realistisk tette.

---

## §K KVOTEKONTRAKTEN (AUTORITATIV — fra skjelettets §4)

**Bindende total: quiz 710 · flashcards 564.** Verifisert 30. juli 2026: alle
deltotaler summerer eksakt. Kvotene er **minimum per kapittel** — overskyting er
lov, underskyting er kontraktsbrudd.

| Del | Kapitler | Quiz | Flashcards | Prøver (min) | Kapittelminutter |
|---|---|---|---|---|---|
| 0 | 0.1 | 16 | 18 | — (metadel) | 35 |
| 1 | 1.1–1.3 | 64 | 50 | 4 (120) | 200 |
| 2 | 2.1–2.3 | 66 | 52 | 4 (120) | 205 |
| 3 | 3.1–3.3 | 56 | 44 | 4 (120) | 185 |
| 4 | 4.1–4.4 | 84 | 70 | 4 (120) | 270 |
| 5 | 5.1–5.3 | 62 | 50 | 4 (120) | 205 |
| 6 | 6.1–6.3 | 66 | 54 | 4 (120) | 195 |
| 7 | 7.1–7.3 | 66 | 54 | 4 (120) | 200 |
| 8 | 8.1–8.3 | 64 | 52 | 4 (120) | 210 |
| 9 | 9.1–9.3 | 62 | 50 | 4 (120) | 195 |
| 10 | 10.1–10.3 | 52 | 42 | 4 (120) | 180 |
| 11 | 11.1 | 18 | 14 | 4 (120) | 50 |
| 12 | 12.1–12.4 | 34 | 14 | — (12.2–12.4) | 760 |
| **Sum** | **37 kap. + 11 prøvekap.** | **710 ✓ (≥500)** | **564 ✓ (≥500)** | **44 prøver (1 320 min)** | **2 890 min** |

**Kontrollsummer:** mekanikk (Del 1–5) quiz 332 / flashcards 266 · termofysikk
(Del 6–10) quiz 310 / flashcards 252 · Del 0 + 11 + 12 quiz 68 / flashcards 46.

Per kapittel (quiz · flashcards) — **minimum**:

| Kap. | Q · F | Kap. | Q · F | Kap. | Q · F |
|---|---|---|---|---|---|
| 0.1 | 16 · 18 | 4.2 | 24 · 22 | 8.2 | 22 · 20 |
| 1.1 | 26 · 22 | 4.3 | 18 · 16 | 8.3 | 16 · 8 |
| 1.2 | 22 · 20 | 4.4 | 16 · 8 | 9.1 | 22 · 20 |
| 1.3 | 16 · 8 | 5.1 | 24 · 22 | 9.2 | 24 · 22 |
| 2.1 | 24 · 20 | 5.2 | 22 · 20 | 9.3 | 16 · 8 |
| 2.2 | 26 · 24 | 5.3 | 16 · 8 | 10.1 | 20 · 18 |
| 2.3 | 16 · 8 | 6.1 | 24 · 22 | 10.2 | 18 · 16 |
| 3.1 | 24 · 20 | 6.2 | 26 · 24 | 10.3 | 14 · 8 |
| 3.2 | 18 · 16 | 6.3 | 16 · 8 | 11.1 | 18 · 14 |
| 3.3 | 14 · 8 | 7.1 | 24 · 22 | 12.1 | 16 · 14 |
| 4.1 | 26 · 24 | 7.2 | 26 · 24 | 12.2 | 6 · 0 |
| | | 7.3 | 16 · 8 | 12.3 | 6 · 0 |
| | | 8.1 | 26 · 24 | 12.4 | 6 · 0 |

**Flashcards telles som toppnivå `definition`-blokker med `title`.** Ligger en
definisjon inne i en `collapsible`, teller den ikke.

### Tidsbudsjettet (etterregnet 30. juli 2026 — bruk DISSE tallene)

- **37 innholdskapitler: 2 890 min** (summen av skjelettets `estimatedMinutes`).
- **11 prøvekapitler à 120 min: 1 320 min** (4 prøver per del: A/B/C ~25 min,
  D-prøven i MC-format ~45 min).
- **Bokas totale tidsbudsjett: 4 210 min ≈ 70 timer.**

Dette tallet brukes i «Lite tid?»-boksen i kap. 0.1. **Merk:** skjelettets
sammendragslinje i §1 anslår «≈ 2 500 min innholdskapitler … ≈ 65 timer». Det
anslaget er for lavt — de per-kapittel `estimatedMinutes` som står i §3 er
autoritative og summerer til 2 890. Bruk **70 timer**, og ikke 65, i alle
tidsanslag i boka.

### Quiz-filene

`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`:

```json
[{ "question": "…", "options": ["riktig", "distraktor", "distraktor", "distraktor"], "explanation": "…" }]
```

Nøyaktig **4 alternativer**, `options[0]` **ALLTID** riktig (runtime stokker).

**Kalibrering — quizbanken ER eksamenstrening.** Eksamen er ren flervalg med
tette distraktorer, så de 710 quizspørsmålene er mini-eksamensoppgaver, ikke
kunnskapskontroll. Skriv dem deretter: numeriske utregninger i MC-format,
konseptrangeringer ($T$, $S$, $\Delta U$ i hjørnene), «hvilken prosess er
umulig», graf-/diagramtolkning, treghetsmoment-rangering,
frihetsgradtelling, prosessidentifikasjon, enhets- og størrelsesordensjekk.
Fordelingen speiler eksamenens todeling: mekanikk 332, termofysikk 310.

FORM-TELL og LENGDE-TELL (§M4) gjelder hver enkelt fil.

---

## Sjangerkatalog M1–M13 / T1–T14 (fra skjelettets §3 — gjengis i kap. 0.1)

Sjangerkodene skrives ut i klarspråk ved **FØRSTE bruk i HVERT kapittel**, og
kap. 0.1 presenterer hele katalogen som studentens sjekkliste med frekvens og
hvilken halvdel sjangeren hører til.

**Mekanikk (spm. 1–20):**

| Kode | Sjanger | Gjenganger-score |
|---|---|---|
| **M1** | Newton på skråplan med friksjon | ~100 % |
| **M2** | Arbeid, energi og effekt | ~100 % |
| **M3** | Rullende legeme med energibevaring | ~100 % |
| **M4** | Treghetsmoment og Steiners sats | ~100 % |
| **M5** | Dreieimpuls og rulling (inkl. gliding→ren rulling) | ~90 % (overgang ~40 %) |
| **M6** | Bevegelsesmengde og støt, impuls | ~100 % |
| **M7** | Svingninger (egenfrekvens, dempet, $Q$, resonans) | ~90 % |
| **M8** | Pendler (fysisk, konisk, fallende stang) | ~50 % |
| **M9** | Statikk og momentbalanse | ~70 % |
| **M10** | Kinematikk fra gitt $v(t)/\omega(t)$ | ~80 % |
| **M11** | Krumning og normalkraft | ~60 % |
| **M12** | Gravitasjon/baner og rakett | ~40 % (rakett ~20 %) |
| **M13** | Presesjon | ~20 % |

**Termisk fysikk (spm. 21–40):**

| Kode | Sjanger | Gjenganger-score |
|---|---|---|
| **T1** | Ideell gasslov og molekyltall | ~100 % |
| **T2** | Kinetisk gassteori, $v_\text{rms}$ | ~80 % |
| **T3** | Ekvipartisjon og frihetsgrader → $C_V$, $C_P$, $\gamma$ | ~90 % |
| **T4** | Adiabatisk prosess | ~90 % |
| **T5** | Kretsprosess og virkningsgrad — **signatursjangeren** | ~100 % |
| **T6** | Varmepumpe/kjøleskap, effektfaktor | ~90 % |
| **T7** | Entropi | ~100 % |
| **T8** | Hovedsetningene som fortegnsanalyse | ~100 % |
| **T9** | Varmeledning, Fouriers lov, sjikt i serie | ~80 % |
| **T10** | Varmestråling (Stefan–Boltzmann, platebalanse, Wien) | ~70 % — **unik mot TFY4125** |
| **T11** | van der Waals og faseovergang/fasediagram | ~50 % (fasediagram ~60 %) |
| **T12** | Clausius–Clapeyron / damptrykk | ~40 % |
| **T13** | Termisk utvidelse | ~30 % |
| **T14** | Numerisk iterasjon (fikspunkt/Euler) | ~40 % — **lever fremdeles** |

### Frekvenstall — hvordan de skal formuleres i denne boka

Fordi settene har fast halv-halv-struktur, forekommer nesten alle kjernetemaene i
**alle** sett, og analysen oppgir derfor en **gjenganger-score** (andel av settene
temaet inngår i) — ikke et telt «N av M». **Skriv derfor «i praktisk talt alle
sett (~100 %)», «i om lag 9 av 10 sett (~90 %)», «i rundt halvparten av settene
(~50 %)».** Skriv ALDRI en oppdiktet eksakt brøk som «17 av 25 sett» — den
presisjonen finnes ikke i grunnlaget, og en påstand om telte belegg må stemme
med belegg-listen som følger. Tallene over er de eneste som skal brukes.

**Bevisst utelatt, med begrunnelse i kap. 0.1:** **elektromagnetisme** (felt,
potensial, kondensatorer, kretser, magnetfelt, induksjon) — **0 treff i hele
arkivet, aldri pensum**; **bølger og interferens**, **optikk** (linser, Snell),
**fluidmekanikk** (Bernoulli, oppdrift, viskositet), **relativitet**,
**atom-/kjernefysikk** — 0 treff. Kvantefysikk opptrer KUN som støtte i
termofysikken («innfrysing» av frihetsgrader, Plancks strålingslov), aldri som
eget tema.

**Og motsatt, like viktig:** **termofysikk er KJERNEPENSUM** — halve settet.
Ingen steder i boka skal termodelen merkes som historisk, utfaset eller som et
tillegg. (Det gjelder i TFY4125, ikke her.)

---

## Feilkatalogen #1–#16 (fra EKSAMENSANALYSE §5)

Kodene glosses ved **FØRSTE bruk PER KAPITTEL** — «(felle #1 — glemt
rotasjonsledd i energiregnskapet)». Kap. 0.1 lister dem alle og sier at de har et
samlet register; kap. 12.1 samler dem som «hvilket galt alternativ ville du valgt
hvis du gjorde denne feilen».

| # | Fellen | Forebygges i |
|---|---|---|
| **#1** | Glemme rotasjonsenergien for et rullende legeme ($\tfrac12mv^2$ i stedet for $\tfrac12(1+c)mv^2$) — den vanligste innebygde fella | 2.2, 2.3 |
| **#2** | Dobbelttelle kinetisk energi i ren rotasjon (legge $\tfrac12mv^2$ til $\tfrac12I\omega^2$) | 4.2, 4.4 |
| **#3** | Bruke konstant-akselerasjonsformler når $a$ eller $\alpha$ ikke er konstant | 1.1, 4.2, 5.1 |
| **#4** | Glemme Steiner-leddet når aksen ligger utenfor massesenteret | 4.1, 4.4, 5.1 |
| **#5** | Feil fortegn/retning på dreieimpuls, friksjonskraft eller akselerasjonskomponent | 4.2, 2.1 |
| **#6** | Sette $N=mg$ når en ytre kraft har vertikal komponent (endret $N$ ⇒ endret friksjon) | 2.1, 2.3 |
| **#7** | Feil integrasjonsgrenser i $\int r^2\,dm$ | 4.1 |
| **#8** | Forbytte $C_V$ og $C_P$, eller bruke feil $\gamma$ ($5/3$ vs. $7/5$) | 6.2, 6.3, 7.1, 8.1 |
| **#9** | Feil telling av frihetsgrader (vibrasjon gir 2 kvadratiske ledd; vibrasjon er «frosset ut» ved romtemperatur) | 6.2, 6.3 |
| **#10** | Behandle isokor/isobar/adiabat/isoterm om hverandre — feil $(Q,W,\Delta U)$-relasjon | 7.1, 7.3 |
| **#11** | Kelvin-/enhetsslurv i gasslov, $TV^{\gamma-1}$, entropi, Clausius–Clapeyron | 6.1, 7.1, 10.2 |
| **#12** | Glemme fjerde potens i Stefan–Boltzmann og i platebalansen (midle $T^4$, ikke $T$) | 9.2, 9.3 |
| **#13** | Forveksle virkningsgrad $\eta$ og effektfaktor $\varepsilon$, eller regne $\varepsilon_V$ når $\varepsilon_K$ var spurt | 8.2, 8.3 |
| **#14** | Glemme at $S$ er en tilstandsfunksjon — regne omvei unødig, eller glemme at universets entropi kan øke selv når gassens $\Delta S=0$ over en syklus | 7.2, 7.3 |
| **#15** | Blande varmeledning ($\kappa$) og varmeovergang ($h$), eller summere termiske motstander feil | 9.1, 9.3 |
| **#16** | Avrundingsfeil som lander på nabo-alternativet — for få siffer gjennom kjeden (og heltallstipping i rundetelling) | 1.1, 1.3, 12.1 og alle |

---

## Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»; SKAL i førsteutkastet)

- **Kun eksamensrelevant stoff**; «kjenne til» sist og merket (gjelder særlig
  presesjon i 4.2, rakett i 3.2, konveksjon og Wien i 9.2, varmestrøm i
  strømmende medium i 10.2, og måle-/usikkerhetsdelen i 0.1/12.1).
- **Korte avsnitt** (2–4 setninger), aktiv «du»-form, konkret norsk knagg før
  formalismen. Godt, flytende norsk; ALDRI telegramstil. Presisjon vinner ved
  tvil.
- **Meningsfulle oppgaver:** hver oppgave er synlig eksamensforankret.
  Sjanger-/nivåmetadata skrives som en LEDENDE parentes i `task`, f.eks.
  `(Eksamensnivå, sjanger T5 — kretsprosessoppgaven.)`, ALDRI midt i
  brødteksten. Ikke gjenta `difficulty` i teksten («(krevende)» skrives ikke i
  `task` — feltet vises i oppgavehodet).
- **Læringsløkke Teori → Eksempel → Oppgave** med `exercise`-blokker INLINE (se
  løkke-kontrakten øverst).
- **Ingen usett forkunnskap** (samme sted).
- **Deloppgaver på egen linje, fet merking:** a), b), c) i `task`/`solution`
  HVER på egen linje — `…\n\n**a)** …\n**b)** …`. ALDRI bak hverandre i løpende
  tekst; ikke bruk `subTasks`. Listemerking alltid med små bokstaver.
- **Nybegynner-inngang / ingen uforklart sjargong (UFRAVIKELIG).** Boka skal
  forstås av en som aldri har hatt faget:
  - **Sjangerkodene M1–M13 og T1–T14** skrives ut i klarspråk ved FØRSTE bruk i
    HVERT kapittel.
  - **Feilkodene #1–#16** glosses ved FØRSTE bruk PER KAPITTEL.
  - **Eksamens-metaspråk** forklares før bruk: «flervalgseksamen», «distraktor»,
    «hjelpemiddelkode C», «Rottmann» (den matematiske formelsamlingen som er
    tillatt hjelpemiddel), «formelark», «kontinuasjonseksamen», «gjeldende
    siffer», «gjenganger-score».
  - **Fysikktermer** forklares ved første bruk, ALDRI kaldt: «frilegemediagram»,
    «treghetsmoment», «Steiners sats», «dreieimpuls», «spinnsats»,
    «rullebetingelse», «krumningsradius», «kvalitetsfaktor $Q$», «overkritisk
    demping», «ekvipartisjon», «frihetsgrad», «adiabat», «isokor», «isobar»,
    «tilstandsfunksjon», «reversibel», «kretsprosess», «virkningsgrad»,
    «effektfaktor», «termisk motstand», «emissivitet», «trippelpunkt», «kritisk
    punkt», «fikspunktiterasjon», «diskretisering».
  - Ingen kald kode i `competenceGoals` eller i aller første tekstboks.
  - **Kap. 0.1 har en «Slik leser du denne boka»-orienteringsboks** (type `text`
    eller `tip`, **ALDRI `definition`** — det ville endret flashcard-kvoten) med:
    karakterskalaen A–F og at C er en god og vanlig karakter; eksamensformen i
    tre linjer (4 timer, ~40 flervalgsspørsmål A–F, 1 poeng riktig / 0 feil);
    kompakt liste over sjangrene M1–M13 og T1–T14; kompakt liste over feilkodene
    #1–#16 med at de har et samlet register; og en eksplisitt innramming av de
    tunge symbolene leseren møter senere: «du trenger ikke forstå
    $\Delta S=nC_V\ln(T_2/T_1)+nR\ln(V_2/V_1)$ eller
    $\mathbf{L}=\mathbf{L}_\text{spinn}+\mathbf{L}_\text{bane}$ ennå — de
    forklares der de brukes».
- **Del 0-pakken (kap. 0.1):**
  - **«Lite tid?»-boks** (`tip`) med hurtigrute 3–5 dager og ukeplan bygget av
    summerte `estimatedMinutes`. **Bokas sum er 4 210 min ≈ 70 timer** (2 890 min
    på de 37 innholdskapitlene + 1 320 min på de elleve prøvekapitlene —
    etterregnet 30. juli 2026). Boksen sier at anslagene er LESEtid, og at den
    som regner for hånd bør legge på ca. ×1,5.
  - **Kildenote** for frekvens-empirien — ordrett eller trofast omskrevet fra
    «Sannferdig kildenote» under.
  - **Sjanger-/prosedyrekort på ÉN side** — kortet SELV (sjanger → én linjes
    oppskrift → hvilken halvdel av settet den bor i → vanligste felle), ikke en
    lenkeliste.
  - **Deltidsrute** 10–12 uker (~5–6 t/uke): Del 0 → mekanikk 1→2→3→4→5 →
    termofysikk 6→7→8→9→10 → numerikk 11 → 12.1 spres utover → de tre
    øvingseksamenene fordelt på tre ulike helger, aldri stablet i siste uke.
  - **«lese mye, skrive lite»-boks** — legitim rute for lese-øveren (les
    oppgaven → formuler framgangsmåten i én setning → les fasiten som en
    løsningsforslag-skriver) + minimumsrådet: **gjennomfør minst én
    øvingseksamen på tid, med formelarket og en enkel kalkulator ved siden av.**
    Fire timer med 40 tette flervalgsspørsmål er en tempoferdighet.
  - **`collapsible` «Formelarket i praksis»** (§H3) — bokas samlede oppslagskort
    med toveismerkingen.
  - **`collapsible` «Todelingen i praksis»** — en halv side som viser hvordan
    settet er bygget (1–20 mekanikk, 21–40 termofysikk, kretsprosess-klynge,
    numerisk spørsmål til slutt) og hva det betyr for tidsbudsjettet.
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. X.Y](/tfy4115/tfy4115-X-Y)`; død «se kapittel»-tekst er
  FORBUDT (aldri lenker i `title`-felt). **`/bok`-prefikset ble fjernet
  27. juli 2026 — skriv ALDRI `/bok/tfy4115/…`.** Lenk kun til filer som finnes
  på disk når du skriver; byggeleder legger inn resten ved wiring.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter hver prøvefasit og etter hver
  øvingseksamen-fasit.
- **Lett innstegsoppgave** (difficulty `lett`, ren gjengivelse med egne ord eller
  ren enhetsomregning) tidlig i teorikapitler der første oppgave ellers er full
  eksamenssjanger.
- **Hverdagsanker + verdens-caser:** abstrakte kjernetemaer åpner med et konkret
  anker før apparatet — en sykkel som ruller nedover, en dør som er tung å få i
  gang, en bilmotor, et kjøleskap som varmer opp kjøkkenet, en yttervegg med
  glava, en termos, en jernbaneskinne på en varm dag. Innpakningene er virkelige
  situasjoner, aldri «en medstudent skriver …»-metaeksempler.
- **Øktmerking:** alle kapitler med `estimatedMinutes` > 45 — det vil si alle
  utenom 0.1 (35) og 12.1 (40) — har tidsanslag per løkke («## Løkke 2 —
  adiabaten (~15 min)») eller «— naturlig pausepunkt —»-markører. De ti
  drillkapitlene (75–90 min) og de tre øvingseksamenene (240 min) skal ha
  eksplisitte pausepunkter.
- **Hint + difficulty-spredning:** alle `exercise` har utfylte `hints` (første
  hint = loven, formelen eller første grep — ALDRI konklusjonen og ALDRI
  bokstavsvaret). Unntak: den merkede kalde banken i kap. 12.1. Boka har flere
  genuint krevende oppgaver merket `vanskelig`.
- **Fasitmønster-variasjon:** se §M5.
- **Meta-fasit forbudt:** ingen «en A-besvarelse ville her ha …». Skriv
  resonnementet ut.
- **Signalbokser ETTER oppgaven:** en boks som varsler hva en drilloppgave
  tester, plasseres etter oppgaven eller som collapsible hint, aldri foran.
- **Tidsbudsjett-konsistens:** der en oppgaves eller prøves deklarerte tid avviker
  fra summen av deltidene, forklares differansen (anbefalingene er regnetid;
  resten er lesing av oppgaveteksten, kladd og gjennomlesing).
- **Juridisk:** innholdet fremstiller seg ALDRI som offisielt eller
  NTNU-tilknyttet, og lover aldri eksamensutfall. Uavhengighetsdeklarasjonen
  vises automatisk av plattformen.

---

## Kildegrunnlag og sannferdig kildenote (UFRAVIKELIG — produkteier)

Arkivet `~/Desktop/Eksamner/NTNU/TFY4115/` er verifisert 30. juli 2026 og
inneholder **50 filer**:

- **25 oppgavesett** og **25 løsningsforslag** — arkivet er komplett parvis
  (hvert oppgavesett har sitt løsningsforslag).
- Tre navnekonvensjoner: `E_TFY4115_ÅÅMMDD` / `L_…` (2019–2020),
  `E-TFY4115-DDmmmÅÅÅÅ` / `L-…` (2004–2016), og fire enkeltfiler
  (`Eks17des`, `Eks18augTFY4115`, `eksamen_tfy4115_h2018` med sine løsninger).
- **Semesterfordelingen, presist:** av de 25 unike eksamenene er **16 ordinære
  desember-eksamener** (emnet undervises om høsten) og **9 august-eksamener**,
  altså utsatt/kontinuasjonseksamen. **Det finnes ingen mai/juni-eksamener i
  arkivet.** Skriv derfor aldri «vår-eksamen» om august-settene — de er
  kontinuasjonseksamener til høstsemesteret. (Filnavnene rommer «aug», og en
  maskinell klassifisering som leser dem som «vår» tar feil.)
- Enkelte eldre løsnings-PDF-er (2006, 2008) er skannet uten OCR og er kun
  temaregistrert.

**Bindende språkregler:**

1. **Det finnes INGEN sensorveiledninger i dette arkivet.** Skriv
   «løsningsforslagene viser …», «løsningsforslagene fremhever hvilken lov …».
   Ordet `sensorveiledning` (i alle bøyninger) er grep-forbudt utenfor kap. 0.1s
   kildenote, der det bare kan opptre i en setning som sier at slike ikke
   foreligger. Merk at `EKSAMENSANALYSE.md` innledningsvis skriver
   «løsningsforslag/sensorveiledning» — **den formuleringen skal ikke inn i
   boka**.
2. **Arkivet stopper i 2020.** Den nyeste formen vi kan dokumentere er 40
   flervalgsspørsmål A–F med todelingen mekanikk 1–20 / termofysikk 21–40. Boka
   skal ALDRI påstå at formen er bekreftet etter 2020. Den skal si at emnet er
   aktivt (høst 2026) og at emnebeskrivelsen fremdeles angir mekanikk OG
   termofysikk som pensum — og at studenten bør sjekke sitt eget semesters
   emneside og eventuelle nyere sett.
3. **Frekvenstallene er gjenganger-scorer, ikke telte brøker.** Se
   «Frekvenstall» i sjangerkatalogen. Ingen oppdiktede «N av M»-påstander.
4. **Modellbesvarelser, arbeidsprotokoller og fasiter i boka er NYSKREVNE av
   Skolesaga.** De omtales aldri som ekte studentbesvarelser og aldri som hentet
   fra et løsningsforslag.
5. **Ingen andre kildetyper nevnes** — ingen «karakterstatistikk», ingen
   «eksamensrapport», ingen «sensorpanel». Kun oppgavesett, løsningsforslag og
   NTNUs emneside.

**Opphavsrett på løsningsforslagene.** Løsningsforslagene kan brukes som
**fasitkilde** — til å kontrollere at fysikken, metodevalget og tallene i boka er
riktige — men **aldri gjengis ordrett eller nær parafrasert**. Oppgavesettene er
mønster, aldri kopikilde. Formlene er standard fysikknotasjon og ikke
opphavsrettslig beskyttet.

**Kildenoten i kap. 0.1** — bruk denne formuleringen eller en trofast
omskrivning:

> Prioriteringene i denne boka bygger på NTNUs eksamensarkiv for TFY4115:
> **25 oppgavesett fra 2004 til 2020, hvert med tilhørende løsningsforslag** —
> 16 ordinære desember-eksamener og 9 august-eksamener (utsatt eksamen).
> Løsningsforslagene fra 2017–2020 er lest fullstendig, 2011, 2013, 2015 og 2016
> grundig, og 2004-settet er lest for å dokumentere den eldste, rene
> utledningsformen; resten er temaregistrert. **Arkivet inneholder ikke egne
> sensorveiledninger** — det vi vet om hva som premieres, kommer fra
> løsningsforslagene selv. Fordi settene har en fast todeling, oppgir vi
> gjenganger-score (hvor stor andel av settene et tema inngår i), ikke en eksakt
> brøk: «~100 %» betyr at temaet finnes i praktisk talt hvert sett.
> **Viktig forbehold: arkivet stopper i 2020.** Den nyeste formen vi kan
> dokumentere er 40 flervalgsspørsmål A–F med mekanikk i spørsmål 1–20 og
> termisk fysikk i 21–40. Emnet er aktivt (eksamen 25. november 2026), og
> emnebeskrivelsen angir fremdeles både mekanikk og termofysikk som pensum — men
> sjekk emnesiden for ditt eget semester, og et nyere sett hvis du får tak i
> det. Alle oppgaver, tall og løsninger i boka er nyskrevet av Skolesaga.

Emneopplysningene (aktivt høsten 2026, eksamen 25. november 2026 kl. 15,
hjelpemiddelkode C, anbefalt for Elektronisk systemdesign og innovasjon,
Kybernetikk og robotikk, Nanoteknologi) er **verifisert mot NTNUs emneside
30. juli 2026**. Kilden er emnesiden, ikke arkivet, og det skal sies der
opplysningene først presenteres: «tallene er hentet fra NTNUs emneside — sjekk
den for ditt eget semester, siden vurderingsordninger og hjelpemidler kan endres».

**Bruk ALDRI den literale markøren `(verifiser)` i kapittelfilene** —
`sjekk-bok.py` feiler på den. Er noe genuint usikkert, skriv usikkerheten ut i
klartekst.

---

## Opphavsrett (ufravikelig)

ALLE oppgaver, tall, masser, vinkler, temperaturer, innpakninger og figurer er
**NYSKREVNE** — egne verdier og egne kontekster. Sjangrene og oppgavemalene fra
skjelettet er malen, aldri originaloppgavene. **Skjelettets mønstereksempler er
selv omskrivninger og skal varieres videre, ikke kopieres ordrett inn som
oppgaver.** Pensumlitteratur refereres (forfatter/verk/begrep), aldri siteres i
lengde.

---

## Forbudt-termer (grep-sjekkes — skal gi 0 treff)

Kjør ved ferdigmelding (`sjekk-bok.py` tar regexen som argument 2; den hopper
over `tfy4115-0-1`, som er avgrensnings-/metakapitlet):

```bash
python3 scripts/hoyskolebok/sjekk-bok.py tfy4115 \
  "Prioritet: perfekt|en A-besvarelse ville|ville ha drøftet|sensorveiledning|sentrifugalkraft|/bok/"
```

- **`Prioritet: perfekt`** — skrives i boka som «høyeste prioritet — dette må
  sitte».
- **meta-fasit** — «en A-besvarelse ville», «ville ha drøftet»: skriv
  resonnementet ut.
- **`sensorveiledning`** — finnes ikke i dette arkivet. Skriv
  «løsningsforslag». (Eneste tillatte forekomst er kildenoten i kap. 0.1, som
  sier at slike ikke foreligger.)
- **`sentrifugalkraft`** — fiktiv kraft i det roterende systemet; boka arbeider i
  inertialsystemer og bruker «sentripetalakselerasjon» / «resultanten inn mot
  sentrum». Eneste tillatte forekomst er en eksplisitt merket
  moteksempel-forklaring i en `warning`.
- **`/bok/`** — prefikset ble fjernet 27. juli 2026. Interne lenker er
  `/tfy4115/tfy4115-X-Y`.

I tillegg skal disse kontrollene gi 0 avvik:

```bash
python3 - <<'PY'
import json, glob, re, sys
# 1) avgrensede emner må stå sammen med avgrensningen
mistenkt = re.compile(r"elektromagnetis|magnetfelt|kondensator|induksjon|"
                      r"bølgelengde\s+i\s+interferens|brytningsindeks|Snell|"
                      r"Bernoulli|oppdrift|viskositet|relativit|kjernefysikk", re.I)
unntak   = re.compile(r"ikke pensum|aldri pensum|0 treff|utenfor|avgrens|"
                      r"ikke i pensum|trenger du ikke|prioriteres ikke", re.I)
# 2) (verifiser)-markøren feller porten
forbudt  = re.compile(r"\(verifiser\)", re.I)
# 3) termofysikk skal ALDRI merkes som utfaset
utfaset  = re.compile(r"termofysikk[^.]{0,80}(utfaset|faset ut|historisk|tillegg til pensum)", re.I)

def flat(n):
    if isinstance(n, str): yield n
    elif isinstance(n, dict):
        for v in n.values(): yield from flat(v)
    elif isinstance(n, list):
        for v in n: yield from flat(v)

def objekter(n, sti=""):
    if isinstance(n, dict):
        yield sti, " ".join(flat(n))
        for k, v in n.items():
            if isinstance(v, (dict, list)): yield from objekter(v, f"{sti}.{k}")
    elif isinstance(n, list):
        for i, v in enumerate(n): yield from objekter(v, f"{sti}[{i}]")

avvik = 0
for f in sorted(glob.glob("src/lib/data/chapters/tfy4115-*.json")
                + glob.glob("src/lib/data/quiz-staging/tfy4115-*.json")):
    for sti, t in objekter(json.load(open(f, encoding="utf-8"))):
        for m in forbudt.finditer(t):
            print("FORBUDT", f, sti, m.group(0)); avvik += 1
        for m in utfaset.finditer(t):
            print("TERMO-UTFASET", f, sti, m.group(0)[:120]); avvik += 1
        if mistenkt.search(t) and not unntak.search(t):
            print("AVGRENSNING", f, sti, repr(t[:160])); avvik += 1
print("avvik:", avvik)
sys.exit(1 if avvik else 0)
PY
```

Merk at «bølgelengde» i seg selv er lovlig (Wien, kap. 9.2) — mønsteret over er
smalt med vilje. Trenger du å nevne et avgrenset emne, skriv avgrensningen i
samme setning.

> **⚠️ ALDRI `grep -o` med `.{0,N}`-kontekst mot kapittelfilene.** JSON-filene er
> kompakt tekst på få, svært lange linjer; kombinasjonen gir kvadratisk arbeid og
> sprengte buffere (17 GB RAM på byggemaskinen 25. juli 2026, som har 8 GB
> fysisk minne). `grep -c` og `grep -l` UTEN `-o` og uten `.{0,N}` er trygt.
> Trenger du kontekst, bruk python-sjekkeren over.

---

## Kryssbok-lenker (verifisert mot disk 30. juli 2026 — alle filene finnes)

Lenkeform `[tittel](/<courseId>/<id>)`. **Titlene under er de faktiske
kapitteltitlene og skal brukes ordrett.** Lenk ALDRI til en fil som ikke finnes
(`sjekk-bok.py` fanger døde lenker).

| courseId | id | Tittel (ordrett) |
|---|---|---|
| `r2` | `r2-2-1` | Repetisjon av derivasjon |
| `r2` | `r2-2-4` | Bestemt integral som grenseverdi |
| `r2` | `r2-3-1` | Variabelskifte (substitusjon) |
| `r2` | `r2-5-1` | Vektorer i tre dimensjoner |
| `r2` | `r2-5-2` | Vektorkoordinater og regning |
| `fysikk2` | `fysikk2-1-1` | Vektorer og komponenter |
| `fysikk2` | `fysikk2-1-2` | Bevegelse i to dimensjoner |
| `fysikk2` | `fysikk2-1-4` | Sirkelbevegelse og sentripetalkraft |
| `fysikk2` | `fysikk2-2-1` | Newtons gravitasjonslov |
| `fysikk2` | `fysikk2-2-2` | Gravitasjonsfelt og gravitasjonspotensial |
| `fysikk2` | `fysikk2-2-5` | Gravitasjon og energi |

**To korreksjoner mot skjelettet (verifisert 30. juli 2026 — skjelettet har feil
tittel her):**

1. Skjelettet lenker **`fysikk2-2-3`** med tittelen «Gravitasjonell potensiell
   energi». Fila heter i virkeligheten **«Satellittbevegelse og romfart»**.
   Trenger du gravitasjonell potensiell energi, lenk **`fysikk2-2-5`
   «Gravitasjon og energi»**; trenger du satellittbaner, lenk `fysikk2-2-3` med
   den riktige tittelen.
2. Skjelettet skriver **`fysikk2-2-2`** som «Gravitasjonsfelt». Den fulle,
   faktiske tittelen er **«Gravitasjonsfelt og gravitasjonspotensial»** og skal
   brukes ordrett.

**Refereres i KLARTEKST, aldri som lenke** (ikke verifisert bygget, eller ikke
relevant å lenke):
- **Kjemi 1 / Fysikk 1** (VGS) for termofysikkens elementære forkunnskaper
  (temperatur, mol, gasslov). Skriv «du kan ha møtt dette i Fysikk 1 eller
  Kjemi 1 på videregående» — aldri en markdown-lenke.
- **TFY4125** (søsteremnet med elektromagnetisme), **FYS1001** og **FYS1120**
  (UiO) — nevnes bare der kontrasten er poenget, i klartekst.

Interne lenker: `[kap. X.Y](/tfy4115/tfy4115-X-Y)`. **Aldri `/bok/…`.** Lenker
til kapitler som ennå ikke er skrevet, legges inn først når fila finnes på disk —
koordineres av byggeleder ved wiring.

---

## Tekniske feller (de som faktisk har ødelagt bøker)

**T1. LaTeX i JSON = dobbel backslash — og dette faget er fullt av de farligste
sekvensene.** Enkel backslash gjør LaTeX-kommandoen til et **kontrolltegn**, og
KaTeX kaster ikke alltid feil — den rendrer bare *galt*. Sekvensene som rammer
TFY4115 direkte:

| Skrevet med ÉN backslash | Blir | Opptrer i |
|---|---|---|
| `\to` | vertikal tabulator | grenseoverganger, prosesspiler |
| `\times` | ingen match / feil | kryssprodukt $\mathbf{r}\times\mathbf{F}$ |
| `\theta` | ingen match | skråplanvinkel, konisk pendel |
| `\tau` | ingen match | kraftmoment, tidskonstant |
| `\nabla` | ingen match | temperaturgradient |
| `\neq` | ingen match | ulikheter |
| `\beta` | BEL / feil | banevinkel, volumutvidelseskoeffisient |
| `\rho` | ingen match | tetthet, krumningsradius |
| `\t`, `\n`, `\r`, `\b`, `\f`, `\v`, `\a` | TAB, linjeskift, CR, BEL, FF, VT, BEL | `\text{}`, `\rho`, `\varepsilon`, `\frac` … |

**Derfor: generer ALLTID med `json.dump`**, og skriv kildeteksten som Python
rå-strenger (`r"$\tau = I\alpha$"`) eller med doble backslasher. Skriv aldri
JSON-fila for hånd. Porten `sjekk-latex.py` fanger kontrolltegn — kjør den.

**T2. `$`-fella.** Ethvert dollartegn som ikke er matte MÅ escapes som `\$`
(energipriser i varmepumpe-caser, strømpris i fjernvarme-caser). To uescapede
`$` på samme linje pares av rendreren og setter alt imellom som formel.

**T3. `chapterNumber` alltid del-basert.** «8.1», aldri «24». Prøvekapitler:
«8.P». Lineær nummerering ødelegger bokforsidens seksjonsinndeling.

**T4. Ingen tom `collapsible`.** Feltet heter `content` og skal inneholde
blokker. En `text`-nøkkel eller tom array rendrer som en tom boks.

**T5. Ingen dupliserte blokk-id-er** innen et kapittel (porten sjekker), og
ingen dupliserte quiz-spørsmål på tvers av kapitler i samme del.

**T6. Unicode-brøker og rå LaTeX i prosa** er forbudt: skriv `$\tfrac12$`, ikke
«½», `$T^4$`, ikke «T⁴», `$\gamma$`, ikke «γ» i en formelsammenheng — og aldri
`\frac{1}{2}` utenfor `$…$` (det rendres som rå tekst til leseren; dette har
skjedd i live bøker). Unntaket er `title` og `description`, som er ren tekst
(§0.6) — der tas skjelettets ordlyd som den står.

**T7. `/bok`-prefikset finnes ikke lenger** (fjernet 27. juli 2026). Alle interne
lenker er `/tfy4115/tfy4115-X-Y`.

---

## Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json;json.load(open('fil'))"` på HVER fil du har skrevet
   (kapittel + quiz-staging).
2. **Kvotetelling** mot §K: toppnivå `definition`-blokker med `title` =
   flashcard-kvoten; antall quiz-spørsmål = quiz-kvoten. Aldri under.
3. **Regnekontrakten §R:** hvert talleksempel etterregnet med `python3`; hver
   syklus sjekket mot Carnot-grensen; hvert entropifortegn sjekket; hver
   fortegns-/«alltid»-påstand parametersjekket; alle distraktortall REGNET FRAM
   fra den feilen de skal representere.
4. **Notasjonskontrakten §N:** de fem symbolkollisjonene ($\gamma$, $p$, $T$,
   $R$, $S$) håndtert og nevnt i symbollisten i hvert delkapittel; vektorer fete,
   skalarer ikke; retning oppgitt på hver vektorstørrelse; **kelvin overalt i
   termodelen**; enhet og 3–4 siffer gjennom kjeden, 2–3 i sluttsvaret.
5. **Hjelpemiddelkontrakten §H:** hver formel i Symbol- og formellisten merket
   `[står på det utdelte arket]` / `[Rottmann]` / `[må kunne brukes eller
   utledes aktivt]`; ingen formel eller konstant presentert som puggestoff; ingen
   oppskrift som krever mer enn en enkel kalkulator; ingen påstand om at egne
   håndskrevne notater er tillatt.
6. **Flervalgskontrakten §M:** «Rask vei til tall»-avsnitt i hvert teori- og
   drillkapittel; statiske sett har seks alternativer A–F, quiz har fire;
   FORM-TELL og LENGDE-TELL målt **manuelt per fil** (fasit unikt lengst i under
   30 %, unikt kortest i under 30 %; numeriske alternativer med samme format og
   hver med sin konkrete regnefeil); fasitbokstavene stokket; setningen om at
   quizen har fire alternativer mens eksamen har fem–seks står i 0.1 og 12.1.
7. **Rettekontrakten §S:** løsningsforslagene i 12.2–12.4 og D-prøvene er skrevet
   som «avgjørende lov + få regnelinjer + bokstavsvar» med felle-merking på hvert
   galt alternativ; begge modi (symbolsk + rask vei) finnes for hver
   kjerne-sjanger; ingen «sensorveiledning»-påstand noe sted.
8. **Figurkontrakten §G:** hvert figurløfte innfridd med ekte SVG; **hver figur
   fysikk-kontrollert mot §G3-listen** (kraftretninger, syklusens omløpsretning,
   adiabat brattere enn isoterm, temperaturprofil brattest i dårligst leder,
   Wien-forskyvning, monoton $C_V(T)$, fasediagrammets helninger); ingen fiktiv
   sentripetal-/sentrifugalkraft utenfor merkede moteksempler;
   `python3 scripts/hoyskolebok/last-opp-figurer.py <arbeidstre> tfy4115` kjørt,
   og `python3 scripts/hoyskolebok/sjekk-figurer.py tfy4115` grønn (porten tester
   Storage, ikke disk).
9. **Læringsløkke:** `content[]` veksler teori→eksempel→oppgave med `exercise`
   inline — ikke all teori topp / alle oppgaver bunn.
10. **Forkunnskapsdekning:** gå gjennom hver `exercise` og bekreft at den bare
    hviler på stoff introdusert tidligere i kapitlet eller i en referert
    forkunnskap.
11. **Nybegynner-inngang:** alle koder (M1–M13, T1–T14, #1–#16) og alle
    fysikktermer forklart ved første bruk per kapittel; ingen kald kode i
    `competenceGoals` eller første tekstboks; «Slik leser du denne boka»-boksen
    på plass i 0.1 (type `text`/`tip`, ALDRI `definition`).
12. **Symbol- og formelliste** finnes i hvert teori-/drillkapittel, med den
    literale tittelen «Symbol- og formelliste», åpningsnotisen, tre-kolonners
    tabell og formelmerkingen.
13. **Forkunnskaper-blokk** med overskriften `## Forkunnskaper — sist du var her`
    i hvert kapittel utenom Del 0, og med nøkkelformlene VIST i Del 4–5 og 7–11.
14. **Ingen tom collapsible**; ingen dupliserte blokk-id-er.
15. **Kap-referanser** i fasiter/forkunnskaper er markdown-lenker til
    eksisterende filer, uten `/bok`-prefiks.
16. **Fasitmønster** sjekket i alle ensartede fasitlister — riktig svar varierer
    posisjon (aldri «alle a», aldri «alle felle»).
17. **Hints** utfylt på alle exercises (unntatt den merkede kalde banken i 12.1);
    første hint røper aldri konklusjonen eller bokstavsvaret.
18. **Frekvenstall** = skjelettets gjenganger-scorer, formulert som «i praktisk
    talt alle sett (~100 %)»; ingen oppdiktet «N av M».
19. **Kildepåstander** følger «Sannferdig kildenote»: 25 oppgavesett med
    løsningsforslag 2004–2020 (16 desember + 9 august), **ingen
    sensorveiledninger**, arkivet stopper i 2020, alt innhold nyskrevet.
20. **Øktmerking** i kapitler > 45 min; prøvekapitler deklarerer «4 prøver à
    ~25–45 min (~120 min)» + deling over flere kvelder.
21. **Avgrensning:** 0 treff på elektromagnetisme, bølger/interferens, optikk,
    fluidmekanikk, relativitet og kjernefysikk utenfor Del 0-avgrensningen — og
    **0 steder** der termofysikk omtales som utfaset, historisk eller som et
    tillegg.
22. Porter, alle grønne:
    `python3 scripts/hoyskolebok/status-bok.py tfy4115` ·
    `python3 scripts/hoyskolebok/sjekk-bok.py tfy4115 "<forbudt-regex>"` ·
    `python3 scripts/hoyskolebok/sjekk-latex.py tfy4115` ·
    `python3 scripts/hoyskolebok/sjekk-skjelett.py tfy4115` ·
    `python3 scripts/hoyskolebok/sjekk-figurer.py tfy4115` ·
    `python3 scripts/hoyskolebok/sjekk-alternativref.py tfy4115` ·
    (etter wiring) `python3 scripts/hoyskolebok/sjekk-fasitfordeling.py tfy4115` ·
    `npx tsx scripts/hoyskolebok/quiz-lengdesjekk.mjs tfy4115`.
23. **Ferdigmelding krever rendringsbevis:** `npm run build` grønn + prod-server
    (`PORT=3057 npm run start`) og `curl` mot kapittel- og narrativ-ruter (200 +
    kapittelspesifikk streng). ALDRI meld ferdig uten dette.
