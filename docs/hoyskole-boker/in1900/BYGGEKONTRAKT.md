# Byggekontrakt: IN1900 Introduksjon til programmering med vitenskapelige anvendelser (UiO) — teknisk kontrakt for kapittelforfattere

Gjelder ALLE forfatter-agenter som bygger kapitler til `in1900`. Faglig innhold
styres av `SKJELETT.md` (identitetsseksjon §1 + per-kapittel-DNA i §4) — les ditt
kapittels avsnitt der nøye, og `EKSAMENSANALYSE.md` ved behov. Denne kontrakten
definerer format og krav, og er bindende der den er mer presis enn skjelettet.
Arketype: **DNA-regnefag** (`DNA-regnefag.md`), undertype **kodefag**: leseren
skal kunne (i) spore Python-kode mekanisk og angi utskriften tegn for tegn, og
(ii) produsere kort, idiomatisk kode i sensors stil.

**Dette er plattformens FØRSTE kodefag-bok.** Alt som står i «Kodekontrakten»
under er presedens: det blir mønsteret for IN1000, IN1010, IN2040, TDT4110,
TDT4100 og TDT4102. Avvik fra kontrakten skal derfor ikke gjøres av en
kapittelforfatter alene — meld avvik til byggeleder.

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
Konkret betyr det at `__init__`, `__call__`, `__str__`, `__add__`, `__mul__`,
`x**2` og hele kodeeksempler rendres som skrevet — ingen kursiv av dobbelt
understrek, ingen fet av `**`, ingen kollapset innrykk, ingen løse backticks.

Bakgrunn (funnet i steg 0): før fiksen manglet rendereren kodestøtte helt, og
**3 256 kodeblokker i 66 bøker** pluss **252 inline-kodesteder i 64 filer** (51
med dunder-navn, 165 med stjerner, 36 med dollartegn) rendret som søppel. Fiksen
er verifisert i produksjonsbygg mot `r2-3-5` (31 blokker), `it-1-6-3` (38) og
`it-2-7-2` (15).

**Verifikasjon i sluttporten (prod-curl, jf. BYGGEPLAN-MAL steg 4):** hent en
kapittelrute med kode og sjekk at HTML-en inneholder `<pre` og IKKE inneholder
`<em>init</em>`.

### Til forfatteren

Skriv kode i målformatet (gjerder + backticks, se Kodekontrakten). Du skal
**ikke** finne omveier: ingen HTML i JSON, ingen unicode-look-alikes
(`ˍˍinit`), ingen ekstra mellomrom inne i `__init__`, og ingen omskriving for
å unngå `$` eller `*` i kode.

**Merk:** fiksen ligger på `main`. Arbeidstreet `bok-in1900` er utgått fra main
FØR commit `274ce8af` og får fiksen ved neste merge/rebase (byggeleders kall).
Skal du prod-curle rendringen lokalt, må treet ha fiksen først; kapitlene skrives
likt uansett.

**PDF-generatoren** (`scripts/make-<emne>-pdf`) må speile den samme
kodeparkeringen når in1900-PDF lages. Ikke blokkerende for web.

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
- **Ingen usett forkunnskap:** ingen oppgave får bruke en Python-konstruksjon,
  et bibliotek eller et idiom som ikke er introdusert tidligere i kapitlet
  (t.o.m. eksempelet rett foran) eller i et kapittel referert i
  Forkunnskaper-blokken. Dette er skarpere i et kodefag enn i et regnefag: en
  `zip` i oppgave 3 i kap. 1.2 er brudd, fordi `zip` først kommer i kap. 1.3.
  Flytt teoribiten tidligere ved behov, eller bytt konstruksjon i oppgaven.
- **Unntak:** prøvekapitlene (`in1900-<del>-prove`) og øvingseksamenene
  (kap. 9.1–9.3) følger sin egen arketype — komplett oppgavesett først,
  løsninger i collapsibles.
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer kun
  REKKEFØLGEN.

---

## Filplassering

Ett JSON-dokument per kapittel: `src/lib/data/chapters/<kapittel-id>.json`
(f.eks. `in1900-7-3.json`). IKKE rør `_registry.json`, `_all.json`,
`textbook-courses*.ts` eller `quiz-data*.ts` — wiring gjøres sentralt med
`scripts/hoyskolebok/wire-bok.py`. Generer JSON via python `json.dump`
(garantert gyldig escaping). Quiz til
`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`.

Boka består av **43 filer**: 35 kapitler (1 eksamenskart + 31 tema/drill + 3
eksamenstrening) + 8 prøvekapitler (`in1900-1-prove` … `in1900-8-prove`).

---

## Kapittel-JSON (toppnivå)

```json
{
  "id": "in1900-7-3",
  "courseId": "in1900",
  "chapterNumber": "7.3",
  "title": "…(fra skjelettet, ordrett)…",
  "description": "…(setningen fra skjelettet)…",
  "estimatedMinutes": 60,
  "competenceGoals": ["kunne skrive høyresiden f(t, u) for et ODE-system og pakke ut løsningskomponentene", "…"],
  "content": [ …blokker… ],
  "exercises": []
}
```

`chapterNumber` = skjelettets `number` (`<del>.<nr>`; prøvekapitler `<del>.P`).
`competenceGoals`: 2–4 «kunne …»-formuleringer avledet av kapitlets
Kodekontrakt — **ingen kald sjangerkode (A–O), feilkode (#N) eller
karakterbokstav her**, og ingen dunder-navn uten backticks (se §K8).
`exercises` er alltid tom liste (oppgaver ligger som `exercise`-blokker inline i
`content`).

---

## Blokktyper (eksakte felt — strukturreferanse: `src/lib/data/chapters/econ1310-2-1.json`, kodeformat: `src/lib/data/chapters/r2-3-5.json`)

- `text`: `{ "id", "type": "text", "content": "markdown + LaTeX + kodeblokker" }`
- `definition`: `{ "id", "type": "definition", "title": "Konstruksjonen", "content": "forklaring" }`
  — **title er OBLIGATORISK** (flashcards genereres KUN fra toppnivå
  `definition`-blokker med title). I dette faget er `definition`-blokkene
  **API-/konstruksjonsdefinisjoner**: `title` er konstruksjonen (f.eks.
  «`range(start, stop, step)`»), `content` er presis oppførsel i ord + ett
  minimalt eksempel med utskrift. Åpne med oppførselen i ORD, ikke med kode.
- `theorem`: `{ "id", "type": "theorem", "title": "Navn på kodemønsteret", "content": "…" }`
  — brukes for de **kanoniske kodemønstrene/idiomene** (skjelettets dokumenterte
  avvik): rekke-summeringsmønsteret, testfunksjon-idiomet, differenslikning-
  allokeringen, forward-Euler-oppdateringen, system-ODE-malen, fillesing-til-
  nøstet-dict-mønsteret, funksjonsklasse-malen, «aritmetisk spesialmetode →
  ny instans», subklasse-malen, «med løkke / uten løkke»-malen. Disse er bokas
  «teoremer» og skal stå som `theorem`, ikke som `text`.
- `example`: `{ "id", "type": "example", "title": "Eksempel N: …", "problem": "…", "solution": "…" }`
  — `solution` = kort, idiomatisk kode + «**Utskrift:**»-blokk med den KJØRTE
  utskriften (§K3–K4).
- `tip` / `warning`: `{ "id", "type", "title", "content" }`
- `exercise`: `{ "id", "type": "exercise", "exercise": { "id", "number", "type": "classic", "difficulty": "lett"|"middels"|"vanskelig", "task", "solution", "hints": [] } }`
  — ALDRI `solutionVideo` / `allowsUpload` / `allowsCanvasDrawing` / `answer`.
  Ikke bruk `subTasks`-feltet (deloppgaver skrives inline, se Leserkrav).
- `image`: `{ "id", "type": "image", "src": "/images/textbook/in1900/<navn>.svg", "alt": "…", "caption": "…" }`
  — se `FIGUR-BESTILLINGER.md`. Figurbehovet i et kodefag er lavt; kode er
  ikke figur.
- `collapsible`: `{ "id", "type": "collapsible", "title", "buttonText": "Vis …", "content": [blokker] }`
  — API- og konstruksjonsliste, «Den utleverte ODESolver-modulen», prøver,
  repetisjon. ALDRI tom: feltnavnet er `content` og skal ha blokker (en
  `text`-nøkkel eller tom array rendrer som tom boks).

Blokk-id-er: `<kapittel-id>-<løpenavn>`, f.eks. `in1900-7-3-def-2`,
`in1900-7-3-ex-5`. Unike innen kapitlet (porten sjekker).

---

## Obligatorisk kapittelstruktur

### Teorikapitler (DNA-regnefag + skjelettet)

Alltid, i denne rekkefølgen først i kapitlet:

1. `tip` **Eksamensvinkel** — frekvens, vekt og sjangre, med tallene fra
   skjelettets Eksamensbelegg-felt for NETTOPP dette kapitlet (og ingen andre
   tall). Skriv sjangerkoden ut i klarspråk ved første bruk: «sjanger A —
   kodesporing, altså «hva skriver dette programmet ut?»».
2. `text` **Forkunnskaper** — kapitler i boka (markdown-lenker
   `[kap. X.Y](/bok/in1900/in1900-X-Y)`) + kryssbok-lenker der forkunnskapen
   ikke dekkes i boka (tabellen under, KUN filer som finnes). «Kan leses uten
   forkunnskaper» hvis ingen. I tunge, sene kapitler (Del 5, 6, 7, 8) skal
   blokken være en **«Sist du var her»**-blokk som VISER de 2–3
   nøkkelkonstruksjonene ferdig oppfrisket (kodesnutt med utskrift), ikke bare
   lenker.

Deretter DNA-løpet i læringsløkker: `text` konkret anker/motivasjon →
`definition`/`theorem` konstruksjonen (flashcard-kilden — toppnivå med title!) →
`example` med kjørt kode og faktisk utskrift → `exercise` inline som trener
nøyaktig den konstruksjonen → neste bit. 2–4 eksempler per delkapittel, siste på
eksamensnivå; 6–12 `exercise` i kapitlet, stigende (lett → middels →
vanskelig), de vanskeligste = eksamenskloner av kapitlets sjangre.
`warning` **Typiske feil** (fra feilkatalogen #1–#24) plasseres der den er mest
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
kapitler. Presis oppførsel betyr det som avgjør en kodesporing: `range(a, b)` —
«b er EKSKLUSIV, gir `b - a` verdier»; `np.linspace(a, b, N+1)` — «N+1 punkter,
begge endepunkt med»; `zip(a, b)` — «stopper ved den KORTESTE». Er det
matematikk bak et kodemønster (rekkeledd, ODE-høyreside, differenslikning), står
formelen i LaTeX under tabellen, med «**Formler i dette delkapitlet:**».

Og alltid til slutt: begrepsbank-`definition`-blokker opp til flashcard-kvoten.
Hver stor begrepsbank åpner med standard-notisen «Begrepsbanken er flashcard-/
repetisjonsstoff — den gjentar det du nettopp har lest. Hopp trygt over ved
førstegangslesing; tidsanslaget for kapitlet gjelder kjernestoffet.» Deretter
`collapsible` repetisjon.

### Drillkapitler (1.7, 2.2, 3.3, 5.5, 6.3, 7.5)

`tip` Eksamensvinkel → `text` Forkunnskaper → `text`/`theorem`
**Løsningsoppskrift** (algoritmen fra skjelettets Kodekontrakt-felt, steg for
steg og nummerert) → `example` gjennomarbeidet eksamenscase med
sensor-margnotater (hva som gir uttelling ved HVERT steg, og at riktig
overordnet struktur belønnes selv med indeksfeil) → 8–15 `exercise` som roterer
sjangrene, alle på eksamensnivå med nyskrevne kontekster, alle med full løsning
(for sjanger A: full sporing, se §K6). Signal-/hintbokser som varsler hva en
drilloppgave tester, står ETTER oppgaven.

### Øvingseksamener (9.1–9.3)

Komplette sett etter skjelettets miks. `estimatedMinutes` 120 (9.1) / 240 (9.2,
9.3). Struktur: `tip` med format, poeng og tidsbudsjett → nyskrevet oppgavesett
i eksamensform → `collapsible` modellbesvarelse per oppgave (kort idiomatisk
kode + `tip` om vekting, delpoeng og hva som gir uttelling ved delvis riktig
kode). Lange modellbesvarelser har «— naturlig pausepunkt —»-markører.
Kap. 9.1 er ren MC: de 20 spørsmålene registreres OGSÅ som kapitlets quizkvote,
slik at simuleringen kan tas som tidsstyrt MC-økt. Kap. 9.2 og 9.3 dokumenterer
eksplisitt at siste «oppgave» på det reelle settet (Q15/16/17) ikke skal
besvares — den er feltet der sensor legger inn midtveispoengene.

**Kald bank:** boka skal ha ÉN merket kald bank (8–10 oppgaver med uvante
vinklinger/kombinasjoner, UTEN hint, fasit = momentliste) — den legges i
kap. 9.1 som en egen `collapsible` «Kald bank — uten hint».

---

## Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»; SKAL i førsteutkastet)

- **Kun eksamensrelevant stoff**; «bør kjenne til» sist og merket (gjelder
  særlig 2D-array i kap. 4.1, fast-bredde-lesing i kap. 8.2, `root`-subklassen
  i kap. 7.4).
- **Korte avsnitt** (2–4 setninger), aktiv «du»-form, konkret anker før
  formalismen. Godt, flytende norsk; ALDRI telegramstil («Løkke: teller. Feil:
  av-én.» er FORBUDT).
- **Meningsfulle oppgaver:** hver oppgave er synlig eksamensforankret. Sjanger-
  og nivåmetadata skrives som en LEDENDE parentes i `task` som
  `extractGenreTag` kan trekke ut til en chip, f.eks.
  `(Eksamensnivå, sjanger F — rekke med testfunksjon.)`, ALDRI midt i
  brødteksten. Ikke gjenta `difficulty` i teksten («(krevende)» skrives ikke i
  `task` — feltet vises i oppgavehodet).
- **Læringsløkke Teori → Eksempel → Oppgave** med `exercise`-blokker INLINE.
- **Ingen usett forkunnskap** (se løkke-kontrakten øverst — skjerpet for kode).
- **Deloppgaver på egen linje, fet merking:** a), b), c) i `task`/`solution`
  HVER på egen linje — `…\n\n**a)** …\n**b)** …`. ALDRI bak hverandre i løpende
  tekst; ikke bruk `subTasks`. Listemerking med små bokstaver.
- **Nybegynner-inngang / ingen uforklart sjargong (UFRAVIKELIG).** Boka skal
  forstås av en som aldri har programmert:
  - **Sjangerkodene A–O** skrives ut i klarspråk ved FØRSTE bruk i HVERT
    kapittel: «sjanger B — matche-tabell der du regner ut indekserings- og
    slicing-uttrykk og parer dem med svaralternativer».
  - **Feilkodene #1–#24** glosses ved FØRSTE bruk PER KAPITTEL:
    «(#1 — av-én-feilen i `range`)».
  - **Eksamens-metaspråk** forklares før bruk: «Inspera» (UiOs digitale
    eksamenssystem), «midtveiseksamen», «flervalg/select one», «matche-tabell/
    match the values», «fritekst», «hjelpemiddelfri», «sensorveiledning»,
    «delpoeng».
  - **API-navn og programmeringssjargong** forklares ved første bruk, ALDRI
    kaldt: «spesialmetode (en metode med to understreker på hver side av navnet,
    som Python kaller automatisk)», «instans», «attributt», «kallbar»,
    «vektorisering», «exception (feil som avbryter programmet)», «høyresiden i
    en ODE», «ufunksjon», «streng-literal», «slicing (utsnitt)», «å iterere».
    Regelen fra README gjelder programmeringstermer på samme måte som
    fagbegreper: **ingen API-navn eller insider-term brukt før det er
    forklart.**
  - Ingen kald kode i `competenceGoals` eller i aller første tekstboks.
  - Kap. 0.1 har en **«Slik leser du denne boka»-orienteringsboks** (type
    `text` eller `tip`, ALDRI `definition` — det ville endret flashcard-kvoten)
    med: karakterskalaen A–F og de to eksamenene med vekt, kompakt liste over
    sjangerkodene A–O, kompakt liste over feilkodene #1–#24 med at de har et
    samlet register, og setningen om at hver Python-konstruksjon forklares der
    den brukes.
- **Del 0-pakken (kap. 0.1):** «Lite tid?»-boks (`tip`) med hurtigrute 3–5
  dager + ukeplan summert fra `estimatedMinutes` (bokas sum er **3 425 min ≈ 57
  timer** — etterregnet over alle 43 filer 25. juli 2026; det gamle tallet
  1 985 min var ~70 % for lavt) + presiseringen at anslagene er LESEtid og at den som skriver koden
  selv bør regne ca. ×1,5 · **kildenote** (§ «Sannferdig kildenote») ·
  **sjangerkortet A–O på ÉN side** (kortet SELV: sjanger → én linjes oppskrift →
  typisk vekt → vanligste feil, ikke en lenkeliste) · **deltidsrute** 10–12 uker
  (~8 t/uke) med de tre øvingseksamenene fordelt på tre kvelder, aldri stablet
  til slutt · **«lese mye, skrive lite»-boks** — og for et kodefag den
  motsatte advarselen i tillegg: **du må skrive kode for hånd/i editor uten å
  kjøre den**, fordi eksamen er hjelpemiddelfri; minst én øvingseksamen skal
  skrives uten å kjøre koden · **kodemønster-minimum** (`collapsible`
  «Mønstrene du må kunne skrive fra bunnen — og resten kan du lese i
  vedlegget»): rekke-summering, testfunksjon, differenslikning-allokering,
  forward Euler, ODESolver-bruk, fillesing→nøstet dict, funksjonsklasse med
  `__call__`, `__add__`/`__str__` — hver med én ordlinje og markering «skriv
  fra bunnen» vs. «bruk det utleverte».
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. X.Y](/bok/in1900/in1900-X-Y)`; død «se kapittel»-tekst
  er FORBUDT (aldri lenker i `title`-felt).
- **Karakter-realisme:** «C er en god og vanlig karakter» eksplisitt i Del 0;
  grep «Prioritet: perfekt» skal gi 0 treff. NB: «PERFEKT» i skjelettets
  deltitler er en *prioritetsklasse* (perfekt/kunne/kjenne = nivå 1/2/3), IKKE
  et krav om plettfri kode — skriv «må sitte / høyeste prioritet». Faget har
  eksplisitt sensorstøtte: riktig overordnet struktur gir god uttelling selv med
  indeksfeil. Modellbesvarelser merkes ÆRLIG (en «C-besvarelse» ER en C) + minst
  én autentisk B-/midtnivå-besvarelse: kode som virker og har riktig struktur,
  men med én indeksfeil, en glemt `label=` eller en litt klønete løkke — med
  margnotat om hva som er BRA NOK.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter hver prøvefasit — i et
  kodefag konkret: «☐ satte du `u[0]` FØR løkka? ☐ ga `range(N)` deg N
  oppdateringer og N+1 punkter? ☐ returnerte `__add__` en ny instans?».
- **Lett innstegsoppgave** (difficulty lett, ren gjengivelse/minimal sporing,
  vennlig fasit) tidlig i teorikapitler der første oppgave ellers er full
  eksamenssjanger.
- **Hverdagsanker + verdens-caser:** abstrakte kjernetemaer åpner med et
  konkret anker før apparatet. Innpakningene skal være virkelige vitenskapelige
  caser (epidemi, rovdyr–byttedyr, nervecelle, planetbane, målestasjoner,
  befolkningstall), aldri «en medstudent skriver …»-metaeksempler.
- **Øktmerking:** kapitler med `estimatedMinutes` > 45 (1.2, 1.3, 1.4, 1.5,
  1.6, 1.7, 2.2, 3.2, 3.3, 4.1, 5.1, 5.2, 5.5, 6.1, 6.2, 6.3, 7.1, 7.2, 7.3,
  7.4, 7.5, 8.1, 8.2, 8.3, 9.1–9.3) har tidsanslag per løkke («Løkke 2 — …
  (~20 min)») eller «— naturlig pausepunkt —»-markører.
- **Hint + difficulty-spredning:** alle `exercise` har utfylte `hints` (første
  hint = konstruksjonen/første grep, f.eks. «Start med `s = 0` og en løkke over
  `range(N+1)`» — ALDRI utskriften eller den ferdige koden). Unntak: den merkede
  kalde banken i 9.1. Boka har flere «krevende»-oppgaver (difficulty
  `vanskelig`).
- **Fasitmønster-variasjon:** ALLE ensartede fasitlister varierer. Statiske
  flervalg i prøve-collapsibles har STOKKEDE fasit-bokstaver (aldri «alle a»);
  quizfilene beholder `options[0]`-invarianten fordi runtime stokker. I
  «terminerer løkken?»-tabeller (sjanger D) skal svarene blande «terminerer» og
  «uendelig»; i exception-tabeller (sjanger C) skal minst én rad være «ingen
  feil».
- **Distraktorer straffer aldri grundig lesing:** en distraktor gjengir ALDRI
  bokas egne presiseringer som «galt» svar. Nære distraktorer forklares i
  `explanation`.
- **Meta-fasit forbudt:** «en A-besvarelse ville her ha skrevet …» erstattes av
  koden faktisk skrevet ut. Grep «en A-besvarelse ville» / «ville ha drøftet» =
  0.
- **Frekvenstall = telte belegg:** «100 % (8 av 8 sett)», «75 %», «4 av 4
  siste» skal stemme EKSAKT med skjelettets Eksamensbelegg-felt for kapitlet.
  Tell før du skriver; ikke oppfinn nye prosenter.
- **Juridisk:** innholdet fremstiller seg ALDRI som offisielt eller
  UiO-tilknyttet, og lover aldri eksamensutfall.

### Sannferdig kildenote (UFRAVIKELIG — produkteier)

Kildenoten i Del 0 og all omtale av grunnlaget nevner KUN kildetyper som
faktisk finnes i fagets arkiv, jf. `EKSAMENSANALYSE.md` §8. Bruk denne
formuleringen (eller en trofast omskrivning):

> Frekvenstallene i denne boka er telt i UiO-arkivet for IN1900/INF1100
> 2007–2025: 38 eksamenssett (19 avsluttende og 19 midtveis) med tilhørende
> offisielle løsningsforslag — 76 dokumenter i alt. De åtte avsluttende settene
> 2018–2025 og løsningsforslagene er gjennomgått grundig; settene 2007–2017 er
> skummet for form og temaregistrering. Prosentene gjelder derfor de åtte nyere
> settene. Emnet skiftet navn fra INF1100 til IN1900 rundt 2017, og H2020 var
> hjemmeeksamen med spørsmålspool — begge forhold er hensyntatt. Et nytt sett
> kan endre bildet.

Presist språkbruk, tre ting:

1. Faget har **offisielle løsningsforslag**, som i praksis fungerer som
   sensorveiledning. Skriv «offisielle løsningsforslag» (evt. «løsningsforslag
   som fungerer som sensorveiledning»). Ikke påstå at det finnes separat
   publiserte «sensorveiledninger» — det gjør det ikke i dette arkivet.
2. **Modellbesvarelser i boka er NYSKREVNE** av Skolesaga. De omtales aldri som
   ekte studentbesvarelser, og aldri som hentet fra fasit.
3. Ingen andre kildetyper nevnes (ingen «eksamensstatistikk», ingen
   «sensorpanel», ingen «karakterfordeling») med mindre de står i §8.

---

## Fagspesifikk stil (ufravikelig for IN1900 — fra skjelettets §1)

### Eksamensform (gjengis korrekt overalt)

To hjelpemiddelfrie digitale eksamener i Inspera, karakter A–F, all kode i
Python 3:

| Eksamen | Vekt | Form | Poeng |
|---|---|---|---|
| **Midtveiseksamen** (oktober) | 25 % | **100 % flervalg**, 20 spørsmål (4–5 av dem «match the values»-tabeller à 0,5 p per rad, resten «select one» à 1 p) | maks 25 |
| **Avsluttende eksamen** (desember) | 75 %, 4 timer | 13–16 oppgaver: flervalgsskall på de 4–7 første (15–25 % av poengene), deretter fritekst-koding (75–85 %) | maks 75 |

Faste mekaniske detaljer som SKAL gjengis riktig: siste «oppgave» på det
avsluttende settet (Q15/16/17) skal ikke besvares — den er feltet for
midtveispoengene, slik at de to eksamenene summerer til 100. Blankt og feil gir
likt på flervalg (0 poeng), og fra 2024/2025 er negativ scoring fjernet, så det
er aldri en kostnad ved å gjette. Midtveiseksamen deles med parallellemnene
IN-KJM1900 og IN-GEO1900 og holder seg derfor til fellespensumets kjerne.
Samlet ≈ 40 % flervalgs-sjanger, 60 % kodeskriving.

### Føringsstandard (bokas eget håndverkskrav — gjelder ALL kode i boka)

1. **Kort, idiomatisk kode.** Sensor forventer korte løsninger: ingen
   unødvendig `main`-program, ingen ekstra I/O, ingen overflødige kommentarer.
   Kommentar bare der noe er komplisert/ikke-standard, eller for å dokumentere
   en rimelig antakelse. Ingen `if __name__ == '__main__':`.
2. **Rekursjon er UTENFOR PENSUM.** Alt løses med løkke. Hvert kapittel som kan
   friste til rekursjon (3.2, 3.3, 6.2, 6.3, 7.1–7.5) har en eksplisitt
   `warning` om at rekursjon gir dårligere eller ingen uttelling og markeres
   uønsket i fasit. Se §K5 og forbudt-term-porten.
3. **Delvis riktig kode gir uttelling.** Riktig overordnet struktur (riktig
   løkkestruktur, riktig klasseoppsett, riktig ODE-oppsett) belønnes selv med
   små indeks- eller detaljfeil. Dette står eksplisitt i Del 0 og preger ALLE
   løsningsforslag: marker hva som gir uttelling ved hvert steg, og si at «å få
   alle indekser 100 % riktig er nesten umulig på eksamen». Deloppgaver kan
   løses uavhengig, og skrivefeil i oppgaveteksten straffer ikke kandidaten.
4. **Nødvendige `import` skal alltid med** når oppgaven ber om kjørbar kode:
   `from math import ...`, `import numpy as np`,
   `import matplotlib.pyplot as plt`, `import sys`,
   `from scipy.optimize import root`. Feil rekkefølge
   (`import sqrt from math`) er feilkode #10 og brukes bare som plantet feil i
   sjanger O.
5. **Alltid krysse av på flervalg** — blankt = feil = 0.
6. **Rimelige antakelser dokumenteres i kommentar** når oppgaveteksten er
   underspesifisert. Dette er den ene legitime bruken av kommentarer.

---

## KODEKONTRAKTEN (bindende — ny for plattformen)

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
  ikke er kjørbare: fragmenter, pseudokode, plantede syntaksfeil i «finn
  feilen»-oppgaver (sjanger O), sesjonsutdrag. Da er blokken heller ikke
  eksempelkode, og leseren skal få vite hvorfor den ikke kjører.
- Ingen andre tagger. Ikke ` ```py `, ikke ` ```Python `.

**Escaping i JSON (bruk alltid `json.dump`, aldri håndskriv):**

| Skal vises i koden | I JSON-strengen | Merk |
|---|---|---|
| linjeskift | `\n` | ekte linjeskift finnes ikke i JSON-strenger |
| 4 mellomrom innrykk | fire mellomrom | ALDRI TAB som innrykk |
| `print("a\tb")` (tab i en Python-streng) | `print(\"a\\tb\")` | `\\t` = backslash + t, altså Python-kildekoden |
| en EKTE TAB i programutskrift | `\t` | lovlig KUN inne i en ```-blokk |
| `"` i koden | `\"` | eller bruk enkle fnutter i Python |
| `\` i koden (regex, `\n` i streng) | `\\` | samme regel som LaTeX |

**TAB-regelen presist.** `scripts/hoyskolebok/sjekk-latex.py` avviser
kontrolltegn (herunder TAB, `\t` = 0x09) **overalt unntatt inne i
```-kodeblokker** og i `.ts`-filer. En TAB i prosa er nesten alltid `\text` med
enkel backslash og rendrer galt uten at KaTeX klager. Det betyr:

- TAB i **programutskrift** inne i en ```-blokk: **lovlig** — det er
  kolonnejustering, og det er slik `r2-3-5.json` gjør det i dag (verifisert:
  Python-kilden har `\\t`, utskriftsblokken har ekte TAB).
- TAB i **Python-kilden** som innrykk: **forbudt** (kodeporten avviser) — bruk
  4 mellomrom.
- TAB **utenfor** en kodeblokk: **forbudt** (LaTeX-porten avviser).

**`$` er tillatt inne i kodeblokker.** Skriv `python p.py $1`, `$PATH` og
`d$kol` når det er det koden faktisk sier. `sjekk-latex.py` ser bort fra både
```-blokker og `inline-kode` når den teller dollartegn (presisert av byggeleder
25. juli 2026), så kode med `$` gir ikke lenger falskt utslag på
$-balansesjekken. Utenfor kodemarkering gjelder fortsatt regelen om balanserte
`$` — der er `$` matte-avgrenser.

**`|` i programutskrift** er trygt: kodeblokker parkeres før tabellparseren, så
en utskriftslinje med `|` blir ikke tolket som markdown-tabell.

### §K2 Én kodeblokk = én ting

Kodeblokker skal være korte nok til å spores: **maks ~25 linjer** i eksempler og
fasiter, maks ~15 i sporingsoppgaver (sjanger A) og maks ~12 i quiz. Trenger
løsningen mer, deles den i to blokker med en setning imellom som sier hva neste
blokk gjør. Ingen kodeblokk gjentar en tidligere blokk uendret — vis bare den
delen som er ny, og si at resten er som før.

### §K3 All kode SKAL være kjørbar og faktisk kjørt (ufravikelig)

Utskrift skrevet fra hukommelsen er den farligste feilen en kodefag-bok kan
gjøre: den lærer leseren feil svar på nettopp den sjangeren som bærer hele
midtveiseksamen. Derfor:

1. **Hvert ```python-eksempel og hver fasitkode skal være kjørt** før den limes
   inn. Arbeidsflyt:
   ```
   skriv snutten til <scratchpad>/in1900-<kapittel-id>-<n>.py
   python3 <scratchpad>/in1900-<kapittel-id>-<n>.py
   kopiér stdout ORDRETT inn i «**Utskrift:**»-blokken
   ```
2. **Byggemiljøet:** `python3` er **3.9.6**, `numpy` **2.0.2**, `scipy`
   **1.13.1**. **`matplotlib` er IKKE installert.** Ikke installer noe.
   Plottekode verifiseres med en stubb, se punkt 4.
3. **Utskriften limes inn ORDRETT** — samme mellomrom, samme antall desimaler,
   samme rekkefølge, samme tomme linjer. Ikke «pynt», ikke rund av, ikke oversett
   feilmeldinger. Flyttall skrives som Python skriver dem
   (`0.30000000000000004`, ikke `0,3`). Er utskriften plattformavhengig (dict-
   rekkefølge er det ikke i Python 3.7+, men flyttallshaler kan variere), bruk
   f-strengformatering i koden så utskriften blir stabil.
4. **Plottekode.** `plt.show()` står i boka fordi eksamen krever det, men
   verifiser at koden kjører med en stubb i stedet for matplotlib:
   ```
   mkdir -p <scratchpad>/stub/matplotlib
   touch <scratchpad>/stub/matplotlib/__init__.py
   # stub/matplotlib/pyplot.py: def-er som bare gjør pass/print for
   # plot, xlabel, ylabel, legend, title, show, axis, grid, subplot, figure
   PYTHONPATH=<scratchpad>/stub python3 <fil>.py
   ```
   Plottekode får INGEN «**Utskrift:**»-blokk. Den får i stedet en presis
   **figur-i-ord**: hvilke kurver, hvilke akser, hvilken retning, hva legenden
   sier — slik en A-besvarelse forklarer plottet (skjelettet kap. 4.3). Trengs
   figuren faktisk vist, bestilles den i `FIGUR-BESTILLINGER.md`.
5. **Exceptions.** Skal et eksempel vise en feilmelding, kjør den og lim inn
   `Traceback`-linjene ordrett (eller bare siste linje, f.eks.
   `ValueError: invalid literal for int() with base 10: 'to'`, og si at det er
   siste linje). Aldri en oppdiktet feilmelding.
6. **Fillesing.** Skal koden lese en fil, opprett datafila i scratchpad, kjør
   koden mot den, og vis filinnholdet i en egen ```-blokk merket
   «**Innholdet i `maalinger.txt`:**» først. Filnavn og innhold er nyskrevne.
7. **Rapporter** i ferdigmeldingen hvor mange kodeblokker du kjørte, og at
   plottekoden er stubb-verifisert.

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

Unntak: **sporingsoppgaver** (sjanger A) i `task`/`problem`-feltet skal
selvsagt IKKE ha utskriften — den hører i `solution`. Kodeporten krever
«**Utskrift:**» bare i fasit- og teorifelt.

### §K5 API-presisjon: dette er bokas API, og ingenting annet

**Ingen kapittel introduserer en konstruksjon som ikke står i skjelettets
Kodekontrakt-felt for et kapittel.** Skjelettets kodekontrakter er til sammen
bokas pensumliste. Trenger du noe utenfor, er svaret å skrive om oppgaven.

**Faste signaturer (bokstandard — skriv dem slik overalt):**

| Konstruksjon | Bokas form | Presist |
|---|---|---|
| `range` | `range(start, stop, step)` | `stop` eksklusiv |
| punktarray | `np.linspace(a, b, N+1)` | N intervaller ⇒ **N+1 punkter** |
| nullarray | `np.zeros(N+1)`, `np.zeros_like(t)`, `np.zeros((n, n))` | |
| testfunksjon | `def test_f(): expected = …; computed = f(…); tol = 1e-10; assert abs(expected - computed) < tol, msg` | aldri `==` på flyttall; ingen argumenter, ingen utskrift |
| rekkesum | `s = 0; for k in range(N+1): s += ledd(k); return s` | |
| numerisk derivert | forlengs `(f(x+h) - f(x))/h`, sentrert `(f(x+h) - f(x-h))/(2*h)`, default `h=1e-5` | |
| differenslikning | `x = np.zeros(N+1); x[0] = x0; for n in range(N): x[n+1] = …` | N oppdateringer, N+1 punkter |
| egen ODE-løser | `def forward_euler(f, T, N, u0)` → `return t, u` | `t = np.linspace(0, T, N+1)`, `dt = t[1] - t[0]`, `u[n+1] = u[n] + dt*f(t[n], u[n])` |
| høyresiden | `def f(t, u):` — **post-2023-rekkefølgen** | system: `S, I, R = u` … `return [dS, dI, dR]` |
| løser-bruk | `solver = RungeKutta4(f)`; `solver.set_initial_condition(u0)`; `t, u = solver.solve((0, T), N)` | `t_span = (t0, T)` er en tuppel |
| utpakking | skalar: `u` er 1D. System: `u` er 2D, `S, I, R = u[:,0], u[:,1], u[:,2]` | |
| subklasse | `class RK2(ODESolver):` med KUN `def advance(self):` som returnerer neste `u`-verdi | bruker `self.f`, `self.u`, `self.t`, `self.n`, `self.dt` |
| likningsløsing | `from scipy.optimize import root`; `sol = root(fun, x0)`; løsningen i `sol.x` | `fun` tar ett array-argument og returnerer et array |
| plotting | `plt.plot(x, y, label='S')`, `plt.xlabel`, `plt.ylabel`, `plt.legend()`, `plt.show()` | flere kurver i samme figur |
| stykkvis klasse | `__call__`: `for i, b_ in enumerate(self.b): if x < b_: return self.a[i]` deretter `return self.a[-1]` | |
| spesialmetoder | `__init__`, `__call__`, `__str__` (returnerer f-streng), `__add__`/`__mul__` (returnerer NY instans; `__mul__` kan returnere tall ved indreprodukt) | |
| arv | `class Sub(Base):` med `super().__init__(...)` FØRST i subklassens `__init__` | |

**ODESolver-hierarkiet — API-standard og API-drift.** Bokstandard er
post-2023-signaturen `f(t, u)` + `solve(t_span, N)`. Hver ODE-oppgave (Del 7 +
alle ODE-referanser ellers) har en `warning` om API-driften: i eldre sett
(2020–2022) var signaturen `f(u, t)` og `solve(time_points)`, og den vedlagte
modulen må leses hvert år fordi den kan bruke enten den nye eller den gamle
konvensjonen. Vis begge, lær den nye.

Del 7 skal ha `collapsible` **«Den utleverte ODESolver-modulen»** med bokas
egen referanseimplementasjon av begge API-variantene. **Opphavsrett:** boka
gjengir IKKE eksamensvedlegget eller pensumbokas kode. Blokken innledes med
«Dette er Skolesagas egen implementasjon av det samme grensesnittet — samme
metodenavn og samme bruk som modulen du får utlevert, men koden er vår.»

Grensesnittet er **fest** (belagt i skjelettet): `ODESolver(f)`,
`set_initial_condition(u0)`, `solve(t_span, N)` → `(t, u)`, `advance()` i
subklassen, attributtene `self.f`, `self.u`, `self.t`, `self.n`, `self.dt`.
**Kroppen** i referanseimplementasjonen (hvordan skalar og system skilles, hvor
`dt` beregnes, hvilket unntak basisklassens `advance` kaster, presis intern
oppbygning i den GAMLE varianten) er ikke belagt i skjelettet. Skriv den, marker
den `(verifiser)` i teksten, og la fase 3 (verifikatorbølge) bekrefte den mot
UiOs publiserte modul / Sundnes' `ODESolver`. `sjekk-bok.py` avviser gjenstående
`(verifiser)`, så markeringene MÅ løses før sluttporten.

Skriv i tillegg i kap. 7.4 at attributtnavnene i det vedlagte kan variere, og
vis den robuste formen `dt = self.t[self.n+1] - self.t[self.n]` som virker
uansett om modulen har `self.dt`.

**Rekursjon er forbudt i all kode i boka.** Rekurrente rekker
(Chebyshev-polynomer $T_{n+1} = 2xT_n - T_{n-1}$), differenslikninger og ODE-er
løses ALLTID med løkke som lagrer de siste verdiene. Kodeporten
(`sjekk-kode.py`) avviser en funksjon som kaller seg selv. Ordet «rekursjon»
skal derimot forekomme — i `warning`-blokkene som sier at det er utenfor pensum
og markeres uønsket i fasit; hvert slikt treff skal stå i samme setning som
«utenfor pensum», «ikke pensum» eller «uønsket».

### §K6 Kodesporing (sjanger A) — oppsett og fasit

Sjanger A har høyeste prioritet (100 % frekvens, bærer hele midtveiseksamen).
Fast oppsett:

**Oppgaven (`task`):**

```
(Midtveisnivå, sjanger A — kodesporing.) Hva skriver programmet ut? Skriv
utskriften nøyaktig, med mellomrom og linjeskift slik terminalen viser den.

```python
for i in range(1, 4):
    for j in range(i):
        print(i*j, end=' ')
```
```

**Fasiten (`solution`) skal vise SPORINGEN, ikke bare svaret.** Tre deler, i
denne rekkefølgen:

1. **Sporingstavle** — markdown-tabell med én rad per iterasjon og én kolonne
   per variabel som endrer seg, pluss en kolonne «Utskrift så langt»:

   | Iterasjon | `i` | `j` | Skriver | Utskrift så langt |
   |---|---|---|---|---|
   | 1 | 1 | — | (ingen, `range(1)` er tom? nei: `j=0`) | … |

   Tabellen skal være så mekanisk at leseren kan gjøre det samme på papir.
   Ved lister/dictionaries: en kolonne som viser strukturen etter hvert steg.
2. **Den eksakte utskriften** i en «**Utskrift:**»-blokk (kjørt, §K3–K4).
3. **Én-linjes fellenote** som navngir feilen sporingen tester, med feilkode:
   «Fellen her er #12 — grensene i den indre løkka avhenger av `i`.» Pluss, i
   drillkapitlene, en margnote om at delvis riktig sporing gir delvis uttelling.

Sporingsmetoden (skjelettets kap. 1.7) er bokas oppskrift og skal gjengis i
1.7 og henvises til senere: (1) før en tavle over variablenes verdier linje for
linje; (2) for løkker: iterasjon for iterasjon, tell nøyaktig antall
(`range`-stopp eksklusiv); (3) noter hva hvert `print` faktisk skriver, inkl.
`end`/`sep` og formatering; (4) hold styr på om du har et element eller en
struktur; (5) skriv sluttresultatet tegn for tegn.

**Sjanger B/C/D (matche-tabeller)** settes opp som markdown-tabell med
uttrykk/kall i venstre kolonne og en nummerert alternativliste under, og fasiten
regner ut HVER rad steg for steg — aldri bare parene.

### §K7 Python-versjon og tillatte biblioteker

- **Språk:** Python 3. Boka skriver kode som er gyldig i Python 3.8 og nyere og
  som er **kjørt på 3.9.6** (byggemiljøet). Ingen konstruksjoner nyere enn det:
  ingen `match`/`case`, ingen walrus `:=`, ingen typehints, ingen
  `dataclass`, ingen dekoratorer. Årsaken er dobbel: sensor forventer det
  enkle idiomet, og koden skal kunne kjøres av forfatteren.
- **Tillatte moduler (uttømmende liste — alt annet er forbudt):**
  - `math` — `factorial, sqrt, sin, cos, exp, pi, atanh, sinh, log` (importér
    bare det du bruker)
  - `numpy` som `np`
  - `matplotlib.pyplot` som `plt`
  - `sys` — `sys.argv`, `sys.exit`
  - `scipy.optimize.root` — KUN i kap. 6.1, 7.4, 7.5, 9.3 og prøve 6.C/7.D
    (nivå 3-stoffet der `root`-dokumentasjonen leveres på eksamen)
- **Forbudt:** `pandas`, `sympy`, `seaborn`, `random`/`np.random`, `os`,
  `collections`, `itertools`, `functools`, `typing`, `scipy` utover
  `optimize.root`, `time`, `datetime`, `pathlib`. Trenger en oppgave
  pseudotilfeldige tall (H2021-nivå 3), implementeres generatoren som klasse med
  eksplisitt formel — ikke `random`.

### §K8 LaTeX, kode og unicode — hvem eier hva

1. **Ingen LaTeX inne i kode.** Aldri `$`, `\frac`, `\cdot`, `\alpha` inne i en
   ```-blokk eller i `` `backticks` ``. Matematikken i en kodeblokk skrives som
   Python (`(f(x+h) - f(x-h))/(2*h)`), evt. som en kommentar i ord.
2. **Ingen kodeidentifikatorer i matte-modus.** `$range(N)$`,
   `$\_\_init\_\_$`, `$np.linspace$` er FORBUDT. Alt som er Python — navn,
   metoder, uttrykk, moduler, filnavn, kommandolinjer — står i backticks:
   `` `range(N)` ``, `` `__init__` ``, `` `np.linspace(0, T, N+1)` ``.
3. **Motsatt: matematikk i prosa SKAL være LaTeX, ikke unicode.** Skriv
   `$e^x = \sum_{k=0}^{N} \frac{x^k}{k!}$`, `$T_{n+1} = 2xT_n - T_{n-1}$`,
   `$u' = -\lambda u$`, `$\approx$`, `$\le$`, `$\pi/3$`. FORBUDT i prosa:
   `eˣ`, `Σ`, `≈`, `≤`, `≥`, `√`, `π`, `Δ`, `λ`, `⁻¹`, `²`, `·`, `→` (bruk
   `$\to$` eller ordet «gir»). Dobbel backslash i JSON (`\\sum`, `\\frac`).
4. **Dunder-navn og `**` skal stå i kodemarkering.** `` `__init__` `` og
   `` `x**2` `` — av lesbarhetsgrunner: kode skal se ut som kode. Etter
   renderer-fiksen (§0) er dette ikke lenger en rendringsfeil, så kodeporten
   rapporterer bar `__x__`/`x**2` i prosa som en STILMERKNAD, ikke som avvik.
   Regelen står likevel: skriv Python-navn i backticks.
5. **`<` og `>` i prosa:** skriv `$x < 3$` eller `` `x < 3` ``, aldri bart —
   rå `<` går uendret inn i HTML.
6. **Én formel per konsept.** Rekkeformelen står i LaTeX én gang (over koden),
   og koden implementerer den. Ikke gjenta formelen i kommentarer.

### §K9 Symbol- og navnekollisjoner (obligatorisk varsling)

Kodefagets motstykke til symbolkollisjoner. Hver kollisjon SKAL varsles med en
`warning` første gang begge betydningene er i omløp, og API- og
konstruksjonslisten skal si hvilken betydning som gjelder i nettopp det
delkapitlet.

| Navn | Betydning 1 | Betydning 2 | Varsles i |
|---|---|---|---|
| `i` | løkkevariabel/indeks | matematisk summasjonsindeks $i$ i formelen over koden | 1.3, 3.2 — regelen er at LaTeX-indeksen og løkkevariabelen skal ha SAMME bokstav |
| `x` | skalar (funksjonsargument) | NumPy-array (hele tabellen) | 4.1, 4.2 — «`f(x)` med `x` som array gir et array tilbake» |
| `N` | antall intervaller/steg | `N+1` = antall punkter | 1.3, 4.1, 6.2, 7.1 (feilkode #1) |
| `n` | løkkevariabel i differenslikning/ODE | antall (i `range(n)`) | 6.2, 7.1 |
| `u` | hele løsningsarrayet (1D/2D) | tilstandsvektoren i `f(t, u)` | 7.1, 7.3 |
| `t` | tidsarrayet | `t[n]`, ett tidspunkt | 7.1 |
| `f` | Python-funksjonen (høyresiden) | f-streng-prefikset `f'…'` | 1.4, 7.1 |
| `e` | element i en løkke (`for e in …`) | grunntallet $e$ | 1.2, 3.2 |
| `h` / `dt` | steg i numerisk derivasjon | steg i tid | 6.1, 7.1 |
| `d` | dictionary | kapitalslit/parameter i en modell | 1.5, 8.1 |
| `l` / `I` / `O` | — | **forbudte variabelnavn** (leses som 1/0) | 1.1 |

**Navnekollisjon med innebygde funksjoner.** Boka bruker ALDRI et innebygd navn
som variabel, og har en `warning` om hvorfor: `list`, `sum`, `input`, `str`,
`int`, `float`, `dict`, `set`, `max`, `min`, `abs`, `round`, `len`, `type`,
`id`, `range`, `next`, `file`, `bytes`, `iter`, `format`. `sum = 0` ødelegger
`sum(...)` resten av programmet — det er en klassisk «finn feilen»-felle
(sjanger O) og skal brukes SOM plantet feil, aldri i bokas egen kode. Bruk
`s`, `total`, `verdier`, `tekst`, `ordbok`.

---

## Sjangerkatalog A–O (fra skjelettets §3 — gjengis ordrett i kap. 0.1)

To hovedfamilier: **«hva skrives ut»** (les kode, angi resultat) og **«skriv X»**
(produser kode).

| Kode | Sjanger | Form | Hyppighet/vekt |
|---|---|---|---|
| **A** | «Hva skrives ut?» — kodesporing | MC + fritekst | 100 %; 1–3 p; hele midtveis + finaleskall |
| **B** | Matche-tabell: indeksering/slicing i nøstede lister | MC-match | fast; 0,5 p/rad, maks 2–3,5 p |
| **C** | Matche-tabell: feilhåndtering (hvilken exception først) | MC-match | 75 % final, ~100 % midtveis; 2,5–3 p |
| **D** | Matche-tabell: «terminerer løkken?» / «hvilke er riktige?» | MC-match | jevnlig; 2–3,5 p |
| **E** | «Hvilken linje mangler?» / «hvilket funksjonskall?» | MC | jevnlig; 1–2 p |
| **F** | Skriv rekke/sum + testfunksjon | fritekst-kode | 100 %; 4–6 p |
| **G** | Skriv klasse med spesialmetoder | fritekst-kode | 100 %; 8–12 p (tyngst) |
| **H** | Differenslikninger (koblede, oppdateringsrekkefølge) | fritekst-kode | 75 % / 4-av-4 siste; 5–12 p |
| **I** | ODE-løser som funksjon (`forward_euler(...)`) | fritekst-kode | jevnlig; 5 p |
| **J** | ODE-system med det utleverte ODESolver-hierarkiet | fritekst-kode | 100 %; 9–10 p |
| **K** | Subklasse av ODESolver (skriv `advance`) | fritekst-kode | topp-differensierende; 3–5 p |
| **L** | Fillesing → nøstet dictionary (+ skriving/filtrering) | fritekst-kode | 100 %; 8–12 p |
| **M** | Lister vs. NumPy-arrays («med løkke / uten løkke») | fritekst-kode | 75 %; 5 p |
| **N** | Numerisk derivasjon/integrasjon/nullpunkt (byggeoppgave) | fritekst-kode | 50 %; 2–8 p |
| **O** | «Finn feilen» / «hva er galt i programmet» | fritekst | jevnlig; 3–6 p |

Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne**
(nivå 3) — forklares i klarspråk ved første bruk, og «perfekt» skrives som
«må sitte / høyeste prioritet» (se Leserkrav, karakter-realisme).

---

## Feilkatalogen #1–#24

**#1–#14 er identisk nummerert med `EKSAMENSANALYSE.md` §5**, fordi skjelettets
per-kapittel-felt henviser til «§5.1», «§5.14» osv. Endre ALDRI denne
nummereringen. Feilkodene glosses ved første bruk PER KAPITTEL, og samles i
studieguiden (Del 0) med henvisning til kapitlet som forebygger hver feil.

**Belagt i arkivet (§5.1–§5.14):**

| # | Feil | Forebygges i |
|---|---|---|
| #1 | Av-én i `range`/antall punkter — N intervaller krever `range(N+1)` og `linspace(a,b,N+1)`. Den hyppigste feilen i faget | 1.3, 4.1, 4.2, 6.2, 7.1 |
| #2 | Feil oppdateringsrekkefølge i koblede differenslikninger (`y[n+1]` må regnes før `x[n+1]` når $x_{n+1}$ bruker $y_{n+1}$) | 6.2, 6.3 |
| #3 | Glemme `self` — i metodesignaturen (`def __call__(x):`) eller i attributt-tilgangen (`a` for `self.a`) | 5.1–5.5 |
| #4 | `__add__` returnerer feil type (tuppel/liste i stedet for ny instans) | 5.2, 5.5 |
| #5 | Forveksle liste-konkatenering med array-addisjon (`[1,2]+[3,4]` mot `np.array`-sum) | 1.2, 4.1 |
| #6 | Feil exception-match — overse hvilken feil som kommer FØRST, eller glemme at `sys.argv[0]` er filnavnet | 2.1, 2.2 |
| #7 | Glemme `.strip()` (siste felt får med linjeskiftet) eller `readline()` for header-linja | 8.1, 8.3 |
| #8 | Feil separator i `.split()` (bar `split()` på en semikolonfil) | 8.1, 8.3 |
| #9 | Rekursjon der løkke er forventet (rekurrente rekker) | 3.2, 3.3 |
| #10 | Import-feil (`import sqrt from math` i stedet for `from math import sqrt`) | 3.1, 6.1 |
| #11 | `==` på flyttall i testfunksjoner i stedet for `abs(...) < tol` | 3.1, 3.3 |
| #12 | Feilberegnede `range`-grenser i nøstede løkker (`for j in range(i)`) | 1.3, 1.7 |
| #13 | Variabel-scope — tro at en lokal tilordning endrer den globale variabelen | 1.6, 1.7 |
| #14 | ODESolver-API-forveksling (`f(u, t)`/`solve(time_points)` mot `f(t, u)`/`solve(t_span, N)`) | 7.1–7.5 |

**Belagt i skjelettets per-kapittel-felt (#15–#20):**

| # | Feil | Forebygges i |
|---|---|---|
| #15 | Heltallsdivisjon og presedens — `//` avrunder NEDOVER også for negative tall, `/` gir alltid float, `**` er høyre-assosiativ | 1.1 |
| #16 | Utskriftsdetaljer oversett — `end=' '` fjerner linjeskiftet, `print` setter mellomrom mellom argumenter, f-strengens bredde/presisjon, og lister skrives med hakeparenteser og «, » | 1.4 |
| #17 | `zip` stopper ved den KORTESTE sekvensen; `enumerate` gir `(indeks, verdi)` i den rekkefølgen | 1.3 |
| #18 | Indeksering gir ELEMENT, slicing gir LISTE; slice-slutt er eksklusiv; negativ indeks teller fra `-1` | 1.2 |
| #19 | Sende et uttrykk der en funksjon kreves (`g = x**2 - 2` i stedet for `g = lambda x: x**2 - 2`) | 1.6, 6.1 |
| #20 | Mutere argumentet ved filtrering i stedet for å bygge og returnere en NY dict; glemme å opprette den indre dicten før innsetting | 1.5, 8.2 |

**Bokas egne tillegg — allmenne Python-feller. Ingen frekvenspåstand: disse
skal ALDRI presenteres som «går igjen på eksamen», bare som feller (#21–#24):**

| # | Feil |
|---|---|
| #21 | Mutabelt default-argument (`def f(x, liste=[])` — lista deles mellom kall) |
| #22 | `is` mot `==` — `is` sammenligner identitet, `==` verdi |
| #23 | Aliasing: `b = a` gir to navn på SAMME liste; kopi krever `a[:]`, `list(a)` eller `a.copy()` (for arrays: `a.copy()`) |
| #24 | Innrykksfeil og blandet TAB/mellomrom — Python krever konsekvent innrykk (bokas kode har 4 mellomrom) |

---

## Forbudt-termer (grep-sjekkes — skal gi 0 treff)

Kjør ved ferdigmelding (`sjekk-bok.py` tar regexen som argument 2; den hopper
over `in1900-0-1`, som er avgrensnings-/metakapitlet):

```bash
python3 scripts/hoyskolebok/sjekk-bok.py in1900 \
  "pandas|sympy|seaborn|np\.random|import random|dataclass|__name__ ==|Prioritet: perfekt|en A-besvarelse ville|ville ha drøftet|Output:|Resultat av kjøringen"
```

- **Biblioteker utenfor pensum:** `pandas`, `sympy`, `seaborn`, `random`/
  `np.random`, `dataclass`.
- **`__name__ ==`:** `if __name__ == '__main__':` gir ingen uttelling og skal
  ikke forekomme. Eneste tillatte omtale er én setning i kap. 0.1
  (metakapitlet, som porten hopper over).
- **Utskrift-varianter:** «Output:» og «Resultat av kjøringen» er forbudt —
  utskrift merkes bare som «**Utskrift:**» (§K4).
- **README-/panelkrav:** «Prioritet: perfekt», «en A-besvarelse ville»,
  «ville ha drøftet».

**Rekursjon** kan IKKE grep-sjekkes til 0, fordi boka SKAL advare mot den.
Reglene er derfor:

1. **Kode:** ingen funksjon kaller seg selv. Deterministisk sjekk:
   `python3 scripts/hoyskolebok/sjekk-kode.py in1900` (punkt 2 i skriptet).
2. **Prosa:** hvert treff på `rekursj` skal stå i samme setning som «utenfor
   pensum», «ikke pensum» eller «uønsket». Kontroll:
   ```bash
   grep -o -i ".\{0,120\}rekursj.\{0,120\}" src/lib/data/chapters/in1900-*.json \
     | grep -v -i "utenfor pensum\|ikke pensum\|uønsket"
   ```
   → skal gi 0 linjer.
3. **Ikke lenk til `r2-1-7` «Rekursive sammenhenger og programmering»** — den
   underviser nettopp det som er utenfor pensum her.

**Øvrige avgrensninger** (nevnes bare i kap. 0.1s avgrensningsavsnitt, som sier
at de er utenfor pensum): objektorienterte designmønstre utover de fem
spesialmetodene og enkel arv, generatorer/`yield`, dekoratorer,
kontekstmanagere man skriver selv, `map`/`filter`/`reduce`, `try/finally` som
ressursstyring utover `with open`, klasser med `@property`, unit-test-rammeverk
(`pytest`/`unittest` — boka bruker `assert`-testfunksjoner), filformater utover
ren tekst (CSV-modul, JSON, pickle).

---

## Kryssbok-lenker (verifisert 25. juli 2026 — alle filene finnes i `src/lib/data/chapters/`)

Lenkeform `[tittel](/bok/<courseId>/<id>)`. Titlene under er de faktiske
kapitteltitlene og skal brukes ordrett. Lenk ALDRI til en fil som ikke finnes
(`sjekk-bok.py` fanger døde lenker).

| Brukes i | courseId | id | Tittel | Rolle |
|---|---|---|---|---|
| 0.1, 1.1 | `1p` | `1p-9-2` | Programmering med Python | Mykeste inngang for den som aldri har programmert |
| 0.1, 1.1 | `10` | `10-11-2` | Programmering med Python | Alternativ myk inngang (10. klasse) |
| 3.2, 3.3 | `mat1100` | `mat1100-6-1` | Taylorpolynomer med restledd | Matematikken bak rekkene boka implementerer |
| 3.2 | `mat1100` | `mat1100-6-2` | Uendelige rekker og konvergenstester | Hvorfor en endelig sum tilnærmer funksjonen |
| 6.1 | `mat1100` | `mat1100-3-1` | Deriverbarhet: grensedefinisjonen | Grensen bak den numeriske deriverte |
| 6.1 | `mat1100` | `mat1100-4-1` | Riemann-integralet og integrerbarhet | Summen bak trapesmetoden |
| 6.1, 7.4 | `mat1110` | `mat1110-6-5` | Kontraksjon, fikspunkt og Newtons metode i flere variable | Newton/fikspunkt og `root`-oppsettet |
| 7.1, 7.2 | `mat1100` | `mat1100-6-3` | Differensialligninger: separable og lineære første ordens | Hva en ODE er, og den eksakte løsningen boka sammenligner med |
| 7.3 | `mat1120` | `mat1120-7-2` | Differensiallikningssystem x′=Ax og diskret dynamikk | ODE-system og diskret dynamikk matematisk |
| 6.1 | `fys1` | `fys1-1-3` | Numeriske metoder og programmering | Numerisk tilnærming i en fysikk-kontekst |
| 6.1 | `r2` | `r2-3-5` | Programmering av integrasjon | Trapes/rektangel i Python (VGS-nivå) |

Interne lenker: `[kap. X.Y](/bok/in1900/in1900-X-Y)`. Lenker til kapitler som
ennå ikke er skrevet, legges inn først når fila finnes på disk — koordineres av
byggeleder ved wiring.

---

## Prøvekapitler

Åtte prøvedeler: **[1, 2, 3, 4, 5, 6, 7, 8]** — fire prøver per temadel, altså
**32 prøver**, jf. skjelettets «Prøve-kvote Del N»-linjer i §6 (bruk
minuttanslagene som står der). **Del 0 er metadel (ingen prøve). Del 9 er
eksamenstrening (ingen prøve — tre komplette sett).**

Prøvekapittel: id `in1900-<del>-prove`, `chapterNumber` `<del>.P`, tittel
«Prøver til del `<del>`: `<deltittel>`»:

- `tip`: dekning + tidsbruk, deklarerer «4 prøver à ~X min» (minuttene fra
  skjelettets prøve-kvote-linjer) + «kan trygt deles over flere kvelder — én
  prøve per økt», og sier hvor flervalget bor (inline i prøven eller i den
  interaktive quizen).
- `text` **Forkunnskaper** (porten krever «Forkunnskaper» i alle kapitler
  utenom Del 0).
- Fire `collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med
  nyskrevne oppgaver i eksamens sjangre og full fasit: kort idiomatisk kode,
  poengfordeling, og for sjanger A full sporing (§K6). Statiske flervalg har
  STOKKEDE fasit-bokstaver.
- Etter hver prøvefasit: avkryssbar selvdiagnose-sjekkliste (☐).
- Kap-referanser i fasitene som markdown-lenker.
- Ingen begrepsbank og ingen quizkvote for prøvekapitler.

Prøvekapitler regnes som vurderingskapitler i `sjekk-bok.py` og er derfor
unntatt kravene om «Typiske feil»-warning og API-/symbolliste.

---

## Quiz-kvoten

`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`:

```json
[{ "question": "…", "options": ["riktig", "distraktor", "distraktor", "distraktor"], "explanation": "…" }]
```

Nøyaktig **4 alternativer**, `options[0]` **ALLTID** riktig (runtime stokker
rekkefølgen). Ingen duplikate alternativer.

**Kalibrering (skjelettets dokumenterte avvik):** quizbanken er **direkte
midtveistrening**. Overveiende kodesporing («hva skriver dette ut?»),
indekserings-/slicing-utregning, boolske uttrykk, løkketerminering,
exception-matching og begreps-MC om konstruksjonenes oppførsel. Hvert spørsmål
skal ligne et reelt midtveisspørsmål. Distraktorene er de faktiske fellene fra
feilkatalogen — av-én i `range`, manglende linjeskift ved `end=' '`, liste-
konkatenering der arraysum var ment, `zip` som «fyller ut», slicing som gir
element — aldri tullesvar.

**Kodealternativer og LENGDE-TELL (begge veier).** Fasiten skal IKKE kunne
gjettes på form:

- Alle fire alternativer skal ha **jevn lengde og samme presisjonsgrad**. Måltall
  fra `quiz-lengdesjekk.mjs`: `options[0]` er unikt lengst i **under 30 %** av
  spørsmålene — og, skjerpet for kodefag, unikt **kortest** i under 30 % også.
  En student som velger «det lengste» eller «det korteste» skal treffe ~25 %.
- Er alternativene **utskrifter**, skal alle fire ha samme antall linjer og
  omtrent samme antall tegn. Fire varianter av `0 1 2` skal ikke bestå av én
  tre-linjers og tre én-linjers.
- Er alternativene **kodelinjer**, skal alle fire være syntaktisk plausible og
  omtrent like lange. Ikke la den riktige være den eneste med `range(N+1)` mens
  de tre andre er halvferdige.
- `explanation` (2–4 setninger) sier hvorfor fasiten er riktig OG hvilken felle
  hver nære distraktor tester. Nære distraktorer forklares eksplisitt.
- Skriv kode i spørsmål/alternativer i `` `backticks` `` (én linje) eller i en
  ```-blokk (flere linjer). Dunder og `**` alltid i backticks (§K8).

Kontroll før ferdigmelding: `python3 scripts/hoyskolebok/sjekk-kode.py in1900`
(punkt 9: 4 alternativer, ingen duplikater, lengde-tell begge veier), og etter
wiring `npx tsx scripts/hoyskolebok/quiz-lengdesjekk.mjs in1900`.

### Kvotetabell (AUTORITATIV — fra skjelettets §5 summeringskontroll)

Verifisert 25. juli 2026: alle deltotaler og totalene summerer.

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1 | 12 | 12 | 0 (metadel) |
| 1 | 1.1–1.7 | 150 | 132 | 4 |
| 2 | 2.1–2.2 | 36 | 34 | 4 |
| 3 | 3.1–3.3 | 52 | 46 | 4 |
| 4 | 4.1–4.3 | 48 | 48 | 4 |
| 5 | 5.1–5.5 | 84 | 78 | 4 |
| 6 | 6.1–6.3 | 50 | 44 | 4 |
| 7 | 7.1–7.5 | 78 | 72 | 4 |
| 8 | 8.1–8.3 | 52 | 44 | 4 |
| 9 | 9.1–9.3 | 32 | 0 | 0 (3 øvingseksamener) |
| **Sum** | **35 kap.** | **594 ✓ (≥500)** | **510 ✓ (≥500)** | **32 + 3 ØE** |

Per kapittel (quiz · flashcards) — **minimum, aldri under; overskyting er lov**:

| Kap. | Q · F | Kap. | Q · F | Kap. | Q · F |
|---|---|---|---|---|---|
| 0.1 | 12 · 12 | 4.1 | 20 · 20 | 7.1 | 16 · 16 |
| 1.1 | 22 · 20 | 4.2 | 16 · 14 | 7.2 | 16 · 18 |
| 1.2 | 22 · 20 | 4.3 | 12 · 14 | 7.3 | 14 · 14 |
| 1.3 | 22 · 20 | 5.1 | 18 · 18 | 7.4 | 14 · 12 |
| 1.4 | 18 · 18 | 5.2 | 18 · 20 | 7.5 | 18 · 12 |
| 1.5 | 20 · 20 | 5.3 | 14 · 14 | 8.1 | 18 · 20 |
| 1.6 | 18 · 20 | 5.4 | 12 · 12 | 8.2 | 16 · 14 |
| 1.7 | 28 · 14 | 5.5 | 22 · 14 | 8.3 | 18 · 10 |
| 2.1 | 14 · 16 | 6.1 | 16 · 18 | 9.1 | 20 · 0 |
| 2.2 | 22 · 18 | 6.2 | 18 · 16 | 9.2 | 6 · 0 |
| 3.1 | 14 · 16 | 6.3 | 16 · 10 | 9.3 | 6 · 0 |
| 3.2 | 18 · 18 | | | | |
| 3.3 | 20 · 12 | | | | |

**Bindende total: quiz 594 · flashcards 510.** Flashcards telles som toppnivå
`definition`-blokker med `title` — i dette faget API-/konstruksjonskort: «hva
gjør denne konstruksjonen» / «hva skriver dette ut». Fordelingen speiler
eksamensformen: Del 1 (kodesporing) bærer 150 av 594 quiz fordi midtveis er
100 % flervalg og domineres av sporing. Del 9 har 0 flashcards.

---

## Opphavsrett (ufravikelig)

- Alle oppgaver, kodeeksempler, datafiler, tall, variabelnavn og
  vitenskapelige innpakninger er **NYSKREVNE**. Kodemønstrene er standard
  Python-idiomer (ikke vernet), men ingen oppgavetekst, ingen fasitkode og
  ingen datafil fra et reelt sett gjengis. Skjelettets mønstereksempler er selv
  omskrivninger og skal varieres videre, ikke kopieres ordrett.
- **Det utleverte ODESolver-hierarkiet gjengis ikke.** Boka skriver sin egen
  implementasjon av samme grensesnitt og sier det eksplisitt (§K5).
- Pensumlitteraturen (Langtangen & Sundnes, «A Primer on Scientific Programming
  with Python»; Sundnes, «Solving Ordinary Differential Equations in Python»)
  refereres med forfatter/verk/begrep, aldri sitert i lengde.
- Ingen skjermbilder eller utdrag fra Inspera eller UiOs sider.
- Referanser forfatteren er usikker på merkes `(verifiser)` og løses i fase 3.

---

## Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json; json.load(open('…'))"` på hver fil du har skrevet;
   ingen trailing commas, ingen uescapede `"`/`\`.
2. **Kodeporten grønn:** `python3 scripts/hoyskolebok/sjekk-kode.py in1900` —
   alle ```python-blokker kompilerer, ingen rekursjon, ingen TAB som innrykk,
   ingen forbudte konstruksjoner, «**Utskrift:**» på alle fasit-/teoriblokker
   med `print(`, gammel ODESolver-API bare i Del 7/Del 0, quiz-lengder jevne.
   Dunder-/`**`-treff utenfor kodemarkering er stilmerknader (se §K8.4).
3. **All kode faktisk kjørt** (§K3) — rapportér antall blokker og at
   plottekoden er stubb-verifisert. Utskrift limt inn ordrett.
4. **LaTeX-porten grønn:** `python3 scripts/hoyskolebok/sjekk-latex.py in1900` —
   ingen kontrolltegn utenfor kodeblokker, ingen KaTeX-feil, ingen løs
   backslash, ingen gåseøyne eller bart `%` i matte, balanserte `$`.
5. **Kvotetelling** mot kvotetabellen over (autoritativ, total 594/510):
   toppnivå `definition`-blokker med `title` + antall quizspørsmål per fil.
6. **Forbudt-termer-grep = 0** (regexen over) + rekursjonsprosa-grepet = 0.
7. **Kryssbok-lenker** peker på eksisterende filer (tabellen over); interne
   kap-referanser er markdown-lenker; ingen lenke til `r2-1-7`.
8. **Læringsløkke:** `content[]` veksler teori → eksempel → oppgave i løkker med
   `exercise`-blokker INLINE. Unntak: prøve-/øvingseksamenkapitler.
9. **Forkunnskapsdekning:** hver `exercise` bruker bare konstruksjoner
   introdusert tidligere i kapitlet eller i en referert forkunnskap — gå
   gjennom oppgavene dine med skjelettets kapittelrekkefølge i hånden.
10. **Nybegynner-inngang:** alle sjangerkoder (A–O), feilkoder (#1–#24),
    karakterbokstaver, eksamens-metaspråk og API-/programmeringstermer forklart
    ved første bruk (feilkoder: per kapittel); ingen kald kode i
    `competenceGoals` eller første tekstboks; kap. 0.1 har «Slik leser du denne
    boka»-boksen (type `text`/`tip`, ALDRI `definition`) + kodemønster-minimum.
11. **API-standard:** `f(t, u)` + `solve(t_span, N)` overalt; hver ODE-oppgave
    har `warning` om API-driften; Del 7 har collapsiblen med begge variantene og
    egen-implementasjons-forbeholdet.
12. **Rekursjonsadvarsel** finnes i 3.2, 3.3, 6.2, 6.3 og Del 7.
13. **Delvis-riktig-poenggiving:** alle løsningsforslag i drill- og
    eksamenstreningskapitler markerer hva som gir uttelling steg for steg, og
    sier at riktig struktur belønnes selv med indeksfeil.
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
18. **Frekvenstall** = skjelettets tall for NETTOPP dette kapitlet; kildenoten
    nevner kun kildetypene i EKSAMENSANALYSE §8, og «offisielle
    løsningsforslag» — ikke «sensorveiledninger» som egen dokumenttype.
19. **Deloppgaveformat:** a), b), c) på egen linje med `**a)**`; ingen
    `subTasks`; sjanger-/nivåparentes som ledende tag, ikke i brødteksten.
20. **Øktmerking:** kapitler > 45 min har løkke-tidsanslag eller pausepunkter;
    prøvekapitler deklarerer «4 prøver à ~X min» + deling over flere kvelder.
21. **Juridisk:** innholdet fremstiller seg ALDRI som offisielt eller
    UiO-tilknyttet og lover aldri eksamensutfall.
22. Rapportér kort: filer skrevet, kvotestatus per kapittel, portstatus (kode +
    LaTeX + json), antall kodeblokker kjørt, og alt du har måttet merke
    `(verifiser)`.
