# Eksamensanalyse: IN1140 Introduksjon til språkteknologi (UiO)

> Grunnlagsdokument for en eksamensrettet lærebok. Basert på gjennomgang av **7 oppgavesett** (H2017 ordinær, H2017 konte [jan. 2018], H2019 prøveeksamen, H2019 ordinær, H2020 ordinær, H2021 ordinær, H2022 ordinær) og **4 fullstendige løsningsforslag med poengfordeling** (H2017, H2019-prøve, H2021, H2022) fra Institutt for informatikk (IFI), UiO. Emnet ble gitt hver høst.
>
> **Alt innhold er omskrevet med egne ord — ingen ordrette gjengivelser av oppgavetekster eller løsningsforslag.** Analysen går dypere enn fagbeskrivelsen (`fagbeskrivelse-in1140.md`) og skal leses sammen med den.
>
> **Statusverifisering (WebFetch mot UiO-emnesiden, 2026-07-08):** IN1140 er **nedlagt**. Siste ordinære undervisning var høst 2025 (deretter selvstudium); eksamen tilbys t.o.m. høst 2027, men **kun** for studenter med tidligere godkjente obligatoriske øvelser. Det finnes **ingen 1:1-erstatning**. Emnesiden oppgir at det videreførte/beslektede emnet er **INF1820 – Introduksjon til språk- og kommunikasjonsteknologi** (8 sp overlapp), og at bachelorprogrammet «Informatikk: språkteknologi» er avviklet (siste opptak H2024) og avløst av «Informatikk: maskinlæring og kunstig intelligens» (fra H2025). **Konsekvens for boka:** kalibrer mot IN1140s egne sett (eksamen lever t.o.m. 2027 og pensumkjernen er stabil, klassisk NLP), men profiler forsiktig mot etterfølgerkonteksten — se del 1 og del 7 om hvor moderne dyplærings-NLP (embeddings/nevrale nett) *kan* legges til som fremtidsrettet tillegg uten å være dokumentert i arkivet. **[verifiser]**-merking brukes der utsagn hviler tynt på arkivet.
>
> **Evidensstyrke:** Arkivet er lite (7 sett) men tett dokumentert: 4 av settene har fullstendige løsningsforslag *med eksplisitt poengfordeling*, noe som gir uvanlig sterk innsikt i sensorpraksis (sterkere enn i ling1100, som bare hadde én sensorveiledning). Frekvenstallene er robuste for kjernetemaene (de går igjen i nesten alle sett). Utsagn om sjeldne temaer og om hva sensor ville krevd på oppgaver *uten* løsningsforslag er merket **[svakt belagt — verifiser]**.

---

## 1. Eksamensform og utvikling (2017–2022)

**Grunnform:** 4 timers skriftlig digital skoleeksamen i **Inspera**, **ingen hjelpemidler**, karakterskala A–F. Alle obligatoriske øvelser (programmeringsoppgaver i Python) må være godkjent på forhånd — men **programmering foregår i obligene, ikke på eksamen**. Selve eksamen er «penn-og-papir»-aktig formell oppgaveløsning gjort digitalt.

**Unntaksåret H2020 (korona):** 4,5 timer og **alle hjelpemidler tillatt** (lærebok, notater, nettressurser). Dette gjorde oppgavene noe mer anvendte/omfattende (bl.a. en 20-poengs Naive Bayes-oppgave og en åpen «flertydighet på alle nivåer»-drøfting), men temaprofilen er den samme. Behandle H2020 som gyldig, men vekt de hjelpemiddelfrie settene tyngst for kalibrering av vanskegrad.

### Oppgaveformatet er en utpreget MIKS av sjangre
Dette er det viktigste enkeltfunnet om form. IN1140-eksamen er **ikke** et rent essayfag og **ikke** et rent regnefag — den kombinerer fem tydelig ulike oppgavesjangre i samme sett, ofte innenfor samme tema:

1. **Flervalg / paring (MC + matching):** gjenkjenn hvilket regulært uttrykk / hvilken streng som matcher; tildel ordklasse (paring); klassifiser semantisk rolle (flervalg); par leksikalske relasjoner; BIO-tagg ord (paring). H2022 er nesten halvt automat-rettbar (Inspera-oppgavetyper eksplisitt merket «Flervalg», «Paring», «Tekstfelt», «Langsvar», «Muntlig/håndtegning»).
2. **Skriv et formelt artefakt («kode»-aktig, men ikke Python):** skriv et regulært uttrykk fra en spesifikasjon (postadresse, dato, togbillett, telefonnr., forkortelse, verbformer); utled/utvid en kontekstfri grammatikk (frasestrukturregler + leksikale regler).
3. **Regn (formell utregning med fasit):** beregn bigram-/trigram-sannsynlighet for en setning fra et korpus (vis alle steg); regn Naive Bayes-sannsynlighet med glatting og avgjør klasse; regn prior P(c) og trekk-sannsynlighet P(f|c).
4. **Forklar begrep kort (tekstfelt/kortsvar):** hva er glatting/komposisjonalitet/Markov-antagelsen/veiledet læring/entailment; forskjell homonymi vs. polysemi; regelbasert vs. statistisk paradigme.
5. **Tegn (digital håndtegning):** frasestrukturtre(r) for en (ofte flertydig) setning. Egen skisseark-modul i Inspera.

**Grov fordeling i arkivet:** ca. **35–40 % formell utregning/artefakt-skriving** (regex, grammatikk, sannsynlighetsregning), ca. **30–35 % klassifiser/tildel** (ordklasse, semantisk rolle, leksikal relasjon, BIO), ca. **25–30 % forklar-begrep-kortsvar**. Ren fri drøfting finnes nesten ikke (H2020 «flertydighet»-oppgaven er det nærmeste). Læreboka må derfor bygge **prosedyreferdighet** (regn/skriv/tegn) og **presis begrepsgjengivelse** — ikke essayevne.

### Poeng-økonomien er eksplisitt og fininndelt
Løsningsforslagene viser en **streng, punktvis poengfordeling** (f.eks. «3 poeng for riktig beskrivelse av forskjellen typer/tokens, trekker 1 poeng per feil antall»; «trekk 2 poeng om w_i og w_{i-1} forveksles»). Dette er et fag der delpoeng gis mekanisk mot en sjekkliste. Boka bør derfor lære studenten å **treffe hvert delkrav eksplisitt** (se del 4).

### Språk og terminologi
Oppgavene gis på norsk (bokmål); studenten kan svare på norsk eller engelsk. Fagterminologien er gjennomgående **tospråklig**: norsk term med engelsk fagterm ved siden av (tokenisering/tokenization, glatting/smoothing, veiledet læring/supervised learning, entailment, Named Entity Recognition). Læreboka bør speile dette: norsk brødtekst, engelsk fagterm alltid oppgitt, siden lærebok-pensum (Jurafsky & Martin *Speech and Language Processing*, sannsynlig hovedbok — henvist direkte i H2022-løsningen «Jurafsky & Martin, kapittel 3») er på engelsk.

### Pensumprofil: klassisk NLP, IKKE dyplæring
Et avgjørende funn: arkivet dekker **den klassiske, før-nevrale kjernen** av Jurafsky & Martin. Følgende *forventede* moderne temaer er **fraværende i alle 7 sett**: ordvektorer/word embeddings, cosinuslikhet, nevrale nett/RNN/transformere, logistisk regresjon, perpleksitet (beregnes ikke — språkmodell-sannsynlighet regnes derimot), HMM/Viterbi-dekoding (POS-tagging behandles *konseptuelt* som regelbasert vs. statistisk, aldri som Viterbi-utregning), og minimum edit distance/Levenshtein. Fagbeskrivelsen nevner «nevrale nettverk for NLP» og «ordvektorer» som pensumtemaer, men **eksamenssettene i arkivet tester dem ikke**. Boka skal derfor tyngdepunkt-legges på den klassiske kjernen; embeddings/nevrale nett kan gis et *kort, konseptuelt* kapittel (fremtidsrettet mot INF1820/ML-AI-etterfølgeren og fagbeskrivelsens ordlyd), men **skal ikke overinvesteres** — arkivet gir ingen eksamensdekning der. **[verifiser mot nyere sett enn 2022 hvis de dukker opp]**

---

## 2. Temafrekvens-tabell

Opptelling over de **7 settene**. Et tema telles én gang per sett der det inngår i minst ett spørsmål/delspørsmål. Score av 7.

| Tema | Sett | Score* |
|---|---|---|
| **Regulære uttrykk** (gjenkjenn hvilken streng/regex matcher [MC]; **skriv** regex fra spesifikasjon: dato, postadresse, telefonnr., togbillett, forkortelse, verbformer; grupperinger, disjunksjon, kvantorer `?*+`, tegnklasser, `\s \d`, norske tegn æøå) | H17, konte, prøve, H19, H20, H21, H22 | **7/7** ⭐⭐⭐ |
| **Ordklasser / POS-tagging** (tildel ordklasse til hvert ord i en setning [paring]; ordklassekriterier; hvorfor leksikonoppslag alene feiler [flertydighet]; to hovedtyper taggere: regelbasert vs. statistisk) | H17, konte, prøve, H19, H20, H21, H22 | **7/7** ⭐⭐⭐ |
| **Syntaks / kontekstfri grammatikk** (utled frasestrukturregler fra tre/trebank; utvid grammatikk; leksikale [terminale] regler; **rekursjon** direkte/indirekte; **konstituenttester**; **strukturell flertydighet** — tell/tegn analyser; samsvarsbøyning [kjønn]; grammatikalitet) | H17, konte, prøve, H19, H20, H21, H22 | **7/7** ⭐⭐⭐ |
| **Leksikalsk semantikk / leksikale relasjoner** (homonymi vs. polysemi, hyponymi/hyperonymi, meronymi, synonymi, antonymi; flertydighet/WSD; zeugma-test) | H17, konte, prøve, H19, H20, H21, H22 | **7/7** ⭐⭐⭐ |
| **Semantiske roller** (agent, patient, theme, experiencer, instrument, goal, source, beneficiary; tildel rolle til uthevet ledd [ofte flervalg, uten minuspoeng]) | H17, konte, prøve, H19, H21, H22 | **6/7** ⭐⭐⭐ |
| **Named Entity Recognition (NER)** (ord-for-ord BIO-klassifisering: B/I/O + kategori PER/ORG/LOC/GPE/DT; trekk/features [ordform, lemma, shape, affiks, ordklasse, navneliste]; hvorfor navneliste-oppslag alene feiler [flertydighet/kontekst]) | H17, konte, prøve, H19, H20, H22 | **6/7** ⭐⭐⭐ |
| **N-gram-språkmodeller** (bigram/trigram; tell n-grammer inkl. `<s>`/`</s>`; MLE-formel P(w_i\|w_{i-1})=C(w_{i-1},w_i)/C(w_{i-1}); kjederegel/produkt; **beregn setningssannsynlighet steg for steg**; Markov-antagelsen) | H17, prøve, H19, H21, H22 | **5/7** ⭐⭐⭐ |
| **Naive Bayes / tekstklassifikasjon** (prior P(c)=N_c/N_doc; trekk-sannsynlighet P(w\|c); **naiv uavhengighetsantakelse**; argmax; sentiment/språk/WSD-klassifisering; veiledet læring) | konte, prøve, H19, H20, H22 | **5/7** ⭐⭐⭐ |
| **Rekursjon i grammatikk** (direkte vs. indirekte; skriv rekursiv regel [NP→NP KONJ NP, VP→VP PP]; er grammatikken rekursiv? begrunn) | H17, konte, H19, H21, H22 | **5/7** ⭐⭐⭐ |
| **Tokenisering** (tokens vs. typer + tell dem; skriv tokenisert output; utfordringer: URL, forkortelse, bindestrek, apostrof, tall, tegnsetting; avhengige oppgaver [POS/WSD krever tokenisering]) | prøve, H19, H21 | **3/7** ⭐⭐ |
| **Konstituenttester** (stå alene, erstatt med pronomen, flytt som enhet; avgjør om en ordsekvens er konstituent) | H19, H21, H22 | **3/7** ⭐⭐ |
| **Metodologiske paradigmer** (regelbasert vs. empirisk/statistisk/maskinlæring; håndkodet kunnskap vs. lært fra data) | H17, prøve, H21 | **3/7** ⭐⭐ |
| **Glatting (smoothing)** — som eget spørsmål (add-1/Laplace; zero-frequency-problemet; omfordeling av sannsynlighetsmasse) | H17, H22 (+ innbakt i NB: prøve, H20, konte) | **2/7 eget + innbakt** ⭐⭐ (stigende) |
| **Morfologi / orddanning** (bøyning vs. avledning vs. sammensetning; affikstyper: bøyningssuffiks/-prefiks, avledningsprefiks/-suffiks) | H20, H22 | **2/7** ⭐⭐ (nyere) |
| **Evaluering** (accuracy/precision/recall/F1; TP/FP/FN/TN; gullstandard; intrinsisk vs. ekstrinsisk evaluering) | konte, H21 | **2/7** ⭐⭐ |
| **Komposisjonalitet** (betydningen til et komplekst uttrykk bestemmes av delene + kombinasjonsreglene) | H17, H22 | **2/7** ⭐ |
| **Bayes' regel / betinget sannsynlighet** (utled Bayes fra P(A,B)/P(B); produktsetningen; utled NB-formelen) | prøve, konte | **2/7** ⭐ |
| **Dialogsystemer** (oppgaveorienterte vs. åpne agenter; hvorfor gullstandard er vanskelig) | H19, H21 | **2/7** ⭐ |
| **Word sense disambiguation / ordsemantikk** (skille betydninger; flertydig ord i kontekst) | konte, H22 | **2/7** ⭐ |
| **Setningssemantikk / entailment** (medføring mellom setninger; leksikal vs. syntaktisk; logisk def.) | prøve | **1/7** ⭐ |
| **Endelige tilstandsmaskiner (FSA)** (transisjonstabell; determinisme) | konte | **1/7** ⭐ |
| **Informasjonsgjenfinning / ordvekting** (informative vs. ikke-informative ord; tf-idf-idé) | konte | **1/7** ⭐ |
| **Coreference resolution** (hva er det; hvorfor vanskelig) | H20 | **1/7** ⭐ |
| **Lingvistiske analysenivåer** (fonetikk/fonologi, morfologi, syntaks, semantikk, pragmatikk) | H17 (+ berørt H20) | **1/7** ⭐ |

\* ⭐⭐⭐ = kjernetema, må beherskes perfekt; ⭐⭐ = hyppig/stigende; ⭐ = perifert, dekkes kort.

### Lesning av tabellen
- **De fire absolutte kjernetemaene (regulære uttrykk, ordklasser/POS, syntaks/CFG, leksikale relasjoner) står i alle 7 sett.** Sammen med semantiske roller (6/7) og NER (6/7) utgjør disse ryggraden i hvert eneste sett. Et IN1140-sett uten regex + grammatikk + ordklasser + leksikale relasjoner finnes ikke.
- **«Regnedelen» (n-gram + Naive Bayes) står i 5/7 hver** og er der de fleste utregningspoengene ligger. Disse to deler mye formelapparat (MLE, glatting, sannsynlighetsprodukt) og bør bygges sammen som en «formell verktøykasse».
- **Syntaks er det tyngste enkelttemaet i poeng:** H2022 ga hele 24 poeng til syntaks (frasestrukturtrær, grammatikalitet, rekursjon, konstituenter). Grammatikk går igjen med 3–4 delspørsmål per sett.
- **Regex er det tyngste i antall oppgaver:** ofte 2–3 regex-oppgaver per sett, med en glidende skala fra enkel MC-gjenkjenning til å skrive et komplekst uttrykk (postadresse med linjeskift og norske tegn, H2021; togbillett-format, H2020).

### Dokumentert oppgavegjenbruk (treningsgull)
Gjenbruksmønsteret er sterkt — samme oppgavetyper, ofte samme setninger og korpus, går igjen:
- **«Tildel ordklasse til hvert ord i denne setningen»** (paring mot en fast ordklasseliste): alle 7 sett, nesten identisk format.
- **«Utled/utvid en kontekstfri grammatikk + er den rekursiv?»**: H2017-konte, H2019, H2021, H2022 — samme oppgavelogikk (skriv S→NP VP, NP→D N …, legg til rekursiv KONJ-/PP-regel, forklar direkte vs. indirekte rekursjon).
- **Konstituenttest-oppgaven** «er ‘X Y’ en konstituent? bruk minst 2–3 tester»: H2019, H2021, H2022 (opp bakken / opp nummeret; en hund og en katt).
- **Bigram-sannsynlighet fra minikorpus** «vis stegene for P(setning)»: H2019-prøve, H2019, H2021, H2022 — samme malskompaktnisse-/mat-/pizza-korpus, alltid med `<s>`/`</s>` og MLE-brøk.
- **Naive Bayes sentiment/klasse** med add-1-glatting: H2017-konte (WSD «mål»), H2019-prøve og H2019 (film-sentiment), H2020 (nn/nb), H2022 — samme regnestruktur (prior × produkt av glattede trekk-sannsynligheter → argmax).
- **Leksikale relasjoner som paring** (homonymi/polysemi/hyponymi/meronymi/synonymi/antonymi): alle sett; ordparene resirkuleres delvis.
- **BIO-NER på en navnetett setning**: H2019-prøve, H2019, H2020, H2022 (Ibsen/Maurstad/Riksteateret/Stokmarknes; Kaptein Sorte Bill).

Å trene på gamle sett er altså **direkte eksamensrelevant** — oppgavemalene resirkuleres tungt, bare eksempeltekstene byttes.

---

## 3. Oppgavetype-katalog

### Type R1: Skriv et regulært uttrykk fra spesifikasjon (kjerne, «kode»-aktig)
**Hva kreves:** Gitt en detaljert spesifikasjon (tillatte formater, tallintervaller, linjeskift, norske tegn), skriv ett regex som gjenkjenner alle gyldige og ingen ugyldige strenger. Eksempler fra arkivet: norsk postadresse på tre linjer med `\n` og æøåÆØÅ (H2021); norske datoformater (H2022); togbillett med dato/pris/klokkeslett/billettype (H2020); norske verbformer imperativ/infinitiv/presens/preteritum (H2017); forkortelser (H2017-konte).
**Verktøy som må sitte:** tegnklasser `[...]`, intervaller `[0-9] [1-9] [a-zA-ZæøåÆØÅ]`, kvantorer `? * + {n} {n,m}`, disjunksjon `|`, grupper `( )`, ankre, escape `\. \s \n \d`, opsjonelle grupper `(...)?`.
**Struktur på toppsvar:** bygg uttrykket komponent for komponent (én linje/felt av gangen), håndter kanttilfeller (0-foran-tall, opsjonelt landsprefiks `(\+47|0047)?`), test mot de oppgitte positive og negative eksemplene.

### Type R2: Gjenkjenn hva et regex matcher (flervalg)
**Hva kreves:** Gitt et regex, avgjør hvilken av 4 strenger som *ikke* matcher, eller hvilke som matcher (flere svar), eller om en gruppering/parentes kan fjernes uten å endre språket. Krever presis lesing av presedens (`ab|cd|efg` matcher «ab», «cd», «efg» — ikke «abcdefg»).
**Struktur:** les uttrykket venstre-til-høyre, marker hva hver del krever, test hver svarkandidat mekanisk.

### Type S1: Utled/utvid kontekstfri grammatikk (kjerne, «kode»-aktig)
**Hva kreves:** (a) Skriv frasestrukturreglene som svarer til et gitt tre / en trebank — **både** ikke-terminale regler (S→NP VP, NP→D N, VP→V NP) **og** terminale/leksikale regler (D→en|et, N→nisse|lys, V→tenner). (b) Utvid grammatikken så den dekker nye setninger (nye leksikale regler + evt. ny VP-/NP-regel). (c) Håndter samsvarsbøyning (kjønn) ved å splitte i Dm/Dn, Nm/Nn og NP→Dm Nm | Dn Nn for å utelukke *«et nisse».
**Sensorkrav (H2019-løsning):** manglende leksikale/terminale regler trekker; for kjønnsoppgaven er poenget å vise at nye regler må inn **både** på D/N-nivå **og** NP-nivå.
**Struktur på toppsvar:** les treet node for node, skriv én regel per forgrening, samle alternativer med `|`, ikke glem løvnodene (leksikonet).

### Type S2: Rekursjon (forklar + identifiser + skriv)
**Hva kreves:** Forklar hva rekursjon i en grammatikk er (en ikke-terminal kan dominere en node av samme type), skill **direkte** (kategori på venstre og høyre side i samme regel, f.eks. NP→NP KONJ NP) fra **indirekte** (via en kjede: S→NP VP, VP→V CP, CP→C S). Avgjør om en gitt grammatikk er rekursiv og begrunn; evt. skriv en rekursiv regel for NP-er av «uviss lengde».
**Struktur:** definer rekursjon → finn den/de rekursive regelen(e) → klassifiser direkte/indirekte med konkret regeleksempel fra grammatikken.

### Type S3: Konstituenttester
**Hva kreves:** Avgjør om en ordsekvens er en konstituent ved **minst tre** tester: (1) kan stå alene som svar, (2) kan erstattes med ett pronomen, (3) kan flyttes/topikaliseres som en enhet. Vis både et positivt («opp bakken») og et negativt («opp nummeret», der testene feiler → *).
**Struktur:** oppgi testen → anvend på sekvensen → konkluder per test → samlet konklusjon.

### Type S4: Strukturell flertydighet (tell/tegn analyser)
**Hva kreves:** Gitt en grammatikk, tell hvor mange analyser den gir en setning (H2017-konte: 0/1/2/3), eller **tegn** alle frasestrukturtrærne den tillater (H2022: «jeg spiser sushi med pinner» → PP-festing høyt vs. lavt). Ofte digital håndtegning.
**Struktur:** finn festepunktene der grammatikken tillater ulik tilkobling (typisk PP-festing NP vs. VP) → tegn ett tre per lesning → merk løvnodene.

### Type P1: POS-tagging — tildel ordklasse (paring, kjerne)
**Hva kreves:** Tildel korrekt ordklasse til hvert (uthevede) ord i en setning fra en fast liste (NOUN/VERB/ADJ/PREP/PRON/CONJ/ADV/SUBJN/DET). Krever at man skiller nære klasser (subjunksjon vs. preposisjon; determinativ vs. pronomen).
**Struktur:** gå ord for ord, bruk syntaktisk kontekst, ikke bare ordform.

### Type P2: POS-tagging som oppgave — hvorfor det er vanskelig
**Hva kreves:** Forklar hvorfor et rent leksikonoppslag (én tagg per ord) feiler → **flertydighet** (mange frekvente ord er flertydige, f.eks. «rett» = subst./adj./adverb). Beskriv løsningen: kontekstsensitiv tagging, og de **to hovedtypene** taggere — regelbaserte (manuelt definerte regler) og statistiske (trent på annotert korpus). Sensorkrav (H2019-prøve): må si eksplisitt at reglene er *manuelt definert*, og at statistiske taggere bruker et *ordklassetagget korpus* + en *statistisk modell*.
**Struktur:** navngi problemet (flertydighet) + eksempel → to tagger-typer med definerende kjennetegn → hvorfor statistisk generaliserer bedre.

### Type M1: Semantiske roller (klassifiser, ofte flervalg)
**Hva kreves:** Tildel semantisk rolle (agent/patient/theme/experiencer/instrument/goal/source/beneficiary) til uthevede ledd. På flervalg-varianten (H2021/H2022): poeng for riktig, **ingen minuspoeng** for feil.
**Struktur på toppsvar (kortsvar-varianten):** definer rollen kort (agent = medviten igangsetter; patient = påvirket/endret; theme = beveget/lokalisert; experiencer = opplever uten kontroll; instrument = middel) → tilordne med begrunnelse.

### Type M2: Leksikale relasjoner (paring/klassifiser + forklar)
**Hva kreves:** Par ordpar/utsagn med relasjon (homonymi, polysemi, hyponymi, hyperonymi, meronymi, synonymi, antonymi). Eller forklar forskjellen homonymi (urelaterte betydninger) vs. polysemi (relaterte betydninger) med egne eksempler. H2022 kobler til **zeugma** som test på flertydighet.
**Struktur:** oppgi definisjonen + ett eget eksempel per relasjon → anvend på parene.

### Type N1: Beregn n-gram-sannsynlighet (regn, kjerne)
**Hva kreves:** (a) Tell unike bigram/trigram i et korpus (husk `<s>`/`</s>`). (b) Oppgi MLE-formelen P(w_i|w_{i-1}) = C(w_{i-1},w_i)/C(w_{i-1}). (c) **Vis stegene** for setningssannsynligheten som et produkt av bigram, med både den symbolske brøken **og** de innsatte tellingene.
**Sensorkrav (løsninger H2017/H2019/H2021):** formelen må være **identisk** for full pott; forveksling av w_i og w_{i-1} trekker 2 poeng; utelatelse av `<s>`/`</s>` trekker; man må vise brøken C(w_{i-1},w_i)/C(w_{i-1}) for **hvert** ord.
**Struktur på toppsvar:** list bigrammene → skriv produktet P(w_1|<s>)·…·P(</s>|w_k) → sett inn tellinger under hver faktor → (svar trengs ofte ikke ferdig utregnet).

### Type N2: Naive Bayes-klassifisering (regn + forklar, kjerne)
**Hva kreves:** (a) Regn prior P(c) = N_c/N_doc. (b) Regn glattet trekk-sannsynlighet P(w_i|c) = (count(w_i,c)+1)/(Σ_w count(w,c) + |V|). (c) Regn P(c)·∏P(w_i|c) for hver klasse og velg argmax. (d) Forklar den **naive uavhengighetsantakelsen** (trekkene er betinget uavhengige gitt klassen) og vis hvordan den fremkommer i formelen (før/etter ≈). (e) Forklar hvorfor glatting trengs (zero-frequency).
**Sensorkrav (H2022-løsning):** man bør vise formelen **både før og etter** uavhengighetsantakelsen; ord utenfor vokabularet ignoreres; uten glatting blir produktet 0 («Problematisk!»).
**Struktur:** prior → glattede trekk-sannsynligheter (vis nevner Σcount + |V|) → produkt per klasse → sammenlign → konkluder klasse.

### Type E1: Forklar-begrep-kortsvar (tekstfelt)
**Hva kreves:** 1–3 setninger, presist, ofte med eksempel: glatting, komposisjonalitet, Markov-antagelsen, veiledet læring, entailment, hva er en språkmodell (+ anvendelser), regelbasert vs. statistisk, intrinsisk vs. ekstrinsisk evaluering, lingvistiske nivåer, coreference/dialog. Belønner **presis fagformulering**, ikke lengde.
**Struktur:** definisjon → (kort) hvorfor/når → ett eksempel.

### Type NER1: BIO-klassifisering + trekk
**Hva kreves:** (a) Forklar hva B/I/O står for (begynnelse/inne i/utenfor et egennavn) + kategori (PER/ORG/LOC/GPE/DT). (b) BIO-tagg hvert ord i en navnetett setning (paring). (c) Gi eksempler på **trekk/features** for ord-for-ord-klassifisering: ordform, lemma, shape (capital/lower), affiks, ordklasse, chunk, navneliste. (d) Hvorfor navneliste-oppslag alene feiler → flertydighet/kontekst (JFK = person eller flyplass).
**Struktur:** forklar BIO → tagg mekanisk (B ved navnestart, I inni, O ellers) → begrunn kategorivalg.

### Type E2: Evaluering (regn/forklar)
**Hva kreves:** Beskriv evaluering mot en **gullstandard** med accuracy/precision/recall/F1, utledet fra TP/FP/FN/TN. Skill **intrinsisk** (mål modellen isolert, f.eks. tagging-nøyaktighet) fra **ekstrinsisk** (mål modellen som del av et større system). Drøft hvorfor gullstandard er problematisk for dialog (turtaking, temaskift, inferens).
**Struktur:** definer målene → forklar telling → intrinsisk/ekstrinsisk-skillet med eksempel.

---

## 4. Sensorens krav — hva som skiller nivåene

> **Sterk evidens her:** fire av settene har fullstendige løsningsforslag *med eksplisitt poengfordeling*. Punktene under er avledet direkte fra disse (H2017, H2019-prøve, H2021, H2022), ikke fra en generell sensorveiledning. Karaktergrenser (A/B/C…) er ikke dokumentert og er **[svakt belagt — verifiser]**; men *innholdskravene* per oppgave er uvanlig godt belagt.

### Hva løsningsforslagene eksplisitt belønner og straffer
1. **Formler må være eksakt riktige.** For MLE og n-gram: «formelen må være identisk til løsningsforslaget for å få full pott», og å **forveksle w_i og w_{i-1}** koster 2 poeng. Formell presisjon er nesten binær.
2. **Vis alle mellomregninger.** På sannsynlighetsoppgaver trekkes poeng om man ikke viser P(w_i|w_{i-1}) for *hvert* ord, og om man ikke viser tellingen C(w_{i-1},w_i)/C(w_{i-1}). Svaret alene holder ikke — **prosessen** gir poengene.
3. **Grensesymboler og fullstendighet.** I n-gram trekkes poeng om `<s>`/`</s>` ikke er med. I CFG trekkes poeng for manglende **leksikale/terminale** regler (ikke bare de ikke-terminale). Sjekklistene er komplette og mekaniske.
4. **Eksplisitt begrepsmarkering.** For POS-taggere må det stå *eksplisitt* at regelbaserte regler er «manuelt definert» (ellers −1), og statistiske taggere må nevne *både* annotert korpus *og* statistisk modell (bare det ene → −1). For Naive Bayes må uavhengighetsantakelsen **vises i formelen** (før/etter ≈), ikke bare beskrives i ord.
5. **Egne eksempler forventes** der det bes om det (leksikale relasjoner, semantiske roller, entailment). Manglende/feil eksempel trekker (entailment: −3 om eksempel mangler eller er feil).
6. **Definisjon + eksempel + (logisk) presisering** er malen for begrepssvar: entailment krever (a) relasjon der den ene medfører den andre, (b) at det er lingvistisk gitt, (c) et eksempel, (d) den logiske definisjonen — hvert ledd har egne poeng.
7. **«Naturlig arbeidsflyt fra kurset» belønnes.** H2021-løsningen godtar eksplisitt at studenten først gir en forenklet tokenisering og deretter forbedrer den (slik obligene var bygd), så lenge det tydelig fremgår at tegnsetting skilles ut. Sensor premierer at man speiler kursets metode.
8. **Ingen minuspoeng på klassifiserings-flervalg.** For semantiske roller og enkelte leksikale-relasjon-oppgaver gis poeng for riktig, men ikke trekk for feil — det lønner seg alltid å gjette.

### Konsekvens for modellbesvarelser i læreboka
Differensier full-pott vs. delvis på to akser: (1) **formell nøyaktighet** (riktig formel, riktig retning på betinget sannsynlighet, komplette regelsett, grensesymboler), som er nesten binær, og (2) **eksplisitt dekning av hvert delkrav** (definisjon + eksempel + presisering + vist mellomregning). Boka bør vise modellsvar som **peker på hvert poeng-element** slik løsningsforslagene gjør — det er den mest direkte veien til full uttelling i dette faget.

---

## 5. Typiske feil

Avledet av løsningsforslagenes poengfordeling, merknader og gjengangernes felleoppbygging (godt belagt der løsning finnes):

1. **Utelate `<s>`/`</s>`** i n-gram-telling og -produkt (eksplisitt straffet).
2. **Snu retningen på betinget sannsynlighet** — skrive P(w_{i-1}|w_i) i stedet for P(w_i|w_{i-1}) (−2 poeng).
3. **Bare gi svaret uten mellomregning** på sannsynlighetsoppgaver — mister prosesspoengene.
4. **Glemme leksikale/terminale regler** i CFG (skrive S→NP VP … men droppe N→…, V→…), eller ikke løse kjønnssamsvar på både D/N- og NP-nivå.
5. **Ikke skille direkte fra indirekte rekursjon**, eller bare påstå «ja rekursiv» uten å peke på regelen.
6. **Tokeniserer som beholder tegnsetting klistret til ordet** («deg!», «arbeidsvilkår,») — viser at man ikke har forstått at tegnsetting skilles ut.
7. **POS: blindt ett-ord-én-tagg-oppslag** uten å ta høyde for flertydighet/kontekst; forveksle nære klasser (subjunksjon/preposisjon, determinativ/pronomen).
8. **Forveksle homonymi og polysemi** (urelaterte vs. relaterte betydninger) — den vanligste leksikalsk-semantiske feilen.
9. **Naive Bayes uten glatting** → null-sannsynlighet gjør hele produktet 0; eller å ikke vise/formulere uavhengighetsantakelsen i formelen.
10. **Regne P(w|c) med feil nevner** — glemme +|V| i nevneren ved add-1, eller ta med ord utenfor vokabularet.
11. **Begrepssvar uten det etterspurte eksemplet** (entailment, leksikale relasjoner, semantiske roller) — trekker selv om definisjonen er riktig.
12. **Regex som ikke håndterer norske tegn** (glemme æøåÆØÅ) eller kanttilfeller (0-foran-tall, opsjonelt prefiks) i skriv-selv-oppgavene.
13. **Ikke navngi taggertypene eksplisitt** eller ikke si at regler er «manuelt definerte» / at statistiske modeller trenes på annotert korpus.

---

## 6. Begreps- og formelapparat (pensumforankring)

Sannsynlig hovedbok: **Jurafsky & Martin, *Speech and Language Processing*** (henvist direkte i H2022-løsningen, kap. 3 om n-gram) — den klassiske, før-nevrale kjernen. Under er kjernebegrepene sensor spør om, gruppert i tekstprosessering / språkmodeller & klassifikasjon / lingvistisk analyse.

### Tekstprosessering og formelle uttrykk
| Område | Kjernebegreper |
|---|---|
| Regulære uttrykk | Tegnklasser `[...]`, intervaller, kvantorer `? * + {n,m}`, disjunksjon `\|`, grupper `( )`, ankre `^ $`, escape `\. \s \d \n`, opsjonelle grupper; skrive regex fra spesifikasjon; norske tegn |
| Tokenisering | Token vs. type; ord-/typetelling; tegnsettings-håndtering; kanttilfeller (URL, forkortelse, bindestrek, apostrof, tall); tokenisering som forbehandling for POS/WSD |
| Endelige tilstandsmaskiner | Transisjonstabell; determinisme vs. ikke-determinisme (perifert) |
| Morfologi | Morfem; bøyning vs. avledning vs. sammensetning; affikstyper (bøynings-/avledningsprefiks og -suffiks) |

### Språkmodeller og klassifikasjon (regnedelen)
| Formel/begrep | Uttrykk |
|---|---|
| MLE (bigram) | P(w_i\|w_{i-1}) = C(w_{i-1}, w_i) / C(w_{i-1}) |
| Kjederegel / n-gram | P(w_1…w_k) = ∏_{i} P(w_i \| w_{i-1}) (bigram); Markov-antagelsen |
| Add-1-glatting (LM) | P(w_n\|w_{n-1}) = (C(w_{n-1}, w_n) + 1) / (C(w_{n-1}) + V) |
| Grensesymboler | `<s>` (setningsstart), `</s>` (setningsslutt) — obligatoriske i tellingen |
| Betinget sannsynlighet / Bayes | P(A\|B) = P(A,B)/P(B); produktsetning P(A,B)=P(A\|B)P(B)=P(B\|A)P(A); Bayes P(A\|B)=P(B\|A)P(A)/P(B) |
| Prior (NB) | P(c) = N_c / N_doc |
| Naive Bayes | ĉ = argmax_c P(c) ∏_i P(f_i\|c); naiv (betinget) uavhengighetsantakelse P(f_1…f_n\|c) ≈ ∏_i P(f_i\|c) |
| Trekk-sannsynlighet m/glatting (NB) | P(w_i\|c) = (count(w_i,c) + 1) / (Σ_{w∈V} count(w,c) + \|V\|) |
| Evaluering | accuracy, precision, recall, F1; TP/FP/FN/TN; gullstandard; intrinsisk vs. ekstrinsisk |
| Metode | Veiledet læring (annoterte data); regelbasert vs. statistisk/empirisk paradigme |

### Lingvistisk analyse (semantikk + syntaks)
| Område | Kjernebegreper |
|---|---|
| Ordklasser | NOUN/VERB/ADJ/PREP/PRON/CONJ/ADV/SUBJN/DET; ordklassekriterier; flertydighet; regelbaserte vs. statistiske taggere |
| Syntaks / CFG | Frasestrukturregler (ikke-terminale + terminale/leksikale); S→NP VP, NP→D N, VP→V (NP); rekursjon (direkte/indirekte); konstituenttester (stå alene / pronomen / flytting); strukturell flertydighet (PP-festing); samsvarsbøyning (kjønn); grammatikalitet |
| Leksikalsk semantikk | Homonymi (homograf/homofon) vs. polysemi; hyponymi/hyperonymi; meronymi; synonymi; antonymi; WSD; zeugma |
| Semantiske roller | agent, patient, theme, experiencer, beneficiary, instrument, goal, source |
| Setningssemantikk | Komposisjonalitet; entailment (leksikal/syntaktisk/logisk) |
| Anvendelser | NER (BIO + trekk + kategorier); coreference resolution; dialogsystemer; informasjonsgjenfinning/ordvekting; flertydighet på alle nivåer |

### Arbeidsdeling mot LING1100 (lingvistikk-nabofaget)
IN1140 og LING1100 **overlapper i den semantiske kjernen**, men behandler den ulikt:
- **Delt DNA (kan gjenbruke ling1100-materiale, men i lettere/mer anvendt form):** leksikale relasjoner (homonymi/polysemi/hyponymi/meronymi/synonymi/antonymi), **semantiske roller** (agent/patient/theme/experiencer/instrument/goal/source — ling1100 går dypere med Dowty proto-roller og argumentseleksjon, som IN1140 *ikke* krever), **komposisjonalitet** og **entailment** (ling1100 gjør formell logikk/sannhetstabeller/negasjonstest; IN1140 nøyer seg med definisjon + eksempel + kort logisk def.).
- **IN1140s egne domener (ikke i ling1100):** hele den **computasjonelle/formelle NLP-halvdelen** — regulære uttrykk, tokenisering, morfologisk oppdeling, POS-tagging, **kontekstfri grammatikk/syntaks/parsing** (ling1100 gjør nesten ikke syntaks), n-gram-språkmodeller, Naive Bayes/tekstklassifikasjon, NER, evaluering, dialog. Her er ling1100 til lite hjelp.
- **Praktisk konsekvens:** gjenbruk ling1100-bokas kapitler om semantiske roller / leksikale relasjoner / komposisjonalitet som *fundament* for IN1140s semantikk-kapitler, men **skjær ned dybden** (IN1140 tester klassifisering og korte forklaringer, ikke ling1100s formelle semantikk-hybrid) og **legg tyngdepunktet på den computasjonelle halvdelen som er unik for IN1140**. LING1100 er «formell-hybrid i lingvistikk»; IN1140 er «formell-hybrid i språkteknologi/informatikk».

---

## 7. Prognose og prioritering

Basert på frekvens 2017–2022, den tette poengdokumentasjonen og gjenbruksmønstrene:

### Må beherskes perfekt (bærer nesten hvert eneste sett)
1. **Regulære uttrykk** — både gjenkjenne (MC) og **skrive fra spesifikasjon** (norske tegn, tallintervaller, linjeskift, opsjonelle grupper). 7/7, ofte 2–3 oppgaver per sett.
2. **Syntaks / kontekstfri grammatikk** — utled regler fra tre (inkl. leksikale), utvid grammatikk, rekursjon (direkte/indirekte), konstituenttester, strukturell flertydighet, kjønnssamsvar. 7/7 og det poengtyngste temaet (24 p i H2022).
3. **Ordklasser / POS-tagging** — tildel ordklasse (paring), ordklassekriterier, hvorfor leksikonoppslag feiler, regelbasert vs. statistisk tagger. 7/7.
4. **Leksikale relasjoner** — homonymi vs. polysemi (m/eksempler), hyponymi, meronymi, synonymi, antonymi, WSD. 7/7.
5. **N-gram-språkmodeller** — tell n-grammer m/`<s></s>`, MLE-formel, **beregn setningssannsynlighet steg for steg**, Markov, glatting. 5/7, men høy poengtetthet og streng retting.
6. **Naive Bayes / tekstklassifikasjon** — prior, glattet trekk-sannsynlighet, argmax, uavhengighetsantakelse vist i formelen, veiledet læring. 5/7.
7. **Semantiske roller** — klassifiser agent/patient/theme/experiencer/instrument/goal/source/beneficiary. 6/7.
8. **NER** — BIO-klassifisering, trekk/features, kategorier, hvorfor navneliste alene feiler. 6/7.

### Må kunne (høy sannsynlighet, differensierer)
9. **Rekursjon** (som eget delspørsmål), **konstituenttester**, **strukturell flertydighet/tretegning** — deloppgaver som går igjen i syntaks-blokka. 3–5/7.
10. **Tokenisering** — tokens vs. typer + telling, tokenisert output, tegnsettings-utfordringer. 3/7.
11. **Glatting** som eget begrep (zero-frequency, add-1/Laplace, omfordeling). 2/7 eget + innbakt i all NB/LM.
12. **Metodologiske paradigmer** (regelbasert vs. statistisk), **komposisjonalitet**, **evaluering** (precision/recall/F1, intrinsisk/ekstrinsisk), **morfologi/orddanning**, **Bayes-utledning**. 2–3/7 hver.

### Bør kjenne til (lavfrekvent, men i pensum og gitt)
13. **Dialogsystemer**, **WSD/ordsemantikk (zeugma)**, **entailment**, **endelige tilstandsmaskiner**, **coreference resolution**, **informasjonsgjenfinning/ordvekting (tf-idf-idé)**, **lingvistiske analysenivåer**. 1–2/7 hver.

### Fremtidsrettet tillegg (IKKE i arkivet — profiler mot etterfølger, men lavt prioritert)
14. **Ordvektorer/word embeddings, cosinuslikhet, nevrale nett/RNN/transformere, logistisk regresjon.** Fagbeskrivelsen nevner disse; INF1820/ML-AI-etterfølgeren vil vektlegge dem. Men **ingen av de 7 settene tester dem**. Gi et kort, konseptuelt oversiktskapittel for kontekst og fremtidssikring — ikke tunge regneoppgaver. **[verifiser mot nyere sett hvis de finnes]**

### Anbefalt arketype: **formell-hybrid med regnedel** (computasjonelt kjernefag, ikke drøftingsfag)
IN1140 skal modelleres som et **regne- og prosedyrefag à la matte-/logikkbøkene og in1000/tdt4171**, ikke som et humanistisk drøftingsfag:
- **«Regn/skriv/tegn»-delen (regex, CFG, n-gram, Naive Bayes) bygges som et regnefag:** teori → gjennomgått eksempel med *alle* mellomregninger → øvingsoppgaver med fasit. Disse har objektivt riktige svar og egner seg perfekt til quiz/flashcards/temaprøver med automatisk retting (regex-matching, telle n-grammer, klassifiser rolle/relasjon/ordklasse/BIO).
- **«Forklar-begrep»-delen bygges som presise, korte modellsvar** — 1–3 setninger som treffer sensors sjekkliste (definisjon + hvorfor + eksempel), speilet direkte på løsningsforslagenes poengfordeling.
- **Ekte fri drøfting trengs nesten ikke** (bare H2020s «flertydighet»-oppgave).

### Anbefalt bokdesign som følge av analysen
- **Del boka i to hoveddeler** slik settene er bygd: **(A) Tekst & formelle metoder** (regex → tokenisering → morfologi → n-gram-språkmodeller → Naive Bayes/klassifikasjon → evaluering) og **(B) Lingvistisk analyse** (ordklasser/POS → syntaks/CFG → leksikalsk semantikk → semantiske roller → komposisjonalitet/entailment → anvendelser: NER, coreference, dialog).
- **Egen «formell verktøykasse»-modul** som bygger de tre regne-/skriveferdighetene fra bunnen med gjennomregnede eksempler: (1) regex fra spesifikasjon, (2) utled/utvid CFG + rekursjon + konstituenttester, (3) n-gram- og Naive Bayes-sannsynlighet med glatting. Dette er der poengene og de systematiske feilene sitter.
- **Modellbesvarelser som peker på hvert poeng-element** (à la løsningsforslagenes «−2 for forvekslet w_i/w_{i-1}», «husk `<s></s>`», «vis brøken for hvert ord», «vis uavhengighetsantakelsen i formelen»). Vis full-pott vs. delvis-svar side om side.
- **Drill på gjengangermalene fra arkivet:** ordklasse-paring på hele setninger, «utled + utvid + er den rekursiv?»-grammatikk, konstituenttest-trioen, bigram-fra-minikorpus, add-1 Naive Bayes-klassifisering, BIO-NER på navnetett setning.
- **Begreps-/flashcardbank** modellert på klassifiserings- og forklar-begrep-oppgavene (leksikale relasjoner, semantiske roller, ordklasser, BIO, glatting, komposisjonalitet, evaluering) — treffer quiz-kravet på 500+ naturlig, og de fleste kan automatrettes.
- **Tospråklighet:** norsk brødtekst, engelsk fagterm alltid ved siden av (Jurafsky & Martin-pensum er på engelsk; settene bruker tospråklig terminologi).
- **Gjenbruk fra ling1100-boka** for semantiske roller / leksikale relasjoner / komposisjonalitet (nedskalert), og fra in1000/tdt4171 for den computasjonelle didaktikken (teori → gjennomgått eksempel → oppgave med fasit).

---

## 8. Kildeliste

Alle kilder er lest i sin helhet og **omskrevet — ingen ordrette gjengivelser** av oppgaveformuleringer eller løsningsforslag skal tas inn i læreboka. Arkiv: `~/Desktop/Eksamner/UiO/IN1140/`.

### Løsningsforslag med poengfordeling (kjernen i sensorkravene — 4 stk)
| Fil | Innhold |
|---|---|
| `losningsforslag/IN1140-H2017-losningsforslag.pdf` | Regex (MC + verbformer); ordklasser; strukturell flertydighet + CFG; homonymi/polysemi/hyponymi/meronymi; komposisjonalitet; semantiske roller; MLE; glatting/add-1; regelbasert vs. statistisk; lingvistiske nivåer; NER; språkmodell-def. + anvendelser |
| `losningsforslag/IN1140-H2019-prove-losningsforslag.pdf` | Regex MC; tokens/typer + telling; ordklasse-paring + taggertyper; CFG utled/utvid + kjønn; bigram-sannsynlighet steg-for-steg m/poengfordeling; leksikale relasjoner; semantiske roller; Bayes-utledning; entailment; NER BIO + trekk; **utfyllende Naive Bayes-sentiment med/uten glatting** |
| `losningsforslag/IN1140-H2021-losningsforslag.pdf` | Telefon-regex (MC + begrunn); postadresse-regex (skriv, norske tegn/linjeskift); tokenisering; bigram (8 bigram + sannsynligheter + setning); ordklasser; hvorfor leksikon feiler (flertydighet); CFG + rekursjon (direkte/indirekte); utvid; ugrammatiske; konstituentkriterier; leksikale relasjoner; semantiske roller; evaluering (precision/recall/F1, TP/FP/FN/TN, gullstandard, dialog) |
| `losningsforslag/IN1140-H2022-losningsforslag.pdf` | Regex (dato/gruppering/disjunksjon); ordklasse-paring + affikstyper; trigram-telling + Markov + bigram-produkt; syntaks (frasestrukturtrær, grammatikalitet, rekursjon m/def, konstituenttester); semantiske roller ×6; leksikale relasjoner; komposisjonalitet; veiledet læring; Naive Bayes (uavhengighet i formel); glatting; NER BIO; ordsemantikk/zeugma. Henviser til Jurafsky & Martin kap. 3 |

### Eksamensoppgaver (grundig lest: alle 7)
| Fil | Format | Innhold (stikkord) |
|---|---|---|
| `eksamen/IN1140-H2017.pdf` | 13 oppg., 4t, ingen hjelpemidler | regex ×2; ordklasser; CFG/flertydighet; leksikalsk semantikk; komposisjonalitet; semantiske roller; MLE; glatting; paradigmer; lingvistiske nivåer; NER; språkmodell |
| `eksamen/IN1140-H2017-konte.pdf` | 15 oppg. (konte jan-18), 4t | regex ×2; **endelige tilstandsmaskiner**; ordklasser; strukturell flertydighet (tell analyser) + tretegning + utvidelse; leksikale relasjoner; semantiske roller; NER; **informasjonsgjenfinning/ordvekting**; **intrinsisk/ekstrinsisk evaluering**; **WSD via Naive Bayes** (prior, trekk-sannsynlighet, formel-utledning) |
| `eksamen/IN1140-H2019-prove.pdf` | Prøveeksamen (13 tema), forelesning 13 | regex MC; tokens/typer; ordklasser + taggertyper; CFG; bigram; leksikale relasjoner; semantiske roller; Bayes; entailment; NER BIO; Naive Bayes-eksempel |
| `eksamen/IN1140-H2019.pdf` | 16 oppg., 4t | regex ×2 (ord + aritmetikk); tokens/typer; trigram + estimering; ordklasser + tagging; CFG + rekursjon + konstituenter + utvidelse; Naive Bayes; leksikale relasjoner; semantiske roller; NER; **dialogsystemer** |
| `eksamen/IN1140-H2020.pdf` | 12 oppg., 4,5t, **alle hjelpemidler** (korona) | regex (togbillett, kompleks); bøyning/orddanning; ordklassekriterier; grammatikk + syntaktisk tre + utvidelse ×2 (rekursiv NP, PP); **flertydighet på alle nivåer** (drøft); leksikale relasjoner; **Naive Bayes nn/nb (20 p)**; NER BIO + kategorier; **coreference resolution** |
| `eksamen/IN1140-H2021.pdf` | 13 oppg., 4t | telefon-regex; postadresse-regex; tokenisering; bigram; ordklasser + tagging; CFG + utvid + ugrammatiske + konstituentkriterier; leksikale relasjoner; semantiske roller; evaluering |
| `eksamen/IN1140-H2022.pdf` | ~19 delspm. (Inspera-typet), 4t | regex ×3 (dato/gruppering/disjunksjon, MC); ordklassetagging + orddannelse/affiks (paring); trigram/Markov/bigram; syntaks ×4 (trær/håndtegning, grammatikalitet, rekursjon, konstituenter); semantiske roller ×6 (flervalg) + leksikale relasjoner + komposisjonalitet; ML/NB ×3 (veiledet læring, NB, glatting); NER + ordsemantikk/zeugma |

### Hull i arkivet / forbehold om evidens
- **Bare høsteksamener** (emnet ble gitt om høsten). Manglende år: 2018 ordinær (kun konte foreligger), 2023, 2024, 2025.
- **Fire løsningsforslag foreligger** (H2017, H2019-prøve, H2021, H2022) — uvanlig godt belagt for sensorkrav. H2019-ordinær, H2020 og H2017-konte mangler fasit; utsagn om disse hviler på oppgaveteksten + mønster fra de fire med løsning.
- **Ingen dokumenterte karaktergrenser** (A–F). Poengfordeling per oppgave er derimot eksplisitt i løsningene.
- **Pensumbok ikke fullt dokumentert per år**, men H2022-løsningen henviser eksplisitt til Jurafsky & Martin *Speech and Language Processing* kap. 3. Innholdet svarer til den klassiske, før-nevrale kjernen av denne boka.
- **Statusforbehold:** emnet er nedlagt (verifisert 2026-07-08). Boka kalibreres mot disse settene fordi eksamen lever t.o.m. 2027 og temaprofilen er stabil; embeddings/nevrale nett er *ikke* i arkivet og skal bare gis et lett, fremtidsrettet konseptkapittel. **[verifiser hvis nyere sett med moderne NLP dukker opp]**
