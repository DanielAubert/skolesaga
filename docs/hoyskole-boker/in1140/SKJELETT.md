# Bokskjelett: IN1140 Introduksjon til språkteknologi (UiO) — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (UiO-arkivet 2017–2022: **7 oppgavesett** og **4 fullstendige
> løsningsforslag med eksplisitt poengfordeling** — H2017, H2019-prøve, H2021,
> H2022). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der
> (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke i sin helhet her.
> Alle oppgaver, eksempelsetninger, korpus, regulære uttrykk, grammatikker og
> modellbesvarelser i den ferdige boka skal være **nyskrevne** (opphavsrett):
> formelapparatet og notasjonen er fagets standard, men setninger, tall, korpus,
> navn og oppgavetekster skal være forfatterens egne.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `in1140` |
| Tittel | **IN1140 Introduksjon til språkteknologi** |
| Level | `'Høyskole'` |
| Institusjon | Universitetet i Oslo (UiO), Institutt for informatikk (IFI) |
| Arketype | **Regnefag / formell-hybrid** — computasjonelt regne-/prosedyrefag (`DNA-regnefag.md`: teori → gjennomregnet eksempel med *alle* mellomregninger → øvingsoppgaver med fasit, `theorem`-blokker for formelle prosedyrer, drillkapitler). Den «forklar-begrep»-halvdelen bygges som presise, korte modellsvar mot en poeng-sjekkliste — se §1.1. |
| Antall kapitler | **38** (Del 0: 2 · DEL A [Del 1–5]: 14 · DEL B [Del 6–12]: 17 · Eksamenstrening [Del 13]: 5) + 12 prøvekapitler (ett per temadel 1–12) |
| Estimert totaltid | **~2 060 min ≈ 34 timer** (per kapittel under; prøver kommer i tillegg) |
| Quiz totalt | **724** (krav ≥500; formell/regne + klassifisering ER autorettbart, og begrepsbanken er stor → siktet høyt, jf. README «≥500 er et gulv») |
| Flashcards totalt | **628** (krav ≥500; begrepsrikt fag [leksikale relasjoner, roller, ordklasser, BIO, morfologi, evaluering] + formler → sikt godt over gulvet) |
| Status | **NEDLAGT (verifiser).** Siste ordinære undervisning høst 2025; eksamen tilbys t.o.m. **høst 2027** kun for studenter med tidligere godkjente obliger. Ingen 1:1-erstatning; delvis videreført i **INF1820 – Introduksjon til språk- og kommunikasjonsteknologi** *(verifiser)*. Boka kalibreres mot IN1140s egne 7 sett fordi eksamen lever t.o.m. 2027 og pensumkjernen (klassisk, før-nevral NLP) er stabil. |

**Pitch (ett avsnitt):** IN1140-eksamen er én **4-timers digital skoleeksamen i
Inspera, uten hjelpemidler**, karakter A–F, gitt hver høst. Emnets viktigste
strategiske funn er at faget verken er et rent essayfag eller et rent regnefag,
men en **utpreget miks av fem oppgavesjangre i samme sett**: (1) flervalg/paring
(gjenkjenn regex, tildel ordklasse, klassifiser semantisk rolle, par leksikale
relasjoner, BIO-tagg), (2) **skriv et formelt artefakt** (regulært uttrykk fra
spesifikasjon, utled/utvid en kontekstfri grammatikk), (3) **regn** (bigram-/
trigram-sannsynlighet, Naive Bayes med glatting — vis alle steg), (4) **forklar
begrep kort** (glatting, Markov-antakelsen, uavhengighetsantakelsen, entailment),
og (5) **tegn** frasestrukturtre(r) for en ofte flertydig setning. Grovfordelingen
er ca. **35–40 % formell utregning/artefakt-skriving**, ca. **30–35 %
klassifiser/tildel**, ca. **25–30 % forklar-begrep** — ren fri drøfting finnes
nesten ikke. **All programmering skjer i obligene, ikke på eksamen** — selve
eksamen er «penn-og-papir»-aktig formell oppgaveløsning gjort digitalt. De **fire
absolutte kjernetemaene står i alle 7 sett**: regulære uttrykk (7/7),
ordklasser/POS-tagging (7/7), **syntaks/kontekstfri grammatikk (7/7, det
poengtyngste temaet — 24 p i H2022)** og leksikale relasjoner (7/7); tett fulgt av
semantiske roller (6/7) og NER/BIO (6/7), deretter n-gram (5/7) og Naive Bayes
(5/7). Denne boka driller nettopp disse gjengangermalene til automatikk, med
**syntaks som klart tyngste del**, i sensors korte, mekaniske sjekkliste-stil — og
lærer studenten å **treffe hvert delkrav eksplisitt**, fordi løsningsforslagene
gir delpoeng mekanisk mot en fininndelt liste.

### 1.1 DNA-valg og hybrid-dokumentasjon (ufravikelig)

**Valget er dokumentert her og styrer kapittel-DNA-en:** IN1140 modelleres som et
**regne- og prosedyrefag à la matte-/logikkbøkene, in1000 og tdt4171**, ikke som
et humanistisk drøftingsfag (analysen §7). To komplementære svarmoduser løper
gjennom hele boka:

- **Formell modus (fasit) — bygges etter `DNA-regnefag.md`.** Regex, CFG, n-gram og
  Naive Bayes har **objektivt riktige svar**. Disse kapitlene har derfor:
  `theorem`-blokker for de formelle prosedyrene og formlene (MLE, add-1-glatting,
  Naive Bayes-produktet, byggeprosedyren for regex, avlesningsprosedyren for CFG,
  konstituenttest-prosedyren, tegn-tre-prosedyren), gjennomregnede `example`-er der
  **alle mellomregninger vises**, `exercise`-er med `solution` + `hints`, og egne
  **drillkapitler** (2.4, 3.3, 4.3, 6.3, 8.6, 9.2, 11.2) med løsningsoppskrift +
  variantkatalog. De egner seg perfekt til quiz/flashcards med automatisk retting
  (regex-matching, telle n-grammer, klassifiser rolle/relasjon/ordklasse/BIO) →
  **sikt høyt på kvoten her.**
- **Forklar-begrep-modus (kortsvar) — presise modellsvar mot en sjekkliste.**
  Begrepssvar (glatting, komposisjonalitet, Markov-antakelsen, veiledet læring,
  entailment, regelbasert vs. statistisk, intrinsisk/ekstrinsisk) bygges som
  **1–3 setningers modellsvar som treffer sensors poeng-sjekkliste**
  (definisjon → hvorfor/når → ett eget eksempel), speilet direkte på
  løsningsforslagenes poengfordeling. Belønner **presis fagformulering**, ikke
  lengde.
- **Ekte fri drøfting trengs nesten ikke** (bare H2020s «flertydighet på alle
  nivåer»-oppgave) og får kun ett sjangeravsnitt i eksamenstreningen (Del 13).

**«Formell verktøykasse» som gjennomgående modul.** De tre-fire regne-/
skriveferdighetene — (1) regex fra spesifikasjon, (2) utled/utvid CFG + rekursjon
+ konstituenttester + tegn tre, (3) n-gram-sannsynlighet med glatting, (4) Naive
Bayes med glatting — bygges fra bunnen med gjennomregnede eksempler og egne
drillkapitler. Dette er der poengene og de systematiske feilene sitter, og
verktøykassa refereres på tvers av delene (Del 2, 3, 4 og 8).

**Arbeidsdeling mot LING1100 (dokumentert).** IN1140 og LING1100 overlapper i den
semantiske kjernen, men:
- **Gjenbruk NEDSKALERT fra ling1100-boka:** leksikale relasjoner (Del 9),
  semantiske roller (Del 10), komposisjonalitet og entailment (Del 10). LING1100
  går dypere (Dowty proto-roller, formell logikk, sannhetstabeller,
  negasjonstest); **IN1140 nøyer seg med klassifisering + kort definisjon + eget
  eksempel + kort logisk def.** Skjær ned dybden — ikke importer ling1100s formelle
  semantikk-hybrid.
- **IN1140 EIER den computasjonelle halvdelen** (ling1100 dekker den ikke):
  regulære uttrykk, tokenisering, morfologisk oppdeling, POS-tagging,
  **kontekstfri grammatikk/syntaks/parsing** (ling1100 gjør nesten ikke syntaks),
  n-gram-språkmodeller, Naive Bayes/tekstklassifikasjon, NER, evaluering. Her er
  ling1100 til lite hjelp — legg tyngdepunktet her.

### 1.2 Kritiske stil- og sensurregler (gjelder HELE boka — mekaniske sjekklister)

Løsningsforslagene gir delpoeng **mekanisk mot en fininndelt sjekkliste** — dette
er fagets viktigste sensurfunn. Formell presisjon er nesten binær. Reglene under
er ufravikelige og operasjonaliseres i kap. 0.2, med per-kapittel-`warning`-er der
de treffer:

1. **Formler er FASIT — vis dem eksakt.** MLE-, glattings-, Naive Bayes- og
   prior-formlene må være **identiske** til fasit for full pott. **Å forveksle
   $w_i$ og $w_{i-1}$ (snu retningen på betinget sannsynlighet) koster 2 poeng.**
   Hvert formelt kapittel har en `warning` **«Formelen er fasit — ikke slark»** som
   viser den presise formen mot den vage/snudde.
2. **Grensesymboler MÅ MED: `<s>`/`</s>`.** I all n-gram-telling og -produkt
   trekkes poeng om setningsstart `<s>` og setningsslutt `</s>` mangler. Kap. 3.1,
   3.3 (og alt n-gram-innhold) har en eksplisitt **n-gram-sjekkliste-`warning`**:
   «`<s>`/`</s>` med? riktig $w$-indeks-retning? brøk vist for HVERT ord?».
3. **ALLE mellomregninger vises.** På sannsynlighetsoppgaver gir **prosessen**
   poengene, ikke svaret: vis $P(w_i\mid w_{i-1})$ for *hvert* ord, og vis tellingen
   $C(w_{i-1},w_i)/C(w_{i-1})$ under hver faktor (svaret trengs ofte ikke ferdig
   utregnet). Egen `warning` **«Vis mellomregningen»** i alle regnekapitler.
4. **CFG må ha LEKSIKALE (terminale) regler — ikke bare ikke-terminale.** Å skrive
   $S\to NP\ VP$, $NP\to D\ N$ men droppe $D\to$ en $\mid$ et, $N\to$ nisse trekker.
   For kjønnssamsvar må nye regler inn **både** på D/N-nivå **og** NP-nivå. Hvert
   CFG-kapittel har en **CFG-leksikalske-regler-`warning`**: «tegn/les hver løvnode
   → én leksikal regel per ord».
5. **Begreper markeres EKSPLISITT.** For POS-taggere må det stå *eksplisitt* at
   regelbaserte regler er «manuelt definert», og statistiske taggere må nevne
   **både** annotert korpus **og** statistisk modell (bare det ene → −1). For Naive
   Bayes må **uavhengighetsantakelsen vises i selve formelen** (før/etter ≈), ikke
   bare beskrives i ord.
6. **Egne eksempler er obligatoriske der de bes om.** Leksikale relasjoner,
   semantiske roller og entailment krever et *eget* eksempel — manglende/feil
   eksempel trekker (entailment: −3 om eksempel mangler/er feil). Modellsvarene i
   boka **peker på hvert poeng-element** slik løsningsforslagene gjør.
7. **Ingen minuspoeng på klassifiserings-flervalg → alltid gjett.** Semantiske
   roller og enkelte leksikale-relasjon-oppgaver gir poeng for riktig, men ikke
   trekk for feil. Boka sier eksplisitt: kryss alltid av.
8. **Tospråklighet.** Norsk brødtekst, **engelsk fagterm i parentes ved første
   forekomst** i hvert kapittel (ikke arv fra tidligere kapittel): «tokenisering
   (‘tokenization’)», «glatting (‘smoothing’)», «veiledet læring (‘supervised
   learning’)», «uavhengighetsantakelse (‘independence assumption’)». Pensumboka
   (Jurafsky & Martin, *Speech and Language Processing* — henvist direkte i
   H2022-løsningen, kap. 3) er på engelsk; settene bruker tospråklig terminologi.
9. **Notasjon = eksamenens.** Regex-metategn (`[...] ? * + {n,m} | ( ) ^ $ \. \s \d
   \n`), CFG-piler ($\to$, $\mid$), sannsynlighet i LaTeX
   ($P(w_i\mid w_{i-1})=C(w_{i-1},w_i)/C(w_{i-1})$), norske tegn `æøåÆØÅ`
   eksplisitt. Frasestrukturtrær beskrives i ASCII/tekst slik en A-besvarelse ville
   håndtegnet dem i Insperas skisseark.

### 1.3 Avvik fra DNA-regnefag (dokumentert)

1. **38 kapitler — over DNA-taket (20–35).** Begrunnet i PRODUKSJONSLOYPE-lærdommen
   «≥500 er et gulv»: faget dekker **to fagfelt på hvert eneste sett** (tekst &
   formelle metoder + lingvistisk analyse), med **åtte topptemaer som må beherskes
   perfekt**, en formell verktøykasse som må bygges fra bunnen, og en bred
   begrepsbank. Bredden kan ikke kuttes uten å underforberede kandidaten.
2. **To svarmoduser i samme bok** (formell fasit + forklar-begrep-kortsvar) fordi
   karakterterskelen er **kvalitativt ulik**: nesten binær for formelle svar,
   gradert på presis fagformulering + eget eksempel for begrepssvar. Kap. 0.2
   etablerer begge håndverkene; modellbesvarelsene (13.1) viser dem side om side.
3. **Drillkapitler ligger i temadelene** (2.4, 3.3, 4.3, 6.3, 8.6, 9.2, 11.2), ikke
   samlet i siste del, fordi hver gjengangermal må drilles rett etter teorien
   (samme avvik som in1000/econ1310). Del 13 beholder sjangerbanken,
   modellbesvarelsene, feilvaksinen og øvingseksamenene.
4. **«Symbol- og formelliste» → «Notasjons- og formelliste».** README krever en
   `collapsible` «Symbol- og formelliste» per delkapittel. For regex/CFG finnes
   det sjelden matematiske symboler, men et presist **metanotasjonsapparat**.
   Blokken forklarer derfor ALLE metategn/formler brukt i delkapitlet (regex-
   metategn, CFG-piler, sannsynlighetsformler, BIO-tagger). Regelen «per
   delkapittel, ikke arv» beholdes. (Samme avvik som in1000s «API- og
   konstruksjonsliste».)
5. **Egen «Moderne NLP»-del (Del 12) utenfor DNA — fremtidsrettet, LAVT
   prioritert.** Word embeddings, cosinuslikhet, nevrale nett/RNN/transformere og
   logistisk regresjon er **fraværende i alle 7 sett** (før-nevral avgrensning, se
   §1.4). Ett kort, konseptuelt kapittel gis for kontekst/fremtidssikring mot
   INF1820/ML-AI-etterfølgeren og fagbeskrivelsens ordlyd — **ingen tunge
   regneoppgaver**, hele delen merket `(verifiser)`.

### 1.4 Før-nevral avgrensning og ærlighetskrav (ufravikelig)

- **Arkivet dekker den KLASSISKE, FØR-NEVRALE kjernen av Jurafsky & Martin.**
  Følgende *forventede* moderne temaer er **fraværende i alle 7 sett** og skal IKKE
  overinvesteres: **ordvektorer/word embeddings, cosinuslikhet, nevrale nett/RNN/
  transformere, logistisk regresjon, perpleksitet** (språkmodell-sannsynlighet
  regnes derimot), **HMM/Viterbi-dekoding** (POS behandles konseptuelt som
  regelbasert vs. statistisk, aldri som Viterbi-utregning), og **minimum edit
  distance/Levenshtein**. Fagbeskrivelsen nevner «nevrale nettverk for NLP» og
  «ordvektorer», men **eksamenssettene tester dem ikke**. Tyngdepunktet ligger på
  den klassiske kjernen; det moderne stoffet får kun Del 12 (konseptuelt), merket
  `(verifiser)`.
- **Arkivet er lite (7 sett) men tett dokumentert:** 4 av 7 har fullstendige
  løsningsforslag *med eksplisitt poengfordeling* → uvanlig sterk innsikt i
  sensorpraksis. Frekvenstallene er robuste for kjernetemaene. Utsagn om sjeldne
  temaer og om hva sensor ville krevd på oppgaver *uten* løsningsforslag (H2019-
  ordinær, H2020, H2017-konte) merkes **`(svakt belagt — verifiser)`**.
- **Ingen dokumenterte karaktergrenser (A–F).** Poengfordeling per oppgave er
  derimot eksplisitt i løsningene. Boka skal ikke oppgi terskeltall.
- **Bare høsteksamener finnes** (emnet ble gitt om høsten); manglende år: 2018
  ordinær, 2023–2025. **Unntaksåret H2020** (korona: 4,5 t, alle hjelpemidler) gav
  noe mer anvendte oppgaver, men samme temaprofil — behandles som gyldig, men de
  hjelpemiddelfrie settene vektes tyngst for vanskegrad.

### 1.5 Opphavsrett (ufravikelig)

Eksamensoppgaver og løsningsforslag brukes som **grunnlag** (mønstre,
temavekting, vurderingskriterier), **aldri ordrett**. Alle oppgaver, korpus,
setninger, grammatikker, regex og modellbesvarelser er nyskrevne — endre setninger,
navn, tall, korpus og formuleringer. Arkivets gjengangere (postadresse-/dato-/
togbillett-regex; kompis-/mat-/pizza-minikorpus for bigram; film-sentiment for
Naive Bayes; Ibsen/Maurstad/Riksteateret-BIO; «opp bakken»-konstituenttest)
gjenskapes med **endrede fakta og ord**, aldri kopieres. Jurafsky & Martin
refereres (forfatter/verk/begrep), aldri siteres i lengde.

---

## 2. Makrostruktur

Boka er **todelt slik oppgavesettene er bygd** — **DEL A: Tekst & formelle metoder**
og **DEL B: Lingvistisk analyse** — rammet inn av Del 0 (eksamenskart + håndverk)
og Del 13 (eksamenstrening). Innenfor hver del følger rekkefølgen **faglig
avhengighet**, ikke frekvens; **frekvensen styrer omfanget**: topptemaer (7/7) får
flere kapitler + eget drillkapittel, randtemaer (1–2/7) dekkes kompakt og merkes
«bør kjenne til». **`number` er del-basert** («8.3»), ALDRI lineær — bokforsiden
grupperer på `number.split('.')[0]`, og prosareferanser bruker samme form («kap.
8.3»).

| Del | `sectionName` (bokforsiden) | Hoveddel | Kap. | Prioritet | Begrunnelse (frekvens → omfang) |
|---|---|---|---|---|---|
| 0 | Eksamenskart og det formelle håndverket | — | 2 | perfekt (meta) | Prioriteringsverktøyet + de mekaniske sjekklistene (vis mellomregning, `<s>/</s>`, leksikale CFG-regler, treff hvert poeng-element) må etableres FØR fagstoffet. |
| 1 | Tekstnormalisering og tokenisering | **A** | 2 | kunne | Tokenisering 3/7, men forbehandling som POS/WSD/regnedelen bygger på; token vs. type + telling. |
| 2 | Regulære uttrykk | **A** | 4 | **perfekt** | **7/7, tyngst i antall oppgaver** (2–3/sett). Både skriv-fra-spesifikasjon og gjenkjenn-MC. Egen skrivemal + drill. |
| 3 | N-gram-språkmodeller | **A** | 3 | **perfekt** | 5/7, men høy poengtetthet og streng, mekanisk retting (`<s>/</s>`, $w$-indeks, vis brøk). Del av formell verktøykasse. |
| 4 | Tekstklassifikasjon med Naive Bayes | **A** | 3 | **perfekt** | 5/7; deler formelapparat med n-gram (MLE, glatting). Uavhengighetsantakelsen vist i formelen. |
| 5 | Evaluering av språkteknologi | **A** | 2 | kunne | Evaluering 2/7 (precision/recall/F1, TP/FP/FN/TN, gullstandard, intrinsisk/ekstrinsisk) + paradigmer/veiledet læring. |
| 6 | Ordklasser og POS-tagging | **B** | 3 | **perfekt** | 7/7. Tildel ordklasse (paring), kriterier, hvorfor leksikon feiler, regelbasert vs. statistisk tagger. Egen paring-drill. |
| 7 | Morfologi og orddanning | **B** | 1 | kunne | 2/7 (nyere, H20/H22): bøyning/avledning/sammensetning, affikstyper. |
| 8 | Syntaks, kontekstfri grammatikk og parsing | **B** | 6 | **perfekt (STØRST)** | **7/7 og poengtyngst (24 p i H2022).** Frasestrukturregler (m/leksikale), utvid grammatikk, rekursjon, konstituenttester, strukturell flertydighet + tegn tre. Bokas største del. |
| 9 | Leksikalsk semantikk og leksikale relasjoner | **B** | 2 | **perfekt** | 7/7. Homonymi/polysemi, hyponymi, meronymi, synonymi, antonymi, WSD/zeugma. Nedskalert fra ling1100. |
| 10 | Semantiske roller, komposisjonalitet og entailment | **B** | 2 | perfekt / kjenne | Semantiske roller 6/7 (perfekt); komposisjonalitet 2/7 + entailment 1/7 (nedskalert fra ling1100). |
| 11 | Navngjenkjenning (NER) og BIO-tagging | **B** | 2 | **perfekt** | 6/7. BIO-klassifisering, trekk/features, kategorier, hvorfor navneliste alene feiler. Egen BIO-drill. |
| 12 | Moderne NLP — et konseptuelt utsyn | **B** | 1 | kjenne | **IKKE i arkivet.** Word embeddings/cosinus/nevrale nett/RNN/transformere, kort og konseptuelt, fremtidsrettet. Hele delen `(verifiser)`. |
| 13 | Eksamenstrening | — | 5 | — | Sjangerbank + poeng-element-modellsvar, feilvaksine (mekaniske sjekklister), 3 øvingseksamener (miks: flervalg + formelt artefakt + regn + tegn tre). |

**DEL A = Del 1–5 (Tekst & formelle metoder). DEL B = Del 6–12 (Lingvistisk
analyse).** Del 0 og Del 13 er rammer rundt de to hoveddelene.

### 2.1 Sjangerkatalog (fra analysen §3 — gjengis i bokas Del 0)

Refereres i hvert kapittel. To familier: **produser et formelt artefakt / regn**
og **gjenkjenn/klassifiser + forklar**.

| Kode | Sjanger | Form | Hyppighet / eksamensplass |
|---|---|---|---|
| **R1** | Skriv et regulært uttrykk fra spesifikasjon | fritekst-artefakt | 7/7; dato/postadresse/telefon/togbillett/verbformer |
| **R2** | Gjenkjenn hva et regex matcher | flervalg | 7/7; presedens, fjern-parentes-uten-å-endre-språket |
| **T1** | Tokeniser + tell tokens vs. typer | fritekst/kortsvar | 3/7 |
| **N1** | Beregn n-gram-sannsynlighet (vis steg) | regn (fasit) | 5/7; bigram/trigram fra minikorpus |
| **N2** | Naive Bayes-klassifisering m/glatting | regn + forklar | 5/7; prior × produkt av glattede trekk → argmax |
| **E2** | Evaluering (precision/recall/F1) | regn/forklar | 2/7 |
| **P1** | POS-tagging — tildel ordklasse | paring | 7/7 |
| **P2** | POS-tagging — hvorfor vanskelig + taggertyper | kortsvar | 7/7 |
| **S1** | Utled/utvid kontekstfri grammatikk | fritekst-artefakt | 7/7; ikke-term. + leksikale regler + kjønn |
| **S2** | Rekursjon (forklar + identifiser + skriv) | kortsvar/artefakt | 5/7; direkte vs. indirekte |
| **S3** | Konstituenttester (min. 3 tester) | kortsvar | 3/7 |
| **S4** | Strukturell flertydighet (tell/**tegn** analyser) | tegn (håndtegning) | 3/7; PP-festing høyt/lavt |
| **M1** | Semantiske roller (klassifiser) | flervalg/kortsvar | 6/7; ingen minuspoeng |
| **M2** | Leksikale relasjoner (par/klassifiser + forklar) | paring/kortsvar | 7/7 |
| **NER1** | BIO-klassifisering + trekk/features | paring/kortsvar | 6/7 |
| **E1** | Forklar begrep kort (1–3 setninger) | tekstfelt | gjennomgående; glatting/Markov/entailment/veiledet læring |

### 2.2 Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**#1** utelate `<s>`/`</s>` i n-gram · **#2** snu retningen på betinget sannsynlighet
($P(w_{i-1}\mid w_i)$ i stedet for $P(w_i\mid w_{i-1})$, −2 p) · **#3** bare gi
svaret uten mellomregning · **#4** glemme leksikale/terminale CFG-regler, eller ikke
løse kjønnssamsvar på både D/N- og NP-nivå · **#5** ikke skille direkte fra
indirekte rekursjon (eller bare påstå «ja rekursiv» uten å peke på regelen) · **#6**
tokenisere med tegnsetting klistret til ordet · **#7** POS: blindt ett-ord-én-tagg-
oppslag; forveksle nære klasser (subjunksjon/preposisjon, determinativ/pronomen) ·
**#8** forveksle homonymi og polysemi (urelaterte vs. relaterte betydninger) ·
**#9** Naive Bayes uten glatting (produkt = 0), eller uavhengighetsantakelsen ikke
vist i formelen · **#10** feil nevner i $P(w\mid c)$ (glemme $+|V|$; ta med
ord utenfor vokabularet) · **#11** begrepssvar uten det etterspurte egne eksemplet ·
**#12** regex uten norske tegn `æøåÆØÅ` eller kanttilfeller (0-foran-tall, opsjonelt
prefiks) · **#13** ikke navngi taggertypene / ikke si «manuelt definert» / ikke
nevne «annotert korpus».

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = sett-treff (av 7) + sjangerkoder +
> prioritetsklasse (perfekt/kunne/kjenne, analysen §7). **Innholdskontrakt** =
> definisjoner/formler/prosedyrer som SKAL med (i emnets notasjon); for regex/CFG
> også **skrivemalen** (algoritmisk fremgangsmåte). **Kvote** = quiz/flashcards
> (minimum per kapittel; kan overskytes, aldri underskrides). Kapitteltype teori
> følger DNA-ens obligatoriske blokkrekke (Eksamensvinkel-`tip` → Forkunnskaper +
> Notasjons-/formelliste → Motivasjon → `definition`/`theorem` → utledning med
> intuisjon → `example` ×2–4 → `warning` Typiske feil → `exercise` ×6–12 →
> repetisjons-`collapsible`); drill følger drill-DNA-en (Eksamensvinkel →
> løsningsoppskrift → sensor-kommentert case → 8–15 varianter).

### Del 0 — Eksamenskart og det formelle håndverket

#### Kapittel 0.1: Slik testes IN1140
**id:** `in1140-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen, sjanger-miksen, temafrekvensen, gjenbruksmønstrene og lesestrategien — studentens prioriteringsverktøy.
- **Forkunnskaper (kryssbok):** ingen. Kort term-liste (norsk↔engelsk); ingen formler.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (7 sett 2017–2022). Skal formidle: (a) **Eksamensform:** 4-timers digital skoleeksamen i **Inspera**, **ingen hjelpemidler**, A–F, hver høst; alle obliger (Python-programmering) må være godkjent på forhånd, men **programmering foregår i obligene, ikke på eksamen**; H2020 var unntak (korona: 4,5 t, alle hjelpemidler). (b) **Sjanger-miksen** (viktigste formfunn): fem sjangre i samme sett — flervalg/paring, skriv formelt artefakt (regex/CFG), regn (n-gram/Naive Bayes), forklar begrep kort, tegn tre — grovfordelt ~35–40 % formell utregning/artefakt, ~30–35 % klassifiser/tildel, ~25–30 % forklar-begrep. (c) **Poeng-økonomien er eksplisitt og fininndelt** — delpoeng gis mekanisk mot en sjekkliste. (d) **Temafrekvens-tabellen** (av 7): regulære uttrykk 7 · ordklasser/POS 7 · syntaks/CFG 7 (poengtyngst, 24 p H2022) · leksikale relasjoner 7 · semantiske roller 6 · NER 6 · n-gram 5 · Naive Bayes 5 · rekursjon 5 · tokenisering 3 · konstituenttester 3 · paradigmer 3 · glatting 2+innbakt · morfologi 2 · evaluering 2 · komposisjonalitet 2 · Bayes-utledning 2 · dialog 2 · WSD/zeugma 2 · entailment 1 · FSA 1 · IR/tf-idf 1 · coreference 1 · lingvistiske nivåer 1. (e) **Pensumbok:** Jurafsky & Martin, *Speech and Language Processing* (klassisk, før-nevral). (f) **Dokumentert gjenbruk** (treningsgull): ordklasse-paring på hele setninger (7/7); «utled + utvid + er den rekursiv?»-grammatikk; konstituenttest-trioen; bigram-fra-minikorpus m/`<s>/</s>`; add-1 Naive Bayes-sentiment; BIO-NER på navnetett setning; leksikale relasjoner som paring. Prioritet: perfekt (meta).
- **Innholdskontrakt:** Sjangerkatalogen (§2.1) som studentens sjekkliste med frekvens + eksamensplass; **prognose for neste sett** (regex + ordklasser + grammatikk + leksikale relasjoner er sikre; n-gram/Naive Bayes/roller/NER svært sannsynlige); **statusnote** — nedlagt, eksamen t.o.m. 2027, klassisk pensum (verifiser); leseplan (Del 2 og Del 8 er de formelle tyngdepunktene, Del 3–4 er regnedelen/verktøykassa).
- **Oppgavesjangre:** ingen formelle oppgaver; 3–4 refleksjonsoppgaver om tidsbudsjett (4 t) og prioritering av de åtte topptemaene.
- **Typiske feil:** metafeilen å lese pensum lineært uten å prioritere de åtte topptemaene; å tro at eksamen krever programmering; å nedprioritere den poengtyngste syntaks-delen.
- **Kvote:** 14 quiz / 12 flashcards (form, sjanger-miks, temafrekvens-topp, gjenbruksmønstre, pensumbok, statusnote).

#### Kapittel 0.2: Det formelle håndverket — vis mellomregning og treff hvert poeng-element
**id:** `in1140-0-2` · **number:** 0.2 · **estimatedMinutes:** 50 · **prerequisites:** `in1140-0-1`

- **Kapitteltype:** håndverk (dekker begge svarmodusene + de mekaniske sjekklistene).
- **Description:** De to svarhåndverkene faget krever — hvordan et **formelt/regne**-svar føres uten «slark» (vis hver mellomregning, formelen eksakt), og hvordan et **forklar-begrep**-svar bygges så det treffer sensors poeng-sjekkliste — destillert fra fire løsningsforslag med eksplisitt poengfordeling.
- **Forkunnskaper (kryssbok):** kap. 0.1. `collapsible` **Notasjons- og formelliste**: $P(w_i\mid w_{i-1})$, $C(\cdot)$ = telling, `<s>`/`</s>`, argmax, CFG-pil $\to$, `|` = disjunksjon.
- **Eksamensbelegg:** Destillat av sensorkravene (analysen §4; H2017, H2019-prøve, H2021, H2022 med poengfordeling). Skal operasjonalisere de **mekaniske sjekklistene** (§1.2): (1) **formler er fasit** — identisk formel, riktig $w$-indeks-retning (forveksling = −2 p); (2) **`<s>/</s>` med**; (3) **vis brøken $C(w_{i-1},w_i)/C(w_{i-1})$ for HVERT ord** — svaret alene holder ikke; (4) **CFG må ha leksikale regler**; (5) **begreper eksplisitt** («manuelt definert», uavhengighetsantakelsen i formelen); (6) **egne eksempler obligatoriske**; (7) **ingen minuspoeng på klassifiserings-MC → gjett alltid**; (8) «naturlig arbeidsflyt fra kurset» belønnes (forenklet tokenisering forbedret i to steg er ok). Prioritet: perfekt.
- **Innholdskontrakt:** Svararkitekturen resten av boka refererer. **Formell/regne-føringsmal:** *skriv formelen eksakt → sett inn tellinger under hver faktor → vis mellomregningen → (svar).* **Forklar-begrep-mal:** *definisjon (m/engelsk term) → hvorfor/når → ett eget eksempel.* Mantraene: «formelen er fasit — ikke slark», «`<s>/</s>` alltid med», «vis brøken for hvert ord», «leksikale regler er ikke valgfrie», «uavhengighetsantakelsen skal stå i formelen», «egne eksempler er krav, ikke pynt», «klassifiserings-MC: gjett alltid». **Poeng-element-tenkning:** hvert modellsvar peker på delkravene slik løsningsforslagene deler ut poeng.
- **Oppgavesjangre:** meta — 4–5 oppgaver av typen «her er to svar på samme n-gram-oppgave; hvilket får full pott og hvorfor?» (identifiser manglende `<s>`, snudd indeks, uteglemt mellomregning).
- **Typiske feil:** #3 bare svar uten mellomregning; #1 utelate `<s>/</s>`; #2 snu betinget sannsynlighet; #11 mangle eget eksempel; #4 droppe leksikale CFG-regler; #9 uavhengighetsantakelsen ikke i formelen.
- **Kvote:** 14 quiz / 12 flashcards (de to modusene, føringsmalene, de mekaniske sjekklistene, hva som skiller full pott fra delvis).

**Prøve-kvote Del 0:** ingen (metadel — dekkes av øvingseksamenene i Del 13).

---

## DEL A — Tekst & formelle metoder

### Del 1 — Tekstnormalisering og tokenisering *(prioritet: KUNNE — 3/7, forbehandling alt bygger på)*

#### Kapittel 1.1: Tekstnormalisering og tokenisering — tokens vs. typer
**id:** `in1140-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** `in1140-0-2`

- **Kapitteltype:** teori (halvformell — telling har fasit).
- **Description:** Fra rå tekst til tokens: hva en token (‘token’) og en type (‘type’) er, hvordan man teller dem, og hvorfor tokenisering er forbehandlingen POS, WSD og regnedelen hviler på.
- **Forkunnskaper (kryssbok):** kap. 0.2. `collapsible` **Notasjons- og formelliste**: token vs. type, $|V|$ = vokabularstørrelse (antall typer), «bag of words».
- **Eksamensbelegg:** Tokenisering 3/7 (H2019-prøve, H2019, H2021); tokens/typer + telling eksplisitt (H2019-prøve). Avhengige oppgaver: POS og WSD forutsetter tokenisert input. Sjangre: T1, E1. Prioritet: kunne (porten til hele tekstpipelinen).
- **Innholdskontrakt:** **token** (én forekomst av en ordform) vs. **type** (én unik ordform); **telling** — antall tokens vs. antall typer i en tekst; **tekstnormalisering (‘text normalization’)** (skille ut tegnsetting, evt. små bokstaver, sett-medlemskap for vokabular); tokenisering som **forbehandling** for nedstrømsoppgaver; kort at nn/nb/engelsk kan behandles likt her. `theorem`-idiom: **tell-tokens-og-typer-prosedyren** (list tokens i rekkefølge → samle unike → tell hver mengde).
- **Oppgavesjangre:** T1. Mønstereksempel (nyskrevet): «Tokeniser setningen ‘Kari kjøpte kaffe, og Kari drakk kaffe.’ Skriv den tokeniserte lista, og oppgi antall tokens og antall typer.» (Poeng: tegnsetting skilt ut; korrekt token- og type-tall.)
- **Typiske feil:** #6 la tegnsetting henge klistret til ordet («kaffe,»); forveksle token- og type-telling; glemme at komma/punktum er egne tokens.
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 1.2: Tokeniseringens kanttilfeller — og en note om endelige tilstandsmaskiner
**id:** `in1140-1-2` · **number:** 1.2 · **estimatedMinutes:** 40 · **prerequisites:** `in1140-1-1`

- **Kapitteltype:** teori (+ «bør kjenne til»-hale om FSA).
- **Description:** De vanskelige tilfellene i tokenisering (URL, forkortelse, bindestrek, apostrof, tall, tegnsetting), «naturlig arbeidsflyt» i to forbedringssteg, og en kompakt «bør kjenne til»-note om endelige tilstandsmaskiner.
- **Forkunnskaper (kryssbok):** kap. 1.1. Term-liste; ingen tunge formler (FSA-transisjonstabell i `collapsible` hvis brukt).
- **Eksamensbelegg:** Tokeniseringsutfordringer del av T1 (H2021 belønner eksplisitt to-stegs forbedring); FSA 1/7 (H2017-konte, transisjonstabell/determinisme) — `(svakt belagt — verifiser)`. Sjangre: T1, E1. Prioritet: tokenisering kunne; FSA **kjenne** (plasseres SIST, merkes «bør kjenne til»).
- **Innholdskontrakt:** kanttilfeller — **URL/e-post**, **forkortelser** («f.eks.», «osv.»), **bindestrek** (arbeids-vilkår), **apostrof/klitiske former**, **tall/desimaltall**, **tegnsetting**; prinsippet om **naturlig arbeidsflyt** (gi en forenklet tokenisering først, forbedre den i et andre steg — belønnet så lenge tegnsetting til slutt er skilt ut). **Bør kjenne til:** **endelig tilstandsmaskin (‘finite-state automaton’, FSA)** — transisjonstabell, tilstander, determinisme vs. ikke-determinisme (perifert, kort).
- **Oppgavesjangre:** T1 + E1. Mønstereksempel: «Vis en tokenisering av ‘Møt oss kl. 10 på www.uio.no – ta med PC-en!’ i to steg: først grovt, så forbedret der forkortelse, URL, bindestrek og tegnsetting håndteres.»
- **Typiske feil:** #6 splitte forkortelsen «kl.» på punktumet; klistre tegnsetting til ordet; overkomplisere når to-stegs forbedring holder.
- **Kvote:** 16 quiz / 18 flashcards.

**Prøve-kvote Del 1:** 4 prøver (spesifisert i §4).

### Del 2 — Regulære uttrykk *(prioritet: PERFEKT — 7/7, tyngst i antall oppgaver)*

> Del 2 er den ene av bokas to store formelle deler. Regex står i **hvert** sett med
> en glidende skala fra MC-gjenkjenning (R2) til å skrive et komplekst uttrykk fra
> spesifikasjon (R1). Fire kapitler: verktøy → skriv-fra-spesifikasjon →
> gjenkjenn/MC → drill. Norske tegn `æøåÆØÅ` og kanttilfeller er sensors faste feller.

#### Kapittel 2.1: Regex-verktøykassa — tegnklasser, kvantorer, disjunksjon og grupper
**id:** `in1140-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `in1140-1-1`

- **Kapitteltype:** teori (formell).
- **Description:** Hele metateiknapparatet i regulære uttrykk (‘regular expressions’): tegnklasser, intervaller, kvantorer, disjunksjon, grupper, ankre og escape — byggeklossene alt regex-arbeid hviler på.
- **Forkunnskaper (kryssbok):** kap. 0.2. `collapsible` **Notasjons- og formelliste** (obligatorisk): `[...]` tegnklasse, `[0-9] [1-9] [a-zA-ZæøåÆØÅ]` intervaller, `?` (0–1), `*` (0–n), `+` (1–n), `{n} {n,m}` kvantorer, `|` disjunksjon, `( )` gruppe, `^ $` ankre, escape `\. \s \d \n`, opsjonell gruppe `(...)?`.
- **Eksamensbelegg:** Regulære uttrykk 7/7 — verktøyene ligger til grunn for både R1 og R2 i hvert sett. Sjangre: R1/R2-grunnlag. Prioritet: **perfekt**.
- **Innholdskontrakt (theorem-blokker):** **tegnklasse** `[abc]` (ett av tegnene), **negert** `[^abc]`, **intervall** `[0-9]`; **kvantorer** `? * + {n} {n,m}` med presis semantikk (grådighet nevnes kort); **disjunksjon** `a|b` og **presedens** (`ab|cd` = «ab» eller «cd», IKKE «abcd»); **grupper** `( )` (avgrenser disjunksjon/kvantor); **ankre** `^` `$`; **escape** `\.` (bokstavelig punktum), `\s` (blanktegn), `\d` (siffer), `\n` (linjeskift); **opsjonell gruppe** `(...)?`. `theorem`-idiom: **regex-lese-prosedyren** (les venstre→høyre, marker hva hver del krever).
- **Oppgavesjangre:** R2-grunnlag. Mønstereksempel: «Hvilke av strengene ‘ab’, ‘cd’, ‘abcd’, ‘abd’ matcher `^(ab|cd)$`? Begrunn med presedens.» (Fasit: ‘ab’ og ‘cd’.)
- **Typiske feil:** #12 tro at `ab|cd` matcher «abcd» (presedens); glemme å escape `\.`; forveksle `*` (0–n) og `+` (1–n); tro `[0-9]+` matcher tom streng.
- **Kvote:** 24 quiz / 26 flashcards.

#### Kapittel 2.2: Skriv et regex fra spesifikasjon — norske tegn og kanttilfeller
**id:** `in1140-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `in1140-2-1`

- **Kapitteltype:** teori/skrivemal (formell, fasit — del av verktøykassa).
- **Description:** Å bygge et regulært uttrykk komponent for komponent fra en detaljert spesifikasjon (dato, telefonnummer, postadresse, verbformer) med norske tegn, tallintervaller og opsjonelle grupper — kjernehåndverket R1.
- **Forkunnskaper (kryssbok):** kap. 2.1. `collapsible` **Notasjons- og formelliste** (per delkapittel): som 2.1 + `\d{2}` datofelt, `æøåÆØÅ` norske tegn, `(\+47|0047)?` opsjonelt landsprefiks.
- **Eksamensbelegg:** R1 i 7/7 (postadresse H2021, dato H2022, togbillett H2020, verbformer H2017, forkortelser H2017-konte). Sensorkrav: håndter norske tegn og kanttilfeller; test mot oppgitte positive OG negative eksempler. Sjangre: R1. Prioritet: **perfekt**.
- **Innholdskontrakt (theorem — byggeprosedyren):** **skriv-regex-fra-spesifikasjon-malen**: (1) del spesifikasjonen i felter (én linje/komponent av gangen); (2) bygg regex per felt (tallintervall `[1-9][0-9]?`, bokstaver `[a-zæøå]+`, norske tegn `[A-ZÆØÅ]`); (3) håndter **kanttilfeller** (0-foran-tall, opsjonelt prefiks `(\+47)?`, opsjonell gruppe `(...)?`); (4) sett sammen med grupper og evt. `\n` for linjeskift; (5) **test mot de positive og negative eksemplene**. `warning`-krav: **regex-norske-tegn-sjekkliste** — `æøåÆØÅ` med i alle bokstavklasser.
- **Oppgavesjangre:** R1. Mønstereksempel (nyskrevet): «Skriv ett regex som gjenkjenner norske datoer på formen ‘d.m.åååå’ og ‘dd.mm.åååå’ (dag 1–31, måned 1–12, firesifret år), men ikke ‘32.13.2020’. Bygg felt for felt og test mot minst to gyldige og to ugyldige strenger.»
- **Typiske feil:** #12 glemme `æøåÆØÅ`; glemme 0-foran-varianten (`0?[1-9]` vs. `[12][0-9]`); ikke escape `\.` mellom feltene; ikke teste mot de negative eksemplene.
- **Kvote:** 22 quiz / 18 flashcards.

#### Kapittel 2.3: Gjenkjenn hva et regex matcher (flervalg)
**id:** `in1140-2-3` · **number:** 2.3 · **estimatedMinutes:** 45 · **prerequisites:** `in1140-2-1`

- **Kapitteltype:** teori/drill-forberedelse (flervalg — fasit).
- **Description:** Å lese et gitt regex presist og avgjøre hvilke strenger som matcher, hvilken som *ikke* gjør det, eller om en gruppering kan fjernes uten å endre språket — R2, den auto-rettbare regex-sjangeren.
- **Forkunnskaper (kryssbok):** kap. 2.1. `collapsible` Notasjons- og formelliste (arv fra 2.1, kort).
- **Eksamensbelegg:** R2 i 7/7 (ofte som Inspera-flervalg, H2022). Krever presis lesing av presedens og kvantor-rekkevidde. Sjangre: R2. Prioritet: **perfekt** (billige, auto-rettbare poeng).
- **Innholdskontrakt:** **mekanisk match-testing** — for hver svarkandidat: les uttrykket venstre→høyre, marker hva hver del krever, test kandidaten tegn for tegn; **presedens** (`|` binder svakt); **fjern-parentes-analyse** (endrer `(ab)|c` vs. `a(b|c)` språket?); at et match kan være delvis vs. fullt (ankre `^...$`). `theorem`-idiom: **R2-avlesningsprosedyren**.
- **Oppgavesjangre:** R2. Mønstereksempel: «Gitt `(gr|s)a+tt`, hvilke matcher: ‘gratt’, ‘saatt’, ‘gaatt’, ‘satt’? Og kan de ytre parentesene fjernes uten å endre hvilke strenger som matcher?»
- **Typiske feil:** #12 lese `a+` som «akkurat én a»; miste presedensen ved `|`; tro at parenteser alltid kan fjernes; ikke sjekke ankre.
- **Kvote:** 20 quiz / 14 flashcards.

#### Kapittel 2.4: DRILL — Skriv og gjenkjenn regulære uttrykk
**id:** `in1140-2-4` · **number:** 2.4 · **estimatedMinutes:** 75 · **prerequisites:** `in1140-2-3`

- **Kapitteltype:** drill (fasit, DNA-regnefag).
- **Description:** Full drill på R1 + R2: fra spesifikasjon til komplett regex med norske tegn og kanttilfeller, og fra gitt regex til korrekt match-avgjørelse — med roterende formater (dato, telefon, postadresse, e-post, produktkode).
- **Forkunnskaper (kryssbok):** kap. 2.2–2.3.
- **Eksamensbelegg:** R1/R2 er 7/7, ofte 2–3 oppgaver per sett. Variantkatalog: skriv-fra-spesifikasjon (norske tegn, linjeskift, opsjonelt prefiks) + gjenkjenn/fjern-parentes. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** R1-malen (2.2) + R2-malen (2.3) samlet; gjennomgått eksamenscase med margnotater om fasit-føring (bygg felt for felt, test mot positive/negative eksempler). 12–15 oppgaver på eksamensnivå, nyskrevne formater, alle med `solution` + `hints`. `warning`: norske tegn + kanttilfeller alltid.
- **Oppgavesjangre:** R1, R2, alle varianter. Mønstereksempel: «Skriv ett regex for norske mobilnummer med valgfritt landsprefiks (‘+47’ eller ‘0047’) etterfulgt av åtte sifre der første siffer er 4 eller 9, evt. med mellomrom i grupper.»
- **Typiske feil:** hele katalogen fra 2.1–2.3 under tidspress: #12 norske tegn/kanttilfeller; presedens; escape; ikke teste mot negative eksempler.
- **Kvote:** 24 quiz / 12 flashcards.

**Prøve-kvote Del 2:** 4 prøver (spesifisert i §4).

### Del 3 — N-gram-språkmodeller *(prioritet: PERFEKT — 5/7, streng mekanisk retting)*

> Del 3 og Del 4 er «regnedelen» og deler formelapparat (MLE, glatting,
> sannsynlighetsprodukt) — bygges sammen som formell verktøykasse. Her ligger de
> hardeste mekaniske sjekklistene: **`<s>/</s>` med, riktig $w$-indeks, vis brøken
> for HVERT ord**. Forveksling av $w_i$/$w_{i-1}$ koster 2 poeng.

#### Kapittel 3.1: N-gram, MLE og grensesymbolene `<s>`/`</s>`
**id:** `in1140-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `in1140-1-1`

- **Kapitteltype:** teori (formell, fasit — del av verktøykassa).
- **Description:** Bigram- og trigram-modeller, MLE-formelen, kjederegelen, Markov-antakelsen og de obligatoriske grensesymbolene — grunnlaget for å beregne setningssannsynlighet.
- **Forkunnskaper (kryssbok):** kap. 1.1. `collapsible` **Notasjons- og formelliste** (obligatorisk): $P(w_i\mid w_{i-1})$ betinget sannsynlighet; $C(w_{i-1},w_i)$ telling av bigram; $C(w_{i-1})$ telling av forgjenger; `<s>` setningsstart, `</s>` setningsslutt; $\prod$ produkt; $V$ vokabular.
- **Eksamensbelegg:** N-gram 5/7 (H2017, H2019-prøve, H2019, H2021, H2022); bigram-fra-minikorpus er en fast gjenganger. Sensorkrav (H2017/H2019/H2021): formelen må være **identisk** for full pott; forveksling av $w_i$/$w_{i-1}$ trekker 2 p; utelatelse av `<s>/</s>` trekker. Sjangre: N1, E1. Prioritet: **perfekt**.
- **Innholdskontrakt (theorem-blokker):** **MLE (bigram)** $P(w_i\mid w_{i-1})=\dfrac{C(w_{i-1},w_i)}{C(w_{i-1})}$; **kjederegel / bigram-tilnærming** $P(w_1\ldots w_k)\approx\prod_i P(w_i\mid w_{i-1})$; **Markov-antakelsen (‘Markov assumption’)** — sannsynligheten for et ord avhenger bare av de $n-1$ foregående; **grensesymbolene `<s>`/`</s>`** obligatoriske i tellingen (setningsstart/-slutt); **trigram** $P(w_i\mid w_{i-2},w_{i-1})$; **språkmodell (‘language model’)** + anvendelser (prediksjon, ASR, MT — konseptuelt). `theorem`-idiom: **tell-n-grammer-prosedyren** (legg `<s>` foran og `</s>` bak → list alle bigram → tell).
- **Oppgavesjangre:** N1, E1. Mønstereksempel (nyskrevet minikorpus): «Gitt korpuset ‘<s> jeg liker te </s>’, ‘<s> jeg liker kaffe </s>’, ‘<s> hun liker te </s>’, oppgi bigram-MLE-formelen og regn $P(\text{te}\mid\text{liker})$. Vis brøken.» (Fasit: $2/3$.)
- **Typiske feil (`warning` n-gram-sjekkliste):** #1 glemme `<s>/</s>`; #2 snu til $P(w_{i-1}\mid w_i)$ (−2 p); #3 gi svaret uten å vise brøken; blande $C(w_{i-1},w_i)$ og $C(w_i)$ i nevneren.
- **Kvote:** 24 quiz / 24 flashcards.

#### Kapittel 3.2: Glatting — zero-frequency-problemet og add-1/Laplace
**id:** `in1140-3-2` · **number:** 3.2 · **estimatedMinutes:** 45 · **prerequisites:** `in1140-3-1`

- **Kapitteltype:** teori (formell, fasit).
- **Description:** Hvorfor uglattet MLE gir null sannsynlighet for usette n-grammer, og hvordan add-1-glatting (‘Laplace smoothing’) omfordeler sannsynlighetsmasse.
- **Forkunnskaper (kryssbok):** kap. 3.1. `collapsible` **Notasjons- og formelliste**: $V$ = vokabularstørrelse; add-1-formel; «zero-frequency»; omfordeling av masse.
- **Eksamensbelegg:** Glatting 2/7 som eget spørsmål (H2017, H2022) + **innbakt** i all Naive Bayes (Del 4) og n-gram; stigende. Sjangre: N1, E1. Prioritet: **perfekt** (bæres av både LM og NB).
- **Innholdskontrakt (theorem):** **zero-frequency-problemet** — et usett n-gram gir $C=0$ → hele produktet blir 0; **add-1/Laplace-glatting (LM)** $P(w_n\mid w_{n-1})=\dfrac{C(w_{n-1},w_n)+1}{C(w_{n-1})+V}$; **omfordeling av sannsynlighetsmasse** (masse tas fra sette og gis til usette hendelser); at glatting garanterer $P>0$. Kort at det finnes mer avanserte metoder (nevnes, ikke regnet).
- **Oppgavesjangre:** N1, E1. Mønstereksempel: «Forklar med ett eget eksempel hvorfor en bigram-modell uten glatting kan gi en helt gyldig setning sannsynlighet 0, og vis add-1-formelen som løser det.»
- **Typiske feil (`warning`):** #10 glemme $+V$ i nevneren; tro glatting endrer $C$ i telleren for sette n-grammer uten +1; #9 (koblet til NB) glemme at uten glatting blir produktet 0.
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 3.3: DRILL — Beregn setningssannsynlighet steg for steg
**id:** `in1140-3-3` · **number:** 3.3 · **estimatedMinutes:** 75 · **prerequisites:** `in1140-3-2`

- **Kapitteltype:** drill (fasit, DNA-regnefag).
- **Description:** Full drill på N1: fra minikorpus til setningssannsynlighet som produkt av bigram — med `<s>/</s>`, riktig indeksretning og brøken vist for hvert ord.
- **Forkunnskaper (kryssbok):** kap. 3.1–3.2.
- **Eksamensbelegg:** N1 er 5/7 med høy poengtetthet; bigram-fra-minikorpus er en fast gjenganger (samme regnestruktur, bare korpus byttes). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** **N1-malen**: (1) legg `<s>` foran og `</s>` bak setningen; (2) list bigrammene i rekkefølge; (3) skriv produktet $P(w_1\mid\text{<s>})\cdot\ldots\cdot P(\text{</s>}\mid w_k)$; (4) sett inn tellingen $C(w_{i-1},w_i)/C(w_{i-1})$ under HVER faktor; (5) evt. glattet variant; (6) svar (ofte som produkt, ikke ferdig utregnet). Gjennomregnet case med margnotater (hvor `<s>/</s>` gir/mister poeng, hvor indeksretningen sjekkes). 10–14 oppgaver på eksamensnivå, roterende nyskrevne minikorpus, med og uten glatting.
- **Oppgavesjangre:** N1. Mønstereksempel: «Fra korpuset i oppgaven, regn $P(\text{<s> hun liker kaffe </s>})$ som et bigram-produkt. Vis brøken for hvert ledd, og regn deretter samme setning med add-1-glatting.»
- **Typiske feil (`warning` n-gram-sjekkliste):** hele katalogen: #1 `<s>/</s>`; #2 snudd indeks (−2 p); #3 ingen mellomregning; #10 glemme $+V$ i den glattede varianten.
- **Kvote:** 24 quiz / 12 flashcards.

**Prøve-kvote Del 3:** 4 prøver (spesifisert i §4).

### Del 4 — Tekstklassifikasjon med Naive Bayes *(prioritet: PERFEKT — 5/7)*

> Del 4 fullfører den formelle verktøykassa. Naive Bayes deler MLE/glatting med
> n-gram, men legger til **prior**, **argmax** og den **naive
> uavhengighetsantakelsen — som SKAL vises i selve formelen** (før/etter ≈).

#### Kapittel 4.1: Betinget sannsynlighet, Bayes' regel og prior
**id:** `in1140-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `in1140-3-1`

- **Kapitteltype:** teori (formell, fasit).
- **Description:** Betinget sannsynlighet, produktsetningen og Bayes' regel utledet fra dem, og prioren $P(c)$ — sannsynlighetsgrunnlaget under Naive Bayes.
- **Forkunnskaper (kryssbok):** kap. 3.1. `collapsible` **Notasjons- og formelliste** (obligatorisk): $P(A\mid B)$; $P(A,B)$ simultan; $P(c)$ prior; $N_c$ = antall dokumenter i klasse $c$; $N_{doc}$ = totalt antall dokumenter; produktsetning; Bayes.
- **Eksamensbelegg:** Bayes/betinget sannsynlighet 2/7 som eget spørsmål (H2019-prøve, H2017-konte) + grunnlag for NB 5/7. Sjangre: N2-grunnlag, E1. Prioritet: **perfekt** (bærer NB).
- **Innholdskontrakt (theorem-blokker):** **betinget sannsynlighet** $P(A\mid B)=\dfrac{P(A,B)}{P(B)}$; **produktsetningen** $P(A,B)=P(A\mid B)P(B)=P(B\mid A)P(A)$; **Bayes' regel** $P(A\mid B)=\dfrac{P(B\mid A)P(A)}{P(B)}$ (utledes fra produktsetningen — kreves aktivt, vis stegene); **prior (NB)** $P(c)=\dfrac{N_c}{N_{doc}}$. `theorem`-idiom: **Bayes-utledningsprosedyren**.
- **Oppgavesjangre:** N2-grunnlag, E1. Mønstereksempel: «Utled Bayes' regel fra produktsetningen, og regn prioren $P(\text{positiv})$ når 3 av 5 treningsdokumenter er positive.» (Fasit: $3/5$.)
- **Typiske feil:** #2 snu betinget sannsynlighet; blande $P(A,B)$ og $P(A\mid B)$; regne prior med feil nevner (dokumenter vs. ord).
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 4.2: Naive Bayes — uavhengighetsantakelsen i formelen
**id:** `in1140-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `in1140-4-1`

- **Kapitteltype:** teori (formell, fasit — del av verktøykassa).
- **Description:** Naive Bayes-klassifikatoren: den naive uavhengighetsantakelsen vist i formelen, glattet trekk-sannsynlighet, argmax og veiledet læring.
- **Forkunnskaper (kryssbok):** kap. 4.1 + 3.2 (glatting). `collapsible` **Notasjons- og formelliste** (obligatorisk): $\hat c=\arg\max_c$; $f_i$ trekk (‘feature’); $P(f_i\mid c)$; $\prod_i$; $|V|$; $\text{count}(w_i,c)$; uavhengighetsantakelse $P(f_1\ldots f_n\mid c)\approx\prod_i P(f_i\mid c)$.
- **Eksamensbelegg:** Naive Bayes 5/7 (H2017-konte, H2019-prøve, H2019, H2020 [20 p], H2022). Sensorkrav (H2022): vis formelen **både før og etter** uavhengighetsantakelsen; ord utenfor vokabularet ignoreres; uten glatting blir produktet 0. Sjangre: N2, E1. Prioritet: **perfekt**.
- **Innholdskontrakt (theorem-blokker):** **Naive Bayes** $\hat c=\arg\max_c P(c)\prod_i P(f_i\mid c)$; **naiv (betinget) uavhengighetsantakelse (‘conditional independence assumption’)** — vist eksplisitt: $P(f_1\ldots f_n\mid c)\approx\prod_i P(f_i\mid c)$ (før/etter ≈); **glattet trekk-sannsynlighet** $P(w_i\mid c)=\dfrac{\text{count}(w_i,c)+1}{\left(\sum_{w\in V}\text{count}(w,c)\right)+|V|}$; **argmax** over klasser; **veiledet læring (‘supervised learning’)** — modellen trenes på annoterte data. `warning`-krav: **uavhengighetsantakelsen SKAL stå i formelen** (§1.2 pkt. 5).
- **Oppgavesjangre:** N2, E1. Mønstereksempel: «Skriv Naive Bayes-formelen for klassifisering av en anmeldelse som positiv/negativ, både med den fulle simultansannsynligheten og etter uavhengighetsantakelsen. Marker hvor antakelsen brukes.»
- **Typiske feil (`warning`):** #9 beskrive uavhengighetsantakelsen i ord uten å vise den i formelen; #10 glemme $+|V|$ i nevneren, eller ta med ord utenfor $V$; blande prior og trekk-sannsynlighet.
- **Kvote:** 22 quiz / 22 flashcards.

#### Kapittel 4.3: DRILL — Naive Bayes-klassifisering med glatting
**id:** `in1140-4-3` · **number:** 4.3 · **estimatedMinutes:** 75 · **prerequisites:** `in1140-4-2`

- **Kapitteltype:** drill (fasit, DNA-regnefag).
- **Description:** Full drill på N2: fra et lite treningssett til klasseavgjørelse — prior → glattede trekk-sannsynligheter → produkt per klasse → argmax — med hver nevner og hvert ledd vist.
- **Forkunnskaper (kryssbok):** kap. 4.2.
- **Eksamensbelegg:** N2 er 5/7, ofte den tyngste enkeltoppgaven (20 p i H2020); add-1 sentiment/språk/WSD-klassifisering er en fast gjenganger. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** **N2-malen**: (1) regn prior $P(c)=N_c/N_{doc}$ per klasse; (2) regn glattet $P(w_i\mid c)$ — vis nevneren $\left(\sum\text{count}\right)+|V|$; (3) regn $P(c)\prod_i P(w_i\mid c)$ per klasse; (4) sammenlign → argmax → konkluder klasse; (5) ignorer ord utenfor $V$. Gjennomregnet case med margnotater (hvor glatting redder produktet fra 0, hvor uavhengighetsantakelsen synes). 10–14 oppgaver på eksamensnivå, roterende domener (sentiment, språkidentifikasjon nn/nb, WSD).
- **Oppgavesjangre:** N2. Mønstereksempel: «Gitt tre positive og tre negative nyskrevne treningssetninger, klassifiser en ny setning med add-1-glattet Naive Bayes. Vis prior, hver glattet trekk-sannsynlighet med nevner, produktet per klasse og argmax.»
- **Typiske feil (`warning`):** #9 hoppe over glatting (produkt = 0); #10 feil nevner; #3 ikke vise mellomregningene; #2 snu $P(w\mid c)$ til $P(c\mid w)$.
- **Kvote:** 22 quiz / 12 flashcards.

**Prøve-kvote Del 4:** 4 prøver (spesifisert i §4).

### Del 5 — Evaluering av språkteknologi *(prioritet: KUNNE — 2/7)*

#### Kapittel 5.1: Presisjon, tilbakekalling og F1 — mot en gullstandard
**id:** `in1140-5-1` · **number:** 5.1 · **estimatedMinutes:** 45 · **prerequisites:** `in1140-4-1`

- **Kapitteltype:** teori (formell, fasit — telling).
- **Description:** Evaluering mot en gullstandard: TP/FP/FN/TN, accuracy, presisjon (‘precision’), tilbakekalling (‘recall’) og F1 — de faste evalueringsmålene.
- **Forkunnskaper (kryssbok):** kap. 4.1. `collapsible` **Notasjons- og formelliste** (obligatorisk): TP/FP/FN/TN; $\text{precision}=\frac{TP}{TP+FP}$; $\text{recall}=\frac{TP}{TP+FN}$; $\text{accuracy}=\frac{TP+TN}{\text{alle}}$; $F_1=\frac{2PR}{P+R}$; gullstandard.
- **Eksamensbelegg:** Evaluering 2/7 (H2017-konte, H2021) med precision/recall/F1, TP/FP/FN/TN, gullstandard. Sjangre: E2, E1. Prioritet: kunne.
- **Innholdskontrakt (theorem-blokker):** **gullstandard (‘gold standard’)** som fasit; **forvekslingsmatrise** TP/FP/FN/TN; **accuracy**, **presisjon**, **tilbakekalling**, **F1** (harmonisk snitt) med formler; når hvert mål er misvisende (skjev klassefordeling → accuracy villeder). `theorem`-idiom: **regn-P/R/F1-prosedyren** (fyll matrisen → sett inn i formlene).
- **Oppgavesjangre:** E2. Mønstereksempel: «En navnegjenkjenner ga 8 sanne positive, 2 falske positive og 4 falske negative. Regn presisjon, tilbakekalling og F1. Vis stegene.» (Fasit: $P=0{,}8$, $R=\tfrac{8}{12}$, $F_1=\tfrac{2\cdot0{,}8\cdot0{,}667}{0{,}8+0{,}667}$.)
- **Typiske feil:** #3 gi tall uten å fylle matrisen; forveksle presisjon og tilbakekalling (nevneren skiller); bruke accuracy der klassene er skjeve.
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 5.2: Intrinsisk vs. ekstrinsisk evaluering — og de to paradigmene
**id:** `in1140-5-2` · **number:** 5.2 · **estimatedMinutes:** 45 · **prerequisites:** `in1140-5-1`

- **Kapitteltype:** teori (forklar-begrep + halvformell).
- **Description:** Skillet mellom å måle en modell isolert (intrinsisk) og som del av et større system (ekstrinsisk), veiledet læring, og det metodologiske skillet regelbasert vs. statistisk.
- **Forkunnskaper (kryssbok):** kap. 5.1. Term-liste norsk↔engelsk.
- **Eksamensbelegg:** Intrinsisk/ekstrinsisk (H2017-konte); veiledet læring (H2022); paradigmer regelbasert vs. statistisk 3/7 (H2017, H2019-prøve, H2021); gullstandard vanskelig for dialog (H2021). Sjangre: E1, E2. Prioritet: kunne.
- **Innholdskontrakt:** **intrinsisk evaluering (‘intrinsic’)** — mål modellen isolert (f.eks. tagge-nøyaktighet); **ekstrinsisk evaluering (‘extrinsic’)** — mål modellen som del av et sluttsystem; **veiledet læring** (annoterte data) vs. uveiledet; **regelbasert vs. statistisk/empirisk paradigme** (håndkodet kunnskap vs. lært fra data); hvorfor gullstandard er vanskelig for **dialog** (turtaking, temaskift, inferens — `svakt belagt, verifiser`). Bør kjenne til: coreference/dialog nevnes kort (1/7 hver).
- **Oppgavesjangre:** E1, E2. Mønstereksempel: «Forklar med ett eget eksempel forskjellen på intrinsisk og ekstrinsisk evaluering av en POS-tagger.»
- **Typiske feil:** #11 mangle eget eksempel; blande intrinsisk/ekstrinsisk; #13 beskrive statistisk vs. regelbasert uten å si «lært fra data» / «manuelt definert».
- **Kvote:** 18 quiz / 20 flashcards.

**Prøve-kvote Del 5:** 4 prøver (spesifisert i §4).

---

## DEL B — Lingvistisk analyse

### Del 6 — Ordklasser og POS-tagging *(prioritet: PERFEKT — 7/7)*

> Del 6 åpner den lingvistiske halvdelen. Ordklasse-paring på hele setninger er en
> nesten identisk gjenganger i alle 7 sett. Tre kapitler: ordklasser/kriterier →
> POS-tagging (hvorfor det er vanskelig + taggertyper) → paring-drill.

#### Kapittel 6.1: Ordklasser og ordklassekriterier
**id:** `in1140-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** `in1140-1-1`

- **Kapitteltype:** teori (klassifiserende — fasit-nær).
- **Description:** Ordklassene og kriteriene for å skille dem, med vekt på de nære klassene som forveksles (subjunksjon/preposisjon, determinativ/pronomen) — grunnlaget for tildel-ordklasse-oppgaven.
- **Forkunnskaper (kryssbok):** kap. 1.1. `collapsible` **Notasjons- og termliste**: ordklassekodene NOUN/VERB/ADJ/PREP/PRON/CONJ/ADV/SUBJN/DET (norsk↔engelsk).
- **Eksamensbelegg:** Ordklasser 7/7 (alle sett), med en fast ordklasseliste å pare mot. Krever å skille nære klasser via syntaktisk kontekst. Sjangre: P1-grunnlag. Prioritet: **perfekt**.
- **Innholdskontrakt (definition-blokker):** de sentrale ordklassene med **morfologiske, syntaktiske og semantiske kriterier**; de **nære klassene** (subjunksjon vs. preposisjon; determinativ vs. pronomen; adjektiv vs. adverb); at ordklasse avgjøres av **kontekst**, ikke bare ordform (flertydige ord som «rett» = subst./adj./adverb). `theorem`-idiom: **kontekst-før-form-prosedyren**.
- **Oppgavesjangre:** P1-grunnlag, E1. Mønstereksempel: «For hvert uthevet ord i ‘Han løp forbi mens hun ventet’, oppgi ordklassen og hvilket kriterium som avgjør (særlig ‘forbi’ = preposisjon eller adverb?).»
- **Typiske feil:** #7 forveksle subjunksjon/preposisjon og determinativ/pronomen; avgjøre ordklasse på ordform alene; ikke bruke syntaktisk kontekst.
- **Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 6.2: POS-tagging — hvorfor det er vanskelig, og de to taggertypene
**id:** `in1140-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `in1140-6-1`

- **Kapitteltype:** teori (forklar-begrep + konseptuell).
- **Description:** Hvorfor et rent leksikonoppslag feiler (flertydighet), og de to hovedtypene taggere — regelbaserte (manuelt definerte regler) og statistiske (trent på annotert korpus).
- **Forkunnskaper (kryssbok):** kap. 6.1 + 5.2 (paradigmer). Term-liste norsk↔engelsk.
- **Eksamensbelegg:** POS-tagging-som-oppgave 7/7 (hvorfor leksikon feiler, taggertyper). Sensorkrav (H2019-prøve): si eksplisitt at regelbaserte regler er **manuelt definert**, og at statistiske taggere bruker et **ordklassetagget korpus** + en **statistisk modell**. **Merk (før-nevral):** POS behandles konseptuelt, ALDRI som HMM/Viterbi-utregning. Sjangre: P2, E1. Prioritet: **perfekt**.
- **Innholdskontrakt:** **problemet** — leksikonoppslag (én tagg per ord) feiler pga. **flertydighet** (mange frekvente ord er flertydige); **kontekstsensitiv tagging** som løsning; **regelbasert tagger** (‘rule-based’ — manuelt definerte regler); **statistisk tagger** (‘statistical’ — trent på annotert korpus + statistisk modell); hvorfor statistisk generaliserer bedre. `warning`-krav: **eksplisitt begrepsmarkering** («manuelt definert», «annotert korpus», «statistisk modell»).
- **Oppgavesjangre:** P2, E1. Mønstereksempel: «Forklar med ett eget flertydig ord hvorfor et rent leksikonoppslag ikke duger til POS-tagging, og beskriv de to taggertypene med det som definerer hver.»
- **Typiske feil (`warning`):** #13 ikke navngi taggertypene / ikke si «manuelt definert» / droppe «annotert korpus»; #7 ikke nevne flertydighet som selve problemet.
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 6.3: DRILL — Tildel ordklasse til hvert ord (paring)
**id:** `in1140-6-3` · **number:** 6.3 · **estimatedMinutes:** 70 · **prerequisites:** `in1140-6-2`

- **Kapitteltype:** drill (fasit, DNA-regnefag).
- **Description:** Full drill på P1: tildel korrekt ordklasse til hvert ord i en setning fra en fast liste, med vekt på de nære klassene og flertydige ord i kontekst.
- **Forkunnskaper (kryssbok):** kap. 6.1–6.2.
- **Eksamensbelegg:** P1 (paring mot fast ordklasseliste) i 7/7, nesten identisk format. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** **P1-malen**: gå ord for ord → bruk syntaktisk kontekst (ikke bare ordform) → avgjør nære klasser med et kriterium → tildel tagg. Gjennomgått case med margnotater (hvor kontekst avgjør). 12–16 setninger på eksamensnivå (nyskrevet), alle med `solution`.
- **Oppgavesjangre:** P1. Mønstereksempel: «Tildel ordklasse til hvert ord i ‘Den lille gutten leste boka si stille’ fra lista NOUN/VERB/ADJ/PREP/PRON/CONJ/ADV/SUBJN/DET.»
- **Typiske feil:** #7 blindt ett-ord-én-tagg; forveksle determinativ/pronomen («si», «den»); adjektiv vs. adverb («stille»).
- **Kvote:** 22 quiz / 12 flashcards.

**Prøve-kvote Del 6:** 4 prøver (spesifisert i §4).

### Del 7 — Morfologi og orddanning *(prioritet: KUNNE — 2/7, nyere)*

#### Kapittel 7.1: Morfologi — bøyning, avledning og sammensetning
**id:** `in1140-7-1` · **number:** 7.1 · **estimatedMinutes:** 45 · **prerequisites:** `in1140-6-1`

- **Kapitteltype:** teori (klassifiserende).
- **Description:** Morfemer og de tre orddanningsprosessene bøyning, avledning og sammensetning, med affikstypene — et nyere, men stigende tema.
- **Forkunnskaper (kryssbok):** kap. 6.1. Term-liste norsk↔engelsk.
- **Eksamensbelegg:** Morfologi/orddanning 2/7 (H2020, H2022), stigende; affikstyper som paring (H2022). Sjangre: M2-lignende paring, E1. Prioritet: kunne.
- **Innholdskontrakt (definition-blokker):** **morfem (‘morpheme’)** (minste betydningsbærende enhet); **bøyning (‘inflection’)** vs. **avledning (‘derivation’)** vs. **sammensetning (‘compounding’)**; **affikstyper** — bøyningssuffiks/-prefiks, avledningsprefiks/-suffiks; fri vs. bundet morfem; hvordan bøyning bevarer ordklasse mens avledning ofte endrer den. `theorem`-idiom: **klassifiser-affiks-prosedyren**.
- **Oppgavesjangre:** paring/E1. Mønstereksempel: «For hvert uthevet affiks i ‘u-lykke-lig-ere’, oppgi om det er bøynings- eller avledningsaffiks og prefiks eller suffiks.»
- **Typiske feil:** forveksle bøyning og avledning; tro alle suffiks er bøyning; blande sammensetning og avledning.
- **Kvote:** 20 quiz / 22 flashcards.

**Prøve-kvote Del 7:** 4 prøver (spesifisert i §4).

### Del 8 — Syntaks, kontekstfri grammatikk og parsing *(prioritet: PERFEKT — 7/7, STØRST, poengtyngst)*

> Del 8 er bokas største og poengtyngste del (24 p i H2022). Seks kapitler:
> CFG-grunnlag + frasestrukturregler → utled/utvid grammatikk (skrivemal) →
> rekursjon → konstituenttester → strukturell flertydighet + tegn tre → syntaks-drill.
> **CFG-leksikalske-regler-`warning`-en gjelder skarpt gjennom hele delen.**

#### Kapittel 8.1: Kontekstfri grammatikk — frasestrukturregler og leksikale regler
**id:** `in1140-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `in1140-6-1`

- **Kapitteltype:** teori (formell, fasit — del av verktøykassa).
- **Description:** Kontekstfri grammatikk (‘context-free grammar’, CFG): ikke-terminale frasestrukturregler OG terminale/leksikale regler, og hvordan et frasestrukturtre svarer til reglene.
- **Forkunnskaper (kryssbok):** kap. 6.1. `collapsible` **Notasjons- og formelliste** (obligatorisk): CFG-pil $\to$; ikke-terminaler $S, NP, VP, PP, N, V, D, P$; terminaler (ordene); disjunksjon `|`; leksikal/terminal regel vs. frasestrukturregel; tre = rot/noder/løvnoder.
- **Eksamensbelegg:** Syntaks/CFG 7/7 og poengtyngst. Utled frasestrukturregler fra et tre; **både** ikke-terminale regler ($S\to NP\ VP$) **og** leksikale ($N\to$ nisse). Sensorkrav (H2019): manglende leksikale/terminale regler trekker. Sjangre: S1-grunnlag, S4. Prioritet: **perfekt**.
- **Innholdskontrakt (theorem-blokker):** **CFG** = mengde regler (venstre ikke-terminal → høyre sekvens); **frasestrukturregler (‘phrase-structure rules’)** $S\to NP\ VP$, $NP\to D\ N$, $VP\to V\ (NP)$, $PP\to P\ NP$; **leksikale/terminale regler (‘lexical rules’)** $D\to$ en $\mid$ et, $N\to$ nisse $\mid$ lys, $V\to$ tenner; **frasestrukturtre (‘phrase-structure tree’)** — hvordan reglene bygger treet; **grammatikalitet** (genererer grammatikken setningen?). `theorem`-idiom: **avlesningsprosedyren** (les treet node for node → én regel per forgrening → ikke glem løvnodene/leksikonet). `warning`-krav: **CFG-leksikalske-regler-sjekkliste**.
- **Oppgavesjangre:** S1-grunnlag. Mønstereksempel: «Gitt frasestrukturtreet for ‘en nisse tenner et lys’, skriv ALLE reglene grammatikken må ha — både frasestrukturreglene og de leksikale reglene.»
- **Typiske feil (`warning`):** #4 skrive $S\to NP\ VP$ men droppe $N\to\ldots$, $V\to\ldots$; tro terminaler kan stå direkte i frasestrukturregler; blande ikke-terminal og terminal.
- **Kvote:** 24 quiz / 24 flashcards.

#### Kapittel 8.2: Utled og utvid en grammatikk — kjønnssamsvar og grammatikalitet
**id:** `in1140-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** `in1140-8-1`

- **Kapitteltype:** teori/skrivemal (formell, fasit).
- **Description:** Å utvide en gitt grammatikk så den dekker nye setninger (nye leksikale og evt. frasestrukturregler), og å håndtere samsvarsbøyning (kjønn) ved å splitte kategoriene — S1 i sin fulle form.
- **Forkunnskaper (kryssbok):** kap. 8.1. `collapsible` **Notasjons- og formelliste**: $D_m/D_n$, $N_m/N_n$ (maskulin/nøytrum), $NP\to D_m\ N_m\mid D_n\ N_n$; * for ugrammatisk.
- **Eksamensbelegg:** Utvid grammatikk + kjønn 7/7-gjenganger (H2017-konte, H2019, H2021, H2022). Sensorkrav (H2019): for kjønnsoppgaven må nye regler inn **både** på D/N-nivå **og** NP-nivå (for å utelukke *«et nisse»). Sjangre: S1. Prioritet: **perfekt**.
- **Innholdskontrakt (theorem — utvidelsesmal):** **utvid-grammatikk-malen**: (1) identifiser hva den nye setningen krever (nye ord → nye leksikale regler; ny struktur → ny frasestrukturregel); (2) legg til reglene; (3) sjekk at grammatikken nå genererer setningen OG ikke overgenererer; **kjønnssamsvar (‘gender agreement’)** — splitt $D\to D_m\mid D_n$, $N\to N_m\mid N_n$ OG $NP\to D_m\ N_m\mid D_n\ N_n$; **grammatikalitet** — merk ugrammatiske strenger med *. `warning`-krav: leksikale regler + begge nivåene ved kjønn.
- **Oppgavesjangre:** S1. Mønstereksempel: «Utvid grammatikken fra 8.1 så den også dekker ‘et barn ser en katt’, og legg til kjønnssamsvar slik at *‘et nisse’ og *‘en lys’ blir ugrammatiske. Vis alle nye regler på både leksikal- og NP-nivå.»
- **Typiske feil (`warning`):** #4 legge kjønn kun på D/N uten å endre NP-regelen (grammatikken utelukker ikke *«et nisse»); glemme nye leksikale regler; overgenerere.
- **Kvote:** 22 quiz / 20 flashcards.

#### Kapittel 8.3: Rekursjon i grammatikk — direkte og indirekte
**id:** `in1140-8-3` · **number:** 8.3 · **estimatedMinutes:** 45 · **prerequisites:** `in1140-8-1`

- **Kapitteltype:** teori (formell).
- **Description:** Hva rekursjon i en grammatikk er, skillet mellom direkte og indirekte rekursjon, og hvordan man skriver en rekursiv regel for fraser av uviss lengde.
- **Forkunnskaper (kryssbok):** kap. 8.1. `collapsible` **Notasjons- og formelliste**: rekursiv regel $NP\to NP$ KONJ $NP$; indirekte kjede $S\to NP\ VP$, $VP\to V\ CP$, $CP\to C\ S$.
- **Eksamensbelegg:** Rekursjon 5/7 (H2017, H2017-konte, H2019, H2021, H2022), ofte eget delspørsmål. Sensorkrav: skill direkte fra indirekte OG pek på den konkrete regelen. Sjangre: S2. Prioritet: **perfekt**.
- **Innholdskontrakt (theorem):** **rekursjon (‘recursion’)** — en ikke-terminal kan dominere en node av samme type; **direkte rekursjon** (kategorien på venstre og høyre side i **samme** regel, $NP\to NP$ KONJ $NP$, $VP\to VP\ PP$); **indirekte rekursjon** (via en kjede av regler, $S\to NP\ VP\to\ldots\to S$); at rekursjon gir uendelig mange setninger av endelig grammatikk. `theorem`-idiom: **finn-rekursjon-prosedyren** (finn regel(er) der en kategori dominerer seg selv → klassifiser direkte/indirekte med konkret regeleksempel).
- **Oppgavesjangre:** S2. Mønstereksempel: «Er grammatikken i oppgaven rekursiv? Pek på regelen(e), og skill direkte fra indirekte rekursjon med et konkret regeleksempel. Skriv deretter en rekursiv regel for koordinerte NP-er av uviss lengde.»
- **Typiske feil (`warning`):** #5 bare påstå «ja rekursiv» uten å peke på regelen; forveksle direkte og indirekte; tro at all rekursjon er direkte.
- **Kvote:** 18 quiz / 16 flashcards.

#### Kapittel 8.4: Konstituenttester
**id:** `in1140-8-4` · **number:** 8.4 · **estimatedMinutes:** 45 · **prerequisites:** `in1140-8-1`

- **Kapitteltype:** teori (metode — fasit-nær).
- **Description:** Å avgjøre om en ordsekvens er en konstituent med minst tre tester (stå alene, erstatt med pronomen, flytt som enhet), vist på et positivt og et negativt tilfelle.
- **Forkunnskaper (kryssbok):** kap. 8.1. Term-liste.
- **Eksamensbelegg:** Konstituenttester 3/7 (H2019, H2021, H2022); «er ‘X Y’ en konstituent? bruk minst 2–3 tester». Sjangre: S3. Prioritet: **perfekt** (går igjen i syntaks-blokka).
- **Innholdskontrakt (theorem — testbatteri):** **konstituent (‘constituent’)** = en ordsekvens som fungerer som én syntaktisk enhet; **de tre testene**: (1) **kan stå alene** som svar på et spørsmål; (2) **kan erstattes med ett pronomen/proform**; (3) **kan flyttes/topikaliseres** som en enhet. `theorem`-idiom: **konstituenttest-prosedyren** — oppgi testen → anvend → konkluder per test → samlet konklusjon; vis et positivt («opp bakken») og et negativt («opp nummeret», der testene feiler → ikke konstituent).
- **Oppgavesjangre:** S3. Mønstereksempel: «Er ‘med kikkerten’ en konstituent i ‘Hun så fuglen med kikkerten’? Bruk de tre testene, konkluder per test, og gi samlet konklusjon.»
- **Typiske feil:** bruke bare én test; ikke konkludere per test; blande konstituentgrense med ordgrense.
- **Kvote:** 18 quiz / 14 flashcards.

#### Kapittel 8.5: Strukturell flertydighet — tell og TEGN frasestrukturtrær
**id:** `in1140-8-5` · **number:** 8.5 · **estimatedMinutes:** 55 · **prerequisites:** `in1140-8-4`

- **Kapitteltype:** teori (formell + tegn — fasit-nær).
- **Description:** Hvordan en grammatikk kan gi en setning flere analyser (strukturell flertydighet), hvordan man teller dem, og hvordan man TEGNER hvert frasestrukturtre — med PP-festing (høyt vs. lavt) som kjerneeksempel.
- **Forkunnskaper (kryssbok):** kap. 8.1 + 8.4. `collapsible` **Notasjons- og formelliste**: PP-festing NP vs. VP; tre-notasjon i ASCII/tekst; antall analyser.
- **Eksamensbelegg:** Strukturell flertydighet 3/7 (H2017-konte tell analyser 0/1/2/3; H2020; H2022 «jeg spiser sushi med pinner» → PP høyt/lavt, digital håndtegning). Sjangre: S4. Prioritet: **perfekt** (tegn-oppgaven i Inspera skisseark).
- **Innholdskontrakt (theorem):** **strukturell flertydighet (‘structural ambiguity’)** — samme ordsekvens, flere trær; **PP-festing (‘PP-attachment’)** — preposisjonsfrasen kan henge på NP (lavt) eller VP (høyt); **tell analyser** (hvor mange trær tillater grammatikken?); **tegn tre** — én tegning per lesning. `theorem`-idiom: **tegn-tre-prosedyren** — (1) finn festepunktet der grammatikken tillater ulik tilkobling; (2) tegn ett tre per lesning fra $S$ og ned; (3) merk løvnodene (ordene); (4) beskriv forskjellen i mening. Trær vises i ASCII/tekst slik en A-besvarelse ville håndtegnet.
- **Oppgavesjangre:** S4. Mønstereksempel: «Setningen ‘Hun så mannen med kikkerten’ er strukturelt flertydig. Tegn begge frasestrukturtrærne (PP festet til NP vs. til VP) og forklar meningsforskjellen.»
- **Typiske feil:** tegne bare ett tre; ikke merke løvnodene; feste PP-en likt i begge trærne (ikke vise flertydigheten); ikke forklare meningsforskjellen.
- **Kvote:** 20 quiz / 16 flashcards.

#### Kapittel 8.6: DRILL — Syntaks: utled, utvid, rekursjon, konstituent, tegn tre
**id:** `in1140-8-6` · **number:** 8.6 · **estimatedMinutes:** 80 · **prerequisites:** `in1140-8-5`

- **Kapitteltype:** drill (fasit, DNA-regnefag).
- **Description:** Full drill på hele syntaks-blokka: den store gjengangeren «utled reglene + utvid grammatikken + er den rekursiv? + er ‘X Y’ en konstituent? + tegn treet» — samlet på eksamensnivå.
- **Forkunnskaper (kryssbok):** kap. 8.1–8.5.
- **Eksamensbelegg:** Syntaks er 7/7 og poengtyngst (24 p H2022); «utled + utvid + er den rekursiv?»-oppgaven er dokumentert gjenganger (H2017-konte, H2019, H2021, H2022). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** de fem malene fra 8.1–8.5 samlet (avles regler inkl. leksikale → utvid → finn rekursjon → konstituenttest → tegn tre); gjennomarbeidet flerdelt eksamenscase med margnotater (hvor leksikale regler gir/mister poeng, hvor rekursjonsklassifiseringen sjekkes, hvor treet må vise flertydigheten). 12–16 deloppgaver på eksamensnivå, nyskrevne setninger/grammatikker.
- **Oppgavesjangre:** S1, S2, S3, S4. Mønstereksempel: «Gitt et tre: (a) skriv alle regler inkl. leksikale; (b) utvid til en ny setning med kjønnssamsvar; (c) er grammatikken rekursiv — direkte eller indirekte?; (d) er ‘den gamle katten’ en konstituent?; (e) tegn de to trærne for en flertydig variant.»
- **Typiske feil (`warning`):** hele katalogen: #4 leksikale regler/kjønn; #5 rekursjonstype; konstituenttest-slurv; bare ett tre ved flertydighet.
- **Kvote:** 24 quiz / 10 flashcards.

**Prøve-kvote Del 8:** 4 prøver (spesifisert i §4).

### Del 9 — Leksikalsk semantikk og leksikale relasjoner *(prioritet: PERFEKT — 7/7, nedskalert fra ling1100)*

> Del 9 gjenbruker ling1100-bokas leksikalske relasjoner NEDSKALERT: klassifisering
> + kort definisjon + eget eksempel, ikke ling1100s dybde. To kapitler: relasjoner
> + WSD/zeugma → paring-drill.

#### Kapittel 9.1: Leksikale relasjoner — homonymi, polysemi, hyponymi, meronymi, synonymi, antonymi
**id:** `in1140-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `in1140-6-1`

- **Kapitteltype:** teori (klassifiserende — fasit-nær, nedskalert).
- **Description:** De leksikale relasjonene med den skarpe forskjellen mellom homonymi og polysemi, samt WSD og zeugma-testen — en gjenganger i alle 7 sett.
- **Forkunnskaper (kryssbok):** kap. 6.1. `collapsible` **Notasjons- og termliste** (norsk↔engelsk). *Gjenbrukes nedskalert fra ling1100-boka* [Meningsrelasjoner](/bok/ling1100/ling1100-2-1) og [Antonymi](/bok/ling1100/ling1100-2-2) — men uten ling1100s fem antonymityper i dybden.
- **Eksamensbelegg:** Leksikale relasjoner 7/7 (alle sett), ordparene delvis resirkulert; WSD/zeugma 2/7 (H2017-konte, H2022). Sensorkrav: egne eksempler når det bes om. Sjangre: M2, E1. Prioritet: **perfekt**.
- **Innholdskontrakt (definition-blokker):** **homonymi (‘homonymy’)** (samme form, **urelaterte** betydninger) vs. **polysemi (‘polysemy’)** (samme form, **relaterte** betydninger) — skilletesten; **hyponymi/hyperonymi (‘hyponymy/hyperonymy’)** (er-en-type); **meronymi (‘meronymy’)** (del-av); **synonymi (‘synonymy’)**; **antonymi (‘antonymy’)** (kort — komplementær/graderbar/konvers nevnt, ikke drillet i dybden som ling1100); **word sense disambiguation (WSD)** — skille betydninger i kontekst; **zeugma** som flertydighetstest. `theorem`-idiom: **klassifiser-relasjon-prosedyren** (oppgi relasjon → begrunn med test → eget eksempel).
- **Oppgavesjangre:** M2, E1. Mønstereksempel: «For hvert ordpar, oppgi den leksikale relasjonen og begrunn: (‘bank’₁ pengeinstitusjon / ‘bank’₂ elvebredd), (‘hjul’/‘bil’), (‘rose’/‘blomst’). Forklar deretter forskjellen homonymi vs. polysemi med ETT eget eksempel på hver.»
- **Typiske feil (`warning`):** #8 forveksle homonymi og polysemi (urelaterte vs. relaterte); blande hyponymi og meronymi; #11 oppgi relasjon uten test eller uten eget eksempel.
- **Kvote:** 22 quiz / 26 flashcards.

#### Kapittel 9.2: DRILL — Par ordpar med leksikal relasjon
**id:** `in1140-9-2` · **number:** 9.2 · **estimatedMinutes:** 70 · **prerequisites:** `in1140-9-1`

- **Kapitteltype:** drill (fasit, DNA-regnefag).
- **Description:** Full drill på M2: par ordpar/utsagn med relasjon og begrunn med test, med obligatorisk eget eksempel per relasjon.
- **Forkunnskaper (kryssbok):** kap. 9.1.
- **Eksamensbelegg:** M2 er 7/7 (paring), ordparene resirkuleres delvis. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** **M2-malen**: identifiser relasjonskandidat → kjør testen (relatert/urelatert for homo/polysemi; er-en-type for hyponymi; del-av for meronymi) → oppgi relasjon + begrunnelse + eget ordpar. Gjennomgått case med margnotater. 12–16 par på eksamensnivå (nyskrevet ordforråd).
- **Oppgavesjangre:** M2. Mønstereksempel: «Par hvert av 8 nyskrevne ordpar med riktig relasjon fra {homonymi, polysemi, hyponymi, meronymi, synonymi, antonymi} og gi ETT eget par per relasjon du bruker.»
- **Typiske feil:** #8 homonymi/polysemi; #11 kategorinavn uten test/eksempel; blande hyponymi/meronymi.
- **Kvote:** 18 quiz / 8 flashcards.

**Prøve-kvote Del 9:** 4 prøver (spesifisert i §4).

### Del 10 — Semantiske roller, komposisjonalitet og entailment *(prioritet: PERFEKT/kjenne — nedskalert fra ling1100)*

#### Kapittel 10.1: Semantiske roller
**id:** `in1140-10-1` · **number:** 10.1 · **estimatedMinutes:** 50 · **prerequisites:** `in1140-6-1`

- **Kapitteltype:** teori (klassifiserende — fasit-nær, nedskalert).
- **Description:** De semantiske rollene (agent, patient, theme, experiencer, instrument, goal, source, beneficiary) og hvordan man tildeler dem — en 6/7-gjenganger, ofte som minuspoengfri flervalg.
- **Forkunnskaper (kryssbok):** kap. 6.1. `collapsible` **Notasjons- og termliste** (norsk↔engelsk). *Gjenbrukes nedskalert fra ling1100* [Tematiske roller](/bok/ling1100/ling1100-6-1) — men UTEN Dowty proto-roller/argumentseleksjon (ling1100 går dypere; IN1140 krever det ikke).
- **Eksamensbelegg:** Semantiske roller 6/7 (H2017, H2017-konte, H2019-prøve, H2019, H2021, H2022; ×6 i H2022 som flervalg). **Ingen minuspoeng** på flervalg-varianten → gjett alltid. Sjangre: M1. Prioritet: **perfekt**.
- **Innholdskontrakt (definition-blokker):** **agent** (medviten igangsetter), **patient** (påvirket/endret), **theme** (beveget/lokalisert), **experiencer** (opplever uten kontroll), **instrument** (middel), **goal** (mål/mottaker), **source** (utgangspunkt), **beneficiary** (til fordel for). `theorem`-idiom: **tildel-rolle-prosedyren** (definer rollen kort → tilordne uthevet ledd med begrunnelse).
- **Oppgavesjangre:** M1. Mønstereksempel: «I ‘Anna sendte pakken til Bergen med bud’, tildel semantisk rolle til hvert uthevet ledd (Anna, pakken, til Bergen, med bud).»
- **Typiske feil:** blande theme og patient; blande instrument og agent; ikke gjette på minuspoengfri flervalg (§1.2 pkt. 7).
- **Kvote:** 20 quiz / 24 flashcards.

#### Kapittel 10.2: Komposisjonalitet og entailment
**id:** `in1140-10-2` · **number:** 10.2 · **estimatedMinutes:** 50 · **prerequisites:** `in1140-10-1`

- **Kapitteltype:** teori (forklar-begrep + halvformell — «bør kjenne til»-hale).
- **Description:** Komposisjonalitetsprinsippet og setningssemantisk entailment (medføring) — kompakt behandlet, nedskalert fra ling1100.
- **Forkunnskaper (kryssbok):** kap. 10.1. Term-liste. *Nedskalert fra ling1100* [Kompositsjonalitet](/bok/ling1100/ling1100-7-1) og entailment — IN1140 nøyer seg med definisjon + eksempel + kort logisk def., IKKE ling1100s sannhetstabeller/negasjonstest.
- **Eksamensbelegg:** Komposisjonalitet 2/7 (H2017, H2022); entailment 1/7 (H2019-prøve). Sensorkrav (entailment, H2019-prøve): (a) relasjon der den ene medfører den andre, (b) at det er lingvistisk gitt, (c) et eksempel, (d) den logiske definisjonen — hvert ledd har egne poeng; −3 om eksempel mangler/er feil. Sjangre: E1. Prioritet: komposisjonalitet kunne; entailment **kjenne** (plasseres sist, merkes «bør kjenne til»).
- **Innholdskontrakt:** **komposisjonalitet (‘compositionality’)** — betydningen til et komplekst uttrykk bestemmes av delene + kombinasjonsreglene; **entailment (‘entailment’, medføring)** — $p$ medfører $q$ hviss $q$ er sann i alle situasjoner der $p$ er sann; leksikal vs. syntaktisk entailment; kort logisk definisjon. `warning`-krav: entailment-svar må ha alle fire ledd (def + lingvistisk gitt + eksempel + logisk def).
- **Oppgavesjangre:** E1. Mønstereksempel: «Forklar komposisjonalitetsprinsippet med ett eget eksempel. Forklar deretter entailment: gi definisjon, si at det er lingvistisk gitt, gi et eget eksempelpar og den logiske definisjonen.»
- **Typiske feil (`warning`):** #11 entailment uten eget eksempel (−3); komposisjonalitet uten kombinasjonsreglene; blande entailment med implikatur (nevnes kort).
- **Kvote:** 18 quiz / 20 flashcards.

**Prøve-kvote Del 10:** 4 prøver (spesifisert i §4).

### Del 11 — Navngjenkjenning (NER) og BIO-tagging *(prioritet: PERFEKT — 6/7)*

#### Kapittel 11.1: NER og BIO-tagging — trekk og kategorier
**id:** `in1140-11-1` · **number:** 11.1 · **estimatedMinutes:** 55 · **prerequisites:** `in1140-6-1`

- **Kapitteltype:** teori (klassifiserende — fasit-nær).
- **Description:** Navngjenkjenning (‘Named Entity Recognition’) som ord-for-ord BIO-klassifisering, kategoriene, trekkene/features og hvorfor navneliste-oppslag alene feiler.
- **Forkunnskaper (kryssbok):** kap. 6.1 (ordklasse som trekk) + 6.2 (flertydighet). `collapsible` **Notasjons- og termliste** (obligatorisk): B (begynnelse), I (inne i), O (utenfor); kategorier PER/ORG/LOC/GPE/DT; trekk (ordform, lemma, shape, affiks, ordklasse, navneliste).
- **Eksamensbelegg:** NER 6/7 (H2017, H2017-konte, H2019-prøve, H2019, H2020, H2022); BIO på navnetett setning er dokumentert gjenganger. Sjangre: NER1, E1. Prioritet: **perfekt**.
- **Innholdskontrakt (theorem-blokker):** **BIO-skjemaet** — B ved egennavnets **begynnelse**, I **inne i** et flerords-egennavn, O **utenfor**; **kategorier** PER (person), ORG (organisasjon), LOC (sted), GPE (geopolitisk enhet), DT (dato); **trekk/features** for ord-for-ord-klassifisering (ordform, lemma, shape/capital-lower, affiks, ordklasse, chunk, navneliste-medlemskap); **hvorfor navneliste-oppslag alene feiler** — flertydighet/kontekst (samme streng kan være person eller sted). `theorem`-idiom: **BIO-tagge-prosedyren** (B ved navnestart → I inni → O ellers → sett kategori).
- **Oppgavesjangre:** NER1, E1. Mønstereksempel: «Forklar hva B, I og O står for, og BIO-tagg med kategori hvert ord i ‘Statsminister Jonas Gahr Støre besøkte Bergen i mai’.»
- **Typiske feil:** tagge O midt i et flerords-navn (skulle vært I); glemme kategorien; ikke begrunne hvorfor navneliste alene ikke holder (flertydighet).
- **Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 11.2: DRILL — BIO-tagg en navnetett setning
**id:** `in1140-11-2` · **number:** 11.2 · **estimatedMinutes:** 70 · **prerequisites:** `in1140-11-1`

- **Kapitteltype:** drill (fasit, DNA-regnefag).
- **Description:** Full drill på NER1: BIO-tagg hvert ord med kategori i navnetette setninger, og begrunn trekk og kategorivalg.
- **Forkunnskaper (kryssbok):** kap. 11.1.
- **Eksamensbelegg:** NER1 er 6/7, BIO på navnetett setning resirkulert. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** **NER1-malen**: gå ord for ord → B ved navnestart, I inni, O ellers → sett kategori → begrunn med trekk (shape/ordklasse/navneliste). Gjennomgått case med margnotater. 12–16 setninger på eksamensnivå (nyskrevne navnetette setninger).
- **Oppgavesjangre:** NER1. Mønstereksempel: «BIO-tagg med kategori hvert ord i ‘Selskapet Equinor ASA åpnet et kontor i Trondheim 3. mars’, og oppgi to trekk du brukte.»
- **Typiske feil:** O inni flerords-navn; glemme kategori; tagge vanlige ord som B; ikke oppgi trekk.
- **Kvote:** 18 quiz / 10 flashcards.

**Prøve-kvote Del 11:** 4 prøver (spesifisert i §4).

### Del 12 — Moderne NLP: et konseptuelt utsyn *(prioritet: KJENNE — IKKE i arkivet, fremtidsrettet)*

#### Kapittel 12.1: Ordvektorer og nevral NLP — et fremtidsrettet oversyn (verifiser)
**id:** `in1140-12-1` · **number:** 12.1 · **estimatedMinutes:** 45 · **prerequisites:** `in1140-4-2`

- **Kapitteltype:** teori (konseptuell — «bør kjenne til», merket).
- **Description:** Et kort, konseptuelt oversyn over moderne NLP (ordvektorer, cosinuslikhet, nevrale nett, transformere) — for kontekst og fremtidssikring, IKKE eksamensdrill. **Hele kapitlet er merket `(verifiser)`.**
- **Forkunnskaper (kryssbok):** kap. 4.2 (klassifikasjon som bakteppe). Term-liste; ingen tunge formler.
- **Eksamensbelegg:** **INGEN — fraværende i alle 7 sett.** Fagbeskrivelsen nevner «nevrale nettverk for NLP» og «ordvektorer», og INF1820/ML-AI-etterfølgeren vektlegger dem, men arkivet tester dem ikke. `(svakt belagt — verifiser mot nyere sett hvis de dukker opp)`. Sjangre: E1 (bare konseptuelt). Prioritet: **kjenne** (lavt).
- **Innholdskontrakt (konseptuelt, uten regneoppgaver):** **ordvektorer/word embeddings (‘word embeddings’)** — ord som tette vektorer; **cosinuslikhet (‘cosine similarity’)** som likhetsmål (idé, ikke regnet); **nevrale nett / RNN / transformere** (kort idé — sekvensmodellering, oppmerksomhet); **logistisk regresjon** som diskriminativ klassifikator (kontrast til Naive Bayes). Eksplisitt note: **dette er IKKE testet i IN1140-arkivet** og gis kun for å plassere den klassiske kjernen i et større landskap.
- **Oppgavesjangre:** E1 (konseptuelt). Mønstereksempel: «Forklar i to setninger hva en ordvektor er, og hvorfor cosinuslikhet er et naturlig likhetsmål — som konseptuell kontekst, ikke som regneoppgave.»
- **Typiske feil:** å tro at dette blir regnet på eksamen; å bruke uforholdsmessig mye tid her på bekostning av de åtte topptemaene.
- **Kvote:** 16 quiz / 20 flashcards.

**Prøve-kvote Del 12:** 4 prøver (spesifisert i §4) — konseptuelle/kortsvar, lavt vektet.

---

## Del 13 — Eksamenstrening

#### Kapittel 13.1: Sjangerbank og poeng-element-modellsvar
**id:** `in1140-13-1` · **number:** 13.1 · **estimatedMinutes:** 50 · **prerequisites:** `in1140-0-2`

- **Kapitteltype:** eksamenstrening (sjangerbank + modellbesvarelser).
- **Description:** Alle sjangrene (R1/R2/T1/N1/N2/E2/P1/P2/S1–S4/M1/M2/NER1/E1) samlet med løsningsoppskrift i kortform, og modellbesvarelser som **peker på hvert poeng-element** — full pott vs. delvis side om side.
- **Forkunnskaper (kryssbok):** hele boka.
- **Eksamensbelegg:** Destillat av sjangerkatalogen (§2.1) og de fire løsningsforslagenes poengfordeling. Skal vise, per sjanger, det som gir/mister poeng (manglende `<s>/</s>`, snudd $w$-indeks, uteglemte leksikale CFG-regler, uavhengighetsantakelse ikke i formelen, manglende eget eksempel). Prioritet: perfekt (meta).
- **Innholdskontrakt:** sjanger-for-sjanger sjekkliste + to-svars-sammenligninger (A-besvarelse mot delvis) med margnotater om delpoeng.
- **Oppgavesjangre:** alle. Mønstereksempel: «Her er to svar på samme CFG-oppgave. Marker hvert poeng-element det ene treffer og det andre mister.»
- **Typiske feil:** hele feilkatalogen §2.2 samlet.
- **Kvote:** 14 quiz / 10 flashcards.

#### Kapittel 13.2: Feilvaksine — de mekaniske sjekklistene
**id:** `in1140-13-2` · **number:** 13.2 · **estimatedMinutes:** 45 · **prerequisites:** `in1140-13-1`

- **Kapitteltype:** eksamenstrening (feilvaksine).
- **Description:** De 13 typiske feilene (§2.2) samlet som mekaniske sjekklister, hver koblet til kapitlet som forebygger den.
- **Forkunnskaper (kryssbok):** hele boka.
- **Eksamensbelegg:** Avledet av løsningsforslagenes poengfordeling (analysen §5). Skal fungere som studentens siste-sjekk før innlevering. Prioritet: perfekt (meta).
- **Innholdskontrakt:** feilkatalog #1–#13 med forebyggende kapittelhenvisning og en «rett-før-du-leverer»-sjekkliste (`<s>/</s>`? riktig $w$-indeks? mellomregning vist? leksikale CFG-regler? kjønn på begge nivåer? uavhengighetsantakelsen i formelen? eget eksempel? norske tegn i regex? gjettet på minuspoengfri MC?).
- **Oppgavesjangre:** «finn feilen i dette svaret»-oppgaver på tvers av sjangrene.
- **Typiske feil:** metafeilen å ikke sjekke mot listen før innlevering.
- **Kvote:** 12 quiz / 10 flashcards.

#### Kapittel 13.3: Øvingseksamen 1 — bred kjerne
**id:** `in1140-13-3` · **number:** 13.3 · **estimatedMinutes:** 60 · **prerequisites:** `in1140-13-2`

- **Kapitteltype:** øvingseksamen (komplett sett med løsningsforslag).
- **Description:** Et komplett, hjelpemiddelfritt 4-timers sett som speiler et typisk moderne IN1140-sett — bred kjerne, miks av alle fem sjangerfamiliene.
- **Forkunnskaper (kryssbok):** hele boka.
- **Eksamensbelegg:** Speiler temafordelingen i et «typisk» sett (analysen §2): regex (R1+R2) + ordklasser (P1+P2) + syntaks (S1–S4, tyngst) + leksikale relasjoner (M2) + semantiske roller (M1) + n-gram (N1) + Naive Bayes (N2) + NER (NER1) + forklar-begrep (E1). Miks: flervalg + formelt artefakt + regn + tegn tre. Prioritet: perfekt (helhet).
- **Innholdskontrakt:** ~15–19 nyskrevne deloppgaver med Inspera-typer (flervalg, paring, tekstfelt, langsvar, håndtegning); løsningsforslag i `collapsible` per oppgave, skrevet som A-besvarelse med poeng-element-margnotater.
- **Oppgavesjangre:** alle. Mønstereksempel: komplett sett.
- **Typiske feil:** tidsstyring (syntaks er tyngst → prioriter); hele feilkatalogen under tidspress.
- **Kvote:** 8 quiz / 0 flashcards.

#### Kapittel 13.4: Øvingseksamen 2 — formell/regne-tyngde
**id:** `in1140-13-4` · **number:** 13.4 · **estimatedMinutes:** 60 · **prerequisites:** `in1140-13-3`

- **Kapitteltype:** øvingseksamen (komplett sett med løsningsforslag).
- **Description:** Et komplett sett vektet mot den formelle verktøykassa — regex fra spesifikasjon, n-gram-sannsynlighet med glatting, Naive Bayes, og en tung syntaks-blokk med tegn-tre.
- **Forkunnskaper (kryssbok):** hele boka.
- **Eksamensbelegg:** Speiler et regne-/artefakt-tungt sett (jf. H2020/H2022): R1 (kompleks spesifikasjon), N1 (bigram + trigram, vis alle steg), N2 (Naive Bayes med glatting, uavhengighet i formel), S1–S4 (utled+utvid+rekursjon+konstituent+tegn tre), NER1. Prioritet: perfekt (formell tyngde).
- **Innholdskontrakt:** ~15–18 nyskrevne deloppgaver med tung vekt på regn/skriv/tegn; løsningsforslag som A-besvarelse med de mekaniske sjekklistene synlige (`<s>/</s>`, $w$-indeks, mellomregning, leksikale regler, uavhengighetsantakelse).
- **Oppgavesjangre:** R1, N1, N2, S1–S4, NER1. Mønstereksempel: komplett sett.
- **Typiske feil:** #1–#5, #9, #10, #12 samlet under tidspress.
- **Kvote:** 8 quiz / 0 flashcards.

#### Kapittel 13.5: Øvingseksamen 3 — klassifiser/tildel-tyngde + forklar-begrep
**id:** `in1140-13-5` · **number:** 13.5 · **estimatedMinutes:** 60 · **prerequisites:** `in1140-13-4`

- **Kapitteltype:** øvingseksamen (komplett sett med løsningsforslag).
- **Description:** Et komplett sett vektet mot klassifisering/tildeling og korte begrepssvar — ordklasse-paring, semantiske roller (minuspoengfri MC), leksikale relasjoner, BIO-NER, og forklar-begrep-kortsvar.
- **Forkunnskaper (kryssbok):** hele boka.
- **Eksamensbelegg:** Speiler et klassifiserings-/forklar-tungt sett (jf. H2017-konte/H2021): P1 (ordklasse-paring), M1 (roller, ingen minuspoeng), M2 (leksikale relasjoner), NER1 (BIO), E1/E2 (glatting, Markov, veiledet læring, intrinsisk/ekstrinsisk, precision/recall/F1), R2 (gjenkjenn regex). Prioritet: perfekt (klassifiser + forklar).
- **Innholdskontrakt:** ~15–18 nyskrevne deloppgaver med vekt på paring/flervalg + kortsvar; løsningsforslag som A-besvarelse med poeng-element-margnotater (definisjon + hvorfor + eget eksempel; gjett alltid på minuspoengfri MC).
- **Oppgavesjangre:** P1, M1, M2, NER1, E1, E2, R2. Mønstereksempel: komplett sett.
- **Typiske feil:** #7, #8, #11, #13 samlet; ikke gjette på minuspoengfri flervalg.
- **Kvote:** 8 quiz / 0 flashcards.

**Prøve-kvote Del 13:** ingen (delen ER eksamenstreningen; øvingseksamenene dekker helheten).

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–12 → 48 prøver)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med løsningsforslag (A-besvarelse
med de mekaniske sjekklistene synlige) og poengfordeling. Prøvekapitler bygges som
`in1140-<del>-prove` (chapterNumber `<del>.P`) etter plattformmønsteret, eller som
egne exercise-seksjoner i delens siste kapittel. **Merk: prøvekapitler skrives IKKE
som `#### Kapittel`-headinger** (chapterNumber `N.P` er ikke del-basert `\d+\.\d+`);
de spesifiseres her som prosa.

- **Prøve-kvote Del 1:** 4 prøver (tokenisering) — (1.A) token vs. type + telling (T1); (1.B) tokeniseringens kanttilfeller, to-stegs forbedring (T1); (1.C) blandet tokenisering + FSA-note (T1/E1); (1.D) full tokeniseringsoppgave på eksamensnivå.
- **Prøve-kvote Del 2:** 4 prøver (regulære uttrykk) — (2.A) regex-verktøy + R2-gjenkjenning; (2.B) skriv regex fra spesifikasjon, norske tegn (R1); (2.C) kanttilfeller + fjern-parentes (R1/R2); (2.D) full R1+R2-oppgave på eksamensnivå.
- **Prøve-kvote Del 3:** 4 prøver (n-gram) — (3.A) MLE + `<s>/</s>` + Markov (N1); (3.B) glatting + zero-frequency (N1/E1); (3.C) beregn setningssannsynlighet, vis brøk (N1); (3.D) full N1-oppgave med og uten glatting.
- **Prøve-kvote Del 4:** 4 prøver (Naive Bayes) — (4.A) betinget ssh + Bayes-utledning + prior (N2/E1); (4.B) NB-formel med uavhengighet + glatting (N2); (4.C) full NB-klassifisering, vis alle ledd (N2); (4.D) blandet NB + glatting-forklaring.
- **Prøve-kvote Del 5:** 4 prøver (evaluering) — (5.A) precision/recall/F1 + TP/FP/FN/TN (E2); (5.B) intrinsisk/ekstrinsisk + veiledet læring (E1); (5.C) paradigmer + gullstandard (E1); (5.D) full evalueringsoppgave.
- **Prøve-kvote Del 6:** 4 prøver (ordklasser/POS) — (6.A) ordklassekriterier + nære klasser (P1); (6.B) hvorfor leksikon feiler + taggertyper (P2); (6.C) ordklasse-paring på hel setning (P1); (6.D) full POS-oppgave (P1+P2).
- **Prøve-kvote Del 7:** 4 prøver (morfologi) — (7.A) morfem + orddanningsprosesser; (7.B) affikstyper (paring); (7.C) bøyning/avledning/sammensetning skilt; (7.D) full morfologioppgave.
- **Prøve-kvote Del 8:** 4 prøver (syntaks/CFG) — (8.A) avles regler inkl. leksikale (S1); (8.B) utvid + kjønnssamsvar (S1); (8.C) rekursjon + konstituenttester (S2/S3); (8.D) full syntaksoppgave med tegn tre (S1–S4, eksamensnivå, tyngst).
- **Prøve-kvote Del 9:** 4 prøver (leksikale relasjoner) — (9.A) homonymi/polysemi + test (M2); (9.B) hyponymi/meronymi/synonymi/antonymi (M2); (9.C) paring med egne eksempler (M2); (9.D) full M2-oppgave + WSD/zeugma.
- **Prøve-kvote Del 10:** 4 prøver (roller/komposisjonalitet/entailment) — (10.A) tildel semantiske roller (M1); (10.B) roller minuspoengfri flervalg (M1); (10.C) komposisjonalitet (E1); (10.D) entailment med alle fire ledd (E1).
- **Prøve-kvote Del 11:** 4 prøver (NER/BIO) — (11.A) BIO-skjema + kategorier (NER1); (11.B) BIO-tagg navnetett setning (NER1); (11.C) trekk/features + hvorfor navneliste feiler (E1); (11.D) full NER-oppgave.
- **Prøve-kvote Del 12:** 4 prøver (moderne NLP, konseptuelt/lavt vektet) — (12.A) ordvektorer + cosinuslikhet-idé (E1); (12.B) nevrale nett/transformere kort (E1); (12.C) logistisk regresjon vs. Naive Bayes (E1); (12.D) blandet konseptuell — alle merket `(verifiser)`, ikke-drill.

### Øvingseksamener (3 komplette sett — se kap. 13.3–13.5)

| Sett | Profil den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (13.3) | Typisk moderne sett | Bred kjerne: regex + ordklasser + syntaks (tyngst) + leksikale relasjoner + roller + n-gram + NB + NER + forklar-begrep. Flervalg + artefakt + regn + tegn tre. |
| Øvingseksamen 2 (13.4) | Regne-/artefakt-tungt (jf. H2020/H2022) | R1, N1 (bigram+trigram), N2 (m/glatting), S1–S4 (tung syntaks + tegn tre), NER1. De mekaniske sjekklistene synlige. |
| Øvingseksamen 3 (13.5) | Klassifiser-/forklar-tungt (jf. H2017-konte/H2021) | P1, M1 (minuspoengfri MC), M2, NER1, E1/E2, R2. Paring/flervalg + kortsvar. |

De tre settene dekker samtlige sjangre (R1/R2/T1/N1/N2/E2/P1/P2/S1–S4/M1/M2/NER1/E1)
minst én gang, og alle fem sjangerfamiliene (flervalg/paring, skriv artefakt, regn,
forklar-begrep, tegn tre). Ingen midtveis-simulering — IN1140 har kun avsluttende
eksamen.

---

## 5. Kvotesammendrag (AUTORITATIV)

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.2 | 14+14 = **28** | 12+12 = **24** |
| 1 | 1.1–1.2 | 20+16 = **36** | 22+18 = **40** |
| 2 | 2.1–2.4 | 24+22+20+24 = **90** | 26+18+14+12 = **70** |
| 3 | 3.1–3.3 | 24+18+24 = **66** | 24+18+12 = **54** |
| 4 | 4.1–4.3 | 20+22+22 = **64** | 22+22+12 = **56** |
| 5 | 5.1–5.2 | 20+18 = **38** | 22+20 = **42** |
| 6 | 6.1–6.3 | 22+20+22 = **64** | 24+22+12 = **58** |
| 7 | 7.1 | **20** | **22** |
| 8 | 8.1–8.6 | 24+22+18+18+20+24 = **126** | 24+20+16+14+16+10 = **100** |
| 9 | 9.1–9.2 | 22+18 = **40** | 26+8 = **34** |
| 10 | 10.1–10.2 | 20+18 = **38** | 24+20 = **44** |
| 11 | 11.1–11.2 | 22+18 = **40** | 24+10 = **34** |
| 12 | 12.1 | **16** | **20** |
| 13 | 13.1–13.5 | 14+12+8+8+8 = **58** | 10+10+0+0+0 = **30** |
| **Sum** | **38 kap.** | **724 ≥ 500 ✓** | **628 ≥ 500 ✓** |

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens, eksamensform og fagets natur. **Quiz siktes høyt (724)**
fordi nesten alt er autorettbart: regex-matching (R1/R2), telle n-grammer og regne
sannsynlighet (N1/N2), klassifisere ordklasse/rolle/relasjon/BIO (P1/M1/M2/NER1) og
korte begrepssvar (E1) egner seg alle for automatisk retting — de to store formelle
delene (Del 2 regex = 90, Del 8 syntaks = 126) og regnedelen (Del 3–4 = 130) bærer
mest quiz, i tråd med at der ligger poengene og de mekaniske sjekklistene.
**Flashcards siktes godt over gulvet (628)** fordi faget er begrepsrikt: leksikale
relasjoner, semantiske roller, ordklasser, BIO-kategorier, morfologi, evaluering,
glatting og komposisjonalitet gir en stor begrep↔definisjon-bank, og formlene (MLE,
add-1, Naive Bayes, prior, precision/recall/F1) gir formel↔navn-kort. Teoridelene
bærer mest flashcards; drillkapitlene få (de trener prosedyre, ikke nye begreper).
Tettheten ligger godt over 500-gulvet fordi faget bærer to fagfelt og åtte
topptemaer (jf. README «≥500 er et gulv»). Flashcards kommer KUN fra toppnivå
`definition`-blokker med `title`; `options[0]` = riktig svar i quiz-staging (runtime
stokker).

---

## 6. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — 4-timers digital Inspera-eksamen uten hjelpemidler, hver
   høst, A–F; sjanger-miksen (flervalg/paring + skriv artefakt + regn + forklar +
   tegn tre); at programmering skjer i obligene, ikke på eksamen; statusnoten
   (nedlagt, eksamen t.o.m. 2027, klassisk pensum — verifiser) — fra kap. 0.1.
2. **De to svarhåndverkene** — formell/regne-modus (formelen er fasit, vis
   mellomregning) og forklar-begrep-modus (definisjon + hvorfor + eget eksempel),
   og de mekaniske sjekklistene — fra kap. 0.2.
3. **Prioriteringskartet** — frekvens-tabellen i tre nivåer: **perfekt** (regex,
   ordklasser/POS, syntaks/CFG [tyngst], leksikale relasjoner, semantiske roller,
   NER, n-gram, Naive Bayes), **kunne** (tokenisering, morfologi, evaluering,
   komposisjonalitet, rekursjon/konstituent/flertydighet som delspørsmål),
   **kjenne** (entailment, FSA, dialog, coreference, IR/tf-idf, lingvistiske nivåer,
   og hele Del 12 moderne NLP — IKKE testet i arkivet).
4. **Sjangerguiden** — R1/R2/T1/N1/N2/E2/P1/P2/S1–S4/M1/M2/NER1/E1 med
   løsningsoppskriftene fra drill- og sjangerkapitlene i kortform.
5. **Den formelle verktøykassa samlet** — regex-byggeprosedyre → n-gram med
   `<s>/</s>` og glatting → Naive Bayes med uavhengighet i formelen → CFG (avles,
   utvid, rekursjon, konstituent, tegn tre), med notasjonslisten samlet. Her ligger
   poengene og de systematiske feilene.
6. **Begreps- og formelbank** — kjernebegreper (leksikale relasjoner, roller,
   ordklasser, BIO, morfologi, evaluering, paradigmer) + formlene (MLE, add-1,
   Naive Bayes, prior, precision/recall/F1) — flashcard-speilet i prosaform, med
   engelsk fagterm ved hvert.
7. **De mekaniske sjekklistene (feilvaksinen)** — de 13 feilene fra §2.2 som en
   siste-sjekk-liste: `<s>/</s>`? riktig $w$-indeks? mellomregning vist? leksikale
   CFG-regler? kjønn på begge nivåer? uavhengighetsantakelsen i formelen? eget
   eksempel? norske tegn i regex? gjettet på minuspoengfri MC?
8. **Studieløp** — anbefalt progresjon: Del 0 → DEL A (tokenisering → regex →
   n-gram → Naive Bayes → evaluering) → DEL B (ordklasser/POS → morfologi →
   **syntaks [mest tid her, tyngst]** → leksikale relasjoner → roller → NER →
   Del 12 konseptuelt til slutt) → prøvene underveis → de tre øvingseksamenene
   under tidspress (4 t) de siste ukene, med minst mulig tid på Del 12.

---

## 7. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først:** `TextbookCourse`-oppføring for `in1140` (mønster
   `COURSE_BI_OKONOMI` i `textbook-courses-matte.ts`, skrives til
   `textbook-courses-hoyskole.ts`): id, title, `level: 'Høyskole'`, alle 38 kapitler
   med id/number/title/description/estimatedMinutes/topics/competenceGoals/
   prerequisites fra dette skjelettet, `sectionNames` fra §2-tabellen. **`number` SKAL
   være del-basert** («8.3», ALDRI lineær «28») — bokforsiden grupperer på
   `number.split('.')[0]`. Prosareferanser bruker samme form («kap. 8.3»).
2. **Del 0** (etablerer sjangerkatalogen, temafrekvensen, de to svarhåndverkene og de
   mekaniske sjekklistene resten refererer).
3. **DEL A i avhengighetsrekkefølge:** Del 1 (tokenisering — forbehandling) → Del 2
   (regex — stor, verktøykasse) → Del 3 (n-gram — verktøykasse, krever 1.1) → Del 4
   (Naive Bayes — krever 3.1/3.2 for glatting) → Del 5 (evaluering — krever 4.1).
4. **DEL B i avhengighetsrekkefølge:** Del 6 (ordklasser/POS — krever 1.1) → Del 7
   (morfologi) → **Del 8 (syntaks/CFG — STØRST, poengtyngst, bygg nøye fra bunnen;
   krever 6.1)** → Del 9 (leksikale relasjoner, nedskalert fra ling1100) → Del 10
   (roller/komposisjonalitet/entailment, nedskalert) → Del 11 (NER/BIO) → Del 12
   (moderne NLP — konseptuelt, merket verifiser, ikke overinvester).
5. **Del 13** til slutt (sjangerbank, feilvaksine, de tre øvingseksamenene gjenbruker
   alle sjangre og prosedyrer fra alle temadeler — én agent leser HELE skjelettet).
6. **Prøver** (`in1140-<del>-prove`, chapterNumber `<del>.P`, 4 per temadel 1–12 =
   48 stk) etter at alle kapitler finnes.
7. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel, jf. `/narrativ`) og
   quiz-registrering til slutt.

**Batching (fase 4):** én agent per hel del. Del 2 (4 kap.) og Del 8 (6 kap.) holdes
samlet hos én agent hver (Del 8 er størst — flagg for konsistenssjekk). Del 9/10-
agentene må lese §1.1 (arbeidsdeling mot ling1100) og lenke NEDSKALERT til
ling1100-kapitlene. Regnedel-agentene (Del 3/4) må lese §1.2 (de mekaniske
sjekklistene) ordrett. Del 13-agenten leser HELE skjelettet.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering:** hver `src/lib/data/chapters/in1140-*.json` parser
      (`json.load`); generer via `json.dump` (LaTeX krever `\\`; regex-metategn og
      tospråklige termer med ‘…’ må ikke bryte JSON). `npm run build` grønn
      (combine-chapters fanger ugyldig JSON) — vis output.
- [ ] **Mekaniske sjekklister synlige:** hvert n-gram-/NB-kapittel har
      n-gram-sjekkliste-`warning` (`<s>/</s>`, $w$-indeks, vis brøk); hvert
      CFG-kapittel har CFG-leksikalske-regler-`warning`; hvert regnekapittel har
      «vis mellomregning»-krav; NB-kapitlet viser **uavhengighetsantakelsen i
      formelen** (før/etter ≈).
- [ ] **Formell notasjon:** regex-metategn og sannsynlighet i `$...$` konsekvent;
      `collapsible` **Notasjons- og formelliste** per formelt delkapittel (per
      delkapittel, ikke arv); frasestrukturtrær i ASCII/tekst.
- [ ] **Syntaks-tyngdepunkt:** Del 8 er bokas største del (6 kap., 126 quiz);
      kap. 8.6 har en komplett, gjennomarbeidet flerdelt syntaks-case (avles inkl.
      leksikale → utvid m/kjønn → rekursjon → konstituent → tegn tre) med
      sensor-margnotater.
- [ ] **Før-nevral avgrensning:** Del 12 er kort, konseptuell, uten regneoppgaver,
      merket `(verifiser)`, og sier eksplisitt at embeddings/nevrale nett IKKE er
      testet i arkivet; ingen HMM/Viterbi/perpleksitet/edit-distance i noe kapittel.
- [ ] **Arbeidsdeling ling1100:** Del 9/10 er nedskalert (klassifisering + kort
      def. + eget eksempel), lenker til eksisterende ling1100-kapitler (kun til
      kapitler som finnes), og importerer IKKE ling1100s formelle semantikk-hybrid.
- [ ] **Tospråklighet:** norsk brødtekst + engelsk fagterm i parentes ved første
      forekomst i HVERT kapittel (ikke arv).
- [ ] **Poeng-element-modellsvar:** drill- og øvingseksamensløsninger peker på hvert
      delkrav slik løsningsforslagene deler ut poeng (full pott vs. delvis).
- [ ] **Egne eksempler + minuspoengfri MC:** leksikale relasjoner/roller/entailment
      krever eget eksempel; boka sier eksplisitt «gjett alltid» på minuspoengfri
      klassifiserings-flervalg.
- [ ] **Kapittel-DNA:** hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra
      dette skjelettet), Forkunnskaper-blokk med kryssbok-lenker + Notasjons-/
      formelliste, Motivasjon, `definition`/`theorem`, eksempler (siste på
      eksamensnivå), Typiske feil-`warning` (feilkodene §2.2), 6–12 øvinger med
      `solution`/`hints`, repetisjons-`collapsible`; drillkapitler har
      løsningsoppskrift + sensor-kommentert case + 8–16 varianter.
- [ ] **Kvotesum:** quiz ≥724 og flashcards ≥628 fordelt per kapittel som i
      kvotesammendraget (§5) (hardt minimum ≥500/≥500); flashcards KUN fra toppnivå
      `definition`-blokker med `title`; fasit-svaralternativer rebalansert (jevn
      a/b/c/d; `options[0]` alltid riktig i staging, runtime stokker).
- [ ] **Prøver + øvingseksamener:** 4 per temadel 1–12 (48 stk) + 3 øvingseksamener
      (13.3–13.5) som dekker alle sjangre og alle fem sjangerfamiliene.
- [ ] **Ærlighet/forbehold:** status nedlagt + INF1820-note merket `(verifiser)`;
      ingen karaktergrenser oppgitt; utsagn om sett uten løsningsforslag (H2019-ord.,
      H2020, H2017-konte) merket `(svakt belagt — verifiser)`; kap. 0.1 sier at
      arkivet er lite (7 sett, bare høst) men tett dokumentert (4 løsningsforslag).
- [ ] **Opphavsrett:** ALLE oppgaver, korpus, setninger, grammatikker, regex og
      modellbesvarelser nyskrevne (arkivets gjengangere — postadresse-regex,
      minikorpus, film-sentiment, Ibsen-BIO, «opp bakken» — gjenskapt med endrede
      fakta/ord); Jurafsky & Martin refereres, aldri sitert i lengde.
- [ ] **Navigasjon:** `in1140` inn i `src/app/bok/trinn/hoyere/institusjoner.ts`
      under **Universitetet i Oslo (UiO)**, navn = «IN1140 Introduksjon til
      språkteknologi».
- [ ] **Verifiser rendering:** prod-server + curl mot institusjonsside, bokforside og
      minst 3 kapittel-/narrativ-ruter (ett formelt teori- [f.eks. 3.1 eller 8.1],
      ett drill- [f.eks. 8.6], ett klassifiserings-/forklar-kapittel [f.eks. 9.1]) +
      quiz- og flashcard-rute (200 + innholdssjekk), jf. `getChapterMeta`-lærdommen.
