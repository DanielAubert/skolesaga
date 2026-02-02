/**
 * Biologi 1 - Kapittel 2.3: Fotosyntese
 *
 * Dette kapittelet dekker fotosyntesens to hovedfaser: lysreaksjonene og Calvin-syklus.
 * Elevene lærer om kloroplastens oppbygning, lysabsorpsjon, elektrontransportkjeden,
 * kjemiosmose, karbonfiksering og faktorer som påvirker fotosyntesehastigheten.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_BIO1_2_3: TextbookChapter = {
  id: 'bio1-2-3',
  courseId: 'biologi-1',
  chapterNumber: '2.3',
  title: 'Fotosyntese',
  description:
    'Lysreaksjonene og Calvin-syklus – hvordan planter omdanner lysenergi til kjemisk energi.',
  estimatedMinutes: 85,
  competenceGoals: [
    'Gjøre rede for fotosyntesens totalreaksjon og betydningen for livet på jorda',
    'Beskrive kloroplastens oppbygning og knytte strukturene til fotosyntesens delreaksjoner',
    'Forklare lysreaksjonene, inkludert fotosystem II, elektrontransportkjeden og fotosystem I',
    'Forklare hvordan ATP dannes ved kjemiosmose i tylakoidmembranen',
    'Beskrive Calvin-syklus med karbonfiksering, reduksjon og regenerering',
    'Drøfte faktorer som påvirker fotosyntesehastigheten og begrepet begrensende faktor',
    'Forklare sammenhengen mellom fotosyntese og celleånding',
  ],
  content: [
    // ====================================================================
    // INNLEDNING
    // ====================================================================
    {
      id: 'bio1-2-3-intro',
      type: 'text',
      title: 'Fotosyntese – grunnlaget for nesten alt liv',
      content: `Nesten alt liv på jorda er avhengig av fotosyntesen. I denne prosessen fanger planter, alger og cyanobakterier opp lysenergi fra sola og omdanner den til kjemisk energi i form av glukose. Samtidig frigjøres oksygen som et biprodukt – den oksygenen vi puster inn.

Fotosyntesens **totalreaksjon** kan skrives slik:

$$6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{lysenergi}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$$

Seks molekyler karbondioksid og seks molekyler vann omdannes til ett molekyl glukose og seks molekyler oksygen. Energien som driver reaksjonen, kommer fra sollys.

Fotosyntesen er en **endergonisk** prosess – den krever tilførsel av energi. Denne energien lagres i de kjemiske bindingene i glukose. Når levende organismer senere bryter ned glukose i celleåndingen, frigjøres denne energien igjen.

**Hvorfor er fotosyntesen så viktig?**

- **Energikilde:** Fotosyntesen er den viktigste prosessen som omdanner solenergi til kjemisk energi som organismer kan bruke.
- **Oksygenproduksjon:** Nesten all oksygen i atmosfæren stammer fra fotosyntesen.
- **Karbonfiksering:** CO₂ fra atmosfæren bygges inn i organiske molekyler – dette er grunnlaget for alle næringskjeder.
- **Fossilt brensel:** Kull, olje og naturgass er rester av organismer som en gang fikk sin energi fra fotosyntesen.

Fotosyntesen består av to hovedfaser: **lysreaksjonene** (som skjer i tylakoidmembranen) og **Calvin-syklus** (som skjer i stroma). Vi skal se nærmere på begge.`,
    },

    // ====================================================================
    // DEFINISJON: FOTOSYNTESE
    // ====================================================================
    {
      id: 'bio1-2-3-def-fotosyntese',
      type: 'definition',
      title: 'Fotosyntese',
      content:
        '**Fotosyntese** er en biokjemisk prosess der planter, alger og cyanobakterier bruker lysenergi til å omdanne karbondioksid (CO₂) og vann (H₂O) til glukose (C₆H₁₂O₆) og oksygen (O₂). Prosessen finner sted i kloroplastene og deles i lysreaksjoner og Calvin-syklus.',
    },

    // ====================================================================
    // KLOROPLASTENS OPPBYGNING
    // ====================================================================
    {
      id: 'bio1-2-3-kloroplast',
      type: 'text',
      title: 'Kloroplastens oppbygning',
      content: `Fotosyntesen skjer i **kloroplaster** – spesialiserte organeller som finnes i planteceller og algeceller. Kloroplastene er typisk 5–10 μm lange og linseformede. En enkelt bladcelle kan inneholde 20–100 kloroplaster.

## Membraner og rom

Kloroplasten har en **dobbel membran**:

- **Ytre membran:** Relativt gjennomtrengelig, slipper gjennom små molekyler.
- **Indre membran:** Mer selektiv, kontrollerer hva som passerer inn og ut av kloroplasten.

Mellom de to membranene finnes et smalt **intermembranrom**. Innenfor den indre membranen finner vi **stroma** – en tyktflytende væske der Calvin-syklus foregår.

## Tylakoidene

Inne i stroma finnes et tredje membransystem: **tylakoidene**. Tylakoidene er flate, skiveformede membransekker. Flere tylakoidskiver kan ligge stablet oppå hverandre i strukturer som kalles **grana** (entall: granum). Tylakoidene som forbinder granaene, kalles **stromalameller** (eller intergranatylakoider).

**Tylakoidmembranen** er spesielt viktig fordi den inneholder:
- Fotosystem I og fotosystem II (med klorofyll og andre pigmenter)
- Elektrontransportkjeden (plastoquinon, cytokrom b₆f-komplekset, plastocyanin)
- ATP-syntase

Rommet inne i tylakoidene kalles **tylakoidlumen**. Her bygges det opp en høy konsentrasjon av H⁺-ioner under lysreaksjonene – dette er avgjørende for ATP-produksjonen.

## Oppsummering av kloroplastens struktur

| Struktur | Funksjon |
|----------|----------|
| Ytre membran | Beskyttelse, gjennomslipp av små molekyler |
| Indre membran | Selektiv transport |
| Stroma | Calvin-syklus (karbonfiksering) |
| Tylakoidmembran | Lysreaksjonene (fotosystemene, elektrontransport, ATP-syntase) |
| Tylakoidlumen | Oppsamling av H⁺ (protonreservoar) |
| Grana | Stabler av tylakoider, øker overflatearealet |`,
    },

    // ====================================================================
    // DEFINISJON: TYLAKOID
    // ====================================================================
    {
      id: 'bio1-2-3-def-tylakoid',
      type: 'definition',
      title: 'Tylakoid',
      content:
        'Et **tylakoid** er en flat, membranbundet sekk inne i kloroplasten. Tylakoidmembranen inneholder fotosystemene og elektrontransportkjeden der lysreaksjonene foregår. Flere tylakoider stablet oppå hverandre danner et **granum**.',
    },

    // ====================================================================
    // DEFINISJON: STROMA
    // ====================================================================
    {
      id: 'bio1-2-3-def-stroma',
      type: 'definition',
      title: 'Stroma',
      content:
        '**Stroma** er den tyktflytende væsken inne i kloroplasten, utenfor tylakoidene. Stroma inneholder enzymer for Calvin-syklus (blant annet rubisco), samt kloroplastens eget DNA, ribosomer og andre molekyler som trengs for biosyntese.',
    },

    // ====================================================================
    // LYS OG PIGMENTER
    // ====================================================================
    {
      id: 'bio1-2-3-lys-pigmenter',
      type: 'text',
      title: 'Lys og pigmenter',
      content: `Fotosyntesen drives av lysenergi. For å forstå hvordan planter fanger lys, må vi først forstå noen egenskaper ved lys.

## Elektromagnetisk stråling

Lys er en form for **elektromagnetisk stråling**. Det elektromagnetiske spekteret strekker seg fra radiobølger (lang bølgelengde, lav energi) til gammastråler (kort bølgelengde, høy energi). **Synlig lys** – den delen av spekteret som det menneskelige øyet kan oppfatte – har bølgelengder fra omtrent **380 nm (fiolett) til 750 nm (rødt)**.

Energien i lys er omvendt proporsjonal med bølgelengden: kort bølgelengde betyr høy energi. Blått lys (ca. 450 nm) har altså mer energi per foton enn rødt lys (ca. 680 nm).

## Klorofyll – det grønne pigmentet

De viktigste pigmentene i fotosyntesen er **klorofyll a** og **klorofyll b**. Begge absorberer lys mest effektivt i det blå (ca. 430–460 nm) og det røde (ca. 640–680 nm) området av spekteret. Grønt lys (ca. 500–570 nm) absorberes dårlig – det reflekteres i stedet, og det er derfor blader ser grønne ut.

**Klorofyll a** er det primære pigmentet. Det finnes i reaksjonssenteret i begge fotosystemene og er det eneste pigmentet som direkte deltar i de fotokjemiske reaksjonene.

**Klorofyll b** er et **tilleggspigment** (aksessorisk pigment). Det absorberer lys ved litt andre bølgelengder enn klorofyll a, og overfører den absorberte energien videre til klorofyll a. På denne måten utvider klorofyll b det spekteret av lys som kan utnyttes i fotosyntesen.

## Andre pigmenter: karotenoider

**Karotenoider** er en gruppe gule, oransje og røde pigmenter som også finnes i kloroplastene. De har to viktige funksjoner:

1. **Tilleggspigmenter:** De absorberer blågrønt lys (ca. 400–500 nm) og overfører energien til klorofyll a. Slik fanges mer av lysenergi.
2. **Beskyttelse:** Karotenoider beskytter klorofyll mot skader fra for mye lys (fotoproteksjon). De avleder overskuddsenergi som varme og nøytraliserer skadelige reaktive oksygenforbindelser.

## Absorpsjonsspekteret

Hvert pigment har sitt eget **absorpsjonsspektrum** – en grafisk fremstilling av hvor mye lys pigmentet absorberer ved ulike bølgelengder. Dersom vi sammenligner absorpsjonsspektrene med **aksjonsspekteret** for fotosyntese (som viser fotosyntesehastigheten ved ulike bølgelengder), ser vi at de overlapper godt. Dette bekrefter at lys absorbert av pigmentene faktisk driver fotosyntesen.

## Hvorfor skifter bladene farge om høsten?

Om høsten brytes klorofyll ned i løvtrær. Karotenoider (gult og oransje) og **antocyaniner** (rødt og lilla) blir da synlige. Karotenoidene var der hele tiden, men ble maskert av det dominerende grønne klorofyllet. Antocyaniner produseres aktivt om høsten i noen treslag og fungerer trolig som en form for solbeskyttelse mens treet henter verdifulle næringsstoffer tilbake fra bladene.`,
    },

    // ====================================================================
    // DEFINISJON: KLOROFYLL
    // ====================================================================
    {
      id: 'bio1-2-3-def-klorofyll',
      type: 'definition',
      title: 'Klorofyll',
      content:
        '**Klorofyll** er det grønne pigmentet i kloroplaster som absorberer lysenergi og driver fotosyntesen. **Klorofyll a** er det primære pigmentet i reaksjonssentrene, mens **klorofyll b** er et tilleggspigment som utvider absorpsjonsspekteret. Klorofyll absorberer blått og rødt lys mest effektivt og reflekterer grønt lys.',
    },

    // ====================================================================
    // LYSREAKSJONENE – OVERSIKT
    // ====================================================================
    {
      id: 'bio1-2-3-lysreaksjoner-oversikt',
      type: 'text',
      title: 'Lysreaksjonene – en oversikt',
      content: `**Lysreaksjonene** finner sted i **tylakoidmembranen** og er direkte avhengige av lys. De omdanner lysenergi til kjemisk energi i form av **ATP** og **NADPH**, og spalter vann slik at **oksygen** (O₂) frigjøres.

De viktigste komponentene i lysreaksjonene er:

1. **Fotosystem II** (PS II, med reaksjonssenter P680)
2. **Elektrontransportkjeden** (plastoquinon → cytokrom b₆f-komplekset → plastocyanin)
3. **Fotosystem I** (PS I, med reaksjonssenter P700)
4. **Ferredoksin og NADP⁺-reduktase**
5. **ATP-syntase**

Elektronene strømmer fra vann, gjennom de to fotosystemene og elektrontransportkjeden, og ender opp i NADPH. Underveis bygges det opp en protongradie nt over tylakoidmembranen som driver ATP-syntesen. Denne prosessen kalles **ikke-syklisk elektronstrøm** (eller lineær elektronstrøm) og er hovedveien for energiproduksjon i lysreaksjonene.

La oss se nærmere på hvert trinn.`,
    },

    // ====================================================================
    // FOTOSYSTEM II
    // ====================================================================
    {
      id: 'bio1-2-3-psII',
      type: 'text',
      title: 'Fotosystem II (P680)',
      content: `Lysreaksjonene starter i **fotosystem II** (PS II). Til tross for navnet «II» virker dette fotosystemet først i den lineære elektronstrømmen – navnet stammer fra rekkefølgen fotosystemene ble oppdaget.

## Reaksjonssenteret P680

Kjernen i PS II er reaksjonssenteret **P680** – et spesielt klorofyll a-molekyl som absorberer lys med bølgelengde 680 nm mest effektivt. Rundt P680 sitter mange **antennepigementer** (klorofyll a, klorofyll b og karotenoider) som fanger opp lys og overfører energien til P680.

## Hva skjer i fotosystem II?

**Trinn 1 – Lysabsorpsjon:**
Antennepigmentene i PS II absorberer fotoner (lyspartikler). Energien sendes fra pigment til pigment inntil den når P680.

**Trinn 2 – Elektroneksitasjon:**
P680 mottar energien og et elektron eksiteres – det løftes til et høyere energinivå. Dette høyenergiske elektronet ($e^-$) forlater P680 og overføres til en primær elektronakseptor. P680 har nå tapt et elektron og er blitt **P680⁺**, et svært sterkt oksideringsmiddel.

**Trinn 3 – Vannspalting (fotolyse):**
For å erstatte det tapte elektronet spaltes vann:

$$2\\text{H}_2\\text{O} \\rightarrow 4\\text{H}^+ + 4e^- + \\text{O}_2$$

Elektronene ($e^-$) erstatter de tapte elektronene i P680. Protonene ($\\text{H}^+$) frigjøres inn i tylakoidlumen og bidrar til protongradient en. Oksygenet ($\\text{O}_2$) er et biprodukt – det slippes ut og er den oksygenen vi puster inn.`,
    },

    // ====================================================================
    // DEFINISJON: FOTOLYSE
    // ====================================================================
    {
      id: 'bio1-2-3-def-fotolyse',
      type: 'definition',
      title: 'Fotolyse',
      content:
        '**Fotolyse** (fotolytisk spalting av vann) er prosessen der vann spaltes i fotosystem II ved hjelp av lysenergi: $2\\text{H}_2\\text{O} \\rightarrow 4\\text{H}^+ + 4e^- + \\text{O}_2$. Elektronene erstatter de som P680 har mistet, protonene bidrar til protongradient en, og oksygen frigjøres som biprodukt.',
    },

    // ====================================================================
    // ELEKTRONTRANSPORTKJEDEN
    // ====================================================================
    {
      id: 'bio1-2-3-etk',
      type: 'text',
      title: 'Elektrontransportkjeden mellom PS II og PS I',
      content: `Det eksiterte elektronet fra PS II har høy energi. Denne energien brukes til å pumpe protoner (H⁺) over tylakoidmembranen mens elektronet transporteres fra PS II til PS I gjennom en kjede av elektronbærere.

## Transportkjeden steg for steg

**1. Plastoquinon (PQ)**
Elektronet fra PS II overføres til **plastoquinon** (PQ), et lite, mobilt molekyl i tylakoidmembranen. Plastoquinon tar opp to elektroner og to protoner (H⁺) fra stroma og blir til **plastoquinol** (PQH₂). Plastoquinol beveger seg gjennom membranen til neste kompleks.

**2. Cytokrom b₆f-komplekset**
Plastoquinol leverer sine elektroner til **cytokrom b₆f-komplekset** – et stort proteinkompleks i tylakoidmembranen. I dette komplekset skjer det avgjørende: mens elektronene passerer gjennom komplekset, brukes energien til å **pumpe protoner (H⁺) fra stroma inn i tylakoidlumen**.

Denne aktive pumpingen bygger opp en **protongradie nt** – konsentrasjonen av H⁺ blir mye høyere i lumen enn i stroma. Denne gradienten er en form for lagret energi (potensiell energi) som senere skal drive ATP-syntasen.

**3. Plastocyanin (PC)**
Fra cytokrom b₆f-komplekset overføres elektronene til **plastocyanin** (PC), et lite, løselig kobberprotein i tylakoidlumen. Plastocyanin frakter elektronene videre til fotosystem I.

## Energitrappen

For hvert trinn i elektrontransportkjeden mister elektronet litt energi. Denne energien brukes altså ikke bare til å flytte elektronet – den brukes til å gjøre arbeid, nemlig å pumpe H⁺-ioner. Det er som en ball som ruller nedover en trapp og driver et vannhjul på veien ned.`,
    },

    // ====================================================================
    // FOTOSYSTEM I
    // ====================================================================
    {
      id: 'bio1-2-3-psI',
      type: 'text',
      title: 'Fotosystem I (P700) og NADPH-produksjon',
      content: `**Fotosystem I** (PS I) har reaksjonssenteret **P700** – et klorofyll a-molekyl som absorberer lys med bølgelengde 700 nm mest effektivt. PS I mottar elektroner fra plastocyanin og gir dem ny energi.

## Hva skjer i fotosystem I?

**Trinn 1 – Ny lysabsorpsjon:**
Akkurat som i PS II, absorberer antennepigmentene i PS I fotoner og sender energien til P700.

**Trinn 2 – Ny elektroneksitasjon:**
Elektronet i P700 eksiteres til et enda høyere energinivå enn i PS II. Det forlater P700 og overføres til en primær elektronakseptor. P700⁺ erstattes med elektronet som ankommer fra plastocyanin.

**Trinn 3 – Ferredoksin:**
Det eksiterte elektronet overføres til **ferredoksin** (Fd), et lite jernholdig protein på stromasiden av tylakoidmembranen.

**Trinn 4 – NADP⁺-reduktase og NADPH:**
Ferredoksin leverer elektronene til enzymet **NADP⁺-reduktase** (også kalt ferredoksin-NADP⁺-reduktase, FNR). Dette enzymet katalyserer reaksjonen:

$$\\text{NADP}^+ + 2e^- + \\text{H}^+ \\rightarrow \\text{NADPH}$$

NADP⁺ (nikotinamidadenindinukleotidfosfat) reduseres til **NADPH** – en energirik elektronbærer som skal brukes i Calvin-syklus. NADPH er altså et av de to «energiproduktene» fra lysreaksjonene, sammen med ATP.`,
    },

    // ====================================================================
    // ATP-SYNTASE OG KJEMIOSMOSE
    // ====================================================================
    {
      id: 'bio1-2-3-atp-syntase',
      type: 'text',
      title: 'ATP-syntase og kjemiosmose',
      content: `Under lysreaksjonene bygges det opp en betydelig **protongradie nt** over tylakoidmembranen. Konsentrasjonen av H⁺ i tylakoidlumen kan bli opptil **1000 ganger høyere** enn i stroma. Denne gradienten oppstår på grunn av tre prosesser:

1. **Vannspalting** i PS II frigjør H⁺ i lumen.
2. **Plastoquinon** frakter H⁺ fra stroma til lumen.
3. **Cytokrom b₆f-komplekset** pumper H⁺ fra stroma inn i lumen.

## Kjemiosmose

Protongradient en representerer lagret energi (som vann bak en demning). H⁺-ionene «vil» strømme tilbake til stroma for å utligne konsentrasjonsforskjellen, men tylakoidmembranen er ugjennomtrengelig for H⁺ – de kan bare passere gjennom én kanal: **ATP-syntase**.

**ATP-syntase** er et stort enzymkompleks som stikker gjennom tylakoidmembranen. Når H⁺-ioner strømmer gjennom ATP-syntasen (ned konsentrasjonsgradienten), roterer en del av enzymet – som en turbin drevet av vannstrøm. Denne mekaniske energien driver sammenkobling av ADP og uorganisk fosfat (Pᵢ) til **ATP**:

$$\\text{ADP} + \\text{P}_i \\xrightarrow{\\text{ATP-syntase}} \\text{ATP}$$

Denne prosessen – der en protongradie nt over en membran driver ATP-syntese – kalles **kjemiosmose**. Det er den samme mekanismen som brukes i mitokondrier under celleåndingen, men i kloroplasten er det tylakoidmembranen (ikke den indre mitokondriemembranen) som er involvert.

## Produkter fra lysreaksjonene

Lysreaksjonene produserer altså tre ting:

| Produkt | Funksjon |
|---------|----------|
| **ATP** | Energikilde for Calvin-syklus |
| **NADPH** | Elektronbærer for Calvin-syklus |
| **O₂** | Biprodukt – frigjøres til atmosfæren |`,
    },

    // ====================================================================
    // SYKLISK VS IKKE-SYKLISK ELEKTRONSTRØM
    // ====================================================================
    {
      id: 'bio1-2-3-syklisk',
      type: 'text',
      title: 'Ikke-syklisk og syklisk elektronstrøm',
      content: `Den prosessen vi har beskrevet så langt – der elektroner går fra vann, gjennom PS II, elektrontransportkjeden, PS I og videre til NADP⁺ – kalles **ikke-syklisk (lineær) elektronstrøm**. Dette er hovedveien og produserer både ATP og NADPH.

## Syklisk elektronstrøm

I tillegg finnes en alternativ vei kalt **syklisk elektronstrøm**. Her brukes bare fotosystem I:

1. Lys eksiterer et elektron i P700.
2. Elektronet overføres til ferredoksin.
3. I stedet for å gå til NADP⁺-reduktase, sendes elektronet **tilbake** til cytokrom b₆f-komplekset.
4. Cytokrom b₆f-komplekset pumper H⁺ inn i lumen (som vanlig).
5. Elektronet returnerer til PS I via plastocyanin.

Elektronet går altså i en syklus – det ender opp der det startet.

**Hva produserer syklisk elektronstrøm?**
- ATP (via protongradient og ATP-syntase)
- **Ikke** NADPH (elektronet går aldri til NADP⁺)
- **Ikke** O₂ (vann spaltes ikke, fordi PS II ikke er involvert)

**Hvorfor trengs syklisk elektronstrøm?**
Calvin-syklus bruker mer ATP enn NADPH (forholdet er 3:2). Den ikke-sykliske veien produserer ikke nok ATP i forhold til NADPH. Syklisk elektronstrøm kompenserer ved å produsere «ekstra» ATP uten å lage mer NADPH.`,
    },

    // ====================================================================
    // NOTE: SAMMENLIGNING LYSREAKSJONER OG CELLEÅNDING
    // ====================================================================
    {
      id: 'bio1-2-3-note-sammenligning',
      type: 'note',
      title: 'Kjemiosmose i kloroplasten vs. mitokondriet',
      content:
        'Kjemiosmose i kloroplasten og mitokondriet bygger på det samme prinsippet, men med noen forskjeller. I kloroplasten pumpes H⁺ inn i tylakoidlumen, og ATP lages på stromasiden. I mitokondriet pumpes H⁺ ut i intermembranrommet, og ATP lages i matriks. I begge tilfeller er det en protongradie nt som driver ATP-syntasen. Elektronkilden i kloroplasten er vann (H₂O), mens den i mitokondriet er NADH og FADH₂ fra nedbrytning av næringsstoffer.',
    },

    // ====================================================================
    // CALVIN-SYKLUS – OVERSIKT
    // ====================================================================
    {
      id: 'bio1-2-3-calvin-oversikt',
      type: 'text',
      title: 'Calvin-syklus – de lysuavhengige reaksjonene',
      content: `**Calvin-syklus** (også kalt de lysuavhengige reaksjonene eller mørke reaksjonene) foregår i **stroma** i kloroplasten. Selv om syklusen ikke direkte krever lys, er den avhengig av produktene fra lysreaksjonene – ATP og NADPH. Calvin-syklus foregår derfor i praksis bare når det er lyst.

Calvin-syklusen ble oppdaget av Melvin Calvin og medarbeidere på 1950-tallet, og arbeidet ga Calvin Nobelprisen i kjemi i 1961.

Syklusen har tre hovedtrinn:

1. **Karbonfiksering** – CO₂ bindes til et organisk molekyl
2. **Reduksjon** – det dannes G3P ved hjelp av ATP og NADPH
3. **Regenerering** – RuBP gjenoppbygges slik at syklusen kan fortsette

La oss se på hvert trinn.`,
    },

    // ====================================================================
    // CALVIN-SYKLUS: KARBONFIKSERING
    // ====================================================================
    {
      id: 'bio1-2-3-calvin-fiksering',
      type: 'text',
      title: 'Trinn 1: Karbonfiksering',
      content: `I karbonfikseringstrinnet kobles **CO₂** (et uorganisk, karbon-holdig molekyl fra lufta) til **RuBP** (ribulose-1,5-bisfosfat), et organisk molekyl med fem karbonatomer. Produktet er et ustabilt seks-karbonforbindelse som umiddelbart spaltes til to molekyler **3-PGA** (3-fosfoglyserat), som har tre karbonatomer hver.

$$\\text{CO}_2 + \\text{RuBP} \\;(5C) \\xrightarrow{\\text{rubisco}} 2 \\times \\text{3-PGA} \\;(3C)$$

Enzymet som katalyserer denne reaksjonen, heter **rubisco** (ribulose-1,5-bisfosfat-karboksylase/oksygenase). Rubisco er sannsynligvis det mest tallrike enzymet på jorda – det utgjør opptil 50 % av alt protein i et blad. Det er likevel et relativt tregt enzym (det fikser bare ca. 3–10 CO₂-molekyler per sekund), noe som kompenseres ved at planten har enorme mengder av det.`,
    },

    // ====================================================================
    // DEFINISJON: RUBISCO
    // ====================================================================
    {
      id: 'bio1-2-3-def-rubisco',
      type: 'definition',
      title: 'Rubisco',
      content:
        '**Rubisco** (ribulose-1,5-bisfosfat-karboksylase/oksygenase) er enzymet som katalyserer det første trinnet i Calvin-syklus: bindingen av CO₂ til RuBP. Rubisco er trolig det mest tallrike enzymet på jorda og finnes i stroma i kloroplastene.',
    },

    // ====================================================================
    // DEFINISJON: KARBONFIKSERING
    // ====================================================================
    {
      id: 'bio1-2-3-def-karbonfiksering',
      type: 'definition',
      title: 'Karbonfiksering',
      content:
        '**Karbonfiksering** er prosessen der uorganisk karbon (CO₂) omdannes til organiske forbindelser. I Calvin-syklus fikseres CO₂ ved at rubisco kobler det til RuBP (5C), slik at det dannes to molekyler 3-PGA (3C). Dette er det første trinnet der karbon fra atmosfæren bygges inn i organiske molekyler.',
    },

    // ====================================================================
    // CALVIN-SYKLUS: REDUKSJON OG REGENERERING
    // ====================================================================
    {
      id: 'bio1-2-3-calvin-reduksjon',
      type: 'text',
      title: 'Trinn 2 og 3: Reduksjon og regenerering',
      content: `## Trinn 2: Reduksjon

I reduksjonstrinnet omdannes 3-PGA til **G3P** (glyseraldehyd-3-fosfat) i to steg:

1. Først brukes **ATP** til å fosforylere 3-PGA (legge til en fosfatgruppe), slik at det dannes 1,3-bisfosfoglyserat.
2. Deretter brukes **NADPH** til å redusere (tilføre elektroner til) 1,3-bisfosfoglyserat, som omdannes til **G3P**. En fosfatgruppe frigjøres.

$$\\text{3-PGA} \\xrightarrow{\\text{ATP, NADPH}} \\text{G3P}$$

G3P er et viktig molekyl – det er et tre-karbon-sukker (en triose) som kan brukes til å bygge glukose og andre organiske forbindelser.

## Trinn 3: Regenerering av RuBP

For at syklusen skal kunne fortsette, må RuBP gjenoppbygges. Av seks G3P-molekyler (produsert fra tre omdreininger av syklusen) brukes **fem** til å regenerere tre RuBP-molekyler. Denne prosessen krever **ATP**.

Bare **ett G3P-molekyl** av de seks er nettogevinsten – dette er «overskuddet» som kan brukes til å bygge glukose og andre organiske molekyler.

## Regnestykket for tre omdreininger

For å fiksere tre CO₂-molekyler (tre omdreininger av Calvin-syklus):

| Forbruk | Mengde |
|---------|--------|
| CO₂ | 3 molekyler |
| ATP | 9 molekyler |
| NADPH | 6 molekyler |

| Produkt | Mengde |
|---------|--------|
| G3P (netto) | 1 molekyl |
| ADP + Pᵢ | 9 |
| NADP⁺ | 6 |

For å lage ett molekyl **glukose** (C₆H₁₂O₆) trengs det to G3P-molekyler, altså **seks** omdreininger av Calvin-syklus, med forbruk av **18 ATP** og **12 NADPH**.`,
    },

    // ====================================================================
    // DEFINISJON: CALVIN-SYKLUS
    // ====================================================================
    {
      id: 'bio1-2-3-def-calvin',
      type: 'definition',
      title: 'Calvin-syklus',
      content:
        '**Calvin-syklus** er den sykliske reaksjonsveien i stroma der CO₂ fikseres til organiske forbindelser. Syklusen har tre trinn: (1) karbonfiksering (CO₂ + RuBP → 2 × 3-PGA), (2) reduksjon (3-PGA → G3P, bruker ATP og NADPH) og (3) regenerering av RuBP (bruker ATP). Nettoresultatet av tre omdreininger er ett G3P-molekyl.',
    },

    // ====================================================================
    // EKSEMPEL: KARBONATOMETS REISE
    // ====================================================================
    {
      id: 'bio1-2-3-ex-karbon',
      type: 'example',
      title: 'Et karbonatoms reise fra CO₂ til glukose',
      problem:
        'Spor veien til et karbonatom (C) fra CO₂ i atmosfæren til det ender opp som en del av et glukosemolekyl (C₆H₁₂O₆).',
      solution: `**1. Karbondioksid i atmosfæren:**
Karbonatomet er del av et CO₂-molekyl i lufta. CO₂ diffunderer inn i bladet gjennom spalteåpningene (stomata) og videre inn i stroma i kloroplasten.

**2. Karbonfiksering (Calvin-syklus, trinn 1):**
Enzymet rubisco kobler CO₂ til RuBP (5C). Karbonatomet vårt er nå del av et ustabilt 6C-mellomprodukt som straks spaltes til to 3-PGA (3C). Karbonatomet befinner seg nå i ett av disse 3-PGA-molekylene.

**3. Reduksjon (Calvin-syklus, trinn 2):**
3-PGA reduseres til G3P ved hjelp av ATP og NADPH fra lysreaksjonene. Karbonatomet er nå del av et G3P-molekyl.

**4. Fra G3P til glukose:**
To G3P-molekyler (hvert med 3 karbonatomer) kobles sammen i en serie enzymatiske reaksjoner og danner ett glukosemolekyl (6 karbonatomer): C₆H₁₂O₆.

Karbonatomet som startet som en del av CO₂ i atmosfæren, er nå innebygd i et organisk molekyl – glukose – der energi fra sollyset er lagret i de kjemiske bindingene.

**Oppsummert:**
$$\\text{CO}_2 \\xrightarrow{\\text{rubisco}} \\text{3-PGA} \\xrightarrow{\\text{ATP, NADPH}} \\text{G3P} \\xrightarrow{} \\text{Glukose (C}_6\\text{H}_{12}\\text{O}_6)$$`,
    },

    // ====================================================================
    // G3P – HVA BRUKES DET TIL?
    // ====================================================================
    {
      id: 'bio1-2-3-g3p-bruk',
      type: 'text',
      title: 'Hva brukes G3P til?',
      content: `G3P (glyseraldehyd-3-fosfat) er fotosyntesens «slutprodukt» i den forstand at det er det første stabile organiske molekylet som forlater Calvin-syklus. Men G3P i seg selv er bare et mellomprodukt – planten bruker det videre til å bygge det den trenger:

- **Glukose (C₆H₁₂O₆):** To G3P-molekyler kobles sammen til glukose, som er hovedenergimolekyl for cellen.
- **Stivelse:** Lagring av energi i kloroplasten. Stivelse er lange kjeder av glukosemolekyler.
- **Sukrose (rørsukker):** Transportform for sukker i planten. Sukrose sendes fra bladene til resten av planten via silvevet (floem).
- **Cellulose:** Byggemateriale i celleveggen.
- **Aminosyrer og lipider:** G3P kan omdannes til byggesteiner for proteiner og fett.

G3P er altså et svært allsidig molekyl som kobler fotosyntesen til resten av plantens stoffskifte.`,
    },

    // ====================================================================
    // FOTORESPIRASON OG C4/CAM-PLANTER
    // ====================================================================
    {
      id: 'bio1-2-3-fotorespirason',
      type: 'text',
      title: 'Fotorespirason og C4/CAM-planter',
      content: `Enzymet rubisco har en svakhet: det kan ikke bare binde CO₂, men også **O₂**. Når rubisco binder O₂ i stedet for CO₂, starter en prosess som kalles **fotorespirason**. Fotorespirason produserer ikke nyttig energi for planten – tvert imot bruker den ATP og frigjør CO₂. Den er altså en «feilreaksjon» som reduserer fotosyntesens effektivitet.

Fotorespirason er et større problem når det er varmt (spalteåpningene lukkes for å spare vann, CO₂-nivået inne i bladet synker, og O₂-nivået stiger).

## C4-planter

Noen planter, som **mais**, **sukkerrør** og **hirse**, har utviklet en mekanisme for å unngå fotorespirason. Disse kalles **C4-planter** fordi det første produktet av karbonfiksering er et molekyl med fire karbonatomer (oksaleddiksyre), ikke tre.

C4-planter fikserer CO₂ først i mesofyllcellene med et annet enzym (PEP-karboksylase) som ikke reagerer med O₂. Deretter fraktes det fikserte karbonet til **buntsljedecellene** der rubisco og Calvin-syklus arbeider i et miljø med høy CO₂-konsentrasjon og lav O₂-konsentrasjon. Dette eliminerer nærmest fotorespirason.

## CAM-planter

**CAM-planter** (Crassulacean Acid Metabolism) – som **kaktuser**, **ananas** og **sukkulenter** – lever i svært tørre miljøer. De åpner spalteåpningene **om natten** (for å spare vann) og tar opp CO₂ da. CO₂ lagres midlertidig som organiske syrer (eple­syre). Om dagen, når spalteåpningene er lukket, frigjøres CO₂ fra syrene og brukes i Calvin-syklus.

Både C4- og CAM-plantene er tilpasninger til varme og tørre miljøer der fotorespirason ellers ville redusert fotosyntesens effektivitet betraktelig.`,
    },

    // ====================================================================
    // FAKTORER SOM PÅVIRKER FOTOSYNTESEN
    // ====================================================================
    {
      id: 'bio1-2-3-faktorer',
      type: 'text',
      title: 'Faktorer som påvirker fotosyntesehastigheten',
      content: `Fotosyntesehastigheten bestemmes av flere miljøfaktorer. De tre viktigste er **lysintensitet**, **CO₂-konsentrasjon** og **temperatur**.

## Lysintensitet

Lysreaksjonene er direkte avhengige av lys. Når lysintensiteten øker, øker fotosyntesehastigheten – men bare opp til et visst punkt. Ved **lysmettning** er alle pigmentmolekylene i fotosystemene opptatt, og mer lys gir ikke raskere fotosyntese. Grafen for fotosyntesehastighet som funksjon av lysintensitet stiger bratt i starten og flater deretter ut til et platå.

Ved **lyskompensasjonspunktet** er fotosyntesehastigheten lik celleåndingshastigheten – planten verken tar opp eller avgir netto CO₂.

## CO₂-konsentrasjon

CO₂ er substratet for rubisco i Calvin-syklus. Høyere CO₂-konsentrasjon gir raskere karbonfiksering – opp til et metningspunkt der alle rubisco-molekylene arbeider med maksimal hastighet. Normal CO₂-konsentrasjon i atmosfæren (ca. 420 ppm) er ikke metnings­nivå for de fleste planter, og økt CO₂ kan faktisk øke fotosyntesen.

## Temperatur

Fotosyntesen er enzymkatalysert. Enzymaktiviteten øker med temperaturen opp til et **optimum** (for de fleste planter ca. 25–35 °C). Over optimumstemperaturen begynner enzymer å denaturere (miste sin tredimensjonale struktur), og fotosyntesehastigheten faller raskt. Ved svært lave temperaturer er enzymene for trege.

## Begrensende faktor

Til enhver tid er det den faktoren som er «knappest» som begrenser fotosyntesehastigheten – dette kalles **begrensende faktor** (Liebigs minimumslov). Eksempel: Selv om lysintensiteten er svært høy, vil ikke fotosyntesen øke om CO₂-konsentrasjonen er lav – da er CO₂ den begrensende faktoren.

I drivhus utnytter man dette ved å øke både lysintensitet, CO₂-nivå og temperatur for å maksimere plantevekst.`,
    },

    // ====================================================================
    // EKSEMPEL: LYSINTENSITET OG FOTOSYNTESEHASTIGHET
    // ====================================================================
    {
      id: 'bio1-2-3-ex-lysintensitet',
      type: 'example',
      title: 'Tolking av graf: lysintensitet og fotosyntesehastighet',
      problem:
        'En forsker måler fotosyntesehastigheten i en vannplante ved ulike lysintensiteter. Grafen viser at hastigheten stiger bratt opp til 200 μmol fotoner/m²/s, deretter flater den ut. Ved lysintensitet 0 er hastigheten negativ (ca. −2 μmol CO₂/m²/s). Forklar hva grafen viser.',
      solution: `**Forklaring av grafen:**

**1. Negativ hastighet ved lysintensitet 0:**
Når det er helt mørkt, foregår det ingen fotosyntese. Planten driver likevel celleånding, som bruker O₂ og frigir CO₂. Netto CO₂-utveksling er derfor negativ (planten avgir CO₂). Verdien −2 μmol CO₂/m²/s tilsvarer celleåndingshastigheten.

**2. Lyskompensasjonspunktet:**
Ved en viss lysintensitet krysser grafen nullpunktet. Her er fotosyntesehastigheten lik celleåndingshastigheten – planten verken tar opp eller avgir netto CO₂. Dette er **lyskompensasjonspunktet**.

**3. Bratt stigning:**
I dette området er lys den begrensende faktoren. Mer lys gir flere eksiterte elektroner i fotosystemene, mer ATP og NADPH, og dermed raskere Calvin-syklus.

**4. Utflating (platå) ved ca. 200 μmol fotoner/m²/s:**
Her har planten nådd **lysmettning**. Alle fotosystemer arbeider med full kapasitet. Begrensende faktor er nå noe annet – for eksempel CO₂-konsentrasjon, temperatur eller enzymmengde (rubisco). Mer lys gir ikke raskere fotosyntese.

**Konklusjon:** Grafen illustrerer at lysintensitet påvirker fotosyntesehastigheten opp til et metningspunkt, og at konseptet begrensende faktor avgjør hva som setter grensen for hastigheten.`,
    },

    // ====================================================================
    // EKSEMPEL: SYNLIGE O₂-BOBLER I VANNPLANTER
    // ====================================================================
    {
      id: 'bio1-2-3-ex-bobler',
      type: 'example',
      title: 'Hvorfor lager vannplanter synlige O₂-bobler?',
      problem:
        'Når en vannplante (for eksempel Elodea/vasspest) belyses med en lampe, kan man se at det dannes små gassbobler fra bladene. Forklar hva boblene er, og hvorfor de dannes.',
      solution: `**Boblene er oksygengass (O₂).**

I fotosyntesens lysreaksjoner spaltes vann i fotosystem II:
$$2\\text{H}_2\\text{O} \\rightarrow 4\\text{H}^+ + 4e^- + \\text{O}_2$$

Oksygengassen som dannes, løses delvis i vannet, men når vannet blir **mettet** med O₂, danner overskuddsoksygenet gassfylte bobler som stiger opp.

**Praktisk bruk:**
Denne observasjonen er grunnlaget for et klassisk eksperiment: ved å telle antall bobler per minutt ved ulike lysintensiteter, CO₂-konsentrasjoner eller temperaturer kan man måle den relative fotosyntesehastigheten. Flere bobler per minutt betyr raskere fotosyntese.

**Merk:** I mørket ser man ingen (eller svært få) bobler – fotosyntesen har stoppet, og planten driver bare celleånding, som bruker O₂ i stedet for å produsere det.`,
    },

    // ====================================================================
    // FOTOSYNTESE OG CELLEÅNDING
    // ====================================================================
    {
      id: 'bio1-2-3-sammenheng',
      type: 'text',
      title: 'Fotosyntese og celleånding – to sider av samme mynt',
      content: `Fotosyntese og celleånding er **komplementære prosesser** – de er i praksis hverandres omvendte reaksjoner:

**Fotosyntese:**
$$6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{lysenergi} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$$

**Celleånding:**
$$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{energi (ATP)}$$

Produktene fra den ene prosessen er utgangsstoffene for den andre:
- Fotosyntesen produserer glukose og O₂, som celleåndingen bruker.
- Celleåndingen produserer CO₂ og H₂O, som fotosyntesen bruker.

## Energistrøm

Fotosyntesen fanger **solenergi** og lagrer den som **kjemisk energi** i glukose. Celleåndingen frigjør denne energien og lagrer den i **ATP**, som cellen bruker til alt arbeid (bevegelse, transport, syntese, vekst).

Energien strømmer altså: **Sol → Fotosyntese → Glukose → Celleånding → ATP → Cellens arbeid**

## Global karbonsyklus

I et økologisk perspektiv er fotosyntese og celleånding sentrale deler av **karbonsyklusen**:
- Fotosyntesen fjerner CO₂ fra atmosfæren (karbonfiksering).
- Celleånding (fra alle levende organismer) slipper CO₂ tilbake.
- Menneskelig forbrenning av fossilt brensel frigjør karbon som ble fiksert for millioner av år siden, og øker CO₂-nivået i atmosfæren.`,
    },

    // ====================================================================
    // ADVARSEL: VANLIGE MISFORSTÅELSER
    // ====================================================================
    {
      id: 'bio1-2-3-warning-misforst',
      type: 'warning',
      title: 'Vanlige misforståelser om fotosyntese',
      content: `**1. «Mørke reaksjoner skjer om natten.»**
Nei. Calvin-syklus kalles noen ganger «mørke reaksjoner» fordi de ikke direkte bruker lys, men de er avhengige av ATP og NADPH fra lysreaksjonene. I praksis foregår Calvin-syklus samtidig med lysreaksjonene – altså om dagen.

**2. «Planter puster ikke – de bare fotosynterer.»**
Feil. Planter driver celleånding hele døgnet, akkurat som dyr. Om dagen overgår fotosyntesen celleåndingen (netto opptak av CO₂), men om natten driver planten bare celleånding (netto utslipp av CO₂).

**3. «Oksygenet fra fotosyntesen kommer fra CO₂.»**
Nei. Oksygenet (O₂) som frigjøres, kommer fra **spalting av vann** (H₂O) i fotosystem II. Dette ble bevist med isotopforsøk (merket oksygen, ¹⁸O).

**4. «Fotosyntesen er det motsatte av celleåndingen.»**
Delvis riktig – totalreaksjonene er motsatte, men de to prosessene skjer på helt forskjellige måter, med forskjellige enzymer, i forskjellige organeller (kloroplast vs. mitokondrie).`,
    },

    // ====================================================================
    // GLOBAL BETYDNING
    // ====================================================================
    {
      id: 'bio1-2-3-global',
      type: 'text',
      title: 'Fotosyntesens globale betydning',
      content: `Fotosyntesen har formet livet på jorda gjennom milliarder av år og er fortsatt avgjørende for biosfæren.

## Oksygenrevolusjonen

For omtrent 2,4 milliarder år siden begynte cyanobakterier å frigjøre oksygen gjennom fotosyntese. Over hundrevis av millioner av år akkumulerte O₂ i atmosfæren – en hendelse kjent som den **store oksydasjonshendelsen** (Great Oxidation Event). Dette muliggjorde utviklingen av aerobe organismer (som bruker O₂ i celleåndingen) og til slutt komplekse flercellete dyr.

## Næringskjeder og økosystemer

Fotosyntetiserende organismer (planter, alger, cyanobakterier) er **produsenter** – de utgjør bunnen av nesten alle næringskjeder. Dyr (konsumenter) spiser planter eller andre dyr som har spist planter. Nedbrytere bryter ned døde organismer. All energi i disse næringskjedene stammer opprinnelig fra sollys fanget av fotosyntesen.

I havet står **fytoplankton** (mikroskopiske alger og cyanobakterier) for omtrent 50 % av all fotosyntese på jorda – de er like viktige som alle regnskoger til sammen.

## Karbonkretsløp og klimaendringer

Fotosyntesen fjerner ca. **120 milliarder tonn karbon** fra atmosfæren hvert år. Denne enorme karbonfikseringen balanseres normalt av celleånding og nedbrytning. Men menneskelig forbrenning av fossilt brensel tilfører ekstra CO₂ som fotosyntesen ikke klarer å kompensere for fullt, noe som bidrar til global oppvarming.

Å bevare skoger, restaurere økosystemer og øke mengden fotosyntetisk biomasse er derfor viktige strategier i kampen mot klimaendringer.`,
    },
  ],

  // ======================================================================
  // OPPGAVER
  // ======================================================================
  exercises: [
    // ---- Oppgave 1: Flervalg – Totalreaksjon ----
    {
      id: 'bio1-2-3-ex-1',
      number: '1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er den korrekte totalreaksjonen for fotosyntesen?',
      options: [
        {
          id: 'a',
          text: '$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{energi}$',
          isCorrect: false,
          feedback: 'Dette er totalreaksjonen for celleånding, ikke fotosyntese.',
        },
        {
          id: 'b',
          text: '$6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{lysenergi} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$',
          isCorrect: true,
          feedback: 'Riktig! Fotosyntesen omdanner CO₂ og H₂O til glukose og O₂ ved hjelp av lysenergi.',
        },
        {
          id: 'c',
          text: '$6\\text{CO}_2 + 6\\text{O}_2 \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{H}_2\\text{O}$',
          isCorrect: false,
          feedback: 'Her er reaktantene feil – det er H₂O (ikke O₂) som er en av utgangsstoffene.',
        },
        {
          id: 'd',
          text: '$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{H}_2\\text{O} \\rightarrow 6\\text{CO}_2 + 12\\text{H}_2\\text{O}$',
          isCorrect: false,
          feedback: 'Dette er ikke en korrekt gjengivelse av noen av fotosyntesens eller celleåndingens reaksjoner.',
        },
      ],
      hints: ['Fotosyntesen bruker CO₂ og H₂O som utgangsstoffer og produserer glukose og O₂.'],
    },

    // ---- Oppgave 2: Flervalg – Kloroplast ----
    {
      id: 'bio1-2-3-ex-2',
      number: '2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor i kloroplasten foregår lysreaksjonene?',
      options: [
        { id: 'a', text: 'I stroma', isCorrect: false, feedback: 'Stroma er stedet for Calvin-syklus, ikke lysreaksjonene.' },
        { id: 'b', text: 'I tylakoidmembranen', isCorrect: true, feedback: 'Riktig! Fotosystemene og elektrontransportkjeden sitter i tylakoidmembranen.' },
        { id: 'c', text: 'I intermembranrommet', isCorrect: false, feedback: 'Intermembranrommet er mellom de to ytre membranene i kloroplasten, ikke der lysreaksjonene skjer.' },
        { id: 'd', text: 'I cellekjernen', isCorrect: false, feedback: 'Fotosyntesen skjer i kloroplasten, ikke i cellekjernen.' },
      ],
      hints: ['Tenk på hvor fotosystemene (PS I og PS II) befinner seg.'],
    },

    // ---- Oppgave 3: Klassisk – Kloroplastens struktur ----
    {
      id: 'bio1-2-3-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Beskriv kloroplastens oppbygning. Inkluder følgende begreper i svaret: ytre membran, indre membran, stroma, tylakoider, grana.',
      solution:
        'Kloroplasten er omgitt av en **dobbel membran**: en **ytre membran** (relativt gjennomtrengelig) og en **indre membran** (selektiv). Innenfor den indre membranen finnes **stroma**, en tyktflytende væske der Calvin-syklus foregår. I stroma ligger **tylakoidene** – flate, membranbundne sekker der lysreaksjonene skjer. Tylakoidene kan ligge stablet oppå hverandre i strukturer kalt **grana** (entall: granum). Tylakoidmembranen inneholder fotosystemene, elektrontransportkjeden og ATP-syntase.',
      hints: [
        'Start med det ytterste laget og jobb deg innover.',
        'Husk at kloroplasten har tre typer membraner.',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },

    // ---- Oppgave 4: Flervalg – Pigmenter ----
    {
      id: 'bio1-2-3-ex-4',
      number: '4',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvorfor ser de fleste blader grønne ut?',
      options: [
        { id: 'a', text: 'Fordi klorofyll absorberer grønt lys mest effektivt', isCorrect: false, feedback: 'Klorofyll absorberer grønt lys dårligst.' },
        { id: 'b', text: 'Fordi klorofyll reflekterer grønt lys', isCorrect: true, feedback: 'Riktig! Klorofyll absorberer blått og rødt lys, men reflekterer grønt lys – dette er det lyset som når øynene våre.' },
        { id: 'c', text: 'Fordi karotenoidene er grønne', isCorrect: false, feedback: 'Karotenoider er gule, oransje eller røde pigmenter.' },
        { id: 'd', text: 'Fordi bladene inneholder mye grønt lys', isCorrect: false, feedback: 'Bladene inneholder ikke lys – de reflekterer lys.' },
      ],
      hints: ['Tenk på absorpsjonsspekteret til klorofyll. Hvilke bølgelengder absorberes, og hvilke reflekteres?'],
    },

    // ---- Oppgave 5: Klassisk – Vannspalting ----
    {
      id: 'bio1-2-3-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva som skjer med vannmolekylene i fotosystem II. Hva skjer med elektronene, protonene og oksygenet som dannes?',
      solution:
        'I fotosystem II spaltes vann gjennom **fotolyse**: $2\\text{H}_2\\text{O} \\rightarrow 4\\text{H}^+ + 4e^- + \\text{O}_2$.\n\n**Elektronene** ($e^-$) erstatter de elektronene som P680 har mistet etter eksitasjon av lys. De går videre inn i elektrontransportkjeden.\n\n**Protonene** ($\\text{H}^+$) frigjøres inn i tylakoidlumen og bidrar til å bygge opp protongradient en som driver ATP-syntasen.\n\n**Oksygenet** ($\\text{O}_2$) er et biprodukt som diffunderer ut av kloroplasten, ut av cellen og ut av bladet. Det er dette oksygenet vi puster inn.',
      hints: [
        'Husk at P680 mister et elektron når det absorberer lys – dette elektronet må erstattes.',
        'Tenk på hva H⁺-ionene brukes til (kjemiosmose).',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },

    // ---- Oppgave 6: Klassisk – Elektrontransportkjeden ----
    {
      id: 'bio1-2-3-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv elektronets vei fra fotosystem II til NADPH gjennom den ikke-sykliske elektronstrømmen. Nevn de viktigste komponentene elektroner passerer gjennom.',
      solution:
        'I den **ikke-sykliske elektronstrømmen** følger elektronene denne veien:\n\n1. **Fotosystem II (P680):** Lys eksiterer et elektron i P680. Elektronet forlater P680 og overføres til en primær elektronakseptor.\n\n2. **Plastoquinon (PQ):** Elektronet overføres til plastoquinon, som også tar opp H⁺ fra stroma og blir til plastoquinol (PQH₂).\n\n3. **Cytokrom b₆f-komplekset:** Plastoquinol leverer elektroner til dette proteinkomplekset. Her brukes energien til å pumpe H⁺ fra stroma inn i tylakoidlumen, noe som bygger opp protongradient en.\n\n4. **Plastocyanin (PC):** Elektronene overføres til plastocyanin, et løselig protein i tylakoidlumen, som frakter dem til PS I.\n\n5. **Fotosystem I (P700):** Elektronet ankommer P700 (erstatter det som ble eksitert av lys). P700 eksiteres av lys og sender elektronet videre med enda høyere energi.\n\n6. **Ferredoksin (Fd):** Elektronet overføres til ferredoksin på stromasiden.\n\n7. **NADP⁺-reduktase:** Ferredoksin leverer elektronet til dette enzymet, som reduserer NADP⁺ til **NADPH**.\n\nOppsummert: $\\text{H}_2\\text{O} \\rightarrow \\text{PS II} \\rightarrow \\text{PQ} \\rightarrow \\text{Cyt b₆f} \\rightarrow \\text{PC} \\rightarrow \\text{PS I} \\rightarrow \\text{Fd} \\rightarrow \\text{NADPH}$',
      hints: [
        'Start med fotosystem II og følg elektronet steg for steg.',
        'Plastoquinon, cytokrom b₆f og plastocyanin er mellom PS II og PS I.',
        'Husk at PS I gir elektronet ny energi med lys.',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },

    // ---- Oppgave 7: Klassisk – Kjemiosmose ----
    {
      id: 'bio1-2-3-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan ATP dannes i kloroplasten ved kjemiosmose. Beskriv hvordan protongradient en bygges opp og hvordan ATP-syntasen fungerer.',
      solution:
        '**Oppbygging av protongradienten:**\nUnder lysreaksjonene bygges det opp en høy konsentrasjon av H⁺ i tylakoidlumen gjennom tre mekanismer:\n\n1. **Vannspalting** i PS II frigjør H⁺ direkte i lumen.\n2. **Plastoquinon** frakter H⁺ fra stroma til lumen.\n3. **Cytokrom b₆f-komplekset** pumper H⁺ aktivt fra stroma inn i lumen.\n\nResultatet er at H⁺-konsentrasjonen i lumen kan bli opptil 1000 ganger høyere enn i stroma.\n\n**ATP-syntese:**\nH⁺-ionene «ønsker» å strømme tilbake til stroma for å utligne konsentrasjonsforskjellen, men tylakoidmembranen er ugjennomtrengelig for H⁺. Den eneste veien er gjennom **ATP-syntase**, et enzymkompleks som fungerer som en kanal og en turbin. Når H⁺ strømmer gjennom ATP-syntasen (ned konsentrasjonsgradient en), roterer en del av enzymet. Denne mekaniske energien driver sammenkobling av ADP og fosfat (Pᵢ) til ATP:\n\n$\\text{ADP} + \\text{P}_i \\rightarrow \\text{ATP}$\n\nDenne prosessen kalles **kjemiosmose** – den utnytter en protongradie nt til å drive ATP-syntese.',
      hints: [
        'Tre prosesser bidrar til protongradient en i lumen.',
        'ATP-syntasen fungerer som en turbin som drives av H⁺-strømmen.',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },

    // ---- Oppgave 8: Flervalg – Calvin-syklus ----
    {
      id: 'bio1-2-3-ex-8',
      number: '8',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er rubiscos funksjon i Calvin-syklus?',
      options: [
        { id: 'a', text: 'Det spalter vann til H⁺, e⁻ og O₂', isCorrect: false, feedback: 'Vannspalting skjer i fotosystem II, ikke av rubisco.' },
        { id: 'b', text: 'Det katalyserer bindingen av CO₂ til RuBP (karbonfiksering)', isCorrect: true, feedback: 'Riktig! Rubisco kobler CO₂ til RuBP og danner to 3-PGA-molekyler.' },
        { id: 'c', text: 'Det produserer ATP fra ADP og fosfat', isCorrect: false, feedback: 'ATP-produksjon gjøres av ATP-syntase, ikke rubisco.' },
        { id: 'd', text: 'Det transporterer elektroner i tylakoidmembranen', isCorrect: false, feedback: 'Elektrontransport skjer via plastoquinon, cytokrom b₆f-komplekset osv., ikke rubisco.' },
      ],
      hints: ['Rubisco er forkortelse for ribulose-1,5-bisfosfat-karboksylase/oksygenase. Hva forteller «karboksylase» deg?'],
    },

    // ---- Oppgave 9: Klassisk – Calvin-syklus trinn ----
    {
      id: 'bio1-2-3-ex-9',
      number: '9',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv de tre hovedtrinnene i Calvin-syklus. Angi hvilke stoffer som brukes og dannes i hvert trinn.',
      solution:
        '**Trinn 1: Karbonfiksering**\n- CO₂ bindes til RuBP (5C) av enzymet rubisco.\n- Produktet er et ustabilt 6C-mellomprodukt som spaltes til **2 × 3-PGA** (3C).\n- Stoffer brukt: CO₂, RuBP. Stoffer dannet: 3-PGA.\n\n**Trinn 2: Reduksjon**\n- 3-PGA reduseres til **G3P** (glyseraldehyd-3-fosfat, 3C).\n- Trinnet krever **ATP** (fosforylering) og **NADPH** (reduksjon).\n- Stoffer brukt: 3-PGA, ATP, NADPH. Stoffer dannet: G3P, ADP, NADP⁺.\n\n**Trinn 3: Regenerering av RuBP**\n- 5 av 6 G3P-molekyler (fra tre omdreininger) brukes til å regenerere 3 RuBP-molekyler.\n- Trinnet krever **ATP**.\n- Stoffer brukt: G3P, ATP. Stoffer dannet: RuBP, ADP.\n\n**Nettoresultat (3 omdreininger):**\n3 CO₂ + 9 ATP + 6 NADPH → 1 G3P (netto) + 9 ADP + 9 Pᵢ + 6 NADP⁺',
      hints: [
        'De tre trinnene er: karbonfiksering, reduksjon og regenerering.',
        'Husk at ATP og NADPH fra lysreaksjonene brukes i trinn 2 og 3.',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },

    // ---- Oppgave 10: Flervalg – Syklisk elektronstrøm ----
    {
      id: 'bio1-2-3-ex-10',
      number: '10',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva produseres i syklisk elektronstrøm?',
      options: [
        { id: 'a', text: 'ATP, NADPH og O₂', isCorrect: false, feedback: 'Det er den ikke-sykliske elektronstrømmen som produserer alle tre.' },
        { id: 'b', text: 'Bare NADPH', isCorrect: false, feedback: 'Syklisk elektronstrøm produserer ikke NADPH – elektronet går aldri til NADP⁺-reduktase.' },
        { id: 'c', text: 'Bare ATP', isCorrect: true, feedback: 'Riktig! I syklisk elektronstrøm går elektronet i en syklus via PS I og cytokrom b₆f, som pumper H⁺ og driver ATP-syntesen. Verken NADPH eller O₂ produseres.' },
        { id: 'd', text: 'Bare O₂', isCorrect: false, feedback: 'O₂ dannes ved vannspalting i PS II, som ikke er involvert i syklisk elektronstrøm.' },
      ],
      hints: ['I syklisk elektronstrøm er bare PS I involvert. Elektronet går tilbake dit det kom fra.'],
    },

    // ---- Oppgave 11: Klassisk – Begrensende faktor ----
    {
      id: 'bio1-2-3-ex-11',
      number: '11',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar begrepet «begrensende faktor» i forbindelse med fotosyntese. Gi et eksempel.',
      solution:
        'En **begrensende faktor** er den faktoren som til enhver tid setter grensen for fotosyntesehastigheten. Selv om de andre faktorene er optimale, vil ikke hastigheten øke med mindre den begrensende faktoren forbedres.\n\n**Eksempel:** På en overskyet dag med moderat temperatur og normal CO₂-konsentrasjon er **lysintensiteten** den begrensende faktoren. Fotosyntesehastigheten vil ikke øke selv om vi tilfører mer CO₂ – det er mangel på lys som begrenser prosessen. Dersom solen kommer frem, øker lysintensiteten, og da kan CO₂-konsentrasjonen bli den nye begrensende faktoren.\n\nDette konseptet kalles også Liebigs minimumslov og er viktig for å forstå plantevekst i landbruk og drivhus.',
      hints: [
        'Tenk på det som den svakeste lenken i en kjede.',
        'Hvilken av faktorene (lys, CO₂, temperatur) er «knappest»?',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },

    // ---- Oppgave 12: Klassisk – Fotosyntese og celleånding ----
    {
      id: 'bio1-2-3-ex-12',
      number: '12',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar sammenhengen mellom fotosyntese og celleånding. Hvorfor er de to prosessene avhengige av hverandre?',
      solution:
        'Fotosyntese og celleånding er **komplementære prosesser** – produktene fra den ene er utgangsstoffene for den andre.\n\n**Fotosyntese** (i kloroplaster):\n$6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{lysenergi} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$\n\n**Celleånding** (i mitokondrier):\n$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{energi (ATP)}$\n\nFotosyntesen produserer **glukose** og **O₂**, som celleåndingen bruker. Celleåndingen produserer **CO₂** og **H₂O**, som fotosyntesen bruker.\n\n**Energimessig** fanger fotosyntesen solenergi og lagrer den som kjemisk energi i glukose. Celleåndingen frigjør denne energien i form av ATP, som cellen bruker til arbeid.\n\nUten fotosyntese ville det ikke finnes glukose eller O₂ for celleåndingen. Uten celleåndingen kunne ikke organismer frigjøre energien som er lagret i glukose. De to prosessene opprettholder sammen den globale karbonsyklusen.',
      hints: [
        'Sammenlign totalreaksjonene for fotosyntese og celleånding.',
        'Hva er produktene fra fotosyntesen, og hva bruker celleåndingen?',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },

    // ---- Oppgave 13: Klassisk – Fotorespirason ----
    {
      id: 'bio1-2-3-ex-13',
      number: '13',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Hva er fotorespirason, og hvorfor er det et problem for planter? Forklar kort hvordan C4-planter har løst dette problemet.',
      solution:
        '**Fotorespirason** oppstår når rubisco binder **O₂** i stedet for CO₂. Resultatet er at organisk karbon brytes ned uten at nyttig energi produseres – planten taper ATP og fiksert karbon. Fotorespirason reduserer fotosyntesens nettoproduktivitet med 25–50 % hos C3-planter i varme omgivelser.\n\nFotorespirason er et større problem under varme, tørre forhold fordi planten lukker spalteåpningene for å spare vann. Da synker CO₂-nivået inne i bladet, mens O₂-nivået stiger – og rubisco binder O₂ oftere.\n\n**C4-plantenes løsning:**\nC4-planter (f.eks. mais, sukkerrør) har utviklet en forløpig karbonfiksering i **mesofyllcellene** med enzymet PEP-karboksylase, som bare binder CO₂ (ikke O₂). CO₂ fikseres til et 4C-molekyl (oksaleddiksyre), som fraktes til **buntsljedecellene**. Der frigjøres CO₂ i høy konsentrasjon rundt rubisco, som da nesten utelukkende binder CO₂ i stedet for O₂. Calvin-syklus går videre som normalt.\n\nResultatet er at C4-planter nærmest eliminerer fotorespirason og er svært effektive i varme, tørre miljøer.',
      hints: [
        'Rubisco kan binde både CO₂ og O₂ – hva skjer når den binder O₂?',
        'Tenk på hvordan C4-planter «konsentrerer» CO₂ rundt rubisco.',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },

    // ---- Oppgave 14: Klassisk – Eksperiment ----
    {
      id: 'bio1-2-3-ex-14',
      number: '14',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Du gjennomfører et eksperiment med en vannplante (Elodea) i et beger med vann. Du plasserer en lampe i ulik avstand fra begeret og teller antall O₂-bobler per minutt. Resultatene er:\n\n| Avstand (cm) | Bobler/min |\n|-------------|------------|\n| 5 | 42 |\n| 10 | 38 |\n| 20 | 25 |\n| 40 | 12 |\n| 80 | 4 |\n\na) Hva kan du konkludere fra disse dataene?\nb) Hvilken faktor er begrensende i dette eksperimentet?\nc) Hva ville du forvente dersom du økte CO₂-konsentrasjonen i vannet ved avstand 5 cm?',
      solution:
        '**a) Konklusjon fra dataene:**\nNår lampen flyttes lenger bort, reduseres antall bobler per minutt. Siden bobler representerer O₂-produksjon (fra fotosyntesen), betyr dette at fotosyntesehastigheten avtar med økende avstand. Lysintensiteten avtar med kvadratet av avstanden (invers kvadratlov), og færre fotoner treffer planten.\n\n**b) Begrensende faktor:**\n**Lysintensiteten** er den begrensende faktoren. Alle andre faktorer (temperatur, CO₂) holdes konstante, og endringen i boblefrekvens korrelerer direkte med endringen i lysintensitet (avstand).\n\n**c) Økt CO₂ ved 5 cm avstand:**\nVed 5 cm er lysintensiteten allerede høy (42 bobler/min). Dersom fotosyntesen ved denne avstanden ikke lenger er lysbegrenset, kan **CO₂ ha blitt den nye begrensende faktoren**. Å øke CO₂-konsentrasjonen vil da sannsynligvis øke fotosyntesehastigheten ytterligere (flere bobler/min). Dersom lys fortsatt er begrensende, vil mer CO₂ ha liten effekt.\n\nDette illustrerer konseptet om begrensende faktor: ved korte avstander kan lys mettes og CO₂ overtar som begrensende faktor.',
      hints: [
        'Lysintensiteten avtar med økt avstand fra lampen.',
        'Bobler er et mål på O₂-produksjon, altså fotosyntesehastigheten.',
        'Ved kort avstand – er lys fortsatt begrensende, eller kan en annen faktor ha overtatt?',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },

    // ---- Oppgave 15: Klassisk – Helhetlig forståelse ----
    {
      id: 'bio1-2-3-ex-15',
      number: '15',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor det å fjerne skog i stor skala (avskoging) kan bidra til økt CO₂-nivå i atmosfæren og dermed klimaendringer. Bruk din kunnskap om fotosyntesen i svaret.',
      solution:
        '**Avskoging og CO₂-nivået:**\n\nAvskoging bidrar til økt CO₂ i atmosfæren gjennom to mekanismer:\n\n**1. Redusert karbonfiksering:**\nTrær og andre planter fjerner CO₂ fra atmosfæren gjennom fotosyntesen:\n$6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{lysenergi} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$\n\nNår skog fjernes, forsvinner den fotosyntetiske kapasiteten. Mindre CO₂ fikseres til organisk karbon, og mer CO₂ blir værende i atmosfæren.\n\n**2. Frigjøring av lagret karbon:**\nTrær inneholder store mengder organisk karbon (i stamme, røtter, blader) som opprinnelig ble fiksert fra atmosfærisk CO₂ gjennom fotosyntese. Når trær brennes eller brytes ned av mikroorganismer (celleånding), frigjøres dette karbonet tilbake som CO₂:\n$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O}$\n\n**Klimaeffekten:**\nCO₂ er en drivhusgass som absorberer infrarød stråling og varmer opp atmosfæren. Høyere CO₂-konsentrasjon forsterker drivhuseffekten og fører til global oppvarming.\n\n**Dobbel effekt:**\nAvskoging gir altså en «dobbel» virkning – det både reduserer karbonopptaket (mindre fotosyntese) og øker karbonutslippet (nedbrytning av biomasse). Bevaring og nyplanting av skog er derfor viktige tiltak for å bremse klimaendringene.',
      hints: [
        'Tenk på fotosyntesen som en «karbonpumpe» som fjerner CO₂ fra lufta.',
        'Hva skjer med karbonet som er lagret i treet når det hogges og brennes?',
        'Hva er sammenhengen mellom CO₂ og drivhuseffekten?',
      ],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};
