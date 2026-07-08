# Eksamensanalyse: TDT4102 Prosedyre- og objektorientert programmering (C++) — NTNU

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på NTNU-arkivet i mappa
> `~/Desktop/Eksamner/NTNU/TDT4102/`, som inneholder **3 distinkte eksamenssett**:
> 2015 **ordinær** (fullt løsningsforslag, bokmål + engelsk), 2015 **kontinuasjon**
> (fullt løsningsforslag, bokmål), og ett udatert **ordinært** sett uten
> løsningsforslag (`NTNU_TDT4102.pdf` — trolig 2016/2017; refererer XCode og bruker
> `using`-typealias). Faglig kontakt på alle: **Trond Aalberg (IDI)**.
>
> **Ærlig om evidensstyrke:** Dette er et *lite* arkiv (3 sett, 2 med fasit) mot
> TDT4100s 23 løsningsforslag. Frekvenstallene under er derfor **indikative, ikke
> statistisk robuste** — «3/3» betyr «på alle tre settene vi har», ikke en trend
> over ti år. Der et mønster hviler på ett enkelt sett, er det markert. Alle tre
> settene er lest **grundig** (begge fasitene i sin helhet, inkludert
> sensorkommentarer). **Alt innhold er omskrevet med egne ord** — ingen ordrette
> gjengivelser av oppgavetekst eller fasit. Kodemønstrene er standard C++-idiomer,
> ikke opphavsrettsbeskyttet tekst.
>
> **TDT4102 vs. TDT4100 (søsteremnene ved NTNU).** Begge er «objektorientert
> programmering» ved IDI, men i **ulike språk med motsatt tyngdepunkt**. TDT4100 er
> **Java + designkunst**: innkapsling/synlighet, grensesnitt, `Comparable`/sortering,
> **designmønstre** (observatør-observert, delegering), enhetstesting og
> **UML-/objektdiagrammer** — med mye forklarende tekst, og **null manuell
> minnehåndtering** (Java har søppelsamler). TDT4102 er **C++ + maskinnær
> korrekthet**: **manuell minnehåndtering** (`new`/`delete`, destruktører,
> minnelekkasjer), **pekere og referanser**, **operatoroverlasting**,
> **kopisemantikk** (deep vs. shallow copy, kopikonstruktør, tilordningsoperator,
> `copy-swap`, referansetelling) og **const-korrekthet**. Der TDT4100 spør «tegn
> objektdiagrammet» og «hvilken designteknikk passer?», spør TDT4102 «hva skrives ut
> av denne pekerkoden?», «hvorfor må destruktøren være `virtual`?» og «implementer
> deep copy». **Manuell minnehåndtering finnes i hvert eneste TDT4102-sett og er helt
> fraværende i TDT4100** — det er den definerende forskjellen. Se egen seksjon 8.

---

## 1. Eksamensform og utvikling

### Form i arkivperioden (2015–~2017)

**Skriftlig skoleeksamen på papir, 4 timer, 100 % av karakteren**, karakterskala
A–F. Hjelpemiddelkode **C**: spesifiserte trykte/håndskrevne hjelpemidler +
**enkel kalkulator**. Oppgitt lærebok tillatt: **Walter Savitch, *Absolute C++***
eller **Loudon, *C++ Pocket Reference***. Obligatoriske øvinger må være godkjent for
å gå opp. 7,5 studiepoeng, undervises i vårsemesteret.

**Eksamen er hybrid kodeskriving + kodesporing + kort teori.** En typisk oppgave
kombinerer tre–fire sjangre (utdypet i seksjon 3):

1. **Skriv C++-kode** — implementer medlemsfunksjoner, operatorer, konstruktører,
   destruktører eller frittstående funksjoner. **Hoveddelen** av hvert sett.
2. **«Hva skrives ut?» / kodesporing** — les og evaluer kort kode (heltallsdivisjon,
   pre-/postinkrement, pekere, rekursjon). Egen deloppgave på 2 av 3 sett.
3. **«Finn feilen» / feilsøking** — dinglende peker, `=!` vs. `!=`, manglende
   `virtual`-destruktor, objektavskjæring (slicing).
4. **Forklar / begrunn i tekst** — hva `const` betyr på tre posisjoner, hva `&`
   betyr, hvorfor `protected`/`virtual`/`friend`, deep vs. shallow copy.

Det er **ingen flervalgsdel** og ingen diagramtegning (i motsetning til TDT4100).
Sensor er eksplisitt pragmatisk om syntaks: *«Det er ikke viktig å huske helt
korrekt syntaks for bibliotekfunksjoner»* og *«korrekthet i boolsk sammenligning er
litt underordnet fordi dette debugger du»* — teknikk og forståelse veier tyngre enn
plettfri syntaks.

### Oppgavestruktur (stabil på de tre settene)

Hvert sett er **3–4 hoveddeler à 10–45 %**, hver bygd rundt **ett gjennomgående
domenecase** løst stegvis gjennom mange deloppgaver (a, b, c …). Domenet roterer,
men den faglige stigen er påfallende lik:

| Del | Rolle | Typisk vekt | På settene |
|---|---|---|---|
| **Én klasse/operatorer** | Implementer en hel klasse med medlemsfunksjoner + operatoroverlasting (Rational) | 20–45 % | 2015-ord, (2016/17) |
| **Prosedyre/funksjoner** | Frittstående funksjoner + kodesporing (fire-på-rad, streng-/tabellfunksjoner) | 35–40 % | 2015-kont, (2016/17) |
| **Datastruktur m/ pekere** | Egendefinert lenket liste / 2D-tabell med `new`/`delete` (Snake, DynamicMultiArray) | 40–45 % | 2015-ord, 2015-kont |
| **Minnehåndtering** | Deep vs. shallow copy, kopikonstruktør/tilordning, referansetelling, `virtual`-destruktor | **10–25 %, nesten alltid egen sluttdel** | alle 3 |
| **Arv** | Subklasser, `virtual`, `protected`, slicing (Creature/Demon/Balrog) | 20 % | (2016/17), delvis 2015-ord |

**Domenene:** rasjonale tall (`Rational`, 2015-ord), Snake-spillet (2015-ord),
dobbelt-lenket liste av dynamiske tabeller (`DynamicMultiArray`, 2015-kont),
fire-på-rad på 2D-brett (2016/17), og et kampspill med skapninger (`Creature`,
2016/17). **Minnehåndtering er nesten alltid den siste, tyngre delen** — det er
fagets signatur.

### Historisk utvikling og dagens form

Arkivet dokumenterer den **papirbaserte æraen (t.o.m. ~2017)** med håndskrevne
C++-svar og lærebok tillatt. **Fagbeskrivelsen for studieåret 2026/2027** angir
fortsatt 4-timers skriftlig skoleeksamen, men med **hjelpemiddelkode G** (ikke C) —
et hint om at hjelpemiddelregimet er strammet noe. Emnebeskrivelsen legger nå
eksplisitt til **enkle grafiske brukergrensesnitt**, **feilsøking/testing** og
**moderne utviklingsverktøy inkl. AI-baserte hjelpemidler**. Søsteremnet TDT4100 la
i samme periode om til **kode-i-IDE-eksamen**; det er sannsynlig, men **ikke verifisert
fra dette arkivet**, at TDT4102 har fulgt en tilsvarende linje. **Kjernen —
minnehåndtering, pekere, klasser, operatorer, arv, unntak, STL — er faglig
kontinuerlig** uansett leveringsform.

**Konsekvens for boka:** Bygg kjernen på arkivets hybride form (implementering +
kodesporing + kort begrunnelse), med **manuell minnehåndtering som ryggrad**. Hold
et lettere «moderne spor» for enkel GUI/testing som emnebeskrivelsen nevner, men ikke
prioriter det foran minne/pekere/kopisemantikk.

---

## 2. Temafrekvens

Score = antall av de **3 distinkte settene** der temaet er en egen oppgave eller
tydelig deloppgave. **Lite arkiv → les tallene som «hvor gjennomgående», ikke som
presis sannsynlighet.** Der belegget er tynt (1 sett), er det sagt eksplisitt.

| Tema | Score | Kommentar |
|---|---|---|
| **Dynamisk minne** (`new`/`delete`/`delete[]`, minnelekkasje, dinglende peker) | **3/3** | Fagets kjerne. Egen minnedel på alle sett + gjennomsyrer datastruktur-delene. |
| **Klasser** (medlemsfunksjoner, konstruktør m/ **initialiseringsliste**, innkapsling) | **3/3** | Konstruktør med initialiseringsliste eksplisitt krevd på flere deloppgaver. |
| **Pekere & referanser** (`*`, `&`, peker-til-peker `**`, `nullptr`) | **3/3** | Peker-til-peker (`RowNode**`, `int**`) i to av tre sett. |
| **Destruktør** (`~Klasse`, frigi `new`-et minne, `virtual`-destruktor) | **3/3** | «Hvorfor blir ikke subklassens destruktør kalt?» → mangler `virtual`. |
| **Operatoroverlasting** (`<`, `==`, `++` postfiks, `*=`, `<<`, `[]`) | **3/3** | `operator<<` for `ostream`, aritmetiske operatorer, `operator[]` med `int&`. |
| **Funksjoner / parameteroverføring** (verdi/referanse/peker, `call-by-reference`) | **3/3** | «Hvilke operatorer MÅ ha call-by-reference?» er eget spørsmål. |
| **Unntak** (`try`/`catch`/`throw`, `invalid_argument`, `bad_alloc`, videresending) | **3/3** | Validering kaster unntak; rethrow (`throw;`) i minnedel. |
| **Kopisemantikk** (kopikonstruktør, tilordningsoperator, **deep vs. shallow copy**, `copy-swap`, referansetelling) | **~3/3** | Egen hovedoppgave på 2015-kont og 2016/17; teorispørsmål på 2015-ord. Fagets vanskeligste tema. |
| **Templates** (`template <typename T>`, «gjør klassen generisk») | **3/3** | Gjennomgående **avslutnings-deloppgave** («gjør om til template»). Alltid liten, men alltid der. |
| **Arv & virtuelle funksjoner** (`: public Base`, `virtual`, `protected`, slicing) | **2/3 tungt** | Full arvedel i 2016/17 (Creature); `virtual`-destruktor + subklasse i 2015-ord. |
| **STL-containere** (`vector`, `list`, `deque`, `map`, valg + ytelse) | **2/3** | «Hvorfor er `vector` dårlig her? Bruk `list`/`deque`.» + `map` for ordtelling. |
| **Iteratorer & range-based for** (`begin()`/`end()`, `for (auto& x : c)`) | **2/3** | `it->`, `front()`, `for (Rectangle& s : snake)`. |
| **`const`-korrekthet** (const retur, const parameter, const medlemsfunksjon) | **2/3** | «Forklar `const` på tre posisjoner» er eget spørsmål. |
| **Kodesporing** («hva skrives ut?») | **2/3** | Heltallsdivisjon, `%`, pre-/postinkrement, casting, peker-`swap`, rekursjon. |
| **Filbehandling / strømmer** (`ifstream`, `>>`, lese ord/linjer) | **2/3** | Ordstatistikk fra fil; lese skapninger fra fil. |
| **2D-tabeller** (C-array `T[R][C]`, `using`-typealias, indeksering) | **2/3** | Fire-på-rad-brett; dynamisk 2D via `double**`. |
| **Casting** (`static_cast<double>`, C-stil) | **2/3** | Flyttallsdivisjon — klassisk felle mot heltallsdivisjon. |
| **`enum`** (`enum Tile {…}`, `enum Direction {…}`) | **2/3** | Tilstandsverdier i brett/retning. |
| **`rand()` / tilfeldighet** (`rand() % n`, `srand`) | **2/3** | Plassere biter/velge trekk. |
| **Strengbehandling** (`string`, `isalpha`, `tolower`, `sort` på tegn) | **1/3** | Anagram/palindrom (2015-kont). Tynt belegg, men typisk øvingsstoff. |
| **`static` medlem/funksjon** (`static`-metode kallbar uten instans) | **1/3** | `Rational::gcd(8,10)` → public + static. Tynt belegg. |
| **`friend`** (`friend class`, tilgang til private) | **1/3** | `friend class DynamicMultiArray`. Tynt belegg. |
| **Rekursjon** (`gcd` euklid, sifferutskrift) | **2/3** | Gitt/brukt heller enn krevd fra bunnen. |

**Kontrollflyt og grunnleggende syntaks** (løkker, `if/else`, `switch`, `bool`,
operatorer) er implisitt til stede overalt og forutsettes kunnet — sjelden testet
alene, unntatt i kodesporingsoppgavene.

---

## 3. Oppgavesjangre

1. **Implementer medlemsfunksjon/operator/konstruktør/destruktør** (dominant). Full,
   kjørbar C++ med signatur + kropp. F.eks. `Rational::reduce()`, `operator*=`,
   `RowNode::~RowNode()`.
2. **Implementer frittstående funksjon** (prosedyre-halvdelen av faget). F.eks.
   `mean`, `median`, `round`, `isAnagram`, `isPalindrome`, `countTiles`,
   `findLowestPlace`. Ofte kjedet: én funksjon brukes i neste deloppgave.
3. **«Hva skrives ut?» — kodesporing.** Kort kodesnutt evalueres for hånd; typiske
   fallgruver bygd inn (heltallsdivisjon `4/9 == 0`, `++g` vs. `g++`, `swap(i,j)`
   av pekere vs. `swap(*k,*l)` av verdier, rekursiv sifferutskrift).
4. **«Finn feilen / hva er galt».** Debugging-refleks: retur av peker til lokal
   `automatisk` tabell (dingler), `if (x =! y)` (tilordning + unær minus, ikke
   ulikhet), manglende `virtual`-destruktor, `duel(Creature c1, Creature c2)` som
   avskjærer (slicing) fordi den tar objektene by value.
5. **Forklar/begrunn i tekst (kort teori).** «Hva betyr `const` her?», «hva
   spesifiserer `&`?», «hvorfor `protected`/`virtual`?», «hva gjør `friend`?»,
   «trengs kopikonstruktør her?», «forklar hvordan `copy-swap` tar seg av alt».
6. **«Gjør om til template.»** Fast liten avslutnings-deloppgave: vis klasse-
   deklarasjonen som `template <typename T>` og reflekter over en fallgruve.
7. **Friere design/utvidelse.** Lag en subklasse (`MovingRectangle : public
   Rectangle`), skriv `main`/spilløkka, bestem selv filformat og les inn.

Merk sensors instruks: *«implementer/lag»* = full fungerende implementasjon;
*«deklarer»* = kun deklarasjonen (header-nivå); *«vis/forklar»* = kort kode
og/eller tekst. Boka bør speile disse tre svarnivåene i oppgaveformuleringene.

---

## 4. Sensorkrav (hva som gir uttelling)

Hentet direkte fra fasitkommentarene på 2015-settene:

- **Initialiseringsliste** forventes der oppgaven ber om det, men er ikke *påkrevd*:
  «da må du sette verdiene før du kaller `reduce()`». Vis begge veier i boka.
- **Flyttallsdivisjon krever `static_cast`** (eller at én operand er `double`) —
  eksplisitt vektlagt. `int/int` er *den* klassiske fellen.
- **Postfiks `++` skal returnere verdien FØR inkrementering** via en `temp`-kopi;
  `int`-dummyparameteren er «mindre viktig på eksamen».
- **`operator*=` skal kalle `reduce()` og returnere `*this`**, og `operator*` bør
  **gjenbruke** `*=`. Sjekkliste fra sensor: `reduce()`, `return *this`, enkel
  implementasjon, gjenbruk.
- **Begrunn når kopikonstruktør/tilordning IKKE trengs:** ingen dynamisk minne →
  standard medlemsvis kopiering holder. Å kunne *avgjøre* dette gir poeng.
- **Containervalg skal begrunnes:** `vector` er dårlig når man legger til/fjerner i
  endene (kopieringskostnad) → `list`/`deque`. Ytelsesargumentet er poenget, ikke
  bare det riktige svaret.
- **`const` på tre posisjoner** (const retur / const parameter / const
  medlemsfunksjon som ikke endrer medlemmer) og **`&` på to** (return-by-reference /
  call-by-reference) skal forklares *presist og kort*.
- **`virtual`-destruktor:** hvis basisklassens destruktør ikke er `virtual`, kalles
  ikke subklassens destruktør gjennom en basispeker → minnelekkasje. Sensor spør
  eksplisitt om årsaken.
- **Objektavskjæring (slicing):** `void duel(Creature, Creature)` by value gjør at
  alle subtyper «oppfører seg likt» → må ta `Creature&`/peker. Ren C++-felle.
- **Deep vs. shallow copy:** deep = eget minne, uavhengige kopier; shallow =
  referansetelling (`use`-teller opp/ned, frigi når 0), peker-til-peker for delt
  `first`/`last`. **`copy-swap`-idiomet** (ta argument by value, `swap` medlemmene,
  `return *this`) roses fordi det håndterer selvtilordning og unntakssikkerhet.
- **Kompakte egne løsninger belønnes over avskrift:** *«De som kun skrev av boka
  kastet bort mye tid og fikk mindre score enn de som laget en egen og mer kompakt
  løsning.»* Tid brukt på å bla i boka er tid tapt.
- **Pragmatisk syntaks-toleranse:** biblioteksignaturer trenger ikke huskes
  eksakt; `include`/navnerom/filoppdeling er ikke tema. Fokus på teknikk.

---

## 5. Typiske feil (bygg drill rundt disse)

1. **Heltallsdivisjon der man vil ha flyttall** — `n/d` uten cast; `sum/size` uten
   `double`.
2. **Retur av peker/referanse til lokal variabel** — `char alphabet[length]; return
   alphabet;` dingler etter at funksjonen returnerer.
3. **Glemt `virtual`-destruktor** — subklassens destruktør kalles aldri via
   basispeker → lekkasje.
4. **Objektavskjæring** — polymorfi tapt fordi objekter sendes/lagres by value i
   stedet for referanse/peker.
5. **Minnelekkasje / dobbel-frigjøring** — glemt `delete[]` for radene før `delete`
   av radpeker-arrayet; delvis allokert minne ikke ryddet ved unntak i konstruktør.
6. **Feil postfiks-inkrement** — returnerer ny verdi i stedet for `temp` (gammel).
7. **`=` vs. `==` (og `=!` vs. `!=`)** — tilordning i betingelse; `x =! y` er
   `x = (!y)`, ikke ulikhet.
8. **Feil container** — `vector` der `list`/`deque` trengs for effektiv innsetting/
   fjerning i endene.
9. **Manglende `reduce()`/normalisering etter aritmetikk** — operatorer som endrer
   tilstand glemmer å forkorte/rydde.
10. **`static`/`friend` misforstått** — kaller medlemsfunksjon uten instans uten å
    gjøre den `static`; forventer privat tilgang uten `friend`.
11. **Shallow copy uten peker-til-peker** — delt liste der `first`/`last` må kunne
    endres av flere objekter krever `**`, ellers går delingen tapt.

---

## 6. API-/konstruksjonsapparat (hva boka må dekke konkret)

Kjerne-C++ og standardbibliotek som faktisk brukes i settene:

- **Språk:** `class`/`struct`, `private`/`public`/`protected`, initialiseringsliste
  `: felt(arg)`, `this`, `*this`, `nullptr`, `const` (3 posisjoner), `&`
  (referanse/return-/call-by-ref), `static`, `friend`, `virtual`, `enum`,
  `using`-typealias, `template <typename T>`, `static_cast`.
- **Minne:** `new`/`new[]`, `delete`/`delete[]`, peker-aritmetikk, peker-til-peker
  (`T**`), dynamiske 2D-tabeller, `bad_alloc`.
- **Operatorer å overlaste:** `<`, `==`, `++` (postfiks m/ dummy `int`), `+`, `+=`,
  `*`, `*=`, `[]` (retur `int&`), `<<` (`ostream& operator<<(ostream&, T)`).
- **STL:** `vector`, `list`, `deque` (og *hvorfor* velge hvilken), `map<K,V>`
  (`m[key]++`), `array`; iteratorer `begin()/end()`, `front()/back()`,
  `push_front/pop_back/push_back`, range-based for. Fasitene inkluderer en
  **oversiktstabell over sekvenscontainere** som vedlegg — verdt å gjenskape
  pedagogisk.
- **Algoritmer/hjelp:** `sort(begin,end)`, `swap`, `max`, `pow`.
- **Streng/tegn:** `string`, `+=`, `size()`, indeksering, `isalpha`, `tolower`.
- **Strømmer:** `ifstream`/`ofstream`, `cout`/`cin`, `>>`/`<<`, `endl`, `boolalpha`.
- **Unntak:** `try`/`catch`/`throw`, `throw;` (rethrow), `std::invalid_argument`,
  `std::bad_alloc`, `std::exception` + `what()`.
- **Idiomer boka MÅ lære eksplisitt:** «Rule of Three» (destruktør +
  kopikonstruktør + tilordningsoperator hører sammen ved dynamisk minne),
  **`copy-swap`-idiomet**, **deep vs. shallow copy med referansetelling**,
  RAII-tankegangen (konstruktør allokerer, destruktør frigir).

---

## 7. Prognose og prioritering

**Prognose for neste eksamen (moderat sikkerhet — lite arkiv).** Forvent 3–4
hoveddeler rundt selvstendige domenecase, med denne sammensetningen:

- **Én klasse med operatoroverlasting** (svært sannsynlig) — implementer
  medlemsfunksjoner + minst 3–4 overlastede operatorer, med minst ett `const`-/`&`-
  begrunnelsesspørsmål og en avsluttende template-deloppgave.
- **En prosedyredel med frittstående funksjoner + kodesporing** (svært sannsynlig)
  — «hva skrives ut?» pluss en kjede av funksjoner over array/streng/2D-brett.
- **En datastruktur med rå pekere** (sannsynlig) — egendefinert lenket liste eller
  dynamisk tabell med `new`/`delete`, konstruktør/destruktør, unntak ved ugyldig
  indeks.
- **En minnehåndteringsdel** (nesten sikker) — deep vs. shallow copy,
  kopikonstruktør/tilordning, `copy-swap`, referansetelling, `virtual`-destruktor.
- **En arvedel** (sannsynlig) — 2-nivås hierarki, `virtual`, `protected`, slicing,
  ofte kombinert med fil-innlesing og unntak.

**Prioritering ved bygging av boka (fra mest til minst eksamenskritisk):**

1. **Manuell minnehåndtering + Rule of Three + copy-swap + deep/shallow copy +
   referansetelling.** Fagets tyngste og mest gjennomgående tema. Mest drill her.
2. **Pekere, referanser og `const`-korrekthet** — inkl. peker-til-peker, dinglende
   pekere, call/return-by-reference-forklaringer.
3. **Klasser: konstruktør m/ initialiseringsliste, destruktør, innkapsling,
   `friend`, `static`.**
4. **Operatoroverlasting** — hele katalogen (`<`, `==`, `++`, aritmetiske, `[]`,
   `<<`), som medlem vs. frittstående.
5. **Unntak** — `try/catch/throw`, rethrow, `invalid_argument`/`bad_alloc`/
   `exception::what()`.
6. **Datastrukturer med rå pekere** (egendefinert lenket liste / dynamisk 2D).
7. **Arv, `virtual`, `protected`, polymorfi og slicing.**
8. **STL-containere + iteratorer** — med vekt på *valg og ytelse* (`vector` vs.
   `list`/`deque`), `map` for telling.
9. **Kodesporing** («hva skrives ut?») — egen drill-sjanger med innbygde feller.
10. **Templates** — liten men fast; alltid med som avslutning på et klassekapittel.
11. **Prosedyre-verktøykasse:** array-/streng-/filfunksjoner, `enum`, `using`,
    `rand()`, casting, rekursjon.
12. **Lettere: enkel GUI/testing** (nevnt i emnebeskrivelsen, ikke belagt i
    arkivet) — hold kort, ikke prioriter foran 1–5.

**Anbefalt arketype: `DNA-regnefag`** (kvantitative fag — samme familie som TDT4100,
TDT4110 og IN1010), i **kodeverksted-varianten**: teori → gjennomgått
kodeeksempel → implementeringsoppgave, med to spesialsjangre løftet inn fra
arkivet — **(a) «hva skrives ut?»-kodesporing** med fasit og felleforklaring, og
**(b) «finn feilen»-feilsøking**. Faget er *ikke* et drøftings- eller puggefag;
tyngden ligger i å *skrive og lese korrekt C++*, med korte teoriforklaringer som
akkompagnement. Legg ekstra vekt på minnehåndtering/kopisemantikk som eget,
bredt utbygd kapittelspor — det er der eksamen skiller kandidatene, og der C++
skiller seg mest fra Java-søsteremnet.

---

## 8. C++/Java-forskjeller (TDT4102 vs. TDT4100)

Kritisk for boka, siden mange lesere kjenner Java-OO fra før:

| Tema | TDT4102 (C++) | TDT4100 (Java) |
|---|---|---|
| **Minne** | **Manuell**: `new`/`delete`, destruktører, lekkasjer, Rule of Three — *på hvert sett* | Søppelsamler; ingen destruktør, ingen `delete` — *aldri tema* |
| **Kopisemantikk** | **Sentralt**: deep vs. shallow copy, kopikonstruktør, tilordningsoperator, `copy-swap`, referansetelling | Referansesemantikk implisitt; `clone`/`equals` konseptuelt, uten minneansvar |
| **Pekere/referanser** | Rå pekere, `*`, `&`, `**`, `nullptr`, dinglende pekere | Kun referanser; ingen pekeraritmetikk |
| **Operatoroverlasting** | **Tungt** (`<`,`==`,`++`,`*=`,`[]`,`<<`) | Finnes ikke; bruker metoder (`compareTo`, `equals`) |
| **`const`-korrekthet** | Eget tema (3 posisjoner) | Ingen direkte motstykke (`final` er noe annet) |
| **Virtuelle funksjoner** | Eksplisitt `virtual`; «hvorfor virtual?» er spørsmål; **virtual-destruktor** | Metoder er virtuelle by default; spørsmålet er meningsløst |
| **Objektavskjæring (slicing)** | Reell felle når objekter tas by value | Umulig (alt er referanser) |
| **Templates vs. generics** | `template <typename T>`, kompileringstid, duck-typing-aktig | Generics med typesletting, `<T extends …>` |
| **Prosedyre-halvdel** | Ja: frittstående funksjoner, C-arrays, `enum`, `using` — «prosedyre» i navnet | Nei; rent objektorientert |
| **Design/mønstre/diagram** | Nesten fraværende i arkivet (litt arv) | **Kjerne**: observatør-observert, delegering, UML-/objektdiagram |
| **STL vs. samlinger** | Containervalg + *ytelse* (`vector`/`list`/`deque`), `map` | Bibliotekssamlinger (`ArrayList`/`HashMap`), mindre om intern kostnad |
| **Enhetstesting** | Nevnt i emnebeskrivelse, ikke belagt i arkivet | JUnit som egen deloppgave |

**Kort:** en Java-kyndig leser må *avlære* «minnet ordner seg selv». Boka bør ha et
tidlig, eksplisitt kapittel om **eierskap, levetid og manuell frigjøring** før den
går videre til klasser og operatorer, og deretter gjøre **kopisemantikk (Rule of
Three / copy-swap / deep vs. shallow)** til det bærende, mest utbygde temaet — akkurat
det TDT4100/Java-verdenen aldri trenger å tenke på.

---

## Kildeliste

**Lest grundig (fullt løsningsforslag/fasit med sensorkommentarer):**
- `TDT4102-2015.ordinær.eksamen.bokmål.LF.pdf` (2015 ordinær, fasit) — Oppg. 1
  `Rational`-klasse m/ operatoroverlasting + template + static + return-by-ref (45 %);
  Oppg. 2 Snake-spillet: STL-containere/iteratorer, arv `MovingRectangle` (45 %);
  Oppg. 3 dynamisk 2D-tabell `double**`, `bad_alloc`, `virtual`-destruktor (10 %).
- `TDT4102-2015.kont.eksamen.LF.bokmål.pdf` (2015 kontinuasjon, fasit) — Oppg. 1
  kodesporing + funksjoner (anagram/palindrom/ordstatistikk/mean/median/round,
  `const`/`&`-forklaring) (40 %); Oppg. 2 dobbelt-lenket liste `DynamicMultiArray`/
  `RowNode` m/ `friend`, unntak, template (40 %); Oppg. 3 minnehåndtering: deep copy,
  shallow copy m/ referansetelling, `copy-swap` (20 %).
- `TDT4102-2015.ordinær.eksamen.engelsk.v3.pdf` — engelsk versjon av 2015 ordinær
  (identisk innhold; bekreftet).

**Lest grundig (oppgavesett uten fasit):**
- `NTNU_TDT4102.pdf` (udatert ordinært sett, faglig kontakt Trond Aalberg; refererer
  XCode og `using`-typealias → trolig 2016/2017) — Oppg. 1 kodeforståelse
  (kodesporing, objekt-/destruktørtelling, call-by-ref for operatorer) (20 %);
  Oppg. 2 fire-på-rad: frittstående funksjoner på 2D-brett, `operator<<`, `enum`,
  `main`/spilløkke (35 %); Oppg. 3 minnehåndtering `ValArr`/`RefArr` (deep vs. shallow,
  `copy-swap`, template) (25 %); Oppg. 4 arv `Creature`/`Demon`/`Balrog`: `virtual`,
  `protected`, slicing, fil-innlesing, unntak (20 %).
- `TDT4102-2015.kont.eksamen.bokmål.pdf` — oppgavesettet (uten fasit) til 2015
  kontinuasjon; samme innhold som fasitfila over.

**Fagbeskrivelse:** omskrevet sammendrag av NTNUs emnebeskrivelse
(`scratchpad/fagbeskrivelse-tdt4102.md`) — 7,5 sp, 4-timers skriftlig skoleeksamen,
hjelpemiddelkode G (2026/2027), karakterskala A–F.

**Forbilde-analyser:** `tdt4100/EKSAMENSANALYSE.md` (NTNU OOP i Java — brukt til
C++/Java-kontrasten), samt referanse til `tdt4110` (NTNU intro-programmering) og
`in1010` (UiO OOP) som strukturmodeller.

**Merknader om kildene:**
- **Lite arkiv:** kun 3 distinkte sett (2 med fasit). Frekvenstall er indikative, ikke
  statistiske. Mønstre som hviler på ett sett er markert i teksten.
- **Formskifte-forbehold:** arkivet er papirbasert (t.o.m. ~2017). Om dagens TDT4102
  har gått over til IDE-/kodebasert eksamen (slik TDT4100 har) er **ikke verifisert**
  fra dette arkivet; kjernetemaene antas faglig kontinuerlige uansett.
- **Opphavsrett:** alle beskrivelser av oppgaver, løsningsmetoder og
  sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekst
  eller fasit er gjengitt ordrett; kodemønstrene er standard C++-idiomer.
