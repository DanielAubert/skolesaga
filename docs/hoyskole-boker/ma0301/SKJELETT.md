# Bokskjelett: MA0301 Elementær diskret matematikk (NTNU) — eksamensrettet lærebok

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
> sensorkrav og typiske feil per kapittel er destillert fra
> `EKSAMENSANALYSE.md` (NTNUs MA0301-arkiv 2003–2020, 43 filer, hvorav 13 sett med
> fasit 2013–2020 er lest grundig og eldre skummet).
> Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der
> (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke her.
> Format-forbilde: `../mat121-uib/SKJELETT.md` (v3) — et teori-/bevisfag med egen
> bevisferdighets-del og «alt begrunnes»-føringskrav, kalibrert mot MA0301-analysen.
> **Viktigste kalibrering:** MA0301 er et rent **frisvars-/bevisfag** — det finnes
> ingen fasitsvar uten vist bevis/mellomregning — med **matematisk induksjon som
> tyngdepunkt** (tyngst vektet, opptil 30 poeng) og fire ubetingede pilarer
> (induksjon, relasjoner, grafteori, automater).

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `ma0301` |
| Tittel | **MA0301 Elementær diskret matematikk** |
| Level | `'Høyskole'` |
| Institusjon | Norges teknisk-naturvitenskapelige universitet (NTNU) |
| Arketype | Regnefag (variant: **teori-/bevisfag** — frisvar, alt begrunnes, egen bevisferdighets-del) |
| Antall kapitler | **38** (1 eksamenskart + 32 tema/bevis + 5 eksamenstrening) |
| Estimert totaltid | **~2 070 min ≈ 35 timer** |
| Quiz totalt | **575** (krav ≥500) |
| Flashcards totalt | **644** (krav ≥500; sikt 550–650 for et definisjons-/teoremrikt bevisfag) |

**Pitch (ett avsnitt):** MA0301 er NTNUs innføringsemne i diskret matematikk i
**Grimaldi-tradisjonen** (mengder, logikk, relasjoner, funksjoner, induksjon,
kombinatorikk, grafer, boolsk algebra, endelige automater). I motsetning til
algoritmefag som TDT4120 belønner MA0301 **utført bevis og vist mellomregning**,
ikke korte fasitsvar: den gjennomgående sensorinstruksen er «Alle svar skal
begrunnes. Ta med så mye mellomregning og forklaring at det er enkelt å forstå
hvordan du har tenkt.» Eksamen er 4 timer, hjelpemiddelkode **D** (bare en enkel
kalkulator, ingen bok, intet formelark — apparatet må sitte utenat), 7–8 tematiske
oppgaver à 100 poeng totalt. Temakatalogen har vært **påfallende stabil** gjennom
flere lærerbytter; det som har endret seg er (i) at hver oppgave i de ferskeste
settene (2018–2020) **åpner med en kort flervalgsdel** som tester en definisjon
eller et teorem presist, før de frie bevisene, og (ii) at **håndkjørte
grafalgoritmer** (Dijkstra/Prim/Kruskal/BFS) forsvant etter 2016 til fordel for
**strukturell grafteori og -bevis**. Ryggraden boken driller er de fire pilarene:
**matematisk induksjon** (92 %, tyngst — bokas tyngdepunkt), **relasjoner** (100 %),
**grafteori (struktur)** (100 %) og **endelige automater** (92 %).

### 1.5 Kritiske stil- og notasjonsregler (gjelder HELE boka)

1. **Alt begrunnes; vis rikelig mellomregning.** Ordrett metaregel i alle sett. Et
   bart tall eller en påstand uten utledning gir lite. Hvert løsningsforslag skrives
   som **A-besvarelse**: hvert steg vist, hver lov navngitt, verbal
   konklusjonssetning, sluttsvar markert. Dette er den viktigste forskjellen fra
   kortsvarsfag og skal prege ALLE eksempler og løsningsforslag i boka.
2. **Bevisstruktur teller for seg selv.** I induksjon kreves **eksplisitt (1)
   basissteg + (2) induksjonshypotese + (3) induksjonssteg** hver gang — å hoppe
   over eller forkludre basissteget gir **trekk selv med korrekt algebra** (egen
   warning i hvert induksjonskapittel). I mengde-/relasjons-/funksjonsbevis
   forventes at man arbeider **fra definisjonen** og sjekker hver egenskap for seg.
3. **Navngi lovene ved forenkling.** I logikk, mengdelære og boolsk algebra
   refererer fasiten hvert steg til en navngitt lov (De Morgan, distributiv,
   absorpsjon, komplement, dobbel negasjon, $p\Rightarrow q\equiv\neg p\lor q$).
   Toppsvar gjør det samme; et forenklingssteg uten lovnavn er en byggefeil.
4. **Ett moteksempel er nok — og forventes — ved «bevis eller avkreft».** Ett
   konkret moteksempel avkrefter en påstand fullstendig; en vag påstand om at noe
   «ikke stemmer» gir lite. Motsatt: én forekomst beviser ingen allkvantifisert
   påstand — den må bevises generelt.
5. **Åpne konstruksjonsoppgaver har flere godkjente svar.** Automat-/maskin-
   konstruksjon, regulære uttrykk, minimalt spenntre og BFS-tre er sjelden unike;
   fasiten sier det eksplisitt («det finnes også andre gyldige løsninger»). Boka
   skal si dette der det gjelder, og løsningsforslaget oppgir *sin* løsning uten å
   påstå at den er den eneste.
6. **Grimaldi-notasjon er bokstandard:** relasjonsegenskaper (refleksiv,
   symmetrisk, **anti-symmetrisk**, transitiv); ekvivalensklasse $[a]$; partisjon;
   Hasse-diagram; funksjonsbegrepene injektiv/surjektiv/bijektiv, $f(A)$, $g\circ f$;
   $\binom{n}{k}$, permutasjon med gjentakelse $\tfrac{n!}{n_1!\cdots n_r!}$,
   «stjerner og streker» $\binom{n+k-1}{n}$; graf $G=(V,E)$, grad $\deg v$,
   **håndtrykkslemmaet** $\sum_{v}\deg v=2|E|$, **Eulers formel** $|V|-|E|+|R|=2$,
   planaritet $|E|\le 3|V|-6$, komplett graf $K_n$, todelt $K_{m,n}$, spenntre
   $|E|=|V|-1$; logikk $\land,\lor,\neg,\Rightarrow,\Leftrightarrow$, kvantorer
   $\forall,\exists$; mengder $\mathcal P(A)$, $A\times B$, $\overline A$, $\triangle$.
7. **Rekurrenser løses ALDRI via karakteristisk likning eller genererende
   funksjoner.** I MA0301 opptrer rekursivt definerte følger (Fibonacci, Lucas,
   Narayana) kun som identiteter man **verifiserer med induksjon** (ofte sterk
   induksjon). Disse to metodene skal **utelates** fra boka — de er ikke
   eksamensrelevante her og ville villede.
8. **Tallteori er ikke et selvstendig tema.** Modulær aritmetikk / kongruens mod
   $n$ opptrer **forkledd** — som ekvivalensrelasjon «$a\sim b$ hvis $n\mid(a-b)$»
   (relasjonsdelen) eller som delelighetsinduksjon (induksjonsdelen). Ingen egen
   kongruensregning eller euklidsk algoritme som selvstendig oppgave.
9. **Ærlighet om format og arkiv.** (a) Formatet gikk fra **ren frisvar**
   (2003–2016) til **frisvar med flervalgsåpning** (2018–2020) — boka trener begge,
   men prioriterer den ferske malen; verifiser mot neste sett. (b) **Flervalgsregelen
   varierer**: 2019–2020 «nøyaktig ett alternativ er riktig»; 2018 «minst ett og
   muligens flere er riktige» — tren begge, prioriter «nøyaktig ett». (c)
   **Håndkjørte grafalgoritmer** (Dijkstra/Prim/Kruskal/BFS) er 0 % etter 2016;
   de er med som **beredskap** (i emnebeskrivelsen, kan komme ved lærerbytte), men
   lavt prioritert. (d) Der en metode ikke er dekket av skreven fasit, merkes den
   «⚠️ metode = faglig standard».

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): logikk og mengdelære er
språket og lovapparatet under alle bevis; bevisteknikker + induksjon er selve
motoren (og fagets tyngdepunkt); relasjoner og funksjoner bygger på mengde- og
bevisapparatet; kombinatorikk teller; grafteori og automater er de to store
strukturbolkene; eksamenstreningen er sist. **Frekvensen styrer omfanget**, ikke
rekkefølgen: de fire pilarene (nivå 1, ~92–100 %) får flere kapitler + eget
drillkapittel; nivå 3-temaer (boolsk algebra, grafalgoritmer) får ett kompakt
kapittel merket «bør kunne / kjenne til». Seksjonstitler (blir `sectionNames` i
metadata):

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskartet | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Presenterer frisvarsformen, flervalgsåpningen, de fire pilarene og den skjeve poengvektingen. |
| 1 | Utsagnslogikk, mengdelære og boolsk algebra | 6 | Logikk ~69 % + mengdelære ~62 % → nivå 2; lovapparatet + mengdebevis under alt. Boolsk algebra (~31 %, nivå 3) som algebraisk hale. |
| 2 | Bevisteknikker og matematisk induksjon | 7 | Induksjon ~92 %, **tyngst vektet (opptil 30 p)** → **bokas tyngdepunkt** → nivå 1 «perfekt» → alle fire undertyper + generell bevisverktøykasse + egen bevisstruktur-drill. |
| 3 | Relasjoner: ekvivalens og partiell ordning | 4 | Relasjoner ~100 % → nivå 1 «perfekt» → egenskaper + ekvivalens/partisjon + partiell ordning/Hasse + drill. Kongruens mod $n$ forkledd her. |
| 4 | Funksjoner | 2 | Funksjoner ~69 % → nivå 2 → injektiv/surjektiv/bijektiv + komposisjon/invers (kontrapositivt bevis). |
| 5 | Kombinatorikk og telling | 3 | Kombinatorikk ~69 % → nivå 2 → permutasjon m/gjentakelse + binomialteoremet/identiteter + «stjerner og streker». |
| 6 | Grafteori og trær | 6 | Grafteori (struktur) ~100 % → nivå 1 «perfekt» → grad/håndtrykk + Euler/planaritet + gradskranke-bevis + trær/veier + drill; håndkjørte grafalgoritmer (nivå 3) i eget kjenne-kapittel. |
| 7 | Endelige automater og formelle språk | 4 | Automater ~92 % → nivå 1 «perfekt» → tilstandsmaskiner/output + konstruksjon/$L(A)$ + regulære uttrykk + drill. |
| 8 | Eksamenstrening | 5 | Bevisføringsstandard + flervalgsåpning-drill + 3 komplette øvingseksamener (7–8 tematiske oppgaver, frisvar med flervalgsåpning). |

**Avvik fra DNA-malen (dokumentert):**

1. **38 kapitler — over DNA-taket (20–35).** Begrunnet i PRODUKSJONSLOYPE-lærdommen
   «≥500 er et gulv» og «bøker med >32 kapitler → tilsvarende høyere sum»: MA0301 er
   et **begreps- og teoremrikt bevisfag** med fire ubetingede pilarer som hver
   krever full dekning, og en induksjonsbolk som alene kan avgjøre karakteren.
   Kapitlene holdes fokuserte; de fire drillkapitlene (2.7, 3.4, 6.6, 7.4) + de tre
   øvingseksamenene bærer mye av oppgavetellingen.
2. **Induksjon får en hel, stor del (Del 2, 7 kapitler)** i stedet for 2–4 som en
   normal nivå 1-bolk. Dette er den bevisste konsekvensen av at induksjon er
   **både hyppigst OG tyngst vektet** (opptil 30 p): de fire undertypene (sumformler,
   delelighet, ulikheter, rekursive følger) er hver en egen ferdighet, sterk
   induksjon er en femte, og bevisstruktur-disiplinen krever et eget drillkapittel.
   Del 2 åpner med et generelt bevisteknikk-kapittel (direkte/kontrapositiv/
   motsigelse/moteksempel) fordi disse teknikkene bæres inn i relasjons-, funksjons-
   og grafbevisene senere — Del 2 er derfor et avhengighetsnav, ikke bare
   induksjon.
3. **Egen bevisferdighets-behandling gjennomgående.** MA0301 er et frisvarsfag der
   *bevisstrukturen i seg selv* gir uttelling. I stedet for en isolert bevis-del
   (som MAT121) er bevishåndverket vevd inn: Del 2 etablerer det, hvert
   relasjons-/funksjons-/grafkapittel driller «arbeid fra definisjonen», og kap. 8.1
   samler føringsstandarden. Toppnivå-bevisene (Fibonacci/Lucas med sterk induksjon,
   gradskranke ved motsigelse, boolske identiteter kun fra aksiomene) er merket som
   topp-karakterskillere.
4. **Flervalgsåpningen er en egen drilltype (kap. 8.2), ikke bokas format.** MA0301
   er et frisvarsfag; flervalgsåpningen er bare en kort definisjons-/teoremtest i
   starten av hver oppgave (2018–2020). Den drilles fordi den gir billige, garanterte
   poeng og er en presisjonstest — men boka gjør det tydelig at hovedvekten ligger
   på de frie bevisene. Både «nøyaktig ett»- og «minst ett»-varianten trenes.
5. **Boolsk algebra (1.6) og håndkjørte grafalgoritmer (6.5) er nivå 3, «bør
   kunne/kjenne».** Boolsk algebra svinger (31 %, falt ut i 2020); grafalgoritmer er
   0 % etter 2016. Begge dekkes for beredskap/karakterdifferensiering, med
   Eksamensvinkel-blokker som sier tydelig at de er lavere prioritert.
6. **Rekurrenser via karakteristisk likning / genererende funksjoner er UTELATT**
   (stilregel 7). Rekursive følger dekkes kun som induksjonsverifisering (kap. 2.6).
   Tallteori/kongruens dekkes forkledd (kap. 3.2), ikke som eget tema.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–K) refererer til
oppgavetype-katalogen i analysen §3, gjengitt i bokas Del 0: **A**
flervalgsåpning (definisjon/teorem), **B** induksjonsbevis (sumformel/delelighet/
ulikhet/rekursiv følge), **C** relasjonsbevis (ekvivalens / partiell ordning +
Hasse/partisjon), **D** funksjonsbevis (injektiv/surjektiv/invers/komposisjon),
**E** logikk (forenkling / sannhetstabell / slutningsregler / kvantornegering),
**F** mengdebevis (identiteter via element/tabell/lover), **G** kombinatorikk
(permutasjon m/gjentakelse, «stjerner og streker», binomialteoremet), **H**
grafteori struktur og bevis (håndtrykk, Euler, planaritet, gradskranke), **I**
grafalgoritmer utført for hånd (Dijkstra/Prim/Kruskal/BFS — beredskap), **J**
boolsk algebra (forenkling / bevis kun fra aksiomene), **K** endelige automater og
formelle språk (tilstandsmaskin/output, konstruksjon, $L(A)$, regulære uttrykk).
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

**Kryssbok-forkunnskaper (verifiserte, bygde VGS-kapitler):** matematisk induksjon
og bevis er dekket på VGS-nivå og er de sterkeste ankrene — **R2**:
[Induksjonsbevis](/r2/r2-1-6), [Følger og tallmønstre](/r2/r2-1-1),
[Bevis og matematisk argumentasjon](/r2/r2-6-6); **R1**:
[Induksjon](/r1/r1-9-2), [Direkte bevis og moteksempler](/r1/r1-9-1),
[Kontrapositiv og kontradiksjon](/r1/r1-9-3), [Bevis i algebra](/r1/r1-1-5);
**S1**: [Kombinatorikk](/s1/s1-5-1), [Avansert kombinatorikk](/s1/s1-5-4);
**1T**: [Mengdelære](/1t/1t-1-7), [Matematisk argumentasjon](/1t/1t-6-1),
[Lese og forstå bevis](/1t/1t-6-2). Utsagnslogikk (formelt), grafteori,
automater og boolsk algebra bygges fra grunnen i boka (ingen VGS-forgjenger). Lenk
kun til disse verifiserte id-ene.

---

### Del 0 — Eksamenskartet

#### Kapittel 0.1: Eksamenskartet: fire pilarer, ett tyngdepunkt, alt begrunnes

- **id:** `ma0301-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Slik testes MA0301: frisvarsformen der alt begrunnes, flervalgsåpningen per oppgave, de fire ubetingede pilarene (induksjon, relasjoner, grafer, automater), den skjeve poengvektingen med induksjon som tyngdepunkt, sensorreglene og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet. Skal gjengi: (i) **eksamensformen**: 4-timers skriftlig skoleeksamen, karakterskala A–F, teller 100 %, hjelpemiddelkode **D** (kun enkel kalkulator, ingen bok/formelark — apparatet må sitte utenat), 7–8 tematiske oppgaver à 100 poeng totalt, **rent frisvar** («alle svar begrunnes; vis rikelig mellomregning»); (ii) **formatutviklingen**: ren frisvar 2003–2016 → **frisvar med flervalgsåpning** 2018–2020 (hver oppgave åpner med en kort definisjons-/teoremtest før de frie bevisene) — og flervalgsregelens to varianter («nøyaktig ett» 2019–2020, «minst ett» 2018); (iii) **de fire pilarene** (nesten garantert hvert sett): induksjon (92 %), relasjoner (100 %), grafteori-struktur (100 %), automater (92 %); (iv) **temafrekvens-tabellen** (relasjoner 100 %, grafer 100 %, induksjon 92 % **tyngst 15–30 p**, automater 92 %, funksjoner 69 %, kombinatorikk 69 %, utsagnslogikk 69 %, mengdelære 62 %, rekursive følger 38 % ↑ voksende, grafalgoritmer 46 % ↓ 0 % etter 2016, boolsk algebra 31 %, predikatlogikk 23 %); (v) **den skjeve vektingen**: induksjon er både hyppigst og tyngst (opptil 30 p — kan avgjøre en bokstavkarakter), fulgt av relasjoner (10–20) og grafer (10–15); (vi) **karakterskillene** (bestått ≈ riktige definisjoner i flervalg + ett komplett induksjonsbevis + verifisere ekvivalens/partiell ordning + håndtrykkslemmaet; midt ≈ delelighet-/ulikhetsinduksjon med riktig basissteg + mengdeidentitet med navngitte lover + injektiv/surjektiv + $L(A)$ + planaritet via $K_5/K_{3,3}$; topp ≈ Fibonacci/Lucas med sterk induksjon + Vandermonde + boolske identiteter kun fra aksiomene + gradskranke ved motsigelse + presis automatkonstruksjon, med navngitt egenskap/lov i hvert steg).
- **Innholdskontrakt:** Sjangerkatalogen A–K presenteres som studentens sjekkliste med frekvens per sjanger; prognosen for neste eksamen (7–8 tematiske oppgaver, hver med flervalgsåpning): **én tung induksjonsbolk** (15–20 p, med en rekursiv følge som toppdel), **én relasjonsoppgave** (ekvivalens eller partiell ordning + Hasse/partisjon), **én grafoppgave** (planaritet/Euler/gradsum, bevis ved motsigelse), **én automat-/språkoppgave**, deretter et utvalg funksjoner/logikk/mengdelære/kombinatorikk, evt. boolsk algebra. Leseplan: Del 2 er tyngdepunktet (bruk mest tid), Del 3/6/7 er de tre andre pilarene, Del 1/4/5 er lovapparat og nivå 2-poeng, Del 8 løfter presisjonen (flervalg) og føringen.
- **Oppgavesjangre:** Ingen bevisoppgaver; 3–4 refleksjonsoppgaver av typen «hvorfor gir et bart tall uten mellomregning lite uttelling her, i motsetning til i et algoritmefag?» og «lag en pugge-plan for definisjonene flervalgsåpningen tester — hvilke par forveksles oftest (ekvivalens vs. partiell ordning; injektiv vs. surjektiv)?».
- **Typiske feil:** Metafeilene: lese pensum lineært uten å prioritere induksjon og de fire pilarene; undervurdere at alt må begrunnes (bare tall gir lite); pugge algebra uten bevisstruktur (glemt basissteg = trekk); blande de forvekslede definisjonene som flervalgsåpningen straffer; bruke tid på håndkjørte grafalgoritmer (0 % etter 2016) på bekostning av grafstruktur.
- **Quiz: 10 · Flashcards: 12** (frekvenser, sjangerkatalog A–K, formatregimer, flervalgsreglene, sensorreglene, de fire pilarene)

**Prøve-kvote Del 0:** ingen (metakapittel).

---

### Del 1 — Utsagnslogikk, mengdelære og boolsk algebra *(prioritet: KUNNE — lovapparatet under alle bevis, ~62–69 %)*

#### Kapittel 1.1: Utsagnslogikk: konnektiver og sannhetstabeller

- **id:** `ma0301-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Primitive utsagn, konnektivene ¬, ∧, ∨, ⇒, ⇔ og sannhetstabellen som verktøy for tautologi, kontradiksjon og logisk ekvivalens — grunnspråket for all bevisføring i faget.
- **Forkunnskaper (kryssbok):** Ingen i boka. [Matematisk argumentasjon](/1t/1t-6-1) og [Lese og forstå bevis](/1t/1t-6-2) (uformell argumentasjon fra VGS som utgangspunkt). Den formelle utsagnslogikken bygges fra grunnen her.
- **Eksamensbelegg:** Sjanger E-grunnlag, **~69 %** (logikk samlet). Fasitens grep: sett opp full sannhetstabell, sammenlign sluttkolonnene for å avgjøre ekvivalens/tautologi/kontradiksjon. Prioritet: **kunne**.
- **Innholdskontrakt:** Primitive (atomære) utsagn; konnektivene **negasjon** $\neg p$, **konjunksjon** $p\land q$, **disjunksjon** $p\lor q$, **implikasjon** $p\Rightarrow q$, **biimplikasjon** $p\Leftrightarrow q$; sannhetstabeller for hver; **tautologi** (alltid sann), **kontradiksjon** (alltid usann), **kontingens**; **logisk ekvivalens** $p\equiv q$ (identiske sluttkolonner); den sentrale ekvivalensen $p\Rightarrow q\equiv\neg p\lor q$ (utledes med tabell); kontrapositiv $\neg q\Rightarrow\neg p\equiv p\Rightarrow q$, omvending og invers (og at omvending IKKE er ekvivalent); nødvendig/tilstrekkelig betingelse. Alt til aktiv bruk.
- **Oppgavesjangre:** E. Mønstereksempel: «Sett opp sannhetstabellen for $(p\Rightarrow q)\land(q\Rightarrow r)$ og avgjør om utsagnet er ekvivalent med $p\Rightarrow r$.»
- **Typiske feil:** Forveksle implikasjon og biimplikasjon i tabellen; tro at $p\Rightarrow q$ er ekvivalent med sin omvending $q\Rightarrow p$; feil rad-antall ($2^n$ for $n$ variabler); blande tautologi (alltid sann) og kontradiksjon.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 1.2: Logisk ekvivalens, lovene og forenkling

- **id:** `ma0301-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `ma0301-1-1`
- **kapitteltype:** teori
- **description:** Logikkens lover (De Morgan, distributiv, absorpsjon, komplement, dobbel negasjon) brukt til å forenkle sammensatte utsagn steg for steg — med hver lov navngitt, slik sensor krever.
- **Forkunnskaper (kryssbok):** Kap. 1.1. [Bevis i algebra](/r1/r1-1-5) (algebraisk omforming med navngitte regler som analogi).
- **Eksamensbelegg:** Sjanger E, **~69 %**. To ansikter: (i) **forenkle** et sammensatt utsagn *kun* med lovene, hvert steg navngitt; (ii) vise ekvivalens uten tabell. Prioritet: **kunne** (og en presisjonstest i flervalgsåpningen).
- **Innholdskontrakt:** **Logikkens lover** med navn: kommutativ, assosiativ, **distributiv**, identitet, **komplement** ($p\lor\neg p\equiv T$, $p\land\neg p\equiv F$), **dobbel negasjon**, idempotens, **De Morgan** ($\neg(p\land q)\equiv\neg p\lor\neg q$), **absorpsjon** ($p\lor(p\land q)\equiv p$), dominans; omskriving av implikasjon $p\Rightarrow q\equiv\neg p\lor q$ og negasjon av implikasjon $\neg(p\Rightarrow q)\equiv p\land\neg q$; **forenkling** til minimal form der **hvert steg refererer en navngitt lov** (sensorkrav); logisk ekvivalens vist ved lovkjede i stedet for tabell. Aktiv føring gjennomgående.
- **Oppgavesjangre:** E. Mønstereksempel: «Forenkl $\neg(\neg p\lor q)\lor(p\land\neg q)$ til minimal form. Navngi loven i hvert steg.»
- **Typiske feil:** Forenkle uten å navngi lovene (føringstrekk); feil De Morgan (glemme å negere begge ledd, eller ikke bytte $\land\leftrightarrow\lor$); glemme å skrive om implikasjonen før forenkling; hoppe over steg slik at leseren ikke kan følge tanken.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 1.3: Slutningsregler og predikatlogikk

- **id:** `ma0301-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `ma0301-1-2`
- **kapitteltype:** teori
- **description:** Gyldige argumenter linje for linje (modus ponens/tollens, disjunktiv syllogisme), og kvantorene ∀, ∃ med den kritiske ferdigheten å negere et kvantifisert utsagn korrekt.
- **Forkunnskaper (kryssbok):** Kap. 1.1–1.2. [Direkte bevis og moteksempler](/r1/r1-9-1) (argumentkjede fra premiss til konklusjon).
- **Eksamensbelegg:** Sjanger E, **~69 %** (slutningsregler); **predikatlogikk ~23 %** (ofte som flervalg — kvantornegering). Fasitens grep: etabler gyldighet linje for linje med navngitt slutningsregel; neger kvantifisert utsagn ved å bytte kvantor OG negere det indre. Prioritet: **kunne** (slutning), **kjenne** (kvantorer, men kvantornegering er en klassisk flervalgsfelle → drilles).
- **Innholdskontrakt:** **Slutningsregler**: modus ponens, **modus tollens**, disjunktiv syllogisme, hypotetisk syllogisme, konjunksjon/forenkling; **gyldig argument** = konklusjonen følger av premissene (etabler linje for linje med regelnavn); gyldighet vs. sannhet. **Predikatlogikk**: predikat $P(x)$, **kvantorer** $\forall$ (universell), $\exists$ (eksistensiell), sammensatte $\forall x\exists y$; **negering av kvantifiserte utsagn** — $\neg\forall x\,P(x)\equiv\exists x\,\neg P(x)$, $\neg\exists x\,P(x)\equiv\forall x\,\neg P(x)$, og for sammensatte: $\neg\exists x\forall y\,P\equiv\forall x\exists y\,\neg P$ (bytt hver kvantor OG neger det innerste, med De Morgan innerst). Aktiv bruk.
- **Oppgavesjangre:** E. Mønstereksempel: «Neger utsagnet $\exists x\,\forall y\,(x\le y)$ og forenkl det innerste. Er det opprinnelige eller det negerte utsagnet sant over de naturlige tallene?»
- **Typiske feil:** **Kvantornegering** — negere bare det indre utsagnet uten å bytte kvantor (eller omvendt); glemme De Morgan innerst; forveksle gyldighet (formen) og sannhet (innholdet) i et argument; bruke modus ponens der bare modus tollens er gyldig.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 1.4: Mengder, potensmengde og kartesisk produkt

- **id:** `ma0301-1-4` · **number:** 1.4 · **estimatedMinutes:** 50 · **prerequisites:** `ma0301-1-1`
- **kapitteltype:** teori
- **description:** Mengdeoperasjonene, potensmengden P(A) med |P(A)| = 2^|A|, det kartesiske produktet A×B og symmetrisk differens — mengdespråket som relasjoner og funksjoner bygges på.
- **Forkunnskaper (kryssbok):** Kap. 1.1 (utsagnslogikk — mengdeoperasjoner speiler konnektivene). [Mengdelære](/1t/1t-1-7) (tallmengder, union, snitt, Venn-diagram fra VGS).
- **Eksamensbelegg:** Sjanger F-grunnlag, **~62 %**. Fasitens grep: regn potensmengde og kartesisk produkt eksplisitt for små mengder; bruk $|\mathcal P(A)|=2^{|A|}$. Prioritet: **kunne**.
- **Innholdskontrakt:** Mengde, element, delmengde $\subseteq$, ekte delmengde; operasjonene union $\cup$, snitt $\cap$, differens $-$, **komplement** $\overline A$, **symmetrisk differens** $A\triangle B$; tomme mengden $\varnothing$; **potensmengde** $\mathcal P(A)$ og **$|\mathcal P(A)|=2^{|A|}$** (motivert ved delmengde ↔ binær valgvektor); **kartesisk produkt** $A\times B$ og $|A\times B|=|A|\cdot|B|$; Venn-diagram som heuristikk (men ikke bevis); parallellen mengdeoperasjon ↔ logisk konnektiv ($\cap\leftrightarrow\land$, $\cup\leftrightarrow\lor$, $\overline{\phantom{A}}\leftrightarrow\neg$). Aktiv bruk; klargjør at Venn-diagram *illustrerer* men ikke *beviser*.
- **Oppgavesjangre:** F. Mønstereksempel: «La $A=\{1,2\}$, $B=\{a,b,c\}$. Skriv opp $\mathcal P(A)$, og bekreft $|\mathcal P(A)|=2^{|A|}$. Hvor mange elementer har $A\times B$, og hva er $|\mathcal P(A\times B)|$?»
- **Typiske feil:** Blande $\in$ (element) og $\subseteq$ (delmengde), særlig for $\mathcal P(A)$; glemme $\varnothing$ og $A$ selv i potensmengden; regne $|A\times B|=|A|+|B|$; tro at Venn-diagram er et gyldig bevis for en identitet.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 1.5: Mengdeidentiteter: bevis ved element, tabell og lover

- **id:** `ma0301-1-5` · **number:** 1.5 · **estimatedMinutes:** 55 · **prerequisites:** `ma0301-1-4`, `ma0301-1-2`
- **kapitteltype:** teori
- **description:** Tre godkjente metoder for å bevise en mengdeidentitet — element-argument (dobbel inklusjon), medlemskapstabell og mengdelærens lover med navngitte steg — anvendt på De Morgan, distributivitet og kartesiske identiteter.
- **Forkunnskaper (kryssbok):** Kap. 1.4 (mengdeoperasjoner), 1.2 (lovforenkling som mønster). [Lese og forstå bevis](/1t/1t-6-2) (bevisføring generelt).
- **Eksamensbelegg:** Sjanger F, **~62 %**. Fasiten godtar ofte fritt metodevalg. Gjengangere: $\overline{X\cap Y\cap Z}=\overline X\cup\overline Y\cup\overline Z$; $A\times(B-C)=(A\times B)-(A\times C)$; $(A\times A)=(B\times B)\Rightarrow A=B$. Prioritet: **kunne** (midtsjikt-karakterskiller).
- **Innholdskontrakt:** **Tre bevismetoder for mengdeidentiteter**: (1) **element-argument / dobbel inklusjon** — vis $x\in$ venstre $\Leftrightarrow x\in$ høyre via en kjede av logiske ekvivalenser (bruker konnektiv ↔ operasjon-parallellen fra 1.4), evt. $A\subseteq B$ og $B\subseteq A$ hver for seg; (2) **medlemskaps-/sannhetstabell** — én kolonne per delmengde, sammenlign sluttkolonnene; (3) **mengdelærens lover** — De Morgan, distributiv, dobbelt komplement, idempotens, absorpsjon, med **navngitte steg**. Standardidentitetene over føres i minst to metoder. Element-argumentet er broen til relasjons- og funksjonsbevis (arbeid fra definisjonen). Aktiv føring.
- **Oppgavesjangre:** F. Mønstereksempel: «Bevis at $\overline{A\cup B}=\overline A\cap\overline B$ (a) med element-argument og (b) med lovene, navngitt steg for steg.»
- **Typiske feil:** Element-argument som bare viser én inklusjon (glemme den andre veien i en ekvivalens); tabell med feil antall kolonner; lovforenkling uten navngitte steg; bruke Venn-diagram som «bevis»; blande $-$ (differens) og $\triangle$ (symmetrisk differens).
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 1.6: Boolsk algebra: aksiomer, forenkling og dualitet *(bør kunne)*

- **id:** `ma0301-1-6` · **number:** 1.6 · **estimatedMinutes:** 50 · **prerequisites:** `ma0301-1-2`
- **kapitteltype:** teori
- **description:** Boolsk algebra som abstrakt lovsystem: forenkling til minimal form med de boolske lovene, dualitetsprinsippet, og bevis av identiteter KUN fra aksiomene — den tredje lovforenklings-arenaen, og en topp-karakterskiller.
- **Forkunnskaper (kryssbok):** Kap. 1.2 (logikkens lover — boolsk algebra er samme struktur), 1.5 (bevis med navngitte lover).
- **Eksamensbelegg:** Sjanger J, **~31 %** (tungt 2017–2019, falt ut 2020). To ansikter: **forenkle** et uttrykk til minimal form med lovene, eller **bevis en identitet kun fra aksiomene** (ingen tabeller). Prioritet: **kjenne / bør kunne** (differensierer, men ikke garantert).
- **Innholdskontrakt:** Boolsk algebra $(B,+,\cdot,{}',0,1)$: **aksiomene** (kommutativitet, distributivitet begge veier, identitetselementer $0,1$, komplement $x+x'=1$, $x\cdot x'=0$); avledede lover: idempotens, absorpsjon, dobbelt komplement, **De Morgan** $(x+y)'=x'\cdot y'$; **dualitetsprinsippet** (bytt $+\leftrightarrow\cdot$ og $0\leftrightarrow 1$ → dual sats gjelder, kan halvere arbeidet); **forenkling** til minimal form med navngitte steg; **bevis kun fra aksiomene** (entydighet av komplement; $a+b=b\Leftrightarrow a\cdot b=a$) — her gir en sannhetstabell **null uttelling** (sensorregel). Merk analogien til logikk (1.2) og mengdelære (1.5): samme lovstruktur, tre kontekster.
- **Oppgavesjangre:** J. Mønstereksempel: «Forenkl $x'y'z+xy'z'+xy'z$ til minimal form med de boolske lovene, navngitt steg for steg» og «bevis at komplementet er entydig, kun fra aksiomene».
- **Typiske feil:** **Bruke sannhetstabell der aksiomene kreves** (null uttelling); forenkle uten lovnavn; glemme dualiteten som kan halvere et bevis; feil De Morgan for produkt/sum; blande boolsk $+$ (OR) med talladdisjon.
- **Quiz: 14 · Flashcards: 18**

**Prøve-kvote Del 1:** 4 prøver (spesifisert i §4).

---

### Del 2 — Bevisteknikker og matematisk induksjon *(prioritet: PERFEKT — bokas tyngdepunkt, induksjon ~92 %, tyngst vektet opptil 30 p)*

#### Kapittel 2.1: Bevisteknikker: direkte, kontrapositivt, ved motsigelse og moteksempel

- **id:** `ma0301-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma0301-1-3`
- **kapitteltype:** teori
- **description:** Den generelle bevisverktøykassen — direkte bevis, kontrapositivt bevis, bevis ved motsigelse og avkreftelse ved moteksempel — som bæres inn i relasjons-, funksjons- og grafbevisene senere.
- **Forkunnskaper (kryssbok):** Kap. 1.1–1.3 (implikasjon, kontrapositiv, kvantorer). [Direkte bevis og moteksempler](/r1/r1-9-1), [Kontrapositiv og kontradiksjon](/r1/r1-9-3), [Bevis og matematisk argumentasjon](/r2/r2-6-6) (bevisteknikkene på VGS-nivå).
- **Eksamensbelegg:** Underliggende ferdighet i sjanger B/C/D/H — **bevisstruktur teller for seg selv** (sensorregel 2). «Bevis eller avkreft» krever ett moteksempel (regel 4). Kontrapositivt bevis er standard i komposisjonssetninger (sjanger D); bevis ved motsigelse i grafgradskranker (sjanger H). Prioritet: **perfekt** (metaferdigheten bak nesten alle bevis).
- **Innholdskontrakt:** **Direkte bevis** (anta hypotesen, utled konklusjonen); **kontrapositivt bevis** ($p\Rightarrow q$ via $\neg q\Rightarrow\neg p$ — når det er lettere); **bevis ved motsigelse** (anta $\neg$konklusjon, utled en umulighet); **avkreftelse ved moteksempel** (ett konkret eksempel som bryter en allkvantifisert påstand — og at ett eksempel aldri *beviser* en allpåstand); skillet «⇒» vs. «⇔» (en biimplikasjon krever begge veier); å arbeide **fra definisjonen** og navngi det som bæres. Anvendes på enkle tallteoretiske utsagn (partall/oddetall, delelighet) som oppvarming før induksjon. Merk: dette kapitlet er avhengighetsnavet for Del 3, 4 og 6.
- **Oppgavesjangre:** B/C/D-forberedelse. Mønstereksempel: «Bevis eller avkreft: for alle heltall $n$ er $n^2+n$ et partall» (direkte) og «Bevis kontrapositivt: hvis $n^2$ er odde, så er $n$ odde».
- **Typiske feil:** Bevise en allpåstand med ett eksempel; avkrefte med en vag påstand i stedet for et konkret moteksempel; vise bare én vei i en «hvis og bare hvis»; forveksle kontrapositiv ($\neg q\Rightarrow\neg p$, gyldig) og omvending ($q\Rightarrow p$, ikke ekvivalent); ikke arbeide fra definisjonen.
- **Quiz: 16 · Flashcards: 24**

#### Kapittel 2.2: Matematisk induksjon: prinsippet og bevisstrukturen

- **id:** `ma0301-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `ma0301-2-1`
- **kapitteltype:** teori
- **description:** Induksjonsprinsippet og den obligatoriske tredelte strukturen — basissteg, induksjonshypotese, induksjonssteg — som ALLE senere induksjonsbevis følger, med en egen advarsel: manglende basissteg gir trekk selv med riktig algebra.
- **Forkunnskaper (kryssbok):** Kap. 2.1 (bevisstruktur). [Induksjonsbevis](/r2/r2-1-6), [Induksjon](/r1/r1-9-2) (svak induksjon på VGS-nivå — reaktiveres og formaliseres her).
- **Eksamensbelegg:** Sjanger B, **~92 % og den tyngste bolken** (opptil 30 p). Fasiten viser HELE strukturen hver gang. Sensorregel: **å hoppe over basissteget gir trekk selv om steget er riktig**. Prioritet: **perfekt** (kjernen i bokas tyngdepunkt).
- **Innholdskontrakt:** **Induksjonsprinsippet** (svak/ordinær induksjon): for å vise $P(n)$ for alle $n\ge n_0$, vis **(1) basissteget** $P(n_0)$ eksplisitt, **(2) induksjonshypotesen** (anta $P(k)$ for et vilkårlig $k\ge n_0$), **(3) induksjonssteget** (utled $P(k+1)$ ved å bruke hypotesen); intuisjonen (dominobrikker); den **obligatoriske føringsmalen** som gjentas i 2.3–2.6; hvorfor alle tre delene trengs (moteksempel: en «induksjon» uten gyldig basissteg kan «bevise» noe usant); valg av riktig $n_0$ (ikke alltid 1 — bro til 2.5). Standard oppvarming: $\sum_{k=1}^n k=\tfrac{n(n+1)}2$ ført komplett som mal.
- **Oppgavesjangre:** B. Mønstereksempel: «Bevis ved induksjon at $\sum_{k=1}^n k=\tfrac{n(n+1)}2$ for alle $n\ge 1$. Skriv basissteg, induksjonshypotese og induksjonssteg eksplisitt.»
- **Typiske feil:** **Glemme eller forkludre basissteget** (ufullstendig bevis uansett hvor riktig steget er) — egen warning; ikke skrive induksjonshypotesen eksplisitt; «bevise» steget ved å anta det man skal vise (sirkelbevis); ikke bruke hypotesen i steget (da er det ikke et induksjonsbevis).
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 2.3: Induksjon på sumformler

- **id:** `ma0301-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `ma0301-2-2`
- **kapitteltype:** teori
- **description:** Lukkede formler for summer bevist ved induksjon — ∑k³, ∑(3k−2), geometriske summer — der induksjonssteget alltid splitter av det siste leddet og setter inn hypotesen.
- **Forkunnskaper (kryssbok):** Kap. 2.2. [Rekker og summasjon](/r2/r2-1-4), [Følger og tallmønstre](/r2/r2-1-1) (sumnotasjon $\sum$).
- **Eksamensbelegg:** Sjanger B (sumtype), **kjerne i de 92 %**. Fasitens grep: i steget, skriv $\sum_{k=1}^{n+1}=\left(\sum_{k=1}^{n}\right)+a_{n+1}$, sett inn hypotesen for den første summen, og forenkl algebraisk til høyresidens formel for $n+1$. Prioritet: **perfekt**.
- **Innholdskontrakt:** Sumnotasjon og teleskopering (kjennskap); **induksjonssteg-teknikken for summer**: splitt av siste ledd, sett inn hypotesen, faktoriser mot målformelen; gjengangere ført komplett: $\sum_{k=1}^n k^3=\left(\tfrac{n(n+1)}2\right)^2$, $\sum_{k=1}^n(3k-2)=\tfrac{n(3n-1)}2$, **geometrisk sum** $\sum_{i=0}^n r^i=\tfrac{1-r^{n+1}}{1-r}$ ($r\ne 1$); den algebraiske forenklingen vist ledd for ledd (der karakteren sitter). Aktiv føring; alle tre stegene hver gang.
- **Oppgavesjangre:** B. Mønstereksempel: «Bevis ved induksjon at $\sum_{k=1}^n k^3=\left(\tfrac{n(n+1)}2\right)^2$ for alle $n\ge 1$.»
- **Typiske feil:** Ikke splitte av siste ledd riktig; sette inn hypotesen feil sted; algebrafeil i forenklingen (fortegn, felles faktor); hoppe over mellomregning slik at faktoriseringen ikke fremgår; glemme basissteget.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 2.4: Induksjon på delelighet

- **id:** `ma0301-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** `ma0301-2-2`
- **kapitteltype:** teori
- **description:** Delelighetsbevis ved induksjon — n³−n delelig med 3, 8^m−14m+27 delelig med 7 — der steget viser at differansen mellom to påfølgende ledd er et multiplum av tallet, gitt hypotesen.
- **Forkunnskaper (kryssbok):** Kap. 2.2, 2.1 (delelighet, direkte bevis). [Bevis i algebra](/r1/r1-1-5) (algebraisk omforming).
- **Eksamensbelegg:** Sjanger B (delelighetstype), **kjerne i de 92 %; midtsjikt-karakterskiller**. Fasitens grep: skriv $f(k+1)-f(k)$ (eller $f(k+1)$ omskrevet) slik at hypotesen «$m\mid f(k)$» kan brukes, og vis at resten også er delelig. Her opptrer modulær aritmetikk **forkledd**. Prioritet: **perfekt**.
- **Innholdskontrakt:** Delelighet $m\mid a$ (det finnes heltall $t$ med $a=mt$); **induksjonssteg-teknikken for delelighet**: uttrykk $f(k+1)$ ved $f(k)$ pluss et ledd som åpenbart er delelig med $m$, bruk hypotesen; gjengangere ført komplett: $3\mid(n^3-n)$, $7\mid(8^m-14m+27)$, $6\mid(n^3-n)$, $9\mid(4^n+6n-1)$-typen; kongruens som forkledd tema (nevnes: «delelig med $n$» = «kongruent 0 mod $n$», men uten egen kongruensregning — stilregel 8). Aktiv føring; alle tre stegene.
- **Oppgavesjangre:** B. Mønstereksempel: «Bevis ved induksjon at $n^3-n$ er delelig med 3 for alle $n\ge 1$.»
- **Typiske feil:** Ikke isolere det delelige leddet i steget; bruke hypotesen feil; regnefeil i ekspansjonen av $f(k+1)$; påstå delelighet uten å skrive faktoren $m\cdot(\text{heltall})$ eksplisitt; glemme basissteget.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 2.5: Induksjon på ulikheter — og valg av riktig basissteg

- **id:** `ma0301-2-5` · **number:** 2.5 · **estimatedMinutes:** 55 · **prerequisites:** `ma0301-2-2`
- **kapitteltype:** teori
- **description:** Ulikhetsinduksjon der basissteget ofte IKKE er n=1 — for 2^n ≥ n² er det n=4 — og der steget bruker en tidligere etablert ulikhet. Den vanligste induksjonsfellen bor her.
- **Forkunnskaper (kryssbok):** Kap. 2.2. [Induksjonsbevis](/r2/r2-1-6) (ulikhetsvariant fra VGS).
- **Eksamensbelegg:** Sjanger B (ulikhetstype), **kjerne i de 92 %; midtsjikt-karakterskiller**. Fasitens grep: finn det minste $n_0$ der påstanden faktisk holder (sjekk små $n$!), og bruk i steget en tidligere bevist ulikhet (f.eks. $2^k\ge k^2\Rightarrow 2^{k+1}=2\cdot 2^k\ge 2k^2\ge(k+1)^2$ for $k\ge 3$). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Valg av riktig basissteg**: sjekk små $n$ — for $2^n\ge n^2$ feiler $n=3$, basissteg er $n=4$; for $n^2\ge 2n+1$ er det $n=3$; å starte på $n=1$ av vane gir et feil bevis; **induksjonssteg-teknikken for ulikheter**: fra hypotesen, forsterk med en tidligere bevist hjelpeulikhet til målet for $k+1$; monotoni og transitivitet av $\ge$. Gjengangere ført komplett: $2^n\ge n^2$ ($n\ge 4$), $n^2\ge 2n+1$ ($n\ge 3$), $2^n>n$, $n!\ge 2^{n-1}$. Aktiv føring; alle tre stegene.
- **Oppgavesjangre:** B. Mønstereksempel: «Bevis ved induksjon at $2^n\ge n^2$ for alle $n\ge 4$. Forklar hvorfor basissteget ikke er $n=1$.»
- **Typiske feil:** **Feil basissteg** — starte på $n=1$ når påstanden er usann der (klassisk felle, egen warning); ikke sjekke at basissteget faktisk holder; i steget mangle den forsterkende hjelpeulikheten (så $k^2$ ikke kobles til $(k+1)^2$); snu ulikhetstegnet ved en feilaktig forsterkning.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 2.6: Rekursivt definerte følger og sterk induksjon

- **id:** `ma0301-2-6` · **number:** 2.6 · **estimatedMinutes:** 60 · **prerequisites:** `ma0301-2-5`
- **kapitteltype:** teori
- **description:** Fibonacci, Lucas og Narayana: identiteter for rekursivt definerte følger bevist med sterk induksjon (flere foregående ledd) — den voksende gjengangeren og en topp-karakterskiller. Rekurrenser løses ALDRI via karakteristisk likning.
- **Forkunnskaper (kryssbok):** Kap. 2.2–2.5 (svak induksjon), 2.1 (bevisstruktur). [Følger og tallmønstre](/r2/r2-1-1), [Geometriske følger](/r2/r2-1-3) (rekursiv definisjon).
- **Eksamensbelegg:** Sjanger B (rekursiv følge), **~38 % og voksende — i alle sett 2018–2020**, ofte som tung deloppgave (8–12 p) og **topp-karakterskiller**. Fasitens grep: bruk følgens rekursjon ($F_n=F_{n-1}+F_{n-2}$) og en oppgitt hjelpeidentitet; **sterk induksjon** når steget krever flere foregående ledd (f.eks. $c_{n+2}=3c_{n+1}-3c_n+c_{n-1}$). **⚠️ Rekurrenser løses her KUN som induksjonsverifisering — aldri karakteristisk likning/genererende funksjoner** (stilregel 7). Prioritet: **perfekt** (topp-differensierer).
- **Innholdskontrakt:** **Rekursivt definert følge** (grunnledd + rekursjon): **Fibonacci** $F_n=F_{n-1}+F_{n-2}$, **Lucas** $L_n=L_{n-1}+L_{n-2}$, Narayana-følgen; **sterk (fullstendig) induksjon** — anta $P(j)$ for ALLE $j$ opp til $k$ (ikke bare $j=k$), nødvendig når rekursjonen bruker flere foregående ledd; **flere basissteg** (én per ledd rekursjonen trekker på); gjengangere ført komplett: $F_1+F_2+\cdots+F_n=F_{n+2}-1$, $L_n=F_{n-1}+F_{n+1}$, en Narayana-identitet med tredje-ordens rekursjon; når sterk vs. svak induksjon trengs. **Eksplisitt: karakteristisk likning og genererende funksjoner brukes IKKE** — følgene verifiseres, ikke løses. Aktiv føring; komplett struktur.
- **Oppgavesjangre:** B. Mønstereksempel: «La $L_n$ være Lucas-følgen ($L_1=1$, $L_2=3$, $L_n=L_{n-1}+L_{n-2}$). Bevis ved sterk induksjon at $L_n=F_{n-1}+F_{n+1}$ for alle $n\ge 2$.»
- **Typiske feil:** Bruke svak induksjon der rekursjonen trenger to/tre foregående ledd (sterk induksjon kreves); for få basissteg (må ha ett per ledd rekursjonen bruker); prøve karakteristisk likning (feil metode her); ikke bruke den oppgitte hjelpeidentiteten; indeksforskyvningsfeil i $F_{n-1}, F_{n+1}$.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 2.7: Drill: induksjonsbeviset — komplett struktur hver gang

- **id:** `ma0301-2-7` · **number:** 2.7 · **estimatedMinutes:** 90 · **prerequisites:** `ma0301-2-6`
- **kapitteltype:** drill
- **description:** Hele induksjonsrepertoaret drillet til automatikk — sumformel, delelighet, ulikhet, rekursiv følge — med den obligatoriske tredelte strukturen og riktig basissteg hver gang, siden dette er fagets tyngste og hyppigste bolk.
- **Eksamensbelegg:** Dekker sjanger B i alle fire undertyper (~92 %, tyngst vektet, opptil 30 p). Variantkatalogen: sumformel (splitt siste ledd), delelighet (isoler det delelige leddet), ulikhet (riktig $n_0$ + hjelpeulikhet), rekursiv følge (sterk induksjon, flere basissteg). Prioritet: **perfekt** — dette er drillkapitlet som bærer bokas tyngdepunkt.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme for ethvert induksjonsbevis)**: (1) identifiser $P(n)$ og undertypen (sum/delelighet/ulikhet/følge); (2) **basissteg** — finn og verifiser det minste $n_0$ (sjekk små $n$ for ulikheter; flere ledd for følger); (3) skriv **induksjonshypotesen** eksplisitt (svak eller sterk?); (4) **induksjonssteg** med undertype-teknikken (splitt siste ledd / isoler delelig ledd / forsterk med hjelpeulikhet / bruk rekursjonen); (5) verbal konklusjon. **Gjennomregnet eksamenscase** (en tung induksjonsbolk med en rekursiv følge som toppdel) med **sensor-margnotater** om hvor poengene sitter (eksplisitt basissteg, hypotese brukt i steget, algebra vist, riktig $n_0$). **10–15 oppgaver** på eksamensnivå: minst én av hver undertype + én sterk-induksjon-følge + én med ikke-triviell $n_0$. Egen **warning-boks**: manglende/forkludret basissteg = trekk uansett.
- **Oppgavesjangre:** B, alle fire undertyper. Mønstereksempel: «(a) Bevis $\sum_{k=1}^n(2k-1)=n^2$. (b) Bevis $5\mid(n^5-n)$. (c) Bevis $2^n\ge n^2$ for $n\ge 4$. (d) Bevis en Fibonacci-identitet med sterk induksjon.»
- **Typiske feil:** Hele fellekatalogen fra 2.2–2.6 under tidspress; glemt/forkludret basissteg; svak induksjon der sterk trengs; feil $n_0$; hypotesen ikke brukt i steget; algebra ikke vist.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 2:** 4 prøver (spesifisert i §4).

---

### Del 3 — Relasjoner: ekvivalens og partiell ordning *(prioritet: PERFEKT — ~100 %)*

#### Kapittel 3.1: Relasjoner og deres egenskaper

- **id:** `ma0301-3-1` · **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** `ma0301-1-4`, `ma0301-2-1`
- **kapitteltype:** teori
- **description:** En relasjon som delmengde av A×A, og de fire egenskapene — refleksiv, symmetrisk, anti-symmetrisk, transitiv — som sjekkes hver for seg fra definisjonen. Skillet symmetrisk vs. anti-symmetrisk er den hyppigste flervalgsfellen.
- **Forkunnskaper (kryssbok):** Kap. 1.4 (kartesisk produkt), 2.1 (bevis fra definisjon, moteksempel).
- **Eksamensbelegg:** Sjanger C-grunnlag, **~100 %**. Åpner ofte med flervalgsdel (sjanger A): velg riktig definisjon. Fasitens grep: sjekk hver egenskap for seg mot definisjonen; ved «mangler egenskapen» — gi ett moteksempel. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Relasjon** $R\subseteq A\times A$, notasjon $aRb$; de fire egenskapene med presis definisjon: **refleksiv** ($\forall a: aRa$), **symmetrisk** ($aRb\Rightarrow bRa$), **anti-symmetrisk** ($aRb\land bRa\Rightarrow a=b$), **transitiv** ($aRb\land bRc\Rightarrow aRc$); at symmetrisk og anti-symmetrisk **ikke er motsetninger** (en relasjon kan være begge, f.eks. likhet, eller ingen); sjekkprosedyren (verifiser hver egenskap fra definisjonen, ELLER avkreft med ett moteksempel); relasjonen som graf/matrise (kjennskap). **Den kritiske kontrasten** (bygges her, brukes i 3.2–3.3): ekvivalens = refl. + **sym.** + trans.; partiell ordning = refl. + **anti-sym.** + trans. Aktiv føring.
- **Oppgavesjangre:** C (+ A-flervalg). Mønstereksempel: «Avgjør for relasjonen $aRb\Leftrightarrow a+b$ er partall (på $\mathbb Z$) hvilke av de fire egenskapene som holder. Begrunn hver, med moteksempel der en egenskap mangler.»
- **Typiske feil:** **Blande symmetrisk og anti-symmetrisk** (hyppigste flervalgsfelle); tro de er motsetninger; påstå en egenskap uten å sjekke fra definisjonen; avkrefte med en vag påstand i stedet for moteksempel; forveksle refleksiv og transitiv.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 3.2: Ekvivalensrelasjoner, ekvivalensklasser og partisjoner

- **id:** `ma0301-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `ma0301-3-1`
- **kapitteltype:** teori
- **description:** Ekvivalensrelasjonen (refleksiv, symmetrisk, transitiv), ekvivalensklassene [a] den induserer, og korrespondansen ekvivalensrelasjon ↔ partisjon — med kongruens mod n som det gjennomgående eksempelet.
- **Forkunnskaper (kryssbok):** Kap. 3.1 (egenskaper), 2.1 (bevis fra definisjon), 1.4 (mengder/partisjon).
- **Eksamensbelegg:** Sjanger C, **~100 %**. Fasitens grep: for å vise ekvivalens, verifiser refleksiv, symmetrisk OG transitiv hver for seg fra definisjonen; bestem så ekvivalensklassene / partisjonen. Kongruens mod $n$ opptrer her **forkledd** (stilregel 8). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Ekvivalensrelasjon** = refleksiv + symmetrisk + transitiv; **ekvivalensklasse** $[a]=\{x:xRa\}$; egenskapene: klassene er ikke-tomme, dekker $A$, og er parvis disjunkte ($[a]=[b]$ eller $[a]\cap[b]=\varnothing$); **partisjon** av $A$ og **fundamentalsetningen**: en ekvivalensrelasjon induserer en partisjon, og enhver partisjon gir en ekvivalensrelasjon (korrespondansen); det gjennomgående eksempelet **kongruens mod $n$**: $a\sim b\Leftrightarrow n\mid(a-b)$ er en ekvivalensrelasjon, klassene er restklassene $[0],[1],\dots,[n-1]$ (her møtes modulær aritmetikk forkledd — men uten kongruensregning som eget tema). Aktiv føring; hver av de tre egenskapene vist.
- **Oppgavesjangre:** C. Mønstereksempel: «Vis at $a\sim b\Leftrightarrow 5\mid(a-b)$ er en ekvivalensrelasjon på $\mathbb Z$, og beskriv ekvivalensklassene / partisjonen den gir.»
- **Typiske feil:** Bare sjekke to av de tre egenskapene; forveksle med partiell ordning (bruke anti-symmetrisk); feil ekvivalensklasser (glemme at $[a]=[b]$ når $aRb$); tro klassene overlapper; ikke koble til partisjonen.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 3.3: Partielle ordninger, Hasse-diagram og ekstremale elementer

- **id:** `ma0301-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `ma0301-3-1`
- **kapitteltype:** teori
- **description:** Partiell ordning (refleksiv, anti-symmetrisk, transitiv), Hasse-diagrammet som komprimert bilde av ordningen, og de fire ekstremaltypene — minimal, maksimal, minste, største — med «deler»-ordningen som standardeksempel.
- **Forkunnskaper (kryssbok):** Kap. 3.1 (egenskaper), 2.1 (bevis fra definisjon).
- **Eksamensbelegg:** Sjanger C, **~100 %**. Fasitens grep: verifiser refleksiv, **anti-symmetrisk**, transitiv; les Hasse-diagram ↔ relasjonsmengde (legg til refleksive og transitive par); finn ekstremale elementer. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Partiell ordning** (poset) = refleksiv + anti-symmetrisk + transitiv; **Hasse-diagram** — dekningsrelasjonen (fjern refleksive og transitive kanter, orienter oppover), og omvendt: fra Hasse-diagram gjenoppbygg full relasjonsmengde (legg til alle refleksive og transitive par); **ekstremale elementer**: **minimal/maksimal** (ingen under/over) vs. **minste/største** (under/over ALT) — og at minste/største kan mangle mens minimale/maksimale finnes; totalordning (kjede) vs. ekte partiell; standardeksempler: **«deler»-ordningen** $a\mid b$ på en tallmengde, delmengdeordningen $\subseteq$ på $\mathcal P(A)$. Aktiv føring; hver egenskap vist; ekstremaltypene skilt tydelig.
- **Oppgavesjangre:** C. Mønstereksempel: «La $\preceq$ være delelighet på $\{1,2,3,4,6,12\}$. Vis at det er en partiell ordning, tegn Hasse-diagrammet, og oppgi minimale, maksimale, minste og største elementer.»
- **Typiske feil:** Bruke symmetrisk i stedet for anti-symmetrisk (blander med ekvivalens); tegne Hasse-diagram med refleksive/transitive kanter med; **forveksle minimal/maksimal med minste/største**; påstå at et minste element finnes når bare minimale gjør det; glemme å legge til transitive par ved rekonstruksjon.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 3.4: Drill: relasjonsbeviset og Hasse ↔ relasjonsmengde

- **id:** `ma0301-3-4` · **number:** 3.4 · **estimatedMinutes:** 80 · **prerequisites:** `ma0301-3-3`
- **kapitteltype:** drill
- **description:** Hele relasjonsrepertoaret drillet: klassifiser en relasjon fra egenskapene, bevis eller avkreft ekvivalens/partiell ordning, oversett mellom Hasse-diagram og relasjonsmengde, og bestem klasser/partisjon/ekstremale elementer.
- **Eksamensbelegg:** Dekker sjanger C (~100 %) + A-flervalgsåpningen (definisjonstest). Variantkatalogen: klassifiser fire egenskaper med moteksempler, ekvivalensbevis + partisjon, partiell ordning-bevis + Hasse + ekstremaler, «avkreft at $R$ er en partiell ordning» (ett moteksempel — f.eks. en symmetrisk relasjon KAN ikke være ekte partiell ordning). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift**: (1) hvilken relasjonstype spørres? (klassifiser / ekvivalens / partiell ordning / Hasse); (2) for hver egenskap — verifiser fra definisjonen ELLER gi ett moteksempel; (3) for ekvivalens — oppgi klassene/partisjonen; for partiell ordning — tegn Hasse, finn ekstremaler; (4) for flervalgsåpning — velg riktig definisjon (ekvivalens = sym.; partiell ordning = anti-sym.). **Gjennomregnet case** (en relasjonsoppgave med flervalgsåpning + ekvivalens-eller-avkreft + Hasse/partisjon) med sensor-margnotater. **10–15 oppgaver**: minst én klassifisering m/moteksempler, én ekvivalens + partisjon, én partiell ordning + Hasse + ekstremaler, én «avkreft», én flervalgsåpning.
- **Oppgavesjangre:** C + A. Mønstereksempel: «(a) Flervalg: hvilket utsagn definerer en partiell ordning korrekt? (b) Avgjør om $R$ på $\{1,2,3,4\}$ gitt ved Hasse-diagrammet er en partiell ordning, og oppgi relasjonsmengden med alle par.»
- **Typiske feil:** Hele fellekatalogen fra 3.1–3.3 under tidspress; symmetrisk/anti-symmetrisk-forveksling i flervalg; minimal/maksimal vs. minste/største; avkrefte uten konkret moteksempel; glemme transitive par ved Hasse-rekonstruksjon.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 3:** 4 prøver (spesifisert i §4).

---

### Del 4 — Funksjoner *(prioritet: KUNNE — ~69 %)*

#### Kapittel 4.1: Funksjoner: injektiv, surjektiv og bijektiv

- **id:** `ma0301-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma0301-3-1`, `ma0301-2-1`
- **kapitteltype:** teori
- **description:** Funksjon som spesiell relasjon, og egenskapene injektiv (a₁≠a₂ gir ulike bilder), surjektiv (hele kodomenet treffes) og bijektiv — bevist fra definisjonen eller avkreftet med moteksempel. Standardfellen: a₁=a₂ ⇒ f(a₁)=f(a₂) definerer ingenting.
- **Forkunnskaper (kryssbok):** Kap. 3.1 (relasjon), 2.1 (bevis fra definisjon, moteksempel), 1.4 (bilde $f(A)$ som mengde).
- **Eksamensbelegg:** Sjanger D, **~69 %; midtsjikt-karakterskiller**. Ofte flervalgsåpning (velg riktig definisjon). Fasitens grep: **injektiv** — anta $f(a_1)=f(a_2)$, utled $a_1=a_2$ (eller gi moteksempel); **surjektiv** — for vilkårlig $b$ i kodomenet, finn $a$ med $f(a)=b$ (eller vis at et element aldri treffes). Prioritet: **kunne**.
- **Innholdskontrakt:** **Funksjon** $f:A\to B$ (hvert element i $A$ har nøyaktig ett bilde); domene, kodomene, **bilde** $f(A)$; **injektiv** (én-til-én): $f(a_1)=f(a_2)\Rightarrow a_1=a_2$; **surjektiv** (på): $f(A)=B$, dvs. $\forall b\in B\,\exists a\in A: f(a)=b$; **bijektiv** = injektiv + surjektiv; bevisteknikken for hver (direkte fra definisjonen, eller moteksempel); **standardfellen**: $a_1=a_2\Rightarrow f(a_1)=f(a_2)$ gjelder ALLE funksjoner og definerer verken injektiv eller surjektiv (flervalgsdistraktor); partisjonen $\{f^{-1}(b):b\in f(A)\}$ som fibre (bro til ekvivalensklasser). Aktiv føring.
- **Oppgavesjangre:** D (+ A-flervalg). Mønstereksempel: «La $f:\mathbb R\to\mathbb R$, $f(x)=x^2-2x$. Avgjør om $f$ er injektiv og om den er surjektiv. Bevis eller gi moteksempel.»
- **Typiske feil:** **Injektiv/surjektiv-forveksling**; velge flervalgsdistraktoren $a_1=a_2\Rightarrow f(a_1)=f(a_2)$; «bevise» injektiv med ett eksempel i stedet for generelt; ved surjektiv glemme å sjekke hele kodomenet (ikke bare bildet); avkrefte uten konkret moteksempel.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 4.2: Komposisjon, invers og komposisjonssetninger

- **id:** `ma0301-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `ma0301-4-1`
- **kapitteltype:** teori
- **description:** Sammensetning g∘f, invers funksjon (finnes ⇔ bijektiv), og komposisjonssetningene — «g∘f injektiv ⇒ f injektiv» — ofte bevist kontrapositivt.
- **Forkunnskaper (kryssbok):** Kap. 4.1 (injektiv/surjektiv/bijektiv), 2.1 (kontrapositivt bevis).
- **Eksamensbelegg:** Sjanger D, **del av de ~69 %**. Fasitens grep: **invers** — løs $y=f(x)$ for $x$; **komposisjonssetninger** — «hvis $g\circ f$ er injektiv, så er $f$ injektiv» bevises ofte **kontrapositivt** (anta $f$ ikke injektiv, vis $g\circ f$ ikke injektiv). Prioritet: **kunne** (topp-differensierer på komposisjonssetningene).
- **Innholdskontrakt:** **Komposisjon** $(g\circ f)(x)=g(f(x))$ (og at rekkefølgen betyr noe); **invers funksjon** $f^{-1}$ — eksisterer $\Leftrightarrow f$ er bijektiv, $f^{-1}\circ f=\mathrm{id}$, beregnes ved å løse $y=f(x)$ for $x$; **komposisjonssetningene**: $f,g$ injektive $\Rightarrow g\circ f$ injektiv; $f,g$ surjektive $\Rightarrow g\circ f$ surjektiv; **de «bakover»-setningene** (topp-nivå): $g\circ f$ injektiv $\Rightarrow f$ injektiv (kontrapositivt), $g\circ f$ surjektiv $\Rightarrow g$ surjektiv; $(g\circ f)^{-1}=f^{-1}\circ g^{-1}$. Bevisene føres komplett, med kontraposisjon der det forenkler. Aktiv føring.
- **Oppgavesjangre:** D. Mønstereksempel: «Vis at hvis $g\circ f$ er injektiv, så er $f$ injektiv. (Hint: kontrapositivt.)» og «finn inversen til $f(x)=\tfrac{2x-1}{x+3}$ og oppgi domenet.»
- **Typiske feil:** Feil rekkefølge i $g\circ f$; tro invers finnes uten bijektivitet; feil rekkefølge i $(g\circ f)^{-1}$; i komposisjonssetningene bevise feil retning (anta det man skal vise); ikke se at kontraposisjon forenkler «bakover»-setningene.
- **Quiz: 16 · Flashcards: 20**

**Prøve-kvote Del 4:** 4 prøver (spesifisert i §4).

---

### Del 5 — Kombinatorikk og telling *(prioritet: KUNNE — ~69 %)*

#### Kapittel 5.1: Tellingens grunnprinsipper: permutasjoner og kombinasjoner

- **id:** `ma0301-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma0301-1-4`
- **kapitteltype:** teori
- **description:** Produkt- og sumregelen, permutasjoner og kombinasjoner, og den sentrale eksamensvarianten: permutasjoner med gjentatte elementer (bokstavene i et ord), inkludert «ved siden av»- og «ikke ved siden av»-tilleggene.
- **Forkunnskaper (kryssbok):** Kap. 1.4 (mengder). [Kombinatorikk](/s1/s1-5-1), [Avansert kombinatorikk](/s1/s1-5-4) (telleprinsippene på VGS-nivå).
- **Eksamensbelegg:** Sjanger G, **~69 %**. Fasitens grep: **permutasjon med gjentakelse** $\tfrac{n!}{n_1!\,n_2!\cdots n_r!}$ (antall omstokkinger av et ord); «X-ene ved siden av hverandre» = slå sammen til ett tegn; «ingen X ved siden av hverandre» = komplement eller mellomrom-metoden. Prioritet: **kunne**.
- **Innholdskontrakt:** **Produktregelen** og **sumregelen**; **permutasjon** $P(n,r)=\tfrac{n!}{(n-r)!}$ (ordnet uttak); **kombinasjon** $\binom nr=\tfrac{n!}{r!(n-r)!}$ (uordnet uttak); **permutasjon med gjentatte elementer** $\tfrac{n!}{n_1!\cdots n_r!}$ (multinomial) — bokstavene i et ord (f.eks. et ord med gjentatte bokstaver); tilleggsteknikkene: **«ved siden av»** (slå de bundne elementene sammen til én blokk, tell blokkene, multipliser med interne omstokkinger), **«ikke ved siden av»** (komplement, eller plasser i mellomrommene mellom de andre); inklusjon–eksklusjon (grunnform, kjennskap). Aktiv føring; hver telling begrunnet.
- **Oppgavesjangre:** G. Mønstereksempel: «Hvor mange omstokkinger har bokstavene i et ord med to like par? Hvor mange av disse har de to like A-ene ved siden av hverandre? Hvor mange har dem IKKE ved siden av hverandre?»
- **Typiske feil:** **Glemme å dele på $n_i!$** for like elementer (dobbelttelling); blande ordnet (permutasjon) og uordnet (kombinasjon) uttak; feil håndtering av «ved siden av» (glemme interne omstokkinger i blokken); regne «ikke ved siden av» direkte i stedet for via komplement.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 5.2: Binomialteoremet og kombinatoriske identiteter

- **id:** `ma0301-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `ma0301-5-1`, `ma0301-2-2`
- **kapitteltype:** teori
- **description:** Binomialteoremet, Pascals trekant, og bevis av kombinatoriske identiteter (Vandermonde, symmetri) ved koeffisientsammenligning eller kombinatorisk argument — en topp-differensierende teknikk.
- **Forkunnskaper (kryssbok):** Kap. 5.1 (kombinasjoner), 2.2 (induksjon — noen identiteter bevises induktivt). [Polynomer og polynomdivisjon](/r1/r1-1-1) (polynomkoeffisienter).
- **Eksamensbelegg:** Sjanger G, **del av de ~69 %; topp-karakterskiller** på identitetene. Fasitens grep: **finn en bestemt koeffisient** i $(a+b)^n$; **bevis identiteter** (Vandermonde, Narayana-symmetri) ved å sammenligne koeffisienter i to uttrykk for samme størrelse, eller ved kombinatorisk dobbelttelling. Prioritet: **kunne** (identitetene differensierer).
- **Innholdskontrakt:** **Binomialteoremet** $(a+b)^n=\sum_{k=0}^n\binom nk a^{n-k}b^k$; **Pascals identitet** $\binom nk=\binom{n-1}{k-1}+\binom{n-1}{k}$ og Pascals trekant; **symmetri** $\binom nk=\binom n{n-k}$; **finn en spesifikk koeffisient** (velg riktig $k$); **Vandermondes identitet** $\sum_k\binom mk\binom{n}{r-k}=\binom{m+n}{r}$; bevismetodene: **koeffisientsammenligning** (to uttrykk for $(1+x)^{m+n}$) og **kombinatorisk argument / dobbelttelling** (tell samme mengde på to måter); enkel identitet ved induksjon. Aktiv føring; identitetsbevis komplett.
- **Oppgavesjangre:** G. Mønstereksempel: «Finn koeffisienten til $x^5$ i $(2x-3)^8$» og «bevis Vandermondes identitet $\sum_{k=0}^r\binom mk\binom n{r-k}=\binom{m+n}r$ ved koeffisientsammenligning».
- **Typiske feil:** Feil $k$ for ønsket ledd; glemme fortegn/koeffisienter fra $(2x-3)$-typen; forveksle koeffisientsammenligning og kombinatorisk argument; ufullstendig dobbelttelling (bare én tellemåte vist); regnefeil i binomialkoeffisientene.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 5.3: «Stjerner og streker» og fordelingsproblemer

- **id:** `ma0301-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `ma0301-5-1`
- **kapitteltype:** teori
- **description:** Ikke-negative heltallsløsninger av x₁+…+x_k=n telt med «stjerner og streker» C(n+k−1, n), og de to tilleggskravene x_i≥c (substitusjon) og x_i≤c (komplement) som ofte forveksles.
- **Forkunnskaper (kryssbok):** Kap. 5.1 (kombinasjoner).
- **Eksamensbelegg:** Sjanger G, **del av de ~69 %**. Fasitens grep: antall ikke-negative heltallsløsninger av $x_1+\cdots+x_k=n$ er $\binom{n+k-1}{n}$; **$x_i\ge c$** løses ved **substitusjon** (trekk fra $c$ først); **$x_i\le c$** løses ved **komplement** (tell dem som bryter, trekk fra). Prioritet: **kunne**.
- **Innholdskontrakt:** **«Stjerner og streker»**-modellen: fordel $n$ like objekter på $k$ bokser = ikke-negative heltallsløsninger av $x_1+\cdots+x_k=n$ = $\binom{n+k-1}{n}=\binom{n+k-1}{k-1}$ (utled bijeksjonen stjerner/streker); **nedre skranke** $x_i\ge c$: substituer $y_i=x_i-c$, reduser $n$; **øvre skranke** $x_i\le c$: **komplement / inklusjon–eksklusjon** (tell totalt, trekk fra dem som bryter); minst-én-i-hver-boks ($x_i\ge 1$) som spesialtilfelle; oversettelse ord-oppgave → likning. Aktiv føring; modellvalget begrunnet.
- **Oppgavesjangre:** G. Mønstereksempel: «På hvor mange måter kan 12 like kuler fordeles på 4 esker (a) uten krav, (b) med minst 2 i hver eske, (c) med høyst 5 i hver eske?»
- **Typiske feil:** **Blande $x_i\ge c$ (substitusjon) og $x_i\le c$ (komplement)** — feil tak/gulv; feil $k-1$ vs. $k$ i formelen; glemme å redusere $n$ etter substitusjon; regne øvre skranke direkte i stedet for via komplement; feil bijeksjon stjerner/streker.
- **Quiz: 14 · Flashcards: 16**

**Prøve-kvote Del 5:** 4 prøver (spesifisert i §4).

---

### Del 6 — Grafteori og trær *(prioritet: PERFEKT — struktur ~100 %)*

#### Kapittel 6.1: Grafer, grad og håndtrykkslemmaet

- **id:** `ma0301-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma0301-2-1`
- **kapitteltype:** teori
- **description:** Grunnbegrepene (graf, grad, sammenhengende, K_n), og håndtrykkslemmaet ∑deg v = 2|E| med dets viktigste konsekvens: en gradfølge med odde gradsum er umulig.
- **Forkunnskaper (kryssbok):** Kap. 2.1 (bevis, moteksempel). Grafteori bygges fra grunnen (ingen VGS-forgjenger).
- **Eksamensbelegg:** Sjanger H-grunnlag, **~100 %**. Ofte flervalgsåpning (velg riktig formel). Fasitens grep: regn kanter fra grader via **håndtrykkslemmaet** $\sum\deg v=2|E|$, eller vis at en gradfølge er umulig fordi gradsummen blir odde. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Graf** $G=(V,E)$, enkel graf, multigraf (kjennskap); **grad** $\deg v$, isolert/endehjørne; nabolag; **vei, sti, sykel, sammenhengende graf**, komponent; **komplett graf** $K_n$ med $|E|=\tfrac{n(n-1)}2$ (utled ved håndtrykk eller $\binom n2$); **todelt graf** $K_{m,n}$; **håndtrykkslemmaet** $\sum_{v\in V}\deg v=2|E|$ (bevis: hver kant bidrar 2 til gradsummen); **korollarer**: gradsummen er alltid partall; antall hjørner med odde grad er partall; **umulig gradfølge** (odde gradsum ⇒ ingen slik graf finnes). Aktiv føring; håndtrykk brukt aktivt.
- **Oppgavesjangre:** H (+ A-flervalg). Mønstereksempel: «Finnes det en graf med gradfølgen $(3,3,3,3,3)$? Begrunn med håndtrykkslemmaet. Hvor mange kanter har $K_6$?»
- **Typiske feil:** **«Konstruere» en graf med odde gradsum** (klassisk felle); regne $|E|=\sum\deg v$ uten å dele på 2; feil $|E|$ for $K_n$; forveksle vei og sti; blande grad og antall naboer i multigraf.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 6.2: Eulers formel og planaritet

- **id:** `ma0301-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** `ma0301-6-1`
- **kapitteltype:** teori
- **description:** Eulers formel |V|−|E|+|R|=2 for planare grafer, planaritetsulikheten |E|≤3|V|−6, og ikke-planaritet bevist ved en delgraf homeomorf med K₅ eller K₃,₃ (Kuratowski) — aldri ved at en tegning «ikke går».
- **Forkunnskaper (kryssbok):** Kap. 6.1 (grad, kanter). 
- **Eksamensbelegg:** Sjanger H, **~100 %; midtsjikt-karakterskiller**. Ofte flervalgsåpning (Eulers formel / planaritetsulikheten). Fasitens grep: bruk $|V|-|E|+|R|=2$ til å regne manglende størrelse; bevis **ikke**-planaritet ved å finne en delgraf **homeomorf med $K_5$ eller $K_{3,3}$**. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Planar graf**, plan tegning, **region/flate** $R$ (inkl. den ubegrensede); **Eulers formel** $|V|-|E|+|R|=2$ (for sammenhengende planar graf); **kantskranken** $|E|\le 3|V|-6$ (for enkel planar graf med $|V|\ge 3$) og $2|E|\ge 3|R|$; **$K_5$ og $K_{3,3}$ er ikke planare** (vis via ulikheten: $K_5$ har $|E|=10>3\cdot5-6=9$); **Kuratowskis teorem** — en graf er planar hvis og bare hvis den ikke inneholder en delgraf **homeomorf med** (eller kontraherbar til) $K_5$ eller $K_{3,3}$; **homeomorfi / elementær oppdeling** (subdivisjon); **bevis for ikke-planaritet** ved å utpeke en slik delgraf (ikke ved at en tegning «mislykkes»). Aktiv føring; formelbruk og delgraf-argument vist.
- **Oppgavesjangre:** H (+ A-flervalg). Mønstereksempel: «En sammenhengende planar graf har 7 hjørner og 10 kanter. Hvor mange regioner? Vis dernest at $K_{3,3}$ ikke er planar.»
- **Typiske feil:** **Fortegnsfeil i Eulers formel** ($|V|-|E|+|R|=2$, ikke $+|E|$ eller $-|R|$); **$|E|\le 3|V|-6$** feilhusket som $3|V|+6$; **«bevise» ikke-planaritet ved tegning** (beviser ingenting); glemme den ubegrensede regionen i $|R|$; bruke kantskranken på ikke-sammenhengende graf uten forbehold.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 6.3: Gradskranker og strukturbevis ved motsigelse

- **id:** `ma0301-6-3` · **number:** 6.3 · **estimatedMinutes:** 50 · **prerequisites:** `ma0301-6-2`, `ma0301-2-1`
- **kapitteltype:** teori
- **description:** De strukturelle grafbevisene — «enhver endelig sammenhengende planar graf har et hjørne av grad ≤ 5» — ført ved motsigelse: anta alle grader ≥ 6 og utled en umulighet fra kantskranken. Toppnivå-teknikken i grafbolken.
- **Forkunnskaper (kryssbok):** Kap. 6.2 (kantskranke, Eulers formel), 2.1 (bevis ved motsigelse).
- **Eksamensbelegg:** Sjanger H, **del av de ~100 %; topp-karakterskiller**. Fasitens grep: **bevis ved motsigelse** — anta det motsatte (alle grader $\ge 6$), kombiner med håndtrykk og kantskranken $|E|\le 3|V|-6$, utled en umulighet ($0\le -6$). Prioritet: **perfekt** (differensierer topp).
- **Innholdskontrakt:** **Gradskranke-beviset**: enhver endelig sammenhengende planar (enkel) graf har et hjørne med grad $\le 5$ — ført ved motsigelse (anta alle $\deg v\ge 6$, så $2|E|=\sum\deg v\ge 6|V|$, altså $|E|\ge 3|V|$, mot $|E|\le 3|V|-6$); generell mal for **strukturbevis ved motsigelse** i grafer (anta ekstremal-brudd, tell, motsig en skranke); beslektede: gjennomsnittsgrad-argumenter, at en graf uten sykler (skog) har $|E|\le|V|-1$; paritetsargumenter fra 6.1 gjenbrukt. **⚠️** Fasit for enkelte varianter er tynn — merk «⚠️ metode = faglig standard» der beviset ikke er direkte belagt. Aktiv føring; motsigelsen komplett.
- **Oppgavesjangre:** H. Mønstereksempel: «Vis ved motsigelse at enhver endelig sammenhengende planar graf har minst ett hjørne av grad høyst 5.»
- **Typiske feil:** Ikke sette opp motsigelsen (anta det motsatte) eksplisitt; feil retning på ulikheten ved forsterkning; glemme forutsetningen «sammenhengende/enkel/planar»; blande $|E|\ge 3|V|$ og $|E|\le 3|V|-6$; regne på et eksempel i stedet for generelt bevis.
- **Quiz: 14 · Flashcards: 18**

#### Kapittel 6.4: Euler- og Hamilton-veier, trær og spenntrær

- **id:** `ma0301-6-4` · **number:** 6.4 · **estimatedMinutes:** 55 · **prerequisites:** `ma0301-6-1`
- **kapitteltype:** teori
- **description:** Euler-vei/-krets (paritetskriteriet på grader), Hamilton-sykel (paritetsargument på todelt graf), og trær/spenntrær med |E|=|V|−1 — grafstrukturens klassifikasjonsteoremer.
- **Forkunnskaper (kryssbok):** Kap. 6.1 (grad, sammenhengende, sykel).
- **Eksamensbelegg:** Sjanger H, **del av de ~100 %**. Ofte flervalgsåpning (spenntre-kant­tall / Euler-kriteriet). Fasitens grep: **Euler-krets** ⇔ alle grader like; **Euler-vei** ⇔ nøyaktig to odde grader; **Hamilton** — paritetsargument på todelt graf; **spenntre** $|E|=|V|-1$. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Euler-vei/-krets** (bruker hver KANT nøyaktig én gang): krets finnes ⇔ sammenhengende og alle grader partall; vei finnes ⇔ nøyaktig to hjørner med odde grad; **Hamilton-sykel/-vei** (besøker hvert HJØRNE nøyaktig én gang) — ingen enkel karakterisering, men **paritetsargument på todelt graf** (en Hamilton-sykel i $K_{m,n}$ krever $m=n$); **tre** (sammenhengende, asyklisk) og ekvivalente karakteriseringer; **$|E|=|V|-1$ for et tre** (bevises ved induksjon, bro til Del 2); **spenntre** av en sammenhengende graf; **isomorfi** av grafer (grad-følge og struktur som invariant, ikke bevis-for-isomorfi men gjenkjenning). Aktiv føring; kriteriene brukt.
- **Oppgavesjangre:** H (+ A-flervalg). Mønstereksempel: «Har grafen en Euler-krets, bare en Euler-vei, eller ingen? Begrunn med gradene. Kan $K_{3,4}$ ha en Hamilton-sykel?»
- **Typiske feil:** Forveksle Euler (kanter) og Hamilton (hjørner); feil paritetskriterium for Euler (blande vei og krets); glemme sammenhengende-kravet; feil kanttall for tre ($|E|=|V|-1$); tro Hamilton har et enkelt gradkriterium som Euler.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 6.5: Grafalgoritmer utført for hånd *(kjenne til — beredskap)*

- **id:** `ma0301-6-5` · **number:** 6.5 · **estimatedMinutes:** 50 · **prerequisites:** `ma0301-6-4`
- **kapitteltype:** teori
- **description:** Dijkstra, Prim/Kruskal og BFS-tre kjørt for hånd med mellomsteg — historisk pensum (2013–2016) som forsvant etter 2016, tatt med som beredskap ved lærerbytte, med tydelig lavere prioritet.
- **Forkunnskaper (kryssbok):** Kap. 6.4 (spenntre, veier).
- **Eksamensbelegg:** Sjanger I, **46 % historisk, men 0 % etter 2016**. **Ærlig eksamensvinkel:** disse ble håndkjørt i alle sett 2013–2016 men forsvant fullstendig fra 2017; de er i emnebeskrivelsen og kan komme igjen ved lærerbytte. Fasitens grep: oppgi mellomstegene (etiketter/kø/kantrekkefølge) og at svaret ofte **ikke er unikt**. Prioritet: **kjenne** (lavest — beredskap).
- **Innholdskontrakt:** **Dijkstra** (korteste vei): hjørne-etiketter (avstand, forgjenger), oppdatering, korteste vei med lengde; **Prim** og **Kruskal** (minimalt spenntre): kantene i rekkefølgen de legges til, treets totalvekt, og at MST ofte **ikke er unikt** (nevn det); **BFS-tre**: kø og trekanter gitt en hjørnerekkefølge. **Ærlighetsnote i kapitlet**: dette er beredskapsstoff (0 % etter 2016) — grafbolken tester nå struktur/bevis (6.1–6.4). Aktiv føring der oppgaven ber om det; nevn ikke-entydighet.
- **Oppgavesjangre:** I. Mønstereksempel: «Kjør Prims algoritme på den vektede grafen fra hjørne $a$; oppgi kantene i rekkefølge og totalvekten. Er treet entydig?»
- **Typiske feil:** **Anta at MST/BFS-tre er unikt** (ofte ikke — nevn din rekkefølge); glemme mellomstegene (bare oppgi svaret); feil forgjenger i Dijkstra; blande Prim (hjørnevekst) og Kruskal (kantsortering); ikke sjekke sykel i Kruskal.
- **Quiz: 12 · Flashcards: 14**

#### Kapittel 6.6: Drill: grafstruktur og -bevis

- **id:** `ma0301-6-6` · **number:** 6.6 · **estimatedMinutes:** 85 · **prerequisites:** `ma0301-6-4`
- **kapitteltype:** drill
- **description:** Hele den strukturelle grafbolken drillet: håndtrykk og umulige gradfølger, Eulers formel, planaritet via K₅/K₃,₃, gradskranke ved motsigelse, og Euler/Hamilton/tre-kriteriene — den prioriterte grafferdigheten.
- **Eksamensbelegg:** Dekker sjanger H (~100 %) + A-flervalgsåpningen. Variantkatalogen: håndtrykk/umulig gradfølge, Euler-formel-utregning, planaritetsulikhet + $K_5/K_{3,3}$-argument, gradskranke ved motsigelse, Euler-/Hamilton-kriterier, spenntre-kanttall. **Håndkjørte algoritmer (6.5) er bevisst UTE av drillen** (0 % etter 2016). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift**: (1) hvilket grafteorem spørres? (grad/håndtrykk / Euler-formel / planaritet / gradskranke / vei-krets); (2) for gradfølge — sjekk paritet via håndtrykk; (3) for planaritet — regn med $|V|-|E|+|R|=2$ eller test mot $|E|\le 3|V|-6$, og for ikke-planaritet finn $K_5/K_{3,3}$-delgraf; (4) for strukturbevis — sett opp motsigelse; (5) for veier — anvend paritets-/kanttall-kriteriet. **Gjennomregnet case** (en grafoppgave med flervalgsåpning + planaritet/Euler + gradskranke ved motsigelse) med sensor-margnotater om at ikke-planaritet KREVER en homeomorf delgraf, ikke en mislykket tegning. **10–15 oppgaver**: minst én umulig gradfølge, én Euler-formel, én $K_5/K_{3,3}$-ikke-planaritet, én gradskranke-motsigelse, én Euler/Hamilton, én flervalgsåpning.
- **Oppgavesjangre:** H + A. Mønstereksempel: «(a) Flervalg: hvilken er Eulers formel? (b) Vis at en gitt graf ikke er planar ved å finne en delgraf homeomorf med $K_{3,3}$.»
- **Typiske feil:** Hele fellekatalogen fra 6.1–6.4 under tidspress; ikke-planaritet «ved tegning»; fortegnsfeil i Eulers formel; odde gradsum oversett; Euler/Hamilton-forveksling; motsigelse ikke satt opp.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 6:** 4 prøver (spesifisert i §4).

---

### Del 7 — Endelige automater og formelle språk *(prioritet: PERFEKT — ~92 %)*

#### Kapittel 7.1: Endelige tilstandsmaskiner og output

- **id:** `ma0301-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma0301-1-4`
- **kapitteltype:** teori
- **description:** Den endelige tilstandsmaskinen (Mealy, input/output på hver kant): les tilstandsdiagram fra en overgangstabell og omvendt, og produser outputstrengen for en gitt input.
- **Forkunnskaper (kryssbok):** Kap. 1.4 (mengder, tupler). Automatteori bygges fra grunnen (ingen VGS-forgjenger).
- **Eksamensbelegg:** Sjanger K-grunnlag, **~92 %**. Fasitens grep: **tegn tilstandsdiagrammet** fra overgangstabellen (Mealy-maskin med input/output på hver kant) og **oppgi outputstrengen** for en gitt input ved å følge overgangene. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Endelig tilstandsmaskin**: tilstander, inngangsalfabet, utgangsalfabet, overgangsfunksjon, starttilstand; **Mealy-maskin** (output på kanten, avhengig av tilstand + input); **overgangstabell ↔ tilstandsdiagram** (oversett begge veier); **kjør en input** gjennom maskinen og les av **outputstrengen**; deterministisk endelig automat (DFA) med **aksepttilstander** som gjenkjenner (accepterer/forkaster) en streng; sporing av en streng gjennom diagrammet. Aktiv føring; sporingen vist tilstand for tilstand.
- **Oppgavesjangre:** K. Mønstereksempel: «Gitt overgangstabellen for en Mealy-maskin, tegn tilstandsdiagrammet og oppgi outputstrengen for input $10110$.»
- **Typiske feil:** Feil oversettelse tabell ↔ diagram; lese output fra feil kant (Mealy: output hører til overgangen); glemme starttilstanden; miste en overgang ved sporing; forveksle aksepttilstand (DFA) og output (Mealy).
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 7.2: Konstruksjon av automater og bestemmelse av L(A)

- **id:** `ma0301-7-2` · **number:** 7.2 · **estimatedMinutes:** 60 · **prerequisites:** `ma0301-7-1`
- **kapitteltype:** teori
- **description:** De to omvendte kjerneoppgavene: konstruer en automat som gjenkjenner et gitt språk («antall b-er delelig med 3», «inneholder 10101»), og bestem språket L(A) en gitt automat aksepterer. Flere gyldige konstruksjoner godtas.
- **Forkunnskaper (kryssbok):** Kap. 7.1 (DFA, aksepttilstander).
- **Eksamensbelegg:** Sjanger K, **kjerne i de ~92 %; midtsjikt-karakterskiller**. Fasitens grep: **konstruer** en DFA for et gitt språk (tilstandene «husker» det relevante — f.eks. rest ved deling, eller hvor langt i et mønster man er kommet); **bestem $L(A)$** ved å lese av veiene til aksepttilstand. **Flere gyldige svar godtas** (regel 5). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Konstruksjon av DFA for et gitt språk**: designprinsippet «hver tilstand koder den nødvendige informasjonen» — teller-tilstander («antall $b$ mod 3»), mønster-tilstander («hvor mye av $10101$ er sett»), paritets-tilstander («odde antall 1-ere»); **bestemme språket $L(A)$**: følg alle veier fra start til aksepttilstand, uttrykk språket i mengdebygger- eller mønsterform (f.eks. $\{b^m a b^n\mid m,n\ge 1\}$, «alle strenger som slutter på $01$»); at konstruksjonen **ikke er unik** (nevn det). Aktiv føring; designbegrunnelsen vist (hva hver tilstand betyr).
- **Oppgavesjangre:** K. Mønstereksempel: «Konstruer en DFA over $\{0,1\}$ som aksepterer nøyaktig de strengene der antall 1-ere er delelig med 3» og «bestem språket $L(A)$ til den gitte automaten».
- **Typiske feil:** Automat som aksepterer for mye/lite (mangler en tilstand eller overgang); glemme å definere overgang for hvert symbol i hver tilstand (ikke-total DFA); feil aksepttilstander; ved $L(A)$ overse en vei; påstå at konstruksjonen er den eneste mulige.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 7.3: Regulære uttrykk og formelle språk

- **id:** `ma0301-7-3` · **number:** 7.3 · **estimatedMinutes:** 50 · **prerequisites:** `ma0301-7-2`
- **kapitteltype:** teori
- **description:** Formelle språk over et alfabet, operasjonene konkatenasjon/union/Kleene-stjerne, og regulære uttrykk ↔ språk: skriv et uttrykk for et gitt språk, eller gi ord i språket til et uttrykk.
- **Forkunnskaper (kryssbok):** Kap. 7.2 (språket $L(A)$), 1.4 (mengdeoperasjoner).
- **Eksamensbelegg:** Sjanger K, **del av de ~92 %**. Fasitens grep: skriv et **regulært uttrykk** for et gitt språk, eller gi ord som tilhører språket til et uttrykk; oversett mellom automat og regulært uttrykk. **Flere gyldige uttrykk godtas** (regel 5). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Alfabet** $\Sigma$, streng, tom streng $\varepsilon$, **språk** $L\subseteq\Sigma^*$; **operasjonene**: konkatenasjon $L_1L_2$, union $L_1\cup L_2$, **Kleene-stjerne** $L^*$ (null eller flere gjentakelser); **regulære uttrykk** og språket de betegner; **oversettelse regulært uttrykk ↔ språk** (skriv uttrykk for «alle strenger som slutter på $01$» = $(0\cup1)^*01$; gi ord i språket til et uttrykk); regulære uttrykk ↔ endelig automat (kjennskap til korrespondansen); at et språk kan beskrives av **flere ekvivalente uttrykk**. Aktiv føring; uttrykket begrunnet mot språket.
- **Oppgavesjangre:** K. Mønstereksempel: «Skriv et regulært uttrykk for språket av alle strenger over $\{0,1\}$ som inneholder minst to 1-ere» og «beskriv med ord språket til uttrykket $a^*b(a\cup b)^*$».
- **Typiske feil:** Feil Kleene-stjerne (glemme at $L^*$ inkluderer $\varepsilon$); regulært uttrykk som fanger for mye/lite; blande konkatenasjon og union; tro et språk har ett kanonisk uttrykk; feil prioritet (stjerne før konkatenasjon før union).
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 7.4: Drill: automatkonstruksjon og språkbestemmelse

- **id:** `ma0301-7-4` · **number:** 7.4 · **estimatedMinutes:** 80 · **prerequisites:** `ma0301-7-3`
- **kapitteltype:** drill
- **description:** Hele automatrepertoaret drillet i alle fire varianter: tegn maskin fra tabell + output, konstruer DFA for et gitt språk, bestem L(A), og regulært uttrykk ↔ språk — med påminnelsen om at åpne konstruksjoner har flere godkjente svar.
- **Eksamensbelegg:** Dekker sjanger K (~92 %) i alle fire varianter + A-flervalgsåpningen (definisjonstest på automatbegrepene). Variantkatalogen: Mealy-diagram + output, DFA-konstruksjon (teller/mønster/paritet), bestem $L(A)$, regulært uttrykk ↔ språk. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift**: (1) hvilken variant? (diagram+output / konstruer / bestem $L(A)$ / regulært uttrykk); (2) for konstruksjon — bestem hva hver tilstand må «huske», tegn, verifiser mot noen teststrenger; (3) for $L(A)$ — spor alle veier til aksept, uttrykk i mengde-/mønsterform; (4) for regulært uttrykk — bygg fra delspråk med union/konkatenasjon/stjerne; (5) **nevn at åpne konstruksjoner ikke er unike**. **Gjennomregnet case** (en automatoppgave: konstruer + bestem $L(A)$ + regulært uttrykk) med sensor-margnotater om at flere løsninger godtas, men at maskinen må verifiseres mot teststrenger. **10–15 oppgaver**: minst én Mealy+output, én DFA-konstruksjon, én $L(A)$-bestemmelse, én regulært uttrykk, én flervalgsåpning.
- **Oppgavesjangre:** K + A. Mønstereksempel: «(a) Konstruer en DFA som aksepterer strenger som inneholder $101$ som delstreng. (b) Skriv et regulært uttrykk for samme språk.»
- **Typiske feil:** Hele fellekatalogen fra 7.1–7.3 under tidspress; ikke-total DFA (manglende overganger); automat som aksepterer for mye/lite; ikke verifisere mot teststrenger; påstå entydighet på åpen konstruksjon; Kleene-stjerne-feil.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 7:** 4 prøver (spesifisert i §4).

---

### Del 8 — Eksamenstrening

#### Kapittel 8.1: Bevisføringsstandarden: slik skriver du en fullt begrunnet MA0301-besvarelse

- **id:** `ma0301-8-1` · **number:** 8.1 · **estimatedMinutes:** 50 · **prerequisites:** Del 1–7
- **kapitteltype:** teori (metodekapittel)
- **description:** Sensorreglene operasjonalisert: alt begrunnes med mellomregning, induksjonens tredelte struktur, navngi lovene ved forenkling, ett moteksempel ved «bevis eller avkreft», arbeid fra definisjonen — samlet på ett sted, med definisjons- og lovnavn-banken du må kunne utenat siden det ikke er noe formelark.
- **Eksamensbelegg:** Metaregel-kapittel bygget på de stående oppgaveinstruksene og sensorkravene (arkivet 2013–2020): (i) «alle svar begrunnes; vis rikelig mellomregning» — ordrett i alle sett; (ii) **bevisstruktur teller** (induksjon: basissteg + hypotese + steg — manglende basissteg = trekk); (iii) **navngi lovene** (logikk/mengde/boolsk forenkling); (iv) **ett moteksempel** ved «bevis eller avkreft», men ett eksempel beviser aldri en allpåstand; (v) **flere gyldige svar** på åpne konstruksjoner; (vi) **kalkulatorkode D uten formelark** → alle definisjoner, teoremer og bevismaler må sitte utenat. Prioritet: **perfekt** (regelen bærer karakteren).
- **Innholdskontrakt:** **«Begrunnelsestrappen» per sjanger A–K**: hva som er tilstrekkelig begrunnelse (én tabell — f.eks. induksjon: alle tre steg; relasjon: hver egenskap fra def.; graf: navngitt teorem + tall; forenkling: lovnavn per steg); **definisjons- og teoremnavn-banken** (alt som må kunnes utenat: relasjonsegenskapene, ekvivalens vs. partiell ordning, injektiv/surjektiv, håndtrykkslemmaet, Eulers formel, planaritetsulikheten, binomialteoremet, «stjerner og streker»-formelen, De Morgan i tre kontekster, induksjonsmalen, sterk induksjon); **sjekklisten før innlevering** (basissteg skrevet? hypotese brukt i steget? riktig $n_0$? hver relasjonsegenskap vist? lovnavn ved forenkling? moteksempel konkret? ikke-planaritet via $K_5/K_{3,3}$, ikke tegning?); **to kontrastpar «samme matematikk, ulik føring»** (en induksjon uten basissteg vs. med — begge «riktig algebra», ulik uttelling; en «avkreftelse» med vag påstand vs. konkret moteksempel); strategien for flervalgsåpningen (billige, garanterte poeng — les definisjonen presist). ⚠️ Der metoden ikke er skrevet i fasit: «⚠️ metode = faglig standard».
- **Oppgavesjangre:** Meta. Mønstereksempel: «Besvarelsen under har riktig algebra i induksjonssteget, men ville tapt uttelling. Pek på de to manglene (intet basissteg, hypotesen ikke skrevet eksplisitt) og skriv om til full uttelling.»
- **Typiske feil:** Hele feilkatalogens føringsdel: manglende basissteg, forenkling uten lovnavn, avkreftelse uten konkret moteksempel, ikke-planaritet «ved tegning», bare tall uten mellomregning, bare to av tre relasjonsegenskaper sjekket, ett eksempel brukt som «bevis» for en allpåstand.
- **Quiz: 14 · Flashcards: 30** (definisjons- og teoremnavn-bank + bevismaler + føringsregler — flashcard-gull for et bevisfag uten formelark)

#### Kapittel 8.2: Flervalgsåpningen: definisjons- og teoremdrill

- **id:** `ma0301-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** Del 1–7
- **kapitteltype:** drill
- **description:** Flervalgsåpningen fra 2018–2020 drillet: velg raskt riktig blant tre nesten identiske utsagn om ekvivalens vs. partiell ordning, injektiv vs. surjektiv, Eulers formel, håndtrykkslemmaet — med begge flervalgsregler («nøyaktig ett» og «minst ett»).
- **Eksamensbelegg:** **Ærlig eksamensvinkel:** MA0301 er et frisvarsfag — flervalgsåpningen er bare den korte definisjons-/teoremtesten som åpner hver oppgave (2018–2020), og gir **billige, garanterte poeng** for den som kan definisjonene presist. Distraktorene er nettopp de vanligste forvekslingene (analysens §5). Begge regler trenes: **«nøyaktig ett riktig»** (2019–2020) og **«minst ett, muligens flere»** (2018 — kryss ALLE riktige). Prioritet: **perfekt** (presisjonstest; garanterte poeng).
- **Innholdskontrakt:** **20–30 flervalgsoppgaver** (4 alternativer, options[0] = riktig), gruppert etter tema, à la 2018–2020, med **kort begrunnelse i løsningen** (hvorfor de andre er feil — der læringen sitter); de klassiske forvekslingene som distraktorer: ekvivalens (sym.) vs. partiell ordning (anti-sym.); injektiv ($f(a_1)=f(a_2)\Rightarrow a_1=a_2$) vs. surjektiv ($f(A)=B$) vs. felledistraktoren $a_1=a_2\Rightarrow f(a_1)=f(a_2)$; Eulers formel $|V|-|E|+|R|=2$; planaritetsulikheten $|E|\le 3|V|-6$; håndtrykkslemmaet $\sum\deg v=2|E|$; spenntre $|E|=|V|-1$; korrekt kvantornegering; korrekt De Morgan. En egen **note om de to flervalgsreglene** (og at man ved «minst ett» må vurdere hvert alternativ separat). Fungerer også som lynrepetisjon før eksamen.
- **Oppgavesjangre:** A (flervalg over A–K). Mønstereksempel: «Hvilket utsagn definerer en partiell ordning korrekt? (fire alternativer, ett med symmetrisk i stedet for anti-symmetrisk)» og «hvilke av utsagnene om $K_{3,3}$ er korrekte? (minst ett riktig)».
- **Typiske feil:** Blande de forvekslede definisjonene (hele poenget med distraktorene); ved «minst ett» krysse bare det første riktige (må vurdere alle); velge felledistraktoren $a_1=a_2\Rightarrow f(a_1)=f(a_2)$; fortegnsfeil i Eulers formel; gjette i stedet for å kunne definisjonen presist.
- **Quiz: 16 · Flashcards: 10**

#### Kapittel 8.3: Øvingseksamen 1: de fire pilarene (bred kjerne)

- **id:** `ma0301-8-3` · **number:** 8.3 · **estimatedMinutes:** 240 · **prerequisites:** `ma0301-8-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers sett etter 2018–2020-malen: 7–8 tematiske oppgaver, hver med flervalgsåpning, som treffer de fire pilarene — induksjon (tyngst), relasjoner, grafteori, automater — pluss funksjoner, med fullt begrunnet føring.
- **Eksamensbelegg/miks:** Speiler den ferske malen (**7–8 tematiske oppgaver à 100 p, 4 timer, kalkulatorkode D, hver oppgave med flervalgsåpning + frie bevis, «alle svar begrunnes»**), kalibrert på prognosen i analysens §7: **O1** (flervalg + bevis) **tung induksjonsbolk** (sumformel + delelighet, 15–20 p) → **O2** **relasjoner** (flervalg ekvivalens/partiell ordning + ekvivalensbevis + partisjon eller Hasse) → **O3** **grafteori** (flervalg Eulers formel + planaritet via $K_5/K_{3,3}$ + gradsum/håndtrykk) → **O4** **automater** (tegn Mealy + output + konstruer DFA for et språk) → **O5** **funksjoner** (flervalg injektiv/surjektiv + bevis eller moteksempel) → **O6** **utsagnslogikk** (forenkling med navngitte lover + kvantornegering) → **O7** kombinatorikk (permutasjon m/gjentakelse eller «stjerner og streker»). Induksjonsbolken vektes tyngst. Alle oppgaver nyskrevne. Løsningsforslag i `collapsible` per deloppgave som A-besvarelse etter 8.1-standarden, med `tip`-notat om poengfordeling, tidsbudsjett og hvor bevisstruktur-poengene sitter.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 8.4: Øvingseksamen 2: restsjangre og den tunge rekursive følgen

- **id:** `ma0301-8-4` · **number:** 8.4 · **estimatedMinutes:** 240 · **prerequisites:** `ma0301-8-3`
- **kapitteltype:** øvingseksamen
- **description:** Sett nummer to som treffer sjangrene sett 1 ikke gjorde — mengdebevis, partiell ordning/Hasse, boolsk algebra, binomialidentiteter, regulære uttrykk — og har en Fibonacci/Lucas-følge med sterk induksjon som topp-differensierende deloppgave.
- **Eksamensbelegg/miks:** Samme mal (7–8 begrunnede oppgaver med flervalgsåpning, 4 t, kode D), med **restsjangrene** (sammen dekker 8.3 + 8.4 alle A–K): **O1** **tung induksjon med rekursiv følge** (ulikhet + Fibonacci/Lucas-identitet med **sterk induksjon**, 15–20 p, topp-differensierende) → **O2** **partiell ordning** (flervalg + Hasse-diagram ↔ relasjonsmengde + minimale/maksimale/minste/største) → **O3** **mengdelære** (identitet via element-argument OG lover, navngitt) → **O4** **automater/språk** (bestem $L(A)$ + regulært uttrykk) → **O5** **kombinatorikk** (binomialkoeffisient + Vandermonde-identitet ved koeffisientsammenligning) → **O6** **boolsk algebra** (forenkling + en identitet kun fra aksiomene) → **O7** **funksjoner** (komposisjonssetning, kontrapositivt bevis). Alle nyskrevne; løsningsforslag som A-besvarelse med vektings-/tidstips, og `tip`-notat om at den rekursive følgen (sterk induksjon) er topp-karakterskilleren.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 8.5: Øvingseksamen 3: ren frisvarsmal (2013–2016-format, uten flervalgsåpning)

- **id:** `ma0301-8-5` · **number:** 8.5 · **estimatedMinutes:** 240 · **prerequisites:** `ma0301-8-4`
- **kapitteltype:** øvingseksamen
- **description:** Den eldre, rene frisvarsmalen (2013–2016) uten flervalgsåpning: 8–10 likt vektede punkter, alt begrunnet — inkludert ett håndkjørt grafalgoritme-punkt (beredskap) — som beredskap for et format som kan returnere ved lærerbytte.
- **Eksamensbelegg/miks:** **Ærlig eksamensvinkel:** dette er den eldre malen (ren frisvar, 2013–2016, ofte «ti likt vektede punkter», ingen flervalgsåpning) — beredskap for at formatet kan svinge tilbake ved lærerbytte (verifiser mot neste sett). Speiler den: **8–10 likt vektede punkter** bredt over A–K uten flervalgsåpning: induksjonsbevis (sumformel), delelighetsinduksjon, ekvivalensrelasjon + partisjon, injektiv/surjektiv-bevis, logikkforenkling, mengdeidentitet, håndtrykk/Euler, planaritet, automatkonstruksjon, **ett håndkjørt grafalgoritme-punkt** (Prim/Kruskal/Dijkstra — beredskapsstoffet fra 6.5). Alle nyskrevne; løsningsforslag som A-besvarelse med `tip`-notat om at dette er beredskapsformatet, at hvert punkt teller likt, og at det håndkjørte algoritmepunktet er 0 % etter 2016 men med for fullstendighet.
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 8:** ingen egne temaprøver — øvingseksamenene (8.3–8.5) er delens prøver.

---

### Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 10 | 12 |
| 1 | 1.1–1.6 | 18+18+16+16+16+14 = **98** | 22+22+20+20+20+18 = **122** |
| 2 | 2.1–2.7 | 16+18+16+16+16+16+16 = **114** | 24+22+16+16+18+20+8 = **124** |
| 3 | 3.1–3.4 | 18+18+18+16 = **70** | 24+22+22+8 = **76** |
| 4 | 4.1–4.2 | 18+16 = **34** | 22+20 = **42** |
| 5 | 5.1–5.3 | 16+16+14 = **46** | 20+18+16 = **54** |
| 6 | 6.1–6.6 | 18+18+14+16+12+16 = **94** | 24+22+18+22+14+8 = **108** |
| 7 | 7.1–7.4 | 16+16+16+16 = **64** | 22+18+18+8 = **66** |
| 8 | 8.1–8.5 | 14+16+5+5+5 = **45** | 30+10+0+0+0 = **40** |
| **Sum** | **38 kap.** | **575 ≥ 500 ✓** | **644 (mål 550–650) ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
**Flashcard-tettheten er bevisst høy (644, ikke ~510):** MA0301 er et
definisjons-, teorem- og bevisteknikkrikt fag **uten utdelt formelark** (kode D) —
alle definisjoner (de fire relasjonsegenskapene, injektiv/surjektiv, Eulers formel,
håndtrykkslemmaet, «stjerner og streker», De Morgan i tre kontekster), teoremnavn og
**bevismaler** (induksjonens tre steg, sterk induksjon, motsigelsesmalen) er selve
puggematerialet. De teori- og bevistunge delene (Del 1 lovapparat, Del 2 induksjon,
Del 3 relasjoner, Del 6 graf + kap. 8.1 føringsbank) bærer tettheten; drillkapitlene
holdes lave (8) fordi deres verdi er oppgaver, ikke kort; øvingseksamenene 0.
Quiz-fordelingen speiler eksamensvektene: **Del 2 (induksjon — tyngdepunktet, 114
quiz) og de tre andre pilarene Del 3/6/7 (70+94+64 = 228) bærer 342 av 575 quiz**;
nivå 2-delene (1/4/5) samlet 178; Del 8 (eksamenstrening) 45.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–7, 28 totalt)

Alle prøver består av nyskrevne oppgaver i arkivets sjangre, med løsningsforslag
etter bevisføringsstandarden (8.1): full begrunnelse, navngitte lover/teoremer,
komplett bevisstruktur, ett moteksempel ved avkreftelse, poengfordeling. Legges som
prøvekapitler (`ma0301-<del>-prove`, chapterNumber `<del>.P`) etter plattformens
mønster.

**Del 1 — Utsagnslogikk, mengdelære og boolsk algebra**
1. Prøve 1.A (35 min): Utsagnslogikk + sannhetstabell — tautologi/ekvivalens (kap. 1.1, sjanger E).
2. Prøve 1.B (35 min): Logikkforenkling med navngitte lover + slutningsregler + kvantornegering (kap. 1.2–1.3, sjanger E).
3. Prøve 1.C (40 min): Mengdeidentitet — element-argument OG lover, navngitt (kap. 1.4–1.5, sjanger F).
4. Prøve 1.D (35 min): Boolsk algebra — forenkling + en identitet kun fra aksiomene (kap. 1.6, sjanger J).

**Del 2 — Bevisteknikker og matematisk induksjon**
1. Prøve 2.A (35 min): Bevisteknikker + sumformel-induksjon med komplett struktur (kap. 2.1–2.3, sjanger B).
2. Prøve 2.B (40 min): Delelighetsinduksjon + ulikhetsinduksjon med riktig basissteg (kap. 2.4–2.5, sjanger B).
3. Prøve 2.C (45 min): Rekursiv følge med sterk induksjon (Fibonacci/Lucas) (kap. 2.6, sjanger B).
4. Prøve 2.D (45 min): Induksjonssimulering — én av hver undertype + bevisstruktur-kontroll (kap. 2.2–2.7, sjanger B).

**Del 3 — Relasjoner: ekvivalens og partiell ordning**
1. Prøve 3.A (35 min): Klassifiser relasjon — fire egenskaper med moteksempler + flervalg (kap. 3.1, sjanger C + A).
2. Prøve 3.B (40 min): Ekvivalensrelasjon-bevis + ekvivalensklasser/partisjon (kongruens mod $n$) (kap. 3.2, sjanger C).
3. Prøve 3.C (40 min): Partiell ordning-bevis + Hasse-diagram + ekstremale elementer (kap. 3.3, sjanger C).
4. Prøve 3.D (40 min): Relasjonssimulering — flervalgsåpning + ekvivalens-eller-avkreft + Hasse ↔ relasjonsmengde (kap. 3.1–3.4, sjanger C + A).

**Del 4 — Funksjoner**
1. Prøve 4.A (35 min): Injektiv/surjektiv/bijektiv — bevis eller moteksempel + flervalg (kap. 4.1, sjanger D + A).
2. Prøve 4.B (35 min): Komposisjon + invers (løs $y=f(x)$) (kap. 4.2, sjanger D).
3. Prøve 4.C (40 min): Komposisjonssetninger — «$g\circ f$ injektiv ⇒ $f$ injektiv», kontrapositivt (kap. 4.2, sjanger D).
4. Prøve 4.D (40 min): Funksjonssimulering — flervalg + injektiv/surjektiv-bevis + komposisjonssetning kjedet (kap. 4.1–4.2, sjanger D + A).

**Del 5 — Kombinatorikk og telling**
1. Prøve 5.A (35 min): Permutasjon m/gjentakelse + «ved siden av»/«ikke ved siden av» (kap. 5.1, sjanger G).
2. Prøve 5.B (40 min): Binomialteoremet — spesifikk koeffisient + identitetsbevis (Vandermonde) (kap. 5.2, sjanger G).
3. Prøve 5.C (35 min): «Stjerner og streker» med nedre OG øvre skranke (kap. 5.3, sjanger G).
4. Prøve 5.D (40 min): Kombinatorikk-simulering — permutasjon + fordeling + binomial kjedet (kap. 5.1–5.3, sjanger G).

**Del 6 — Grafteori og trær**
1. Prøve 6.A (35 min): Grad + håndtrykkslemmaet + umulig gradfølge + flervalg (kap. 6.1, sjanger H + A).
2. Prøve 6.B (40 min): Eulers formel + planaritet via $K_5/K_{3,3}$ (kap. 6.2, sjanger H).
3. Prøve 6.C (40 min): Gradskranke ved motsigelse + Euler-/Hamilton-/tre-kriterier (kap. 6.3–6.4, sjanger H).
4. Prøve 6.D (40 min): Grafsimulering — flervalgsåpning + planaritet + gradskranke ved motsigelse kjedet (kap. 6.1–6.6, sjanger H + A).

**Del 7 — Endelige automater og formelle språk**
1. Prøve 7.A (35 min): Mealy-maskin — tabell ↔ diagram + outputstreng (kap. 7.1, sjanger K).
2. Prøve 7.B (40 min): Konstruer DFA for et gitt språk + bestem $L(A)$ (kap. 7.2, sjanger K).
3. Prøve 7.C (35 min): Regulære uttrykk ↔ språk (kap. 7.3, sjanger K).
4. Prøve 7.D (40 min): Automatsimulering — konstruer + bestem $L(A)$ + regulært uttrykk kjedet (kap. 7.1–7.4, sjanger K).

### Øvingseksamener (3 komplette sett — se kap. 8.3–8.5)

| Sett | Form den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 8.3) | 2018–2020-mal med flervalgsåpning (primær) | De fire pilarene: B(O1, tyngst) + C(O2) + H(O3) + K(O4) + D(O5) + E(O6) + G(O7) |
| Øvingseksamen 2 (kap. 8.4) | Samme mal, restsjangre + tung rekursiv følge | B/sterk induksjon(O1) + C/Hasse(O2) + F(O3) + K(O4) + G(O5) + J(O6) + D(O7) |
| Øvingseksamen 3 (kap. 8.5) | Ren frisvar 2013–2016 (beredskap, uten flervalgsåpning) | 8–10 likt vektede punkter over A–K + ett håndkjørt grafalgoritme-punkt (I) |

Til sammen dekker de tre settene samtlige sjangre A–K minst én gang, og trener
**begge formatregimer** (8.3–8.4 frisvar med flervalgsåpning — primær; 8.5 ren
frisvar — beredskap), med induksjon som gjennomgående tyngdepunkt.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Fire pilarer, ett tyngdepunkt, alt begrunnes** — eksamensformen (4-timers
   frisvar, kode D uten formelark), flervalgsåpningen (2018–2020, begge regler),
   de fire pilarene (induksjon/relasjoner/grafer/automater) og hovedfunnet:
   temaene er stabile, induksjon er både hyppigst og tyngst vektet (fra kap. 0.1).
2. **Prioriteringskartet** — frekvens-tabellen omgjort til tre lesenivåer: perfekt
   (Del 2 induksjon — bruk mest tid; Del 3 relasjoner; Del 6 grafstruktur; Del 7
   automater), kunne (Del 1 logikk/mengde, Del 4 funksjoner, Del 5 kombinatorikk),
   kjenne (Del 1.6 boolsk algebra, Del 6.5 håndkjørte grafalgoritmer, predikatlogikk)
   — med notatet om at induksjonsbolken alene kan avgjøre en bokstavkarakter.
3. **Sjangerguiden** — A–K med løsningsoppskriftene fra drillkapitlene (2.7, 3.4,
   6.6, 7.4) i kortform.
4. **Sensorreglene** — «alt begrunnes; vis rikelig mellomregning», bevisstruktur
   teller (induksjonens tre steg — manglende basissteg = trekk), navngi lovene ved
   forenkling, ett moteksempel ved «bevis eller avkreft», flere gyldige svar på åpne
   konstruksjoner, alt må kunnes utenat (ingen formelark) (fra kap. 8.1) +
   karakterskille-listen (bestått/midt/topp).
5. **Feilkatalogen** — de typiske feilene fra analysen §5 samlet (ekvivalens vs.
   partiell ordning, feil basissteg i ulikhetsinduksjon, glemt basissteg,
   injektiv/surjektiv-forveksling, fortegnsfeil i Eulers formel/planaritetsulikheten,
   umulig gradfølge, kvantornegering, «stjerner og streker» med feil skranke,
   permutasjon uten å dele på $n_i!$, ikke-planaritet «ved tegning», tabell der
   aksiomene kreves, anta at algoritmesvar er unikt), hver med henvisning til
   kapitlet som forebygger den.
6. **Definisjons- og teoremliste i Grimaldi-notasjon** — apparatet fra
   innholdskontraktene (relasjonsegenskapene + ekvivalens/partiell ordning,
   funksjonsegenskapene, induksjonsmalen + sterk induksjon, håndtrykkslemmaet +
   Eulers formel + planaritet + Kuratowski, binomialteoremet + «stjerner og
   streker», De Morgan i tre kontekster, automatbegrepene + regulære uttrykk) — med
   markering *utlede/kunne aktivt* (bevisene) vs. *kun bruke*, og en påminnelse om at
   **alt må kunnes utenat** (kode D, intet formelark).
7. **Studieløp** — semesterplan: Del 0 → Del 1 (lovapparat) → **Del 2 (bruk mest
   tid — tyngdepunktet, drill induksjon til automatikk)** → Del 3 (relasjoner —
   pilar 2) → Del 4–5 (funksjoner + kombinatorikk) → Del 6 (grafstruktur — pilar 3)
   → Del 7 (automater — pilar 4) → temaprøvene → bevisføringsstandarden (8.1) →
   flervalgsåpning-drill (8.2) → de tre øvingseksamenene under tidspress (4 timer,
   kun kalkulator). Format-notat: tren primært frisvar med flervalgsåpning
   (8.3–8.4), men gå gjennom den rene frisvarsmalen (8.5) fordi formatet har svingt
   — verifiser mot neste sett.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `ma0301` med alle 38 kapitler
   (id/number/title/description/estimatedMinutes/topics/prerequisites) etter mønster
   `COURSE_BI_OKONOMI` i `textbook-courses-matte.ts`, + `sectionNames` fra §2-tabellen
   (del-nummer → seksjonstittel). **`number` SKAL være del-basert** («2.3», ALDRI
   lineær «12») — bokforsiden grupperer på `number.split('.')[0]`. Prosareferanser i
   innholdet bruker samme del-baserte form («kap. 2.3»).
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–K og frekvenstallene som resten
   refererer til.
3. **Grunnlagsdeler i avhengighetsrekkefølge**: Del 1 (logikk/mengde/boolsk —
   lovapparat og mengdebevis) → Del 2 (bevisteknikker + induksjon; 2.1 er
   avhengighetsnav for Del 3/4/6).
4. **Tyngdepunktet**: Del 2 er bokas største og viktigste — hold hele delen (7 kap.)
   hos én agent, flagg for konsistenssjekk. Induksjonsmalen (tre steg) og
   bevisstruktur-warningen skal være identisk formulert i 2.2–2.7.
5. **De tre andre pilarene + nivå 2**: Del 3 (relasjoner; krever 2.1 + 3.1-kontrasten
   ekvivalens/partiell ordning) → Del 4 (funksjoner; krever 3.1 + 2.1 kontrapositiv)
   → Del 5 (kombinatorikk; 5.2 krever 2.2 induksjon) → Del 6 (grafteori; 6.3 krever
   2.1 motsigelse, 6.4 krever 2.2 induksjon for tre-kanttall) → Del 7 (automater;
   krever 1.4 mengder).
6. **Del 8** til slutt (føringsstandard + flervalgsdrill + de tre øvingseksamenene
   gjenbruker alt og må dekke A–K + begge formatregimer). Temaprøvene (§4) legges som
   prøvekapitler (`ma0301-<del>-prove`, chapterNumber `<del>.P`), én per temadel 1–7
   (28 stk).
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles.

**Batching (fase 4):** én agent per hel del. **Del 2 (7 kap., tyngdepunktet)** og
Del 1/Del 6 (6 kap. hver) er de største — hold hver del samlet hos én agent, flagg
dem for konsistenssjekk (induksjonsmalen i Del 2, De Morgan-formuleringen på tvers
av 1.2/1.5/1.6, planaritetsargumentet i Del 6). Øvingseksamenene (8.3–8.5) bygges av
én agent som leser HELE skjelettet (de gjenbruker alle sjangre A–K).

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser (`json.load`); generer JSON via
      `json.dump`, ikke håndskriving — LaTeX krever `\\` i JSON-strenger;
      `npm run build` grønn (combine-chapters fanger ugyldig JSON i registry).
- [ ] **LaTeX + Grimaldi-notasjon**: all matematikk i `$...$`/`$$...$$`; ingen
      unicode-brøker; konsistent notasjon: relasjonsegenskaper, $[a]$, Hasse;
      injektiv/surjektiv/bijektiv, $g\circ f$; $\binom nk$, $\tfrac{n!}{n_1!\cdots}$,
      $\binom{n+k-1}{n}$; $G=(V,E)$, $\sum\deg v=2|E|$, $|V|-|E|+|R|=2$,
      $|E|\le 3|V|-6$, $K_n$, $K_{m,n}$; $\land\lor\neg\Rightarrow\Leftrightarrow$,
      $\forall\exists$; $\mathcal P(A)$, $A\times B$, $\overline A$, $\triangle$.
- [ ] **Bevisstruktur i ALLE induksjonsbevis**: eksplisitt (1) basissteg + (2)
      induksjonshypotese + (3) induksjonssteg; sterk induksjon der rekursjonen krever
      flere ledd; riktig $n_0$ (ikke alltid 1). Et induksjonsbevis uten basissteg er
      en byggefeil — det er den mest belagte sensorregelen.
- [ ] **Føringsstandard i ALLE løsningsforslag**: alt begrunnes med mellomregning;
      lovnavn ved hvert forenklingssteg (logikk/mengde/boolsk); hver
      relasjons-/funksjonsegenskap vist fra definisjonen; ett konkret moteksempel ved
      avkreftelse; ikke-planaritet via $K_5/K_{3,3}$-delgraf (aldri «tegning
      mislyktes»); åpne konstruksjoner merket «ikke unik»; verbal konklusjon;
      sluttsvar markert. Ubegrunnet fasitsvar er en byggefeil.
- [ ] **Format- og prioritetsærlighet**: kap. 0.1 og 8.2/8.5 sier eksplisitt at
      MA0301 er et frisvarsfag, at flervalgsåpningen er den korte definisjonstesten
      (begge regler), at ren frisvar (8.5) er beredskap, og at håndkjørte
      grafalgoritmer (6.5) er 0 % etter 2016 (beredskap). Rekurrenser via
      karakteristisk likning / genererende funksjoner er UTELATT (stilregel 7);
      tallteori dekkes forkledd (3.2). Uskrevne metoder merkes «⚠️ metode = faglig
      standard».
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra
      dette skjelettet), Forkunnskaper-blokk med kryssbok-lenker (kun til de
      verifiserte VGS-id-ene i §3: R2 r2-1-6/r2-1-1/r2-6-6, R1 r1-9-1/r1-9-2/r1-9-3/
      r1-1-5, S1 s1-5-1/s1-5-4, 1T 1t-1-7/1t-6-1/1t-6-2), `collapsible` Symbol- og
      formelliste per delkapittel, Typiske feil-`warning`, 2–4 eksempler (siste på
      eksamensnivå), 6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`;
      drillkapitler (2.7/3.4/6.6/7.4) har løsningsoppskrift + sensor-kommentert case +
      10–15 oppgaver; øvingseksamenene fører komplette A-besvarelser.
- [ ] **Quiz-sum ≥ 575 og flashcard-sum ≥ 644** per kvotetabellen i §3
      (kontrollsummér). Flashcards KUN fra toppnivå `definition`-blokker med `title`.
- [ ] **Prøver**: 4 per temadel 1–7 (28 stk) + 3 øvingseksamener (8.3–8.5) som sammen
      dekker A–K og begge formatregimer (frisvar med/uten flervalgsåpning).
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, ord, matriser, grafer og
      kontekster; ingen formuleringer fra reelle sett eller fasiter (skjelettets
      mønstereksempler er selv omskrivninger og skal varieres videre, ikke kopieres
      ordrett inn); Grimaldi og pensum refereres, aldri siteres i lengde.
- [ ] **Navigasjon**: `ma0301` inn i `src/app/trinn/hoyere/institusjoner.ts` under
      **Norges teknisk-naturvitenskapelige universitet (NTNU)** (ny institusjon —
      opprett den om den ikke finnes), navn = «MA0301 Elementær diskret matematikk».
- [ ] **Verifiser rendering**: prod-server + curl mot institusjonsside, bokforside og
      minst 3 kapittel-/narrativ-ruter (teori/drill/prøve) + quiz- og flashcard-rute
      (200 + innholdssjekk), jf. `getChapterMeta`-lærdommen.
