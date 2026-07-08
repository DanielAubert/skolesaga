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
