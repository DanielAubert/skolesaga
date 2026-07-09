# Bokskjelett: IN2040 Funksjonell programmering (UiO) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i
> kapitlet eller i eksplisitt refererte forkunnskaper (flytt teoribiten
> tidligere ved behov). Autoritativ kilde: README «Leserkrav» + arketypens
> DNA-fil. Unntak: øvingseksamen-/prøve-/modellbesvarelseskapitler følger sin
> egen arketype (komplett sett først, løsninger i collapsibles). Kvotene og
> innholdskontraktene i dette skjelettet er uendret — løkka styrer REKKEFØLGEN.


> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md`. Arketype: **DNA-regnefag** (`DNA-regnefag.md`),
> kodefag-tilpasset — kapittel-DNA-ene der (teori/drill/øvingseksamen) er
> obligatoriske og gjentas ikke i sin helhet her. Alle kodeeksempler, prosedyrer,
> domener og oppgavetekster i den ferdige boka skal være **nyskrevne**
> (opphavsrett): kodemønstrene er standard Scheme/R5RS-idiomer, men prosedyrenavn,
> spesifikasjoner, domeneinnpakning og oppgavetekster skal være forfatterens egne.

> ### KRITISK EVIDENSFORBEHOLD (les før du bygger)
> Analysen bygger på **n = 4 sett**: INF2810 vår 2014/2015/2016 (reddet via Wayback
> Machine) + IN2040-prøveeksamen (fasit av Velldal & Oepen). Det lokale arkivet var
> **ubrukelig** (404-HTML, ikke ekte PDF-er); 2017–2023-settene ligger bak Feide.
> Faget er **kun omdøpt** fra INF2810 til IN2040 (samme fagansvarlige, samme
> pensum-SICP), og pensum har vært stabilt siden en omlegging i 2013 →
> mønsteret vurderes som **sterk indikasjon**, men gjenganger-scorene bør
> reverifiseres mot 2018–2023 når arkivet blir tilgjengelig. **Alle usikre
> vektings-/frekvensdetaljer merkes `(verifiser)` i den ferdige boka.** Særlig:
> at den **metasirkulære evaluatoren aldri testes som koding** (kun konseptuelt)
> bygger på n = 4 og merkes `(verifiser mot 2018–2023 — kan ha fått kodingsvekt)`.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `in2040` |
| Tittel | **IN2040 Funksjonell programmering (UiO)** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | UiO — visningsnavn «IN2040 Funksjonell programmering» |
| Arketype | Regnefag / kodefag (kvantitativt kodefag med fast, gjentakende idiom-drill) |
| Antall kapitler | **37** (2 eksamenskart + 32 tema/drill + 3 øvingseksamener) |
| Estimert totaltid | **≈ 2 500 min ≈ 42 timer** |
| Quiz totalt | **576** (krav ≥500 — GULV) |
| Flashcards totalt | **528** (krav ≥500 — GULV) |

**Pitch (ett avsnitt):** IN2040 belønner ikke faktakunnskap, men **flytende
beherskelse av et lite sett Scheme-idiomer brukt om og om igjen**. Vurderingen er
**én 4-timers skriftlig digital Inspera-eksamen, INGEN hjelpemidler**, A–F, normert
til **100 poeng**, og **uten en eneste flervalgsoppgave** — alt er produksjon
(skrive Scheme-kode fra bunnen) eller sporing/forklaring. Settet er påfallende
stabilt på tvers av alle fire kjente sett, med faste «slots»: **(1)** box-og-peker
+ mutasjon + strukturdeling (~10–16 p), **(2)** et «mysterium» (kodeforståelse,
~6 p), **(3)** den store rekursjons-/idiom-seksjonen — *samme prosedyre skrevet i
fem varianter + cons-celle-telling* (25–27 p, **signaturoppgaven**), **(4)** den
store innkapslings-/OO-seksjonen med lokal tilstand og message passing (17–25 p),
**(5)** en strøm-seksjon med uendelige sekvenser (12–20 p), og **(6)** en
teori-avslutning om funksjonell kode og/eller evalueringsstrategier (~10–12 p).
Miksen er **kodeskriving ~55–70 %**, **kodesporing ~15–25 %** (box-og-peker,
omgivelsesdiagram, cons-telling) og **kort teori/essay ~10–20 %**. Boka driller
disse idiomene til automatikk med SICP-progresjonen som ryggrad, og planter tre
faste sensor-reflekser etter hver eneste kodeoppgave.

**Det gjennomgående pedagogiske grepet — «DE TRE REFLEKSENE»:** For hver
prosedyre-oppgave i hele boka stilles de tre faste eksamensspørsmålene, som en
`tip`-blokk med fast tittel **«De tre refleksene»** rett etter løsningen:
1. **Hvilken PROSESSTYPE?** — rekursiv / iterativ (halerekursiv) / trerekursiv,
   *begrunnet* i om det finnes utestående (utsatte) operasjoner.
2. **Hvor mange CONS-CELLER genereres?** — begrunnet: destruktiv = 0 nye; vanlig
   funksjonell rekursjon = én per element; strøm = én (resten utsatt).
3. **Rent FUNKSJONELT eller SIDE-EFFEKTER?** — kalles prosedyren for returverdien
   (samme argumenter → samme verdi, ingen effekt), eller endrer den tilstand?

Dette er nøyaktig de tre sensor-refleksene faget måler. De innføres i kap. 0.2 og
er **obligatoriske i hvert kode-kapittel** (teori og drill). Terminologien i svarene
belønnes eksplisitt av sensor — se stilregel 1.

**Kritiske stilregler (gjelder HELE boka — sensors faktiske krav):**
1. **Terminologi belønnes — bruk den aktivt.** Fasit sier eksplisitt «forsøk å ta i
   bruk terminologi kjent fra kurset». Følgende ord skal brukes presist og ofte i
   all teori og alle løsningsforslag: *strukturdeling, halerekursjon, iterativ
   prosess, (lineær/tre-)rekursiv prosess, spesialform, utsatt evaluering,
   applicative-order/normal-order, memoisering, message passing, lokal tilstand,
   side-effekt, ren funksjonell, closure/omslutning, leksikalsk scope.* Hvert
   teorikapittel skal introdusere sine termer i `definition`-blokker (→ flashcards)
   og bruke dem i «De tre refleksene».
2. **Pseudokode gir delpoeng — blankt gir null.** Rubrikk-instruks hvert år: «Husker
   du ikke eksakt syntaks eller prosedyrenavn, er pseudokode med kommentarer bedre
   enn ingenting.» Skal stå i Del 0 og prege alle løsningsforslag: vis **idéen og
   prosesstypen** selv når syntaksen svikter; stå aldri fast.
3. **Egne antakelser tillates — men MÅ redegjøres for.** Ved underspesifikasjon:
   gjør en rimelig antakelse og skriv den i en kommentar. Skal stå i Del 0.
4. **Struktur/identitet teller, ikke bare print-verdien.** Sensors typiske fallgruve-
   straff: en løsning som gir riktig print-verdi men **feil struktur** (lager nye
   celler der destruktiv gjenbruk var poenget) eller **feil prosesstype** (tror noe
   er halerekursivt når `cons` foran det rekursive kallet gjør det rekursivt). Box-og-
   peker og omgivelsesdiagram må vise **deling/identitet** (`eq?`-relasjoner) korrekt.
5. **Full pott på closure-/OO-oppgaver krever fire ting:** (a) **lokal** tilstand
   (ikke globale variabler), (b) støtte for **vilkårlig antall argumenter**
   (variadisk `(lambda args …)` + `apply`), (c) **alle** beskjeder implementert,
   (d) korrekt **gjenoppretting** av opprinnelig tilstand der bedt om. Egen
   `warning` **«Closure-fella: lokal, ikke global tilstand»** i Del 7.
6. **Flere gyldige løsninger godtas.** Fasit sier «løsningsforslagene er nettopp
   forslag». Sensor ser etter **riktig idiom og prosesstype**, ikke ett fasitsvar.
   Løsningsforslag skal av og til vise to gyldige varianter og si at begge gir pott.
7. **`→` er verdi-notasjonen.** «`uttrykk → verdi`» betyr «uttrykket evaluerer til
   verdien». Brukes gjennomgående i kodesporing og quiz. Print-verdi skrives **eksakt**
   slik REPL-en viser den (f.eks. `(a b c)`, `(1 . 2)`, `#t`, `#<procedure>`).
8. **Scheme er R5RS, kjørt i Racket/DrRacket.** Bruk SICP-grensesnittet for strømmer
   (`cons-stream`, `stream-car`, `stream-cdr`, `the-empty-stream`, `stream-null?`),
   ikke Rackets innebygde. Prosedyrenavn og notasjon skal følge SICP/kursbruk.

**Avvik fra DNA/README-malen (dokumentert):**
- **«Symbol- og formelliste» → «Prosedyre- og konstruksjonsliste».** README krever
  en `collapsible` «Symbol- og formelliste» per delkapittel. For et kodefag finnes
  det sjelden matematiske symboler, men et presist prosedyre- og
  konstruksjonsapparat. Blokken heter derfor **«Prosedyre- og konstruksjonsliste»**
  og lister ALLE Scheme-prosedyrer, spesialformer og idiomer brukt i delkapitlet,
  med presis oppførsel og et minimalt eksempel — f.eks. `(cons a d)` → nytt par med
  `car` = `a`, `cdr` = `d`; `set-cdr!` → destruktiv endring av parets `cdr`, effekt
  ikke verdi; `cons-stream` → **spesialform**, utsetter andre-argumentet. Regelen
  «per delkapittel, ikke arv fra tidligere» beholdes.
- **`theorem`-blokker brukes for kanoniske kodemønstre (idiomer).** Der DNA-en bruker
  `theorem` for matematiske resultater, brukes den her for de faste kodemønstrene som
  skal sitte i ryggmargen: **akkumulator-`iter` (halerekursjon)**, **`cons`-foran-
  rekursjon (vanlig rekursjon)**, **trerekursjon over `car` og `cdr`**, **returner-en-
  `lambda`**, **`compose`**, **closure-med-lokal-`set!`**, **message-passing-
  dispatch**, **variadisk `apply`**, **`cons-stream`-utsatt-`cdr`**, **box-og-peker-
  regelen**, **cons-tellings-regelen** og **omgivelsesdiagram-regelen** (closure peker
  til definisjonsrammen). Disse er bokas «teoremer».
- **Flashcards genereres fra `definition`-blokker på toppnivå.** For dette faget er
  `definition`-blokkene enten (a) prosedyre-/konstruksjonsdefinisjoner («hva gjør
  `set-car!` / `filter` / `cons-stream`») eller (b) begrepsdefinisjoner
  («strukturdeling», «halerekursjon», «spesialform», «memoisering», «message
  passing»). Begrepsapparatet er **rikt** (faget premierer terminologi), så
  flashcard-tettheten ligger komfortabelt over gulvet (528), med tyngdepunkt i
  idiom-, mutasjons-, closure- og strøm-delene.
- **Quiz kalibreres som kodesporing / prosesstype / cons-telling / «hva evaluerer
  X til».** **VIKTIG kalibreringsnote:** den ekte eksamen har **INGEN flervalgsdel**
  — quizbanken er derfor et **lærings- og selvtestverktøy**, ikke en speiling av en
  eksamens-MC-seksjon (motsatt IN1000/TDT4110, som har ekte MC på eksamen). Quiz
  bygges som MC rundt de sporingsferdighetene faget faktisk måler: **«hva evaluerer
  dette uttrykket til?»**, **«hvilken prosesstype?»**, **«hvor mange cons-celler?»**,
  **«hva skriver REPL-en?»**, **«er dette rent funksjonelt?»** og
  begreps-gjenkjenning. Disse ferdighetene ER quiz-vennlige og bygger nettopp
  eksamensrefleksene. `options[0]` = riktig svar (runtime stokker). Studenten skal
  minnes (Del 0) om at man på selve eksamen **skriver** koden, ikke krysser av.
- **Drill i temadelene, ikke bare siste del.** DNA-en legger sjangerkapitlene i siste
  del. Her ligger drillkapitlene inne i sine respektive temadeler (prosesstype 2.4,
  mysterium 3.3, box-og-peker 4.4, cons-telling 5.3, signaturoppgaven 6.2, objekt-
  konstruktør 7.5, strøm-implementasjon 8.3, omgivelsesdiagram 9.2), fordi hver
  sjanger er en 3/4–4/4-gjenganger som må drilles umiddelbart etter teorien. Del 10
  beholder de komplette øvingseksamenene. (Speiler in1000/econ1310-avviket.)
- **Avprioritert stoff (bevisst, fra analysen §6/§7).** Den **metasirkulære
  evaluatoren** dukket ALDRI opp som koding i de fire settene — kun konseptuelt (i
  evalueringsstrategi-oppgaver: «forklar hvordan den kunne endres til lazy eval»).
  Boka behandler den derfor **kun konseptuelt** (kap. 9.4, kort), aldri som
  kodeøvelse, tydelig merket `(verifiser mot 2018–2023)`. **Makrosystemer** (nevnt i
  fagbeskrivelsen, ikke sett på eksamen) og **numerikk/avanserte datastrukturer
  utenfor lister og strømmer** er utenfor fokus og drilles ikke — kun kort
  **kjenne**-omtale i Del 9.
- **Ingen midtveis-simulering.** IN2040 har kun avsluttende eksamen, så Del 10 er
  **3 komplette avsluttende øvingseksamener** etter 6-seksjon-malen (ingen
  hjelpemidler, 4 t, 100 p), ikke en MC-simulering.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen) og SICP-progresjonen:
konstruksjonene bygges i den rekkefølgen de forutsetter hverandre. Frekvensen
styrer *omfanget*: de tre store 4/4-seksjonene (signaturoppgaven Del 6, closures/OO
Del 7, strømmer Del 8) er bevisst overdimensjonert, siden de alene bærer ~65 % av
eksamenspoengene. `sectionNames`-kolonnen blir metadata (vises som «Kapittel N:
<tittel>» på bokforsiden — obligatorisk).

| Del | `sectionName` (bokforsiden) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart og kodehåndverk | 2 | Prioriteringsverktøyet + «de tre refleksene» + REPL-/`→`-notasjon. Kjerne i studieguiden. |
| 1 | Scheme-grunnlaget: prosedyrer, binding og spesialformer | 3 | Fundamentet alt annet står på: `define`/`lambda`/`let`/`let*`, `cond`/`if`, quote, spesialform vs. prosedyre, `let`→`lambda`-desugaring (sjanger K, 2/4). |
| 2 | Rekursjon, iterasjon og prosesstype | 4 | **Prosesstype 4/4, gjennomgripende.** Halerekursjon vs. vanlig rekursjon vs. trerekursjon; egen prosesstype-drill. Forkunnskap til ALT annet. |
| 3 | Høyereordens prosedyrer | 3 | **HOF 4/4** (6–14 p). Returnere `lambda`, `compose`; «mysterium»-lesetrening (sjanger B, fast slot). |
| 4 | Par, lister og strukturdeling | 4 | **Box-og-peker + strukturdeling 4/4** (fast åpning). `cons`/`car`/`cdr`, nøstede lister, `eq?`/`equal?`; egen tegne-drill. |
| 5 | Mutasjon og cons-celle-telling | 3 | **Destruktiv vs. funksjonell + cons-telling 4/4** (del av 25–27 p-seksjonen). `set-car!`/`set-cdr!`; egen cons-tellings-drill. |
| 6 | Samme prosedyre i alle idiomer (signaturoppgaven) | 2 | **SIGNATUROPPGAVEN — 25–27 p, 4/4, tyngste enkeltsjanger.** Fem varianter av samme spesifikasjon + cons-telling per variant. |
| 7 | Closures, lokal tilstand og message passing | 5 | **Den store OO-seksjonen — 17–25 p, 4/4.** `set!`, closures, message passing, variadiske objekter, `apply`, prosedyrebasert OO; full objekt-konstruktør-drill. |
| 8 | Strømmer og utsatt evaluering | 3 | **Strømmer 4/4** (12–20 p). `delay`/`force`/`cons-stream`, uendelige sekvenser, Eratosthenes; egen implementasjons-drill. |
| 9 | Evaluering, miljømodell og metasirkulær evaluator | 5 | Omgivelsesdiagram (3/4, 10 p, **kunne**) + evalueringsstrategier (4/4 teori, **kunne**) + metasirkulær **konseptuelt** (**kjenne**) + funksjonell-kode-essay (3/4, **kjenne**). |
| 10 | Eksamenstrening | 3 | 3 komplette avsluttende øvingssett (100 p, 4 t, ingen hjelpemidler) etter 6-seksjon-malen. |

**Avvik fra DNA-makrostrukturen:** se §1 (drill i temadelene; ingen midtveis-
simulering; metasirkulær kun konseptuelt). Del 6–8 er bevisst overdimensjonert
fordi de tre store seksjonene sammen avgjør karakteren.

---

## 3. Sjangerkatalog (A–K)

Bokstavene refereres i hvert kapittel og gjengis for studenten i Del 0. Destillert
fra EKSAMENSANALYSE §3. To hovedfamilier: **produksjon** (skriv Scheme-kode) og
**sporing/forklaring** (hva evaluerer / tegn diagram / forklar med terminologi).

| Kode | Sjanger | Form | Hyppighet / vekt / eksamensplass |
|---|---|---|---|
| **A** | **Box-og-peker + mutasjon + strukturdeling** — tegn diagram etter en `define`/`cons`/`set-car!`-sekvens, oppgi print-verdi, evt. fyll `???`-plasser | sporing (tegning) + kode | 4/4; 10–16 p; **fast åpning** |
| **B** | **«Mysterium»** — forklar hva en navnløs HOF/predikat gjør *med terminologi* + gi kalleksempel med returverdi | kort svar | 2/4 (fast slot); ~6 p |
| **C** | **Skriv rekursiv prosedyre over (nøstet) liste** + «hvilken prosesstype?» | kode + kort svar | 4/4; gjennomgripende |
| **D** | **Samme prosedyre i fem idiomer** (halerekursiv / rekursiv / HOF / destruktiv / strøm) + **cons-celle-telling** | kode + analyse | 4/4; **25–27 p — signaturoppgaven** |
| **E** | **Egne høyereordens prosedyrer** — returnér en `lambda`, `compose`, `repeat`, egne sekvensoperasjoner | kode | 4/4; 6–14 p |
| **F** | **Innkapsling / lokal tilstand / message passing / prosedyrebasert OO** — objekt-konstruktør som returnerer en `lambda` med lokal `set!`-tilstand | kode (tung) | 4/4; **17–25 p** |
| **G** | **Omgivelsesdiagram** — tegn alle rammer og bindinger etter en sekvens med `define`/`lambda`/`set!` | sporing (tegning) | 3/4; ~10 p |
| **H** | **Strømmer** — implementér `stream-filter` o.l., uendelige sekvenser, «hvorfor forsvinner øvre grense?» | kode + forklaring | 4/4; 12–20 p |
| **I** | **Evalueringsstrategier** (teori) — eager/applicative vs. lazy/normal-order, memoisering, call-by-* | teori/essay | 4/4; 7–16 p |
| **J** | **«Hva kjennetegner funksjonell kode?»** (essay) — ren funksjon, ingen side-effekter, referensiell transparens | essay | 3/4; 6–12 p |
| **K** | **`let`→`lambda`-desugaring** — skriv om `let` til ekvivalent `lambda`-applikasjon; `let` vs. `let*`-scope | kode/omskriving | 2/4; ~7 p |

---

## 4. Kapitler

Feltene følger DNA-ens «Skjelett-krav», tilpasset kodefag: **Kodekontrakt**
erstatter «Innholdskontrakt» (eksakte prosedyrer/spesialformer/idiomer kapitlet SKAL
lære, med presis oppførsel). Prioritetsklasser: **perfekt** (nivå 1) / **kunne**
(nivå 2) / **kjenne** (nivå 3). Hvert teori- og drillkapittel har (utover DNA-ens
faste blokker) minst én **«De tre refleksene»**-`tip` knyttet til sin
mønster-kodeoppgave.

---

### Del 0 — Eksamenskart og kodehåndverk

#### Kapittel 0.1: Eksamenskartet — slik testes IN2040

- **id:** `in2040-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen (én avsluttende 4-timers Inspera-eksamen, ingen hjelpemidler, ingen flervalg), den faste 6-seksjon-strukturen, temafrekvensene, sjangerkatalogen A–K, evidensforbeholdet og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele det (lille) arkivet (INF2810 2014–2016 + IN2040-prøveeksamen, n = 4). Skal gjengi: (i) formen — **én** hjelpemiddelfri digital Inspera-eksamen, **4 timer**, A–F, **100 poeng**, **INGEN flervalg**, alt er kodeskriving/sporing/forklaring; obligatoriske innleveringer må være godkjent; (ii) miksen **kodeskriving ~55–70 %**, kodesporing ~15–25 %, kort teori/essay ~10–20 %; (iii) den faste **6-seksjon-strukturen** med typisk vekt: box-og-peker+mutasjon (~10 p) → «mysterium» (~6 p) → **signaturoppgaven, samme prosedyre i fem idiomer + cons-telling (~25 p)** → **innkapsling/OO med lokal tilstand (~20–25 p)** → strøm-seksjon (~15–20 p) → teori (funksjonell kode / evalueringsstrategier, ~10–12 p), evt. omgivelsesdiagram som egen eller integrert seksjon; (iv) **temafrekvens-tabellen** (A–K med 4/4- og 3/4- og 2/4-score); (v) **sensors metaregler** (pseudokode gir delpoeng, blankt gir null; egne antakelser tillates men må redegjøres for; terminologi belønnes; struktur/identitet teller — ikke bare print-verdi; flere gyldige løsninger godtas). Prioritet: metakapittel.
- **Kodekontrakt:** Sjangerkatalogen A–K (fra §3) presenteres som studentens sjekkliste med typisk vekt og eksamensplass. Pluss **prognosen for neste sett** (~6 seksjoner à 100 p, jf. analysen §7). Avslutt med **leseplan** knyttet til de tre prioritetsnivåene: **perfekt** (signaturoppgaven Del 6, closures/OO Del 7, box-og-peker/strukturdeling Del 4–5, prosesstype Del 2, strømmer Del 8); **kunne** (omgivelsesdiagram, evalueringsstrategier, HOF, `let`→`lambda`); **kjenne** (funksjonell-kode-essay, metasirkulær konseptuelt, datastyrt/`apply`).
- **Oppgavesjangre:** Ingen kodeoppgaver; 3–4 refleksjonsoppgaver av typen «gitt at signaturoppgaven + OO-seksjonen alene er ~50 p og du har 4 timer uten hjelpemidler — sett opp et tidsbudsjett og en rekkefølge».
- **Typiske feil:** Metafeilene: la et blankt felt stå der pseudokode ville gitt delpoeng; bruke mest tid på metasirkulær evaluator-koding (testes ikke); pugge ett fasitsvar i stedet for idiom + prosesstype; droppe terminologi i teorisvar; øve på lavfrekvent stoff (makroer, numerikk).
- **Quiz: 12 · Flashcards: 16** (form, 6-seksjon-strukturen, frekvenser, metaregler, sjangerkatalogen A–K, evidensforbeholdet)

#### Kapittel 0.2: Kodehåndverk og «de tre refleksene»

- **id:** `in2040-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `in2040-0-1` · **kapitteltype:** eksamenskart
- **description:** Hvordan lese og skrive Scheme på eksamen: REPL-en og `→`-notasjonen, prefiks-syntaks, print-verdier eksakt, pseudokode-strategien — og de tre faste sensor-refleksene (prosesstype / cons-telling / funksjonell-vs-effekt) som gjentas etter hver kodeoppgave i hele boka.
- **Eksamensbelegg:** Metakapittel — destillert fra sensorkravene (analysen §4). De tre refleksene er nøyaktig det sensor måler etter hver kodeoppgave: prosesstype-spørsmålet følger «nesten hver kodeoppgave»; cons-telling er kjernen i signaturoppgaven (25–27 p); funksjonell-vs-side-effekt er både essay-tema (J) og det avgjørende skillet i OO-seksjonen. Prioritet: **perfekt** (dette er bokas ryggrad).
- **Kodekontrakt (Prosedyre- og konstruksjonsliste):** `→`-notasjonen («uttrykk evaluerer til verdi»); prefiks-applikasjon `(prosedyre arg …)`; hvordan REPL-en skriver verdier (`(a b c)`, `(1 . 2)`, `#t`/`#f`, `#<procedure>`, `'symbol`); `define` for binding; `;` for kommentar. **`theorem`-idiom: «De tre refleksene»** — den faste tregangs-refleksen: (1) prosesstype (rekursiv/iterativ/trerekursiv, begrunnet i utestående operasjoner), (2) cons-celler (destruktiv=0, funksjonell=1/element, strøm=1 utsatt), (3) funksjonell vs. side-effekt (returverdi-kall uten effekt vs. tilstandsendring). Vises som mal med et lite gjennomgått eksempel.
- **Oppgavesjangre:** Grunnlag for alle. Mønstereksempel (nyskrevet): «Anvend de tre refleksene på `(define (summer xs) (if (null? xs) 0 (+ (car xs) (summer (cdr xs)))))`: hvilken prosesstype, hvor mange cons-celler, rent funksjonelt?» (Fasit-idé: lineær rekursiv prosess — `+` er utestående; 0 nye cons-celler; rent funksjonelt.)
- **Typiske feil:** Kalle en `cons`-foran-rekursjon «halerekursiv»; telle print-verdiens celler i stedet for *nye* celler generert; kalle en prosedyre med `set!` «funksjonell»; skrive print-verdi med pynt (mellomrom/anførselstegn) som ikke matcher REPL-en.
- **Quiz: 14 · Flashcards: 18** (de tre refleksene, `→`-notasjon, print-verdi-format, metaregler, terminologi)

---

### Del 1 — Scheme-grunnlaget: prosedyrer, binding og spesialformer

> Del 1 er fundamentet: prosedyrer, binding og spesialformer. Alt annet forutsetter
> dette. Kap. 1.3 planter det kritiske skillet **spesialform vs. vanlig prosedyre**
> (utsatt vs. straks-evaluering av argumenter), som er kjernen i strøm-delen (Del 8)
> og i evalueringsstrategiene (Del 9).

#### Kapittel 1.1: Uttrykk, verdier og prosedyrer

- **id:** `in2040-1-1` · **number:** 1.1 · **estimatedMinutes:** 40 · **prerequisites:** `in2040-0-2` · **kapitteltype:** teori
- **description:** Prefiks-uttrykk og hvordan de evalueres, primitive prosedyrer og tall/symboler/boolske verdier, `define` for prosedyrer og verdier, og forskjellen på en **prosedyre** (koden) og en **prosess** (det som skjer når den kjører).
- **Eksamensbelegg:** Grunnlag for all kodeskriving og -sporing (4/4). `→`-evaluering av sammensatte uttrykk er kjernen i box-og-peker- og mysterium-sjangrene. Skillet prosedyre/prosess er forutsetningen for prosesstype-analysen (Del 2, gjennomgripende). Prioritet: **perfekt** (som fundament).
- **Kodekontrakt (Prosedyre- og konstruksjonsliste):** Prefiks-applikasjon `(f a b)`; primitiver `+ - * / = < >`; predikater `zero?`, `odd?`, `even?`, `null?`, `pair?`; `define` for verdi (`(define x 3)`) og for prosedyre (`(define (f x) …)`); `if`-uttrykk som verdi; tall, boolske `#t`/`#f`, symboler; hvordan et sammensatt uttrykk evalueres innenfra-ut (`→`); skillet **prosedyre** (definisjonen) vs. **prosess** (kjøringen). Til bruk og sporing.
- **Oppgavesjangre:** C-grunnlag + A-grunnlag. Mønstereksempel: «Hva evaluerer `(+ (* 2 3) (- 10 4))` til? Skriv stegene med `→`.» (Fasit: `6 + 6 → 12`.)
- **Typiske feil:** Lese uttrykk utenfra-inn i stedet for innenfra-ut; blande `define`-formen for verdi og prosedyre; tro at en prosedyre og prosessen den genererer er det samme; feil print-verdi-format.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 1.2: `lambda`, `let` og `let*`

- **id:** `in2040-1-2` · **number:** 1.2 · **estimatedMinutes:** 45 · **prerequisites:** `in2040-1-1` · **kapitteltype:** teori
- **description:** Anonyme prosedyrer med `lambda`, lokal binding med `let` og `let*`, og innsikten om at `let` bare er **syntaktisk sukker** for en `lambda`-applikasjon — grunnlaget for desugaring-sjangeren (K) og for closures (Del 7).
- **Eksamensbelegg:** `let`/`lambda`/`let*` og desugaring i 2/4 (sjanger K, ~7 p); `lambda` er forutsetning for HOF (Del 3) og closures (Del 7, 4/4). `let`-vs-`let*`-scope er en fast fallgruve. Prioritet: **perfekt** (`lambda`), **kunne** (desugaring K).
- **Kodekontrakt (Prosedyre- og konstruksjonsliste):** `(lambda (par …) body)`; at `(define (f x) …)` er sukker for `(define f (lambda (x) …))`; `(let ((v1 e1) (v2 e2)) body)` — **parallell** binding (bindingene ser IKKE hverandre); `(let* (…) body)` — **sekvensiell** binding (senere ser tidligere); **`theorem`-idiom: `let`→`lambda`-desugaring** — `(let ((v e)) body)` ≡ `((lambda (v) body) e)`; nøstet/intern `define`. Til bruk, sporing og omskriving.
- **Oppgavesjangre:** K + E-grunnlag. Mønstereksempel (K, nyskrevet): «Skriv om `(let ((a 2) (b 3)) (* a b))` til en ekvivalent `lambda`-applikasjon, og oppgi verdien.» (Fasit: `((lambda (a b) (* a b)) 2 3) → 6`.)
- **Typiske feil:** Bruke `let` der `let*` trengs (bindingene «ser» ikke hverandre → «unbound variable»); tro `let` er en primitiv prosedyre (den er en spesialform / sukker); feil argumentrekkefølge i desugaringen; glemme at `lambda`-kroppen kan ha flere uttrykk (siste er verdien).
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 1.3: Betinget evaluering og spesialformer

- **id:** `in2040-1-3` · **number:** 1.3 · **estimatedMinutes:** 45 · **prerequisites:** `in2040-1-2` · **kapitteltype:** teori
- **description:** `if`, `cond`, `and`, `or`, `begin` og `quote`, og det avgjørende skillet mellom en **spesialform** (evaluerer ikke nødvendigvis alle argumenter — f.eks. `if`, `and`, senere `cons-stream`) og en **vanlig prosedyre** (evaluerer alltid alle argumenter først).
- **Eksamensbelegg:** Spesialform-begrepet er kjernen i strøm-fella (`cons-stream` utsetter `cdr`, Del 8, 4/4) og i evalueringsstrategiene (Del 9, 4/4 teori). `cond`/`and`/`or` brukes i nesten all kodeskriving. Prioritet: **perfekt** (spesialform-begrepet er høyt utnyttet senere).
- **Kodekontrakt (Prosedyre- og konstruksjonsliste):** `(if p konsekvent alternativ)`; `(cond (p1 e1) (p2 e2) (else e))`; `(and …)`/`(or …)` med kortslutning; `(begin e1 e2 …)` (sekvens, verdi = siste); `(quote x)` / `'x` (uevaluert symbol/liste); **`definition`: spesialform** — en form som IKKE følger vanlig applikativ evaluering (evaluerer ikke alle argumenter straks); kontrast: en vanlig prosedyre evaluerer alle argumenter før kallet. Til bruk og sporing.
- **Oppgavesjangre:** C-grunnlag + I-grunnlag. Mønstereksempel: «Forklar hvorfor `(if #t 1 (/ 1 0))` evaluerer til `1` uten feil, mens `(list #t 1 (/ 1 0))` gir feil.» (Fasit-idé: `if` er en spesialform som ikke evaluerer alternativ-grenen; `list` er en vanlig prosedyre som evaluerer alle argumenter først.)
- **Typiske feil:** Tro at `if`/`and`/`or` evaluerer alle grener (de kortslutter); glemme `else` i `cond`; tro `quote` evaluerer innholdet; blande `begin` (sekvens) og en liste; ikke se at spesialform-skillet er nøkkelen til utsatt evaluering senere.
- **Quiz: 18 · Flashcards: 18**

---

### Del 2 — Rekursjon, iterasjon og prosesstype *(prosesstype: PERFEKT — gjennomgripende)*

> Del 2 driller den refleks som følger **nesten hver** kodeoppgave: «hvilken
> prosesstype genererer implementasjonen din?» Skillet halerekursjon (iterativ
> prosess) vs. vanlig rekursjon (rekursiv prosess) er den vanligste sensor-fella i
> hele faget, og fundamentet for både signaturoppgaven (Del 6) og cons-tellingen
> (Del 5). Refleks 1 av «de tre refleksene» får sitt eget hjem her.

#### Kapittel 2.1: Rekursive prosedyrer og rekursive prosesser

- **id:** `in2040-2-1` · **number:** 2.1 · **estimatedMinutes:** 45 · **prerequisites:** `in2040-1-3` · **kapitteltype:** teori
- **description:** Vanlig (ikke-hale) rekursjon: en prosedyre som kaller seg selv med en utestående operasjon rundt kallet (`cons`/`+` foran), og prosessen den genererer — en voksende kjede av utsatte operasjoner (lineær rekursiv prosess).
- **Eksamensbelegg:** Vanlig rekursjon er variant (b) i signaturoppgaven (Del 6, 25–27 p) og grunnlag for sjanger C (4/4). «`cons` foran rekursivt kall» er selve definisjonen på ikke-halerekursjon — sensors mest straffede forveksling. Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom: `cons`-foran-rekursjon):** Basistilfelle + rekursivt steg med **utestående operasjon** (`(cons (f (car xs)) (rekursivt-kall (cdr xs)))` eller `(+ (car xs) (rekursivt-kall (cdr xs)))`); at den utestående operasjonen gjør prosessen **rekursiv** (voksende kjede av utsatte operasjoner, minneforbruk vokser med n); lineær rekursjon (ett kall per steg) vs. senere trerekursjon. **De tre refleksene**-`tip`: prosesstype = lineær rekursiv (utestående `cons`/`+`); cons-celler = én per element (ved listebygging); rent funksjonelt. Til bruk, sporing og analyse.
- **Oppgavesjangre:** C + D-grunnlag. Mønstereksempel: «Skriv `(min-map f xs)` som bygger en ny liste av `(f x)` for hvert element, med vanlig rekursjon. Hvilken prosesstype genererer den?» (Fasit-idé: `(cons (f (car xs)) (min-map f (cdr xs)))`; lineær rekursiv.)
- **Typiske feil:** Kalle en `cons`-foran-rekursjon «iterativ/halerekursiv» (§ den store fella); glemme basistilfellet; telle print-cellene i stedet for de genererte; ikke se at minnet vokser med n.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 2.2: Halerekursjon og iterative prosesser

- **id:** `in2040-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `in2040-2-1` · **kapitteltype:** teori
- **description:** Halerekursjon: det rekursive kallet er det **ytterste** uttrykket (ingen utestående operasjon), realisert med et akkumulator-argument og gjerne en intern `iter`-prosedyre — genererer en **iterativ prosess** med konstant minne.
- **Eksamensbelegg:** Halerekursjon er variant (a) i signaturoppgaven (Del 6). «Iterativ prosess» er det presise svaret sensor krever på prosesstype-spørsmålet for akkumulator-mønsteret. Ofte kombinert med `reverse` til slutt. Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom: akkumulator-`iter`):** Intern `(define (iter xs acc) …)` der det rekursive kallet er ytterst (`(iter (cdr xs) (cons (f (car xs)) acc))`); akkumulator bygges opp, ofte i omvendt rekkefølge → `reverse` til slutt; at **ingen utestående operasjon** ⇒ iterativ prosess, konstant minne; halerekursjon som optimalisering. **De tre refleksene**-`tip`: prosesstype = iterativ (halerekursiv, ingen utestående operasjon); cons-celler = én per element + evt. `reverse`; rent funksjonelt. Til bruk, sporing og analyse.
- **Oppgavesjangre:** C + D-grunnlag. Mønstereksempel: «Skriv `(min-map f xs)` på nytt, nå halerekursivt med en intern `iter` og `reverse`. Hvilken prosesstype nå?» (Fasit-idé: iterativ prosess.)
- **Typiske feil:** Legge en operasjon rundt det rekursive kallet og likevel kalle det halerekursivt; glemme `reverse` (feil rekkefølge på resultatet); glemme å tråde akkumulatoren videre; tro halerekursjon endrer *resultatet* (den endrer prosessen/minnet, ikke verdien).
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 2.3: Trerekursjon over nøstede strukturer

- **id:** `in2040-2-3` · **number:** 2.3 · **estimatedMinutes:** 45 · **prerequisites:** `in2040-2-2` · **kapitteltype:** teori
- **description:** Trerekursjon: rekursjon over **både** `car` og `cdr` når strukturen er nøstet (lister av lister) — genererer en trerekursiv prosess. Grunnlaget for `nested-count`, `deep-map` og lignende.
- **Eksamensbelegg:** Nøstede lister ⇒ trerekursjon er fast sjanger-C-oppfølging (4/4): «hva slags prosess?» → trerekursiv. Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom: trerekursjon):** Tre grener — tomt (`null?`), atom/blad (`(not (pair? x))`), og par (`(pair? x)` → rekursér på både `(car x)` og `(cdr x)`); kombiner grenresultatene (`+`, `append`, `cons`); at to rekursive kall per nivå ⇒ **trerekursiv prosess**. **De tre refleksene**-`tip`: prosesstype = trerekursiv; cons-celler = avhenger av bygging; funksjonelt. Til bruk og analyse.
- **Oppgavesjangre:** C. Mønstereksempel: «Skriv `(dyp-tell xs)` som teller alle atomer i en vilkårlig nøstet liste. Hvilken prosesstype?» (Fasit-idé: tre grener, to rekursive kall, trerekursiv.)
- **Typiske feil:** Bare rekursere på `cdr` (mister nøstingen); glemme atom-/blad-grenen; feil kombinasjon av grenresultater; kalle trerekursjon «lineær».
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 2.4: DRILL — Prosesstype-analyse

- **id:** `in2040-2-4` · **number:** 2.4 · **estimatedMinutes:** 70 · **prerequisites:** `in2040-2-3` · **kapitteltype:** drill
- **description:** Systematisk drill i å avgjøre prosesstypen til en gitt prosedyre — refleks 1 av «de tre refleksene» — og begrunne svaret presist med utestående operasjoner. Den billigste, mest forutsigbare poengkilden.
- **Eksamensbelegg:** Prosesstype-spørsmålet følger nesten hver kodeoppgave (4/4, gjennomgripende). Sensor krever *presist* svar med begrunnelse (iterativ/lineær rekursiv/trerekursiv + hvorfor). Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** Algoritmisk analyse: 1) finn det rekursive kallet; 2) er det noe **utenfor/rundt** kallet som må vente på resultatet? → rekursiv prosess; ingenting utenfor → iterativ (halerekursiv); 3) er det **to eller flere** rekursive kall per nivå? → trerekursiv; 4) formulér svaret med terminologi og begrunnelse. **Fast fellekatalog som SKAL demonstreres:** `cons`/`+` foran kallet (rekursiv, ikke iterativ); akkumulator ytterst (iterativ); to grener (trerekursiv); `let` som binder et rekursivt kall (fortsatt utestående). Gjennomgått eksempel med margnotater.
- **Oppgavesjangre:** C-analyse. 12–16 oppgaver: gitt en prosedyre, avgjør prosesstypen og begrunn — hver med fullstendig begrunnelse. Mønstereksempel: «Er `(define (f n) (if (= n 0) 1 (* n (f (- n 1)))))` iterativ eller rekursiv? Begrunn.» (Fasit-idé: lineær rekursiv — `*` er utestående.)
- **Typiske feil:** Hele fellekatalogen: forveksle halerekursjon og vanlig rekursjon (§ analysen §5.1); overse den utestående operasjonen; kalle trerekursjon lineær; svare uten begrunnelse (sensor krever *hvorfor*).
- **Quiz: 22 · Flashcards: 12** (quiz er nesten utelukkende «hvilken prosesstype?» — direkte refleks-1-trening)

---

### Del 3 — Høyereordens prosedyrer *(prioritet: PERFEKT / KUNNE)*

> Del 3 lærer det som gjør Scheme til et funksjonelt språk: prosedyrer som tar og
> returnerer prosedyrer. `map`/`filter`/`fold` er variant (c) i signaturoppgaven;
> `compose`/`repeat` og «mysterium»-lesing er egne 4/4-sjangre.

#### Kapittel 3.1: Prosedyrer som argumenter: `map`, `filter`, `fold`

- **id:** `in2040-3-1` · **number:** 3.1 · **estimatedMinutes:** 45 · **prerequisites:** `in2040-2-2` · **kapitteltype:** teori
- **description:** Sekvensoperasjonene `map`, `filter`, `for-each` og `fold`/`accumulate` som tar en prosedyre som argument — variant (c) i signaturoppgaven — og hvordan man implementerer dem selv med rekursjon.
- **Eksamensbelegg:** HOF 4/4 (6–14 p); `map`/`filter` er den «høyereordens sekvensoperasjon»-varianten i signaturoppgaven (Del 6). Å *implementere* dem selv testes også. Prioritet: **perfekt**.
- **Kodekontrakt (Prosedyre- og konstruksjonsliste):** `(map f xs)` (ny liste av `(f x)`); `(filter p xs)` (behold der `p` er sann); `(for-each f xs)` (kun side-effekt, returverdi uinteressant); `(fold-right op init xs)` / `accumulate` (fold fra høyre); å implementere `map`/`filter` med vanlig rekursjon (`cons` foran); at HOF abstraherer bort løkkemønsteret. **De tre refleksene**-`tip` for egen `map`-implementasjon. Til bruk og implementasjon.
- **Oppgavesjangre:** C + D (c-variant). Mønstereksempel: «Implementér `(min-filter p xs)` fra bunnen med vanlig rekursjon, og løs deretter samme oppgave med innebygd `filter`.»
- **Typiske feil:** Bruke `for-each` der `map` trengs (mister returlista); glemme basistilfellet i egen implementasjon; feil argumentrekkefølge i `fold`; tro `map` muterer den opprinnelige lista.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 3.2: Prosedyrer som returverdi: `compose` og `repeat`

- **id:** `in2040-3-2` · **number:** 3.2 · **estimatedMinutes:** 45 · **prerequisites:** `in2040-3-1` · **kapitteltype:** teori
- **description:** Å **returnere en `lambda`**: `compose` (setter sammen to prosedyrer), `repeat`/`iterate` (bygget på `compose`, rekursjon over antall) — å bygge abstraksjoner av abstraksjoner. Forkunnskap til closures (Del 7).
- **Eksamensbelegg:** Egne HOF-er (sjanger E) 4/4. `compose` og `repeat` er faste eksempler; å returnere en `lambda` er også kjernen i OO-seksjonen (Del 7). Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom: returner-en-`lambda` / `compose`):** `(define (compose f g) (lambda (x) (f (g x))))` — returnerer en ny prosedyre; `(repeat f n)` bygget som `n`-fold `compose` av `f` med seg selv (rekursjon over `n`, basistilfelle = identitet); at en returnert `lambda` **fanger** de frie variablene (`f`, `g`) — pekende mot closures. Til bruk og konstruksjon.
- **Oppgavesjangre:** E. Mønstereksempel: «Skriv `(compose f g)` som returnerer prosedyren `x ↦ (f (g x))`, og bruk den til å lage `(add-then-double x)`.»
- **Typiske feil:** Kalle `f`/`g` i stedet for å returnere en `lambda`; feil komposisjonsrekkefølge (`(f (g x))` vs. `(g (f x))`); glemme basistilfellet (identitet) i `repeat`; ikke se at den returnerte prosedyren fanger frie variabler.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 3.3: DRILL — «Mysterium»: kodeforståelse

- **id:** `in2040-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `in2040-3-2` · **kapitteltype:** drill
- **description:** Full drill på «mysterium»-sjangeren (fast slot, ~6 p): en liten, navnløs HOF/predikat gis — forklar hva den gjør *med kursterminologi* og gi et selvvalgt kalleksempel med returverdi.
- **Eksamensbelegg:** Sjanger B (fast slot, 2/4, ~6 p). Løsningene er ting som «returnerer `#t` hvis alle elementer tester sant» (∀) eller «`filter` som beholder elementer som tester sant». Terminologi belønnes eksplisitt. Prioritet: **kunne** (billig, forutsigbar poengkilde).
- **Kodekontrakt (løsningsoppskrift):** 1) les prosedyren og identifisér mønsteret (er det en variant av `map`/`filter`/`fold`/et predikat?); 2) spor på et lite kalleksempel i hodet; 3) formulér hva den gjør i **én–to setninger med terminologi** (ikke linje-for-linje); 4) gi et konkret kall med returverdi. Gjennomgått eksempel med margnotat om at terminologi (∀/∃, «beholder», «akkumulerer», «trerekursiv») gir uttelling.
- **Oppgavesjangre:** B. 10–14 «mysterier» på eksamensnivå (navnløse HOF-er/predikater), hver med terminologi-forklaring + kalleksempel. Mønstereksempel: «Hva gjør `(define (m p xs) (cond ((null? xs) #t) ((p (car xs)) (m p (cdr xs))) (else #f)))`? Gi et kall.» (Fasit-idé: returnerer `#t` hvis `p` er sann for *alle* elementer — ∀-predikat.)
- **Typiske feil:** Forklare linje for linje i stedet for *hva* prosedyren oppnår; droppe terminologi; gi et kalleksempel uten returverdi; misforstå kortslutningen (`else #f` stopper ved første falske).
- **Quiz: 16 · Flashcards: 12**

---

### Del 4 — Par, lister og strukturdeling *(box-og-peker + strukturdeling: PERFEKT — fast åpning)*

> Del 4 bygger datamodellen faget hviler på — par og cons-celler — og driller den
> **faste åpningssjangeren**: box-og-peker-diagram med strukturdeling. Refleks 2 (cons-
> telling) forberedes her og fullføres i Del 5. Strukturdeling og `eq?`-identitet er
> et av sensors mest straffede temaer.

#### Kapittel 4.1: Par og cons-celler: box-og-peker

- **id:** `in2040-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `in2040-1-3` · **kapitteltype:** teori
- **description:** Paret som byggekloss: `cons` lager en celle med `car` og `cdr`, `car`/`cdr` plukker dem ut, og box-og-peker-diagrammet tegner cellene og pekerne — grunnlaget for den faste åpningssjangeren.
- **Eksamensbelegg:** Box-og-peker 4/4 (fast åpning, 10–16 p). `cons`/`car`/`cdr` og diagramtegning er selve fundamentet. Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom: box-og-peker-regelen):** `(cons a d)` → nytt par (én cons-celle) med `car` = `a`, `cdr` = `d`; `(car p)`/`(cdr p)`; sammensatte `(cadr p)`/`(caddr p)`/`(cddr p)`; **box-og-peker-tegneregelen** — hver cons-celle er en boks med to rom (`car` venstre, `cdr` høyre); en peker går fra et rom til verdien/cellen det holder; print-verdi `(1 . 2)` for et rent par, `(1 2 3)` for en liste. Til bruk og tegning.
- **Oppgavesjangre:** A. Mønstereksempel: «Tegn box-og-peker for `(cons 1 (cons 2 3))` og oppgi print-verdien.» (Fasit-idé: to celler; print `(1 2 . 3)` — improper list.)
- **Typiske feil:** Blande `car` og `cdr`; feil print-verdi (`(1 . 2)` vs. `(1 2)`); tegne en liste som et rent par eller motsatt; glemme at `cdr` kan peke til en celle *eller* et atom.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 4.2: Lister og listeoperasjoner

- **id:** `in2040-4-2` · **number:** 4.2 · **estimatedMinutes:** 45 · **prerequisites:** `in2040-4-1` · **kapitteltype:** teori
- **description:** Lister som kjeder av par som ender i `'()`: `list`, `null?`, `pair?`, `append`, `reverse`, `length`, og nøstede lister — datastrukturen nesten all kode opererer på.
- **Eksamensbelegg:** Lister er gjennomgripende (4/4) — grunnlaget for sjanger C, D, H. `append`/`reverse` brukes i signaturoppgaven; `null?`/`pair?` skiller listetilfellene. Prioritet: **perfekt**.
- **Kodekontrakt (Prosedyre- og konstruksjonsliste):** Liste = kjede av par som ender i tom liste `'()`; `(list a b c)`; `null?` (tom liste?), `pair?` (er et par?), `list?`; `(append xs ys)` (kopierer `xs`, deler `ys`); `(reverse xs)`; `(length xs)`; nøstede lister (element kan selv være en liste); at `append` **lager nye celler** for `xs` men **deler** `ys`. Til bruk og sporing.
- **Oppgavesjangre:** C + A. Mønstereksempel: «Hva evaluerer `(append '(1 2) '(3 4))` til, og hvor mange nye cons-celler lager `append` her?» (Fasit-idé: `(1 2 3 4)`; 2 nye celler — én per element i første liste.)
- **Typiske feil:** Blande `pair?` og `null?`; tro `append` muterer/kopierer begge listene (den deler `ys`); glemme at en liste ender i `'()`; feil på nøstet vs. flat liste.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 4.3: Strukturdeling og identitet: `eq?` vs. `equal?`

- **id:** `in2040-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `in2040-4-2` · **kapitteltype:** teori
- **description:** Strukturdeling — når to variabler peker til de **samme** cons-cellene — og skillet mellom `eq?` (samme objekt/identitet) og `equal?` (samme innhold/verdi). Kjernen i box-og-peker-sjangeren og forutsetning for destruktiv mutasjon (Del 5).
- **Eksamensbelegg:** Strukturdeling 4/4 (del av åpningssjangeren, 10–16 p). Sensor krever at diagrammer viser **deling/identitet** korrekt (`eq?`-relasjoner), ikke bare print-verdien. Det avgjørende poenget: to `(list 'a 'b)` er separate; delt struktur oppfører seg ulikt under mutasjon. Prioritet: **perfekt**.
- **Kodekontrakt (`definition` + `theorem`):** **`definition`: strukturdeling** — to variabler/celler som refererer til de samme underliggende cons-cellene; `(let ((foo (list 'a 'b))) (cons foo foo))` deler, `(list (list 'a 'b) (list 'a 'b))` deler ikke; `eq?` (samme objekt, identitet), `equal?` (strukturelt lik, samme innhold), `=` (talllikhet); at to like-utseende men separate strukturer er `equal?` men ikke `eq?`; hvorfor deling er «usynlig» inntil man muterer (Del 5). Til bruk og tegning.
- **Oppgavesjangre:** A. Mønstereksempel: «Er `(eq? (list 1 2) (list 1 2))` og `(equal? (list 1 2) (list 1 2))` sanne? Forklar forskjellen med begrepet strukturdeling.» (Fasit-idé: `eq?` → `#f` (separate objekter), `equal?` → `#t` (samme innhold).)
- **Typiske feil:** Bruke `eq?` der `equal?` trengs (eller motsatt); tro to like-utseende lister deler celler; tegne deling der det ikke er noen (§ analysen §5.2); ikke se at deling først får konsekvens under mutasjon.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 4.4: DRILL — Box-og-peker og tegning

- **id:** `in2040-4-4` · **number:** 4.4 · **estimatedMinutes:** 75 · **prerequisites:** `in2040-4-3` · **kapitteltype:** drill
- **description:** Full drill på den faste åpningssjangeren: gitt en sekvens med `define`/`cons`/`list`, tegn box-og-peker-diagrammet, oppgi print-verdien, og vis strukturdeling/identitet korrekt — inkludert `???`-utfyllingsvarianten.
- **Eksamensbelegg:** Sjanger A i **hvert** sett (fast åpning, 10–16 p). Fast delspørsmål: «hvilke innebygde prosedyrer må inn på `???`-plassene for at uttrykket blir `#t`/gir denne verdien?». Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** 1) tegn hver cons-celle som en boks etter hvert som den lages; 2) la variabler peke til celler (vis **deling** når to peker til samme celle); 3) les print-verdien fra strukturen (`(a b)`, `(a . b)`, `((a) b)`); 4) for `???`-oppgaver: arbeid bakover fra ønsket verdi/`#t` og velg riktig `car`/`cdr`/`cadr`/`eq?`. **Fast fellekatalog:** delt vs. separat struktur; improper list (`. `-ende); nøstet liste; `eq?`- vs. `equal?`-utfall. Gjennomgått eksempel med margnotater om at diagrammet må vise identitet, ikke bare print.
- **Oppgavesjangre:** A. 12–16 oppgaver på eksamensnivå: tegn diagram + print-verdi, roterende (rent par, liste, nøstet, delt struktur, `???`-utfylling), hver med fullstendig diagram-løsning. Mønstereksempel: «Gitt `(define x (list 'a 'b))` og `(define y (cons x x))` — tegn diagrammet og oppgi print-verdien til `y`.»
- **Typiske feil:** Hele fellekatalogen: overse deling; feil print-format; blande `car`/`cdr`-nivåer; velge feil `???`-prosedyre; tegne separate celler der det er deling.
- **Quiz: 20 · Flashcards: 12** (quiz er nesten utelukkende «hva er print-verdien?» og «deler disse celler?»)

---

### Del 5 — Mutasjon og cons-celle-telling *(destruktiv vs. funksjonell + cons-telling: PERFEKT)*

> Del 5 lærer mutasjon (`set-car!`/`set-cdr!`/`set!`) og driller refleks 2 av «de tre
> refleksene»: cons-celle-telling. Skillet **destruktiv** (gjenbruker celler, 0 nye)
> vs. **funksjonell** (bygger nye celler) er halve poenget i signaturoppgaven (Del 6).

#### Kapittel 5.1: `set!`, `set-car!` og `set-cdr!`

- **id:** `in2040-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `in2040-4-3` · **kapitteltype:** teori
- **description:** De tre mutatorene: `set!` (endrer en binding), `set-car!`/`set-cdr!` (endrer innholdet i en eksisterende cons-celle) — og hvordan mutasjon på en **delt** struktur endrer alle «synene» samtidig.
- **Eksamensbelegg:** Mutasjon 4/4 (del av åpningen + signaturoppgaven). `set-car!`/`set-cdr!` på delt struktur er den avgjørende innsikten som strukturdeling (kap. 4.3) bygde opp til. Prioritet: **perfekt**.
- **Kodekontrakt (Prosedyre- og konstruksjonsliste):** `(set! var verdi)` — endrer en eksisterende binding (spesialform, returnerer ikke en meningsfull verdi — **side-effekt**); `(set-car! par verdi)`/`(set-cdr! par verdi)` — endrer `car`/`cdr` **i selve cellen** (destruktivt); at mutasjon av en delt celle sees via alle referanser (`eq?`); skillet **effekt** (endrer tilstand) vs. **verdi** (returneres). **De tre refleksene**-`tip`: her aktiveres refleks 3 (side-effekt!). Til bruk, sporing og tegning.
- **Oppgavesjangre:** A. Mønstereksempel: «Gitt `(define a (list 1 2))` og `(define b a)`, hva blir `b` etter `(set-car! a 99)`? Forklar med strukturdeling.» (Fasit-idé: `(99 2)` — `a` og `b` deler cellen, så mutasjonen sees via begge.)
- **Typiske feil:** Tro `set-car!` lager en ny celle (den muterer på plass); tro mutasjon via `a` ikke sees via `b` når de deler (§ analysen §5.2); forvente en meningsfull returverdi fra `set!`; blande `set!` (binding) og `set-car!` (celleinnhold).
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 5.2: Destruktive vs. funksjonelle prosedyrer

- **id:** `in2040-5-2` · **number:** 5.2 · **estimatedMinutes:** 50 · **prerequisites:** `in2040-5-1` · **kapitteltype:** teori
- **description:** Å skrive samme prosedyre **destruktivt** (muterer og gjenbruker eksisterende celler, lager 0 nye) vs. **funksjonelt** (bygger en ny struktur, lar den gamle være) — variant (d) i signaturoppgaven, og et av sensors mest straffede skiller.
- **Eksamensbelegg:** Destruktiv vs. funksjonell 4/4 (del av 25–27 p-seksjonen). Sensors fallgruve: en «destruktiv» versjon som likevel lager nye celler — poenget er **0 nye cons**. Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom: destruktiv gjenbruk):** Funksjonell versjon (`cons` foran rekursivt kall → ny struktur, gamle urørt); destruktiv versjon (`set-car!`/`set-cdr!` på eksisterende celler → **0 nye celler**, gamle struktur ødelagt/endret); at destruktiv sparer minne men har side-effekter; når hver er egnet. **De tre refleksene**-`tip`: destruktiv = 0 nye cons, side-effekt; funksjonell = 1/element, rent. Til bruk og analyse.
- **Oppgavesjangre:** D (d-variant). Mønstereksempel: «Skriv `(dobbel! xs)` som dobler hvert tall i lista **destruktivt** med `set-car!`. Hvor mange nye cons-celler lager den?» (Fasit-idé: 0 nye — muterer på plass.)
- **Typiske feil:** Lage nye celler i en «destruktiv» versjon (§ analysen §5.5); glemme at destruktiv ødelegger den opprinnelige strukturen; tro funksjonell og destruktiv gir ulik *verdi* (de gir samme verdi, ulik struktur/effekt); ikke traversere med `set-cdr!` når hele kjeden skal endres.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 5.3: DRILL — Cons-celle-telling

- **id:** `in2040-5-3` · **number:** 5.3 · **estimatedMinutes:** 70 · **prerequisites:** `in2040-5-2` · **kapitteltype:** drill
- **description:** Full drill på refleks 2 av «de tre refleksene»: gitt en prosedyre-variant, tell nøyaktig hvor mange nye cons-celler den genererer, og begrunn — kjernen i signaturoppgavens analysedel.
- **Eksamensbelegg:** Cons-celle-telling 4/4 (analysedelen av 25–27 p-seksjonen). Sensor krever **begrunnet** telling: destruktiv = 0; funksjonell rekursjon = én per element; strøm = én (resten utsatt). Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** For hver variant: 1) finn hvert `cons`-kall (også skjult i `list`/`append`); 2) tell hvor mange som faktisk **utløses** for input av lengde n; 3) trekk fra celler som deles/gjenbrukes; 4) begrunn med regelen. **`theorem`-idiom: cons-tellings-regelen** — destruktiv (`set-car!`/`set-cdr!`) = **0** nye; vanlig funksjonell rekursjon = **n** (én per element); `append` = én per element i første liste; strøm = **1** (resten utsatt i den forsinkede `cdr`). Gjennomgått eksempel med margnotater.
- **Oppgavesjangre:** D (analysedel). 12–16 oppgaver: gitt en variant, tell cons-cellene og begrunn — inkludert sammenligning av alle fem idiomer på samme spesifikasjon. Mønstereksempel: «Hvor mange nye cons-celler lager den funksjonelle vs. den destruktive versjonen av `(scale k xs)` for en liste med 4 elementer?» (Fasit-idé: 4 vs. 0.)
- **Typiske feil:** Telle print-verdiens celler i stedet for de *genererte*; overse `cons` skjult i `list`/`append`; telle celler som deles; glemme at strømmens utsatte `cdr` bare gir én celle nå.
- **Quiz: 22 · Flashcards: 14** (quiz er nesten utelukkende «hvor mange cons-celler?» — direkte refleks-2-trening)

---

### Del 6 — Samme prosedyre i alle idiomer (SIGNATUROPPGAVEN) *(prioritet: PERFEKT — 25–27 p, tyngste enkeltsjanger)*

> **Dette er kjernesjangeren i faget** og finnes i alle fire kjente sett (25–27 p).
> Én enkel spesifikasjon skal skrives i **fem varianter**, med cons-telling for hver.
> Del 6 samler alt fra Del 2–5 til det gjennomgående «skriv-den-i-fem-varianter»-
> formatet som DNA-en (analysen §8) krever at boka bygges rundt.

#### Kapittel 6.1: De fem idiomene — én spesifikasjon, fem implementasjoner

- **id:** `in2040-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** `in2040-5-3` · **kapitteltype:** teori
- **description:** Den systematiske malen: gitt én spesifikasjon (f.eks. `scale`, `replace`, `transform-if`), skriv den (a) halerekursivt, (b) vanlig-rekursivt, (c) med HOF, (d) destruktivt, (e) som strøm — og tell cons-celler for hver.
- **Eksamensbelegg:** Sjanger D — signaturoppgaven, 4/4, 25–27 p, tyngste enkeltsjanger. Alle fem varianter + cons-telling forekommer. Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom: fem-idiomer-malen):** For én spesifikasjon: **(a) halerekursiv** (intern `iter` + akkumulator + `reverse`, iterativ prosess) — fra kap. 2.2; **(b) vanlig rekursiv** (`cons` foran kallet, rekursiv prosess) — kap. 2.1; **(c) HOF** (`map`/`filter`) — kap. 3.1; **(d) destruktiv** (`set-car!`/`set-cdr!`, 0 nye celler) — kap. 5.2; **(e) strøm** (`cons-stream`, én utsatt celle) — foregriper Del 8. For hver: oppgi prosesstype + cons-telling (de tre refleksene). Til bruk og analyse.
- **Oppgavesjangre:** D. Mønstereksempel (nyskrevet spesifikasjon): «`(scale k xs)` skal gange hvert tall i `xs` med `k`. Skriv variant (a)–(d) og oppgi prosesstype og cons-telling for hver.» (Strøm-varianten (e) introduseres her, drilles fullt i Del 8.)
- **Typiske feil:** Levere feil prosesstype for en variant (kalle (b) halerekursiv); lage nye celler i (d); glemme `reverse` i (a); feil cons-telling per variant; blande variantene sammen.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 6.2: DRILL — Signaturoppgaven: samme prosedyre i alle idiomer

- **id:** `in2040-6-2` · **number:** 6.2 · **estimatedMinutes:** 90 · **prerequisites:** `in2040-6-1` · **kapitteltype:** drill
- **description:** Den fullt gjennomarbeidede malen for signaturoppgaven: fra én spesifikasjon til fem korrekte varianter, hver med prosesstype og cons-telling, i sensors stil — med margnotater om hva som gir uttelling ved hvert steg.
- **Eksamensbelegg:** Sjanger D (100 % av de kjente settene, 25–27 p — den enkeltoppgaven som veier tyngst). Domenene roterer (`scale`, `replace`, `transform-if`, `take`/`drop`), øvelsen er identisk. Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift — fem-idiomer-malen samlet):** 1) forstå spesifikasjonen og skriv ett lite testeksempel; 2) skriv variant (a) halerekursiv, (b) vanlig rekursiv, (c) HOF, (d) destruktiv, (e) strøm; 3) for hver: oppgi **prosesstype** og **cons-telling** med begrunnelse; 4) noter hvilke som er rent funksjonelle og hvilke som har side-effekter (refleks 3). Gjennomarbeidet eksamenscase (én spesifikasjon, alle fem varianter + full analyse) med **margnotater om hva som gir pott ved hvert steg** og påminnelse om at flere gyldige løsninger godtas.
- **Oppgavesjangre:** D. 8–12 signaturoppgaver på eksamensnivå med roterende spesifikasjoner, hver krever alle fem varianter + de tre refleksene, alle med `solution` + `hints` og sensor-kommentarer. Mønstereksempel: en komplett `(transform-if pred f xs)`-spesifikasjon (bytt ut elementer som tester sant med `(f x)`) skrevet i alle fem idiomer.
- **Typiske feil:** Feil prosesstype-etikett per variant (§ analysen §5.1); nye celler i destruktiv (§5.5); glemme strøm-varianten eller bruke vanlig `cons` der `cons-stream` trengs (§5.3); mangelfull cons-telling; ikke bruke terminologi i begrunnelsene.
- **Quiz: 18 · Flashcards: 12**

---

### Del 7 — Closures, lokal tilstand og message passing *(prioritet: PERFEKT — 17–25 p, den store OO-seksjonen)*

> **Dette er den tyngste enkeltoppgaven** (17–25 p, 4/4). Skriv en objekt-konstruktør
> som returnerer en `lambda` med **innkapslet lokal tilstand** endret via `set!`, med
> message passing og variadiske argumenter. Fem kapitler bygger malen stegvis;
> kap. 7.5 er den fulle drillen. Full pott har fire eksplisitte krav (stilregel 5).

#### Kapittel 7.1: `set!` og lokal tilstand: closures

- **id:** `in2040-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `in2040-5-1`, `in2040-3-2` · **kapitteltype:** teori
- **description:** En **closure**: en prosedyre (`lambda`) som fanger og holder på **lokal tilstand** i sin definisjonsramme, endret via `set!` — grunnlaget for objekter uten klasser. Kontrasten til rent funksjonell kode blir eksplisitt.
- **Eksamensbelegg:** Closures/lokal tilstand 4/4 (den store OO-seksjonen, 17–25 p). Kjernemønsteret `make-X` som returnerer en tilstandsbærende `lambda`. Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom: closure-med-lokal-`set!`):** `(define (make-teller) (let ((n 0)) (lambda () (set! n (+ n 1)) n)))` — `let` over `lambda`, lokal `n` innkapslet, `set!` endrer den mellom kall; at closuren **fanger definisjonsrammen** (leksikalsk), ikke kall-rammen; at tilstand ⇒ **ikke** rent funksjonelt (samme kall gir ulik verdi); lokal (ikke global) tilstand. **`warning`: Closure-fella — lokal, ikke global tilstand** (bruk `let`/intern binding, ALDRI en global variabel). **De tre refleksene**-`tip`: her aktiveres refleks 3 (side-effekt, tilstandsavhengig). Til bruk og konstruksjon.
- **Oppgavesjangre:** F-grunnlag. Mønstereksempel: «Skriv `(make-teller)` som returnerer en prosedyre som gir 1, 2, 3, … ved suksessive kall. Hvorfor er dette ikke rent funksjonelt?»
- **Typiske feil:** Bruke en global variabel i stedet for lokal tilstand (§ stilregel 5, closure-fella); glemme `set!` (tilstanden endres ikke); returnere tilstanden i stedet for en prosedyre; tro closuren fanger kall-rammen (§ analysen §5.8).
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 7.2: Message passing og prosedyrebasert OO

- **id:** `in2040-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `in2040-7-1` · **kapitteltype:** teori
- **description:** Objekter som prosedyrer: en `lambda` som tar en **beskjed** (et symbol) og dispatcher til rett oppførsel — `'add`/`'sub`/`'value` — bak et rent grensesnitt, med lokal tilstand skjult inni.
- **Eksamensbelegg:** Message passing 4/4 (den store OO-seksjonen). `make-accumulator`-typen (`'add`/`'sub`/`'undo`) og grensesnitt-innkapsling. Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom: message-passing-dispatch):** `(lambda (msg) (cond ((eq? msg 'add) …) ((eq? msg 'value) …) (else (error …))))`; dispatch på symbol med `eq?`; **alle** beskjeder implementert (stilregel 5); skjult lokal tilstand bak et rent grensesnitt (en ytre prosedyre `(card-order obj …)` som sender beskjeden); `'undo` som krever historikk av tidligere tilstander. Til bruk og konstruksjon.
- **Oppgavesjangre:** F. Mønstereksempel: «Skriv `(make-konto saldo)` som svarer på beskjedene `'inn`, `'ut` og `'saldo`, med saldoen som lokal tilstand.»
- **Typiske feil:** Glemme en beskjed (ikke full pott, stilregel 5); glemme `else`/`error`-grenen; eksponere tilstanden i stedet for å skjule den bak grensesnittet; bruke `equal?` der `eq?` på symboler er nok; ikke holde historikk for `'undo`.
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 7.3: Variadiske objekter og `apply`

- **id:** `in2040-7-3` · **number:** 7.3 · **estimatedMinutes:** 50 · **prerequisites:** `in2040-7-2` · **kapitteltype:** teori
- **description:** Objekter som må ta **ulikt antall argumenter** per beskjed: variadisk `lambda` med dot-notasjon eller `(lambda args …)`, og `apply` for å sende en argumentliste videre — et eksplisitt full-pott-krav i OO-oppgavene.
- **Eksamensbelegg:** Variadisk håndtering + `apply` 4/4 (full-pott-krav i OO-seksjonen, stilregel 5). `monitor` (teller kall, `apply` på variadiske argumenter) og `make-card` med variabelt antall argumenter. Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom: variadisk `apply`):** Dot-notasjon `(lambda (first . rest) …)` (fast + variabel del); `(lambda args …)` (`args` = liste av alle argumenter); `(apply f arg-liste)` (kaller `f` med elementene i lista som argumenter); message passing der beskjeden tar variabelt antall argumenter (`(lambda (msg . args) (cond … (apply handler args)))`). Til bruk og konstruksjon.
- **Oppgavesjangre:** F. Mønstereksempel: «Skriv `(monitor f)` som pakker inn `f`, teller antall kall, og svarer på `'antall`/`'nullstill` — men delegerer alle andre kall (med vilkårlig antall argumenter) til `f` via `apply`.»
- **Typiske feil:** Fast arity der variabel trengs (§ analysen §5.7); glemme `apply` (kan ikke videresende argumentlista); blande `(f . rest)` og `(f rest)`; ikke skille beskjeder fra videresendte kall.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 7.4: Data som prosedyrer: `cons`/`car`/`cdr` med closures

- **id:** `in2040-7-4` · **number:** 7.4 · **estimatedMinutes:** 45 · **prerequisites:** `in2040-7-2` · **kapitteltype:** teori
- **description:** Den dyptgripende innsikten om at data kan bygges **utelukkende av prosedyrer**: `cons`/`car`/`cdr` reimplementert med closures (Church-aktig), som viser at par ikke trenger primitivt minne. Nivå-3-tema, robusthet.
- **Eksamensbelegg:** «Data som kode» / prosedyrebaserte par 2/4 (nivå 3, differensierer). `(define (cons x y) (lambda (m) (m x y)))`-mønsteret. Prioritet: **kjenne**.
- **Kodekontrakt (Prosedyre- og konstruksjonsliste):** `(define (kons x y) (lambda (velg) (velg x y)))`; `(define (kar p) (p (lambda (a d) a)))`; `(define (kdr p) (p (lambda (a d) d)))`; innsikten at et par er **hva det gjør** (selektor-oppførsel), ikke hvordan det lagres; kobling til closures (paret er en closure over `x` og `y`). Til forståelse og konstruksjon.
- **Oppgavesjangre:** F (variant) + J-kobling. Mønstereksempel: «Implementér `kons`, `kar` og `kdr` kun med `lambda`, og vis at `(kar (kons 1 2)) → 1`.»
- **Typiske feil:** Prøve å lagre `x`/`y` eksternt i stedet for i closuren; feil selektor-`lambda`; ikke se at paret *er* en prosedyre; blande dette med de innebygde `cons`/`car`/`cdr`.
- **Quiz: 12 · Flashcards: 12**

#### Kapittel 7.5: DRILL — Objekt-konstruktør fra spesifikasjon

- **id:** `in2040-7-5` · **number:** 7.5 · **estimatedMinutes:** 90 · **prerequisites:** `in2040-7-3` · **kapitteltype:** drill
- **description:** Den fullt gjennomarbeidede malen for OO-seksjonen: fra en spesifikasjon til en objekt-konstruktør med lokal tilstand, message passing, variadiske argumenter og alle beskjeder — i sensors stil, med de fire full-pott-kravene sjekket.
- **Eksamensbelegg:** Sjanger F (4/4, 17–25 p — tyngste enkeltoppgave). Faste eksempler: `make-accumulator` (`'add`/`'sub`/`'undo`), `make-card`/kaffekort (saldo, bonus hver n-te, `quotient`/`remainder`), `make-queue`, `monitor`. Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift — OO-malen samlet):** 1) identifisér tilstanden (lokal, `let`/intern binding); 2) skriv dispatch-`lambda` med alle beskjeder; 3) bruk variadisk `lambda` + `apply` der beskjeder tar ulikt antall argumenter; 4) skjul tilstanden bak et rent grensesnitt (ytre selektor-prosedyrer); 5) implementér `'undo`/gjenoppretting med historikk der bedt om. **De fire full-pott-kravene** (stilregel 5): lokal (ikke global) tilstand, variadisk håndtering, alle beskjeder, korrekt gjenoppretting. Gjennomarbeidet eksamenscase (én fullstendig objekt-spesifikasjon) med margnotater om hvert full-pott-krav.
- **Oppgavesjangre:** F. 6–10 objekt-konstruktør-oppgaver på eksamensnivå med roterende domener (teller med undo, kaffekort med bonus, kø, kall-monitor), hver flerdelt, alle med `solution` + `hints` og sensor-kommentarer. Mønstereksempel: en komplett «bonuskort»-spesifikasjon (saldo, hver 10. kjøp gratis, message passing, variabelt antall argumenter).
- **Typiske feil:** Global i stedet for lokal tilstand (§5, closure-fella); glemme en beskjed eller `else`-grenen; fast arity der variadisk trengs (§ analysen §5.7); ingen historikk for `'undo`; eksponere tilstanden; ikke bruke terminologi (lokal tilstand, message passing, closure) i forklaringen.
- **Quiz: 16 · Flashcards: 14**

---

### Del 8 — Strømmer og utsatt evaluering *(prioritet: PERFEKT — 12–20 p)*

> Del 8 lærer strømmer: uendelige sekvenser bygget på **utsatt evaluering**. `cons-
> stream` er en **spesialform** (fra kap. 1.3) som utsetter sin `cdr` — nøkkelen til at
> uendelige sekvenser fungerer. Strøm er variant (e) i signaturoppgaven og en egen
> 4/4-seksjon.

#### Kapittel 8.1: `delay`, `force` og `cons-stream`

- **id:** `in2040-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `in2040-1-3`, `in2040-4-2` · **kapitteltype:** teori
- **description:** Grunnlaget under strømmer: `delay` lager et løfte (utsatt beregning), `force` innløser det, og `cons-stream` er spesialformen som utsetter `cdr` — slik at en strøm kan være uendelig uten å loope.
- **Eksamensbelegg:** Strømmer 4/4 (12–20 p). At `cons-stream` er en **spesialform** som utsetter andre-argumentet er den avgjørende innsikten (og en fast felle). Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom: `cons-stream`-utsatt-`cdr`):** `(delay uttrykk)` (utsatt beregning / løfte); `(force løfte)` (innløs); **`cons-stream` som spesialform** — `(cons-stream a b)` ≡ `(cons a (delay b))`, altså `a` evalueres straks, `b` utsettes; `(stream-car s)` = `(car s)`; `(stream-cdr s)` = `(force (cdr s))`; `the-empty-stream`, `(stream-null? s)`. **De tre refleksene**-`tip`: cons-telling = strøm gir én celle nå (resten utsatt). Til bruk og konstruksjon.
- **Oppgavesjangre:** H-grunnlag. Mønstereksempel: «Forklar hvorfor `(cons-stream 1 (loop-uendelig))` ikke henger, mens `(cons 1 (loop-uendelig))` gjør det.» (Fasit-idé: `cons-stream` utsetter `cdr` fordi den er en spesialform.)
- **Typiske feil:** Bruke vanlig `cons` der `cons-stream` trengs (uendelig løkke, § analysen §5.3); glemme `force` når man tar `stream-cdr`; tro `cons-stream` er en vanlig prosedyre; evaluere hele strømmen straks.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 8.2: Uendelige strømmer og `stream-filter`

- **id:** `in2040-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** `in2040-8-1` · **kapitteltype:** teori
- **description:** Å definere uendelige sekvenser (`ones`, `integers`) og operere på dem: `stream-filter`, `stream-map`, `stream-range`, og sikten (Eratosthenes) — med den kjente `add-streams`-fella.
- **Eksamensbelegg:** Uendelige strømmer + `stream-filter`/Eratosthenes 4/4. Fast delspørsmål: «hvorfor trengs øvre grense i listevarianten, men ikke i strømvarianten?». Prioritet: **perfekt**.
- **Kodekontrakt (Prosedyre- og konstruksjonsliste):** `(define ones (cons-stream 1 ones))` (utsatt selvreferanse — virker); `(define integers (cons-stream 1 (add-streams ones integers)))`; implementér `stream-filter`/`stream-map`/`stream-range` selv (rekursjon med `cons-stream`); sikten (`sieve`) for uendelige primtall; at strømmer beregnes **on demand** ⇒ ingen øvre grense trengs. **`warning`: `ones`/`integers`-fella** — `(define integers (add-streams ones integers))` uten `cons-stream` feiler fordi `add-streams` er en vanlig prosedyre som prøver å evaluere `integers` før den er definert (§ analysen §5.4). Til bruk og konstruksjon.
- **Oppgavesjangre:** H. Mønstereksempel: «Implementér `(stream-filter p s)` for en (evt. uendelig) strøm, og bruk den til å lage strømmen av alle partall.»
- **Typiske feil:** `add-streams`-fella (§5.4); glemme at `stream-cdr` må `force`e; bygge en øvre grense inn i strømvarianten unødvendig; tro filtrering på en uendelig strøm må terminere.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 8.3: DRILL — Implementér strøm-operasjoner + strøm vs. liste

- **id:** `in2040-8-3` · **number:** 8.3 · **estimatedMinutes:** 75 · **prerequisites:** `in2040-8-2` · **kapitteltype:** drill
- **description:** Full drill på strøm-seksjonen: implementér strøm-operasjoner fra bunnen, sammenlign strøm- vs. listevariant av samme prosedyre, og svar på de faste forklaringsspørsmålene (hvorfor forsvinner øvre grense, når lønner strømmen seg).
- **Eksamensbelegg:** Sjanger H (4/4, 12–20 p). Faste delspørsmål: «hvorfor øvre grense i liste men ikke strøm?» (spesialform ⇒ utsatt `cdr`), «hvor mange cons-celler / når lønner strømmen seg?» (avbryter tidlig). Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** 1) skriv strøm-operasjonen med `cons-stream` (utsatt `cdr`) og `stream-car`/`stream-cdr`; 2) sammenlign med listevarianten (samme prosedyre, `cons` + `car`/`cdr`); 3) svar på øvre-grense-spørsmålet (strøm beregner on demand); 4) analysér cons-telling og når tidlig avbrudd lønner seg (`same-fringe?`-strømvariant avbryter ved første forskjell). Gjennomgått eksamenscase med margnotater. `warning`: `cons-stream`, ikke `cons`.
- **Oppgavesjangre:** H. 8–12 oppgaver på eksamensnivå: implementér strøm-operasjon + forklar strøm-vs-liste, roterende (`stream-range`, `stream-append`, sikten, `same-fringe?`-strøm), alle med `solution` + `hints`. Mønstereksempel: «Implementér `(stream-take s n)` som gir en *liste* av de `n` første elementene, og forklar hvorfor `s` selv kan være uendelig.»
- **Typiske feil:** `cons` der `cons-stream` trengs (§5.3); glemme `force`; feil svar på øvre-grense-spørsmålet (ikke koble til spesialform); mangelfull cons-telling for strømvarianten.
- **Quiz: 18 · Flashcards: 12**

---

### Del 9 — Evaluering, miljømodell og metasirkulær evaluator *(prioritet: KUNNE / KJENNE)*

> Del 9 samler sporing og teori: omgivelsesdiagram (3/4, 10 p, **kunne**),
> evalueringsstrategier (4/4 teori, **kunne**), den metasirkulære evaluatoren **kun
> konseptuelt** (**kjenne** — avprioritert, testes aldri som koding), og funksjonell-
> kode-essayet (3/4, **kjenne**). Refleks 3 (funksjonell vs. side-effekt) får sin
> teoretiske avrunding her.

#### Kapittel 9.1: Miljømodellen og omgivelsesdiagram

- **id:** `in2040-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `in2040-7-1` · **kapitteltype:** teori
- **description:** Miljømodellen for evaluering: rammer, bindinger og leksikalsk scope, og hvordan en closure peker til sin **definisjonsramme** — grunnlaget for å tegne omgivelsesdiagram med `set!` og `make-X`.
- **Eksamensbelegg:** Omgivelsesdiagram 3/4 (10 p, sporing/tegning). Tester leksikalsk scope + at closures peker til definisjonsrammen. Prioritet: **kunne**.
- **Kodekontrakt (`theorem`-idiom: omgivelsesdiagram-regelen):** En **ramme** holder bindinger (navn → verdi); det globale miljøet er den ytterste rammen; et prosedyrekall lager en **ny ramme** med parametrene bundet, som peker til prosedyrens **definisjonsramme** (ikke kall-rammen — leksikalsk scope); en closure = prosedyre + peker til definisjonsrammen; `set!` endrer en binding i den rammen der navnet er definert. Tegneregler: rammer som bokser, prosedyrer som par (kode + miljøpeker). Til sporing og tegning.
- **Oppgavesjangre:** G-grunnlag. Mønstereksempel: «Etter `(define (lag-teller) (let ((n 0)) (lambda () (set! n (+ n 1)) n)))` og `(define t (lag-teller))` — hvilken ramme holder `n`, og hvor peker `t`?»
- **Typiske feil:** La closuren peke til kall-rammen i stedet for definisjonsrammen (§ analysen §5.8); plassere en binding i feil ramme; glemme at `let` lager en ramme; tro `set!` lager en ny binding i stedet for å endre en eksisterende.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 9.2: DRILL — Tegn omgivelsesdiagram

- **id:** `in2040-9-2` · **number:** 9.2 · **estimatedMinutes:** 65 · **prerequisites:** `in2040-9-1` · **kapitteltype:** drill
- **description:** Full drill på sjanger G: gitt en sekvens med `define`/`lambda`/`make-X`/`set!`, tegn alle rammer og bindinger etter at hele sekvensen er evaluert, og vis leksikalsk scope korrekt.
- **Eksamensbelegg:** Sjanger G (3/4, ~10 p, tegning). Gis en sekvens med en `lambda` som fanger en fri variabel, et `make-X` som lager en closure, og `set!`-kall. Prioritet: **kunne**.
- **Kodekontrakt (løsningsoppskrift):** 1) start med det globale miljøet; 2) for hver `define`: legg en binding i gjeldende ramme; 3) for hvert prosedyrekall/`let`: lag en ny ramme som peker til definisjonsrammen; 4) tegn closurer som prosedyre + miljøpeker; 5) for hver `set!`: oppdater bindingen i rett ramme; 6) sjekk at frie variabler slås opp langs definisjonskjeden (leksikalsk). Gjennomgått case med margnotater om at diagrammet må vise korrekte miljøpekere.
- **Oppgavesjangre:** G. 8–12 diagramoppgaver på eksamensnivå med roterende sekvenser (teller, konto, delt closure), hver med fullstendig rammediagram. Mønstereksempel: «Tegn omgivelsesdiagrammet etter to kall på en teller laget av `(lag-teller)`.»
- **Typiske feil:** Feil miljøpeker (kall- vs. definisjonsramme, §5.8); glemme rammen `let`/kall lager; oppdatere feil binding ved `set!`; ikke vise delte rammer når to closurer deler tilstand.
- **Quiz: 16 · Flashcards: 10**

#### Kapittel 9.3: Evalueringsstrategier: eager vs. lazy og memoisering

- **id:** `in2040-9-3` · **number:** 9.3 · **estimatedMinutes:** 55 · **prerequisites:** `in2040-8-1` · **kapitteltype:** teori
- **description:** Teorien om evalueringsrekkefølge: applicative-order (eager) vs. normal-order (lazy), call-by-value/name/need, og hvorfor memoisering (call-by-need) er relevant under lazy men irrelevant under eager.
- **Eksamensbelegg:** Evalueringsstrategier 4/4 (teori, 7–16 p). Faste spørsmål: forklar eager vs. lazy; motivér memoisering; hvorfor var memoisering *irrelevant* under applicative-order; rollen til `delay`/`cons-stream` som spesialformer. Terminologi belønnes tungt. Prioritet: **kunne**.
- **Kodekontrakt (`definition`-tunge begreper):** **applicative-order / eager** (argumenter evalueres straks, før kallet); **normal-order / lazy** (argumenter evalueres først når de trengs); **call-by-value** (eager), **call-by-name** (lazy uten memoisering), **call-by-need** (lazy med memoisering — evaluer maks én gang); **memoisering** (husk resultatet av en utsatt beregning); at `delay`/`cons-stream` gir lazy oppførsel i et ellers eager språk. **`warning`: memoisering ≠ lazy generelt** — lazy = utsatt; memoisering = evaluer maks én gang; under applicative-order er memoisering irrelevant fordi alt evalueres straks (§ analysen §5.6). Til teori og essay.
- **Oppgavesjangre:** I. Mønstereksempel: «Forklar med kursterminologi forskjellen på call-by-name og call-by-need, og hvorfor sistnevnte trenger memoisering.»
- **Typiske feil:** Forveksle memoisering med lazy generelt (§5.6); tro memoisering hjelper under eager; blande normal-order og applicative-order; forklare uten terminologi (sensor belønner presise termer).
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 9.4: Den metasirkulære evaluatoren — konseptuelt

- **id:** `in2040-9-4` · **number:** 9.4 · **estimatedMinutes:** 45 · **prerequisites:** `in2040-9-3` · **kapitteltype:** teori
- **description:** Hovedstrukturen i en Scheme-tolker skrevet i Scheme (`eval`/`apply`, miljø som ramme-liste) — **kun konseptuelt**, for å kunne *resonnere om* evalueringsstrategier, ikke for å kode. Avprioritert: `(verifiser mot 2018–2023)`.
- **Eksamensbelegg:** Metasirkulær evaluator **0/4 som koding, 4/4 som teori-referanse** (del av evalueringsstrategi-oppgavene). Dukker opp som «forklar hvordan den kunne endres til å implementere lazy evaluation, og hvorfor memoisering da ble relevant». **Aldri** som å skrive evaluator-kode i de fire kjente settene. Prioritet: **kjenne** (kort, konseptuelt — se evidensforbeholdet).
- **Kodekontrakt (Prosedyre- og konstruksjonsliste — kun konseptuelt):** `eval` (tar uttrykk + miljø, returnerer verdi — dispatch på uttrykkstype); `apply` (tar prosedyre + argumenter); miljøet som en liste av rammer; at spesialformer (`if`, `define`, `lambda`) håndteres eksplisitt i `eval`; **konseptuelt**: hvordan `eval` kunne endres til lazy (utsette argument-evaluering i `apply`) og hvorfor memoisering da blir relevant. **Ikke** koding — resonnering. Kort **kjenne**-omtale av makrosystemer og numerikk (utenfor eksamensfokus).
- **Oppgavesjangre:** I (konseptuell del). Mønstereksempel: «Forklar i to–tre setninger hvordan den metasirkulære evaluatoren måtte endres for å bli lazy, og hvorfor memoisering da ble aktuelt.»
- **Typiske feil:** Bruke tid på å pugge/skrive full evaluator-kode (testes ikke, § evidensforbehold); blande `eval` og `apply`; ikke koble lazy-modifikasjonen til memoisering; overse at spesialformer håndteres særskilt.
- **Quiz: 12 · Flashcards: 14**

#### Kapittel 9.5: Hva kjennetegner funksjonell kode? (essay)

- **id:** `in2040-9-5` · **number:** 9.5 · **estimatedMinutes:** 40 · **prerequisites:** `in2040-7-1` · **kapitteltype:** teori
- **description:** Essay-sjangeren: hva som kjennetegner en ren funksjon (kalles for returverdien, samme argumenter gir alltid samme verdi, ingen side-effekter, uavhengig av evalueringstidspunkt), i kontrast til tilstandsavhengige prosedyrer — refleks 3 satt i ord.
- **Eksamensbelegg:** Sjanger J (3/4, 6–12 p, essay). «Ikke skriv mer enn en halv side.» Kjernen i refleks 3. Prioritet: **kjenne** (differensierer / robusthet).
- **Kodekontrakt (`definition`-begreper):** **ren funksjon** (returverdi-kall, referensiell transparens: samme argumenter → samme verdi, ingen effekt, uavhengig av evalueringstidspunkt); **side-effekt** (endrer tilstand via `set!`/`set-car!`/I/O); kontrast mot tilstandsavhengige prosedyrer (closures/OO, Del 7); fordelene ved ren kode (testbar, parallelliserbar, resonnerbar). Til essay. Kort, presist språk (halv side).
- **Oppgavesjangre:** J. Mønstereksempel: «Forklar med kursterminologi hva som kjennetegner en ren funksjon, og gi ett eksempel på en prosedyre som IKKE er ren og hvorfor.»
- **Typiske feil:** Ramse opp uten terminologi; skrive for langt (sensor ber om en halv side); kalle en tilstandsbærende closure «ren»; blande side-effekt og returverdi; glemme referensiell transparens.
- **Quiz: 12 · Flashcards: 14**

---

### Del 10 — Eksamenstrening

> IN2040 har **kun avsluttende eksamen** (ingen midtveis, ingen hjelpemidler), så
> Del 10 er tre komplette avsluttende øvingssett etter den faste **6-seksjon-malen**
> (100 p, 4 t) — hvert med signaturoppgaven (~25 p) og OO-seksjonen (~20–25 p) som
> tyngdepunkt. Domenet/spesifikasjonene roterer; sett 3 har et tyngre toppsjikt.

#### Kapittel 10.1: Avsluttende øvingseksamen 1

- **id:** `in2040-10-1` · **number:** 10.1 · **estimatedMinutes:** 240 · **prerequisites:** Del 1–9 · **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers hjelpemiddelfritt sett etter 6-seksjon-malen (100 p), med signaturoppgaven og en `make-accumulator`-type OO-seksjon som tyngdepunkt.
- **Eksamensbelegg/miks:** Speiler et typisk sett (100 p, 4 t, ingen hjelpemidler): **Seksjon 1** (~10 p) box-og-peker + mutasjon + strukturdeling (A, inkl. `???`-utfylling) → **Seksjon 2** (~6 p) «mysterium» (B) → **Seksjon 3** (~25 p) signaturoppgaven: én spesifikasjon i fem idiomer + cons-telling (D) → **Seksjon 4** (~22 p) objekt-konstruktør med lokal tilstand og message passing (F) → **Seksjon 5** (~18 p) strøm-seksjon med uendelig sekvens (H) → **Seksjon 6** (~12 p) teori: funksjonell kode + evalueringsstrategier (I/J), evt. et lite omgivelsesdiagram (G). Alle nyskrevne. Løsningsforslag som A-besvarelse i `collapsible` per seksjon, med **de tre refleksene** anvendt på hver kodeseksjon og `tip` om delpoeng/vekting (pseudokode gir pott). `tip` om tidsbudsjett (Seksjon 3+4 = tyngdepunktet, ~120 min).
- **Kodekontrakt:** Dekker sjangrene A, B, D, F, H, I, J (+ G).
- **Oppgavesjangre:** A, B, D, F, H, I, J.
- **Typiske feil:** Prosesstype-forveksling i signaturoppgaven (§5.1); global tilstand i OO-seksjonen (§5); `cons` i stedet for `cons-stream` (§5.3); blankt der pseudokode ga pott; droppe terminologi i teoriseksjonen.
- **Quiz: 8 · Flashcards: 0**

#### Kapittel 10.2: Avsluttende øvingseksamen 2

- **id:** `in2040-10-2` · **number:** 10.2 · **estimatedMinutes:** 240 · **prerequisites:** `in2040-10-1` · **kapitteltype:** øvingseksamen
- **description:** Komplett avsluttende sett med en variadisk kaffekort-type OO-seksjon og et integrert omgivelsesdiagram som egen seksjon.
- **Eksamensbelegg/miks:** Samme 6-seksjon-mal (100 p, 4 t), nytt tyngdepunkt: **Seksjon 1** (~10 p) box-og-peker + strukturdeling + `set-car!` (A) → **Seksjon 2** (~6 p) «mysterium» (B, et ∀/∃-predikat) → **Seksjon 3** (~25 p) signaturoppgaven (D, ny spesifikasjon `transform-if`-type) → **Seksjon 4** (~24 p) **kaffekort-type objekt** med bonus (`quotient`/`remainder`), message passing og **variadiske argumenter** + `apply` (F) → **Seksjon 5** (~15 p) strøm-seksjon (H, `stream-filter`/sikten) → **Seksjon 6** (~10 p) **omgivelsesdiagram** (G) + kort evalueringsstrategi-spørsmål (I). Alle nyskrevne. Løsningsforslag som A-besvarelse med de tre refleksene, vektings-`tip` og full-pott-krav markert i OO-seksjonen.
- **Kodekontrakt:** Dekker A, B, D, F, H, G, I (variadisk `apply` + omgivelsesdiagram i fokus).
- **Oppgavesjangre:** A, B, D, F, G, H, I.
- **Typiske feil:** Fast arity i den variadiske OO-seksjonen (§5.7); closure peker til kall-rammen i omgivelsesdiagrammet (§5.8); glemme `apply`; feil cons-telling i signaturoppgaven; memoisering forvekslet med lazy (§5.6).
- **Quiz: 8 · Flashcards: 0**

#### Kapittel 10.3: Avsluttende øvingseksamen 3 (tyngre)

- **id:** `in2040-10-3` · **number:** 10.3 · **estimatedMinutes:** 240 · **prerequisites:** `in2040-10-2` · **kapitteltype:** øvingseksamen
- **description:** Komplett avsluttende sett med et tyngre toppsjikt: en objekt-konstruktør med `'undo`/historikk, en trerekursiv signaturoppgave, en strøm-seksjon med `same-fringe?` og en metasirkulær/lazy-konseptuell teoriseksjon.
- **Eksamensbelegg/miks:** Samme 6-seksjon-mal (100 p, 4 t), tyngste variant: **Seksjon 1** (~10 p) box-og-peker + delt struktur + mutasjon (A) → **Seksjon 2** (~6 p) «mysterium» (B, en trerekursiv HOF) → **Seksjon 3** (~27 p) signaturoppgaven over **nøstet** struktur (D, trerekursiv variant + cons-telling) → **Seksjon 4** (~23 p) objekt med **`'undo`/historikk** og gjenoppretting av tidligere tilstand (F, alle fire full-pott-krav) → **Seksjon 5** (~18 p) strøm-seksjon med `same-fringe?`-strømvariant og «når lønner strømmen seg» (H) → **Seksjon 6** (~12 p) teori: **metasirkulær evaluator → lazy + memoisering, konseptuelt** (I) + funksjonell-kode-essay (J). Supplerer 10.1/10.2 slik at de tre settene sammen dekker A–K minst én gang (K = `let`→`lambda`-desugaring som deloppgave i Seksjon 6). Alle nyskrevne. Løsningsforslag som A-besvarelse med de tre refleksene, delpoeng-signaler og full-pott-krav markert.
- **Kodekontrakt:** Dekker A, B, D, F, H, I, J (+ K, +G-moment) — supplerer 10.1/10.2 til full A–K-dekning.
- **Oppgavesjangre:** A, B, D, F, H, I, J, K.
- **Typiske feil:** Bare `cdr`-rekursjon på nøstet struktur (§ trerekursjon); ingen historikk for `'undo` (§5); feil cons-telling for trerekursiv variant; skrive full evaluator-kode i stedet for konseptuelt svar (§ evidensforbehold); for langt essay.
- **Quiz: 8 · Flashcards: 0**

---

## 5. Summeringskontroll (quiz/flashcards) — AUTORITATIV

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.2 | 12+14 = **26** | 16+18 = **34** |
| 1 | 1.1–1.3 | 18+18+18 = **54** | 20+18+18 = **56** |
| 2 | 2.1–2.4 | 18+18+14+22 = **72** | 16+16+14+12 = **58** |
| 3 | 3.1–3.3 | 16+16+16 = **48** | 18+16+12 = **46** |
| 4 | 4.1–4.4 | 18+16+16+20 = **70** | 20+18+16+12 = **66** |
| 5 | 5.1–5.3 | 16+16+22 = **54** | 18+16+14 = **48** |
| 6 | 6.1–6.2 | 16+18 = **34** | 16+12 = **28** |
| 7 | 7.1–7.5 | 16+14+14+12+16 = **72** | 18+16+14+12+14 = **74** |
| 8 | 8.1–8.3 | 16+16+18 = **50** | 16+16+12 = **44** |
| 9 | 9.1–9.5 | 16+16+16+12+12 = **72** | 16+10+20+14+14 = **74** |
| 10 | 10.1–10.3 | 8+8+8 = **24** | 0+0+0 = **0** |
| **Sum** | **37 kap.** | **576 ≥ 500 ✓** | **528 ≥ 500 ✓** |

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens og eksamensform. **Quiz** vektes mot de sporings- og
refleksferdighetene faget måler — «hva evaluerer X til?», «hvilken prosesstype?»,
«hvor mange cons-celler?», «hva skriver REPL-en?» — derfor er drillkapitlene 2.4
(22, prosesstype), 4.4 (20, box-og-peker), 5.3 (22, cons-telling) og 6.2 (18,
signatur) quiz-tunge. **Flashcards** vektes mot det rike terminologi- og
prosedyreapparatet; Del 1 (grunnbegreper), Del 7 (closures/OO) og Del 9
(evalueringsstrategier) bærer mest, siden begrepstettheten er høyest der.
Tetthetene ligger **komfortabelt over gulvet** (528/576) fordi faget premierer
terminologi og har mange presise idiomer/begreper å teste — jf. README-lærdommen om
at begrepsrike fag skal skaleres over 500. **Merk kalibreringen:** quiz er et
selvtest-/læringsverktøy (ekte eksamen har ingen flervalg) — se §1-avviket.

---

## 6. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–9 → 36 prøver)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med løsningsforslag (kort
Scheme-kode + de tre refleksene der relevant) og poengfordeling. Prøvekapitler
bygges som `in2040-<del>-prove` (chapterNumber `<del>.P`) etter plattformmønsteret,
eller som egne exercise-seksjoner i delens siste kapittel.

**Prøve-kvote Del 1:** 4 prøver (Scheme-grunnlaget)
1. Prøve 1.A (20 min): Evaluering — 8 «hva evaluerer X til?» med `→`-steg (sjanger A/C-grunnlag).
2. Prøve 1.B (25 min): `lambda`/`let`/`let*` — bindinger og scope, 6 sporing + 2 desugaring (K).
3. Prøve 1.C (20 min): Spesialformer — `if`/`cond`/`and`/`or`/`quote`, spesialform vs. prosedyre (I-grunnlag).
4. Prøve 1.D (30 min): Blandet — `let`→`lambda`-desugaring + betinget evaluering på tvers (K + A).

**Prøve-kvote Del 2:** 4 prøver (rekursjon, iterasjon og prosesstype)
1. Prøve 2.A (25 min): Skriv rekursiv prosedyre + oppgi prosesstype (sjanger C).
2. Prøve 2.B (25 min): Halerekursjon — skriv om til akkumulator-`iter`, oppgi prosesstype (C).
3. Prøve 2.C (20 min): Trerekursjon over nøstet liste (C).
4. Prøve 2.D (30 min): Prosesstype-analyse — 12 «hvilken prosesstype + hvorfor?» (refleks 1).

**Prøve-kvote Del 3:** 4 prøver (høyereordens prosedyrer)
1. Prøve 3.A (25 min): `map`/`filter`/`fold` — bruk + egen implementasjon (sjanger C/E).
2. Prøve 3.B (25 min): Returnér en `lambda` — `compose`/`repeat` (E).
3. Prøve 3.C (25 min): «Mysterium» — 6 navnløse HOF-er, forklar med terminologi + kalleksempel (B).
4. Prøve 3.D (30 min): Integrert — egen HOF + mysterium-lesing på tvers (E + B).

**Prøve-kvote Del 4:** 4 prøver (par, lister og strukturdeling)
1. Prøve 4.A (25 min): Box-og-peker — tegn diagram + print-verdi (sjanger A).
2. Prøve 4.B (25 min): Listeoperasjoner — `append`/`reverse`/`length` + cons-telling (A/C).
3. Prøve 4.C (25 min): Strukturdeling — `eq?` vs. `equal?`, delt vs. separat (A).
4. Prøve 4.D (30 min): Full åpningsoppgave — sekvens + diagram + `???`-utfylling (A).

**Prøve-kvote Del 5:** 4 prøver (mutasjon og cons-celle-telling)
1. Prøve 5.A (25 min): `set-car!`/`set-cdr!` på delt struktur — spor resultatet (sjanger A).
2. Prøve 5.B (25 min): Destruktiv vs. funksjonell versjon av samme prosedyre (D).
3. Prøve 5.C (25 min): Cons-celle-telling — 12 «hvor mange nye celler + hvorfor?» (refleks 2).
4. Prøve 5.D (30 min): Integrert mutasjon — destruktiv prosedyre + cons-telling + strukturdeling (A + D).

**Prøve-kvote Del 6:** 4 prøver (signaturoppgaven)
1. Prøve 6.A (30 min): To varianter (halerekursiv + vanlig rekursiv) + prosesstype (sjanger D).
2. Prøve 6.B (30 min): HOF- + destruktiv variant + cons-telling (D).
3. Prøve 6.C (35 min): Full signaturoppgave — alle fem idiomer på én spesifikasjon (D).
4. Prøve 6.D (40 min): Full signaturoppgave på eksamensnivå (~25 p) med cons-telling per variant (D).

**Prøve-kvote Del 7:** 4 prøver (closures, lokal tilstand og message passing)
1. Prøve 7.A (25 min): Closure med lokal `set!`-tilstand — `make-teller`-type (sjanger F).
2. Prøve 7.B (30 min): Message passing — dispatch på beskjeder, alle beskjeder (F).
3. Prøve 7.C (30 min): Variadisk objekt + `apply` — `monitor`-type (F).
4. Prøve 7.D (40 min): Full OO-oppgave på eksamensnivå (~22 p) med de fire full-pott-kravene (F).

**Prøve-kvote Del 8:** 4 prøver (strømmer og utsatt evaluering)
1. Prøve 8.A (25 min): `cons-stream`/`delay`/`force` — spesialform vs. prosedyre (sjanger H).
2. Prøve 8.B (25 min): Uendelige strømmer — `ones`/`integers`, `add-streams`-fella (H).
3. Prøve 8.C (30 min): Implementér `stream-filter`/sikten + strøm-vs-liste-forklaring (H).
4. Prøve 8.D (35 min): Full strøm-oppgave på eksamensnivå (~18 p) med cons-telling (H).

**Prøve-kvote Del 9:** 4 prøver (evaluering, miljømodell og metasirkulær evaluator)
1. Prøve 9.A (30 min): Omgivelsesdiagram — tegn rammer/bindinger etter en sekvens (sjanger G).
2. Prøve 9.B (25 min): Evalueringsstrategier — eager/lazy/memoisering, kort teori (I).
3. Prøve 9.C (20 min): Metasirkulær konseptuelt — lazy-modifikasjon + memoisering (I).
4. Prøve 9.D (25 min): Funksjonell-kode-essay + `let`→`lambda`-desugaring (J + K).

### Øvingseksamener (3 komplette sett — se kap. 10.1–10.3)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Avsluttende 1 (kap. 10.1) | Typisk sett (100 p) | 6-seksjon-mal; A/B/D/F/H/I/J (+G); signatur + `make-accumulator`-OO som tyngdepunkt |
| Avsluttende 2 (kap. 10.2) | Sett med variadisk OO + diagram | 6-seksjon-mal; A/B/D/F/G/H/I; kaffekort-OO (variadisk `apply`) + omgivelsesdiagram |
| Avsluttende 3 (kap. 10.3) | Tyngre sett | 6-seksjon-mal; A/B/D/F/H/I/J (+K,+G); trerekursiv signatur, `'undo`-OO, `same-fringe?`-strøm, metasirkulær konseptuelt |

Til sammen dekker de tre settene samtlige sjangre A–K minst én gang. **Ingen
midtveis-simulering** — IN2040 har kun avsluttende eksamen (ingen hjelpemidler).

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — den ene avsluttende 4-timers hjelpemiddelfrie Inspera-
   eksamenen (ingen flervalg), den faste 6-seksjon-strukturen med poeng/andel, og
   prognosen (fra kap. 0.1) — med signaturoppgaven (~25 p) og OO-seksjonen (~20–25 p)
   som tyngdepunkt. Med **evidensforbeholdet** eksplisitt (n = 4, INF2810-æra).
2. **De tre refleksene** — det gjennomgående grepet (kap. 0.2) løftet fram som
   studentens viktigste vane: for hver kodeoppgave, still (1) prosesstype?
   (2) cons-celler? (3) funksjonelt eller side-effekt? Med terminologi.
3. **Prioriteringskartet** — temafrekvensen omgjort til tre lesenivåer: **perfekt**
   (signaturoppgaven Del 6, closures/OO Del 7, box-og-peker/strukturdeling Del 4–5,
   prosesstype Del 2, strømmer Del 8), **kunne** (omgivelsesdiagram Del 9,
   evalueringsstrategier, HOF Del 3, `let`→`lambda`), **kjenne** (funksjonell-kode-
   essay, metasirkulær **konseptuelt**, data-som-prosedyrer — og at man IKKE skal
   pugge evaluator-koding).
4. **Sjangerguiden** — de 11 oppgavetypene A–K med løsningsoppskriftene fra
   drillkapitlene (2.4, 3.3, 4.4, 5.3, 6.2, 7.5, 8.3, 9.2) i kortform.
5. **Sensorreglene** — metareglene (pseudokode gir delpoeng — stå aldri fast; egne
   antakelser dokumenteres i kommentar; terminologi belønnes; struktur/identitet
   teller, ikke bare print-verdi; flere gyldige løsninger godtas; de fire full-pott-
   kravene på closure-/OO-oppgaver).
6. **Idiom-arket** — alle kodemønstrene fra kodekontraktene på ett oppslag:
   akkumulator-`iter`, `cons`-foran-rekursjon, trerekursjon, `map`/`filter`/`fold`,
   returner-en-`lambda`/`compose`, closure-med-lokal-`set!`, message-passing-dispatch,
   variadisk `apply`, `cons-stream`-utsatt-`cdr`, box-og-peker-regelen, cons-tellings-
   regelen, omgivelsesdiagram-regelen — som studentens ferdighetssjekkliste.
7. **Feilkatalogen** — de ni typiske feilene (§5 i analysen) samlet, hver med
   henvisning til kapitlet som forebygger den: halerekursjon vs. vanlig rekursjon,
   feil om strukturdeling, `cons-stream`-spesialform glemt, `ones`/`integers`-fella,
   destruktiv-lager-likevel-celler, memoisering-vs-lazy, message passing uten
   variadisk håndtering, omgivelsesdiagram-closure-peker, `let` vs. `let*`.
8. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant):
   Del 1 (Scheme-grunnlaget) → Del 2 (prosesstype — refleks 1) → Del 3 (HOF) →
   Del 4–5 (par/mutasjon/strukturdeling — refleks 2, fast åpning) → **Del 6
   (signaturoppgaven — mest tid, ~25 p)** → **Del 7 (closures/OO — ~20–25 p)** →
   Del 8 (strømmer) → Del 9 (miljømodell/teori) → prøvene underveis → de tre
   avsluttende settene de siste ukene under tidspress (240 min, ingen hjelpemidler),
   med tyngdepunkt på Del 6 + Del 7 hver gang.

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `in2040` med alle 37 kapitler
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/
   prerequisites/linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra §2-tabellen
   (obligatorisk — ellers viser bokforsiden «Seksjon N»).
2. **Del 0** (kap. 0.1–0.2) — etablerer sjangernavnene A–K, frekvenstallene,
   evidensforbeholdet OG «de tre refleksene» som resten refererer til.
3. **Fundamentet i avhengighetsrekkefølge**: Del 1 (Scheme-grunnlaget — kreves av
   alt) → Del 2 (rekursjon/prosesstype — refleks 1) → Del 3 (HOF) → Del 4 (par/
   lister/strukturdeling — fast åpning) → Del 5 (mutasjon/cons-telling — refleks 2;
   krever Del 4).
4. **Tyngdepunktet**: Del 6 (signaturoppgaven; krever Del 2–5 + foregriper strøm fra
   Del 8) → Del 7 (closures/OO; krever kap. 5.1 + 3.2) → Del 8 (strømmer; krever
   kap. 1.3 + 4.2). Merk at kap. 6.1 introduserer strøm-varianten (e) som drilles
   fullt i Del 8 — skriv kap. 6.1 med en kort forpeking, ikke full strøm-teori.
5. **Del 9** (miljømodell/teori; krever kap. 7.1 for closures i omgivelsesdiagram og
   kap. 8.1 for evalueringsstrategier) og **Del 10** (de tre avsluttende settene til
   slutt — de gjenbruker alle sjangrene A–K).
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; prøvene (§6) legges i respektive delers
   prøvekapittel/exercise-seksjoner.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **«De tre refleksene» gjennomført**: hvert kode-kapittel (teori + drill) har
  minst én `tip` med fast tittel «De tre refleksene» som anvender prosesstype /
  cons-telling / funksjonell-vs-effekt på kapitlets mønster-kodeoppgave.
- [ ] **Terminologi-tetthet**: teorikapitlene introduserer sine termer i
  `definition`-blokker og bruker dem aktivt (strukturdeling, halerekursjon,
  iterativ/rekursiv/trerekursiv prosess, spesialform, utsatt evaluering,
  applicative-/normal-order, memoisering, message passing, lokal tilstand,
  side-effekt, ren funksjonell, closure, leksikalsk scope).
- [ ] **Signaturoppgaven som gjennomgående format**: kap. 6.1–6.2 driller alle fem
  idiomer (halerekursiv/rekursiv/HOF/destruktiv/strøm) + cons-telling per variant;
  formatet gjenbrukes i prøver og øvingseksamener.
- [ ] **Closure-fella**: alle closure-/OO-eksempler bruker **lokal** tilstand (aldri
  global); `warning` «Closure-fella: lokal, ikke global tilstand» i Del 7; de fire
  full-pott-kravene (lokal tilstand, variadisk `apply`, alle beskjeder, gjenoppretting)
  er sjekket i kap. 7.5 og OO-seksjonene i Del 10.
- [ ] **Spesialform-konsistens**: `cons-stream` behandles konsekvent som spesialform
  (utsetter `cdr`); `warning` for `ones`/`integers`-fella og for `cons` vs.
  `cons-stream` i Del 8; koblingen til kap. 1.3 er eksplisitt.
- [ ] **Box-og-peker/omgivelsesdiagram viser identitet**: tegne-eksempler i Del 4 og
  9 viser strukturdeling/identitet (`eq?`-relasjoner) korrekt, ikke bare print-verdi;
  closure peker til **definisjonsrammen** i omgivelsesdiagram (kap. 9.1–9.2).
- [ ] **Prosedyre- og konstruksjonsliste per delkapittel**: hvert delkapittel som
  bruker Scheme-konstruksjoner har `collapsible` «Prosedyre- og konstruksjonsliste»
  rett etter Forkunnskaper, som forklarer ALLE prosedyrer/spesialformer/idiomer brukt
  i delkapitlet (per delkapittel, ikke arv).
- [ ] **Evidensforbehold + `(verifiser)`**: n = 4-forbeholdet er synlig i Del 0 og
  studieguiden; usikre vektings-/frekvenspåstander er merket `(verifiser)`; at den
  metasirkulære evaluatoren ikke testes som koding er merket `(verifiser mot
  2018–2023)`; boka bygger IKKE drill/prøver på evaluator-koding, makroer eller
  numerikk (kun kort **kjenne**-omtale, kap. 9.4).
- [ ] **Pseudokode-/delpoeng-regelen i løsningsforslag**: alle løsningsforslag (drill
  + øvingseksamener) viser at pseudokode med kommentarer gir delpoeng (stå aldri
  blankt), at flere gyldige løsninger godtas, og at riktig idiom/prosesstype belønnes.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra
  dette skjelettet), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå),
  6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`; drillkapitler har
  løsningsoppskrift + sensor-kommentert case + 8–16 oppgaver.
- [ ] **Quiz-sum ≥ 576 og flashcard-sum ≥ 528** per kvotetabellen (§5); quiz kalibrert
  som kodesporing/prosesstype/cons-telling/«hva evaluerer X til» (IKKE en eksamens-MC-
  speiling — ekte eksamen har ingen flervalg), `options[0]` = riktig svar.
- [ ] **Prøver**: 4 per temadel 1–9 (36 stk) + 3 avsluttende øvingseksamener (kap.
  10.1–10.3) som sammen dekker sjangrene A–K.
- [ ] **Opphavsrett**: ALLE oppgaver og kodeeksempler nyskrevne — egne prosedyrenavn,
  egne spesifikasjoner, egne domener; kodemønstrene er standard Scheme/R5RS-idiomer,
  men ingen oppgavetekster/fasiter fra reelle sett (INF2810/IN2040) gjengis ordrett.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
  (200 + innhold), jf. lærdommen om `getChapterMeta`.
