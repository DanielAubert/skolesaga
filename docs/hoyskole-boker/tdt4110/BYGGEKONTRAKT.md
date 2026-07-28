# Byggekontrakt: TDT4110 Informasjonsteknologi grunnkurs (NTNU) — teknisk kontrakt for kapittelforfattere

Gjelder ALLE forfatter-agenter som bygger kapitler til `tdt4110`. Faglig innhold
styres av `SKJELETT.md` (identitetsseksjon §1 + per-kapittel-DNA i §4) — les ditt
kapittels avsnitt der nøye, og `EKSAMENSANALYSE.md` ved behov. Denne kontrakten
definerer format og krav, og er bindende der den er mer presis enn skjelettet.
Arketype: **DNA-regnefag** (`DNA-regnefag.md`), undertype **kodefag**: leseren
skal kunne (i) spore Python-kode mekanisk og angi utskriften tegn for tegn,
(ii) produsere kort, idiomatisk **prosedyrekode** i sensors stil, og (iii) svare
presist på flervalg om datamaskinens virkemåte.

**Boka dekker også søsterkoden TDT4109** (identisk innhold, egen emnekode for
andre studieprogram). Der emnekoden nevnes i Del 0 og i markedsføringstekst,
skal begge kodene nevnes; ellers skrives «TDT4110».

**Nærmeste forbilde er `in1900/BYGGEKONTRAKT.md`** (plattformens første
kodefag). To store forskjeller, som gjennomsyrer hele dokumentet:

1. **All OOP er ute.** TDT4110 er rent prosedyreorientert. Der IN1900 har fem
   klassekapitler, har denne boka null. Ingen `class`, `__init__`, `self`, arv
   eller metoder i noen fasit.
2. **En egen IT-teoridel (Del 8)** som IN1900 ikke har: ~25 % av eksamen er
   flervalg om maskinvare, tallrepresentasjon, nettverk, sikkerhet,
   komprimering/sampling og systemutvikling. Del 8 har sin egen kapittelmal
   («Begreps- og enhetsliste» i stedet for «API- og konstruksjonsliste») og
   bærer bokas tyngste quiz- og flashcard-kvoter.

En tredje forskjell er mindre, men blokkerende for verktøykjeden: **rekursjon
er PENSUM her** (60 % av settene), mens den er forbudt i IN1900/IN1000. Se
§K10 — kodeporten må gates før den kan brukes grønt på tdt4110.

---

## §0 PLATTFORMSTØTTE FOR KODE — hva du kan stole på

Plattformen **støtter kodeblokker**. `LatexRenderer`
(`src/components/textbook/latex-renderer.tsx`) plukker ut både
trippel-backtick-gjerder med språktagg og inline-kode (`` `…` ``) **før** matten
og markdown-transformene, rendrer gjerder som `<pre><code class="language-x">`
med `escapeHtml`, og setter kodeblokkene tilbake helt til slutt (fikset av
byggeleder 25. juli 2026, commit `274ce8af` + oppfølger på main).

**Garantien:** alt som står i et ```-gjerde eller i backticks er urørt av matte-
og markdown-kjeden. Innrykk, TAB, `$`, `*`, `_` og linjestartende `#` bevares.
Konkret betyr det at `d.get(k, 0)`, `s[::-1]`, `x**2`, `'{:5.2f}'.format(x)` og
hele kodeeksempler rendres som skrevet — ingen kursiv, ingen fet av `**`, ingen
kollapset innrykk, ingen løse backticks.

**Verifikasjon i sluttporten (prod-curl, jf. BYGGEPLAN-MAL steg 4):** hent en
kapittelrute med kode og sjekk at HTML-en inneholder `<pre` og at ingen
kodeidentifikator er blitt kursivert.

**Interne lenker har ikke lenger `/bok`-prefiks** (fjernet 27. juli 2026). Alle
kapittellenker skrives `[kap. X.Y](/tdt4110/tdt4110-X-Y)`. Formen `/bok/...` er
FORBUDT og gir død lenke.

### Til forfatteren

Skriv kode i målformatet (gjerder + backticks, se Kodekontrakten). Du skal
**ikke** finne omveier: ingen HTML i JSON, ingen unicode-look-alikes, ingen
ekstra mellomrom inne i kodenavn, og ingen omskriving for å unngå `$` eller `*`
i kode.

**PDF-generatoren** (`scripts/make-<emne>-pdf`) må speile den samme
kodeparkeringen når tdt4110-PDF lages. Ikke blokkerende for web.

---

## LÆRINGSLØKKE-KONTRAKT (ufravikelig byggekrav — produkteier 9. juli 2026)

Fra skjelettets topp, tatt inn her som bindende byggekrav:

- HVERT kapittels `content[]` struktureres som gjentatte små løkker
  **Teori → Eksempel → Oppgave**. `exercise`-blokker plasseres INLINE i
  `content[]` rett etter teorien/eksempelet de trener — ALDRI all teori øverst
  med oppgavene samlet nederst.
- I et kodefag er løkka konkret: `text`/`definition` som introduserer ÉN
  konstruksjon → `example` med kjørt kode + faktisk utskrift → `exercise` som
  bruker nøyaktig den konstruksjonen (typisk «hva skrives ut» eller «skriv
  funksjonen»). Deretter neste konstruksjon.
- I Del 8 (IT-teori) er løkka: `text`/`definition` som introduserer ÉN
  begrepsklynge → `example` som er et gjennomgått flervalgsspørsmål med
  begrunnelse for hvorfor hver nære distraktor er gal → `exercise` (nytt
  flervalg eller kort regnespørsmål) på samme klynge.
- **Ingen usett forkunnskap:** ingen oppgave får bruke en Python-konstruksjon,
  et idiom eller et fagbegrep som ikke er introdusert tidligere i kapitlet
  (t.o.m. eksempelet rett foran) eller i et kapittel referert i
  Forkunnskaper-blokken. Dette er skarpere i et kodefag enn i et regnefag: en
  `d.get(k, 0)` i oppgave 3 i kap. 3.2 er brudd, fordi ordbøker først kommer i
  kap. 3.5. Flytt teoribiten tidligere ved behov, eller bytt konstruksjon.
- **Unntak:** prøvekapitlene (`tdt4110-<del>-prove`) og øvingseksamenene
  (kap. 9.1–9.3) følger sin egen arketype — komplett oppgavesett først,
  løsninger i collapsibles.
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer kun
  REKKEFØLGEN.

---

## Filplassering

Ett JSON-dokument per kapittel: `src/lib/data/chapters/<kapittel-id>.json`
(f.eks. `tdt4110-7-4.json`). IKKE rør `_registry.json`, `_all.json`,
`textbook-courses*.ts` eller `quiz-data*.ts` — wiring gjøres sentralt med
`scripts/hoyskolebok/wire-bok.py`. Generer JSON via python `json.dump`
(garantert gyldig escaping). Quiz til
`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`.

Boka består av **47 filer**: 39 kapitler (1 eksamenskart + 35 tema/drill + 3
øvingseksamener) + 8 prøvekapitler (`tdt4110-1-prove` … `tdt4110-8-prove`).

---

## Kapittel-JSON (toppnivå)

```json
{
  "id": "tdt4110-7-4",
  "courseId": "tdt4110",
  "chapterNumber": "7.4",
  "title": "…(fra skjelettet, ordrett)…",
  "description": "…(setningen fra skjelettet)…",
  "estimatedMinutes": 75,
  "competenceGoals": ["kunne finne den beste raden i en tabell uten å anta fast kolonnerekkefølge", "…"],
  "content": [ …blokker… ],
  "exercises": []
}
```

`chapterNumber` = skjelettets `number` (`<del>.<nr>`; prøvekapitler `<del>.P`).
**`number` er del-basert («7.4»), aldri lineær** — bokforsiden grupperer på
`number.split('.')[0]`.
`competenceGoals`: 2–4 «kunne …»-formuleringer avledet av kapitlets
Kodekontrakt/Begrepskontrakt — **ingen kald sjangerkode (A–J), feilkode (#N)
eller karakterbokstav her**, og ingen kodeidentifikator uten backticks (§K8).
`exercises` er alltid tom liste (oppgaver ligger som `exercise`-blokker inline i
`content`).

---

## Blokktyper (eksakte felt — strukturreferanse: `src/lib/data/chapters/econ1310-2-1.json`, kodeformat: `src/lib/data/chapters/in1900-1-3.json`)

- `text`: `{ "id", "type": "text", "content": "markdown + LaTeX + kodeblokker" }`
- `definition`: `{ "id", "type": "definition", "title": "…", "content": "…" }`
  — **title er OBLIGATORISK** (flashcards genereres KUN fra toppnivå
  `definition`-blokker med title). I dette faget har `definition` to roller:
  - **kodesiden (Del 1–7):** API-/konstruksjonsdefinisjon. `title` er
    konstruksjonen (f.eks. «`d.get(k, default)`»), `content` er presis
    oppførsel i ord + ett minimalt eksempel med utskrift. Åpne med oppførselen
    i ORD, ikke med kode.
  - **teorisiden (Del 8):** fagbegrepsdefinisjon. `title` er begrepet
    («Fetch-execute-syklusen», «Nyquist-regelen», «Toer-komplement»), `content`
    er en presis, flervalgsklar forklaring — den skal inneholde nøyaktig det
    ordet eller tallet som skiller riktig fra galt i de nære distraktorene.
- `theorem`: `{ "id", "type": "theorem", "title": "Navn på kodemønsteret", "content": "…" }`
  — brukes for de **kanoniske kodemønstrene/idiomene** (skjelettets dokumenterte
  avvik): *les fil → 2D-tabell*, *les fil → ordbok*, *teller med ordbok*
  (`d[k] = d.get(k, 0) + 1`), *finn beste*, *gruppér* (`{nøkkel: [elementer]}`),
  *input-valideringsløkke*, *rekursjon (grunntilfelle + steg)*, *iterativt
  binærsøk*, *boblesortering*, *meny/`main`-dispatcher*, *tidsformat
  `hh:mm:ss`*. Disse er bokas «teoremer» og skal stå som `theorem`, ikke `text`.
- `example`: `{ "id", "type": "example", "title": "Eksempel N: …", "problem": "…", "solution": "…" }`
  — `solution` = kort, idiomatisk prosedyrekode + «**Utskrift:**»-blokk med den
  KJØRTE utskriften (§K3–K4). I Del 8: gjennomgått flervalg med begrunnelse for
  riktig svar OG for hver nære distraktor.
- `tip` / `warning`: `{ "id", "type", "title", "content" }`
- `exercise`: `{ "id", "type": "exercise", "exercise": { "id", "number", "type": "classic", "difficulty": "lett"|"middels"|"vanskelig", "task", "solution", "hints": [] } }`
  — ALDRI `solutionVideo` / `allowsUpload` / `allowsCanvasDrawing` / `answer`.
  Ikke bruk `subTasks`-feltet (deloppgaver skrives inline, se Leserkrav).
- `image`: `{ "id", "type": "image", "src": "/images/textbook/tdt4110/<navn>.svg", "alt": "…", "caption": "…" }`
  — figurbehovet på kodesiden er nær null (kode er ikke figur). Del 8 kan trenge
  et fåtall: fetch-execute-syklusen, TCP/IP-lagene, sampling av et analogt
  signal, vannfall vs. spiral. Bestilles i `FIGUR-BESTILLINGER.md`, og SVG-en
  MÅ lastes opp med `upload-media-storage.ts` — ellers 404 i produksjon.
- `collapsible`: `{ "id", "type": "collapsible", "title", "buttonText": "Vis …", "content": [blokker] }`
  — API- og konstruksjonsliste, Begreps- og enhetsliste, prøver, repetisjon,
  «Bør kjenne til — nyere pensum». ALDRI tom: feltnavnet er `content` og skal ha
  blokker (en `text`-nøkkel eller tom array rendrer som tom boks).

Blokk-id-er: `<kapittel-id>-<løpenavn>`, f.eks. `tdt4110-7-4-def-2`,
`tdt4110-8-2-ex-5`. Unike innen kapitlet (porten sjekker).

---

## Obligatorisk kapittelstruktur

### Kodekapitler (Del 1–4, 5.2, 6.1–6.3, 7.x — DNA-regnefag + skjelettet)

Alltid, i denne rekkefølgen først i kapitlet:

1. `tip` **Eksamensvinkel** — frekvens, vekt og sjangre, med tallene fra
   skjelettets Eksamensbelegg-felt for NETTOPP dette kapitlet (og ingen andre
   tall). Skriv sjangerkoden ut i klarspråk ved første bruk: «sjanger B —
   kodesporing, altså «hva skriver dette programmet ut?»».
2. `text` **Forkunnskaper** — kapitler i boka (markdown-lenker
   `[kap. X.Y](/tdt4110/tdt4110-X-Y)`) + kryssbok-lenker der forkunnskapen ikke
   dekkes i boka (tabellen lenger nede, KUN filer som finnes). «Kan leses uten
   forkunnskaper» hvis ingen. I tunge, sene kapitler (5.1, 5.3, hele Del 7,
   8.7) skal blokken være en **«Sist du var her»**-blokk som VISER de 2–3
   nøkkelkonstruksjonene ferdig oppfrisket (kodesnutt med utskrift), ikke bare
   lenker.

Deretter DNA-løpet i læringsløkker: `text` konkret anker/motivasjon →
`definition`/`theorem` konstruksjonen (flashcard-kilden — toppnivå med title!) →
`example` med kjørt kode og faktisk utskrift → `exercise` inline som trener
nøyaktig den konstruksjonen → neste bit. 2–4 eksempler per delkapittel, siste på
eksamensnivå; 6–12 `exercise` i kapitlet, stigende (lett → middels →
vanskelig), de vanskeligste = eksamenskloner av kapitlets sjangre.
`warning` **Typiske feil** (fra feilkatalogen #1–#17) plasseres der den er mest
relevant — ofte rett etter den konstruksjonen som utløser feilen, og alltid
minst én i kapitlet.

Og SIST i kapitlet: `collapsible` **API- og konstruksjonsliste**.

> **Navnet er skjelettets dokumenterte avvik fra README** («Symbol- og
> formelliste» → «API- og konstruksjonsliste», fordi et kodefag har et
> konstruksjonsapparat, ikke greske bokstaver). `sjekk-bok.py` krever den
> literale strengen «Symbol- og formelliste» i hvert kapittel som bruker
> LaTeX-symboler, så blokken skal ha:
> - `title`: `"API- og konstruksjonsliste"`
> - `buttonText`: `"Vis API og konstruksjoner"`
> - første linje i første `text`-blokk inne i collapsiblen, ORDRETT:
>   «Oppslagsverk — alt her forklares underveis i kapitlet. Dette er kapitlets
>   Symbol- og formelliste, tilpasset et kodefag: den lister
>   Python-konstruksjonene i stedet for greske bokstaver.»
>
> Da er både README-notisen og porten oppfylt uten å endre skript.

Listen er en markdown-tabell `| Konstruksjon | Presis oppførsel |` med ALLE
konstruksjoner brukt i delkapitlet — per delkapittel, ikke arv fra tidligere
kapitler. Presis oppførsel betyr det som avgjør en kodesporing:
`range(start, stop, step)` — «`stop` er EKSKLUSIV»; `d.get(k, 0)` — «returnerer
default hvis nøkkelen mangler, og setter den IKKE inn»; `s[::-1]` — «gir en ny
streng snudd, originalen er uendret»; `.sort()` — «endrer lista og returnerer
`None`»; `line.strip().split(';')` — «`strip()` fjerner linjeskiftet FØR
delingen». Er det aritmetikk bak et mønster (bildestørrelse, `2^n`, tidsformat),
står formelen i LaTeX under tabellen, med «**Formler i dette delkapitlet:**».

### Teorikapitler i Del 8 (8.1–8.6)

Samme åpning (`tip` Eksamensvinkel → `text` Forkunnskaper), men:

- Løkka er begrepsklynge → gjennomgått flervalg → nytt flervalg/regnespørsmål.
- SIST i kapitlet: `collapsible` **«Begreps- og enhetsliste»** (skjelettets
  andre dokumenterte avvik) — `buttonText` «Vis begreper og enheter», og samme
  ordrette notis-avsnitt som over, men med «… den lister fagbegrepene og
  enhetene i stedet for greske bokstaver». Tabellen er
  `| Begrep/enhet | Presis betydning |` og skal inneholde ALLE begreper og
  enheter kapitlet bruker (bit/byte og prefikser, ALU, register, ACK, MAC,
  Nyquist-regelen, RLE, …).
- Del 8 er bokas flashcard-tyngdepunkt (126 av 558). Begrepsdefinisjonene ER
  flashcardene — skriv dem så presist at kortet alene skiller riktig fra den
  nære distraktoren.
- 8.2 og 8.5 har regnestoff (`2^n`, binær↔hex, bildestørrelse, samplingsfrekvens).
  Regnemetodene skrives som `theorem`-lignende oppskrifter, og **hvert tall i
  boka skal være etterregnet** (§K11).

### Drillkapitler (5.1, 5.3, 7.1–7.7, 8.7)

`tip` Eksamensvinkel → `text` Forkunnskaper → `text`/`theorem`
**Løsningsoppskrift** (algoritmen fra skjelettets Kodekontrakt-felt, steg for
steg og nummerert) → `example` gjennomarbeidet eksamenscase med
sensor-margnotater (hva som gir uttelling ved HVERT steg, og at riktig
overordnet struktur belønnes selv med indeksfeil) → 8–15 `exercise` som roterer
sjangrene, alle på eksamensnivå med nyskrevne domener, alle med full løsning
(for sjanger B: full sporing, se §K6). Signal-/hintbokser som varsler hva en
drilloppgave tester, står ETTER oppgaven.

Kap. 8.7 er flervalgsdrill, ikke kodedrill: løsningsoppskriften er
teori-flervalgsstrategien (les alle alternativer → elimér → finn det ene
ordet/tallet → regn for hånd → **kryss alltid av**), og drillen er 18–24
flervalg i eksamensrekkefølge. 8.7 rommer også `collapsible` **«Bør kjenne til
— nyere pensum»** (NumPy/Matplotlib, KI som kodehjelp), merket
`(verifiser mot gjeldende pensum — ikke i arkivet 2014–2019)`.

### Øvingseksamener (9.1–9.3)

Komplette **tredelte** sett etter skjelettets miks (teori ~25 % +
kodeforståelse ~15–20 % + programmering ~50–60 %). `estimatedMinutes` 240 for
alle tre. Struktur: `tip` med format, prosentvekting og tidsbudsjett (f.eks.
teori ~35 min, kodeforståelse ~35 min, programmering ~150 min) → nyskrevet
oppgavesett i eksamensform → `collapsible` modellbesvarelse per oppgave (kort
idiomatisk prosedyrekode + `tip` om vekting, delpoeng og hva som gir uttelling
ved delvis riktig kode). Lange modellbesvarelser har «— naturlig pausepunkt
—»-markører. Teori- og kodesporingsspørsmålene registreres OGSÅ som kapitlets
quizkvote, slik at teoridelen kan tas som en tidsstyrt MC-økt.

**Kald bank:** boka skal ha ÉN merket kald bank (8–10 oppgaver med uvante
vinklinger/kombinasjoner, UTEN hint, fasit = momentliste) — den legges i
kap. 9.1 som en egen `collapsible` «Kald bank — uten hint».

---

## Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»; SKAL i førsteutkastet)

- **Kun eksamensrelevant stoff**; «bør kjenne til» sist og merket (gjelder
  særlig `pickle` i kap. 4.2, binærsøk-implementasjon i 6.2, Big-O i 6.3,
  systemutvikling i 8.6, `random` i 9.3 og NumPy/KI-tillegget i 8.7).
- **Korte avsnitt** (2–4 setninger), aktiv «du»-form, konkret anker før
  formalismen. Godt, flytende norsk; ALDRI telegramstil («Løkke: teller. Feil:
  av-én.» er FORBUDT).
- **Meningsfulle oppgaver:** hver oppgave er synlig eksamensforankret. Sjanger-
  og nivåmetadata skrives som en LEDENDE parentes i `task` som
  `extractGenreTag` kan trekke ut til en chip, f.eks.
  `(Eksamensnivå, sjanger G — analyse: finn beste rad.)`, ALDRI midt i
  brødteksten. Ikke gjenta `difficulty` i teksten («(krevende)» skrives ikke i
  `task` — feltet vises i oppgavehodet).
- **Læringsløkke Teori → Eksempel → Oppgave** med `exercise`-blokker INLINE.
- **Ingen usett forkunnskap** (se løkke-kontrakten øverst — skjerpet for kode).
- **Deloppgaver på egen linje, fet merking:** a), b), c) i `task`/`solution`
  HVER på egen linje — `…\n\n**a)** …\n**b)** …`. ALDRI bak hverandre i løpende
  tekst; ikke bruk `subTasks`. Listemerking med små bokstaver. Dette er ekstra
  viktig her: eksamens programmeringsoppgave ER en kjede av deloppgaver a–f.
- **Nybegynner-inngang / ingen uforklart sjargong (UFRAVIKELIG).** Boka skal
  forstås av en som aldri har programmert:
  - **Sjangerkodene A–J** skrives ut i klarspråk ved FØRSTE bruk i HVERT
    kapittel: «sjanger C — «forklar med én setning hva funksjonen gjør»».
  - **Feilkodene #1–#17** glosses ved FØRSTE bruk PER KAPITTEL:
    «(#2 — glemt `.strip()`, så linjeskiftet henger med i siste felt)».
  - **Eksamens-metaspråk** forklares før bruk: «hjelpemiddelkode D» (bare en
    bestemt enkel kalkulator, ingen bøker, ingen elektronikk utover den),
    «skoleeksamen», «prosentvekting per deloppgave», «flervalg», «fritekst»,
    «offisielt løsningsforslag», «delpoeng», «obligatoriske øvinger».
  - **API-navn og programmeringssjargong** forklares ved første bruk, ALDRI
    kaldt: «å iterere», «å parse (tolke en tekstlinje og hente ut feltene)»,
    «streng», «2D-liste (en liste der hvert element selv er en liste — altså en
    tabell med rader og kolonner)», «nøkkel og verdi», «slicing (utsnitt)»,
    «exception (feil som avbryter programmet)», «sentinel», «in place».
  - **IT-teoriens fagbegreper** forklares like strengt: «ALU», «register»,
    «flyktig minne», «protokoll», «pakkesvitsjing», «asymmetrisk kryptering»,
    «sampling», «akseptansetesting». Aldri en forkortelse uten utskriving.
  - Ingen kald kode i `competenceGoals` eller i aller første tekstboks.
  - Kap. 0.1 har en **«Slik leser du denne boka»-orienteringsboks** (type
    `text` eller `tip`, ALDRI `definition` — det ville endret flashcard-kvoten)
    med: karakterskalaen A–F og den ene eksamenen som teller 100 %, kompakt
    liste over sjangerkodene A–J, kompakt liste over feilkodene #1–#17 med at
    de har et samlet register, og setningen om at hver Python-konstruksjon og
    hvert fagbegrep forklares der det brukes.
- **Del 0-pakken (kap. 0.1):**
  - **«Lite tid?»-boks** (`tip`) med hurtigrute 3–5 dager + ukeplan summert fra
    `estimatedMinutes` (se «Tidsbudsjett» under — bruk **3 570 min ≈ 60 timer**
    for hele boka, **2 630 min ≈ 44 timer** for de 39 kapitlene uten prøver) +
    presiseringen at anslagene er LESEtid og at den som skriver koden selv bør
    regne ca. ×1,5.
  - **Kildenote** (se «Sannferdig kildenote»).
  - **Sjangerkortet A–J på ÉN side** (kortet SELV: sjanger → én linjes
    oppskrift → typisk vekt → vanligste feil, ikke en lenkeliste).
  - **Deltidsrute** 10–12 uker (~5–6 t/uke) med de tre øvingseksamenene fordelt
    på tre kvelder, aldri stablet til slutt.
  - **«lese mye, skrive lite»-boks** — og for et kodefag den motsatte
    advarselen i tillegg: **du må skrive kode for hånd, på papir, uten å kjøre
    den**, fordi eksamen er skriftlig med hjelpemiddelkode D. Minst én
    øvingseksamen skal skrives for hånd uten maskin.
  - **Kodemønster-minimum** (`collapsible` «Mønstrene du må kunne skrive fra
    bunnen»): les fil → 2D-tabell, les fil → ordbok,
    `d[k] = d.get(k, 0) + 1`-telleren, finn beste, gruppér, boblesortering,
    input-valideringsløkke, rekursjon (grunntilfelle + steg), iterativt
    binærsøk, meny/`main`, formatert utskrift/`pickle` — hver med én ordlinje og
    markering «skriv fra bunnen» vs. «snarvei tillatt».
  - **Teori-minimum** (`collapsible`): de seks teoriklyngene i Del 8 med de
    faste nær-distraktor-fellene uthevet (Nyquist «minst dobbelt», IPv6 = 128
    bit, mottakers offentlige nøkkel krypterer, MP3/JPEG har tap, RAM er
    flyktig, vannfall = sekvensielt).
  - **Metareglene**: skriv kort hva du antar · **svar kort og klart — uklart
    eller lengre enn nødvendig trekker ned** · ingen minuspoeng på flervalg fra
    2015, så **kryss alltid av** · prosentvekting er oppgitt, disponér tiden ·
    les hele settet før du begynner.
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. X.Y](/tdt4110/tdt4110-X-Y)`; død «se kapittel»-tekst er
  FORBUDT (aldri lenker i `title`-felt). **Aldri `/bok/`-prefiks.**
- **Karakter-realisme:** «C er en god og vanlig karakter» eksplisitt i Del 0;
  grep «Prioritet: perfekt» skal gi 0 treff. NB: «PERFEKT» i skjelettets
  deltitler er en *prioritetsklasse* (perfekt/kunne/kjenne = nivå 1/2/3), IKKE
  et krav om plettfri kode — skriv «må sitte / høyeste prioritet». Faget har
  eksplisitt sensorstøtte: riktig overordnet struktur gir god uttelling selv med
  indeks- og kantfeil, og flere korrekte løsninger sidestilles.
  Modellbesvarelser merkes ÆRLIG (en «C-besvarelse» ER en C) + minst én
  autentisk B-/midtnivå-besvarelse: kode som virker og har riktig struktur, men
  som hardkoder en kolonneindeks, glemmer tomtilfellet eller returnerer
  duplikater — med margnotat om hva som er BRA NOK og hva som skiller den fra
  A.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter hver prøvefasit — konkret
  for dette faget: «☐ konverterte du med `int()`/`float()` etter innlesing?
  ☐ `.strip()` før `.split()`? ☐ fant du kolonnen med `tabell[0].index(...)` i
  stedet for et hardkodet tall? ☐ håndterte du tom liste / «ikke funnet»?
  ☐ ble det duplikater i resultatet?».
- **Lett innstegsoppgave** (difficulty lett, ren gjengivelse/minimal sporing,
  vennlig fasit) tidlig i teorikapitler der første oppgave ellers er full
  eksamenssjanger.
- **Hverdagsanker + verdens-caser:** abstrakte kjernetemaer åpner med et
  konkret anker før apparatet. Domeneinnpakningene er virkelige, hverdagsnære
  caser (bussruter, bibliotekutlån, matvarepriser, treningslogg, resirkulering,
  strømpriser, turnering, værmålinger), aldri «en medstudent skriver …
  »-metaeksempler. **Domenet roterer** fra oppgave til oppgave — det er hele
  poenget med faget: øvelsen bak er identisk uansett innpakning, og boka skal
  si det høyt.
- **Tidsbudsjett-konsistens:** avvik mellom deklarert oppgavetid og sum
  deltider forklares (skrivetid vs. total). «Lite tid?»-boksen sier at
  anslagene er LESEtid (×1,5 når du faktisk skriver koden).
- **Øktmerking:** kapitler med `estimatedMinutes` > 45 (1.3, 3.2, 3.3, 3.5,
  4.1, 5.1, 5.2, 5.3, 6.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 8.1, 8.2, 8.3, 8.7,
  9.1–9.3) har tidsanslag per løkke («Løkke 2 — ordboken som teller (~20 min)»)
  eller «— naturlig pausepunkt —»-markører.
- **Hint + difficulty-spredning:** alle `exercise` har utfylte `hints` (første
  hint = konstruksjonen/første grep, f.eks. «Start med `tabell[0].index(navn)`
  for å finne kolonnen» — ALDRI utskriften eller den ferdige koden). Unntak:
  den merkede kalde banken i 9.1. Boka har flere «krevende»-oppgaver
  (difficulty `vanskelig`), særlig robusthetsoppgavene i 7.6.
- **Fasitmønster-variasjon:** ALLE ensartede fasitlister varierer. Statiske
  flervalg i prøve-collapsibles har STOKKEDE fasit-bokstaver (aldri «alle a»);
  quizfilene beholder `options[0]`-invarianten fordi runtime stokker. I
  Del 8-flervalg skal riktig svar fordele seg jevnt over a–d; porten
  `sjekk-fasitfordeling.py` feiler over 45 % på én bokstav.
- **Distraktorer straffer aldri grundig lesing:** en distraktor gjengir ALDRI
  bokas egne presiseringer som «galt» svar. Nære distraktorer forklares i
  `explanation`. **Aldri referer til et alternativ ved plassering** («alternativ
  to», «det tredje alternativet») — quiz-alternativene stokkes ved kjøretid.
  Siter alternativets TEKST i stedet (`sjekk-alternativref.py` fanger dette).
- **Meta-fasit forbudt:** «en A-besvarelse ville her ha skrevet …» erstattes av
  koden faktisk skrevet ut. Grep «en A-besvarelse ville» / «ville ha drøftet»
  = 0.
- **Frekvenstall = telte belegg:** «100 % (10 av 10 sett)», «~80 %», «~60 %»
  skal stemme EKSAKT med skjelettets Eksamensbelegg-felt for kapitlet. Tell før
  du skriver; ikke oppfinn nye prosenter. Arkivet er **10 sittinger**, så
  prosentene er tideler.
- **Juridisk:** innholdet fremstiller seg ALDRI som offisielt eller
  NTNU-tilknyttet, og lover aldri eksamensutfall.

### Sannferdig kildenote (UFRAVIKELIG — produkteier)

Kildenoten i Del 0 og all omtale av grunnlaget nevner KUN kildetyper som
faktisk finnes i fagets arkiv, jf. `EKSAMENSANALYSE.md` §8. Bruk denne
formuleringen (eller en trofast omskrivning):

> Frekvenstallene i denne boka er telt i NTNU-arkivet for TDT4110 2014–2019:
> 10 eksamenssittinger og 7 offisielle løsningsforslag — 17 dokumenter i alt.
> Løsningsforslagene og de nyeste settene (2015–2019) er gjennomgått grundig;
> de eldste er skummet for form- og temaregistrering. Kodesnuttene i
> kodeforståelsesoppgavene ligger som bilder i PDF-ene og er dekket indirekte,
> via løsningsforslagenes fasitsvar. Arkivet stopper i 2019, og gjeldende
> emnebeskrivelse har siden fått tillegg (f-strenger, NumPy/Matplotlib, KI som
> kodehjelp) som er merket særskilt i boka. Et nytt sett kan endre bildet.

Presist språkbruk, fire ting:

1. Faget har **offisielle løsningsforslag**, som i praksis fungerer som
   sensorveiledning. Skriv «offisielle løsningsforslag» (evt. «løsningsforslag
   som fungerer som sensorveiledning»). Ikke påstå at det finnes separat
   publiserte «sensorveiledninger» som egen dokumenttype.
2. **Modellbesvarelser i boka er NYSKREVNE** av Skolesaga. De omtales aldri som
   ekte studentbesvarelser, og aldri som hentet fra fasit.
3. **Pensumdriften skal stå ærlig i Del 0**: arkivet er 2014–2019; f-strenger
   ble varslet inn i 2019, og gjeldende emnebeskrivelse nevner NumPy/Matplotlib
   og KI som kodehjelp. Ingen av delene er belagt i arkivet, og alle slike
   omtaler bærer merket `(verifiser mot gjeldende pensum — ikke i arkivet
   2014–2019)`.
4. Ingen andre kildetyper nevnes (ingen «eksamensstatistikk», ingen
   «sensorpanel», ingen «karakterfordeling») med mindre de står i §8.

---

## Fagspesifikk stil (ufravikelig for TDT4110 — fra skjelettets §1)

### Eksamensform (gjengis korrekt overalt)

**Én avsluttende skriftlig skoleeksamen, 4 timer, som teller 100 %.**
Karakterskala **A–F**. **Hjelpemiddelkode D**: kun en bestemt, enkel kalkulator
— ingen trykte eller håndskrevne hjelpemidler, ingen elektronikk utover
kalkulatoren. All kode er Python 3. Både bokmål og nynorsk tilbys. Obligatoriske
øvinger må være godkjent for å gå opp. Det finnes ingen midtveiseksamen og ingen
mappe — alt avgjøres på de fire timene.

**Fast tredelt makrostruktur, hvert eneste år 2014–2019:**

| Del av settet | Innhold | Vekt |
|---|---|---|
| **Oppgave 1 — teori/flervalg** | ~20 flervalgsspørsmål om maskinvare, tallrepresentasjon, nettverk, sikkerhet, komprimering/sampling, systemutvikling, algoritmer | **~25 %** |
| **Kodeforståelse** | 4–6 deloppgaver: «hva skrives ut/returneres», «forklar med én setning hva funksjonen gjør», «fyll inn manglende kodelinje» | **~15–20 %** |
| **Programmering (1–2 oppgaver)** | En kjede små funksjoner som bygger en mini-applikasjon i et domene: les fil → parse → analysér → skriv ut/lagre | **~50–60 %** |

Faste mekaniske detaljer som SKAL gjengis riktig:

- **Rekkefølgen på kodeforståelsen varierer** (noen år Oppgave 2, andre år
  Oppgave 4), men alle tre byggeklossene er der hvert år.
- **Prosentvekting per deloppgave er oppgitt på settet** — den styrer
  tidsbruken, og boka skal trene studenten i å disponere etter den.
- **Ingen minuspoeng på flervalg fra og med 2015** (H2014 hadde −½ for feil;
  det er historikk og nevnes bare som historikk). Blankt = 0 = feil → **kryss
  alltid av**, også ved ren gjetting. Dette skal stå i Del 0 og i kap. 8.7.
- **Domeneinnpakningen roterer** år for år (reisetid, valg/stemmetelling,
  Yatzy, priskrig, auksjon, oppskrifter, fartsmåling, allidrett, storskjerm),
  men **programmeringsøvelsen er identisk**. Boka sier dette høyt og bruker
  rotasjonen som pedagogisk poeng.
- **Teoriinnholdet har forskjøvet seg:** 2014–2017 tungt på systemutvikling og
  algoritmekompleksitet, 2018–2019 dreid mot nettverk, sikkerhet og maskinvare.
  Begge klynger skal dekkes; 8.6 (systemutvikling) merkes «kan komme igjen».

### Føringsstandard (bokas eget håndverkskrav — gjelder ALL kode i boka)

De åtte stilreglene fra skjelettets §1, gjort til byggekrav:

1. **Rent prosedyreorientert — INGEN klasser/OOP.** Alt løses med `for`/`while`,
   `if/elif/else`, funksjoner, lister, 2D-lister, ordbøker, tupler, strenger og
   filer. Ingen `class`, `__init__`, `self`, arv eller metoder man skriver selv.
   Boka skal ikke engang nevne OOP som en løsningsvei i noen fasit. Eneste
   tillatte omtale er avgrensningsavsnittet i kap. 0.1 («klasser og
   objektorientering er utenfor pensum i TDT4110 — det hører til andre emner»).
2. **Snarveier er TILLATT og brukes i fasit.** `max`, `min`, `sum`, `sorted`,
   `set`, `.index`, `.count`, `enumerate`, list comprehension. Boka viser
   **begge**: først den eksplisitte løkkevarianten (så konstruksjonen sitter),
   deretter snarveien — og sidestiller dem eksplisitt («begge gir full pott»).
   Dette er motsatt av IN1000, som teller manuelt med vilje. TDT4110 er
   pragmatisk «få jobben gjort». Kravet gjelder særlig 3.1, 3.5, 6.1, 7.4, 7.5.
3. **KONSISHET vurderes eksplisitt.** Sensor gjentar hvert år: «svar kort og
   klart — er svaret uklart eller lengre enn nødvendig, trekker dette ned.»
   Gjelder særlig teorisvar og sjanger C. Hvert kapittel som trener forklaringer
   (5.3, 9.1–9.3) skal ha en `warning` om at ordrike/upresise svar trekker ned,
   og skal vise **kontrasten**: en god (én setning, sier *hva*) mot en dårlig
   (lang, sier *hvordan* linje for linje). Alle fasit-forklaringer i boka skal
   selv være mønstergyldig korte.
4. **Gjenbruk av egne funksjoner forventes.** De store programmeringsoppgavene
   er kjeder der senere deloppgaver bygger på de tidligere. Sensor belønner
   gjenbruk framfor kopiert kode. Alle kjede-eksempler (7.1, 7.7, Del 9) skal
   demonstrere gjenbruk eksplisitt — og `main` skal lese fila ÉN gang og sende
   tabellen videre, aldri lese på nytt i hver funksjon.
5. **Flere korrekte løsninger sidestilles.** Fasiten sier eksplisitt at den
   viste løsningen bare er én av måtene. Alternative løsninger med rett idé gir
   full pott. Dette skal stå i Del 0 og prege ALLE løsningsforslag (margnotater
   om hva som gir uttelling). Hjelpefunksjoner og modulnivå-konstanter er greit.
6. **ROBUSTHET gir toppscore.** Fire eksplisitte fullscore-krav: (a) ikke anta
   fast kolonne-/radrekkefølge — finn indeks dynamisk med
   `tabell[0].index(navn)`; (b) håndtér tomtilfeller og «ikke funnet» — returnér
   `[]`/`None`/`-1`; (c) ikke returnér duplikater — `if x not in liste` eller
   `set`; (d) håndtér vilkårlig input-rekkefølge. Kap. 7.6 er drillkapitlet for
   dette, og hvert analysekapittel (7.4, 7.5) skal ha minst én
   robusthetsdeloppgave.
7. **Ingen minuspoeng på flervalg (fra 2015)** → kryss alltid av. Skal stå i
   Del 0 og i 8.7.
8. **Norske ELLER engelske navn går like bra.** Boka bruker overveiende
   **norske** funksjons- og variabelnavn (`les_inn_tabell`, `finn_beste`,
   `antall_per_type`), men sier én gang i Del 0 at engelske navn er like
   gyldige — fasiten blander.

### Notasjonsstandard (grep-bar)

| Skal skrives | Ikke |
|---|---|
| `` `range(1, len(x), 2)` `` — all Python i backticks | `$range(...)$`, bar `range(...)` i prosa |
| `$2^n$`, `$O(\log n)$`, `$\approx$`, `$\le$` — matematikk i prosa som LaTeX | `2ⁿ`, `O(log n)` som unicode, `≈`, `≤` |
| ```python-gjerde for kjørbar kode, ```text for fragmenter | ` ```py `, ` ```Python `, ubemerket gjerde |
| «**Utskrift:**» + bar ```-blokk | «Output:», «Resultat:», «Dette skriver ut:» |
| `hh:mm:ss`, `01:02:05` (nullpadding) | `1:2:5` |
| 4 mellomrom innrykk i Python-kilde | TAB |
| «hjelpemiddelkode D» skrevet ut ved første bruk | «kode D» kaldt |

Norsk fagspråk: **2D-liste** (ikke «matrise», bortsett fra der oppgaven selv
handler om en matematisk matrise), **ordbok** (ikke «dictionary» i prosa, men
`dict` i kode), **løkke**, **grunntilfelle** (ikke «base case» i prosa — nevn
det engelske ordet én gang i parentes i 5.2), **tomtilfelle**, **nær
distraktor**.

### Arketypesærtrekk

- **Modellbesvarelser** er kort, idiomatisk prosedyrekode med sensor-margnotat
  om delpoeng — aldri en fortelling om hva en A-besvarelse «ville» gjort.
- **Figur-i-ord** brukes der en figur ville hjulpet, men ikke er bestilt: skriv
  presist hva figuren ville vist (f.eks. de fem stegene i fetch-execute-syklusen
  som en løkke). Ber en oppgave om en figur, MÅ løsningen vise en faktisk SVG.
- **Ingen R-kode, ingen NumPy, ingen plotting** i noen fasit. Alt er ren Python
  3 med standardbiblioteket (§K7).
- **To flervalgssjangre**, ikke én: teori-flervalg (A, Del 8) og
  kodeforståelses-flervalg (B/D, Del 5). Quizbanken er direkte trening på
  begge — se «Quiz-kvoten».
- **Feilkatalogens numre er identiske med `EKSAMENSANALYSE.md` §5** for
  #1–#13. Endre ALDRI den nummereringen — skjelettets per-kapittel-felt
  henviser til «§5.4», «§5.9», «§5.11» osv.

---

## KODEKONTRAKTEN (bindende)

### §K1 Kodeblokker i JSON

**Format.** All kode står i trippel-backtick-blokker med språktagg:

```
```python
kode
```
```

- **Tagg `python`** = komplett, kjørbar, faktisk kjørt kode. Kodeporten
  `compile()`-sjekker hver slik blokk.
- **Tagg `text`** (bar ` ``` ` for utskrift, se §K4) = blokker som med vilje
  ikke er kjørbare: fragmenter, pseudokode (kap. 6.3!), plantede feil i
  «fyll inn manglende kodelinje»-oppgaver, filinnhold, sesjonsutdrag. Da er
  blokken heller ikke eksempelkode, og leseren skal få vite hvorfor.
- Ingen andre tagger. Ikke ` ```py `, ikke ` ```Python `.

**Escaping i JSON (bruk alltid `json.dump`, aldri håndskriv):**

| Skal vises i koden | I JSON-strengen | Merk |
|---|---|---|
| linjeskift | `\n` | ekte linjeskift finnes ikke i JSON-strenger |
| 4 mellomrom innrykk | fire mellomrom | ALDRI TAB som innrykk |
| `print("a\tb")` (tab i en Python-streng) | `print(\"a\\tb\")` | `\\t` = backslash + t, altså Python-kildekoden |
| en EKTE TAB i programutskrift | `\t` | lovlig KUN inne i en ```-blokk |
| `"` i koden | `\"` | eller bruk enkle fnutter i Python |
| `\` i koden (`'\n'` i `write`, separator) | `\\` | samme regel som LaTeX |

**TAB-regelen presist.** `scripts/hoyskolebok/sjekk-latex.py` avviser
kontrolltegn (herunder TAB) **overalt unntatt inne i ```-kodeblokker** og i
`.ts`-filer. Det betyr:

- TAB i **programutskrift** inne i en ```-blokk: **lovlig** (kolonnejustering).
- TAB i **Python-kilden** som innrykk: **forbudt** (kodeporten avviser) — bruk
  4 mellomrom.
- TAB **utenfor** en kodeblokk: **forbudt** (LaTeX-porten avviser).

Merk at `\t` som **separator i en datafil** er et reelt tema i dette faget
(feilkode #3). Skriv da separatoren i Python-kilden som `'\t'` (JSON: `'\\t'`)
og forklar i prosa at det er et tabulatortegn — ikke lim inn en ekte TAB i
prosaen.

**`$` er tillatt inne i kodeblokker.** `sjekk-latex.py` ser bort fra både
```-blokker og `inline-kode` når den teller dollartegn. Utenfor kodemarkering
gjelder fortsatt regelen om balanserte `$` — der er `$` matte-avgrenser.

**`|` i programutskrift** er trygt: kodeblokker parkeres før tabellparseren, så
en utskriftslinje med `|` blir ikke tolket som markdown-tabell. Dette er
relevant i 3.4 og 7.7 (pen kolonneutskrift).

### §K2 Én kodeblokk = én ting

Kodeblokker skal være korte nok til å spores: **maks ~25 linjer** i eksempler og
fasiter, maks ~15 i sporingsoppgaver (sjanger B) og maks ~12 i quiz. Trenger
løsningen mer, deles den i to blokker med en setning imellom som sier hva neste
blokk gjør. Ingen kodeblokk gjentar en tidligere blokk uendret — vis bare den
delen som er ny, og si at resten er som før.

**Unntak, med krav:** de komplette kjede-applikasjonene i 7.1, 7.7 og Del 9 SKAL
vises som en helhet til slutt. Da deles de i én blokk per funksjon, med en
setning imellom, og bindes sammen av en siste kort `main`-blokk. Aldri ett
80-linjers gjerde.

### §K3 All kode SKAL være kjørbar og faktisk kjørt (ufravikelig)

Utskrift skrevet fra hukommelsen er den farligste feilen en kodefag-bok kan
gjøre: den lærer leseren feil svar på nettopp den sjangeren som er 100 % sikker
på eksamen. Derfor:

1. **Hvert ```python-eksempel og hver fasitkode skal være kjørt** før den limes
   inn. Arbeidsflyt:
   ```
   skriv snutten til <scratchpad>/tdt4110-<kapittel-id>-<n>.py
   python3 <scratchpad>/tdt4110-<kapittel-id>-<n>.py
   kopiér stdout ORDRETT inn i «**Utskrift:**»-blokken
   ```
2. **Byggemiljøet:** `python3` er **3.9.6**. Ikke installer noe — faget trenger
   ingenting utover standardbiblioteket.
3. **Utskriften limes inn ORDRETT** — samme mellomrom, samme antall desimaler,
   samme rekkefølge, samme tomme linjer. Ikke «pynt», ikke rund av, ikke oversett
   feilmeldinger. Flyttall skrives som Python skriver dem
   (`0.30000000000000004`, ikke `0,3`). Trenger du stabil utskrift, formatér i
   koden (`'{:.2f}'.format(x)` eller f-streng).
4. **Fillesing.** Skal koden lese en fil, opprett datafila i scratchpad, kjør
   koden mot den, og vis filinnholdet i en egen ```-blokk merket
   «**Innholdet i `salg.txt`:**» FØRST. Filnavn, felt og innhold er nyskrevne.
   Dette gjelder hele Del 4 og Del 7 — der er fillesing selve poenget.
5. **`input()`.** Interaktiv kode kan ikke kjøres rett fram. Kjør den med
   forhåndsmatet stdin (`printf '3\n-1\n7\n' | python3 fil.py`) og lim inn den
   faktiske utskriften. Vis dialogen i en «**Kjøring:**»-blokk der brukerens
   svar er merket, og forklar at linjene etter ledeteksten er det brukeren
   skrev. Uendelige menyløkker skal ha en `q`-avslutning i den kjørte
   varianten.
6. **`random`.** Kap. 9.3 bruker `random`. Sett `random.seed(...)` i den kjørte
   varianten så utskriften er reproduserbar, og si i teksten at seed-en bare er
   der for at boka skal kunne vise ett bestemt resultat — på eksamen skriver
   man ikke seed.
7. **Exceptions.** Skal et eksempel vise en feilmelding, kjør den og lim inn
   `Traceback`-linjene ordrett (eller bare siste linje, f.eks.
   `FileNotFoundError: [Errno 2] No such file or directory: 'salg.txt'`, og si
   at det er siste linje). Aldri en oppdiktet feilmelding. Gjelder hele
   kap. 4.3.
8. **`pickle`.** Kap. 4.2 skriver og leser binærfil. Kjør begge veier i
   scratchpad og vis at det som kommer ut er identisk med det som gikk inn.
   Binærfilas innhold vises ALDRI — den er ikke lesbar tekst, og det skal sies.
9. **Rapportér** i ferdigmeldingen hvor mange kodeblokker du kjørte.

**Porter:** `sjekk-utskrift.py <fil> [datadir]` kjører hver ```python-blokk og
sammenligner med «**Utskrift:**»-blokken. `sjekk-sporing.py tdt4110`
verifiserer sjanger B-fasiter der koden står i `task` og svaret i `solution`.
Begge skal kjøres på hvert kapittel du skriver.

### §K4 Utskrift merkes på ÉN måte

Rett etter kodeblokken, i samme streng:

```
**Utskrift:**
```
0 1 2
```
```

Altså: linjen `**Utskrift:**` (fet, med kolon), deretter en ```-blokk **uten**
språktagg med den rå utskriften. Ingen andre varianter («Output:», «Resultat:»,
«Dette skriver ut:», utskrift som kommentar inne i koden, utskrift i prosa).
Skriver programmet ingenting, står det `**Utskrift:** ingen (programmet skriver
ikke ut noe)` som ren tekst, eller kodeblokken merkes med kommentaren
`# ingen utskrift`.

To tilleggsformer, begge med samme strenghet:

- **«Innholdet i `<filnavn>`:»** + bar ```-blokk — datafila koden leser.
- **«Kjøring:»** + bar ```-blokk — dialog med `input()`, der det brukeren skrev
  er merket.

Unntak: **sporingsoppgaver** (sjanger B) i `task`/`problem`-feltet skal
selvsagt IKKE ha utskriften — den hører i `solution`. Kodeporten krever
«**Utskrift:**» bare i fasit- og teorifelt, og hopper over `collapsible`-er som
er oppgavebokser (tittel som starter med «Prøve», «Kald bank», «Oppgavesett»,
«Øvingseksamen»).

### §K5 API-presisjon: dette er bokas API, og ingenting annet

**Ingen kapittel introduserer en konstruksjon som ikke står i skjelettets
Kodekontrakt-felt for et kapittel.** Skjelettets kodekontrakter er til sammen
bokas pensumliste. Trenger du noe utenfor, er svaret å skrive om oppgaven.

**Faste signaturer og former (bokstandard — skriv dem slik overalt):**

| Konstruksjon | Bokas form | Presist |
|---|---|---|
| løkkegrenser | `range(start, stop, step)` | `stop` **eksklusiv**; `range(1, len(x), 2)` = annethvert fra indeks 1 |
| heltalls-/flyttallsdeling | `//` og `/` | `//` avrunder NEDOVER (også for negative); `/` gir alltid `float` |
| konvertering | `int(s)`, `float(s)`, `str(x)` | ALLTID etter `input()` og etter filinnlesing |
| les fil → 2D-tabell | `for linje in f: tabell.append(linje.strip().split(';'))` | `strip()` FØR `split()`; separator eksplisitt |
| les fil → ordbok | `d[felt[0]] = felt[1:]` etter samme parsing | nøkkelkolonnen velges eksplisitt |
| teller | `d[k] = d.get(k, 0) + 1` | `get` setter ikke inn nøkkelen |
| gruppering | `if k not in d: d[k] = []` deretter `d[k].append(v)` | opprett den indre lista FØR innsetting |
| finn beste | `beste = None; beste_verdi = None; for rad in tabell: if beste_verdi is None or v > beste_verdi:` | håndterer tom tabell uten spesialtilfelle |
| dynamisk kolonne | `k = tabell[0].index('pris')` | ALDRI hardkodet kolonnetall (fullscore-krav) |
| ingen duplikater | `if x not in resultat: resultat.append(x)` | alternativt `sorted(set(...))` |
| boblesortering | `for i in range(len(x)-1): for j in range(len(x)-1-i): if x[j] > x[j+1]: x[j], x[j+1] = x[j+1], x[j]` | bytt naboer; `.sort()` returnerer `None` |
| sortér tabell på kolonne | `sorted(tabell, key=lambda rad: rad[k])` | vis side om side med boblesortering |
| iterativt binærsøk | `imin = 0; imax = len(x)-1; while imin <= imax: imid = (imin+imax)//2` | forutsetter **sortert** liste; `<=` i betingelsen |
| sekvensielt søk | `for i in range(len(x)): if x[i] == mål: return i` deretter `return -1` | «ikke funnet» = `-1` |
| input-validering | `while True: svar = input(...); if gyldig: break; print(feilmelding)` | terminerer alltid; sentinel skrives ut |
| meny/`main` | `while True: valg = input(meny); if valg == '1': … elif valg == 'q': break` | `main` leser fila ÉN gang |
| rekursjon | grunntilfelle FØRST, deretter `return f(n-1)`-steget | `tverrsum(n) = n % 10 + tverrsum(n // 10)` |
| filskriving | `f.write(tekst + '\n')` | husk linjeskiftet — `write` legger det ikke til |
| binærlagring | `pickle.dump(obj, open(navn, 'wb'))` / `pickle.load(open(navn, 'rb'))` | `'wb'`/`'rb'`, ikke `'w'`/`'r'` |
| unntak | `try: … except FileNotFoundError: …` | spesifikk `except` foretrekkes; bar `except:` nevnes som tolerert |
| kolonneutskrift | `.rjust(n)` / `.ljust(n)` / `.center(n)` | og `', '.join(liste)` |
| formattering | `'{:5.2f}'.format(x)` **og** `f'{x:5.2f}'` side om side | f-strenger merkes `(verifiser mot gjeldende pensum — varslet inn 2019)` |
| nullpadding | `str(t).zfill(2)` eller `f'{t:02d}'` | tidsformat `hh:mm:ss` |
| tilfeldighet | `random.randint(a, b)` (**begge endepunkt med**), `random.choice(liste)` | kun kap. 9.3 |

**f-strenger — særregel.** Arkivet 2014–2019 bruker `.format()`/`.rjust()`;
K2019-løsningsforslaget varsler f-strenger inn. Boka viser **begge**, alltid
side om side, i kap. 3.4 og i all formatert utskrift senere. Hver gang
f-strenger introduseres som eneste form, skal `(verifiser mot gjeldende pensum
— varslet inn 2019)` stå ved. **`sjekk-bok.py` avviser gjenstående
`(verifiser)`-markeringer**, så den bokstavelige strengen `(verifiser)` skal
ikke brukes — bruk den fulle, forklarende parentesen over, og få den avklart av
byggeleder før sluttporten.

**Ingen `if __name__ == '__main__':`.** Sensor gir ingen uttelling for
main-program-vaktsetningen, og kodeporten avviser den. Kall `main()` direkte
der en applikasjon skal kjøres, eller la være å kalle den i det hele tatt.

**Navnekollisjon med innebygde funksjoner.** Boka bruker ALDRI et innebygd navn
som variabel, og har en `warning` om hvorfor (kap. 3.1): `list`, `sum`, `input`,
`str`, `int`, `float`, `dict`, `set`, `max`, `min`, `abs`, `round`, `len`,
`type`, `id`, `range`, `next`, `file`, `bytes`, `format`. `sum = 0` ødelegger
`sum(...)` resten av programmet. Bruk `s`, `total`, `verdier`, `tekst`,
`ordbok`, `tabell`.

### §K5b Symbol- og navnekollisjoner (obligatorisk varsling)

Hver kollisjon SKAL varsles med en `warning` første gang begge betydningene er i
omløp, og API-/begrepslisten skal si hvilken betydning som gjelder i nettopp det
delkapitlet.

| Navn | Betydning 1 | Betydning 2 | Varsles i |
|---|---|---|---|
| `i` | løkkevariabel/indeks | radindeks i en 2D-tabell | 1.3, 3.2 |
| `k` | kolonneindeks | nøkkel i en ordbok | 3.2, 3.5 |
| `rad` | ei liste (hele raden) | ett element i raden | 3.2, 7.2 |
| `d` | ordbok | avstand/differanse i et domene | 3.5, 7.4 |
| `n` | antall elementer | tallet det rekurseres på | 5.2, 6.3 |
| `f` | filobjektet (`for linje in f`) | f-streng-prefikset `f'…'` | 3.4, 4.1 |
| bit | binærsiffer (teori, Del 8) | `bool` (kode) | 8.2 |
| «tabell» | 2D-liste i koden | tabellutskrift på skjerm | 3.2, 7.7 |
| `l` / `I` / `O` | — | **forbudte variabelnavn** (leses som 1/0) | 1.1 |

### §K6 Kodesporing (sjanger B) — oppsett og fasit

Sjanger B har 100 % frekvens og bærer hele kodeforståelsesoppgaven. Fast
oppsett:

**Oppgaven (`task`):**

```
(Eksamensnivå, sjanger B — kodesporing.) Hva skriver programmet ut? Skriv
utskriften nøyaktig, med mellomrom og linjeskift slik terminalen viser den.

```python
tall = [4, 7, 2, 9]
for i in range(1, len(tall), 2):
    tall[i] = tall[i] ** 2
print(tall)
```
```

**Fasiten (`solution`) skal vise SPORINGEN, ikke bare svaret.** Tre deler, i
denne rekkefølgen:

1. **Sporingstavle** — markdown-tabell med én rad per iterasjon og én kolonne
   per variabel som endrer seg, pluss en kolonne «Utskrift så langt» (eller
   «Lista nå» ved mutasjon). Tabellen skal være så mekanisk at leseren kan gjøre
   det samme på papir.
2. **Den eksakte utskriften** i en «**Utskrift:**»-blokk (kjørt, §K3–K4).
3. **Én-linjes fellenote** som navngir feilen sporingen tester, med feilkode:
   «Fellen her er #5 — `range(1, len(tall), 2)` treffer indeks 1 og 3, ikke 0 og
   2.» Pluss, i drillkapitlene, en margnote om at delvis riktig sporing gir
   delvis uttelling.

Sporingsmetoden (skjelettets kap. 5.1) er bokas oppskrift og skal gjengis i 5.1
og henvises til senere: (1) før en tavle over variablenes verdier linje for
linje; (2) for løkker: iterasjon for iterasjon, tell nøyaktig antall
(`range`-stopp eksklusiv); (3) noter hva hvert `print` faktisk skriver, inkl.
`end`/`sep` og at lister skrives med hakeparenteser og «, »; (4) hold styr på om
du har et **element** eller en **struktur**; (5) for `return`: finn nøyaktig
verdi OG type; (6) skriv sluttresultatet tegn for tegn.

**Rekursjonssporing (sjanger J)** har en egen, obligatorisk form: bygg
kall-stakken **utover** (ett nivå per linje, med argumentet), og fold deretter
returverdiene **innover** (nederste kall først). Vis begge retninger — det er
den vanligste kilden til feil svar.

**Sjanger C («forklar med én setning»)** har fast fasitform: én setning som
starter med et verb og sier *hva* funksjonen oppnår («Returnerer den transponerte
av en 2D-tabell.»), etterfulgt av en kort kontrastboks med en typisk FOR LANG
besvarelse og hvorfor den trekker ned.

**Sjanger D («fyll inn manglende kodelinje»)** settes opp som kodeblokk med
`#KODE1` der linja mangler, deretter en nummerert alternativliste. Fasiten
prøver HVERT alternativ mot et lite konkret eksempel og viser hvorfor tre av dem
gir feil resultat — aldri bare «riktig er b)».

### §K7 Python-versjon og tillatte moduler

- **Språk:** Python 3. Boka skriver kode som er gyldig i Python 3.8 og nyere og
  som er **kjørt på 3.9.6** (byggemiljøet). Ingen konstruksjoner nyere enn det:
  ingen `match`/`case`, ingen walrus `:=`, ingen typehints, ingen `dataclass`,
  ingen dekoratorer. Årsaken er dobbel: sensor forventer det enkle idiomet, og
  koden skal kunne kjøres av forfatteren.
- **Tillatte moduler (uttømmende liste — alt annet er forbudt):**
  - `pickle` — `dump`/`load`, KUN i kap. 4.2, 7.7, 9.2 og prøve 4.C/7.D
  - `random` — `randint`, `choice`, `shuffle`, KUN i kap. 9.3 (og
    kort omtale i 3.6)
  - `math` — sjelden; importér bare det du bruker
  - `time`/`datetime` — bare der en dato-/tidsdifferanse gis som ferdig
    hjelpefunksjon i oppgaveteksten; ikke undervist som pensum
- **Forbudt:** `numpy`, `matplotlib`, `pandas`, `sympy`, `scipy`, `seaborn`,
  `os`, `sys`, `collections`, `itertools`, `functools`, `typing`, `re`,
  `json`, `csv`, `pathlib`. Filformater er ren tekst og `pickle`, ingenting
  annet.
- **NumPy/Matplotlib** nevnes KUN i «Bør kjenne til — nyere pensum»-boksen i
  kap. 8.7 og i pensumdrift-avsnittet i kap. 0.1, alltid med merkingen
  `(verifiser mot gjeldende pensum — ikke i arkivet 2014–2019)` og aldri med
  kjørbar kode.

### §K8 LaTeX, kode og unicode — hvem eier hva

1. **Ingen LaTeX inne i kode.** Aldri `$`, `\frac`, `\cdot` inne i en
   ```-blokk eller i `` `backticks` ``. Matematikken i en kodeblokk skrives som
   Python (`(imin + imax) // 2`), evt. som en kommentar i ord.
2. **Ingen kodeidentifikatorer i matte-modus.** `$range(N)$`, `$d.get$`,
   `$s[::-1]$` er FORBUDT. Alt som er Python — navn, metoder, uttrykk, filnavn,
   kommandolinjer — står i backticks.
3. **Motsatt: matematikk i prosa SKAL være LaTeX, ikke unicode.** Skriv
   `$2^n$`, `$O(\log n)$`, `$O(n^2)$`, `$2^{10}$`, `$\approx$`, `$\le$`,
   `$\times$`. FORBUDT i prosa: `2ⁿ`, `≈`, `≤`, `≥`, `√`, `π`, `Δ`, `²`, `·`,
   `→` (bruk `$\to$` eller ordet «gir»). Dobbel backslash i JSON (`\\log`,
   `\\times`). Dette treffer Del 8 hardt: `$O(\log n)$`, `$2^n$ symboler med
   $n$ bit», «$100 \times 50$ piksler».
4. **`**` og understrek i kode skal stå i kodemarkering** — `` `x ** 2` ``,
   `` `d.get` ``. Etter renderer-fiksen (§0) er dette en STILMERKNAD i
   kodeporten, ikke et avvik, men regelen står.
5. **`<` og `>` i prosa:** skriv `$x < 3$` eller `` `x < 3` ``, aldri bart —
   rå `<` går uendret inn i HTML.
6. **Én formel per konsept.** Bildestørrelsesformelen står i LaTeX én gang
   (`$\text{bytes} = \frac{\text{piksler} \times \text{bit per piksel}}{8}$`),
   og eksemplene bruker den. Ikke gjenta formelen i kommentarer.

### §K9 Del 8 — flervalgskontrakten

Teoridelen er en egen sjanger med egne krav:

1. **Nære distraktorer, alltid.** De reelle alternativene er tett formulerte,
   plausible påstander der **ett ord eller ett tall** skiller riktig fra galt.
   Fire eksempler som SKAL trenes: Nyquist «minst dobbelt» vs. «minst like høy»
   vs. «fire ganger»; IPv6 = 128 bit vs. 32/64/256; mottakers **offentlige**
   nøkkel krypterer vs. avsenders private; tapsløs (RLE) vs. med tap
   (JPEG/MP3/MPEG). Tullesvar er forbudt.
2. **Ett riktig alternativ, og det skal være «mest riktig»** — ikke bare
   teknisk forsvarlig. Er to alternativer forsvarlige, skriv om spørsmålet.
3. **Regnespørsmål regnes ut i fasiten**, steg for steg, med kalkulatoren i
   mente (kode D tillater den): `$2^6 = 64$`; `$100 \times 50 \times 24 / 8 =
   15\,000$` byte. Hvert tall i boka etterregnes (§K11).
4. **Ingen minuspoeng → kryss alltid av** står i 8.7 og i Del 0.
5. **Fasitfordeling:** riktig svar skal fordele seg over a–d i statiske
   flervalg. `sjekk-fasitfordeling.py tdt4110` feiler over 45 % på én bokstav.
6. **Ingen påstand uten belegg.** Del 8 er faktastoff, og faktafeil er dyre.
   Alt som ikke står i skjelettets Begrepskontrakt, og som du ikke er sikker
   på, skal enten utelates eller markeres for byggeleder. Ikke gjett på tall
   (antall steg i fetch-execute, bitbredder, prefiksverdier).

### §K10 Rekursjon er PENSUM — og kodeporten vet det ikke ennå

`scripts/hoyskolebok/sjekk-kode.py` punkt 2 avviser enhver funksjon som kaller
seg selv, med begrunnelsen «rekursjon er utenfor pensum». Det er sant for
IN1900 og IN1000, som porten ble skrevet for — men **falskt for TDT4110**, der
rekursjon er belagt i ~60 % av settene (kap. 5.2, 5.3, 9.2, 9.3, prøve 5.B).

Regler inntil porten er gated på emne:

1. **Skriv rekursjonen** som skjelettet krever. Ikke skriv om til løkke for å
   blidgjøre porten.
2. **Kjør porten likevel** (`python3 scripts/hoyskolebok/sjekk-kode.py
   tdt4110`) og triager utskriften: `REKURSJON i tdt4110-5-2…`,
   `tdt4110-5-3…`, `tdt4110-9-2…`, `tdt4110-9-3…`, `tdt4110-5-prove…` er
   **forventede** avvik. **Alle andre avvik er ekte og skal fikses.**
3. **Meld til byggeleder** at porten trenger en emne-gate (rekursjonssjekken
   skal være av for tdt4110) FØR sluttporten kjøres, og rapportér i
   ferdigmeldingen nøyaktig hvilke rekursjonstreff som er forventet.
4. Porten har også en `GAMMEL_API`-sjekk for ODESolver (in1900-spesifikk). Den
   kan aldri slå ut her, og skal ignoreres.

### §K11 Regnekontrakt — etterregn før du skriver

Regnefag-DNA-ens «matematisk sannhetskontroll», tilpasset:

- **Del 8-regnestoffet** (`$2^n$`, binær↔desimal↔hex, toer-komplement,
  bildestørrelse, samplingsfrekvens, lagringsprefikser) etterregnes numerisk
  før det skrives — bruk `python3 -c` i scratchpad. Ett feil tall i en
  flashcard er en feil studenten pugger.
- **Kodesporingssvar** etterregnes ved å kjøre koden (§K3), aldri i hodet.
- **Kompleksitetspåstander** (6.3) skal være riktige og presise: binærsøk er
  `$O(\log n)$` **på sortert liste**, sekvensielt søk `$O(n)$`,
  boblesortering `$O(n^2)$`. Ikke påstå noe om best/verste tilfelle uten å si
  hvilket.
- **Prosentpåstander om eksamen** hentes fra skjelettet, aldri fra
  hukommelsen.

---

## Sjangerkatalog A–J (fra skjelettets §3 — gjengis i kap. 0.1)

Tre familier: teori/flervalg (A), kodeforståelse (B–D) og kodeskriving (E–J).

| Kode | Sjanger | Familie | Form | Hyppighet/vekt |
|---|---|---|---|---|
| **A** | Teori/flervalg om datateknologi | Teori | MC (ett riktig) | 100 %; ~20 spm; **~25 %** av settet |
| **B** | «Hva skrives ut / returneres?» — kodesporing | Kodeforståelse | fritekst/MC | 100 %; 1–3 % per deloppgave |
| **C** | «Forklar med én setning hva funksjonen gjør» | Kodeforståelse | fritekst (kort) | 60 %; ~2 % — **distinktiv NTNU-sjanger** |
| **D** | «Fyll inn manglende kodelinje» (velg alternativ) | Kodeforståelse | MC | 50 %; 1–3 % |
| **E** | Filinnlesing → 2D-tabell/streng (ledd 1) | Kodeskriving | fritekst-kode | 100 %; 5–10 % |
| **F** | Parsing og datatransformasjon (ledd 2) | Kodeskriving | fritekst-kode | 100 %; 5–10 % |
| **G** | Analyse: finn maks/tell/gruppér/sortér/rangér | Kodeskriving | fritekst-kode | 100 %; 5–10 % per deloppgave — tyngdepunktet |
| **H** | Input-validering og meny/`main`-løkke | Kodeskriving | fritekst-kode | 80 % / 50 %; 5–10 % |
| **I** | Utskrift/lagring (formatert utskrift, fil, `pickle`) | Kodeskriving | fritekst-kode | 70 %; 5–10 % |
| **J** | Rekursjon / binærsøk (spore + implementere) | Begge | fritekst/MC | 60 % / 30 %; 1–5 % |

**E→F→G→H→I er leddene i den SAMME store programmeringskjeden** — de opptrer
nesten alltid som deloppgaver a–f i én sammenhengende oppgave. Del 7 driller
hvert ledd og deretter hele kjeden. A er teoridelen (Del 8). B/C/D er
kodeforståelsen (Del 5). J spores i Del 5 og implementeres i Del 6.

Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne**
(nivå 3) — forklares i klarspråk ved første bruk, og «perfekt» skrives som «må
sitte / høyeste prioritet» (se Leserkrav, karakter-realisme).

---

## Feilkatalogen #1–#17

**#1–#13 er identisk nummerert med `EKSAMENSANALYSE.md` §5**, fordi skjelettets
per-kapittel-felt henviser til «§5.4», «§5.9», «§5.11» osv. Endre ALDRI denne
nummereringen. Feilkodene glosses ved første bruk PER KAPITTEL, og samles i
studieguiden (Del 0) med henvisning til kapitlet som forebygger hver feil.

**Belagt i arkivet (§5.1–§5.13):**

| # | Feil | Forebygges i |
|---|---|---|
| #1 | Glemme `int()`/`float()`-konvertering etter `input()` eller filinnlesing — data blir strenger, og sammenligning/aritmetikk feiler | 1.1, 1.4, 4.1, 7.3 |
| #2 | Glemme `.strip()` ved filinnlesing — linjeskiftet henger med i siste felt | 4.1, 7.2 |
| #3 | Feil separator i `.split()` — dele på `,` når fila bruker `;` eller tabulator, eller ikke håndtere variabelt antall mellomrom | 3.3, 4.1, 7.2 |
| #4 | Anta fast kolonne-/radrekkefølge i stedet for `tabell[0].index(navn)` (fullscore-krav) | 3.2, 7.4, 7.6 |
| #5 | Av-med-én / feil løkkegrenser i `range` og indeksering (`range(1, len(x), 2)`, `range(len(x)-1)` ved par) | 1.3, 5.1, 6.1 |
| #6 | Ikke håndtere kant-/tomtilfeller — tom liste, «ikke funnet» (returnér `[]`/`None`/`-1`) | 7.4, 7.6 |
| #7 | Returnere eller telle duplikater der oppgaven krever unike verdier | 7.4, 7.6 |
| #8 | Ikke terminere input-løkka riktig — spørre én gang i stedet for i `while` til gyldig verdi; feil sentinel | 1.4, 2.2, 7.7 |
| #9 | Blande heltalls- og flyttallsdeling (`/` mot `//`) i tids- og indeksregning | 1.1, 3.4, 5.1 |
| #10 | Feil grunntilfelle eller steg i rekursjon — `f(n+1)` i stedet for `f(n-1)`, eller manglende base case → uendelig rekursjon | 5.2, 5.3 |
| #11 | Teori: forveksle tett formulerte alternativer (Nyquist «minst dobbelt» vs. «minst like»; IPv4 32 vs. IPv6 128; offentlig vs. privat nøkkel; unicast vs. multicast; tapsløs vs. tap) | 8.1–8.5, 8.7 |
| #12 | Teori-regnefeil — binær↔hex, `$2^n$`, bildestørrelse (glemme å dele på 8) | 8.2, 8.5, 8.7 |
| #13 | Ordrik/upresis «forklar»-setning — beskrive *hvordan* koden virker linje for linje i stedet for *hva* funksjonen oppnår | 5.3, 9.1–9.3 |

**Bokas egne tillegg — allmenne Python-feller. Ingen frekvenspåstand: disse
skal ALDRI presenteres som «går igjen på eksamen», bare som feller (#14–#17):**

| # | Feil |
|---|---|
| #14 | Skygge et innebygd navn (`sum = 0`, `list = [...]`) og ødelegge funksjonen resten av programmet |
| #15 | Aliasing: `b = a` gir to navn på SAMME liste; kopi krever `a[:]`, `list(a)` eller `a.copy()` |
| #16 | Innrykksfeil og blandet TAB/mellomrom — Python krever konsekvent innrykk (bokas kode har 4 mellomrom) |
| #17 | `.sort()` endrer lista og returnerer `None` — `x = x.sort()` gir `None`; bruk `sorted(x)` når du vil ha en ny liste |

---

## Forbudt-termer (grep-sjekkes — skal gi 0 treff)

Kjør ved ferdigmelding (`sjekk-bok.py` tar regexen som argument 2; den hopper
over `tdt4110-0-1`, som er avgrensnings-/metakapitlet):

```bash
python3 scripts/hoyskolebok/sjekk-bok.py tdt4110 \
  "__init__|def __|self\.|\bclass [A-ZÆØÅa-zæøå_]+[:(]|pandas|sympy|seaborn|import numpy|import matplotlib|__name__ ==|Prioritet: perfekt|en A-besvarelse ville|ville ha drøftet|Output:|Resultat av kjøringen|/bok/"
```

- **OOP:** `__init__`, `def __`, `self.`, `class Navn:` — TDT4110 er rent
  prosedyreorientert. Ingen fasit, intet eksempel, ingen quiz bruker klasser.
- **Biblioteker utenfor pensum:** `pandas`, `sympy`, `seaborn`, og `import`-er
  av `numpy`/`matplotlib` (omtale uten import er tillatt kun i 8.7/0.1, se
  prosaregelen under).
- **`__name__ ==`:** gir ingen uttelling og skal ikke forekomme. Eneste
  tillatte omtale er én setning i kap. 0.1 (metakapitlet, som porten hopper
  over).
- **Utskrift-varianter:** «Output:» og «Resultat av kjøringen» er forbudt —
  utskrift merkes bare som «**Utskrift:**» (§K4).
- **`/bok/`:** prefikset er fjernet fra plattformen. Alle interne lenker er
  `/tdt4110/tdt4110-X-Y`.
- **README-/panelkrav:** «Prioritet: perfekt», «en A-besvarelse ville»,
  «ville ha drøftet».

**Tre termer kan IKKE grep-sjekkes til 0**, fordi boka SKAL omtale dem — men
bare i en bestemt ramme. Bruk `sjekk-prosaregel.py` (ALDRI `grep -o` med
`.{0,N}`-kontekst — kapittelfilene er kompakt JSON på én linje, og et slikt
mønster tok 17 GB RAM på byggemaskinen):

```bash
# 1) OOP nevnes bare som utenfor pensum
python3 scripts/hoyskolebok/sjekk-prosaregel.py tdt4110 \
    "objektorient|\bOOP\b" "utenfor pensum|ikke pensum|testes ikke|andre emner"

# 2) NumPy/Matplotlib/KI bare som merket nyere pensum
python3 scripts/hoyskolebok/sjekk-prosaregel.py tdt4110 \
    "NumPy|numpy|Matplotlib|matplotlib" \
    "verifiser mot gjeldende pensum|ikke i arkivet|bør kjenne til"

# 3) minuspoeng bare som historikk om H2014
python3 scripts/hoyskolebok/sjekk-prosaregel.py tdt4110 \
    "minuspoeng|minus ?poeng" "fra 2015|H2014|historikk|ikke lenger|kryss alltid"
```

**Rekursjon skal IKKE grep-sjekkes** — den er pensum (§K10).

**Øvrige avgrensninger** (nevnes bare i kap. 0.1s avgrensningsavsnitt, som sier
at de er utenfor pensum): klasser og objektorientering, lenkede strukturer,
iteratorer, generatorer/`yield`, dekoratorer, tråder, kontekstmanagere man
skriver selv (`with open` brukes ikke — arkivet bruker `open`/`close`),
`map`/`filter`/`reduce`, regulære uttrykk, JSON/CSV-moduler, GUI, nettverkskode.

---

## Kryssbok-lenker (verifisert mot disk 28. juli 2026 — alle filene finnes i `src/lib/data/chapters/`)

Lenkeform `[tittel](/<courseId>/<id>)`. Titlene under er de faktiske
kapitteltitlene og skal brukes ordrett. Lenk ALDRI til en fil som ikke finnes
(`sjekk-bok.py` fanger døde lenker).

**Kodesiden (Del 0–7):**

| Brukes i | courseId | id | Tittel | Rolle |
|---|---|---|---|---|
| 0.1, 1.1 | `1p` | `1p-9-2` | Programmering med Python | Mykeste inngang for den som aldri har programmert |
| 0.1, 1.1 | `10` | `10-11-2` | Programmering med Python | Alternativ myk inngang (10. klasse) |
| 1.1 | `in1000` | `in1000-1-1` | Variabler, datatyper og uttrykk | Samme grunnstoff, annen innpakning |
| 1.3 | `in1000` | `in1000-1-3` | Løkker: for, while og range | Parallell gjennomgang av løkkene |
| 3.1 | `in1000` | `in1000-3-1` | Lister | Listeoperasjonene i et parallelt emne |
| 3.5 | `in1000` | `in1000-3-2` | Ordbøker | Ordbok som oppslag og teller |
| 3.3 | `in1000` | `in1000-3-3` | Strenger | Strengmetodene og slicing |
| 5.1 | `in1000` | `in1000-4-1` | DRILL — Kodesporing: «hva skrives ut?» | Ekstra sporingsdrill |
| 4.1 | `in1000` | `in1000-7-1` | Filinnlesing linje for linje | Fillesing i et parallelt emne |
| 3.4 | `in1900` | `in1900-1-4` | Strenger, f-strenger og formatert utskrift | f-strenger og formatering i dybden |
| 3.2 | `in1900` | `in1900-1-5` | Dictionaries og nøstede dictionaries | Nøstede strukturer |
| 6.1, 6.2 | `it` | `it-1-3-4` | Søke- og sorteringsalgoritmer | Sortering og søk på VGS-nivå |
| 5.2, 6.3 | `it` | `it-1-3-5` | Rekursjon og algoritmekompleksitet | Rekursjon og Big-O, mykere inngang |
| 6.3 | `10` | `10-11-1` | Algoritmer og pseudokode | Algoritmebegrepet og pseudokode |

**Teorisiden (Del 8) — IN1020 er den nærmeste slektningen:**

| Brukes i | courseId | id | Tittel | Rolle |
|---|---|---|---|---|
| 8.1 | `in1020` | `in1020-2-4` | Datamaskinens arkitektur — von Neumann, CPU, ALU, buss og pipeline | CPU, ALU, registre og pipelining i dybden |
| 8.1 | `in1020` | `in1020-2-5` | Minnehierarki og cache-beregning | Register/cache/RAM-hierarkiet |
| 8.2 | `in1020` | `in1020-1-1` | Tallsystemer og direkte konvertering | Binær↔desimal↔hex, med drill |
| 8.2 | `in1020` | `in1020-1-3` | To-er komplement og byte-tolkning | Negative heltall binært |
| 8.2, 8.5 | `in1020` | `in1020-1-7` | Tegn, filformater, farger og komprimering | ASCII/Unicode, RGB, komprimering |
| 8.3 | `in1020` | `in1020-4-1` | TCP/IP-modellen — lag og protokoller | Lagene og protokollbegrepet |
| 8.3 | `in1020` | `in1020-4-2` | IP-adressering og subnetting | IPv4/IPv6 og subnettmasker |
| 8.3 | `in1020` | `in1020-4-5` | Nettjenester — NAT, CDN, DNS, IPv6, DHCP og strømming | Tjenestene over IP |
| 8.4 | `in1020` | `in1020-3-1` | Sikkerhetsmål og sikkerhetstiltak | Sikkerhetsmålene som rammeverk |
| 8.4 | `in1020` | `in1020-3-3` | Symmetrisk og asymmetrisk kryptering | Nøkkelretningen, fellen i #11 |
| 8.4 | `in1020` | `in1020-3-7` | Personvern, GDPR og skadevare | Angrepstyper og skadevare |
| 8.3, 8.4 | `it` | `it-1-7-2` | Internett og kommunikasjonsprotokoller | Protokoller på VGS-nivå |
| 8.4 | `it` | `it-1-7-3` | Informasjonssikkerhet og trusler | Trusselbildet, mykere inngang |
| 8.6 | `it` | `it-1-8-3` | Prosjektplanlegging og smidig utvikling | Prosessmodeller og smidig |

**Lenk ALDRI til:**

- `in1000` Del 5–6 og `in1900` Del 5 (klasser, `__init__`, arv) eller `it-2-1-*`
  (objektorientert programmering) — de underviser nettopp det som er utenfor
  pensum her.
- `in1900` Del 4 og 7 (NumPy, matplotlib, ODE) — utenfor pensum.
- `in1020-5-1` «Flervalgssjangeren og negativ poenggiving» — IN1020 HAR negativ
  poenggiving, TDT4110 har det ikke. Lenken ville lært bort motsatt
  eksamensstrategi.

Interne lenker: `[kap. X.Y](/tdt4110/tdt4110-X-Y)`. Lenker til kapitler som
ennå ikke er skrevet, legges inn først når fila finnes på disk — koordineres av
byggeleder ved wiring.

---

## Prøvekapitler

Åtte prøvedeler: **[1, 2, 3, 4, 5, 6, 7, 8]** — fire prøver per temadel, altså
**32 prøver**, jf. skjelettets «Prøve-kvote Del N»-linjer i §6 (bruk temaene og
minuttanslagene som står der). **Del 0 er metadel (ingen prøve). Del 9 er
eksamenstrening (ingen prøve — tre komplette sett).**

Prøvekapittel: id `tdt4110-<del>-prove`, `chapterNumber` `<del>.P`, tittel
«Prøver til del `<del>`: `<deltittel>`»:

- `tip`: dekning + tidsbruk, deklarerer «4 prøver à ~X min» (minuttene fra
  skjelettets prøve-kvote-linjer) + «kan trygt deles over flere kvelder — én
  prøve per økt», og sier hvor flervalget bor (inline i prøven eller i den
  interaktive quizen).
- `text` **Forkunnskaper** (porten krever «Forkunnskaper» i alle kapitler
  utenom Del 0).
- Fire `collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med
  nyskrevne oppgaver i eksamens sjangre og full fasit: kort idiomatisk
  prosedyrekode, prosentvekting, og for sjanger B full sporing (§K6). Statiske
  flervalg har STOKKEDE fasit-bokstaver.
- Etter hver prøvefasit: avkryssbar selvdiagnose-sjekkliste (☐).
- Kap-referanser i fasitene som markdown-lenker `[kap. X.Y](/tdt4110/tdt4110-X-Y)`.
- Ingen begrepsbank og ingen quizkvote for prøvekapitler.

Prøvekapitler regnes som vurderingskapitler i `sjekk-bok.py` og er derfor
unntatt kravene om «Typiske feil»-warning og API-/symbolliste.

Prøvetidene summerer til **940 min** (Del 1 110 · Del 2 110 · Del 3 120 ·
Del 4 115 · Del 5 110 · Del 6 115 · Del 7 160 · Del 8 100) — bruk tallene i
tidsbudsjettet under.

---

## Quiz-kvoten

`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`:

```json
[{ "question": "…", "options": ["riktig", "distraktor", "distraktor", "distraktor"], "explanation": "…" }]
```

Nøyaktig **4 alternativer**, `options[0]` **ALLTID** riktig (runtime stokker
rekkefølgen). Ingen duplikate alternativer.

**Kalibrering (skjelettets dokumenterte avvik):** quizbanken er **direkte
eksamenstrening på de to flervalgssjangrene faget faktisk har**:

1. **Teori-flervalg (Del 8, 144 av 662)** — ren Oppgave 1-trening. Nære,
   tett formulerte distraktorer der ett ord eller ett tall skiller riktig fra
   galt (§K9). Hvert spørsmål skal kunne ha stått på et reelt sett.
2. **Kodesporing (Del 5 med 72, og gjennomgående)** — «hva skrives ut /
   returneres?», indeks- og sliceberegning, boolsk presedens,
   løkketerminering, ordbok-teller, matrise-sporing.
3. Resten er begreps-MC om konstruksjonenes presise oppførsel («Hva returnerer
   `.sort()`?», «Hva skjer med nøkkelen ved `d.get(k, 0)`?»).

Distraktorene er de faktiske fellene fra feilkatalogen — glemt konvertering,
glemt `.strip()`, av-én i `range`, slicing som gir liste, `//` på negative tall,
hardkodet kolonne — aldri tullesvar.

**Kodealternativer og LENGDE-TELL (begge veier).** Fasiten skal IKKE kunne
gjettes på form:

- Alle fire alternativer skal ha **jevn lengde og samme presisjonsgrad**.
  Måltall fra `quiz-lengdesjekk.mjs` og `sjekk-kode.py` punkt 7: `options[0]`
  er unikt lengst i **under 30 %** av spørsmålene — og unikt **kortest** i
  under 30 % også. En student som velger «det lengste» eller «det korteste»
  skal treffe ~25 %.
- Er alternativene **utskrifter**, skal alle fire ha samme antall linjer og
  omtrent samme antall tegn.
- Er alternativene **kodelinjer** (sjanger D), skal alle fire være syntaktisk
  plausible og omtrent like lange.
- Er alternativene **teoripåstander** (Del 8), skal alle fire ha samme
  setningsform og lengde. Den riktige skal ikke være den eneste med et presist
  tall.
- `explanation` (2–4 setninger) sier hvorfor fasiten er riktig OG hvilken felle
  hver nære distraktor tester. **Referér til alternativenes TEKST, aldri til
  plassering** («alternativ to») — de stokkes ved kjøretid
  (`sjekk-alternativref.py`).
- Skriv kode i spørsmål/alternativer i `` `backticks` `` (én linje) eller i en
  ```-blokk (flere linjer).

Kontroll før ferdigmelding: `python3 scripts/hoyskolebok/sjekk-kode.py tdt4110`
(punkt 7), `python3 scripts/hoyskolebok/sjekk-alternativref.py tdt4110`, og
etter wiring `npx tsx scripts/hoyskolebok/quiz-lengdesjekk.mjs tdt4110`.

### Kvotetabell (AUTORITATIV — fra skjelettets §5 summeringskontroll)

Verifisert 28. juli 2026: alle deltotaler og totalene summerer.

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1 | 14 | 14 | 0 (metadel) |
| 1 | 1.1–1.4 | 74 | 66 | 4 |
| 2 | 2.1–2.2 | 34 | 32 | 4 |
| 3 | 3.1–3.6 | 102 | 98 | 4 |
| 4 | 4.1–4.3 | 48 | 50 | 4 |
| 5 | 5.1–5.3 | 72 | 40 | 4 |
| 6 | 6.1–6.3 | 46 | 46 | 4 |
| 7 | 7.1–7.7 | 96 | 86 | 4 |
| 8 | 8.1–8.7 | 144 | 126 | 4 |
| 9 | 9.1–9.3 | 32 | 0 | 0 (3 øvingseksamener) |
| **Sum** | **39 kap.** | **662 ✓ (≥500)** | **558 ✓ (≥500)** | **32 + 3 ØE** |

Per kapittel (quiz · flashcards) — **minimum, aldri under; overskyting er lov**:

| Kap. | Q · F | Kap. | Q · F | Kap. | Q · F |
|---|---|---|---|---|---|
| 0.1 | 14 · 14 | 3.6 | 12 · 12 | 7.4 | 16 · 12 |
| 1.1 | 20 · 18 | 4.1 | 18 · 18 | 7.5 | 12 · 10 |
| 1.2 | 18 · 16 | 4.2 | 14 · 16 | 7.6 | 14 · 12 |
| 1.3 | 22 · 18 | 4.3 | 16 · 16 | 7.7 | 12 · 12 |
| 1.4 | 14 · 14 | 5.1 | 30 · 12 | 8.1 | 24 · 24 |
| 2.1 | 18 · 18 | 5.2 | 22 · 16 | 8.2 | 24 · 22 |
| 2.2 | 16 · 14 | 5.3 | 20 · 12 | 8.3 | 22 · 22 |
| 3.1 | 18 · 18 | 6.1 | 14 · 14 | 8.4 | 18 · 18 |
| 3.2 | 18 · 16 | 6.2 | 16 · 16 | 8.5 | 18 · 18 |
| 3.3 | 20 · 20 | 6.3 | 16 · 16 | 8.6 | 14 · 14 |
| 3.4 | 14 · 14 | 7.1 | 12 · 14 | 8.7 | 24 · 8 |
| 3.5 | 20 · 18 | 7.2 | 16 · 14 | 9.1 | 12 · 0 |
| | | 7.3 | 14 · 12 | 9.2 | 10 · 0 |
| | | | | 9.3 | 10 · 0 |

**Bindende total: quiz 662 · flashcards 558 — begge er GULV, ikke tak.**
Flashcards telles som toppnivå `definition`-blokker med `title`. Fordelingen
speiler eksamensformen: Del 8 bærer 144 av 662 quiz og 126 av 558 flashcards
fordi teori-flervalg ER en eksamenssjanger med ~25 % vekt; kap. 5.1 bærer 30
quiz fordi ren kodesporing er direkte trening på kodeforståelsesoppgaven; kap.
8.7 har bevisst lav flashcard-kvote (8) fordi begrepene allerede er dekket i
8.1–8.6. Del 9 har 0 flashcards.

---

## Tidsbudsjett (etterregnet 28. juli 2026 — brukes i Del 0)

| Del | Kapitler | Minutter |
|---|---|---|
| 0 | 0.1 | 35 |
| 1 | 1.1–1.4 | 175 |
| 2 | 2.1–2.2 | 90 |
| 3 | 3.1–3.6 | 265 |
| 4 | 4.1–4.3 | 145 |
| 5 | 5.1–5.3 | 220 |
| 6 | 6.1–6.3 | 140 |
| 7 | 7.1–7.7 | 465 |
| 8 | 8.1–8.7 | 375 |
| 9 | 9.1–9.3 | 720 |
| **Sum kapitler** | **39** | **2 630 min ≈ 44 t** |
| Prøvekapitler | 8 (32 prøver) | 940 min ≈ 16 t |
| **Sum hele boka** | **47 filer** | **3 570 min ≈ 60 t** |

Bruk 3 570 min i ukeplanen i Del 0, og si eksplisitt at de tre øvingseksamenene
alene er 720 min (12 t) — de skal fordeles på tre kvelder, aldri stables til
slutt. Anslagene er LESEtid; den som faktisk skriver koden bør regne ×1,5.

---

## Opphavsrett (ufravikelig)

- Alle oppgaver, kodeeksempler, datafiler, tall, felt- og variabelnavn og
  domeneinnpakninger er **NYSKREVNE**. Kodemønstrene er standard
  Python-idiomer (ikke vernet), men ingen oppgavetekst, ingen fasitkode og
  ingen datafil fra et reelt sett gjengis. Skjelettets mønstereksempler er selv
  omskrivninger og skal varieres videre, ikke kopieres ordrett.
- **Domenene i arkivet skal ikke gjenbrukes.** Reisetid, valg/stemmetelling,
  Yatzy, priskrig, auksjon, oppskrifter, fartsmåling, allidrett og storskjerm
  er de reelle innpakningene — boka nevner dem i Del 0 som eksempler på at
  domenet roterer, men bygger sine egne oppgaver i ANDRE domener (bussruter,
  bibliotekutlån, matvarepriser, treningslogg, resirkulering, strømpriser,
  turnering, værmålinger …).
- **«Useful Python functions and commands»-appendikset** som deles ut på
  eksamen gjengis ikke. Boka skriver sin egen API- og konstruksjonsliste, per
  delkapittel.
- Pensumlitteraturen (Tony Gaddis, «Starting Out with Python», og NTNUs eget
  materiell) refereres med forfatter/verk/begrep, aldri sitert i lengde.
- Ingen skjermbilder eller utdrag fra NTNUs sider eller eksamenssystem.
- Referanser forfatteren er usikker på merkes for byggeleder og løses i fase 3.
  NB: den bokstavelige strengen `(verifiser)` avvises av `sjekk-bok.py` — bruk
  den fulle formen `(verifiser mot gjeldende pensum — …)` der den er tiltenkt
  å bli stående, og en egen liste i ferdigmeldingen for alt annet.

---

## Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json; json.load(open('…'))"` på hver fil du har skrevet;
   ingen trailing commas, ingen uescapede `"`/`\`.
2. **Kodeporten triagert:** `python3 scripts/hoyskolebok/sjekk-kode.py tdt4110`
   — alle ```python-blokker kompilerer, ingen TAB som innrykk, ingen forbudte
   konstruksjoner, «**Utskrift:**» på alle fasit-/teoriblokker med `print(`,
   quiz med 4 unike alternativer og jevne lengder. **Rekursjonstreff i 5.2,
   5.3, 9.2, 9.3 og 5-prove er forventet** (§K10) og skal listes eksplisitt i
   ferdigmeldingen; alle andre avvik skal være fikset.
3. **All kode faktisk kjørt** (§K3) — rapportér antall blokker. Utskrift limt
   inn ordrett. `sjekk-utskrift.py` kjørt på hvert kapittel (med datadir der
   kapitlet leser fil), `sjekk-sporing.py tdt4110` grønn.
4. **LaTeX-porten grønn:** `python3 scripts/hoyskolebok/sjekk-latex.py tdt4110`
   — ingen kontrolltegn utenfor kodeblokker, ingen KaTeX-feil, ingen løs
   backslash, ingen gåseøyne eller bart `%` i matte, balanserte `$`.
5. **Kvotetelling** mot kvotetabellen over (autoritativ, total 662/558):
   toppnivå `definition`-blokker med `title` + antall quizspørsmål per fil.
6. **Forbudt-termer-grep = 0** (regexen over) + de tre prosaregel-kjøringene
   (OOP, NumPy/Matplotlib, minuspoeng) = 0 avvik.
7. **INGEN OOP:** tekstsøk over alle tdt4110-filer — ingen `class`,
   `__init__`, `self`, arv eller egne metoder i noen fasitkode. Alt er
   prosedyreorientert.
8. **Snarvei + eksplisitt side om side** i 3.1, 3.5, 6.1, 7.4 og 7.5: både
   løkkevarianten OG snarveien (`max`/`sum`/`sorted`/`set`), sidestilt med
   «begge gir full pott».
9. **Konsishet i sjanger C:** alle «forklar hva funksjonen gjør»-fasitsvar er
   ÉN presis setning; 5.3 og alle C-oppgaver har `warning` om at
   ordrike/upresise svar trekker ned, og viser kontrasten god (kort) vs. dårlig
   (lang).
10. **Robusthet:** 7.4, 7.5 og 7.6 har hver minst én robusthetsdeloppgave; 7.6
    dekker alle fire fullscore-kravene (dynamisk kolonne, tomtilfelle, ingen
    duplikater, vilkårlig rekkefølge) eksplisitt.
11. **Gjenbruk:** kjede-eksemplene i 7.1, 7.7 og Del 9 demonstrerer at senere
    funksjoner kaller de tidligere, og at `main` leser fila ÉN gang.
12. **f-strenger og pensumdrift merket:** f-strenger vises side om side med
    `.format()`/`.rjust()` og bærer merkingen; NumPy/Matplotlib/KI finnes kun
    som merket «bør kjenne til»-collapsible i 8.7 + pensumdrift-avsnittet i
    0.1.
13. **API-/Begrepsliste per delkapittel:** hvert kodekapittel har `collapsible`
    «API- og konstruksjonsliste» med det ordrette notis-avsnittet (så
    `sjekk-bok.py` finner «Symbol- og formelliste»); hvert Del 8-teorikapittel
    har `collapsible` «Begreps- og enhetsliste». Ingen arv fra tidligere
    kapitler.
14. **Læringsløkke:** `content[]` veksler teori → eksempel → oppgave i løkker
    med `exercise`-blokker INLINE. Unntak: prøve-/øvingseksamenkapitler.
15. **Forkunnskapsdekning:** hver `exercise` bruker bare konstruksjoner og
    begreper introdusert tidligere i kapitlet eller i en referert forkunnskap —
    gå gjennom oppgavene dine med skjelettets kapittelrekkefølge i hånden.
16. **Nybegynner-inngang:** alle sjangerkoder (A–J), feilkoder (#1–#17),
    karakterbokstaver, eksamens-metaspråk (særlig «hjelpemiddelkode D») og
    API-/programmerings-/IT-termer forklart ved første bruk (feilkoder: per
    kapittel); ingen kald kode i `competenceGoals` eller første tekstboks;
    kap. 0.1 har «Slik leser du denne boka»-boksen (type `text`/`tip`, ALDRI
    `definition`) + kodemønster-minimum + teori-minimum.
17. **Sporingsfasiter** (sjanger B) har sporingstavle + eksakt utskrift +
    fellenote — aldri bare svaret. Rekursjonssporing viser både kall-stakken
    utover og foldingen innover.
18. **Del 8-flervalg:** nære distraktorer, ett riktig «mest riktig»-alternativ,
    regnespørsmål utregnet steg for steg, «kryss alltid av» sagt i 8.7.
    `sjekk-fasitfordeling.py tdt4110` grønn (ingen bokstav over 45 %).
19. **Prøve-flervalg:** fasitmønster stokket (aldri «alle a»); selvdiagnose-
    sjekkliste etter hver prøvefasit; ingen tom `collapsible` (feltnavn
    `content`, med blokker); «4 prøver à ~X min» + deling over flere kvelder
    deklarert.
20. **hints** utfylt på alle `exercise` (unntatt den merkede kalde banken i
    9.1); første hint røper aldri utskriften eller den ferdige koden.
21. **Frekvenstall** = skjelettets tall for NETTOPP dette kapitlet (arkivet er
    10 sittinger); kildenoten nevner kun kildetypene i EKSAMENSANALYSE §8, og
    «offisielle løsningsforslag» — ikke «sensorveiledninger» som egen
    dokumenttype.
22. **Deloppgaveformat:** a), b), c) på egen linje med `**a)**`; ingen
    `subTasks`; sjanger-/nivåparentes som ledende tag, ikke i brødteksten.
23. **Øktmerking:** kapitler > 45 min har løkke-tidsanslag eller pausepunkter.
24. **Lenkeform:** alle interne kap-referanser er markdown-lenker
    `[kap. X.Y](/tdt4110/tdt4110-X-Y)`; ingen `/bok/`-prefiks; kryssbok-lenker
    kun til filene i tabellen; ingen lenke til OOP-, NumPy- eller
    `in1020-5-1`-kapitlene.
25. **Regnekontroll (§K11):** alle Del 8-tall etterregnet numerisk; alle
    kompleksitetspåstander presise; ingen prosentpåstand som ikke står i
    skjelettet.
26. **Juridisk:** innholdet fremstiller seg ALDRI som offisielt eller
    NTNU-tilknyttet og lover aldri eksamensutfall.
27. Rapportér kort: filer skrevet, kvotestatus per kapittel, portstatus (kode +
    utskrift + sporing + LaTeX + fasitfordeling + alternativref + json), antall
    kodeblokker kjørt, forventede rekursjonstreff, og alt du har måttet merke
    for verifisering.
