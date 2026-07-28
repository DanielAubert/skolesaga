# Byggekontrakt: PSY1010 Innføring i metode — teknisk kontrakt for kapittelforfattere

Gjelder ALLE forfatter-agenter for `psy1010`. Faglig innhold styres av
`SKJELETT.md` (per-kapittel-DNA + identitetsseksjon) — les ditt kapittels avsnitt
nøye, pluss `EKSAMENSANALYSE.md` ved behov. Denne kontrakten definerer format og
krav. Arketype: **HYBRID** — primær **drøfting** (`DNA-drofting.md`), med lånte
**regnefag**-elementer (`DNA-regnefag.md`) i tallkapitlene. Hybrid-valgene er
dokumentert i skjelettets §2b; les den før du bygger et tallkapittel.

## LÆRINGSLØKKE-KONTRAKT (ufravikelig byggekrav — produkteier 9. juli 2026)

Fra skjelettets topp, tas inn her som bindende byggekrav:

- HVERT kapittels `content[]` struktureres som gjentatte små løkker
  **Teori → Eksempel → Oppgave**. `exercise`-blokker plasseres INLINE i
  `content[]` rett etter teorien/eksempelet de trener — ALDRI all teori øverst
  med oppgavene samlet nederst.
- **Ingen usett forkunnskap:** ingen oppgave får kreve et begrep, en regel, en
  formel eller en metode som ikke er introdusert tidligere i kapitlet (t.o.m.
  eksempelet rett foran) eller i et tidligere kapittel referert i
  Forkunnskaper-blokken. Flytt teoribiten tidligere ved behov; bygg
  oppgaveprogresjonen bit for bit.
- **Unntak:** øvingseksamen-/prøve-/modellbesvarelseskapitler (Del 8) følger sin
  egen arketype (komplett oppgave-/case-sett først, løsninger i collapsibles).
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer kun
  REKKEFØLGEN.

## Filplassering

Ett JSON-dokument per kapittel: `src/lib/data/chapters/<kapittel-id>.json`
(f.eks. `psy1010-3-1.json`). IKKE rør `_registry.json`, `_all.json`,
`textbook-courses*.ts` eller `quiz-data*.ts` — wiring gjøres sentralt (fase 5).
Generer JSON via python `json.dump` (garantert gyldig escaping — LaTeX i JSON = `\\`).

## Kapittel-JSON (toppnivå)

```json
{
  "id": "psy1010-3-1",
  "courseId": "psy1010",
  "chapterNumber": "3.1",
  "title": "…(fra skjelettet)…",
  "description": "…(fra skjelettet)…",
  "estimatedMinutes": 55,
  "competenceGoals": ["kunne regne ut varians og standardavvik og tolke spriket mellom sentralmålene", "…"],
  "content": [ …blokker… ],
  "exercises": []
}
```

`chapterNumber` = skjelettets `number` (`<del>.<nr>`, f.eks. `0.1`, `3.1`;
prøvekapitler `<del>.P`). `competenceGoals`: 2–4 «kunne …»-formuleringer fra
kapittelets begrepskontrakt.

## Blokktyper (eksakte felt)

Strukturmønster som i plattformen (referanse: `src/lib/data/chapters/econ1310-2-1.json`
— men metode-/statistikk-innhold):
- `text`: `{ "id", "type": "text", "content": "markdown + LaTeX $...$/$$...$$" }`
- `definition`: `{ "id", "type": "definition", "title": "Begrep", "content": "…" }`
  — **title OBLIGATORISK** (flashcards genereres KUN fra toppnivå
  definition-blokker med title). PSY1010-profil: **begrep↔definisjon↔kontrastbegrep**
  (Type I↔II, SD↔SE, kasus↔N=1, mediator↔moderator) — det er nøyaktig presisjonen
  deloppgavene tester (skjelettets §2b).
- `theorem`: `{ "id", "type": "theorem", "title", "content" }` (for kjernesetninger/
  -formler der det gir mening — f.eks. SE = SD/√n, p-verdiens definisjon).
- `example`: `{ "id", "type": "example", "title", "problem", "solution" }`
  (solution = A-besvarelse; i tallkapitler: gjennomregnet steg for steg med
  intuisjonsforklaring per steg OG avsluttende prosatolkning — se hybrid-regelen).
- `tip` / `warning`: `{ "id", "type", "title", "content" }`
- `exercise`: `{ "id", "type": "exercise", "exercise": { "id", "number", "type": "classic", "difficulty": "lett"|"middels"|"vanskelig", "task", "solution", "hints": [] } }`
  — +subTasks ved behov (men bruk IKKE subTasks-feltet for a)/b)/c) — se Leserkrav).
  ALDRI solutionVideo/allowsUpload/allowsCanvasDrawing/answer.
- `collapsible`: `{ "id", "type", "title", "buttonText", "content": [blokker] }`
  — brukes til **Symbol- og formelliste**, pensumkart/repetisjon og prøve-collapsibles.
  ALDRI tom — `content` er feltnavnet og skal ha blokker (aldri `text`-nøkkel/tom array).

Blokk-id-er: `<kapittel-id>-<løpenavn>` (unik i kapitlet).

## Obligatorisk kapittelstruktur (fra DNA-drofting + skjelettets temakapittel-DNA)

Alltid, i denne rekkefølgen først i kapitlet:
1. `tip` **Eksamensvinkel** (frekvens, vekt, sjangre — fra skjelettet).
2. `text` **Forkunnskaper** (se Leserkrav): kapitler i boka + kryssbok-lenker
   `[tittel](/psy1010/<chapterId>)` — KUN til kapitler som finnes i
   `src/lib/data/chapters/`; «kan leses uten forkunnskaper» der ingen.

Og SIST i kapitlet (alle kapitler som bruker symboler — også drøftingskapitler som
bare nevner r eller p): `collapsible` **Symbol- og formelliste** (title «Symbol- og
formelliste», buttonText «Vis symboler og formler»): første linje «Oppslagsverk —
alt her forklares underveis i kapitlet.», deretter markdown-tabell
`| Symbol | Betydning |` + «**Formler i dette delkapitlet:**» med display-LaTeX +
tolkning. ALLE symboler/formler brukt i delkapitlet — per delkapittel, aldri arv
(skjelettets §2c). Unntak kun for helt symbolfrie kapitler.

Og alltid: `warning` **Typiske feil** (fra skjelettets feilkoder — samles i 8.6)
+ begrepsbank-definisjoner til flashcard-kvoten (hver stor begrepsbank åpner med
notisen «flashcard-/repetisjonsstoff — hopp trygt over ved førstegangslesing;
tidsanslaget gjelder kjernestoffet») + `collapsible` repetisjon (teorikapitler).

- **Temakapittel** (følger drøftings-DNAets blokkrekkefølge, skjelettets §2b):
  eksamensvinkel → forkunnskaper → symbol-/formelliste → `text` temaet i fagets
  landskap → `definition` kjernebegreper (flashcard-kilden — toppnivå med title!)
  → `text` posisjoner/spenninger (drøftingsaksen) → `example` anvendelse →
  `warning` **Typiske feil** → `exercise` → `collapsible` pensumkart. Løkke-kravet
  over gjelder: teori/eksempel og tilhørende `exercise` veksles INLINE.
- **Tall-/regnekapittel** (hybrid-lån, DNA-regnefag: kap. 2.3, 3.1–3.4, 5.3 + drill
  8.3): gjennomregnede `example`-blokker steg for steg med intuisjon per steg,
  `exercise`-serier med stigende vanskelighetsgrad som ender på eksamensnivå, alle
  med `solution` + `hints`. Snille tall (varians 2,25 → SD 1,5) — nyskrevne analoger
  til veiledningenes historiske tall. **Tolkningskrav (gjelder ALLE utregninger):**
  hvert regnestykke avsluttes med prosatolkning av hva tallet betyr i studien
  («SD vs. SE i ord», «hva 9 % delt varians innebærer»). En utregning uten tolkning
  er ikke ferdig. Hver regneoppgave OPPGIR formelen i oppgaveteksten (slik eksamen
  gjør); «kjenn denne»-formler (SE = SD/√n) merkes som A-plusspoeng.
- **Metakapittel** (Del 0): «Slik leser du denne boka»-orienteringsboks (type
  `text`/`tip`, ALDRI `definition`) med karakter-/vurderingsskala + kompakt kodeliste
  (T1–T8, feilkoder #1–#16) + at feil har et samlet register (8.6); «Lite tid?»-boks
  + kildenote for frekvens-empirien + prosedyre-/sjangerkort på ÉN side; deltidsrute
  (10–12 uker) og «lese mye, skrive lite»-boks.
- **Drillkapittel** (8.3, DNA-regnefag): løsningsoppskrift → gjennomregnet case med
  sensor-margnotater → 8–12 varianter på eksamensnivå med solution + hints.
- **Sjangerkapittel** (8.1–8.5): tip Eksamensvinkel → text Oppskrift med tidsbudsjett
  → example gjennomskrevet besvarelse med margkommentarer → exercise ×3–6 nyskrevne
  med momentliste-løsninger.
- **Feilvaksinekapittel** (8.6): de 16 feilkodene som gjennomgåtte varsellamper med
  «før/etter»-omskrivinger; de fire farligste (#1, #2, #4, #5) med dobbel dose.
- **Modellbesvarelseskapittel** (8.7–8.9, ≥3): «C-kjerne + A-plusspoeng-lag»-format
  (se skjelettets §2b) — nyskrevet oppgave → full besvarelse der C-kjernen står i
  brødtekst og A-laget er margmarkert → kort kommentert C-/stryk-variant →
  `tip` **Sensorblikket** (momentliste + hva som skiller nivåene).

## Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»; SKAL inn i førsteutkastet)

- **Forkunnskaper-blokk** rett etter Eksamensvinkel: (i) kapitler i denne boka
  kapitlet bygger på, (ii) forkunnskaper utenfor boka med markdown-lenke til
  eksisterende kapittel, format `[tittel](/psy1010/<chapterId>)` — sjekk at
  målfilen finnes i `src/lib/data/chapters/`. «Dette kapitlet kan leses uten
  forkunnskaper» der ingen.
- **Kun eksamensrelevant** stoff; «kjenne til» sist og merket.
- **Lett å lese**: korte avsnitt (2–4 setninger), «du»-form, konkret norsk knagg
  før formalismen — presisjon vinner ved tvil.
- **Meningsfulle oppgaver**: hver oppgave merket med eksamenssjanger og hva den
  trener, f.eks. «(Eksamenssjanger T1 — korrelasjonsoppgaven, gjenganger i 20 av
  29 sett.)» eller «(Eksamenssjanger T3 — regn hele t-sekvensen.)».
- **Læringsløkke Teori → Eksempel → Oppgave** med `exercise` INLINE (se over).
- **Deloppgaver på egen linje, fet merking:** a), b), c) i `task`/`solution` skal
  HVER starte på egen linje med merket i fet — `…\n\n**a)** …\n**b)** …`. ALDRI bak
  hverandre i løpende tekst. (Bruk ikke `subTasks`-feltet.)
- **Nybegynner-inngang / ingen uforklart sjargong:** HVER kode (oppgavekode T1–T8,
  feilkode #N, karakterbokstav) og all karaktersjargong («C-stoff»/«A-markør») +
  insider-term forklares i klarspråk ved FØRSTE bruk; ingen kald kode i
  `competenceGoals`/læringsmål eller i aller første tekstboks. Del 0 har «Slik leser
  du denne boka»-orienteringsboks (type `text`/`tip`, ALDRI `definition`).
- **Stokket flervalg i prøvetekster:** statiske flervalg i prøve-collapsibles har
  stokkede fasit-bokstaver (ALDRI «alle a»); prøve-tipen sier hvor flervalget bor.
  Quiz-filene beholder options[0]-invarianten.
- **Del 0-pakken:** «Lite tid?»-boks (hurtigrute + ukeplan fra summerte
  `estimatedMinutes`) + kildenote for frekvens-empirien (29 sett 2008–2025,
  10 sensorveiledninger V2018–V2025 — fra EKSAMENSANALYSE.md, aldri oppdiktet) +
  prosedyre-/sjangerkort på ÉN side.
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper/fasiter = markdown-lenke
  `[kap. X.Y](/psy1010/psy1010-X-Y)`; død «se kapittel»-tekst er FORBUDT.
- **Karakter-realisme:** «C er en god og vanlig karakter» eksplisitt i Del 0;
  «Prioritet: perfekt» FORBUDT (skriv «høyeste prioritet»); modellbesvarelser ærlig
  merket (en «C-besvarelse» ER C) + minst én autentisk B-/midtnivå-besvarelse.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter hver prøvefasit; lett
  innstegsoppgave (difficulty lett) tidlig i teorikapitler.
- **Hverdagsanker + verdens-caser:** abstrakte kjernetemaer åpner med hverdagsanker;
  eksempler er verdens-caser, ikke «en medstudent skriver …»-metaeksempler.
- **Tidsbudsjett-konsistens:** avvik mellom deklarert oppgavetid og sum deltider
  forklares. «Lite tid?»-boksen sier at anslagene er LESEtid (×1,5 ved håndskriving).
- **Hint + difficulty-spredning:** alle exercises har utfylte `hints` (første =
  formel/første grep, ALDRI konklusjonen); noen «(krevende)»-merkede oppgaver + én
  merket kald bank UTEN hint (fasit = momentliste) i eksamenstreningsdelen.
- **Fasitmønster-variasjon:** ALLE ensartede fasitlister varierer — aldri «alle a»,
  aldri «alle felle». Distraktorer gjengir ALDRI bokas egne nyanser som «galt» svar
  (nær-sanne distraktorer forklares i fasit-kommentaren).
- **Meta-fasit forbudt:** «en A-besvarelse ville ha drøftet …» erstattes av faktisk
  utskrevet drøftelse. Minst én modellbesvarelse lander SKARPT.
- **Signalbokser ETTER oppgaven:** varsel om hva en drilloppgave tester står etter
  oppgaven/som collapsible hint, aldri foran.
- **Frekvenstall = telte belegg:** «N av M sett» skal stemme eksakt med belegg-listen
  (tell!). **Sannferdige kildepåstander (UFRAVIKELIG):** kildenoten/beskrivelsen
  nevner KUN kildetyper som faktisk finnes i arkivet (29 oppgavesett 2008–2025,
  10 sensorveiledninger V2018–V2025 — se EKSAMENSANALYSE.md §8); modellbesvarelser
  omtales som nyskrevne, aldri som ekte studentbesvarelser.
- **Faglig sannhetskontroll (hybrid — regnefag-DNA):** ETTERREGN alle
  talleksempler numerisk; parametersjekk fortegns-/entydighetspåstander (f.eks.
  «store |t| gir små p», √n-effekten på SE) i python FØR skriving.
- **Øktmerking + prøvedeling + feilkode-gloss:** kapitler > 45 min har tidsanslag
  per løkke/pausepunkt-markører; lange modellbesvarelser har «— naturlig pausepunkt —»;
  feilkoder glosses ved første bruk PER KAPITTEL; tunge kapitler har «Sist du var
  her»-forkunnskapsblokk som VISER nøkkelformlene; boka har sitt samlede oppslagskort
  (her: **formel-minimum** — sentraltendens, s², SD, SE = SD/√n, SE(D), t, r², z, Ŷ).

## Faglig stil (ufravikelig for PSY1010 — fra skjelettets identitetsseksjon)

- **Primær arketype er drøfting** fordi sensor vurderer forståelse, begrepspresisjon,
  pensumforankring (Bordens & Abbott; Kvale & Brinkmann kap. 1; Johannessen m.fl.;
  forelesningene) og case-anvendelse — ikke fasitsvar. Alle kapitler følger
  drøftings-DNAets blokkrekkefølge.
- **Forståelse trumfer reproduksjon** — veiledningene er momentlister, ikke fasit.
  Uortodokse løsninger vurderes på egne premisser.
- **Relevansfilteret:** stoff honoreres bare når det gjøres relevant for spørsmålet;
  «jeg kan også dette»-utbrodering gir null (feil #15).
- **«Definer — anvend på caset — begrunn»** er bokas mantra (kap. 0.2); C-kjerne +
  A-lag-modellen styrer alle modellbesvarelser.
- **Regne-didaktikk (hybrid):** hver regneoppgave OPPGIR formelen (slik eksamen
  gjør); boka trener aldri formelpugging som mål. Hvert regnestykke ender i
  prosatolkning — forståelsen av tallet veier tyngre enn tallet (sensorregel).
- **Notasjonsstandard (AUTORITATIV — skjelettets §2c):** bruk EMNETS notasjon, ikke
  lærebok-alternativer. LaTeX i JSON skrives med `\\`.

  | Notasjon | Betydning |
  |---|---|
  | x̄ (x̄₁, x̄₂) | utvalgsgjennomsnitt |
  | μ | populasjonsgjennomsnitt (i H0/H1; «my/mu» godtas skriftlig) |
  | s², SD (= √s²) | utvalgsvarians, standardavvik; s² = ∑(x − x̄)²/(n − 1) |
  | SE = SD/√n (også sₘ, s_x̄) | standardfeil til gjennomsnittet |
  | SE(D) = Sp√(1/n₁ + 1/n₂) | standardfeil for differansen (Sp = samlet SD) |
  | t = (x̄₁ − x̄₂)/SE(D) | t-observator; avvik målt i standardfeil |
  | r, r² | Pearson-korrelasjon; forklart/delt varians |
  | Ŷ = a + bX | regresjonsligning: predikert Y, intercept a, regresjonsvekt b |
  | H0, H1 (Ha) | null- og alternativ-/forskningshypotese |
  | α, p, β, 1 − β | signifikansnivå, p-verdi, Type II-risiko, styrke/power |
  | z | standardskåre; ±1,96 ↔ 95 % |
  | K = (Po − Pc)/(1 − Pc) | Cohens kappa (perifer) |
  | n, N | utvalgsstørrelse |

### Sjangerkoder (bruk i oppgavemerking og eksamensbelegg — skjelettets §3)

**T1** korrelasjonsoppgaven · **T2** hypotesetestingsoppgaven · **T3** regne-/
tolkningsoppgaven · **T4** designoppgaven · **T5** måle-/utvalgsoppgaven ·
**T6** testvalgsoppgaven · **T7** kvalitativ-oppgaven · **T8** bredde-/prosess-
oppgaven. (Sjangerkapitlene i Del 8 slår sammen T4+T5+T6 i 8.4 og T7+T8 i 8.5.)

### Feilkoder (bruk i «Typiske feil»-blokker — samles i 8.6, skjelettets §5)

#1 p-verdien som «sannsynligheten for at H0 er feil» (eksplisitt trekk-instruks,
H2018-veiledningen — bokas VIKTIGSTE før/etter-drill) · #2 Type I/II-forveksling ·
#3 kausal tolkning av korrelasjon · #4 kasusstudie ≠ N=1 (advart mot to ganger) ·
#5 testvaliditet ≠ slutningsvaliditet (indre/ytre om tester) · #6 SD ≠ SE ·
#7 mange t-tester ved 3+ grupper / ANOVA uten begrunnelsen · #8 oppramsing uten
begrunnelse (case-tilpasning mangler — C-tak) · #9 bekvemmelighetsutvalg behandlet
som representativt · #10 hypoteseformet «kvalitativt forskningsspørsmål»
(T7s eneste stryk-felle) · #11 retningsbestemt H1 uten begrunnelse · #12 hypoteser
om utvalgsverdier i stedet for populasjon (μ) · #13 usynlig utregning ·
#14 svare på alle fire oppgaver (den siste ignoreres) · #15 «jeg kan også dette»-
utbrodering · #16 etikk som moralprat uten fagbegrepene.

### Forbudt-termer (grep-sjekkes)

Ingen forbudt-termer definert i skjelettet for dette faget. (Grep-sjekk-listen er
tom; forbudt-termer-grepet i kvalitetskravene under er derfor et no-op for PSY1010 —
kjør sluttporten med tom term-streng: `sjekk-bok.py psy1010 ""`.)

## Prøvekapitler

Sju prøvedeler: **[1, 2, 3, 4, 5, 6, 7]** (Del 1 forskningsprosess/måling/utvalg ·
Del 2 design og validitet · Del 3 deskriptiv statistikk og slutningslogikk · Del 4
hypotesetesting og testvalg · Del 5 korrelasjon og regresjon · Del 6 kvalitativ
metode · Del 7 etikk/åpen vitenskap). **Del 0 har INGEN egen prøve; Del 8 er
eksamenstrening (5 sjangerkapitler + feilvaksine + 3 modellbesvarelser) uten eget
prøvekapittel** — de tre modellbesvarelsene/øvingsmaterialet dekker Del 0s stoff.

Prøvekapittel: id `psy1010-<del>-prove`, chapterNumber `<del>.P`, tittel «Prøver
til del <del>: <deltittel>»: `tip` (dekning + tidsbruk) + `text` Forkunnskaper +
fire `collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med nyskrevne
oppgaver og full fasit strukturert som «må-punkter / pluss-punkter / feller» (tallkap.:
med utregning + prosatolkning). Tip/description deklarerer «4 prøver à ~X min» +
«kan trygt deles over flere kvelder — én prøve per økt». Flervalg i prøve-collapsibles:
stokkede fasit-bokstaver (aldri «alle a»); riktig/galt-/felleprøver blander reelle og
feller (aldri «alle felle»). Etter hver prøvefasit: avkryssbar selvdiagnose-sjekkliste
(☐). Kap-referanser i fasitene som markdown-lenker. Ingen quiz/begrepsbank i
prøvekapitlene.

## Quiz-kvoten

`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`:
`[{ "question", "options": [4 stk, options[0] ALLTID riktig], "explanation" }]`.
Kvote per kapittel = skjelettets kvotesammendrag (AUTORITATIVT — aldri overstyr).
Distraktorer = reelle feller fra analysen: nabobegrep-distraktorer (Type I/II, SD/SE,
kasus/N=1, mediator/moderator/konfunder, reliabilitet/validitet, indre/ytre validitet,
review/meta-analyse) + p-verdi-formuleringer (korrekt vs. de gale variantene) +
«hvilken feil begår kandidaten»-gjenkjenning + testvalg-diagnoser. Prøvekapitler
bærer ikke egen quiz — kvoten ligger på temakapitlene.

### Kvotetabell (AUTORITATIV — bindende total, aldri overstyr; skjelettets kvotesammendrag)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 2 | 22 | 16 | — |
| 1 | 4 | 85 | 100 | 4 |
| 2 | 4 | 73 | 80 | 4 |
| 3 | 4 | 70 | 66 | 4 |
| 4 | 3 | 63 | 55 | 4 |
| 5 | 4 | 75 | 70 | 4 |
| 6 | 2 | 30 | 30 | 4 |
| 7 | 2 | 35 | 43 | 4 |
| 8 | 9 | 95 | 60 | 3 øvingseksamener |
| **Sum** | **34** | **548 ✓ (≥500)** | **520 ✓ (≥500)** | **28 + 3** |

**Bindende total: quiz 548 · flashcards 520.** Supergjengerne bærer størst tetthet:
Del 5 (korrelasjon/regresjon) og Del 4 (hypotesetesting) er de to søylene, med
Del 1 (måling/utvalg) og Del 3 (statistikk-tyngdepunktet) tett bak. Flashcard-profil:
begrep↔definisjon↔kontrastbegrep. options[0] = riktig i staging; runtime stokker.

## Opphavsrett (ufravikelig)

Alle oppgaver, case, tallsett, «modellbesvarelser» og formuleringer er NYSKREVNE
(egne tall, parter, kontekster, scenarier) — eksamenssjangrene er malen, ALDRI
originaloppgavene. Tallene skal være «snille» analoger til veiledningenes historiske
tall (varians 2,25 → SD 1,5-klassen), aldri kopierte. Standard fagbegreper og
formler er faglig allmenneie, men pensum refereres (forfatter/verk/begrep) og
parafraseres — aldri siteres i lengde. Usikre referanser merkes `(verifiser)` og
løses i fase 6. Ingen oppdiktede referanser eller kilder. (Ingen jus-/Lovdata-sjekk
for dette faget.)

## Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json; json.load(open('…'))"` på hver fil.
2. Kvotetelling mot skjelettet (toppnivå definition-blokker med title + quiz) — mot
   kvotetabellen over (autoritativ, total 548/520).
3. Forbudt-termer-grep = 0 (tom liste for PSY1010 — no-op).
4. Alle kryssbok-lenker peker på eksisterende kapittelfiler i
   `src/lib/data/chapters/`.
5. **Læringsløkke:** `content[]` veksler teori → eksempel → oppgave i løkker med
   `exercise`-blokker INLINE (ikke all teori topp / alle oppgaver bunn). Unntak:
   prøve-/modellbesvarelse-/øvingseksamenkapitler.
6. **Forkunnskapsdekning:** gå gjennom hver `exercise` og bekreft at den kun hviler
   på stoff introdusert tidligere i kapitlet eller i en referert forkunnskap — ingen
   usett begrep/regel/formel/metode.
7. **Nybegynner-inngang:** alle koder/karaktersjargong/insider-termer forklart ved
   første bruk; ingen kald kode i competenceGoals/første tekstboks; Del 0 har
   «Slik leser du denne boka»-orienteringsboksen (type `text`/`tip`).
8. **Prøve-flervalg:** fasitmønsteret sjekket — riktig svar varierer posisjon
   (aldri «alle a»/«alle felle»).
9. grep «Prioritet: perfekt» = 0.
10. **Ingen tom collapsible** (feltet heter `content` og skal ha blokker).
11. Kap-referanser i fasiter/forkunnskaper er markdown-lenker til eksisterende filer.
12. **Del 0-pakken** på plass («Lite tid?»-boks m/ lesetid-setningen, kildenote for
    frekvens-empiri, prosedyrekort, deltidsrute, «lese mye, skrive lite»-boks) og
    begrepsbank-notisene står først i hver stor bank.
13. **Tidsbudsjett:** deklarert oppgavetid vs. sum deltider forklart der de avviker.
14. **Hint** utfylt på alle exercises (unntatt merket kald bank); første hint røper
    aldri konklusjonen.
15. **Fasitmønster** sjekket i ALLE ensartede fasitlister.
16. **Frekvenstall** = antall listede belegg (tell hver «N av M»-påstand);
    kildeomtale nevner kun kildetyper som faktisk finnes i arkivet.
17. grep for meta-fasit («en A-besvarelse ville», «ville ha drøftet») = 0.
18. **Øktmerking:** kapitler > 45 min har løkke-tidsanslag/pausepunkter; prøvekapitler
    og modellbesvarelser deklarerer tidsbruk + deling.
19. **Feilkode-gloss** ved første bruk per kapittel.
20. **Matematisk sannhetskontroll (hybrid — regnefag-DNA):** ETTERREGN alle
    talleksempler numerisk i python; parametersjekk alle fortegns-/entydighets-
    påstander i fullt parameterrom FØR skriving. Ingen utregning uten avsluttende
    prosatolkning.
