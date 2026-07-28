# Byggekontrakt: STV1100 Politisk teori — teknisk kontrakt for kapittelforfattere

Gjelder ALLE forfatter-agenter for `stv1100`. Faglig innhold styres av
`SKJELETT.md` (per-kapittel-DNA + identitetsseksjon) — les ditt kapittels avsnitt
nøye, pluss `EKSAMENSANALYSE.md` ved behov. Denne kontrakten definerer format og
krav. Arketype: **drøfting** (`DNA-drofting.md`), undertype **redegjørelsestungt
essayfag med sitatspringbrett**.

## LÆRINGSLØKKE-KONTRAKT (ufravikelig byggekrav — produkteier 9. juli 2026)

Fra skjelettets topp, tas inn her som bindende byggekrav:

- HVERT kapittels `content[]` struktureres som gjentatte små løkker
  **Teori → Eksempel → Oppgave**. `exercise`-blokker plasseres INLINE i
  `content[]` rett etter teorien/eksempelet de trener — ALDRI all teori øverst
  med oppgavene samlet nederst.
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
(f.eks. `stv1100-2-1.json`). IKKE rør `_registry.json`, `_all.json`,
`textbook-courses*.ts` eller `quiz-data*.ts` — wiring gjøres sentralt (fase 5).
Generer JSON via python `json.dump` (garantert gyldig escaping).

## Kapittel-JSON (toppnivå)

```json
{
  "id": "stv1100-2-1",
  "courseId": "stv1100",
  "chapterNumber": "2.1",
  "title": "…(fra skjelettet)…",
  "description": "…(fra skjelettet)…",
  "estimatedMinutes": 65,
  "competenceGoals": ["gjøre rede for Rawls' argument for forskjellsprinsippet", "…"],
  "content": [ …blokker… ],
  "exercises": []
}
```

`chapterNumber` = skjelettets `number` (`<del>.<nr>`, f.eks. `0.1`, `2.1`;
prøvekapitler `<del>.P`). `competenceGoals`: 2–4 «kunne …»-formuleringer fra
kapittelets begrepskontrakt.

## Blokktyper (eksakte felt)

Strukturmønster som i plattformen (referanse: `src/lib/data/chapters/econ1310-2-1.json`
— men politisk-teori-innhold, ikke matte):
- `text`: `{ "id", "type": "text", "content": "markdown" }`
- `definition`: `{ "id", "type": "definition", "title": "Begrep ↔ tenker", "content": "…" }`
  — **title OBLIGATORISK** (flashcards genereres KUN fra toppnivå
  definition-blokker med title; i STV1100: begrep ↔ tenker ↔ primærtekst, f.eks.
  «Uvitenhetssløret (Rawls, *A Theory of Justice*)»)
- `theorem`: `{ "id", "type": "theorem", "title", "content" }` (brukes sjelden i
  dette faget — for formulerte kjerneteser/prinsipper der det gir mening)
- `example`: `{ "id", "type": "example", "title", "problem": "kort oppgave/utdrag", "solution": "et godt redegjørelses-/sammenligningssvar med «sentralt poeng» eksplisitt" }`
- `tip` / `warning`: `{ "id", "type", "title", "content" }`
- `exercise`: `{ "id", "type": "exercise", "exercise": { "id", "number", "type": "classic", "difficulty": "lett"|"middels"|"vanskelig", "task", "solution", "hints": [] } }`
  — subTasks ved behov. ALDRI solutionVideo/allowsUpload/allowsCanvasDrawing/answer.
- `collapsible`: `{ "id", "type": "collapsible", "title", "buttonText", "content": [blokker] }`
  — brukes til **Utdragslager**, **Symbol- og begrepsliste** og pensumkart.

Blokk-id-er: `<kapittel-id>-<løpenavn>` (unik i kapitlet).

## Kapittelstruktur per kapitteltype (fra DNA-drofting + skjelettets temakapittel-DNA)

Alltid, i denne rekkefølgen først i kapitlet:
1. `tip` **Eksamensvinkel** (frekvens, vekt, sjangre — fra skjelettet).
2. `text` **Forkunnskaper** (se Leserkrav): kapitler i boka + kryssbok-lenker.
3. `collapsible` **Symbol- og begrepsliste** (title «Symbol- og begrepsliste»,
   buttonText «Vis begreper»): markdown-tabell `| Begrep | Tenker | Betydning |`
   over ALLE fagbegreper brukt i delkapitlet (per delkapittel, ikke arv).
   STV1100 er symbolfritt/språklig — «formler» erstattes av begreps-/tenker-
   koblinger. Unntak kun for rene metakapitler (0.1).

- **Temakapittel** (Del 1–3, følger skjelettets temakapittel-DNA):
  eksamensvinkel → forkunnskaper → begrepsliste → `text` temaet i fagets
  landskap → `definition` kjernebegreper (flashcard-kilden — toppnivå med title!)
  → `text` posisjoner og spenninger (drøftings-/sammenligningsaksen) →
  `collapsible` **Utdragslager** (2–3 nyskrevne primærtekstutdrag med tolknings-
  øvelse) → `example` anvendelse ×1–3 (skrevet som et godt redegjørelses-/
  sammenligningssvar, «sentralt poeng» eksplisitt) → `warning` **Typiske feil**
  (fra feilkodene) → `tip` **Sentralt poeng + subtilt ekstra** (det som gir A) →
  `exercise` ×4–8 → `collapsible` pensumkart. Løkke-kravet over gjelder:
  teori/utdrag/eksempel og tilhørende `exercise` veksles INLINE, ikke oppgaver
  bunket til slutt.
- **Sjangerkapittel / metakapittel** (Del 0, Del 4.1–4.2): firetrinns-RED/SIT-
  oppskrift → gjennomarbeidet eksempel → progresjon av øvelser på sjangeren.
- **Feilvaksinekapittel** (Del 4.3): de ti feilkodene som gjennomgåtte
  varsellamper med «før/etter»-svar.
- **Modellbesvarelseskapittel** (Del 4.4, ≥3 på toppfamiliene Rawls/frihet/
  sammenligning): nyskrevet oppgave → `collapsible` **A-besvarelse** →
  `collapsible` kommentert **C-/E-besvarelse** → `tip` **Sensorblikket** (de fire
  vurderingsaksene + hva som skiller nivåene).
- **Øvingseksamener** (Del 4.5): komplette oppgavesett i eksakt eksamensform
  (valgstruktur-variantene) → collapsible-løsninger + flervalg-forankrede
  momentspørsmål og begrepskort (bærer sin del av kvoten, se under).

Og alltid: `warning` **Typiske feil** + begrepsbank-definisjoner til
flashcard-kvoten + `collapsible` pensumkart/repetisjon.

## Leserkrav (ufravikelig — fra produkteier; SKAL inn i førsteutkastet)

- **Forkunnskaper-blokk** rett etter Eksamensvinkel: (i) kapitler i denne boka
  kapitlet bygger på (kapittelnummer), (ii) forkunnskaper utenfor boka med
  markdown-lenke til eksisterende kapittel i annen bok, format
  `[tittel](/<courseId>/<chapterId>)` — sjekk at målfilen finnes i
  `src/lib/data/chapters/`. Mulige lenker til exphil03-kapitler om
  Locke/Mill/Rawls KUN dersom de finnes som byggede ruter (skjelett ≠ bygget bok);
  ellers dekk i egen bok. «Dette kapitlet kan leses uten forkunnskaper» der ingen.
- **Kun eksamensrelevant**: hvert avsnitt eksamensrelevant eller oppbyggende;
  «kjenne til»-stoff sist og merket.
- **Lett å lese og engasjerende**: korte avsnitt (2–4 setninger), «du»-form,
  konkret norsk knagg før formalismen — presisjon vinner ved tvil.
- **Meningsfulle oppgaver**: hver oppgave merkes med eksamenssjanger og hva den
  trener, f.eks. «(Eksamenssjanger RED — Rawls, gjenganger i 6 av 8 sett.)» eller
  «(Eksamenssjanger SIT — plasser utdrag [B] i argumentets helhet.)».

## Faglig stil (ufravikelig for STV1100 — fra skjelettets identitetsseksjon)

- **Notasjonsstandard:** ingen matematisk notasjon; ingen LaTeX. Norsk bokmål.
  Engelsk fagterminologi tillates og oppmuntres der eksamen bruker den
  (*negative freedom*, *veil of ignorance*, *non-domination*, *capabilities*) —
  gi norsk term først, engelsk i parentes. Primærtekstutdrag som er engelske i
  originalen kan gjengis på engelsk, men er NYSKREVNE parafraser.
- **Redegjørelse er kjernen; drøfting er bonusen** (kalibreringsregel 1). All
  modellsvar- og oppgaveproduksjon vekter presis argumentrekonstruksjon tyngst.
  Drøfting/sammenligning trenes som en *sekundær, økende* (2023→) ferdighet.
- **Treff «det sentrale poenget»** (kalibreringsregel 2). Hvert tema har et
  definert kjernepoeng (merket «SENTRALT POENG» i skjelettets begrepskontrakt).
  Et kort, korrekt kjernesvar kan gi A; et langt svar som mister poenget faller
  til svak. Hvert modellsvar viser et **kort, kontant kjernesvar** ved siden av
  et bredere utdypende svar — forskjellen ligger i om poenget treffes, ikke i
  lengde.
- **Behandle alle utdragene** (kalibreringsregel 3). I SIT-oppgaver ([A]–[E]) må
  hvert utdrag tolkes og plasseres i argumentets helhet.
- **Gå rett på sak** (kalibreringsregel 4). Ingen innledning/avslutning/
  litteraturhenvisninger i modellsvar — boka lærer «ingen oppvarming»-disiplinen.
- **Presisjon > bredde** (kalibreringsregel 5). Utenomsnakk og lavrelevant
  filosofisk materiale straffes.
- **A–F ved helhetsvurdering** (kalibreringsregel 6). Ingen poenggrenser;
  modellsvar kalibreres mot A/C/E ved helhetlig skjønn, ikke poengtall.
- **Grunnboka Malnes & Midgaard, *Politisk filosofi*** er navet — kan gjengis/
  bygges på uten kildehenvisning, aldri ⚠.

### Sjangerkoder (bruk i oppgavemerking og eksamensbelegg — fra skjelettet §3)

**RED** redegjørelse — «gjør rede for X» (fagets grunnform: presis trinnvis
argumentrekonstruksjon som treffer det sentrale poenget) · **SIT** sitattolkning —
«forklar hva X mener med dette»/[A]–[E]-utdrag (parafraser → identifiser funksjon →
plasser i helheten) · **SAM** sammenligning — «sammenlign to tenkere/teorier»
(redegjør for begge + presise likheter OG forskjeller) · **ANV** anvendelse —
«hva ville X ment om dette?» (bruk en tenkers begrepsapparat på en konkret
påstand) · **HYB** redegjør+drøft-hybrid (2023→: solid redegjørelse + kort,
forbeholden selvstendig vurdering).

### Feilkoder (bruk i «Typiske feil»-blokker — fra skjelettet §5)

#1 miste det sentrale poenget (Rawls uten uvitenhetssløret; Pettit uten kontroll/
ikke-dominans; Platon uten arbeidsdeling-etter-anlegg) · #2 utenomsnakk/bredde
i stedet for presisjon · #3 unødig innledning/avslutning · #4 hoppe over
sitatutdrag · #5 bare parafrasere utdraget løsrevet · #6 besvare bare halve
settet uten kompensasjon · #7 upresise begreper (negativ/positiv frihet;
ikke-dominans/non-vitiation; universalisme/pluralisme; politisk/generell
amoralisme) · #8 ren gjengivelse der oppgaven ber om drøfting/sammenligning ·
#9 overse anvendelses-vrien · #10 behandle Machiavelli endimensjonalt.

### Vurderingsaksene (malen for alle modellsvar — fra skjelettet §4)

**Akse 1 Treff det sentrale poenget** (viktigst) · **Akse 2 Presis tekst-/
begrepsforståelse** (behandle alle utdrag) · **Akse 3 Det subtile ekstra poenget**
(det som gir A) · **Akse 4 Selvstendighet i sammenligning/drøfting**.
**A** = sentrale poeng truffet + minst ett subtilt ekstrapoeng/selvstendig
sammenligning · **C** = sentrale poeng på plass, korrekt men flatt · **E** =
sentrale poeng mistet/antydet, upresise begreper, utenomsnakk.

### Forbudt-termer (grep-sjekkes)

Ingen forbudt-termer definert i skjelettet for dette faget. (Grep-sjekk-listen
er tom; punkt 3 i kvalitetskravene under er derfor et no-op for STV1100.)

## Opphavsrett (ufravikelig)

Alle oppgaver, case, «modellsvar» og primærtekstutdrag er NYSKREVNE (egne
formuleringer, egne eksempler, egne parafraser) — eksamenssjangrene er malen,
ALDRI originaloppgavene. Standard fagbegreper og de faktiske primærtekst-
passasjene eksamen bruker som springbrett er faglig allmenneie, men gjengis med
egne ord; pensum refereres (forfatter/verk/begrep) og parafraseres — aldri
siteres i lengde. Usikre detaljer i primærtekstrekonstruksjoner merkes
`(verifiser)` og løses i fase 6. Ingen oppdiktede referanser.

## Prøvekapitler

Fire prøvedeler: **[1, 2, 3, 4]** (Del 1 frihet · Del 2 rettferdighet/Rawls ·
Del 3 autoritet/makt/moral · Del 4 blandet sjanger + miniatyr-øving). **Del 0s
sjangre (RED/SIT) dekkes av prøve 4.P og de tre øvingseksamenene i kap. 4.5** —
Del 0 har derfor INGEN egen prøve.

Prøvekapittel: id `stv1100-<del>-prove`, chapterNumber `<del>.P`, tittel «Prøver
til del <del>: <deltittel>»: `tip` (dekning + tidsbruk) + `text` Forkunnskaper +
fire `collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med nyskrevne
oppgaver (RED-/SIT-/SAM-moment + flervalg) og full fasit strukturert med
**tre-nivå-momentlister (E/C/A)** og «**sentralt poeng**» eksplisitt (drøftings-
fagets motstykke til «må-punkter / pluss-punkter / feller»). Ingen begrepsbank.
Prøvekapitlene bærer i tillegg egne flervalg (quiz) — se kvotetabellen under.

## Quiz-kvoten

`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`:
`[{ "question", "options": [4 stk, options[0] ALLTID riktig], "explanation" }]`.
Kvote per kapittel = skjelettets kvotesammendrag (AUTORITATIVT — aldri overstyr).
Distraktorer = reelle feller fra analysen: nabobegrep-distraktorer (negativ/
positiv frihet, ikke-dominans/non-vitiation, uvitenhetsslør/maximin, sjanselikhet/
forskjellsprinsipp, universalisme/pluralisme, politisk/generell amoralisme,
uttrykkelig/stilltiende samtykke) + «hvem eier begrepet»-koblinger + «hva er
utdragets funksjon» (premiss/intuisjon/illustrasjon) + «hvilken feil begår
kandidaten»-gjenkjenning. Quiz = redegjørelses-/sitattolkningstrening.
Prøvekapitler og øvingseksamener bærer også flervalg (se kvotetabell).

### Kvotetabell (AUTORITATIV — bindende total, aldri overstyr)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 3 | 46 | 40 | 0 (dekkes av Del 4-prøven + øvingseksamener) |
| 1 | 3 | 72 | 78 | 4 |
| 2 | 6 | 142 | 154 | 4 |
| 3 | 3 | 68 | 72 | 4 |
| 4 | 5 | 66 | 64 | 4 |
| **Sum kapittelkvoter** | **20** | **394** | **408** | **16** |

Prøvekapitler + øvingseksamener bærer i tillegg (bindende justering for å ligge
trygt over gulvet ≥500 og la søylene Rawls/frihet bære ekstra tetthet):

| Kilde | Quiz | Flashcards |
|---|---|---|
| Kapittelkvoter (20 kap.) | 394 | 408 |
| Prøve 1.P (frihet) | 30 | 24 |
| Prøve 2.P (Rawls/rettferdighet — STØRST) | 40 | 34 |
| Prøve 3.P (autoritet/makt/moral) | 28 | 24 |
| Prøve 4.P (blandet sjanger + miniatyr-øving) | 28 | 24 |
| Øvingseksamener A/B/C (kap. 4.5) | 40 | 74 |
| **Sum** | **560 ✓ (≥500)** | **588 ✓ (≥500)** |

**Bindende total: quiz 560 · flashcards 588.** Del 2 (Rawls/rettferdighet) har
klart høyest tetthet; Del 1 (frihet) nest høyest — de to søylene. Flashcard-
profil: begrep↔tenker↔primærtekst-koblinger. options[0] = riktig i staging;
runtime stokker.

## Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json; json.load(open('…'))"` på hver fil.
2. Kvotetelling mot skjelettet (toppnivå definition-blokker med title + quiz)
   — mot kvotetabellen over (autoritativ, total 560/588).
3. Forbudt-termer-grep = 0 (tom liste for STV1100 — no-op).
4. Alle kryssbok-lenker peker på eksisterende kapittelfiler i
   `src/lib/data/chapters/`.
5. **Læringsløkke:** `content[]` veksler teori → eksempel/utdrag → oppgave i
   løkker med `exercise`-blokker INLINE (ikke all teori topp / alle oppgaver
   bunn). Unntak: prøve-/modellbesvarelse-/øvingseksamenkapitler.
6. **Forkunnskapsdekning:** gå gjennom hver `exercise` og bekreft at den kun
   hviler på stoff introdusert tidligere i kapitlet eller i en referert
   forkunnskap — ingen usett begrep/tenker/utdrag/sjangerregel.
