# Eksamensanalyse: TDT4120 Algoritmer og datastrukturer (NTNU)

> Grunnlagsdokument for eksamensrettet lærebok. Bygger på 17 eksamenssett med offisielle løsningsforslag fra NTNU (august 2015 – august 2023), tilhørende oppgavesett på bokmål og engelsk, samt NTNUs emnebeskrivelse. Faglærer gjennom hele perioden er **Magnus Lie Hetland**, og pensumboka er **Cormen, Leiserson, Rivest & Stein — *Introduction to Algorithms* (CLRS)**. Alle algoritmenavn og all pseudokode i oppgavene følger CLRS-konvensjonen. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller løsningsforslag. Analysen er kvantitativ der kildene tillater det.

---

## 1. Eksamensform og utvikling

### Grunnform (gjeldende)

Skriftlig skoleeksamen, **4 timer**, karakterskala **A–F**, teller **100 %**. Obligatoriske øvinger må være godkjent for å gå opp. Faget har **ingen midtsemesterprøve som teller** — hele karakteren avgjøres på slutteksamen.

Eksamen er **ikke flervalg**. Den består av et stort antall **korte frisvarsoppgaver** (kortsvar), typisk **~20 oppgaver som teller likt** (5 %, i eldre sett 5–7 %). Svarene skrives i svarrute under hver oppgave (papirtradisjon; oppgavearket leveres inn). En instruks går igjen i alle sett: **«Lange svar teller ikke positivt.»** Dette er den viktigste formelle føringen — eksamen belønner presisjon, ikke ordrikdom.

Løsningsforslagene er merket at svarene «i rødt» bare er **eksempler på svar som gir uttelling**, og at «mange beslektede svar» også godtas, spesielt ved forklaringsoppgaver. Fra og med ca. 2018/2019 lister fasiten eksplisitt **hvilket læringsmål** hver enkelt oppgave tester (f.eks. «Forstå Dijkstra; kunne utføre algoritmen, trinn for trinn»). Dette er en gullgruve: et godt svar treffer nettopp den ferdigheten læringsmålet navngir.

### Hjelpemiddelkode — den viktigste årgangsforskjellen

| Periode | Kode | Betydning | Representativ? |
|---|---|---|---|
| 2014–2019 | **D** | Ingen trykte/håndskrevne hjelpemidler; enkel kalkulator tillatt i enkelte tidlige sett | **Ja** (ordinær form) |
| 2020 (nov) og 2020–2021 (aug) | **A** | Korona-**hjemmeeksamen**, alle hjelpemidler. Nov 2020 og aug 2021 var **bestått/ikke bestått** med essayoppgaver | **Nei** — eksplisitt merket ikke-representativt |
| Des 2021, aug 2022 | **A** | Fortsatt korona-hjemmeeksamen, alle hjelpemidler | **Nei** — merket ikke-representativt |
| Des 2022, aug 2023 → | **E** | **Ingen hjelpemidler** (retur til ordinær skoleeksamen) | **Ja** (gjeldende form) |

**Konsekvens for lærebok:** Bygg mot **kode E/D-formatet** (des 2022 og aug 2023 er de to ferskeste representative settene). Korona-settene 2020–2021 er verdifulle som oppgavebank, men formatet (færre, bredere essayoppgaver med rubrikk) speiler **ikke** ordinær eksamen. Studenten må kunne alt **uten oppslagsverk** — pugg av kjøretider, pseudokode og definisjoner er nødvendig.

### Fem underformater som går igjen

Innenfor kortsvarsrammen roterer faglærer mellom faste oppgave­innpakninger:

1. **Rent kortsvar** — ett tall, ett uttrykk eller én kort setning (dominerende form; hele des 2022 og aug 2023).
2. **Sensurert pseudokode-fragment** — «gjenkjenn algoritmen» eller «hva skal den utelatte linjen være?» (2019 aug: Partition, MST-Prim, Floyd-Warshall, Counting-Sort; aug 2023: Counting-Sort-linje).
3. **Ja/nei + kort begrunnelse** — «Stemmer dette utsagnet?» (hele nov 2019-settet var bygd slik).
4. **Håndkjøring med svarrute/tabell** — utfør en navngitt CLRS-algoritme og fyll inn slutt­tilstanden (Heapsort, Tree-Insert + Inorder, Slow-APSP, DAG-Shortest-Path, Transitive-Closure, Kruskal, FIFO-kø).
5. **Nivådelt essay (kun korona 2020)** — «Forklar og utdyp. Knytt til relevant teori.» Vurdert etter rubrikken **Noe uttelling → Akseptabelt → Godt besvart**. Man klatrer ved å gå fra grunnidé til det teoretiske *hvorfor*.

### Struktur- og vektingsprofil

- **Antall oppgaver:** ~20 per ordinært sett (korona-settene hadde 8–10 bredere oppgaver).
- **Vekting:** i praksis jevnt fordelt — hver kortsvarsoppgave teller 5 % (5–7 % i noen eldre sett). Det finnes **ingen enkeltoppgave som dominerer** slik en modelloppgave gjør i økonomifag. Tidsprioritering handler om å ikke bruke for lang tid på ett vanskelig designspørsmål når 19 andre teller like mye.
- **Rekkefølge:** oppgavene stiger løst i vanskelighet — de siste 3–5 er nesten alltid **åpne algoritmedesign-oppgaver** («Hvordan vil du gå frem?»), som er der toppkarakterene skilles.
- **Fast «figur-univers»:** oppgavene bruker gjennomgående navnene Lurvik, Smartnes, Gløgsund, Klokland, Visdal, Flinckenhagen m.fl. i innpakningen. Dette er kosmetikk — kjernen er alltid en pensumalgoritme.

---

## 2. Temafrekvens

Basert på de 17 settene med løsningsforslag. Celleverdi = **antall sett i årsgruppen der temaet forekommer i minst én oppgave**. Fordi hvert ordinære sett har ~20 likt vektede oppgaver, treffer de fleste kjerneområdene nesten hvert sett; **gjenganger-scoren måler bredde/sikkerhet, ikke vekt**. Årsgrupper: 2015–17 (6 sett), 2018–19 (4), 2020–21 korona (4), 2022–23 (3).

| Tema | 2015–17 (6) | 2018–19 (4) | 2020–21 (4) | 2022–23 (3) | **Gjenganger-score** |
|---|---|---|---|---|---|
| **Asymptotisk notasjon** (O, Ω, Θ, o, ω; forenkling) | 6 | 4 | 4 | 3 | **17/17 = 100 %** |
| **Sortering** (Insertion/Merge/Quick/Counting/Radix/Bucket, stabilitet) | 6 | 4 | 4 | 3 | **17/17 = 100 %** |
| **NP-kompletthet & reduksjoner** (P/NP/co-NP, sertifikat, ≤ₚ) | 6 | 4 | 4 | 3 | **17/17 = 100 %** |
| **BST & hauger** (Tree-Insert, Inorder, Heap-ops, Heapsort) | 6 | 4 | 3 | 3 | **16/17 = 94 %** |
| **Maks-flyt** (Ford-Fulkerson, restnett, snitt, flytnett) | 6 | 4 | 3 | 3 | **16/17 = 94 %** |
| **Dynamisk programmering** (memoisering, LCS, ryggsekk, stavkapping) | 6 | 4 | 4 | 2 | **16/17 = 94 %** |
| **Grafrepresentasjon & traversering** (nabomatrise/-liste, BFS, DFS) | 4 | 4 | 4 | 2 | **14/17 = 82 %** |
| **Minimale spenntrær** (Prim, Kruskal, snittegenskap, trygge kanter) | 4 | 4 | 3 | 3 | **14/17 = 82 %** |
| **Korteste vei fra én** (Dijkstra, Bellman-Ford, DAG-Shortest-Paths) | 5 | 2 | 3 | 3 | **13/17 = 76 %** |
| **Rekurrenser** (masterteoremet, iterasjons-/substitusjonsmetoden) | 5 | 3 | 2 | 3 | **13/17 = 76 %** |
| **Splitt-og-hersk & binærsøk** (Bisect, D&C-analyse) | 5 | 4 | 1 | 2 | **12/17 = 71 %** |
| **Alle-til-alle korteste vei** (Floyd-Warshall, Slow-APSP, Π-matrise) | 5 | 3 | 1 | 2 | **11/17 = 65 %** |
| **Grådighet** (Huffman, aktivitetsutvelgelse, greedy-argument) | 3 | 4 | 3 | 1 | **11/17 = 65 %** |
| **Select / pivotvalg** (Randomized-Select, Partition, median av medianer) | 3 | 1 | 2 | 2 | **8/17 = 47 %** |
| **Hashing** (kjeding, kollisjon, hashfunksjoner) | 2 | 1 | 1 | 3 | **7/17 = 41 %** |
| **Topologisk sortering / DAG-egenskaper** (synkende finish-tid) | 3 | 2 | 2 | 0 | **7/17 = 41 %** |
| **Køer & stakker** (Enqueue/Dequeue, wraparound, Push/Pop) | 1 | 2 | 0 | 2 | **5/17 = 29 %** |
| **Amortisert analyse & disjunkte mengder** (Table-Insert, Union-Find) | 1 | 2 | 2 | 0 | **5/17 = 29 %** |
| **Stabil matching** (Gale-Shapley, blokkerende par) | 0 | 0 | 0 | 2 | **2/17 = 12 %** ↑ *voksende* |

**Viktigste funn:**

1. **Faget har ingen «kjerne­oppgave» — det har en kjerne­pensumliste.** Alle 8 hovedbolkene i emnebeskrivelsen (asymptotikk, D&C, sortering/søk, datastrukturer, DP, grådighet, grafalgoritmer, NP) dukker opp hvert eneste år. Til forskjell fra økonomifag kan du **ikke** droppe et tema og satse på at det ikke kommer — bredden er selve eksamensformen.

2. **Tre temaer er 100 %-gjengangere:** asymptotisk notasjon, sortering og NP/reduksjoner. Disse kommer garantert, ofte i flere oppgaver per sett.

3. **Maks-flyt er overraskende tungt** (94 %) og er nesten alltid vehikkelet i de åpne designoppgavene på slutten («modeller problemet som et flytproblem»). Sammen med DP utgjør flyt + DP ryggraden i «konstruer en algoritme»-sjangeren.

4. **Stabil matching (Gale-Shapley) er en fremvoksende gjenganger** — fraværende før 2022, men i begge de to ferskeste representative settene (des 2022 og aug 2023). Forvent den fremover.

5. **Håndkjøring roterer mellom datastrukturene.** BST/haug (94 %) er den sikreste håndkjørings­kandidaten; deretter flyt, APSP-matriser og køer. Studenten må kunne utføre disse mekanisk og feilfritt.

---

## 3. Oppgavetype-katalog

De ni sjangrene som faktisk går igjen. «Krav» oppsummerer fasitens foretrukne løsningsmetode og presisjonsnivå.

### A. Asymptotisk forenkling og notasjon
- **Krav:** Faste varianter. (i) «Gi nedre og øvre grense for `n + Θ(n²) + O(n³)`» → oppgi den strammeste `Ω` og `O` hver for seg (`Ω(n²)` og `O(n³)`). (ii) «Forenkle `Ω(n + Θ(n²) + O(n³))`» → `Ω(n²)` (den dominerende, minst presise grensen bestemmer). (iii) Sammensatte brøkuttrykk (`Ω(n³)/O(n²) + …`) løses **ledd for ledd**: bytt teller og nevner med sin ekstremverdi, forkort, summér. (iv) Summer med blandede operatorer: `O(n)+Ω(n)+Θ(n)+o(n)+ω(n) = ω(n)` (det raskest voksende leddet uten øvre grense dominerer). Må kunne **definere alle fem symbolene** `O, Ω, Θ, o, ω`.
- **Frekvens:** 100 % — ofte 2–3 oppgaver per sett.

### B. Rekurrensløsning
- **Krav:** **Navngi metoden.** Masterteoremet (og hvilket **tilfelle** — `T(n)=4T(n/2)+n²lg n` er tilfelle 2 med log-faktor → `Θ(n²lg²n)`). Iterasjonsmetoden (teleskopér summen, sett inn grunntilfellet) for **eksakte** rekurrenser — da oppgis svaret **uten asymptotisk notasjon** (`T(n)=T(n−1)+2ⁿ⁻¹ ⇒ 2ⁿ−1`). Substitusjons-/induksjonsmetoden brukes til å **verifisere** et gjettet svar (vis induksjonssteget når det bes om). Delspørsmål: «hvor mange linjer i iterasjonsmetoden?» → `Θ(log_b n)`.
- **Frekvens:** 76 %. Advarsel: faglærer har ved minst ett tilfelle tatt en rekurrens ut av sensur fordi den falt utenfor pensumvarianten av masterteoremet (`f(n)=Θ(n^{log_b a} lg^k n)` krever `k>0`).

### C. Håndkjøring av CLRS-algoritme, trinn for trinn
- **Krav:** Utfør nøyaktig og oppgi **kun det etterspurte** (sluttilstand eller ett tall). Repertoar: `Tree-Insert` + `Inorder-Tree-Walk` (utnytt at inorder på BST gir **sortert** rekkefølge); haug-operasjoner (`Build-Max-Heap`, `Heap-Extract-Max`, `Heapsort` — **utfør trinnene selv om input bryter haugegenskapen**); FIFO-kø (`Enqueue`/`Dequeue` med `head`/`tail` og **wraparound** — oppgi **hele tabellen**, ikke bare den logiske køen); `Slow-APSP` (min-pluss-produkt, finn `l⁽²⁾ᵢⱼ`); `Floyd-Warshall` (både `d`- og `π`-regelen); `DAG-Shortest-Path`, `Transitive-Closure`, `Kruskal` (list kantene i valgt rekkefølge).
- **Frekvens:** Nær alle sett har minst én; BST/haug hyppigst.

### D. Definisjoner «med egne ord»
- **Krav:** Kort og presis. Gjengangere: spenntre (tre av grafens **egne** kanter som dekker alle noder), stabil sortering (like elementer bytter ikke plass), topologisk sortering (lineær rekkefølge i DAG; kant `u→v` gir `u` før `v`; finnes via synkende finish-tid i DFS), restkapasitet (`c_f(u,v)=c(u,v)−f(u,v)`, motsatt vei `f(u,v)`), snitt i flytnett (partisjon `(S,T)` med `s∈S, t∈T`), nodedekke, heltallsteoremet, kjeding, **MST-snittstrategien** (velg alltid en letteste kant over et snitt som respekterer valgene så langt). Fasiten gir **delvis uttelling** for delvise definisjoner — ta med hovedpoenget først.
- **Frekvens:** Flere per sett.

### E. Kjøretidskunnskap og -sammenligning
- **Krav:** Faktakunnskap forventes direkte: Dijkstra med binærhaug = `O(E lg V)`; Build-Max-Heap = `Θ(n)` (ikke `Θ(n lg n)`); Insertion-Sort beste tilfelle = `Θ(n)`; tellesortering krever heltall i lite/`O(n)`-verdiområde; `Randomized-Select` verste tilfelle = `Θ(n²)`. Kombinasjon av sorteringer: kjør `Merge-Sort` **før** `Insertion-Sort` → `Θ(n lg n)`; motsatt rekkefølge risikerer `Θ(n²)`. Bellman-Ford med tidlig-stopp = `Θ(V+E)` i beste tilfelle. Skill klart mellom garantert (`O`/`Θ`) og inputavhengig.
- **Frekvens:** Innbakt i sortering (100 %) og korteste vei (76 %).

### F. Egenskaps- og «stemmer dette?»-spørsmål (ja/nei + begrunnelse)
- **Krav:** Svar **ja/nei først**, deretter én presis setning. Typiske: Dijkstra tåler **ikke** negative kantvekter (Bellman-Ford gjør); topologisk sortering bruker synkende **finish-tid**, ikke starttid; MST-snittegenskapen; hvilke pensumalgoritmer løser SSSP vs. APSP vs. MST. Hele nov 2019-settet var bygd på denne malen.
- **Frekvens:** 41–76 % avhengig av tema.

### G. Reduksjoner og NP-kompletthet
- **Krav:** Kjernepoenget fasiten alltid vil ha er **reduksjonsretningen**. `A ≤ₚ B` betyr «A reduseres til B» og at **B er minst like vanskelig som A**. For å vise at X er minst like vanskelig som Y må du redusere **fra Y til X**. Å redusere *til* et NP-komplett problem gjør **ikke** at problemet ditt blir NPC (det er den vanligste fellen). Konsekvensen av en polynomisk algoritme for et NPC-problem er `P = NP`. Kjenn skillet **pseudopolynomisk** (Ford-Fulkerson, SUBSET-SUM med mål i entallssystem = binært ryggsekk) vs. **NP-hardt**, og **avgjørelses- vs. optimeringsproblem** (finne selve løsningen fra en DP krever tilbakepekere — ikke «gratis», men mulig uten å endre asymptotisk kjøretid). Kjenn de navngitte NPC-problemene: CIRCUIT-SAT, SAT, 3-CNF-SAT, CLIQUE, VERTEX-COVER, HAM-CYCLE, TSP, SUBSET-SUM.
- **Frekvens:** 100 %.

### H. Åpen algoritmedesign («Hvordan vil du gå frem?»)
- **Krav:** **Gjenkjenn det klassiske problemet og reduser til det.** Navngi paradigmet eksplisitt (grådig / DP / D&C / grafsøk / flyt). Dokumenterte eksempler fra settene: billigste mur rundt regioner (inkl. slottet) → **minimalt snitt / maks-flyt**; fordele ansatte på prosjekter med rolle-/avstandskrav → **maks-flyt** (kilde→ansatte→roller→prosjekter→sluk, heltallsteoremet); avgjøre om kvinne+mann er «ment for hverandre» → kjør **Gale-Shapley** begge veier og sammenlign; korteste vei med **flest** kanter → modifiser kantvekter (`|V|·w−1`) eller kjør på korteste-vei-DAG; «hvorfor er X sann» med færrest ledd → **BFS** for korteste kjede; ordsplitting/sammenfletting/felles delsti → **DP/memoisering**. De 3–5 siste oppgavene i hvert sett er av denne typen og avgjør toppkarakteren.
- **Frekvens:** Hvert ordinært sett (siste tredel).

### I. Nivådelt essay (kun korona 2020)
- **Krav:** «Forklar og utdyp. Knytt til relevant teori.» Vurdert etter **Noe uttelling → Akseptabelt → Godt besvart**. Man klatrer ved å gå fra grunnidé (f.eks. «Huffman er grådig») via presis mekanisme (frekvensvekting, slå sammen to billigste noder) til dypere kobling (koding/dekoding, minimal forventet tegnlengde). **Ikke representativt for gjeldende form**, men god trening i å forklare *hvorfor*.

---

## 4. Sensorens krav

### Faste metaregler (gjentas i nesten alle sett)
1. **«Lange svar teller ikke positivt.»** Den hyppigst gjentatte instruksen. Svar med det etterspurte tallet/uttrykket/sluttilstanden rått. Overflødig utledning gir null ekstra og stjeler tid.
2. **Svar bare på det du blir spurt om.** Ved «oppgi output» skal du ikke også forklare algoritmen; ved «oppgi hele tabellen» skal du ikke bare oppgi den logiske strukturen.
3. **Delvis uttelling er regelen.** Fasiten spesifiserer ofte «4 av 5 poeng hvis du utelater X». Ta med **hovedpoenget først** i definisjoner, så sikrer du grunnpoengene.
4. **Læringsmål-treff.** Hver oppgave er merket med et konkret læringsmål; et svar treffer best når det demonstrerer nøyaktig den ferdigheten (definere notasjon / utføre algoritmen / kjenne kjøretiden og forstå utregningen).
5. **Robust sensur.** Ved feil/uklarhet i oppgaveteksten, eller når en oppgave faller utenfor pensumvarianten, tas oppgaven ut av sensur **der det er til fordel for kandidaten** (dokumentert flere ganger). Konsistente, alternative tolkninger godtas.

### Hva som skiller karakternivåene
- **Bestått (E):** riktige tall/definisjoner på grunn­oppgavene (asymptotikk, håndkjøring, standarddefinisjoner), riktig **fortegn/retning** på reduksjonsspørsmål.
- **Midtsjikt (C/D):** korrekt håndkjøring, riktige kjøretider med kort utregning, riktig paradigmevalg på designoppgavene selv om detaljene halter.
- **Toppsjikt (A/B):** løser de åpne designoppgavene **komplett** — riktig reduksjon *med riktig retning*, korrekt flytnett-/DP-konstruksjon **inkludert rekonstruksjon av selve løsningen** (ikke bare optimalverdien), og ser finessene (heltallsteoremet garanterer heltallig flyt; Edmonds-Karp-argumentet krever *korteste* forøkende sti; pseudopolynomisk ≠ polynomisk). Skiller seg også ved å **kjenne den formelle definisjonen** av problemet en algoritme løser, ikke bare navnet.

### Hva som gir uttelling
- **Presisjon over lengde.** Ett riktig uttrykk slår et avsnitt.
- **Riktig reduksjonsretning** er det enkeltpoenget fasitene oftest fremhever som skille.
- **Beslektede korrekte svar godtas** — det finnes sjelden bare ett riktig svar på forklarings- og designoppgaver.
- På essay (korona): klatring i rubrikken ved å koble grunnidé → teoretisk *hvorfor* (snittargument for MST, bytteargument for grådighet, forventning over instanser for gjennomsnittlig kjøretid).

---

## 5. Typiske feil (eksplisitt eller implisitt i fasitene)

1. **Reversere reduksjonsretningen** — den mest fremhevede feilen. Å redusere *til* et NPC-problem beviser ingenting om ditt problems vanskelighet; for å vise at X er vanskelig må du redusere *fra* et kjent vanskelig problem *til* X. Å antyde at en reduksjon til TSP gjør et problem NP-komplett gir **null uttelling**.
2. **Forveksle BST-egenskapen med haugegenskapen** — BST: venstre deltre ≤ rot ≤ høyre deltre (venstre–høyre-orden); haug: forelder ≥/≤ *begge* barn (opp–ned-orden, ingen venstre–høyre-orden).
3. **Køfeil ved håndkjøring** — bytte om `head`/`tail` (kun delvis uttelling) eller glemme **wraparound**; oppgi bare den logiske køen i stedet for hele tabellen inkludert «døde» celler.
4. **Løse asymptotiske grenser der en strammere finnes** — «kaste bort informasjon» under forenklingen. Oppgi alltid det mest presise enkeltuttrykket.
5. **Feil masterteorem-tilfelle** — særlig glemme log-faktoren når `f(n)` matcher `n^{log_b a}` opp til en logaritme (tilfelle 2 med `lg^k`), eller bruke tilfelle 2 med `k≤0` (utenfor pensumvarianten).
6. **Påstå at rekonstruksjon fra en DP er «trivielt gratis»** — å hente ut *selve* løsningen (ikke bare optimalverdien) krever lagrede beslutninger/tilbakepekere. Toppsvar sier eksplisitt at det kan gjøres uten å øke asymptotisk kjøretid.
7. **Blande pseudopolynomisk og NP-hardt** — Ford-Fulkerson er pseudopolynomisk (kjøretid avhenger av kapasitetenes *størrelse*), ikke et tegn på at maks-flyt er NP-hardt.
8. **Bruke Dijkstra på negative kantvekter** — Dijkstra krever ikke-negative vekter; Bellman-Ford håndterer negative kanter (og oppdager negative sykler nåbare fra start).
9. **Feil kjøretidsfakta** — hevde `Build-Max-Heap = Θ(n lg n)` (det er `Θ(n)`), eller at Insertion-Sort har `Ω(n lg n)` i beste tilfelle (det er `Θ(n)`).
10. **Utføre «feil» håndkjøring** — når oppgaven ber deg kjøre `Heap-Extract-Max` på en tabell som *ikke* er en gyldig haug, skal du utføre trinnene mekanisk uten å først reparere haugen.
11. **Blande topologisk sortering med starttid** — den bruker synkende **finish-tid** fra DFS, ikke starttid (discover-time).

---

## 6. Notasjons- og pseudokodeapparat

All pseudokode og alle navn følger **CLRS**. Læreboken bør bruke nøyaktig disse navnene, siden oppgavene gjør det og fasiten forventer gjenkjenning.

### Asymptotisk notasjon (må kunne definere alle fem)
`O` (øvre grense), `Ω` (nedre grense), `Θ` (tett grense), `o` (strengt mindre), `ω` (strengt større). Forenklingsregler: i en **sum** dominerer det raskest voksende leddet; en `Ω`/`ω`-term uten øvre grense fjerner enhver `O`-grense for summen; oppgi alltid det strammeste enkeltuttrykket.

### Rekurrensmetoder
- **Masterteoremet:** `T(n)=aT(n/b)+f(n)`. Sammenlign `f(n)` med `n^{log_b a}`. Tre tilfeller; tilfelle 2 i pensumvarianten har form `f(n)=Θ(n^{log_b a} lg^k n)` med **`k>0`**.
- **Iterasjonsmetoden** (repeated substitution): teleskopér, gjenkjenn summen (`1+2+…+2^{n-1}=2ⁿ−1`, `1+2+…+n=n(n+1)/2`), sett inn grunntilfellet. Gir **eksakt** svar uten asymptotisk notasjon.
- **Substitusjonsmetoden:** gjett svar, verifiser med induksjon.

### Kjernealgoritmer som må beherskes aktivt (kunne utføre + kjenne kjøretid)

| Bolk | Algoritmer (CLRS-navn) | Nøkkelkjøretider |
|---|---|---|
| **Sortering/søk** | `Insertion-Sort`, `Merge-Sort`, `Quicksort`, `Randomized-Quicksort`, `Heapsort`, `Counting-Sort`, `Radix-Sort`, `Bucket-Sort`, `Bisect` (binærsøk) | Θ(n lg n) sammenlikn.-nedre grense; Counting/Radix lineær v/heltall; Insertion Θ(n)/Θ(n²) |
| **Utvelgelse** | `Randomized-Select`, `Randomized-Partition`, `Partition`, `Select` (median av medianer) | Select Θ(n) worst; Randomized-Select Θ(n) forventet, Θ(n²) worst |
| **Datastrukturer** | `Max-Heapify`, `Build-Max-Heap`, `Heap-Extract-Max`, `Tree-Insert`, `Inorder-Tree-Walk`, `Tree-Maximum`; køer (`Enqueue`/`Dequeue`), stakker (`Push`/`Pop`); hashing m/kjeding; `Table-Insert` (amortisert); disjunkte mengder (`Make-Set`, `Union`, `Link`, `Find-Set`) | Build-Heap Θ(n); BST forventet høyde Θ(lg n); Table-Insert amortisert O(1) |
| **Grafgrunnlag** | `BFS`, `DFS` (kantklassifisering), `Topological-Sort`, nabomatrise/-liste | BFS/DFS Θ(V+E) |
| **Korteste vei** | `Dijkstra` (O(E lg V) m/binærhaug), `Bellman-Ford` (Θ(VE)), `DAG-Shortest-Path` (Θ(V+E)) | krav: Dijkstra ≥0; BF ingen neg. sykel; DAG ingen sykel |
| **Alle-til-alle** | `Slow-APSP` (min-pluss-produkt), `Floyd-Warshall` (d- og π-regel), `Transitive-Closure`, `Print-All-Pairs-Shortest-Path` | FW Θ(V³) |
| **MST** | `MST-Prim`, `MST-Kruskal` (snittstrategi, trygge kanter) | begge O(E lg V) |
| **Maks-flyt** | `Ford-Fulkerson`, `Edmonds-Karp` (BFS-forøkende stier), restnett, snitt, heltallsteoremet, maks-flyt/min-snitt | FF pseudopolynomisk; EK polynomisk |
| **Grådighet** | `Huffman`, aktivitetsutvelgelse, fraksjonelt ryggsekk | Huffman: optimale prefikskoder |
| **DP** | stavkapping (`Rod-Cutting`), LCS, 0-1-ryggsekk (`Knapsack`, Θ(nm)), memoisering vs. bottom-up | overlappende delproblemer + optimal substruktur |

### NP-teori (må forstås kvalitativt og formelt)
Klassene **P, NP, co-NP**; verifikasjonsalgoritme og **sertifikat**; **≤ₚ** (polynomisk reduksjon) og reduksjonsretning; **NP-hardt / NP-komplett**; `P=NP`-konsekvensen; **pseudopolynomisk** vs. eksponentiell; **avgjørelses- vs. optimeringsproblem**; abstrakte vs. konkrete problemer / formelle språk; beviset for at **CIRCUIT-SAT** er NP-komplett (kretsen simulerer en verifikator; input = sertifikatet). De navngitte NPC-problemene: **CIRCUIT-SAT, SAT, 3-CNF-SAT, CLIQUE, VERTEX-COVER, HAM-CYCLE, TSP, SUBSET-SUM**.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (kommer garantert, flere oppgaver hvert sett)
1. **Asymptotisk notasjon og forenkling** — 100 %. Definere alle fem symboler; forenkle summer og brøkuttrykk ledd for ledd; alltid strammeste grense. Billige, garanterte poeng.
2. **Sortering — algoritmer, kjøretider og stabilitet** — 100 %. Insertion/Merge/Quick/Counting/Radix/Heapsort; når lineær sortering er mulig; stabilitetsdefinisjonen; kombinasjonsspørsmål (rekkefølgen på to sorteringer).
3. **NP-kompletthet og reduksjonsretning** — 100 %. `A ≤ₚ B` ⇒ B minst like vanskelig; redusér *fra* det vanskelige problemet; `P=NP`-konsekvensen; pseudopolynomisk vs. NP-hardt. Den enkeltinnsikten som oftest skiller riktig fra galt.
4. **Håndkjøring av BST, hauger og flytnett** — 82–94 %. Utfør mekanisk og feilfritt; oppgi kun det etterspurte / hele tabellen.
5. **Rekurrensløsning med navngitt metode** — 76 %. Masterteoremet (riktig tilfelle inkl. log-faktor), iterasjonsmetoden for eksakte svar, induksjonsverifikasjon.

### Nivå 2 — må kunne (forekommer i de fleste sett; avgjør C→A)
6. **Åpne designoppgaver via reduksjon** — de siste 3–5 oppgavene i hvert sett. Tren mønstergjenkjenning: fordelings-/tilordningsproblem → **maks-flyt**; «billigste barriere» → **min-snitt**; sekvens-/delstrukturproblem → **DP/LCS-variant**; «korteste kjede/færrest ledd» → **BFS**; stabil parvis tilordning → **Gale-Shapley**. Navngi paradigmet, og **rekonstruér løsningen**, ikke bare verdien.
7. **Korteste vei — Dijkstra / Bellman-Ford / DAG** — 76 %. Krav per algoritme, kjøretider, negative kanter/sykler, forgjengerstruktur.
8. **MST — Prim/Kruskal og snittstrategien** — 82 %. Snittegenskapen (letteste kant over et snitt er trygg), utføre Kruskal, hvorfor lette kanter er trygge.
9. **Dynamisk programmering — mekanikk** — 94 %. Overlappende delproblemer + optimal substruktur; memoisering vs. bottom-up; når memoisering *ikke* hjelper (D&C, ingen overlapp); rekonstruksjon fra lagrede beslutninger.
10. **Maks-flyt-teori** — 94 %. Restnett, restkapasitet, snitt, heltallsteoremet, maks-flyt/min-snitt, hvorfor Edmonds-Karp (korteste forøkende sti) er polynomisk mens naiv Ford-Fulkerson ikke er.
11. **Grafrepresentasjon og traversering** — 82 %. Nabomatrise vs. -liste (styrker/svakheter), BFS/DFS, kantklassifisering, topologisk sortering via finish-tid.

### Nivå 3 — bør kjenne til (lavfrekvent, men differensierer toppkarakterer)
12. **Alle-til-alle korteste vei** — 65 %. Floyd-Warshall (d- og π-regel), Slow-APSP (min-pluss-produkt), Transitive-Closure.
13. **Grådighet — Huffman og aktivitetsutvelgelse** — 65 %. Gjenkjenn Huffman fra frekvenser; greedy-bytteargument.
14. **Select og pivotvalg** — 47 %. Randomized-Select vs. Select (median av medianer); pivotstrategier; kjøretider.
15. **Hashing** — 41 %, **voksende** (3/3 i 2022–23). Kjeding, kollisjon, hva som gjør en hashfunksjon god/dårlig.
16. **Stabil matching (Gale-Shapley)** — **fremvoksende**; forvent den. Blokkerende par, mann-/kvinneorientert kjøring, «ment for hverandre».
17. **Amortisert analyse og disjunkte mengder** — 29 %. Table-Insert (amortisert O(1)), Union-Find-skog for ekvivalens-/komponentproblemer.

**Prognose for neste ordinære eksamen (kode E):** ~20 likt vektede kortsvar. Forvent: 2–3 asymptotikk-/forenklingsoppgaver; 1 rekurrens (masterteorem eller iterasjon); 2–3 sorterings-/kjøretidsspørsmål; 1–2 håndkjøringer (BST/haug + én graf-/matrisealgoritme); 3–4 definisjoner «med egne ord»; 2–3 NP-/reduksjonsspørsmål (minst ett om reduksjonsretning); og **3–5 åpne designoppgaver** på slutten, hovedsakelig løst med **maks-flyt eller DP**, muligens én Gale-Shapley. Studenten som kan pensumalgoritmene utenat, kan utføre dem for hånd, og kan gjenkjenne hvilket klassisk problem et innpakket scenario reduseres til, vil score høyt.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TDT4120/`.

**Løsningsforslag lest grundig (siste ~8 år, 9 sett):**
`2023.aug`, `2022.des`, `2022.aug`, `2021.des`, `2021.aug`, `2020.nov`, `2020.aug`, `2019.nov`, `2019.aug` (`*.losn.no.pdf`).

**Løsningsforslag skumlest for temaregistrering (eldre, 8 sett):**
`2018.des`, `2018.aug`, `2017.des`, `2017.aug`, `2016.des`, `2016.aug`, `2015.des`, `2015.aug` (`*.losn.no.pdf`). Temafrekvens-matrisen i del 2 er bygd ved systematisk nøkkelord-skanning av alle 17 løsningsforslagene.

**Oppgavesett:** tilhørende `*.oppg.no.pdf` (bokmål) og `*.oppg.en.pdf` (engelsk) for samme årganger, brukt til å bekrefte format og oppgavetyper.

**Fagbeskrivelse:** omskrevet sammendrag av NTNUs emnebeskrivelse for TDT4120 (scratchpad: `fagbeskrivelse-tdt4120.md`; kilde: <https://www.ntnu.no/studier/emner/TDT4120>).

**Merknader om kildene:**
- **Faglærer og pensum konstant:** Magnus Lie Hetland er faglig kontakt på samtlige 17 sett; pensum er CLRS (*Introduction to Algorithms*) gjennom hele perioden. All pseudokode og alle algoritmenavn i oppgavene er CLRS-navn.
- **Filnavn-årganger:** enkelte tidlige PDF-er har intern datering som avviker ett år fra filnavnet (f.eks. viser `2015.aug`-fila eksamensdato 12. august 2014). Analysen bruker filnavnets årgangsmerking konsekvent; dette påvirker ikke temafrekvensen.
- **Korona-caveat:** settene med hjelpemiddelkode A (nov/aug 2020, aug/des 2021, aug 2022) er hjemmeeksamener, delvis bestått/ikke bestått med essayformat, og eksplisitt merket **ikke representative** for ordinær eksamen. De er tatt med i frekvenstellingen, men vekttolkning og formatprognose er kalibrert mot kode D/E-settene.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer i dette dokumentet er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller løsningsforslag er gjengitt ordrett. Algoritmenavn, standardnotasjon og kjøretidsuttrykk er allmenn faglig notasjon og ikke opphavsrettslig beskyttet tekst.
