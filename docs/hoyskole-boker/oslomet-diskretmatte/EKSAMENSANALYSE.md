# Eksamensanalyse: DAPE1300 Diskret matematikk (OsloMet)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på OsloMets (tidligere Høgskolen i Oslo / Høgskolen i Oslo og Akershus) eksamensarkiv for diskret matematikk — 120 filer, hvorav 23 fullstendige eksamenssett med lesbart tekstlag fra 2003 til 2015, i tillegg til et stort korpus av lærebokavsnitt (kompendiumsnotater med oppgaver) og obligatoriske innleveringer. Emnet har hatt samme faglærer gjennom hele perioden — **Ulf Uttersrud** — og temakatalogen er derfor uvanlig stabil. Pensum følger Rosens *Discrete Mathematics and Its Applications* (avsnittnummereringen i notatene er identisk med Rosens kapitler), supplert med Uttersruds egne notater om tallsystemer, to-komplement og differensligninger. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller løsningsforslag. Analysen er kvantitativ der kildene tillater det.

---

## 0. Emnekode, avgrensning og kildekritikk

### Emnet og dets forgjengere

DAPE1300 Diskret matematikk (OsloMet, Fakultet for teknologi, kunst og design) er et **aktivt emne på 10 studiepoeng**. Det er faglig ekvivalent (10 sp full overlapp) med kodene **ITPE1300, FO019A og FO019I**. Arkivet dokumenterer en lang kodehistorikk under én og samme faglærer:

| Periode | Emnekode(r) | Institusjon | Eksamenstid |
|---|---|---|---|
| 2003–2004 | **FO018A** | Høgskolen i Oslo, Avd. for ingeniørutdanning | **9–12 (3 timer)** |
| 2005–2010 | **FO019A** (/FO019I) | Høgskolen i Oslo | **9–14 (5 timer)** |
| 2011–2012 | **FO019A – FO019I** (skrevet «FO019AI») | HiOA | 9–14 (5 timer) |
| 2012–2015 | **DAPE1300 – ITPE1300** (– FO019A – FO019I) | HiOA / OsloMet | 9–14 (5 timer) |
| Gjeldende emneplan | **DAPE1300** | OsloMet | **3 timer** |

Dette er avgjørende for tolkningen av arkivet: **den historiske eksamen var 5 timer med 10 (unntaksvis 14) likt vektede oppgaver, mens gjeldende emneplan angir 3 timer.** Se del 1 for konsekvenser.

### Kildetyper i arkivet (120 filer)

1. **Eksamenssett med lesbart tekstlag (23 stk)** — grunnlaget for den kvantitative analysen: de seks `DiskretMatematikk<H/V><år>`-settene (H12, V13, H13, V14, H14, V15), elleve `FO019(AI)x…`-sett (2006–2012) og seks eldre `eks…`-sett (2003–2006). Disse er lest grundig.
2. **`Fasit`-filer (~26 stk)** — nesten alle er skannede bilder uten uttrekkbart tekstlag (typisk 300–740 tegn, dvs. kun forsidetekst). De er derfor **ikke** brukt til å parafrasere løsningsmetoder direkte; sensorpraksis og foretrukne metoder er i stedet utledet fra oppgavetekstene, formelvedleggene og de tekstbaserte løsningsnotatene (`avsnittXX`).
3. **`avsnittXX.pdf` (31 stk) — lærebok-/kompendiumavsnitt med løsningsforslag.** Disse er **ikke eksamenssett**, men Uttersruds egne notater med oppgaveløsninger, organisert etter Rosens kapittelstruktur. De er svært verdifulle for å kartlegge **pensuminndelingen og oppgavesjangrene** og er skummet systematisk (se del 2–3). Nummereringen avslører kapittelkartet: 1.x = logikk/bevis, 2.x = mengder/følger/matriser, 4.x = tallteori, 5.x = induksjon, 6.x = kombinatorikk, 8.x = differensligninger/inklusjon-eksklusjon, 9.x = relasjoner, 10.x = grafteori.
4. **Obliger (`oblig1/2/3-2014`, ekstraoppgaver)** — de tre obligatoriske innleveringene som må godkjennes for eksamensrett. Lest for å bekrefte temaprogresjon (oblig 1 = logikk/mengder/kvantorer; oblig 2 = tallteori/kombinatorikk/matriser; oblig 3 = full eksamen som frivillig prøve).
5. **`fredag…`/`onsdag…`-filer (~30 stk)** — datostemplede ukesoppgaver fra undervisningen høsten 2014. De aller fleste er nesten tomme ved tekstuttrekk (73–720 tegn = kun figurer/overskrift) og er **utelatt fra tellingen**.
6. **Hjelpenotater**: `to-komplement.pdf` (binæraritmetikk og to-komplement) og `vedleggH14.pdf` (formelvedlegget som følger eksamen).

### Skann uten tekstlag — ekskludert

Følgende er utelatt fra frekvenstellingen fordi tekstuttrekk ga tomt/uleselig resultat: alle `Fasit`-filer (skannede), størstedelen av `fredag…`/`onsdag…`-ukesoppgavene, og enkelte eldre løsningsnotater. Frekvensanalysen bygger derfor på de **23 tekstbaserte eksamenssettene**, mens pensumstrukturen (del 2) i tillegg er verifisert mot `avsnittXX`-notatene.

### Opphavsrett

Alle beskrivelser av oppgaver, løsningsmetoder og eksamenspraksis er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller løsningsforslag er gjengitt ordrett. Standardnotasjon, definisjoner og klassiske resultater (grad-kant-setningen, Eulers setning, binomialteoremet, divisjonsalgoritmen osv.) er allmenn faglig kunnskap og ikke opphavsrettslig beskyttet tekst.

---

## 1. Eksamensform og utvikling

### Grunnform (den historiske, gjennom hele arkivet)

Skriftlig skoleeksamen, karakterskala A–F, teller 100 % av emnet. Formatet har vært **påfallende uforandret** fra 2005 til 2015:

- **10 likt vektede oppgaver** (ett sett fra 2006 hadde 14). Hver oppgave dekker ett tema; oppgaver med underpunkter (a, b, c …) der «krevende og mer omfattende underpunkter kan telle mer».
- **Ren frisvar (utregning og bevis)** — det finnes ingen flervalgsoppgaver i noe sett. Dette er den viktigste formforskjellen fra algoritmefag: her belønnes *vist mellomregning og argumentasjon*, ikke korte fasitsvar.
- Den faste, gjennomgående instruksen er: «Alle svar skal begrunnes! … Kun et svar uten noen begrunnelse er normalt verdiløst.» Og: «Det er ikke slik at lette oppgaver kommer først og vanskelige til slutt» — studenten oppfordres til å hoppe over det de står fast på.
- Et **formelvedlegg** følger alltid med eksamen (se del 6). Studenten trenger altså ikke pugge formler for rekker, binomialkoeffisienter, differensligninger osv.

### Den viktigste formutviklingen — tidsrammen (5t → 3t) og hjelpemidler

**(a) Tidsrammen.** Historikken er ikke en enkel lineær nedtrapping:

- De **aller eldste** settene (FO018A, 2003–2004) var **3 timer** (kl. 9–12).
- Fra 2005 og gjennom hele hovedarkivet (FO019A → DAPE1300, 2005–2015) var eksamen **5 timer** (kl. 9–14), med 10 oppgaver.
- **Gjeldende emneplan angir igjen 3 timer.**

Konsekvens for læreboka: **de 5-timers settene i arkivet er «for lange» som mal for dagens 3-timers eksamen.** En moderne eksamen må antas å bruke et **utvalg** av de samme oppgavetypene, ikke alle ti. Boka bør derfor trene *alle* de dokumenterte sjangrene (bredden er stabil), men samtidig øve studenten i **tempo og prioritering** — å løse en delmengde raskt og riktig. De historiske settene er utmerkede oppgavebanker; de er ikke lenger en tidsriktig simulering av selve eksamenssituasjonen.

**(b) Hjelpemidler (se også del 6).** Tydelig innstramming over tid:
- 2003–2008: **åpen bok** — «Alle trykte og skrevne hjelpemidler samt håndholdt kalkulator».
- Fra ca. 2009–2015: **kun kalkulator** som ikke kommuniserer trådløst (og fra H14 heller ikke regner symbolsk), + forhåndsgodkjent ordbok. Formelvedlegget kompenserer for at studenten ikke lenger har egne notater.

### Vektings- og rekkefølgeprofil

- **Likevekt, ikke skjevvekt.** I motsetning til f.eks. NTNUs MA0301 (der induksjon dominerer poengmessig) er OsloMet-settet **flatt vektet**: alle ti oppgavene teller likt. Ingen enkelt oppgave kan alene avgjøre karakteren. Dette premierer **bredde** framfor spisskompetanse.
- **Stabil rekkefølge.** Temaene kommer i nesten identisk rekkefølge hvert år: (1) logikk, (2) mengder/Venn, (3) matriser *eller* funksjoner, (4) tallsystem/tallteori, (5) rekker/summer, (6) kombinatorikk, (7) kombinatorikk/telleoppgave, (8) differensligning, (9) relasjoner, (10) grafteori/Euler. Funksjonsoppgaven og matriseoppgaven bytter av og til plass. Denne forutsigbarheten er en pedagogisk gave: boka kan bygges kapittel for kapittel i eksamensrekkefølge.

---

## 2. Temafrekvens

Basert på de **23 tekstbaserte eksamenssettene 2003–2015**. Celleverdi = antall sett der temaet forekommer i minst én oppgave. Fordi hvert 5-timers sett har ti tematiske oppgaver, treffer kjerneområdene nesten hvert sett. Tallene under er talt maskinelt på oppgavetekstene og deretter kontrollert manuelt (grafoppgaver som kun består av en figur uten mye tekst er verifisert manuelt til å være til stede i alle settene).

| Tema | Antall sett (av 23) | Gjenganger-score | Kommentar |
|---|---|---|---|
| **Grafteori / Euler-veier** (grad, grad-kant-setningen, lukket/åpen Euler-vei, bro- og romoppgaver) | 23 | **100 %** | Alltid oppgave 10. Nesten alltid pakket inn som broer over en elv eller dører i et hus. |
| **Mengdelære / Venn-diagram** (skravering, mengdeidentiteter, inklusjon-eksklusjon) | 23 | **100 %** | Fast oppgave 2. |
| **Matriser** (dimensjon, matriseprodukt, transponert, boolsk matriseprodukt) | 23 | **100 %** | Fast oppgave, ofte kombinert med relasjoner. |
| **Tallsystemer** (binær, oktal, heksadesimal, to-komplement, fortegnsbit) | 23 | **100 %** | Fast oppgave 4/5. |
| **Differensligninger** (2. ordens lineær homogen, karakteristisk polynom) | 23 | **100 %** | Fast «oppgave 7/8». Uvanlig sterk gjenganger — se funn 1. |
| **Relasjoner** (refleksiv/symmetrisk/antisymmetrisk/transitiv, ekvivalens, partiell ordning) | 23 | **100 %** | Fast oppgave 9, ofte med relasjonsgraf og relasjonsmatrise. |
| **Funksjoner** (en-til-en / på, verdimengde) | 22 | **96 %** | Nesten fast; testes «er f en-til-en? er f på?». |
| **Tallteori** (gcd/Euklids algoritme, primtallsfaktorisering, div/mod, kongruens, kontrollsiffer) | 21 | **91 %** | Ofte flettet inn i tallsystem- eller rekkeoppgaven. |
| **Kombinatorikk** (permutasjoner, «ord»-stokking, bitsekvenser, binomialkoeffisienter, pigeonhole) | 21 | **91 %** | Ofte to oppgaver i samme sett. |
| **Utsagnslogikk** (sannhetstabell, tautologi/selvmotsigelse, ekvivalens, oversette til operatorer) | 20 | **87 %** | Fast oppgave 1. |
| **Rekker og summer** (aritmetisk og geometrisk rekke, sumformler) | 17 | **74 %** | Egen deloppgave eller flettet inn i tallteori/differensligning. |
| **Matematisk induksjon** | 14 | **61 %** | Se funn 2 — sterkere til stede enn tellingen antyder, ofte som «vis ved induksjon *eller på annen måte*». |
| **Predikatlogikk / kvantorer** (∀, ∃, oversette utsagn, negering) | 3 (eksplisitt) | **13 %** | Lavfrekvent på eksamen, men tungt vektet i obligene og notatene (avsnitt 1.4–1.5). |

**Viktigste funn:**

1. **Differensligninger er den mest karakteristiske gjengangeren — og skiller OsloMet fra de fleste andre diskret-matematikk-emner.** Hvert eneste sett har én oppgave av formen: gitt $a_n = c_1 a_{n-1} + c_2 a_{n-2}$ med startbetingelser, (a) regn ut $a_2, a_3$, (b) finn en lukket formel via det karakteristiske polynomet, (c) regn ut et senere ledd. Dette er en **fast, mekanisk prosedyre** studenten må kunne kaldt. (Se overlapp-diskusjonen i del 8 — dette temaet er *nettopp* det HiØ-emnet ITF10705 har og NTNUs MA0301 *ikke* har.)

2. **Sju–åtte ubetingede pilarer.** Grafteori, mengdelære, matriser, tallsystemer, differensligninger og relasjoner er i praksis **garantert (100 %)** hvert sett; funksjoner, tallteori, kombinatorikk og logikk følger tett (87–96 %). En student kan ikke droppe noen av disse. Fordi vektingen er flat, betyr det at **bredde slår dybde**: den som mestrer alle ni–ti standardsjangrene, men ingen av dem briljant, gjør det bedre enn spesialisten.

3. **Induksjon er «myk».** Eksplisitt induksjon (61 %) er ofte formulert som «vis ved induksjon *eller på annen måte*». Sensor godtar altså alternative bevis (f.eks. direkte delelighetsargument). Til sammenligning med MA0301, der induksjon er obligatorisk og tyngst vektet, er induksjon her **én av mange likeverdige teknikker**, ikke fagets tyngdepunkt. Boka bør likevel lære induksjon skikkelig (det er den reneste veien gjennom flere av oppgavene), men studenten skal vite at det finnes en fluktrute.

4. **Grafteorien er «konkret», ikke «strukturell».** Der MA0301 (2018→) spør om planaritet, Eulers formel $|V|-|E|+|R|=2$ og $K_5/K_{3,3}$, holder OsloMet seg konsekvent til **grad-kant-setningen og Euler-veier** (broer, dører). Planaritet, spenntre, Hamilton-sykler og grafalgoritmer (Dijkstra/Prim/Kruskal) **forekommer ikke** i noe sett. Grafbolken er praktisk anvendt telling av grader og resonnement om partalls/oddetallsgrad.

5. **Boolsk algebra opptrer forkledd.** Emnebeskrivelsen nevner boolsk algebra, men i settene dukker det opp som **boolsk (logisk) matriseprodukt** $M_R \odot M_R$ i relasjons-/matriseoppgavene, ikke som forenkling av boolske uttrykk fra aksiomer. Ren boolsk-algebra-forenkling (à la MA0301) er fraværende i eksamensarkivet.

6. **Predikatlogikk er notat-tungt, men eksamens-lett.** Kvantorer og utsagnsfunksjoner er grundig behandlet i obligene og avsnitt 1.4–1.5, men opptrer sjelden som selvstendig eksamensoppgave (oftest et lite underpunkt i logikkoppgaven, «skriv utsagnet ved hjelp av kvantorer»).

---

## 3. Oppgavesjangre

De sjangrene som faktisk går igjen, i typisk oppgaverekkefølge. «Krav» oppsummerer den foretrukne metoden og presisjonsnivået slik det framgår av oppgaveteksten, formelvedlegget og løsningsnotatene.

### A. Utsagnslogikk (oppgave 1)
- **Krav:** Tre faste varianter. (i) **Oversette dagligtale til logikk**: «hvis … så», «bare hvis», «verken … eller», «nødvendig/tilstrekkelig» → operatorene $\neg, \land, \lor, \oplus, \rightarrow$. Fellen ligger i «$p$ bare hvis $q$» ($=p\rightarrow q$) og «nødvendig/tilstrekkelig». (ii) **Sannhetsverditabell** for å avgjøre tautologi, selvmotsigelse eller logisk ekvivalens av to sammensatte utsagn. (iii) **Konstruere** et sammensatt utsagn som passer en gitt sannhetskolonne, eller som er ekvivalent med en oppgitt operator.
- **Frekvens:** 87 %.

### B. Mengdelære og Venn-diagram (oppgave 2)
- **Krav:** (i) **Skravere** en gitt mengdeformel i Venn-diagram (to–tre mengder), eller **lese av** en mengdeformel fra et skravert diagram. (ii) **Forenkle** et sammensatt mengdeuttrykk til enklest form med mengdeidentiteter (De Morgan, distributiv). (iii) **Inklusjon-eksklusjon** som anvendt telleoppgave: «i en gruppe på N studenter tar x emne 1, y emne 2 …» → bruk $|A\cup B\cup C|$-formelen (som står i vedlegget). Eksklusiv union / symmetrisk differens $\oplus$ dukker opp i nyere sett.
- **Frekvens:** 100 %.

### C. Matriser (fast oppgave)
- **Krav:** Bestem **dimensjon**; avgjør hvilke **matriseprodukter** som er definert og deres dimensjon; regn ut $AB$, $BA$, $A+A$, $A^T$; avgjør symmetri. Egen variant: **boolsk (logisk) matriseprodukt** $M_R\odot M_R$ knyttet til relasjoner (funn 5), og **permutasjonsmatriser**.
- **Frekvens:** 100 %.

### D. Tallsystemer og to-komplement (oppgave 4/5)
- **Krav:** Konverter mellom **desimal, binær, oktal og heksadesimal** begge veier. Egen fast bolk: **8-bits to-komplement med fortegnsbit** — representer negative tall, tolk et gitt bitmønster, utfør binær addisjon/bitforskyvning, finn største/minste representerbare tall. (Hjelpenotatet `to-komplement.pdf` dekker akkurat dette.)
- **Frekvens:** 100 %.

### E. Tallteori (ofte flettet inn i D eller F)
- **Krav:** **Primtallsfaktorisering**; **gcd** via primtallsfaktorisering *og* via **Euklids algoritme** (med mellomregning); **lcm** og sammenhengen $ab=\gcd(a,b)\cdot\mathrm{lcm}(a,b)$; **div og mod**; **kongruens modulo m** anvendt på **kontrollsiffer** (ISBN-13, medlemsnummer) — vis at ett feilskrevet siffer avsløres. Tverrsum ≡ tall (mod 9).
- **Frekvens:** 91 %.

### F. Rekker og summer (egen deloppgave)
- **Krav:** Kjenne igjen **aritmetisk** vs. **geometrisk** rekke og bruke sumformlene fra vedlegget: «Finn summen $7+12+17+\dots+127$» (aritmetisk), «$1-2+4-8+\dots+1024$» (geometrisk med $r=-2$). Bestem antall ledd $n$ først.
- **Frekvens:** 74 %.

### G. Kombinatorikk (én–to oppgaver)
- **Krav:** Standardinnpakninger. **Permutasjoner med gjentatte elementer** ($\tfrac{n!}{n_1!n_2!\cdots}$): «hvor mange måter kan KULTURUKE / SUPPEPOSE stokkes om?». **Tellinger av «ord»/tall/bitsekvenser** med betingelser: «A først eller C sist», «A nøyaktig to ganger», «alle tre bokstavene inngår», «ingen to 1-ere ved siden av hverandre» (komplement/mellomrom-metoden). **Binomialkoeffisienter** og Pascals trekant (radsum $=2^n$). **Sifferteljing**: «hvor mange ganger brukes sifferet 3 blant firesifrede tall?». **Pigeonhole-prinsippet**.
- **Frekvens:** 91 %.

### H. Differensligninger (fast oppgave 7/8)
- **Krav:** Fast tredelt prosedyre for $a_n=c_1a_{n-1}+c_2a_{n-2}$: (a) regn ut $a_2,a_3$ direkte; (b) **finn lukket formel** via det **karakteristiske polynomet** $r^2=c_1r+c_2$ — to reelle røtter gir $a_n=\alpha r_1^n+\beta r_2^n$, dobbeltrot gir $a_n=\alpha r_0^n+\beta n r_0^n$; bestem $\alpha,\beta$ fra startbetingelsene; **verifiser** ved innsetting; (c) regn ut et senere ledd. Av og til: vis at et tall alltid går opp i $a_n$ (ved induksjon).
- **Frekvens:** 100 %. **Den mest signaturbærende oppgaven i emnet.**

### I. Funksjoner (fast, ofte oppgave 3/8)
- **Krav:** Gitt en funksjon på endelige/heltallsmengder: finn **verdimengde**; avgjør **en-til-en** (injektiv) og **på** (surjektiv) — med begrunnelse eller moteksempel; finn urbildemengder $\{a\mid f(a)=k\}$. Funksjonene er konkrete (siffersum, sifferprodukt, $a\bmod3+a\bmod5$, sum i et utvalg), ikke abstrakte komposisjonsbevis.
- **Frekvens:** 96 %.

### J. Relasjoner (fast oppgave 9)
- **Krav:** Gitt en relasjon (som mengde av par, relasjonsgraf eller relasjonsmatrise): **tegn grafen $G_R$**, **sett opp matrisen $M_R$**, avgjør **refleksiv / symmetrisk / antisymmetrisk / transitiv** hver for seg med begrunnelse. Videre: hvilke par må legges til for å oppnå hver egenskap; **boolsk matriseprodukt** $M_R\odot M_R$ (veier av lengde 2/3); avgjør **ekvivalensrelasjon** eller **partiell ordning**, og for partiell ordning: finn **maksimale/minimale elementer** (f.eks. «går opp i»-ordningen på en tallmengde).
- **Frekvens:** 100 %.

### K. Grafteori og Euler-veier (fast oppgave 10)
- **Krav:** Modeller en praktisk situasjon (broer over en elv à la Königsberg, eller dører mellom rom i et hus) som en **urettet graf** med områder/rom som punkter og broer/dører som kanter. **Sett opp graden** til hvert punkt; bruk **Eulers setning** til å avgjøre om det finnes en **lukket** Euler-vei (alle grader partall) eller **åpen** Euler-vei (nøyaktig to oddetallspunkter), og angi en konkret vei. Typisk oppfølging: hvordan endres svaret om man **legger til / fjerner** en bro eller dør (endrer pariteten til to punkter)?
- **Frekvens:** 100 %.

### L. Predikatlogikk / kvantorer (lite underpunkt, tungt i obligene)
- **Krav:** Oversett «alle/ingen/det finnes» til $\forall,\exists$ over en utsagnsfunksjon $P(x)$ eller $P(x,y)$; avgjør sannhet av kvantifiserte tallteoretiske utsagn ($\forall m\exists n\,(\dots)$); neger kvantifiserte utsagn.
- **Frekvens:** 13 % som egen oppgave.

---

## 4. Sensorkrav

Fasitfilene er skannede og gir ikke ordrette sensorkommentarer, men kravene framgår tydelig og konsistent av oppgavetekstenes stående instruks og av løsningsnotatenes stil.

### Faste metaregler
1. **Alt skal begrunnes.** Den bokstavtro, gjentatte instruksen: «Alle svar skal begrunnes! … Kun et svar uten noen begrunnelse er normalt verdiløst.» Et bart tall uten mellomregning gir i praksis null — dette gjelder også de tilsynelatende «mekaniske» oppgavene (tallkonvertering, matriseprodukt, differensligning).
2. **Vis mellomregningen eksplisitt der metoden er poenget.** Ved Euklids algoritme forventes hele divisjonskjeden; ved differensligning forventes det karakteristiske polynomet, røttene, ligningssystemet for $\alpha,\beta$ **og** en verifikasjon ved innsetting (oppgaven ber ofte eksplisitt om det).
3. **Sjekk de fire relasjonsegenskapene hver for seg.** Refleksiv, symmetrisk, antisymmetrisk, transitiv — hver med sin egen begrunnelse; det holder ikke å konkludere «det er en ekvivalensrelasjon».
4. **Ett moteksempel er nok — og forventes** ved «avgjør om … er like/ekvivalente». Ved mengdespørsmål aksepteres Venn-diagram som bevis for (u)likhet.
5. **Redegjør for forutsetninger ved uklarhet.** Standardklausul på forsiden: «Ved eventuelle uklarheter … skal du redegjøre for de forutsetninger du legger til grunn.» Toppsvar gjør nettopp dette.

### Hva som skiller karakternivåene (utledet)
- **Bestått (E):** klarer de mekaniske standardoppgavene med synlig mellomregning — tallkonvertering, matriseprodukt, gcd, den rutinemessige differensligning-formelen, grad-kant-telling og Eulers kriterium.
- **Midtsjikt (C/D):** fullfører kombinatorikk med betingelser (komplement/mellomrom), inklusjon-eksklusjon som telleoppgave, relasjonsanalysen med korrekt begrunnelse for alle fire egenskapene, og funksjonsbevis (en-til-en/på) med moteksempel.
- **Toppsjikt (A/B):** de resonnementstunge underpunktene — vise generelt at et kontrollsiffer avslører feilskriving, bevis ved induksjon, «ikke to 1-ere ved siden av hverandre»-telling, endring av Euler-egenskap ved å legge til/fjerne kanter, og presis kvantorbruk. Toppsvar begrunner *hvert* steg og navngir loven/egenskapen som brukes.

---

## 5. Typiske feil (utledet av oppgavestruktur og løsningsnotater)

1. **Ubegrunnede svar.** Den vanligste tapskilden gitt den strenge instruksen: å oppgi et tall (konvertering, matriseprodukt, differensligning-ledd) uten mellomregning.
2. **«Bare hvis» og nødvendig/tilstrekkelig.** «$p$ bare hvis $q$» oversettes $p\rightarrow q$ (ikke $q\rightarrow p$); «$p$ er nødvendig for $q$» er $q\rightarrow p$. Klassisk logikkfelle i oppgave 1.
3. **Feil rot-tilfelle i differensligning.** Å bruke $\alpha r_1^n+\beta r_2^n$ når det karakteristiske polynomet har **dobbeltrot** (skal være $\alpha r_0^n+\beta n r_0^n$). Og å glemme å bestemme $\alpha,\beta$ fra startbetingelsene / hoppe over verifikasjonen.
4. **To-komplement.** Å glemme fortegnsbiten, feil antall representerbare tall ($2^8=256$, asymmetrisk område $-128\dots127$), eller feil ved binær addisjon med mente.
5. **Blande ekvivalensrelasjon og partiell ordning.** Ekvivalens = refleksiv/**symmetrisk**/transitiv; partiell ordning = refleksiv/**antisymmetrisk**/transitiv. Å konkludere uten å sjekke alle tre.
6. **Permutasjon med gjentatte bokstaver uten å dele.** $\tfrac{n!}{n_1!n_2!\cdots}$ — å glemme divisjonen for like bokstaver dobbelteller (KULTURUKE, SUPPEPOSE).
7. **«Ved siden av»-teljinger.** «Ingen to like ved siden av hverandre» krever komplement eller mellomrom-metoden; å telle direkte gir feil.
8. **Euler-paritet.** Å tro at en åpen Euler-vei finnes uansett; regelen er *nøyaktig* to oddetallspunkter (åpen) eller *null* (lukket). Fire eller flere oddetallspunkter → ingen Euler-vei. Å legge til/fjerne én kant endrer pariteten til **to** punkter samtidig.
9. **Umulig gradfølge.** Gradsummen må være partall (grad-kant-setningen); en «graf» med odde gradsum finnes ikke.
10. **Matriseprodukt-dimensjoner.** Å regne ut $AB$ når kolonnetallet i $A$ ikke matcher radtallet i $B$; å forveksle $AB$ og $BA$.
11. **Aritmetisk vs. geometrisk rekke.** Å bruke feil sumformel, eller feil antall ledd $n$ (glemme «+1» i $n=\tfrac{b-a}{d}+1$).
12. **Inklusjon-eksklusjon med feil fortegn.** Å glemme å trekke fra parvise snitt eller legge tilbake trippelsnittet i $|A\cup B\cup C|$.

---

## 6. Hjelpemidler og formelbruk

### Hjelpemiddelregime (historisk utvikling)
- **2003–2008:** åpen bok — alle trykte/håndskrevne hjelpemidler + kalkulator.
- **2009–2015:** kun håndholdt kalkulator (ikke trådløs; fra H14 heller ikke symbolsk regning) + forhåndsgodkjent ordbok.
- Uansett regime **følger et formelvedlegg med eksamen** (`vedleggH14.pdf` er malen).

### Formelvedlegget — hva studenten *får utlevert* (og altså ikke må pugge)
Vedlegget er stabilt gjennom hele arkivet og inneholder:
- **Logikk:** operatorsymboler; distributive lover; De Morgan; $p\rightarrow q\equiv\neg p\lor q$; kommutativitet; kvantornegering.
- **Mengder:** distributive lover; De Morgan; kardinalitet for union av to og tre mengder (inklusjon-eksklusjon).
- **Funksjoner:** definisjon av en-til-en og på.
- **Matriser:** transponert.
- **Tallteori:** divisjonsalgoritmen (div/mod); gcd, lcm og $ab=\gcd\cdot\mathrm{lcm}$; kongruens modulo m med regneregler; tverrsum ≡ (mod 9).
- **Rekker:** geometrisk og aritmetisk sumformel med antall-ledd-formelen.
- **Kombinatorikk:** binomialkoeffisienter med identiteter; binomialteoremet; de fire utvalgstypene (ordnet/uordnet × med/uten tilbakelegging); pigeonhole.
- **Differensligninger:** hele oppskriften med karakteristisk polynom og begge rot-tilfellene.
- **Relasjoner:** definisjoner av refleksiv/symmetrisk/antisymmetrisk/transitiv; partisjon; ekvivalensrelasjon og -klasser; partiell ordning med maksimalt/minimalt element.
- **Grafteori:** grad; grad-kant-setningen; definisjon av åpen/lukket Euler-vei; Eulers setning.

**Konsekvens for læreboka:** Siden formlene er utlevert, ligger poengene i **å vite hvilken formel som gjelder og å bruke den korrekt med full mellomregning**, ikke i pugging. Boka bør trykke det samme formelvedlegget og trene studenten i å slå opp i det raskt — særlig differensligning-oppskriften og inklusjon-eksklusjon.

---

## 7. Prioritering og prognose

### Nivå 1 — må beherskes perfekt (kommer nesten garantert, flat vekt gjør bredde avgjørende)
1. **Differensligninger** — 100 %, fagets signaturoppgave. Fast tredelt prosedyre; øv til den sitter automatisk, inkludert dobbeltrot-tilfellet og verifikasjon.
2. **Grafteori / Euler-veier** — 100 %. Modeller broer/dører som graf, sett opp grader, bruk Eulers kriterium, resonner om å legge til/fjerne kanter.
3. **Relasjoner** — 100 %. Fire egenskaper hver for seg; relasjonsgraf ↔ matrise; boolsk matriseprodukt; ekvivalens vs. partiell ordning; maksimale/minimale elementer.
4. **Mengdelære / Venn** — 100 %. Skravering begge veier; forenkling; inklusjon-eksklusjon som telleoppgave.
5. **Matriser** — 100 %. Dimensjon, produkt (og når det er definert), transponert, boolsk produkt.
6. **Tallsystemer / to-komplement** — 100 %. Konvertering alle veier; 8-bits to-komplement.

### Nivå 2 — må kunne (i nesten alle sett; avgjør C→A)
7. **Funksjoner** — 96 %. En-til-en / på med begrunnelse eller moteksempel; verdimengde.
8. **Tallteori** — 91 %. Euklids algoritme (med mellomregning), primtallsfaktorisering, gcd/lcm, div/mod, kongruens/kontrollsiffer.
9. **Kombinatorikk** — 91 %. Permutasjoner med gjentakelse, betingede tellinger («ved siden av»), binomialkoeffisienter, sifferteljing, pigeonhole.
10. **Utsagnslogikk** — 87 %. Oversetting til operatorer, sannhetstabell, tautologi/ekvivalens.

### Nivå 3 — bør kjenne til (lavere frekvens, men differensierer og står i pensum)
11. **Rekker og summer** — 74 %. Aritmetisk vs. geometrisk; opptrer ofte som del av andre oppgaver.
12. **Matematisk induksjon** — 61 %. Ofte «eller på annen måte»; lær det godt, men vit at det finnes alternativer.
13. **Predikatlogikk / kvantorer** — 13 % som egen oppgave, men pensum og obligstoff; behersk oversetting og negering.
14. **Boolsk algebra (aksiomatisk)** — praktisk talt fraværende i eksamensarkivet; opptrer kun som boolsk matriseprodukt. Lav prioritet, men nevn det (står i emnebeskrivelsen).

### Prognose for neste ordinære eksamen (DAPE1300, 3 timer)
Fordi tidsrammen er kuttet fra 5 til 3 timer, forventes et **utvalg** av de faste sjangrene snarere enn alle ti. Med svært høy sikkerhet vil settet inneholde: **én differensligning**, **én grafoppgave med Euler-vei**, **én relasjonsoppgave** (med graf/matrise og ekvivalens eller partiell ordning), **én mengde-/Venn-oppgave** (gjerne med inklusjon-eksklusjon), **én tallsystem-/to-komplement-oppgave** og **én kombinatorikkoppgave**, pluss et utvalg av logikk, funksjoner, tallteori og matriser. Alt vektes trolig fortsatt flatt, og alt skal begrunnes. **Studenten som behersker hele bredden av standardsjangrene raskt og skriver full mellomregning, vil score høyt** — spesialisering lønner seg mindre her enn i tyngre bevisfag.

---

## 8. Overlapp med eksisterende fag

Diskret matematikk på innføringsnivå har en stabil, felles kjerne på tvers av norske institusjoner (Grimaldi/Rosen-tradisjonen). OsloMet-emnet har derfor **stor overlapp** med flere allerede analyserte/planlagte bøker, men også karakteristiske forskjeller som må respekteres for at boka skal treffe *denne* eksamenen.

### ma0301 (NTNU, Elementær diskret matematikk) — stor kjerneoverlapp, ulik profil
Felles: mengder, logikk, relasjoner, funksjoner, induksjon, kombinatorikk, grafer. **Men profilene divergerer kraftig:**
- **NTNU (MA0301)** er et **bevistungt** emne (2018→ med flervalgsåpning) der **induksjon dominerer poengmessig**, og grafdelen er **strukturell** (planaritet, Eulers formel $|V|-|E|+|R|=2$, $K_5/K_{3,3}$). MA0301 har **endelige automater og formelle språk** — et helt tema OsloMet **ikke** har.
- **OsloMet (DAPE1300)** er **prosedyre-/regnetungt** med **flat vekting**, har **differensligninger, tallsystemer/to-komplement og matriser** som faste bolker (fraværende eller marginale i MA0301), og en **konkret** grafdel (broer/dører, Euler-veier) uten planaritet/automater.
- Konsekvens: kapitler om mengder, logikk, relasjoner, funksjoner, kombinatorikk og induksjon kan **deles/gjenbrukes** på tvers, men differensligning-, tallsystem-, matrise- og Euler-kapitlene må skrives spesifikt for OsloMet-profilen. Automat-/språk- og planaritetskapitler fra MA0301 skal **ikke** med.

### hio-diskretmatte (ITF10705, Høgskolen i Østfold) — stor overlapp, men NB på forskjellen
DAPE1300 og HiØ-emnet er nære slektninger (begge ingeniør-/IT-rettet diskret matematikk). **Kritisk forskjell som prompten framhever:** **DAPE1300 er renere klassisk diskret matematikk.** HiØs ITF10705 trekker inn **komplekse tall og differenslikninger med kompleks/oscillerende løsning** (og beslektet «tyngre» analyseapparat), mens OsloMet-differensligningene holder seg til **reelle røtter og dobbeltrot** — ingen komplekse røtter i noe sett. OsloMet mangler også HiØ-stoff utover den klassiske kjernen. Boka bør altså **ikke** importere HiØ-kapitlene om komplekse tall / oscillerende differenslikninger; det ville teste noe DAPE1300 ikke gjør.

### tma4140 / tma4145 (NTNU) — begrenset overlapp
TMA4140 Diskret matematikk (informatikk) og TMA4145 er mer omfattende/formelle. Overlappet er begrenset til den felles innføringskjernen (logikk, mengder, kombinatorikk, grafer); disse emnene går dypere i bevis og struktur enn DAPE1300 og er ikke gode maler for denne bokas nivå eller regnetunge profil. Bruk kun som referanse for definisjoner, ikke for oppgavevekt.

### Anbefaling for gjenbruk
Del den felles innføringskjernen (mengder, logikk, relasjoner, funksjoner, kombinatorikk, induksjon, grunnleggende grafteori) med ma0301/hio-diskretmatte, men skriv **fire OsloMet-signaturkapitler** fra bunnen: (1) **differensligninger** (reelle røtter, karakteristisk polynom, den faste tredelte prosedyren), (2) **tallsystemer og to-komplement**, (3) **matriser og boolsk matriseprodukt**, og (4) **Euler-veier i konkrete bro-/dørgrafer**. Utelat automater/formelle språk (MA0301), planaritet/grafalgoritmer, og komplekse differenslikninger (HiØ). Match den flate vektingen og den strenge «alt skal begrunnes»-normen i alle oppgaver og løsningsforslag.

---

## Kildeliste

Alle filer ligger i `~/Desktop/Eksamner/OsloMet/DiskretMatematikk-DAPE1300/` (120 filer).

**Eksamenssett lest grundig / talt (23 tekstbaserte sett, 2003–2015):**
`DiskretMatematikkH12`, `V13`, `H13`, `V14`, `H14`, `V15` (DAPE1300/ITPE1300); `FO019Axh06`, `Axv07`, `Axh08`, `Axv08`, `Axh09`, `Axv09`, `Axh10`, `Axv10`, `FO019AIxh11`, `AIxv11`, `AIxv12` (FO019A/I); `eks101203`, `eks200204` (FO018A, 3 timer), `eks101204`, `eks121205`, `eks240205`, `eks240206` (FO019A).

**Lærebok-/kompendiumavsnitt skummet for pensum- og sjangerkartlegging (31 stk, Rosen-nummerering):**
`avsnitt11–18` (logikk/bevis), `avsnitt21–26` (mengder/følger/matriser), `avsnitt41–45` (tallteori), `avsnitt51` (induksjon), `avsnitt61–64` (kombinatorikk/pigeonhole), `avsnitt81–85` (differensligninger/Fibonacci/inklusjon-eksklusjon), `avsnitt91–96` (relasjoner), `avsnitt102–105` (grafteori/Euler).

**Obliger:** `oblig1/2/3-2014` (+ ekstraoppgaver) — de tre obligatoriske innleveringene som må godkjennes for eksamensrett.

**Hjelpenotater:** `to-komplement.pdf` (binæraritmetikk), `vedleggH14.pdf` (formelvedlegget som følger eksamen).

**Ekskludert fra tellingen:** alle `Fasit`-filer (skannede bilder, ~300–740 tegn ved uttrekk = kun forside), størstedelen av `fredag…`/`onsdag…`-ukesoppgavene høsten 2014 (nesten tomt tekstlag).

**Merknader om kildene:**
- **Én faglærer, stabilt tema.** Ulf Uttersrud har vært faglig ansvarlig gjennom hele arkivet (2003–2015), og temakatalogen, oppgavestrukturen (10 likt vektede oppgaver) og formelvedlegget er nesten uforandret. Roy Istad går igjen som kontrollør/sensor.
- **Emnekode- og tidshistorikk:** FO018A (3 t, 2003–04) → FO019A/FO019I (5 t, 2005–2012) → DAPE1300/ITPE1300 (5 t, 2012–2015); gjeldende emneplan angir igjen 3 timer. Se del 1.
- **Pensumkilde:** Rosen, *Discrete Mathematics and Its Applications* (avsnittnotatene er merket «Chapter … – Discrete Mathematics and Its Applications»), supplert med Uttersruds egne notater.
- **Opphavsrett:** Alle beskrivelser av oppgaver, metoder og praksis er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller løsningsforslag er gjengitt ordrett. Definisjoner, standardnotasjon og klassiske resultater er allmenn faglig kunnskap.
