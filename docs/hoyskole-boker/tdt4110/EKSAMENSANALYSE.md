# Eksamensanalyse: TDT4110 Informasjonsteknologi grunnkurs (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på NTNU-arkivet 2014–2019:
> 10 eksamenssittinger (H2014, H2015, K2015, H2016, K2016, H2017, K2017, H2018 i to
> varianter, K2019) og 7 løsningsforslag skrevet av faglærer (K2015, H2015,
> H2016, K2016, H2017, K2017, K2019).
> Lesestrategi som avtalt: løsningsforslagene og de siste ~8 årenes sett er gjennomgått
> grundig; eldre sett skummet for form- og temaregistrering. Kodesnuttene i Oppgave 2 (og
> enkelte kildefiler i programmeringsdelen) ligger som **bilder** i PDF-ene og lot seg
> ikke trekke ut som tekst — de er dekket indirekte via løsningsforslagenes fasitsvar og
> forklaringer.
> **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster
> eller fasit. Kodemønstrene som beskrives er standard Python-idiomer, ikke opphavsrettsbeskyttet tekst.
> Analysen er kvantitativ der kildene tillater det.
>
> **Plassering i landskapet (NTNU vs. UiO):** TDT4110 er NTNUs store innføringsemne i
> programmering — motstykket til UiOs **IN1000/IN1900** — og tas av flere tusen
> ingeniør- og realfagsstudenter hvert år. Emnet er rent **prosedyreorientert** (Python
> med funksjoner, lister, ordbøker, filer — **ingen objektorientering/klasser**) og har i
> tillegg en stor **teori-/flervalgsdel om datamaskinens virkemåte** (maskinvare, nettverk,
> sikkerhet, tallrepresentasjon, komprimering, systemutvikling). Dette gjør profilen
> markant annerledes enn IN1000 (halv OO-klassemodellering, ingen teoridel) og delvis lik
> IN1900 (prosedyre-Python), men uten IN1900s NumPy/ODE-tyngde og med en teoridel ingen av
> UiO-emnene har. Se seksjon 7 for full sammenligning.

---

## 1. Eksamensform og utvikling

### Dagens form

TDT4110 vurderes med **én avsluttende skriftlig skoleeksamen, 4 timer**, som teller
**100 %**. Karakterskala **A–F**. Hjelpemiddelkode **D**: kun en bestemt, enkel
kalkulator — ingen trykte eller håndskrevne hjelpemidler, ingen elektronikk utover
kalkulatoren. All kode er Python 3. Både **bokmål og nynorsk** tilbys (H2014 var nynorsk,
resten stort sett bokmål).

| Trekk | Detalj |
|---|---|
| **Varighet** | 4 timer (09:00–13:00; H2018 kjørte to varianter, 09–13 og 15–19) |
| **Hjelpemidler** | Kode D — bare enkel kalkulator |
| **Total** | 100 % fordelt i prosent per oppgave/deloppgave (styrer vekting) |
| **Språk** | Bokmål og nynorsk |
| **Vurdering** | A–F; obligatoriske øvinger må være godkjent for å gå opp |

**Fast makrostruktur (2014–2019), tre til fire «Oppgaver»:**

| Oppgave | Innhold | Vekt (typisk) |
|---|---|---|
| **Oppgave 1 — Teori/flervalg** | ~20 flervalgsspørsmål om datamaskinens oppbygning, nettverk, sikkerhet, tallrepresentasjon, komprimering, sampling, systemutvikling, algoritmer | **20–25 %** |
| **Oppgave — Kodeforståelse** | 4–6 deloppgaver: «hva skrives ut», fyll-inn manglende kodelinje, og «forklar med én setning hva funksjonen gjør» | **15–20 %** |
| **Programmering (1–2 oppgaver)** | En kjede små funksjoner som bygger en mini-applikasjon i et domene (filinnlesing → parsing → analyse → utskrift/lagring) | **50–60 %** |

Tyngdepunktet er utvetydig: **programmering utgjør over halvparten av eksamen** (ofte to
programmeringsoppgaver à 25–50 %), teori/flervalg er en fast fjerdedel, og
kodeforståelse en fast sjettedel. Rekkefølgen varierer — kodeforståelse er noen år
**Oppgave 2** (før programmeringen), andre år **Oppgave 4** (etter) — men de tre
byggeklossene (teori, kodeforståelse, programmering) er til stede **hvert eneste år**.

**Faste sensur-signaler i innledningen (gjentas hvert år):**
- «Det er angitt i prosent hvor mye hver oppgave og deloppgave teller ved sensur. Les
  gjennom hele settet før du begynner. Disponer tiden godt.»
- «Gjør rimelige antakelser der oppgaveteksten er ufullstendig — **skriv kort hva du
  antar.**»
- «**Svar kort og klart. Er svaret uklart eller lengre enn nødvendig, trekker dette ned.**»
  (Konsishet er eksplisitt belønnet — særlig i kodeforståelse-forklaringene.)
- Flervalg: **fra og med 2015 gir feil svar IKKE minuspoeng** → man skal alltid krysse av.
  (H2014 hadde fortsatt −½ poeng for feil kryss; det ble fjernet etterpå.)

### Flervalg/teori vs. kodeskriving — fordelingen

Dette er det viktigste formtrekket for en lærebok, og det skiller TDT4110 skarpt fra
UiO-emnene: TDT4110 har en **substansiell teoridel (20–25 %) om datateknologiske
grunnbegreper** som testes med flervalg, ved siden av programmeringen.

- **Teori/flervalg (Oppgave 1):** ~20–25 % — rene kunnskapsspørsmål om hvordan
  datamaskiner, nettverk, tall og komprimering virker.
- **Kodeforståelse (kodesporing + forklaring + fyll-inn):** ~15–20 %.
- **Kodeskriving (programmering):** ~50–60 % — hovedtyngden, alltid delt i en kjede
  funksjoner over et domene.

En TDT4110-bok må dermed trene **tre ferdigheter**: (1) faktakunnskap om datateknologi
for teoridelen (billige, hyppige poeng), (2) presis kodesporing og evnen til å
**forklare hva en funksjon gjør** for kodeforståelsen, og (3) selvstendig
**prosedyreorientert kodeproduksjon** — bygge en kjede samarbeidende funksjoner fra en
kravbeskrivelse — for hovedtyngden.

### Historisk utvikling og temaforskyvning

Formen (tre byggeklosser, ~4-timers eksamen, kode D) er stabil gjennom hele perioden,
men **teoriinnholdet har forskjøvet seg**:

| Periode | Vekt i teoridelen |
|---|---|
| **2014–2017** | Tydelig innslag av **systemutvikling / programvareprosess** (vannfallsmodell, Boehms spiralmodell, inkrementell utvikling, kravspesifikasjon/«requirements engineering», akseptansetesting) og **algoritmeteori** (algoritmedefinisjon, pseudokode, binærsøk vs. sekvensielt søk, kjøretidskompleksitet/Big-O, «brute force»/travelling salesman). Alan Turing, analoge signaler, modulasjon (FM/AM), paritetsbit. |
| **2018–2019** | Teoridelen dreies mot **nettverk og sikkerhet** (TCP/IP-lag, protokoller, flytkontroll, replay/jitter/buffer overflow, kryptering, DoS/DDoS, phishing, wiretapping, VPN) og **maskinvare/data** (CPU, transistor, ALU, registre, fetch-execute, pipelining, RAM/SSD, tallsystemer, ASCII/Unicode, komprimering, sampling). Systemutviklings-/kompleksitetsspørsmålene tones ned. |

**Merknad om pensumutvikling:** Arkivet dekker 2014–2019. NTNUs gjeldende emnebeskrivelse
(fagbeskrivelsen) nevner nå også **NumPy og Matplotlib** for beregning/visualisering samt
**KI som kodehjelp** — temaer som ikke er belagt i det historiske arkivet. Løsningsforslaget
for K2019 varsler dessuten at **f-strenger** («f-strings will be part of the course from
now on») kommer inn. En ny lærebok bør ta høyde for at teoridelen og de moderne
Python-verktøyene kan ha vokst siden 2019 (marker slike tillegg som `(verifiser mot
gjeldende pensum)`).

---

## 2. Temafrekvens

Basert på de 10 sittingene 2014–2019. «Gjenganger-score» = andel av eksamenssettene der
temaet forekommer som egen oppgave eller tydelig deloppgave. Temaene grupperes i
**programmering** (kodeskriving + kodesporing) og **teori** (flervalg).

### 2.1 Programmerings- og kodesporingstemaer

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **Funksjoner** (definér, parametere, `return`, gjenbruk av egne funksjoner) | **10/10 = 100 %** | Hele programmeringsdelen er funksjonsskriving; funksjoner bygger på hverandre. |
| **Løkker og betingelser** (`for`/`while`, `range`, `if/elif/else`) | **10/10 = 100 %** | Ryggraden i all koding og kodesporing. |
| **Lister, inkl. 2D-lister (tabeller)** | **10/10 = 100 %** | Den dominerende datastrukturen i programmeringsoppgaven — «liste av lister» fra fil. |
| **Filbehandling** (`open`, `for line in f`, `.strip()`, `.split()`, `.write()`) | **10/10 = 100 %** | Nesten alltid første ledd i programmeringskjeden: les fil → tabell/streng. |
| **Strenger** (`split`, `strip`, `join`, indeksering/slicing, `.isdigit()`, bygging) | **10/10 = 100 %** | Parsing av linjer og formatert utskrift i hvert sett. |
| **Kodesporing «hva skrives ut / returneres»** | **10/10 = 100 %** | Kjernen i kodeforståelsesoppgaven. |
| **Variabler, datatyper og konvertering** (`int`/`float`/`str`, `%`, `//`) | **10/10 = 100 %** | `int()`/`float()` på fildata; heltalls- vs. flyttallsdeling. |
| **Ordbøker (dict)** som oppslag/teller/gruppering (`d.get(k,0)+1`) | **~8/10 = 80 %** | Bygge dict fra liste, telle forekomster, gruppere; `d.get`-mønsteret er fast. |
| **Input-valideringsløkke** (`while` til gyldig verdi) | **~8/10 = 80 %** | `readTime`, `enter_line`, `les_gyldig_vitneskilt` — spør på nytt til input er lovlig. |
| **Finn maks/beste/vinner** (løkke som holder styr på beste) | **~8/10 = 80 %** | «finn treigeste buss», «vinner av auksjon», «parti i ledelse». |
| **Sortering** (bytte-/boblesortering for hånd, `.sort()`, gitt `sort_list`) | **~7/10 = 70 %** | Rangér butikker etter pris; ofte gis en `sort_list`-hjelpefunksjon. |
| **«Forklar med én setning hva funksjonen gjør»** | **~6/10 = 60 %** | Distinktiv NTNU-sjanger i kodeforståelsen — krever presis, kort forklaring. |
| **Fyll inn manglende kodelinje (`#KODE1` — velg alternativ)** | **~5/10 = 50 %** | Hybrid kodesporing/flervalg: velg riktig linje som får funksjonen til å virke. |
| **Rekursjon** (fakultet, gcd/Euklid, Fibonacci, tverrsum, potens) | **~6/10 = 60 %** | Fast innslag i kodesporing — «hva returnerer denne rekursive funksjonen?». |
| **Tupler** (parallelle tupler for score/bokstav/vekt; `tuple(...)`) | **~5/10 = 50 %** | Karaktergrenser, øvelsesnavn, vekter lagres i tupler. |
| **Unntakshåndtering** (`try/except` rundt filoperasjoner) | **~6/10 = 60 %** | Håndter «fil finnes ikke»; skriv feilmelding, returnér `None`. |
| **Meny + hovedløkke** (`main`/`task` som dispatcher på brukervalg) | **~5/10 = 50 %** | Presentér meny, kall riktig funksjon, gjenta til brukeren avslutter. |
| **Formatert utskrift** (`.rjust`/`.ljust`/`.center`, nullpadding, `format`) | **~7/10 = 70 %** | Pen kolonneutskrift og tidsformat `hh:mm:ss`. |
| **Random** (`randint`, `choice`) | **~5/10 = 50 %** | Terningkast (Yatzy), tilfeldig lagoppsett, tilfeldig rett, generér reg.nr. |
| **Tid-/tallkonvertering** (sekunder ↔ h:m:s, dato-diff) | **~5/10 = 50 %** | Reisetid, tidevann, fartsmåling — regn om og formatér tid. |
| **Binærfil / `pickle`** (`open(...,'b')`, `pickle.dump/load`) | **~3/10 = 30 %** | Lagre dict til binærfil (H2018 auksjon); nevnt i funksjonshjelpen hvert år. |
| **Algoritmer: binærsøk / sekvensielt søk** (implementér eller spor) | **~3/10 = 30 %** | H2018 2e (fyll inn binærsøk); ellers i teori/kompleksitet. |

### 2.2 Teoritemaer (flervalg, Oppgave 1)

| Temaklynge | Gjenganger-score | Typiske spørsmål |
|---|---|---|
| **Maskinvare / datamaskinens oppbygning** | **~10/10 = 100 %** | CPU/mikroprosessor, transistor, vakuumrør, ALU, kontrollenhet, registre (programteller, instruksjonsregister), RAM (hva «random access» betyr), SSD vs. harddisk, primær-/sekundærminne, Moores lov, fetch-execute-syklus (5 steg), pipelining, fotolitografi, hovedkort/datterkort, integrert krets, operativsystem, klokkehastighet, latency. |
| **Tallrepresentasjon og data** | **~10/10 = 100 %** | Antall symboler med n bit (`2^n`), bytes, binær↔desimal↔heksadesimal-konvertering, binæraddisjon, toer-komplement, flyttallsrepresentasjon, ASCII (extended/ISO-8859-1 = 8 bit), Unicode («worst case» bytes), RGB/CMYK/webfargekoder, bildestørrelse (piksler × bit), lagringsprefikser (kilo/mega/giga), metadata. |
| **Nettverk** | **~9/10 = 90 %** | TCP/IP-lag/stakk, protokoll-begrepet, kanalkoding (sjekksum, SPC, Hamming, syklisk sjekksum/CRC), sekvensering, flytkontroll (sliding window vs. stop-and-go), ACK/retransmisjon, replay error, jitter, buffer overflow, linje- vs. pakkesvitsjing, unicast/multicast, IPv4/IPv6 (32/128 bit), subnett-maske (prefiks/suffiks), MAC-adresse, ISP. |
| **Sikkerhet** | **~8/10 = 80 %** | Kryptering med offentlig vs. privat nøkkel, DoS/DDoS, phishing/pharming, wiretapping, brannmur, hashing (dataintegritet), digitale signaturer, VPN. |
| **Komprimering og sampling** | **~8/10 = 80 %** | Run-length (tapsløs), JPEG/MPEG/MP3 (tap), tapsløs vs. tapskomprimering, sampling (analog→digital), Nyquist-regelen (samplingsfrekvens ≥ 2× høyeste frekvens), for treg samplingsfrekvens, modulasjon (FM/AM), analoge signaler, paritetsbit. |
| **Systemutvikling / programvareprosess** | **~5/10 = 50 %** (tungt 2014–2017, tonet ned 2018–2019) | Programvarespesifikasjon/-utvikling/-validering, vannfallsmodell, Boehms spiralmodell, inkrementell utvikling, kravspesifikasjon («requirements engineering»), akseptansetesting, systemarkitektur. |
| **Algoritmer (teori)** | **~4/10 = 40 %** (mest 2016–2017) | Algoritmedefinisjon, pseudokode, binærsøk vs. sekvensielt søk (forutsetninger), kjøretidskompleksitet/Big-O, «brute force»/travelling salesman. |

**Viktigste funn:** Sju programmeringsferdigheter opptrer i **hvert eneste** sett —
funksjoner, løkker/betingelser, lister (inkl. 2D-tabeller), filbehandling, strenger,
kodesporing og datatype-konvertering. Dette er ryggraden på kodesiden. På teorisiden er
**maskinvare og tallrepresentasjon nær 100 %**, med nettverk, sikkerhet og
komprimering/sampling like bak. En TDT4110-bok som treffer disse dekker mesteparten av
poengene.

**Domenet roterer, mønsteret er fast.** Programmeringsoppgaven pakkes inn i et nytt
domene hvert år — reisetid/bussruter (H2015), sensur/karaktersetting (H2015),
Yatzy-terninger (K2015), vitneobservasjoner av biler (K2015), valg/stemmetelling (H2016),
tall-til-tekst «Penger» (H2016), binærkoding (K2016), allidrett/lagoppsett (K2016),
fartsmåling/fartsbøter (H2017), tidevann (H2017), priskrig mellom butikker (K2017),
storskjerm/scrolling (K2017), flerkamp (H2018), auksjonshjelp (H2018),
restauranthjelp/oppskrifter (K2019) — men den underliggende øvelsen er identisk:
**les fil → bygg tabell/ordbok → analysér (finn maks/tell/sortér) → skriv ut eller lagre**.

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen, med sensors foretrukne løsningsmetode. Tre
hovedfamilier: **teori/flervalg**, **kodeforståelse** og **kodeskriving**.

### A. Teori/flervalg (Oppgave 1, ~25 %)
- **Krav:** ~20 flervalgsspørsmål, ett riktig alternativ. Marker det «mest riktige».
  Fra 2015: ingen minuspoeng → kryss alltid av, også ved gjetting.
- **Temaene:** se seksjon 2.2 — maskinvare, tallrepresentasjon, nettverk, sikkerhet,
  komprimering/sampling, systemutvikling, algoritmer.
- **Karakter av distraktorene:** ofte tett formulerte, plausible påstander der ett ord
  eller ett tall skiller riktig fra galt (f.eks. Nyquist «minst dobbelt så rask» vs.
  «minst like rask»; IPv6 = 128 bit vs. 32/64/256). Krever presis faktakunnskap, ikke
  bare gjenkjenning.
- **Regnespørsmål:** en del krever regning for hånd (binær↔desimal↔hex-konvertering,
  `2^n` symboler, bildestørrelse i bytes) — kalkulator tillatt.

### B. Kodeforståelse «hva skrives ut / returneres» (kodesporing)
- **Krav:** Kjør koden mekanisk i hodet og angi resultatet. Noen deloppgaver er
  fritekst («fyll inn svaret»), noen er flervalg.
- **Faste konstruksjoner som spores:**
  - **Boolsk logikk:** nøstede `and`/`or`/`not`-uttrykk som argument til en funksjon som
    grener på sannhetsverdier (H2018 `myst(val1,val2)`).
  - **Løkkemutasjon over liste:** kvadrér annethvert element, snu liste, sortér synkende.
  - **Rekursjon:** fakultet, gcd (Euklid, `myst(x,y)` med `%`), Fibonacci
    (`myst(0,1,7)`), sum 1..n, tverrsum, rekursiv potens — «hva returneres?».
  - **`while` som finner tall:** minste `n` som deler både `t1` og `t2` (H2018 `myst`).
  - **Strengslicing med steg:** `s[::-1]`, plukk annenhver/økende mellomrom («The Matrix»,
    «Nynorsk», «JULENISSEN»).
  - **Ordbok som teller:** `d[name] = d.get(name,0)+1`.
  - **2D-liste/matrise:** transponér, legg nullramme rundt, snu 0/1.
- **Vekting:** typisk 1–3 % per deloppgave.

### C. «Forklar med én setning hva funksjonen gjør»
- **Krav:** Etter «hva skrives ut» skal man **beskrive funksjonens formål presist i én
  setning** («funksjonen transponerer en matrise», «beregner fakultet rekursivt»,
  «finner bokstaven det er flest av»). Konsishet belønnes; ordrik eller upresis
  forklaring trekker ned.
- **Vekting:** ofte 2 % (mot 3 % for selve utskriften).
- **Distinktiv NTNU-sjanger** — finnes ikke i denne formen på UiO-eksamenene.

### D. Fyll inn manglende kodelinje (`#KODE1` — velg alternativ)
- **Krav:** En nesten komplett funksjon med én til tre hull; velg (flervalg) linjen som
  får funksjonen til å virke etter spesifikasjonen. Tester at man leser
  løkkegrenser/`range`, betingelser og indeksering nøyaktig.
- **Eksempler:** primtallsjekk (`if num % i == 0`), binærsøk (`imid=(imin+imax)//2`),
  kvadrér annethvert (`range(1,len(numbers),2)`), palindrom (`s[::-1]`).
- **Vekting:** 1–3 %.

### E. Filinnlesing → tabell/streng (programmering, alltid første ledd)
- **Krav:** Les tekstfil linje for linje, `.strip()`, `.split(sep)`, bygg **liste av
  lister** (2D-tabell) eller én lang streng. Konvertér tallkolonner med `int()`/`float()`.
- **Eksempler:** `read_file`, `file_to_table`, `file_to_list`, `make_result_list`.
- **Vekting:** 5–10 %.

### F. Parsing og datatransformasjon (programmering)
- **Krav:** Gjør om en streng/rad til liste (`list_from_string`), konvertér strengtall til
  int/float (`str_to_numbers`), håndtér variabelt antall mellomrom, tidsstrenger
  (`2:01.65` → `121.65` sekunder), bygg ordbok fra tabell (`make_dict`).
- **Vekting:** 5–10 %.

### G. Analyse: finn/tell/sortér/rangér (programmering, kjernen)
- **Krav:** Gå gjennom tabellen/ordboken og finn **maks/beste/vinner** (`item_winner`,
  «treigeste buss», «parti i ledelse»), **tell forekomster** (`count_items`, dict-teller),
  **gruppér** (`all_recipes_with` → `{ingrediens:[retter]}`), eller **rangér/sortér**
  (`rank_stores` med boblesortering, eller gitt `sort_list`). Uavhengig av kolonnenes
  rekkefølge (må finne indeks via `data[0].index(navn)`).
- **Vekting:** 5–10 % per deloppgave; ofte tyngdepunktet i programmeringsdelen.

### H. Input-validering og meny (programmering)
- **Krav:** `input()` (+ `int(input(...))`); **løkke som spør på nytt til lovlig verdi**
  (`while len(text)!=length:` / `while hour<0 or hour>23:`), med feilmelding. Meny-/
  `main`-funksjon som gjentar til brukeren velger å avslutte, og dispatcher på valget.
- **Eksempler:** `readTime`, `enter_line`, `les_gyldig_vitneskilt`, `menu`/`task`.
- **Vekting:** 5–10 %.

### I. Utskrift/lagring (programmering, ofte siste ledd)
- **Krav:** Pen formatert utskrift (`.rjust`/`.ljust`/`.center`, nullpadding, `format`,
  `', '.join(liste)`), eller **skriv resultat til fil** (tekst med `f.write`, eller
  **binærfil med `pickle.dump`**), med `try/except` og bruker-tilbakemelding om
  suksess/feil.
- **Vekting:** 5–10 %.

### J. Rekursjon / algoritmer (både kodesporing og av og til implementasjon)
- **Krav:** Gjenkjenn eller fyll inn rekursive funksjoner (fakultet, gcd, Fibonacci,
  potens, tverrsum); implementér/spor binærsøk. I teoridelen: algoritmekompleksitet.
- **Vekting:** 1–5 %.

---

## 4. Sensorens krav

Destillert fra de sju offisielle løsningsforslagene (K2015, H2015, H2016, K2016, H2017,
K2017, K2019). NB: arkivet har INGEN sensorveiledninger — disse er faglærerens egne løsningsforslag, opphavsrettslig vernet, og skal brukes som fasitkilde uten å gjengis.

### Metaregler (gjentas i innledningen hvert år)
1. **Rimelige antakelser tillates** ved underspesifikasjon — men **skriv kort hva du
   antar**.
2. **Svar kort og klart.** Uklare eller unødig lange svar trekker ned — særlig relevant
   for «forklar hva funksjonen gjør» og for teori.
3. **Flervalg (fra 2015):** feil svar gir **ikke** minuspoeng → kryss alltid av. (H2014:
   −½ for feil, 0 for blankt.)
4. **Prosentvekting per deloppgave er oppgitt** — disponér tiden etter poeng.

### Stil og poenggivning (fasitens faktiske kodestil)
- **Enkel, eksplisitt prosedyrekode.** Kun `for`/`while`, `if/elif/else`, funksjoner,
  lister, ordbøker, tupler, strenger og filer. **Ingen klasser/OOP** — hele emnet er
  prosedyreorientert. List comprehensions og innebygde snarveier (`max`, `min`, `sum`,
  `sorted`, `set`, `index`) **er tillatt og brukes i fasit**, men fasiten viser gjerne
  også en eksplisitt løkkevariant og sidestiller dem.
- **Gjenbruk av egne funksjoner forventes.** De store programmeringsoppgavene er kjeder
  der senere deloppgaver **bygger på** de tidligere (`i3_txt` bruker `i2_txt`;
  `make_result_list` bruker `list_from_string`; `main` kaller alt). Sensor belønner
  gjenbruk framfor kopiert kode.
- **Flere korrekte løsninger sidestilles.** Fasiten sier eksplisitt: «Løsningene som er
  vist er bare én av måtene å programmere dette på … ikke fasit i den forstand at det er
  eneste måte.» Alternative løsninger med rett idé gir full pott.
- **Hjelpefunksjoner og globale variabler er greit.** Fasiten bruker fritt
  hjelpefunksjoner (`leadIndex`, `beregn_verdi`) og aksepterer både globale variabler,
  parametere og lokale definisjoner for konstanter som `DISTRICTS`/`parties`.
- **Riktig idé/struktur belønnes selv med småfeil.** Delvis riktig funksjon med rett
  mønster og små indeks-/kantfeil gir uttelling. Syntaksfeil som en editor lett ville
  fanget (f.eks. tom `except`) trekker minimalt.
- **Robusthet gir toppscore.** Enkelte deloppgaver har eksplisitte fullscore-krav:
  ikke returnér duplikater (K2019 `all_recipes_with`, H2017 reg.nr.), håndtér at
  kolonne-/radrekkefølge er ukjent (H2018 — finn indeks dynamisk), håndtér at biler kan
  passere målepunkt i vilkårlig rekkefølge (H2017).
- **Konvensjon:** norske eller engelske navn på variabler/funksjoner går like bra
  (fasiten blander: `les_inn_bilinfo`, `item_winner`, `sek_paa_benken`).

---

## 5. Typiske feil (utledet av fasitkommentarer og distraktorer)

1. **Glemme `int()`/`float()`-konvertering** ved filinnlesing eller `input()` — data
   leses som streng; sammenligning/aritmetikk feiler. Fast fasitpoeng («pris skal
   representeres som flyttall»).
2. **Glemme `.strip()`** ved filinnlesing — linjeskift `\n` henger med i siste element.
3. **Feil separator i `.split()`** — dele på `,` når det er `\t`, eller ikke håndtere
   **variabelt antall mellomrom** (`', '` vs. bare `,`).
4. **Anta fast kolonne-/radrekkefølge** — å regne med at «vase» er kolonne 1 eller «Per»
   er rad 1. Fasit krever dynamisk oppslag (`data[0].index(navn)`).
5. **Av-med-én / feil løkkegrenser** i `range` og indeksering (`range(1,len,2)` for
   annethvert element; `range(len-1)` når man ser på par).
6. **Ikke håndtere kant-/tomtilfeller** — tom liste, «ikke funnet» (returnér `[]`/`None`),
   ingen bud på en gjenstand.
7. **Returnere/telle duplikater** når oppgaven krever unike verdier (bruk `if x not in
   liste`, eller `set`).
8. **Ikke terminere input-løkka riktig** — spørre én gang i stedet for i `while`-løkke
   til gyldig verdi; feil sentinel for «tom input» (`while navn != '':`).
9. **Blande heltalls- og flyttallsdeling** (`/` vs. `//`) i tidskonvertering og
   indeksregning.
10. **Feil på rekursjonens grunntilfelle/steg** — velge `myst(n+1)` i stedet for
    `myst(n-1)`, eller feil base case → uendelig rekursjon.
11. **Teori: forveksle tett formulerte alternativer** — Nyquist «minst dobbelt» vs. «minst
    like/fire ganger»; tapsløs vs. tap; unicast vs. multicast; offentlig vs. privat
    nøkkel; IPv4 (32) vs. IPv6 (128).
12. **Teori-regnefeil** — feil ved binær↔hex-konvertering, `2^n`-symboltelling eller
    bildestørrelse (glemme å gange piksler med bit-per-piksel og dele på 8).
13. **Ordrik/upresis «forklar»-setning** — beskrive *hvordan* koden virker linje for linje
    i stedet for *hva* funksjonen oppnår.

---

## 6. API-/konstruksjonsapparat

Apparatet er **prosedyreorientert og relativt bredt** på biblioteksfunksjoner — hver
eksamen har en flere sider lang **«Useful Python functions and commands»**-appendiks som
gjengir signaturer for streng-, liste-, ordbok-, fil- og pickle-operasjoner (studenten
trenger ikke pugge signaturene, men må vite *når* de brukes).

### Må beherskes aktivt (skrive fra bunnen)

**1. Python-grunnleggende:**
- Variabler, `int`/`float`/`str`/`bool`, aritmetikk, `%` (modulo), `//` (heltallsdeling),
  `int(...)`/`float(...)`/`str(...)`-konvertering.
- Boolske uttrykk (`and`/`or`/`not`), sammenligning, presedens.
- `if/elif/else`; `for ... in ...` (liste, ordbok, `range`, `enumerate`); `while`.
- `range(start, stop, step)`, indeksering (også negativ), **slicing `s[i:j:k]`** (inkl.
  `s[::-1]`).

**2. Datastrukturer:**
- **Lister:** `append`, `insert`, `pop`, `remove`, `index`, `sort`, `reverse`,
  indeksering, `len`, **nøstede/2D-lister (tabeller)** — den sentrale strukturen.
- **Ordbøker:** `d[k]`, `if k in d`, `d[k]=v`, `d.get(k, default)`, `d.keys()`,
  `d.values()`, `d.items()`; ordbok som teller/gruppering.
- **Tupler:** `tuple(...)`, parallelle tupler, pakking/utpakking (`return a, b`).
- **Strenger:** `.split(sep)`, `.strip()`/`.strip(char)`, `.join(list)`, `.replace`,
  `.find`, `.upper`/`.lower`, `.isdigit`/`.isalpha`/`.isalnum`, `.rjust`/`.ljust`/
  `.center`, indeksering/slicing, bygging med `+`.
- `print(...)` (flere argumenter → mellomrom; `end=`).

**3. Funksjoner:**
- `def navn(par):`, `return` (også flere verdier), funksjoner som kaller/gjenbruker
  hverandre, default-argumenter (`def f(x='a')`).

**4. Filbehandling:**
- `open(filename, mode)` (`'r'`/`'w'`/`'a'`), `for line in f`, `.readline`/`.readlines`/
  `.read`, `.write`, `.close`; **binærmodus + `pickle.dump`/`pickle.load`**.

**5. Kontroll/robusthet:**
- `try: … except: … [else/finally]:` — særlig rundt filoperasjoner.
- `input()` og `int(input(...))`; **input-valideringsløkke**.

**6. Bibliotek (leveres/importeres ved behov):**
- `random.randint`, `random.choice`; `time.sleep`; `datetime` (gis som hjelpefunksjon
  ved dato-diff); `math` sjelden.

**7. Kodemønstre å automatisere:**
- *Les fil → 2D-tabell:* `for line in f: table.append(line.strip().split(sep))`.
- *Teller med ordbok:* `d[k] = d.get(k, 0) + 1`.
- *Finn beste:* `beste = None; besteVerdi = 0; if verdi > besteVerdi: oppdater`.
- *Gruppér:* bygg `{nøkkel: [elementer]}` ved å slå opp og `append`e.
- *Boblesortering* for hånd (bytt naboer til ingen bytter gjenstår) — eller bruk `.sort`/
  gitt `sort_list`.
- *Input-løkke til gyldig verdi* med feilmelding.
- *Rekursjon:* grunntilfelle + `return f(n-1)`-steg.

### Bør kjenne til (differensierer)
- **Binærsøk** (iterativt, `imid=(imin+imax)//2`) og forskjellen fra sekvensielt søk.
- **Algoritmekompleksitet / Big-O** som teori (binærsøk O(log n), brute force).
- **`format(verdi, spesifikator)`** for tallformattering.
- **Toer-komplement, flyttallsrepresentasjon** (teori).

### Utenfor TDT4110-eksamen (2014–2019)
- **Klasser, `__init__`, arv, objektorientering** — TDT4110 er rent prosedyreorientert.
  (Dette er den store forskjellen mot UiOs IN1000/IN1010.)
- **NumPy/Matplotlib/plotting/ODE** — ikke i arkivet (men se pensummerknad i seksjon 1:
  nyere pensum kan ha lagt til NumPy/Matplotlib — `verifiser`).
- **Lenkede strukturer, iteratorer, generatorer, dekoratorer, tråder.**

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (avgjør karakteren)
1. **Programmeringskjeden (~50–60 %)** — les fil → bygg 2D-tabell/ordbok → analysér
   (finn maks/tell/gruppér/sortér) → skriv ut/lagre, med gjenbruk av egne funksjoner,
   input-validering og `try/except`. 100 % frekvens, over halve eksamen.
2. **Kjernemønstrene i koding** — funksjoner, løkker/betingelser, lister/2D-lister,
   strenger (`split`/`strip`/`join`/slicing), ordbøker (`d.get`), datatype-konvertering,
   filbehandling. Alle 100 % frekvens.
3. **Teori/flervalg (~25 %)** — maskinvare, tallrepresentasjon, nettverk, sikkerhet,
   komprimering/sampling. Billige, hyppige poeng; ingen minuspoeng → kryss alltid.
4. **Kodesporing** — «hva skrives ut/returneres» for løkker, rekursjon, boolsk logikk,
   slicing, dict-telling.

### Nivå 2 — må kunne (differensierer)
5. **«Forklar med én setning hva funksjonen gjør»** — presist og kort.
6. **Fyll-inn-kodelinje** (velg riktig `range`/betingelse/indeks).
7. **Input-validering og meny-/main-løkke.**
8. **Sortering for hånd** (boblesortering) og bruk av gitt `sort_list`.
9. **Formatert utskrift** (`rjust`/`ljust`/`center`, nullpadding, tidsformat).
10. **Rekursjon** (fakultet, gcd, Fibonacci) — både spore og skrive.

### Nivå 3 — bør kjenne til (toppkarakter / robusthet)
11. **Binærfil/`pickle`**, unntakshåndtering rundt fil-I/O.
12. **Binærsøk + algoritmekompleksitet/Big-O** (teori og enkel implementasjon).
13. **Systemutvikling/prosessmodeller** (teori — tungt 2014–2017, kan komme igjen).
14. **`random`, `time.sleep`, tupler, default-argumenter.**

### Prognose for neste eksamen

**Svært sannsynlig samme tredelte struktur:**
- **Oppgave 1 (teori, ~25 %):** ~20 flervalg om maskinvare, tallrepresentasjon, nettverk,
  sikkerhet, komprimering/sampling — muligens med gjeninntog av systemutvikling/algoritme-
  kompleksitet, og mulige nye punkter om KI/etikk og NumPy dersom pensum er oppdatert.
- **Kodeforståelse (~15–20 %):** 4–6 deloppgaver — «hva skrives ut/returneres» (løkker,
  rekursjon, boolsk logikk, slicing, dict), noen «forklar hva funksjonen gjør», noen
  «fyll inn kodelinje».
- **Programmering (~50–60 %):** én til to oppgaver i et nytt domene — kjede av 5–8
  funksjoner: `read_file` → parsing → tabell/ordbok → analysefunksjoner (finn/tell/
  gruppér/sortér) → input/meny → utskrift/lagring, med gjenbruk og `try/except`.

Domeneinnpakningen (reisetid, valg, priskrig, auksjon, oppskrifter …) roterer;
**programmeringsøvelsen bak er den samme hvert år.**

**Konsekvens for boka:** Bygg kjernen rundt (1) de sju 100 %-kodetemaene — funksjoner,
løkker, lister/2D-tabeller, filbehandling, strenger, kodesporing, konvertering — vist i
sensors enkle, eksplisitte prosedyrestil, (2) en fullt gjennomarbeidet **mal for
programmeringskjeden** (les fil → tabell/ordbok → analysér → skriv/lagre) med rikelig
øving på gjenbruk og robusthet (ukjent kolonnerekkefølge, tomtilfeller, ingen duplikater),
(3) en solid **teoridel** som dekker maskinvare, tallrepresentasjon, nettverk, sikkerhet,
komprimering/sampling og systemutvikling/algoritmer — med flervalgstrening, og (4)
egne kapitler for de distinktive NTNU-sjangrene: **kodesporing med «forklar hva
funksjonen gjør»**, **fyll-inn-kodelinje**, og **rekursjon**. Boka trenger **ikke** OOP/
klasser (utenfor pensum), men bør trene tupler, `pickle`/binærfil og input-validering.

### Sammenligning: TDT4110 (NTNU) vs. IN1000 og IN1900 (UiO)

| | **TDT4110 (NTNU)** | **IN1000 (UiO)** | **IN1900 (UiO)** |
|---|---|---|---|
| **Språk** | Python | Python | Python |
| **Paradigme** | **Rent prosedyreorientert** (funksjoner) | Enkel **objektorientering** (klasser) | Prosedyre + noe OO (numerikk) |
| **Teoridel** | **Stor (~25 %): maskinvare, nettverk, sikkerhet, tall, komprimering, systemutvikling** | Ingen (droppet etter INF1001) | Liten (om programmering) |
| **Stor oppgave** | **Kjede funksjoner** over et domene (fil→tabell→analyse→utskrift) | **Klassemodellering** fra spesifikasjon | Numeriske funksjoner/klasser |
| **Datastruktur** | Lister/**2D-tabeller**, ordbøker, tupler | Lister, dict **av objektreferanser** | Lister, dict, **NumPy-arrays** |
| **Særpreg** | Teoribredde, «forklar hva funksjonen gjør», fyll-inn-linje, rekursjon, binærsøk, `pickle` | Referansesemantikk, `self`, filinnlesing, modellering | **NumPy, plotting, rekker, ODE-løsere** |
| **Eksamen** | Ett 4-t-sett; teori + kodeforståelse + koding | Ett 4-t-sett; ~85 % koding | Midtveis (MC) + avsluttende |

**De viktigste NTNU/UiO-forskjellene:**
1. **TDT4110 har en stor teoridel om datamaskinens virkemåte** (maskinvare, nettverk,
   sikkerhet, tallsystemer, komprimering, sampling, systemutvikling) — ~25 % av
   karakteren. **IN1000 har ingen slik teoridel** (den forsvant med INF1001-æraen), og
   IN1900s teori er om programmering, ikke datateknologi. Dette er den største forskjellen.
2. **TDT4110 er rent prosedyreorientert — ingen klasser.** IN1000 er ~halvparten
   OO-klassemodellering. TDT4110s «store oppgave» er en **kjede funksjoner**, ikke en
   klassemodell; datastrukturen er **2D-lister og ordbøker**, ikke ordbøker av
   objektreferanser. Faglig ligger TDT4110 dermed nærmere **IN1900** enn IN1000 på
   kodesiden.
3. **TDT4110 tester rekursjon, binærsøk, sortering og algoritmekompleksitet eksplisitt**
   (både i kodesporing og teori). IN1000 nedtoner rekursjon; algoritmeteori mangler.
4. **TDT4110 har egne sjangre UiO-emnene mangler:** «forklar med én setning hva
   funksjonen gjør», «fyll inn manglende kodelinje (velg alternativ)», og
   teori-flervalg. IN1000s objekt-/referanseflervalg (`self`, scope) finnes ikke i
   TDT4110 fordi emnet ikke har OOP.
5. **Felles grunnmur:** kodesporing, løkker/betingelser, funksjoner, lister/ordbøker,
   strenger, filbehandling og input-validering er felles for alle tre. En student som
   har tatt IN1900 har det meste av TDT4110s kodegrunnmur (men mangler teoridelen); en
   IN1000-student må «avlære» OO-refleksen og lære den brede datateknologi-teorien.
6. **TDT4110 tillater og bruker snarveier** (`max`/`min`/`sum`/`sorted`/`index`) i fasit,
   mens IN1000-fasit bevisst teller manuelt for å trene grunnkonstruksjonene. TDT4110 er
   mer pragmatisk «få jobben gjort».

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TDT4110/`.
Arkivet dekker 2014–2019: 10 eksamenssittinger + 7 løsningsforslag, 17 PDF-filer.

**Løsningsforslag lest grundig** (faglærerskrevne, vernet — fasitkilde, aldri gjengitt)**:**
- `tdt4110-19K-LF.pdf` (K2019 — full fasit for teori 1–20, kodeforståelse 2a–2f, og
  komplett kode for programmeringsdelen «Restauranthjelp»; varsler f-strenger inn i
  pensum).
- `tdt4110-17H-LF.pdf` (H2017 — fasit teori + kode: fartsmåling/speeders med
  `date_diff`, generér reg.nr., tidevann/`genTides` med formatert utskrift).
- `tdt4110-17K-LF.pdf` (K2017 — priskrig `file_to_list`/`rank_stores` med boblesortering,
  storskjerm `enter_line`/`scroll_display`, kodeforståelse med «forklar»-svar).
- `tdt4110-16H-LF.pdf` (H2016 — flervalg 1–25, kodeforståelse med matrise/rekursjon,
  «Valg» med 2D-liste + `sumDelegates`, «Penger» tall-til-tekst med dict/gjenbruk).
- `tdt4110-16K-LF.pdf` (K2016 — binærkoding `bin_to_dec`/`bin_to_txt`, allidrett
  `laginndeling` med `random`, kodeforståelse: gangetabell/transponering/fakultet).
- `tdt4110-15H-LF.pdf` (H2015 — reisetid `readTime`/`convertTime`, sensur/karaktersetting
  med tupler + filskriving, kodeforståelse med rekursjon/strengsteg).
- `tdt4110-15K-LF.pdf` (K2015 — Yatzy-terninger med `random`, vitneobservasjoner av biler
  med dict fra fil + `match`, kodeforståelse).

**Oppgavesett lest grundig:**
- `tdt4110-18H-1.pdf` og `tdt4110-18H-2.pdf` (H2018, to varianter samme dag — nyeste
  fullstruktur: teori 20 spm, kodeforståelse 2a–2f inkl. binærsøk/rekursjon,
  programmering «Flerkamp»/«Auksjonshjelp» med 2D-lister, meny og `pickle`).
- `tdt4110-19K.pdf` (K2019 oppgavetekst).

**Skumlest for form- og temaregistrering:**
- `NTNU_TDT4110.pdf` (H2014, nynorsk — bekrefter −½-minuspoeng-æraen og tung
  systemutviklings-/prosessmodell-teori), `tdt4110-15H.pdf`, `tdt4110-15K.pdf`,
  `tdt4110-16H.pdf`, `tdt4110-16K-bm.pdf`, `tdt4110-17H.pdf`, `tdt4110-17K.pdf`.

**Merknader om kildene:**
- **Bildebaserte kodesnutter:** Kodeblokkene i kodeforståelsesoppgavene (og enkelte
  kildefiler i programmeringsdelen) ligger som **bilder** i PDF-ene og ga ingen tekst ved
  uttrekk. De er dekket indirekte via løsningsforslagenes fasitsvar og forklaringer, som
  gjengir både resultat og funksjonens formål.
- **Struktur- og temaskifte:** Formen (teori + kodeforståelse + programmering, 4 t, kode
  D) er stabil 2014–2019. Rekkefølgen på kodeforståelse (Oppgave 2 eller 4) varierer.
  Teoriinnholdet dreide fra systemutvikling/algoritmekompleksitet (2014–2017) mot
  nettverk/sikkerhet/maskinvare (2018–2019). Minuspoeng på flervalg forsvant etter 2014.
- **Pensumutvikling etter 2019:** NTNUs gjeldende emnebeskrivelse nevner NumPy/Matplotlib
  og KI som kodehjelp, samt f-strenger — ikke belagt i arkivet. Analysen speiler
  2014–2019; nyere tillegg bør `verifiseres mot gjeldende pensum` ved bokbygging.
- **Fagbeskrivelse:** omskrevet sammendrag av NTNUs emnebeskrivelse for TDT4110
  (scratchpad: `fagbeskrivelse-tdt4110.md`).
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er
  parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasiter er
  gjengitt ordrett; kodemønstrene er standard Python-idiomer.
