# Bokskjelett: IN2010 Algoritmer og datastrukturer (UiO) — eksamensrettet lærebok

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
> forfatteren leser IKKE eksamensarkivet. Alle frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (UiOs IN2010-arkiv høst 2018 – høst 2024, 7 sett med
> offisielle **sensorveiledninger**, pluss forgjengeremnet INF2220 2015–2017 for
> formhistorikk). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene
> der (teori / drill / øvingseksamen) er obligatoriske og gjentas ikke i sin helhet
> her. **All pseudokode er generisk og selvforklarende — IKKE CLRS** (det er
> bokstandard fordi UiOs oppgaver og sensorveiledninger bruker generiske
> `Procedure`-hoder, ikke CLRS-navn; heap-indeks fra 0; hovedsakelig O-notasjon).
> Alle oppgaver, tall, grafer og innpakninger i den ferdige boka skal være
> **nyskrevne** (opphavsrett): algoritmenavn, kjøretidsuttrykk og standardnotasjon er
> allmenn faglig notasjon, men ingen oppgavetekster eller løsningsforslag fra reelle
> sett gjengis.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `in2010` |
| Tittel | **IN2010 Algoritmer og datastrukturer (UiO)** |
| Institusjon | **UiO** (finnes allerede i `institusjoner.ts` — ECON1310, JUS1111) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (kvantitativt fag med faste, gjentakende oppgavemønstre) |
| Antall kapitler | **35** (1 eksamenskart + 30 tema/drill + 1 strategidrill + 3 øvingseksamener) |
| Estimert totaltid | **≈ 2 570 min ≈ 43 timer** (inkl. 3 firetimers øvingseksamener) |
| Quiz totalt | **542** (krav ≥500) |
| Flashcards totalt | **504** (krav ≥500) |
| Prøver | **28** (4 per temadel 1–7) + **3 øvingseksamener** (kap. 8.2–8.4) |

**Pitch (én avsnitt):** IN2010 har hatt en påfallende stabil eksamensmal siden
2021. Vurderingen er én **digital firetimers skoleeksamen i Inspera** (100 %, A–F)
med **ingen hjelpemidler** — også pseudokode skrives inn i Inspera, ingen håndskrift.
Eksamen har en **fast tredeling** hvert år: (1) en **oppvarming** på 2 gratispoeng
(«Hva er en algoritme?» / «Hva er en datastruktur?», alle rimelige svar godtas); (2)
**Del 1** — mange små, **automatisk rettede** sant/usant- og kortsvarsoppgaver med
**antigjettings-skalering** (ren gjetting gir i snitt null poeng — du må kunne fakta
*sikkert*); og (3) **Del 2** — færre, større oppgaver der du skal **skrive pseudokode
og resonnere**, og der karakteren avgjøres. To føringer går igjen i hvert eneste
sett og styrer hele boka: **«lavere kjøretidskompleksitet er mer poenggivende»** (en
eksplisitt poengtrapp — O(n) slår O(n log n) slår O(n²) på *samme* oppgave), og at en
**klar naturlig-språk-forklaring kan gi like mye som — eller mer enn — rotete
pseudokode**. IN2010 er et **datastruktur-tungt implementasjonsfag**: ryggraden er å
**håndkjøre strukturer feilfritt** (min-heap, linear probing, AVL, Huffman) og å
**skrive presis pseudokode for graf- og tre-algoritmer** (SCC, topologisk sortering,
Prim, Dijkstra, BFS-varianter, beskåret in-order). Fire temaer er **100 %-gjengangere**
(asymptotisk analyse fra kode, sortering/stabilitet, hashing med linear probing,
grafrepresentasjon/traversering) og får hver sin teoribolk + drillkapittel; heap og
tre-algoritmer (86 %) likeså. Boka nedprioriterer bevisst dynamisk programmering,
maks-flyt, masterteoremet/rekurrenser og dyp NP-teori, som **ikke er IN2010-stoff**.

**Kritisk stilregel (gjelder HELE boka) — «den tredelte eksamenssjangeren»:**
1. **Del 1 krever sikker faktakunnskap, ikke gjenkjenning.** Antigjettings-skaleringen
   (f.eks. `2·max(n−16, 0)` av 32 riktige — 16 riktige = 0 poeng) betyr at halvparten
   riktig gjetting gir **null**. Boka lærer eksplisitt at Del 1-fakta må sitte i
   ryggmargen: kjøretider, sorteringsegenskaper, heap-/hashing-/graf-fakta. Samtidig:
   på **ikke-strafferammede** korte svar lønner det seg alltid å svare (ubesvart = feil).
2. **Del 2 er pseudokode-SKRIVING, ikke kortsvar.** Dette er den største
   formforskjellen fra NTNUs TDT4120 (som ber om ett tall). Du skal **konstruere og
   skrive ned algoritmen** og forklare den. En **klar naturlig-språk-forklaring kan gi
   full uttelling** — kravet er «lett forståelig, entydig og presist», ikke syntaks.
   «En setning man ikke forstår etter to gjennomlesninger, ignoreres.»
3. **Lavere kjøretid = mer poeng (den eksplisitte poengtrappen).** Sensor oppgir ofte
   trappen direkte: O(n)-løsning ⇒ full pott, O(n log n) ⇒ noe mindre, O(n²) ⇒ minst.
   **Å velge riktig algoritme ER å velge poeng.** Kap. 8.1 er en egen drill på nettopp
   dette; hvert Del 2-kapittel avslutter med «kan dette gjøres raskere?».
4. **Oppgi kjøretid — og la den matche algoritmen du faktisk ga.** Trekk for manglende
   kompleksitet, feil kompleksitet, og for å bruke `n` uten å definere hva `n` er.
5. **Oppgi antagelser om representasjon.** Grafer kan antas som nabolister/-matrise/
   objektstil; en node antas å ha feltene du trenger (`v.left`, `v.right`, `v.x`,
   `v.parent`). Sensor binder seg ikke til representasjon — men du må si hva du antar.
6. **Delvis uttelling er regelen**, med eksplisitt poengfordeling per delmoment. Ta med
   **hovedmomentet først** (algoritmevalg + grunnidé), deretter detaljer og kanttilfeller.

**Kritisk notasjonsregel (gjelder HELE boka) — «generisk pseudokode, IKKE CLRS»:**
IN2010 bruker **ikke** CLRS-navn (`Merge-Sort`, `Build-Max-Heap`, `Tree-Insert` …).
Pseudokoden er generisk og selvforklarende, med `Procedure`-hoder, Input/Output-
spesifikasjon og norske/engelske operasjonsnavn (`RemoveMin`, `Insert`, `HeapInsert`,
`DFSVisit`, `ParentOf`, `StronglyConnectedComponents`). Bruk samme nøkterne stil.
Konkret:
- **Array-indeksering fra 0.** Array-heap: rot på indeks 0, forelder til `i` er
  `⌊(i−1)/2⌋`, barn `2i+1` og `2i+2`. (CLRS/TDT4120 indekserer fra 1 — IKKE her.)
- **Hovedsakelig O** (øvre grense). Ω og Θ nevnes kort (emnebeskrivelsen bruker dem),
  men eksamensoppgavene bruker nesten utelukkende O. Ingen o/ω.
- **Kjøretidsforenkling ved LØKKETELLING, ikke masterteorem.** k nøstede løkker over
  V gir O(nᵏ); halveringsløkke (`j = j·2`) gir log-faktor; konstant indre løkke endrer
  ikke orden. Masterteoremet er **ikke pensum** og skal ikke brukes.
- **Grafer:** `G = (V, E)`; kjøretider skrives `O(|V| + |E|)`, `O((|V|+|E|)·log|V|)`,
  `O(|V|·|E|)`.

**Avvik fra DNA/README-malen (dokumentert):**
- **«Symbol- og formelliste» → «Notasjons- og pseudokodeliste».** README krever en
  `collapsible` «Symbol- og formelliste» per delkapittel. For et algoritmefag er det
  presise apparatet ikke bare symboler, men også **kjøretidsuttrykk og pseudokode-navn
  med kontrakt**. Blokken heter derfor **«Notasjons- og pseudokodeliste»** og lister
  ALT delkapitlet bruker: (i) asymptotiske uttrykk (`O(n)`, `O(n \log n)`, `O(|V|+|E|)`,
  `n`/`|V|`/`|E|` = antall elementer/noder/kanter); (ii) grafnotasjon (`G=(V,E)`,
  nabolister, inngrad/utgrad); (iii) hver algoritme/operasjon kapitlet bruker, med
  **inn/ut-kontrakt og kjøretid** i én linje (f.eks. «`RemoveMin(H)` — fjerner og
  returnerer minste element i min-heapen `H`, gjenoppretter heap-egenskapen ved
  down-heap; `O(\log n)`»). Regelen «per delkapittel, ikke arv fra tidligere» beholdes.
  Unntak kun for helt notasjonsfrie kapitler (finnes knapt).
- **`theorem`-blokker brukes for invarianter, nøkkelresultater OG pseudokode-kontrakter.**
  Der DNA-en bruker `theorem` for matematiske resultater, brukes den her for (a)
  resultatene som skal sitte i ryggmargen — heap-egenskapen, BST-egenskapen,
  O(n log n)-nedre grensen for sammenligningssortering, at komponentgrafen er en DAG,
  invariantene etter *i* iterasjoner (bubble/selection/insertion) — og (b) **pseudokode-
  kontrakter**: hvert algoritmekapittel har en `theorem`-blokk «Pseudokode-kontrakt»
  som gjengir algoritmen (nyskrevet, generisk pseudokode med indeks fra 0) med
  **antagelser om representasjon, invariant/pre-/postbetingelse og kjøretid**.
- **Flashcards kalibreres som algoritme ↔ kjøretid ↔ egenskap.** Flashcards genereres
  KUN fra toppnivå `definition`-blokker med `title`. Hvert kort parer et **navn**
  (algoritme/struktur/begrep) med presis **kjøretid + krav/egenskap** (f.eks.
  «`Dijkstra` → `O((|V|+|E|)·log|V|)` med prioritetskø; krever **ikke-negative**
  kantvekter»; «Stabil sortering → like nøkler bevarer innbyrdes rekkefølge»;
  «`Build-heap` → `O(n)`, ikke `O(n log n)`»). Fordi eksamen er hjelpemiddelfri, ER
  dette puggematerialet.
- **Quiz kalibreres som Del 1: sant/usant + hjelpemiddelfri faktakontroll.** Plattformens
  quiz er flervalg (MC), som **speiler Del 1 direkte** (Del 1 ER auto-rettede sant/usant
  + korte svar). Quiz brukes derfor til: sant/usant-utsagn om kjøretid/heap/hashing/
  graf/sortering/NP, kode→O-forenkling (ett strammeste uttrykk), «hvilken algoritme
  passer denne begrensningen», korteste-avstander-matrisen, og reduksjonsretning.
  **Kalibrer med antigjettings-tankegang:** minst 1–2 quiz per Del 1-kapittel skal være
  distraktorer som fanger nettopp den usikre kandidaten (jf. §5-feilene) — quiz trener
  *sikkerheten* antigjettingen krever. Selve pseudokode-**presisjonen** trenes i
  `exercise`- og drillkapitlene (som har `solution` + `hints`), ikke i quiz.
  `options[0]` = riktig svar (runtime stokker).
- **Drillkapitler ligger i sine temadeler** (ikke samlet i siste del), fordi hver
  høyfrekvent håndkjørings-/pseudokodesjanger må drilles umiddelbart etter teorien.
  **Unntak:** den tverrgående **poengtrapp-/pseudokodedrillen** (kap. 8.1) ligger i Del
  8, fordi «velg lavest kjøretid» gjenbruker tre-, graf- og hashing-algoritmer på tvers.
- **Kapittelantall (35) ligger i toppen av DNA-veiledningen (20–35).** IN2010 har smalere
  *teori* enn TDT4120 (ingen DP, flyt, rekurrenser), men **bredere håndkjørings- og
  pseudokode-repertoar** — fire 100 %-gjengangere pluss heap/tre/balanserte trær/SCC
  som alle må kunne utføres for hånd og skrives i pseudokode. Hver del holdes stram;
  `kjenne`-temaer (Huffman, ADT-design, NP) får kompakte kapitler.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): strukturene og algoritmene bygges
i den rekkefølgen de forutsetter hverandre. Frekvensen styrer *omfanget* — de fire
«må beherskes perfekt»-100 %-temaene + heap/tre (86 %) får teoribolk + drillkapittel;
nivå 3-temaer får kompakte kapitler. `sectionNames` (bokforsiden) settes fra kolonne 2.

| Del | `sectionName` (bokforsiden) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Etablerer tredelingen + antigjettings-strategien + poengtrappen. |
| 1 | Asymptotisk analyse og kjøretidsfakta | 4 | **Kode→O 100 %** + **kjøretids-/teorifakta 100 %** (begge nivå 1, garanterte Del 1-poeng). Løkketelling → drill; sant/usant-fakta → eget kapittel (antigjettings-kjernen). |
| 2 | Sortering og stabilitet | 4 | **Sortering 100 %** (nivå 1). Egenskaper, invarianter, stabilitet, in-place, lineær sortering (bucket/counting/radix) + valg av algoritme → 3 teori + drill. |
| 3 | Hashing og søk | 4 | **Hashing/linear probing 100 %** (nivå 1, **tyngre enn NTNU**) — håndkjøring + insert-pseudokode + rehash. Pluss søk i pseudokode (binærsøk, finn duplikat/par) → 3 teori + drill. |
| 4 | Trær: søketrær, balanserte trær og heap | 5 | **BST 86 % + heap 86 %** (nivå 1-håndkjøring) + **balanserte trær 43 %** (AVL/rød-svart-rotasjoner — **tyngre enn NTNU**) + tre-algoritmer i pseudokode (86 %) → 4 teori + håndkjøringsdrill. |
| 5 | Grafer: representasjon, traversering og komponenter | 5 | **Grafrepr./traversering 100 %** (nivå 1) + **SCC/komponentgraf** (UiO-signatur, 43 %) + 2-fargelegging/sykeldeteksjon → 4 teori + pseudokodedrill. |
| 6 | Korteste vei, spenntrær og grådighet | 5 | **Korteste vei 100 %** + topologisk sortering 71 % + MST 57 % + Huffman 64 % (nivå 2/3) → 4 teori + modellerings-/matrisedrill. |
| 7 | Datastruktur-design, drøfting og NP-teori | 3 | ADT-design 43 %↑ (mediankø/bøttekø/trie) + drøft-to-strategier 57 %↑ + **NP 57 % fallende** (kjenne) + kort omtale av fraværende TDT4120-temaer. |
| 8 | Eksamenstrening | 4 | Poengtrapp-/pseudokodedrillen (tverrgående) + **3 komplette øvingseksamener** (tredelingsmalen: oppvarming + Del 1 sant/usant + Del 2 pseudokode). |

**Avvik fra DNA-makrostrukturen (dokumentert):** DNA-en legger alle sjangerkapitlene i
siste del. Her ligger håndkjørings- og pseudokodedrillene (1.3 kode→O, 2.4 sortering,
3.3 linear probing, 4.5 heap/AVL, 5.5 grafalgoritmer, 6.5 korteste-vei/MST) inne i
sine respektive temadeler, fordi hver er en 86–100 %-gjenganger som må drilles
umiddelbart. Del 8 beholder den **tverrgående poengtrapp-/pseudokodedrillen** (8.1) og
de tre komplette øvingseksamenene.

---

## 3. Sjangerkatalog (A–L)

Bokstavene refereres i hvert kapittel og gjengis for studenten i Del 0. Destillert fra
EKSAMENSANALYSE §3. Merk tredelingen: **A** = oppvarming (gratis); **B–F** = Del 1
(auto-rettet, antigjetting); **G–L** = Del 2 (skriv pseudokode + resonner) — unntatt L
som spenner begge.

| Kode | Sjanger | Del | Form | Hyppighet |
|---|---|---|---|---|
| **A** | Oppvarming — «Hva er en algoritme/datastruktur?» (maks 4 setninger, alle rimelige svar godtas) | Oppv. | kortsvar (fritekst) | **100 %** (fast, 2 gratispoeng) |
| **B** | Kjøretidsanalyse fra kode → O (løkketelling; k nøstede løkker → O(nᵏ), halvering → log) | Del 1 | kortsvar (uttrykk) | **100 %** |
| **C** | Kjøretids- og teori-fakta (sant/usant) — heap, hashing, P/NP, «bedre asymptotikk ⇏ færre steg» | Del 1 | sant/usant | **100 %** (antigjetting) |
| **D** | Sorteringsegenskaper og -valg — stabilitet, in-place, invarianter, når lineær sortering er mulig | Del 1 | sant/usant + valg | **100 %** |
| **E** | Håndkjøring av datastruktur — min-heap insert/removeMin, linear probing, AVL, Huffman-kodelengder; oppgi **kun sluttilstand** | Del 1 | array/tabell (2 p) | minst 1/sett |
| **F** | Matrise-/tabellavkryssing — koble egenskap til algoritme (korteste avstander etter graftype; kjøretid per grafalgoritme; MST-gjenkjenning) | Del 1 | avkryssing (2 p) | ~4/7 |
| **G** | Tre-algoritmer i pseudokode — InRange (beskåret in-order), diameter, LCA, checkBST; velg lavest kjøretid | Del 2 | pseudokode + kjøretid | **86 %** |
| **H** | Grafalgoritmer i pseudokode — SCC, topsort, Prim, Dijkstra (også reversert), avgrenset BFS, 2-fargelegging | Del 2 | pseudokode + kjøretid | hvert sett (2–3) |
| **I** | Hashing/søk i pseudokode — linear-probing-insert, modifisert binærsøk, finn duplikat/par (hash-set/to-pekere) | Del 2 | pseudokode + kjøretid | ~7/7 |
| **J** | ADT-design — mediankø (to heaps), bøttekø, trie; velg og kombiner strukturer, oppgi kjøretid | Del 2 | designskisse + kjøretid | ~3/7 ↑ |
| **K** | Drøft to strategier — sammenlign kjøretid (verste + forventet) og minne; **definér n**; konkludér | Del 2 | resonnement (tekst) | ~4/7 ↑ |
| **L** | NP-kompletthet — P/NP-fakta, verifikator, reduksjonsretning (`A ≤ₚ B`) | Del 1+2 | sant/usant + begrunnelse | **57 % ↓ fallende** |

---

## 4. Kapitler

Feltene følger DNA-ens «Skjelett-krav». For dette faget: **Innholdskontrakt** =
definisjoner/teoremer/**pseudokode-kontrakter** kapitlet SKAL lære (med generisk
notasjon, indeks fra 0, og kjøretid). Prioritetsklasser: **perfekt** (nivå 1) /
**kunne** (nivå 2) / **kjenne** (nivå 3). Hvert teorikapittel har standard-DNA-en:
Eksamensvinkel-`tip` → Forkunnskaper-`text` + Notasjons-og-pseudokodeliste-`collapsible`
→ Motivasjon → `definition`/`theorem` (inkl. pseudokode-kontrakt) → utledning m/intuisjon
(kun der eksamen krever aktiv konstruksjon) → 2–4 `example` (siste på eksamensnivå) →
Typiske-feil-`warning` → 6–12 `exercise` (stigende, ender på eksamensnivå, alle med
`solution` + `hints`) → Repetisjons-`collapsible`. Drillkapitler: Eksamensvinkel →
løsningsoppskrift → sensor-kommentert case → 8–15 oppgaver på eksamensnivå.

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet — slik testes IN2010

- **id:** `in2010-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen (digital firetimers hjelpemiddelfri tredeling i Inspera), antigjettings-skaleringen, poengtrappen, temafrekvensene, sjangerkatalogen A–L og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele IN2010-arkivet 2018–2024 (epoke 3, 2021–2024, er den representative formen). Skal gjengi: (i) **formen** — digital skoleeksamen i Inspera, **4 timer**, A–F, teller 100 %, **ingen hjelpemidler**, ingen håndskrift (også pseudokode skrives inn); (ii) den **faste tredelingen** — oppvarming (2 p, gratis) + Del 1 (mange små auto-rettede sant/usant + korte svar) + Del 2 (5–7 større pseudokode-/resonnementsoppgaver, der karakteren avgjøres); (iii) **antigjettings-skaleringen** — på sant/usant skaleres summen så ren gjetting i snitt gir 0 (f.eks. `2·max(n−16, 0)` av 32; 16 riktige = 0 poeng), MEN på ikke-strafferammede korte svar er ubesvart = feil, så svar alltid; (iv) **poengtrappen** — «lavere kjøretid = mer poeng», ofte eksplisitt (O(n) ⇒ full pott, O(n²) ⇒ minst, på samme oppgave); (v) **korona-caveaten** — H2020 var hjemmeeksamen med alle hjelpemidler (ikke representativ); INF2220-arven (2015–2017) krevde Java og alle hjelpemidler (utdatert form); (vi) **temafrekvens-tabellen** (kode→O 100 %, sortering 100 %, hashing 100 %, grafrepr./traversering 100 %, korteste vei 100 %, kjøretidsfakta 100 %, BST 86 %, heap 86 %, topsort 71 %, Huffman 64 %, NP 57 %↓, MST 57 %, drøfting 57 %↑, SCC 43 %, balanserte trær 43 %, ADT-design 43 %↑, binærsøk 43 %); (vii) at Del 2-oppgavene stiger i vanskelighet og at de **siste 1–2 nesten alltid er åpen grafmodellering** (SCC, MST, Dijkstra, topsort — der toppkarakteren skilles).
- **Innholdskontrakt:** Sjangerkatalogen A–L (§3) presenteres som studentens sjekkliste med Del-tilhørighet og typisk hyppighet. Pluss **sensors seks metaregler** (les oppgaveteksten svært nøye; oppgi kjøretid som matcher koden; lavere kjøretid = mer poeng; klar naturlig-språk-forklaring kan gi like mye som pseudokode; oppgi antagelser om representasjon; delvis uttelling med hovedpoeng først). Pluss **prognosen for neste ordinære eksamen**: oppvarming (2 p) + Del 1 (1–2 kode→O, 2–3 sorterings-/kjøretidsfakta, 1–2 håndkjøringer [heap + linear probing, muligens AVL/Huffman], en korteste-avstander-matrise, noen graf-fakta) + Del 2 (2–3 grafalgoritmer i pseudokode [minst én SCC/topsort/MST/Dijkstra-variant], 1 tre-algoritme, 1 hashing/søk, muligens 1 ADT-design og 1 drøfting; NP muligens på Del 1). Avslutt med **leseplanen**: de fire 100 %-perfekt-delene (Del 1 asymptotikk/fakta, Del 2 sortering, Del 3 hashing, Del 5 grafer) + heap/tre-håndkjøring (Del 4) er kjernen; nivå 3-temaene (Del 6 MST/Huffman, Del 7 ADT/drøfting/NP) merkes «bør kjenne til, differensierer topp».
- **Oppgavesjangre:** Ingen algoritmeoppgaver; 3–4 refleksjonsoppgaver, f.eks.: «På en sant/usant-blokk med skalering `2·max(n−16, 0)` av 32 — hvor mange må du ha sikkert riktige før du tjener ETT poeng, og hva sier det om å gjette?» og «Rangér disse fem temaene etter forventet antall Del 1-poeng på neste sett.»
- **Typiske feil:** Metafeilene — gjette på sant/usant (antigjettingen straffer usikkerhet til null); la ikke-strafferammede korte svar stå blanke (ubesvart = feil); velge en tregere algoritme enn nødvendig på Del 2 (taper poengtrappen); tro at H2020/INF2220-formatet speiler dagens eksamen; skrive lang, uklar pseudokode («en setning man ikke forstår etter to gjennomlesninger ignoreres»).
- **Quiz: 14 · Flashcards: 14** (form, tredelingen, antigjettingen, poengtrappen, frekvenser, sjangerkatalogen A–L)

---

### Del 1 — Asymptotisk analyse og kjøretidsfakta *(kode→O + fakta: PERFEKT)*

> Del 1 er fundamentet: hvert kjøretidssvar i resten av boka bygger på det, og de to
> temaene her (kode→O, sjanger B; og kjøretids-/teorifakta, sjanger C) er begge 100 %
> og gir de billigste, mest garanterte Del 1-poengene. Kap. 1.3 driller løkketellingen;
> kap. 1.4 er **antigjettings-kjernen** — sikker faktakunnskap.

#### Kapittel 1.1: Asymptotisk notasjon — O (og kort Ω, Θ)

- **id:** `in2010-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** O-notasjonen (øvre grense) som IN2010s arbeidshest, med kort omtale av Ω og Θ — grunnlaget alle kjøretidssvar hviler på.
- **Eksamensbelegg:** Sjanger B + C, 100 %. IN2010 bruker **nesten utelukkende O** (ingen o/ω; Ω/Θ nevnes i emnebeskrivelsen). Forenkling gjøres ved **løkketelling, ikke masterteorem**. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **O(g)** (øvre grense: `f(n) ≤ c·g(n)` for `n ≥ n_0`) — den sentrale. Kort `definition` **Ω(g)** (nedre) og **Θ(g)** (tett = O og Ω). Standard vekstordning som `theorem` (`1 < \log n < n < n\log n < n^2 < n^3 < 2^n < n!`). Nøkkelfakta (til quiz/flashcards): «lineær kjøretid» = O(n); et array kan sjekkes sortert i O(n); **bedre asymptotisk kompleksitet betyr IKKE færre steg for all input** (kun for stor nok n) — dette er en fast sant/usant-felle. Ingen o/ω. Merk at IN2010 skriver `f(n) = O(g(n))` selv om det leses «tilhører».
- **Oppgavesjangre:** C (klassifisér/sant-usant). Mønstereksempel (nyskrevet, C): «Er utsagnet sant: *En O(n log n)-algoritme bruker alltid færre grunnsteg enn en O(n²)-algoritme på samme input.*» (usant — gjelder kun asymptotisk, for stor nok n).
- **Typiske feil:** Tro at bedre O ⇒ færre steg for *all* input (§5-felle); blande O (øvre) og Θ (tett); bruke o/ω (ikke IN2010-notasjon); ta med konstanter/lavere ordensledd i svaret.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 1.2: Kjøretidsanalyse fra kode — løkketelling

- **id:** `in2010-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `in2010-1-1` · **kapitteltype:** teori
- **description:** Å lese O-kjøretiden rett ut av pseudokode ved å telle nøstede løkker og gjenkjenne halveringsmønstre — den mest garanterte Del 1-poengkilden.
- **Eksamensbelegg:** Sjanger B, 100 %, ofte 1–2 per sett. Poeng gis for riktig orden **selv med syntaksfeil** i koden. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **løkketellingsreglene**: (i) `k` nøstede løkker som hver går over `n` ⇒ O(nᵏ) (en femdobbelt nøsting ⇒ O(n⁵)); (ii) en løkke som **halverer** tellevariabelen (`j = j·2` til `n`, eller `j = j/2`) bidrar en **log-faktor** O(log n); (iii) en indre løkke til et **konstant** tak (ikke til `n`) endrer ikke orden; (iv) sekvensielle (ikke-nøstede) løkker legges sammen ⇒ dominerende ledd vinner. Kort om **rekursjon** (INF2220-variant, kjenne): `proc(n−1)+proc(n−1)` som halverer arbeid ⇒ O(2ⁿ). Fast fremgangsmåte: identifiser hver løkkes rekkevidde → multiplisér for nøsting → summér for sekvens → behold dominerende ledd.
- **Oppgavesjangre:** B. Mønstereksempel (nyskrevet): «Oppgi O-kjøretiden: en ytre løkke `for i = 0..n−1`, inni den en løkke `j = 1; while j < n: j = j·2`, og inni den en `for k = 0..n−1`.» (O(n² log n)).
- **Typiske feil:** Telle en konstant indre løkke som O(n); overse at en halveringsløkke gir log (ikke n); glemme at sekvensielle løkker summeres (ikke multipliseres); ikke oppgi orden fordi koden hadde en syntaksfeil (orden gir likevel poeng).
- **Quiz: 18 · Flashcards: 14**

#### Kapittel 1.3: DRILL — Kode → O-notasjon

- **id:** `in2010-1-3` · **number:** 1.3 · **estimatedMinutes:** 80 · **prerequisites:** `in2010-1-2` · **kapitteltype:** drill
- **description:** Systematisk drill i sjanger B: les O-kjøretiden ut av pseudokode med nøstede løkker, halvering og sekvens — de garanterte Del 1-poengene.
- **Eksamensbelegg:** Sjanger B i hvert sett (100 %). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) marker hver løkke og dens rekkevidde (til `n`? til konstant? halverer?); 2) multiplisér orden for nøsting, summér for sekvens; 3) behold dominerende ledd; 4) skriv **kun** strammeste O-uttrykk. Fast fellekatalog som SKAL demonstreres: konstant indre løkke (ikke O(n)); halvering ⇒ log; sekvens ⇒ sum. Gjennomsporet eksamenscase med margnotater om hva som gir uttelling (orden gir poeng selv med syntaksfeil).
- **Oppgavesjangre:** B. 12–16 oppgaver på eksamensnivå som roterer variantene (dobbel/trippel nøsting, halveringsløkke, konstant tak, sekvens av løkker, en rekursjonsvariant), hver med full løsning.
- **Typiske feil:** Hele fellekatalogen samlet (konstant løkke som O(n); overse log ved halvering; multiplisere sekvensielle løkker).
- **Quiz: 20 · Flashcards: 10**

#### Kapittel 1.4: Kjøretids- og teori-fakta — sant/usant og antigjettings-strategi

- **id:** `in2010-1-4` · **number:** 1.4 · **estimatedMinutes:** 55 · **prerequisites:** `in2010-1-1` · **kapitteltype:** teori
- **description:** De faste sant/usant-sannhetene sensor forventer sikkert (kjøretid, heap, sortering, P/NP) — kjernen i Del 1s antigjettings-regime, der usikkerhet straffes til null.
- **Eksamensbelegg:** Sjanger C, 100 % (fordelt på flere punkter per sett). Antigjettings-skaleringen betyr at disse må sitte **sikkert**. Prioritet: **perfekt**. (Merk: dette kapitlet samler faktaene; strukturene bak dem utdypes i sine egne deler og henvises til.)
- **Innholdskontrakt:** `definition`/`theorem`-blokker med faste sannheter (hvert som eget flashcard-par «utsagn → sant/usant + hvorfor»): **Kjøretid** — mergesort er O(n log n); binærsøk er raskere på array enn på lenket liste; et array kan sjekkes sortert i O(n). **Heap** — et array kan bygges til heap i O(n); innsetting O(log n) verste tilfelle; over halvparten av elementene ligger på de to nederste nivåene; man kan **IKKE** finne største element i en min-heap i O(log n); et AVL-tre kan brukes som prioritetskø med samme orden som en heap; en min-heap blir **ikke** en max-heap ved å reversere arrayet. **P/NP** (kjenne, se 7.3) — `P ⊆ NP` (sant); alle NP-komplette problemer er polynomtidsreduserbare til hverandre (sant); det er **ikke** bevist verken `P = NP` eller `P ≠ NP`; å løse ett NP-komplett problem i polytid ⇒ `P = NP` (sant). Egen `tip` **antigjettings-strategien**: regn ut hvor mange sikre riktige som trengs for netto poeng under en gitt skalering; svar kun der du er sikker på sant/usant, men svar alltid på ikke-strafferammede korte svar.
- **Oppgavesjangre:** C. Mønstereksempel (nyskrevet): «Marker sant/usant og begrunn med én setning: (a) *Du kan hente ut det største elementet i en min-heap i O(log n).* (b) *Å bygge en heap fra et vilkårlig array tar O(n log n).*» ((a) usant — O(n); (b) usant — O(n)).
- **Typiske feil:** Gjette på usikre utsagn (antigjettingen straffer det til null); forveksle min-/max-heap-fakta; tro build-heap er O(n log n); blande «raskere på array» (binærsøk) med lenket liste.
- **Quiz: 24 · Flashcards: 20**

**Prøve-kvote Del 1:** 4 prøver (Asymptotisk analyse og kjøretidsfakta)
1. Prøve 1.A (25 min): Kode → O — nøsting, halvering, sekvens (sjanger B).
2. Prøve 1.B (25 min): O-notasjon og vekstordning — klassifisér og forenkl (B/C).
3. Prøve 1.C (30 min): Kjøretids-/teorifakta — sant/usant med begrunnelse (sjanger C).
4. Prøve 1.D (30 min): Antigjettings-blandet — heap-/P/NP-fakta + poengregning på en skalert blokk (C).

---

### Del 2 — Sortering og stabilitet *(sortering: PERFEKT)*

> Sortering er 100 % — men i IN2010 testes den som **egenskaper og valg**, ikke som
> håndkjøring av selve sorteringen. Det avgjørende er stabilitet, in-place,
> invariantene etter *i* iterasjoner, og **når lineær sortering (bucket/counting/radix)
> er mulig** — med den faste fellen at de ikke kan brukes på generelle elementer.

#### Kapittel 2.1: Sammenligningsbaserte sorteringer og invarianter

- **id:** `in2010-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `in2010-1-2` · **kapitteltype:** teori
- **description:** Bubble, Selection og Insertion sort — mekanikk, kjøretider, og de invariantene etter *i* iterasjoner som sensor spør om direkte.
- **Eksamensbelegg:** Sjanger D, 100 %. Invariantene og stabilitet/in-place er faste sant/usant-punkter. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **invariantene etter *i* iterasjoner**: Bubble får de *i siste* på endelig plass; Selection får de *i første* endelig sortert; Insertion får de *i første* innbyrdes sortert (men **ikke** endelig plassert). `definition` **stabilitet** (like nøkler bevarer innbyrdes rekkefølge) og **in-place** (O(1) ekstra minne). Faste egenskaper: Selection garanterer **minimalt antall bytter**; Bubble/Insertion bytter kun naboer (⇒ stabile); alle tre er O(n²) verste, Insertion O(n) på ferdigsortert. `theorem` **O(n log n)-nedre grensen** for sammenligningsbasert sortering (kort, beslutningstre-intuisjon). Kjøretidstabell: navn → best/verste + stabil? + in-place?
- **Oppgavesjangre:** D. Mønstereksempel (nyskrevet, D): «Etter 3 iterasjoner av Selection sort på en usortert liste — hvilke elementer er garantert på endelig plass?» (de 3 minste, ytterst til venstre).
- **Typiske feil:** Forveksle hvilke elementer hver algoritme plasserer (bubble = siste, selection = første, insertion = ikke endelig); tro Insertion plasserer endelig etter *i* steg; påstå Selection er stabil uten videre; blande antall bytter (Selection minst) med antall sammenligninger.
- **Quiz: 16 · Flashcards: 24**

#### Kapittel 2.2: Effektive sorteringer og nedre grense

- **id:** `in2010-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `in2010-2-1` · **kapitteltype:** teori
- **description:** Merge, Heap og Quick sort som O(n log n)-sorteringer (Quick O(n²) verste) — hva de brukes til på Del 2 (sortér-så-skann), ikke håndkjøring.
- **Eksamensbelegg:** Sjanger D + C, 100 %. Kjøretidsfakta forventes direkte og hjelpemiddelfritt. Heap-*strukturen* håndkjøres i kap. 4.4; her nevnes heapsort kun som O(n log n)-sortering. Prioritet: **perfekt**.
- **Innholdskontrakt:** Kort mekanikk-oversikt (uten full pseudokode-kontrakt, som ligger i egne strukturkapitler): **Merge sort** (splitt/flett, O(n log n), stabil, ikke in-place); **Heap sort** (O(n log n), in-place, ustabil — struktur i 4.4); **Quicksort** (partisjonér om pivot, O(n log n) forventet / O(n²) verste, ustabil). Nøkkelbruk på Del 2 (sjanger I): «usortert ⇒ sortér i O(n log n) med merge/heap/quick og skann» er et lovlig alternativ til hashing — men **bucket/radix er IKKE lov** på generelle elementer (se 2.3). Kjøretidstabell: navn → best/verste/forventet + stabil? + in-place?
- **Oppgavesjangre:** C/D. Mønstereksempel (C): «Sant/usant: *Quicksort har O(n log n) i verste tilfelle.*» (usant — O(n²) verste; O(n log n) forventet).
- **Typiske feil:** Blande Quicksort verste (O(n²)) med forventet (O(n log n)); tro Merge sort er in-place; tro Heap sort er stabil; foreslå bucket/radix som «rask sortering» på generelle elementer (se 2.3).
- **Quiz: 14 · Flashcards: 20**

#### Kapittel 2.3: Lineær sortering — bucket, counting og radix

- **id:** `in2010-2-3` · **number:** 2.3 · **estimatedMinutes:** 45 · **prerequisites:** `in2010-2-2` · **kapitteltype:** teori
- **description:** Når du kan sortere i lineær tid — og den faste fellen at bucket/counting/radix krever et kjent, begrenset verdiområde.
- **Eksamensbelegg:** Sjanger D, 100 %. «Kjent, liten verdimengde ⇒ lineær sortering» og «kan ikke brukes på generelle elementer» er faste punkter. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition`/`theorem`: **Counting sort** (heltallsnøkler i kjent område `[0..k]`; O(n+k); stabil); **Radix sort** (siffervis, stabil delsortering per siffer; O(d(n+k))); **Bucket sort** (verdier fordelt i kjent intervall; O(n) forventet). Den avgjørende regelen (`warning`-verdig): **bucket/counting/radix kan IKKE brukes når «alt vi vet er at elementene er sammenlignbare»** — de omgår O(n log n)-grensen nettopp fordi de ikke sammenligner, men det krever kunnskap om verdiområdet (f.eks. alder ≤ 100, N kategorier). Valgregel: kjent lite verdiområde ⇒ lineær sortering; krav om stabilitet ⇒ unngå ustabile (Quick/Heap). Gnome sort (ukjent algoritme-varianten): gjenkjenn slektskap med Insertion — O(n²), stabil, in-place, men flere sammenligninger.
- **Oppgavesjangre:** D. Mønstereksempel (nyskrevet, D): «Du skal sortere n personer etter alder (0–120 år). Hvilken sortering gir lavest kjøretid, og hva er den? Ville svaret endret seg hvis nøklene var vilkårlige desimaltall?» (counting/bucket, O(n+k); ja — da må du bruke en sammenligningssortering, O(n log n)).
- **Typiske feil:** Foreslå bucket/radix på generelle sammenlignbare elementer (§5-felle); glemme heltalls-/områdekravet i counting sort; tro lineær sortering alltid går; blande stabilitet med «sortert korrekt».
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 2.4: DRILL — Sorteringsegenskaper, invarianter og valg

- **id:** `in2010-2-4` · **number:** 2.4 · **estimatedMinutes:** 80 · **prerequisites:** `in2010-2-3` · **kapitteltype:** drill
- **description:** Full drill på sjanger D: invarianter etter *i* iterasjoner, stabilitet/in-place, kjøretider, og valg av sortering ut fra en oppgitt begrensning.
- **Eksamensbelegg:** Sjanger D i hvert sett (100 %). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** For **egenskapsspørsmål**: hent faktum (invariant / stabil / in-place / kjøretid) sikkert (antigjetting). For **valg-spørsmål**: 1) hva vet vi om verdiområdet? kjent + lite ⇒ counting/bucket/radix (lineær); ellers sammenligningssortering; 2) kreves stabilitet? unngå Quick/Heap; 3) oppgi kjøretiden som matcher valget. Gjennomkjørt case med margnotater. 10–14 oppgaver: invarianter (bubble/selection/insertion), stabilitets-/in-place-tabell, kjøretider for alle sju, «velg sortering gitt begrensning X», bucket/radix-begrensningen.
- **Oppgavesjangre:** D. Mønstereksempel: «For hver algoritme, fyll inn: stabil? in-place? verste kjøretid? hvilke elementer på plass etter *i* iterasjoner?»
- **Typiske feil:** §5 (bucket/radix på generelle elementer); feil invariant; oppgi verste der forventet spørres; blande stabilitet og in-place.
- **Quiz: 20 · Flashcards: 12**

**Prøve-kvote Del 2:** 4 prøver (Sortering og stabilitet)
1. Prøve 2.A (25 min): Invarianter etter *i* iterasjoner + stabilitet/in-place (sjanger D).
2. Prøve 2.B (25 min): Kjøretider — alle sju sorteringer, best/verste/forventet (D/C).
3. Prøve 2.C (30 min): Lineær sortering — når mulig + bucket/radix-begrensningen (D).
4. Prøve 2.D (30 min): Valg av sortering gitt begrensning + gnome-gjenkjenning (D).

---

### Del 3 — Hashing og søk *(hashing/linear probing: PERFEKT — tyngre enn NTNU)*

> Hashing er 100 % og **tyngre enn i TDT4120**: det testes både som **håndkjøring** av
> linear probing (Del 1, sjanger E) og som **pseudokode** (Del 2, sjanger I: insert,
> finn duplikat/par). Søk (binærsøk modifisert til indeks) hører hjemme her fordi de
> samme Del 2-oppgavene velger mellom sortér-og-binærsøk og hash-set.

#### Kapittel 3.1: Hashtabeller og lukket hashing (linear probing)

- **id:** `in2010-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `in2010-1-2` · **kapitteltype:** teori
- **description:** Hashtabellen med lukket hashing og lineær probing — hashfunksjon, kollisjonshåndtering og håndkjøring av innsetting i array-form.
- **Eksamensbelegg:** Sjanger E (håndkjøring) + I (pseudokode), 100 %. Linear probing er den nest hyppigste håndkjøringen etter heap. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **hashtabell**, **kollisjon**, **lukket hashing / lineær probing** (kollisjon løses ved å prøve neste indeks). Pseudokode-kontrakt (`theorem`) **`Insert(k)`**: start på `h(k) = k mod N`; ved kollisjon prøv `(i+1) mod N` til tom plass; **overskriv ved lik nøkkel**; `_` markerer tom plass. **Kritiske detaljer sensor trekker for**: indeks må holdes i `0..N−1` (bruk `mod N`), og lik nøkkel skal overskrives, ikke dupliseres. Håndkjøringsregel: oppgi **hele tabellen** som sluttilstand (kommaseparert, `_` for tom). Forventet oppslag O(1), verste O(n) (alt klumper).
- **Oppgavesjangre:** E + I. Mønstereksempel (nyskrevet, E): «Sett inn nøklene 12, 5, 22, 15, 2 i denne rekkefølgen i en tabell med N = 7 og `h(k) = k mod 7`, lineær probing. Oppgi hele tabellen.»
- **Typiske feil:** Probing som går utenfor `0..N−1` (glemt `mod N`); ikke overskrive ved lik nøkkel; feil `h(k)`; oppgi bare de innsatte plassene i stedet for hele tabellen.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 3.2: Load-faktor, rehashing og hashmap/-set som verktøy

- **id:** `in2010-3-2` · **number:** 3.2 · **estimatedMinutes:** 45 · **prerequisites:** `in2010-3-1` · **kapitteltype:** teori
- **description:** Load-faktor og når man rehasher, og hashmap/-set som Del 2-verktøyet for O(n)-løsninger.
- **Eksamensbelegg:** Sjanger C + I, 100 %. Rehash/load-faktor og «bruk hash-set for O(n)» er faste. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **load-faktor** `α = n/N` (antall elementer / tabellstørrelse). `theorem` **rehashing**: når `α` blir for høy, doble arrayet og **reinnsett alt** (hashverdiene endres med ny N). `definition` **hashmap** (nøkkel→verdi) og **hash-set** (medlemskap), begge O(1) forventet, O(n) verste. Nøkkelbruk (broen til sjanger I): «finn/tell/slå opp i O(n) forventet» ⇒ hash-set/-map; sammenlign med «sortér og skann» (O(n log n)) — hash er raskere forventet, men O(n²) verste hvis alt kolliderer.
- **Oppgavesjangre:** C + I. Mønstereksempel (nyskrevet, C): «Sant/usant: *Rehashing kan gjenbruke de gamle indeksene direkte etter dobling av tabellen.*» (usant — ny N gir nye `k mod N`, alt må reinnsettes).
- **Typiske feil:** Tro rehash bevarer indeksene; blande load-faktor-teller/nevner; oppgi hashmap verste som O(1) (det er O(n)); glemme «forventet» når man oppgir O(1).
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 3.3: DRILL — Linear-probing håndkjøring og insert-pseudokode

- **id:** `in2010-3-3` · **number:** 3.3 · **estimatedMinutes:** 80 · **prerequisites:** `in2010-3-2` · **kapitteltype:** drill
- **description:** Full drill på sjanger E (håndkjør linear-probing-innsetting, oppgi hele tabellen) og I (skriv insert-prosedyren korrekt).
- **Eksamensbelegg:** Sjanger E i minst hvert sett + I. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** For **håndkjøring** (E): 1) regn `h(k) = k mod N`; 2) ved opptatt plass, prøv `(i+1) mod N` til tom; 3) overskriv ved lik nøkkel; 4) oppgi **hele** tabellen med `_` for tom. For **pseudokode** (I): skriv `Insert` med korrekt `mod N`-wraparound, kollisjonsløkke og overskriving; oppgi kjøretid (O(1) forventet). Gjennomkjørt case med margnotater (trekk for indeks utenfor `0..N−1`, for manglende overskriving). 10–14 oppgaver: innsetting med ulike N og `h`, en med kollisjonsklynge, skriv `Insert`-prosedyren, en `Contains`/`Search`-variant.
- **Oppgavesjangre:** E, I. Mønstereksempel: «Skriv `Insert(tabell, k)` for lukket hashing med lineær probing. Oppgi antagelser og kjøretid.»
- **Typiske feil:** §5 (utenfor `0..N−1`; ikke overskrive lik nøkkel); glemme `mod N` i wraparound; oppgi verste som O(1).
- **Quiz: 18 · Flashcards: 10**

#### Kapittel 3.4: Søk i pseudokode — binærsøk, finn duplikat og finn par

- **id:** `in2010-3-4` · **number:** 3.4 · **estimatedMinutes:** 55 · **prerequisites:** `in2010-3-2` · **kapitteltype:** teori
- **description:** De faste Del 2-søkeoppgavene: modifisert binærsøk til indeks, finn duplikat, og finn par som summerer til x — der valget mellom hash og sortering avgjør poengtrappen.
- **Eksamensbelegg:** Sjanger I, ~7/7. «Velg lavest kjøretid» er eksplisitt her (poengtrappen). Prioritet: **perfekt** (nivå 1/2).
- **Innholdskontrakt:** Pseudokode-kontrakt **binærsøk** (O(log n) på **sortert** array): standard binærsøk returnerer true/false — **må modifiseres** for å returnere indeks (nevn dette eksplisitt; sensor trekker for å hevde indeks uten å nevne modifikasjonen). `theorem` **finn duplikat**: sortert ⇒ modifisert binærsøk / naboskann O(n); usortert ⇒ **hash-set** O(n) forventet, ELLER sortér (merge/heap/quick — **ikke** bucket/radix på generelle elementer) og skann. `theorem` **finn par som summerer til x**: sortert ⇒ **to-pekere** O(n) (én fra hver ende); usortert ⇒ hash-set O(n) forventet. Gjennomgående poengtrapp-notat: lineær slår kvadratisk; oppgi hva `n` er.
- **Oppgavesjangre:** I. Mønstereksempel (nyskrevet, I): «Gitt et **usortert** array, skriv en algoritme som avgjør om to elementer summerer til `x`. Oppgi kjøretid og hvorfor den er lavest mulig.» (hash-set, O(n) forventet; alternativt sortér + to-pekere O(n log n)).
- **Typiske feil:** Hevde at pensums binærsøk returnerer indeks uten å nevne modifikasjonen (§5); bruke bucket/radix i «sortér og skann»-alternativet; kvadratisk løkke der hash/to-pekere gir lineært; ikke definere `n`.
- **Quiz: 14 · Flashcards: 16**

**Prøve-kvote Del 3:** 4 prøver (Hashing og søk)
1. Prøve 3.A (25 min): Linear-probing håndkjøring — oppgi hele tabellen (sjanger E).
2. Prøve 3.B (25 min): Load-faktor, rehashing, hashmap/-set-fakta (sjanger C/I).
3. Prøve 3.C (30 min): Skriv `Insert`-prosedyren + kjøretid (sjanger I).
4. Prøve 3.D (30 min): Finn duplikat / finn par — velg lavest kjøretid, sortert vs. usortert (I).

---

### Del 4 — Trær: søketrær, balanserte trær og heap *(BST & heap: PERFEKT håndkjøring; balanserte: tyngre enn NTNU)*

> BST (86 %) og heap (86 %) er de sikreste håndkjøringskandidatene og de to
> strukturene studenter oftest forveksler (BST-egenskap = venstre–høyre; heap-egenskap
> = opp–ned). Tre-algoritmer i pseudokode (sjanger G, 86 %) er en Del 2-ryggrad der
> **beskjæring** skiller lineært fra kvadratisk. Balanserte trær (AVL/rød-svart, 43 %)
> er **tyngre enn i NTNU** — egen rotasjons-håndkjøring.

#### Kapittel 4.1: Binære søketrær (BST)

- **id:** `in2010-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `in2010-2-1` · **kapitteltype:** teori
- **description:** BST-egenskapen, innsetting og traversering — inkludert at in-order på et BST gir **sortert** rekkefølge.
- **Eksamensbelegg:** Sjanger E (håndkjøring) + G (pseudokode-grunnlag), 86 %. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **BST-egenskapen** (hver node > alt i venstre subtre, < alt i høyre subtre — venstre–høyre-orden). Pseudokode-kontrakter: `Insert` (O(h)); `InOrder` (O(n), gir **sortert** utskrift); `Search`/`Min`/`Max` (O(h)). Antagelser om node: `v.left`, `v.right`, `v.x` (eller `v.element`). Balansert høyde O(log n); degenerert (skjev) O(n). Nøkkelinnsikt: in-order = sortert → utnyttes i beskjæring (4.2) og håndkjøring.
- **Oppgavesjangre:** E + G. Mønstereksempel (nyskrevet, E): «Sett inn 6, 2, 8, 1, 4, 7 i et tomt BST, og oppgi in-order-utskriften.» (sortert: 1, 2, 4, 6, 7, 8).
- **Typiske feil:** Forveksle BST-egenskapen (venstre–høyre) med heap-egenskapen (opp–ned) — §5-felle; tro in-order gir innsettingsrekkefølgen; anta balansert tre (høyde kan bli O(n)); gå til feil side ved innsetting.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 4.2: Tre-algoritmer i pseudokode — beskjæring og lineær rekursjon

- **id:** `in2010-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `in2010-4-1` · **kapitteltype:** teori
- **description:** De faste Del 2-treoppgavene — InRange (beskåret in-order), diameter (én DFS), LCA og checkBST — der lavere kjøretid gir mer poeng.
- **Eksamensbelegg:** Sjanger G, 86 %. Poengtrappen er eksplisitt (diameter: O(n) = 8 p, O(n²) = 5 p). Prioritet: **perfekt** (nivå 2, avgjør C→A).
- **Innholdskontrakt:** Fire pseudokode-kontrakter (hver med antagelser, kjøretid og poengnotat): **InRange(v, a, b)** — in-order med **beskjæring**: rekursér venstre kun hvis `a < v.x`, skriv hvis `a ≤ v.x ≤ b`, rekursér høyre kun hvis `v.x < b`; O(log n + antall treff), O(log n) når `a = b`; naiv full traversering O(n) gir færre poeng. **Diameter** — **én** DFS som returnerer subtre-høyde; lengste sti gjennom en node = `hL + hR + 2`; hold global maks; **O(n)** (ikke O(n²) ved høyde-per-node); ikke anta at lengste sti går gjennom rota. **LCA** — generelt tre med `parent`/`depth`: løft dypeste node til lik dybde, så begge oppover, O(h); BST-variant: hvis `x ≤ v.element ≤ y` er `v` svaret, ellers gå én vei, O(h). **checkBST** — oppgi BST-egenskapen først, så O(n)-løsning (send ned `[low, high]`-intervall, eller in-order + sjekk sortert); naiv `Min`/`Max` per node = O(n²).
- **Oppgavesjangre:** G. Mønstereksempel (nyskrevet, G): «Skriv en prosedyre som skriver ut alle verdier i et BST i intervallet `[a, b]` i sortert rekkefølge, så effektivt som mulig. Oppgi antagelser og kjøretid.» (beskåret in-order, O(log n + treff)).
- **Typiske feil:** Full/naiv traversering der beskjæring var mulig (§5, halverer poeng); diameter med høyde-per-node ⇒ O(n²); anta at lengste sti går gjennom rota; checkBST med Min/Max per node (O(n²)); forveksle BST- og heap-egenskap.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 4.3: Balanserte trær — AVL og rød-svart

- **id:** `in2010-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `in2010-4-1` · **kapitteltype:** teori
- **description:** AVL-trær med rotasjoner (håndkjøring) og rød-svart-fargelegging — hvorfor balanse gir O(log n), og hvordan man teller rotasjoner.
- **Eksamensbelegg:** Sjanger E (håndkjøring), 43 % — men **tyngre enn i NTNU** (egen rotasjons-håndkjøring). Prioritet: **kunne** (differensierer).
- **Innholdskontrakt:** `definition` **AVL-tre** (høydebalansert: venstre/høyre subtre-høyder skiller ≤ 1). `theorem` **rotasjoner**: enkelrotasjon (venstre/høyre) og dobbelrotasjon (= to enkle). Håndkjøringsregel: **tell rotasjoner** (dobbel = to enkle), oppgi **rotverdien** etter innsetting, og si om resultatet er et gyldig AVL-tre. `definition` **rød-svart-tre** (fargeinvariantene, kort — hovedvekt på fakta): **alle AVL-trær kan fargelegges som rød-svart** (fast sant-punkt); begge gir O(log n) høyde. Fakta til quiz: et AVL-tre kan brukes som prioritetskø med samme orden som en heap (fra 1.4).
- **Oppgavesjangre:** E. Mønstereksempel (nyskrevet, E): «Sett inn 1, 2, 3, 4, 5 i et tomt AVL-tre. Hvor mange enkle rotasjoner utføres totalt, og hva er rotverdien til slutt?»
- **Typiske feil:** Telle dobbelrotasjon som én (den er to enkle); glemme å oppgi rotverdi / gyldighet; forveksle AVL-balanse (høyde) med heap-egenskap; tro rød-svart og AVL har ulik asymptotisk høyde.
- **Quiz: 14 · Flashcards: 18**

#### Kapittel 4.4: Heap og prioritetskø

- **id:** `in2010-4-4` · **number:** 4.4 · **estimatedMinutes:** 55 · **prerequisites:** `in2010-2-2` · **kapitteltype:** teori
- **description:** Min-heapen som array (indeks fra 0), Insert (sift-up) og RemoveMin (down-heap) med håndkjøring, og de faste heap-faktaene.
- **Eksamensbelegg:** Sjanger E (håndkjøring) + C (fakta), 86 %. Heap er den hyppigste håndkjøringskandidaten. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **heap-egenskapen** (min-heap: forelder ≤ **begge** barn — opp–ned-orden, **ingen** venstre–høyre-orden) og **strukturkravet** (komplett tre). Array-representasjon **indeks fra 0**: rot på 0, forelder til `i` er `⌊(i−1)/2⌋`, barn `2i+1` og `2i+2`. Pseudokode-kontrakter: **`Insert(x)`** — legg på indeks `n`, sift-up mot forelder mens barnet er mindre; O(log n). **`RemoveMin()`** — flytt siste til rot, down-heap mot **minste barn** (sjekk at barn finnes!); O(log n). **`BuildHeap`** — O(n) (fast fakta, ikke O(n log n)). Faste fakta (quiz/flashcards): over halvparten av elementene ligger på de to nederste nivåene; man kan **ikke** finne max i en min-heap i O(log n); reversering av arrayet gir **ikke** en max-heap. Håndkjøringsregel: oppgi array-tilstanden som sluttsvar.
- **Oppgavesjangre:** E + C. Mønstereksempel (nyskrevet, E): «Utfør `RemoveMin` én gang på min-heapen `[2, 5, 3, 9, 8, 4]` (array, indeks fra 0). Oppgi arrayet etterpå.»
- **Typiske feil:** Down-heap uten å sjekke at barn finnes (§5, gir maks delvis uttelling); feil forelder-/barnindeks (blande 0- og 1-indeksering); forveksle heap-egenskap (opp–ned) med BST (venstre–høyre); tro build-heap er O(n log n); tro min-heap gir max i O(log n).
- **Quiz: 16 · Flashcards: 24**

#### Kapittel 4.5: DRILL — Håndkjøring av heap og AVL

- **id:** `in2010-4-5` · **number:** 4.5 · **estimatedMinutes:** 85 · **prerequisites:** `in2010-4-4` · **kapitteltype:** drill
- **description:** Full drill på sjanger E for de to sikreste håndkjøringsstrukturene: heap-innsetting/removeMin (indeks fra 0) og AVL-rotasjonstelling — mekanisk og feilfritt.
- **Eksamensbelegg:** Sjanger E, heap 86 % + AVL 43 %. Prioritet: **perfekt** (heap), **kunne** (AVL).
- **Innholdskontrakt (løsningsoppskrift):** For **heap**: 1) tegn arrayet som komplett tre (indeks fra 0); 2) utfør Insert (sift-up) / RemoveMin (down-heap mot minste barn, sjekk at barn finnes); 3) oppgi **kun** array-sluttilstanden. For **AVL**: 1) sett inn i gitt rekkefølge; 2) tell rotasjoner (dobbel = to enkle); 3) oppgi rotverdi + gyldighet. Gjennomkjørt case med margnotater (delvis uttelling for delvis riktig tilstand; downHeap-barn-sjekk gir de siste poengene). 10–14 oppgaver: Insert-sekvens, RemoveMin (også flere ganger), AVL-innsetting med rotasjonstelling, «er dette en gyldig heap/AVL?».
- **Oppgavesjangre:** E. Mønstereksempel: «Sett inn 7, 3, 9, 1, 4 i en tom min-heap (array, indeks fra 0). Oppgi arrayet, og deretter arrayet etter ett `RemoveMin`.»
- **Typiske feil:** §5 (downHeap uten barn-sjekk; feil indeksering); reparere ugyldig struktur før operasjonen; oppgi mer enn sluttilstanden; dobbelrotasjon telt som én.
- **Quiz: 20 · Flashcards: 12**

**Prøve-kvote Del 4:** 4 prøver (Trær: søketrær, balanserte trær og heap)
1. Prøve 4.A (25 min): BST-innsetting + in-order (sortert) + heap vs. BST-egenskap (E/D).
2. Prøve 4.B (30 min): Heap-håndkjøring — Insert + RemoveMin (indeks fra 0) (sjanger E).
3. Prøve 4.C (30 min): Tre-algoritmer i pseudokode — InRange/diameter/checkBST, velg lavest kjøretid (G).
4. Prøve 4.D (30 min): AVL-rotasjoner + rød-svart-/heap-fakta (E/C).

---

### Del 5 — Grafer: representasjon, traversering og komponenter *(grafrepr./traversering: PERFEKT; SCC: UiO-signatur)*

> Grafrepresentasjon og traversering er 100 % og selve **ryggraden i Del 2**. SCC +
> komponentgrafen (kondensasjon) er en **UiO-signatur** som brukes til
> reachability-resonnement (start-/sluttnoder = komponenter med inn-/utgrad 0). Kap.
> 5.5 er den store grafalgoritme-pseudokodedrillen — der karakteren avgjøres.

#### Kapittel 5.1: Grafrepresentasjon og grunnbegreper

- **id:** `in2010-5-1` · **number:** 5.1 · **estimatedMinutes:** 45 · **prerequisites:** `in2010-1-2` · **kapitteltype:** teori
- **description:** Grafer som `G=(V,E)`, nabolister vs. nabomatrise, rettet/urettet, vektet/uvektet, inngrad/utgrad — og hvorfor representasjonsvalg påvirker kjøretid.
- **Eksamensbelegg:** Sjanger F (kjøretid per representasjon) + grunnlag for all Del 2-graf, 100 %. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **graf** `G=(V,E)`, **rettet/urettet**, **vektet**, **enkel graf**, **grad/inngrad/utgrad**, **sammenhengende**, **sti/sykel**. `definition` **naboliste** (O(|V|+|E|) plass; iterér naboer i O(grad)) vs. **nabomatrise** (O(|V|²) plass; kant-oppslag O(1)). `theorem` **grafegenskaper** (sammenhengende / 2-sammenhengende / tre / sykel) — faste sant/usant/avkryssingspunkter. Antagelse-regelen: kandidaten oppgir representasjon; kjøretider skrives med `|V|`, `|E|`.
- **Oppgavesjangre:** F. Mønstereksempel (nyskrevet, F): «For hver graf, kryss av: sammenhengende? inneholder sykel? er et tre? er en enkel graf?»
- **Typiske feil:** Blande naboliste- og nabomatrise-kjøretider/plass; forveksle rettet/urettet grad; kalle en graf med sykel et tre; ikke oppgi antatt representasjon i Del 2.
- **Quiz: 14 · Flashcards: 20**

#### Kapittel 5.2: BFS og DFS — traversering

- **id:** `in2010-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `in2010-5-1` · **kapitteltype:** teori
- **description:** Bredde-først (BFS) og dybde-først (DFS) traversering, DFS-full over alle komponenter, og det faste skillet DFS fra én node O(|E|) vs. DFS-full O(|V|+|E|).
- **Eksamensbelegg:** Sjanger H (kjernen) + F, 100 %. DFS vs. DFS-full-kjøretiden er et eksplisitt trekk-punkt. Prioritet: **perfekt**.
- **Innholdskontrakt:** Pseudokode-kontrakter: **BFS** (kø; besøker lagvis; korteste antall kanter fra kilde i uvektet graf; O(|V|+|E|)); **DFS** / **DFSVisit** (stack/rekursjon; O(|E|) fra én node); **DFS-full** (løkke over alle noder ⇒ dekker alle komponenter; O(|V|+|E|)). `theorem` **det faste skillet**: DFS fra **én** node er O(|E|); DFS-**full** er O(|V|+|E|) (fordi hver node initialiseres). BFS-egenskapen: gir korteste vei i **antall kanter** i uvektet graf. Antagelser: node har `visited`-flagg; naboliste.
- **Oppgavesjangre:** H + F. Mønstereksempel (nyskrevet, H): «Skriv en algoritme som teller antall sammenhengende komponenter i en urettet graf. Oppgi kjøretid.» (DFS-full, tell nye starter, O(|V|+|E|)).
- **Typiske feil:** Forveksle DFS fra én node (O(|E|)) med DFS-full (O(|V|+|E|)) i kjøretidsanalysen (§5, eksplisitt trekk); tro DFS gir korteste vei (det gjør BFS, i uvektet graf); glemme `visited`-flagget (uendelig løkke ved sykel).
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 5.3: Komponenter, 2-fargelegging og sykeldeteksjon

- **id:** `in2010-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `in2010-5-2` · **kapitteltype:** teori
- **description:** Traverserings-varianter som løser klassiske problemer: finn komponenter, sjekk bipartitthet (2-fargelegging) og oppdag sykler.
- **Eksamensbelegg:** Sjanger H, ~4/7. 2-fargelegging (H2021) og komponent-basert resonnement (Whops!, garbage collection) er dokumenterte mønstre. Prioritet: **kunne**.
- **Innholdskontrakt:** Pseudokode-kontrakter: **2-fargelegging / bipartitt** — DFS/BFS som **flipper farge** per rekursivt kall; konflikt (nabo med samme farge) ⇒ ikke bipartitt; O(|V|+|E|); virker fordi hvert fargevalg tvinges av forelderen. **Sykeldeteksjon (urettet)** — DFS; en kant til en allerede besøkt node som ikke er forelder ⇒ sykel. **Komponent-basert resonnement** — DFS fra en rot-mengde, deretter behandle/frigjør per komponent (garbage collection-mønsteret): det som ikke nås fra rota, kan frigjøres. (Rettet sykeldeteksjon via topsort ligger i 6.1.)
- **Oppgavesjangre:** H. Mønstereksempel (nyskrevet, H): «Skriv en algoritme som avgjør om en urettet graf kan tofarges slik at ingen kant forbinder to like farger. Oppgi kjøretid.» (DFS med fargeflipp, O(|V|+|E|)).
- **Typiske feil:** I urettet sykeldeteksjon regne kanten tilbake til forelder som sykel; ikke flippe farge korrekt; kvadratisk komponentsjekk der DFS-full O(|V|+|E|) holdt; glemme å behandle alle komponenter.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 5.4: SCC og komponentgraf (kondensasjon) — UiO-signatur

- **id:** `in2010-5-4` · **number:** 5.4 · **estimatedMinutes:** 55 · **prerequisites:** `in2010-5-2` · **kapitteltype:** teori
- **description:** Sterkt sammenhengende komponenter (SCC) og komponentgrafen — UiOs signaturverktøy for reachability-resonnement, der komponentgrafen alltid er en DAG.
- **Eksamensbelegg:** Sjanger H, 43 % — men **UiO-signatur** (H2019, H2022, H2024), brukt der toppkarakteren skilles. Prioritet: **kunne** (nivå 2, høy differensiering).
- **Innholdskontrakt:** `definition` **SCC** (maksimal mengde noder der alle når hverandre) og **komponentgraf/kondensasjon** (kontraher hver SCC til én node). `theorem` **komponentgrafen er en DAG** (kjent — trenger ikke bevises). Pseudokode-kontrakt: **SCC** som pensumalgoritme, O(|V|+|E|) (beskriv idé: DFS-baserte to gjennomløp / DFS med ferdig-tider). **Reachability-mønstrene** (kjernen): finn rundturer ⇒ komponenter med > 1 node; minimal «forside»/startmengde ⇒ antall komponenter med **inngrad 0** i komponentgrafen; noder som når alt ⇒ komponent med **inngrad 0**, og bare hvis det finnes nøyaktig én slik *(rettet 29. juli 2026: linja sto opprinnelig «utgrad 0», som er snudd — en utgrad-0-komponent er en sluttkomponent og når ingen andre. Verifisert med simulator; se ARKIVKONTROLL-notatet i in2010-mappa)*. Alt i O(|V|+|E|) — langt raskere enn DFS fra hver node.
- **Oppgavesjangre:** H. Mønstereksempel (nyskrevet, H): «Gitt en rettet graf av nettsider med lenker. Skriv en algoritme som finner det minste antallet sider du må starte fra for å nå alle. Oppgi kjøretid.» (SCC → komponentgraf → tell komponenter med inngrad 0; O(|V|+|E|)).
- **Typiske feil:** DFS fra **hver** node i stedet for én SCC-kjøring (§5, halverer poeng); bevise at komponentgrafen er en DAG (unødvendig — kjent); forveksle inngrad-0 (startmengde) med utgrad-0; tro SCC = svakt sammenhengende.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 5.5: DRILL — Grafalgoritmer i pseudokode: mønstergjenkjenning

- **id:** `in2010-5-5` · **number:** 5.5 · **estimatedMinutes:** 90 · **prerequisites:** `in2010-5-4` · **kapitteltype:** drill
- **description:** Den store Del 2-drillen (sjanger H): gjenkjenn det klassiske problemet i en innpakning, kall pensumalgoritmen, og velg lavest kjøretid.
- **Eksamensbelegg:** Sjanger H, hvert sett (2–3 oppgaver, de siste vanskeligst). Prioritet: **perfekt** (for A/B).
- **Innholdskontrakt (løsningsoppskrift — mønstergjenkjenning):** 1) **navngi problemet** eksplisitt; 2) mønsterkatalog: «rundturer / reachability / startmengde» ⇒ **SCC + komponentgraf**; «avhengigheter / oppdag sykel i rettet graf» ⇒ **topologisk sortering** (se 6.1); «lagvis / innen k ledd» ⇒ **BFS / avgrenset traversering som stopper ved dybde k**; «tofarging / motparter» ⇒ **2-fargelegging**; «komponentvis behandling / frigjøring» ⇒ **DFS fra rot-mengde**; 3) oppgi **antagelser om representasjon**; 4) skriv presis pseudokode; 5) oppgi kjøretid som matcher, og velg **lavest mulig**. Gjennomkjørt eksamenscase med margnotater (topp- vs. midtsjikt: én SCC-kjøring vs. DFS fra hver node; avgrenset BFS vs. full traversering). 10–14 nyskrevne oppgaver som roterer mønstrene.
- **Oppgavesjangre:** H. Mønstereksempler (nyskrevne): «send invitasjoner lagvis fra en person» ⇒ BFS; «tell hvor mange som nås innen k venneledd» ⇒ BFS som stopper ved dybde k (ikke full traversering); «finn alle grupper der alle når hverandre» ⇒ SCC.
- **Typiske feil:** Full/naiv traversering der én SCC-kjøring / avgrenset BFS holdt (§5); ikke navngi problemet; glemme `k`-grensen i avgrenset traversering; ikke oppgi antatt representasjon; uklar/lang pseudokode.
- **Quiz: 18 · Flashcards: 12**

**Prøve-kvote Del 5:** 4 prøver (Grafer: representasjon, traversering og komponenter)
1. Prøve 5.A (25 min): Grafegenskaper + naboliste/-matrise-kjøretid (sjanger F).
2. Prøve 5.B (30 min): BFS/DFS i pseudokode + DFS vs. DFS-full-kjøretid (H/F).
3. Prøve 5.C (30 min): 2-fargelegging / komponentteller i pseudokode (H).
4. Prøve 5.D (35 min): SCC-reachability — startmengde / rundturer, velg lavest kjøretid (H).

---

### Del 6 — Korteste vei, spenntrær og grådighet *(korteste vei: PERFEKT; MST/Huffman: kunne/kjenne)*

> Korteste vei er 100 %, men testes mest som **matrise** (koble graftype til algoritme)
> på Del 1 og som **modellering** (reversert Dijkstra, MST-modellering) på Del 2.
> Topologisk sortering (71 %), MST (57 %) og Huffman (64 %) fyller ut. Kap. 6.5 driller
> korteste-vei-matrisen + MST-modellering.

#### Kapittel 6.1: Topologisk sortering og DAG-egenskaper

- **id:** `in2010-6-1` · **number:** 6.1 · **estimatedMinutes:** 45 · **prerequisites:** `in2010-5-2` · **kapitteltype:** teori
- **description:** Topologisk sortering med Kahns algoritme (inngrad-0-kø) og sykeldeteksjon i rettet graf — det foretrukne verktøyet for avhengighetsproblemer.
- **Eksamensbelegg:** Sjanger H + F, 71 %. «Avhengigheter / oppdag sykel» ⇒ topsort er et dokumentert mønster (dependency hell, H2023). Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **DAG** (rettet asyklisk graf) og **topologisk rekkefølge**. Pseudokode-kontrakt **Kahn**: legg alle noder med **inngrad 0** på en stack/kø; plukk av, legg i rekkefølgen, reduser naboers inngrad; ny inngrad-0 ⇒ på stacken; O(|V|+|E|). `theorem` **sykeldeteksjon**: hvis ikke alle noder prosesseres, finnes en sykel (grafen er ikke en DAG). Alternativ (nevnes): SCC (sykel ⇔ komponent > 1 node) eller DFS med tilstander (uoppdaget / under prosessering / ferdig).
- **Oppgavesjangre:** H. Mønstereksempel (nyskrevet, H): «Gitt bibliotekavhengigheter (rettet graf). Skriv en algoritme som gir en installasjonsrekkefølge, eller melder at en syklisk avhengighet gjør det umulig. Oppgi kjøretid.» (Kahn, O(|V|+|E|); syklisk hvis ikke alle prosesseres).
- **Typiske feil:** Ikke melde sykel når ikke alle prosesseres; bruke DFS uten tilstander (overser sykel); anta at topsort finnes i en graf med sykel; feil kjøretid.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 6.2: Korteste vei — BFS, Dijkstra, DAG og reversert graf

- **id:** `in2010-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** `in2010-6-1` · **kapitteltype:** teori
- **description:** Korteste-vei-verktøykassen — BFS (uvektet), Dijkstra (ikke-negative vekter), DAG via topsort, Bellman-Ford (fakta) — og det avgjørende reversert-Dijkstra-trikset.
- **Eksamensbelegg:** Sjanger F (matrisen) + H (reversert Dijkstra), 100 %. Prioritet: **perfekt** (matrisen), **kunne** (reversert Dijkstra, A/B-skille).
- **Innholdskontrakt:** `theorem` **korteste-avstander-matrisen** (fast Del 1-mønster): **uvektet** ⇒ **BFS**; **vektet DAG** ⇒ **topologisk sortering**; **ingen negative kanter** ⇒ **Dijkstra**; **ingen negative sykler** ⇒ **Bellman-Ford**. Pseudokode-kontrakt **Dijkstra** (prioritetskø; ikke-negative vekter; O((|V|+|E|)·log|V|)). Fakta: Bellman-Ford O(|V|·|E|). **Reversert-Dijkstra-trikset** (H2024, A/B-skille): «hvilket av flere utgangspunkt er nærmest et mål `t`?» ⇒ kjør Dijkstra **fra `t` i den reverserte grafen** (én kjøring) i stedet for fra hvert startpunkt (|U| kjøringer); samme orden som én Dijkstra. Alternativ: supernode med 0-kanter.
- **Oppgavesjangre:** F + H. Mønstereksempel (nyskrevet, F): «Koble hver graftype til den raskeste korteste-vei-algoritmen: (a) uvektet, (b) vektet DAG, (c) ikke-negative vekter, (d) mulige negative kanter uten negativ sykel.» (BFS / topsort / Dijkstra / Bellman-Ford).
- **Typiske feil:** Bruke Dijkstra på negative kanter; kjøre Dijkstra fra hvert startpunkt i stedet for én reversert (§5, poengtrapp); bruke BFS på vektet graf; blande matrisens fire tilfeller.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 6.3: Minimale spenntrær — Prim, Kruskal, Borůvka

- **id:** `in2010-6-3` · **number:** 6.3 · **estimatedMinutes:** 50 · **prerequisites:** `in2010-6-2` · **kapitteltype:** teori
- **description:** Minimale spenntrær (MST) — Prim med prioritetskø, gjenkjenning av Kruskal/Borůvka, og hvorfor BFS/DFS *ikke* gir MST.
- **Eksamensbelegg:** Sjanger F (MST-gjenkjenning) + H (MST-modellering), 57 %. «Koble alt sammen billigst» ⇒ MST er et dokumentert mønster (Blindern, H2023). Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **spenntre** vs. **minimalt spenntre** (MST — lavest total kantvekt). Pseudokode-kontrakt **Prim** (prioritetskø; voks treet med letteste kant ut; O((|V|+|E|)·log|V|) = O(|V|²·log|V|) for komplett graf). `theorem` **MST-gjenkjenning**: Prim, Kruskal og Borůvka finner minimale spenntrær; **BFS og DFS gjør det IKKE** (de finner et spenntre, men ikke minimalt). Modellerings-mønster (H): «koble alt sammen billigst» på komplett vektet urettet graf ⇒ MST/Prim; korteste sti **i det ferdige treet** ⇒ BFS/DFS O(|V|+|E|) (Dijkstra er «ikke veldefinert» der vektene er byggekostnad, ikke avstand — gir færre poeng).
- **Oppgavesjangre:** F + H. Mønstereksempel (nyskrevet, H): «Bygg det billigste tunnelsystemet som knytter alle bygninger sammen. Etterpå: finn korteste vei mellom to bygninger *i tunnelsystemet*. Oppgi algoritmer og kjøretider.» (Prim for MST; så BFS/DFS i treet — ikke Dijkstra).
- **Typiske feil:** Tro BFS/DFS gir MST (§5-felle); bruke Dijkstra i det ferdige treet der byggekostnad ≠ avstand; forveksle spenntre og minimalt spenntre; feil Prim-kjøretid for komplett graf.
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 6.4: Huffman-koding

- **id:** `in2010-6-4` · **number:** 6.4 · **estimatedMinutes:** 45 · **prerequisites:** `in2010-4-4` · **kapitteltype:** teori
- **description:** Huffman-koding som grådig algoritme — bygg treet via prioritetskø, og les av kodelengder fra en frekvenstabell (håndkjøring).
- **Eksamensbelegg:** Sjanger E (kodelengder) + fakta, ~64 %. Prioritet: **kjenne**.
- **Innholdskontrakt:** `definition` **prefikskode** og **Huffman-tre**. Pseudokode-kontrakt (idé): ta gjentatt de to minste frekvensene ut av en **prioritetskø**, slå sammen, legg tilbake; O(n log n). Håndkjøringsregel (E): fra en frekvenstabell, **bygg treet mentalt** og oppgi **kodelengde per symbol** eller totalt antall bits for en streng (kortere kode til hyppigere symbol). `theorem`: Huffman gir en optimal prefikskode (grådig — kjenne, ikke bevis).
- **Oppgavesjangre:** E. Mønstereksempel (nyskrevet, E): «Symbolene A, B, C, D har frekvenser 5, 2, 1, 1. Bygg Huffman-treet og oppgi kodelengden til hvert symbol.»
- **Typiske feil:** Gi kortest kode til sjeldnest symbol (omvendt); glemme å alltid slå sammen de to *minste*; blande kodelengde og kodeord; feil totalbits (kodelengde × frekvens, summert).
- **Quiz: 12 · Flashcards: 12**

#### Kapittel 6.5: DRILL — Korteste-vei-matrisen og MST-modellering

- **id:** `in2010-6-5` · **number:** 6.5 · **estimatedMinutes:** 85 · **prerequisites:** `in2010-6-4` · **kapitteltype:** drill
- **description:** Drill på sjanger F (korteste-avstander-matrisen, kjøretid per grafalgoritme) og H (MST-modellering, reversert Dijkstra) — velg alltid lavest kjøretid.
- **Eksamensbelegg:** Sjanger F i ~4/7 + H-modellering. Prioritet: **perfekt** (matrisen), **kunne** (modellering).
- **Innholdskontrakt (løsningsoppskrift):** For **matrisen** (F): uvektet→BFS; vektet DAG→topsort; ikke-negative→Dijkstra; ingen negativ sykel→Bellman-Ford; og **kjøretid per algoritme** (DFS-full O(|V|+|E|); TopSort/SCC O(|V|+|E|); Prim/Dijkstra O((|V|+|E|)·log|V|); Bellman-Ford O(|V|·|E|)). For **modellering** (H): 1) gjenkjenn — «koble billigst» ⇒ MST/Prim; «nærmeste kilde» ⇒ reversert Dijkstra; «korteste i ferdig tre» ⇒ BFS/DFS; 2) velg lavest kjøretid. Gjennomkjørt case med margnotater. 10–14 oppgaver: fyll korteste-vei-matrisen, kjøretidstabell per grafalgoritme, MST-gjenkjenning (Prim/Kruskal/Borůvka vs. BFS/DFS), reversert-Dijkstra-modellering.
- **Oppgavesjangre:** F, H. Mønstereksempel: «Fyll inn kjøretiden for hver grafalgoritme: DFS-full, topologisk sortering, Prim, Bellman-Ford.»
- **Typiske feil:** §5 (Dijkstra fra hver kilde i stedet for reversert; BFS/DFS som MST); feil kjøretid per algoritme; blande matrisens fire graftyper.
- **Quiz: 18 · Flashcards: 10**

**Prøve-kvote Del 6:** 4 prøver (Korteste vei, spenntrær og grådighet)
1. Prøve 6.A (25 min): Korteste-avstander-matrisen + kjøretid per grafalgoritme (sjanger F).
2. Prøve 6.B (30 min): Topologisk sortering / sykeldeteksjon i pseudokode (H).
3. Prøve 6.C (30 min): MST-modellering + reversert Dijkstra, velg lavest kjøretid (H).
4. Prøve 6.D (25 min): Huffman-kodelengder + MST-gjenkjenning (E/F).

---

### Del 7 — Datastruktur-design, drøfting og NP-teori *(design/drøfting: kunne; NP: kjenne, fallende)*

> Den siste temadelen samler tre Del 2-differensieringssjangre: ADT-design (43 %↑),
> «drøft to strategier» (57 %↑) og NP-teori (57 %, **fallende** — fraværende 2022–24).
> NP-kapitlet omtaler også kort de TDT4120-temaene som er **fraværende** i IN2010, så
> studenten kan avgrense pensum.

#### Kapittel 7.1: ADT-design — mediankø, bøttekø og trie

- **id:** `in2010-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** `in2010-4-4` · **kapitteltype:** teori
- **description:** Å velge og kombinere strukturer til en abstrakt datatype — mediankø (to heaps), bøttekø (array av lister) og trie — med kjøretid per operasjon.
- **Eksamensbelegg:** Sjanger J, 43 %↑ (mediankø H2024, bøttekø H2022, trie/autocomplete). Prioritet: **kunne**.
- **Innholdskontrakt:** Tre design-kontrakter (struktur + operasjoner + kjøretid): **Mediankø** — **to heaps** (max-heap for nedre halvdel, min-heap for øvre; hold dem (nesten) like store); median = toppen av max-heap; O(log n) per innsetting. **Bøttekø** — array av bøtter (lenkede lister) indeksert på prioritet `0..N−1`; insert O(1); removeMin skanner til første ikke-tomme bøtte, O(N) = O(1) når N er konstant; en heap-basert løsning gir færre poeng her. **Trie / prefiks-tre** — for autocomplete: rask prefiks-oppslag; kontrast mot hashmap (minne vs. oppslag). Regel: begrunn valget med kjøretid per operasjon.
- **Oppgavesjangre:** J. Mønstereksempel (nyskrevet, J): «Design en datastruktur som støtter `insert(x)` og `median()` effektivt. Beskriv strukturen og oppgi kjøretiden per operasjon.» (to heaps; O(log n) insert, O(1) median).
- **Typiske feil:** Bruke én heap til mediankø (gir ikke median i O(1)); heap-basert bøttekø der array av bøtter er raskere (fast prioritetsområde); ikke oppgi kjøretid per operasjon; glemme å holde de to heapene balansert.
- **Quiz: 12 · Flashcards: 16**

#### Kapittel 7.2: Drøft to strategier

- **id:** `in2010-7-2` · **number:** 7.2 · **estimatedMinutes:** 45 · **prerequisites:** `in2010-3-2` · **kapitteltype:** teori
- **description:** Sjangeren «sammenlign to fremgangsmåter» — kjøretid (verste + forventet) og minne, med definert `n` og en klar konklusjon om når hver lønner seg.
- **Eksamensbelegg:** Sjanger K, 57 %↑ («oppgaven der sensor må bruke mest skjønn»). Belønner presis, velskrevet tekst med O-referanse. Prioritet: **kunne**.
- **Innholdskontrakt:** `text` **løsningsoppskrift** (algoritmisk for en resonnementsoppgave): 1) **definér `n`** (og evt. andre parametere) eksplisitt; 2) oppgi for hver strategi **verste** og **forventet** kjøretid + **minnebruk**; 3) nevn kanttilfeller (stor `k`, alt kolliderer, ordnet input); 4) **konkludér** om når hver lønner seg. Faste eksempler (`example`): hashmap (O(n) forventet, O(n²) verste) vs. tellearray (O(n+k), sårbar for stor `k`); trie vs. hashmap for autocomplete (minne vs. oppslagshastighet); en ukjent sortering (gnome) vs. pensumsortering. Kravet: alltid referér til O-notasjon.
- **Oppgavesjangre:** K. Mønstereksempel (nyskrevet, K): «Du skal telle unike ord i en tekst. Sammenlign (a) et hash-set og (b) et tellearray indeksert på ord-id, på kjøretid (verste og forventet) og minne. Når lønner hver seg? Definér `n`.»
- **Typiske feil:** Bruke `n` uten å definere det (§5, eksplisitt −3 p et år); ikke referere til O-notasjon i det hele tatt; oppgi bare forventet (glemme verste) eller omvendt; ingen konklusjon.
- **Quiz: 12 · Flashcards: 10**

#### Kapittel 7.3: NP-kompletthet — og hva som IKKE er IN2010-pensum

- **id:** `in2010-7-3` · **number:** 7.3 · **estimatedMinutes:** 55 · **prerequisites:** `in2010-1-4` · **kapitteltype:** teori
- **description:** P og NP, verifikator/sertifikat og reduksjonsretning — pluss en avgrensning av de tunge TDT4120-temaene (DP, maks-flyt, masterteoremet) som er fraværende i IN2010.
- **Eksamensbelegg:** Sjanger L, 57 % men **fallende** (tungt 2018–2021, fraværende 2022–2024). Fortsatt pensum. Prioritet: **kjenne** (P/NP-fakta garantert *når* det kommer på Del 1).
- **Innholdskontrakt:** `definition` **P**, **NP**, **verifikator**, **sertifikat**. `theorem` faste fakta (til quiz, sjanger C/L): `P ⊆ NP`; en **polynomisk verifikator** ⇒ problemet er i NP; alle NP-komplette problemer er polynomtidsreduserbare til hverandre; å løse ett NP-komplett problem i polytid ⇒ `P = NP`; det er **ikke** avgjort om `P = NP`. Pseudokode-kontrakt **verifikator** (H2020-mønster): sjekk et sertifikat i polytid (f.eks. at et array av noder er en Hamiltonsykel — sjekk at etterfølgende par, **inkludert siste→første med `mod N`**, er kanter). `theorem` **reduksjonsretning**: `A ≤ₚ B` betyr «A reduseres til B» og at **B er minst like vanskelig**; for å vise at et problem er vanskelig, redusér **FRA** et kjent vanskelig problem (Hamiltonsykel) **TIL** det — aldri motsatt. Navngitte problemer: Hamiltonsykel, CLIQUE, Sudoku, Knapsack. **Avgrensning** (`tip`, «bør kjenne til»-boks): dynamisk programmering, maks-flyt/Ford-Fulkerson, masterteoremet/rekurrenser, Floyd-Warshall og Gale-Shapley er **ikke IN2010-pensum** (det er TDT4120-stoff) — du trenger dem ikke til denne eksamen.
- **Oppgavesjangre:** L. Mønstereksempel (nyskrevet, L): «Sant/usant med begrunnelse: *Hvis vi reduserer vårt problem X **til** et NP-komplett problem, har vi vist at X er NP-hardt.*» (usant — man må redusere FRA det vanskelige TIL X).
- **Typiske feil:** Reversere reduksjonsretningen (§5, eksplisitt trekk); glemme siste kant i Hamiltonsykel-verifikator (`(C[N−1], C[0])`, `mod N`); tro `P = NP` eller `P ≠ NP` er bevist; forveksle NP med «ikke i P».
- **Quiz: 16 · Flashcards: 14**

**Prøve-kvote Del 7:** 4 prøver (Datastruktur-design, drøfting og NP-teori)
1. Prøve 7.A (30 min): ADT-design — mediankø (to heaps) + bøttekø, kjøretid per operasjon (J).
2. Prøve 7.B (30 min): Drøft to strategier — definér `n`, verste + forventet + minne (K).
3. Prøve 7.C (25 min): P/NP-fakta + verifikator (sjanger C/L).
4. Prøve 7.D (25 min): Reduksjonsretning + avgrensning av fraværende temaer (L).

---

### Del 8 — Eksamenstrening

#### Kapittel 8.1: DRILL — Del 2-strategi: velg lavest kjøretid (poengtrappen) og skriv presis pseudokode

- **id:** `in2010-8-1` · **number:** 8.1 · **estimatedMinutes:** 90 · **prerequisites:** `in2010-7-3` · **kapitteltype:** drill
- **description:** Den tverrgående Del 2-drillen: for hver oppgave, finn den **lavest mulige** kjøretiden (poengtrappen O(n) > O(n log n) > O(n²)) og skriv svaret som pseudokode ELLER klar naturlig-språk-forklaring som gir full uttelling.
- **Eksamensbelegg:** Metaferdighet på tvers av sjanger G/H/I/J. «Lavere kjøretid = mer poeng» er den mest gjentatte poengregelen, ofte med eksplisitt trapp. Prioritet: **perfekt** (dette er A/B-differensieringen).
- **Innholdskontrakt (løsningsoppskrift):** Del 1 — **poengtrappen**: for hver oppgave, spør «kan dette gjøres raskere?» og par den naive løsningen med den optimale (full in-order O(n) → beskåret O(log n + treff); diameter O(n²) → én DFS O(n); Dijkstra ×|U| → reversert ×1; DFS fra hver node → én SCC-kjøring; kvadratisk skann → hash-set O(n)). Vis en eksplisitt trapp: O(n) ⇒ full pott, O(n log n) ⇒ mindre, O(n²) ⇒ minst. Del 2 — **pseudokode-skrivesjangeren**: (i) oppgi antagelser om representasjon; (ii) skriv **enten** presis generisk pseudokode **eller** en klar naturlig-språk-forklaring (begge kan gi full uttelling — kravet er entydighet, ikke syntaks); (iii) oppgi kjøretid som **matcher** koden; (iv) definér `n`. Gjennomkjørt case der samme problem løses på tre kjøretidsnivåer med sensor-margnotater om poeng per nivå. 10–14 oppgaver på tvers av Del 4–7: «her er en naiv løsning — forbedre kjøretiden og skriv den optimale».
- **Oppgavesjangre:** G, H, I, J (metanivå — velg lavest kjøretid). Mønstereksempel: «Gitt en O(n²)-løsning på et duplikatproblem — skriv en raskere løsning, oppgi kjøretidene, og forklar poengforskjellen.»
- **Typiske feil:** Levere en korrekt, men unødvendig treg løsning (taper poengtrappen); oppgi en kjøretid som ikke matcher koden; ikke definere `n`; skrive lang, uklar pseudokode; ikke oppgi antagelser om representasjon.
- **Quiz: 14 · Flashcards: 10**

#### Kapittel 8.2: Øvingseksamen 1 — bredt ordinært sett (epoke 3)

- **id:** `in2010-8-2` · **number:** 8.2 · **estimatedMinutes:** 240 · **prerequisites:** `in2010-8-1` · **kapitteltype:** øvingseksamen
- **description:** Komplett firetimers hjelpemiddelfritt sett etter tredelingsmalen (oppvarming + Del 1 sant/usant + Del 2 pseudokode) som speiler et typisk epoke-3-sett.
- **Eksamensbelegg/miks:** Speiler prognosen: **Oppvarming** (2 p, sjanger A) + **Del 1** (~20–30 p): 1–2 kode→O (B), 2–3 sorterings-/kjøretidsfakta sant/usant (C/D), 1–2 håndkjøringer (E: heap + linear probing), en korteste-avstander-matrise (F), noen graf-fakta (F) — med **antigjettings-skalering angitt** på sant/usant-blokken + **Del 2** (5–7 oppgaver à 8–12 p, stigende): 1 tre-algoritme (G), 2–3 grafalgoritmer (H, minst én SCC/topsort/MST/Dijkstra-variant), 1 hashing/søk (I), muligens 1 ADT-design (J) eller drøfting (K). De siste 1–2 oppgavene = åpen grafmodellering. Alle nyskrevne, med figur-univers-innpakning (nyskrevne stedsnavn/historier). Løsningsforslag i `collapsible` per oppgave (pseudokode + naturlig-språk-forklaring), med `tip` om **poengtrapp/delpoeng** og hva som gir uttelling. Innledende `tip` om tidsbudsjett og at Del 2 avgjør karakteren.
- **Innholdskontrakt:** Dekker sjangrene A, B, C, D, E, F, G, H, I (+ evt. J/K).
- **Oppgavesjangre:** A, B, C, D, E, F, G, H, I.
- **Quiz: 12 · Flashcards: 0**

#### Kapittel 8.3: Øvingseksamen 2 — håndkjørings- og hashing-tungt sett

- **id:** `in2010-8-3` · **number:** 8.3 · **estimatedMinutes:** 240 · **prerequisites:** `in2010-8-2` · **kapitteltype:** øvingseksamen
- **description:** Komplett sett med tyngdepunkt på håndkjøring (sjanger E) og hashing/søk, men fortsatt full tredeling.
- **Eksamensbelegg/miks:** Speiler et håndkjøringstungt sett: oppvarming (A) + Del 1 med **flere håndkjøringer** (E: min-heap Insert+RemoveMin, linear probing, AVL-rotasjoner, Huffman-kodelengder) + kode→O (B) + sorteringsegenskaper (D) + korteste-vei-matrise (F) + Del 2 med hashing/søk (I: finn duplikat/par), en tre-algoritme (G: checkBST eller InRange) og en grafalgoritme (H). Antigjettings-skalering angitt. Alle nyskrevne. Løsningsforslag som A-besvarelse med poengtrapp-/delpoeng-`tip`.
- **Innholdskontrakt:** Dekker A, B, C, D, E, F, G, H, I — supplerer 8.2 med tyngre håndkjøring og hashing.
- **Oppgavesjangre:** A, B, C, D, E, F, G, H, I.
- **Quiz: 12 · Flashcards: 0**

#### Kapittel 8.4: Øvingseksamen 3 — grafmodellerings-tungt topp-sett

- **id:** `in2010-8-4` · **number:** 8.4 · **estimatedMinutes:** 240 · **prerequisites:** `in2010-8-3` · **kapitteltype:** øvingseksamen
- **description:** Komplett sett med vanskeligere toppsjikt: flere åpne grafmodelleringsoppgaver (SCC, reversert Dijkstra, MST) og en drøftingsoppgave, der A/B-karakteren skilles.
- **Eksamensbelegg/miks:** Speiler et designtungt sett (der toppkarakteren avgjøres): oppvarming (A) + kompakt Del 1 (kode→O, kjøretidsfakta, én håndkjøring, korteste-vei-matrise) + **Del 2-tyngde**: **3 grafalgoritmer** (H: én SCC-reachability, én topsort/sykel, én MST-modellering eller reversert Dijkstra), 1 tre-algoritme (G: diameter/LCA), 1 ADT-design (J: mediankø/bøttekø), 1 drøft-to-strategier (K). Alle på lavest-mulig-kjøretid-nivå med eksplisitt poengtrapp. Muligens 1 NP/reduksjonsretning (L). Alle nyskrevne. Løsningsforslag som A-besvarelse med eksplisitt markering av topp- vs. midtsjiktuttelling (SCC-basert lineær reachability, reversert Dijkstra, beskåret in-order, riktig reduksjonsretning, definert `n`).
- **Innholdskontrakt:** Dekker A, B, C, D, E, F, G, H, I, J, K (+ evt. L) — de tre settene sammen dekker alle sjangre A–L flere ganger.
- **Oppgavesjangre:** A, B, C, D, E, F, G, H, I, J, K.
- **Quiz: 12 · Flashcards: 0**

---

## 5. Summeringskontroll (quiz/flashcards) — AUTORITATIV

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 14 | 14 |
| 1 | 1.1–1.4 | 18+18+20+24 = **80** | 20+14+10+20 = **64** |
| 2 | 2.1–2.4 | 16+14+16+20 = **66** | 24+20+18+12 = **74** |
| 3 | 3.1–3.4 | 16+14+18+14 = **62** | 20+16+10+16 = **62** |
| 4 | 4.1–4.5 | 16+14+14+16+20 = **80** | 18+14+18+24+12 = **86** |
| 5 | 5.1–5.5 | 14+16+14+14+18 = **76** | 20+18+14+14+12 = **78** |
| 6 | 6.1–6.5 | 14+16+14+12+18 = **74** | 14+22+16+12+10 = **74** |
| 7 | 7.1–7.3 | 12+12+16 = **40** | 16+10+14 = **40** |
| 8 | 8.1–8.4 | 14+12+12+12 = **50** | 10+0+0+0 = **10** |
| **Sum** | **35 kap.** | **542 ≥ 500 ✓** | **502 ≥ 500 ✓** |

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens og eksamensform: quiz vektes mot **Del 1 sant/usant +
hjelpemiddelfri faktakontroll** (kjøretider, kode→O-forenkling, sorterings-/heap-/
hashing-/graf-fakta, korteste-vei-matrisen, reduksjonsretning) — de fire 100 %-delene
(1 asymptotikk/fakta, 2 sortering, 3 hashing, 5 grafer) og heap/tre-delen (4) bærer
mest, med minst 1–2 antigjettings-distraktorer per Del 1-kapittel. Flashcards vektes mot
**algoritme ↔ kjøretid ↔ egenskap**-triplene (puggematerialet for en hjelpemiddelfri
eksamen). Øvingseksamenene (8.2–8.4) gir 0 flashcards (rene oppgavesett) men bidrar med
quiz. **(NB: kolonnesummene over gir quiz 542 / flashcards 502 — verifiser mot §8-
sjekklisten før «ferdig».)**

---

## 6. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–7 → 28 prøver)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med kort løsningsforslag og
poengfordeling (og angitt antigjettings-skalering på sant/usant-prøvene). Prøvekapitler
bygges som `in2010-<del>-prove` (chapterNumber `<del>.P`) etter plattformmønsteret,
eller som egne exercise-seksjoner i delens siste kapittel. Prøvekvotene per del står i
sluttblokken til hver del over (Del 1–7). Del 0 og Del 8 får ikke egne prøver (Del 8
**er** øvingseksamenene).

### Øvingseksamener (3 komplette sett — se kap. 8.2–8.4)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (8.2) | Typisk epoke-3 ordinært sett | Oppvarming + Del 1 (antigjetting) + 5–7 Del 2-oppgaver, full bredde |
| Øvingseksamen 2 (8.3) | Håndkjørings-/hashing-tungt sett | Tyngde på sjanger E (heap/linear probing/AVL/Huffman) + I |
| Øvingseksamen 3 (8.4) | Grafmodellerings-tungt topp-sett | 3 grafalgoritmer (H) + ADT-design (J) + drøfting (K), lavest-kjøretid-nivå |

Til sammen dekker de tre settene alle sjangre A–L og alle kjernetemaene flere ganger.
Tredelingen (oppvarming + Del 1 auto-rettet + Del 2 pseudokode) er lik i alle tre.

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — digital firetimers hjelpemiddelfri tredeling i Inspera
   (oppvarming 2 p + Del 1 auto-rettet sant/usant med antigjetting + Del 2 pseudokode),
   «lavere kjøretid = mer poeng», korona-/INF2220-caveaten (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer:
   **perfekt** (kode→O Del 1, sortering Del 2, hashing Del 3, grafrepr./traversering
   Del 5, heap/BST-håndkjøring Del 4, kjøretidsfakta Del 1), **kunne** (tre-algoritmer,
   SCC, topsort, korteste vei, MST, drøfting, ADT-design), **kjenne** (balanserte trær,
   Huffman, NP — og hva som IKKE er pensum: DP, maks-flyt, masterteoremet).
3. **Sjangerguiden** — de tolv oppgavetypene A–L med løsningsoppskriftene fra
   drillkapitlene (1.3, 2.4, 3.3, 4.5, 5.5, 6.5, 8.1) i kortform, tredelt (oppvarming /
   Del 1 auto-rettet / Del 2 pseudokode).
4. **Antigjettings- og poengtrapp-strategien** — hvordan Del 1-skaleringen straffer
   usikkerhet (regn ut terskelen for netto poeng), hvorfor du alltid svarer på
   ikke-strafferammede korte svar, og hvordan du på Del 2 alltid velger lavest mulig
   kjøretid (poengtrappen O(n) > O(n log n) > O(n²)).
5. **Sensorreglene** — de seks metareglene (les oppgaven nøye; oppgi kjøretid som
   matcher koden; lavere kjøretid = mer poeng; klar naturlig-språk-forklaring kan gi
   like mye som pseudokode; oppgi antagelser om representasjon; delvis uttelling med
   hovedpoeng først).
6. **Feilkatalogen** — de 12 typiske feilene (§5 i analysen) samlet, hver med henvisning
   til kapitlet som forebygger den: naiv traversering der beskjæring var mulig,
   kvadratisk der lineær var mulig, downHeap uten barn-sjekk, binærsøk som «returnerer
   indeks» uten modifikasjon, bucket/radix på generelle elementer, DFS-én-node vs.
   DFS-full, glemt siste kant i syklisk struktur, reversert reduksjonsretning, BST- vs.
   heap-egenskap, `n` uten definisjon, linear probing utenfor `0..N−1`, uklar/lang
   pseudokode.
7. **Notasjons- og pseudokodeark** — alle kjøretider samlet (kjøretidstabellene fra
   delene: sortering, datastrukturer, graf), heap-indeksering fra 0
   (`⌊(i−1)/2⌋`, `2i+1`, `2i+2`), og pseudokode-kontraktene for kjernealgoritmene
   (linear-probing-insert, min-heap Insert/RemoveMin, BFS/DFS-full, SCC-reachability,
   topsort/Kahn, Prim, Dijkstra/reversert) — puggeark for hjelpemiddelfri eksamen.
8. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant): Del 1
   (kode→O + fakta — billige garanterte Del 1-poeng) → Del 2 (sortering) → Del 3
   (hashing-håndkjøring) → Del 4 (heap/BST-håndkjøring) → Del 5 (grafer + SCC) → Del 6
   (korteste vei/MST) → Del 7 (design/drøfting/NP) → prøvene underveis → de tre
   øvingssettene de siste ukene under tidspress (240 min).

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `in2010` med alle 35 kapitler
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites/
   linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra §2-tabellen
   (obligatorisk). **`number` er del-basert** («4.2», ALDRI lineær «17» — jf.
   JUS1111-lærdommen; prosareferanser i innholdet bruker samme form, «kap. 4.2»).
2. **Del 0** (kap. 0.1) — etablerer tredelingen, antigjettings-strategien, poengtrappen,
   sjangernavnene A–L og frekvenstallene resten refererer til.
3. **De fire perfekt-delene i avhengighetsrekkefølge**: Del 1 (asymptotikk/fakta — kreves
   av alle kjøretidssvar) → Del 2 (sortering) → Del 3 (hashing) → Del 5 (grafer). Bygg
   Del 4 (trær/heap) før Del 6 (heap kreves av Huffman/Prim).
4. Del 4 → Del 6 → Del 7 → Del 8 (eksamenstreningen til slutt — den gjenbruker alle
   sjangre og poengtrappen).
5. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; prøvene (§6) legges i respektive delers prøvekapittel/
   exercise-seksjoner.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (escape `"` i norske sitattegn og i LaTeX; `\\` for LaTeX-kommandoer); `npm run
  build` grønn.
- [ ] **Generisk pseudokode (IKKE CLRS)**: ingen CLRS-navn (`Merge-Sort`,
  `Build-Max-Heap`, `Tree-Insert` …); bruk generiske `Procedure`-hoder og
  norske/engelske operasjonsnavn (`RemoveMin`, `HeapInsert`, `DFSVisit`,
  `StronglyConnectedComponents`); **heap-indeks fra 0** (`⌊(i−1)/2⌋`, `2i+1`, `2i+2`);
  hovedsakelig **O** (ingen o/ω; Ω/Θ bare kort); kjøretidsforenkling ved **løkketelling**,
  aldri masterteorem.
- [ ] **Tredelingen i alle øvingseksamener + prøver**: oppvarming (2 p, alle rimelige
  svar) + Del 1 (auto-rettet sant/usant med **angitt antigjettings-skalering**) + Del 2
  (skriv pseudokode + resonner). Del 1-quiz har antigjettings-distraktorer.
- [ ] **Poengtrappen**: hvert Del 2-kapittel (G/H/I/J) og drillen 8.1 fremhever eksplisitt
  «lavere kjøretid = mer poeng» med O(n) > O(n log n) > O(n²)-trapp; løsningsforslag
  velger alltid **lavest mulig** kjøretid og oppgir kjøretid som **matcher** koden.
- [ ] **Naturlig-språk-alternativet**: minst noen Del 2-løsningsforslag viser at en klar
  naturlig-språk-forklaring gir like mye som pseudokode (kravet er entydighet, ikke
  syntaks); ingen fasit er lang og uklar.
- [ ] **Notasjons- og pseudokodeliste per delkapittel**: hvert delkapittel som bruker
  notasjon/algoritmer har `collapsible` «Notasjons- og pseudokodeliste» rett etter
  Forkunnskaper, som forklarer ALLE kjøretidsuttrykk, symboler og pseudokode-navn (med
  kontrakt + kjøretid) brukt i delkapitlet (per delkapittel, ikke arv).
- [ ] **Pseudokode-kontrakter**: hvert algoritmekapittel har `theorem`-blokk med
  nyskrevet generisk pseudokode, antagelser om representasjon, invariant/pre-/postbetingelse
  og kjøretid.
- [ ] **Kjøretidstabeller**: hver del med flere algoritmer har en kjøretidstabell
  (navn → best/verste/forventet + krav/egenskap).
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra
  dette skjelettet), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå),
  6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`; drillkapitler har
  løsningsoppskrift + sensor-kommentert case + 8–15 oppgaver.
- [ ] **Håndkjøringsdisiplin** (sjanger E): håndkjøringsoppgaver oppgir **kun**
  sluttilstanden (heap-array indeks fra 0 / hele hashtabellen med `_` for tom /
  rotverdi + rotasjonstall for AVL / kodelengder for Huffman); heap-drillen (4.5) har
  minst én oppgave som understreker downHeap-barn-sjekken (§5).
- [ ] **BST- vs. heap-egenskap**: begge kapitler (4.1, 4.4) kontrasterer eksplisitt
  venstre–høyre-orden (BST) mot opp–ned-orden (heap); ingen fasit forveksler dem.
- [ ] **Reduksjonsretning**: kap. 7.3 fremhever at `A ≤ₚ B` ⇒ B minst like vanskelig, og
  at man reduserer **FRA** det vanskelige; ingen fasit reduserer feil vei.
- [ ] **Avgrensning av fraværende temaer**: kap. 7.3 (og Del 0) sier eksplisitt at DP,
  maks-flyt, masterteoremet/rekurrenser, Floyd-Warshall og Gale-Shapley **ikke er
  IN2010-pensum**; ingen kapittel bygger på dem.
- [ ] **Quiz-sum ≥ 542 og flashcard-sum ≥ 502** per kvotetabellen (§5); quiz kalibrert
  som Del 1 sant/usant + faktakontroll (`options[0]` = riktig svar); flashcards kalibrert
  som algoritme ↔ kjøretid ↔ egenskap.
- [ ] **Prøver**: 4 per temadel 1–7 (28 stk) + 3 øvingseksamener (kap. 8.2–8.4) som
  sammen dekker sjangrene A–L og alle kjernetemaene, alle med tredelingen.
- [ ] **Opphavsrett**: ALLE oppgaver, tall, grafer og innpakninger nyskrevne — egne
  figur-univers-historier/stedsnavn/tall; algoritmenavn, kjøretidsuttrykk og
  standardnotasjon er allmenn faglig notasjon, men ingen oppgavetekster/fasiter fra
  reelle IN2010-/INF2220-sett gjengis; pensumlitteratur refereres (forfatter/verk/
  begrep), aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
  (200 + innhold), jf. lærdommen om `getChapterMeta`.
