# Eksamensanalyse: TDT4100 Objektorientert programmering (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på NTNU-arkivet 2005–2017:
> 42 PDF-filer (oppgavesett + løsningsforslag/sensorveiledninger, ordinær + kontinuasjon),
> hvorav **23 løsningsforslag** brukes som kvantitativt grunnlag. De nyere settene
> (2018–2024) foreligger ikke som PDF i arkivet — fra 2018 la NTNU om til **kode-baserte
> eksamener i IDE**, publisert som GitLab-repoer bak NTNU-innlogging (se README i arkivet).
> Formen og temaene for den moderne perioden er derfor rekonstruert fra README, NTNUs
> emnebeskrivelse (fagbeskrivelse-tdt4100.md) og den entydige utviklingslinjen i 2013–2017-settene.
>
> Lesestrategi som avtalt: løsningsforslagene og de siste årenes sett (2013–2017) er lest
> grundig; 2011 er lest grundig; 2005–2012 er skummet og maskingjennomsøkt for form- og
> temaregistrering. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av
> oppgavetekster eller fasit. Kodemønstrene som beskrives er standard Java-idiomer, ikke
> opphavsrettsbeskyttet tekst. Analysen er kvantitativ der kildene tillater det.
>
> **NTNU vs. UiO (TDT4100 vs. IN1010).** Begge er «objektorientert programmering i Java», men
> de tester nesten motsatte ender av OO-faget. **IN1010 er byggekunst:** egendefinerte lenkede
> lister/iteratorer fra bunnen, `Node`-objekter, generiske datastrukturer, rekursjon og
> **tråder + monitor** — nesten ren kodeskriving. **TDT4100 er designkunst:** innkapsling og
> synlighet, `static`, arv/abstrakte klasser, grensesnitt, **standard samlinger fra biblioteket**
> (`ArrayList`/`HashSet`/`HashMap`), `Comparable`/sortering, **designmønstre** (observatør-observert,
> delegering, komposisjon), enhetstesting, fil-I/O og **UML-/objektdiagrammer** — med mye
> **forklarende tekst ved siden av koden**. Der IN1010 spør «skriv hele klassen/hierarkiet», spør
> TDT4100 like ofte «hvilke modifikatorer bør stå her, og hvorfor?», «hva slags generell teknikk
> passer?» og «tegn objektdiagrammet». Og avgjørende: **TDT4100-arkivet har null tråder/
> samtidighet** (0 av 23 sett) — temaet som avgjør karakteren i IN1010 finnes ikke her.

---

## 1. Eksamensform og utvikling

### Dagens form (emnebeskrivelse 2026/2027)

TDT4100 vurderes med **én skriftlig skoleeksamen (4 timer), 100 % av karakteren**, karakterskala
**A–F**. Tillatte hjelpemidler: **kode C** (utvalgt trykt/håndskrevet materiale + enkel kalkulator).
Historisk har hjelpemiddelet vært **læreboka «Big Java» av Cay S. Horstmann** (oppgitt på hvert
sett t.o.m. 2017). Obligatoriske øvinger må være godkjent for å gå opp. Emnet er på 7,5 studiepoeng
og undervises i vårsemesteret; faglærer gjennom hele arkivperioden er **Hallvard Trætteberg** (IDI),
med kvalitetssikring bl.a. fra Ragnhild Kobro Runde (Ifi, UiO) — et konkret bindeledd til IN1010.

**Eksamen er hybrid kode + teori.** Til forskjell fra IN1010s rene kodeskriving består en typisk
TDT4100-oppgave av tre sammenvevde sjangre:
1. **Skriv Java-kode** (klasser, felt, konstruktører, metoder) — hoveddelen.
2. **Forklar / begrunn i tekst** («hvilke modifikatorer og hvorfor», «hva slags teknikk», «hva er en
   abstrakt klasse», «er dette et funksjonelt grensesnitt») — konseptuell forståelse.
3. **Tegn et diagram** (objektdiagram, objekttilstandsdiagram eller UML-klassediagram).

Det finnes **ingen flervalgsdel** og ingen egen «hva skrives ut»-hoveddel, men kortere
«bestem/forklar typen til uttrykket» og «hva skjer»-spørsmål dukker opp (f.eks. 2014 Del 1).

### Fast oppgavestruktur (svært stabil 2011–2017)

Hvert sett er ett **gjennomgående domenecase** løst stegvis gjennom 4–5 deler med oppgitt
prosentvekt. Delene følger nesten alltid samme faglige stige:

| Del | Tema | Typisk vekt | Går igjen |
|---|---|---|---|
| **Del 1** | **Innkapsling** (felt, synlighet, `final`, `static`, validering, konstruktør; ofte abstrakt superklasse) | 15–30 % | ~100 % |
| **Del 2** | **Klasser / programmering** (samlinger, `Comparable`/sortering, `toString`, hovedlogikk) | **40–55 %** | ~100 % |
| **Del 3** | **Arv / generalisering** (abstrakt klasse, subklasser, `super()`, `protected`, redefinering) | 10–20 % | ~90 % |
| **Del 4** | **Grensesnitt og delegering / diverse** (observatør-observert, delegering, funksjonelle grensesnitt, testing) | 10–20 % | ~85 % |
| **Del 5** | **Modellering og dokumentasjon** (UML-klassediagram, `main`, testbarhet) | 10 % | ~55 % |

Domeneinnpakningen roterer (spisested/bordplassering 2017, familie/slektsrelasjoner 2016,
buss­ruter/segmenter 2014, skatteberegning 2013, serietabell i sport 2011), men OO-stigen er den
samme. **Del 2 er alltid den tyngste** og avgjør mest.

### Historisk utvikling — tre epoker

**Epoke 1 — klassisk papir/teori-eksamen (2005–2012).** 4-timers eksamen med lærebok tillatt.
Bredt, konseptuelt: innkapsling og synlighet, arv, grensesnitt, `equals`/`hashCode`, `toString`,
`clone`/kopiering, kortere «hva skrives ut»-spørsmål og modellering. Samlinger fra biblioteket
(`ArrayList`, `HashSet`) er standard fra starten. GUI (Swing) dukker opp sporadisk (2012).

**Epoke 2 — moden hybrid design/kode-eksamen (2013–2017).** Den faste 5-delers strukturen over
er nå helt satt. Sterkere vekt på **designmønstre** (observatør-observert og delegering er nesten
faste), **funksjonelle grensesnitt + lambda/Stream** (Java 8, inn fra 2014), **enhetstesting** som
egen deloppgave, og eksplisitt diagramtegning. Dette er den mest representative epoken for en
eksamensrettet bok, fordi den forener klassisk OO-teori med moderne Java.

**Epoke 3 — kode-basert IDE-eksamen (2018–i dag).** Fra 2018 leveres eksamen som **kjørbar
Java-kode i et utviklingsmiljø** (GitLab-repo, låst eksamens-PC), ikke som håndskrevet svar.
Struktur (fra README): fem likevektede deler (~20 % hver) rundt ett stort domenecase (f.eks.
«Mercedes-Benz forskningsanlegg», 2024). Emnebeskrivelsen legger nå til **JavaFX-GUI** (avløser
Swing), **UML-diagrammer** (klasse-/objekt-/sekvens-/interaksjonsdiagram), **designmønstre**,
**enhetstesting/feilsøking** og moderne verktøy inkl. **AI-baserte hjelpemidler**. Kjernen —
innkapsling, arv, grensesnitt, samlinger, mønstre, testing — er kontinuerlig fra epoke 2.

**Konsekvens for boka:** Bygg kjernen på epoke 2s hybride form (kode + begrunnelse + diagram), og
ha et eget «moderne spor» for JavaFX, UML-familien, JUnit-i-praksis og designmønstre som løftes i
epoke 3. **Ikke** bruk knappe ressurser på tråder/monitor — det er ikke TDT4100-pensum slik det
er i IN1010.

---

## 2. Temafrekvens

Score = andel av de **23 løsningsforslagene 2005–2017** (ordinær + konte) der temaet er en egen
oppgave eller tydelig deloppgave (maskingjennomsøkt og manuelt verifisert på de grundig leste
settene). Merk at Java 8-temaene (lambda/Stream, funksjonelle grensesnitt) har lav totalscore fordi
de ikke fantes før 2014, men er **nær 100 % i 2014–2017**; det er markert.

| Tema | Score | Kommentar |
|---|---|---|
| **Innkapsling** (felt, synlighet `private`/`public`/`protected`, get/set, validering i settere) | **~100 %** | Del 1 på hvert sett. Kjernen i faget. |
| **Unntak** (`IllegalArgumentException` ved validering; `throws`/`try/catch`; checked vs. unchecked) | **96 %** (22/23) | Nesten universelt — validering kaster unntak. |
| **Samlinger fra biblioteket** (`ArrayList`, `Collection`, `List`) | **87 %** (20/23) | Standard beholder i Del 2. Aldri egendefinert liste. |
| **`static`** (globale tellere, konstanter, hjelpemetoder, fabrikkmetoder) | **87 %** (20/23) | «Hvorfor `static` her?» er et fast spørsmål. |
| **Arv** (`extends`, redefinering, `@Override`) | **74 %** (17/23) | Del 3 nesten alltid. |
| **Grensesnitt** (`interface`, `implements`, `implements X, Y`) | **70 %** (16/23) | Ofte kombinert med delegering/observatør. |
| **`equals`/`hashCode` + identitet** (`==` vs. `.equals`, bruk i `HashSet`/`contains`) | **70 %** (16/23) | Tett koblet til samlinger og oppslag. |
| **Konstruktør + `super(...)`** (parametersetting, protected konstruktør) | **65 %** (15/23) | «Hva kalles denne metoden?» / «hvorfor protected?». |
| **Iterator / `Iterable<T>`** (implementere/returnere iterator, for-each) | **52 %** (12/23) | Oftest via `list.iterator()`, ikke egendefinert `Node`. |
| **Observatør-observert** (observerbar egenskap, lyttergrensesnitt, kringkasting) | **52 %** (12/23) | Signatur-mønster i TDT4100. «Hva slags generell teknikk?». |
| **Enhetstesting** (JUnit/`TestCase`, `assertEquals`/`assertTrue`/`fail`, testbarhet) | **52 %** (12/23) | Egen deloppgave, ofte i Del 4/5. |
| **`Comparable`/`compareTo` + sortering** (`Collections.sort`, `Comparator`) | **48 %** (11/23) | Sortert tabell/liste; «returner differansen». |
| **Lytter-implementasjon** (`Listener`-grensesnitt, `add/removeListener`) | **48 %** (11/23) | Den konkrete siden av observatør-observert. |
| **Abstrakte klasser** (`abstract class`/`abstract`-metode, «bør denne være abstrakt?») | **48 %** (11/23) | Superklasse gjøres abstrakt i Del 1/3. |
| **Diagramtegning** (objekt-, objekttilstands-, UML-klassediagram) | **~48 %+** (11/23 eksplisitt) | Undertelt av OCR; «tegn …» finnes i de fleste sett. |
| **`instanceof` + typekonvertering (cast)** | **39 %** (9/23) | Uttrekk/spesialbehandling av subtype. |
| **Fil-/strøm-I/O** (`Scanner`, `PrintWriter`, `InputStream`/`OutputStream`, save/load) | **39 %** (9/23) | Tekstformat + `load`/`save`; `IOException`. |
| **`HashMap`/`HashSet`/`Map`** (register, unngå duplikater) | **35 %** (8/23) | Nøkkel→verdi-oppslag; sett for unikhet. |
| **Tilstand / tilstandsdiagram** (objekttilstand, enkel tilstandslogikk) | **30 %** (7/23) | Objekttilstandsdiagram for endringsmetode. |
| **Delegering** (delegerende objekt ber delegat utføre oppgaven) | **30 %** (7/23) | Ofte satt opp mot arv: «vurder fleksibiliteten». |
| **`enum`-lignende konstantklasser** (fast sett instanser, `valueOf`) | **26 %** (6/23) | `Gender.MALE/FEMALE`-mønsteret. |
| **`clone`/kopikonstruktør / kopiering** | **26 %** (6/23) | Mest epoke 1. |
| **Lambda / Stream (Java 8)** | 22 % totalt / **~100 % 2014–2017** | `filter`/`map`/`reduce`, uttrykks-lambda. |
| **Funksjonelle grensesnitt (begrep)** (`Predicate`, «én abstrakt metode») | 13 % totalt / **fast 2014–2017** | «Er dette et funksjonelt grensesnitt? Begrunn.» |
| **Egendefinerte generiske klasser** (`class K<T extends …>`) | 13 % (3/23) | Sjelden; boka trenger bare bruk av generics. |
| **GUI** (Swing i arkivet; **JavaFX** i moderne pensum) | 9 % (2/23 Swing) | Løftet i emnebeskrivelsen; eget moderne kapittel. |
| **Tråder / samtidighet** | **0 %** (0/23) | **Finnes ikke i TDT4100-arkivet.** Motsatt av IN1010. |

**Viktigste funn.** Ryggraden i TDT4100 er **innkapsling + unntak/validering + bibliotek­samlinger +
`static` + arv/grensesnitt** (alle 70–100 %). Det som skiller faget fra IN1010 og gir de
karakteravgjørende differensieringspoengene, er **designmønstrene**: **observatør-observert** og
**delegering** (begge ~50 %/30 %), **`Comparable`/sortering**, **`equals`/`hashCode`-identitet** og
**enhetstesting**. Fra 2014 kommer **funksjonelle grensesnitt + lambda/Stream** inn som et fast lag.
**Diagramtegning** følger nesten hver oppgave. Boka må dekke alt dette med både kode *og*
begrunnelse.

---

## 3. Oppgavetype-katalog

Sjangrene som går igjen, med sensors foretrukne løsningsmetode.

### A. Innkapsling og synlighet (Del 1, fast)
- **Krav:** deklarér felt `private`, velg riktig datatype (og *begrunn valget*), lag get/set der det er
  naturlig, la data som bare settes ved opprettelse settes i **konstruktøren uten setter**, og marker
  uforanderlige felt `final`.
- **Fast tekstspørsmål:** «Hvilke modifikatorer bør stå foran feltet/metoden/konstruktøren, og
  hvorfor?» Svarmal: `private` (skjul intern tilstand), `final` (uforanderlig), `static` (klasse-nivå,
  ingen objekttilstand brukes), `protected` (kun subklasser/pakke), `public` (tjeneste for andre).
- **Sensornyanse:** `getChildren`/lignende skal returnere en **ny/kopiert samling**, ikke den interne
  referansen, for å bevare innkapslingen.

### B. Validering + unntak (fast, del av A)
- **Mal:** setter/konstruktør sjekker gyldighet og **kaster `IllegalArgumentException`** (eller annen
  `RuntimeException`) ved ugyldig verdi — *ikke* bare en `if` rundt tilordningen. «Viktig å utløse
  unntak, ikke bare unngå å sette verdien.»
- **Checked vs. unchecked (eksplisitt, 2011 1d):** en *checked exception* er subklasse av `Exception`
  men ikke av `RuntimeException`; må deklareres med `throws`, og kalleren må `try/catch` eller
  videredeklarere. Brukes f.eks. for å nekte en endring etter at en avhengig verdi er satt.
- **Hjelpemetoder** (`checkPositive`, `checkPercent`, `checkName`, `checkId`) markeres `private static`
  (bruker ikke objekttilstand); en som må redefineres i subklasse gjøres `protected abstract`.

### C. `static` — teller, konstant, fabrikk (~87 %)
- **Global teller:** `private static int counter = 1;` økes i konstruktøren (`this.num = counter++;`)
  for å gi hvert objekt et unikt løpenummer.
- **Delt konstant ett sted** (2013): skatte­satser o.l. som `static final`, «lagre konstanter kun ett sted».
- **Fabrikk/oppslag:** `public static X valueOf(String)` som returnerer et **eksisterende** objekt
  (enum-lignende), sammenlignet med `.equals`.

### D. Konstantklasse (enum-mønster) (~26 %)
- **Krav:** klasse som ikke kan instansieres utenfra, med et fast sett `public static`-instanser
  (`MALE`, `FEMALE`), privat `final` etikett, `toString()` som returnerer etiketten, og `valueOf`.
  Moderne løsning er `enum`; arkivet viser den håndlagde varianten.

### E. Klasse med bibliotek­samling (Del 2, tyngst)
- **Velg riktig grensesnittstype:** `Collection` når indeks ikke trengs, `List` når rekkefølge/indeks
  trengs, `Set`/`HashSet` for å slippe duplikatsjekk (krever fornuftig `equals`/`hashCode`), `Map`/
  `HashMap` for nøkkeloppslag. **Deklarér feltet som grensesnittet, instansiér implementasjonen:**
  `private Collection<T> xs = new ArrayList<>();`. «Man må ikke instansiere selve grensesnittet.»
- **Legg til / fjern / finn:** for-each-løkke med `.equals`-sammenligning; delegér gjerne rett til
  `list.add`/`list.remove` (returnerer om samlingen ble endret).
- **Uforanderlige varargs-konstruktører:** `new ArrayList<>(Arrays.asList(items))` (fordi
  `Arrays.asList` gir fast størrelse).

### F. `Comparable`/`compareTo` + sortering (~48 %)
- **Krav:** `implements Comparable<T>` med `compareTo` som **returnerer differansen** felt for felt
  (`return other.points - this.points;` for synkende). Sortér med `Collections.sort(list)`.
- **Alternativ:** `Comparator<T>` (lambda `(a,b) -> …`) når klassen ikke selv skal ha ordningen, eller
  når man trenger oppslag i en ytre struktur (f.eks. innbyrdes oppgjør).
- **Flernivå-sortering:** sjekk viktigste kriterium først, returnér hvis ulikt 0, ellers neste.

### G. Iterator / `Iterable<T>` (~52 %)
- **Vanligst i TDT4100:** la klassen `implements Iterable<T>` og returnér `internList.iterator()` —
  gjør for-each mulig utenfra uten å eksponere den interne listen direkte.
  *(Egendefinert `Node`-iterator, som er kjernen i IN1010, er ikke standard her.)*

### H. Arv + abstrakt superklasse (Del 3, ~74/48 %)
- **Krav:** felles felt/metoder i superklassen, som gjøres **`abstract`** når den ikke skal kunne
  instansieres; subklasser bruker `extends` og kaller `super(...)` **først** i konstruktøren; abstrakt
  metode (`checkId`) implementeres i hver subklasse med `@Override`.
- **Fast tekstspørsmål:** «Hva er en abstrakt klasse? Bør denne være abstrakt? Begrunn.»
- **Generaliseringsmønster:** superklassens metode gjøres `protected`, subklassene tilbyr
  domenespesifikke innpakningsmetoder som kaller den.

### I. Observatør-observert (lytter-mønster) (~52 %)
- **Fast spørsmål:** «Hva slags generell teknikk kan brukes for å oppdatere X automatisk når Y
  endres?» → **observatør-observert**.
- **Femstegsmal (sensor lister den ordrett):** (1) et **lyttergrensesnitt** med en varslingsmetode,
  (2) et **felt med en `Collection` av lyttere**, (3) **`add`/`removeListener`-metoder**, (4) en
  **`fire`/kringkastingsmetode** som går gjennom lytterne og kaller varslingsmetoden, (5) **kall på
  kringkastingsmetoden overalt der tilstanden endres**. Observatøren `implements` grensesnittet og
  melder seg på i konstruktøren.
- **Funksjonelt grensesnitt-oppfølger:** «Er lyttergrensesnittet funksjonelt?» → ja teknisk (én
  abstrakt metode), men typisk ikke ment som primærfunksjon/matematisk funksjon.

### J. Delegering (~30 %)
- **Krav:** et delegerende objekt holder en referanse til en **delegat** (ofte av et grensesnitt) og
  videresender oppgaven: `return estimator.estimate(...)`. En kan bytte delegaten i kjøretid
  (`setEstimator`).
- **Fast drøfting:** delegering vs. arv — delegering er **mer fleksibel** (kan endres i kjøretid, arven
  frigjøres til andre formål). Sammensetting av delegater (`Relation2(rel1, rel2)`) løser sammensatte
  problemer uten nye klasser (komposisjon).

### K. Funksjonelle grensesnitt + lambda/Stream (fast 2014–2017)
- **Begrep:** funksjonelt grensesnitt = **nøyaktig én abstrakt metode**, og resultatet avhenger bare
  av argumentene (ingen tilstand). Kan implementeres med **lambda**.
- **Lambda:** uttrykksform `(p) -> p.getChildren(FEMALE)`; predikat `p -> p.getAge()==18 && …`.
- **Stream:** `xs.stream().filter(...).map(...).mapToInt(...).sum()`, `anyMatch`, `sorted`, `collect` —
  ofte som «skriv om denne løkka med Stream-teknikken».

### L. Fil-/strøm-I/O (~39 %)
- **`load`/`save` mot et linjebasert tekstformat:** `PrintWriter` rundt `OutputStream` (`print`/`println`,
  avslutt med `flush()`, ikke `close()`); `Scanner` rundt `InputStream` (`hasNextLine`/`nextLine`).
- **Unntak:** deklarér `throws IOException` (mest spesifikke type), ikke svelg unntak stille.
- **To-pass-lagring:** skriv først objektdefinisjoner, deretter relasjoner (så lasting ikke får
  forover­referanser).

### M. Enhetstesting (~52 %)
- **Krav:** en `XTest`-klasse med `assertEquals`/`assertTrue`/`assertFalse`; rigg opp et lite objekt,
  kall metoden, sjekk returverdi mot forventet. **Test et rikt nok utvalg tilfeller** (seier/tap/uavgjort;
  `<`, `>`, `=` for `compareTo`; sammenligning med seg selv).
- **Unntakstesting:** `try { … fail(); } catch (Exception e) { … }`; bruk `instanceof` for å skille
  checked/unchecked.
- **Testbarhet:** foreslå en pakke-privat hjelpe-metode (f.eks. `addSeating(Seating)`) for å rigge
  tilstand direkte, så testen blir enklere og mer spisset.

### N. Diagram (~i de fleste sett)
- **Objektdiagram / instansdiagram:** *objekter* (ikke klasser) med feltverdier i boksen og navngitte
  referansepiler mellom dem; vis hvilke objekter som fantes fra før vs. ble opprettet.
- **Objekttilstandsdiagram:** før-tilstand → transisjon (metodekall med konkrete argumenter) →
  etter-tilstand; verdiene må stemme (f.eks. `mergeTables`).
- **UML-klassediagram:** klasser/grensesnitt med arv- og implementasjonspiler og aggregerings-
  referanser; noen sentrale attributter/metoder. «Se Big Java-appendiks for notasjon.»

### O. Uttrykkstype / kortsvar (Del 1, epoke 1–2)
- «Bestem typen til uttrykket»: `String + String → String`, `int/int → int`, `char - char → int`,
  `String + char → String`, `== → boolean`. Tester forståelse av statisk typing og
  substitusjonsregler (`Collection<String> s = new ArrayList<String>()`).

---

## 4. Sensorens krav

Destillert fra løsningsforslagene 2005–2017. TDT4100-veiledningene er mindre tallfestet per poeng
enn IN1010s, men uttrykker klare uttellings- og trekk-signaler.

### Metaregler (gjentas hvert år)
1. **Les oppgaven nøye — «finn ut hva det spørres etter».** Rimelige antagelser tillates ved
   underspesifikasjon, men **skriv dem ned**.
2. **Deloppgaver kan løses uavhengig.** «Du kan bruke klasser/metoder fra tidligere deler selv om du
   ikke klarte å implementere dem (helt eller delvis).» En kan definere ekstra hjelpemetoder fritt.
3. **Begrunnelse teller.** Der oppgaven spør «hvorfor `static`/`abstract`/`protected`», «hva slags
   teknikk», «er dette funksjonelt» — er den *forklarende* teksten poenggivende, ikke bare koden.
4. **Alternative løsninger sidestilles.** «Løsningsforslaget er bare ett eksempel»; både løkke- og
   Stream-variant, både `Comparable` og `Comparator`, gir full uttelling når idéen er riktig.

### Stilkrav (fasitens faktiske kodestil)
- Java, kompakt og idiomatisk. **Deklarér felt som grensesnittet, instansiér implementasjonen**
  (`Collection<T> = new ArrayList<>()`). Aldri instansiér selve grensesnittet.
- `final` på uforanderlige felt; `private` som standard synlighet; `static` for tilstandsløse
  hjelpemetoder/tellere/konstanter; `protected` for det subklasser trenger.
- Validering **kaster unntak** (`IllegalArgumentException`) — ikke stille ignorering.
- `@Override` på redefinerte metoder (`toString`, `compareTo`, `iterator`, abstrakte metoder) gir pluss.
- `super(...)` som første setning i subklassekonstruktøren.
- `getX()`-metoder som returnerer samlinger returnerer en **kopi**, ikke den interne referansen.

### Hva som gir uttelling vs. trekker
- **Uttelling:** riktig valg *og begrunnelse* av synlighet/typer; korrekt validering-med-unntak;
  riktig anvendt mønster (observatør/delegering) selv om detaljlogikken glipper — «fokusér på
  hvordan teknikken anvendes, ikke på å få poengberegningen helt riktig» (2011 4a).
- **Trekker:** å instansiere et grensesnitt; å eksponere intern samling; å bruke en `if` i stedet for å
  kaste unntak ved ugyldig verdi; å svelge/ignorere unntak stille; feil eller manglende `super(...)`;
  å blande sammen objekt-, tilstands- og klassediagram (oppgaven presiserer hvilket).
- **Vektlegges lite:** manglende `import`/enkelt `;`/`}` når koden ellers gir mening; norske bokstaver
  (æ, ø, å) i kode; små navnevarianter.

---

## 5. Typiske feil

Utledet av løsningsforslagenes kommentarer og «her er poenget»-formuleringer.

1. **Instansiere et grensesnitt** (`new Collection<>()`/`new List<>()`) i stedet for en
   implementasjonsklasse (`new ArrayList<>()`).
2. **Bruke en `if` rundt tilordningen i stedet for å kaste unntak** ved ugyldig verdi — validering skal
   **utløse `IllegalArgumentException`**.
3. **Eksponere intern tilstand** — returnere den interne `children`-lista direkte i stedet for en kopi.
4. **Feil synlighet:** `public` felt, eller hjelpemetoder/tellere/konstanter som ikke er `static`; glemme
   `protected` på det subklasser må nå, eller `final` på uforanderlige felt.
5. **Glemme/feilplassere `super(...)`** — den må være første setning i subklassekonstruktøren, med
   riktig parameterrekkefølge.
6. **Glemme å gjøre superklassen `abstract`** når den ikke skal kunne instansieres (eller gjøre en
   fullstendig, nyttig klasse abstrakt uten grunn).
7. **`==` vs. `.equals`** — sammenligne `String`/objekter med `==`; eller mangle fornuftig
   `equals`/`hashCode` når objekter legges i `HashSet`/brukes i `contains`.
8. **`compareTo` med feil fortegn** — objektet som skal ligge først må returnere `< 0`; lett å snu.
9. **Ufullstendig observatør-oppsett** — mangle ett av de fem trinnene (grensesnitt / lytterliste /
   add-remove / kringkastingsmetode / kall ved *alle* tilstandsendringer). Å glemme kallet ved en av
   flere endringsmetoder er klassisk.
10. **Blande delegering og arv** — ikke se at delegering (bytt delegat i kjøretid) er mer fleksibelt, eller
    ikke klare å forklare forskjellen.
11. **Fil-I/O-fallgruver** — bruke `close()` på en strøm man ikke eide (i stedet for `flush()`); svelge
    `IOException`; ikke håndtere linjer med bare én forelder / tomme linjer / `#`-kommentarer i `load`.
12. **Feil diagramtype** — tegne klassediagram når det spørres om objekt-/tilstandsdiagram (eller
    utelate feltverdier/piler).
13. **Svakt funksjonelt-grensesnitt-svar** — bare si «én metode» uten å nevne at resultatet skal
    avhenge kun av argumentene / at det er ment som primærfunksjonen.
14. **Skrive mer enn oppgaven ber om** — full `main`/I/O/oppstart når bare klassene etterspørres;
    kan trekke om det vitner om misforståelse.
15. **`static`-feller** — dele en teller/register som burde vært per-objekt, eller motsatt; kalle en
    ikke-`static` metode fra `static` kontekst.

---

## 6. API-/konstruksjonsapparat

Java-konstruksjonene studenten må beherske aktivt (skrive fra bunnen, uten oppslag).

### 1. Klasser, innkapsling, synlighet (kjerne)
- `class`, felt, konstruktør, `this`; modifikatorene `public`/`private`/`protected`/(pakke-privat) og
  `final`/`static` — **og evne til å begrunne valget**.
- get/set-metoder; validering i settere/konstruktør med `throw new IllegalArgumentException(...)`.
- `static`-tellere (`counter++`), `static final`-konstanter, `static`-fabrikk (`valueOf`).

### 2. Arv, abstrakte klasser, polymorfi
- `abstract class`, `abstract`-metode; `class Sub extends Super`; `super(...)`; `@Override`.
- `protected` for subklasse-tilgang; dynamisk metodeoppslag; kall via supertype-referanse.
- `instanceof` + typekonvertering `(SubType) x`.

### 3. Grensesnitt og funksjonelle grensesnitt
- `interface I { R m(...); }`, `class C implements I`, `implements I1, I2`.
- Funksjonelt grensesnitt (én abstrakt metode) implementert med **lambda**; standard `Predicate<T>`,
  `Comparator<T>`, `Comparable<T>`.

### 4. Samlinger fra biblioteket
- `Collection<E>`, `List<E>`/`ArrayList`, `Set<E>`/`HashSet`, `Map<K,V>`/`HashMap`.
- `add`/`remove`/`contains`/`size`/`isEmpty`; iterasjon med for-each og `iterator()`.
- `Collections.sort(list)`; `Arrays.asList(...)`; deklarér som grensesnitt, instansiér implementasjon.

### 5. `equals`/`hashCode`/`toString`/identitet
- `==` (referanse) vs. `.equals(...)` (verdi); `equals`/`hashCode`-kontrakt ved bruk i `HashSet`/`HashMap`.
- `toString()` for lesbar representasjon (kalles implisitt av `+` og `println`); `String.format`.

### 6. `Comparable`/`Comparator` + sortering
- `implements Comparable<T>` med `compareTo` (returnér differanse; flernivå); `Comparator` som
  lambda; `Collections.sort`.

### 7. Iterator / `Iterable`
- `implements Iterable<T>`; returnér `internList.iterator()` (eller egendefinert `Iterator<T>` med
  `hasNext`/`next` når nødvendig); for-each utenfra.

### 8. Unntak
- `IllegalArgumentException`/`RuntimeException` (unchecked) ved validering; egendefinert/`Exception`
  (checked) med `throws` + `try/catch`; `IOException` ved I/O; skille checked vs. unchecked.

### 9. Fil-/strøm-I/O
- `Scanner(InputStream)` (`hasNextLine`/`nextLine`/`hasNextInt`/`nextInt`), `PrintWriter(OutputStream)`
  (`print`/`println`/`flush`); `InputStream`/`OutputStream`; tokenisering av tekstlinjer.

### 10. Java 8 — lambda og Stream
- Lambda (uttrykks- og blokkform); `stream()` + `filter`/`map`/`mapToInt`/`reduce`/`sorted`/`collect`/
  `anyMatch`/`allMatch`/`forEach`.

### 11. Designmønstre (som apparat, ikke bare begrep)
- **Observatør-observert / lytter:** lyttergrensesnitt + lytterliste + add/remove + kringkasting + kall
  ved tilstandsendring.
- **Delegering:** delegat-referanse (grensesnitt) + videresending + kjøretidsbytte; komposisjon av
  delegater.
- **Komposisjon (composite):** `SimpleX`/`CompositeX` under felles supertype (2017 bord-eksempel).

### 12. Modellering / dokumentasjon
- Objektdiagram, objekttilstandsdiagram, **UML-klassediagram** (arv/implementasjon/aggregering);
  `public static void main(String[] args)` som oppstartspunkt.

### Moderne pensum (epoke 3 — eget «utvidet» spor)
- **JavaFX-GUI** (avløser Swing: `Scene`/`Stage`, kontroller, hendelseshåndtering/`EventHandler`).
- **UML-familien** i bredde (objekt-, sekvens-, interaksjonsdiagram).
- **JUnit i praksis** i IDE; feilsøking/debugging; versjonskontroll (git/GitLab); moderne verktøy inkl.
  AI-baserte hjelpemidler.

### Bør ikke prioriteres (i motsetning til IN1010)
- **Tråder/samtidighet, monitor, `ReentrantLock`/`Condition`** — 0 % i arkivet, ikke TDT4100-kjerne.
- **Egendefinerte `Node`-lister og hashtabeller fra bunnen** — TDT4100 bruker biblioteket; nevn dem
  kort, ikke som hovedstoff.
- **Tunge egendefinerte generiske datastrukturer** — bruk av generics holder; å *definere* `K<T
  extends …>` er sjeldent.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (kjernen, avgjør karakteren)
1. **Innkapsling + synlighet + validering-med-unntak** (Del 1) — felt, `private`/`final`/`static`,
   get/set, konstruktør, `IllegalArgumentException`. Og evne til å **begrunne** valgene. ~100 %.
2. **Klasse med bibliotek­samling** (Del 2) — `Collection`/`List`/`Set`/`Map`, add/fjern/finn,
   `toString`, `equals`/identitet. Tyngste del. ~90–100 %.
3. **Arv + abstrakt superklasse** (Del 3) — `extends`, `abstract`, `super()`, `@Override`, `protected`.
   ~90 %.
4. **Grensesnitt + `Comparable`/sortering** — `implements`, `compareTo`/`Comparator`,
   `Collections.sort`. ~70 %.
5. **Observatør-observert (lytter-mønster)** — femstegsmalen, korrekt anvendt. ~50 % og
   karakteravgjørende der det dukker opp.

### Nivå 2 — må kunne (differensierer)
6. **Delegering** (delegat + kjøretidsbytte) vs. arv — inkl. drøftingen.
7. **Enhetstesting** — `assert*`, unntakstesting, testbarhet.
8. **`static`-mønstre** (teller, konstant, fabrikk/`valueOf`, enum-lignende konstantklasse).
9. **Fil-/strøm-I/O** (`Scanner`/`PrintWriter`, `load`/`save`, `IOException`).
10. **Diagram** — objekt-, objekttilstands- og UML-klassediagram (koblet til hver kodedel).
11. **Iterator/`Iterable`**, **`instanceof` + cast**.

### Nivå 3 — bør kjenne til (moderne / epoke 3 / kortsvar)
12. **Funksjonelle grensesnitt + lambda/Stream** (fast fra 2014).
13. **JavaFX-GUI**, **UML-familien i bredde**, **git/JUnit-i-IDE**, moderne verktøy/AI.
14. **Uttrykkstyper / statisk typing** (kortsvar), **`clone`/kopiering**, **bruk av generics**.
15. (Utenfor kjernen, i motsetning til IN1010) tråder, egendefinerte `Node`-lister/hashtabeller — kort
    omtale, ikke hovedvekt.

### Prognose for neste eksamen

**Ett gjennomgående domenecase** løst stegvis, svært sannsynlig i ~fem deler: **Del 1** innkapsling
(felt/synlighet/validering, ofte en abstrakt superklasse) → **Del 2** hovedklasse(r) med
bibliotek­samling, sortering (`Comparable`) og `toString` (tyngst) → **Del 3** arv/generalisering med
abstrakt superklasse og `super()` → **Del 4** grensesnitt + **observatør-observert og/eller
delegering** + enhetstesting → **Del 5** modellering (UML/objektdiagram) og evt. Java 8/Stream.
Domenet roterer (spisested, familie, sport, buss, skatt, forskningsanlegg …); OO-øvelsen er den
samme. **På moderne (2018+) eksamen** løses dette som **kjørbar Java i IDE** med JUnit-tester, og
JavaFX-/UML-/verktøy-stoffet kan trekkes inn.

**Konsekvens for boka.** Bygg kjernen rundt Nivå-1-temaene i **sensors hybride form: kode +
begrunnelse + diagram**. Ha **ett komplett gjennomgående case** som løses Del 1→5 (slik NTNU
gjør), pluss fokuskapitler for hvert designmønster (observatør-observert, delegering, komposisjon),
`Comparable`/sortering, enhetstesting og fil-I/O. Legg Java 8 (lambda/Stream/funksjonelle
grensesnitt) som et eget lag, og et **moderne spor** for JavaFX, UML-familien og verktøykjeden.
**Dropp tråder som hovedtema** — den viktigste enkeltforskjellen fra IN1010-boka.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TDT4100/`. Arkivet dekker
**2005–2017** (ordinær + kontinuasjon) med tilhørende offisielle løsningsforslag/sensorveiledninger —
42 PDF-filer, hvorav 23 løsningsforslag utgjør det kvantitative grunnlaget. Faglærer gjennom hele
perioden: **Hallvard Trætteberg** (IDI, NTNU).

**Lest grundig (løsningsforslag + oppgavesett):**
- `tdt4100-2017.pdf` + `-lf.pdf` («Diner»/spisested — innkapsling, `static`-teller,
  `Collection`/`Comparable`, komposisjon `SimpleTable`/`CompositeTable`, observatør-observert
  `CapacityListener`, funksjonelt grensesnitt, Stream, testbarhet). Mest komplette moderne sett.
- `tdt4100-2016-lf.pdf` («Familie/slekt» — enum-lignende `Gender`, `Iterable`, fil-I/O `save`/`load`,
  `Relation`-grensesnitt, **delegering** `Relation2`, abstrakt klasse, lambda).
- `tdt4100-2015-lf.pdf` / `tdt4100-2014-lf.pdf` (buss­ruter/segmenter — funksjonelle grensesnitt +
  `Predicate`, `Iterable<Segment>`, arv vs. **delegering** for estimering, observatør-observert).
- `tdt4100-2013-bm-lf.pdf` («TaxProgram»/skatt — abstrakt `TaxEntity`, synlighet/`protected`
  konstruktør, `HashSet`, statistikk, delegering mot `IAdresse`, UML-klassediagram, `main`).
- `2011-bm-lf.pdf` (innkapsling + personnummervalidering, checked exceptions, `MatchResult`/
  `LeagueTable` med `Comparable`-sortering, arv/generalisering, observatør-observert, unntakstesting).
- `tdt4100-2016-kont-lf.pdf`, `tdt4100-2015-kont-lf.pdf`, `tdt4100-2014-kont-lf.pdf`,
  `tdt4100-2013-kont-lf.pdf` (konte-varianter, samme temaprofil).

**Skumlest / maskingjennomsøkt (form- og temaregistrering):**
- `2005–2012` (ordinær + konte, med løsningsforslag): `2005-bm-lf`, `2005-kont-bm-lf`,
  `2006-kont-bm-lf`, `2007-eng-lf`, `2007-kont-bm-lf`, `2008-bm-lf`, `2008-kont-bm-lf`, `2009-bm-lf`,
  `2010-bm-lf`, `2010-bm-kont-lf`, `2011-bm-kont-lf`, `2012-bm-lf`, `2012-bm-kont-lf`
  (klassisk teori+kode-æra: innkapsling, arv, `equals`/`hashCode`, `toString`, `clone`, «hva skrives
  ut», Swing-GUI i 2012).

**Ikke i arkivet som PDF (rekonstruert fra README + emnebeskrivelse):**
- 2018–2024, kode-baserte eksamener i GitLab (NTNU-innlogging), f.eks. «Mercedes-Benz
  forskningsanlegg» 2024. Fem likevektede deler (~20 %) rundt ett domenecase, levert som kjørbar
  Java med JUnit; JavaFX/UML/designmønstre/verktøy fremhevet.

**Fagbeskrivelse:** omskrevet sammendrag av NTNUs emnebeskrivelse
(scratchpad: `fagbeskrivelse-tdt4100.md`) og arkivets `README.md`.

**Merknader om kildene:**
- **Formskifte:** klassisk papir/teori-eksamen med lærebok (2005–2017) → kode-basert IDE-eksamen
  (2018–). Frekvensanalysen bygger på 2005–2017; den moderne kjernen er faglig kontinuerlig, men
  leveres som kjørbar kode.
- **NTNU vs. UiO:** TDT4100 og IN1010 deler språk (Java) og navn, men vekter ulikt. TDT4100 =
  innkapsling/synlighet, `static`, arv/grensesnitt, **bibliotek­samlinger**, `Comparable`/sortering,
  **designmønstre** (observatør-observert, delegering, komposisjon), enhetstesting, fil-I/O, UML —
  med mye forklarende tekst. IN1010 = **egendefinerte datastrukturer** (lenkede lister/iteratorer med
  `Node`, generics) og **tråder + monitor**, nesten ren kodeskriving. **TDT4100-arkivet har null
  tråder; IN1010 har null biblioteks-baserte designmønster-oppgaver.** En felles kobling: Ragnhild
  Kobro Runde (Ifi, UiO) kvalitetssikret flere TDT4100-sett.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er
  parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasiter er gjengitt ordrett;
  kodemønstrene er standard Java-idiomer.
