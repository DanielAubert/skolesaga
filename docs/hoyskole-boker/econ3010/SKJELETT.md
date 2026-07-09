# Bokskjelett: ECON3010 Anvendt økonomisk analyse — eksamensrettet lærebok

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
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (7 ordinære sett V2018–V2025, 6 ordinære sensorveiledninger, 3 utsatt-sett og
> 3 utsatt-sensorveiledninger). Arketype: **DRØFTING** (`DNA-drofting.md` som
> primærmal), med figur-i-ord-sjangeren lånt fra `econ1220/SKJELETT.md`
> (velferd/politikk-drøfting med kvalitativ verktøykasse) og `econ1410/SKJELETT.md`
> (handelsdelen — komparative fortrinn, toll, Heckscher-Ohlin). Arketypevalget er
> begrunnet i §1. Alle mønstereksempler i skjelettet er omskrivninger; forfatteren
> skal variere dem videre, aldri kopiere inn ordrett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `econ3010` |
| Tittel | **ECON3010 Anvendt økonomisk analyse** |
| Level | `'Høyskole'` |
| Institusjon | Universitetet i Oslo (UiO) |
| Arketype | **Drøfting** (verbal politikkdrøfting med kvalitativ figurstøtte — IKKE regnefag, INGEN tallregning) |
| Antall kapitler | **32** (3 eksamenskart/håndverk/verktøykasse + 24 tema/beredskap + 5 eksamenstrening) |
| Estimert totaltid | **≈ 2 260 min ≈ 37,7 timer** |
| Quiz totalt | **528** (krav ≥500) |
| Flashcards totalt | **614** (sikt 550–650) |

**Pitch (ett avsnitt):** ECON3010 er et avsluttende bachelor-emne der eksamen fra
og med V2025 er en **3-timers skriftlig skoleeksamen med to obligatoriske oppgaver
med ulik vekt** (V2025: 70 % / 30 %), karakter A–F med eksplisitt C-terskel, alle
hjelpemidler tillatt unntatt AI. Det finnes **ikke ett tallsvar i hele arkivet** —
besvarelsen er en selvstendig, avgrenset samfunnsøkonomisk fagtekst der
vanskeligheten ligger i **avgrensning og anvendelse**, ikke utregning. Emnet hviler
på én kjerneinnsikt som går igjen i praktisk talt hver oppgave og er bokas røde
tråd: **priser skal reflektere reelle samfunnsøkonomiske marginalkostnader og
fungere som signaler, og fordelingsproblemer skal løses med *separate*
omfordelingsverktøy (skatt/overføringer) — ikke ved å vri prisene.** Denne setningen
— i ulike innpakninger — er svarnøkkelen på klima-, strøm-, landbruks-, bolig-,
eksport- og tolloppgavene. Boka bygger tyngden rundt kursets fire signaturtemaer:
**klima-/karbonprising vs. grønne subsidier** (5/7 sett — kursets ryggrad),
**prisenes signalfunksjon** (7/7 — underliggende i alt), **internasjonal handel og
handelspolitikk** (kraftig stigende — hele 70 %-oppgaven i V2025) og
**næringsstøtte/næringsnøytralitet** (4/7 — toppkarakter-differensiatoren). Den
bruker **ingen algebra og ingen tall**: et presist *verbalt* resonnement er
fullgodt, figurer gir bare **pluss**. De faste kvalitative verktøyene (partiell
markedsmodell, badekarsdiagram, produksjonsmulighetskurve, gevinst-ved-handel-figur)
læres som **figur-i-ord** — som *støtte* for drøftingen, aldri som regneøvelse.
Emnets viktigste enkeltferdighet er å **gjenkjenne hvilket standardgrep en ny,
dagsaktuell case kler på seg** («bør bransje X få unntak» = alternativkostnad +
næringsnøytralitet; «subsidier grønt» = eksternalitets-skillet; «begrens eksport /
subsidier strøm» = prisens alternativverdi + omfordeling framfor prisvridning; «legg
toll» = frihandelsgevinst + pristaker vs. kjøpermakt). Det er nettopp det boka
driller.

### Arketypevalg (dokumentert avvik fra en ren DNA-mal)

Analysen er entydig: ECON3010 er **ikke et regnefag**. Det er et **drøftingsfag**
der sensuren legger «avgjørende vekt på om kandidaten bruker samfunnsøkonomisk teori
og innsikt til å *belyse* problemstillingen, og evner å framstille økonomiske
resonnementer klart og presist». Derfor:

- **Primærmal: `DNA-drofting.md`.** Kapittel-DNA-et derfra styrer (Eksamensvinkel →
  Temaet i fagets landskap → Kjernebegreper MED pensumforankring → Posisjoner og
  spenninger → Anvendelse på case → Typiske feil → oppgaver med momentliste/
  disposisjon → Pensumkart). Sensor belønner **anvendelse** (ikke referering),
  **selvstendig avgrensning** og **refleksjon om forutsetninger**.
- **Lånt element: figur-i-ord-sjangeren fra `econ1220`/`econ1410`.** Flere
  kjernetemaer (klima-marked, toll, badekarsdiagram, produksjonsmulighetskurve)
  *er* grafiske, men figurene beskrives i ord og forklares verbalt, aldri regnes ut.
  **Kritisk forskjell fra econ1410:** der er figuren obligatorisk og gir minuspoeng
  om den mangler; i ECON3010 er **verbalt fullgodt og figur gir bare pluss.** Boka
  legger derfor inn figur-i-ord som **valgfri støtte**, aldri som krav.
- **Lånt element: drillkapitler for de tyngste sjangrene** (klima, næringsstøtte,
  handel, fordeling) inne i sin egen temadel (regnefag-grepet fra econ1220), fordi
  de er høyfrekvente gjengangere som må drilles rett etter teorien. Del 7 beholder
  begrepsdrill, modellbesvarelse og øvingseksamener.
- **Ingen pensumforankrings-tvang som i rene essayfag.** DNA-drofting krever navngitt
  forfatterforankring per begrep. I ECON3010 er forankringen **lettere** —
  sammenhengene er faglige fakta uten avsender (marginalkostnad, alternativkostnad),
  og forankringen skjer mot **modell-tradisjoner og NOU-er/forelesninger** (Grønn
  skattekommisjon, Heckscher-Ohlin, Hoel om brun/grønn energi), ikke mot sitater.
  Se pensumankere under.

### Kritisk sjangerregel: SVARNØKKELEN (gjelder HELE boka — bokas røde tråd)

Én innsikt er svaret på nesten alle oppgaver og skal drilles eksplisitt i hvert
relevant kapittel (settes som `tip`-markør «Svarnøkkelen» der den brukes):

> **Priser skal reflektere reelle samfunnsøkonomiske marginalkostnader og fungere
> som signaler. Fordelingsproblemer løses med SEPARATE omfordelingsverktøy
> (skatt/overføringer), ikke ved å vri prisene.**

Operasjonalisering per temadel (dette er selve den røde tråden):
- **Klima (Del 2):** avgift på «brunt» setter riktig pris på skaden → riktige
  relative priser på *alle* alternativer; subsidie av «grønt» vrir prisene feil. Er
  fordelingen et problem (avgiften rammer lavinntekt), kompenser med *overføringer*,
  ikke ved å la være å prise utslippet.
- **Strøm/energi (Del 1.4):** kraftprisen skal reflektere **alternativverdien**
  (europeisk markedspris); subsidiert/eksportbegrenset strøm gir feil signaler.
  Rammer høye priser husholdninger? Bruk **målrettet kontantutbetaling**, ikke
  prissubsidie som ødelegger signalet.
- **Næringsstøtte (Del 3):** en subsidie senker bedriftens *private* kostnad, men
  ressursenes **alternativkostnad er uendret** → prisen skal si sannheten om hva
  ressursene er verdt i beste alternative anvendelse.
- **Handel (Del 4):** toll vrir innenlandsprisen bort fra verdensmarkedsprisen →
  netto tap ved pristaking. Taper noen på frihandel? Kompenser dem gjennom
  inntektssikring, ikke ved å skru opp prisene med toll.
- **Fordeling/skatt (Del 5):** omfordeling er det *separate* verktøyet svarnøkkelen
  peker på. Effektiv beskatning skal hente inn omfordelingsmidler med minst mulig
  prisvridning (brede grunnlag, grunnrente, lav elastisitet).

### Kritisk sensorregel: «BELYSE, IKKE BELÆRE» (gjelder HELE boka)

Sensors gjennomgående mantra (Nyborgs forelesning om akademisk fagtekst). Alt som
skrives skal være **relevant, korrekt, presist og veldokumentert**, og kandidaten
skal *anvende* teori på den konkrete saken — ikke gjengi lærebok. Boka innarbeider
en fast **«Belyse, ikke belære»-mal** i hvert temakapittel og hver drill (settes som
`tip`): 

1. **Avgrens selv:** tolk spørsmålet, definer og *avgrens* problemstillingen, velg
   modell/forutsetninger og *begrunn* valget (sensor gir eksplisitt pluss for dette).
2. **Anvend, ikke referer:** hent bare de innsiktene saken trenger, og bruk dem
   *på casen* — ikke ramse opp modellen.
3. **Vis begge sider og konkluder avgrenset:** drøft noen forslag grundigere enn
   andre, uten momentliste; konkluder på det spørsmålet faktisk stiller.
4. **Reflekter om forutsetninger:** hva hviler svaret på, og hva ville endret det?

### Kritisk regel: INGEN REGNING (gjelder HELE boka)

Det finnes **ikke ett tallsvar i hele eksamensarkivet.** To konsekvenser boka skal
innarbeide overalt:

1. **Ingen tallregning, ingen algebra, ingen «to streker under».** Ingen derivasjon,
   ingen optimeringsformler, ingen utregnede likevektspriser, ingen tallfestede
   overskuddsarealer, ingen komparative-fortrinn-tallcase *med utregnet svar.* Der
   et talleksempel nevnes (f.eks. komparative fortrinn), brukes det bare til å
   *illustrere logikken verbalt* — poenget er rangeringen og mekanismen, aldri et
   fasittall. All analyse er verbal og geometrisk.
2. **Figur = valgfri støtte, verbalt = fullgodt.** Der figur brukes, skal den ha
   (i) en **figurbeskrivelse i ord** (akser, kurver, punkter, skift, arealer
   navngitt) og (ii) den **verbale mekanismen** — men et rent verbalt svar uten
   figur skal aldri fremstilles som mangelfullt. Figuren *skjerper* analysen og gir
   pluss; den er ikke et krav.

### Kritisk ferdighet: AVGRENSNINGSTRENING (gjelder HELE boka)

Emnets vanskelighet ligger i avgrensning. Hvert temakapittel har en
**avgrensningstrening** (settes som `warning`/`tip`): gitt en vid, dagsaktuell
problemstilling, hva skal *inn* og hva skal *holdes ute*? Faste avgrensningsgrep:
- **Skill mikro fra makro.** Sensor advarer eksplisitt mot å trekke makroeffekter
  inn i en mikrooppgave («ligger utenfor oppgaven») — og omvendt. Handels-/
  driftsbalanse brukes *lett* kun i eksportoppgaven.
- **Drøft formålet før virkemiddelet.** På utrednings-oppgaver: start med «er økt
  eksport / dette målet i seg selv fornuftig?» før virkemiddelet analyseres.
- **Ikke godta premisset ukritisk.** «CO₂-prising bør vente til grønt er lønnsomt»
  eller «lavere lønnsomhet pga. prisøkning utløser støtte» skal *problematiseres*,
  ikke aksepteres.

### Kritisk differensiator-regel (A/B-markørene sensor bruker)

**C-terskelen** er å forklare *hvorfor* et forslag ikke er effektivt / vise
grunnleggende forståelse for prisenes rolle (ryddig struktur er *ikke* nødvendig for
C). **Toppkarakter (A/B)** kjennetegnes av åtte andreordens-poeng boka skal drille
eksplisitt (settes som `tip`/`warning` i sine kapitler):

1. **Skillet subsidie MED vs. UTEN positive eksterne effekter** — anvendt konsekvent
   (den vanligste faglige feilen i klimaoppgavene) → kap. 2.3.
2. **Elbil-feilargumentet:** å subsidiere det grønne gjør det billigere også mot
   å gå/sykle/reise mindre → vrir *alle* valg feil; riktig grep er avgift på det som
   skader → kap. 2.3.
3. **Gratiskvote-nyansen:** gratis tildeling svekker **ikke** kostnadseffektiviteten
   (alternativkostnaden ved å bruke en kvote = kvoteprisen uansett) → bare
   fordelingen endres → kap. 2.2.
4. **Alternativkostnad mot næringsstøtte:** subsidie endrer ikke ressursenes
   alternativkostnad — sensor kaller dette eksplisitt vanskelig og bruker det som
   differensiator → kap. 3.1.
5. **Prisens alternativverdi:** subsidiert/eksportbegrenset strøm reflekterer ikke
   kraftens verdi på det europeiske markedet → kap. 1.4.
6. **Fordeling løses separat, ikke med prisvridning** (svarnøkkelen), + at
   **Engel-elastisitet < 1** gjør flat prissubsidie regressiv i kroneandel og at
   kontantutbetaling skjermer lavinntekt bedre → kap. 1.3, 5.3.
7. **Toll:** konsentrerte gevinster / spredte tap forklarer tollobbyen; **optimal
   toll kun ved kjøpermakt**, netto tap ved pristaking → kap. 4.2, 4.3.
8. **Inntektssikring ≠ behovsprøvd ≠ universell;** borgerlønn gir *ikke*
   inntektssikring (forsikringsfunksjonen) → kap. 5.1.

### Kritisk notasjons-/begrepsregel (gjelder HELE boka)

Emnet har **lite fast notasjon** (ingen tallregning). De eneste symbolene, alle
brukt kvalitativt i figurbeskrivelser:
- **Marked/priser:** MK = privat marginalkostnad, SMK = samfunnsøkonomisk
  marginalkostnad, MSK = marginal skadekostnad, BV = betalingsvillighet, p = pris/
  avgift/kvotepris, KO/PO/SO = konsument-/produsent-/samfunnsoverskudd.
- **Klima:** MAC = marginal rensekostnad (marginal abatement cost), K = kvotetak.
- **Toll (figur-i-ord):** areal-bokstaver a/b/c/d — b + d = netto effektivitetstap
  ved pristaking, c = tollinntekt (tatt fra kjøperne); ved kjøpermakt kan gevinsten
  fra bedret bytteforhold (e) overstige b + d → optimal toll.
- **Beskatning:** badekarsdiagram med marginalavkastningskurver for to sektorer.
- Norsk bokmål; engelsk fagterm i parentes ved første forekomst (cream-skimming,
  moral hazard, marginal abatement cost). LaTeX (`$...$`) kun der det er smertefritt
  (nesten aldri — og aldri som utregning).

### Forbudte termer / mønstre (grep-liste for fase 6-verifisering — null treff)

- **Utregnede tallsvar / «to streker under» / algebraisk optimering / derivasjon**
  som løsningsmetode; tallfestede likevekter, priser, overskuddsarealer eller
  komparative-fortrinn-svar. (Kvalitative talleksempler *uten* utregnet fasit er ok.)
- **Avansert spillteori / mekanismedesign / auksjoner** som pensum — til tross for
  at «anvendt analyse» kunne antydet det, testes dette *aldri*; nevnes på sin høyde
  som kort «bør kjenne til».
- **Tung makromodellering** (IS-LM, Mundell-Fleming, formelle multiplikatorer) som
  kjernestoff — kun corona-beredskap på begrepsnivå (Del 6.3).
- **Kildeapparat/siteringskrav/referanselistekrav/ordgrenser** (2000–4000 ord) —
  utgått med skoleeksamensformatet fra V2025 og skal ikke tynge boka.

### Kryssbok-lenker og forkunnskaper (leserkrav — VIKTIG statushåndtering)

ECON3010 *anvender* mikroverktøy fra tidligere kurs. Statusregler (README: «lenk kun
til kapitler som finnes»):

- **ECON1210 Mikroøkonomi 1 er IKKE bygget** (status «skjelett»). Forkunnskaps-
  referanser til ECON1210 skrives som **KLARTEKST** med kapittel-id for senere
  aktivering — **ikke** som live lenke. Format: *«Dette bygger på markedslikevekten
  fra ECON1210 Mikroøkonomi 1 (kap. 1.3, `econ1210-1-3` — aktiveres som lenke når
  boka er publisert).»* Fase 6 gjør klartekst → live lenke når ECON1210 er live.
- **ECON1310 Makroøkonomi I er BYGGET (live).** Driftsbalanse-/handelsbalanse-
  referansen i Del 4.4 kan lenkes: `[ECON1310 Makroøkonomi I](/bok/econ1310/econ1310-0-1)`
  (eksamenskart-kapitlet er verifisert eksisterende anker); den *spesifikke*
  driftsbalanse-kapittel-id-en markeres `(verifiser id)` til fase 6.
- **ECON2610 (mikro/handel) finnes IKKE som bok i systemet.** Refereres kun som
  **pensumkilde** (Krugman, Obstfeld & Melitz) i klartekst, uten lenke.

| Forkunnskap | ECON1210-kapittel | id (klartekst, for aktivering) |
|---|---|---|
| Markedslikevekt, tilbud/etterspørsel | 1.3 | `econ1210-1-3` |
| KO/PO/SO-geometrien, effektivitetstap | 2.1–2.2 | `econ1210-2-1`, `econ1210-2-2` |
| Stykkavgift/-subsidie, dødvektstap | 3.1–3.2 | `econ1210-3-1`, `econ1210-3-2` |
| Maksimalpris/minstepris | 3.3 | `econ1210-3-3` |
| Eksterne virkninger, Pigou-avgift | 4.1 | `econ1210-4-1` |
| Karbonprising, omsettelige kvoter | 4.2 | `econ1210-4-2` |
| Markedssvikt-katalogen, kollektive goder | 4.3 | `econ1210-4-3` |
| Konsumentteori, priselastisitet | 7.1 | `econ1210-7-1` |

### Pensumankere (marker `(verifiser)` mot gjeldende pensumliste før publisering)

Forankring gir uttelling, men referansene er utgave-sensitive. **Ingen oppdiktede
referanser** — kun kildene under; refererte synspunkter tilskrives riktig, **direkte
sitater unngås** (opphavsrett):
- **ECON1210** (mikro): partiell markedsmodell, avgifter/subsidier, karbonprising,
  Grønn skattekommisjons prinsippkapittel.
- **ECON2610 / Krugman, Obstfeld & Melitz**, *International Economics*: komparative
  fortrinn, produksjonsmulighetskurve, optimal toll, Heckscher-Ohlin, handel under
  markedsmakt. `(verifiser)` utgave.
- **NOU 2015:15 (Grønn skattekommisjon)** — de tre kriteriene (styringseffektivitet,
  kostnadseffektivitet, forurenser betaler). `(verifiser)`.
- **NOU 2019:18 / NOU 2019:11 (skatt), NOU 2014:13 (kapital/bolig), NOU 2017:6
  (fattigdom)** — effektiv beskatning, boligbeskatning, fordeling. `(verifiser)`.
- **Emnespesifikke forelesninger/notater:** Nyborg (akademisk fagtekst, «belyse ikke
  belære»), Hoel (brun vs. grønn energi), von der Fehr (kraftmarkedet), FinDep/DFØ
  (god samfunnsøkonomisk utredning), Mehlum & Torvik (corona-modellen). `(verifiser)`.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (svarnøkkel/fundament før anvendelse);
frekvensen styrer *omfanget*. `sectionNames` = kolonne 2.

| Del | Seksjonstittel (`sectionNames`) | Kap. | Prioritet | Begrunnelse (frekvens → omfang) |
|---|---|---|---|---|
| 0 | Eksamenskart, drøftingshåndverk og figurverktøykasse | 3 | meta | Prioriterings-, skrive- og verktøygrunnlaget; kjerne i studieguiden. Eksamenskart + drøftings-/avgrensningshåndverk + kvalitativ figurverktøykasse (partiell marked, badekar, PMK, toll-figur som figur-i-ord). |
| 1 | Prisenes signalfunksjon og effektiv allokering | 4 | **PERFEKT (fundamentet)** | Signalfunksjon 7/7 (underliggende i ALT) + svarnøkkelen + strøm/energi 1/7 (+2 utsatt) som flaggskip-anvendelse → 3 fundament + 1 anvendelseskapittel. |
| 2 | Klima- og karbonprising vs. grønne subsidier | 5 | **PERFEKT (ryggraden — STØRST)** | **5/7 = 71 %, kursets signatur.** Eksternalitet + karbonprising-mekanikk + subsidie-skillet (A/B) + tre kriterier + drill → bokas største del. |
| 3 | Næringsstøtte, næringsnøytralitet og alternativkostnad | 3 | **PERFEKT** | 4/7 = 57 %; toppkarakter-differensiatoren (alternativkostnad) → 2 teori + drill. |
| 4 | Internasjonal handel og handelspolitikk | 5 | **PERFEKT (stigende)** | 3/7 ordinært men **hele 70 %-oppgaven i V2025** + 2 utsatt; trolig fast oppgavetype → frihandelsgevinst + toll pristaker + optimal toll/HO + eksport-som-mål + drill. |
| 5 | Fordeling, omfordeling og effektiv beskatning | 4 | KUNNE (bærer hele oppgaver) | Fordeling/velferd 3/7 + effektiv beskatning 2/7; svarnøkkelens «separate omfordelingsverktøy» → inntektssikring/borgerlønn + effektiv skatt + bolig/kompensasjon + drill. |
| 6 | Markedssvikt, nest-best og krisepolitikk | 3 | KJENNE (beredskap) | Markedssvikt-rammeverk (kobler alt) + nest-best/knapp kapasitet (utsatt-favoritt) + makro/krise (kun kriseår) → 3 kompakte kjenne-kapitler. |
| 7 | Eksamenstrening | 5 | — | Begrepsdrill + modellbesvarelse (A vs. C) + 3 øvingseksamener i skoleeksamensform (to oppgaver 70/30). |

**Avvik fra DNA-drofting-malen (dokumentert):**
1. **Drillkapitler i temadelene** (kap. 2.5, 3.3, 4.5, 5.4) i stedet for kun i
   siste del — de fire tyngste sjangrene (klima, næringsstøtte, handel, fordeling)
   er høyfrekvente og må drilles rett etter teorien (regnefag-grepet fra econ1220).
2. **Figur-i-ord som VALGFRI STØTTE** (ikke krav) der temaet er grafisk — lånt fra
   econ1220/econ1410, men nedtonet fordi ECON3010 honorerer verbalt fullt ut.
3. **Ingen pensumforfatter-tvang per begrep** (jf. §1) — forankringen skjer mot
   modell-tradisjoner/NOU-er/forelesninger, ikke sitater, i tråd med at faget er
   anvendt mikro uten tolkningsåpne begreper.
4. **Makro/mekanismedesign/auksjoner bevisst nedprioritert** (Del 6.3 / kort «bør
   kjenne») tross emnebeskrivelsens «anvendt analyse»-lokkeord — analysen viser at
   de testes *aldri* (makro kun corona-året).
5. **Modellbesvarelse-kravet (≥3):** dekkes av kap. 7.2 (dedikert A-vs.-C på klima-
   signaturoppgaven) **pluss** de 3 øvingseksamenene (7.3–7.5), som hver har full
   A-besvarelse og en kommentert C-besvarelse på 70 %-oppgaven.

---

## 3. Kapitler

Feltene følger DNA-drofting-ens skjelett-krav (id/nummer/tid/prerequisites,
Eksamensbelegg, Begreps-/innholdskontrakt med pensumforankring, Drøftingsakser/
figurbeskrivelser, Case-forslag, Typiske feil, kvote), supplert med figur-i-ord der
temaet er grafisk. Sjangerbokstavene (A–H) refererer til oppgavetype-katalogen som
gjengis i Del 0 (fra analysen §3): **A** klimapolitikk (karbonprising vs. subsidier)
— kjernesjangeren, **B** internasjonal handel og handelspolitikk, **C** effektiv
beskatning og skatteletter, **D** fordeling/velferd/inntektssikring, **E**
næringsstøtte og næringsnøytralitet, **F** energi-/strømmarked, **G** makro-/
krisepolitikk, **H** prising av knapp kapasitet/nest-best. Prioritetsklasser:
**perfekt** / **kunne** / **kjenne**.

---

### Del 0 — Eksamenskart, drøftingshåndverk og figurverktøykasse

#### Kapittel 0.1: Eksamenskartet: slik testes ECON3010

- **id:** `econ3010-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, formatskiftet til skoleeksamen, temafrekvensene, sensorlinja og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle 7 ordinære + 3 utsatt sett. Skal gjengi: (i) **formatskiftet**: essay/hjemme-eksamen 2018–2023 → overgangssett V2024 (én obligatorisk oppgave) → fra **V2025: 3-timers skriftlig skoleeksamen, to obligatoriske oppgaver med ulik vekt (V2025: 70/30), karakter A–F, alle hjelpemidler unntatt AI, svar på norsk/skandinavisk/engelsk**; det gamle kildekravet (2000–4000 ord, referanseliste) er utgått; (ii) at sensors *faglige* forventninger er **identiske** på tvers av begge formater — boka skriver løsningsforslag mot det nye, kortere, verbale formatet; (iii) temafrekvens-tabellen: **prisenes signalfunksjon 100 % (7/7, underliggende i alt)**, klima/karbonprising vs. subsidier **71 % (5/7 — ryggraden)**, næringsstøtte/næringsnøytralitet 57 % (4/7), internasjonal handel 43 % ordinært men **sterkt stigende (70 %-oppgaven i V2025)**, fordeling/velferd 43 % (3/7), effektiv beskatning 29 % (2/7), energi/strøm 14 % (+2 utsatt), makro **kun corona-året**, nest-best **kun utsatt**; (iv) **INGEN REGNING** — ikke ett tallsvar i arkivet; verbalt fullgodt, figur gir bare pluss; (v) sensorlinja (uendret alle år): avgjørende vekt på å *bruke* teori til å *belyse* problemstillingen og framstille resonnementer klart; problemstillingene er «langt åpnere enn i andre kurs» → kandidaten må selv finne relevant teori og **avgrense** («en svært krevende øvelse på bachelornivå»); (vi) **C-terskelen** (forstå *hvorfor* et forslag ikke er effektivt) vs. A/B (ryddig, avgrenset, selvstendig, andreordens-poeng); (vii) svarnøkkelen og de åtte A/B-differensiatorene fra §1.
- **Innholdskontrakt:** Oppgavetype-katalogen A–H presenteres som studentens sjekkliste med typisk rolle: A klima (bi- eller hovedoppgave, ofte «offentlig utredning» à la V2025-2), B handel (hovedoppgave-kandidat, opptil 70 %), C effektiv beskatning (del av fordelings-/effektivitetsoppgave), D fordeling (hel oppgave når den kommer), E næringsstøtte (del av eller egen oppgave, «hva sier du som samfunnsøkonom?»), F strøm (aktuell innramming), G makro (kun kriseår), H nest-best (utsatt-favoritt). **Prognose for neste sett (to oppgaver, ulik vekt):** mest sannsynlig hovedoppgave (50–70 %) = internasjonal handel/handelspolitikk *eller* anvendt mikro-fordelings-/effektivitetsoppgave (strøm/skatt/fordeling); mest sannsynlig biooppgave (30 %) = klimapolitikk/karbonprising. Aktualitetsberedskap: settene oversetter alltid dagens nyhetsbilde (strømkrise, karbonpriser, tollkrig, CO₂-kompensasjon) til den samme mikroverktøykassen — nøkkelferdigheten er å kjenne igjen *hvilket* standardgrep casen kler på seg. Leseplan: Del 1–4 «må perfekt», Del 5 «må kunne», Del 6 «bør kjenne».
- **Oppgavesjangre:** Ingen faglige oppgaver; 3–4 refleksjonsoppgaver av typen «gitt to oppgaver vektet 70/30 og 180 minutter — sett opp et tidsbudsjett» og «gitt denne dagsaktuelle overskriften — hvilket standardgrep A–H kler den?».
- **Typiske feil:** Metafeilene: regne/algebraisere der verbalt kreves; skrive momentliste i stedet for avgrensa analyse; belære (gjengi lærebok) i stedet for å belyse (anvende); bruke like mye tid på 70 %- og 30 %-oppgaven; dra inn kildeapparat/ordtelling som ikke lenger kreves.
- **Quiz: 10 · Flashcards: 10**

#### Kapittel 0.2: Drøftingshåndverket: fra vid problemstilling til avgrenset fagtekst

- **id:** `econ3010-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `econ3010-0-1`
- **Kapitteltype:** drøftings-/avgrensningshåndverk
- **description:** Hvordan en avgrenset drøftingsbesvarelse bygges: presiser og avgrens → anvend teori aktivt → drøft begge sider → reflekter om forutsetninger → konkluder på spørsmålet.
- **Eksamensbelegg:** Bygger på sensorreglene på tvers av alle veiledninger (§4 i analysen). Skal lære: (i) **«belyse, ikke belære»-malen** (fire trinn fra §1); (ii) **avgrensning som ferdighet** — sensor gir eksplisitt pluss for refleksjon rundt avgrensning og modell-/forutsetningsvalg; skill mikro fra makro; drøft formålet før virkemiddelet; ikke godta premisset ukritisk; (iii) **oversettelsen**: dagsaktuell overskrift (strømstøtte, elbilsubsidie, importtoll, borgerlønn, CO₂-kompensasjon) → hvilket standardgrep A–H; (iv) **anvend-ikke-referer**: hent bare de innsiktene saken trenger; (v) hva som skiller **A/C/E** ifølge veiledningene (C = forstå *hvorfor* ikke effektivt; A = ryddig, avgrenset, selvstendig, andreordens-poeng).
- **Innholdskontrakt (håndverket):** Fire trinn demonstrert på et gjennomgående mini-case (f.eks. «bør staten subsidiere varmepumper?»): 1) **presiser og avgrens** (hva spør oppgaven om, hva holdes ute, hvilken modell); 2) **anvend** relevant teori på casen (eksternalitet? alternativkostnad? signalfunksjon?); 3) **drøft begge sider** med den svakere siden ærlig fremstilt; 4) **reflekter om forutsetninger** og **konkluder** på spørsmålet. Egen boks **«C→A-løftet»**: hva som løfter et korrekt, men flatt svar (gjengivelse uten anvendelse, ingen avgrensning) opp til A (avgrensning + andreordens-poeng + begge sider + refleksjon). Egen boks **«Svarnøkkelen som standardgrep»**: hvordan pris-signal-vs-separat-omfordeling brukes på tvers av temaene.
- **Case-forslag:** Ett kort oppdrag om elbilsubsidie som gjennomgås trinn for trinn (peker fram til Del 2); ett om strømstøtte (peker til Del 1.4/5.3).
- **Typiske feil:** Momentliste på vid problemstilling (feilkatalog #1); belære i stedet for å belyse (#3); dra makro inn i mikrooppgave (#2); bruke fordelingshensyn som argument *mot* riktig prising i stedet for å foreslå separat omfordeling (#5, svarnøkkelbruddet); godta premisset ukritisk (#6); la empiri stå løsrevet (#9).
- **Quiz: 10 · Flashcards: 10**

#### Kapittel 0.3: Den kvalitative figurverktøykassen (figur-i-ord)

- **id:** `econ3010-0-3` · **number:** 0.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ3010-0-2`
- **Kapitteltype:** verktøykasse (figur-i-ord)
- **description:** De fire faste kvalitative figurene — partiell markedsmodell, badekarsdiagram, produksjonsmulighetskurve og gevinst-ved-handel/toll-figur — beskrevet i ord, som valgfri støtte for verbal drøfting.
- **Eksamensbelegg:** Metakapittel — samler verktøyene analysen (§6) sier «må beherskes» (tegnes/forklares) og «må forstås kvalitativt». **Kritisk:** figurene er **støtte, ikke krav** — verbalt er fullgodt, figur gir pluss. Skal gjøre studenten i stand til å *velge riktig figur til en ny case* (analysen §7 nivå 3: verktøytrening).
- **Innholdskontrakt (fire figurer i ord):** 1) **Partiell markedsmodell:** E-/T-kurve (etterspørsel/tilbud), likevekt, virkning av avgift (T skifter opp → pris opp, mengde ned, hvem tjener/taper, samfunnsøkonomisk tap som areal) og subsidie (motsatt); ved eksternalitet: SMK-kurven over privat MK, uregulert marked omsetter for mye. Brukes på strøm, toll, «brun/grønn»-marked. 2) **Badekarsdiagram:** to sektorer/goder med marginalavkastningskurver mot hverandre; ulik skatt/pris → for mye ressurser trekkes til det lavt beskattede (marginalavkastningen der blir høyere) → effektivitetstap. Standardfigur for skatteletter, differensiert utslippspris, allokering skjermet/konkurranseutsatt. 3) **Produksjonsmulighetskurve (PMK):** land som handler på verdensmarkedet; komparative fortrinn; bytteforhold; hvordan handel løfter konsummulighetene. 4) **Gevinst-ved-handel/toll-figur:** konsument-/produsentoverskudd i ett importmarked; toll løfter innenlandspris → PO opp, KO ned mer, tollinntekt c, netto tap b + d ved pristaking; ved kjøpermakt kan bytteforholdsgevinst e overstige b + d. For hver figur: **merkekrav** (akser, kurver, punkter, skift, arealer navngitt) + **verbal mekanisme** + **når velges den**. Egen `warning`: **aldri regn ut arealene — navngi dem og forklar retningen**.
- **Oppgavesjangre:** Ingen faglige oppgaver; 4–6 «hvilken figur passer denne casen, og hva ville den vist?»-øvelser (uten utregning).
- **Typiske feil:** Tegne figur uten å forklare mekanismen (halvt svar); regne ut arealer/priser (finnes ikke i faget); velge feil figur til casen; behandle figur som obligatorisk (det er verbalt ikke).
- **Quiz: 12 · Flashcards: 14**

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Prisenes signalfunksjon og effektiv allokering *(prioritet: PERFEKT — fundamentet)*

#### Kapittel 1.1: Prisenes signalfunksjon: pris = marginal samfunnsøkonomisk kostnad

- **id:** `econ3010-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ3010-0-3` (+ ECON1210 kap. 1.3/2.1, klartekst)
- **Kapitteltype:** teori (drøfting + figur-i-ord som støtte)
- **description:** Kjerneinnsikten hele emnet hviler på: i et velfungerende marked er prisen lik marginal betalingsvillighet OG marginal kostnad, og fungerer som et signal som styrer ressursene dit de kaster mest av seg.
- **Eksamensbelegg:** **Signalfunksjonen er underliggende i 7/7 sett** — sensors klart foretrukne linje og fundamentet under nesten alle oppgaver. Testes sjelden alene, men *anvendes* overalt. Prioritet: **perfekt** (fundamentet resten hviler på).
- **Begrepskontrakt (m/pensumforankring):** **Marginal betalingsvillighet** (høyden på etterspørselskurven — hva den neste enheten er verdt for kjøperen), **marginalkostnad** (hva den neste enheten koster å produsere), **effektiv allokering** (produksjon der marginal BV = marginal kostnad → samfunnsoverskuddet maksimeres), **prisen som signal og som insentiv** (en riktig pris får aktørene til å ta samfunnsøkonomisk riktige valg av seg selv). ECON1210 partiell markedsmodell (`econ1210-1-3`, klartekst) `(verifiser)`.
- **Drøftingsakser + figur-i-ord (støtte):** (i) hvorfor markedslikevekten uten svikt gir riktig mengde — figur: E krysser T i likevekt, SO = arealet mellom kurvene, maksimert; (ii) **hva en «riktig pris» betyr**: den forteller sannheten om både verdi (BV) og knapphet (MK) → signaliserer til alle aktører samtidig; (iii) **når prisen lyver** (eksternalitet, subsidie, priskontroll, markedsmakt) trekkes ressursene feil — dette er bruene til Del 2 (klima), Del 3 (næringsstøtte), Del 4 (toll), Del 1.4 (strøm). **Svarnøkkelen introduseres her** som prinsipp: la prisen si sannheten om marginalkostnaden.
- **Case-forslag:** «En kollega hevder at ‘markedet bare bryr seg om penger, ikke om hva samfunnet trenger’. Forklar, med prisenes signalfunksjon, hvorfor en riktig pris nettopp formidler hva samfunnet er villig til å gi opp for godet.»
- **Typiske feil:** Behandle pris som «bare fordeling/griskhet» og overse signal-/allokeringsfunksjonen; tro at effektivitet forutsetter en bestemt fordeling; glemme at det er *marginal* BV/kostnad som teller.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 1.2: Alternativkostnad og effektiv ressursbruk

- **id:** `econ3010-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `econ3010-1-1`
- **Kapitteltype:** teori (drøfting)
- **description:** Alternativkostnaden som limet i faget: hva en ressurs *kunne* kastet av seg i beste alternative anvendelse — og hvorfor en subsidie ikke endrer den.
- **Eksamensbelegg:** Alternativkostnad er kjernebegrepet under næringsstøtte (Del 3), toll (Del 4), strøm (Del 1.4) og beskatning (Del 5) — sensor kaller alternativkostnadsresonnementet eksplisitt vanskelig og bruker det som toppkarakter-differensiator. Prioritet: **perfekt** (fundament for A/B-differensiator #4).
- **Begrepskontrakt (m/pensumforankring):** **Alternativkostnad** (verdien av det beste man gir opp), **samfunnsøkonomisk vs. privatøkonomisk kostnad** (miljøbruk/ressursrente er *reelle* kostnader selv om bedriften ikke betaler dem), **effektiv allokering** (ressurser dit de gir høyest samfunnsøkonomisk avkastning på marginen). Kobles til partiell markedsmodell og badekarsdiagram.
- **Drøftingsakser:** (i) **subsidie-nøkkelen (A/B #4):** en subsidie senker bedriftens *private* kostnad, men ressursenes alternativkostnad er uendret → å holde ulønnsom produksjon i live betyr at arbeidskraft/kapital kaster mindre av seg enn i beste alternativ; (ii) **miljøkostnad er reell kostnad:** en bedrift som ikke overlever når miljøbruken prises riktig, er ikke samfunnsøkonomisk lønnsom (peker til Del 2/3); (iii) alternativverdi = markedspris i beste alternative marked (peker til strøm, Del 1.4).
- **Case-forslag:** «En bedrift sier den ‘skaper 200 arbeidsplasser’ og derfor bør få støtte. Bruk alternativkostnad til å forklare hva du som samfunnsøkonom vil spørre om før du gir støtten.»
- **Typiske feil:** Tro at en subsidie gjør produksjonen samfunnsøkonomisk lønnsom (den flytter bare kostnaden til skattebetalerne); regne bedriftens private kostnad som samfunnets; overse at bevart arbeidskraft har en alternativ anvendelse.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 1.3: Effektivitet vs. fordeling: hvorfor prisvridning er feil omfordelingsverktøy

- **id:** `econ3010-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `econ3010-1-1`
- **Kapitteltype:** teori (drøfting) — **SVARNØKKEL-KAPITLET**
- **description:** Bokas viktigste prinsippkapittel: fordelingsproblemer løses best med separate omfordelingsverktøy (skatt/overføringer), ikke ved å vri prisene bort fra marginalkostnaden.
- **Eksamensbelegg:** Svarnøkkelen — anvendt i praktisk talt hvert sett (strøm, klima, landbruk, bolig, eksport). Sensor trekker eksplisitt for å bruke fordelingshensyn som argument *mot* riktig prising (feilkatalog #5). **A/B-differensiator #6.** Prioritet: **perfekt** (høyest treffsikre poeng i hele emnet).
- **Begrepskontrakt (m/pensumforankring):** **Prisvridning** (pris satt bort fra marginalkostnaden → effektivitetstap), **separat omfordeling** (skatt + overføringer treffer fordelingsmålet direkte uten å ødelegge signalet), **målrettet vs. generell kompensasjon**, **Engel-elastisitet < 1** (nødvendighetsgoder som strøm/mat utgjør en større *andel* av lavinntektsbudsjettet → flat prissubsidie er regressiv i kroneandel og går mest til høyforbrukere). Kobling til effektiv beskatning (Del 5.2) og NOU-ene `(verifiser)`.
- **Drøftingsakser:** (i) **hovedargumentet:** å subsidiere/holde nede en pris for å hjelpe de svake ødelegger signalet for *alle* (også de som ikke trenger hjelp) og gir feil ressursbruk — bedre å la prisen være riktig og kompensere de svake med kontanter/overføringer; (ii) **motargument ærlig fremstilt:** omfordeling er ikke gratis (skattefinansiering har vridningskostnad, kap. 5.2) og kan være politisk/administrativt vanskelig — men det er som hovedregel *mindre* skadelig enn prisvridning; (iii) **Engel-poenget (A/B #6):** flat prissubsidie treffer dårlig fordi den også subsidierer høyforbruk hos de rike; (iv) unntak/nyanser: når kompensasjon er umulig eller prisen alt er feil (nest-best, Del 6.2).
- **Case-forslag:** «Regjeringen vil holde matmomsen lav ‘for de fattiges skyld’. Drøft om dette er et treffsikkert fordelingsgrep, og hva en samfunnsøkonom ville foreslått i stedet.»
- **Typiske feil:** Bruke fordeling som argument mot riktig prising uten å foreslå separat omfordeling (feilkatalog #5 — selve svarnøkkelbruddet); tro at flat prissubsidie er progressiv (Engel-fellen); fremstille omfordeling som kostnadsfri (glemme vridningskostnaden).
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 1.4: Energi- og kraftmarkedet: prisen som alternativverdi

- **id:** `econ3010-1-4` · **number:** 1.4 · **estimatedMinutes:** 55 · **prerequisites:** `econ3010-1-2`, `econ3010-1-3`
- **Kapitteltype:** teori (drøfting + figur-i-ord som støtte)
- **description:** Flaggskip-anvendelsen av signalfunksjonen: kraftprisens alternativverdi (europeisk markedspris), hvorfor subsidiert/eksportbegrenset strøm gir feil signaler, og hvordan strømstøtte bør utformes.
- **Eksamensbelegg:** Energi/strøm 1/7 ordinært (V2022A) + 2 utsatt-opsjoner (V2023uA) + berøres i V2024; 20–50 % når den kommer. **A/B-differensiator #5** (alternativverdi) og #6 (kontantstøtte vs. prissubsidie). Prioritet: **kunne** (bærer hele oppgaver; flaggskip for svarnøkkelen).
- **Begrepskontrakt (m/pensumforankring):** **Alternativverdi** (kraftens verdi i beste alternative anvendelse = europeisk markedspris ved eksportmulighet), **eksportbegrensning**, **prissubsidie vs. kontantutbetaling**, **kraft som felleseie** (staten henter mesteparten av kraftoverskuddet → eksportbegrensning gir lavere offentlige inntekter som må dekkes av andre skatter). von der Fehr (kraftmarkedet) `(verifiser)`.
- **Drøftingsakser + figur-i-ord (støtte):** (i) **alternativverdi (A/B #5):** subsidiert/eksportbegrenset strøm reflekterer ikke kraftens europeiske markedsverdi → feil investerings- og forbrukssignaler; ulik pris til husholdning vs. industri gir i tillegg ineffektiv innenlandsk bruk (figur: to markeder, feilpris trekker for mye forbruk til det subsidierte); (ii) **fordeling (svarnøkkelen + Engel, A/B #6):** strøm har Engel-elastisitet < 1 → flat prissubsidie er høyest som andel av inntekt for de laveste, men samlet mest kroner til høyforbrukere → **målrettet kontantutbetaling** skjermer lavinntekt bedre OG bevarer prissignalet; (iii) **statens inntekter:** eksportbegrensning gir lavere offentlige kraftinntekter → må dekkes av vridende skatt et annet sted.
- **Case-forslag:** «Under en priskrise foreslås (a) makspris på strøm, (b) eksportbegrensning, (c) en fast kontantutbetaling til alle husholdninger. Vurder de tre mot prisenes signalfunksjon og fordeling. Hvilket ville du som samfunnsøkonom anbefalt, og hvorfor?»
- **Typiske feil:** Overse at kraft har alternativverdi (feilkatalog #7); bruke prissubsidie som fordelingsgrep uten å se Engel-effekten (svarnøkkelbrudd); glemme at eksportbegrensning tapper offentlige inntekter; behandle strøm som en isolert mikrooppgave uten alternativverdi-koblingen.
- **Quiz: 20 · Flashcards: 24**

**Prøve-kvote Del 1:** 4 prøver (1.A prisenes signalfunksjon — «forklar hvorfor en riktig pris formidler samfunnets kostnad», sjanger F-fundament; 1.B alternativkostnad anvendt på en «vi skaper arbeidsplasser»-påstand, sjanger E-fundament; 1.C svarnøkkelen — matmoms/prissubsidie vs. separat omfordeling med Engel-poeng, sjanger D/F; 1.D full strømoppgave: makspris/eksportbegrensning/kontantstøtte mot signal og fordeling, sjanger F).

---

### Del 2 — Klima- og karbonprising vs. grønne subsidier *(prioritet: PERFEKT — RYGGRADEN, bokas STØRSTE del)*

#### Kapittel 2.1: Eksterne virkninger og hvorfor utslipp må prises

- **id:** `econ3010-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `econ3010-1-1` (+ ECON1210 kap. 4.1, klartekst)
- **Kapitteltype:** teori (drøfting + figur-i-ord som støtte)
- **description:** Negative eksterne virkninger, hvorfor markedet slipper ut for mye, og hvorfor en pris på utslippet (ikke et forbud eller en subsidie av alternativet) er førstevalget.
- **Eksamensbelegg:** Fundamentet under klimaoppgaven (5/7). Eksternalitetsbegrepet forutsettes i V2019A, V2022B, V2024, V2025-2. Prioritet: **perfekt** (bærer resten av Del 2).
- **Begrepskontrakt (m/pensumforankring):** **Ekstern virkning** (kostnad ved produksjon/forbruk som rammer andre og ikke prises i markedet), **samfunnsøkonomisk marginalkostnad = privat MK + marginal skadekostnad**, **prisen på utslipp** (avgift eller kvote som løfter privat MK opp til SMK). Skillet **ekstern** (rammer andre → korrigering) vs. **intern** virkning (rammer en selv → hører til atferd/paternalisme, ikke her). ECON1210 Pigou (`econ1210-4-1`, klartekst) `(verifiser)`.
- **Drøftingsakser + figur-i-ord (støtte):** (i) figur: tilbud = privat MK, SMK-kurve = marginal skadekostnad over; uregulert marked omsetter for mye (der E krysser privat MK), optimum der E krysser SMK; en pris på utslippet lik marginal skadekostnad gir riktig mengde og *fjerner* tapet; (ii) **avgift på skaden korrigerer, den vrir ikke:** i motsetning til en avgift i et velfungerende marked (som skaper tap), fjerner en utslippsavgift et tap; (iii) hvorfor prise skaden framfor å subsidiere alternativet (peker til 2.3) — riktige relative priser på *alle* valg.
- **Case-forslag:** «En fabrikk slipper ut noe som påfører naboene en skade. Forklar hvorfor markedet produserer for mye, og hvorfor en avgift på utslippet er et bedre grep enn å subsidiere en renere konkurrent.»
- **Typiske feil:** Behandle utslippsavgiften som et velferdstap (glemme at utgangspunktet ikke var effektivt); blande ekstern og intern virkning; hoppe rett til subsidie av grønt uten å prise skaden.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 2.2: Karbonprising som førstevalg: lik pris → like marginale rensekostnader

- **id:** `econ3010-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `econ3010-2-1` (+ ECON1210 kap. 4.2, klartekst)
- **Kapitteltype:** teori (drøfting + figur-i-ord som støtte)
- **description:** Kjerneargumentet i klimaoppgaven: når alle står overfor samme utslippspris, utjevnes de marginale rensekostnadene → samlet mål nås til lavest kostnad. Avgift vs. omsettelige kvoter vs. direkte regulering — og gratiskvote-nyansen.
- **Eksamensbelegg:** Selve ryggraden (5/7); 20–50 % vekt. **A/B-differensiator #3 (gratiskvote-nyansen).** Kvoter vs. avgift-likeverdigheten testes direkte. Prioritet: **perfekt** (bokas tyngste enkeltargument).
- **Begrepskontrakt (m/pensumforankring):** **Marginal rensekostnad (MAC)** (kostnaden ved å kutte den neste enheten utslipp), **kostnadseffektivitet** (gitt utslippsmål nådd til lavest total kostnad), **avgift** (priser utslipp direkte → sikkerhet om prisen), **omsettelige kvoter** (priser utslipp via et tak → sikkerhet om mengden; kvoteprisen dannes i markedet), **direkte regulering** (alle kutter X % → ineffektivt fordi MAC varierer). Hoel (brun/grønn energi) `(verifiser)`.
- **Drøftingsakser + figur-i-ord (støtte):** (i) **kjerneargumentet:** en lik avgift ELLER omsettelige kvoter får hver aktør til å kutte så lenge MAC < pris → MAC = pris for alle → målet nås billigst (figur: aggregert MAC-kurve, pris/kvotepris p der samlet kutt gir utslipp = mål/tak K); direkte regulering er dyrere fordi den ignorerer at MAC varierer; (ii) **avgift vs. kvoter:** likeverdige som prising — kvoter gir mer kontroll på at *mengdemålet* nås, avgift gir mer sikkerhet om *prisen*; (iii) **gratiskvote-nyansen (A/B #3):** gratis tildeling svekker IKKE kostnadseffektiviteten (alternativkostnaden ved å bruke en kvote = kvoteprisen uansett) — bare fordelingen endres, og «forurenser betaler» brytes; forklarer hvorfor industrien foretrekker gratis kvoter.
- **Case-forslag:** «To bedrifter har ulik kostnad ved å kutte utslipp. Forklar (uten tall) hvorfor en felles avgift eller omsettelige kvoter gir et gitt samlet kutt billigere enn et krav om at begge kutter like mye — og hvorfor det ikke spiller noen rolle for kostnadseffektiviteten om kvotene deles ut gratis.»
- **Typiske feil:** Tro at gratiskvoter ødelegger kostnadseffektiviteten (A/B #3-fellen); behandle direkte regulering som likeverdig; blande hva avgift og kvoter gir sikkerhet om (pris vs. mengde); moralisere uten kjerneargumentet lik pris → like MAC → billigst kutt.
- **Quiz: 24 · Flashcards: 28**

#### Kapittel 2.3: Subsidie av «grønt»: med vs. uten positive eksterne effekter

- **id:** `econ3010-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `econ3010-2-2`
- **Kapitteltype:** teori (drøfting) — **A/B-DIFFERENSIATOR-KAPITLET**
- **description:** Den vanligste faglige feilen i klimaoppgavene ryddet opp: når er en grønn subsidie forsvarlig (positive eksterne effekter ved selve det grønne godet) og når er den bare en dårligere erstatning for å prise skaden?
- **Eksamensbelegg:** Kjernemomentet i 5/7 klimaoppgaver; **A/B-differensiator #1 (subsidie med/uten eksternalitet) og #2 (elbil-feilargumentet)** — de tydeligste skillene mellom topp og middels. Prioritet: **perfekt**.
- **Begrepskontrakt (m/pensumforankring):** **Positiv ekstern effekt ved det grønne godet** (teknologiutvikling, «først ute», læringseffekter, nettverk = et kollektivt gode → underforsynes → *da* er subsidie riktig, den retter opp eksternaliteten *ved godet*), skilt fra **eksternaliteten ved utslippet** (som skal prises direkte, ikke motvirkes indirekte). **Hovedregelen:** subsidie av grønt er mindre kostnadseffektivt enn avgift på brunt, *med det ene unntaket* at det grønne selv har positive eksterne effekter.
- **Drøftingsakser:** (i) **skillet (A/B #1):** subsidien er forsvarlig bare når den retter en eksternalitet *ved det subsidierte godet*, ikke som erstatning for å prise utslippet; (ii) **elbil-feilargumentet (A/B #2):** å subsidiere elbil gjør den billigere ikke bare mot fossilbil, men også mot å gå/sykle/reise mindre → vrir *alle* valg feil; riktig grep er avgift på det som skader, så aktørene ser riktige relative priser på alle alternativer; (iii) **ikke godta premisset** «CO₂-prising bør vente til grønt er lønnsomt» — det snur logikken (avgiften er nettopp det som gjør grønt relativt lønnsomt).
- **Case-forslag:** «Regjeringen vil subsidiere elsykler og hydrogen ‘for klimaet’. For hvert tiltak: er en subsidie forsvarlig, eller burde staten heller priset utslippet? Bruk skillet mellom subsidie med og uten positive eksterne effekter.»
- **Typiske feil:** Behandle all grønn subsidie som effektiv (A/B #1-fellen — den vanligste faglige feilen); overse elbil-feilargumentet (#2); godta premisset om at prising bør vente (#6); blande eksternaliteten ved godet og ved utslippet.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 2.4: Grønn skattekommisjons tre kriterier og kompensasjonsordningenes brudd

- **id:** `econ3010-2-4` · **number:** 2.4 · **estimatedMinutes:** 45 · **prerequisites:** `econ3010-2-3`
- **Kapitteltype:** teori (drøfting)
- **description:** Den ferdige vurderingsrammen sensor foretrekker: de tre kriteriene fra Grønn skattekommisjon, og hvorfor kompensasjons-/strømstøtteordninger typisk bryter med alle tre.
- **Eksamensbelegg:** Trekriterie-rammen brukes eksplisitt i V2024 (Grønn skattekommisjons ramme) og er sensors foretrukne struktur i klimaoppgaver. Prioritet: **perfekt** (gir A-nivå struktur).
- **Begrepskontrakt (m/pensumforankring):** **De tre kriteriene (NOU 2015:15, Grønn skattekommisjon `(verifiser)`):** (i) **styringseffektivitet/måloppnåelse** (når virkemiddelet faktisk målet), (ii) **kostnadseffektivitet** (målet nås billigst — lik pris → like MAC), (iii) **forurenser betaler** (den som forårsaker skaden bærer kostnaden). **Kompensasjonsordninger** (fritak, CO₂-kompensasjon til industri, strømstøtte) som typisk bryter alle tre.
- **Drøftingsakser:** (i) hvordan bruke de tre kriteriene som fast vurderingsstruktur på ethvert klimavirkemiddel; (ii) hvorfor kompensasjon/fritak bryter kriteriene (svekker styringseffekt, ofte kostnadseffektivt problematisk, bryter forurenser-betaler) — og **svarnøkkelen igjen:** er fordelingsvirkningen problemet, kompenser med separat overføring, ikke med avgiftsfritak; (iii) grensene for prising: lokal/akutt farlig forurensing kan tilsi forbud i stedet.
- **Case-forslag:** «Industrien ber om fritak fra CO₂-avgiften fordi den ‘svekker konkurranseevnen’. Vurder forslaget mot de tre kriteriene, og foreslå et bedre grep hvis hensikten er å skjerme arbeidsplasser.»
- **Typiske feil:** Godta kompensasjon/fritak som løsning på fordelings-/konkurransehensyn (svarnøkkelbrudd); bruke kriteriene som ren sjekkliste uten å anvende dem; glemme at karbonlekkasje er et reelt, men separat hensyn.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 2.5: Drill: klimapolitikk-oppgaven (karbonprising vs. subsidier)

- **id:** `econ3010-2-5` · **number:** 2.5 · **estimatedMinutes:** 80 · **prerequisites:** `econ3010-2-4`
- **Kapitteltype:** drill (sjanger A — kjernesjangeren)
- **description:** Sjangerdrill på emnets signaturoppgave: vurder klimavirkemidler mot de tre kriteriene, med subsidie-skillet, elbil-feilargumentet og gratiskvote-nyansen innebygd, i stadig ny dagsaktuell innpakning.
- **Eksamensbelegg:** Dekker sjanger A (71 %, ofte «offentlig utredning» à la V2025-2, 30–50 %). Rotasjonen: avgift vs. kvoter vs. regulering; gratis vs. auksjonert tildeling; subsidie til grønt alternativ (med/uten eksternalitet); CO₂-kompensasjon/fritak; kombinasjon med fordeling. Prioritet: **perfekt** (bokas viktigste drillkapittel).
- **Innholdskontrakt (løsningsoppskrift):** Algoritme: 1) identifiser eksternaliteten (skaden ved utslippet) og målet; 2) etabler at **prise skaden er førstevalget** (avgift/kvoter, lik pris → like MAC → billigst kutt); 3) vurder hvert foreslått virkemiddel mot de **tre kriteriene** i fast rekkefølge; 4) bruk **subsidie-skillet** (med/uten positiv eksternalitet) og **elbil-feilargumentet** der grønn subsidie foreslås; 5) bruk **gratiskvote-nyansen** der kvoter foreslås; 6) håndter fordeling med **svarnøkkelen** (separat overføring, ikke fritak/prisvridning); 7) konkluder avgrenset. Gjennomskrevet eksempel-case (f.eks. «offentlig utredning om virkemidler i transportsektoren») med sensor-margnotater (margnotat ved subsidie-skillet: «her skilles A fra C»). 8–12 oppgaver i nyskrevne dagsaktuelle innpakninger (drivstoffavgift + elbilsubsidie, kvotepliktig industri med gratistildeling, hydrogensatsing, CO₂-kompensasjon, kjøttavgift vs. plantesubsidie, ladeinfrastruktur som nettverksgode), alle besvarbare verbalt.
- **Oppgavesjangre:** A. Mønstereksempel (full kjede): «(a) Bør staten prise utslippet eller subsidiere det grønne alternativet? (b) Vurder avgift, omsettelige kvoter og et påbud mot de tre kriteriene. (c) Svekker det kostnadseffektiviteten om kvotene deles ut gratis? (d) Avgiften rammer lavinntektshusholdninger — hva foreslår du?»
- **Typiske feil:** Hele Del 2-repertoaret: subsidie-skillet-fellen (#1), elbil-feilargumentet (#2), gratiskvote-fellen (#3), kompensasjon som fordelingsløsning (svarnøkkelbrudd #5), godta «vent med prising»-premisset (#6), momentliste uten avgrensning (#1-meta).
- **Quiz: 14 · Flashcards: 10**

**Prøve-kvote Del 2:** 4 prøver (2.A eksternalitet + hvorfor prise skaden framfor å subsidiere alternativet, sjanger A; 2.B karbonprising-mekanikken: lik pris → like MAC + avgift vs. kvoter + gratiskvote-nyansen, sjanger A; 2.C subsidie med/uten eksternalitet + elbil-feilargumentet, sjanger A; 2.D full klima-utredning mot de tre kriteriene med fordelingskompensasjon, sjanger A).

---

### Del 3 — Næringsstøtte, næringsnøytralitet og alternativkostnad *(prioritet: PERFEKT)*

#### Kapittel 3.1: Næringsnøytralitet: hvorfor «plukke vinnere» gir samfunnsøkonomisk tap

- **id:** `econ3010-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ3010-1-2`
- **Kapitteltype:** teori (drøfting) — **A/B-DIFFERENSIATOR-KAPITLET**
- **description:** Kjerneresonnementet mot næringsstøtte: i fravær av markedssvikt er det et tap å favorisere bestemte næringer, fordi en subsidie ikke endrer ressursenes alternativkostnad.
- **Eksamensbelegg:** Næringsstøtte 4/7 (V2018-2 landbruk, V2019A grønn næringspolitikk, V2023A eksportstøtte, V2024 industriens ønsker) + V2024u. **A/B-differensiator #4** — sensor merker alternativkostnadsresonnementet som eksplisitt vanskelig og bruker det til å skille topp fra middels. Prioritet: **perfekt**.
- **Begrepskontrakt (m/pensumforankring):** **Næringsnøytralitet** (staten favoriserer ikke bestemte næringer/bedrifter uten markedssviktbegrunnelse), **«plukke vinnere»** (staten mangler informasjonen markedet har), **alternativkostnad** (fra kap. 1.2: subsidie senker *privat* kostnad, men ressursenes alternativkostnad er uendret), **ulønnsom produksjon** (holdes i live med subsidie → arbeidskraft/kapital kaster mindre av seg enn i beste alternativ).
- **Drøftingsakser:** (i) **kjerneargumentet (A/B #4):** en subsidie flytter kostnaden til skattebetalerne uten å endre at ressursene har en alternativ anvendelse — samfunnsøkonomisk tap med mindre det retter en markedssvikt; (ii) **«arbeidsplasser»-motargumentet:** de bevarte arbeidsplassene har en alternativkostnad (arbeidskraften kunne jobbet et mer produktivt sted) — sysselsettingsargumentet holder bare ved reell, vedvarende ledighet, ikke generelt; (iii) **svarnøkkelen:** er distrikts-/fordelingshensyn målet, bruk direkte overføringer, ikke næringsstøtte som vrir produksjonen.
- **Case-forslag:** «En hjørnesteinsbedrift ber om støtte for å ‘redde lokalsamfunnet’. Som samfunnsøkonom: hva er alternativkostnaden ved å holde den i live, og når er støtte likevel forsvarlig?»
- **Typiske feil:** Tro at en subsidie gjør bedriften samfunnsøkonomisk lønnsom (endrer ikke alternativkostnaden — #4-fellen); godta sysselsettingsargumentet ukritisk (#6); overse at bevart arbeidskraft har en alternativ anvendelse; bruke fordeling som argument for næringsstøtte uten å foreslå direkte overføring.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 3.2: Når er støtte likevel forsvarlig? Markedssvikt-unntakene og miljøkostnad som reell kostnad

- **id:** `econ3010-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `econ3010-3-1`, `econ3010-2-3`
- **Kapitteltype:** teori (drøfting)
- **description:** Den ærlige andre siden: de tilfellene der næringsstøtte *kan* forsvares (positive eksterne effekter, læring/teknologi, reell markedssvikt) — og hvorfor «lavere lønnsomhet pga. miljøavgift» ikke er ett av dem.
- **Eksamensbelegg:** Baksiden av 4/7-sjangeren; sensor belønner at kandidaten skiller forsvarlig fra uforsvarlig støtte. V2022A (lavere lønnsomhet pga. prisøkning → skal problematiseres). Prioritet: **perfekt** (gir balansen A-nivået krever).
- **Begrepskontrakt (m/pensumforankring):** **Markedssvikt-unntakene** (positive eksterne effekter, læringseffekter/umodne teknologier, koordineringssvikt), skilt fra **ikke-grunner** (bevare eksisterende arbeidsplasser, «konkurranseevne» generelt, lavere lønnsomhet etter riktig prising). **Miljøkostnad er en reell kostnad:** en bedrift som ikke overlever når miljøbruken prises riktig, er ikke samfunnsøkonomisk lønnsom (kobler til Del 2).
- **Drøftingsakser:** (i) når *er* støtte riktig — samme logikk som subsidie-skillet i kap. 2.3 (retter en eksternalitet ved godet); (ii) **ikke godta premisset (#6):** at en bedrift blir ulønnsom fordi den nå må betale for miljøskaden er *ikke* et argument for støtte — det er markedet som endelig priser en reell kostnad; (iii) læringsargumentet ærlig veid: umodne teknologier kan ha en periode av positive læringseksternaliteter, men risikoen for varig subsidieavhengighet og «plukke vinnere»-problemet må med.
- **Case-forslag:** «En ny grønn industri sier den trenger støtte ‘til den blir lønnsom’. Drøft når dette er et gyldig argument (læring/eksternalitet) og når det bare er å plukke vinnere.»
- **Typiske feil:** Behandle «lavere lønnsomhet etter miljøavgift» som støttegrunn (#6/#7); godta ethvert læringsargument uten å veie subsidieavhengighet; blande reell markedssvikt med ren næringsinteresse.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 3.3: Drill: «hva sier du som samfunnsøkonom?»-oppgaven (næringsstøtte)

- **id:** `econ3010-3-3` · **number:** 3.3 · **estimatedMinutes:** 70 · **prerequisites:** `econ3010-3-2`
- **Kapitteltype:** drill (sjanger E)
- **description:** Sjangerdrill på næringsstøtte-oppgaven: gitt et krav om støtte til en bransje, avgjør om det finnes en markedssviktbegrunnelse eller om det er å plukke vinnere — med alternativkostnaden i sentrum.
- **Eksamensbelegg:** Dekker sjanger E (57 %; ofte «hva sier du som samfunnsøkonom?»). Rotasjonen: landbruk/importvern, eksportstøtte, grønn næringspolitikk, hjørnesteinsbedrift, subsidieavhengig industri. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** Algoritme: 1) presiser hva som kreves og hvorfor; 2) still **markedssvikt-spørsmålet**: finnes en positiv eksternalitet/læringseffekt/koordineringssvikt? 3) hvis nei → **alternativkostnadsargumentet (A/B #4):** subsidien endrer ikke ressursenes alternativkostnad → tap; 4) hvis ja → hvor stor, og treffer subsidien den? 5) **svarnøkkelen:** distrikts-/fordelingsmål løses med direkte overføring, ikke næringsstøtte; 6) konkluder avgrenset. Gjennomskrevet eksempel-case med sensor-margnotater (margnotat ved alternativkostnad: «her skilles topp fra middels»). 8–12 oppgaver i nyskrevne innpakninger (verftsstøtte, batterifabrikk, jordbruksstøtte, subsidiert treforedling, importtoll for å redde en bransje [peker til Del 4], filmstøtte som kulturgode).
- **Oppgavesjangre:** E (+ overlapp med B når importvern er virkemiddelet). Mønstereksempel: «En bedrift ber om driftsstøtte for å bevare 300 arbeidsplasser. (a) Hva er alternativkostnaden? (b) Finnes en markedssviktbegrunnelse? (c) Hvis målet er å hjelpe lokalsamfunnet, hva foreslår du i stedet?»
- **Typiske feil:** Alternativkostnad-fellen (#4); godta sysselsettings-/konkurranseargumentet (#6); ikke skille forsvarlig fra uforsvarlig støtte; bruke fordeling som støtteargument uten separat-overføring-alternativet.
- **Quiz: 14 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (3.A næringsnøytralitet + alternativkostnad mot en «vi redder arbeidsplasser»-påstand, sjanger E; 3.B når er støtte forsvarlig — markedssvikt-unntakene vs. ikke-grunner, sjanger E; 3.C miljøkostnad som reell kostnad / «ikke godta premisset», sjanger E+A; 3.D full «hva sier du som samfunnsøkonom?»-oppgave med alternativkostnad og separat omfordeling, sjanger E).

---

### Del 4 — Internasjonal handel og handelspolitikk *(prioritet: PERFEKT — stigende, 70 %-oppgaven i V2025)*

#### Kapittel 4.1: Frihandelsgevinstene: komparative fortrinn og gevinst ved handel

- **id:** `econ3010-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ3010-1-2`
- **Kapitteltype:** teori (drøfting + figur-i-ord som støtte)
- **description:** Hvorfor frihandel gir gevinst: komparative fortrinn, gevinst ved handel i ett marked, og produksjonsmulighetskurven for et land som handler på verdensmarkedet — alt verbalt, uten utregning.
- **Eksamensbelegg:** Fundamentet under handelsoppgaven (3/7 ordinært, sterkt stigende — 70 % i V2025) + V2020uA, V2024u. Trekker inn ECON2610-stoff (PMK). Prioritet: **perfekt** (bærer Del 4).
- **Begrepskontrakt (m/pensumforankring):** **Komparativt fortrinn** (lavere alternativkostnad i en vare — et land har det i minst én vare, aldri i alle), skilt fra **absolutt fortrinn**; **gevinst ved handel** (spesialisering etter komparativt fortrinn løfter samlet konsum); **produksjonsmulighetskurve (PMK)** og **bytteforhold** (hvordan verdensmarkedet lar landet konsumere utenfor egen PMK). Krugman, Obstfeld & Melitz / ECON2610 `(verifiser)`. **NB (ingen regning):** talleksempel brukes bare til å illustrere logikken verbalt — aldri utregnet fasit.
- **Drøftingsakser + figur-i-ord (støtte):** (i) hvorfor selv et land som er «dårligst i alt» tjener på handel (komparativt, ikke absolutt); (ii) figur i ord: PMK for landet, verdensmarkedsprisen som en linje landet kan «bytte langs» → konsummulighetene utvides utover PMK; (iii) **gevinstene er reelle, men fordeles ujevnt** (bru til 4.2/4.3: vinnere og tapere).
- **Case-forslag:** «Et land vurderer å åpne for frihandel. Forklar, uten tall, hvorfor det tjener på det selv om nabolandet er mer effektivt i alle varer — og hvorfor gevinsten likevel ikke tilfaller alle likt.»
- **Typiske feil:** Forveksle absolutt og komparativt fortrinn; tro at et land uten absolutt fortrinn ikke tjener på handel; regne ut et komparativt-fortrinn-tallsvar (finnes ikke i faget); overse at gevinsten fordeles ujevnt.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 4.2: Toll når landet er pristaker: netto samfunnsøkonomisk tap

- **id:** `econ3010-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ3010-4-1` (+ ECON1210 kap. 3.1/3.2, klartekst)
- **Kapitteltype:** teori (drøfting + figur-i-ord som støtte)
- **description:** Standard-tollanalysen for et lite land: tollen veltes fullt over i høyere innenlandspris, produsenter tjener, kjøpere taper mer, staten får tollinntekt — netto samfunnsøkonomisk tap. Og hvorfor tollobbyen likevel vinner politisk.
- **Eksamensbelegg:** Kjernen i handelsoppgaven (V2025-1 toll, 70 %; V2018-2 importvern). **A/B-differensiator #7 (konsentrerte gevinster / spredte tap).** Prioritet: **perfekt**.
- **Begrepskontrakt + figur-i-ord (støtte):** **Pristaker/lite land** (påvirker ikke verdensprisen), **toll** (avgift på import → innenlandspris opp med hele tollen), **konsument-/produsentoverskudd**, **tollinntekt**, **netto effektivitetstap**. Figur i ord (ett importmarked): innenlandspris løftes fra verdenspris til verdenspris + toll; produsentoverskudd øker (areal a), tollinntekt til staten (areal c, tatt fra kjøperne), men konsumentoverskuddet faller mer → **netto tap = b + d** (overproduksjon + underforbruk). **Aldri regn ut arealene — navngi dem.**
- **Drøftingsakser:** (i) hvorfor toll gir netto tap for et lite land (vrir innenlandsprisen bort fra verdensprisen — svarnøkkelen: prisen bør si sannheten om alternativet); (ii) **konsentrerte gevinster / spredte tap (A/B #7):** produsentene får en konsentrert gevinst og lobbyerer, mens kjøpernes tap er spredt tynt → forklarer den politiske økonomien bak toll; (iii) **svarnøkkelen:** taper en gruppe på frihandel, kompenser dem med inntektssikring, ikke med toll som skader alle kjøpere.
- **Case-forslag:** «Det foreslås toll på importerte varer ‘for å beskytte norske arbeidsplasser’. Vis med en figur i ord hvem som vinner og taper, forklar hvorfor det er et netto tap for et lite land, og hvorfor forslaget likevel har politisk gjennomslag.»
- **Typiske feil:** Tro at tollinntekten er en samfunnsøkonomisk gevinst (den er tatt fra kjøperne); glemme at kjøpernes tap overstiger produsentenes og statens gevinst; regne ut arealene; overse den politiske økonomien (konsentrert/spredt).
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 4.3: Toll ved kjøpermakt, optimal toll og Heckscher-Ohlin-fordeling

- **id:** `econ3010-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `econ3010-4-2`
- **Kapitteltype:** teori (drøfting + figur-i-ord som støtte)
- **description:** Unntaket fra netto-tap-regelen: når landet har kjøpermakt, kan en optimal toll gi netto gevinst ved bedret bytteforhold. Og fordelingseffektene av handel via Heckscher-Ohlin.
- **Eksamensbelegg:** A-nivå-momentet i handelsoppgaven (V2025-1, optimal toll og Heckscher-Ohlin). Trekker inn ECON2610-stoff. Prioritet: **perfekt** (skiller topp).
- **Begrepskontrakt (m/pensumforankring):** **Kjøpermakt** (stort land / makt i et enkeltmarked → toll presser verdensprisen ned = bedret bytteforhold), **optimal toll** (tollnivået der bytteforholdsgevinsten (areal e) akkurat overstiger effektivitetstapet b + d → netto gevinst — men på bekostning av utlandet), **Heckscher-Ohlin** (et land eksporterer varen intensiv i sin rikelige faktor → handel presser avkastningen til den knappe faktoren ned), **fordelingseffekter av handel** («Kina-effekten» på lavt utdannet arbeidskrafts lønn). Krugman, Obstfeld & Melitz / ECON2610 `(verifiser)`.
- **Drøftingsakser + figur-i-ord (støtte):** (i) **optimal toll (A/B #7):** ved kjøpermakt kan toll gi netto gevinst — figur: bytteforholdsgevinst e mot effektivitetstap b + d; også små land kan ha kjøpermakt i enkeltmarkeder; (ii) **fordeling via Heckscher-Ohlin:** høyere toll på import fra lavkostland kan reversere presset på lavt utdannet arbeidskrafts lønn — men til en effektivitetskostnad, og **svarnøkkelen:** omfordeling (inntektssikring, utdanning) er som regel bedre enn toll; (iii) at optimal toll er en «beggar-thy-neighbour»-politikk som inviterer gjengjeldelse.
- **Case-forslag:** «Et stort land vurderer toll på en vare det er en dominerende kjøper av. Forklar hvordan en optimal toll kan gi netto gevinst, hvorfor det skjer på utlandets bekostning, og hvordan handelens fordelingseffekter bedre kan møtes enn med toll.»
- **Typiske feil:** Anvende optimal-toll-gevinsten på et rent pristakerland (feil forutsetning); overse gjengjeldelsesrisikoen; bruke Heckscher-Ohlin-fordelingseffekten som argument for toll uten å veie effektivitetstapet og omfordelingsalternativet (svarnøkkelbrudd).
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 4.4: Eksport som mål? Skjermet vs. konkurranseutsatt og driftsbalanse

- **id:** `econ3010-4-4` · **number:** 4.4 · **estimatedMinutes:** 50 · **prerequisites:** `econ3010-4-1`
- **Kapitteltype:** teori (drøfting)
- **description:** Utrednings-vrien: er økt eksport i seg selv et godt mål? Optimal allokering mellom skjermet og konkurranseutsatt sektor, og hvorfor Norge tåler negativ driftsbalanse fra fastlandet.
- **Eksamensbelegg:** V2023A (eksport som mål) + V2020uA. Sensor belønner at kandidaten *først* drøfter formålet før virkemiddelet. Berører makro (driftsbalanse) *lett* — her er det tillatt. Prioritet: **kunne** (bærer eksportoppgaven).
- **Begrepskontrakt (m/pensumforankring):** **Skjermet vs. konkurranseutsatt sektor**, **full ressursutnyttelse + optimal allokering** (poenget er riktig fordeling mellom sektorer, ikke mest mulig eksport), **driftsbalanse/handelsbalanse** (Norge tåler negativ driftsbalanse fra fastlands-Norge fordi oljeformuen finansierer import), **aldrende befolkning** (øker etterspørselen etter skjermede omsorgstjenester). Forkunnskap: makro-koblingen lenkes til [ECON1310 Makroøkonomi I](/bok/econ1310/econ1310-0-1) (driftsbalanse-kapittel `(verifiser id)`).
- **Drøftingsakser:** (i) **drøft formålet først:** økt eksport er ikke et mål i seg selv — målet er høyest mulig velferd fra full og riktig ressursbruk; (ii) allokering skjermet/konkurranseutsatt (badekarsdiagram-logikk fra kap. 0.3/5.2): ressurser dit de kaster mest av seg; (iii) **avgrensning (mikro vs. makro):** driftsbalanse brukes lett her, men trekk *ikke* full makromodell inn — hold analysen mikro.
- **Case-forslag:** «En politiker vil ‘doble eksporten innen 2035’. Drøft først om økt eksport i seg selv er et godt mål, deretter hva som avgjør riktig fordeling mellom skjermet og konkurranseutsatt sektor.»
- **Typiske feil:** Behandle økt eksport som et selvstendig mål (ikke drøfte formålet); trekke full makromodell inn i en mikrooppgave (#2); glemme oljeformuens rolle for driftsbalansen; overse aldrende befolknings press på skjermet sektor.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 4.5: Drill: handelspolitikk-oppgaven (toll/eksport/frihandel)

- **id:** `econ3010-4-5` · **number:** 4.5 · **estimatedMinutes:** 80 · **prerequisites:** `econ3010-4-4`
- **Kapitteltype:** drill (sjanger B — hovedoppgave-kandidat)
- **description:** Sjangerdrill på handelsoppgaven: fra frihandelsgevinst via tollanalyse (pristaker vs. kjøpermakt) til fordeling og Norge-vs-USA-drøfting, i dagsaktuell innramming.
- **Eksamensbelegg:** Dekker sjanger B (stigende, hele 70 %-oppgaven i V2025). Rotasjonen: importtoll for pristaker, optimal toll ved kjøpermakt, eksportstøtte, frihandel vs. proteksjonisme, Heckscher-Ohlin-fordeling, Norge vs. USA. Prioritet: **perfekt** (mest sannsynlige hovedoppgave neste sett).
- **Innholdskontrakt (løsningsoppskrift):** Algoritme: 1) etabler **frihandelsgevinsten** (komparative fortrinn); 2) er landet **pristaker eller har kjøpermakt**? avgjør om toll gir netto tap (b + d) eller mulig gevinst (optimal toll); 3) **figur i ord** for tollarealene (navngi, ikke regn); 4) **fordeling:** hvem vinner/taper (Heckscher-Ohlin, konsentrert/spredt) og **svarnøkkelen:** kompenser med inntektssikring, ikke toll; 5) **Norge vs. USA:** små land er mer handelsavhengige, og Norge kompenserer taperne gjennom gode inntektssikringsordninger og gratis/subsidierte tjenester; 6) ved eksportoppgave: **drøft formålet først** (kap. 4.4). Gjennomskrevet eksempel-case (f.eks. «bør Norge svare på en handelspartners toll med egen toll?») med sensor-margnotater. 8–12 oppgaver i nyskrevne innpakninger (stålimport, landbruksvern, elbilimport fra lavkostland, eksportsubsidie til fisk, gjengjeldelsestoll, frihandelsavtale).
- **Oppgavesjangre:** B (+ overlapp med E ved importvern som næringsstøtte). Mønstereksempel (full kjede): «(a) Hvorfor tjener landet på frihandel? (b) Vis med figur i ord hvem som vinner/taper på en importtoll for et lite land. (c) Endres svaret om landet har kjøpermakt? (d) Frihandel skaper tapere — hva bør staten gjøre for dem?»
- **Typiske feil:** Hele Del 4-repertoaret: tollinntekt som gevinst, optimal toll på pristakerland, glemme konsentrert/spredt (#7), bruke toll som fordelingsverktøy (svarnøkkelbrudd), trekke makro inn (#2), ikke drøfte eksport-formålet.
- **Quiz: 14 · Flashcards: 10**

**Prøve-kvote Del 4:** 4 prøver (4.A frihandelsgevinst + komparative fortrinn verbalt, sjanger B; 4.B toll for pristaker med figur-i-ord + konsentrert/spredt, sjanger B; 4.C optimal toll ved kjøpermakt + Heckscher-Ohlin-fordeling, sjanger B; 4.D full handelsoppgave: eksport-som-mål / Norge-vs-USA / kompensasjon framfor toll, sjanger B).

---

### Del 5 — Fordeling, omfordeling og effektiv beskatning *(prioritet: KUNNE — bærer hele oppgaver)*

#### Kapittel 5.1: Inntektssikring vs. behovsprøvd vs. universell — og borgerlønn

- **id:** `econ3010-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ3010-1-3`
- **Kapitteltype:** teori (drøfting) — **A/B-DIFFERENSIATOR-KAPITLET**
- **description:** Begrepsapparatet sensor forventer i fordelingsoppgaver: de tre ordningstypene, arbeidstilbudseffekter, og hvorfor borgerlønn ikke kan erstatte trygdens forsikringsfunksjon.
- **Eksamensbelegg:** Fordeling/velferd 3/7 (V2018-1 bolig-fordeling, V2019B barnefattigdom, V2023B borgerlønn) + V2023uA. **A/B-differensiator #8** — sensor bemerker at studenter ofte mangler skillet inntektssikring/behovsprøving. Prioritet: **kunne**.
- **Begrepskontrakt (m/pensumforankring):** **Inntektssikring** (forsikring mot inntektsbortfall — uføretrygd, dagpenger; utbetaling stiger med tidligere inntekt; har forsikrings- + omfordelingselement), **behovsprøvd ordning** (avkortes mot inntekt — sosialhjelp; gir høy effektiv marginalskatt på arbeid), **universell ordning** (til alle uavhengig av inntekt), **borgerlønn** (fast beløp til alle — som *tillegg* må skattefinansieres, som *erstatning* gir minimumsstat), **substitusjons- vs. inntektsvirkning** på arbeidstilbud. NOU 2017:6 (fattigdom) `(verifiser)`.
- **Drøftingsakser:** (i) **treffsikkerhet vs. kostnad/stigmatisering:** behovsprøving treffer de fattigste bedre, men er ressurskrevende, stigmatiserende og gir høy effektiv marginalskatt; universelle/skattelette-grep er billige å administrere, men treffer dårligere; (ii) **borgerlønn (A/B #8):** gir *ikke* inntektssikring slik trygd gjør (utbetalingen avhenger ikke av tidligere inntekt) → kan ikke erstatte forsikringsfunksjonen; arbeidstilbud trekkes ned både av utbetalingen (arbeidsfri inntekt) og finansieringsskatten, men motvekt er at borgerlønn ikke faller bort når man jobber (ingen fattigdomsfelle) og at trygghet kan gi bedre jobbmatch; (iii) **svarnøkkelen:** omfordeling er det separate verktøyet — velg ordning etter mål (fattigdomsbekjempelse → behovsprøvd; generell trygghet → universell).
- **Case-forslag:** «En kollega vil erstatte all trygd med en borgerlønn. Drøft hva som går tapt (forsikringsfunksjonen) og hva som vinnes (ingen fattigdomsfelle), og hvordan arbeidstilbudet påvirkes.»
- **Typiske feil:** Blande inntektssikring og behovsprøving/universell (#8); tro at borgerlønn kan erstatte trygdens forsikringsfunksjon; overse at behovsprøving gir høy effektiv marginalskatt; bare se én arbeidstilbudseffekt.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 5.2: Effektiv beskatning: vridningstap, grunnrente og badekarsdiagrammet

- **id:** `econ3010-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ3010-1-2`, `econ3010-1-3`
- **Kapitteltype:** teori (drøfting + figur-i-ord som støtte)
- **description:** Prinsippene for å hente inn omfordelingsmidler med minst mulig prisvridning: lav elastisitet, brede grunnlag med like satser, ikke-vridende skatter først — og badekarsdiagrammet for tapet ved ulik skatt.
- **Eksamensbelegg:** Effektiv beskatning 2/7 (V2018-1 boligskatt, V2020B grunnrente/miljømoms). Badekarsdiagrammet er standardverktøyet. Prioritet: **kunne** (svarnøkkelens «separate omfordelingsverktøy» konkretisert).
- **Begrepskontrakt (m/pensumforankring):** **Vridningstap** (skatt som endrer relative priser → effektivitetstap), **priselastisitet** (skattlegg objekter med lav elastisitet → minst vridning), **brede grunnlag med like satser** (unngå at ressurser vris mot lavt beskattede goder), **grunnrenteskatt** (på stedbundne ressurser — vannkraft, havbruk, olje — henter fellesskapets ressursrente *uten* vridning → førstevalg), **ikke-vridende (nøytrale) skatter**. NOU 2019:18 / NOU 2014:13 `(verifiser)`.
- **Drøftingsakser + figur-i-ord (støtte):** (i) rekkefølgen: nøytrale skatter (grunnrente) først, deretter brede grunnlag/like satser, deretter lav elastisitet; (ii) **badekarsdiagrammet:** to sektorer med marginalavkastningskurver mot hverandre; ulik skatt → godet med lavere skatt blir privatøkonomisk (ikke samfunnsøkonomisk) mer lønnsomt → for mye ressurser trekkes dit (marginalavkastningen der blir høyere enn i den andre) → effektivitetstap; (iii) **svarnøkkelen:** effektiv beskatning finansierer omfordeling uten å ødelegge signalene mer enn nødvendig.
- **Case-forslag:** «Staten trenger mer inntekter. Ranger grunnrenteskatt på vannkraft, en bred moms og en særavgift på én bransje etter effektivitetstap, og bruk badekarsdiagrammet i ord til å forklare hvorfor ulik sats mellom to sektorer koster.»
- **Typiske feil:** Overse at grunnrenteskatt er ikke-vridende (førstevalg); anbefale differensierte satser uten å se badekars-tapet; regne ut vridningstapet (kvalitativt fag); glemme at målet er å finansiere omfordeling med minst mulig skade.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 5.3: Boligbeskatning og målrettet vs. generell kompensasjon

- **id:** `econ3010-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ3010-5-2`, `econ3010-1-3`
- **Kapitteltype:** teori (drøfting)
- **description:** To anvendelser av effektiv beskatning og svarnøkkelen: hvorfor gunstig boligbeskatning vrir sparing mot bolig, og hvordan man kompenserer tapere målrettet framfor generelt.
- **Eksamensbelegg:** Boligskatt V2018-1 (gunstig boligbeskatning vrir sparing, driver priser, rammer storbyene); målrettet vs. generell kompensasjon i strøm/klima/handel. Prioritet: **kunne**.
- **Begrepskontrakt (m/pensumforankring):** **Gunstig boligbeskatning** (bolig skattlegges lavere enn annen kapital → vrir sparing mot bolig → høyere boligpriser, særlig i storbyer), **skattefavorisering som prisvridning**, **målrettet vs. generell kompensasjon** (fra kap. 1.3: kontant/behovsprøvd treffer bedre enn generell prissubsidie), **ROT/RUT-fradrag** (reduserer, men fjerner ikke, prisforskjellen hvitt/svart; høy inntektselastisitet → mest til høyinntekt). NOU 2014:13 `(verifiser)`.
- **Drøftingsakser:** (i) boligskatt som effektivitets- *og* fordelingssak (favoriseringen er både vridende og regressiv); (ii) **svarnøkkelen:** vil man skjerme noen, bruk målrettet overføring, ikke generell skattefavorisering/prissubsidie; (iii) ROT/RUT ærlig veid: kan redusere svart arbeid noe, men usikkert og fordelingsskjevt.
- **Case-forslag:** «Det foreslås å beholde lav boligskatt ‘for vanlige folk’. Drøft effektivitets- og fordelingsvirkningene, og hva en samfunnsøkonom ville foreslått i stedet for å hjelpe førstegangskjøpere.»
- **Typiske feil:** Overse at gunstig boligbeskatning både vrir og er regressiv; tro at generell skattelette er treffsikker fordeling (svarnøkkelbrudd); behandle ROT/RUT som sikker løsning på svart arbeid.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 5.4: Drill: fordelings- og skatteoppgaven

- **id:** `econ3010-5-4` · **number:** 5.4 · **estimatedMinutes:** 70 · **prerequisites:** `econ3010-5-3`
- **Kapitteltype:** drill (sjanger C+D)
- **description:** Sjangerdrill på fordelings-/skatteoppgaven: fra et fordelings- eller inntektssikringsmål til riktig ordning og finansiering, med badekarsdiagram og svarnøkkelen.
- **Eksamensbelegg:** Dekker sjanger C (effektiv beskatning 2/7) og D (fordeling 3/7). Rotasjonen: behovsprøvd vs. universell, borgerlønn, effektiv beskatning/grunnrente, boligskatt, målrettet vs. generell kompensasjon. Prioritet: **kunne**.
- **Innholdskontrakt (løsningsoppskrift):** Algoritme: 1) presiser **målet** (fattigdomsbekjempelse? forsikring? generell trygghet?); 2) velg **ordningstype** (inntektssikring/behovsprøvd/universell) etter mål og veg treffsikkerhet mot arbeidstilbud/administrasjon; 3) **finansiering:** effektiv beskatning (grunnrente/brede grunnlag/lav elastisitet, badekar-tapet); 4) **svarnøkkelen:** løs fordeling med separat overføring, ikke prisvridning; 5) konkluder avgrenset. Gjennomskrevet eksempel-case med sensor-margnotater. 8–12 oppgaver i nyskrevne innpakninger (barnetrygd behovsprøvd vs. universell, borgerlønn-forslag, grunnrenteskatt på oppdrett, boligskattereform, målrettet strøm-/matkompensasjon).
- **Oppgavesjangre:** C+D. Mønstereksempel: «(a) Bør en ny støtteordning være behovsprøvd eller universell, gitt at målet er å redusere barnefattigdom? (b) Hvordan bør den finansieres med minst mulig effektivitetstap? (c) En kollega vil heller kutte matmomsen — hvorfor er det et dårligere fordelingsgrep?»
- **Typiske feil:** Blande de tre ordningstypene (#8); prisvridning som fordelingsgrep (svarnøkkelbrudd #5); overse grunnrentens nøytralitet; ensidig svar uten begge sider.
- **Quiz: 14 · Flashcards: 10**

**Prøve-kvote Del 5:** 4 prøver (5.A inntektssikring vs. behovsprøvd vs. universell + borgerlønnens forsikringsproblem, sjanger D; 5.B effektiv beskatning: grunnrente/brede grunnlag + badekarsdiagram, sjanger C; 5.C boligbeskatning + målrettet vs. generell kompensasjon, sjanger C+D; 5.D full fordelings-/skatteoppgave med ordningsvalg, finansiering og svarnøkkelen, sjanger C+D).

---

### Del 6 — Markedssvikt, nest-best og krisepolitikk *(prioritet: KJENNE — beredskap)*

#### Kapittel 6.1: Markedssvikt-oversikten: rammeverket som kobler alt

- **id:** `econ3010-6-1` · **number:** 6.1 · **estimatedMinutes:** 45 · **prerequisites:** `econ3010-1-1` (+ ECON1210 kap. 4.3, klartekst)
- **Kapitteltype:** teori (drøfting)
- **description:** De kanoniske markedssviktene samlet, hvordan man kobler et virkemiddel til hvilken svikt det retter, og motargumentet styringssvikt — rammeverket boka har brukt implisitt hele veien.
- **Eksamensbelegg:** Ikke en egen storoppgave, men det underliggende rammeverket i alle temaene (signalfunksjonen svikter → hvorfor?). Samler trådene fra Del 1–5. Prioritet: **kjenne** (høy avkastning som strukturverktøy).
- **Begrepskontrakt (m/pensumforankring):** **Markedssvikt** (forhold som gjør at markedslikevekten ikke blir effektiv → prisen «lyver»): (1) eksterne virkninger (Del 2), (2) markedsmakt, (3) kollektive goder/fellesressurser, (4) asymmetrisk informasjon, (5) manglende/ufullstendige markeder. **Styringssvikt** (byråkratiets/politikkens egeninteresse, informasjonsproblem, reguleringskostnad). ECON1210 markedssvikt-katalog (`econ1210-4-3`, klartekst) `(verifiser)`.
- **Drøftingsakser:** (i) **katalog-grepet:** for et gitt virkemiddel, identifiser *hvilken* svikt det begrunnes med (CO₂-avgift → eksternalitet; grunnforskningsstøtte → kollektivt gode; trygd → asymmetrisk info/manglende marked); (ii) **«svikt finnes» ⇏ «staten bør alltid gripe inn»** — veg reguleringskostnad og styringssvikt; (iii) hvordan dette rammeverket ligger under svarnøkkelen: prisen skal si sannheten *med mindre* en svikt hindrer det, og da rettes sviktens *kilde*.
- **Case-forslag:** «For hvert tiltak (CO₂-avgift, grunnforskningsstøtte, obligatorisk pensjon, konkurransetilsyn): hvilken markedssvikt begrunner det? Og når bør staten likevel la være?»
- **Typiske feil:** Hoppe fra «svikt finnes» til «staten bør regulere» uten å veie styringssvikt; ikke kunne koble virkemiddel → svikt; behandle enhver uønsket utfall som markedssvikt.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 6.2: Prising av knapp kapasitet og nest-best

- **id:** `econ3010-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `econ3010-1-1`
- **Kapitteltype:** teori (drøfting + figur-i-ord som støtte)
- **description:** Utsatt-favoritten: tidsdifferensiert prising av knapp kapasitet (rushtid), kø-rasjonering som effektivitetstap, og nest-best-avveiingen når et tilstøtende marked er feilpriset.
- **Eksamensbelegg:** Nest-best/knapp kapasitet 0/7 ordinært, men V2023uB (rushtidsprising) — utsatt-favoritt. Prioritet: **kjenne** (beredskap; kan bli biooppgave).
- **Begrepskontrakt (m/pensumforankring):** **Knapp kapasitet** (gitt kapasitet, marginalkostnad ≈ 0 under kapasitet), **tidsdifferensiert prising** (rush vs. utenom, ulik elastisitet), **kø-rasjonering** (felles pris → uutnyttet kapasitet utenom rush + kø i rush; plasser fordeles ikke etter betalingsvillighet → effektivitetstap), **nest-best** (riktig prising i ett marked når et tilstøtende marked er feilpriset).
- **Drøftingsakser + figur-i-ord (støtte):** (i) figur i ord: to etterspørselskurver (rush mindre elastisk); felles pris gir kø i rush og tomme plasser ellers; tidsdifferensiert pris utnytter kapasiteten bedre; (ii) **nest-best-nyansen:** hvis bilbruk ikke er korrekt priset for eksternaliteter, må gevinsten ved riktig kollektivprising veies mot at høyere rushpris presser flere over på (underpriset) bilkjøring; (iii) **svarnøkkelen med forbehold:** riktig prising er hovedregelen, men nest-best kan begrunne avvik når nabomarkedet er feilpriset.
- **Case-forslag:** «Bør kollektivtransport ha høyere pris i rushtiden? Forklar effektivitetsgevinsten, og drøft nest-best-forbeholdet når bilkjøring ikke er riktig priset for kø og utslipp.»
- **Typiske feil:** Overse at marginalkostnaden er ≈ 0 under kapasitet; glemme kø-rasjoneringens effektivitetstap; anvende «riktig prising»-regelen mekanisk uten nest-best-forbeholdet; regne ut priser (kvalitativt fag).
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 6.3: Makro- og krisepolitikk (bør kjenne til)

- **id:** `econ3010-6-3` · **number:** 6.3 · **estimatedMinutes:** 40 · **prerequisites:** `econ3010-1-1`
- **Kapitteltype:** teori (drøfting) — «bør kjenne til»
- **description:** Kort beredskap på kriseoppgaven: allokerings- og fordelingsvirkninger av et sjokk, og den viktige avgrensningen — makro dukker opp bare i kriseår.
- **Eksamensbelegg:** Makro kun V2020A + V2020u (corona). Sensor advarer eksplisitt mot å trekke makro inn i mikrooppgaver. Prioritet: **kjenne** (nedprioritert; kort «bør kjenne til»).
- **Begrepskontrakt (m/pensumforankring):** **Allokerings- vs. fordelingsvirkning av et sjokk**, **mottiltakenes ringvirkninger** (Mehlum & Torvik-modellen: nedstengning i én sektor smitter over på andre), **handel rammet av leveranseavbrudd + lavere inntekt**. Mehlum & Torvik (corona) `(verifiser)`.
- **Drøftingsakser:** (i) se både direkte effekter og mottiltakenes effekter; (ii) **avgrensning (kjernen):** ikke trekk makro inn i en mikrooppgave — dette kapitlet er beredskap for det *ene* tilfellet der oppgaven eksplisitt er makro/krise; (iii) at en så vid problemstilling ikke har en momentliste — her belønnes sammenhengende, avgrenset drøfting ekstra.
- **Case-forslag:** «Under en krise stenges én sektor ned. Drøft kort både allokerings- og fordelingsvirkningene, og hvordan mottiltak i én sektor kan smitte over på andre.»
- **Typiske feil:** Trekke makro inn der oppgaven er mikro (#2, hovedfeilen); lage momentliste på en vid krisecase; overse mottiltakenes ringvirkninger.
- **Quiz: 14 · Flashcards: 18**

**Prøve-kvote Del 6:** 4 prøver (6.A markedssvikt-katalogen: koble virkemiddel → svikt + styringssvikt, sjanger H-fundament; 6.B prising av knapp kapasitet med figur-i-ord + kø-rasjonering, sjanger H; 6.C nest-best-avveiingen med feilpriset nabomarked, sjanger H; 6.D krisepolitikk: allokerings- + fordelingsvirkninger med riktig avgrensning, sjanger G).

---

### Del 7 — Eksamenstrening

#### Kapittel 7.1: Begrepsdrill: gjengangerne med forankring

- **id:** `econ3010-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** Del 1–6
- **Kapitteltype:** drill (begreper)
- **description:** Presisjonstrening på hele begrepsrepertoaret: presis definisjon + forankring (modell/NOU/foreleser) + figur-i-ord der naturlig + eksempel + A/B-markøren.
- **Eksamensbelegg:** Begreper inngår i mange sett (lav-vekts deler, sikre poeng). Sensor honorerer presis anvendelse og «det lille ekstra». Prioritet: **kunne** (sikre poeng).
- **Innholdskontrakt:** Malen «presis definisjon + forankring + figur/eksempel + A/B-markør» demonstreres; deretter drillbank som dekker ALLE gjengangerbegrepene med fasitsvar i deloppgave-format og henvisning til teorikapitlet: signalfunksjon/marginalkostnad → 1.1; alternativkostnad → 1.2; svarnøkkelen (pris-signal vs. separat omfordeling) → 1.3; alternativverdi/strøm → 1.4; ekstern virkning/SMK → 2.1; lik pris → like MAC/avgift vs. kvoter/gratiskvote → 2.2; subsidie med/uten eksternalitet/elbil-feilargumentet → 2.3; de tre kriteriene → 2.4; næringsnøytralitet/«plukke vinnere» → 3.1; komparativt fortrinn/frihandelsgevinst → 4.1; toll pristaker (b+d)/konsentrert-spredt → 4.2; optimal toll/kjøpermakt/Heckscher-Ohlin → 4.3; skjermet/konkurranseutsatt/driftsbalanse → 4.4; inntektssikring/behovsprøvd/universell/borgerlønn → 5.1; vridningstap/grunnrente/badekar → 5.2; boligbeskatning/målrettet vs. generell → 5.3; markedssvikt-katalogen/styringssvikt → 6.1; knapp kapasitet/nest-best → 6.2. Engel-elastisitet < 1 → 1.3/1.4.
- **Oppgavesjangre:** Begreper (alle sjangre). Mønstereksempel: «Gjør kort rede for hva som skiller en subsidie med og uten positive eksterne effekter, gi ett eksempel på hver, og forklar hvorfor skillet avgjør om subsidien er forsvarlig.»
- **Typiske feil:** Definisjon uten anvendelse/forankring; utelate A/B-markøren; utflytende svar som stjeler tid fra hovedoppgaven; belære i stedet for å belyse.
- **Quiz: 14 · Flashcards: 50**

#### Kapittel 7.2: Modellbesvarelse: klima-/karbonprising-oppgaven (A vs. C)

- **id:** `econ3010-7-2` · **number:** 7.2 · **estimatedMinutes:** 50 · **prerequisites:** `econ3010-2-5`
- **Kapitteltype:** modellbesvarelse
- **description:** Én nyskrevet klima-utredning besvart på to nivåer, som viser presist hva som skiller A fra C i emnets signatursjanger.
- **Eksamensbelegg:** Signatursjangeren A (71 %). Viser sensorblikket i praksis. Prioritet: **perfekt** (mønster for besvarelsesnivå).
- **Innholdskontrakt (modellbesvarelse-DNA):** 1) **Nyskrevet oppgave** i reell sjanger (f.eks. «offentlig utredning om virkemidler mot utslipp i en sektor, med en fordelingsbekymring»). 2) `collapsible` **A-besvarelse** — full tekst med margnotater («her: avgrensning», «her: lik pris → like MAC», «her: subsidie-skillet — dette løfter til A», «her: gratiskvote-nyansen», «her: svarnøkkelen — separat kompensasjon», «her: refleksjon om forutsetninger»). 3) `collapsible` **Kommentert C-besvarelse** — korrekt men flat (priser utslippet riktig, men behandler all grønn subsidie som effektiv, foreslår avgiftsfritak for fordeling, ingen avgrensning), med notater om gapet opp til A. 4) `tip` **Sensorblikket** — momentliste og vektlegging + C-terskelen.
- **Oppgavesjangre:** A. Mønstereksempel: se innholdskontrakt.
- **Typiske feil:** (vises i C-besvarelsen) subsidie-skillet-fellen, gratiskvote-fellen, kompensasjon-som-fritak (svarnøkkelbrudd), momentliste uten avgrensning, belære.
- **Quiz: 8 · Flashcards: 10**

#### Kapittel 7.3: Øvingseksamen 1: to oppgaver 70/30 — handel + klima

- **id:** `econ3010-7-3` · **number:** 7.3 · **estimatedMinutes:** 180 · **prerequisites:** `econ3010-7-1`
- **Kapitteltype:** øvingseksamen (+ modellbesvarelse)
- **description:** Komplett 3-timers skoleeksamenssett etter V2025-malen (to obligatoriske oppgaver, 70/30), med handel som hovedoppgave.
- **Eksamensbelegg/miks:** Speiler V2025 (Oppg 1 = 70 % handel, Oppg 2 = 30 % klima). **Oppgave 1 (70 %) internasjonal handel:** nyskrevet case (f.eks. gjengjeldelsestoll mot en handelspartner) — frihandelsgevinst, toll pristaker (figur i ord, b+d), optimal toll ved kjøpermakt, Heckscher-Ohlin-fordeling, Norge vs. USA, kompensasjon framfor toll. **Oppgave 2 (30 %) klima:** offentlig utredning om et grønt virkemiddel med subsidie-skillet og fordelingskompensasjon. Alle nyskrevne. Løsningsforslag som **A-besvarelse** i `collapsible` per oppgave (med figurbeskrivelser i ord), **kommentert C-besvarelse på oppgave 1**, `tip`-notat om C-terskel/vekting og tidsbudsjett (≈ 125/55 min).
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 7.4: Øvingseksamen 2: to oppgaver 70/30 — fordeling/skatt + næringsstøtte

- **id:** `econ3010-7-4` · **number:** 7.4 · **estimatedMinutes:** 180 · **prerequisites:** `econ3010-7-3`
- **Kapitteltype:** øvingseksamen (+ modellbesvarelse)
- **description:** Komplett sett med en anvendt fordelings-/effektivitetsoppgave som hovedoppgave og en næringsstøtte-oppgave som biooppgave.
- **Eksamensbelegg/miks:** Speiler den andre sannsynlige hovedprofilen (fordeling/skatt). **Oppgave 1 (70 %) fordeling + effektiv beskatning:** nyskrevet case (f.eks. reform av en støtteordning + finansiering) — inntektssikring vs. behovsprøvd vs. universell, arbeidstilbud, grunnrente/badekarsdiagram, svarnøkkelen (separat omfordeling). **Oppgave 2 (30 %) næringsstøtte:** «hva sier du som samfunnsøkonom?» om støtte til en bransje — alternativkostnad, markedssvikt-unntakene. Løsningsforslag som **A-besvarelse** + **kommentert C-besvarelse på oppgave 1**, med vektings-`tip` og tidsbudsjett (≈ 125/55 min).
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 7.5: Øvingseksamen 3: to oppgaver 70/30 — strøm/allokering + nest-best

- **id:** `econ3010-7-5` · **number:** 7.5 · **estimatedMinutes:** 180 · **prerequisites:** `econ3010-7-4`
- **Kapitteltype:** øvingseksamen (+ modellbesvarelse)
- **description:** Komplett sett med strøm-/allokeringsoppgave som hovedoppgave og en nest-best-/knapp-kapasitet-oppgave som biooppgave.
- **Eksamensbelegg/miks:** Speiler en aktuell strømkrise-innramming + utsatt-favoritten. **Oppgave 1 (70 %) energi/allokering:** nyskrevet case (priskrise) — kraftens alternativverdi, subsidie/eksportbegrensning vs. signal, Engel-elastisitet, kontantutbetaling vs. prissubsidie (svarnøkkelen). **Oppgave 2 (30 %) nest-best/knapp kapasitet:** tidsdifferensiert prising (f.eks. vei/kollektiv/parkering) med nest-best-forbeholdet. Løsningsforslag som **A-besvarelse** + **kommentert C-besvarelse på oppgave 1**, med vektings-`tip` og tidsbudsjett (≈ 125/55 min). Sammen dekker de tre settene sjangrene A, B, C, D, E, F, H; G dekkes av prøve 6.D.
- **Quiz: 6 · Flashcards: 0**

**Prøve-kvote Del 7:** ingen egne prøver (delen består av begrepsdrill + modellbesvarelse + 3 øvingseksamener).

---

### Kvotesammendrag (quiz/flashcards/prøver) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1–0.3 | 10+10+12 = **32** | 10+10+14 = **34** | 0 |
| 1 | 1.1–1.4 | 22+20+22+20 = **84** | 26+24+26+24 = **100** | 4 |
| 2 | 2.1–2.5 | 20+24+22+18+14 = **98** | 24+28+26+22+10 = **110** | 4 |
| 3 | 3.1–3.3 | 22+18+14 = **54** | 26+22+10 = **58** | 4 |
| 4 | 4.1–4.5 | 20+22+20+18+14 = **94** | 24+26+24+22+10 = **106** | 4 |
| 5 | 5.1–5.4 | 22+22+16+14 = **74** | 26+26+20+10 = **82** | 4 |
| 6 | 6.1–6.3 | 20+18+14 = **52** | 24+22+18 = **64** | 4 |
| 7 | 7.1–7.5 | 14+8+6+6+6 = **40** | 50+10+0+0+0 = **60** | 0 (3 øvingseksamener) |
| **Sum** | **32 kap.** | **528 ≥ 500 ✓** | **614 (sikt 550–650) ✓** | **24 + 3 ØE** |

**Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.**
Fordelingen speiler frekvens og natur: Del 2 (klima, ryggraden, 71 %) er størst
(98 quiz / 110 flashcards), fulgt av Del 4 (handel, stigende 70 %-oppgave) og Del 1
(fundamentet/svarnøkkelen). **Om tetthetsnivået (jf. PRODUKSJONSLOYPE «≥500 er
GULV»):** ECON3010 er et **begrepsrikt drøftingsfag** med tung anvendelses- og
mekanismeforankring (signalfunksjon, alternativkostnad, marginal rensekostnad,
subsidie-skillet, gratiskvote-nyansen, komparativt fortrinn, optimal toll,
Heckscher-Ohlin, inntektssikring/behovsprøvd/universell, grunnrente, badekar,
nest-best), og begrep↔mekanisme-koblinger er ideelt flashcard-råstoff — derfor er
flashcards (614) satt **godt over** quiz (528) og innenfor 550–650-siktet. Faget er
verbalt og drøftende (ikke rent faktatungt pugg), så flashcards når ikke det rene
puggefagets 700–800. 32 kapitler tilsier en sum tydelig over 500-gulvet, som
reflektert.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–6, 24 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med løsningsforslag
(A-besvarelse med figurbeskrivelser i ord der naturlig, avgrensning og anvendelse)
og poengfordeling. Omfang i minutter. Prøvekapitler bygges som `econ3010-<del>-prove`,
chapterNumber `<del>.P` (jf. byggekontrakten). Prøvene per del er spesifisert i
«Prøve-kvote Del N»-linjene under hver del over. Kort oppsummert dekker de:

- **Del 1:** signalfunksjon, alternativkostnad, svarnøkkelen (prisvridning vs. separat omfordeling), strøm/alternativverdi.
- **Del 2:** eksternalitet/prise skaden, karbonprising-mekanikk + gratiskvote, subsidie-skillet + elbil, full klima-utredning mot tre kriterier.
- **Del 3:** næringsnøytralitet/alternativkostnad, forsvarlig vs. uforsvarlig støtte, miljøkostnad som reell kostnad, full «hva sier du som samfunnsøkonom?».
- **Del 4:** frihandelsgevinst, toll pristaker (b+d)/konsentrert-spredt, optimal toll/Heckscher-Ohlin, full handelsoppgave/eksport-som-mål.
- **Del 5:** inntektssikring/behovsprøvd/universell/borgerlønn, effektiv beskatning/badekar, boligbeskatning/kompensasjon, full fordelings-/skatteoppgave.
- **Del 6:** markedssvikt-katalog/styringssvikt, knapp kapasitet/kø-rasjonering, nest-best-avveiing, krisepolitikk med avgrensning.

### Øvingseksamener (3 komplette sett — se kap. 7.3–7.5)

| Sett | Mal den speiler | Miks (70 % / 30 %) |
|---|---|---|
| Øvingseksamen 1 (kap. 7.3) | V2025 skoleeksamen (2 oppg., 70/30) | Internasjonal handel (hoved) + klima/karbonprising (bi) |
| Øvingseksamen 2 (kap. 7.4) | V2025-profil, alternativ hovedoppgave | Fordeling + effektiv beskatning (hoved) + næringsstøtte (bi) |
| Øvingseksamen 3 (kap. 7.5) | V2025-profil, aktuell strøm-innramming | Energi/allokering (hoved) + nest-best/knapp kapasitet (bi) |

Hver øvingseksamen har full A-besvarelse per oppgave **og** en kommentert
C-besvarelse på 70 %-oppgaven + sensorblikk — sammen med kap. 7.2 gir det **≥3
modellbesvarelser** (DNA-drofting-kravet). Til sammen dekker settene sjangrene A–F
og H minst én gang; G (makro/krise) dekkes av prøve 6.D. **Alle øvingseksamener er i
skoleeksamensform (to oppgaver, ulik vekt, verbalt, ingen kildeapparat).**

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — 3-timers skoleeksamen fra V2025, to obligatoriske
   oppgaver med ulik vekt (70/30), A–F med C-terskel, verbalt, ingen kildeapparat,
   INGEN regning; formatskiftet fra essay; prognosen (fra kap. 0.1).
2. **Svarnøkkelen** — den røde tråden: *priser skal reflektere reelle
   marginalkostnader og fungere som signaler; fordeling løses med separate
   omfordelingsverktøy, ikke ved å vri prisene* — med operasjonaliseringen per
   temadel (klima, strøm, næringsstøtte, handel, fordeling/skatt) fra §1.
3. **Prioriteringskartet** — temafrekvens omgjort til tre lesenivåer: **perfekt**
   (Del 1 signalfunksjon/fundament, Del 2 klima [ryggraden], Del 3 næringsstøtte,
   Del 4 handel), **kunne** (Del 5 fordeling/skatt), **kjenne** (Del 6 markedssvikt/
   nest-best/makro).
4. **Drøftingshåndverket** — «belyse, ikke belære»-malen fra kap. 0.2
   (avgrens selv → anvend, ikke referer → drøft begge sider → reflekter om
   forutsetninger) + avgrensningstrening (mikro vs. makro, formål før virkemiddel,
   ikke godta premisset) + C→A-løftet.
5. **Sjangerguiden** — oppgavetypene A–H med løsningsoppskriftene fra drill-
   kapitlene (2.5, 3.3, 4.5, 5.4) i kortform: klimaens tre-kriterie-algoritme,
   næringsstøttens markedssvikt-spørsmål + alternativkostnad, handelens
   pristaker-vs-kjøpermakt-prosedyre, fordelingens ordningsvalg + finansiering.
6. **A/B-differensiatorene** — de åtte andreordens-poengene fra §1 (subsidie-skillet,
   elbil-feilargumentet, gratiskvote-nyansen, alternativkostnad mot næringsstøtte,
   prisens alternativverdi, fordeling separat + Engel, toll konsentrert/spredt +
   optimal toll, inntektssikring vs. behovsprøvd/universell), hver med
   kapittelhenvisning.
7. **Feilkatalogen** — de typiske feilene fra analysen §5 samlet, hver med henvisning
   til kapitlet som forebygger den (momentliste, makro-i-mikro, belære, subsidie-
   skillet, fordeling-mot-prising, godta-premisset, overse-alternativverdi, blande-
   ordningstyper, løsrevet-empiri).
8. **Figurbiblioteket i ord** — de fire standardfigurene fra kap. 0.3 (partiell
   markedsmodell, badekarsdiagram, produksjonsmulighetskurve, gevinst-ved-handel/
   toll-figur) med merkekrav — **støtte, ikke krav; aldri utregning**.
9. **Pensumkart** — modell/kilde → begreper de forankrer (ECON1210 → partiell
   marked/Pigou; ECON2610/Krugman-Obstfeld-Melitz → komparative fortrinn/optimal
   toll/Heckscher-Ohlin; NOU 2015:15 → tre kriterier; NOU 2019:18/2014:13 → effektiv
   skatt/bolig; Hoel → brun/grønn; von der Fehr → kraftmarked; Nyborg → fagtekst;
   Mehlum & Torvik → corona) — flashcard-råstoff, `(verifiser)` mot pensum.
10. **Studieløp** — anbefalt progresjon (8-ukers og 3-ukers intensivvariant):
    Del 0 → 1 (svarnøkkelen først) → 2 (klima — ryggraden) → 4 (handel) → 3 → 5,
    deretter 6, prøver underveis, de tre øvingseksamenene de siste ukene under
    tidspress (180 min, to oppgaver 70/30).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `econ3010` med alle 32
   kapitler (id/number/title/description/estimatedMinutes/topics/competenceGoals/
   prerequisites) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra makrostruktur-
   tabellen (§2). **NB:** `number` SKAL være del-basert («2.3»), aldri lineær.
2. **Del 0** (kap. 0.1–0.3) — etablerer sjangernavnene A–H, frekvenstallene,
   drøftingshåndverket, svarnøkkelen og figurverktøykassen som resten refererer til.
3. **Fundamentet/svarnøkkelen**: Del 1 (signalfunksjon, alternativkostnad,
   effektivitet-vs-fordeling, strøm) — den røde tråden resten hviler på.
4. **Ryggraden tidlig**: Del 2 (klima) bygges rett etter Del 1, fordi den bærer
   71 % av settene og er størst. Deretter Del 4 (handel — stigende, 70 %-oppgave),
   Del 3 (næringsstøtte), Del 5 (fordeling/skatt).
5. Del 6 (markedssvikt/nest-best/makro-beredskap).
6. Del 7 til slutt (begrepsdrill, modellbesvarelse og øvingseksamener gjenbruker
   alt).
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert;
   prøvene legges i prøvekapitler per del (`econ3010-<del>-prove`, chapterNumber
   `<del>.P`).

**Batching for byggebølgen (fase 4):** én agent per hel del; Del 2 og Del 4 (5 kap
hver, tunge) kan deles, men gi begge agentene HELE delens kontrakter. Del 7
(øvingseksamener) bygges av én agent som leser HELE skjelettet.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (generer via `json.dump`; escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **INGEN REGNING**: tekstsøk — ingen utregnede tallsvar/likevektspriser/
  overskuddsarealer/komparative-fortrinn-fasit; ingen derivasjon/optimeringsformler;
  forbudte mønstre (avansert spillteori/mekanismedesign/auksjoner som pensum, tung
  makromodellering, kildeapparat-/ordgrensekrav) gir null treff. Kvalitative
  talleksempler *uten* utregnet svar er de eneste tallene.
- [ ] **Figur = valgfri støtte**: hvert eksempel/løsningsforslag med figur har både
  figurbeskrivelse i ord (akser, kurver, skift, arealer a/b/c/d, MAC, SMK navngitt)
  og verbal mekanisme; **verbalt uten figur fremstilles aldri som mangelfullt;
  arealer navngis, aldri regnes ut**.
- [ ] **Kapittel-DNA (drøfting)**: hvert teorikapittel har Eksamensvinkel-`tip`
  (med tallene fra dette skjelettet), Temaet-i-landskapet-`text`, Kjernebegreper-
  `definition` MED forankring, Drøftingsakser-`text`, Anvendelse-`example`, Typiske
  feil-`warning`, «Belyse, ikke belære»-`tip` + avgrensningstrening, oppgaver
  (begreps- + kortdrøftings- + drøftingsoppgaver med momentliste/disposisjon som
  løsning), Pensumkart-`collapsible`. Drillkapitler (2.5, 3.3, 4.5, 5.4):
  løsningsoppskrift + sensor-kommentert case + 8–12 oppgaver. Modellbesvarelse (7.2)
  + øvingseksamener (7.3–7.5): A-besvarelse + kommentert C-besvarelse + sensorblikk.
- [ ] **Svarnøkkelen synlig**: pris-signal-vs-separat-omfordeling er eksplisitt
  markert (`tip` «Svarnøkkelen») i kap. 1.3 og gjenbrukt i 1.4, 2.4, 3.1, 4.2, 5.3.
- [ ] **Forkunnskaper/kryssbok**: hvert kapittel har Forkunnskaper-blokk;
  **ECON1210-referanser som KLARTEKST** med id (ikke live lenke — ikke bygget);
  ECON1310-lenke (`/bok/econ1310/econ1310-0-1`) i kap. 4.4, spesifikk driftsbalanse-
  id `(verifiser id)`; ECON2610 kun som pensumkilde (Krugman/Obstfeld/Melitz), ingen
  lenke; interne prerequisites peker på eksisterende econ3010-kapitler. Symbol-/
  formelliste-`collapsible` i delkapitler som bruker MK/SMK/MSK/MAC/KO/PO/SO/a-b-c-d.
- [ ] **Forankring EKTE**: kun kildene i §1 (ECON1210, Krugman/Obstfeld/Melitz, NOU
  2015:15/2019:18/2014:13/2017:6, Hoel, von der Fehr, Nyborg, Mehlum & Torvik);
  ingen oppdiktede referanser; `(verifiser)`-markører beholdt til fase 6.
- [ ] **A/B-differensiatorene**: de åtte andreordens-poengene fra §1 er eksplisitt
  markert (`tip`/`warning`) i sine kapitler (subsidie-skillet + elbil → 2.3;
  gratiskvote → 2.2; alternativkostnad → 3.1; alternativverdi → 1.4; fordeling
  separat + Engel → 1.3/5.3; toll konsentrert-spredt/optimal → 4.2/4.3;
  inntektssikring vs. behovsprøvd/universell → 5.1).
- [ ] **Quiz-sum ≥ 528 og flashcard-sum ≥ 614** per kvotetabellen (§3 er
  autoritativ; kontrollsummér).
- [ ] **Prøver**: 4 per temadel 1–6 (24 stk) + 3 øvingseksamener; settene og prøvene
  dekker samlet sjangrene A–H minst én gang.
- [ ] **Skoleeksamensform**: øvingseksamenene (7.3–7.5) har to obligatoriske oppgaver
  med ulik vekt (70/30), verbale løsningsforslag, tidsbudsjett i minutter, INGEN
  kildeapparat/ordgrense.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne case, bransjer og formuleringer;
  ingen formuleringer fra reelle sett/sensorveiledninger (skjelettets mønster-
  eksempler er selv omskrivninger og skal varieres videre); pensum refereres, aldri
  siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
  (200 + kapittelspesifikk streng), jf. lærdommen om `getChapterMeta`.
