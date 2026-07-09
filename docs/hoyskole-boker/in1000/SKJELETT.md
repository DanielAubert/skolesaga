# Bokskjelett: IN1000 Introduksjon til objektorientert programmering (UiO) — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (UiO-arkivet 2014–2024: 8 avsluttende sett, 3 fulle
> løsningsforslag og 4 prøveeksamener med fasit — 27 filer). Arketype:
> **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/
> øvingseksamen) er obligatoriske og gjentas ikke her. Alle kodeeksempler,
> domener og oppgavetekster i den ferdige boka skal være **nyskrevne**
> (opphavsrett): kodemønstrene er standard Python-idiomer, men tall, variabelnavn,
> domeneinnpakning og oppgavetekster skal være forfatterens egne.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `in1000` |
| Tittel | **IN1000 Introduksjon til objektorientert programmering (UiO)** |
| Level | `'Høyskole'` |
| Arketype | Regnefag (kvantitativt kodefag med fast, gjentakende oppgavemal) |
| Antall kapitler | **29** (1 eksamenskart + 25 tema/drill + 3 eksamenstrening) |
| Estimert totaltid | **2 160 min ≈ 36 timer** |
| Quiz totalt | **516** (krav ≥500) |
| Flashcards totalt | **508** (krav ≥500) |

**Pitch (én avsnitt):** IN1000 har en påfallende stabil eksamensmal: **én
avsluttende, hjelpemiddelfri, 4-timers digital Inspera-eksamen** (A–F, 100 poeng)
med **fem faste oppgaver som gjentas nesten identisk hvert år** — bare domenet
roterer (ukeplaner, hotell, garderobe, strømmetjeneste …). Det finnes **ingen
vektet midtveiseksamen** (motsatt IN1900 og IN1010): hele karakteren avgjøres av
det ene settet. Strukturen er: **Oppgave 1** kodeforståelse «hva skrives ut»
(~8 p) → **Oppgave 2** flervalg om objekter, referanser, `self` og scope (~9 p) →
**Oppgave 3** skriv små funksjoner over lister/ordbøker/strenger (~28 p) →
**Oppgave 4 STOR KLASSEMODELLERING fra spesifikasjon (~50 p — nesten halve
eksamen)** → **Oppgave 5** funksjoner over nøstede strukturer (~9 p). All
kodeskriving (Oppg. 3 + 4 + 5) er **~83 %** av poengene; flervalg/kortsvar-skallet
(Oppg. 1 + 2) er **~17 %**. Åtte temaer opptrer i **hvert eneste** moderne sett:
løkker/betingelser, funksjoner, kodesporing, klassemodellering, lister, ordbøker,
variabler/datatyper og referanser/`self`. Denne boka driller nettopp disse til
automatikk — med **klassemodelleringen som tyngdepunkt** — i sensors korte,
eksplisitte grunnkonstruksjon-stil, og parer hvert kodemønster med et
domeneeksempel slik at studenten kjenner mønsteret igjen uansett innpakning.
IN1000 er det **mildeste** av UiOs tre programmeringsinnføringer: smalest apparat,
mest støtte i oppgaveteksten, størst vekt på ett gjennomarbeidet modelleringsmønster.

**Kritiske stilregler (gjelder HELE boka — sensors faktiske kodestil):**
1. **Enkel, eksplisitt kode med grunnkonstruksjoner.** Kun `for`/`while`,
   `if/elif/else`, funksjoner, lister, ordbøker og klasser. **Ingen typehint,
   ingen list comprehensions, ingen avanserte biblioteker.** Fasiten skriver
   **eksplisitte løkker**, ikke pythonske one-liners, og **unngår snarveier** som
   `set()`, `Counter`, `sum()`, `sorted()` med `key`, `max(..., key=...)` — den
   teller heller manuelt med en ordbok/teller. Hvert funksjonsskrivingskapittel
   (Del 3, 6, 8) skal ha en **eksplisitt `warning`**: «Snarveien finnes, men
   kurset og fasiten belønner grunnformen — lær den eksplisitte løkka først.»
2. **Instansvariabler med `_`-prefiks** (`self._navn`) — innkapsling, «skal ikke
   aksesseres utenfra klassen». Bruk **aksessor/mutator** (`hent_x`/`sett_x`)
   framfor direkte attributt-tilgang utenfra.
3. **`__init__` og `__str__` er de eneste spesialmetodene som forventes.** **Arv,
   `super()` og polymorfisme testes i praksis nesten aldri på eksamen**, selv om
   de nevnes i pensum. Boka driller dem IKKE — de får kun kort **kjenne**-omtale
   (kap. 5.1) med henvisning til IN1010. (Dette skiller IN1000 skarpt fra IN1900,
   der arv er et perfekt-tema via ODESolver.)
4. **`self`-fella:** en instansvariabel må settes med `self._x = ...`. Skrives bare
   `x = ...` i konstruktøren, blir det en **lokal variabel som forsvinner** (senere
   `hent_x()` gir feilmelding / `NameError`). Egen `warning` i kap. 5.1 og 5.4, og
   den plantes eksplisitt i objekt-flervalg-drillen (5.5).
5. **Riktig idé/struktur belønnes selv med småfeil.** En delvis riktig funksjon med
   rett idé og små indeks-/kantfeil gir uttelling. **Delkarakter gis per
   deloppgave** — man skal aldri stå fast: hopp videre, **bruk metoder beskrevet i
   oppgaveteksten selv om man ikke selv skriver dem**, vis alltid et forsøk framfor
   blankt. Dette skal stå i Del 0 og prege ALLE løsningsforslag (margnotater om hva
   som gir uttelling ved hvert steg).
6. **Oppgave 1 rettes automatisk (nyere sett):** skriv **eksakt** verdi, **riktig
   type**, **ingen pynt** — ikke `18.0` for heltallet `18`, ikke `'tekst'` med
   enkle anførselstegn i svarfeltet. Kodesporingseksempler og -quiz i boka skal
   angi utskriften **nøyaktig** som terminalen (mellomrom, hakeparenteser, at
   `print(a, b)` skiller med ett mellomrom).
7. **Flervalg (Oppg. 2): blankt = feil = 0 → kryss alltid av.**
8. **Unngå særnorske tegn (æ/ø/å) i selve koden** (H2020-merknad) — men **norske
   navn på variabler/metoder er helt greit** (som i fasitene: `hentAlder`,
   `travleste`, `settInnLedig`, `sjekk_reise`).
9. **Ved «finn feilen»: gi et konkret moteksempel** (et sett argumenter som gir
   galt svar), ikke bare en verbal forklaring.
10. **`randint(a, b)` og andre småkonstruksjoner leveres i oppgaven** (H2023 sier
    eksplisitt at man ikke trenger å importere noe) — bruk dem, ikke gjenoppfinn dem.

**Avvik fra DNA/README-malen (dokumentert):**
- **«Symbol- og formelliste» → «API- og konstruksjonsliste».** README krever en
  `collapsible` «Symbol- og formelliste» per delkapittel. For et kodefag finnes
  det sjelden matematiske symboler, men det finnes et presist konstruksjonsapparat.
  Blokken heter derfor **«API- og konstruksjonsliste»** og lister ALLE Python-
  konstruksjoner brukt i delkapitlet: funksjoner, metoder og idiomer (f.eks.
  `range(start, stop, step)` — stopp eksklusiv; `d[k] = d[k] + 1` — teller-idiom;
  `self._x` — instansvariabel med innkapslingsprefiks; `fil.readline().rstrip()`).
  Regelen «per delkapittel, ikke arv fra tidligere» beholdes. (Samme avvik som IN1900.)
- **`theorem`-blokker brukes for kanoniske kodemønstre (idiomer).** Der DNA-en
  bruker `theorem` for matematiske resultater, brukes den her for de faste
  kodemønstrene som skal sitte i ryggmargen: **teller/akkumulator**, **flagg +
  tidlig retur**, **ordbok som forekomst-teller**, **finn-beste-løkka**,
  **konstruktør-med-`self._x`-malen**, **aksessor/mutator-malen**,
  **filinnlesing-løkka** (`while linje != "":`) og **klassemodellering-malen**.
  Disse er bokas «teoremer».
- **Flashcards genereres fra `definition`-blokker på toppnivå.** For dette faget er
  `definition`-blokkene API-/konstruksjons- og begrepsdefinisjoner (ett kort med
  konstruksjonen/begrepet som «tittel» og presis oppførsel + minimalt eksempel som
  «definisjon» — f.eks. «`.split(sep)` → deler en streng i en liste av delstrenger
  på hver forekomst av `sep`»). Begrepsmengden er **moderat** (mildt fag), så
  flashcard-tettheten ligger **nær gulvet** — 508 totalt.
- **Quiz kalibreres som kodesporing + objekt-begreps-MC (IKKE midtveis-MC).**
  IN1000 har **INGEN midtveiseksamen**. Quizbanken speiler i stedet de to
  flervalgs-/kortsvarssjangrene på selve eksamen: **Oppgave 1** (kodeforståelse
  «hva skrives ut?» — hovedtyngden av quiz) og **Oppgave 2** (begreps-flervalg om
  referanser, `self`, scope og grensesnitt). Hvert quizspørsmål skal ligne et
  reelt Oppg.-1- eller Oppg.-2-spørsmål. `options[0]` = riktig svar (runtime stokker).
- **Drill i temadelene, ikke bare siste del.** DNA-en legger sjangerkapitlene i
  siste del. Her ligger drillkapitlene (kodesporing 4.1, objekt-flervalg 5.5,
  funksjonsskriving 3.4, klassemodellering 6.5, filinnlesing 7.2, nøstede
  strukturer 8.2) inne i sine respektive temadeler, fordi hver sjanger er en
  67–100 %-gjenganger som må drilles umiddelbart etter teorien. Del 9 beholder de
  komplette øvingseksamenene. (Speiler econ1310/in1900-avviket.)
- **Ingen midtveis-simulering i Del 9.** Fordi IN1000 kun har avsluttende eksamen,
  består Del 9 av **2–3 avsluttende øvingseksamener** etter 5-delers-malen (med
  klassemodellering som ~50 %), ikke en ren MC-simulering (motsatt IN1900 9.1).
- **Utelatt stoff (bevisst).** **NumPy, matplotlib, rekker, ODE-løsere, numerikk**
  (IN1900-stoff), **arv/`super()`/polymorfisme, lenkede strukturer, iteratorer,
  egendefinerte unntak, tråder** (IN1010-stoff) og **rekursjon** er **ikke pensum
  i IN1000** og drilles ikke. De får kun en samlet, kort **kjenne**-omtale i
  Del 0 og kap. 5.1 (progresjonen til IN1010). Historiske INF1001-temaer
  (tallsystem-konvertering, personvern/POPPL) er falt bort og nevnes ikke.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): konstruksjonene bygges opp i
den rekkefølgen de forutsetter hverandre. Frekvensen styrer *omfanget*: de fem
100 %-temaene får flere kapitler + eget drillkapittel, med **klassemodelleringen
(Del 6) som klart tyngste del** siden Oppgave 4 alene er ~50 % av eksamen.

| Del | `sectionName` (bokforsiden) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. |
| 1 | Python-grunnlaget: variabler, betingelser og løkker | 3 | **Løkker/betingelser 100 %**, ryggraden i alt (sporing + all koding). Fundamentet alt annet står på. |
| 2 | Funksjoner | 2 | **Funksjoner 100 %** — Oppg. 3 og 5 er rene funksjonsoppgaver; funksjoner overalt. |
| 3 | Lister, ordbøker og strenger | 4 | **Lister, ordbøker 100 %; strenger 83 %** — bærer HELE Oppgave 3 (~28 p). 3 teori + eget funksjonsskrivingsdrill. |
| 4 | Kodesporing og kodeanalyse | 2 | **Kodesporing 100 %** (Oppg. 1), egen drillsjanger + «finn feilen»/moteksempel (sjanger I, 50 %, nivå 3). |
| 5 | Klasser, objekter og referanser | 5 | **Klasser 100 %; referanser/`self` 100 %** — teorigrunnlaget for Oppg. 2 OG Oppg. 4. 4 teori + objekt-flervalg-drill. |
| 6 | Stor klassemodellering | 5 | **Oppgave 4 (~50 p, HALVE EKSAMEN), 100 %.** Tyngdepunktet: 4 teori (modelleringsmetode, samarbeidende klasser, algoritme-metoder, terminal-interaksjon) + full mal-drill. |
| 7 | Filbehandling | 2 | **83 %** — nesten alltid del av den store klassemodelleringen. 1 teori + drill. |
| 8 | Nøstede strukturer | 2 | **Oppgave 5 (~9 p), nøstede lister/ordbøker 67 %** (nivå 2). 1 teori + Oppg.-5-drill. |
| 9 | Eksamenstrening | 3 | 3 komplette avsluttende øvingseksamener etter 5-delers-malen (klassemodellering ~50 %). |

**Avvik fra DNA-makrostrukturen:** se §1 (drill i temadelene; ingen midtveis-
simulering). Del 6 er bevisst overdimensjonert (5 kapitler) fordi Oppgave 4 alene
avgjør ~halve karakteren.

---

## 3. Sjangerkatalog (A–I)

Bokstavene refereres i hvert kapittel og gjengis for studenten i Del 0. Destillert
fra EKSAMENSANALYSE §3. To hovedfamilier: **«hva skrives ut»** (les kode, angi
resultat / velg alternativ — Oppg. 1 + 2) og **«skriv X»** (produser kode —
Oppg. 3 + 4 + 5).

| Kode | Sjanger | Form | Hyppighet / vekt / eksamensplass |
|---|---|---|---|
| **A** | Kodeforståelse «hva skrives ut / verdien til X» | kortsvar (auto-rettet) | 100 %; 1–3 p/deloppg., ~8 p; **Oppgave 1** |
| **B** | Flervalg om objekter: referanser, `self`, scope, grensesnitt | flervalg | ~100 % moderne; 2–3 p/deloppg., ~8–9 p; **Oppgave 2** |
| **C** | Skriv en liten funksjon over en **liste** | fritekst-kode | 100 %; 4–8 p; **Oppgave 3** |
| **D** | Skriv en funksjon over en **ordbok** (oppslag/teller/gruppering) | fritekst-kode | 100 %; 5–8 p; **Oppgave 3/5** |
| **E** | Skriv en funksjon over en **streng** | fritekst-kode | 83 %; 4–7 p; **Oppgave 3** |
| **F** | **Stor klassemodellering** fra spesifikasjon | fritekst-kode | 100 %; **47–55 p** (~halve eksamen); **Oppgave 4** |
| **G** | Skriv en funksjon over **nøstet** liste/ordbok | fritekst-kode | 67 %; 4–5 p/deloppg., ~9 p; **Oppgave 5** |
| **H** | Terminal-interaksjon (input-løkke til gyldig verdi) | fritekst-kode | 50 %; 5–7 p; oftest **inne i Oppgave 4** |
| **I** | «Finn feilen» / logisk feil + **konkret moteksempel** | flervalg + fritekst | 50 %; 2–6 p; Oppg. 1 (flervalg) eller Oppg. 2/3 |

---

## 4. Kapitler

Feltene følger DNA-ens «Skjelett-krav», tilpasset kodefag: **Kodekontrakt**
erstatter «Innholdskontrakt» (eksakte konstruksjoner/API-er/idiomer kapitlet SKAL
lære, med presis oppførsel). Prioritetsklasser: **perfekt** (nivå 1) / **kunne**
(nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet — slik testes IN1000

- **id:** `in1000-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen (én avsluttende 4-timers eksamen, ingen midtveis), den faste 5-oppgave-strukturen, temafrekvensene, sjangerkatalogen A–I og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet 2014–2024. Skal gjengi: (i) formen — **én** hjelpemiddelfri digital Inspera-eksamen, **4 timer**, A–F, **100 poeng**, alle trykte/skrevne hjelpemidler (ingen elektroniske), språk kan veksles bokmål/nynorsk/engelsk; **ingen vektet midtveiseksamen** (hele karakteren fra ett sett); obligatoriske innleveringer må være godkjent; (ii) den **faste 5-oppgave-strukturen** med poeng og andel: Oppg. 1 kodeforståelse (~8 p, ~8 %) → Oppg. 2 objekt-flervalg (~8–9 p, ~9 %) → Oppg. 3 små funksjoner over liste/ordbok/streng (~28 p) → **Oppg. 4 stor klassemodellering (~50 p, ~48 % — nesten halve eksamen)** → Oppg. 5 funksjoner over nøstede strukturer (~9 p); (iii) fordelingen **kodeskriving ~83 % vs. flervalg/kortsvar ~17 %**; (iv) **temafrekvens-tabellen** (løkker/betingelser 100 %, funksjoner 100 %, kodesporing 100 %, klassemodellering 100 %, lister 100 %, ordbøker 100 %, variabler/datatyper 100 %, referanser/`self`/scope ~100 %, filbehandling 83 %, strenger 83 %, algoritmikk i klasser 83 %, nøstede strukturer 67 %, terminal-interaksjon 50 %, `__str__` 50 %, «finn feilen» 50 %, grensesnitt-teori 33 %); (v) **sensors metaregler** (egne forutsetninger tillates ved underspesifikasjon — beskriv dem i kommentar; egne hjelpemetoder tillates; **delkarakter per deloppgave** — stå aldri fast, bruk metoder fra oppgaveteksten du ikke selv skrev; Oppg. 1 auto-rettet → eksakt verdi/type/ingen pynt; alltid krysse av på flervalg; unngå æ/ø/å i koden; enkel eksplisitt grunnkonstruksjon-stil, ingen snarveier); (vi) **hva som er UTE av pensum** (NumPy/ODE/numerikk = IN1900; arv/lenkede strukturer/tråder/rekursjon = IN1010; tallsystem/personvern = falt bort fra INF1001) — med kort **kjenne**-omtale av progresjonen IN1000 → IN1010.
- **Kodekontrakt:** Sjangerkatalogen A–I (fra §3) presenteres som studentens sjekkliste med typisk vekt og eksamensplass. Pluss **prognosen for neste eksamen**: Oppg. 1 ≈ 5–7 kortsvar (int-vs-str, løkke-oppdateringsrekkefølge, nøstet akkumulering, indeksering, ordbok-mutasjon) → Oppg. 2 ≈ 2a–2d flervalg om én felles kodesnutt med to klasser (referanser, `self`, scope, grensesnitt) → Oppg. 3 ≈ 3–5 små funksjoner (teller-, flagg- og grupperingsmønstre over liste/ordbok/streng) → **Oppg. 4 ≈ stor klassemodellering fra tekst/UML: 4–6 samarbeidende klasser, konstruktør med `self._x`, aksessor/mutator, ordbok/liste for «en-til-mange», filinnlesing, minst én input-/algoritme-/`__str__`-metode** → Oppg. 5 ≈ 2 funksjoner over nøstede strukturer. Avslutt med **leseplan**: Del 6 (klassemodellering) + Del 3 (funksjonsskriving) + Del 5 (klasser/`self`) + Del 4 (kodesporing) er «må perfekt»; Del 7 (fil) + Del 8 (nøstet) «må kunne»; sjanger I og grensesnitt-teori er «kjenne».
- **Oppgavesjangre:** Ingen kodeoppgaver; 3–4 refleksjonsoppgaver av typen «gitt at Oppgave 4 er ~50 p og du har 4 timer — sett opp et tidsbudsjett når skallet (Oppg. 1+2) er ~17 p og du får delkarakter per deloppgave; hvor bør du bruke minst 90 minutter?».
- **Typiske feil:** Metafeilene: la et blankt flervalg stå (0 = feil); stå fast på en deloppgave i stedet for å hoppe videre og bruke oppgavetekstens metoder; skrive pyntet svar i auto-rettet Oppg. 1 (`18.0` for `18`); bruke tid på snarveier/one-liners fasiten ikke belønner; øve på arv/NumPy som ikke testes.
- **Quiz: 12 · Flashcards: 16** (form, 5-oppgave-strukturen, frekvenser, metaregler, sjangerkatalogen A–I)

---

### Del 1 — Python-grunnlaget: variabler, betingelser og løkker *(løkker/betingelser: PERFEKT)*

> Del 1 er fundamentet: løkker og betingelser har 100 % frekvens og er ryggraden i
> BÅDE kodesporing (Oppg. 1) og all kodeskriving (Oppg. 3–5). Hvert kapittel
> introduserer en konstruksjon OG dens vanligste kodesporingsfelle.

#### Kapittel 1.1: Variabler, datatyper og uttrykk

- **id:** `in1000-1-1` · **number:** 1.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Tall (`int`/`float`), tekst (`str`) og boolske verdier, aritmetiske uttrykk, og de kritiske typekonverteringene `int(...)`/`str(...)` — grunnlaget for den faste int-vs-str-fella i Oppgave 1.
- **Eksamensbelegg:** Variabler/datatyper 100 % (Oppg. 1). Den mest berømte kortsvarsfella er `"1"+"2" → "12"`, deretter `int("12")+int("3") = 15` (H2024 1b): streng-konkatenering vs. tall-addisjon + glemt/uteglemt `int()`. Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** `int`/`float`/`str`/`bool`; tilordning `x = ...`; aritmetikk `+ - * / // % **` (`/` gir alltid `float`, `//` heltallsdivisjon, `%` rest); at `+` på strenger **konkatenerer** (`"1"+"2" → "12"`) og `*` gjentar (`"ab"*3 → "ababab"`); typekonvertering `int(streng)`, `str(tall)`, `float(streng)`; at `input()`/fillest data **alltid er streng** og må konverteres; boolske verdier `True`/`False`; `print(...)` (også med flere argumenter skilt av komma → skilles av ett mellomrom i utskrift). Til bruk og sporing — ingen utledning.
- **Oppgavesjangre:** A. Mønstereksempel (nyskrevet): «Hva skriver `a = "3"; b = "4"; print(a + b, int(a) + int(b))` ut? Angi svaret eksakt slik terminalen viser det.» (Fasit: `34 7`.)
- **Typiske feil:** Tro at `"3"+"4"` gir `7` (§5.3); glemme `int(...)` slik at tekst ikke blir tall (§5.4); skrive pyntet svar (`7.0` for `7`) i auto-rettet felt; glemme at `print(a, b)` setter ett mellomrom mellom argumentene.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 1.2: Betingelser og boolske uttrykk

- **id:** `in1000-1-2` · **number:** 1.2 · **estimatedMinutes:** 40 · **prerequisites:** `in1000-1-1` · **kapitteltype:** teori
- **description:** `if/elif/else`, sammenligning og de logiske operatorene `and`/`or`/`not` — forgreningen som all kodesporing og all funksjonslogikk hviler på.
- **Eksamensbelegg:** Betingelser 100 %. `if/elif/else`-forgrening er fast kortsvarsfelle (H2024 1c → 12); boolske uttrykk er kjernen i flagg-funksjonene (Oppg. 3) og i objekt-flervalget (Oppg. 2). Prioritet: **perfekt**.
- **Kodekontrakt:** Sammenligning `== != < <= > >=`; `and`/`or`/`not` og evalueringsrekkefølge (`not` > `and` > `or`); `if betingelse:` / `elif betingelse:` / `else:`; at kun **den første** sanne grenen kjøres; kjedet sammenligning brukt eksplisitt (`if 0 <= x and x < 10:`); sammenligning av strenger (leksikografisk); vanlige mønstre (`if x in liste:`, `if k in ordbok:`). Til bruk og sporing.
- **Oppgavesjangre:** A + grunnlag for C/D/E. Mønstereksempel: «Hva skriver denne ut for `x = 7`? `if x > 10: print("stor") elif x > 5: print("middels") else: print("liten")`» (Fasit: `middels`.)
- **Typiske feil:** Tro at flere `if`-grener kan slå til (bruke `if`/`if` der `elif` trengs); feil operatorrekkefølge i `and`/`or`; forveksle `=` (tilordning) og `==` (sammenligning); glemme kant-tilfellet (`>` vs. `>=`).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.3: Løkker: for, while og range

- **id:** `in1000-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `in1000-1-2` · **kapitteltype:** teori
- **description:** `for`-løkker over sekvenser og `range`, `while`-løkker, nøstede løkker og akkumulatormønsteret — den vanligste kodesporingskilden og motoren i all kodeskriving.
- **Eksamensbelegg:** Løkker 100 %. Faste kortsvarsfeller: rekkefølge på oppdateringer i løkke (`a = 2*a + b`, H2018 1c → 20), akkumulering i nøstet løkke med betingelse (H2024 1d → 3; H2022 1e → 6), `while` som muterer flere variabler per runde (H2022 1c/1d; H2014 → 38). Prioritet: **perfekt**.
- **Kodekontrakt:** `for e in sekvens:` (over liste, streng, ordbok, `range`); `range(stop)`, `range(start, stop)`, `range(start, stop, step)` — **stopp eksklusiv**; `while betingelse:`; nøstede løkker; **akkumulatormønster** (`total = 0` … `total += ...`) og **tellermønster** (`antall = 0` … `antall += 1`) — bokas første `theorem`-idiom; muteringsrekkefølge i løkke (les gammel verdi før du overskriver); løkkevariabel-avhengige grenser (`for j in range(i):`); at en `while`-løkke må endre betingelsesvariabelen (ellers uendelig). Til bruk og sporing.
- **Oppgavesjangre:** A. Mønstereksempler: (nøstet akkumulering) «Hva blir `total` etter `total = 0; for i in range(3): for j in range(i): total += 1`?» (Fasit: `3`); (`while`) «`n = 20; s = 0; while n > 1: s += n; n = n // 2` — hva blir `s`?».
- **Typiske feil:** Av-én i `range` (glemme at stopp er eksklusiv, §5.5); feil grenser i nøstede løkker; muteringsrekkefølge (overskrive en variabel før den brukes i samme runde); glemme å endre `while`-betingelsen (uendelig løkke).
- **Quiz: 24 · Flashcards: 20**

---

### Del 2 — Funksjoner *(prioritet: PERFEKT)*

#### Kapittel 2.1: Funksjoner: def, parametere og return

- **id:** `in1000-2-1` · **number:** 2.1 · **estimatedMinutes:** 45 · **prerequisites:** `in1000-1-3` · **kapitteltype:** teori
- **description:** Definere og kalle funksjoner, parametere, `return` (også flere returverdier og flere `return`-steder) — håndverket bak Oppgave 3 og 5 og alle metoder i Oppgave 4.
- **Eksamensbelegg:** Funksjoner 100 % — Oppg. 3 og 5 er rene funksjonsoppgaver, og hver klassemetode i Oppg. 4 er en funksjon. **Flagg + tidlig `return`** (returner `False` straks et moteksempel finnes, ellers `True` til slutt) er sensors foretrukne mønster og en fast felle. Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** `def navn(par1, par2):`; `return uttrykk`; funksjon uten `return` gir `None`; **flere `return`-steder** og **tidlig retur** (`theorem`-idiom: `for e in liste: if daarlig(e): return False` … `return True`); flere returverdier (`return a, b` → `x, y = f(...)`); at et funksjonskall må skje etter definisjonen; funksjoner som kaller andre funksjoner; forskjellen på å **definere** (`def f():`) og **kalle** (`f()`). Til bruk og sporing.
- **Oppgavesjangre:** A + C/D/E-grunnlag. Mønstereksempel (C-mønster, nyskrevet): «Skriv `bare_positive(tall)` som returnerer `True` hvis alle tallene i lista er større enn 0, ellers `False`. Bruk en løkke med tidlig `return`.»
- **Typiske feil:** Returnere `True` **inne** i løkka der man skulle ventet til etter løkka (klassisk «alle/sortert»-feil, §5.7); glemme `return` (funksjonen gir `None`); blande argumentrekkefølge; kalle funksjonen før den er definert.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 2.2: Funksjonssamarbeid og scope

- **id:** `in1000-2-2` · **number:** 2.2 · **estimatedMinutes:** 40 · **prerequisites:** `in1000-2-1` · **kapitteltype:** teori
- **description:** Hvordan funksjoner samarbeider, og reglene for **scope**: en lokal variabel i en funksjon endrer ikke en variabel utenfor — grunnlaget for scope-spørsmålene i Oppgave 2.
- **Eksamensbelegg:** Scope er et kjernebegrep i objekt-flervalget (Oppg. 2, ~100 %): en lokal tilordning skygger ikke den ytre variabelen (H2020 2j/2k; forbereder `self`-fella i kap. 5). Prioritet: **perfekt** (som forkunnskap til Oppg. 2).
- **Kodekontrakt:** Lokal vs. global variabel; at tilordning inne i en funksjon lager en **lokal** variabel som forsvinner når funksjonen returnerer; at parametere er lokale kopier av navnene (for tall/streng); at en funksjon leser ytre variabler den ikke selv tilordner; at man **kommuniserer resultat med `return`**, ikke ved å endre globale variabler; hvorfor globale variabler unngås. Til sporing og begrepsforståelse. `warning` som forbereder `self`-fella (kap. 5.1/5.4).
- **Oppgavesjangre:** A (scope) + B-grunnlag. Mønstereksempel: «`x = 5; def f(): x = 10; return x; print(f(), x)` — hva skrives ut?» (Fasit: `10 5`.)
- **Typiske feil:** Tro at en lokal tilordning endrer den ytre/globale variabelen (§5.12); tro at en funksjon uten `return` likevel «gir tilbake» en verdi; blande hvilke navn som er synlige hvor.
- **Quiz: 18 · Flashcards: 18**

---

### Del 3 — Lister, ordbøker og strenger *(prioritet: PERFEKT — bærer Oppgave 3)*

> Del 3 bærer hele Oppgave 3 (~28 p) og halve Oppgave 5. Tre teorikapitler bygger
> datastrukturene, kap. 3.4 er det store funksjonsskrivingsdrillet (sjanger C/D/E).
> **Grunnkonstruksjon-regelen gjelder skarpt her:** fasiten teller manuelt med
> løkke/ordbok, ikke `set()`/`Counter`/`sum()`.

#### Kapittel 3.1: Lister

- **id:** `in1000-3-1` · **number:** 3.1 · **estimatedMinutes:** 45 · **prerequisites:** `in1000-1-3` · **kapitteltype:** teori
- **description:** Lister: indeksering (også negativ), `append`, gjennomløping, `len` og bygging av nye lister — den mest brukte datastrukturen i hele faget.
- **Eksamensbelegg:** Lister 100 % (både i sporing og i funksjonene). Indeksering (`tallene[0] + tallene[3]`, H2018 1d → 9) er fast kortsvarsfelle; `append`-bygging er standard i Oppg. 3 og 4. Prioritet: **perfekt**.
- **Kodekontrakt:** `[...]`-litteral, tom liste `[]`; indeksering `x[i]`, negativ `x[-1]`; `len(x)`; `x.append(e)`; gjennomløping `for e in x:` og `for i in range(len(x)):`; `in`-test (`e in x`); bygge ny liste (`ny = []` … `ny.append(...)`); konkatenering `+` (IKKE elementvis); `x[i] = ny_verdi`; enkel bruk av `range(len(x))` når indeksen trengs. Til bruk og sporing. (Ingen slicing-tunge oppgaver — nevnes kort.)
- **Oppgavesjangre:** A + C. Mønstereksempel (C, nyskrevet): «Skriv `annethvert(liste)` som returnerer en ny liste med elementene på partallsindeks (0, 2, 4, …). Bruk `range(0, len(liste), 2)`.»
- **Typiske feil:** Av-én / feil løkkegrenser i indeksering (`range(1, len(liste))` vs. `range(len(liste))`, §5.5); indeks utenfor rekkevidde på tom/kort liste (§5.6); forveksle `append` (endrer lista) og `+` (ny liste); glemme at negativ indeks teller fra `-1`.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 3.2: Ordbøker

- **id:** `in1000-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `in1000-3-1` · **kapitteltype:** teori
- **description:** Ordbøker (`dict`) som oppslagstabell, **teller** og **grupperingsstruktur** — den nest viktigste datastrukturen, og datamodellen bak «en-til-mange» i klassemodelleringen.
- **Eksamensbelegg:** Ordbøker 100 % (H2022 1e/3d, H2023 3e/5a-b, H2024 1e/4). Teller-idiomet og grupperings-idiomet er sensors foretrukne løsning på «tell/finn flest/gruppér»-oppgaver — **eksplisitt, ikke `Counter`**. Ordbok-som-muterer-seg-selv-i-løkke er kortsvarsfelle (H2024 1e → 5). Grunnlag for «en-til-mange» i Del 6. Prioritet: **perfekt**.
- **Kodekontrakt:** `{nøkkel: verdi}`, tom `{}`; oppslag `d[k]`, innsetting/oppdatering `d[k] = v`; `if k in d:`; løkke `for k in d:` (over nøkler); **teller-idiom** (`theorem`: `if t not in d: d[t] = 0` … `d[t] += 1`); **grupperings-idiom** (`if k not in d: d[k] = []` … `d[k].append(navn)` → `{nøkkel: [liste]}`); at nøkler er unike (ny tilordning overskriver); finne nøkkelen med størst verdi via **eksplisitt finn-beste-løkke** (ikke `max(..., key=...)`). Til bruk og sporing. `warning`: unngå `Counter`/`set()` — teller manuelt.
- **Oppgavesjangre:** A + D. Mønstereksempel (D, nyskrevet): «Skriv `tell_ord(ord_liste)` som returnerer en ordbok fra hvert ord til hvor mange ganger det forekommer. Bruk teller-idiomet med `if ord not in d`.»
- **Typiske feil:** Slå opp en manglende nøkkel uten `if k in d`-sjekk (`KeyError`); glemme å initialisere telleren (`d[t] = 0`) før `+= 1`; glemme å opprette den indre lista (`d[k] = []`) før `append` i gruppering; bruke snarveier fasiten ikke belønner (§ stilregel 1).
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 3.3: Strenger

- **id:** `in1000-3-3` · **number:** 3.3 · **estimatedMinutes:** 45 · **prerequisites:** `in1000-3-1` · **kapitteltype:** teori
- **description:** Strenger som tegnsekvenser: gjennomløping tegn for tegn, `.split()`, `.rstrip()`/`.strip()`, bygging med `+` og `str()` — grunnlaget for streng-funksjonene i Oppgave 3 og for filinnlesing.
- **Eksamensbelegg:** Strenger 83 % (H2020 3c/3d, H2022 1f, prøveeksamen «fjern_vokaler»). Tegn-for-tegn-bygging (`for i in range(len(s))`, bygg ny streng) er sensors standardmetode; `.split()`/`.rstrip()` er selve fillesings-verktøyet (Del 7). Prioritet: **perfekt** (streng), kritisk forkunnskap til fil.
- **Kodekontrakt:** Streng som sekvens (indeksering `s[i]`, `len(s)`, `for tegn in s:`); `.split(sep)` (deler i liste; uten argument: på blanktegn); `.rstrip()`/`.strip()` (fjern linjeskift/blanktegn); bygging med `+` (`ny = ""` … `ny += tegn`); `str(tall)`; `in`-test på delstreng; `.lower()`/`.upper()` (nevnes); at strenger er **uforanderlige** (må bygge ny). Til bruk og sporing.
- **Oppgavesjangre:** A + E. Mønstereksempel (E, nyskrevet): «Skriv `fjern_tegn(tekst, tegn)` som returnerer en ny streng lik `tekst` men uten forekomster av `tegn`. Gå gjennom tegn for tegn og bygg opp resultatet.»
- **Typiske feil:** Prøve å endre en streng «på plass» (uforanderlig — må bygge ny); feil `.split()`-separator (§5.8); glemme `.rstrip()` slik at linjeskift henger med (§5.8); av-én i tegn-løkka.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 3.4: DRILL — Skriv en funksjon over liste, ordbok eller streng

- **id:** `in1000-3-4` · **number:** 3.4 · **estimatedMinutes:** 80 · **prerequisites:** `in1000-3-3` · **kapitteltype:** drill
- **description:** Full drill på Oppgave 3 (sjanger C/D/E): fra oppgavetekst til kort, eksplisitt funksjon i sensors grunnkonstruksjon-stil, med roterende datainnhold.
- **Eksamensbelegg:** Sjanger C/D/E er Oppgave 3 (~28 p, 100 %) + halve Oppgave 5. Mønstre: teller/akkumulator, flagg + tidlig retur, ordbok som teller/gruppering, tegn-for-tegn-bygging. Innpakningen roterer (`badmington`, `bordsetting`, `jages`, `heie`, `lag_interessegrupper`, `flertall`, `dempDeg`, `points`), øvelsen er identisk. Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** Velg mønster etter oppgaven: (1) **teller/akkumulator** — `total = 0` … `total += ...`; (2) **flagg + tidlig retur** — `for e in ...: if moteksempel: return False` … `return True`; (3) **ordbok som teller** — `if k not in d: d[k]=0` … `d[k]+=1`; (4) **gruppering** — `if k not in d: d[k]=[]` … `d[k].append(...)`; (5) **finn beste** — `beste = None; besteAntall = 0; if antall > besteAntall: oppdater`; (6) **tegn-for-tegn** — `ny = ""` … `ny += tegn`. Alltid: håndter tom liste / «ikke funnet» eksplisitt (returnér `None`/`-1`/`False`). Gjennomgått eksamenscase med margnotater (delvis riktig funksjon med rett idé gir uttelling). `warning`: bruk grunnformen, ikke `set()`/`Counter`/`sum()`/list comprehension.
- **Oppgavesjangre:** C, D, E. 12–16 oppgaver på eksamensnivå som roterer alle mønstre og datatyper, alle med `solution` + `hints`. Mønstereksempel: «Skriv `flest_av(dyr_liste)` som returnerer hvilket dyr som forekommer flest ganger. Bygg en teller-ordbok, finn deretter nøkkelen med størst verdi med en eksplisitt finn-beste-løkke.»
- **Typiske feil:** Hele katalogen samlet: for tidlig `return` i alle/sortert-sjekk (§5.7); glemme å initialisere teller/liste; ikke håndtere tom liste / ikke-funnet (§5.6); feil separator/`.rstrip()` (§5.8); snarveier i stedet for grunnform.
- **Quiz: 24 · Flashcards: 14**

---

### Del 4 — Kodesporing og kodeanalyse *(kodesporing: PERFEKT)*

#### Kapittel 4.1: DRILL — Kodesporing: «hva skrives ut?»

- **id:** `in1000-4-1` · **number:** 4.1 · **estimatedMinutes:** 90 · **prerequisites:** `in1000-3-2` · **kapitteltype:** drill
- **description:** Systematisk drill i å kjøre kode mekanisk i hodet og angi utskriften **eksakt** — Oppgave 1, den billigste og mest forutsigbare poengkilden.
- **Eksamensbelegg:** Sjanger A i **hvert eneste** sett (100 %), 5–7 deloppgaver, ~8 p, **auto-rettet** i nyere sett. Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** Algoritmisk sporingsmetode: 1) før en «tavle» over variablenes verdier linje for linje; 2) for løkker: skriv ut iterasjon for iterasjon, tell nøyaktig antall (`range`-stopp eksklusiv); 3) noter hva hvert `print` faktisk skriver (mellomrom mellom komma-argumenter, hakeparenteser på lister); 4) hold styr på type (heltall vs. streng, `int` vs. `float`); 5) skriv sluttresultatet **eksakt** som terminalen, uten pynt. **Fast fellekatalog som SKAL demonstreres:** int-vs-str (`"1"+"2"→"12"`, glemt `int()`); muteringsrekkefølge i løkke (`a = 2*a+b`); nøstet akkumulering med betingelse; `while` som muterer flere variabler; indeksering (positiv/negativ/kant); `if/elif/else`-forgrening; **ordbok som muterer seg selv i løkke**. Gjennomsporet eksempel med margnotater.
- **Oppgavesjangre:** A. 14–18 kortsvarsoppgaver på eksamensnivå som roterer hele fellekatalogen, hver med fullstendig sporingsløsning og eksakt fasitverdi (riktig type, ingen pynt).
- **Typiske feil:** Hele fellekatalogen: int-vs-str (§5.3); muteringsrekkefølge; av-én i `range` (§5.5); glemme mellomrommet `print(a, b)` setter; pyntet svar i auto-rettet felt; feil på ordbok-mutasjon.
- **Quiz: 28 · Flashcards: 16** (quiz er nesten utelukkende ren kodesporing — direkte Oppgave-1-trening, eksakt utskrift)

#### Kapittel 4.2: «Finn feilen» og konkret moteksempel

- **id:** `in1000-4-2` · **number:** 4.2 · **estimatedMinutes:** 45 · **prerequisites:** `in1000-4-1` · **kapitteltype:** teori
- **description:** Å peke ut feilen i et program og — når det kreves — gi et **konkret moteksempel** (et sett argumenter som gir galt svar) framfor bare en verbal forklaring.
- **Eksamensbelegg:** Sjanger I i ~50 % av settene, som flervalg «pek ut alle feilene» (H2023 1g) eller fritekst-moteksempel (H2014 2c `stoerst`, H2015 sentinel-kollisjon). Nivå 3 (differensierer / robusthet). Prioritet: **kjenne**.
- **Kodekontrakt:** Systematisk feilsøk: les koden linje for linje, spor på et **kritisk inndata** (tom liste, ett element, like verdier, verdi lik en sentinel); vanlige logiske feil (test som aldri slår til ved likhet, `>` der `>=` trengs, for tidlig `return`, sentinel-verdi som kolliderer med gyldige data); **regelen** om at et moteksempel er ett konkret kall (`stoerst(1,1,1)`) som gir galt svar. Begrepsforståelse + kort fritekst. Ingen nye API-er.
- **Oppgavesjangre:** I. Mønstereksempel (nyskrevet): «Funksjonen `storst(a,b,c)` bruker bare `>`-tester og returnerer `None` hvis ingen slår til. Gi et konkret kall som gir galt svar, og forklar i én setning hvorfor.» (Fasit-idé: `storst(4,4,4)` → `None`.)
- **Typiske feil:** Gi bare en verbal forklaring der sensor krever et **konkret** moteksempel (§ stilregel 9); overse likhets-/kant-tilfellet; ikke se sentinel-kollisjonen (`-1` som «ikke funnet» når `-1` er gyldig data, §5.10).
- **Quiz: 14 · Flashcards: 14**

---

### Del 5 — Klasser, objekter og referanser *(prioritet: PERFEKT)*

> Del 5 er teorigrunnlaget for BÅDE Oppgave 2 (objekt-flervalg) og Oppgave 4 (den
> store modelleringen). Fire teorikapitler bygger klassene fra bunnen — med
> `self`-fella, innkapsling og referansesemantikk som de tre kjernebegrepene — og
> kap. 5.5 er objekt-flervalg-drillen.

#### Kapittel 5.1: Klasser og objekter: `class`, `__init__` og `self`

- **id:** `in1000-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `in1000-2-2` · **kapitteltype:** teori
- **description:** Definere en klasse, lage objekter, og sette instansvariabler i konstruktøren med `self._x` — kjernehåndverket i objektorientering, og der `self`-fella lever.
- **Eksamensbelegg:** Klasser 100 % (Oppg. 2 og 4). `self`-fella er plantet eksplisitt i H2024 2c/2d: `_alder1` init. til 0 → `hent_alder1()` gir **0**; `alder2` uten `self` → feilmelding fordi variabelen er udefinert. Prioritet: **perfekt**. (Her ligger også den korte **kjenne**-omtalen av arv/`super()`/polymorfisme og hvorfor de IKKE drilles — testes knapt, hører til IN1010.)
- **Kodekontrakt (API- og konstruksjonsliste):** `class Navn:`; `def __init__(self, par1, par2):`; instansvariabler `self._navn = par1` (`theorem`-idiom: **konstruktør-malen** — alle instansvariabler settes med `self._x` i `__init__`); at `self` alltid er første parameter i en metode; instansiering `obj = Navn(...)` (uten `self`); attributt-tilgang `self._x` inne i metoder; vanlige metoder `def metode(self, ...):` og kall `obj.metode(...)`; at flere objekter av samme klasse har hver sine instansvariabler. `warning`: **`self`-fella** — `x = ...` i konstruktøren lager en lokal variabel som forsvinner; det må være `self._x = ...`. Kort `text` (nivå **kjenne**): arv/`super()`/polymorfisme finnes i pensum, men testes nesten aldri — de drilles for alvor i IN1010.
- **Oppgavesjangre:** B-grunnlag + F-grunnlag. Mønstereksempel: «Skriv en klasse `Konto` der `__init__(self, eier, saldo)` lagrer begge som instansvariabler med underscore, og en metode `sett_inn(self, belop)` som øker saldoen. Vis hvordan du lager et objekt og setter inn 100.»
- **Typiske feil:** Glemme `self` i metodesignatur (`def sett_inn(belop):`); skrive `x = ...` i stedet for `self._x = ...` i konstruktøren (§5.1, `self`-fella); ta med `self` når man **kaller** (`obj.metode(self, ...)`); tro at to objekter deler instansvariabler.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 5.2: Innkapsling: underscore, aksessor og mutator

- **id:** `in1000-5-2` · **number:** 5.2 · **estimatedMinutes:** 50 · **prerequisites:** `in1000-5-1` · **kapitteltype:** teori
- **description:** Innkapsling: hvorfor instansvariabler har underscore-prefiks og aksesseres gjennom `hent_x`/`sett_x`-metoder utenfra — og hva som er «del av grensesnittet».
- **Eksamensbelegg:** Aksessor/mutator og underscore er standardkonvensjonen i **hver** klassemodellering (Oppg. 4). Grensesnitt-begrepet testes som teori (H2022 4g «skriv grensesnittet», H2023 2d «er `_kaffekopper` del av grensesnittet»). Prioritet: **perfekt** (konvensjon), **kjenne** (grensesnitt-teori).
- **Kodekontrakt:** `_`-prefiks som konvensjon for «ikke aksesser utenfra»; **aksessor** (`def hent_x(self): return self._x`) og **mutator** (`def sett_x(self, ny): self._x = ny`) — `theorem`-idiom: **aksessor/mutator-malen**; at man **utenfra** klassen bruker aksessor/mutator, ikke `obj._x` direkte; **grensesnittet** = de offentlige metodene og hvordan de kalles (signaturer), IKKE de underscore-prefiksede instansvariablene; å beskrive et grensesnitt i en kommentar (metodesignaturer + kort naturlig språk). Begrepsforståelse + kode.
- **Oppgavesjangre:** B + F. Mønstereksempel: «Klassen `Bok` har `self._tittel` og `self._utlaant`. Skriv aksessor og mutator for utlånsstatusen, og forklar i en kommentar hva som er del av grensesnittet til `Bok`.»
- **Typiske feil:** Aksessere `obj._x` direkte utenfra i stedet for via aksessor (§5.11); tro at underscore-variablene er del av grensesnittet (§5.11); skrive mutator uten parameter; blande hva som er offentlig og privat.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 5.3: `__str__` og pen objektutskrift

- **id:** `in1000-5-3` · **number:** 5.3 · **estimatedMinutes:** 40 · **prerequisites:** `in1000-5-1` · **kapitteltype:** teori
- **description:** Gjøre et objekt pent utskrivbart med `__str__`, og skrive utskriftsmetoder som delegerer til underobjektenes utskrift.
- **Eksamensbelegg:** `__str__` i ~50 % av settene (H2014, H2022 4b, H2020 Dato); pen utskrift og delegering av utskrift mellom klasser er fast delkrav i Oppgave 4. Prioritet: **kunne**.
- **Kodekontrakt:** `def __str__(self): return ...` (returnerer en **streng**, kalles av `print(obj)` og `str(obj)`); bygge utskriftsstrengen med `+` og `str(...)` av instansvariablene; skille `__str__` (returnerer streng) fra en skriv-metode (`def skriv(self): print(...)`); **delegering** — en skriv-metode som løper over en liste/ordbok av underobjekter og kaller deres skriv/`__str__` (`for a in self._attraksjoner: print(a)`); at `print` med komma skiller med mellomrom. Til bruk.
- **Oppgavesjangre:** F (utskriftsmetode). Mønstereksempel: «Gi klassen `Konto` en `__str__` som returnerer `"eier: saldo kr"`, og la klassen `Bank` (som holder en liste av kontoer) ha en `skriv_alle`-metode som skriver ut hver konto.»
- **Typiske feil:** La `__str__` returnere `None` (bruke `print` inni i stedet for `return`); returnere noe annet enn en streng; glemme `str(...)` rundt tall i konkatenering; ikke delegere (skrive ut underobjektenes rådata i stedet for å kalle deres `__str__`).
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 5.4: Referansesemantikk

- **id:** `in1000-5-4` · **number:** 5.4 · **estimatedMinutes:** 55 · **prerequisites:** `in1000-5-1` · **kapitteltype:** teori
- **description:** At to variabler kan være to navn på **samme objekt**, at objekter kan holde referanser til andre objekter, og at rebinding endrer koblinger uten å røre objektene selv — det vanskeligste begrepet i Oppgave 2.
- **Eksamensbelegg:** Referansesemantikk ~100 % (moderne, Oppg. 2). `trener = far` gir to navn på samme objekt (H2018 2a → 49); `bytte`/rebinding endrer koblinger uten å endre `per`/`palle` selv (H2022 2a-d → A:3, B:4, C:6, D:6). Kjernen i «hva skrives ut» for objektsnutten. Prioritet: **perfekt**.
- **Kodekontrakt:** At en variabel holder en **referanse** til et objekt, ikke en kopi; `b = a` gir to navn på **samme** objekt (endring via `a` sees via `b`); objekter som holder referanser til andre objekter (`self._eier = person`); at en **ordbok/liste av objektreferanser** modellerer «en-til-mange» (`self._serier[navn] = serie_objekt`); rebinding (`x = nytt_objekt` flytter navnet, det gamle objektet lever videre hvis noe annet peker på det); spore hva som skrives ut etter en serie tilordninger/metodekall som endrer koblinger. Til sporing og begrep. Kort kontrast: tall og strenger oppfører seg «som verdier» i praksis (uforanderlige).
- **Oppgavesjangre:** B. Mønstereksempel (nyskrevet): «`a = Kurv(); b = a; a.legg_i("eple"); print(b.antall())` — hva skrives ut, og hvorfor?» (Fasit: `1`, fordi `a` og `b` er samme objekt.)
- **Typiske feil:** Tro at `b = a` lager en kopi (§5.2); ikke se at et objekt fortsatt lever etter en rebinding, eller motsatt; tro at endring via ett navn ikke sees via det andre; blande referanse (objekt) og verdi (tall/streng).
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 5.5: DRILL — Objekt-flervalg: referanser, `self`, scope og grensesnitt

- **id:** `in1000-5-5` · **number:** 5.5 · **estimatedMinutes:** 80 · **prerequisites:** `in1000-5-4` · **kapitteltype:** drill
- **description:** Full drill på Oppgave 2: én felles kodesnutt med to klasser, og flervalgsspørsmål om hva som skrives ut / hvilke påstander er sanne — referanser, `self`-fella, scope og grensesnitt.
- **Eksamensbelegg:** Sjanger B i ~hvert moderne sett (100 %), 2a–2d, ~8–9 p, flervalg (blankt = 0). Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** 1) les de to klassene nøye — noter hvilke instansvariabler som faktisk settes med `self._x` (og hvilke som feilaktig er lokale → `self`-fella); 2) tegn objektene og referansene mellom dem; 3) spor snutten linje for linje, oppdater referansene ved hver tilordning/`bytte`; 4) for hvert spørsmål: avgjør hva et navn peker på **akkurat da**; 5) grensesnitt-spørsmål: skill offentlige metoder fra underscore-variabler. **Fast fellekatalog:** `self`-fella (`hent_x()` gir startverdi eller feilmelding); to navn på samme objekt; rebinding som brekker/endrer koblinger; scope (lokal variabel endrer ikke instansvariabel); `_x` ikke del av grensesnittet. Gjennomgått case med margnotater. **Alltid krysse av** (blankt = 0).
- **Oppgavesjangre:** B (+ I-moment). 12–16 flervalgsoppgaver på eksamensnivå over roterende to-klasse-snutter, hver med fullstendig sporingsforklaring. Mønstereksempel: «Gitt klassene `Eier` og `Hund` der `Hund.__init__` skriver `alder = 0` (uten `self`): hva gir `min_hund.hent_alder()`?» (Fasit-idé: feilmelding, fordi `alder` er udefinert.)
- **Typiske feil:** Overse `self`-fella (§5.1); tro `b = a` er kopi (§5.2); miste tråden i rebinding; scope-forvirring (§5.12); tro underscore-variabler er del av grensesnittet (§5.11); la et flervalg stå blankt.
- **Quiz: 22 · Flashcards: 16**

---

### Del 6 — Stor klassemodellering *(prioritet: PERFEKT — Oppgave 4, ~50 % av eksamen)*

> **Dette er bokas tyngdepunkt.** Oppgave 4 alene er ~50 p (~halve eksamen) og har
> 100 % frekvens. Fire teorikapitler bygger malen stegvis — modelleringsmetoden,
> flere samarbeidende klasser med «en-til-mange», algoritme-metoder, og
> terminal-interaksjon — og kap. 6.5 er den fullt gjennomarbeidede mal-drillen i
> sensors korte stil. Domenet roterer (ukeplaner, hotell, garderobe,
> strømmetjeneste …), men den underliggende OO-øvelsen er identisk hvert år.

#### Kapittel 6.1: Fra spesifikasjon til klasser — modelleringsmetoden

- **id:** `in1000-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `in1000-5-3` · **kapitteltype:** teori
- **description:** Den systematiske veien fra en tekstlig/UML-spesifikasjon til et klasseoppsett: identifisér klassene, deres instansvariabler og metoder, og hvordan de forholder seg til hverandre.
- **Eksamensbelegg:** Modelleringssteget avgjør resten av Oppgave 4. Sensor gir delkarakter per deloppgave, og «egne rimelige forutsetninger» tillates ved underspesifikasjon (dokumentér i kommentar). Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift / `theorem`-idiom: klassemodellering-malen, steg 1–2):** 1) les spesifikasjonen; **hvert substantiv/«boks» blir en klasse**; 2) hver klasses egenskaper blir instansvariabler (`self._x`) satt i `__init__`; 3) hver «kan gjøre»-setning blir en metode; 4) skriv aksessor/mutator for variabler som trengs utenfra; 5) klasser i **egne filer**, importert med `from aktivitet import Aktivitet`; 6) dokumentér antakelser i kommentar. Vis hvordan man leser en liten spesifikasjon og setter opp skjelettet (klasser + signaturer) før man fyller inn.
- **Oppgavesjangre:** F (steg 1). Mønstereksempel (nyskrevet domene): «Et bibliotek har bøker (tittel, forfatter, utlånt/ikke) og en samling som holder alle bøkene. Sett opp klassene `Bok` og `Bibliotek` med instansvariabler og metodesignaturer — bare skjelettet.»
- **Typiske feil:** Slå sammen to «bokser» i én klasse (eller motsatt); glemme aksessor/mutator; ikke sette alle instansvariabler i `__init__`; ikke dokumentere en antakelse ved underspesifikasjon; legge alt i én fil uten å tenke ansvar.
- **Quiz: 16 · Flashcards: 24**

#### Kapittel 6.2: Flere samarbeidende klasser og «en-til-mange»

- **id:** `in1000-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** `in1000-6-1`, `in1000-5-4` · **kapitteltype:** teori
- **description:** Modellere «en-til-mange» med en **liste eller ordbok av objektreferanser**, og la metoder **delegere** til underobjektenes metoder — kjernen i den store oppgaven.
- **Eksamensbelegg:** Hver Oppgave 4 har minst én «en-til-mange» (en klasse holder mange av en annen) og metoder som delegerer (`for a in self._attraksjoner: a.skrivAttr()`). Filnavn som `serienavn+".txt"` og ordbok med serienavn → Serie-referanse er gjengangere (H2024). Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom: klassemodellering-malen, steg 3):** **Multiplisitet blir samling:** «en-til-mange» → `self._elementer = []` (liste) eller `self._elementer = {}` (ordbok, når man slår opp på en nøkkel som navn/ID); legge til (`self._elementer.append(obj)` / `self._elementer[navn] = obj`); slå opp (`self._elementer[navn]`, med `if navn in self._elementer`); **delegering** — en metode som løper over samlingen og kaller hvert underobjekts metode (`for e in self._elementer: e.skriv()` eller `for navn in self._elementer: self._elementer[navn].skriv()`); objekter som holder referanse til hverandre (`self._eier = person`). Til bruk.
- **Oppgavesjangre:** F (steg 2). Mønstereksempel: «Utvid `Bibliotek` til å holde bøkene i en ordbok fra tittel til `Bok`-objekt. Skriv `legg_til(self, bok)`, `finn(self, tittel)` og `skriv_alle(self)` som delegerer til hver boks utskrift.»
- **Typiske feil:** Lagre data i stedet for objektreferanser (miste tilgang til underobjektenes metoder); velge liste der oppslag på nøkkel er naturlig (eller motsatt); slå opp manglende nøkkel uten `if navn in ...` (`KeyError`); ikke delegere (duplisere underobjektets logikk i den ytre klassen).
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 6.3: Algoritme-metoder i klasser

- **id:** `in1000-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `in1000-6-2` · **kapitteltype:** teori
- **description:** De én-to «smarte» metodene på toppen av modellen: finn den beste/travleste, tell, unngå duplikater, beregn match — de samme løkkemønstrene fra Del 3, nå inne i klassemetoder.
- **Eksamensbelegg:** Enkel algoritmikk i klasser 83 % («finn den travleste dagen», «beste destinasjon», søk med prioritet, H2014 `settInnLedig`). Er ofte den høyest vektede deloppgaven i Oppgave 4. Prioritet: **perfekt**.
- **Kodekontrakt:** Gjenbruk av mønstrene fra Del 3, nå over `self._elementer`: **finn beste** (`beste = None; besteAntall = 0; for e in ...: if e.antall() > besteAntall: beste = e; besteAntall = e.antall()`); **tell/flagg** over samlingen; **unngå duplikater** (hold styr i en hjelpeordbok/-liste); **beregn match** (tell positive minus negative treff); **søk med prioritert rekkefølge + `ferdig`-flagg** (`settInnLedig`-mønsteret: gå gjennom mulige plasser i prioritert orden, sett inn i første ledige, sett `ferdig = True`). Til bruk. `warning`: eksplisitte løkker, ikke `max(..., key=...)`/`sorted`.
- **Oppgavesjangre:** F (algoritme-metode). Mønstereksempel: «`Bibliotek` skal ha `mest_produktive_forfatter(self)` som returnerer forfatteren med flest bøker. Bygg en teller-ordbok over forfattere og finn den med størst verdi med en eksplisitt finn-beste-løkke.»
- **Typiske feil:** Feil startverdi for «beste» (glemme `None`/0-tilfellet, tom samling); oppdatere `beste` uten å oppdatere `besteAntall` (eller motsatt); glemme `ferdig`-flagget i prioritert søk; bruke snarveier fasiten ikke belønner; ikke håndtere «ingen funnet».
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 6.4: Terminal-interaksjon i klasser

- **id:** `in1000-6-4` · **number:** 6.4 · **estimatedMinutes:** 45 · **prerequisites:** `in1000-6-2` · **kapitteltype:** teori
- **description:** Lese fra brukeren med `input()` og løkke som spør på nytt til en gyldig verdi gis — sjanger H, som oftest ligger inne i den store oppgaven.
- **Eksamensbelegg:** Terminal-interaksjon 50 % (H2020 3b `beOmNavn`, H2023 3c `velg`, H2024 4e `ny_abonnent`), 5–7 p, nesten alltid en deloppgave i Oppgave 4. Prioritet: **kunne**.
- **Kodekontrakt:** `input(melding)` (returnerer alltid **streng**); `int(input(...))` for tall; **input-løkke til gyldig verdi** (`theorem`-idiom: `svar = input(...); while svar not in gyldige: svar = input("prøv igjen: ")`); validere mot en liste/ordbok eller mot et indeksområde (`while indeks < 0 or indeks >= len(liste):`); at man **må konvertere** input før tallbruk (§5.4-feil). Til bruk.
- **Oppgavesjangre:** H. Mønstereksempel: «Skriv en metode `velg_bok(self)` som skriver ut alle titlene, ber brukeren skrive en tittel, og gjentar spørsmålet til tittelen finnes i samlingen — returnér så `Bok`-objektet.»
- **Typiske feil:** Spørre bare **én** gang i stedet for i `while`-løkke til gyldig verdi (§5.9); glemme `int()`-konvertering av tall-input (§5.4); feil valideringsbetingelse (slipper gjennom ugyldige verdier / avviser gyldige); indeks utenfor rekkevidde.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 6.5: DRILL — Full klassemodellering fra spesifikasjon

- **id:** `in1000-6-5` · **number:** 6.5 · **estimatedMinutes:** 90 · **prerequisites:** `in1000-6-4`, `in1000-7-1` · **kapitteltype:** drill
- **description:** Den fullt gjennomarbeidede malen for Oppgave 4: fra spesifikasjon til 3–5 samarbeidende klasser med konstruktør, aksessor/mutator, «en-til-mange», filinnlesing, algoritme-metode, `__str__` og input — i sensors korte, eksplisitte stil, med sensor-kommentarer.
- **Eksamensbelegg:** Sjanger F (100 %, 47–55 p), delt i ~6–7 deloppgaver à 3–12 p. **Halve eksamen.** Domenene roterer (familiens ukeplaner, fornøyelsespark, undervisningsadministrasjon, hotell, garderobe, strømmetjeneste). Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift — klassemodellering-malen samlet):** 1) identifisér klassene (én per «boks»); 2) konstruktør setter alle instansvariabler med `self._x`; 3) aksessor/mutator; 4) «en-til-mange» som liste/ordbok av objektreferanser; 5) filinnlesing (fra Del 7) som fyller modellen; 6) metoder som delegerer til underobjektenes metoder; 7) én-to algoritme-metoder (finn beste / tell / match); 8) `__str__`/skriv-metoder; 9) evt. input-metode; 10) klasser i egne filer. **Delkarakter per deloppgave** — vis at man kan bruke en metode fra oppgaveteksten man ikke selv skrev. Gjennomarbeidet eksamenscase (ett fullstendig domene, alle deloppgaver) med **margnotater om hva som gir uttelling ved hvert steg** og at riktig struktur belønnes selv med småfeil.
- **Oppgavesjangre:** F (+ H, +fil). 6–10 modelleringsoppgaver på eksamensnivå med roterende domener, hver flerdelt (a: klasser/konstruktør, b: en-til-mange, c: filinnlesing, d: algoritme-metode, e: `__str__`/input), alle med `solution` + `hints` og sensor-kommentarer. Mønstereksempel: en komplett «treningssenter»-spesifikasjon (medlemmer, økter, sal) modellert steg for steg.
- **Typiske feil:** `self`-fella i konstruktøren (§5.1); direkte `obj._x`-tilgang utenfra (§5.11); lagre data i stedet for objektreferanser; glemme delegering; feil samling for multiplisitet; stå fast i stedet for å hoppe videre og bruke oppgitte metoder; snarveier i algoritme-metoden.
- **Quiz: 18 · Flashcards: 14**

---

### Del 7 — Filbehandling *(prioritet: PERFEKT — del av Oppgave 4)*

#### Kapittel 7.1: Filinnlesing linje for linje

- **id:** `in1000-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `in1000-3-3` · **kapitteltype:** teori
- **description:** Lese en tekstfil linje for linje, fjerne linjeskift, splitte på felt og konvertere til tall — nesten alltid steget som fyller klassemodellen med data.
- **Eksamensbelegg:** Filbehandling 83 % (nesten alltid del av Oppgave 4). Det faste mønsteret: `open`, `readline`, `rstrip`, løkk til tom streng, `split`, `int`. Filnavnet er ofte `navn+".txt"`. Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom: filinnlesing-løkka):** `fil = open(filnavn)`; les linje for linje med `linje = fil.readline()` og `while linje != "":` … `linje = fil.readline()` (løkk til tom streng); `linje.rstrip()` (fjern linjeskift); `linje.split()` eller `.split(sep)` på ordadskilte/tegnadskilte felt; `int(felt)`/`float(felt)`-konvertering (data leses som **streng**); bygge filnavn (`navn + ".txt"`); `fil.close()`; alternativt `for linje in fil:`. Til bruk. `warning`: glemt `.rstrip()` gir linjeskift på siste felt; glemt `int()` gir streng der tall trengs.
- **Oppgavesjangre:** F (filinnlesing-steget) + forkunnskap til 7.2. Mønstereksempel (nyskrevet): «Filen `medlemmer.txt` har linjer `navn alder`. Skriv `les_medlemmer(filnavn)` som leser fila linje for linje og returnerer en liste av `Medlem`-objekter med alderen konvertert til heltall.»
- **Typiske feil:** Glemme `.rstrip()` (§5.8); feil `.split()`-separator (§5.8); glemme `int()`/`float()`-konvertering (§5.4); ikke terminere løkka riktig (aldri tom streng); lese heltall som streng og sammenligne feil.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 7.2: DRILL — Filinnlesing i klassemodellering

- **id:** `in1000-7-2` · **number:** 7.2 · **estimatedMinutes:** 75 · **prerequisites:** `in1000-7-1`, `in1000-6-2` · **kapitteltype:** drill
- **description:** Full drill på filinnlesing som del av den store oppgaven: les en fil og bygg opp en samling av objektreferanser (liste/ordbok), med roterende dataformat.
- **Eksamensbelegg:** Filinnlesing (83 %) er nesten alltid en deloppgave i Oppgave 4 (~5–10 p), typisk «les fila og opprett objektene». Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** 1) `fil = open(filnavn)`; 2) evt. les/hopp over en header-linje; 3) `linje = fil.readline()` + `while linje != "":`; 4) `felt = linje.rstrip().split(sep)`; 5) konvertér tall med `int()`/`float()`; 6) opprett et objekt og legg det i samlingen (`liste.append(obj)` / `ordbok[navn] = obj`); 7) `linje = fil.readline()` nederst i løkka; 8) `fil.close()`. Gjennomregnet case med margnotater (riktig løkkestruktur + riktig separator/`rstrip` belønnes). 8–12 oppgaver på eksamensnivå, roterende data (medlemsregister, varelager, timeplan, resultatliste), separator og evt. header varierer.
- **Oppgavesjangre:** F (fil-del). Mønstereksempel: «Filen `varer.txt` har linjer `varenavn;antall;pris`. Les fila og bygg en ordbok fra varenavn til `Vare`-objekt, med antall og pris konvertert til tall.»
- **Typiske feil:** §5.8 (`rstrip`/separator/header), §5.4 (glemt konvertering), løkke som ikke termineres (glemt `readline` nederst), legge inn rådata i stedet for objektreferanser.
- **Quiz: 16 · Flashcards: 14**

---

### Del 8 — Nøstede strukturer *(prioritet: KUNNE — Oppgave 5)*

#### Kapittel 8.1: Nøstede lister og ordbøker

- **id:** `in1000-8-1` · **number:** 8.1 · **estimatedMinutes:** 50 · **prerequisites:** `in1000-3-2` · **kapitteltype:** teori
- **description:** Lister av lister og ordbøker med sammensatte verdier: to nivåers indeksering og to nivåers løkke — datastrukturen Oppgave 5 bygger på.
- **Eksamensbelegg:** Nøstede strukturer 67 % (Oppg. 5), 4–5 p per deloppgave (H2024 5a/5b, H2022 5b, H2023 5, prøveeksamen `sjekk_reise`). Nøstet akkumulering er også kortsvarsfelle (Oppg. 1). Prioritet: **kunne**.
- **Kodekontrakt:** Nøstet liste `y[i][j]`; nøstet ordbok `d[ytre][indre]` og oppbygging (`d[ytre] = {}` før innsetting); to nivåers løkke (`for indre_liste in ytre: for e in indre_liste:`); løkke over nøstet ordbok (`for ytre in d: for indre in d[ytre]:`); oppslag i nøstet struktur med `if`-sjekk på begge nivåer; flagg/akkumulator over to nivåer. Til bruk og sporing.
- **Oppgavesjangre:** A (sporing) + G-grunnlag. Mønstereksempel: «`d = {"A": {"x": 1}, "B": {"x": 2, "y": 3}}` — hva skriver `for ytre in d: for indre in d[ytre]: print(ytre, indre, d[ytre][indre])` ut?»
- **Typiske feil:** Glemme å opprette den indre strukturen (`d[ytre] = {}`) før innsetting; blande de to indeks-nivåene (`y[i][j]` vs. `y[j][i]`); slå opp en manglende indre nøkkel uten sjekk; feil løkkegrenser på to nivåer.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 8.2: DRILL — Funksjoner over nøstede strukturer

- **id:** `in1000-8-2` · **number:** 8.2 · **estimatedMinutes:** 75 · **prerequisites:** `in1000-8-1`, `in1000-2-1` · **kapitteltype:** drill
- **description:** Full drill på Oppgave 5: litt tyngre funksjoner over nøstede lister/ordbøker, ofte med to nivåers løkke og et flagg/akkumulator, av og til byggende på en tidligere funksjon.
- **Eksamensbelegg:** Sjanger G (Oppg. 5), 67 %, 4–5 p per deloppgave (`felles`, `adskilt`, `lagSynonymordbok`, `er_blokkert`/`kan_spilles`, `sjekk_reise`). Prioritet: **kunne**.
- **Kodekontrakt (løsningsoppskrift):** 1) avgjør de to nivåene (ytre/indre); 2) velg mønster: to nivåers løkke med teller/akkumulator, flagg + tidlig retur over nøstet struktur, eller bygg en ny nøstet struktur; 3) håndter kant-tilfeller (tom struktur, ett element, homonymer/duplikater); 4) evt. gjenbruk en tidligere funksjon som hjelpemetode. Gjennomregnet case med margnotater (riktig todelt løkkestruktur belønnes selv med indeksfeil). 10–14 oppgaver på eksamensnivå, roterende (nøstet liste, nøstet ordbok, oppslag i nøstet regel-struktur), alle med `solution` + `hints`. `warning`: grunnform, ikke snarveier.
- **Oppgavesjangre:** G (+ I-moment). Mønstereksempel: «Skriv `finnes_flere_ganger(nøstet_liste)` som returnerer alle tall som forekommer i minst to av de indre listene. Bruk en teller-ordbok over hvilke indre lister hvert tall opptrer i.»
- **Typiske feil:** Blande de to nivåene; for tidlig `return` i en «alle/finnes»-sjekk (§5.7); glemme å opprette indre struktur (§8.1); ikke håndtere tom/ett-element-struktur (§5.6); snarveier.
- **Quiz: 18 · Flashcards: 14**

---

### Del 9 — Eksamenstrening

> IN1000 har **kun avsluttende eksamen** (ingen midtveis), så Del 9 er tre
> komplette avsluttende øvingssett etter den faste 5-oppgave-malen — hver med
> **klassemodelleringen (Oppgave 4) som ~50 % av poengene**. Domenet roterer
> mellom settene; sett 3 har et litt tyngre toppsjikt.

#### Kapittel 9.1: Avsluttende øvingseksamen 1 — bibliotek-innpakning

- **id:** `in1000-9-1` · **number:** 9.1 · **estimatedMinutes:** 240 · **prerequisites:** Del 1–8 · **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers avsluttende sett etter 5-oppgave-malen (100 p), med bibliotek/utlån som domene for den store klassemodelleringen.
- **Eksamensbelegg/miks:** Speiler et typisk moderne sett (100 p, 4 t): **Oppgave 1** (~8 p) 5–7 kortsvar kodeforståelse (A — int-vs-str, løkke, indeksering, `if/elif/else`, ordbok-mutasjon, auto-rettet) → **Oppgave 2** (~9 p) 2a–2d flervalg om én to-klasse-snutt (B — referanser, `self`-fella, scope, grensesnitt) → **Oppgave 3** (~28 p) 3–4 små funksjoner over liste/ordbok/streng (C/D/E) → **Oppgave 4** (~46 p) stor klassemodellering «bibliotek»: 3–5 samarbeidende klasser, konstruktør med `self._x`, aksessor/mutator, ordbok/liste for «en-til-mange», **filinnlesing**, en algoritme-metode og `__str__` (F, +fil) → **Oppgave 5** (~9 p) 2 funksjoner over nøstede strukturer (G). Alle oppgaver nyskrevne. Løsningsforslag som A-besvarelse i `collapsible` per oppgave (kort, eksplisitt grunnkonstruksjon-kode), med `tip` om delpoeng/vekting og hva som gir uttelling ved delvis riktig kode. `tip` om tidsbudsjett (skallet Oppg. 1+2 ~35 min, Oppg. 3 ~55 min, **Oppg. 4 ~100 min**, Oppg. 5 ~25 min, kontroll ~25 min).
- **Kodekontrakt:** Dekker sjangrene A, B, C, D, E, F, G (+fil).
- **Oppgavesjangre:** A, B, C, D, E, F, G.
- **Quiz: 8 · Flashcards: 0**

#### Kapittel 9.2: Avsluttende øvingseksamen 2 — treningssenter-innpakning

- **id:** `in1000-9-2` · **number:** 9.2 · **estimatedMinutes:** 240 · **prerequisites:** `in1000-9-1` · **kapitteltype:** øvingseksamen
- **description:** Komplett avsluttende sett med treningssenter som modelleringsdomene, og terminal-interaksjon (input-løkke) som deloppgave i den store oppgaven.
- **Eksamensbelegg/miks:** Samme 5-oppgave-mal (100 p, 4 t), nytt domene og litt annen deloppgave-vekt: **Oppgave 1** (~8 p) kodesporing (A, inkl. nøstet akkumulering og negativ indeksering) → **Oppgave 2** (~8 p) objekt-flervalg (B, tung på referansesemantikk/rebinding) → **Oppgave 3** (~30 p) 4 funksjoner (C/D/E, inkl. en teller-ordbok og en streng-funksjon) → **Oppgave 4** (~46 p) «treningssenter»: medlemmer/økter/sal med filinnlesing, «en-til-mange» som ordbok, en **input-metode** (H — velg gyldig økt), algoritme-metode (travleste dag) og `__str__` (F, +fil, +H) → **Oppgave 5** (~8 p) 2 nøstede-struktur-funksjoner (G). Alle nyskrevne. Løsningsforslag som A-besvarelse med vektings-`tip` og delpoeng-signaler.
- **Kodekontrakt:** Dekker A, B, C, D, E, F, G, H (+fil).
- **Oppgavesjangre:** A, B, C, D, E, F, G, H.
- **Quiz: 8 · Flashcards: 0**

#### Kapittel 9.3: Avsluttende øvingseksamen 3 — strømmetjeneste-innpakning (tyngre)

- **id:** `in1000-9-3` · **number:** 9.3 · **estimatedMinutes:** 240 · **prerequisites:** `in1000-9-2` · **kapitteltype:** øvingseksamen
- **description:** Komplett avsluttende sett med et tyngre toppsjikt: strømmetjeneste-modellering med nøstet ordbok, «finn feilen» + moteksempel og grensesnitt-teori.
- **Eksamensbelegg/miks:** Samme 5-oppgave-mal (100 p, 4 t), tyngste variant (H2023/H2024-nivå): **Oppgave 1** (~8 p) kodesporing (A) med en **«finn alle feilene»-flervalg** (I) → **Oppgave 2** (~9 p) objekt-flervalg (B) inkl. et **grensesnitt-spørsmål** (hva er/ikke del av grensesnittet) → **Oppgave 3** (~28 p) 4 funksjoner (C/D/E) → **Oppgave 4** (~47 p) «strømmetjeneste»: brukere/serier/episoder med **nøstet ordbok** (serienavn → Serie, med episoder), filinnlesing (`serienavn+".txt"`), «beste/mest sette serie»-algoritme, `__str__` og en input-abonnent-metode (F, +fil, +H) → **Oppgave 5** (~8 p) 2 funksjoner over nøstede ordbøker inkl. et **moteksempel** til en logisk feil (G, +I). Siste deloppgave krever grensesnitt-teori. Alle nyskrevne. Løsningsforslag som A-besvarelse med vektings-`tip`, delpoeng-signaler og konkret moteksempel der sjanger I inngår.
- **Kodekontrakt:** Dekker A, B, C, D, E, F, G, H, I (+fil, +grensesnitt) — supplerer 9.1/9.2 slik at de tre settene sammen dekker alle sjangre A–I minst én gang.
- **Oppgavesjangre:** A, B, C, D, E, F, G, H, I.
- **Quiz: 8 · Flashcards: 0**

---

## 5. Summeringskontroll (quiz/flashcards) — AUTORITATIV

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 12 | 16 |
| 1 | 1.1–1.3 | 22+20+24 = **66** | 24+20+20 = **64** |
| 2 | 2.1–2.2 | 20+18 = **38** | 22+18 = **40** |
| 3 | 3.1–3.4 | 22+22+20+24 = **88** | 24+24+22+14 = **84** |
| 4 | 4.1–4.2 | 28+14 = **42** | 16+14 = **30** |
| 5 | 5.1–5.5 | 20+18+14+20+22 = **94** | 24+24+14+24+16 = **102** |
| 6 | 6.1–6.5 | 16+18+16+14+18 = **82** | 24+24+20+14+14 = **96** |
| 7 | 7.1–7.2 | 18+16 = **34** | 24+14 = **38** |
| 8 | 8.1–8.2 | 18+18 = **36** | 24+14 = **38** |
| 9 | 9.1–9.3 | 8+8+8 = **24** | 0+0+0 = **0** |
| **Sum** | **29 kap.** | **516 ≥ 500 ✓** | **508 ≥ 500 ✓** |

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens og eksamensform: **quiz** vektes mot de to
flervalgs-/kortsvarssjangrene på eksamen (Oppg. 1 kodesporing + Oppg. 2
objekt-begreps-MC), derfor bærer Del 1–5 mest quiz og drillkapitlene 4.1 (28) og
5.5 (22) er quiz-tunge. **Flashcards** vektes mot API-/konstruksjons- og
begrepsdefinisjonene; Del 5 og 6 (klasser/modellering) bærer mest, siden det er
der begrepsapparatet ligger. Tetthetene ligger **nær gulvet (508/516)** fordi
IN1000 er det mildeste faget med moderat, smalt begrepsapparat — jf. README-
lærdommen om at rene regnefag med få begreper kan ligge nær 500.

---

## 6. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–8 → 32 prøver)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med løsningsforslag (kort,
eksplisitt grunnkonstruksjon-kode) og poengfordeling. Prøvekapitler bygges som
`in1000-<del>-prove` (chapterNumber `<del>.P`) etter plattformmønsteret, eller som
egne exercise-seksjoner i delens siste kapittel.

**Prøve-kvote Del 1:** 4 prøver (variabler, betingelser og løkker)
1. Prøve 1.A (20 min): Variabler og datatyper — 8 kodesporing med int-vs-str og typekonvertering (sjanger A).
2. Prøve 1.B (20 min): Betingelser — 8 `if/elif/else`- og boolsk-sporing (A).
3. Prøve 1.C (25 min): Løkker — 8 for/while-sporing inkl. nøstet akkumulering og muteringsrekkefølge (A).
4. Prøve 1.D (30 min): Blandet — 12 kortsvar på tvers av hele delen (A).

**Prøve-kvote Del 2:** 4 prøver (funksjoner)
1. Prøve 2.A (20 min): Definér + kall — 6 sporingsspørsmål om `return`/`None`/flere returverdier (A).
2. Prøve 2.B (30 min): Skriv funksjon — 3 små funksjoner med flagg + tidlig retur (sjanger C).
3. Prøve 2.C (20 min): Scope — 6 sporingsspørsmål om lokal vs. ytre variabel (A).
4. Prøve 2.D (30 min): Integrert — 2 funksjoner + 4 sporingsspørsmål på tvers (A + C).

**Prøve-kvote Del 3:** 4 prøver (lister, ordbøker og strenger)
1. Prøve 3.A (30 min): Lister — skriv 3 funksjoner (teller/flagg/bygg ny liste) (sjanger C).
2. Prøve 3.B (30 min): Ordbøker — teller- og grupperings-idiom, finn-flest (sjanger D).
3. Prøve 3.C (30 min): Strenger — tegn-for-tegn-bygging, `.split()`/`.rstrip()` (sjanger E).
4. Prøve 3.D (35 min): Full Oppgave-3-oppgave på eksamensnivå — 4 funksjoner, roterende datatyper (C/D/E).

**Prøve-kvote Del 4:** 4 prøver (kodesporing og kodeanalyse)
1. Prøve 4.A (25 min): Kodesporing løkker/betingelser — 10 kortsvar (A).
2. Prøve 4.B (25 min): Kodesporing lister/ordbøker/strenger — 10 kortsvar inkl. ordbok-mutasjon (A).
3. Prøve 4.C (25 min): Blandet auto-rettet — 12 kortsvar, eksakt verdi/type (A).
4. Prøve 4.D (25 min): «Finn feilen» + moteksempel — 4 program med logisk feil, gi konkret moteksempel (sjanger I).

**Prøve-kvote Del 5:** 4 prøver (klasser, objekter og referanser)
1. Prøve 5.A (30 min): Klasse fra bunnen — `__init__` med `self._x` + aksessor/mutator (sjanger F-del/B).
2. Prøve 5.B (30 min): `__str__` + delegering — pen utskrift av objekt med underobjekter (F-del).
3. Prøve 5.C (30 min): Referansesemantikk — 10 flervalg om samme-objekt/rebinding (sjanger B).
4. Prøve 5.D (30 min): Full objekt-flervalg-oppgave — 2a–2d over én to-klasse-snutt (`self`/scope/grensesnitt) (B).

**Prøve-kvote Del 6:** 4 prøver (stor klassemodellering)
1. Prøve 6.A (35 min): Modelleringssteget — sett opp 3 klasser + signaturer fra en spesifikasjon (sjanger F, steg 1).
2. Prøve 6.B (40 min): Samarbeidende klasser — «en-til-mange» som ordbok/liste + delegering (F, steg 2).
3. Prøve 6.C (40 min): Algoritme- og input-metode — finn-beste + input-løkke i en klasse (F + H).
4. Prøve 6.D (50 min): Full Oppgave-4-oppgave på eksamensnivå — komplett flerdelt modellering (F, +fil).

**Prøve-kvote Del 7:** 4 prøver (filbehandling)
1. Prøve 7.A (25 min): Filinnlesing-løkka — les linje for linje, `rstrip`/`split`/`int` (sjanger F/fil).
2. Prøve 7.B (30 min): Fil → liste av objekter — bygg samling fra fil (F/fil).
3. Prøve 7.C (30 min): Fil → ordbok av objekter — oppslag på nøkkel, filnavn `navn+".txt"` (F/fil).
4. Prøve 7.D (35 min): Full fil-i-modellering-oppgave — les fil og fyll en to-klasse-modell (F, +fil).

**Prøve-kvote Del 8:** 4 prøver (nøstede strukturer)
1. Prøve 8.A (25 min): Nøstet sporing — 8 kortsvar om nøstet liste/ordbok (sjanger A).
2. Prøve 8.B (30 min): Funksjon over nøstet liste — to nivåers løkke med flagg/teller (sjanger G).
3. Prøve 8.C (30 min): Funksjon over nøstet ordbok — oppslag/bygg nøstet struktur (G).
4. Prøve 8.D (35 min): Full Oppgave-5-oppgave på eksamensnivå — 2 nøstede-struktur-funksjoner (G).

### Øvingseksamener (3 komplette sett — se kap. 9.1–9.3)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Avsluttende 1 (kap. 9.1) | Typisk moderne sett (100 p) | 5-oppgave-mal, bibliotek-modellering; A/B/C/D/E/F/G, Oppg. 4 ~46 % |
| Avsluttende 2 (kap. 9.2) | Moderne sett med input-fokus | 5-oppgave-mal, treningssenter-modellering; A–H, input-løkke i Oppg. 4 |
| Avsluttende 3 (kap. 9.3) | Tyngre sett (H2023/H2024-nivå) | 5-oppgave-mal, strømmetjeneste (nøstet ordbok); A–I, «finn feilen» + grensesnitt-teori |

Til sammen dekker de tre settene samtlige 9 sjangre (A–I) minst én gang. **Ingen
midtveis-simulering** — IN1000 har kun avsluttende eksamen.

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — den ene avsluttende 4-timers-eksamenen (ingen
   midtveis), den faste 5-oppgave-strukturen med poeng/andel, og prognosen (fra
   kap. 0.1) — med klassemodelleringen (Oppg. 4) som ~50 %.
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer:
   **perfekt** (klassemodellering Del 6, funksjonsskriving Del 3, klasser/`self`
   Del 5, kodesporing Del 4, filbehandling Del 7), **kunne** (nøstede strukturer
   Del 8, terminal-interaksjon, `__str__`), **kjenne** (sjanger I «finn feilen»,
   grensesnitt-teori, `randint`/`assert` — og at arv/NumPy/rekursjon IKKE testes).
3. **Sjangerguiden** — de 9 oppgavetypene A–I med løsningsoppskriftene fra
   drillkapitlene (3.4, 4.1, 5.5, 6.5, 7.2, 8.2) i kortform.
4. **Sensorreglene** — metareglene (egne forutsetninger dokumenteres i kommentar;
   egne hjelpemetoder tillates; **delkarakter per deloppgave** — bruk oppgitte
   metoder, stå aldri fast; Oppg. 1 auto-rettet → eksakt verdi/type/ingen pynt;
   alltid krysse av på flervalg; unngå æ/ø/å i koden; **enkel eksplisitt
   grunnkonstruksjon-stil, ingen snarveier**) + delvis-riktig-poenggivingen
   (riktig struktur/idé > perfekt detalj).
5. **Feilkatalogen** — de 12 typiske feilene (§5 i analysen) samlet, hver med
   henvisning til kapitlet som forebygger den: glemt `self`, referanse vs. kopi,
   int-vs-str, glemt `int()`, av-én/løkkegrenser, kant-tilfeller, for tidlig
   `return`, glemt `.rstrip()`/separator, input-løkke, sentinel-kollisjon, direkte
   `_x`-tilgang, scope-forvirring.
6. **Kodemønster-arket** — alle idiomene fra kodekontraktene på ett oppslag:
   teller/akkumulator, flagg + tidlig retur, ordbok som teller/gruppering,
   finn-beste, konstruktør med `self._x`, aksessor/mutator, delegering,
   filinnlesing-løkka, input-løkke, `__str__` — som studentens
   ferdighetssjekkliste.
7. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant):
   Del 1–2 (fundament) → Del 3 (funksjonsskriving, Oppg. 3) → Del 4 (kodesporing,
   Oppg. 1) → Del 5 (klasser/`self`, Oppg. 2) → **Del 6 (klassemodellering,
   Oppg. 4 — mest tid her, ~halve eksamen)** → Del 7 (fil) → Del 8 (nøstet,
   Oppg. 5) → prøvene underveis → de tre avsluttende settene de siste ukene under
   tidspress (240 min), med minst 90 minutter viet Oppgave 4 hver gang.

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `in1000` med alle 29 kapitler
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/
   prerequisites/linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra §2-tabellen
   (obligatorisk — ellers viser bokforsiden «Seksjon N»).
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–I og frekvenstallene resten
   refererer til.
3. **Fundamentet i avhengighetsrekkefølge**: Del 1 (variabler/betingelser/løkker —
   kreves av alt) → Del 2 (funksjoner) → Del 3 (lister/ordbøker/strenger; krever
   Del 1–2) → Del 4 (kodesporing; krever Del 3) → Del 5 (klasser/`self`; krever
   Del 2).
4. **Tyngdepunktet**: Del 6 (klassemodellering; krever Del 5 + kap. 7.1) og Del 7
   (filbehandling; krever kap. 3.3) — merk at kap. 6.5 forutsetter kap. 7.1
   (filinnlesing), så Del 7.1 bygges før 6.5. Deretter Del 8 (nøstet; krever Del 3).
5. Del 9 (de tre avsluttende settene til slutt — de gjenbruker alle sjangrene A–I).
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; prøvene (§6) legges i respektive delers
   prøvekapittel/exercise-seksjoner.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **Grunnkonstruksjon-stil**: all eksempel-/fasitkode er kort og eksplisitt —
  kun `for`/`while`, `if/elif/else`, funksjoner, lister, ordbøker, klasser; **ingen
  list comprehensions, `set()`, `Counter`, `sum()`, `max(...,key=...)`, typehint**.
  Hvert funksjonsskrivingskapittel (Del 3/6/8) har en `warning` om at snarveien
  finnes, men grunnformen belønnes.
- [ ] **`self`- og innkapslingskonsistens**: alle instansvariabler settes med
  `self._x`; utenfra brukes aksessor/mutator, aldri `obj._x`; `self`-fella har
  egen `warning` (kap. 5.1/5.4) og plantes i objekt-flervalg-drillen (5.5).
- [ ] **Ingen utenfor-pensum-stoff i drill**: tekstsøk over alle in1000-filer —
  ingen arv/`super()`/polymorfisme, NumPy/matplotlib, rekursjon eller lenkede
  strukturer i fasitkode; kun kort **kjenne**-omtale (Del 0, kap. 5.1).
- [ ] **Auto-rettet nøyaktighet**: alle kodesporingseksempler/-quiz (sjanger A)
  angir utskrift **eksakt** som terminalen (mellomrom mellom komma-argumenter,
  hakeparenteser, riktig type, ingen pynt); ingen æ/ø/å i selve koden.
- [ ] **API- og konstruksjonsliste per delkapittel**: hvert delkapittel som bruker
  Python-konstruksjoner har `collapsible` «API- og konstruksjonsliste» rett etter
  Forkunnskaper, som forklarer ALLE konstruksjoner brukt i delkapitlet (per
  delkapittel, ikke arv).
- [ ] **Delvis-riktig-poenggiving i løsningsforslag**: alle løsningsforslag (drill
  + øvingseksamener) markerer hva som gir uttelling steg for steg, at riktig
  struktur/idé belønnes selv med indeksfeil, og at deloppgaver løses uavhengig
  (bruk oppgitte metoder, stå aldri fast).
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
  fra dette skjelettet), Typiske feil-`warning`, 2–4 eksempler (siste på
  eksamensnivå), 6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`;
  drillkapitler har løsningsoppskrift + sensor-kommentert case + 8–16 oppgaver.
- [ ] **Klassemodelleringens tyngde**: Del 6 er bokas største del; kap. 6.5 har en
  komplett, gjennomarbeidet Oppgave-4-mal med alle steg (konstruktør, aksessor/
  mutator, en-til-mange, filinnlesing, algoritme-metode, `__str__`, input) og
  sensor-margnotater.
- [ ] **Quiz-sum ≥ 516 og flashcard-sum ≥ 508** per kvotetabellen (§5); quiz
  kalibrert som kodesporing (Oppg. 1) + objekt-begreps-MC (Oppg. 2), `options[0]` =
  riktig svar; **ingen midtveis-MC-kalibrering** (IN1000 har ingen midtveis).
- [ ] **Prøver**: 4 per temadel 1–8 (32 stk) + 3 avsluttende øvingseksamener (kap.
  9.1–9.3) som sammen dekker sjangrene A–I.
- [ ] **Opphavsrett**: ALLE oppgaver og kodeeksempler nyskrevne — egne tall, egne
  variabelnavn, egne domener (ikke bibliotek/treningssenter/strømmetjeneste
  ordrett fra reelle sett dersom de kolliderer — varier); kodemønstrene er standard
  Python-idiomer, men ingen oppgavetekster/fasiter fra reelle sett gjengis.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
  (200 + innhold), jf. lærdommen om `getChapterMeta`.
