# Byggekontrakt: IN1000 Introduksjon til objektorientert programmering (UiO) — teknisk kontrakt for kapittelforfattere

Gjelder ALLE forfatter-agenter som bygger kapitler til `in1000`. Faglig innhold
styres av `SKJELETT.md` (identitetsseksjon §1 + per-kapittel-DNA i §4) — les ditt
kapittels avsnitt der nøye, og `EKSAMENSANALYSE.md` ved behov. Denne kontrakten
definerer format og krav, og er bindende der den er mer presis enn skjelettet.
Arketype: **DNA-regnefag** (`DNA-regnefag.md`), undertype **kodefag**: leseren
skal kunne (i) spore Python-kode mekanisk og angi utskriften tegn for tegn, og
(ii) produsere kort, eksplisitt kode i sensors grunnkonstruksjon-stil — med
**flere samarbeidende klasser modellert fra en spesifikasjon** som tyngdepunkt.

**Dette er plattformens ANDRE kodefag-bok.** Presedensen er
`docs/hoyskole-boker/in1900/BYGGEKONTRAKT.md` (bygget og verifisert 25. juli
2026). Alt som gjelder kodeformat, kjørt utskrift, kodeporten og
LaTeX-/kodemarkering er arvet derfra og skal ikke finnes opp på nytt. Det som er
NYTT her, er markert **[IN1000]** og springer ut av at faget er
objektorientering uten numerikk: ingen NumPy, ingen plotting, ingen arv — men
`self`, referansesemantikk, innkapsling og stor klassemodellering.

Avvik fra kontrakten skal ikke gjøres av en kapittelforfatter alene — meld avvik
til byggeleder.

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
Konkret betyr det at `__init__`, `__str__`, `x**2`, `self._navn` og hele
kodeeksempler rendres som skrevet — ingen kursiv av dobbelt understrek, ingen
fet av `**`, ingen kollapset innrykk, ingen løse backticks.

**[IN1000] Kritisk gjerde-detalj (lærdom fra IN1900-verifiseringen).** Det
avsluttende ```-gjerdet MÅ stå på EGEN linje. I IN1900 ble 32 gjerder klistret
inntil prosaen etter (` ``` Denne funksjonen …`), og teksten forsvant inn i
kodeblokken. Skriv alltid `\n```\n\n` mellom kodeblokk og neste avsnitt.

**Verifikasjon i sluttporten (prod-curl, jf. BYGGEPLAN-MAL steg 4):** hent en
kapittelrute med kode og sjekk at HTML-en inneholder `<pre` og IKKE inneholder
`<em>init</em>`.

### Til forfatteren

Skriv kode i målformatet (gjerder + backticks, se Kodekontrakten). Du skal
**ikke** finne omveier: ingen HTML i JSON, ingen unicode-look-alikes
(`ˍˍinit`), ingen ekstra mellomrom inne i `__init__`, og ingen omskriving for
å unngå `$` eller `*` i kode.

**PDF-generatoren** (`scripts/make-<emne>-pdf`) må speile den samme
kodeparkeringen når in1000-PDF lages. Ikke blokkerende for web.

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
- **Ingen usett forkunnskap:** ingen oppgave får bruke en Python-konstruksjon
  eller et idiom som ikke er introdusert tidligere i kapitlet (t.o.m.
  eksempelet rett foran) eller i et kapittel referert i Forkunnskaper-blokken.
  Dette ga FLEST funn i IN1900-verifiseringen — gå gjennom hver oppgave med
  kapittelrekkefølgen i hånden før du melder ferdig. En ordbok i en oppgave i
  kap. 1.3 er brudd, fordi ordbøker først kommer i kap. 3.2.
- **Unntak:** prøvekapitlene (`in1000-<del>-prove`) og øvingseksamenene
  (kap. 9.1–9.3) følger sin egen arketype — komplett oppgavesett først,
  løsninger i collapsibles.
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer kun
  REKKEFØLGEN.

---

## Filplassering

Ett JSON-dokument per kapittel: `src/lib/data/chapters/<kapittel-id>.json`
(f.eks. `in1000-5-1.json`). IKKE rør `_registry.json`, `_all.json`,
`textbook-courses*.ts` eller `quiz-data*.ts` — wiring gjøres sentralt med
`scripts/hoyskolebok/wire-bok.py`. Generer JSON via python `json.dump`
(garantert gyldig escaping). Quiz til
`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`.

Boka består av **37 filer**: 29 kapitler (1 eksamenskart + 25 tema/drill + 3
eksamenstrening) + 8 prøvekapitler (`in1000-1-prove` … `in1000-8-prove`).

---

## Kapittel-JSON (toppnivå)

```json
{
  "id": "in1000-5-1",
  "courseId": "in1000",
  "chapterNumber": "5.1",
  "title": "…(fra skjelettet, ordrett)…",
  "description": "…(setningen fra skjelettet)…",
  "estimatedMinutes": 50,
  "competenceGoals": ["kunne sette alle instansvariabler i konstruktøren slik at de overlever kallet", "…"],
  "content": [ …blokker… ],
  "exercises": []
}
```

`chapterNumber` = skjelettets `number` (`<del>.<nr>`; prøvekapitler `<del>.P`).
`competenceGoals`: 2–4 «kunne …»-formuleringer avledet av kapitlets
Kodekontrakt — **ingen kald sjangerkode (A–I), feilkode (#N) eller
karakterbokstav her**, og ingen dunder-navn uten backticks (se §K8).
`exercises` er alltid tom liste (oppgaver ligger som `exercise`-blokker inline i
`content`).

---

## Blokktyper (eksakte felt — strukturreferanse: `src/lib/data/chapters/in1900-1-2.json`)

- `text`: `{ "id", "type": "text", "content": "markdown + kodeblokker" }`
- `definition`: `{ "id", "type": "definition", "title": "Konstruksjonen", "content": "forklaring" }`
  — **title er OBLIGATORISK** (flashcards genereres KUN fra toppnivå
  `definition`-blokker med title). I dette faget er `definition`-blokkene
  **API-/konstruksjons- og begrepsdefinisjoner**: `title` er konstruksjonen
  eller begrepet (f.eks. «`range(start, stop, step)`», «Instansvariabel»),
  `content` er presis oppførsel i ord + ett minimalt eksempel med kjørt
  utskrift. Åpne med oppførselen i ORD, ikke med kode.
- `theorem`: `{ "id", "type": "theorem", "title": "Navn på kodemønsteret", "content": "…" }`
  — brukes for de **kanoniske kodemønstrene/idiomene** (skjelettets dokumenterte
  avvik): teller/akkumulator, flagg + tidlig retur, ordbok som forekomst-teller,
  grupperings-idiomet, finn-beste-løkka, konstruktør-med-`self._x`-malen,
  aksessor/mutator-malen, delegerings-malen, filinnlesing-løkka, input-løkka og
  klassemodellering-malen. Disse er bokas «teoremer» og skal stå som `theorem`,
  ikke som `text`. **`theorem` gir IKKE flashcards** — trenger idiomet et kort,
  lag en egen `definition` i tillegg.
- `example`: `{ "id", "type": "example", "title": "Eksempel N: …", "problem": "…", "solution": "…" }`
  — `solution` = kort, eksplisitt kode + «**Utskrift:**»-blokk med den KJØRTE
  utskriften (§K3–K4).
- `tip` / `warning`: `{ "id", "type", "title", "content" }`
- `exercise`: `{ "id", "type": "exercise", "exercise": { "id", "number", "type": "classic", "difficulty": "lett"|"middels"|"vanskelig", "task", "solution", "hints": [] } }`
  — ALDRI `solutionVideo` / `allowsUpload` / `allowsCanvasDrawing` / `answer`.
  Ikke bruk `subTasks`-feltet (deloppgaver skrives inline, se Leserkrav).
- `image`: `{ "id", "type": "image", "src": "/images/textbook/in1000/<navn>.svg", "alt": "…", "caption": "…" }`
  — se `FIGUR-BESTILLINGER.md`. Figurbehovet i et kodefag er lavt; kode er
  ikke figur. **`alt` rendres RÅTT — ingen LaTeX, ingen `$`, ingen backslash
  der.**
- `collapsible`: `{ "id", "type": "collapsible", "title", "buttonText": "Vis …", "content": [blokker] }`
  — API- og konstruksjonsliste, prøver, repetisjon, modellbesvarelser. ALDRI
  tom: feltnavnet er `content` og skal ha blokker (en `text`-nøkkel eller tom
  array rendrer som tom boks).

Blokk-id-er: `<kapittel-id>-<løpenavn>`, f.eks. `in1000-5-1-def-2`,
`in1000-5-1-oppg-5`. Unike innen kapitlet (porten sjekker).

---

## Obligatorisk kapittelstruktur

### Teorikapitler

Alltid, i denne rekkefølgen først i kapitlet:

1. `tip` **Eksamensvinkel** — frekvens, vekt og sjangre, med tallene fra
   skjelettets Eksamensbelegg-felt for NETTOPP dette kapitlet (og ingen andre
   tall). Skriv sjangerkoden ut i klarspråk ved første bruk: «sjanger A —
   kodeforståelse, altså «hva skriver dette programmet ut?»».
2. `text` **Forkunnskaper** — overskriften skal ORDRETT være
   `## Forkunnskaper — sist du var her`, og blokken lenker til kapitler i boka
   (markdown-lenker `[kap. X.Y](/bok/in1000/in1000-X-Y)`) + kryssbok-lenker der
   forkunnskapen ikke dekkes i boka (tabellen under, KUN filer som finnes).
   Har kapitlet ingen forkunnskaper, skriver blokken det eksplisitt («Kan leses
   uten forkunnskaper …») under samme overskrift. I tunge, sene kapitler
   (Del 5, 6, 7, 8, 9) skal blokken VISE de 2–3 nøkkelkonstruksjonene ferdig
   oppfrisket (kodesnutt med kjørt utskrift), ikke bare lenke.

Deretter DNA-løpet i læringsløkker: `text` konkret anker/motivasjon →
`definition`/`theorem` konstruksjonen (flashcard-kilden — toppnivå med title!) →
`example` med kjørt kode og faktisk utskrift → `exercise` inline som trener
nøyaktig den konstruksjonen → neste bit. 2–4 eksempler per delkapittel, siste på
eksamensnivå; 6–12 `exercise` i kapitlet, stigende (lett → middels →
vanskelig), de vanskeligste = eksamenskloner av kapitlets sjangre.
`warning` **Typiske feil** (fra feilkatalogen #1–#16) plasseres der den er mest
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
> Da er både README-notisen og porten oppfylt uten å endre skript. Blokken står
> i ALLE teori- og drillkapitler, også om kapitlet ikke bruker LaTeX.

Listen er en markdown-tabell `| Konstruksjon | Presis oppførsel |` med ALLE
konstruksjoner brukt i delkapitlet — per delkapittel, ikke arv fra tidligere
kapitler. Presis oppførsel betyr det som avgjør en kodesporing: `range(a, b)` —
«`b` er EKSKLUSIV, gir `b - a` verdier»; `print(a, b)` — «skiller argumentene
med ETT mellomrom»; `d[k] = v` — «oppretter nøkkelen hvis den mangler,
overskriver ellers».

Og alltid til slutt: begrepsbank-`definition`-blokker opp til flashcard-kvoten.
Hver stor begrepsbank åpner med standard-notisen «Begrepsbanken er flashcard-/
repetisjonsstoff — den gjentar det du nettopp har lest. Hopp trygt over ved
førstegangslesing; tidsanslaget for kapitlet gjelder kjernestoffet.» Deretter
`collapsible` repetisjon.

### Drillkapitler (3.4, 4.1, 5.5, 6.5, 7.2, 8.2)

`tip` Eksamensvinkel → `text` Forkunnskaper → `text`/`theorem`
**Løsningsoppskrift** (algoritmen fra skjelettets Kodekontrakt-felt, steg for
steg og nummerert) → `example` gjennomarbeidet eksamenscase med
sensor-margnotater (hva som gir uttelling ved HVERT steg, og at riktig
overordnet struktur belønnes selv med indeksfeil) → 8–16 `exercise` som roterer
sjangrene, alle på eksamensnivå med nyskrevne domener, alle med full løsning
(for sjanger A: full sporing, se §K6). Signal-/hintbokser som varsler hva en
drilloppgave tester, står ETTER oppgaven.

### Øvingseksamener (9.1–9.3)

Komplette sett etter skjelettets miks, `estimatedMinutes` 240. Struktur: `tip`
med format, poeng og tidsbudsjett → nyskrevet oppgavesett i eksamensform (fem
oppgaver, 100 poeng, med Oppgave 4 som ~50 %) → `collapsible` modellbesvarelse
per oppgave (kort eksplisitt kode + `tip` om vekting, delpoeng og hva som gir
uttelling ved delvis riktig kode). Lange modellbesvarelser har «— naturlig
pausepunkt —»-markører.

**[IN1000] Ingen midtveis-simulering.** IN1000 har ingen midtveiseksamen, og
ingen «oppgave som ikke skal besvares». Alle fem oppgavene i et sett besvares,
og de 100 poengene er hele karakteren. Skriv aldri noe annet.

**Kald bank:** boka skal ha ÉN merket kald bank (8–10 oppgaver med uvante
domener/kombinasjoner, UTEN hint, fasit = momentliste) — den legges i kap. 9.1
som en egen `collapsible` «Kald bank — uten hint».

---

## Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»; SKAL i førsteutkastet)

- **Kun eksamensrelevant stoff**; «bør kjenne til» sist og merket (gjelder
  særlig arv/`super()` i kap. 5.1, grensesnitt-teori i kap. 5.2, sjanger I i
  kap. 4.2).
- **Korte avsnitt** (2–4 setninger), aktiv «du»-form, konkret anker før
  formalismen. Godt, flytende norsk; ALDRI telegramstil («Løkke: teller. Feil:
  av-én.» er FORBUDT).
- **Meningsfulle oppgaver:** hver oppgave er synlig eksamensforankret. Sjanger-
  og nivåmetadata skrives som en LEDENDE parentes i `task` som
  `extractGenreTag` kan trekke ut til en chip, f.eks.
  `(Eksamensnivå, sjanger D — funksjon over ordbok.)`, ALDRI midt i
  brødteksten. Ikke gjenta `difficulty` i teksten («(krevende)» skrives ikke i
  `task` — feltet vises i oppgavehodet).
- **Læringsløkke Teori → Eksempel → Oppgave** med `exercise`-blokker INLINE.
- **Ingen usett forkunnskap** (se løkke-kontrakten øverst — skjerpet for kode).
- **Deloppgaver på egen linje, fet merking:** a), b), c) i `task`/`solution`
  HVER på egen linje — `…\n\n**a)** …\n**b)** …`. ALDRI bak hverandre i løpende
  tekst; ikke bruk `subTasks`. Listemerking med små bokstaver.
- **Nybegynner-inngang / ingen uforklart sjargong (UFRAVIKELIG).** Boka skal
  forstås av en som aldri har programmert:
  - **Sjangerkodene A–I** skrives ut i klarspråk ved FØRSTE bruk i HVERT
    kapittel: «sjanger F — stor klassemodellering, altså å bygge flere
    samarbeidende klasser fra en spesifikasjon».
  - **Feilkodene #1–#16** glosses ved FØRSTE bruk PER KAPITTEL:
    «(#1 — `self`-fella, at en instansvariabel må settes med `self._x`)».
  - **Eksamens-metaspråk** forklares før bruk: «Inspera» (UiOs digitale
    eksamenssystem), «flervalg», «kortsvar», «fritekst», «auto-rettet»,
    «hjelpemiddelfri», «delkarakter», «obligatorisk innlevering».
  - **API-navn og programmeringssjargong** forklares ved første bruk, ALDRI
    kaldt: «instans (ett konkret objekt laget fra klassen)», «attributt»,
    «instansvariabel», «konstruktør», «spesialmetode (en metode med to
    understreker på hver side av navnet, som Python kaller automatisk)»,
    «aksessor», «mutator», «innkapsling», «grensesnitt», «referanse»,
    «rebinding», «scope», «å iterere», «streng-literal», «sentinel-verdi».
    Regelen fra README gjelder programmeringstermer på samme måte som
    fagbegreper: **ingen API-navn eller insider-term brukt før det er
    forklart.**
  - Ingen kald kode i `competenceGoals` eller i aller første tekstboks.
  - Kap. 0.1 har en **«Slik leser du denne boka»-orienteringsboks** (type
    `text` eller `tip`, ALDRI `definition` — det ville endret flashcard-kvoten)
    med: karakterskalaen A–F og den ENE eksamenen, kompakt liste over
    sjangerkodene A–I, kompakt liste over feilkodene #1–#16 med at de har et
    samlet register, og setningen om at hver Python-konstruksjon forklares der
    den brukes.
- **Del 0-pakken (kap. 0.1):** «Lite tid?»-boks (`tip`) med hurtigrute 3–5
  dager + ukeplan summert fra `estimatedMinutes` (**kapitlene 2 160 min +
  prøvene 945 min = 3 105 min ≈ 52 timer** — etterregnet over alle 37 filer
  25. juli 2026; per-del-tallene står i «Tidsbudsjett» under) + presiseringen
  at anslagene er LESEtid og at den som skriver koden selv bør regne ca. ×1,5 ·
  **kildenote** (§ «Sannferdig kildenote») · **sjangerkortet A–I på ÉN side**
  (kortet SELV: sjanger → én linjes oppskrift → typisk vekt → vanligste feil,
  ikke en lenkeliste) · **deltidsrute** 10–12 uker (~5 t/uke) med de tre
  øvingseksamenene fordelt på tre kvelder, aldri stablet til slutt ·
  **«lese mye, skrive lite»-boks** — og for et kodefag den motsatte advarselen i
  tillegg: **du må skrive kode for hånd/i editor uten å kjøre den**, fordi
  eksamen er hjelpemiddelfri; minst én øvingseksamen skal skrives uten å kjøre
  koden · **kodemønster-minimum** (`collapsible` «Mønstrene du må kunne skrive
  fra bunnen»): teller/akkumulator, flagg + tidlig retur, ordbok som teller,
  gruppering, finn beste, konstruktør med `self._x`, aksessor/mutator,
  delegering, filinnlesing-løkka, input-løkka, `__str__` — hver med én ordlinje.
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. X.Y](/bok/in1000/in1000-X-Y)`; død «se kapittel»-tekst
  er FORBUDT (aldri lenker i `title`-felt).
- **Karakter-realisme:** «C er en god og vanlig karakter» eksplisitt i Del 0;
  grep «Prioritet: perfekt» skal gi 0 treff. NB: «PERFEKT» i skjelettets
  deltitler er en *prioritetsklasse* (perfekt/kunne/kjenne = nivå 1/2/3), IKKE
  et krav om plettfri kode — skriv «må sitte / høyeste prioritet». Faget har
  eksplisitt sensorstøtte: riktig idé og struktur gir god uttelling selv med
  små indeks- eller kantfeil, og delkarakter gis per deloppgave.
  Modellbesvarelser merkes ÆRLIG (en «C-besvarelse» ER en C) + minst én
  autentisk B-/midtnivå-besvarelse: kode som virker og har riktig struktur, men
  med én indeksfeil, en glemt aksessor eller en litt klønete løkke — med
  margnotat om hva som er BRA NOK.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter hver prøvefasit — i et
  kodefag konkret: «☐ satte du ALLE instansvariabler med `self._x`? ☐ initierte
  du telleren før `+= 1`? ☐ returnerte du etter løkka, ikke inne i den?».
- **Lett innstegsoppgave** (difficulty lett, ren gjengivelse/minimal sporing,
  vennlig fasit) tidlig i teorikapitler der første oppgave ellers er full
  eksamenssjanger.
- **Hverdagsanker + verdens-caser:** abstrakte kjernetemaer åpner med et
  konkret anker før apparatet. Innpakningene skal være virkelige, gjenkjennelige
  domener (bibliotek, treningssenter, kollektivtrafikk, kantine, resirkulering,
  værstasjon, sykkelutleie), aldri «en medstudent skriver …»-metaeksempler.
- **Øktmerking:** kapitler med `estimatedMinutes` > 45 (1.3, 3.2, 3.4, 4.1,
  5.1, 5.2, 5.4, 5.5, 6.1, 6.2, 6.3, 6.5, 7.1, 7.2, 8.1, 8.2, 9.1–9.3) har
  tidsanslag per løkke («Løkke 2 — … (~15 min)») eller «— naturlig pausepunkt
  —»-markører.
- **Hint + difficulty-spredning:** alle `exercise` har utfylte `hints` (første
  hint = konstruksjonen/første grep, f.eks. «Start med `antall = 0` og en løkke
  over lista» — ALDRI utskriften eller den ferdige koden). Unntak: den merkede
  kalde banken i 9.1. Boka har flere «krevende»-oppgaver (difficulty
  `vanskelig`).
- **Fasitmønster-variasjon:** ALLE ensartede fasitlister varierer. Statiske
  flervalg i prøve-collapsibles har STOKKEDE fasit-bokstaver (aldri «alle a»);
  quizfilene beholder `options[0]`-invarianten fordi runtime stokker. I
  «hva skrives ut»-tabeller skal svarene blande verdier og feilmeldinger; i
  riktig/galt-tabeller skal minst én rad være «riktig».
- **Distraktorer straffer aldri grundig lesing:** en distraktor gjengir ALDRI
  bokas egne presiseringer som «galt» svar. Nære distraktorer forklares i
  `explanation`.
- **Meta-fasit forbudt:** «en A-besvarelse ville her ha skrevet …» erstattes av
  koden faktisk skrevet ut. Grep «en A-besvarelse ville» / «ville ha drøftet» =
  0.
- **Frekvenstall = telte belegg med eksplisitt nevner:** grunnlaget er **6
  moderne sett (H2014, H2018, H2020, H2022, H2023, H2024)**, jf.
  EKSAMENSANALYSE §2. Skriv «6 av 6 moderne sett (100 %)», «5 av 6 (83 %)»,
  «4 av 6 (67 %)», «3 av 6 (50 %)», «2 av 6 (33 %)» — aldri en naken prosent
  uten nevner første gang i kapitlet, og aldri en prosent som ikke står i
  skjelettets Eksamensbelegg-felt for NETTOPP dette kapitlet.
- **Juridisk:** innholdet fremstiller seg ALDRI som offisielt eller
  UiO-tilknyttet, og lover aldri eksamensutfall.

### Sannferdig kildenote (UFRAVIKELIG — produkteier)

Kildenoten i Del 0 og all omtale av grunnlaget nevner KUN kildetyper som
faktisk finnes i fagets arkiv, jf. `EKSAMENSANALYSE.md` §8. Bruk denne
formuleringen (eller en trofast omskrivning):

> Frekvenstallene i denne boka er telt i UiO-arkivet for IN1000/INF1000/INF1001
> 2014–2024: 8 avsluttende oppgavesett, 3 fulle løsningsforslag og 4
> prøveeksamener med fasit — 27 dokumenter i alt. Settene fra 2018 og framover,
> og løsningsforslagene, er gjennomgått grundig; de eldste settene (2014–2017)
> er skummet for form og temaregistrering. Prosentene er telt i de **6 moderne
> settene** H2014, H2018, H2020, H2022, H2023 og H2024. Emnet het INF1000/
> INF1001 til rundt 2016, og H2020 var korona-hjemmeeksamen med et oppblåst
> sett — begge forhold er hensyntatt. Et nytt sett kan endre bildet.

Presist språkbruk, fire ting:

1. Faget har **offisielle løsningsforslag**, som i praksis fungerer som
   sensorveiledning. Skriv «offisielle løsningsforslag». **Påstå ALDRI at det
   finnes «sensorveiledninger»** — det gjør det ikke i dette arkivet. Ordet står
   i forbudt-term-regexen.
2. **Modellbesvarelser i boka er NYSKREVNE** av Skolesaga. De omtales aldri som
   ekte studentbesvarelser, og aldri som hentet fra fasit.
3. Ingen andre kildetyper nevnes (ingen «eksamensstatistikk», ingen
   «sensorpanel», ingen «karakterfordeling») med mindre de står i §8.
4. Fire av de 27 filene er skannede/bilde-baserte PDF-er uten uttrekkbar tekst
   (jf. §8). Ingen frekvenspåstand hviler på dem alene.

---

## Fagspesifikk stil (ufravikelig for IN1000 — fra skjelettets §1)

### Eksamensform (gjengis korrekt overalt)

**Én** hjelpemiddelfri, avsluttende, digital eksamen i Inspera. Ingen
midtveiseksamen — hele karakteren avgjøres av dette ene settet:

| Trekk | Detalj |
|---|---|
| **Varighet** | 4 timer |
| **Hjelpemidler** | Alle trykte og skrevne, **ingen elektroniske** |
| **Total** | **100 poeng** — poengfordelingen signaliserer vektingen |
| **Karakter** | A–F. Obligatoriske innleveringer må være godkjent for å gå opp |
| **Språk** | Kan veksles mellom bokmål, nynorsk og engelsk øverst i Inspera |

Fast 5-oppgave-struktur (H2018–H2024), som SKAL gjengis riktig overalt:

| Oppgave | Innhold | Poeng | Andel |
|---|---|---|---|
| **1** | Kodeforståelse — «hva skrives ut / verdien til X» (5–7 deloppg.) | ~8 | ~8 % |
| **2** | Flervalg om objekter: referanser, `self`, scope, grensesnitt (2a–2d) | 8–9 | ~9 % |
| **3** | Skriv små funksjoner over lister/ordbøker/strenger (3–5 deloppg.) | 27–31 | ~28 % |
| **4** | **Stor klassemodellering** fra tekst/UML-spesifikasjon | **47–50** | **~48 %** |
| **5** | Skriv funksjoner over (ofte nøstede) lister/ordbøker (2 deloppg.) | 9–10 | ~9 % |

Kodeskriving (Oppg. 3 + 4 + 5) er **~83 %** av poengene; flervalgs-/
kortsvarsskallet (Oppg. 1 + 2) er **~17 %**.

### Føringsstandard (bokas eget håndverkskrav — gjelder ALL kode i boka)

1. **Enkel, eksplisitt kode med grunnkonstruksjoner.** Kun `for`/`while`,
   `if/elif/else`, funksjoner, lister, ordbøker, strenger og klasser. Fasiten
   skriver **eksplisitte løkker**, ikke pythonske one-liners. Se §K5 for
   den uttømmende lista over snarveier boka ikke bruker.
2. **Instansvariabler med `_`-prefiks** (`self._navn`). Utenfra klassen brukes
   **aksessor/mutator** (`hent_x` / `sett_x`), aldri `obj._x` direkte.
3. **`__init__` og `__str__` er de eneste spesialmetodene.** Arv, `super()` og
   polymorfisme er **utenfor det som testes** og drilles ikke (§K5).
4. **Riktig idé/struktur belønnes selv med småfeil**, og **delkarakter gis per
   deloppgave**. Dette står i Del 0 og preger ALLE løsningsforslag: marker hva
   som gir uttelling ved hvert steg, og si at man aldri skal stå fast — hopp
   videre, og bruk gjerne metoder som er beskrevet i oppgaveteksten selv om du
   ikke selv har skrevet dem.
5. **Oppgave 1 rettes automatisk i nyere sett:** skriv **eksakt** verdi,
   **riktig type**, **ingen pynt** — ikke `18.0` for heltallet `18`, ikke
   `'tekst'` med enkle anførselstegn i svarfeltet.
6. **Flervalg: blankt = feil = 0 → kryss alltid av.**
7. **Ingen æ/ø/å i selve koden** (H2020-merknad). Norske navn på variabler og
   metoder er derimot helt greit og er fasitens egen stil: `hent_alder`,
   `travleste`, `sett_inn_ledig`, `antall_ledige`. Bruk `oe`/`aa`-omskriving
   når et norsk ord trenger det (`stoerst`, `laan`), eller velg et annet ord.
8. **Ved «finn feilen»: gi et konkret moteksempel** — ett konkret kall som gir
   galt svar, ikke bare en verbal forklaring.
9. **Rimelige antakelser dokumenteres i kommentar** når oppgaveteksten er
   underspesifisert. Dette er den ene legitime bruken av kommentarer. Ellers:
   ingen unødvendig `main`-program, ingen ekstra I/O, ingen overflødige
   kommentarer.

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
  ikke er kjørbare: fragmenter, metodesignaturer i et klasseskjelett,
  plantede syntaksfeil i «finn feilen»-oppgaver (sjanger I), filinnhold,
  terminaldialoger. Da er blokken heller ikke eksempelkode, og leseren skal få
  vite hvorfor den ikke kjører.
- Ingen andre tagger. Ikke ` ```py `, ikke ` ```Python `.
- **Avsluttende ``` alltid på egen linje** (§0).

**Escaping i JSON (bruk alltid `json.dump`, aldri håndskriv):**

| Skal vises i koden | I JSON-strengen | Merk |
|---|---|---|
| linjeskift | `\n` | ekte linjeskift finnes ikke i JSON-strenger |
| 4 mellomrom innrykk | fire mellomrom | ALDRI TAB som innrykk |
| `print("a\tb")` (tab i en Python-streng) | `print(\"a\\tb\")` | `\\t` = backslash + t, altså Python-kildekoden |
| en EKTE TAB i programutskrift | `\t` | lovlig KUN inne i en ```-blokk |
| `"` i koden | `\"` | eller bruk enkle fnutter i Python |
| `\` i koden | `\\` | |

**TAB-regelen presist.** `scripts/hoyskolebok/sjekk-latex.py` avviser
kontrolltegn (herunder TAB) **overalt unntatt inne i ```-kodeblokker**. TAB i
programutskrift inne i en ```-blokk er lovlig; TAB som innrykk i Python-kilden
er forbudt (kodeporten avviser); TAB utenfor en kodeblokk er forbudt.

**`$` i kode er tillatt** — `sjekk-latex.py` ser bort fra ```-blokker og
inline-kode når den teller dollartegn. **Utenfor kodemarkering er `$` en
matte-avgrenser: et dollartegn som ikke er matte MÅ escapes `\$`** (i JSON:
`\\$`). To uescapede `$` på samme linje er partall og slipper gjennom den gamle
balansesjekken — rendreren parrer dem og setter prosaen mellom som formel.
Dette rammet 21 filer i live bøker 25. juli 2026. `alt`-tekst på bilder rendres
rått: ingen LaTeX, ingen `$`, ingen backslash der.

**`|` i programutskrift** er trygt: kodeblokker parkeres før tabellparseren.

### §K2 Én kodeblokk = én ting

Kodeblokker skal være korte nok til å spores: **maks ~25 linjer** i eksempler og
fasiter (klassemodelleringene i Del 6 og 9 kan gå til ~35, men deles helst per
klasse), maks ~15 i sporingsoppgaver (sjanger A) og maks ~12 i quiz. Trenger
løsningen mer, deles den i to blokker med en setning imellom som sier hva neste
blokk gjør. Ingen kodeblokk gjentar en tidligere blokk uendret — vis bare den
delen som er ny, og si at resten er som før.

### §K3 All kode SKAL være kjørbar og faktisk kjørt (ufravikelig)

Utskrift skrevet fra hukommelsen er den farligste feilen en kodefag-bok kan
gjøre: den lærer leseren feil svar på nettopp den sjangeren som er 100 % sikker
på eksamen. **IN1900-verifiseringen fant fem utskrifter som var skrevet ut fra
teorien i stedet for kjørt.** Derfor:

1. **Hvert ```python-eksempel og hver fasitkode skal være kjørt** før den limes
   inn. Arbeidsflyt:
   ```
   skriv snutten til <scratchpad>/in1000-<kapittel-id>-<n>.py
   python3 <scratchpad>/in1000-<kapittel-id>-<n>.py
   kopiér stdout ORDRETT inn i «**Utskrift:**»-blokken
   ```
   Bruk gjerne harnisket `<scratchpad>/sjekk-utskrift.py <kapittelfil>`, som
   trekker ut hver ```python-blokk, kjører den og sammenligner med
   «**Utskrift:**»-blokken rett etter. Kjør det på hvert ferdig kapittel.
2. **Byggemiljøet:** `python3` er **3.9.6**. Boka importerer INGENTING (§K7),
   så det finnes ingen bibliotekavhengighet å bomme på.
3. **Utskriften limes inn ORDRETT** — samme mellomrom, samme rekkefølge, samme
   tomme linjer. Ikke «pynt», ikke rund av, ikke oversett feilmeldinger.
   Ordbøker skrives som Python skriver dem (`{'a': 1, 'b': 2}` — med
   innsettingsrekkefølge i Python 3.7+), lister med hakeparenteser og «, ».
4. **Exceptions.** Skal et eksempel vise en feilmelding, kjør den og lim inn
   siste `Traceback`-linje ordrett (f.eks.
   `NameError: name 'alder' is not defined`), og si at det er siste linje. Aldri
   en oppdiktet feilmelding. Blokken beholder taggen `python` (den kompilerer);
   utskriftsblokken merkes «**Utskrift:**» med feilmeldingen.
5. **Fillesing.** Skal koden lese en fil, opprett datafila i scratchpad, kjør
   koden mot den, og vis filinnholdet i en egen ```-blokk merket
   «**Innholdet i `medlemmer.txt`:**» FØRST. Filnavn og innhold er nyskrevne.
6. **`input()`.** Kode som leser fra brukeren kan ikke kjøres uten inndata. Kjør
   den med inndata på stdin (`printf 'linje1\nlinje2\n' | python3 fil.py`) og
   vis dialogen i en ```-blokk merket «**Terminaldialog (det brukeren skriver
   er markert):**». Alternativt vises metoden i en ```text-blokk uten
   «**Utskrift:**» — men da skal en kjørbar variant finnes et sted i kapitlet.
7. **Presisjonspåstander etterregnes.** Sier teksten «fire riktige desimaler»,
   «dobbelt så mange», «tre ganger raskere» eller «feilen er ~0,001», SKAL
   påstanden regnes etter mot den kjørte utskriften. IN1900 hadde en påstand om
   fire desimaler der det var tre, og en feilstørrelse tre størrelsesordener
   feil. Tell tegnene.
8. **Rapporter** i ferdigmeldingen hvor mange kodeblokker du kjørte.

### §K4 Utskrift merkes på ÉN måte

Rett etter kodeblokken, i samme streng:

```
**Utskrift:**
```
34 7
```
```

Altså: linjen `**Utskrift:**` (fet, med kolon), deretter en ```-blokk **uten**
språktagg med den rå utskriften. Ingen andre varianter («Output:», «Resultat:»,
«Dette skriver ut:», utskrift som kommentar inne i koden, utskrift i prosa).
Skriver programmet ingenting, står det `**Utskrift:** ingen (programmet skriver
ikke ut noe)` som ren tekst, eller kodeblokken merkes med kommentaren
`# ingen utskrift`.

Unntak: **sporingsoppgaver** (sjanger A) i `task`/`problem`-feltet skal
selvsagt IKKE ha utskriften — den hører i `solution`. Kodeporten krever
«**Utskrift:**» bare i fasit- og teorifelt.

### §K5 API-presisjon: dette er bokas API, og ingenting annet

**Ingen kapittel introduserer en konstruksjon som ikke står i skjelettets
Kodekontrakt-felt for et kapittel.** Skjelettets kodekontrakter er til sammen
bokas pensumliste. Trenger du noe utenfor, er svaret å skrive om oppgaven.

**Faste former (bokstandard — skriv dem slik overalt):**

| Konstruksjon | Bokas form | Presist |
|---|---|---|
| tallrekke | `range(start, stop, step)` | `stop` er EKSKLUSIV |
| teller | `antall = 0` … `antall = antall + 1` | eller `antall += 1`, konsekvent i samme kapittel |
| akkumulator | `total = 0` … `total = total + x` | |
| flagg + tidlig retur | `for e in liste:` `if daarlig(e): return False` … `return True` | retur ETTER løkka |
| ordbok som teller | `if k not in d:` `d[k] = 0` … `d[k] = d[k] + 1` | aldri `Counter` |
| gruppering | `if k not in d:` `d[k] = []` … `d[k].append(v)` | gir `{nøkkel: [liste]}` |
| finn beste | `beste = None` `beste_antall = 0` … `if antall > beste_antall:` oppdater BEGGE | aldri `max(..., key=...)` |
| tegn-for-tegn | `ny = ""` … `ny = ny + tegn` | strenger er uforanderlige |
| klasse | `class Navn:` med `def __init__(self, …):` | instansvariabler `self._x` |
| aksessor/mutator | `def hent_x(self): return self._x` / `def sett_x(self, ny): self._x = ny` | utenfra: aldri `obj._x` |
| en-til-mange | `self._elementer = []` eller `self._elementer = {}` | objektREFERANSER, ikke rådata |
| delegering | `for e in self._elementer: e.skriv()` | ytre metode har ANNET navn, se §K5b |
| `__str__` | `def __str__(self): return "…" + str(self._x)` | returnerer STRENG, kalles av `print(obj)` |
| filinnlesing | `fil = open(filnavn)`; `linje = fil.readline()`; `while linje != "":` … `linje = fil.readline()`; `fil.close()` | løkk til tom streng |
| feltdeling | `felt = linje.rstrip().split(sep)` | `.rstrip()` FØR `.split()` |
| input-løkke | `svar = input(…)` `while svar not in gyldige: svar = input(…)` | `input()` gir alltid streng |

**Snarveier boka ALDRI bruker i egen kode** (fordi fasiten ikke gjør det, og
kurset belønner grunnformen): list/dict comprehensions, `set()`, `Counter`,
`sum()`, `sorted()`/`sorted(key=)`, `max(..., key=...)`/`min(..., key=...)`,
`.count()`, `.index()`, `enumerate()`, `zip()`, `dict.get()`, `dict.items()`,
`dict.values()`, `dict.keys()`, `.join()`, f-strenger, `lambda`, `try/except`,
`with open(...)`, typehint, dekoratorer. Hvert funksjonsskrivingskapittel
(Del 3, Del 6, Del 8) skal ha en eksplisitt `warning`: «Snarveien finnes, men
kurset og fasiten belønner grunnformen — lær den eksplisitte løkka først.»

> **Presisering:** dette er en regel om *bokas egen kode*, ikke et forbud mot å
> nevne at snarveiene finnes. `warning`-blokkene SKAL nevne dem ved navn. De
> står derfor ikke i forbudt-term-regexen.

**Utenfor pensum (drilles ALDRI, kun kort `kjenne`-omtale i Del 0 og kap. 5.1):**
arv (`class Sub(Base):`), `super()`, polymorfisme, lenkede strukturer,
iteratorer/generatorer, egendefinerte unntak, tråder, **rekursjon**, NumPy,
matplotlib, plotting, rekker og ODE-løsere (IN1900-stoff), samt de historiske
INF1001-temaene tallsystem-konvertering og personvern/etikk.

To ting kan derfor ikke grep-sjekkes til null, og har egne kontroller:

1. **Rekursjon.** Kode: ingen funksjon kaller seg selv (kodeporten avviser).
   Prosa: hvert treff på `rekursj` skal stå i samme setning som «utenfor
   pensum», «ikke pensum» eller «uønsket»:
   ```bash
   grep -o -i ".\{0,120\}rekursj.\{0,120\}" src/lib/data/chapters/in1000-*.json \
     | grep -v -i "utenfor pensum\|ikke pensum\|uønsket"
   ```
   → skal gi 0 linjer. Ikke lenk til `r2-1-7` «Rekursive sammenhenger og
   programmering» — den underviser nettopp det som er utenfor pensum her.
2. **Arv.** Kode: ingen `class X(Y):` og ingen `super(` i noen ```python-blokk.
   Prosa: hvert treff på `arv`/`super()`/`polymorfi` skal stå i samme setning
   som «utenfor pensum», «ikke pensum», «testes ikke» eller «IN1010»:
   ```bash
   grep -o -iE ".{0,120}(polymorfi|super\(\)|\barv(en|es|ing)?\b).{0,120}" \
     src/lib/data/chapters/in1000-*.json \
     | grep -v -iE "utenfor pensum|ikke pensum|testes ikke|IN1010"
   ```
   → skal gi 0 linjer.

### §K5b [IN1000] Delegering og kodeportens rekursjonssjekk — NAVNEREGEL

Kodeporten (`sjekk-kode.py`, punkt 2) flagger en metode som kaller **et navn
lik sitt eget** inne i sin egen kropp. Den ser ikke forskjell på `self.skriv()`
og `bok.skriv()`. Delegering er kjernemønsteret i IN1000, så dette ville gitt
falske avvik. Verifisert i steg 0:

```python
class Bibliotek:
    def skriv(self):
        for b in self._boker:
            b.skriv()
```

→ porten melder «REKURSJON … funksjonen «skriv» kaller seg selv». Endres den
ytre metoden til `skriv_alle`, er porten grønn.

**Regelen (bindende):** en metode i boka kaller ALDRI en metode med samme navn
— verken på seg selv eller på et underobjekt. Container-klassens metode får et
eget navn:

| Underobjektets metode | Container-klassens metode |
|---|---|
| `skriv()` | `skriv_alle()` |
| `hent_navn()` | `hent_alle_navn()` / `navneliste()` |
| `antall()` | `totalt_antall()` |
| `__str__` | `skriv_alle()` som bruker `str(e)` eller `print(e)` |

Dette er dessuten bedre kode: de to metodene gjør ulike ting og bør hete ulikt.
Skriv regelen inn i kap. 6.2 (delegering) som en `tip` til leseren også.

### §K6 Kodesporing (sjanger A) — oppsett og fasit

Sjanger A er 6 av 6 moderne sett (100 %), Oppgave 1, ~8 poeng, auto-rettet i
nyere sett. Fast oppsett:

**Oppgaven (`task`):**

```
(Eksamensnivå, sjanger A — kodesporing.) Hva skriver programmet ut? Skriv
utskriften nøyaktig, med mellomrom og linjeskift slik terminalen viser den.

```python
a = "3"
b = "4"
print(a + b, int(a) + int(b))
```
```

**Fasiten (`solution`) skal vise SPORINGEN, ikke bare svaret.** Tre deler, i
denne rekkefølgen:

1. **Sporingstavle** — markdown-tabell med én rad per linje eller iterasjon og
   én kolonne per variabel som endrer seg, pluss en kolonne «Utskrift så
   langt». Tabellen skal være så mekanisk at leseren kan gjøre det samme på
   papir. Ved lister/ordbøker: en kolonne som viser strukturen etter hvert steg.
2. **Den eksakte utskriften** i en «**Utskrift:**»-blokk (kjørt, §K3–K4).
3. **Én-linjes fellenote** som navngir feilen sporingen tester, med feilkode:
   «Fellen her er #3 — `+` på to strenger skjøter dem sammen.» Pluss, i
   drillkapitlene, en margnote om at delvis riktig sporing gir delvis
   uttelling, og at svaret i Inspera skal skrives uten pynt.

Sporingsmetoden (kap. 4.1) er bokas oppskrift og skal gjengis der og henvises
til senere: (1) før en tavle over variablenes verdier linje for linje; (2) for
løkker: skriv ut iterasjon for iterasjon og tell nøyaktig antall (`range`-stopp
eksklusiv); (3) noter hva hvert `print` faktisk skriver — ett mellomrom mellom
komma-argumenter, hakeparenteser på lister; (4) hold styr på type (heltall vs.
streng, `int` vs. `float`); (5) skriv sluttresultatet eksakt som terminalen,
uten pynt.

**Sjanger B (objekt-flervalg)** settes opp som én felles kodesnutt med to
klasser + 3–4 spørsmål, og fasiten sporer referansene steg for steg — aldri
bare bokstaven.

### §K7 Python-versjon og tillatte moduler

- **Språk:** Python 3. Boka skriver kode som er gyldig i Python 3.8 og nyere og
  som er **kjørt på 3.9.6** (byggemiljøet). Ingen konstruksjoner nyere enn det:
  ingen `match`/`case`, ingen walrus `:=`, ingen typehints, ingen `dataclass`,
  ingen dekoratorer.
- **Tillatte moduler: INGEN.** IN1000 bruker kun Python-standard uten
  `import` i det hele tatt. Boka skriver derfor ALDRI en `import`-linje i egen
  kode. Ett unntak i omtale: eksamensteksten oppgir av og til en hjelpefunksjon
  som `randint(a, b)` og sier eksplisitt at man ikke trenger å importere noe —
  boka forklarer at slike leveres i oppgaven og skal brukes, men bruker dem
  aldri i egen kjørt kode (koden skal være deterministisk).
- **Forbudt:** alle biblioteker (`numpy`, `matplotlib`, `pandas`, `random`,
  `collections`, `os`, `sys`, `math`, `datetime` …). Trenger en oppgave et
  matematisk uttrykk, skrives det med `+ - * / // % **`.

### §K8 LaTeX, kode og unicode — hvem eier hva

1. **Ingen LaTeX inne i kode.** Aldri `$`, `\frac`, `\cdot` inne i en ```-blokk
   eller i `` `backticks` ``.
2. **Ingen kodeidentifikatorer i matte-modus.** `$range(N)$`, `$\_\_init\_\_$`
   er FORBUDT. Alt som er Python — navn, metoder, uttrykk, filnavn — står i
   backticks: `` `range(N)` ``, `` `__init__` ``, `` `self._navn` ``.
3. **Matematikk i prosa SKAL være LaTeX, ikke unicode** — men denne boka har
   nesten ingen matematikk. Trenger du et symbol, skriv `$\le$`, `$\to$`,
   `$n - 1$`. FORBUDT i prosa: `≈`, `≤`, `≥`, `√`, `π`, `→` (bruk ordet «gir»),
   `²`, `·`. Dobbel backslash i JSON.
4. **Dunder-navn og `**` skal stå i kodemarkering.** `` `__init__` ``,
   `` `__str__` ``, `` `x**2` ``. Kodeporten rapporterer bar `__x__` i prosa
   som en STILMERKNAD, ikke som avvik — men regelen står.
5. **`<` og `>` i prosa:** skriv `` `x < 3` ``, aldri bart — rå `<` går
   uendret inn i HTML.
6. **`_` i prosa:** et bart understrek-prefiks (`_navn`) utenfor backticks kan
   bli kursiv. Skriv alltid `` `_navn` `` / `` `self._navn` ``.

### §K9 Navnekollisjoner (obligatorisk varsling)

Hver kollisjon SKAL varsles med en `warning` første gang begge betydningene er
i omløp, og API- og konstruksjonslisten skal si hvilken betydning som gjelder i
nettopp det delkapitlet.

| Navn | Betydning 1 | Betydning 2 | Varsles i |
|---|---|---|---|
| `self` | første parameter i en metodedefinisjon | ikke et argument når man KALLER (`obj.metode(x)`) | 5.1 |
| `_x` | instansvariabel (innkapslet) | ikke del av grensesnittet | 5.2 |
| `i` | løkkevariabel over `range` | indeks i en liste | 1.3, 3.1 |
| `d` | ordbok | «dag» eller annen domenevariabel | 3.2, 6.3 |
| `linje` | strengen fra `readline()` (med linjeskift) | den rensede strengen etter `.rstrip()` | 7.1 |
| `str` | typen (streng) | den innebygde funksjonen `str(...)` | 1.1, 5.3 |
| `liste` / `dict` / `input` / `str` / `len` / `type` / `sum` / `max` | — | **forbudte variabelnavn** (skygger innebygde funksjoner) | 1.1 |

Boka bruker ALDRI et innebygd navn som variabel, og har en `warning` om hvorfor
(`input = "ja"` ødelegger `input(...)` resten av programmet). Bruk `svar`,
`tekst`, `tallene`, `ordbok`, `antall`, `total`.

---

## Sjangerkatalog A–I (fra skjelettets §3 — gjengis ordrett i kap. 0.1)

To hovedfamilier: **«hva skrives ut»** (les kode, angi resultat / velg
alternativ — Oppg. 1 + 2) og **«skriv X»** (produser kode — Oppg. 3 + 4 + 5).

| Kode | Sjanger | Form | Hyppighet / vekt / eksamensplass |
|---|---|---|---|
| **A** | Kodeforståelse «hva skrives ut / verdien til X» | kortsvar (auto-rettet) | 6 av 6 (100 %); 1–3 p/deloppg., ~8 p; **Oppgave 1** |
| **B** | Flervalg om objekter: referanser, `self`, scope, grensesnitt | flervalg | 6 av 6 moderne (100 %); 2–3 p/deloppg., ~8–9 p; **Oppgave 2** |
| **C** | Skriv en liten funksjon over en **liste** | fritekst-kode | 6 av 6 (100 %); 4–8 p; **Oppgave 3** |
| **D** | Skriv en funksjon over en **ordbok** (oppslag/teller/gruppering) | fritekst-kode | 6 av 6 (100 %); 5–8 p; **Oppgave 3/5** |
| **E** | Skriv en funksjon over en **streng** | fritekst-kode | 5 av 6 (83 %); 4–7 p; **Oppgave 3** |
| **F** | **Stor klassemodellering** fra spesifikasjon | fritekst-kode | 6 av 6 (100 %); **47–55 p** (~halve eksamen); **Oppgave 4** |
| **G** | Skriv en funksjon over **nøstet** liste/ordbok | fritekst-kode | 4 av 6 (67 %); 4–5 p/deloppg., ~9 p; **Oppgave 5** |
| **H** | Terminal-interaksjon (input-løkke til gyldig verdi) | fritekst-kode | 3 av 6 (50 %); 5–7 p; oftest **inne i Oppgave 4** |
| **I** | «Finn feilen» / logisk feil + **konkret moteksempel** | flervalg + fritekst | 3 av 6 (50 %); 2–6 p; Oppg. 1 (flervalg) eller Oppg. 2/3 |

Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne**
(nivå 3) — forklares i klarspråk ved første bruk, og «perfekt» skrives som
«må sitte / høyeste prioritet» (se Leserkrav, karakter-realisme).

---

## Feilkatalogen #1–#16

**#1–#12 er identisk nummerert med `EKSAMENSANALYSE.md` §5**, fordi skjelettets
per-kapittel-felt henviser til «§5.1», «§5.12» osv. Endre ALDRI denne
nummereringen. Feilkodene glosses ved første bruk PER KAPITTEL, og samles i
studieguiden (Del 0) med henvisning til kapitlet som forebygger hver feil.

**Belagt i arkivet (§5.1–§5.12):**

| # | Feil | Forebygges i |
|---|---|---|
| #1 | **`self`-fella** — `x = ...` i konstruktøren i stedet for `self._x = ...`. Variabelen blir lokal og forsvinner; senere `hent_x()` gir feilmelding eller startverdien | 5.1, 5.4, 5.5, 6.5 |
| #2 | **Referanse forvekslet med kopi** — tro at `b = a` lager en kopi, eller ikke se hva som lever etter en rebinding | 5.4, 5.5 |
| #3 | **Heltall vs. streng** — `"1"+"2"` gir `"12"`, ikke `3` | 1.1, 4.1 |
| #4 | **Glemt `int()`-konvertering** ved filinnlesing eller `input()` (data leses som streng) | 1.1, 6.4, 7.1 |
| #5 | **Av-med-én / feil løkkegrenser** i indeksering og `range` | 1.3, 3.1 |
| #6 | **Kant-tilfeller ikke håndtert** — tom liste, «ikke funnet», ett element | 3.1, 3.4, 6.3 |
| #7 | **For tidlig `return` i en «alle»-sjekk** — returnere `True` inne i løkka der man skulle ventet til etter den | 2.1, 3.4, 8.2 |
| #8 | **Glemt `.rstrip()` / feil separator i `.split()`** ved filinnlesing | 3.3, 7.1, 7.2 |
| #9 | **Input-løkka terminerer feil** — spørre én gang i stedet for i `while`-løkke til gyldig verdi | 6.4 |
| #10 | **Sentinel-kollisjon** — bruke `-1` som «ikke funnet» når `-1` også er gyldig data | 4.2, 8.2 |
| #11 | **Direkte attributt-tilgang utenfra** (`obj._x`) i stedet for aksessor | 5.2, 5.5, 6.5 |
| #12 | **Scope-forvirring** — tro at en lokal tilordning endrer en ytre variabel | 2.2, 5.5 |

**Bokas egne tillegg — allmenne Python-feller. Ingen frekvenspåstand: disse
skal ALDRI presenteres som «går igjen på eksamen», bare som feller (#13–#16):**

| # | Feil |
|---|---|
| #13 | Skygge et innebygd navn (`liste = [...]` er greit, men `list = [...]`, `sum = 0`, `input = "ja"` ødelegger funksjonen resten av programmet) |
| #14 | Glemme å initialisere telleren/den indre lista før `+= 1` eller `append` (`KeyError`) |
| #15 | Aliasing i lister: `b = a` gir to navn på SAMME liste, så `b.append(...)` endrer også `a` |
| #16 | Innrykksfeil og blandet TAB/mellomrom — Python krever konsekvent innrykk (bokas kode har 4 mellomrom) |

---

## Forbudt-termer (grep-sjekkes — skal gi 0 treff)

Kjør ved ferdigmelding (`sjekk-bok.py` tar regexen som argument 2; den hopper
over `in1000-0-1`, som er avgrensnings-/metakapitlet):

```bash
python3 scripts/hoyskolebok/sjekk-bok.py in1000 \
  "numpy|matplotlib|pandas|sympy|import random|dataclass|__name__ ==|sensorveiledning|Prioritet: perfekt|en A-besvarelse ville|ville ha drøftet|Output:|Resultat av kjøringen"
```

- **Biblioteker og IN1900-stoff:** `numpy`, `matplotlib`, `pandas`, `sympy`,
  `import random`, `dataclass`.
- **`__name__ ==`:** `if __name__ == '__main__':` gir ingen uttelling og skal
  ikke forekomme.
- **`sensorveiledning`:** UiO publiserer **løsningsforslag**, ikke
  sensorveiledninger. Ordet er forbudt i hele boka (kap. 0.1 er unntatt fra
  porten, men regelen gjelder også der — bruk «offisielle løsningsforslag»).
- **Utskrift-varianter:** «Output:» og «Resultat av kjøringen» er forbudt —
  utskrift merkes bare som «**Utskrift:**» (§K4).
- **README-/panelkrav:** «Prioritet: perfekt», «en A-besvarelse ville»,
  «ville ha drøftet».

I tillegg de to prosa-kontrollerte avgrensningene i §K5 (rekursjon og arv).

---

## Kryssbok-lenker (verifisert 25. juli 2026 — alle filene finnes i `src/lib/data/chapters/`)

Lenkeform `[tittel](/bok/<courseId>/<id>)`. Titlene under er de faktiske
kapitteltitlene og skal brukes ordrett. Lenk ALDRI til en fil som ikke finnes
(`sjekk-bok.py` fanger døde lenker).

| Brukes i | courseId | id | Tittel | Rolle |
|---|---|---|---|---|
| 0.1, 1.1 | `1p` | `1p-9-2` | Programmering med Python | Mykeste inngang for den som aldri har programmert |
| 0.1, 1.1 | `10` | `10-11-2` | Programmering med Python | Alternativ myk inngang (10. klasse) |
| 0.1, 1.3 | `in1900` | `in1900-1-1` | Variabler, datatyper, uttrykk og operatorpresedens | Naboemnets gjennomgang av de samme grunnkonstruksjonene |
| 4.1 | `in1900` | `in1900-1-7` | DRILL — Kodesporing: «hva skrives ut?» | Mer sporingsdrill i samme sjanger |
| 5.1 | `in1900` | `in1900-5-1` | Klasser, `__init__` og `__call__` | Samme klassehåndverk i et naboemne (NB: `__call__` er IN1900-stoff og ikke pensum her) |

Kontrollér med `ls src/lib/data/chapters/<id>.json` før du lenker; tabellen
utvides av byggeleder, ikke av kapittelforfatteren. Interne lenker:
`[kap. X.Y](/bok/in1000/in1000-X-Y)`. Lenker til kapitler som ennå ikke finnes,
legges inn først når fila finnes på disk — koordineres av byggeleder ved wiring.

---

## Prøvekapitler

Åtte prøvedeler: **[1, 2, 3, 4, 5, 6, 7, 8]** — fire prøver per temadel, altså
**32 prøver**, jf. skjelettets «Prøve-kvote Del N»-linjer i §6 (bruk
minuttanslagene som står der). **Del 0 er metadel (ingen prøve). Del 9 er
eksamenstrening (ingen prøve — tre komplette sett).**

Prøvekapittel: id `in1000-<del>-prove`, `chapterNumber` `<del>.P`, tittel
«Prøver til del `<del>`: `<deltittel>`»:

- `tip`: dekning + tidsbruk, deklarerer «4 prøver à ~X min» (minuttene fra
  skjelettets prøve-kvote-linjer) + «kan trygt deles over flere kvelder — én
  prøve per økt», og sier hvor flervalget bor (inline i prøven eller i den
  interaktive quizen).
- `text` **Forkunnskaper — sist du var her** (porten krever «Forkunnskaper» i
  alle kapitler utenom Del 0).
- Fire `collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med
  nyskrevne oppgaver i eksamens sjangre og full fasit: kort eksplisitt kode,
  poengfordeling, og for sjanger A full sporing (§K6). Statiske flervalg har
  STOKKEDE fasit-bokstaver.
- Etter hver prøvefasit: avkryssbar selvdiagnose-sjekkliste (☐).
- Kap-referanser i fasitene som markdown-lenker.
- Ingen begrepsbank og ingen quizkvote for prøvekapitler.

Prøvekapitler regnes som vurderingskapitler i `sjekk-bok.py` og er derfor
unntatt kravene om «Typiske feil»-warning og API-/symbolliste.

`estimatedMinutes` for prøvekapitlet = summen av de fire prøvenes minutter:
Del 1 95 · Del 2 100 · Del 3 125 · Del 4 100 · Del 5 120 · Del 6 165 ·
Del 7 120 · Del 8 120. Sum 945 min.

---

## Quiz-kvoten

`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`:

```json
[{ "question": "…", "options": ["riktig", "distraktor", "distraktor", "distraktor"], "explanation": "…" }]
```

Nøyaktig **4 alternativer**, `options[0]` **ALLTID** riktig (runtime stokker
rekkefølgen). Ingen duplikate alternativer.

**Kalibrering (skjelettets dokumenterte avvik):** IN1000 har **ingen
midtveiseksamen**, så quizbanken speiler i stedet de to flervalgs-/
kortsvarssjangrene på selve eksamen: **sjanger A** (Oppgave 1, kodeforståelse
«hva skrives ut?» — hovedtyngden) og **sjanger B** (Oppgave 2, begreps-flervalg
om referanser, `self`, scope og grensesnitt). Hvert spørsmål skal ligne et
reelt Oppgave-1- eller Oppgave-2-spørsmål. Distraktorene er de faktiske fellene
fra feilkatalogen — `"1"+"2"` lest som tall, av-én i `range`, glemt `int()`,
`b = a` lest som kopi, `self`-fella, manglende mellomrom i `print(a, b)` —
aldri tullesvar.

**Kodealternativer og LENGDE-TELL (begge veier).** Fasiten skal IKKE kunne
gjettes på form:

- Alle fire alternativer skal ha **jevn lengde og samme presisjonsgrad**.
  Kodeporten avviser når `options[0]` er unikt lengst i **over 35 %** av
  spørsmålene — eller unikt **kortest** i over 35 %. En student som velger «det
  lengste» eller «det korteste» skal treffe ~25 %.
- Er alternativene **utskrifter**, skal alle fire ha samme antall linjer og
  omtrent samme antall tegn.
- Er alternativene **kodelinjer**, skal alle fire være syntaktisk plausible og
  omtrent like lange.
- `explanation` (2–4 setninger) sier hvorfor fasiten er riktig OG hvilken felle
  hver nære distraktor tester.
- Skriv kode i spørsmål/alternativer i `` `backticks` `` (én linje) eller i en
  ```-blokk (flere linjer). Dunder og `**` alltid i backticks (§K8).

Kontroll før ferdigmelding: `python3 scripts/hoyskolebok/sjekk-kode.py in1000`,
og etter wiring `npx tsx scripts/hoyskolebok/quiz-lengdesjekk.mjs in1000`.

### Kvotetabell (AUTORITATIV — fra skjelettets §5 summeringskontroll)

Verifisert 25. juli 2026: alle deltotaler og totalene summerer.

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1 | 12 | 16 | 0 (metadel) |
| 1 | 1.1–1.3 | 66 | 64 | 4 |
| 2 | 2.1–2.2 | 38 | 40 | 4 |
| 3 | 3.1–3.4 | 88 | 84 | 4 |
| 4 | 4.1–4.2 | 42 | 30 | 4 |
| 5 | 5.1–5.5 | 94 | 102 | 4 |
| 6 | 6.1–6.5 | 82 | 96 | 4 |
| 7 | 7.1–7.2 | 34 | 38 | 4 |
| 8 | 8.1–8.2 | 36 | 38 | 4 |
| 9 | 9.1–9.3 | 24 | 0 | 0 (3 øvingseksamener) |
| **Sum** | **29 kap.** | **516 ✓ (≥500)** | **508 ✓ (≥500)** | **32 + 3 ØE** |

Per kapittel (quiz · flashcards) — **minimum, aldri under; overskyting er lov**:

| Kap. | Q · F | Kap. | Q · F | Kap. | Q · F |
|---|---|---|---|---|---|
| 0.1 | 12 · 16 | 4.1 | 28 · 16 | 6.4 | 14 · 14 |
| 1.1 | 22 · 24 | 4.2 | 14 · 14 | 6.5 | 18 · 14 |
| 1.2 | 20 · 20 | 5.1 | 20 · 24 | 7.1 | 18 · 24 |
| 1.3 | 24 · 20 | 5.2 | 18 · 24 | 7.2 | 16 · 14 |
| 2.1 | 20 · 22 | 5.3 | 14 · 14 | 8.1 | 18 · 24 |
| 2.2 | 18 · 18 | 5.4 | 20 · 24 | 8.2 | 18 · 14 |
| 3.1 | 22 · 24 | 5.5 | 22 · 16 | 9.1 | 8 · 0 |
| 3.2 | 22 · 24 | 6.1 | 16 · 24 | 9.2 | 8 · 0 |
| 3.3 | 20 · 22 | 6.2 | 18 · 24 | 9.3 | 8 · 0 |
| 3.4 | 24 · 14 | 6.3 | 16 · 20 | | |

**Bindende total: quiz 516 · flashcards 508.** Flashcards telles som toppnivå
`definition`-blokker med `title` — i dette faget API-/konstruksjons- og
begrepskort. Fordelingen speiler eksamensformen: Del 5 og 6 (klasser og
modellering) bærer flest flashcards fordi begrepsapparatet ligger der, mens
drillkapitlene 4.1 (28) og 3.4/1.3 (24) er quiz-tunge fordi de trener
sporingssjangeren. Del 9 har 0 flashcards.

---

## Tidsbudsjett (etterregnet 25. juli 2026 — brukes i Del 0)

| Del | Kapitler (min) | Prøver (min) |
|---|---|---|
| 0 | 35 | — |
| 1 | 130 | 95 |
| 2 | 85 | 100 |
| 3 | 220 | 125 |
| 4 | 135 | 100 |
| 5 | 275 | 120 |
| 6 | 305 | 165 |
| 7 | 130 | 120 |
| 8 | 125 | 120 |
| 9 | 720 | — |
| **Sum** | **2 160** | **945** |

**Totalt 3 105 min ≈ 52 timer.** Anslagene er LESEtid; den som skriver koden
selv, bør regne ca. ×1,5. Deltidsrute: 10–12 uker à ~5 timer.

---

## Opphavsrett (ufravikelig)

- Alle oppgaver, kodeeksempler, datafiler, tall, variabelnavn og domener er
  **NYSKREVNE**. Kodemønstrene er standard Python-idiomer (ikke vernet), men
  ingen oppgavetekst, ingen fasitkode og ingen datafil fra et reelt sett
  gjengis. Skjelettets mønstereksempler er selv omskrivninger og skal varieres
  videre, ikke kopieres ordrett.
- **Domenene i de reelle settene brukes ikke ordrett.** Familiens ukeplaner,
  fornøyelsespark, undervisningsadministrasjon, hotell-reservasjon, garderobe/
  antrekk og strømmetjeneste er de faktiske innpakningene 2014–2024 og skal
  IKKE gjenbrukes som modelleringsdomener i boka. Bruk i stedet bibliotek,
  treningssenter, kantine, sykkelutleie, resirkuleringsstasjon, kollektivrute,
  frivilligsentral, brettspillklubb.
  *Unntak:* skjelettets §4 navngir «bibliotek», «treningssenter» og
  «strømmetjeneste» for kap. 9.1–9.3. Bibliotek og treningssenter er ikke
  brukt i arkivet og beholdes; **strømmetjeneste-domenet i kap. 9.3 byttes ut**
  (det er H2024s faktiske innpakning) — bruk «podkast-arkiv» eller
  «kollektivselskap» med samme nøstede-ordbok-struktur.
- Pensumlitteraturen refereres med forfatter/verk/begrep, aldri sitert i
  lengde.
- Ingen skjermbilder eller utdrag fra Inspera eller UiOs sider.
- Referanser forfatteren er usikker på merkes `(verifiser)` og løses i fase 3.
  `sjekk-bok.py` avviser gjenstående markeringer.

---

## Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json; json.load(open('…'))"` på hver fil du har skrevet;
   ingen trailing commas, ingen uescapede `"`/`\`.
2. **Kodeporten grønn:** `python3 scripts/hoyskolebok/sjekk-kode.py in1000` —
   alle ```python-blokker kompilerer, ingen rekursjon (og ingen
   samme-navn-delegering, §K5b), ingen TAB som innrykk, ingen forbudte
   konstruksjoner, «**Utskrift:**» på alle fasit-/teoriblokker med `print(`,
   quiz-lengder jevne begge veier.
3. **All kode faktisk kjørt** (§K3) — rapportér antall blokker. Utskrift limt
   inn ordrett. Presisjonspåstander etterregnet.
4. **LaTeX-porten grønn:** `python3 scripts/hoyskolebok/sjekk-latex.py in1000` —
   ingen kontrolltegn utenfor kodeblokker, ingen løs backslash, balanserte `$`
   og ingen prosa satt som matte (uescapede `\$`).
5. **Statusporten:** `python3 scripts/hoyskolebok/status-bok.py in1000` viser
   filene dine som gyldige, med definisjonstellingen på eller over kvoten.
6. **Kvotetelling** mot kvotetabellen over (autoritativ, total 516/508):
   toppnivå `definition`-blokker med `title` + antall quizspørsmål per fil.
7. **Forbudt-termer-grep = 0** (regexen over) + rekursjons- og arv-prosagrepene
   fra §K5 = 0.
8. **Kryssbok-lenker** peker på eksisterende filer (tabellen over); interne
   kap-referanser er markdown-lenker.
9. **Læringsløkke:** `content[]` veksler teori → eksempel → oppgave i løkker med
   `exercise`-blokker INLINE. Unntak: prøve-/øvingseksamenkapitler.
10. **Forkunnskapsdekning:** hver `exercise` bruker bare konstruksjoner
    introdusert tidligere i kapitlet eller i en referert forkunnskap — gå
    gjennom oppgavene dine med skjelettets kapittelrekkefølge i hånden. Dette
    ga flest funn i IN1900-verifiseringen.
11. **Nybegynner-inngang:** alle sjangerkoder (A–I), feilkoder (#1–#16),
    karakterbokstaver, eksamens-metaspråk og API-/programmeringstermer forklart
    ved første bruk (feilkoder: per kapittel); ingen kald kode i
    `competenceGoals` eller første tekstboks; kap. 0.1 har «Slik leser du denne
    boka»-boksen (type `text`/`tip`, ALDRI `definition`) + kodemønster-minimum.
12. **`self`- og innkapslingskonsistens:** alle instansvariabler settes med
    `self._x`; utenfra brukes aksessor/mutator, aldri `obj._x`; `self`-fella
    har egen `warning` i 5.1 og 5.4 og plantes i objekt-flervalg-drillen (5.5).
13. **Delvis-riktig-poenggiving:** alle løsningsforslag i drill- og
    eksamenstreningskapitler markerer hva som gir uttelling steg for steg, og
    sier at riktig struktur belønnes selv med indeksfeil, og at deloppgaver
    løses uavhengig.
14. **API- og konstruksjonsliste** sist i hvert teori-/drillkapittel, med det
    ordrette notis-avsnittet (så `sjekk-bok.py` finner «Symbol- og
    formelliste»), og med ALLE konstruksjoner brukt i delkapitlet.
15. **Sporingsfasiter** (sjanger A) har sporingstavle + eksakt utskrift +
    fellenote — aldri bare svaret.
16. **Prøve-flervalg:** fasitmønster stokket (aldri «alle a»); selvdiagnose-
    sjekkliste etter hver prøvefasit; ingen tom `collapsible` (feltnavn
    `content`, med blokker).
17. **hints** utfylt på alle `exercise` (unntatt den merkede kalde banken i
    9.1); første hint røper aldri utskriften eller den ferdige koden.
18. **Frekvenstall** = skjelettets tall for NETTOPP dette kapitlet, med nevner
    («6 av 6 moderne sett»); kildenoten nevner kun kildetypene i
    EKSAMENSANALYSE §8, og «offisielle løsningsforslag» — ALDRI
    «sensorveiledning».
19. **Deloppgaveformat:** a), b), c) på egen linje med `**a)**`; ingen
    `subTasks`; sjanger-/nivåparentes som ledende tag, ikke i brødteksten.
20. **Øktmerking:** kapitler > 45 min har løkke-tidsanslag eller pausepunkter;
    prøvekapitler deklarerer «4 prøver à ~X min» + deling over flere kvelder.
21. **Juridisk:** innholdet fremstiller seg ALDRI som offisielt eller
    UiO-tilknyttet og lover aldri eksamensutfall.
22. Rapportér kort: filer skrevet, kvotestatus per kapittel, portstatus (kode +
    LaTeX + json), antall kodeblokker kjørt, og alt du har måttet merke
    `(verifiser)`.
