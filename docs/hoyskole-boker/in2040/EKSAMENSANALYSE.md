# Eksamensanalyse: IN2040 Funksjonell programmering (UiO)

> Grunnlagsdokument for eksamensrettet lærebok. All oppgavetekst er omskrevet/parafrasert — ingen ordrett gjengivelse av UiO-materiale. Kodeeksempler er korte, generiske Scheme-idiomer som brukes til å illustrere sjangeren, ikke kopier av fasit.
> Emnet er **AKTIVT** (undervises høst 2025 og høst 2026 ved UiO, IFI). 10 studiepoeng. Tidligere emnekode: **INF2810** (samme fag, byttet kode ~2018). Pensumbok: **SICP** — Abelson & Sussman, *Structure and Interpretation of Computer Programs*. Språk: **Scheme (R5RS)**, kjørt i Racket/DrRacket.

## Evidensgrunnlag og ærlighet om kildene

Dette er et **lite og delvis utilgjengelig arkiv** — les prognosene med det i mente.

**Hva jeg faktisk har lest i sin helhet (primærkilder):**
| Sett | Type | Status |
|---|---|---|
| INF2810 vår 2014 | Full oppgavetekst + fullt løsningsforslag | Lest i sin helhet |
| INF2810 vår 2015 | Fullt løsningsforslag (oppgavene rekonstruert fra fasit) | Lest i sin helhet |
| INF2810 vår 2016 | Full oppgavetekst | Lest i sin helhet |
| IN2040 prøveeksamen | Fullt løsningsforslag/kommentarer (Velldal & Oepen) | Lest i sin helhet |

**Hva som IKKE var tilgjengelig:**
- De seks filene i det lokale arkivet (`~/Desktop/Eksamner/UiO/IN2040/IN2040_2015…2020.pdf`) var **ikke ekte PDF-er** — de er lagrede HTML-sider (404-sider for 2015/2016, nedlastings-«landingssider» for 2017–2020). De inneholder null oppgaveinnhold.
- De ekte PDF-URL-ene disse pekte på gir i dag **HTTP 404** hos UiO. Reelle eksamener 2017–2023 ligger nå bak innlogging på `github.uio.no/IN2040` (Feide-beskyttet, utilgjengelig).
- 2014/2016-oppgavene og 2015-fasiten ble reddet via **Wayback Machine** (arkiverte kopier). Prøveeksamen-fasiten lå fortsatt åpent hos UiO.

**Konsekvens for evidensstyrke:** De fire settene jeg har er alle fra **INF2810-æraen (2014–2016) + en IN2040-prøveeksamen**. Pensum har vært stabilt siden en større omlegging i 2013 (UiO opplyser selv at eksamener eldre enn 2013 ikke er representative), og faget er kun *omdøpt* fra INF2810 til IN2040 — prøveeksamenen er merket «IN2040» og signert samme fagansvarlige. **Strukturen er påfallende lik på tvers av alle fire sett.** Jeg vurderer derfor mønsteret som robust for temaidentifikasjon og oppgavesjangre, men **gjenganger-scorene bygger på n=4 og bør leses som «sterk indikasjon», ikke fasit.** Bør reverifiseres mot 2018–2023-settene når disse blir tilgjengelige.

---

## 1. Eksamensform og utvikling

**Dagens form:** 4 timers **skriftlig digital eksamen** i Inspera. **Ingen hjelpemidler.** Karakter A–F. Obligatoriske innleveringer må være godkjent for å gå opp. Summen av delpoeng er normert til **100 poeng** per sett.

**Formatet er en blanding av tre svartyper — IKKE flervalg:**

1. **Kodeskriving i Scheme (R5RS)** — den klart dominerende sjangeren. Studenten skriver komplette prosedyrer fra bunnen. Typisk 55–70 % av poengene.
2. **Kodesporing / evaluering** — «hva evaluerer dette til?», tegn **boks-og-peker-diagram**, tegn **omgivelsesdiagram**, «hvor mange cons-celler genereres?». Bruker notasjonen `uttrykk → verdi`. Typisk 15–25 %.
3. **Kort teori/essay** — «forklar med en setning eller to», «ikke skriv mer enn en halv side». Om paradigmer, evalueringsstrategier, funksjonell vs. ikke-funksjonell kode. Typisk 10–20 %.

> Merk kontrasten til IN1000: **IN2040 har ingen flervalgsdel.** Alt er produksjon (skrive kode) eller sporing/forklaring. Dette hever kravet til aktiv beherskelse — man kan ikke gjenkjenne seg til svaret.

**Rubrikk-instrukser som gjentas i innledningen hvert år (omskrevet):**
- «Les hele oppgaveteksten før du begynner.»
- «Mangler du informasjon, gjør egne antakelser og redegjør for dem.»
- «Kode forventes i Scheme etter R5RS slik brukt gjennom semesteret. Husker du ikke eksakt syntaks eller prosedyrenavn, er **pseudokode med kommentarer bedre enn ingenting**.»
- «→ brukes for å angi verdien et uttrykk evaluerer til.»

**Utvikling 2014 → prøveeksamen (IN2040):** Nær identisk seksjonsstruktur. Tydelige faste «slots»: (1) par/lister + mutasjon, (2) et «mysterium» (kodeforståelse), (3) en stor rekursjons-/idiom-seksjon der samme prosedyre skrives i flere varianter, (4) en stor innkapslings-/OO-seksjon med lokal tilstand, (5) en strøm-seksjon, (6) en teori-/evalueringsstrategi-avslutning. Poengvektene flyttes litt mellom år, men temaene går igjen.

---

## 2. Temafrekvens (gjenganger-score)

Score = antall av de 4 leste settene der temaet er testet med minst én deloppgave. Poengvekt = typisk andel av settet.

| # | Tema | Score | Typisk poengvekt | Sjanger |
|---|---|---|---|---|
| 1 | **Par, lister, box-og-peker, mutasjon** (`cons`/`car`/`cdr`, `set-car!`/`set-cdr!`, strukturdeling) | **4/4** | 10–16 p | Sporing + kode |
| 2 | **Rekursjon: funksjonell vs. halerekursiv + prosesstype** (rekursiv/iterativ/trerekursiv prosess) | **4/4** | Gjennomgripende | Kode + kort svar |
| 3 | **Destruktiv vs. funksjonell versjon + cons-celle-telling** (skriv samme prosedyre begge veier) | **4/4** | 20–27 p | Kode + analyse |
| 4 | **Strømmer / lazy** (`cons-stream`, `stream-car/cdr`, `stream-filter`, uendelige strømmer, utsatt evaluering) | **4/4** | 12–20 p | Kode + forklaring |
| 5 | **Høyereordens prosedyrer** (`map`/`filter`/`for-each`, `compose`, egne HOF-er) | **4/4** | 6–14 p | Kode |
| 6 | **Closures / lokal tilstand / innkapsling / message passing / prosedyrebasert OO** | **4/4** | 17–25 p | Kode (tung) |
| 7 | **Evalueringsstrategier** (eager/applicative-order vs. lazy/normal-order, memoisering, call-by-*) | **4/4** | 7–16 p | Teori |
| 8 | **Omgivelsesmodell / environment-diagram + `set!`** | **3/4** | 10 p | Sporing (tegning) |
| 9 | **Teori: hva kjennetegner funksjonell kode / funksjonell vs. ikke-funksjonell** | **3/4** | 6–12 p | Essay |
| 10 | **«Mysterium» — kodeforståelse** (forklar hva en gitt HOF gjør + gi kalleksempel) | **2/4** (fast slot) | 6 p | Kort svar |
| 11 | **`let`/`lambda`/`let*` og desugaring/scope** | **2/4** | 7 p | Kode/omskriving |
| 12 | **Data som kode / `apply` / datastyrt** (`eval-infix`, tabeller) | **2/4** | ~4–6 p | Kode |
| 13 | **Metasirkulær evaluator** (kap. 4 SICP) | **0/4 som koding; 4/4 som teori-referanse** | Del av #7 | Kun konseptuelt |

**Viktig nyanse om den metasirkulære evaluatoren:** Fagbeskrivelsen og forelesningene vektlegger den tungt (egen tolker i Scheme, kap. 4). Men i de fire settene jeg har blir studenten **aldri bedt om å skrive evaluator-kode**. Den dukker opp *konseptuelt* i evalueringsstrategi-oppgavene: «forklar hvordan den metasirkulære evaluatoren kunne endres til å implementere lazy evaluation, og hvorfor memoisering da ble relevant». Dette er en ærlig, viktig prioriterings-innsikt: forstå evaluatoren godt nok til å **resonnere om** eval-strategier, men bruk ikke mest tid på å pugge selve evaluator-koden. (Reverifiser mot 2018–2023 — makroer/evaluator kan ha fått større koding-vekt i nyere sett.)

**Terminologi-tetthet:** Sensor belønner eksplisitt bruk av kursterminologi. Ord som går igjen i fasit og oppgavetekst: *strukturdeling, halerekursjon, trerekursiv prosess, iterativ prosess, spesialform, utsatt evaluering, applicative-order/normal-order, memoisering, message passing, lokal tilstand, side-effekt, ren funksjonell.*

---

## 3. Oppgavetype-katalog (sjangre)

### A. Box-og-peker + mutasjon (fast åpning, ~10–16 p)
En kort sekvens med `define`, `cons`, `set-car!`, `set-cdr!`, `set!`. Oppgave: tegn diagrammet etter siste uttrykk, og oppgi print-verdien på REPL. Kjernepoeng: **strukturdeling** — to variabler som deler samme cons-celler oppfører seg ulikt fra to like-utseende, men separate strukturer. Ofte en delspørsmål: «hvilke innebygde prosedyrer må inn på `???`-plassene for at uttrykket blir `#t`?»

### B. «Mysterium» — kodeforståelse (fast slot, 6 p)
En liten, navnløs HOF/predikat gis. Oppgave: forklar hva den gjør *med kursterminologi*, og gi et selvvalgt kalleksempel med returverdi. Løsningene i arkivet er ting som «returnerer `#t` hvis alle elementer tester sant» (∀) eller «`filter` som beholder elementer som tester sant».

### C. Skriv rekursiv prosedyre over (evt. nøstet) liste
`nested-count`, `deep-map`, `take`, `drop`. Nesten alltid med oppfølging: «hva slags **prosess** genererer implementasjonen din?» (rekursiv / iterativ / trerekursiv). Nøstede lister ⇒ trerekursjon over både `car` og `cdr`.

### D. «Samme prosedyre i flere idiomer» (den store rekursjons-seksjonen, 25–27 p)
Kjernesjangeren i faget. Én enkel spesifikasjon (`scale`, `replace`, `transform-if`) skal skrives som:
- (a) **rent funksjonell, halerekursiv** (akkumulator + `reverse`, eller intern `iter`)
- (b) **rent funksjonell, vanlig (ikke-hale) rekursjon** (`cons` foran rekursivt kall)
- (c) **med høyereordens sekvensoperasjon** (`map`/`filter`)
- (d) **destruktiv** (`set-car!`/`set-cdr!`, gjenbruker cons-celler, lager ingen nye)
- (e) **strømversjon** (`cons-stream` + `stream-car/cdr`)
- (f) **cons-celle-telling**: hvor mange `cons` utløses av hver variant? (Destruktiv = 0; strøm = typisk 1 pga. utsatt evaluering av `cdr`.)

### E. Egne høyereordens prosedyrer
`compose` (returnerer prosedyre), `repeat`/`iterate` (bygget på `compose`, rekursjon over antall), `stream-filter`, `transform-if`. Tester at studenten kan **returnere en `lambda`** og bygge abstraksjoner av abstraksjoner.

### F. Innkapsling / lokal tilstand / prosedyrebasert OO (den store OO-seksjonen, 17–25 p)
Tyngste enkeltoppgave. Skriv en «objekt-konstruktør» som returnerer en `lambda` (eller `let` over `lambda`) med **innkapslet lokal tilstand** endret via `set!`. Eksempler fra arkivet:
- `make-accumulator` — `'add`/`'sub`/`'undo` (undo krever historikk av tilstander)
- `make-card` (kaffekort) — saldo, pris, bonus hver n-te kopp gratis (`quotient`/`remainder`), **message passing** med variabelt antall argumenter, skjult bak et rent grensesnitt (`card-order`, `card-value`)
- `make-queue`, `monitor` (teller kall på en prosedyre, `'count`/`'zero`/`'reset`, `apply` på variadiske argumenter)
- `cons`/`car`/`cdr` reimplementert *utelukkende med closures* (Church-aktig): `(define (cons x y) (lambda (m) …))`

Sensorkrav for full pott på slike (fra prøveeksamen-fasit): lokal tilstand (ikke globale variabler), støtte for **vilkårlig antall argumenter** (variadisk `lambda arguments` + `apply`), alle beskjeder implementert, og gjenoppretting av opprinnelig tilstand der bedt om.

### G. Omgivelsesdiagram (10 p)
Gis en sekvens med `define`, en `lambda` som fanger fri variabel, et `make-X` som lager closure, og noen `set!`-kall. Tegn **alle rammer og bindinger** etter at hele sekvensen er evaluert. Tester leksikalsk scope + hvordan closures peker til definisjonsrammen.

### H. Strømmer og uendelige sekvenser (12–20 p)
`stream-filter`, `stream-range`, `stream-eratosthenes` (Sieve of Eratosthenes uendelig), `same-fringe?`-strømvariant. Faste delspørsmål: «hvorfor trengs øvre grense `n` i listevarianten, men ikke i strømvarianten?» (svar: `cons-stream` er spesialform ⇒ utsetter `cdr` ⇒ uendelig sekvens OK). Og «hvor mange cons-celler / når lønner strømmen seg?» (avbryter tidlig hvis forskjell finnes).

### I. Evalueringsstrategier (teori, 7–16 p)
Forklar eager/applicative-order vs. lazy/normal-order. Motivasjon for memoisering (call-by-need vs. call-by-name). Hvorfor memoisering var *irrelevant* under applicative-order. Rollen til `delay`/`cons-stream` som spesialformer. Kobling til den metasirkulære evaluatoren.

### J. «Hva kjennetegner funksjonell kode?» (essay, 6–12 p)
Ren funksjon = kalles for returverdien, samme argumenter gir alltid samme verdi, ingen side-effekter, uavhengig av evalueringstidspunkt. Kontrast mot tilstandsavhengige prosedyrer.

### K. `let`/`lambda`-desugaring (7 p)
Skriv om `let`-uttrykk til ekvivalent `lambda`-applikasjon, og oppgi returverdi/effekt. Tester forståelse av at `let` er syntaktisk sukker.

---

## 4. Sensorens krav

Utledet av fasitkommentarene (særlig prøveeksamen-fasit, som eksplisitt lister «ting som må være på plass for full pott»).

**Metaregler i innledningen (hvert år):**
- Egne antakelser er tillatt — men **må redegjøres for**.
- **Pseudokode med kommentarer gir delpoeng**; blankt gir null. Ikke la manglende syntaks-minne stoppe deg.

**Stil og poenggivning:**
- **Terminologi belønnes.** Fasit sier ting som «forsøk å ta i bruk terminologi kjent fra kurset». Bruk *strukturdeling, halerekursjon, spesialform, utsatt evaluering, applicative-/normal-order, message passing* aktivt.
- **Prosesstype-spørsmål** («hva slags prosess?») krever presist svar: *iterativ* (halerekursjon), *(lineær/tre-)rekursiv*, med begrunnelse i om det finnes utsatte operasjoner.
- **Cons-celle-telling** må begrunnes: destruktiv = 0 nye celler; strøm = én cons (resten utsatt); funksjonell rekursjon = én per element.
- **Full pott på closure-oppgaver** krever: lokal (ikke global) tilstand, variadisk argumenthåndtering (`apply`), alle beskjeder, og korrekt gjenoppretting.
- Flere gyldige løsninger godtas («løsningsforslagene er nettopp forslag»). Sensor ser etter *riktig idiom og prosesstype*, ikke ett fasitsvar.
- Diagrammer teller: box-og-peker og omgivelsesdiagram må vise **deling/identitet** korrekt (`eq?`-relasjoner), ikke bare print-verdien.

**Typisk fallgruve sensor straffer:** å levere en løsning som gir riktig print-verdi men feil *struktur* (f.eks. lager nye celler der destruktiv gjenbruk var poenget), eller feil *prosesstype* (tror noe er halerekursivt når `cons` foran det rekursive kallet gjør det ikke-halerekursivt).

---

## 5. Typiske feil (utledet av fasit og distraktorer)

1. **Blander halerekursjon og vanlig rekursjon.** `(cons x (rec …))` er IKKE halerekursivt — det utestående `cons`-kallet gjør prosessen rekursiv. Halerekursjon krever at det rekursive kallet er *det ytterste* (akkumulator-mønster).
2. **Feil om strukturdeling.** To `(list 'a 'b)` gir separate strukturer; `(let ((foo (list 'a 'b))) (cons foo foo))` deler. `set-car!` på delt struktur endrer begge «synene».
3. **Glemmer at `cons-stream` er en spesialform.** Tror en rekursiv strøm-definisjon uten basistilfelle looper uendelig — men `cons-stream` utsetter andre-argumentet, så det går bra. Motsatt: bruker vanlig `cons` der `cons-stream` trengs ⇒ uendelig løkke.
4. **`ones`/`integers`-fella:** `(define ones (cons-stream 1 ones))` virker (utsatt selvreferanse), men `(define integers (add-streams ones integers))` feiler — `add-streams` er vanlig prosedyre og prøver å evaluere `integers` før den er definert.
5. **Destruktiv versjon lager likevel nye celler.** Poenget er 0 nye `cons`; bruk `set-car!`/`set-cdr!` på eksisterende struktur.
6. **Memoisering forvekslet med lazy generelt.** Lazy = utsatt; memoisering (call-by-need) = evaluer *maks én gang*. Under applicative-order er memoisering irrelevant fordi alt evalueres uansett straks.
7. **Message passing uten variadisk håndtering.** Objekter som må ta ulikt antall argumenter per beskjed krever `(lambda arguments …)` + `apply`, ikke fast arity.
8. **Omgivelsesdiagram: closure peker feil.** En `lambda` fanger sin *definisjonsramme* (leksikalsk), ikke kall-rammen.
9. **`let` vs. `let*`:** `let` binder parallelt (kan ikke se hverandre); `let*` sekvensielt. Feil valg gir «unbound variable».

---

## 6. API-/konstruksjonsapparat

### Må beherskes aktivt (skrive fra bunnen, uten oppslag)
- **Par/lister:** `cons`, `car`, `cdr`, `cadr`/`caddr`/`cddr`, `list`, `null?`, `pair?`, `list?`, `append`, `reverse`, `length`, `map`, `filter`, `for-each`
- **Mutasjon:** `set!`, `set-car!`, `set-cdr!`
- **Predikater/likhet:** `eq?`, `equal?`, `=`, `zero?`, `null?`, `odd?`/`even?`
- **Kontroll/binding:** `define` (også intern/nøstet), `lambda`, `let`, `let*`, `if`, `cond`, `and`, `or`, `begin`, `quote`/`'`
- **Variadisk:** dot-notasjon `(lambda (first . rest) …)` og `(lambda args …)`, `apply`
- **Tall:** `quotient`, `remainder`, aritmetikk
- **Strømmer (SICP-grensesnittet):** `cons-stream`, `stream-car`, `stream-cdr`, `stream-null?`, `the-empty-stream`, og å *implementere* `stream-filter`/`stream-map`/`stream-append`/`stream-range` selv
- **Rekursjonsmønstre:** halerekursiv `iter` med akkumulator; vanlig rekursjon med `cons` foran; trerekursjon over nøstede lister
- **HOF-mønstre:** returnere `lambda`; `compose`; message passing med `let`/`lambda` og lokal `set!`-tilstand

### Bør kjenne til (lavfrekvent / differensierer)
- `delay`/`force` (grunnlaget under `cons-stream`), memoisering
- Den metasirkulære evaluatorens hovedstruktur (`eval`/`apply`, environment som ramme-liste) — **for å resonnere**, sjelden for å kode
- `assoc`, tabeller/datastyrt programmering, `error`

### Skal ikke prioriteres (utenfor eksamensfokus i arkivet)
- Å skrive en fullstendig metasirkulær evaluator fra bunnen (dukket ikke opp som koding i de fire settene — men reverifiser mot 2018–2023)
- Makrosystemer i detalj (nevnt i fagbeskrivelsen, ikke sett som eksamensoppgave i arkivet)
- Numerikk / avanserte datastrukturer utenfor lister og strømmer

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (avgjør karakteren, ~70 % av poengene)
1. **Skrive samme prosedyre i alle idiomer** (halerekursiv / rekursiv / HOF / destruktiv / strøm) og **telle cons-celler** — den store seksjonen finnes i alle fire sett (25–27 p).
2. **Closures / lokal tilstand / message passing** — den store OO-seksjonen, alle sett (17–25 p). Øv `make-accumulator`, `make-card`-typen, `monitor`, kø/stakk, variadiske objekter.
3. **Box-og-peker + mutasjon + strukturdeling** — fast åpning, alle sett.
4. **Prosesstype-analyse** (rekursiv/iterativ/trerekursiv) — følger nesten hver kodeoppgave.
5. **Strømmer** — implementere `stream-filter` o.l., uendelige sekvenser, forklare hvorfor øvre grense forsvinner.

### Nivå 2 — må kunne (differensierer)
6. **Omgivelsesdiagram** med `set!` og closures (10 p, tegning).
7. **Evalueringsstrategier**-teori: eager vs. lazy, memoisering, call-by-need/name/value.
8. **Egne HOF-er** (`compose`, `repeat`) og «mysterium»-kodeforståelse.
9. **`let`→`lambda`-desugaring** og `let`/`let*`-scope.

### Nivå 3 — bør kjenne til (toppkarakter / robusthet)
10. Funksjonell-kode-essay (hva kjennetegner ren funksjon).
11. Metasirkulær evaluator konseptuelt (koble til lazy-modifikasjon).
12. Datastyrt programmering / `apply` / tabeller.

### Prognose for neste eksamen (n=4, sterk indikasjon — reverifiser mot 2018–2023)
Forvent et sett på ~6 seksjoner à 100 poeng med denne skjelettstrukturen:
1. Par/lister + mutasjon + box-og-peker (~10 p)
2. «Mysterium»-kodeforståelse (~6 p)
3. Stor rekursjons-/idiom-seksjon: én prosedyre i mange varianter + cons-telling (~25 p)
4. Stor innkapslings-/OO-seksjon med lokal tilstand og message passing (~20–25 p)
5. Strøm-seksjon med uendelige sekvenser (~15–20 p)
6. Teori: funksjonell kode og/eller evalueringsstrategier (~10–12 p)

Sannsynlig innslag av omgivelsesdiagram (enten egen seksjon eller integrert i OO-seksjonen).

---

## 8. Anbefalt arketype for læreboka

**Arketype: «Idiom-drillen» — bygg boka rundt Nivå-1-ferdighetene, med SICP-progresjonen som ryggrad.**

Faget belønner ikke faktakunnskap, men **flytende beherskelse av et lite sett idiomer brukt om og om igjen**. Anbefalt kapittelrekkefølge (speiler både SICP og eksamensvekten):

1. **Scheme-grunnlag:** `define`/`lambda`/`let`/`let*`, `cond`/`if`, quote, prosedyre vs. prosess. Desugaring `let`→`lambda`.
2. **Rekursjon og prosesser:** vanlig vs. halerekursjon, iterativ vs. rekursiv vs. trerekursiv prosess, akkumulator-mønster. *Med prosesstype-spørsmål i hver oppgave.*
3. **Lister og par:** `cons`/`car`/`cdr`, box-og-peker, `map`/`filter`/`fold`/`for-each`, nøstede lister og trerekursjon.
4. **Høyereordens prosedyrer:** returnere `lambda`, `compose`, egne sekvensoperasjoner, «mysterium»-lesetrening.
5. **Mutasjon og strukturdeling:** `set-car!`/`set-cdr!`, destruktive vs. funksjonelle versjoner, cons-celle-telling. *Kjør «samme prosedyre i alle idiomer»-øvelsen eksplisitt som gjennomgående format.*
6. **Lokal tilstand og innkapsling:** `set!`, closures, message passing, prosedyrebasert OO, variadiske objekter (`apply`). Den tyngste kapittel-øvelsesbolken.
7. **Omgivelsesmodellen:** rammer, bindinger, leksikalsk scope, tegne diagrammer.
8. **Strømmer og utsatt evaluering:** `delay`/`force`, `cons-stream`, uendelige strømmer, `stream-filter`, Eratosthenes.
9. **Evalueringsstrategier og den metasirkulære evaluatoren:** eager vs. lazy, memoisering, `eval`/`apply`, hvordan modifisere for lazy — *konseptuelt tungt, koding lett.*

**Pedagogisk grep gjennom hele boka:** For hver ny prosedyre-oppgave, still de tre faste eksamensspørsmålene — (a) *hvilken prosesstype?* (b) *hvor mange cons-celler?* (c) *er dette rent funksjonelt eller har det side-effekter?* Dette er nøyaktig sensor-refleksene faget måler.

Hvert kapittel bør avslutte med en «skriv-den-i-fem-varianter»-oppgave og en closure-/objekt-oppgave, siden det er der 50 %+ av eksamenspoengene ligger.

**Minimumskrav (per prosjektstandard):** ≥500 quiz-spørsmål og ≥500 flashcards fordelt på temaene over (tyngdepunkt på idiom-drillen, closures og strømmer), ≥4 kapittelprøver per hovedtema, og en studieguide som dekker alle ni kapitler med kjørbare Scheme-eksempler.

---

## Kildeliste

- **Primærkilder (lest i sin helhet):**
  - INF2810 vår 2014 — oppgavesett + løsningsforslag (via Wayback Machine, opprinnelig `uio.no/…/INF2810/v16/oppgaver/`)
  - INF2810 vår 2015 — løsningsforslag (via Wayback Machine)
  - INF2810 vår 2016 — oppgavesett (via Wayback Machine)
  - IN2040 prøveeksamen — «Kommentarer til prøveeksamen», Erik Velldal & Stephan Oepen, UiO (`uio.no/…/IN2040/h21/foiler/13_svar_print.pdf`)
- **Fagbeskrivelse:** UiO emnebeskrivelse IN2040 — <https://www.uio.no/studier/emner/matnat/ifi/IN2040/> (omskrevet i `scratchpad/fagbeskrivelse-in2040.md`)
- **Eksamensarkiv-oversikt:** UiO «Tidligere eksamensoppgaver» — <https://www.uio.no/studier/emner/matnat/ifi/IN2040/h24/eksamensoppgaver.html> (2017–2023 nå bak `github.uio.no/IN2040`, Feide)
- **Pensumbok:** Abelson, Sussman & Sussman, *Structure and Interpretation of Computer Programs* (SICP), 2. utg. — særlig kap. 1 (prosesser), 2 (data/lister), 3.1–3.3 (tilstand/mutasjon), 3.5 (strømmer), 4.1 (metasirkulær evaluator), 4.2 (lazy).
- **NB — ubrukelig lokalt arkiv:** `~/Desktop/Eksamner/UiO/IN2040/IN2040_2015…2020.pdf` er lagrede HTML-sider (404/landingssider), ikke ekte eksamener. Ekte innhold hentet via URL-ene over.

> **Evidensforbehold:** Analysen bygger på 4 sett fra 2014–2016-æraen + IN2040-prøveeksamen. Pensum har vært stabilt siden 2013 og faget er kun omdøpt fra INF2810, men gjenganger-scorene bør reverifiseres mot 2018–2023-settene når `github.uio.no/IN2040`-arkivet blir tilgjengelig.
