# Byggekontrakt: EXFAC03-NORD Examen facultatum, nordiske studier (UiO) — teknisk kontrakt for kapittelforfattere

Gjelder ALLE forfatter-agenter som bygger kapitler til `exfac03-nord`. Faglig
innhold styres av `SKJELETT.md` (Talldisiplin-seksjonen + identitetsseksjonen
§1 + makrostrukturen §2 + per-kapittel-kontraktene §3 + prøvespesifikasjonen §4)
— les ditt kapittels avsnitt ORDRETT, og `EKSAMENSANALYSE.md` ved behov. Denne
kontrakten definerer format, sjangerkrav, kildepåstander, tall, vurderingsform
og kvalitetsporter.

**Ved faglig konflikt vinner SKJELETT.md. Ved format-, sjanger-, tall-, kilde-
eller vurderingsformkonflikt vinner denne kontrakten.** Instansiert fra
`../BYGGEKONTRAKT-MAL.md`.

⚠ **Skjelettet er etterregnet 6. august 2026 og holder.** Alle 48 kapitlers
kvotelinjer summerer eksakt til kvotesammendragets tall (926 quiz / 824
flashcards / 2 720 minutter), alle 48 descriptions er utfylt og fri for
markdown, alle `prerequisites` peker innenfor boka, og `sjekk-skjelett.py` gir
KVALITETSPORT OK. **Tre sprik og fire presiseringer er likevel funnet — de står
i §20 med utregningen, så ingen «retter» dem tilbake.** §6.2 er den eneste
lovlige kilden til «N av M»-påstander i boka.

**Emnets navn.** Emnet heter **EXFAC03-NORD Examen facultatum, nordiske studier**
og undervises ved Institutt for lingvistiske og nordiske studier (ILN),
Universitetet i Oslo. Emnekoden `EXFAC03-NORD` skrives alltid ut — den er bokas
viktigste søkeord. Emnet er 10 studiepoeng og hører til den obligatoriske
ex.phil./ex.fac.-blokken. Det står i **første semester** i tre av UiOs
bachelorprogrammer (Nordisk litteratur, Nordiske studier, Retorikk og språklig
kommunikasjon) og som **den ene av to valgbare exfac-variantene** i første
semester på Nordisk språk — verifisert mot
`docs/hoyskole-boker/uio-forstesemester.json` 6. august 2026. Boka skriver
«obligatorisk i tre studieløp, valgbart i ett fjerde», aldri «alle
nordiskstudenter». Leseren er fersk student i sitt første semester og skal komme
gjennom Del 0 og Del 1 uten å slå opp noe annet sted.

**Arketype: analyse-hybrid.** Språkdelens analysekapitler (del 1–3) bygges etter
`../DNA-regnefag.md` fordi svarene der er **etterprøvbare** — ordet deles i
morfer eller det gjør det ikke. Essaystoffet (del 4–5), hele litteraturhalvdelen
(del 6–8) og mappeverkstedet (del 9) bygges etter `../DNA-drofting.md` fordi det
der ikke finnes fasit, men klart utilstrekkelige svar. Begrunnelsen står i
skjelettets §1.1 og gjentas her fordi den styrer hva som skal bygges: `theorem`
+ variantkatalog + fasit på venstre side av boka, `definition` + momentliste +
posisjoner på høyre.

**Nærmeste bygde søskenbøker.** `svexfac03` (53 filer, live) og `juroff1500`
(kontrakt + skjelett) er **formmaler, ikke innholdskilder** — samme emnetype,
helt andre fag, helt andre vurderingsformer. `ling1100` (53 filer, live) er
fabrikkens eneste lingvistikkbok og eneste lovlige kryssbok-lenkemål (§15).
⚠ **`exfac03-spr`, `exfac03-hark` og `exfac03-east` har BOKCONFIG, men verken
skjelett eller kapittelfiler på disk** — de er forbudte lenkemål (§15).

---

## 0. Fem forskjeller fra søskenbøkene som endrer HELE byggingen

**1. Vurderingen er en MAPPE, ikke en eksamen — og skalaen er ikke gradert.**
Alle 6 av 6 sensorveiledninger beskriver en skriftlig mappe med hjemmearbeider,
alle hjelpemidler tilgjengelige hele veien, rett til å levere utkast og få
respons, og en **ikke gradert** skala: bestått eller ikke bestått. Ingen av dem
beskriver en tidsbegrenset prøve. Det snur to av husets faste regler:
karakterrealismen (§7) og prøvekapitlenes sjanger (§8).

**2. Karakterapparatet finnes ikke, og må erstattes — ikke bare utelates.**
`BYGGEKONTRAKT-MAL.md` krever «C er en god og vanlig karakter». Det gir ingen
mening når det ikke finnes noen C. Kravet instansieres som **«godkjent er målet,
ikke perfeksjon»**, med tre registre hentet fra kildenes egen ordbruk —
**ikke godkjent / godkjent (minstekravet) / klart over minstekravet** — og med
en obligatorisk **bestått-på-marginen**-besvarelse i kap. 9.9. Se §7.

**3. Arkivet er tynt, og pensumlitteraturen er ikke navngitt noe sted.** 7 filer,
6 terminer, 18 sider. Ingen av de seks veiledningene navngir en eneste pensumbok,
forfatter av faglitteratur eller lærebokkapittel. De navngir bare
**primærtekstene**. Det gir et hardere pensumforbud enn i noen annen bok i
fabrikken (§9) — og gjør at boka verken har eller kan ha en avsenderliste av
SVEXFAC03-typen.

**4. Boka er formelfri OG lydskriftfri.** Ingen `$…$`, ingen LaTeX, ingen
IPA-tegn. Morfsegmentering skrives i ren tekst med bindestrek (`u-hør-lig`).
Kap. 1.3 beskriver lyder med vanlige bokstaver og ord. Port i §14.3.

**5. Emnet har NULL flervalgsoppgaver — ikke fordi de er tapt, men fordi
vurderingsformen ikke har dem.** Bokas 926 quizspørsmål er derfor
**begrepstrening, ikke eksamenssimulering**, og det skal stå i klartekst i
kap. 0.1. Kravet quizen faktisk trener, er hjemlet: **6 av 6** veiledninger
krever at faglige begreper beherskes og at fagterminologien brukes riktig.

---

## 1. LÆRINGSLØKKE-KONTRAKT (ufravikelig byggekrav — produkteier 9. juli 2026)

Fra skjelettets topp, tatt inn her som bindende byggekrav:

- HVERT kapittels `content[]` struktureres som gjentatte SMÅ løkker
  **Teori → Eksempel → Oppgave**, én løkke per begrep, regel eller prosedyre:
  1. begrepet eller prosedyren (`definition` / `theorem`, evt. + `text` om
     posisjoner, kontrastbegrep og fallgruver), →
  2. `example` som viser apparatet BRUKT — i del 1–3: full analyse med oppsettet
     skrevet ut; i del 4–9: et avsnitt skrevet slik en godkjent mappedel ville
     skrevet det, med koblingen BEGRUNNET og ikke bare konstatert, →
  3. `exercise` INLINE i `content[]` rett etter eksempelet (plattformen renderer
     inline oppgaver), →
  4. neste begrep.
- **ALDRI** all teori øverst med oppgavene samlet nederst, og aldri alle
  definisjonene i én bolk fulgt av alle eksemplene. Grupper til meningsfulle
  biter — ikke én oppgave per setning.
- **Ingen usett forkunnskap:** ingen oppgave får kreve et begrep, en prosedyre,
  en test eller en sjangerregel som ikke er introdusert tidligere i SAMME
  kapittel (t.o.m. eksempelet rett foran) eller i et tidligere kapittel referert
  i Forkunnskaper-blokka. Særlig utsatt her: **ingen oppgave i del 2 eller 3 får
  kreve ordklasse- eller bøyingskunnskap** uten at kap. 1.2 står i
  forkunnskapene, og **ingen oppgave i del 7 eller 8 får kreve sjangerbegrepet**
  uten at kap. 6.3 er referert.
- **Unntak:** prøvekapitlene (§5.6), sjanger- og verkstedkapitlene (9.1–9.7) og
  modellbesvarelseskapitlene (9.8–9.11) følger sin egen arketype — komplett
  bestilling først, besvarelser i `collapsible`.
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer
  REKKEFØLGEN.

⚠ **Underoverskrifter er ALDRI byggespråk.** «Løkke», «Bolk», «Blokk», «Runde»,
«Sekvens», «Modul», «Iterasjon» er byggeplanens ord, ikke leserens. Overskriften
skal si hva avsnittet handler om, pluss tidsanslaget:

```
✗ ## Løkke 3 — Fugeformativen (~12 min)
✓ ## Fugeformativen (~12 min)
```

Vis til tidligere avsnitt ved NAVN, aldri ved nummer («da vi gikk gjennom
hodetesten», ikke «i løkke 2»). «Løkke» er ikke et fagord i nordiske studier, så
**all** bruk er byggespråk. Fire former har sluppet gjennom tidligere ryddinger —
tall i overskrift, liten forbokstav i prosa, bokstav i stedet for tall, og
tabellkolonnen `| Løkke |`. Kjør denne før ferdigmelding og forvent null treff:

```bash
grep -rnE '#{2,4}[[:space:]]*Løkke|[Ll]økke[[:space:]]+[0-9A-ZÆØÅ]|\| Løkke \|' \
  src/lib/data/chapters/exfac03-nord-*.json
```

⚠ **«9.9a» og «9.9b» er også byggespråk.** Skjelettet bruker dem om de tre
versjonene INNE i kap. 9.9 (a = klart over minstekravet, b = bestått på
marginen, c = ikke godkjent). Det er ikke kapittelnumre, og de skal aldri stå i
boka — der heter versjonene det de er.

---

## 2. Filplassering og filantall

Ett JSON-dokument per kapittel:
`src/lib/data/chapters/exfac03-nord-<del>-<nr>.json` (prøvekapitler:
`exfac03-nord-<del>-prove.json`). Quiz til
`src/lib/data/quiz-staging/exfac03-nord-<del>-<nr>.quiz.json`.

IKKE rør `_registry.json`, `_all.json`, `textbook-courses*.ts`, `quiz-data*.ts`
eller `src/app/trinn/hoyere/institusjoner.ts` — wiring gjøres sentralt med
`scripts/hoyskolebok/wire-bok.py exfac03-nord` (fase 5). Generer ALLTID JSON via
python `json.dump`: faget er fullt av anførselstegn og gåseøyne («flertydig —
begge analysene skal skrives ut», «bare én analyse holder», «tvetydig», bokas to
mantraer, alle novelle- og sakprosautdrag), og én uescapet anførsel har tidligere
blokkert hele plattformens prebuild.

**57 filer totalt:** 48 innholdskapitler (skjelettets §3) + 9 prøvekapitler
(`exfac03-nord-1-prove` … `exfac03-nord-9-prove`). Wiringen genererer
prøvekapitlenes metadata selv fra `BOKCONFIG.json` (`prøvedeler`) — filene må
finnes, men skal ikke listes i skjelettets §3.

### 2.1 Skjelettet ER i v3-format (verifisert 6. august 2026)

`wire-bok.py` parser skjelettet med `^#### Kapittel (\d+\.\d+):\s*(.+)$` og
`\*\*id:\*\* \`(exfac03-nord-\d+-\d+)\``. Kjørt mot `SKJELETT.md` med parserens
egen kode:

| kontroll | resultat |
|---|---|
| kapitler parset | **48 av 48** |
| tomme `description`-felt | **0** |
| `description` med markdown, LaTeX eller backticks | **0** (lengste er 176 tegn) |
| `prerequisites` som peker utenfor bokas id-er | **0** |
| sum `estimatedMinutes` | **2 720** (stemmer med kvotesammendraget) |
| `sectionNames` funnet fra del-overskriftene | alle 10 (del 0–9) |
| `sjekk-skjelett.py exfac03-nord` | **KVALITETSPORT OK** — 48 kapitler, 9 prøve-kvote-linjer |

Ingen v3-konvertering er nødvendig. **Endrer du skjelettet, kjør parse-testen på
nytt før fase 5.** Tre detaljer må overleve enhver senere redigering:

1. **`prerequisites` MÅ stå i backticks.** Parseren plukker dem med
   `` re.findall(rf"`({emne}-\d+-\d+)`", …) `` — uten backticks finnes de ikke.
   «ingen» skrives uten (gjelder kun kap. 0.1).
2. **Tom linje etter `- **Description:**`-blokka.** Uten den blør beskrivelsen
   inn i `**Eksamensbelegg:**` — samme mekanisme som ga 53 avkuttede
   kursbeskrivelser i tidligere bøker.
3. **Kapittel-JSONs eget `description` overstyrer skjelettet** (parseren
   foretrekker kapittelfila). Fyll det derfor alltid ut **ordrett likt** begge
   steder.

### 2.2 ⚠ Wiringens auto-tekst er usann for denne boka — på TO punkter

`wire-bok.py` linje 94 genererer prøvekapitlenes beskrivelse og kan **ikke**
overstyres fra skjelettet. Ordlyden per 6. august 2026 er:

> «Fire prøver som dekker del N (…) på eksamensnivå, med fullstendige løsninger
> skrevet av oss.»

⚠ **Merk at ordet «løsningsforslag» ALLEREDE er rettet ut av skriptet** — eldre
kontrakter (`svexfac03` §2.2, `juroff1500` §2.2) beskriver den gamle ordlyden.
Ikke kopier deres rettetabell; to andre feil står igjen, og begge er verre her:

1. **«Fire prøver» er en hardkoding, ikke en anbefaling.** Hvert av de ni
   prøvekapitlene MÅ ha nøyaktig fire `collapsible`-øvelser. Skjelettets §4 gir
   fire per del for alle ni deler — verifisert. Bygger noen tre, får leseren en
   beskrivelse som ikke stemmer.
2. **«på eksamensnivå» er usant i et emne uten eksamen**, og ordet «prøver» gir
   leseren feil bilde av vurderingsformen. Det kan ikke fikses i skriptet, så to
   ting må gjøres:
   - **Hvert prøvekapittels egen åpnings-`tip` bærer korreksjonen** (§8.1,
     obligatorisk, porten i §8.4 måler den).
   - **Fase 5 skriver om beskrivelsen** etter denne tabellen:

| kapittel | beskrivelse etter wiring |
|---|---|
| `exfac03-nord-1-prove` … `exfac03-nord-9-prove` | «Fire mappeøvelser til del N (…) med innleveringskrav og revisjonsrunde, og med momentlister strukturert som ikke godkjent, godkjent og klart over minstekravet — skrevet av oss.» |

Tittelen wiringen genererer, «Prøver til del N: \<deltittel\>», er derimot
riktig nok som navigasjonsetikett og skal stå — boka forklarer i første `tip`
hva de fire faktisk er.

---

## 3. Kapittel-JSON (toppnivå)

```json
{
  "id": "exfac03-nord-2-5",
  "courseId": "exfac03-nord",
  "chapterNumber": "2.5",
  "title": "…(fra skjelettet, ordrett)…",
  "description": "…(fra skjelettet, ordrett)…",
  "estimatedMinutes": 55,
  "competenceGoals": ["kunne vise begge analysene av et flertydig ord og navngi hva flertydigheten skyldes, ikke bare nevne at ordet er flertydig", "…"],
  "content": [ "…blokker…" ],
  "exercises": []
}
```

- **`chapterNumber` er ALLTID del-basert** (`<del>.<nr>`: `0.1`, `2.5`, `9.11`) —
  **ALDRI lineær** («14»). Prøvekapitler: `<del>.P`. Dette er enkeltfeilen som
  ødelegger navigasjonen i en hel bok (PRODUKSJONSLØYPE-lærdommen fra JUS1111).
- `title` og `description` tas **ordrett** fra skjelettet.
- `competenceGoals`: 2–4 «kunne …»-formuleringer destillert fra kapitlets
  begreps- eller prosedyrekontrakt. Dette er **Skolesagas EGNE** mål — ALDRI kopi
  av UiOs offisielle læringsutbyttebeskrivelser. UI-et deklarerer kilden
  automatisk.
- **Ingen kald kode i `competenceGoals`** — ikke «ANA», ikke «TEK», ikke «#10»,
  ikke «Prioritet: perfekt» og ingen karaktersjargong.

### 3.1 `description`, `title` og navigasjonsfelt er REN TEKST (UFRAVIKELIG)

`title`, `description`, `topics`/`sectionNames` og `competenceGoals` rendres
**RÅTT**. `description` havner uendret i `<meta name="description">`,
`og:description` og `twitter:description` — altså i **Google-treffet og i
lenkeforhåndsvisningen** — og i den synlige kroppen på kapittelsiden. Markdown
rendres aldri der. 122 kapitler i 17 bøker viste `$…$` og `**fet**` i Google før
dette ble oppdaget.

```
✗ Hvordan **flertydige** ord analyseres, og hvorfor `begge` analysene skal skrives ut.
✓ Hvordan flertydige ord analyseres, og hvorfor begge analysene skal skrives ut.
```

Ingen `$…$`, ingen `**fet**`, ingen `*kursiv*`, ingen backticks, ingen
markdown-lenker i disse feltene. Verktitler skrives med «anførselstegn», aldri
kursiv. Markdown hører kun hjemme i
`content`/`problem`/`solution`/`task`/`hints`.

Skjelettets 48 descriptions er kontrollert mot denne regelen 6. august 2026:
**ingen inneholder LaTeX, fet skrift eller backticks.** Enkelte inneholder kolon
og komma, som er ren tekst og helt lovlig — det er bare `BOKCONFIG.json`-
beskrivelsen som har et hardt tegnkrav (§18.1).

⚠ **Metadataen må holdes i synk for seg.** `description` i
`textbook-courses-hoyskole.ts` skrives fra skjelettet, mens kapittelfila er
autoritativ (§2.1 pkt. 3). Retter du bare det ene stedet, står det andre igjen.

---

## 4. Blokktyper (eksakte felt — strukturreferanse: `src/lib/data/chapters/ling1100-6-1.json`)

- `text`: `{id, type: "text", content}` — markdown-prosa.
- `definition`: `{id, type: "definition", title, content}` — **`title`
  OBLIGATORISK**. Flashcards genereres KUN fra **toppnivå** `definition`-blokker
  med `title` (en definisjon nøstet inne i en `collapsible` teller IKKE).
  I EXFAC03-NORD er `title` **begrepet alene** («Fugeformativ», «Analepse»,
  «Utskiftingsprøven», «Forståelseshorisont», «Epideiktisk tale») — ⚠ **aldri
  begrep ↔ avsender**, som i SVEXFAC03, fordi ingen avsender er navngitt i
  materialet (§9). Åpne innholdet med forklaringen i ORD, lukk med
  **distinksjonen mot nabobegrepet**: morf mot morfem, rot mot affiks mot
  fugeformativ, sammensetning mot avledning mot bøying, funksjon mot ordklasse,
  flytteprøve mot utskiftingsprøve, strukturell mot leksikalsk tvetydighet,
  historie mot diskurs, analepse mot prolepse, motiv mot tema, etos mot patos
  mot logos, morsmål mot førstespråk mot andrespråk mot fremmedspråk.
- `theorem`: `{id, type: "theorem", title, content}` — her er `theorem` **ikke**
  pynt, men prosedyrebæreren i del 1–3: firetrinns morfsegmentering (2.1),
  hodetesten (2.2), de tre avledningstestene (2.3), bøyingsparadigmet (2.4),
  firetrinns flertydighetsbehandling (2.5), leddgrensetesten (3.1),
  funksjonsprosedyren (3.2), testprotokollen (3.3), tvetydighetsprotokollen
  (3.4). I litteraturhalvdelen brukes den sparsomt: tobandsmetoden (7.2),
  komposisjonskartet (7.4), utvalgsprosedyren (8.2).
- `example`: `{id, type: "example", title, problem, solution}` — i del 1–3 er
  `solution` en **full analyse med oppsettet skrevet ut**, aldri prosa som
  sensor må rekonstruere analysen fra. I del 4–9 er `solution` et avsnitt skrevet
  slik en mappedel klart over minstekravet ville skrevet det, med koblingen
  begrunnet (§7.5). Regelgjengivelse uten anvendelse forekommer ALDRI i en
  `example.solution`.
- `tip` / `warning`: `{id, type, title, content}`.
- `exercise`: `{id, type: "exercise", exercise: {id, number, type: "classic",
  difficulty: "lett"|"middels"|"vanskelig", task, solution, hints: []}}`.
  ⚠ **`difficulty` har nøyaktig tre lovlige verdier: `lett`, `middels`,
  `vanskelig`.** IKKE `medium`, IKKE `hard`, IKKE `easy` — det er plattformens
  engelske interne verdier, og fem kapitler i en søskenbok måtte rettes fordi en
  agent brukte dem. Verdien skrives aldri inn i `task`. ALDRI `solutionVideo`,
  `allowsUpload`, `allowsCanvasDrawing`, `answer` eller `subTasks` (deloppgaver
  skrives inn i `task`/`solution`, se §12).
- `collapsible`: `{id, type: "collapsible", title, buttonText, content: [blokker]}`
  — feltnavnet er `content` og det skal inneholde BLOKKER. En `text`-nøkkel eller
  tom array rendrer som en tom boks og er en byggefeil.

Blokk-id-er: `<kapittel-id>-<løpenavn>` (f.eks. `exfac03-nord-2-5-def-homonymt-affiks`),
unike i kapitlet. Duplikate blokk-id-er felles av kvalitetsporten.

**Grep-sjekk før ferdigmelding:**

```bash
grep -l '"difficulty": *"\(medium\|hard\|easy\)"' src/lib/data/chapters/exfac03-nord-*.json
# skal gi null treff
```

---

## 5. Obligatorisk kapittelstruktur

### 5.1 Alltid først, i denne rekkefølgen

1. `tip` **Eksamensvinkel** — med de EKSAKTE tallene fra **§6.2 i denne
   kontrakten**. ⚠ **Blokka heter det den heter, men innholdet er MAPPEvinkel.**
   Den skal si hvilken av mappens fire deler kapitlet trener, med hvilket belegg
   og hvilken nevner — og aldri «på eksamen får du …», siden emnet ikke har
   eksamen (port i §8.4). **Forfatteren skal ALDRI finne på frekvenstall og
   aldri regne om dem** (§6.3).
2. `text` **Forkunnskaper** — kapitler i boka som markdown-lenker
   (`[kap. 1.2](/exfac03-nord/exfac03-nord-1-2)`) + eventuell kryssbok-lenke fra
   §15. «Dette kapitlet kan leses uten forkunnskaper» der skjelettet sier
   `prerequisites: ingen` (kun 0.1).

**Oppfrisket forkunnskap (bindende).** I kapitler med stor avstand til
forkunnskapen SKAL Forkunnskaper-blokka **VISE 2–3 kjernepåstander ferdig
oppfrisket**, ikke bare lenke:

> **Fra kap. 2.1:** en morf er den konkrete biten i et konkret ord; morfemet er
> den abstrakte enheten den realiserer. Segmenteringen går i fire trinn: del i
> ledd, finn roten i hvert ledd, ta av avledningsaffiksene, ta av bøyingen sist.
> **Fra kap. 1.2:** ordklasse avgjøres av form og distribusjon, ikke av betydning.

⚠ **Frasen «Sist du var her» er FORBUDT** (grep-sjekkes, §14.5). Blokka
oppsummerer et ANNET kapittel — den kan ikke si «her», og en lærebok vet ikke
hva leseren har gjort. Mange lesere hopper rett til den mappedelen de skal levere
først. Overskriften skal være **`## Forkunnskaper`**, ikke «Forkunnskaper — sist
du var her» (246 kapitler i ni bøker hadde den formen, og første rydding fant den
ikke fordi den sto med liten forbokstav midt i en overskrift).

| ✗ | ✓ |
|---|---|
| Sist du var her sto dette … | Dette sto der … |
| Sist du var her (fra kap. 1.2): | Fra kap. 1.2: |
| Som du husker fra kap. 2.1 … | I kap. 2.1 står … |
| Da vi gikk gjennom dette sist … | I gjennomgangen i kap. 2.1 … |

Samme forbud rammer «som du sikkert husker», «du har jo allerede sett», «dette
kan du fra før».

**Kapitler der oppfrisket forkunnskap er OBLIGATORISK** (stor avstand til
forkunnskapen, utledet av skjelettets `prerequisites`):

| Kapittel | Hva som skal stå ferdig oppfrisket |
|---|---|
| 2.1 | fra 1.2: at ordklasse avgjøres av form og distribusjon, og hva en bøyingskategori er |
| 3.1 | fra 1.2: samme to påstander — 3.1 hopper over hele del 2 |
| 3.2 | fra 3.1: hva en konstituent er, og at leddgrensen settes før funksjonen oppgis |
| 4.1 | fra 1.1: skillet synkron/diakron i én setning |
| 5.1 | fra 4.1: variasjon som normaltilstand, og hva en varietet er |
| 6.1 | fra 0.2: de tre hovedaspektene, og at et begrep skal brukes og ikke omskrives |
| 7.1 | fra 6.3: sjanger som forventningshorisont, og novellens kjennetegn |
| 8.1 · 8.2 | fra 6.3: samme to påstander — begge hopper over hele del 7 |
| 9.1 | fra 0.2: at oppgaveordlyden avgjør hvilket apparat som er hovedapparatet |
| 9.2 | fra 4.4: forskjellen mellom å referere et syn og å drøfte det |
| 9.3 | fra 7.6: forankringsformen påstand — passasje — hva passasjen viser |
| 9.4 | fra 0.2: at referanseføring er en godkjenningsbetingelse, ikke pynt |
| 9.8–9.11 | mappedelens tre sjangerkrav, hentet fra sitt sjangerkapittel |

### 5.2 Analysekapittel i del 1–3 (skjelettets «Kapitteltype: tema» i språkdelen) — DNA-regnefag

Etter eksamensvinkel og forkunnskaper går kapitlet i LÆRINGSLØKKER (§1). Disse
blokkene skal finnes, fordelt i løkkene — ikke stablet:

- `text` **Plassering** — hvilket spørsmål apparatet svarer på, og hvor i
  mappedelen det gjør arbeid. Abstrakte kjernetemaer åpner med et
  **hverdagsanker FØR apparatet** (§12).
- `definition` **kjernebegrepene** — flashcard-kilden, toppnivå med `title`,
  hvert med **distinksjonen mot nabobegrepet** utskrevet.
- `theorem` **prosedyren** — trinnene i rekkefølge, hvert trinn på egen linje.
- `example` **gjennomarbeidet analyse** ×2–3 — ett klart og ett tvilsomt
  tilfelle, med oppsettet skrevet ut i ren tekst med bindestrek. Materialet er
  NYSKREVET (§17).
- **`exercise` ×4–8 INLINE — hardt minimum fire, hardt tak åtte.** Fordeling:
  minst én `lett` innstegsoppgave tidlig (ren gjengivelse med egne ord), 2–4
  analyseoppgaver i stigende vanskegrad, minst én der svaret er flertydig eller
  tvetydig og begge analysene skal skrives ut, og minst én oppgave per temadel
  med `difficulty: "vanskelig"`.
- `warning` **Typiske feil** — feilkodene fra skjelettets «Typiske feil»-linje,
  **glosset i klarspråk ved første bruk PER KAPITTEL**: «(fallgruve #10 — å
  analysere ett flertydig ord på bare én måte når oppgaven ber om at
  flertydigheten forklares)».
- `tip` **Slik løftes svaret** — det grepet som løfter fra minstekravet til klart
  over det i akkurat dette temaet. Obligatorisk i alle temakapitler.
  ⚠ Boksen heter **aldri** «A-markør» (§7.4).
- `collapsible` **Notasjons- og begrepsliste** SIST i kapitlet. ⚠ Emnet er
  formelfritt, så «Symbol- og formelliste» blir her en markdown-tabell
  `| Notasjon eller begrep | Betydning |` over alt delkapitlet bruker, pluss en
  kort oversikt over hvilke analysekonvensjoner delkapitlet bruker (morfgrense
  med bindestrek, leddgrenser med parentes, forkortelser skrevet ut). Første
  linje: «Oppslagsverk — alt her forklares underveis i kapitlet.»
  ⚠ `sjekk-bok.py` krever navnet «Symbol- og formelliste» bare i kapitler som
  faktisk bruker LaTeX-symboler (verifisert i koden, linje 132–135), og denne
  boka bruker ingen — derfor er navnet fritt, men **listen skal stå**: den er
  oppslag, ikke inngang.
- `collapsible` **Repetisjon** — 4–6 korte spørsmål fra forkunnskapskapitlene.

### 5.3 Drillkapittel (2.6, 3.5, 7.6)

`tip` Eksamensvinkel → `text` Forkunnskaper → `text`/`theorem`
**Løsningsoppskriften** i ÉN blokk → **variantkatalogen** (åtte varianter i 2.6
og 3.5, fire nyskrevne oppgaveordlyder til samme novelle i 7.6), hver med sin
ferdige gjennomgang → `exercise` INLINE etter hver variant → **én merket kald
bank UTEN `hints`** til slutt, der fasiten er et ferdig oppsett (2.6, 3.5) eller
en momentliste (7.6), eksplisitt merket «Kald bank — ingen hint. Her er det å
mobilisere prosedyren selv som trenes.» → `warning` Typiske feil →
begrepsliste.

⚠ **Skjelettet fastsetter antallet oppgaver:** 2.6 har **tjue** nyskrevne ord,
3.5 har **femten** nyskrevne setninger, 7.6 har **tolv** påstander i
tekstnærhetsdrillen. Disse tallene er innhold, ikke anslag — følg dem.
Oppgavene fordeles inline etter hver variant; de skal ikke stå som én blokk til
slutt (§1). Merk at variantkatalogens gjennomganger ikke er `exercise`-blokker
og derfor ikke teller mot taket på åtte i §5.2.

### 5.4 Sjanger- og verkstedkapittel (0.1, 0.2, 9.1–9.7)

1. `tip` Eksamensvinkel — sjangerens eller ferdighetens frekvens (tall fra §6.2).
2. `text` **Oppskrift** — trinnvis disponering med **arbeidsbudsjett**, aldri
   tidsbudsjett (§6.6).
3. `example` **gjennomskrevet mappedel eller avsnitt** med margkommentarer om hva
   som gir uttelling hvor. Margkommentarer skrives som egne linjer i `solution`:
   `> Margnotat: her navngis hva flertydigheten skyldes, ikke bare at ordet er flertydig — det er dette skillet som løfter delen over minstekravet.`
4. `exercise` ×3–6 nyskrevne oppgaver, løsning = **momentliste** strukturert som
   **ikke godkjent / godkjent (minstekravet) / klart over minstekravet**, aldri
   som sjekkliste. Skjelettet fastsetter antallet der det er angitt: 9.1 fire
   ordlyder, 9.2 fire essaybestillinger, 9.3 fire oppgaver + tolv
   gjenkjenningsutdrag + tre grensetilfeller, 9.4 fire oppgaver +
   konsistenssjekken med sju referanser og fire avvik, 9.5 fire
   revisjonsoppgaver, 9.6 fire omskrivingsoppgaver, 9.7 tolv utdrag.
5. `warning` Typiske feil + `collapsible` med sjangerens sjekkliste (§6.4).

Kap. **0.2** skal i tillegg vise ÉN og samme korte, nyskrevne bestilling besvart
**tre ganger** — én versjon som ikke ville blitt godkjent, én som så vidt er
godkjent, og én klart over minstekravet — med margkommentarer som viser nøyaktig
hvor forskjellen ligger. **Ingen av dem får karakterbokstav** (§7). Her etableres
også bokas to mantraer (§6.7) og den binære selvrettingsrubrikken (§6.4).

Kap. **9.7 (feilregisteret)** har én seksjon per fallgruve #1–#15, alle med fire
ledd: (a) fallgruven slik veiledningen formulerer den, med hvilke terminer den er
hjemlet i — eller merket **«utledet»** for #10–#15; (b) et nyskrevet «slik ser den
ut i en besvarelse»-utdrag; (c) samme passasje omskrevet slik den skulle vært;
(d) en varsellampe leseren kan kjenne igjen i egen tekst. Deretter
gjenkjenningsdrill på **tolv** nyskrevne besvarelsesutdrag, med stokket fasit —
aldri samme fallgruvekode som fasit to ganger på rad, og aldri «alle felle»:
blandingen skal inneholde både utdrag som ER i fallgruven og utdrag som ser slik
ut, men ikke er det. Nær-sanne distraktorer forklares i fasit-kommentaren.

⚠ **Ærlighetsforbeholdet SKAL stå i 9.7s åpning og der registeret først
presenteres i Del 0:** **ingen av de seks veiledningene rapporterer en observert
feil.** De sier hva som kreves og hva som ikke holder, aldri at studentene
erfaringsvis gjør noe bestemt. Registeret er hva veiledningene sier skal trekke,
ikke en kartlegging av hva som går galt. Og **#10–#15 er utledet av kravene**,
ikke hentet fra noen veiledning. ⚠ Dette skiller EXFAC03-NORD fra SVEXFAC03, der
én veiledning faktisk rapporterte et observert mønster — **her finnes ikke det
unntaket**, og ordet «erfaringsvis» er hardt forbudt (§14.5).

### 5.5 Modellbesvarelseskapittel (9.8–9.11)

1. `text` med den nyskrevne bestillingen, formulert slik den kunne stått i en
   mappe, pluss ærlighetslinjen fra §11.1. Der oppgaven krever et tekstvedlegg
   (9.9 novelle, 9.10 avistekst, 9.11 sakprosatekst med beskrevet bilde),
   trykkes vedlegget i kapitlet og er **nyskrevet** (§17).
2. `collapsible` **Klart over minstekravet** — full, sammenhengende tekst med
   margnotater og «— naturlig pausepunkt —» mellom hoveddelene.
3. `collapsible` **Ikke godkjent** — samme bestilling, med de svakhetene
   skjelettet angir per kapittel, og margnotater som peker på nøyaktig hva som
   mangler.
4. **Kap. 9.9 skal i tillegg ha `collapsible` «Så vidt godkjent»** — den
   obligatoriske bestått-på-marginen-besvarelsen (§7.3). Dette er et DNA-krav for
   bestått/ikke-bestått-fag og gjelder minst ett sted i boka.
5. `tip` **Sensorblikket** — momentliste strukturert som **ikke godkjent /
   godkjent (minstekravet) / klart over minstekravet**, anvendt på akkurat denne
   bestillingen, med den eksplisitte setningen om hva som skiller den så vidt
   godkjente fra den som er klart over — og en **avkryssbar selvdiagnose (☐)**.
6. `warning` **Typiske feil** — fallgruvene den svake versjonen demonstrerer
   (skjelettet angir dem: 9.8 → #10, #11 · 9.9 → #1, #2, #6 · 9.10 → #9, #12,
   #13 · 9.11 → #2, #5). ⚠ Kravet om `warning`-blokk gjelder også disse
   kapitlene: `sjekk-bok.py` fritar bare titler som matcher
   `øvingseksamen|simulering|prøve|typetilfelle|praktikum`, og «Modellbesvarelse:
   …» gjør ikke det.

### 5.6 Prøvekapitler = MAPPEØVELSER (`exfac03-nord-<del>-prove`, del 1–9)

Id `exfac03-nord-<del>-prove`, `chapterNumber` `<del>.P`, tittel «Prøver til del
<del>: <deltittel>» (auto fra wiringen — la den stå, §2.2).

Struktur: `tip` **åpnings-tip etter malen i §8.1** + `text` Forkunnskaper + fire
`collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med nyskrevne
øvelser og full momentliste-fasit. **Øvelsenes tema og oppgavetyper per del står
i skjelettets §4 «Prøve-kvote Del N» — følg dem punkt for punkt.**

**Fasitstruktur** (obligatorisk i hver øvelsesfasit) — de tre registrene fra
kildenes egen ordbruk:

> **Ikke godkjent** (det som gjør at delen ville falt) · **Godkjent
> (minstekravet)** (det som må være på plass) · **Klart over minstekravet** (det
> som løfter — begrunnelsen, den utskrevne alternative analysen, det begrunnede
> utvalget og bortvalget) · **Fallgruver** (det veiledningene faktisk sier skal
> trekke, med kode).

Etter hver fasit: **avkryssbar selvdiagnose-sjekkliste (☐)** — bruk rubrikkene i
§6.4. Kap-referanser i fasitene som markdown-lenker. **Ingen quiz og ingen
begrepsbank i prøvekapitler.**

**Den fjerde øvelsen i hver del er ALLTID en komplett delbestilling med
revisjonsrunde:** leseren skriver et utkast, får en nyskrevet tilbakemelding i en
`collapsible`, og leverer en endringsliste. Det er mappens signaturferdighet
(utkastretten, 6 av 6 veiledninger) gjort til øvelse, og porten i §8.4 måler at
ordene **utkast**, **tilbakemelding** og **endringsliste** faktisk står der.

⚠ **Ja/nei- og riktig/galt-lister:** `sjekk-statiskflervalg.py` leser `a) b) c)
d)` under et nummerert spørsmål som et flervalg. Er listen et sett med
SELVSTENDIGE påstander (ikke deloppgaver av én oppgave), bruk romertall
**(i), (ii), (iii)** — det er nummerering av påstander, ikke listemerking av
deloppgaver. Dette treffer særlig **prøve 3 i del 2** (åtte ord som skal merkes
flertydig eller ikke), **prøve 3 i del 3** (fem setninger der én bare er
tilsynelatende tvetydig), **prøve 2 i del 9** (tolv utdrag merket (i)–(xii)) og
gjenkjenningsdrillene i kap. 9.3 og 9.7. Beholder du a)–e), sjekk portens tall
mot en manuell telling før du «retter» noe. **Dette er det ENESTE stedet
romertall er tillatt.** Deloppgaver merkes alltid **a), b), c)** (§12).

---

## 6. MAPPEKONTRAKTEN (fagets kjerne — bindende for alle løsninger og modellsvar)

Alt i denne seksjonen etableres i Del 0 (kap. 0.1–0.2) og refereres i resten av
boka. Det er dette som gjør at mange forfattere skriver samme bok.

### 6.1 Kildegrunnlaget og TALLDISIPLINEN (bokas strengeste seksjon)

Tallene er **talt i emnemappa** og verifisert ved å åpne hver av de sju filene
(analysens § 8). De er gjengitt her fordi denne kontrakten er porten forfatteren
leser.

| Fakta | Tall |
|---|---|
| **Terminer dokumentert** | **6** — H2019, H2021, H2022, H2023, H2024, H2025 |
| Årsspenn | 7 kalenderår, 2019–2025 |
| Vår- / høstterminer | **0 / 6** |
| Filer i emnemappa | **7** (unike etter md5: 7 — ingen dubletter) |
| **Sensorveiledninger** | **6**, dekker 6 terminer |
| **Oppgavesett-filer** | **1** (mappeoppgavene H2021, bokmål og nynorsk i samme fil) |
| **Løsningsforslag / fasiter / modellbesvarelser** | **0** |
| **Studentbesvarelser** | **0** |
| **Flervalgsspørsmål** | **0** — vurderingsformen har ingen |
| Terminer med **ordrett oppgavetekst** | **1 av 6** (H2021) |
| Terminer med **gjenkjennelig oppgaveinnhold** | **5 av 6** (H2021–H2025) |
| Terminer i **gjeldende regime** (H2021 →) | **5** |
| Terminer med **konkret litteraturomtale** | **4** (H2022–H2025) |
| Sider totalt | **18** |
| Bilder i kildene | **0** |

**Kontrollsummer:** 1 oppgavesett + 6 veiledninger = **7 filer** ✓. H2021 har 2
filer, de fem øvrige terminene 1 hver: 2 + (5 × 1) = **7** ✓. 1 termin med
ordrett tekst + 4 med beskrevet innhold + 1 uten (H2019) = **6** ✓. 5 terminer i
gjeldende regime + 1 i eldre regime = **6** ✓.

**Ni ufravikelige konsekvenser:**

1. **Ordene «fasit» og «løsningsforslag» kan ALDRI brukes om arkivet.** UiO har
   publisert null av hver for dette emnet. Det som finnes, er
   **sensorveiledninger** (6 stykker) og **ett oppgavesett**. Bokas egne
   besvarelser er **nyskrevne** og skal alltid omtales slik — aldri som ekte
   studentbesvarelser, aldri som offisielle løsninger. Ordene er fortsatt
   lovlige i bokas egne sammenhenger («fasiten skriver ut begge analysene»); det
   er koblingen til arkivet og til UiO som er forbudt. Prosaregel-kontrollert
   (§14.5, port 2).
2. **Fem lovlige nevnere, og bare fem:** **6** (veiledninger / dokumenterte
   terminer), **5** (terminer i gjeldende regime, og terminer med kjent
   oppgaveinnhold), **4** (terminer med konkret litteraturomtale), **2** og
   **1** der noe bare er sett to eller én gang. Står tallet ikke i §6.2, skal det
   ikke skrives (§6.3).
3. **Enheten skrives alltid ut.** «5 av 5 terminer», aldri «5 av 5». Uten enhet
   vet ikke leseren om det telles terminer, veiledninger eller filer — og det er
   nettopp der utv1000 og inter1000 gikk i grøfta.
4. **Grunnlaget er tynt, og boka skal si det.** Seks høstterminer er nok til å
   bygge en ærlig bok og ikke nok til noe mer. Kalibreringen skal stå eksplisitt
   i kap. 0.1, i kildenoten og i bokbeskrivelsen: bygget på **6
   sensorveiledninger og 1 oppgavesett fra høstterminene 2019–2025**.
5. **Aldri «alle eksamener», aldri en vårtermin, aldri et termin-årstall før
   2019.** Emnet er eldre enn arkivet. `V20\d\d` og `H2000`–`H2018` er hardt
   forbudt (§14.5) — ⚠ men **litteratur- og språkhistoriske årstall er
   lovlige**, se §6.3 og §20 presisering 1.
6. **Aldri «emnet gis bare om høsten».** Alle 6 dokumenterte terminer er
   høstterminer, og høstingen fant ingen vårfiler. Det er konsistent med et rent
   høstemne, men arkivet alene beviser det ikke. Boka skriver «i alle seks
   dokumenterte terminer, som alle er høstterminer».
7. **H2020 mangler helt** fra UiOs egen arkivside. Boka kan nevne det — leseren
   som teller 2019 til 2025 og finner seks terminer, fortjener setningen — men
   **bare i en merket mangel-ramme** (prosaregel 6, §14.5) og aldri som belegg.
   ⚠ Materialet sier ingenting om hvorfor, og boka skal ikke spekulere.
8. **Én observasjon er ikke et mønster.** Alt som hviler på H2021 alene — ordlyden
   i morfologioppgaven, de sju ordene, de tre setningene — merkes som **1 av 5**
   når det brukes. Det skal brukes, men aldri generaliseres.
9. **Ingen tall om strykprosent, karakterfordeling, sensurstatistikk,
   innleveringsfrister, pensumliste, vekting mellom halvdelene eller
   adgangskrav.** Materialet inneholder ingenting om noe av det. Der leseren
   trenger det, ber boka henne slå det opp på emnesiden for sitt eget semester.

### 6.1.1 Kildenote-mal for kap. 0.1

Bruk denne ordlyden — tilpasset i språk, **aldri i tall**. Malen er testet mot
forbudt-regexen i §14.5 og gir **null treff** (testen står i §14.5).

> Boka er kalibrert mot alt som finnes av publisert EXFAC03-NORD-materiale fra
> UiO: **seks sensorveiledninger og ett oppgavesett, fra høstterminene 2019 til
> 2025** — seks dokumenterte terminer, som alle er høstterminer. Bare én av de
> seks terminene har oppgaveteksten ordrett (H2021); for fire av de andre
> beskriver veiledningen hva oppgavene gikk ut på, og for den eldste (H2019) vet
> vi ingenting om de konkrete oppgavene. **Arkivet inneholder ingen
> løsningsforslag, ingen fasiter og ingen studentbesvarelser** — det som finnes,
> er sensorveiledninger, og de sier hva som kreves for at en mappedel skal
> godkjennes, ikke hva kandidater faktisk gjorde. Alle tekster, oppgaver,
> analyser og besvarelser i denne boka er derfor skrevet av oss. **Og én ting
> til, som du har krav på å vite om det verktøyet du kommer til å bruke mest:**
> emnet har ingen flervalgsoppgaver i det hele tatt — ikke fordi de er tapt, men
> fordi vurderingen er en mappe. Quizene og kortene i boka er begrepstrening,
> ikke en simulering av noe du skal gjennom. Det de trener, er likevel hjemlet:
> alle seks veiledningene krever at faglige begreper beherskes og at
> fagterminologien brukes riktig. **Forbehold:** seks terminer er et tynt
> grunnlag. Vekting mellom språk- og litteraturdelen, innleveringsfrister,
> pensumliste og adgangskrav står ikke i noe av materialet — slå det opp på
> emnesiden for ditt eget semester.

⚠ **Fellen malen er kalibrert rundt:** «UiO publiserer ingen offisielle
løsningsforslag» er riktig i sak, men blokkert av porten. Malen sier derfor
«arkivet inneholder ingen løsningsforslag», som er like sant og passerer. En
annen felle er nær: «boka har ikke trent på tidligere flervalgsoppgaver» er også
sant, men står i forbudt-regexen — en negasjon som inneholder påstanden,
overlever verken skumlesing eller et søkemotorutdrag. Skriv det positivt: *emnet
har ingen flervalgsoppgaver, og quizene er våre egne.* Endrer du malen, kjør
testen i §14.5 på nytt.

### 6.2 AUTORITATIV frekvenstabell per kapittel

**Regelen: tallet er ALLTID antall LISTEDE terminer i belegg-lista.** Ikke antall
forekomster, ikke et anslag, ikke en omregning. **Nevneren skal skrives ut med
enhet, og regimet oppgis der nevneren er 5 eller 4.**

Alle 48 kapitlers frekvenspåstander er etterregnet mot skjelettets egne
belegg-blokker og mot analysens §§ 3–5 den 6. august 2026: **alle nevnere er
lovlige, og alle delmengder kontrollregner.** Skjelettets belegg-blokker kan
derfor brukes ordrett — med de tre unntakene i §20.

| Kap. | Påstand (bindende form) | Sjanger | Prioritet |
|---|---|---|---|
| 0.1 | metakapittel — hele grunnlaget: 6 terminer, 7 filer. Vurderingsform, skala, felleveier og sensors skjønn: **6 av 6 veiledninger**. Mappens form i dag: **5 av 5 terminer** i gjeldende regime | — | høyeste |
| 0.2 | vurderingskravene — **6 av 6 veiledninger**. Belønnes: fagterminologi **6 av 6** · tekstnærhet **4 av 6** · utvalg og prioritering **2 av 6** · egne argumenter for tolkningsvalg **2 av 6** · faglitteratur utenfor pensum som tillegg **2 av 6** · drøfting av analysevalgenes relevans **1 av 6**. Straffes: ikke pensumforankret **4 av 6** · referansestil ikke fulgt **4 av 6** · parafrase **3 av 6** · upresis referering **3 av 6** · ikke tekstnær **3 av 6** · omfangsavvik **2 av 6** · det særegne formtrekket uberørt **1 av 6** · feil hovedapparat **1 av 6** | — | høyeste |
| 1.1 | trekløveret grammatikk, språklig variasjon og endring, norsk som andrespråk står i kravlisten i **6 av 6 veiledninger** · synkron mot diakron som eget spørsmål **1 av 5 terminer** (H2021) | RED | kunne |
| 1.2 | forkunnskapskapittel for analyseoppgaven, som står **5 av 5 terminer** i gjeldende regime. Ordklasse og bøying er ikke eget oppgavetema i noen termin | ANA (forberedende) | høyeste som forutsetning |
| 1.3 | fonetikk og fonologi navngitt blant analysemetodene i **2 av 6 veiledninger** (H2019, H2021), faller ut fra H2022 · krevd i **0 av 5 terminer** med kjent oppgaveinnhold | RED | kjenne |
| 2.1 | morfologisk og syntaktisk analyse **5 av 5 terminer** · kravet om å dele OG klassifisere: ordlyd fra **1 av 5** (H2021) | ANA | høyeste |
| 2.2 | sammensetning er én av de tre klassifiseringskategoriene, ordlyd **1 av 5** (H2021); analyseoppgaven **5 av 5 terminer** | ANA | høyeste |
| 2.3 | avledning, samme belegg: ordlyd **1 av 5**, analyseoppgaven **5 av 5 terminer** | ANA | høyeste |
| 2.4 | bøying, samme belegg: ordlyd **1 av 5**, analyseoppgaven **5 av 5 terminer** | ANA | høyeste |
| 2.5 | flertydige ord skal analyseres begge veier og forklares med fagterminologi — ordlyd **1 av 5** (H2021); analyseoppgaven **5 av 5 terminer**; fagterminologikravet **6 av 6 veiledninger** | ANA | høyeste |
| 2.6 | drillkapittel for ferdigheten som står **5 av 5 terminer**; H2021 hadde sju ord — **1 av 5**, ordlyd og ikke mønster | ANA | høyeste |
| 3.1 | leddanalysen **5 av 5 terminer** · setningsskjema uttrykkelig **ikke** forventet: **1 av 5** (H2021s ordlyd) | ANA | høyeste |
| 3.2 | kravet om å oppgi syntaktisk funksjon: ordlyd **1 av 5**; analyseoppgaven **5 av 5 terminer** | ANA | høyeste |
| 3.3 | flytteprøven og utskiftingsprøven skal forklares OG brukes: ordlyd **1 av 5**; analyseoppgaven **5 av 5 terminer**; fagterminologikravet **6 av 6 veiledninger** | ANA | høyeste |
| 3.4 | én av tre setninger var tvetydig, og tvetydigheten skulle forklares: **1 av 5** (H2021s ordlyd) | ANA | høyeste |
| 3.5 | drillkapittel; **5 av 5 terminer**, H2021s tre setninger er **1 av 5** | ANA | høyeste |
| 4.1 | språklig variasjon i kravlisten i **6 av 6 veiledninger**; forutsetning for essayet | RED, ESS | høyeste |
| 4.2 | språkendringsprosesser på ulike språklige nivåer, med eksempler: essaykrav i **4 av 5 terminer** (H2022–H2025) | ESS | høyeste |
| 4.3 | årsaker til språkendring: essaykrav i **4 av 5 terminer** · skjerpingen til både eksterne og interne: **1 av 4** språkendringsterminer (H2025) | ESS | høyeste |
| 4.4 | drøfting av synet på språkendring i en vedlagt avistekst: **4 av 5 terminer** · ⚠ H2022 skriver «ulike syn» i flertall, H2023–H2025 «hvilket syn» i entall — begge trenes | ESS, TEK | høyeste |
| 5.1 | morsmål, førstespråk og andrespråk som egen deloppgave: **2 av 5 terminer** (H2021 redegjørelse, H2025 med krav om problematisering) · norsk som andrespråk i kravlisten **6 av 6 veiledninger** | RED | høyeste innen sin sjanger |
| 5.2 | flerspråklighet som essaytema **1 av 5 terminer** (H2021) · andrespråksterminologi som egen deloppgave **2 av 5** · kravlisten **6 av 6 veiledninger** | RED, ESS | kunne |
| 6.1 | fortolkning i kravlisten **6 av 6 veiledninger** · fortolkning som hovedapparatet, mer sentralt enn narratologi: **1 av 4 terminer** med konkret litteraturomtale (H2024) | RED, TEK | høyeste |
| 6.2 | estetikk i kravlisten **6 av 6 veiledninger**, aldri sett som egen oppgave i de **5 terminene** med kjent innhold · kritikk i temalisten **1 av 6** (H2019), ute fra H2021 | RED | kunne |
| 6.3 | sjanger i kravlisten **6 av 6 veiledninger** · lyrikk- og sjangeranalyse som eget oppgavetema **1 av 5 terminer** (H2023) | RED, TEK | høyeste |
| 6.4 | humanioraperspektivet i kravlisten **6 av 6 veiledninger**, ikke sett som egen oppgave i de **5 terminene** med kjent innhold | RED | kunne |
| 6.5 | resepsjon og forfatterskap i historisk perspektiv som eget oppgavetema **1 av 5 terminer** (H2021) | RED, TEK | kunne |
| 7.1 | fortellerinstans og synsvinkel navngitt i **2 av 4 terminer** med konkret litteraturomtale (H2023, H2025) · narratologi som det sentrale apparatet **2 av 4** (H2022, H2023) · novelleanalysen **5 av 5 terminer** | TEK | høyeste |
| 7.2 | anakroni og analepse navngitt i **2 av 4 terminer** (H2022, H2023) · novelleanalysen **5 av 5 terminer** | TEK | høyeste |
| 7.3 | ellipse **1 av 4** (H2023) · frekvens **1 av 4** (H2025) · varighet og narrasjonsforlengende beskrivelse **1 av 4** (H2022) · samlet **3 av 4 terminer** | TEK | kunne, høyt |
| 7.4 | komposisjon er det hyppigst navngitte enkeltbegrepet: **3 av 4 terminer** (H2022, H2023, H2025) · rammefortelling **1 av 4** (H2024) | TEK | høyeste |
| 7.5 | å ikke berøre tekstens mest særegne formtrekk er en navngitt svakhet i **1 av 6 veiledninger** (H2025) · utvalg og prioritering belønnes i **2 av 6** | TEK | høyeste |
| 7.6 | drillkapittel; novelleanalysen **5 av 5 terminer** · begrepsapparatet skal brukes, ikke omskrives: **4 av 4 terminer** med konkret litteraturomtale · tekstnærhet **3 av 4** · utvalg og prioritering (H2023) | TEK | høyeste |
| 8.1 | lyrikk- og sjangeranalyse med sonett **1 av 5 terminer** (H2023) | TEK, RED | kunne |
| 8.2 | sakprosaanalyse uten retorikkramme **1 av 5 terminer** (H2025) · sakprosa i vid forstand i **3 av de 4 siste terminene** ⚠ prognosegrunnlag, aldri løfte til leseren | TEK | høyeste |
| 8.3 | retorisk analyse **2 av 5 terminer** (H2022, H2024) · de tre talesjangrene **1 av 2 retorikkterminer** (H2022) · den retoriske situasjonen **1 av 2** (H2024) | TEK | kunne, høyt |
| 8.4 | etos, patos og logos i **2 av 2 retorikkterminer** · multimodalitet **1 av 2** (H2022) ⚠ med den eneste dokumenterte lempingen på pensumkravet i hele materialet | TEK | høyeste innen retorikken |
| 9.1 | oppgaveordlyden bestemmer hovedapparatet — hjemlet i **1 av 4 terminer** med konkret litteraturomtale (H2024) · formkrav dokumentert i **3 av 6 terminer**, med godkjenningskonsekvens i **2 av 6** · referansekravet **4 av 6 terminer** | — | høyeste |
| 9.2 | sammenhengende tekst med innledning, hoveddel og avslutning: **5 av 5 terminer** i gjeldende regime — det mest ensartede formkravet i materialet | — | høyeste |
| 9.3 | parafrase i stedet for analyse **3 av 6 terminer** · manglende tekstnærhet **3 av 6** · tekstnærhet som styrke **4 av 6** | — | høyeste |
| 9.4 | ikke forankret i pensumlitteraturen **4 av 6 terminer** · referansestil ikke fulgt eller kilder ikke oppgitt **4 av 6 terminer** ⚠ inkl. H2021s oppgavetekst · upresis referering, utgave og sidetall **3 av 6** · «utenfor pensum kommer i tillegg» **2 av 6** | — | høyeste |
| 9.5 | retten til utkast og respons **6 av 6 veiledninger** — fra faglærer i **5 av 6**, fra medstudent og/eller faglærer i **1 av 6** (H2021) · omfangsavvik som mulig grunn til at mappen ikke godkjennes **2 av 6** | — | høyeste |
| 9.6 | språkføring er ett av de tre hovedaspektene i **6 av 6 veiledninger**, og alvorlig svikt på ett av dem feller uansett | — | høyeste |
| 9.7 | feilregisteret — **15 fallgruver**, hvorav **9 navngitt i kildene** og **6 utledet**. Best belagt: #9 **5 av 6 terminer** ⚠ (se §20 sprik 1) · #4 **4 av 6 veiledninger** · #3 i sin videre form **4 av 6 terminer** ⚠ · #1 **3 av 6 veiledninger** · #2 **3 av 6 veiledninger** | — | høyeste |
| 9.8 | modell for delen som er dokumentert **5 av 5 terminer**; formatet fra H2021 er **1 av 5** og skal ikke kopieres | ANA | høyeste |
| 9.9 | modell for novelleanalysen **5 av 5 terminer**, første litteraturoppgave i **4 av 5** · komposisjon **3 av 4** · fortellerinstans og synsvinkel **2 av 4** · anakroni og analepse **2 av 4** · begrepsapparatet skal brukes **4 av 4** | TEK | høyeste |
| 9.10 | essayet som sjanger **5 av 5 terminer**, med språkendring som tema i **4 av 5** · skjerpingen til interne og eksterne årsaker **1 av 4** | ESS | høyeste |
| 9.11 | etos, patos og logos **2 av 2 retorikkterminer** · talesjangrene **1 av 2** · den retoriske situasjonen **1 av 2** · multimodalitet **1 av 2** med pensumlempingen **1 av 6 veiledninger** | TEK | høyeste |

**Fem kontrollsummer boka SKAL kunne vise, og som må stemme hver gang de brukes:**

| kontroll | utregning |
|---|---|
| essaytema | språkendring **4 av 5** + flerspråklighet **1 av 5** = **5** ✓ |
| den andre litteraturoppgaven | retorikk **2** + sakprosa **1** + lyrikk **1** + resepsjon **1** = **5 av 5** ✓ |
| dokumenterte terminer | 5 i gjeldende regime + 1 i eldre (H2019) = **6** ✓ |
| filer | 6 veiledninger + 1 oppgavesett = **7** ✓ |
| varighet, frekvens og ellipse (kap. 7.3) | H2022 + H2023 + H2025 = **3 av 4 terminer** ✓ (aldri 1 + 1 + 1 = 3 av 12) |

⚠ **Nevneren for et TEMA er ikke nevneren for et DELTEMA.** Analyseoppgaven er
prøvd i 5 av 5 terminer; det betyr **ikke** at fugeformativen, nullmorfen eller
homonyme affikser hver for seg er prøvd fem ganger. Kap. 2.2–2.5 og 3.2–3.4
skriver «som del av analyseoppgaven, prøvd i 5 av 5 terminer i gjeldende regime»
og deretter sitt eget, mindre tall fra tabellen over. Dette er den vanligste
måten å produsere et sant tall som sier noe usant.

### 6.3 NEVNERPORTEN

Hver frekvenspåstand har én nevner, og bare disse fem er lovlige:

| Nevner | Når den brukes | Eksempel |
|---|---|---|
| **6 veiledninger** / **6 terminer** | alt om hva sensor krever, belønner og straffer | «Fagterminologikravet står i 6 av 6 veiledninger.» |
| **5 terminer** | alt om hvilke oppgaver som faktisk gis — **alltid med «i gjeldende regime» eller «siden H2021»** | «Morfologisk og syntaktisk analyse er gitt i 5 av 5 terminer i gjeldende regime.» |
| **4 terminer** | analysefokus i litteraturoppgavene — **alltid med «terminene med konkret litteraturomtale» eller «H2022–H2025»** | «Komposisjon er navngitt i 3 av 4 terminer med konkret litteraturomtale.» |
| **2** | noe som er sett to ganger — **eksplisitt merket** | «i 2 av 2 retorikkterminer» |
| **1** | H2021 alene | «ordlyd fra 1 av 5 terminer» |

**Ufravikelige konsekvenser:**

- **Enheten skrives alltid ut** — «5 av 5 terminer», aldri «5 av 5».
- **Regimet oppgis ved hvert 5-tall og hvert 4-tall.** Et 5-tall er alltid «i
  gjeldende regime» eller «siden H2021»; et 4-tall er alltid «terminer med
  konkret litteraturomtale». H2019 hører til et eldre regime med **to** deler og
  teller bare der nevneren er 6.
- **«Sett» og «filer» er ALDRI nevnere i denne boka.** Det finnes ett
  oppgavesett; en brøk med den nevneren ville vært meningsløs. Skriv «terminer»
  eller «veiledninger».
- **Formen `N av de M …` teller også.** «3 av de 4 siste terminene» og «5 av de 6
  veiledningene» er lovlige, men porten i §14.5 må matche begge former —
  regexen `\bav (de )?\d+` gjør det.
- **«I de fleste terminene», «gjennomgående», «nesten alltid» og «ofte» er
  FORBUDT som frekvenspåstander** uten et telt tall ved siden av. Unntak:
  kvalitative sensorkarakteristikker, som skal merkes som veiledningenes egne
  vurderinger.
- **⚠ Årstallsregelen er SCOPET.** Skjelettets Talldisiplin sier «aldri et
  årstall før 2019». Det gjelder **terminer og kilder**, ikke litteratur- og
  språkhistorie: kap. 6.5 skal etter skjelettets egen kontrakt gi «de store
  norske epokebetegnelsene fra 1800-tallet og framover, presentert med årstall
  som omtrentlige», og kap. 4.2 beskriver språkendring over tid. En blank
  årstallsport ville felt boka på et krav skjelettet selv stiller. Porten er
  derfor bundet til **termin-formede** årstall (`H20xx`, `V20xx`) og til årstall
  som står i samme setning som eksamen, termin, veiledning, arkiv eller sett
  (§14.5, prosaregel 5). Se §20 presisering 1.
- **⚠ 926 og 824 er byggetall, ikke frekvenstall.** Kvotesammendragets «382 av
  926 quiz» beskriver boka, ikke emnet, og skal aldri stå i bokinnholdet.

### 6.4 De tre registrene, de to felleveiene og de fire rubrikkene

**Vurderingen forankres i tre hovedaspekter** (Nasjonalt fagråds fagspesifikke
karakteromtaler for nordisk), i **6 av 6 veiledninger**:

1. **kunnskapsinnholdet**
2. **evne til problemløsing og kritisk innsikt i fagstoffet**
3. **språkføring**

**Alvorlig svikt på ett av dem feller uansett hvor godt de andre er mestret.**
De tre måles hver for seg, og et strålende innhold redder ikke en del med svak
språkføring.

**To uavhengige felleveier**, begge i **6 av 6 veiledninger**:

- **svikter én del, faller hele mappen** — regelen skrives **uten tall** (§8.2);
- **alvorlig svikt på ett av de tre hovedaspektene** feller på tvers av alle
  deler.

⚠ **Det som overrasker, og som skal ha en egen boks i kap. 0.1:** **språkføring
er en selvstendig grunn til ikke godkjent i et emne der du har ubegrenset tid og
alle hjelpemidler.** Veiledningene begrunner det direkte — nettopp fordi
arbeidsforholdene er så gode, stilles det høye krav. Alle 6 sier det. Kap. 9.6 er
hjemmet for ferdigheten.

**Sensors faglige skjønn og helhetsvurdering** nevnes i **6 av 6**. Boka skal
gjengi det ærlig i kap. 0.1: det finnes ikke en sjekkliste som garanterer
godkjent. Boka trener det som kan trenes.

**De fire rubrikkene (bindende selvrettingsverktøy, binære — leseren skal kunne
krysse av uten skjønn).** De står i kap. 0.2 og i sitt sjangerkapittel, og hver
øvelsesfasit viser tilbake til den som passer.

**Analyserubrikken (analyse av språklig materiale, ANA):**

☐ Er hvert ord delt i morfer, med grensene markert i oppsettet?
☐ Er **hver** morf klassifisert — ikke bare segmentert?
☐ Er de flertydige ordene merket, med **begge** analysene skrevet ut?
☐ Er det navngitt med fagterm hva flertydigheten skyldes?
☐ Er leddgrensene satt før funksjonen ble oppgitt?
☐ Er minst de tvilsomme leddgrensene begrunnet med en konstituenttest, med
setningen før og etter skrevet ut?

**Redegjørelsesrubrikken (RED):**

☐ Er det avgrenset hva spørsmålet ber om — og skrevet hva det ikke ber om?
☐ Er begrepet definert presist, med fagets egen term?
☐ Er kontrastbegrepet satt opp mot det?
☐ Er termen **problematisert** der oppgaven ber om det, med kriteriene som
argumentgrunnlag og ikke med egne meninger?
☐ Er terminologien konsekvent gjennom hele delen?

**Tekstanalyserubrikken (TEK):**

☐ Sier innledningen hvilket apparat du bruker, og hvorfor?
☐ Er utvalget av grep begrunnet — og bortvalget nevnt med én linje?
☐ Har **hver** påstand om teksten en bestemt passasje ved siden av seg?
☐ Er begrepene brukt slik faget bruker dem, ikke omskrevet til hverdagsspråk?
☐ Er tekstens mest særegne formgrep berørt?
☐ Svarer avslutningen på hva analysen viste — i stedet for å gjenfortelle
teksten?

**Essayrubrikken (ESS):**

☐ Er teksten sammenhengende, med innledning, hoveddel og avslutning — ikke en
punktliste?
☐ Har hvert avsnitt én bærende påstand?
☐ Er endringene plassert på **ulike** språklige nivåer, ikke bare det
leksikalske?
☐ Er hvert eksempel koblet til prosessen det illustrerer?
☐ Er synet i den vedlagte teksten **drøftet**, ikke bare referert?
☐ Er det plass igjen til drøftingsleddet når du kommer dit?

### 6.5 Sjangrenes anatomi (bindende for alle modellsvar og fasiter)

Kodene **ANA**, **RED**, **TEK** og **ESS** er byggespråk. **Skriv alltid
sjangerens navn først, koden i parentes**, og skriv navnet fullt ut ved første
bruk per kapittel (§14.2).

**ANA — analyse av språklig materiale.** Den eneste delen av emnet der svaret kan
være riktig eller galt. Fire trinn: (1) **segmenter** eller sett leddgrensene ·
(2) **klassifiser** hver morf, eller oppgi syntaktisk funksjon for hvert ledd ·
(3) **begrunn** det tvilsomme med en test, med setningen før og etter skrevet ut
· (4) **behandle flertydigheten**: vis begge analysene, navngi med fagterm hva
den skyldes, og si hvilken du legger til grunn videre. ⚠ **Trinn 2 er halve
bestillingen** — H2021s ordlyd ber om å dele **og klassifisere** — og **trinn 4
er det som skiller en godkjent analyse fra en mekanisk**. Å nevne at ordet er
flertydig uten å navngi hva flertydigheten skyldes, er fallgruve #10.

**RED — redegjørelse.** Fire trinn: (1) avgrens · (2) definer med fagets egen
term · (3) sett opp mot kontrastbegrepet · (4) problematiser. ⚠ **H2025 hever
sjangeren:** det skal gis argumenter for hvorfor termene kan være problematiske,
og ren definisjonsgjengivelse holder ikke der. Problematiseringen bygges på
termenes **kriterier** (opphav, kompetanse, identifikasjon), aldri på egne
meninger.

**TEK — tekstanalyse.** Ikke ett riktig svar, men klart utilstrekkelige svar. Tre
krav går igjen: **tekstnærhet** (3 av 4 terminer med konkret litteraturomtale) ·
**begrepsapparatet skal brukes, ikke omskrives** (4 av 4) · **utvalg og
prioritering** (H2023: novellen rommer så mange grep at kandidaten må velge, og å
prøve å dekke alt er ikke en styrke). Over dem alle: **oppgaveordlyden bestemmer
hovedapparatet** (H2024). Forankringsformen er tre ledd, alltid i denne
rekkefølgen: **påstand — passasje — hva passasjen viser.**

**ESS — essay.** Sammenhengende tekst med innledning, hoveddel og avslutning —
det mest ensartede formkravet i materialet (5 av 5 terminer i gjeldende regime).
Innholdssjekklista fra de fire språkendringsterminene opereres direkte:
prosesser · nivåer · årsaker · eksempler · drøfting av synet i den vedlagte
artikkelen · alt i essayform. ⚠ **Å levere momenter i stedet for sammenhengende
tekst er fallgruve #9 — den best belagte formfeilen i emnet.**

**De fire mappedelene kombinerer sjangrene:** delmappe I sin språkdel er ren ANA
(ofte med et RED-ledd om testene), delmappe I sin litteraturdel er TEK, delmappe
II sin språkdel er ESS (med et TEK-ledd om avisteksten), og delmappe II sin
litteraturdel er TEK (ofte med RED-ledd). Boka trener hver sjanger for seg i del
9 og kombinerer dem i mappeøvelsene og modellbesvarelsene.

### 6.6 ARBEIDSBUDSJETT — ikke tidsbudsjett (bindende)

⚠ **Denne boka har ingen klokke.** Mappen skrives hjemme over uker, med alle
hjelpemidler. Det finnes ingen «slik disponerer du fire timer», ingen
minuttfordeling per oppgave, og ingen eksamensdag. Alt som ligner tidspress, er
en byggefeil.

Modellen boka bruker i stedet, er et **arbeidsbudsjett per mappedel**: lese
bestillingen og finne kravene (ordlydsprosedyren i kap. 9.1) → lese teksten eller
materialet to ganger → sette opp analysen eller disposisjonen → skrive utkast →
levere utkast og få respons → revidere etter responsprosedyren i kap. 9.5 →
korrekturrunde og omfangskontroll. **Rekkefølgen er budsjettet.**

Der et anslag likevel gis i en mappeøvelse, er det **arbeidstid**, og det skal
stå at alle hjelpemidler er tillatt. **Aldri «prøvetid», aldri «du har X
minutter».**

**Kapitlenes `estimatedMinutes` er LESEtid.** «Kort tid til innlevering?»-boksen
i kap. 0.1 sier det eksplisitt, og legger til at **skrivetiden for en mappedel
kommer i tillegg og oppgis separat** i ukeplanen. Summen av de 48 kapitlene er
eksakt **2 720 minutter ≈ 45 timer lesetid** (verifisert mot skjelettet §13);
prøvekapitlene kommer i tillegg med 9 × 120 = 1 080 minutter.

### 6.7 Bokas to mantraer

1. **«Begrepet skal brukes, ikke omskrives.»** Etableres i kap. 0.2, gjentas i
   hvert sjangerkapittel og i hver «Slik løftes svaret»-boks. Hjemmelen er
   direkte: **4 av 4** terminer med konkret litteraturomtale krever at
   begrepsapparatet fra pensum og undervisning brukes, og **6 av 6** veiledninger
   krever korrekt anvendelse av fagterminologi.
2. **«En analyse uten passasje er en påstand.»** Etableres i kap. 0.2. Hjemmelen
   er tekstnærhetskravet i **3 av 4** terminer og den løsrevne analysen som
   navngitt svakhet i **3 av 6** veiledninger.

Begge mantraene forklares i klarspråk ved første bruk, og begge står ordrett i
boka (påkrevd terminologi, §14.6).

---

## 7. SKALAPORTEN — bestått / ikke bestått, og hva det gjør med hele boka

Mappen vurderes **samlet** etter en **ikke gradert** skala. Dette står i **6 av 6
veiledninger**, og det er den opplysningen som snur flest av husets faste regler.
Denne seksjonen er derfor den ene en agent fra en annen bok mest sannsynlig vil
bryte av gammel vane.

### 7.1 De tre registrene erstatter karakterskalaen

Boka har **ingen** A/C/E-nivåer, ingen karakterbeskrivelser, ingen «slik får du
A» og ingen «gapet til A». Den skalaen finnes ikke i dette emnet.

I stedet brukes **tre registre hentet fra kildenes egen ordbruk**:

| register | kildenes formulering | brukes om |
|---|---|---|
| **ikke godkjent** | «vil ikke kunne godkjennes», «vil regnes som svak» | det som feller delen |
| **godkjent (minstekravet)** | «for å bestå må kandidaten …» | det som må være på plass |
| **klart over minstekravet** | «en god besvarelse vil …» | det som løfter |

**Alle momentlister, alle fasiter, alle Sensorblikk-bokser og alle
modellbesvarelser struktureres etter disse tre — ordrett.** Skrivemåten er
bindende (påkrevd terminologi, §14.6): `ikke godkjent` · `godkjent
(minstekravet)` · `klart over minstekravet`. Porten i §7.5 måler at alle tre står
i hver prøvefil og i hvert modellbesvarelseskapittel.

⚠ **Presens, ikke konditionalis.** «En god besvarelse **vil** vise …» er
kildenes egen registerbeskrivelse og er lovlig. «En god besvarelse **ville** ha
drøftet …» er meta-fasit og er forbudt (§11.2) — forskjellen er ett ord, og
begge former ligger tett i regexen. Skriv drøftelsen ut.

### 7.2 Karakterrealismen instansiert: «godkjent er målet, ikke perfeksjon»

`BYGGEKONTRAKT-MAL.md` krever at Del 0 sier eksplisitt at «C er en god og vanlig
karakter». Kravet er ekte — det handler om at leseren ikke skal jage en terskel
som ikke finnes — men formuleringen er umulig her. **Instansieringen er bindende
og skal stå ordrett i kap. 0.1:**

> **Godkjent er målet, ikke perfeksjon.** En mappe som treffer minstekravet på
> alle fire delene, er en bestått mappe. Det finnes ingen karakter å strekke seg
> etter og ingen ekstrapoeng for å gjøre én del strålende — det eneste som teller
> ekstra, er at ingen av delene svikter.

Konsekvenser:

- Uttrykket **«Prioritet: perfekt» er FORBUDT** i leserrettet innhold — skriv
  «høyeste prioritet». Prioritetsklassene fra skjelettet oversettes slik:
  *høyeste* → **høyeste prioritet**, *kunne* → **kunne**, *kjenne* → **bør kjenne
  til**.
- «Gapet til A» finnes ikke. Der en besvarelse skal løftes, rammes det inn som
  **oppgraderingsmeny** fra godkjent til klart over minstekravet — aldri som
  mangelliste.
- ⚠ **Boksen «Slik løftes svaret» heter ikke «A-markør».** Den heter det den
  heter i §5.2, og innholdet er det grepet som flytter delen fra minstekravet til
  klart over det.
- **«Bør kjenne til» betyr færre minutter og lavere kvote — aldri at stoffet kan
  utelates.** Kap. 1.3 (fonetikk og fonologi), 6.2 (estetikk) og 6.4
  (humanioraperspektivet) står i kravlisten i 6 av 6 veiledninger selv om ingen
  av dem er sett som egen oppgave. De skal skrives fullt ut.

### 7.3 Bestått-på-marginen-besvarelsen er OBLIGATORISK (kap. 9.9)

DNA-kravet om et realistisk sammenligningspunkt gjelder også — og i et
bestått/ikke-bestått-fag er det bare én form som gir mening. **Kap. 9.9 skal ha
tre versjoner:**

| versjon | tittel i `collapsible` | profil |
|---|---|---|
| a | **Klart over minstekravet** | full tekst med margnotater. Utvalget er begrunnet, hvert grep har sin passasje, og avslutningen svarer på hva analysen viste. ⚠ **Denne skal lande SKARPT** — én klar tolkningspåstand, ikke en oppramsing av muligheter — med et margnotat om at forbehold er et verktøy og ikke obligatorisk garnityr |
| b | **Så vidt godkjent** | ekte studentspråk, litt rotete disposisjon, ett godt selvstendig poeng om komposisjonen, to av fire påstander uten passasje, og en avslutning som oppsummerer i stedet for å svare. Margnotater om hva som er **bra nok** her, og de to–tre grepene som ville løftet den klart over minstekravet |
| c | **Ikke godkjent** | primært gjenfortelling av handlingen med narratologiske termer strødd over — nøyaktig det H2023 sier ikke vil kunne godkjennes |

**Versjon b er den viktigste i hele boka.** Leseren trenger å se hvor terskelen
faktisk ligger, ikke bare en polert topp og en karikert bunn. Margnotatene i b
skal si **hva som holder**, ikke bare hva som mangler — det er forskjellen mellom
et sammenligningspunkt og en ny mangelliste.

⚠ **En boks som heter «Så vidt godkjent» skal FAKTISK være så vidt godkjent.**
En polert versjon merket «så vidt godkjent» er en byggefeil, på samme måte som en
polert A merket C er det i en gradert bok. Samme krav gjelder «ikke
godkjent»-versjonene i 9.8, 9.10 og 9.11: de skal faktisk mangle det de sier de
mangler.

⚠ **«bestått på marginen» er ikke et fagbegrep** og skal aldri være en
`definition`-blokk — det ville endret flashcard-kvoten (§13).

### 7.4 Modellbesvarelsene får ALDRI karakterbokstav

Ingen av de fire modellbesvarelsene, ingen av de tre versjonene i kap. 0.2 og
ingen fasit noe sted får en bokstav. Der andre bøker skriver «A-besvarelse» og
«C-besvarelse», skriver denne boka de tre registrene. Det gjelder også i
`title`-feltene, i `buttonText` og i margnotatene.

### 7.5 PORT S — skalaen (testet 6. august 2026)

Porten gjør to ting: den feller karaktersjargong, og den krever at de tre
registrene faktisk står der momentlistene skal stå. Kjørt mot fikstur: den fanget
«A-besvarelse», «karakterskalaen», «C-nivå» og en prøvefil uten registrene, og
slapp gjennom en korrekt strukturert fasit.

```bash
python3 - <<'EOF'
# PORT S — EXFAC03-NORD: ikke gradert skala, tre registre.
import glob, json, os, re, sys
GRADERT = re.compile(r"[A-F]-besvarelse|[A-F]-nivå|[A-F]-markør|[A-F]-stoff|"
                     r"[A-F]-kandidat|[A-F]-terskel|karakteren [A-F]\b|karakterskala|"
                     r"gapet til A|\bA–F\b|\bA-F\b|strykprosent|karakterfordeling")
REG = ("ikke godkjent", "godkjent (minstekravet)", "klart over minstekravet")
def strenger(o, sti=""):
    if isinstance(o, str): yield sti, o
    elif isinstance(o, dict):
        for k, v in o.items(): yield from strenger(v, f"{sti}.{k}")
    elif isinstance(o, list):
        for i, v in enumerate(o): yield from strenger(v, f"{sti}[{i}]")
avvik = []
for p in sorted(glob.glob("src/lib/data/chapters/exfac03-nord-*.json")):
    navn = os.path.basename(p); kap = navn[:-5]
    d = json.load(open(p, encoding="utf-8"))
    txt = " ".join(s for _, s in strenger(d))
    for sti, s in strenger(d):
        for m in GRADERT.finditer(s):
            avvik.append(f"{navn}{sti}: «{m.group(0)}» — emnet har ikke gradert skala")
    # de tre registrene kreves i prøvekapitler og modellbesvarelser
    if kap.endswith("-prove") or kap in {"exfac03-nord-9-8", "exfac03-nord-9-9",
                                         "exfac03-nord-9-10", "exfac03-nord-9-11",
                                         "exfac03-nord-0-2"}:
        for r in REG:
            if r.lower() not in txt.lower():
                avvik.append(f"{navn}: momentlistene mangler registeret «{r}»")
    # bestått-på-marginen er obligatorisk i 9.9
    if kap == "exfac03-nord-9-9" and "så vidt godkjent" not in txt.lower():
        avvik.append("exfac03-nord-9-9: mangler bestått-på-marginen-versjonen «Så vidt godkjent»")
print(f"PORT S avvik: {len(avvik)}")
for a in avvik[:40]: print(" -", a)
sys.exit(1 if avvik else 0)
EOF
```

**Porten skal gi null avvik.** Den kan ikke fange at en «Så vidt
godkjent»-besvarelse i realiteten er polert — det må leses.

---

## 8. MAPPEFORM-PORTEN — fire deler, ingen klokke, ingen prøve

### 8.1 Prøvekapitlenes åpnings-`tip` (obligatorisk mal)

`wire-bok.py` gir hvert prøvekapittel en beskrivelse som sier «Fire prøver …
på eksamensnivå» (§2.2). Uten en korreksjon i selve kapitlet gir plattformens
autotekst leseren feil bilde av vurderingsformen. **Hvert prøvekapittels FØRSTE
blokk skal derfor være en `tip` etter denne malen** — tilpasset i språk, aldri i
sak. Malen er testet mot forbudt-regexen i §14.5 og gir null treff:

> **Dette emnet har ingen skoleeksamen.** De fire øvelsene under er
> **mappeøvelser**: hver har et innleveringskrav og en revisjonsrunde, og ingen
> av dem er en tidsbegrenset prøve. Alle hjelpemidler er tillatt hele veien,
> akkurat som i mappen. Øvelsene kan trygt deles over flere kvelder — én øvelse
> per økt. Omfangstallet i hver øvelse er **bokas eget øvingskrav** og sier
> ingenting om hva som kreves i ditt semester; det finner du i din egen
> oppgavetekst. Den fjerde øvelsen er en komplett delbestilling: du skriver et
> utkast, leser en tilbakemelding og leverer en endringsliste.

⚠ **Ordet «skoleeksamen» er derfor IKKE i den harde forbudt-regexen.** Setningen
over er selve korreksjonen, og en hard 0-treff-regel ville gjort det umulig å
skrive den. Ordet er i stedet lagt under **prosaregel 1** (§14.5), som krever at
hver forekomst står i en negasjon. Det er samme mekanisme som SVEXFAC03s
kildenote-felle, snudd: her er negasjonen ikke et smutthull, men kravet.

Tipen skal i tillegg si **hvor flervalget bor** i de delene som har
flervalgsøvelser (del 1–9 har alle en flervalgsbolk i første øvelse, jf.
skjelettets §4).

### 8.2 Mappens form — fire deler, og tekstresten som ikke skal gjengis

**Gjeldende form (H2021–H2025, 5 terminer):** **to delmapper**, og hver delmappe
inneholder **én språkdel og én litteraturdel** — altså **fire skriftlige deler**
til sammen. H2019 hadde **to** deler, én språk og én litteratur, og hører til et
eldre regime.

⚠ **Tekstresten.** Setningen «om en av de **to** deloppgavene …» står i
H2022–H2025, men er en rest fra H2019-malen som ikke ble oppdatert da formen
endret seg. Den motsier veiledningens egen tekst i samme dokument, som beskriver
fire deler. **Boka skal ikke gjengi tallet i den setningen.** Regelen formuleres
uten tall, og denne formuleringen er bindende og skal stå ordrett i kap. 0.1:

> **Svikter én del, faller hele mappen.**

Den gamle formen forklares kort i kap. 0.1, eksplisitt merket som historikk, med
nøyaktig ett formål: at leseren som møter et eldre oppgavesett, skjønner hvorfor
det har to deler.

**PORT T — tekstresten (testet 6. august 2026: fanget «to deler» uten ramme,
slapp gjennom historikknoten og «to delmapper»):**

```bash
python3 - <<'EOF'
# PORT T — EXFAC03-NORD: «to deler / to deloppgaver» kun i historikk-ramme.
import glob, json, os, re, sys
TREFF = re.compile(r"\bto deloppgaver\b|\bto (skriftlige )?deler\b|\ben av de to\b", re.I)
RAMME = re.compile(r"H2019|eldre regime|historikk|tekstrest|ikke oppdatert|uoppdatert|delmappe", re.I)
V = 300
def strenger(o, sti=""):
    if isinstance(o, str): yield sti, o
    elif isinstance(o, dict):
        for k, v in o.items(): yield from strenger(v, f"{sti}.{k}")
    elif isinstance(o, list):
        for i, v in enumerate(o): yield from strenger(v, f"{sti}[{i}]")
avvik, n = [], 0
for p in sorted(glob.glob("src/lib/data/chapters/exfac03-nord-*.json")):
    for sti, s in strenger(json.load(open(p, encoding="utf-8"))):
        for m in TREFF.finditer(s):
            n += 1
            if not RAMME.search(s[max(0, m.start()-V): m.start()+V]):
                avvik.append(f"{os.path.basename(p)}{sti}: «{m.group(0)}» uten historikk-ramme")
print(f"PORT T: {n} treff | avvik: {len(avvik)}")
for a in avvik[:30]: print(" -", a)
sys.exit(1 if avvik else 0)
EOF
```

### 8.3 Omfangskravet — den tynneste grensen i hele boka

Omfangs- og formkrav er **reelle godkjenningsbetingelser**: H2024 og H2025
(2 av 6) sier at hver av de fire delene skal være på rundt 2,5 sider, og at større
avvik kan medføre at mappen ikke godkjennes. H2021-oppgavesettet (1 av 6) oppgir
andre tall og et fullt formatkrav. Formkrav er dokumentert i **3 av 6** terminer
og som godkjenningsbetingelse i **2 av 6**.

⚠ **Tallene har endret seg mellom terminene. Boka skal derfor ALDRI oppgi ett
tall som «kravet».** Den skal lære leseren å behandle omfangskravet som en
godkjenningsbetingelse og **lete det opp i sin egen semesters oppgavetekst**.

Samtidig **må** mappeøvelsene ha et omfang — en øvelse uten omfang trener ikke
det leddet som faktisk feller folk. Grensen går her, og den er tynn nok til at
den skrives ut i tre regler:

1. **Emnets tall skrives alltid med termin ved siden av seg** og alltid i
   fortid: «i H2024 og H2025 var kravet rundt 2,5 sider per del». Aldri «kravet
   er 2,5 sider».
2. **Bokas egne tall bærer merkelappen.** Hver mappeøvelse som oppgir et omfang,
   skal inneholde den literale strengen **«bokas eget øvingskrav»** i samme
   avsnitt, sammen med henvisningen til leserens egen oppgavetekst. Malen,
   testet mot forbudt-regexen:

   > **Omfang: om lag to sider.** Dette er **bokas eget øvingskrav**, satt for at
   > øvelsen skal ligne en mappedel i arbeidsmengde. Emnets eget omfangskrav har
   > endret seg mellom terminene og står i oppgaveteksten for ditt semester —
   > let det opp der, og behandle det som en godkjenningsbetingelse.

3. **Formuleringene «omfangskravet er», «emnets omfangskrav» og «kravet i emnet
   er» er hardt forbudt** (§14.5).

**PORT O — omfangsmerkingen, per treff, ingen kapittelvid fallback (testet
6. august 2026: fanget «to sider» uten merkelapp, slapp gjennom den merkede):**

```bash
python3 - <<'EOF'
# PORT O — EXFAC03-NORD: hvert sidetall står i en omfangsramme.
import glob, json, os, re, sys
SIDER = re.compile(r"\b\d+(?:[,.]\d+)?\s*sider?\b|\b(?:én|en|to|tre|fire|fem)\s+sider?\b", re.I)
RAMME = re.compile(r"bokas eget øvingskrav|øvingskrav|har endret seg|varierer mellom|"
                   r"din egen oppgavetekst|ditt eget semester|emnesiden|H2024 og H2025|"
                   r"H2021-oppgavesettet|ikke emnets krav", re.I)
V = 260
def strenger(o, sti=""):
    if isinstance(o, str): yield sti, o
    elif isinstance(o, dict):
        for k, v in o.items(): yield from strenger(v, f"{sti}.{k}")
    elif isinstance(o, list):
        for i, v in enumerate(o): yield from strenger(v, f"{sti}[{i}]")
avvik, n = [], 0
for p in sorted(glob.glob("src/lib/data/chapters/exfac03-nord-*.json")):
    for sti, s in strenger(json.load(open(p, encoding="utf-8"))):
        for m in SIDER.finditer(s):
            n += 1
            if not RAMME.search(s[max(0, m.start()-V): m.start()+V]):
                avvik.append(f"{os.path.basename(p)}{sti}: «{m.group(0)}» uten omfangsramme "
                             f"→ …{s[max(0, m.start()-70): m.start()+70]}…")
print(f"PORT O: {n} sidetallsforekomster | avvik: {len(avvik)}")
for a in avvik[:30]: print(" -", a)
sys.exit(1 if avvik else 0)
EOF
```

### 8.4 PORT M — mappeformen i prøvekapitlene (testet 6. august 2026)

Porten måler at åpnings-tipen faktisk står der, at den sier alle fem tingene den
skal si, at det er nøyaktig fire øvelser, og at den fjerde er en komplett
delbestilling med revisjonsrunde. Kjørt mot fikstur: den fanget alle åtte
planlagte mangler i en dårlig prøvefil og slapp gjennom en korrekt.

```bash
python3 - <<'EOF'
# PORT M — EXFAC03-NORD: prøvekapitlene er mappeøvelser, ikke prøver.
import glob, json, os, re, sys
KRAV_TIP = [("mappeøvelse", r"mappeøvelse"),
            ("innleveringskrav", r"innleveringskrav"),
            ("revisjonsrunde", r"revisjonsrunde|revisjon"),
            ("negert skoleeksamen", r"(ingen|ikke|verken)[^.]{0,40}skoleeksamen|"
                                    r"skoleeksamen[^.]{0,25}(ingen|ikke)"),
            ("deling over økter", r"én øvelse per økt|flere kvelder")]
KRAV_P4 = [("utkast", r"utkast"), ("tilbakemelding", r"tilbakemelding"),
           ("endringsliste", r"endringsliste")]
def tekst(o):
    if isinstance(o, str): return o
    if isinstance(o, dict): return " ".join(tekst(v) for v in o.values())
    if isinstance(o, list): return " ".join(tekst(v) for v in o)
    return ""
avvik = []
filer = sorted(glob.glob("src/lib/data/chapters/exfac03-nord-*-prove.json"))
for p in filer:
    d = json.load(open(p, encoding="utf-8")); n = os.path.basename(p)
    blokker = d.get("content", [])
    if not blokker or blokker[0].get("type") != "tip":
        avvik.append(f"{n}: første blokk er ikke en tip"); continue
    tip = tekst(blokker[0])
    for navn, rx in KRAV_TIP:
        if not re.search(rx, tip, re.I): avvik.append(f"{n}: åpnings-tip mangler «{navn}»")
    coll = [b for b in blokker if b.get("type") == "collapsible"]
    if len(coll) != 4: avvik.append(f"{n}: {len(coll)} collapsible-øvelser, skal være 4")
    p4 = [b for b in coll if re.search(r"Prøve 4", b.get("title", ""), re.I)]
    if not p4: avvik.append(f"{n}: mangler collapsible «Prøve 4»"); continue
    t4 = tekst(p4[0])
    for navn, rx in KRAV_P4:
        if not re.search(rx, t4, re.I): avvik.append(f"{n}: fjerde øvelse mangler «{navn}»")
print(f"PORT M: {len(filer)} prøvekapitler (skal være 9) | avvik: {len(avvik)}")
for a in avvik[:40]: print(" -", a)
sys.exit(1 if avvik or len(filer) != 9 else 0)
EOF
```

---

## 9. PENSUMFORBUDET, PRIMÆRTEKSTENE OG NAVNEFORBUDET

### 9.1 Ingen pensumlitteratur er navngitt noe sted — og boka navngir ingen

⚠ **Ingen av de seks veiledningene navngir en eneste pensumbok, forfatter av
faglitteratur eller lærebokkapittel.** De navngir bare **primærtekstene** —
novellene, diktet, sakprosaen. Dette skiller EXFAC03-NORD skarpt fra SVEXFAC03,
der veiledningene navngir forfattere og tekster og kontrakten derfor kunne bygge
en uttømmende avsenderliste. **Her finnes ikke den listen, og den skal ikke
oppfinnes.**

Bindende:

- Boka oppgir **aldri** pensumbok, forfatter av faglitteratur, utgave, årstall
  eller sidetall. Ikke som eksempel, ikke som forslag, ikke i en litteraturliste,
  ikke i et referanseeksempel.
- Boka presenterer begrepsapparatet **på fagets premisser**: begrepet får sin
  egen definisjon under sitt eget navn, uten avsender. Der veiledningene bruker
  et begrep, kan boka bruke det; der de ikke gjør det, velger boka
  standardterminologi og **sier at terminologien kan variere mellom lærebøker**.
  **Terminologinotene er obligatoriske i kap. 1.2, 3.2, 6.1 og 8.4.**
- Boka henviser leseren til **sin egen semesters pensumliste** når oppgaven
  krever forankring.
- **Referanseeksemplene i kap. 9.4 bruker oppdiktede, tydelig merkede
  plassholdere** — «Etternavn, F. (årstall). *Tittel*. Forlag, s. sidetall» —
  aldri en ekte utgave som kunne forveksles med emnets pensum. ⚠ Plassholderne
  skrives med ORDET, ikke med et tall: `s. sidetall`, ikke `s. 44`. Porten i
  §14.5 feller `s. 44`.

**Samtidig er referanseferdigheten selv en godkjenningsbetingelse.** H2024 og
H2025 sier det skarpest: det forventes at **utgave og sidetall oppgis**, og at
man **faktisk refererer til den utgaven man fører opp i litteraturlisten**.
Referansestil ikke fulgt eller kilder ikke oppgitt er dokumentert i **4 av 6
terminer**. Boka lærer altså formen uten å fylle den med ekte titler — det er
hele poenget med kap. 9.4s konsistenssjekk, der leseren skal finne fire avvik
mellom sju tekstreferanser og en litteraturliste som er bygget av plassholdere.

⚠ **Faglitteratur utenfor pensum er lov, men kommer i tillegg til pensum, ikke i
stedet for** (H2024, H2025 — 2 av 6). Boka skal formidle begge halvdeler av
setningen; mange hører bare den første.

### 9.2 PORT N — navneforbudet

Fordi ingen avsender er hjemlet, er **enhver navngitt teoretiker en gjetning
presentert som pensum**. Fristelsen er stor og konkret: narratologiens
begrepsapparat har en opphavsperson, hermeneutikkens horisontbegrep har en, og
mellomspråksbegrepet har en. Boka bruker begrepene og navngir ingen.

**Forbudte navn (hard 0-treff — de mest sannsynlige å bli droppet inn):**

```
Genette|Todorov|Chatman|Booth|Stanzel|Bakhtin|Barthes|Jakobson|Propp|
Gadamer|Schleiermacher|Ricoeur|Dilthey|Heidegger|Saussure|Chomsky|
Kjeldsen|Tønnesson|Aaslestad|Lothe|Skei|Andersen, Øivind|
Faarlund|Vannebo|Enger|Kristoffersen|Kulbrandstad|Golden|Berggreen|Tenfjord|
Selinker|Krashen|Cummins|Labov|Trudgill|Mæhlum|Røyneland|Sandøy|Vikør|Torp|
Kress|van Leeuwen|Norsk referansegrammatikk
```

**Tre unntak, og bare tre:**

1. **Antikke retorikere** (Aristoteles, Cicero, Quintilian) kan nevnes der
   retorikkens tre talesjangre og tre bevismidler presenteres — det er
   faghistorie, ikke en pensumkobling, og ingen utgave eller sidetall følger med.
2. **Ivar Aasen og Knud Knudsen** kan nevnes i kap. 4.1 der de to målformene
   forklares historisk og nøytralt. Samme begrunnelse.
3. **De fem primærtekstforfatterne** — se §9.3, som er strengere.

Alt annet: begrepet står på egne ben. «Skillet mellom historie og diskurs» —
ikke «Genettes skille». «Forståelseshorisont» — ikke «Gadamers
forståelseshorisont».

### 9.3 PORT P — primærtekstene: forfattere og titler bare i kap. 0.1

Fem noveller over fem terminer, fra 1800-tallet til 1980, **null gjentakelser**.
Det er den strategisk viktigste observasjonen om litteraturdelen: **det finnes
ingen tekst å lese seg opp på.** Boka kan ikke trene «novellen» — bare apparatet.

Bindende:

- **Alle øvingstekster i boka er nyskrevne** (§17). Ingenting hentes fra
  primærtekstene.
- **Forfatternavnene og titlene står ETT sted i boka: tabellen i kap. 0.1**, og
  bare som dokumentasjon på at ingen tekst gjentas. De skal ikke dukke opp i
  kap. 6.5s epokeoversikt, i et eksempel eller i en oppgave.
- ⚠ **H2024-veiledningen skriver samme tittel på to måter i samme dokument**
  («Visne blade» / «Visne blader»). **Titler skal derfor kontrolleres mot en
  bibliografisk kilde, ikke mot veiledningen, og merkes med den literale strengen
  `(verifiser)` til det er gjort.** Er en tittel ikke verifisert i fase 6, skal
  den **strykes**, ikke gjettes — tabellen fungerer like godt med forfatternavn
  og termin alene, og det er den formen skjelettet allerede har valgt.
- **Utgivelsesår:** bare tre av de fem tekstene er datert i materialet. Boka kan
  skrive at novellene spenner «fra 1800-tallet til 1980», siden begge endepunkter
  er dokumenterte, men skal **ikke gi årstall for de to udaterte** og aldri
  skrive at alle fem er datert.

```bash
python3 - <<'EOF'
# PORT P — EXFAC03-NORD: primærtekstene bor bare i kap. 0.1, og titlene er merket.
import glob, json, os, re, sys
NAVN = re.compile(r"Askildsen|Grytten|Nedreaas|Kielland|Kjærstad", re.I)
TITTEL = re.compile(r"Spikeren i kirsebærtreet|Interiør med en ung kvinne|"
                    r"Bak skapet står øksen|Visne blade[r]?|Tirsdag i kirken", re.I)
def strenger(o, sti=""):
    if isinstance(o, str): yield sti, o
    elif isinstance(o, dict):
        for k, v in o.items(): yield from strenger(v, f"{sti}.{k}")
    elif isinstance(o, list):
        for i, v in enumerate(o): yield from strenger(v, f"{sti}[{i}]")
avvik, n = [], 0
for p in sorted(glob.glob("src/lib/data/chapters/exfac03-nord-*.json")):
    navn = os.path.basename(p); kap = navn[:-5]
    for sti, s in strenger(json.load(open(p, encoding="utf-8"))):
        for m in list(NAVN.finditer(s)) + list(TITTEL.finditer(s)):
            n += 1
            if kap != "exfac03-nord-0-1":
                avvik.append(f"{navn}{sti}: «{m.group(0)}» står utenfor kap. 0.1")
        for m in TITTEL.finditer(s):
            if kap == "exfac03-nord-0-1" and "(verifiser)" not in s[m.end(): m.end()+40]:
                avvik.append(f"{navn}{sti}: tittelen «{m.group(0)}» mangler (verifiser)")
print(f"PORT P: {n} treff | avvik: {len(avvik)}")
for a in avvik[:30]: print(" -", a)
sys.exit(1 if avvik else 0)
EOF
```

**Testet 6. august 2026:** porten fant treffene i en lovlig 0.1-tabell uten å
klage, og fanget både en tittel og et forfatternavn plassert i kap. 7.4.

⚠ **Fase 6-oppgaven porten ikke kan gjøre:** å faktisk slå opp titlene. Står det
`(verifiser)` igjen når boka gates, skal titlene **strykes** — `sjekk-bok.py`
flagger gjenværende markører.

---

## 10. NIEPUNKTSMETODEN — den navngitte blindsonen

H2025-veiledningen krever at kandidaten viser kunnskap om de temaene fra
**«9-punkts-metoden»** som er valgt ut for analyse, og belønner at utvalget og
bortvalget begrunnes. **Arkivet oppgir ikke hva de ni punktene er.** Metoden
nevnes ved navn og forutsettes kjent fra undervisningen.

Bindende for kap. 8.2 og for kap. 9.11:

1. Boka skal **aldri** presentere en liste på ni punkter og påstå at det er
   metoden.
2. Boka sier **åpent** at emnet opererer med en navngitt niepunktsmodell som
   leseren må hente fra sin egen undervisning. Malen, testet mot
   forbudt-regexen:

   > Emnet opererer med en navngitt niepunktsmodell for sakprosaanalyse.
   > Materialet nevner den ved navn og forutsetter at den er kjent fra
   > undervisningen, men sier ingenting om hva punktene inneholder — så vi vet
   > det ikke, og vi gjetter ikke. Verktøysettet under er **bokas eget og
   > generiske**; det dekker det samme terrenget, men det er ikke modellen. Hent
   > modellen fra din egen undervisning, og bruk verktøysettet til å trene det
   > som faktisk er dokumentert belønnet: å velge ut noen analysespørsmål og
   > begrunne både utvalget og bortvalget.

3. ⚠ **Bokas eget verktøysett har ni felt — og det er en kollisjon som må
   avvæpnes.** Skjelettets begrepskontrakt for kap. 8.2 lister nøyaktig ni
   spørsmålsfelt (avsender · mottaker · formål · situasjon og anledning · sjanger
   · tekststruktur · språklige virkemidler · multimodale trekk · kontekst). En
   leser som møter «ni felt» rett ved siden av «en niepunktsmodell vi ikke
   kjenner», vil konkludere med at boka nettopp har gitt henne modellen.
   **Derfor: alle ni feltene skal stå, men de skal ALDRI telles.** Verktøysettet
   presenteres som en unummerert liste, og formuleringene «ni felt», «de ni
   feltene», «ni punkter», «ni spørsmål» og «alle ni» er forbudt — også i
   kap. 9.11, der skjelettets «alle ni feltene gjennomgått overfladisk» skrives
   om til **«alle feltene gjennomgått overfladisk»**.
4. Ferdigheten veiledningen faktisk beskriver — **utvalg og begrunnet bortvalg**
   — kan trenes fullt ut uten å kjenne listen, og er derfor kapitlets kjerne:
   utvalgsprosedyrens trinn 3, én setning per bortvalgt felt, er det eneste
   leddet som er dokumentert belønnet.

**PORT 9 — niepunktsmetoden:**

```bash
python3 - <<'EOF'
# PORT 9 — EXFAC03-NORD: modellen omtales, aldri gjengis; bokas eget sett telles aldri.
import glob, json, os, re, sys
TELLING = re.compile(r"\bni (felt|punkter|spørsmål|analysespørsmål)\b|de ni feltene|"
                     r"\balle ni\b|\b9 felt\b|\b9 punkter\b", re.I)
NEVNT = re.compile(r"9-punkts|niepunkts|ni-punkts", re.I)
RAMME = re.compile(r"vet ikke|gjetter ikke|ikke modellen|egen undervisning|"
                   r"bokas eget|generisk|forutsettes kjent|sier ingenting om", re.I)
V = 400
def strenger(o, sti=""):
    if isinstance(o, str): yield sti, o
    elif isinstance(o, dict):
        for k, v in o.items(): yield from strenger(v, f"{sti}.{k}")
    elif isinstance(o, list):
        for i, v in enumerate(o): yield from strenger(v, f"{sti}[{i}]")
avvik = []
for p in sorted(glob.glob("src/lib/data/chapters/exfac03-nord-*.json")):
    navn = os.path.basename(p); kap = navn[:-5]
    for sti, s in strenger(json.load(open(p, encoding="utf-8"))):
        for m in TELLING.finditer(s):
            avvik.append(f"{navn}{sti}: «{m.group(0)}» — bokas eget sett skal aldri telles")
        for m in NEVNT.finditer(s):
            if kap not in {"exfac03-nord-8-2", "exfac03-nord-9-11"}:
                avvik.append(f"{navn}{sti}: metoden nevnt utenfor kap. 8.2 og 9.11")
            elif not RAMME.search(s[max(0, m.start()-V): m.start()+V]):
                avvik.append(f"{navn}{sti}: metoden nevnt uten blindsone-rammen")
print(f"PORT 9 avvik: {len(avvik)}")
for a in avvik[:30]: print(" -", a)
sys.exit(1 if avvik else 0)
EOF
```

---

## 11. MODELLBESVARELSER (ærlighet, nivå og variasjon)

### 11.1 Ærlig merking — ufravikelig

- Hver modellbesvarelse innledes med én linje. Malen er testet mot
  forbudt-regexen i §14.5 og gir null treff:

  > **Nyskrevet modellbesvarelse — skrevet av oss for denne boka.** Materialet
  > fra UiO består av seks sensorveiledninger som beskriver hva som kreves for at
  > en mappedel skal godkjennes, men det finnes ingen publiserte besvarelser og
  > ingen fasit for emnet. Dette er derfor ikke en ekte kandidatbesvarelse.

- **En boks som heter «Så vidt godkjent» skal VÆRE så vidt godkjent**, og en som
  heter «Ikke godkjent» skal faktisk mangle det den sier den mangler (§7.3).
  Samme krav gjelder de tre versjonene i kap. 0.2.
- Ordet «studentbesvarelse» står under prosaregel 3 (§14.5) — det er lovlig i
  kildenotens negasjon («arkivet inneholder ingen studentbesvarelser») og forbudt
  som beskrivelse av bokas egne tekster.
- **Bestillingene er nyskrevne, også når de ligner.** Alle ord, setninger,
  noveller, dikt, avistekster og sakprosatekster er våre egne (§17).

### 11.2 Meta-fasit er FORBUDT

«En god besvarelse ville her ha drøftet …» er en regibemerkning, ikke en fasit.
**Analysen og drøftelsen skal skrives UT** — kort, skarp, forankret, med landing.
Grep-sjekkes: `en god besvarelse ville|en sterk besvarelse ville|en godkjent
besvarelse ville|ville ha drøftet|ville her ha` = 0 treff.

Margnotater er lov og ønsket, men de skal **peke på tekst som faktisk står der**:

```
> Margnotat: her navngis det med fagterm at flertydigheten skyldes homonyme affikser — ikke bare at ordet «kan leses på to måter». Det er dette skillet skjelettets kap. 2.5 kaller å behandle flertydigheten i stedet for å nevne den.
```

### 11.3 Nivåfordeling og profilvariasjon (bindende)

| Kapittel | Versjoner som SKAL finnes | Profil |
|---|---|---|
| 0.2 | samme korte bestilling **tre ganger**: ikke godkjent · så vidt godkjent · klart over minstekravet | den midterste er poenget — den viser hvor terskelen ligger |
| 9.1–9.7 | momentliste (ikke godkjent / godkjent / klart over minstekravet) på hver oppgave | — |
| **9.8** (morfologi og syntaks) | klart over minstekravet + ikke godkjent | den sterke versjonen viser **oppsettet**: analysen skal kunne leses uten prosa |
| **9.9** (novelleanalysen) | klart over minstekravet + **så vidt godkjent** + ikke godkjent | den sterke **lander SKARPT** (§7.3); den midterste er DNA-kravet |
| **9.10** (språkendringsessayet) | klart over minstekravet + ikke godkjent | den sterke er en **sammenhengs-modell**: hvert eksempel koblet til nivået det illustrerer, og drøftingsleddet har plass igjen |
| **9.11** (sakprosa med retorikk) | klart over minstekravet + ikke godkjent | den sterke er en **utvalgs-modell**: tre felt analysert, resten bortvalgt med én linje hver |

**Dybde mot bredde er ikke pynt.** 9.11 skal ha et margnotat som sier eksplisitt
at et annet utvalg av felt ville vært like godt — det er hele poenget med
H2023s krav om at kandidaten må velge, og at å prøve å dekke alt ikke er en
styrke.

### 11.4 Konklusjonsvariasjon (bindende)

- **Kap. 9.9 skal konkludere SKARPT:** den sterke versjonen tar klart standpunkt
  til hva teksten handler om, skriver begrunnelsen ut — og er likevel klart over
  minstekravet. Margnotat: «Forbehold er et verktøy, ikke obligatorisk garnityr.
  En skarp, begrunnet tolkning er fullgod.»
- **Grensetilfelle-trening (DNA-krav):** minst to steder i boka skal en oppgave
  ha to fullt forsvarlige svar, der fasiten skriver **UT begge lesningene** og
  merker oppgaven **«(flertydig — begge analysene skal skrives ut)»** eller
  **«(tvetydig — begge analysene skal skrives ut)»**. Plasseringen er gitt av
  skjelettet: **kap. 2.5** (seks ord, to av dem bare tilsynelatende flertydige),
  **kap. 3.4** (fire setninger, én bare tilsynelatende tvetydig), **kap. 4.3**
  (to endringer der både intern og ekstern forklaring er forsvarlig) og
  **prøve 3 i del 2 og del 3**. Fasitene skal merke det motsatte tilfellet like
  tydelig: **«(bare én analyse holder)»**.
- Ikke alle modellbesvarelser skal lande på samme kompromissform. 9.10 og 9.11
  kan lande mer avveiende, men må da begrunne selve avveiningen.

---

## 12. Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»; SKAL i førsteutkastet)

- **Kun eksamensrelevant stoff.** «Bør kjenne til»-stoffet (fonetikk og fonologi
  i kap. 1.3, estetikk i 6.2, humanioraperspektivet i 6.4, kritikk som historisk
  note i 6.2, setningsskjema i 3.1) plasseres SIST i sitt kapittel og merkes
  eksplisitt med sin lave frekvens. ⚠ Merkingen betyr færre minutter, aldri at
  stoffet kan utelates (§7.2).
- **HARDT LINJEBRUTT PROSA ER FORBUDT (rendrings-kritisk).** Rendreren gjør HVERT
  enkelt `\n` om til `<br />`. Regelen: **ett avsnitt = én lang linje i
  JSON-strengen**, `\n\n` mellom avsnitt, og enkelt `\n` KUN der linjeskiftet
  faktisk er ønsket (deloppgaver, listelinjer, tabellrader, margnotater,
  analyseoppsett, flervalgsalternativer). Gjelder `content`, `problem`,
  `solution`, `task` og `hints`.
- **Godt, flytende norsk bokmål (UFRAVIKELIG).** Hele setninger, korte avsnitt
  (2–4 setninger), aktiv «du»-form. Telegramstil er FORBUDT — «Morf 1: rot.
  Morf 2: avledningssuffiks.» skrives «Den første morfen er roten, og den andre
  er et avledningssuffiks». Konkret norsk knagg før fagtermen; presisjon vinner
  ved tvil. Fremmedord og latinske uttrykk (analepse, prolepse, epideiktisk,
  idiolekt) får norsk forklaring først, termen i parentes ved første bruk per
  kapittel. ⚠ **Dette er dessuten selve kapittel 9.6s emne** — en bok som
  skriver tungt om språkføring, motsier seg selv.
- **Ingen uforklart sjargong.** Fagstoffet er nybegynnervennlig — det er
  METAspråket som må ryddes. Sjangerkodene ANA/RED/TEK/ESS, fallgruvekodene
  #1–#15 og mappeterminologien (mappe, delmappe, deloppgave, utkast, respons,
  ikke gradert skala) forklares i klarspråk ved FØRSTE bruk **per kapittel**.
  Ingen kald kode i `competenceGoals` eller i kapitlets aller første tekstboks.
  **Leseren er i sitt første semester.**
- **Hver oppgave synlig eksamensforankret** med sjangerens navn i ledende
  parentes:
  `(Mappesjanger analyse av språklig materiale — ANA; slike bestillinger ber deg både dele ordet i morfer og klassifisere hver morf, og forklare flertydigheten der den finnes.)`
  ⚠ **Ordet er «mappesjanger», ikke «eksamenssjanger»** — emnet har ingen
  eksamen. Sjangerkoden skrives fullt ut ved første bruk per kapittel.
  Vanskelighetsgraden skrives ALDRI inn i `task` (den ligger i `difficulty`).
- **Deloppgaver merkes a), b), c) — ALDRI (i), (ii), (iii).** Ufravikelig
  produkteierregel. Hver deloppgave starter på **egen linje med merket i fet**:
  `…\n\n**a)** …\n**b)** …`. ALDRI a) b) c) bak hverandre i løpende tekst, aldri
  A)/[A]. Ikke bruk `subTasks`. Eneste unntak: lister av SELVSTENDIGE påstander
  (§5.6). ⚠ Retter du noe her, må oppgave OG fasit rettes samtidig, og
  prosahenvisninger uten parentes («i ledd ii og iii») byttes ikke av et søk
  etter `(ii)`.
- **Inline-nummerering** `(1) … (2) … (3) …` med tre eller flere påfølgende settes
  på egne linjer. Gjelder særlig segmenteringens fire trinn, de tre
  avledningstestene, flertydighetsbehandlingens fire trinn, testprotokollens tre
  trinn, tvetydighetsprotokollens fire trinn, de tre hovedaspektene, de fem
  språklige nivåene, de tre talesjangrene, de tre appellformene,
  ordlydsprosedyrens fem trinn, referansehåndverkets seks grep og
  responsprosedyrens fem trinn.
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. 2.5](/exfac03-nord/exfac03-nord-2-5)`. Død «se kapittel
  X.Y»-tekst er FORBUDT. Aldri lenker i `title`-felt.
- **Realisme uten karakterer:** Del 0 sier eksplisitt at **godkjent er målet,
  ikke perfeksjon** (§7.2). «Prioritet: perfekt» er forbudt. Ingen
  karakterbokstaver noe sted.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter HVER øvelsesfasit og etter
  hvert Sensorblikk i modellbesvarelsene — bruk rubrikkene i §6.4. I hvert
  temakapittel: minst én **lett innstegsoppgave** tidlig (`difficulty: "lett"`,
  ren gjengivelse med egne ord, vennlig fasit) før første fulle mappesjanger.
- **Hverdagsanker + verdens-caser:** abstrakte kjernetemaer åpner med et konkret
  anker FØR apparatet — skjelettet gir dem der de er viktigst (kap. 1.1: én
  setning fra en nyskrevet sms analysert på tre nivåer; kap. 4.1: fire ytringer
  som sier det samme på fire måter; kap. 6.1: samme korte tekst lest med to
  oppgitte forforståelser). Legg tilsvarende ankere i 2.1 (hvorfor deler vi ord i
  deler i det hele tatt?), 3.1 (hvorfor følger ikke leddgrensene ordgrensene?) og
  7.2 (hvorfor forteller ikke tekster i den rekkefølgen ting skjedde?).
  Eksemplene er verdens-caser — ALDRI metaeksempler av typen «en medstudent
  skriver …».
- **Difficulty-spredning + kald bank:** boka skal ha genuint krevende oppgaver
  merket `difficulty: "vanskelig"` (og «(krevende)» i oppgaveteksten der det
  hjelper), ikke alt på middels. Minst én `vanskelig` per temadel. Én merket
  **kald bank** i hvert av drillkapitlene 2.6, 3.5 og 7.6 (§5.3).
- **Hint på alle oppgaver:** hvert `exercise` har utfylte `hints`. Første hint =
  hvilket prosedyretrinn, hvilken test eller hvilket begrep oppgaven krever
  («Start med å finne roten i hvert ledd — bøyingen tas av sist») — **ALDRI
  konklusjonen**. Eneste unntak er de tre kalde bankene.
- **Stokket flervalg og varierte fasitmønstre:** statiske flervalg i
  øvelses-`collapsible`-er har stokkede fasitbokstaver (ALDRI «alle a»), og
  åpnings-tipen sier hvor flervalget bor. Gjelder ALLE ensartede fasitlister,
  også flertydig/ikke-flertydig-listene, tvetydig/entydig-listene og «hvilken
  fallgruve er dette»-drillen i 9.7 — **aldri «alle felle»**, aldri samme fasit
  to ganger på rad. Verifiseres med `sjekk-fasitfordeling.py` (terskel 45 %).
- **Distraktorer straffer aldri grundig lesing:** en distraktor gjengir ALDRI
  bokas egen presisering som «galt» svar. Ligger en distraktor nær sannheten
  (typisk: «fugeformativen er en rot», «et negativt testresultat beviser at
  ordgruppen ikke er et ledd», «analepse er ethvert brudd på kronologien»,
  «morsmål og førstespråk betyr det samme»), skal `explanation` eller
  fasitkommentaren forklare eksplisitt hvorfor den ikke holder.
- **Signal-/hintbokser ETTER oppgaven:** en boks som varsler hva en drilloppgave
  tester («her ligger fallgruve #10»), plasseres ETTER oppgaven eller som
  collapsible hint, aldri foran. Gjelder særlig flertydighetsdrillene i 2.5, 3.4
  og prøve 3 i del 2 og 3 — drillen skal teste radaren, ikke oppslaget.
- **Frekvenstall = §6.2.** Ingen egne opptellinger, ingen «N av M» uten belegg i
  §6.2, ingen omregning.
- **Begrepsbank = oppslagsverk:** hver stor begrepsbank og hver notasjons- og
  begrepsliste åpner med standardnotisen: «Begrepsbanken er
  flashcard-/repetisjonsstoff — den gjentar det du nettopp har lest. Hopp trygt
  over ved førstegangslesing; tidsanslaget for kapitlet gjelder kjernestoffet.»
  `definition`-blokker slettes ALDRI for å «rydde» — de er flashcard-kilden.
- **Øktmerking:** **44 av de 48 kapitlene har `estimatedMinutes > 45`** — de fire
  unntakene er **0.1 (40), 1.3 (40), 6.4 (45) og 9.1 (45)**, talt i skjelettet
  6. august 2026. De 44 skal ha
  tidsanslag i underoverskriftene («## Fugeformativen (~12 min)») eller
  eksplisitte «— naturlig pausepunkt —»-markører. Lange modellbesvarelser har
  pausepunkt mellom deloppgavene og hoveddelene. ⚠ Overskriften bærer NAVNET,
  aldri løkkenummeret (§1).
- **Tidsbudsjett-konsistens:** der en øvelses deklarerte arbeidstid avviker fra
  summen av deltidene, forklares differansen (§6.6). «Kort tid til
  innlevering?»-boksen sier eksplisitt at kapitlenes tidsanslag er **LESEtid**,
  og at skrivetiden for en mappedel kommer i tillegg.

### 12.1 Del 0-pakken (alt dette SKAL finnes i kap. 0.1, der ikke annet er sagt)

- **«Slik leser du denne boka»-orienteringsboks** (type `text` eller `tip` —
  **ALDRI `definition`**, det ville endret flashcard-kvoten) med: at skalaen er
  **bestått eller ikke bestått** og ikke gradert, at **godkjent er målet, ikke
  perfeksjon**, de tre registrene skrevet ut med kjennetegn, de fire
  sjangerkodene ANA, RED, TEK og ESS skrevet fullt ut, og at fallgruvene har et
  samlet register (#1–#15) med eget kapittel (9.7).
- **«Kort tid til innlevering?»-boks** (`tip`): en 3–5-dagers redningsrute for
  **én mappedel** — ikke for hele boka, siden mappen leveres i deler — med
  kapittelrekkefølge og timeanslag summert fra `estimatedMinutes`. **Summen av
  de 48 kapitlene er eksakt 2 720 minutter ≈ 45 timer lesetid.**
- **Deltidsrute 10–12 uker** lagt rundt utkastfristene, med mappeøvelsene fordelt
  underveis og modellbesvarelsene de siste to ukene — aldri stablet i siste uke.
  ⚠ Materialet oppgir ingen frister; boka ber leseren finne sine egne på
  emnesiden.
- **«Lese mye, skrive lite»-boks:** legitim rute for lese-øveren (les
  bestillingen → sett opp analysen eller disposisjonen mentalt i to setninger →
  les modellbesvarelsen som sensor) + minimumsrådet: skriv minst ÉN full
  morfologisk og syntaktisk analyse med oppsett, og ÉN full novelleanalyse med
  passasje til hver påstand.
- **Kildenoten** — ordlyden i §6.1.1, aldri utvidet.
- **Frekvenstabellen** som leserens prioriteringskart, med nevner og enhet
  skrevet ut: morfologisk og syntaktisk analyse **5 av 5 terminer** ·
  novelleanalyse **5 av 5** · essayet som sjanger **5 av 5** · språkendring som
  essaytema **4 av 5** · avistekstdrøftingen **4 av 5** · andrespråksterminologi
  **2 av 5** · retorisk analyse **2 av 5** · sakprosa, lyrikk og resepsjon
  **1 av 5** hver. Alle i gjeldende regime.
- **Novelletabellen** — fem terminer, fem forfattere, **null gjentakelser**, med
  den ene setningen som betyr mest: *det finnes ingen tekst å lese seg opp på.*
  Titlene merket `(verifiser)` (§9.3).
- **Sjangerkortet på ÉN side** som ER kortet: sjanger → én linjes oppskrift →
  hvilken mappedel den hører til → vanligste fallgruve. Ikke en lenkeliste.
- **Mappens form og de to felleveiene** (§6.4 og §8.2), med formhistorikken kort
  og eksplisitt merket, og med regelen skrevet uten tall.
- **Språkføringsboksen** (§6.4) — den selvstendige grunnen til ikke godkjent i et
  emne med ubegrenset tid og alle hjelpemidler. Dette er opplysningen som
  overrasker flest.
- **Leseruta** som viser hvordan del 2–3 og del 7 leses parallelt fram mot første
  delmappe, og del 4–5 og del 8 fram mot andre. ⚠ Delene er ikke tenkt lest i
  tallrekkefølge av alle.
- **Målformnoten** (§14.1) — oppgaveteksten kan komme på nynorsk.
- **«Hva vi ikke vet»-boksen** — de to blindsonene skrevet ut for leseren:
  oppgaveordlyden for fem av seks terminer, og innholdet i niepunktsmetoden. Med
  den praktiske konsekvensen: finn din egen semesters oppgavetekst, og les den
  før du bruker denne boka til noe annet enn å trene ferdigheter.

---

## 13. Kvotekontrakt (AUTORITATIV — bindende total, aldri overstyr)

Verifisert 6. august 2026 ved å lese de 48 kapittelblokkenes egne «Kvote:»-linjer
programmatisk: **alle ti deltotaler og alle tre totaler stemmer eksakt.**

| Del | Kapitler | Quiz | Flashcards | Minutter | Mappeøvelser |
|---|---|---|---|---|---|
| 0 | 0.1–0.2 | 26 | 22 | 95 | 0 |
| 1 | 1.1–1.3 | 60 | 60 | 155 | 4 |
| 2 | 2.1–2.6 | 138 | 120 | 380 | 4 |
| 3 | 3.1–3.5 | 112 | 94 | 310 | 4 |
| 4 | 4.1–4.4 | 92 | 90 | 235 | 4 |
| 5 | 5.1–5.2 | 44 | 44 | 110 | 4 |
| 6 | 6.1–6.5 | 104 | 104 | 265 | 4 |
| 7 | 7.1–7.6 | 132 | 120 | 355 | 4 |
| 8 | 8.1–8.4 | 92 | 92 | 230 | 4 |
| 9 | 9.1–9.11 | 126 | 78 | 585 | 4 |
| **Sum** | **48 kap.** | **926 ✓ (≥500)** | **824 ✓ (≥500)** | **2 720** | **36** |

Per kapittel (quiz · flashcards · minutter) — **minimum, aldri under;
overskyting er lov**:

| Kap. | Q · F · min | Kap. | Q · F · min | Kap. | Q · F · min |
|---|---|---|---|---|---|
| 0.1 | 12 · 10 · 40 | 3.2 | 28 · 26 · 70 | 7.1 | 26 · 26 · 65 |
| 0.2 | 14 · 12 · 55 | 3.3 | 22 · 18 · 55 | 7.2 | 24 · 24 · 60 |
| 1.1 | 20 · 20 · 50 | 3.4 | 18 · 14 · 50 | 7.3 | 22 · 22 · 55 |
| 1.2 | 26 · 26 · 65 | 3.5 | 18 · 10 · 70 | 7.4 | 22 · 20 · 55 |
| 1.3 | 14 · 14 · 40 | 4.1 | 24 · 24 · 60 | 7.5 | 20 · 18 · 50 |
| 2.1 | 26 · 26 · 70 | 4.2 | 26 · 26 · 65 | 7.6 | 18 · 10 · 70 |
| 2.2 | 24 · 22 · 60 | 4.3 | 22 · 22 · 55 | 8.1 | 22 · 22 · 55 |
| 2.3 | 26 · 24 · 65 | 4.4 | 20 · 18 · 55 | 8.2 | 24 · 24 · 60 |
| 2.4 | 24 · 22 · 60 | 5.1 | 22 · 22 · 55 | 8.3 | 22 · 22 · 55 |
| 2.5 | 20 · 16 · 55 | 5.2 | 22 · 22 · 55 | 8.4 | 24 · 24 · 60 |
| 2.6 | 18 · 10 · 70 | 6.1 | 24 · 24 · 60 | 9.1 | 14 · 8 · 45 |
| 3.1 | 26 · 26 · 65 | 6.2 | 20 · 20 · 50 | 9.2 | 14 · 10 · 55 |
| | | 6.3 | 22 · 22 · 55 | 9.3 | 14 · 8 · 55 |
| | | 6.4 | 16 · 16 · 45 | 9.4 | 16 · 10 · 55 |
| | | 6.5 | 22 · 22 · 55 | 9.5 | 12 · 8 · 50 |
| | | | | 9.6 | 14 · 8 · 50 |
| | | | | 9.7 | 18 · 10 · 55 |
| | | | | 9.8–9.11 | 6 · 4 · 55 hver |

**Bindende total: quiz 926 · flashcards 824 · 2 720 minutter.** Flashcards telles
som **toppnivå `definition`-blokker med `title`**. Prøvekapitler har ingen kvote
(ingen quiz, ingen begrepsbank).

**Hvorfor quiz-kvoten er høy i et emne uten flervalgsoppgaver.** Arkivet
inneholder **null** flervalgsspørsmål — ikke fordi de er tapt, men fordi
vurderingsformen ikke har dem. Quiz-banken forsvares derfor på et annet grunnlag,
og boka skal si det åpent i kap. 0.1: **6 av 6** veiledninger krever beherskelse
av faglige begreper og korrekt anvendelse av relevant fagterminologi, og i en
mappe med alle hjelpemidler er det nettopp **presisjonen** i begrepsbruken som
måles, ikke tilgangen til begrepene. **Boka påstår aldri å ha trent på tidligere
flervalgsoppgaver, og aldri at emnet har en flervalgsdel.**

**Del 9 har lav flashcardkvote med vilje:** håndverkskapitler produserer få
definisjoner, og de som finnes, skal være ekte fagbegreper.
«Bestått-på-marginen», «endringsliste» og «utkast» er ikke fagbegreper og skal
ikke være `definition`-blokker.

### 13.1 Quiz-filformat

`src/lib/data/quiz-staging/exfac03-nord-<del>-<nr>.quiz.json`:

```json
[{ "question": "…", "options": ["riktig", "distraktor", "distraktor", "distraktor"], "explanation": "…" }]
```

Nøyaktig **4 alternativer**, `options[0]` **ALLTID** riktig. **Runtime stokker
rekkefølgen**, så `explanation` skal ALDRI si «alternativ to», «det tredje
alternativet», «svaret over» eller «det siste alternativet» — gjenta innholdet i
stedet: «Riktig svar er at morfen er den konkrete biten i et konkret ord, mens
morfemet er den abstrakte enheten den realiserer …». **Posisjonsreferanser er en
hard produkteierregel.** Ingen duplikate alternativer. `explanation` på 2–4
setninger sier hvorfor fasiten er riktig OG hvilken felle hver nære distraktor
tester.

**LENGDE-TELL (hard produkteierregel):** fasiten skal **verken være det lengste
eller det korteste** alternativet systematisk. Alle fire alternativer skal ha
jevn lengde og presisjonsgrad — en leser som «velger det lengste» skal treffe
~25 %, ikke 77 %.

⚠ **Dette MÅLES, og førsteutkast lander erfaringsmessig på 60–80 %.** Grunnen er
strukturell: fasiten i et begrepsfag er den presise definisjonen, og presisjon
koster ord, mens en distraktor er lett å skrive kort. **Rettemåten er å FORLENGE
DISTRAKTORENE**, ikke å trimme fasiten til den blir upresis — en distraktor skal
være en fullverdig, plausibel definisjon som er gal på ett punkt. ⚠ Og her er det
ekstra kritisk: emnet har ingen flervalgsdel, så quizen er ren begrepstrening.
En bank der fasiten er gjenkjennelig på lengden, trener ikke presisjon i det hele
tatt — den trener en gjettestrategi som ikke finnes noe sted i vurderingen.

**PORT Q — quiz i staging (testet 6. august 2026: fanget både posisjonsreferansen
og lengde-tellet i en fikstur):**

```bash
python3 - <<'EOF'
# PORT Q — EXFAC03-NORD: quizform, posisjonsreferanser og LENGDE-TELL, målt i staging.
import glob, json, os, re, sys
POS = re.compile(r"alternativ(et)?\s+(én|en|to|tre|fire|1|2|3|4)\b|"
                 r"(første|andre|tredje|fjerde|siste|øverste|nederste)\s+alternativ|"
                 r"svaret (over|under)|alternativet (over|under)", re.I)
avvik, tot, lengst, kort = [], 0, 0, 0
for p in sorted(glob.glob("src/lib/data/quiz-staging/exfac03-nord-*.quiz.json")):
    n = os.path.basename(p)
    for i, q in enumerate(json.load(open(p, encoding="utf-8")), 1):
        tot += 1; o = q.get("options", [])
        if len(o) != 4: avvik.append(f"{n} #{i}: {len(o)} alternativer, skal være 4")
        if len(set(o)) != len(o): avvik.append(f"{n} #{i}: duplikate alternativer")
        if POS.search(q.get("explanation", "")): avvik.append(f"{n} #{i}: posisjonsreferanse")
        if o:
            L = [len(x) for x in o]
            if L[0] == max(L) and L.count(max(L)) == 1: lengst += 1
            if L[0] == min(L) and L.count(min(L)) == 1: kort += 1
pct = 100 * lengst / tot if tot else 0
print(f"PORT Q: {tot} spørsmål (kvote 926) | fasit lengst: {lengst} ({pct:.0f} %) | "
      f"fasit kortest: {kort} | formavvik: {len(avvik)}")
for a in avvik[:30]: print(" -", a)
if pct > 35: print(f"  ! LENGDE-TELL {pct:.0f} % > 35 % — FORLENG DISTRAKTORENE, ikke trim fasiten")
sys.exit(1 if avvik or pct > 35 else 0)
EOF
```

Etter wiring kjøres i tillegg `node scripts/hoyskolebok/quiz-lengdesjekk.mjs
exfac03-nord` og `python3 scripts/hoyskolebok/sjekk-alternativref.py
exfac03-nord` — begge leser `quiz-data-exfac03-nord.ts` og virker derfor **ikke**
før fase 5. ⚠ Tell quiz-staging mot antall temakapitler **FØR** wiring: en
quizfil skrevet etter wiringen blir ikke med, og bokporten er grønn likevel.

**Distraktor-kalibrering** — nabobegrep-distraktorer, aldri tullesvar: morf mot
morfem · rot mot affiks mot fugeformativ · sammensetning mot avledning mot bøying
· leksikalsk mot grammatisk morf · forledd mot etterledd mot hode · nullmorf mot
fravær av bøying · subjekt mot objekt mot predikativ mot adverbial · funksjon mot
ordklasse mot frasetype · flytteprøve mot utskiftingsprøve · strukturell mot
leksikalsk tvetydighet · dialekt mot sosiolekt mot register mot idiolekt · intern
mot ekstern årsak · de fem endringsnivåene mot hverandre · betydningsutvidelse
mot -innsnevring mot -forskyvning · morsmål mot førstespråk mot andrespråk mot
fremmedspråk · transfer mot mellomspråk mot fossilisering · historie mot diskurs
· analepse mot prolepse mot ellipse · scene mot sammendrag mot pause · motiv mot
tema · fortellerinstans mot synsvinkel · rettstale mot epideiktisk mot
deliberativ tale · etos mot patos mot logos · parafrase mot analyse. I tillegg
«hvilket apparat ber denne ordlyden om»-spørsmål og «hvilken fallgruve er
dette»-spørsmål.

### 13.2 Flashcard-profil

Hovedvekten ligger på **begrep ↔ kontrastbegrep ↔ hva det brukes til**, fordi det
er nøyaktig presisjonen redegjørelses- og analysedelene måler. Korttyper:

1. **Morftype-kort** — morftype ↔ hva som kjennetegner den ↔ hvor i ordet den
   står.
2. **Orddanningskort** — orddanningsmåte ↔ sammensetning, avledning eller bøying
   ↔ testen som skiller.
3. **Leddkort** — setningsledd ↔ syntaktisk funksjon ↔ hvordan den påvises.
4. **Testkort** — konstituenttest ↔ hva et positivt resultat viser ↔ hva et
   negativt IKKE viser.
5. **Endringskort** — endringstype ↔ hvilket språklig nivå ↔ eksempel; og
   årsakstype ↔ intern eller ekstern ↔ mekanisme.
6. **Andrespråkskort** — termen ↔ kriteriet den hviler på ↔ hva som gjør den
   omstridt.
7. **Narratologikort** — begrep ↔ hva det beskriver ↔ hvilket spørsmål det svarer
   på.
8. **Retorikkort** — begrep ↔ hva det påviser ↔ hva forankringen krever.

⚠ **Ingen avsender i `title`.** SVEXFAC03s form «Begrep (Forfatter)» er forbudt
her (§9.1). `title` er begrepet alene.

**Definisjoner genereres KUN fra toppnivå `definition`-blokker med `title`** —
begrepsbankene skal derfor ligge på toppnivå, ikke inne i collapsibles.

---

## 14. Fagspesifikk stil (ufravikelig for EXFAC03-NORD)

### 14.1 Notasjonsstandard

- **Norsk bokmål. Emnet er FORMELFRITT: ingen matematisk notasjon, ingen `$…$`
  noe sted** — verken escapet eller uescapet. Boka har ingen matte i det hele
  tatt, så et dollartegn kan bare være en feil. Kravet om «Symbol- og
  formelliste» er dermed ikke relevant (README-unntaket for symbolfrie fag, og
  `sjekk-bok.py` krever navnet bare i kapitler med LaTeX-symboler): hvert
  kapittel har `collapsible` **«Notasjons- og begrepsliste»** i stedet (§5.2).
- **Morfsegmentering skrives i ren tekst med bindestrek:** `u-hør-lig`,
  `bok-hylle`, `sol-e-formørkelse`. Morfgrenser i sammensetninger markeres på
  samme måte. Hierarkisk struktur skrives med vanlige parenteser:
  `((sol)(e)(formørkelse))`. Ingen spesialtegn, ingen tabellgrafikk.
- **Syntaktiske forkortelser skrives ut** — subjekt, verbal, direkte objekt,
  indirekte objekt, predikativ, adverbial — før eventuelle korte former brukes i
  en tabell, og forkortelsen forklares i notasjonslisten.
- **Ingen IPA-tegn.** Kap. 1.3 er et orienteringskapittel på kjenne-nivå og skal
  beskrive lyder med vanlige norske bokstaver og ord («lyden i begynnelsen av
  *sjø*»), aldri med lydskrift. IPA hører i `exfac03-spr`, ikke her. Port i
  §14.3.
- **Tallformat:** norsk desimalkomma, prosent med mellomrom («25 %»). Terminer
  skrives «H2024» (aldri «h24», aldri «høsten -24»). Årstall i litteratur- og
  språkhistorie skrives som vanlige tall («1879», «1800-tallet») — de er lovlige,
  jf. §6.3.
- **Verktitler** skrives med «anførselstegn» i `title`-felter og i kursiv i
  brødtekst. **Aldri sidetall, aldri utgaveangivelser** (§9.1).
- **Målformbevissthet (obligatorisk).** Emnet er nordisk språk, og
  H2021-oppgavesettet finnes på **både bokmål og nynorsk**. Bokmålsutgaven skal
  derfor si eksplisitt at **oppgaveteksten kan komme på nynorsk**, og at leseren
  kan svare på sin egen målform — men konsekvent, siden konsekvent målform er en
  del av språkføringen (kap. 9.6). Setningen skal stå **både i kap. 0.1 og i
  kap. 9.6**; porten i §14.5 måler det. Nynorskutgaven av boka lages i
  sidecar-laget som vanlig og er ikke denne kontraktens ansvar.
- **Skrivemåter (grep-konsistens):** «morf» / «morfem» · «rot» · «affiks» /
  «prefiks» / «suffiks» · «fugeformativ» · «bunden» / «fri morf» · «leksikalsk» /
  «grammatisk morf» · «nullmorf» · «sammensetning» / «avledning» / «bøying» ·
  «forledd» / «etterledd» / «hode» · «leksem» / «ordform» · «produktiv» /
  «uproduktiv avledning» · «leksikalisering» · «bøyingsparadigme» · «omlyd» /
  «suppletive former» · «strukturell flertydighet» · «homonyme affikser» ·
  «reanalyse» · «setningsledd» · «konstituent» · «frase» / «hode» / «utfylling» ·
  «syntaktisk funksjon» · «subjekt» / «verbal» / «direkte objekt» / «indirekte
  objekt» / «predikativ» / «adverbial» · «formelt subjekt» / «potensielt
  subjekt» · «flytteprøven» / «utskiftingsprøven» · «velformethet» ·
  «strukturell» / «leksikalsk tvetydighet» · «tilknytningstvetydighet» ·
  «synkron» / «diakron språkvitenskap» · «variasjon» · «dialekt» / «sosiolekt» /
  «register» / «idiolekt» · «norm» / «normering» · «variabel» / «variant» ·
  «lydendring» / «morfologisk» / «syntaktisk» / «leksikalsk» / «semantisk
  endring» · «grammatikalisering» · «analogi» · «betydningsutvidelse» /
  «-innsnevring» / «-forskyvning» · «interne» / «eksterne årsaker» ·
  «språkkontakt» · «prestisje» / «skjult prestisje» · «forfallssynet» /
  «framskrittssynet» / «det deskriptive synet» · «språkrøkt» / «purisme» ·
  «morsmål» / «førstespråk» / «andrespråk» / «fremmedspråk» · «simultan» /
  «suksessiv tospråklighet» · «kodeveksling» · «transfer» · «mellomspråk» ·
  «fossilisering» · «innputt» · «fortolkning» / «hermeneutikk» · «den
  hermeneutiske sirkelen» · «forståelseshorisont» / «forforståelse» ·
  «horisontsammensmelting» · «estetikk» · «virkemiddel» · «fortetting» ·
  «sjanger» / «undersjanger» / «sjangerhybrid» / «sjangerbrudd» · «epikk» /
  «lyrikk» / «dramatikk» · «epoke» / «periodisering» · «resepsjon» / «kanon» /
  «forfatterskap» · «narratologi» · «fortellerinstans» / «synsvinkel» ·
  «allvitende» / «begrenset» / «utenforstående» · «ustabil fortellerinstans» ·
  «fri indirekte tale» · «historie» / «diskurs» · «anakroni» / «analepse» /
  «prolepse» · «varighet» / «scene» / «sammendrag» / «pause» / «ellipse» ·
  «frekvens» / «singulativ» / «repetitiv» / «iterativ» ·
  «narrasjonsforlengende beskrivelse» · «komposisjon» / «parallellstruktur» /
  «sirkelkomposisjon» / «rammefortelling» · «vendepunkt» / «åpen slutt» ·
  «motiv» / «tema» / «ledemotiv» · «lyrisk jeg» / «strofe» / «verselinje» /
  «rimskjema» / «enjambement» / «sonett» / «gjendiktning» · «sakprosa» ·
  «retorikk» / «den retoriske situasjonen» / «kairos» · «rettstale» /
  «epideiktisk tale» / «deliberativ tale» · «bevismidler» / «appellformer» /
  «etos» / «patos» / «logos» · «multimodalitet» · «mappe» / «delmappe» /
  «deloppgave» · «utkast» / «respons» / «revisjon» · «ikke gradert skala» ·
  «kunnskapsinnhold» / «problemløsing og kritisk innsikt» / «språkføring» ·
  «pensumforankring» / «referansestil» / «litteraturliste».

### 14.2 Sjangerkodene (introduseres i kap. 0.1, skrives fullt ut ved første bruk per kapittel)

**Kodene er byggespråk og skal ALDRI stå alene.** Skriv alltid sjangerens navn
først, koden i parentes.

| Kode | Navn som skal brukes | Hva det er |
|---|---|---|
| **ANA** | analyse av språklig materiale | Den eneste delen av emnet der svaret kan være riktig eller galt. Morfsegmentering, klassifisering, leddidentifikasjon, syntaktisk funksjon, konstituenttester. **5 av 5 terminer** i gjeldende regime |
| **RED** | redegjørelse | Begrepsavklaring med presis terminologi: definer, kontrastér, problematisér. **2 av 5 terminer**. H2025 hever sjangeren — ren definisjonsgjengivelse holder ikke der |
| **TEK** | tekstanalyse | Apparat brukt på en konkret tekst. Ikke ett riktig svar, men klart utilstrekkelige svar. **5 av 5 terminer** |
| **ESS** | essay | Sammenhengende drøftende tekst med innledning, hoveddel og avslutning. **5 av 5 terminer** |

### 14.3 PORT L — formelfritt og lydskriftfritt (testet 6. august 2026)

Kjørt mot fikstur: den fanget både et bart dollartegn og en IPA-glyf, og slapp
gjennom «særegen», «ærlig», «århundre» i dekomponert form, «u-hør-lig», «morfgrense
–» og «2019–2025». ⚠ **`æ` ble tatt UT av tegnlista** — den er en helt vanlig
norsk bokstav, og den første versjonen av porten flagget «særegen» og «Kjærstad».

```bash
python3 - <<'EOF'
# PORT L — EXFAC03-NORD: ingen LaTeX, ingen lydskrift.
import glob, json, os, re, sys
IPA = re.compile(r"[ɐ-ʯʰ-˿]|[ʃʒŋɛɔʉəɑɪʊçʁðθː]")
def strenger(o, sti=""):
    if isinstance(o, str): yield sti, o
    elif isinstance(o, dict):
        for k, v in o.items(): yield from strenger(v, f"{sti}.{k}")
    elif isinstance(o, list):
        for i, v in enumerate(o): yield from strenger(v, f"{sti}[{i}]")
avvik = []
for p in sorted(glob.glob("src/lib/data/chapters/exfac03-nord-*.json")):
    n = os.path.basename(p)
    for sti, s in strenger(json.load(open(p, encoding="utf-8"))):
        if "$" in s: avvik.append(f"{n}{sti}: dollartegn — boka er formelfri")
        m = IPA.search(s)
        if m: avvik.append(f"{n}{sti}: lydskrifttegn «{m.group(0)}» (U+{ord(m.group(0)):04X})")
print(f"PORT L avvik: {len(avvik)}")
for a in avvik[:30]: print(" -", a)
sys.exit(1 if avvik else 0)
EOF
```

I tillegg kjøres `python3 scripts/hoyskolebok/sjekk-latex.py exfac03-nord`, som
skal være ren. Den fanger andre feilklasser (kontrolltegn fra enkel backslash,
ubalanserte dollartegn) og er derfor ikke overflødig.

### 14.4 Fallgruvekodene #1–#15 (glosses ved første bruk PER KAPITTEL)

| # | Fallgruve | Hovedhjem | Hjemmel |
|---|---|---|---|
| #1 | parafrasefella — gjenfortelle handlingen i stedet for å analysere den | 9.3 | 3 av 6 veiledninger |
| #2 | den løsrevne analysen — begreper uten bestemte passasjer | 7.6 og 9.3 | 3 av 6 veiledninger |
| #3 | referansen som ikke stemmer — feil utgave, manglende sidetall | 9.4 | 2 av 6 veiledninger |
| #4 | pensumløs analyse | 9.4 | 4 av 6 veiledninger |
| #5 | feil hovedapparat i forhold til oppgaveordlyden | 9.1 | 1 av 6 veiledninger |
| #6 | å hoppe over tekstens mest særegne formgrep | 7.5 | 1 av 6 veiledninger |
| #7 | omfangsavviket | 0.2 og 9.5 | 2 av 6 veiledninger |
| #8 | å tro at «utenfor pensum» erstatter pensum | 9.4 | 2 av 6 veiledninger |
| #9 | essayet som punktliste | 9.2 | **5 av 6 terminer** ⚠ se §20 sprik 1 |
| #10 | ett flertydig ord analysert på bare én måte | 2.5 | **utledet** |
| #11 | setningsledd identifisert uten konstituenttest | 3.3 | **utledet** |
| #12 | språkendring beskrevet uten å skille nivåene | 4.2 | **utledet** |
| #13 | avistekstens syn referert uten å drøftes | 4.4 | **utledet** |
| #14 | andrespråkstermene definert uten problematisering | 5.1 | **utledet** |
| #15 | språkføringen sviktet fordi innholdet var godt | 9.6 | **utledet** |

**Registeret har nøyaktig femten koder.** Ikke innfør en sekstende noe sted. Hele
registeret gjennomgås i kap. 9.7, og hver kode glosses i klarspråk ved første
bruk per kapittel.

⚠ **To ærlighetsforbehold som SKAL stå der registeret presenteres** (Del 0 og
9.7): **ingen av de seks veiledningene rapporterer en observert feil** — de sier
hva som kreves og hva som ikke holder — og **#10–#15 er utledet av kravene**, ikke
hentet fra noen veiledning. Formuleringen «mange studenter gjør …» og ordet
«erfaringsvis» er hardt forbudt (§14.5).

### 14.5 Forbudt-termer og prosaregler (grep-sjekkes)

**Hard port** — `sjekk-bok.py`-regexen skal gi **0 treff** (kjøres
case-insensitivt; skriptet unntar automatisk kap. 0.1, som skal beskrive
kildesituasjonen — men malene i denne kontrakten passerer også der):

```
Prioritet: perfekt|Sist du var her|som du sikkert husker|du har jo allerede sett|dette kan du fra før|[A-F]-besvarelse|[A-F]-markør|[A-F]-stoff|[A-F]-kandidat|[A-F]-terskel|[A-F]-nivå|karakteren [A-F]\b|karakterskala|gapet til A|\bA–F\b|\bA-F\b|strykprosent|karakterfordeling|sensurstatistikk|\bfire timer\b|\b4 timer\b|tidspress|eksamensdagen|eksamenslokalet|på eksamen får du|slik disponerer du|en god besvarelse ville|en sterk besvarelse ville|en godkjent besvarelse ville|ville ha drøftet|ville her ha|det kan argumenteres begge veier|offisiell fasit|offisielle fasiter|eksamensfasit|arkivets fasit|fasit fra UiO|UiOs fasit|sensorveiledningenes fasit|offisiell løsning|offisielle løsninger|offisielle løsningsforslag|løsningsforslag fra UiO|UiOs løsningsforslag|modellbesvarelse fra UiO|autentiske eksamensoppgaver|hentet fra eksamenssettet|gjengitt fra sensorveiledningen|tidligere flervalgsoppgaver|tidligere flervalgsspørsmål|flervalgsspørsmål fra UiO|flervalgsoppgaver fra UiO|eksamensspørsmål fra UiO|flervalgsdel|alle eksamener|samtlige eksamener|alle terminer|emnet gis bare om høsten|bare om høsten|kun om høsten|erfaringsvis|mange studenter|de fleste studenter|studentene pleier|erfaring viser at|9-punkts-metoden består av|de ni punktene er|\bV20\d\d\b|\bH20(0\d|1[0-8])\b|\bs\. ?\d+|\bside(ne)? \d+|\d\.\s*utgave|omfangskravet er|emnets omfangskrav|kravet i emnet er|gjenbruke (dette |det |stoffet )?(på|i) (LING|EXFAC|EXPHIL|et annet emne)|uttelling (på|i) (LING1100|EXFAC03-SPR|EXPHIL03|et annet emne)|samme stoff som i LING1100|overføringsverdi til
```

```bash
python3 scripts/hoyskolebok/sjekk-bok.py exfac03-nord "<regexen over, i én linje>"
```

Begrunnelse per gruppe:

- **Karaktergruppen** (`[A-F]-besvarelse` … `karakterfordeling`) er denne bokas
  signaturport. Emnet har ikke gradert skala, og hver av disse formuleringene
  ville importert et apparat som ikke finnes (§7).
- **Klokkegruppen** (`fire timer`, `4 timer`, `tidspress`, `eksamensdagen`,
  `eksamenslokalet`, `på eksamen får du`, `slik disponerer du`) er
  mappeporten (§6.6, §8).
- Deiksis-uttrykkene peker feil vei — Forkunnskaper-blokka oppsummerer et ANNET
  kapittel (§5.1).
- Meta-fasit-uttrykkene er forbudt fordi analysen skal skrives ut (§11.2).
  ⚠ Merk at **presens** («en god besvarelse **vil** …») er lovlig og ønsket —
  det er kildenes egen registerbeskrivelse (§7.1).
- Fasit- og løsningspåstandene er usanne: arkivet har **null** av hver (§6.1
  pkt. 1). Ordene alene står under prosaregel 2.
- **Flervalgsgruppen**: emnet har ingen flervalgsoppgaver i det hele tatt, og
  hver av disse formuleringene ville påstått at boka har trent på spørsmål som
  aldri har eksistert (§13).
- `alle eksamener`, `alle terminer`, `bare om høsten` bryter nevnerdisiplinen
  (§6.1 pkt. 5 og 6): emnet er eldre enn arkivet, og arkivet beviser ikke at
  emnet bare gis om høsten.
- **`V20\d\d` og `H2000`–`H2018`**: **null vårterminer er dokumentert**, og
  arkivet starter i 2019. Enhver slik terminmerkelapp omtaler et dokument som
  ikke finnes. ⚠ Mønsteret rammer **ikke** bare årstall — «1879», «1945»,
  «1980» og «1800-tallet» er lovlige i litteratur- og språkhistorie (§6.3).
- `\bs\. ?\d+`, `\bside(ne)? \d+` og `\d\.\s*utgave` fanger sidetall og utgaver i
  referanser. Ingen av delene er attestert, og referanseeksemplene skal bruke
  plassholdere (§9.1). ⚠ Mønsteret er skrevet `\bside(ne)? \d+` og ikke
  `\bsiden? \d+` med vilje: det siste ville felt «siden 2019», som er helt vanlig
  prosa her.
- `omfangskravet er` / `emnets omfangskrav` / `kravet i emnet er` er
  omfangsporten (§8.3).
- Kryssgevinst-gruppen er forbudet i §15.

⚠ **Malene i §6.1.1 (kildenoten), §8.1 (prøve-tipen), §8.3 (omfangsmerkingen),
§10 (niepunktsnoten) og §11.1 (modellbesvarelseslinjen) er testet mot denne
regexen 6. august 2026 og gir null treff — alle fem.** I tillegg er regexen testet
mot 14 legitime setninger fra bokas eget stoff (blant dem «Godkjent er målet,
ikke perfeksjon», «I H2024 og H2025 var kravet rundt 2,5 sider», «Kap. 6.5 gir
epokebetegnelsene fra 1800-tallet og framover», «Sett av om lag to timer
arbeidstid», «En god besvarelse vil vise …») uten et eneste falskt treff, og mot
11 ulovlige setninger, som alle ble fanget. **Endrer du en mal, kjør testen på
nytt:**

```bash
python3 - <<'EOF'
import re
MAL = open("docs/hoyskole-boker/exfac03-nord/BYGGEKONTRAKT.md", encoding="utf-8").read()
# Regexen leses ut av kontrakten selv, så testen aldri kan komme i utakt med den.
RX = re.search(r"^Prioritet: perfekt\|.*$", MAL, re.M).group(0)
# ⚠ Bruk sluttmarkør, ikke et fast tegnvindu: kommentarene rett ETTER malene
# siterer med vilje de forbudte formene, og et for stort vindu gir falske treff.
for navn, (a, b) in {
    "KILDENOTE":  ("Boka er kalibrert mot alt som finnes", "emnesiden for ditt eget semester."),
    "PROVE-TIP":  ("Dette emnet har ingen skoleeksamen.", "leverer en endringsliste."),
    "OMFANG":     ("Omfang: om lag to sider.", "behandle det som en godkjenningsbetingelse."),
    "NIEPUNKT":   ("Emnet opererer med en navngitt niepunktsmodell", "begrunne både utvalget og bortvalget."),
    "MODELLSVAR": ("Nyskrevet modellbesvarelse — skrevet av oss", "ikke en ekte kandidatbesvarelse."),
}.items():
    s = MAL.index(a); e = MAL.index(b, s) + len(b)
    print(navn + ":", re.findall(RX, MAL[s:e], re.I) or "ingen — malen er lovlig")
EOF
```

**Prosaregler** — ord som SKAL kunne stå, men bare i en ramme
(`sjekk-prosaregel.py`, ±200 tegn rundt treffet). Alle skal være grønne:

```bash
# 1. MAPPEPORTEN: «skoleeksamen», «prøve» og «tidsbegrenset» kun i en negasjon.
#    ⚠ Ordet er IKKE i den harde regexen fordi hvert prøvekapittels åpnings-tip
#    SKAL si «dette emnet har ingen skoleeksamen» (§8.1).
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-nord --streng \
    "skoleeksamen|tidsbegrenset|prøvetid" \
    "ingen|ikke|aldri|verken|har ikke|er ikke|mappe"

# 2. SANNFERDIGHETSPORTEN: «løsningsforslag», «fasit om arkivet» og
#    «studentbesvarelse» kan bare stå der boka sier at slikt IKKE finnes.
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-nord \
    "løsningsforslag|studentbesvarelse|ekte kandidatbesvarelse|modellbesvarelse fra eksamen" \
    "ingen|null|finnes ikke|inneholder ikke|har ikke|aldri|ikke er|ikke en|nyskrev|skrevet av oss"

# 3. NEVNERPORTEN: enhver «av N»-brøk må bruke en lovlig nevner, med enheten
#    skrevet ut. ⚠ Mønsteret dekker både «av 5 terminer» og «av de 4 siste».
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-nord --streng \
    "\bav (de )?\d+ (terminer|veiledninger|sensorveiledninger|sett|oppgavesett|eksamener)" \
    "av 6 veiledninger|av 6 sensorveiledninger|av 6 terminer|av 5 terminer|av 4 terminer|av de 6|av de 5|av de 4|av 2 terminer|av 2 retorikkterminer"

# 4. REGIMEPORTEN: et 5-tall uten regime sammenligner to uforenlige mappeformer.
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-nord \
    "av 5 terminer|av de 5 terminene" \
    "gjeldende regime|dagens form|siden H2021|H2021–H2025|kjent oppgaveinnhold"

# 5. ÅRSTALLSPORTEN: et årstall i KILDE-sammenheng må ligge i 2019–2025.
#    ⚠ Scopet med vilje — litteratur- og språkhistoriske årstall er lovlige (§6.3).
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-nord --streng \
    "(termin|eksamen|veiledning|oppgavesett|arkivet|settet)[^.]{0,40}\b(1[6-9]\d\d|20(0\d|1[0-8]))\b|\b(1[6-9]\d\d|20(0\d|1[0-8]))\b[^.]{0,40}(termin|eksamen|veiledning|oppgavesett|arkivet)" \
    "litteraturhistor|epoke|novellen|diktet|utgitt|førstetrykk|språkhistor|skriftspråk|målform"

# 6. H2020-PORTEN: den manglende terminen kan nevnes, men bare som mangel.
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-nord --streng \
    "H2020" \
    "mangler|ikke publisert|finnes ikke|ingen filer|ikke i arkivet|ikke dokumentert"

# 7. ÆRLIGHETSPORTEN: fallgruvene er krav, ikke observasjoner.
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-nord \
    "fallgruve|typiske feil|vanlig feil" \
    "ingen veiledning rapporterer|utledet|hva som kreves|ikke en observasjon|ikke hva studenter"

# 8. KRYSSGEVINST-PORTEN: LING1100 kun som annet emne med egne krav.
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-nord \
    "LING1100|semantikk og pragmatikk" \
    "annet emne|eget pensum|andre krav|rent tematisk|ingen uttelling|nevner ikke|ikke en snarvei"

# 9. HEDGE-PORTEN: «noen mener» kun der det finnes en reell faglig uenighet.
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-nord \
    "noen mener|mange mener|det hevdes at" \
    "posisjon|omstridt|uenig|debatt|drøft|standpunkt|begge sider|varierer mellom lærebøker"
```

Port **1, 2, 3, 4, 5 og 6 er sannferdighetsportene** og de viktigste i denne
boka: ordet «skoleeksamen» uten negasjon gjør boka til en bok om et annet emne;
«løsningsforslag» brukt om arkivet er usant; en brøk med ulovlig nevner er en
oppdiktet frekvenspåstand; et 5-tall uten regime blander to mappeformer; et
kildeårstall utenfor 2019–2025 omtaler et dokument som ikke finnes; og H2020
uten mangel-rammen er en påstand om en termin ingen har sett.

**PORT N — navneforbudet (§9.2):**

```bash
grep -lE 'Genette|Todorov|Chatman|Stanzel|Bakhtin|Barthes|Jakobson|Propp|Gadamer|Schleiermacher|Ricoeur|Dilthey|Saussure|Chomsky|Kjeldsen|Tønnesson|Aaslestad|Lothe|Faarlund|Vannebo|Kulbrandstad|Golden|Berggreen|Tenfjord|Selinker|Krashen|Cummins|Labov|Trudgill|Mæhlum|Røyneland|Sandøy|Vikør|Kress|van Leeuwen|Norsk referansegrammatikk' \
  src/lib/data/chapters/exfac03-nord-*.json
# skal gi null treff
```

### 14.6 Påkrevd terminologi (skal FINNES)

Ordrett, og porten under måler det:

- de tre registrene: **«ikke godkjent»**, **«godkjent (minstekravet)»**, **«klart
  over minstekravet»** (§7.1);
- regelen uten tall: **«svikter én del, faller hele mappen»** (§8.2);
- realismesetningen: **«godkjent er målet, ikke perfeksjon»** (§7.2);
- bokas to mantraer: **«begrepet skal brukes, ikke omskrives»** og **«en analyse
  uten passasje er en påstand»** (§6.7);
- flertydighetsmerkingen: **«(flertydig — begge analysene skal skrives ut)»**,
  **«(tvetydig — begge analysene skal skrives ut)»** og **«(bare én analyse
  holder)»** (§11.4);
- mappeøvelsenes omfangsmerkelapp: **«bokas eget øvingskrav»** (§8.3);
- målformsetningen: ordet **«nynorsk»** i både kap. 0.1 og kap. 9.6 (§14.1).

```bash
python3 - <<'EOF'
# PORT K — påkrevd terminologi.
import glob, json, os, sys
def tekst(o):
    if isinstance(o, str): return o
    if isinstance(o, dict): return " ".join(tekst(v) for v in o.values())
    if isinstance(o, list): return " ".join(tekst(v) for v in o)
    return ""
alt = {}
for p in glob.glob("src/lib/data/chapters/exfac03-nord-*.json"):
    alt[os.path.basename(p)[:-5]] = tekst(json.load(open(p, encoding="utf-8"))).lower()
hel = " ".join(alt.values())
KRAV_BOK = ["ikke godkjent", "godkjent (minstekravet)", "klart over minstekravet",
            "svikter én del, faller hele mappen", "godkjent er målet, ikke perfeksjon",
            "begrepet skal brukes, ikke omskrives",
            "en analyse uten passasje er en påstand",
            "bokas eget øvingskrav", "bare én analyse holder"]
KRAV_KAP = {"exfac03-nord-0-1": ["nynorsk", "svikter én del, faller hele mappen",
                                 "godkjent er målet, ikke perfeksjon"],
            "exfac03-nord-9-6": ["nynorsk"]}
avvik = [f"mangler i hele boka: «{k}»" for k in KRAV_BOK if k not in hel]
for kap, krav in KRAV_KAP.items():
    for k in krav:
        if k not in alt.get(kap, ""): avvik.append(f"{kap}: mangler «{k}»")
print(f"PORT K avvik: {len(avvik)}")
for a in avvik: print(" -", a)
sys.exit(1 if avvik else 0)
EOF
```

---

## 15. Kryssbok-lenker — ÉN lenke, og ingen kryssgevinst

**Verifisert 6. august 2026:** målfila finnes i `src/lib/data/chapters/` OG er
registrert i `src/lib/data/textbook-courses-hoyskole.ts`.

| Kapittel | Lenke | Innramming |
|---|---|---|
| 3.2 | `[Tematiske roller, theta-grid og argument vs. adjunkt](/ling1100/ling1100-6-1)` | «beslektet stoff i et annet emne med eget pensum og egne krav. Der handler det om **semantiske roller** — hvem som gjør hva i situasjonen — mens vi her spør om **syntaktisk funksjon**. Ingen EXFAC03-NORD-veiledning nevner LING1100, og lenken gir ingen uttelling her.» |

**Ingen andre kryssbok-lenker.** Dette er en bevisst innstramming, ikke en
forglemmelse:

- **Overlappen mot LING1100 er målt til nær null** (morfologi 0, setningsledd 0,
  fonetikk 0, språkendring 0, andrespråk 0, flerspråklighet 0, dialekt 0 — bare
  syntaks gir 2 treff, begge i semantisk rollelære). Det eneste redaksjonelle
  hensynet er at kap. 3.2 ikke skal kollidere terminologisk med LING1100 kap.
  6.1 hvis den kommer inn på semantiske roller ved siden av syntaktisk funksjon.
  Lenken finnes for å håndtere nettopp den kollisjonen.
- **VGS-bøkene i norsk (`norsk-vg1`, `norsk-vg2`, `norsk-vg3`) er IKKE
  lenkemål**, selv om de dekker novelleanalyse og retorikk og finnes på disk. En
  lenke dit ville invitert leseren til å bygge analysen sin på et
  videregåendeverk i et emne der **pensumløs analyse er navngitt svakhet i 4 av 6
  veiledninger** (fallgruve #4). Repetisjonsverdien er reell, men risikoen er
  større.
- ⚠ **Eksplisitt FORBUDTE lenkemål:** `exfac03-spr`, `exfac03-hark` og
  `exfac03-east` (BOKCONFIG finnes, men verken skjelett eller kapittelfiler på
  disk per 6. august 2026 — en død lenke i en live bok er en synlig feil for
  leseren), samt `svexfac03`, `jfexfac04` og `exphil03`, som er **fristende
  naboer med samme emnetype og helt andre fag**.

**KRYSSGEVINST-FORBUD (ufravikelig).** Boka skal **ikke** love uttelling i andre
emner. **Ingen av de seks veiledningene nevner et annet emne med ett ord.**
Formuleringer av typen «dette kan du gjenbruke på …», «her får du uttelling på
begge emner» eller «samme stoff som i …» er forbudt (hard regex, §14.5), og hver
omtale av LING1100 skal bære rammen skrevet ut i samme setning (prosaregel 8).

Interne lenker skrives som `[kap. 2.5](/exfac03-nord/exfac03-nord-2-5)` og skal
kun peke på kapitler som allerede er bygget når boka gates. Bygg i skjelettets
rekkefølge (§6 i skjelettet): Del 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 →
prøver. Merk at **0.1 og 0.2 må stå ferdig FØR alt annet**, **1.2 FØR 2.1 og
3.1**, **2.5 FØR 2.6**, **3.4 FØR 3.5**, **4.4 FØR 9.2 og 9.10**, **6.3 FØR 7.1,
8.1 og 8.2**, **7.5 FØR 7.6**, **2.6 og 3.5 FØR 9.8**, **7.6 og 9.3 FØR 9.9**,
**8.4 og 9.1 FØR 9.11**, og **hele del 1–8 FØR del 9**.

---

## 16. Tekniske feller (les før første `json.dump`)

1. **JSON-gyldighet.** Bruk `json.dump`. Faget er fullt av gåseøyne og
   anførselstegn — én uescapet anførsel blokkerer hele plattformens prebuild.
2. **Hardt linjebrutt prosa er FORBUDT.** Rendreren gjør hvert enkelt `\n` om til
   `<br />`. Ett avsnitt = én lang linje; `\n\n` mellom avsnitt; enkelt `\n` kun
   der linjeskiftet er ønsket. Gjelder `content`, `problem`, `solution`, `task`
   og `hints`. ⚠ **Analyseoppsettene er unntaket der linjeskift ER ønsket** — én
   linje per morf, én linje per ledd. Skriv dem bevisst, ikke som et biprodukt av
   `textwrap`.
3. **Ingen `$` i det hele tatt** (§14.3). Boka har ingen LaTeX, så et dollartegn
   kan bare være en feil — og en bar `$` kutter resten av strengen til rå
   LaTeX-kilde for leseren.
4. **`chapterNumber` alltid del-basert** («2.5»), aldri lineær («14»).
   Prøvekapitler: «2.P».
5. **`difficulty` er `lett` | `middels` | `vanskelig`** — aldri `medium`/`hard`
   (§4).
6. **Ingen tom `collapsible`.** Feltet heter `content` og skal inneholde blokker.
   En `text`-nøkkel eller `[]` rendrer som en tom boks.
7. **Unike blokk-id-er** innen kapitlet.
8. **Flashcards kommer KUN fra toppnivå `definition` med `title`.** Flytter du en
   definisjon inn i en `collapsible` for å «rydde», forsvinner kortet fra kvoten.
   Orienteringsboksen i Del 0 skal derfor være `text`/`tip`, ALDRI `definition`.
9. **`(verifiser)`-markører** skrives i den literale formen `(verifiser)` (§9.3)
   og løses i fase 6 FØR `sjekk-bok.py` kjøres siste gang. Det som ikke lar seg
   verifisere, **strykes**.
10. **Ingen `subTasks`, `answer`, `solutionVideo`, `allowsUpload`,
    `allowsCanvasDrawing`** i `exercise`.
11. **Quiz-forklaringer refererer aldri til alternativets plassering** — runtime
    stokker (§13.1).
12. **Ikke bruk `grep -o` med `.{0,N}`-kontekst** mot kapittelfilene: de er
    kompakt JSON på én linje, og mønsteret er kvadratisk (17 GB RAM på
    byggemaskinen 25. juli 2026). Bruk portene i §7.5, §8.2–8.4, §9.3, §10,
    §13.1, §14.3 og §14.6, som leser JSON-strukturen.
13. **Ikke skriv «Løkke N» i overskrifter eller prosa** (§1) — og ikke «9.9a»
    eller «9.9b» i bokinnholdet.
14. **Ingen markdown i `description`/`title`/`competenceGoals`** (§3.1) — feltet
    havner rått i Google-treffet.
15. **Deloppgaver a), b), c) — og fasiten rettes i samme operasjon** som
    oppgaven om merkingen endres (§12).

---

## 17. Opphavsrett (ufravikelig)

ALLE ord, setninger, noveller, dikt, avistekster, sakprosatekster, oppgaver,
øvelser, «modellbesvarelser» og flervalgsspørsmål er **NYSKREVNE** —
mappesjangrene er malen, ALDRI originaloppgavene. Ingen formuleringer fra
UiO-oppgavesettet eller fra de seks sensorveiledningene gjengis ordrett, heller
ikke i omskrevet-nær form.

**Primærtekstene gjengis aldri.** De fem novellene arkivet navngir, skal ikke
siteres, ikke refereres i handling og ikke analyseres. De står i kap. 0.1s
tabell som dokumentasjon på at ingen tekst gjentas, og ingen andre steder (§9.3).
Det samme gjelder diktet og sakprosatekstene fra de terminene der de er navngitt.

⚠ **H2021-oppgaveteksten er den største fristelsen i denne boka**, fordi den er
det eneste stedet vi har ordrett ordlyd: sju ord til morfsegmentering, tre
setninger til leddanalyse, kravet om flytteprøve og utskiftingsprøve.
**Ordlyden gjengis ikke, og ordene og setningene gjengis ikke.** Boka kan si hva
bestillingen gikk ut på og at det er én observasjon av fem, og skal så gi leseren
**nyskrevne** ord og setninger — i et annet antall enn sju og tre, nettopp for at
leseren ikke skal lese formatet som en mal (skjelettets kap. 9.8).

**Ingen oppgaveformulering i boka presenteres som «typisk» eller «slik oppgaven
pleier å lyde».** Vi har ordlyd for 1 av 6 terminer; det er ikke et mønster.

Pensumlitteraturen **refereres og parafraseres aldri ved navn** (§9.1) — de
etablerte begrepene er faglig allmenneie og forklares under sine egne navn, uten
avsender.

**Ingen oppdiktede referanser, verk, forskere, årstall eller tall.**

Boka fremstiller seg ALDRI som offisiell, godkjent eller UiO-tilknyttet, og lover
ALDRI et vurderingsutfall. (Uavhengighetsdeklarasjonen vises automatisk av
plattformen for `level: 'Høyskole'` — se README «Juridiske deklarasjoner».)

---

## 18. BOKCONFIG og wiring (fase 5)

`BOKCONFIG.json` ligger ferdig i denne mappa:

```json
{
  "title": "EXFAC03-NORD Examen facultatum, nordiske studier",
  "description": "Eksamensrettet lærebok for EXFAC03-NORD ved UiO — kalibrert mot seks høstterminer 2019–2025: morfologisk analyse, setningsledd, språkendring, narratologisk novelleanalyse og mappehåndverket",
  "icon": "🗂️",
  "institusjon": "uio",
  "prøvedeler": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "sectionNames": { "0": "Mappa og håndverket", "…": "…", "9": "Mappeverkstedet" }
}
```

`sectionNames` er skjelettets ti seksjonstitler, ordrett. `prøvedeler` er
**ni** — det stemmer med skjelettets §4 (fire mappeøvelser per del 1–9 = 36) og
med `sjekk-skjelett.py`, som teller ni prøve-kvote-linjer.

`icon` er **🗂️** (arkivmappe). Valget er faglig: mappevurderingen er bokas
identitet. Det er også teknisk kontrollert — ikonet er **ikke i bruk** i noen av
de 44 øvrige `BOKCONFIG.json`-filene, og heller ikke i
`textbook-courses-hoyskole.ts` eller `institusjoner.ts`. De tre andre
EXFAC03-variantene har 🗣️ (SPR), 🏺 (HARK) og 🌏 (EAST), så familien forblir
visuelt adskilt.

### 18.1 `description` — HARDT FORMATKRAV, verifisert programmatisk

Kursforsiden parser feltet og splitter det i en ingress, en «Bygget på …»-boks og
emne-chips. Parseren i `src/app/[courseId]/page.tsx` (linje 87–92):

```js
description.match(/^(.*?)\s*—\s*kalibrert mot\s+([^:]+?)\s*(?::\s*(.+?))?\.?$/)
// topics: m[3].split(/,\s*|\s+og\s+/)
```

Kjørt mot beskrivelsen over 6. august 2026:

| ledd | verdi | krav |
|---|---|---|
| ingress | «Eksamensrettet lærebok for EXFAC03-NORD ved UiO» (47 tegn) | ≤ ~90 ✓ |
| kalibrering | «seks høstterminer 2019–2025» | kort, uten «bygget på»-ord ✓ |
| temaer | morfologisk analyse · setningsledd · språkendring · narratologisk novelleanalyse · mappehåndverket | 5 stk, 1–2 ord hver ✓ |
| samlet lengde | 189 tegn | < 250 ✓ |
| forbudte tegn inne i leddene | ingen `;`, `:` eller `—` | ✓ |

⚠ **Temalista splittes på BÅDE komma og « og ».** Et temaledd som selv inneholder
«og» sprekker i to meningsløse chips — «språklig variasjon og endring» ville
blitt «språklig variasjon» + «endring». **Ingen temaledd får inneholde « og ».**
Det er grunnen til at delnavnene fra skjelettet (del 4 «Språklig variasjon og
endring», del 5 «Norsk som andrespråk og flerspråklighet») **ikke** kan brukes som
chips, og at kalibreringsleddet skriver årstallene med tankestrek i stedet for
«fra 2019 til 2025» — en «og» der ville også sprukket.

**Kalibreringsleddet er terminbasert med vilje.** «Seks høstterminer 2019–2025»
er nøyaktig det arkivet dokumenterer. «Seks sensorveiledninger» ville vært like
sant, men lest som om boka var bygget på fasiter; «alle eksamener» ville vært
usant. ⚠ Ordet «høstterminer» beskriver **de dokumenterte terminene**, ikke en
påstand om at emnet bare gis om høsten — den nyansen bæres av kap. 0.1 (§6.1
pkt. 6). Kildetallene i full bredde hører i `kildegrunnlag.ts` og i kildenoten,
ikke her.

```bash
python3 - <<'EOF'
import json, re
d = json.load(open("docs/hoyskole-boker/exfac03-nord/BOKCONFIG.json", encoding="utf-8"))["description"]
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

Kjørt 6. august 2026: **OK** (len 189, ingress 47, fem temaer, ingen ulovlige
tegn).

### 18.2 `title` — og hvorfor den verken skal utvides eller kortes

`wire-bok.py` skriver `cfg['title']` både til kursmetadataen og til
`institusjoner.ts`, og kursets `title` er det `HoyskoleDisclaimer` bruker for å
avgjøre om en fagspesifikk ansvarslinje skal vises:

```js
erJus(courseId, title)   // /^jus/i.test(courseId) || /\brett(s\w*)?\b|juridisk/i.test(title)
erHelse(courseId, title) // /^psy/i.test(courseId) || /sykepl|medisin|farmako|anatomi|fysiologi|helse|psykolog|odontolog|tannlege/i.test(`${courseId} ${title}`)
```

Testet 6. august 2026 med tittelen «EXFAC03-NORD Examen facultatum, nordiske
studier»: **erJus = False, erHelse = False.** Det er riktig — dette er verken et
juridisk eller et helsefaglig emne, og boka skal bare ha den generelle
uavhengighetsdeklarasjonen.

⚠ **Ikke skriv «retorikk» inn i tittelen** for å gjøre den mer beskrivende: da
slår ingenting inn i `erJus` (bra), men tittelen slutter å være emnets offisielle
navn, som er bokas viktigste søkeord. ⚠ **Og ikke skriv «rettskriving» eller
«rettskrivingsnorm» inn i tittelen** — `\brett(s\w*)?\b` ville da truffet og gitt
leseren en Lovdata-linje på et emne uten en eneste rettskilde. **Ikke kort ned
til «EXFAC03-NORD Examen facultatum»** — da forsvinner variantnavnet som skiller
emnet fra EXFAC03-SPR, EXFAC03-HARK og EXFAC03-EAST.

```bash
python3 - <<'EOF'
import json, re
t = json.load(open("docs/hoyskole-boker/exfac03-nord/BOKCONFIG.json", encoding="utf-8"))["title"]
erJus = lambda c, x: bool(re.search(r"^jus", c, re.I) or re.search(r"\brett(s\w*)?\b|juridisk", x, re.I))
erHelse = lambda c, x: bool(re.search(r"^psy", c, re.I) or re.search(
    r"sykepl|medisin|farmako|anatomi|fysiologi|helse|psykolog|odontolog|tannlege", f"{c} {x}", re.I))
print(t, "→ erJus:", erJus("exfac03-nord", t), "| erHelse:", erHelse("exfac03-nord", t))
assert not erJus("exfac03-nord", t) and not erHelse("exfac03-nord", t)
EOF
```

### 18.3 Wiring-sjekkliste (fase 5)

1. `python3 scripts/hoyskolebok/wire-bok.py exfac03-nord` — parser **48**
   kapitler fra skjelettet og genererer **9** prøvekapitler = **57** oppføringer.
   Alle 57 filene må finnes først. ⚠ Tell quiz-staging mot antall temakapitler
   **FØR** wiring.
2. **Skriv om prøvekapitlenes auto-tekst** etter tabellen i §2.2 — «på
   eksamensnivå» er usant i et emne uten eksamen. Kontroller samtidig at hvert
   prøvekapittel faktisk har **fire** øvelser, siden auto-teksten sier det.
3. **Legg til oppføring i `src/lib/data/kildegrunnlag.ts`** med tallene fra §6.1:
   6 dokumenterte terminer H2019–H2025 · 7 filer · 6 sensorveiledninger som
   dekker 6 terminer · 1 oppgavesett som dekker 1 termin · **0 løsningsforslag,
   0 fasiter, 0 studentbesvarelser og 0 flervalgsspørsmål**. `forbehold`-lista
   skal inneholde: ordrett oppgavetekst finnes bare for H2021 · H2019 er helt
   generisk, og oppgaveinnholdet er ukjent for den terminen · H2020 mangler helt
   fra UiOs arkivside, og materialet sier ingenting om hvorfor · alle seks
   dokumenterte terminer er høstterminer, men arkivet beviser ikke at emnet bare
   gis om høsten · ingen pensumliste, ingen vekting mellom halvdelene, ingen
   frister og ingen adgangskrav står i materialet · omfangskravet har endret seg
   mellom terminene · innholdet i den navngitte niepunktsmodellen er ukjent.
4. `institusjoner.ts` patches automatisk under `slug: 'uio'` med tittel og ikon
   fra `BOKCONFIG.json`. Verifiser at **verken** jus- eller helse-linja vises
   (§18.2).
5. Verifiser narrativ-ruter (hvis narrativer bygges) med prod-server og curl —
   **200**, ikke bare at filene finnes.

---

## 19. Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json; json.load(open('…'))"` på HVER fil du har skrevet.
2. **Kvotetelling** mot tabellen i §13 (toppnivå `definition`-blokker med `title`
   + antall quizspørsmål) — minimum, aldri under. Total **926 quiz / 824
   flashcards / 2 720 minutter**.
3. **PORT S (skalaen, §7.5) = 0 avvik.** Dette er bokas viktigste port: ingen
   karakterbokstaver, de tre registrene på plass i alle prøvefiler og
   modellbesvarelser, og bestått-på-marginen-versjonen i kap. 9.9.
4. **PORT M (mappeformen i prøvekapitlene, §8.4) = 0 avvik**, og nøyaktig ni
   prøvefiler med fire øvelser hver.
5. **PORT T (tekstresten, §8.2) og PORT O (omfangsmerkingen, §8.3) = 0 avvik.**
6. **PORT P (primærtekstene, §9.3) og PORT N (navneforbudet, §14.5) = 0 avvik.**
7. **PORT 9 (niepunktsmetoden, §10) = 0 avvik** — og bokas eget verktøysett er
   aldri telt.
8. **PORT L (formelfritt og lydskriftfritt, §14.3) = 0 avvik**, og
   `sjekk-latex.py exfac03-nord` er ren.
9. **PORT K (påkrevd terminologi, §14.6) = 0 avvik.**
10. **PORT Q (quiz i staging, §13.1) = 0 formavvik og LENGDE-TELL under 35 %** —
    og husk at rettemåten er å **forlenge distraktorene**.
11. **Forbudt-termer-grep = 0** (regexen i §14.5), og alle ni prosareglene
    grønne. Mal-testen i §14.5 kjørt hvis en av de fem malene er endret.
12. **Kildepåstander:** hver «N av M» finnes i §6.2, bruker en lovlig nevner
    (§6.3), **skriver ut enheten** OG oppgir regimet der nevneren er 5 eller 4;
    ingen påstand om fasit eller løsningsforslag fra UiO; ingen påstand om
    strykprosent, karakterfordeling, frister, pensumliste eller adgangskrav; de
    fem kontrollsummene i §6.2 stemmer.
13. **Kryssbok- og internlenker** peker på eksisterende, registrerte filer (§15);
    ingen lenker til de forbudte målene; **nøyaktig én LING1100-lenke i hele
    boka**, med rammen skrevet ut i samme setning.
14. **Læringsløkke:** `content[]` veksler teori → eksempel → oppgave i løkker med
    `exercise`-blokker INLINE. Unntak: prøve-, sjanger- og
    modellbesvarelseskapitler. Byggespråk-grepet fra §1 gir null treff, og «9.9a»
    eller «9.9b» finnes ikke i bokinnholdet.
15. **Forkunnskapsdekning:** gå gjennom HVER `exercise` og bekreft at den kun
    hviler på stoff introdusert tidligere i kapitlet eller i en referert
    forkunnskap. Særlig: ingen oppgave i del 2 eller 3 krever ordklasse- eller
    bøyingskunnskap uten at kap. 1.2 står i forkunnskapene, og ingen oppgave i
    del 7 eller 8 krever sjangerbegrepet uten at kap. 6.3 er referert.
16. **Oppfrisket forkunnskap:** kapitlene i tabellen i §5.1 har 2–3
    kjernepåstander VIST, ikke bare lenket; **grep for «Sist du var her» = 0**, og
    ingen overskrift heter «Forkunnskaper — sist du var her».
17. **Struktur og oppgaveantall:** HVERT temakapittel har `tip` Eksamensvinkel,
    `text` Forkunnskaper, `warning` Typiske feil, `tip` «Slik løftes svaret»,
    `collapsible` «Notasjons- og begrepsliste» SIST og **4–8 `exercise`-blokker
    inline**. Tell dem. Drillkapitlene 2.6, 3.5 og 7.6 har i tillegg
    variantkatalogen og den merkede kalde banken; modellbesvarelseskapitlene
    9.8–9.11 har `tip` Sensorblikket + `warning` Typiske feil.
18. **`difficulty`** er `lett`/`middels`/`vanskelig` i alle `exercise` — grep for
    `"difficulty": "medium"` og `"difficulty": "hard"` gir null. Minst én
    `vanskelig` per temadel, minst én `lett` innstegsoppgave tidlig i hvert
    temakapittel.
19. **Nybegynner-inngang:** alle sjangerkoder (ANA/RED/TEK/ESS), fallgruvekoder
    (#1–#15) og all mappeterminologi forklart ved første bruk PER KAPITTEL; ingen
    kald kode i `competenceGoals` eller i første tekstboks; Del 0 har «Slik leser
    du denne boka»-boksen (type `text`/`tip`, ALDRI `definition`) og hele
    Del 0-pakken (§12.1).
20. **Mappekontrakten:** hver `example.solution`, hver `exercise.solution` og hver
    øvelsesfasit viser den strukturen sjangeren krever (§6.5), og fasitene bruker
    de tre registrene + fallgruver. **En ANA-fasit uten klassifisering er en
    byggefeil** (klassifiseringen er halve bestillingen), og **en TEK-fasit uten
    passasje til hver påstand er en byggefeil** (#2).
21. **Realisme uten karakterer:** «godkjent er målet, ikke perfeksjon» står
    eksplisitt i Del 0; grep «Prioritet: perfekt» = 0; kap. 9.9 lander skarpt og
    har en bestått-på-marginen-versjon som faktisk ligger på marginen;
    meta-fasit-grep = 0.
22. **Prøvekapitler:** nøyaktig **fire** øvelser i hvert av de ni; åpnings-tipen
    følger malen i §8.1; den fjerde øvelsen har utkast, tilbakemelding og
    endringsliste; fasitmønsteret varierer (aldri «alle a», aldri «alle felle»);
    selvdiagnose (☐) etter hver fasit; lister av selvstendige påstander bruker
    romertall (§5.6), og alle ekte deloppgaver bruker a), b), c).
23. **hints** utfylt på alle `exercise` unntatt de tre merkede kalde bankene i
    2.6, 3.5 og 7.6; første hint røper aldri konklusjonen.
24. **Øktmerking:** de 44 kapitlene over 45 minutter har tidsanslag i
    underoverskriftene eller pausepunkter; lange modellbesvarelser har
    «— naturlig pausepunkt —»; prøvekapitlene deklarerer deling over flere
    kvelder.
25. **Nøytralitet:** målform, dialekt, andrespråk, flerspråklighet og humanioras
    nytte er behandlet uten politisk stillingtagen; ingen varietet omtalt som
    «feil» eller «dårlig»; mellomspråk beskrevet som system, ikke som feil; ingen
    elevers eller innvandreres språk brukt som eksempel på svakhet. Se
    `politisk-noytralitet`.
26. **Ingen tom `collapsible`**; ingen duplikate blokk-id-er; kap-referanser i
    fasiter og forkunnskaper er markdown-lenker; ingen hardt linjebrutt prosa;
    ingen markdown i `description`/`title`/`competenceGoals`.
27. **`(verifiser)`-rester = 0** før siste `sjekk-bok.py`-kjøring — særlig
    novelletitlene i kap. 0.1 (§9.3). Det som ikke lar seg verifisere
    bibliografisk, **strykes**.
28. **Opphavsrett (§17):** ingen primærtekst gjengitt; ingen ordrett formulering
    fra oppgavesettet eller veiledningene; H2021s sju ord og tre setninger ikke
    gjenbrukt; ingen oppdiktede referanser eller navn.
29. **Juridiske deklarasjoner:** innholdet fremstiller seg ALDRI som offisielt
    eller UiO-tilknyttet, lover aldri et vurderingsutfall, og all omtale av
    kildegrunnlaget følger §6.1 ordrett i sak.
30. **Porter grønne før ferdigmelding:**

```bash
python3 scripts/hoyskolebok/status-bok.py exfac03-nord
python3 scripts/hoyskolebok/sjekk-skjelett.py exfac03-nord
python3 scripts/hoyskolebok/sjekk-latex.py exfac03-nord
python3 scripts/hoyskolebok/sjekk-fasitfordeling.py exfac03-nord
python3 scripts/hoyskolebok/sjekk-statiskflervalg.py exfac03-nord
python3 scripts/hoyskolebok/sjekk-bok.py exfac03-nord "<forbudt-regex fra §14.5>"
# PORT S (§7.5), M (§8.4), T (§8.2), O (§8.3), P (§9.3), 9 (§10), L (§14.3),
# K (§14.6), Q (§13.1), N (§14.5) og de ni prosareglene (§14.5)
npm run build
npx tsc --noEmit
# ETTER wiring (fase 5), når quiz-data-exfac03-nord.ts finnes:
python3 scripts/hoyskolebok/sjekk-alternativref.py exfac03-nord
node scripts/hoyskolebok/quiz-lengdesjekk.mjs exfac03-nord
```

---

## 20. SPRIK OG PRESISERINGER MOT SKJELETTET — dokumentert her så ingen «retter» dem tilbake

Skjelettets Talldisiplin-seksjon og alle 48 kapitlers kvote- og frekvenslinjer er
etterregnet 6. august 2026. **Kvotene stemmer eksakt** (926 / 824 / 2 720, alle ti
deltotaler), **alle nevnere er lovlige**, og **alle fem kontrollsummene i §6.2
går opp**. Skjelettet har ikke inter1000-defekten. Tre ting holder likevel ikke,
og fire trenger en presisering før de kan brukes.

### Sprik 1 — «av 6» er TERMINER, ikke veiledninger, for fallgruve #9

Skjelettets §1.6 setter tabellen for #1–#9 under overskriften **«Navngitt i
sensorveiledningene»**, og gir #9 belegget «H2021, H2022, H2023, H2024, H2025
(5 av 6)».

**H2021-veiledningen er helt generisk.** Analysens § 0 og § 8.2 slår fast at den
ikke nevner novellen, ikke forfatteren og ikke ett eneste av ordene — og
skjelettets egen §1.3 markerer dette korrekt et annet sted, der referansekravet
oppgis som «4 av 6 terminer (H2021-**oppgaveteksten**, H2023, H2024, H2025)».
Kravet om sammenhengende essayform står i H2021s **oppgavetekst**, ikke i H2021s
veiledning. Analysens § 4.4 sier det ordrett: formuleringen står «i
H2021-oppgaveteksten og i veiledningene for H2022, H2023, H2024 og H2025».

**Bindende form:** *«Fallgruve #9 er hjemlet i 5 av 6 terminer — i H2021s
oppgavetekst og i de fire veiledningene fra H2022 til H2025.»* Skriv **aldri**
«5 av 6 sensorveiledninger» om #9. Det samme gjelder referansekravet i kap. 9.4:
nevneren er **terminer**, ikke veiledninger.

⚠ Konsekvens for kap. 9.7: overskriften «Navngitt i sensorveiledningene» dekker
#1–#8, men ikke #9. Boka skal skille de to gruppene i klartekst — det koster én
setning og redder ærlighetsforbeholdet, som ellers ville hvilt på en unøyaktig
premiss.

### Sprik 2 — Del 8 hører til delmappe II, ikke delmappe I

Skjelettets statuslinje for Del 8 åpner: «Delmappe **I** sin **andre**
litteraturoppgave.» Det kan ikke stemme. Mappens form er fire deler i to
delmapper, med **én** språkdel og **én** litteraturdel i hver (skjelettets §1.0,
hjemlet i 5 av 5 terminer) — delmappe I har altså bare én litteraturdel, og den
er novelleanalysen i del 7.

Skjelettet selv sier det motsatte to andre steder: kap. 0.1 (k) legger leseruta
slik at «del 4–5 og del 8» leses fram mot **andre** delmappe, og kap. 9.11 heter
«En hel litteraturdel til **delmappe II**».

**Bindende form:** Del 8 trener **den andre litteraturoppgaven**, og der en
delmappe navngis, er det **delmappe II**. ⚠ Boka bør som hovedregel skrive «den
andre litteraturoppgaven» — arkivet navngir delmappe I og delmappe II bare i
H2025, og koblingen litteraturoppgave 2 → delmappe II er en rimelig, men ikke
ordrett dokumentert lesning. Der delmappen må navngis (kap. 0.1s leserute og
kap. 9.11), følges skjelettets egen kobling.

### Sprik 3 — fallgruve #3 har TO tall, og de skal ikke slås sammen

Skjelettets §1.6 gir #3 belegget «H2024, H2025 (2 av 6)» — det gjelder den
snevre formen: å føre opp én utgave og referere til en annen, og å utelate
sidetall. Kap. 9.7 skriver derimot «#3 referansen som ikke stemmer, i sin videre
form som referansestil og kilder (4 av 6)».

Begge tall er sanne, men de måler ikke det samme: **2 av 6 terminer** for den
presise referansefeilen (H2024, H2025), og **4 av 6 terminer** for den videre
kategorien «referansestil ikke fulgt eller kilder ikke oppgitt»
(H2021-oppgaveteksten, H2023, H2024, H2025).

**Bindende:** hver gang #3 tallfestes, skal scopet stå ved siden av. Skriv aldri
«#3: 4 av 6» alene — det ville påstå at den presise referansefeilen er navngitt
dobbelt så ofte som den er.

### Presisering 1 — årstallsforbudet er SCOPET, ellers feller det kap. 6.5

Skjelettets Talldisiplin-regel 3 og verifikasjonslista sier «grep etter et
hvilket som helst årstall før 2019 = 0 treff». **Tatt bokstavelig feller den
boka på et krav skjelettet selv stiller:** kap. 6.5 skal gi «de store norske
epokebetegnelsene fra 1800-tallet og framover, presentert med årstall som
omtrentlige», kap. 4.2 beskriver språkendring over tid, og skjelettets egen §1.4
skriver «fra 1800-tallet til 1980».

**Bindende:** forbudet gjelder **terminer og kilder**. Porten er derfor
todelt — hard regex på termin-formede årstall (`V20\d\d`, `H2000`–`H2018`,
§14.5) og en prosaregel som krever at et årstall før 2019 **i samme setning som**
termin, eksamen, veiledning, oppgavesett eller arkiv står i en litteratur- eller
språkhistorisk ramme (prosaregel 5). Litteraturhistoriske årstall er lovlige og
nødvendige.

### Presisering 2 — bokas eget verktøysett i kap. 8.2 har NI felt, og det skal aldri telles

Skjelettets begrepskontrakt for kap. 8.2 lister nøyaktig ni spørsmålsfelt, i det
samme kapitlet som forbyr boka å presentere en niepunktsliste som emnets metode.
Kollisjonen er maksimal: en leser som møter «ni felt» ved siden av «en
niepunktsmodell vi ikke kjenner», konkluderer med at hun nettopp har fått
modellen.

**Bindende:** alle ni feltene skal stå, men **listen nummereres og telles
aldri**. «Ni felt», «de ni feltene», «ni punkter», «ni spørsmål» og «alle ni» er
forbudt, og skjelettets formulering i kap. 9.11 — «alle ni feltene gjennomgått
overfladisk» — skrives om til **«alle feltene gjennomgått overfladisk»**. Port i
§10.

### Presisering 3 — «skoleeksamen» kan ikke være en hard 0-treff-term

Prompten og skjelettets §1.8 lister «skoleeksamen (om dette emnet)» blant
forbudt-termene. Men skjelettets §1.0 og §4 **krever** at hvert prøvekapittels
åpnings-`tip` sier i klartekst at emnet **ikke har** skoleeksamen — uten den
setningen gir plattformens autotekst leseren feil bilde av vurderingsformen.

**Bindende:** ordet ligger i **prosaregel 1** (§14.5, `--streng`), som krever at
hver forekomst står i en negasjon. Det er samme mekanisme som SVEXFAC03s
kildenote-felle, snudd på hodet: der var negasjonen et smutthull, her er den
kravet. Ordene «fire timer», «tidspress», «eksamensdagen» og «på eksamen får du»
er derimot hardt forbudt — boka trenger dem aldri, heller ikke i en negasjon.

### Presisering 4 — bare tre av de fem novellene er datert i materialet

Skjelettets §1.4 og kap. 6.5 skriver at novellene spenner «fra 1800-tallet til
1980» og «over hundre år». Det er sant, og begge endepunktene er dokumenterte —
men **bare tre av de fem tekstene har et årstall i materialet**.

**Bindende:** spennsetningen kan stå, men boka skal **ikke oppgi årstall for de
to udaterte** og aldri skrive at alle fem er datert. Sammen med §9.3 (titlene
merkes `(verifiser)` eller strykes) er dette hele opphavs- og
sannferdighetshåndteringen av novelletabellen.

### Presisering 5 — wiringens auto-tekst er allerede halvveis rettet

`svexfac03/BYGGEKONTRAKT.md` §2.2 og `juroff1500/BYGGEKONTRAKT.md` §2.2 sier at
`wire-bok.py` genererer ordet «løsningsforslag» i prøvekapitlenes beskrivelse, og
gir en rettetabell for det. **Skriptet er endret siden**: per 6. august 2026 sier
linje 94 «med fullstendige løsninger skrevet av oss». Ikke kopier de eldre
kontraktenes rettetabell. Det som fortsatt må rettes her, er «Fire prøver … på
eksamensnivå» — se §2.2.

### Presisering 6 — «9.9a» og «9.9b» er byggespråk, ikke kapittelnumre

Skjelettets verifikasjonsliste ber om at «minst én modellbesvarelse lander skarpt
(kap. 9.9a)» og «minst én er bestått-på-marginen (kap. 9.9b)». Det er de tre
versjonene inne i **kapittel 9.9**, ikke egne kapitler. Boka har 48 kapitler, og
9.9 er ett av dem. Merkelappene skal aldri stå i bokinnholdet (§1).

⚠ **Rangeringen og kapittelfordelingen er uendret** av alle sju punktene, så
skjelettets §2-rasjonale står: de to ferdighetene som er dokumentert i 5 av 5
terminer — språkanalysen og novelleanalysen — får 17 av bokas 48 kapitler,
essaystoffet 6, mappehåndverket 11 og grunnlagsdelene 8.
