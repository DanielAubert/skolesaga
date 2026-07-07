# Bokskjelett: TDT4171 Metoder i kunstig intelligens — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alle frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (8 ordinære NTNU-sett med offisielle løsningsforslag, vår
> 2015 – vår 2024; emneansvarlig **Helge Langseth**, nyere fasiter v/ **Xavier F.C.
> Sánchez Díaz**; pensum Russell & Norvig — *Artificial Intelligence: A Modern
> Approach* (AIMA)). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene
> der (teori / drill / øvingseksamen) er obligatoriske og gjentas ikke i sin helhet
> her. **All notasjon og alle algoritmenavn følger AIMA** (det er bokstandard fordi
> oppgavene og fasitene gjør det; fasiten refererer sidetall, f.eks. forward-
> algoritmen «s. 485»). Alle oppgaver, tall, Bayes-nett, HMM-tabeller, beslutnings-
> nett, MDP-verdener og innpakninger i den ferdige boka skal være **nyskrevne**
> (opphavsrett): algoritmenavn, standardnotasjon og faglige definisjoner er allmenn
> faglig notasjon, men ingen oppgavetekster eller løsningsforslag fra reelle sett
> gjengis.
>
> **Forholdet til TDT4136:** TDT4171 er oppfølgeren til *TDT4136 Introduksjon til
> kunstig intelligens*, deler pensumbok (AIMA) og eksamensform (4 t, kode D, negativ
> retting), men **oppgavetypene overlapper nesten ikke**. Der TDT4136 dekker
> deterministisk problemløsning (søk, CSP, logikk, planlegging, adversarielt søk),
> dekker TDT4171 **resonnering under usikkerhet, sekvensielle beslutninger og
> maskinlæring**. Den eneste broen er den konseptuelle rammen om *rasjonelle agenter*
> (Turing, svak/sterk KI, nyttemaksimering) som går igjen i begge fags T/F-batterier.
> **Denne boka resirkulerer IKKE TDT4136-stoff** — den bygger sannsynlighets- og
> læringsapparatet fra grunnen. Søk (A\*), CSP, logikk/resolusjon, adversarielt søk,
> PDDL-planlegging og spillteori **hører ikke hjemme her** (forutsettes kjent; maks
> en kort bro via agent-/rasjonalitetsrammen i Del 9).

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tdt4171` |
| Tittel | **TDT4171 Metoder i kunstig intelligens (NTNU)** |
| Institusjon | **NTNU** (opprettes i `institusjoner.ts` ved wiring — ny institusjon; deles med tdt4120/tdt4136 når de bygges) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (kvantitativt fag med faste, gjentakende «kjør/tegn metoden for hånd»-mønstre + store konseptuelle T/F-batterier) |
| Antall kapitler | **34** (2 eksamenskart/strategi + 28 tema/drill + 4 eksamenstrening) |
| Estimert totaltid | **≈ 2 570 min ≈ 43 timer** (inkl. 3 firetimers øvingseksamener) |
| Quiz totalt | **616** (krav ≥500) |
| Flashcards totalt | **554** (krav ≥500) |
| Prøver | **36** (4 per temadel 1–9) + **3 øvingseksamener** (kap. 10.2–10.4) |

**Pitch (én avsnitt):** TDT4171 har et påfallende stabilt eksamensskjelett — det er
**innpakningen** som endrer seg, ikke innholdet. Vurderingen er én **firetimers
skoleeksamen** (100 %, A–F) med **hjelpemiddelkode D — bestemt, enkel kalkulator**,
ingen trykte eller håndskrevne hjelpemidler. Oppgaveteksten er på **engelsk**;
besvarelsen kan skrives på norsk eller engelsk. Eksamen er **ikke rent flervalg**,
men en blanding av tre svartyper: (1) **store auto-rettede sant/usant- og flervalgs-
batterier med NEGATIV RETTING** om KI-grunnlag, sannsynlighet, Bayes-nett-semantikk,
HMM-inferens, MDP og læring; (2) **«regn/tegn metoden»-oppgaver (fritekst, ofte
tegnes på papir)** — konstruér et Bayes-/beslutningsnett, spesifiser en HMM, kjør
**forward-filtrering** eller **verditerasjon** steg for steg, regn **forventet nytte /
VPI** — dette er den karaktergivende kjernen; (3) **korte teori-/drøftespørsmål**
(forklar CBR-syklusen, hvorfor RL ≠ MDP-løsning, hva «dyp» betyr i deep learning).
To formatæraer finnes i arkivet: **klassisk 4-oppgavers** (t.o.m. ~2019, negativ
retting +2/−3) og **moderne Inspera** (2020→, ~9 nummererte oppgaver, mange auto-
rettede ledd +1 %/−1 % rundt en fritekst-kjerne). Boka bygges mot **2021–2024-
formatet**. Fem temaer er 100 %-gjengangere (dukker opp i *hvert eneste sett*):
**d-separasjon / (betinget) uavhengighet**, **Bayes-nett-struktur + inferens ved
enumerasjon**, **HMM-filtrering (forward)**, **KI-grunnlag (T/F)** og **CBR-syklusen
(R⁴)**. Bredden er selve eksamensformen — du kan ikke droppe et av de fem. Denne boka
driller derfor bredden systematisk, med to kalibrerte ferdigheter: (1) å **kjøre
pensumalgoritmene feilfritt for hånd med synlig symbolsk mellomregning**, og (2) å
**disiplinert la usikre T/F-ledd stå blankt** fordi negativ retting gjør gjett med
negativ forventning direkte skadelig. Ryggraden — d-separasjon — får egen drilldel,
og HMM-filtrering (tyngst vektet, 20 % i V2024) får egen stor del.

**Kritisk stilregel (gjelder HELE boka) — «vis symbolsk form FØR tall»:**
1. **Poeng for korrekt utregningsflyt, ikke for tallet.** Sensors viktigste
   metaregel i filtrering/inferens/verditerasjon: **vis den symbolske formen
   (variabler/fordelinger/summasjoner) FØR du setter inn tall.** Fasiten gir **full
   uttelling for korrekt flyt selv om tallene er litt feil**, men **NULL hvis flyten
   er helt gal** (V2024 4.3 eksplisitt). Hvert regnende løsningsforslag i boka viser
   derfor apparatet: prediksjon $\rightarrow$ oppdatering $\rightarrow$ normalisering
   for filtrering; teller/nevner som summer over skjulte variabler for enumerasjon;
   Bellman-oppdatering med strategi per iterasjon for verditerasjon.
2. **Rund til to desimaler** når oppgaven ber om det (V2024: «1.236 → 1.24»), og
   følg oppgitt formatinstruks bokstavelig («én desimal, f.eks. −2.3»).
3. **Bygg Bayes-nettet «riktig vei» (årsak → virkning)** slik at en domeneekspert
   lett kan oppgi CPT-ene — dette er et **eksplisitt sensurkriterium**. Riktig
   kantretning teller mest; ekstra forsvarbare kanter straffes ikke; **null poeng
   bare når studenten ikke forstår hva et Bayes-/beslutningsnett er.**
4. **Negativ retting → disiplinert blanking.** T/F- og d-separasjon-ledd har +1/−1
   (moderne) eller +2/−3 (klassisk), 0 for blankt, gulv 0 for oppgaven; noen blokker
   er alt-eller-intet. Et gjett med negativ forventning trekker ned. Boka lærer
   studenten å *kjenne* når hun er sikker nok — ikke bare stoffet. `options[0]` =
   riktig svar (runtime stokker).
5. **Fasiten er raus med beslektede korrekte svar.** Særlig nettverkskonstruksjon,
   utility-design, HMM-tabellformat, CBR-forklaringer og etikk-lister — fasiten viser
   bare *ett* eksempel og sier det eksplisitt. Ta likevel **hovedpoenget først** —
   delvis uttelling er regelen; list-oppgaver gis proporsjonalt med antall gyldige
   punkter.
6. **AIMA-notasjon er fasit.** Bruk nøyaktig AIMA-formene ($P(X\mid\text{foreldre}(X))$,
   $\alpha$, forward-algoritmen, Bellman $U^*(s)$, d-separasjon, MEU, VPI, R⁴).
   Engelsk fagterm kan gis i parentes ved første forekomst; **ved tvil om oversatte
   begreper regnes den engelske teksten som fasit.**

**Kritisk pensumregel (INGEN TDT4136-stoff — skal stå tydelig i Del 0):**
Søk (uinformert/A\*), CSP/AC-3, logikk/resolusjon, adversarielt søk (minimax/alfa-
beta), PDDL-planlegging og spillteori er **forgjengerfaget TDT4136** og testes
**ikke** i TDT4171. De skal **ikke** ta plass i boka annet enn som en kort bro via
rasjonalitets-/agentrammen (Del 9). Dette er den største fellen for en naiv analyse:
en student som pugger TDT4136-arket kaster bort tid. Alt regneapparatet i TDT4171
(sannsynlighet, betinget uavhengighet, forventet nytte, dynamisk filtrering,
gradientnedstigning) er nytt.

**Kritisk pensumregel (nytt tilskudd SKAL med, tross lav frekvens):** **NLP / word
embeddings** dukket opp i V2024 (8 %) — motsatt av TDT4136, der NLP *forsvant*.
Lavfrekvent (13 %) men i klar vekst (LLM-bølgen), og treffer emneansvarliges profil.
Dekkes derfor eksplisitt (Del 9), men kort.

**Avvik fra DNA/README-malen (dokumentert):**
- **«Symbol- og formelliste» → «Notasjons- og algoritmeliste».** README krever en
  `collapsible` «Symbol- og formelliste» per delkapittel. For dette faget er det
  presise apparatet både **sannsynlighetsnotasjon OG algoritmer**. Blokken heter
  derfor **«Notasjons- og algoritmeliste»** og lister ALT delkapitlet bruker: (i)
  **sannsynlighetsnotasjon** ($P(a)$, $P(a\mid b)=\frac{P(a\wedge b)}{P(b)}$,
  $P(X_1,\dots,X_n)=\prod_i P(X_i\mid\text{foreldre}(X_i))$, normaliseringskonstant
  $\alpha$, forventning $\sum$); (ii) **hver algoritme kapitlet kjører**, med
  inn/ut-kontrakt i én linje (f.eks. «forward-algoritmen — inn: $P(S_0)$, transisjons-
  og sensormodell, observasjonssekvens; ut: $P(S_t\mid e_{1:t})$; prediksjon →
  oppdatering → normaliser»); (iii) **modell-/beslutningsnotasjon** brukt
  ($S_t$/$E_t$, transisjonsmodell $P(S_t\mid S_{t-1})$, sensormodell
  $P(E_t\mid S_t)$, EU, VPI, MDP-tuppel $\langle S,A,P,R,\gamma\rangle$, $U^*$, $\pi^*$,
  $Q(s,a)$, entropi/informasjonsgevinst, gradient $2(-x_i(t-o))$). Regelen «per
  delkapittel, ikke arv fra tidligere» beholdes. Unntak kun for helt notasjonsfrie
  kapitler (CBR-teorikapitlet, etikk-kapitlet).
- **`theorem`-blokker brukes for algoritme-kontrakter OG nøkkelresultater.** Der DNA-en
  bruker `theorem` for matematiske resultater, brukes den her for (a) **algoritme-
  kontrakter**: hvert regnekapittel har en `theorem`-blokk med algoritmen (nyskrevet
  AIMA-stil pseudokode/prosedyre) — forward-algoritmen, inferens ved enumerasjon,
  Bellman-verditerasjon, MEU-evalueringsalgoritmen, ID3-splitting, gradient descent;
  og (b) **nøkkelresultatene** som skal sitte i ryggmargen: d-separasjonsreglene
  (kjede/gaffel blokkeres når midtnode observert; collider blokkert som standard, men
  **aktiv når collider eller etterkommer er observert**); faktorisering etter
  foreldre; Bellman-likningen; at $U_t(s)$ er ikke-avtakende med ikke-negativ $R$ og
  $\gamma\in(0,1)$; at endring av $\gamma$ **kan** endre optimal policy; at konsistent
  perceptron ikke kan representere ikke-lineært separerbare funksjoner (XOR).
- **Flashcards kalibreres som begrep ↔ definisjon/egenskap ↔ formel.** Flashcards
  genereres KUN fra toppnivå `definition`-blokker med `title`. For dette faget parer
  hvert kort et **navn** (begrep/algoritme/inferenstype/nodetype/fasit-standpunkt) med
  presis **definisjon + formel/egenskap** — f.eks. «filtrering →
  $P(S_t\mid e_{1:t})$»; «glatting → $P(S_k\mid e_{1:t})$, $0\le k<t$, kostnad lineær
  i $t$»; «collider (v-struktur) → blokkert som standard, aktiv når noden *eller en
  etterkommer* er observert»; «tilfeldighetsnode → oval; beslutningsnode → rektangel;
  nyttenode → diamant, ingen barn»; «CBR R⁴ → Retrieve, Reuse, Revise, Retain»;
  «rasjonell agent ≠ handle som mennesker → TRUE». Fordi eksamen er kode D er dette
  puggematerialet, og de mange navngitte definisjonene gjør faget begrepsrikt (jf.
  flashcard-tettheten i §5).
- **Quiz kalibreres som T/F-/faktakontroll (MC).** Den reelle eksamen har store T/F-
  batterier med negativ retting — men plattformens quiz er MC med entydig fasit. Quiz
  brukes derfor til å drille **fasit-standpunktene** («stemmer denne påstanden?» ja/nei
  gjort om til MC), definisjonsgjenkjenning, «hvilken inferenstype er
  $P(S_{t+k}\mid e_{1:t})$?», «er disse to variablene d-separert gitt X?». Selve
  regne-**presisjonen** (filtrering, enumerasjon, verditerasjon, VPI) trenes i
  `exercise`- og drillkapitlene (med `solution` + `hints`). Den strategiske disiplinen
  ved **negativ retting** (svar bare når du er sikker) trenes eksplisitt i kap. 0.2 og
  drilles i kap. 10.1.
- **T/F-strategien ligger i Del 0, ikke i eksamenstreningen.** Fordi negativ retting
  **styrer hele eksamensatferden** (ikke bare sluttspurten), får den disiplinerte
  blankestrategien et eget kapittel helt foran (0.2). Det store T/F-batteri-drillet
  (på tvers av alle temaer) ligger i eksamenstreningen (10.1).
- **Drillkapitler ligger i sine temadeler** (ikke samlet i siste del), fordi hver
  høyfrekvente regnesjanger (d-separasjon, enumerasjon, filtrering, VPI, verditerasjon)
  må drilles umiddelbart etter teorien. Del 10 beholder T/F-batteriet og de komplette
  øvingseksamenene.
- **Kapittelantall (34)** ligger i øvre halvdel av DNA-veiledningen (20–35): bevisst,
  frekvensdrevet — fem 100 %-temaer + fire nivå-2-temaer + tre nivå-3-temaer, der de
  to tyngste (d-separasjon, HMM) får egen utvidet del med drill. Ikke komprimerbart
  uten å underdekke et garantert tema.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): sannsynlighetsgrunnlaget først,
så Bayes-nett-struktur og d-separasjon (ryggraden), så inferens ved enumerasjon, så
HMM/filtrering, så beslutningsteori, så sekvensielle beslutninger (MDP/RL), så
maskinlæring, så CBR, så KI-grunnlag/etikk/NLP, til slutt eksamenstreningen.
Frekvensen styrer *omfanget* — de to tyngste 100 %-temaene (d-separasjon, HMM) får
utvidet del med drill; nivå-2/3-temaer får kompaktere kapitler. `sectionNames`
(bokforsiden) settes fra kolonne 2.

| Del | `sectionName` (bokforsiden) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart og T/F-strategi | 2 | Prioriteringsverktøyet + disiplinert blanking under negativ retting (styrer hele eksamen). Rommer «ingen TDT4136-stoff»-advarselen. |
| 1 | Sannsynlighetsgrunnlaget | 3 | **Simultanfordeling 63 %** (nivå 3) men fundament for alt. Marginalisering, betinget, Bayes' regel, (betinget) uavhengighet → 2 teori + drill. |
| 2 | Bayes-nett: struktur, konstruksjon og d-separasjon | 4 | **d-separasjon 100 %, størst poengvolum** + **struktur/faktorisering 100 %** (nivå 1). Ryggraden — egen drilldel. |
| 3 | Inferens i Bayes-nett (enumerasjon) | 2 | **Inferens ved enumerasjon 100 %** (nivå 1). Full simultan, posterior med utsummering av skjulte → 1 teori + drill. |
| 4 | HMM og filtrering over tid | 4 | **HMM-filtrering 100 %, tyngst vektet (20 %)** (nivå 1). Modell, forward-algoritmen, inferenstyper, drill → egen stor del. |
| 5 | Beslutningsteori: beslutningsnett, MEU og VPI | 3 | **Beslutningsnett/VPI 75 %** (nivå 2). Nodetyper, additiv utility, MEU-algoritme, VPI-differanse → 2 teori + drill. |
| 6 | Sekvensielle beslutninger: MDP, verditerasjon og RL | 4 | **MDP/verditerasjon 75 %** + **RL/Q-læring 63 %** (nivå 2). Bellman, verditerasjon, RL vs. MDP, deep Q → 3 teori + drill. |
| 7 | Maskinlæring: trær, nevrale nett og metodevalg | 4 | **Nevrale nett 88 %** + **beslutningstrær 75 %** + **klassifikatorvalg 50 %** (nivå 2/3). ID3, gradient descent, dyp læring/CNN, metodikk. |
| 8 | Case-based reasoning (CBR) | 1 | **CBR 100 %, NTNU-signatur** (nivå 1, men som teori/drøfting → billige sikre poeng). R⁴-syklusen, når CBR slår dyp læring. |
| 9 | KI-grunnlag, etikk og NLP | 3 | **KI-grunnlag T/F 100 %** (nivå 1) + **etikk-liste** + **NLP 13 %↑ (nytt)**. Fasit-standpunkt utenat; broen tilbake til TDT4136. |
| 10 | Eksamenstrening | 4 | T/F-batteri-drill (negativ retting, på tvers) + **3 komplette øvingseksamener** (klassisk + moderne Inspera + regn/tegn-tungt). |

**Avvik fra DNA-makrostrukturen (dokumentert):** DNA-en legger alle sjangerkapitlene
i siste del. Her ligger hvert temas drillkapittel (1.3 simultanfordeling, 2.4
d-separasjon, 3.2 enumerasjon, 4.4 filtrering, 5.3 beslutningsnett/VPI, 6.4
verditerasjon) inne i sin temadel, fordi hver er en 63–100 %-gjenganger som må drilles
umiddelbart etter teorien. Del 10 beholder T/F-batteriet (10.1) og de tre komplette
øvingseksamenene (10.2–10.4). T/F-strategien (0.2) ligger i Del 0 fordi negativ retting
styrer hele eksamensatferden fra første ledd.

---

## 3. Sjangerkatalog (A–M)

Bokstavene refereres i hvert kapittel og gjengis for studenten i Del 0. Destillert fra
EKSAMENSANALYSE §3. Merk de **tre svartypene** som går på tvers: (1) **T/F + flervalg
med negativ retting** (auto-rettet — svar bare når du er sikker), (2) **regn/tegn
metoden** (den karaktergivende kjernen — vis symbolsk form før tall), (3) **kort
teori/drøfting** («forklar», «list», «hvorfor»).

| Kode | Sjanger | Form | Hyppighet/vekt |
|---|---|---|---|
| **A** | KI-grunnlag — sant/usant om rasjonalitet, Turing, svak/sterk KI, etikk (fasit-standpunkt utenat + etikk-liste) | T/F + kort teori | **100 %** |
| **B** | Sannsynlighet — regning på simultanfordeling: $P(a)$, $P(a\vee b)$ (ikke dobbelttell), $P(\neg a\mid b)$, to desimaler | regn | **63 %** |
| **C** | Bayes-nett: **d-separasjon / (betinget) uavhengighet** — hver sti aktiv/blokkert, colliders + etterkommere, negativ retting | T/F (regn-verifisert) | **100 %** ★ størst poengvolum |
| **D** | Bayes-nett: **struktur/faktorisering + inferens ved enumerasjon** — full simultansannsynlighet, posterior med utsummering av skjulte, konstruér nettet «riktig vei» | regn + tegn | **100 %** |
| **E** | Beslutningsnett / påvirkningsdiagram: tegn (oval/rektangel/diamant), additiv utility, **MEU-algoritme, VPI-differanse** | tegn + regn | **75 %** |
| **F** | HMM / filtrering: spesifiser modell, **kjør forward-algoritmen** (prediksjon → oppdatering → normaliser, symbolsk form, to desimaler), inferenstype-definisjoner | tegn + regn | **100 %** tyngst vektet (20 %) |
| **G** | MDP / verditerasjon: modeller antakelser, **iterér Bellman** med strategi per iterasjon; T/F om $\gamma$/policy/monotoni | regn + T/F | **75 %** |
| **H** | Forsterkende læring / Q-læring: RL vs. MDP-løsning (ukjent $P$/$R$, exploration), deep Q for spill | kort teori + T/F | **63 %** |
| **I** | Nevrale nett: **gradientleddet + utledning fra kvadratfeil**, perceptron-begrensning (XOR), dyp læring (lag/backprop/regularisering/CNN) | regn + T/F | **88 %** |
| **J** | Beslutningstrær / ID3: entropi, **informasjonsgevinst**, grådig ≠ optimal, uttrykkskraft | regn + T/F | **75 %** |
| **K** | Klassifikatorvalg / ML-metodikk: velg enkleste metode mot datasett; **valideringssett ≠ test-sett** | kort teori | **50 %** |
| **L** | **CBR — R⁴-syklusen** (Retrieve–Reuse–Revise–Retain), avstandsmål, når CBR slår dyp læring | kort teori/drøfting | **100 %** ★ NTNU-signatur |
| **M** | NLP / word embeddings: tette vektorer vs. one-hot; embeddings + aggregering + klassifikator | kort teori | **13 %** ↑ *nytt (V2024)* |

---

## 4. Kapitler

Feltene følger DNA-ens «Skjelett-krav». For dette faget: **Innholdskontrakt** =
definisjoner/teoremer/**algoritme-kontrakter** kapitlet SKAL lære (med AIMA-notasjon i
LaTeX). Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne**
(nivå 3). Hvert teorikapittel har standard-DNA-en: Eksamensvinkel-`tip` →
Forkunnskaper-`text` + Notasjons-og-algoritmeliste-`collapsible` → Motivasjon →
`definition`/`theorem` (inkl. algoritme-kontrakt) → utledning m/intuisjon (kun der
eksamen krever aktiv utledning) → 2–4 `example` (siste på eksamensnivå) → Typiske-feil-
`warning` → 6–12 `exercise` (stigende, ender på eksamensnivå, alle med `solution` +
`hints`) → Repetisjons-`collapsible`. Drillkapitler: Eksamensvinkel → løsningsoppskrift
→ sensor-kommentert case → 8–15 oppgaver på eksamensnivå.

---

### Del 0 — Eksamenskart og T/F-strategi

#### Kapittel 0.1: Eksamenskartet — slik testes TDT4171

- **id:** `tdt4171-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen (én firetimers kode D-eksamen, to formatæraer, tre svartyper), temafrekvensene, sjangerkatalogen A–M og lesestrategien — inkludert hva som er TDT4136-stoff og IKKE hører hjemme her.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet 2015–2024. Skal gjengi: (i) **formen** — skriftlig skoleeksamen **4 timer**, A–F, teller 100 %, **hjelpemiddelkode D** (bestemt, enkel kalkulator); oppgavetekst på engelsk, svar på norsk/engelsk; ingen delprøve teller → alt utenat; (ii) **de tre svartypene** — auto-rettet **T/F + flervalg med negativ retting**, **regn/tegn metoden** (kjernen, karaktergivende), og **korte teori-/drøftespørsmål**; (iii) **de to formatæraene** — klassisk 4-oppgavers (t.o.m. ~2019, negativ retting +2/−3) og moderne Inspera (2020→, ~9 oppgaver, +1 %/−1 %), og at boka bygges mot 2021–2024-formatet; (iv) **temafrekvens-tabellen** (§2 i analysen): d-separasjon 100 % (størst poengvolum), Bayes-nett-struktur/inferens 100 %, HMM-filtrering 100 % (20 % vekt), KI-grunnlag T/F 100 %, CBR 100 %, nevrale nett 88 %, MDP/verditerasjon 75 %, beslutningsnett/VPI 75 %, beslutningstrær 75 %, simultanfordeling 63 %, RL 63 %, klassifikatorvalg 50 %, NLP 13 %↑; (v) at **bredden er eksamensformen** — hver eksamen dekker nesten hele emnet, ingen kjernetema kan droppes; (vi) **TDT4136-advarselen** — søk/CSP/logikk/adversarielt/PDDL/spillteori er forgjengerfaget og testes IKKE; (vii) **sensors metaregler** (§4): vis symbolsk form før tall (full uttelling for flyt, null for gal flyt), rund to desimaler, bygg nettet «riktig vei», negativ retting → ikke gjett, fasiten raus med beslektede svar, spesifiser antakelser ved tvetydighet.
- **Innholdskontrakt:** Sjangerkatalogen A–M (§3) som studentens sjekkliste med typisk vekt. Pluss **prognosen for neste ordinære eksamen (kode D)**: Inspera-format, ~9 oppgaver, sum 100 %, jevnt fordelt ≈ 1 KI-grunnlag-T/F-blokk (A) + 1 d-separasjon-blokk (C) + 1 Bayes-nett-konstruksjon/inferens (D) + 1 HMM-filtrering (F) + 1 CBR-teori (L) + sannsynligvis 1 beslutningsnett/VPI (E) + 1 MDP/verditerasjon (G) + 1 nevralt nett/dyp læring (I) + 1 RL (H), mulig NLP (M). Avslutt med **leseplanen**: de fem «må perfekt»-temaene (d-separasjon Del 2, Bayes-inferens Del 3, HMM Del 4, KI-grunnlag Del 9, CBR Del 8) er kjernen; nivå 2 (beslutningsnett Del 5, MDP/RL Del 6, nevrale nett/trær Del 7) avgjør C→A; nivå 3 (simultanfordeling Del 1, metodevalg Del 7, NLP Del 9) merkes «bør kjenne til, men fundament/differensierer».
- **Oppgavesjangre:** Ingen algoritmeoppgaver; 3–4 refleksjonsoppgaver, f.eks.: «Hvilke fem temaer kan du IKKE droppe, og hvorfor gjør bredden det umulig å satse?» og «Et gammelt eksempel bruker mye tid på A\*-søk — bør du øve på det til TDT4171? Begrunn.»
- **Typiske feil:** Metafeilene — bruke tid på TDT4136-stoff (søk/CSP/logikk); satse på at et av de fem 100 %-temaene ikke kommer; sette inn tall før symbolsk form (mister flyt-uttelling); gjette på negativt rettede ledd; tro man kan slå opp (kode D: bare kalkulator).
- **Quiz: 16 · Flashcards: 16** (form, svartyper, formatæraer, frekvenser, metaregler, sjangerkatalogen, TDT4136-avgrensningen)

#### Kapittel 0.2: T/F-strategi og negativ retting — disiplinert blanking

- **id:** `tdt4171-0-2` · **number:** 0.2 · **estimatedMinutes:** 35 · **prerequisites:** `tdt4171-0-1` · **kapitteltype:** strategi
- **description:** Den viktigste enkeltmekanikken: hvordan negativ retting endrer optimal svaratferd, og hvordan du treffer beslutningen «svar eller blank» ledd for ledd.
- **Eksamensbelegg:** Gjennomgripende — negativ retting brukes i **hvert sett** (T/F-batteriene A + d-separasjon C + T/F-ledd i F/G/H/I/J). Klassisk +2 rett / −3 galt / 0 blankt, gulv 0 (V2017/V2019); moderne +1 % / −1 % / 0 %, noen +0,5/−0,5; enkelte blokker alt-eller-intet (null på hele blokken hvis ett delsvar galt/blankt, V2022 3a/3b). Prioritet: **perfekt** (egen ferdighet verdt å trene).
- **Innholdskontrakt:** `text`/`theorem` **forventningsregnestykket**: ved +1/−1 er blank bedre enn gjett så snart du er mindre enn ~50 % sikker; ved +2/−3 flyttes terskelen enda høyere (må være ~60 % sikker for at gjett lønner seg). `definition` **disiplinert blanking** (la ledd stå åpent når forventet verdi av å svare er negativ). `warning` **alt-eller-intet-blokker**: her er delvis galt = null på hele blokken → bare svar en slik blokk fullt hvis du er sikker på ALLE ledd. Kobling til d-separasjon (kap. 2.3–2.4): svar kun etter å ha verifisert alle stier — aldri på intuisjon. Sjekkliste for hvert T/F-ledd: (1) kjenner jeg fasit-standpunktet / har jeg verifisert utregningen? (2) hva er rettingsregelen for dette leddet? (3) er forventet verdi av å svare positiv?
- **Oppgavesjangre:** A/C-metatrening. Mønstereksempel: «Du er ~40 % sikker på et T/F-ledd med +1/−1-retting. Bør du svare? Regn ut forventet verdi og begrunn.» + «En 3-ledds blokk er alt-eller-intet; du er sikker på to ledd, usikker på det tredje — hva gjør du?»
- **Typiske feil:** Gjette på usikre ledd med negativ forventning (§5.8); svare et alt-eller-intet-ledd delvis; behandle d-separasjon som intuisjon i stedet for å verifisere stiene; blande sammen rettingsreglene i de to æraene.
- **Quiz: 18 · Flashcards: 12** (forventningsregelen, blanke-terskler, alt-eller-intet, klassisk vs. moderne retting)

**Del 0 får ikke egne prøver** (metadel; T/F-batteri-drillet ligger i kap. 10.1).

---

### Del 1 — Sannsynlighetsgrunnlaget *(simultanfordeling: nivå 3, men fundament)*

> Regning på simultanfordeling er «bare» 63 % (ofte oppvarming før Bayes-nett-blokken),
> men er fundamentet for d-separasjon, enumerasjon og filtrering. Del 1 bygger apparatet
> stramt: marginalisering, betinget sannsynlighet, Bayes' regel og (betinget)
> uavhengighet — akkurat nok til å bære resten av boka.

#### Kapittel 1.1: Sannsynlighet og simultanfordeling

- **id:** `tdt4171-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Simultanfordeling (joint distribution), marginalisering ut fra en tabell, og de tre regneoperasjonene sensor tester: $P(a)$, $P(a\vee b)$ og betinget sannsynlighet.
- **Eksamensbelegg:** Sjanger B, 63 %. Fra en oppgitt jointtabell: $P(a)$ ved å summere de aktuelle cellene; $P(a\vee b)$ ved unionen **uten dobbelttelling**; $P(\neg a\mid b)=\frac{P(\neg a\wedge b)}{P(b)}$. Rund til to desimaler når anvist. Prioritet: **kjenne** (men fundament — må sitte).
- **Innholdskontrakt:** `definition` **simultanfordeling** (full sannsynlighetstabell over alle variabelkombinasjoner, summerer til 1); **marginalisering** ($P(a)=\sum$ over de cellene der $a$ er sann); **betinget sannsynlighet** $P(a\mid b)=\frac{P(a\wedge b)}{P(b)}$; **produktregel** $P(a\wedge b)=P(a\mid b)P(b)$. `theorem` unionsregelen $P(a\vee b)=P(a)+P(b)-P(a\wedge b)$ (hvorfor overlappet trekkes fra). Gjennomført eksempel: nyskrevet 2×2- eller 2×2×2-jointtabell der alle tre operasjonene regnes med to desimaler. `warning` om avrunding (regn på fulle tall, rund til slutt).
- **Oppgavesjangre:** B. Mønstereksempel (nyskrevet jointtabell): «Gitt tabellen under: regn $P(a)$, $P(a\vee b)$ og $P(\neg a\mid b)$. Rund til to desimaler.»
- **Typiske feil:** Dobbelttelle overlappet i $P(a\vee b)$ (legge $P(a)+P(b)$ uten å trekke fra $P(a\wedge b)$, §5.2); forveksle $P(a\mid b)$ med $P(b\mid a)$; runde for tidlig; glemme å marginalisere ut de øvrige variablene.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 1.2: Bayes' regel, produktregel og (betinget) uavhengighet

- **id:** `tdt4171-1-2` · **number:** 1.2 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4171-1-1` · **kapitteltype:** teori
- **description:** Bayes' regel som snur betingingen, og de to uavhengighetsbegrepene (full og betinget) som er nøkkelen til Bayes-nett og d-separasjon.
- **Eksamensbelegg:** Sjanger B/C/D, understøtter 100 %-temaene. Bayes' regel er byggeklossen i posterior-spørringer (Del 3); betinget uavhengighet er selve poenget med d-separasjon (Del 2). Prioritet: **perfekt** (uavhengighetsbegrepene), **kunne** (Bayes-regning).
- **Innholdskontrakt:** `theorem` **Bayes' regel** $P(a\mid b)=\frac{P(b\mid a)P(a)}{P(b)}$ (utled fra produktregelen — dette er en utledning eksamen forventer å kunne følge); intuisjon: snu diagnostisk ↔ kausal retning. `definition` **(full) uavhengighet** $P(a\wedge b)=P(a)P(b)$, ekvivalent $P(a\mid b)=P(a)$; **betinget uavhengighet** $P(a\wedge b\mid c)=P(a\mid c)P(b\mid c)$, ekvivalent $P(a\mid b,c)=P(a\mid c)$. `text` hvorfor betinget uavhengighet er det Bayes-nett faktoriserer på, og hvorfor to variabler kan være avhengige men *betinget* uavhengige (og omvendt). Normalisering: $\alpha$ som konstant som gjør fordelingen sum-1 (forbereder enumerasjon og filtrering).
- **Oppgavesjangre:** B/C-forberedende. Mønstereksempel: «Bruk Bayes' regel til å regne $P(\text{sykdom}\mid\text{positiv test})$ gitt prevalens, sensitivitet og spesifisitet. Vis symbolsk oppsett før tall.»
- **Typiske feil:** Bytte teller/nevner i Bayes' regel; anta uavhengighet uten å sjekke $P(a\wedge b)=P(a)P(b)$; blande full og betinget uavhengighet (den ene medfører ikke den andre); glemme normaliseringen $\alpha$.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 1.3: DRILL — Regning på simultanfordeling

- **id:** `tdt4171-1-3` · **number:** 1.3 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4171-1-2` · **kapitteltype:** drill
- **description:** Full drill på sjanger B: marginaliser, regn union uten dobbelttelling, betinget og Bayes' regel fra jointtabeller — raskt og med korrekt avrunding.
- **Eksamensbelegg:** Sjanger B, 63 % (oppvarming før Bayes-nett-blokken). Prioritet: **kjenne** (men lettjente poeng når det kommer).
- **Innholdskontrakt (løsningsoppskrift):** 1) identifiser hvilke celler spørringen dekker; 2) for $P(a\vee b)$: union **minus** overlapp; 3) for betinget: felles/marginal, sett opp symbolsk før tall; 4) rund til to desimaler til slutt. Gjennomkjørt sensor-kommentert case med margnotater (avrunding og dobbelttelling er de vanlige trekkene). 8–12 oppgaver: marginalisering, union, betinget, Bayes' regel, blandet — alle fra nyskrevne jointtabeller.
- **Oppgavesjangre:** B. Mønstereksempel: «Fra en 2×2×2-jointtabell: regn seks spørringer (marginal, union, betinget, Bayes). Rund alle til to desimaler.»
- **Typiske feil:** Hele fellekatalogen fra §1.1–1.2 (dobbelttelling, snudd betinging, for tidlig avrunding, uavhengighetsantakelse uten sjekk).
- **Quiz: 20 · Flashcards: 8**

**Prøve-kvote Del 1:** 4 prøver (Sannsynlighetsgrunnlaget)
1. Prøve 1.A (20 min): Marginalisering + union uten dobbelttelling fra jointtabell (sjanger B).
2. Prøve 1.B (20 min): Betinget sannsynlighet + Bayes' regel med symbolsk oppsett (B).
3. Prøve 1.C (20 min): Full vs. betinget uavhengighet — avgjør og begrunn (B/C-forberedende).
4. Prøve 1.D (25 min): Blandet regnesett fra én jointtabell, to desimaler (B).

---

### Del 2 — Bayes-nett: struktur, konstruksjon og d-separasjon *(d-separasjon: PERFEKT — ryggraden)*

> **Dette er bokas ryggrad.** d-separasjon er den hyppigste og mest volumintensive
> ferdigheten (100 %, størst poengvolum — V2021 hadde ~14 delspørsmål på ett 6-variabelt
> nett), og den er negativt rettet, så presisjon (ikke intuisjon) avgjør. Struktur/
> faktorisering (100 %) og konstruksjon «riktig vei» (100 %) bor her. Delen får eget
> drillkapittel (2.4) med hovedvekt på **colliders og etterkommere** — den vanligste
> fellen i hele faget.

#### Kapittel 2.1: Bayes-nett: struktur, faktorisering og Markov-teppe

- **id:** `tdt4171-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4171-1-2` · **kapitteltype:** teori
- **description:** Hva et Bayes-nett er (DAG + CPT-er), faktoriseringen etter foreldre, full simultansannsynlighet ved kjederegelen, og Markov-teppet.
- **Eksamensbelegg:** Sjanger D, 100 %. Strukturpåstander (faktorisering, uten foreldre → produkt av marginaler); full simultansannsynlighet for en tilstandsvektor (multipliser CPT-oppslag, V2017: $0.5\cdot0.1\cdot0.7\cdot0.4\cdot0.4=0.0056$); Markov-teppe ($P(E\mid P,L)=P(E\mid P,L,H)$ når $H$ er utenfor teppet, TRUE). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **Bayes-nett** (rettet asyklisk graf der noder = variabler, kanter = direkte avhengighet, hver node har en **betinget sannsynlighetstabell (CPT)** gitt foreldrene); **faktorisering** $P(X_1,\dots,X_n)=\prod_i P(X_i\mid\text{foreldre}(X_i))$; uten foreldre → $P(X_1,\dots,X_k)=\prod_i P(X_i)$. `definition` **Markov-teppe** (en nodes foreldre, barn og barnas øvrige foreldre — noden er betinget uavhengig av resten gitt teppet). `theorem` **algoritme-kontrakt: full simultansannsynlighet** — slå opp hver nodes CPT-verdi for tilstandsvektoren og multipliser. Lokal vs. global semantikk; worst-case romkompleksitet **eksponentiell** i antall variabler. Gjennomført eksempel: nyskrevet 4–5-nodenett med CPT-er, regn full simultansannsynlighet for én tilstandsvektor.
- **Oppgavesjangre:** D. Mønstereksempel (nyskrevet nett): «Skriv faktoriseringen av simultanfordelingen etter nettets struktur, og regn $P(x_1,\neg x_2,x_3,\neg x_4)$ ved å multiplisere CPT-oppslagene.»
- **Typiske feil:** Faktorisere feil (glemme en forelder, eller ta med en ikke-forelder); tro et nett uten foreldre likevel har avhengighet; feil Markov-teppe (glemme barnas øvrige foreldre); multiplisere feil CPT-rad.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 2.2: Konstruksjon av Bayes-nett fra en fortelling

- **id:** `tdt4171-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4171-2-1` · **kapitteltype:** teori
- **description:** Hvordan du oversetter en fortelling til den kvalitative DAG-strukturen — «riktig vei» (årsak → virkning) — slik en domeneekspert lett kan oppgi CPT-ene.
- **Eksamensbelegg:** Sjanger D, 100 % (V2023 quokka, V2019 medisinsk, V2015). Tegn **kun den kvalitative strukturen**; riktig kant**retning** teller mest. Bygg modellen slik at en **domeneekspert lett kan oppgi sannsynlighetene** — eksplisitt sensurkriterium. Ekstra forsvarbare kanter straffes ikke; **null poeng bare hvis studenten ikke forstår hva et Bayes-nett er.** Prioritet: **perfekt** (fasit raus).
- **Innholdskontrakt:** `text`/`theorem` **konstruksjonsoppskrift**: 1) identifisér variablene; 2) ordne dem kausalt (årsaker før virkninger); 3) tegn en kant fra hver direkte årsak til virkning; 4) sjekk at hver node får en CPT en ekspert kan fylle ut. `warning` **«riktig vei»**: kanter fra virkning til årsak («bakvendt» nett) gir CPT-er ingen ekspert kan oppgi — eksplisitt straffet. Kontrast: samme simultanfordeling kan representeres av flere DAG-er, men den kausale er den «riktige». Gjennomført eksempel: nyskrevet fortelling (f.eks. brannalarm/innbrudd/nabo-ringer eller et diagnose-scenario) tegnet «riktig vei» med begrunnet kantretning. `text` om at flere korrekte nett godtas (raus fasit) — men vis hovedstrukturen.
- **Oppgavesjangre:** D. Mønstereksempel: «Konstruér et Bayes-nett fra fortellingen under. Tegn nodene og kantene, begrunn hver kantretning, og forklar hvorfor strukturen lar en domeneekspert oppgi CPT-ene.»
- **Typiske feil:** Bygge nettet «bakvendt» (virkning → årsak, §5.7); legge inn kanter uten kausal begrunnelse; tro det finnes bare ett riktig nett; blande sammen «henger sammen» (korrelasjon) med kausal kant.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 2.3: d-separasjon: aktive og blokkerte stier

- **id:** `tdt4171-2-3` · **number:** 2.3 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4171-2-1` · **kapitteltype:** teori
- **description:** Den formelle metoden for å avgjøre (betinget) uavhengighet — gå gjennom hver sti og avgjør om den er aktiv eller blokkert, med de tre koblingstypene og collider-fellen.
- **Eksamensbelegg:** Sjanger C, 100 % — **størst poengvolum av alle enkeltferdigheter**, negativt rettet. Avgjør uavhengighet ved **d-separasjon, aldri ved intuisjon**. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **d-separasjonsreglene** (nøkkelresultat): for hver sti mellom $X$ og $Y$ gitt betingingssettet $Z$ — **kjede** ($A\rightarrow B\rightarrow C$) og **gaffel/felles årsak** ($A\leftarrow B\rightarrow C$): blokkeres når midtnoden $B\in Z$ (observert); **collider / v-struktur** ($A\rightarrow B\leftarrow C$): **blokkert som standard**, men blir **aktiv** hvis kollidernoden $B$ **eller en etterkommer av $B$** er i $Z$. To variabler er **d-separert** (og dermed (betinget) uavhengige) hvis **alle** stier mellom dem er blokkert; hvis minst én sti er aktiv, er de d-koblet (mulig avhengige). `definition` **aktiv/blokkert sti**, **d-separasjon**. `warning` fremhevet: **collider blir aktiv når en ETTERKOMMER er observert** — den vanligste fellen i faget. Løsningsoppskrift: 1) list alle stier mellom $X$ og $Y$; 2) for hver node på stien, klassifisér koblingstype (kjede/gaffel/collider); 3) avgjør blokkert/aktiv gitt $Z$ (husk etterkommere for colliders); 4) uavhengig ⟺ alle stier blokkert. Gjennomført eksempel: nyskrevet 5–6-nodenett, avgjør 3–4 uavhengighetspåstander med full sti-gjennomgang.
- **Oppgavesjangre:** C. Mønstereksempel (nyskrevet nett): «Er $X$ og $Y$ betinget uavhengige gitt $\{Z\}$? Gå gjennom hver sti, klassifisér koblingene og avgjør ved d-separasjon.»
- **Typiske feil:** Påstå uavhengighet uten d-separasjon (intuisjon, §5.1 — den største fellen); glemme at en collider blir aktiv når en etterkommer er observert; behandle en gaffel som en collider (eller motsatt); glemme en sti; svare på negativt rettet ledd uten å ha verifisert alle stier.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 2.4: DRILL — d-separasjon og (betinget) uavhengighet

- **id:** `tdt4171-2-4` · **number:** 2.4 · **estimatedMinutes:** 80 · **prerequisites:** `tdt4171-2-3` · **kapitteltype:** drill
- **description:** Systematisk drill på ryggraden: avgjør et batteri av uavhengighetspåstander på et fast nett — presist, sti for sti, med disiplinert blanking under negativ retting.
- **Eksamensbelegg:** Sjanger C, 100 %, størst poengvolum (V2021 ~14 delspørsmål på ett nett; V2024 fem uavhengighetsspørsmål). Negativ retting (V2024: +1 % rett, −1 % galt, +2 % alle rett). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) tegn/les nettet; 2) for hver påstand $X \perp Y \mid Z$: list alle stier; 3) klassifisér hver kobling (kjede/gaffel/collider); 4) avgjør blokkert/aktiv (etterkommer-sjekk for colliders); 5) svar **kun** hvis alle stier er verifisert — ellers blank (kobling til kap. 0.2). Fast fellekatalog som SKAL demonstreres: aktiv collider via observert etterkommer, gaffel blokkert av observert midtnode, en oversett aktiv sti. Gjennomkjørt sensor-kommentert case med margnotater om negativ retting og at intuisjon ikke gir uttelling. 12–15 oppgaver: uavhengighetspåstander på 2–3 nyskrevne nett, roterende alle koblingstyper og collider/etterkommer-fellen, noen bevisst konstruert for å friste til feil intuisjon.
- **Oppgavesjangre:** C. Mønstereksempel: «For nettet under, avgjør ti uavhengighetspåstander ved d-separasjon. Marker hvilke du ville latt stå blankt på eksamen og hvorfor.»
- **Typiske feil:** Hele fellekatalogen samlet (collider-etterkommer, gaffel/collider-forveksling, oversett sti, gjett på usikkert ledd).
- **Quiz: 24 · Flashcards: 12**

**Prøve-kvote Del 2:** 4 prøver (Bayes-nett: struktur, konstruksjon og d-separasjon)
1. Prøve 2.A (25 min): Faktorisering + full simultansannsynlighet + Markov-teppe (sjanger D).
2. Prøve 2.B (25 min): Konstruér nett fra fortelling «riktig vei», begrunn kantretning (D).
3. Prøve 2.C (30 min): d-separasjon — batteri av uavhengighetspåstander på ett nett (C).
4. Prøve 2.D (30 min): Colliders og etterkommere — de vanskelige stiene, med blankestrategi (C).

---

### Del 3 — Inferens i Bayes-nett (enumerasjon) *(inferens: PERFEKT)*

> Å regne en posterior-spørring ($P(I\mid H,L,E)$) ved å summere ut de skjulte
> variablene er en 100 %-gjenganger og en fast karaktergivende regneoppgave. Del 3
> bygger enumerasjonsapparatet og driller det til feilfrihet.

#### Kapittel 3.1: Inferens ved enumerasjon

- **id:** `tdt4171-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4171-2-1` · **kapitteltype:** teori
- **description:** Hvordan en posterior-spørring regnes eksakt ved å summere ut skjulte variabler — teller/nevner som summer, og normaliseringskonstanten $\alpha$.
- **Eksamensbelegg:** Sjanger D, 100 %. Posterior/diagnostisk spørring $P(I\mid H,L,E)$: Bayes + **summér ut de skjulte variablene ved enumerasjon**. Foretrukket oppsett: teller = leddet med query=sann summert over skjulte; nevner = samme sum over begge query-verdier; forhold = svaret (V2017: $\frac{0.0105}{0.0105+0.00875}=0.545$). Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **algoritme-kontrakt: inferens ved enumerasjon** — for spørring $P(X\mid \mathbf{e})$: (1) skriv $P(X\mid\mathbf{e})=\alpha\,P(X,\mathbf{e})=\alpha\sum_{\mathbf{y}}P(X,\mathbf{e},\mathbf{y})$ der $\mathbf{y}$ er de skjulte variablene; (2) bytt hvert ledd med produktet av CPT-oppslag (faktoriseringen); (3) summér over alle verdier av de skjulte variablene; (4) normaliser med $\alpha$ (del på summen over begge verdier av $X$). **Vis den symbolske formen (summasjonene) FØR tall.** `text` intuisjon: teller = «vekten» av at query er sann sammen med beviset, marginalisert over det vi ikke vet; nevner = samme for begge query-verdier → normalisering. Worst-case eksponentiell kompleksitet. Gjennomført eksempel: nyskrevet 4–5-nodenett, regn én posterior-spørring med minst én skjult variabel, symbolsk oppsett → tall → to desimaler.
- **Oppgavesjangre:** D. Mønstereksempel: «Regn $P(\text{query}\mid\text{bevis})$ i nettet under ved enumerasjon. Skriv den symbolske summen over de skjulte variablene før du setter inn CPT-tall. Rund til to desimaler.»
- **Typiske feil:** Glemme å summere ut skjulte variabler (bare regne én term, §5.3); glemme normaliseringen $\alpha$ eller normalisere på feil sted; sette inn tall før symbolsk oppsett (§5.4); multiplisere feil CPT-rad; forveksle teller og nevner.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 3.2: DRILL — Inferens ved enumerasjon

- **id:** `tdt4171-3-2` · **number:** 3.2 · **estimatedMinutes:** 70 · **prerequisites:** `tdt4171-3-1` · **kapitteltype:** drill
- **description:** Full drill på posterior-spørringer: sett opp summen over skjulte variabler symbolsk, sett inn CPT-tall, normaliser — feilfritt og med to desimaler.
- **Eksamensbelegg:** Sjanger D, 100 %. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) skriv $\alpha\sum_{\text{skjulte}}\prod(\text{CPT-er})$ symbolsk; 2) identifisér skjulte variabler; 3) regn teller (query sann); 4) regn nevner (begge query-verdier); 5) del → svar, rund to desimaler. Gjennomkjørt sensor-kommentert case med margnotater om at symbolsk oppsett gir uttelling selv med tallfeil (korrekt flyt), men gal flyt gir null. 10–14 oppgaver: posterior-spørringer med 1–2 skjulte variabler på nyskrevne nett, samt full simultansannsynlighet og enkle strukturpåstander som repetisjon.
- **Oppgavesjangre:** D. Mønstereksempel: «Regn tre posterior-spørringer i nettet under ved enumerasjon, hver med symbolsk oppsett før tall.»
- **Typiske feil:** Hele fellekatalogen fra §3.1 (manglende utsummering, $\alpha$-feil, tall før symbol, feil CPT-rad).
- **Quiz: 22 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (Inferens i Bayes-nett)
1. Prøve 3.A (25 min): Full simultansannsynlighet for en tilstandsvektor (sjanger D).
2. Prøve 3.B (30 min): Posterior-spørring med én skjult variabel, symbolsk oppsett (D).
3. Prøve 3.C (30 min): Posterior med to skjulte variabler + normalisering (D).
4. Prøve 3.D (25 min): Blandet — struktur + full simultan + posterior på ett nett (D).

---

### Del 4 — HMM og filtrering over tid *(HMM-filtrering: PERFEKT — tyngst vektet)*

> **Den tyngst vektede regneoppgaven** (20 % i V2024) og en 100 %-gjenganger. Følger en
> fast oppskrift fra AIMA (forward-algoritmen, paraply/regn s. 485). Her *tjener*
> studenten karakteren gjennom feilfri mekanisk utregning med **symbolsk form før tall**.
> Delen får eget drillkapittel (4.4).

#### Kapittel 4.1: HMM — modell, Markov-antakelser og stasjonaritet

- **id:** `tdt4171-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4171-1-2` · **kapitteltype:** teori
- **description:** Hva en skjult Markov-modell er — struktur, transisjonsmodell, sensormodell — og de tre antakelsene (første-ordens Markov, sensor-Markov, stasjonaritet).
- **Eksamensbelegg:** Sjanger F, 100 %. Spesifiser modellen: struktur $S_0\rightarrow S_1\rightarrow S_2$ med $S_t\rightarrow E_t$; oppgi **transisjonsmodell** $P(S_t\mid S_{t-1})$ og **sensormodell** $P(E_t\mid S_t)$; flere tabellformater godtas; tegnes på papir. T/F-fakta om antakelsene. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **HMM** (tilstand $S_t$ skjult, observasjon $E_t$ synlig); **transisjonsmodell** $P(S_t\mid S_{t-1})$; **sensormodell (emisjon)** $P(E_t\mid S_t)$; **første-ordens Markov-antakelse** $P(S_t\mid S_{0:t-1})=P(S_t\mid S_{t-1})$; **sensor-Markov-antakelse** $P(E_t\mid S_{0:t},E_{0:t-1})=P(E_t\mid S_t)$; **stasjonaritet** (samme modell over tid). `theorem` HMM krever **både** Markov-antakelsen **og** sensor-Markov-antakelsen; Markov-antakelsen krever *ikke* Bayes' regel og gjelder ikke bare diskrete variabler. Gjennomført eksempel: nyskrevet 2-tilstands-HMM (f.eks. vær/observasjon) med begge tabeller og strukturtegning beskrevet i tekst.
- **Oppgavesjangre:** F. Mønstereksempel: «Spesifiser en HMM for scenariet under: tegn strukturen $S_0\rightarrow S_1\rightarrow\dots$ med $S_t\rightarrow E_t$, og oppgi transisjons- og sensormodellen som tabeller.»
- **Typiske feil:** Blande transisjonsmodell ($P(S_t\mid S_{t-1})$) og sensormodell ($P(E_t\mid S_t)$); tro Markov-antakelsen krever Bayes' regel (§5.11, FALSE); glemme stasjonaritetsantakelsen; tegne kant fra $E_t$ til $S_t$ (feil retning).
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 4.2: Filtrering — forward-algoritmen

- **id:** `tdt4171-4-2` · **number:** 4.2 · **estimatedMinutes:** 65 · **prerequisites:** `tdt4171-4-1` · **kapitteltype:** teori
- **description:** Forward-algoritmen for filtrering — prediksjon, oppdatering og normalisering — med den obligatoriske disiplinen «symbolsk form før tall».
- **Eksamensbelegg:** Sjanger F, 100 %, tyngst vektet (20 %). Foretrukket metode. **Vis symbolsk form FØR tall**, rund mellom- og sluttresultat til to desimaler. Fasiten peker til AIMA-eksempelet (paraply/regn, s. 485). Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **algoritme-kontrakt: forward-algoritmen (filtrering)** — for hvert steg $t$: **(1) prediksjon** $P(S_t\mid e_{1:t-1})=\sum_{s_{t-1}}P(S_t\mid s_{t-1})\,P(s_{t-1}\mid e_{1:t-1})$; **(2) oppdatering** $P(S_t\mid e_{1:t})=\alpha\,P(e_t\mid S_t)\,P(S_t\mid e_{1:t-1})$, normaliser med $\alpha$. `text` intuisjon per steg: prediksjon = rull sannsynligheten forover gjennom transisjonsmodellen; oppdatering = vekt med hvor sannsynlig observasjonen er, så normaliser. `warning` **symbolsk form før tall** (full uttelling for korrekt flyt selv med tallfeil, null hvis flyten er gal, §4.1) og **glem ikke $\alpha$** (§5.5). Gjennomført eksempel: nyskrevet 2-tilstands-HMM, kjør filtrering over to–tre steg — symbolsk oppsett per steg → tall → to desimaler (mønster som V2024 solpanel-snø: $P(S_0)=\langle0.3,0.7\rangle\rightarrow$ predict $\rightarrow$ update $e_1$ $\rightarrow$ predict $\rightarrow$ update $e_2$).
- **Oppgavesjangre:** F. Mønstereksempel: «Kjør filtrering over tre steg for HMM-en under gitt observasjonssekvensen. Vis prediksjon og oppdatering symbolsk før tall for hvert steg, og normaliser. Rund til to desimaler.»
- **Typiske feil:** Sette inn tall før symbolsk form (§5.4); glemme normaliseringen $\alpha$ eller normalisere på feil sted (§5.5); bytte om prediksjon og oppdatering; bruke sensormodellen i prediksjonssteget; ikke runde konsekvent.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 4.3: Inferenstyper — filtrering, prediksjon, glatting og forklaring

- **id:** `tdt4171-4-3` · **number:** 4.3 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4171-4-2` · **kapitteltype:** teori
- **description:** De fire temporale inferensoppgavene med sine eksakte definisjoner (og $k$-relasjonen til $t$) — det faste T/F-materialet om HMM.
- **Eksamensbelegg:** Sjanger F, 100 % (T/F-ledd, negativ retting). De fire definisjonene forveksles systematisk; kjenn dem eksakt. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **filtrering** $P(S_t\mid e_{1:t})$ (nåtilstand gitt alt bevis så langt); **prediksjon** $P(S_{t+k}\mid e_{1:t})$, $k>0$ (fremtidig tilstand); **glatting (smoothing)** $P(S_k\mid e_{1:t})$, $0\le k<t$ (fortidig tilstand gitt senere bevis; **kostnad lineær i antall tidssteg**); **mest sannsynlige forklaring** $P(S_{1:t}\mid e_{1:t})$ (hele tilstandssekvensen — Viterbi). `theorem` T/F-standpunkt: smoothing-kostnaden vokser lineært i $t$; HMM forutsetter stasjonaritet; filtrering ≠ glatting ≠ prediksjon (ulike $k$-relasjoner). `warning` de fire typene forveksles — bruk $k$-relasjonen som fasit.
- **Oppgavesjangre:** F (T/F/kort teori). Mønstereksempel: «Hvilken temporal inferenstype er $P(S_{t+2}\mid e_{1:t})$? Og $P(S_3\mid e_{1:7})$? Angi navn og $k$-relasjon.» + T/F: «Glatting koster eksponentielt i antall tidssteg.» (FALSE)
- **Typiske feil:** Blande filtrering/prediksjon/glatting/forklaring (§5.10); tro glatting koster eksponentielt (lineært); forveksle mest sannsynlig forklaring (hele sekvensen) med glatting (én tilstand); gjette på negativt rettet T/F uten å kunne definisjonen.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 4.4: DRILL — Kjør filtrering for hånd

- **id:** `tdt4171-4-4` · **number:** 4.4 · **estimatedMinutes:** 80 · **prerequisites:** `tdt4171-4-3` · **kapitteltype:** drill
- **description:** Full drill på sjanger F: spesifiser HMM-en og kjør forward-filtrering over flere steg med symbolsk mellomregning, normalisering og to desimaler.
- **Eksamensbelegg:** Sjanger F, 100 %, tyngst vektet (20 %). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) skriv startfordelingen $P(S_0)$; 2) for hvert steg: prediksjon symbolsk → tall, oppdatering symbolsk → tall, normaliser ($\alpha$); 3) rund til to desimaler; 4) hold styr på hvilket bevis som er brukt ($e_{1:t}$). Gjennomkjørt sensor-kommentert eksamenscase med margnotater: symbolsk form gir uttelling selv med tallfeil, gal flyt gir null, normalisering må være med. 12–15 oppgaver: kjør filtrering over 2–4 steg på nyskrevne 2- og 3-tilstands-HMM-er, pluss spesifiser-modellen-oppgaver og inferenstype-identifikasjon som repetisjon.
- **Oppgavesjangre:** F. Mønstereksempel: «Kjør filtrering over tre steg for HMM-en under (observasjonssekvens gitt). Vis symbolsk form før tall i hvert prediksjons- og oppdateringssteg, normaliser, rund til to desimaler.»
- **Typiske feil:** Hele fellekatalogen (tall før symbol, manglende $\alpha$, prediksjon/oppdatering byttet, sensormodell i prediksjon, avrundingsdrift).
- **Quiz: 24 · Flashcards: 12**

**Prøve-kvote Del 4:** 4 prøver (HMM og filtrering over tid)
1. Prøve 4.A (25 min): Spesifiser en HMM — struktur + transisjons- og sensormodell (sjanger F).
2. Prøve 4.B (30 min): Kjør filtrering over to steg med symbolsk form og normalisering (F).
3. Prøve 4.C (30 min): Full filtrering over tre steg, to desimaler (F).
4. Prøve 4.D (25 min): Inferenstyper — definer filtrering/prediksjon/glatting/forklaring + T/F (F).

---

### Del 5 — Beslutningsteori: beslutningsnett, MEU og VPI *(beslutningsnett/VPI: nivå 2)*

> Beslutningsnett med MEU og VPI (75 %) er en tung regne-/tegneoppgave som avgjør C→A.
> Nodetyper (oval/rektangel/diamant), kantretning, additiv utility, MEU-algoritmen og
> VPI-differansen er det faste apparatet. Delen får eget drillkapittel (5.3).

#### Kapittel 5.1: Nytte, forventet nytte og beslutningsnett

- **id:** `tdt4171-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4171-2-1` · **kapitteltype:** teori
- **description:** Beslutningsnett (påvirkningsdiagram) — de tre nodetypene, kantretningene, additiv nyttefunksjon og forventet nytte.
- **Eksamensbelegg:** Sjanger E, 75 %. Tegn strukturen (på papir): **oval = tilfeldighetsnode, rektangel = beslutningsnode, diamant = nyttenode**; riktig kantretning; utility-noden har **ingen barn**; beslutningsnoden peker på det den påvirker (V2024 legediagnose). CPT-rader summerer til 100 %; additiv utility ($U=\text{utfall}\cdot3+\text{kostnad}$). Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **beslutningsnett / påvirkningsdiagram**; **tilfeldighetsnode** (oval, CPT som i Bayes-nett); **beslutningsnode** (rektangel, en handling velges); **nyttenode** (diamant, ingen barn, avhenger av foreldrene sine). `definition` **forventet nytte** $EU(a)=\sum_{\text{utfall}}P(\text{utfall}\mid a)\,U(\text{utfall})$; **additiv nyttefunksjon** (summér delnytter). `theorem` regler: rader med samme betinging i en CPT summerer til 1; nyttenoden har ingen barn; konkrete tall er mindre viktige enn riktig mønster (raus fasit). Gjennomført eksempel: nyskrevet beslutningsnett (f.eks. test-og-behandle-scenario) tegnet med alle tre nodetyper, additiv utility oppgitt, $EU$ for én handling regnet.
- **Oppgavesjangre:** E. Mønstereksempel: «Tegn et beslutningsnett for scenariet under. Bruk riktige nodetyper (oval/rektangel/diamant) og kantretninger, og oppgi en additiv nyttefunksjon.»
- **Typiske feil:** Feil nodetype (oval/rektangel/diamant, §5.6); la utility-noden få barn; feil kantretning; CPT-rader som ikke summerer til 1; tro de konkrete nyttetallene må være «riktige» (mønsteret teller).
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 5.2: MEU-evalueringsalgoritmen og verdien av informasjon (VPI)

- **id:** `tdt4171-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4171-5-1` · **kapitteltype:** teori
- **description:** Hvordan et beslutningsnett evalueres (MEU-algoritmen) og hvordan verdien av perfekt informasjon (VPI) regnes som en differanse i forventet nytte.
- **Eksamensbelegg:** Sjanger E, 75 %. MEU-algoritmen (ordrett fasit-oppskrift V2024). VPI = forventet nytte med perfekt info (og optimal handling) minus uten (V2023 Hearthstone: $EU=4/5{,}5/5{,}5$; med AoE-kunnskap snitt $7{,}5$; VPI $=7{,}5-5{,}5=2{,}0$). Prioritet: **kunne**.
- **Innholdskontrakt:** `theorem` **algoritme-kontrakt: MEU-evaluering** — (1) sett bevisvariablene; (2) for hver verdi av beslutningsnoden: sett noden, regn posterior for nyttenodens foreldre, regn forventet nytte; (3) returner handlingen med **høyest forventet nytte** (MEU). `definition` **VPI** (verdien av perfekt informasjon om $X$) $=\big(\text{forventet nytte når man kjenner } X \text{ og handler optimalt}\big)-\big(\text{forventet nytte uten den informasjonen}\big)$; «hvor mye vil du betale for å vite $X$?» = denne differansen (alltid $\ge0$). `text` utledning/intuisjon: regn $EU$ per handling → velg MEU; regn betinget $EU$ for hver verdi av $X$ (handle optimalt gitt hver), vekt med $P(X)$; VPI = differansen. Gjennomført eksempel: nyskrevet scenario (f.eks. et spill- eller markedsvalg) med $EU$ per handling, betinget $EU$ gitt en observasjon, og VPI regnet komplett.
- **Oppgavesjangre:** E. Mønstereksempel: «Regn forventet nytte for hver handling og velg MEU. Regn så VPI for variabelen $X$: hvor mye ville du maksimalt betalt for å kjenne $X$ før du velger?»
- **Typiske feil:** Glemme å handle optimalt *for hver* verdi av $X$ når man regner VPI-teller; regne VPI uten å vekte med $P(X)$; tro VPI kan bli negativ; velge feil handling (ikke MEU); blande betinget og ubetinget forventet nytte.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 5.3: DRILL — Beslutningsnett, MEU og VPI

- **id:** `tdt4171-5-3` · **number:** 5.3 · **estimatedMinutes:** 70 · **prerequisites:** `tdt4171-5-2` · **kapitteltype:** drill
- **description:** Full drill på sjanger E: tegn beslutningsnett med riktige nodetyper, regn MEU, og regn VPI som differanse — komplett og med korrekt vekting.
- **Eksamensbelegg:** Sjanger E, 75 %. Prioritet: **kunne** (differensierer C→A).
- **Innholdskontrakt (løsningsoppskrift):** For **tegning**: nodetyper riktig, kantretning, utility uten barn. For **MEU**: $EU$ per handling → høyest. For **VPI**: betinget $EU$ per verdi av $X$ (handle optimalt) → vekt med $P(X)$ → minus MEU uten info. Gjennomkjørt sensor-kommentert case med margnotater (nodetyper og VPI-vekting er de vanlige trekkene; konkrete tall er sekundære). 10–14 oppgaver: tegn nett, regn MEU, regn VPI — nyskrevne scenarier.
- **Oppgavesjangre:** E. Mønstereksempel: «For scenariet under: tegn beslutningsnettet, regn MEU, og regn VPI for observasjonsvariabelen. Vis mellomregningen.»
- **Typiske feil:** Hele fellekatalogen fra §5.1–5.2 (feil nodetype, utility med barn, VPI uten optimal handling per verdi, manglende $P(X)$-vekting).
- **Quiz: 22 · Flashcards: 10**

**Prøve-kvote Del 5:** 4 prøver (Beslutningsteori)
1. Prøve 5.A (25 min): Tegn beslutningsnett — nodetyper og kantretning + additiv utility (sjanger E).
2. Prøve 5.B (25 min): Regn forventet nytte per handling og velg MEU (E).
3. Prøve 5.C (30 min): VPI som differanse — komplett med vekting (E).
4. Prøve 5.D (30 min): Blandet — tegn + MEU + VPI på ett scenario (E).

---

### Del 6 — Sekvensielle beslutninger: MDP, verditerasjon og RL *(MDP/verditerasjon: nivå 2)*

> MDP/verditerasjon (75 %) og forsterkende læring (63 %) er nivå-2-temaer som avgjør
> C→A. Verditerasjon er en fast regneoppgave (iterér Bellman med strategi per iterasjon);
> RL testes som teori/T/F (RL vs. MDP-løsning, deep Q). Verditerasjon får eget
> drillkapittel (6.4).

#### Kapittel 6.1: Markov-beslutningsprosesser (MDP) og Bellman-likningen

- **id:** `tdt4171-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4171-4-1` · **kapitteltype:** teori
- **description:** Hva en MDP er — tilstander, handlinger, transisjonsmodell, belønning, diskontering — og Bellman-likningen som definerer optimal nytte.
- **Eksamensbelegg:** Sjanger G, 75 %. Modeller som MDP: angi tilstander, handlinger, $P(s'\mid s,a)$, $R(s)$; gjør antakelsene eksplisitte (**fullt observerbar, Markov, stasjonær, uendelig horisont**). Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **MDP** som tuppelen $\langle S, A, P(s'\mid s,a), R(s), \gamma\rangle$; **transisjonsmodell** $P(s'\mid s,a)$; **belønning** $R(s)$; **diskonteringsfaktor** $\gamma\in(0,1)$; **policy** $\pi$, optimal policy $\pi^*$; **nytte** $U^*(s)$. `theorem` **Bellman-likningen** $U^*(s)=R(s)+\gamma\max_a\sum_{s'}P(s'\mid s,a)\,U^*(s')$. `text` antakelser eksplisitt (fullt observerbar, Markov, stasjonær transisjon/belønning, uendelig horisont) og prosessen (observer → få belønning → velg handling → utfør, i loop). Kontrast til HMM (MDP er fullt observerbar; POMDP ikke — nevnes kort). Gjennomført eksempel: nyskrevet 2–3-tilstands-MDP med transisjons- og belønningstabell, Bellman-likningen satt opp symbolsk.
- **Oppgavesjangre:** G. Mønstereksempel: «Modeller scenariet under som en MDP: angi tilstander, handlinger, transisjonsmodell og belønning, og gjør antakelsene eksplisitte. Skriv Bellman-likningen for optimal nytte.»
- **Typiske feil:** Utelate en antakelse (fullt observerbar/Markov/stasjonær/uendelig horisont); forveksle $R(s)$ og $U^*(s)$; glemme $\max_a$ i Bellman; tro MDP er delvis observerbar (det er POMDP).
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 6.2: Verditerasjon

- **id:** `tdt4171-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4171-6-1` · **kapitteltype:** teori
- **description:** Verditerasjon — iterér Bellman-oppdateringen fra $U_0=0$, utled strategien etter hver iterasjon, og T/F-fakta om konvergens, $\gamma$ og policy.
- **Eksamensbelegg:** Sjanger G, 75 %. Bellman + verditerasjon: $U_0=0$, iterer, **utled strategien etter hver iterasjon** (V2017: $U_1(S)=3,\,U_1(\neg S)=2\rightarrow U_2(S)=4{,}5,\,U_2(\neg S)=3{,}5\rightarrow\dots$ konvergerer $U^*(S)=6,\,U^*(\neg S)=5$). T/F om monotoni, $\gamma$-effekt, policy-iterasjon. Prioritet: **kunne**.
- **Innholdskontrakt:** `theorem` **algoritme-kontrakt: verditerasjon** — initialiser $U_0(s)=0$ for alle $s$; gjenta oppdateringen $U_{k+1}(s)=R(s)+\gamma\max_a\sum_{s'}P(s'\mid s,a)\,U_k(s')$ til konvergens; les ut strategien $\pi(s)=\arg\max_a\sum_{s'}P(s'\mid s,a)\,U(s')$. `theorem` T/F-standpunkt: med ikke-negative belønninger og $\gamma\in(0,1)$ er $U_t(s)$ **ikke-avtakende** i $t$; **å endre $\gamma$ kan endre den optimale policyen** (påstand om at den ikke gjør det er FALSE); verditerasjon og policyiterasjon hviler på **samme** antakelser; når $|S|\gg|A|$ er én verditerasjon-iterasjon generelt raskere enn én policy-iterasjon-iterasjon; diskontering med uendelig horisont gir fortsatt rasjonell atferd. Gjennomført eksempel: nyskrevet 2-tilstands-MDP, kjør 2–3 iterasjoner med $\gamma$ oppgitt, **vis strategien etter hver iterasjon**, angi konvergensverdien.
- **Oppgavesjangre:** G. Mønstereksempel: «Kjør verditerasjon på MDP-en under fra $U_0=0$ med $\gamma$ gitt. Vis $U_1, U_2, U_3$ og strategien etter hver iterasjon. Hva konvergerer nyttene mot?»
- **Typiske feil:** Glemme $\max_a$ (bruke feil handling); ikke oppdatere alle tilstander samtidig; ikke lese ut strategien per iterasjon; tro $\gamma$ ikke påvirker policy (§ FALSE); glemme $R(s)$-leddet i hver oppdatering.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 6.3: Forsterkende læring og Q-læring

- **id:** `tdt4171-6-3` · **number:** 6.3 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4171-6-1` · **kapitteltype:** teori
- **description:** Hva forsterkende læring er, hvordan den skiller seg fra å løse en MDP, og hvordan deep Q-læring approksimerer Q-funksjonen for spill.
- **Eksamensbelegg:** Sjanger H, 63 %. RL vs. MDP-løsning ($P$/$R$ ukjent, lær ved interaksjon med exploration, V2024 8.2). RL ≠ dyp læring (V2021 FALSE); Q-læring krever Markov (TRUE); deep Q for spill (V2024 Flappy Bird). Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **forsterkende læring** (agenten lærer av sporadiske **belønninger** som forsterker gode handlingsmønstre; $P$ og $R$ **ukjent på forhånd**); **exploration vs. exploitation**; **Q-funksjonen** $Q(s,a)$; **deep Q-læring** (nevralt nett approksimerer $Q$). `theorem` T/F/kort-teori-standpunkt: RL vs. å løse en MDP — i RL er transisjons- og belønningsfunksjonen ukjent, agenten må lære gjennom **interaksjon** med **utforsking**; å løse en MDP forutsetter kjent modell og krever ingen utforsking. RL vs. veiledet/uveiledet: ikke merkede data, maksimér **kumulativ** belønning over sekvensielle beslutninger. RL er **ikke** en form for dyp læring; Q-læring krever Markov-antakelsen. Deep Q for spill: CNN tar rå tilstand (pikselbilder) → Q-verdi per handling → velg høyest ved test → tren ved å oppdatere nettvektene. Gjennomført eksempel: forklar RL vs. MDP-løsning i tre kulepunkter (som fasit), og skisser deep Q for et nyskrevet spill.
- **Oppgavesjangre:** H (kort teori/T/F). Mønstereksempel: «Forklar tre måter forsterkende læring skiller seg fra å løse en MDP.» + «Skisser hvordan deep Q-læring lærer å spille et spill fra rå skjermbilder.»
- **Typiske feil:** Kalle RL en form for dyp læring (§5.12, FALSE); påstå at man løser en MDP med utforsking (RL utforsker, MDP-løsning gjør ikke); glemme at $P$/$R$ er ukjent i RL; tro Q-læring ikke krever Markov.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 6.4: DRILL — Verditerasjon for hånd

- **id:** `tdt4171-6-4` · **number:** 6.4 · **estimatedMinutes:** 65 · **prerequisites:** `tdt4171-6-2` · **kapitteltype:** drill
- **description:** Full drill på sjanger G: kjør verditerasjon på små MDP-er fra $U_0=0$, iterasjon for iterasjon, med strategi per iterasjon og konvergensverdi.
- **Eksamensbelegg:** Sjanger G, 75 %. Prioritet: **kunne**.
- **Innholdskontrakt (løsningsoppskrift):** 1) skriv Bellman-oppdateringen symbolsk; 2) $U_0=0$; 3) for hver iterasjon: regn $U_{k+1}(s)$ for alle tilstander (bruk $U_k$), les ut strategien; 4) angi konvergensverdien. Gjennomkjørt sensor-kommentert case med margnotater ($\max_a$, strategi per iterasjon, samtidig oppdatering). 10–14 oppgaver: verditerasjon på nyskrevne 2–3-tilstands-MDP-er med ulik $\gamma$, pluss modelleringsoppgaver (angi MDP-tuppelen) og T/F om monotoni/$\gamma$/policy som repetisjon.
- **Oppgavesjangre:** G. Mønstereksempel: «Kjør tre iterasjoner av verditerasjon på MDP-en under ($\gamma$ gitt). Vis strategien etter hver iterasjon og oppgi konvergensverdien.»
- **Typiske feil:** Hele fellekatalogen (manglende $\max_a$, ikke-samtidig oppdatering, glemt strategi per iterasjon, glemt $R(s)$).
- **Quiz: 22 · Flashcards: 10**

**Prøve-kvote Del 6:** 4 prøver (Sekvensielle beslutninger)
1. Prøve 6.A (25 min): Modeller som MDP — tuppel + antakelser + Bellman (sjanger G).
2. Prøve 6.B (30 min): Kjør verditerasjon 2–3 iterasjoner med strategi per iterasjon (G).
3. Prøve 6.C (25 min): RL vs. MDP-løsning + deep Q — kort teori/T/F (H).
4. Prøve 6.D (25 min): Blandet — MDP-modell + én verditerasjon + T/F om $\gamma$/monotoni (G/H).

---

### Del 7 — Maskinlæring: trær, nevrale nett og metodevalg *(nevrale nett: nivå 2)*

> Læringssiden skiller TDT4171 skarpt fra TDT4136. Nevrale nett/gradient descent (88 %)
> og beslutningstrær/ID3 (75 %) er nivå-2-kjerne; klassifikatorvalg/metodikk (50 %) er
> nivå 3. Gradientleddet med utledning fra kvadratfeilen er den ferdigheten som testes
> mest presist (V2024 5.1/5.2).

#### Kapittel 7.1: Beslutningstrær og ID3

- **id:** `tdt4171-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4171-1-1` · **kapitteltype:** teori
- **description:** Beslutningstrær som klassifikator og ID3-algoritmen — entropi, informasjonsgevinst og grådig splitting (som ikke garanterer optimalt tre).
- **Eksamensbelegg:** Sjanger J, 75 %. Definisjon (interne noder = attributt-tester, løvnoder = klasser); velg splittattributt ved **maksimal informasjonsgevinst** = reduksjon i entropi. ID3 grådig → ingen garanti for optimalt tre (V2022 TRUE); et tre med nok interne noder kan uttrykke enhver boolsk funksjon (V2019/V2021 TRUE). Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **beslutningstre** (trestruktur; interne noder tester attributter, løvnoder gir klasse); **entropi** $H(X)=-\sum_i p_i\log_2 p_i$; **informasjonsgevinst** (reduksjon i forventet entropi ved å splitte på et attributt). `theorem` **algoritme-kontrakt: ID3** — velg attributtet med høyest informasjonsgevinst som rot, del datasettet, rekurser på hver gren; grådig heuristikk → **ingen garanti for optimalt (minste) tre**; nok interne noder → kan uttrykke enhver boolsk funksjon. Gjennomført eksempel: nyskrevet lite datasett, regn entropi og informasjonsgevinst for to attributter, velg rotsplitt.
- **Oppgavesjangre:** J. Mønstereksempel: «Regn informasjonsgevinsten ved å splitte på hvert attributt i datasettet under, og velg rotattributtet ID3 ville valgt.»
- **Typiske feil:** Regne entropi med feil logbase eller feil sannsynligheter; forveksle informasjonsgevinst med ren entropi; tro ID3 gir optimalt tre (grådig, §J); glemme at nok noder gir full uttrykkskraft.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 7.2: Perceptron og gradient descent

- **id:** `tdt4171-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4171-1-1` · **kapitteltype:** teori
- **description:** Perceptronen, kvadratfeilen og gradient descent — inkludert utledningen av gradientleddet som eksamen ber om å identifisere og begrunne.
- **Eksamensbelegg:** Sjanger I, 88 %. Forklar symbolene ($D$, $\vec{x}$, $t$, $w$, $\eta$); **gradienten** er leddet $2(-x_i(t-o))$, utledet fra den partiellderiverte av **kvadratfeilen** mhp. $w_i$; vi **trekker gradienten fra vektene** for å bevege oss mot lavere feil (V2024 5.1/5.2). Perceptron kan ikke representere XOR (FALSE på det motsatte). Prioritet: **kunne** (gradientleddet **perfekt** innen nivå 2).
- **Innholdskontrakt:** `definition` symbolene: $D$ (treningsdata av $(\vec{x},t)$-par), $\vec{x}$ (input-/attributtvektor), $t$ (mål/target), $o$ (output), $w$ (vekter), $\eta$ (læringsrate). `definition` **kvadratfeil** $E=\frac{1}{2}(t-o)^2$ (eller sum over data). `theorem` **algoritme-kontrakt: gradient descent** — regn gradienten $\frac{\partial E}{\partial w_i}$, oppdater $w_i\leftarrow w_i-\eta\frac{\partial E}{\partial w_i}$ (steepest descent). `text` **utledning**: den partiellderiverte av kvadratfeilen mhp. $w_i$ gir gradientleddet $2(-x_i(t-o))$ (kjerneregelen, steg for steg med intuisjon) — dette er en utledning eksamen krever aktivt. `theorem` **perceptron-begrensning**: en perceptron kan **ikke** representere ikke-lineært separerbare funksjoner (f.eks. XOR). Gjennomført eksempel: identifisér gradientleddet i et gitt uttrykk, begrunn fortegnet, og forklar hvorfor vi trekker det fra vektene.
- **Oppgavesjangre:** I. Mønstereksempel: «Identifisér gradientleddet i vektoppdateringen under, forklar hvert symbol, og begrunn hvorfor det utledes fra kvadratfeilen og trekkes fra vektene.»
- **Typiske feil:** Feil fortegn på gradienten (legge til i stedet for å trekke fra); ikke kunne utlede leddet fra kvadratfeilen; forveksle $t$ (mål) og $o$ (output); tro en enkelt perceptron kan lære XOR (FALSE).
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 7.3: Dyp læring, backpropagation og CNN

- **id:** `tdt4171-7-3` · **number:** 7.3 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4171-7-2` · **kapitteltype:** teori
- **description:** Hva «dyp» betyr, hvordan overtilpasning motvirkes, og hvorfor CNN slår MLP på bilder — det konseptuelle dyp-læring-materialet.
- **Eksamensbelegg:** Sjanger I, 88 % (V2024 6). «Dyp» = mange lag/abstraksjonsnivåer; overtilpasning motvirkes (regularisering L1/L2, dropout, tidlig stopp, mer data, dataaugmentering, kryssvalidering); CNN slår MLP pga. romlig struktur, **delte vekter (weight sharing)** og pooling. Nevrale nett trenes med **backpropagation** (TRUE). Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **dyp læring** (nettverk med mange lag som bygger stadig mer sammensatte trekk/abstraksjonsnivåer); **backpropagation** (gradient bakover gjennom lagene); **overtilpasning** (modellen lærer treningsstøy, generaliserer dårlig); **regularisering** (L1/L2, dropout, tidlig stopp); **CNN** (konvolusjonsfiltre, **weight sharing**, pooling). `theorem` T/F-standpunkt: nevrale nett trenes typisk med backpropagation (TRUE); weight sharing er nøkkelingrediens i CNN (TRUE); CNN slår MLP på bilder pga. romlig struktur + delte vekter + pooling → færre parametre, raskere, mindre overtilpasning. `text` motvirkningsstrategier for overtilpasning (liste). Gjennomført eksempel: forklar hvorfor CNN slår MLP på et bildeproblem, og list tre tiltak mot overtilpasning med begrunnelse.
- **Oppgavesjangre:** I (kort teori/T/F). Mønstereksempel: «Forklar hva «dyp» betyr i dyp læring, og hvorfor en CNN typisk slår en MLP på bildeklassifisering.» + «List tre tiltak mot overtilpasning.»
- **Typiske feil:** Si «dyp» = mange nevroner (det er mange **lag**); glemme weight sharing/pooling som CNN-fordelen; blande regulariseringsteknikker; tro flere lag alltid er bedre (overtilpasning).
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 7.4: Klassifikatorvalg og ML-metodikk

- **id:** `tdt4171-7-4` · **number:** 7.4 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4171-7-3` · **kapitteltype:** teori
- **description:** Hvordan du velger den enkleste metoden som løser et datasett, og den faste metodikk-fellen: valideringssett, aldri test-sett, til hyperparametervalg.
- **Eksamensbelegg:** Sjanger K, 50 %. Velg metode mot datasett (V2017 4a): lineært separerbart → perceptron; ikke-lineært/XOR → beslutningstre eller dyp læring; **velg den enkleste** som løser oppgaven. Metodikk-felle (V2017 4c): bruk et eget **valideringssett** til hyperparametervalg, **aldri test-settet**. Prioritet: **kjenne**.
- **Innholdskontrakt:** `text`/`theorem` **metodevalg**: lineært separerbart → perceptron (enklest); ikke-lineært → beslutningstre / dyp læring; CBR (euklidsk avstand) gir delvis uttelling der andre passer bedre; **velg enkleste metode som løser datasettet**. `definition` **treningssett / valideringssett / test-sett**; `warning` **metodikk-fellen**: velg hyperparametre på **valideringssettet**, aldri på **test-settet** (ellers overrapporterer man ytelsen). Gjennomført eksempel: gitt tre datasettbeskrivelser, velg og begrunn klassifikator; forklar korrekt bruk av validerings- vs. test-sett.
- **Oppgavesjangre:** K. Mønstereksempel: «For hvert av datasettene under, velg den enkleste egnede klassifikatoren og begrunn.» + «Hvorfor skal hyperparametre velges på valideringssettet og ikke test-settet?»
- **Typiske feil:** Velge en unødig kompleks metode (dyp læring på lineært separerbart); bruke test-settet til hyperparametervalg (§5.9, overrapportering); blande validerings- og test-sett; tro CBR alltid er like godt.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 7:** 4 prøver (Maskinlæring)
1. Prøve 7.A (25 min): Beslutningstrær/ID3 — regn informasjonsgevinst og velg splitt (sjanger J).
2. Prøve 7.B (25 min): Gradientleddet — identifiser, utled fra kvadratfeil, begrunn fortegn (I).
3. Prøve 7.C (25 min): Dyp læring/CNN/overtilpasning — kort teori/T/F (I).
4. Prøve 7.D (20 min): Klassifikatorvalg + validerings- vs. test-sett (K).

---

### Del 8 — Case-based reasoning (CBR) *(CBR: PERFEKT — NTNU-signatur)*

> CBR er NTNU-signaturen — en fast bestanddel *hvert år* (100 %), alltid som teori-/
> drøftespørsmål. **Billige, sikre poeng hvis du kan syklusen.** Ett solid kapittel
> holder; frekvensen er høy, men formen er ren gjenkalling + drøfting.

#### Kapittel 8.1: CBR-syklusen (R⁴) og når CBR slår dyp læring

- **id:** `tdt4171-8-1` · **number:** 8.1 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4171-7-4` · **kapitteltype:** teori
- **description:** Case-based reasoning — de fire stegene Retrieve–Reuse–Revise–Retain, avstandsmålet mot case-basen, og når CBR er å foretrekke fremfor dyp læring.
- **Eksamensbelegg:** Sjanger L, 100 % (som teori/drøfting). Fire steg i **R⁴-syklusen**; CBR bruker et **avstandsmål** mot case-basen; CBR *er* en form for (instansbasert) veiledet læring. Når CBR slår dyp læring (V2024 9.2): lite data / sjeldne tilfeller, behov for forklarbarhet, lav treningskostnad, hvert nytt case forbedrer systemet umiddelbart. Prioritet: **perfekt** (lettjente poeng).
- **Innholdskontrakt:** `definition` **case-based reasoning** (løs et nytt problem ved å hente og tilpasse løsningen på et lignende tidligere case); **case-base** (samling av tidligere cases); **likhets-/avstandsmål** (f.eks. euklidsk avstand). `definition` per steg i **R⁴-syklusen**: **Retrieve** (finn nærmeste case med avstandsmål); **Reuse** (bruk den hentede løsningen på den nye situasjonen); **Revise** (tilpass/verifiser løsningen); **Retain** (lagre den nye casen i case-basen → systemet lærer). `theorem` CBR er en form for instansbasert/veiledet maskinlæring. `text` **når CBR slår dyp læring**: lite data / sjeldne tilfeller (f.eks. sjeldne diagnoser), behov for **forklarbarhet** og manuell korrigerbarhet, lav treningskostnad, umiddelbar forbedring per nytt case. `warning` at fasiten er raus (flere gyldige formuleringer) — men navngi de fire stegene i riktig rekkefølge og gi hovedpoenget først.
- **Oppgavesjangre:** L. Mønstereksempel: «Forklar CBR-syklusen (de fire stegene) og hva som skjer i hvert. Nevn to situasjoner der CBR er å foretrekke fremfor dyp læring, og begrunn.»
- **Typiske feil:** Feil rekkefølge eller manglende steg i R⁴; blande Reuse og Revise; glemme at Retain er læringssteget; tro CBR ikke er maskinlæring; ikke kunne begrunne når CBR slår dyp læring.
- **Quiz: 18 · Flashcards: 22**

**Prøve-kvote Del 8:** 4 prøver (Case-based reasoning) — korte (nivå: ren teori/drøfting)
1. Prøve 8.A (15 min): Navngi og forklar de fire R⁴-stegene i rekkefølge (sjanger L).
2. Prøve 8.B (15 min): Avstandsmål + CBR som instansbasert læring (L).
3. Prøve 8.C (20 min): Når slår CBR dyp læring? — drøft med begrunnelse (L).
4. Prøve 8.D (15 min): Blandet CBR-teori + T/F om syklusen (L).

---

### Del 9 — KI-grunnlag, etikk og NLP *(KI-grunnlag T/F: PERFEKT)*

> KI-grunnlag (rasjonalitet, Turing, svak/sterk KI) er en 100 %-gjenganger i T/F-
> batteriet med faste fasit-standpunkt som skal læres utenat — dette er også den eneste
> broen tilbake til TDT4136. Etikk-listen (6 punkter) og NLP/word embeddings (nytt,
> 13 %↑) bor her.

#### Kapittel 9.1: KI-grunnlag: rasjonalitet, Turing og svak/sterk KI

- **id:** `tdt4171-9-1` · **number:** 9.1 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4171-0-2` · **kapitteltype:** teori
- **description:** De faste T/F-standpunktene om rasjonalitet, Turing-testen og svak/sterk KI — puggematerialet som gir sikre (men negativt rettede) poeng.
- **Eksamensbelegg:** Sjanger A, 100 % (T/F-batteri, negativ retting). Faste fasit-standpunkt (lær utenat). Dette er broen til TDT4136 (rasjonelle agenter). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition`/`theorem` fasit-standpunktene som puggekort: å handle rasjonelt er **ikke** det samme som å handle som mennesker (FALSE at de er like); en agent med **feilbefengte/delvise sensorer kan fortsatt være rasjonell** (TRUE — rasjonalitet = beste ut fra tilgjengelig info, ikke perfekt info); svak KI **kan** bestå Turing-testen (TRUE); at et system **må** «tenke som et menneske» for å bestå Turing er FALSE; en agent trenger **ikke** eksplisitt beregne nytte og sannsynlighet for å være rasjonell; **hovedmålet** med faget er *ikke* «å forstå hva intelligens er»; sterk KI slår ikke svak KI per definisjon på alle oppgaver (FALSE); Turing-bestått **beviser ikke** sterk KI (det kinesiske rom). `text` kort bro til TDT4136: rasjonelle agenter, nyttemaksimering — men **ingen søk/logikk/CSP** (det er forgjengerfaget). `warning` negativ retting → svar bare de standpunktene du kan (kobling til kap. 0.2).
- **Oppgavesjangre:** A (T/F). Mønstereksempel: T/F-batteri med 6–8 påstander om rasjonalitet/Turing/svak-sterk KI, der studenten skal avgjøre og markere hvilke hun ville latt stå blankt.
- **Typiske feil:** Tro rasjonell = handle som mennesker / = allvitende; tro Turing-bestått beviser sterk KI (kinesiske rom); gjette på negativt rettede ledd uten å kunne standpunktet; blande svak og sterk KI.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 9.2: KI-etikk

- **id:** `tdt4171-9-2` · **number:** 9.2 · **estimatedMinutes:** 35 · **prerequisites:** `tdt4171-9-1` · **kapitteltype:** teori
- **description:** De etiske betenkelighetene ved KI som list-oppgaven belønner — poeng gis proporsjonalt med antall gyldige punkter.
- **Eksamensbelegg:** Sjanger A, 100 % (etikk-ledd, list-oppgave V2024). Poeng proporsjonalt med antall gyldige punkter. Prioritet: **perfekt** (lettjente poeng).
- **Innholdskontrakt:** `definition`/`text` de seks faste betenkelighetene: **dødelige autonome våpen**; **masseovervåkning / personvern**; **skjevhet / bias** (diskriminering); **manglende transparens** (forklarbarhet); **jobbautomatisering / arbeidsledighet**; **maktkonsentrasjon / rikdomskonsentrasjon**. `text` hver med én setnings begrunnelse/eksempel. `warning` list-oppgaver gir poeng per gyldig punkt → nevn flere; ta hovedpunktene først (delvis uttelling er regelen).
- **Oppgavesjangre:** A (list/kort drøfting). Mønstereksempel: «List og forklar kort fem etiske betenkeligheter ved utbredt bruk av KI.»
- **Typiske feil:** Nevne for få punkter (poeng er proporsjonalt); vage punkter uten begrunnelse; gjenta samme betenkelighet i ulike ord; blande etikk med tekniske begrensninger.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 9.3: NLP og word embeddings

- **id:** `tdt4171-9-3` · **number:** 9.3 · **estimatedMinutes:** 40 · **prerequisites:** `tdt4171-7-3` · **kapitteltype:** teori
- **description:** Word embeddings som tette semantiske vektorer og hvordan de brukes i en klassifiseringspipeline — det ferske NLP-tilskuddet (V2024).
- **Eksamensbelegg:** Sjanger M, 13 % — **nytt (V2024), i vekst**. Word embeddings er tette vektorer som fanger semantikk og slår one-hot; spamklassifisering (V2024 7.2): slå ord opp i forhåndstrente embeddinger → aggreger → klassifiser. Prioritet: **kjenne** (men i vekst — dekk kort).
- **Innholdskontrakt:** `definition` **word embedding** (tett vektorrepresentasjon av ord som fanger semantikk — like ord ligger nær hverandre); **one-hot** (sparsom, ingen semantiske relasjoner). `theorem` hvorfor embeddings slår one-hot: lavere dimensjon, meningsfulle relasjoner. `text` **klassifiseringspipeline**: slå ord opp i forhåndstrente embeddinger → aggreger (f.eks. snitt) → mat inn i klassifikator (nevralt nett) → klassifiser nye tekster. Gjennomført eksempel: skisser en spam-/sentimentklassifikator basert på word embeddings.
- **Oppgavesjangre:** M. Mønstereksempel: «Forklar hva word embeddings er og hvorfor de er bedre enn one-hot for tekstklassifisering. Skisser en pipeline for å klassifisere e-post som spam/ikke-spam med embeddings.»
- **Typiske feil:** Forveksle embeddings (tette) med one-hot (sparsomme); glemme aggregeringssteget; tro embeddings i seg selv klassifiserer (de mates inn i en klassifikator); overkomplisere (temaet er nytt/lavvektet).
- **Quiz: 14 · Flashcards: 16**

**Prøve-kvote Del 9:** 4 prøver (KI-grunnlag, etikk og NLP)
1. Prøve 9.A (20 min): KI-grunnlag T/F-batteri — rasjonalitet/Turing/svak-sterk KI (sjanger A).
2. Prøve 9.B (15 min): Etikk-liste — fem betenkeligheter med begrunnelse (A).
3. Prøve 9.C (20 min): Word embeddings + klassifiseringspipeline (M).
4. Prøve 9.D (20 min): Blandet grunnlag + etikk + NLP med blankestrategi (A/M).

---

### Del 10 — Eksamenstrening

> Del 10 samler tråden: ett tverrgående T/F-batteri-drill (der negativ retting og
> disiplinert blanking trenes under realistisk press) og **tre komplette
> øvingseksamener** som speiler de to formatæraene. Til sammen dekker de sjangrene
> A–M og alle fem 100 %-temaer flere ganger.

#### Kapittel 10.1: T/F-batteriet — negativ retting på tvers av alle temaer

- **id:** `tdt4171-10-1` · **number:** 10.1 · **estimatedMinutes:** 70 · **prerequisites:** `tdt4171-9-3` · **kapitteltype:** drill
- **description:** Stort tverrgående sant/usant-batteri med negativ retting — trener både faktakunnskapen (fasit-standpunktene) og den strategiske disiplinen (svar eller blank).
- **Eksamensbelegg:** Sjanger A/C + T/F-ledd i F/G/H/I/J, 100 %. Auto-rettet med negativ retting (+1/−1 moderne, +2/−3 klassisk; noen alt-eller-intet). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** Repriser forventningsregelen fra kap. 0.2 (svar bare når forventet verdi er positiv). 40–60 T/F-påstander samlet fra alle temaer: rasjonalitet/Turing (9.1), d-separasjon (2.3–2.4), HMM-inferenstyper (4.3), MDP-monotoni/$\gamma$ (6.2), RL vs. dyp læring (6.3), perceptron-XOR / backprop / weight sharing (7.2–7.3), ID3-uttrykkskraft/grådighet (7.1), Markov krever ikke Bayes' regel (4.1). Hvert svar merkes: sikker → svar; usikker → blank, med begrunnelse. Gjennomkjørt sensor-kommentert «batteri» med margnotater om når blank er korrekt strategi og hva et gjett koster. Del påstandene i sikre (svar) og feller (blank/verifiser).
- **Oppgavesjangre:** A/C + T/F på tvers. Mønstereksempel: «Gå gjennom T/F-batteriet under. For hvert ledd: avgjør sant/usant eller la stå blankt, og oppgi forventet-verdi-begrunnelsen for valget.»
- **Typiske feil:** Gjette på usikre ledd (negativ forventning); svare et alt-eller-intet-ledd delvis; behandle d-separasjon som intuisjon; ikke kjenne fasit-standpunktene som *er* sikre poeng.
- **Quiz: 24 · Flashcards: 10**

#### Kapittel 10.2: Øvingseksamen 1 — klassisk 4-oppgavers sett (kode D)

- **id:** `tdt4171-10-2` · **number:** 10.2 · **estimatedMinutes:** 240 · **prerequisites:** `tdt4171-10-1` · **kapitteltype:** øvingseksamen
- **description:** Komplett øvingseksamen som speiler den klassiske æraen (t.o.m. ~2019): fire store oppgaver — T/F-batteri, MDP/verditerasjon, Bayes-nett-inferens, ML/CBR — med negativ retting +2/−3.
- **Eksamensbelegg:** Speiler klassisk format (V2015–V2019). Miks: (Q1) KI-grunnlag T/F (A) + etikk; (Q2) MDP/verditerasjon (G); (Q3) Bayes-nett-struktur + inferens ved enumerasjon (D); (Q4) ML-metodevalg + CBR (K/L). Negativ retting +2/−3, gulv 0.
- **Innholdskontrakt:** Fire nyskrevne oppgaver med reell vekting og varighet (240 min), løsningsforslag i eget `collapsible` per oppgave skrevet som A-besvarelse (**symbolsk form før tall**, strategi per verditerasjon-iterasjon, symbolsk enumerasjon), med `tip`-notat om delpoeng/vekting og hvor blank er korrekt strategi.
- **Oppgavesjangre:** A, D, G, K, L. Nyskrevne tall/kontekster.
- **Typiske feil:** Samlet feilkatalog for de dekkede sjangrene (se hvert temakapittel).
- **Quiz: 14 · Flashcards: 0** (rent oppgavesett)

#### Kapittel 10.3: Øvingseksamen 2 — moderne Inspera-sett (~9 oppgaver)

- **id:** `tdt4171-10-3` · **number:** 10.3 · **estimatedMinutes:** 240 · **prerequisites:** `tdt4171-10-2` · **kapitteltype:** øvingseksamen
- **description:** Komplett øvingseksamen som speiler moderne Inspera-format (2021–2024): ~9 nummererte oppgaver med mange auto-rettede T/F-ledd rundt en kjerne av regn/tegn-oppgaver, sum 100 %.
- **Eksamensbelegg:** Speiler V2021–V2024. Miks: KI-grunnlag T/F (A, 6 %) + d-separasjon-blokk (C, negativ retting) + Bayes-nett-konstruksjon/inferens (D, 10 %) + beslutningsnett med VPI (E, 16 %) + HMM-filtrering (F, 20 %) + nevralt nett/gradient (I, 10 %) + dyp læring (I, 10 %) + RL/deep Q (H, 10 %) + CBR (L, 10 %); mulig NLP (M, 8 %). Negativ retting +1 %/−1 %.
- **Innholdskontrakt:** ~9 nyskrevne oppgaver med prosentvekt som summerer til 100, 240 min. Løsningsforslag per oppgave som A-besvarelse (symbolsk form før tall i F/D; VPI komplett i E; d-separasjon sti for sti i C), `tip`-notat om vekting og blankestrategi på de negativt rettede leddene.
- **Oppgavesjangre:** A, C, D, E, F, H, I, L, (M). Nyskrevne innpakninger.
- **Typiske feil:** Samlet feilkatalog; særlig collider-etterkommer (C), manglende $\alpha$ (F), VPI uten optimal handling per verdi (E).
- **Quiz: 14 · Flashcards: 0** (rent oppgavesett)

#### Kapittel 10.4: Øvingseksamen 3 — regn/tegn-tungt topp-sett

- **id:** `tdt4171-10-4` · **number:** 10.4 · **estimatedMinutes:** 240 · **prerequisites:** `tdt4171-10-3` · **kapitteltype:** øvingseksamen
- **description:** Komplett øvingseksamen vektlagt mot den karaktergivende regn/tegn-kjernen — der A/B-nivået skilles på feilfri symbolsk mellomregning, komplett VPI og presis d-separasjon på colliders.
- **Eksamensbelegg:** Speiler et regnetungt topp-sett. Vekt på de tunge regneoppgavene: full HMM-filtrering over tre steg (F), posterior ved enumerasjon med to skjulte (D), komplett VPI (E), verditerasjon med strategi per iterasjon (G), d-separasjon med collider/etterkommer (C), gradientledd-utledning (I). Pluss CBR (L) og KI-grunnlag (A) som sikre poeng.
- **Innholdskontrakt:** 8–9 nyskrevne oppgaver vektet mot regn/tegn, 240 min. Løsningsforslag som A-besvarelse med full synlig symbolsk mellomregning; `tip`-notat om hvor toppsjiktet skilles (feilfri normalisering, colliders med observerte etterkommere, VPI-differansen komplett).
- **Oppgavesjangre:** C, D, E, F, G, I + A, L. Nyskrevne tall/kontekster.
- **Typiske feil:** Toppsjikt-fellene (§4-nivåbeskrivelsen): manglende symbolsk form, feil normalisering, aktiv collider oversett, VPI ufullstendig.
- **Quiz: 14 · Flashcards: 0** (rent oppgavesett)

**Del 10 får ikke egne temaprøver** (Del 10 **er** eksamenstreningen; T/F-batteriet og de tre øvingseksamenene erstatter prøvene).

---

## 5. Summeringskontroll (quiz/flashcards) — AUTORITATIV

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.2 | 16+18 = **34** | 16+12 = **28** |
| 1 | 1.1–1.3 | 16+18+20 = **54** | 18+22+8 = **48** |
| 2 | 2.1–2.4 | 18+16+20+24 = **78** | 24+18+24+12 = **78** |
| 3 | 3.1–3.2 | 18+22 = **40** | 22+10 = **32** |
| 4 | 4.1–4.4 | 18+18+20+24 = **80** | 24+20+24+12 = **80** |
| 5 | 5.1–5.3 | 18+18+22 = **58** | 24+20+10 = **54** |
| 6 | 6.1–6.4 | 16+18+18+22 = **74** | 22+18+22+10 = **72** |
| 7 | 7.1–7.4 | 16+16+18+16 = **66** | 20+20+22+16 = **78** |
| 8 | 8.1 | **18** | **22** |
| 9 | 9.1–9.3 | 20+14+14 = **48** | 22+14+16 = **52** |
| 10 | 10.1–10.4 | 24+14+14+14 = **66** | 10+0+0+0 = **10** |
| **Sum** | **34 kap.** | **616 ≥ 500 ✓** | **554 ≥ 500 ✓** |

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens og eksamensform. **Begge kvoter er bevisst skalert opp
over gulvet (616 quiz / 554 flashcards, ikke ~500)** fordi TDT4171, tross regnefag-
arketypen, er **påfallende begrepsrikt**: hvert tema bærer en mengde navngitte
definisjoner, inferenstyper og faste **T/F-fasit-standpunkt** som alle må sitte til en
kode D-eksamen. Quiz vektes tungt fordi den reelle eksamen har store T/F-batterier —
plattformens MC-quiz er det nærmeste treningsapparatet for fasit-standpunktene
(rasjonalitet, HMM-inferenstyper, MDP-monotoni, RL vs. dyp læring, d-separasjonsregler),
derfor bærer de fem 100 %-delene (Del 2, 3, 4, 8, 9) og drillkapitlene mest quiz.
Flashcards vektes mot **begrep ↔ definisjon/formel ↔ egenskap** (nodetyper,
inferenstyper med $k$-relasjon, d-separasjonsregler, R⁴-stegene, MDP-tuppelen,
gradientleddet, fasit-standpunktene) og bæres av teorikapitlene; drillkapitlene gir
færre flashcards (mer oppgavefokus) og øvingseksamenene (10.2–10.4) gir 0 flashcards
(rene oppgavesett) men bidrar med quiz. Flashcard-tettheten er høyest i de to
ryggrads-delene (Del 2 og 4, 78–80 kort) og i maskinlæringsdelen (Del 7, 78 kort),
som alle er tunge på navngitte begreper.

---

## 6. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–9 → 36 prøver)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med kort løsningsforslag (**synlig
symbolsk mellomregning**) og poengfordeling. Prøvekapitler bygges som
`tdt4171-<del>-prove` (chapterNumber `<del>.P`) etter plattformmønsteret, eller som egne
exercise-seksjoner i delens siste kapittel. Prøvekvotene per del står i sluttblokken til
hver del over (Del 1–9). Del 0 og Del 10 får ikke egne prøver (Del 10 **er**
øvingseksamenene + T/F-batteriet). CBR-delen (Del 8) og etikk/NLP (Del 9) får kortere
prøver (15–20 min) siden formen er teori/drøfting.

### Øvingseksamener (3 komplette sett — se kap. 10.2–10.4)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (10.2) | Klassisk 4-oppgavers æra (2015–2019) | 4 store oppgaver: T/F-grunnlag (A) + MDP/verditerasjon (G) + Bayes-inferens (D) + ML/CBR (K/L); negativ retting +2/−3 |
| Øvingseksamen 2 (10.3) | Moderne Inspera (2021–2024) | ~9 oppgaver: A + C + D + E(VPI) + F(HMM 20 %) + I×2 + H + L + (M); negativ retting +1/−1 |
| Øvingseksamen 3 (10.4) | Regn/tegn-tungt topp-sett | 8–9 oppgaver vektet mot F/D/E/G/C/I der A/B skilles på symbolsk presisjon |

Til sammen dekker de tre settene alle sjangre A–M og alle fem 100 %-temaene flere ganger.

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — én firetimers kode D-eksamen (bestemt kalkulator), tre
   svartyper (T/F med negativ retting, regn/tegn-kjerne, kort teori), to formatæraer, og
   at **bredden er eksamensformen** (fem 100 %-temaer hvert år). TDT4136-avgrensningen
   (fra kap. 0.1) og negativ-retting-strategien (fra kap. 0.2).
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer:
   **perfekt** (d-separasjon Del 2, Bayes-inferens Del 3, HMM Del 4, CBR Del 8,
   KI-grunnlag Del 9), **kunne** (beslutningsnett Del 5, MDP/RL Del 6, nevrale nett/trær
   Del 7), **kjenne** (simultanfordeling Del 1, metodevalg Del 7, NLP Del 9 — men
   fundament / differensierer / i vekst).
3. **Sjangerguiden** — de tretten oppgavetypene A–M med løsningsoppskriftene fra
   drillkapitlene (1.3, 2.4, 3.2, 4.4, 5.3, 6.4) i kortform, pluss T/F-/blankestrategien
   (0.2, 10.1).
4. **Sensorreglene** — de seks metareglene (vis symbolsk form før tall; rund to
   desimaler; bygg nettet «riktig vei»; negativ retting → ikke gjett; fasiten raus med
   beslektede svar; spesifiser antakelser ved tvetydighet).
5. **Feilkatalogen** — de tolv typiske feilene (§5 i analysen) samlet, hver med
   henvisning til kapitlet som forebygger den: uavhengighet uten d-separasjon / aktiv
   collider via etterkommer (2.3–2.4), dobbelttelling i $P(a\vee b)$ (1.1), manglende
   utsummering av skjulte (3.1), tall før symbolsk form (4.2), glemt $\alpha$ (4.2), feil
   nodetype / utility med barn (5.1), «bakvendt» Bayes-nett (2.2), gjett på negativt
   rettet ledd (0.2), test-sett til hyperparametervalg (7.4), blande inferenstypene
   (4.3), Markov krever ikke Bayes' regel (4.1), RL som dyp læring (6.3).
6. **Notasjons- og algoritmeark** — all sannsynlighetsnotasjon ($P(a\mid b)$,
   faktorisering, $\alpha$), forward-algoritmen (prediksjon → oppdatering →
   normalisering), inferens ved enumerasjon, Bellman/verditerasjon, MEU-algoritmen, VPI,
   ID3/informasjonsgevinst, gradientleddet $2(-x_i(t-o))$, d-separasjonsreglene og R⁴ —
   samlet puggeark for kode D-eksamen.
7. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant): Del 1
   (sannsynlighetsgrunnlag) → Del 2 (d-separasjon — ryggraden, mest volum) → Del 3
   (enumerasjon) → Del 4 (HMM — tyngst vektet) → Del 5 (beslutningsnett/VPI) → Del 6
   (MDP/verditerasjon/RL) → Del 7 (maskinlæring) → Del 8 (CBR — lettjente poeng) → Del 9
   (KI-grunnlag/etikk/NLP — sikre T/F-poeng) → prøvene underveis → T/F-batteriet (10.1)
   og de tre øvingssettene (10.2–10.4) de siste ukene under tidspress (240 min), med
   bevisst trening på disiplinert blanking.

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `tdt4171` med alle 34 kapitler
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites/
   linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra §2-tabellen (obligatorisk).
   **`number` er del-basert** («4.2», ALDRI lineær «14» — jf. JUS1111-lærdommen;
   prosareferanser i innholdet bruker samme form, «kap. 4.2»).
2. **Del 0** (kap. 0.1–0.2) — etablerer sjangernavnene A–M, frekvenstallene, svartypene,
   TDT4136-avgrensningen og negativ-retting-strategien resten refererer til.
3. **Temadelene i avhengighetsrekkefølge**: Del 1 (sannsynlighet — fundamentet) → Del 2
   (Bayes-nett/d-separasjon; krever sannsynlighet) → Del 3 (enumerasjon; krever
   struktur) → Del 4 (HMM; krever sannsynlighet/Markov) → Del 5 (beslutningsnett; krever
   Bayes-nett) → Del 6 (MDP/RL; krever Markov/sannsynlighet) → Del 7 (maskinlæring;
   uavhengig) → Del 8 (CBR; krever ML-kontekst) → Del 9 (KI-grunnlag/etikk/NLP; nesten
   uavhengig).
4. Del 10 (eksamenstreningen til slutt — gjenbruker alle sjangre; bygges av én agent som
   leser HELE skjelettet).
5. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; prøvene (§6) legges i respektive delers prøvekapittel/
   exercise-seksjoner.
6. **Navigasjon/wiring**: NTNU finnes ennå ikke i
   `src/app/bok/trinn/hoyere/institusjoner.ts` (kun UiO + BI er live). Legg til en NTNU-
   institusjon (`slug: 'ntnu'`, `fullName: 'Norges teknisk-naturvitenskapelige
   universitet'`) med `tdt4171` som første fag («TDT4171 Metoder i kunstig intelligens»);
   tdt4120/tdt4136 legges under samme institusjon når de bygges.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (escape `"`
  i norske sitattegn; `\\` for LaTeX-kommandoer; anbefal `json.dump` i byggekontrakten);
  `npm run build` grønn.
- [ ] **AIMA-notasjonskonsistens**: all sannsynlighetsnotasjon og alle algoritmenavn
  følger AIMA ($P(X\mid\text{foreldre}(X))$, $\alpha$, forward-algoritmen, Bellman
  $U^*(s)$, MEU, VPI, d-separasjon, R⁴, gradient $2(-x_i(t-o))$); engelsk fagterm kun i
  parentes ved første forekomst; ved tvil er engelsk tekst fasit.
- [ ] **«Vis symbolsk form før tall» i alle regnende løsningsforslag**: filtrering
  (prediksjon → oppdatering → normalisering), inferens ved enumerasjon (teller/nevner som
  summer over skjulte), verditerasjon (Bellman + strategi per iterasjon), VPI (EU per
  handling → betinget EU → differanse). Drill- og eksamenscasene har margnotater om at
  **korrekt flyt gir full uttelling selv med litt gale tall, men gal flyt gir null**, og
  at det rundes til to desimaler.
- [ ] **d-separasjon som ryggrad**: Del 2 dekker alle koblingstyper og har eksplisitt
  `warning` om at **colliders blir aktive når en etterkommer er observert** (den vanligste
  fellen); drillen (2.4) roterer collider/etterkommer-fellen og kobler til blankestrategi.
- [ ] **Bygg Bayes-nettet «riktig vei»**: kap. 2.2 har eksplisitt `warning` om at
  kanter må gå årsak → virkning slik at en domeneekspert kan oppgi CPT-ene (eksplisitt
  sensurkriterium); fasit-raushet dokumentert (flere korrekte nett godtas).
- [ ] **Negativ-retting-strategien**: kap. 0.2 gir forventningsregelen og
  blanke-terskler; kap. 10.1 driller den tverrgående; hvert T/F-tungt kapittel (9.1, 9.2,
  4.3, 6.2, 6.3, 7.1–7.3) minner om disiplinert blanking. Quiz-`options[0]` = riktig svar.
- [ ] **Notasjons- og algoritmeliste per delkapittel**: hvert delkapittel som bruker
  notasjon/algoritmer har `collapsible` «Notasjons- og algoritmeliste» rett etter
  Forkunnskaper, som forklarer ALL sannsynlighetsnotasjon, alle algoritmer (m/inn-ut-
  kontrakt) og alle modell-/beslutningsbegreper brukt i delkapitlet (per delkapittel,
  ikke arv). Unntak kun for CBR-teori (8.1) og etikk (9.2) hvis helt notasjonsfrie.
- [ ] **Algoritme-kontrakter**: forward-algoritmen (4.2), inferens ved enumerasjon (3.1),
  Bellman-verditerasjon (6.2), MEU-evaluering (5.2), ID3 (7.1) og gradient descent (7.2)
  har hver en `theorem`-blokk med nyskrevet AIMA-stil prosedyre.
- [ ] **De faste fellene som warnings**: uavhengighet uten d-separasjon / aktiv collider
  via etterkommer (2.3–2.4), dobbelttelling i $P(a\vee b)$ (1.1), manglende utsummering
  av skjulte (3.1), tall før symbolsk form + glemt $\alpha$ (4.2), feil nodetype / utility
  med barn (5.1), «bakvendt» nett (2.2) — hver har eksplisitt `warning`-blokk.
- [ ] **INGEN TDT4136-stoff**: Del 0 sier eksplisitt at søk/CSP/logikk/adversarielt/PDDL/
  spillteori er forgjengerfaget og ikke testes; boka bruker ikke plass på det (maks en kort
  bro via rasjonalitets-/agentrammen i kap. 9.1). NLP/word embeddings (nytt, V2024) er
  dekket i kap. 9.3 tross lav frekvens.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra dette
  skjelettet), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger
  med `solution` + `hints`, repetisjons-`collapsible`; drillkapitler har løsningsoppskrift
  + sensor-kommentert case + 8–15 oppgaver.
- [ ] **Quiz-sum ≥ 616 og flashcard-sum ≥ 554** per kvotetabellen (§5); quiz kalibrert som
  T/F-/faktakontroll med fasit-standpunkt, `options[0]` = riktig svar; flashcards kalibrert
  som begrep ↔ definisjon/formel ↔ egenskap.
- [ ] **Prøver**: 4 per temadel 1–9 (36 stk) + 3 øvingseksamener (kap. 10.2–10.4) + T/F-
  batteriet (10.1) som sammen dekker sjangrene A–M og alle fem 100 %-temaer.
- [ ] **Opphavsrett**: ALLE oppgaver, tall, Bayes-nett, HMM-tabeller, beslutningsnett,
  MDP-verdener og innpakninger nyskrevne — egne scenarioer/tall/kontekster; algoritmenavn,
  standardnotasjon og faglige definisjoner er allmenn faglig notasjon, men ingen
  oppgavetekster/fasiter fra reelle sett gjengis; pensumlitteratur (AIMA / Russell &
  Norvig) refereres (forfatter/verk/begrep), aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 +
  innhold), jf. lærdommen om `getChapterMeta`.
