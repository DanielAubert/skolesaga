# Bokskjelett: TDT4102 Prosedyre- og objektorientert programmering (C++) (NTNU) — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (NTNU-arkivet ~2015–2017: **3 distinkte sett**, 2 med fullt løsningsforslag).
> Arketype: **DNA-regnefag** (`DNA-regnefag.md`) i **kodeverksted-varianten** —
> kapittel-DNA-ene der (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke
> i sin helhet her. Alle kodeeksempler og domener i den ferdige boka skal være
> **nyskrevne** (opphavsrett): kodemønstrene er standard C++-idiomer, men klassenavn,
> tall, domeneinnpakningen og oppgavetekstene skal være forfatterens egne — bruk
> domener som IKKE finnes i arkivet (arkivet bruker rasjonale tall `Rational`,
> Snake-spillet, dobbelt-lenket liste `DynamicMultiArray`/`RowNode`, fire-på-rad-brett
> og kampskapninger `Creature`/`Demon`/`Balrog`; boka bruker f.eks. `Vektor2D`,
> `Pengebeløp`, `Tidsintervall`, `Tallfølge` (dynamisk tabell), `Tekstbuffer`,
> `Spilleliste` (lenket liste), `Figur`/`Sirkel`/`Rektangel`, et lysrutenett og
> temperaturmålinger).
>
> **EVIDENSFORBEHOLD (skal stå i Del 0).** Dette er et **lite arkiv**: 3 sett, 2 med
> fasit, mot TDT4100s 23 løsningsforslag. Frekvenstallene («3/3», «2/3») er
> **indikative, ikke statistisk robuste** — de betyr «på alle tre / to av tre sett vi
> har», ikke en trend over ti år. Der et mønster hviler på ett sett, sies det
> eksplisitt, og usikre detaljer merkes `(verifiser)`. Arkivet dokumenterer den
> **papirbaserte æraen (t.o.m. ~2017)** med håndskrevne C++-svar og lærebok tillatt.
> **Fagbeskrivelsen 2026/2027** angir fortsatt 4-timers skriftlig skoleeksamen, men med
> hjelpemiddelkode **G** (ikke C) og nevner nå enkel GUI, testing og moderne verktøy
> (inkl. AI-hjelpemidler). Om dagens eksamen har gått over til IDE-/kodebasert form er
> **ikke verifisert** fra arkivet; kjernen — minnehåndtering, pekere, klasser,
> operatorer, kopisemantikk, arv, unntak, STL — er faglig kontinuerlig uansett.
>
> **TDT4102 vs. TDT4100 (søsteremnene ved NTNU) — SAMME OO-fag, MOTSATT tyngdepunkt.**
> Begge er «objektorientert programmering» ved IDI, men i ulike språk. **TDT4100 er
> Java + designkunst:** innkapsling, grensesnitt, `Comparable`, designmønstre
> (observatør-observert, delegering), enhetstesting, UML-/objektdiagram — og **null
> manuell minnehåndtering** (Java har søppelsamler). **TDT4102 er C++ + maskinnær
> korrekthet:** **manuell minnehåndtering** (`new`/`delete`, destruktører,
> minnelekkasjer), **pekere og referanser**, **operatoroverlasting**, **kopisemantikk**
> (deep vs. shallow copy, kopikonstruktør, tilordningsoperator, `copy-swap`,
> referansetelling) og **const-korrekthet** — pluss en **prosedyre-halvdel**
> (frittstående funksjoner, C-arrays, `enum`). Der TDT4100 spør «tegn objektdiagrammet»
> spør TDT4102 «hva skrives ut av denne pekerkoden?», «hvorfor må destruktøren være
> `virtual`?» og «implementer deep copy». **Manuell minnehåndtering finnes i hvert
> eneste TDT4102-sett og er helt fraværende i TDT4100 — det er den definerende
> forskjellen.** En Java-kyndig leser må **avlære at «minnet ordner seg selv»**; boka
> gjør derfor eierskap/levetid/frigjøring (Del 3) og kopisemantikk (Del 4) til det
> bærende, mest utbygde temaet. Se egen kontrasttabell i kap. 0.1.
>
> **Forgjenger/søster i systemet:** TDT4102 tas parallelt med / etter **TDT4110**
> (NTNU intro-programmering). TDT4110 er foreløpig **skjelett, ikke bygget**, og
> søsteremnet **TDT4100** likeså. Forkunnskaps-kryssreferanser til begge skrives derfor
> som **klartekst med aktiveringsmarkør**, ikke som live markdown-lenker (stilregel §1.8).
> Interne TDT4102-lenker (`[tittel](/bok/tdt4102/<id>)`) peker kun på kapitler som finnes.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tdt4102` |
| Tittel | **TDT4102 Prosedyre- og objektorientert programmering (C++)** |
| Level | `'Høyskole'` |
| Institusjon | **NTNU** (navigasjon: «TDT4102 Prosedyre- og objektorientert programmering (C++)») |
| Arketype | Regnefag / **kodefag** (kvantitativt kodeverksted med to spesialsjangre: kodesporing + «finn feilen») |
| Antall kapitler | **38** (2 eksamenskart/kodehåndverk + 33 tema/drill + 3 øvingseksamener) |
| Estimert totaltid | **2 735 min ≈ 46 timer** |
| Quiz totalt | **654** (krav ≥500 — kodesporing er direkte quiz-vennlig, se §5) |
| Flashcards totalt | **664** (mål 640–680, svært konstruksjonsrikt kodefag — se §5) |

**Pitch (én avsnitt):** TDT4102 tester om du kan **skrive og lese korrekt C++ for
hånd** — ikke om du kan drøfte. Vurderingen er **én skriftlig skoleeksamen på papir
(4 t, 100 %)**, karakter A–F, historisk med **lærebok tillatt** (Savitch, *Absolute
C++*). Hvert sett er **3–4 hoveddeler à 10–45 %**, hver bygd rundt **ett gjennomgående
domenecase** løst stegvis gjennom mange deloppgaver. Oppgaven er **hybrid**:
implementer medlemsfunksjoner/operatorer/konstruktører (hoveddelen), les og evaluer
kort kode («**hva skrives ut?**»), finn feilen i gitt kode, og forklar kort i tekst
(hva `const`/`&`/`virtual` betyr, deep vs. shallow copy). Det er **ingen flervalgsdel**
og **ingen diagramtegning** (til forskjell fra TDT4100). Fagets signatur — og siste,
tyngste del på nesten hvert sett — er **manuell minnehåndtering og kopisemantikk**:
`new`/`delete`, destruktør, Rule of Three, deep vs. shallow copy, `copy-swap`,
referansetelling. Sensor er **pragmatisk om syntaks** («det er ikke viktig å huske helt
korrekt syntaks for bibliotekfunksjoner») og belønner **teknikk og forståelse** over
plettfri syntaks, og **kompakte egne løsninger** over bok-avskrift. Denne boka driller
nettopp de tunge minne-/kopimønstrene og operatorkatalogen til automatikk, i sensors
korte, idiomatiske stil, med begrunnelsen (const/&/container/virtual) alltid ved siden
av koden.

### Kritisk stilregel (gjelder HELE boka)

1. **Teknikk og forståelse > plettfri syntaks.** Sensor er eksplisitt: bibliotekssignaturer
   trenger ikke huskes eksakt, `include`/navnerom/filoppdeling er ikke tema, «korrekthet i
   boolsk sammenligning er litt underordnet fordi dette debugger du». All eksempel- og
   fasitkode skrives **kompakt og idiomatisk**; manglende `;`/`}`/`#include` og norske
   bokstaver vektlegges ikke. **Poenget er at koden viser riktig teknikk** — vis det, og
   forklar teknikken i én–tre setninger ved siden av.
2. **Kompakte egne løsninger belønnes over bok-avskrift.** «De som kun skrev av boka kastet
   bort mye tid og fikk mindre score enn de som laget en egen og mer kompakt løsning.» Tid
   brukt på å bla i læreboka er tid tapt. Boka lærer studenten å skrive **kort selv**, ikke å
   slå opp. Løsningsforslag i drill/øvingseksamener er derfor korte, og sier eksplisitt at
   den kompakte veien gir best uttelling.
3. **MANUELL MINNEHÅNDTERING ER RYGGRADEN (sentral sensorregel).** Hvert `new` har et
   matchende `delete`, hvert `new[]` et `delete[]`; klasser som eier `new`-et minne må ha
   **destruktør**, og da også **kopikonstruktør + tilordningsoperator** (Rule of Three).
   **RAII**: konstruktøren allokerer, destruktøren frigir. Hvert kapittel som allokerer
   dynamisk SKAL ha en `warning` om lekkasje/dobbel-frigjøring. En Java-kyndig leser må
   avlære at «minnet ordner seg selv».
4. **`const` og `&` skal BEGRUNNES (sentral sensorregel).** «Forklar `const` på tre
   posisjoner» (const retur / const parameter / const medlemsfunksjon som ikke endrer
   medlemmer) og «hva spesifiserer `&`» (return-by-reference / call-by-reference) er egne
   tekstspørsmål. Hvert kapittel som bruker `const`/`&` parer bruken med en **kort, presis
   begrunnelse** sensor ville skrevet. «Hvilke operatorer MÅ ha call-by-reference?» er eget
   spørsmål (kap. 5.1).
5. **CONTAINERVALG SKAL BEGRUNNES (sentral sensorregel).** `vector` er dårlig når man
   legger til/fjerner i endene (kopieringskostnad) → `list`/`deque`. **Ytelsesargumentet er
   poenget**, ikke bare det riktige svaret. Kap. 8.1 SKAL ha en oversiktstabell over
   sekvenscontainere (gjenskap arkivets vedleggstabell pedagogisk) og en `warning` om at
   containervalg uten begrunnelse gir mindre uttelling.
6. **De to spesialsjangrene løftes eksplisitt (kodesporing + finn feilen).** «Hva skrives
   ut?»-kodesporing (med innbygde feller: heltallsdivisjon, pre-/postinkrement, peker-swap,
   rekursjon) og «finn feilen»-feilsøking (dinglende peker, `=!` vs. `!=`, manglende
   `virtual`-destruktor, slicing) er egne sjangre som etableres i kap. 0.2 og driller gjennom
   hele boka. Disse to sjangrene er dessuten bokas **quiz-motor** (§5).
7. **Skriv svaret på riktig nivå.** Sensors instruks: *«implementer/lag»* = full fungerende
   implementasjon (signatur + kropp); *«deklarer»* = kun deklarasjonen (header-nivå);
   *«vis/forklar»* = kort kode og/eller tekst. Oppgaveformuleringene i boka SKAL speile disse
   tre svarnivåene. **Skriv ALDRI `main`/full I/O/oppstart når bare klassen etterspørres.**
8. **Forkunnskaper og kryssbok-lenker.** Interne forkunnskaper lenkes med live markdown
   (`[tittel](/bok/tdt4102/<id>)`) — kun til kapitler som finnes. Forgjengeren **TDT4110**
   (NTNU intro-programmering) og søsteremnet **TDT4100** (Java-OO) er foreløpig ikke bygget:
   referer til dem som **klartekst med aktiveringsmarkør**
   `[aktiver lenke /bok/tdt4110/<id> når TDT4110 er bygget]` /
   `[aktiver lenke /bok/tdt4100/<id> når TDT4100 er bygget]`, aldri som live lenke.
9. **Ingen diagramtegning som hovedsjanger.** Til forskjell fra TDT4100 har TDT4102 ingen
   UML-/objektdiagram-oppgaver i arkivet. Der en minne-skisse hjelper pedagogisk (peker →
   heap-boks, referansetelling), tegnes den i **strukturert tekst/ASCII** (bokser, `→`-piler),
   men det er et læremiddel, ikke en egen oppgavesjanger.

### Avvik fra DNA/README-malen (dokumentert)

- **«Symbol- og formelliste» → «API- og konstruksjonsliste».** README krever en `collapsible`
  «Symbol- og formelliste» per delkapittel. For et kodefag finnes det sjelden matematiske
  symboler, men et presist konstruksjonsapparat. Blokken heter derfor **«API- og
  konstruksjonsliste»** og lister ALLE C++-konstruksjoner brukt i delkapitlet: nøkkelord,
  operatorer, medlemsfunksjoner, STL-typer og idiomer med presis oppførsel **og begrunnelsen
  for når/hvorfor** (f.eks. `new[]` — «allokerer array på heap; MÅ matches av `delete[]`, ikke
  `delete`»; `const T&`-parameter — «unngår kopi OG lover å ikke endre argumentet — velg for
  store objekter du bare leser»; `virtual ~Base()` — «uten dette kalles ikke subklassens
  destruktør via basispeker → lekkasje»). Regelen «per delkapittel, ikke arv fra tidligere»
  beholdes. (Samme avvik som TDT4100/IN1010/IN1900.)
- **MÅLSTANDARD: C++11.** All kode i boka skrives konsekvent mot C++11 (nullptr, override,
  auto, range-for, using-alias, delegerende konstruktører er tillatt; smart pointers
  (unique_ptr/shared_ptr) brukes IKKE — Del 3–4 trener rå new/delete/Rule of Three slik
  arkivet tester det; ikke «moderniser» kopisemantikk-delene). Merk standarden i kap. 0.1.
- **Hjelpemiddel C/lærebok tillatt → «tren bruk, ikke pugg».** Savitch var tillatt; poenget er
  at studenten skriver kompakt SELV i stedet for å bla. API- og konstruksjonslistene rammer
  kunnskapen som **«når velger jeg dette / hvorfor / hva gjør det»**, ikke eksakt
  signaturpugg. Flashcards kalibreres likt.
- **`theorem`-blokker brukes for kanoniske kodemønstre (idiomer).** Der DNA-en bruker `theorem`
  for matematiske resultater, brukes den her for de faste kode- og minnemønstrene som skal
  sitte i ryggmargen — bokas «teoremer» (§3b). **Rule of Three** og **copy-swap-idiomet** er de
  viktigste.
- **Flashcards genereres fra `definition`-blokker på toppnivå.** For dette faget er
  `definition`-blokkene API-/konstruksjons- og begrepsdefinisjoner (konstruksjonen/begrepet som
  «tittel», presis oppførsel + når-velges-det + minimalt eksempel som «definisjon»). Kalibrer
  som **«hva gjør dette / når velger jeg det / hvorfor»**. Fordi faget er svært
  konstruksjonsrikt (nøkkelord, minneoperasjoner, hele operatorkatalogen, kopimønstre,
  STL-containere, unntakstyper, template-syntaks), er flashcard-taket satt **høyt** (664, mål
  640–680).
- **Quiz kan SPEILE to av eksamens sjangre direkte — en fordel over TDT4100.** Eksamen har ingen
  flervalgsdel, MEN **«hva skrives ut?»-kodesporing og «finn feilen» er reelle eksamenssjangre
  som mapper rett på flervalg/kortsvar**. Quiz kalibreres derfor som **(a) kodesporing** («hva
  skrives ut av denne snutten?» — med de innbygde fellene: `4/9==0`, `g++` vs. `++g`, peker-swap,
  rekursjon), **(b) finn-feilen** («hva er galt her?» — dinglende peker, manglende
  `virtual`-destruktor, slicing, `=!`), **(c) begrunnelses-innprenting** («hva betyr `const` på
  denne posisjonen?», «hvorfor må destruktøren være `virtual`?», «trengs kopikonstruktør her?»),
  **(d) konstruksjons-/begreps-MC** («hva matcher `new[]`?», «medlem eller frittstående
  operator?», «deep eller shallow?»). Sjanger (a) og (b) gjør quiz til reell eksamenstrening, ikke
  bare konsolidering. `options[0]` = riktig svar (runtime stokker). Dette avviket dokumenteres i
  Del 0.
- **Ingen midtveiseksamen.** TDT4102 er én eksamen (100 %). Alle tre øvingseksamenene (Del 9) er
  komplette **4-timers papirsett** med 3–4 hoveddeler rundt hvert sitt nyskrevne domenecase, etter
  arkivets faglige stige (klasse/operatorer → prosedyre/kodesporing → datastruktur m/pekere →
  minne/kopisemantikk → arv), med en fast liten template-deloppgave.
- **Bokdelene ordnet etter faglig avhengighet (ikke etter eksamens deler).** Til forskjell fra
  TDT4100 (der bokdelene = eksamens faste 5-delers stige) roterer TDT4102-domenene og
  del-rekkefølgen varierer mellom sett; boka ordnes derfor etter **prerequisites** (grunnlag →
  klasser → minne → kopisemantikk → operatorer → arv → unntak → STL/templates), og driller hver
  eksamenssjanger i sin temadel. Drillkapitlene ligger inne i temadelene (ikke samlet i siste
  del), fordi hver sjanger må drilles umiddelbart etter teorien. (Samme drill-avvik som
  TDT4100/IN1010/ECON1310.)
- **Prioritering avviker bevisst fra faglig rekkefølge.** Faglig kommer klasser før minne, men
  **eksamenskritisk er minnehåndtering/kopisemantikk tyngst**. Frekvensen styrer *omfanget*: Del 3
  (dynamisk minne, ryggrad) og Del 4 (kopisemantikk, vanskeligst) får flest kapitler + mest drill,
  selv om de kommer «midt i» den faglige stigen.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen). Frekvensen styrer *omfanget*: Del 3
(dynamisk minne) og Del 4 (kopisemantikk) er tyngst og får flest kapitler + mest drill; Del 5
(operatorer) og Del 6 (arv) er store; Del 1/2 er bredt fundament; Del 7/8 er kompakte.

| Del | `sectionName` (bokforsiden) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart og kodehåndverk | 2 | Prioriteringsverktøyet + de tre tverrgående sjangrene (kodesporing / finn feilen / begrunn valget). Evidensforbeholdet (3 sett). |
| 1 | C++-grunnlag og prosedyre | 5 | **Prosedyre-halvdelen 3/3** (perfekt/kunne). Syntaks, kontrollflyt, funksjoner + parameteroverføring (verdi/ref/peker, 3/3), C-arrays/2D/`enum`/`using`, strenger/strømmer. 4 teori + 1 drill. |
| 2 | Klasser og objekter | 4 | **Klasser 3/3** (perfekt). Medlemsfunksjoner, konstruktør m/ **initialiseringsliste**, destruktør, innkapsling, `const`-korrekthet (3 posisjoner), `static`, `friend`. 3 teori + 1 drill. |
| 3 | Pekere og dynamisk minne | 5 | **RYGGRAD — dynamisk minne 3/3, pekere 3/3, destruktør 3/3** (perfekt, MEST DRILL). `*`/`&`/`nullptr`, `new`/`delete`, peker-til-peker/2D, dinglende pekere/lekkasje, datastruktur m/pekere. 4 teori + 1 drill. |
| 4 | Kopisemantikk | 5 | **VANSKELIGST — kopisemantikk ~3/3** (perfekt, MEST DRILL). Rule of Three, deep vs. shallow, kopikonstruktør/tilordning, `copy-swap`, referansetelling. 4 teori + 1 drill. |
| 5 | Operatoroverlasting | 4 | **Operatoroverlasting 3/3** (perfekt). Medlem vs. frittstående + call-by-ref, `<`/`==`/aritmetiske/`*=`, `++`(postfiks)/`[]`/`<<`. 3 teori + 1 drill. |
| 6 | Arv, virtuelle funksjoner og polymorfi | 4 | **Arv 2/3 tungt** (perfekt/kunne). `: public`, `protected`, `virtual`, `virtual`-destruktor, polymorfi, **slicing**. 3 teori + 1 drill. |
| 7 | Unntakshåndtering | 2 | **Unntak 3/3** (perfekt). `try`/`catch`/`throw`, `invalid_argument`/`bad_alloc`/`what()`, rethrow, validering. 1 teori + 1 drill. |
| 8 | STL og maler | 4 | **STL 2/3, templates 3/3 (liten)** (perfekt/kunne). Sekvenscontainere + ytelse, `map`/iteratorer/range-for, `template<typename T>`. 3 teori + 1 drill. |
| 9 | Eksamenstrening | 3 | 3 komplette 4-timers papirsett à 3–4 domene-deler etter arkivets faglige stige, ett domene hver. |

**Avvik fra DNA-makrostrukturen (dokumentert):** DNA-en legger sjangerkapitlene i siste del. Her
ligger drillkapitlene (1.5, 2.4, 3.5, 4.5, 5.4, 6.4, 7.2, 8.4) inne i sine respektive temadeler,
fordi hver eksamenssjanger må drilles umiddelbart etter teorien. Del 9 beholder de komplette
øvingseksamenene. Del 0 har **to** kapitler (ikke ett): eksamenskartet + et kodehåndverk-kapittel
som etablerer de tre tverrgående sjangrene, siden kodesporing og «finn feilen» går på tvers av alle
temadeler og trenger en felles grunnbehandling. (Samme drill-avvik som TDT4100/IN1010/ECON1310.)

---

## 3a. Sjangerkatalog (A–G)

Bokstavene refereres i hvert kapittel og gjengis for studenten i Del 0. Destillert fra
EKSAMENSANALYSE §3. Tre familier: **skriv kode** (hoveddelen), **les/feilsøk kode**
(kodesporing + finn feilen), **forklar/begrunn i tekst**. En typisk oppgave vever flere sammen.

| Kode | Sjanger | Form | Hyppighet/vekt |
|---|---|---|---|
| **A** | Implementer medlemsfunksjon/operator/konstruktør/destruktør (dominant) — full C++ m/ signatur + kropp | skriv kode | 3/3; hoveddelen av hvert sett |
| **B** | Implementer frittstående funksjon (prosedyre-halvdel) — `mean`/`median`/`isAnagram`/`countTiles`, ofte kjedet | skriv kode | 3/3 |
| **C** | «Hva skrives ut?» — kodesporing, evaluer kort snutt for hånd (innbygde feller) | les kode | 2/3; egen deloppgave |
| **D** | «Finn feilen / hva er galt» — debugging-refleks (dinglende peker, `=!`, manglende `virtual`, slicing) | les kode | 2/3 |
| **E** | Forklar/begrunn i tekst — `const` (3 posisjoner), `&`, `virtual`/`protected`, `friend`, deep vs. shallow, «trengs kopikonstruktør her?» | tekst | 3/3; poenggivende |
| **F** | «Gjør om til template» — vis klasse-deklarasjonen som `template <typename T>` + reflekter over en fallgruve | skriv kode | 3/3; fast liten avslutning |
| **G** | Friere design/utvidelse — lag subklasse, skriv `main`/spilløkke, bestem filformat og les inn | skriv kode | 2/3 |

## 3b. Idiomkatalog (bokas «teoremer» — `theorem`-blokker)

De faste kode- og minnemønstrene som skal sitte i ryggmargen. Hvert presenteres som en
`theorem`-blokk i angitt kapittel og gjentas i drill/studieguide. **Rule of Three** og
**copy-swap-idiomet** er de viktigste differensierende malene.

| Idiom | Kort form | Kapittel |
|---|---|---|
| **Initialiseringsliste-malen** | `Klasse(int a, int b) : felt1(a), felt2(b) { }` — initialisér felt før kroppen; påkrevd for `const`/referanse-felt | 2.2 |
| **Parameteroverførings-valget** | verdi (kopi, liten/uforanderlig) · `T&` (endre argumentet) · `const T&` (les stort objekt uten kopi) · `T*` (kan være `nullptr`) | 1.2 |
| **`static_cast`-for-flyttall** | `static_cast<double>(sum) / antall` — unngå heltallsdivisjon når du vil ha flyttall | 1.1 |
| **RAII-malen** | konstruktør allokerer (`new`), destruktør frigir (`delete`) — eierskap = ansvar for frigjøring | 3.2 |
| **`new`/`delete`-parvis** | hvert `new` → `delete`; hvert `new[]` → `delete[]`; sett peker til `nullptr` etter frigjøring | 3.2 |
| **Peker-til-peker-2D-malen** | `int** t = new int*[R]; for (…) t[i] = new int[C];` frigjør radene før arrayet | 3.4 |
| **Rule of Three** | eier du `new`-et minne → skriv **destruktør + kopikonstruktør + tilordningsoperator** (de hører sammen) | 4.1 |
| **Deep-copy-malen** | kopikonstruktør/tilordning allokerer **eget** minne og kopierer innhold element for element | 4.2 |
| **`copy-swap`-idiomet** | `T& operator=(T rhs) { swap(*this, rhs); return *this; }` — tar arg by value, bytter medlemmene; håndterer selvtilordning + unntakssikkerhet | 4.3 |
| **Referansetelling-malen** | delt data + `int* use`; kopi teller opp, destruktør teller ned og frigir ved 0; peker-til-peker for delt `first`/`last` | 4.4 |
| **Postfiks-`++`-malen** | `T operator++(int) { T temp = *this; ++(*this); return temp; }` — returnér verdien FØR inkrementering | 5.3 |
| **`*=`-og-gjenbruk-malen** | `T& operator*=(const T& r) { …; reduce(); return *this; }`, og `operator*` **gjenbruker** `*=` | 5.2 |
| **`operator<<`-malen** | `ostream& operator<<(ostream& os, const T& x) { os << …; return os; }` — frittstående, ofte `friend` | 5.3 |
| **`operator[]`-malen** | `int& operator[](int i)` returnerer referanse (kan endres), + `const`-overlast for lesing | 5.3 |
| **`virtual`-destruktor-malen** | basisklasse med subklasser + `delete` via basispeker → destruktøren MÅ være `virtual` | 6.2 |
| **Slicing-unngåelse** | ta/lagre objekter som `Base&` eller `Base*` — **aldri by value** — ellers avskjæres subtypen | 6.3 |
| **Containervalg-malen** | innsetting/fjerning i endene → `list`/`deque`; indeks/hurtig lesing → `vector`; nøkkeloppslag → `map` | 8.1 |

---

## 4. Kapitler

Feltene følger DNA-ens «Skjelett-krav», tilpasset kodefag: **Kodekontrakt** erstatter
«Innholdskontrakt» (eksakte konstruksjoner/API-er/idiomer kapitlet SKAL lære, med presis
oppførsel OG begrunnelse). Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) /
**kjenne** (nivå 3).

---

### Del 0 — Eksamenskart og kodehåndverk

#### Kapittel 0.1: Eksamenskartet — slik testes TDT4102

- **id:** `tdt4102-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen (4 t skoleeksamen på papir, lærebok tillatt), oppbygningen (3–4 hoveddeler à 10–45 % rundt ett domenecase), temafrekvensene, sjangerkatalogen A–G, de fem sensorreglene, C++/Java-kontrasten og lesestrategien som styrer hele boka. Evidensforbeholdet: kalibrering på 3 sett.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (3 sett, ~2015–2017). Skal gjengi: (i) formen — **én skriftlig skoleeksamen (4 t, 100 %)**, A–F, historisk **lærebok tillatt** (Savitch, *Absolute C++*) + enkel kalkulator, obligatoriske øvinger godkjent for å gå opp; (ii) at oppgaven er **hybrid** — implementer kode (hoveddelen) + kodesporing («hva skrives ut?») + finn feilen + kort teoriforklaring, **ingen flervalg og ingen diagramtegning**; (iii) **oppbygningen** — hvert sett er 3–4 hoveddeler à 10–45 % rundt ett gjennomgående domenecase løst stegvis (a, b, c …); **minnehåndtering er nesten alltid den siste, tyngste delen** (fagets signatur); (iv) **temafrekvens-tabellen** (dynamisk minne 3/3, klasser m/init-liste 3/3, pekere & referanser 3/3, destruktør 3/3, operatoroverlasting 3/3, funksjoner/parameteroverføring 3/3, unntak 3/3, kopisemantikk ~3/3, templates 3/3, arv 2/3 tungt, STL-containere 2/3, iteratorer 2/3, `const`-korrekthet 2/3, kodesporing 2/3, filbehandling 2/3, 2D-tabeller 2/3, casting 2/3, `enum` 2/3, `rand()` 2/3, strengbehandling 1/3, `static` 1/3, `friend` 1/3, rekursjon 2/3); (v) **EVIDENSFORBEHOLDET** — lite arkiv (3 sett, 2 med fasit), tall er indikative ikke statistiske, papirbasert æra t.o.m. ~2017, dagens form (IDE-/kodebasert?) `(verifiser)`, kjernen er faglig kontinuerlig; (vi) sensors metaregler; (vii) **C++/Java-kontrasttabellen** (se §8 i analysen: minne manuelt vs. søppelsamler, kopisemantikk sentralt vs. implisitt, rå pekere vs. kun referanser, operatoroverlasting vs. metoder, `const`-korrekthet vs. intet motstykke, eksplisitt `virtual` vs. virtuell by default, slicing reell vs. umulig, prosedyre-halvdel vs. rent OO) — «Java-kyndige må avlære at minnet ordner seg selv».
- **Kodekontrakt:** Sjangerkatalogen A–G (§3a) og idiomkatalogen (§3b) presenteres som studentens sjekkliste med typisk vekt per sjanger. **De fem sensorreglene** presenteres eksplisitt: (1) teknikk/forståelse > plettfri syntaks; (2) kompakte egne løsninger > bok-avskrift; (3) manuell minnehåndtering er ryggraden (Rule of Three, `new`↔`delete`, RAII); (4) `const`/`&` skal begrunnes (3 posisjoner / call-by-ref); (5) containervalg skal begrunnes (ytelse). Pluss **begrunnelseskravet** (E-sjangeren): der oppgaven spør «hvorfor», er teksten selvstendig poenggivende. Avslutt med **leseplan**: Del 3 (dynamisk minne) + Del 4 (kopisemantikk) er «må perfekt» og der eksamen skiller kandidatene; Del 2 (klasser) + Del 5 (operatorer) perfekt; Del 1 (prosedyre) + Del 6 (arv) + Del 7 (unntak) perfekt/kunne; Del 8 (STL/templates) kunne, med template som fast liten avslutning; enkel GUI/testing merkes «kjenne / moderne spor».
- **Oppgavesjangre:** Ingen kodeoppgaver; 3–4 refleksjonsoppgaver: «gitt 4 timer og en typisk vektfordeling (klasse/operatorer 40 %, prosedyre/kodesporing 35 %, minne/kopisemantikk 25 %) — sett opp et tidsbudsjett når minnedelen er tyngst men kommer sist» og «forklar med egne ord hvorfor en Java-kyndig student må tenke annerledes om minne i C++».
- **Typiske feil:** Metafeilene: bruke all tid på å bla i læreboka i stedet for å skrive kompakt selv; hoppe over minnedelen fordi den er sist (der skilles kandidatene); tro at koden må være syntaktisk perfekt (teknikk teller mer); anta at Java-vaner overføres direkte (minnet ordner seg IKKE selv).
- **Quiz: 16 · Flashcards: 18** (form, oppbygning, sensorreglene, sjangerkatalogen, C++/Java-kontrasten, evidensforbeholdet)

#### Kapittel 0.2: Kodehåndverket — kodesporing, «finn feilen» og «begrunn valget»

- **id:** `tdt4102-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4102-0-1` · **kapitteltype:** teori
- **description:** De tre tverrgående sjangrene som går igjen i alle temadeler, etablert samlet: (C) «hva skrives ut?»-kodesporing med de innbygde fellene, (D) «finn feilen»-feilsøking som refleks, og (E) «begrunn valget» — den korte, presise tekstforklaringen sensor gir poeng for. Dette er også bokas quiz-motor.
- **Eksamensbelegg:** Kodesporing 2/3 (egen deloppgave), finn-feilen 2/3, begrunn/forklar 3/3. Disse tre går på tvers av alle deler og etableres derfor felles her, før temadelene. Prioritet: **perfekt** (E), **perfekt** (C/D som lesetrening).
- **Kodekontrakt (API- og konstruksjonsliste):** **Kodesporing (C):** systematisk fremgangsmåte — les linje for linje, hold en «tavle» over variabelverdier, vær årvåken på fellene: **heltallsdivisjon** (`4/9 == 0`, `7/2 == 3`), **`%`** (rest), **pre-/postinkrement** (`++g` bruker ny verdi, `g++` bruker gammel), **peker-swap** (`swap(i,j)` av pekere bytter hva de peker på; `swap(*k,*l)` av verdier bytter innhold), **rekursjon** (bygg kallstakken, f.eks. sifferutskrift bakfra), **casting** (`static_cast<double>` endrer divisjonen). **Finn feilen (D):** debugging-refleks — **retur av peker/referanse til lokal variabel** (`char buf[n]; return buf;` dingler etter retur), **`=` vs. `==`** og **`=!` vs. `!=`** (`x =! y` er `x = (!y)`, ikke ulikhet), **manglende `virtual`-destruktor** (subklassens destruktør kalles ikke via basispeker), **objektavskjæring** (`f(Base b)` by value avskjærer subtypen), **glemt `delete[]`**. **Begrunn valget (E):** malen for korte svar — `const` fordi …, `&` (call-by-ref) fordi …, `virtual` fordi …, deep fordi objektet eier minne. `theorem`-idiomer: `static_cast`-for-flyttall (foregripes fra 1.1). `warning`: kodesporing feiler oftest på heltallsdivisjon og postinkrement; finn-feilen oftest på dinglende peker og `=!`.
- **Oppgavesjangre:** C, D, E (etablert her, drilles i alle temadeler). Mønstereksempler (nyskrevne): (C) «Hva skrives ut? `int a = 7, b = 2; cout << a/b << ' ' << static_cast<double>(a)/b;`» → `3 3.5`. (D) «Finn feilen: en funksjon returnerer et lokalt `int[]`.» (E) «Forklar hva `&` betyr i `void f(int& x)`.»
- **Typiske feil:** Sporing: regne `4/9` som `0.444` (det er `0`), bruke ny verdi ved `g++`; finn-feilen: overse at `=!` er tilordning; begrunn: skrive svar uten begrunnelse (mister E-poengene), forklare for langt (sensor vil ha kort og presist).
- **Quiz: 22 · Flashcards: 16** (kodesporingsfeller, finn-feilen-katalogen, begrunnelsesmalen — quiz-tung fordi C/D er direkte quiz-vennlige)

---

### Del 1 — C++-grunnlag og prosedyre *(prosedyre-halvdelen: PERFEKT/KUNNE, 3/3)*

> Prosedyre-halvdelen av faget («prosedyre» står i emnenavnet): frittstående funksjoner,
> parameteroverføring (verdi/referanse/peker, 3/3), C-arrays/2D/`enum`/`using`, strenger og
> strømmer. Broa fra TDT4110/Python til C++, og den ene halvdelen av eksamen som ikke handler om
> klasser. Fire teorikapitler + drill (kap. 1.5). Casting/heltallsdivisjon-fellen etableres her.

#### Kapittel 1.1: Fra Python/Java til C++ — typer, kontrollflyt, I/O og casting

- **id:** `tdt4102-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** C++-fundamentet: statiske typer (`int`/`double`/`bool`/`char`), kontrollflyt (`if`/`else`/`switch`/løkker), `cout`/`cin`, `bool`/`boolalpha`, og fremfor alt **heltallsdivisjon vs. flyttallsdivisjon med `static_cast`** — fagets klassiske felle nummer én.
- **Eksamensbelegg:** Grunnlag for ALT. Kontrollflyt/syntaks forutsettes kunnet (testes i kodesporing). Casting 2/3, heltallsdivisjon er *den* klassiske fellen (eksplisitt vektlagt i sensorkommentar). Prioritet: **perfekt** (casting/heltallsdivisjon), **kunne** (øvrig syntaks).
- **Kodekontrakt (API- og konstruksjonsliste):** **Typer** `int`/`double`/`bool`/`char`/`long` (statisk typing — deklarér med type, motsatt Pythons dynamiske); **kontrollflyt** `if/else`, `switch`/`case`/`break`, `for`, `while`, `do-while`; **I/O** `cout << x << endl`, `cin >> x`, `boolalpha` (skriv `true`/`false` i stedet for `1`/`0`); **operatorer** `+ - * / %`, `== != < > <= >=`, `&& || !`; **heltallsdivisjon:** `int/int` avrundes mot null (`7/2 == 3`, `4/9 == 0`) — for flyttall må **én operand være `double`** eller bruk **`static_cast<double>(n)/d`**; `%` gir rest (kun heltall); **`static_cast<T>(uttrykk)`** (typekonvertering, foretrukket over C-stil `(T)uttrykk`). **Kryssbok-forkunnskap (TDT4110/Python, klartekst m/aktiveringsmarkør):** variabler, løkker, betingelser, funksjoner — `[aktiver lenke /bok/tdt4110/<id> når TDT4110 er bygget]`. Vis oversettelsestabellen Python→C++ (dynamisk→statisk type, `print`→`cout`, `input`→`cin`, ingen innrykk-blokker → `{ }`). `theorem`-idiom: **`static_cast`-for-flyttall**. `warning` (**sentral felle**): `sum/antall` uten cast gir heltallsdivisjon.
- **Oppgavesjangre:** Forkunnskap til B + C. Mønstereksempel (nyskrevet): «Skriv en funksjon `double gjennomsnitt(int sum, int antall)` som returnerer korrekt flyttallssnitt — pass på heltallsdivisjon» og en kodesporing «hva skrives ut av `cout << 9/4 << ' ' << 9%4 << ' ' << 9.0/4;`?».
- **Typiske feil:** Heltallsdivisjon der man vil ha flyttall (§5.1); glemme type på variabel; forveksle `=` og `==`; tro at Java/Python-vaner (dynamisk typing, søppelsamler) gjelder; glemme `break` i `switch` (gjennomfall).
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 1.2: Funksjoner og parameteroverføring — verdi, referanse og peker

- **id:** `tdt4102-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4102-1-1` · **kapitteltype:** teori
- **description:** Frittstående funksjoner og **det sentrale valget mellom parameteroverføring by value, by reference (`&`) og by pointer (`*`)** — med `const T&` for store objekter, return-by-reference, standardargumenter og funksjonsoverlasting. «Hva betyr `&`?» og «hvilke operatorer MÅ ha call-by-reference?» er egne tekstspørsmål.
- **Eksamensbelegg:** Funksjoner/parameteroverføring 3/3. Call-by-reference-spørsmålet er eksplisitt («hvilke operatorer må ha det?»). `const`/`&`-forklaring 3/3 (kap. 1.2 kont). Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** **Funksjonsdeklarasjon** `returtype navn(parametre) { … }`, `return`; **by value** `f(int x)` (kopi — endringer påvirker ikke argumentet; velg for små/uforanderlige verdier); **by reference** `f(int& x)` (aliaser argumentet — endringer slår tilbake; velg når funksjonen skal endre argumentet, f.eks. `swap`); **`const` reference** `f(const string& s)` (ingen kopi + lover å ikke endre — velg for store objekter du bare leser); **by pointer** `f(int* p)` (kan være `nullptr`; `*p` for verdien); **return-by-reference** `int& element(...)` (returnér alias, f.eks. for `operator[]` — men aldri til lokal variabel!); **standardargument** `f(int x, int n = 0)`; **funksjonsoverlasting** (samme navn, ulik signatur); **begrunnelsesmalen:** `&` = referanse/alias (call-by-ref: unngå kopi og/eller endre argumentet); `const T&` = les stort objekt billig. `theorem`-idiom: **parameteroverførings-valget**. `warning` (**sentral felle**): retur av referanse/peker til lokal variabel dingler (§5.2); glemme `&` når funksjonen skal endre argumentet (endringen tapes på kopien).
- **Oppgavesjangre:** B + E. Mønstereksempel: «Skriv `void bytt(int& a, int& b)` som bytter to tall, og forklar hvorfor parametrene MÅ være referanser. Skriv deretter `double lengde(const Vektor2D& v)` og begrunn `const &`.»
- **Typiske feil:** Glemme `&` når argumentet skal endres (jobber på en kopi); returnere referanse/peker til lokal variabel (dingler, §5.2); kopiere store objekter by value i stedet for `const&`; bruke peker der referanse er enklere/tryggere; svare «hva betyr `&`» uten begrunnelse.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 1.3: C-arrays, 2D-tabeller, `enum` og `using`

- **id:** `tdt4102-1-3` · **number:** 1.3 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4102-1-2` · **kapitteltype:** teori
- **description:** C-stil tabeller (`T arr[N]`), 2D-tabeller (`T brett[R][C]`) med indeksering og gjennomløping, `enum` for tilstands-/retningsverdier, og `using`-typealias for å gjøre 2D-typer lesbare — verktøyene for brett- og tabelloppgaver (fire-på-rad-familien).
- **Eksamensbelegg:** 2D-tabeller 2/3 (brett), `enum` 2/3 (`Tile`/`Direction`), `using`-typealias 1–2/3. Frittstående funksjoner over brett (B). Prioritet: **perfekt** (2D-array-indeksering), **kunne** (`enum`/`using`).
- **Kodekontrakt (API- og konstruksjonsliste):** **C-array** `int tall[5];`, indeks fra 0, `tall[i]`, lengde må følges separat (arrays kjenner ikke egen lengde); array som parameter forfaller til peker (`f(int a[], int n)` = `f(int* a, int n)`); **2D-array** `int brett[R][C]`, `brett[rad][kol]`, dobbel `for`-løkke; **`enum`** `enum Rute { TOM, ROD, GUL };` (navngitte heltallskonstanter — velg for tilstander/retninger i stedet for magiske tall), `enum Retning { OPP, NED, VENSTRE, HOYRE };`; **`using`-typealias** `using Brett = int[R][C];` / `using Rad = std::vector<int>;` (lesbart navn på en type); **`sizeof`** (nevnes kort). `theorem`-idiom: (ingen nytt; bruker parameteroverførings-valget). `warning`: C-array kjenner ikke egen lengde (indeks utenfor grensen er udefinert, ingen unntak); 2D-array kan ikke returneres by value (foregriper dynamisk 2D i 3.4).
- **Oppgavesjangre:** B + G. Mønstereksempel: «Et lysrutenett er et `int brett[8][8]` der `0` = av, `1` = på. Skriv `int antallPa(int brett[8][8])` som teller tente ruter, og en `enum Retning`. Skriv `void skrivBrett(...)`.»
- **Typiske feil:** Indeks utenfor grensen (ingen sjekk i C-array); forveksle `[rad][kol]`-rekkefølge; glemme å sende lengden med arrayet; bruke magiske tall der `enum` er klarere; tro at et C-array kan returneres/kopieres som en verdi.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 1.4: Strenger, tegn og strømmer — `string`, `<cctype>`, `ifstream`

- **id:** `tdt4102-1-4` · **number:** 1.4 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4102-1-3` · **kapitteltype:** teori
- **description:** `std::string` og tegn-verktøyene (`isalpha`/`tolower`), og fil-/strøm-innlesing (`ifstream`, `>>` og linjelesing) — verktøykassen for anagram/palindrom/ordstatistikk og for å lese domenedata fra fil.
- **Eksamensbelegg:** Strengbehandling 1/3 (anagram/palindrom — tynt belegg, men typisk øvingsstoff), filbehandling/strømmer 2/3 (ordstatistikk fra fil; lese domeneobjekter fra fil). Prioritet: **kunne**.
- **Kodekontrakt (API- og konstruksjonsliste):** **`std::string`** `s.size()`, `s[i]` (tegn), `s += t` (bygg opp), `+` (sammenslåing), sammenligning med `==`/`<`; **`<cctype>`** `isalpha(c)`, `isdigit(c)`, `tolower(c)`/`toupper(c)`; **`<algorithm>`** `sort(s.begin(), s.end())` (sorter tegn — brukes i anagram), `reverse`; **strømmer** `ifstream inn("fil.txt")`, `inn >> ord` (leser ett ord/token, hopper over blanktegn), `getline(inn, linje)` (leser en hel linje), `while (inn >> ord) { … }` (les til slutt), `inn.close()`; `ofstream ut("...")`, `ut << …`; sjekk `if (!inn) { … }` (kunne ikke åpne). `warning`: `>>` hopper over blanktegn og stopper ved neste — bruk `getline` for linjer med mellomrom; sammenlign tegn med `tolower` for å ignorere store/små bokstaver.
- **Oppgavesjangre:** B + G. Mønstereksempel: «Skriv `bool erPalindrom(const string& s)` som ignorerer store/små bokstaver, og `map<string,int> tellOrd(const string& filnavn)` som teller ordforekomster fra en tekstfil.» (`map` foregripes fra 8.2 — kan gis delvis.)
- **Typiske feil:** Bruke `>>` når hele linjen trengs (mister alt etter første mellomrom); sammenligne tegn uten `tolower` (store/små forveksles); glemme å sjekke om fila ble åpnet; indeksere `string` utenfor `size()`.
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 1.5: DRILL — Frittstående funksjoner og kodesporing (Del 1)

- **id:** `tdt4102-1-5` · **number:** 1.5 · **estimatedMinutes:** 80 · **prerequisites:** `tdt4102-1-4` · **kapitteltype:** drill
- **description:** Full drill på prosedyre-halvdelen: skriv kjeder av frittstående funksjoner (én brukes i neste), spor kort kode («hva skrives ut?») og velg riktig parameteroverføring med begrunnelse — i sensors korte stil.
- **Eksamensbelegg:** Prosedyredel (35–40 % på 2015-kont og 2016/17), kodesporing (2/3). Ofte kjedede funksjoner over array/streng/2D-brett. Prioritet: **perfekt/kunne**.
- **Kodekontrakt (løsningsoppskrift):** Algoritmisk fremgangsmåte for prosedyreoppgaver: 1) velg **parameteroverføring** (`const T&` for store leste objekter, `T&` for endring, verdi for små — og begrunn); 2) unngå **heltallsdivisjon** (cast der du vil ha flyttall); 3) **kjed** funksjoner (skriv `sum`, bruk den i `mean`, bruk `mean` i neste); 4) for brett: dobbel `for`, `enum` for tilstander. **Kodesporing-oppskrift:** hold variabel-tavle, vær årvåken på heltallsdivisjon/postinkrement/peker-swap/rekursjon. Gjennomgått eksamenscase med **sensor-margnotater** (kompakt løsning belønnes; riktig teknikk teller mer enn plettfri syntaks; cast der nødvendig). 8–12 oppgaver på eksamensnivå over roterende domener (temperaturmålinger, karakterstatistikk, lysrutenett, ordanalyse), hver med kort fasit + begrunnelse, inkl. minst 3 kodesporingsoppgaver med felleforklaring.
- **Oppgavesjangre:** B, C, E. Mønstereksempel: «Gitt en `double temp[N]` med temperaturmålinger: skriv `double snitt(const double t[], int n)`, `double median(double t[], int n)` (du kan sortere kopien) og `int antallOver(const double t[], int n, double grense)`. Spor deretter en gitt snutt med heltallsdivisjon og postinkrement.»
- **Typiske feil:** Hele §5-prosedyre-katalogen: §5.1 (heltallsdivisjon), §5.2 (retur av peker/ref til lokal), §5.7 (`=`/`==`, `=!`/`!=`), samt kodesporingsfellene (postinkrement, peker-swap). Å levere lang, «bok-avskrevet» kode i stedet for kompakt egen.
- **Quiz: 20 · Flashcards: 12**

---

### Del 2 — Klasser og objekter *(klasser: PERFEKT, 3/3)*

> Klasser med medlemsfunksjoner, konstruktør m/ **initialiseringsliste** (3/3), destruktør,
> innkapsling, **`const`-korrekthet på tre posisjoner** (eget tekstspørsmål, 2/3), `static` og
> `friend`. Bygger objektmodellen boka trenger før dynamisk minne (Del 3) og operatorer (Del 5).
> Tre teorikapitler + drill (kap. 2.4). Domenet her er `Vektor2D`/`Pengebeløp` uten dynamisk minne.

#### Kapittel 2.1: Klasser, medlemsfunksjoner og `const`-medlemsfunksjoner

- **id:** `tdt4102-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4102-1-2` · **kapitteltype:** teori
- **description:** Klassedeklarasjon (`class`), felt og medlemsfunksjoner, `this`/`*this`, deklarasjon vs. definisjon (header/kilde-konseptet — men ikke filoppdeling som tema), og **`const`-medlemsfunksjon** (`... const`) som lover å ikke endre objektet.
- **Eksamensbelegg:** Klasser 3/3 (medlemsfunksjoner). `const`-medlemsfunksjon er én av de tre `const`-posisjonene (2/3). Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** **`class Navn { public: … private: … };`**; **felt** (medlemsvariabler) deklarert med type; **medlemsfunksjon** deklarert i klassen, definert `returtype Navn::funksjon(...) { … }`; **`this`** (peker til mottakerobjektet — `this->felt`), **`*this`** (selve objektet, brukes i operator-retur); **`const`-medlemsfunksjon** `double lengde() const { … }` (lover å ikke endre medlemmer — MÅ brukes på getters/lesere, og kan kalles på `const`-objekter); deklarasjon (`;`) vs. definisjon (kropp); `struct` (som `class` men `public` by default). **Begrunnelsesmalen:** `const` etter en medlemsfunksjon = «denne endrer ikke objektet» (én av tre `const`-posisjoner). `theorem`-idiom: (foregriper — ingen nytt). `warning`: glemme `const` på en getter (kan da ikke kalles på `const`-objekter/referanser); endre et medlem i en `const`-funksjon (kompilerer ikke).
- **Oppgavesjangre:** A + E. Mønstereksempel: «Lag klassen `Vektor2D` med felt `x`, `y`, en konstruktør (foregripes 2.2), `double lengde() const` og `Vektor2D pluss(const Vektor2D& v) const`. Forklar hvorfor begge er `const`-medlemsfunksjoner.»
- **Typiske feil:** Glemme `const` på lesende medlemsfunksjoner; forveksle `this` (peker) og `*this` (objekt); definere en medlemsfunksjon uten `Navn::`; blande deklarasjon og definisjon.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 2.2: Konstruktør, initialiseringsliste og destruktør

- **id:** `tdt4102-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4102-2-1` · **kapitteltype:** teori
- **description:** Konstruktøren og **initialiseringslisten** (`: felt(arg)`) — den foretrukne måten å sette felt på, og påkrevd for `const`-/referansefelt — pluss standardkonstruktør, overlastede konstruktører, og en første introduksjon til **destruktøren** (`~Navn()`), objektets siste handling. Destruktørens store rolle (frigi `new`-et minne) kommer i Del 3.
- **Eksamensbelegg:** Konstruktør m/ initialiseringsliste 3/3 (eksplisitt krevd på flere deloppgaver). Destruktør 3/3 (utdypes i Del 3–4). Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** **Konstruktør** `Navn(int a, int b);` definert med **initialiseringsliste** `Navn::Navn(int a, int b) : felt1(a), felt2(b) { }` (initialisér i deklarasjonsrekkefølge, før kroppen); **standardkonstruktør** `Navn();` (ingen argumenter); **overlastede konstruktører** (ulik signatur); **delegerende konstruktør** `Navn() : Navn(0,0) {}` (kort nevnt); tilordning i kroppen (`{ felt = a; }`) vs. initialiseringsliste (begge lovlige, men listen er nødvendig for `const`/referanse-felt og mer effektiv for objekter); **`~Navn()`** destruktør (kalles automatisk når objektet dør — tom foreløpig; frigir `new`-et minne i Del 3); rekkefølge: konstruktør ved opprettelse, destruktør ved slutten av levetiden (motsatt rekkefølge for medlemmer). `theorem`-idiom: **initialiseringsliste-malen**. `warning`: initialiseringslisten følger **deklarasjonsrekkefølgen** til feltene, ikke rekkefølgen du skriver dem; `const`-/referansefelt MÅ settes i listen (kan ikke tilordnes i kroppen).
- **Oppgavesjangre:** A. Mønstereksempel: «Gi `Pengebeløp` en konstruktør `Pengebeløp(int kroner, int ører)` med initialiseringsliste og en standardkonstruktør som delegerer til `Pengebeløp(0,0)`. Forklar hvorfor initialiseringsliste foretrekkes.»
- **Typiske feil:** Sette felt i kroppen i stedet for initialiseringsliste når listen kreves (`const`/referansefelt); feil rekkefølge i listen (kompilatoren advarer); glemme standardkonstruktør når klassen brukes i et array/container; tro at destruktøren må kalles manuelt (den kalles automatisk).
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 2.3: Innkapsling, `const`-korrekthet, `static` og `friend`

- **id:** `tdt4102-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4102-2-2` · **kapitteltype:** teori
- **description:** Innkapsling (`private`/`public`/`protected`), **`const`-korrekthet på alle tre posisjoner** samlet (const retur / const parameter / const medlemsfunksjon — eget tekstspørsmål), `static` medlem/funksjon (kallbar uten instans), og `friend` (gir en annen klasse/funksjon tilgang til private) — de tre siste-med-tynt-belegg-men-eksplisitt-testede konstruksjonene.
- **Eksamensbelegg:** `const`-korrekthet 2/3 («forklar `const` på tre posisjoner» er eget spørsmål). `static` 1/3 (`Rational::gcd` public+static). `friend` 1/3 (`friend class DynamicMultiArray`). Innkapsling gjennomgående. Prioritet: **perfekt** (`const`-korrekthet), **kunne** (`static`/`friend`).
- **Kodekontrakt (API- og konstruksjonsliste):** **`private`** (skjul intern tilstand — standard for felt), **`public`** (grensesnitt utad), **`protected`** (subklasser, utdypes Del 6); **`const` på tre posisjoner:** (1) **const retur** `const string& navn() const` (kalleren kan ikke endre det returnerte); (2) **const parameter** `f(const T& x)` (funksjonen endrer ikke argumentet); (3) **const medlemsfunksjon** `... const` (endrer ikke objektet) — dette er E-spørsmålet «forklar `const` her»; **`static` medlem** `static int gcd(int a, int b);` (kallbar `Klasse::gcd(8,10)` uten instans — for tilstandsløse hjelpefunksjoner/konstanter), `static`-felt (delt av alle objekter); **`friend`** `friend ostream& operator<<(ostream&, const T&);` / `friend class X;` (gir tilgang til private — for frittstående `operator<<` og tett koblede klasser). **Begrunnelsesmalen:** hvorfor `static` (ingen objekttilstand), hvorfor `friend` (frittstående operator trenger private felt), `const` på tre posisjoner. `warning`: kalle en ikke-`static` medlemsfunksjon fra `static` kontekst (§5.10); forvente privat tilgang uten `friend`; glemme `const` på én av de tre posisjonene i en E-oppgave.
- **Oppgavesjangre:** A + E. Mønstereksempel: «`Pengebeløp` skal ha `static Pengebeløp fraKroner(double kr)` (fabrikk uten instans), en `const`-getter, og en `friend ostream& operator<<`. Forklar hva `const` betyr på hver av de tre posisjonene i `const int& ører() const`.»
- **Typiske feil:** Kalle instansmetode fra `static` kontekst (§5.10); glemme `friend` og få tilgangsfeil på private felt fra frittstående operator; ufullstendig `const`-svar (bare én av tre posisjoner); gjøre en tilstandsavhengig funksjon `static`.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 2.4: DRILL — Bygg en hel klasse (Del 2)

- **id:** `tdt4102-2-4` · **number:** 2.4 · **estimatedMinutes:** 80 · **prerequisites:** `tdt4102-2-3` · **kapitteltype:** drill
- **description:** Full drill på Del 2: skriv en komplett, innkapslet klasse med konstruktør(er) m/ initialiseringsliste, `const`-korrekte medlemsfunksjoner, evt. `static`/`friend`, destruktør (foreløpig tom) — i sensors korte stil, med begrunnelse for `const`/`static`/`friend`.
- **Eksamensbelegg:** «Én klasse»-delen (20–45 % på 2015-ord/2016-17). Alltid en tung del av settet. Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** Algoritmisk fremgangsmåte: 1) identifisér **felt** og typer; 2) **konstruktør** m/ initialiseringsliste + standardkonstruktør; 3) medlemsfunksjoner — **`const` på alle lesere**; 4) velg `private`/`public`; 5) `static` for tilstandsløse hjelpere/fabrikker, `friend` for frittstående `operator<<`; 6) evt. destruktør (tom her — full i Del 3). Gjennomgått eksamenscase med **sensor-margnotater** (kompakt løsning belønnes; `const`-korrekthet gir uttelling; initialiseringsliste forventes der bedt om). 8–12 oppgaver på eksamensnivå over roterende domener (`Vektor2D`, `Pengebeløp`, `Tidsintervall`, `Temperatur`), hver med kort fasit + begrunnelse for modifikator-/`const`-valg.
- **Oppgavesjangre:** A, E. Mønstereksempel: «Lag klassen `Tidsintervall` (felt `startMin`, `sluttMin`): konstruktør m/ initialiseringsliste, `int lengde() const`, `bool overlapper(const Tidsintervall& a) const`, en `static Tidsintervall heleDagen()`, og en `friend ostream& operator<<`. Begrunn `const` og `static`.»
- **Typiske feil:** §5.10 (`static`/`friend`-feil), glemt `const` på lesere, felt satt i kroppen der listen kreves, og å levere lang «bok-avskrevet» klasse i stedet for kompakt egen.
- **Quiz: 16 · Flashcards: 12**

---

### Del 3 — Pekere og dynamisk minne *(RYGGRAD: PERFEKT, 3/3 — MEST DRILL)*

> **Fagets ryggrad og det som skiller C++ mest fra Java.** Pekere & referanser (3/3), dynamisk
> minne `new`/`delete` (3/3), destruktør som frigir minne (3/3), peker-til-peker/dynamisk 2D
> (2/3), dinglende pekere/lekkasjer, og en egendefinert datastruktur med rå pekere (40–45 % på
> to sett). Fire teorikapitler + stort drill (kap. 3.5). Her etableres **RAII** og
> `new`↔`delete`-parvishet som hele Del 4 (kopisemantikk) bygger på.

#### Kapittel 3.1: Pekere og referanser — `*`, `&`, `nullptr`

- **id:** `tdt4102-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4102-1-2` · **kapitteltype:** teori
- **description:** Pekeren (`T*`, adressen til et objekt), dereferensering (`*p`), adresse-av (`&x`), `nullptr`, forskjellen peker vs. referanse, og peker-aritmetikk/array-peker-forbindelsen — grunnlaget for alt dynamisk minne.
- **Eksamensbelegg:** Pekere & referanser 3/3. Peker-swap er en klassisk kodesporingsfelle (C). Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** **`T* p`** (peker — holder en adresse), **`&x`** (adressen til `x`), **`*p`** (dereferensering — objektet `p` peker på), **`p->felt`** (`(*p).felt` for peker til objekt), **`nullptr`** (peker som ikke peker på noe — sjekk `if (p != nullptr)`); **peker vs. referanse:** referanse (`T&`) er et alias satt ved opprettelse (kan ikke rebindes, aldri `null`); peker kan rebindes og være `nullptr`; **peker-aritmetikk** (`p+1` = neste element; `arr` forfaller til peker til første element, `arr[i]` == `*(arr+i)`); **peker-swap** (kodesporingsfelle: `swap(p, q)` bytter hvilke adresser pekerne holder; `swap(*p, *q)` bytter verdiene de peker på). `theorem`-idiom: (foregriper `new`/`delete`). `warning`: dereferensere `nullptr` eller en uinitialisert peker (krasj/udefinert); forveksle `*p` (verdien) og `p` (adressen) i kodesporing.
- **Oppgavesjangre:** A + C + E. Mønstereksempel: «Skriv `void bytt(int* a, int* b)` med pekere. Spor: `int i=1,j=2; int* k=&i; int* l=&j; swap(k,l); cout<<*k<<*l; swap(*k,*l); cout<<*k<<*l;` — hva skrives ut?»
- **Typiske feil:** Dereferensere `nullptr`/uinitialisert peker; forveksle peker og verdi i kodesporing (peker-swap-fellen, C); forveksle `&` som adresse-av vs. `&` som referanse-deklarasjon; glemme `->` for peker til objekt.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 3.2: Dynamisk minne — `new`, `delete` og RAII

- **id:** `tdt4102-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4102-3-1`, `tdt4102-2-2` · **kapitteltype:** teori
- **description:** Heap vs. stack, `new`/`delete` for enkeltobjekter og `new[]`/`delete[]` for arrays, eierskap og levetid, destruktøren som frigir `new`-et minne, og **RAII**-tankegangen (konstruktør allokerer, destruktør frigir) — kjernen i C++-minnehåndtering.
- **Eksamensbelegg:** Dynamisk minne 3/3 (egen minnedel på alle sett + gjennomsyrer datastrukturdelene). Destruktør 3/3. Prioritet: **perfekt** (fagets tyngdepunkt).
- **Kodekontrakt (API- og konstruksjonsliste):** **`new T(args)`** (allokér ett objekt på heap → returnerer `T*`); **`delete p`** (frigi det); **`new T[n]`** (allokér array → `T*`); **`delete[] p`** (frigi array — MÅ matche `new[]`); **heap vs. stack** (lokale variabler lever på stakken, frigis automatisk ved blokkslutt; `new`-et minne lever på heap til `delete`); **eierskap** (klassen som `new`-er eier og må `delete`-e i destruktøren); **destruktør** `Navn::~Navn() { delete[] data; }` (frigir eid minne); **RAII** (Resource Acquisition Is Initialization — konstruktøren skaffer ressursen, destruktøren frigir den, automatisk ved levetidsslutt); sett peker til `nullptr` etter `delete` (unngå dinglende). `theorem`-idiomer: **RAII-malen** og **`new`/`delete`-parvis**. `warning` (**sentral**): `delete` på `new[]`-minne (eller motsatt) er udefinert; glemt `delete` → lekkasje; `delete` to ganger → dobbel-frigjøring/krasj.
- **Oppgavesjangre:** A + D + E. Mønstereksempel: «Klassen `Tallfølge` holder `int* data` og `int lengde`. Skriv konstruktøren som `new`-er `lengde` heltall, og destruktøren som frigir dem. Forklar hvorfor destruktøren er nødvendig og hva RAII betyr.»
- **Typiske feil:** Glemme `delete`/`delete[]` (lekkasje, §5.5); `delete` vs. `delete[]`-mismatch; `delete` to ganger; ikke ha destruktør på en klasse som eier `new`-et minne; dereferensere etter `delete` (dinglende).
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 3.3: Dinglende pekere, minnelekkasjer og dobbel-frigjøring

- **id:** `tdt4102-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4102-3-2` · **kapitteltype:** teori
- **description:** Feilkatalogen for minne, samlet som egen «finn feilen»-trening: dinglende pekere (retur av peker til lokal/frigjort minne), minnelekkasjer (glemt `delete`, delvis allokert minne ved unntak), og dobbel-frigjøring — de feilene sensor spesifikt leter etter.
- **Eksamensbelegg:** Inngår i minnedel og «finn feilen» (D, 2/3). Retur av peker til lokal er en klassisk D-oppgave. Prioritet: **perfekt** (feilgjenkjenning skiller kandidater).
- **Kodekontrakt (API- og konstruksjonsliste):** **Dinglende peker** — peker til minne som ikke lenger er gyldig: (a) retur av peker/referanse til lokal variabel (`char buf[n]; return buf;` — stakken forsvinner ved retur, §5.2); (b) bruk etter `delete`; **minnelekkasje** — `new`-et minne som aldri `delete`-es: (a) glemt `delete` før pekeren mister siste referanse; (b) `new` av rader men bare `delete` av radpeker-arrayet (glemt radene, §5.5); (c) unntak kastet **etter** delvis allokering i konstruktør (ryddes ikke → lekkasje); **dobbel-frigjøring** — `delete` to ganger (shallow-kopi som begge frigir, foregriper Del 4); **motgift:** `nullptr` etter `delete`, RAII/destruktør, rydde delvis allokert minne ved unntak (`try`/rethrow, foregriper Del 7). `warning` (**sentral**): dette kapitlet ER warning-katalogen — hver felle vises som en kort «finn feilen»-snutt med rettelse.
- **Oppgavesjangre:** D + E. Mønstereksempel: «Finn feilen: `char* lagNavn() { char navn[20]; …; return navn; }` — hvorfor dingler returverdien, og hvordan retter du det?» + «Hvorfor lekker `for (i) delete rad; delete[] rader;` ikke, men `delete[] rader;` alene gjør det?»
- **Typiske feil:** Selve feilene: dinglende retur (§5.2), glemt `delete[]` av rader (§5.5), bruk etter `delete`, dobbel-`delete`. Å ikke rydde delvis allokert minne ved unntak i konstruktør.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.4: Peker-til-peker og dynamiske 2D-tabeller

- **id:** `tdt4102-3-4` · **number:** 3.4 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4102-3-2` · **kapitteltype:** teori
- **description:** Peker-til-peker (`T**`) og dynamisk 2D-tabell: allokere en array av radpekere, allokere hver rad, indeksere `t[i][j]`, og frigjøre i riktig rekkefølge (radene før radpeker-arrayet) — bygger direkte mot datastruktur-delen og shallow-copy med delt struktur.
- **Eksamensbelegg:** Peker-til-peker 2/3 (`RowNode**`, `int**`), dynamisk 2D via `double**`/`bad_alloc` (2015-ord oppg. 3). 2D-tabeller 2/3. Prioritet: **perfekt** (peker-til-peker er nøkkel til shallow copy i Del 4).
- **Kodekontrakt (API- og konstruksjonsliste):** **`T**`** (peker til peker — f.eks. peker til første element i en array av pekere); **dynamisk 2D:** `int** t = new int*[R];` (array av `R` radpekere) `for (int i=0;i<R;i++) t[i] = new int[C];` (hver rad); indeksering `t[i][j]`; **frigjøring i riktig rekkefølge:** `for (int i=0;i<R;i++) delete[] t[i]; delete[] t;` (radene FØR radpeker-arrayet); `bad_alloc` kan kastes av `new` ved tomt minne (foregriper Del 7); bruk av `T**` for **delt** liste-hode (`first`/`last` som må endres av flere objekter — foregriper referansetelling 4.4). `theorem`-idiom: **peker-til-peker-2D-malen**. `warning` (**sentral**): frigjøre radpeker-arrayet før radene (lekker radene, §5.5); glemme at hver `new[]` trenger sitt `delete[]`.
- **Oppgavesjangre:** A + D. Mønstereksempel: «Skriv `double** lagTabell(int rader, int kol)` som allokerer en dynamisk 2D-tabell, og `void frigi(double** t, int rader)` som frigjør den korrekt. Hva er galt hvis man bare kaller `delete[] t;`?»
- **Typiske feil:** Frigjøre i feil rekkefølge (radpeker-array før radene → lekkasje, §5.5); glemme at `T**` krever to nivåer av allokering/frigjøring; indeksere `t[i][j]` når `t[i]` ikke er allokert; forveksle antall rader/kolonner.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 3.5: DRILL — Datastruktur med rå pekere (Del 3)

- **id:** `tdt4102-3-5` · **number:** 3.5 · **estimatedMinutes:** 85 · **prerequisites:** `tdt4102-3-4` · **kapitteltype:** drill
- **description:** Full drill på ryggraden: bygg en egendefinert datastruktur med rå pekere (dynamisk tabell eller lenket liste) — konstruktør som allokerer, destruktør som frigir, innsetting/uthenting med indekssjekk (kaster unntak), og korrekt levetidshåndtering. Fagets tyngste implementeringsdel.
- **Eksamensbelegg:** Datastruktur m/pekere 40–45 % (Snake-liste, `DynamicMultiArray`). `new`/`delete`, konstruktør/destruktør, unntak ved ugyldig indeks. Prioritet: **perfekt** (MEST DRILL, sammen med Del 4).
- **Kodekontrakt (løsningsoppskrift):** Algoritmisk fremgangsmåte for datastruktur m/pekere: 1) **felt** — `T* data` + `int størrelse`/`kapasitet`, eller `Node* first`/`last`; 2) **konstruktør** `new`-er lagringen (RAII), initialiseringsliste; 3) **destruktør** frigjør ALT (`delete[]` / gå gjennom lenkene og `delete` hver node); 4) **innsetting/uthenting** med **indekssjekk** som **kaster** `out_of_range`/`invalid_argument` (foregriper Del 7); 5) evt. `friend` for en samarbeidende klasse; 6) MERK: klassen eier `new`-et minne → trenger også kopikonstruktør/tilordning (Rule of Three, Del 4 — flagges her). Gjennomgått eksamenscase med **sensor-margnotater** (destruktør frigjør alt; `new`↔`delete`-parvis; indekssjekk kaster). 8–12 oppgaver på eksamensnivå (dynamisk `Tallfølge`, `Tekstbuffer`, `Spilleliste` som lenket liste, dynamisk 2D-`Matrise`), hver med kort fasit + minnenotat.
- **Oppgavesjangre:** A, D, E, (F flagges mot Del 8). Mønstereksempel: «Lag `Tallfølge` med `int* data`, `int n`: konstruktør `Tallfølge(int n)`, destruktør, `int& operator[](int i)` (foregriper 5.3) som kaster `out_of_range` ved ugyldig `i`, og `int lengde() const`. Hvorfor trenger denne klassen snart også en kopikonstruktør?»
- **Typiske feil:** Hele §5-minne-katalogen: §5.2 (dinglende), §5.5 (lekkasje/glemt `delete[]`), manglende destruktør, indekssjekk som ikke kaster. Og: glemme at dynamisk-minne-klassen trenger Rule of Three (bro til Del 4).
- **Quiz: 18 · Flashcards: 12**

---

### Del 4 — Kopisemantikk *(VANSKELIGST: PERFEKT, ~3/3 — MEST DRILL)*

> **Fagets vanskeligste og mest differensierende tema — der eksamen skiller kandidatene.**
> Rule of Three, deep vs. shallow copy, kopikonstruktør/tilordningsoperator, `copy-swap`-idiomet
> (roses eksplisitt) og referansetelling (`use`-teller + peker-til-peker for delt struktur). Egen
> hovedoppgave på 2 av 3 sett, teorispørsmål på det tredje. Bygger direkte på Del 3 (eierskap/
> `new`/`delete`/`T**`). Fire teorikapitler + stort drill (kap. 4.5). Dette er C++-temaet Java
> aldri trenger å tenke på.

#### Kapittel 4.1: Rule of Three og deep vs. shallow copy

- **id:** `tdt4102-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4102-3-2` · **kapitteltype:** teori
- **description:** Når medlemsvis (shallow) kopiering går galt, og **Rule of Three**: eier klassen `new`-et minne, hører destruktør + kopikonstruktør + tilordningsoperator sammen. Begrepene deep (eget minne, uavhengige kopier) vs. shallow (delt peker) etableres her; når hver trengs, og — like viktig — **når standardkopiering holder** (ingen dynamisk minne).
- **Eksamensbelegg:** Kopisemantikk ~3/3, fagets vanskeligste. «Begrunn når kopikonstruktør/tilordning IKKE trengs» gir poeng. Prioritet: **perfekt** (MEST DRILL, sammen med Del 3).
- **Kodekontrakt (API- og konstruksjonsliste):** **Standard (medlemsvis) kopi** — kompilatoren lager kopikonstruktør/tilordning som kopierer felt-for-felt; for **peker-felt** kopieres bare adressen (**shallow**) → to objekter deler samme `new`-et minne → dobbel-frigjøring og utilsiktet deling; **deep copy** — allokér eget minne og kopiér innholdet, så kopiene er uavhengige; **Rule of Three:** trenger klassen én av {destruktør, kopikonstruktør, tilordningsoperator} (fordi den eier `new`-et minne), trenger den vanligvis alle tre; **når trengs de IKKE:** klasser uten dynamisk minne (bare verditype-felt) → standard medlemsvis kopi holder — å kunne *avgjøre* dette gir poeng. `theorem`-idiom: **Rule of Three**. `warning` (**sentral**): shallow kopi av en peker-eiende klasse → to destruktører frigir samme minne (dobbel-`delete`, §5.5/5.11); OG motsatt overkill: skrive Rule of Three der ingen dynamisk minne finnes.
- **Oppgavesjangre:** E + A. Mønstereksempel: «Klassen `Tallfølge` (fra 3.5) har `int* data`. Forklar hva som skjer hvis to `Tallfølge`-objekter kopieres med standard medlemsvis kopi, og hvorfor Rule of Three trengs. Trenger `Vektor2D` (kun `double x,y`) det samme? Begrunn.»
- **Typiske feil:** Tro at standardkopi holder for en peker-eiende klasse (shallow → dobbel-`delete`); skrive Rule of Three der det ikke trengs (overkomplisert); glemme én av de tre (f.eks. destruktør + kopikonstruktør men ikke tilordning).
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 4.2: Kopikonstruktør og tilordningsoperator (deep copy)

- **id:** `tdt4102-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4102-4-1` · **kapitteltype:** teori
- **description:** Implementere deep copy fullt ut: kopikonstruktør (`Navn(const Navn&)`) som allokerer eget minne og kopierer, og tilordningsoperator (`operator=`) som i tillegg må rydde gammelt minne og håndtere selvtilordning — den «håndlagde» veien før `copy-swap`.
- **Eksamensbelegg:** Kopisemantikk-hovedoppgave 2/3. Implementer deep copy eksplisitt. Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** **Kopikonstruktør** `Navn(const Navn& other) : n(other.n), data(new int[other.n]) { for(...) data[i]=other.data[i]; }` (allokér eget minne, kopiér innhold — `const&`-parameter er påkrevd); **tilordningsoperator** `Navn& operator=(const Navn& other)` med fire steg: (1) **selvtilordningssjekk** `if (this == &other) return *this;`; (2) frigi gammelt minne (`delete[] data;`); (3) allokér nytt + kopiér; (4) **`return *this;`** (return-by-reference for kjeding `a=b=c`); **hvorfor `const&`-parameter** (unngå kopi + ikke endre kilden); **hvorfor `Navn&` retur** (return-by-reference, kjeding). `theorem`-idiom: **deep-copy-malen**. `warning` (**sentral**): glemme selvtilordningssjekk (`a = a` frigir eget minne før kopiering → krasj); glemme å frigi gammelt minne før ny allokering (lekkasje); returnere by value i stedet for `Navn&`.
- **Oppgavesjangre:** A + E. Mønstereksempel: «Skriv kopikonstruktør og `operator=` for `Tekstbuffer` (som eier `char* data`). Vis alle fire stegene i `operator=` og forklar hvorfor selvtilordningssjekken trengs.»
- **Typiske feil:** Glemt selvtilordningssjekk (§5.11-nær); glemt frigjøring av gammelt minne (lekkasje); shallow kopi (bare kopiere pekeren); returnere by value fra `operator=`; ikke-`const` parameter.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 4.3: `copy-swap`-idiomet

- **id:** `tdt4102-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4102-4-2` · **kapitteltype:** teori
- **description:** Det eleganteste kopimønsteret, som sensor eksplisitt roser: ta argumentet **by value** (kopieres via kopikonstruktøren), **`swap`** medlemmene med kopien, og `return *this` — én implementasjon som automatisk håndterer både selvtilordning og unntakssikkerhet.
- **Eksamensbelegg:** `copy-swap` eksplisitt rost i sensorkommentar («håndterer selvtilordning og unntakssikkerhet»). Del av kopisemantikk-hovedoppgave. Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** **`copy-swap`-idiomet:** `Navn& operator=(Navn rhs) { swap(*this, rhs); return *this; }` — parameteren tas **by value** (kopien lages av kopikonstruktøren *før* kroppen), man `swap`-er medlemmene (`std::swap(data, rhs.data); std::swap(n, rhs.n);`), og `rhs` (nå med gammelt minne) destrueres automatisk ved retur; **hvorfor det virker:** selvtilordning er trygt (man bytter med en kopi), unntakssikkert (allokeringen skjer i kopieringen før noe endres), og gjenbruker kopikonstruktør + destruktør (mindre kode); en egen **`swap`-medlemsfunksjon** eller frittstående `swap` som bytter medlemmene; sammenlign med den håndlagde firestegs-`operator=` fra 4.2 (begge gir full uttelling — sidestilt). `theorem`-idiom: **`copy-swap`-idiomet**. `warning`: `swap` må bytte ALLE medlemmene (glemt et felt → inkonsistent tilstand); ikke ta `rhs` by reference (da mister man kopien som er hele poenget).
- **Oppgavesjangre:** A + E. Mønstereksempel: «Skriv `operator=` for `Tallfølge` med `copy-swap`-idiomet. Forklar med egne ord hvordan det tar seg av selvtilordning og unntakssikkerhet uten en eksplisitt `if (this == &other)`.»
- **Typiske feil:** Ta `rhs` by reference (ødelegger idiomet); glemme et medlem i `swap` (inkonsistent); ikke forstå at kopien lages av parameteroverføringen; skrive både `copy-swap` og manuell firestegs samtidig (velg én).
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 4.4: Referansetelling og delt (shallow) eierskap

- **id:** `tdt4102-4-4` · **number:** 4.4 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4102-4-2`, `tdt4102-3-4` · **kapitteltype:** teori
- **description:** Det andre kopidesignet: delt (shallow) data med **referansetelling** — en `use`-teller som teller opp ved kopiering, ned ved destruksjon, og frigir minnet når den når 0. Krever ofte **peker-til-peker** for delt liste-hode (`first`/`last`). Alternativet til deep copy når deling er ønsket.
- **Eksamensbelegg:** Shallow copy m/ referansetelling eksplisitt (2015-kont oppg. 3: deep vs. shallow). Peker-til-peker for delt `first`/`last` (§5.11). Prioritet: **perfekt** (differensierende — det vanskeligste enkelt-mønsteret).
- **Kodekontrakt (API- og konstruksjonsliste):** **Referansetelling:** delt data + `int* use` (delt teller); **konstruktør** `use = new int(1)`; **kopikonstruktør** deler pekerne og `++(*use)`; **destruktør** `if (--(*use) == 0) { delete[] data; delete use; }`; **tilordning** teller ned den gamle, opp den nye (rekkefølge!); **peker-til-peker for delt struktur:** når flere objekter deler en liste og `first`/`last` må kunne endres av alle, holdes de som `Node**` (delt) — ellers ser ikke de andre objektene endringen (§5.11); **deep vs. shallow — valget:** deep = uavhengige kopier (trygt, men kopieringskostnad); shallow m/ telling = delt data (billig, men delte endringer synlige for alle). `theorem`-idiom: **referansetelling-malen**. `warning` (**sentral**): shallow copy uten `T**` der delt `first`/`last` må endres av flere (delingen går tapt, §5.11); feil rekkefølge i tilordning (ned gammel før opp ny, ellers feil ved selvtilordning); glemme å `delete use` når telleren når 0.
- **Oppgavesjangre:** A + E. Mønstereksempel: «Lag `DeltBuffer` med referansetelling: to `DeltBuffer` som kopierer hverandre skal dele samme `char*`-data via en `int* use`. Skriv konstruktør, kopikonstruktør og destruktør. Forklar hvorfor `use` er en peker (delt), ikke en `int`.»
- **Typiske feil:** `use` som `int` i stedet for `int*` (ikke delt → telling virker ikke); frigi data mens andre fortsatt bruker det (telte ikke riktig); shallow uten `T**` for delt hode (§5.11); minnelekkasje av selve telleren.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 4.5: DRILL — Kopisemantikk (Del 4)

- **id:** `tdt4102-4-5` · **number:** 4.5 · **estimatedMinutes:** 85 · **prerequisites:** `tdt4102-4-4` · **kapitteltype:** drill
- **description:** Full drill på fagets vanskeligste tema: gitt en klasse som eier `new`-et minne, implementer hele Rule of Three — både som deep copy (kopikonstruktør + firestegs-`operator=` ELLER `copy-swap`) og som shallow copy med referansetelling — og begrunn valget. Der eksamen skiller kandidatene.
- **Eksamensbelegg:** Kopisemantikk-hovedoppgave (10–25 %, nesten alltid egen sluttdel). To parallelle klasser (deep vs. shallow) er et fast mønster (`ValArr`/`RefArr`). Prioritet: **perfekt** (MEST DRILL).
- **Kodekontrakt (løsningsoppskrift):** Algoritmisk fremgangsmåte: 1) **avgjør** — eier klassen `new`-et minne? Ja → Rule of Three; nei → standardkopi holder (begrunn); 2) **deep-varianten:** kopikonstruktør (allokér eget + kopiér) + `operator=` (fire steg ELLER `copy-swap`) + destruktør; 3) **shallow-varianten:** referansetelling (`int* use`, opp/ned, frigi ved 0), `T**` for delt hode; 4) **begrunn** valget deep vs. shallow (uavhengighet vs. deling/kostnad). Gjennomgått eksamenscase med **sensor-margnotater** (Rule of Three komplett; selvtilordning håndtert; `copy-swap` roses; deep/shallow-valg begrunnet; kompakt kode). 8–12 oppgaver på eksamensnivå — ofte **parvise** klasser (`ValArr`-erstatning `DypTabell` med deep vs. `DeltTabell` med telling), hver med kort fasit + begrunnelse.
- **Oppgavesjangre:** A, E, (F flagges). Mønstereksempel: «Gitt `DypTabell` (skal ha uavhengige kopier) og `DeltTabell` (skal dele data): implementer Rule of Three for begge — deep for den første (bruk gjerne `copy-swap`), referansetelling for den andre. Begrunn deep vs. shallow for hver.»
- **Typiske feil:** Hele §5-kopi-katalogen: §5.11 (shallow uten `T**`), glemt selvtilordning, glemt frigjøring av gammelt minne, shallow der deep trengs (dobbel-`delete`) eller motsatt, ufullstendig Rule of Three (mangler én av tre). Å skrive lang kode der `copy-swap` gir kort.
- **Quiz: 18 · Flashcards: 12**

---

### Del 5 — Operatoroverlasting *(operatoroverlasting: PERFEKT, 3/3)*

> Hele operatorkatalogen (3/3): medlem vs. frittstående (og «hvilke MÅ ha call-by-reference?»),
> sammenligning (`<`, `==`), aritmetikk (`+`, `+=`, `*`, `*=` med `reduce()`/normalisering og
> `return *this`), postfiks `++` (temp-kopi), `operator[]` (retur `int&`) og `operator<<` for
> `ostream`. Bygger på klasser (Del 2) og `const`/`&` (Del 1–2). Tre teorikapitler + drill (5.4).

#### Kapittel 5.1: Operatoroverlasting — medlem vs. frittstående, og call-by-reference

- **id:** `tdt4102-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4102-2-3` · **kapitteltype:** teori
- **description:** Hva operatoroverlasting er, når en operator skal være **medlem** (venstre operand er egen klasse, endrer tilstand: `+=`, `[]`) vs. **frittstående** (symmetriske/`<<`), og det eksplisitte spørsmålet «hvilke operatorer MÅ ha call-by-reference?» (de som må endre eller unngå kopi/kjeding).
- **Eksamensbelegg:** Operatoroverlasting 3/3. «Hvilke operatorer MÅ ha call-by-reference?» er eget spørsmål (2016/17 oppg. 1). Parameteroverføring for operatorer 3/3. Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** **Overlasting** `returtype operator@(parametre)` (`@` = operatoren); **medlem** `Navn operator+(const Navn& r) const` (venstre operand er `*this`); **frittstående** `Navn operator+(const Navn& a, const Navn& b)` (symmetrisk — begge operander som parametre; ofte `friend` for privat tilgang); **når medlem:** modifiserende operatorer (`+=`, `*=`, `=`, `[]`, `++`) og de som naturlig hører til objektet; **når frittstående:** `<<`/`>>` (venstre operand er `ostream`, ikke egen klasse) og symmetriske aritmetiske; **call-by-reference kreves** for: operatorer som **endrer** operanden (`+=` returnerer `Navn&`), `operator[]` (returnerer `int&` for å kunne endres), `operator<<` (`ostream&` inn og ut for kjeding), `operator=` (return-by-ref); **`const`** på ikke-modifiserende operatorer og deres parametre. `theorem`-idiom: (bruker parameteroverførings-valget fra 1.2). `warning`: skrive `<<` som medlem (venstre operand er `ostream`, går ikke); glemme `const` på ikke-modifiserende operator; returnere by value der by-ref kreves for kjeding.
- **Oppgavesjangre:** E + A. Mønstereksempel: «For `Pengebeløp`: hvilke av `+`, `+=`, `<<`, `[]` bør være medlem, og hvilke frittstående? Hvilke MÅ ha call-by-reference, og hvorfor?»
- **Typiske feil:** `operator<<` som medlem; glemme `const`; feil retur-type (by value der by-ref trengs); ikke vite hvilke operatorer som må endre operanden.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 5.2: Sammenligning og aritmetikk — `<`, `==`, `+`, `+=`, `*`, `*=`

- **id:** `tdt4102-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4102-5-1` · **kapitteltype:** teori
- **description:** Sammenligningsoperatorene (`<`, `==` — bl.a. for sortering/`std::sort`) og de aritmetiske (`+`, `+=`, `*`, `*=`), med to sentrale sensorkrav: modifiserende operatorer skal kalle **`reduce()`/normalisering** og **`return *this`**, og `operator*` bør **gjenbruke** `operator*=`.
- **Eksamensbelegg:** Aritmetiske operatorer + `<`/`==` 3/3. Sensor-sjekkliste for `*=`: `reduce()`, `return *this`, enkel implementasjon, gjenbruk. Manglende normalisering er en fast felle (§5.9). Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** **`operator<`** `bool operator<(const Navn& r) const` (for sortering — total orden); **`operator==`** `bool operator==(const Navn& r) const` (verdilikhet); **`operator+=`** `Navn& operator+=(const Navn& r) { …; normaliser(); return *this; }` (modifiserer `*this`, returnerer `Navn&`); **`operator+`** — **gjenbruk** `+=`: `Navn operator+(const Navn& r) const { Navn t = *this; t += r; return t; }` (returnerer ny verdi by value); tilsvarende **`operator*=`** og **`operator*`**; **`reduce()`/normalisering** — privat hjelpemetode som rydder tilstanden etter aritmetikk (forkort brøk / bær over ører / normaliser vinkel), kalles av hver modifiserende operator. `theorem`-idiom: **`*=`-og-gjenbruk-malen**. `warning` (**sentral**): glemme `reduce()`/normalisering etter aritmetikk (§5.9 — tilstanden blir ugyldig, f.eks. `4/8` ikke forkortet, `70` ører ikke båret over); glemme `return *this` i `+=`; ikke gjenbruke `+=` i `+` (duplisert kode).
- **Oppgavesjangre:** A + E. Mønstereksempel: «For `Pengebeløp` (kroner + ører): skriv `operator+=` som bærer over 100 ører til én krone (normalisering), og la `operator+` gjenbruke `+=`. Skriv `operator<` for sortering. Hvorfor må `+=` kalle normaliseringen og returnere `*this`?»
- **Typiske feil:** Glemt normalisering/`reduce()` etter aritmetikk (§5.9); glemt `return *this`; duplisere logikk i `+` i stedet for å gjenbruke `+=`; `operator<` som ikke gir total orden.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 5.3: Postfiks `++`, `operator[]` og `operator<<`

- **id:** `tdt4102-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4102-5-2` · **kapitteltype:** teori
- **description:** De tre «spesielle» operatorene: postfiks `++` (dummy `int`-parameter, returnerer verdien FØR inkrementering via en temp-kopi), `operator[]` (returnerer `int&` så elementet kan endres), og `operator<<` for `ostream` (frittstående, `ostream&` inn og ut).
- **Eksamensbelegg:** `operator<<` 3/3, `operator[]` med `int&` 3/3, postfiks `++` 2/3. Postfiks-fellen (returnere ny i stedet for gammel verdi) er fast (§5.6). Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** **Postfiks `++`** `Navn operator++(int) { Navn temp = *this; ++(*this); return temp; }` (dummy `int` skiller postfiks fra prefiks; returnér **temp** = verdien før — `int`-parameteren «er mindre viktig på eksamen»); **prefiks `++`** `Navn& operator++() { …; return *this; }` (returnér ny verdi by ref); **`operator[]`** `int& operator[](int i) { return data[i]; }` (returnér **referanse** så `a[i] = x` virker) + `const`-overlast `int operator[](int i) const` (lesing på `const`-objekt); **`operator<<`** `ostream& operator<<(ostream& os, const Navn& x) { os << …; return os; }` (frittstående, ofte `friend`; returnér `os` for kjeding `cout << a << b`); `boolalpha`/`endl` i utskrift. `theorem`-idiomer: **postfiks-`++`-malen**, **`operator[]`-malen**, **`operator<<`-malen**. `warning` (**sentral**): postfiks som returnerer ny verdi i stedet for temp (§5.6); `operator[]` som returnerer `int` (kopi) i stedet for `int&` (kan ikke tilordnes); `operator<<` som ikke returnerer `os` (bryter kjeding).
- **Oppgavesjangre:** A + C + E. Mønstereksempel: «Skriv postfiks `operator++` for en `Teller`-klasse. Spor: `Teller t(5); cout << t++ << ' ' << t;` — hva skrives ut? Skriv `int& operator[](int)` for `Tallfølge` og `friend ostream& operator<<`.»
- **Typiske feil:** Postfiks returnerer ny verdi (§5.6); `operator[]` returnerer verdi i stedet for `int&`; `operator<<` returnerer `void`/ikke `os` (ingen kjeding); glemme `const`-overlast av `[]`.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 5.4: DRILL — Operatorkatalogen (Del 5)

- **id:** `tdt4102-5-4` · **number:** 5.4 · **estimatedMinutes:** 80 · **prerequisites:** `tdt4102-5-3` · **kapitteltype:** drill
- **description:** Full drill på operatoroverlasting: gitt en verditype-klasse (`Rational`-slekten), implementer hele operatorkatalogen — `<`, `==`, `+`/`+=`, `*`/`*=` (med normalisering + gjenbruk), postfiks `++`, `operator[]`, `operator<<` — med riktig medlem/frittstående-valg og call-by-ref-begrunnelse.
- **Eksamensbelegg:** «Én klasse med operatoroverlasting» (20–45 %, svært sannsynlig). Full operatorkatalog + `const`/`&`-begrunnelse + template-avslutning. Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** Algoritmisk fremgangsmåte: 1) **medlem eller frittstående?** (modifiserende/`[]`/`++` → medlem; `<<` → frittstående/`friend`); 2) **call-by-ref?** (endring/kjeding/`[]` → ja); 3) modifiserende operator: normaliser (`reduce()`) + `return *this`; 4) `+`/`*` **gjenbruker** `+=`/`*=`; 5) postfiks `++`: temp-kopi, returnér gammel; 6) `[]`: returnér `int&` (+ `const`-overlast); 7) `<<`: `ostream&` inn/ut. Gjennomgått eksamenscase med **sensor-margnotater** (sjekklista `reduce()`/`return *this`/enkel/gjenbruk; postfiks returnerer temp; `<<` frittstående; kompakt kode). 8–12 oppgaver på eksamensnivå (`Pengebeløp`, `Vektor2D`, en egen `Rational`-erstatning `Brøk`), hver med kort fasit + medlem/ref-begrunnelse.
- **Oppgavesjangre:** A, E, (F flagges mot 8.3). Mønstereksempel: «Implementer for `Vektor2D`: `operator+`/`+=`, `operator*` (skalar), `operator==`, `operator[]` (retur `double&`) og `friend operator<<`. Begrunn medlem vs. frittstående og hvilke som må ha call-by-reference.»
- **Typiske feil:** Hele §5-operator-katalogen: §5.6 (postfiks), §5.9 (glemt normalisering), `[]` uten `int&`, `<<` som medlem eller uten `os`-retur, manglende gjenbruk av `*=` i `*`.
- **Quiz: 16 · Flashcards: 12**

---

### Del 6 — Arv, virtuelle funksjoner og polymorfi *(arv: PERFEKT/KUNNE, 2/3 tungt)*

> Arv (`: public`), `protected`, superkonstruktør via initialiseringsliste, **virtuelle funksjoner**
> og polymorfi, **`virtual`-destruktor** («hvorfor blir ikke subklassens destruktør kalt?») og
> **objektavskjæring (slicing)** — en ren C++-felle. Full arvedel i 2016/17 (Creature-hierarki),
> `virtual`-destruktor i 2015-ord. Tre teorikapitler + drill (6.4). Bygger på klasser (Del 2) og
> pekere/minne (Del 3).

#### Kapittel 6.1: Arv og `protected` — `: public Base`, `super`-konstruktør

- **id:** `tdt4102-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4102-2-3` · **kapitteltype:** teori
- **description:** Arv (`class Sub : public Base`), hva subklassen arver, `protected` (tilgjengelig for subklasser), og hvordan subklassens konstruktør kaller basisklassens konstruktør via **initialiseringslisten** (`: Base(args)`).
- **Eksamensbelegg:** Arv 2/3 tungt (Creature/Demon/Balrog). `protected` eksplisitt. Superkonstruktør via init-liste. Prioritet: **perfekt/kunne**.
- **Kodekontrakt (API- og konstruksjonsliste):** **`class Sub : public Base { … };`** (offentlig arv — «Sub er-en Base»); subklassen arver felt/metoder; **`protected`** (synlig for subklasser, ikke utad — for det subklasser må nå, mellomting mellom `private` og `public`); **superkonstruktør** `Sub::Sub(int a, int b) : Base(a), egetFelt(b) { }` (kall basiskonstruktøren først i initialiseringslisten); redefinere en arvet metode (utdypes med `virtual` i 6.2); tilgang til basens `protected`-medlemmer i subklassen. **Begrunnelsesmalen:** hvorfor `protected` (subklasser trenger tilgang, utsiden ikke). `theorem`-idiom: (bruker initialiseringsliste-malen). `warning`: glemme å kalle basiskonstruktøren i init-lista (feiler hvis basen ikke har standardkonstruktør); bruke `private`-felt fra basen direkte i subklassen (må være `protected` eller nås via metode).
- **Oppgavesjangre:** A + E + G. Mønstereksempel: «Lag `Figur` (basisklasse med `protected` navn) og `Sirkel : public Figur` med radius. Skriv `Sirkel`-konstruktøren som kaller `Figur`-konstruktøren. Hvorfor er navnet `protected` og ikke `private`?»
- **Typiske feil:** Glemme basiskonstruktør-kall i init-lista; forsøke å nå `private`-basefelt fra subklasse; forveksle `protected` og `private`; feil arverekkefølge (basen konstrueres først, destrueres sist).
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 6.2: Virtuelle funksjoner, polymorfi og `virtual`-destruktor

- **id:** `tdt4102-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4102-6-1`, `tdt4102-3-2` · **kapitteltype:** teori
- **description:** `virtual`-funksjoner og polymorfi (rett metode velges ut fra objektets *virkelige* type via en basispeker/-referanse), og det sentrale sensorspørsmålet: hvorfor en basisklasse med subklasser MÅ ha **`virtual`-destruktor** — ellers kalles ikke subklassens destruktør ved `delete` via basispeker (minnelekkasje).
- **Eksamensbelegg:** `virtual`-destruktor 3/3 («hvorfor blir ikke subklassens destruktør kalt?»). Virtuelle funksjoner/polymorfi 2/3. Prioritet: **perfekt** (`virtual`-destruktor er et fast E-spørsmål).
- **Kodekontrakt (API- og konstruksjonsliste):** **`virtual R m(...);`** i basen + redefinering i subklassen (`R m(...) override;`) — kall via `Base*`/`Base&` velger subklassens versjon (**dynamisk binding/polymorfi**); uten `virtual` velges basens versjon (statisk binding); **`override`** (kompilatorsjekk på at man faktisk redefinerer — anbefalt); **ren virtuell / abstrakt** `virtual R m(...) = 0;` (ingen kropp → abstrakt klasse, kan ikke instansieres — «pure virtual»); **`virtual`-destruktor** `virtual ~Base();` — MÅ være `virtual` når man `delete`-er en subklasse via `Base*`, ellers kalles bare basens destruktør (subklassens `new`-et minne lekker); polymorf bruk: `vector<Figur*>` med ulike subtyper, `for (Figur* f : figurer) f->tegn();`. **Begrunnelsesmalen:** hvorfor `virtual` (velg subtypens metode), hvorfor `virtual`-destruktor (rydd subtypen). `theorem`-idiom: **`virtual`-destruktor-malen**. `warning` (**sentral**): manglende `virtual`-destruktor → subklassens destruktør kalles aldri via basispeker → lekkasje (§5.3-analyse); redefinere uten `virtual` i basen (ingen polymorfi — statisk binding).
- **Oppgavesjangre:** A + D + E. Mønstereksempel: «`Figur` har `virtual double areal() const`. `Sirkel`/`Rektangel` redefinerer den. Finn feilen: en `Figur* f = new Sirkel(...); delete f;` lekker — hvorfor, og hva mangler i `Figur`? Forklar hva polymorfi betyr her.»
- **Typiske feil:** Manglende `virtual`-destruktor (§5.3 — lekkasje); redefinere uten `virtual` (statisk binding, feil metode kalles); instansiere en abstrakt klasse; glemme `override`; tro at Java-vaner (alt virtuelt by default) gjelder.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 6.3: Objektavskjæring (slicing)

- **id:** `tdt4102-6-3` · **number:** 6.3 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4102-6-2` · **kapitteltype:** teori
- **description:** Den rene C++-fellen: når et subklasseobjekt sendes/lagres **by value** som basistype, «skjæres» subklasse-delen bort og polymorfien tapes — og motgiften: ta/lagre objekter som `Base&` eller `Base*`, aldri by value.
- **Eksamensbelegg:** Slicing er en fast «finn feilen»-oppgave (2016/17: `duel(Creature, Creature)` by value). Ren C++-felle (umulig i Java). Prioritet: **perfekt** (differensierende feilgjenkjenning).
- **Kodekontrakt (API- og konstruksjonsliste):** **Objektavskjæring (slicing):** `void f(Base b)` som tar en `Base` **by value** — når man kaller `f(subObjekt)`, kopieres bare `Base`-delen, subklasse-feltene og den virtuelle oppførselen skjæres bort → alle subtyper «oppfører seg likt»; **motgift:** ta `Base&` (call-by-reference) eller `Base*` (peker) — da bevares den virkelige typen og polymorfien; samme ved lagring: `vector<Figur>` slicer, `vector<Figur*>` bevarer subtypene; `Base b = subObjekt;` slicer også (tilordning by value). `theorem`-idiom: **slicing-unngåelse**. `warning` (**sentral**): objekter i polymorf bruk må sendes/lagres som referanse eller peker, ALDRI by value (§5.4); en `vector<Base>` av subtyper slicer alle.
- **Oppgavesjangre:** D + E. Mønstereksempel: «Finn feilen: `void beskriv(Figur f) { cout << f.areal(); }` gir samme svar uansett figurtype. Hvorfor (slicing), og hvordan retter du signaturen?»
- **Typiske feil:** Ta polymorfe objekter by value (slicing, §5.4); lagre subtyper i `vector<Base>` i stedet for `vector<Base*>`; tro at `virtual` alene redder by-value-tilfellet (det gjør det ikke — må være ref/peker).
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 6.4: DRILL — Arvehierarki (Del 6)

- **id:** `tdt4102-6-4` · **number:** 6.4 · **estimatedMinutes:** 75 · **prerequisites:** `tdt4102-6-3` · **kapitteltype:** drill
- **description:** Full drill på arv: bygg et 2-nivås hierarki med abstrakt/virtuell basisklasse, `protected`-felt, superkonstruktør, redefinerte virtuelle metoder, `virtual`-destruktor, polymorf bruk via `vector<Base*>` — ofte kombinert med fil-innlesing og unntak — og unngå slicing.
- **Eksamensbelegg:** Full arvedel (20 %, 2016/17), ofte med fil-innlesing + unntak. Prioritet: **perfekt/kunne**.
- **Kodekontrakt (løsningsoppskrift):** Algoritmisk fremgangsmåte: 1) **basisklasse** med `protected`-felt + `virtual`-metoder (evt. `= 0` abstrakt) + **`virtual`-destruktor**; 2) **subklasser** `: public Base`, superkonstruktør i init-lista, `override` på virtuelle; 3) **polymorf beholder** `vector<Base*>` (peker — unngå slicing); 4) evt. les subtyper fra fil (bestem `type`-felt, `new` riktig subklasse) + kast unntak ved ugyldig; 5) `delete` alle via basispeker (virker fordi destruktør er `virtual`). Gjennomgått eksamenscase med **sensor-margnotater** (`virtual`-destruktor til stede; peker-beholder unngår slicing; superkonstruktør korrekt; polymorfi virker). 8–12 oppgaver på eksamensnivå (`Figur`-hierarki, `Konto`-hierarki, sensor-hierarki med fil-innlesing), hver med kort fasit + minnenotat.
- **Oppgavesjangre:** A, D, E, G. Mønstereksempel: «Bygg `Figur` (abstrakt, `virtual double areal() const = 0`, `virtual`-destruktor), `Sirkel` og `Rektangel`. Les figurer fra fil (`S 3` / `R 2 4`), lagre i `vector<Figur*>`, skriv sumareal, og `delete` alle. Hvorfor `vector<Figur*>` og ikke `vector<Figur>`?»
- **Typiske feil:** §5.3 (manglende `virtual`-destruktor → lekkasje), §5.4 (slicing via `vector<Figur>`), glemt superkonstruktør-kall, instansiere abstrakt klasse, glemt `delete` av peker-beholderen.
- **Quiz: 14 · Flashcards: 10**

---

### Del 7 — Unntakshåndtering *(unntak: PERFEKT, 3/3)*

> `try`/`catch`/`throw`, standardunntakene (`invalid_argument`, `bad_alloc`, `exception::what()`),
> rethrow (`throw;`) og validering som kaster — gjennomgående følgesvenn til klasser, datastruktur
> og minne (validering ved ugyldig indeks; rydde delvis allokert minne ved unntak). Ett teorikapittel
> + drill (7.2). Bygger på klasser (Del 2) og minne (Del 3).

#### Kapittel 7.1: Unntak — `try`/`catch`/`throw`, standardunntak og rethrow

- **id:** `tdt4102-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4102-2-2` · **kapitteltype:** teori
- **description:** Kaste unntak ved ugyldig tilstand/argument (`throw std::invalid_argument("...")`), fange dem (`try`/`catch`), standardunntakshierarkiet (`exception`/`what()`, `invalid_argument`, `out_of_range`, `bad_alloc`), og videresending (`throw;` rethrow) — apparatet som gjør validering og minne robust.
- **Eksamensbelegg:** Unntak 3/3 (validering kaster; rethrow `throw;` i minnedel). `bad_alloc` fra `new`. `invalid_argument`/`out_of_range` ved ugyldig indeks. Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** **`throw std::invalid_argument("melding")`** (kast unntak ved ugyldig argument — trenger `<stdexcept>`); **`try { … } catch (const std::exception& e) { cout << e.what(); }`** (fang og les meldingen via `what()`); **standardunntak:** `std::invalid_argument` (ugyldig argument), `std::out_of_range` (ugyldig indeks), `std::bad_alloc` (kastet av `new` ved tomt minne), `std::runtime_error`, alle under `std::exception` med `what()`; **fang spesifikk før generell** (`catch (const out_of_range&)` før `catch (const exception&)`); **rethrow** `catch (...) { rydd(); throw; }` (fang, rydd opp, videresend samme unntak — brukes for å frigi delvis allokert minne før feilen bobler opp); **kast ved ugyldig indeks** i `operator[]`/uthenting; unntak i konstruktør (destruktøren kalles IKKE for et halvferdig objekt → rydd manuelt eller bruk RAII-medlemmer). `warning` (**sentral**): svelge unntak stille (tomt `catch`); fange for generelt før spesifikt; ikke rydde delvis allokert minne før rethrow (lekkasje, §5.5); forveksle `throw` (kast) og `throws` (finnes ikke i C++).
- **Oppgavesjangre:** A + E. Mønstereksempel: «Gi `Tallfølge::operator[]` en indekssjekk som kaster `std::out_of_range`. Skriv en `main`-snutt som fanger unntaket og skriver `e.what()`. Hvorfor kaste et unntak i stedet for å returnere en feilverdi?»
- **Typiske feil:** Tomt/svelgende `catch`; fange for generelt før spesifikt; ikke rydde minne før rethrow (§5.5); glemme `<stdexcept>`; forvente Java-stil `throws`-deklarasjon.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 7.2: DRILL — Unntak og validering (Del 7)

- **id:** `tdt4102-7-2` · **number:** 7.2 · **estimatedMinutes:** 70 · **prerequisites:** `tdt4102-7-1` · **kapitteltype:** drill
- **description:** Full drill på unntak i praksis: valider argumenter/indekser ved å kaste riktige standardunntak, fang og håndter dem, og bruk rethrow til å rydde delvis allokert minne — kombinert med klasse- og datastrukturkode fra Del 2–3.
- **Eksamensbelegg:** Validering-som-kaster + rethrow i minnedel (3/3). Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** Algoritmisk fremgangsmåte: 1) **valider** argument/indeks → `throw` riktig standardunntak (`invalid_argument`/`out_of_range`); 2) **fang** spesifikt før generelt, les `what()`; 3) i allokerende konstruktør: hvis unntak etter delvis `new` → fang, `delete` det allokerte, `throw;` (rethrow); 4) aldri svelg unntak stille. Gjennomgått eksamenscase med **sensor-margnotater** (riktig unntakstype; spesifikk før generell; rydd før rethrow). 8–12 oppgaver på eksamensnivå (validert konstruktør, indeksert uthenting, delvis allokert 2D-tabell med rethrow), hver med kort fasit.
- **Oppgavesjangre:** A, D, E. Mønstereksempel: «Skriv en konstruktør for `Matrise(int r, int k)` som allokerer en dynamisk 2D-tabell, men som ved `bad_alloc` midtveis rydder de allerede allokerte radene og videresender unntaket (`throw;`). Forklar hvorfor opprydningen trengs.»
- **Typiske feil:** §5.5 (ikke rydde før rethrow → lekkasje), svelgende `catch`, generell før spesifikk, feil unntakstype, `throws` i stedet for `throw`.
- **Quiz: 14 · Flashcards: 10**

---

### Del 8 — STL og maler *(STL 2/3, templates 3/3 liten: PERFEKT/KUNNE)*

> Standardbibliotekets sekvenscontainere (`vector`/`list`/`deque`) med **valg og ytelse** (sentral
> sensorregel), `map`/iteratorer/range-based for, og **maler** (`template<typename T>` — «gjør
> klassen generisk», fast liten avslutnings-deloppgave på hvert sett). Tre teorikapitler + drill
> (8.4). Bygger på klasser/operatorer og datastruktur.

#### Kapittel 8.1: Sekvenscontainere — `vector`, `list`, `deque` og containervalg

- **id:** `tdt4102-8-1` · **number:** 8.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4102-2-1` · **kapitteltype:** teori
- **description:** STL-sekvenscontainerne og det sentrale sensorkravet: **velg riktig container og begrunn med ytelse** — `vector` (rask indeks, dyrt å sette inn/fjerne i front), `list` (rask innsetting/fjerning hvor som helst), `deque` (rask i begge ender). Med oversiktstabellen arkivet la ved.
- **Eksamensbelegg:** STL-containere 2/3 («hvorfor er `vector` dårlig her? bruk `list`/`deque`»). Containervalg-med-ytelse er sentral sensorregel. Prioritet: **perfekt** (valg + begrunnelse).
- **Kodekontrakt (API- og konstruksjonsliste):** **`vector<T>`** — dynamisk array, `push_back`/`pop_back` (O(1) amortisert), indeks `v[i]`/`at(i)` (O(1)), innsetting/fjerning i front dyrt (O(n) — flytter alt); **`list<T>`** — dobbeltlenket, `push_front`/`push_back`/`pop_*` (O(1)), ingen indeks (må traversere); **`deque<T>`** — rask i begge ender (`push_front`/`push_back` O(1)) + indeks; felles: `size()`, `empty()`, `front()`, `back()`, `clear()`, range-based for; **containervalg-regelen:** indeks/lesing → `vector`; innsetting/fjerning i endene → `deque`; innsetting/fjerning hvor som helst → `list`; **ytelsesbegrunnelsen er poenget** (ikke bare riktig svar). **Gjenskap arkivets oversiktstabell** over sekvenscontainere pedagogisk (container × operasjon → kostnad). `theorem`-idiom: **containervalg-malen**. `warning` (**sentral**): bruke `vector` der man stadig setter inn/fjerner i front (`list`/`deque` er riktig); indeksere en `list` (finnes ikke); velge container uten å begrunne ytelsen.
- **Oppgavesjangre:** E + A. Mønstereksempel: «Et køsystem legger til bakerst og fjerner forrest hele tiden. Hvorfor er `vector` et dårlig valg her, og hva bør du bruke i stedet? Begrunn med ytelse.»
- **Typiske feil:** `vector` der `list`/`deque` trengs for endehåndtering (§5.8); indeksere `list`; velge riktig container uten ytelsesbegrunnelse (mister poenget); glemme at `vector`-front-innsetting er O(n).
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 8.2: `map`, iteratorer og range-based for

- **id:** `tdt4102-8-2` · **number:** 8.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4102-8-1` · **kapitteltype:** teori
- **description:** `map<K,V>` for nøkkeloppslag (bl.a. ordtelling `m[ord]++`), iteratorer (`begin()`/`end()`, `it->`) og range-based for (`for (auto& x : c)`) — verktøyene for telling og traversering.
- **Eksamensbelegg:** `map` for ordtelling 1–2/3; iteratorer & range-based for 2/3 (`it->`, `front()`, `for (Rectangle& s : snake)`). Prioritet: **kunne** (`map`/iterator), **perfekt** (range-based for som daglig verktøy).
- **Kodekontrakt (API- og konstruksjonsliste):** **`map<K,V>`** — sorterte nøkkel-verdi-par: `m[nøkkel] = verdi`, `m[nøkkel]++` (oppretter med 0 hvis ny — idiom for telling), `m.count(nøkkel)`/`m.find(nøkkel)`, `m.at(nøkkel)`, traversér `for (auto& par : m) { par.first; par.second; }`; `unordered_map` (hashet, raskere, usortert — nevnes); **iteratorer** `auto it = c.begin(); it != c.end(); ++it`, `*it` (elementet), `it->felt` (medlem), `c.front()`/`c.back()`; **range-based for** `for (const auto& x : c)` (lesing) / `for (auto& x : c)` (endring) — foretrukket når du ikke trenger iteratoren selv; **`auto`** (kompilatoren utleder typen — nyttig for iterator-typer). `warning`: `m[nøkkel]` oppretter nøkkelen hvis den mangler (bruk `count`/`find` for å bare sjekke); endre en container mens du itererer over den (ugyldiggjør iteratorer); kopiere store elementer i range-for (bruk `const auto&`).
- **Oppgavesjangre:** B + A. Mønstereksempel: «Skriv `map<string,int> tellOrd(const vector<string>& ord)` med `m[o]++`. Skriv den mest brukte ordet ut. Traversér med range-based for.»
- **Typiske feil:** `m[nøkkel]` når man bare vil sjekke (oppretter uønsket nøkkel); endre container under iterasjon; kopiere i range-for i stedet for `const auto&`; forveksle `first`/`second` i map-par.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 8.3: Maler (templates) — `template <typename T>`

- **id:** `tdt4102-8-3` · **number:** 8.3 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4102-2-1` · **kapitteltype:** teori
- **description:** Generisk kode med maler: `template <typename T>` på funksjoner og klasser, hvordan «gjøre en klasse generisk» (den faste avslutnings-deloppgaven), og fallgruvene (alt i header, krav til `T`-operasjoner).
- **Eksamensbelegg:** Templates 3/3, men alltid liten («gjør om til template»-avslutning). Krever refleksjon over en fallgruve. Prioritet: **perfekt** (som liten fast avslutning), **kunne** (dypere).
- **Kodekontrakt (API- og konstruksjonsliste):** **Funksjonsmal** `template <typename T> T maks(T a, T b) { return a < b ? b : a; }` (`T` utledes av argumentene); **klassemal** `template <typename T> class Beholder { T* data; … };` (bytt konkret type med `T` i felt/metoder); **medlemsdefinisjon utenfor klassen** `template <typename T> T Beholder<T>::hent(int i) const { … }`; **instansiering** `Beholder<int> b;` (typen oppgis); **fallgruver:** all template-kode må ligge i header (kompileres ved instansiering, ikke separat); `T` må støtte operasjonene du bruker (f.eks. `<`, kopiering — «duck typing» på kompileringstid); `typename`/`class` er utbyttbare i `template`-hodet. `theorem`-idiom: (F-sjangeren — «gjør om til template»). `warning`: skille template-deklarasjon og -definisjon i separate filer (lenkefeil); bruke en operasjon på `T` som ikke alle typer støtter; glemme `<T>` på medlemsdefinisjoner utenfor klassen.
- **Oppgavesjangre:** F + A. Mønstereksempel: «Gjør `Tallfølge` (som holder `int`) om til `template <typename T> class Følge`. Vis klasse-deklarasjonen og én medlemsdefinisjon utenfor klassen, og nevn én fallgruve ved templates.»
- **Typiske feil:** Legge template-definisjon i `.cpp` (lenkefeil); glemme `template <typename T>` / `<T>` på medlemsdefinisjoner; bruke en operasjon `T` ikke støtter; forveksle med Java-generics (typesletting — C++ genererer kode per type).
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 8.4: DRILL — Containervalg og template (Del 8)

- **id:** `tdt4102-8-4` · **number:** 8.4 · **estimatedMinutes:** 75 · **prerequisites:** `tdt4102-8-3` · **kapitteltype:** drill
- **description:** Full drill på STL og maler: velg og begrunn container ut fra bruksmønster, bruk `map`/iteratorer/range-for, og gjør en konkret klasse generisk med `template` — den faste avslutningen på et klassekapittel.
- **Eksamensbelegg:** Containervalg-med-ytelse (2/3) + template-avslutning (3/3). Prioritet: **perfekt/kunne**.
- **Kodekontrakt (løsningsoppskrift):** Algoritmisk fremgangsmåte: 1) **containervalg** — analyser bruksmønster (indeks? ende-innsetting? nøkkeloppslag?) → velg + **begrunn ytelse**; 2) traversér med range-for / iterator; 3) `map[k]++` for telling; 4) **template-avslutning** — bytt konkret type med `T`, header-only, nevn fallgruve. Gjennomgått eksamenscase med **sensor-margnotater** (ytelsesbegrunnelse teller; kompakt bruk av STL; korrekt template-syntaks). 8–12 oppgaver på eksamensnivå (velg container for gitt scenario + begrunn; gjør en Del 2/3-klasse generisk), hver med kort fasit + begrunnelse.
- **Oppgavesjangre:** E, B, F. Mønstereksempel: «(a) Et system trenger rask innsetting i begge ender — velg container og begrunn. (b) Tell ord med `map`. (c) Gjør `Følge`-klassen generisk med `template <typename T>` og nevn én fallgruve.»
- **Typiske feil:** §5.8 (feil container), containervalg uten ytelsesbegrunnelse, template-definisjon i `.cpp`, `m[k]` som oppretter uønsket nøkkel, kopiering i range-for.
- **Quiz: 14 · Flashcards: 10**

---

### Del 9 — Eksamenstrening

> Tre komplette 4-timers papirsett, hvert med 3–4 hoveddeler à 10–45 % rundt ett nyskrevet
> domenecase, etter arkivets faglige stige: én klasse med operatorer → prosedyre/kodesporing →
> datastruktur med rå pekere → minne/kopisemantikk (tyngst, sist) → arv, med en fast liten
> template-deloppgave. Les HELE skjelettet før du skriver dem. Løsningsforslag i eget `collapsible`
> per deloppgave (kort idiomatisk C++ + begrunnelse), med `tip`-notat om delpoeng/vekting og at
> deloppgaver kan løses uavhengig.

#### Kapittel 9.1: Øvingseksamen 1 — klasse/operatorer + minne (`Pengebeløp`/`Tallfølge`)

- **id:** `tdt4102-9-1` · **number:** 9.1 · **estimatedMinutes:** 240 · **prerequisites:** `tdt4102-8-4` · **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers sett rundt et verdiobjekt-domene (`Pengebeløp`) og en dynamisk datastruktur (`Tallfølge`): Del A én klasse med full operatorkatalog (40 %), Del B prosedyre + kodesporing (25 %), Del C datastruktur med rå pekere + destruktør (20 %), Del D kopisemantikk deep vs. shallow (15 %), med template-avslutning.
- **Eksamensbelegg:** Speiler 2015-ord-profilen (`Rational`-klasse m/operatorer tungt + minne). Prioritet: **perfekt** (integrerende).
- **Kodekontrakt:** Nyskrevne oppgaver i sjangrene A–F med vekting ≈ 40/25/20/15. Løsningsforslag som A-besvarelse (kompakt), med sensor-`tip` per del (hva gir uttelling; `reduce()`/`return *this`/`virtual`-destruktor/deep der relevant; deloppgaver uavhengige).
- **Oppgavesjangre:** A, B, C, E, F (+ D-moment). Mønstereksempel-miks: `Pengebeløp` med `+`/`+=`/`==`/`<`/`<<`/`[]` + `static`-fabrikk; prosedyre-kjede + kodesporing (heltallsdivisjon/postinkrement); `Tallfølge` med `new`/`delete`/indekssjekk; Rule of Three (deep, `copy-swap`); «gjør `Tallfølge` generisk».
- **Typiske feil:** §5-katalogen samlet: heltallsdivisjon, postfiks, glemt normalisering, dinglende peker, manglende destruktør, shallow-`delete`. Å bruke for mye tid på Del A og ikke rekke minnedelen (Del D).
- **Quiz: 10 · Flashcards: 6**

#### Kapittel 9.2: Øvingseksamen 2 — prosedyre/brett + arv (`lysrutenett`/`Figur`)

- **id:** `tdt4102-9-2` · **number:** 9.2 · **estimatedMinutes:** 240 · **prerequisites:** `tdt4102-9-1` · **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers sett rundt et 2D-brett-domene (lysrutenett) og et arvehierarki (`Figur`): Del A prosedyre + kodesporing + `enum`/2D-brett (35 %), Del B `operator<<` + `main`/spilløkke (20 %), Del C arv med `virtual`/`protected`/slicing + fil-innlesing + unntak (30 %), Del D minne/kopisemantikk med referansetelling (15 %).
- **Eksamensbelegg:** Speiler 2016/17-profilen (fire-på-rad-brett + Creature-arv + minne). Prioritet: **perfekt/kunne**.
- **Kodekontrakt:** Nyskrevne oppgaver i sjangrene B–G med vekting ≈ 35/20/30/15. Løsningsforslag som A-besvarelse, sensor-`tip` per del (slicing unngått; `virtual`-destruktor; rethrow-opprydning; containervalg begrunnet).
- **Oppgavesjangre:** B, C, D, E, G (+ A/F-moment). Mønstereksempel-miks: brettfunksjoner over `int[8][8]` + `enum Retning` + kodesporing; `operator<<` for brett + spilløkke; `Figur`/`Sirkel`/`Rektangel` lest fra fil i `vector<Figur*>` med `virtual`-destruktor; `DeltBuffer` med referansetelling.
- **Typiske feil:** §5.3 (`virtual`-destruktor), §5.4 (slicing), §5.5 (rethrow-lekkasje), §5.8 (container), 2D-indeksering. Å hoppe over minnedelen.
- **Quiz: 10 · Flashcards: 6**

#### Kapittel 9.3: Øvingseksamen 3 — lenket liste + full kopisemantikk (`Spilleliste`/`DeltListe`)

- **id:** `tdt4102-9-3` · **number:** 9.3 · **estimatedMinutes:** 240 · **prerequisites:** `tdt4102-9-2` · **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers sett med tyngdepunkt på datastruktur og kopisemantikk (fagets vanskeligste): Del A klasse med operatorer + `const`-korrekthet (25 %), Del B egendefinert lenket liste med `friend`/iterator/unntak (35 %), Del C full kopisemantikk deep vs. shallow med `copy-swap` OG referansetelling + `T**` (30 %), Del D template + kodesporing (10 %). Sier eksplisitt at minne/kopi er der kandidatene skilles.
- **Eksamensbelegg:** Speiler 2015-kont-profilen (dobbelt-lenket liste `DynamicMultiArray`/`RowNode` + full minnedel). Prioritet: **perfekt** (fagets tyngste integrasjon).
- **Kodekontrakt:** Nyskrevne oppgaver i sjangrene A–F med vekting ≈ 25/35/30/10. Løsningsforslag som A-besvarelse, sensor-`tip` per del (Rule of Three komplett; `copy-swap`/referansetelling; `T**` for delt hode; selvtilordning; kompakt kode belønnes over avskrift).
- **Oppgavesjangre:** A, B, C, E, F (+ D-moment). Mønstereksempel-miks: `Tidsintervall` med operatorer + `const`; `Spilleliste` (lenket liste av `Node`) med `friend`, indeksuthenting som kaster, iterator; deep-`DypListe` (`copy-swap`) vs. shallow-`DeltListe` (referansetelling + `T**`); «gjør `Spilleliste` generisk» + kodesporing (peker-swap/rekursjon).
- **Typiske feil:** §5.11 (shallow uten `T**`), §5.2 (dinglende), §5.5 (lekkasje), glemt selvtilordning, ufullstendig Rule of Three. Å skrive langt der `copy-swap` gir kort.
- **Quiz: 10 · Flashcards: 6**

---

## 5. Kvotesammendrag (AUTORITATIV)

Denne tabellen er **fasit for alle senere faser** (byggekontrakt, byggebølge, verifisering).
Ikke overstyr i prompt. Quiz kalibreres som **kodesporing (C) / finn-feilen (D) / begrunnelse (E)
/ konstruksjons-MC** (§1-avvik) — `options[0]` = riktig svar. Flashcards fra toppnivå
`definition`-blokker (API-/konstruksjons-/begrepskort). **Kodesporing gjør quiz til reell
eksamenstrening**, derfor er quiz-taket høyt; flashcard-taket er høyt fordi faget er svært
konstruksjonsrikt.

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 — Eksamenskart og kodehåndverk | 0.1, 0.2 | 38 | 34 |
| 1 — C++-grunnlag og prosedyre | 1.1–1.5 | 92 | 94 |
| 2 — Klasser og objekter | 2.1–2.4 | 74 | 80 |
| 3 — Pekere og dynamisk minne | 3.1–3.5 | 100 | 102 |
| 4 — Kopisemantikk | 4.1–4.5 | 94 | 96 |
| 5 — Operatoroverlasting | 5.1–5.4 | 68 | 74 |
| 6 — Arv, virtuelle funksjoner og polymorfi | 6.1–6.4 | 62 | 66 |
| 7 — Unntakshåndtering | 7.1–7.2 | 32 | 32 |
| 8 — STL og maler | 8.1–8.4 | 64 | 68 |
| 9 — Eksamenstrening | 9.1–9.3 | 30 | 18 |
| **SUM** | **38 kapitler** | **654** | **664** |

**Summeringskontroll:** Quiz 38+92+74+100+94+68+62+32+64+30 = **654** (≥500 ✓). Flashcards
34+94+80+102+96+74+66+32+68+18 = **664** (≥500 ✓, mål 640–680). Tyngdepunktet ligger på Del 3
(dynamisk minne, ryggrad — 100/102) og Del 4 (kopisemantikk, vanskeligst — 94/96), i tråd med
prioriteringen i EKSAMENSANALYSE §7.

---

## 6. Prøver (4 per temadel)

Hver prøve er nyskrevne oppgaver i eksamens sjangre (A–G), med løsningsforslag (kort idiomatisk
C++ + begrunnelse) og poengfordeling. Prøvekapitler bygges som `tdt4102-<del>-prove`
(chapterNumber `<del>.P`) etter plattformmønsteret, eller som egne exercise-seksjoner i delens
drillkapittel. Del 0 (meta) og Del 9 (som ER eksamenene) får ikke egne prøver.

**Prøve-kvote Del 1:** 4 prøver (C++-grunnlag og prosedyre)
1. Prøve 1.A (25 min): Typer/kontrollflyt + **heltallsdivisjon/`static_cast`** + kodesporing (sjanger B, C).
2. Prøve 1.B (30 min): Funksjoner + **parameteroverføring** verdi/`&`/`const&`/peker + begrunnelse (sjanger B, E).
3. Prøve 1.C (25 min): C-arrays/2D-brett + `enum` + `using` (sjanger B).
4. Prøve 1.D (40 min): Full Del 1 — kjedede frittstående funksjoner over array/streng + kodesporing (sjanger B, C).

**Prøve-kvote Del 2:** 4 prøver (klasser og objekter)
1. Prøve 2.A (30 min): Klasse med felt/konstruktør m/ **initialiseringsliste** + `const`-medlemsfunksjoner (sjanger A).
2. Prøve 2.B (25 min): **`const`-korrekthet på tre posisjoner** — forklar + bruk (sjanger E, A).
3. Prøve 2.C (25 min): `static` (fabrikk/teller/konstant) + `friend` + begrunnelse (sjanger A, E).
4. Prøve 2.D (40 min): Full Del 2 — komplett innkapslet klasse (`Tidsintervall`) med init-liste, `const`, `static`, `friend`.

**Prøve-kvote Del 3:** 4 prøver (pekere og dynamisk minne)
1. Prøve 3.A (30 min): Pekere/referanser + `nullptr` + **peker-swap-kodesporing** (sjanger A, C).
2. Prøve 3.B (35 min): `new`/`delete`/`new[]`/`delete[]` + destruktør + **RAII** (sjanger A, E).
3. Prøve 3.C (30 min): **Dinglende peker/lekkasje — finn feilen** + peker-til-peker/2D (sjanger D, A).
4. Prøve 3.D (45 min): Full Del 3 — datastruktur med rå pekere (`Tallfølge`/lenket liste), konstruktør/destruktør/indekssjekk.

**Prøve-kvote Del 4:** 4 prøver (kopisemantikk)
1. Prøve 4.A (30 min): **Rule of Three** + deep vs. shallow — «trengs kopikonstruktør her?» (sjanger E, A).
2. Prøve 4.B (35 min): Kopikonstruktør + firestegs-`operator=` (deep) + selvtilordning (sjanger A).
3. Prøve 4.C (30 min): **`copy-swap`-idiomet** + forklar hvordan det håndterer selvtilordning/unntak (sjanger A, E).
4. Prøve 4.D (45 min): Full Del 4 — **referansetelling** med `T**` for delt hode + deep vs. shallow-valg begrunnet.

**Prøve-kvote Del 5:** 4 prøver (operatoroverlasting)
1. Prøve 5.A (25 min): Medlem vs. frittstående + **hvilke MÅ ha call-by-reference?** (sjanger E, A).
2. Prøve 5.B (30 min): `<`/`==`/aritmetiske med **`reduce()`/normalisering** + `*` gjenbruker `*=` (sjanger A).
3. Prøve 5.C (30 min): **Postfiks `++`** (temp-kopi) + `operator[]` (`int&`) + `operator<<` (sjanger A, C).
4. Prøve 5.D (40 min): Full Del 5 — hele operatorkatalogen for en verditype (`Vektor2D`/`Brøk`) + begrunnelse.

**Prøve-kvote Del 6:** 4 prøver (arv, virtuelle funksjoner og polymorfi)
1. Prøve 6.A (30 min): Arv + `protected` + superkonstruktør i init-liste (sjanger A, E).
2. Prøve 6.B (35 min): **Virtuelle funksjoner + `virtual`-destruktor** — «hvorfor kalles ikke destruktøren?» (sjanger D, E).
3. Prøve 6.C (25 min): **Slicing — finn feilen** + motgift (ref/peker) (sjanger D, E).
4. Prøve 6.D (40 min): Full Del 6 — arvehierarki (`Figur`) med `virtual`-destruktor + `vector<Base*>` + fil-innlesing.

**Prøve-kvote Del 7:** 4 prøver (unntakshåndtering)
1. Prøve 7.A (25 min): `try`/`catch`/`throw` + standardunntak + `what()` (sjanger A, E).
2. Prøve 7.B (30 min): Validering-som-kaster (`invalid_argument`/`out_of_range` ved ugyldig indeks) (sjanger A).
3. Prøve 7.C (30 min): **Rethrow (`throw;`)** — rydd delvis allokert minne før videresending (sjanger A, D).
4. Prøve 7.D (35 min): Full Del 7 — validert allokerende konstruktør med opprydning + fangst i `main`.

**Prøve-kvote Del 8:** 4 prøver (STL og maler)
1. Prøve 8.A (30 min): **Containervalg med ytelsesbegrunnelse** (`vector` vs. `list`/`deque`) (sjanger E, A).
2. Prøve 8.B (25 min): `map` (ordtelling `m[k]++`) + iteratorer + range-based for (sjanger B).
3. Prøve 8.C (30 min): **Maler** — gjør en klasse generisk (`template <typename T>`) + fallgruve (sjanger F).
4. Prøve 8.D (35 min): Full Del 8 — velg/begrunn container + `map`-telling + template-avslutning på en Del 3-klasse.

Til sammen dekker de 32 prøvene + 3 øvingseksamenene samtlige sjangre A–G flere ganger, med
tyngdepunkt på minne (Del 3), kopisemantikk (Del 4) og operatorer (Del 5).

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — én skriftlig skoleeksamen (4 t, 100 %, papir, lærebok tillatt), 3–4
   hoveddeler à 10–45 % rundt ett domenecase, at oppgaven er **hybrid** (implementer kode +
   kodesporing + finn feilen + kort teori), ingen flervalg/diagram, og at **minnedelen nesten
   alltid er sist og tyngst** (fra kap. 0.1). Evidensforbeholdet (kalibrering på 3 sett; dagens
   form `(verifiser)`).
2. **Prioriteringskartet** — temafrekvensen omgjort til tre lesenivåer: **perfekt** (Del 3
   dynamisk minne + Del 4 kopisemantikk — der kandidatene skilles; Del 2 klasser, Del 5
   operatorer, Del 1 parameteroverføring, Del 6 `virtual`-destruktor/slicing, Del 7 unntak),
   **kunne** (STL-containervalg, `map`/iteratorer, `const`-korrekthet i dybden, `friend`,
   fil-I/O), **kjenne** (`static`-detaljer, `rand()`, enkel GUI/testing, `unordered_map`).
3. **Sjangerguiden** — de 7 oppgavetypene A–G med løsningsoppskriftene fra drillkapitlene (1.5,
   2.4, 3.5, 4.5, 5.4, 6.4, 7.2, 8.4) i kortform, inkl. **kodesporings-** og
   **finn-feilen-**sjekklistene fra kap. 0.2.
4. **Idiomarket** — de 17 kode-/minnemålene (§3b) på ett oppslag, med **Rule of Three**,
   **`copy-swap`-idiomet** og **referansetelling-malen** fremhevet (de differensierende).
5. **Sensorreglene** — de fem reglene (teknikk > syntaks; kompakt egen løsning > avskrift; manuell
   minnehåndtering/RAII/Rule of Three; `const`/`&` begrunnes; containervalg begrunnes) +
   begrunnelseskravet (E-sjangeren) + metareglene (skriv bare det oppgaven ber om; `include`/`;`/
   norske bokstaver teller ikke; deloppgaver kan løses uavhengig; svar på riktig nivå
   implementer/deklarer/vis).
6. **Feilkatalogen** — de 11 typiske feilene (§5 i analysen) samlet, hver med henvisning til
   kapitlet som forebygger den: heltallsdivisjon (1.1), dinglende peker (3.3), glemt
   `virtual`-destruktor (6.2), slicing (6.3), minnelekkasje/dobbel-`delete` (3.2/3.3), feil
   postfiks (5.3), `=`/`==` og `=!` (0.2/1.1), feil container (8.1), glemt normalisering (5.2),
   `static`/`friend` misforstått (2.3), shallow uten `T**` (4.4).
7. **C++/Java-arket** — kontrasttabellen (§8 i analysen) for lesere fra TDT4100/Java: minnet ordner
   seg IKKE selv; Rule of Three; rå pekere; operatoroverlasting; `const`-korrekthet; eksplisitt
   `virtual`; slicing; prosedyre-halvdel.
8. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant): Del 1 (grunnlag) →
   Del 2 (klasser) → **Del 3 (dynamisk minne — bruk mye tid) → Del 4 (kopisemantikk — mest tid,
   der poengene skilles)** → Del 5 (operatorer) → Del 6 (arv) → Del 7 (unntak) → Del 8 (STL/
   templates) → prøvene underveis → de tre øvingseksamenene de siste ukene under tidspress
   (240 min). Nivå-3-stoff (GUI/testing) leses lett; prioritér minne/kopisemantikk.

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `tdt4102` med alle 38 kapitler
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites/
   linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`;
   `sectionNames` fra §2-tabellen (obligatorisk). **`number` er del-basert («3.2»), ALDRI lineær**
   (JUS1111-lærdommen — bokforsiden grupperer på `number.split('.')[0]`); prosareferanser i
   innholdet bruker samme form («kap. 3.2»).
2. **Del 0** (kap. 0.1–0.2) — etablerer sjangernavnene A–G, idiomkatalogen, frekvenstallene, de
   fem sensorreglene og de tre tverrgående sjangrene (kodesporing/finn-feilen/begrunn-valget) som
   resten refererer til; skriv EVIDENSFORBEHOLDET (3 sett, indikativt) tydelig.
3. **Delene i avhengighetsrekkefølge**: Del 1 (grunnlag/prosedyre — kreves av alt) → Del 2 (klasser)
   → **Del 3 (dynamisk minne, ryggrad; bygger på 3.1/2.2)** → **Del 4 (kopisemantikk; bygger på
   3.2/3.4)** → Del 5 (operatorer; bygger på 2.3/1.2) → Del 6 (arv; bygger på 2.3/3.2) → Del 7
   (unntak; bygger på 2.2/3.2) → Del 8 (STL/templates; bygger på 2.1). Bygg tyngst i Del 3–4.
4. Del 9 (øvingseksamenene til slutt — de gjenbruker alle sjangrene; les HELE skjelettet før du
   skriver dem).
5. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert; prøvene (§6) legges
   i respektive delers prøvekapittel/exercise-seksjoner.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (escape `"` i
  norske sitattegn OG i C++-strenger som `"pris kan ikke være negativ"`); `npm run build` grønn.
- [ ] **Minnehåndtering-ryggraden**: hvert kapittel som allokerer dynamisk (Del 3, 4, 6, 7) har
  `warning` om lekkasje/dobbel-`delete`; `new`↔`delete`/`new[]`↔`delete[]`-parvishet og RAII står
  som `theorem`; Rule of Three står ordrett som `theorem` i 4.1 og driller i 4.5.
- [ ] **De fem sensorreglene** finnes som `warning`/`tip` der de hører hjemme: (1) teknikk >
  syntaks (0.1, 0.2); (2) kompakt egen løsning > avskrift (0.1, alle drill); (3) manuell
  minnehåndtering/RAII (3.2, 3.3, 4.x); (4) `const`/`&` begrunnes (1.2, 2.3, 5.1); (5) containervalg
  begrunnes (8.1).
- [ ] **`copy-swap`-idiomet + referansetelling** står som `theorem` (4.3, 4.4), driller i 4.5, med
  `warning` om shallow uten `T**` (§5.11) og manglende selvtilordningshåndtering.
- [ ] **`virtual`-destruktor + slicing** dekket eksplisitt (6.2, 6.3) som `theorem` + `warning` +
  «finn feilen»-oppgaver; begrunnelsen «hvorfor kalles ikke subklassens destruktør» er E-oppgave.
- [ ] **De to spesialsjangrene**: «hva skrives ut?»-kodesporing (C) og «finn feilen» (D) etablert i
  0.2 og driller i minst 1.5, 3.3, 3.5, 5.3, 6.2, 6.3 — med de innbygde fellene (heltallsdivisjon,
  postinkrement, peker-swap, dinglende, `=!`, manglende `virtual`, slicing).
- [ ] **De 11 klassiske fellene** (§5) finnes som `warning` i angitt kapittel (se studieguide §6).
- [ ] **API- og konstruksjonsliste per delkapittel**: hvert delkapittel har `collapsible` «API- og
  konstruksjonsliste» rett etter Forkunnskaper, som forklarer ALLE C++-konstruksjoner brukt i
  delkapitlet med **når/hvorfor**, ikke signaturpugg (lærebok tillatt — «tren bruk»); per
  delkapittel, ikke arv fra tidligere.
- [ ] **Kryssbok-lenker**: interne TDT4102-lenker (`[tittel](/bok/tdt4102/<id>)`) peker kun på
  kapitler som finnes; forgjenger TDT4110 og søster TDT4100 refereres som **klartekst med
  aktiveringsmarkør** (`[aktiver lenke /bok/tdt4110/<id> når TDT4110 er bygget]` /
  `[aktiver lenke /bok/tdt4100/<id> når TDT4100 er bygget]`), aldri som live lenke.
- [ ] **Idiomkatalogen (§3b)**: de 17 kode-/minnemålene finnes som `theorem`-blokker i angitte
  kapitler og gjentas i drill/studieguide.
- [ ] **Begrunnelse i løsningsforslag**: alle løsningsforslag (drill + øvingseksamener) markerer hva
  som gir uttelling steg for steg, at riktig teknikk belønnes selv med detaljfeil («ikke viktig å
  huske bibliotekssyntaks eksakt»), at deloppgaver kan løses uavhengig, og at kompakte egne
  løsninger belønnes over bok-avskrift.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra dette
  skjelettet), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger med
  `solution` + `hints`, repetisjons-`collapsible`; drillkapitler (1.5, 2.4, 3.5, 4.5, 5.4, 6.4,
  7.2, 8.4) har løsningsoppskrift + sensor-kommentert case + 8–12 oppgaver.
- [ ] **Quiz-sum ≥ 654 og flashcard-sum ≥ 664** per kvotetabellen (§5); quiz kalibrert som
  kodesporing/finn-feilen/begrunnelse/konstruksjons-MC, `options[0]` = riktig svar.
- [ ] **Prøver**: 4 per temadel 1–8 (32 stk) + 3 øvingseksamener (kap. 9.1–9.3) som sammen dekker
  sjangrene A–G flere ganger.
- [ ] **Domenecase i øvingseksamenene**: kap. 9.1–9.3 følger arkivets faglige stige (klasse/
  operatorer → prosedyre/kodesporing → datastruktur m/pekere → minne/kopisemantikk tyngst sist →
  arv), over nyskrevne domener (`Pengebeløp`/`Tallfølge`, lysrutenett/`Figur`, `Spilleliste`/
  `DeltListe`), med template-avslutning og delpoeng-`tip` per del.
- [ ] **EVIDENSFORBEHOLD synlig**: Del 0 (og kap. 0.1) sier eksplisitt at kalibreringen bygger på
  3 sett (indikativt, ikke statistisk), at arkivet er papirbasert t.o.m. ~2017, og at dagens
  eksamensform (IDE-/kodebasert?) er `(verifiser)`; usikre detaljer merkes `(verifiser)`.
- [ ] **C++/Java-kontrasten synlig**: kap. 0.1 har kontrasttabellen + egen note om at Java-kyndige
  må avlære at «minnet ordner seg selv»; studieguiden har C++/Java-arket.
- [ ] **Opphavsrett**: ALLE oppgaver og kodeeksempler nyskrevne — egne klassenavn, egne tall, egne
  domener (IKKE `Rational`/Snake/`DynamicMultiArray`/fire-på-rad/`Creature` fra arkivet);
  kodemønstrene er standard C++-idiomer, men ingen oppgavetekster/fasiter fra reelle sett gjengis;
  pensumlitteratur (Savitch o.l.) refereres, aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 + innhold),
  jf. lærdommen om `getChapterMeta`.
