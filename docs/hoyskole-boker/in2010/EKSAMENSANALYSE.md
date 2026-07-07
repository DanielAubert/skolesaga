# Eksamensanalyse: IN2010 Algoritmer og datastrukturer (UiO)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på UiOs eksamensarkiv for **IN2010** (høst 2018 – høst 2024, 7 sett med **offisielle sensorveiledninger**) og forgjengeremnet **INF2220** (2015–2017, med løsningsforslag), samt UiOs emnebeskrivelse. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller løsningsforslag. Analysen er kvantitativ der kildene tillater det.
>
> IN2010 er UiOs motstykke til NTNUs **TDT4120**. Faget dekker samme kjernefelt (algoritmer og datastrukturer), men **eksamensform, pensumvekting og notasjonsapparat er markant forskjellige**. Forskjellene er notert løpende og oppsummert i sammendraget nederst. Der TDT4120-analysen finnes som søsterdokument (`../tdt4120/EKSAMENSANALYSE.md`), refereres den for kontrast.

---

## 1. Eksamensform og utvikling

### Grunnform (gjeldende, 2021–2024)

**Digital skoleeksamen i Inspera, 4 timer, ingen hjelpemidler.** Karakterskala **A–F**, teller 100 %. Obligatoriske innleveringer må være godkjent for å gå opp. Alt — også pseudokode — skrives inn i Inspera; **ingen opplasting av håndskrevne svar**. En engelsk oversettelse av oppgavesettet legges alltid ved.

Eksamen har en **fast tredeling** som har vært stabil siden 2021:

1. **Oppvarming (2 poeng):** «Hva er en algoritme?» og «Hva er en datastruktur?», maks fire setninger hver. Sensorveiledningen sier eksplisitt at det **ikke** finnes et fasitsvar — «alle rimelige svar gir full uttelling». Dette er gratispoeng som kun tapes ved å la stå blankt eller skrive noe direkte feil. Gjentas ordrett hvert år.
2. **Del 1 — mange små, automatisk rettede oppgaver:** «sant/usant» og korte svar (ett tall, ett uttrykk, en kort liste). Dekker fakta om kjøretid, sortering, heap, hashing, grafer, NP og balanserte trær, samt små håndkjøringer.
3. **Del 2 — færre, større oppgaver** der man skal **programmere (pseudokode), skrive og resonnere**. Dette er der karakteren avgjøres.

### Antigjettings-skalering — en definerende egenskap

Del 1 rettes automatisk, og **det gjøres ingen forskjell på ubesvart og feil svar** på de vanlige korte svarene — så det lønner seg alltid å svare. På sant/usant-blokkene korrigeres det for gjetning ved å skalere summen slik at ren tilfeldig gjetting i snitt gir **null**:

| År | Skaleringsformel Del 1 | Merknad |
|---|---|---|
| H2019 | −1 poeng for feil/ubesvart på 1d, 1e | Kun enkelte flervalg straffes |
| H2021 | −1 for feil eller ubesvart på sant/usant-blokker; kan ikke gå under 0 | |
| H2023 | `2 · max(n − 16, 0)`, n = antall riktige (av 32) | 16 riktige = 0 poeng, alt rett = 32 |
| H2024 | `2 · max(n − 11, 0)`, n = antall riktige (av 22) | 11 riktige = 0 poeng, alt rett = 22 |

**Konsekvens for læreboken:** studenten må kunne fakta *sikkert*, ikke bare gjenkjenne dem — halvparten riktig gjetning gir null. Samtidig lønner det seg alltid å svare på ikke-strafferammede korte svar. Dette er en annen incentivstruktur enn TDT4120, som ikke skalerer for gjetning.

### Eksplisitt poenglogikk på implementasjonsoppgaver (Del 2)

Sensorveiledningene er svært konsekvente på tre ting, gjentatt hvert år:

- **«Lavere kjøretidskompleksitet er mer poenggivende.»** Poengtrappen er ofte eksplisitt: en O(n)-løsning gir f.eks. 8 p, O(n log n) 5 p, O(n²) 2 p **på samme oppgave**. Å velge riktig algoritme = å velge poeng.
- **Oppgitt kjøretid må stemme med algoritmen man faktisk ga.** Det trekkes for manglende kompleksitet, feil kompleksitet, og for å bruke `n` uten å definere hva `n` er.
- **En klar naturlig-språk-forklaring kan gi like mye (eller mer) enn rotete pseudokode.** Kravet er at svaret er «lett forståelig, entydig og presist». Antagelser om representasjon (at en node har `left`/`right`/`x` osv.) skal oppgis.

### Historisk utvikling — tre epoker

Faget har gått gjennom en tydelig transformasjon. Læreboken må bygges mot **epoke 3**, men eldre sett er verdifulle som oppgavebank (med forbehold).

| Epoke | År | Emnekode | Form | Representativ? |
|---|---|---|---|---|
| **1 — INF2220-arven** | 2015–2017 | INF2220 | Skoleeksamen, **alle hjelpemidler**. **Java-kode kreves** (pseudokode gir 0 der Java bes om). Store, tungt vektede frisvarsoppgaver. Faglærere Ingrid Chieh Yu, Arne Maus, Dino Karabeg. Pensum ≈ Weiss. Egne temaer: **Shell sort, string matching (good suffix / Boyer-Moore), utvidbar hashing, Floyd-Warshall, branch and bound, rød-svarte trær**. | Nei — annen form, delvis annet pensum |
| **2 — overgang** | 2018–2019 | IN2010/INF2220 (samkjørt) | Skoleeksamen, **ingen hjelpemidler** (H2018/H2019). Fortsatt **Java-kode** i deler (heapSort/downHeap i H2019). H2019 innfører moderne tredeling (Del 1 auto-rettet 30 %, Del 2 grafer 45 %, Del 3 heap 25 %) og negative poeng på flervalg. | Delvis — form nærmer seg dagens, men Java-krav er borte i dag |
| **3 — moderne IN2010** | 2021–2024 | IN2010 | Digital Inspera, ingen hjelpemidler, **pseudokode** (ikke Java). Fast oppvarming + Del 1 (auto, antigjetting) + Del 2 (pseudokode + resonnement). Svært stabil. | **Ja (gjeldende form)** |
| *unntak* | H2020 | IN2010 | **Korona-hjemmeeksamen, alle hjelpemidler.** Blanding av flervalg, tekst og kode; bokstavkarakter; kontrollsamtaler mot fusk. | **Nei** — hjemmeeksamen, ikke representativ for form/vekting |

**H2020 er merket separat:** som TDT4120s korona-sett er den en god oppgavebank (mange fine grafoppgaver, NP-verifikator, HTML-tag-matching med stack), men formatet (alle hjelpemidler, bredere oppgaver) speiler **ikke** ordinær eksamen. Studenten må i dag kunne alt **uten oppslagsverk**.

### Struktur- og vektingsprofil (epoke 3)

- **Oppvarming:** 2 p (fast).
- **Del 1:** typisk 20–35 poeng fordelt på mange 1-poengs sant/usant + noen 2-poengs håndkjøringer/matriseavkryssinger.
- **Del 2:** typisk 5–7 større oppgaver à 8–12 poeng. Hver er pakket inn i et konkret scenario (se «figur-univers» under) og har flere deloppgaver (a, b, c …) som stiger i vanskelighet: gjenkjenn strukturen → skriv algoritmen → oppgi kjøretid → resonner om en variant.
- **Rekkefølge:** vanskeligst til slutt; de siste 1–2 oppgavene er nesten alltid **åpen grafmodellering** (SCC, MST, Dijkstra, topologisk sortering) der toppkarakterene skilles.

**Figur-univers (kosmetikk):** oppgavene pakkes inn i konkrete, ofte UiO-nære, historier — Blindern-problemet (tunnelsystem), DNT-rundtur, «dependency hell» (bibliotekavhengigheter), Whops!-oppgjør (Vipps-parodi), garbage collection, auto-complete, Python 3.6-ordbøker, jazz vs. klassisk. Kjernen er alltid en pensumalgoritme; historien er innpakning. (TDT4120 bruker tilsvarende stedsnavn som Lurvik/Smartnes.)

---

## 2. Temafrekvens

Basert på de **7 IN2010-settene 2018–2024** (H2020 medregnet, men markert). Celleverdi = antall sett der temaet forekommer i minst én oppgave. Fordi et sett har mange likt vektede Del 1-punkter pluss 5–7 Del 2-oppgaver, treffer kjerneområdene nesten hvert år; **gjenganger-scoren måler bredde/sikkerhet, ikke vekt**.

| Tema | 2018 | 2019 | 2020* | 2021 | 2022 | 2023 | 2024 | **Score** |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|---|
| **Asymptotisk notasjon / kjøretidsanalyse** (O-notasjon, kode→O, kjøretidsfakta) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **7/7 = 100 %** |
| **Sortering** (stabilitet, in-place, invarianter, bucket/counting/radix vs. sammenligningsbasert) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **7/7 = 100 %** |
| **Hashing / lukket hashing (linear probing)** (håndkjøring, implementasjon, rehash, load-faktor, hashmap/-set) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **7/7 = 100 %** |
| **Grafrepresentasjon & traversering** (BFS/DFS, komponenter, sammenheng, nabolister) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **7/7 = 100 %** |
| **Trær — BST, traversering, tre-rekursjon** (InRange, diameter, LCA, checkBST, path) | ✓ | (·) | ✓ | ✓ | ✓ | ✓ | ✓ | **6/7 = 86 %** |
| **Heap / prioritetskø** (håndkjøring insert/removeMin, krav, implementasjon, PQ-varianter) | ✓ | ✓ | · | ✓ | ✓ | ✓ | ✓ | **6/7 = 86 %** |
| **Korteste vei / avstander** (Dijkstra, BFS uvektet, DAG via topsort, Bellman-Ford-fakta) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **7/7 = 100 %** (men se merknad) |
| **Topologisk sortering / sykeldeteksjon** (Kahn, DAG-egenskaper) | ✓ | ✓ | · | ✓ | (·) | ✓ | ✓ | **5/7 = 71 %** |
| **NP-kompletthet / kompleksitetsteori** (P/NP sant-usant, verifikator, sertifikat, reduksjonsretning) | ✓ | ✓ | ✓ | ✓ | · | · | · | **4/7 = 57 %** ↓ *fallende* |
| **Minimale spenntrær** (Prim/Kruskal/Borůvka, spenntre vs. minimalt) | · | ✓ | ✓ | · | ✓ | ✓ | · | **4/7 = 57 %** |
| **Huffman-koding** (kodelengder, bygge tre, grådig) | ✓ | ✓ | · | ✓ | (fakta) | · | ✓ | **4–5/7 ≈ 64 %** |
| **Drøftingsoppgave** (sammenlign to strategier — kjøretid/minne) | · | · | ✓ | ✓ | ✓ | ✓ | · | **4/7 = 57 %** ↑ |
| **SCC / komponentgraf (kondensasjon)** — *UiO-signatur* | · | ✓ | · | · | ✓ | · | ✓ | **3/7 = 43 %** |
| **Balanserte trær — AVL / rød-svart** (rotasjoner, fargelegging) | ✓ | · | ✓ | · | ✓ | · | · | **3/7 = 43 %** |
| **ADT-design / valg av datastruktur** (mediankø, bøttekø, autocomplete/trie) | · | · | ✓ | · | ✓ | · | ✓ | **3/7 = 43 %** |
| **Binærsøk / søk** (modifisert binærsøk, duplikat) | · | · | ✓ | (·) | · | ✓ | ✓ | **3/7 = 43 %** |

\* H2020 = korona-hjemmeeksamen, ikke representativ for form. `(·)` = temaet er lett berørt (f.eks. et faktaspørsmål) uten egen oppgave.

**Fravær som er like viktige som tilstedeværelser** (kjernetemaer i TDT4120 som er **borte** eller minimale i moderne IN2010):

- **Dynamisk programmering:** i praksis **fraværende** i epoke 3. Ingen memoisering/LCS/ryggsekk-oppgaver. (Dette er en av de tyngste bolkene i TDT4120.)
- **Maks-flyt / Ford-Fulkerson / min-snitt:** **fraværende**. (94 %-gjenganger i TDT4120; null i IN2010.)
- **Rekurrensligninger / masterteoremet:** **fraværende** som oppgavetype (kjøretidsanalyse gjøres ved løkketelling, ikke ved masterteorem).
- **Alle-til-alle korteste vei (Floyd-Warshall):** kun i **INF2220-arven** (2015–2016), ikke i moderne IN2010.
- **Grådighetsbevis / bytteargument, median-av-medianer-select, amortisert analyse, stabil matching (Gale-Shapley):** ikke IN2010-stoff.

**Viktigste funn:**

1. **Fire temaer er 100 %-gjengangere:** asymptotisk analyse, sortering, hashing (linear probing) og grafrepresentasjon/traversering. Disse kommer garantert, ofte i flere oppgaver per sett.
2. **Håndkjøring av datastrukturer er selve ryggraden i Del 1.** De sikreste kandidatene: min-heap-innsetting/removeMin, linear-probing-innsetting, AVL-rotasjoner, Huffman-kodelengder. Studenten må kunne utføre disse **mekanisk og feilfritt** i array-form.
3. **Del 2 er en pseudokode-skriveøvelse, ikke kortsvar.** Dette er den største formforskjellen fra TDT4120: der NTNU skriver «lange svar teller ikke positivt» og ber om ett tall, ber UiO deg **konstruere og skrive ned algoritmen** og forklare den. Grafalgoritmer (DFS/BFS-varianter, SCC, topologisk sortering, Prim, Dijkstra) er de dominerende Del 2-vehiklene.
4. **NP-teori er på retur.** Tungt i 2018–2021 (P/NP-fakta, verifikator, reduksjon), men fraværende i de tre ferskeste settene (2022–2024). Fortsatt pensum, men lav-frekvent på nyere eksamen.
5. **SCC/komponentgraf er en UiO-signatur.** Sterkt sammenhengende komponenter + kondensasjonsgrafen (som er en DAG) brukes gjentatte ganger til reachability-resonnement (start-/sluttnoder = komponent med inn-/utgrad 0). Dette dukker sjelden opp så eksplisitt i TDT4120.
6. **«Drøft to strategier»-sjangeren vokser.** En egen oppgavetype der man sammenligner kjøretid/minne for to gitte fremgangsmåter (hashmap vs. array, trie vs. hashmap, gnome sort vs. pensumsortering). Belønner presis, velskrevet resonnering — ikke pseudokode.

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen. «Krav» oppsummerer sensorveiledningenes foretrukne løsningsmetode og presisjonsnivå.

### A. Oppvarming (fast, 2 p)
- **Krav:** Uformell forståelse av «algoritme» og «datastruktur», maks fire setninger hver. Ingen fasit; alle rimelige svar gir full uttelling. Trekk kun for direkte feil. Gratispoeng.

### B. Kjøretidsanalyse fra kode → O-notasjon (Del 1)
- **Krav:** Tell nøstede løkker. k nøstede løkker over V gir O(nᵏ) (H2019: en femdobbelt løkke → O(n⁵)). Løkker som halverer (`j = j*2`) gir log-faktor. En konstant indre løkke (til fast tall) endrer ikke orden. Poeng gis for riktig orden **selv med syntaksfeil** i pseudokoden. INF2220-varianten krevde også å analysere rekursjon (`proc(n-1)+proc(n-1)` → O(2ⁿ); dobbelt rekursjon oppover → uendelig).
- **Frekvens:** 100 %.

### C. Kjøretids- og teori-fakta (sant/usant, Del 1)
- **Krav:** Rask, sikker faktakunnskap. Typiske faste sannheter sensor forventer:
  - Mergesort er O(n log n); «lineær kjøretid» = O(n); et array kan sjekkes sortert i O(n); binærsøk er raskere på array enn på lenket liste; bedre asymptotisk kompleksitet betyr **ikke** færre steg for *all* input.
  - **Heap:** array kan bygges til heap i O(n); innsetting O(log n) verste tilfelle; over halvparten av elementene ligger på de to dypeste nivåene; man kan **ikke** finne største element i en min-heap i O(log n); et AVL-tre kan brukes som PQ med samme orden som en heap; en min-heap blir **ikke** en max-heap ved å reversere arrayet.
  - **P/NP:** `P ⊆ NP` (sant); alle NP-komplette problemer er polynomtidsreduserbare til hverandre (sant); «JA-instanser verifiserbare i polytid» ⇔ i NP (sant); det er **ikke** bevist verken `P = NP` eller `P ≠ NP` (begge usant); å løse ett NP-komplett problem (Hamiltonsykel/Knapsack/Sudoku) i polytid ⇒ `P = NP` (sant); **ikke** alle avgjørelsesproblemer er i P eller NP (usant).
- **Frekvens:** 100 % (fordelt på flere punkter per sett).

### D. Sorteringsegenskaper og -valg (Del 1)
- **Krav:** **Stabilitet** (bevarer intern rekkefølge på like nøkler), **in-place**, og invarianter etter *i* iterasjoner: Bubble får de *i siste* på plass, Selection de *i første* endelig sortert, Insertion de *i første* (men ikke endelig sortert). Selection garanterer minimalt antall **bytter**; Bubble/Insertion bytter kun naboer. **Valg av algoritme ut fra begrensning:** kjent, liten verdimengde (alder ≤ 100, N kategorier) ⇒ **bucket/counting/radix sort** (lineær tid); krav om stabilitet ⇒ unngå ustabile. **Bucket/radix kan ikke** brukes på generelle sammenlignbare elementer (kun når man vet noe om verdiområdet). Gnome sort (H2023, ukjent algoritme): gjenkjenn slektskapet med Insertion sort — kvadratisk, stabil, in-place, men flere sammenligninger.
- **Frekvens:** 100 %.

### E. Håndkjøring av datastrukturer (Del 1, 2 p per stk.)
- **Krav:** Utfør nøyaktig og oppgi **kun** slutt-tilstanden (typisk array-representasjonen som kommaseparert liste). Repertoar:
  - **Min-heap innsetting** (H2023): legg på indeks *n*, sift-up mot forelder `⌊(i−1)/2⌋` mens barnet er mindre. **RemoveMin** (H2021): flytt siste til rot, downHeap. Oppgi array-tilstanden.
  - **Linear probing innsetting** (H2020, H2022): `h(k) = k mod N`, lineær probing ved kollisjon, `_` for tom plass. Oppgi hele tabellen.
  - **AVL-innsetting med rotasjoner** (H2020, H2022): tell enkle rotasjoner (dobbelrotasjon = to enkle), oppgi rotverdi etter innsetting, si om resultatet er et AVL-tre. **Alle AVL-trær kan fargelegges som rød-svart** (H2022).
  - **Huffman-kodelengder** fra frekvenstabell (H2021, H2024): bygg treet mentalt, oppgi kodelengde per symbol / antall bits for en streng.
- **Frekvens:** minst én per sett; heap og linear probing hyppigst.

### F. Matrise-/tabellavkryssing: koble egenskap til algoritme (Del 1)
- **Krav:** Faste mønstre. **Korteste avstander etter graftype** (H2019, H2021): uvektet → **BFS**; vektet DAG → **topologisk sortering**; ingen negative kanter → **Dijkstra**; ingen negative sykler → **Bellman-Ford**. **Kjøretid per grafalgoritme** (H2022): DFS-full O(V+E); Prim O((V+E)·log V); TopSort O(V+E); Bellman-Ford O(V·E). **MST-gjenkjenning** (H2019): Borůvka, Kruskal, Prim finner minimale spenntrær; **BFS/DFS gjør det ikke** (finner spenntre, men ikke minimalt). **Grafegenskaper** (H2022): sammenhengende / 2-sammenhengende / tre / sykel / enkel graf per graf.
- **Frekvens:** ~4/7; kjernen i Del 1s grafdel.

### G. Tre-algoritmer i pseudokode (Del 2)
- **Krav:** Skriv en effektiv rekursiv prosedyre; oppgi antagelser om node (`v.left`, `v.right`, `v.element`/`v.x`). Lavere kjøretid = mer poeng.
  - **InRange / intervallutskrift i sortert rekkefølge** (H2021): in-order med **beskjæring** — rekursér venstre kun hvis `a < v.x`, skriv hvis `a ≤ v.x ≤ b`, rekursér høyre kun hvis `v.x < b`. O(log n + antall treff); O(log n) når `a = b`. Naiv full traversering O(n) gir klart færre poeng.
  - **Diameter av binærtre** (H2023): **én DFS** som returnerer subtre-høyde; lengste sti gjennom en node = `hL + hR + 2`; hold global maks. **Lineær O(n)** = full uttelling (8 p), kvadratisk = halv (5 p). Ikke anta at lengste sti går gjennom rota.
  - **Laveste felles forfeder** (H2024): generelt tre med `parent`/`depth` — løft den dypeste noden til lik dybde, deretter begge oppover, O(h). BST-variant: hvis `x ≤ v.element ≤ y` er `v` svaret; ellers gå venstre/høyre, O(h) (O(log n) balansert).
  - **Sjekk om binærtre er BST** (H2022): oppgi først BST-egenskapen (hver node > alt i venstre subtre, < alt i høyre); deretter O(n)-løsning (send ned `[low, high]`-intervall, eller in-order + sjekk sortert). Naiv `FindMin`/`FindMax` per node = O(n²) og halv uttelling.
- **Frekvens:** ~6/7.

### H. Grafalgoritmer i pseudokode (Del 2 — kjernen i faget)
- **Krav:** Gjenkjenn det klassiske problemet, kall pensumalgoritmer, oppgi kjøretid. Dokumenterte mønstre:
  - **MST-modellering** (Blindern, H2023): «koble alt sammen billigst» på komplett vektet urettet graf = **minimalt spenntre**, bruk **Prim** med prioritetskø, O(E log V) = O(V² log V) for komplett graf. Etterpå: korteste sti *i det ferdige treet* med **BFS/DFS O(V+E)** — Dijkstra er «ikke veldefinert» her (vekter = byggekostnad, ikke avstand) og gir færre poeng.
  - **Sykeldeteksjon i rettet graf** (dependency hell, H2023): foretrukket **topologisk sortering (Kahn)** — noder med inngrad 0 på stack, plukk av, reduser naboers inngrad; syklisk hvis ikke alle prosesseres. O(V+E). Alternativ: SCC (sykel ⇔ komponent > 1 node) eller modifisert DFS med tilstander (uoppdaget/under prosessering/ferdig).
  - **SCC / komponentgraf** (H2019, H2022, H2024): finn sterkt sammenhengende komponenter (pensumalgoritme, O(V+E)); komponentgrafen er en **DAG** (kjent, trenger ikke bevises). Brukes til: finn rundturer (komponenter > 1 node); minimal forside (antall komponenter med inngrad 0); reachability (start-/sluttnoder).
  - **Avgrenset / lagvis traversering** (H2024): «send invitasjoner lagvis» ⇒ **BFS**; «tell innenfor k venneledd» ⇒ traversering som **stopper ved dybde k** (ikke full traversering).
  - **Dijkstra på revidert/reversert graf** (H2024): «hvilket utgangspunkt er nærmest t?» — kjør Dijkstra **fra t i den reverserte grafen** (én kjøring) i stedet for fra hvert startpunkt (|U| kjøringer). Samme orden som én Dijkstra: O((V+E)·log V). Alternativ: legg til supernode med 0-kanter.
  - **2-fargelegging / bipartitt** (H2021): DFS/BFS som flipper farge per rekursivt kall; konflikt ⇒ umulig. Fungerer fordi hvert fargevalg tvinges av forelderen i DFS-treet.
  - **Komponent-basert resonnement** (Whops!, H2021; garbage collection, H2022): DFS fra rot-mengde, deretter sjekk/frigjør per komponent. O(V+E).
- **Frekvens:** hvert sett har minst én; typisk 2–3 i Del 2.

### I. Hashing / søk i pseudokode (Del 2)
- **Krav:**
  - **Linear-probing-innsetting** (H2022): start på `h(k, N)`, prøv neste `(i+1) mod N` ved kollisjon, overskriv ved lik nøkkel. Trekk for indeks utenfor `0..N−1` og for feil bruk av hashfunksjon.
  - **Finn duplikat** (H2023): sortert ⇒ **modifisert binærsøk** O(log n) (nevn eksplisitt at binærsøket må modifiseres til å returnere indeks); usortert ⇒ **hash-set/-map** for O(n) forventet, eller sortér (merge/heap/quick — **ikke** bucket/radix) og skann. Lineær skann gir også poeng; kvadratisk minst.
  - **Finn par som summerer til x** (H2021): sortert ⇒ to-pekere O(n); usortert ⇒ hash-set O(n) forventet, eller radix-sortér først.
  - **Rehash / load-faktor** (H2024): rehash utløses av at load-faktor `n/N` blir for høy; doble arrayet og reinnsett alt.
- **Frekvens:** ~7/7 (hashing er 100 %-gjenganger på tvers av Del 1 og Del 2).

### J. Abstrakt datatype-design (Del 2)
- **Krav:** Velg og kombiner strukturer, forklar operasjonene, oppgi kjøretid.
  - **Mediankø** (H2024): **to heaps** — max-heap for nedre halvdel, min-heap for øvre; hold dem (nesten) like store; median = toppen av max-heap. O(log n) per operasjon.
  - **Bøttekø** (H2022): array av bøtter (lenkede lister) indeksert på prioritet 0..N−1; insert O(1), removeMin skanner til første ikke-tomme bøtte, O(N) = O(1) når N konstant. En heap-basert løsning gir maks 4 p.
- **Frekvens:** ~3/7, økende.

### K. Drøft to strategier (Del 2 — «mest skjønn»)
- **Krav:** Sammenlign to gitte fremgangsmåter på **kjøretid (verste + forventet) og minne**, med rimelige antagelser og en klar konklusjon om når hver lønner seg. Sensorveiledningen kaller dette «oppgaven der sensor må bruke mest skjønn». Belønner velskrevet, presis tekst med referanse til O-notasjon.
  - Eksempler: hashmap (O(n) forventet, O(n²) verste) vs. tellearray (O(n+k), sårbar for stor k) (H2021); trie vs. hashmap for autocomplete — minne vs. oppslagshastighet (H2022); gnome sort vs. pensumsorteringer (H2023); ordbok-skann vs. sortert-anagram-hashmap (H2020).
- **Vanlig trekk:** å snakke om «n» uten å definere det (−3 p i H2020), eller å ikke referere til O-notasjon i det hele tatt.

### L. NP-kompletthet (Del 1 + Del 2, fallende)
- **Krav:** P/NP-fakta (se C). **Verifikator** (H2020): skriv en polynomisk prosedyre som sjekker et sertifikat (f.eks. at et array av noder utgjør en Hamiltonsykel — sjekk at etterfølgende par, inkludert siste→første med `mod N`, er kanter). At en verifikator kjører i polytid ⇒ problemet er i NP. **Reduksjonsretning** (H2018): `A ≤ₚ B` betyr «A reduseres til B» og at **B er minst like vanskelig**; for å vise at et problem er vanskelig, redusér **fra** et kjent vanskelig problem (Hamiltonsykel) **til** det. Godt beskrevet kan gi full uttelling selv om reduksjonen «går feil vei».
- **Frekvens:** 4/7 (tungt 2018–2021, fraværende 2022–2024).

---

## 4. Sensorens krav

### Faste metaregler (gjentas nesten ordrett hvert år)
1. **«Les oppgaveteksten svært nøye.»** Det mest gjentatte tipset. Svar på nøyaktig det som spørres om.
2. **Oppgi kjøretidskompleksitet — og la den matche algoritmen du faktisk ga.** Trekk for manglende/feil kompleksitet, og for `n` uten definisjon.
3. **Lavere kjøretid = mer poeng**, med eksplisitt poengtrapp (O(n) > O(n log n) > O(n²) på samme oppgave). Å velge riktig struktur *er* poengene.
4. **Klar naturlig-språk-forklaring kan gi like mye som — eller mer enn — rotete pseudokode.** Presisjon og entydighet er kravet, ikke syntaks.
5. **Oppgi antagelser om representasjon.** Grafer kan antas som nabolister/-matrise/objektstil; noder antas å ha de feltene du trenger. Sensor binder seg ikke til representasjon.
6. **Delvis uttelling er regelen**, med eksplisitt poengfordeling per delmoment («2,5 p for prioritetskø ordnet etter frekvens; 1 p for termineringskriterium …»). Ta med hovedmomentet først.
7. **Robust sensur:** uklare eller tvetydige oppgaver tas ut av vurderingen (H2022 grafegenskap-punkt; H2019 delspørsmål) eller tolkes til kandidatens fordel.

### Hva som skiller karakternivåene
- **Bestått (E):** riktige fakta på Del 1 (asymptotikk, sant/usant, håndkjøring), og et fungerende — om enn tregt — Del 2-forsøk med riktig grunnidé.
- **Midtsjikt (C/D):** korrekte håndkjøringer, riktig algoritmevalg og kjøretid på Del 2, men ikke alltid den mest effektive løsningen (f.eks. O(n²) der O(n) var mulig, eller |U| Dijkstra-kjøringer der én reversert holdt).
- **Toppsjikt (A/B):** velger den **laveste** kjøretiden hver gang (lineær tre-diameter, reversert Dijkstra, beskåret in-order, SCC-basert lineær reachability), oppgir korrekt kjøretid som matcher koden, håndterer kanttilfeller (barn finnes i downHeap; binærsøket må modifiseres; k håndteres i avgrenset traversering), og skriver presist nok til at algoritmen kan implementeres direkte fra svaret.

---

## 5. Typiske feil (eksplisitt eller implisitt i sensorveiledningene)

1. **Full/naiv traversering der beskjæring var mulig** — full in-order i InRange (O(n) i stedet for O(log n)); søk fra *hver* node i stedet for én reversert Dijkstra / én SCC-kjøring. Koster halve poengsummen.
2. **Kvadratisk der lineær var mulig** — tre-diameter med høydeberegning per node (O(n²)) i stedet for én DFS (O(n)); checkBST med FindMin/FindMax per node.
3. **downHeap uten å sjekke at barn finnes** — gir maks 10 p (H2019, eksplisitt).
4. **Hevde at binærsøk returnerer indeks uten å nevne at det må modifiseres** — pensums binærsøk returnerer true/false; trekk for å ikke nevne modifikasjonen (H2023).
5. **Bruke bucket/radix sort på generelle sammenlignbare elementer** — bucket/counting/radix krever kjent, begrenset verdiområde; kan ikke brukes når «alt vi vet er at elementene er sammenlignbare» (H2023).
6. **Forveksle DFS fra én node (O(E)) med DFS-full (O(V+E))** i kjøretidsanalysen (H2019, eksplisitt trekk).
7. **Glemme siste kant i syklisk struktur** — Hamiltonsykel-verifikator som ikke sjekker `(C[N−1], C[0])`; syklisk iterasjon uten `mod N` (H2020).
8. **Reversere reduksjonsretningen** — å redusere *til* et NP-komplett problem beviser ingenting om ditt problems vanskelighet; redusér *fra* det vanskelige (H2018).
9. **Forveksle BST-egenskapen med heap-egenskapen** — BST: venstre subtre ≤ node ≤ høyre subtre (venstre–høyre-orden); heap: forelder ≤/≥ *begge* barn (opp–ned-orden, ingen venstre–høyre-orden).
10. **Bruke `n` uten å definere det, eller drøfte «stor ordliste» uten å referere til O-notasjon** — eksplisitt trekk på drøftingsoppgaver (H2020: −3 p).
11. **Linear probing som går utenfor `0..N−1`, eller ikke overskriver lik nøkkel** — eksplisitte trekk (H2022).
12. **Uklar/lang pseudokode** — «en setning man ikke forstår etter to gjennomlesninger ignoreres» (gjentatt formulering).

---

## 6. Notasjons- og pseudokodeapparat

**IN2010 bruker IKKE CLRS-navn.** Dette er en vesentlig forskjell fra TDT4120. Pseudokoden er generisk og selvforklarende, med `Procedure`-hoder, Input/Output-spesifikasjon, og norske/engelske operasjonsnavn (`RemoveMin`, `Insert`, `HeapInsert`, `DFSVisit`, `ParentOf`, `StronglyConnectedComponents`). Læreboken bør bruke samme nøkterne stil, ikke CLRS-konvensjonen.

- **Indeksering fra 0.** Array-heap: rot på indeks 0, forelder til `i` er `⌊(i−1)/2⌋`, barn `2i+1` og `2i+2`. (CLRS/TDT4120 indekserer fra 1 med `⌊i/2⌋`.)
- **Asymptotisk notasjon:** hovedsakelig **O** (øvre grense); Ω og Θ nevnes i emnebeskrivelsen, men eksamensoppgavene bruker nesten utelukkende O. Ingen o/ω. Forenkling gjøres ved **løkketelling**, ikke ved masterteorem.
- **Grafer:** `G = (V, E)`; kjøretider skrives `O(|V| + |E|)`, `O((|V|+|E|)·log|V|)`, `O(|V|·|E|)`. Antagelser om representasjon (nabolister/-matrise/objektstil) oppgis av kandidaten.

### Kjernealgoritmer som må beherskes aktivt (kunne utføre for hånd + kjenne kjøretid)

| Bolk | Algoritmer / operasjoner | Nøkkelkjøretider |
|---|---|---|
| **Sortering/søk** | Bubble, Selection, Insertion (invarianter, stabilitet); Merge, Heap, Quick (O(n log n), quick O(n²) verste); Bucket/Counting/Radix (lineær v/kjent verdiområde); binærsøk (modifisert til indeks) | O(n log n) sammenligningsnedre grense; bucket/radix O(n+k) |
| **Datastrukturer** | Min-heap: Insert (sift-up), RemoveMin (down-heap), strukturkrav + ordningskrav; BST-innsetting/traversering (in-order = sortert); AVL-rotasjoner; rød-svart (fargelegging); hashing med linear probing + rehash; hashmap/-set; trie/prefiks-tre; stack/kø; bøttekø | Heap-bygg O(n), insert/removeMin O(log n); hashmap O(1) forventet, O(n) verste; BST balansert O(log n) |
| **Graf — grunnleggende** | BFS, DFS, DFS-full; komponenter; 2-fargelegging; sykeldeteksjon | BFS/DFS-full O(V+E); DFS fra én node O(E) |
| **Graf — videre** | Topologisk sortering (Kahn, inngrad-0-stack); SCC + komponentgraf (DAG); Prim (MST); Kruskal/Borůvka (gjenkjenne); Dijkstra (også på reversert graf); DAG-korteste-vei via topsort; Bellman-Ford (fakta) | TopSort/SCC O(V+E); Prim/Dijkstra O((V+E)·log V); Bellman-Ford O(V·E) |
| **Grådighet** | Huffman (bygg tre via prioritetskø, kodelengder) | O(n log n) |

### NP-teori (kvalitativt)
Klassene **P** og **NP**; **verifikator** og **sertifikat**; at en polynomisk verifikator ⇒ problemet er i NP; `≤ₚ` og **reduksjonsretning** (redusér *fra* det vanskelige problemet); `P = NP`-konsekvensen; at det ikke er avgjort om `P = NP`. Navngitte problemer i bruk: **Hamiltonsykel, CLIQUE, Sudoku, Knapsack**. Ingen dyp NPC-katalog eller reduksjonskonstruksjon som i TDT4120.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (kommer garantert, flere oppgaver hvert sett)
1. **Asymptotisk analyse fra kode** — 100 %. Løkketelling → O(nᵏ), log-faktor ved halvering, konstant indre løkke. Billige, garanterte Del 1-poeng.
2. **Sortering — egenskaper, kjøretider, valg** — 100 %. Stabilitet, in-place, invarianter (bubble/selection/insertion), når lineær sortering er mulig, bucket/radix-begrensningen.
3. **Hashing / linear probing** — 100 %. Håndkjør innsetting; skriv insert-prosedyren (kollisjon, overskriving, `mod N`); rehash/load-faktor; hashmap/-set for O(n)-løsninger.
4. **Grafrepresentasjon & traversering** — 100 %. BFS/DFS, komponenter, sammenheng; DFS vs. DFS-full i kjøretidsanalysen.
5. **Heap-håndkjøring + fakta** — 86 %. Insert/removeMin i array-form; struktur- vs. ordningskrav; heap-fakta (bygg O(n), min-heap kan ikke gi max i O(log n)).
6. **Kjøretids- og teori-fakta (sant/usant)** — 100 %. Sikker faktakunnskap (antigjetting straffer usikkerhet); korteste-avstander-matrisen (BFS/topsort/Dijkstra/BF).

### Nivå 2 — avgjør C→A (Del 2)
7. **Grafalgoritmer i pseudokode** — hver sett. SCC/komponentgraf, topologisk sortering/sykeldeteksjon, Prim (MST-modellering), Dijkstra (også reversert), avgrenset BFS, 2-fargelegging. **Tren mønstergjenkjenning:** «koble billigst» → MST/Prim; «avhengigheter/sykel» → topsort; «rundturer/reachability» → SCC; «nærmeste kilde» → reversert Dijkstra; «lagvis/innen k ledd» → BFS/avgrenset traversering. Velg **lavest** kjøretid.
8. **Tre-algoritmer i pseudokode** — 86 %. InRange (beskåret in-order), diameter (én DFS, O(n)), LCA (O(h)), checkBST (O(n) intervall). Lineært slår kvadratisk.
9. **Hashing/søk i pseudokode** — modifisert binærsøk, finn duplikat/par via hash, to-pekere på sortert array.
10. **Drøft to strategier** — 57 %, økende. Sammenlign kjøretid (verste + forventet) og minne; definer `n`; konkluder om når hver lønner seg.

### Nivå 3 — bør kunne (lav-frekvent, men differensierer)
11. **Minimale spenntrær** — 57 %. Prim med prioritetskø, spenntre vs. minimalt spenntre, hvorfor BFS/DFS ikke gir MST.
12. **Balanserte trær** — 43 %. AVL-rotasjoner (håndkjøring), rød-svart-fargelegging, AVL som PQ.
13. **Huffman** — ~64 %. Bygg tre via prioritetskø; kodelengder fra frekvenser.
14. **ADT-design** — 43 %, økende. Mediankø (to heaps), bøttekø (array av bøtter), trie.
15. **NP-kompletthet** — 57 %, **fallende**. P/NP-fakta (garantert på Del 1 når det kommer), verifikator, reduksjonsretning. Lavere prioritet enn TDT4120, men fortsatt pensum.

**Prognose for neste ordinære eksamen (epoke 3-form):** oppvarming (2 p, gratis) + Del 1 (auto-rettet, antigjetting) + 5–7 Del 2-oppgaver. Forvent: 1–2 kode→O-oppgaver; 2–3 sorterings-/kjøretidsfakta; 1–2 håndkjøringer (heap + linear probing, muligens AVL/Huffman); en korteste-avstander-matrise; noen graf-fakta; og i **Del 2**: 2–3 grafalgoritmer i pseudokode (minst én SCC/topsort/MST/Dijkstra-variant), 1 tre-algoritme, 1 hashing/søk-oppgave, muligens 1 ADT-design og 1 drøftingsoppgave. NP muligens på Del 1, muligens fraværende. **Studenten som kan håndkjøre datastrukturene feilfritt, kan skrive presis pseudokode for grafalgoritmer, og alltid velger den laveste kjøretiden, scorer høyt.**

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/UiO/IN2010/`.

**Sensorveiledninger lest grundig (IN2010, 7 sett):**
`sensorveiledning/IN2010-H2024-sensorveiledning.pdf` … `IN2010-H2018-sensorveiledning.pdf` (dublett-kopier ligger også i rotmappen som `in2010-hXXXX-sensorveiledning.pdf`). Disse inneholder både fullstendige oppgavetekster og løsningsforslag med eksplisitt poengfordeling, og er analysens primærkilde.

**Oppgavesett (IN2010):** `eksamen/IN2010-H2018.pdf` … `IN2010-H2024.pdf`, brukt til å bekrefte Del 1-format (sant/usant, antigjetting) og oppgavestruktur.

**Forgjengeremne INF2220 (skumlest for temaregistrering og formhistorikk):**
`inf2220-h2015`, `inf2220-h2016`, `inf2220-h2017` (`-eksamen` + `-losningsforslag`). Brukt til å kartlegge epoke 1 (Java-krav, alle hjelpemidler, Weiss-pensum, temaer som Shell sort, string matching / good suffix, Floyd-Warshall, branch and bound, utvidbar hashing) og til å plassere overgangen mot moderne IN2010.

**Fagbeskrivelse:** omskrevet sammendrag av UiOs emnebeskrivelse for IN2010 (scratchpad: `fagbeskrivelse-in2010.md`; kilde: <https://www.uio.no/studier/emner/matnat/ifi/IN2010/>).

**Søsterdokument:** `../tdt4120/EKSAMENSANALYSE.md` (NTNUs motstykke), brukt til systematisk kontrast av form og vekting.

**Merknader om kildene:**
- **Faglærerskifte og formskifte følges ad.** INF2220 (2015–2017): Ingrid Chieh Yu, Arne Maus, Dino Karabeg; Java-kode, alle hjelpemidler, Weiss-pensum. H2018–H2019 (samkjørt IN2010/INF2220): Ragnhild Kobro Runde, Stein Michael Storleer, Ingrid Chieh Yu; overgangsform. Moderne IN2010 (2021–): egen, svært konsistent pseudokode-stil med fast oppvarming og antigjettings-skalering. Analysens form-/vekt-prognose er kalibrert mot **epoke 3 (2021–2024)**.
- **H2020 er korona-hjemmeeksamen** (alle hjelpemidler, bredere oppgaver, bokstavkarakter) og eksplisitt ikke representativ for ordinær form; medregnet i temafrekvensen, men markert.
- **Opphavsrett:** alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller løsningsforslag er gjengitt ordrett. Algoritmenavn, standardnotasjon og kjøretidsuttrykk er allmenn faglig notasjon.

---

## Vedlegg: IN2010 (UiO) vs. TDT4120 (NTNU) — forskjeller i vekting og form

| Dimensjon | **IN2010 (UiO)** | **TDT4120 (NTNU)** |
|---|---|---|
| **Eksamensform** | Oppvarming + Del 1 (auto-rettet sant/usant, **antigjetting**) + Del 2 (**skriv pseudokode + resonner**) | ~20 likt vektede **kortsvar**; «lange svar teller ikke positivt» |
| **Del 2-krav** | Konstruer og skriv ned algoritmen; forklaring belønnes | Ett tall/uttrykk/sluttilstand; minimalt |
| **Notasjon/pensum** | Generisk pseudokode, **ikke CLRS**; heap-indeks fra 0; hovedsakelig **O** (ikke Ω/Θ/o/ω); Weiss-arv | **CLRS** gjennomgående; indeks fra 1; alle fem asymptotiske symboler |
| **Kjøretidsanalyse** | **Løkketelling** | **Masterteoremet** + iterasjons-/substitusjonsmetoden |
| **Dynamisk programmering** | **Fraværende** (epoke 3) | Tung (94 %) |
| **Maks-flyt / Ford-Fulkerson** | **Fraværende** | Tung (94 %), vehikkel for designoppgaver |
| **NP-kompletthet** | Lettere; P/NP-fakta + verifikator + reduksjonsretning; **fallende** | 100 %; dyp reduksjonskonstruksjon + NPC-katalog |
| **Balanserte trær (AVL/rød-svart)** | Egen bolk med rotasjons-håndkjøring | Mindre eksamensvekt |
| **Hashing (linear probing)** | **100 %**, hand-run + implementasjon | 41 % (voksende) |
| **SCC / komponentgraf** | **UiO-signatur** (reachability-resonnement) | Sjelden så eksplisitt |
| **Grådighetsbevis, Gale-Shapley, median-av-medianer, Floyd-Warshall, amortisert analyse** | Ikke IN2010-stoff (Floyd kun i INF2220-arven) | Alle representert |
| **Gratispoeng** | Fast oppvarming (2 p, «alle rimelige svar») | Ingen tilsvarende |
| **Poenglogikk** | «Lavere kjøretid = mer poeng», eksplisitt trapp | Læringsmål-tagging per oppgave |

**Kort sagt:** Begge dekker samme kjernefag, men **TDT4120 er et bredt kortsvarsfag med tung teori (DP, flyt, NP, rekurrenser) løst i CLRS-notasjon**, mens **IN2010 er et datastruktur-tungt implementasjonsfag der man håndkjører strukturer og skriver pseudokode for graf-/tre-/hashing-algoritmer**, med lettere teori og et eget antigjettings-regime. En lærebok for IN2010 må prioritere **håndkjøring (heap, linear probing, AVL, Huffman), pseudokode-skriving for grafalgoritmer (SCC, topsort, Prim, Dijkstra, BFS-varianter), og valg av lavest mulig kjøretid** — og kan nedprioritere DP, maks-flyt, masterteoremet og dyp NP-teori.
