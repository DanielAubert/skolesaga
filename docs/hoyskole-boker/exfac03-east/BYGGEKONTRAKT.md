# Byggekontrakt: EXFAC03-EAST Examen facultatum for Øst-Asia-studier (UiO) — teknisk kontrakt for kapittelforfattere

Gjelder ALLE forfatter-agenter som bygger kapitler til `exfac03-east`. Faglig
innhold styres av `SKJELETT.md` (Talldisiplin-seksjonen + identitetsseksjonen
§1–§2 + per-kapittel-kontraktene i §3) — les ditt kapittels avsnitt ORDRETT, og
`EKSAMENSANALYSE.md` ved behov. Denne kontrakten definerer format, sjangerkrav,
kildepåstander, tall, ordgrensedisiplin, nøytralitet og kvalitetsporter.

**Ved faglig konflikt vinner SKJELETT.md. Ved format-, sjanger-, tall-, kilde-,
ordgrense- eller nøytralitetskonflikt vinner denne kontrakten.** Instansiert fra
`../BYGGEKONTRAKT-MAL.md`.

⚠ **Tre av skjelettets bindinger er endret her, og sprikene står dokumentert i
§20 med utregningen, så ingen «retter» dem tilbake.** Viktigst: **skjelettets
forbud mot å tallfeste Japan og Folkerepublikken Kina er OPPHEVET** —
`EKSAMENSANALYSE.md` § 3.5 ble rettet 6. august 2026, og tallene er nå
**Japan 8 av 21 spørsmål** og **Folkerepublikken Kina 9 av 21 spørsmål**, begge
med belegglister som stemmer. **§6.2 og §6.3 er de eneste lovlige kildene til
henholdsvis «N av M»-påstander og nevnere i boka.**

**Emnets navn.** Emnekoden `EXFAC03-EAST` skrives alltid ut — den er bokas
viktigste søkeord. ⚠ **Emnets offisielle norske tittel står ikke i arkivet.**
Tittelen i `BOKCONFIG.json` er hentet utenfra og **skal verifiseres mot UiOs
emneside før wiring** (§18.2). Den skal aldri presenteres som noe
kildematerialet oppgir. Det samme gjelder studiepoeng, semesterplassering,
programtilknytning, læringsutbytte og pensumliste: **ingenting av dette finnes i
arkivet, og boka oppgir det ikke** (§6.1, regel 8).

**Arketype: drøfting** (`../DNA-drofting.md`), ren, uten lån fra andre arketyper.
Begrunnelsen står i skjelettets §1 og styrer hva som skal bygges: emnet er et rent
essayemne uten regning, uten flervalgsdel, uten praktikum og uten rettskilder.
Alle fem oppgavesjangrene er drøftingsarketypens egne former.

**Nærmeste bygde søskenbok: `svexfac03`** (live). Samme forretningstype
(obligatorisk examen facultatum-emne), samme drøftingsarketype, samme
sannferdighetsproblem (null løsningsforslag i arkivet). Kopier arbeidsmåte og
formkrav derfra — **aldri faglig innhold**. Innholdsoverlappet er null.

**Fire forskjeller fra SVEXFAC03 som endrer byggingen:**

1. **Ordgrensen er bokas ryggrad.** SVEXFAC03 har ingen ordgrense. Her er
   **minst 400 og maks 800 ord per svar** belagt i 5 av 5 terminer der
   informasjonsseksjonen er bevart, og hele boka er dimensjonert mot den (§7).
   **§7 er denne bokas strengeste seksjon.**
2. **Nøytralitetskravet er skjerpet, og det har to halvdeler.** Faget rommer
   Japans krigshistorie, Taiwans status, de to koreanske statene og Kinas
   politiske system. Boka skal beskrive posisjoner **og** nekte å lage falsk
   balanse om robuste funn (§8).
3. **Grunnlaget er tynt: 8 terminer over 5 kalenderår.** SVEXFAC03 har 22
   terminer, JFEXFAC04 har 40. Boka sier hva den er kalibrert mot og antyder
   aldri bredere dekning (§6.1).
4. **Pensumforankring er nesten umulig.** Arkivet navngir **nøyaktig to**
   pensumforfattere — Hudson og Iwabuchi — og ingen verk, utgaver, årstall eller
   sidetall. Drøftingsarketypens krav om avsender per begrep kan derfor ikke
   innfris, og å dikte opp en referanse er forbudt (§10).

---

## 1. LÆRINGSLØKKE-KONTRAKT (ufravikelig byggekrav — produkteier 9. juli 2026)

Fra skjelettets topp, tatt inn her som bindende byggekrav:

- HVERT kapittels `content[]` struktureres som gjentatte SMÅ løkker
  **Teori → Eksempel → Oppgave**, én løkke per begrep eller drøftingsakse:
  1. teorien (`text`/`definition`) som innfører begrepet med norsk og engelsk
     form (§9), →
  2. `example` som viser begrepet BRUKT — et nyskrevet case eller et
     gjennomskrevet svarutdrag med ordtall (§7.2), →
  3. `exercise` INLINE i `content[]` rett etter eksempelet (plattformen renderer
     inline oppgaver), →
  4. neste begrep.
- **ALDRI** all teori øverst med oppgavene samlet nederst, og aldri alle
  definisjonene i én bolk fulgt av alle eksemplene. Grupper til meningsfulle
  biter — ikke én oppgave per setning.
- **Ingen usett forkunnskap:** ingen oppgave får kreve et begrep, en
  dimensjonsmatrise, et momentregnestykke eller en sjangerregel som ikke er
  introdusert tidligere i SAMME kapittel (t.o.m. eksempelet rett foran) eller i
  et tidligere kapittel referert i Forkunnskaper-blokka. Særlig utsatt her:
  **ingen oppgave i Del 3 får kreve seksdimensjonsmatrisen** uten at
  [kap. 3.1](/exfac03-east/exfac03-east-3-1) står i forkunnskapene, og **ingen
  oppgave i Del 8 får kreve ordgrenseregnestykket** uten at kap. 0.2 er
  referert.
- **Unntak:** prøvekapitlene (§5.5), sjangerkapitlene (8.1–8.7) og
  modellbesvarelseskapitlene (8.8–8.10) følger sin egen arketype — komplett
  oppgave eller sett først, løsning i `collapsible`.
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer
  REKKEFØLGEN.

⚠ **Underoverskrifter er ALDRI byggespråk.** «Løkke», «Bolk», «Blokk», «Runde»,
«Sekvens», «Modul», «Iterasjon» er byggeplanens ord, ikke leserens. Overskriften
skal si hva avsnittet handler om, pluss tidsanslaget:

```
✗ ## Løkke 3 — Statsfeminismen i Mao-tiden (~15 min)
✓ ## Statsfeminismen i Mao-tiden (~15 min)
```

Vis til tidligere avsnitt ved NAVN, aldri ved nummer («da vi gikk gjennom
tributtsystemet», ikke «i løkke 2»). **«Løkke» er ikke et fagord i dette emnet,
så all bruk er byggespråk.** Kjør denne før ferdigmelding og forvent null treff:

```bash
grep -rnE '#{2,4}[[:space:]]*Løkke|[Ll]økke[[:space:]]+[0-9A-ZÆØÅ]|\| Løkke \|' \
  src/lib/data/chapters/exfac03-east-*.json
```

Fire former har sluppet gjennom i tidligere bøker og skal alle sjekkes: tall i
overskrift · **liten forbokstav i prosa** («repeter løkke 2») · **bokstav i
stedet for tall** («Løkke B») · **tabellkolonne uten tall** (`| Løkke |`).

---

## 2. Filplassering og filantall

Ett JSON-dokument per kapittel:
`src/lib/data/chapters/exfac03-east-<del>-<nr>.json` (prøvekapitler:
`exfac03-east-<del>-prove.json`). Quiz til
`src/lib/data/quiz-staging/exfac03-east-<del>-<nr>.quiz.json`.

IKKE rør `_registry.json`, `_all.json`, `textbook-courses*.ts`, `quiz-data*.ts`
eller `src/app/trinn/hoyere/institusjoner.ts` — wiring gjøres sentralt med
`scripts/hoyskolebok/wire-bok.py exfac03-east` (fase 5). Generer ALLTID JSON via
python `json.dump`: faget er fullt av anførselstegn («god hustru, klok mor»,
«forlate Asia», «trøstekvinnene», «konfucianske verdier», «contra-flows»,
«kapitalocen»), og én uescapet anførsel har tidligere blokkert hele plattformens
prebuild.

**48 filer totalt:** 40 innholdskapitler (skjelettets §3) + **8 prøvekapitler**
(`exfac03-east-1-prove` … `exfac03-east-8-prove`). Wiringen genererer
prøvekapitlenes metadata selv fra `BOKCONFIG.json` (`prøvedeler: [1,2,3,4,5,6,7,8]`)
— filene må finnes, men skal ikke listes i skjelettets §3.

⚠ **Del 0 har INGEN prøvekapittel.** Det er riktig: `prøvedeler` starter på 1, og
skjelettets kvotesammendrag fører 0 prøver for Del 0 («dekkes av
øvingseksamenene i del 8»).

### 2.1 Skjelettet ER i v3-format (verifisert 6. august 2026)

`wire-bok.py` parser skjelettet med `^#### Kapittel (\d+\.\d+):\s*(.+)$` og
`\*\*id:\*\* \`(exfac03-east-\d+-\d+)\``. Kjørt mot `SKJELETT.md` med parserens
egen kode:

| kontroll | resultat |
|---|---|
| kapitler parset | **40 av 40** |
| tomme `description`-felt | **0** |
| markdown (`$`, `**`, backtick) i noen `description` | **0** |
| lengste `description` | **185 tegn** |
| `prerequisites` som peker utenfor bokas id-er | **0** |
| `prerequisites` for kap. 0.1 | tom (korrekt — eneste kapittel uten) |
| sum `estimatedMinutes` | **2 375** (stemmer med kvotesammendraget) |
| `sectionNames` funnet fra del-overskriftene | alle 9 (del 0–8) |
| `python3 scripts/hoyskolebok/sjekk-skjelett.py exfac03-east` | **KVALITETSPORT OK** |

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

⚠ **`sjekk-skjelett.py` rapporterer «7 prøve-kvote-linjer», ikke 8 — og det er
IKKE en feil.** Skjelettets Del 8-kvote står som en `###`-overskrift
(«### Prøve-kvote Del 8 (Eksamenstrening) — fire komplette øvingseksamener»),
mens Del 1–7 står som fete linjer («**Prøve-kvote Del 1 (…):**»). Porten teller
den fete formen. **Boka har åtte prøvekapitler.** Ikke «rett» dette ved å slette
`exfac03-east-8-prove` — se §20, sprik 4.

### 2.2 Wiringens auto-tekst — les den før du skriver prøvene

`wire-bok.py` genererer prøvekapitlenes beskrivelse og den kan **ikke**
overstyres fra skjelettet:

> «Fire prøver som dekker del N (…) på eksamensnivå, med fullstendige løsninger
> skrevet av oss.»

To ting følger av det:

1. **«Fire prøver» er en hardkoding, ikke en anbefaling.** Hvert av de åtte
   prøvekapitlene MÅ ha **nøyaktig fire** `collapsible`-prøver. Skjelettets §4
   gir fire per del for alle åtte deler — verifisert. Bygger noen tre, får
   leseren en beskrivelse som ikke stemmer.
2. **Formuleringen «skrevet av oss» er allerede sannferdig** og skal ikke
   skrives om. Den er dessuten nødvendig her: arkivet har null løsningsforslag
   (§6.1), og en auto-tekst som hadde sagt «løsningsforslag» ville motsagt hele
   §6.1.

---

## 3. Kapittel-JSON (toppnivå)

```json
{
  "id": "exfac03-east-3-4",
  "courseId": "exfac03-east",
  "chapterNumber": "3.4",
  "title": "…(fra skjelettet, ordrett)…",
  "description": "…(fra skjelettet, ordrett)…",
  "estimatedMinutes": 55,
  "competenceGoals": ["kunne plassere Sør-Koreas moderniseringsvei på hver av de seks sammenligningsdimensjonene", "…"],
  "content": [ "…blokker…" ],
  "exercises": []
}
```

- **`chapterNumber` er ALLTID del-basert** (`<del>.<nr>`: `0.1`, `3.4`, `8.10`) —
  **ALDRI lineær** («18»). Prøvekapitler: `<del>.P`. Dette er enkeltfeilen som
  ødelegger navigasjonen i en hel bok.
- `title` og `description` tas **ordrett** fra skjelettet.
- `competenceGoals`: 2–4 «kunne …»-formuleringer destillert fra kapitlets
  begrepskontrakt og drøftingsakser. Dette er **Skolesagas EGNE** mål — ALDRI
  kopi av UiOs offisielle læringskrav (som uansett ikke finnes i arkivet).
- **Ingen kald kode i `competenceGoals`** — ikke «SAM», ikke «END», ikke «RED»,
  ikke «VLG», ikke «ARG», ikke «#8», ikke «Prioritet: perfekt», ikke «V1»–«V5».

### 3.1 `description`, `title` og navigasjonsfelt er REN TEKST (UFRAVIKELIG)

`title`, `description`, `topics`/`sectionNames` og `competenceGoals` rendres
**RÅTT**. `description` havner uendret i `<meta name="description">`,
`og:description` og `twitter:description` — altså i **Google-treffet og i
lenkeforhåndsvisningen** — og i den synlige kroppen på kapittelsiden. Markdown
rendres aldri der. 122 kapitler i 17 bøker viste `$…$` og `**fet**` i Google før
dette ble oppdaget.

```
✗ Iwabuchis begrep **«contra-flows»** og spørsmålet om `medieeksport`.
✓ Iwabuchis begrep om motstrømmer i medieglobaliseringen, og spørsmålet om japansk medieeksport utfordrer eller styrker eksisterende maktstrukturer.
```

Ingen `$…$`, ingen `**fet**`, ingen `*kursiv*`, ingen backticks, ingen
markdown-lenker i disse feltene. Verktitler skrives med «anførselstegn».
Markdown hører kun hjemme i `content`/`problem`/`solution`/`task`/`hints`.

Skjelettets 40 descriptions er kontrollert mot denne regelen: **ingen inneholder
LaTeX, fet skrift eller backticks**, og den lengste er 185 tegn. Noen inneholder
kolon og tankestrek, som er ren tekst og helt lovlig — det er bare
`BOKCONFIG.json`-beskrivelsen som har et hardt tegnkrav (§18.1).

⚠ **Metadataen må konverteres for seg.** `description` i `textbook-courses*.ts`
skrives av wiringen fra kapittelfila, men er kapittelfila og skjelettet i utakt,
vinner kapittelfila. Fyll begge steder ordrett likt.

---

## 4. Blokktyper (eksakte felt — strukturreferanse: `src/lib/data/chapters/svexfac03-1-1.json`)

- `text`: `{id, type: "text", content}` — markdown-prosa.
- `definition`: `{id, type: "definition", title, content}` — **`title`
  OBLIGATORISK**. Flashcards genereres KUN fra **toppnivå** `definition`-blokker
  med `title` (en definisjon nøstet inne i en `collapsible` teller IKKE).
  I EXFAC03-EAST er `title` enten **norsk begrep ↔ engelsk form**
  («Tributtsystem / tribute system», «Statsfeminisme / state feminism»,
  «Contra-flows / motstrømmer») eller **begrep ↔ presisering**
  («Kultursfære — og hva kritikken av den går ut på», «Ie-systemet — husholdet
  som juridisk enhet»). Åpne innholdet med forklaringen i ORD, lukk med
  **distinksjonen mot nabobegrepet** (skrift mot språk, tributtsystem mot
  kolonisystem, statsfeminisme i Japan mot statsfeminisme i Mao-tidens Kina,
  antropocen mot kapitalocen, endring mot kontinuitet, region som analytisk
  kategori mot region som selvforståelse).
- `theorem`: `{id, type: "theorem", title, content}` — brukes **sparsomt**, til
  modeller som skal stå som én enhet: **ordbudsjettregnestykket**,
  **kuttehierarkiets seks trinn**, **de fire tingene som aldri kuttes**,
  **seksdimensjonsmatrisen** i kap. 3.1, **de fem dimensjonene fra V2025-3** i
  kap. 7.1, og **tretrinnsmalen definisjon → kontrovers → anvendelse med
  eksempel**. Ikke pynt — dette er ikke et regnefag, og det finnes ingen formler.
- `example`: `{id, type: "example", title, problem, solution}` — `solution`
  skrives slik en sterk besvarelse gjør det, **med ordtall oppgitt** (§7.2).
  Et gjennomskrevet svarutdrag uten ordtall er en byggefeil i denne boka.
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

Blokk-id-er: `<kapittel-id>-<løpenavn>` (f.eks. `exfac03-east-3-4-def-eksportledet`),
unike i kapitlet. Duplikate blokk-id-er felles av kvalitetsporten.

**Grep-sjekk før ferdigmelding:**

```bash
grep -l '"difficulty": *"\(medium\|hard\|easy\)"' src/lib/data/chapters/exfac03-east-*.json
# skal gi null treff
```

---

## 5. Obligatorisk kapittelstruktur

### 5.1 Alltid først, i denne rekkefølgen

1. `tip` **Eksamensvinkel** — med de EKSAKTE tallene fra **§6.2 i denne
   kontrakten**. ⚠ **Skriveråd og sjangernavn står FØRST i boksen**, og
   frekvenstallene komprimeres. Panelet fant at lange tallrader fikk lesere til
   å hoppe over hele boksen og dermed miste rådet bakerst. **Forfatteren skal
   ALDRI finne på frekvenstall og aldri regne om dem** (§6.3).
2. `text` **Forkunnskaper** — kapitler i boka som markdown-lenker
   (`[kap. 3.1](/exfac03-east/exfac03-east-3-1)`) + eventuelle kryssbok-lenker
   fra tabellen i §15. «Dette kapitlet kan leses uten forkunnskaper» der
   skjelettet sier `prerequisites: ingen` (kun 0.1).

**Oppfrisket forkunnskap (bindende).** I kapitler med stor avstand til
forkunnskapen SKAL Forkunnskaper-blokka **VISE 2–3 kjernepåstander ferdig
oppfrisket**, ikke bare lenke:

> **Fra kap. 3.1:** de seks dimensjonene er utgangspunktet før moderniseringen,
> statens grep om økonomien, forholdet til utenlandsk kapital og handel, rollen
> til utdanning, det politiske systemet underveis og hva som skjedde med
> ulikheten.
> **Fra kap. 0.2:** tre momenter er bestått-gulvet i V2021-veiledningen, og med
> maks 800 ord er fem momenter taket.

⚠ **Frasen «Sist du var her» er FORBUDT** (grep-sjekkes, §14.5). Blokka
oppsummerer et ANNET kapittel — den kan ikke si «her», og en lærebok vet ikke hva
leseren har gjort. Mange lesere hopper rett til det kapitlet de er redde for på
eksamen. Overskriften skal være **`## Forkunnskaper`**, ikke «Forkunnskaper —
sist du var her» (246 kapitler i ni bøker hadde den formen, og første rydding
fant den ikke fordi den sto med liten forbokstav midt i en overskrift).

| ✗ | ✓ |
|---|---|
| Sist du var her sto dette … | Dette sto der … |
| Sist du var her (fra kap. 3.1): | Fra kap. 3.1: |
| Som du husker fra kap. 2.1 … | I kap. 2.1 står … |
| Da vi gikk gjennom dette sist … | I gjennomgangen i kap. 2.1 … |

Samme forbud rammer «som du sikkert husker», «du har jo allerede sett», «dette
kan du fra før».

**Kapitler der oppfrisket forkunnskap er OBLIGATORISK** (stor avstand til
forkunnskapen, utledet av skjelettets `prerequisites`):

| Kapittel | Hva som skal stå ferdig oppfrisket |
|---|---|
| 1.1 | fra 0.3: hva en fokusanvisning forplikter svaret til, og at redegjørelsen ikke er referat |
| 2.1 | fra 1.5: at valget i en valgoppgave tas på lest stoff, ikke på interesse |
| 3.1 | fra 2.4: at kritikken av «konfucianske verdier» som én størrelse er pensum, ikke fotnote |
| 3.2–3.6 | fra 3.1: de seks sammenligningsdimensjonene, listet |
| 4.1 | fra 3.6: de fire grupperingene av regionens stater eksamen faktisk har brukt |
| 5.1 | fra 4.3: skillet mellom religion som fellestrekk og religion som forskjell |
| 6.1 | fra 5.3: hva Manchukuo og invasjonen 1937–45 var |
| 7.1 | fra 6.3: skillet mellom robust historisk funn og omstridt vurdering |
| 8.1 | fra 0.2: ordbudsjettregnestykket og bestått-gulvet på tre momenter |
| 8.8–8.10 | oppgavens sjangerkrav i tre punkter, hentet fra sitt sjangerkapittel |

### 5.2 Temakapittel (Del 1–7, 27 kapitler) — DNA-drøfting

Etter eksamensvinkel og forkunnskaper går kapitlet i LÆRINGSLØKKER (§1). Disse
blokkene skal finnes, fordelt i løkkene — ikke stablet:

- `text` **Plassering** — hva klyngen handler om og hvilke spørsmålsformer den
  har båret. Abstrakte kjernetemaer åpner med et **hverdagsanker FØR apparatet**
  (§12): kap. 1.1 med to konkrete livsløp, kap. 2.1 med et hverdagslig
  eksempel på hva «én region» kan bety, kap. 7.3 med en konkret miljøsituasjon.
- `definition` **begrepene i begrepskontrakten** — flashcard-kilden, toppnivå med
  `title` som inneholder **både norsk og engelsk form** (§9), og med
  **distinksjonen mot nabobegrepet** utskrevet.
- `text` **stoffet, moment for moment** — der skjelettet gir en momentliste fra
  en sensorveiledning, er den kapitlets ryggrad og skal dekkes punkt for punkt,
  **omskrevet** (§17).
- `example` ×2–3 — nyskrevne case, og minst ett **gjennomskrevet svarutdrag med
  ordtall** som viser stoffet brukt i eksamensform (§7.2).
- **`exercise` ×4–8 INLINE — hardt minimum fire, hardt tak åtte.** Fordeling:
  minst én `lett` innstegsoppgave tidlig (ren gjengivelse med egne ord), 1–2
  fulle eksamensoppgaver i trespørsmålsformens format (ett spørsmål, 400–800 ord,
  tidsbudsjett), 1–2 struktur- eller sorteringsdriller med momentliste som fasit,
  og minst én oppgave per temadel med `difficulty: "vanskelig"`.
- `warning` **Typiske feil** — feilnumrene fra skjelettets «Typiske feil»-linje,
  **glosset i klarspråk ved første bruk PER KAPITTEL**: «(feil nr. 8 — å skrive
  land etter land: å behandle Japan ferdig før du begynner på Kina, i stedet for
  å ta én dimensjon om gangen med begge land inne i den)».
- `tip` **Slik løftes svaret** — det grepet som løfter svaret i akkurat dette
  temaet, med kapitlets drøftingsakse navngitt eksplisitt. Obligatorisk i alle
  temakapitler.
- `collapsible` **Tospråklig begrepsliste** SIST i kapitlet (§9.4). ⚠ Emnet er
  formelfritt, så «Symbol- og formelliste» blir her en **tospråklig
  begrepsliste**. Den skal likevel stå: den er oppslag, ikke inngang, og den er
  dessuten eksamenstrening.

### 5.3 Sjanger- og håndverkskapitler (0.1–0.3, 8.1–8.7)

1. `tip` Eksamensvinkel — sjangerens frekvens (tall fra §6.2).
2. `text` **Oppskrift** — trinnvis disponering med **ord**budsjett og
   tidsbudsjett (§7.1, §6.6).
3. `example` **gjennomskrevet besvarelse** med margkommentarer om hva som gir
   uttelling hvor, og med **ordtellingen i margen**. Margkommentarer skrives som
   egne linjer i `solution`:
   `> Margnotat: her settes periodegrensen i åpningssetningen — det er en gratis gevinst, og det koster tolv ord.`
4. `exercise` ×3–6 nyskrevne oppgaver, løsning = **momentliste** strukturert som
   **minimumskrav / gode besvarelser / sterke besvarelser** (malen
   V2021-veiledningen selv bruker), aldri som sjekkliste. Skjelettet fastsetter
   antallet der det er angitt: **8.1: seks drilloppgaver · 8.2, 8.3, 8.4, 8.5:
   fire hver · 8.6: tre**.
5. `warning` Typiske feil + `collapsible` med sjangerens sjekkliste (§6.4).

Kap. **0.1** har i tillegg hele Del 0-pakken (§12.1) og bokas **kildenote**
(§6.1.1). Kap. **0.2** etablerer bokas to mantraer (§6.7) og
ordbudsjettregnestykket (§7.1). Kap. **0.3** etablerer de fem sjangernavnene i
klarspråk (§6.5) og pensum-/referansekravet.

Kap. **8.7 (feilregisteret)** har én seksjon per feil nr. 1–14, alle med fire
ledd: (a) kravet slik veiledningen eller oppgaveteksten formulerer det, med
termin oppgitt, (b) et nyskrevet «slik ser mangelen ut i en besvarelse»-utdrag,
(c) samme passasje omskrevet slik den skulle vært, (d) en varsellampe leseren kan
kjenne igjen i egen tekst. Deretter gjenkjenningsdrill på **12 nyskrevne
besvarelsesutdrag**, med stokket fasit — aldri samme feilnummer som fasit to
ganger på rad.

⚠ **Ærlighetsforbeholdet SKAL stå i 8.7s aller første avsnitt og der registeret
først presenteres i Del 0:** **ikke én av de fire sensorveiledningene bruker et
ord som «erfaringsvis», «ofte ser vi» eller «mange kandidater».** Alle fire
uttrykker sensors forhåndsforventninger, ikke observerte feil. Hvert punkt
formuleres «veiledningen krever X, og et svar som ikke gjør X, mangler noe» —
aldri «dette er en vanlig feil». **Og to av punktene er utledet av formatet, ikke
av en veiledning:** nr. 3 og nr. 7. Begge merkes.

Kap. **8.7** avslutter med bokas ene **kalde bank**: de fire siste utdragene
leveres UTEN `hints`, fasit = ren momentliste, eksplisitt merket «Kald bank —
ingen hint. Her er det å kjenne igjen mangelen selv som trenes.» Dette er eneste
unntak fra hint-kravet i §12.

### 5.4 Modellbesvarelseskapitler (8.8–8.10)

1. `text` med den nyskrevne oppgaven, formulert slik den ville stått i et sett,
   **med «400–800 ord» oppgitt**, pluss ærlighetslinjen fra §11.1.
2. `collapsible` **Sterk besvarelse** — full, sammenhengende tekst med
   margnotater, **ordtelling i margen ved hvert avsnitt** (§7.2) og
   «— naturlig pausepunkt —» mellom hovedseksjonene.
3. `collapsible` **Kommentert midtnivåbesvarelse** — obligatorisk i **8.8**
   (DNA-krav om minst én autentisk midtnivåbesvarelse i boka): ekte studentspråk,
   litt rotete disposisjon, over bestått-gulvet men med en synlig mangel.
   Margnotater om hva som er **bra nok**, og de to–tre grepene som skiller den
   fra toppnivå. Leseren trenger et realistisk sammenligningspunkt, ikke bare en
   polert topp og en karikert bunn.
4. `collapsible` **Kommentert svak besvarelse** i **8.8, 8.9 og 8.10**, hver med
   sin egen feilprofil: 8.8 er for lang og ufordelt, 8.9 er innenfor ordgrensen
   og likevel ikke bestått, 8.10 ser fyldig ut og mangler eksemplene.
5. `tip` **Sensorblikket** — momentliste strukturert som **minimumskrav / gode
   besvarelser / sterke besvarelser**, anvendt på akkurat denne oppgaven, med den
   eksplisitte setningen om hvorfor midtnivåversjonen ikke nådde toppen, og med
   «minimum for bestått på denne oppgaven» utledet av minimumskravene.
6. `warning` **Typiske feil** — feilene de svake versjonene demonstrerer
   (skjelettet angir dem: 8.8 → nr. 1, 3, 11 · 8.9 → nr. 1, 2 · 8.10 → nr. 4, 5).
   Kravet om `warning`-blokk gjelder også disse kapitlene.

**Ordtallene er FASTE og bindende** (§7.3): 8.8 = 740 / 510 / 860 ord ·
8.9 = 690 / 430 ord · 8.10 = 780 / 620 ord. PORT A kontrollerer at de står der.

### 5.5 Prøvekapitler (`exfac03-east-<del>-prove`, del 1–8)

Id `exfac03-east-<del>-prove`, `chapterNumber` `<del>.P`, tittel «Prøver til del
<del>: <deltittel>».

Struktur: `tip` (dekning + «4 prøver à ~20–45 min» + «kan trygt deles over flere
kvelder — én prøve per økt» + hvor flervalget bor) + `text` Forkunnskaper +
**fire** `collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med
nyskrevne oppgaver og full fasit. **Prøvenes tema og oppgavetyper per del står i
skjelettets §4 — følg dem punkt for punkt.**

**Hver prøve speiler eksamensformatet i miniatyr:** ett spørsmål, 400–800 ord,
med tidsbudsjett. Aldri lange essays. Der en prøve er en drill og ikke en full
oppgave (sorteringsdriller, flervalgsbatterier, matrisedriller), sier prøveteksten
det eksplisitt.

**Fasitstruktur** (obligatorisk i hver prøvefasit):

> **Minimumskrav** (uten disse når svaret ikke bestått-gulvet i V2021-veiledningen)
> · **Gode besvarelser** (det som løfter — begrunnelsen, den utskrevne motsiden,
> det egne eksempelet) · **Sterke besvarelser** (veiingen, koblingen mellom en
> endring og en kontinuitet, den begrunnede landingen).

Dette er malen V2021-veiledningen selv bruker, og den er bindende — ikke
«må/pluss/feller», som er jusarketypens form.

Etter hver prøvefasit: **avkryssbar selvdiagnose-sjekkliste (☐)** — bruk
rubrikkene i §6.4. Kap-referanser i fasitene som markdown-lenker. **Ingen quiz og
ingen begrepsbank i prøvekapitler.**

⚠ **Ja/nei- og riktig/galt-lister:** `sjekk-statiskflervalg.py` leser `a) b) c)
d)` under et nummerert spørsmål som et flervalg. Er listen et sett med
SELVSTENDIGE påstander (ikke deloppgaver av én oppgave), bruk romertall
**(i), (ii), (iii)** — det er nummerering av påstander, ikke listemerking av
deloppgaver. Dette treffer særlig **prøve 1 i del 2** (ti påstander som skal
sorteres), **prøve 3 i del 5** (ti påstander «robust eller omstridt») og
**prøve 3 i del 6** (tolv utsagn som skal sorteres). Beholder du a)–e), sjekk
portens tall mot en manuell telling før du «retter» noe. **Dette er det ENESTE
stedet romertall er tillatt.** Deloppgaver merkes alltid **a), b), c)** (§12).

### 5.6 Prøvekapitlet i Del 8 — fire komplette øvingseksamener

`exfac03-east-8-prove` er ikke fire småprøver, men **fire komplette
øvingseksamener i trespørsmålsform**: tre spørsmål, alle skal besvares, alle
teller likt, 400–800 ord per svar. Profilene er gitt av skjelettets §4 og er
bindende:

| Prøve | Profil | Hva den trener |
|---|---|---|
| **1** | frekvensprofil | de tre tyngste klyngene — kjønn og statens rolle, regional sammenheng, moderniseringsvalgoppgave |
| **2** | gjengangerprofil | de fem formuleringene som er gjentatt i 2021–2023. ⚠ Prøveteksten sier eksplisitt at gjenbruksmønsteret er belagt for 2021–2023 og **brutt** i 2024–2025, så leseren ikke leser prøven som en spådom |
| **3** | fornyelsesprofil | de tre klyngene med 1 av 21 spørsmål hver — politiske systemer, medieglobalisering, antropocen. **Dette er den viktigste av de fire**, fordi det er scenarioet 2024 og 2025 faktisk viser |
| **4** | blandingsprofil med tidtaking | imperialisme, religion og internasjonale relasjoner, med eksplisitt tidtaking og en fordelingsanalyse etterpå der leseren teller ordene i hvert av sine tre svar |

Fasitene er momentlister strukturert som minimumskrav / gode besvarelser /
sterke besvarelser, med nivåbeskrivelse per spørsmål og et **ordbudsjett-forslag**
per spørsmål.

---

## 6. EKSAMENSKONTRAKTEN (fagets kjerne — bindende for alle løsninger og modellsvar)

Alt i denne seksjonen etableres i Del 0 (kap. 0.1–0.3) og refereres i resten av
boka.

### 6.1 Kildegrunnlaget og TALLDISIPLINEN

Tallene er talt manuelt i emnemappa, med hver av de ti filene åpnet og lest. De
er gjengitt her fordi denne kontrakten er porten forfatteren leser.

| Fakta | Tall |
|---|---|
| **Eksamensterminer dokumentert av UiO, 2021–2025** | **8** |
| Årsspenn | **5 kalenderår** |
| Vårterminer / høstterminer | **7 / 1** (5 ordinære vår, 2 utsatte vår, 1 høst) |
| Filer i emnemappa | **10** — alle unike md5, ingen dubletter |
| **Oppgavesett-filer** | **6**, som dekker **6 terminer** |
| **Sensorveiledninger** | **4 filer, 4 terminer** — **kun V2021, V2024, V2025, H2025** |
| **Løsningsforslag / fasiter / modellbesvarelser / studentbesvarelser** | **0** av hver |
| **Flervalgsspørsmål bevart** | **0** — emnet har ingen flervalgsdel i noe dokumentert år |
| **Terminer med bevart oppgavetekst** | **7 av 8** (H2025 har selvvalgt tema) |
| Terminer med bevart informasjonsseksjon (ordgrense og vekting) | **5** |
| **Spørsmål i temafrekvens-nevneren** | **21** (7 terminer × 3 spørsmål) |

**Kontrollsummer:** 6 oppgavesett + 4 sensorveiledninger = **10 filer** ✓ ·
5 ordinære vår + 2 utsatte vår + 1 høst = **8 terminer** ✓ · 6 terminer med egen
oppgavefil + V2024 (oppgaveteksten ligger inni veiledningen) = **7 terminer med
bevart oppgavetekst**, + H2025 = **8** ✓ · 7 × 3 = **21 spørsmål**, og både
klyngetabellen og sjangertabellen i §6.2 summerer til 21 ✓ · 2 terminer med både
oppgavesett og veiledning + 4 med kun oppgavesett + 2 med kun veiledning = **8** ✓

**Ni ufravikelige konsekvenser:**

1. **Ordene «fasit», «løsningsforslag» og «modellbesvarelse fra UiO» kan ALDRI
   brukes om arkivet.** UiO har publisert null av hver for dette emnet. Det som
   finnes er **oppgavesett** og **sensorveiledninger**. Bokas egne
   modellbesvarelser er **nyskrevne** og skal alltid omtales slik. Ordene er
   fortsatt lovlige i bokas egne sammenhenger («prøvefasit», «fasiten skriver ut
   begge landingene»); det er koblingen til arkivet og til UiO som er forbudt.
   Prosaregel-kontrollert (§14.5, port 3).
2. **Nevneren for temafrekvens er 21 spørsmål / 7 terminer — aldri 8, aldri 10,
   aldri «alle eksamener».** Enheten skrives alltid ut: «5 av 21 spørsmål», aldri
   «5 av 21».
3. **Grunnlaget er tynt, og boka sier det.** Åtte terminer over fem år. Boka skal
   **aldri** påstå at grunnlaget er dypt, bredt eller uttømmende. ⚠ Den skal
   heller ikke si at EXFAC03-EAST er «den dypeste» av examen
   facultatum-variantene: emnemappa deler førsteplass blant `EXFAC03-*`-mappene
   med EXFAC03-HUM på 10 filer hver, og er langt grunnere enn SVEXFAC03 (29
   filer, 22 terminer) og JFEXFAC04 (over hundre filer, 40 terminer).
4. **Sensorpåstander har nevner 4 sensorveiledninger, og de dekker kun V2021,
   V2024, V2025 og H2025.** Ingen påstand om hva sensor krever, belønner eller
   lar passere kan bygge på V2022, V2022-utsatt, V2023 eller V2023-utsatt — de
   fire terminene har oppgavesett, men ingen veiledning. Formuleringer som
   «V2022-veiledningen» eller «V2023-veiledningen» omtaler dokumenter som ikke
   finnes og er **hardt forbudt** (§14.5). **Dette er den mest sannsynlige
   enkeltfeilen i denne boka**, fordi alle fire terminene står i temalistene og
   frister til å bli omtalt som om de hadde veiledning.
5. **H2025 teller i terminantallet (8), men aldri i en temafrekvens.**
   Semesteroppgaven har selvvalgt tema; det finnes ingen gitte spørsmål å telle.
6. **⚠ Alle fire sensorveiledningene uttrykker forhåndsforventninger, ikke
   observerte feil.** Ikke én av dem bruker «erfaringsvis», «ofte ser vi» eller
   «mange kandidater». Feilregisteret er derfor **utledet av kravene**, ikke
   rapportert av UiO. Dette ærlighetsforbeholdet SKAL stå der registeret
   presenteres (kap. 0.1 og 8.7). Dette er et skarpere forbehold enn i
   søskenbøkene: SVEXFAC03 har ett belagt observert feilmønster, EXFAC03-EAST har
   **null**.
7. **Fem ting boka ikke har belegg for:** (a) **eksamensvarighet** utenfor V2025
   (fire timer) — for V2021–V2024 står det ingenting; (b) **hjelpemiddelreglene**
   — de står ikke i noe dokument for noen termin; (c) **strykprosent,
   karakterfordeling eller sensurstatistikk** — finnes ikke i materialet;
   (d) **om studenten kan velge besvarelsesspråk** — det står ingen steder (§9.1);
   (e) **hvilke tekster som står på pensumlista** ut over Hudson og Iwabuchi
   (§10).
8. **Ingen påstand om studiepoeng, semesterplassering, læringsutbytte eller
   pensumliste.** Trengs noe av det, hentes det fra UiOs emneside og merkes
   uttrykkelig som hentet derfra, ikke fra kildematerialet.
9. **Fravær i arkivet er ikke belegg for fravær i virkeligheten.** Boka kan si
   «alle terminene vi har grunnlag i, unntatt én, er vårterminer». Den kan
   **ikke** si «emnet går bare om våren» — den formuleringen er hardt forbudt
   (§14.5).

### 6.1.1 Kildenote-mal for kap. 0.1

Bruk denne ordlyden — tilpasset i språk, **aldri i tall**. Malen er testet mot
forbudt-regexen i §14.5 og mot nevnerporten i §6.3, og gir **null treff** i begge
(testen står i §14.5).

> Boka er kalibrert mot hele EXFAC03-EAST-arkivet ved UiO: **8 eksamensterminer
> fra våren 2021 til høsten 2025**, dokumentert gjennom **6 oppgavesett-filer som
> dekker 6 terminer** og **4 sensorveiledninger som dekker 4 terminer** — V2021,
> V2024, V2025 og H2025. Oppgaveteksten er bevart for **7 av 8 terminer**: de
> seks oppgavesettene pluss V2024, der de tre spørsmålene er gjengitt inne i
> sensorveiledningen. Den åttende terminen, H2025, ble vurdert med semesteroppgave
> om selvvalgt tema, så der finnes ingen gitte spørsmål å telle. **Arkivet
> inneholder ingen fasit, ingen løsninger fra UiO, ingen modellbesvarelser og
> ingen besvarelser fra kandidater for dette emnet.** Alt du finner av
> modellbesvarelser, momentlister og prøvefasiter i denne boka er derfor skrevet
> av oss, ut fra oppgavetekstene og veiledningenes egne krav. **Emnet har ingen
> flervalgsdel, og arkivet inneholder null flervalgsspørsmål** — quiz-banken her
> er bokas eget repetisjonsverktøy, ikke en gjengivelse av noe som har vært gitt.
> Sensorveiledningene beskriver dessuten hva sensor forventer, ikke hva kandidater
> faktisk gjorde: ingen av de fire sier noe om observerte feil. **Forbehold:**
> grunnlaget er tynt. Åtte terminer over fem år er lite, og boka sier ikke mer enn
> det dekker. Fire av de åtte terminene har ingen sensorveiledning, og ingenting
> boka sier om hva sensor krever, bygger på dem. Emnet er eldre enn arkivet; hvor
> mye eldre, vet vi ikke.

⚠ **Fellen malen er kalibrert rundt:** «ingen offisielle løsningsforslag» er
riktig i sak, men blokkert av porten. Malen sier derfor «ingen fasit, ingen
løsninger fra UiO», som er like sant og passerer. Skriv aldri om malen til den
forbudte formen, og legg aldri til «10 filer» som nevner for en frekvenspåstand.

### 6.2 AUTORITATIV frekvenstabell per kapittel

**Regelen: tallet er ALLTID antall LISTEDE spørsmål eller terminer i
belegg-lista.** Ikke antall forekomster, ikke et anslag, ikke en omregning.

**Alle 40 kapitlers frekvenspåstander er etterregnet mot belegglistene sine
6. august 2026, og alle stemmer** — med ett unntak som er rettet i analysen og
frigitt her (landtellingen, §20 sprik 1). Skjelettets belegg-blokker kan derfor
brukes ordrett.

**Klyngefordelingen (nevner 21 spørsmål / 7 terminer) — summerer til 21:**

| Klynge | Spørsmål | Terminer | Belegg |
|---|---|---|---|
| Kjønn, familie og ulikhet | **5 av 21** | **5 av 7** | V2021-3, V2022-3, V2022u-3, V2023u-3, V2024-3 |
| Øst-Asia som region | **4 av 21** | **4 av 7** | V2021-1, V2022-1, V2022u-1, V2023u-1 |
| Modernisering og statens rolle | **4 av 21** | **4 av 7** | V2022-2, V2022u-2, V2023-3, V2023u-2 |
| Religion og tanketradisjoner | **2 av 21** | **2 av 7** | V2023-2, V2025-1 |
| Imperialisme og kolonitid | **2 av 21** | **2 av 7** | V2023-1, V2024-1 |
| Internasjonale relasjoner etter 1945 | **1 av 21** | **1 av 7** | V2021-2 |
| Politiske systemer | **1 av 21** | **1 av 7** | V2025-3 |
| Medier og kulturglobalisering | **1 av 21** | **1 av 7** | V2025-2 |
| Miljø og antropocen | **1 av 21** | **1 av 7** | V2024-2 |
| **Sum** | **21 av 21** ✓ | | |

**Sjangerfordelingen (nevner 21 spørsmål) — summerer til 21:**

| Sjanger (navnet boka bruker) | Andel | Belegg |
|---|---|---|
| sammenligningen | **6 av 21** | V2022-1, V2023-3, V2023u-1, V2023u-2, V2024-3, V2025-3 |
| endring og kontinuitet | **5 av 21** | V2021-2, V2021-3, V2022u-3, V2023-1, V2024-1 |
| redegjørelsen med anvendelse | **4 av 21** | V2023-2, V2024-2, V2025-1, V2025-2 |
| valgoppgaven | **4 av 21** | V2022-2, V2022-3, V2022u-2, V2023u-3 |
| argumenter for og mot | **2 av 21** | V2021-1, V2022u-1 |
| **Sum** | **21 av 21** ✓ | |

**Landtellingen (nevner 21 spørsmål — teller NAVNGIVNING, radene overlapper og
summerer IKKE til 21). Alle fem tall er nå lovlige:**

| Land | Spørsmål | Belegg | ⚠ |
|---|---|---|---|
| Folkerepublikken Kina | **9 av 21** | V2021-3, V2022-2, V2022u-2, V2022u-3, V2023-1, V2023-3, V2023u-2, V2024-1, V2024-3 | talt i terminer: 6 av 7 |
| Japan | **8 av 21** | V2021-3, V2022-2, V2022u-2, V2022u-3, V2023-1, V2023u-2, V2024-1, V2024-3 | talt i terminer: 6 av 7 |
| Sør-Korea (ROK) | **5 av 21** | V2022-2, V2022u-2, V2023-3, V2023u-2, V2024-3 | — |
| Nord-Korea (DPRK) | **4 av 21** | V2022-2, V2022u-2, V2023-3, V2023u-2 | — |
| Taiwan | **2 av 21** | V2023-1, V2023-3 | ⚠ **begge fra SAMME termin — talt i terminer er Taiwan 1 av 7** |

⚠ **Enheten må stå i hver eneste forekomst.** «Taiwan står i 2 av 21 spørsmål»
er sant; «Taiwan står i 2 av 7 terminer» er usant. Kapittel 3.6 og kap. 0.1 skal
begge oppgi **begge** tellingene for Taiwan, slik at leseren ser forskjellen.

**Per kapittel (bindende form):**

| Kap. | Påstand |
|---|---|
| 0.1 | metakapittel — hele grunnlaget. Tre spørsmål **7 av 7 terminer med bevart oppgavetekst** · ordgrense og likevekt **5 av 5 terminer der informasjonsseksjonen er bevart** · terminmønster **7 av 8 terminer** vår, **1 av 8** høst, ordinær våreksamen **5 av 5 år** uten hull, utsatt **2 av 5 år** · språk **6 av 6 oppgavesett** på norsk bokmål og **2 engelske + 1 tospråklig + 1 norsk = 4 av 4 sensorveiledninger** · hele klynge-, sjanger- og landtabellen over |
| 0.2 | **4 sensorveiledninger**; bestått-gulvet står i **V2021-veiledningen** alene |
| 0.3 | sjangertabellen i sin helhet; **7 av 21 spørsmål** gir eksplisitt valg |
| 1.1 | kjønnsklyngen **5 av 21 spørsmål** i **5 av 7 terminer**; Japan navngitt i V2021-3, V2022u-3 og V2024-3; **V2021-3 og V2022u-3 er ordrett identiske** |
| 1.2 | samme klynge, samme tall; Folkerepublikken Kina navngitt i de samme tre |
| 1.3 | statens rolle eksplisitt etterspurt i **3 av 21 spørsmål** (V2021-3, V2022u-3, V2023-3) |
| 1.4 | **V2024-3**, én av de **6 av 21** sammenligningsoppgavene |
| 1.5 | **V2022-3 og V2023u-3**, 2 av de **4 av 21** valgoppgavene; miljø 1 primær + 1 sekundær = berørt i **2 av 7 terminer** |
| 2.1 | **V2021-1 og V2022u-1 ordrett identiske** — de eneste **2 av 21** argumentasjonsoppgavene; klyngen **4 av 21** i **4 av 7 terminer** |
| 2.2 | ⚠ **0 av 21 spørsmål primært**, men valgfritt fokus i **2 av 7 terminer** (V2022-1, V2023u-1) |
| 2.3 | klyngen **4 av 21** i **4 av 7 terminer**; tributtsystemet er moment i **V2021-veiledningen** |
| 2.4 | motkolonnen i V2021-veiledningen; **2 av 21** argumentasjonsoppgaver |
| 3.1 | klyngen **4 av 21** i **4 av 7 terminer**; **V2022-2 og V2022u-2 ordrett identiske** |
| 3.2 | Japan **8 av 21 spørsmål**; klyngen **4 av 21** i **4 av 7 terminer** |
| 3.3 | Folkerepublikken Kina **9 av 21 spørsmål**; klyngen **4 av 21** i **4 av 7** |
| 3.4 | Sør-Korea (ROK) **5 av 21 spørsmål** (belegg i tabellen over) |
| 3.5 | Nord-Korea (DPRK) **4 av 21 spørsmål** (belegg i tabellen over) |
| 3.6 | Taiwan **2 av 21 spørsmål**, begge fra V2023, altså **1 av 7 terminer**; ⚠ Taiwan er **ikke** valgalternativ i V2022-2 og V2022u-2 |
| 4.1 | **V2025-1**; klyngen **2 av 21** primært, berørt i **4 av 7 terminer** |
| 4.2 | **V2023-2**; samme klyngetall |
| 4.3 | religion valgfritt fokus i **2 av 7 terminer**, i tillegg til de **2 av 21** primære |
| 5.1 | klyngen **2 av 21** i **2 av 7 terminer** |
| 5.2 | **V2023-1** og V2024-1s Manchukuo-moment; samme klyngetall |
| 5.3 | **V2024-1**, med den mest detaljerte momentlisten i arkivet; **2 av 21** i **2 av 7** |
| 6.1 | klyngen **1 av 21** i **1 av 7 terminer**; kontinuitetskolonnen i V2021-veiledningen |
| 6.2 | **V2021-2**, den mest detaljerte enkeltveiledningen for et endringsspørsmål; **1 av 21** i **1 av 7** |
| 6.3 | endringskolonnen i V2021-veiledningen; **1 av 21** i **1 av 7** |
| 7.1 | **V2025-3**; **1 av 21** i **1 av 7**; også 1 av de **6 av 21** sammenligningsoppgavene og 1 av de **7 av 21** med eksplisitt valg |
| 7.2 | **V2025-2**; **1 av 21** i **1 av 7** |
| 7.3 | **V2024-2**, den strengeste kravspesifikasjonen i arkivet; **1 av 21** i **1 av 7**; miljø berørt i **2 av 7 terminer** |
| 8.1 | ordgrensen **5 av 5 terminer der informasjonsseksjonen er bevart**; tre spørsmål **7 av 7 terminer med bevart oppgavetekst**; bestått-gulvet fra **V2021-veiledningen** |
| 8.2 | sammenligningen **6 av 21 spørsmål** |
| 8.3 | endring og kontinuitet **5 av 21 spørsmål**; argumentasjon **2 av 21** |
| 8.4 | redegjørelsen med anvendelse **4 av 21 spørsmål** |
| 8.5 | **7 av 21 spørsmål** gir valg; valgoppgaven **4 av 21**; argumentasjonsoppgaven **2 av 21** |
| 8.6 | **H2025**, den eneste høstterminen — **1 av 8 terminer** |
| 8.7 | feilregisteret — **14 punkter**, destillert fra **4 sensorveiledninger**; 4 av 8 terminer har ingen veiledning |
| 8.8 | kjønnsklyngen **5 av 21** i **5 av 7 terminer**; spørsmålsmalen ordrett i V2021-3 og V2022u-3 |
| 8.9 | argumentasjonsoppgaven **2 av 21**, ordrett identisk; klyngen **4 av 21** i **4 av 7** |
| 8.10 | **V2024-2**; **1 av 21** i **1 av 7 terminer** |

### 6.3 NEVNERPORTEN — de fem lovlige nevnerne, og bare de fem

| Nevner | Når den brukes | Eksempel |
|---|---|---|
| **21 spørsmål** | ALLE temafrekvens-, sjanger- og landpåstander | «Sammenligningen står 6 av 21 spørsmål.» |
| **7 terminer** | når boka teller terminer med bevart oppgavetekst | «Kjønn står i 5 av 7 terminer.» |
| **8 terminer** | **bare** om kildegrunnlaget som sådan, aldri om et tema | «7 av 8 terminer er vårterminer.» |
| **4 sensorveiledninger** | ALT som handler om hva sensor krever eller belønner | «Alle fjorten punktene er utledet av krav i minst én av de 4 sensorveiledningene.» |
| **5 terminer der informasjonsseksjonen er bevart** | **kun** om ordgrensen og om at de tre svarene teller likt | «Ordgrensen er belagt i 5 av 5 terminer der informasjonsseksjonen er bevart.» |

⚠ **Nevner 5 er et bevisst tillegg til analysens § 8.2, som lister fire.** Den er
hjemlet i analysens § 2.2 og § 9.1 punkt 5, og den er nødvendig fordi
ordgrensetreningen er bokas ryggrad. **Prisen for tillegget er at den aldri får
stå naken: hver gang tallet 5 brukes som nevner, skal setningen selv si hva de
fem er.** Formen er alltid **«5 av 5 terminer der informasjonsseksjonen er
bevart»**.

⚠⚠ **«5 av 8» er HARDT FORBUDT** og står i forbudt-regexen (§14.5). Det er den
ene formuleringen som ville gjort ordgrensen — bokas ryggrad — til en påstand om
et grunnlag den ikke har. Ordgrensen gjelder alle de fem terminene der
informasjonsseksjonen finnes; den mangler ikke i de tre andre, den er der
uopplyst.

**Ufravikelige konsekvenser:**

- **Enheten skrives alltid ut.** «6 av 21 spørsmål», aldri «6 av 21». Uten enhet
  vet ikke leseren om det telles spørsmål, terminer eller filer — og det er
  nettopp der utv1000 og inter1000 gikk i grøfta.
- **«Sett» er ALDRI en nevner i denne boka.** Ordet er tvetydig her (10 filer,
  6 oppgavesett, 7 terminer med tekst, 8 terminer totalt). Skriv «spørsmål» eller
  «terminer».
- **«I de fleste terminene», «gjennomgående», «nesten alltid» og «ofte» er
  FORBUDT som frekvenspåstander** uten et telt tall ved siden av.
- **Nevneren for en KLYNGE er ikke nevneren for et DELTEMA.** Region-klyngen står
  4 av 21 spørsmål; det betyr **ikke** at skriftsystemene er prøvd fire ganger.
  Kap. 2.2 skal skrive «som del av regionklyngen, 4 av 21 spørsmål» og deretter
  sitt eget tall: **0 av 21 primært, valgfritt fokus i 2 av 7 terminer**. Dette
  er den vanligste måten å produsere et sant tall som sier noe usant.
- **Ti er et FILTALL, ikke et terminantall.** Tallet 10 opptrer **kun** i
  kildenoten, og alltid som «6 oppgavesett-filer og 4 sensorveiledninger».

**Maskinell kontroll: PORT C (§6.3.1).**

### 6.3.1 PORT C — nevnerporten (testet 6. august 2026)

Porten leser JSON-strukturen, ikke rå tekst, og kontrollerer hver «N av M»-brøk
mot den lovlige nevner-/enhetsparingen. Kjørt mot fikstur: den fanget «6 av 21»
uten enhet og slapp gjennom alle de lovlige formene i kildenote-malen.

```bash
python3 - <<'EOF'
# PORT C — EXFAC03-EAST: bare fem lovlige nevnere, og enheten skal alltid stå.
import glob, json, os, re, sys
LOVLIG = {
    21: r"spørsmål",
    7:  r"terminer",
    8:  r"terminer",
    4:  r"sensorveiledninger|veiledninger",
    5:  r"terminer der informasjonsseksjonen er bevart|år",
    6:  r"oppgavesett|terminer",
}
BROK = re.compile(r"\b(\d+)\s+av\s+(\d+)\b")
def strenger(o, sti=""):
    if isinstance(o, str): yield sti, o
    elif isinstance(o, dict):
        for k, v in o.items(): yield from strenger(v, f"{sti}.{k}")
    elif isinstance(o, list):
        for i, v in enumerate(o): yield from strenger(v, f"{sti}[{i}]")
avvik, n = [], 0
for p in sorted(glob.glob("src/lib/data/chapters/exfac03-east-*.json")):
    navn = os.path.basename(p)[:-5]
    for sti, s in strenger(json.load(open(p, encoding="utf-8"))):
        for m in BROK.finditer(s):
            n += 1; nev = int(m.group(2)); etter = s[m.end():m.end()+70].lstrip()
            if nev not in LOVLIG:
                avvik.append(f"{navn}{sti}: ULOVLIG NEVNER «{m.group(0)}» → «{s[max(0,m.start()-60):m.start()+80]}»")
            elif not re.match(LOVLIG[nev], etter, re.I):
                avvik.append(f"{navn}{sti}: «{m.group(0)}» mangler eller har feil enhet → «{m.group(0)} {etter[:60]}»")
print(f"{n} brøker | avvik: {len(avvik)}")
for a in avvik[:40]: print(" -", a)
sys.exit(1 if avvik else 0)
EOF
```

**Porten skal gi null avvik.** To ting den ikke kan fange, og som forfatteren må
kontrollere manuelt: at brøken faktisk stemmer med belegglista i §6.2, og at
«5 av 5 terminer der informasjonsseksjonen er bevart» brukes om ordgrensen og
ingenting annet. Den siste dekkes av prosaregel 5 i §14.5.

### 6.4 Karakterskalaen, sensorkravene og de tre rubrikkene

⚠ **Den eneste fullstendige A–F-skalaen i arkivet står i H2025-veiledningen,
altså for semesteroppgaveformen.** De tre vår-veiledningene har **ingen**
A–F-beskrivelse. **Skalaen kan derfor bare stå to steder i boka:** i
[kap. 8.6](/exfac03-east/exfac03-east-8-6), der høstformen behandles, og i Del
0s orienteringsboks som generell orientering om hva UiO-sensur måler. **Begge
steder med forbeholdet skrevet ut**, og aldri presentert som karakterskalaen for
trespørsmålseksamen.

Skalaen, omskrevet (kun de to lovlige stedene):

| Karakter | Kjerne |
|---|---|
| **A** | utmerket i alle aspekter, selv om den kan ha noen mindre feil |
| **B** | god oppgave med god forståelse av alle aspekter, noen få svakheter |
| **C** | tilfredsstillende; god beherskelse av noen aspekter, svakheter i andre |
| **D** | betydelige svakheter i mange aspekter, men tilfredsstillende nivå på noen |
| **E** | tilfredsstiller minimumskriteriene, men har betydelige svakheter i de fleste aspekter |
| **F** | utilstrekkelig; oppfyller ikke minimumskriteriene eller akademiske standarder |

**Legg merke til hva skalaen måler:** ordet som går igjen er **aspekter**, ikke
kunnskapsmengde. Forskjellen mellom C og B er hvor mange av kriteriene som er
innfridd, ikke hvor mye kandidaten kan. Det er verdt å ta med seg uansett form,
og boka sier det.

**«C er en god og vanlig karakter» skal stå eksplisitt i Del 0.**

**Det eneste konkrete karakterkriteriet for trespørsmålsformen** er
bestått-gulvet i V2021-veiledningen: **minst tre momenter på hvert av de tre
spørsmålene**, og for spørsmål 2 dessuten **både** endringer **og**
kontinuiteter. ⚠ Dette står i **én** veiledning, for **én** termin. Boka skriver
«V2021-veiledningen krever minst tre momenter for bestått på hvert av de tre
spørsmålene» — **aldri** «eksamen krever tre momenter».

**Hva de fire veiledningene krever, samlet** (bindende for alle fasiter):

| Veiledning | Krav |
|---|---|
| **V2021** | minst tre momenter per spørsmål for bestått; på endringsspørsmålet **både** endringer **og** kontinuiteter; momentlister i to kolonner |
| **V2024** | den strengeste kravspesifikasjonen i arkivet: definisjon · minst én av to kontroverser, helst begge · tre anvendelser **med ett eksempel på hver** · navngitte hendelser og personer hentet fra den obligatoriske litteraturen · studenten kan sitere eller parafrasere, men **må forklare litt og gi eksempler for å vise at hun har forstått** |
| **V2025** | tre generiske kriterier: **grundig forståelse av kursets innhold** · **klarhet i uttrykket** · **riktig bruk av referanser der det er nødvendig** |
| **H2025** | formelle kriterier og kvalitetskriterier for semesteroppgaven, med **analysen av kildene vektlagt mest**; full A–F-skala; totalforbud mot KI |

⚠ At **referansebruk er et eksplisitt vurderingskriterium allerede i vårformen**,
er verdt en egen setning i kap. 0.2 og 0.3.

**De tre rubrikkene (bindende selvrettingsverktøy, binære — leseren skal kunne
krysse av uten skjønn).** De står i kap. 0.2 og i 8.1–8.5, og hver prøvefasit
viser tilbake til den som passer.

**Ordgrenserubrikken:**

☐ Er svaret mellom 400 og 800 ord?
☐ Står det minst tre momenter, og er hvert av dem utviklet med påstand,
  utdyping og ett eksempel?
☐ Er ingen av momentene halvferdige?
☐ Er de tre svarene omtrent like lange?
☐ Sier åpningssetningen hvordan du har lest spørsmålet?

**Tosidighetsrubrikken:**

☐ Er begge sider av spørsmålet representert med minst ett moment?
☐ Er periodegrensene satt — et fra og et til?
☐ Er det minst én kobling som viser at en endring og en kontinuitet henger sammen?
☐ Veier avslutningen, i stedet for å gjenta åpningen?
☐ Er landingen begrunnet, ikke bare erklært?

**Sammenligningsrubrikken:**

☐ Er dimensjonene valgt før første setning, og sagt i åpningen?
☐ Er svaret organisert etter dimensjon, ikke etter land?
☐ Står alle enhetene inne i hvert dimensjonsavsnitt?
☐ Er antallet dimensjoner tilpasset ordgrensen?
☐ Sier avslutningen hva forskjellene skyldes, i stedet for å liste dem på nytt?

### 6.5 Sjangrenes anatomi (bindende for alle modellsvar og fasiter)

⚠ **Kodene SAM, END, RED, VLG og ARG er skjelettets språk og skal ALDRI stå i
boka — heller ikke i parentes.** Dette skiller EXFAC03-EAST fra søskenbøkene,
der kodene er lovlige i parentes etter navnet. Her finnes de ikke: skjelettet er
uttrykkelig på at «kodene under er skjelettets språk, ikke bokas». Skriv navnet.

**Sammenligningen, fire trinn:** (1) velg dimensjoner før du skriver — tre til
fem, aldri flere enn ordgrensen bærer → (2) fyll matrisen i kladden, to ord per
celle → (3) skriv dimensjon for dimensjon, med begge eller alle enhetene inne i
hvert avsnitt → (4) avslutt med hva forskjellene skyldes, ikke med en
oppsummering av dem. **Strukturfellen er å skrive land etter land** (feil nr. 8),
og V2024-veiledningen organiserer selv svaret som likheter og deretter
forskjeller.

**Endring og kontinuitet, fem trinn:** (1) åpning som sier hvordan du leser
spørsmålet og hvilken periode du regner fra → (2) to til tre momenter på
endringssiden → (3) minst ett moment på kontinuitetssiden → (4) én kobling som
viser at en endring og en kontinuitet henger sammen — **dette er grepet som
løfter svaret** → (5) veiing: hva veier tyngst, og hvorfor. **Tokolonneformen er
arbeidsredskapet:** før du skriver, sett opp to kolonner og fyll begge. Er den
ene tom, har du ikke et svar ennå.

**Redegjørelsen med anvendelse, tre trinn:** definer → si hva som er omstridt →
anvend med **ett eksempel per anvendelse**. **Redegjørelsen er aldri referat.**
Alle fire redegjørelsesspørsmål i materialet har et andreledd som gjør referat
utilstrekkelig. **Firetrinnsformen for et fullverdig eksempel:** navngi begrepet
→ gi eksempelet → si **eksplisitt** hvilket trekk ved eksempelet som svarer til
hvilket ledd i begrepet → si i én setning hva som ville gjort eksempelet dårlig.

**Valgoppgaven, fire trinn:** (1) les alle alternativene før du velger — ikke det
første som ser kjent ut → (2) tell momenter i hodet: hvor mange momenter med
eksempel har du på hvert alternativ? Under tre, velg noe annet → (3) velg det du
har lest, ikke det du synes er mest interessant → (4) si i åpningen hva du valgte.
**Valget skal ta minutter, ikke kvarter**, og oppdager du midtveis at du valgte
feil, er svaret nesten alltid å fullføre valget du tok.

**Argumenter for og mot:** minst ett moment hver vei → veiing → **begrunnet
landing**. ⚠ **Landingen skal være reell.** Et svar som ender i «det kommer an
på» uten å si hva det kommer an på, har ikke veid noe. Tre landingstyper er alle
fullverdige: den som velger side, den som velger side med forbehold, og den som
viser at spørsmålet er galt stilt.

**Fokusanvisningen er en instruks, ikke en høflighet** (feil nr. 6). Et svar som
beskriver konfucianismen generelt uten å behandle mellomstatlige forhold, har
ikke besvart V2025-1.

### 6.6 Tids- og ordbudsjett (bruk denne modellen konsekvent i hele boka)

⚠ **Varigheten er oppgitt for ÉN termin.** V2025 er en «kort digital
hjemmeeksamen» på fire timer. For V2021–V2024 står det ingenting. **Boka regner
derfor i ANDELER, ikke i minutter, og sier hvorfor.**

**Modellen:** tre svar som teller likt betyr **tre like tidsbolker**. En student
som bruker halve tiden på det første svaret, har allerede tapt en tredel av
karakteren. Innenfor hver bolk: ~15 % lesing og disponering → ~70 % skriving →
~15 % gjennomlesning og ordtelling.

**Der en oppgaves deklarerte tid avviker fra summen av deltidene, forklares
differansen** (skrivetid mot total). «Lite tid?»-boksen sier eksplisitt at
kapitlenes tidsanslag er **LESEtid**, og at den som skriver besvarelser for hånd
bør legge på ca. ×1,5.

**Ordbudsjettet er den harde delen og hører i §7.1.**

### 6.7 Bokas to mantraer

1. **«Tre momenter utviklet slår ti nevnt.»** Etableres i kap. 0.2, gjentas i
   hvert sjangerkapittel. Hjemmelen er bestått-gulvet i V2021-veiledningen
   sammenholdt med V2024-veiledningens krav om at studenten må forklare litt og
   gi eksempler for å vise at hun har forstått.
2. **«Spørsmålet har to sider fordi veiledningen sier det.»** Etableres i
   kap. 0.2. Hjemmelen er V2021-veiledningens uttrykkelige krav om **både**
   endringer **og** kontinuiteter, og oppgavetekstenes egne «hvilke argumenter
   støtter … hvilke peker i motsatt retning».

Begge mantraene skal stå **ordrett** i boka, og begge forklares i klarspråk ved
første bruk.

---

## 7. ORDGRENSEKONTRAKTEN (bokas største enkeltrisiko — hard port)

**Ordgrensen er bokas ryggrad.** Eksamen er tre spørsmål à **minst 400 og maks
800 ord**, alle obligatoriske, alle teller likt. Det er en ramme på 1 200–2 400
ord for hele eksamen. **En modellbesvarelse som sprenger 800 ord uten å si det,
underviser feil** — den lærer studenten en lengde som ikke finnes på eksamen, og
den gjør bokas eget signaturapparat til pynt.

**Belegget, med enheten skrevet ut:** ordgrensen er belagt i **5 av 5 terminer
der informasjonsseksjonen er bevart** (V2021, V2022, V2022-utsatt, V2023,
V2023-utsatt), ordrett hver gang. At **de tre svarene teller likt** er belagt i
de samme fem. At det er **tre spørsmål** er belagt i **7 av 7 terminer med
bevart oppgavetekst**.

⚠ **Er ordgrensen ute, eller bare uskrevet?** Materialet kan ikke avgjøre det.
To lesninger er begge forsvarlige: (i) ordgrensen falt bort da eksamen ble lagt
om til fire timers digital hjemmeeksamen i V2025, eller (ii) den står fortsatt i
eksamenssystemets rammetekst og ble bare ikke gjengitt i den fila vi har.
**Boka skal si begge deler, be leseren sjekke sin egen semesterside, og trene
400–800-formatet uansett** — fordi det er formatet de fem terminene faktisk
krevde, og fordi et svar som holder seg innenfor 800 ord aldri blir straffet av
at grensen er borte. Denne setningen skal stå i kap. 0.1 og gjentas i kap. 8.1.

### 7.1 Ordbudsjettregnestykket (skrives UT, ikke antydes)

Regnestykket er det som gjør ordgrensen til et verktøy i stedet for en trussel.
**Begge varianter skal stå i klartekst i kap. 0.2 og gjentas i kap. 8.1:**

| Ramme | Åpning | Per moment | Veiing | Momenter |
|---|---|---|---|---|
| **800 ord** | ~60 ord | ~160 ord × 4 | ~60 ord | fire |
| **450 ord** | ~40 ord | ~120 ord × 3 | ~50 ord | tre |

**Konsekvensen skrives ut:** med bestått-gulvet på tre momenter og et tak på 800
ord får hvert moment mellom 100 og 180 ord — **nok til påstand, utdyping og ett
eksempel, ikke nok til to eksempler.** 400 ord er omtrent tre til fire avsnitt;
800 er omtrent seks til åtte. **Tre momenter er gulvet, fem er taket.**

**Fordelingen mellom de tre svarene** hører til samme regnestykke og skal stå i
kap. 8.1: 800 + 800 + 400 er en dårligere eksamen enn 650 + 650 + 650, selv om
ordtallet er høyere, fordi de tre teller likt. Kapitlet regner det ut.

**Å telle ord uten teller** er en egen ferdighet og skal læres i kap. 8.1: tell
ordene i én full linje av din egen håndskrift eller i én linje på skjermen, gang
med antall linjer. Kapitlet gir leseren **to kalibreringsavsnitt med kjent
ordtall** å måle seg mot.

### 7.2 ORDTELLINGSREGELEN (ufravikelig)

**Hver gang boka viser et helt eller delvis svar i eksamensform, skal ordtallet
stå.** Det gjelder:

- **alle modellbesvarelser** i kap. 8.8–8.10 — og der skal ordtellingen dessuten
  stå **i margen ved hvert avsnitt**, slik at leseren ser hvor ordene faktisk
  går;
- **alle gjennomskrevne eksempler** (`example.solution`) som er skrevet som et
  eksamenssvar;
- **alle prøveoppgaver i eksamensform**, der ordtallet står som krav i
  oppgaveteksten («400–800 ord») og som forslag i fasitens ordbudsjett;
- **alle case-oppgaver der skjelettet fester et måltall** — 340 ord i kap. 2.1,
  420 i 2.2 og 4.1, 400 i 3.2/3.3/3.5, 450 i 3.6 og 4.2, 500 i 5.3, 600 og 420 i
  6.2, 650 i 7.3, 700 i 7.1, 310/640/1 150 i 0.2, 1 150 → 780 → 430 i 8.1, 620 i
  8.3, 500 i Del 1-prøve 4, 450 i Del 5-prøve 4.

**Et ordtall utenfor 400–800 er lovlig — men bare når teksten sier at det er
utenfor, og hvorfor.** «Et 340-ords svar» er en byggefeil; «et kort svar på 340
ord — bevisst under grensen, fordi det er momentbalansen som trenes her, ikke
lengden» er riktig. Uten rammen lærer boka studenten at 340 ord er en akseptabel
eksamensbesvarelse, og det er det ikke.

Margnotatformen i modellbesvarelsene:

```
> **[0–78 ord]** Åpningen setter periodegrensen og sier hvordan spørsmålet er lest.
> **[79–241 ord]** Første moment: påstand, utdyping, ett eksempel.
```

### 7.3 De faste ordtallene i modellbesvarelsene (bindende)

Skjelettet fester disse, og PORT A kontrollerer at de står der:

| Kapittel | Nivå | Ordtall | Hva det demonstrerer |
|---|---|---|---|
| **8.8** | sterk | **740** | innenfor taket, fire momenter, begge sider dekket |
| **8.8** | midtnivå | **510** | over bestått-gulvet, tre korrekte momenter, men bare fra endringssiden |
| **8.8** | svak | **860** | **over grensen**, ni momenter nevnt, ingen utviklet |
| **8.9** | sterk | **690** | skarp landing, motsiden behandlet uten stråmann |
| **8.9** | svak | **430** | **innenfor ordgrensen og likevel ikke bestått** — poenget er at ordgrensen ikke er kvalitetsmålet |
| **8.10** | sterk | **780** | helt oppunder taket, fordi kravspesifikasjonen har fem obligatoriske elementer |
| **8.10** | svak | **620** | ser fyldig ut, mangler eksemplene — den mest lærerike svake besvarelsen i boka |

**Ordbudsjettet i 8.10s sterke besvarelse skal stå i margen:** definisjon 90 ord,
kontroversene 150, de tre innfallsvinklene 150 hver, veiing 90. Summen er 780. ✓

### 7.4 Kuttehierarkiet og de fire tingene som aldri kuttes

Dette er kap. 8.1s kjerne og skal stå som `theorem` (én enhet), rangert:

1. **Bakgrunnsavsnittet** som forklarer spørsmålets historie før du begynner å
   svare. Koster 80–120 ord og gir null uttelling.
2. **Det andre eksempelet på samme poeng.** Ett eksempel viser at du har
   forstått; det andre viser bare at du har to.
3. **Gjentakelsen av åpningen i avslutningen.** Avslutningen skal veie, ikke
   oppsummere.
4. **Forbeholdene og de doble adjektivene.** «Det kan kanskje hevdes at det
   muligens er slik at …» er tolv ord som gjør jobben til fire.
5. **Momenter utover det fjerde**, kuttet helt — ikke forkortet. Et halvferdig
   femte moment er verre enn ingen.
6. **Detaljnivået i det svakeste momentet**, komprimert til én setning.

**Kuttes ALDRI** (egen `theorem`, like konkret):

- **det tredje momentet** — under tre er under bestått-gulvet i
  V2021-veiledningen;
- **den ene siden av et tosidig spørsmål** — V2021-veiledningen krever begge på
  endringsspørsmålet, og oppgaveteksten selv krever begge på
  argumentasjonsspørsmålene;
- **eksempelet der oppgaven eller veiledningen ber om eksempel** — V2024 krever
  ett eksempel per anvendelse og sier at eksemplene er det som viser forståelse;
- **fokusanvisningens element** — å kutte det er å svare på et annet spørsmål.

**Kuttedemonstrasjonen i full lengde** er kapitlets midtpunkt:
1 150-ordsversjonen fra [kap. 0.2](/exfac03-east/exfac03-east-0-2) kuttes til
**780 ord** foran leseren, med margkommentar ved hvert kutt om hvilket trinn i
hierarkiet som ble brukt og hva det kostet. Deretter kuttes den videre til
**430 ord**, som er den harde varianten: her må et helt moment ut, og kapitlet
viser hvordan man velger hvilket.

**Og den motsatte situasjonen er også reell:** å komme opp til 400. Løsningen er
aldri flere adjektiver — den er ett moment til, eller ett eksempel til på et
moment som mangler et.

### 7.5 PORT A — ordgrenseporten (testet 6. august 2026)

Porten leser JSON-strukturen setning for setning. Kjørt mot to fikstur-kapitler:
den slapp gjennom alle de lovlige formene (740/510/860 ord med ramme, «samlet
ramme på 1 200–2 400 ord for hele eksamen», kuttedemonstrasjonen) og fanget den
ene ulovlige («Modellbesvarelsen er på 1 150 ord» uten ramme) samt et
uframet «340-ords svar».

```bash
python3 - <<'EOF'
# PORT A — EXFAC03-EAST: ordtall i eksamensform, kontrollert PER SETNING.
#  1. Et ordtall utenfor 400–800 må stå i en ramme som sier at det er utenfor.
#  2. Kap. 8.8, 8.9 og 8.10 må inneholde de faste ordtallene fra §7.3.
import glob, json, os, re, sys
SPENN = re.compile(r"\d[\d  ]*\s*(?:–|-|til)\s*\d[\d  ]*\s*ords?\b")   # «400–800 ord» er en grenseangivelse, ikke et svar
ORD   = re.compile(r"(?<![\d–-])(\d[\d  ]{0,4}\d|\d{1,4})\s*[-–]?\s*ords?\b")
RAMME = re.compile(r"over grensen|under grensen|over taket|under gulvet|for langt|for kort|"
                   r"utenfor ordgrensen|bevisst under|bevisst over|kutt|bygg|sprenge|"
                   r"hele eksamen|samlet ramme|til sammen|de tre svarene|ikke bestått|demonstrasjon", re.I)
FASTE = {"8-8": {740, 510, 860}, "8-9": {690, 430}, "8-10": {780, 620}}
FORK = ("jf.", "nr.", "s.", "kap.", "bl.a.", "f.eks.", "pkt.", "ca.", "dvs.", "osv.", "m.m.")
def setninger(s):
    v = s
    for f in FORK: v = v.replace(f, f.replace(".", "\x00"))
    return [b.replace("\x00", ".") for b in re.split(r"(?<=[.!?])\s+|\n+", v)]
def strenger(o, sti=""):
    if isinstance(o, str): yield sti, o
    elif isinstance(o, dict):
        for k, v in o.items(): yield from strenger(v, f"{sti}.{k}")
    elif isinstance(o, list):
        for i, v in enumerate(o): yield from strenger(v, f"{sti}[{i}]")
avvik, n, sett = [], 0, {}
for p in sorted(glob.glob("src/lib/data/chapters/exfac03-east-*.json")):
    navn = os.path.basename(p)[:-5]; kap = navn[len("exfac03-east-"):]
    sett.setdefault(kap, set())
    for sti, s in strenger(json.load(open(p, encoding="utf-8"))):
        for snt in setninger(s):
            for m in ORD.finditer(SPENN.sub(" ", snt)):
                n += 1; tall = int(re.sub(r"[  ]", "", m.group(1))); sett[kap].add(tall)
                if not (400 <= tall <= 800) and not RAMME.search(snt):
                    avvik.append(f"{navn}{sti}: «{m.group(0).strip()}» utenfor 400–800 uten ramme → «{snt.strip()[:120]}»")
for kap, krav in FASTE.items():
    if kap in sett and not krav <= sett[kap]:
        avvik.append(f"exfac03-east-{kap}: mangler de faste ordtallene {sorted(krav - sett[kap])} (§7.3)")
print(f"{n} ordtall målt | avvik: {len(avvik)}")
for a in avvik[:40]: print(" -", a)
sys.exit(1 if avvik else 0)
EOF
```

**Porten skal gi null avvik.** To ting den ikke kan fange, og som forfatteren må
kontrollere manuelt: at et svar som *sier* 740 ord faktisk **er** 740 ord (tell
det), og at hvert svar i eksamensform i det hele tatt **har** et ordtall — porten
måler dem som finnes, ikke dem som mangler. Bruk denne til den siste:

```bash
python3 - <<'EOF'
# Ordtall SKAL finnes i hvert kapittel som viser svar i eksamensform.
import glob, json, os, re, sys
KREVER = ["0-2","1-1","2-1","2-2","3-2","3-3","3-4","3-5","3-6","4-1","4-2","4-3",
          "5-3","6-2","7-1","7-3","8-1","8-2","8-3","8-4","8-5","8-8","8-9","8-10",
          "1-prove","2-prove","3-prove","4-prove","5-prove","6-prove","7-prove","8-prove"]
ORD = re.compile(r"\d[\d  ]{0,4}\s*[-–]?\s*ords?\b")
mangler = []
for kap in KREVER:
    p = f"src/lib/data/chapters/exfac03-east-{kap}.json"
    if not os.path.exists(p): mangler.append(f"{kap}: FILA MANGLER"); continue
    if not ORD.search(json.dumps(json.load(open(p, encoding="utf-8")), ensure_ascii=False)):
        mangler.append(f"{kap}: ingen ordtall i kapitlet")
print(f"kapitler kontrollert: {len(KREVER)} | uten ordtall: {len(mangler)}")
for m in mangler: print(" -", m)
sys.exit(1 if mangler else 0)
EOF
```

---

## 8. NØYTRALITETSKONTRAKTEN (bindende — faglig presisjon, ikke høflighet)

Øst-Asias historie og samtid rommer spørsmål der stater, forskere og befolkninger
er dypt uenige, og **flere av dem står navngitt i selve kildematerialet**: Japans
krigshistorie, historielærebøkene, Nanjing, «trøstekvinnene», Yasukuni,
Takeshima/Dokdo, Senkaku/Diaoyu, Taiwans status, de to koreanske statenes forhold
til hverandre, og Kinas politiske system.

**Regelen har to halvdeler, og begge må holdes samtidig. En bok som bare holder
den ene, er ikke halvveis nøytral — den er gal på en ny måte.**

### 8.1 Halvdel (a): beskriv posisjoner — ta ikke stilling for leseren

Der spørsmålet er omstridt, sier boka **hvem** som holder hvilken posisjon og på
hvilket grunnlag, og overlater veiingen til studenten.

**Statlige narrativer behandles som fakta om staten**, ikke som avgjørelser av
spørsmålet: «myndighetene i X framstiller det slik» er en opplysning; «det var
slik» er en dom.

**Ingen policyanbefalinger i bokas egen stemme.** «Vi må», «det er på tide at»,
«statene bør» hører ikke hjemme. Boka kan gjengi en posisjon som mener dette —
merket som posisjon. **Modellbesvarelsene kan og skal lande — men det er
besvarelsens landing, ikke bokas.**

**Posisjonene fremstilles slik en tilhenger ville kjent seg igjen i dem.** En
karikert motpart gir en verdiløs drøfting, og sensor ser det.

### 8.2 Halvdel (b): pakk ikke robuste funn inn i «noen mener»

**Falsk balanse er like uredelig som partiskhet.** V2021-veiledningen fører flere
av funnene under opp som momenter studenten skal kunne; en bok som gjør dem til
meningsspørsmål, gjør studenten dårligere.

**ROBUST-LISTA (uttømmende for portens formål — skal ALDRI hedges):**

| Funn | Hvor det hører hjemme |
|---|---|
| Japan koloniserte Korea fra **1910 til 1945** | 2.4, 5.2, 6.3 |
| Taiwan var japansk koloni fra **1895 til 1945** | 2.4, 3.6, 5.2 |
| Den kinesisk-japanske krigen **1894–95** fant sted | 2.4, 5.1, 5.3 |
| Den japanske hæren begikk massedrap i **Nanjing** | 6.3 |
| Et system med tvungen seksuell utnyttelse av kvinner («**trøstekvinnene**») eksisterte i tilknytning til de japanske styrkene | 6.3 |
| **Ettbarnspolitikken** var statlig håndhevet | 1.2, 3.3 |
| **Sør-Korea og Taiwan demokratiserte** mot slutten av 1980-tallet | 3.4, 3.6, 6.2 |
| **Amerikanske baser** i Japan og Sør-Korea består | 6.1, 6.2 |
| Skrifttegn, buddhisme og konfuciansk arv har faktisk **spredt seg** i regionen | 2.1, 2.2, 2.3, 4.2 |
| Statene i regionen **grep aktivt inn** i økonomien | 3.1–3.6 |
| Japansk **medieeksport finnes og er betydelig** | 7.2 |
| Menneskelig aktivitet har **påvirket alle økosystemer** | 7.3 |
| **Territorialstridene er reelle** mellomstatlige uenigheter | 6.3 |

**OMSTRIDT-LISTA (skal framstilles som posisjoner med avsender):** hvordan
ansvaret for kolonitiden og krigstiden skal vurderes i dag · hva som er
tilstrekkelig oppgjør · hvem som har best rettskrav i territorialstridene · i
hvilken grad historiestriden drives av fortidens hendelser eller av samtidens
politikk · Taiwans folkerettslige status · hvordan koloniperiodens økonomiske
virkninger skal vurderes · om «konfucianske verdier» finnes som én ting ·
årsaksvekten av statens rolle i den økonomiske veksten · om antropocen er riktig
navn på epoken · hva japansk medieeksport gjør med maktstrukturene.

### 8.3 De fem vippe-casene (bindende plassering og merking)

Disse fem drøftingene skal ha **begge landinger skrevet ut i fasiten**, merket
**«(omstridt — begge landinger forsvarlige)»**, og hver med en eksplisitt setning
om hva som er robust og derfor **ikke** skal balanseres bort:

| # | Vippe-case | Hjemmekapittel | Robust, og ikke gjenstand for balansering |
|---|---|---|---|
| **V1** | Er Øst-Asia én sammenhengende region? | **2.1**, drilles i **8.9** | at skriftsystem, buddhisme og konfuciansk arv faktisk har spredt seg |
| **V2** | Var en sterk stat årsaken til veksten, eller én av flere betingelser? | **3.1**, drilles i 3.2–3.6 | at statene faktisk grep aktivt inn i økonomien |
| **V3** | Er historiestriden primært et spørsmål om fortiden eller om samtidens politikk? | **6.3** | at koloniseringen, Nanjing og «trøstekvinne»-systemet fant sted |
| **V4** | Antropocen eller kapitalocen — er navnet på epoken riktig? | **7.3**, drilles i **8.10** | at menneskelig aktivitet har påvirket alle økosystemer |
| **V5** | Utfordrer eller styrker japansk medieeksport eksisterende maktstrukturer? | **7.2**, drilles i **8.4** | at eksporten finnes og er betydelig |

⚠ **V5 er ikke bokas påfunn:** V2025-2 ber uttrykkelig om «utfordrer eller
styrker». Oppgaven er selv formulert som et vippespørsmål, og det er den beste
grunnen til å trene formen.

I tillegg bestiller skjelettet vippetilfeller i **prøvene til del 1, 2, 3, 4, 5,
6 og 7** — der skriver fasiten ut begge lesningene med samme merking.

### 8.4 Fire praktiske regler

1. **Doble stedsnavn skrives dobbelt**, i den formen kildematerialet selv bruker:
   **Takeshima/Dokdo**, **Senkaku/Diaoyu**. Rekkefølgen skal ikke leses som en
   rangering, og boka sier det uttrykkelig ved første forekomst i hvert kapittel.
2. **Statsbetegnelsene følger oppgavetekstene:** Folkerepublikken Kina, Nord-Korea
   (DPRK), Sør-Korea (ROK), Taiwan. **Ingen verdiladede standardbetegnelser**
   («regimet», «diktaturet») som gjennomgående navn på en stat. Beskrivende
   begreper om et politisk system hører hjemme i
   [kap. 7.1](/exfac03-east/exfac03-east-7-1), der de defineres og begrunnes.
   Regelen gjelder skarpest i kap. 3.5.
3. **Demokratisering beskrives som en historisk prosess med årsaker**, ikke som
   et naturlig endepunkt alle stater beveger seg mot.
4. **Balansert landdekning er et nøytralitetskrav**, ikke bare et pedagogisk et
   (§8.6).

**Der sammenligningen bygger på rangeringer eller indekser** (kap. 7.1), sier
boka **hvem som måler hva og hvordan** — målemetoden er selv et faglig
stridsspørsmål.

**Datagrunnlaget merkes som tynt der det er tynt** (kap. 3.5): kapitlet sier hvor
tallene og framstillingene kommer fra, og unngår presisjonsnivåer det ikke er
dekning for.

**Og nøytraliteten er samtidig eksamenstrening.** V2021-veiledningen krever at
studenten diskuterer både argumenter for og mot regional sammenheng, og både
endringer og kontinuiteter. Å kunne framstille en posisjon man ikke deler, er
nøyaktig den ferdigheten sensor ber om — og boka sier det til leseren i kap. 0.1.

### 8.5 PORT B — hedge-porten, i tre deler (testet 6. august 2026)

Porten fanger begge halvdelene av nøytralitetsregelen pluss stedsnavnregelen.
Kjørt mot fikstur: **B1** fanget «Noen mener at den japanske hæren begikk
massedrap i Nanjing» og slapp gjennom «At Japan koloniserte Korea fra 1910 til
1945, er robust og ikke et meningsspørsmål»; **B2** fanget «Noen mener at
buddhismen kom fra India» (ingen reell uenighet i nærheten) og slapp gjennom et
avsnitt der «noen mener» står sammen med «omstridt» og «posisjon»; **B3** fanget
«Striden om Takeshima er uløst, og Senkaku er omstridt» og slapp gjennom
«Takeshima/Dokdo og Senkaku/Diaoyu».

```bash
python3 - <<'EOF'
# PORT B — EXFAC03-EAST: nøytralitetskravets to halvdeler + doble stedsnavn.
import glob, json, os, re, sys
ROBUST = re.compile(r"Nanjing|trøstekvinne|koloniserte Korea|koloniseringen av Korea|"
                    r"japansk koloni|ettbarnspolitikk|statlig håndhevet|"
                    r"amerikanske (militær)?baser|demokratiser(te|ingen)", re.I)
HEDGE  = re.compile(r"noen mener|mange mener|det hevdes|det kan hevdes|angivelig|"
                    r"påstått|skal ha vært", re.I)
MOTMARKOR = re.compile(r"robust|ikke omstridt|ikke et meningsspørsmål|falsk balanse|"
                       r"skal ikke pakkes|er ikke omstridt", re.I)
STRID  = re.compile(r"omstridt|posisjon|uenig|debatt|drøft|standpunkt|"
                    r"begge landinger|hvem som holder|forsvarlig", re.I)
PAR = {"Takeshima": "Dokdo", "Dokdo": "Takeshima", "Senkaku": "Diaoyu", "Diaoyu": "Senkaku"}
STED = re.compile("|".join(PAR))
FORK = ("jf.", "nr.", "s.", "kap.", "bl.a.", "f.eks.", "pkt.", "ca.", "dvs.", "osv.", "m.m.")
def setninger(s):
    v = s
    for f in FORK: v = v.replace(f, f.replace(".", "\x00"))
    return [b.replace("\x00", ".") for b in re.split(r"(?<=[.!?])\s+|\n+", v)]
def strenger(o, sti=""):
    if isinstance(o, str): yield sti, o
    elif isinstance(o, dict):
        for k, v in o.items(): yield from strenger(v, f"{sti}.{k}")
    elif isinstance(o, list):
        for i, v in enumerate(o): yield from strenger(v, f"{sti}[{i}]")
b1, b2, b3 = [], [], []
for p in sorted(glob.glob("src/lib/data/chapters/exfac03-east-*.json")):
    navn = os.path.basename(p)[:-5]
    for sti, s in strenger(json.load(open(p, encoding="utf-8"))):
        for snt in setninger(s):                      # B1: robust funn hedget
            if ROBUST.search(snt) and HEDGE.search(snt) and not MOTMARKOR.search(snt):
                b1.append(f"{navn}{sti}: ROBUST FUNN HEDGET → «{snt.strip()[:130]}»")
        for m in HEDGE.finditer(s):                   # B2: hedge uten reell uenighet
            if not STRID.search(s[max(0, m.start()-200): m.start()+200]):
                b2.append(f"{navn}{sti}: «{m.group(0)}» uten reell uenighet i nærheten → «{s[max(0,m.start()-40):m.start()+90]}»")
        for m in STED.finditer(s):                    # B3: doble stedsnavn
            if PAR[m.group(0)] not in s[max(0, m.start()-40): m.end()+40]:
                b3.append(f"{navn}{sti}: «{m.group(0)}» uten «{PAR[m.group(0)]}» ved siden av")
for tittel, liste in (("B1 robust-porten", b1), ("B2 hedge-porten", b2), ("B3 stedsnavn", b3)):
    print(f"PORT {tittel}: {len(liste)} avvik")
    for a in liste[:25]: print("   -", a)
sys.exit(1 if (b1 or b2 or b3) else 0)
EOF
```

**Porten skal gi null avvik i alle tre delene.** ⚠ **B1 er den viktigste og den
minst intuitive:** en agent som skriver forsiktig, vil instinktivt hedge nettopp
de setningene som ikke skal hedges, fordi stoffet føles betent. Det er å ta
ambivalensen fra der den hører hjemme (vurderingen) og legge den der den ikke
hører hjemme (hendelsen).

Porten kan ikke fange to ting, og de kontrolleres manuelt: at en posisjon
faktisk har fått **avsender** («myndighetene i X», «forskere som legger vekt
på …»), og at motparten er framstilt slik en tilhenger ville kjent seg igjen i
den.

### 8.6 Landbalansen — målbar, ikke en ambisjon

**7 av 21 spørsmål ber studenten velge land eller fokus.** En bok som er
systematisk grundigere på Japan enn på Korea, styrer valget hennes uten å si at
den gjør det. Kontrakten er derfor målbar:

| Land | Egne kapitler | Minutter | Quiz i Del 3 |
|---|---|---|---|
| Japan | 1.1, 3.2, 5.2, 7.2 | 255 | **16** |
| Folkerepublikken Kina | 1.2, 3.3, 5.3 | 195 | **16** |
| Sør-Korea (ROK) | 3.4 | 55 | **16** |
| Nord-Korea (DPRK) | 3.5 | 55 | **16** |
| Taiwan | 3.6 | 55 | **16** |

**Kontraktens harde kjerne ligger i Del 3, der valget faktisk tas:** fem
landkapitler med **identisk quizkvote (16 hver)** og minutter innenfor et spenn
på fem (**55–60**). Verifisert mot skjelettet: 3.2 = 60, 3.3 = 60, 3.4 = 55,
3.5 = 55, 3.6 = 55 — alle 16 quiz. ✓

⚠ **Utenfor Del 3 veier Japan og Kina tyngre, og det er dokumentert, ikke valgt.**
De to er kjerneparet: de opptrer nesten alltid sammen, og begge de ordrett
gjentatte spørsmålene handler om dem. **Boka sier dette til leseren i kap. 0.1**,
slik at hun ser at skjevheten er et trekk ved eksamen og ikke ved forfatteren.

**Ingen bok-tekst rangerer landene.** Formuleringer som «Japan er det letteste
valget», «velg Kina hvis du er usikker», «Nord-Korea er vanskeligst» er forbudt.
Fasiten til valgoppgaven i Del 3-prøve 2 **gir momentlister for alle fire
alternativene**, nettopp for at ingen leser boka som en anbefaling.

⚠ **Ingen av de 21 spørsmålene nevner Mongolia, Hongkong eller Vietnam.** Boka
bygger ingen kapitler på dem og gir dem ingen quizkvote.

```bash
python3 - <<'EOF'
# Landbalansen i Del 3: identisk quizkvote og minutter innenfor 55–60.
import json, os, sys
avvik = []
for kap in ["3-2", "3-3", "3-4", "3-5", "3-6"]:
    p = f"src/lib/data/chapters/exfac03-east-{kap}.json"
    if not os.path.exists(p): avvik.append(f"{kap}: kapittelfila mangler"); continue
    c = json.load(open(p, encoding="utf-8"))
    q = f"src/lib/data/quiz-staging/exfac03-east-{kap}.quiz.json"
    n = len(json.load(open(q, encoding="utf-8"))) if os.path.exists(q) else 0
    if n != 16: avvik.append(f"{kap}: {n} quiz — skal være nøyaktig 16")
    if not 55 <= c["estimatedMinutes"] <= 60: avvik.append(f"{kap}: {c['estimatedMinutes']} min — utenfor 55–60")
print("landbalanse-avvik:", len(avvik))
for a in avvik: print(" -", a)
sys.exit(1 if avvik else 0)
EOF
```

---

## 9. SPRÅKKONTRAKTEN — tospråklighet er eksamenstrening, ikke pynt

### 9.1 Hva vi vet, og hva som er slutning

**Belagt:**

- Oppgavesettene i arkivet er alle på norsk bokmål — **6 av 6 oppgavesett**.
- **V2021-settet forelå på begge språk:** den norske oppgavefila finnes, og den
  engelske V2021-veiledningen gjengir nøyaktig de samme tre spørsmålene på
  engelsk.
- **V2024-oppgaveteksten finnes bare på engelsk**, gjengitt i den engelske
  veiledningen.
- **V2025-veiledningen er tospråklig i én og samme fil:** først engelsk, deretter
  norsk parallell, med samme tre vurderingskriterier på begge språk.
- **H2025-veiledningen er på norsk alene.**
- **Kontrollregnet:** 2 rent engelske + 1 tospråklig + 1 rent norsk =
  **4 av 4 sensorveiledninger** ✓

**Slutningen — og den SKAL merkes som slutning:** emnet eksamineres med parallell
norsk og engelsk oppgavetekst, og sensorkorpset opererer på begge språk. Det
tospråklige veiledningsformatet i V2025 er det sterkeste enkeltbelegget.

⚠⚠ **At studenten KAN VELGE besvarelsesspråk står INGEN steder i de ti filene.
Ikke én setning.** Boka skal si dette rett ut — ikke anta det, ikke fortie det —
og be leseren sjekke sin egen semesterside. **Formuleringen hører i kap. 0.1 (d)
og skal være omtrent slik:**

> Alle oppgavesettene i arkivet er på norsk bokmål, og veiledningene finnes både
> på engelsk, på norsk og tospråklig. Den nærliggende slutningen er at settet
> gis parallelt på begge språk og at sensorkorpset leser begge — men **det står
> ingen steder i materialet at du kan velge hvilket språk du selv skriver på.**
> Det er en slutning fra hvordan veiledningene er skrevet, ikke en opplysning
> noen har gitt. **Sjekk semestersiden din.** Det du derimot kan planlegge for,
> er at begrepene kan møte deg på engelsk.

### 9.2 Hvorfor det betyr noe for innholdet

Pensumbegrepene sirkulerer på engelsk. V2025 spør om Iwabuchis **«contra-flows»**
uten å oversette. V2024 spør om **«Anthropocene»** og navngir alternativet
**«Capitalocene»**. Landbetegnelsene står med engelske forkortelser midt i norsk
tekst: **Nord-Korea (DPRK)**, **Sør-Korea (ROK)**. **En student som bare kan de
norske ordene, kan møte det engelske settet og ikke kjenne igjen sitt eget
pensum.**

### 9.3 De to listene — belagte former mot våre oversettelser

**BELAGT i materialet (skal IKKE merkes «(vår oversettelse)»):**

`contra-flows` · `Anthropocene` · `Capitalocene` · `DPRK` · `ROK` — pluss den
engelske V2021-teksten og den engelske V2024-teksten.

**VÅRE OVERSETTELSER (skal merkes «(vår oversettelse)» ved FØRSTE bruk per
kapittel):**

sammenhengende region / coherent region · kultursfære / cultural sphere ·
tributtsystem / tribute system · skriftsystem / writing system ·
konfucianisme / Confucianism · ny-imperialisme / new imperialism ·
modernisering / modernization · statens rolle / role of the state ·
kjønnsrelasjoner / gender relations · statsfeminisme / state feminism ·
offentlig patriarkat / public patriarchy · lavfertilitetssamfunn /
low-fertility society · motstrømmer (som norsk form for contra-flows) ·
Folkerepublikken Kina / People's Republic of China

⚠ **`antropocen` og `kapitalocen` er norske former av belagte engelske begreper.**
De engelske formene står i materialet; de norske skrivemåtene er våre, men de er
kurante norske fagformer og merkes **ikke**. Skillet som skal merkes, er der
**hele begrepet** er oversatt av oss, ikke der en engelsk term har fått norsk
endelse.

⚠ **For «contra-flows» er hovedformen den engelske.** Boka skriver «contra-flows»
som hovedform og oppgir **motstrømmer (vår oversettelse)** som norsk form. Dette
er språkregelens klareste anvendelse i hele boka: en student som bare kjenner det
norske ordet, ville ikke kjent igjen spørsmålet.

### 9.4 Den tospråklige begrepslisten erstatter «Symbol- og formelliste»

⚠ **Emnet er formelfritt. Ingen LaTeX skal forekomme noe sted i boka.**
Byggekontrakt-malens krav om en avsluttende «Symbol- og formelliste» innfris her
av en **tospråklig begrepsliste**, som er obligatorisk sist i hvert temakapittel:

- `collapsible`, `title` **«Tospråklig begrepsliste»**, `buttonText`
  **«Vis begrepslisten»**
- Første linje: «Oppslagsverk — alt her forklares underveis i kapitlet.»
- Deretter markdown-tabell `| Norsk | Engelsk | Betydning |` med **alle**
  sentrale begreper i kapitlet
- Til slutt en kort merknad om hvilke former som er belagt i materialet og
  hvilke som er våre oversettelser

**Listen skal stå selv om den føles overflødig.** Den er oppslag, ikke inngang —
og den er dessuten eksamenstrening, fordi settet kan komme på engelsk.

### 9.5 PORT D — oversettelsesmerkingen

```bash
python3 - <<'EOF'
# PORT D — EXFAC03-EAST: uverifiserte oversettelser skal merkes, belagte ikke.
import glob, json, os, re, sys
VAAR = ["coherent region", "cultural sphere", "tribute system", "writing system",
        "Confucianism", "new imperialism", "modernization", "role of the state",
        "gender relations", "state feminism", "public patriarchy",
        "low-fertility society", "People's Republic of China"]
BELAGT = ["contra-flows", "Anthropocene", "Capitalocene", "DPRK", "ROK"]
MERKE = re.compile(r"vår oversettelse", re.I)
avvik = []
for p in sorted(glob.glob("src/lib/data/chapters/exfac03-east-*.json")):
    navn = os.path.basename(p)[:-5]
    if navn.endswith("-prove"): continue          # prøvekapitler har ingen begrepsliste
    tekst = json.dumps(json.load(open(p, encoding="utf-8")), ensure_ascii=False)
    brukt = [t for t in VAAR if t.lower() in tekst.lower()]
    if brukt and not MERKE.search(tekst):
        avvik.append(f"{navn}: bruker {brukt[:3]} uten «(vår oversettelse)» noe sted i kapitlet")
    for b in BELAGT:
        for m in re.finditer(re.escape(b), tekst):
            if MERKE.search(tekst[m.end(): m.end()+60]):
                avvik.append(f"{navn}: «{b}» er BELAGT i materialet og skal IKKE merkes «(vår oversettelse)»")
    if "Tospråklig begrepsliste" not in tekst:
        avvik.append(f"{navn}: mangler den avsluttende tospråklige begrepslisten (§9.4)")
print("oversettelsesavvik:", len(set(avvik)))
for a in sorted(set(avvik)): print(" -", a)
sys.exit(1 if avvik else 0)
EOF
```

⚠ Porten er **rådgivende for sjanger- og modellbesvarelseskapitlene** (8.1–8.10),
der begrepslisten kan være tynn eller mangle fordi kapitlet ikke innfører nye
begreper. Den er **hard for temakapitlene** (Del 1–7).

---

## 10. PENSUMFORANKRINGEN — den store blindsonen

⚠ **Dette er skjelettets viktigste forbehold etter tellingen.** Ingen pensumliste,
ingen emnebeskrivelse og ingen litteraturliste finnes i de ti filene. **Nøyaktig
to** pensumforfattere er navngitt:

| Forfatter | Hvor | Hva som prøves | Lovlig i kapitlene |
|---|---|---|---|
| **Hudson** | V2024-2, i både oppgavetekst og veiledning | tre innfallsvinkler til Asia i antropocen: Asias rolle i antropocens historie · de sosial-økologiske sårbarhetene som skapes og erfares i Asia i dag · hvordan asiatisk erfaring kan brukes til å bygge svar på antropocen | **7.3, 7-prove, 8.10** (+ omtale i 0.1 og 0.3) |
| **Iwabuchi** | V2025-2, i oppgaveteksten | «contra-flows» i østasiatisk medieglobalisering, og japansk medieeksport som utfordring til eller forsterkning av eksisterende globale og kulturelle maktstrukturer | **7.2, 7-prove, 8.4** (+ omtale i 0.1 og 0.3) |

⚠ **Verken fornavn, verkstittel, utgave, årstall, tidsskrift eller sidetall står
i arkivet for noen av dem.** Boka refererer dem ved **etternavn og begrep** —
«Hudsons tre innfallsvinkler», «Iwabuchis begrep contra-flows» — og oppgir aldri
noe mer. **Veiledningen for V2024 oppgir riktignok et sidetall; boka gjengir det
ikke**, fordi den ikke kan verifisere hvilket verk det peker på.

**Konsekvensen for begrepskontraktene:** drøftingsarketypen krever normalt
pensumforankring (forfatter og verk) per begrep. **Det er umulig her.** Hvert
begrep uten kjent forankring står derfor **uten avsender** i boka, og skjelettet
sier det eksplisitt der det gjelder.

**BINDENDE: å dikte opp en pensumreferanse er FORBUDT.** En bok som skriver
«ifølge Fairbank» eller «som Duus viser» uten belegg, lyver for leseren om hva hun
har lest. **Enten er avsenderen Hudson eller Iwabuchi — eller så står påstanden
uten avsender.**

⚠ **Historiske personer er IKKE pensumforfattere.** **Liang Qichao** og **Lu Xun**
er navngitt i V2024-veiledningen, men som historiske skikkelser i det studenten
skal kunne, ikke som forfattere av pensumtekster. Boka skal ikke referere dem som
om de sto på pensumlista. Samme skille gjelder alle andre navn i materialet:
bevegelsene **Uman Ribu**, **Minjung Undong**, **6B4T** og **Me-too** er
historiske fenomener navngitt i veiledningen, ikke avsendere.

**Og boka sier hva den ikke vet:** hvilke tekster som står på pensumlista utover
Hudson og Iwabuchi, vet vi ikke. Kap. 0.3 sier det rett ut, med henvisning til
semestersiden — samtidig som kapitlet lærer studenten **å lese pensum etter hvem
som sier hva**, fordi det er ferdigheten skiftet i 2024 krever.

### 10.1 PORT E — pensumforankringen

```bash
python3 - <<'EOF'
# PORT E — EXFAC03-EAST: bare Hudson og Iwabuchi, og aldri med bibliografiske data.
import glob, json, os, re, sys
AVSENDER = re.compile(r"(?:ifølge|iflg\.|som|hos|etter)\s+([A-ZÆØÅ][a-zæøåA-ZÆØÅ]{2,})(?:s\b|\s)", re.U)
LOVLIGE  = {"Hudson", "Iwabuchi", "V2021", "V2022", "V2023", "V2024", "V2025", "H2025",
            "UiO", "Norge", "Japan", "Kina", "Korea", "Taiwan", "Meiji", "Mao",
            "Sovjetunionen", "Manchukuo", "Nanjing", "Yasukuni", "Takeshima", "Dokdo",
            "Senkaku", "Diaoyu", "Liang", "Lu", "Uman", "Minjung", "Me"}
BIBL = re.compile(r"\bs\. ?\d+|\bside(ne)? \d+|\d\.\s*utgave|\((19|20)\d{2}\)|\btidsskrift", re.I)
NAVN = re.compile(r"Hudson|Iwabuchi")
def strenger(o, sti=""):
    if isinstance(o, str): yield sti, o
    elif isinstance(o, dict):
        for k, v in o.items(): yield from strenger(v, f"{sti}.{k}")
    elif isinstance(o, list):
        for i, v in enumerate(o): yield from strenger(v, f"{sti}[{i}]")
avvik = []
for p in sorted(glob.glob("src/lib/data/chapters/exfac03-east-*.json")):
    navn = os.path.basename(p)[:-5]
    for sti, s in strenger(json.load(open(p, encoding="utf-8"))):
        for m in AVSENDER.finditer(s):
            if m.group(1) not in LOVLIGE and m.group(1)[0].isupper():
                avvik.append(f"{navn}{sti}: mulig oppdiktet avsender «{m.group(0).strip()}» → «{s[max(0,m.start()-50):m.start()+90]}»")
        for m in NAVN.finditer(s):
            if BIBL.search(s[max(0, m.start()-120): m.end()+120]):
                avvik.append(f"{navn}{sti}: «{m.group(0)}» med bibliografiske data i nærheten — forbudt (§10)")
print("pensumavvik:", len(set(avvik)))
for a in sorted(set(avvik))[:40]: print(" -", a)
sys.exit(1 if avvik else 0)
EOF
```

⚠ **PORT E er RÅDGIVENDE, ikke hard.** Mønsteret «som X» treffer helt vanlig
prosa («som Japan», «som staten»), og hvitelisten kan aldri bli komplett. **Les
hvert treff.** Det den skal fange, er den ene setningen der en agent har lagt til
«ifølge Fairbank» for å gi et avsnitt tyngde. Den harde delen — bibliografiske
data rundt Hudson og Iwabuchi — er derimot pålitelig, og den delen skal gi null.

---

## 11. MODELLBESVARELSER (ærlighet, nivå og variasjon)

### 11.1 Ærlig merking — ufravikelig

- Hver modellbesvarelse innledes med én linje: **«Nyskrevet modellbesvarelse —
  skrevet av oss for denne boka. EXFAC03-EAST-arkivet har fire sensorveiledninger
  som beskriver hva sensor forventer, men ingen publiserte besvarelser og ingen
  fasit. Dette er derfor ikke en ekte kandidatbesvarelse.»**
  ⚠ Linjen er testet mot forbudt-regexen i §14.5 og gir null treff. Endrer du
  den, kjør testen på nytt.
- **En boks som heter «svak besvarelse» skal VÆRE svak** — tittel, tekst,
  ordtall og margnotater skal stemme. En polert tekst merket som svak er en
  byggefeil. Samme for midtnivåbesvarelsen i 8.8: den skal faktisk mangle det den
  sier den mangler (kontinuitetssiden), og faktisk ha de tre momentene den sier
  den har.
- Ordet «studentbesvarelse» er forbudt i bokinnholdet (grep-sjekkes, §14.5).
- **Oppgavene er nyskrevne, også når de ligner.** Ingen oppgavetekst fra arkivet
  gjengis — heller ikke de fem gjengangerformuleringene (§17).

### 11.2 Meta-fasit er FORBUDT

«En sterk besvarelse ville her ha drøftet …» er en regibemerkning, ikke en fasit.
**Drøftelsen skal skrives UT** — kort, skarp, forankret, med landing.
Grep-sjekkes: `en sterk besvarelse ville|en toppbesvarelse ville|ville ha drøftet`
= 0 treff.

Margnotater er lov og ønsket, men de skal **peke på tekst som faktisk står der**:

```
> Margnotat: her knyttes statens rolle til én konkret endring i stedet for å bli nevnt — det er dette grepet V2021-veiledningen ber om når den krever at momentene diskuteres.
```

### 11.3 Nivåfordeling og profilvariasjon (bindende)

| Kapittel | Nivåer som SKAL finnes | Profil |
|---|---|---|
| **8.8** | sterk (740) + **kommentert midtnivå (510)** + svak (860) | midtnivåbesvarelsen er DNA-kravet om minst én autentisk midtnivåbesvarelse i boka. Den svake er **for lang**, ikke for kort — margnotatene bruker kuttehierarkiet fra kap. 8.1 og viser at problemet ikke er lengden, men fordelingen |
| **8.9** | sterk (690) + svak (430) | **den sterke lander SKARPT** (se 11.4). Den svake er **innenfor ordgrensen og likevel ikke bestått** — fire momenter, alle fra samme side, og en avslutning som gjentar åpningen. Poenget er at ordgrensen ikke er kvalitetsmålet |
| **8.10** | sterk (780) + svak (620) | den svake har definisjon og kontrovers på plass og de tre innfallsvinklene korrekt gjengitt — **men uten eksempler**. Den ser fyldig ut og mangler nettopp det veiledningen sier viser forståelse. Dette er den mest lærerike svake besvarelsen i boka, fordi feilen er usynlig for den som skrev den |

**Sensorblikket** i alle tre: momentliste strukturert som **minimumskrav / gode
besvarelser / sterke besvarelser** — malen V2021-veiledningen selv bruker — med
den eksplisitte setningen om hvorfor midtnivå- eller svakversjonen ikke nådde
opp, og med «minimum for bestått på denne oppgaven» utledet av minimumskravene.

I kap. **8.10** er sensorblikket dessuten **den femdelte kravspesifikasjonen som
avkryssbar liste**: definisjon ☐ · minst én kontrovers ☐ · innfallsvinkel 1 med
eksempel ☐ · innfallsvinkel 2 med eksempel ☐ · innfallsvinkel 3 med eksempel ☐.

### 11.4 Konklusjonsvariasjon (bindende)

- **Kap. 8.9 skal konkludere SKARPT:** den sterke besvarelsen konkluderer klart i
  den ene retningen på spørsmålet om regional sammenheng, med begrunnelsen
  utskrevet — og er likevel toppnivå. Margnotat: «Forbehold er et verktøy, ikke
  obligatorisk garnityr. En skarp, begrunnet konklusjon er en fullgod toppform.»
  ⚠ **Vippe-case V1 markeres likevel i kapitlet**, og en kort boks viser den
  motsatte landingens beste versjon i to avsnitt, slik at leseren ser at
  karakteren ikke ligger i hvilken side man velger, men i begrunnelsen.
- **Ikke alle modellbesvarelser skal lande på samme kompromissform.** 8.8 veier og
  lander mildt, 8.9 lander skarpt, 8.10 lander på at navnestriden er substansiell.
- **Grensetilfelle-trening (DNA-krav):** de fem vippe-casene i §8.3 er bokas
  oppfyllelse av kravet, og i hver av dem skrives **to fullt utskrevne, motsatte
  men begrunnede landinger** ut, med forklaring på hvorfor begge når opp.

---

## 12. Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»; SKAL i førsteutkastet)

- **Kun eksamensrelevant stoff.** «Bør kjenne til»-stoffet plasseres SIST i sitt
  kapittel og merkes eksplisitt med sin lave frekvens. ⚠ **Men lavfrekvens er
  ikke grunn til å utelate:** politiske systemer, medieglobalisering og antropocen
  har 1 av 21 spørsmål hver, og alle tre er fra de to siste terminene. Å behandle
  dem som perifere ville vært å kalibrere boka mot 2022.
- **HARDT LINJEBRUTT PROSA ER FORBUDT (rendrings-kritisk).** Rendreren gjør HVERT
  enkelt `\n` om til `<br />`. Regelen: **ett avsnitt = én lang linje i
  JSON-strengen**, `\n\n` mellom avsnitt, og enkelt `\n` KUN der linjeskiftet
  faktisk er ønsket (deloppgaver, listelinjer, tabellrader, margnotater,
  flervalgsalternativer). Gjelder `content`, `problem`, `solution`, `task` og
  `hints`.
- **Godt, flytende norsk bokmål (UFRAVIKELIG).** Hele setninger, korte avsnitt
  (2–4 setninger), aktiv «du»-form. Telegramstil er FORBUDT — «Moment 1:
  ie-systemet. Moment 2: god hustru, klok mor.» skrives «Det første momentet er
  ie-systemet, der husholdet er en juridisk enhet med et familieoverhode, og det
  andre er utdanningsidealet ‘god hustru, klok mor’». **Konkret norsk knagg før
  fagtermen**, og engelsk form i parentes ved første bruk per kapittel (§9).
- **Hver oppgave synlig eksamensforankret** med sjangerens navn i ledende
  parentes — **sjangernavnet, aldri koden**:
  `(Eksamenssjanger sammenligning — slike oppgaver ber om fellestrekk og forskjeller, og skal organiseres etter dimensjon, ikke etter land. 400–800 ord.)`
  Vanskelighetsgraden skrives ALDRI inn i `task` (den ligger i `difficulty`).
- **Deloppgaver merkes a), b), c) — ALDRI (i), (ii), (iii).** Ufravikelig
  produkteierregel. Hver deloppgave starter på **egen linje med merket i fet**:
  `…\n\n**a)** …\n**b)** …`. ALDRI a) b) c) bak hverandre i løpende tekst, aldri
  A)/[A]. Ikke bruk `subTasks`. **Retter du dette, må oppgave OG fasit rettes i
  samme operasjon** — ellers peker fasiten på etiketter som ikke finnes, og se
  etter prosahenvisninger uten parenteser («i ledd b og c»). **Eneste unntak:
  ja/nei- og riktig/galt-lister av SELVSTENDIGE påstander i prøvekapitler**
  (§5.5).
- **Inline-nummerering** `(1) … (2) … (3) …` med tre eller flere påfølgende settes
  på **egne linjer**. Gjelder særlig de seks moderniseringsdimensjonene, de fem
  dimensjonene fra V2025-3, kuttehierarkiets seks trinn, svararkitekturens fire
  trinn, Hudsons tre innfallsvinkler og de fem sjangernavnene.
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. 3.1](/exfac03-east/exfac03-east-3-1)`. Død «se kapittel
  X.Y»-tekst er FORBUDT. Aldri lenker i `title`-felt.
- **Karakter-realisme:** Del 0 sier eksplisitt at **C er en god og vanlig
  karakter**. Formuleringen **«Prioritet: perfekt» er FORBUDT** — skriv «høyeste
  prioritet». Prioritetsklassene oversettes: *perfekt* → **høyeste prioritet**,
  *bør beherskes* → **bør beherskes**, *bør kjennes til* → **bør kjenne til**.
  «Gapet opp» rammes inn som **oppgraderingsmeny**, ikke mangelliste.
  ⚠ **A-språk («A-besvarelse», «A-markør») er FORBUDT i denne boka**, fordi
  A–F-skalaen bare er belagt for semesteroppgaveformen (§6.4). Bruk **«sterk
  besvarelse»**, **«midtnivåbesvarelse»**, **«svak besvarelse»** og
  **«bestått-gulvet»**.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter HVER prøvefasit og etter hver
  fasit i modellbesvarelsene — bruk rubrikkene i §6.4. I hvert temakapittel:
  minst én **lett innstegsoppgave** tidlig (`difficulty: "lett"`, ren gjengivelse
  med egne ord) før første fulle eksamenssjanger.
- **Hverdagsanker + verdens-caser, ikke metaeksempler.** Abstrakte kjernetemaer
  åpner med et hverdagsanker før apparatet. Casene handler om konkrete livsløp,
  konkrete politiske tiltak, konkrete ritualsituasjoner, konkrete jernbaner —
  ALDRI «en medstudent skriver …».
- **Difficulty-spredning + kald bank:** boka skal ha genuint krevende oppgaver
  merket `difficulty: "vanskelig"` (minst én per temadel), ikke alt på middels.
  Én merket **kald bank** i kap. 8.7 (§5.3).
- **Hint på alle oppgaver:** hvert `exercise` har utfylte `hints`. **Første hint
  er begrepet, dimensjonen eller første grep** («Start med å sette opp de to
  kolonnene — hvilket moment hører hjemme på kontinuitetssiden?»), andre hint er
  første moment — **ALDRI konklusjonen**. Eneste unntak er den kalde banken.
- **Signal-/hintbokser ETTER oppgaven:** en boks som varsler hva en drilloppgave
  tester («her ligger land-for-land-fella») plasseres ETTER oppgaven eller som
  collapsible hint, aldri foran. Gjelder særlig sorteringsdrillene i kap. 2.1,
  2.4 og 6.3 — drillen skal teste radaren, ikke oppslaget.
- **Stokket flervalg og varierte fasit-mønstre:** statiske flervalg i
  prøve-`collapsible`-er har stokkede fasit-bokstaver (ALDRI «alle a»), og
  prøve-tipen sier hvor flervalget bor. Gjelder ALLE ensartede fasitlister, også
  «robust eller omstridt»-listene i Del 5-prøve 3 og «hvilket krav er ikke
  innfridd»-drillen i 8.7 — aldri «alle robust», aldri samme fasit to ganger på
  rad. Verifiseres med `sjekk-fasitfordeling.py` og `sjekk-statiskflervalg.py`.
- **Distraktorer straffer aldri grundig lesing:** en distraktor gjengir ALDRI
  bokas egen presisering som «galt» svar. Ligger en distraktor nær sannheten
  (typisk: «kultursfæren betyr at språkene i regionen er i slekt», «tributtsystemet
  var en kolonialordning», «statsfeminisme betyr det samme i Japan og i Mao-tidens
  Kina»), skal `explanation` forklare eksplisitt hvorfor den ikke holder.
- **Begrepsbank = oppslagsverk:** hver stor begrepsbank åpner med
  standardnotisen: «Begrepsbanken er flashcard- og repetisjonsstoff — den gjentar
  det du nettopp har lest. Hopp trygt over ved førstegangslesing; tidsanslaget
  for kapitlet gjelder kjernestoffet.» `definition`-blokker slettes ALDRI for å
  «rydde» — de er flashcard-kilden.
- **Øktmerking:** alle kapitler med `estimatedMinutes > 45` — altså **0.2, 0.3,
  1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 4.1,
  4.2, 4.3, 5.1, 5.2, 5.3, 6.1, 6.2, 6.3, 7.1, 7.2, 7.3, 8.1, 8.2, 8.3, 8.4, 8.5,
  8.6, 8.7, 8.8, 8.9, 8.10** (alle unntatt 0.1, som er 45) — har tidsanslag i
  underoverskriften («## Statens rolle i fødselstallene (~14 min)») eller
  eksplisitte «— naturlig pausepunkt —»-markører. Lange modellbesvarelser har
  pausepunkt mellom hovedseksjonene. ⚠ Overskriften bærer NAVNET, aldri
  løkkenummeret (§1).
- **Kryssgevinst-forbudet:** ingen formulering lover uttelling for stoff fra
  andre emner (§15).

### 12.1 Del 0-pakken (alt dette SKAL finnes, i kap. 0.1 der ikke annet er sagt)

- **«Slik leser du denne boka»-orienteringsboks** (type `text` eller `tip` —
  **ALDRI `definition`**, det ville endret flashcard-kvoten) med:
  **karakterskalaen A–F med forbeholdet skrevet ut** (den fulle skalaen i arkivet
  gjelder semesteroppgaveformen, §6.4), at **C er en god og vanlig karakter**,
  **de fem sjangernavnene skrevet fullt ut i klarspråk** (sammenligning, endring
  og kontinuitet, redegjørelse med anvendelse, valgoppgave, argumenter for og
  mot), og at typiske feil har et samlet register på **14 punkter** med eget
  kapittel ([kap. 8.7](/exfac03-east/exfac03-east-8-7)).
- **«Lite tid?»-boks** (`tip`): hurtigrute for 3–5 dager (prioriter Del 1, 2 og 3
  — de tre tunge klyngene, 13 av 21 spørsmål — pluss kap. 0.2, 8.1 og 8.7) og
  ukeplan bygget av summerte `estimatedMinutes`. **Summen av de 40 kapitlene er
  eksakt 2 375 minutter ≈ 40 timer lesetid** (verifisert mot skjelettet);
  prøvekapitlene kommer i tillegg med 8 × 120 = 960 minutter. Boksen sier
  eksplisitt at anslagene er **LESEtid**, og at den som skriver besvarelser for
  hånd bør legge på ca. ×1,5.
- **Deltidsrute 10–12 uker** med temadelprøvene fordelt underveis og
  modellbesvarelsene + de fire øvingseksamenene de siste to ukene — aldri stablet
  i siste uke.
- **«Lese mye, skrive lite»-boks:** legitim rute for lese-øveren (les spørsmålet
  → sett opp momentlista og ordbudsjettet mentalt i to setninger → les
  modellbesvarelsen som sensor) + minimumsrådet: **skriv minst ÉN full
  besvarelse på 400–800 ord på tid**, og tell ordene.
- **Kildenote for frekvens-empirien** — ordlyden i §6.1.1, aldri utvidet.
- **Temafrekvenstabellen** som leserens prioriteringskart, med nevneren og
  enheten skrevet ut, og med regnestykket vist: 5 + 4 + 4 + 2 + 2 + 1 + 1 + 1 + 1
  = **21 av 21 spørsmål** ✓. Pluss den sekundære berøringen: religion berørt i
  4 av 7 terminer, språk og skriftsystem i 2 av 7 terminer som valgfritt fokus.
- **Gjenbruks- OG fornyelsesboksen i samme åndedrag.** De fem formuleringene som
  er gjentatt ordrett eller nesten ordrett i 2021–2023 (regional sammenheng ·
  kjønnsrelasjoner og statens rolle · moderniseringsveier med fire land ·
  fellestrekk og forskjeller i kultursfæren · hvilke ulikheter som er utbredt),
  **og** at V2024 og V2025 til sammen har seks spørsmål der **ikke ett** gjentar
  noe tidligere. Beskjeden til leseren: **tren på gamle sett, men ikke pugg dem.**
  En student som bare pugget de fem gjengangerne, ville strøket på fire av de
  seks siste spørsmålene.
- **Landbildet**, med tallene fra §6.2 og setningen om at Japan og Kina veier
  tyngre utenfor Del 3 fordi eksamen navngir dem oftest — ikke fordi forfatteren
  har valgt det (§8.6).
- **Terminmønster-boksen:** 7 av 8 terminer er vårterminer, ordinær våreksamen er
  dokumentert 5 av 5 år uten hull, utsatt 2 av 5 år. ⚠ **«Emnet går om våren» er
  forbudt.** Boka skriver at alle terminene vi har grunnlag i, unntatt én, er
  vårterminer, og at vi ikke vet om emnet ble eksaminert om høsten før 2025.
  **Høstleseren adresseres eksplisitt** og sendes til
  [kap. 8.6](/exfac03-east/exfac03-east-8-6) og til sin egen semesterside.
- **Språkboksen** med skillet belegg/slutning skrevet ut (§9.1).
- **KI-boksen.** Forbudet er belagt for **H2025 alene**; ingen av de tre
  vår-veiledningene nevner KI. Boksen forklarer nøkternt skillet mellom **KI brukt
  til forberedelse** og **KI brukt i selve besvarelsen** — det er besvarelsen
  forbudet gjelder — og ber leseren sjekke reglene for sin egen termin. Boka skal
  **ikke** utvide forbudet til vårformen på egen hånd, og **ikke** antyde at KI er
  tillatt der. **Studenten har krav på å få skillet forklart, ikke fortiet.**
- **Nøytralitetsløftet til leseren**, kort og konkret: hvorfor doble stedsnavn
  skrives dobbelt, hvorfor statene omtales med sine egne navn, og hvorfor boka
  skiller mellom det som er omstridt og det som ikke er det — **med ett eksempel
  på hver side av skillet**.
- **Sjangerkortet på ÉN side** som ER kortet: sjanger → én linjes oppskrift →
  signalord → svararkitektur → vanligste mangel. Ikke en lenkeliste.
- **Ordgrensekortet** (kap. 0.2, gjentatt i studieguiden): regnestykkene for 400
  og 800 ord, kuttehierarkiets seks trinn og de fire tingene som aldri kuttes, på
  ÉN side. **Bokas viktigste oppslagskort.**

---

## 13. Kvotekontrakt (AUTORITATIV — bindende total, aldri overstyr)

Verifisert mot skjelettets kvotesammendrag 6. august 2026 ved å summere
kapittelavsnittenes egne «Kvote:»-linjer programmatisk: **alle ni deltotaler og
alle fire totaler stemmer eksakt.**

| Del | Kapitler | Quiz | Flashcards | Minutter | Prøver |
|---|---|---|---|---|---|
| 0 | 0.1–0.3 | 42 | 32 | 155 | 0 |
| 1 | 1.1–1.5 | 94 | 94 | 335 | 4 |
| 2 | 2.1–2.4 | 68 | 68 | 255 | 4 |
| 3 | 3.1–3.6 | 94 | 94 | 340 | 4 |
| 4 | 4.1–4.3 | 50 | 50 | 180 | 4 |
| 5 | 5.1–5.3 | 52 | 52 | 185 | 4 |
| 6 | 6.1–6.3 | 52 | 52 | 190 | 4 |
| 7 | 7.1–7.3 | 50 | 50 | 185 | 4 |
| 8 | 8.1–8.10 | 108 | 73 | 550 | 4 |
| **Sum** | **40 kap.** | **610 ✓ (≥500)** | **565 ✓ (≥500)** | **2 375** | **32** |

Per kapittel (quiz · flashcards · minutter) — **minimum, aldri under;
overskyting er lov, men landbalansen i Del 3 er EKSAKT (§8.6)**:

| Kap. | Q · F · min | Kap. | Q · F · min | Kap. | Q · F · min |
|---|---|---|---|---|---|
| 0.1 | 12 · 10 · 45 | 2.4 | 16 · 16 · 60 | 6.1 | 16 · 16 · 60 |
| 0.2 | 16 · 12 · 60 | 3.1 | 14 · 14 · 55 | 6.2 | 18 · 18 · 65 |
| 0.3 | 14 · 10 · 50 | 3.2 | **16** · 16 · 60 | 6.3 | 18 · 18 · 65 |
| 1.1 | 20 · 20 · 70 | 3.3 | **16** · 16 · 60 | 7.1 | 16 · 16 · 60 |
| 1.2 | 20 · 20 · 70 | 3.4 | **16** · 16 · 55 | 7.2 | 16 · 16 · 60 |
| 1.3 | 18 · 18 · 65 | 3.5 | **16** · 16 · 55 | 7.3 | 18 · 18 · 65 |
| 1.4 | 20 · 20 · 70 | 3.6 | **16** · 16 · 55 | 8.1 | 14 · 8 · 65 |
| 1.5 | 16 · 16 · 60 | 4.1 | 18 · 18 · 65 | 8.2 | 12 · 8 · 60 |
| 2.1 | 18 · 18 · 70 | 4.2 | 18 · 18 · 65 | 8.3 | 12 · 8 · 55 |
| 2.2 | 18 · 18 · 65 | 4.3 | 14 · 14 · 50 | 8.4 | 12 · 8 · 55 |
| 2.3 | 16 · 16 · 60 | 5.1 | 16 · 16 · 55 | 8.5 | 12 · 8 · 55 |
| | | 5.2 | 18 · 18 · 65 | 8.6 | 12 · 8 · 55 |
| | | 5.3 | 18 · 18 · 65 | 8.7 | 16 · 10 · 55 |
| | | | | 8.8–8.10 | 6 · 5 · 50 hver |

**Bindende total: quiz 610 · flashcards 565 · 2 375 minutter.** Flashcards telles
som **toppnivå `definition`-blokker med `title`**. Prøvekapitler har ingen kvote
(ingen quiz, ingen begrepsbank). **Ingen quiz på Mongolia, Hongkong eller
Vietnam** (§8.6).

⚠ **Quiz-staging telles mot denne tabellen FØR wiring, kapittel for kapittel.**
En quizfil skrevet etter wiringen blir ikke med, og bokporten er grønn likevel så
lenge totalen er over 500.

### 13.1 Hvorfor kvoten er moderat — og hva quizen ER

⚠ **Emnet har ingen flervalgsdel**, og arkivet inneholder **null
flervalgsspørsmål**. Quizen er derfor **bokas eget repetisjonsverktøy**, ikke en
rekonstruksjon av noe som har vært gitt. **Boka skal aldri påstå å ha trent på
tidligere flervalgsoppgaver**, og kildenoten i kap. 0.1 sier dette rett ut.
Kvoten er satt til det som gir jevn dekning av de ni klyngene — ikke høyere,
fordi det ikke finnes noen flervalgsdel å forsvare en høy kvote med.

Dette er **flervalgs-ærligheten**, og den er grep-sikret i §14.5: hver av
formuleringene «tidligere flervalgsspørsmål», «autentiske flervalgsspørsmål»,
«ekte eksamensspørsmål» og «flervalgsspørsmål fra UiO» ville påstått at boka har
trent på spørsmål som ikke finnes.

### 13.2 Quiz-filformat

`src/lib/data/quiz-staging/exfac03-east-<del>-<nr>.quiz.json`:

```json
[{ "question": "…", "options": ["riktig", "distraktor", "distraktor", "distraktor"], "explanation": "…" }]
```

Nøyaktig **4 alternativer**, `options[0]` **ALLTID** riktig. **Runtime stokker
rekkefølgen**, så `explanation` skal ALDRI si «alternativ to», «det tredje
alternativet», «svaret over» eller «det siste alternativet» — gjenta innholdet i
stedet: «Riktig svar er at tributtsystemet var en rangordning med anerkjennelse og
handel innenfor rammen, ikke en kolonialordning …». **Posisjonsreferanser er en
hard produkteierregel** (verifiseres med `sjekk-alternativref.py`). Ingen
duplikate alternativer. `explanation` på 2–4 setninger sier hvorfor fasiten er
riktig OG hvilken felle hver nære distraktor tester.

**LENGDE-TELL (hard produkteierregel):** fasiten skal **verken være det lengste
eller det korteste** alternativet systematisk. Alle fire alternativer skal ha
jevn lengde og presisjonsgrad — en leser som «velger det lengste» skal treffe
~25 %, ikke 77 %.

⚠⚠ **Dette MÅLES, og førsteutkast lander erfaringsmessig på 60–80 %.** Grunnen er
strukturell: fasiten i et drøftingsfag er den presise formuleringen, og presisjon
koster ord, mens en distraktor er lett å skrive kort. **Rettemåten er å FORLENGE
DISTRAKTORENE**, ikke å trimme fasiten til den blir upresis — en distraktor skal
være en fullverdig, plausibel formulering som er gal på **ett** punkt.

```bash
npx tsx scripts/hoyskolebok/quiz-lengdesjekk.mjs exfac03-east   # flagger over 35 %
python3 scripts/hoyskolebok/sjekk-statiskflervalg.py exfac03-east
```

**Distraktor-kalibrering** — nabobegrep-distraktorer, aldri tullesvar:
fellestrekk mot forskjell · **skrift mot språk** · tributtsystem mot kolonisystem
· Meiji-reform mot etterkrigsreform · statsfeminisme i Japan mot statsfeminisme i
Mao-tidens Kina · endring mot kontinuitet · **Taiwan/Sør-Korea mot
Kina/Nord-Korea i V2023-3-grupperingen** · antropocen mot kapitalocen ·
contra-flow mot kulturstrøm · de fem dimensjonene i V2025-3 · de fem
oppgavesjangrene · kuttehierarkiets trinn · robust funn mot omstridt vurdering.
I tillegg «hvilket krav er ikke innfridd her»-spørsmål på nyskrevne
besvarelsesutdrag.

⚠ **Presisjonsfella som må dekkes:** språkene i regionen er **ikke** i slekt bare
fordi de har delt skrift. Skillet **felles skrift ≠ felles språk** er det
letteste feilgrepet i et svar om regional sammenheng, og skal ha egne
quizspørsmål i kap. 2.2.

**Fasitfordelingen rebalanseres til slutt** (jevn a/b/c/d) med
`sjekk-fasitfordeling.py`, og `options[0]` er alltid riktig i staging-filene.

### 13.3 Flashcard-profil

Hovedvekten ligger på **begrep ↔ engelsk form ↔ presisering**, fordi det er
nøyaktig den presisjonen redegjørelsesleddet måler, og fordi settet kan komme på
engelsk. Fem korttyper:

1. **Tospråklig begrepskort** — norsk begrep ↔ engelsk form ↔ én-setnings
   betydning. Den største gruppen.
2. **Matrisekort** — land ↔ dimensjon i moderniseringsmatrisen ↔ kjennetegn.
3. **Hendelseskort** — historisk hendelse ↔ årstall ↔ hvorfor den står på
   veiledningens momentliste.
4. **Sjangerkort** — sjangernavn ↔ signalord ↔ svararkitektur.
5. **Omstridt-kort** — begrep ↔ hva som er omstridt ved det, og hva som ikke er
   det.

⚠ **Bare Hudson og Iwabuchi kan stå som avsender på et kort** (§10). Ingen andre
forfatterkoblinger finnes i arkivet, og oppdiktede avsendere er forbudt.

---

## 14. Fagspesifikk stil (ufravikelig for EXFAC03-EAST)

### 14.1 Notasjonsstandard

- **Norsk bokmål. Emnet er FORMELFRITT — ingen LaTeX, ingen `$…$`, noe sted i
  boka.** `collapsible`-en til slutt er en **tospråklig begrepsliste**, ikke en
  formelliste (§9.4).
- **Dollartegn som ikke er matte MÅ escapes som `\\$`.** Et enkelt bart `$` i en
  streng kutter resten av teksten til rå LaTeX-kilde for leseren. Oddetall `$` i
  samme tekstfelt felles av `sjekk-latex.py`.
- **Ordgrensen skrives «400–800 ord» i brødtekst** og **«400 til 800 ord» i
  `description` og i BOKCONFIG** (tankestrek i en `description` er lovlig, men
  BOKCONFIGs temaledd tåler den ikke, §18.1).
- **Årstall med tankestrek:** 1937–45, 1894–95, 1910–1945, 1895–1945, 1890–1945.
- **Terminer skrives «V2024» og «H2025»** (aldri «v24», aldri «våren -25»).
  Utsatt eksamen skrives **«V2022-utsatt»** i brødtekst; skjelettets kortform
  «V2022u» er byggespråk og skal ikke stå i boka.
- **Spørsmålsreferanser** skrives «V2024-2» (termin-spørsmålsnummer) og glosses
  ved første bruk per kapittel: «V2024-2 — altså spørsmål 2 i settet fra våren
  2024».
- **Statsbetegnelser:** Folkerepublikken Kina · Nord-Korea (DPRK) · Sør-Korea
  (ROK) · Taiwan · Japan. Forkortelsene DPRK og ROK glosses ved første bruk per
  kapittel.
- **Doble stedsnavn:** Takeshima/Dokdo · Senkaku/Diaoyu — alltid begge (§8.4).
- **Kursiverte fremmedord:** *ie*-systemet skrives med kursiv i brødtekst, uten
  kursiv i `title`- og `description`-felt (§3.1).
- **Skrivemåter (grep-konsistens):** «sammenhengende region» · «kultursfære» ·
  «tributtsystem» / «tributtstat» · «skriftsystem» · «konfucianisme» /
  «konfucianske verdier» · «ny-imperialisme» · «modernisering» · «statens rolle» ·
  «eksportledet vekst» / «importsubstitusjon» · «planøkonomi» / «markedsøkonomi» ·
  «landreform» · «kjønnsrelasjoner» · «statsfeminisme» · «offentlig patriarkat» ·
  «lavfertilitetssamfunn» · «reproduksjonspolitikk» / «ettbarnspolitikken» ·
  «markedsfeminisme» / «likestillingsfeminisme» / «skeiv feminisme» ·
  «radikalfeminisme» · «Uman Ribu» / «Minjung Undong» / «6B4T» ·
  «indre heterogenitet» · «essensialisering» · «forlate Asia» ·
  «assimilasjonspolitikk» · «marionettstaten Manchukuo» · «De 21 kravene» /
  «Shandong-spørsmålet» · «atomparaply» / «avskrekking» · «historiestrid» /
  «lærebokstrid» / «minnepolitikk» · «territorialstrid» · «antropocen» /
  «kapitalocen» · «sosial-økologisk sårbarhet» · «contra-flows» / «motstrømmer» ·
  «medieeksport» · «politiske institusjoner» / «politisk frihet» / «korrupsjon» /
  «offentlig opinion» · «fokusanvisning» · «valgledd» · «momentliste» ·
  «ordgrense» · «kuttehierarki» · «dimensjonsmatrise».

### 14.2 Sjangernavnene (INGEN koder — dette skiller boka fra søskenbøkene)

| Navn som SKAL brukes | Hva det er | Andel |
|---|---|---|
| **sammenligningen** | «fellestrekk og forskjeller», «likheter og forskjeller», «sammenlign to par» | 6 av 21 spørsmål |
| **endring og kontinuitet** | «hva endret seg og hva endret seg ikke», «hvordan har X utviklet seg», «hvordan formet X» | 5 av 21 spørsmål |
| **redegjørelsen med anvendelse** | «beskriv», «hva er X, beskriv kjernen i …» — alltid med et andreledd | 4 av 21 spørsmål |
| **valgoppgaven** | velg ett land eller ett fokusområde, og fordyp deg | 4 av 21 spørsmål |
| **argumenter for og mot** | «hvilke argumenter støtter …, hvilke peker i motsatt retning» | 2 av 21 spørsmål |

⚠ **Kodene SAM, END, RED, VLG og ARG er FORBUDT i boka — også i parentes.**
Skjelettet er uttrykkelig: de er skjelettets språk, ikke bokas. De skal aldri stå
i `competenceGoals`, aldri i kapitlets første tekstboks, og aldri i en
oppgaveparentes.

**Eksamensformenes navn:** **trespørsmålsformen** · **fire-timersformen** ·
**semesteroppgaveformen**. ⚠ **«Form A», «form B» og «form C» er FORBUDT**
(§14.5): bokstavene ville kollidert med karakterskalaen A–F og er nøyaktig den
nybegynner-sjargongen leserkravene forbyr.

**Vippe-kodene V1–V5** (§8.3) er også skjelettets språk. I boka står bare
merkingen **«(omstridt — begge landinger forsvarlige)»**.

### 14.3 Feilregisteret — fjorten punkter (glosses ved første bruk PER KAPITTEL)

| # | Mangelen | Hjemmel | Hovedhjem |
|---|---|---|---|
| 1 | å svare bare på den ene siden av et tosidig spørsmål | V2021-veiledningen; V2021-1 og V2022u-1 | 2.1, 8.3 |
| 2 | å nevne under tre momenter | V2021-veiledningen | 0.2 |
| 3 | å ramse opp momenter uten å utvikle noen | ⚠ **utledet av formatet** — ordgrensen sammenholdt med V2024-kravet om å forklare og gi eksempel | 0.2, 8.1 |
| 4 | å hoppe over eksempelkravet | V2024-veiledningen, spørsmål 2 | 7.3, 8.4 |
| 5 | å definere et begrep uten å nevne at det er omstridt | V2024-veiledningen, spørsmål 2 | 7.3 |
| 6 | å ignorere fokusanvisningen i spørsmålet | V2025-settet | 4.1, 8.4 |
| 7 | å velge feil i valgoppgavene | ⚠ **utledet av formatet** — oppgavetekstene i V2022, V2022-utsatt, V2023-utsatt og V2025 | 8.5 |
| 8 | å skrive land etter land i en sammenligningsoppgave | V2024-veiledningen, spørsmål 3; V2025-3 | 1.4, 8.2 |
| 9 | å bruke allmennkunnskap i stedet for pensum | V2024- og V2025-veiledningene | 0.3 |
| 10 | å ikke referere | V2025-veiledningen | 0.3 |
| 11 | å skrive ujevnt fordelt mellom de tre svarene | V2021–V2023-settene | 8.1 |
| 12 | å bruke bare den ene språkformens begreper | V2024- og V2025-materialet | 0.1 |
| 13 | i semesteroppgaven: å bruke bare pensum | H2025-veiledningen | 8.6 |
| 14 | i semesteroppgaven: å referere kildene i stedet for å analysere dem | H2025-veiledningen | 8.6 |

**Registeret har nøyaktig fjorten punkter.** Ikke innfør et femtende noe sted.
Hele registeret gjennomgås i [kap. 8.7](/exfac03-east/exfac03-east-8-7).

⚠ **Ærlighetsforbeholdet gjelder hele registeret** (§6.1, punkt 6), og **punkt 3
og 7 skal i tillegg merkes som utledet av formatet, ikke av en veiledning.**

**De fire tyngste, med begrunnelse:** **1** (V2021-veiledningen krever
uttrykkelig begge sider) · **2** (bestått-gulvet) · **4** (V2024 sier at
eksemplene er det som viser forståelse) · **8** (V2024-veiledningen organiserer
selv svaret etter likheter og forskjeller).

**Gloss-formen:** «(mangel nr. 8 — å skrive land etter land: å behandle Japan
ferdig før du begynner på Kina, i stedet for å ta én dimensjon om gangen med
begge land inne i den)». Kodene «#1»–«#14» er byggespråk; i boka står
**«mangel nr. N»** eller navnet.

### 14.4 Prioritetsklasser

**høyeste prioritet** (skjelettets «perfekt» — 0.1, 0.2, 0.3, 1.1, 1.2, 1.3, 1.4,
2.1, 2.4, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 5.3, 6.2, 7.3, 8.1, 8.2, 8.3, 8.4, 8.5,
8.7, 8.8, 8.9, 8.10) · **bør beherskes** (1.5, 2.2, 2.3, 4.1, 4.2, 4.3, 5.1, 5.2,
6.1, 6.3, 8.6) · **bør kjenne til** (7.1, 7.2 — men begge er fra siste termin og
skal dekkes fullt ut).

**Skriv ALDRI «Prioritet: perfekt».** Formuleringen er plattformforbud og
grep-sjekkes til null.

### 14.5 Forbudt-termer og prosaregler (grep-sjekkes)

**Hard port** — `sjekk-bok.py`-regexen skal gi **0 treff** (kjøres
case-insensitivt; skriptet unntar automatisk kap. 0.1, som skal beskrive
kildesituasjonen):

```
Prioritet: perfekt|Sist du var her|som du sikkert husker|du har jo allerede sett|dette kan du fra før|en sterk besvarelse ville|en toppbesvarelse ville|ville ha drøftet|studentbesvarelse|offisiell fasit|offisielle fasiter|eksamensfasit|arkivets fasit|fasit fra UiO|UiOs fasit|sensorveiledningenes fasit|offisiell løsning|offisielle løsninger|offisielle løsningsforslag|løsningsforslag fra UiO|UiOs løsningsforslag|modellbesvarelse fra UiO|autentiske eksamensoppgaver|hentet fra eksamenssettet|gjengitt fra sensorveiledningen|tidligere flervalgsoppgaver|tidligere flervalgsspørsmål|autentiske flervalgsspørsmål|ekte flervalgsspørsmål|eksamensspørsmål fra UiO|flervalgsspørsmål fra UiO|alle eksamener|samtlige eksamener|gjennom årene|tradisjonelt (har|blir|ble|er det|gis)|emnet går om våren|den dypeste|\bform A\b|\bform B\b|\bform C\b|\b5 av 8\b|V2022-veiledningen|V2022u-veiledningen|V2023-veiledningen|V2023u-veiledningen|V20(1\d|20)-veiledningen|H20(0\d|1\d|2[0-4])-veiledningen|gjenbruke på|teller også på|kan du bruke igjen på|\bs\. ?\d+|\d\.\s*utgave|\((19|20)\d{2}\)
```

```bash
python3 scripts/hoyskolebok/sjekk-bok.py exfac03-east "<regexen over, i én linje>"
```

**Testet 6. august 2026 mot 13 planlagte brudd og 12 lovlige passasjer: alle 13
bruddene ble fanget, og null falske positive** — inkludert kildenote-malen i
§6.1.1, modellbesvarelseslinjen i §11.1 og et hedge-lovlig avsnitt.

Begrunnelse per gruppe:

- `Prioritet: perfekt` er plattformforbud (karakter-realisme, §12).
- Deiksis-uttrykkene peker feil vei — Forkunnskaper-blokka oppsummerer et ANNET
  kapittel (§5.1).
- Meta-fasit-uttrykkene er forbudt fordi drøftelsen skal skrives ut (§11.2).
- «studentbesvarelse» er usant — alle modellbesvarelser er nyskrevne (§11.1).
- Fasit- og løsningspåstandene er usanne: arkivet har **null** av hver (§6.1
  punkt 1).
- **Flervalgsgruppen er en sannferdighetsport** (§13.1): emnet har ingen
  flervalgsdel, og arkivet inneholder null flervalgsspørsmål.
- `alle eksamener`, `samtlige eksamener`, `gjennom årene` og
  `tradisjonelt (har|blir|ble|er det|gis)` bryter nevnerdisiplinen: emnet er
  eldre enn arkivet, og vi vet ikke hvor mye eldre.
  ⚠ **Mønsteret er forankret på SYNTAKS, ikke på ordet alene.** «Tradisjonelle
  tegnformer» er ekte fagbruk i kap. 2.2 (forenklede mot tradisjonelle
  tegnformer), og et søk etter ordet «tradisjonelt» ville felt det. Jf. minnet
  «Forankret erstatning»: søk-og-erstatt over kapitteldata har ødelagt innhold
  tre ganger.
- `emnet går om våren` er forbudt fordi fravær i arkivet ikke er belegg for
  fravær i virkeligheten (§6.1 punkt 9).
- `den dypeste` er forbudt fordi emnemappa deler førsteplassen blant
  `EXFAC03-*`-mappene med EXFAC03-HUM (§6.1 punkt 3).
- `form A|form B|form C` kolliderer med karakterskalaen og er nybegynner-sjargong
  (§14.2).
- **`5 av 8` er den ene formuleringen som ville ødelagt ordgrensens hjemmel**
  (§6.3).
- **`V2022-veiledningen` … `V2023u-veiledningen` og alle veiledninger før 2021
  omtaler dokumenter som ikke finnes** (§6.1 punkt 4). **Dette er den mest
  sannsynlige enkeltfeilen i denne boka**, fordi de fire terminene uten veiledning
  står i alle temalistene. **Sensorveiledning finnes bare for V2021, V2024, V2025
  og H2025.**
- `gjenbruke på|teller også på|kan du bruke igjen på` er kryssgevinst-forbudet
  (§15).
- `\bs\. ?\d+`, `\d\.\s*utgave` og `\((19|20)\d{2}\)` fanger sidetall, utgaver og
  parentesårstall i pensumreferanser — ingen av delene er attestert (§10).
  ⚠ Mønsteret `\((19|20)\d{2}\)` treffer bare et bart firesifret årstall i
  parentes; «(1910–1945)», «(1937–45)» og «(V2024)» slipper gjennom, og det er
  meningen.

**⚠ Malene i §6.1.1 (kildenote) og §11.1 (modellbesvarelseslinjen) er testet mot
denne regexen og gir null treff.** Endrer du en av dem, kjør testen på nytt:

```bash
python3 - <<'EOF'
import re
MAL = open("docs/hoyskole-boker/exfac03-east/BYGGEKONTRAKT.md", encoding="utf-8").read()
RX = re.search(r"^Prioritet: perfekt\|.*$", MAL, re.M).group(0)
def utsnitt(a, b):
    s = MAL.index(a); e = MAL.index(b, s) + len(b); return MAL[s:e]
for navn, (a, b) in {
    "KILDENOTE":  ("Boka er kalibrert mot hele EXFAC03-EAST-arkivet", "hvor\n> mye eldre, vet vi ikke."),
    "MODELLSVAR": ("Nyskrevet modellbesvarelse —", "ekte kandidatbesvarelse.»**"),
}.items():
    print(navn + ":", re.findall(RX, utsnitt(a, b), re.I) or "ingen — malen er lovlig")
EOF
```

**Strenge prosaregler** — ord som SKAL kunne stå, men bare i en ramme. Bruk
`--streng` der rammen må gjentas ved HVER forekomst. Alle skal være grønne:

```bash
# 1. SANNFERDIGHETSPORT: entall «sensorveiledningen» krever navngitt termin.
#    Bare fire terminer har veiledning.
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-east \
    "sensorveiledningen" "V2021|V2024|V2025|H2025"

# 2. NEVNERPORTEN i prosa (utfyller PORT C i §6.3.1)
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-east \
    "\bav \d+ (spørsmål|terminer|eksamensterminer|sensorveiledninger|veiledninger|sett|oppgavesett|eksamenssett)" \
    "av 21 spørsmål|av 7 terminer|av 8 terminer|av 4 sensorveiledninger|av 4 veiledninger|av 5 terminer der informasjonsseksjonen er bevart|av 6 oppgavesett"

# 3. SANNFERDIGHETSPORT: «løsningsforslag» kan bare stå der boka sier at slikt
#    IKKE finnes
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-east \
    "løsningsforslag|modellbesvarelse fra eksamen|ekte kandidatbesvarelse|fasit fra arkivet" \
    "ingen|null|finnes ikke|inneholder ikke|har ikke|aldri|ikke er|nyskrev|skrevet av oss"

# 4. ORDGRENSEPORTEN i prosa: «5 av 5» skal ALLTID stå i full form (§6.3)
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-east --streng \
    "5 av 5" "terminer der informasjonsseksjonen er bevart"

# 5. ORDGRENSENS HJEMMEL: ordgrense- og likevektpåstander skal bære nevneren
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-east \
    "400–800 ord|400 til 800 ord|teller likt" \
    "5 av 5 terminer der informasjonsseksjonen er bevart|ikke gjenfunnet|semestersiden|sjekk semestersiden|to lesninger"

# 6. USIKKERHETSPORTEN, ordgrensens status etter V2023
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-east \
    "V2024|V2025" \
    "ordgrensen er ikke gjenfunnet|ingen ordgrense|informasjonsseksjonen|semestersiden|veiledning|spørsmål|sammenlign|pensum|fokus|Hudson|Iwabuchi|kravspesifikasjon|fire timer|termin"

# 7. UVERIFISERT-PORTEN, varighet og hjelpemidler
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-east \
    "fire timer|4 timer|hjelpemid" \
    "V2025|emneside|emnesiden|semestersiden|ikke oppgitt|står ikke|ikke i arkivet|verifiser"

# 8. SPRÅKPORTEN: språkvalg-påstander må merkes som slutning
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-east \
    "besvarelsesspråk|velge språk|skrive på engelsk" \
    "står ingen steder|slutning|ikke en opplysning|semestersiden|sjekk"

# 9. KRYSSGEVINST-PORTEN: andre emner kun som annet emne med egne krav
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-east \
    "STV1200|stv1200|SVEXFAC03|svexfac03" \
    "annet emne|eget pensum|andre krav|ingen uttelling|ikke uttelling|nevner ikke|rent tematisk|ikke en snarvei"

# 10. PENSUMPORTEN: bare Hudson og Iwabuchi, og aldri med bibliografiske data
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-east \
    "Liang Qichao|Lu Xun" \
    "historisk|skikkelse|reformist|ikke pensumforfatter|navngitt i veiledningen"

# 11. KARAKTERPORTEN: A–F kun med forbeholdet
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-east --streng \
    "A–F|A-F" \
    "semesteroppgave|H2025|gjelder ikke trespørsmål|forbehold|ikke karakterskalaen for"

# 12. KI-PORTEN: forbudet er belagt for H2025 alene
python3 scripts/hoyskolebok/sjekk-prosaregel.py exfac03-east \
    "kunstig intelligens|KI-bruk|KI er ikke tillatt" \
    "H2025|semesteroppgave|belagt for|sjekk reglene|egen termin|forberedelse"
```

I tillegg gjelder **PORT A** (§7.5), **PORT B** (§8.5), **PORT C** (§6.3.1),
**PORT D** (§9.5) og **PORT E** (§10.1, rådgivende).

### 14.6 Påkrevd terminologi (skal FINNES)

Hele begrepslista i §14.1 «Skrivemåter» er påkrevd terminologi — den er
destillert fra skjelettets begrepskontrakter og analysens § 7.3, og hvert begrep
skal ha minst ett flashcard med **norsk og engelsk form** (§13.3). I tillegg skal
bokas to mantraer stå **ordrett**: **«tre momenter utviklet slår ti nevnt»** og
**«spørsmålet har to sider fordi veiledningen sier det»**.

---

## 15. Kryssbok-lenker (verifisert 6. august 2026 — alle målfilene finnes i `src/lib/data/chapters/` OG er registrert i kursmetadataen)

⚠ **KRYSSGEVINST-FORBUDET er ufravikelig.** Ingen av de fire sensorveiledningene
nevner et eneste annet emne. **Boka skal ikke love uttelling for stoff fra andre
emner.** Formuleringer av typen «dette kan du gjenbruke på STV1200» er forbudt og
grep-sjekkes til null (§14.5). Lenkene finnes fordi en leser kan ha nytte av en
beslektet framstilling — ikke fordi eksamen belønner det.

Bruk NØYAKTIG disse titlene og stiene:

| Kapittel | Lenke | Innramming (skal stå ved lenken) |
|---|---|---|
| 2.3 | `[Anarki og suverenitet i det internasjonale systemet](/stv1200/stv1200-2-1)` | «annet emne, rent tematisk: den moderne suverenitetsordningen som kontrast til tributtsystemet. Kravene der er STV1200s egne, og ingen EXFAC03-EAST-veiledning nevner emnet» |
| 6.1 | `[Sikkerhetsdilemmaet og maktbalanse](/stv1200/stv1200-2-2)` | samme innramming — begrepene der er et beslektet apparat, ikke en snarvei |
| 6.2 | `[Analysenivåene — individ, stat og system](/stv1200/stv1200-1-2)` | samme innramming |
| 7.3 | `[Miljø, naturressurser og globale fellesgoder](/stv1200/stv1200-6-3)` | samme innramming |
| 0.2 | `[Å gjøre rede for, gi eksempel og drøfte](/svexfac03/svexfac03-0-2)` | «beslektet drøftingshåndverk i et annet examen facultatum-emne. **Formslektning, ikke innholdsslektning** — SVEXFAC03 har ingen ordgrense og et helt annet pensum, og kravene der er SVEXFAC03s egne» |

**Ingen andre kryssbok-lenker.** Vil du legge til en lenke som ikke står i
tabellen, kjør `ls src/lib/data/chapters/<id>.json` **og** grep etter id-en i
`src/lib/data/textbook-courses*.ts` først — `sjekk-bok.py` avviser døde lenker,
og en død lenke i en live bok er en synlig feil for leseren.

⚠ **Overlappet med STV1200 er lite og skal ikke overdrives.** STV1200 behandler
den kalde krigen kun som bakgrunn for NATOs troverdighetsproblem, og nevner Kina
bare som fast medlem av Sikkerhetsrådet. **Ingen av STV1200s kapitler handler om
Øst-Asia som region.**

Interne lenker skrives som `[kap. 3.1](/exfac03-east/exfac03-east-3-1)` og skal
kun peke på kapitler som allerede er bygget når boka gates.

**Byggerekkefølge** (skjelettets §6): Del 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 →
prøver. ⚠ **Byggerekkefølgen er ikke det samme som forkunnskapskjeden.** Kap. 8.1
har `exfac03-east-0-2` som forkunnskap og kunne teknisk bygges tidlig — men Del 8
skal likevel bygges SIST, fordi 8.1 viderefører kuttedemonstrasjonen fra 0.2, 8.2
viderefører matrisen fra 1.4 og 3.1, 8.8 viderefører 1.3, 8.9 viderefører 2.1 og
8.10 viderefører 7.3.

⚠ **Kap. 3.2–3.6 har alle `exfac03-east-3-1` som eneste forkunnskap** og kan
leses i vilkårlig rekkefølge. Det er et bevisst valg, slik at boka ikke selv
antyder en rangering mellom landene (§8.6). Ikke «rett» det til en kjede.

---

## 16. Tekniske feller (les før første `json.dump`)

1. **JSON-gyldighet.** Bruk `json.dump`. Faget er fullt av anførselstegn — én
   uescapet anførsel blokkerer hele plattformens prebuild.
2. **Hardt linjebrutt prosa er FORBUDT.** Rendreren gjør hvert enkelt `\n` om til
   `<br />`. Ett avsnitt = én lang linje; `\n\n` mellom avsnitt; enkelt `\n` kun
   der linjeskiftet er ønsket. Gjelder `content`, `problem`, `solution`, `task`
   og `hints`. Ikke bruk trippelfnutt-strenger med innrykk eller `textwrap` på
   brødtekst.
3. **Bart `$` er forbudt** — skriv `\\$`. Boka har ingen LaTeX i det hele tatt
   (§14.1).
4. **`chapterNumber` alltid del-basert** («3.4»), aldri lineær («18»).
   Prøvekapitler: «3.P».
5. **`difficulty` er `lett` | `middels` | `vanskelig`** — aldri `medium`/`hard`
   (§4).
6. **Ingen tom `collapsible`.** Feltet heter `content` og skal inneholde blokker.
7. **Unike blokk-id-er** innen kapitlet.
8. **Flashcards kommer KUN fra toppnivå `definition` med `title`.** Flytter du en
   definisjon inn i en `collapsible` for å «rydde», forsvinner kortet fra kvoten.
   ⚠ Dette rammer særlig den tospråklige begrepslisten (§9.4): den er en
   `collapsible` og teller derfor **ikke** mot flashcard-kvoten. Begrepene må ha
   sine egne toppnivå-`definition`-blokker i løpene.
9. **`(verifiser)`-markører** skrives i den literale formen `(verifiser)` og
   løses i fase 6 FØR `sjekk-bok.py` kjøres siste gang. Bruk den for
   emnetittelen inntil den er sjekket mot UiOs emneside (§18.2).
10. **Ingen `subTasks`, `answer`, `solutionVideo`, `allowsUpload`,
    `allowsCanvasDrawing`** i `exercise`.
11. **Quiz-forklaringer refererer aldri til alternativets plassering** — runtime
    stokker (§13.2).
12. **Ikke bruk `grep -o` med `.{0,N}`-kontekst** mot kapittelfilene: de er
    kompakt JSON på én linje, og mønsteret er kvadratisk (17 GB RAM på
    byggemaskinen 25. juli 2026). Bruk portene i §6.3.1, §7.5, §8.5, §9.5 og
    §10.1, som leser JSON-strukturen.
13. **Ikke skriv «Løkke N» i overskrifter eller prosa** (§1).
14. **Ingen markdown i `description`/`title`/`competenceGoals`** (§3.1) — feltet
    havner rått i Google-treffet.
15. ⚠ **`sjekk-prosaregel.py` har en kapittelvid fallback** uten `--streng`
    (treffer unntaksregexen ÉN gang i kapitlet, slipper alle treff gjennom). Den
    er riktig for regler der rammen etableres én gang i åpningsblokka, men **for
    lav for «5 av 5»-regelen og for A–F-forbeholdet** — derfor står `--streng` på
    prosaregel 4 og 11 i §14.5.
16. **Kapittel 8.10 heter `exfac03-east-8-10`, ikke `exfac03-east-8-1-0`.**
    Parserens `\d+-\d+` håndterer tosifret kapittelnummer, men et menneske som
    lager filnavn for hånd, gjør ikke alltid det. Sjekk filnavnene mot
    skjelettets id-liste før wiring.

---

## 17. Opphavsrett (ufravikelig)

ALLE oppgaver, case, eksempler, spørsmålsformuleringer, «modellbesvarelser»,
quizspørsmål og momentlister er **NYSKREVNE** — eksamenssjangrene er malen, ALDRI
originaloppgavene. Ingen formuleringer fra UiO-settene eller fra de fire
sensorveiledningene gjengis ordrett, heller ikke i omskrevet-nær form.

⚠ **Gjengangerformuleringene er den største fristelsen i denne boka.** Fem
spørsmålsformuleringer går ordrett eller nesten ordrett igjen i 2021–2023
(regional sammenheng · kjønnsrelasjoner og statens rolle · moderniseringsveier
med fire land · fellestrekk og forskjeller i kultursfæren · hvilke ulikheter som
er utbredt). **De gjengis ikke som oppgavetekst.** Boka kan si hva spørsmålet
handler om og hvor ofte det kommer, og skal så gi leseren en **nyskrevet** oppgave
i samme sjanger. Dette gjelder også modellbesvarelseskapitlene 8.8 og 8.9, som er
bygget på nettopp de to ordrett gjentatte spørsmålene.

**Veiledningenes momentlister omskrives, aldri siteres.** Momentlistene i
V2021-veiledningen (regional sammenheng, kjønnshistorien i Japan og Kina,
endring og kontinuitet etter den kalde krigen) og i V2024-veiledningen (Japans
rolle i Kinas historie, antropocen-kravspesifikasjonen, likheter og forskjeller
mellom feministiske bevegelser) er bokas ryggrad — og de skal dekkes punkt for
punkt **med egne ord**.

**Pensumlitteraturen refereres og parafraseres** — aldri siteres i lengde, aldri
med sidetall, aldri med utgaveangivelser, aldri med årstall (§10). De etablerte
begrepene er faglig allmenneie og forklares under sine egne navn.

**Ingen oppdiktede referanser, verk, forskere, årstall eller tall.**

Boka fremstiller seg ALDRI som offisiell, godkjent eller UiO-tilknyttet, og lover
ALDRI et eksamensutfall. (Uavhengighetsdeklarasjonen vises automatisk av
plattformen for `level: 'Høyskole'` — se README «Juridiske deklarasjoner».)

---

## 18. BOKCONFIG og wiring (fase 5)

⚠⚠ **`BOKCONFIG.json` ligger FERDIG og VERIFISERT i denne mappa. RØR DEN IKKE.**

```json
{
  "title": "EXFAC03-EAST Examen facultatum for Øst-Asia-studier",
  "description": "Eksamensrettet lærebok for EXFAC03-EAST ved UiO — kalibrert mot 8 eksamensterminer 2021–2025: regional sammenheng, kjønn i moderne Øst-Asia, moderniseringsveiene, konfucianismen og svar på 400 til 800 ord",
  "icon": "🌏",
  "institusjon": "uio",
  "prøvedeler": [1, 2, 3, 4, 5, 6, 7, 8],
  "sectionNames": { "0": "Eksamenskart og svarhåndverk", …, "8": "Eksamenstrening" }
}
```

`icon` er **🌏** og ikke 🗾: et kart over ett av landene ville signalisert
landskjevhet på forsiden av en bok der balansert landdekning er et
nøytralitetskrav (§8.6).

### 18.1 `description` — HARDT FORMATKRAV, verifisert programmatisk

Kursforsiden parser feltet og splitter det i en ingress, en «Bygget på …»-boks og
emne-chips. Parseren i `src/app/[courseId]/page.tsx`:

```js
description.match(/^(.*?)\s*—\s*kalibrert mot\s+([^:]+?)\s*(?::\s*(.+?))?\.?$/)
// topics: m[3].split(/,\s*|\s+og\s+/)
```

Kjørt mot beskrivelsen over **6. august 2026**:

| ledd | verdi | krav |
|---|---|---|
| ingress | «Eksamensrettet lærebok for EXFAC03-EAST ved UiO» (**47 tegn**) | ≤ ~90 ✓ |
| kalibrering | «8 eksamensterminer 2021–2025» | kort, uten «bygget på»-ord ✓ |
| temaer | regional sammenheng · kjønn i moderne Øst-Asia · moderniseringsveiene · konfucianismen · svar på 400 til 800 ord | **5 stk**, 1–5 ord hver ✓ |
| samlet lengde | **204 tegn** | < 250 ✓ |
| forbudte tegn inne i leddene | ingen `;`, `:` eller `—` | ✓ |
| «og» inne i et temaledd | ingen | ✓ |

⚠ **Temalista splittes på BÅDE komma og « og ».** Et tema som selv inneholder
«og» sprekker i to meningsløse chips. Derfor står ordgrensen som **«svar på 400
til 800 ord»** og ikke «ordgrensen på 400 og 800 ord», og derfor står årstallene
som «2021–2025» inne i kalibreringsleddet, ikke i temalista.

Testen, som skal kjøres på nytt hvis noen rører beskrivelsen:

```bash
python3 - <<'EOF'
import json, re
d = json.load(open("docs/hoyskole-boker/exfac03-east/BOKCONFIG.json", encoding="utf-8"))["description"]
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

### 18.2 `title` — og hvorfor den både er uverifisert og teknisk uproblematisk

`wire-bok.py` skriver `cfg['title']` både til kursmetadataen og til
`src/app/trinn/hoyere/institusjoner.ts`.

**Testet mot disclaimer-heuristikkene i `src/components/textbook/hoyskole-disclaimer.tsx`:**

| heuristikk | resultat | konsekvens |
|---|---|---|
| `erJus('exfac03-east', title)` — `/^jus/i` på id ELLER `/\brett(s\w*)?\b\|juridisk/i` på tittel | **False** | riktig — dette er ikke et jusemne, og Lovdata-forbeholdet skal ikke vises |
| `erHelse('exfac03-east', title)` — `/^psy/i` m.m. | **False** | riktig |

⚠ **Advarsel til enhver som senere endrer tittelen:** legger du inn ord som
«rettslære», «juridisk» eller «helse», slår en fagspesifikk disclaimer inn som
ikke hører hjemme her. Kjør denne etter enhver tittelendring:

```bash
python3 - <<'EOF'
import json, re
t = json.load(open("docs/hoyskole-boker/exfac03-east/BOKCONFIG.json", encoding="utf-8"))["title"]
erJus   = lambda c, x: bool(re.search(r"^jus", c, re.I) or re.search(r"\brett(s\w*)?\b|juridisk", x, re.I))
erHelse = lambda c, x: bool(re.search(r"^psy", c, re.I) or re.search(r"sykepl|medisin|farmako|anatomi|fysiologi|helse|psykolog|odontolog|tannlege", x, re.I))
print(t, "→ jus:", erJus("exfac03-east", t), "| helse:", erHelse("exfac03-east", t))
assert not erJus("exfac03-east", t) and not erHelse("exfac03-east", t), "FEIL DISCLAIMER SLÅR INN"
EOF
```

⚠⚠ **MEN: tittelen er faglig UVERIFISERT.** Emnets offisielle norske tittel står
ikke i noen av de ti filene. **Før wiring skal tittelen sjekkes mot UiOs
emneside**, og avviker den, oppdateres `BOKCONFIG.json` — og da må testene i
§18.1 og §18.2 kjøres på nytt. **Boka skal aldri presentere tittelen som noe
kildematerialet oppgir.** Skjelettets §1 foreslår en lengre form med
«— eksamensrettet lærebok (UiO)»; BOKCONFIG bruker den korte, og BOKCONFIG vinner
(§20, sprik 3).

### 18.3 Wiring-sjekkliste (fase 5)

1. `python3 scripts/hoyskolebok/wire-bok.py exfac03-east` — parser 40 kapitler
   fra skjelettet og genererer 8 prøvekapitler. **Alle 48 filene må finnes
   først.**
2. **Verifiser emnetittelen mot UiOs emneside** (§18.2) og oppdater
   `BOKCONFIG.json` om nødvendig — FØR wiring, ikke etter.
3. **Legg til oppføring i `src/lib/data/kildegrunnlag.ts`** med tallene fra §6.1:
   8 eksamensterminer 2021–2025 · 6 oppgavesett-filer som dekker 6 terminer ·
   4 sensorveiledninger som dekker 4 terminer (kun V2021, V2024, V2025, H2025) ·
   **0 løsningsforslag, 0 fasiter, 0 modellbesvarelser, 0 studentbesvarelser,
   0 flervalgsspørsmål**. `forbehold`-lista skal inneholde: grunnlaget er tynt —
   8 terminer over 5 år · 4 av 8 terminer har ingen sensorveiledning · alle fire
   veiledningene uttrykker forhåndsforventninger, ikke observerte feil · V2024
   har ingen egen oppgavefil, teksten ligger inne i veiledningen · H2025 er den
   eneste høstterminen og har en annen eksamensform · ordgrensen er ikke
   gjenfunnet for V2024 eller V2025 · eksamensvarighet er oppgitt for én termin ·
   hjelpemiddelreglene står ikke i noe dokument · det står ingen steder at
   studenten kan velge besvarelsesspråk · bare to pensumforfattere er navngitt ·
   emnets tittel, studiepoeng og pensumliste finnes ikke i arkivet · ingen
   strykprosent eller karakterstatistikk finnes.
4. `institusjoner.ts` patches automatisk under `slug: 'uio'` med tittel og ikon
   fra `BOKCONFIG.json`. **Verifiser at hverken jus- eller helse-linja i
   `hoyskole-disclaimer.tsx` vises** (§18.2).
5. Slett `quiz-staging/exfac03-east-*` (mellomprodukt) før commit.
6. Verifiser narrativ-ruter (hvis narrativer bygges) med prod-server og curl —
   200, ikke bare at filene finnes.

---

## 19. Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json; json.load(open('…'))"` på HVER fil du har skrevet.
2. **Kvotetelling** mot tabellen i §13 (toppnivå `definition`-blokker med `title`
   + antall quiz-spørsmål) — minimum, aldri under. Total **610 quiz / 565
   flashcards / 2 375 minutter**. **Del 3s landkvoter er EKSAKT 16 hver.**
3. **PORT A (ordgrensen, §7.5) = 0 avvik**, og alle kapitler som viser svar i
   eksamensform har ordtall. **Dette er bokas viktigste port.**
4. **PORT B (nøytralitet, §8.5) = 0 avvik i alle tre delene.** Les hvert B1-treff
   manuelt — det er den porten som fanger falsk balanse om robuste funn.
5. **PORT C (nevnerporten, §6.3.1) = 0 avvik**, og hver «N av M» skriver ut
   enheten.
6. **PORT D (oversettelsesmerkingen, §9.5) = 0 avvik for temakapitlene.**
7. **PORT E (pensumforankringen, §10.1)** lest manuelt; den harde delen
   (bibliografiske data rundt Hudson og Iwabuchi) = 0.
8. **Forbudt-termer-grep = 0** (regexen i §14.5), og alle tolv prosareglene
   grønne.
9. **Kildepåstander:** hver «N av M» finnes i §6.2, bruker en lovlig nevner
   (§6.3) OG skriver ut enheten; ingen påstand om fasit eller løsningsforslag fra
   UiO; **ingen påstand som hviler på en sensorveiledning for V2022, V2022-utsatt,
   V2023 eller V2023-utsatt**; tallet 10 står bare som filtall i kildenoten;
   «5 av 5» står alltid i full form.
10. **Delmengdene summerer:** klyngefordelingen til 21, sjangerfordelingen til
    21, veiledningsspråkene til 4, terminene til 8. Tell hver enkelt påstand mot
    belegglista i §6.2.
11. **Landbalansen:** Del 3 har fem landkapitler med identisk quizkvote (16) og
    minutter innenfor 55–60 (skriptet i §8.6); kap. 0.1 forklarer for leseren
    hvorfor Japan og Kina veier tyngre utenfor Del 3; **ingen bok-tekst rangerer
    landene**.
12. **Læringsløkke:** `content[]` veksler teori → eksempel → oppgave i løkker med
    `exercise`-blokker INLINE. Unntak: prøve-, sjanger- og
    modellbesvarelseskapitler. Byggespråk-grepet fra §1 gir null treff.
13. **Forkunnskapsdekning:** gå gjennom HVER `exercise` og bekreft at den kun
    hviler på stoff introdusert tidligere i kapitlet eller i en referert
    forkunnskap — ingen usett begrep, dimensjon eller sjangerregel.
14. **Oppfrisket forkunnskap:** kapitlene i tabellen i §5.1 har 2–3
    kjernepåstander VIST, ikke bare lenket; **grep for «Sist du var her» = 0**, og
    ingen overskrift heter «Forkunnskaper — sist du var her».
15. **Begrepslister + oppgaveantall:** HVERT temakapittel (Del 1–7) har den
    avsluttende **tospråklige begrepslisten** og **4–8 `exercise`-blokker
    inline**. Tell dem.
16. **`difficulty`** er `lett`/`middels`/`vanskelig` i alle `exercise` — grep for
    `"difficulty": "medium"` og `"difficulty": "hard"` gir null. Minst én
    `vanskelig` per temadel.
17. **Nybegynner-inngang:** **de fem sjangernavnene skrives fullt ut i klarspråk**
    og kodene SAM/END/RED/VLG/ARG finnes ikke noe sted; feilnumrene glosses ved
    første bruk PER KAPITTEL; **ingen «form A/B/C»**; ingen kald kode i
    `competenceGoals` eller i første tekstboks; Del 0 har «Slik leser du denne
    boka»-boksen (type `text`/`tip`, ALDRI `definition`) og hele Del 0-pakken
    (§12.1).
18. **Eksamenskontrakten:** hver `example.solution`, hver `exercise.solution` og
    hver prøvefasit viser den strukturen sjangeren krever (§6.5), og fasitene er
    strukturert som **minimumskrav / gode besvarelser / sterke besvarelser** —
    aldri som «må/pluss/feller», som er jusarketypens form.
19. **Karakter-realisme:** «C er en god og vanlig karakter» står eksplisitt i
    Del 0; A–F-skalaen står **bare** i kap. 8.6 og i Del 0s orienteringsboks,
    begge steder med forbeholdet; **A-språk («A-besvarelse») finnes ikke**; grep
    «Prioritet: perfekt» = 0; de svake besvarelsene **er** svake;
    midtnivåbesvarelsen i 8.8 finnes; kap. 8.9 lander skarpt; meta-fasit-grep = 0.
20. **Prøvekapitler:** nøyaktig **fire** prøver i hvert av de **åtte** (hardt
    plattformkrav, §2.2); Del 8s fire er komplette øvingseksamener i
    trespørsmålsform (§5.6); fasitmønsteret varierer (aldri «alle a», aldri «alle
    robust»); prøve-tipen sier hvor flervalget bor; selvdiagnose (☐) etter hver
    fasit; ja/nei-lister av selvstendige påstander bruker romertall (§5.5), og
    alle ekte deloppgaver bruker a), b), c).
21. **hints** utfylt på alle `exercise` unntatt den merkede kalde banken i 8.7;
    første hint røper aldri konklusjonen.
22. **Quiz:** `options[0]` alltid riktig; nøyaktig 4 alternativer; ingen
    posisjonsreferanser i `explanation`; **LENGDE-TELL under 35 %** — og husk at
    rettemåten er å forlenge distraktorene (§13.2); ingen quiz på Mongolia,
    Hongkong eller Vietnam.
23. **Språkregelen:** hvert temakapittel har tospråklig begrepsliste; sentrale
    begreper står med norsk og engelsk form ved første bruk; **«(vår
    oversettelse)»** står på de uverifiserte formene og **ikke** på contra-flows,
    Anthropocene, Capitalocene, DPRK og ROK.
24. **Øktmerking:** alle kapitler > 45 min har tidsanslag i underoverskriftene
    eller pausepunkter; prøvekapitlene deklarerer «4 prøver à ~X min» + deling
    over flere kvelder.
25. **Opphavsrett (§17):** ingen oppgavetekst fra arkivet gjengitt; ingen
    gjengangerformulering gjengitt ordrett; alle momentlister omskrevet.
26. **Ingen tom `collapsible`**; ingen duplikate blokk-id-er; kap-referanser i
    fasiter og forkunnskaper er markdown-lenker til eksisterende filer; ingen
    hardt linjebrutt prosa; ingen markdown i
    `description`/`title`/`competenceGoals`; **ingen LaTeX noe sted**.
27. **Juridiske deklarasjoner:** innholdet fremstiller seg ALDRI som offisielt
    eller UiO-tilknyttet, lover aldri eksamensutfall, og hverken jus- eller
    helse-linja slår inn (§18.2).
28. **Porter grønne før ferdigmelding:**

```bash
python3 scripts/hoyskolebok/status-bok.py exfac03-east
python3 scripts/hoyskolebok/sjekk-skjelett.py exfac03-east
python3 scripts/hoyskolebok/sjekk-latex.py exfac03-east
python3 scripts/hoyskolebok/sjekk-fasitfordeling.py exfac03-east
python3 scripts/hoyskolebok/sjekk-alternativref.py exfac03-east
python3 scripts/hoyskolebok/sjekk-statiskflervalg.py exfac03-east
python3 scripts/hoyskolebok/sjekk-bok.py exfac03-east "<forbudt-regex fra §14.5>"
# PORT A (§7.5) · PORT B (§8.5) · PORT C (§6.3.1) · PORT D (§9.5) · PORT E (§10.1)
# landbalanse-skriptet (§8.6) · de tolv prosareglene (§14.5)
npx tsx scripts/hoyskolebok/quiz-lengdesjekk.mjs exfac03-east
npm run build
```

---

## 20. SPRIK MOT SKJELETTET — dokumentert her så ingen «retter» dem tilbake

Skjelettets Talldisiplin-seksjon og alle 40 kapitlers frekvenspåstander er
etterregnet mot belegglistene sine 6. august 2026. **Kvotene stemmer eksakt:**
summeringen av kapitlenes egne «Kvote:»-linjer gir 610 quiz, 565 flashcards,
2 375 minutter og 40 kapitler — identisk med skjelettets kvotesammendrag, og alle
ni deltotaler stemmer. Fem avledede punkter avviker likevel:

**1. ⚠ LANDTELLINGEN: skjelettets forbud mot å tallfeste Japan og Kina er
OPPHEVET.** Skjelettets kap. 0.1 (g) sier «⚠ Ingen tall for Japan og Kina», og
verifikasjonslista krever at «grep viser ingen tallfesting». Grunnlaget var at
`EKSAMENSANALYSE.md` § 3.5 var internt inkonsistent: tabellen påsto 7 spørsmål
for begge, mens belegglistene inneholdt 8 og 9, og 7 stemte under ingen lesning
(talt i terminer er begge 6). **Analysen ble rettet 6. august 2026** til
**Japan 8 av 21** og **Folkerepublikken Kina 9 av 21**, med belegglistene uendret
— og dermed stemmer tall og liste. **Boka SKAL nå tallfeste alle fem landene**,
med belegglistene i §6.2. Skjelettets ⚠-merknad er utdatert og skal ikke følges.

**2. TAIWANS ENHET må skrives ut, hver gang.** Taiwans to spørsmål er fra SAMME
termin (V2023). **Talt i spørsmål er Taiwan 2 av 21; talt i terminer er Taiwan
1 av 7.** Skjelettet nevner dette i §2, men kapittel 3.6s belegg-blokk oppgir
bare spørsmålstallet. **Begge tellingene skal stå** i kap. 3.6 og i kap. 0.1, med
enheten skrevet ut begge steder. Uten det leser en student «2 av 21» som «to
ganger i to terminer», og undervurderer hvor smalt grunnlaget er.

**3. BOKCONFIG-TITTELEN avviker fra skjelettets §1, og BOKCONFIG vinner.**
Skjelettet foreslår «EXFAC03-EAST Examen facultatum for Øst-Asia-studier —
eksamensrettet lærebok (UiO)». `BOKCONFIG.json` bruker den korte formen
«EXFAC03-EAST Examen facultatum for Øst-Asia-studier». Begge er lovlige; den
korte er valgt fordi tittelen også skrives til `institusjoner.ts` og til
navigasjonen, der «— eksamensrettet lærebok (UiO)» er støy (institusjonen står
allerede i gridet). **Begge former er testet mot disclaimer-heuristikkene og gir
samme resultat** (verken jus eller helse). ⚠ **Tittelen er uansett faglig
uverifisert og skal sjekkes mot UiOs emneside før wiring** (§18.2). Skjelettets
navigasjonsnavn «EXFAC03-EAST Examen facultatum (Øst-Asia)» brukes ikke —
wiringen tar `title` som den er.

**4. `sjekk-skjelett.py` teller 7 prøve-kvote-linjer, ikke 8 — og boka har 8
prøvekapitler.** Skjelettets Del 8-kvote står som en `###`-overskrift, mens
Del 1–7 står som fete linjer; porten teller den fete formen. `BOKCONFIG.json`
har `prøvedeler: [1,2,3,4,5,6,7,8]`, skjelettets kvotesammendrag fører 4 prøver
for Del 8, og totalen er 32 prøver = 8 × 4. **Ikke slett `exfac03-east-8-prove`,
og ikke «rett» prøvedeler til [1–7].**

**5. «Prioritet: perfekt» og sjangerkodene står i skjelettet og er FORBUDT i
boka.** Skjelettet skriver «Prioritet: perfekt» i over tjue kapittelblokker og
bruker kodene SAM, END, RED, VLG, ARG og V1–V5 gjennomgående. Dette er
**skjelettets språk**. I boka oversettes prioritetsklassene (§14.4), sjangrene
skrives med navn (§14.2), og vippe-casene bærer bare merkingen «(omstridt —
begge landinger forsvarlige)». Begge deler grep-sjekkes til null.

⚠ **Rangeringen og kapittelfordelingen er uendret** av alle fem punktene, så
skjelettets §2-rasjonale står: de tre tyngste klyngene — kjønn, region og
modernisering — dekker 13 av de 21 spørsmålene og får 15 av bokas 27
temakapitler; de seks øvrige klyngene deler de siste 8 spørsmålene og får 12
kapitler; ingen klynge får null.

### 20.1 Åpne punkter forfatteren IKKE kan løse selv

Disse skal merkes `(verifiser)` i teksten og løses i fase 6, av produkteier:

| # | Punkt | Hvor |
|---|---|---|
| 1 | **Emnets offisielle norske tittel** — ikke i arkivet, må mot UiOs emneside | BOKCONFIG, kap. 0.1 |
| 2 | **Om ordgrensen fortsatt gjelder** — materialet kan ikke avgjøre. Boka presenterer begge lesninger og henviser til semestersiden; ingen `(verifiser)` trengs, men formuleringen skal ikke avgjøre spørsmålet | kap. 0.1, 8.1 |
| 3 | **Om semesteroppgaveformen er permanent eller en høstvariant** — samme behandling som punkt 2 | kap. 0.1, 8.6 |
| 4 | **Om studenten kan velge besvarelsesspråk** — står ingen steder; skal stå som slutning med henvisning til semestersiden | kap. 0.1 |
| 5 | **Pensumlista utover Hudson og Iwabuchi** — ukjent. Boka sier det rett ut | kap. 0.3 |

**Ingen av de fem løses ved å gjette.** En bok som oppgir en pensumliste den ikke
har, eller en tittel den ikke har sjekket, bryter sannferdighetskravet like hardt
som en oppdiktet frekvenspåstand.
