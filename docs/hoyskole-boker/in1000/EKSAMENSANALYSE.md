# Eksamensanalyse: IN1000 Introduksjon til objektorientert programmering (UiO)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på UiO-arkivet 2014–2024:
> 8 avsluttende oppgavesett (H2014, H2015, H2017, H2018, H2020, H2022, H2023, H2024),
> 3 fulle løsningsforslag (H2014, H2015, H2018) og 4 prøveeksamener med fasit
> (2016, 2017, 2020, 2022) — 27 filer totalt.
> Lesestrategi som avtalt: løsningsforslagene og de siste ~8 årenes sett (2018–2024)
> er gjennomgått grundig; eldre sett (2014–2017) er skummet for form- og temaregistrering.
> **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster
> eller fasit. Kodemønstrene som beskrives er standard Python-idiomer, ikke opphavsrettsbeskyttet tekst.
> Analysen er kvantitativ der kildene tillater det.
>
> **Progresjon fra IN1900 og til IN1010:** IN1000 er UiOs store innføringsemne i
> objektorientert programmering (Python) og forgjengeren til **IN1010** (samme OO-tenkning
> i Java). Emnet ligger «ved siden av» **IN1900** (Python for vitenskapelige anvendelser):
> begge er Python-intro og deler kjernen kodesporing, løkker, funksjoner, lister/ordbøker,
> strenger og filbehandling — men IN1900 dreier mot numerikk (NumPy, plotting, ODE-løsere,
> rekker), mens IN1000 dreier mot **ren objektorientering**: referansesemantikk, `self`,
> flere samarbeidende klasser modellert fra en spesifikasjon. IN1000 er faglig **enklere og
> smalere** enn både IN1900 og IN1010: ingen NumPy, ingen matematisk tyngde, ingen arv/
> lenkede strukturer/tråder. Den store klassemodelleringsoppgaven i IN1000 er den direkte
> forløperen til IN1010s «tegn + programmér klassehierarki», og IN1000s `__str__` blir
> IN1010s `toString()`. Se seksjon 7 for full progresjonsanalyse.

---

## 1. Eksamensform og utvikling

### Dagens form (2018–2024)

IN1000 vurderes med **én avsluttende skriftlig digital eksamen i Inspera**, **4 timer**.
Karakterskala **A–F**. Til forskjell fra IN1900 og IN1010 har IN1000 **ingen midtveiseksamen**
som teller på karakteren — hele karakteren avgjøres av det ene 4-timers-settet. Obligatoriske
innleveringer må være godkjent for å gå opp. All kode i oppgavetekstene er Python 3.

| Trekk | Detalj |
|---|---|
| **Varighet** | 4 timer (H2022 kl. 15:00–19:00; H2023/H2024 kl. 09:00–13:00) |
| **Hjelpemidler** | **Alle trykte og skrevne, ingen elektroniske** |
| **Total** | **100 poeng**; poengfordelingen signaliserer vekting |
| **Språk** | Kan veksles mellom bokmål, nynorsk og engelsk øverst i Inspera |
| **Vurdering** | A–F; obligatoriske innleveringer må være godkjent |

**Fast makrostruktur (H2018–H2024), delt i fem «Deler»:**

| Del / Oppgave | Innhold | Poeng (typisk) | Andel |
|---|---|---|---|
| **Oppgave 1** | Kodeforståelse – «hva skrives ut / verdien til X» (5–7 deloppg.) | 8 | ~8 % |
| **Oppgave 2** | Flervalg om objekter: referanser, `self`, scope, grensesnitt (2a–2d) | 8–9 | ~9 % |
| **Oppgave 3** | Skriv små funksjoner over lister/ordbøker/strenger (3–5 deloppg.) | 27–31 | ~28 % |
| **Oppgave 4** | **Stor klassemodellering** fra tekst/UML-spesifikasjon | **47–50** | **~48 %** |
| **Oppgave 5** | Skriv funksjoner over (ofte nøstede) lister/ordbøker (2 deloppg.) | 9–10 | ~9 % |

Tyngdepunktet er utvetydig: **den store klassemodelleringsoppgaven (Oppgave 4) alene er
nesten halve eksamen**, og all kodeskriving (Oppg. 3 + 4 + 5) utgjør ~85 % av poengene.

**Faste sensur-signaler i innledningen (gjentas hvert år):**
- «Dersom du mener en programmeringsoppgave er uklar, kan du gjøre **egne forutsetninger** og
  beskrive disse.»
- «Du kan **legge til egne metoder** ved behov (kommenter dem kort).»
- «Om du står fast på en deloppgave, **fortsett på de som kommer etter** — du kan **bruke
  metoder beskrevet i oppgaveteksten selv om du ikke selv skriver dem**.» (Delkarakter gis
  per deloppgave.)
- Oppgave 1 rettes i nyere sett **automatisk**: svaret må skrives **eksakt** med riktig type
  (ikke desimalpunktum/-komma for heltall, tekst uten enkle anførselstegn `'...'`).
- Ved galt eller blankt svar på flervalg: **0 poeng** (så man skal alltid krysse av).
- Merknad som gikk igjen i H2020: **unngå særnorske tegn (æ/ø/å) i selve koden.**

### Flervalg/kortsvar vs. kodeskriving — fordelingen

Dette er det viktigste formtrekket for en lærebok. IN1000 har **ingen ren flervalgs-eksamen**
(slik IN1900 har på midtveis); flervalg og kortsvar er kun et lite «skall» i starten:

- **Kodeforståelse + flervalg (Oppg. 1 + 2):** ~16–17 poeng ≈ **~17 % av totalen**.
- **Fritekst kodeskriving (Oppg. 3 + 4 + 5):** ~83 % av totalen, med den store
  klassemodelleringen som ~halvparten alene.

En IN1000-bok må dermed trene **to ferdigheter**: (1) presis kodesporing og
begrepsforståelse for skallet (billige, hyppige poeng), og (2) selvstendig kodeproduksjon
i sensors korte, eksplisitte stil — særlig **å bygge flere samarbeidende klasser fra en
spesifikasjon** — for hovedtyngden.

### Historisk utvikling

| Periode | Navn | Form |
|---|---|---|
| **–2016** | **INF1000 / INF1001** | **Papireksamen** (gjennomslagspapir), 4 t, «alle trykte og skrevne». Samme oppgavefamilier (kodesporing, skriv funksjon, stor klassemodellering), men bredere pensum: **tallsystem-konvertering** (binær/heksadesimal) og **personvern/etikk (POPPL)** som egne oppgaver — begge senere **falt bort**. |
| **~2017–2018** | **IN1000 (og IN1001)** | Digitaliseringen fullføres (Inspera). Den moderne 5-delers strukturen er allerede på plass i H2018: kortsvar auto-rettet (1a–f) + flervalg (2a–d) + skriv funksjoner + stor klassemodellering. |
| **2020** (korona) | IN1000 | Hjemmeeksamen. Settet er **oppblåst**: ~10 kortsvar (1a–j) + ~12 objekt-/scope-flervalg (2a–l) + funksjoner + stor klassemodellering **55 p** + ekstra funksjon. Samme oppgavetyper, flere av dem. |
| **2022–2024** | IN1000 | Moden, stabil form. Den faste 5-oppgave-strukturen (kortsvar → objekt-flervalg → små funksjoner → stor klassemodellering → nøstede-strukturer-funksjoner) gjentas nesten identisk. |

**Navneskifte:** emnet het **INF1000/INF1001** t.o.m. ~2016 og **IN1000** fra ~2017; 2018-
settet bærer «IN1000 og IN1001». Faglig kjerne (grunnleggende Python + enkel OO) er
kontinuerlig, men det moderne settet er **renere programmering** enn INF1001-æraen (uten
tallsystem/jus). **Prøveeksamenene** (2016, 2017, 2020, 2022) er *øvings*-mock, ikke vektede
midtveiseksamener; de speiler den avsluttende strukturen og er direkte relevant øvingsstoff.

---

## 2. Temafrekvens

Basert på de **6 moderne settene** som utgjør grunnlaget (H2014, H2018, H2020, H2022, H2023,
H2024), med H2015/INF1001 og prøveeksamenene som bakteppe. «Gjenganger-score» = andel av de
6 settene der temaet forekommer som egen oppgave eller tydelig deloppgave. Enkelte temaer er
gjennomgripende (opptrer i praktisk talt alle deloppgaver) og scorer derfor 100 %.

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **Løkker og betingelser** (`for`/`while`, `if/elif/else`) | **6/6 = 100 %** | Ryggraden i alt — kodesporing og all kodeskriving. |
| **Funksjoner** (definér + kall, parametere, `return`) | **6/6 = 100 %** | Oppg. 3 og 5 er rene funksjonsoppgaver; funksjoner overalt. |
| **Kodeforståelse / «hva skrives ut»** (Oppg. 1) | **6/6 = 100 %** | 5–7 deloppgaver hvert sett, auto-rettet i nyere. |
| **Klasser og objekter — modellering** (Oppg. 4) | **6/6 = 100 %** | Den store oppgaven (47–55 p). Alltid til stede. |
| **Lister** (indeksering, `append`, gjennomløping) | **6/6 = 100 %** | Både i sporing og i funksjonene. |
| **Ordbøker (dict)** som oppslag/teller/gruppering | **6/6 = 100 %** | H2022 1e/3d, H2023 3e/5a-b, H2024 1e/4, H2020 – gjennomgående. |
| **Variabler, datatyper og uttrykk** (int vs. str, boolsk) | **6/6 = 100 %** | `"1"+"2"→"12"` + `int(...)`-fellen er fast i Oppg. 1. |
| **Referansesemantikk + `self` + scope** (flervalg, Oppg. 2) | **~6/6 = 100 %** (modern) | H2018 2a, H2020 2j/2k, H2022 2a-d, H2023 2, H2024 2a-d. |
| **Filbehandling** (`open`/`readline`/`rstrip`/`split`) | **5/6 = 83 %** | Nesten alltid del av den store klassemodelleringen. |
| **Strenger** (`split`, indeksering, bygging, `str()`) | **5/6 = 83 %** | H2020 3c/3d, H2022 1f, prøveeksamen «fjern_vokaler». |
| **Enkel algoritmikk i klasser** (finn beste/travleste, tell, flagg) | **5/6 = 83 %** | «Finn den travleste dagen», «beste destinasjon», søk med prioritet. |
| **Nøstede lister/ordbøker** | **~4/6 = 67 %** | H2024 5a/5b, H2022 5b, H2023 5, prøveeksamen «sjekk_reise». |
| **Terminal-interaksjon** (`input()`, løkke til gyldig verdi) | **~3/6 = 50 %** | H2020 3b, H2023 3c, H2024 4e (`ny_abonnent`). |
| **`__str__` / pen objektutskrift** | **~3/6 = 50 %** | H2014 `__str__`, H2022 4b `__str__`, H2020 Dato. |
| **«Finn feilen» / logisk feil + moteksempel** | **~3/6 = 50 %** | H2014 2c (`stoerst`), H2015 (sentinel-kollisjon), H2023 1g. |
| **Grensesnitt-begrepet (teori)** | **~2/6 = 33 %** | H2022 4g (skriv grensesnittet), H2023 2d (hva er del av grensesnittet). |
| **Tallsystem-konvertering (binær/heks)** | historisk | Kun INF1001 (2015). **Falt bort** i moderne IN1000. |
| **Personvern/etikk (POPPL)** | historisk | Kun INF1001 (2015). **Falt bort**. |
| **NumPy / plotting / rekker / ODE** | **0/6** | **Ikke pensum i IN1000** (dette er IN1900-stoff). |

**Viktigste funn:** Åtte temaer opptrer i **hvert eneste** moderne sett — løkker/betingelser,
funksjoner, kodesporing, klassemodellering, lister, ordbøker, variabler/datatyper og
referanser/`self`. Dette er ryggraden. En IN1000-bok som treffer disse perfekt (med
filbehandling og enkel algoritmikk som nesten-alltid-følgesvenner) dekker mesteparten av
poengene.

**Domenet roterer, mønsteret er fast.** Den store klassemodelleringen pakkes inn i et nytt
domene hvert år — familiens ukeplaner (H2014), fornøyelsespark-destinasjoner (H2015),
undervisningsadministrasjon (H2020), hotell-reservasjon (H2022), garderobe/antrekk (H2023),
strømmetjeneste (H2024) — men den underliggende OO-øvelsen er identisk: konstruktør med
underscore-variabler, aksessor/mutator-metoder, ordbok/liste for «en-til-mange», filinnlesing,
metoder som delegerer til underobjektenes metoder, og én-to algoritme-metoder på toppen.

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen, med sensors foretrukne løsningsmetode. To hovedfamilier:
**«hva skrives ut»-familien** (les kode, angi resultat / velg alternativ) og
**«skriv X»-familien** (produsér kode).

### A. Kodeforståelse / «hva skrives ut / verdien til X» (Oppgave 1)
- **Krav:** Kjør koden mekanisk i hodet og angi resultatet **nøyaktig**. I nyere sett rettes
  dette automatisk — skriv ren verdi (tall uten pynt, streng uten hermetegn i svarfeltet).
- **Faste feller (belønnet av fasit):**
  - **Heltall vs. streng:** `"1"+"2" → "12"`, deretter `int("12")+int("3") = 15` (H2024 1b).
  - **Rekkefølge på oppdateringer i løkke:** `a = 2*a + b` over en liste (H2018 1c → 20).
  - **Akkumulering i nøstet løkke med betingelse** (H2024 1d → 3; H2022 1e → 6).
  - **`while`-løkke som muterer flere variabler per runde** (H2022 1c/1d; H2014 while → 38).
  - **Indeksering** (`tallene[0] + tallene[3]`, H2018 1d → 9) og negativ/kant-indeks.
  - **`if/elif/else`-forgrening** (H2024 1c → 12).
  - **Ordbok som muterer seg selv i løkke** (H2024 1e → 5).
- **Vekting:** 1–3 p per deloppgave, ~8 p samlet.

### B. Flervalg om objekter: referanser, `self`, scope, grensesnitt (Oppgave 2)
- **Krav:** Én felles kodesnutt med to klasser; 2a–2d spør hva som skrives ut / hvilke
  påstander er sanne. Tester tre kjernebegreper:
  - **Referansesemantikk:** `trener = far` gir to navn på **samme objekt** (H2018 2a → 49);
    å binde `maurtua.bytte(palle)` og senere `bytte(Person(1))` bryter/endrer koblinger uten
    å røre `per`/`palle` selv (H2022 2a-d → A:3, B:4, C:6, D:6).
  - **`self`:** en instansvariabel må settes med `self._x`. Skrives bare `x = ...` i
    konstruktøren blir det en **lokal variabel som forsvinner** (H2024: `_alder1` init. til 0
    → `hent_alder1()` gir **0**; `alder2` uten `self` → `hent_alder2()` gir **feilmelding**
    fordi `alder2` er udefinert; `alder3` uten `self` → **feilmelding**).
  - **Scope / grensesnitt / klassevariabel:** hva er «del av grensesnittet», hva skjer hvis
    `self._x` byttes til `self.x`, kan man aksessere `_kaffekopper` utenfra (H2023 2d).
- **Vekting:** 2–3 p per deloppgave, ~8–9 p samlet.

### C. Skriv en liten funksjon over en liste (Oppgave 3)
- **Krav:** Kort funksjon med eksplisitt løkke. Foretrukne mønstre: **teller/akkumulator**;
  **flagg-variabel** for «finnes/alle/annenhver» med **tidlig `return`** (returner `False`
  straks et moteksempel finnes, ellers `True` til slutt); håndter kant-tilfeller eksplisitt.
- **Eksempler:** `sjekk`/`sortert` (er lista stigende? H2014), `badmington` (nøyaktig to av
  tre `True`? H2022 3a), `bordsetting` (flett to lister annenhver, H2022 3c), `jages` (jager
  noe dyr et annet? H2024 3a).
- **Vekting:** 4–8 p.

### D. Skriv en funksjon over en ordbok (Oppgave 3/5)
- **Krav:** Ordbok som **oppslagstabell**, **teller** (`if k not in d: d[k]=0` … `d[k]+=1`)
  eller **gruppering** (`d.setdefault`-idé skrevet ut eksplisitt). Fasiten unngår gjerne
  innebygde snarveier (`set()`, `Counter`, `sum()`) og teller manuelt med en ordbok/liste.
- **Eksempler:** `heie` (slå opp «Brann» / finn laget med verdi 1, H2022 3b),
  `lag_interessegrupper` (gruppér personer på interesse → `{interesse:[navn,...]}`, H2022 3d),
  `flertall` (hvilket dyr finnes flest av? H2024 3c), `utvidet_jages` (bruk ordbok som
  jager-regel, H2024 3b), `er_blokkert`/`kan_spilles` (oppslag i nøstet ordbok, H2023 5).
- **Vekting:** 5–8 p.

### E. Skriv en funksjon over en streng (Oppgave 3)
- **Krav:** Gå gjennom tegn for tegn (`for i in range(len(s))`), bygg ny streng, tell/erstatt.
- **Eksempler:** `dempDeg` (fjern `!` bakerst, erstatt med `.`, H2020 3d), `intTilString`
  (fyll `'0'` foran, H2020 3c), `fjern_vokaler` (prøveeksamen), `points` (tell bokstaver med
  unntak, H2023 3a).
- **Vekting:** 4–7 p.

### F. Stor klassemodellering fra spesifikasjon (Oppgave 4 — hovedoppgaven, ~50 p)
Den faste oppskriften — dette er der karakteren avgjøres:
- **Konstruktør** setter alle instansvariabler med `self._navn = ...`; **underscore-prefiks**
  på alle instansvariabler er standardkonvensjonen (innkapsling — «skal ikke aksesseres
  utenfra klassen»).
- **Aksessor/mutator-metoder** (`hent_x`/`sett_x`, `hentX`/`settX`) i stedet for direkte
  attributt-tilgang utenfra.
- **Flere samarbeidende klasser**, én per «boks» i spesifikasjonen/UML. **Multiplisitet
  («en-til-mange») blir liste eller ordbok** (f.eks. «ordbok der serienavn er nøkkel,
  referanse til Serie er verdi»). Objekter holder **referanser til andre objekter**, og
  metoder **delegerer** til underobjektenes metoder (`for a in self._attraksjoner:
  a.skrivAttr()`).
- **Filinnlesing** er nesten alltid med: `fil = open(filnavn)`, les linje for linje med
  `fil.readline().rstrip()`, løkk til tom streng (`while linje != "":`), `.split()` på
  ordadskilte data, `int()`-konvertering der det trengs. Filnavnet er ofte `serienavn+".txt"`.
- **`__str__`** for pen utskrift; skriv-metoder bruker `print(...)`.
- Klasser ligger i **egne filer** og importeres (`from aktivitet import Aktivitet`).
- **Algoritme-/logikkmetoder:** «finn den beste/travleste» = løkke med `beste = ...;
  besteAntall = 0; if antall > besteAntall: oppdater`; «sett inn i ledig plass» = søk med
  prioritert rekkefølge + `ferdig`-flagg (H2014 `settInnLedig`); «unngå duplikater i utskrift»
  = hold styr i en hjelpeordbok/-liste; «beregn match» = tell positive minus negative treff.
- **Deltema-teori:** enkelte år (H2022 4g) skal man skrive **grensesnittet** til en klasse i
  en kommentar (metodesignaturer, ev. naturlig språk).
- **Vekting:** 47–55 p, delt i ~6–7 deloppgaver à 3–12 p.

### G. Skriv en funksjon over nøstet struktur (Oppgave 5)
- **Krav:** Litt tyngre funksjoner over **nøstede lister/ordbøker**, ofte med to nivåers
  løkke og et flagg/akkumulator. Kan bygge på en tidligere funksjon.
- **Eksempler:** `felles` (tall som finnes ≥2 ganger i nøstet liste, H2024 5a), `adskilt` (fins
  to lister som er helt atskilt i verdi? H2024 5b), `stigespill`/`hvilke_tre_kast` (simulér
  brettspill, generér alle mulige kast-kombinasjoner, H2022 5a-b), `lagSynonymordbok`
  (bygg ordbok fra liste av lister, håndter homonymer, H2020 5), `sjekk_reise` (er nøstet
  liste en gyldig kjede? prøveeksamen).
- **Vekting:** 4–5 p per deloppgave.

### H. Terminal-interaksjon (input-løkke til gyldig verdi)
- **Krav:** `input()` + evt. `int(input(...))`; **løkke som spør på nytt til brukeren gir
  lovlig verdi** (`while valg not in gyldige:` / `while indeks utenfor rekkevidde:`). Ligger
  ofte inne i den store klassemodelleringen.
- **Eksempler:** `beOmNavn` (spør til navnet finnes i lista, H2020 3b), `velg` (spør til
  gyldig indeks, H2023 3c), `ny_abonnent` (les preferanser, be om ny verdi til lovlig, H2024 4e).
- **Vekting:** 5–7 p.

### I. «Finn feilen» / logisk feil + moteksempel
- **Krav:** Enten pek ut alle feilene i et program (flervalg, H2023 1g), eller: gi et
  **konkret moteksempel** (et sett argumenter som gir galt svar) framfor bare en verbal
  forklaring. H2014 2c: `stoerst(a,b,c)` feiler ved likhet (kallet `stoerst(1,1,1)` gir feil
  fordi ingen `>`-test slår til). H2015: en sentinel-verdi som `-1` kan kollidere med gyldige
  data (én-elements-lista `[-1]` gir `-1` selv om alle er like).
- **Vekting:** 2–6 p.

### J. (Historisk, INF1001 2015 — ikke i moderne IN1000)
- **Tallsystem-konvertering:** binær↔desimal↔heksadesimal for hånd (`10001010₂ = 138`).
- **Personvern/etikk (POPPL):** vurdér om innsamling er lovlig behandling av
  personopplysninger. Begge falt bort da emnet ble rendyrket programmering.

---

## 4. Sensorens krav

Destillert fra de offisielle løsningsforslagene (H2014, H2015, H2018) og fasitene for kortsvar/
flervalg (H2024, prøveeksamener), som fungerer som sensorveiledning.

### Metaregler (gjentas i innledningen hvert år)
1. **Egne forutsetninger tillates** ved underspesifikasjon — men **beskriv dem** (i kommentar).
2. **Egne hjelpemetoder tillates** — kommentér dem kort.
3. **Deloppgaver kan løses uavhengig:** man kan bruke metoder beskrevet i oppgaveteksten selv
   om man ikke har skrevet dem. **Delkarakter gis per deloppgave** — stå aldri fast, hopp
   videre. Vis alltid et forsøk framfor blankt.
4. **Kortsvar rettes automatisk (nyere sett):** skriv **eksakt** verdi, riktig type, ingen
   pynt (ikke `18.0` for `18`, ikke `'tekst'` med enkle anførselstegn).
5. **Flervalg:** blankt = feil = **0** → kryss alltid av.
6. **Unngå særnorske tegn (æ/ø/å) i selve koden** (H2020) — men **norske navn på variabler/
   metoder er helt greit** (som i fasitene: `hentAlder`, `travleste`, `settInnLedig`).

### Stil og poenggivning (fasitens faktiske kodestil)
- **Enkel, eksplisitt kode med grunnkonstruksjoner.** Kun `for`/`while`, `if/elif/else`,
  funksjoner, lister, ordbøker og klasser. **Ingen typehint, ingen list comprehensions og
  ingen avanserte biblioteker forventes** — hold deg til det som er undervist. Fasiten skriver
  **eksplisitte løkker**, ikke pythonske one-liners, og **unngår snarveier** som `set()`/
  `Counter`/`sum()` (teller heller manuelt med en ordbok), fordi kurset vektlegger de
  grunnleggende byggeklossene.
- **Instansvariabler med `_`-prefiks**; aksessor/mutator framfor direkte tilgang.
- **`__init__` og `__str__`** er de eneste spesialmetodene som forventes — **arv og
  polymorfisme testes i praksis nesten aldri på eksamen**, selv om de nevnes i pensum
  (dette skiller IN1000 skarpt fra IN1010, se seksjon 7).
- **Riktig idé/struktur belønnes selv med småfeil.** En delvis riktig funksjon med rett idé og
  små indeks-/kantfeil gir uttelling. Løsningsforslaget er «bare ett eksempel på en enkel,
  kompakt besvarelse som ville fått full score» — alternative løsninger sidestilles.
- **Ved «finn feilen»:** gi et **konkret moteksempel**, ikke bare en verbal forklaring.

---

## 5. Typiske feil (utledet av fasitkommentarer og distraktorer)

1. **Glemme `self`** — `x = ...` i konstruktøren i stedet for `self._x = ...` gjør variabelen
   lokal, så den forsvinner (senere `hent_x()` gir `NameError`/feilmelding). Plantet eksplisitt
   i H2024 2c/2d.
2. **Blande referanse og kopi** — tro at `trener = far` lager en kopi (H2018 2a), eller ikke se
   at et objekt fortsatt lever/ikke lever etter en `bytte`/rebinding (H2022 2a-d).
3. **Heltall vs. streng** — `"1"+"2"` gir `"12"`, ikke `3`; glemme `int(...)` (H2024 1b).
4. **Glemme `int()`-konvertering** ved filinnlesing eller `input()` (data leses som streng).
5. **Av-med-én / feil løkkegrenser** i indeksering og `range` (`range(1,len(liste))` vs.
   `range(len(liste))`).
6. **Ikke håndtere kant-tilfeller** — tom liste, «ikke funnet» (returnér `None`/`-1`), ett
   element.
7. **Returnere for tidlig i en «alle/sortert»-sjekk** — returnere `True` inne i løkka der man
   skulle ventet til etter løkka (klassisk feil på `sjekk`/`sortert`-oppgaven, H2014).
8. **Glemme `.rstrip()`/`.strip()`** ved filinnlesing (linjeskift henger med), eller feil
   separator i `.split()`.
9. **Ikke terminere input-løkka riktig** — spørre én gang i stedet for i `while`-løkke til
   gyldig verdi.
10. **Sentinel-kollisjon** — bruke `-1` som «ikke funnet» når `-1` også er en gyldig dataverdi
    (H2015 — svar med moteksempel).
11. **Direkte attributt-tilgang utenfra** (`obj._x`) i stedet for aksessor — bryter innkapsling
    (H2023 2d tester nettopp forståelsen av at `_kaffekopper` ikke er del av grensesnittet).
12. **Scope-forvirring** — tro at en lokal variabel i en funksjon/metode endrer en global/
    instansvariabel med samme navn.

---

## 6. API-/konstruksjonsapparat

Notasjonen og apparatet er svært stabilt og **smalt** — IN1000 bruker kun Python-standard,
uten eksterne biblioteker. En lærebok bør trene nøyaktig disse konstruksjonene til automatikk.

### Må beherskes aktivt (skrive fra bunnen, uten oppslag)

**1. Python-grunnleggende:**
- Variabler, `int`/`float`/`str`/`bool`, aritmetikk, `int(...)`/`str(...)`-konvertering.
- Boolske uttrykk (`and`/`or`/`not`), sammenligning, operator-presedens.
- `if/elif/else`; `for ... in ...` (over liste, ordbok, `range`); `while`.
- `range(start, stop, step)`, indeksering (også negativ), skiving.
- **Lister:** `append`, indeksering, gjennomløping, `len`, nøstede lister.
- **Ordbøker:** oppslag `d[k]`, `if k in d`, `d[k] = v`, løkke over nøkler, nøstede ordbøker,
  ordbok som teller/gruppering.
- **Strenger:** `.split(sep)`, `.rstrip()`/`.strip()`, indeksering, bygging med `+`, `str()`.
- `print(...)` (også med flere argumenter atskilt av komma → mellomrom).
- `input()` og `int(input(...))`; input-løkke til gyldig verdi.

**2. Funksjoner:**
- `def navn(par1, par2):`, `return` (også flere `return`), funksjoner som kaller andre
  funksjoner, funksjon som argument implisitt via metodekall.

**3. Klasser (OOP-kjernen):**
- `class Navn:`, `def __init__(self, ...):`, instansvariabler `self._x`.
- Aksessor/mutator (`hent_x`/`sett_x`), vanlige metoder, metoder som kaller `self.annenMetode()`.
- **`__str__`** for utskrift.
- **Referansesemantikk:** to navn på samme objekt; objekter som holder referanser til andre
  objekter; ordbok/liste av objektreferanser for «en-til-mange».
- Import av klasser fra egne filer (`from aktivitet import Aktivitet`).

**4. Filbehandling:**
- `fil = open(filnavn)`, `fil.readline()`, `.rstrip()`, løkk til tom streng
  (`while linje != "":`), `.split()` på ordadskilte linjer, `int()`-konvertering.

**5. Enkle algoritmemønstre (kodemønstre å automatisere):**
- *Teller/akkumulator:* `total = 0` … `total += ...`.
- *Flagg + tidlig retur:* `for ...: if moteksempel: return False` … `return True`.
- *Finn beste:* `beste = None; besteAntall = 0; if antall > besteAntall: oppdater`.
- *Ordbok som forekomst-teller:* `if t not in d: d[t] = 0` … `d[t] += 1`.
- *Søk med prioritert rekkefølge + `ferdig`-flagg.*

### Bør kjenne til (lavfrekvent / differensierer)
- **`randint(a, b)`** for tilfeldig trekning (leveres i oppgaven; H2023 sier eksplisitt at man
  *ikke trenger å importere noe*).
- **Grensesnitt-begrepet** som teori (hva er/ikke er del av en klasses grensesnitt).
- **`assert`** (dukket opp i H2020 2c som kortsvar).
- Enkel matte fra `math` ved behov (sjelden).

### Skal ikke prioriteres (utenfor IN1000-eksamen)
- **NumPy, matplotlib, rekker, ODE-løsere, vektorisering** — dette er **IN1900**-stoff, ikke
  IN1000.
- **Arv, `super()`, polymorfisme, abstrakte klasser** — nevnes i pensum, men testes i praksis
  nesten aldri på eksamen. (Dette er kjernen i **IN1010**.)
- **Lenkede strukturer, iteratorer, unntak (egendefinerte), tråder** — IN1010-stoff.
- **Rekursjon** — ikke vektlagt; enkle løkker forventes.
- **`set()`, `Counter`, list comprehensions, `sum()`** og andre snarveier — tillatt, men
  fasiten belønner de eksplisitte grunnkonstruksjonene; boka bør lære grunnformen først.
- **Tallsystem-konvertering, personvern/jus** — falt bort etter INF1001-æraen.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (avgjør karakteren, ~85 % av poengene)
1. **Stor klassemodellering (Oppgave 4, ~50 p)** — konstruktør med `self._x`, aksessor/mutator,
   flere samarbeidende klasser, ordbok/liste for «en-til-mange», filinnlesing, delegering til
   underobjekters metoder, `__str__`, og én-to algoritme-metoder. 100 % frekvens, halve eksamen.
2. **Skriv funksjon over liste/ordbok/streng (Oppg. 3 + 5, ~35 p)** — teller/akkumulator,
   flagg + tidlig retur, ordbok som teller/gruppering, nøstede strukturer. 100 % frekvens.
3. **Kodeforståelse «hva skrives ut» (Oppg. 1)** — med alle fellene i seksjon 3A (int vs. str,
   løkke-oppdateringsrekkefølge, nøstet akkumulering, indeksering). Billige, hyppige poeng.
4. **Flervalg om objekter (Oppg. 2)** — referansesemantikk, `self`, scope, grensesnitt. 100 %
   frekvens på moderne sett.
5. **Filbehandling** — `open`/`readline`/`rstrip`/`split`/`int` som del av den store oppgaven.
   ~85 % frekvens.

### Nivå 2 — må kunne (differensierer)
6. **Nøstede lister/ordbøker** (Oppg. 5) — to nivåers løkke, bygg/analysér nøstet struktur.
7. **Terminal-interaksjon** — input-løkke som spør til gyldig verdi.
8. **Enkel algoritmikk i klasser** — finn beste/travleste, unngå duplikater, beregn match.
9. **`__str__` og pen utskrift**; delegering av utskrift mellom klasser.

### Nivå 3 — bør kjenne til (toppkarakter / robusthet)
10. **«Finn feilen» + konkret moteksempel** (inkl. sentinel-kollisjon).
11. **Grensesnitt-begrepet som teori** (H2022 4g, H2023 2d).
12. **`randint`, `assert`** og andre småkonstruksjoner som dukker opp enkeltvis.

### Prognose for neste eksamen

**Avsluttende (100 %, 4 t):** Svært sannsynlig samme faste 5-oppgave-struktur med et nytt
domene:
- **Oppgave 1:** 5–7 kortsvar kodeforståelse (auto-rettet) — løkker, `if/elif/else`, int-vs-str,
  indeksering, ordbok-mutasjon.
- **Oppgave 2:** 2a–2d flervalg om objekter — én felles kodesnutt, spørsmål om referanser,
  `self`, scope og grensesnitt.
- **Oppgave 3:** 3–5 små funksjoner over liste/ordbok/streng (flagg-, teller- og
  grupperings-mønstre).
- **Oppgave 4 (~50 p):** stor klassemodellering fra tekstlig/UML-spesifikasjon — 4–6 klasser
  som samarbeider, konstruktører med `self._x`, aksessor/mutator, ordbok/liste for
  multiplisitet, **filinnlesing**, minst én input-/algoritme-/`__str__`-metode.
- **Oppgave 5:** 2 funksjoner over nøstede lister/ordbøker.

Domeneinnpakningen (ukeplan, hotell, garderobe, strømmetjeneste …) roterer; **programmerings-
øvelsen bak er den samme hvert år**.

**Konsekvens for boka:** Bygg kjernen rundt de fire 100 %-temaene (klassemodellering,
funksjonsskriving, kodesporing, objekt-flervalg) pluss filbehandling. Gi rikelig
**kodesporingstrening** (for Oppg. 1) og **begrepstrening på referanser/`self`/scope** (for
Oppg. 2), og bygg deretter en fullt gjennomarbeidet **mal for den store klassemodelleringen**
— vist stegvis i sensors korte, eksplisitte stil (underscore-variabler, aksessor/mutator,
ordbok for en-til-mange, filinnlesing, delegering, `__str__`). Hvert kapittel bør pare et
domeneeksempel med det underliggende kodemønsteret, slik at studenten gjenkjenner mønsteret
uansett innpakning. Boka trenger **ikke** NumPy/plotting/ODE (IN1900) eller arv/lenkede
strukturer/tråder (IN1010) — men bør *nevne* progresjonen for studenter som skal videre.

### Progresjon og overlapp (IN1900 ↔ IN1000 ↔ IN1010)

| | **IN1900** | **IN1000** | **IN1010** |
|---|---|---|---|
| **Språk** | Python | **Python** | Java |
| **Dreining** | Vitenskapelig/numerisk | **Ren objektorientering** | OO-design fra bunnen |
| **Eksamen** | Midtveis (MC) + avsluttende (blanding) | **Ett 4-t-sett, ~85 % kode** | Midtveis + avsluttende (ren kode) |
| **Klasser** | `__init__`/`__call__`/`__str__`/`__add__` + arv (ODESolver) | **`__init__`/`__str__`, flere samarbeidende klasser, lite arv** | Hierarki, arv, interface, abstrakte klasser |
| **Datastruktur** | Lister, dict, NumPy-arrays | **Lister, dict (av objektreferanser)** | Egendefinert lenket liste, iterator, generics |
| **Særpreg** | NumPy, plotting, rekker, ODE-løsere | **Referansesemantikk, filinnlesing, modellering fra spesifikasjon** | Unntak, rekursjon, tråder/monitor |

- **Overlapp IN1900 ↔ IN1000 (den delte Python-grunnmuren):** kodesporing «hva skrives ut»,
  løkker/betingelser, funksjoner, lister/ordbøker, strenger og filbehandling er felles.
  Forskjellen er *retningen*: IN1900 tar grunnmuren mot numerikk (NumPy/ODE/plott), IN1000 tar
  den mot objektorientering (referanser, `self`, samarbeidende klasser). En student som har
  tatt det ene har ~60 % av den andres grunnmur.
- **Progresjon IN1000 → IN1010:** IN1000s store klassemodelleringsoppgave er den direkte
  forløperen til IN1010s «tegn + programmér klassehierarki». Studenten går fra å **bruke**
  objekter og lage flere samarbeidende klasser (IN1000) til å **designe** klassehierarkier med
  arv/interface, egendefinerte lenkede strukturer, iteratorer, unntak og tråder (IN1010).
  IN1000s `__str__`, aksessor/mutator og «ordbok av objektreferanser» blir henholdsvis
  IN1010s `toString()`, innkapsling og egendefinerte beholdere. **Arv og polymorfisme er
  nevnt i IN1000-pensum, men testes knapt** — de blir for alvor prøvd i IN1010. IN1000 er
  altså det mildeste av de tre emnene: smalest apparat, mest støtte i oppgaveteksten, og størst
  vekt på ett gjennomarbeidet modelleringsmønster.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/UiO/IN1000/`
(`eksamen/`, `losningsforslag/`, `proveeksamen/` og enkelte filer i rotmappa). Arkivet dekker
H2014–H2024, avsluttende sett + prøveeksamener, med tilhørende løsningsforslag/fasiter — 27
PDF-filer.

**Løsningsforslag/fasiter lest grundig:**
- `losningsforslag/IN1000-H2014-losning.pdf` (fullt løsningsforslag med kode — mal for
  kortsvar, «finn feilen»-moteksempel, og den store klassemodelleringen «Familiens ukeplaner»).
- `losningsforslag/IN1000-H2015-losning.pdf` / `eksamen2015_losningsforslag.pdf` (INF1001 —
  fullt løsningsforslag, inkl. den store «fornøyelsespark»-modelleringen med filinnlesing,
  samt de historiske tallsystem-/personvern-oppgavene).
- `in1000_h24_oppgavesett_lf.pdf` (H2024 med fasit for kortsvar/flervalg + full spesifikasjon
  for «Strømmetjeneste» — mal for moderne struktur; verifiserte fasitverdier 1a–1e og 2a–2d).
- `proveeksamen/IN1000-proveeksamen-2022-svar.pdf`, `...-2020-svar.pdf`, `...-2017-losning.pdf`,
  `...-2016-losning.pdf` (mock-eksamener med fasit — bekrefter strukturstabilitet).

**Oppgavesett lest grundig (avsluttende):**
- `eksamen/IN1000-H2024.pdf`, `IN1000-H2023.pdf` (+ `in1000_h23_oppgavesett.pdf`),
  `IN1000-H2022.pdf`, `IN1000-H2020.pdf` (+ `komplett-oppgavesett-in1000-h2020-v2.pdf` —
  korona-hjemmeeksamen, oppblåst variant), `IN1000-H2018.pdf` (+ `oppgavesett-2018-v1.1.pdf`).

**Skumlest for form- og temaregistrering:**
- `eksamen/IN1000-H2015.pdf` (INF1000 — papireksamen, gjennomslagspapir; bekrefter
  papir→digital-overgangen), `IN1000-H2017.pdf` og `IN1000-H2014.pdf`.

**Merknader om kildene:**
- **Bildebaserte PDF-er:** enkelte filer (`eksamen/IN1000-H2017.pdf`,
  `losningsforslag/IN1000-H2018-losning.pdf`, `losning-2018-oppg1-2.pdf`,
  `proveeksamen/IN1000-proveeksamen-2017.pdf`) ga ingen tekst ved uttrekk (skannede/
  bilde-only). Innholdet i disse er dekket indirekte via de tilhørende oppgavesettene/andre år.
- **Navneskifte:** emnet het **INF1000/INF1001** t.o.m. ~2016 og **IN1000** fra ~2017;
  2018-settet bærer «IN1000 og IN1001». Faglig kjerne er kontinuerlig, men det moderne settet
  er renere programmering (uten tallsystem/jus fra INF1001-æraen).
- **Formskifte:** papireksamen med gjennomslagspapir (t.o.m. 2015) → digital Inspera-eksamen
  (fra ~2017/2018) → korona-hjemmeeksamen (2020, oppblåst) → moden 4-timers digital eksamen med
  fast 5-oppgave-struktur (2022–2024). Frekvensanalysen vekter de moderne settene tyngst.
- **Ingen midtveiseksamen:** til forskjell fra IN1900 og IN1010 har IN1000 kun ett vektet
  eksamenssett. Prøveeksamenene er øvingsmateriell, ikke vurdering.
- **Fagbeskrivelse:** omskrevet sammendrag av UiOs emnebeskrivelse for IN1000
  (scratchpad: `fagbeskrivelse-in1000.md`), inkl. destillert «hva testes faktisk»-seksjon.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er
  parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasiter er gjengitt
  ordrett; kodemønstrene er standard Python-idiomer.
</content>
</invoke>
