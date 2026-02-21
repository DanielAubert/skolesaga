/**
 * Naturbruk VG1 - Tekstbokinnhold DEL 2
 *
 * Kapittel 3: Landbruk og planteproduksjon (3.1-3.8)
 * Kapittel 4: Dyrehold og dyrevelferd (4.1-4.6)
 *
 * Dekker LK20 læreplan for Naturbruk på VG1
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 3: Landbruk og planteproduksjon
// ============================================================================

// ----------------------------------------------------------------------------
// 3.1 Jord og jordkvalitet
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_3_1: TextbookChapter = {
  id: 'naturbruk-vg1-3-1',
  courseId: 'naturbruk-vg1',
  chapterNumber: '3.1',
  title: 'Jord og jordkvalitet',
  description: 'Jordas oppbygning, jordtyper og faktorer som påvirker jordkvalitet og fruktbarhet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for jordas oppbygning og egenskaper',
    'vurdere jordkvalitet og tiltak for å forbedre jorda',
  ],
  content: [
    {
      id: 'naturbruk-vg1-3-1-intro',
      type: 'text',
      content: `## Jorda - grunnlaget for all planteproduksjon

Jorda er bøndenes viktigste ressurs. God jordkvalitet er avgjørende for å kunne dyrke mat og fôr på en effektiv og bærekraftig måte. I dette kapittelet skal vi se nærmere på hvordan jorda er bygd opp, hvilke jordtyper vi har, og hvordan vi kan ta vare på og forbedre jordkvaliteten.

**Hva er jord?**

Jord er det øverste laget av jordoverflaten der planter kan vokse. Den har utviklet seg gjennom tusenvis av år ved nedbrytning av bergarter og organisk materiale. Jorda er et komplekst økosystem som inneholder mineraler, organisk materiale, vann, luft og milliarder av levende organismer.

**Hvorfor er jordkvalitet viktig?**

- Avgjørende for plantevekst og avlinger
- Påvirker vannhusholdning og drenering
- Viktig for karbonlagring og klimaregulering
- Grunnlag for biologisk mangfold i jorda
- Påvirker kvaliteten på mat og fôr`,
    },
    {
      id: 'naturbruk-vg1-3-1-def-1',
      type: 'definition',
      title: 'Matjordlag',
      content: `Matjordlaget (A-sjiktet) er det øverste, mørke laget av jorda der mesteparten av planterøttene vokser. Det inneholder mye organisk materiale (humus), næringsstoffer og jordliv. Et godt matjordlag er vanligvis 20-30 cm tykt og er avgjørende for god plantevekst.`,
    },
    {
      id: 'naturbruk-vg1-3-1-text-1',
      type: 'text',
      content: `## Jordas oppbygning

Jorda er bygd opp av flere lag (sjikt) med ulike egenskaper:

**Jordprofil fra toppen:**

**O-sjiktet (strøfallet)**
- Uomdannet organisk materiale på overflaten
- Løv, barnåler, planterester
- Brytes gradvis ned av jordorganismer

**A-sjiktet (matjordlaget)**
- Mørkt og humusrikt
- Høy biologisk aktivitet
- Viktigst for plantevekst
- Blanding av mineraler og organisk materiale

**B-sjiktet (utfellingssjiktet)**
- Lysere farge, ofte rustfarget
- Mineraler utvasket fra A-sjiktet samles her
- Mindre organisk materiale
- Kan være tett og vanskelig for røtter

**C-sjiktet (opphavsmaterialet)**
- Løsmasser eller forvitret berggrunn
- Lite påvirket av jordprosesser
- Grunnlaget jorda har utviklet seg fra`,
    },
    {
      id: 'naturbruk-vg1-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv jordas oppbygning med de fire hovedsjiktene.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn de fire sjiktene i et jordprofil fra toppen og ned.',
            solution: 'O-sjiktet (strøfallet), A-sjiktet (matjordlaget), B-sjiktet (utfellingssjiktet), C-sjiktet (opphavsmaterialet).',
          },
          {
            label: 'b',
            task: 'Forklar hvorfor A-sjiktet er det viktigste for plantevekst.',
            solution: 'A-sjiktet (matjordlaget) er viktigst fordi det inneholder mest humus og næringsstoffer, har høyest biologisk aktivitet, og er der mesteparten av planterøttene vokser.',
          },
        ],
        solution: 'Jordprofilet består av O (strøfall), A (matjord), B (utfelling) og C (opphavsmateriale). A-sjiktet er viktigst for plantevekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-3-1-def-2',
      type: 'definition',
      title: 'Humus',
      content: `Humus er vel omdannet organisk materiale i jorda. Det gir jorda mørk farge og forbedrer jordstrukturen. Humus holder på vann og næringsstoffer, øker jordas evne til å motstå pakking, og er mat for jordorganismene. Humusinnholdet i norsk matjord varierer vanligvis mellom 3-10%.`,
    },
    {
      id: 'naturbruk-vg1-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er humus, og hvorfor er det viktig for jordkvaliteten?',
        solution: 'Humus er vel omdannet organisk materiale i jorda. Det er viktig fordi det: 1) Gir jorda mørk farge og god struktur, 2) Holder på vann og næringsstoffer, 3) Øker jordas motstand mot pakking, 4) Er mat for jordorganismene, 5) Bidrar til karbonlagring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-3-1-text-2',
      type: 'text',
      content: `## Jordtyper og kornstørrelser

Jorda klassifiseres etter kornstørrelse på mineralpartiklene:

**Sand (0,06-2 mm)**
- Store porer, god lufttilgang
- Drenerer raskt, tørker fort
- Varmes raskt opp om våren
- Holder dårlig på vann og næring
- Lett å arbeide med

**Silt (0,002-0,06 mm)**
- Mellomstore porer
- God evne til å holde næring
- Kan få skorpe og pakkes lett
- Ofte kald og seint å tørke opp

**Leire (< 0,002 mm)**
- Små porer, holder godt på vann
- Stor evne til å binde næringsstoffer
- Tung å arbeide med
- Sen oppvarming om våren
- Kan sprekke opp ved tørke

**Idealjord - moldrik lettleire**
En god dyrkingsjord inneholder en blanding av sand, silt og leire, samt 3-6% organisk materiale. Dette gir god struktur, vannhusholdning og næringstilgang.`,
    },
    {
      id: 'naturbruk-vg1-3-1-def-3',
      type: 'definition',
      title: 'Jordstruktur',
      content: `Jordstruktur beskriver hvordan jordpartiklene er ordnet i aggregater (klumper). God struktur gir porer for luft og vann, letter rotutvikling og gjør jorda lettere å arbeide. Jordstrukturen påvirkes av humusinnhold, jordliv, kalking, jordarbeiding og kjøring med tunge maskiner.`,
    },
    {
      id: 'naturbruk-vg1-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilken jordtype holder best på vann og næringsstoffer?',
        options: [
          { id: 'a', text: 'Sand', isCorrect: false },
          { id: 'b', text: 'Silt', isCorrect: false },
          { id: 'c', text: 'Leire', isCorrect: true },
          { id: 'd', text: 'Grus', isCorrect: false },
        ],
        solution: 'Leire har de minste partiklene og dermed størst overflate. Dette gir stor evne til å binde vann og næringsstoffer.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'naturbruk-vg1-3-1-def-4',
      type: 'definition',
      title: 'pH-verdi',
      content: `pH er et mål på jordas surhetsgrad på en skala fra 0-14. Nøytral jord har pH 7. De fleste kulturplanter trives best ved pH 6-7. Sur jord (lav pH) kan kalkes for å heve pH. Jordas pH påvirker tilgjengeligheten av næringsstoffer og aktiviteten til jordorganismene.`,
    },
    {
      id: 'naturbruk-vg1-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilken pH-verdi er optimal for de fleste kulturplanter?',
        options: [
          { id: 'a', text: 'pH 4-5', isCorrect: false },
          { id: 'b', text: 'pH 5-6', isCorrect: false },
          { id: 'c', text: 'pH 6-7', isCorrect: true },
          { id: 'd', text: 'pH 7-8', isCorrect: false },
        ],
        solution: 'De fleste kulturplanter trives best ved pH 6-7. Ved denne pH-verdien er næringsstoffene mest tilgjengelige og jordlivet fungerer optimalt.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'naturbruk-vg1-3-1-text-3',
      type: 'text',
      content: `## Faktorer som påvirker jordkvalitet

**Fysiske faktorer:**
- Kornfordeling og tekstur
- Struktur og porøsitet
- Vannhusholdning og drenering
- Jordtemperatur
- Jordpakking

**Kjemiske faktorer:**
- pH-verdi (surhetsgrad)
- Næringsinnhold (N, P, K, mikronæring)
- Kationbyttekapasitet (evne til å holde næring)
- Saltinnhold
- Innhold av tungmetaller

**Biologiske faktorer:**
- Humusinnhold
- Jordorganismer (meitemark, bakterier, sopp)
- Rotutvikling
- Sykdomsorganismer

**Tiltak for å forbedre jordkvalitet:**
1. Kalking ved sur jord
2. Tilføre organisk materiale (husdyrgjødsel, kompost)
3. Vekstskifte for å bygge opp jordliv
4. Unngå jordpakking (lette maskiner, riktig tidspunkt)
5. God drenering
6. Dekkvekster og grønngjødsling`,
    },
    {
      id: 'naturbruk-vg1-3-1-tip-1',
      type: 'tip',
      title: 'Spadeprøven',
      content: `En enkel måte å vurdere jordkvaliteten på er å ta en spadeprøve. Grav opp en jordblokk og studer: Farge (mørk = humusrik), struktur (grynete er bra), rotutvikling, meitemark og andre organismer, lukt (frisk jordlukt er bra), og om det er tegn til pakking eller vannstagnasjon.`,
    },
    {
      id: 'naturbruk-vg1-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Jordanalyse i praksis',
      problem: 'En bonde tar jordprøver og får følgende resultater: pH 5,2, humus 2,8%, P-AL 4, K-AL 8. Hva forteller dette om jorda?',
      solution: `**Tolkning av jordanalysen:**

**pH 5,2** - Sur jord
- De fleste kulturplanter trives best ved pH 6-7
- Tiltak: Kalking anbefales for å heve pH
- Mengde kalk avhenger av jordtype og målverdi

**Humus 2,8%** - Lavt humusinnhold
- Godt nivå er 4-6% for mineraljord
- Tiltak: Tilføre organisk materiale (husdyrgjødsel, kompost)
- Bruke dekkvekster og etterlate planterester

**P-AL 4** - Lavt fosforinnhold
- Klasse lav-middels (ønsket nivå: 5-9)
- Tiltak: Fosforgjødsling ved såing/planting
- Kan bruke husdyrgjødsel som inneholder fosfor

**K-AL 8** - Middels kaliuminnhold
- Klasse middels (ønsket nivå: 8-15)
- Tiltak: Vedlikeholdsgjødsling med kalium
- Kan øke ved intensive avlinger

**Konklusjon:** Jorda trenger kalking og tilførsel av organisk materiale for å forbedre jordkvaliteten.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Nevn fire tiltak for å forbedre jordkvaliteten på et jordbruksareal.',
        solution: 'Fire tiltak for å forbedre jordkvalitet: 1) Kalking for å justere pH, 2) Tilføre organisk materiale som husdyrgjødsel eller kompost, 3) Vekstskifte for å bygge opp jordliv og unngå sykdommer, 4) Unngå jordpakking ved å bruke lette maskiner og kjøre ved riktig tidspunkt. Andre tiltak: god drenering, dekkvekster, grønngjødsling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 3.2 Plantenes biologi og vekstfaktorer
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_3_2: TextbookChapter = {
  id: 'naturbruk-vg1-3-2',
  courseId: 'naturbruk-vg1',
  chapterNumber: '3.2',
  title: 'Plantenes biologi og vekstfaktorer',
  description: 'Plantenes oppbygning, fotosyntese og de viktigste vekstfaktorene for god plantevekst.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forklare plantenes grunnleggende biologi',
    'gjøre rede for vekstfaktorer og deres betydning for planteproduksjon',
  ],
  content: [
    {
      id: 'naturbruk-vg1-3-2-intro',
      type: 'text',
      content: `## Plantenes liv og vekst

For å lykkes med planteproduksjon må vi forstå hvordan planter fungerer og hva de trenger for å vokse. Planter er autotrofe organismer som lager sin egen mat gjennom fotosyntese. De tar opp vann og næringsstoffer fra jorda og karbondioksid fra lufta.

**Plantenes betydning:**
- Grunnlaget for all matproduksjon
- Produserer oksygen gjennom fotosyntese
- Binder karbondioksid fra atmosfæren
- Bygger jordsmonn og beskytter mot erosjon
- Habitat for mange andre organismer`,
    },
    {
      id: 'naturbruk-vg1-3-2-def-1',
      type: 'definition',
      title: 'Fotosyntese',
      content: `Fotosyntese er prosessen der planter bruker sollys til å omdanne karbondioksid (CO2) og vann (H2O) til sukker (glukose) og oksygen (O2). Reaksjonen foregår i kloroplastene i bladcellene. Fotosyntesen er grunnlaget for nesten alt liv på jorda, da den produserer både mat og oksygen.`,
    },
    {
      id: 'naturbruk-vg1-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Fotosyntesens ligningsformel',
      problem: 'Skriv opp og forklar fotosyntesens ligningsformel.',
      solution: `**Fotosyntesens formel:**

6 CO2 + 6 H2O + lysenergi → C6H12O6 + 6 O2

**Forklaring:**
- 6 molekyler karbondioksid (CO2) fra lufta
- 6 molekyler vann (H2O) fra jorda
- Lysenergi fanges av klorofyll i bladene

**Produkter:**
- 1 molekyl glukose (C6H12O6) - sukker som lagrer energi
- 6 molekyler oksygen (O2) - frigis til lufta

**Betydning:**
- Glukosen brukes til vekst eller lagres som stivelse
- Oksygenet er et biprodukt vi er helt avhengige av
- Prosessen binder karbon fra atmosfæren`,
    },
    {
      id: 'naturbruk-vg1-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva fotosyntese er og hvorfor den er viktig.',
        solution: 'Fotosyntese er prosessen der planter bruker sollys til å omdanne karbondioksid og vann til sukker og oksygen. Den er viktig fordi: 1) Den produserer mat (sukker) som er grunnlag for nesten all næring, 2) Den produserer oksygenet vi puster, 3) Den binder CO2 fra atmosfæren og motvirker klimaendringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilken vekstfaktor gir energi til fotosyntesen?',
        options: [
          { id: 'a', text: 'Vann', isCorrect: false },
          { id: 'b', text: 'Lys', isCorrect: true },
          { id: 'c', text: 'Nitrogen', isCorrect: false },
          { id: 'd', text: 'Temperatur', isCorrect: false },
        ],
        solution: 'Lys er energikilden for fotosyntese. Lysenergien fanges opp av klorofyll og brukes til å drive de kjemiske reaksjonene som omdanner CO2 og vann til sukker.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'naturbruk-vg1-3-2-text-1',
      type: 'text',
      content: `## Plantens oppbygning

**Røtter:**
- Forankrer planten i jorda
- Tar opp vann og næringsstoffer
- Lagrer næringsstoffer (f.eks. gulrot, potet)
- Samarbeider med sopp (mykorrhiza) og bakterier

**Stengel/stamme:**
- Støtte for blader og blomster
- Transportårer for vann og næring (xylem og floem)
- Kan lagre næring og vann
- Hos trær: Vedvev for styrke

**Blader:**
- Hovedsete for fotosyntese
- Gassutveksling gjennom spalteåpninger
- Fordamping av vann (transpirasjon)
- Varierer i form etter art og miljø

**Blomster og frø:**
- Forplantningsorganer
- Blomst: Pollinering og befruktning
- Frukt: Beskytter og sprer frøene
- Frø: Inneholder embryo og næringsreserver`,
    },
    {
      id: 'naturbruk-vg1-3-2-def-2',
      type: 'definition',
      title: 'Transpirasjon',
      content: `Transpirasjon er fordamping av vann fra plantens blader gjennom spalteåpninger. Denne prosessen driver vanntransporten fra røttene og opp gjennom planten. Transpirasjon bidrar også til å kjøle ned planten og er koblet til opptaket av CO2 for fotosyntese.`,
    },
    {
      id: 'naturbruk-vg1-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv de fire hoveddelene av en plante og deres funksjoner.',
        solution: '1) Røtter - forankrer planten, tar opp vann og næring, kan lagre næring. 2) Stengel - støtte for blader og blomster, transport av vann og næring. 3) Blader - fotosyntese, gassutveksling, transpirasjon. 4) Blomster/frø - forplantning, pollinering, frøspredning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-3-2-text-2',
      type: 'text',
      content: `## Vekstfaktorer

Plantevekst styres av flere faktorer som må være til stede i riktige mengder. Liebigs minimumslov sier at veksten begrenses av den faktoren som er i minimum.

**Lys:**
- Energikilde for fotosyntese
- Lysintensitet, daglengde og lyskvalitet
- Ulike planter har ulike lysbehov
- Skyggetolerante vs. lyskrevende arter

**Temperatur:**
- Påvirker alle kjemiske prosesser
- Optimal temperatur varierer mellom arter
- Kuldetoleranse og frostfare
- Jordtemperatur viktig for rotutvikling

**Vann:**
- Nødvendig for fotosyntese
- Transportmedium for næringsstoffer
- Holder celletrykket (turgor)
- Både for lite og for mye er skadelig

**Karbondioksid (CO2):**
- Råstoff for fotosyntese
- Normalt ca. 0,04% i lufta
- I veksthus kan CO2 tilføres for økt vekst

**Næringsstoffer:**
- Makronæring: Nitrogen (N), fosfor (P), kalium (K)
- Sekundærnæring: Kalsium, magnesium, svovel
- Mikronæring: Jern, mangan, sink, kobber m.fl.`,
    },
    {
      id: 'naturbruk-vg1-3-2-def-3',
      type: 'definition',
      title: 'Liebigs minimumslov',
      content: `Liebigs minimumslov sier at planteveksten begrenses av den vekstfaktoren som er minst tilgjengelig i forhold til plantens behov. Selv om alle andre faktorer er optimale, vil mangel på én faktor begrense veksten. Dette illustreres ofte med en tønne der den korteste staven bestemmer hvor mye vann den kan holde.`,
    },
    {
      id: 'naturbruk-vg1-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva sier Liebigs minimumslov?',
        options: [
          { id: 'a', text: 'Planter trenger minimum 6 timer sol daglig', isCorrect: false },
          { id: 'b', text: 'Veksten begrenses av faktoren som er i minimum', isCorrect: true },
          { id: 'c', text: 'Minimum 3 næringsstoffer må være til stede', isCorrect: false },
          { id: 'd', text: 'Planter vokser minst om vinteren', isCorrect: false },
        ],
        solution: 'Liebigs minimumslov sier at planteveksten begrenses av den vekstfaktoren som er minst tilgjengelig i forhold til behovet. Er det lite nitrogen, hjelper det ikke å tilføre ekstra kalium.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'naturbruk-vg1-3-2-def-4',
      type: 'definition',
      title: 'Klorofyll',
      content: `Klorofyll er det grønne fargestoffet i planter som fanger opp lysenergi til fotosyntese. Det finnes i kloroplastene i bladcellene. Klorofyll absorberer rødt og blått lys, men reflekterer grønt lys - derfor ser planter grønne ut. Nitrogen er nødvendig for produksjon av klorofyll.`,
    },
    {
      id: 'naturbruk-vg1-3-2-text-3',
      type: 'text',
      content: `## Næringsstoffer i detalj

**Nitrogen (N)**
- Viktigste vekststoffet
- Inngår i proteiner, klorofyll og DNA
- Mangel: Gulning av eldre blader, svak vekst
- For mye: Bløt, sykdomsutsatt vekst

**Fosfor (P)**
- Viktig for rotutvikling og energiomsetning
- Inngår i DNA og cellemembran
- Mangel: Mørke, rødlige blader, svake røtter
- Spesielt viktig tidlig i vekstsesongen

**Kalium (K)**
- Regulerer vannbalansen i cellene
- Viktig for sykdomsresistens
- Mangel: Brune bladkanter, svak stengel
- Viktig for lagringsevne i rotgrønnsaker

**Andre viktige næringsstoffer:**
- Kalsium: Cellevegger, rotutvikling
- Magnesium: Sentralt i klorofyllmolekylet
- Svovel: Proteinoppbygning
- Jern: Klorofyllproduksjon
- Bor: Blomstring og frøsetting`,
    },
    {
      id: 'naturbruk-vg1-3-2-tip-1',
      type: 'tip',
      title: 'Les plantenes signaler',
      content: `Plantene viser ofte tydelig når noe mangler. Gulning av eldre blader kan tyde på nitrogenmangel, mens gulning av unge blader kan være jernmangel. Rødlige blader kan skyldes fosformangel, og brune bladkanter kalimangel. Lær deg å lese disse signalene for å gjødsle riktig!`,
    },
    {
      id: 'naturbruk-vg1-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Nevn de tre viktigste makronæringsstoffene og forklar kort hva de brukes til.',
        solution: '1) Nitrogen (N) - det viktigste vekststoffet, inngår i proteiner og klorofyll, gir grønn farge og god vekst. 2) Fosfor (P) - viktig for rotutvikling og energiomsetning, spesielt tidlig i sesongen. 3) Kalium (K) - regulerer vannbalansen, viktig for sykdomsresistens og lagringsevne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'En plante har gule eldre blader mens de unge bladene er grønne. Hva kan dette skyldes?',
        solution: 'Dette er et typisk tegn på nitrogenmangel. Nitrogen er mobilt i planten, så ved mangel flyttes nitrogen fra eldre til yngre blader. Derfor blir de eldre bladene gule først. Tiltak: Gjødsle med nitrogen (f.eks. kalksalpeter eller fullgjødsel).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 3.3 Korn og oljevekster
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_3_3: TextbookChapter = {
  id: 'naturbruk-vg1-3-3',
  courseId: 'naturbruk-vg1',
  chapterNumber: '3.3',
  title: 'Korn og oljevekster',
  description: 'Dyrking av korn og oljevekster - Norges viktigste jordbruksvekster.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive dyrking av korn og oljevekster',
    'forklare kornets og oljevekstenes betydning i norsk landbruk',
  ],
  content: [
    {
      id: 'naturbruk-vg1-3-3-intro',
      type: 'text',
      content: `## Korn - ryggraden i matproduksjonen

Korn er verdens viktigste matvekster og grunnlaget for det meste av verdens matproduksjon. I Norge brukes korn både til mat og fôr, og kornproduksjonen er konsentrert til de beste jordbruksområdene på Østlandet og i Trøndelag.

**Korndyrkingens betydning:**
- Dekker store deler av matbehov og fôrbehov
- Effektiv utnyttelse av solenergi
- Kan lagres lenge
- Gir viktige karbohydrater, proteiner og fiber

**Kornarter i Norge:**
- Hvete (mest til mat)
- Bygg (mest til fôr)
- Havre (mat og fôr)
- Rug (lite i Norge)`,
    },
    {
      id: 'naturbruk-vg1-3-3-def-1',
      type: 'definition',
      title: 'Korn',
      content: `Korn er frø fra planter i gressfamilien som dyrkes for sin næringrike frukt. Kornkjernen består av skall (kli), frøhvite (endosperm) med stivelse, og kim (embryo) med fett og proteiner. De viktigste kornartene globalt er hvete, ris og mais. I Norge dominerer hvete, bygg og havre.`,
    },
    {
      id: 'naturbruk-vg1-3-3-text-1',
      type: 'text',
      content: `## Kornarter i Norge

**Hvete (Triticum aestivum)**
- Viktigste matkornarten
- Krever god jord og lang vekstsesong
- Høyt proteininnhold for baking
- Vårhvete og høsthvete
- Dyrkes mest på Østlandet

**Bygg (Hordeum vulgare)**
- Mest dyrkede kornarten i Norge
- Kortere veksttid - kan dyrkes nordover
- Hovedsakelig til fôr
- Noe til malt (øl) og mat (gryn)
- Toradet og seksradet bygg

**Havre (Avena sativa)**
- Tåler dårligere jord og klima
- Sunneste kornet (fiber, fett)
- Mat (havregryn) og fôr
- Økende interesse for havremelk
- Dyrkes over hele landet

**Rug (Secale cereale)**
- Tåler kulde og mager jord
- Lite dyrket i Norge
- Brukes til rugbrød
- Høstrug mest vanlig`,
    },
    {
      id: 'naturbruk-vg1-3-3-def-2',
      type: 'definition',
      title: 'Vekstsesong',
      content: `Vekstsesong er perioden fra siste vårfrost til første høstfrost, der temperaturen er høy nok for plantevekst. Korndyrking krever en viss lengde på vekstsesongen for at kornet skal rekke å modne. Hvete krever lengst vekstsesong, mens bygg og havre klarer seg med kortere.`,
    },
    {
      id: 'naturbruk-vg1-3-3-text-2',
      type: 'text',
      content: `## Korndyrking gjennom året

**Vårarbeid (april-mai):**
- Jordarbeiding når jorda er laglig
- Såing med såmaskin
- Gjødsling (basis + delgjødsling)
- Ugrassprøyting ved behov

**Sommer (juni-august):**
- Delgjødsling av nitrogen
- Sykdomsbekjempelse ved behov
- Stråforkorting for å unngå legde
- Overvåking av skadedyr

**Høst (august-oktober):**
- Tresking når kornet er modent
- Tørking til lagringstørt (14% fuktighet)
- Lagring i kornsiloer
- Jordarbeiding/pløying

**Høstkorn (september-oktober):**
- Såing av høsthvete og høstrug
- Overvintrer som små planter
- Starter veksten tidlig om våren
- Gir ofte høyere avling enn vårkorn`,
    },
    {
      id: 'naturbruk-vg1-3-3-def-3',
      type: 'definition',
      title: 'Tresking',
      content: `Tresking er høsting av korn der skurtreskeren kutter plantene, slår løs kornkjernene fra akset, og skiller korn fra halm og agner. Kornet samles i en tank på treskeren, mens halmen spres eller presses til baller. Tresking gjøres når kornet har tørket til under 20% fuktighet.`,
    },
    {
      id: 'naturbruk-vg1-3-3-text-3',
      type: 'text',
      content: `## Oljevekster

**Raps (Brassica napus)**
- Viktigste oljeveksten i Norge
- Gule blomster, dyrkes som vårraps
- Frøene inneholder 40-45% olje
- Brukes til matolje og biodiesel
- Presskaken blir proteinfôr

**Rybs (Brassica rapa)**
- Kortere veksttid enn raps
- Kan dyrkes lengre nord
- Lavere avling enn raps
- Samme bruksområder som raps

**Dyrking av oljevekster:**
- Krever god jord og varm vekstsesong
- Såes tidlig om våren
- Følsom for skadedyr (jordlopper, glansbiller)
- Høstes med skurtresker
- Frøene tørkes og presses

**Betydning:**
- Norskprodusert planteprotein til fôr
- Reduserer import av soya
- God vekst i vekstskifte med korn
- Gir nektar for pollinerende insekter`,
    },
    {
      id: 'naturbruk-vg1-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn de fire kornartene som dyrkes i Norge og beskriv kort hva de brukes til.',
        solution: '1) Hvete - viktigste matkornarten, brukes til brød og bakevarer. 2) Bygg - mest dyrket, hovedsakelig til dyrefôr, noe til malt og gryn. 3) Havre - mat (havregryn, havremelk) og fôr, sunneste kornet. 4) Rug - lite dyrket, brukes til rugbrød.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilken kornart har kortest veksttid og kan derfor dyrkes lengst nord?',
        options: [
          { id: 'a', text: 'Hvete', isCorrect: false },
          { id: 'b', text: 'Bygg', isCorrect: true },
          { id: 'c', text: 'Rug', isCorrect: false },
          { id: 'd', text: 'Mais', isCorrect: false },
        ],
        solution: 'Bygg har kortere veksttid enn hvete og kan derfor dyrkes i områder med kortere vekstsesong. Bygg dyrkes helt opp til Troms.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'naturbruk-vg1-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv hovedtrekkene i korndyrking gjennom året.',
        solution: 'Vår (april-mai): Jordarbeiding, såing, gjødsling. Sommer (juni-august): Delgjødsling, sykdomsbekjempelse, stråforkorting. Høst (august-oktober): Tresking når kornet er modent, tørking til 14% fuktighet, lagring. For høstkorn: Såing i september-oktober, overvintring, tidlig vekststart om våren.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er tresking?',
        options: [
          { id: 'a', text: 'Å så korn om våren', isCorrect: false },
          { id: 'b', text: 'Å høste korn ved å skille kjernene fra halmen', isCorrect: true },
          { id: 'c', text: 'Å sprøyte mot ugras', isCorrect: false },
          { id: 'd', text: 'Å tørke kornet etter høsting', isCorrect: false },
        ],
        solution: 'Tresking er høsting av korn der skurtreskeren kutter plantene, slår løs kornkjernene fra akset, og skiller korn fra halm og agner.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'naturbruk-vg1-3-3-tip-1',
      type: 'tip',
      title: 'Vekstskifte er viktig',
      content: `Å veksle mellom ulike vekster på samme jord (vekstskifte) er viktig for å unngå sykdommer og skadedyr, utnytte næringsstoffene bedre, og bygge opp jordlivet. Et typisk vekstskifte kan være: hvete - havre - oljevekster - bygg. Belgvekster som kløver og erter samler nitrogen fra lufta.`,
    },
    {
      id: 'naturbruk-vg1-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Avlingsberegning',
      problem: 'En bonde har 100 dekar med hvete som gir 500 kg per dekar. Prisen er 3,50 kr per kg. Hva blir brutto inntekt fra hveteåkeren?',
      solution: `**Beregning:**

Areal: 100 dekar
Avling per dekar: 500 kg
Pris per kg: 3,50 kr

**Total avling:**
100 dekar × 500 kg/dekar = 50 000 kg hvete

**Brutto inntekt:**
50 000 kg × 3,50 kr/kg = 175 000 kr

**Svar:** Brutto inntekt fra hveteåkeren blir 175 000 kroner.

**Merk:** Fra dette må bonden trekke kostnader til såkorn, gjødsel, plantevernmidler, drivstoff, maskinhold og arbeid for å finne netto fortjeneste.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er oljevekster, og hvorfor er de viktige i norsk landbruk?',
        solution: 'Oljevekster er planter som dyrkes for oljerikt frø, hovedsakelig raps og rybs i Norge. De er viktige fordi: 1) De gir norskprodusert matolje, 2) Presskaken blir proteinfôr som reduserer soyaimport, 3) De passer godt i vekstskifte med korn, 4) De gir nektar for pollinerende insekter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 3.4 Grønnsaker, frukt og bær
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_3_4: TextbookChapter = {
  id: 'naturbruk-vg1-3-4',
  courseId: 'naturbruk-vg1',
  chapterNumber: '3.4',
  title: 'Grønnsaker, frukt og bær',
  description: 'Dyrking av grønnsaker, frukt og bær i Norge - fra jord til bord.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive dyrking av grønnsaker, frukt og bær',
    'vurdere dyrkingsforhold for ulike vekster',
  ],
  content: [
    {
      id: 'naturbruk-vg1-3-4-intro',
      type: 'text',
      content: `## Norsk grøntproduksjon

Grønnsaker, frukt og bær er viktige for et sunt og variert kosthold. Norge har utfordrende dyrkingsforhold med kort vekstsesong og kjølig klima, men lyse sommernetter gir god smak og kvalitet. Vi produserer en betydelig andel av forbruket selv.

**Fordeler med norsk produksjon:**
- Kort vei fra jord til bord
- Strenge krav til matvarene
- Tilpasset norske forhold
- Høy kvalitet og god smak
- Støtter norske arbeidsplasser

**Utfordringer:**
- Kort vekstsesong
- Variabelt vær
- Høye produksjonskostnader
- Konkurranse fra import`,
    },
    {
      id: 'naturbruk-vg1-3-4-def-1',
      type: 'definition',
      title: 'Grønnsaker',
      content: `Grønnsaker er spiselige plantedeler som dyrkes for mat. De deles inn etter hvilken del av planten vi spiser: rotgrønnsaker (gulrot, kålrot), løkgrønnsaker (løk, purre), bladgrønnsaker (salat, spinat), stengelgrønnsaker (asparges), blomstergrønnsaker (brokkoli), og fruktgrønnsaker (tomat, agurk).`,
    },
    {
      id: 'naturbruk-vg1-3-4-text-1',
      type: 'text',
      content: `## Viktige grønnsaker i Norge

**Rotgrønnsaker:**
- Gulrot - mest dyrkede grønnsaken
- Kålrot (rutabaga/nepe)
- Rødbete, pastinakk, persillerot
- Tåler norsk klima godt
- Kan lagres lenge

**Kålvekster:**
- Hodekål (hvit- og rødkål)
- Blomkål og brokkoli
- Rosenkål, grønnkål
- Viktige vintermåneder

**Løkvekster:**
- Kepaløk (matløk)
- Purre, vårløk
- Hvitløk (lite dyrket)

**Veksthusgrønnsaker:**
- Tomat og agurk
- Paprika og chili
- Salat og urter
- Krever oppvarming

**Potet:**
- Teknisk sett et jordbruksprodukt
- Viktigste norske matvekst
- Mange sorter til ulik bruk
- God lagringsvare`,
    },
    {
      id: 'naturbruk-vg1-3-4-def-2',
      type: 'definition',
      title: 'Frilandsdyrking',
      content: `Frilandsdyrking er dyrking av planter utendørs i åkeren uten tak eller vegger. De fleste norske grønnsaker, frukt og bær dyrkes på friland. Frilandsproduksjon er avhengig av været og begrenset til vekstsesongen, men gir ofte bedre smak enn veksthusproduksjon.`,
    },
    {
      id: 'naturbruk-vg1-3-4-text-2',
      type: 'text',
      content: `## Frukt og bær i Norge

**Frukt:**

**Epler**
- Viktigste frukten i Norge
- Hardanger og Telemark er hovedområder
- Mange sorter: Gravenstein, Aroma, Summerred
- Høstes august-oktober

**Pærer**
- Dyrkes i samme områder som epler
- Mindre produksjon enn epler
- Clara Frijs, Moltke

**Plommer**
- Dyrkes på Østlandet og i Hardanger
- Victoria, Opal, Reeves

**Moreller og kirsebær**
- Hardanger er hovedområde
- Korte sesong, eksklusiv vare

**Bær:**

**Jordbær**
- Mest dyrkede bæret
- Hele landet, fra sør til nord
- Korona, Polka, Sonata

**Bringebær**
- God produksjon i Norge
- Friske og til syltetøy

**Solbær, rips, stikkelsbær**
- Tradisjonelle hagebær
- Mest til syltetøy og saft

**Blåbær**
- Hovedsakelig viltvoksende
- Noe dyrking av hageblåbær`,
    },
    {
      id: 'naturbruk-vg1-3-4-def-3',
      type: 'definition',
      title: 'Veksthus',
      content: `Et veksthus er en bygning med gjennomsiktige vegger og tak av glass eller plast der man dyrker planter under kontrollerte forhold. Veksthus forlenger vekstsesongen, beskytter mot vær og skadedyr, og gir mulighet for å styre temperatur, lys og vanning. I Norge brukes veksthus mest til tomat, agurk og salat.`,
    },
    {
      id: 'naturbruk-vg1-3-4-text-3',
      type: 'text',
      content: `## Dyrkingsteknikker

**Planteproduksjon i veksthus:**
- Oppvarming og tilleggsbelysning
- Dryppvanning og næringsløsning
- Biologisk bekjempelse av skadedyr
- CO2-tilsetning for økt vekst
- Steinull eller torv som vekstmedium

**Frilandsproduksjon:**
- Jordarbeiding og gjødsling
- Planting eller direktesåing
- Ugrasbekjempelse (mekanisk eller kjemisk)
- Vanning ved behov
- Høsting for hånd eller maskinelt

**Moderne teknikker:**
- Plasttunnel for tidligproduksjon
- Fiberduk som frostbeskyttelse
- Dryppvanning med gjødsel
- GPS-styrt maskineri
- Sensorer for presisjonsjordbruk

**Lagringsmetoder:**
- Kjølelager (grønnsaker, frukt)
- CA-lager (kontrollert atmosfære)
- Fryselager (bær)
- Tradisjonell kjellerlager`,
    },
    {
      id: 'naturbruk-vg1-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn minst tre grupper av grønnsaker og gi eksempler på hver.',
        solution: '1) Rotgrønnsaker - gulrot, kålrot, rødbete. 2) Kålvekster - hodekål, blomkål, brokkoli. 3) Løkvekster - kepaløk, purre, hvitløk. 4) Fruktgrønnsaker - tomat, agurk, paprika. 5) Bladgrønnsaker - salat, spinat.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilken grønnsak er den mest dyrkede i Norge?',
        options: [
          { id: 'a', text: 'Tomat', isCorrect: false },
          { id: 'b', text: 'Løk', isCorrect: false },
          { id: 'c', text: 'Gulrot', isCorrect: true },
          { id: 'd', text: 'Brokkoli', isCorrect: false },
        ],
        solution: 'Gulrot er den mest dyrkede grønnsaken i Norge. Den tåler norsk klima godt, kan lagres lenge, og det er stor etterspørsel.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'naturbruk-vg1-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv forskjellen mellom frilandsdyrking og veksthusproduksjon.',
        solution: 'Frilandsdyrking foregår utendørs og er avhengig av været og vekstsesongen. Veksthusproduksjon foregår under tak med mulighet for å kontrollere temperatur, lys, vanning og gjødsling. Friland gir ofte bedre smak, mens veksthus forlenger sesongen og gir høyere avlinger. Veksthus krever mer energi og investering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-3-4-tip-1',
      type: 'tip',
      title: 'Sesongkalender',
      content: `Ved å følge sesongene får du de beste og ferskeste produktene til best pris. Jordbær er best i juni-juli, epler i september-oktober, gulrot hele høsten. Mange grønnsaker kan lagres og er tilgjengelige lenge etter høsting. Spør etter norske produkter i butikken!`,
    },
    {
      id: 'naturbruk-vg1-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Vekstskifte i grønnsaksproduksjon',
      problem: 'Hvorfor er vekstskifte viktig i grønnsaksproduksjon, og hvordan kan et vekstskifte se ut?',
      solution: `**Hvorfor vekstskifte er viktig:**
- Forebygger jordboende sykdommer og skadedyr
- Utnytter næringsstoffene bedre
- Forbedrer jordstrukturen
- Reduserer behovet for plantevernmidler

**Eksempel på 4-årig vekstskifte:**

**År 1: Kålvekster (hodekål, blomkål)**
- Næringskrevende, gjødsles godt

**År 2: Rotgrønnsaker (gulrot, rødbete)**
- Utnytter næring fra forrige år
- Løsner jorda med røttene

**År 3: Løkvekster og belgvekster**
- Belgvekster samler nitrogen
- Løk har renende effekt på jorda

**År 4: Potet eller korn**
- Renser jorda for sykdommer
- Kan jordarbeides grundig

Deretter starter man på nytt med kålvekster.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilke er de viktigste frukt- og bærproduktene i Norge?',
        solution: 'Frukt: Epler er viktigst, dyrkes i Hardanger og Telemark. I tillegg dyrkes pærer, plommer og moreller. Bær: Jordbær er mest dyrket og finnes over hele landet. Bringebær, solbær, rips og stikkelsbær dyrkes også. Blåbær plukkes hovedsakelig viltlevende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hvor i Norge er det mest fruktdyrking?',
        options: [
          { id: 'a', text: 'Trøndelag og Nord-Norge', isCorrect: false },
          { id: 'b', text: 'Hardanger og Telemark', isCorrect: true },
          { id: 'c', text: 'Rogaland og Agder', isCorrect: false },
          { id: 'd', text: 'Østfold og Akershus', isCorrect: false },
        ],
        solution: 'Hardanger og Telemark er Norges viktigste fruktområder, spesielt for epler, moreller og pærer. Fjordene gir et mildt klima med god luftsirkulasjon som passer frukttrærne.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 3.5 Plantevern og ugrasbekjempelse
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_3_5: TextbookChapter = {
  id: 'naturbruk-vg1-3-5',
  courseId: 'naturbruk-vg1',
  chapterNumber: '3.5',
  title: 'Plantevern og ugrasbekjempelse',
  description: 'Skadegjørere i landbruket og metoder for å beskytte plantene.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for ulike skadegjørere og bekjempelsesmetoder',
    'vurdere integrert plantevern som strategi',
  ],
  content: [
    {
      id: 'naturbruk-vg1-3-5-intro',
      type: 'text',
      content: `## Å beskytte avlingen

Planter angripes av mange ulike skadegjørere som kan redusere avling og kvalitet. God plantevern handler om å forebygge skader og gripe inn på riktig tidspunkt med riktige tiltak. Målet er å produsere mat av god kvalitet samtidig som vi tar hensyn til helse og miljø.

**Typer skadegjørere:**
- Ugras - konkurrerer om lys, vann og næring
- Sopp og bakteriesykdommer
- Insekter og midd
- Nematoder (rundormer i jorda)
- Snegler og pattedyr

**Prinsippet om integrert plantevern:**
Integrert plantevern (IPV) handler om å kombinere forebyggende tiltak, overvåking og direkte bekjempelse på en bærekraftig måte. Kjemiske midler brukes bare når det er nødvendig.`,
    },
    {
      id: 'naturbruk-vg1-3-5-def-1',
      type: 'definition',
      title: 'Integrert plantevern (IPV)',
      content: `Integrert plantevern er en helhetlig strategi for å holde skadegjørere under kontroll med minst mulig bruk av kjemiske plantevernmidler. IPV bygger på forebygging, overvåking og terskelverdier, og velger den mest miljøvennlige bekjempelsesmetoden når tiltak er nødvendig.`,
    },
    {
      id: 'naturbruk-vg1-3-5-text-1',
      type: 'text',
      content: `## Ugras og ugrasbekjempelse

**Hva er ugras?**
Ugras er planter som vokser der vi ikke ønsker dem. De konkurrerer med kulturplantene om lys, vann og næringsstoffer, og kan redusere avlingen betydelig.

**Vanlige ugras i Norge:**
- Kveke - vanskelig flerårig ugras
- Høymole - stor plante med djup rot
- Meldestokk - ettårig, mange frø
- Balderbrå - ettårig, vanlig i korn
- Åkertistel - flerårig, sprer seg med utløpere

**Forebyggende tiltak:**
- Rent såfrø
- Vekstskifte
- God konkurranse fra kulturveksten
- Hindre frøspredning

**Mekanisk bekjempelse:**
- Pløying og harving
- Radrensing mellom radene
- Ugrasharving i korn
- Luking for hånd

**Kjemisk bekjempelse:**
- Ugrasmidler (herbicider)
- Selektive (dreper bare ugras) og totalvirknende
- Krever autorisasjon for bruk
- Brukes ved behov i integrert plantevern`,
    },
    {
      id: 'naturbruk-vg1-3-5-def-2',
      type: 'definition',
      title: 'Plantevernmiddel',
      content: `Plantevernmiddel er kjemiske eller biologiske preparater som brukes til å bekjempe skadegjørere på planter. De deles inn i herbicider (ugrasmidler), fungicider (soppmidler), insekticider (insektmidler) og andre. All bruk krever godkjenning og autorisasjon.`,
    },
    {
      id: 'naturbruk-vg1-3-5-def-3',
      type: 'definition',
      title: 'Skadeterskler',
      content: `Skadeterskler er det nivået av skadegjørere der kostnaden ved bekjempelse er lavere enn verdien av avlingstapet. Over terskelen lønner det seg å bekjempe, under terskelen er det bedre å la være. Terskelverdier brukes i integrert plantevern for å unngå unødvendig sprøyting.`,
    },
    {
      id: 'naturbruk-vg1-3-5-text-2',
      type: 'text',
      content: `## Sykdommer og skadedyr

**Soppsykdommer:**
- Mjøldogg - hvitt belegg på blader
- Gråskimmel - råte i fuktig vær
- Rust - oransje flekker
- Bladflekksopp - brune flekker
- Tørråte i potet - alvorlig sykdom

**Bekjempelse av soppsykdommer:**
- Resistente sorter
- Vekstskifte
- God luftsirkulasjon
- Soppmidler (fungicider) ved behov

**Skadedyr:**
- Bladlus - suger plantesaft
- Trips - små insekter, skader blader
- Kålflue - larver spiser røtter
- Kornbladbille - spiser korn
- Snegler - spiser blader og frukt

**Bekjempelse av skadedyr:**
- Vekstskifte
- Nyttedyr (marihøner, rovmidd)
- Feller og barrierer
- Insektmidler ved behov
- Biologisk bekjempelse i veksthus`,
    },
    {
      id: 'naturbruk-vg1-3-5-def-4',
      type: 'definition',
      title: 'Biologisk bekjempelse',
      content: `Biologisk bekjempelse er bruk av levende organismer for å kontrollere skadegjørere. Eksempler er rovmidd som spiser planteskadelig midd, snylteveps som parasitterer bladlus, og nematoder som dreper snegler. Biologisk bekjempelse er vanlig i veksthus og økologisk produksjon.`,
    },
    {
      id: 'naturbruk-vg1-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er integrert plantevern (IPV), og hva er hovedprinsippene?',
        solution: 'Integrert plantevern er en helhetlig strategi for å kontrollere skadegjørere med minst mulig bruk av kjemiske midler. Hovedprinsippene er: 1) Forebygging (resistente sorter, vekstskifte), 2) Overvåking av skadegjørere, 3) Bruk av skadeterskler før tiltak, 4) Velge mest miljøvennlige metode, 5) Kjemisk bekjempelse bare når nødvendig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er et herbicid?',
        options: [
          { id: 'a', text: 'Et middel mot sopp', isCorrect: false },
          { id: 'b', text: 'Et middel mot ugras', isCorrect: true },
          { id: 'c', text: 'Et middel mot insekter', isCorrect: false },
          { id: 'd', text: 'Et gjødselstoff', isCorrect: false },
        ],
        solution: 'Herbicid er et ugrasmiddel som dreper eller hemmer veksten av ugras. Det finnes selektive herbicider som bare dreper ugras, og totalvirkende herbicider som dreper alle planter.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'naturbruk-vg1-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre forebyggende tiltak mot ugras og tre mekaniske bekjempelsesmetoder.',
        solution: 'Forebyggende tiltak: 1) Bruke rent såfrø uten ugrasfrø, 2) Praktisere vekstskifte, 3) Sørge for god konkurranse fra kulturveksten, 4) Hindre frøspredning. Mekanisk bekjempelse: 1) Pløying og harving, 2) Radrensing mellom planteradene, 3) Ugrasharving i kornåker, 4) Luking for hånd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-5-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er biologisk bekjempelse?',
        options: [
          { id: 'a', text: 'Å bruke kjemiske midler fra planter', isCorrect: false },
          { id: 'b', text: 'Å bruke levende organismer mot skadegjørere', isCorrect: true },
          { id: 'c', text: 'Å bekjempe skadegjørere økologisk', isCorrect: false },
          { id: 'd', text: 'Å la naturen ordne opp selv', isCorrect: false },
        ],
        solution: 'Biologisk bekjempelse er bruk av levende organismer for å kontrollere skadegjørere, for eksempel rovmidd mot skademidd, snylteveps mot bladlus, eller nematoder mot snegler.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'naturbruk-vg1-3-5-tip-1',
      type: 'tip',
      title: 'Forebygging er best',
      content: `Det beste plantevernet er å unngå problemer i utgangspunktet. Velg resistente sorter, praktiser vekstskifte, hold jorda i god hevd, og sørg for gode vekstforhold. En frisk og konkurransedyktig kulturvekst tåler mer og trenger mindre bekjempelse.`,
    },
    {
      id: 'naturbruk-vg1-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Integrert plantevern i hvete',
      problem: 'Hvordan kan en bonde bruke integrert plantevern mot soppsykdommer i hvete?',
      solution: `**Integrert plantevern i hvete:**

**1. Forebygging:**
- Velge sorter med god sykdomsresistens
- Vekstskifte - ikke hvete etter hvete
- Moderat nitrogengjødsling
- Såtidspunkt tilpasset området

**2. Overvåking:**
- Gå i åkeren regelmessig
- Se etter tegn på sykdom
- Bruke VIPS (varsling i planteskadegjørere)
- Følge med på værprognoser

**3. Terskelvurdering:**
- Hvor mye sykdom er det?
- Hvor er planten i utviklingen?
- Hvilket avlingspotensial har åkeren?
- Lønner det seg å sprøyte?

**4. Tiltak ved behov:**
- Velge riktig soppmiddel
- Sprøyte på riktig tidspunkt
- Riktig dose og teknikk
- Dokumentere behandlingen

Ved å følge disse trinnene kan bonden redusere sprøyting og fortsatt oppnå god avlingsbeskyttelse.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Nevn tre vanlige soppsykdommer i landbruket og beskriv kort hvordan de ser ut.',
        solution: '1) Mjøldogg - hvitt, melerikt belegg på bladoverflaten. 2) Gråskimmel - grått, loddendt belegg, forårsaker råte i fuktig vær. 3) Rust - oransje til brunlige flekker/pustler på blader. 4) Tørråte i potet - brune flekker på blader, råte i knollene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 3.6 Grovfôr og eng
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_3_6: TextbookChapter = {
  id: 'naturbruk-vg1-3-6',
  courseId: 'naturbruk-vg1',
  chapterNumber: '3.6',
  title: 'Grovfôr og eng',
  description: 'Dyrking og høsting av gras og grovfôr til husdyr.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive dyrking og høsting av grovfôr',
    'gjøre rede for grovfôrets betydning i husdyrhold',
  ],
  content: [
    {
      id: 'naturbruk-vg1-3-6-intro',
      type: 'text',
      content: `## Grovfôr - grunnlaget for norsk husdyrhold

Grovfôr er samlebetegnelsen på fôr med høyt fiberinnhold, som gras, høy og surfôr. Det er grunnlaget for fôring av drøvtyggere (storfe, sau, geit) og hest. I Norge er grovfôr spesielt viktig fordi vi har mye areal som bare egner seg til grasdyrking.

**Hvorfor er grovfôr viktig?**
- Utnytter areal som ikke kan dyrkes med annet
- Gir god dyrevelferd for drøvtyggere
- Norskprodusert fôrressurs
- Lagrer karbon i jorda
- Holder kulturlandskapet åpent

**Hovedtyper grovfôr:**
- Surfôr (ensilert gras)
- Høy (tørket gras)
- Beite (dyrene høster selv)
- Halm (fra kornproduksjon)`,
    },
    {
      id: 'naturbruk-vg1-3-6-def-1',
      type: 'definition',
      title: 'Grovfôr',
      content: `Grovfôr er fôr med høyt innhold av fiber og struktur, som gras, høy, surfôr og halm. Drøvtyggere trenger grovfôr for at vomma skal fungere normalt. Grovfôr har lavere energiinnhold enn kraftfôr, men er billigere og kan dyrkes på marginale arealer.`,
    },
    {
      id: 'naturbruk-vg1-3-6-text-1',
      type: 'text',
      content: `## Engvekster

**Gras:**
- Timotei - viktigste enggraset
- Engsvingel - varig og næringsrik
- Raigras - høy avling, kortvarig
- Hundegras - tåler skygge
- Bladfaks - tåler tørke

**Belgvekster:**
- Rødkløver - samler nitrogen
- Hvitkløver - varig, til beite
- Luserne - høy avling, tørkesvak

**Fordeler med kløver i enga:**
- Samler nitrogen fra lufta (150-200 kg N/dekar)
- Høyere proteininnhold
- Bedre smakelighet
- Økt biologisk mangfold

**Engtyper:**
- Kortvarig eng (2-3 år) - høy avling
- Langvarig eng (5+ år) - stabilt, lavere kostnader
- Varig beite - permanent grasmark`,
    },
    {
      id: 'naturbruk-vg1-3-6-def-2',
      type: 'definition',
      title: 'Surfôr',
      content: `Surfôr (ensilasje) er gras som er konservert ved gjæring. Graset slås, fortørkes og pakkes lufttett i rundballer, plansilo eller tårnsilo. Melkesyrebakterier omdanner sukker til melkesyre, som senker pH og konserverer fôret. Godt surfôr har pH under 4,5 og smaker godt.`,
    },
    {
      id: 'naturbruk-vg1-3-6-text-2',
      type: 'text',
      content: `## Engdyrking gjennom året

**Vår:**
- Vårgjødsling når veksten starter
- Reparere vinterskader (isbrann, utvintring)
- Eventuelt fornye dårlig eng

**Forsommer (1. slått, juni):**
- Slå når timoteien begynner å skyte
- Tidlig slått gir høy kvalitet
- Sen slått gir høyere mengde, lavere kvalitet

**Sommer (2. slått, august):**
- Gjødsle etter 1. slått
- 2. slått 6-8 uker etter første

**Høst:**
- Eventuelt 3. slått eller høstbeite
- Moderat gjødsling
- La graset vokse til før vinteren

**Beiting:**
- Slipp dyra ut når graset er 10-15 cm
- Roter mellom beiteområder
- Unngå overbeiting og tråkkskader`,
    },
    {
      id: 'naturbruk-vg1-3-6-def-3',
      type: 'definition',
      title: 'Slått',
      content: `Slått er høsting av gras ved å kutte det med slåmaskin. Antall slåtter per sesong varierer fra 1-3 avhengig av klima og driftsform. Tidspunktet for slått påvirker både avlingsmengde og fôrkvalitet - tidlig slått gir høyere kvalitet, sen slått gir større mengde.`,
    },
    {
      id: 'naturbruk-vg1-3-6-text-3',
      type: 'text',
      content: `## Konservering av gras

**Surfôr (ensilering):**
- Mest brukte metoden i Norge
- Slått gras fortørkes til 25-35% tørrstoff
- Pakkes lufttett i rundballer eller silo
- Melkesyregjæring konserverer fôret
- Kan lagres i flere år

**Høy:**
- Tradisjonell metode
- Graset tørkes til under 15% fuktighet
- Krever godt tørkevær
- Lavere risiko for feilgjæring
- Mindre vanlig i dag

**Fôrkvalitet avhenger av:**
- Tidspunkt for slått
- Artsammensetning i enga
- Gjødsling
- Tørkegrad ved ensilering
- Lagringsforhold

**Energi og protein:**
- Tidlig slått: Høy energi, høyt protein
- Sen slått: Lavere energi, lavere protein
- Kløver øker proteininnholdet`,
    },
    {
      id: 'naturbruk-vg1-3-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er grovfôr, og hvorfor er det viktig i norsk husdyrhold?',
        solution: 'Grovfôr er fôr med høyt fiberinnhold som gras, høy og surfôr. Det er viktig fordi: 1) Det utnytter areal som ikke kan dyrkes med annet, 2) Drøvtyggere trenger fiber for normal vomfunksjon, 3) Det er en norskprodusert fôrressurs, 4) Det lagrer karbon i jorda, 5) Det holder kulturlandskapet åpent.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-3-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-6-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er surfôr?',
        options: [
          { id: 'a', text: 'Tørket gras', isCorrect: false },
          { id: 'b', text: 'Gras konservert ved gjæring', isCorrect: true },
          { id: 'c', text: 'Frosset gras', isCorrect: false },
          { id: 'd', text: 'Fersk gras fra beite', isCorrect: false },
        ],
        solution: 'Surfôr er gras som er konservert ved melkesyregjæring. Graset pakkes lufttett, og melkesyrebakterier omdanner sukker til syre som konserverer fôret.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'naturbruk-vg1-3-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre viktige engvekster og beskriv kort egenskapene deres.',
        solution: '1) Timotei - viktigste enggraset i Norge, god vinterherdighet, høy kvalitet. 2) Engsvingel - varig og næringsrik, god gjenvekst etter slått. 3) Rødkløver - belgvekst som samler nitrogen fra lufta, høyt proteininnhold, forbedrer jordstrukturen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-3-6-tip-1',
      type: 'tip',
      title: 'Lukt på surfôret',
      content: `Godt surfôr har en behagelig, syrlig lukt som minner om sylteagurk. Dårlig surfôr kan lukte vondt (smørsyre), muggent eller ammoniakk. Dyra eter mer av godt surfôr, noe som gir høyere produksjon. Sjekk alltid fôrkvaliteten før du gir det til dyra!`,
    },
    {
      id: 'naturbruk-vg1-3-6-example-1',
      type: 'example',
      title: 'Eksempel: Beregning av fôrbehov',
      problem: 'En melkebonde har 30 melkekyr som trenger 12 kg tørrstoff surfôr per dag i innefôringsperioden (200 dager). Hvor mange rundballer trenger bonden?',
      solution: `**Beregning:**

**Daglig forbruk per ku:**
12 kg tørrstoff

**Antall kyr:** 30

**Innefôringsperiode:** 200 dager

**Totalt tørrstoffbehov:**
30 kyr × 12 kg/dag × 200 dager = 72 000 kg tørrstoff

**Rundballer:**
En typisk rundball inneholder ca. 200 kg tørrstoff

**Antall rundballer:**
72 000 kg / 200 kg = 360 rundballer

**Svar:** Bonden trenger minimum 360 rundballer for å dekke surfôrbehovet i innefôringsperioden.

**Tillegg:** Det er lurt å ha 10-15% ekstra for uforutsette hendelser, så bonden bør sikre ca. 400 rundballer.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-3-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-6-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva skjer med fôrkvaliteten når graset slås sent?',
        options: [
          { id: 'a', text: 'Kvaliteten øker', isCorrect: false },
          { id: 'b', text: 'Kvaliteten synker', isCorrect: true },
          { id: 'c', text: 'Kvaliteten er uendret', isCorrect: false },
          { id: 'd', text: 'Bare proteininnholdet øker', isCorrect: false },
        ],
        solution: 'Når graset slås sent, synker fôrkvaliteten. Energi- og proteininnholdet går ned, mens fiberinnholdet øker. Avlingsmengden blir større, men fôrverdien lavere.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'naturbruk-vg1-3-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hvorfor kløver er gunstig å ha i enga.',
        solution: 'Kløver er gunstig fordi: 1) Den samler nitrogen fra lufta (150-200 kg N/dekar) gjennom bakterier i røttene, 2) Den gir høyere proteininnhold i fôret, 3) Den forbedrer smakeligheten for dyra, 4) Den øker biologisk mangfold og gir mat til pollinerende insekter, 5) Den reduserer behovet for nitrogengjødsel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 3.7 Økologisk landbruk
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_3_7: TextbookChapter = {
  id: 'naturbruk-vg1-3-7',
  courseId: 'naturbruk-vg1',
  chapterNumber: '3.7',
  title: 'Økologisk landbruk',
  description: 'Prinsipper og praksis i økologisk produksjon.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for prinsipper i økologisk landbruk',
    'sammenligne økologisk og konvensjonell produksjon',
  ],
  content: [
    {
      id: 'naturbruk-vg1-3-7-intro',
      type: 'text',
      content: `## Økologisk landbruk - i takt med naturen

Økologisk landbruk er en produksjonsform som bygger på naturens egne prosesser og kretsløp. Målet er å produsere mat på en måte som tar vare på miljø, biologisk mangfold og dyrevelferd, uten bruk av kjemisk-syntetiske plantevernmidler og kunstgjødsel.

**Økologisk landbruk i Norge:**
- Ca. 4-5% av jordbruksarealet drives økologisk
- Sterkest i melke- og kjøttproduksjon
- Økende etterspørsel etter økologiske produkter
- Støttes gjennom tilskuddsordninger
- Regulert av Debio-merket`,
    },
    {
      id: 'naturbruk-vg1-3-7-def-1',
      type: 'definition',
      title: 'Økologisk landbruk',
      content: `Økologisk landbruk er en produksjonsmetode som ikke bruker kjemisk-syntetiske plantevernmidler eller kunstgjødsel. Produksjonen bygger på naturlige prosesser, vekstskifte, organisk gjødsel og biologisk mangfold. I Norge må økologisk produksjon godkjennes av Debio for å kunne merkes og selges som økologisk.`,
    },
    {
      id: 'naturbruk-vg1-3-7-text-1',
      type: 'text',
      content: `## De fire prinsippene for økologisk landbruk

**1. Helse**
- Jordas, plantenes, dyras og menneskets helse henger sammen
- Produsere mat som fremmer helse
- Unngå bruk av helseskadelige stoffer

**2. Økologi**
- Arbeide med naturens kretsløp og økosystemer
- Bevare og bygge opp biologisk mangfold
- Minimere forurensning og ressursbruk

**3. Rettferdighet**
- Rettferdig fordeling av ressurser
- God dyrevelferd
- Gode arbeidsforhold
- Bærekraft for fremtidige generasjoner

**4. Varsomhet**
- Ta ansvar for miljø og helse
- Føre-var-prinsippet ved usikkerhet
- Bygge på tradisjonell kunnskap og vitenskap`,
    },
    {
      id: 'naturbruk-vg1-3-7-def-2',
      type: 'definition',
      title: 'Debio',
      content: `Debio er den norske kontrollinstansen for økologisk produksjon. Debio kontrollerer og godkjenner økologiske gårder og bedrifter, og Ø-merket garanterer at produktet er produsert etter økologiske regler. Alle som vil selge produkter som økologiske, må være godkjent av Debio.`,
    },
    {
      id: 'naturbruk-vg1-3-7-text-2',
      type: 'text',
      content: `## Økologisk planteproduksjon

**Gjødsling:**
- Husdyrgjødsel fra økologisk drift
- Kompost og grønngjødsel
- Belgvekster som samler nitrogen
- Ingen kunstgjødsel tillatt
- Næringsstoffbalanse viktig

**Plantevern:**
- Ingen kjemisk-syntetiske midler
- Forebygging gjennom vekstskifte
- Resistente sorter
- Mekanisk ugrasbekjempelse
- Biologisk bekjempelse
- Noen godkjente naturlige midler

**Såfrø og plantemateriale:**
- Fortrinnsvis økologisk såfrø
- Ikke genmodifisert materiale
- Egen frøavl oppmuntres

**Vekstskifte:**
- Minimum 5-årig vekstskifte
- Belgvekster for nitrogensamling
- Grønngjødsling
- Variasjon for å bryte sykdomssykluser`,
    },
    {
      id: 'naturbruk-vg1-3-7-def-3',
      type: 'definition',
      title: 'Grønngjødsling',
      content: `Grønngjødsling er dyrking av planter som pløyes ned i jorda for å tilføre næring og organisk materiale. Vanligvis brukes belgvekster som kløver og vikker, som samler nitrogen fra lufta. Grønngjødslingsåret gir ingen avling, men bygger opp jordfruktbarheten til påfølgende år.`,
    },
    {
      id: 'naturbruk-vg1-3-7-text-3',
      type: 'text',
      content: `## Sammenligning: Økologisk vs. konvensjonell

| Faktor | Økologisk | Konvensjonell |
|--------|-----------|---------------|
| Gjødsel | Organisk | Kunst- og organisk |
| Plantevern | Forebygging, naturlige midler | Kjemiske midler tillatt |
| Avling | Ofte 10-30% lavere | Høyere avling |
| Pris | Høyere | Lavere |
| Miljøpåvirkning | Lavere | Varierende |
| Arbeidsinnsats | Ofte høyere | Lavere |
| Biodiversitet | Ofte høyere | Varierende |

**Utfordringer i økologisk drift:**
- Lavere avlinger
- Mer arbeid med ugras
- Vanskeligere å dekke næringsbehov
- Begrenset tilgang på økologisk fôr
- Høyere produksjonskostnader

**Fordeler med økologisk drift:**
- Bedre for miljø og biologisk mangfold
- Høyere priser på produktene
- Tilskudd fra staten
- Mindre eksponering for kjemikalier
- Økende etterspørsel`,
    },
    {
      id: 'naturbruk-vg1-3-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er økologisk landbruk, og hva er hovedprinsippene?',
        solution: 'Økologisk landbruk er produksjon uten kjemisk-syntetiske plantevernmidler og kunstgjødsel, basert på naturlige prosesser. De fire hovedprinsippene er: 1) Helse - fremme helse for jord, planter, dyr og mennesker, 2) Økologi - arbeide med naturens kretsløp, 3) Rettferdighet - rettferdig fordeling og god dyrevelferd, 4) Varsomhet - ta ansvar for miljø og helse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-3-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-7-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er Debio?',
        options: [
          { id: 'a', text: 'En økologisk matbutikk', isCorrect: false },
          { id: 'b', text: 'Kontrollinstansen for økologisk produksjon i Norge', isCorrect: true },
          { id: 'c', text: 'En type økologisk gjødsel', isCorrect: false },
          { id: 'd', text: 'En interesseorganisasjon for bønder', isCorrect: false },
        ],
        solution: 'Debio er den norske kontrollinstansen for økologisk produksjon. De kontrollerer og godkjenner økologiske gårder, og Ø-merket garanterer at produktet er økologisk.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'naturbruk-vg1-3-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan skaffer økologiske bønder nitrogen til plantene uten kunstgjødsel?',
        solution: 'Økologiske bønder skaffer nitrogen ved: 1) Husdyrgjødsel fra økologisk drift, 2) Belgvekster (kløver, erter) som samler nitrogen fra lufta med hjelp av bakterier i røttene, 3) Grønngjødsling der belgvekster dyrkes og pløyes ned, 4) Kompost med nitrogenrikt materiale.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-3-7-tip-1',
      type: 'tip',
      title: 'Karensperiode',
      content: `En gård som vil legge om til økologisk drift, må gjennom en karensperiode på minst 2 år for planteproduksjon. I denne perioden må gården følge økologiske regler, men produktene kan ikke selges som økologiske. Etter godkjent karens kan produktene merkes med Debios Ø-merke.`,
    },
    {
      id: 'naturbruk-vg1-3-7-example-1',
      type: 'example',
      title: 'Eksempel: Vekstskifte i økologisk korndyrking',
      problem: 'Hvordan kan et vekstskifte se ut på en økologisk korngård?',
      solution: `**5-årig vekstskifte på økologisk korngård:**

**År 1: Grønngjødsling**
- Kløver og gras
- Samler nitrogen fra lufta
- Bygger opp organisk materiale
- Ingen avling - investering i jorda

**År 2: Hvete**
- Utnytter nitrogen fra grønngjødsling
- God konkurranse mot ugras
- Høstvete om mulig for tidlig dekking

**År 3: Havre med gjenlegg**
- Havre tåler mer ugras
- Gjenlegg av kløver/gras under havren

**År 4: Eng (slått eller beite)**
- Kløver samler nitrogen
- Bryter sykdomssykluser
- Kan utnyttes til fôr

**År 5: Bygg eller erter**
- Erter samler nitrogen
- Variasjon i vekstfamilie

**Fordeler:**
- Nitrogenforsyning uten kunstgjødsel
- Mindre ugras, sykdom og skadedyr
- Bedre jordstruktur`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-3-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn tre fordeler og tre utfordringer med økologisk landbruk.',
        solution: 'Fordeler: 1) Bedre for miljø og biologisk mangfold, 2) Høyere priser på produktene, 3) Tilskudd fra staten, 4) Mindre eksponering for kjemikalier. Utfordringer: 1) Lavere avlinger (10-30% mindre), 2) Mer arbeid med ugrasbekjempelse, 3) Vanskeligere å dekke plantenes næringsbehov, 4) Høyere produksjonskostnader.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-3-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-7-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er grønngjødsling?',
        options: [
          { id: 'a', text: 'Gjødsel laget av grønne planter', isCorrect: false },
          { id: 'b', text: 'Planter som dyrkes og pløyes ned for å gi næring', isCorrect: true },
          { id: 'c', text: 'Grønnfarget kunstgjødsel', isCorrect: false },
          { id: 'd', text: 'Gjødsel fra grønne grønnsaker', isCorrect: false },
        ],
        solution: 'Grønngjødsling er dyrking av planter (vanligvis belgvekster) som pløyes ned i jorda for å tilføre næring og organisk materiale. Det bygger opp jordfruktbarheten.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 3.8 Årets gang på gården
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_3_8: TextbookChapter = {
  id: 'naturbruk-vg1-3-8',
  courseId: 'naturbruk-vg1',
  chapterNumber: '3.8',
  title: 'Årets gang på gården',
  description: 'Arbeidsoppgaver og rutiner gjennom året på en gård.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive arbeidsoppgaver på en gård gjennom året',
    'forstå sammenhengen mellom sesong og arbeidsoppgaver',
  ],
  content: [
    {
      id: 'naturbruk-vg1-3-8-intro',
      type: 'text',
      content: `## Bondens år

Arbeidet på en gård følger årstidene og naturens rytme. Selv om moderne teknologi har endret mye, er bonden fortsatt avhengig av vær, temperatur og daglengde. Planlegging og timing er avgjørende for å lykkes med produksjonen.

**Årshjulet på gården:**
- Hver sesong har sine arbeidsoppgaver
- Noen perioder er svært travle
- Dyrestell er daglig hele året
- God planlegging er nøkkelen
- Fleksibilitet ved uforutsett vær`,
    },
    {
      id: 'naturbruk-vg1-3-8-def-1',
      type: 'definition',
      title: 'Onnetid',
      content: `Onnetid er perioder med intensivt arbeid i landbruket, som våronn (såing) og skuronn (innhøsting). I disse periodene arbeider bonden ofte lange dager for å utnytte godt vær og få arbeidet gjort til rett tid. Ordet «onn» kommer fra norrønt og betyr arbeid eller strev.`,
    },
    {
      id: 'naturbruk-vg1-3-8-text-1',
      type: 'text',
      content: `## Vår (mars-mai)

**Forberedelser:**
- Vedlikehold og klargjøring av maskiner
- Bestille såfrø, gjødsel og plantevernmidler
- Planlegge vekstskifte og såplan
- Sjekke jordas tilstand

**Våronn:**
- Jordarbeiding når jorda er laglig
- Gjødsling
- Såing av vårkorn og grønnsaker
- Planting av poteter
- Setting av grønnsaksplanter

**Husdyr:**
- Lammesesong på sauegårder
- Kalving hos melkekyr
- Forberede beitesesongen
- Vårklipping av sau

**Andre oppgaver:**
- Reparere gjerder
- Ordne beiteområder
- Første gjødsling av eng`,
    },
    {
      id: 'naturbruk-vg1-3-8-def-2',
      type: 'definition',
      title: 'Laglig jord',
      content: `Laglig jord er jord som har riktig fuktighet for jordarbeiding. For våt jord pakkes og blir klumpete, for tørr jord er vanskelig å arbeide. Bondens erfaring og «knyttenevprøven» (klemme en jordklump) brukes for å vurdere om jorda er laglig.`,
    },
    {
      id: 'naturbruk-vg1-3-8-text-2',
      type: 'text',
      content: `## Sommer (juni-august)

**Slått og fôrbergning:**
- Første slått av eng (juni)
- Fortørking og pressing av rundballer
- Andre slått (august)
- Eventuelt tredje slått

**Plantestell:**
- Ugrasbekjempelse
- Gjødsling og vanning
- Overvåking av skadegjørere
- Delgjødsling av korn

**Beiting:**
- Dyra er på beite
- Tilsyn og flytting mellom beiter
- Parasittbehandling ved behov

**Tidlig høsting:**
- Jordbær og andre bær
- Tidlige grønnsaker
- Nypoteter

**Andre oppgaver:**
- Gjerdevedlikehold
- Rydding av beiter
- Planlegge høsten`,
    },
    {
      id: 'naturbruk-vg1-3-8-text-3',
      type: 'text',
      content: `## Høst (september-november)

**Skuronn:**
- Tresking av korn
- Tørking og lagring
- Pressing av halm

**Potet og grønnsaker:**
- Potetopptaking
- Høsting av rotgrønnsaker
- Lagring i kjølelager

**Frukt og bær:**
- Eplehøsting
- Plommer og pærer
- Bringebær (sein)

**Husdyr:**
- Innsett av dyr fra beite
- Parring av sau
- Slakting av lam

**Jordarbeiding:**
- Pløying av stubbåker
- Såing av høstkorn
- Kalking og grunngjødsling

**Annet:**
- Vedlikehold av bygninger
- Klargjøre for vinter
- Økonomi og regnskap`,
    },
    {
      id: 'naturbruk-vg1-3-8-def-3',
      type: 'definition',
      title: 'Innefôring',
      content: `Innefôring er perioden når husdyra står inne i fjøset og fôres med lagret fôr (surfôr, høy, kraftfôr). I Norge varer innefôringsperioden vanligvis fra oktober/november til april/mai, avhengig av klima og gård. Lengden på innefôringsperioden påvirker fôrbehov og kostnader.`,
    },
    {
      id: 'naturbruk-vg1-3-8-text-4',
      type: 'text',
      content: `## Vinter (desember-februar)

**Daglig fjøsarbeid:**
- Fôring morgen og kveld
- Melking (melkeproduksjon)
- Renhold og strøing
- Tilsyn med dyrenes helse

**Vedlikehold:**
- Reparasjon av maskiner
- Vedlikehold av bygninger
- Klargjøring til våren

**Planlegging:**
- Bestille såvarer
- Planlegge neste sesong
- Kurs og faglig oppdatering

**Skogsarbeid:**
- Tømmerhogst
- Vedhogst
- Rydding

**Økonomi:**
- Årsoppgjør og regnskap
- Søknader om tilskudd
- Budsjett for neste år

**Hvile:**
- Roligere periode
- Ferie om mulig
- Familie og sosialt`,
    },
    {
      id: 'naturbruk-vg1-3-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva menes med våronn, og hvilke arbeidsoppgaver inngår?',
        solution: 'Våronn er den intensive arbeidsperioden om våren med såing og planting. Oppgaver inkluderer: 1) Jordarbeiding (pløying, harving) når jorda er laglig, 2) Gjødsling, 3) Såing av korn og grønnsaker, 4) Setting av poteter, 5) Planting av grønnsaksplanter. God timing og fint vær er avgjørende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-3-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-8-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Når gjennomføres vanligvis første slått av eng på Østlandet?',
        options: [
          { id: 'a', text: 'Mai', isCorrect: false },
          { id: 'b', text: 'Juni', isCorrect: true },
          { id: 'c', text: 'Juli', isCorrect: false },
          { id: 'd', text: 'August', isCorrect: false },
        ],
        solution: 'Første slått gjennomføres vanligvis i juni, når timoteien begynner å skyte. Tidlig slått gir høy fôrkvalitet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'naturbruk-vg1-3-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv de viktigste arbeidsoppgavene på en gård om høsten.',
        solution: 'Høsten er travelt med: 1) Tresking og lagring av korn (skuronn), 2) Potetopptaking og grønnsakshøsting, 3) Frukthøsting (epler, plommer), 4) Innsett av dyr fra beite, 5) Pløying og såing av høstkorn, 6) Slakting av lam, 7) Vedlikehold og klargjøring for vinter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-3-8-tip-1',
      type: 'tip',
      title: 'Værmelding og planlegging',
      content: `Moderne bønder følger nøye med på værmeldingen, spesielt i onnetidene. En god værprognose kan bety forskjellen mellom berget avling og ødelagt fôr. Mange bruker apper og værstasjoner for å planlegge arbeidet best mulig.`,
    },
    {
      id: 'naturbruk-vg1-3-8-example-1',
      type: 'example',
      title: 'Eksempel: Årshjul for en melkegård',
      problem: 'Hvordan ser årshjulet ut for en typisk melkegård på Østlandet?',
      solution: `**Årshjul for melkegård:**

**Januar-februar:**
- Daglig melking og fjøsarbeid
- Kalving starter
- Maskinvedlikehold
- Planlegging og kurs

**Mars-april:**
- Våronn begynner
- Gjødsling av eng
- Kalvinger fortsetter
- Klargjøre beite

**Mai-juni:**
- Såing av korn
- Beiteslipp
- Første slått (slutten av juni)
- Silolegging

**Juli-august:**
- Andre slått
- Beiteperiode
- Lite melking (sinkyr)
- Ferie i roligere perioder

**September-oktober:**
- Tredje slått/høstbeite
- Korntresking
- Innsett av kyr
- Kalvinger starter igjen

**November-desember:**
- Full innefôring
- Daglig fjøsrutine
- Regnskap og søknader
- Juleforberedelser

Melking skjer daglig hele året, vanligvis morgen og kveld.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-3-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva gjør bonden om vinteren når det er snø ute?',
        solution: 'Om vinteren: 1) Daglig stell av husdyr (fôring, melking, renhold), 2) Vedlikehold og reparasjon av maskiner, 3) Planlegging av neste sesong, 4) Kurs og faglig oppdatering, 5) Skogsarbeid og vedhogst, 6) Regnskap og økonomi, 7) Søknader om tilskudd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-3-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-8-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva betyr at jorda er "laglig"?',
        options: [
          { id: 'a', text: 'At jorda har riktig næringsinnhold', isCorrect: false },
          { id: 'b', text: 'At jorda har riktig fuktighet for jordarbeiding', isCorrect: true },
          { id: 'c', text: 'At jorda er fri for ugras', isCorrect: false },
          { id: 'd', text: 'At jorda har riktig temperatur', isCorrect: false },
        ],
        solution: 'Laglig jord har riktig fuktighet for jordarbeiding. For våt jord pakkes og ødelegges, for tørr jord er vanskelig å arbeide.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Dyrehold og dyrevelferd
// ============================================================================

// ----------------------------------------------------------------------------
// 4.1 Dyrevelferd og de fem friheter
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_4_1: TextbookChapter = {
  id: 'naturbruk-vg1-4-1',
  courseId: 'naturbruk-vg1',
  chapterNumber: '4.1',
  title: 'Dyrevelferd og de fem friheter',
  description: 'Grunnleggende prinsipper for dyrevelferd og lovverk som regulerer dyrehold.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for de fem friheter for dyr',
    'forklare hvordan dyrevelferdsloven regulerer dyrehold',
  ],
  content: [
    {
      id: 'naturbruk-vg1-4-1-intro',
      type: 'text',
      content: `## Dyrevelferd - å ivareta dyras behov

Dyrevelferd handler om hvordan dyr har det - deres fysiske og mentale tilstand. God dyrevelferd betyr at dyra er friske, har det de trenger, og kan utfolde naturlig atferd. I Norge har vi strenge krav til dyrehold, og dyrevelferd er en viktig del av all husdyrproduksjon.

**Hvorfor er dyrevelferd viktig?**
- Etisk ansvar for dyr i vår varetekt
- Friske, fornøyde dyr produserer bedre
- Forbrukere forventer god dyrevelferd
- Lovpålagt gjennom dyrevelferdsloven
- Del av bærekraftig matproduksjon`,
    },
    {
      id: 'naturbruk-vg1-4-1-def-1',
      type: 'definition',
      title: 'Dyrevelferd',
      content: `Dyrevelferd beskriver dyrets tilstand over tid - hvordan det har det fysisk og mentalt. God dyrevelferd innebærer at dyret er friskt, har tilgang på mat, vann og ly, kan utføre naturlig atferd, og ikke opplever frykt, smerte eller stress. Dyrevelferd vurderes ut fra dyrets perspektiv.`,
    },
    {
      id: 'naturbruk-vg1-4-1-text-1',
      type: 'text',
      content: `## De fem friheter

De fem friheter er internasjonalt anerkjente prinsipper for dyrevelferd, utviklet i Storbritannia på 1960-tallet. De beskriver minimumskrav for god dyrevelferd:

**1. Frihet fra sult og tørst**
- Tilgang til friskt vann
- Tilstrekkelig og riktig fôr
- Fôring tilpasset dyrets behov

**2. Frihet fra ubehag**
- Egnet miljø med ly og hvileområde
- Riktig temperatur og ventilasjon
- Rent og tørt underlag

**3. Frihet fra smerte, skade og sykdom**
- Forebygging av sykdom
- Rask behandling ved behov
- Tilgang til veterinær

**4. Frihet til å utøve normal atferd**
- Tilstrekkelig plass
- Mulighet for sosial kontakt
- Berikelse av miljøet

**5. Frihet fra frykt og stress**
- Unngå situasjoner som skaper frykt
- Skånsom håndtering
- Forutsigbare rutiner`,
    },
    {
      id: 'naturbruk-vg1-4-1-def-2',
      type: 'definition',
      title: 'Dyrevelferdsloven',
      content: `Dyrevelferdsloven (Lov om dyrevelferd) er den norske loven som regulerer behandling av dyr. Loven slår fast at dyr har egenverdi, at de skal behandles godt og beskyttes mot fare for unødige påkjenninger og belastninger, og at de skal holdes i et godt miljø tilpasset artens behov.`,
    },
    {
      id: 'naturbruk-vg1-4-1-text-2',
      type: 'text',
      content: `## Dyrevelferdsloven

**Hovedprinsipper i loven:**
- Dyr har egenverdi uavhengig av nytteverdi
- Dyr skal behandles godt og beskyttes
- Dyreeier har ansvar for dyras velferd
- Dyr skal ikke utsettes for unødige påkjenninger

**Krav til dyrehold:**
- Tilsyn med dyr minst en gang daglig
- Tilstrekkelig fôr, vann og stell
- Egnet oppholdssted
- Nødvendig veterinærbehandling
- Kompetanse hos dyreeier

**Mattilsynets rolle:**
- Fører tilsyn med dyrehold
- Kan gi pålegg og vedtak
- Kan frata dyr ved alvorlig vanskjøtsel
- Behandler varsler om dårlig dyrehold`,
    },
    {
      id: 'naturbruk-vg1-4-1-def-3',
      type: 'definition',
      title: 'Egenverdi',
      content: `Egenverdi betyr at noe har verdi i seg selv, uavhengig av nytten det har for andre. Dyrevelferdsloven slår fast at dyr har egenverdi - de har verdi bare ved å eksistere, ikke bare som ressurs for mennesker. Dette er et viktig etisk prinsipp som påvirker hvordan vi skal behandle dyr.`,
    },
    {
      id: 'naturbruk-vg1-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'List opp de fem friheter og forklar kort hva hver av dem innebærer.',
        solution: '1) Frihet fra sult og tørst - tilgang til nok mat og vann. 2) Frihet fra ubehag - egnet miljø med ly og hvileområde. 3) Frihet fra smerte, skade og sykdom - forebygging og behandling. 4) Frihet til å utøve normal atferd - plass og mulighet for naturlig atferd. 5) Frihet fra frykt og stress - skånsom håndtering og trygge forhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva menes med at dyr har egenverdi?',
        options: [
          { id: 'a', text: 'At dyr har økonomisk verdi', isCorrect: false },
          { id: 'b', text: 'At dyr har verdi i seg selv, uavhengig av nytte', isCorrect: true },
          { id: 'c', text: 'At dyr eier seg selv', isCorrect: false },
          { id: 'd', text: 'At dyr er like mye verdt som mennesker', isCorrect: false },
        ],
        solution: 'Egenverdi betyr at dyr har verdi i seg selv, bare ved å eksistere, ikke bare som ressurs for mennesker.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'naturbruk-vg1-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er Mattilsynets rolle i forhold til dyrevelferd?',
        solution: 'Mattilsynet fører tilsyn med dyrehold i Norge. De inspiserer gårder, kan gi pålegg og vedtak ved brudd på reglene, kan ta dyr fra eier ved alvorlig vanskjøtsel, og behandler varsler om dårlig dyrehold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-4-1-tip-1',
      type: 'tip',
      title: 'Varsle om dårlig dyrehold',
      content: `Hvis du ser dyr som lider eller ikke får stell, kan du varsle Mattilsynet. De har en egen varslingstelefon og nettskjema. Du kan være anonym. Varsling er viktig for å hjelpe dyr som ikke kan hjelpe seg selv, og det er ikke det samme som å sladre - det er å ta ansvar.`,
    },
    {
      id: 'naturbruk-vg1-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Vurdering av de fem friheter',
      problem: 'Hvordan kan du vurdere om en besetning med melkekyr oppfyller de fem friheter?',
      solution: `**Vurdering av de fem friheter for melkekyr:**

**1. Frihet fra sult og tørst:**
- Er det nok drikkenipler/kar?
- Er vannet rent og friskt?
- Får alle kyr tilgang til fôrbrettet?

**2. Frihet fra ubehag:**
- Er fjøset rent og tørt?
- Er det nok plass i liggebåsene?
- Er temperaturen behagelig?

**3. Frihet fra smerte, skade og sykdom:**
- Har kyrne skader eller sår?
- Er det tegn til halthet?
- Får syke dyr behandling?

**4. Frihet til normal atferd:**
- Kan kyrne bevege seg fritt?
- Har de mulighet til sosial kontakt?
- Har de tilgang til beite?

**5. Frihet fra frykt og stress:**
- Hvordan reagerer kyrne på mennesker?
- Er håndteringen rolig?`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvor ofte skal husdyr ha tilsyn ifølge dyrevelferdsloven?',
        options: [
          { id: 'a', text: 'Minst en gang i uken', isCorrect: false },
          { id: 'b', text: 'Minst en gang daglig', isCorrect: true },
          { id: 'c', text: 'Minst to ganger daglig', isCorrect: false },
          { id: 'd', text: 'Etter behov', isCorrect: false },
        ],
        solution: 'Ifolge dyrevelferdsloven skal husdyr ha tilsyn minst en gang daglig.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'naturbruk-vg1-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor er det viktig med god dyrevelferd i husdyrproduksjon?',
        solution: 'God dyrevelferd er viktig fordi: 1) Vi har etisk ansvar for dyr i var varetekt, 2) Friske og fornoyde dyr produserer bedre, 3) Forbrukere forventer god dyrevelferd, 4) Det er lovpalagt gjennom dyrevelferdsloven, 5) Det er del av barekraftig matproduksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 4.2 Storfe og melkeproduksjon
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_4_2: TextbookChapter = {
  id: 'naturbruk-vg1-4-2',
  courseId: 'naturbruk-vg1',
  chapterNumber: '4.2',
  title: 'Storfe og melkeproduksjon',
  description: 'Biologi, hold og produksjon av melkekyr og kjottfe.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive storfehold og melkeproduksjon',
    'gjore rede for kuas biologi og behov',
  ],
  content: [
    {
      id: 'naturbruk-vg1-4-2-intro',
      type: 'text',
      content: `## Storfe - grunnfjellet i norsk husdyrhold

Storfe er den viktigste husdyrarten i Norge malt i okonomisk verdi. Vi har bade melkeproduksjon og kjottproduksjon, og storfe utnytter grovforressurser som gras og surfor som mennesker ikke kan spise direkte.

**Storfe i Norge:**
- Ca. 220 000 melkekyr
- Ca. 90 000 ammekyr (kjottproduksjon)
- Melkeproduksjon over hele landet
- Norsk rodt fe (NRF) er hovedrasen`,
    },
    {
      id: 'naturbruk-vg1-4-2-def-1',
      type: 'definition',
      title: 'Drovtygger',
      content: `Drovtyggere er pattedyr med sammensatt mage (fire magerom) som kan fordoye grovfor som gras. Maten tygges om igjen (drovtygging) for bedre fordoyelse. Vom, nettmage, bladmage og loype utgjor magesystemet. Storfe, sau og geit er drovtyggere.`,
    },
    {
      id: 'naturbruk-vg1-4-2-text-1',
      type: 'text',
      content: `## Kuas biologi

**Fordoyelsessystemet:**
- Vomma: Gjaeringskammer med mikrober
- Nettmagen: Sorterer foret
- Bladmagen: Suger opp vann
- Loypen: Egentlig magesekk

**Reproduksjon:**
- Brunst hver 21. dag
- Drektighet: 9 maneder (280 dager)
- Kalver vanligvis en kalv
- Melkeproduksjon starter etter kalving
- Laktasjonsperiode: ca. 305 dager

**Naturlig atferd:**
- Flokkdyr med sosial rangordning
- Beiter 6-8 timer daglig
- Hviler og drovtygger
- Nysgjerrige og sosiale`,
    },
    {
      id: 'naturbruk-vg1-4-2-def-2',
      type: 'definition',
      title: 'Laktasjon',
      content: `Laktasjon er perioden kua produserer melk etter kalving. En laktasjonsperiode varer vanligvis ca. 305 dager. Melkemengden er hoyest de forste manedene og avtar gradvis.`,
    },
    {
      id: 'naturbruk-vg1-4-2-def-3',
      type: 'definition',
      title: 'Melkerobot',
      content: `En melkerobot (AMS - automatisk melkesystem) er et system der kua selv gar til melking nar hun vil. Roboten vasker spenene, setter pa melkeorganet, melker og desinfiserer etterpa. Melkeroboten registrerer melkemengde, kvalitet og helsedata for hver ku.`,
    },
    {
      id: 'naturbruk-vg1-4-2-text-2',
      type: 'text',
      content: `## Oppstallingsformer

**Losdrift:**
- Kyrne gar fritt i fjoset
- Liggebaser for hvile
- Felles forbrett
- Kan ha melkerobot
- Standard i nye fjos

**Basfjos:**
- Kyrne star bundet pa bas
- Tradisjonelt i Norge
- Krav om mosjon/beite
- Fases ut ved nybygg

**Krav til dyrevelferd:**
- Minimum plass per dyr
- Tilgang til beite eller mosjon
- Godt liggeunderlag
- Renhold og luftkvalitet
- Daglig tilsyn`,
    },
    {
      id: 'naturbruk-vg1-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva en drovtygger er og nevn de fire magerommene.',
        solution: 'En drovtygger er et pattedyr med sammensatt mage som kan fordoye grovfor som gras. De fire magerommene er: 1) Vomma - gjaeringskammer med mikrober, 2) Nettmagen - sorterer foret, 3) Bladmagen - suger opp vann, 4) Loypen - den egentlige magesekken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvor lenge varer drektigheten hos storfe?',
        options: [
          { id: 'a', text: 'Ca. 5 maneder', isCorrect: false },
          { id: 'b', text: 'Ca. 9 maneder', isCorrect: true },
          { id: 'c', text: 'Ca. 12 maneder', isCorrect: false },
          { id: 'd', text: 'Ca. 6 maneder', isCorrect: false },
        ],
        solution: 'Drektigheten hos storfe varer ca. 9 maneder (280 dager).',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'naturbruk-vg1-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen mellom losdrift og basfjos?',
        solution: 'I losdrift gar kyrne fritt i fjoset med liggebaser og felles forbrett, kan ha melkerobot. I basfjos star kyrne bundet pa hver sin bas. Losdrift gir bedre mulighet for naturlig atferd og er standard i nye fjos.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-4-2-tip-1',
      type: 'tip',
      title: 'Kuas kroppssprak',
      content: `Du kan lese kuas humor pa kroppspraket. Avslappede orer og rolig drovtygging = fornoyd ku. Stive orer, spent kropp og stirrende blikk = stresset eller redd. Laer a lese dyra for a oppdage problemer tidlig!`,
    },
    {
      id: 'naturbruk-vg1-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Forplan for melkeku',
      problem: 'Hvordan kan en dagsrasjon for en melkeku som yter 30 liter melk se ut?',
      solution: `**Forplan for hoytytende melkeku:**

**Grovfor:**
- Surfor (grassurfor): ca. 40 kg
- Gir ca. 10-12 kg torrstoff

**Kraftfor:**
- Melkekraftfor: ca. 10-12 kg
- Tilpasses etter ytelse

**Vann:**
- Fri tilgang til rent vann
- En ku drikker 80-150 liter/dag

**Balanse:**
- Nok fiber for drovtygging
- Protein tilpasset ytelse
- Energi for hoy produksjon`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er en melkerobot og hvilke fordeler har den?',
        solution: 'En melkerobot er et automatisk melkesystem der kua selv gar til melking. Fordeler: 1) Kua velger selv nar hun vil melkes, 2) Registrerer melkemengde og kvalitet automatisk, 3) Overvaker helse, 4) Gir fleksibel arbeidstid for bonden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hvor mye vann drikker en melkeku per dag?',
        options: [
          { id: 'a', text: '20-30 liter', isCorrect: false },
          { id: 'b', text: '40-60 liter', isCorrect: false },
          { id: 'c', text: '80-150 liter', isCorrect: true },
          { id: 'd', text: '200-300 liter', isCorrect: false },
        ],
        solution: 'En melkeku drikker 80-150 liter vann per dag, avhengig av ytelse og temperatur.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 4.3 Sau, geit og smafe
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_4_3: TextbookChapter = {
  id: 'naturbruk-vg1-4-3',
  courseId: 'naturbruk-vg1',
  chapterNumber: '4.3',
  title: 'Sau, geit og smafe',
  description: 'Biologi, hold og produksjon av sau og geit.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive saue- og geitehold',
    'gjore rede for smafes biologi og produksjon',
  ],
  content: [
    {
      id: 'naturbruk-vg1-4-3-intro',
      type: 'text',
      content: `## Smafe - sau og geit

Sau og geit er smafe som har vaert viktige husdyr i Norge i tusenvis av ar. De utnytter utmarksbeiter i fjell og langs kysten, og bidrar til a holde kulturlandskapet apent.

**Sau i Norge:**
- Ca. 14 000 sauebruk
- Kjott- og ullproduksjon
- Utmarksbeite om sommeren
- Norsk hvit sau er hovedrasen

**Geit i Norge:**
- Ca. 300 geitebruk
- Melk til ost (geitost, brunost)
- Mest pa Vestlandet`,
    },
    {
      id: 'naturbruk-vg1-4-3-def-1',
      type: 'definition',
      title: 'Utmarksbeite',
      content: `Utmarksbeite er beiteomrader i utmark - skog, fjell og hei som ikke er dyrket jord. I Norge har sau og geit tradisjon for a beite i utmark om sommeren, der de utnytter gras og urter mennesker ikke kan bruke direkte.`,
    },
    {
      id: 'naturbruk-vg1-4-3-text-1',
      type: 'text',
      content: `## Sauens biologi

**Reproduksjon:**
- Brunst om hosten (lysstyrt)
- Drektighet: 5 maneder (147 dager)
- Lamming om varen (mars-mai)
- 1-3 lam per soye

**Arssyklus:**
- Vinter: Inneforing, drektighet
- Var: Lamming, klipping
- Sommer: Utmarksbeite
- Host: Sanking, parring, slakting

**Raser:**
- Norsk hvit sau (mest vanlig)
- Spaelsau (kortere ull)
- Gammelnorsk sau (villsau)`,
    },
    {
      id: 'naturbruk-vg1-4-3-def-2',
      type: 'definition',
      title: 'Lamming',
      content: `Lamming er perioden nar soyene foder lam. I Norge skjer lamming vanligvis i mars-mai. Bonden ma folge tett med for a hjelpe ved vanskelige fodsler og sikre at lammene far ramelk.`,
    },
    {
      id: 'naturbruk-vg1-4-3-def-3',
      type: 'definition',
      title: 'Sanking',
      content: `Sanking er innhenting av sau og lam fra utmarksbeite om hosten. Sauen har beitet fritt i fjellet gjennom sommeren og ma samles inn for vinteren. Sanking skjer ofte som dugnad med mange deltakere og hunder.`,
    },
    {
      id: 'naturbruk-vg1-4-3-text-2',
      type: 'text',
      content: `## Utfordringer i smafehold

**Rovdyr:**
- Ulv, jerv, gaupe, orn, bjorn
- Store tap i enkelte omrader
- Forebyggende tiltak
- Erstatningsordninger

**Sykdommer:**
- Parasitter (rundorm, flatt)
- Footrot (klauvsjuke)
- Mastitt (jurbetennelse)

**Dyrevelferd pa beite:**
- Daglig tilsyn vanskelig i utmark
- Elektronisk overvaking (GPS)
- Radiobjeller for sporing`,
    },
    {
      id: 'naturbruk-vg1-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv sauens arssyklus fra vinter til host.',
        solution: 'Vinter: Soyene star inne og fores, er drektige. Var: Lamming i mars-mai, klipping av ull, slipp pa varbeite. Sommer: Sau og lam beiter i utmark/fjell. Host: Sanking fra fjellet, slakting av lam, parring, innsett til inneforing.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvor lenge varer drektigheten hos sau?',
        options: [
          { id: 'a', text: 'Ca. 3 maneder', isCorrect: false },
          { id: 'b', text: 'Ca. 5 maneder', isCorrect: true },
          { id: 'c', text: 'Ca. 7 maneder', isCorrect: false },
          { id: 'd', text: 'Ca. 9 maneder', isCorrect: false },
        ],
        solution: 'Drektigheten hos sau varer ca. 5 maneder (147 dager).',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'naturbruk-vg1-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er utmarksbeite, og hvorfor er det viktig i norsk sauehold?',
        solution: 'Utmarksbeite er beiteomrader i skog, fjell og hei som ikke er dyrket jord. Det er viktig fordi det utnytter forressurser mennesker ikke kan bruke, holder kulturlandskapet apent, og gir god dyrevelferd med naturlig atferd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-4-3-tip-1',
      type: 'tip',
      title: 'God lamming',
      content: `Under lammingen er det viktig at lammet far ramelk (kolostrum) innen 2-4 timer etter fodsel. Ramelken inneholder antistoffer som beskytter lammet mot sykdom. Sjekk at lammet dier aktivt!`,
    },
    {
      id: 'naturbruk-vg1-4-3-example-1',
      type: 'example',
      title: 'Eksempel: Arshjul for sauebonde',
      problem: 'Hvordan ser et typisk ar ut for en sauebonde?',
      solution: `**Arshjul for sauebonde:**

**Januar-februar:** Inneforing, soyene er drektige
**Mars-mai:** Lamming, klipping, slipp pa varbeite
**Juni-august:** Sau og lam pa utmarksbeite
**September:** Sanking fra fjellet, slakting av lam
**Oktober-november:** Parring, innsett til inneforing
**Desember:** Roligere periode, foring og tilsyn`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er de viktigste forskjellene mellom sau og geit?',
        solution: 'Sau: Produserer hovedsakelig kjott og ull, sterk flokkinstinkt, beiter mest gras. Geit: Produserer melk til ost, mer nysgjerrig og selvstendig, beiter mer variert (busker, kvister), bedre klatrer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-4-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er sanking?',
        options: [
          { id: 'a', text: 'A klippe ull av sauen', isCorrect: false },
          { id: 'b', text: 'A samle inn sau fra utmarksbeite om hosten', isCorrect: true },
          { id: 'c', text: 'A gi for til sauen', isCorrect: false },
          { id: 'd', text: 'A pare sau og vaer', isCorrect: false },
        ],
        solution: 'Sanking er innhenting av sau og lam fra utmarksbeite om hosten.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 4.4 Gris, fjorfe og andre husdyr
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_4_4: TextbookChapter = {
  id: 'naturbruk-vg1-4-4',
  courseId: 'naturbruk-vg1',
  chapterNumber: '4.4',
  title: 'Gris, fjorfe og andre husdyr',
  description: 'Hold og produksjon av gris, hons og andre husdyr.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive svine- og fjorfehold',
    'gjore rede for ulike husdyrproduksjoner',
  ],
  content: [
    {
      id: 'naturbruk-vg1-4-4-intro',
      type: 'text',
      content: `## Enmagede husdyr - gris og fjorfe

Gris og fjorfe er enmagede dyr som ikke kan utnytte grovfor like effektivt som drovtyggere. De fores hovedsakelig med kraftfor basert pa korn.

**Svinehold i Norge:**
- Ca. 2000 svinebruk
- Ca. 1,5 millioner slaktegris per ar
- Strenge krav til dyrevelferd

**Fjorfe i Norge:**
- Ca. 4 millioner verpehons
- Ca. 70 millioner slaktekyllinger per ar
- Bade egg- og kjottproduksjon`,
    },
    {
      id: 'naturbruk-vg1-4-4-def-1',
      type: 'definition',
      title: 'Enmaget dyr',
      content: `Enmaget (monogastrisk) dyr har en enkel magesekk i motsetning til drovtyggeres fire magerom. Gris, fjorfe og mennesker er enmagede. De kan ikke fordoye grovfor effektivt og trenger energirik mat som korn.`,
    },
    {
      id: 'naturbruk-vg1-4-4-text-1',
      type: 'text',
      content: `## Grisen

**Biologi:**
- Intelligent og sosial
- Nysgjerrig og utforskende
- Behov for a rote i jord/stro

**Reproduksjon:**
- Drektighet: 114 dager (3 mnd, 3 uker, 3 dager)
- 10-14 grisunger per kull
- 2-2,5 kull per purke per ar

**Dyrevelferd:**
- Krav om losdrift for purker
- Stro og rotemateriale
- Sosial kontakt
- Norge har strenge krav vs. EU`,
    },
    {
      id: 'naturbruk-vg1-4-4-def-2',
      type: 'definition',
      title: 'Frittgaende hons',
      content: `Frittgaende hons er honer som kan bevege seg fritt i et storre omrade i stedet for a vaere innestengt i bur. De har tilgang til stro, vagler (sittepinner) og verpekaer.`,
    },
    {
      id: 'naturbruk-vg1-4-4-text-2',
      type: 'text',
      content: `## Fjorfe

**Verpehons:**
- Produserer egg til konsum
- Ca. 300 egg per hone per ar
- Ulike oppstallingsformer

**Oppstallingsformer for hons:**
- Frittgaende innendors (mest i Norge)
- Frittgaende utendors (friland)
- Okologisk (med uteareal)

**Slaktekylling:**
- Hurtigvoksende raser
- Slakteklar pa 30-35 dager
- Store besetninger`,
    },
    {
      id: 'naturbruk-vg1-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom drovtyggere og enmagede dyr?',
        solution: 'Drovtyggere har fire magerom og kan fordoye grovfor som gras. Enmagede dyr har enkel magesekk og trenger energirik mat som korn - de kan ikke utnytte grovfor effektivt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvor lang er drektigheten hos gris?',
        options: [
          { id: 'a', text: 'Ca. 2 maneder', isCorrect: false },
          { id: 'b', text: 'Ca. 4 maneder (114 dager)', isCorrect: true },
          { id: 'c', text: 'Ca. 6 maneder', isCorrect: false },
          { id: 'd', text: 'Ca. 9 maneder', isCorrect: false },
        ],
        solution: 'Drektigheten hos gris er ca. 114 dager (3 mnd, 3 uker, 3 dager).',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'naturbruk-vg1-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv tre viktige atferdsbehov hos gris.',
        solution: '1) Roting - behov for a rote med trynet i jord eller stro. 2) Sosial kontakt - gris er flokkdyr. 3) Skille ligg- og gjodselplass - grisen er renlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-4-4-tip-1',
      type: 'tip',
      title: 'Les merkingen pa egget',
      content: `Tallet pa egget forteller om produksjonsformen: 0 = okologisk, 1 = friland, 2 = frittgaende innendors. NO betyr norsk produksjon. Velg egg etter hva som er viktig for deg!`,
    },
    {
      id: 'naturbruk-vg1-4-4-example-1',
      type: 'example',
      title: 'Eksempel: Norsk vs. EU dyrevelferd for gris',
      problem: 'Hvordan skiller norsk dyrevelferd for gris seg fra EU?',
      solution: `**Norge har strengere krav:**

**Purker:** Norge krever losdrift hele drektigheten, EU tillater fiksering.
**Kastrering:** Norge krever bedovelse, mange EU-land tillater uten.
**Halekupering:** Forbudt i Norge, tillatt i mange EU-land.
**Stro:** Krav i Norge, varierende i EU.

Disse forskjellene gjor norsk svinekjott dyrere a produsere, men med bedre dyrevelferd.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva betyr det at honer er frittgaende?',
        options: [
          { id: 'a', text: 'At de gar fritt utendors hele aret', isCorrect: false },
          { id: 'b', text: 'At de kan bevege seg fritt og ikke sitter i bur', isCorrect: true },
          { id: 'c', text: 'At de far fri mat', isCorrect: false },
          { id: 'd', text: 'At de er okologiske', isCorrect: false },
        ],
        solution: 'Frittgaende hons kan bevege seg fritt i stedet for a vaere i bur.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'naturbruk-vg1-4-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Nevn to mater norsk dyrevelferd for gris er strengere enn i EU.',
        solution: '1) Purker ma ga i losdrift hele drektigheten i Norge, EU tillater fiksering. 2) Kastrering ma gjores med bedovelse i Norge, tillates uten bedovelse i mange EU-land.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 4.5 Dyrehelse og sykdomsforebygging
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_4_5: TextbookChapter = {
  id: 'naturbruk-vg1-4-5',
  courseId: 'naturbruk-vg1',
  chapterNumber: '4.5',
  title: 'Dyrehelse og sykdomsforebygging',
  description: 'Helse, sykdommer og forebyggende arbeid i husdyrhold.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for vanlige sykdommer hos husdyr',
    'forklare prinsipper for forebygging av sykdom',
  ],
  content: [
    {
      id: 'naturbruk-vg1-4-5-intro',
      type: 'text',
      content: `## God helse - grunnlaget for god produksjon

Friske dyr er en forutsetning for god dyrevelferd og lonnsom produksjon. Forebygging er alltid bedre enn behandling. Norge har svaert god dyrehelse sammenlignet med andre land.

**Norsk dyrehelse:**
- Fri for mange alvorlige sykdommer
- Lavt antibiotikaforbruk
- Gode overvakingsprogrammer
- Streng importkontroll`,
    },
    {
      id: 'naturbruk-vg1-4-5-def-1',
      type: 'definition',
      title: 'Smittevern',
      content: `Smittevern er tiltak for a hindre at smittsomme sykdommer sprer seg. Det omfatter hygiene, karantene, vaksinering, skadedyrbekjempelse og kontroll av dyreflyt.`,
    },
    {
      id: 'naturbruk-vg1-4-5-text-1',
      type: 'text',
      content: `## Vanlige sykdommer

**Hos storfe:**
- Mastitt (jurbetennelse)
- Ketose (stoffskiftesykdom)
- Klauvlidelser

**Hos sau:**
- Parasitter (rundorm, leverikt)
- Klauvsjuke (footrot)
- Mastitt

**Hos gris:**
- Leddbetennelse hos smagris
- Diare
- Lungebetennelse`,
    },
    {
      id: 'naturbruk-vg1-4-5-def-2',
      type: 'definition',
      title: 'Zoonose',
      content: `Zoonoser er sykdommer som kan smitte mellom dyr og mennesker. Eksempler er salmonella, campylobakter og ringorm. God hygiene ved handtering av dyr og mat er viktig.`,
    },
    {
      id: 'naturbruk-vg1-4-5-text-2',
      type: 'text',
      content: `## Forebygging av sykdom

**God drift:**
- Riktig foring og vannforsyning
- Godt miljo (ventilasjon, temperatur)
- Rent og tort underlag
- Tilstrekkelig plass

**Smittevern:**
- Smittesluse ved inngang
- Eget toy og fottoy i fjoset
- Begrenset besok
- Karantene ved innkjop

**Helsekontroll:**
- Daglig tilsyn
- Regelmessig veterinaerbesok
- Helseregistreringer`,
    },
    {
      id: 'naturbruk-vg1-4-5-def-3',
      type: 'definition',
      title: 'Antibiotikaresistens',
      content: `Antibiotikaresistens oppstar nar bakterier utvikler motstand mot antibiotika. Overforbruk og feil bruk oker resistens. Norge har lavt forbruk og lite resistens.`,
    },
    {
      id: 'naturbruk-vg1-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn tre vanlige sykdommer hos storfe og tre vanlige hos sau.',
        solution: 'Storfe: 1) Mastitt, 2) Ketose, 3) Klauvlidelser. Sau: 1) Parasitter, 2) Klauvsjuke (footrot), 3) Mastitt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-4-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er en zoonose?',
        options: [
          { id: 'a', text: 'En sykdom som bare rammer dyr', isCorrect: false },
          { id: 'b', text: 'En sykdom som kan smitte mellom dyr og mennesker', isCorrect: true },
          { id: 'c', text: 'En sykdom i dyrehager', isCorrect: false },
          { id: 'd', text: 'En dyresykdom fra utlandet', isCorrect: false },
        ],
        solution: 'Zoonoser er sykdommer som kan smitte mellom dyr og mennesker.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'naturbruk-vg1-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv fire forebyggende tiltak for god dyrehelse.',
        solution: '1) Riktig foring og vannforsyning. 2) Godt miljo med ventilasjon og rent underlag. 3) Smittevern med smittesluse og karantene ved innkjop. 4) Daglig tilsyn og observasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-4-5-tip-1',
      type: 'tip',
      title: 'Tidlig oppdagelse',
      content: `Jo tidligere du oppdager at et dyr er sykt, jo bedre er sjansen for vellykket behandling. Bruk tid pa a observere dyra hver dag - laer deg hva som er normalt!`,
    },
    {
      id: 'naturbruk-vg1-4-5-example-1',
      type: 'example',
      title: 'Eksempel: Tegn pa sykdom',
      problem: 'Hvordan kan du se at et dyr er sykt?',
      solution: `**Tegn pa sykdom:**
- Endret atferd (slapp, isolerer seg)
- Nedsatt appetitt
- Feber
- Endret avforing
- Synlige symptomer (hoste, halthet, utslett)
- Redusert produksjon (mindre melk, vekttap)`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-4-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan kan du se at et dyr er sykt?',
        solution: 'Tegn pa sykdom: 1) Endret atferd - slapp, isolerer seg. 2) Nedsatt appetitt. 3) Feber. 4) Endret avforing. 5) Synlige symptomer - hoste, halthet. 6) Redusert produksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-4-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-5-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hvorfor er lavt antibiotikaforbruk viktig?',
        options: [
          { id: 'a', text: 'For a spare penger', isCorrect: false },
          { id: 'b', text: 'For a unnga antibiotikaresistens', isCorrect: true },
          { id: 'c', text: 'Fordi antibiotika er forbudt', isCorrect: false },
          { id: 'd', text: 'For a produsere mer melk', isCorrect: false },
        ],
        solution: 'Lavt antibiotikaforbruk er viktig for a unnga antibiotikaresistens.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 4.6 Foring og forplanlegging
// ----------------------------------------------------------------------------

export const CHAPTER_NATURBRUK_VG1_4_6: TextbookChapter = {
  id: 'naturbruk-vg1-4-6',
  courseId: 'naturbruk-vg1',
  chapterNumber: '4.6',
  title: 'Foring og forplanlegging',
  description: 'For, naeringsbehov og forplanlegging for ulike husdyr.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for husdyras naeringsbehov',
    'forklare prinsipper for god foring',
  ],
  content: [
    {
      id: 'naturbruk-vg1-4-6-intro',
      type: 'text',
      content: `## Foring - a dekke dyras behov

Riktig foring er avgjorende for dyras helse, velferd og produksjon. Hvert dyr har behov for energi, protein, vitaminer, mineraler og vann.

**Grunnleggende prinsipper:**
- Dekke vedlikeholdsbehovet forst
- Tillegg for produksjon (melk, tilvekst)
- Balanse mellom naeringsstoffer
- Tilgang til rent vann`,
    },
    {
      id: 'naturbruk-vg1-4-6-def-1',
      type: 'definition',
      title: 'Vedlikeholdsbehov',
      content: `Vedlikeholdsbehovet er den mengden naering et dyr trenger for a opprettholde kroppsvekt og normale livsfunksjoner uten a produsere noe ekstra. All produksjon kommer i tillegg.`,
    },
    {
      id: 'naturbruk-vg1-4-6-text-1',
      type: 'text',
      content: `## Formidler

**Grovfor:**
- Surfor - ensilert gras
- Hoy - torket gras
- Beite - ferskt gras
- Viktigst for drovtyggere

**Kraftfor:**
- Korn (bygg, hvete, havre)
- Proteinvekster (soya, raps)
- Industrielt framstilt kraftfor
- Hoy energi- og proteinkonsentrasjon`,
    },
    {
      id: 'naturbruk-vg1-4-6-def-2',
      type: 'definition',
      title: 'FEm (forenhet melk)',
      content: `FEm er en enhet for energiinnhold i for, basert pa energiverdien i 1 kg bygg til melkeproduksjon. Det brukes for a sammenligne og beregne for til drovtyggere.`,
    },
    {
      id: 'naturbruk-vg1-4-6-text-2',
      type: 'text',
      content: `## Foring av ulike dyreslag

**Melkeku:**
- Grovfor som basis (appetittforing)
- Kraftfor etter ytelse
- 80-150 liter vann daglig

**Sau:**
- Grovfor (surfor, hoy, beite)
- Lite kraftfor unntatt for lamming
- Utmarksbeite om sommeren

**Gris:**
- Kraftfor som hovedfor
- Kan ikke utnytte grovfor effektivt

**Fjorfe:**
- Kraftfor (ferdigfor)
- Tilpasset verpehons eller slaktekylling`,
    },
    {
      id: 'naturbruk-vg1-4-6-def-3',
      type: 'definition',
      title: 'Holdvurdering',
      content: `Holdvurdering (BCS) er en metode for a vurdere dyrets ernaeringstilstand ved a kjenne og se pa fettvev pa kroppen. Skalaen gar fra 1 (avmagret) til 5 (overvektig).`,
    },
    {
      id: 'naturbruk-vg1-4-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom grovfor og kraftfor?',
        solution: 'Grovfor (surfor, hoy, beite) har hoyt fiberinnhold og lavere energikonsentrasjon, viktig for drovtyggere. Kraftfor (korn, soya) har hoy konsentrasjon av energi og protein, brukes som tilskudd eller hovedfor til enmagede dyr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-4-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-6-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er vedlikeholdsbehov?',
        options: [
          { id: 'a', text: 'Behovet for for til melkeproduksjon', isCorrect: false },
          { id: 'b', text: 'Naering for a opprettholde kropp uten a produsere noe', isCorrect: true },
          { id: 'c', text: 'Behovet for a vedlikeholde fjoset', isCorrect: false },
          { id: 'd', text: 'Minimum formengde per dag', isCorrect: false },
        ],
        solution: 'Vedlikeholdsbehovet er naering for a opprettholde kropp og livsfunksjoner uten ekstra produksjon.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'naturbruk-vg1-4-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv hvordan foringen av en melkeku skiller seg fra foringen av en sau.',
        solution: 'Melkeku: Hoyt naeringsbehov, grovfor som basis med kraftfor etter ytelse, 80-150 liter vann daglig. Sau: Lavere naeringsbehov, hovedsakelig grovfor, lite kraftfor (mest for lamming), utnytter utmarksbeite.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-4-6-tip-1',
      type: 'tip',
      title: 'For etter behov',
      content: `Et friskt dyr med god appetitt skal ha tilgang til nok for. Men var obs pa at overforing ogsa er et problem - det kan gi forfetning og stoffskiftesykdommer. Laer deg a vurdere dyras hold regelmessig!`,
    },
    {
      id: 'naturbruk-vg1-4-6-example-1',
      type: 'example',
      title: 'Eksempel: Grovfor vs. kraftfor',
      problem: 'Hva er forskjellen mellom grovfor og kraftfor?',
      solution: `**Grovfor:**
- Surfor, hoy, beite
- Hoyt fiberinnhold
- Lavere energikonsentrasjon
- Viktig for drovtyggere

**Kraftfor:**
- Korn, soya, ferdigfor
- Hoy konsentrasjon av energi og protein
- Lavt fiberinnhold
- Brukes som tilskudd eller hovedfor`,
    },
    // --- Samleoppgaver ---
    {
      id: 'naturbruk-vg1-4-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er holdvurdering, og hvorfor er det viktig?',
        solution: 'Holdvurdering er a vurdere dyrets ernaeringstilstand ved a se og kjenne pa fettvev. Skala 1-5. Viktig for a se om foringen er riktig, avslore under- eller overforing, og tilpasse foring til produksjonsstadium.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-4-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-6-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er FEm?',
        options: [
          { id: 'a', text: 'En type kraftfor', isCorrect: false },
          { id: 'b', text: 'En enhet for energiinnhold i for', isCorrect: true },
          { id: 'c', text: 'En foringsmetode', isCorrect: false },
          { id: 'd', text: 'Et mal pa proteininnhold', isCorrect: false },
        ],
        solution: 'FEm (forenhet melk) er en enhet for energiinnhold i for til drovtyggere.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NATURBRUK_VG1_DEL2_CHAPTERS: TextbookChapter[] = [
  // Kapittel 3: Landbruk og planteproduksjon
  CHAPTER_NATURBRUK_VG1_3_1,
  CHAPTER_NATURBRUK_VG1_3_2,
  CHAPTER_NATURBRUK_VG1_3_3,
  CHAPTER_NATURBRUK_VG1_3_4,
  CHAPTER_NATURBRUK_VG1_3_5,
  CHAPTER_NATURBRUK_VG1_3_6,
  CHAPTER_NATURBRUK_VG1_3_7,
  CHAPTER_NATURBRUK_VG1_3_8,
  // Kapittel 4: Dyrehold og dyrevelferd
  CHAPTER_NATURBRUK_VG1_4_1,
  CHAPTER_NATURBRUK_VG1_4_2,
  CHAPTER_NATURBRUK_VG1_4_3,
  CHAPTER_NATURBRUK_VG1_4_4,
  CHAPTER_NATURBRUK_VG1_4_5,
  CHAPTER_NATURBRUK_VG1_4_6,
];
