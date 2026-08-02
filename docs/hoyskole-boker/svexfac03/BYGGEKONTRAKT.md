# Byggekontrakt: SVEXFAC03 Examen facultatum, samfunnsvitenskapelig variant (UiO) — teknisk kontrakt for kapittelforfattere

Gjelder ALLE forfatter-agenter som bygger kapitler til `svexfac03`. Faglig
innhold styres av `SKJELETT.md` (Talldisiplin-seksjonen + identitetsseksjonen
§1–§2 + per-kapittel-kontraktene i §3) — les ditt kapittels avsnitt ORDRETT, og
`EKSAMENSANALYSE.md` ved behov. Denne kontrakten definerer format, sjangerkrav,
kildepåstander, tall og kvalitetsporter. **Ved faglig konflikt vinner
SKJELETT.md; ved format-, sjanger-, tall- eller kildepåstandskonflikt vinner
denne kontrakten.** Instansiert fra `../BYGGEKONTRAKT-MAL.md`.

⚠ **Ett unntak fra «skjelettet vinner faglig»: hvilke oppgavenumre et kapittel
kan påberope seg.** Skjelettets Talldisiplin-seksjon er etterprøvd mot analysens
§ 3.2 og § 8 og holder — klyngetallene, terminantallet og kvotene stemmer. Men
**fem av skjelettets per-kapittel-belegg overklamrer eller kolliderer**
(kap. 1.4, 1.5, 3.5/3.6, 2.2 og 9.2). **§6.2 i denne kontrakten er den ENESTE
lovlige kilden til «N av M»-påstander i boka.** Sprikene står der, kapittel for
kapittel, med begrunnelse, så ingen «retter» dem tilbake.

**Emnets navn.** Emnet heter **SVEXFAC03 Examen facultatum, samfunnsvitenskapelig
variant** og undervises ved Det samfunnsvitenskapelige fakultet, Universitetet i
Oslo. Emnekoden `SVEXFAC03` skrives alltid ut — den er bokas viktigste søkeord.
Emnet er 10 studiepoeng, undervises og eksamineres både vår og høst, og inngår i
ex.phil.- og ex.fac.-blokken på 20 studiepoeng som er obligatorisk i
bachelorprogrammene ved SV-fakultetet. ⚠ **Nøyaktig semesterplassering varierer
mellom programmene** — i bachelorprogrammet i statsvitenskap står emnet i
2. semester. Boka skriver «i praksis i første studieår» og legger til at
plasseringen varierer; den påstår aldri et bestemt semester for alle programmer.
Leseren er fersk student, ofte i sitt første eller andre semester, og skal komme
gjennom Del 0 og Del 1 uten å slå opp noe annet sted.

**Arketype: drøfting** (`../DNA-drofting.md`) — **ren, ingen lån fra andre
arketyper.** Begrunnelsen står i skjelettets §1 og gjentas her fordi den styrer
hva som IKKE skal bygges: SVEXFAC03 er et rent teori- og oversiktsemne uten
regning, uten praktikum, uten rettskilder og uten kildebruk i juridisk forstand.
Alle fire skriftlige sjangre — redegjørelse, eget begrunnet eksempel, anvendelse
på case og drøfting — er drøftingsarketypens egne former. Emnets
**signaturapparat** er likevel fagspesifikt og bygges her: *eksempelverkstedet*
(kap. 9.2 og §7.2), der leseren lager et eget eksempel og **begrunner** at det
illustrerer begrepet.

**Nærmeste bygde søskenbøker:** `exphil03` (34 kapitler, live) og `svmet1010`
(30 kapitler, live). Samme arketype, samme emnetype (obligatorisk
innføringsemne som hele kullet tar), samme todeling av kunnskaps- og
drøftingsledd. Kopier arbeidsmåte og formkrav derfra — **aldri faglig innhold**.
Andre bygde naboer: `sos1004`, `sosant1000`, `psy1010`, `sgo1001`, `utv1000`.
⚠ **`jfexfac04` har skjelett og byggekontrakt, men ingen kapittelfiler på disk
per 3. august 2026 — det er et forbudt lenkemål (§14).**

**Fire forskjeller fra søskenbøkene som endrer byggingen:**

1. **Den største blindsonen i hele høyskolekatalogen sitter her.** Ikke ett
   eneste flervalgsspørsmål er bevart, for noen termin, enda delen utgjør 25 %
   av karakteren og **må bestås separat**. Bokas quiz-bank på 910 spørsmål er
   **nykonstruksjon, ikke rekonstruksjon** — og det skal stå i klartekst to
   steder (§7.6). Dette er den ene tingen leseren har krav på å vite om det
   verktøyet hun bruker mest.
2. **Tre regimer som ikke er sammenlignbare.** Regime 1 tilbød 6–7 spørsmål per
   termin, regime 2 to essayvalg, regime 3 fem oppgaver. Et tall uten
   regimemerking er derfor et tall som lyver. Egen port (§6.3, prosaregel 2 og 3).
3. **Ingen kryssgevinst mot EXPHIL03.** Der JFEXFAC04s V2023-veiledning
   uttrykkelig gir uttelling for exphil-stoff, nevner **ingen** av de 17
   SVEXFAC03-veiledningene exphil med ett ord. Tenkergalleriene er nesten
   disjunkte. Boka skal aldri love overføringsverdi (§7.7).
4. **Boka er formelfri.** Ingen matematikk, ingen `$…$` (§13.1). Kravet om
   «Symbol- og formelliste» er ikke relevant (README-unntaket for symbolfrie
   fag) — hvert temakapittel har `collapsible` **«Pensumkart for kapitlet»** og
   til slutt `collapsible` **«Begreps- og avsenderliste»** i stedet.

---

## 1. LÆRINGSLØKKE-KONTRAKT (ufravikelig byggekrav — produkteier 9. juli 2026)

Fra skjelettets topp, tatt inn her som bindende byggekrav:

- HVERT kapittels `content[]` struktureres som gjentatte SMÅ løkker
  **Teori → Eksempel → Oppgave**, én løkke per begrep/teoribit:
  1. begrepet med navngitt avsender (`definition`, evt. + `text` om posisjoner
     og drøftingsaksen), →
  2. `example` som viser begrepet BRUKT — skrevet slik en god redegjørelse eller
     drøfting ville skrevet det, med klassifiseringen eller eksempelkoblingen
     BEGRUNNET og ikke bare konstatert, →
  3. `exercise` INLINE i `content[]` rett etter eksempelet (plattformen
     renderer inline oppgaver), →
  4. neste begrep.
- **ALDRI** all teori øverst med oppgavene samlet nederst, og aldri alle
  definisjonene i én bolk fulgt av alle eksemplene. Grupper til meningsfulle
  biter — ikke én oppgave per setning.
- **Ingen usett forkunnskap:** ingen oppgave får kreve et begrep, en tenker, et
  perspektiv eller en sjangerregel som ikke er introdusert tidligere i SAMME
  kapittel (t.o.m. eksempelet rett foran) eller i et tidligere kapittel referert
  i Forkunnskaper-blokka. Flytt teoribiten tidligere ved behov. Særlig utsatt
  her: **ingen oppgave i Del 3 får kreve rasjonalitetsapparatet fra Del 1**, og
  **ingen oppgave i Del 7 får kreve ordensperspektivene**, uten at
  forkunnskapskapitlet står i blokka.
- **Unntak:** prøvekapitlene, sjangerkapitlene (9.1–9.6), modellbesvarelsene
  (9.7–9.9) og øvingseksamenene (`svexfac03-9-prove`) følger sin egen arketype —
  komplett oppgave/sett først, løsning i `collapsible`.
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer
  REKKEFØLGEN.

⚠ **Underoverskrifter er ALDRI byggespråk.** «Løkke», «Bolk», «Blokk», «Runde»,
«Sekvens», «Modul», «Iterasjon» er byggeplanens ord, ikke leserens. Overskriften
skal si hva avsnittet handler om, pluss tidsanslaget:

```
✗ ## Løkke 3 — De tre betingelsene (~15 min)
✓ ## De tre betingelsene (~15 min)
```

Vis til tidligere avsnitt ved NAVN, aldri ved nummer («da vi gikk gjennom de tre
dimensjonene», ikke «i løkke 2»). «Løkke» er ikke et fagord i dette faget, så
**all** bruk er byggespråk. Fire former har sluppet gjennom tidligere ryddinger —
tall i overskrift, liten forbokstav i prosa, bokstav i stedet for tall, og
tabellkolonnen `| Løkke |`. Kjør denne før ferdigmelding og forvent null treff:

```bash
grep -rnE '#{2,4}[[:space:]]*Løkke|[Ll]økke[[:space:]]+[0-9A-ZÆØÅ]|\| Løkke \|' \
  src/lib/data/chapters/svexfac03-*.json
```

---

## 2. Filplassering og filantall

Ett JSON-dokument per kapittel: `src/lib/data/chapters/svexfac03-<del>-<nr>.json`
(prøvekapitler: `svexfac03-<del>-prove.json`). Quiz til
`src/lib/data/quiz-staging/svexfac03-<del>-<nr>.quiz.json`.

IKKE rør `_registry.json`, `_all.json`, `textbook-courses*.ts`, `quiz-data*.ts`
eller `institusjoner.ts` — wiring gjøres sentralt med
`scripts/hoyskolebok/wire-bok.py svexfac03` (fase 5). Generer ALLTID JSON via
python `json.dump`: faget er fullt av anførselstegn («go native» finnes ikke her,
men «orden», «samtidsdiagnose», «kort», «relevans i dag», «gjør rede for» og alle
sitatlignende oppgaveformuleringer settes i anførselstegn) — én uescapet
anførsel har tidligere blokkert hele plattformens prebuild.

**53 filer totalt:** 44 innholdskapitler (skjelettets §3) + 9 prøvekapitler
(`svexfac03-1-prove` … `svexfac03-9-prove`). Wiringen genererer prøvekapitlenes
metadata selv fra `BOKCONFIG.json` (`prøvedeler`) — filene må finnes, men skal
ikke listes i skjelettets §3.

### 2.1 Skjelettet ER i v3-format (verifisert 3. august 2026)

`wire-bok.py` parser skjelettet med `^#### Kapittel (\d+\.\d+):\s*(.+)$` og
`\*\*id:\*\* \`(svexfac03-\d+-\d+)\``. Testet mot `SKJELETT.md`:
**44 av 44 kapitteloverskrifter og 44 av 44 id-er parses.**
`sjekk-skjelett.py svexfac03` gir **KVALITETSPORT OK**. Ingen v3-konvertering er
nødvendig — i motsetning til SVMET1010, som lå i den eldre formen og ga 0 treff.
**Endrer du skjelettet, kjør begge testene på nytt før fase 5.**

Tre detaljer må overleve enhver senere redigering av skjelettet:

1. **`prerequisites` MÅ stå i backticks.** «ingen» skrives uten (gjelder kun
   kap. 0.1).
2. **Tom linje etter `- **Description:**`-linja.** Uten den blør beskrivelsen
   inn i `**Eksamensbelegg:**` — samme mekanisme som ga 53 avkuttede
   kursbeskrivelser i tidligere bøker.
3. **Kapittel-JSONs eget `description` overstyrer skjelettet** (parseren
   foretrekker kapittelfila). Fyll det derfor alltid ut **ordrett likt** begge
   steder.

⚠ **Kosmetisk avvik som IKKE skal «rettes»:** `sjekk-skjelett.py` teller
«8 prøve-kvote-linjer» fordi den leter etter `**Prøve-kvote Del N`, og Del 9s
kvote står som overskrift (`### Prøve-kvote Del 9 (Eksamenstrening) — …`) i
stedet for i fet skrift. Porten er grønn, prøvedelene er ni, og alle ni
prøvekapitler skal bygges. Endrer du overskriften til fet-formen for å «fikse»
tellingen, endrer du et dokument som allerede er gatet — la den stå.

### 2.2 Prøvekapitlene og de to hardkodingene i plattformen

**1. `wire-bok.py` linje 94 genererer beskrivelsen «Fire prøver som dekker del N
(…) på eksamensnivå, med fulle løsningsforslag.»** Den kan ikke overstyres fra
skjelettet. To konsekvenser:

- **Hvert prøvekapittel MÅ ha nøyaktig fire prøver.** Del 1–8 har fire
  temadelprøver hver (32 prøver). **Del 9 har én flervalgsprøve pluss tre
  komplette øvingseksamener = fire** — nettopp derfor ligger flervalgsprøven
  først. Fjerner du den, lyver beskrivelsen leseren møter.
- **Ordet «løsningsforslag» er usant her** (§6.1) og felles av prosaregel 3
  (§13.5). Fase 5 SKAL formulere om:

| kapittel | tittel etter wiring | beskrivelse etter wiring |
|---|---|---|
| `svexfac03-1-prove` … `svexfac03-8-prove` | «Prøver til del N: \<deltittel\>» (auto er riktig) | «Fire prøver som dekker del N (…) på eksamensnivå, med fulle momentliste-fasiter, skrevet av oss.» |
| `svexfac03-9-prove` | «Prøver til del 9: Eksamenstrening» (auto er riktig) | «Fire prøver i gjeldende eksamensform: én flervalgsprøve i Del I-format og tre komplette øvingseksamener, med momentliste-fasiter skrevet av oss.» |

**2. Kursbeskrivelsens temaliste splittes på BÅDE komma og « og ».** Se §17.1 —
`BOKCONFIG.json` er allerede testet mot parserens egen regex og gir fem
velformede chips.

---

## 3. Kapittel-JSON (toppnivå)

```json
{
  "id": "svexfac03-3-1",
  "courseId": "svexfac03",
  "chapterNumber": "3.1",
  "title": "…(fra skjelettet, ordrett)…",
  "description": "…(fra skjelettet, ordrett)…",
  "estimatedMinutes": 50,
  "competenceGoals": ["kunne skille de fire perspektivene på sosial orden fra hverandre og plassere hvert av dem på de tre dimensjonene", "…"],
  "content": [ "…blokker…" ],
  "exercises": []
}
```

- **`chapterNumber` er ALLTID del-basert** (`<del>.<nr>`: `0.1`, `3.1`, `9.9`) —
  **ALDRI lineær** («14»). Prøvekapitler: `<del>.P`. Dette er enkeltfeilen som
  ødelegger navigasjonen i en hel bok (PRODUKSJONSLØYPE-lærdommen fra JUS1111).
- `title` og `description` tas **ordrett** fra skjelettet.
- `competenceGoals`: 2–4 «kunne …»-formuleringer destillert fra kapitlets
  begrepskontrakt. Dette er **Skolesagas EGNE** mål — ALDRI kopi av UiOs
  offisielle læringsutbyttebeskrivelser. UI-et deklarerer kilden automatisk.
- **Ingen kald kode i `competenceGoals`** — ikke «RED», ikke «EKS», ikke «#12»,
  ikke «A-markør» eller «C-stoff» uten forklaring.

### 3.1 `description`, `title` og navigasjonsfelt er REN TEKST (UFRAVIKELIG)

`title`, `description`, `topics`/`sectionNames` og `competenceGoals` rendres
**RÅTT**. `description` havner uendret i `<meta name="description">`,
`og:description` og `twitter:description` — altså i **Google-treffet og i
lenkeforhåndsvisningen** — og i den synlige kroppen på kapittelsiden. Markdown
rendres aldri der. 122 kapitler i 17 bøker viste `$…$` og `**fet**` i Google før
dette ble oppdaget.

```
✗ Webers to rasjonalitetsformer, og hvorfor skillet dukker opp i **nesten hver eneste** eksamen.
✓ Webers to rasjonalitetsformer, og hvorfor skillet dukker opp i nesten hver eneste eksamen.
```

Ingen `$…$`, ingen `**fet**`, ingen `*kursiv*`, ingen backticks, ingen
markdown-lenker i disse feltene. Verktitler skrives med «anførselstegn», aldri
kursiv.

⚠ **Metadataen må holdes i synk for seg.** `description` i
`textbook-courses*.ts` skrives fra skjelettet, mens kapittelfila er autoritativ
(§2.1 pkt. 3). Retter du bare det ene stedet, står det andre igjen —
`econ1100-3-1` hadde to helt forskjellige setninger. `sjekk-bok.py` blokkerer på
markdown i `description`.

Skjelettets 44 descriptions er kontrollert mot denne regelen: **ingen av dem
inneholder LaTeX, fet skrift eller backticks.** Enkelte inneholder tankestrek
(`—`), som er ren tekst og helt lovlig — det er bare `BOKCONFIG.json`s
beskrivelse som har et hardt tankestrek-krav (§17.1).

---

## 4. Blokktyper (eksakte felt — strukturreferanse: `src/lib/data/chapters/exphil03-3-3.json`)

- `text`: `{id, type: "text", content}` — markdown-prosa.
- `definition`: `{id, type: "definition", title, content}` — **`title`
  OBLIGATORISK**. Flashcards genereres KUN fra **toppnivå** `definition`-blokker
  med `title` (en definisjon nøstet inne i en `collapsible` teller IKKE).
  I SVEXFAC03 er `title` en **kobling begrep ↔ avsender**: «Menneskemodell
  (Balsvik)», «Verdirasjonell handling (Weber, hos Balsvik)»,
  «Integrasjonsperspektivet (Solli)», «Samtidsdiagnosens fire krav (Aakvaag)»,
  «Kontroll for tredje variabel (Tufte)», «Ekstern forskningsetikk (Balsvik)»,
  «Sterk objektivitet (Harding, hos Holst)», «Caneys hybridteori (Lavik og
  Pedersen)», «Strukturens dualitet (Giddens)». Åpne innholdet med forklaringen
  i ORD, lukk med **distinksjonen mot nabobegrepet** (formålsrasjonell mot
  verdirasjonell, aktiv mot passiv modell, integrasjon mot konflikt, intern mot
  ekstern etikk, mekanisme- mot funksjonsforklaring) og med det stedet i en
  oppgave der begrepet gjør arbeid.
- `theorem`: `{id, type: "theorem", title, content}` — brukes **sparsomt**, til
  modeller som skal stå som én enhet: de fire ordensperspektivene, de tre
  dimensjonene, homo oeconomicus' forutsetninger, Elsters tre normtyper,
  Aakvaags fire krav, Tuftes tre betingelser, Colemans badekarmodell, de tre
  interne og de tre eksterne forskningsetiske normene. Ikke pynt — dette er
  ikke et regnefag.
- `example`: `{id, type: "example", title, problem, solution}` — `solution`
  skrives som en **god redegjørelses-, eksempel- eller drøftingsdel** (§6.5),
  aldri som referat, og har ALLTID koblingen BEGRUNNET, ikke bare konstatert
  (§7.1).
- `tip` / `warning`: `{id, type, title, content}`.
- `exercise`: `{id, type: "exercise", exercise: {id, number, type: "classic",
  difficulty: "lett"|"middels"|"vanskelig", task, solution, hints: []}}`.
  ⚠ **`difficulty` har nøyaktig tre lovlige verdier: `lett`, `middels`,
  `vanskelig`.** IKKE `medium`, IKKE `hard`, IKKE `easy` — det er plattformens
  engelske interne verdier, og fem kapitler i en søskenbok måtte rettes fordi en
  agent brukte dem. (EXPHIL03-kontrakten sier `"medium"` overalt; **den regelen
  gjelder IKKE her** — ikke kopier den.) Verdien skrives aldri inn i `task`.
  ALDRI `solutionVideo`, `allowsUpload`, `allowsCanvasDrawing`, `answer` eller
  `subTasks` (deloppgaver skrives inn i `task`/`solution`, se §11).
- `collapsible`: `{id, type: "collapsible", title, buttonText, content: [blokker]}`
  — feltnavnet er `content` og det skal inneholde BLOKKER. En `text`-nøkkel eller
  tom array rendrer som en tom boks og er en byggefeil.

Blokk-id-er: `<kapittel-id>-<løpenavn>` (f.eks.
`svexfac03-3-1-def-sosial-orden`), unike i kapitlet. Duplikate blokk-id-er felles
av kvalitetsporten.

**Grep-sjekk før ferdigmelding:**

```bash
grep -l '"difficulty": *"\(medium\|hard\|easy\)"' src/lib/data/chapters/svexfac03-*.json
# skal gi null treff
```

---

## 5. Obligatorisk kapittelstruktur

### 5.1 Alltid først, i denne rekkefølgen

1. `tip` **Eksamensvinkel** — frekvens, sjangre og typiske oppgaveformuleringer,
   med de EKSAKTE tallene fra **§6.2 i denne kontrakten** (ikke fra skjelettets
   belegg-linje der §6.2 avviker), og med **regimet oppgitt** (§6.3).
   **Forfatteren skal ALDRI finne på frekvenstall og aldri regne om dem.**
2. `text` **Forkunnskaper** — kapitler i boka som markdown-lenker
   (`[kap. 3.1](/svexfac03/svexfac03-3-1)`) + eventuelle kryssbok-lenker fra
   tabellen i §14. «Dette kapitlet kan leses uten forkunnskaper» der skjelettet
   sier `prerequisites: ingen` (kun 0.1).

**Oppfrisket forkunnskap (bindende).** I kapitler med stor avstand til
forkunnskapen SKAL Forkunnskaper-blokka **VISE 2–3 kjernepåstander ferdig
oppfrisket**, ikke bare lenke:

> **Fra kap. 1.1:** en aktiv menneskemodell forklarer handlingen ved at personen
> vurderer og velger; en passiv modell forklarer den ved krefter utenfor eller
> under personens kontroll.
> **Fra kap. 3.1:** sosial orden betyr samordnet samhandling — ikke fred, ikke
> harmoni og ikke enighet.

⚠ **Frasen «Sist du var her» er FORBUDT** (grep-sjekkes, §13.5). Blokka
oppsummerer et ANNET kapittel — den kan ikke si «her», og en lærebok vet ikke hva
leseren har gjort. Mange lesere hopper rett til det kapitlet de er reddest for.
Overskriften skal være **`## Forkunnskaper`**, ikke «Forkunnskaper — sist du var
her» (246 kapitler i ni bøker hadde den formen, og første rydding fant den ikke
fordi den sto med liten forbokstav midt i en overskrift).

| ✗ | ✓ |
|---|---|
| Sist du var her sto dette … | Dette sto der … |
| Sist du var her (fra kap. 1.3): | Fra kap. 1.3: |
| Som du husker fra kap. 3.1 … | I kap. 3.1 står … |
| Da vi gikk gjennom dette sist … | I gjennomgangen i kap. 3.1 … |

Samme forbud rammer «som du sikkert husker», «du har jo allerede sett», «dette
kan du fra før» — alt som gjør en påstand om leseren i stedet for om stoffet.

**Kapitler der oppfrisket forkunnskap er OBLIGATORISK** (stor avstand til
forkunnskapen, utledet av skjelettets `prerequisites`):

| Kapittel | Hva som skal stå ferdig oppfrisket |
|---|---|
| 1.1 | fra 0.2: hva et redegjørelsesledd faktisk ber om, og at et eksempel uten begrunnelse ikke er et eksempel |
| 2.1 | fra 0.2: skillet mellom «gjør kort rede for» og «drøft» |
| 3.1 | fra 1.1: aktiv mot passiv menneskemodell i én setning (den er én av de tre dimensjonene) |
| 3.4 | fra 2.2: hva Weber er klassiker for, og at han opptrer i to roller i pensum |
| 3.5 | fra 1.5: gratispassasjer og allmenningens tragedie i én setning hver |
| 3.8 | fra 1.4: hva homo oeconomicus-modellen forutsetter; fra 3.7: Humes konvensjonsorden som selvvokst orden |
| 4.1 | fra 0.2: at «kort» er en instruks |
| 5.1 | fra 0.2: at anvendelse slår mengde |
| 6.1 | fra 0.2: hva drøftingsleddet krever |
| 7.1 | fra 3.1: de tre dimensjonene, med struktur mot aktør skrevet ut |
| 8.1 | fra 0.2: drøftingsleddets femtrinnsform |
| 8.4 | fra 3.5: gratispassasjerproblemet; fra 8.2: de to bærekraftsposisjonene |
| 9.1–9.6 | de 2–3 påstandene sjangeren hviler på, hentet fra sitt hjemkapittel |
| 9.7–9.9 | oppgavens sjangerkrav i tre punkter, hentet fra sitt sjangerkapittel |

### 5.2 Temakapittel (Del 1–8, 33 kapitler) — DNA-drøfting + skjelettets per-kapittel-DNA

Etter eksamensvinkel og forkunnskaper går kapitlet i LÆRINGSLØKKER (§1). Disse
blokkene skal finnes, fordelt i løkkene — ikke stablet:

- `text` **Temaet i fagets landskap** — hvilket problem temaet svarer på.
  Abstrakte kjernetemaer åpner med et **hverdagsanker FØR apparatet** (§11).
- `definition` **kjernebegreper** — flashcard-kilden, toppnivå med `title`, hvert
  begrep forankret i avsender fra skjelettets begrepskontrakt, og hvert med
  **distinksjonen mot nabobegrepet** utskrevet. Distinksjonene ER
  redegjørelseskravet (feil #1, #2, #9).
- `text` **posisjoner og spenninger** — kapitlets drøftingsakser fra skjelettet,
  skrevet slik at leseren har råstoff til BEGGE sider.
- `example` **anvendelse** ×1–3 — case-forslagene fra skjelettet, nyskrevet, hver
  med eksplisitt **begrep + begrunnet kobling + drøfting**.
- **`exercise` ×4–8 INLINE — hardt minimum fire, hardt tak åtte.** Fordeling:
  minst én `lett` innstegsoppgave tidlig (ren gjengivelse med egne ord), 1–2
  redegjørelsesoppgaver, 1–2 eksempeloppgaver der begrunnelsen er selve kravet,
  og minst én eksamenslik flerleddet oppgave med momentliste. Minst én oppgave
  per temadel har `difficulty: "vanskelig"`.
- `warning` **Typiske feil** — feilkodene fra skjelettets «Typiske feil»-linje,
  **glosset ved første bruk PER KAPITTEL**: «(feil #1 — å tro at sosial orden
  betyr fred og harmoni: orden kan like gjerne hvile på tvang, makt eller
  ideologi)».
- `tip` **A-markør** — det grepet som løfter svaret fra god (C) til beste (A) i
  akkurat dette temaet. Obligatorisk i ALLE temakapitler; skal navngi kapitlets
  drøftingsakse eksplisitt.
- `collapsible` **Pensumkart for kapitlet** — markdown-tabell
  `| Avsender/tekst | Begrep de «eier» | Distinksjonen | Hvor det brukes på eksamen |`.
  Åpner med begrepsbank-notisen (§11). ⚠-merkede koblinger beholder forbeholdet
  (§7.5).
- `collapsible` **Begreps- og avsenderliste** — SIST i kapitlet. Emnet er
  formelfritt, så «Symbol- og formelliste» blir her en markdown-tabell
  `| Begrep | Betydning |` over alle begreper brukt i delkapitlet, pluss en kort
  «Avsendere i dette delkapitlet»-liste. Første linje: «Oppslagsverk — alt her
  forklares underveis i kapitlet.» ⚠ `sjekk-bok.py` krever «Symbol- og
  formelliste» bare i kapitler som faktisk bruker LaTeX-symboler (verifisert i
  koden), og denne boka bruker ingen — derfor er navnet fritt, men **listen skal
  stå**: den er oppslag, ikke inngang.
- `collapsible` **Repetisjon** — 4–6 korte spørsmål fra forkunnskapskapitlene.

### 5.3 Sjanger- og håndverkskapitler (0.1, 0.2, 9.1–9.6)

1. `tip` Eksamensvinkel — sjangerens frekvens (tall fra §6.2).
2. `text` **Oppskrift** — trinnvis disponering med tidsbudsjett (§6.6).
3. `example` **gjennomskrevet besvarelse** med margkommentarer om hva som gir
   uttelling hvor. Margkommentarer skrives som egne linjer i `solution`:
   `> Margnotat: her sier begrunnelsen hvilket ledd i begrepet eksempelet treffer — det er dette grepet som løfter fra C.`
4. `exercise` ×3–6 nyskrevne oppgaver, løsning = **momentliste** strukturert som
   **må-punkter / pluss-punkter / feller**, aldri som sjekkliste. Antallet per
   sjangerkapittel er fastsatt i skjelettet: 9.1 fire øvingsoppgaver, 9.2 fire
   pluss gyldighetsdrillen på tolv eksempler, 9.3 fire caseoppgaver, 9.4 fire
   oppgaver, 9.5 breddedrill, 9.6 tolv gjenkjenningsutdrag.
5. `warning` Typiske feil + `collapsible` med sjangerens sjekkliste (§6.4).

Kap. **0.2** skal i tillegg vise ÉN og samme korte oppgave («gjør kort rede for
skillet mellom formålsrasjonell og verdirasjonell handling, og gi et eget
eksempel på hver») på **E-, C- og A-nivå** med margkommentarer, og etablere bokas
to mantraer (§6.7).

Kap. **9.6 (feilvaksinen)** har én seksjon per feil #1–#16, alle fire ledd:
(a) feilen slik veiledningen formulerer den, med hvilken termin den er hjemlet i,
(b) nyskrevet «slik ser den ut i en besvarelse»-utdrag, (c) samme passasje
omskrevet slik den skulle vært, (d) en varsellampe leseren kan kjenne igjen i
egen tekst. Deretter gjenkjenningsoppgaver («hvilken feil begår denne
kandidaten?») på tolv nyskrevne besvarelsesutdrag, med stokket fasit — aldri
samme feilkode som fasit to ganger på rad — der leseren skal identifisere feilen
og reparere tre av dem.

⚠ **Ærlighetsforbeholdet SKAL stå i 9.6s åpning og der registeret først
presenteres i Del 0:** sensorveiledningene uttrykker sensors
**forhåndsforventninger**, ikke observerte feil. Registeret er hva veiledningene
sier skal trekke. **Ett unntak: #1**, der V2020-veiledningen bruker ordet
«erfaringsvis» og dermed rapporterer et faktisk observert mønster — det eneste
stedet i hele materialet. Og **#16 er utledet av formatet**, ikke sitert fra noen
veiledning; det skal stå der #16 nevnes.

Kap. **9.6** avslutter med bokas ene **kalde bank**: 8–10 nyskrevne
oppgaveformuleringer på tvers av sjangrene, UTEN `hints`, fasit = ren
momentliste, eksplisitt merket «Kald bank — ingen hint. Her er det å mobilisere
begreper, avsendere og begrunnelser selv som trenes.» Dette er eneste unntak fra
hint-kravet i §11.

### 5.4 Modellbesvarelseskapittel (9.7–9.9)

1. `text` med den nyskrevne oppgaven, formulert slik den ville stått i et sett,
   pluss ærlighetslinjen fra §10.1.
2. `collapsible` **A-besvarelse** — full, sammenhengende tekst med margnotater.
   «— naturlig pausepunkt —» mellom leddene.
3. `collapsible` **Kommentert C-besvarelse** — samme oppgave, korrekt men flat,
   med notater om gapet opp til A rammet inn som **oppgraderingsmeny**.
4. **Kap. 9.9 skal i tillegg ha `collapsible` «Autentisk midtnivåbesvarelse»** —
   se §10.3. Dette er et README-krav og gjelder minst ett sted i boka.
5. `tip` **Sensorblikket** — momentliste strukturert som må-punkter /
   pluss-punkter / feller, anvendt på akkurat denne oppgaven, med den eksplisitte
   setningen om hvorfor C-versjonen ikke ble B.
6. `warning` **Typiske feil** — feilene C-versjonen demonstrerer (angitt per
   kapittel i skjelettet: 9.7 → #12, #3 · 9.8 → #1, #3 og å referere podkasten i
   stedet for å bruke den · 9.9 → #9, #15). Kravet om `warning`-blokk gjelder
   også disse kapitlene; tittelen «Modellbesvarelse» fritar dem IKKE i
   kvalitetsporten.

### 5.5 Prøvekapitler (`svexfac03-<del>-prove`, del 1–8)

Id `svexfac03-<del>-prove`, `chapterNumber` `<del>.P`, tittel «Prøver til del
<del>: <deltittel>».

Struktur: `tip` (dekning + «4 prøver à ~20–45 min» + «kan trygt deles over flere
kvelder — én prøve per økt» + hvor flervalget bor) + `text` Forkunnskaper + fire
`collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med nyskrevne
oppgaver og full fasit. **Prøvenes tema og oppgavetyper per del står i
skjelettets §4 «Temadelprøver» — følg dem punkt for punkt.**

**Fasitstruktur** (obligatorisk i hver prøvefasit) — dette er nøyaktig malen
sensorveiledningene selv bruker i gjeldende regime:

> **Minimumskrav** (uten disse når svaret ikke E-terskelen) · **Gode
> besvarelser** (det som gir C–B) · **Sterke besvarelser** (det som gir A —
> begrunnelsen, argumentene begge veier, den utskrevne alternative lesningen) ·
> **Feller** (det veiledningene faktisk sier skal trekke, med feilkode).

Etter hver prøvefasit: **avkryssbar selvdiagnose-sjekkliste (☐)** — bruk
rubrikkene i §6.4. Kap-referanser i fasitene som markdown-lenker. **Ingen quiz og
ingen begrepsbank i prøvekapitler.**

⚠ **Ja/nei- og riktig/galt-lister:** `sjekk-statiskflervalg.py` leser `a) b) c)
d)` under et nummerert spørsmål som et flervalg. Er listen et sett med
SELVSTENDIGE påstander (ikke deloppgaver av én oppgave), bruk romertall
**(i), (ii), (iii)** — det er nummerering av påstander, ikke listemerking av
deloppgaver, og produkteierregelen om små bokstaver gjelder derfor ikke der.
Beholder du a)–e), sjekk portens tall mot en manuell telling før du «retter»
noe. **Dette er det ENESTE stedet romertall er tillatt.** Deloppgaver merkes
alltid **a), b), c)** — ALDRI (i), (ii), (iii) (§11).

### 5.6 Prøvekapitlet i Del 9 (`svexfac03-9-prove`)

`chapterNumber` `9.P`, tittel «Prøver til del 9: Eksamenstrening» (auto fra
wiringen). **Fire prøver, i denne rekkefølgen** — antallet er hardkodet i
beskrivelsen wiringen genererer (§2.2):

1. `collapsible` **«Prøve 1 — flervalgsprøven (Del I-simulering, 30 min)»:**
   25 nyskrevne spørsmål jevnt fordelt over alle ti klyngene, poengregning etter
   +1 / −0,33 / 0, og et regneark i ord som viser hvor leseren landet på
   karakterskalaen. Fasitbokstavene er stokket. **Ærlighetslinjen fra §7.6 skal
   stå i åpningen av denne prøven.**
2. `collapsible` **«Prøve 2 — øvingseksamen A (vårprofil)»**
3. `collapsible` **«Prøve 3 — øvingseksamen B (høstprofil)»**
4. `collapsible` **«Prøve 4 — øvingseksamen C (bredde under tidspress)»**

Øvingseksamen A, B og C er komplette sett i gjeldende form: **fem oppgaver, tre
skal velges**, tre timer sammenlagt med Del I. Innholdet per sett står i
skjelettets §4 og følges punkt for punkt. Videre:

- `tip` **Slik tar du disse settene** øverst — tidsbudsjett (§6.6), at hvert sett
  kan deles over to økter, og den eksplisitte merknaden at ekte eksamen er
  sammenhengende.
- Leseren skal **velge tre av de fem og begrunne valget** før hun skriver — det
  er selve ferdigheten regime 3 måler.
- **Øvingseksamen B sier eksplisitt at sesongprofilen er en observasjon på sju
  terminer, ikke en regel**, slik at leseren ikke leser den som en spådom.
- Fasitene er momentlister strukturert som minimumskrav / gode besvarelser /
  sterke besvarelser, med nivåbeskrivelse per oppgave.
- Avkryssbar **selvdiagnose-sjekkliste (☐)** etter hver fasit.

---

## 6. EKSAMENSKONTRAKTEN (fagets kjerne — bindende for alle løsninger og modellsvar)

Alt i denne seksjonen etableres i Del 0 (kap. 0.1–0.2) og refereres i resten av
boka. Det er dette som gjør at mange forfattere skriver samme bok.

### 6.1 Kildegrunnlaget og TALLDISIPLINEN (bokas strengeste seksjon)

Tallene er **talt i emnemappa**, ikke hentet fra en indekskolonne, og etterprøvd
ved å åpne filene (analysens § 8). De er gjengitt her fordi denne kontrakten er
porten forfatteren leser.

| Fakta | Tall |
|---|---|
| **Eksamensterminer dokumentert** | **22** — 21 ordinære + 1 utsatt (H2020) |
| Årsspenn | 15 kalenderår, 2012–2026 |
| Vårterminer / høstterminer | 12 / 9 ordinære, + 1 utsatt |
| Filer i emnemappa | 29 |
| Unike filer etter md5-dedup | 28 (én ren dublett under et annet navn) |
| **Oppgavesett-filer (unike)** | **11**, som dekker **6 terminer** |
| **Sensorveiledninger (unike)** | **17**, som dekker **17 terminer** |
| **Terminer med oppgavetekst i en eller annen form** | **21 av 22** |
| **Løsningsforslag, modellbesvarelser og fasiter fra UiO** | **0 — finnes ikke** |
| **Flervalgsspørsmål bevart** | **0 — for samtlige 17 terminer der delen fantes** |
| Terminer i gjeldende regime (V2023–V2026) | **7** |
| **Skriftlige oppgaver i gjeldende regime** | **35** (7 terminer × 5 oppgaver) |

**Kontrollsummer:** 11 + 17 = 28 unike filer; 28 + 1 dublett = 29 filer i mappa.
12 vår + 9 høst = 21 ordinære + 1 utsatt = 22 terminer. 6 terminer med
oppgavesett-fil + 15 terminer der veiledningen gjengir oppgaveteksten = 21
terminer med oppgavetekst; + 1 uten (den utsatte H2020) = 22. 5 + 9 + 7 terminer
i regime 1, 2 og 3 = 21. 7 × 5 = **35**, og klyngetabellen i §6.2 summerer til 35.

**Ni ufravikelige konsekvenser:**

1. **Ordene «fasit» og «løsningsforslag» kan ALDRI brukes om arkivet.** UiO har
   publisert null av begge deler for dette emnet. Det som finnes er
   **sensorveiledninger** (17 stykker). Boka sier «sensorveiledning» når den
   mener det, og omtaler sine egne modellbesvarelser som **nyskrevne** — aldri
   som ekte studentbesvarelser eller offisielle løsninger. Ordene er fortsatt
   lovlige i bokas egne sammenhenger («prøvefasit», «fasiten skriver ut begge
   lesningene»); det er koblingen til arkivet og til UiO som er forbudt.
   Prosaregel-kontrollert (§13.5, port 3).
2. **Fire lovlige nevnere, og bare fire:** **35 oppgaver** (gjeldende regime —
   hovednevneren), **7 terminer** (gjeldende regime), **21 terminer** (med
   oppgavetekst i hele arkivet, alltid merket historisk) og **17
   sensorveiledninger** (nevneren for alt som handler om hva sensor belønner og
   straffer). Står tallet ikke i §6.2, skal det ikke skrives (§6.3).
3. **Enheten skrives alltid ut.** «5 av 35 oppgaver», aldri «5 av 35». Uten
   enhet vet ikke leseren om det telles oppgaver, terminer eller veiledninger —
   og det er nettopp der utv1000 og inter1000 gikk i grøfta.
4. **Regimet skal oppgis ved hvert tall.** De tre regimene tilbød ulikt antall
   oppgaver per termin (6–7 spørsmål i regime 1, 2 essayvalg i regime 2, 5
   oppgaver i regime 3), så «N av 21 terminer» og «N av 35 oppgaver» måler ikke
   det samme. Prosaregel-kontrollert (§13.5, port 2 og 4).
5. **Sensorkrav har nevner 17.** Ingen påstand om hva sensor belønner eller
   straffer kan bygge på V2012, H2012, V2013, H2013 eller V2014 — disse fem
   terminene har oppgavesett, men ingen sensorveiledning. Formuleringene
   «V2012-veiledningen», «H2012-veiledningen», «V2013-veiledningen»,
   «H2013-veiledningen» og «V2014-veiledningen» er derfor **hardt forbudt**
   (§13.5): de omtaler dokumenter som ikke finnes.
6. **Den utsatte eksamenen H2020 teller i terminantallet (22), men aldri i en
   temafrekvens-nevner.** Fila er en sensorveiledning uten oppgavetekst. Den er
   belegg for eksamensform og vurderingsregler, ikke for tema.
7. **11 er et FILTALL, ikke et settall.** De 11 oppgavesett-filene dekker bare 6
   terminer, fordi regime 1 hadde to varianter (seminar 4 timer, selvstudium 5
   timer) med hvert sitt sett. En brøk med nevner 11 ville telt de samme
   eksamenene to ganger. Tallet 11 skrives derfor alltid som «11
   oppgavesett-filer», alltid sammen med «som dekker 6 terminer», og opptrer
   **kun i kildenoten** (prosaregel 5, §13.5).
8. **Aldri «alle eksamener» og aldri et årstall før 2012.** Emnet er eldre enn
   arkivet. Åtte ordinære terminer mangler helt (H2014, V2015, H2015, V2016,
   H2016, V2017, H2017, H2018) — de er terminer UiO aldri har publisert, ikke
   huller i nedlastingen. Omtales de, skal det stå at de mangler.
9. **Ingen påstander om strykprosent, karakterfordeling eller sensurstatistikk.**
   Materialet inneholder ingenting om det.

**⚠ Indeksene er ikke kilde for dette emnet.** `TERMINER.csv` har riktig
radantall (22), men `har_fasit=ja` på 17 rader betyr «har sensorveiledning» — og
`oppgavefiler=0` for 16 terminer betyr ikke at oppgaveteksten mangler:
veiledningene fra V2019 og utover gjengir oppgavene i sin helhet. Oppgaveteksten
mangler for **én** termin, ikke seksten.

### 6.1.1 Kildenote-mal for kap. 0.1

Bruk denne ordlyden — tilpasset i språk, **aldri i tall**. Malen er testet mot
forbudt-regexen i §13.5 og gir **null treff** (testen står i §13.5).

> Boka er kalibrert mot hele SVEXFAC03-arkivet ved UiO: **22 dokumenterte
> eksamensterminer fra våren 2012 til våren 2026**, der **21 terminer har
> oppgavetekst** og **17 terminer har sensorveiledning**. Oppgavetekstene finnes
> dels som egne oppgavesett (11 oppgavesett-filer som dekker 6 terminer), dels
> fordi sensorveiledningene fra og med 2019 gjengir oppgavene i sin helhet. Den
> utsatte eksamenen høsten 2020 har veiledning, men ingen oppgavetekst — derfor
> er temanevneren 21 terminer og ikke 22. Fem terminer (V2012, H2012, V2013,
> H2013 og V2014) har oppgavesett, men ingen veiledning, og ingenting om hva
> sensor belønner eller trekker for bygger på dem.
> **Arkivet inneholder ingen fasit og ingen løsninger fra UiO for dette emnet.**
> Det som finnes er sensorveiledninger, og de er skrevet før besvarelsene er
> lest — de beskriver hva sensor forventer, ikke hva kandidater faktisk gjorde.
> **Og én ting til, som du har krav på å vite om det verktøyet du kommer til å
> bruke mest:** ikke ett eneste spørsmål fra flervalgsdelen er bevart, for noen
> termin. Vi vet at delen har 25 spørsmål, at poengsystemet er +1 / −0,33 / 0,
> hva karaktergrensene er, og at formålet er å måle bredden i pensum — men
> ingenting om hvordan spørsmålene ser ut, hvilke svaralternativer de bruker
> eller hvilke deler av pensum de treffer. Alle flervalgsspørsmål,
> modellbesvarelser, momentlister og prøvefasiter i denne boka er derfor skrevet
> av oss, ut fra pensumbredden veiledningene navngir. Ingen av dem er hentet fra
> en eksamen.
> **Forbehold:** eksamensformen har skiftet tre ganger siden 2012, og de eldste
> settene viser sjangrene, ikke dagens format. Åtte terminer mangler helt i
> arkivet (H2014, V2015, H2015, V2016, H2016, V2017, H2017 og H2018) — det er
> terminer UiO ikke har publisert. At eksamen i dag varer tre timer og at ordbok
> er eneste hjelpemiddel, står på UiOs emneside og ikke i arkivet, og
> adgangskravet må sjekkes mot semestersiden for ditt semester. Pensum har
> rullert, og verken utgave eller sidetall er oppgitt noe sted i materialet.

**⚠ Fellen malen er kalibrert rundt:** fire agenter i søskenbøker skrev
«**offisielle løsningsforslag**» i kildenoten sin — riktig i sak, men blokkert av
porten. Malen sier derfor «**ingen fasit og ingen løsninger fra UiO**», som er
like sant og passerer. En annen felle er nær: «boka har ikke trent på **tidligere
flervalgsoppgaver**» er også sant, men står i forbudt-regexen (§7.6) fordi
formuleringen leses feil av søkemotorer og av en leser som skummer. Skriv aldri
om malen til noen av de forbudte formene, og legg aldri til «11 sett» eller «22
terminer med oppgavetekst».

### 6.2 AUTORITATIV frekvenstabell per kapittel — erstatter skjelettets tall

**Regelen: tallet er ALLTID antall LISTEDE oppgaver eller terminer i
belegg-lista.** Ikke antall forekomster, ikke et anslag, ikke en omregning. Er du
i tvil om et belegg er én eller to oppgaver, teller du det som én.

**Nevneren er 35 oppgaver i 7 terminer der ikke annet står, enheten SKAL skrives
ut, og regimet skal oppgis.**

| Kap. | Påstand | **Telt (bindende)** | Skjelettets tall | Sprik |
|---|---|---|---|---|
| 0.1 | metakapittel | hele arkivet (§6.1) | — | — |
| 0.1 | dokumenterte gjentakelser | **12 oppgavefamilier i regime 2–3** + **5 i regime 1** (§9) | «Tolv» | ✓ |
| 0.2 | sensorkravene | **17 sensorveiledninger** (ikke V2012, H2012, V2013, H2013, V2014) | — | — |
| 1.1 | klyngen rasjonalitet, menneskemodeller og atferdsøkonomi | **5 av 35 oppgaver, 5 av 7 terminer** (V2023-2, V2024-2, H2024-2, H2025-2, V2026-2) | 5 / 5 | ✓ |
| 1.1 | menneskemodell-oppgaven i snever forstand | **2 av 35 oppgaver** (V2024-2, H2024-2 — nesten ordrett like) | 2 | ✓ |
| 1.1 | menneskemodeller og menneskesyn historisk | **11 av 21 terminer** | 11 | ✓ |
| 1.2 | biologiske menneskemodeller | **0 av 35 oppgaver** — eget belegg er **V2021 (regime 2)**; ellers del av klyngen på 5 av 35 | «konkret belegg: V2021» | ⚠ regimemerkes |
| 1.3 | rasjonalitet som bestanddel historisk | **15 av 21 terminer** — materialets hyppigste enkeltbestanddel | 15 | ✓ |
| 1.3 | formåls- mot verdirasjonalitet som eget spørsmål | **2 terminer i regime 1** (H2012, V2014, ordrett likt) + ledd i **2 av 35 oppgaver** (V2024-2, H2024-2) | — | — |
| 1.4 | homo oeconomicus, spillene og nåtidsskjevheten | **2 av 35 oppgaver** (H2025-2 og V2026-2, fast par med identisk andre ledd); ellers del av klyngen på 5 av 35 | «Belegg ellers: V2023-2, V2024-2, H2024-2» | **overklamring** |
| 1.5 | normtyper, gratispassasjer og allmenningens tragedie | **0 av 35 oppgaver** som eget tema — eget belegg er **V2022 (regime 2)**, der veiledningen honorerer koblingen; ellers del av klyngen på 5 av 35 | «Del av rasjonalitetsklyngen (5 av 35)» | **overklamring** |
| 2.1 | klyngen klassikerne og samtidsdiagnosen | **5 av 35 oppgaver, 5 av 7 terminer** (V2023-1, H2023-2, V2024-1, V2025-1, H2025-1) | 5 / 5 | ✓ |
| 2.1 | Marx | **5 av 35 oppgaver** — den eneste teoretikeren som er inne i alle fem | 5 | ✓ |
| 2.1 | klassiker-raden historisk | **9 av 21 terminer** | 9 | ✓ |
| 2.2 | Weber som klassiker | **1 av 35 oppgaver** (V2023-1, der han er tredje teoretiker) + **H2022 (regime 2)**; ellers del av klyngen på 5 av 35 | «Del av klassikerklyngen (5 av 35)» | **overklamring** |
| 2.3 | Durkheim | **3 av 35 oppgaver** (V2023-1, V2024-1, V2025-1) | «del av klyngen» | — |
| 2.4 | samtidsdiagnosen | **2 av 35 oppgaver** (H2023-2, H2025-1) + **H2022 (regime 2)** | 2 | ✓ |
| 3.1 | klyngen sosial orden | **5 av 35 oppgaver, 4 av 7 terminer** (H2023-1, V2024-3, H2024-1, H2024-3, V2025-2) | 5 / 4 | ✓ |
| 3.1 | ordensperspektivene historisk | **12 av 21 terminer** — mer enn noe annet tema utenom rasjonalitet | 12 | ✓ |
| 3.2 | integrasjonsperspektivet | **2 av 35 oppgaver** (V2024-3 og V2025-2, ord for ord like) + **2 terminer i regime 1** (V2012, H2012, identisk spørsmål) | — | — |
| 3.3 | funksjonalismen | **1 av 35 oppgaver, 1 av 7 terminer** (H2024-4) · **2 av 21 terminer** historisk (H2013, H2024) | 1 / 1 | ✓ |
| 3.4 | konfliktperspektivet | **2 av 35 oppgaver** — samme to som 3.2 (V2024-3, V2025-2), der perspektivet er det andre valgbare + **V2018 (regime 2)** | «del av klyngen» | ⚠ deles med 3.2 |
| 3.5 | handlings- og bytteperspektivet | **0 av 35 oppgaver** som eget tema — belegget er **V2022** og **H2020** (begge regime 2); ellers ett av de fire perspektivene i klyngen på 5 av 35 | «H2024-3 er belegg innenfor den» | **kollisjon, se under** |
| 3.6 | interaksjonsperspektivet | **1 av 35 oppgaver** (H2024-3, «usynlig teater»-casen) | «H2024 ga usynlig teater» (uten nummer) | **kollisjon, se under** |
| 3.7 | Hobbes og Hume | **2 av 35 oppgaver** (H2023-1, H2024-1) · **3 av 21 terminer** historisk (V2019, H2023, H2024) | 2 / 3 | ✓ |
| 3.8 | Adam Smith | **1 av 35 oppgaver, 1 av 7 terminer** (V2026-1) · **3 av 21 terminer** historisk (H2013, V2019, V2026) | 1 / 3 | ✓ |
| 4.1 | klyngen metode og forklaring | **5 av 35 oppgaver, 4 av 7 terminer** (V2023-3, H2023-3, V2025-3, V2025-4, H2025-3) | 5 / 4 | ✓ |
| 4.1 | metodevalgsoppgaven | **1 av 35 oppgaver** (H2025-3) · metode historisk **11 av 21 terminer** | 11 | ✓ |
| 4.2 | kvalitative metoder i praksis | **ingen egen brøk** — Christie- og Wikan-studiene er navngitt i veiledningene; ellers del av klyngen på 5 av 35 | «del av metodeklyngen» | — |
| 4.3 | kvantitative data og feiltolkning | **ingen egen brøk** — Hellevik er navngitt i veiledningene, og **V2021 (regime 2)** honorerer koblingen metode/vitenskapsteori | — | — |
| 4.4 | Tuftes tre betingelser | **1 av 35 oppgaver** (V2023-3) + **V2021 (regime 2)** · årsaksforklaringsoppgaven identisk i **V2012 og V2014 (regime 1)** | — | — |
| 4.5 | mekanismeforklaring | **1 av 35 oppgaver** (H2023-3) + **V2021 (regime 2)** | — | — |
| 4.5 | hypotetisk-deduktiv metode | **0 av 35 oppgaver** — sist prøvd V2019 (regime 2); står i UiOs læringsutbytte, merkes «bør kjenne til» | — | — |
| 5.1 | klyngen forskningsetikk | **4 av 35 oppgaver, 4 av 7 terminer** (V2023-4, H2024-5, V2025-5, H2025-4) | 4 / 4 | ✓ |
| 5.1 | intern mot ekstern prøvd direkte | **1 av 35 oppgaver** (H2025-4) · forskningsetikk historisk **11 av 21 terminer** · Mertons etos i **3 terminer i regime 1** (V2012, V2013, V2014) | 11 / 3 | ✓ |
| 5.2 | hensyn overfor deltakerne, med Fangen | **1 av 35 oppgaver** (V2023-4) + **H2019 (regime 2)** | — | — |
| 5.3 | oppdragsforskning | **1 av 35 oppgaver** (V2025-5) + **H2021 (regime 2)** | — | — |
| 6.1 | klyngen vitenskap, verdier og objektivitet | **3 av 35 oppgaver, 3 av 7 terminer** (V2023-5, H2023-5, V2026-5) · verdifrihet og objektivitet historisk **8 av 21 terminer** | 3 / 3 / 8 | ✓ |
| 6.1 | feministisk vitenskapskritikk historisk | **3 av 21 terminer** (H2012, H2013, V2014) | 3 | ✓ |
| 6.2 | standpunktteoriens objektivitetsbegrep | **2 av 35 oppgaver** (H2023-5, V2026-5) + **V2020 (regime 2)** — klyngens to siste oppgaver, altså stigende | «2 av de 3 siste terminene med klyngen» | ⚠ omformuleres |
| 7.1 | klyngen aktør og struktur | **3 av 35 oppgaver, 3 av 7 terminer** (H2023-4, V2024-4, V2026-4) · historisk **7 av 21 terminer** | 3 / 3 / 7 | ✓ |
| 7.1 | aktør og struktur som begrepspar og metodologi | **2 av 35 oppgaver** (H2023-4, V2024-4) + **H2022 (regime 2)** | — | — |
| 7.2 | overskridelsene (Giddens, Bourdieu, Habermas) | **1 av 35 oppgaver** (V2026-4) — nytt i gjeldende regime, uten forløper | — | — |
| 8.1 | klyngen normativ argumentasjon og bærekraftsdiskurser | **3 av 35 oppgaver, 3 av 7 terminer** (V2024-5, H2025-5, V2026-3) — alle tre fra 2024 eller senere · historisk **7 av 21 terminer** | 3 / 3 / 7 | ✓ |
| 8.1 | normativ argumentasjon anvendt (sivil ulydighet) | **1 av 35 oppgaver** (V2024-5) | — | — |
| 8.2 | bærekraftens veivalg | **1 av 35 oppgaver** (V2026-3) | — | — |
| 8.3 | klimarettferdighet | **1 av 35 oppgaver** (H2025-5) | — | — |
| 8.4 | klimarammen på tvers | **13 av 35 oppgaver i 7 av 7 terminer** (V2023-2 · H2023-4 · V2024-2, -3, -4, -5 · H2024-2, -3, -4 · V2025-2, -5 · H2025-5 · V2026-3) | 13 / 7 | ✓ |
| 8.4 | podkast eksplisitt påkrevd | **3 av 35 oppgaver** (V2024-3, V2025-2 om samfunnsgeografi-podkasten; V2025-5 om Hylland Eriksen-podkasten) + **H2021 (regime 2)**; H2023-4 honorerer koblingen | — | — |
| 9.1 | redegjørelsesleddet | **ingen brøk** — «første ledd i så godt som alle de 35 oppgavene» er en kvalitativ karakteristikk, ikke en telling | — | — |
| 9.2 | oppgaver som uttrykkelig ber om egne eksempler | **5 av 35 oppgaver** (H2023-4, V2024-2, V2024-4, H2024-2, H2024-3) + sensorkravet i **H2021 og V2021 (regime 2)** | «minst fem» | ⚠ skriv «fem» |
| 9.3 | anvendelsesoppgavens caser | **11 dokumenterte caser fordelt på 9 terminer** i regime 2 og 3 | — | — |
| 9.4 | drøftingsleddet | **ingen brøk** — sensorkravet er hjemlet i V2024-3/V2025-2, H2024-4, V2020 og H2020 | — | — |
| 9.5 | flervalgsdelen | **25 spørsmål, 25 % av karakteren, må bestås** · **0 bevarte spørsmål** for samtlige 17 terminer der delen fantes | 0 | ✓ |
| 9.6 | feilregisteret | **16 feil, destillert fra 17 sensorveiledninger** | 16 | ✓ |
| 9.7 | modellbesvarelse menneskemodeller | oppgavemalen gitt **2 ganger nesten ordrett** (V2024-2, H2024-2); klyngen **5 av 35 oppgaver, 5 av 7 terminer** | — | — |
| 9.8 | modellbesvarelse sosial orden på miljøsak | oppgavemalen gitt **ord for ord i 2 av 35 oppgaver** (V2024-3, V2025-2); klyngen **5 av 35, 4 av 7** | — | — |
| 9.9 | modellbesvarelse forskningsetikk | klyngen **4 av 35 oppgaver, 4 av 7 terminer** | — | — |

**De fem sprikene — hvorfor de oppstod, dokumentert her så ingen «retter» dem
tilbake:**

1. **H2024-3-kollisjonen (kap. 3.5 mot 3.6).** Skjelettet skriver i kap. 3.5 at
   «H2024-3 er belegg innenfor den», mens kap. 3.6 beskriver «usynlig
   teater»-casen fra H2024 uten oppgavenummer. Begge kan ikke eie samme oppgave.
   Sosial orden-klyngen har to H2024-oppgaver: H2024-1 er Hobbes og Hume
   (kap. 3.7, hjemlet i analysens § 3.3), og H2024-3 er dermed «usynlig
   teater»-oppgaven — en anvendelsesoppgave som forutsetter Goffmans apparat.
   **Bindende: H2024-3 tilhører kap. 3.6.** Kap. 3.5 påberoper seg ingen
   oppgavenummer i gjeldende regime og skriver i stedet: *«Handlings- og
   bytteperspektivet er ett av de fire perspektivene i klyngen på 5 av 35
   oppgaver i gjeldende regime, men er ikke prøvd som eget oppgavetema i noen av
   de sju terminene. Belegget er V2022 og H2020, begge fra regime 2.»*
   Kontrollsum for Del 3: 3.2/3.4 deler V2024-3 og V2025-2 (samme to oppgaver,
   sett fra hvert sitt perspektiv), 3.6 har H2024-3, 3.7 har H2023-1 og H2024-1
   → 2 + 1 + 2 = **5 av 35** ✓. **Legg aldri 3.2s to og 3.4s to sammen** — det
   ville gitt sju oppgaver i en klynge på fem, som er nøyaktig inter1000-feilen
   («6 av de 9 settene» + «0 av de 7 før» = 16 av 15).
2. **Deltema-overklamringen (kap. 1.4, 1.5 og 2.2).** Skjelettets belegg-linjer
   gjentar hele klyngens oppgaveliste under enkeltkapitler. Regelen fra
   søskenbøkene gjelder her også: **nevneren for et TEMA er ikke nevneren for et
   DELTEMA.** Klyngen rasjonalitet er prøvd i 5 av 35 oppgaver; det betyr ikke at
   homo oeconomicus, Elsters normtyper eller de biologiske modellene hver for seg
   er prøvd fem ganger. Disse kapitlene skriver «som del av klyngen …, prøvd i N
   av 35 oppgaver i gjeldende regime» og deretter sitt eget, mindre tall fra
   tabellen over. Dette er den vanligste måten å produsere et sant tall som sier
   noe usant.
3. **Regimemerkingen i kap. 1.2, 1.5, 3.5, 4.3 og 5.2–5.3.** Flere kapitler har
   sitt sterkeste belegg i regime 2 (V2018–H2022). Det er lovlig og ofte det
   eneste som finnes — men det skal stå: *«sist prøvd som eget tema i V2021, som
   hørte til det forrige eksamensregimet med to essayvalg per termin»*. Et
   regime-2-belegg presentert som om det var dagens eksamen, er en usann
   påstand om hva leseren møter.
4. **Kap. 9.2s «minst fem».** Belegg-lista har nøyaktig fem oppgaver (H2023-4,
   V2024-2, V2024-4, H2024-2, H2024-3). «Minst fem» inviterer neste agent til å
   skrive «seks». Boka skriver **«fem av de 35 oppgavene i gjeldende regime ber
   uttrykkelig om egne eksempler»**, med lista.
5. **Kap. 6.2s formulering.** «I to av de tre siste terminene med klyngen» er
   tvetydig. Klyngen er prøvd i V2023, H2023 og V2026; standpunktteorien bærer
   H2023-5 og V2026-5. Boka skriver: **«standpunktteorien bærer to av klyngens
   tre oppgaver i gjeldende regime (H2023-5 og V2026-5), og begge er fra de to
   siste terminene der klyngen er prøvd — temaet er altså stigende.»**

**⚠ Tre oppgaver er IKKE plassert i noe kapittel, og skal ikke påberopes av
noe kapittel alene:** **H2024-5** (forskningsetikk-klyngens fjerde oppgave),
**V2025-3 og V2025-4** (metodeklyngens to oppgaver på samme sett — V2025 er den
ene terminen som dobler opp), og **V2023-5** (Del 6). De inngår i klyngetallene
4 av 35 og 5 av 35 og 3 av 35, og der stopper det. Å tildele dem et kapittel
ville vært en gjetning presentert som belegg.

⚠ **Rangeringen er uendret**, så skjelettets §2-rasjonale for kapittelfordelingen
står: de fem tyngste klyngene dekker 24 av de 35 oppgavene og får 25 av bokas 33
temakapitler.

### 6.3 NEVNERPORTEN og REGIMEPORTEN

Hver frekvenspåstand har én nevner, og bare disse er lovlige:

| Nevner | Når den brukes | Eksempel |
|---|---|---|
| **35 oppgaver** | ALLE temarangeringer i gjeldende regime | «Sosial orden er prøvd i 5 av 35 oppgaver i gjeldende regime.» |
| **7 terminer** | når enheten er termin i gjeldende regime | «… i 4 av 7 terminer siden V2023.» |
| **21 terminer** | historisk frekvens over hele arkivet — **alltid merket historisk** | «Rasjonalitet er prøvd i 15 av 21 terminer med oppgavetekst, på tvers av alle tre regimene.» |
| **17 sensorveiledninger** | påstander om hva sensor belønner eller trekker for | «Alle 16 feilene er hjemlet i minst én av de 17 sensorveiledningene.» |
| **22 eksamensterminer** | KUN for å beskrive arkivets bredde i kap. 0.1 — **aldri som frekvensnevner** | — |
| **11 oppgavesett-filer** | KUN i kildenoten, alltid med «som dekker 6 terminer» | — |

**Ufravikelige konsekvenser:**

- **Enheten skrives alltid ut** — «5 av 35 oppgaver», aldri «5 av 35».
- **Regimet oppgis ved hvert tall.** Et 35-tall er alltid «i gjeldende regime»
  eller «siden V2023»; et 21-tall er alltid «historisk», «i hele arkivet» eller
  «på tvers av regimene». Prosaregel 2 og 4 (§13.5) håndhever begge.
- **«Sett» er ALDRI en nevner i denne boka.** Ordet er tvetydig her (11 filer, 6
  terminer, to varianter per termin i regime 1). Skriv «oppgaver» eller
  «terminer».
- **«I de fleste terminene», «gjennomgående», «nesten alltid» og «ofte» er
  FORBUDT som frekvenspåstander** uten et telt tall ved siden av. Unntak:
  kvalitative sensorkarakteristikker som «redegjørelsesleddet er første ledd i så
  godt som alle de 35 oppgavene» — de skal merkes som kvalitative vurderinger,
  ikke som telling.
- **Aldri sammenlign to regimer uten å nevne forskjellen i antall tilbudte
  oppgaver per termin.** «Sosial orden er prøvd i 12 av 21 terminer, men bare 5
  av 35 oppgaver» er en meningsløs setning uten den forklaringen.
- **De 18 oppgavene i det publiserte heftet, de 25 flervalgsspørsmålene, de 5
  oppgavene per sett og de 3 som skal besvares er FORMTALL, ikke nevnere.** De
  beskriver eksamen, ikke frekvens, og skal aldri stå i en «N av M»-brøk.

### 6.4 Karakternivåene, de doble beståkravene og strykmekanikken (fra de 17 sensorveiledningene)

**Karakterbeskrivelsen er identisk i alle 17 veiledningene** (bare mikroskopiske
ordendringer i E-kolonnen fra V2023). Alle sjangerkapitler, modellbesvarelser og
prøvefasiter skal referere til nivåene ved navn — aldri bare «sensor vil ha god
drøfting».

| Nivå | Hva veiledningene faktisk sier |
|---|---|
| **A** | Begreper, teorier og prinsipper presist gjengitt; anvendelsen viser **svært god forståelse og selvstendighet**; veldisponert |
| **B** | Samme, men «meget god» |
| **C** | Tilfredsstillende gjengivelse; **jevnt god forståelse og en viss selvstendighet**; rimelig veldisponert |
| **D** | Varierende kunnskaper; anvendelsen røper **variabel** forståelse og selvstendighet |
| **E** | Noe kunnskap; anvendelsen røper **svak** forståelse og **liten eller ingen** selvstendighet |
| **F** | Store hull; anvendelsen røper **manglende** forståelse |

**Poenget leseren må ta med seg, og som skal gjentas i hver A-markør-boks:**
gjengivelse er en forutsetning på alle nivåer, mens **anvendelse og
selvstendighet** er det eneste som beveger kandidaten oppover. Det er ikke
kunnskapsmengden som skiller A fra C.

**Det som belønnes** (åtte punkter, hvert hjemlet — skal stå i kap. 0.2):
selvstendighet og forståelse over gjengivelse · egne, begrunnede eksempler
(H2021 gjør det til et krav; V2021 ber om at egenproduserte eksempler fortrinnsvis
hentes fra samfunnsvitenskap) · å koble pensumdeler sammen (V2021 om metode mot
vitenskapsteori; H2023 om klimapodkastene mot øvrig pensum; V2022 om
allmenningens tragedie mot handlings- og bytteperspektivet) · å følge oppgavens
egen disponering (H2022: at kort er kort, at en utdyping er lengre, og at
relevans-i-dag-leddet ikke hoppes over; V2018 samme vei motsatt) · å tolke en
åpen oppgave eksplisitt i innledningen (H2020) · å prioritere det krevende leddet
(V2020 og H2020) · å problematisere premisset (H2020) · **å ha lest pensum, ikke
bare hørt forelesningen** — ny fast setning fra V2025, gjentatt under hver av de
fem oppgavene, og løftet til generell regel for hele Del II i H2025 og V2026.
Dette er den skarpeste nye kvalitetsskranken i materialet.

**Det som straffes:** oppramsing fra undervisningsplansjer (V2018 sier det to
ganger, nettopp fordi breddekunnskapen allerede måles i flervalgsdelen) · referat
der oppgaven ber om diskusjon (H2020) · å skrive om saken i stedet for om faget
(H2020, H2021, V2021) · å ikke bruke kilden oppgaven ber om (H2019: å svare uten
eksempler fra Fangens kapittel er en vesentlig mangel) · å hoppe over et
oppgaveledd · å parafrasere forelesningen (V2025 →).

**De doble beståkravene (gjeldende regime — skal skrives ut hver gang
eksamensformen omtales):** begge deler må bestås hver for seg, **og** minst **to
av de tre** besvarte skriftlige oppgavene må ha E eller bedre. Flervalgsdelen
teller bare 25 %, men har vetorett — den er den billigste måten å stryke på.

**Strykmekanikken innenfor én oppgave** — V2022 har den mest presise i
materialet: er minimumskriteriene ikke innfridd på **to** av oppgavens ledd,
stryker kandidaten på oppgaven; er de ikke innfridd på **ett**, må de øvrige være
**klart** innfridd for at kandidaten skal unngå stryk. H2022 bruker samme logikk
på en tredelt oppgave. Koblet til de doble beståkravene betyr det at **ett hoppet
ledd kan koste hele eksamen** — det er argumentet for å skrive noe brukbart på
alle ledd framfor å perfeksjonere ett.

⚠ **Regime 2s strykregel er historikk:** «stryk på én av de to delene gir F på
eksamen som helhet» sto identisk i alle veiledningene fra V2019 til H2022.
Nevnes den, skal regimet stå ved siden av.

**De fire rubrikkene (bindende selvrettingsverktøy, binære — leseren skal kunne
krysse av uten skjønn).** De står i kap. 0.2 og i sitt sjangerkapittel, og hver
prøvefasit viser tilbake til den som passer.

**Redegjørelsesrubrikken (redegjørelsesleddet, RED):**

☐ Er det avgrenset hva spørsmålet ber om — og skrevet hva det ikke ber om?
☐ Er begrepet definert presist, med avsender navngitt?
☐ Er kontrastbegrepet satt opp mot det, siden nesten alle bestillinger er
begrepspar?
☐ Står det én presiserende setning som viser hvor grensetilfellene ligger?
☐ Er lengden styrt av oppgaveteksten — er «kort» faktisk kort?

**Eksempelrubrikken (eksempeloppgaven, EKS):**

☐ Er begrepet navngitt før eksempelet kommer?
☐ Er eksempelet ditt eget, og hentet fra samfunnsvitenskap?
☐ Står det eksplisitt hvilken mekanisme i eksempelet som svarer til hvilket ledd
i begrepet?
☐ Står det én setning om hva som ville gjort eksempelet til et dårlig eksempel?

**Anvendelsesrubrikken (anvendelsesoppgaven, ANV):**

☐ Er premisset skilt fra apparatet?
☐ Er saksbeskrivelsen kort nok til at den bare bærer analysen?
☐ Er ett apparat brukt helt, i stedet for tre apparater halvveis?
☐ Står det én setning om hva apparatet ikke fanger?

**Drøftingsrubrikken (drøftingsleddet, DRØ):**

☐ Har du ett argument for?
☐ Har du ett argument mot?
☐ Er innvendingen faktisk besvart, ikke bare nevnt?
☐ Er din egen vurdering skrevet ut, ikke bare antydet?
☐ Har du sagt hvordan du tolket oppgaven, hvis den var åpen?

### 6.5 Sjangrenes anatomi (bindende for alle modellsvar og fasiter)

Kodene **RED**, **EKS**, **ANV**, **DRØ** og **FLE** er byggespråk. **Skriv alltid
sjangerens navn først, koden i parentes**, og skriv navnet fullt ut ved første
bruk per kapittel (§11).

**RED — redegjørelsesleddet, fire trinn:** (1) avgrens hva spørsmålet gjelder ·
(2) definer med avsender · (3) sett opp mot kontrastbegrepet · (4) én
presiserende setning som viser at du vet hvor grensetilfellene ligger.
H2022 sier at kandidaten må følge oppgavens egen disponering — at kort er kort,
at en utdyping er lengre, og at relevans-i-dag-leddet ikke hoppes over. V2018
sier det samme motsatt vei. **Ordet «kort» er en instruks, ikke en høflighet.**

**EKS — eksempeloppgaven, fire trinn:** (1) navngi begrepet · (2) gi eksempelet ·
(3) si **eksplisitt** hvilken mekanisme i eksempelet som svarer til hvilket ledd i
begrepet · (4) si hva som ville gjort eksempelet til et *dårlig* eksempel.
**Punkt 3 og 4 er hele forskjellen — punkt 1 og 2 klarer alle.** H2021
instruerer sensor i å kontrollere at det foreslåtte tiltaket faktisk forutsetter
den menneskemodellen det er ment å illustrere; V2021 ber om at egenproduserte
eksempler fortrinnsvis hentes fra samfunnsvitenskap.

**ANV — anvendelsesoppgaven, fire grep:** skill premiss fra apparat · hold
saksbeskrivelsen kort · velg ett apparat og bruk det helt · skriv én setning om
hva apparatet ikke fanger. **Den harde regelen, gjentatt i tre veiledninger:
saksfeltet gir null uttelling i seg selv** (H2020: dette er ikke en oppgave om
korona; H2021: klimarelatert kunnskap skal ikke vektlegges i seg selv; V2021:
detaljkunnskap skal ikke telle, bare om kunnskapen brukes til å vise forståelse
av pensum). Kap. 9.3 har en egen **«ikke skriv om saken»-boks** med de tre
belagte punktene omskrevet, plassert slik at den kan gjenbrukes ved hver
caseoppgave i boka.

**DRØ — drøftingsleddet, fem trinn:** standpunkt tidlig → beste argument for →
beste innvending → veiing → konklusjon med forbehold. **Sensorkravet er uvanlig
eksplisitt:** minimumskravet er **ett** argument for eller mot, gode besvarelser
gir **flere relevante**, og sterke besvarelser gir **både for og mot** (V2024-3,
V2025-2, H2024-4). Er oppgaven åpen, skal kandidaten **tolke den eksplisitt i
innledningen** (H2020) — et gratis grep svake besvarelser lar ligge.
Drøftingsleddet skal eksplisitt trekke på kandidatens eget redegjørelsesledd fra
samme oppgave, og aldri starte «på nytt».

**FLE — flervalgsdelen:** 25 spørsmål, 25 % av karakteren, må bestås.
Poengsystem +1 / −0,33 / 0. **Regelen leseren skal ta med seg: blank når du ikke
kan utelukke noe, gjett når du kan stryke minst ett alternativ.** ⚠ Ingen
autentiske eksemplarer finnes; bokas bank er nyskrevet (§7.6).

**Alle fem oppgavene på et sett er flerleddede** — de kombinerer nesten alltid
RED med EKS, ANV eller DRØ. Boka trener hver sjanger for seg i Del 9 og
kombinerer dem i prøvene og modellbesvarelsene.

### 6.6 Tidsbudsjett (bruk denne modellen konsekvent i hele boka)

**Gjeldende form (regime 3, V2023 →):** Del I med 25 flervalgsspørsmål (25 %) og
Del II med tre av fem skriftlige oppgaver (25 % hver). ⚠ **Tre timers
skoleeksamen med ordbok som eneste hjelpemiddel er hentet fra UiOs emneside,
ikke fra arkivet, og skal merkes slik hver gang det skrives** (§7.5).

Modellen boka bruker: **~25 min på Del I** (ett minutt per spørsmål pluss en
liten reserve) → **~10 min på å lese de fem oppgavene, velge tre og sette opp
disposisjoner** → **~30 min per skriftlig oppgave** → **~15 min gjennomlesning**.
Innenfor én oppgave: redegjørelsesleddet i minutter, ikke kvarter (~8 min) →
eksempel- eller anvendelsesleddet (~10 min) → drøftingsleddet (~10 min) → landing
(~2 min). **Boka trener korte, komplette besvarelser — aldri lange essays.**

**De tre formregimene** (kap. 0.1, kort og eksplisitt merket som historikk):
regime 1 (V2012–V2014, 5 terminer) med fire korte redegjørelsesspørsmål pluss én
lang oppgave, to varianter og ingen hjelpemidler → regime 2 (V2018–H2022, 9
terminer) med flervalg på maks 50 poeng pluss én av to langsvarsoppgaver, og
hjemmeeksamen med alle hjelpemidler V2020–V2022 → regime 3 (V2023 →, 7 terminer)
med 25 flervalg og tre av fem oppgaver. Formålet med historikken er nøyaktig ett:
at leseren som åpner et sett fra 2013 skjønner hvorfor det har sju spørsmål.

⚠ **«50 flervalgsspørsmål» er en slutning fra 50 poeng, ikke et belegg**, og står
i forbudt-regexen (§13.5). Skriv «maks 50 poeng» om regime 2.

Der en oppgaves deklarerte tid avviker fra summen av deltidene, forklares
differansen (skrivetid mot total). «Lite tid?»-boksen sier eksplisitt at
kapitlenes tidsanslag er **LESEtid**, og at den som skriver besvarelser for hånd
bør legge på ca. ×1,5. **Summen av de 44 kapitlene er eksakt 2 520 minutter ≈ 42
timer lesetid** (verifisert mot skjelettet, §12).

### 6.7 Bokas to mantraer

1. **«Anvendelse slår mengde.»** Etableres i kap. 0.2, gjentas i hvert
   sjangerkapittel og i hver A-markør-boks. Begrunnelsen er karakterskalaen selv:
   gjengivelse er en forutsetning på alle nivåer, anvendelse og selvstendighet er
   det eneste som flytter kandidaten oppover.
2. **«Et eksempel uten begrunnelse er ikke et eksempel.»** Etableres i kap. 0.2.
   Begrunnelse: H2021 instruerer sensor i å kontrollere om eksempelet faktisk
   forutsetter det begrepet det skal illustrere, og sier at D-besvarelser gir
   relevante eksempler, men sliter med begrunnelsene.

Begge mantraene forklares i klarspråk ved første bruk — «C-stoff» er
karaktersjargong og skal gloses (§11).

---

## 7. FAGETS SANNHETSKONTROLL

### 7.1 Begrunnelsesregelen (ufravikelig)

Enhver kobling i boka — i et eksempel, i en modellbesvarelse, i en fasit — skal
være **begrunnet i én setning som svarer på «hvorfor akkurat dette?»**. En
konstatert kobling er C-stoff, og boka skal aldri vise C-stoff som om det var
A-stoff.

| ✗ Konstatert | ✓ Begrunnet |
|---|---|
| «Å flytte salatbaren forutsetter en passiv menneskemodell.» | «Å flytte salatbaren forutsetter en passiv menneskemodell, fordi tiltaket virker uten at noen tar stilling til noe: det endrer hva som er lett å gjøre, ikke hva folk mener. Hadde tiltaket vært en informasjonskampanje, ville det forutsatt at personen vurderer og velger — altså en aktiv modell.» |
| «Denne handlingen er verdirasjonell.» | «Handlingen er verdirasjonell fordi begrunnelsen ligger i handlingen selv og ikke i utfallet — naboen sorterer avfall fordi hun mener det er riktig, og fortsetter derfor også hvis gebyret avvikles. Var gebyret grunnen, ville handlingen vært formålsrasjonell.» |
| «Miljøbevegelsen er dysfunksjonell.» | «Bevegelsen kan leses som dysfunksjonell fordi den forsinker beslutninger fellesskapet trenger — men da må man si hvem sitt «for helheten» man legger til grunn, og den motsatte lesningen er like forsvarlig: den lufter misnøye og gjør vedtaket mer robust.» |

### 7.2 Eksempelverkstedet — emnets signaturapparat

Å lage et **eget** eksempel og **begrunne** at det illustrerer begrepet, er
ferdigheten som skiller SVEXFAC03 fra et rent puggeemne, og den skiller C fra A i
fem av de 35 oppgavene (§6.2). Den kan trenes mekanisk, og boka bygger derfor et
verksted leseren kan mobilisere fra:

- **Kap. 9.2 er verkstedet:** firetrinnsformen (§6.5), en **eksempelbank** med
  ferdig begrunnede eksempler for hver av de ti klyngene, og
  **gyldighetsdrillen**: tolv nyskrevne eksempler der leseren skal avgjøre om
  eksempelet faktisk illustrerer begrepet — **fire treffer, fire bommer på en
  identifiserbar måte, og fire er grensetilfeller** der fasiten skriver ut begge
  lesningene og merker oppgaven **«(omstridt — begge forsvarlige)»**.
- **Hvert temakapittel bidrar til banken:** minst ett `example` i hvert
  temakapittel er et eksempel med begrunnelsen utskrevet trinn for trinn, slik at
  leseren ser mønsteret gjentatt ti ganger før hun møter verkstedet.
- **Ingen «Figur i ord»-krav, ingen regning, ingen kildehenvisningsdrill.** Emnet
  er formelfritt, og eksempelverkstedet er det eneste fagspesifikke apparatet
  boka bygger.

### 7.3 Avsenderkoblinger — riktig tilskrivning (grep-sjekk mot denne tabellen)

Sensor merker en feilplassert forfatterkobling umiddelbart, og
redegjørelsesleddet lever av at koblingen er riktig.

| Begrep | Riktig avsender | ALDRI tilskriv |
|---|---|---|
| De fire perspektivene på sosial orden; kollektiv bevissthet og prekontraktuell solidaritet; ideologi, klasse og stand som ordensmekanismer; bytte, gavebytte og mikrosanksjoner; hverdagsritualer og inntrykksmestring | **Solli**, «Spørsmålet om sosial orden» | Aakvaag, Balsvik |
| Menneskesynet til Marx, Weber og Durkheim; samtidsdiagnosens fire krav; fremmedgjøring, anomi, rasjonalisering; idealtypen | **Aakvaag** | Solli, Balsvik |
| Den naturalistiske vendingen; biologiske passive modeller | **Aakvaag**, «Samfunnsvitenskap og biologi» | Balsvik |
| Menneskemodell som begrep; aktiv mot passiv; sosial mot biologisk passiv modell | **Balsvik**, «Mennesket i samfunnsvitenskapene» | Aakvaag |
| Formåls- mot verdirasjonell handling (Webers skille, slik det framstilles); homo oeconomicus' forutsetninger; begrenset rasjonalitet; Elsters tre normtyper; allmenningens tragedie og gratispassasjerproblemet | **Balsvik**, «Rasjonalitetsantakelser i samfunnsvitenskapene» — begrepene tilhører **Weber** og **Elster** | Nyborg, Solli |
| Diktatorspillet, ultimatumspillet, nåtidsskjevhet og manglende selvkontroll | **Nyborg**, «Hvem er redd for Homo Oeconomicus?» | Balsvik alene |
| Naturtilstanden og statsmakt som betingelse for orden (Hobbes); konvensjoner som spontan orden (Hume) | **Malnes**, «Samfunnsfilosofi» | Solli |
| Moralske følelser, den usynlige hånd, arbeidsdelingskjeden, merkantilismekritikken | **Balsvik**, «Adam Smith» — teorien tilhører **Smith** | Malnes |
| Metodeforklaring mot substansiell forklaring; spørsmålsformulering, utvalg og statistiske mål | **Hellevik** | Tufte |
| Universelle lover mot robust avhengighet; den deduktivt-nomologiske modellen; de tre betingelsene for en årsaksslutning; mekanisme-, formåls- og funksjonsforklaring; Colemans badekar | **Tufte** — badekaret tilhører **Coleman** | Hellevik, Gilje |
| Hypotetisk-deduktiv metode | **Gilje** ⚠ («bør kjenne til») | Tufte |
| Deltakende observasjon og feltarbeid som kvalitativ metode | **Wikan** | Christie, Fangen |
| Problemstilling, utvalg og datakilder i en konkret kvalitativ studie | **Christie**, «Serberleirene i Nord-Norge» | Wikan |
| Forskningsetiske dilemmaer i felt; informert samtykke i praksis; infiltrasjon | **Fangen**, «Etikk i kvalitative studier» | Balsvik |
| Intern mot ekstern forskningsetikk; de tre interne og de tre eksterne normene; forskningens frihet; oppdragsforskning | **Balsvik**, «Forskningsetikk for samfunnsvitenskapene» | Merton, Fangen |
| Vitenskapens etos; desinteresse; institusjonell kontroll; dysfunksjon og funksjonell enhet | **Merton** | Balsvik, Parsons |
| Verdifrihet, er og bør, verdiimpregnering, intersubjektivitet, og innvendingen om at skillet er mer problematisk enn Weber gir inntrykk av | **Grimen**, «Vitenskap og verdier» — læren tilhører **Weber**, innvendingen er Grimens egen | Weber alene, Holst |
| De tre typene feministisk vitenskapskritikk; standpunktteori og sterk objektivitet; situert kunnskap | **Holst**, «Kjønn, feminisme og vitenskap» — standpunktteorien tilhører **Harding**, situert kunnskap **Haraway** | Grimen |
| Økomodernisme mot vekstfri utvikling; det vage mot det klare bærekraftbegrepet; smultringmodellen | **Svarstad** | Lavik og Pedersen |
| Fattigdomssensitivt forurenser-betaler, historiesensitiv betalingsevne, hybridteorien; per capita-prinsippet | **Lavik og Pedersen** — hybridteorien tilhører **Caney**, per capita-versjonene **Singer** og **Broome** | Svarstad |
| Strukturens dualitet / habitus / kommunikativ handling | **Giddens** / **Bourdieu** / **Habermas** | hverandre |
| AGIL og systemets fire krav | **Parsons** | Durkheim, Merton |

**Tillatte avsendere er uttømmende:** Solli · Aakvaag · Balsvik · Nyborg · Malnes
· Hellevik · Tufte · Gilje (⚠ bør kjenne til) · Wikan · Christie · Fangen ·
Merton · Grimen · Holst · Svarstad · Lavik og Pedersen — samt klassikerne og
teoretikerne Marx, Weber, Durkheim, Parsons, Goffman, Hobbes, Hume, Smith,
Elster, Coleman, Harding, Haraway, Caney, Singer, Broome, Giddens, Bourdieu og
Habermas. **Navn utenfor denne lista skal ikke innføres som pensumankere.**

⚠ **Thorsen-kapitlet om normativ politisk teori** (Platon, Berlin, Popper, Dahl,
Rawls, Nozick) er **utfaset som oppgavetema** (§7.4). Navnene kan nevnes i den
merkede historikk-noten i kap. 8.1, aldri som pensumanker og aldri som
flashcard-kilde.

### 7.4 Kalibreringsregelen — det utgåtte pensumet (UFRAVIKELIG)

Boka kalibreres mot **regime 3 (V2023 →)**. Følgende stoff er utfaset og skal
**ikke bære kapitler, ikke generere flashcards og ikke generere quiz**:

| utfaset | sist prøvd | erstattet av |
|---|---|---|
| Rawls' og Nozicks rettferdighetsteorier som eget oppgavetema | H2012 | klimarettferdighet: Caneys hybridteori og per capita (kap. 8.3) |
| Normativ politisk teori bredt (Thorsen-kapitlet: Platon, Berlin, Popper, Dahl; frihet og staten) | H2020 | bærekraftsdiskurser (kap. 8.2) og normargumentasjon anvendt på klimasaker (kap. 8.1) |
| Etisk realisme og etisk relativisme | H2013 | ikke erstattet — metaetikken er ute |
| Muligheten for enighet om normative spørsmål | V2013 | ikke erstattet |
| Marx' fremmedgjøringsteori som eget spørsmål | V2014 | absorbert i menneskesyn- og samtidsdiagnose-oppgavene (kap. 2.1 og 2.4) |
| Feministisk vitenskapskritikk som bredt redegjørelsesspørsmål | V2018 | innsnevret til standpunktteori og objektivitet (kap. 6.2) |
| Korona som analyseobjekt | H2020 | engangstilfelle |
| Vitenskapelig uredelighet som eget kortspørsmål | H2012 | absorbert i intern forskningsetikk (kap. 5.1) |

Bokas **eneste** omtale er korte, eksplisitt merkede historikk-noter i det
kapitlet som overtok stoffet, pluss listen «Hva som er ute» i studieguiden.
Formålet er nøyaktig ett: at leseren som trener på gamle sett skjønner hvorfor
halve oppgaveteksten handler om noe hun ikke skal kunne. Notene gis som navn med
**én forklarende setning hver**, alle merket «ikke pensum i dag; står her for at
gamle oppgavesett skal gi mening», og skal **ikke** ha begrepsdefinisjoner som
genererer flashcards.

⚠ **Motsatt vei — kalibreringens viktigste forbehold: lavfrekvens gir færre
minutter, aldri stryking.** Funksjonalismen ble prøvd i H2013, lå helt nede
gjennom hele regime 2, og kom tilbake i H2024-4. **Et tema med 1 av 35 oppgaver
er ikke dødt.** Funksjonalismen (kap. 3.3, 45 min) og Adam Smith (kap. 3.8, 55
min) har begge 1 av 35 og begge fullt kapittel. Ingen agent skal «rydde bort» et
lavfrekvent kapittel, og ingen agent skal skrive at et tema «neppe kommer
igjen».

⚠ **Hypotetisk-deduktiv metode** (Gilje) er ikke prøvd i gjeldende regime — sist
V2019 — men står fortsatt i UiOs læringsutbytte under «hypotesetesting». Dekkes
kort i kap. 4.5 og merkes eksplisitt «bør kjenne til».

⚠ **Etiske problemstillinger ved bruk av kunstig intelligens** står i UiOs
generelle kompetansemål, men er **ikke prøvd i noen av de 21 terminene med
oppgavetekst**. Nevnes i én kort, tydelig merket boks i kap. 5.3, bærer ikke
kapittel og genererer ingen quiz- eller flashcard-kvote.

Del 9s øvingseksamen C er dessuten bygget rundt bredde-scenarioet, ikke rundt
utgått stoff: den henter fem oppgaver fra de fem *minst* frekvente klyngene.

### 7.5 De tre uverifiserte påstandene — og `(verifiser)`-disiplinen

⚠ **Tre påstander står IKKE i arkivet. Skjelettet forbyr dem i ubetinget form,
og denne kontrakten binder hvordan de skrives:**

1. **Varighet og hjelpemidler.** «3 timers skoleeksamen med ordbok som eneste
   tillatte hjelpemiddel» er hentet fra **UiOs emneside**. Ikke ett dokument i
   arkivet oppgir det. Hver gang det skrives, skal kilden stå i samme setning:
   *«Etter UiOs emneside varer eksamen tre timer, og ordbok er eneste tillatte
   hjelpemiddel — det står ikke i noe dokument i arkivet, så sjekk
   semestersiden for ditt semester.»* Prosaregel 6 (§13.5).
2. **Adgangskravet.** Enten obligatorisk seminarundervisning (⚠ **7 av 11
   seminarer** iflg. dagens emneside; en eldre versjon oppgir 6 av 10) eller en
   hjemmeoppgave på 2000–2500 ord med innlevering av fullstendig utkast og
   tilbakemelding på en medstudents oppgave. **Begge tallpar skal enten stå
   sammen med forbeholdet, eller utelates til fordel for «et flertall av
   seminarene».** Boka henviser leseren til semestersiden. Prosaregel 7 (§13.5).
3. **Pensumutgaver og sidetall.** Veiledningene navngir forfattere og tekster,
   aldri utgave. Forfatteren skal **aldri** oppgi utgave, årstall eller sidetall
   for pensumlitteratur. Hardt grep-forbud mot `\bs\. ?\d+`, `sidene N`,
   `N. utgave` og parentesårstall `(2018)` (§13.5). Grunnboka omtales som
   antologien «Introduksjon til samfunnsvitenskapene», bind 1 og 2, redigert av
   Balsvik og Solli — uten utgave og uten år.

**`(verifiser)`-disiplin.** Referanser du er usikker på merkes i den literale
formen `(verifiser)` og løses i **fase 6 FØR `sjekk-bok.py` kjøres siste gang**
(porten flagger gjenværende markører). Dette gjelder særlig:

- **Alle pensumkoblinger merket ⚠ i skjelettets begrepskontrakter** — de er
  hentet fra veiledningenes omtale, ikke fra en pensumliste.
- **Hver enkeltpåstand om hva en klimapodkast sier** (kap. 8.4). Podkastene
  finnes ikke i noen lærebok, og innholdet er kjent gjennom veiledningenes
  omtale. Alt substansielt refereres kort og gjengis aldri i lengde.
  **Kan en påstand ikke verifiseres i fase 6, skal den fjernes eller reduseres
  til det veiledningene faktisk attesterer: fagets navn og kjernebegrepet.**
  Å la en uverifisert påstand stå uten markør er verre enn å utelate den.

### 7.6 FLERVALGS-ÆRLIGHETEN (bokas viktigste enkeltregel)

**Ikke ett eneste flervalgsspørsmål er bevart**, for noen termin — det gjelder
alle 17 terminene i regime 2 og 3, altså hele perioden delen har eksistert. Vi
vet at delen i dag har 25 spørsmål, at den teller 25 %, at den **må bestås** for
at eksamen skal bestås, at poengsystemet er +1 / −0,33 / 0, hva karaktergrensene
er, og at formålet uttrykkelig er å teste breddekunnskap om pensum. Vi vet
**ingenting** om spørsmålsformat, distraktortyper eller hvilke deler av pensum
som treffes.

**Konsekvensen er bindende for hele boka:**

1. **Bokas 910 quiz-spørsmål er NYKONSTRUKSJON, ikke rekonstruksjon.** De bygges
   på pensumbredden de 17 sensorveiledningene navngir — ikke på gjenkjente
   eksamensspørsmål.
2. **Boka skal aldri, noe sted, antyde at den har trent på tidligere
   flervalgsoppgaver.** Ikke i markedsføringstone, ikke i en bisetning, ikke i en
   prøve-tip.
3. **Ærligheten skal stå to steder, i klartekst og ikke i en fotnote:**
   kildenoten i **kap. 0.1** (§6.1.1) og åpningen av **kap. 9.5**, pluss
   åpningen av flervalgsprøven i `svexfac03-9-prove` (§5.6). Dette er ikke et
   lite forbehold — det er den ene tingen leseren har krav på å vite om det
   verktøyet hun bruker mest.

**Ærlighetsmal for kap. 9.5 og for flervalgsprøven** (testet mot forbudt-regexen
i §13.5, null treff — bruk ordlyden, tilpasset i språk, aldri i sak):

> Denne delen av eksamen er den eneste vi ikke kan vise deg et ekte eksempel på.
> UiO publiserer sensorveiledninger og langsvarsoppgaver, men ingen spørsmål fra
> flervalgsdelen — for noen termin, i noen av de årene delen har eksistert. Vi
> vet formatet: 25 spørsmål, 25 % av karakteren, må bestås, +1 for riktig, −0,33
> for galt og 0 for blankt. Vi vet ikke hvordan spørsmålene er formulert, hvor
> nære svaralternativene ligger hverandre, eller hvilke deler av pensum de
> treffer. Spørsmålene i denne boka er derfor skrevet av oss, ut fra
> pensumbredden sensorveiledningene navngir, og ingen av dem er hentet fra en
> eksamen. Bruk dem som breddetrening over alle ti temaklyngene — det er den
> ferdigheten delen faktisk måler — og ikke som en spådom om ordlyd.

**Hard port.** Følgende formuleringer gir null treff i hele boka (del av
regexen i §13.5, kjøres case-insensitivt):

```
tidligere flervalgsoppgaver|tidligere flervalgsspørsmål|autentiske flervalgsspørsmål|autentiske flervalgsoppgaver|ekte flervalgsspørsmål|ekte eksamensspørsmål|flervalgsspørsmål fra UiO|flervalgsoppgaver fra UiO|eksamensspørsmål fra UiO|gjenkjente eksamensspørsmål|hentet fra flervalgsdelen|originale flervalgsspørsmål|flervalgsbanken fra eksamen|50 flervalgsspørsmål
```

⚠ **Malene over er skrevet FOR å passere denne porten.** «Boka har ikke trent på
tidligere flervalgsoppgaver» er sant, men felles av porten — og det er med
vilje: en negasjon som inneholder påstanden, overlever ikke skumlesing, og
overlever ikke et søkemotorutdrag. Skriv det positivt: *«Spørsmålene i denne boka
er skrevet av oss»*. Endrer du en av malene, kjør testen i §13.5 på nytt.

### 7.7 KRYSSGEVINST-FORBUDET MOT EXPHIL03 (ufravikelig)

⚠ **Boka skal ikke love uttelling for EXPHIL03-stoff.** Ingen av de 17
sensorveiledningene nevner EXPHIL03 med ett ord. Der JFEXFAC04s V2023-veiledning
uttrykkelig gir uttelling for å trekke inn moralsk realisme og antirealisme fra
exphil, finnes **ingen slik bro her**.

Tenkergalleriene er nesten disjunkte:

| Tema | SVEXFAC03 | EXPHIL03 |
|---|---|---|
| Samfunnskontrakt | Hobbes, Hume | Locke, Held |
| Rettferdighet | Caney, per capita (Rawls og Nozick utfaset) | Mill, Kant, Held |
| Vitenskapsteori | forklaringstyper, Tufte, Merton | Lakatos, Galileo, Einstein |
| Feministisk kritikk | Harding, Holst, Haraway | Haslanger, Jaggar |
| Er og bør | Weber og Grimen om verdifrihet | Hume (utfaset 2021) |
| Miljø | hele klimasøylen, Svarstad, Caney | Sylvan |
| Kjerne | Marx, Weber, Durkheim, Smith, Merton, Elster | Descartes, Kant, Mill, Aristoteles, Platon |

**Temaene berører hverandre; pensumtekstene gjør det ikke — og eksamen spør om
teksten.**

**Praktiske regler:**

- **Maksimalt to kryssbok-lenker til `exphil03` i hele boka** (§14), begge rent
  tematiske, begge med innrammingen skrevet ut i samme setning.
- **Formuleringer av typen «dette kan du gjenbruke på exphil», «her får du
  uttelling på begge emner» eller «samme stoff som i exphil» er forbudt**
  (hard regex, §13.5).
- **Hver omtale av exphil skal bære rammen:** «et annet emne med eget pensum og
  egne krav — ingen SVEXFAC03-veiledning nevner exphil». Prosaregel 8 (§13.5)
  håndhever det.
- Det som **derimot** kan gjenbrukes fra søskenbøkene, er **formen**:
  drøftingshåndverket, sensorkrav-kapitlet og modellbesvarelser differensiert på
  selvstendighet. Sier boka noe om overføring, skal det gjelde formen og stå
  eksplisitt som form.

---

## 8. FAGLIG OG POLITISK NØYTRALITET (bindende — faglig presisjon, ikke høflighet)

SVEXFAC03 handler om klimapolitikk, ulikhet, kjønn, kriminalitet, makt og
bærekraftig vekst, og pensum består selv av konkurrerende posisjoner. En
fremstilling som tar stilling på leserens vegne er **faglig gal** — sensorkravet
er uttrykkelig at sterke besvarelser gir argumenter både for og mot. Men
nøytralitet betyr **ikke** å relativisere.

| Type påstand | Slik behandles den |
|---|---|
| **Faglig stridsspørsmål** («er miljøsaken integrerende eller konfliktskapende?», «er modellen svekket eller presisert av eksperimentene?», «er verdifrihet et oppnåelig ideal?») | **Posisjonspar.** Begge sider får sitt beste argument. Dette er ikke svakhet — det er drøftingsstoffet sensor premierer. |
| **Politisk omstridt spørsmål** («bør veksten ned?», «hvem skal betale klimaregningen?», «er sivil ulydighet forsvarlig?») | **Posisjonene beskrives, aldri bedømmes i bokas egen stemme.** Minst to posisjoner, hver med sin sterkeste begrunnelse. Modellbesvarelsene kan og skal lande — men det er *besvarelsens* landing, ikke bokas. |
| **Etablert fagregel** («sosial orden betyr ikke harmoni»; «samvariasjon, årsaksretning og kontroll for tredje variabel er tre krav, ikke ett»; «Weber står under konfliktperspektivet, mens rasjonalitetsformene hører til handlings- og bytteperspektivet») | **Presenteres som det det er**, med sitt faktiske belegg. Å pakke en etablert fagregel inn i «noen mener» er å svekke faget, ikke å være nøytral. Prosaregel 9 (§13.5). |
| **Teoretisk omstridt begrep** («bærekraft», «rasjonalitet», «frihet») | Sies eksplisitt at det ER omstridt, og hvor striden går. Kap. 8.2s hele poeng er at et vagt bærekraftbegrep skjuler nettopp striden om vekst. |
| **Begrep med politisk ladning** («gratispassasjer», «anomi», «fremmedgjøring», «sårbar gruppe») | Brukes **analytisk**, definert ved første bruk per kapittel. «Gratispassasjer» er et analytisk begrep om en aktør som nyter et gode uten å bidra — aldri et skjellsord. |

**Konkrete bindinger:**

- **Ingen policyanbefalinger i bokas egen stemme.** «Vi må», «det er på tide at»,
  «myndighetene bør» hører ikke hjemme. Boka kan gjengi en posisjon som mener
  dette — merket som posisjon.
- **Posisjonene fremstilles slik en tilhenger ville kjent seg igjen i dem.** En
  karikert økomodernisme eller en karikert vekstkritikk gir en verdiløs drøfting,
  og sensor ser det.
- **Klimastoffet er analyseobjekt, ikke kampsak.** Klimarammen dekker 13 av 35
  oppgaver, men saksfeltet gir null uttelling i seg selv (§6.5, ANV). Boka
  skriver om apparatet, ikke om saken — og modellerer nettopp det leseren skal
  gjøre.
- **Mennesker i casene er aktører, ikke kulisser.** Skriv «personer som ikke
  sorterer avfall», ikke merkelapper på personer.
- **Vippe-case (bindende):** minst to steder i boka skal en oppgave ha to fullt
  forsvarlige landinger, der fasiten skriver **UT begge lesningene** og merker
  oppgaven **«(omstridt — begge forsvarlige)»**. Plasseringen er gitt av
  skjelettet: **gyldighetsdrillens fire grensetilfeller i kap. 9.2** og
  **eksempeldrillens to grensetilfeller i Del 1-prøve 2**. I tillegg har
  kap. 3.2/3.4 (samme miljøsak lest med to perspektiver) og kap. 3.3
  (funksjonell eller dysfunksjonell miljøbevegelse) tvilstilfeller der begge
  lesninger skrives ut. Entydige fasiter hele veien trener aldri håndtering av
  ekte faglig ambivalens — og det er ambivalensen sensor premierer.
- **Fag og sak holdes fra hverandre.** Boka sier aldri at en posisjon er riktig
  fordi den er sympatisk, og aldri at et politisk spørsmål er avgjort fordi et
  begrep beskriver det.

---

## 9. GJENBRUKSTABELLEN — tolv oppgavefamilier (bindende for kap. 0.1 og for oppgavevalget)

Gjenbruk er systemet, ikke unntaket: oppgavene hentes fra et publisert hefte på
18 oppgaver som har vært tilgjengelig hele semesteret, og heftet fornyes bare
delvis. Det er hele begrunnelsen for at boka ber leseren trene på gamle sett — og
for at bokas egne nyskrevne oppgaver følger nøyaktig disse malene.

| Familie | Terminer | Merknad |
|---|---|---|
| Menneskesynet til Marx og Durkheim + frihet i det moderne samfunn | **V2024-1, V2025-1** | ord for ord; V2023-1 er samme oppgave med Weber som tredje teoretiker |
| Miljøsaken som integrasjon eller konflikt + samfunnsgeografi-podkasten | **V2024-3, V2025-2** | ord for ord |
| Passive og aktive menneskemodeller + klimatiltak + verdirasjonalitet | **V2024-2, H2024-2** | eneste forskjell: «fordeler og ulemper» mot bare «ulemper» |
| Diktator- og ultimatumspillet + nåtidsskjevhet mot homo oeconomicus | **H2025-2, V2026-2** | andre ledd identisk; første ledd varierer |
| Samtidsdiagnose + Marx | **H2022 (regime 2), H2023-2, H2025-1** | tre høstterminer, samme kjerne, ulik innramming |
| Standpunktteoriens objektivitetsbegrep | **V2020 (regime 2), H2023-5, V2026-5** | — |
| Hobbes og Hume om sosial orden | **H2023-1, H2024-1** | V2019 (regime 2) er samme stoff med Smith som tredje |
| Tuftes tre betingelser for en velbegrunnet årsaksslutning | **V2021 (regime 2), V2023-3** | V2023 understreker at kravene skal forklares, ikke bare nevnes |
| Mekanismeforklaring | **V2021 (regime 2), H2023-3** | — |
| Forskningsetiske hensyn overfor deltakere + Fangens dilemmaer | **H2019 (regime 2), V2023-4** | H2019: å svare uten eksempler fra Fangen er en vesentlig mangel |
| Oppdragsforskning + Hylland Eriksen-podkasten | **H2021 (regime 2), V2025-5** | V2025-5 har forurensning av et havnebasseng som case |
| Aktør og struktur | **H2022 (regime 2), H2023-4, V2024-4, V2026-4** | V2026-4 dreier stoffet mot overskridelsen |

**Fem gjentakelser i regime 1**, som kun nevnes i den merkede historikk-noten:
integrasjonsperspektivet identisk i V2012 og H2012 · formåls- mot
verdirasjonalitet identisk i H2012 og V2014 · årsaksforklaring og robust
avhengighet identisk i V2012 og V2014 · Mertons vitenskapens etos i V2012, V2013
og V2014 · feministisk vitenskapskritikk i H2012, H2013 og V2014.

**Bindende konsekvenser:**

- Tabellen står i kap. 0.1, med setningen om at trening på gamle sett derfor er
  direkte eksamensrelevant.
- **Antallet er tolv familier i regime 2–3 og fem i regime 1.** Skriv ikke «en
  rekke» og ikke «minst femten» — tallene er telt, og listene er uttømmende for
  det arkivet dokumenterer.
- **Familier som krysser regimer skal merkes**, slik tabellen gjør det: en
  H2022-forekomst er fra regimet med to essayvalg, ikke fra dagens fem.
- **Bokas nyskrevne oppgaver følger disse malene** — det er slik en oppgavebank
  blir eksamensrelevant uten å gjengi noe. Men formuleringene er våre egne (§16).
- **Sesongobservasjonene hviler på sju terminer og formuleres som
  observasjoner, aldri som regler:** samtidsdiagnosen er en høstoppgave (H2022,
  H2023, H2025 — aldri om våren etter V2014) · Hobbes og Hume er en høstoppgave
  (H2023, H2024) · menneskesyn-oppgaven er en våroppgave (V2023, V2024, V2025) ·
  miljøsak-oppgaven er en våroppgave (V2024, V2025). Øvingseksamen B sier dette
  eksplisitt til leseren (§5.6).

---

## 10. MODELLBESVARELSER (ærlighet, nivå og variasjon)

### 10.1 Ærlig merking — ufravikelig

- Hver modellbesvarelse innledes med én linje: **«Nyskrevet modellbesvarelse —
  skrevet av oss for denne boka. SVEXFAC03-arkivet har 17 sensorveiledninger som
  beskriver hva sensor forventer, men ingen publiserte besvarelser og ingen
  fasit. Dette er derfor ikke en ekte kandidatbesvarelse.»**
- En boks som heter «C-besvarelse» skal **VÆRE en C** — tittel, tekst og
  margnotater skal stemme. En polert A merket som C er en byggefeil. Samme for
  E-skissen i kap. 0.2: den skal faktisk mangle det den sier den mangler.
- Ordet «studentbesvarelse» er forbudt i bokinnholdet (grep-sjekkes, §13.5).
  Skriv «modellbesvarelse», og bruk formuleringen «ikke en ekte
  kandidatbesvarelse» i ærlighetslinjen.
- **Oppgavene er nyskrevne, også når de ligner.** Casene arkivet har brukt —
  korona, California-smilefjesene, Trondheims-utestedene, Gladstone-havna,
  overopphetingsprosjektet — **gjengis ikke**. De kan nevnes som eksempler på hva
  slags caser sjangeren bruker, men alle analyser er på bokas egne (§16).

### 10.2 Meta-fasit er FORBUDT

«En A-besvarelse ville her ha drøftet …» er en regibemerkning, ikke en fasit.
**Drøftelsen skal skrives UT** — kort, skarp, forankret, med landing.
Grep-sjekkes: `en A-besvarelse ville|ville ha drøftet|en toppbesvarelse ville`
= 0 treff.

Margnotater er lov og ønsket, men de skal **peke på tekst som faktisk står der**:
`> Margnotat: her sier begrunnelsen hvilket ledd i menneskemodellen tiltaket treffer — det er nettopp den kontrollen H2021-veiledningen ber sensor gjøre.`

### 10.3 Nivåfordeling og profilvariasjon (bindende)

| Kapittel | Nivåer som SKAL finnes | Profil |
|---|---|---|
| 0.2 | samme korte oppgave på **E-, C- og A-nivå** | — |
| 9.1–9.6 | momentliste (må-punkter / pluss-punkter / feller) på hver oppgave | — |
| **9.7** (menneskemodeller og klimatiltak) | A + kommentert C | **A-en er en DYBDE-A**: to tiltak, men begge begrunnet helt inn i modellens forutsetninger |
| **9.8** (sosial orden på en miljøsak) | A + kommentert C | **konkluderer SKARPT** (se 10.4); A-en viser hvordan a-leddet gjenbrukes i c |
| **9.9** (forskningsetikk) | A + kommentert C + **autentisk midtnivåbesvarelse** | **A-en er en BREDDE-A**: begge kategorier normer dekket, ingen drevet ekstremt dypt |

**Breddeprofil mot dybdeprofil er ikke pynt** — det er sjekkliste-forbudet gjort
synlig: H2020 sier uttrykkelig at begrepene listet under hvert perspektiv kun er
forslag, og at å tvinge inn alle gir en dårligere besvarelse, ikke en bedre.
Begge modellbesvarelsene skal ha margnotat som sier eksplisitt at den andre
profilen ville vært like god.

**Den autentiske midtnivåbesvarelsen i kap. 9.9** er et README-krav: ekte
studentspråk, litt rotete disposisjon, ett godt selvstendig poeng om
publiseringsretten, men innvendingen i c-leddet mangler svar. Med margnotater om
hva som er **BRA NOK** og de to–tre grepene som skiller den fra toppnivå. Leseren
trenger et realistisk sammenligningspunkt, ikke bare polert A og karikert C.

### 10.4 Konklusjonsvariasjon (bindende)

- **Kap. 9.8 skal konkludere SKARPT:** A-besvarelsen velger ett perspektiv, tar
  klart standpunkt til påstanden om at miljøsaken skaper samhold, skriver
  begrunnelsen ut — og er likevel toppnivå. Margnotat: «Forbehold er et verktøy,
  ikke obligatorisk garnityr. En skarp, begrunnet konklusjon er en fullgod
  A-form.»
- **9.7 og 9.9** kan lande mer avveiende, men må da begrunne selve avveiningen —
  «det kommer an på» uten grunner er feil #10 i ny drakt.
- Ikke alle modellbesvarelser skal lande på samme kompromissform.

---

## 11. Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»; SKAL i førsteutkastet)

- **Kun eksamensrelevant stoff.** «Bør kjenne til»-stoffet (hypotetisk-deduktiv
  metode, KI-etikken, historikk-notene om utgått pensum) plasseres SIST i sitt
  kapittel og merkes eksplisitt med sin lave frekvens.
- **HARDT LINJEBRUTT PROSA ER FORBUDT (rendrings-kritisk).** Rendreren gjør HVERT
  enkelt `\n` om til `<br />`. Regelen: **ett avsnitt = én lang linje i
  JSON-strengen**, `\n\n` mellom avsnitt, og enkelt `\n` KUN der linjeskiftet
  faktisk er ønsket (deloppgaver, listelinjer, tabellrader, margnotater,
  flervalgsalternativer). Gjelder `content`, `problem`, `solution`, `task` og
  `hints`.
- **Godt, flytende norsk (UFRAVIKELIG).** Hele setninger, korte avsnitt (2–4
  setninger), aktiv «du»-form. Telegramstil er FORBUDT — «Perspektiv: konflikt.
  Menneskemodell: passiv.» skrives «Perspektivet er konfliktperspektivet, og det
  hviler på en passiv menneskemodell». Konkret norsk knagg før fagtermen;
  presisjon vinner ved tvil. Fremmedord og latinske uttrykk (homo oeconomicus,
  anomi, habitus) får norsk forklaring først, termen i parentes ved første bruk
  per kapittel.
- **Ingen uforklart sjargong.** Fagstoffet er nybegynnervennlig — det er
  METAspråket som må ryddes. Sjangerkodene RED/EKS/ANV/DRØ/FLE, feilkodene #1–#16
  og all karaktersjargong («C-stoff», «A-markør», «C-terskelen») forklares i
  klarspråk ved FØRSTE bruk **per kapittel**. Ingen kald kode i
  `competenceGoals` eller i kapitlets aller første tekstboks. Mange lesere er i
  sitt første studieår.
- **Hver oppgave synlig eksamensforankret** med sjangerens navn i ledende
  parentes:
  `(Eksamenssjanger eksempeloppgave — EKS; slike oppgaver krever at du begrunner hvorfor eksempelet illustrerer begrepet, ikke bare at du gir det.)`
  Sjangerkoden skrives fullt ut ved første bruk per kapittel. Vanskelighetsgraden
  skrives ALDRI inn i `task` (den ligger i `difficulty`).
- **Deloppgaver merkes a), b), c) — ALDRI (i), (ii), (iii).** Ufravikelig
  produkteierregel. Hver deloppgave starter på **egen linje med merket i fet**:
  `…\n\n**a)** …\n**b)** …`. ALDRI a) b) c) bak hverandre i løpende tekst, aldri
  A)/[A]. Ikke bruk `subTasks`. Eneste unntak: ja/nei- og riktig/galt-lister av
  SELVSTENDIGE påstander i prøvekapitler (§5.5). ⚠ Retter du noe her, må oppgave
  OG fasit rettes samtidig, og prosahenvisninger uten parentes («i ledd ii og
  iii») byttes ikke av et søk etter `(ii)`.
- **Inline-nummerering** `(1) … (2) … (3) …` med tre eller flere påfølgende settes
  på egne linjer. Gjelder særlig de fire ordensperspektivene, de tre
  dimensjonene, homo oeconomicus' forutsetninger, Elsters tre normtyper, Aakvaags
  fire krav, Tuftes tre betingelser, de tre interne og de tre eksterne
  forskningsetiske normene og de fire trinnene i hver sjangeroppskrift.
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. 3.1](/svexfac03/svexfac03-3-1)`. Død «se kapittel
  X.Y»-tekst er FORBUDT. Aldri lenker i `title`-felt.
- **Karakter-realisme:** Del 0 sier eksplisitt at **C er en god og vanlig
  karakter**, og hva C faktisk krever (tilfredsstillende gjengivelse, jevnt god
  forståelse og en viss selvstendighet). Formuleringen **«Prioritet: perfekt» er
  FORBUDT** — skriv «høyeste prioritet». Prioritetsklassene fra skjelettet
  oversettes slik: *perfekt* → **høyeste prioritet**, *kunne* → **kunne**,
  *kjenne til* → **bør kjenne til**. «Gapet til A» rammes inn som
  **oppgraderingsmeny**, ikke mangelliste. Eksamen er gradert A–F, men **begge
  deler må bestås og minst to av tre skriftlige oppgaver må ha E eller bedre** —
  boka skal minst ett sted (kap. 0.1) vise nøkternt hva som skjer når den ene
  delen svikter.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter HVER prøvefasit og etter hver
  fasit i øvingseksamenene — bruk rubrikkene i §6.4. I hvert temakapittel: minst
  én **lett innstegsoppgave** tidlig (`difficulty: "lett"`, ren gjengivelse med
  egne ord, vennlig fasit) før første fulle eksamenssjanger.
- **Hverdagsanker + verdens-caser:** abstrakte kjernetemaer åpner med et konkret
  anker FØR apparatet (menneskemodell: to tiltak mot matsvinn i en
  studentkantine; sosial orden: en arbeidsplass der alt går på skinner fordi
  ingen tør si fra; anomi: en yrkesgruppe som får full frihet og der
  sykefraværet stiger; konvensjon: en uskiltet sti der alle likevel passerer på
  samme side). Eksemplene er verdens-caser — ALDRI metaeksempler av typen «en
  medstudent skriver …».
- **Erfarings-bro:** mange lesere har sterke meninger om klima, ulikhet og kjønn.
  Legg en kort `tip`-boks i kap. 9.4 som viser KONVERTERINGEN: (1) start i
  pensumets eget begrep, (2) bruk intuisjonen som ILLUSTRASJON, aldri som
  begrunnelse alene, (3) koble tilbake til drøftingsaksen. Å bare advare mot
  synsing uten å vise konverteringen skyver bort nettopp de leserne som har mest
  materiale.
- **Difficulty-spredning + kald bank:** boka skal ha genuint krevende oppgaver
  merket `difficulty: "vanskelig"` (og «(krevende)» i oppgaveteksten der det
  hjelper), ikke alt på middels. Minst én `vanskelig` per temadel. Én merket
  **kald bank** i kap. 9.6 (§5.3).
- **Hint på alle oppgaver:** hvert `exercise` har utfylte `hints`. Første hint =
  hvilket begrep, hvilken avsender, hvilken sjangerregel eller hvilket første
  grep oppgaven krever («Start i hva begrunnelsen for handlingen ligger i — i
  utfallet, eller i handlingen selv?») — **ALDRI konklusjonen**. Eneste unntak er
  den kalde banken.
- **Stokket flervalg og varierte fasit-mønstre:** statiske flervalg i
  prøve-`collapsible`-er og i flervalgsprøven har stokkede fasit-bokstaver (ALDRI
  «alle a»), og prøve-tipen sier hvor flervalget bor. Gjelder ALLE ensartede
  fasitlister, også «hvilken feil begår kandidaten»-drillen i 9.6 og
  ja/nei-listene — aldri «alle felle», aldri samme fasit to ganger på rad.
  Verifiseres med `sjekk-fasitfordeling.py` (terskel 45 %).
- **Distraktorer straffer aldri grundig lesing:** en distraktor gjengir ALDRI
  bokas egen presisering som «galt» svar. Ligger en distraktor nær sannheten
  (typisk: «sosial orden betyr at samfunnet er harmonisk», «en samtidsdiagnose er
  en teori om samtiden», «nåtidsskjevhet betyr at folk utsetter ting»), skal
  `explanation` eller fasitkommentaren forklare eksplisitt hvorfor den ikke
  holder.
- **Signal-/hintbokser ETTER oppgaven:** en boks som varsler hva en drilloppgave
  tester («her ligger felle #4 — koblingen til modellens forutsetninger»)
  plasseres ETTER oppgaven, aldri foran.
- **Frekvenstall = §6.2.** Ingen egne opptellinger, ingen «N av M» uten belegg i
  §6.2, ingen omregning, ingen bruk av skjelettets fem spriktall.
- **Begrepsbank = oppslagsverk:** hvert pensumkart og hver begreps- og
  avsenderliste åpner med standardnotisen: «Begrepsbanken er
  flashcard-/repetisjonsstoff — den gjentar det du nettopp har lest. Hopp trygt
  over ved førstegangslesing; tidsanslaget for kapitlet gjelder kjernestoffet.»
  `definition`-blokker slettes ALDRI for å «rydde» — de er flashcard-kilden.
- **Øktmerking:** **40 av de 44 kapitlene har `estimatedMinutes > 45`** — alle
  unntatt 0.1 (40), 3.3 (45), 5.3 (45) og 9.5 (45). Disse 40 skal ha tidsanslag i
  underoverskriftene («## De tre dimensjonene (~12 min)») eller eksplisitte
  «— naturlig pausepunkt —»-markører. Lange modellbesvarelser har pausepunkt
  mellom leddene. ⚠ Overskriften bærer NAVNET, aldri løkkenummeret (§1).
- **Tidsbudsjett-konsistens:** der en oppgaves deklarerte tid avviker fra summen
  av deltidene, forklares differansen (§6.6). «Lite tid?»-boksen sier eksplisitt
  at kapitlenes tidsanslag er **LESEtid**, og at den som skriver besvarelser for
  hånd bør legge på ca. ×1,5.

### 11.1 Del 0-pakken (alt dette SKAL finnes i kap. 0.1, der ikke annet er sagt)

- **«Slik leser du denne boka»-orienteringsboks** (type `text` eller `tip` —
  **ALDRI `definition`**, det ville endret flashcard-kvoten) med: karakterskalaen
  A–F og hva C, B og A faktisk krever, at **C er en god og vanlig karakter**, hva
  «C-stoff» og «A-markør» betyr, de fem sjangerkodene RED, EKS, ANV, DRØ og FLE
  skrevet fullt ut, og at typiske feil har et samlet register (#1–#16) med eget
  kapittel (9.6).
- **«Lite tid?»-boks** (`tip`): hurtigrute for 3–5 dager (kapittelrekkefølge +
  timeanslag; prioriter Del 1, Del 2, Del 3 og Del 4 — de fire tunge klyngene —
  pluss kap. 0.2, 9.2 og 9.6) og ukeplan bygget av summerte `estimatedMinutes`.
  **Summen av de 44 kapitlene er eksakt 2 520 minutter ≈ 42 timer lesetid.**
- **Kildenote for frekvens-empirien** — ordlyden i §6.1.1, aldri utvidet.
- **Frekvenstabellen** — de ti klyngene med nevner og enhet skrevet ut:
  rasjonalitet, menneskemodeller og atferdsøkonomi 5 · klassikerne og
  samtidsdiagnosen 5 · sosial orden 5 · metode og forklaring 5 · forskningsetikk
  4 · vitenskap og verdier 3 · aktør og struktur 3 · normativ argumentasjon og
  bærekraftsdiskurser 3 · funksjonalisme 1 · Adam Smith 1. **Alle med nevner 35
  oppgaver i gjeldende regime, og summen er 35.** Pluss klimarammen på tvers:
  **13 av 35 oppgaver i 7 av 7 terminer**, med den eksplisitte merknaden om at
  tematikken var fraværende før H2019.
- **Sjangerkortet på ÉN side** som ER kortet: sjanger → én linjes oppskrift →
  typisk plassering i en oppgave → vanligste feil. Ikke en lenkeliste.
- **«Hvem eier hva»-kortet** — begrep → avsender → poeng, for de gjennomgående
  begrepene. Fullversjonen bor i temakapitlenes pensumkart; kortet i 0.1 er den
  glemsomme leserens gjenopptaksverktøy.
- **Gjenbrukstabellen** — de tolv oppgavefamiliene (§9), med terminene og
  regimemerkingen, og setningen om at trening på gamle sett derfor er direkte
  eksamensrelevant.
- **Eksamensformens tre regimer** forklart kort og eksplisitt merket som
  historikk, med den ene setningen om hvorfor et sett fra 2013 har sju spørsmål
  og et fra 2021 bare to.
- **Doble beståkrav og tidsbudsjett** (§6.4 og §6.6), med den nøkterne
  beskrivelsen av hva som skjer når én del svikter.
- **Utgått pensum-advarselen** (§7.4) med årstall for når hvert stoffområde
  forsvant — og den motsatte påminnelsen ved siden av: funksjonalismen lå nede i
  elleve år og kom tilbake.
- **Adgangskravet** (§7.5 pkt. 2), merket som uverifisert, med henvisning til
  semestersiden.
- **Deltidsrute** 10–12 uker med temadelprøvene fordelt underveis,
  flervalgsprøven midtveis og modellbesvarelsene + de tre øvingseksamenene de
  siste to ukene — aldri stablet i siste uke.
- **«Lese mye, skrive lite»-boks:** legitim rute for lese-øveren (les oppgaven →
  formuler standpunkt og disposisjon mentalt i to setninger → les
  modellbesvarelsen som sensor) + minimumsrådet: skriv minst ÉN full flerleddet
  oppgave på tid, og ta minst én komplett flervalgsprøve.
- **«Slik leser du et oppgavesett»-øvelsen:** ett nyskrevet eksempelsett i
  gjeldende form — fem oppgaver fra fem klynger — der leseren skal velge tre,
  begrunne valget og sette opp et tidsbudsjett som tar høyde for at Del I også
  skal gjøres.

---

## 12. Kvotekontrakt (AUTORITATIV — bindende total, aldri overstyr)

Verifisert mot skjelettets kvotesammendrag 3. august 2026 ved å lese de 44
kapittelblokkene programmatisk: alle deltotaler og begge totaler summerer, og
summen av `estimatedMinutes` er **eksakt 2 520**.

| Del | Kapitler | Quiz | Flashcards | Minutter | Prøver |
|---|---|---|---|---|---|
| 0 | 0.1–0.2 | 28 | 22 | 100 | 0 |
| 1 | 1.1–1.5 | 128 | 128 | 300 | 4 |
| 2 | 2.1–2.4 | 100 | 98 | 250 | 4 |
| 3 | 3.1–3.8 | 172 | 170 | 455 | 4 |
| 4 | 4.1–4.5 | 120 | 120 | 315 | 4 |
| 5 | 5.1–5.3 | 64 | 64 | 160 | 4 |
| 6 | 6.1–6.2 | 50 | 50 | 135 | 4 |
| 7 | 7.1–7.2 | 48 | 48 | 125 | 4 |
| 8 | 8.1–8.4 | 86 | 82 | 215 | 4 |
| 9 | 9.1–9.9 | 114 | 75 | 465 | 4 (én flervalgsprøve + tre øvingseksamener) |
| **Sum** | **44 kap.** | **910 ✓ (≥500)** | **857 ✓ (≥500)** | **2 520** | **36** |

Per kapittel (quiz · flashcards · minutter) — **minimum, aldri under;
overskyting er lov**:

| Kap. | Q · F · min | Kap. | Q · F · min | Kap. | Q · F · min |
|---|---|---|---|---|---|
| 0.1 | 12 · 10 · 40 | 3.3 | 18 · 18 · 45 | 6.1 | 26 · 26 · 70 |
| 0.2 | 16 · 12 · 60 | 3.4 | 24 · 24 · 65 | 6.2 | 24 · 24 · 65 |
| 1.1 | 26 · 26 · 60 | 3.5 | 24 · 24 · 65 | 7.1 | 24 · 24 · 60 |
| 1.2 | 22 · 22 · 55 | 3.6 | 22 · 22 · 55 | 7.2 | 24 · 24 · 65 |
| 1.3 | 26 · 26 · 60 | 3.7 | 20 · 20 · 55 | 8.1 | 22 · 22 · 55 |
| 1.4 | 30 · 30 · 70 | 3.8 | 20 · 20 · 55 | 8.2 | 22 · 22 · 55 |
| 1.5 | 24 · 24 · 55 | 4.1 | 24 · 24 · 60 | 8.3 | 22 · 22 · 55 |
| 2.1 | 26 · 26 · 65 | 4.2 | 22 · 22 · 60 | 8.4 | 20 · 16 · 50 |
| 2.2 | 26 · 26 · 65 | 4.3 | 22 · 22 · 60 | 9.1 | 14 · 10 · 50 |
| 2.3 | 24 · 24 · 60 | 4.4 | 28 · 28 · 70 | 9.2 | 16 · 12 · 60 |
| 2.4 | 24 · 22 · 60 | 4.5 | 24 · 24 · 65 | 9.3 | 14 · 10 · 50 |
| 3.1 | 20 · 18 · 50 | 5.1 | 24 · 24 · 60 | 9.4 | 14 · 10 · 55 |
| 3.2 | 24 · 24 · 65 | 5.2 | 22 · 22 · 55 | 9.5 | 20 · 8 · 45 |
| | | 5.3 | 18 · 18 · 45 | 9.6 | 18 · 10 · 55 |
| | | | | 9.7–9.9 | 6 · 5 · 50 hver |

**Bindende total: quiz 910 · flashcards 857 · 2 520 minutter.** Flashcards telles
som **toppnivå `definition`-blokker med `title`**. Prøvekapitler har ingen kvote
(ingen quiz, ingen begrepsbank). **Utgått pensum genererer null flashcards og
null quiz** (§7.4).

**Hvorfor quiz-kvoten er så høy.** Flervalgsdelen teller 25 %, må bestås hver for
seg, og har som uttrykkelig formål å teste breddekunnskap om hele pensum.
Samtidig finnes det **null** bevarte flervalgsspørsmål i arkivet, så det finnes
ingen autentisk bank å øve på. Boka er dermed studentens eneste breddetrening for
en del hun kan stryke på — og kvoten er satt deretter, **jevnt fordelt over alle
ti klyngene** i stedet for konsentrert i de tyngste.

### 12.1 Quiz-filformat

`src/lib/data/quiz-staging/svexfac03-<del>-<nr>.quiz.json`:

```json
[{ "question": "…", "options": ["riktig", "distraktor", "distraktor", "distraktor"], "explanation": "…" }]
```

Nøyaktig **4 alternativer**, `options[0]` **ALLTID** riktig. **Runtime stokker
rekkefølgen**, så `explanation` skal ALDRI si «alternativ to», «det tredje
alternativet», «svaret over» eller «det siste alternativet» — gjenta innholdet i
stedet: «Riktig svar er at verdirasjonell handling begrunnes i verdien av
handlingen selv …». **Posisjonsreferanser er en hard produkteierregel**
(verifiseres med `sjekk-alternativref.py`). Ingen duplikate alternativer.
`explanation` på 2–4 setninger sier hvorfor fasiten er riktig OG hvilken felle
hver nære distraktor tester.

**LENGDE-TELL (hard produkteierregel):** fasiten skal **verken være det lengste
eller det korteste** alternativet systematisk. Alle fire alternativer skal ha
jevn lengde og presisjonsgrad — en leser som «velger det lengste» skal treffe
~25 %, ikke 77 %. Skriv distraktorene like fyldige som fasiten; trim heller
fasiten. Verifiseres med `node scripts/hoyskolebok/quiz-lengdesjekk.mjs`, som
flagger over **35 %**. ⚠ **Ekstra kritisk her:** quiz-banken ER treningen mot
flervalgsdelen, den er nykonstruksjon, og en bank der fasiten er gjenkjennelig på
lengden trener en ferdighet eksamen ikke måler.

**Distraktor-kalibrering** — nabobegrep-distraktorer, aldri tullesvar:
formålsrasjonell mot verdirasjonell · aktiv mot passiv menneskemodell · sosial
mot biologisk passiv modell · integrasjon mot konflikt · handling og bytte mot
interaksjon · orden mot harmoni · manifest mot latent funksjon · dysfunksjon mot
funksjonell enhet · moralsk mot kvasimoralsk mot sosial norm · intensiv mot
ekstensiv strategi · samvariasjon mot årsaksretning mot kontroll for tredje
variabel · universell lov mot robust avhengighet · mekanisme- mot formåls- mot
funksjonsforklaring · metodeforklaring mot substansiell forklaring · intern mot
ekstern forskningsetikk · verdifrihet mot verdirelatert temavalg ·
metodologisk individualisme mot holisme · økomodernisme mot vekstfri utvikling ·
forurenser betaler mot betalingsevne mot per capita · norm- mot
konsekvensargumentasjon. I tillegg: «hvilken teoretiker hevder dette»-koblinger,
«hvilket perspektiv ser dette»-koblinger og «hvilken feil begår denne
kandidaten»-spørsmål.

**Fasitfordelingen rebalanseres til slutt** (jevn a/b/c/d) — men rebalanseringen
kjøres på quiz-filene, aldri på statiske flervalg i prøvetekster uten at fasiten
rettes i samme operasjon.

### 12.2 Flashcard-profil

Hovedvekten ligger på **begrep ↔ kontrastbegrep ↔ avsender**, fordi det er
nøyaktig presisjonen redegjørelsesleddet måler. Tre korttyper:

1. **Begrepskort med avsender og distinksjon** — «hva er X hos Y, og hva skiller
   det fra nabobegrepet Z»: menneskemodell ↔ aktiv eller passiv ↔ Balsvik ·
   rasjonalitetsform ↔ hva begrunnelsen ligger i ↔ Weber hos Balsvik ·
   ordensperspektiv ↔ hva som holder orden oppe ↔ Solli · forklaringstype ↔ hva
   den svarer på ↔ Tufte · forskningsetisk norm ↔ hvem den beskytter ↔ Balsvik og
   Merton · klimarettferdighetsprinsipp ↔ hvem som betaler ↔ Caney eller per
   capita ↔ Lavik og Pedersen · bærekraftsposisjon ↔ syn på vekst ↔ Svarstad.
2. **Posisjonskort** — «teoretiker → menneskesyn → frihetsdiagnose → hvilken
   samtidsdiagnose posisjonen bærer»: Marx · Weber · Durkheim · Hobbes · Hume ·
   Smith · Harding.
3. **Prosedyrekort** — «sjanger eller modell → trinnene i rekkefølge»:
   redegjørelsesleddets fire trinn · eksempeloppgavens fire trinn ·
   anvendelsesoppgavens fire grep · drøftingsleddets fem trinn · Aakvaags fire
   krav · Tuftes tre betingelser · Colemans badekar · de tre dimensjonene.

**Utfaset stoff genererer ingen flashcards** (§7.4).

---

## 13. Fagspesifikk stil (ufravikelig for SVEXFAC03)

### 13.1 Notasjonsstandard

- **Norsk bokmål. Emnet er FORMELFRITT: ingen matematisk notasjon, ingen `$…$`
  noe sted.** Kravet om «Symbol- og formelliste» er dermed ikke relevant
  (README-unntaket for symbolfrie fag) — hvert temakapittel har `collapsible`
  **«Pensumkart for kapitlet»** og til slutt **«Begreps- og avsenderliste»**
  (§5.2).
- **Dollartegn som ikke er matte MÅ escapes som `\\$`.** Et enkelt bart `$` i en
  streng kutter resten av teksten til rå LaTeX-kilde for leseren. Oddetall `$` i
  samme tekstfelt felles av `sjekk-latex.py`.
- **Poengsystemet skrives i ren tekst: «+1 / −0,33 / 0».** Aldri som LaTeX,
  aldri med bindestrek i stedet for minustegn.
- **Tallformat:** norsk desimalkomma, prosent med mellomrom («25 %»). Årstall og
  semestre skrives «H2024» og «V2018» (aldri «h24», aldri «høsten -24»). Den
  utsatte eksamenen skrives «H2020 (utsatt)». Oppgavenumre skrives «V2024-3».
- **Karaktergrensene for flervalgsdelen** skrives som i veiledningene: F under
  7,5 · E 7,5–9,99 · D 10–13,74 · C 13,75–17,99 · B 18–21,24 · A 21,25–25.
- **Verktitler** skrives i kursiv i brødtekst og med «anførselstegn» i
  `title`-felter. **Aldri sidetall, aldri utgaveangivelser, aldri årstall for
  pensumlitteratur** (§7.5).
- **Skrivemåter (grep-konsistens):** «menneskemodell» · «aktiv» / «passiv modell»
  · «sosial» / «biologisk passiv modell» · «den naturalistiske vendingen» ·
  «formålsrasjonell» / «verdirasjonell handling» · «rasjonalitet» · «homo
  oeconomicus» · «begrenset rasjonalitet» · «nåtidsskjevhet» · «diktatorspillet»
  / «ultimatumspillet» · «moralske» / «kvasimoralske» / «sosiale normer» ·
  «gratispassasjer» · «allmenningens tragedie» · «mikrosanksjoner» ·
  «individuell» / «kollektiv rasjonalitet» · «arbeidende vesen» ·
  «fremmedgjøring» · «formell» / «reell frihet» · «rasjonalisering» /
  «byråkratisering» · «idealtype» · «samfunnsskapt» · «anomi» · «kollektiv
  bevissthet» · «samtidsdiagnose» · «spørsmålet om sosial orden» ·
  «integrasjonsperspektivet» / «konfliktperspektivet» / «handlings- og
  bytteperspektivet» / «interaksjonsperspektivet» · «prekontraktuell
  solidaritet» · «AGIL» · «ideologi» / «klasse» / «stand» · «gavebytte» ·
  «hverdagsritualer» · «situasjonsdefinisjon» · «front stage» / «back stage» ·
  «inntrykksmestring» · «naturtilstanden» · «sosiale konvensjoner» · «den
  usynlige hånd» · «merkantilismen» · «manifest» / «latent funksjon» ·
  «dysfunksjon» / «funksjonell enhet» · «intensive» / «ekstensive
  datainnsamlingsstrategier» · «kvalitativ» / «kvantitativ metode» ·
  «deltakende observasjon» · «kvalitativt intervju» · «statistisk
  generalisering» · «overførbarhet» / «reproduserbarhet» · «metodeforklaring» /
  «substansiell forklaring» · «spuriøs sammenheng» · «samvariasjon» /
  «årsaksretning» / «kontroll for tredje variabel» · «universelle lover» /
  «robust avhengighet» · «den deduktivt-nomologiske modellen» ·
  «mekanismeforklaring» / «formålsforklaring» / «funksjonsforklaring» ·
  «Colemans badekarmodell» · «hypotetisk-deduktiv metode» · «intern» / «ekstern
  forskningsetikk» · «vitenskapens etos» · «desinteresse» · «vitenskapelig
  uredelighet» · «informert og fritt samtykke» · «konfidensialitet» ·
  «oppdragsforskning» · «forskningens frihet» · «verdifrihet» · «erkjennelse» /
  «vurdering» · «er og bør» · «verdirelatert temavalg» · «verdiimpregnerte
  fenomener» · «intersubjektivitet» · «standpunktteori» · «sterk objektivitet» ·
  «situert kunnskap» · «aktør» / «struktur» · «metodologisk individualisme» /
  «metodologisk holisme» · «reduksjonisme» · «strukturens dualitet» · «habitus» ·
  «kommunikativ handling» · «deskriptive» / «normative påstander» ·
  «normargumentasjon» / «konsekvensargumentasjon» · «økomodernisme» / «vekstfri
  utvikling» · «smultringmodellen» · «forurenser betaler» /
  «betalingsevneprinsippet» / «per capita-prinsippet» · «hybridteori».

### 13.2 Sjangerkodene (introduseres i kap. 0.1, skrives fullt ut ved første bruk per kapittel)

**Kodene er byggespråk og skal ALDRI stå alene.** Skriv alltid sjangerens navn
først, koden i parentes.

| Kode | Navn som skal brukes | Hva det er |
|---|---|---|
| **RED** | redegjørelsesleddet | «gjør rede for», «forklar kort», «hva menes med» — presis, avgrenset framstilling av et begrepspar eller en posisjon. Den vanligste byggeklossen. Ordet «kort» er en instruks, ikke en høflighet. |
| **EKS** | eksempeloppgaven | kandidaten skal lage **egne** eksempler og **begrunne** at eksempelet illustrerer begrepet. Emnets moderne signatur, og det som skiller C fra A i fem av de 35 oppgavene. |
| **ANV** | anvendelsesoppgaven | et fenomen skal analyseres med pensumapparatet. Saksfeltet gir null uttelling i seg selv. |
| **DRØ** | drøftingsleddet | «diskuter», «drøft», «argumentér for og imot» — siste ledd i de fleste oppgavene, krever selvstendig stillingtagen med begrunnelse. |
| **FLE** | flervalgsdelen | 25 spørsmål, 25 % av karakteren, må bestås. ⚠ Ingen autentiske eksemplarer finnes; bokas bank er nyskrevet (§7.6). |

### 13.3 Feilkodene #1–#16 (glosses ved første bruk PER KAPITTEL)

| # | Feil | Hovedhjem |
|---|---|---|
| #1 | tro at sosial orden betyr fred og harmoni | 3.1 |
| #2 | plassere Weber feil fordi han opptrer i to roller | 3.4 |
| #3 | lese stikkordslista i oppgaveteksten som en sjekkliste | 0.2 og 9.1 |
| #4 | forklare nåtidsskjevhet uten å koble den til homo oeconomicus-modellens forutsetninger | 1.4 |
| #5 | forenkle standpunktteori til «kvinner ser ting annerledes» | 6.2 |
| #6 | beskrive habitus eller strukturens dualitet uten å vise at begrepet bygger bro | 7.2 |
| #7 | skrive generelt om bærekraft uten å treffe stridsspørsmålet om vekst | 8.2 |
| #8 | gjengi Adam Smiths konklusjon uten kjeden | 3.8 |
| #9 | blande intern og ekstern forskningsetikk | 5.2 |
| #10 | svare på metodevalg med «det kommer an på hva man vil vite» | 4.1 |
| #11 | hoppe over relevans-i-dag-leddet i samtidsdiagnose-oppgaver | 2.4 |
| #12 | gi eksempler uten begrunnelse | 1.1 og 9.2 |
| #13 | behandle korrelasjon som årsak | 4.4 |
| #14 | beskrive Marx' teori uten å vise at den oppfyller kravene til en samtidsdiagnose | 2.4 |
| #15 | tro at forskningsresultater kan bestilles | 5.3 |
| #16 | svare på fire eller fem oppgaver i stedet for tre | 0.1 |

**Registeret har nøyaktig seksten koder.** Ikke innfør en syttende noe sted. Hele
registeret gjennomgås i kap. 9.6, og hver feil er hjemlet i minst én navngitt
sensorveiledning — med ærlighetsforbeholdet fra §5.3: **veiledningene uttrykker
sensors forhåndsforventninger, ikke observerte feil**, med #1 («erfaringsvis»,
V2020) som eneste unntak og #16 som utledet av formatet.

### 13.4 Prioritetsklasser

**høyeste prioritet** (skjelettets «perfekt» — 0.1, 0.2, 1.1, 1.3, 1.4, 1.5, 2.1,
2.2, 2.3, 2.4, 3.1, 3.2, 3.4, 3.5, 3.7, 4.1, 4.2, 4.3, 4.4, 4.5, 5.1, 5.2, 5.3,
8.4, 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8, 9.9) · **kunne** (1.2, 3.6, 6.1,
6.2, 7.1, 7.2, 8.1, 8.2, 8.3) · **bør kjenne til** (3.3, 3.8 og
kjenne-til-halene: hypotetisk-deduktiv metode i 4.5, KI-etikken i 5.3,
historikk-notene om utgått pensum).
**Skriv ALDRI «Prioritet: perfekt».** ⚠ «Bør kjenne til» betyr færre minutter og
lavere kvote — **aldri at stoffet kan utelates**: 3.3 og 3.8 skal besvares fullt
på eksamen (§7.4).

### 13.5 Forbudt-termer og prosaregler (grep-sjekkes)

**Hard port** — `sjekk-bok.py`-regexen skal gi **0 treff** (kjøres
case-insensitivt; skriptet unntar automatisk kap. 0.1, som skal beskrive
kildesituasjonen):

```
Prioritet: perfekt|Sist du var her|som du sikkert husker|du har jo allerede sett|dette kan du fra før|en A-besvarelse ville|en toppbesvarelse ville|ville ha drøftet|studentbesvarelse|offisiell fasit|offisielle fasiter|eksamensfasit|arkivets fasit|fasit fra UiO|UiOs fasit|sensorveiledningenes fasit|publisert fasit|publiserte fasiter|offisiell løsning|offisielle løsninger|offisielle løsningsforslag|løsningsforslag fra UiO|UiOs løsningsforslag|modellbesvarelse fra UiO|autentiske eksamensoppgaver|hentet fra eksamenssettet|gjengitt fra sensorveiledningen|tidligere flervalgsoppgaver|tidligere flervalgsspørsmål|autentiske flervalgsspørsmål|autentiske flervalgsoppgaver|ekte flervalgsspørsmål|ekte eksamensspørsmål|flervalgsspørsmål fra UiO|flervalgsoppgaver fra UiO|eksamensspørsmål fra UiO|gjenkjente eksamensspørsmål|hentet fra flervalgsdelen|originale flervalgsspørsmål|flervalgsbanken fra eksamen|50 flervalgsspørsmål|alle eksamener|samtlige eksamener|22 terminer med oppgavetekst|V2012-veiledningen|H2012-veiledningen|V2013-veiledningen|H2013-veiledningen|V2014-veiledningen|gjenbruke på exphil|gjenbrukes på exphil|uttelling på exphil|uttelling i exphil|samme stoff som i exphil|overføringsverdi til exphil|dobbelt opp med exphil|\bs\.\s?\d+|\bside(ne)? \d+|\d\.\s*utgave|\((19|20)\d{2}\)
```

```bash
python3 scripts/hoyskolebok/sjekk-bok.py svexfac03 "<regexen over, i én linje>"
```

Begrunnelse per gruppe:

- `Prioritet: perfekt` er plattformforbud (karakter-realisme, §11).
- Deiksis-uttrykkene peker feil vei — Forkunnskaper-blokka oppsummerer et ANNET
  kapittel (§5.1).
- Meta-fasit-uttrykkene er forbudt fordi drøftelsen skal skrives ut (§10.2).
- «studentbesvarelse» er usant — alle modellbesvarelser er nyskrevne (§10.1).
- Fasit- og løsningspåstandene er usanne: arkivet har **null** av begge deler
  (§6.1 pkt. 1).
- **Flervalgsgruppen er bokas viktigste port** (§7.6): hver av disse
  formuleringene ville påstått at boka har trent på spørsmål som ikke finnes.
  `50 flervalgsspørsmål` er dessuten en slutning fra 50 poeng i regime 2, ikke et
  belegg.
- `alle eksamener`, `samtlige eksamener` og `22 terminer med oppgavetekst` bryter
  nevnerdisiplinen (§6.1 pkt. 8 og §6.3): emnet er eldre enn arkivet, og
  oppgaveteksten finnes for 21 terminer, ikke 22.
- **`V2012-veiledningen` … `V2014-veiledningen` omtaler dokumenter som ikke
  finnes** (§6.1 pkt. 5). Dette er den mest sannsynlige enkeltfeilen i denne
  boka, fordi alle fem terminene har oppgavesett og derfor står i temalistene.
- Exphil-gruppen er kryssgevinst-forbudet (§7.7).
- `\bs\.\s?\d+`, `\bside(ne)? \d+`, `\d\.\s*utgave` og `\((19|20)\d{2}\)` fanger
  sidetall, utgaver og parentesårstall i pensumreferanser — ingen av delene er
  attestert (§7.5 pkt. 3). ⚠ Mønsteret er skrevet som `\bside(ne)? \d+` og ikke
  `\bsiden? \d+` med vilje: det siste ville felt «siden 2023», som er helt vanlig
  prosa i denne boka.

**⚠ Malene i §6.1.1 (kildenote), §7.6 (flervalgs-ærligheten) og §10.1
(modellbesvarelseslinjen) er testet mot denne regexen og gir null treff.**
Endrer du en av dem, kjør testen på nytt:

```bash
python3 - <<'EOF'
import re
MAL = open("docs/hoyskole-boker/svexfac03/BYGGEKONTRAKT.md", encoding="utf-8").read()
# Regexen leses ut av kontrakten selv, så testen aldri kan komme i utakt med den.
RX = re.search(r"^Prioritet: perfekt\|.*$", MAL, re.M).group(0)
def utsnitt(start, slutt):
    s = MAL.index(start); e = MAL.index(slutt, s) + len(slutt)
    return MAL[s:e]
# ⚠ Bruk sluttmarkør, ikke et fast tegnvindu: kommentarene rett ETTER malene
# siterer med vilje de forbudte formene, og et for stort vindu gir falske treff.
for navn, (a, b) in {
    "KILDENOTE": ("Boka er kalibrert mot hele SVEXFAC03-arkivet",
                  "sidetall er oppgitt noe sted i materialet."),
    "FLERVALG": ("Denne delen av eksamen er den eneste",
                 "ikke som en spådom om ordlyd."),
    "MODELLSVAR": ("Nyskrevet modellbesvarelse — skrevet av oss",
                   "ikke en ekte kandidatbesvarelse."),
}.items():
    print(navn + ":", re.findall(RX, utsnitt(a, b), re.I) or "ingen — malen er lovlig")
EOF
```

**Prosaregler** — ord som SKAL kunne stå, men bare i en ramme
(`sjekk-prosaregel.py`, ±200 tegn rundt treffet, rammen kan være etablert
tidligere i samme kapittel). Alle skal være grønne:

```bash
# 1. SANNFERDIGHETSPORT: entall «sensorveiledningen» krever navngitt termin.
#    De 17 veiledningene fordeler seg på 16 terminmerkelapper — H2020 har to
#    (ordinær + utsatt). V2012, H2012, V2013, H2013 og V2014 er IKKE med.
python3 scripts/hoyskolebok/sjekk-prosaregel.py svexfac03 \
    "sensorveiledningen" \
    "V2018|V2019|H2019|V2020|H2020|V2021|H2021|V2022|H2022|V2023|H2023|V2024|H2024|V2025|H2025|V2026"

# 2. NEVNERPORTEN: enhver «av N»-brøk må bruke en lovlig nevner fra §6.3,
#    med enheten skrevet ut
python3 scripts/hoyskolebok/sjekk-prosaregel.py svexfac03 \
    "\bav \d+ (oppgaver|oppgavesett|eksamenssett|sett|terminer|eksamensterminer|sensorveiledninger|veiledninger)" \
    "av 35 oppgaver|av 7 terminer|av 21 terminer|av 17 sensorveiledninger|av 22 eksamensterminer|av 6 terminer|av 11 oppgavesett-filer"

# 3. SANNFERDIGHETSPORT: «løsningsforslag» kan bare stå der boka sier at slikt
#    IKKE finnes
python3 scripts/hoyskolebok/sjekk-prosaregel.py svexfac03 \
    "løsningsforslag|modellbesvarelse fra eksamen|ekte kandidatbesvarelse" \
    "ingen|null|finnes ikke|inneholder ikke|har ikke|aldri|ikke er|nyskrev|skrevet av oss"

# 4. REGIMEPORTEN (35-nevneren): et 35-tall uten regime er et tall som lyver
python3 scripts/hoyskolebok/sjekk-prosaregel.py svexfac03 \
    "av 35 oppgaver" \
    "gjeldende regime|regime 3|dagens regime|dagens eksamen|siden V2023|V2023–V2026|2023"

# 5. HISTORIKKPORTEN (21-nevneren): et 21-tall skal alltid merkes historisk
python3 scripts/hoyskolebok/sjekk-prosaregel.py svexfac03 \
    "av 21 terminer" \
    "historisk|hele arkivet|alle tre regimene|på tvers av regimene|2012"

# 6. FILTALL-PORTEN: 11 er et filtall og skal stå med «-filer» og med 6 terminer
python3 scripts/hoyskolebok/sjekk-prosaregel.py svexfac03 \
    "11 oppgavesett" \
    "oppgavesett-filer|filer|dekker 6 terminer"

# 7. UVERIFISERT-PORTEN, varighet og hjelpemidler (§7.5 pkt. 1)
python3 scripts/hoyskolebok/sjekk-prosaregel.py svexfac03 \
    "tre timer|3 timer|ordbok" \
    "emneside|emnesiden|semestersiden|ikke i arkivet|ikke oppgitt i arkivet|UiO oppgir|verifiser"

# 8. UVERIFISERT-PORTEN, adgangskravet (§7.5 pkt. 2)
python3 scripts/hoyskolebok/sjekk-prosaregel.py svexfac03 \
    "7 av 11|6 av 10|2000–2500|seminarundervisning" \
    "emneside|emnesiden|semestersiden|uverifisert|verifiser|ikke i arkivet"

# 9. KRYSSGEVINST-PORTEN (§7.7): exphil kun som annet emne med egne krav
python3 scripts/hoyskolebok/sjekk-prosaregel.py svexfac03 \
    "exphil|examen philosophicum" \
    "annet emne|eget pensum|andre tekster|andre krav|ingen uttelling|ikke uttelling|nevner ikke|rent tematisk|ikke en snarvei"

# 10. FLERVALGS-PROVENIENSPORTEN (§7.6): ingen flervalgspåstand får antyde
#     at spørsmålene finnes i arkivet
python3 scripts/hoyskolebok/sjekk-prosaregel.py svexfac03 \
    "flervalgsspørsmål|flervalgsoppgaver" \
    "nyskrev|skrevet av oss|ingen|null|finnes ikke|ikke bevart|aldri publisert|nykonstruksjon|25 spørsmål|karaktergrense|må bestås|bredde"

# 11. UTFASET-PORTEN (§7.4): utgått stoff kun i historikk-ramme
python3 scripts/hoyskolebok/sjekk-prosaregel.py svexfac03 \
    "Rawls|Nozick|etisk realisme|etisk relativisme|Thorsen|normativ politisk teori|koronanedstengning" \
    "ikke pensum|utfaset|historikk|gamle oppgavesett|sist prøvd|erstattet|ikke lenger|engangstilfelle"

# 12. HEDGE-PORTEN: «noen mener» kun der det finnes en reell uenighet
python3 scripts/hoyskolebok/sjekk-prosaregel.py svexfac03 \
    "noen mener|mange mener|det hevdes at" \
    "posisjon|omstridt|uenig|debatt|drøft|standpunkt|begge sider|dilemma"
```

Port **1, 2, 3, 4, 5, 6, 7, 8 og 10** er **sannferdighetsportene** og de
viktigste i denne boka: entall «sensorveiledningen» er kun riktig om ÉN navngitt
veiledning som faktisk finnes; en brøk med ulovlig nevner er en oppdiktet
frekvenspåstand; ordet «løsningsforslag» brukt om arkivet er usant; et
frekvenstall uten regime sammenligner tre uforenlige eksamensformer; tallet 11
brukt som settall teller de samme eksamenene to ganger; varigheten og
adgangskravet er UiO-opplysninger og ikke arkivbelegg; og en flervalgspåstand
uten proveniensramme er den ene feilen som ville gjort hele quiz-banken uærlig.

Port 12 er **nøytralitetsportens motsatte side**: den fanger tilfeller der en
etablert fagregel pakkes inn i «noen mener» (§8).

### 13.6 Påkrevd terminologi (skal FINNES)

Hele begrepslista i §13.1 «Skrivemåter» er påkrevd terminologi — den er
destillert fra skjelettets begrepskontrakter og analysens § 7.3, og hvert begrep
skal ha minst ett flashcard med avsender (§12.2). I tillegg skal bokas to
mantraer stå ordrett: **«anvendelse slår mengde»** og **«et eksempel uten
begrunnelse er ikke et eksempel»**.

---

## 14. Kryssbok-lenker (verifisert 3. august 2026 — alle målfilene finnes i `src/lib/data/chapters/` OG er registrert i kursmetadataen)

Bruk NØYAKTIG disse titlene og stiene:

| Kapittel | Lenke | Innramming |
|---|---|---|
| 0.2 | `[Langsvarhåndverket — redegjør, drøft og bær paradokset](/sos1004/sos1004-0-2)` | «beslektet drøftingshåndverk i et annet emne ved samme fakultet — kravene der er SOS1004s egne» |
| 0.2 | `[Drøftingshåndverket og sensorens fem krav](/exphil03/exphil03-0-2)` | ⚠ **EXPHIL03-lenke 1 av 2.** «Et annet emne med eget pensum og egne krav. Håndverket ligner; kravene der er EXPHIL03s egne, og ingen SVEXFAC03-veiledning nevner exphil.» |
| 2.1 · 2.2 · 2.3 | `[Faghistorien i grunnriss — klassikerne som flervalgslag](/sos1004/sos1004-1-3)` | «samme klassikere i et annet emne — her spør eksamen om Aakvaags framstilling av dem» |
| 2.2 · 3.4 | `[Det ansvarlige byråkrati — Webers idealtype](/stv1400/stv1400-3-1)` | «samme tenker i et annet emne, brukt på forvaltning i stedet for på klassikerlesning» |
| 4.1 | `[Hva kvalitative metoder er (og ikke er)](/svmet1010/svmet1010-1-1)` | «et helt emne om det SVEXFAC03 bare krever oversikt over» |
| 4.1 · 4.3 | `[Sosiologisk metode — design, survey og felteksperiment](/sos1004/sos1004-1-2)` | «beslektet metodeoversikt i et annet emne» |
| 4.2 | `[Feltarbeid og etnografisk metode](/sosant1000/sosant1000-1-4)` | «feltarbeid i full bredde i et annet emne — SVEXFAC03 spør om prinsippet, ikke om håndverket» |
| 5.1 · 5.2 | `[Etikkens rammeverk: NESH, samtykke og konfidensialitet](/svmet1010/svmet1010-6-1)`, `[Forskningsetikk](/psy1010/psy1010-7-1)` | «samme normverk i to andre emner; SVEXFAC03 spør om skillet intern/ekstern og om hvem normen beskytter» |
| 6.1 | `[Vitenskap og pseudovitenskap — Lakatos, Galileo og Jaggar](/exphil03/exphil03-1-5)` | ⚠ **EXPHIL03-lenke 2 av 2, rent tematisk.** «Annet emne, andre tekster — Lakatos og Jaggar er ikke pensum her, og ingen SVEXFAC03-veiledning nevner exphil.» |
| 8.2 · 8.3 | `[Klima, bærekraft og utvikling](/utv1000/utv1000-6-3)` | «samme tematikk i et annet emne, med utviklingsperspektivet i sentrum» |
| 8.3 | `[Klimarettferdighet](/samfunnskunnskap/samfunnskunnskap-9-7)` | «repetisjon fra videregående — dekker grunnideen, men SVEXFAC03 krever prinsippene med avsender og begrunnelse i tillegg» |

**Maksimalt to lenker til `exphil03` i hele boka**, begge med innrammingen
skrevet ut i samme setning (§7.7). VGS-lenken til `samfunnskunnskap` rammes
ALLTID inn som repetisjon, aldri som pensum i emnet.

**Ingen andre kryssbok-lenker.** Vil du legge til en lenke som ikke står i
tabellen, kjør `ls src/lib/data/chapters/<id>.json` **og** grep etter id-en i
`src/lib/data/textbook-courses*.ts` først — `sjekk-bok.py` avviser døde lenker,
og en død lenke i en live bok er en synlig feil for leseren.

**⚠ Eksplisitt FORBUDTE lenkemål (skjelett finnes, men ingen kapittelfiler på
disk per 3. august 2026):** `jfexfac04`, `stv1020`, `sos1120`, `sos2200`,
`sosant1090`, `fil1003`. `jfexfac04` er den mest fristende av dem — samme
emnetype, samme uke, samme arketype — **ikke lenk dit.**

Interne lenker skrives som `[kap. 3.1](/svexfac03/svexfac03-3-1)` og skal kun
peke på kapitler som allerede er bygget når boka gates. Bygg i skjelettets
rekkefølge: Del 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → prøver. Merk at
**0.2 må stå ferdig FØR alt annet** (ni kapitler har den som forkunnskap),
**1.1 FØR 3.1**, **1.5 FØR 3.5**, **2.2 FØR 3.4**, **1.4 og 3.7 FØR 3.8**,
**3.1 FØR 7.1**, **3.5 og 8.2 FØR 8.4**, og **hele Del 1–8 FØR Del 9**.

---

## 15. Tekniske feller (les før første `json.dump`)

1. **JSON-gyldighet.** Bruk `json.dump`. Faget er fullt av anførselstegn — én
   uescapet anførsel blokkerer hele plattformens prebuild.
2. **Hardt linjebrutt prosa er FORBUDT.** Rendreren gjør hvert enkelt `\n` om til
   `<br />`. Ett avsnitt = én lang linje; `\n\n` mellom avsnitt; enkelt `\n` kun
   der linjeskiftet er ønsket. Gjelder `content`, `problem`, `solution`, `task`
   og `hints`. Ikke bruk trippelfnutt-strenger med innrykk eller `textwrap` på
   brødtekst.
3. **Bart `$` er forbudt** — skriv `\\$`. Oddetall `$` i samme tekstfelt =
   avkuttet tekst = rå kildekode synlig for leseren. Boka har ingen LaTeX i det
   hele tatt (§13.1).
4. **`chapterNumber` alltid del-basert** («3.1»), aldri lineær («14»).
   Prøvekapitler: «3.P».
5. **`difficulty` er `lett` | `middels` | `vanskelig`** — aldri `medium`/`hard`
   (§4). EXPHIL03-kontrakten sier `"medium"`; **ikke kopier den regelen hit.**
6. **Ingen tom `collapsible`.** Feltet heter `content` og skal inneholde blokker.
   En `text`-nøkkel eller `[]` rendrer som en tom boks.
7. **Unike blokk-id-er** innen kapitlet.
8. **Flashcards kommer KUN fra toppnivå `definition` med `title`.** Flytter du en
   definisjon inn i en `collapsible` for å «rydde», forsvinner kortet fra kvoten.
   Orienteringsboksen i Del 0 skal derfor være `text`/`tip`, ALDRI `definition`.
9. **`(verifiser)`-markører** skrives i den literale formen `(verifiser)` (§7.5)
   og løses i fase 6 FØR `sjekk-bok.py` kjøres siste gang.
10. **Ingen `subTasks`, `answer`, `solutionVideo`, `allowsUpload`,
    `allowsCanvasDrawing`** i `exercise`.
11. **Quiz-forklaringer refererer aldri til alternativets plassering** — runtime
    stokker (§12.1).
12. **Ikke bruk `grep -o` med `.{0,N}`-kontekst** mot kapittelfilene: de er
    kompakt JSON på én linje, og mønsteret er kvadratisk (17 GB RAM på
    byggemaskinen 25. juli 2026). Bruk `sjekk-prosaregel.py`, som leser
    JSON-strukturen.
13. **Ikke skriv «Løkke N» i overskrifter eller prosa** (§1).
14. **Ingen markdown i `description`/`title`/`competenceGoals`** (§3.1) — feltet
    havner rått i Google-treffet.
15. **Deloppgaver a), b), c) — og fasiten rettes i samme operasjon** som
    oppgaven om merkingen endres (§11).

---

## 16. Opphavsrett (ufravikelig)

ALLE oppgaver, case, eksempler, «modellbesvarelser» og flervalgsspørsmål er
**NYSKREVNE** — eksamenssjangrene er malen, ALDRI originaloppgavene. Ingen
formuleringer fra UiO-settene eller fra de 17 sensorveiledningene gjengis
ordrett, heller ikke i omskrevet-nær form.

**Arkivets caser gjengis aldri.** Casene arkivet har brukt — strømforbruk og
smilefjes i California, økende økonomisk ulikhet, koronanedstengningen, menns
dominans i voldsstatistikken, kjøttskam og flyskam, CO2-prising,
overopphetingsprosjektet, sivil ulydighet i klimakampen, miljøbevegelsen som
funksjonell eller dysfunksjonell, «usynlig teater» ved utesteder i Trondheim og
mudringen av Gladstone-havna — **skal ikke gjengis**. De kan nevnes som eksempler
på hva slags caser sjangeren bruker (kap. 9.3 gjør nettopp det), men alle
analyser er på bokas egne, nyskrevne caser.

Pensumlitteraturen **refereres og parafraseres** — aldri siteres i lengde, aldri
med sidetall, aldri med utgave eller årstall (§7.5). De etablerte begrepene er
faglig allmenneie og forklares under sine egne navn.

**Klimapodkastene** refereres kort og gjengis aldri i lengde; hver enkeltpåstand
om hva en podkast sier, merkes `(verifiser)` under skrivingen og løses i fase 6
(§7.5).

**Tillatte avsendere er uttømmende gitt av §7.3.** **Ingen oppdiktede referanser,
verk, forskere, årstall eller tall.**

Boka fremstiller seg ALDRI som offisiell, godkjent eller UiO-tilknyttet, og lover
ALDRI et eksamensutfall. (Uavhengighetsdeklarasjonen vises automatisk av
plattformen for `level: 'Høyskole'` — se README «Juridiske deklarasjoner».)

---

## 17. BOKCONFIG og wiring (fase 5)

`BOKCONFIG.json` ligger ferdig i denne mappa:

```json
{
  "title": "SVEXFAC03 Examen facultatum, samfunnsvitenskapelig variant",
  "description": "Eksamensrettet lærebok for SVEXFAC03 ved UiO — kalibrert mot 35 langsvarsoppgaver 2023–2026: de fire ordensperspektivene, klassikernes samtidsdiagnose, homo oeconomicus, forskningsetiske normer og bærekraftens veivalg",
  "icon": "🧭",
  "institusjon": "uio",
  "prøvedeler": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "sectionNames": { "0": "Eksamenskart og besvarelseshåndverk", "…": "…", "9": "Eksamenstrening" }
}
```

`sectionNames` er skjelettets ti seksjonstitler, ordrett.

### 17.1 `description` — HARDT FORMATKRAV, verifisert programmatisk

Kursforsiden parser feltet og splitter det i en ingress, en «Bygget på …»-boks og
emne-chips. Parseren i `src/app/[courseId]/page.tsx`:

```js
description.match(/^(.*?)\s*—\s*kalibrert mot\s+([^:]+?)\s*(?::\s*(.+?))?\.?$/)
// topics: m[3].split(/,\s*|\s+og\s+/)
```

Kjørt mot beskrivelsen over 3. august 2026:

| ledd | verdi | krav |
|---|---|---|
| ingress | «Eksamensrettet lærebok for SVEXFAC03 ved UiO» (44 tegn) | ≤ ~90 ✓ |
| kalibrering | «35 langsvarsoppgaver 2023–2026» | kort, uten «bygget på»-ord ✓ |
| temaer | de fire ordensperspektivene · klassikernes samtidsdiagnose · homo oeconomicus · forskningsetiske normer · bærekraftens veivalg | 5 stk, hver 2–3 ord ✓ |
| samlet lengde | 217 tegn | < 250 ✓ |
| forbudte tegn inne i leddene | ingen `;`, `:` eller `—` | ✓ |

⚠ **Temalista splittes på BÅDE komma og « og ».** Et temaledd som selv inneholder
«og» sprekker i to meningsløse chips — «rasjonalitet og menneskemodeller» ville
blitt «rasjonalitet» + «menneskemodeller». **Ingen temaledd får inneholde « og »
eller en hengende bindestrek.** Begge bøkene som ble skrevet 3. august traff
denne uavhengig av hverandre. Testen:

```bash
python3 - <<'EOF'
import json, re
d = json.load(open("docs/hoyskole-boker/svexfac03/BOKCONFIG.json", encoding="utf-8"))["description"]
m = re.match(r"^(.*?)\s*—\s*kalibrert mot\s+([^:]+?)\s*(?::\s*(.+?))?\.?$", d)
assert m, "MATCHER IKKE parseren — hele beskrivelsen ville falt ut som én grå tekstblokk"
topics = [t.strip() for t in re.split(r",\s*|\s+og\s+", m.group(3))]
print("len:", len(d), "| ingress:", len(m.group(1)), "| kalibrering:", m.group(2))
print("temaer:", topics)
assert len(d) < 250 and len(m.group(1)) <= 90 and 3 <= len(topics) <= 6
assert not [c for c in d.replace(" — ", "", 1).replace(": ", "", 1) if c in ";—:"]
print("OK")
EOF
```

**Kalibreringsleddet er oppgavebasert med vilje.** «22 eksamensterminer» ville
vært sant, men ville lovet bredde boka ikke kalibrerer mot — boka er bygget mot
regime 3, og «11 oppgavesett» ville vært et filtall (§6.1 pkt. 7). Kildetallene i
full bredde hører i `kildegrunnlag.ts` og i kildenoten i kap. 0.1, ikke i
beskrivelsen.

### 17.2 `title` — og hvorfor den IKKE skal kortes ned

`wire-bok.py` skriver `cfg['title']` både til kursmetadataen og til
`institusjoner.ts`, og kursets `title` er det `HoyskoleDisclaimer` bruker for å
avgjøre om en fagspesifikk ansvarslinje skal vises:

```js
erJus(courseId, title)   // /^jus/i.test(courseId) || /\brett(s\w*)?\b|juridisk/i.test(title)
erHelse(courseId, title) // /^psy/i.test(courseId) || /…|helse|psykolog|…/i.test(`${courseId} ${title}`)
```

Testet 3. august 2026 med tittelen «SVEXFAC03 Examen facultatum,
samfunnsvitenskapelig variant»: **erJus = False, erHelse = False.** Det er
riktig — SVEXFAC03 er verken et juridisk eller et helsefaglig emne, og boka skal
bare ha den generelle uavhengighetsdeklarasjonen. ⚠ **Ikke skriv «rettsteori»,
«rettferdighetslære» eller «helseforskning» inn i tittelen** for å gjøre den mer
beskrivende: `\brett(s\w*)?\b` ville da slått inn og gitt leseren en
Lovdata-linje på et emne uten en eneste rettskilde. Tittelen er dessuten emnets
offisielle navn. **Ikke kort den ned til «SVEXFAC03 Examen facultatum»** — da
forsvinner variantnavnet som skiller emnet fra JFEXFAC04.

### 17.3 Wiring-sjekkliste (fase 5)

1. `python3 scripts/hoyskolebok/wire-bok.py svexfac03` — parser 44 kapitler fra
   skjelettet og genererer 9 prøvekapitler. Alle 53 filene må finnes først.
2. **Skriv om prøvekapitlenes auto-tekst** etter tabellen i §2.2 — ordet
   «løsningsforslag» er usant her og felles av prosaregel 3. Kontroller samtidig
   at hvert prøvekapittel faktisk har **fire** prøver, siden auto-teksten sier
   det.
3. **Legg til oppføring i `src/lib/data/kildegrunnlag.ts`** med tallene fra §6.1:
   22 eksamensterminer 2012–2026 · 21 terminer med oppgavetekst · 11
   oppgavesett-filer som dekker 6 terminer · 17 sensorveiledninger som dekker 17
   terminer · **0 løsningsforslag og 0 fasiter** · **0 bevarte
   flervalgsspørsmål**. `forbehold`-lista skal inneholde: åtte terminer mangler
   helt (H2014, V2015, H2015, V2016, H2016, V2017, H2017, H2018) · den utsatte
   H2020 har veiledning uten oppgavetekst · fem terminer (V2012–V2014) har
   oppgavesett uten veiledning · V2018-settet inneholder bare Del II ·
   eksamensformen har skiftet tre ganger · varighet, hjelpemidler og adgangskrav
   er UiO-opplysninger, ikke arkivbelegg · pensumutgaver og sidetall er ikke
   oppgitt noe sted.
4. `institusjoner.ts` patches automatisk under `slug: 'uio'` med tittel og ikon
   fra `BOKCONFIG.json`. Verifiser at **verken** jus- eller helse-linja vises
   (§17.2).
5. Verifiser narrativ-ruter (hvis narrativer bygges) med prod-server og curl —
   200, ikke bare at filene finnes.

---

## 18. Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json; json.load(open('…'))"` på HVER fil du har skrevet.
2. **Kvotetelling** mot tabellen i §12 (toppnivå `definition`-blokker med `title`
   + antall quiz-spørsmål) — minimum, aldri under. Total 910 quiz / 857
   flashcards / 2 520 minutter.
3. **Forbudt-termer-grep = 0** (regexen i §13.5), og alle tolv prosareglene
   grønne. Mal-testen i §13.5 kjørt hvis en av malene er endret.
4. **Kryssbok- og internlenker** peker på eksisterende, registrerte filer (§14);
   ingen lenker til de forbudte målene; **maks to exphil-lenker i hele boka**.
5. **Læringsløkke:** `content[]` veksler teori → eksempel → oppgave i løkker med
   `exercise`-blokker INLINE. Unntak: prøve-, sjanger-, modellbesvarelses- og
   øvingseksamenkapitler. Byggespråk-grepet fra §1 gir null treff.
6. **Forkunnskapsdekning:** gå gjennom HVER `exercise` og bekreft at den kun
   hviler på stoff introdusert tidligere i kapitlet eller i en referert
   forkunnskap. Særlig: ingen oppgave i Del 3 krever rasjonalitetsapparatet fra
   Del 1, og ingen oppgave i Del 7 krever ordensperspektivene, uten at kapitlet
   står i forkunnskapene.
7. **Oppfrisket forkunnskap:** kapitlene i tabellen i §5.1 har 2–3
   kjernepåstander VIST, ikke bare lenket; **grep for «Sist du var her» = 0**, og
   ingen overskrift heter «Forkunnskaper — sist du var her».
8. **Pensumkart, begrepsliste og oppgaveantall:** HVERT temakapittel (Del 1–8)
   har `collapsible` «Pensumkart for kapitlet», `collapsible` «Begreps- og
   avsenderliste» sist, `tip` «A-markør» og **4–8 `exercise`-blokker inline**.
   Tell dem.
9. **`difficulty`** er `lett`/`middels`/`vanskelig` i alle `exercise` — grep for
   `"difficulty": "medium"` og `"difficulty": "hard"` gir null. Minst én
   `vanskelig` per temadel.
10. **Nybegynner-inngang:** alle sjangerkoder (RED/EKS/ANV/DRØ/FLE), feilkoder
    (#1–#16) og karakterbokstaver forklart ved første bruk PER KAPITTEL; ingen
    kald kode i `competenceGoals` eller i første tekstboks; Del 0 har «Slik leser
    du denne boka»-boksen (type `text`/`tip`, ALDRI `definition`) og hele
    Del 0-pakken (§11.1).
11. **Eksamenskontrakten:** hver `example.solution`, hver `exercise.solution` og
    hver prøvefasit viser den strukturen sjangeren krever (§6.5), og
    prøvefasitene har minimumskrav / gode besvarelser / sterke besvarelser +
    feller. En EKS-fasit uten utskrevet begrunnelse er en byggefeil (#12).
12. **Begrunnelsesregelen (§7.1):** ingen kobling står ubegrunnet i noe eksempel,
    modellsvar eller fasit.
13. **Avsenderkoblinger (§7.3):** ingen av glidningene forekommer; distinksjonene
    (formålsrasjonell/verdirasjonell, aktiv/passiv, integrasjon/konflikt,
    intern/ekstern etikk, mekanisme-/formåls-/funksjonsforklaring) er utskrevet
    der begrepene innføres; ⚠-merkingen er beholdt i pensumkartene.
14. **Kalibreringen (§7.4):** ingen kapitler bygget på Rawls og Nozick som eget
    tema, på normativ politisk teori bredt, på metaetikk eller på korona som
    analyseobjekt — kun de merkede historikk-notene, og null flashcards og null
    quiz på utgått stoff. ⚠ Motsatt: **funksjonalismen (3.3) og Adam Smith (3.8)
    SKAL stå**, selv med 1 av 35 oppgaver hver.
15. **Kildepåstander (§6.1–§6.3):** hver «N av M» finnes i §6.2, bruker en lovlig
    nevner, skriver ut enheten OG oppgir regimet; ingen påstand om fasit eller
    løsningsforslag fra UiO; ingen påstand som hviler på en veiledning fra
    V2012–V2014; tallet 11 står bare som filtall i kildenoten; ingen påstand om
    strykprosent eller karakterfordeling.
16. **De fem sprikene (§6.2):** grep i alle `svexfac03-*.json` etter
    `H2024-3` (skal kun stå i kap. 3.6, 9.x-oversikter og Del 3-prøven),
    `minst fem av de 35` og formuleringer der kap. 1.4, 1.5 eller 2.2 påberoper
    seg hele klyngens fem oppgaver — null treff. Riktige tall er **2 av 35
    oppgaver** (1.4), **0 av 35 oppgaver, belegg V2022 i regime 2** (1.5), **1 av
    35 oppgaver** (2.2), **1 av 35 oppgaver** (3.6) og **fem av de 35
    oppgavene** (9.2).
17. **Flervalgs-ærligheten (§7.6):** kap. 0.1, kap. 9.5 og flervalgsprøven i
    `svexfac03-9-prove` sier alle uttrykkelig at arkivet ikke inneholder ett
    eneste bevart flervalgsspørsmål, og at bokas bank er nykonstruksjon.
    Flervalgsgruppen i forbudt-regexen gir null treff, og prosaregel 10 er grønn.
18. **Kryssgevinst-forbudet (§7.7):** grep etter «exphil», «EXPHIL03» og «examen
    philosophicum» gir kun tematiske omtaler med rammen skrevet ut; ingen påstand
    om at exphil-stoff gir uttelling; maks to lenker.
19. **Nøytralitet (§8):** omstridte spørsmål har minst to posisjoner med sin
    sterkeste begrunnelse; etablerte fagregler er presentert som fagregler, ikke
    pakket inn i «noen mener»; ingen policyanbefalinger i bokas egen stemme;
    minst to steder merket «(omstridt — begge forsvarlige)».
20. **Modellbesvarelser:** ærlig merket som nyskrevne; C er en C; autentisk
    midtnivåbesvarelse finnes i 9.9; 9.7 er en dybde-A og 9.9 en bredde-A med
    margnotat om at begge profiler er A-verdige; 9.8 konkluderer skarpt;
    meta-fasit-grep = 0.
21. **Prøve-flervalg:** fasitmønsteret varierer (aldri «alle a», aldri «alle
    felle»); prøve-tipen sier hvor flervalget bor; selvdiagnose (☐) etter hver
    fasit; ja/nei-lister av selvstendige påstander bruker romertall (§5.5), og
    alle ekte deloppgaver bruker a), b), c).
22. **hints** utfylt på alle `exercise` unntatt den merkede kalde banken i 9.6;
    første hint røper aldri konklusjonen.
23. **Quiz:** `options[0]` alltid riktig; nøyaktig 4 alternativer; ingen
    posisjonsreferanser i `explanation`; **ingen lengde-tell** (fasiten verken
    systematisk lengst eller kortest, terskel 35 %).
24. **Øktmerking:** de 40 kapitlene over 45 minutter har tidsanslag i
    underoverskriftene eller pausepunkter; prøvekapitlene deklarerer «4 prøver à
    ~20–45 min» + deling over flere kvelder; `9-prove` sier at hvert sett kan
    deles over to økter, men at ekte eksamen er sammenhengende.
25. **Feilkode-gloss** ved første bruk per kapittel; ingen kode #17;
    ærlighetsforbeholdet står der registeret presenteres (Del 0 og 9.6).
26. **Ingen tom `collapsible`**; ingen duplikate blokk-id-er; kap-referanser i
    fasiter og forkunnskaper er markdown-lenker; ingen hardt linjebrutt prosa;
    ingen markdown i `description`/`title`/`competenceGoals`.
27. **`(verifiser)`-rester = 0** før siste `sjekk-bok.py`-kjøring — særlig
    podkast-påstandene i kap. 8.4 (§7.5). Det som ikke lar seg verifisere,
    fjernes eller reduseres til fagnavn og kjernebegrep.
28. **Opphavsrett (§16):** ingen av arkivets caser gjengitt; ingen ordrette
    formuleringer fra oppgavetekster eller veiledninger; ingen oppdiktede
    referanser; ingen utgave, årstall eller sidetall for pensum.
29. **Juridiske deklarasjoner:** innholdet fremstiller seg ALDRI som offisielt
    eller UiO-tilknyttet, lover aldri eksamensutfall, og all omtale av
    kildegrunnlaget følger §6.1 ordrett i sak.
30. **Porter grønne før ferdigmelding:**

```bash
python3 scripts/hoyskolebok/status-bok.py svexfac03
python3 scripts/hoyskolebok/sjekk-latex.py svexfac03
python3 scripts/hoyskolebok/sjekk-fasitfordeling.py svexfac03
python3 scripts/hoyskolebok/sjekk-alternativref.py svexfac03
python3 scripts/hoyskolebok/sjekk-statiskflervalg.py svexfac03
python3 scripts/hoyskolebok/sjekk-bok.py svexfac03 "<forbudt-regex fra §13.5>"
# de tolv prosareglene fra §13.5
node scripts/hoyskolebok/quiz-lengdesjekk.mjs
npm run build
```






