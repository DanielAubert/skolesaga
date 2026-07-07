# Eksamensanalyse: MA0301 Elementær diskret matematikk (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på NTNUs eksamensarkiv for MA0301 — 43 filer fra 2003 til 2020, hvorav 22 med offisielle løsningsforslag. Løsningsforslagene fra 2013–2020 (13 eksamenssett med fasit) er lest grundig; eldre sett (2003–2012) er skummet for temaregistrering. Emnet har rullert mellom flere faglærere (bl.a. Martin Strand, Iris Marjan Smit & Sverre Olaf Smalø, Øystein Skartsæterhagen, Kurusch Ebrahimi-Fard; nåværende emneansvarlig Aslak Bakke Buan), men **temakatalogen har vært påfallende stabil**. Pensum er en standard innføringstekst i diskret matematikk i Grimaldi-tradisjonen (mengder, logikk, relasjoner, funksjoner, induksjon, kombinatorikk, grafer, boolsk algebra, endelige automater). **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller løsningsforslag. Analysen er kvantitativ der kildene tillater det.

---

## 1. Eksamensform og utvikling

### Grunnform (gjeldende)

Skriftlig skoleeksamen, **4 timer** (09:00–13:00), karakterskala **A–F**, teller **100 %** av emnet. Hjelpemiddelkode **D**: ingen trykte eller håndskrevne hjelpemidler, kun en bestemt, enkel kalkulator. Eksamen har **totalt 100 poeng** fordelt på **7–8 tematiske oppgaver**.

Eksamen er i all hovedsak **frisvar (bevis- og utregningsoppgaver)**. Dette er den viktigste formforskjellen fra algoritmefag som TDT4120: her belønnes *utført bevis og vist mellomregning*, ikke korte fasitsvar. Den gjennomgående sensorinstruksen i de norske settene sier det direkte: «Alle svar skal begrunnes. Ta med så mye mellomregning og forklaring at det er enkelt å forstå hvordan du har tenkt.» Studenten skal altså **skrive fullstendige bevis**, ikke bare oppgi et tall.

### Den viktigste formutviklingen — fra ren frisvar til frisvar med flervalgsåpning

| Periode | Faglærer(e) | Format | Grafinnhold |
|---|---|---|---|
| **2003–2014** | Norsk-språklig (bl.a. M. Strand) | **Ren frisvar.** «Oppgave 1…n», ofte «ti punkter som teller like mye». Alle svar begrunnes. | **Algoritmeutførelse**: Dijkstra, Prim/Kruskal, BFS-tre kjøres for hånd |
| **2016–2017** | Smit/Smalø, Skartsæterhagen, Ebrahimi-Fard | Tematiske «Problem/Exercise» på engelsk, fortsatt frisvar | Fortsatt algoritmeutførelse (2016), gradvis mot struktur |
| **2018–2020** | Ebrahimi-Fard, Buan-era | **Frisvar med flervalgsåpning**: hver tematiske oppgave starter med én «which of the three statements is correct?»-del (1–3 poeng), resten er frie bevis | **Strukturell grafteori**: planaritet, Eulers formel, gradsummer, gradskranker — nesten ingen algoritmeutførelse |

**Konsekvenser for læreboka:**

1. **Bygg mot 2018–2020-formatet.** De ferskeste settene har en fast anatomi: 7–8 tematiske oppgaver, hver innledet av en kort flervalgsdel som tester en *definisjon eller et teorem* (typisk «hva er den korrekte definisjonen av partiell ordning / ekvivalensrelasjon / surjeksjon / Eulers formel?»), etterfulgt av 2–4 frisvarsdeler med bevis og utregning. Flervalgsdelen er billige, garanterte poeng for den som kan definisjonene *presist* — og en felle for den som blander dem.
2. **Merk flervalgsregelen.** I 2019–2020 het det «exactly one answer is correct». I **2018** het det derimot «at least one and possibly several of the alternatives are correct» — der måtte man krysse *alle* riktige. Læreboka bør trene begge varianter, men prioritere «nøyaktig ett»-formen.
3. **Algoritmeutførelse er en risiko på retur.** Dijkstra, Prim og Kruskal *forsvant* fra de engelske settene etter 2016. En eksamensrettet bok må likevel dekke dem (de er i emnebeskrivelsen og kan komme igjen ved lærerbytte), men tyngden ligger nå på **grafstruktur og -bevis**, ikke på å traversere en vektet graf for hånd.

### Poeng- og vektingsprofil

- **Antall oppgaver:** 7 (2017–2019), 8 (2020), eller 10 likt vektede «punkter» (2013–2014).
- **Vekting er skjev, og skjevheten er stabil:** **induksjon er tyngst** (15–30 poeng, oftest 20), fulgt av relasjoner (10–20) og grafer (10–15). Flervalgsåpningene og småoppgaver (logikk, kombinatorikk, automater) veier 8–15. Det finnes altså en klar «hovedoppgave»: **induksjonsbolken alene kan avgjøre en bokstavkarakter.**
- **Rekkefølge:** temaene kommer i en nesten fast rekkefølge — mengder/logikk → relasjoner → induksjon → funksjoner → kombinatorikk/boolsk → grafer → automater. Vanskeligheten stiger innen hver bolk (flervalg først, tyngste bevis sist).

---

## 2. Temafrekvens

Basert på de **13 settene med fasit fra 2013–2020** (2013v, 2013k, 2014v, 2014k, 2016v, 2016k, 2017v, 2017k, 2018v, 2018k, 2019v, 2019k, 2020v; «k» = kontinuasjon/utsatt, «v» = ordinær vår). Celleverdi = antall av disse 13 settene der temaet forekommer i minst én oppgave. Fordi hvert sett har 7–8 tematiske oppgaver, treffer kjerneområdene nesten hvert sett; **gjenganger-scoren måler bredde/sikkerhet — poengvekten er angitt i egen kolonne fordi den er svært ujevn.**

| Tema | Antall sett (av 13) | **Gjenganger-score** | Typisk poengvekt |
|---|---|---|---|
| **Relasjoner** (ekvivalensrel., partielle ordninger, Hasse-diagram, partisjoner) | 13 | **100 %** | 10–20 |
| **Grafteori** (planaritet, Eulers formel, gradsum/håndtrykk, $K_n$, spenntre, Euler-/Hamilton-veier) | 13 | **100 %** | 10–15 |
| **Matematisk induksjon** (summer, delelighet, ulikheter, rekursive følger) | 12 | **92 %** | **15–30 (tyngst)** |
| **Endelige automater & formelle språk** (tilstandsmaskiner, regulære uttrykk, språk) | 12 | **92 %** | 10–15 |
| **Funksjoner** (injektiv/surjektiv/bijektiv, komposisjon, invers) | 9 | **69 %** | 15 |
| **Kombinatorikk** (permutasjoner m/gjentakelse, kombinasjoner, binomialteoremet, «stjerner og streker») | 9 | **69 %** | 8–15 |
| **Utsagnslogikk** (sannhetstabell, logikkens lover, tautologi, slutningsregler) | 9 | **69 %** | 10–15 |
| **Mengdelære** (potensmengde, kartesisk produkt, mengdeidentiteter, De Morgan) | 8 | **62 %** | 10–15 |
| **Rekursivt definerte følger** (Fibonacci, Lucas, Narayana — som eget/tungt ledd) | 5 | **38 %** ↑ *voksende* | del av induksjon |
| **Grafalgoritmer** (Dijkstra, Prim, Kruskal, BFS-tre — *utført for hånd*) | 6 | **46 %** ↓ *fallende* | 10 |
| **Boolsk algebra** (aksiomer, forenkling, komplement) | 4 | **31 %** | 10–15 |
| **Predikatlogikk** (kvantorer $\forall,\exists$, negering av kvantifiserte utsagn) | 3 | **23 %** | 1–5 (ofte flervalg) |
| **Tallteori / modulær aritmetikk** (kongruens mod $n$ — som *eget* tema) | 1–2 | **~12 %** | del av rel./induksjon |

**Viktigste funn:**

1. **Fire ubetingede pilarer.** Relasjoner, grafer, induksjon og endelige automater er tilnærmet garantert hvert sett (92–100 %). En student kan **ikke** droppe noen av dem. Sammen med det at induksjon er tyngst vektet, gir dette en klar prioriteringsakse.

2. **Induksjon er fagets tyngdepunkt.** Ikke bare 92 % frekvens, men også den desidert største poengbolken (opptil 30 poeng). Repertoaret er stabilt: (i) lukkede formler for summer ($\sum k^3$, $\sum(3k-2)$, geometriske summer), (ii) **delelighet** ($n^3-n$ delelig med 3; $8^m-14m+27$ delelig med 7), (iii) **ulikheter** ($2^n \ge n^2$; $n^2 \ge 2n+1$), og (iv) identiteter for **rekursivt definerte følger**.

3. **Rekursive følger (Fibonacci/Lucas/Narayana) er en fremvoksende gjenganger** — nesten fraværende før 2018, men i alle settene 2018–2020. Ofte pakket inn i induksjonsbolken som en tung deloppgave (8–12 poeng). Forvent den fremover.

4. **Grafalgoritmer er en fallende gjenganger.** Dijkstra/Prim/Kruskal/BFS ble utført for hånd i alle settene **2013–2016**, men forsvant helt fra 2017 og utover, der grafbolken i stedet handler om **struktur og bevis** (planaritet via $e \le 3v-6$, Kuratowski/$K_5$/$K_{3,3}$, håndtrykkslemmaet, gradskranker ved motsigelse, kantantall i $K_n$). Læreboka må dekke begge, men vekte strukturen tyngst.

5. **Boolsk algebra svinger.** Tungt til stede 2017–2019, men falt ut i 2020. Behandles som «bør kunne», ikke «må».

6. **Tallteori er ikke et selvstendig tema.** Modulær aritmetikk dukker opp *forkledd* — som ekvivalensrelasjon «$a\sim b$ hvis $5\mid(a-b)$» (relasjonsbolken) eller som delelighetsinduksjon (induksjonsbolken). Ren kongruensregning/euklidsk algoritme opptrer ikke som egen oppgave i det leste materialet. Emnebeskrivelsens «rekurrenslikninger» opptrer heller **aldri** som løsning via karakteristisk likning/genererende funksjoner — kun som følger man verifiserer med induksjon.

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen. «Krav» oppsummerer fasitens foretrukne metode og presisjonsnivå.

### A. Flervalgsåpning: «Hvilket utsagn er korrekt?» (definisjon/teorem)
- **Krav:** Hver tematiske oppgave i 2018–2020 åpner med å velge riktig blant tre nesten identiske utsagn. Testes: definisjonen av **partiell ordning** (refleksiv, **anti**-symmetrisk, transitiv) mot **ekvivalensrelasjon** (refleksiv, **symmetrisk**, transitiv); definisjon av **injektiv** ($f(a_1)=f(a_2)\Rightarrow a_1=a_2$) mot **surjektiv** ($f(A)=B$); **Eulers formel** ($|V|-|E|+|R|=2$); planaritetsulikheten ($|E|\le 3|V|-6$); håndtrykkslemmaet ($\sum \deg v = 2|E|$); spenntrekant ($|E|=|V|-1$); korrekt negering av et kvantifisert utsagn. **Distraktorene er nettopp de vanligste forvekslingene** (se del 5).
- **Frekvens:** Fast innslag i alle temaer 2018–2020. Billige, garanterte poeng — og en presisjonstest.

### B. Induksjonsbevis
- **Krav:** Fullstendig oppsett hver gang: **(1) basissteg** (sjekk minste $n$ eksplisitt), **(2) induksjonshypotese** (anta for $n=k$), **(3) induksjonssteg** (vis for $k+1$ ved å splitte av det siste leddet og sette inn hypotesen). Fasiten viser hele algebraen. Fire undertyper:
  - **Sumformler:** $\sum_{k=1}^n k^3 = \left(\tfrac{n(n+1)}{2}\right)^2$; $\sum(3k-2)=\tfrac{n(3n-1)}{2}$; geometrisk sum $\sum r^i=\tfrac{1-r^{n+1}}{1-r}$.
  - **Delelighet:** vis $x_{m+1}-x_m$ (eller $(k+1)^3-(k+1)$) er et multiplum av tallet, gitt at $x_m$ er det.
  - **Ulikheter:** finn riktig basissteg (ofte *ikke* $n=1$ — for $2^n\ge n^2$ er det $n=4$!) og bruk en tidligere bevist ulikhet i steget.
  - **Rekursive identiteter:** Fibonacci/Lucas — utnytt definisjonen $F_n=F_{n-1}+F_{n-2}$ og en oppgitt hjelpeidentitet; kan kreve **sterk induksjon** (bruk flere foregående ledd, som $c_{n+2}=3c_{n+1}-3c_n+c_{n-1}$).
- **Frekvens:** 92 %, og den tyngste bolken. Advarsel: feil eller manglende basissteg gir trekk selv om steget er riktig.

### C. Relasjonsbevis (ekvivalens / partiell ordning)
- **Krav:** For **ekvivalens**: vis refleksiv, symmetrisk og transitiv hver for seg, med definisjonen som utgangspunkt. For **partiell ordning**: refleksiv, **anti-symmetrisk**, transitiv. Ved «avkreft»: gi ett konkret **moteksempel** (f.eks. relasjonen «$n+m$ er partall» er *symmetrisk*, altså *ikke* en partiell ordning). Beslektet: **Hasse-diagram** ↔ relasjonsmengde (les av dekningsrelasjonen, legg til refleksive og transitive par), finn **minimale/maksimale/største** elementer, og bestem **partisjonen** en ekvivalensrelasjon induserer (ekvivalensklassene).
- **Frekvens:** 100 %.

### D. Funksjonsbevis (injektiv/surjektiv/invers/komposisjon)
- **Krav:** Bevis eller avkreft. **Injektiv:** anta $f(x_1)=f(x_2)$, utled $x_1=x_2$ — eller gi moteksempel (to ulike input, samme output). **Surjektiv:** for vilkårlig $b$ i kodomenet, finn $a$ med $f(a)=b$ — eller vis at et element aldri treffes. **Invers:** løs $y=f(x)$ for $x$. **Komposisjonssetninger:** «hvis $g\circ f$ er injektiv, så er $f$ injektiv» (bevises ofte kontrapositivt). Standardfelle i flervalg: $a_1=a_2\Rightarrow f(a_1)=f(a_2)$ er *alltid* sant (gjelder alle funksjoner) — ikke definisjonen på injektiv.
- **Frekvens:** 69 %.

### E. Logikk: forenkling, sannhetstabell, slutningsregler
- **Krav:** Tre varianter. (i) **Forenkle** et sammensatt utsagn *kun* med logikkens lover (De Morgan, distributiv, absorpsjon, komplement, $p\Rightarrow q\equiv \neg p\lor q$) — vis hvert steg med lovens navn. (ii) **Sannhetstabell** for å vise ekvivalens/tautologi/kontradiksjon (sammenlign de to kolonnene). (iii) **Slutningsregler**: etabler gyldigheten av et argument linje for linje (premiss → disjunktiv syllogisme → modus tollens/ponens → konklusjon). Predikatdelen: **neger et kvantifisert utsagn** ($\neg\exists x\forall y(\ldots)\equiv\forall x\exists y\neg(\ldots)$, med De Morgan innerst).
- **Frekvens:** 69 %.

### F. Mengdebevis (identiteter)
- **Krav:** Tre godkjente metoder, ofte fritt valg: **(1) element-argument** (dobbel inklusjon — vis $x\in$ venstre $\Leftrightarrow x\in$ høyre via en kjede av ekvivalenser), **(2) medlemskaps-/sannhetstabell**, **(3) mengdelærens lover** (De Morgan, distributiv, dobbelt komplement, idempotens) med navngitte steg. Gjengangere: $\overline{X\cap Y\cap Z}=\overline X\cup\overline Y\cup\overline Z$; $A\times(B-C)=(A\times B)-(A\times C)$; potensmengdens kardinalitet $|\mathcal P(A)|=2^{|A|}$; $(A\times A)=(B\times B)\Rightarrow A=B$.
- **Frekvens:** 62 %.

### G. Kombinatorikk
- **Krav:** Faste innpakninger. **Permutasjoner med gjentatte elementer:** $\tfrac{n!}{n_1!\,n_2!\cdots}$ (bokstavene i et ord: MYGGSTIKK, POTETSTAPPE, ARRANGEMENT); underspørsmål med «X-ene ved siden av hverandre» (slå sammen til ett tegn) eller «ingen X ved siden av hverandre» (komplement / mellomrom-metoden). **«Stjerner og streker»:** ikke-negative heltallsløsninger av $x_1+\cdots+x_k=n$ er $\binom{n+k-1}{n}$; tilleggskrav $x_i\ge c$ håndteres ved substitusjon, $x_i\le c$ ved komplement. **Binomialteoremet:** finn en bestemt koeffisient i $(a+b)^n$; bevis identiteter (Vandermonde, Narayana-symmetri) ved å sammenligne koeffisienter.
- **Frekvens:** 69 %.

### H. Grafteori — struktur og bevis
- **Krav:** (i) **Håndtrykkslemmaet** $\sum\deg v=2|E|$ — regn kanter fra grader, eller vis at en gradfølge er umulig fordi gradsummen blir odde. (ii) **Eulers formel** $|V|-|E|+|R|=2$ — verifiser eller regn ut manglende størrelse. (iii) **Planaritet:** ulikheten $|E|\le 3|V|-6$ (og $2|E|\ge 3|R|$); bevis *ikke*-planaritet ved å finne en delgraf **homeomorf med $K_5$ eller $K_{3,3}$** (Kuratowski/elementær oppdeling). (iv) **Gradskranker ved motsigelse:** «enhver endelig sammenhengende planar graf har et hjørne av grad $\le 5$». (v) **$K_n$:** vis $|E|=\tfrac{n(n-1)}2$. (vi) **Euler-vei/-krets** (alle grader like ↔ krets; nøyaktig to odde ↔ vei), **Hamilton-sykel** (paritetsargument på todelt graf), **spenntre** ($|E|=|V|-1$), **isomorfi**.
- **Frekvens:** 100 %.

### I. Grafalgoritmer — utført for hånd (2013–2016)
- **Krav:** Kjør en navngitt algoritme og oppgi resultatet med mellomsteg. **Dijkstra:** oppgi alle hjørne-etiketter (avstand, forgjenger) og den korteste veien med lengde. **Prim/Kruskal:** oppgi kantene i den rekkefølgen de legges til, treets totalvekt, og hvilken algoritme (svaret er ofte *ikke unikt* — nevn det). **BFS-tre:** oppgi køen og kantene, gitt en hjørnerekkefølge.
- **Frekvens:** 46 %, men **0 % etter 2016**. Med i boka som beredskap, lavere prioritet.

### J. Boolsk algebra
- **Krav:** **Forenkle** et uttrykk ($x'y'z+xy'\bar z+\ldots$) til minimal form med de boolske lovene (komplement, absorpsjon, distributiv, $x+x'=1$), eller **bevis** en identitet **kun fra aksiomene** (ingen tabeller): f.eks. entydighet av komplement, De Morgan for boolsk algebra, $a+b=b\Leftrightarrow a\cdot b=a$. Dualitet kan halvere arbeidet.
- **Frekvens:** 31 %.

### K. Endelige automater og formelle språk
- **Krav:** Fire varianter. (i) **Tegn tilstandsdiagrammet** fra en overgangstabell (Mealy-maskin med input/output på hver kant) og **oppgi outputstrengen** for en gitt input. (ii) **Konstruer en automat/maskin** som gjenkjenner et gitt språk (f.eks. «antall b-er delelig med 3», «inneholder 10101 som delstreng», «odde antall 1-ere»). (iii) **Bestem språket** $L(A)$ en gitt automat aksepterer (les av veiene til aksepttilstand; uttrykk som $\{b^m a b^n\mid m,n\ge 1\}$ eller «alle strenger som slutter på 01»). (iv) **Regulære uttrykk** ↔ språk (skriv et regulært uttrykk, eller gi ord i språket til et uttrykk). Flere gyldige svar godtas.
- **Frekvens:** 92 %.

---

## 4. Sensorens krav

### Faste metaregler
1. **Alt skal begrunnes.** Motsatt av kortsvarsfag: et bart tall uten utledning gir lite. «Ta med så mye mellomregning og forklaring at det er enkelt å forstå hvordan du har tenkt.» Dette er den hyppigst gjentatte instruksen i de norske settene.
2. **Bevisstruktur teller.** I induksjon forventes eksplisitt basissteg + hypotese + steg; å hoppe over basissteget gir trekk selv med korrekt algebra. I mengde-/relasjons-/funksjonsbevis forventes at man arbeider fra **definisjonen**.
3. **Navngi lovene.** Ved forenkling (logikk, mengdelære, boolsk algebra) refererer fasiten hvert steg til en navngitt lov (De Morgan, distributiv, absorpsjon). Toppsvar gjør det samme.
4. **Ett moteksempel er nok — og forventes.** Ved «bevis eller avkreft» holder ett konkret moteksempel; en vag påstand om at noe «ikke stemmer» gir lite.
5. **Flere gyldige svar godtas** der oppgaven er åpen: automat-/maskinkonstruksjon, minimalt spenntre og BFS-tre er sjelden unike, og fasiten sier det eksplisitt («There are also other valid solutions»; «Dette er ikke det eneste minimale utspennende treet»).

### Hva som skiller karakternivåene
- **Bestått (E):** riktige definisjoner i flervalgsåpningene; ett korrekt induksjonsbevis (sumformel) med alle tre stegene; verifisere ekvivalens/partiell ordning ved å sjekke de tre egenskapene; regne håndtrykkslemmaet riktig.
- **Midtsjikt (C/D):** fullføre delelighet- og ulikhetsinduksjon (inkl. riktig valgt basissteg); mengdeidentitet med navngitte lover; injektiv/surjektiv-bevis; bestemme språket til en gitt automat; planaritet via $K_5/K_{3,3}$.
- **Toppsjikt (A/B):** de tunge, flertrinns identitetene — Fibonacci/Lucas/Narayana med **sterk induksjon**, Vandermonde ved koeffisientsammenligning, boolske identiteter **kun fra aksiomene**, gradskranke-beviset ved motsigelse, og presis, komplett automatkonstruksjon. Toppsvar **navngir egenskapen/loven** eksplisitt i hvert steg og velger riktig basissteg uten prøving og feiling.

---

## 5. Typiske feil (eksplisitt eller implisitt i fasitene)

1. **Blande ekvivalensrelasjon og partiell ordning.** Ekvivalens = refleksiv/**symmetrisk**/transitiv; partiell ordning = refleksiv/**anti-symmetrisk**/transitiv. Dette er den *hyppigste* flervalgsfellen (distraktorene er nettopp den forvekslede definisjonen). At en relasjon er symmetrisk *utelukker* at den er en partiell ordning.
2. **Feil valg av basissteg i ulikhetsinduksjon.** For $2^n\ge n^2$ feiler $n=1,2,3$ (påstanden er usann for $n=3$); basissteget er $n=4$. For $n^2\ge 2n+1$ er det $n=3$. Å starte på $n=1$ av vane gir feil bevis.
3. **Glemme eller forkludre basissteget/hypotesen** i induksjon. Uten eksplisitt basissteg er beviset ufullstendig, uansett hvor riktig steget er.
4. **Injektiv/surjektiv-forveksling.** Injektiv: $f(a_1)=f(a_2)\Rightarrow a_1=a_2$. Surjektiv: $f(A)=B$. Distraktoren $a_1=a_2\Rightarrow f(a_1)=f(a_2)$ gjelder *alle* funksjoner og definerer ingenting.
5. **Fortegnsfeil i Eulers formel og planaritetsulikheten:** $|V|-|E|+|R|=2$ (ikke $+|E|$ eller $-|R|$); $|E|\le 3|V|-6$ (ikke $3|V|+6$).
6. **Umulig gradfølge.** En graf med gradsum som er *odde* kan ikke finnes (håndtrykkslemmaet). Å «konstruere» en slik graf er en klassisk felle.
7. **Kvantornegering.** $\neg\exists x\forall y\,P$ blir $\forall x\exists y\,\neg P$ — både kvantorene *og* det indre utsagnet må negeres (De Morgan innerst, $\neg(p\land\neg q)\equiv p\Rightarrow q$).
8. **«Stjerner og streker» med feil tak/gulv.** $x_i\ge c$ løses ved substitusjon (trekk fra $c$ først); $x_i\le c$ løses ved komplement (tell dem som bryter kravet og trekk fra). Å blande de to gir feil binomialkoeffisient.
9. **Permutasjon med gjentatte bokstaver uten å dele.** $\tfrac{n!}{n_1!\,n_2!\cdots}$ — å glemme divisjonen for like bokstaver dobbelteller.
10. **Ikke-planaritet «bevist» ved tegning.** Å ikke få til en plan tegning beviser ingenting; man må vise en delgraf **homeomorf med $K_5$ eller $K_{3,3}$**.
11. **Bruke tabeller der aksiomene kreves.** I «vis kun fra aksiomene»-boolske oppgaver gir en sannhetstabell null uttelling.
12. **Anta at algoritmesvaret er unikt.** Minimalt spenntre / BFS-tre / automat er ofte ikke-unike; toppsvar nevner det og oppgir *sin* rekkefølge.

---

## 6. Notasjons- og bevisapparat

Læreboka bør bruke standardnotasjonen fra Grimaldi-tradisjonen, siden oppgavene gjør det.

### Bevisteknikker som må beherskes aktivt
| Teknikk | Hvor den kreves | Kjerne |
|---|---|---|
| **Matematisk induksjon** (svak og sterk) | Induksjonsbolken (92 %, tyngst) | basissteg + hypotese + steg; sterk induksjon for følger med flere foregående ledd |
| **Element-argument / dobbel inklusjon** | Mengde- og relasjonsbevis | $x\in V\Leftrightarrow x\in H$; $A\subseteq B \land B\subseteq A$ |
| **Direkte + kontrapositivt bevis** | Funksjonsbevis (komposisjon) | «$g\circ f$ injektiv $\Rightarrow f$ injektiv» via kontraposisjon |
| **Moteksempel** | «bevis eller avkreft» | ett konkret eksempel som bryter påstanden |
| **Bevis ved motsigelse** | Grafgradskranker | anta alle grader $\ge 6$, utled $0\le -6$ |
| **Algebraisk lovforenkling** | Logikk, mengdelære, boolsk algebra | navngitte steg (De Morgan, distributiv, absorpsjon, komplement) |
| **Sannhetstabell / medlemskapstabell** | Logikk-/mengdeekvivalens | sammenlign sluttkolonnene |
| **Koeffisientsammenligning** | Kombinatoriske identiteter | Vandermonde, binomialteoremet |

### Begreps- og resultatapparat (må kunne definere presist — testes i flervalg)
- **Logikk:** primitive utsagn, konnektiver, tautologi/kontradiksjon, logisk ekvivalens, $p\Rightarrow q\equiv\neg p\lor q$, De Morgan, distributiv/absorpsjon, slutningsregler (modus ponens/tollens, disjunktiv syllogisme); **kvantorer** $\forall,\exists$ og negering.
- **Mengdelære:** delmengde, potensmengde ($|\mathcal P(A)|=2^{|A|}$), kartesisk produkt, komplement, symmetrisk differens, partisjon, fundamentalprodukt.
- **Relasjoner:** refleksiv, symmetrisk, **anti-symmetrisk**, transitiv; **ekvivalensrelasjon** → ekvivalensklasser/partisjon; **partiell ordning** → Hasse-diagram, minimal/maksimal/minste/største element, «deler»-ordningen.
- **Funksjoner:** injektiv, surjektiv, bijektiv, komposisjon, invers; bilde $f(A)$; partisjon indusert av $f^{-1}(b)$.
- **Kombinatorikk:** permutasjon (m/gjentakelse), kombinasjon $\binom nk$, binomialteoremet, «stjerner og streker» $\binom{n+k-1}{n}$, Vandermonde.
- **Grafteori:** grad, håndtrykkslemmaet $\sum\deg v=2|E|$, sammenhengende, **Eulers formel** $|V|-|E|+|R|=2$, planaritet ($|E|\le 3|V|-6$), $K_n$/$K_{m,n}$, Kuratowski/homeomorfi/elementær oppdeling, spenntre ($|E|=|V|-1$), Euler-vei/-krets, Hamilton-sykel, isomorfi, todelt graf.
- **Boolsk algebra:** aksiomene, komplement, dualitet, absorpsjon, De Morgan.
- **Automatteori:** endelig tilstandsmaskin (Mealy, input/output), overgangstabell ↔ tilstandsdiagram, aksepttilstander, språket $L(A)$, regulære uttrykk, konkatenasjon/union/Kleene-stjerne.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (kommer nesten garantert, og veier tyngst)
1. **Matematisk induksjon** — 92 %, tyngste bolk (opptil 30 poeng). Alle fire undertyper: sumformler, delelighet, ulikheter (m/riktig basissteg), og **rekursive følger** (Fibonacci/Lucas, ofte sterk induksjon). Perfekt bevisstruktur hver gang.
2. **Relasjoner** — 100 %. Bevise ekvivalens (refl./sym./trans.) og partiell ordning (refl./**anti-sym.**/trans.); Hasse-diagram ↔ relasjonsmengde; minimale/maksimale elementer; partisjon fra ekvivalensklasser. Kjenn forskjellen på de to definisjonene kaldt.
3. **Grafteori (struktur)** — 100 %. Håndtrykkslemmaet, Eulers formel, planaritet ($|E|\le3|V|-6$ og $K_5/K_{3,3}$), gradskranke ved motsigelse, $|E|=n(n-1)/2$ for $K_n$, Euler-/Hamilton-veier.
4. **Endelige automater & formelle språk** — 92 %. Tegn maskin fra tabell + oppgi output; konstruer automat for et gitt språk; bestem $L(A)$; regulære uttrykk.

### Nivå 2 — må kunne (i de fleste sett; avgjør C→A)
5. **Funksjoner** — 69 %. Injektiv/surjektiv bevis og moteksempel; komposisjonssetninger (kontraposisjon); invers.
6. **Utsagnslogikk** — 69 %. Forenkling med navngitte lover; sannhetstabell for tautologi/ekvivalens; slutningsregler; **kvantornegering**.
7. **Kombinatorikk** — 69 %. Permutasjoner m/gjentakelse (+ «ved siden av»/«ikke ved siden av»); «stjerner og streker» med tilleggskrav; binomialteoremet og -identiteter.
8. **Mengdelære** — 62 %. Identiteter via element-argument, tabell eller lover; potensmengde; kartesisk produkt.

### Nivå 3 — bør kjenne til (lavfrekvent eller på retur, men differensierer)
9. **Rekursivt definerte følger som eget ledd** — 38 %, **voksende**. Fibonacci/Lucas/Narayana; forvent minst én i den tunge induksjonsdelen.
10. **Boolsk algebra** — 31 %. Forenkling og bevis kun fra aksiomene; dualitet.
11. **Grafalgoritmer utført for hånd** — 46 % historisk, **0 % etter 2016**. Dijkstra/Prim/Kruskal/BFS — beredskap ved lærerbytte, lavere prioritet.
12. **Predikatlogikk / modulær aritmetikk** — lavfrekvente som *egne* temaer; møtes oftest forkledd (kvantorer i logikkflervalg; kongruens som ekvivalensrelasjon).

**Prognose for neste ordinære eksamen (kode D):** 7–8 tematiske oppgaver à 100 poeng totalt, hver innledet av en flervalgs definisjons-/teoremdel. Forvent med høy sikkerhet: **én tung induksjonsbolk** (15–20 poeng, med en rekursiv følge som toppdel); **én relasjonsoppgave** (ekvivalens eller partiell ordning + Hasse/partisjon); **én grafoppgave** (planaritet/Euler/gradsum, bevis ved motsigelse); **én automat-/språkoppgave**. Deretter et utvalg av **funksjoner, logikk, mengdelære og kombinatorikk**, sannsynligvis med boolsk algebra i noen årganger. Studenten som kan definisjonene presist (flervalgspoengene), skriver induksjonsbevis med komplett struktur og riktig basissteg, og behersker de fire pilarene, vil score høyt.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/MA0301/` (43 filer, 2003–2020).

**Løsningsforslag lest grundig (2013–2020, 13 sett med fasit):**
`2020v`, `2019v`, `2019k`, `2018v`, `2018k`, `2017v`, `2017k`, `2016v`, `2016k`, `2014v`, `2014k`, `2013v`, `2013k` (`*Solution*.pdf`).

**Eldre sett skummet for temaregistrering (2006–2012):**
`2012v`, `2012h`, `2011v`, `2011h`, `2010v`, `2010h`, `2009v`, `2009h`, `2008v`, `2007v`, `2006v`, `2004h`, `2003h`. Enkelte av disse foreligger kun som oppgavesett (uten fasit), og noen eldre PDF-er er skannede bilder uten uttrekkbar tekst (`2004h`, `2010h`/`2010v` løsning) — disse er utelatt fra frekvenstellingen, som derfor bygger på de 13 fasit-settene 2013–2020.

**Fagbeskrivelse:** omskrevet sammendrag av NTNUs emnebeskrivelse for MA0301 (scratchpad: `fagbeskrivelse-ma0301.md`; kilde: <https://www.ntnu.no/studier/emner/MA0301>). Emnet er aktivt, 7,5 studiepoeng, 4-timers skriftlig skoleeksamen (kode D), teller 100 %.

**Merknader om kildene:**
- **Faglærerrotasjon, stabilt tema.** Emnet har hatt flere faglærere (Martin Strand 2013–2014; Iris Marjan Smit & Sverre Olaf Smalø, og Øystein Skartsæterhagen 2016; Kurusch Ebrahimi-Fard 2017–2018; senere Buan-era; nåværende emneansvarlig Aslak Bakke Buan). Til tross for dette er de fire pilarene (relasjoner, grafer, induksjon, automater) uendret gjennom hele perioden. Den viktigste stilendringen er (i) overgangen fra ren frisvar til frisvar med flervalgsåpning (2018→), og (ii) fallet i håndkjørte grafalgoritmer etter 2016.
- **Språk.** Settene 2003–2014 er på norsk bokmål/nynorsk; 2016–2020 er på engelsk. Temaene er identiske; læreboka skrives på bokmål.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller løsningsforslag er gjengitt ordrett. Standardnotasjon, definisjoner og klassiske resultater (Eulers formel, håndtrykkslemmaet, binomialteoremet osv.) er allmenn faglig kunnskap og ikke opphavsrettslig beskyttet tekst.
