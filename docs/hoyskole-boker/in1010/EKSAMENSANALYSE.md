# Eksamensanalyse: IN1010 Objektorientert programmering (UiO)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på UiO-arkivet 2015–2024:
> 9 oppgavesett (V2015–V2021, inkl. konte) og 16 løsningsforslag/sensorveiledninger
> (V2015–V2024, inkl. konte) — 25 filer totalt.
> Lesestrategi som avtalt: sensorveiledningene og de siste ~8 årenes sett (2018–2024)
> er gjennomgått grundig; eldre sett (2015–2017) er skummet for form- og temaregistrering.
> **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster
> eller fasit. Kodemønstrene som beskrives er standard Java-idiomer, ikke opphavsrettsbeskyttet tekst.
> Analysen er kvantitativ der kildene tillater det.
>
> **Progresjon fra IN1900:** IN1010 er den objektorienterte oppfølgeren til IN1900
> (introduksjon til programmering med vitenskapelige anvendelser). Der IN1900 er **Python**,
> vitenskapelig kode og numerikk (ODE-løsere, rekker, fillesing), er IN1010 **Java** og
> ren OO-tenkning: klassehierarki, arv, interface, egendefinerte datastrukturer, unntak,
> rekursjon og parallellprogrammering (tråder/monitor). Studenten skifter fra å *bruke*
> objekter og løkker til å *designe* klasser, referansestrukturer og synkronisering fra bunnen.
> IN1900s spesialmetoder (`__init__`/`__call__`/`__str__`) tilsvarer nå Javas konstruktør,
> `toString()`, `compareTo()` og `@Override`. IN1900s «hva skrives ut» og korte funksjoner er
> byttet ut med «skriv en hel klasse / et helt hierarki» og «tegn en datastruktur».

---

## 1. Eksamensform og utvikling

### Dagens form (skoleeksamen 2023–2024)

IN1010 vurderes i dag med **to digitale eksamener i Inspera**, karakterskala **A–F**:

| Eksamen | Vekt | Varighet | Form |
|---|---|---|---|
| **Midtveiseksamen** (mars) | **25 %** | 2 t | Skriftlig digital |
| **Avsluttende eksamen** (juni) | **75 %** | **4 t** | Skriftlig digital, ren kodeskriving |

Begge deler må bestås separat, og obligatoriske innleveringer må være godkjent. *Arkivet
inneholder kun avsluttende sett* — ingen midtveissett — så all frekvensanalyse under gjelder
avsluttende eksamen. (Midtveis tester samme kjernepensum tidligere i semesteret; se prognose.)

Den avsluttende eksamenen er **nesten ren kodeskriving** — det finnes ingen flervalgsdel og
ingen «hva skrives ut»-sjanger slik IN1900 har. Studenten skriver Java-kode (og én tegning)
i Insperas svarfelt. Fast oppbygging på skoleeksamen (V2023 «Tog», V2024 «Fly»): **ett
gjennomgående domenecase løses stegvis** gjennom fem oppgaver med oppgitt poengsum, sum 100:

| Oppg. | Tema | Poeng (V2024 / V2023) |
|---|---|---|
| **O1** | Tegn klassehierarki (abstrakt superklasse + interface) | 5 / 5 |
| **O2** | Programmér klassene + interface (arv, konstruktører, `super()`) | 15 / 15 |
| **O3** | Egendefinert lenket liste (leggTil, taUt, erMed, iterator, array-uttrekk) | 28 / 40 |
| **O4** | Unntak + aggregering (iterativ + rekursiv) | 16 / 20 |
| **O5** | Tråder + monitor (`ReentrantLock`/`Condition`) | 36 / 20 |

O3 (egendefinert lenket liste) og O5 (tråder) er de to tyngste blokkene og avgjør karakteren.

### Historisk utvikling — tre epoker

**Epoke 1 — tradisjonell papireksamen (2015–2016, «INF1010»).** 6-timers papireksamen,
**læreboka tillatt** (Big Java, kap. 20 vedlagt i 2016). Fokus på **generiske datastrukturer**:
generisk lenket liste `LenkeListe<T extends Comparable<T>>` med eksplisitte **Node-objekter**
og vaktposter (listehode/listehale), fletting av ordnede lister, `compareTo`, boblesortering
parallellisert med tråder + `synchronized`. Domene: «Senke skip» (2015), tekstsortering (2016).

**Epoke 2 — digital, systemdesign (2017–2019).** Overgang til Inspera. Større, sammensatte
designoppgaver: klassehierarki → prioritetskø (lenket) → array-basert beholder → sammensetting
av system → mange tråder + monitor. V2017 «Sykehus» (11 tråder, `AnalyseBuffer`), V2018
«Flyreservasjon» (100+ tråder, overload av `book()`, iterator, `Prioritetsko<T>` med `Node`),
V2019 «Hundeoppdretter» (`Comparable`, sortert innsetting, **rekursjon på slektstre**
`finnEldsteKjenteOpphav()`, `KullArray` = array av enkeltlenkede lister hashet på sekund —
**og ingen tråder!**). Generics og Node-objekter er fortsatt standard.

**Epoke 3a — korona-hjemmeeksamen (2020–2022).** Bestått/ikke-bestått eller A–F, lengre
sett (10–15 deloppgaver), «alle hjelpemidler». Trekker inn **bredere apparat**: `toString()`
polymorft med `super.toString()`, `Comparable` + sortert innsetting, **Swing-GUI**
(`JFrame`/`JButton`/`JTextField`/`ActionListener`), et `Dialog`-interface med to
implementasjoner (tastatur via `Scanner` vs. GUI), `HashMap`/`ArrayList`, `CountDownLatch`/
`join()` som barriere, og til og med en **hashtabell fra bunnen** (V2021-konte «Reisebyrå»).
V2020 «Spill», V2021 «Skog/simulator» (Aktivitet/PrioKo-rammeverk), V2022 «Bilkollektiv»
(del 1) + «Hotell» (del 2), V2022-konte «Støymåling» (`Node`-basert `StedListe`, `slåSammen`,
invariant-skriving, HashMap+ArrayList, JTextField-GUI).

**Epoke 3b — moden skoleeksamen (2023–2024).** Tilbake til 4-timers digital skoleeksamen
med den faste 5-oppgave-strukturen over. **Viktig endring i kodestil:** de egendefinerte
listene skal nå lenkes via `neste`/`forrige`-variabler **i selve domeneobjektet** — **ikke**
via `Node`-objekter (eksplisitt i sensorveiledningen). Generics tones ned på hovedeksamen,
men dukker fortsatt opp på konte (V2023-konte O8: `KolonneG<T extends Bil>`). GUI er borte
fra skoleeksamen, men lever videre på hjemme-/konteoppgaver.

**Konsekvens for boka:** Boka må dekke *begge* liste-idiomene — det Node-frie
domeneobjekt-idiomet (moderne skoleeksamen) og det klassiske `Node`/generiske idiomet
(eldre sett, konte, midtveis) — og være tydelig på når hvert brukes.

---

## 2. Temafrekvens

Basert på de **9 arkiverte settene 2015–2024** (V2015, V2016, V2017, V2018, V2019, V2019-konte,
V2020, V2021, V2021-konte) med sensorveiledningene V2020–V2024 (inkl. konte) som fasit for
hva som faktisk kreves. Score = andel av settene der temaet er en egen oppgave eller tydelig
deloppgave. (Skoleeksamen-strukturen 2023–2024 er så fast at V2023/V2024 alene gir ~100 % på
kjernetemaene.)

| Tema | Score | Kommentar |
|---|---|---|
| **Klassehierarki — tegning (O1)** | **~100 %** | Abstrakt superklasse + 2 nivåer + interface. Alltid første oppgave. |
| **Klassehierarki — programmering (O2)** (arv, `extends`/`implements`, konstruktør + `super()`) | **~100 %** | `final`-felt gir pluss. Interface med ren metodesignatur. |
| **Egendefinert lenket liste** (leggTil/taUt/finnOgTaUt, spesialtilfeller) | **~100 %** | Enkelt- eller dobbeltlenket. Tyngste blokk. |
| **Iterator** (`Iterable<T>` + indre `Iterator<T>`-klasse, `hasNext`/`next`) | **~90 %** | Drillet i undervisningen; må være helt korrekt. |
| **Tråder + monitor** (`Runnable`, `ReentrantLock` + `Condition`, produsent/konsument) | **~85 %** | Fravær bare i V2019 (skoleeksamen uten tråder). |
| **Unntak** (egendefinert subklasse av `Exception`/`RuntimeException`, kaste/fange) | **~80 %** | O4 på moderne sett; ofte parametrisert for å skille tilfeller. |
| **Rekursjon** (metode i domeneobjektet + starter i beholderen) | **~80 %** | maksVekt, størstSpennvidde, finnEldste­Opphav, finnesVeiTil. |
| **Array-uttrekk med `instanceof` + cast** (tell → alloker → fyll) | **~70 %** | `PassasjerFly[] hentPassasjerFly()`-mønsteret. |
| **Abstrakte klasser** (`abstract class`, abstrakt mellomklasse/metode) | **~70 %** | Superklassen «bør være abstrakt». |
| **Datastruktur-tegning** (objekter + referansepiler, ikke klasser) | **~55 %** | Egen oppgave i hjemme-/eldre sett; implisitt i O1 ellers. |
| **`toString()` polymorft** med `super.toString()` | **~45 %** | Standard på hjemmeeksamen (2020/2022); ikke på 2023/2024. |
| **`Comparable`/`compareTo` + sortert innsetting** | **~40 %** | Tungt i 2016/2019; sortert liste i 2022 (Bilkollektiv). |
| **Swing-GUI** (`JFrame`/`JButton`/`JTextField`/`ActionListener`) | **~40 %** | 2015, 2020, 2021-konte, 2022 (begge). Borte fra skoleeksamen. |
| **Samlinger fra biblioteket** (`ArrayList`, `HashMap`) | **~35 %** | Monitor-beholder; By-registre (2022-konte). |
| **Generiske klasser** (`class K<T extends Base>`) | **~35 %** | Kjerne i 2016/2018; konte 2023 O8–O9. Tonet ned på skoleeksamen. |
| **Barriere/join** (`CountDownLatch`, `join()`) i trådoppstart | **~25 %** | Hjemmeeksamen (2022 Hotell O14–O15). |
| **`Node`-baserte / hybride strukturer** (indre `Node`-klasse, array-av-lister, hashtabell) | **~35 %** | Eldre sett, 2022-konte (`StedNode`), 2021-konte (hashtabell). |

**Viktigste funn:** Fem temaer utgjør ryggraden på **hver** moderne skoleeksamen —
klassehierarki (tegne + programmere), egendefinert lenket liste, iterator, unntak og
tråder/monitor. En IN1010-bok som treffer disse fem perfekt dekker mesteparten av
eksamenspoengene. Rekursjon og array-uttrekk med `instanceof` er de faste «differensierende»
delkravene.

**Domenet roterer, mønsteret er fast.** Innpakningen varierer (fly, tog, biler, hotell,
skog, sykehus, hund), men den underliggende OO-øvelsen er identisk: definér et abstrakt
hierarki med ett interface, bygg en egendefinert lenket beholder over domeneobjektene, gi
den en iterator, kast et egendefinert unntak ved avvik, og synkronisér to trådklasser via
en monitor. Gjenkjenn mønsteret uansett domene.

---

## 3. Oppgavetype-katalog

Sjangrene som går igjen, med sensors foretrukne løsningsmetode.

### A. Tegn klassehierarki (O1, 5 p)
- **Krav:** Abstrakt superklasse øverst (tegnet `abstract`), to nivåer under, ett **interface**
  tegnet *som* interface med `implements`-pil fra minst én klasse. Piler peker **opp** mot
  superklassen. Gjerne abstrakt mellomklasse (`MotorFly`/`Vogn`).
- **Sensornyanse:** Hierarkiet er **ikke entydig**. Sensor godtar at «umotoriserte» klasser
  (seilfly, vogn) også implementerer interfacet `Motordrevet` og bare returnerer 0 — fordi
  oppgaven ikke sier eksplisitt hvilke klasser som mangler egenskapen.

### B. Programmér hierarkiet (O2, 8–15 p)
- **Krav:** `extends`/`implements` korrekt (typisk 7 p), instansvariabler deklarert,
  **konstruktører kaller `super(...)`** (typisk 8 p). Interface har ren metodesignatur.
  Domeneklassen har `neste`- (og `forrige`-) variabler for den senere listen.
- **Stilpluss:** Konstante felt deklarert `final`. På hjemmeeksamen: `toString()` redefinert
  polymorft med kall på `super.toString()`.

### C. Egendefinert lenket liste (O3, tyngst — 20–40 p)
- **Ingen `Node`-objekter (moderne skoleeksamen).** Lenkene bor i domeneobjektet
  (`Fly.neste`, `Skinnegående.forrige/neste`). Sensor sier eksplisitt at innlimt generisk
  Node-listekode ikke gir uttelling. *(Unntak: eldre sett, konte og «tegn Node-liste»-oppgaver
  krever nettopp en indre `Node`/`StedNode`-klasse — les oppgaven.)*
- **`leggTil`:** bruk **første-/siste-peker direkte**, ikke traverser. Enkeltlenket → sett inn
  først; dobbeltlenket → bakerst via sistepeker.
- **`taUt`/`finnOgTaUt`:** behandle **alle spesialtilfeller** (tom liste, første, siste,
  «midten»). Krav om **`while`-løkke** som terminerer når objektet er funnet *eller* listen er
  tom. Returner referansen som tas ut, `null` hvis ikke funnet. `finnOgTaUt` bør kalle `taUt`.
- **`erMed`:** traverser og sammenlign `id` med `.equals(...)`.
- **`leggTilForan(a, b)`** (dobbeltlenket, V2023): sett `b` inn foran `a`; spesialbehandle at
  `a` er første element.

### D. Iterator (fast del av O3, 7–15 p)
- **Krav:** beholderen `implements Iterable<T>`, har `Iterator<T> iterator()` som returnerer et
  nytt iterator-objekt, og en **indre klasse** `implements Iterator<T>` med korrekt `hasNext()`
  og `next()`. Standardmønster: felt `denne = første`; `hasNext()` → `denne != null`;
  `next()` → lagre `denne`, flytt `denne = denne.neste`, returner det lagrede.
- **Filtrerende iterator (V2023-konte):** iterér bare over objekter med en gitt egenskap
  (f.eks. lederbiler); konstruktøren spoler frem til første treff, `next()` kaster
  `NoSuchElementException` når det er tomt.

### E. Array-uttrekk med `instanceof` + cast (O3, 7–8 p)
- **Krav:** metode som returnerer `PassasjerFly[]` / `Passasjervogn[]` / `EkteSeilfly[]`.
  **Tell forekomster først** (via iteratoren), alloker array av riktig lengde, gå gjennom på
  nytt og fyll med `instanceof`-sjekk + typekonvertering.

### F. Unntak + aggregering (O4, 16–22 p)
- **Egendefinert unntak** som subklasse av `Exception` eller `RuntimeException` (ofte med
  `String`-parameter for å skille tilfeller).
- **Iterativ metode** (`sjekkSporvidde`, `leggTilSikker`) som løper gjennom listen og kaster
  ved avvik; spesialbehandle tom liste (anta første element «normalt»).
- **Aggregeringer:** `totalVekt`/`besteGlidetall` via iterator; `maksVekt`/`størstSpennvidde`
  **rekursivt**. Spesialbehandle tom liste (returner 0 eller `null`). **Rekursiv hjelpemetode
  i domeneobjektet er tillatt og forventet.** Histogram-varianten (`histogramSpennvidde`) fyller
  en array indeksert på verdien.

### G. Rekursjon (O4d eller egen oppgave)
- **Krav:** rekursiv metode **i domeneobjektet** med basissteg (`neste == null`) + rekursivt
  steg (`neste.metode(...)`), startet fra beholderen. Sensor godtar mange varianter (sammenlign
  to-og-to, eller send verdi som parameter) så lenge basis + rekursjon er korrekt.
- **Tre-/graf-rekursjon (eldre):** `finnEldsteKjenteOpphav()` (traversér slektstre, V2019),
  `finnesVeiTil()` (unngå rundturer i graf, V2021) — rekursjon på flere naboer.

### H. Tråder + monitor (O5, 20–36 p)
- **To trådklasser** `implements Runnable` (produsent/konsument: Leter/Resultat,
  Pilot/Flygeleder, Plassjef/SlepePilot) + én **monitor**.
- **Bruk `ReentrantLock` + `Condition` — IKKE `synchronized`** (eksplisitt i V2023/V2024).
  `lock()` først i hver metode, `unlock()` i `finally`.
- **`await()` i en `while`-løkke** (ikke `if`) som tester betingelsen; `signal()`/`signalAll()`
  i metodene som endrer tilstand. `await()` fanges i `try/catch (InterruptedException)`.
- Monitoren holder en teller eller en beholder (`ArrayList`/kø) av ventende/funne objekter.
  Konsumenten returnerer neste element eller `null` når jobben er ferdig.
- **Toveis-synkronisering (V2024 O5d):** to `Condition`-variabler — flygeleder venter på én,
  piloter signalerer den og venter selv på den andre.
- **(Hjemmeeksamen)** enklere monitor kan bruke `synchronized`; trådoppstart ventes med
  `join()` eller `CountDownLatch`.

### I. (Hjemme-/eldre) Datastruktur-tegning
- **Krav:** tegn *objekter* (ikke klasser) med instansvariabler og referansepiler som starter
  inne i variabelen og ender ved objektkanten. Vis array + lenket liste, tom-etasje =
  `null`-verdier. Minst ett objekt har interface-egenskapen.

### J. (Hjemme-/eldre) GUI + hendelseshåndtering
- **Krav:** opprett `JFrame` + knapper/tekstfelt; en klasse `implements ActionListener` med
  `actionPerformed(...)` som leser felt (`getText()`) og oppdaterer datastrukturen. Vindu
  opprettes kun første gang; kommuniser svar tilbake til hovedtråden (hint gitt:
  `Thread.sleep(...)` + `interrupt()`).

### K. (Konte/eldre) Generisk klasse
- **Krav:** `class KolonneG<T extends Bil>` med første-/siste-peker av typen `T`, `settInn(T)`,
  `taUtSiste()` returnerer `T`. Typekonvertering nødvendig når `neste`/`forrige` i basisklassen
  er av supertypen. Brukes deretter i en `main` (V2023-konte O9).

---

## 4. Sensorens krav

Destillert fra de offisielle sensorveiledningene V2020–V2024 (inkl. konte). Poenggivningen er
eksplisitt tallfestet per deloppgave.

### Metaregler (gjentas i innledningen hvert år)
1. **Skriv bare det oppgaven ber om.** «Svar ut over det du blir bedt om å gjøre, teller ikke
   med» — og kan trekke hvis det vitner om misforståelse. Ikke skriv `main`/oppstart av tråder
   når bare klassene etterspørres.
2. **Import, kommentarer og aksessmodifikatorer (`public`/`private`/`protected`) vektlegges
   ikke.** Felt gjerne uten modifikator (package-private), som i UiOs egne løsningsforslag.
   Norske bokstaver (æ, ø, å) i kode er greit.
3. **Rimelige antagelser tillates** ved underspesifikasjon — men skriv dem ned i besvarelsen.
4. **Kode må gi mening / kompilere (hjemmeeksamen):** «Programmer som ikke kompilerer og kjører
   gir ikke særlig uttelling» (V2020). På hjemmeeksamen ble bestått knyttet til at
   nøkkeloppgaven (interface + én implementasjon) fungerte.

### Poenggivning (eksplisitt tallfestet)
Sensorveiledningene deler poengene per deloppgave og angir hva som gir uttelling. Eksempel
V2024: O2 = 7 p hierarki + 8 p konstruktører; O3 splittet 1+3+2+6+8+8; O5 = 10+7+7+12.
Hjemmeeksamen-veiledninger (V2020) bruker en trekk-tabell (0–10 % ≈ A, 10–20 % ≈ B, …).

**Konkrete uttellingssignaler:**
- **Riktig idé/struktur belønnes selv med småfeil.** «Rimelig riktig tenkning» gir god score;
  alle korrekte rekursive varianter gir full uttelling.
- **Deloppgaver kan løses uavhengig.** Man kan bruke iteratoren fra O3 i O4 selv om O3 ikke ble
  løst, «siden du vet hva den skal gjøre».
- **Alternative løsninger sidestilles.** Løsningsforslaget er «bare ett eksempel på en enkel og
  kompakt besvarelse som ville fått full score».

### Stilkrav (fasitens faktiske kodestil)
- Java, **kompakt og idiomatisk**, felt ofte uten aksessmodifikator, `final` på konstanter.
- **Ingen `Node`-klasse** på moderne skoleeksamen — lenker bor i domeneobjektet. *(Motsatt der
  oppgaven eksplisitt ber om en Node-liste.)*
- `@Override` på `hasNext`/`next`/`compareTo`/`toString`/`trekkraft`.
- Indre iterator-klasse inne i beholderen; felt `Fly denne = førsteFly;`.
- Monitor: `Lock låsen = new ReentrantLock();`, `Condition ... = låsen.newCondition();`,
  `lock()`/`unlock()` i `try/finally`, `await()` i `while`.

### Hva som ignoreres vs. trekker
- **Ignoreres:** manglende enkelt `;`/`}`/`{` når koden ellers gir mening; småfeil i
  gjenkjennbare navn; blanding av metodenavn mellom beholdere; manglende import/kommentar/
  aksessmodifikator.
- **Trekker:** innlimt kode som ikke passer/ikke svarer på oppgaven; bruk av en beholder på en
  måte som viser manglende forståelse; gjennomgående feil/mangler; `Node`-objekter der listen
  skal lenkes via domeneobjektet.

---

## 5. Typiske feil

Utledet av sensorveiledningenes «gir ikke uttelling»-formuleringer og løsningskommentarer.

1. **Bruke `Node`-objekter** i den egendefinerte listen der lenkene skal bo i domeneobjektet
   (moderne skoleeksamen) — eller motsatt, glemme Node-klassen der den eksplisitt kreves.
2. **Traversere listen i `leggTil`** i stedet for å bruke første-/siste-pekeren direkte.
3. **Glemme spesialtilfeller i `taUt`** — tom liste, første element, siste element, ett element.
4. **`await()` i `if` i stedet for `while`** — spuriøs oppvekking testes ikke på nytt.
5. **Bruke `synchronized` i stedet for `ReentrantLock`/`Condition`** der oppgaven forbyr det.
6. **Låse uten `try/finally`** — `unlock()` nås ikke ved unntak.
7. **Glemme `super(...)`** i konstruktøren, eller feil rekkefølge på parametrene.
8. **Opprette array før man har talt elementene** i `instanceof`-uttrekket.
9. **Glemme `null`-retur** når et element ikke finnes (`taUt`, `finnRom`, `nesteSeilfly`).
10. **Manglende basissteg / feil rekursjonsbunn** i den rekursive metoden (uendelig rekursjon
    eller `NullPointerException` på tom liste).
11. **Iterator som returnerer feil type** — f.eks. returnere node-objektet i stedet for
    domeneobjektet (`next()` skal returnere `Sted`, ikke `StedNode`).
12. **Interface uten `implements`-pil / hierarki uten `abstract`** i tegneoppgaven.
13. **Innlimt generisk listekode** som ikke er tilpasset domenet — «bærer preg av å være hentet
    fra andre programmer» → ingen uttelling.
14. **Skrive mer enn oppgaven ber om** (fullt program, `main`, ekstra I/O) — teller ikke, kan
    trekke.
15. **(Generisk klasse)** glemme typekonvertering når basisklassens `neste`/`forrige` er av
    supertypen mens listepekerne er av `T`.

---

## 6. API-/konstruksjonsapparat

Java-konstruksjonene studenten må beherske aktivt (skrive fra bunnen, uten oppslag).

### 1. Klasser, arv, interface (kjerne)
- `abstract class`, `abstract`-metode, `class Sub extends Super`, `interface I { int m(); }`,
  `class C implements I`.
- Konstruktør med `super(...)`; instansvariabler; `final`-konstanter; `this`.
- `@Override`; polymorfi (kall via supertype-referanse); dynamisk metodeoppslag.
- `instanceof` + typekonvertering `(PassasjerFly) f`.

### 2. Egendefinerte lenkede strukturer
- **Domeneobjekt-idiom (moderne):** `neste`/`forrige`-felt *i* domeneklassen; første-/siste-peker
  i beholderen; traversering med `while (p != null) p = p.neste;`.
- **Node-idiom (eldre/konte):** indre `class Node { T data; Node neste; }`; vaktposter
  (listehode/listehale); array av lister (hashing på nøkkel); hashtabell med moduloindeks + kollisjonsliste.
- Innsetting først/sist/ordnet; uttak med håndtering av alle grensetilfeller.

### 3. Iterator-apparatet
- `import java.util.Iterator;` (+ `NoSuchElementException`).
- `implements Iterable<T>`, `Iterator<T> iterator()`, indre `implements Iterator<T>` med
  `hasNext()`/`next()`. For-each (`for (Fly f : formasjon)`) fungerer da automatisk.

### 4. Unntak
- Egendefinert `class FeilSporvidde extends Exception` (eller `RuntimeException`).
- `throw new ...(...)`, `throws`, `try/catch`, parametrisert unntak (`String`-melding) for å
  skille tilfeller.

### 5. Rekursjon
- Rekursiv metode i domeneobjektet: basissteg + `neste.metode(...)`; starter i beholderen.
- Rekursjon på tre/graf (flere naboer, «forrige»-parameter for å unngå tilbakegang).

### 6. Tråder og synkronisering
- `implements Runnable` + `run()`; (evt. `extends Thread`).
- `import java.util.concurrent.locks.{Lock, ReentrantLock, Condition};`
- `Lock l = new ReentrantLock(); Condition c = l.newCondition();`
- `l.lock()` … `try { … c.await(); … c.signal()/signalAll(); } finally { l.unlock(); }`.
- `Thread.sleep(ms)`; `Thread.currentThread()`, `interrupt()`; `join()`; `CountDownLatch`.
- (Enklere) `synchronized` metoder/blokker på hjemmeeksamen.

### 7. Generics
- `class Beholder<T extends Base>`; typeparameter på felt, metodeparametre og returtype;
  typekonvertering ved miks med supertype-pekere.

### 8. `Comparable` + spesialmetoder
- `implements Comparable<T>`, `compareTo(T)` (returner differansen felt for felt).
- `toString()` polymorft med `super.toString()`; `String.format(...)`.

### 9. Standardsamlinger (der oppgaven tillater)
- `ArrayList<T>` (monitor-beholder, kø), `HashMap<K,V>` (register på navn), `equals()`.

### 10. Swing-GUI (hjemme-/eldre)
- `import java.awt.*; import javax.swing.*;` — `JFrame`, `JButton`, `JLabel`, `JTextField`
  (`getText()`), `JTextArea`; `implements ActionListener` + `actionPerformed(ActionEvent)`;
  `addActionListener(...)`.
- `Scanner` (`new Scanner(System.in)`) for tastaturdialog.

### Skal ikke prioriteres på (moderne) skoleeksamen
- Full GUI, `HashMap`/hashtabell-fra-bunnen og tunge generics er hovedsakelig hjemme-/konte-/
  eldre-stoff. Boka bør ha dem, men merke dem som «utvidet / for konte og midtveis».

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (avgjør karakteren, ~75 % av poengene på skoleeksamen)
1. **Klassehierarki: tegne (O1) + programmere (O2)** — abstrakt superklasse, abstrakt
   mellomklasse, ett interface, konstruktører med `super()`, `final`-felt. ~100 %.
2. **Egendefinert lenket liste (O3)** — leggTil/taUt/finnOgTaUt/erMed uten Node-objekter, alle
   spesialtilfeller, `while`-terminering. Tyngste blokk. ~100 %.
3. **Iterator** — `Iterable<T>` + indre `Iterator<T>`-klasse, helt korrekt. ~90 %.
4. **Tråder + monitor** — to `Runnable`-klasser + monitor med `ReentrantLock`/`Condition`,
   `await()` i `while`, `signal()` ved tilstandsendring, toveis-synk. ~85 %.
5. **Unntak + aggregering (O4)** — egendefinert unntak, iterativ sjekk, rekursiv aggregering,
   tom-liste-håndtering. ~80 %.

### Nivå 2 — må kunne (differensierer)
6. **Array-uttrekk med `instanceof` + cast** (tell → alloker → fyll). ~70 %.
7. **Rekursjon i domeneobjektet** (maks/min/histogram; tre-/graf-traversering i eldre sett).
8. **Datastruktur-tegning** (objekter + referansepiler).
9. **`Comparable`/`compareTo` + sortert innsetting**; **`toString()` polymorft**.

### Nivå 3 — bør kjenne til (topp/konte/midtveis/hjemmeeksamen)
10. **Generiske klasser** (`K<T extends Base>`) — konte og eldre sett.
11. **Swing-GUI + `ActionListener`** — hjemme-/eldre sett.
12. **`HashMap`/`ArrayList`**, barriere (`CountDownLatch`/`join`), hashtabell/array-av-lister
    fra bunnen, `synchronized`-monitor.

### Prognose for neste eksamen

**Avsluttende skoleeksamen (75 %, 4 t):** Svært sannsynlig samme faste 5-oppgave-struktur med
et nytt domene: **O1** tegn hierarki (abstrakt superklasse + interface, 5 p) → **O2** programmér
klassene + interface med `super()` (15 p) → **O3** egendefinert enkelt- *eller* dobbeltlenket
liste over domeneobjektene med leggTil/taUt/erMed, iterator og `instanceof`-array-uttrekk
(~28–40 p) → **O4** egendefinert unntak + iterativ *og* rekursiv aggregering (~16–20 p) →
**O5** to `Runnable`-trådklasser + monitor med `ReentrantLock`/`Condition`, gjerne toveis-synk
(~20–36 p). Domenet (fly, tog, bil, hotell, skog …) roterer; OO-øvelsen er den samme.

**Midtveiseksamen (25 %, 2 t):** ikke i arkivet, men tester etter emnebeskrivelsen tidlig-
pensum: Java-grunnleggende, klasser/objekter, arv, interface, abstrakte klasser, enkle lenkede
lister/iterator, evt. generics. Boka bør ha et lettere «midtveis-spor» over kapittel 1–?.

**Konsekvens for boka:** Bygg kjernen rundt de fem Nivå-1-temaene med fullt gjennomarbeidede
maler i sensors korte, idiomatiske stil. Vis **begge** liste-idiomene (domeneobjekt vs. Node)
og vær eksplisitt på når hvert kreves. Ha ett komplett «gjennomgående case» som løses O1→O5
(slik skoleeksamen gjør), pluss egne kapitler for det utvidede apparatet (generics, GUI,
samlinger, hashtabell) merket for konte/midtveis/hjemmeeksamen. Hver mal bør pare en
domeneinnpakning med det underliggende kodemønsteret, slik at studenten gjenkjenner mønsteret
uansett innpakning.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/UiO/IN1010/`
(`eksamen/` og `losningsforslag/`). Arkivet dekker V2015–V2024, avsluttende + konte, med
tilhørende offisielle løsningsforslag/sensorveiledninger — 25 PDF-filer.

**Sensorveiledninger/løsningsforslag lest grundig:**
- `IN1010-V2024-sensorveiledning.pdf` + `IN1010-V2024-losningsforslag.pdf` («Fly» — mal for
  moderne skoleeksamen; komplett kodestil verifisert).
- `IN1010-V2024-konte-sensorveiledning.pdf` («Seilfly» — konte-varianten).
- `IN1010-V2023-sensorveiledning.pdf` + `IN1010-V2023-losningsforslag.pdf` («Tog» —
  dobbeltlenket liste).
- `IN1010-V2023-konte-sensorveiledning.pdf` («Selvkjørende biler» — generisk klasse,
  `NoSuchElementException`, filtrerende iterator).
- `IN1010-V2022-del1-sensorveiledning.pdf` («Bilkollektiv» — GUI/Dialog/toString/sortering) +
  `IN1010-V2022-del2-sensorveiledning.pdf` («Hotell» — etasjer/iterator/CountDownLatch).
- `IN1010-V2022-konte-sensorveiledning.pdf` («Støymåling» — Node-liste, HashMap+ArrayList,
  invariant, JTextField-GUI).
- `IN1010-V2021-sensorveiledning.pdf` («Skog/simulator» — Aktivitet/PrioKo-rammeverk,
  tråder, graf-rekursjon).
- `IN1010-V2020-sensorveiledning.pdf` («Spill» — hjemmeeksamen, bestått/ikke-bestått,
  trekk-tabell, GUI/tråder).
- `IN1010-V2019-losningsforslag.pdf` («Hund/Kull» — `Comparable`, rekursjon på slektstre,
  `KullArray`).
- `IN1010-V2018-losningsforslag.pdf` («Flyreservasjon» — `Prioritetsko<T>` med Node, tråder).

**Oppgavesett/løsninger skumlest for form- og temaregistrering:**
- `IN1010-V2015(+vedlegg)`, `IN1010-V2016` (INF1010-æraen: generisk `LenkeListe<T>`, Node/
  vaktposter, `compareTo`, papireksamen med lærebok).
- `IN1010-V2017` (Sykehus — designtungt system, 11 tråder).
- `IN1010-V2019-konte` (Skipsinnredning — multi-interface, ring-array prioritetskø).
- `IN1010-V2021`, `IN1010-V2021-konte` (Reisebyrå — hashtabell fra bunnen, GUI, parallell søk).

**Fagbeskrivelse:** omskrevet sammendrag av UiOs emnebeskrivelse for IN1010
(scratchpad: `fagbeskrivelse-in1010.md`), inkl. destillert «hva testes faktisk»-seksjon.

**Merknader om kildene:**
- **Navneskifte:** emnet het **INF1010** t.o.m. ~2016 og **IN1010** fra 2017; 2015–2019-settene
  bærer begge navn i toppteksten. Faglig kjerne er kontinuerlig.
- **Formskifte:** papir m/lærebok (2015–2016) → digital designeksamen (2017–2019) →
  korona-hjemmeeksamen (2020–2022) → moden 4-timers digital skoleeksamen med fast
  5-oppgave-struktur (2023–2024). Frekvensanalysen vekter de nyere settene tyngst.
- **Kodestil-drift:** de eldre settene og konte bruker eksplisitte `Node`-objekter og generics;
  moderne skoleeksamen krever at listen lenkes via domeneobjektets egne
  `neste`/`forrige`-variabler. Boka må lære begge og skille dem tydelig.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er
  parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasiter er gjengitt
  ordrett; kodemønstrene er standard Java-idiomer.
