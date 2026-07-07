# Bokskjelett: IN1010 Objektorientert programmering (UiO) — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (hele UiO-arkivet 2015–2024: 9 oppgavesett + 16 løsningsforslag/
> sensorveiledninger, 25 filer). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) —
> kapittel-DNA-ene der (teori/drill/øvingseksamen) er obligatoriske og gjentas
> ikke i sin helhet her. Alle kodeeksempler og domener i den ferdige boka skal
> være **nyskrevne** (opphavsrett): kodemønstrene er standard Java-idiomer, men
> klassenavn, tall, domeneinnpakningen og oppgavetekstene skal være forfatterens
> egne — bruk domener som IKKE finnes i arkivet (arkivet bruker fly, tog, bil,
> hotell, skog, sykehus, hund; boka bruker f.eks. bibliotek, kollektivtransport,
> musikkstrømming, lager, dyrepark, verksted).
>
> **Forgjengerbok:** IN1010 er den objektorienterte oppfølgeren til **IN1900**
> (`in1900/SKJELETT.md`). Der IN1900 er Python, numerikk og vitenskapelig kode,
> er IN1010 Java og ren OO-tenkning. IN1900s spesialmetoder
> (`__init__`/`__call__`/`__str__`) tilsvarer nå Javas konstruktør, `toString()`,
> `compareTo()` og `@Override`. IN1900 er foreløpig **skjelett, ikke bygget** — så
> alle forkunnskaps-kryssreferanser til IN1900 skrives som **klartekst med
> aktiveringsmarkør**, ikke som live markdown-lenker (se stilregel §1). Når IN1900
> bygges, konverteres markørene til `[tittel](/bok/in1900/<id>)`.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `in1010` |
| Tittel | **IN1010 Objektorientert programmering (UiO)** |
| Level | `'Høyskole'` |
| Arketype | Regnefag (kvantitativt kodefag med fast, gjentakende oppgavemal) |
| Antall kapitler | **29** (1 eksamenskart + 25 tema/drill + 3 eksamenstrening) |
| Estimert totaltid | **2 090 min ≈ 35 timer** |
| Quiz totalt | **558** (krav ≥500) |
| Flashcards totalt | **518** (krav ≥500) |

**Pitch (én avsnitt):** IN1010 har en påfallende stabil eksamensmal. Vurderingen
er to hjelpemiddelfrie digitale Inspera-eksamener: en **midtveiseksamen** (25 %,
2 t, tidligpensum) og en **avsluttende eksamen** (75 %, **4 t, nesten ren
kodeskriving** — ingen flervalg og ingen «hva skrives ut»). Den avsluttende har
siden 2023 en helt fast oppbygging: **ett gjennomgående domenecase løses stegvis
gjennom fem oppgaver** — **O1** tegn klassehierarki (5 p) → **O2** programmér
klassene + interface med `super()` (15 p) → **O3** egendefinert lenket liste med
iterator og array-uttrekk (tyngst, 28–40 p) → **O4** egendefinert unntak +
iterativ og rekursiv aggregering (16–20 p) → **O5** to trådklasser + monitor med
`ReentrantLock`/`Condition` (20–36 p). Domenet roterer (fly, tog, bil, hotell,
skog …), men OO-øvelsen er identisk. Denne boka driller nettopp disse fem
mønstrene til automatikk, i sensors korte, idiomatiske stil — og parer hvert
kodemønster med et roterende domene, slik at studenten gjenkjenner oppgaven
uansett innpakning.

### Kritisk stilregel (gjelder HELE boka)

1. **Kort, idiomatisk Java.** Sensor forventer korte løsninger. «Svar ut over det
   du blir bedt om å gjøre, teller ikke med» — og kan **trekke** hvis det vitner
   om misforståelse. Skriv ALDRI `main`/trådoppstart når bare klassene
   etterspørres. **Import, kommentarer og aksessmodifikatorer (`public`/`private`/
   `protected`) vektlegges ikke** — felt gjerne uten modifikator (package-private),
   som i UiOs egne løsningsforslag. Norske bokstaver (æ, ø, å) i kode er greit.
   All eksempel- og fasitkode i boka skrives slik: kompakt, `@Override` der det
   hører hjemme, ingen overflødig pynt.
2. **DEN KIRURGISKE SENSORREGELEN (gjelder Del 3 og alle liste-referanser):** På
   moderne skoleeksamen lenkes den egendefinerte listen via `neste`/`forrige`-
   variabler **I SELVE DOMENEOBJEKTET** — **IKKE** via `Node`-objekter.
   Innlimt generisk `Node`-listekode som «bærer preg av å være hentet fra andre
   programmer» gir **NULL uttelling**. Hvert liste-kapittel SKAL ha en eksplisitt
   `warning` om dette, og boka har et eget drillkapittel (3.6) på nettopp
   domeneobjekt-idiomet. *(Motsatt: eldre sett, konte og «tegn/skriv en Node-
   liste»-oppgaver krever nettopp en indre `Node`-klasse — les oppgaven. Boka
   lærer BEGGE idiomene og er tydelig på når hvert kreves.)*
3. **Delvis riktig kode gir uttelling.** Sensor belønner **riktig idé/struktur**
   selv med småfeil («rimelig riktig tenkning gir god score»). Manglende enkelt
   `;`/`}`/`{` når koden ellers gir mening ignoreres. **Deloppgaver kan løses
   uavhengig** — man kan bruke iteratoren fra O3 i O4 selv om O3 ikke ble løst.
   **Alternative løsninger sidestilles** — fasit er «bare ett eksempel på en enkel
   og kompakt besvarelse». Dette skal prege ALLE løsningsforslag: marker hva som
   gir uttelling ved hvert steg.
4. **Nødvendige `import` skal alltid med** når oppgaven ber om kjørbar kode
   (`import java.util.Iterator;`, `import java.util.concurrent.locks.*;` osv.).
   Selv om manglende import ikke trekker, viser den at studenten kan apparatet.
5. **Trådstilregelen (gjelder Del 5 og alle monitor-referanser):** Bruk
   **`ReentrantLock` + `Condition`, IKKE `synchronized`** (eksplisitt forbudt i
   V2023/V2024). `lock()` først i hver metode, `unlock()` i **`finally`**;
   `await()` alltid i en **`while`-løkke** (aldri `if`), fanget i
   `try/catch (InterruptedException)`; `signal()`/`signalAll()` i metodene som
   endrer tilstand. Hvert trådkapittel SKAL ha en `warning` om disse tre reglene.
   *(`synchronized` og `CountDownLatch` vises som utvidet hjemmeeksamen-stoff,
   merket.)*
6. **Kodestil-drift (gjelder hele boka):** eksamensformen har skiftet fra papir
   m/lærebok (2015–2016, generiske `Node`-lister) → digital designeksamen
   (2017–2019) → korona-hjemmeeksamen (2020–2022, GUI/`HashMap`/`Comparable`) →
   moden 4-timers skoleeksamen med fast 5-oppgave-struktur (2023–2024). Boka
   lærer BEGGE liste-idiomer og HELE apparatet, men **merker tydelig** hva som er
   moderne-skoleeksamen-kjerne (perfekt) og hva som er «for konte/midtveis/
   hjemmeeksamen» (kjenne). Frekvensanalysen vekter de nyere settene tyngst.

### Avvik fra DNA/README-malen (dokumentert)

- **«Symbol- og formelliste» → «API- og konstruksjonsliste».** README krever en
  `collapsible` «Symbol- og formelliste» per delkapittel. For et kodefag finnes
  det sjelden matematiske symboler, men det finnes et presist konstruksjonsapparat.
  Blokken heter derfor **«API- og konstruksjonsliste»** og lister ALLE Java-
  konstruksjoner brukt i delkapitlet: nøkkelord, metoder, klasser, interface og
  idiomer med presis oppførsel (f.eks. `super(...)` — kaller superklassens
  konstruktør, må stå først; `instanceof` — sann også for subtyper;
  `lock.newCondition()` — én kø per betingelse). Regelen «per delkapittel, ikke
  arv fra tidligere» beholdes. (Samme avvik som IN1900.)
- **`theorem`-blokker brukes for kanoniske kodemønstre (idiomer).** Der DNA-en
  bruker `theorem` for matematiske resultater, brukes den her for de faste
  kodemønstrene som skal sitte i ryggmargen. Disse er bokas «teoremer» (se §3b).
- **Flashcards genereres fra `definition`-blokker på toppnivå.** For dette faget
  er `definition`-blokkene API-/konstruksjonsdefinisjoner (ett kort med
  konstruksjonen som «begrep» og presis oppførsel + minimalt eksempel som
  «definisjon»). Kalibrer flashcards som «hva gjør denne konstruksjonen / hva er
  regelen».
- **Quiz kan IKKE speile avsluttende eksamen direkte** (den har ingen flervalg og
  ingen «hva skrives ut»). Quiz kalibreres derfor som **kunnskaps-konsolidering +
  midtveistrening + sensorregel-innprenting**: (a) kode-lesing («hva returnerer/
  gjør denne metoden?»), (b) «hvilken kodelinje/konstruksjon er riktig her?»
  (midtveis-relevant), (c) **sensorregel-gjenkjenning** («gir denne listekoden
  uttelling? hvorfor ikke?» — Node vs. domeneobjekt; `await` i `if` vs. `while`;
  `unlock` utenfor `finally`), (d) begreps-MC (forskjell på `abstract class` og
  `interface`; når `super()` kreves). Hvert quizspørsmål skal trene enten et
  midtveispoeng eller en av sensorreglene. `options[0]` = riktig svar (runtime
  stokker). Dette avviket dokumenteres i Del 0.
- **Ett gjennomgående case i eksamenstreningen.** DNA-ens øvingseksamener speiler
  en «typisk» eksamen; her betyr det den faste 5-oppgave-malen O1→O5 over **ett**
  domene per sett (slik den reelle skoleeksamenen er bygd), pluss en egen
  **midtveis-simulering** (2 t) som tester tidligpensumet.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): OO-verktøyene bygges opp i
den rekkefølgen de forutsetter hverandre. Frekvensen styrer *omfanget*: de fem
100 %-temaene (O1–O5) får flere kapitler + eget drillkapittel; nivå 2/3-temaer
får kompakte, tydelig merkede kapitler.

| Del | `sectionName` (bokforsiden) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. |
| 1 | Klasser, arv og interface | 6 | **O1 tegn + O2 programmér ~100 %** (perfekt) og bærer HELE midtveis. Fundamentet alt annet står på → 4 teori + 2 drill (tegn O1, programmér O2). |
| 2 | Generiske typer, samlinger og iterator | 4 | **Iterator ~90 %** (perfekt, del av O3). Generics/samlinger/`Comparable` er kunne/kjenne, men iterator-mekanismen og `Iterable<T>` bygges her → 3 kompakte + iterator-teori. |
| 3 | Egendefinerte lenkede strukturer | 6 | **Egendefinert lenket liste O3 ~100 %, tyngste blokk** (perfekt). Begge idiomer (domeneobjekt vs. Node) + tegning + iterator-implementasjon + `instanceof`-uttrekk → 5 teori + stort O3-drill. |
| 4 | Unntak, rekursjon og aggregering | 4 | **Unntak O4 ~80 %, rekursjon ~80 %** (perfekt/kunne) → 3 teori + O4-drill. |
| 5 | Tråder og parallellitet | 5 | **Tråder + monitor O5 ~85 %** (perfekt), tyngste blokk sammen med O3 → 3 teori + utvidet (GUI/`synchronized`) + O5-drill. |
| 6 | Eksamenstrening | 3 | 1 midtveis-simulering (2 t) + 2 avsluttende øvingseksamener (5-oppgave-malen O1→O5 over ett domene). |

**Avvik fra DNA-makrostrukturen (dokumentert):** DNA-en legger sjangerkapitlene i
siste del. Her ligger drillkapitlene (O1 kap. 1.5, O2 kap. 1.6, O3 kap. 3.6, O4
kap. 4.4, O5 kap. 5.5) inne i sine respektive temadeler, fordi hver av de fem
sjangrene er en ~100 %-gjenganger som må drilles umiddelbart etter teorien. Del 6
beholder de komplette simuleringene. (Samme avvik som ECON1310/IN1900.)

**Midtveis-spor:** Midtveiseksamen (25 %, 2 t) tester tidligpensum — Java-
grunnleggende, klasser/objekter, arv, interface, abstrakte klasser, enkle lenkede
lister/iterator, evt. generics. Det dekkes av **Del 1 + Del 2 + starten av Del 3**
(kap. 3.2 enkeltlenket + 3.4 iterator). Midtveis-simuleringen (kap. 6.1) trekker
kun på disse. Hvert kapittel i Del 1–2 og kap. 3.2/3.4 merkes med
«(midtveisrelevant)» i Eksamensvinkel-blokka.

---

## 3a. Sjangerkatalog (A–K)

Bokstavene refereres i hvert kapittel og gjengis for studenten i Del 0.
Destillert fra EKSAMENSANALYSE §3. To familier: **tegne/lese** (O1, datastruktur)
og **skrive kode** (resten). Den avsluttende eksamenen er ~ren kodeskriving.

| Kode | Sjanger | Form | Hyppighet/vekt |
|---|---|---|---|
| **A** | Tegn klassehierarki (abstrakt superklasse + interface) — O1 | tegning | ~100 %; 5 p |
| **B** | Programmér hierarkiet (arv, `super()`, interface) — O2 | kodeskriving | ~100 %; 8–15 p |
| **C** | Egendefinert lenket liste (leggTil/taUt/erMed, spesialtilfeller) — O3 | kodeskriving | ~100 %; 20–40 p (tyngst) |
| **D** | Iterator (`Iterable<T>` + indre `Iterator<T>`) — del av O3 | kodeskriving | ~90 %; 7–15 p |
| **E** | Array-uttrekk med `instanceof` + cast (tell→alloker→fyll) — O3 | kodeskriving | ~70 %; 7–8 p |
| **F** | Unntak + iterativ aggregering (egendefinert `Exception`) — O4 | kodeskriving | ~80 %; 16–22 p |
| **G** | Rekursjon i domeneobjektet (basissteg + `neste.metode()`) — O4/egen | kodeskriving | ~80 %; differensierende |
| **H** | Tråder + monitor (`Runnable` + `ReentrantLock`/`Condition`) — O5 | kodeskriving | ~85 %; 20–36 p |
| **I** | Datastruktur-tegning (objekter + referansepiler) | tegning | ~55 %; hjemme/eldre |
| **J** | GUI + hendelseshåndtering (`JFrame`/`ActionListener`) | kodeskriving | ~40 %; hjemme/eldre |
| **K** | Generisk klasse (`class K<T extends Base>`) | kodeskriving | ~35 %; konte/eldre |

## 3b. Idiomkatalog (bokas «teoremer» — `theorem`-blokker)

De faste kodemønstrene som skal sitte i ryggmargen. Hvert presenteres som en
`theorem`-blokk i angitt kapittel og gjentas i drill/studieguide.

| Idiom | Kort form | Kapittel |
|---|---|---|
| **Konstruktørmalen** | `super(...)` **først**, deretter subklassens egne felt | 1.2 |
| **leggTil med endepeker** | bruk `første`/`siste` **direkte**, aldri traverser | 3.2 |
| **taUt med alle tilfeller** | `while`-terminering; håndter tom/første/siste/ett-element; returner referansen, `null` hvis ikke funnet | 3.2 |
| **Iterator-standardmønsteret** | felt `denne = første`; `hasNext()` → `denne != null`; `next()` → lagre, `denne = denne.neste`, returner det lagrede | 2.4 / 3.4 |
| **instanceof-uttrekket** | **tell** forekomster → **alloker** array → **fyll** med `instanceof` + cast | 3.4 |
| **Rekursjonsmalen** | basissteg (`neste == null`) + rekursivt steg (`neste.metode(...)`); starter i beholderen | 4.3 |
| **Monitor-malen** | `lock()`; `try { while (!vilkår) c.await(); …; c.signalAll(); } finally { unlock(); }` | 5.2 |

---

## 4. Kapitler

Feltene følger DNA-ens «Skjelett-krav», tilpasset kodefag: **Kodekontrakt**
erstatter «Innholdskontrakt» (eksakte konstruksjoner/API-er/idiomer kapitlet SKAL
lære, med presis oppførsel). Prioritetsklasser: **perfekt** (nivå 1) / **kunne**
(nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet — slik testes IN1010

- **id:** `in1010-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen (midtveis + avsluttende), den faste 5-oppgave-malen O1→O5, temafrekvensene, sjangerkatalogen A–K og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet 2015–2024. Skal gjengi: (i) formen — to hjelpemiddelfrie digitale Inspera-eksamener, A–F; **midtveis 25 %** (mars, 2 t, tidligpensum) og **avsluttende 75 %** (juni, **4 t, nesten ren kodeskriving**, sum 100 p); begge må bestås separat, obliger godkjent; (ii) at avsluttende har INGEN flervalgsdel og INGEN «hva skrives ut» — man skriver Java-kode (og én tegning) i Insperas svarfelt; (iii) **den faste 5-oppgave-strukturen** over ett gjennomgående domene: **O1** tegn hierarki (5 p) → **O2** programmér klassene + interface (15 p) → **O3** egendefinert lenket liste med iterator + array-uttrekk (28–40 p, tyngst) → **O4** unntak + iterativ og rekursiv aggregering (16–20 p) → **O5** tråder + monitor (20–36 p); O3 og O5 avgjør karakteren; (iv) **temafrekvens-tabellen** (klassehierarki tegne+programmere ~100 %, egendefinert lenket liste ~100 %, iterator ~90 %, tråder+monitor ~85 %, unntak ~80 %, rekursjon ~80 %, `instanceof`-uttrekk ~70 %, abstrakte klasser ~70 %, datastruktur-tegning ~55 %, `toString` polymorft ~45 %, `Comparable` ~40 %, Swing-GUI ~40 %, samlinger ~35 %, generics ~35 %, `Node`-strukturer ~35 %, barriere/`join` ~25 %); (v) **de tre epokene** (papir m/lærebok 2015–2016 → designeksamen 2017–2019 → hjemmeeksamen 2020–2022 → moden skoleeksamen 2023–2024) og hva som er kjerne vs. utvidet; (vi) sensors metaregler (skriv bare det oppgaven ber om; import/kommentar/aksessmodifikator teller ikke; rimelige antagelser dokumenteres; kompakt kode); (vii) **delvis-riktig-poenggivingen** — riktig struktur belønnes selv med småfeil, deloppgaver løses uavhengig, alternative løsninger sidestilles.
- **Kodekontrakt:** Sjangerkatalogen A–K (§3a) og idiomkatalogen (§3b) presenteres som studentens sjekkliste med typisk vekt per sjanger. Pluss prognosen: **midtveis** ≈ Java-grunnleggende + klasser/arv/interface/abstrakte klasser + enkel lenket liste/iterator (evt. generics), 2 t; **avsluttende** = den faste O1→O5-malen med nytt domene. **DEN KIRURGISKE SENSORREGELEN** presenteres her første gang (Node vs. domeneobjekt = null uttelling på moderne skoleeksamen), og de tre trådreglene (`ReentrantLock`/`Condition`; `await` i `while`; `unlock` i `finally`). Avslutt med **leseplan**: Del 1 (O1+O2) + Del 3 (O3) + Del 5 (O5) + Del 4 (O4) er «må perfekt» med iterator (Del 2.4/3.4) som ryggrad; nivå 2 (`instanceof`-uttrekk, rekursjon, tegning, `Comparable`/`toString`); nivå 3 (generics, GUI, `HashMap`, hashtabell-fra-bunnen, `synchronized`/`CountDownLatch`) merkes «for konte/midtveis/hjemmeeksamen».
- **Oppgavesjangre:** Ingen kodeoppgaver; 3–4 refleksjonsoppgaver av typen «gitt 4 timer og poengfordelingen O1=5, O2=15, O3=35, O4=18, O5=27 — sett opp et tidsbudsjett når O3 og O5 avgjør karakteren» og «forklar hvorfor innlimt generisk Node-listekode gir null uttelling på moderne skoleeksamen».
- **Typiske feil:** Metafeilene: skrive `main`/trådoppstart som ikke etterspørres (ingen uttelling, kan trekke); lime inn generisk Node-listekode på moderne skoleeksamen; bruke `synchronized` der `ReentrantLock` kreves; bruke all tiden på O1/O2 og ikke rekke O3/O5 (der poengene sitter).
- **Quiz: 14 · Flashcards: 14** (form, den faste malen, sensorreglene, sjangerkatalogen)

---

### Del 1 — Klasser, arv og interface *(O1+O2: PERFEKT; bærer midtveis)*

> Del 1 er fundamentet: O1 (tegne hierarki) og O2 (programmere hierarki) er ~100 %
> på hver avsluttende eksamen og utgjør 20 av 100 poeng, og HELE midtveis hviler
> på denne delen. Fire teorikapitler bygger Java-OO fra IN1900-Python, kap. 1.5 er
> tegne-drillen (O1) og kap. 1.6 er programmerings-drillen (O2). Alle kapitler her
> er **midtveisrelevante**.

#### Kapittel 1.1: Fra Python til Java — klasser, objekter, konstruktør og felt

- **id:** `in1010-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Broa fra IN1900-Python til Java: klassedeklarasjon, instansvariabler (felt), konstruktør (`__init__` → konstruktør), `this` (`self` → `this`), typing, og `toString()` (`__str__` → `toString`).
- **Eksamensbelegg:** Grunnlag for ALT (O1–O5) og bærer midtveis. Java-syntaks er terskelen fra IN1900. Prioritet: **perfekt** (midtveisrelevant).
- **Kodekontrakt (API- og konstruksjonsliste):** `class Navn { … }`; **felt/instansvariabler** deklarert med type (`int alder; String navn; Bok neste;`), gjerne uten aksessmodifikator (package-private, som i UiOs fasit); **konstruktør** `Navn(int a, String n) { this.alder = a; this.navn = n; }`; `this` (mottakerobjektet — motsvarer Pythons `self`, men er implisitt der det ikke trengs); **`final`-konstanter** (`final int MAKS = 100;`) gir stilpluss; instansiering `new Navn(...)`; primitiver (`int`/`double`/`boolean`/`char`) vs. referansetyper (`String`, egne klasser) og `null`; `==` (referanselikhet) vs. `.equals(...)` (verdilikhet); `toString()` som redefineres og kalles implisitt av `System.out.println(obj)` og strengkonkatenering; `String.format("%s: %d", a, b)`. Til bruk. **Kryssbok-forkunnskap (IN1900, klartekst m/aktiveringsmarkør):** IN1900 kap. 5.1 «Klasser, `__init__` og `__call__`» og kap. 5.2 «`__str__`, `__add__`, `__mul__»` — `[aktiver lenke /bok/in1900/in1900-5-1 og /bok/in1900/in1900-5-2 når IN1900 er bygget]`. Vis eksplisitt oversettelsestabellen `__init__`→konstruktør, `self`→`this`, `__str__`→`toString`, attributt→felt.
- **Oppgavesjangre:** Forkunnskap til B. Mønstereksempel (nyskrevet): «Oversett en Python-klasse `Bok` med `__init__(self, tittel, sider)` og `__str__` til en Java-klasse med konstruktør, felt og `toString()`.»
- **Typiske feil:** Glemme `this.` når parameternavn = feltnavn (feltet blir ikke satt); bruke `==` på `String`/objekter i stedet for `.equals`; glemme type på felt/parametre; tro at Java har Pythons dynamiske typing.
- **Quiz: 24 · Flashcards: 26**

#### Kapittel 1.2: Arv og polymorfi — `extends`, `super()`, `@Override`

- **id:** `in1010-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `in1010-1-1` · **kapitteltype:** teori
- **description:** Arv med `extends`, konstruktørkjeding med `super(...)`, overstyring med `@Override`, og dynamisk metodeoppslag (polymorfi) — kjernen i O2.
- **Eksamensbelegg:** O2 (~100 %): konstruktører som kaller `super(...)` er typisk 8 av 15 p; polymorfi bærer hele hierarkitanken. Prioritet: **perfekt** (midtveisrelevant).
- **Kodekontrakt:** `class Sub extends Super { … }`; arv av felt og metoder; **`super(...)` i konstruktøren — må stå FØRST**, sender parametrene oppover; utvide (legge til egne felt etter `super`-kallet); **overstyre** en metode + `@Override`-annotasjon (fanger signaturfeil); **polymorfi** — kall via supertype-referanse (`Kjoretoy k = new Bil(); k.beskriv();`) gir dynamisk oppslag til den faktiske klassens metode; `super.metode()` for å kalle superklassens versjon (f.eks. `toString()` polymorft med `super.toString()` — stilpluss, se 1.4). `theorem`-idiom: **konstruktørmalen** (`super(...)` først, deretter subklassens egne felt). **Kryssbok (IN1900):** IN1900 kap. 5.3 «Arv og `super()`» — `[aktiver lenke /bok/in1900/in1900-5-3 når IN1900 er bygget]`; `super().__init__(...)` → `super(...)`.
- **Oppgavesjangre:** B. Mønstereksempel: «`Kjoretoy` har felt `merke` og konstruktør. Skriv `Elbil extends Kjoretoy` med et ekstra felt `rekkevidde`, en konstruktør som kaller `super(merke)` og setter `rekkevidde`, og en overstyrt `toString()` som bruker `super.toString()`.»
- **Typiske feil:** **Glemme `super(...)`** i konstruktøren, eller feil rekkefølge på parametrene (§5.7); sette egne felt før `super`-kallet (kompilerer ikke — `super` må stå først); duplisere superklassens felt i subklassen; glemme `@Override` (mister kompilatorens signatursjekk).
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 1.3: Abstrakte klasser og interface

- **id:** `in1010-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `in1010-1-2` · **kapitteltype:** teori
- **description:** `abstract class` og abstrakte metoder, `interface` med ren metodesignatur, `implements`, og forskjellen mellom de to — grunnlaget for O1 og O2.
- **Eksamensbelegg:** Abstrakte klasser ~70 % («superklassen bør være abstrakt»), interface ~100 % (alltid ett interface i hierarkiet). En klasse kan `implements` flere interface. Prioritet: **perfekt** (midtveisrelevant).
- **Kodekontrakt:** `abstract class Medium { abstract double avgift(); … }` — kan ikke instansieres, kan ha både abstrakte og konkrete metoder + felt; **abstrakt mellomklasse** (`abstract class Trykksak extends Medium`) som samler felles kode for et undernivå; `interface Utlanbar { boolean erLedig(); int laanetid(); }` — kun metodesignaturer (implisitt `public abstract`), ingen tilstand; `class Bok extends Medium implements Utlanbar`; en klasse kan `implements` **flere** interface (`implements Utlanbar, Reserverbar`); interface vs. abstrakt klasse (interface = «kan gjøre», arv = «er en»); **sensornyansen:** hierarkiet er ikke entydig — en klasse uten egenskapen kan likevel `implements` interfacet og returnere 0/`false`, fordi oppgaven ikke sier eksplisitt hvem som mangler egenskapen. `theorem`-idiom kort: interface-implementasjon (alle metoder må implementeres, med `@Override`).
- **Oppgavesjangre:** B + forkunnskap til A. Mønstereksempel: «Lag en abstrakt superklasse `Medium` med abstrakt metode `avgift()`, en abstrakt mellomklasse `Trykksak`, og et interface `Utlanbar` som `Bok` implementerer.»
- **Typiske feil:** Prøve å instansiere en abstrakt klasse (`new Medium()`); gi interface-metoder en kropp/tilstand; glemme å implementere alle interface-metoder i den konkrete klassen; blande `extends` (én superklasse) og `implements` (flere interface).
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 1.4: `instanceof`, typekonvertering, `toString` og `equals`

- **id:** `in1010-1-4` · **number:** 1.4 · **estimatedMinutes:** 45 · **prerequisites:** `in1010-1-3` · **kapitteltype:** teori
- **description:** Sjekke og konvertere typer (`instanceof` + cast), redefinere `toString()` polymorft med `super.toString()`, og `equals()` for verdilikhet — differensierende nivå-2-apparatet rundt hierarkiet.
- **Eksamensbelegg:** `instanceof` + cast er kjernen i array-uttrekket (O3, ~70 %, bygges ut i 3.4); `toString()` polymorft ~45 % (fast på hjemmeeksamen); `equals()` brukes i `erMed`. Prioritet: **kunne** (`instanceof` grensende til perfekt via O3).
- **Kodekontrakt:** `obj instanceof PassasjerBok` — sann også for subtyper; **typekonvertering** `(PassasjerBok) obj` etter en `instanceof`-sjekk (uten sjekk → `ClassCastException`); hvorfor man caster (nå tilgang til subklassens spesifikke metoder); `toString()` **polymorft** med `super.toString()` (`return super.toString() + ", rekkevidde=" + rekkevidde;`); `equals(Object o)` (sjekk `instanceof`, cast, sammenlign felt) og at man ofte bare sammenligner en `id` med `.equals`; `getClass()` nevnt kort. `theorem`-idiom kort: **`instanceof`-sjekk før cast** (aldri cast uten sjekk).
- **Oppgavesjangre:** Forkunnskap til E + moment i B. Mønstereksempel: «Skriv en metode `boolean sammeTittel(Object o)` som returnerer `true` bare hvis `o` er en `Bok` med samme tittel — bruk `instanceof`, cast og `.equals`.»
- **Typiske feil:** Caste uten `instanceof`-sjekk (`ClassCastException`); bruke `==` på `String` i `equals`-sammenligning; la `toString()` returnere noe annet enn en `String`; glemme `super.toString()` i den polymorfe varianten.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 1.5: DRILL — Tegn klassehierarkiet (O1)

- **id:** `in1010-1-5` · **number:** 1.5 · **estimatedMinutes:** 70 · **prerequisites:** `in1010-1-4` · **kapitteltype:** drill
- **description:** Systematisk drill i å tegne et korrekt klassehierarki: abstrakt superklasse på toppen, abstrakt mellomklasse, konkrete klasser, og ett interface tegnet *som* interface med `implements`-pil — sjanger A.
- **Eksamensbelegg:** Sjanger A i **hvert** moderne sett (~100 %), alltid O1, 5 p, alltid første oppgave. Prioritet: **perfekt** (midtveisrelevant).
- **Kodekontrakt (løsningsoppskrift):** Algoritmisk tegnemetode: 1) identifisér den mest generelle klassen → tegn den øverst, merk `abstract`; 2) tegn to nivåer under (evt. abstrakt mellomklasse `abstract`); 3) **arvepiler peker OPP** mot superklassen; 4) tegn interfacet *som* interface (egen boks, gjerne stiplet) med `implements`-pil fra minst én klasse; 5) plasser felt/metoder der de hører hjemme (felles → superklasse). **Sensornyansen** demonstreres: godta at en klasse uten egenskapen også `implements` interfacet og returnerer 0. Fordi plattformen ikke tegner grafisk, beskrives hierarkiet i **strukturert tekst/ASCII** (indentnivåer, «↑ arver», «- - > implements») slik en A-besvarelse ville tegnet det. Gjennomgått eksamenscase med margnotater om hva som gir uttelling.
- **Oppgavesjangre:** A. 8–12 tegneoppgaver på eksamensnivå over roterende domener (bibliotek, kollektivtransport, verksted, dyrepark), hver med et interface og minst tre klassenivåer, alle med fasit-hierarki i tekstform + kommentar om alternative godtatte hierarkier.
- **Typiske feil:** Interface uten `implements`-pil, eller tegnet som vanlig klasse (§5.12); hierarki uten `abstract` på superklassen (§5.12); pil feil vei (ned i stedet for opp); plassere felles felt i hver subklasse i stedet for superklassen; tro at hierarkiet er entydig (nekte en «umotorisert» klasse å implementere interfacet).
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 1.6: DRILL — Programmér hierarkiet (O2)

- **id:** `in1010-1-6` · **number:** 1.6 · **estimatedMinutes:** 80 · **prerequisites:** `in1010-1-5` · **kapitteltype:** drill
- **description:** Full drill på O2: fra hierarki til komplett Java-kode — abstrakt superklasse, mellomklasse, interface og konkrete klasser med konstruktører som kaller `super(...)`, i sensors korte stil.
- **Eksamensbelegg:** Sjanger B (~100 %), O2, 8–15 p (typisk 7 p hierarki + 8 p konstruktører). De egendefinerte domeneklassene skal her også få `neste`- (og `forrige`-) felt som forbereder listen i O3. Prioritet: **perfekt** (midtveisrelevant).
- **Kodekontrakt (løsningsoppskrift):** 1) `abstract class Super` med felles felt + abstrakt(e) metode(r); 2) evt. `abstract class Mellom extends Super`; 3) `interface I` med ren signatur; 4) konkrete klasser `extends`/`implements` med **konstruktør som kaller `super(...)` først**, deretter egne felt; 5) `final` på konstanter (stilpluss); 6) legg inn `neste`/`forrige`-felt i domeneklassen (til O3); 7) evt. `toString()` polymorft (hjemmeeksamen-stilpluss). Gjennomregnet eksamenscase med margnotater (hierarki + konstruktører gir uttelling hver for seg). 8–12 oppgaver på eksamensnivå, roterende domener, alle med kompakt fasit.
- **Oppgavesjangre:** B. Mønstereksempel: «Programmér hierarkiet fra forrige kapittel: `abstract class Medium` (felt `tittel`, abstrakt `avgift()`), `abstract class Trykksak extends Medium`, `interface Utlanbar { int laanetid(); }`, og konkrete `Bok`/`Lydbok` med konstruktører som kaller `super(tittel)`. Gi domeneklassen et `neste`-felt til en senere liste.»
- **Typiske feil:** §5.7 (glemt/feil `super(...)`); implementere interfacet men glemme en metode; skrive mer enn oppgaven ber om — `main`, I/O (§5.14, kan trekke); egne felt før `super`-kallet; glemme `neste`-feltet som O3 trenger.
- **Quiz: 22 · Flashcards: 16**

---

### Del 2 — Generiske typer, samlinger og iterator *(iterator: PERFEKT; øvrig: KUNNE/KJENNE)*

> Iterator (~90 %) er en av de fem perfekt-temaene og en fast del av O3, men
> mekanismen — `Iterable<T>` + indre `Iterator<T>` — er lettest å lære isolert
> før den egendefinerte listen bygges i Del 3. Generiske typer, standardsamlinger
> og `Comparable` er kunne/kjenne (konte/hjemme/eldre), men bygges her fordi de
> hører til bibliotek-/typeapparatet. **Iterator og generics er midtveisrelevante.**

#### Kapittel 2.1: Generiske typer — `class Beholder<T extends Base>`

- **id:** `in1010-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `in1010-1-3` · **kapitteltype:** teori
- **description:** Generiske klasser med typeparameter og øvre skranke (`<T extends Base>`), typeparameter på felt/metoder/returtype, og typekonvertering ved miks med supertype-pekere — nivå-3-apparat for konte og eldre sett.
- **Eksamensbelegg:** Generiske klasser ~35 % (kjerne i 2016/2018, konte 2023 O8–O9). Tonet ned på hovedeksamen, men fast på konte. Prioritet: **kjenne** (midtveisrelevant på nivå «forstå `<T>`»).
- **Kodekontrakt:** `class Beholder<T> { T data; }`; **øvre skranke** `class KolonneG<T extends Bil>` (T må være Bil eller subtype → kan kalle Bil-metoder på T); typeparameter på felt (`T forste; T siste;`), metodeparametre (`void settInn(T x)`) og returtype (`T taUtSiste()`); instansiering `new Beholder<Bok>()`; **typekonvertering ved miks:** når basisklassens `neste`/`forrige` er av supertypen mens listepekerne er av `T`, kreves cast `(T) p.neste`; diamant-operatoren `new Beholder<>()`; generisk metode nevnes kort. `warning`: merket «for konte/eldre — ikke standard på moderne skoleeksamen».
- **Oppgavesjangre:** K. Mønstereksempel: «Skriv en generisk klasse `Stabel<T>` med `T`-felt for topp-pekeren, `leggPaa(T x)` og `taAv()` som returnerer `T`.»
- **Typiske feil:** §5.15 — glemme typekonvertering når basisklassens pekere er av supertypen; bruke `T` utenfor klassens typeparameter-skop; forsøke å instansiere `new T()` (går ikke i Java); blande generisk klasse med domeneobjekt-idiomet.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 2.2: Standardsamlinger — `ArrayList` og `HashMap`

- **id:** `in1010-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `in1010-2-1` · **kapitteltype:** teori
- **description:** Bruke bibliotekets samlinger — `ArrayList<T>` (dynamisk liste) og `HashMap<K,V>` (nøkkel→verdi) — der oppgaven tillater det, typisk som monitor-beholder eller register.
- **Eksamensbelegg:** Samlinger ~35 % (monitor-beholder, by-registre 2022-konte). På moderne skoleeksamen bygger man som regel listen selv (O3), men monitoren i O5 og registre i hjemmeeksamen bruker `ArrayList`/`HashMap`. Prioritet: **kjenne**.
- **Kodekontrakt:** `import java.util.ArrayList;` / `import java.util.HashMap;`; `ArrayList<Bok> liste = new ArrayList<>();`, `.add(x)`, `.get(i)`, `.size()`, `.remove(x)`, `.isEmpty()`, for-each (`for (Bok b : liste)`); `HashMap<String, Laner> register = new HashMap<>();`, `.put(nøkkel, verdi)`, `.get(nøkkel)` (`null` hvis mangler), `.containsKey(...)`, `.keySet()`, iterasjon over `.entrySet()`; hvorfor `.equals`/`hashCode` styrer oppslag; når man velger `ArrayList` (rekkefølge/kø) vs. `HashMap` (oppslag på navn). `warning`: på moderne skoleeksamen kreves som regel egen liste — bruk bibliotekssamling kun der oppgaven tillater/ber om det.
- **Oppgavesjangre:** Moment i H (monitor-beholder) + hjemmeeksamen-register. Mønstereksempel: «Bruk en `HashMap<String, Bok>` som register fra ISBN til bok, og en `ArrayList<Bok>` som venteliste med `add`/`remove`.»
- **Typiske feil:** Bruke `ArrayList` der oppgaven ber om en egendefinert liste (§ null uttelling); glemme at `HashMap.get` gir `null` ved manglende nøkkel; bruke `==` på nøkler i stedet for `.equals`; indeksere en `HashMap` som en liste.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 2.3: `Comparable`, `compareTo` og sortert rekkefølge

- **id:** `in1010-2-3` · **number:** 2.3 · **estimatedMinutes:** 45 · **prerequisites:** `in1010-1-2` · **kapitteltype:** teori
- **description:** Gjøre objekter sammenlignbare med `implements Comparable<T>` og `compareTo(T)`, og bruke det til sortert innsetting i en liste — differensierende nivå-2-apparat.
- **Eksamensbelegg:** `Comparable`/`compareTo` ~40 % (tungt i 2016/2019, sortert liste i 2022 Bilkollektiv). Ofte kombinert med sortert innsetting i den egendefinerte listen (Del 3). Prioritet: **kunne**.
- **Kodekontrakt:** `class Bok implements Comparable<Bok>`; `@Override public int compareTo(Bok annen)` returnerer **negativ / 0 / positiv** (mindre/lik/større) — typisk differansen felt for felt (`return this.aar - annen.aar;`) eller `this.tittel.compareTo(annen.tittel)` for `String`; bruk i **sortert innsetting**: traverser til rett plass (`while (p != null && p.compareTo(ny) < 0)`) og sett inn; `Collections.sort(liste)` for `ArrayList` (nevnes); forskjell fra `equals` (rekkefølge vs. likhet). `theorem`-idiom kort: **sortert-innsetting-mønsteret** (finn første element som er større, sett inn foran det).
- **Oppgavesjangre:** Moment i C (sortert liste) + K. Mønstereksempel: «La `Bok implements Comparable<Bok>` sammenligne på utgivelsesår, og skriv `leggTilSortert(Bok ny)` som setter boka inn på rett plass i en år-sortert liste.»
- **Typiske feil:** La `compareTo` returnere `boolean` i stedet for `int`; feil fortegn (bytte om `this` og `annen`); glemme spesialtilfellene i sortert innsetting (tom liste, sett inn først/sist); bruke `==` på `String` i stedet for `compareTo`/`equals`.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 2.4: Iterator og `Iterable` — `Iterable<T>` + indre `Iterator<T>`

- **id:** `in1010-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** `in1010-1-3` · **kapitteltype:** teori
- **description:** Iterator-mekanismen: la en beholder implementere `Iterable<T>`, returnere et `Iterator<T>`-objekt fra en **indre klasse** med `hasNext()`/`next()`, slik at for-each fungerer automatisk — en av de fem perfekt-temaene.
- **Eksamensbelegg:** Iterator ~90 %, fast del av O3, 7–15 p. «Drillet i undervisningen; må være helt korrekt.» Her læres mekanismen isolert; implementasjonen på den egendefinerte listen driller i 3.4/3.6. Prioritet: **perfekt** (midtveisrelevant).
- **Kodekontrakt (API- og konstruksjonsliste):** `import java.util.Iterator;` (+ `java.util.NoSuchElementException`); **`class Beholder implements Iterable<Bok>`** med `@Override public Iterator<Bok> iterator() { return new MinIterator(); }`; **indre klasse** `class MinIterator implements Iterator<Bok>` (har tilgang til beholderens felt) med felt `Bok denne = forste;`, `@Override public boolean hasNext() { return denne != null; }`, `@Override public Bok next() { Bok r = denne; denne = denne.neste; return r; }`; når `Iterable` er implementert fungerer **for-each** automatisk (`for (Bok b : beholder)`); **filtrerende iterator:** konstruktøren spoler frem til første treff, `next()` kaster `NoSuchElementException` når tom; `remove()` er valgfri (default kaster `UnsupportedOperationException`). `theorem`-idiom: **iterator-standardmønsteret** (`denne = første`; `hasNext` → `denne != null`; `next` → lagre, flytt `denne = denne.neste`, returner det lagrede).
- **Oppgavesjangre:** D. Mønstereksempel: «Gi en enkeltlenket beholder over `Spor`-objekter (lenket via `spor.neste`) en iterator: `implements Iterable<Spor>`, `iterator()` og en indre `Iterator<Spor>`-klasse med `hasNext`/`next`. Vis at `for (Spor s : spilleliste)` da virker.»
- **Typiske feil:** **Iterator som returnerer feil type** — returnere node-/hjelpeobjektet i stedet for domeneobjektet (§5.11); `next()` som ikke flytter `denne` (uendelig løkke) eller flytter før den lagrer (hopper over første); legge iterator-feltene i beholderen i stedet for i den indre klassen (deles mellom løkker); glemme `implements Iterable<T>` (for-each virker ikke).
- **Quiz: 22 · Flashcards: 24**

---

### Del 3 — Egendefinerte lenkede strukturer *(O3: PERFEKT — tyngste blokk)*

> Egendefinert lenket liste (O3) er ~100 % og den **tyngste** blokka (20–40 p) —
> den avgjør karakteren sammen med O5. Fem teorikapitler bygger begge idiomene
> (domeneobjekt vs. Node), datastruktur-tegning, iterator-implementasjon og
> `instanceof`-uttrekk; kap. 3.6 er det store O3-drillkapitlet. **DEN KIRURGISKE
> SENSORREGELEN gjelder hele delen:** på moderne skoleeksamen bor lenkene i
> domeneobjektet — innlimt generisk Node-kode gir NULL uttelling. Kap. 3.2–3.4 er
> midtveisrelevante (enkel liste + iterator).

#### Kapittel 3.1: Datastruktur-tegning — objekter og referansepiler

- **id:** `in1010-3-1` · **number:** 3.1 · **estimatedMinutes:** 45 · **prerequisites:** `in1010-1-4` · **kapitteltype:** teori
- **description:** Tegne en datastruktur som *objekter* (ikke klasser) med instansvariabler og referansepiler — grunnlaget for å forstå hvordan en lenket liste faktisk henger sammen i minnet.
- **Eksamensbelegg:** Datastruktur-tegning ~55 % (egen oppgave i hjemme-/eldre sett; implisitt i O3-forståelsen ellers). Å kunne tegne strukturen er en forutsetning for å skrive korrekt liste-kode. Prioritet: **kunne**.
- **Kodekontrakt:** Tegn **objekter** (bokser) med instansvariabler som rader; **referansepiler** som starter *inne i* en variabel og ender ved objektkanten; `null`-verdier som en strek/kryss; vis en beholder med `forste`/`siste`-peker som peker på det første/siste domeneobjektet, og hvert domeneobjekts `neste` (og `forrige`) som peker på nabo-objektet; vis at siste `neste` er `null`; kombinér array + lenket liste (array av lister); minst ett objekt med interface-egenskapen. Fordi plattformen ikke tegner grafisk, beskrives dette i **strukturert tekst/ASCII** («[Beholder: forste→b1, siste→b3]  b1[tittel=…, neste→b2]  b2[…, neste→b3]  b3[…, neste→null]»). `theorem`-idiom kort: **referansemodellen** (variabel = navn på et objekt; pil = referanse; `null` = ingen referanse).
- **Oppgavesjangre:** I. Mønstereksempel: «Tegn tilstanden etter at tre `Vare`-objekter er lagt inn i en enkeltlenket `Lager`: vis `forste`/`siste`-pekerne, hver vares `neste`, og at siste peker på `null`.»
- **Typiske feil:** Tegne klasser i stedet for objekter; la piler starte utenfor variabelen; glemme `null` på siste `neste`; tegne verdien inni i stedet for en pil for referansetyper.
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 3.2: Enkeltlenket liste i domeneobjektet — `leggTil`, `erMed`, `taUt`

- **id:** `in1010-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `in1010-3-1`, `in1010-1-2` · **kapitteltype:** teori
- **description:** Bygge en egendefinert enkeltlenket liste der lenkene bor i **domeneobjektet** (`bok.neste`), med `leggTil` via endepeker, `erMed` ved traversering, og `taUt` med alle spesialtilfeller — kjernen i O3 på moderne skoleeksamen.
- **Eksamensbelegg:** Egendefinert lenket liste ~100 %, tyngste blokk. Enkeltlenket variant er den vanligste. **DEN KIRURGISKE SENSORREGELEN:** lenkene i domeneobjektet, ingen Node. Prioritet: **perfekt** (midtveisrelevant).
- **Kodekontrakt (API- og konstruksjonsliste):** Beholder `class Lager { Vare forste; Vare siste; }` (ingen Node!); domeneobjektets `Vare neste;`-felt (fra O2); **`leggTil(Vare v)`** — bruk **`siste`-pekeren direkte**: hvis tom (`forste == null`) sett `forste = siste = v`, ellers `siste.neste = v; siste = v;` (enkeltlenket kan òg sette inn først via `forste`); **`erMed(String id)`** — traverser `while (p != null)` og sammenlign `p.id.equals(id)`, returner `true`/`false`; **`taUt(Vare v)`/`finnOgTaUt(String id)`** — `while`-løkke som terminerer når objektet er funnet *eller* listen er tom; behandle **alle spesialtilfeller** (tom liste, første element, siste element, ett element, midten); koble forbi (`forrigeP.neste = p.neste`); oppdater `forste`/`siste` når endene fjernes; **returner referansen** som tas ut, `null` hvis ikke funnet; `finnOgTaUt` bør kalle `taUt`. `theorem`-idiomer: **leggTil med endepeker** (aldri traverser) og **taUt med alle tilfeller** (`while`-terminering, returner referanse eller `null`). `warning`: **ingen Node-objekter** — innlimt generisk Node-listekode gir null uttelling; traversering i `leggTil` (i stedet for endepeker) trekker.
- **Oppgavesjangre:** C. Mønstereksempel: «Skriv `Lager` med `forste`/`siste`-pekere og metodene `leggTil(Vare v)` (bakerst, via `siste`), `erMed(String id)` og `taUt(Vare v)` som håndterer tom liste, første, siste og midten, og returnerer den fjernede varen eller `null`.»
- **Typiske feil:** **Bruke Node-objekter** der lenkene skal bo i domeneobjektet (§5.1, null uttelling); **traversere i `leggTil`** i stedet for `siste`-pekeren (§5.2); **glemme spesialtilfeller i `taUt`** — tom/første/siste/ett element (§5.3); glemme `null`-retur når elementet ikke finnes (§5.9); glemme å oppdatere `siste` når siste element fjernes.
- **Quiz: 24 · Flashcards: 26**

#### Kapittel 3.3: Dobbeltlenket liste — `forrige`/`neste`, `leggTilForan`

- **id:** `in1010-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `in1010-3-2` · **kapitteltype:** teori
- **description:** Utvide til dobbeltlenket liste med `forrige`- og `neste`-pekere i domeneobjektet, innsetting bakerst via `siste`, og `leggTilForan(a, b)` som setter `b` foran `a` — dobbeltlenket-varianten (V2023 «Tog»).
- **Eksamensbelegg:** Dobbeltlenket liste var O3 i V2023. `leggTilForan(a, b)` med spesialbehandling av at `a` er første element er et fast krav. Prioritet: **perfekt**.
- **Kodekontrakt:** Domeneobjektet får både `Vogn forrige;` og `Vogn neste;`; beholderen har `forste`/`siste`; **`leggTil` bakerst** oppdaterer **begge** pekerne (`v.forrige = siste; siste.neste = v; siste = v;`); **`leggTilForan(Vogn a, Vogn b)`** — sett `b` inn rett foran `a`: koble `b.neste = a`, `b.forrige = a.forrige`, oppdater `a.forrige.neste` (hvis finnes) og `a.forrige = b`; **spesialbehandle at `a` er første element** (da blir `b` ny `forste`); `taUt` i dobbeltlenket kobler både `p.forrige.neste` og `p.neste.forrige` forbi, med endehåndtering. `theorem`-idiom kort: **dobbeltlenket kobling** (oppdater fire pekere ved innsetting i midten; færre ved endene). `warning`: fortsatt ingen Node — lenkene i `Vogn`.
- **Oppgavesjangre:** C (dobbeltlenket). Mønstereksempel: «Skriv `leggTilForan(Vogn a, Vogn b)` som setter `b` inn rett foran `a` i en dobbeltlenket `Tog`, med korrekt håndtering av at `a` er første vogn.»
- **Typiske feil:** Oppdatere bare `neste` og glemme `forrige` (eller motsatt); glemme at `a` kan være første element (ny `forste` settes ikke); rekkefølgefeil som mister en referanse før den er brukt; endehåndtering i `taUt` (`p.neste.forrige` når `p` er siste → `NullPointerException`).
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 3.4: Iterator for egen liste og array-uttrekk med `instanceof`

- **id:** `in1010-3-4` · **number:** 3.4 · **estimatedMinutes:** 60 · **prerequisites:** `in1010-3-2`, `in1010-2-4`, `in1010-1-4` · **kapitteltype:** teori
- **description:** Implementere iteratoren fra kap. 2.4 på den egendefinerte listen, og skrive et typefiltrerende array-uttrekk (`instanceof` + cast) etter tell→alloker→fyll-mønsteret — de to faste tilleggskravene i O3.
- **Eksamensbelegg:** Iterator ~90 % (del av O3) og array-uttrekk ~70 % (`PassasjerFly[] hentPassasjerFly()`-mønsteret) er de faste O3-tilleggene. Prioritet: **perfekt** (iterator midtveisrelevant).
- **Kodekontrakt:** **Iterator på egen liste** — `class Lager implements Iterable<Vare>` med `iterator()` og indre `Iterator<Vare>`-klasse (`denne = forste`; `hasNext` → `denne != null`; `next` → lagre, `denne = denne.neste`, returner) fra 2.4-mønsteret; **array-uttrekk (`instanceof`):** metode som returnerer f.eks. `Ferskvare[] hentFerskvarer()` — **tell** forekomster først (via iteratoren: `for (Vare v : this) if (v instanceof Ferskvare) antall++;`), **alloker** `Ferskvare[] res = new Ferskvare[antall];`, gå gjennom **på nytt** og **fyll** med cast (`if (v instanceof Ferskvare) res[i++] = (Ferskvare) v;`); returner `res`. `theorem`-idiom: **instanceof-uttrekket** (tell → alloker → fyll). Bruk gjerne iteratoren fra O3 i uttrekket — deloppgaver kan løses uavhengig (sensorregel §3).
- **Oppgavesjangre:** D + E. Mønstereksempel: «Gi `Lager` en iterator, og skriv `Ferskvare[] hentFerskvarer()` som returnerer et array med bare ferskvarene — tell først, alloker riktig lengde, fyll med `instanceof` + cast.»
- **Typiske feil:** **Opprette array før man har talt** elementene (§5.8) — man vet ikke lengden; §5.11 (iterator returnerer feil type); cast uten `instanceof`-sjekk (`ClassCastException`); glemme å øke fyll-indeksen bare når elementet matcher; iterator-felt i beholderen (deles mellom løkker).
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 3.5: Node-idiomet og hybride strukturer (konte/eldre)

- **id:** `in1010-3-5` · **number:** 3.5 · **estimatedMinutes:** 55 · **prerequisites:** `in1010-3-2`, `in1010-2-1` · **kapitteltype:** teori
- **description:** Det klassiske idiomet: en egen indre `Node`-klasse med vaktposter, en generisk `LenkeListe<T>`, og hybride strukturer (array-av-lister, hashtabell fra bunnen) — kreves på konte, midtveis og eldre sett, og forbudt på moderne skoleeksamen.
- **Eksamensbelegg:** `Node`-baserte/hybride strukturer ~35 % (eldre sett, 2022-konte `StedNode`, 2021-konte hashtabell fra bunnen). Generisk `LenkeListe<T extends Comparable<T>>` var kjernen i INF1010-æraen. Prioritet: **kjenne** (midtveisrelevant på enkel Node-liste).
- **Kodekontrakt:** **Node-idiomet:** indre `class Node { T data; Node neste; }` (evt. `Node forrige`); **vaktposter** (listehode/listehale som tomme Node-objekter → færre spesialtilfeller); generisk `class LenkeListe<T>` med Node-basert innsetting/uttak; **array-av-lister:** `Node[] tabell` der hver bøtte er en enkeltlenket liste (hashet på en nøkkel, f.eks. `nokkel % tabell.length`); **hashtabell fra bunnen:** moduloindeks + kollisjonsliste, `settInn`/`finn` som traverserer bøttas liste; når hver kreves. `warning` (**sentral**): dette idiomet gir **null uttelling** der oppgaven ber om domeneobjekt-lenking (moderne skoleeksamen) — og motsatt: å glemme Node-klassen der oppgaven eksplisitt ber om en Node-liste trekker. **Les alltid oppgaven.** Merket «for konte/midtveis/hjemmeeksamen».
- **Oppgavesjangre:** C (Node-variant) + K. Mønstereksempel: «Skriv en generisk `LenkeListe<T>` med en indre `Node`-klasse, `leggTil(T x)` og en Node-basert iterator — merk at dette idiomet KUN brukes når oppgaven eksplisitt ber om Node-objekter.»
- **Typiske feil:** §5.1 (bruke Node der domeneobjekt kreves, eller motsatt); glemme å oppdatere vaktpostene ved innsetting/uttak; §5.11 (iterator returnerer `Node` i stedet for `data`); feil moduloindeks i hashtabellen; glemme kollisjonshåndtering (overskrive i stedet for å lenke).
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 3.6: DRILL — Egendefinert lenket liste (O3)

- **id:** `in1010-3-6` · **number:** 3.6 · **estimatedMinutes:** 90 · **prerequisites:** `in1010-3-5`, `in1010-3-4` · **kapitteltype:** drill
- **description:** Full drill på O3 — den tyngste blokka: komplett egendefinert liste (enkelt- eller dobbeltlenket) i domeneobjektet, med `leggTil`/`taUt`/`erMed`, iterator og `instanceof`-uttrekk, alle spesialtilfeller, i sensors korte stil.
- **Eksamensbelegg:** Sjanger C (~100 %), O3, 20–40 p — sammen med O5 avgjørende for karakteren. Poeng splittes typisk over leggTil/taUt/erMed/iterator/uttrekk. Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** 1) beholder med `forste`/`siste`-pekere (ingen Node!); 2) `leggTil` via endepeker (aldri traverser); 3) `erMed` via traversering + `.equals`; 4) `taUt`/`finnOgTaUt` med **alle** spesialtilfeller og `while`-terminering, returner referanse eller `null`; 5) `implements Iterable<T>` + indre `Iterator<T>` (denne=første-mønsteret); 6) `instanceof`-uttrekk (tell→alloker→fyll); 7) dobbeltlenket: oppdater begge pekere + `leggTilForan`. Gjennomregnet eksamenscase med **sensor-margnotater** om hva som gir uttelling ved hvert steg (riktig struktur belønnes selv med indeks-/endefeil; deloppgaver uavhengige). 10–14 oppgaver på eksamensnivå, roterende domener, både enkelt- og dobbeltlenket, hver med kompakt fasit. **Egen seksjon:** «Node vs. domeneobjekt» — vis samme oppgave løst begge veier og hvorfor Node-varianten gir 0 på moderne skoleeksamen.
- **Oppgavesjangre:** C, D, E. Mønstereksempel: «Skriv en dobbeltlenket `Spilleliste` over `Spor`-objekter: `leggTil` bakerst, `taUt(Spor s)` med alle tilfeller, `erMed(String tittel)`, en iterator, og `Podkast[] hentPodkaster()` med `instanceof`-uttrekk — alt uten Node-objekter.»
- **Typiske feil:** Hele §5-katalogen samlet: §5.1 (Node der domeneobjekt kreves), §5.2 (traversere i `leggTil`), §5.3 (spesialtilfeller i `taUt`), §5.8 (array før telling), §5.9 (glemt `null`-retur), §5.11 (iterator feil type), §5.13 (innlimt generisk listekode).
- **Quiz: 26 · Flashcards: 14**

---

### Del 4 — Unntak, rekursjon og aggregering *(O4: PERFEKT/KUNNE)*

> O4 (~80 %) kombinerer egendefinerte unntak, iterativ sjekk og **rekursiv**
> aggregering, 16–20 p. Tre teorikapitler bygger unntak, iterativ/rekursiv
> aggregering; kap. 4.4 er O4-drillen. Rekursjon i domeneobjektet er
> differensierende (~80 %).

#### Kapittel 4.1: Egendefinerte unntak

- **id:** `in1010-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `in1010-1-2` · **kapitteltype:** teori
- **description:** Lage egne unntaksklasser (`extends Exception`/`RuntimeException`), kaste dem med `throw`, deklarere med `throws`, fange med `try/catch`, og parametrisere for å skille tilfeller — kjernen i O4.
- **Eksamensbelegg:** Unntak ~80 %, O4 på moderne sett; ofte parametrisert med en `String`-melding for å skille tilfeller. Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** **Egendefinert unntak** `class UgyldigVare extends Exception { UgyldigVare(String melding) { super(melding); } }` (eller `extends RuntimeException` for uinnsjekket); **checked** (`Exception`, må deklareres/fanges) vs. **unchecked** (`RuntimeException`, trenger ikke deklareres); `throw new UgyldigVare("negativ vekt");`; `throws UgyldigVare` i metodesignaturen (checked); `try { … } catch (UgyldigVare e) { … }`, `e.getMessage()`; **parametrisert unntak** — bruk `String`-parameteren til å skille tilfeller (f.eks. hvilken regel som ble brutt); rekkefølge på `catch` (spesifikk før generell); `finally` (kjøres alltid). Til bruk. `theorem`-idiom kort: **egendefinert unntaksklasse** (subklasse med `super(melding)`-konstruktør).
- **Oppgavesjangre:** F (unntaksdelen). Mønstereksempel: «Lag `class NegativVekt extends Exception` med en `String`-konstruktør, og en metode `leggTilSikker(Vare v)` som kaster `NegativVekt` hvis vekten er under 0.»
- **Typiske feil:** Glemme `super(melding)`-konstruktøren (får ikke melding); forveksle checked/unchecked (glemme `throws` på checked); fange en for generell type før den spesifikke; kaste men aldri fange (eller motsatt); skrive `throws` der `throw` menes.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 4.2: Iterativ sjekk og aggregering

- **id:** `in1010-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `in1010-4-1`, `in1010-3-4` · **kapitteltype:** teori
- **description:** Iterative metoder som løper gjennom listen: en sjekk som kaster unntak ved avvik, og aggregeringer (`totalVekt`, `besteVerdi`) via iteratoren — med tom-liste-håndtering.
- **Eksamensbelegg:** Iterativ del av O4 (~80 %): `sjekkSporvidde`/`leggTilSikker`-mønsteret + `totalX`-aggregering via iterator. Tom liste må spesialbehandles (anta første element «normalt», returner 0/`null`). Prioritet: **perfekt**.
- **Kodekontrakt:** **Iterativ sjekk:** løp gjennom listen (`for (Vare v : this)` eller `while (p != null)`) og `throw` ved avvik; spesialbehandle **tom liste** (anta første element normalt, ingen sjekk); **aggregering:** `totalVekt()` (`double sum = 0; for (Vare v : this) sum += v.vekt(); return sum;`), `antall()`, `besteVerdi()` (hold en `beste`-variabel, oppdater ved bedre); **tom-liste:** returner 0 for sum, `null` for beste-objekt; **histogram-variant:** fyll en array indeksert på en verdi (`int[] histogram = new int[maks+1]; for (…) histogram[v.kategori()]++;`). Bruk gjerne iteratoren fra O3 (deloppgaver uavhengige). `theorem`-idiom kort: **akkumulatormønsteret** (init → løp gjennom → oppdater → returner; håndter tom).
- **Oppgavesjangre:** F (iterativ del). Mønstereksempel: «Skriv `sjekkVekter()` som kaster `NegativVekt` hvis noen vare veier under 0, og `totalVekt()` som summerer alle varene via iteratoren; begge håndterer tom liste.»
- **Typiske feil:** Glemme tom-liste (§5.10 — `NullPointerException` eller feil sum); starte akkumulatoren feil (f.eks. `beste = 0` når verdier kan være negative); sjekke første element mot seg selv; ikke returnere `null` for beste-objekt på tom liste (§5.9).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.3: Rekursjon i domeneobjektet

- **id:** `in1010-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `in1010-4-2` · **kapitteltype:** teori
- **description:** Rekursiv metode **i domeneobjektet** med basissteg (`neste == null`) og rekursivt steg (`neste.metode(...)`), startet fra beholderen — pluss tre-/graf-rekursjon fra eldre sett. Den differensierende ferdigheten i O4.
- **Eksamensbelegg:** Rekursjon ~80 % (maksVekt, størstSpennvidde, finnEldsteOpphav, finnesVeiTil). «Rekursiv hjelpemetode i domeneobjektet er tillatt og forventet.» Alle korrekte rekursive varianter gir full uttelling. Prioritet: **kunne** (differensierende, grensende til perfekt i O4).
- **Kodekontrakt:** **Rekursjon i domeneobjektet:** metoden bor i domeneklassen, ikke beholderen; **basissteg** (`if (neste == null) return this.vekt;`) + **rekursivt steg** (`return Math.max(this.vekt, neste.maksVekt());`); **starteren** i beholderen kaller `forste.maksVekt()` og håndterer **tom liste** (`if (forste == null) return 0;`); varianter — sammenlign to-og-to, eller send en verdi/akkumulator som parameter (`maksVekt(double såLangt)`); **tre-/graf-rekursjon (eldre):** flere naboer (`finnEldsteOpphav()` på et slektstre), «forrige»-parameter for å unngå tilbakegang (`finnesVeiTil(mål, forrige)` i en graf uten rundturer). Sensor godtar mange varianter så lenge basis + rekursjon er korrekt. `theorem`-idiom: **rekursjonsmalen** (basissteg `neste == null` + rekursivt steg `neste.metode(...)`; starter i beholderen med tom-liste-sjekk). `warning`: manglende/feil basissteg → uendelig rekursjon eller `NullPointerException` på tom liste.
- **Oppgavesjangre:** G. Mønstereksempel: «Skriv en rekursiv `maksVekt()` i `Vare` (basis `neste == null`, steg `Math.max(vekt, neste.maksVekt())`) og en starter `maksVekt()` i `Lager` som håndterer tom liste.»
- **Typiske feil:** §5.10 — manglende basissteg / feil rekursjonsbunn (uendelig rekursjon eller `NullPointerException`); starte rekursjonen i beholderen i stedet for domeneobjektet; glemme tom-liste i starteren (§5.10); returnere feil ved sammenligning to-og-to (hoppe over siste element).
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 4.4: DRILL — Unntak + aggregering (O4)

- **id:** `in1010-4-4` · **number:** 4.4 · **estimatedMinutes:** 90 · **prerequisites:** `in1010-4-3` · **kapitteltype:** drill
- **description:** Full drill på O4: egendefinert unntak + iterativ sjekk + iterativ og rekursiv aggregering over en egendefinert liste, med tom-liste-håndtering, i sensors korte stil.
- **Eksamensbelegg:** Sjanger F + G (~80 %), O4, 16–20 p, splittet over unntak/sjekk/iterativ aggregering/rekursiv aggregering. Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** 1) egendefinert unntak (`extends Exception`, `super(melding)`); 2) iterativ sjekk som kaster ved avvik (tom liste = ok); 3) iterativ aggregering via iterator (`totalX`, `antall`); 4) rekursiv aggregering i domeneobjektet (basis + steg) + starter med tom-liste; 5) evt. histogram-array. Gjennomregnet eksamenscase med margnotater (alle korrekte rekursive varianter gir full uttelling; deloppgaver uavhengige — bruk iteratoren fra O3 selv om O3 ikke ble løst). 8–12 oppgaver på eksamensnivå, roterende domener, hver med både en iterativ og en rekursiv aggregering.
- **Oppgavesjangre:** F, G. Mønstereksempel: «For en `Bokhylle` over `Bok`-objekter: lag unntaket `UgyldigSidetall`, en `sjekkSidetall()` som kaster ved sidetall ≤ 0, en iterativ `totalSider()`, og en rekursiv `flestSider()` i `Bok` — alle håndterer tom hylle.»
- **Typiske feil:** §5.10 (basissteg/tom liste), §5.9 (glemt `null`-retur), glemme `super(melding)` i unntaket, forveksle checked/unchecked, starte akkumulator/rekursjon feil.
- **Quiz: 24 · Flashcards: 14**

---

### Del 5 — Tråder og parallellitet *(O5: PERFEKT — tyngste blokk sammen med O3)*

> Tråder + monitor (O5, ~85 %) er 20–36 p og avgjør karakteren sammen med O3. Tre
> teorikapitler bygger tråder, monitoren (`ReentrantLock`/`Condition`) og
> produsent/konsument med toveis-synk; kap. 5.4 er utvidet hjemme-/eldre-stoff
> (GUI, `synchronized`, `CountDownLatch`); kap. 5.5 er O5-drillen.
> **TRÅDSTILREGELEN gjelder hele delen:** `ReentrantLock`+`Condition` (ikke
> `synchronized`), `await()` i `while`, `unlock()` i `finally`.

#### Kapittel 5.1: Tråder og trådoppstart — `Runnable`, `start`, `join`

- **id:** `in1010-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `in1010-1-3` · **kapitteltype:** teori
- **description:** Lage trådklasser med `implements Runnable` + `run()`, starte dem med `new Thread(r).start()`, og vente på dem med `join()` — pluss `CountDownLatch` som barriere (utvidet).
- **Eksamensbelegg:** Grunnlaget for O5 (~85 %): to trådklasser (produsent/konsument). `join()`/`CountDownLatch` som barriere er hjemmeeksamen-stoff (~25 %). Prioritet: **perfekt** (trådoppstart), **kjenne** (barriere).
- **Kodekontrakt:** `class Leter implements Runnable { @Override public void run() { … } }`; oppstart `Thread t = new Thread(new Leter()); t.start();` (kaller `run()` i ny tråd — IKKE kall `run()` direkte); `Thread.sleep(ms)` (kaster `InterruptedException` → `try/catch`); `Thread.currentThread()`, `interrupt()`; **`t.join()`** — vent til tråden er ferdig; **`CountDownLatch`** (utvidet): `new CountDownLatch(n)`, `latch.countDown()`, `latch.await()` som barriere; (evt. `extends Thread` nevnes som alternativ). Til bruk. `warning`: kall `start()`, ikke `run()` (ellers ingen ny tråd); merk barriere-stoffet «hjemme/eldre».
- **Oppgavesjangre:** H (oppstartsdelen). Mønstereksempel: «Skriv en trådklasse `Innleverer implements Runnable` som leverer inn bøker, start tre av dem, og vent på alle med `join()`.»
- **Typiske feil:** Kalle `run()` direkte i stedet for `start()` (kjører sekvensielt); glemme `try/catch (InterruptedException)` rundt `sleep`/`join`; tro at `start()` blokkerer til tråden er ferdig; dele foranderlig tilstand mellom tråder uten monitor (leder til 5.2).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 5.2: Monitor med `ReentrantLock` og `Condition`

- **id:** `in1010-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `in1010-5-1` · **kapitteltype:** teori
- **description:** Bygge en monitor som synkroniserer trådene: `ReentrantLock` + `Condition`, `lock()`/`unlock()` i `try/finally`, og `await()` i en `while`-løkke med `signal()`/`signalAll()` ved tilstandsendring — det mest sensorregel-tunge kapitlet i boka.
- **Eksamensbelegg:** Monitor i O5 (~85 %). **Eksplisitt i V2023/V2024: bruk `ReentrantLock`+`Condition`, IKKE `synchronized`.** De tre reglene (`while` rundt `await`, `unlock` i `finally`, `signal` ved endring) er faste trekk-punkter. Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** `import java.util.concurrent.locks.{Lock, ReentrantLock, Condition};`; monitorens felt `Lock laasen = new ReentrantLock();` og `Condition ikkeTom = laasen.newCondition();` (én `Condition` per betingelse man venter på); **metodemal:** `laasen.lock(); try { while (!vilkår) ikkeTom.await(); … endre tilstand …; ikkeTom.signalAll(); } finally { laasen.unlock(); }`; **`await()` i `while`** (ikke `if` — spuriøs oppvekking må testes på nytt), fanges i `try/catch (InterruptedException)`; **`unlock()` i `finally`** (nås også ved unntak); `signal()` vs. `signalAll()`; monitoren holder en teller eller en beholder (`ArrayList`/kø) av ventende/funne objekter; konsumenten returnerer neste element eller `null` når jobben er ferdig. `theorem`-idiom: **monitor-malen** (`lock`; `try { while(!vilkår) await(); …; signalAll(); } finally { unlock(); }`). `warning` (**sentral, tre regler**): (1) `synchronized` i stedet for `ReentrantLock`/`Condition` gir trekk der det forbys (§5.5); (2) `await()` i `if` i stedet for `while` (§5.4); (3) `lock()` uten `try/finally` → `unlock()` nås ikke ved unntak (§5.6).
- **Oppgavesjangre:** H (monitor-delen). Mønstereksempel: «Skriv en monitor `Utlaan` med `ReentrantLock` og en `Condition`: `leverInn(Bok b)` legger boka i en kø og signaliserer; `hentNeste()` venter i en `while`-løkke til køen ikke er tom, tar ut og returnerer — `unlock` i `finally`.»
- **Typiske feil:** §5.5 (`synchronized` der `ReentrantLock` kreves); §5.4 (`await` i `if`); §5.6 (`lock` uten `try/finally`); glemme `signal()`/`signalAll()` ved tilstandsendring (tråder våkner aldri); én `Condition` for flere ulike betingelser når to trengs.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 5.3: Produsent/konsument og toveis-synkronisering

- **id:** `in1010-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `in1010-5-2` · **kapitteltype:** teori
- **description:** Sette sammen to trådklasser (produsent + konsument) rundt én monitor, og toveis-synkronisering med **to** `Condition`-variabler der partene venter på hverandre — toppvarianten i O5 (V2024).
- **Eksamensbelegg:** Produsent/konsument er standardoppsettet i O5. Toveis-synk med to `Condition`-variabler var V2024 O5d (topp-differensierende). Prioritet: **perfekt**.
- **Kodekontrakt:** **Produsent/konsument:** to `Runnable`-klasser (f.eks. Innleverer/Utlåner, Pilot/Flygeleder) som deler én monitor; produsenten legger inn + `signal`, konsumenten venter i `while` + tar ut; **toveis-synkronisering:** **to** `Condition`-variabler på samme lås (`Condition venterPaaSvar = laasen.newCondition(); Condition venterPaaBestilling = laasen.newCondition();`) — den ene parten `await()` på den ene og `signal()` den andre, motparten omvendt; hvordan man unngår vranglås (alltid samme lås, signaliser før man venter selv); konsumenten returnerer `null`/stopper når produsenten er ferdig (avslutningsbetingelse). `theorem`-idiom kort: **toveis-synk** (to `Condition`, hver part venter på sin, signaliserer den andre).
- **Oppgavesjangre:** H (full O5). Mønstereksempel: «En `Ekspedisjon`-monitor med to `Condition`: en `Bestiller`-tråd legger inn en bestilling og venter på svar; en `Ekspeditor`-tråd venter på bestilling, behandler den og signaliserer svar tilbake.»
- **Typiske feil:** Bruke én `Condition` der to trengs (feil part vekkes); signalisere feil `Condition`; vranglås (vente før man har signalisert motparten); glemme avslutningsbetingelsen (konsumenten venter evig); §5.4/§5.6 (arv fra 5.2).
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 5.4: Utvidet — Swing-GUI, hendelseshåndtering og `synchronized` (hjemme/eldre)

- **id:** `in1010-5-4` · **number:** 5.4 · **estimatedMinutes:** 45 · **prerequisites:** `in1010-5-2`, `in1010-1-3` · **kapitteltype:** teori
- **description:** Det utvidede hjemme-/eldre-apparatet samlet: en enkel Swing-GUI (`JFrame`/`JButton`/`JTextField`) med `ActionListener`, og den enklere `synchronized`-monitoren — merket for konte/hjemmeeksamen, ikke moderne skoleeksamen.
- **Eksamensbelegg:** Swing-GUI ~40 % (2015, 2020, 2021-konte, 2022 — borte fra skoleeksamen); `synchronized`-monitor på hjemmeeksamen. Prioritet: **kjenne** (hjemme/eldre).
- **Kodekontrakt:** **GUI:** `import java.awt.*; import javax.swing.*;`; `JFrame` (opprettes kun første gang), `JButton`, `JLabel`, `JTextField` (`getText()`), `JTextArea`; **`class Knappelytter implements ActionListener`** med `@Override public void actionPerformed(ActionEvent e)` som leser felt og oppdaterer datastrukturen; `knapp.addActionListener(new Knappelytter())`; `Scanner` (`new Scanner(System.in)`) for tastaturdialog (et `Dialog`-interface med to implementasjoner — tastatur vs. GUI — er et fast hjemmeeksamen-mønster); kommunisere svar tilbake til hovedtråden (hint: `Thread.sleep(...)` + `interrupt()`). **`synchronized`:** `synchronized`-metoder/blokker + `wait()`/`notifyAll()` som den enklere monitorvarianten. `warning`: GUI og `synchronized` er **borte fra moderne skoleeksamen** — bruk `ReentrantLock`/`Condition` der (kap. 5.2). Merket «for konte/hjemmeeksamen».
- **Oppgavesjangre:** J. Mønstereksempel: «Lag et `JFrame` med et `JTextField` og en `JButton`; en `ActionListener` leser feltet med `getText()` og legger en ny vare i lageret når knappen trykkes.»
- **Typiske feil:** Opprette vinduet på nytt hver gang i stedet for én gang; glemme `addActionListener`; blande `synchronized` inn på moderne skoleeksamen (bruk `ReentrantLock`); glemme at `getText()` gir `String` (må konverteres).
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 5.5: DRILL — Tråder + monitor (O5)

- **id:** `in1010-5-5` · **number:** 5.5 · **estimatedMinutes:** 90 · **prerequisites:** `in1010-5-3` · **kapitteltype:** drill
- **description:** Full drill på O5: to `Runnable`-trådklasser + en monitor med `ReentrantLock`/`Condition`, `await()` i `while`, `signal()` ved endring, evt. toveis-synk — i sensors korte stil, med de tre trådreglene i fokus.
- **Eksamensbelegg:** Sjanger H (~85 %), O5, 20–36 p — avgjørende for karakteren. Splittes typisk over trådklasser/monitor/synkronisering/toveis-synk. Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** 1) to `Runnable`-klasser (produsent/konsument) med `run()`; 2) monitor med `Lock`+`Condition`(er); 3) hver monitormetode: `lock()` → `try { while(!vilkår) await(); … signalAll(); } finally { unlock(); }`; 4) toveis-synk med to `Condition` når partene venter på hverandre; 5) avslutningsbetingelse (konsument returnerer `null`/stopper); 6) IKKE skriv `main`/oppstart hvis bare klassene etterspørres. Gjennomregnet eksamenscase med **sensor-margnotater** (de tre trådreglene sjekkes eksplisitt; riktig struktur belønnes selv med småfeil; deloppgaver uavhengige). 8–12 oppgaver på eksamensnivå, roterende domener, minst én med toveis-synk. **Egen seksjon:** «`ReentrantLock` vs. `synchronized`» — vis at `synchronized`-varianten gir trekk der oppgaven forbyr den.
- **Oppgavesjangre:** H. Mønstereksempel: «Et verksted der `Mekaniker`-tråder henter oppdrag fra en `Oppdragsko`-monitor og `Kunde`-tråder legger inn oppdrag: skriv begge trådklassene og monitoren med `ReentrantLock`, én `Condition`, `await()` i `while` og `unlock()` i `finally`.»
- **Typiske feil:** Hele trådkatalogen: §5.4 (`await` i `if`), §5.5 (`synchronized` der forbudt), §5.6 (`lock` uten `finally`), glemt `signal`, feil/manglende `Condition`, kalle `run()` i stedet for `start()`, skrive `main` som ikke etterspørres (§5.14).
- **Quiz: 24 · Flashcards: 14**

---

### Del 6 — Eksamenstrening

> Én midtveis-simulering (2 t, tidligpensum) + to komplette avsluttende
> øvingseksamener etter den faste 5-oppgave-malen O1→O5, hver over **ett**
> gjennomgående nyskrevet domene. Til sammen dekker de tre settene sjangrene A–K.

#### Kapittel 6.1: Midtveis-simulering (2 timer)

- **id:** `in1010-6-1` · **number:** 6.1 · **estimatedMinutes:** 120 · **prerequisites:** Del 1–2 · **kapitteltype:** øvingseksamen (midtveis)
- **description:** Komplett midtveis-simulering etter det reelle formatet (25 %, 2 t, tidligpensum): Java-grunnleggende, klasser/arv/interface/abstrakte klasser, en enkel lenket liste og iterator, evt. et generics-innslag — med fullstendige løsningsforslag.
- **Eksamensbelegg/miks:** Speiler midtveiseksamen (2 t): et nytt, mindre domene (f.eks. «Musikkstrømming») løst i 3–4 oppgaver — (i) tegn + programmér et lite hierarki med abstrakt superklasse + interface (sjanger A + B); (ii) en enkel enkeltlenket liste i domeneobjektet med `leggTil`/`erMed` (sjanger C, enkel); (iii) en iterator (`Iterable<T>` + indre `Iterator<T>`, sjanger D); (iv) evt. et lite generics-/`Comparable`-innslag. **Ingen tråder, ingen tung rekursjon** (utenfor midtveispensum). Alle oppgaver nyskrevne. Løsningsforslag som A-besvarelse i `collapsible` per oppgave (kort idiomatisk kode), med `tip` om delpoeng og hva som gir uttelling. De registreres OGSÅ som quiz (kapitlets quizkvote), slik at simuleringen kan tas som en tidsstyrt økt.
- **Kodekontrakt:** Dekker sjangrene A, B, C (enkel), D + evt. K/Comparable — hele midtveispensumet.
- **Oppgavesjangre:** A, B, C, D. Mønstereksempel: se drillkapitlene i Del 1–2.
- **Quiz: 24 · Flashcards: 0**

#### Kapittel 6.2: Avsluttende øvingseksamen 1 — bibliotek-domene (enkeltlenket)

- **id:** `in1010-6-2` · **number:** 6.2 · **estimatedMinutes:** 240 · **prerequisites:** `in1010-6-1` · **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers avsluttende sett etter den faste O1→O5-malen over ett domene (bibliotek), med enkeltlenket liste, iterativ + rekursiv aggregering og produsent/konsument-monitor.
- **Eksamensbelegg/miks:** Speiler et typisk moderne skoleeksamenssett (100 p): **O1** tegn hierarki (`abstrakt Medium` → `Trykksak`/`Digitalt`, interface `Utlanbar`, 5 p) → **O2** programmér klassene + interface med `super()` (15 p) → **O3** egendefinert **enkeltlenket** `Samling` over `Medium`-objektene: `leggTil`/`taUt`/`erMed`, iterator, `Bok[] hentBoker()` med `instanceof`-uttrekk (~35 p) → **O4** egendefinert unntak + iterativ `sjekk`/`totalX` + **rekursiv** aggregering, tom-liste (~18 p) → **O5** to `Runnable`-klasser (Låner/Bibliotekar) + monitor med `ReentrantLock`/én `Condition`, `await` i `while` (~27 p). Alle oppgaver nyskrevne. Løsningsforslag som A-besvarelse i `collapsible` per oppgave (kort idiomatisk kode, ingen `main` der det ikke bes om), med `tip` om delpoeng/vekting og hva som gir uttelling ved delvis riktig kode. `tip` om tidsbudsjett (O1+O2 ~50 min, O3 ~90 min, O4 ~45 min, O5 ~55 min).
- **Kodekontrakt:** Dekker sjangrene A, B, C (enkeltlenket), D, E, F, G, H.
- **Oppgavesjangre:** A, B, C, D, E, F, G, H.
- **Quiz: 8 · Flashcards: 0**

#### Kapittel 6.3: Avsluttende øvingseksamen 2 — dyrepark-domene (dobbeltlenket, toveis-synk)

- **id:** `in1010-6-3` · **number:** 6.3 · **estimatedMinutes:** 240 · **prerequisites:** `in1010-6-2` · **kapitteltype:** øvingseksamen
- **description:** Komplett avsluttende sett med et vanskeligere toppsjikt: **dobbeltlenket** liste med `leggTilForan`, tre-/graf-rekursjon, og **toveis-synkronisert** monitor med to `Condition` — pluss et konte-flavor generics-innslag.
- **Eksamensbelegg/miks:** Speiler et tyngre sett (V2023/V2024-nivå, 100 p) over ett domene (dyrepark): **O1** tegn hierarki (`abstrakt Dyr` → `Rovdyr`/`Planteeter`, interface `Foringskrevende`, 5 p) → **O2** programmér med `super()` + `toString()` polymorft (15 p) → **O3** **dobbeltlenket** `Innhegning`-liste: `leggTil`, `leggTilForan(a, b)` med endehåndtering, `taUt` (begge pekere), iterator, `instanceof`-uttrekk (~40 p) → **O4** unntak + iterativ aggregering + **rekursjon på slektstre/graf** (`finnEldsteOpphav` / «finnes det vei til»), tom-liste (~18 p) → **O5** toveis-synkronisert monitor med **to** `Condition` (Dyrepasser venter på én, Veterinær signaliserer den og venter på den andre, ~22 p). **Konte-innslag (merket):** et lite generisk `class Kolonne<T extends Dyr>`-krav (sjanger K) som «ekstra» toppoppgave. Alle nyskrevne. Løsningsforslag som A-besvarelse med vektings-`tip` og delpoeng-signaler.
- **Kodekontrakt:** Dekker sjangrene A, B, C (dobbeltlenket), D, E, F, G, H (toveis-synk), K — supplerer 6.2 slik at de to settene + midtveis sammen dekker A–K minst én gang (I dekkes i kap. 3.1; J i kap. 5.4).
- **Oppgavesjangre:** A, B, C, D, E, F, G, H, K.
- **Quiz: 8 · Flashcards: 0**

---

## 5. Summeringskontroll (quiz/flashcards) — AUTORITATIV

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 14 | 14 |
| 1 | 1.1–1.6 | 24+22+22+18+16+22 = **124** | 26+24+24+20+14+16 = **124** |
| 2 | 2.1–2.4 | 16+16+16+22 = **70** | 20+20+16+24 = **80** |
| 3 | 3.1–3.6 | 14+24+22+22+18+26 = **126** | 16+26+22+20+20+14 = **118** |
| 4 | 4.1–4.4 | 20+20+20+24 = **84** | 24+20+18+14 = **76** |
| 5 | 5.1–5.5 | 20+22+20+14+24 = **100** | 20+22+18+14+14 = **88** |
| 6 | 6.1–6.3 | 24+8+8 = **40** | 0+0+0 = **0** |
| **Sum** | **29 kap.** | **558 ≥ 500 ✓** | **500 ≥ 500 ✓** |

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens og eksamensform: de fem perfekt-temaene (Del 1, 3, 4,
5 + iterator i 2.4) bærer mest. Quiz vektes mot **kunnskaps-konsolidering,
midtveistrening og sensorregel-innprenting** (ikke mot avsluttende, som er ren
kodeskriving uten MC — se avviket i §1). Flashcards vektes mot API-/
konstruksjonsdefinisjonene (Del 1–3 bærer mest — der er tettheten av Java-
konstruksjoner størst).

> **Merk (flashcard-margin):** flashcard-summen treffer akkurat 500. Fordi
> flashcards KUN genereres fra toppnivå `definition`-blokker med `title` (§1), og
> en agent kan komme til å underskyte, skal byggekontrakten sette et **arbeidsmål
> på +5 % (≈525 flashcards)** for å garantere ≥500 etter validering. Kvotene i
> tabellen er absolutt minimum per kapittel.

---

## 6. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–5 → 20 prøver)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med løsningsforslag (kort
idiomatisk Java) og poengfordeling. Prøvekapitler bygges som `<emne>-<del>-prove`
(chapterNumber `<del>.P`) etter plattformmønsteret, eller som egne
exercise-seksjoner i delens siste kapittel. Del 0 (meta) og Del 6 (som ER
eksamenene) får ikke egne prøver.

**Prøve-kvote Del 1:** 4 prøver (klasser, arv og interface)
1. Prøve 1.A (25 min): Java-grunnleggende fra IN1900 — klasse, konstruktør, felt, `toString` (sjanger B, midtveis).
2. Prøve 1.B (30 min): Arv og `super()` — subklasse med konstruktørkjeding + `@Override` (sjanger B).
3. Prøve 1.C (25 min): Abstrakt klasse + interface — tegn et hierarki (sjanger A).
4. Prøve 1.D (40 min): Full O1+O2 — tegn og programmér et komplett hierarki med interface og `super()`.

**Prøve-kvote Del 2:** 4 prøver (generiske typer, samlinger og iterator)
1. Prøve 2.A (30 min): Iterator — `Iterable<T>` + indre `Iterator<T>` på en enkel beholder (sjanger D, midtveis).
2. Prøve 2.B (25 min): `Comparable`/`compareTo` + sortert innsetting (sjanger K-moment).
3. Prøve 2.C (25 min): Generisk klasse `<T extends Base>` med typekonvertering (sjanger K, konte).
4. Prøve 2.D (25 min): `ArrayList`/`HashMap` som register/kø der oppgaven tillater det.

**Prøve-kvote Del 3:** 4 prøver (egendefinerte lenkede strukturer)
1. Prøve 3.A (35 min): Enkeltlenket liste i domeneobjektet — `leggTil`/`erMed`/`taUt` med alle tilfeller (sjanger C).
2. Prøve 3.B (35 min): Dobbeltlenket liste — `leggTilForan` + `taUt` med endehåndtering (sjanger C).
3. Prøve 3.C (30 min): Iterator + `instanceof`-uttrekk (tell→alloker→fyll) på egen liste (sjanger D + E).
4. Prøve 3.D (40 min): Full O3 — komplett liste med iterator + uttrekk, enkelt- eller dobbeltlenket, «Node vs. domeneobjekt»-refleksjon.

**Prøve-kvote Del 4:** 4 prøver (unntak, rekursjon og aggregering)
1. Prøve 4.A (25 min): Egendefinert unntak + iterativ sjekk som kaster (sjanger F).
2. Prøve 4.B (30 min): Iterativ aggregering via iterator + tom-liste (sjanger F).
3. Prøve 4.C (30 min): Rekursjon i domeneobjektet — basis + steg + starter (sjanger G).
4. Prøve 4.D (40 min): Full O4 — unntak + iterativ + rekursiv aggregering, tom-liste.

**Prøve-kvote Del 5:** 4 prøver (tråder og parallellitet)
1. Prøve 5.A (25 min): Trådoppstart — `Runnable`/`run`/`start`/`join` (sjanger H, oppstart).
2. Prøve 5.B (35 min): Monitor — `ReentrantLock`/`Condition`, `await` i `while`, `unlock` i `finally` (sjanger H).
3. Prøve 5.C (40 min): Produsent/konsument + toveis-synk med to `Condition` (sjanger H).
4. Prøve 5.D (30 min): «`ReentrantLock` vs. `synchronized`» + GUI-innslag (sjanger H + J, hjemme/eldre).

### Øvingseksamener (3 komplette sett — se kap. 6.1–6.3)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Midtveis-simulering (kap. 6.1) | Midtveis (tidligpensum, 2 t) | Hierarki + enkel liste + iterator (A/B/C/D), ingen tråder, musikkstrømming-domene |
| Avsluttende 1 (kap. 6.2) | Typisk moderne skoleeksamen (100 p) | Fast O1→O5-mal (A/B/C/D/E/F/G/H), enkeltlenket, bibliotek-domene |
| Avsluttende 2 (kap. 6.3) | Tyngre sett (V2023/V2024-nivå) | O1→O5 med dobbeltlenket + toveis-synk + generics-innslag (A/B/C/D/E/F/G/H/K), dyrepark-domene |

Til sammen dekker de tre settene + kap. 3.1 (I) + kap. 5.4 (J) samtlige sjangre
A–K minst én gang.

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — de to eksamenene (midtveis 25 % tidligpensum,
   avsluttende 75 % ren kodeskriving), den faste O1→O5-malen, at domenet roterer
   men øvelsen er den samme (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer:
   **perfekt** (O1+O2 Del 1, O3 Del 3, iterator 2.4/3.4, O4 Del 4, O5 Del 5),
   **kunne** (`instanceof`-uttrekk, rekursjon, datastruktur-tegning,
   `Comparable`/`toString`), **kjenne** (generics, GUI, `HashMap`, hashtabell/
   Node fra bunnen, `synchronized`/`CountDownLatch` — «for konte/midtveis/
   hjemmeeksamen»).
3. **Sjangerguiden** — de 11 oppgavetypene A–K med løsningsoppskriftene fra
   drillkapitlene (1.5, 1.6, 3.6, 4.4, 5.5) i kortform.
4. **Idiomarket** — de sju kodemønstrene (§3b) på ett oppslag: konstruktørmalen,
   leggTil med endepeker, taUt med alle tilfeller, iterator-standardmønsteret,
   instanceof-uttrekket, rekursjonsmalen, monitor-malen.
5. **Sensorreglene** — metareglene (skriv bare det oppgaven ber om; import/
   kommentar/aksessmodifikator teller ikke; rimelige antakelser dokumenteres;
   kompakt kode) + de tre **kirurgiske reglene** (Node vs. domeneobjekt;
   `ReentrantLock`/`Condition` ikke `synchronized`; `await` i `while` + `unlock`
   i `finally`) + delvis-riktig-poenggivingen (riktig struktur > perfekt detalj;
   deloppgaver uavhengige; alternative løsninger sidestilles).
6. **Feilkatalogen** — de 15 typiske feilene (§5 i analysen) samlet, hver med
   henvisning til kapitlet som forebygger den: Node-idiom feil sted, traversere i
   `leggTil`, spesialtilfeller i `taUt`, `await` i `if`, `synchronized` forbudt,
   `lock` uten `finally`, glemt `super()`, array før telling, glemt `null`-retur,
   feil rekursjonsbunn, iterator feil type, interface uten `implements`/`abstract`,
   innlimt generisk kode, skrive mer enn bedt om, generics-typekonvertering.
7. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant):
   Del 1 (O1+O2, bærer midtveis) → Del 2.4 (iterator) → **midtveis-simulering
   (kap. 6.1) før midtveis** → Del 3 (O3, tyngst) → Del 4 (O4) → Del 5 (O5) →
   prøvene underveis → de to avsluttende settene de siste ukene under tidspress
   (240 min). Nivå-3-kapitlene (2.1/2.2/3.5/5.4) leses lett; prioritér de fem
   perfekt-temaene.

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `in1010` med alle 29
   kapitler (id/number/title/description/estimatedMinutes/topics/competenceGoals/
   prerequisites/linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra §2-tabellen
   (obligatorisk). **`number` er del-basert («3.2»), ALDRI lineær** (JUS1111-
   lærdommen — bokforsiden grupperer på `number.split('.')[0]`); prosareferanser
   i innholdet bruker samme form («kap. 3.2»).
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–K, idiomkatalogen og
   frekvenstallene resten refererer til.
3. **De fem perfekt-delene i avhengighetsrekkefølge**: Del 1 (fundamentet — kreves
   av alt; bygg 1.1→1.6 i rekkefølge) → Del 2 (iterator 2.4 kreves av Del 3; bygg
   2.1→2.4) → Del 3 (O3, tyngst; 3.2 og 3.4 kreves av Del 4) → Del 4 (O4) → Del 5
   (O5).
4. Del 6 (øvingseksamenene til slutt — de gjenbruker alle sjangrene; les HELE
   skjelettet før du skriver dem).
5. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; prøvene (§6) legges i respektive delers prøvekapittel/
   exercise-seksjoner.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (escape `"` i norske sitattegn OG i Java-strenger som `"negativ vekt"`);
  `npm run build` grønn.
- [ ] **Kodestil-konsistens**: all eksempel-/fasitkode er kort og idiomatisk —
  ingen unødvendig `main`/trådoppstart der det ikke etterspørres, ingen overflødige
  kommentarer/aksessmodifikatorer; `@Override` der det hører hjemme; norske
  bokstaver i kode er greit.
- [ ] **DEN KIRURGISKE SENSORREGELEN**: hvert liste-kapittel i Del 3 (3.2–3.6) har
  `warning` om at Node-objekter gir null uttelling der lenkene skal bo i
  domeneobjektet (og motsatt); kap. 3.6 har egen «Node vs. domeneobjekt»-seksjon.
- [ ] **TRÅDSTILREGELEN**: bokstandard er `ReentrantLock`+`Condition` overalt i
  Del 5; hvert trådkapittel har `warning` om de tre reglene (`while` rundt
  `await`, `unlock` i `finally`, ikke `synchronized`); `synchronized`/GUI er merket
  «hjemme/eldre» i kap. 5.4.
- [ ] **API- og konstruksjonsliste per delkapittel**: hvert delkapittel som bruker
  Java-konstruksjoner har `collapsible` «API- og konstruksjonsliste» rett etter
  Forkunnskaper, som forklarer ALLE konstruksjoner brukt i delkapitlet (per
  delkapittel, ikke arv fra tidligere).
- [ ] **Kryssbok-lenker til IN1900**: forkunnskaps-referanser til IN1900 er
  skrevet som **klartekst med aktiveringsmarkør** (IN1900 er skjelett, ikke
  bygget) — IKKE live markdown-lenker; markørformat `[aktiver lenke
  /bok/in1900/<id> når IN1900 er bygget]`. Interne IN1010-lenker
  (`[tittel](/bok/in1010/<id>)`) peker kun på kapitler som finnes.
- [ ] **De to liste-idiomene**: boka lærer BÅDE domeneobjekt-lenking (moderne
  skoleeksamen, kap. 3.2–3.4/3.6) OG Node-idiomet + generics/hashtabell (konte/
  eldre, kap. 3.5/2.1), og er eksplisitt på når hvert kreves.
- [ ] **Idiomkatalogen (§3b)**: de sju kodemønstrene finnes som `theorem`-blokker
  i angitte kapitler og gjentas i drill/studieguide.
- [ ] **Delvis-riktig-poenggiving i løsningsforslag**: alle løsningsforslag (drill
  + øvingseksamener) markerer hva som gir uttelling steg for steg, at riktig
  struktur belønnes selv med småfeil, og at deloppgaver kan løses uavhengig.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
  fra dette skjelettet + «midtveisrelevant» der det gjelder), Typiske feil-
  `warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger med `solution` +
  `hints`, repetisjons-`collapsible`; drillkapitler (1.5, 1.6, 3.6, 4.4, 5.5) har
  løsningsoppskrift + sensor-kommentert case + 8–14 oppgaver.
- [ ] **Quiz-sum ≥ 558 og flashcard-sum ≥ 500** per kvotetabellen (§5) — sikt mot
  ≈525 flashcards (§5-margin); quiz kalibrert som konsolidering/midtveis/
  sensorregel-MC, `options[0]` = riktig svar.
- [ ] **Prøver**: 4 per temadel 1–5 (20 stk) + 3 øvingseksamener (kap. 6.1–6.3)
  som sammen med kap. 3.1/5.4 dekker sjangrene A–K.
- [ ] **Fast 5-oppgave-mal i øvingseksamenene**: kap. 6.2 og 6.3 følger O1→O5 over
  ett gjennomgående nyskrevet domene (bibliotek / dyrepark), med
  poengfordeling ≈ 5/15/35/18/27 og delpoeng-`tip` per oppgave; kap. 6.1 er
  midtveis (tidligpensum, ingen tråder).
- [ ] **Opphavsrett**: ALLE oppgaver og kodeeksempler nyskrevne — egne klassenavn,
  egne tall, egne domener (IKKE fly/tog/bil/hotell/skog/sykehus/hund fra arkivet);
  kodemønstrene er standard Java-idiomer, men ingen oppgavetekster/fasiter fra
  reelle sett gjengis; pensumlitteratur (Big Java o.l.) refereres, aldri siteres i
  lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
  (200 + innhold), jf. lærdommen om `getChapterMeta`.
