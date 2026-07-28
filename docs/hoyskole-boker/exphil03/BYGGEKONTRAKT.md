# Byggekontrakt: EXPHIL03 Examen philosophicum — teknisk kontrakt for kapittelforfattere

Gjelder ALLE forfatter-agenter for `exphil03`. Faglig innhold styres av
`SKJELETT.md` (per-kapittel-DNA + identitetsseksjon) — les ditt kapittels avsnitt
nøye, pluss `EKSAMENSANALYSE.md` ved behov. Denne kontrakten definerer format og
krav. Arketype: **drøfting** (`DNA-drofting.md`), ren undertype — ingen lånte
elementer fra andre arketyper. Undertypepreg: **redegjørelsesforankret drøftingsfag
med sitatspringbrett** (a/b tester presis pensumkunnskap, siste del tester
selvstendig drøfting med sensorbonus for gjenbruk av egne redegjørelser).

## LÆRINGSLØKKE-KONTRAKT (ufravikelig byggekrav — produkteier 9. juli 2026)

Fra skjelettets topp, tas inn her som bindende byggekrav:

- HVERT kapittels `content[]` struktureres som gjentatte små løkker
  **Teori → Eksempel → Oppgave**. `exercise`-blokker plasseres INLINE i
  `content[]` rett etter teorien/eksempelet de trener — ALDRI all teori øverst
  med oppgavene samlet nederst. Grupper til meningsfulle biter (ikke én oppgave
  per teorisetning).
- **Ingen usett forkunnskap:** ingen oppgave får kreve et begrep, en tenker, et
  primærtekstutdrag eller en sjangerregel som ikke er introdusert tidligere i
  kapitlet (t.o.m. eksempelet rett foran) eller i et tidligere kapittel referert
  i Forkunnskaper-blokken. Flytt teoribiten tidligere ved behov; bygg
  oppgaveprogresjonen bit for bit.
- **Unntak:** øvingseksamen-/prøve-/modellbesvarelseskapitler følger sin egen
  arketype (komplett oppgave-/utdragssett først, løsninger i collapsibles).
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer kun
  REKKEFØLGEN.

## Filplassering

Ett JSON-dokument per kapittel: `src/lib/data/chapters/<kapittel-id>.json`
(f.eks. `exphil03-1-1.json`). IKKE rør `_registry.json`, `_all.json`,
`textbook-courses*.ts` eller `quiz-data*.ts` — wiring gjøres sentralt (fase 5).
Generer JSON via python `json.dump` (garantert gyldig escaping — lærdom: én
uescapet anførsel har tidligere blokkert hele prebuild).

## Kapittel-JSON (toppnivå)

```json
{
  "id": "exphil03-1-1",
  "courseId": "exphil03",
  "chapterNumber": "1.1",
  "title": "…(fra skjelettet)…",
  "description": "…(fra skjelettet)…",
  "estimatedMinutes": 70,
  "competenceGoals": ["gjøre rede for Descartes' skeptiske argument trinn for trinn", "…"],
  "content": [ …blokker… ],
  "exercises": []
}
```

`chapterNumber` = skjelettets `number` (`<del>.<nr>`, f.eks. `0.1`, `1.1`,
`3.4` — ALDRI lineær; prøvekapitler `<del>.P`). `competenceGoals`: 2–4
«kunne …»-formuleringer fra kapittelets begrepskontrakt.

### Rene tekstfelter — INGEN markdown (UFRAVIKELIG)

`title`, `topics`/`sectionNames` og `competenceGoals` renderes RÅTT i UI-et.
Bruk ALDRI markdown der (ingen `*kursiv*`, `**fet**`, `_understrek_`). Verktitler
i slike felter skrives med «anførselstegn», ikke kursiv — f.eks.
«Descartes, "Meditasjoner over filosofiens grunnlag"» i prosa/begrepslister, men
i `title`-feltet står ren tekst uten formattegn. Markdown og LaTeX-fri prosa hører
kun hjemme i `content`-blokkenes `content`/`problem`/`solution`/`task`-felter (dette
faget bruker uansett ingen LaTeX — se notasjonsstandard).

### competenceGoals er Skolesagas EGNE formuleringer

`competenceGoals` skal være egne, eksamensforankrede kunnskaps-/ferdighetsmål
destillert fra eksamensanalysen — ALDRI kopi av UiOs offisielle
læringsutbyttebeskrivelser. UI-et deklarerer kilden automatisk («utformet av
Skolesaga …, ikke institusjonens offisielle»); skriv målene deretter: konkrete
«kunne …»-mål knyttet til kapittelets sjangre og begreper.

## Blokktyper (eksakte felt)

Strukturmønster som i plattformen (referanse: `src/lib/data/chapters/econ1310-2-1.json`
— men filosofi-innhold, ikke matte):
- `text`: `{ "id", "type": "text", "content": "markdown-prosa (ingen LaTeX)" }`
- `definition`: `{ "id", "type": "definition", "title": "Begrep ↔ tenker ↔ verk", "content": "…" }`
  — **title OBLIGATORISK** (flashcards genereres KUN fra toppnivå
  definition-blokker med title). I EXPHIL03: filosof↔begrep↔verk-koblinger, f.eks.
  «Metodisk tvil (Descartes, Meditasjonene)», «Kunnskapsresistens (Wikforss)»,
  «Høyere og lavere gleder (Mill, Utilitarisme)». Bruk «anførselstegn» rundt
  verktitler i title-feltet, ALDRI kursiv.
- `theorem`: `{ "id", "type": "theorem", "title", "content" }` (brukes sjelden —
  for formulerte kjernetese/-prinsipp der det gir mening, f.eks. cogito eller
  nytteprinsippet som eksplisitt formulert tese).
- `example`: `{ "id", "type": "example", "title", "problem": "kort oppgave/sitatlignende utdrag", "solution": "et godt redegjørelses-/drøftingssvar med det sentrale poenget eksplisitt" }`
- `tip` / `warning`: `{ "id", "type", "title", "content" }`
- `exercise`: `{ "id", "type": "exercise", "exercise": { "id", "number", "type": "classic", "difficulty": "medium", "task", "solution", "hints": [] } }`
  — subTasks ved behov. **`difficulty` er ALLTID `"medium"`** (ufravikelig — ikke
  bruk lett/vanskelig/easy/hard). ALDRI solutionVideo/allowsUpload/
  allowsCanvasDrawing/answer.
- `collapsible`: `{ "id", "type": "collapsible", "title", "buttonText", "content": [blokker] }`
  — brukes til **Sitatlager/Utdragslager**, **Symbol- og begrepsliste** (her:
  begrepsliste), **pensumkart** og prøvenes «Vis prøve N».

Blokk-id-er: `<kapittel-id>-<løpenavn>` (unik i kapitlet).

## Kapittelstruktur per kapitteltype (fra DNA-drofting + skjelettets DNA)

Alltid, i denne rekkefølgen først i kapitlet:
1. `tip` **Eksamensvinkel** (frekvens, vekt, sjangre — fra skjelettets
   Eksamensbelegg; forfatteren skal IKKE finne på frekvenstall).
2. `text` **Forkunnskaper** (se Leserkrav): kapitler i boka + kryssbok-lenker.
3. `collapsible` **Symbol- og begrepsliste** (title «Symbol- og begrepsliste»,
   buttonText «Vis begreper»): markdown-tabell `| Begrep | Tenker/verk | Betydning |`
   over ALLE fagbegreper brukt i delkapitlet (per delkapittel, ikke arv).
   EXPHIL03 er symbolfritt/språklig — «formler» erstattes av begreps-/tenker-/
   verk-koblinger. Unntak kun for rene metakapitler (0.1) og sjanger-/
   modellbesvarelseskapitler der begrepstettheten er lav.

- **Temakapittel** (Del 1–3, følger skjelettets temakapittel-DNA):
  eksamensvinkel → forkunnskaper → begrepsliste → `text` temaet i fagets
  landskap → `definition` kjernebegreper (flashcard-kilden — toppnivå med title!)
  → `text` posisjoner og spenninger (drøftings-/kontrastaksen) → `collapsible`
  **Sitatlager** (2–3 nyskrevne, sitatlignende primærtekstutdrag i tenkerens stil
  med S2-tolkningsøvelse) → `example` anvendelse ×1–3 (skrevet som et godt
  redegjørelses-/drøftingssvar, det sentrale poenget eksplisitt) → `warning`
  **Typiske feil** (fra feilkodene) → `tip` **Det sensor belønner** (det subtile
  ekstra som gir A) → `exercise` ×4–8 → `collapsible` pensumkart. Løkke-kravet
  over gjelder: teori/utdrag/eksempel og tilhørende `exercise` veksles INLINE.
- **Eksamenskart / essayhåndverk / sjangerkapittel** (Del 0, Del 4.1–4.6):
  sjangeroppskrift (trinnvis) → gjennomarbeidet eksempel → progresjon av øvelser
  på sjangeren (S1–S7).
- **Feilvaksinekapittel** (Del 4.8, feilgjenkjenning): de 14 feilkodene som
  gjennomgåtte varsellamper med «før/etter»-svar.
- **Modellbesvarelseskapittel** (Del 4, ≥3 på toppfamiliene): nyskrevet oppgave →
  `collapsible` **A-besvarelse** → `collapsible` kommentert **C-/E-besvarelse**
  → `tip` **Sensorblikket** (femkravene + hva som skiller nivåene).
- **Øvingseksamener** (kap. 4.7–4.9, tre stk): komplette oppgavesett i eksakt
  eksamensform (H2025-formatet A/B/C · a–d-formatet · seminarvarianten) →
  collapsible-løsninger med momentliste-fasit + flervalg-forankrede
  momentspørsmål og begrepskort (bærer sin del av kvoten, se kvotetabell).

Og alltid: `warning` **Typiske feil** + begrepsbank-definisjoner til
flashcard-kvoten + `collapsible` pensumkart/repetisjon.

## Leserkrav (ufravikelig — fra produkteier; SKAL inn i førsteutkastet)

- **Forkunnskaper-blokk** rett etter Eksamensvinkel: (i) kapitler i denne boka
  kapitlet bygger på (kapittelnummer), (ii) forkunnskaper utenfor boka med
  markdown-lenke til eksisterende kapittel i annen bok, format
  `[tittel](/<courseId>/<chapterId>)` — sjekk at målfilen finnes i
  `src/lib/data/chapters/`. Lenk kun til kapitler som FAKTISK er bygget (skjelett
  ≠ bygget bok); ellers dekk i egen bok. «Dette kapitlet kan leses uten
  forkunnskaper» der ingen. Prerequisites i skjelettet peker bakover innad i
  exphil03 (2.1→1.2, 2.4→1.1, 3.1→2.2, 4.7→3.3, 4.9→Locke-triaden).
- **Kun eksamensrelevant**: hvert avsnitt eksamensrelevant eller oppbyggende;
  «bør kjenne til»-stoff (Jaggar, Galileo, bullshit/Frankfurt, Benatar, Appiah,
  Einstein) plasseres ETTER kjernestoffet og merkes eksplisitt.
- **Godt, flytende norsk (UFRAVIKELIG):** hele setninger — ALDRI telegramstil.
  «Funksjon: premiss. Plass: startpunktet.» er FORBUDT; skriv «Utdraget fungerer
  som premiss og er startpunktet i argumentet». Naturlig norsk ordstilling, ingen
  anglisismer eller stivt kansellispråk. Korte avsnitt (2–4 setninger), «du»-form,
  konkret norsk knagg før formalismen — presisjon vinner ved tvil.
- **Listemerking med små bokstaver (UFRAVIKELIG):** utdrag, svaralternativer og
  deloppgaver merkes a), b), c) — ALDRI A), B), [A], [B]. (Unntak: karakteruttrykk
  som «en A-besvarelse» er ikke listemerking og skrives med stor bokstav.)
- **Meningsfulle oppgaver**: hver oppgave merkes med eksamenssjanger (S1–S7) og
  hva den trener, f.eks. «(Eksamenssjanger S2 — sitattolkning; dominerende
  oppgavetype 2021→.)» eller «(Eksamenssjanger S4 — drøftingsdelen, koble til (a)/(b).)».

## Faglig stil (ufravikelig for EXPHIL03 — fra skjelettets identitetsseksjon)

- **Notasjonsstandard:** INGEN matematisk notasjon, INGEN LaTeX, INGEN symboler.
  Norsk bokmål. Latinske/greske fagtermer (cogito, res cogitans/res extensa,
  eudaimonia, aitia, telos, a priori/a posteriori) og engelske eksamenstermer
  tillates der pensum bruker dem — gi norsk knagg først, fagtermen i parentes.
  Sitatlignende primærtekstutdrag skrives som NYSKREVNE parafraser i tenkerens
  stil, aldri kopierte originalsitater.
- **Redegjørelse forankrer, drøfting løfter.** (a)/(b) tester presis
  argumentrekonstruksjon; siste del tester selvstendig drøfting. All modellsvar-
  og oppgaveproduksjon vekter trinnvis argumentrekonstruksjon som fundament, og
  trener drøfting/veiing som det som skiller A fra C.
- **C-porten er jevnhet.** «God» på BÅDE Kunnskap OG Forståelse/analyse i ALLE
  delspørsmål. Én sterk og én blank del holder ikke (feil #4, #9). Modellsvar
  demonstrerer jevnhet på tvers av delspørsmålene.
- **Gjenbruksbonusen.** Poeng fra (a)/(b) skal føres inn i drøftingsdelen —
  nevnes som fordel i samtlige sensorveiledninger 2024–2025. Modellsvarene viser
  eksplisitt kobling («som vist i (a) …») og straffer drøfting som starter «på
  nytt» uten kobling (feil #5).
- **Firepunktslisten for drøftingsdelen** (fast 2024–2025): argumenter for og/eller
  mot påstanden → kritisk vurdering av disse → kobling til relevante pensumtekster
  → selvstendig refleksjon som understøtter egen tolkning. Alle S4-modellsvar
  følger denne.
- **Behandle sitatet i argumentets helhet.** I S2-oppgaver tolkes utdraget og
  plasseres i tekstens overordnede argument — aldri løsrevet parafrase (feil #7).
- **Det som nulles:** generisk oppslagsverk-kunnskap med lav relevans (leksikonsvar,
  feil #3) og utenompensum-generalia gir null uttelling. Kunnskap uten drøfting
  eller drøfting uten kunnskap stopper på D/E.
- **Bokas mantraer** (etableres i kap. 0.2, refereres i alle senere kapitler):
  «Forankring uten avsender er C-stoff» og «Gjengivelse uten drøfting er D-stoff».
- **Grunnboka «Vite, være, gjøre» (VVG)** er navet — kan refereres/parafraseres/
  bygges på, men ALDRI siteres ordrett i lengde, og alle VVG-kapittel-/sidetalls-
  koblinger beholder ⚠-forbehold («utgaveavhengig — attestert i eksamenssett
  2021–2025»). Forfatteren skal ALDRI oppgi sidetall utover de attesterte
  (s. 69–70, 141, 245–246, 250, 289–295, 316, 327, 399, 402–403, 430, 445, 514,
  522–523, 542–543).

### Kalibreringsregel — pensumregimet (UFRAVIKELIG)

Boka kalibreres 100 % mot pensumregimet fra V2021 — «Vite, være, gjøre»-galleriet.
Gammelt galleri (Hume, Beauvoir, Singer, Smart, Fried, Hursthouse, Feldman,
Heisenberg) er UTE av pensum og gir null uttelling (dokumentert fellekilde, feil
#14). Disse tenkerne skal IKKE brukes som pensumankere noe sted i boka; maks én
kort historisk fotnote/advarsel i kap. 0.1 og i studieguidens feilvaksine.
Dyreetikk uten Singer; eutanasi via Foot/Velleman (ikke abort-stoff); er/bør-poeng
uten Hume-attribusjon; dydsetikk via Aristoteles/Foot (ikke Hursthouse).

### Sjangerkoder (bruk i oppgavemerking og eksamensbelegg — fra skjelettet §3)

**S1** redegjør for X (kunnskapsdel a/b) · **S2** sitat-tolkning (a/b med utdrag —
dominerende oppgavetype 2021→) · **S3** sammenlign to tenkere · **S4**
drøftingsdelen (c/d) · **S5** anvend teori på case/tankeeksperiment · **S6**
kortsvar (utgått format H2017–V2018 — brukes nå som quiz-/flashcardmal) · **S7**
semesteroppgaven (seminarvarianten, 800–1000 ord).

### Feilkoder (bruk i «Typiske feil»-blokker — fra skjelettet §5, alle 14)

#1 gjenfortelling uten drøfting · #2 mening uten grunner · #3 leksikonsvar
(utenompensum-generalia — eksplisitt nullet) · #4 hoppe over delspørsmål (bryter
jevnhetsregelen) · #5 ikke koble drøftingen til (a)/(b) · #6 upresise begreper
(kategorisk/hypotetisk imperativ, handling/regel, sex/gender, skeptisisme/
fallibilisme, Aristoteles-årsak ≠ moderne kausalitet) · #7 tolke sitatet løsrevet
fra tekstens overordnede argument · #8 ensidig drøfting uten innvendinger ·
#9 ubalanse kunnskap/analyse (begge må være «god» for C) · #10 formalfeil i
semesteroppgaven (ordgrense, litteraturliste, stedfestet henvisning → F) ·
#11 klipp-og-lim/sitatslurv (behandles som fusk) · #12 svare på begge valgfrie
oppgaver i stedet for én grundig · #13 ignorere tankeeksperimentets premisser ·
#14 gammelt pensum-spøkelse (Hume, Singer, Smart, Fried m.fl. etter 2021).

### Femkravsaksen og tersklene (malen for alle modellsvar — fra skjelettet §4)

**IFIKKs fem karakterkrav:** Kunnskap · Forståelse og analyse · Relevans ·
Etterrettelighet · Struktur og språkføring. De to første veier mest; sensor
minnes på at kandidatene er førsteårsstudenter.
- **E/D** = minimum på Kunnskap og Forståelse/analyse, noe riktig på minst ett
  kunnskapsdelspørsmål.
- **C-porten = jevnhet** — «god» på Kunnskap OG Forståelse/analyse i ALLE
  delspørsmål; jevnt god argumentasjon og kritisk refleksjon.
- **A/B** = svært god vurderingsevne og stor selvstendighet; utmerker seg i å
  BEHANDLE stoffet (drøfte), ikke bare gjengi det, og yter posisjonene
  rettferdighet i sammenhengende diskusjon.
Sensor skiller på to akser: **vurderingsevne** og **selvstendighet**. Hvert
modellsvar kalibreres mot A/C/E ved helhetlig skjønn (ingen poenggrenser).

### Forbudt-termer (grep-sjekkes)

Ikke tomme for dette faget. Følgende navn er UTE av pensum og skal ALDRI brukes
som pensumankere/forankring i tema-, sjanger- eller modellkapitler:

```
Hume  Beauvoir  Singer  Smart  Fried  Hursthouse  Feldman  Heisenberg
```

De skal KUN forekomme i kap. 0.1-advarselen og studieguidens feilvaksine (#14).
Grep-sjekk: hvert av disse navnene skal gi 0 treff i alle bygde
`exphil03-*.json` UNNTATT `exphil03-0-1.json` (og evt. det eksplisitte
feilvaksine-/feilgjenkjenningskapitlet der #14 illustreres som fell). Andre steder
= brudd som må rettes.

## Opphavsrett (ufravikelig)

Alle oppgaver, case, tankeeksperiment-varianter, «modellsvar» og sitatlignende
primærtekstutdrag er NYSKREVNE (egne formuleringer, egne eksempler, egne
parafraser) — eksamenssjangrene er malen, ALDRI originaloppgavene eller
sensorveiledningene. Standard fagbegreper og de faktiske primærtekstpassasjene
eksamen bruker som springbrett er faglig allmenneie, men gjengis med egne ord:
pensum (VVG + originaltekster) refereres (forfatter/verk/begrep) og parafraseres
— aldri siteres i lengde, aldri ordrette VVG-sitater. Sitatlignende passasjer
skrives i tenkerens stil av forfatteren, aldri kopiert. Arkivets caser (den snille
slaveeieren, øde øy osv.) gjenskapes med endrede fakta og formuleringer. Usikre
detaljer i primærtekstrekonstruksjoner merkes `(verifiser)` og løses i fase 6.
Ingen oppdiktede referanser.

## Prøvekapitler

Fire prøvedeler: **[1, 2, 3, 4]** (Del 1 Vite · Del 2 Være · Del 3 Gjøre · Del 4
blandet sjanger/eksamenstrening). **Del 0 har INGEN egen prøve** — Del 0s sjangre
og metastoff dekkes av øvingseksamenene i kap. 4.7–4.9.

Prøvekapittel: id `exphil03-<del>-prove`, chapterNumber `<del>.P`, tittel «Prøver
til del <del>: <deltittel>»: `tip` (dekning + tidsbruk) + `text` Forkunnskaper +
fire `collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med nyskrevne
oppgaver (S1-/S2-/S3-/S4-/S5-moment + flervalg) og full fasit strukturert med
**tre-nivå-momentlister (E/C/A)** og det **sentrale poenget** eksplisitt
(drøftingsfagets motstykke til «må-punkter / pluss-punkter / feller»). Hver prøve
speiler eksamensformatet i miniatyr (kunnskapsdel + drøftingsdel/flervalg, 20–45
min). De fire prøvene per del er spesifisert i skjelettets §4 (Del 1: begreps-
presisjon Descartes/Wikforss, sitattolkning Vite, kunnskap-og-demokrati-drøfting,
Vite a–c-miniformat; Del 2: Aristoteles-metafysikk, sinn/kropp, Haslanger-
mekanikken, Være a–c-miniformat; Del 3: teoritrekanten, case-anvendelse, Locke–
Held a–c, eutanasi Foot/Velleman; Del 4: sitattolknings-drill, drøftingsdel-drill,
sammenligningsprøve, feilgjenkjenning). Ingen begrepsbank i prøvekapitler.
Prøvekapitlene bærer i tillegg egne flervalg (quiz) og noen begrepskort — se
kvotetabellen under.

## Quiz-kvoten

`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`:
`[{ "question", "options": [4 stk, options[0] ALLTID riktig], "explanation" }]`.
Kvote per kapittel = skjelettets kvotesammendrag (AUTORITATIVT — aldri overstyr).
Distraktorer = reelle feller fra analysen: nabobegrep-distraktorer (fallibilisme/
skeptisisme, kategorisk/hypotetisk imperativ, sex/gender, begrep-/objekt-
konstruksjon, handlings-/regelnivå, plikt/tilbøyelighet, aitia/moderne kausalitet,
ren/anvendt) + trinnrekkefølge-spørsmål (tvilstrappen, firårsaksskjemaet,
femtrinnsdrøftingen) + «hvem hevder hva»-koblinger + «hvilken av de 14 feilene
begår kandidaten»-gjenkjenning. Quiz = redegjørelses-/sitattolkningstrening.
Prøvekapitler og øvingseksamener bærer også flervalg (se kvotetabell).

### Kvotetabell (AUTORITATIV — bindende total, aldri overstyr)

Fra skjelettets kvotesammendrag:

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 2 | 25 | 20 | 0 (dekkes av øvingseksamenene) |
| 1 | 5 | 130 | 130 | 4 |
| 2 | 6 | 140 | 140 | 4 |
| 3 | 8 | 190 | 190 | 4 |
| 4 | 9 | 97 | 71 | 4 |
| **Sum** | **30** | **582 ✓ (≥500)** | **551 ✓ (≥500)** | **16 + 3 øvingseksamener** |

**Bindende total: quiz 582 · flashcards 551** (hardt minimum ≥500/≥500). Del 3
(Gjøre — etikk) har klart høyest tetthet (tyngdepunktet: minst én normativ teori i
19 av 24 sett); Del 1 (Vite) og Del 2 (Være) nest. Summeringskontroll per del
(fra skjelettet): Del 0: 10+15 q / 10+10 f. Del 1: 30+25+30+20+25 q og f. Del 2:
25+30+20+25+15+25 q og f. Del 3: 30+30+30+20+25+25+15+15 q /
30+30+30+15+25+25+15+20 f. Del 4: 15+12+15+12+10+15+6+6+6 q /
10+10+10+10+8+8+5+5+5 f. De 3 øvingseksamenene (kap. 4.7–4.9) og de 16
prøvekapitlene bærer sin del av totalen innenfor Del 4-kvoten.

**Flashcard-profil:** filosof↔begrep↔verk-koblinger (Descartes↔metodisk tvil↔
Meditasjonene; Wikforss↔tre vilkår↔Kunnskapsresistens; Mill↔høyere/lavere gleder↔
Utilitarisme; Haslanger↔begreps-/objektkonstruksjon; Held↔mor–barn-modellen osv.)
— modellert på 2017–2018-kortsvarene (S6): presise éndefinisjoner «hva er X hos Y».
Flashcards genereres KUN fra toppnivå `definition`-blokker med `title`. options[0]
= riktig i staging; runtime stokker (fasit-svaralternativer rebalanseres jevnt
a/b/c/d i sluttfase).

## Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json; json.load(open('…'))"` på HVER fil.
2. Kvotetelling mot skjelettet (toppnivå definition-blokker med title + quiz) —
   mot kvotetabellen over (autoritativ, total 582/551).
3. **Forbudt-termer-grep = 0** i alle `exphil03-*.json` UNNTATT `exphil03-0-1.json`
   og feilgjenkjenningskapitlet: `grep -E 'Hume|Beauvoir|Singer|Smart|Fried|Hursthouse|Feldman|Heisenberg'`.
4. Alle kryssbok-lenker peker på eksisterende kapittelfiler i
   `src/lib/data/chapters/` (og prerequisites peker på eksisterende exphil03-id-er).
5. **Rene tekstfelter:** ingen markdown/LaTeX i `title`/`topics`/`competenceGoals`;
   listemerking a) b) c) (aldri A)/[A]); `difficulty` alltid `"medium"`; norsk
   flytende prosa, ingen telegramstil.
6. **Læringsløkke:** `content[]` veksler teori → eksempel/utdrag → oppgave i
   løkker med `exercise`-blokker INLINE (ikke all teori topp / alle oppgaver
   bunn). Unntak: prøve-/modellbesvarelse-/øvingseksamenkapitler.
7. **Forkunnskapsdekning:** gå gjennom hver `exercise` og bekreft at den kun
   hviler på stoff introdusert tidligere i kapitlet eller i en referert
   forkunnskap — ingen usett begrep/tenker/utdrag/sjangerregel.
8. **Pensumreferanser EKTE:** kun tenkere/verk fra skjelettets begrepskontrakter,
   ingen oppdiktede referanser, ingen sidetall utover de attesterte; alle
   VVG-koblinger beholder ⚠-forbehold.
