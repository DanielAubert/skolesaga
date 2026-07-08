# Eksamensanalyse: ITF10705 Diskret matematikk (Høgskolen i Østfold)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på HiØ sitt eksamensarkiv for ITF10705 Diskret matematikk — 98 filer, hvorav 46 løsningsforslag. Kjernematerialet er de **13 eksamenssettene i dagens format med offisielt løsningsforslag (desember 2019 til juni 2026)**, alle skrevet av samme faglærer, Christian F. Heide, og lest grundig. I tillegg finnes **5 offisielle sensorveiledninger (2021–2025)** som gir eksakt poengfordeling og karaktergrenser, samt et eldre eksamensarkiv fra forgjengeremnet (kodet `mit_eksamen`, desember 2010 til januar 2019) som er skummet for temaregistrering. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster, løsningsforslag eller sensorkommentarer. Analysen er kvantitativ der kildene tillater det.

---

## 0. Emnekode, avgrensning og kildekritikk

**Emnet.** ITF10705 Diskret matematikk, Høgskolen i Østfold, Institutt for informasjonsteknologi og kommunikasjon (tidligere Avdeling for informasjonsteknologi). 10 studiepoeng. Emnet er **aktivt** (emneside publisert for høst 2026). Undervises typisk i høstsemesteret, med ordinær eksamen i desember og utsatt/kontinuasjonseksamen på nyåret eller våren (arkivet har sett merket `feb`, `mai` og `juni` i tillegg til `des`).

**Eksamensform.** Individuell skriftlig skoleeksamen, **4 timer**, karakterskala **A–F**, teller **100 %**. Tillatte hjelpemidler: **to A4-ark med egne, håndskrevne eller printede notater** (fire sider totalt) **+ godkjent kalkulator**. I tillegg deler faglærer ut et fast sett **vedlegg** som følger oppgavesettet (lover for logikk og mengder, en kombinatorikk- og differensligningsformelsamling, og en tabell med eksakte sinus-/cosinusverdier — se del 6).

**Forkunnskapskrav.** R1 (eller S1+S2) fra videregående. Dette merkes på eksamen: den forutsetter trygg algebra, abc-formelen, brøkregning og litt trigonometri, men ingen forkunnskaper i diskret matematikk som fag.

**Faglig avgrensning — dette er en «bred» diskret matematikk.** Emnebeskrivelsens læringsutbytte lister: heltall og delelighet, tallsystemer, kombinatorikk, mengdelære, relasjoner og diskrete funksjoner, logikk, komplekse tall, differenslikninger, lineære likningssystemer og matriser, grafer og trær, formelle språk og Turing-maskiner. Det er verdt å merke seg eksplisitt: **ITF10705 er bredere enn en klassisk diskret matematikk.** De klassiske diskret-temaene (logikk, mengder, relasjoner, funksjoner, kombinatorikk, grafer, automater/språk) er alle der, men i tillegg kommer tre klart *anvendte/kontinuerlige* temaer som normalt ikke finnes i et rent diskret-matematikk-emne: **komplekse tall**, **andreordens differenslikninger** (løst via karakteristisk likning) og **matriser / lineære likningssystemer** (Gauss–Jordan, invers matrise, determinant). Det gir faget en «diskret + litt anvendt matematikk for informatikk»-profil. Dette skillet er gjennomgående i analysen, fordi det har konsekvenser for hvordan en lærebok bør prioritere.

**Kildekritikk og forbehold.**
- **Én faglærer, ett format.** Hele dagens arkiv (des 2019–juni 2026) er skrevet av Christian F. Heide, med samme oppbygging, samme oppgavestil og samme løsningsstil. Det gjør frekvensdataene svært pålitelige for *dette* formatet, men også sårbare for et eventuelt lærerbytte. Sannsynligheten for brå omlegging vurderes likevel som lav, siden formatet har vært stabilt i sju år og temakatalogen har vært stabil i over 15 år (se under).
- **Historisk stabilitet.** Det eldre `mit_eksamen`-arkivet (des 2010–jan 2019, forgjengeremnet) er skummet. Temakatalogen der er **nesten identisk** med dagens: differenslikninger, komplekse tall, matriser/likningssystemer, relasjoner, automater, grammatikker, grafer, Turing-maskiner, induksjon, mengder og logikk går igjen. Dette styrker prognosen betydelig — dette er et modent, stabilt emne.
- **Poengdata er eksakte.** De fem sensorveiledningene angir presist poengfordeling per oppgave og de veiledende karaktergrensene. Frekvenstabellen i del 2 bygger på de 13 dagens-settene; poengvektingen er hentet direkte fra sensorveiledningene.
- **Alt er tekstbasert.** Alle 13 dagens-løsningsforslag har uttrekkbart tekstlag; ingen ble hoppet over på grunn av manglende OCR. Figurer (grafer, automatdiagram, venndiagram, Hasse-diagram) er selvsagt ikke gjengitt her, men oppgavesammenhengen framgår tydelig av teksten.
- **Opphavsrett.** Alle beskrivelser av oppgaver, metoder og sensorkommentarer er parafrasert. Standardnotasjon, definisjoner og klassiske resultater (abc-formelen, De Morgans lover, Eulers vilkår for eulergraf, osv.) er allmenn faglig kunnskap.

---

## 1. Eksamensform og utvikling

### Grunnform (gjeldende, des 2019–juni 2026)

Skriftlig skoleeksamen, 4 timer. Settet består av **8 eller 9 nummererte oppgaver** («Oppgave 1 … Oppgave 9»), hver med **inntil 10 poeng**, til sammen **80 poeng (8 oppgaver)** eller **90 poeng (9 oppgaver)**. Karakter settes på prosentvis score.

Dette er den **viktigste formforskjellen fra beslektede bevis­tunge diskret-emner** (som NTNUs MA0301): ITF10705 er i all hovedsak et **kortsvars- og utregningsfag**, ikke et bevisfag. Hver oppgave dekker ett tema, og de aller fleste deloppgavene ber om et konkret *utregnet svar* med vist framgangsmåte: «konverter tallet», «regn ut», «finn den generelle løsningen», «skriv mengden på listeform», «tegn tilstandsdiagrammet», «begrunn hvorvidt relasjonen er refleksiv/…». Bevis i streng forstand forekommer nesten bare i **induksjonsoppgaven** (og av og til et enkelt kontrapositivt bevis). Der MA0301 straffer manglende bevisstruktur, belønner ITF10705 **riktig utregning med synlig mellomregning**.

### Fast anatomi og rekkefølge

Oppgavene kommer i en nokså fast rekkefølge, som i praksis grupperer de klassiske og de anvendte temaene om hverandre. Et typisk sett ser slik ut:

- **Oppgave 1 — «blandet oppvarming»:** tallsystemer (binær/heksadesimal/desimal-konvertering), ofte kombinert med ett eller to av: en kombinatorikkutregning (komité/styre), et predikat-/kvantorspørsmål, et boolsk uttrykk, eller en kongruens-sjekk (mod n). Denne oppgaven er den mest variable — den fungerer som en sekk av små, lette deltemaer.
- **Oppgave om relasjoner:** gitt en relasjon (som mengde av ordnede par eller som Hasse-diagram), tegn den som rettet graf, avgjør refleksiv/symmetrisk/antisymmetrisk/transitiv, og klassifiser som ekvivalensrelasjon / delvis ordning / ingen av delene; ev. tegn Hasse-diagram eller angi ekvivalensklasser.
- **Logikk (to oppgaver):** (i) sannhetstabell for å avgjøre logisk ekvivalens eller tautologi, og (ii) forenkling av et sammensatt utsagn med de nummererte lovene i vedlegget, for å matche ett av oppgitte alternativer.
- **Mengdelære:** venndiagram-oppgaver og/eller mengdeoperasjoner på listeform (union, snitt, differanse, komplement, kartesisk produkt, potensmengde).
- **Funksjoner:** injektiv/surjektiv/bijektiv/inverterbar, begrunnet.
- **Automat og/eller grammatikk:** tegn en endelig automat som gjenkjenner et gitt språk; og/eller avgjør om en grammatikk er kontekstfri/regulær; av og til Turing-maskin-kjøring.
- **De anvendte tre:** komplekse tall (rektangulær ↔ eksponentialform, divisjon), differenslikning (homogen + inhomogen), og matriser / likningssystem (Gauss–Jordan, invers, determinant, matriseprodukt).
- **Induksjon:** ett fullstendig induksjonsbevis av en sumformel — når det er med.

### Utvikling over tid

Formatet er påfallende stabilt, men to trekk er verdt å notere:

1. **Antall oppgaver svinger 8 ↔ 9.** De fleste settene har 9 oppgaver à 10 poeng (90 poeng). Enkelte nyere sett (des 2025) har 8 oppgaver (80 poeng). Antallet tema er stort sett det samme; forskjellen er om noen småtemaer slås sammen i én oppgave.
2. **Temakatalogen er svært stabil.** Sammenligner man 2019 med 2026, og videre bakover mot forgjengerarkivet (2010–2019), er det de samme byggeklossene som går igjen. Det som varierer, er **hvilke** av småtemaene (kombinatorikk, kongruens, boolsk uttrykk, predikatlogikk) som pakkes inn i oppgave 1, og **hvilke** av de tre grafbaserte temaene (endelig automat, grammatikk, generell graf) som får plass i det aktuelle året. Induksjon og komplekse tall/differenslikninger/matriser er derimot nesten faste.

### Karaktergrenser (fra sensorveiledningene, veiledende)

| Karakter | Prosent |
|---|---|
| A | 90–100 % |
| B | 78–89 % |
| C | 60–77 % |
| D | 50–59 % |
| E | 39–49 % |
| F | 0–38 % |

Sensorene justerer grensene i fellesskap etter gjennomgang for å ta hensyn til settets vanskelighetsgrad. **Konsekvens for studenten:** siden hver oppgave veier likt (10 poeng) og bestått ligger på 39 %, holder det i prinsippet å beherske **4 av 9 temaer godt** for å stå. Bredde lønner seg mer enn dybde i ett enkelt tema — det motsatte av et bevisfag med én dominerende bolk.

---

## 2. Temafrekvens (kvantitativ)

Basert på de **13 dagens-settene med løsningsforslag** (des19, des20, mai21, des21, feb22, des22, feb23, des23, feb24, des24, juni25, des25, juni26). «Antall sett» = i hvor mange av de 13 settene temaet forekommer i minst én (del)oppgave. Poengvekt er anslått ut fra at hver oppgave gir inntil 10 poeng, og at deltemaer i oppgave 1 typisk gir 3–5 poeng hver.

Temaene er delt i to grupper for å synliggjøre skillet som gjør ITF10705 spesielt.

### 2A. Klassiske diskret-matematikk-temaer

| Tema | Antall sett (av 13) | Frekvens | Typisk poengvekt |
|---|---|---|---|
| **Logikk** (sannhetstabell + lovforenkling; oftest begge deler) | 13 | **100 %** | 10–20 (ofte to hele oppgaver) |
| **Relasjoner** (egenskaper, ekvivalens/delvis ordning, Hasse, rettet graf) | 12 | **92 %** | 10 |
| **Mengdelære** (listeform, venndiagram, komplement, kartesisk produkt, potensmengde) | 10 | **77 %** | 5–10 |
| **Endelige automater / formelle språk** (tegn automat, klassifiser grammatikk) | 11 | **85 %** | 10 |
| **Funksjoner** (injektiv/surjektiv/bijektiv/invers) | 9 | **69 %** | 5–10 |
| **Tallsystemer** (binær/heks/desimal-konvertering) | 10 | **77 %** | 3–5 (del av oppg. 1) |
| **Matematisk induksjon** (fullstendig bevis av sumformel) | 5 | **38 %** | 10 |
| **Kombinatorikk** (kombinasjoner/permutasjoner: komité, styre) | 4 | **31 %** | 3–5 (del av oppg. 1) |
| **Predikatlogikk / kvantorer** (∀/∃, oversette til/fra ord, negering) | 5 | **38 %** | 3–5 (del av oppg. 1) |
| **Grafteori (generell)** (isomorfi, eulergraf, nabomatrise, union av grafer) | 4 | **31 %** | 10 |
| **Turing-maskiner** (kjør maskinen trinnvis, angi bånd/tilstand) | 2 | **15 %** ↑ | 5 (del av automatoppgave) |
| **Kongruens / modulær aritmetikk** (a ≡ b mod n) | 2 | **15 %** | 3 (del av oppg. 1) |
| **Boolske uttrykk** (regn ut verdi med logiske operasjoner/De Morgan) | 2 | **15 %** | 3 (del av oppg. 1) |
| **Grafalgoritmer for hånd** (Dijkstra) | 1 | **8 %** | 10 |

### 2B. Anvendte temaer (det som skiller HiØ-varianten fra klassisk diskret matematikk)

| Tema | Antall sett (av 13) | Frekvens | Typisk poengvekt |
|---|---|---|---|
| **Komplekse tall** (rektangulær ↔ eksponentialform, divisjon, tegning i planet) | 13 | **100 %** | 5–10 |
| **Differenslikninger** (2. orden, homogen via karakteristisk likning + inhomogen partikulærløsning) | 12 | **92 %** | 10 (5 + 5) |
| **Matriser / lineære likningssystemer** (Gauss–Jordan, invers, determinant, matriseprodukt, transponering) | 13 | **100 %** | 10 |

### Viktigste funn

1. **Fem ubetingede pilarer — og tre av dem er de anvendte temaene.** Logikk (100 %), komplekse tall (100 %), matriser/likningssystemer (100 %), differenslikninger (92 %) og relasjoner (92 %) er tilnærmet garantert hvert eneste sett. Dette er det mest slående funnet: **en student som ikke behersker komplekse tall, differenslikninger og matriser, kan ikke bestå** — selv om disse ikke er «diskret matematikk» i klassisk forstand. De tre anvendte temaene utgjør alene tre hele oppgaver (opptil 30 av 80–90 poeng).

2. **Ingen dominerende hovedoppgave.** I motsetning til bevisfag der induksjon kan veie 30 poeng, er ITF10705 flatt: hver oppgave gir 10 poeng, og sensorveiledningene fordeler poengene jevnt innad i oppgavene («de tre delspørsmålene teller like mye»). Bredde slår dybde.

3. **Induksjon er *ikke* fagets tyngdepunkt her.** Formelt induksjonsbevis forekommer i 5 av 13 sett (38 %) og gir da 10 poeng — like mye som alle andre oppgaver. Repertoaret er smalt og forutsigbart: alltid en **sumformel** (f.eks. Σ2k = n(n+1); Σ5^k = (5^{n+1}−1)/4; Σ(k−2)(k−1)k), aldri delelighet-, ulikhet- eller sterk-induksjon-varianter som i tyngre emner. Det er en «snill» induksjon.

4. **Differenslikninger er en definerende gjenganger — og de er alltid bygget likt.** 92 % frekvens, praktisk talt alltid som toppoppgave med to deler: (a) løs den **homogene** likningen via karakteristisk andregradslikning (abc-formelen gir røttene λ₁, λ₂ → yₙ = Aλ₁ⁿ + Bλ₂ⁿ), og (b) løs den **inhomogene** med samme venstreside ved å gjette en partikulærløsning på formen til høyresiden (polynom → generelt polynom; K·rⁿ → K·rⁿ). Nesten alle eksemplene har to distinkte reelle røtter; dobbeltrot forekommer (feb24, juni25), komplekse røtter praktisk talt aldri på eksamen selv om formelen står i vedlegget.

5. **Komplekse tall er alltid til stede, og alltid i samme innpakning:** (i) divisjon z₁/z₂ på rektangulær form (gang med kompleks konjugert av nevneren), og (ii) konvertering til/fra eksponentialform reⁱᵠ, der argumentet bestemmes ved cos φ = a/r og **riktig kvadrant** avgjør hvilken av de to kandidatvinklene som er korrekt. Kvadrant-valget er den vanligste feilkilden (se del 5).

6. **De klassiske temaene er stabile, men lettere.** Relasjonsoppgaven er nesten identisk fra år til år (tegn rettet graf → sjekk de fire egenskapene → klassifiser). Logikk er alltid to standardøvelser (sannhetstabell + lovforenkling). Automat/grammatikk-oppgaven veksler mellom «tegn en automat for dette språket» og «klassifiser disse grammatikkene som kontekstfrie/regulære».

7. **Grafteori i klassisk forstand er lavfrekvent.** Generell grafteori (isomorfi, eulergraf, nabomatrise, union) dukker opp i bare 4 av 13 sett, og **Dijkstra kun i ett** (feb23). Trær som eget tema er nesten fraværende. Dette er den største kontrasten mot rene diskret-emner, der grafteori er en pilar.

8. **Turing-maskiner er en voksende småpilar.** Fra 0 i de eldste dagens-settene til å opptre i feb22 og juni25 (og hyppig i forgjengerarkivet 2017–2019). Oppgaven er alltid *kjøring*: gitt fem-tupler og et startbånd, vis hvert trinn og sluttilstand. Bør dekkes.

---

## 3. Oppgavesjangre

De sjangrene som faktisk går igjen, med sensorens foretrukne framgangsmåte og presisjonsnivå.

### A. Tallsystem-konvertering
- **Krav:** Konverter mellom titallssystem, binært og heksadesimalt. Metode er fritt valgt (gjentatt divisjon med rest; posisjonsverdier; fire-og-fire bit ↔ ett heks-siffer). Sensorveiledningen understreker at *ingen bestemt metode kreves* — bare korrekt svar med synlig framgangsmåte.
- **Frekvens:** 77 %, alltid del av oppgave 1.

### B. Boolsk uttrykk / kongruens / predikatlogikk (oppgave-1-sekken)
- **Krav:** (i) Regn ut verdien av et boolsk uttrykk med ·, +, og komplement, ev. via De Morgan. (ii) Sjekk om a ≡ b (mod n) ved å teste om n | (a − b). (iii) Oversett mellom kvantifisert utsagn (∀x, ∃x med et predikat) og vanlig norsk, og angi sannhetsverdi; ev. neger et kvantifisert utsagn.
- **Frekvens:** hver av disse 15–38 %; minst én av dem er nesten alltid i oppgave 1.

### C. Kombinatorikk
- **Krav:** Skille **ordnet vs. uordnet** og **med vs. uten tilbakelegging** (formelsamlingen i vedlegget gir alle fire formlene). Typisk: «komité på k personer fra n» = uordnet uten tilbakelegging = C(n,k) = n!/((n−k)!k!); «styre med leder/sekretær/kasserer» = ordnet uten tilbakelegging = P(n,k) = n!/(n−k)!. Riktig identifisering av utvalgstype er hele poenget.
- **Frekvens:** 31 %, del av oppgave 1.

### D. Relasjoner
- **Krav:** Fast oppskrift. (1) Tegn relasjonen som rettet graf (løkke = refleksivt par). (2) Sjekk **refleksiv** (alle noder har løkke), **symmetrisk** (piler begge veier overalt), **antisymmetrisk** (ingen par med piler begge veier), **transitiv** (a→b→c medfører a→c), hver med kort begrunnelse — ett moteksempel er nok for «ikke». (3) Klassifiser: refleksiv+symmetrisk+transitiv = ekvivalensrelasjon; refleksiv+antisymmetrisk+transitiv = delvis ordning. (4) Ev. tegn **Hasse-diagram** (fjern løkker → fjern transitive kanter → orient oppover → fjern piler) eller les relasjonen *ut av* et gitt Hasse-diagram (husk å legge til refleksive og transitive par). (5) Ev. angi ekvivalensklasser, eller avgjør totalordning.
- **Frekvens:** 92 %. Den mest forutsigbare oppgaven i faget.

### E. Logikk — sannhetstabell
- **Krav:** Sett opp full sannhetstabell (2ⁿ rader, hjelpekolonner for delutsagn) og avgjør enten **logisk ekvivalens** (sammenlign de to sluttkolonnene) eller **tautologi** (er sluttkolonnen bare S?). Sannhetsverdier skrives S/F (sann/falsk).
- **Frekvens:** ~85 %.

### F. Logikk — lovforenkling
- **Krav:** Forenkle et sammensatt utsagn ved å bruke de **nummererte lovene** i vedlegget, og angi lovnummeret i hvert trinn, helt til uttrykket matcher ett av de oppgitte svaralternativene. Lov 11 (implikasjon: p→q ≡ ¬p∨q) er nesten alltid første trinn. Sensor krever eksplisitt lovreferanse per steg.
- **Frekvens:** ~85 %.

### G. Mengdelære
- **Krav:** To varianter. (1) **Listeform:** regn ut union/snitt/differanse/komplement/kartesisk produkt/potensmengde konkret. (2) **Venndiagram:** tegn og skraver for å illustrere en sammensatt mengde, eller for å *undersøke* om to mengdeuttrykk er like (f.eks. A∆B = (A∪B)−(A∩B)). Ev. lovforenkling av et mengdeuttrykk (samme lover som logikk, høyre kolonne i vedlegget).
- **Frekvens:** 77 %.

### H. Funksjoner
- **Krav:** Begrunn **injektiv** (ulike input → ulike output; ellers moteksempel), **surjektiv** (alle elementer i kodomenet treffes; ellers pek på ett som ikke gjør det), **bijektiv** (begge deler), **inverterbar** (= bijektiv). Kardinalitetsargument brukes ofte: hvis |A| < |B| kan f: A→B ikke være surjektiv.
- **Frekvens:** 69 %.

### I. Endelig automat / formelt språk
- **Krav:** Tre varianter. (1) **Tegn tilstandsdiagram** for en automat som gjenkjenner et gitt språk («inneholder 001 og ender på 0»; «starter 01, slutter 10, minst 4 bit»; «odde antall 1-ere»). Flere gyldige løsninger godtas. (2) **Klassifiser en grammatikk** som kontekstfri / regulær / begge / ingen, ved å sjekke: disjunkte endelige N, T; venstresider = ett symbol fra N (kontekstfri); høyresider på formen λ / ett T-symbol / ett T etterfulgt av ett N (regulær). (3) Gitt grammatikk: avgjør om en streng tilhører språket, og vis avledningen med produksjonsregler; ev. tegn tilsvarende automat.
- **Frekvens:** 85 %.

### J. Komplekse tall
- **Krav:** (1) **Divisjon** z₁/z₂ til rektangulær form: gang teller og nevner med konjugert av nevneren. (2) **Eksponentialform** reⁱᵠ: r = |z| = √(a²+b²); φ fra cos φ = a/r (bruk tabellen med eksakte verdier i vedlegget), og velg **riktig kvadrant** ut fra fortegnene til real- og imaginærdel. (3) Tegn tall i det komplekse planet; konverter eksponential → rektangulær via r(cos φ + i sin φ); addisjon på rektangulær form.
- **Frekvens:** 100 %.

### K. Differenslikning
- **Krav:** (a) **Homogen:** sett opp karakteristisk likning λ² + bλ + c = 0, løs med abc-formelen, skriv yₙ = Aλ₁ⁿ + Bλ₂ⁿ (to reelle røtter), eller yₙ = (A + Bn)λⁿ (dobbeltrot). (b) **Inhomogen** med samme venstreside: yₙ = yₙ^(h) + yₙ^(p); gjett yₙ^(p) på høyresidens form (K₁n+K₀ for polynom; K·rⁿ for eksponensiell), sett inn, bestem konstantene ved koeffisientsammenligning. (c) Ev. bruk **initialbetingelser** til å bestemme A og B.
- **Frekvens:** 92 %.

### L. Matriser og lineære likningssystemer
- **Krav:** Bredt repertoar, alt i vedlegget-fritt: **matriseprodukt** (sjekk at indre dimensjoner stemmer; angi at et produkt *ikke* eksisterer ellers); **determinant** (kofaktorutvikling; udefinert for ikke-kvadratiske); **transponering**; **invers matrise** via [A|I] → [I|A⁻¹]; **løs likningssystem** via Gauss–Jordan til redusert trappeform, eller ved å gange med en oppgitt invers (x = A⁻¹b). Studenten skal kjenne begrepene koeffisientmatrise og totalmatrise.
- **Frekvens:** 100 %.

### M. Matematisk induksjon
- **Krav:** Fullstendig oppsett: **(1) basistrinn** (verifiser minste n eksplisitt — ofte n=0 eller n=1, av og til n=3), **(2) induksjonshypotese** (anta for n=k), **(3) induksjonstrinn** (vis for k+1 ved å splitte av siste ledd og sette inn hypotesen). Alltid en sumformel. Fasiten viser hele algebraen; manglende basistrinn gir trekk.
- **Frekvens:** 38 %.

### N. Turing-maskin / Dijkstra (lavfrekvente)
- **Turing:** Gitt fem-tupler (tilstand, lest symbol → ny tilstand, skrevet symbol, retning) og et startbånd: vis hvert kjøretrinn, hvor maskinen stopper (kombinasjon uten regel), og båndets innhold + sluttilstand. Frekvens 15 %, voksende.
- **Dijkstra:** Kjør algoritmen på en vektet rettet graf, vis nodenes etiketter (avstand, forgjenger) trinn for trinn, oppgi korteste vei. Frekvens 8 % (feb23).

---

## 4. Sensorkrav

Hentet direkte fra de fem sensorveiledningene (2021–2025) og fra de gjennomgående kommentarene i løsningsforslagene.

### Faste metaregler
1. **Poeng gis for grad av korrekt løsning, ikke alt-eller-ingenting.** Sensorveiledningen sier eksplisitt at poengene «skal reflektere i hvilken grad en oppgave er tilfredsstillende løst». Faglæreren har i et løsningsforslag (des22) advart studentene direkte: **ikke skriv bare et svar uten forklaring** — «dersom man gjør en feil men har forklart hvordan man tenker, vil sensorene kunne gi mange poeng, fordi det er forståelsen vi først og fremst er ute etter.»
2. **Alle svar skal begrunnes** — også der oppgaven ikke sier det eksplisitt. Dette står på forsiden av oppgavesettet og gjelder hele veien. Et bart tall uten mellomregning gir lite.
3. **Poengene er jevnt fordelt.** Sensorveiledningene fordeler nesten alltid poengene likt mellom deloppgavene («de tre delspørsmålene teller like mye»). Unntak er differenslikningen (typisk 5 poeng homogen + 5 poeng inhomogen) og enkelte oppgaver med skjev vekt (des25 oppg. 5: 8 poeng induksjon + 2 poeng klassifisering).
4. **Metodefrihet der det er naturlig.** Ved konvertering, mengdeutregning og lignende godtas «alle metoder så lenge svaret er riktig og framgangsmåten vist». Ved automat- og grammatikkonstruksjon godtas flere gyldige svar («det kan finnes andre automater som utfører det samme»).
5. **Angi lovnummer.** I logikk- og mengdeforenkling forventes referanse til de nummererte lovene i vedlegget i hvert steg.

### Hva som skiller karakternivåene
- **Bestått (E, 39 %):** klare korrekte utregninger på de mekaniske temaene — tallkonvertering, én matriseoperasjon, homogen differenslikning, relasjonsegenskaper, én sannhetstabell. Med fem lette oppgaver rimelig løst er man over grensen.
- **Midtsjikt (C/D):** komplett differenslikning (også inhomogen del), komplekse tall med riktig kvadrant, invers matrise / Gauss–Jordan uten regnefeil, korrekt klassifisering av grammatikk, funksjonsbegrunnelser.
- **Toppsjikt (A/B):** feilfri gjennomføring over hele bredden, inkludert et fullstendig og ryddig induksjonsbevis, riktig valgt partikulærløsning i den inhomogene differenslikningen, presis automatkonstruksjon, og korrekt Turing-kjøring. Toppkandidaten mister ikke lettpoeng på slurv i konverteringer og matrisearitmetikk.

---

## 5. Typiske feil

Eksplisitt eller implisitt kommentert i løsningsforslagene.

1. **Feil kvadrant i komplekse tall.** cos φ = a/r gir *to* kandidatvinkler; man må bruke fortegnene til real- og imaginærdel til å velge riktig kvadrant. Den vanligste feilen i faget. (Faglæreren kommenterer dette i flere sett.)
2. **Feil skrivemåte for eksponentialform.** 2e⁻ⁱᵖⁱ/² er korrekt; å skrive 2eⁱ⁻ᵖⁱ/² er feil, fordi det tolkes som 2eⁱ·e⁻ᵖⁱ/² (regelen e^{a+b}=e^a e^b). Eksponenten må stå som ett uttrykk.
3. **Forveksle antisymmetrisk og «ikke symmetrisk».** Antisymmetrisk = ingen par med piler begge veier (bortsett fra løkker); det er *ikke* det samme som «ikke symmetrisk». En relasjon kan være både symmetrisk og antisymmetrisk (kun løkker).
4. **Glemme refleksive/transitive par når man leser relasjon ut av et Hasse-diagram.** Et Hasse-diagram viser bare umiddelbare forgjengere; hele relasjonen inneholder også alle refleksive par og alle par som følger av transitivitet.
5. **Feil partikulærløsning i inhomogen differenslikning.** Gjettet må ha *samme form* som høyresiden (polynom → generelt polynom av samme grad; K·rⁿ → K·rⁿ), og settes inn i den *fulle* likningen for å bestemme konstantene. Å bare gjette et tall når høyresiden er lineær er en klassisk feil.
6. **Regne matriseprodukt som ikke eksisterer.** A·B krever at antall kolonner i A = antall rader i B. Studenten må sjekke dimensjonene og *si* om produktet ikke eksisterer, ikke tvinge fram et svar. Tilsvarende: determinant er udefinert for ikke-kvadratiske matriser.
7. **Fortegns- og regnefeil i Gauss–Jordan / kofaktorutvikling.** Lange utregninger med mange fortegn; kandidater taper lettpoeng på aritmetikk selv når metoden er riktig. (Anbefaling i fasiten: sett løsningen inn i likningssystemet for å kontrollere.)
8. **Bare skrive svaret uten begrunnelse.** Faglæreren advarer eksplisitt: uten forklaring er man avhengig av å treffe *helt* riktig for å få poeng; med forklaring får man delpoeng ved feil.
9. **Manglende basistrinn i induksjon.** Uten eksplisitt verifisert minste n er beviset ufullstendig, uansett hvor riktig induksjonstrinnet er. Merk at minste n *ikke alltid* er 1 (kan være 0 eller 3).
10. **Blande utvalgstypene i kombinatorikk.** Ordnet (styre med roller) vs. uordnet (komité) — feil valg gir feil formel. Tabellen i vedlegget hjelper, men bare hvis man klarer å klassifisere situasjonen.
11. **Klassifisere grammatikk feil.** Vanlige fallgruver: et symbol fra T på *venstre* side (ikke engang kontekstfri); høyreside på formen «T etterfulgt av N etterfulgt av T» (kontekstfri, men ikke regulær). Rekkefølgen T-så-N på høyresiden er kravet for regulær.
12. **Feil om surjektivitet ved ulik kardinalitet.** Argumentet skal være at |A| < |B| gjør surjektivitet umulig — *ikke* det ugyldige argumentet at «en funksjon ikke kan være både injektiv og surjektiv».

---

## 6. Formelsamling og hjelpemidler

Til hjelpemidlene hører **to A4-ark egne notater (fire sider) + godkjent kalkulator**. I tillegg deler faglærer ut faste **vedlegg** sammen med oppgavesettet. Basert på arkivet inneholder vedleggene:

**Vedlegg: Lover for logikk og mengder** (`lover.pdf`). En tabell med de klassiske lovene, nummerert 1–12, i to parallelle kolonner (logikk og mengder):
1. Assosiative, 2. Kommutative, 3. Distributive, 4. De Morgans, 5. Idempotens, 6. Absorpsjon, 7. Dobbel negasjon/involusjon, 8. Invers­lover (p∨¬p ≡ S; A∪Ā = U), 9. Identitet, 10. Dominans, 11. **Implikasjon** (p→q ≡ ¬p∨q), 12. **Kontrapositiv** (p→q ≡ ¬q→¬p). Nederst: **inklusjons–eksklusjonsprinsippet** for tre mengder. Det er disse lovnumrene løsningsforslagene refererer til.

**Vedlegg: Kombinatorikk og differenslikninger** (`hjelpeark3.pdf`):
- **Kombinatorikk-tabell** (ordnet/uordnet × med/uten tilbakelegging): nᵏ; (n+k−1)!/(k!(n−1)!); n!/(n−k)!; n!/((n−k)!k!).
- **Differenslikninger** (2. orden, homogen, konstante koeffisienter), alle tre tilfellene av karakteristisk likning: to reelle røtter → yₙ = Aλ₁ⁿ + Bλ₂ⁿ; én (dobbel) reell rot → yₙ = Aλⁿ + Bnλⁿ; to komplekse røtter reⁱ^{±φ} → yₙ = rⁿ(A cos nφ + B sin nφ).

**Vedlegg: Eksakte trigonometriske verdier.** En tabell med sin/cos for standardvinkler (0, π/6, π/4, π/3, π/2, 2π/3, 3π/4, …), brukt til å bestemme argumentet i komplekse tall uten kalkulator.

**Konsekvenser for læreboka:**
- **Studenten trenger ikke pugge lovene eller differenslikningsformlene** — de deles ut. Læreboka bør derfor legge vekt på **å bruke** dem riktig (velge riktig lov, identifisere hvilket differenslikningstilfelle man er i), ikke på memorering.
- **Læreboka bør trene mot presis lovreferanse per steg**, siden det er slik fasiten skårer.
- **Notatarkstrategi:** to A4-ark er nok til å ta med definisjoner (relasjonsegenskaper, injektiv/surjektiv, krav til regulær/kontekstfri grammatikk), oppskrifter (Gauss–Jordan, invers via [A|I], komplekst-tall-kvadranter) og et par gjennomregnede eksempler. En «notatark-mal» er et konkret, høyverdifullt bilag til boka.

---

## 7. Prioritering og prognose

### Nivå 1 — må beherskes perfekt (nær garantert, høy vekt)
1. **Komplekse tall** — 100 %. Divisjon til rektangulær form; eksponentialform med riktig kvadrant. Kvadrant-valget er den vanligste feilen — tren det spesielt.
2. **Matriser og lineære likningssystemer** — 100 %. Matriseprodukt (dimensjonssjekk), determinant (kofaktor), invers via [A|I], Gauss–Jordan til redusert trappeform. Aritmetisk nøyaktighet er alt.
3. **Differenslikninger** — 92 %. Homogen (karakteristisk likning) + inhomogen (partikulærløsning på høyresidens form) + initialbetingelser. Den mest «lærbare» av toppoppgavene — ren oppskrift.
4. **Logikk** — 100 %. Full sannhetstabell (ekvivalens/tautologi) *og* lovforenkling med nummererte lover. Ofte to hele oppgaver.
5. **Relasjoner** — 92 %. De fire egenskapene, klassifisering, Hasse-diagram begge veier. Fagets mest forutsigbare oppgave.

### Nivå 2 — må kunne (avgjør C→A)
6. **Endelige automater / grammatikker** — 85 %. Tegn automat for et språk; klassifiser grammatikk (kontekstfri/regulær) med presise kriterier; avled strenger.
7. **Mengdelære** — 77 %. Listeform-utregninger og venndiagram-argumenter; komplement, kartesisk produkt, potensmengde.
8. **Funksjoner** — 69 %. Injektiv/surjektiv/bijektiv/inverterbar med korrekt begrunnelse og kardinalitetsargument.
9. **Tallsystemer + oppgave-1-sekken** — 77 % / varierende. Binær/heks/desimal-konvertering; ett av: boolsk uttrykk, kongruens mod n, predikatlogikk/kvantorer, kombinatorikk. Lettpoeng som ikke må mistes.

### Nivå 3 — bør kunne (lavfrekvent, men differensierer og fyller pensum)
10. **Matematisk induksjon** — 38 %. Sumformel med komplett basistrinn/hypotese/trinn. Når den er med, gir den fulle 10 poeng.
11. **Kombinatorikk** — 31 %. Ordnet vs. uordnet, med/uten tilbakelegging (formler i vedlegget).
12. **Grafteori (generell)** — 31 %. Isomorfi, eulergraf, nabomatrise, union.
13. **Turing-maskiner** — 15 %, voksende. Trinnvis kjøring fra fem-tupler.
14. **Dijkstra, kongruens som eget tema, boolske uttrykk** — 8–15 %. Beredskap.

### Prognose for neste ordinære eksamen
Forvent **8–9 oppgaver à 10 poeng (80–90 poeng totalt)**, hver på ett tema, jevnt vektet. Med svært høy sikkerhet vil settet inneholde: **én oppgave komplekse tall**, **én differenslikning** (homogen + inhomogen), **én matrise-/likningssystem-oppgave**, **én relasjonsoppgave**, **to logikkøvelser** (sannhetstabell + lovforenkling), **én automat- eller grammatikkoppgave**, og **en oppgave 1** som blander tallkonvertering med to–tre av {kombinatorikk, kvantorer, boolsk uttrykk, kongruens}. I tillegg sannsynligvis **én av**: induksjonsbevis, funksjonsoppgave, mengde-/venndiagram, generell graf eller Turing-maskin. Studenten som behersker de fem nivå-1-pilarene mekanisk feilfritt (særlig de anvendte tre) og tar lettpoengene i oppgave 1, ligger trygt i C–A-sjiktet; svikt i to av de tre anvendte pilarene setter selve ståkarakteren i fare.

---

## 8. Overlapp med eksisterende fag

ITF10705 har **stor faglig overlapp med andre diskret-matematikk-emner for de klassiske temaene**, men skiller seg ut ved de tre anvendte temaene. Dette har direkte konsekvenser for gjenbruk av lærebokstoff.

### Overlapp med MA0301 (NTNU, Elementær diskret matematikk)
Overlappende kjerne: **mengdelære, logikk (sannhetstabell, lover, kvantorer), relasjoner (ekvivalens/delvis ordning/Hasse), funksjoner (injektiv/surjektiv/bijektiv), kombinatorikk, endelige automater/formelle språk, og induksjon.** For disse temaene kan kapittelstoff og oppgavebank i stor grad deles.

Men **profilen er markant ulik**:
- **MA0301 er et bevisfag** (induksjon vekter opptil 30 poeng; grafteori er en pilar med planaritet, Eulers formel, Kuratowski, gradsummer; bevis ved motsigelse og koeffisientsammenligning). **ITF10705 er et utregningsfag** (jevn 10-poengsvekting, induksjon bare 38 % og alltid enkel sumformel, grafteori lavfrekvent uten planaritet/Kuratowski).
- **ITF10705 har tre anvendte temaer som MA0301 mangler helt:** komplekse tall, differenslikninger (løst via karakteristisk likning — i MA0301 opptrer rekurrenslikninger *aldri* løst slik, bare verifisert med induksjon), og matriser/lineære likningssystemer.
- Boolsk algebra (aksiombevis) er et MA0301-tema; i ITF10705 er «boolsk» redusert til å regne ut verdien av et uttrykk.

Gjenbruksstrategi: del teori og oppgaver for de klassiske temaene, men skriv **ITF10705-spesifikke, oppskriftsorienterte** varianter (mindre bevistrykk, mer «slik regner du») og **helt nye kapitler** for komplekse tall, differenslikninger og matriser.

### Overlapp med TMA4135 (NTNU, Matematikk 4D) og lignende
De **anvendte** temaene i ITF10705 overlapper delvis med ingeniørmatematikk-emner: komplekse tall og lineær algebra (matriser, likningssystemer) er standardstoff i innføringsmatematikk for ingeniører/informatikere, og differenslikninger via karakteristisk likning er strukturelt identisk med løsning av lineære andreordens differensiallikninger. Stoff om komplekse tall og matriser kan derfor delvis hentes fra et matematikk-for-ingeniører-kapittelbibliotek — men på et lavere, mer mekanisk nivå enn i et fullt kalkulus-/lineæralgebra-emne (ingen egenverdier, ingen kompleks analyse, kun 2×2/3×3-matriser og andreordens differenslikninger).

### Overlapp med DAPE1300 (OsloMet, Diskret matematikk)
Delvis overlapp på den **klassiske** kjernen (logikk, mengder, relasjoner, funksjoner, kombinatorikk, grafer, tallteori). OsloMet-varianten er en mer standard diskret matematikk, med mer tallteori/modulær aritmetikk og grafteori og mindre av det anvendte (komplekse tall/differenslikninger/matriser) enn HiØ-emnet. Oppgaver på tallsystemer, kongruens, relasjoner, logikk og kombinatorikk kan deles; de anvendte HiØ-temaene har mindre motstykke der.

### Samlet vurdering av gjenbruk
- **Del fritt (klassisk diskret kjerne):** logikk, mengder, relasjoner, funksjoner, kombinatorikk, automater/språk, induksjon, tallsystemer/kongruens — med MA0301 og DAPE1300, men i en lettere, utregningsorientert innpakning.
- **Del delvis (anvendt):** komplekse tall og matriser/lineære likningssystemer med ingeniør-/innføringsmatematikk (TMA4135-familien), på grunnleggende nivå.
- **Skriv unikt / gjenbruk internt HiØ-stil:** differenslikninger via karakteristisk likning (homogen + inhomogen), Turing-maskin-kjøring, og den karakteristiske HiØ-oppgavestilen «tegn rettet graf → sjekk fire egenskaper → klassifiser». Den *anvendte breddeprofilen* er det som gjør ITF10705 til et eget fag og bør styre bokas tyngdepunkt.

---

## Kildeliste

Alle filer ligger i `~/Desktop/Eksamner/HiØ/ITF10705-diskret-matematikk/` (98 filer).

**Dagens format — 13 eksamenssett med løsningsforslag, lest grundig:**
des19, des20, mai21, des21, feb22, des22, feb23, des23, feb24, des24, juni25, des25, juni26 (`dm_eksamen_*_losning.pdf`; de fleste også med oppgavesett `dm_eksamen_*.pdf`).

**Sensorveiledninger (eksakt poeng-/karakterinformasjon), lest grundig:**
`dm_sensorveiledning_des21/des22/des23/des24/des25.pdf`.

**Eldre arkiv (forgjengeremne, kode `mit_eksamen`), skummet for temaregistrering:**
des10, des11, des12, des13, des14, des15, des16, des17, jan19 (med løsningsforslag). Bekrefter at temakatalogen (differenslikninger, komplekse tall, matriser, relasjoner, automater, grammatikker, grafer, Turing, induksjon, mengder, logikk) har vært stabil i over 15 år.

**Vedlegg som deles ut på eksamen:** `lover.pdf` (nummererte lover for logikk/mengder + inklusjon–eksklusjon), `hjelpeark3.pdf` (kombinatorikk- og differenslikningsformler), samt tabell med eksakte sin/cos-verdier.

**Temadokumenter (faglærers støttenotater, brukt til å forstå fagets dybde):** `differensligninger.pdf`, `bevis_for_losning_inhomogene_differensligninger.pdf`, `inhomogen_differensligning_eksempel.pdf`, `dijkstras_algoritme.pdf`, `diskrete_funksjoner.pdf`, `turingmaskiner.pdf`, `logikk.pdf`. I tillegg 12 øvinger med løsning (`dm_oving1–12_h24`) og kapittelvise oppgave-/fasitsamlinger (`oppgaver_kap*`, `fasit_kap*`).

**Merknader:**
- **Én faglærer, stabilt format.** Hele dagens arkiv er skrevet av Christian F. Heide. Formatet (8–9 jevnt vektede oppgaver, kortsvar/utregning, faste vedlegg) har vært uendret 2019–2026, og temakatalogen har vært stabil helt tilbake til 2010.
- **Opphavsrett.** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller løsningsforslag er gjengitt ordrett. Standardnotasjon, definisjoner og klassiske resultater er allmenn faglig kunnskap.
