# Byggekontrakt: FIL1001 Innføring i metafysikk og bevissthetsfilosofi (UiO) — teknisk kontrakt for kapittelforfattere

Gjelder ALLE forfatter-agenter som bygger kapitler til `fil1001`. Faglig innhold
styres av `SKJELETT.md` (identitetsseksjonen §1 + per-kapittel-DNA i §3) — les
ditt kapittels avsnitt der ORDRETT, og `EKSAMENSANALYSE.md` ved behov. Denne
kontrakten definerer format, sjangerkrav og kvalitetsporter, og er bindende der
den er mer presis enn skjelettet. **Ved faglig konflikt vinner SKJELETT.md; ved
format- eller sjangerkonflikt vinner denne kontrakten.** Instansiert fra
`../BYGGEKONTRAKT-MAL.md`.

**Arketype: drøfting** (`../DNA-drofting.md`), ren undertype — ingen lånte
elementer fra regnefag eller jus. Undertypepreg: **argumentrekonstruerende
essayfag med tankeeksperiment-kanon**. Eksamen er fire frittstående
drøftingsessay uten hjelpemidler, og hver enkelt oppgave må bestås separat.

**Nærmeste bygde søskenbok:** `exphil03` (samme institutt, samme arketype, samme
institusjon). Kopier arbeidsmåte og formkrav derfra — **aldri faglig innhold**.
Merk to forskjeller som endrer byggingen:

1. EXPHIL03 har sitattolkning som dominerende sjanger. **FIL1001 har ingen
   sitatoppgave i noe sett** — derfor bygges det INGEN «sitatlager» i denne boka.
   DNA-drøftings sitatlager-/utdragskrav er ikke relevante her, og
   **tankeeksperiment-katalogen (kap. 7.3) tar den plassen**.
2. EXPHIL03 bruker `difficulty: "medium"` gjennomgående. **FIL1001 bruker den
   norske trippelen `lett`/`middels`/`vanskelig`** (som `econ1310`), fordi
   README-kravet om difficulty-spredning og lett innstegsoppgave gjelder her.

---

## 1. LÆRINGSLØKKE-KONTRAKT (ufravikelig byggekrav — produkteier 9. juli 2026)

Fra skjelettets topp, tatt inn her som bindende byggekrav:

- HVERT kapittels `content[]` struktureres som gjentatte SMÅ løkker
  **Teori → Eksempel → Oppgave**, én løkke per posisjon/argument/begrep:
  1. posisjonen eller begrepet med pensumforankring (`definition` + `text` om
     posisjoner og spenninger), →
  2. `example` som viser argumentet BRUKT (rekonstruksjon, tankeeksperiment
     analysert, eller et kort besvarelsesutdrag skrevet som en god besvarelse
     ville skrevet det), →
  3. `exercise` INLINE i `content[]` rett etter eksempelet (plattformen renderer
     inline oppgaver), →
  4. neste posisjon.
- **ALDRI** all teori øverst med oppgavene samlet nederst. Grupper til
  meningsfulle biter — ikke én oppgave per setning.
- **Ingen usett forkunnskap:** ingen oppgave får kreve et begrep, en tenker, et
  tankeeksperiment eller en sjangerregel som ikke er introdusert tidligere i
  SAMME kapittel (t.o.m. eksempelet rett foran) eller i et tidligere kapittel
  referert i Forkunnskaper-blokken. Flytt teoribiten tidligere ved behov.
- **Unntak:** prøvekapitler, øvingseksamener og modellbesvarelseskapitler følger
  sin egen arketype (komplett oppgave først, løsning i `collapsible`).
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer
  REKKEFØLGEN.

---

## 2. Filplassering

Ett JSON-dokument per kapittel: `src/lib/data/chapters/fil1001-<del>-<nr>.json`
(prøvekapitler: `fil1001-<del>-prove.json`). Quiz til
`src/lib/data/quiz-staging/fil1001-<del>-<nr>.quiz.json`.

IKKE rør `_registry.json`, `_all.json`, `textbook-courses*.ts`, `quiz-data*.ts`
eller `institusjoner.ts` — wiring gjøres sentralt med
`scripts/hoyskolebok/wire-bok.py fil1001` (fase 5). Generer ALLTID JSON via
python `json.dump` — én uescapet anførsel har tidligere blokkert hele prebuild,
og dette faget er fullt av anførselstegn («esse est percipi», «what is it like
to be a bat?», «prinsen og skomakeren»).

**37 filer totalt:** 30 innholdskapitler (skjelettets §3) + 7 prøvekapitler
(`fil1001-1-prove` … `fil1001-7-prove`). Wiringen genererer prøvekapitlenes
metadata selv fra `BOKCONFIG.json` — filene må finnes, men skal ikke listes i
skjelettets §3.

---

## 3. Kapittel-JSON (toppnivå)

```json
{
  "id": "fil1001-4-2",
  "courseId": "fil1001",
  "chapterNumber": "4.2",
  "title": "…(fra skjelettet, ordrett)…",
  "description": "…(fra skjelettet)…",
  "estimatedMinutes": 55,
  "competenceGoals": ["kunne rekonstruere Kripkes argument mot psyko-nevral identitet trinn for trinn", "…"],
  "content": [ "…blokker…" ],
  "exercises": []
}
```

- **`chapterNumber` er ALLTID del-basert** (`<del>.<nr>`: `0.1`, `4.2`, `7.8`) —
  **ALDRI lineær** («17»). Prøvekapitler: `<del>.P`. Dette er den enkeltfeilen
  som ødelegger navigasjonen i en hel bok.
- `title` og `description` tas ordrett fra skjelettet.
- `competenceGoals`: 2–4 «kunne …»-formuleringer destillert fra kapittelets
  begrepskontrakt. Dette er **Skolesagas EGNE** mål — ALDRI kopi av UiOs
  offisielle læringsutbyttebeskrivelser. UI-et deklarerer kilden automatisk.
- **Ingen kald kode i `competenceGoals`** — ikke «S3», ikke «#2», ikke
  «A-besvarelse» uten forklaring.

### Rene tekstfelter — INGEN markdown (UFRAVIKELIG)

`title`, `topics` og `competenceGoals` renderes RÅTT i UI-et. Bruk ALDRI
markdown der (ingen `*kursiv*`, `**fet**`, ingen lenker). Verktitler i disse
feltene skrives med «anførselstegn», aldri kursiv — f.eks.
«Kim, "Philosophy of Mind"». Markdown og eventuell LaTeX hører kun hjemme i
`content`/`problem`/`solution`/`task`-feltene.

---

## 4. Blokktyper (eksakte felt — strukturreferanse: `src/lib/data/chapters/exphil03-2-4.json`)

- `text`: `{id, type: "text", content}` — markdown-prosa.
- `definition`: `{id, type: "definition", title, content}` — **`title`
  OBLIGATORISK**. Flashcards genereres KUN fra **toppnivå** `definition`-blokker
  med `title` (en definisjon nøstet inne i en `collapsible` teller IKKE).
  I FIL1001 er `title` en **kobling**: «Rigid designator (Kripke)», «Konstant
  konjunksjon (Hume)», «Minimal fysikalisme (Kim)», «Soft determinism (Conee &
  Sider)». Åpne innholdet med forklaringen i ORD.
- `theorem`: `{id, type: "theorem", title, content}` — brukes sparsomt, til
  eksplisitt formulerte teser og argumenter som skal stå som en enhet
  (McTaggarts argument, Kims fire eksklusjonspremisser, zombie-argumentets
  tenkelighet→mulighet-trinn).
- `example`: `{id, type: "example", title, problem, solution}` — `solution`
  skrives som et **godt besvarelsesutdrag** (se §6 Essaykontrakten), ikke som
  et referat.
- `tip` / `warning`: `{id, type, title, content}`.
- `exercise`: `{id, type: "exercise", exercise: {id, number, type: "classic",
  difficulty: "lett"|"middels"|"vanskelig", task, solution, hints: []}}`.
  ALDRI `solutionVideo`, `allowsUpload`, `allowsCanvasDrawing`, `answer` eller
  `subTasks` (deloppgaver skrives inn i `task`/`solution`, se §8).
- `collapsible`: `{id, type: "collapsible", title, buttonText, content: [blokker]}`
  — feltnavnet er `content` og det skal inneholde BLOKKER. En `text`-nøkkel
  eller tom array rendrer som en tom boks og er en byggefeil.

Blokk-id-er: `<kapittel-id>-<løpenavn>` (f.eks. `fil1001-4-2-def-rigid`), unike
i kapitlet. Duplikate blokk-id-er felles av kvalitetsporten.

---

## 5. Obligatorisk kapittelstruktur

### 5.1 Alltid først, i denne rekkefølgen

1. `tip` **Eksamensvinkel** — frekvens, sjangre og typiske oppgaveformuleringer,
   med de EKSAKTE tallene fra skjelettets «Eksamensbelegg»-linje («Dualisme i 13
   av 21 sett»). **Forfatteren skal ALDRI finne på frekvenstall.**
2. `text` **Forkunnskaper** — kapitler i boka som markdown-lenker
   (`[kap. 3.2](/fil1001/fil1001-3-2)`) + eventuelle kryssbok-lenker fra
   tabellen i §12. «Dette kapitlet kan leses uten forkunnskaper» der skjelettet
   sier `prerequisites: ingen`. **«Sist du var her»:** i kapitler med stor
   avstand til forkunnskapen (4.2 bygger på 3.2; 4.4 på 4.3; 7.6–7.8 på
   temadelene) SKAL blokken VISE de 2–3 kjernepåstandene ferdig oppfrisket
   (f.eks. «rigid designator = betegner det samme i alle mulige verdener der
   objektet finnes»), ikke bare lenke.

### 5.2 Temakapittel (Del 1–6) — DNA-drøfting + skjelettets per-kapittel-DNA

Etter eksamensvinkel og forkunnskaper går kapitlet i LÆRINGSLØKKER (§1):

- `text` **Temaet i fagets landskap** — hvilket problem temaet svarer på, og
  hvorfor det er et problem. Abstrakte kjernetemaer åpner med et **hverdagsanker
  FØR apparatet** (se §9).
- `definition` **kjernebegreper** — flashcard-kilden, toppnivå med `title`,
  hvert begrep forankret i tenker/verk fra skjelettets begrepskontrakt.
- `text` **posisjoner og spenninger** — drøftingsaksene fra skjelettet, skrevet
  slik at leseren har råstoff til BEGGE sider.
- `example` **anvendelse** ×1–3 — case-forslagene fra skjelettet, nyskrevet.
- `exercise` ×4–8 INLINE — 2–3 begreps-/kontrollspørsmål (minst én `lett`
  innstegsoppgave tidlig), 1–2 kortdrøftinger med disposisjonsforslag som
  løsning, 1–2 eksamenslike oppgaver med momentliste.
- `warning` **Typiske feil** — feilkodene fra skjelettets «Typiske feil»-linje,
  **glosset ved første bruk PER KAPITTEL**: «(#2 — stråmann: å blande Humes
  regularitet med Lewis' kontrafaktiske analyse)».
- `collapsible` **Pensumkart for kapitlet** — markdown-tabell
  `| Tenker | Verk | Eier disse begrepene/argumentene |`. Åpner med
  begrepsbank-notisen (§9).
- `collapsible` **Repetisjon** — 4–6 korte spørsmål fra forkunnskapskapitlene.

### 5.3 Sjangerkapittel (7.1–7.4)

1. `tip` Eksamensvinkel — sjangeren over årene.
2. `text` **Oppskrift** — trinnvis disponering med tidsbudsjett (§6.5).
3. `example` **gjennomskrevet besvarelse** med margkommentarer om hva som gir
   uttelling hvor (margkommentarer skrives som egne linjer i `solution`:
   `> Margnotat: her er sammenhengen Hume→Lewis påvist — dette er A-aksen.`).
4. `exercise` ×4 nyskrevne oppgaver i sjangeren, løsning = momentliste +
   disposisjonsforslag (ikke fullt essay).
5. `warning` Typiske feil + `collapsible` med sjangerens sjekkliste.

Kap. 7.3 har i tillegg **tankeeksperiment-katalogen** som `collapsible`: for
hvert av de tolv faste eksperimentene — tenker, hva det skal vise, springende
premiss, standardinnvending, hjemkapittel (som markdown-lenke).

Kap. 7.4 avslutter med bokas ene **kalde bank**: 8–10 nyskrevne
oppgaveformuleringer UTEN `hints`, fasit = ren momentliste, eksplisitt merket
«Kald bank — ingen hint. Her er det å mobilisere posisjonene selv som trenes.»
Dette er eneste unntak fra hint-kravet i §9.

### 5.4 Feilvaksinekapittel (7.5)

Én seksjon per feil #1–#10: (a) feilen slik den rammer i en besvarelse,
(b) nyskrevet «slik ser den ut»-utdrag, (c) omskrevet A-versjon av samme
passasje, (d) varsellampe-heuristikk. Deretter gjenkjenningsoppgaver
(flervalgsformat i `exercise.task` med stokket fasit, se §9).

### 5.5 Modellbesvarelseskapittel (7.6–7.8)

1. `text` med den nyskrevne oppgaven, ordrett slik den ville stått i et sett.
2. `collapsible` **A-besvarelse** — full, sammenhengende tekst med margnotater.
   «— naturlig pausepunkt —» mellom hovedseksjonene.
3. `collapsible` **Kommentert C-besvarelse** — samme oppgave, korrekt men flat,
   med notater om gapet opp til A rammet inn som **oppgraderingsmeny**.
4. `collapsible` **Midtnivå-besvarelse (B)** — se §7.3: minst ÉN slik i boka,
   plassert i kap. 7.7.
5. `tip` **Sensorblikket** — momentliste bygget på de fem kjennetegnene (§6.2)
   + bestått-per-oppgave-regelen.
6. `warning` **Typiske feil** — feilene C-versjonen demonstrerer. (Kravet om
   `warning`-blokk gjelder også disse kapitlene; tittelen «Modellbesvarelse»
   fritar dem IKKE i kvalitetsporten.)

### 5.6 Prøvekapitler (`fil1001-<del>-prove`, del 1–7)

Id `fil1001-<del>-prove`, `chapterNumber` `<del>.P`, tittel «Prøver til del
<del>: <deltittel>».

Struktur: `tip` (dekning + «4 prøver à ~30–45 min» + «kan trygt deles over flere
kvelder — én prøve per økt») + `text` Forkunnskaper + fire `collapsible`
(«Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med nyskrevne oppgaver og full
fasit. Prøvenes tema per del står i skjelettets §4 «Prøve-kvote Del N» — følg
dem punkt for punkt.

**Fasitstruktur for drøftingsfag** (obligatorisk i hver prøvefasit):

> **Må-punkter** (uten disse er oppgaven ikke bestått) · **Pluss-punkter** (det
> som løfter mot A) · **Feller** (det sensor faktisk trekker for, med feilkode).

Etter hver prøvefasit: **avkryssbar selvdiagnose-sjekkliste (☐)** — bruk den
binære rubrikken i §6.3. Kap-referanser i fasitene som markdown-lenker. **Ingen
quiz og ingen begrepsbank i prøvekapitler.**

### 5.7 De tre øvingseksamenene — hjemsted (AVGJORT HER)

Skjelettets §4 krever tre komplette øvingseksamener (A og B i «4 av 8»-format,
C som delt sett), men §3 gir dem **ikke egne kapitler**, og bokas kapittelantall
(30) er bindende. Wiringen (`wire-bok.py`) plukker dessuten kun kapitler på
formen `#### Kapittel <d>.<n>` fra skjelettet, så en ny fil utenfor det mønsteret
ville aldri blitt wiret.

**Bindende løsning:** de tre øvingseksamenene bygges som tre ekstra
`collapsible`-er i `fil1001-7-prove`, ETTER de fire prøvene:

- «Øvingseksamen A — 4 av 8 (dagens format)», buttonText «Vis øvingseksamen A»
- «Øvingseksamen B — 4 av 8 (ny variant)», buttonText «Vis øvingseksamen B»
- «Øvingseksamen C — delt sett (Del I Metafysikk + Del II Bevissthetsfilosofi)»,
  buttonText «Vis øvingseksamen C»

Hver inneholder det komplette nyskrevne settet FØRST (åtte oppgaver, eller 5+5 i
delt sett), deretter momentliste-fasit per oppgave med nivåbeskrivelse
(bestått / C / A) bygget på de fem kjennetegnene. `tip`-blokken øverst i
kapitlet deklarerer eksplisitt: «Fire prøver à ~30–45 min + tre komplette
øvingseksamener à 4 timer. Ta én om gangen — hele kapitlet er ikke en økt.»
Innsett «— naturlig pausepunkt —» mellom eksamenene.

Øvingseksamen A og B skal i fasiten demonstrere **bestått-per-oppgave-regelen**
(hvorfor fire jevne svar slår tre glimrende og ett tynt) og **overlapp-forbudet**
(feil #8). Øvingseksamen C skal demonstrere feil #7 (å svare bare i den ene
delen).

---

## 6. ESSAYKONTRAKTEN (fagets kjerne — bindende for alle løsninger og modellsvar)

Alt i denne seksjonen skal etableres i kap. 0.2 og refereres i resten av boka.
Det er dette som gjør at ni forfattere skriver samme bok.

### 6.1 Kildegrunnlaget bak kravene — si det presist, aldri mer

FIL1001 har **ingen publiserte løsningsforslag og ingen fasit**. Arkivet
(`~/Desktop/Eksamner/UiO/FIL1001/`, verifisert 26. juli 2026) inneholder
**22 filer, alle frie eksamensoppgaver** (åndsverkloven § 14): 19 filer med
ordinære eksamenssett H2005–H2024 og 3 utsatte prøver. Fordi V2017 finnes i både
bokmåls- og nynorskversjon (to filer, samme sett), er dette **21 unike sett** —
og 21 er nevneren i ALLE frekvenspåstander i boka. Mappene `fasit/`,
`losningsforslag/` og `sensorveiledning/` er **tomme**.

Det finnes **nøyaktig ÉN sensorveiledning**: for H2018, og den ligger på siste
side av `utsatt/FIL1001-H2021-utsatt.pdf`, ikke som eget dokument.

**Konsekvenser (ufravikelige):**

- ALLE modellbesvarelser, momentlister og fasiter i boka er **nyskrevet av oss**
  fra pensumkunnskap. Boka skal ALDRI antyde at den gjengir ekte
  studentbesvarelser eller offisielle løsningsforslag.
- Sensorkravene hviler på **tre ben**: (1) den ene H2018-veiledningen,
  (2) oppgavenes egne instruksjonsverb, (3) UiOs generelle kvalitative
  A–F-beskrivelser som veiledningen viser til. Der en terskel er utledet og ikke
  sensor-verifisert, sier boka det.
- Ordet **«sensorveiledninger» i flertall er forbudt** (grep-sjekkes, §11).
  Skriv «den ene sensorveiledningen (H2018)».
- **Ingen sidetall noe sted** — arkivet attesterer ingen (grep-sjekkes).

**Kildenote-mal for kap. 0.1** (bruk denne ordlyden, tilpasset i språk, aldri i
tall):

> Boka er kalibrert mot **21 unike eksamenssett** fra Institutt for filosofi,
> idé- og kunsthistorie og klassiske språk (IFIKK), UiO: 18 ordinære sett
> H2005–H2024 og 3 utsatte prøver (V2017 finnes i både bokmål og nynorsk og
> telles som ett sett). De ni nyeste settene er lest grundig; de eldre er lest
> for temaregistrering. **Det finnes ingen offisielle løsningsforslag og ingen
> fasit for dette emnet**, og bare **én sensorveiledning** — for høsten 2018.
> Alt du finner av modellbesvarelser og momentlister i denne boka er derfor
> skrevet av oss, ut fra pensum og oppgavenes egne krav, ikke hentet fra noen
> fasit. **Forbehold:** settene mangler for 2007, 2020, 2021 (ordinær) og 2025,
> og nye sett kan endre bildet.

### 6.2 De fem kjennetegnene (H2018-veiledningen, omskrevet)

Et godt svar har mange eller alle av disse egenskapene:

1. det er **klart skrevet og strukturert**;
2. det viser **god kunnskap om de filosofiske teoriene i pensum**;
3. det **påviser sammenhenger** mellom de ulike argumentene rundt ett tema;
4. det **demonstrerer selvstendighet og kritiske ferdigheter** i diskusjonen;
5. det **formulerer og argumenterer effektivt for et eget standpunkt**.

Punkt 3 er **A-aksen** i denne boka. Alle sjangerkapitler, modellbesvarelser og
prøvefasiter skal referere til de fem kjennetegnene ved nummer og med ordlyd —
aldri bare «sensor vil ha god drøfting».

### 6.3 Hva som skiller A fra C — den binære rubrikken (bindende)

Dette er bokas selvrettingsverktøy. Det skal stå i kap. 0.2, gjentas i kap. 7.1,
og hver prøvefasit skal vise tilbake til det. Rubrikken er **binær** — leseren
skal kunne krysse av uten skjønn:

☐ Er posisjonen plassert i én setning før rekonstruksjonen begynner?
☐ Er argumentet rekonstruert som **premiss → premiss → konklusjon**, ikke
  referert?
☐ Er minst én **navngitt standardinnvending** gjengitt i sin sterkeste form?
☐ Er posisjonens **eget svar** på innvendingen med (dialektikk)?
☐ Er det påvist minst **én eksplisitt sammenheng** til et annet argument eller
  en annen tenker i samme tema? *(kjennetegn 3 — A-aksen)*
☐ Er standpunktet **begrunnet med premisser fra din egen drøfting**, ikke en ny
  påstand til slutt?
☐ Er den **navngitte teksten** brukt der oppgaven navngir den (Conee & Siders
  eller Kims term)?
☐ Er alle ledd i oppgaveformuleringen besvart (tell instruksjonsverbene)?

**Tersklene** (formuler dem slik overalt i boka):

| Nivå | Hva som faktisk må stå der | Merknad |
|---|---|---|
| **Bestått (E/D) per oppgave** | Korrekt og relevant redegjørelse for det oppgaven spør om, pluss minst ett reelt forsøk på kritisk drøfting. | Den harde porten: dette må gjelde ALLE fire svarene. |
| **C** | Jevnt god kunnskap OG kritisk drøfting i alle fire svar; posisjonene gjengitt med premisser; innvendinger **veid**, ikke ramset opp. | C er en god og vanlig karakter — si det. |
| **A/B** | Selvstendighet og kritiske ferdigheter: kandidaten **behandler** stoffet — rekonstruerer, veier, kobler argumenter på tvers — yter posisjonene rettferdighet og lander en begrunnet konklusjon. | Forskjellen A/C ligger i drøftingskvalitet og påviste sammenhenger, ikke i mengde stoff. |

**Standpunktet er fritt.** Alle utfall kan gi toppkarakter når begrunnelsen er
stringent. Det er begrunnelseskvaliteten som premieres, aldri konklusjonens
retning. Dette skal sies eksplisitt hver gang boka ber leseren ta stilling.

**Bestått-per-oppgave-regelen** er bokas strategiske hovedpoeng: hver enkelt
oppgave må kunne vurderes til bestått for at det gis samlet ståkarakter. Fire
jevnt gode svar slår tre glimrende og ett tynt. Derfor: **temabredde slår
spisskompetanse**. Regelen nevnes i kap. 0.1, i hver øvingseksamenfasit, og
hver gang boka anbefaler en prioritering.

### 6.4 Instruksjonsverbet styrer sjangeren (bindende)

Hver oppgave i boka — og hver modellbesvarelse — skal svare i den sjangeren
instruksjonsverbet krever. Å svare i feil sjanger er feil #1 eller #7, uansett
hvor godt innholdet er.

| Instruksjonsverb i oppgaven | Hva svaret MÅ inneholde | Sjanger |
|---|---|---|
| «Gjør rede for X» / «redegjør for» | Presis, trinnvis framstilling med premisser og konklusjon. Ikke løs oppsummering, ikke vurdering ennå. | S1-ledd 1 |
| «Forklar hvordan X motiveres» | Hvilket problem posisjonen svarer på, og hvilke intuisjoner eller argumenter som driver den fram. | S1-ledd 1 |
| «Drøft» / «diskuter kritisk» / «drøft innvendinger» | Minst én sterk, navngitt innvending + posisjonens eget svar + en **veiing** av hvem som står sterkest. | S1-ledd 2 |
| «Ta stilling til» / «hva mener du er mest plausibelt? hvorfor?» | Eksplisitt standpunkt + begrunnelse som hviler på premisser du allerede har drøftet. | S1-ledd 3 |
| «Sammenlign X og Y» / «hvordan skiller de seg?» | Begge posisjoner redegjort for, deretter **eksplisitte sammenligningspunkter langs 2–4 dimensjoner**, og en kort vurdering per dimensjon. Aldri to parallelle monologer. | S2 |
| «Hva er X? Er X mulig? Hva viser i så fall …?» | Rekonstruer tankeeksperimentet/argumentet presist, identifiser det **springende premisset**, vurder om det lykkes, svar på spørsmålet som faktisk er stilt. | S3 |
| Flerdelt a/b/c/d | Hver deloppgave besvares for seg, men progresjonen bygges (definer → still opp problemet → løsning → innvending). Å hoppe over én del er feil #7. | S4 |
| «Drøft med utgangspunkt i pensumtekstene» | Ramme inn spørsmålet → mobiliser SELV de 2–3 mest relevante pensumposisjonene → vei → konkluder. | S5 |

Sammensatte formuleringer er normen («gjør rede for … drøft … og ta stilling
til»). **Tell instruksjonsverbene, og svar på alle.** Dette skal drilles
eksplisitt i kap. 7.1 og i prøve 1 til del 7.

### 6.5 Tidsbudsjett (bruk denne modellen konsekvent i hele boka)

Eksamen er 4 timer = 240 minutter, fire oppgaver, ingen hjelpemidler:

- **15 min:** les hele settet, velg fire oppgaver, skriv stikkordsdisposisjon.
- **4 × 45 min = 180 min:** skriving, én oppgave om gangen.
- **45 min buffer:** kladd underveis, gjennomlesing og retting til slutt.

Der boka oppgir «ca. 45 min per oppgave» er det **skrivetid**; differansen opp
til 240 er settlesing, disponering og gjennomlesing. Denne differansen skal
forklares eksplisitt der den først nevnes (tidsbudsjett-konsistens). I det gamle
delte regimet fordeles de samme 180 skriveminuttene over deloppgavene a/b/c/d
etter deres vekt.

---

## 7. MODELLBESVARELSER (ærlighet, nivå og variasjon)

### 7.1 Ærlig merking — ufravikelig

- Hver modellbesvarelse innledes med én linje: **«Nyskrevet modellbesvarelse —
  skrevet av oss for denne boka. FIL1001 har ingen publiserte løsningsforslag,
  så dette er ikke en ekte kandidatbesvarelse.»**
- En boks som heter «C-besvarelse» skal **VÆRE en C** — tittel, tekst og
  margnotater skal stemme. En polert A merket som C er en byggefeil.
- Ordet «studentbesvarelse» er forbudt i bokinnholdet (grep-sjekkes, §11).
  Skriv «modellbesvarelse».

### 7.2 Meta-fasit er FORBUDT

«En A-besvarelse ville her ha drøftet …» er en regibemerkning, ikke en fasit.
**Drøftelsen skal skrives UT** — kort, skarp, med premisser og landing.
Grep-sjekkes: `en A-besvarelse ville|ville ha drøftet` = 0 treff.

Margnotater er lov og ønsket, men de skal **peke på tekst som faktisk står
der**: «> Margnotat: her er innvendingen gjengitt i sin sterkeste form før den
avvises — det er kjennetegn 4.»

### 7.3 Nivåfordeling i boka (bindende)

| Kapittel | Nivåer som SKAL finnes |
|---|---|
| 7.6 (Hume vs. Lewis) | A-besvarelse + kommentert C-besvarelse |
| 7.7 (qualia mot fysikalismen) | A-besvarelse + kommentert C-besvarelse + **midtnivå-besvarelse (B)** |
| 7.8 (Descartes vs. Kripke) | A-besvarelse + kommentert C-besvarelse |
| 0.2 (essayhåndverket) | Samme korte oppgave besvart på E-, C- og A-nivå med margkommentarer |

**Midtnivå-besvarelsen (B) i kap. 7.7** er et README-krav: realistisk
førsteårsspråk, litt rotete disposisjon, ett begrep upresist, men faglig god —
med margnotater om hva som er **BRA NOK** og de 2–3 grepene som skiller den fra
A. Leseren trenger et realistisk sammenligningspunkt, ikke bare polert A og
karikatur-C.

### 7.4 Konklusjonsvariasjon (bindende)

Modellbesvarelsene skal **ikke alle lande på samme kompromissform**
(«X er et hensyn, ikke hele svaret»):

- **Kap. 7.6 skal konkludere SKARPT** — modellbesvarelsen tar klart parti (f.eks.
  at den kontrafaktiske analysen er mest tilfredsstillende *til tross for*
  preemption, med begrunnelsen utskrevet) og er likevel toppnivå. Margnotat:
  «Forbehold er et verktøy, ikke obligatorisk garnityr. En skarp, veid
  konklusjon er en fullgod A-form.»
- **Kap. 7.7 og 7.8** kan lande mer avveiende, men må da begrunne selve
  avveiningen — «det står uavgjort» uten grunner er feil #4.

### 7.5 Vippe-case (bindende)

Minst én drøftingsoppgave i boka skal ha to fullt forsvarlige landinger. Fasiten
skriver **UT begge lesningene** og merker oppgaven **«(omstridt — begge
landinger forsvarlige)»**. Anbefalt plassering: kap. 6.2 (er tenkelighet et
holdbart bevis for mulighet?) eller kap. 3.3 (lykkes van Inwagens
konsekvensargument?). Entydige fasiter hele veien trener aldri håndtering av
ekte filosofisk ambivalens.

---

## 8. FILOSOFISK PRESISJON (fagets sannhetskontroll)

Dette er FIL1001s motstykke til regnefagenes numeriske parametersjekk. Brudd
her er faglige feil, ikke stilfeil.

### 8.1 Sterkeste form først (steelman-regelen)

En posisjon skal gjengis i **sin sterkeste form, med den beste grunnen for
den**, FØR den kritiseres. Konkret: si hvilket problem posisjonen løser og
hvorfor kloke folk har holdt den. Å innføre en posisjon gjennom innvendingen mot
den er stråmann (feil #2) og er forbudt.

Relevans-ramme for posisjoner en moderne leser instinktivt avviser (Berkeleys
idealisme, Lewis' modale realisme, panpsykisme, McTaggarts uvirkelighetstese):
selg dem med **hvilket reelt problem de svarer på** + en moderne parallell —
aldri bare med eksamensfrekvens. Frekvens forklarer hvorfor man må lese det;
rammen forklarer hvorfor det ikke er tull.

### 8.2 Standardinnvendinger skal navngis

Boka bruker de etablerte navnene, ikke omskrivninger. Minimumsliste (hver skal
forekomme, med forklaring ved første bruk):

interaksjonsproblemet · multippel realiserbarhet · systemsvaret (mot kinesisk
rom) · ability-svaret og acquaintance-svaret (mot Mary) · absent qualia (Chinese
Nation) · «incredulous stare» (mot modal realisme) · «hvem designet designeren»
· det antropiske prinsipp og multivers-svaret (mot fine-tuning) · det naturlige
ondes problem (mot fri vilje-teodicéen) · Reids offiserparadoks (mot Lockes
minneteori) · sirkularitetsinnvendingen mot minneteorien · det Machianske svaret
(mot bøtteargumentet) · preemption, overdeterminering og transitivitetsbrudd
(mot kontrafaktisk analyse) · epifenomenalisme-kritikken (Kim mot Davidson) ·
kausal lukkethet som omstridt premiss.

### 8.3 Tilskriv aldri en konklusjon tenkeren ikke trakk

Disse presiseringene er obligatoriske der posisjonene behandles, og de er
samtidig de tyngste dokumenterte feilene i faget:

| Ikke skriv | Skriv |
|---|---|
| «Kripke er substansdualist» | Kripke angriper **identitetspåstanden** med modal-semantiske midler; han slutter ikke uten videre til to substanser slik Descartes gjør. |
| «Nagel viser at fysikalismen er usann» | Nagel argumenterer for at fysikalismen ikke fanger bevissthetens **subjektive karakter** slik den nå er formulert — han kaller den umoden, ikke motbevist. |
| «Jackson mener at fysikalismen er usann» | Jackson **argumenterte** slik med kunnskapsargumentet, men skiftet senere selv til en fysikalistisk/funksjonalistisk posisjon. Nevn skiftet kort. |
| «Hume benekter kausalitet» | Hume **analyserer** kausalitet som konstant konjunksjon, nærhet og suksesjon, og benekter at vi observerer en **nødvendig forbindelse**. |
| «Berkeley benekter at ting finnes» | Berkeley benekter **materiell substans**, ikke de persiperte tingene. |
| «Lewis' mulige verdener er abstrakte» | De er **konkrete**, like virkelige som vår, bare kausalt og romlig isolerte — det er hele poenget. |
| «Parfit mener at personer ikke finnes» | Parfit er **reduksjonist**: personers eksistens består i upersonlige fysiske og psykologiske fakta, og identitet er ikke det som betyr noe. |
| «Davidson er reduksjonist» | Anomalisk monisme er **token-identitet uten** strenge psyko-fysiske lover — en ikke-reduktiv fysikalisme. Det er nettopp derfor Kim angriper den. |
| «Chalmers er substansdualist» | Chalmers forsvarer **egenskapsdualisme/naturalistisk dualisme**. |
| «Wittgenstein var logisk behaviorist» | Om Wittgenstein var logisk behaviorist er **omstridt** — framstill det som et tolkningsspørsmål. |
| «Identitetsteorien sier at "smerte" betyr "C-fiber-fyring"» | Identiteten er **a posteriori og vitenskapelig**, ikke en betydningslikhet — derav lyn-analogien. |
| «Funksjonalisme = atferdsdisposisjoner» | Funksjonalismen tillater **indre** tilstander definert ved kausalrolle. Dette er den viktigste avgrensningen mot behaviorismen. |
| «Determinisme = fatalisme» | van Inwagens skille: fatalisme = utfallet uansett hva vi gjør; determinisme = utfallet **gjennom** våre handlinger. |

### 8.4 Der litteraturen er uenig, skal uenigheten stå

Skjul aldri en levende strid bak en falsk konsensus, og skriv aldri «de fleste
filosofer mener». Der posisjonene faktisk står mot hverandre — lykkes
tenkelighet→mulighet-slutningen? lærer Mary et nytt faktum eller en ny evne? er
Blacks to kuler virkelig to? treffer kinesisk rom funksjonalismen eller bare
symbolmanipulasjon? holder kausal lukkethet som premiss? — skal boka si at
spørsmålet er åpent, gi den beste grunnen på hver side, og la leseren ta
stilling. Dette er dessuten selve ferdigheten eksamen måler.

### 8.5 Kalibrering mot de to pensumankerne (UFRAVIKELIG)

Der oppgavene siterer Conee & Siders eller Kims term, skal **den** brukes
ordrett. Å skrive generelt om «kompatibilisme» der oppgaven ber om Conee &
Siders *soft determinism*, eller om «fysikalisme» der den ber om Kims *minimal
fysikalisme*, er dokumentert fellekilde (feil #5).

| Term | Ankertekst | Kapittel der den SKAL stå ordrett |
|---|---|---|
| «soft determinism» | Conee & Sider, «Riddles of Existence» | 3.3 |
| «the Space-Time Theory of Time» | Conee & Sider | 2.1, 2.2 |
| «the psychological continuity view» | Conee & Sider | 2.4 |
| «minimal fysikalisme» | Kim, «Philosophy of Mind» | 4.3 |
| de tre reduksjonsmodellene | Kim | 4.3 |
| «eksklusjonsargumentet» | Kim | 4.4 |

Hvert av disse kapitlene skal i tillegg ha en eksplisitt setning om at generell
omtale ikke er nok når oppgaven navngir teksten.

---

## 9. Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»; SKAL i førsteutkastet)

- **Kun eksamensrelevant stoff.** «Bør kjenne til»-stoffet (Mackies error theory
  i 1.4; intensjonalitet og de fire randtemaene i 6.3; Wittgenstein i 5.2)
  plasseres SIST i sitt kapittel og merkes eksplisitt med sin lave frekvens.
- **Godt, flytende norsk (UFRAVIKELIG).** Hele setninger, korte avsnitt (2–4
  setninger), aktiv «du»-form. Telegramstil er FORBUDT: «Posisjon: dualisme.
  Argument: tvil.» skal være «Descartes forsvarer substansdualismen, og
  argumentet hans starter i den metodiske tvilen.» Konkret norsk knagg før
  fagtermen; presisjon vinner ved tvil.
- **Ingen uforklart sjargong.** Fagstoffet er nybegynnervennlig — det er
  METAspråket som må ryddes. Sjangerkodene S1–S5, feilkodene #1–#10 og all
  karaktersjargong («C-stoff», «A-aksen», «bestått-porten») forklares i
  klarspråk ved FØRSTE bruk **per kapittel**. Latinske og engelske fagtermer
  (res cogitans, esse est percipi, qualia, supervenience, rigid designator,
  a posteriori) får norsk knagg først, fagtermen i parentes.
- **Hver oppgave synlig eksamensforankret** med sjanger-tag i ledende parentes:
  `(Eksamenssjanger S3 — tankeeksperimentanalyse; oppgaven er ofte formulert som
  selve eksperimentet.)` Sjangerkoden skrives fullt ut ved første bruk per
  kapittel. Vanskelighetsgraden skrives ALDRI inn i `task` (den ligger i
  `difficulty`).
- **Deloppgaver på egen linje med fet merking:** `…\n\n**a)** …\n**b)** …`.
  ALDRI a) b) c) bak hverandre i løpende tekst. Små bokstaver, aldri A)/[A].
  Ikke bruk `subTasks`.
- **Inline-nummerering** `(1) … (2) … (3) …` med tre eller flere påfølgende
  settes på egne linjer. Gjelder særlig premissoppstillinger — som uansett bør
  settes som egne linjer: «P1: … P2: … K: …».
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. X.Y](/fil1001/fil1001-X-Y)`. Død «se kapittel
  X.Y»-tekst er FORBUDT. Aldri lenker i `title`-felt.
- **Karakter-realisme:** Del 0 sier eksplisitt at **C er en god og vanlig
  karakter**, særlig i et innføringsemne i første studieår. Formuleringen
  **«Prioritet: perfekt» er FORBUDT** — skriv «høyeste prioritet».
  Prioritetsklassene fra skjelettet oversettes slik: *perfekt* → **høyeste
  prioritet**, *kunne* → **kunne**, *kjenne* → **bør kjenne til**. «Gapet til A»
  rammes inn som **oppgraderingsmeny**, ikke mangelliste. Eksamen er A–F, så
  «bestått-på-marginen»-varianten er ikke påkrevd — men fordi hver oppgave må
  bestås separat, SKAL boka minst ett sted vise et svar som **så vidt** passerer
  bestått-porten, med konkret oppgraderingsmeny (legges i kap. 0.2, E-versjonen).
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter HVER prøvefasit — bruk den
  binære rubrikken (§6.3). I hvert temakapittel: minst én **lett
  innstegsoppgave** tidlig (`difficulty: "lett"`, ren gjengivelse med egne ord,
  vennlig fasit) før første fulle eksamenssjanger.
- **Hverdagsanker + verdens-caser:** abstrakte kjernetemaer åpner med et konkret
  anker FØR apparatet (tid: at fortiden føles låst og fremtiden åpen;
  universalier: at to skruer fra samme form er *to*; qualia: at du ikke kan vise
  noen hvordan rødt ser ut for deg). Eksemplene er verdens-caser — ALDRI
  metaeksempler av typen «en medstudent skriver …».
- **Erfarings-bro (intuisjonsbroen):** filosofistudentens råstoff er egne
  intuisjoner, og de skal konverteres, ikke forkastes. Legg en kort `tip`-boks i
  kap. 0.2: (1) start i tenkerens begrep, (2) bruk intuisjonen som **premiss
  eller moteksempel** som må forsvares, aldri som begrunnelse alene, (3) koble
  tilbake til drøftingsaksen. Å bare advare mot «synsing» uten å vise
  konverteringen skyver bort leserne som har mest å bidra med.
- **Difficulty-spredning + kald bank:** boka skal ha genuint krevende oppgaver
  merket `difficulty: "vanskelig"` (og «(krevende)» i oppgaveteksten der det er
  til hjelp), ikke alt på middels. Én merket **kald bank** i kap. 7.4 (§5.3).
- **Hint på alle oppgaver:** hvert `exercise` har utfylte `hints`. Første hint =
  hvilket begrep, hvilken tenker eller hvilket første grep oppgaven krever
  («Start i det springende premisset: hva må være sant for at tenkelighet skal
  gi mulighet?») — **ALDRI konklusjonen**. Eneste unntak er den kalde banken.
- **Stokket flervalg og varierte fasit-mønstre:** statiske flervalg i
  prøve-`collapsible`-er har stokkede fasit-bokstaver (ALDRI «alle a»), og
  prøve-tipen sier hvor flervalget bor. Gjelder ALLE ensartede fasitlister,
  også «hvilken feil begår kandidaten»-drillen i kap. 7.5 — aldri samme feilkode
  som fasit to ganger på rad, aldri «alle er feil #2».
- **Distraktorer straffer aldri grundig lesing:** en distraktor gjengir ALDRI
  bokas egen presisering som «galt» svar. Ligger en distraktor nær sannheten
  (typisk: Nagel «umoden» vs. «usann», Kripke vs. Descartes), skal
  `explanation`/fasitkommentaren forklare eksplisitt hvorfor den ikke holder.
- **Signal-/hintbokser ETTER oppgaven:** en boks som varsler hva en drilloppgave
  tester («her ligger tenkelighet→mulighet-fella») plasseres ETTER oppgaven,
  aldri foran.
- **Frekvenstall = telte belegg:** hver «N av 21 sett»-påstand skal stemme
  EKSAKT med skjelettets belegg-liste, og nevneren er **alltid 21** (unike sett).
  Skal du snevre inn, si hvilken delmengde du mener: «i alle fire settene med
  4-av-8-format (V2017, H2022, H2023, H2024)».
- **Begrepsbank = oppslagsverk:** hvert pensumkart og hver stor begrepsbank
  åpner med standardnotisen: «Begrepsbanken er flashcard-/repetisjonsstoff — den
  gjentar det du nettopp har lest. Hopp trygt over ved førstegangslesing;
  tidsanslaget for kapitlet gjelder kjernestoffet.» `definition`-blokker slettes
  ALDRI for å «rydde» — de er flashcard-kilden.
- **Øktmerking:** alle kapitler med `estimatedMinutes > 45` — altså 0.2, 1.1–1.4,
  2.1–2.4, 3.1–3.3, 4.1–4.4, 5.1, 5.2, 6.1, 6.2, 7.3, 7.5, 7.6 og 7.7 — har
  tidsanslag per løkke («Løkke 3 — interaksjonsproblemet (~15 min)») eller
  eksplisitte «— naturlig pausepunkt —»-markører. Lange modellbesvarelser har
  pausepunkt mellom hovedseksjonene.
- **Tidsbudsjett-konsistens:** der en oppgaves deklarerte tid avviker fra summen
  av deltidene, forklares differansen (§6.5). «Lite tid?»-boksen sier eksplisitt
  at kapitlenes tidsanslag er **LESEtid**, og at den som skriver besvarelser for
  hånd bør legge på ca. ×1,5.

### 9.1 Del 0-pakken (alt dette SKAL finnes i kap. 0.1, der ikke annet er sagt)

- **«Slik leser du denne boka»-orienteringsboks** (type `text` eller `tip` —
  **ALDRI `definition`**, det ville endret flashcard-kvoten) med: karakterskalaen
  A–F og hva de tre sjiktene faktisk mestrer, hva «C-stoff» og «A-aksen» betyr,
  en kompakt liste over sjangerkodene S1–S5 skrevet fullt ut, og at typiske feil
  har et samlet register (#1–#10) med eget kapittel (7.5).
- **«Lite tid?»-boks** (`tip`): hurtigrute for 3–5 dager (kapittelrekkefølge +
  timeanslag; prioriter de ti kjernetemaene, ikke de tre favorittene) og ukeplan
  bygget av summerte `estimatedMinutes` (boka er ~1 665 min ≈ 28 timer lesetid).
- **Kildenote for frekvens-empirien** — ordlyden i §6.1, aldri utvidet.
- **Sjangerkort på ÉN side** som ER kortet: sjanger S1–S5 → én linjes oppskrift →
  typisk plassering og tidsbudsjett → vanligste feil. Ikke en lenkeliste.
- **Deltidsrute** 10–12 uker (~3 t/uke) med de tre øvingseksamenene fordelt på
  tre ulike helger — aldri stablet i siste uke.
- **«Lese mye, skrive lite»-boks:** legitim rute for lese-øveren (les oppgaven →
  formuler svaret mentalt i én setning → les modellbesvarelsen som sensor) +
  minimumsrådet: skriv minst ÉN øvingseksamen for hånd på tid — fire timer
  håndskrift er en fysisk ferdighet.
- **Bokas samlede oppslagskort** (DNA-drøftings «hvem eier hva»-kort): én
  `collapsible` med ren, printbar tabell **tankeeksperiment → tenker → hva det
  skal vise → hjemkapittel (lenke)** over alle tolv faste eksperimenter, pluss en
  kolonne for de åtte faste sammenligningsparene. Den fulle katalogen med
  springende premiss og standardinnvending bor i kap. 7.3; kortet i 0.1 er den
  glemsomme leserens gjenopptaksverktøy.
- **Bestått-per-oppgave-regelen** forklart som bokas strategiske hovedpoeng, med
  begge settformater («4 av N, fritt valg» og «delt sett») vist som nyskrevne
  miniatyrer.

---

## 10. Kvotekontrakt (AUTORITATIV — bindende total, aldri overstyr)

Verifisert mot skjelettets kvotesammendrag: alle deltotaler og totalene summerer.

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1–0.2 | 27 | 24 | 0 (metadel) |
| 1 | 1.1–1.4 | 110 | 120 | 4 |
| 2 | 2.1–2.4 | 110 | 118 | 4 |
| 3 | 3.1–3.3 | 82 | 88 | 4 |
| 4 | 4.1–4.4 | 114 | 122 | 4 |
| 5 | 5.1–5.2 | 60 | 64 | 4 |
| 6 | 6.1–6.3 | 84 | 90 | 4 |
| 7 | 7.1–7.8 | 88 | 70 | 4 + 3 øvingseksamener |
| **Sum** | **30 kap.** | **675 ✓ (≥500)** | **696 ✓ (≥500)** | **28 + 3 ØE** |

Per kapittel (quiz · flashcards) — **minimum, aldri under; overskyting er lov**:

| Kap. | Q · F | Kap. | Q · F | Kap. | Q · F |
|---|---|---|---|---|---|
| 0.1 | 12 · 12 | 2.4 | 28 · 30 | 5.2 | 28 · 30 |
| 0.2 | 15 · 12 | 3.1 | 32 · 34 | 6.1 | 32 · 34 |
| 1.1 | 30 · 32 | 3.2 | 24 · 26 | 6.2 | 30 · 32 |
| 1.2 | 26 · 30 | 3.3 | 26 · 28 | 6.3 | 22 · 24 |
| 1.3 | 30 · 32 | 4.1 | 32 · 34 | 7.1 | 14 · 10 |
| 1.4 | 24 · 26 | 4.2 | 26 · 28 | 7.2 | 14 · 10 |
| 2.1 | 26 · 28 | 4.3 | 30 · 32 | 7.3 | 16 · 14 |
| 2.2 | 28 · 30 | 4.4 | 26 · 28 | 7.4 | 12 · 10 |
| 2.3 | 28 · 30 | 5.1 | 32 · 34 | 7.5 | 14 · 8 |
| | | | | 7.6 | 6 · 6 |
| | | | | 7.7 | 6 · 6 |
| | | | | 7.8 | 6 · 6 |

**Bindende total: quiz 675 · flashcards 696.** Flashcards telles som **toppnivå
`definition`-blokker med `title`**. Prøvekapitler har ingen kvote (ingen quiz,
ingen begrepsbank).

### 10.1 Quiz-filformat

`src/lib/data/quiz-staging/fil1001-<del>-<nr>.quiz.json`:

```json
[{ "question": "…", "options": ["riktig", "distraktor", "distraktor", "distraktor"], "explanation": "…" }]
```

Nøyaktig **4 alternativer**, `options[0]` **ALLTID** riktig (runtime stokker
rekkefølgen — derfor skal `explanation` ALDRI si «alternativ a)», men gjenta
innholdet: «Riktig svar er at Kripke angriper identitetspåstanden …»). Ingen
duplikate alternativer. `explanation` på 2–4 setninger sier hvorfor fasiten er
riktig OG hvilken felle hver nære distraktor tester.

**Distraktor-kalibrering** — nabobegrep-distraktorer fra skjelettets
quiz-profil, aldri tullesvar: regularitet/kontrafaktisk · primær/sekundær
substans · A-serie/B-serie · numerisk/kvalitativ identitet · psykologisk
kontinuitet/forbindelse · behaviorisme/funksjonalisme · identitet/supervenience
· tenkelighet/mulighet · det lette/det vanskelige problemet · Descartes'
begrepslige vs. Kripkes modal-semantiske argument · determinisme/fatalisme.
I tillegg: trinnrekkefølge-spørsmål (tvilsargumentets trinn, Kims fire
eksklusjonspremisser, S1-oppskriften), «hvem hevder hva»-koblinger og «hvilken
lærebok bruker denne termen» (Conee & Sider vs. Kim).

**INGEN LENGDE-TELL:** fasiten skal IKKE være det lengste eller mest detaljerte
alternativet. Alle fire alternativer skal ha jevn lengde og presisjonsgrad — en
leser som «velger det lengste» skal treffe ~25 %, ikke 77 %. Skriv distraktorene
like fyldige som fasiten; trim heller fasiten. Verifiseres med
`node scripts/hoyskolebok/quiz-lengdesjekk.mjs` etter wiring.

### 10.2 Flashcard-profil

Hovedvekt på **posisjon ↔ argument ↔ filosof-koblinger**: Descartes ↔
substansdualisme ↔ tvilsargumentet; Hume ↔ regularitet ↔ konstant konjunksjon;
Lewis ↔ kontrafaktisk analyse ↔ preemption; Kim ↔ minimal fysikalisme ↔
eksklusjonsargumentet; Jackson ↔ kunnskapsargumentet ↔ Mary; Nagel ↔ subjektiv
karakter ↔ flaggermusen; Chalmers ↔ zombier ↔ tenkelighet; Searle ↔ kinesisk rom
↔ syntaks er ikke semantikk; Conee & Sider ↔ soft determinism / Space-Time
Theory / psychological continuity view. Modelleres som presise éndefinisjoner
(«hva er X hos Y») + «hvilket tankeeksperiment hører til hvilken konklusjon».

---

## 11. Fagspesifikk stil (ufravikelig for FIL1001 — fra skjelettets §1)

### 11.1 Notasjonsstandard

- **Norsk bokmål.** Ingen matematisk notasjon, med ÉN presis åpning: enkel
  modallogisk notasjon (`$\Box$` for nødvendighet, `$\Diamond$` for mulighet)
  er tillatt **kun i kap. 3.2 og 4.2**, og skal forklares på stedet ved første
  bruk. Alle andre kapitler skal være helt fri for `$…$`.
- Kapitler som bruker `$…$` (altså 3.2 og 4.2) MÅ ha en `collapsible` med
  tittelen **nøyaktig** «Symbol- og formelliste» sist i kapitlet — den
  automatiske porten leter etter den strengen. Åpne med «Oppslagsverk — alt her
  forklares underveis i kapitlet.», deretter tabellen `| Symbol | Betydning |`.
  Øvrige kapitler bruker `collapsible` **«Pensumkart for kapitlet»** i stedet
  (begrepstabell) — de er symbolfrie og trenger ingen formelliste.
- **LaTeX i JSON krever dobbel backslash.** I python-kilden skriver du
  `"$\\Box p$"` (eller `r"$\Box p$"`); `json.dump` skriver da `"$\\Box p$"` til
  fila, som er det KaTeX trenger. Havner det bare én backslash i JSON-fila, blir
  `\B` et kontrolltegn og rendrer som søppel — uten at KaTeX nødvendigvis klager.
- **Dollartegn som ikke er matte MÅ escapes som `\\$`.** Et enkelt bart `$` i en
  streng kutter resten av teksten til rå LaTeX-kilde. Oddetall `$` i samme
  tekstfelt felles av `sjekk-latex.py`.
- **Skrivemåter (grep-konsistens):** «qualia» (aldri «kvalia»), «C-fiber-fyring»,
  «res cogitans»/«res extensa», «esse est percipi», «A-serien»/«B-serien»,
  «Theseus' skip», «Leibniz' lov», «Chinese Nation», «det kinesiske rommet»,
  «minimal fysikalisme», «soft determinism», «Space-Time Theory».
- **Verktitler** skrives med «anførselstegn» i `title`-felter og i kursiv
  (`*Riddles of Existence*`) i brødtekst. **Aldri sidetall.**

### 11.2 Sjangerkoder (introduseres i kap. 0.1, skrives fullt ut ved første bruk per kapittel)

**S1** redegjør for X → diskuter kritisk → ta stilling (grunnformen; forekommer i
så godt som hvert spørsmål) · **S2** sammenlign to posisjoner langs 2–4
dimensjoner · **S3** argument- eller tankeeksperimentanalyse (rekonstruer, finn
det springende premisset) · **S4** flerdelt trinn-oppgave a/b/c/d (det gamle
regimet 2005–2016, fortsatt levende i utsatte prøver, og en ferdig
disposisjonsmal) · **S5** åpen pensumforankret problemstilling («drøft med
utgangspunkt i pensumtekstene»).

### 11.3 Feilkodene #1–#10 (glosses ved første bruk PER KAPITTEL)

| # | Feil | Forebygges i |
|---|---|---|
| #1 | Referat uten drøfting — når ikke bestått-terskelen på oppgaven | 0.2, 7.1 |
| #2 | Stråmann/feilframstilling (Hume↔Lewis, Descartes↔Kripke, behaviorisme↔funksjonalisme) | 3.1, 4.1, 4.2, 5.1 |
| #3 | Navnedropping uten innhold («qualia», «mulige verdener», «supervenience» uten forklaring av begrepets rolle) | alle temakapitler |
| #4 | Påstand uten argument i ta-stilling-delen | 0.2, 7.1 |
| #5 | Bomme på den navngitte teksten (generelt om kompatibilisme/fysikalisme der Conee & Sider eller Kim er etterspurt) | 3.3, 4.3 |
| #6 | Ubalanse mellom de fire svarene — bryter bestått-per-oppgave-regelen | 0.1 |
| #7 | Bryte settets struktur (svare i bare én del; svare på tre eller fem oppgaver; hoppe over en deloppgave) | 0.1, 7.4 |
| #8 | Overlapp mellom svar — samme poeng gjenbrukt gir ikke dobbel uttelling | 0.1 |
| #9 | Ensidig drøfting uten innvendinger | 0.2, 7.1 |
| #10 | Manglende sammenhenger — argumenter behandlet isolert der oppgaven inviterer til å koble dem | 0.2, 7.2 |

**Registeret har nøyaktig ti koder.** Skjelettet skriver noen steder «#13 (S3)»
om det å normalisere bort et tankeeksperiments premisser (kap. 2.2, 5.2, 7.3,
7.7) — det er en rest fra en annen bok. **Bindende oversettelse: skriv `#2` med
S3-glossen**, f.eks. «(#2 — stråmann, her i S3-varianten: å omgå premissene i
tankeeksperimentet i stedet for å ta dem som stipulasjoner)». Ikke innfør en
ellevte kode noe sted.

**Premissdisiplin** (kap. 7.3, men gjelder alle tankeeksperimenter): premissene
leses som **stipulasjoner, ikke empiri**. Mary vet *alt* fysisk; zombien er
fysisk *identisk*; Blacks kuler er i et *tomt, symmetrisk* univers. Å svare «men
i virkeligheten ville …» er å omgå eksperimentet.

### 11.4 Prioritetsklasser

**høyeste prioritet** (skjelettets «perfekt») · **kunne** · **bør kjenne til**.
Skriv ALDRI «Prioritet: perfekt».

### 11.5 Forbudt-termer (grep-sjekkes — skal gi 0 treff)

Regex til sluttporten (`sjekk-bok.py` kjører den case-insensitivt og **unntar
kap. 0.1**, som skal beskrive kildesituasjonen):

```
Prioritet: perfekt|en A-besvarelse ville|ville ha drøftet|sensorveiledninger\b|sensorveiledningene|studentbesvarelse|offisiell fasit|offisielle løsningsforslag|løsningsforslag fra UiO|kvalia|\bs\. ?\d+
```

Kommandolinje:

```bash
python3 scripts/hoyskolebok/sjekk-bok.py fil1001 "Prioritet: perfekt|en A-besvarelse ville|ville ha drøftet|sensorveiledninger\b|sensorveiledningene|studentbesvarelse|offisiell fasit|offisielle løsningsforslag|løsningsforslag fra UiO|kvalia|\bs\. ?\d+"
```

Begrunnelse per term: `Prioritet: perfekt` er plattformforbud (karakter-realisme)
· meta-fasit-uttrykkene er forbudt fordi drøftelsen skal skrives ut ·
**flertallsformene av «sensorveiledning» er usanne** (det finnes én) ·
«studentbesvarelse» er usant (alle modellbesvarelser er nyskrevne) ·
fasit-/løsningsforslagspåstandene er usanne (ingen finnes) · «kvalia» er feil
skrivemåte (boka bruker «qualia») · `s. 12`-mønsteret fanger sidetall, som ikke
er attestert i arkivet noe sted.

### 11.6 Påkrevd terminologi (skal FINNES)

«soft determinism» · «the Space-Time Theory of Time» · «psychological continuity
view» · «minimal fysikalisme» · «eksklusjonsargumentet» · «bestått-per-oppgave» ·
«rigid designator» · «multippel realiserbarhet» · «konstant konjunksjon» ·
«temporale deler».

---

## 12. Kryssbok-lenker (verifisert 26. juli 2026 — alle målfilene finnes i `src/lib/data/chapters/`)

FIL1001 er den første filosofiboka etter `exphil03`, og exphil03 er den ENESTE
bygde boka med relevant forkunnskapsstoff. Bruk NØYAKTIG disse titlene og
stiene:

| Kapittel | Lenke |
|---|---|
| 1.1 | `[Aristoteles — substans, de fire årsakene og teleologien](/exphil03/exphil03-2-2)` |
| 1.2 | `[Platon — Menon, Faidon og idélæren](/exphil03/exphil03-2-1)` |
| 4.1 | `[Sinn og kropp — Descartes' dualisme og Elisabeths innvending](/exphil03/exphil03-2-4)`, `[Descartes — metodisk tvil, skeptisk argument og cogito](/exphil03/exphil03-1-1)` |
| 0.2 | `[Sjanger — drøftingsdelen (c/d)](/exphil03/exphil03-4-3)` (valgfri — beslektet drøftingshåndverk i et annet fag; presiser at kravene der er IFIKKs exphil-krav, ikke FIL1001s fem kjennetegn) |

**Ingen andre kryssbok-lenker.** FIL1001 forutsetter ingen matematikk og ingen
metode. Vil du legge til en lenke som ikke står i tabellen, kjør
`ls src/lib/data/chapters/<id>.json` først — `sjekk-bok.py` avviser døde lenker,
og en død lenke i en live bok er en synlig feil for leseren.

Interne lenker (innad i fil1001) skrives som `[kap. 3.2](/fil1001/fil1001-3-2)`
og skal kun peke på kapitler som allerede er bygget når boka gates. Bygg i
skjelettets rekkefølge (§6 i skjelettet): Del 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 →
prøver, og merk at 3.2 (modalitet) må stå ferdig FØR 4.2 (Kripke).

---

## 13. Tekniske feller (les før første `json.dump`)

1. **JSON-gyldighet.** Bruk `json.dump`. Faget er fullt av anførselstegn og
   apostrofer («Theseus' skip», «what is it like to be a bat?») — én uescapet
   anførsel blokkerer hele prebuild for hele plattformen.
2. **LaTeX = dobbel backslash i JSON.** Gjelder kun 3.2/4.2 her, men feilen er
   fatal: `\B` blir et kontrolltegn og rendrer som søppel uten at KaTeX klager.
3. **Bart `$` er forbudt** utenfor matte — skriv `\\$`. Oddetall `$` i samme
   tekstfelt = avkuttet formel = rå LaTeX synlig for leseren.
4. **`chapterNumber` alltid del-basert** («2.3»), aldri lineær («7»).
   Prøvekapitler: «2.P».
5. **Ingen tom `collapsible`.** Feltet heter `content` og skal inneholde
   blokker. En `text`-nøkkel eller `[]` rendrer som en tom boks.
6. **Unike blokk-id-er** innen kapitlet.
7. **Flashcards kommer KUN fra toppnivå `definition` med `title`.** Flytter du en
   definisjon inn i en `collapsible` for å «rydde», forsvinner kortet fra kvoten.
8. **`(verifiser)`-markører** er påkrevd i førsteutkastet der du er usikker —
   men de **feller sluttporten**. De løses i verifiseringsbølgen (fase 6) FØR
   `sjekk-bok.py` kjøres for siste gang.
9. **Ingen `subTasks`, `answer`, `solutionVideo`, `allowsUpload`,
   `allowsCanvasDrawing`** i `exercise`.
10. **Gåseøyne inne i matte** («…») har ingen glyffer i KaTeX — hold dem utenfor
    `$…$`.

---

## 14. Opphavsrett (ufravikelig)

ALLE oppgaver, case, tankeeksperiment-varianter, sitatlignende passasjer og
modellbesvarelser er **NYSKREVNE** — eksamenssjangrene er malen, ALDRI
originaloppgavene. Ingen formuleringer fra UiO-settene eller fra
H2018-veiledningen gjengis ordrett, heller ikke i omskrevet-nær form.

Arkivets tankeeksperimenter er faglig allmenneie, men gjenskapes med **endrede
fakta og formuleringer**: bruk snikskytterne i stedet for lighter-eksemplet,
bandet som skifter ut alle medlemmene i stedet for skipet der oppgaven skal være
ny, lyddesigneren med cochleaimplantat i stedet for Mary, fotballstadionet i
stedet for Chinese Nation. Selve de kanoniske eksperimentene skal selvsagt
forklares under sine egne navn i temakapitlene — det er nyskrevne
oppgaveVARIANTER som skal ha endrede fakta.

Pensum (Conee & Sider, Kim, primærtekstene) **refereres og parafraseres** —
aldri siteres i lengde, aldri med sidetall. Standard fagbegreper er allmenneie.
Referanser du er usikker på merkes `(verifiser)` og løses i fase 6. **Ingen
oppdiktede referanser, verk eller årstall.**

Tillatte tenkere/verk er uttømmende gitt av skjelettets begrepskontrakter:
Aristoteles, Locke, Newton, Leibniz, Kant, McTaggart, Max Black, E.J. Lowe,
Parfit, Reid, Hume, David Lewis, Davidson, van Inwagen, Frankfurt, Aquinas,
Berkeley, Mackie, Conee & Sider, Descartes, Kripke, Kim, Smart-tradisjonen,
Searle, Ned Block, Jackson, Nagel, Chalmers, Strawson, Clark & Chalmers,
Wittgenstein, Braddon-Mitchell & Jackson, Adams, Zenon. **Tenkere utenfor denne
lista skal ikke innføres som pensumankere.**

Boka fremstiller seg ALDRI som offisiell, godkjent eller UiO-tilknyttet, og
lover ALDRI et eksamensutfall. (Uavhengighetsdeklarasjonen vises automatisk av
plattformen for `level: 'Høyskole'` — se README «Juridiske deklarasjoner».)

---

## 15. Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json; json.load(open('…'))"` på HVER fil du har skrevet.
2. **Kvotetelling** mot tabellen i §10 (toppnivå `definition`-blokker med
   `title` + antall quiz-spørsmål) — minimum, aldri under.
3. **Forbudt-termer-grep = 0** (regexen i §11.5).
4. **Kryssbok- og internlenker** peker på eksisterende filer (§12).
5. **Læringsløkke:** `content[]` veksler teori → eksempel → oppgave i løkker med
   `exercise`-blokker INLINE. Unntak: prøve-, øvingseksamen- og
   modellbesvarelseskapitler.
6. **Forkunnskapsdekning:** gå gjennom HVER `exercise` og bekreft at den kun
   hviler på stoff introdusert tidligere i kapitlet eller i en referert
   forkunnskap — ingen usett tenker, begrep eller tankeeksperiment.
7. **Nybegynner-inngang:** alle sjangerkoder (S1–S5), feilkoder (#1–#10) og
   karakterbokstaver forklart ved første bruk PER KAPITTEL; ingen kald kode i
   `competenceGoals` eller i første tekstboks; Del 0 har «Slik leser du denne
   boka»-boksen (type `text`/`tip`, ALDRI `definition`) og hele Del 0-pakken
   (§9.1).
8. **Essaykontrakten:** hver `example.solution`, hver `exercise.solution` og
   hver prøvefasit på en drøftingsoppgave viser **rekonstruksjon → innvending →
   veiing → begrunnet standpunkt** i den grad oppgaven ber om det. En fasit som
   bare gjengir posisjonen er en byggefeil (feil #1).
9. **Filosofisk presisjon:** ingen posisjon innført gjennom innvendingen mot den;
   alle standardinnvendinger navngitt; ingen av feiltilskrivningene i §8.3;
   levende uenighet framstilt som uenighet.
10. **Referansekontrakt:** kun tenkere/verk fra lista i §14; ingen sidetall;
    utgave-sensitive koblinger beholder ⚠; usikre tilskrivninger merket
    `(verifiser)` (og nullstilt før sluttporten).
11. **Kalibreringssjekk:** grep for «soft determinism» (3.3), «Space-Time
    Theory» (2.1/2.2), «psychological continuity view» (2.4), «minimal
    fysikalisme» + «eksklusjonsargumentet» (4.3/4.4) — hver skal finnes, og feil
    #5 skal være eksplisitt adressert i disse kapitlene.
12. **Modellbesvarelser:** ærlig merket som nyskrevne; C er en C; midtnivå-B
    finnes i 7.7; kap. 7.6 konkluderer skarpt; minst ett vippe-case merket
    «(omstridt — begge landinger forsvarlige)»; meta-fasit-grep = 0.
13. **Prøve-flervalg:** fasitmønsteret varierer (aldri «alle a», aldri samme
    feilkode to ganger på rad i 7.5); prøve-tipen sier hvor flervalget bor;
    selvdiagnose (☐) etter hver fasit.
14. **Frekvenstall = telte belegg**, alltid med nevner 21; ingen oppdiktede tall.
15. **hints** utfylt på alle `exercise` unntatt den merkede kalde banken i 7.4;
    første hint røper aldri konklusjonen.
16. **Øktmerking:** kapitler > 45 min har løkke-tidsanslag eller pausepunkter;
    prøvekapitlene deklarerer «4 prøver à ~30–45 min» + deling over flere
    kvelder; `fil1001-7-prove` deklarerer i tillegg de tre øvingseksamenene.
17. **Feilkode-gloss** ved første bruk per kapittel; «#13» finnes ikke (§11.3).
18. **Ingen tom `collapsible`**; ingen duplikate blokk-id-er; kap-referanser i
    fasiter og forkunnskaper er markdown-lenker.
19. **Juridiske deklarasjoner:** innholdet fremstiller seg ALDRI som offisielt
    eller UiO-tilknyttet, lover aldri eksamensutfall, og all omtale av
    kildegrunnlaget følger §6.1 ordrett i sak.
20. **Rendering og porter grønne før ferdigmelding:**

```bash
python3 scripts/hoyskolebok/status-bok.py fil1001
python3 scripts/hoyskolebok/sjekk-latex.py fil1001
python3 scripts/hoyskolebok/sjekk-bok.py fil1001 "<forbudt-regex fra §11.5>"
npm run build
```
