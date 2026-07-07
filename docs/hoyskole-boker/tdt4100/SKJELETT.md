# Bokskjelett: TDT4100 Objektorientert programmering (NTNU) — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (NTNU-arkivet 2005–2017: 42 PDF-filer, hvorav 23 løsningsforslag utgjør det
> kvantitative grunnlaget). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) —
> kapittel-DNA-ene der (teori/drill/øvingseksamen) er obligatoriske og gjentas
> ikke i sin helhet her. Alle kodeeksempler og domener i den ferdige boka skal
> være **nyskrevne** (opphavsrett): kodemønstrene er standard Java-idiomer, men
> klassenavn, tall, domeneinnpakningen og oppgavetekstene skal være forfatterens
> egne — bruk domener som IKKE finnes i arkivet (arkivet bruker spisested/
> bordplassering, familie/slekt, bussruter, skatt, serietabell/sport, Mercedes-
> forskningsanlegg; boka bruker f.eks. treningssenter, nettbutikk, konsertarrangør,
> strømmetjeneste, kaffebar, sykkelutleie, værstasjon-nettverk, spillturnering).
>
> **ÆRLIGHETSKRAV (skal stå i Del 0):** Frekvenskalibreringen bygger på **2005–2017**.
> Fra **2018** la NTNU om til **kode-baserte eksamener i IDE** (kjørbar Java med JUnit,
> GitLab-repo bak NTNU-innlogging), som ikke finnes som PDF i arkivet. Kjernen —
> innkapsling, samlinger, arv, grensesnitt, mønstre, testing — er faglig kontinuerlig,
> men leveringsformen er ny. Byggefasen bør skaffe nyere sett (2018–2024) og justere
> vekttallene mot dem; inntil da er 2005–2017 grunnlaget, og det sies eksplisitt til
> studenten.
>
> **NTNU vs. UiO (TDT4100 vs. IN1010) — NESTEN MOTSATT.** Begge er «objektorientert
> programmering i Java», men tester motsatte ender av OO-faget. **IN1010 er byggekunst:**
> egendefinerte lenkede lister/iteratorer fra bunnen med `Node`-objekter, generiske
> datastrukturer, rekursjon og **tråder + monitor** — nesten ren kodeskriving.
> **TDT4100 er designkunst:** innkapsling/synlighet, `static`, arv/abstrakte klasser,
> grensesnitt, **standardsamlinger fra biblioteket** (`ArrayList`/`HashSet`/`HashMap`),
> `Comparable`/sortering, **designmønstre** (observatør-observert, delegering,
> komposisjon), enhetstesting, fil-I/O og **UML-/objektdiagrammer** — med mye
> **forklarende tekst og begrunnelse ved siden av koden**. Der IN1010 spør «skriv hele
> klassen/hierarkiet», spør TDT4100 like ofte «hvilke modifikatorer bør stå her, og
> **hvorfor**?», «hva slags generell teknikk passer?» og «tegn objektdiagrammet».
> **Avgjørende: TDT4100-arkivet har NULL tråder/samtidighet (0/23).** Temaet som avgjør
> karakteren i IN1010 finnes ikke her — **tråder droppes som hovedtema** i denne boka.
>
> **Forgjenger:** TDT4100 tas etter **ITGK/TDT4110** (Python, grunnleggende
> programmering). TDT4110 er ikke i systemet — forkunnskaps-referanser til
> grunnleggende programmering skrives som **klartekst med aktiveringsmarkør**, ikke
> som live markdown-lenker (se stilregel §1.7). Interne TDT4100-lenker
> (`[tittel](/bok/tdt4100/<id>)`) peker kun på kapitler som finnes.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tdt4100` |
| Tittel | **TDT4100 Objektorientert programmering (NTNU)** |
| Level | `'Høyskole'` |
| Institusjon | **NTNU** (navigasjon: «TDT4100 Objektorientert programmering») |
| Arketype | Regnefag (kvantitativt kodefag med fast, gjentakende 5-delers oppgavemal) |
| Antall kapitler | **28** (1 eksamenskart + 24 tema/drill + 3 øvingseksamener) |
| Estimert totaltid | **2 155 min ≈ 36 timer** |
| Quiz totalt | **584** (krav ≥500) |
| Flashcards totalt | **646** (mål 600–750, begrepsrikt kodefag — se §5) |

**Pitch (én avsnitt):** TDT4100 har en påfallende stabil eksamensmal. Vurderingen er
**én skriftlig skoleeksamen (4 t, 100 %)**, karakter A–F, med **hjelpemiddelkode C**
(historisk læreboka «Big Java» av Horstmann tillatt t.o.m. 2017). Hvert sett er **ett
gjennomgående domenecase** løst stegvis gjennom en nesten alltid identisk **fem-delers
stige**: **Del 1** innkapsling (felt, synlighet, `final`/`static`, validering, ofte en
abstrakt superklasse, 15–30 %) → **Del 2** klasser/programmering med bibliotekssamling,
`Comparable`/sortering og `toString` (**den tyngste, 40–55 %**) → **Del 3** arv/
generalisering med abstrakt superklasse og `super()` (10–20 %) → **Del 4** grensesnitt +
**observatør-observert og/eller delegering** + testing (10–20 %) → **Del 5** modellering
(UML-/objektdiagram, `main`, testbarhet, 10 %). Domenet roterer (spisested, familie, sport,
buss, skatt, forskningsanlegg …), men OO-øvelsen er den samme. **Til forskjell fra IN1010
er ikke dette ren kodeskriving:** en typisk oppgave er **kode + begrunnelse + diagram** —
sensor gir poeng for å *forklare hvorfor* `static`/`abstract`/`protected` er riktig, ikke
bare for å skrive koden. Denne boka driller nettopp de fem stegene og de fem faste
designmønstrene til automatikk, i sensors korte, idiomatiske stil, med begrunnelsen alltid
ved siden av koden.

### Kritisk stilregel (gjelder HELE boka)

1. **Kode + begrunnelse + diagram — alle tre er poenggivende.** TDT4100 er ikke ren
   kodeskriving. Der oppgaven spør «hvilke modifikatorer bør stå her og **hvorfor**»,
   «hva slags generell teknikk», «bør denne klassen være abstrakt», «er dette et
   funksjonelt grensesnitt» — er den **forklarende teksten selvstendig poenggivende**.
   Hvert teorikapittel skal derfor pare hvert kodemønster med en **kort, presis
   begrunnelse** (én–tre setninger sensor ville skrevet), og drillkapitlene skal
   eksplisitt øve på å *formulere begrunnelsen*.
2. **DEKLARÉR SOM GRENSESNITT, INSTANSIÉR IMPLEMENTASJONEN (sentral sensorregel).**
   Felt/variabler for samlinger deklareres med grensesnitt-typen og instansieres med en
   konkret klasse: `private Collection<Vare> varer = new ArrayList<>();` — **aldri**
   `new Collection<>()`/`new List<>()`. «Man kan ikke instansiere selve grensesnittet.»
   Hvert samlings-/grensesnittkapittel SKAL ha en `warning` om dette.
3. **`getX()` som returnerer en samling returnerer en KOPI (sentral sensorregel).**
   `public Collection<Vare> getVarer() { return new ArrayList<>(varer); }` — aldri den
   interne referansen, ellers brytes innkapslingen. Hvert kapittel som eksponerer en
   samling SKAL ha en `warning` om dette.
4. **Validering KASTER unntak, ikke bare `if` (sentral sensorregel).** Setter/konstruktør
   som mottar ugyldig verdi skal **`throw new IllegalArgumentException(...)`** — *ikke*
   bare pakke tilordningen i en `if` og la være å sette verdien. «Viktig å utløse unntak,
   ikke bare unngå å sette verdien.» Hvert valideringskapittel SKAL ha en `warning`.
5. **Alternative løsninger sidestilles.** «Løsningsforslaget er bare ett eksempel.» Både
   **løkke- og Stream-variant**, både **`Comparable` og `Comparator`**, både håndlaget
   konstantklasse og `enum` gir full uttelling når idéen er riktig. Løsningsforslag i drill
   og øvingseksamener skal **vise minst to sidestilte varianter** der arkivet gjør det, og
   si eksplisitt at begge teller.
6. **Kort, idiomatisk Java — skriv bare det oppgaven ber om.** `@Override` på redefinerte
   metoder (`toString`, `compareTo`, `iterator`, abstrakte metoder) gir pluss; `super(...)`
   først i subklassekonstruktøren; `final` på uforanderlige felt; `private` som standard.
   **Skriv ALDRI `main`/full I/O/oppstart når bare klassene etterspørres** — det kan
   trekke om det vitner om misforståelse (§5.14 i analysen). Manglende `import`/`;`/`}` og
   norske bokstaver (æ, ø, å) i kode vektlegges ikke.
7. **Forkunnskaper og kryssbok-lenker.** Interne forkunnskaper lenkes med live markdown
   (`[tittel](/bok/tdt4100/<id>)`) — kun til kapitler som finnes. Forgjengeren **ITGK/
   TDT4110** (Python-grunnleggende) er ikke i systemet: referer til grunnleggende
   programmering (variabler, løkker, metoder, betingelser) som **klartekst med
   aktiveringsmarkør** `[aktiver lenke /bok/tdt4110/<id> når TDT4110 er bygget]`, aldri
   som live lenke.
8. **Diagrammer i strukturert tekst/ASCII.** Plattformen tegner ikke grafisk. Objekt-,
   objekttilstands- og UML-klassediagram beskrives i **strukturert tekst/ASCII** slik en
   A-besvarelse ville tegnet dem (bokser med feltverdier, navngitte referansepiler `→`,
   arvepiler `▷`, implementasjonspiler `- -▷`, aggregering `◇—`). Hvert diagramkapittel
   forklarer notasjonen først.
9. **Tråder droppes som hovedtema.** 0/23 sett. Nevnes maks i én setning i Del 0 som «det
   store skillet fra IN1010» og ellers ikke. Bruk ikke ressurser på `Runnable`/monitor.

### Avvik fra DNA/README-malen (dokumentert)

- **«Symbol- og formelliste» → «API- og konstruksjonsliste».** README krever en
  `collapsible` «Symbol- og formelliste» per delkapittel. For et kodefag finnes det
  sjelden matematiske symboler, men det finnes et presist konstruksjonsapparat. Blokken
  heter derfor **«API- og konstruksjonsliste»** og lister ALLE Java-konstruksjoner brukt i
  delkapitlet: nøkkelord, metoder, klasser, grensesnitt og idiomer med presis oppførsel
  **og med begrunnelsen for når/hvorfor** (f.eks. `static` — «klassenivå, ingen
  objekttilstand brukes; velg det for tellere/konstanter/hjelpemetoder»;
  `IllegalArgumentException` — «uinnsjekket; kastes ved ugyldig argument til metode/
  konstruktør»; `Collections.sort(list)` — «krever `Comparable` eller `Comparator`»).
  Regelen «per delkapittel, ikke arv fra tidligere» beholdes. (Samme avvik som IN1010/IN1900.)
- **Hjelpemiddel C → «tren bruk, ikke pugg».** Big Java var tillatt hjelpemiddel t.o.m.
  2017; på IDE-eksamen (2018+) er dokumentasjon tilgjengelig i miljøet. API- og
  konstruksjonslistene skal derfor ramme kunnskapen som **«når velger jeg dette / hvorfor
  / hva gjør det»**, ikke som eksakt signaturpugg. Flashcards kalibreres likt (se under).
- **`theorem`-blokker brukes for kanoniske kodemønstre (idiomer).** Der DNA-en bruker
  `theorem` for matematiske resultater, brukes den her for de faste kodemønstrene og
  designmønster-malene som skal sitte i ryggmargen — bokas «teoremer» (se §3b). Observatør-
  observert-femstegsmalen er den viktigste.
- **Flashcards genereres fra `definition`-blokker på toppnivå.** For dette faget er
  `definition`-blokkene API-/konstruksjons- og begrepsdefinisjoner (ett kort med
  konstruksjonen/begrepet som «tittel» og presis oppførsel + når-velges-det + minimalt
  eksempel som «definisjon»). Kalibrer som **«hva gjør dette / når velger jeg det / hvorfor»**
  — ikke signaturpugg. Fordi faget er svært begrepsrikt (nøkkelord, modifikatorer, API-er,
  fem designmønstre, diagramtyper), er flashcard-taket satt **høyt** (646, mål 600–750).
- **Quiz kan IKKE speile eksamen direkte** (eksamen har ingen flervalgsdel). Quiz
  kalibreres som **(a) begrunnelses-innprenting** («hvorfor `static`/`abstract`/`protected`
  her?», «bør denne være abstrakt?»), **(b) sensorregel-gjenkjenning** («gir denne getteren
  uttelling? hvorfor ikke?» — kopi vs. intern referanse; `if` vs. kastet unntak; instansiere
  grensesnitt), **(c) kode-lesing** («hva returnerer/gjør denne metoden?», «bestem typen til
  uttrykket»), **(d) begreps-MC** (forskjell på abstrakt klasse og grensesnitt; når `super()`
  kreves; funksjonelt grensesnitt eller ikke). Hvert quizspørsmål trener enten en begrunnelse,
  en sensorregel eller en konstruksjonsforståelse. `options[0]` = riktig svar (runtime
  stokker). Dette avviket dokumenteres i Del 0.
- **Ingen midtveiseksamen.** Til forskjell fra IN1010 er TDT4100 én eksamen (100 %). Det er
  derfor **ingen midtveis-simulering**; alle tre øvingseksamenene (Del 6) er komplette
  **4-timers sett etter den faste fem-delers stigen** over hvert sitt nyskrevne domene.
- **Bokdelene speiler eksamens fem deler.** DNA-en ordner temadeler etter faglig
  avhengighet; her sammenfaller det heldig med eksamens egen 5-delers stige, så bokas Del 1–5
  = eksamens Del 1–5 (med testing lagt til bokas Del 5 som del av «kvalitet/verktøy/
  modellering»-klyngen, jf. §2). Drillkapitlene ligger inne i sine temadeler (ikke samlet i
  siste del), fordi hver del er en fast eksamens-gjenganger som må drilles umiddelbart.
  (Samme avvik som IN1010/ECON1310.)

---

## 2. Makrostruktur

Rekkefølgen følger både faglig avhengighet (DNA-regelen) OG eksamens egen fem-delers stige —
de sammenfaller. Frekvensen styrer *omfanget*: Del 1 og Del 2 (~100 %, tyngst) får flest
kapitler + drill; Del 3–5 får kompakte, tydelig prioriterte kapitler.

| Del | `sectionName` (bokforsiden) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Ærlighetskravet (arkiv 2005–2017). |
| 1 | Innkapsling, synlighet og validering | 5 | **Del 1 ~100 %** (perfekt). Kjernen i faget: felt, `private`/`final`/`static`, validering-med-unntak, konstantklasse. 4 teori + 1 drill. |
| 2 | Klasser med bibliotekssamlinger | 5 | **Del 2 ~100 %, TYNGST (40–55 %)** (perfekt). Samlinger, `equals`/`toString`, `Comparable`/sortering, iterator. 4 teori + 1 drill. |
| 3 | Arv, abstrakte klasser og polymorfi | 4 | **Del 3 ~90 %** (perfekt). `extends`/`super()`/`@Override`/`protected`, abstrakt superklasse + begrunnelse, `instanceof`/cast. 3 teori + 1 drill. |
| 4 | Grensesnitt og designmønstre | 5 | **Del 4 ~85 %** (perfekt/kunne). Grensesnitt, **observatør-observert (femstegsmal)**, delegering/komposisjon, funksjonelle grensesnitt + lambda/Stream. 4 teori + 1 drill. |
| 5 | Testing, fil-I/O og modellering | 5 | **Del 5 ~55 % + testing ~52 %** (kunne/kjenne). JUnit, fil-I/O, objekt-/UML-diagram, moderne spor (JavaFX/verktøy). 4 teori + 1 drill. |
| 6 | Eksamenstrening | 3 | 3 komplette 4-timers øvingseksamener etter den faste Del 1→5-stigen, ett domene hver. |

**Avvik fra DNA-makrostrukturen (dokumentert):** DNA-en legger sjangerkapitlene i siste del.
Her ligger drillkapitlene (1.5, 2.5, 3.4, 4.5, 5.5) inne i sine respektive temadeler, fordi
hvert av de fem stegene er en ~100/85 %-gjenganger som må drilles umiddelbart etter teorien.
Del 6 beholder de komplette øvingseksamenene. (Samme avvik som IN1010/ECON1310.)

**Testing-plasseringen:** Eksamen legger enhetstesting i sin Del 4 («grensesnitt og
delegering / diverse»). Boka legger den i **Del 5** sammen med fil-I/O og modellering, fordi
disse tre hører til en felles «kvalitet, verktøy og dokumentasjon»-klynge og læres lettest
etter at klassene finnes å teste. I øvingseksamenene (Del 6) plasseres en testoppgave der
eksamen faktisk gjør det (Del 4/5). Dette merkes i kap. 5.1s Eksamensvinkel.

---

## 3a. Sjangerkatalog (A–O)

Bokstavene refereres i hvert kapittel og gjengis for studenten i Del 0. Destillert fra
EKSAMENSANALYSE §3. Tre familier: **skriv kode** (hoveddelen), **forklar/begrunn i tekst**
(konseptuell), **tegn diagram**. En typisk oppgave vever alle tre sammen.

| Kode | Sjanger | Form | Hyppighet/vekt |
|---|---|---|---|
| **A** | Innkapsling og synlighet (felt `private`/`final`, get/set, begrunn modifikatorene) — Del 1 | kode + begrunnelse | ~100 %; 15–30 % |
| **B** | Validering + unntak (kast `IllegalArgumentException`; checked vs. unchecked) — Del 1 | kode + begrunnelse | 96 % |
| **C** | `static` — teller, konstant, fabrikk/`valueOf` | kode + begrunnelse | 87 % |
| **D** | Konstantklasse (enum-mønster: fast instanssett, `valueOf`, `toString`) | kode | 26 % |
| **E** | Klasse med bibliotekssamling (`Collection`/`List`/`Set`/`Map`, add/fjern/finn, `toString`) — Del 2 | kode | 87 %; **tyngst** |
| **F** | `Comparable`/`compareTo` + sortering (`Collections.sort`; `Comparator`; flernivå) | kode + begrunnelse | 48 % |
| **G** | Iterator/`Iterable<T>` (returnér `internList.iterator()`; for-each utenfra) | kode | 52 % |
| **H** | Arv + abstrakt superklasse (`extends`, `super()`, `@Override`, `protected`, «bør denne være abstrakt?») — Del 3 | kode + begrunnelse | 74/48 % |
| **I** | Observatør-observert / lytter-mønster (femstegsmalen) — Del 4 | kode + begrunnelse | 52 %; differensierende |
| **J** | Delegering (delegat + kjøretidsbytte) + komposisjon; drøft mot arv | kode + begrunnelse | 30 %; differensierende |
| **K** | Funksjonelle grensesnitt + lambda/Stream (`Predicate`, `filter`/`map`/`reduce`) | kode + begrunnelse | 22 % / **~100 % 2014–2017** |
| **L** | Fil-/strøm-I/O (`Scanner`/`PrintWriter`, `load`/`save`, `IOException`) | kode | 39 % |
| **M** | Enhetstesting (JUnit `assert*`/`fail`, unntakstesting, testbarhet) | kode + begrunnelse | 52 % |
| **N** | Diagram (objekt-, objekttilstands-, UML-klassediagram) | tegning | ~48 %+; nær hvert sett |
| **O** | Uttrykkstype / kortsvar («bestem typen til uttrykket», «hva skjer») | kortsvar | 39 %; epoke 1–2 |

## 3b. Idiomkatalog (bokas «teoremer» — `theorem`-blokker)

De faste kode- og designmønstrene som skal sitte i ryggmargen. Hvert presenteres som en
`theorem`-blokk i angitt kapittel og gjentas i drill/studieguide. Observatør-femstegsmalen
er den viktigste differensierende malen.

| Idiom | Kort form | Kapittel |
|---|---|---|
| **Innkapslingsmalen** | `private` felt + `final` på uforanderlige + get/set kun der naturlig; data satt ved opprettelse i konstruktør uten setter | 1.2 |
| **Valideringsmalen** | setter/konstruktør: sjekk gyldighet → `throw new IllegalArgumentException(...)` (ikke bare `if`) | 1.3 |
| **`static`-tellermalen** | `private static int teller = 1;` → `this.nr = teller++;` i konstruktøren | 1.4 |
| **Konstantklasse-/enum-malen** | fast sett `public static`-instanser + privat konstruktør + `toString` + `valueOf` (moderne: `enum`) | 1.4 |
| **Samlingsdeklarasjonen** | `Collection<T> xs = new ArrayList<>();` — **grensesnitt-type på feltet, implementasjon i `new`** | 2.1 |
| **Kopi-getteren** | `return new ArrayList<>(xs);` — aldri den interne referansen | 2.1 |
| **`compareTo`-malen** | `return other.x - this.x;` (differanse; flernivå: sjekk viktigst først, returnér hvis ≠ 0) | 2.3 |
| **Iterator-delegeringen** | `implements Iterable<T>` → `return internList.iterator();` | 2.4 |
| **Konstruktørmalen (arv)** | `super(...)` **først**, deretter subklassens egne felt | 3.1 |
| **Abstrakt-metode-malen** | `protected abstract R m(...)` i superklassen → `@Override` i hver subklasse | 3.2 |
| **`instanceof`-før-cast** | `if (x instanceof Sub) { Sub s = (Sub) x; … }` — aldri cast uten sjekk | 3.3 |
| **Observatør-femstegsmalen** | (1) lyttergrensesnitt m/varslingsmetode → (2) `Collection` av lyttere → (3) `add`/`removeListener` → (4) `fire`/kringkasting → (5) kall ved **alle** tilstandsendringer | 4.2 |
| **Delegeringsmalen** | delegat-referanse (grensesnitt) + videresending (`return delegat.gjør(...)`) + `setDelegat` (kjøretidsbytte) | 4.3 |
| **Stream-malen** | `xs.stream().filter(...).map(...).mapToInt(...).sum()` — sidestilt med løkke | 4.4 |
| **JUnit-testmalen** | rigg lite objekt → kall metode → `assertEquals(forventet, faktisk)`; unntak: `try { …; fail(); } catch (X e) { }` | 5.1 |

---

## 4. Kapitler

Feltene følger DNA-ens «Skjelett-krav», tilpasset kodefag: **Kodekontrakt** erstatter
«Innholdskontrakt» (eksakte konstruksjoner/API-er/idiomer kapitlet SKAL lære, med presis
oppførsel OG begrunnelse). Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) /
**kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet — slik testes TDT4100

- **id:** `tdt4100-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen (4 t skoleeksamen, kode C), den faste fem-delers stigen Del 1→5 rundt ett domenecase, temafrekvensene, sjangerkatalogen A–O, de fire sensorreglene og lesestrategien som styrer hele boka. Ærlighetskravet: kalibrering på 2005–2017.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet 2005–2017. Skal gjengi: (i) formen — **én skriftlig skoleeksamen (4 t, 100 %)**, A–F, **hjelpemiddelkode C** (Big Java tillatt t.o.m. 2017); obligatoriske øvinger godkjent for å gå opp; (ii) at oppgaven er **hybrid kode + begrunnelse + diagram** — ingen flervalgsdel, men korte «bestem typen»/«hva skjer»-spørsmål kan forekomme; (iii) **den faste fem-delers stigen** over ett gjennomgående domene: **Del 1** innkapsling (15–30 %) → **Del 2** klasser/programmering med samling + `Comparable` + `toString` (**40–55 %, tyngst, avgjør mest**) → **Del 3** arv/generalisering (10–20 %) → **Del 4** grensesnitt + observatør-observert/delegering + testing (10–20 %) → **Del 5** modellering (UML/objektdiagram, `main`, 10 %); (iv) **temafrekvens-tabellen** (innkapsling ~100 %, unntak/validering 96 %, bibliotekssamlinger 87 %, `static` 87 %, arv 74 %, grensesnitt 70 %, `equals`/`hashCode` 70 %, konstruktør+`super` 65 %, iterator 52 %, observatør-observert 52 %, enhetstesting 52 %, `Comparable`/sortering 48 %, abstrakte klasser 48 %, diagram ~48 %+, `instanceof`/cast 39 %, fil-I/O 39 %, `HashMap`/`HashSet` 35 %, delegering 30 %, konstantklasse 26 %, lambda/Stream 22 %/~100 % 2014–17, **tråder 0 %**); (v) **de tre epokene** (klassisk papir/teori 2005–2012 → moden hybrid design/kode 2013–2017 → kode-basert IDE-eksamen 2018–i dag) og **ÆRLIGHETSKRAVET** (arkivet stopper 2017; 2018+ er kjørbar Java i IDE med JUnit bak GitLab; kjernen er kontinuerlig, men byggefasen bør skaffe nyere sett); (vi) sensors metaregler; (vii) **de fire sensorreglene** (se §1.2–1.5) presentert første gang.
- **Kodekontrakt:** Sjangerkatalogen A–O (§3a) og idiomkatalogen (§3b) presenteres som studentens sjekkliste med typisk vekt per sjanger. **De fire sensorreglene** presenteres eksplisitt: (1) deklarér som grensesnitt, instansiér implementasjon; (2) `getX()` returnerer kopi av intern samling; (3) validering **kaster** unntak (ikke bare `if`); (4) alternative løsninger sidestilles (løkke vs. Stream, `Comparable` vs. `Comparator`). Pluss **begrunnelseskravet**: der oppgaven spør «hvorfor», er teksten selvstendig poenggivende. Avslutt med **leseplan**: Del 1 + Del 2 er «må perfekt» (bærer 55–85 % av settet), Del 3 perfekt, Del 4 perfekt/differensierende (observatør-observert avgjør toppkarakter), Del 5 kunne; nivå 3 (lambda/Stream, JavaFX, moderne verktøy) merkes «for de siste års sett / topp­poeng».
- **Oppgavesjangre:** Ingen kodeoppgaver; 3–4 refleksjonsoppgaver: «gitt 4 timer og vektfordelingen Del1=20, Del2=50, Del3=15, Del4=10, Del5=5 — sett opp et tidsbudsjett når Del 2 avgjør mest» og «forklar hvorfor det gir trekk å returnere den interne lista direkte fra en getter, og hva du bør gjøre i stedet».
- **Typiske feil:** Metafeilene: bruke all tid på Del 1 og ikke rekke Del 2 (der poengene sitter); tro at koden alene gir full uttelling (begrunnelsen teller); skrive `main`/full I/O som ikke etterspørres; anta at 2018+ tester noe helt nytt (kjernen er kontinuerlig).
- **Quiz: 16 · Flashcards: 18** (form, den faste stigen, sensorreglene, sjangerkatalogen, ærlighetskravet)

---

### Del 1 — Innkapsling, synlighet og validering *(Del 1: PERFEKT, ~100 %)*

> Del 1 er kjernen i faget og forekommer på ~100 % av settene. Innkapsling (felt/synlighet),
> validering-med-unntak (96 %), `static` (87 %) og konstantklasse (26 %) bygges her. Fire
> teorikapitler + drill (kap. 1.5). Hele boka står på begrunnelseskravet som etableres her:
> «hvilke modifikatorer og hvorfor».

#### Kapittel 1.1: Klasser, felt, konstruktør og `this`

- **id:** `tdt4100-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Fundamentet: klassedeklarasjon, instansvariabler (felt) med type, konstruktør, `this`, instansiering med `new`, primitiver vs. referansetyper, `null`, og `toString()` — broa fra ITGK/Python-programmering til Java.
- **Eksamensbelegg:** Grunnlag for ALT (Del 1–5). Java-syntaks og objektmodellen er terskelen fra ITGK. Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** `class Navn { … }`; **felt** deklarert med type (`int alder; String navn; double pris;`); **konstruktør** `Navn(int a, String n) { this.alder = a; this.navn = n; }`; `this` (mottakerobjektet — motsvarer Pythons `self`, men implisitt der det ikke trengs); instansiering `new Navn(...)`; **primitiver** (`int`/`double`/`boolean`/`char`/`long`) vs. **referansetyper** (`String`, egne klasser) og `null`; `==` (referanselikhet) vs. `.equals(...)` (verdilikhet, utdypes 2.2); `toString()` redefinert med `@Override`, kalt implisitt av `System.out.println(obj)` og streng­konkatenering; `String.format("%s: %d kr", navn, pris)`. **Kryssbok-forkunnskap (ITGK/TDT4110, klartekst m/aktiveringsmarkør):** grunnleggende programmering — variabler, typer, løkker, betingelser, funksjoner/metoder — `[aktiver lenke /bok/tdt4110/<id> når TDT4110 er bygget]`. Vis oversettelsestabellen `__init__`→konstruktør, `self`→`this`, `__str__`→`toString`, attributt→felt, dynamisk→statisk typing.
- **Oppgavesjangre:** Forkunnskap til A. Mønstereksempel (nyskrevet): «Lag klassen `Vare` med felt `navn` og `pris`, en konstruktør som setter begge, og en `toString()` som gir `"Kaffe: 39 kr"`.»
- **Typiske feil:** Glemme `this.` når parameternavn = feltnavn (feltet blir ikke satt); bruke `==` på `String`/objekter i stedet for `.equals`; glemme type på felt/parametre; tro at Java har Pythons dynamiske typing; la `toString()` returnere noe annet enn en `String`.
- **Quiz: 22 · Flashcards: 28**

#### Kapittel 1.2: Synlighet og modifikatorer — `private`, `public`, `protected`, `final`

- **id:** `tdt4100-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4100-1-1` · **kapitteltype:** teori
- **description:** Innkapslingens hjerte: synlighetsmodifikatorene og `final`, get/set-metoder kun der naturlig, data satt ved opprettelse i konstruktøren uten setter — og fremfor alt evnen til å **begrunne** hvert valg, som er et fast poenggivende tekstspørsmål.
- **Eksamensbelegg:** Innkapsling ~100 %, Del 1 på hvert sett. Det faste tekstspørsmålet «hvilke modifikatorer bør stå foran feltet/metoden, og **hvorfor**» er selvstendig poenggivende. Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** **`private`** (skjul intern tilstand — standardvalg for felt); **`public`** (tjeneste for andre — metoder som er del av grensesnittet utad); **`protected`** (kun subklasser/pakke — for det subklasser må nå, utdypes i Del 3); **pakke-privat** (ingen modifikator); **`final`** (uforanderlig — settes én gang, i konstruktøren eller ved deklarasjon); **get/set kun der naturlig** — data som bare settes ved opprettelse settes i **konstruktøren uten setter** og markeres `final`; get-metode returnerer feltet; set-metode validerer (kap. 1.3); **begrunnelsesmalen** (svar sensor vil se): `private` fordi …, `final` fordi verdien ikke skal endres, `public` fordi andre trenger tjenesten, `protected` fordi bare subklasser trenger den. `theorem`-idiom: **innkapslingsmalen**. `warning`-forvarsel om kopi-getter (utdypes 2.1). Til bruk/begrunnelse.
- **Oppgavesjangre:** A. Mønstereksempel: «Klassen `Medlem` har et `medlemsnummer` som aldri endres og et `navn` som kan endres. Velg modifikatorer for begge feltene og skriv nødvendige get/set — og **begrunn** hvorfor `medlemsnummer` er `final` og hvorfor du ikke lager en setter for det.»
- **Typiske feil:** `public` felt i stedet for `private` (§5.4); glemme `final` på uforanderlige felt; lage settere for felt som bare skal settes ved opprettelse; **svare på «hvilke modifikatorer» uten å begrunne** (mister tekstpoengene); blande `protected` og `private`.
- **Quiz: 26 · Flashcards: 32**

#### Kapittel 1.3: Validering og unntak — `IllegalArgumentException`, checked vs. unchecked

- **id:** `tdt4100-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4100-1-2` · **kapitteltype:** teori
- **description:** Validere argumenter ved å **kaste** unntak (`throw new IllegalArgumentException`), skille uinnsjekkede (`RuntimeException`) fra innsjekkede (`Exception`) unntak, `throws`/`try/catch`, og private static hjelpemetoder for validering — den faste følgesvennen til innkapsling.
- **Eksamensbelegg:** Unntak/validering 96 % (22/23). «Viktig å utløse unntak, ikke bare unngå å sette verdien.» Checked vs. unchecked er eksplisitt tekstspørsmål (2011 1d). Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** **`throw new IllegalArgumentException("pris kan ikke være negativ")`** i setter/konstruktør ved ugyldig verdi — **ikke** bare en `if` rundt tilordningen; **uinnsjekket** (`RuntimeException`, f.eks. `IllegalArgumentException`, `IllegalStateException`) — trenger ikke deklareres; **innsjekket** (subklasse av `Exception` men ikke `RuntimeException`) — må deklareres med **`throws`**, og kalleren må **`try { … } catch (X e) { … }`** eller videredeklarere; når hver velges (uinnsjekket for programmererfeil/ugyldig argument; innsjekket for forventede feilsituasjoner, f.eks. nekte endring etter at en avhengig verdi er satt); **valideringshjelpemetoder** `private static void sjekkPositiv(double x)` / `sjekkNavn(String s)` (uten objekttilstand → `static`; en som må redefineres i subklasse gjøres `protected abstract`, se 3.2); `e.getMessage()`; `finally`. `theorem`-idiom: **valideringsmalen**. `warning` (**sentral**): en `if` som bare unnlater å sette verdien gir trekk — man skal **kaste** unntak.
- **Oppgavesjangre:** B. Mønstereksempel: «Skriv en setter `setSaldo(int kr)` for en `Konto` som kaster `IllegalArgumentException` hvis beløpet er negativt, og en `private static void sjekkBelop(int kr)`-hjelpemetode. Forklar hvorfor du kaster et unntak i stedet for å bare la være å sette verdien.»
- **Typiske feil:** **Bruke `if` i stedet for å kaste unntak** (§5.2, sentralt trekk); svelge/ignorere unntak stille; forveksle checked/unchecked (glemme `throws` på et innsjekket unntak); fange en for generell type før den spesifikke; skrive `throws` der `throw` menes.
- **Quiz: 24 · Flashcards: 30**

#### Kapittel 1.4: `static` og konstantklasser — teller, konstant, fabrikk, enum-mønster

- **id:** `tdt4100-1-4` · **number:** 1.4 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4100-1-3` · **kapitteltype:** teori
- **description:** Klassenivå-medlemmer: `static`-tellere for unike løpenummer, `static final`-konstanter lagret ett sted, statiske fabrikk-/oppslagsmetoder (`valueOf`), og den håndlagde konstantklassen (enum-mønster) med moderne `enum` som alternativ — med begrunnelse for hvorfor noe er `static`.
- **Eksamensbelegg:** `static` 87 % (20/23); «hvorfor `static` her?» er fast spørsmål. Konstantklasse/enum-mønster 26 % (`Gender.MALE/FEMALE`). Prioritet: **perfekt** (`static`), **kunne** (konstantklasse).
- **Kodekontrakt (API- og konstruksjonsliste):** **`static`-teller** `private static int teller = 1;` økt i konstruktøren `this.nr = teller++;` (unikt løpenummer per objekt); **`static final`-konstant** (`static final double MVA = 0.25;` — lagre konstanter kun ett sted, del mellom alle objekter); **statisk fabrikk/oppslag** `public static Valuta valueOf(String kode)` som returnerer et **eksisterende** objekt (sammenlignet med `.equals`); **begrunnelse:** `static` = klassenivå, bruker ingen objekttilstand → velg for tellere/konstanter/tilstandsløse hjelpemetoder; feil å kalle en ikke-`static` metode fra `static` kontekst; **konstantklasse (enum-mønster):** klasse som ikke kan instansieres utenfra (privat konstruktør), fast sett `public static final`-instanser (`Storrelse.LITEN/MEDIUM/STOR`), privat `final` etikett, `toString()` som returnerer etiketten, `valueOf`; **moderne `enum`** som sidestilt alternativ (`enum Storrelse { LITEN, MEDIUM, STOR }`). `theorem`-idiomer: **`static`-tellermalen** og **konstantklasse-/enum-malen**. `warning`: dele en teller/register som burde vært per-objekt (eller motsatt) — §5.15.
- **Oppgavesjangre:** C + D. Mønstereksempel: «Gi hver `Ordre` et unikt `ordrenummer` via en `static`-teller, en delt `static final`-konstant `GEBYR`, og forklar hvorfor begge er `static`. Lag deretter en konstantklasse `Betalingsmate` med instansene `KORT`, `KONTANT`, `VIPPS` — både som håndlaget klasse og som `enum`.»
- **Typiske feil:** Gjøre en teller til instansfelt (hvert objekt starter på 1); glemme `static` på konstanter/hjelpemetoder; **svare «hvorfor `static`» uten begrunnelse**; kalle instansmetode fra `static` kontekst (§5.15); la konstantklassen kunne instansieres utenfra (glemme privat konstruktør).
- **Quiz: 24 · Flashcards: 30**

#### Kapittel 1.5: DRILL — Innkapslingsklassen (Del 1)

- **id:** `tdt4100-1-5` · **number:** 1.5 · **estimatedMinutes:** 80 · **prerequisites:** `tdt4100-1-4` · **kapitteltype:** drill
- **description:** Full drill på Del 1: skriv en komplett, innkapslet klasse med riktige modifikatorer, `final`, `static`-teller/konstant, validering-som-kaster og konstruktør — **og formulér begrunnelsen** for hvert valg, slik sensor vil se den. Ofte med en abstrakt superklasse som forbereder Del 3.
- **Eksamensbelegg:** Del 1 (~100 %), 15–30 %. Alltid første del av settet. Begrunnelsen er poenggivende. Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** Algoritmisk fremgangsmåte: 1) identifisér feltene og velg **datatype** (og begrunn valget); 2) sett synlighet — `private` som standard, `final` på uforanderlige; 3) data satt ved opprettelse → i konstruktøren, ingen setter; 4) **valider** i setter/konstruktør ved å **kaste** `IllegalArgumentException`, gjerne via `private static`-hjelpemetode; 5) `static`-teller for løpenummer, `static final` for delte konstanter; 6) `toString()`; 7) **skriv begrunnelsen** for hver modifikator i klartekst. Gjennomgått eksamenscase med **sensor-margnotater** om hva som gir uttelling (både kode og begrunnelse teller; validering-med-unntak belønnes; alternative rimelige typevalg godtas). 8–12 oppgaver på eksamensnivå over roterende domener (treningssenter, nettbutikk, kaffebar, sykkelutleie), hver med kompakt fasit + begrunnelse.
- **Oppgavesjangre:** A, B, C, D. Mønstereksempel: «Lag klassen `Sykkel` for et bysykkel-system: `private final int id` (unikt via `static`-teller), `private String status` med validering (bare `"ledig"`/`"utleid"`/`"service"`, ellers unntak), `static final int MAKS_UTLANSTIMER`. Skriv klassen og **begrunn hver modifikator**.»
- **Typiske feil:** Hele §5-Del-1-katalogen: §5.2 (`if` i stedet for kastet unntak), §5.4 (feil synlighet / glemt `final`/`static`), §5.15 (`static`-feller), og **å levere kode uten begrunnelse** når oppgaven ber om den.
- **Quiz: 24 · Flashcards: 18**

---

### Del 2 — Klasser med bibliotekssamlinger *(Del 2: PERFEKT — TYNGST, 40–55 %)*

> Del 2 er den **tyngste** delen og avgjør mest (40–55 %). Her bygges hovedklassen som
> holder en bibliotekssamling (87 %) og gjør noe med den: legg til / fjern / finn, `toString`,
> `equals`/identitet (70 %), `Comparable`/sortering (48 %) og iterator (52 %). To sentrale
> sensorregler bor her: **deklarér som grensesnitt, instansiér implementasjon** og **`getX()`
> returnerer en kopi**. Fire teorikapitler + stort drill (kap. 2.5).

#### Kapittel 2.1: Bibliotekssamlinger — `Collection`, `List`, `Set`, `Map`

- **id:** `tdt4100-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4100-1-2` · **kapitteltype:** teori
- **description:** Bruke bibliotekets samlinger som felt i en klasse: velge riktig grensesnittstype (`Collection`/`List`/`Set`/`Map`), deklarere feltet som grensesnittet og instansiere implementasjonen, legge til / fjerne / finne, og returnere en **kopi** fra gettere — de to sentrale sensorreglene.
- **Eksamensbelegg:** Bibliotekssamlinger 87 % (20/23), standard beholder i Del 2. Aldri egendefinert liste (motsatt IN1010). `HashMap`/`HashSet` 35 %. Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** **Velg grensesnittstype:** `Collection<T>` (når indeks ikke trengs), `List<T>`/`ArrayList` (rekkefølge/indeks), `Set<T>`/`HashSet` (unngå duplikater — krever fornuftig `equals`/`hashCode`, se 2.2), `Map<K,V>`/`HashMap` (nøkkeloppslag); **`private Collection<Vare> varer = new ArrayList<>();`** — deklarér som grensesnittet, instansiér implementasjonen; `.add(x)`, `.remove(x)` (returnerer om samlingen ble endret), `.contains(x)`, `.size()`, `.isEmpty()`, for-each (`for (Vare v : varer)`); **`Map`:** `.put(nøkkel, verdi)`, `.get(nøkkel)` (`null` hvis mangler), `.containsKey(...)`, `.keySet()`, `.entrySet()`; **legg til / fjern / finn** via for-each med `.equals`-sammenligning, eller delegér til `list.add`/`list.remove`; **uforanderlig varargs-konstruktør** `new ArrayList<>(Arrays.asList(items))`; **kopi-getter** `public Collection<Vare> getVarer() { return new ArrayList<>(varer); }`. `theorem`-idiomer: **samlingsdeklarasjonen** og **kopi-getteren**. `warning` (**to sentrale**): (1) instansiér aldri grensesnittet (`new Collection<>()`) — §5.1; (2) returnér aldri den interne lista direkte fra en getter — §5.3.
- **Oppgavesjangre:** E. Mønstereksempel: «Klassen `Handlekurv` holder varer i en `Collection<Vare>`. Skriv `leggTil(Vare v)`, `fjern(Vare v)`, `finn(String navn)` og en `getVarer()` som ikke lar utsiden endre den interne samlingen. Begrunn valget av samlingstype.»
- **Typiske feil:** **Instansiere grensesnittet** (`new List<>()`) i stedet for `new ArrayList<>()` (§5.1); **eksponere intern samling** i getteren i stedet for en kopi (§5.3); velge `List` der `Set` er riktigere (eller motsatt) uten begrunnelse; glemme at `HashMap.get` gir `null` ved manglende nøkkel; bruke indeks på et `Set`/`Map`.
- **Quiz: 26 · Flashcards: 32**

#### Kapittel 2.2: `equals`, `hashCode`, `toString` og identitet

- **id:** `tdt4100-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4100-2-1` · **kapitteltype:** teori
- **description:** Skille referanselikhet (`==`) fra verdilikhet (`.equals`), redefinere `equals`/`hashCode` konsistent slik at objekter fungerer i `HashSet`/`HashMap` og `contains`, og skrive en lesbar `toString()` — apparatet som får samlingene til å oppføre seg riktig.
- **Eksamensbelegg:** `equals`/`hashCode` + identitet 70 % (16/23), tett koblet til samlinger/oppslag. `toString` gjennomgående. Prioritet: **perfekt** (`==` vs. `.equals`), **kunne** (`hashCode`-kontrakten).
- **Kodekontrakt:** **`==`** (referanselikhet — samme objekt) vs. **`.equals(Object o)`** (verdilikhet); `String`/objekter sammenlignes med `.equals`, aldri `==`; **redefinere `equals`:** sjekk `instanceof` (se 3.3), cast, sammenlign relevante felt (ofte bare en `id`); **`hashCode`-kontrakten:** like objekter (`equals` → `true`) må ha samme `hashCode`; hvorfor `HashSet.contains`/`HashMap`-oppslag krever begge; standard `Objects.equals(a, b)`/`Objects.hash(...)` nevnes; **`toString()`** for lesbar representasjon (kalt implisitt av `+` og `println`), `@Override`; `String.format`. `warning`: bruke `==` på `String`/objekter (§5.7); legge objekter i `HashSet` uten fornuftig `equals`/`hashCode` (duplikater slipper gjennom).
- **Oppgavesjangre:** E-moment + forkunnskap til G/F. Mønstereksempel: «To `Medlem`-objekter regnes som like hvis de har samme `medlemsnummer`. Redefinér `equals` og `hashCode` slik at et `HashSet<Medlem>` ikke godtar duplikater, og skriv en `toString()`.»
- **Typiske feil:** `==` på `String` (§5.7); redefinere `equals` uten `hashCode` (eller motsatt) — bryter kontrakten, oppslag feiler; `equals(Medlem m)` med feil signatur (skal være `equals(Object o)`); sammenligne feil felt.
- **Quiz: 24 · Flashcards: 30**

#### Kapittel 2.3: `Comparable`, `compareTo` og sortering

- **id:** `tdt4100-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4100-2-1` · **kapitteltype:** teori
- **description:** Gjøre objekter sorterbare med `implements Comparable<T>` og `compareTo` (returnér differansen), sortere med `Collections.sort`, og den sidestilte `Comparator`-varianten (lambda) — inkludert flernivå-sortering. Et fast Del 2-tillegg.
- **Eksamensbelegg:** `Comparable`/sortering 48 % (11/23), «returner differansen», sortert tabell/liste. Ofte kombinert med `toString` av en rangert liste. Prioritet: **kunne** (grensende til perfekt i Del 2).
- **Kodekontrakt (API- og konstruksjonsliste):** **`class Lag implements Comparable<Lag>`** med `@Override public int compareTo(Lag annen)` som returnerer **negativ / 0 / positiv**; typisk **differansen** felt for felt (`return annen.poeng - this.poeng;` for synkende); `String`-felt: `this.navn.compareTo(annen.navn)`; **`Collections.sort(liste)`** (krever `Comparable`); **`Comparator<T>`** som sidestilt alternativ — lambda `(a, b) -> a.getPoeng() - b.getPoeng()`, `Collections.sort(liste, komparator)`, `liste.sort(...)`; når man velger `Comparator` (når klassen ikke selv skal ha én naturlig ordning, eller trenger oppslag i en ytre struktur); **flernivå-sortering:** sjekk viktigste kriterium først, returnér hvis ≠ 0, ellers neste. `theorem`-idiom: **`compareTo`-malen**. `warning`: feil fortegn (objektet som skal ligge først må returnere `< 0`) — §5.8; la `compareTo` returnere `boolean`.
- **Oppgavesjangre:** F. Mønstereksempel: «La `Spiller implements Comparable<Spiller>` sortere synkende på `poeng`, og ved poenglikhet stigende på `navn`. Sortér en `List<Spiller>` med `Collections.sort`. Vis også en sidestilt `Comparator`-løsning og forklar at begge gir full uttelling.»
- **Typiske feil:** **Feil fortegn** i `compareTo` (§5.8, lett å snu); la `compareTo` returnere `boolean` i stedet for `int`; glemme flernivå (bare første kriterium); tro at `Collections.sort` virker uten `Comparable`/`Comparator`; sammenligne `String` med `==`/differanse i stedet for `.compareTo`.
- **Quiz: 22 · Flashcards: 28**

#### Kapittel 2.4: Iterator og `Iterable` — for-each utenfra

- **id:** `tdt4100-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4100-2-1` · **kapitteltype:** teori
- **description:** La en klasse `implements Iterable<T>` og returnere den interne samlingens iterator, slik at for-each virker utenfra uten å eksponere samlingen — TDT4100-varianten (ikke egendefinert `Node`-iterator som i IN1010).
- **Eksamensbelegg:** Iterator/`Iterable` 52 % (12/23), oftest via `list.iterator()`. Bevarer innkapslingen (for-each uten å gi ut lista). Prioritet: **kunne** (differensierende i Del 2).
- **Kodekontrakt (API- og konstruksjonsliste):** `import java.util.Iterator;`; **`class Handlekurv implements Iterable<Vare>`** med `@Override public Iterator<Vare> iterator() { return varer.iterator(); }` (delegér til den interne samlingens iterator); når `Iterable` er implementert virker **for-each** utenfra (`for (Vare v : handlekurv)`) uten at samlingen eksponeres; forskjell fra kopi-getter (iterator gir gjennomløp uten skrivetilgang); egendefinert `Iterator<T>` med `hasNext`/`next` **nevnes kort** som mulighet, men er ikke standard her (det er IN1010-stoff — kort omtale). `theorem`-idiom: **iterator-delegeringen**. `warning`: å eksponere den interne lista i stedet for å tilby en iterator (bryter innkapslingen unødvendig).
- **Oppgavesjangre:** G. Mønstereksempel: «Gi `Spilleliste` (som holder `Sang`-objekter i en intern `List`) en iterator ved å `implements Iterable<Sang>` og returnere `sanger.iterator()`, slik at `for (Sang s : spilleliste)` virker utenfra uten å gi ut lista.»
- **Typiske feil:** Eksponere den interne lista i stedet for å delegere iteratoren; glemme `implements Iterable<T>` (for-each virker ikke); skrive en tung egendefinert `Node`-iterator der `internList.iterator()` holder (§ overkomplisering); feil typeparameter på `Iterable`.
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 2.5: DRILL — Hovedklassen med samling (Del 2)

- **id:** `tdt4100-2-5` · **number:** 2.5 · **estimatedMinutes:** 85 · **prerequisites:** `tdt4100-2-4` · **kapitteltype:** drill
- **description:** Full drill på den tyngste delen: en komplett hovedklasse som holder en bibliotekssamling, med legg til / fjern / finn, `equals`/`toString`, `Comparable`/sortering, iterator og kopi-getter — i sensors korte stil, med de to sentrale sensorreglene i fokus.
- **Eksamensbelegg:** Del 2 (~100 %), 40–55 % — avgjør mest. Poeng splittes over samling/oppslag/sortering/`toString`/iterator. Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** 1) felt som **grensesnitt-type**, instansiert med implementasjon; 2) `leggTil`/`fjern`/`finn` (for-each + `.equals`, eller delegér); 3) `equals`/`hashCode` der objekter legges i `Set`/brukes i `contains`; 4) `Comparable`/`compareTo` + `Collections.sort` (vis også `Comparator`-variant, sidestilt); 5) `implements Iterable<T>` + `iterator()`; 6) **kopi-getter** (aldri intern referanse); 7) `toString()`. Gjennomregnet eksamenscase med **sensor-margnotater** (deklarér grensesnitt/instansiér implementasjon og kopi-getter er faste uttellingspunkter; alternative sorteringsløsninger sidestilles; riktig struktur belønnes selv om detaljlogikken glipper). 8–12 oppgaver på eksamensnivå, roterende domener (spillturnering, nettbutikk, konsertarrangør, treningssenter), hver med kompakt fasit.
- **Oppgavesjangre:** E, F, G. Mønstereksempel: «Lag `Turnering` som holder `Spiller`-objekter i en samling: `meldPaa`/`trekk`/`finn(String navn)`, en `toppliste()` som returnerer spillerne sortert synkende på poeng (`Comparable`), en iterator, og en `getSpillere()` som returnerer en kopi. Begrunn samlingsvalget.»
- **Typiske feil:** §5.1 (instansiere grensesnitt), §5.3 (eksponere intern samling), §5.7 (`==` på objekter), §5.8 (feil fortegn i `compareTo`); glemme `equals`/`hashCode` ved `Set`-bruk; skrive mer enn oppgaven ber om (§5.14).
- **Quiz: 24 · Flashcards: 18**

---

### Del 3 — Arv, abstrakte klasser og polymorfi *(Del 3: PERFEKT, ~74/90 %)*

> Del 3 er generaliseringssteget (~90 % av settene): felles felt/metoder trekkes opp i en
> superklasse som ofte gjøres **abstrakt**, subklasser bruker `extends` og `super()`, og
> `instanceof`/cast trekker ut subtyper. Det faste tekstspørsmålet «bør denne være abstrakt?»
> er poenggivende. Tre teorikapitler + drill (kap. 3.4).

#### Kapittel 3.1: Arv — `extends`, `super()`, `@Override`, `protected`

- **id:** `tdt4100-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4100-1-2`, `tdt4100-2-2` · **kapitteltype:** teori
- **description:** Arv med `extends`, konstruktørkjeding med `super(...)` (må stå først), overstyring med `@Override`, `protected` for subklasse-tilgang, og dynamisk metodeoppslag (polymorfi) — generaliseringens apparat.
- **Eksamensbelegg:** Arv 74 % (17/23), Del 3 nesten alltid. Konstruktør + `super(...)` 65 %. «Hva kalles denne metoden / hvorfor `protected`?». Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** `class Elsykkel extends Sykkel { … }`; arv av felt/metoder; **`super(...)` i konstruktøren — må stå FØRST**, sender parametrene oppover; utvide (egne felt etter `super`-kallet); **`@Override`** ved overstyring (fanger signaturfeil, gir stilpluss); **`protected`** for det subklasser trenger (felt/hjelpemetoder) — begrunn: mer åpent enn `private`, mer lukket enn `public`; **polymorfi** — kall via supertype-referanse (`Sykkel s = new Elsykkel(); s.beskriv();`) gir dynamisk oppslag til den faktiske klassens metode; `super.metode()` for å kalle superklassens versjon (f.eks. `toString()` polymorft med `super.toString()`). `theorem`-idiom: **konstruktørmalen (arv)**. `warning`: glemme/feilplassere `super(...)` (§5.5); duplisere superklassens felt i subklassen.
- **Oppgavesjangre:** H. Mønstereksempel: «`Ansatt` har felt `navn` og en konstruktør. Skriv `Sjef extends Ansatt` med et ekstra felt `avdeling`, en konstruktør som kaller `super(navn)` og setter `avdeling`, og en overstyrt `toString()` som bruker `super.toString()`. Forklar hvorfor `super(...)` må stå først.»
- **Typiske feil:** **Glemme/feilplassere `super(...)`** (§5.5, må stå først, riktig parameterrekkefølge); sette egne felt før `super`-kallet (kompilerer ikke); duplisere superklassens felt; glemme `@Override` (mister signatursjekk); tro at `protected` er det samme som `public`.
- **Quiz: 24 · Flashcards: 30**

#### Kapittel 3.2: Abstrakte klasser — `abstract`, og «bør denne være abstrakt?»

- **id:** `tdt4100-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4100-3-1` · **kapitteltype:** teori
- **description:** Gjøre en superklasse `abstract` når den ikke skal kunne instansieres, deklarere abstrakte metoder som subklassene må implementere, og fremfor alt **begrunne** valget — det faste tekstspørsmålet «hva er en abstrakt klasse, og bør denne være abstrakt?».
- **Eksamensbelegg:** Abstrakte klasser 48 % (11/23), superklasse gjøres abstrakt i Del 1/3. «Hva er en abstrakt klasse? Bør denne være abstrakt? Begrunn.» er selvstendig poenggivende. Prioritet: **perfekt** (begrunnelsen), **kunne** (mekanikken).
- **Kodekontrakt (API- og konstruksjonsliste):** **`abstract class Kjoretoy { abstract double rekkevidde(); … }`** — kan ikke instansieres (`new Kjoretoy()` er ulovlig), kan ha både abstrakte og konkrete metoder + felt + konstruktør (kalt via `super`); **abstrakt metode** (`abstract R m(...);` uten kropp) — hver konkret subklasse må implementere den med `@Override`; **`protected abstract`** for en valideringsmetode som må redefineres per subklasse (jf. 1.3); **begrunnelsen (svar sensor vil se):** gjør superklassen abstrakt når den bare er en felles overtype uten et meningsfullt selvstendig objekt (det finnes ingen «generell `Kjoretoy`», bare biler/sykler); ikke gjør en fullstendig, nyttig klasse abstrakt uten grunn; **generaliseringsmønster:** superklassens metode gjøres `protected`, subklassene tilbyr domenespesifikke innpakninger. `theorem`-idiom: **abstrakt-metode-malen**. `warning`: glemme `abstract` når superklassen ikke skal instansieres, eller gjøre en nyttig klasse abstrakt uten grunn (§5.6); levere svaret uten begrunnelse.
- **Oppgavesjangre:** H (abstrakt-delen). Mønstereksempel: «Lag en abstrakt superklasse `Abonnement` med et konkret felt `pris` og en abstrakt metode `manedsavgift()`, og to subklasser `Basis`/`Premium` som implementerer den. **Begrunn** hvorfor `Abonnement` bør være abstrakt.»
- **Typiske feil:** Prøve å instansiere en abstrakt klasse (`new Abonnement()`); glemme å implementere den abstrakte metoden i en subklasse; §5.6 (glemme `abstract`, eller gjøre en nyttig klasse abstrakt); **svare «bør denne være abstrakt» uten begrunnelse**; gi en abstrakt metode en kropp.
- **Quiz: 22 · Flashcards: 28**

#### Kapittel 3.3: `instanceof`, typekonvertering og uttrykkstyper

- **id:** `tdt4100-3-3` · **number:** 3.3 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4100-3-2` · **kapitteltype:** teori
- **description:** Sjekke og konvertere typer med `instanceof` + cast (aldri cast uten sjekk), spesialbehandle subtyper i en samling, og de korte «bestem typen til uttrykket»-spørsmålene om statisk typing — differensierende nivå-2-apparat.
- **Eksamensbelegg:** `instanceof` + cast 39 % (9/23), uttrekk/spesialbehandling av subtype. Uttrykkstype-kortsvar 39 % (epoke 1–2, «bestem typen»). Prioritet: **kunne**.
- **Kodekontrakt (API- og konstruksjonsliste):** **`x instanceof Elsykkel`** — sann også for subtyper; **typekonvertering** `(Elsykkel) x` etter en `instanceof`-sjekk (uten sjekk → `ClassCastException`); hvorfor man caster (tilgang til subklassens spesifikke metoder); **spesialbehandle subtyper i en samling:** `for (Sykkel s : sykler) if (s instanceof Elsykkel) { Elsykkel e = (Elsykkel) s; … }`; `getClass()` nevnt kort; **uttrykkstyper (kortsvar):** `String + String → String`, `int/int → int` (heltallsdivisjon), `char - char → int`, `String + char → String`, `== → boolean`, substitusjonsregelen (`Collection<String> s = new ArrayList<String>()`). `theorem`-idiom: **`instanceof`-før-cast**. `warning`: caste uten `instanceof`-sjekk (§5.7-relatert, `ClassCastException`).
- **Oppgavesjangre:** O + moment i H. Mønstereksempel: «Skriv en metode `int antallElsykler(Collection<Sykkel> sykler)` som teller elsyklene med `instanceof`. Bestem deretter typen til uttrykkene `5 / 2`, `"kr " + 5`, og `'b' - 'a'`.»
- **Typiske feil:** Caste uten `instanceof`-sjekk (`ClassCastException`); tro at `int/int` gir desimaltall; blande statisk og dynamisk type; glemme at `instanceof` også er sann for subtyper.
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 3.4: DRILL — Generalisering (Del 3)

- **id:** `tdt4100-3-4` · **number:** 3.4 · **estimatedMinutes:** 80 · **prerequisites:** `tdt4100-3-3` · **kapitteltype:** drill
- **description:** Full drill på Del 3: trekk felles felt/metoder opp i en abstrakt superklasse, skriv subklasser med `super()` og `@Override`, bruk `protected` riktig og `instanceof`/cast for spesialbehandling — med begrunnelsen for abstrakt/protected/override, i sensors korte stil.
- **Eksamensbelegg:** Del 3 (~90 %), 10–20 %. Bygger på Del 1/2-klassene. Begrunnelsen (abstrakt/protected) poenggivende. Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** 1) identifisér felles felt/metoder → superklasse; 2) gjør superklassen `abstract` hvis den ikke har et meningsfullt objekt (**begrunn**); 3) abstrakt(e) metode(r) subklassene må gi; 4) subklasser `extends` med **`super(...)` først**, egne felt etter; 5) `@Override` på redefinerte metoder; 6) `protected` for det subklasser trenger (begrunn); 7) `instanceof`/cast for uttrekk av subtype. Gjennomregnet eksamenscase med **sensor-margnotater** (begrunnelsen for abstrakt/protected teller; riktig `super()`-plassering; alternative rimelige hierarkier godtas). 8–12 oppgaver på eksamensnivå, roterende domener, hver med kompakt fasit + begrunnelse.
- **Oppgavesjangre:** H, O. Mønstereksempel: «Generalisér `Elsykkel` og `Bysykkel` til en abstrakt `Sykkel` med felles felt og en abstrakt `pris()`. Skriv hierarkiet med `super()`, `@Override` og `protected`, og en metode som teller elsyklene i en `Collection<Sykkel>` med `instanceof`. Begrunn hvorfor `Sykkel` er abstrakt.»
- **Typiske feil:** §5.5 (glemt/feil `super()`), §5.6 (glemt `abstract` / unødvendig abstrakt), §5.7 (cast uten `instanceof`); duplisere felt i subklassen; levere uten begrunnelse.
- **Quiz: 22 · Flashcards: 18**

---

### Del 4 — Grensesnitt og designmønstre *(Del 4: PERFEKT/KUNNE — differensierende)*

> Del 4 gir de karakteravgjørende differensieringspoengene: grensesnitt (70 %) kombinert med
> **observatør-observert** (52 %, femstegsmalen sensor lister ordrett) og **delegering** (30 %),
> pluss funksjonelle grensesnitt + lambda/Stream (~100 % 2014–2017). Observatør-observert har
> eget kapittel (4.2) OG driller i kap. 4.5. Fire teorikapitler + drill.

#### Kapittel 4.1: Grensesnitt og funksjonelle grensesnitt

- **id:** `tdt4100-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4100-3-2` · **kapitteltype:** teori
- **description:** Definere og implementere grensesnitt (`interface`, `implements`, `implements X, Y`), skille grensesnitt fra abstrakt klasse («kan gjøre» vs. «er en»), og begrepet funksjonelt grensesnitt (nøyaktig én abstrakt metode) — grunnlaget for både observatør-observert og lambda.
- **Eksamensbelegg:** Grensesnitt 70 % (16/23), ofte kombinert med delegering/observatør. «Er dette et funksjonelt grensesnitt? Begrunn.» fast 2014–2017. Prioritet: **perfekt** (grensesnitt), **kunne** (funksjonelt-begrepet).
- **Kodekontrakt (API- og konstruksjonsliste):** `interface Rabatterbar { double rabatt(); }` — kun metodesignaturer (implisitt `public abstract`), ingen tilstand; `class Vare implements Rabatterbar { … }`; en klasse kan `implements` **flere** grensesnitt (`implements Rabatterbar, Sammenlignbar`); **grensesnitt vs. abstrakt klasse** (grensesnitt = «kan gjøre», flere lov; arv = «er en», bare én superklasse); **deklarér variabel som grensesnittet, instansiér implementasjonen** (`Rabatterbar r = new Vare();` — aldri `new Rabatterbar()`); **funksjonelt grensesnitt** = nøyaktig **én abstrakt metode**, og resultatet avhenger bare av argumentene (ingen tilstand) → kan implementeres med lambda (se 4.4); standard funksjonelle grensesnitt `Predicate<T>`, `Comparator<T>`, `Comparable<T>`. `warning` (**sentral**): instansiér aldri selve grensesnittet (§5.1); et lyttergrensesnitt er teknisk funksjonelt (én metode) men er ikke ment som en primærfunksjon — nevn nyansen.
- **Oppgavesjangre:** Forkunnskap til I/J/K. Mønstereksempel: «Lag et grensesnitt `Leverbar` med metoden `boolean erKlar()`, la `Ordre implements Leverbar`, og forklar forskjellen mellom å bruke et grensesnitt og en abstrakt superklasse her. Er `Leverbar` et funksjonelt grensesnitt? Begrunn.»
- **Typiske feil:** **Instansiere grensesnittet** (§5.1); gi grensesnitt-metoder en kropp/tilstand; glemme å implementere alle metodene; blande `extends` (én superklasse) og `implements` (flere grensesnitt); **svakt funksjonelt-svar** — bare si «én metode» uten å nevne at resultatet skal avhenge kun av argumentene (§5.13).
- **Quiz: 24 · Flashcards: 30**

#### Kapittel 4.2: Observatør-observert (lytter-mønster) — femstegsmalen

- **id:** `tdt4100-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4100-4-1`, `tdt4100-2-1` · **kapitteltype:** teori
- **description:** Det viktigste differensierende designmønsteret: hvordan en observert klasse varsler lyttere automatisk når tilstanden endres, bygget etter femstegsmalen sensor lister ordrett — med det faste spørsmålet «hva slags generell teknikk kan brukes for å oppdatere X automatisk når Y endres?».
- **Eksamensbelegg:** Observatør-observert 52 % (12/23), signatur-mønsteret i TDT4100, karakteravgjørende der det dukker opp. «Hva slags generell teknikk?» → observatør-observert. Lytter-implementasjon 48 %. Prioritet: **perfekt** (differensierende).
- **Kodekontrakt (API- og konstruksjonsliste):** **Femstegsmalen (sensor lister den ordrett):** (1) et **lyttergrensesnitt** med en varslingsmetode (`interface LagerLytter { void vareEndret(Vare v); }`); (2) et **felt med en `Collection` av lyttere** i den observerte klassen (`private Collection<LagerLytter> lyttere = new ArrayList<>();`); (3) **`addLytter`/`removeLytter`-metoder**; (4) en **`fire`/kringkastingsmetode** (`private void fireVareEndret(Vare v) { for (LagerLytter l : lyttere) l.vareEndret(v); }`); (5) **kall på kringkastingsmetoden overalt der tilstanden endres** (i hver endringsmetode). Observatøren `implements LagerLytter` og melder seg på i konstruktøren (`lager.addLytter(this)`); **funksjonelt-oppfølger:** lyttergrensesnittet er teknisk funksjonelt (én metode), men typisk ikke ment som primærfunksjon. `theorem`-idiom (**sentralt**): **observatør-femstegsmalen**. `warning` (**sentral**): mangle ett av de fem trinnene — særlig **glemme kallet ved én av flere endringsmetoder** (§5.9).
- **Oppgavesjangre:** I. Mønstereksempel: «En `Varslinstavle` skal oppdateres automatisk når en `Værstasjon` får ny måling. Sett opp observatør-observert: lag lyttergrensesnittet, gi `Værstasjon` en lytterliste med `addLytter`/`removeLytter` og en kringkastingsmetode, og kall den i `settTemperatur(...)`. La `Varslingstavle implements` grensesnittet og melde seg på. Hva slags generell teknikk er dette?»
- **Typiske feil:** **Ufullstendig oppsett** — mangle grensesnitt / lytterliste / add-remove / kringkasting / kall ved *alle* endringer (§5.9); glemme kringkastingskallet i en av flere endringsmetoder; la observatøren ikke melde seg på; ikke kunne navngi teknikken («observatør-observert»).
- **Quiz: 24 · Flashcards: 30**

#### Kapittel 4.3: Delegering, komposisjon og drøftingen mot arv

- **id:** `tdt4100-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4100-4-1` · **kapitteltype:** teori
- **description:** Delegering: et objekt holder en referanse til en delegat (ofte et grensesnitt) og videresender oppgaven, med mulighet for å bytte delegat i kjøretid — pluss komposisjon av delegater og den faste drøftingen «delegering vs. arv: hva er mest fleksibelt?».
- **Eksamensbelegg:** Delegering 30 % (7/23), ofte satt opp mot arv: «vurder fleksibiliteten». Prioritet: **kunne** (differensierende).
- **Kodekontrakt (API- og konstruksjonsliste):** **Delegering:** et delegerende objekt holder en **delegat-referanse** (ofte av et grensesnitt) og videresender: `private Prisberegner beregner; public double pris() { return beregner.beregn(this); }`; **kjøretidsbytte** `setBeregner(Prisberegner b)` (bytt oppførsel uten ny klasse); **komposisjon:** sett sammen delegater (`new SamletRabatt(rabatt1, rabatt2)`) for å løse sammensatte problemer uten nye subklasser; **drøftingen (fast):** delegering er **mer fleksibel** enn arv — delegaten kan byttes i kjøretid, og arven frigjøres til andre formål; arv binder oppførselen ved kompilering; **komposisjon over arv** som prinsipp. `theorem`-idiom: **delegeringsmalen**. `warning`: ikke se at delegering (bytt delegat i kjøretid) er mer fleksibelt, eller ikke klare å forklare forskjellen (§5.10).
- **Oppgavesjangre:** J. Mønstereksempel: «En `Ordre` beregner frakt via en delegat `Fraktberegner` (grensesnitt) i stedet for arv, slik at beregningen kan byttes i kjøretid (`setFraktberegner`). Skriv oppsettet og **drøft** hvorfor delegering er mer fleksibelt enn å lage `GratisFraktOrdre extends Ordre`.»
- **Typiske feil:** §5.10 (ikke se fleksibilitetsforskjellen delegering vs. arv, eller ikke forklare den); la delegaten være en konkret klasse i stedet for et grensesnitt (mister byttbarheten); blande delegering og arv i samme oppgave uten begrunnelse.
- **Quiz: 22 · Flashcards: 28**

#### Kapittel 4.4: Funksjonelle grensesnitt, lambda og Stream (Java 8)

- **id:** `tdt4100-4-4` · **number:** 4.4 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4100-4-1`, `tdt4100-2-1` · **kapitteltype:** teori
- **description:** Java 8-laget: implementere funksjonelle grensesnitt med lambda, bruke `Predicate` og `Comparator` som lambda, og skrive Stream-uttrykk (`filter`/`map`/`reduce`) — presentert som sidestilt alternativ til løkke.
- **Eksamensbelegg:** Lambda/Stream 22 % totalt / **~100 % 2014–2017**; funksjonelle grensesnitt (begrep) fast 2014–2017. «Skriv om denne løkka med Stream.» Prioritet: **kunne** (fast fra 2014), **kjenne** (eldre sett).
- **Kodekontrakt (API- og konstruksjonsliste):** **Lambda:** uttrykksform `(v) -> v.getPris() > 100`, blokkform `(a, b) -> { … }`; implementerer et funksjonelt grensesnitt (én abstrakt metode); **`Predicate<T>`** (`p -> p.erAktiv()`), **`Comparator<T>`** som lambda (jf. 2.3); **Stream:** `xs.stream().filter(v -> v.getPris() > 100).map(Vare::getNavn).collect(Collectors.toList())`; `mapToInt(...).sum()`, `reduce`, `anyMatch`/`allMatch`, `sorted`, `forEach`; **metodereferanse** `Vare::getNavn`; **sidestilling:** «skriv om denne løkka med Stream» — vis alltid **både** løkke- og Stream-variant og si at begge gir full uttelling (sensorregel §1.5). `theorem`-idiom: **Stream-malen**. `warning`: bruke Stream med sideeffekter/tilstand (bryter «avhenger bare av argumentene»); tro at Stream er «riktigere» enn løkke — begge sidestilles.
- **Oppgavesjangre:** K. Mønstereksempel: «Gitt en `List<Vare>`, skriv en metode `dyreVarer()` som returnerer navnene på varer over 100 kr — først med en for-each-løkke, så med Stream (`filter`/`map`/`collect`). Forklar at begge er likeverdige. Er `Predicate<Vare>` et funksjonelt grensesnitt?»
- **Typiske feil:** §5.13 (svakt funksjonelt-svar); tro at Stream er obligatorisk eller «bedre» (løkke sidestilles); feil rekkefølge på Stream-operasjoner; bruke tilstand/sideeffekter i en lambda; glemme `collect`/terminal-operasjon.
- **Quiz: 22 · Flashcards: 28**

#### Kapittel 4.5: DRILL — Designmønster (observatør-observert + delegering)

- **id:** `tdt4100-4-5` · **number:** 4.5 · **estimatedMinutes:** 85 · **prerequisites:** `tdt4100-4-4` · **kapitteltype:** drill
- **description:** Full drill på Del 4: kjenn igjen hvilket designmønster oppgaven ber om, bygg observatør-observert etter femstegsmalen og delegering med kjøretidsbytte, og formulér drøftingen (teknikkens navn, delegering vs. arv) — i sensors korte stil.
- **Eksamensbelegg:** Del 4 (~85 %), 10–20 %, med observatør-observert (52 %) og delegering (30 %) som differensierende. «Hva slags generell teknikk?» er poenggivende. Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** 1) **kjenn igjen mønsteret** («oppdatere X automatisk når Y endres» → observatør-observert; «bytte oppførsel i kjøretid / unngå arv» → delegering); 2) observatør: bygg **alle fem** trinn (grensesnitt / lytterliste / add-remove / kringkasting / kall ved *alle* endringer); 3) delegering: delegat-referanse (grensesnitt) + videresending + `setDelegat`; 4) navngi teknikken og drøft (delegering vs. arv); 5) evt. Stream-variant sidestilt. Gjennomregnet eksamenscase med **sensor-margnotater** (riktig anvendt mønster gir uttelling selv om detaljlogikken glipper — «fokusér på hvordan teknikken anvendes»; det femte observatør-trinnet er lett å glemme). 8–12 oppgaver på eksamensnivå, roterende domener (værstasjon, aksjekurs-tavle, konsert-utsolgtvarsling for observatør; fraktberegning, prisberegning for delegering).
- **Oppgavesjangre:** I, J, K. Mønstereksempel: «En `Billettluke` skal varsle en `Utsolgttavle` når et arrangement blir utsolgt (observatør-observert, femstegsmalen), og beregne pris via en byttbar `Prisstrategi`-delegat (delegering). Sett opp begge, navngi teknikkene, og drøft hvorfor delegering er mer fleksibelt enn arv her.»
- **Typiske feil:** §5.9 (ufullstendig observatør — mangle et av fem trinn, særlig kallet ved en endringsmetode); §5.10 (blande delegering/arv, ikke forklare forskjellen); ikke navngi teknikken; §5.1 (instansiere grensesnittet).
- **Quiz: 24 · Flashcards: 18**

---

### Del 5 — Testing, fil-I/O og modellering *(Del 5: KUNNE/KJENNE + moderne spor)*

> Del 5 samler kvalitets-, verktøy- og dokumentasjonsstoffet: enhetstesting (52 %,
> differensierende), fil-I/O (39 %), objekt-/UML-diagram (~48 %+, nær hvert sett) og et
> moderne spor (JavaFX/UML-familien/verktøy fra epoke 3). Fire teorikapitler + drill.
> Diagrammer beskrives i strukturert tekst/ASCII (§1.8).

#### Kapittel 5.1: Enhetstesting med JUnit

- **id:** `tdt4100-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4100-2-2`, `tdt4100-2-3` · **kapitteltype:** teori
- **description:** Skrive enhetstester: rigg opp et lite objekt, kall metoden, sjekk returverdien med `assertEquals`/`assertTrue`/`assertFalse`, test unntak med `try/fail/catch`, dekk et rikt nok utvalg tilfeller, og gjør klassen testbar — differensierende ferdighet, ofte egen deloppgave i eksamens Del 4/5.
- **Eksamensbelegg:** Enhetstesting 52 % (12/23), egen deloppgave. Fra 2018 leveres kjørbar kode med JUnit-tester i IDE. Prioritet: **kunne** (differensierende).
- **Kodekontrakt (API- og konstruksjonsliste):** **`XTest`-klasse** med testmetoder; **`assertEquals(forventet, faktisk)`**, `assertTrue(...)`, `assertFalse(...)`, `assertNull`/`assertNotNull`; **`fail()`**; **testmalen:** rigg lite objekt → kall metode → assert; **rikt utvalg tilfeller** (seier/tap/uavgjort; `<`, `>`, `=` for `compareTo`; sammenligning med seg selv; tom samling); **unntakstesting:** `try { obj.metode(ugyldig); fail("skulle kastet"); } catch (IllegalArgumentException e) { }`, bruk `instanceof` for å skille innsjekket/uinnsjekket; **testbarhet:** foreslå en pakke-privat hjelpemetode (f.eks. `leggTilDirekte(...)`) for å rigge tilstand direkte, så testen blir spisset; (JUnit-annotasjonen `@Test` nevnes, men vær tolerant for versjonsvariasjon — tren *bruk*, ikke pugg). `theorem`-idiom: **JUnit-testmalen**. `warning`: teste for få tilfeller (bare det enkle); ikke teste at unntak faktisk kastes (glemme `fail()`).
- **Oppgavesjangre:** M. Mønstereksempel: «Skriv JUnit-tester for `Spiller.compareTo`: test at en spiller med flere poeng kommer først (`< 0`), at lik poengsum gir 0, og at sammenligning begge veier er konsistent. Skriv også en test som verifiserer at `setPoeng(-1)` kaster `IllegalArgumentException` (`try/fail/catch`).»
- **Typiske feil:** Teste for få tilfeller; forvente feil argument-rekkefølge i `assertEquals` (forventet først); **glemme `fail()`** i unntakstesten (testen består selv om unntaket ikke kastes); teste implementasjonsdetaljer i stedet for oppførsel; ikke gjøre klassen testbar.
- **Quiz: 22 · Flashcards: 28**

#### Kapittel 5.2: Fil- og strøm-I/O — `Scanner`, `PrintWriter`, `load`/`save`

- **id:** `tdt4100-5-2` · **number:** 5.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4100-2-1`, `tdt4100-1-3` · **kapitteltype:** teori
- **description:** Lese og skrive et linjebasert tekstformat: `Scanner` rundt en `InputStream`, `PrintWriter` rundt en `OutputStream`, `load`/`save` av objektlister, `IOException` og to-pass-lagring — det I/O-apparatet eksamen faktisk bruker.
- **Eksamensbelegg:** Fil-/strøm-I/O 39 % (9/23), `load`/`save` mot linjebasert tekstformat. Prioritet: **kunne**.
- **Kodekontrakt (API- og konstruksjonsliste):** **`Scanner(InputStream)`** (`hasNextLine()`/`nextLine()`, `hasNextInt()`/`nextInt()`) for lesing; **`PrintWriter(OutputStream)`** (`print`/`println`, avslutt med **`flush()`**, ikke `close()` på en strøm man ikke eier); **`save(OutputStream)`/`load(InputStream)`** på en beholderklasse; tokenisering av tekstlinjer (`String.split(";")`); **`throws IOException`** (mest spesifikke type) — svelg aldri unntaket stille; **to-pass-lagring:** skriv først objektdefinisjoner, deretter relasjoner (så lasting ikke får forover­referanser); håndtér tomme linjer / `#`-kommentarer i `load`. `warning`: bruke `close()` på en strøm man ikke eide i stedet for `flush()` (§5.11); svelge `IOException`; ikke håndtere tomme/kommentarlinjer.
- **Oppgavesjangre:** L. Mønstereksempel: «Gi `Medlemsregister` metodene `save(OutputStream ut)` og `load(InputStream inn)` for et linjeformat `medlemsnr;navn;poeng`. Bruk `PrintWriter`/`Scanner`, avslutt skriving med `flush()`, deklarér `throws IOException`, og hopp over tomme linjer ved lasting.»
- **Typiske feil:** §5.11 (`close()` i stedet for `flush()`; svelge `IOException`; ikke håndtere tomme/`#`-linjer); glemme `throws IOException`; lese med feil `Scanner`-metode (`nextInt` der en linje forventes); forover­referanser ved lasting (ikke to-pass).
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 5.3: Diagrammer — objekt-, objekttilstands- og UML-klassediagram

- **id:** `tdt4100-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4100-3-1`, `tdt4100-4-1` · **kapitteltype:** teori
- **description:** Tegne de tre diagramtypene eksamen ber om — objektdiagram (objekter med feltverdier + referansepiler), objekttilstandsdiagram (før → transisjon → etter) og UML-klassediagram (klasser/grensesnitt med arv-/implementasjons-/aggregeringspiler) — og velge riktig type, siden feil type trekker.
- **Eksamensbelegg:** Diagram ~48 %+ (11/23 eksplisitt, undertelt av OCR), «tegn …» i de fleste sett. «Se Big Java-appendiks for notasjon.» Prioritet: **kunne**.
- **Kodekontrakt (API- og konstruksjonsliste):** **Objektdiagram:** *objekter* (ikke klasser) med feltverdier i boksen og **navngitte referansepiler `→`** mellom dem; vis hvilke objekter som fantes fra før vs. ble opprettet; `null` som strek. **Objekttilstandsdiagram:** før-tilstand → **transisjon** (metodekall med konkrete argumenter) → etter-tilstand; verdiene må stemme (f.eks. `flyttBord(5)` endrer `plasser` fra 4 til 9). **UML-klassediagram:** klasser/grensesnitt med **arvepil `▷`** (subklasse → superklasse), **implementasjonspil `- -▷`** (klasse → grensesnitt) og **aggregering `◇—`** (holder-referanse); noen sentrale attributter/metoder; abstrakt/`interface` markeres. **Velg riktig type:** oppgaven presiserer hvilket — objekt (konkret tilstand) vs. tilstand (endring) vs. klasse (struktur). Fordi plattformen ikke tegner grafisk, beskrives alt i **strukturert tekst/ASCII** (§1.8). `warning`: tegne klassediagram når det spørres om objekt-/tilstandsdiagram (§5.12); utelate feltverdier/piler; blande de tre typene.
- **Oppgavesjangre:** N. Mønstereksempel: «Tegn (i strukturert tekst) objektdiagrammet etter at to `Sang`-objekter er lagt i en `Spilleliste`: vis listens referanse til hver sang og sangenes feltverdier. Tegn deretter et UML-klassediagram for hierarkiet `abstrakt Medium ▷ Sang/Podkast`, `Spilleliste ◇— Medium`.»
- **Typiske feil:** §5.12 (feil diagramtype — klasse der objekt/tilstand bes om); tegne klasser i objektdiagram (eller motsatt); utelate feltverdier eller referansepiler; feil pilretning (arv skal peke opp mot superklassen); glemme å skille konkrete objekter fra klasser.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 5.4: Moderne spor — JavaFX, UML-familien og verktøykjeden (epoke 3)

- **id:** `tdt4100-5-4` · **number:** 5.4 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4100-5-3` · **kapitteltype:** teori
- **description:** Det utvidede epoke-3-apparatet samlet: en enkel JavaFX-GUI med hendelseshåndtering, UML-familien i bredde (sekvens-/interaksjonsdiagram), og verktøykjeden (git/GitLab, JUnit-i-IDE, moderne inkl. AI-baserte hjelpemidler) — orienteringsstoff for de nyeste settene, ikke kjerne.
- **Eksamensbelegg:** GUI 9 % Swing i arkivet, men **JavaFX løftet i emnebeskrivelsen**; UML-familien/verktøy fremhevet i epoke 3 (2018+). ÆRLIGHETSKRAV: 2018+ ikke i arkivet som PDF — dette kapitlet er rekonstruert fra emnebeskrivelsen. Prioritet: **kjenne**.
- **Kodekontrakt (API- og konstruksjonsliste):** **JavaFX (orientering):** `Stage`/`Scene`, kontroller (`Button`, `Label`, `TextField`), hendelseshåndtering med `setOnAction(event -> …)` / `EventHandler`; skille modell (klassene fra Del 1–4) fra GUI; (Swing nevnes kort som forgjenger — `JFrame`/`ActionListener` — merket «eldre»); **UML-familien i bredde:** sekvensdiagram (meldinger mellom objekter over tid), interaksjonsdiagram — nevnes, ikke drilles; **verktøykjeden:** git/GitLab (versjonskontroll, eksamensrepo), JUnit i IDE, feilsøking/debugging, moderne hjelpemidler inkl. AI. `warning`: dette er **orienteringsstoff** — bruk lite tid her; kjernen (Del 1–4) avgjør karakteren. Tydelig merket «moderne / epoke 3 / for de nyeste settene».
- **Oppgavesjangre:** (lav) — mest begreps- og orienteringsoppgaver. Mønstereksempel: «Skisser hvordan en JavaFX-`Button` med `setOnAction` kan legge en vare i handlekurv-modellen fra Del 2, og forklar hvorfor GUI-en holdes atskilt fra modellklassene.»
- **Typiske feil:** Blande modell og GUI (legge domenelogikk i hendelseshåndtereren); tro at JavaFX/verktøy er kjernen (det er Del 1–4); pugge JavaFX-API i stedet for å forstå modell/GUI-skillet.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 5.5: DRILL — Testing og modellering (Del 5)

- **id:** `tdt4100-5-5` · **number:** 5.5 · **estimatedMinutes:** 80 · **prerequisites:** `tdt4100-5-3`, `tdt4100-5-1` · **kapitteltype:** drill
- **description:** Full drill på Del 5: skriv JUnit-tester med et rikt tilfelleutvalg og unntakstesting, og tegn riktig diagramtype (objekt-/tilstands-/UML-klassediagram) for et gitt hierarki — i sensors korte stil, med diagramtype-valget i fokus.
- **Eksamensbelegg:** Del 5 (~55 %) + testing (~52 %), 10 %+. Diagram nær hvert sett; testing egen deloppgave. Prioritet: **kunne**.
- **Kodekontrakt (løsningsoppskrift):** 1) **testing:** rigg → kall → assert; dekk grensetilfeller (tom/lik/negativ); unntakstest med `try/fail/catch`; foreslå testbarhets-hjelpemetode; 2) **diagram:** les hvilken type som bes om (§5.12), tegn objektdiagram (feltverdier + piler) / tilstandsdiagram (før → transisjon → etter) / UML-klassediagram (arv `▷` / implementasjon `- -▷` / aggregering `◇—`) i strukturert tekst. Gjennomregnet eksamenscase med **sensor-margnotater** (riktig diagramtype og komplett testdekning gir uttelling; feil diagramtype trekker). 8–12 oppgaver på eksamensnivå, roterende domener, hver med både en test- og en diagramdel.
- **Oppgavesjangre:** M, N. Mønstereksempel: «For `Turnering` fra kap. 2.5: skriv JUnit-tester for `toppliste()` (riktig rekkefølge, poenglikhet, tom turnering) og for at `meldPaa` med ugyldig spiller kaster unntak. Tegn deretter UML-klassediagrammet for hierarkiet og objektdiagrammet etter at to spillere er meldt på.»
- **Typiske feil:** §5.12 (feil diagramtype); §5-testing (for få tilfeller, glemt `fail()`); tegne klasser i objektdiagram; utelate piler/feltverdier; teste implementasjon i stedet for oppførsel.
- **Quiz: 20 · Flashcards: 16**

---

### Del 6 — Eksamenstrening

> Tre komplette 4-timers øvingseksamener etter den faste fem-delers stigen Del 1→5, hver over
> **ett** gjennomgående nyskrevet domene. Til sammen dekker de sjangrene A–O. Ingen midtveis
> (TDT4100 er én eksamen). Hvert sett er kode + begrunnelse + diagram, med løsningsforslag som
> A-besvarelse (kort idiomatisk Java + begrunnelsestekst + tekstdiagram) i `collapsible` per del.

#### Kapittel 6.1: Øvingseksamen 1 — treningssenter (klassisk hybrid)

- **id:** `tdt4100-6-1` · **number:** 6.1 · **estimatedMinutes:** 240 · **prerequisites:** Del 1–5 · **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers sett etter den faste Del 1→5-stigen over ett domene (treningssenter), i epoke-2s hybride form: kode + begrunnelse + diagram, med samling, `Comparable`, arv, observatør-observert og modellering.
- **Eksamensbelegg/miks:** Speiler et typisk moderne sett (100 %): **Del 1** innkapsling — `abstrakt Medlem` (`Basis`/`Premium`), `private final medlemsnr` via `static`-teller, validering-med-unntak, begrunn modifikatorene (20 %) → **Del 2** `Treningssenter` med `Collection<Medlem>`: meld på / meld ut / finn, `Comparable` på treningspoeng + `Collections.sort`, `toString`, iterator, kopi-getter (**50 %**) → **Del 3** arv/generalisering med `super()`, `@Override`, `protected`, «bør `Medlem` være abstrakt?» (15 %) → **Del 4** observatør-observert (en `Kapasitetstavle` varsles når senteret blir fullt, femstegsmalen) + en JUnit-test (10 %) → **Del 5** UML-klassediagram + objektdiagram (5 %). Alle oppgaver nyskrevne. Løsningsforslag som A-besvarelse i `collapsible` per del (kort kode + begrunnelse + tekstdiagram), med `tip` om delpoeng/vekting og hva som gir uttelling ved delvis riktig. `tip` om tidsbudsjett (Del 1 ~45 min, Del 2 ~110 min, Del 3 ~35 min, Del 4 ~35 min, Del 5 ~15 min).
- **Kodekontrakt:** Dekker sjangrene A, B, C, E, F, G, H, I, M, N.
- **Oppgavesjangre:** A, B, C, E, F, G, H, I, M, N.
- **Quiz: 10 · Flashcards: 0**

#### Kapittel 6.2: Øvingseksamen 2 — konsertarrangør (delegering + fil-I/O)

- **id:** `tdt4100-6-2` · **number:** 6.2 · **estimatedMinutes:** 240 · **prerequisites:** `tdt4100-6-1` · **kapitteltype:** øvingseksamen
- **description:** Komplett sett med et tyngre Del 4/5-toppsjikt: konstantklasse, `HashSet`/`HashMap`, delegering med kjøretidsbytte, fil-I/O (`load`/`save`) og objekttilstandsdiagram — over ett domene (konsertarrangør/billettsystem).
- **Eksamensbelegg/miks:** Speiler et sett som vektlegger delegering og I/O (100 %): **Del 1** `abstrakt Arrangement` + konstantklasse `Billettype` (enum-mønster), validering, `static`-konstanter (20 %) → **Del 2** `Billettluke` med `HashMap<String, Billett>` (register) og `HashSet` (unngå duplikat), `Comparable` på pris, `toString`, kopi-getter (**45 %**) → **Del 3** arv med `super()`/`protected`, `instanceof`-uttrekk av en subtype (15 %) → **Del 4** **delegering:** pris beregnes via en byttbar `Prisstrategi`-delegat (`setStrategi`), drøft delegering vs. arv; funksjonelt grensesnitt-spørsmål (12 %) → **Del 5** fil-I/O (`save`/`load` av billetter) + objekttilstandsdiagram for et salg (8 %). Alle nyskrevne. Løsningsforslag som A-besvarelse med begrunnelse + tekstdiagram, delpoeng-`tip`, og **sidestilte varianter** der arkivet gir dem (`Comparable` vs. `Comparator`; delegering-drøftingen).
- **Kodekontrakt:** Dekker sjangrene A, B, C, D, E, F, H, J, K, L, N, O.
- **Oppgavesjangre:** A, B, C, D, E, F, H, J, K, L, N, O.
- **Quiz: 8 · Flashcards: 0**

#### Kapittel 6.3: Øvingseksamen 3 — strømmetjeneste (moderne IDE/JUnit-stil, Stream)

- **id:** `tdt4100-6-3` · **number:** 6.3 · **estimatedMinutes:** 240 · **prerequisites:** `tdt4100-6-2` · **kapitteltype:** øvingseksamen
- **description:** Komplett sett i epoke-3s moderne form (kjørbar kode + JUnit-tester i IDE, Java 8 fremhevet): funksjonelle grensesnitt + lambda/Stream, observatør-observert, en full JUnit-testklasse og UML — over ett domene (musikk-/podkast-strømmetjeneste).
- **Eksamensbelegg/miks:** Speiler et moderne IDE-sett (~fem likevektede deler, 100 %): **Del 1** `abstrakt Medium` (`Sang`/`Podkast`), innkapsling/validering, `static`-teller (20 %) → **Del 2** `Spilleliste` med samling, `Comparable`, iterator, `toString`, kopi-getter (**45 %**) → **Del 3** arv + `instanceof`-uttrekk (`Podkast[] hentPodkaster()`) (12 %) → **Del 4** **funksjonelle grensesnitt + Stream** (`filter`/`map`/`reduce`, sidestilt med løkke) + observatør-observert (en `AvspillingsLogg` varsles ved ny avspilling) (13 %) → **Del 5** en **komplett JUnit-testklasse** (assert*, unntakstest, rikt utvalg) + UML-klassediagram (10 %). Alle nyskrevne. Løsningsforslag som A-besvarelse med kjørbar-kode-stil, **både løkke- og Stream-variant sidestilt**, delpoeng-`tip`, og et `tip` om at moderne sett leveres som kjørbar kode med JUnit i IDE (ÆRLIGHETSKRAV — dette settet er rekonstruert fra emnebeskrivelsen, ikke fra et PDF-fasit).
- **Kodekontrakt:** Dekker sjangrene A, B, C, E, F, G, H, I, K, M, N — supplerer 6.1/6.2 slik at de tre settene sammen dekker A–O minst én gang (D i 6.2; J i 6.2; L i 6.2; O i 6.2/3.3).
- **Oppgavesjangre:** A, B, C, E, F, G, H, I, K, M, N.
- **Quiz: 8 · Flashcards: 0**

---

## 5. Summeringskontroll (quiz/flashcards) — AUTORITATIV

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 16 | 18 |
| 1 | 1.1–1.5 | 22+26+24+24+24 = **120** | 28+32+30+30+18 = **138** |
| 2 | 2.1–2.5 | 26+24+22+20+24 = **116** | 32+30+28+26+18 = **134** |
| 3 | 3.1–3.4 | 24+22+20+22 = **88** | 30+28+26+18 = **102** |
| 4 | 4.1–4.5 | 24+24+22+22+24 = **116** | 30+30+28+28+18 = **134** |
| 5 | 5.1–5.5 | 22+20+22+18+20 = **102** | 28+26+26+24+16 = **120** |
| 6 | 6.1–6.3 | 10+8+8 = **26** | 0+0+0 = **0** |
| **Sum** | **28 kap.** | **584 ≥ 500 ✓** | **646 (mål 600–750) ✓** |

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri underskride. Fordelingen
speiler frekvens og eksamensform: Del 1 og Del 2 (~100 %, tyngst) bærer mest, Del 4
(differensierende designmønstre) er tungt til tross for lavere vekt, fordi observatør-observert
og delegering er begrepsrike og karakteravgjørende.

**Flashcard-tettheten er bevisst høy (646, ikke ~500).** TDT4100 er et **svært begrepsrikt
kodefag**: fem synlighetsmodifikatorer, `final`/`static`/`abstract`, unntakstyper (innsjekket/
uinnsjekket + `IllegalArgumentException`/`IllegalStateException`/`IOException`), fire
samlingsgrensesnitt (`Collection`/`List`/`Set`/`Map`) med implementasjoner, `equals`/`hashCode`/
`toString`/`Comparable`/`Comparator`/`Iterable`, arveapparatet (`extends`/`super`/`@Override`/
`protected`/`instanceof`), **fem designmønster-maler** (observatør-femstegsmalen alene har fem
navngitte trinn), lambda/Stream-operasjoner, JUnit-`assert*`, I/O-klasser og tre diagramtyper —
hver en egen flashcard-kandidat. Jf. audit-lærdommen «≥500 er et gulv»: et rent puggbart
begrepsapparat skal ha høy flashcard-tetthet. Flashcards rammes som **«hva gjør dette / når
velger jeg det / hvorfor»** (ikke signaturpugg — hjelpemiddel C, se §1-avvik).

**Quiz kalibreres mot begrunnelse + sensorregel + kode-lesing** (ikke mot eksamen direkte, som
ikke har flervalg — se avviket i §1). Del 6 gir få quiz (settene ER treningen); Del 1–2 bærer
mest quiz fordi begrunnelses- og sensorregel-spørsmålene er tettest der.

> **Merk (flashcard-margin):** flashcard-summen (646) ligger komfortabelt over gulvet på 500 og
> midt i målintervallet 600–750. Fordi flashcards KUN genereres fra toppnivå `definition`-
> blokker med `title` (§1-avvik), og en agent kan underskyte, skal byggekontrakten likevel sette
> et **arbeidsmål på +5 % (≈680 flashcards)** for å garantere ≥600 etter validering. Kvotene i
> tabellen er absolutt minimum per kapittel.

---

## 6. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–5 → 20 prøver)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med løsningsforslag (kort idiomatisk Java +
begrunnelse + evt. tekstdiagram) og poengfordeling. Prøvekapitler bygges som `tdt4100-<del>-prove`
(chapterNumber `<del>.P`) etter plattformmønsteret, eller som egne exercise-seksjoner i delens
drillkapittel. Del 0 (meta) og Del 6 (som ER eksamenene) får ikke egne prøver.

**Prøve-kvote Del 1:** 4 prøver (innkapsling, synlighet og validering)
1. Prøve 1.A (25 min): Klasse med felt/konstruktør/`toString` + velg og **begrunn** modifikatorer (sjanger A).
2. Prøve 1.B (25 min): Validering-med-unntak — setter/konstruktør som kaster `IllegalArgumentException`, checked vs. unchecked (sjanger B).
3. Prøve 1.C (25 min): `static` — teller, konstant, fabrikk/`valueOf` + begrunnelse (sjanger C).
4. Prøve 1.D (40 min): Full Del 1 — komplett innkapslet klasse med synlighet/`final`/`static`/validering + begrunnelse (evt. abstrakt superklasse).

**Prøve-kvote Del 2:** 4 prøver (klasser med bibliotekssamlinger)
1. Prøve 2.A (30 min): Klasse med `Collection`/`List` — legg til / fjern / finn + kopi-getter, deklarér grensesnitt/instansiér implementasjon (sjanger E).
2. Prøve 2.B (25 min): `equals`/`hashCode`/identitet + `HashSet`/`HashMap` (sjanger E-moment).
3. Prøve 2.C (30 min): `Comparable`/`compareTo` + `Collections.sort`, med sidestilt `Comparator` (sjanger F).
4. Prøve 2.D (40 min): Full Del 2 — hovedklasse med samling, sortering, iterator, `toString`, kopi-getter (den tyngste).

**Prøve-kvote Del 3:** 4 prøver (arv, abstrakte klasser og polymorfi)
1. Prøve 3.A (30 min): Arv — subklasse med `super()`, `@Override`, `protected` (sjanger H).
2. Prøve 3.B (30 min): Abstrakt superklasse — «bør denne være abstrakt?» + abstrakt metode (sjanger H + begrunnelse).
3. Prøve 3.C (25 min): `instanceof`/cast + uttrykkstyper (sjanger H + O).
4. Prøve 3.D (40 min): Full Del 3 — generalisering til abstrakt superklasse med subklasser + begrunnelse.

**Prøve-kvote Del 4:** 4 prøver (grensesnitt og designmønstre)
1. Prøve 4.A (25 min): Grensesnitt + funksjonelt grensesnitt-begrep + `implements X, Y` (sjanger K-moment).
2. Prøve 4.B (35 min): Observatør-observert — femstegsmalen, «hva slags teknikk?» (sjanger I).
3. Prøve 4.C (30 min): Delegering + kjøretidsbytte + drøft mot arv (sjanger J).
4. Prøve 4.D (30 min): Lambda/Stream vs. løkke (sidestilt) + `Predicate` (sjanger K).

**Prøve-kvote Del 5:** 4 prøver (testing, fil-I/O og modellering)
1. Prøve 5.A (30 min): JUnit — `assert*`, unntakstest (`try/fail/catch`), rikt tilfelleutvalg (sjanger M).
2. Prøve 5.B (30 min): Fil-I/O — `load`/`save` med `Scanner`/`PrintWriter`, `IOException` (sjanger L).
3. Prøve 5.C (30 min): Diagram — objekt-/tilstands-/UML-klassediagram, velg riktig type (sjanger N).
4. Prøve 5.D (25 min): Full Del 5 — JUnit-test + UML/objektdiagram for et gitt hierarki.

### Øvingseksamener (3 komplette sett — se kap. 6.1–6.3)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 6.1) | Typisk moderne sett (epoke 2, hybrid) | Fast Del 1→5-stige (A/B/C/E/F/G/H/I/M/N), treningssenter-domene, observatør-observert |
| Øvingseksamen 2 (kap. 6.2) | Delegering/I/O-tungt sett | Del 1→5 med konstantklasse, `HashMap`/`HashSet`, delegering, fil-I/O (A–F/H/J/K/L/N/O), konsertarrangør-domene |
| Øvingseksamen 3 (kap. 6.3) | Moderne IDE-sett (epoke 3, kjørbar kode + JUnit) | Del 1→5 med lambda/Stream, observatør, full JUnit-testklasse (A/B/C/E/F/G/H/I/K/M/N), strømmetjeneste-domene |

Til sammen dekker de tre settene samtlige sjangre A–O minst én gang (O også i kap. 3.3; L/D/J i kap. 6.2).

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — én skoleeksamen (4 t, 100 %, kode C), den faste Del 1→5-stigen,
   at domenet roterer men øvelsen er den samme, og at oppgaven er **kode + begrunnelse +
   diagram** (fra kap. 0.1). Ærlighetskravet (kalibrering 2005–2017; 2018+ er IDE-kode).
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer: **perfekt**
   (Del 1 innkapsling, Del 2 samling/`Comparable`/iterator — tyngst, Del 3 arv, Del 4
   observatør-observert), **kunne** (delegering, `Comparable`/`Comparator`, `instanceof`/cast,
   iterator, enhetstesting, fil-I/O, diagram, lambda/Stream fra 2014), **kjenne**
   (konstantklasse, JavaFX/moderne verktøy, uttrykkstyper, `clone`/kopiering).
3. **Sjangerguiden** — de 15 oppgavetypene A–O med løsningsoppskriftene fra drillkapitlene
   (1.5, 2.5, 3.4, 4.5, 5.5) i kortform.
4. **Idiomarket** — de 15 kode-/mønstermalene (§3b) på ett oppslag, med observatør-
   femstegsmalen fremhevet (de fem navngitte trinnene).
5. **Sensorreglene** — de fire kirurgiske reglene (deklarér grensesnitt/instansiér
   implementasjon; kopi-getter; validering **kaster**; alternative løsninger sidestilles) +
   begrunnelseskravet (der oppgaven spør «hvorfor», er teksten poenggivende) + metareglene
   (skriv bare det oppgaven ber om; import/`;`/norske bokstaver teller ikke; dokumentér
   rimelige antakelser; deloppgaver kan løses uavhengig).
6. **Feilkatalogen** — de 15 typiske feilene (§5 i analysen) samlet, hver med henvisning til
   kapitlet som forebygger den: instansiere grensesnitt, `if` i stedet for kastet unntak,
   eksponere intern samling, feil synlighet/`static`, glemt/feil `super()`, glemt `abstract`,
   `==` vs. `.equals`, feil fortegn i `compareTo`, ufullstendig observatør (mangle et av fem
   trinn), blande delegering/arv, fil-I/O-feller (`close` vs. `flush`), feil diagramtype,
   svakt funksjonelt-svar, skrive mer enn bedt om, `static`-feller.
7. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant): Del 1 (kjernen)
   → Del 2 (tyngst — bruk mest tid her) → Del 3 (arv) → Del 4 (observatør-observert +
   delegering — de differensierende poengene) → Del 5 (testing/diagram) → prøvene underveis →
   de tre øvingseksamenene de siste ukene under tidspress (240 min). Nivå-3-kapitlene (5.4)
   leses lett; prioritér Del 1–4.

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `tdt4100` med alle 28 kapitler
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites/
   linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`;
   `sectionNames` fra §2-tabellen (obligatorisk). **`number` er del-basert («2.3»), ALDRI
   lineær** (JUS1111-lærdommen — bokforsiden grupperer på `number.split('.')[0]`);
   prosareferanser i innholdet bruker samme form («kap. 2.3»).
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–O, idiomkatalogen, frekvenstallene og de
   fire sensorreglene resten refererer til; skriv ÆRLIGHETSKRAVET (arkiv 2005–2017) tydelig.
3. **De fem delene i avhengighetsrekkefølge (= eksamensstigen)**: Del 1 (fundamentet — kreves
   av alt; bygg 1.1→1.5) → Del 2 (tyngst; 2.1–2.5, bygger på Del 1) → Del 3 (arv; bygger på
   1.2/2.2) → Del 4 (grensesnitt/mønstre; bygger på 3.2/2.1) → Del 5 (testing/I-O/modellering;
   bygger på 2.x/3.x/4.x).
4. Del 6 (øvingseksamenene til slutt — de gjenbruker alle sjangrene; les HELE skjelettet før du
   skriver dem).
5. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som kapitlene
   ferdigstilles; prøvene (§6) legges i respektive delers prøvekapittel/exercise-seksjoner.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (escape `"` i
  norske sitattegn OG i Java-strenger som `"pris kan ikke være negativ"`); `npm run build` grønn.
- [ ] **Kode + begrunnelse + diagram**: hvert teorikapittel parer hvert kodemønster med en kort,
  presis begrunnelse (sensor gir tekstpoeng for «hvorfor»); drillkapitlene øver eksplisitt på å
  *formulere begrunnelsen*; diagrammer i strukturert tekst/ASCII (§1.8).
- [ ] **DE FIRE SENSORREGLENE** finnes som `warning`/`tip` der de hører hjemme: (1) deklarér
  grensesnitt / instansiér implementasjon (kap. 2.1, 4.1); (2) `getX()` returnerer kopi (kap. 2.1,
  2.5); (3) validering **kaster** unntak, ikke bare `if` (kap. 1.3, 1.5); (4) alternative
  løsninger sidestilles — vis begge varianter i drill/øvingseksamen (kap. 2.3, 4.4).
- [ ] **Observatør-femstegsmalen** står ordrett som `theorem`-idiom i kap. 4.2, driller i 4.5, og
  har `warning` om at manglende kall ved én endringsmetode (femte trinn) er klassisk feil.
- [ ] **Tråder droppet**: ingen `Runnable`/monitor/`ReentrantLock` som hovedstoff; maks én setning
  i Del 0 om at det er det store skillet fra IN1010.
- [ ] **API- og konstruksjonsliste per delkapittel**: hvert delkapittel som bruker Java-
  konstruksjoner har `collapsible` «API- og konstruksjonsliste» rett etter Forkunnskaper, som
  forklarer ALLE konstruksjoner brukt i delkapitlet med **når/hvorfor**, ikke signaturpugg
  (hjelpemiddel C — «tren bruk»); per delkapittel, ikke arv fra tidligere.
- [ ] **Kryssbok-lenker**: interne TDT4100-lenker (`[tittel](/bok/tdt4100/<id>)`) peker kun på
  kapitler som finnes; forgjenger ITGK/TDT4110 refereres som **klartekst med aktiveringsmarkør**
  (`[aktiver lenke /bok/tdt4110/<id> når TDT4110 er bygget]`), aldri som live lenke.
- [ ] **Idiomkatalogen (§3b)**: de 15 kode-/mønstermalene finnes som `theorem`-blokker i angitte
  kapitler og gjentas i drill/studieguide.
- [ ] **Begrunnelse i løsningsforslag**: alle løsningsforslag (drill + øvingseksamener) markerer
  hva som gir uttelling steg for steg, at riktig teknikk/struktur belønnes selv med detaljfeil
  («fokusér på hvordan teknikken anvendes»), at deloppgaver kan løses uavhengig, og at
  alternative løsninger sidestilles.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra dette
  skjelettet), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger med
  `solution` + `hints`, repetisjons-`collapsible`; drillkapitler (1.5, 2.5, 3.4, 4.5, 5.5) har
  løsningsoppskrift + sensor-kommentert case + 8–12 oppgaver.
- [ ] **Quiz-sum ≥ 584 og flashcard-sum ≥ 600** per kvotetabellen (§5) — sikt mot ≈680 flashcards
  (§5-margin); quiz kalibrert som begrunnelse/sensorregel/kode-lesing-MC, `options[0]` = riktig svar.
- [ ] **Prøver**: 4 per temadel 1–5 (20 stk) + 3 øvingseksamener (kap. 6.1–6.3) som sammen med
  kap. 3.3 dekker sjangrene A–O.
- [ ] **Fast Del 1→5-stige i øvingseksamenene**: kap. 6.1–6.3 følger innkapsling → samling/
  `Comparable`/iterator (tyngst) → arv → grensesnitt/mønster + testing → modellering, over ett
  gjennomgående nyskrevet domene (treningssenter / konsertarrangør / strømmetjeneste), med
  vektfordeling ≈ 20/45–50/12–15/10–13/5–10 og delpoeng-`tip` per del.
- [ ] **ÆRLIGHETSKRAV synlig**: Del 0 (og kap. 5.4, 6.3) sier eksplisitt at kalibreringen bygger
  på 2005–2017, at 2018+ leveres som kjørbar Java med JUnit i IDE, og at byggefasen bør skaffe
  nyere sett; usikre moderne detaljer merkes `(verifiser)`.
- [ ] **Opphavsrett**: ALLE oppgaver og kodeeksempler nyskrevne — egne klassenavn, egne tall,
  egne domener (IKKE spisested/familie/buss/skatt/sport/forskningsanlegg fra arkivet);
  kodemønstrene er standard Java-idiomer, men ingen oppgavetekster/fasiter fra reelle sett
  gjengis; pensumlitteratur (Big Java o.l.) refereres, aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 + innhold),
  jf. lærdommen om `getChapterMeta`.
