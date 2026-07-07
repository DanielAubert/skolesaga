# Eksamensanalyse: TDT4136 Introduksjon til kunstig intelligens (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på 9 ordinære eksamenssett med offisielle løsningsforslag fra NTNU (høst 2015 – høst 2023), oppgavehefter på engelsk/bokmål/nynorsk, samt NTNUs emnebeskrivelse. Emneansvarlig gjennom det meste av perioden er **Pinar Öztürk** (2016 og deler av perioden også Odd Erik Gundersen), og pensumboka er **Russell & Norvig — *Artificial Intelligence: A Modern Approach* (AIMA)**. Alle algoritmenavn og notasjon i oppgavene følger AIMA-konvensjonen. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller løsningsforslag. Analysen er kvantitativ der kildene tillater det.

---

## 1. Eksamensform og utvikling

### Grunnform (gjeldende)

Skriftlig skoleeksamen, **4 timer** (09:00–13:00), karakterskala **A–F**, teller **100 %**. Tillatt hjelpemiddel er **kode D — bestemt, enkel kalkulator** (ingen trykte eller håndskrevne hjelpemidler). Obligatoriske øvinger må være godkjent for å gå opp. Faget har **ingen delprøve som teller** — hele karakteren avgjøres på slutteksamen. Studenten må altså kunne alt pensum utenat, uten oppslagsverk.

Eksamen er **ikke rent flervalg**. Den er en blanding av tre svartyper:

1. **«Kjør algoritmen for hånd»-oppgaver** (kjernen). Studenten får en graf, et spilltre, en CSP eller en logisk KB og skal produsere ekspansjonsrekkefølger, nodeverdier, beskårne grener, prunede domener eller en resolusjonskjede — steg for steg. Dette er den dominerende og karaktergivende formen.
2. **Korte teori-/kortsvarsspørsmål.** «Forklar hvorfor», «hva er forskjellen på …», «design en admissibel heuristikk». Ofte samlet i én eller to bolker (Task 1 / Short questions) på starten eller slutten.
3. **Sant/usant og flervalg**, særlig i de eldre settene (2015–2018). ⚠️ **Negativ retting** brukes på flere av disse: typisk **+2 for rett, −1 for galt, 0 for blankt**, med gulv på 0 for hele oppgaven (dokumentert H2015, H2016, H2017, H2018). Svar bare når du er sikker.

Løsningsforslagene understreker gjennomgående at **«det finnes flere korrekte svar»**, særlig på logikk-oversettelser, PDDL-formuleringer, PEAS-beskrivelser og etikk/drøftespørsmål. Fasiten viser bare *ett* mulig svar. Fra og med de nyere settene (Sánchez Díaz’ løsningsforslag 2022–2023) markeres til og med hvilke deler som er «for fullstendighetens skyld» og *ikke* forventes av studenten.

### Den viktigste årgangsforskjellen: pensum-driften

TDT4136 har hatt en **markant innholdsdreining** over de ni årene. Dette er den enkeltopplysningen som betyr mest for hva læreboka skal vektlegge:

| Periode | Emneansvarlig | Særpreg | Representativ for i dag? |
|---|---|---|---|
| 2015–2017 | Öztürk / Gundersen | Tungt innslag av **NLP og informasjonsgjenfinning** (presisjon/recall, F1, sentimentanalyse, bag-of-words, språkmodeller), semantiske nettverk/rammer, mye flervalg og T/F | **Delvis** — kjernen (søk/logikk/CSP/planlegging) er lik, men NLP/IR er **utgått** |
| 2018–2021 | Öztürk | NLP forsvinner. Stabil kjerne: søk, A*-heuristikk, CSP, adversarielt søk, logikk, planlegging, spillteori, lokalt søk | **Ja** |
| 2022–2023 | Öztürk (fasit v/ Sánchez Díaz) | Nye tilskudd: **expectiminimax, Monte Carlo-tresøk, delvis observerbare miljø (belief states), etikk/rettferdighet i KI**; mindre T/F med negativ retting | **Ja (ferskeste)** |

**Konsekvens for lærebok:** Bygg mot **2018–2023-formatet**. **NLP/IR (presisjon, recall, F1, sentiment, bag-of-words, stoppord) skal ikke prioriteres** — det var et Gundersen-fenomen i 2015–2017 og har vært helt fraværende siden 2018. Til gjengjeld må de nyere temaene — **expectiminimax, MCTS, belief states og KI-etikk** — være med, selv om de har lav historisk frekvens, fordi de er i klar vekst og treffer den sittende emneansvarliges profil.

### Struktur- og vektingsprofil

- **Antall oppgaver:** typisk **6–9 hovedoppgaver** per sett, ofte **10 poeng per oppgave** (sum 100), eller finere inndeling med poeng per deloppgave. De nyere settene bruker prosent (f.eks. 1 %, 2 %, 3 % per spørsmål).
- **Vekting:** relativt jevnt fordelt over temaene. Hver eksamen dekker nesten hele emnebredden — **søk, A*-heuristikk, CSP, logikk/resolusjon, adversarielt søk og planlegging kommer i praksis hvert år**. Det finnes ingen enkeltoppgave som dominerer.
- **Innpakning:** oppgavene kler faglige kjerner i fortellinger (kaniner, gullesker, ape og bananer, ulv/geit/kål, wumpus, robot i labyrint, AGI-kappløp mellom USA og Kina). Innpakningen er kosmetikk — kjernen er alltid en pensumalgoritme.
- **Språk:** heftet finnes på engelsk + bokmål + nynorsk. Ved tvil om oversatte fagbegreper skal **den engelske teksten regnes som fasit**.

---

## 2. Temafrekvens

Basert på de 9 ordinære settene (H2015–H2023), ett per år. Celleverdi = antall år i årsgruppen der temaet forekommer i minst én oppgave. Årsgrupper: 2015–2017 (3 sett, «Gundersen/NLP-æra»), 2018–2020 (3), 2021–2023 (3). **Gjenganger-scoren måler bredde/sikkerhet, ikke vekt.**

| Tema | 2015–17 (3) | 2018–20 (3) | 2021–23 (3) | **Gjenganger-score** |
|---|---|---|---|---|
| **Uinformert + informert søk** (BFS/DFS/UCS/Greedy/A*, kjør for hånd) | 3 | 3 | 3 | **9/9 = 100 %** |
| **A\*-heuristikk** (admissibilitet, konsistens, dominans) | 3 | 3 | 3 | **9/9 = 100 %** |
| **CSP** (constraint-graf, AC-3, backtracking, MRV/LCV, forward checking) | 3 | 3 | 3 | **9/9 = 100 %** |
| **Logikk** (utsagns- + predikatlogikk, CNF, resolusjonsrefutasjon) | 3 | 3 | 3 | **9/9 = 100 %** |
| **Adversarielt søk** (minimax, alfa-beta; nyere: expectiminimax) | 3 | 3 | 3 | **9/9 = 100 %** |
| **Planlegging** (PDDL/STRIPS, GraphPlan, regresjon/baklengs søk, PoP) | 3 | 3 | 3 | **9/9 = 100 %** |
| **Intelligente agenter** (PEAS, miljøegenskaper, agenttyper) | 3 | 3 | 3 | **9/9 = 100 %** |
| **Lokalt søk** (hill-climbing, simulert annealing, genetiske alg.) | 3 | 2 | 2 | **7/9 = 78 %** |
| **Spillteori** (utbetalingsmatrise, dominans, Nash, Pareto/velferd) | 1 | 3 | 2 | **6/9 = 67 %** |
| **Kunnskapsrepresentasjon** (semantiske nett, rammer; atomær/faktorisert/strukturert) | 2 | 3 | 2 | **7/9 = 78 %** |
| **KI-historie/filosofi** (Turing-test, Dartmouth, GPS, Newell/Simon, Searle) | 2 | 2 | 1 | **5/9 = 56 %** |
| **Etikk/rettferdighet i KI** | 0 | 1 | 2 | **3/9 = 33 %** ↑ *voksende* |
| **Delvis observerbare miljø / belief states** | 0 | 0 | 1 | **1/9 = 11 %** ↑ *nytt (H2023)* |
| **Monte Carlo-tresøk** | 0 | 0 | 1 | **1/9 = 11 %** ↑ *nytt (H2022)* |
| **NLP / informasjonsgjenfinning** (presisjon/recall/F1, sentiment, bag-of-words) | 3 | 0 | 0 | **3/9 = 33 %** ↓ *UTGÅTT etter 2017* |

**Viktigste funn:**

1. **Sju temaer er 100 %-gjengangere.** Søk, A*-heuristikk, CSP, logikk, adversarielt søk, planlegging og intelligente agenter dukker opp *hvert eneste år*. Til forskjell fra et fag med én modelloppgave er **bredden selve eksamensformen** — du kan ikke droppe et av disse sju og satse på at det ikke kommer.

2. **Faget har et fast «skjelett».** En typisk eksamen består av nøyaktig disse byggeklossene: én søkeoppgave (kjør 4–5 algoritmer), én A*-heuristikkoppgave (admissibel/konsistent/dominans), én CSP-oppgave (AC-3 + backtracking), én logikkoppgave (oversett + resolusjon), én adversariell oppgave (minimax + alfa-beta), én planleggingsoppgave (PDDL + baklengs søk), pluss en bolk korte agent-/teorispørsmål. Spillteori kommer *nesten* hvert år.

3. **NLP/IR er den store fellen for en naiv analyse.** Ser man bare på 2015–2017, ser NLP (presisjon/recall/F1, sentiment, språkmodeller) ut som et tungt tema (opptil 20 av 100 poeng). Det er **borte fra og med 2018** og skal ikke inn i en eksamensrettet lærebok for dagens kurs annet enn som en historisk fotnote.

4. **Spillteori er et 100 %-tema i moderne æra, med to unntak.** Fraværende i 2015 og 2016, og overraskende også i 2022, men til stede alle andre år 2017–2023. Fangens dilemma-gjenkjenning, Nash-likevekt og samfunnsøkonomisk optimum går igjen. Regn med den.

5. **Tre ferske tilskudd er i vekst:** KI-etikk/rettferdighet (2020, 2021, 2023), belief states i delvis observerbare miljø (2023) og Monte Carlo-tresøk (2022). Lav historisk frekvens, men de treffer den sittende emneansvarliges profil og bør dekkes.

6. **Adversarielt søk utvider seg.** Ren minimax + alfa-beta hvert år, men H2023 krevde **expectiminimax** (sjansenoder med vektet forventning) og H2015/H2018 hadde chance-node-varianten. Læreboka må dekke både deterministisk minimax og forventningsvarianten.

---

## 3. Oppgavetype-katalog

De ni sjangrene som faktisk går igjen. «Krav» oppsummerer fasitens foretrukne løsningsmetode og presisjonsnivå.

### A. Kjør uinformert + informert søk for hånd
- **Krav:** Gitt en graf/tre med steg-kostnader og heuristikkverdier, oppgi for hver algoritme **(i) rekkefølgen noder ekspanderes/måltestes, (ii) returnert sti, (iii) stikostnad**. Kritiske metodesignaler fasiten håndhever:
  - **Tie-breaking oppgis alltid** (venstre-til-høyre rekkefølge på etterfølgere, eller alfabetisk) og *skal* følges eksakt — feil bruddregel gir feil sekvens selv om metoden er riktig.
  - **«Tree-like search» (tresøk) = ingen sjekk av løkker/besøkte noder** (per AIMA). DFS og Greedy kan da gå i evig løkke og returnere «ingen sti» (∅) — se H2023, der `S, A, A, A, …` er fasitsvaret for både DFS og Greedy. Fasiten godtar også svar med besøkt-sjekk, men vær konsekvent.
  - Skill mellom **måltest ved ekspansjon (pop) vs. ved generering**. H2023-fasiten påpeker eksplisitt at nettopp dette felte mange på BFS.
  - A\*: `f = g + h`, ekspander lavest `f`. UCS: kun `g`. Greedy: kun `h`. BFS/DFS: ignorer kostnad.
  - Varianten **iterativ dybdesøk (IDS)** med dybdegrense forekommer (H2022, ulv/geit/kål) — vis stakken og cutoff per dybde.
- **Frekvens:** 100 %.

### B. A\*-heuristikk — admissibilitet, konsistens, dominans
- **Krav:** Forventet apparat:
  - **Admissibel:** `h(n) ≤` faktisk billigste kostnad til mål (overvurderer aldri). Vis med et konkret motbevis når den *ikke* er det (H2018: `h(A)=4 > 3 =` faktisk kostnad → inadmissibel).
  - **Konsistent/monoton:** `h(n) − h(n') ≤ c(n,n')` for hver kant (ekvivalent `h(n) ≤ c(n,n') + h(n')`). Fasiten setter opp **én ulikhet per kant** og løser ut et **intervall** for en ukjent `h`-verdi (H2023: `4 ≤ h(B) ≤ 6`). ⚠️ **Alle** kantpar må sjekkes, inkludert til målnoden (`h(mål)=0`) — H2017-fasiten avviser svar som bare gjør deler av grafen konsistent.
  - **Dominans:** `h₂` dominerer `h₁` hvis `h₂(n) ≥ h₁(n)` for alle `n` (og begge admissible) → `h₂` ekspanderer aldri flere noder.
  - Nyttige fasit-poeng: gjennomsnittet `½h₁+½h₂` av to admissible heuristikker er fortsatt admissibelt (H2023 — «bare en lineær transformasjon»); konsistens ⇒ admissibilitet, men ikke omvendt; en **inadmissibel** heuristikk kan *likevel* gi optimal sti hvis overvurderingen er mindre enn gapet til nest-beste sti (H2020, H2021, H2019). Konsistens er ønskelig fordi **noder da ekspanderes bare én gang** i A* (H2022).
  - Klassiske admissible heuristikker for 8-puzzle: **antall feilplasserte brikker** og **Manhattan-avstand** — kjenn dem, og at man utleder dem ved å slappe av («relaxere») begrensninger i handlingsskjemaet.
- **Frekvens:** 100 %.

### C. CSP — constraint-graf, AC-3, backtracking
- **Krav:** Den mest stabile oppgavefamilien. Fast oppskrift sensor vil se:
  - Sett opp **variabler, domener og constraints**. Skriv **`Alldiff`** som global begrensning når den trengs; skriv binærbegrensninger (og retningen på ulikheter) eksplisitt. Tegn constraint-grafen (noder = variabler, kanter = binærbegrensninger; piler når relasjonen ikke er symmetrisk).
  - Kjør **AC-3**: fjern verdier uten støtte. ⚠️ **Viktigste feilkilde fasiten flagger:** når et domene krympes, **må berørte buer sjekkes på nytt** — en endring i Y kan tvinge fram fjerning i X selv om X allerede var behandlet. H2015 (multiple choice om AC-3) og H2018/H2023 bruker mye plass på nettopp denne re-sjekken.
  - **Backtracking** (ofte *uten* forward checking): variabelvalg med **MRV** (Minimum Remaining Values; tie-break numerisk / degree-heuristikk som andre-kriterium), verdivalg med **LCV** (Least Constraining Value; tie-break alfanumerisk). Rapporter **rekkefølgen** variabler tildeles og verdien hver får. Noen sett ber i stedet om **backtracking med forward checking** (H2016, H2019, H2020, H2021) eller ren backtracking der man også lister de *prøvde men forkastede* verdiene i parentes (H2018).
  - Kjenn **min-conflicts**-heuristikken for lokalt søk på CSP (H2017).
- **Frekvens:** 100 %.

### D. Logikk — oversettelse, CNF, resolusjonsrefutasjon
- **Krav:** To beslektede undertyper, begge hvert år.
  - **Utsagnslogikk:** oversett naturlig språk → proposisjoner (definer hver med en bokstav), konverter til **CNF**, **negér spørsmålet**, resolver til tom klausul (⊥) → påstanden følger. Ofte gåte-innpakning (kaniner, gullesker, wumpus, bok i huset). Kjenn **Horn-klausuler** (høyst én positiv literal — kan *ikke* dannes hvis en setning har to positive literaler til høyre), forlengs/baklengs kjeding med **modus ponens**, samt **modus tollens** og **disjunktiv syllogisme** når oppgaven *påbyr* en bestemt slutningsregel (H2023 krevde eksplisitt modus tollens). Vanlig felle fasiten straffer: «én er brun og én er hvit» kodes som **eksklusiv eller** `(B₂∧¬B₃)∨(¬B₂∧B₃)`, *ikke* `B₂∨B₃` (H2018 bunny-oppgaven).
  - **Predikatlogikk (FOL):** oversett NL→FOL med korrekt **kvantoromfang**. To feller fasiten uttrykkelig retter: (a) ved `∃` skal man binde med **∧**, ikke `⇒` (H2015: «ingen to studenter har samme ID»); (b) **skolemisering** av en eksistensvariabel under en `∀` skal bli en **Skolem-funksjon** av den universelle variabelen (`Heart(H(x))`), ikke en konstant (`H1` — det ville gitt alle samme hjerte, H2015). FOL-resolusjon krever **unifikasjon/substitusjon vist i hvert steg** (velg mest generelle unifikator; H2018/H2019/H2020/H2021). Full CNF-konvertering av FOL (fjern implikasjon → flytt negasjon inn → standardiser variabler → skolemiser → dropp `∀` → distribuér) forekommer som egen deloppgave.
- **Frekvens:** 100 % (utsagns- og predikatlogikk til sammen; predikatlogikk alene 9/9, ren utsagnslogikk 8/9).

### E. Adversarielt søk — minimax, alfa-beta, expectiminimax
- **Krav:** Regn nodeverdier **nedenfra og opp** (MAX = maks av barn, MIN = min). Ved **alfa-beta**: oppgi hvilke noder/grener som beskjæres og **hvorfor**, i formen `v ≥ β` (ved MIN-node) eller `v ≤ α` (ved MAX-node) — og inkluder **alle** noder i den beskårne grenen (H2015 krever alle løvnoder i grenen listet alfabetisk). Fasiten godtar både strenge (`>`/`<`) og ikke-strenge (`≥`/`≤`) versjoner, og godtar begge svar der pruning av en grensenode er tvetydig (H2018). Antall/hvilke noder som beskjæres avhenger av evalueringsrekkefølge (venstre→høyre); H2020 spør om speilvendt tre (høyre→venstre).
  - **Expectiminimax** (H2023): min i MIN-noder, **vektet forventning** `Σ pᵢ·verdiᵢ` i sjansenoder, maks i roten; velg handlingen med høyest forventet verdi. Vis mellomregningen for hver sjansenode.
  - Teori-varianter: minimax for **3-spillerspill** (bruk *vektorer* av nytteverdier, én per spiller, H2022); hvorfor **MCTS** er mindre følsom for feil i evalueringsfunksjonen enn alfa-beta (H2022); at evalueringsfunksjonen brukes ved cutoff.
  - Noen sett gir en **evalueringsfunksjon** som skal anvendes på løvnodene før minimax (H2019 tic-tac-toe: `e = E1 − E2`).
- **Frekvens:** 100 %.

### F. Planlegging — PDDL/STRIPS, GraphPlan, regresjon
- **Krav:** Skriv handlinger som **PRECOND/EFFECT** (STRIPS bruker add-/delete-lister; PDDL bruker negasjon i EFFECT). Kjenn Init- og Goal-beskrivelser.
  - **GraphPlan:** bygg stat-/handlingsnivåer med **mutex-relasjoner** og NOP-persistensaksjoner; kjenn **level-off-betingelsen** (siste nivå inneholder alle mål uten innbyrdes mutex, og bakoversøk finner mutex-frie handlinger tilbake til start; eller to påfølgende nivåer er like). Vurder om en plan finnes på et gitt nivå og **begrunn med de konkrete mutex-relasjonene** som eventuelt sperrer (H2015). *Ignore-delete-list*-heuristikken er admissibel (H2022) — og antall handlingsnivåer i grafen er en admissibel heuristikk for forlengs søk (H2019).
  - **Regresjon (baklengs søk):** start i målet, vis de **første 3 stegene** i én gren (handling + tilstand før/etter). Fast oppgaveform i H2022 (ape og bananer) og H2023 (julegave). Forlengs = progresjon, baklengs = regresjon — kjenn skillet (H2017).
  - **Partial-Order Planning (PoP):** søk i planrom, minst forpliktelse, trussel-/flaw-analyse og ordningslenker (H2019, H2020, H2021). Lineær planlegging er ufullstendig (Sussmans anomali).
- **Frekvens:** 100 %.

### G. Intelligente agenter — PEAS og miljøegenskaper
- **Krav:** **PEAS-beskrivelse** (Performance, Environment, Actuators, Sensors) med **begrunnelse**, ikke bare navngiving. Klassifiser miljøet langs de faste dimensjonene: **fullt/delvis observerbart, en-/fleragent, deterministisk/stokastisk, episodisk/sekvensielt, statisk/dynamisk, diskret/kontinuerlig**. Vanlige distinksjoner sensor tester:
  - **stokastisk vs. ikke-deterministisk** (stokastisk = sannsynligheter tallfestes; ikke-det. = utfallene kjent men ikke kvantifisert, H2023) — og **strategisk** = stokastisitet skyldes andre agenter (H2021).
  - **atomær vs. faktorisert vs. strukturert** tilstandsrepresentasjon (H2021/H2022): faktorisert lar deg trekke ut trekk/features for heuristikk og usikkerhet.
  - **agenttyper:** simpel refleks vs. modellbasert vs. målbasert vs. nyttebasert. Hvorfor en agent i delvis observerbart miljø trenger **minne/modell og opererer på belief states** (H2023). Tegn ofte arkitekturdiagram for den valgte agenttypen (H2022).
  - Hvorfor **randomisert atferd** kan være rasjonell i konkurrerende fleragentmiljø (uforutsigbarhet, H2015/H2017/H2023).
- **Frekvens:** 100 % (som regel i en kortsvars- eller PEAS-oppgave).

### H. Spillteori
- **Krav:** Sett opp/les **utbetalingsmatrise**. Fast verktøykasse: **dominant strategi** (sterk/svak), **iterert eliminering av strengt dominerte strategier** (vis hvert steg, H2019/H2023), **Nash-likevekt** (marker beste respons for hver spiller; skjæringspunkt = likevekt), **Pareto-optimalitet** og **samfunnsøkonomisk optimum / social welfare** (maksimer *summen* av utbetalinger — ofte et annet utfall enn Nash). Fasiten skiller nøye: *ingen dominant strategi* betyr **ikke** *ingen Nash*, og et velferdsmaksimerende utfall er alltid Pareto-optimalt. Fangens dilemma-gjenkjenning går igjen (H2021 eksplisitt). Noen varianter ber om betingelsene for at en sterkt dominant likevekt i det hele tatt oppstår (H2018, parametrisk matrise med `x, y`).
- **Frekvens:** 67 % (men 100 % i moderne æra bortsett fra 2022).

### I. Lokalt søk og korte teori-/agentspørsmål
- **Krav:** **Hill-climbing** (kan sette seg fast i lokalt maksimum/minimum eller platå — legg til *random restart* for å komme videre, H2023); **simulert annealing** (aksepterer forverrende trekk med sannsynlighet `e^{ΔE/T}`; ved `ΔE=0` flyttes man med sannsynlighet 1, H2018/H2019); **genetiske algoritmer** (mutasjon = utforsking av nabolag, crossover = utnytting av gode løsninger, H2022). Kjenn 8-dronningers evalueringsfunksjon (antall angripende par). Kortsvarene ellers dekker KI-historie (Turing-test, Dartmouth-konferansen, GPS/Newell & Simon, Searles kinesiske rom), kunnskapsrepresentasjon (semantiske nett, arv, rammer med prosedyre-slotter/«demoner»), og **etikk/rettferdighet i KI** (individuell rettferdighet, forklarbarhet, bias — drøftespørsmål med rom for flere gode svar).
- **Frekvens:** lokalt søk 78 %; agent-/teoribolken finnes i praksis hvert sett.

### (Historisk) J. NLP og informasjonsgjenfinning — UTGÅTT
- Kun 2015–2017. Presisjon/recall/F1, sentimentanalyse, bag-of-words, n-gram-språkmodeller, stoppord, informasjonsekstraksjon. **Tas ikke inn i eksamensrettet lærebok for dagens kurs** utover en historisk merknad.

---

## 4. Sensorens krav

### Faste metaregler
1. **Vis utledningen steg for steg.** For søk/minimax/CSP/resolusjon er det *rekkefølgen og verdiene/klausulkjeden* som gir uttelling, ikke prosa. «Skriv bare stien» uten å vise kø/ekspansjon gir null (eksplisitt i H2017: «du får ingen poeng hvis du bare skriver den optimale løsningen uten å vise hvordan den genereres»).
2. **Følg oppgitt tie-breaking bokstavelig.** Feil bruddregel gir feil ekspansjonssekvens selv om metoden er riktig.
3. **Beslektede korrekte svar godtas — bredt.** Særlig for logikk-oversettelser, PDDL/STRIPS, PEAS og etikk finnes det sjelden ett riktig svar. Fasiten viser bare ett eksempel og sier det eksplisitt.
4. **Delvis uttelling er regelen.** Ta med hovedpoenget først i definisjoner og forklaringer.
5. **Robust sensur til kandidatens fordel.** Ved tvetydig oppgavetekst godtas flere konsistente tolkninger (dokumentert gjentatte ganger: H2020/H2021 om miljøklassifisering, H2018 om streng vs. ikke-streng pruning, H2023 om initial-tilstand i belief-oppgaven). Noen ganger nedvektes et spørsmål i ettertid (H2023: alle fikk 1 poeng på GPS-spørsmålet).
6. **Negativ retting på T/F.** +2 rett, −1 galt, 0 blankt, gulv på 0 for oppgaven. Ikke gjett.

### Hva som skiller karakternivåene
- **Bestått (E):** riktige svar på de mekaniske kjørene på grunnivå (ett-stegs søk, enkel minimax uten pruning, oversette én setning til logikk, navngi miljøegenskaper).
- **Midtsjikt (C/D):** korrekt håndkjøring av en hel algoritme (A* med tie-breaking, AC-3 med re-sjekk, alfa-beta med begrunnet pruning), riktig CNF-konvertering, riktig oppsett av utbetalingsmatrise.
- **Toppsjikt (A/B):** løser de sammensatte oppgavene **komplett og med korrekt begrunnelse** — full resolusjonskjede til ⊥ med alle unifikasjoner, korrekt intervall for en ukjent heuristikkverdi *med alle kant-ulikheter*, GraphPlan-analyse med de *konkrete* mutex-relasjonene som sperrer, expectiminimax med all mellomregning, og presise begrunnelser i drøftespørsmålene (hvorfor konsistens ⇒ én ekspansjon, hvorfor randomisering er rasjonell, hvorfor velferdsmaksimum er Pareto-optimalt).

---

## 5. Typiske feil (eksplisitt eller implisitt i fasitene)

1. **Glemme AC-3-resjekk** — ikke sjekke berørte buer på nytt etter at et domene er krympet. Den mest fremhevede CSP-feilen (H2015, H2018, H2023).
2. **`⇒` under `∃`** — binde en eksistenskvantor med implikasjon i stedet for konjunksjon (H2015).
3. **Skolem-konstant i stedet for Skolem-funksjon** — `H1` der det skulle vært `H(x)`, som feilaktig gir alle samme objekt (H2015).
4. **Inklusiv «eller» der eksklusiv menes** — kode «én er brun, én er hvit» som `B₂∨B₃` (H2018).
5. **Feil måltest-tidspunkt i BFS** — teste mål ved generering vs. ved ekspansjon; fremhevet som utbredt feil i H2023.
6. **Sjekke løkker i «tree search»** — legge til besøkt-sjekk der oppgaven ber om rent tresøk (eller motsatt), og dermed ikke oppdage at DFS/Greedy går i evig løkke (H2023).
7. **Ufullstendig konsistenssjekk** — bare sjekke noen kanter, ikke alle par inkludert målnoden (H2017 avviser dette eksplisitt).
8. **Forveksle dominant strategi med Nash-likevekt** — anta at «ingen dominant strategi» betyr «ingen Nash» (H2019, H2023).
9. **Feil retning på progresjon/regresjon** — tro at regresjonsplanlegging går forlengs (H2017).
10. **Ignorere oppgitt slutningsregel-tvang** — løse logikkoppgaven med en annen regel enn den påbudte (H2023 krevde modus tollens).
11. **Bare oppgi sluttstien uten utledning** — ingen poeng uten synlig kø/ekspansjon (H2017).
12. **Ikke inkludere hele den beskårne grenen** i alfa-beta-svaret — bare toppnoden, ikke alle løvnodene under (H2015, H2018).

---

## 6. Notasjons- og algoritmeapparat

All notasjon følger **AIMA (Russell & Norvig)**. Læreboka bør bruke nøyaktig disse navnene og formene, siden oppgavene og fasiten gjør det.

### Søk
- **Uinformert:** BFS (FIFO-frontier, måltest ved generering i AIMA-varianten), DFS (LIFO/stakk), UCS (`g`, min-kostnad først), iterativ dybdesøk (IDS med cutoff per dybde).
- **Informert:** Greedy best-first (`f=h`), **A\*** (`f=g+h`). Tresøk (ingen besøkt-sjekk) vs. grafsøk (besøkt/closed-sett). Tie-breaking alltid oppgitt.
- **Heuristikk-egenskaper:** admissibel (`h ≤ h*`), konsistent/monoton (`h(n) ≤ c(n,n')+h(n')`), dominans (`h₂ ≥ h₁` punktvis). Konsistens ⇒ admissibel; A* grafsøk optimal ⟺ konsistent (eller admissibel + re-ekspansjon).
- **Lokalt søk:** hill-climbing, simulert annealing (`P = e^{ΔE/T}`), genetiske algoritmer (seleksjon/crossover/mutasjon).

### CSP
Variabler / domener / constraints (unære, binære, `Alldiff` global). Constraint-graf. **AC-3** (arc-consistency med re-innsetting av berørte buer). **Backtracking** med **MRV** (+ degree som tie-break), **LCV**, **forward checking**, og **constraint-propagering** til singleton-domener. **Min-conflicts** for lokalt søk på CSP.

### Adversarielt søk
**Minimax** (MAX/MIN nedenfra-opp). **Alfa-beta** (`α` = beste for MAX så langt, `β` = beste for MIN; beskjær når `v ≥ β` i MIN-node, `v ≤ α` i MAX-node). **Expectiminimax** (sjansenoder = `Σ pᵢ·vᵢ`). Evalueringsfunksjon ved cutoff. Vektor-minimax for n spillere. MCTS (simulering fremfor fast evalueringsfunksjon).

### Logikk
- **Utsagnslogikk:** koblinger `¬ ∧ ∨ ⇒ ⇔`; CNF; Horn-klausul (≤1 positiv literal); modus ponens/tollens, disjunktiv syllogisme, forlengs/baklengs kjeding; resolusjonsregelen; **resolusjonsrefutasjon** (negér spørsmål, resolver til ⊥); gyldig/tilfredsstillbar/utilfredsstillbar; `A ⊨ B ⟺ (A ∧ ¬B)` utilfredsstillbar.
- **Predikatlogikk (FOL):** kvantorer `∀ ∃`, predikater, funksjoner, variabler; CNF-prosedyre (fjern `⇒` → negasjon inn → standardiser variabler → **skolemiser** (funksjon under `∀`) → dropp `∀` → distribuér); **unifikasjon** og mest generelle unifikator; generalisert modus ponens; entailment semidesidbar.

### Planlegging
STRIPS (PRECOND, ADD-LIST, DELETE-LIST) og **PDDL** (PRECOND, EFFECT med negasjon). Init/Goal. Progresjon (forlengs) vs. **regresjon** (baklengs). **GraphPlan** (stat-/handlingsnivåer, NOP-persistens, mutex, level-off). **Partial-Order Planning** (planrom, ordningslenker, trusler/flaws). Admissible planleggingsheuristikker (ignore-delete-list; antall GraphPlan-nivåer). Lineær planlegging ufullstendig (Sussmans anomali).

### Agenter og spill
**PEAS**; miljødimensjoner (observerbart, agenter, determinisme, episodisk/sekvensielt, statisk/dynamisk, diskret/kontinuerlig, strategisk); agenttyper (refleks/modell-/mål-/nyttebasert); **belief states** i delvis observerbare miljø (mengde mulige tilstander, oppdatert etter persept + handling). **Spillteori:** dominant strategi (sterk/svak), iterert eliminering, **Nash-likevekt**, Pareto-optimalitet, samfunnsøkonomisk optimum.

### Kunnskapsrepresentasjon og øvrig
Semantiske nettverk (arv som slutningsmekanisme), rammer (slotter, prosedyre-tilknytning/«demoner»), atomær/faktorisert/strukturert representasjon. KI-historie (Turing-test, Dartmouth 1956, GPS/Newell & Simon, Searles kinesiske rom, prinsippet om rasjonalitet). **KI-etikk** (individuell rettferdighet, forklarbarhet/transparens, bias, korrigerende beslutninger).

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (kommer garantert hvert år)
1. **Kjør søk for hånd (BFS/DFS/UCS/Greedy/A*)** — 100 %. Ekspansjonsrekkefølge, sti, kostnad; tie-breaking eksakt; tresøk uten løkkesjekk; riktig måltest-tidspunkt.
2. **A\*-heuristikk (admissibel/konsistent/dominans)** — 100 %. Kant-for-kant-ulikheter, intervall for ukjent `h`, motbevis for inadmissibilitet, hvorfor konsistens gir én ekspansjon.
3. **CSP (AC-3 + backtracking + MRV/LCV)** — 100 %. Constraint-graf, AC-3 med re-sjekk, backtracking-rekkefølge, forward checking.
4. **Logikk (oversett + CNF + resolusjonsrefutasjon)** — 100 %. Både utsagns- og predikatlogikk; unifikasjon i hvert steg; skolem-funksjon; eksklusiv eller; påbudt slutningsregel.
5. **Adversarielt søk (minimax + alfa-beta + expectiminimax)** — 100 %. Nodeverdier nedenfra-opp, begrunnet pruning med hele grenen, forventning i sjansenoder.
6. **Planlegging (PDDL + regresjon/GraphPlan)** — 100 %. Handlingsskjema, baklengs søk (første 3 steg), mutex/level-off.
7. **Intelligente agenter (PEAS + miljøegenskaper + agenttyper)** — 100 %. Begrunn klassifiseringen; belief states i delvis observerbart miljø.

### Nivå 2 — må kunne (avgjør C→A)
8. **Spillteori** — 67 % (nær 100 % i moderne æra). Utbetalingsmatrise, iterert eliminering, Nash, Pareto/velferd; fangens dilemma.
9. **Lokalt søk** — 78 %. Hill-climbing (lokalt maks/platå + random restart), simulert annealing (`e^{ΔE/T}`), genetiske algoritmer (mutasjon vs. crossover).
10. **Kunnskapsrepresentasjon** — 78 %. Atomær/faktorisert/strukturert; semantiske nett og arv; rammer.

### Nivå 3 — bør kjenne til (lavfrekvent, men differensierer og treffer dagens profil)
11. **KI-etikk/rettferdighet** — 33 %, **voksende**. Individuell rettferdighet, forklarbarhet, bias, korrigerende beslutninger. Drøftespørsmål — øv på å argumentere presist.
12. **Belief states / delvis observerbare miljø** — 11 %, **nytt (H2023)**. Oppdater mengden mulige posisjoner etter persept og handling.
13. **Monte Carlo-tresøk** — 11 %, **nytt (H2022)**. Hvorfor mindre følsom for evalueringsfeil enn alfa-beta.
14. **KI-historie/filosofi** — 56 %. Turing-test, Dartmouth, GPS/Newell & Simon, Searle. Billige kortsvarspoeng hvis du kan navnene.

### Bør IKKE prioriteres
**NLP / informasjonsgjenfinning** (presisjon/recall/F1, sentiment, bag-of-words, n-gram, stoppord). Var 33 % historisk, men **utgått fra og med 2018**. Dekk maks som en historisk fotnote.

**Prognose for neste ordinære eksamen (kode D):** 6–9 oppgaver, sum 100 poeng, jevnt fordelt. Forvent med svært høy sikkerhet: **én søkeoppgave** (kjør 4–5 algoritmer med tie-breaking); **én A*-heuristikkoppgave** (admissibel/konsistent, gjerne intervall for ukjent `h`); **én CSP-oppgave** (AC-3 + backtracking); **én logikkoppgave** (oversettelse + resolusjonsrefutasjon, utsagns- eller predikatlogikk); **én adversariell oppgave** (minimax + alfa-beta, muligens expectiminimax); **én planleggingsoppgave** (PDDL + baklengs søk); **én PEAS-/agentbolk**; sannsynligvis **én spillteorioppgave**; og **korte teorispørsmål** som kan berøre lokalt søk, belief states, KI-etikk eller MCTS. Studenten som kan kjøre alle kjernealgoritmene mekanisk og feilfritt for hånd — og kan begrunne egenskapene (admissibilitet, konsistens, mutex, Nash) — vil score høyt.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TDT4136/`.

**Løsningsforslag lest grundig (alle 9 år):**
`exam2023ord_solution`, `exam2022ord_solution`, `exam2021ord_solution`, `exam2020ord_solution`, `exam2019ord_solution`, `exam2018ord_solution`, `exam2017ord_solution`, `exam2016ord_solution`, `exam2015ord_solution` (`.pdf`). H2018, H2021, H2022, H2023 er lest særlig nøye (fullt løsningsforslag med sensorkommentarer); de øvrige er lest for både temaregistrering og metode.

**Oppgavehefter:** tilhørende `exam{år}ord_eng.pdf` (2015–2022) for format- og oppgavetypebekreftelse. For H2023 forelå bare løsningsforslaget (oppgaveteksten er innbakt i fasiten).

**Fagbeskrivelse:** omskrevet sammendrag av NTNUs emnebeskrivelse for TDT4136 (scratchpad: `fagbeskrivelse-tdt4136.md`; kilde: <https://www.ntnu.no/studier/emner/TDT4136>). Emnet er verifisert **aktivt** (undervisning planlagt høst 2026, Trondheim og Ålesund; emneansvarlig Pinar Öztürk).

**Merknader om kildene:**
- **Pensum konstant:** Russell & Norvig, *Artificial Intelligence: A Modern Approach* (AIMA), gjennom hele perioden. Fasitene refererer sidetall i «grønn/global» utgave. All algoritmenotasjon i oppgavene er AIMA-notasjon.
- **Emneansvarlig varierer:** Pinar Öztürk er faglig kontakt på de fleste settene; Odd Erik Gundersen står oppført på H2016 (og NLP-profilen i 2016–2017 speiler dette). Løsningsforslagene for H2022 og H2023 er ført i pennen av Xavier F.C. Sánchez Díaz, med svar levert av Öztürk (og Gleb på etikkspørsmålet H2023).
- **Innholdsdrift:** NLP/IR var et tungt tema 2015–2017 og forsvant fra og med 2018; expectiminimax, MCTS, belief states og KI-etikk er kommet til i 2020–2023. Temafrekvens-matrisen i del 2 er bygd ved systematisk gjennomgang av alle 9 løsningsforslagene; frekvensene er kalibrert mot den gjeldende (2018–2023) formen.
- **Filnavn vs. intern datering:** enkelte PDF-er har intern eksamensdato som kan avvike noe fra filnavnets årgang; analysen bruker filnavnets årgangsmerking konsekvent. Dette påvirker ikke temafrekvensen.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller løsningsforslag er gjengitt ordrett. Algoritmenavn, standardnotasjon og faglige definisjoner er allmenn faglig notasjon og ikke opphavsrettslig beskyttet tekst.
